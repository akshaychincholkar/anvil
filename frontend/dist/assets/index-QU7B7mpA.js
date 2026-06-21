(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();var Pg={exports:{}},fs={},$g={exports:{}},It={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yo=Symbol.for("react.element"),Ap=Symbol.for("react.portal"),Mp=Symbol.for("react.fragment"),Wp=Symbol.for("react.strict_mode"),_p=Symbol.for("react.profiler"),Lp=Symbol.for("react.provider"),Pp=Symbol.for("react.context"),$p=Symbol.for("react.forward_ref"),Op=Symbol.for("react.suspense"),Np=Symbol.for("react.memo"),Hp=Symbol.for("react.lazy"),Vd=Symbol.iterator;function Gp(t){return t===null||typeof t!="object"?null:(t=Vd&&t[Vd]||t["@@iterator"],typeof t=="function"?t:null)}var Og={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ng=Object.assign,Hg={};function Qn(t,e,r){this.props=t,this.context=e,this.refs=Hg,this.updater=r||Og}Qn.prototype.isReactComponent={};Qn.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Qn.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Gg(){}Gg.prototype=Qn.prototype;function Fa(t,e,r){this.props=t,this.context=e,this.refs=Hg,this.updater=r||Og}var Aa=Fa.prototype=new Gg;Aa.constructor=Fa;Ng(Aa,Qn.prototype);Aa.isPureReactComponent=!0;var Yd=Array.isArray,Ug=Object.prototype.hasOwnProperty,Ma={current:null},Vg={key:!0,ref:!0,__self:!0,__source:!0};function Yg(t,e,r){var o,i={},s=null,l=null;if(e!=null)for(o in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(s=""+e.key),e)Ug.call(e,o)&&!Vg.hasOwnProperty(o)&&(i[o]=e[o]);var a=arguments.length-2;if(a===1)i.children=r;else if(1<a){for(var d=Array(a),c=0;c<a;c++)d[c]=arguments[c+2];i.children=d}if(t&&t.defaultProps)for(o in a=t.defaultProps,a)i[o]===void 0&&(i[o]=a[o]);return{$$typeof:Yo,type:t,key:s,ref:l,props:i,_owner:Ma.current}}function Up(t,e){return{$$typeof:Yo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Wa(t){return typeof t=="object"&&t!==null&&t.$$typeof===Yo}function Vp(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var Qd=/\/+/g;function Ls(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Vp(""+t.key):e.toString(36)}function Bi(t,e,r,o,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case Yo:case Ap:l=!0}}if(l)return l=t,i=i(l),t=o===""?"."+Ls(l,0):o,Yd(i)?(r="",t!=null&&(r=t.replace(Qd,"$&/")+"/"),Bi(i,e,r,"",function(c){return c})):i!=null&&(Wa(i)&&(i=Up(i,r+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Qd,"$&/")+"/")+t)),e.push(i)),1;if(l=0,o=o===""?".":o+":",Yd(t))for(var a=0;a<t.length;a++){s=t[a];var d=o+Ls(s,a);l+=Bi(s,e,r,d,i)}else if(d=Gp(t),typeof d=="function")for(t=d.call(t),a=0;!(s=t.next()).done;)s=s.value,d=o+Ls(s,a++),l+=Bi(s,e,r,d,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function ei(t,e,r){if(t==null)return t;var o=[],i=0;return Bi(t,o,"","",function(s){return e.call(r,s,i++)}),o}function Yp(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var me={current:null},Di={transition:null},Qp={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:Di,ReactCurrentOwner:Ma};function Qg(){throw Error("act(...) is not supported in production builds of React.")}It.Children={map:ei,forEach:function(t,e,r){ei(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return ei(t,function(){e++}),e},toArray:function(t){return ei(t,function(e){return e})||[]},only:function(t){if(!Wa(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};It.Component=Qn;It.Fragment=Mp;It.Profiler=_p;It.PureComponent=Fa;It.StrictMode=Wp;It.Suspense=Op;It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qp;It.act=Qg;It.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var o=Ng({},t.props),i=t.key,s=t.ref,l=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,l=Ma.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(d in e)Ug.call(e,d)&&!Vg.hasOwnProperty(d)&&(o[d]=e[d]===void 0&&a!==void 0?a[d]:e[d])}var d=arguments.length-2;if(d===1)o.children=r;else if(1<d){a=Array(d);for(var c=0;c<d;c++)a[c]=arguments[c+2];o.children=a}return{$$typeof:Yo,type:t.type,key:i,ref:s,props:o,_owner:l}};It.createContext=function(t){return t={$$typeof:Pp,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Lp,_context:t},t.Consumer=t};It.createElement=Yg;It.createFactory=function(t){var e=Yg.bind(null,t);return e.type=t,e};It.createRef=function(){return{current:null}};It.forwardRef=function(t){return{$$typeof:$p,render:t}};It.isValidElement=Wa;It.lazy=function(t){return{$$typeof:Hp,_payload:{_status:-1,_result:t},_init:Yp}};It.memo=function(t,e){return{$$typeof:Np,type:t,compare:e===void 0?null:e}};It.startTransition=function(t){var e=Di.transition;Di.transition={};try{t()}finally{Di.transition=e}};It.unstable_act=Qg;It.useCallback=function(t,e){return me.current.useCallback(t,e)};It.useContext=function(t){return me.current.useContext(t)};It.useDebugValue=function(){};It.useDeferredValue=function(t){return me.current.useDeferredValue(t)};It.useEffect=function(t,e){return me.current.useEffect(t,e)};It.useId=function(){return me.current.useId()};It.useImperativeHandle=function(t,e,r){return me.current.useImperativeHandle(t,e,r)};It.useInsertionEffect=function(t,e){return me.current.useInsertionEffect(t,e)};It.useLayoutEffect=function(t,e){return me.current.useLayoutEffect(t,e)};It.useMemo=function(t,e){return me.current.useMemo(t,e)};It.useReducer=function(t,e,r){return me.current.useReducer(t,e,r)};It.useRef=function(t){return me.current.useRef(t)};It.useState=function(t){return me.current.useState(t)};It.useSyncExternalStore=function(t,e,r){return me.current.useSyncExternalStore(t,e,r)};It.useTransition=function(){return me.current.useTransition()};It.version="18.3.1";$g.exports=It;var u=$g.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp=u,Xp=Symbol.for("react.element"),qp=Symbol.for("react.fragment"),Jp=Object.prototype.hasOwnProperty,Zp=Kp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tm={key:!0,ref:!0,__self:!0,__source:!0};function Kg(t,e,r){var o,i={},s=null,l=null;r!==void 0&&(s=""+r),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(l=e.ref);for(o in e)Jp.call(e,o)&&!tm.hasOwnProperty(o)&&(i[o]=e[o]);if(t&&t.defaultProps)for(o in e=t.defaultProps,e)i[o]===void 0&&(i[o]=e[o]);return{$$typeof:Xp,type:t,key:s,ref:l,props:i,_owner:Zp.current}}fs.Fragment=qp;fs.jsx=Kg;fs.jsxs=Kg;Pg.exports=fs;var n=Pg.exports,Xg={exports:{}},ze={},qg={exports:{}},Jg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,M){var V=A.length;A.push(M);t:for(;0<V;){var W=V-1>>>1,R=A[W];if(0<i(R,M))A[W]=M,A[V]=R,V=W;else break t}}function r(A){return A.length===0?null:A[0]}function o(A){if(A.length===0)return null;var M=A[0],V=A.pop();if(V!==M){A[0]=V;t:for(var W=0,R=A.length,m=R>>>1;W<m;){var G=2*(W+1)-1,lt=A[G],rt=G+1,L=A[rt];if(0>i(lt,V))rt<R&&0>i(L,lt)?(A[W]=L,A[rt]=V,W=rt):(A[W]=lt,A[G]=V,W=G);else if(rt<R&&0>i(L,V))A[W]=L,A[rt]=V,W=rt;else break t}}return M}function i(A,M){var V=A.sortIndex-M.sortIndex;return V!==0?V:A.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var l=Date,a=l.now();t.unstable_now=function(){return l.now()-a}}var d=[],c=[],p=1,y=null,h=3,w=!1,v=!1,k=!1,z=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(A){for(var M=r(c);M!==null;){if(M.callback===null)o(c);else if(M.startTime<=A)o(c),M.sortIndex=M.expirationTime,e(d,M);else break;M=r(c)}}function C(A){if(k=!1,b(A),!v)if(r(d)!==null)v=!0,et(S);else{var M=r(c);M!==null&&D(C,M.startTime-A)}}function S(A,M){v=!1,k&&(k=!1,f(Y),Y=-1),w=!0;var V=h;try{for(b(M),y=r(d);y!==null&&(!(y.expirationTime>M)||A&&!j());){var W=y.callback;if(typeof W=="function"){y.callback=null,h=y.priorityLevel;var R=W(y.expirationTime<=M);M=t.unstable_now(),typeof R=="function"?y.callback=R:y===r(d)&&o(d),b(M)}else o(d);y=r(d)}if(y!==null)var m=!0;else{var G=r(c);G!==null&&D(C,G.startTime-M),m=!1}return m}finally{y=null,h=V,w=!1}}var B=!1,O=null,Y=-1,F=5,N=-1;function j(){return!(t.unstable_now()-N<F)}function T(){if(O!==null){var A=t.unstable_now();N=A;var M=!0;try{M=O(!0,A)}finally{M?x():(B=!1,O=null)}}else B=!1}var x;if(typeof g=="function")x=function(){g(T)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,bt=U.port2;U.port1.onmessage=T,x=function(){bt.postMessage(null)}}else x=function(){z(T,0)};function et(A){O=A,B||(B=!0,x())}function D(A,M){Y=z(function(){A(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){v||w||(v=!0,et(S))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return r(d)},t.unstable_next=function(A){switch(h){case 1:case 2:case 3:var M=3;break;default:M=h}var V=h;h=M;try{return A()}finally{h=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,M){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var V=h;h=A;try{return M()}finally{h=V}},t.unstable_scheduleCallback=function(A,M,V){var W=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?W+V:W):V=W,A){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=V+R,A={id:p++,callback:M,priorityLevel:A,startTime:V,expirationTime:R,sortIndex:-1},V>W?(A.sortIndex=V,e(c,A),r(d)===null&&A===r(c)&&(k?(f(Y),Y=-1):k=!0,D(C,V-W))):(A.sortIndex=R,e(d,A),v||w||(v=!0,et(S))),A},t.unstable_shouldYield=j,t.unstable_wrapCallback=function(A){var M=h;return function(){var V=h;h=M;try{return A.apply(this,arguments)}finally{h=V}}}})(Jg);qg.exports=Jg;var em=qg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm=u,Ie=em;function J(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zg=new Set,Bo={};function ln(t,e){Pn(t,e),Pn(t+"Capture",e)}function Pn(t,e){for(Bo[t]=e,t=0;t<e.length;t++)Zg.add(e[t])}var pr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Il=Object.prototype.hasOwnProperty,nm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Kd={},Xd={};function om(t){return Il.call(Xd,t)?!0:Il.call(Kd,t)?!1:nm.test(t)?Xd[t]=!0:(Kd[t]=!0,!1)}function im(t,e,r,o){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function sm(t,e,r,o){if(e===null||typeof e>"u"||im(t,e,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function fe(t,e,r,o,i,s,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=o,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=l}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){oe[t]=new fe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];oe[e]=new fe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){oe[t]=new fe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){oe[t]=new fe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){oe[t]=new fe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){oe[t]=new fe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){oe[t]=new fe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){oe[t]=new fe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){oe[t]=new fe(t,5,!1,t.toLowerCase(),null,!1,!1)});var _a=/[\-:]([a-z])/g;function La(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(_a,La);oe[e]=new fe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(_a,La);oe[e]=new fe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(_a,La);oe[e]=new fe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){oe[t]=new fe(t,1,!1,t.toLowerCase(),null,!1,!1)});oe.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){oe[t]=new fe(t,1,!1,t.toLowerCase(),null,!0,!0)});function Pa(t,e,r,o){var i=oe.hasOwnProperty(e)?oe[e]:null;(i!==null?i.type!==0:o||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(sm(e,r,i,o)&&(r=null),o||i===null?om(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):i.mustUseProperty?t[i.propertyName]=r===null?i.type===3?!1:"":r:(e=i.attributeName,o=i.attributeNamespace,r===null?t.removeAttribute(e):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,o?t.setAttributeNS(o,e,r):t.setAttribute(e,r))))}var yr=rm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ri=Symbol.for("react.element"),xn=Symbol.for("react.portal"),kn=Symbol.for("react.fragment"),$a=Symbol.for("react.strict_mode"),zl=Symbol.for("react.profiler"),tu=Symbol.for("react.provider"),eu=Symbol.for("react.context"),Oa=Symbol.for("react.forward_ref"),Tl=Symbol.for("react.suspense"),El=Symbol.for("react.suspense_list"),Na=Symbol.for("react.memo"),xr=Symbol.for("react.lazy"),ru=Symbol.for("react.offscreen"),qd=Symbol.iterator;function ro(t){return t===null||typeof t!="object"?null:(t=qd&&t[qd]||t["@@iterator"],typeof t=="function"?t:null)}var Ht=Object.assign,Ps;function go(t){if(Ps===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);Ps=e&&e[1]||""}return`
`+Ps+t}var $s=!1;function Os(t,e){if(!t||$s)return"";$s=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var o=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){o=c}t.call(e.prototype)}else{try{throw Error()}catch(c){o=c}t()}}catch(c){if(c&&o&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=o.stack.split(`
`),l=i.length-1,a=s.length-1;1<=l&&0<=a&&i[l]!==s[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==s[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==s[a]){var d=`
`+i[l].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=l&&0<=a);break}}}finally{$s=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?go(t):""}function lm(t){switch(t.tag){case 5:return go(t.type);case 16:return go("Lazy");case 13:return go("Suspense");case 19:return go("SuspenseList");case 0:case 2:case 15:return t=Os(t.type,!1),t;case 11:return t=Os(t.type.render,!1),t;case 1:return t=Os(t.type,!0),t;default:return""}}function Bl(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case kn:return"Fragment";case xn:return"Portal";case zl:return"Profiler";case $a:return"StrictMode";case Tl:return"Suspense";case El:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case eu:return(t.displayName||"Context")+".Consumer";case tu:return(t._context.displayName||"Context")+".Provider";case Oa:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Na:return e=t.displayName||null,e!==null?e:Bl(t.type)||"Memo";case xr:e=t._payload,t=t._init;try{return Bl(t(e))}catch{}}return null}function am(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bl(e);case 8:return e===$a?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Wr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function nu(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function dm(t){var e=nu(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),o=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,s=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(l){o=""+l,s.call(this,l)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(l){o=""+l},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ni(t){t._valueTracker||(t._valueTracker=dm(t))}function ou(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),o="";return t&&(o=nu(t)?t.checked?"true":"false":t.value),t=o,t!==r?(e.setValue(t),!0):!1}function Hi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Dl(t,e){var r=e.checked;return Ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function Jd(t,e){var r=e.defaultValue==null?"":e.defaultValue,o=e.checked!=null?e.checked:e.defaultChecked;r=Wr(e.value!=null?e.value:r),t._wrapperState={initialChecked:o,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function iu(t,e){e=e.checked,e!=null&&Pa(t,"checked",e,!1)}function Rl(t,e){iu(t,e);var r=Wr(e.value),o=e.type;if(r!=null)o==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(o==="submit"||o==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Fl(t,e.type,r):e.hasOwnProperty("defaultValue")&&Fl(t,e.type,Wr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Zd(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var o=e.type;if(!(o!=="submit"&&o!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function Fl(t,e,r){(e!=="number"||Hi(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var uo=Array.isArray;function Rn(t,e,r,o){if(t=t.options,e){e={};for(var i=0;i<r.length;i++)e["$"+r[i]]=!0;for(r=0;r<t.length;r++)i=e.hasOwnProperty("$"+t[r].value),t[r].selected!==i&&(t[r].selected=i),i&&o&&(t[r].defaultSelected=!0)}else{for(r=""+Wr(r),e=null,i=0;i<t.length;i++){if(t[i].value===r){t[i].selected=!0,o&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Al(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(J(91));return Ht({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function tc(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(J(92));if(uo(r)){if(1<r.length)throw Error(J(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:Wr(r)}}function su(t,e){var r=Wr(e.value),o=Wr(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),o!=null&&(t.defaultValue=""+o)}function ec(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function lu(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ml(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?lu(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var oi,au=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,o,i){MSApp.execUnsafeLocalFunction(function(){return t(e,r,o,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(oi=oi||document.createElement("div"),oi.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=oi.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Do(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var vo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cm=["Webkit","ms","Moz","O"];Object.keys(vo).forEach(function(t){cm.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),vo[e]=vo[t]})});function du(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||vo.hasOwnProperty(t)&&vo[t]?(""+e).trim():e+"px"}function cu(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var o=r.indexOf("--")===0,i=du(r,e[r],o);r==="float"&&(r="cssFloat"),o?t.setProperty(r,i):t[r]=i}}var gm=Ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wl(t,e){if(e){if(gm[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(J(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(J(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(J(61))}if(e.style!=null&&typeof e.style!="object")throw Error(J(62))}}function _l(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ll=null;function Ha(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pl=null,Fn=null,An=null;function rc(t){if(t=Xo(t)){if(typeof Pl!="function")throw Error(J(280));var e=t.stateNode;e&&(e=ks(e),Pl(t.stateNode,t.type,e))}}function gu(t){Fn?An?An.push(t):An=[t]:Fn=t}function uu(){if(Fn){var t=Fn,e=An;if(An=Fn=null,rc(t),e)for(t=0;t<e.length;t++)rc(e[t])}}function bu(t,e){return t(e)}function pu(){}var Ns=!1;function mu(t,e,r){if(Ns)return t(e,r);Ns=!0;try{return bu(t,e,r)}finally{Ns=!1,(Fn!==null||An!==null)&&(pu(),uu())}}function Ro(t,e){var r=t.stateNode;if(r===null)return null;var o=ks(r);if(o===null)return null;r=o[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break t;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(J(231,e,typeof r));return r}var $l=!1;if(pr)try{var no={};Object.defineProperty(no,"passive",{get:function(){$l=!0}}),window.addEventListener("test",no,no),window.removeEventListener("test",no,no)}catch{$l=!1}function um(t,e,r,o,i,s,l,a,d){var c=Array.prototype.slice.call(arguments,3);try{e.apply(r,c)}catch(p){this.onError(p)}}var xo=!1,Gi=null,Ui=!1,Ol=null,bm={onError:function(t){xo=!0,Gi=t}};function pm(t,e,r,o,i,s,l,a,d){xo=!1,Gi=null,um.apply(bm,arguments)}function mm(t,e,r,o,i,s,l,a,d){if(pm.apply(this,arguments),xo){if(xo){var c=Gi;xo=!1,Gi=null}else throw Error(J(198));Ui||(Ui=!0,Ol=c)}}function an(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function fu(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function nc(t){if(an(t)!==t)throw Error(J(188))}function fm(t){var e=t.alternate;if(!e){if(e=an(t),e===null)throw Error(J(188));return e!==t?null:t}for(var r=t,o=e;;){var i=r.return;if(i===null)break;var s=i.alternate;if(s===null){if(o=i.return,o!==null){r=o;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===r)return nc(i),t;if(s===o)return nc(i),e;s=s.sibling}throw Error(J(188))}if(r.return!==o.return)r=i,o=s;else{for(var l=!1,a=i.child;a;){if(a===r){l=!0,r=i,o=s;break}if(a===o){l=!0,o=i,r=s;break}a=a.sibling}if(!l){for(a=s.child;a;){if(a===r){l=!0,r=s,o=i;break}if(a===o){l=!0,o=s,r=i;break}a=a.sibling}if(!l)throw Error(J(189))}}if(r.alternate!==o)throw Error(J(190))}if(r.tag!==3)throw Error(J(188));return r.stateNode.current===r?t:e}function hu(t){return t=fm(t),t!==null?yu(t):null}function yu(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=yu(t);if(e!==null)return e;t=t.sibling}return null}var vu=Ie.unstable_scheduleCallback,oc=Ie.unstable_cancelCallback,hm=Ie.unstable_shouldYield,ym=Ie.unstable_requestPaint,Yt=Ie.unstable_now,vm=Ie.unstable_getCurrentPriorityLevel,Ga=Ie.unstable_ImmediatePriority,xu=Ie.unstable_UserBlockingPriority,Vi=Ie.unstable_NormalPriority,xm=Ie.unstable_LowPriority,ku=Ie.unstable_IdlePriority,hs=null,er=null;function km(t){if(er&&typeof er.onCommitFiberRoot=="function")try{er.onCommitFiberRoot(hs,t,void 0,(t.current.flags&128)===128)}catch{}}var Ge=Math.clz32?Math.clz32:Sm,wm=Math.log,jm=Math.LN2;function Sm(t){return t>>>=0,t===0?32:31-(wm(t)/jm|0)|0}var ii=64,si=4194304;function bo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Yi(t,e){var r=t.pendingLanes;if(r===0)return 0;var o=0,i=t.suspendedLanes,s=t.pingedLanes,l=r&268435455;if(l!==0){var a=l&~i;a!==0?o=bo(a):(s&=l,s!==0&&(o=bo(s)))}else l=r&~i,l!==0?o=bo(l):s!==0&&(o=bo(s));if(o===0)return 0;if(e!==0&&e!==o&&!(e&i)&&(i=o&-o,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(o&4&&(o|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=o;0<e;)r=31-Ge(e),i=1<<r,o|=t[r],e&=~i;return o}function Cm(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Im(t,e){for(var r=t.suspendedLanes,o=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var l=31-Ge(s),a=1<<l,d=i[l];d===-1?(!(a&r)||a&o)&&(i[l]=Cm(a,e)):d<=e&&(t.expiredLanes|=a),s&=~a}}function Nl(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function wu(){var t=ii;return ii<<=1,!(ii&4194240)&&(ii=64),t}function Hs(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function Qo(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ge(e),t[e]=r}function zm(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var o=t.eventTimes;for(t=t.expirationTimes;0<r;){var i=31-Ge(r),s=1<<i;e[i]=0,o[i]=-1,t[i]=-1,r&=~s}}function Ua(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var o=31-Ge(r),i=1<<o;i&e|t[o]&e&&(t[o]|=e),r&=~i}}var Rt=0;function ju(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Su,Va,Cu,Iu,zu,Hl=!1,li=[],Tr=null,Er=null,Br=null,Fo=new Map,Ao=new Map,jr=[],Tm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ic(t,e){switch(t){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":Br=null;break;case"pointerover":case"pointerout":Fo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(e.pointerId)}}function oo(t,e,r,o,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:r,eventSystemFlags:o,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Xo(e),e!==null&&Va(e)),t):(t.eventSystemFlags|=o,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Em(t,e,r,o,i){switch(e){case"focusin":return Tr=oo(Tr,t,e,r,o,i),!0;case"dragenter":return Er=oo(Er,t,e,r,o,i),!0;case"mouseover":return Br=oo(Br,t,e,r,o,i),!0;case"pointerover":var s=i.pointerId;return Fo.set(s,oo(Fo.get(s)||null,t,e,r,o,i)),!0;case"gotpointercapture":return s=i.pointerId,Ao.set(s,oo(Ao.get(s)||null,t,e,r,o,i)),!0}return!1}function Tu(t){var e=Yr(t.target);if(e!==null){var r=an(e);if(r!==null){if(e=r.tag,e===13){if(e=fu(r),e!==null){t.blockedOn=e,zu(t.priority,function(){Cu(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ri(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=Gl(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);Ll=o,r.target.dispatchEvent(o),Ll=null}else return e=Xo(r),e!==null&&Va(e),t.blockedOn=r,!1;e.shift()}return!0}function sc(t,e,r){Ri(t)&&r.delete(e)}function Bm(){Hl=!1,Tr!==null&&Ri(Tr)&&(Tr=null),Er!==null&&Ri(Er)&&(Er=null),Br!==null&&Ri(Br)&&(Br=null),Fo.forEach(sc),Ao.forEach(sc)}function io(t,e){t.blockedOn===e&&(t.blockedOn=null,Hl||(Hl=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,Bm)))}function Mo(t){function e(i){return io(i,t)}if(0<li.length){io(li[0],t);for(var r=1;r<li.length;r++){var o=li[r];o.blockedOn===t&&(o.blockedOn=null)}}for(Tr!==null&&io(Tr,t),Er!==null&&io(Er,t),Br!==null&&io(Br,t),Fo.forEach(e),Ao.forEach(e),r=0;r<jr.length;r++)o=jr[r],o.blockedOn===t&&(o.blockedOn=null);for(;0<jr.length&&(r=jr[0],r.blockedOn===null);)Tu(r),r.blockedOn===null&&jr.shift()}var Mn=yr.ReactCurrentBatchConfig,Qi=!0;function Dm(t,e,r,o){var i=Rt,s=Mn.transition;Mn.transition=null;try{Rt=1,Ya(t,e,r,o)}finally{Rt=i,Mn.transition=s}}function Rm(t,e,r,o){var i=Rt,s=Mn.transition;Mn.transition=null;try{Rt=4,Ya(t,e,r,o)}finally{Rt=i,Mn.transition=s}}function Ya(t,e,r,o){if(Qi){var i=Gl(t,e,r,o);if(i===null)Zs(t,e,o,Ki,r),ic(t,o);else if(Em(i,t,e,r,o))o.stopPropagation();else if(ic(t,o),e&4&&-1<Tm.indexOf(t)){for(;i!==null;){var s=Xo(i);if(s!==null&&Su(s),s=Gl(t,e,r,o),s===null&&Zs(t,e,o,Ki,r),s===i)break;i=s}i!==null&&o.stopPropagation()}else Zs(t,e,o,null,r)}}var Ki=null;function Gl(t,e,r,o){if(Ki=null,t=Ha(o),t=Yr(t),t!==null)if(e=an(t),e===null)t=null;else if(r=e.tag,r===13){if(t=fu(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ki=t,null}function Eu(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vm()){case Ga:return 1;case xu:return 4;case Vi:case xm:return 16;case ku:return 536870912;default:return 16}default:return 16}}var Ir=null,Qa=null,Fi=null;function Bu(){if(Fi)return Fi;var t,e=Qa,r=e.length,o,i="value"in Ir?Ir.value:Ir.textContent,s=i.length;for(t=0;t<r&&e[t]===i[t];t++);var l=r-t;for(o=1;o<=l&&e[r-o]===i[s-o];o++);return Fi=i.slice(t,1<o?1-o:void 0)}function Ai(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ai(){return!0}function lc(){return!1}function Te(t){function e(r,o,i,s,l){this._reactName=r,this._targetInst=i,this.type=o,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(r=t[a],this[a]=r?r(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ai:lc,this.isPropagationStopped=lc,this}return Ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ai)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ai)},persist:function(){},isPersistent:ai}),e}var Kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ka=Te(Kn),Ko=Ht({},Kn,{view:0,detail:0}),Fm=Te(Ko),Gs,Us,so,ys=Ht({},Ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xa,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==so&&(so&&t.type==="mousemove"?(Gs=t.screenX-so.screenX,Us=t.screenY-so.screenY):Us=Gs=0,so=t),Gs)},movementY:function(t){return"movementY"in t?t.movementY:Us}}),ac=Te(ys),Am=Ht({},ys,{dataTransfer:0}),Mm=Te(Am),Wm=Ht({},Ko,{relatedTarget:0}),Vs=Te(Wm),_m=Ht({},Kn,{animationName:0,elapsedTime:0,pseudoElement:0}),Lm=Te(_m),Pm=Ht({},Kn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$m=Te(Pm),Om=Ht({},Kn,{data:0}),dc=Te(Om),Nm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Um(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Gm[t])?!!e[t]:!1}function Xa(){return Um}var Vm=Ht({},Ko,{key:function(t){if(t.key){var e=Nm[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ai(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Hm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xa,charCode:function(t){return t.type==="keypress"?Ai(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ai(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ym=Te(Vm),Qm=Ht({},ys,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cc=Te(Qm),Km=Ht({},Ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xa}),Xm=Te(Km),qm=Ht({},Kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jm=Te(qm),Zm=Ht({},ys,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),tf=Te(Zm),ef=[9,13,27,32],qa=pr&&"CompositionEvent"in window,ko=null;pr&&"documentMode"in document&&(ko=document.documentMode);var rf=pr&&"TextEvent"in window&&!ko,Du=pr&&(!qa||ko&&8<ko&&11>=ko),gc=" ",uc=!1;function Ru(t,e){switch(t){case"keyup":return ef.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fu(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var wn=!1;function nf(t,e){switch(t){case"compositionend":return Fu(e);case"keypress":return e.which!==32?null:(uc=!0,gc);case"textInput":return t=e.data,t===gc&&uc?null:t;default:return null}}function of(t,e){if(wn)return t==="compositionend"||!qa&&Ru(t,e)?(t=Bu(),Fi=Qa=Ir=null,wn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Du&&e.locale!=="ko"?null:e.data;default:return null}}var sf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!sf[t.type]:e==="textarea"}function Au(t,e,r,o){gu(o),e=Xi(e,"onChange"),0<e.length&&(r=new Ka("onChange","change",null,r,o),t.push({event:r,listeners:e}))}var wo=null,Wo=null;function lf(t){Uu(t,0)}function vs(t){var e=Cn(t);if(ou(e))return t}function af(t,e){if(t==="change")return e}var Mu=!1;if(pr){var Ys;if(pr){var Qs="oninput"in document;if(!Qs){var pc=document.createElement("div");pc.setAttribute("oninput","return;"),Qs=typeof pc.oninput=="function"}Ys=Qs}else Ys=!1;Mu=Ys&&(!document.documentMode||9<document.documentMode)}function mc(){wo&&(wo.detachEvent("onpropertychange",Wu),Wo=wo=null)}function Wu(t){if(t.propertyName==="value"&&vs(Wo)){var e=[];Au(e,Wo,t,Ha(t)),mu(lf,e)}}function df(t,e,r){t==="focusin"?(mc(),wo=e,Wo=r,wo.attachEvent("onpropertychange",Wu)):t==="focusout"&&mc()}function cf(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vs(Wo)}function gf(t,e){if(t==="click")return vs(e)}function uf(t,e){if(t==="input"||t==="change")return vs(e)}function bf(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ve=typeof Object.is=="function"?Object.is:bf;function _o(t,e){if(Ve(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),o=Object.keys(e);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var i=r[o];if(!Il.call(e,i)||!Ve(t[i],e[i]))return!1}return!0}function fc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hc(t,e){var r=fc(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=e&&o>=e)return{node:r,offset:e-t};t=o}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=fc(r)}}function _u(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?_u(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Lu(){for(var t=window,e=Hi();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=Hi(t.document)}return e}function Ja(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function pf(t){var e=Lu(),r=t.focusedElem,o=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&_u(r.ownerDocument.documentElement,r)){if(o!==null&&Ja(r)){if(e=o.start,t=o.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=r.textContent.length,s=Math.min(o.start,i);o=o.end===void 0?s:Math.min(o.end,i),!t.extend&&s>o&&(i=o,o=s,s=i),i=hc(r,s);var l=hc(r,o);i&&l&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>o?(t.addRange(e),t.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var mf=pr&&"documentMode"in document&&11>=document.documentMode,jn=null,Ul=null,jo=null,Vl=!1;function yc(t,e,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Vl||jn==null||jn!==Hi(o)||(o=jn,"selectionStart"in o&&Ja(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),jo&&_o(jo,o)||(jo=o,o=Xi(Ul,"onSelect"),0<o.length&&(e=new Ka("onSelect","select",null,e,r),t.push({event:e,listeners:o}),e.target=jn)))}function di(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var Sn={animationend:di("Animation","AnimationEnd"),animationiteration:di("Animation","AnimationIteration"),animationstart:di("Animation","AnimationStart"),transitionend:di("Transition","TransitionEnd")},Ks={},Pu={};pr&&(Pu=document.createElement("div").style,"AnimationEvent"in window||(delete Sn.animationend.animation,delete Sn.animationiteration.animation,delete Sn.animationstart.animation),"TransitionEvent"in window||delete Sn.transitionend.transition);function xs(t){if(Ks[t])return Ks[t];if(!Sn[t])return t;var e=Sn[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in Pu)return Ks[t]=e[r];return t}var $u=xs("animationend"),Ou=xs("animationiteration"),Nu=xs("animationstart"),Hu=xs("transitionend"),Gu=new Map,vc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(t,e){Gu.set(t,e),ln(e,[t])}for(var Xs=0;Xs<vc.length;Xs++){var qs=vc[Xs],ff=qs.toLowerCase(),hf=qs[0].toUpperCase()+qs.slice(1);Lr(ff,"on"+hf)}Lr($u,"onAnimationEnd");Lr(Ou,"onAnimationIteration");Lr(Nu,"onAnimationStart");Lr("dblclick","onDoubleClick");Lr("focusin","onFocus");Lr("focusout","onBlur");Lr(Hu,"onTransitionEnd");Pn("onMouseEnter",["mouseout","mouseover"]);Pn("onMouseLeave",["mouseout","mouseover"]);Pn("onPointerEnter",["pointerout","pointerover"]);Pn("onPointerLeave",["pointerout","pointerover"]);ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ln("onBeforeInput",["compositionend","keypress","textInput","paste"]);ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yf=new Set("cancel close invalid load scroll toggle".split(" ").concat(po));function xc(t,e,r){var o=t.type||"unknown-event";t.currentTarget=r,mm(o,e,void 0,t),t.currentTarget=null}function Uu(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],i=o.event;o=o.listeners;t:{var s=void 0;if(e)for(var l=o.length-1;0<=l;l--){var a=o[l],d=a.instance,c=a.currentTarget;if(a=a.listener,d!==s&&i.isPropagationStopped())break t;xc(i,a,c),s=d}else for(l=0;l<o.length;l++){if(a=o[l],d=a.instance,c=a.currentTarget,a=a.listener,d!==s&&i.isPropagationStopped())break t;xc(i,a,c),s=d}}}if(Ui)throw t=Ol,Ui=!1,Ol=null,t}function Wt(t,e){var r=e[ql];r===void 0&&(r=e[ql]=new Set);var o=t+"__bubble";r.has(o)||(Vu(e,t,2,!1),r.add(o))}function Js(t,e,r){var o=0;e&&(o|=4),Vu(r,t,o,e)}var ci="_reactListening"+Math.random().toString(36).slice(2);function Lo(t){if(!t[ci]){t[ci]=!0,Zg.forEach(function(r){r!=="selectionchange"&&(yf.has(r)||Js(r,!1,t),Js(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ci]||(e[ci]=!0,Js("selectionchange",!1,e))}}function Vu(t,e,r,o){switch(Eu(e)){case 1:var i=Dm;break;case 4:i=Rm;break;default:i=Ya}r=i.bind(null,e,r,t),i=void 0,!$l||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),o?i!==void 0?t.addEventListener(e,r,{capture:!0,passive:i}):t.addEventListener(e,r,!0):i!==void 0?t.addEventListener(e,r,{passive:i}):t.addEventListener(e,r,!1)}function Zs(t,e,r,o,i){var s=o;if(!(e&1)&&!(e&2)&&o!==null)t:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var a=o.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=o.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;l=l.return}for(;a!==null;){if(l=Yr(a),l===null)return;if(d=l.tag,d===5||d===6){o=s=l;continue t}a=a.parentNode}}o=o.return}mu(function(){var c=s,p=Ha(r),y=[];t:{var h=Gu.get(t);if(h!==void 0){var w=Ka,v=t;switch(t){case"keypress":if(Ai(r)===0)break t;case"keydown":case"keyup":w=Ym;break;case"focusin":v="focus",w=Vs;break;case"focusout":v="blur",w=Vs;break;case"beforeblur":case"afterblur":w=Vs;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=ac;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Mm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Xm;break;case $u:case Ou:case Nu:w=Lm;break;case Hu:w=Jm;break;case"scroll":w=Fm;break;case"wheel":w=tf;break;case"copy":case"cut":case"paste":w=$m;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=cc}var k=(e&4)!==0,z=!k&&t==="scroll",f=k?h!==null?h+"Capture":null:h;k=[];for(var g=c,b;g!==null;){b=g;var C=b.stateNode;if(b.tag===5&&C!==null&&(b=C,f!==null&&(C=Ro(g,f),C!=null&&k.push(Po(g,C,b)))),z)break;g=g.return}0<k.length&&(h=new w(h,v,null,r,p),y.push({event:h,listeners:k}))}}if(!(e&7)){t:{if(h=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",h&&r!==Ll&&(v=r.relatedTarget||r.fromElement)&&(Yr(v)||v[mr]))break t;if((w||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,w?(v=r.relatedTarget||r.toElement,w=c,v=v?Yr(v):null,v!==null&&(z=an(v),v!==z||v.tag!==5&&v.tag!==6)&&(v=null)):(w=null,v=c),w!==v)){if(k=ac,C="onMouseLeave",f="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(k=cc,C="onPointerLeave",f="onPointerEnter",g="pointer"),z=w==null?h:Cn(w),b=v==null?h:Cn(v),h=new k(C,g+"leave",w,r,p),h.target=z,h.relatedTarget=b,C=null,Yr(p)===c&&(k=new k(f,g+"enter",v,r,p),k.target=b,k.relatedTarget=z,C=k),z=C,w&&v)e:{for(k=w,f=v,g=0,b=k;b;b=mn(b))g++;for(b=0,C=f;C;C=mn(C))b++;for(;0<g-b;)k=mn(k),g--;for(;0<b-g;)f=mn(f),b--;for(;g--;){if(k===f||f!==null&&k===f.alternate)break e;k=mn(k),f=mn(f)}k=null}else k=null;w!==null&&kc(y,h,w,k,!1),v!==null&&z!==null&&kc(y,z,v,k,!0)}}t:{if(h=c?Cn(c):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var S=af;else if(bc(h))if(Mu)S=uf;else{S=cf;var B=df}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=gf);if(S&&(S=S(t,c))){Au(y,S,r,p);break t}B&&B(t,h,c),t==="focusout"&&(B=h._wrapperState)&&B.controlled&&h.type==="number"&&Fl(h,"number",h.value)}switch(B=c?Cn(c):window,t){case"focusin":(bc(B)||B.contentEditable==="true")&&(jn=B,Ul=c,jo=null);break;case"focusout":jo=Ul=jn=null;break;case"mousedown":Vl=!0;break;case"contextmenu":case"mouseup":case"dragend":Vl=!1,yc(y,r,p);break;case"selectionchange":if(mf)break;case"keydown":case"keyup":yc(y,r,p)}var O;if(qa)t:{switch(t){case"compositionstart":var Y="onCompositionStart";break t;case"compositionend":Y="onCompositionEnd";break t;case"compositionupdate":Y="onCompositionUpdate";break t}Y=void 0}else wn?Ru(t,r)&&(Y="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(Y="onCompositionStart");Y&&(Du&&r.locale!=="ko"&&(wn||Y!=="onCompositionStart"?Y==="onCompositionEnd"&&wn&&(O=Bu()):(Ir=p,Qa="value"in Ir?Ir.value:Ir.textContent,wn=!0)),B=Xi(c,Y),0<B.length&&(Y=new dc(Y,t,null,r,p),y.push({event:Y,listeners:B}),O?Y.data=O:(O=Fu(r),O!==null&&(Y.data=O)))),(O=rf?nf(t,r):of(t,r))&&(c=Xi(c,"onBeforeInput"),0<c.length&&(p=new dc("onBeforeInput","beforeinput",null,r,p),y.push({event:p,listeners:c}),p.data=O))}Uu(y,e)})}function Po(t,e,r){return{instance:t,listener:e,currentTarget:r}}function Xi(t,e){for(var r=e+"Capture",o=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ro(t,r),s!=null&&o.unshift(Po(t,s,i)),s=Ro(t,e),s!=null&&o.push(Po(t,s,i))),t=t.return}return o}function mn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function kc(t,e,r,o,i){for(var s=e._reactName,l=[];r!==null&&r!==o;){var a=r,d=a.alternate,c=a.stateNode;if(d!==null&&d===o)break;a.tag===5&&c!==null&&(a=c,i?(d=Ro(r,s),d!=null&&l.unshift(Po(r,d,a))):i||(d=Ro(r,s),d!=null&&l.push(Po(r,d,a)))),r=r.return}l.length!==0&&t.push({event:e,listeners:l})}var vf=/\r\n?/g,xf=/\u0000|\uFFFD/g;function wc(t){return(typeof t=="string"?t:""+t).replace(vf,`
`).replace(xf,"")}function gi(t,e,r){if(e=wc(e),wc(t)!==e&&r)throw Error(J(425))}function qi(){}var Yl=null,Ql=null;function Kl(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Xl=typeof setTimeout=="function"?setTimeout:void 0,kf=typeof clearTimeout=="function"?clearTimeout:void 0,jc=typeof Promise=="function"?Promise:void 0,wf=typeof queueMicrotask=="function"?queueMicrotask:typeof jc<"u"?function(t){return jc.resolve(null).then(t).catch(jf)}:Xl;function jf(t){setTimeout(function(){throw t})}function tl(t,e){var r=e,o=0;do{var i=r.nextSibling;if(t.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(o===0){t.removeChild(i),Mo(e);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=i}while(r);Mo(e)}function Dr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Sc(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var Xn=Math.random().toString(36).slice(2),tr="__reactFiber$"+Xn,$o="__reactProps$"+Xn,mr="__reactContainer$"+Xn,ql="__reactEvents$"+Xn,Sf="__reactListeners$"+Xn,Cf="__reactHandles$"+Xn;function Yr(t){var e=t[tr];if(e)return e;for(var r=t.parentNode;r;){if(e=r[mr]||r[tr]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=Sc(t);t!==null;){if(r=t[tr])return r;t=Sc(t)}return e}t=r,r=t.parentNode}return null}function Xo(t){return t=t[tr]||t[mr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Cn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(J(33))}function ks(t){return t[$o]||null}var Jl=[],In=-1;function Pr(t){return{current:t}}function _t(t){0>In||(t.current=Jl[In],Jl[In]=null,In--)}function At(t,e){In++,Jl[In]=t.current,t.current=e}var _r={},ge=Pr(_r),ve=Pr(!1),Zr=_r;function $n(t,e){var r=t.type.contextTypes;if(!r)return _r;var o=t.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===e)return o.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in r)i[s]=e[s];return o&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function xe(t){return t=t.childContextTypes,t!=null}function Ji(){_t(ve),_t(ge)}function Cc(t,e,r){if(ge.current!==_r)throw Error(J(168));At(ge,e),At(ve,r)}function Yu(t,e,r){var o=t.stateNode;if(e=e.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var i in o)if(!(i in e))throw Error(J(108,am(t)||"Unknown",i));return Ht({},r,o)}function Zi(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||_r,Zr=ge.current,At(ge,t),At(ve,ve.current),!0}function Ic(t,e,r){var o=t.stateNode;if(!o)throw Error(J(169));r?(t=Yu(t,e,Zr),o.__reactInternalMemoizedMergedChildContext=t,_t(ve),_t(ge),At(ge,t)):_t(ve),At(ve,r)}var cr=null,ws=!1,el=!1;function Qu(t){cr===null?cr=[t]:cr.push(t)}function If(t){ws=!0,Qu(t)}function $r(){if(!el&&cr!==null){el=!0;var t=0,e=Rt;try{var r=cr;for(Rt=1;t<r.length;t++){var o=r[t];do o=o(!0);while(o!==null)}cr=null,ws=!1}catch(i){throw cr!==null&&(cr=cr.slice(t+1)),vu(Ga,$r),i}finally{Rt=e,el=!1}}return null}var zn=[],Tn=0,ts=null,es=0,De=[],Re=0,tn=null,gr=1,ur="";function Gr(t,e){zn[Tn++]=es,zn[Tn++]=ts,ts=t,es=e}function Ku(t,e,r){De[Re++]=gr,De[Re++]=ur,De[Re++]=tn,tn=t;var o=gr;t=ur;var i=32-Ge(o)-1;o&=~(1<<i),r+=1;var s=32-Ge(e)+i;if(30<s){var l=i-i%5;s=(o&(1<<l)-1).toString(32),o>>=l,i-=l,gr=1<<32-Ge(e)+i|r<<i|o,ur=s+t}else gr=1<<s|r<<i|o,ur=t}function Za(t){t.return!==null&&(Gr(t,1),Ku(t,1,0))}function td(t){for(;t===ts;)ts=zn[--Tn],zn[Tn]=null,es=zn[--Tn],zn[Tn]=null;for(;t===tn;)tn=De[--Re],De[Re]=null,ur=De[--Re],De[Re]=null,gr=De[--Re],De[Re]=null}var Ce=null,Se=null,Pt=!1,He=null;function Xu(t,e){var r=Fe(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function zc(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ce=t,Se=Dr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ce=t,Se=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=tn!==null?{id:gr,overflow:ur}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=Fe(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,Ce=t,Se=null,!0):!1;default:return!1}}function Zl(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ta(t){if(Pt){var e=Se;if(e){var r=e;if(!zc(t,e)){if(Zl(t))throw Error(J(418));e=Dr(r.nextSibling);var o=Ce;e&&zc(t,e)?Xu(o,r):(t.flags=t.flags&-4097|2,Pt=!1,Ce=t)}}else{if(Zl(t))throw Error(J(418));t.flags=t.flags&-4097|2,Pt=!1,Ce=t}}}function Tc(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ce=t}function ui(t){if(t!==Ce)return!1;if(!Pt)return Tc(t),Pt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Kl(t.type,t.memoizedProps)),e&&(e=Se)){if(Zl(t))throw qu(),Error(J(418));for(;e;)Xu(t,e),e=Dr(e.nextSibling)}if(Tc(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(J(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){Se=Dr(t.nextSibling);break t}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}Se=null}}else Se=Ce?Dr(t.stateNode.nextSibling):null;return!0}function qu(){for(var t=Se;t;)t=Dr(t.nextSibling)}function On(){Se=Ce=null,Pt=!1}function ed(t){He===null?He=[t]:He.push(t)}var zf=yr.ReactCurrentBatchConfig;function lo(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(J(309));var o=r.stateNode}if(!o)throw Error(J(147,t));var i=o,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(l){var a=i.refs;l===null?delete a[s]:a[s]=l},e._stringRef=s,e)}if(typeof t!="string")throw Error(J(284));if(!r._owner)throw Error(J(290,t))}return t}function bi(t,e){throw t=Object.prototype.toString.call(e),Error(J(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ec(t){var e=t._init;return e(t._payload)}function Ju(t){function e(f,g){if(t){var b=f.deletions;b===null?(f.deletions=[g],f.flags|=16):b.push(g)}}function r(f,g){if(!t)return null;for(;g!==null;)e(f,g),g=g.sibling;return null}function o(f,g){for(f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function i(f,g){return f=Mr(f,g),f.index=0,f.sibling=null,f}function s(f,g,b){return f.index=b,t?(b=f.alternate,b!==null?(b=b.index,b<g?(f.flags|=2,g):b):(f.flags|=2,g)):(f.flags|=1048576,g)}function l(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,g,b,C){return g===null||g.tag!==6?(g=al(b,f.mode,C),g.return=f,g):(g=i(g,b),g.return=f,g)}function d(f,g,b,C){var S=b.type;return S===kn?p(f,g,b.props.children,C,b.key):g!==null&&(g.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===xr&&Ec(S)===g.type)?(C=i(g,b.props),C.ref=lo(f,g,b),C.return=f,C):(C=Oi(b.type,b.key,b.props,null,f.mode,C),C.ref=lo(f,g,b),C.return=f,C)}function c(f,g,b,C){return g===null||g.tag!==4||g.stateNode.containerInfo!==b.containerInfo||g.stateNode.implementation!==b.implementation?(g=dl(b,f.mode,C),g.return=f,g):(g=i(g,b.children||[]),g.return=f,g)}function p(f,g,b,C,S){return g===null||g.tag!==7?(g=Jr(b,f.mode,C,S),g.return=f,g):(g=i(g,b),g.return=f,g)}function y(f,g,b){if(typeof g=="string"&&g!==""||typeof g=="number")return g=al(""+g,f.mode,b),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ri:return b=Oi(g.type,g.key,g.props,null,f.mode,b),b.ref=lo(f,null,g),b.return=f,b;case xn:return g=dl(g,f.mode,b),g.return=f,g;case xr:var C=g._init;return y(f,C(g._payload),b)}if(uo(g)||ro(g))return g=Jr(g,f.mode,b,null),g.return=f,g;bi(f,g)}return null}function h(f,g,b,C){var S=g!==null?g.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return S!==null?null:a(f,g,""+b,C);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ri:return b.key===S?d(f,g,b,C):null;case xn:return b.key===S?c(f,g,b,C):null;case xr:return S=b._init,h(f,g,S(b._payload),C)}if(uo(b)||ro(b))return S!==null?null:p(f,g,b,C,null);bi(f,b)}return null}function w(f,g,b,C,S){if(typeof C=="string"&&C!==""||typeof C=="number")return f=f.get(b)||null,a(g,f,""+C,S);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case ri:return f=f.get(C.key===null?b:C.key)||null,d(g,f,C,S);case xn:return f=f.get(C.key===null?b:C.key)||null,c(g,f,C,S);case xr:var B=C._init;return w(f,g,b,B(C._payload),S)}if(uo(C)||ro(C))return f=f.get(b)||null,p(g,f,C,S,null);bi(g,C)}return null}function v(f,g,b,C){for(var S=null,B=null,O=g,Y=g=0,F=null;O!==null&&Y<b.length;Y++){O.index>Y?(F=O,O=null):F=O.sibling;var N=h(f,O,b[Y],C);if(N===null){O===null&&(O=F);break}t&&O&&N.alternate===null&&e(f,O),g=s(N,g,Y),B===null?S=N:B.sibling=N,B=N,O=F}if(Y===b.length)return r(f,O),Pt&&Gr(f,Y),S;if(O===null){for(;Y<b.length;Y++)O=y(f,b[Y],C),O!==null&&(g=s(O,g,Y),B===null?S=O:B.sibling=O,B=O);return Pt&&Gr(f,Y),S}for(O=o(f,O);Y<b.length;Y++)F=w(O,f,Y,b[Y],C),F!==null&&(t&&F.alternate!==null&&O.delete(F.key===null?Y:F.key),g=s(F,g,Y),B===null?S=F:B.sibling=F,B=F);return t&&O.forEach(function(j){return e(f,j)}),Pt&&Gr(f,Y),S}function k(f,g,b,C){var S=ro(b);if(typeof S!="function")throw Error(J(150));if(b=S.call(b),b==null)throw Error(J(151));for(var B=S=null,O=g,Y=g=0,F=null,N=b.next();O!==null&&!N.done;Y++,N=b.next()){O.index>Y?(F=O,O=null):F=O.sibling;var j=h(f,O,N.value,C);if(j===null){O===null&&(O=F);break}t&&O&&j.alternate===null&&e(f,O),g=s(j,g,Y),B===null?S=j:B.sibling=j,B=j,O=F}if(N.done)return r(f,O),Pt&&Gr(f,Y),S;if(O===null){for(;!N.done;Y++,N=b.next())N=y(f,N.value,C),N!==null&&(g=s(N,g,Y),B===null?S=N:B.sibling=N,B=N);return Pt&&Gr(f,Y),S}for(O=o(f,O);!N.done;Y++,N=b.next())N=w(O,f,Y,N.value,C),N!==null&&(t&&N.alternate!==null&&O.delete(N.key===null?Y:N.key),g=s(N,g,Y),B===null?S=N:B.sibling=N,B=N);return t&&O.forEach(function(T){return e(f,T)}),Pt&&Gr(f,Y),S}function z(f,g,b,C){if(typeof b=="object"&&b!==null&&b.type===kn&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case ri:t:{for(var S=b.key,B=g;B!==null;){if(B.key===S){if(S=b.type,S===kn){if(B.tag===7){r(f,B.sibling),g=i(B,b.props.children),g.return=f,f=g;break t}}else if(B.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===xr&&Ec(S)===B.type){r(f,B.sibling),g=i(B,b.props),g.ref=lo(f,B,b),g.return=f,f=g;break t}r(f,B);break}else e(f,B);B=B.sibling}b.type===kn?(g=Jr(b.props.children,f.mode,C,b.key),g.return=f,f=g):(C=Oi(b.type,b.key,b.props,null,f.mode,C),C.ref=lo(f,g,b),C.return=f,f=C)}return l(f);case xn:t:{for(B=b.key;g!==null;){if(g.key===B)if(g.tag===4&&g.stateNode.containerInfo===b.containerInfo&&g.stateNode.implementation===b.implementation){r(f,g.sibling),g=i(g,b.children||[]),g.return=f,f=g;break t}else{r(f,g);break}else e(f,g);g=g.sibling}g=dl(b,f.mode,C),g.return=f,f=g}return l(f);case xr:return B=b._init,z(f,g,B(b._payload),C)}if(uo(b))return v(f,g,b,C);if(ro(b))return k(f,g,b,C);bi(f,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,g!==null&&g.tag===6?(r(f,g.sibling),g=i(g,b),g.return=f,f=g):(r(f,g),g=al(b,f.mode,C),g.return=f,f=g),l(f)):r(f,g)}return z}var Nn=Ju(!0),Zu=Ju(!1),rs=Pr(null),ns=null,En=null,rd=null;function nd(){rd=En=ns=null}function od(t){var e=rs.current;_t(rs),t._currentValue=e}function ea(t,e,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,o!==null&&(o.childLanes|=e)):o!==null&&(o.childLanes&e)!==e&&(o.childLanes|=e),t===r)break;t=t.return}}function Wn(t,e){ns=t,rd=En=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ye=!0),t.firstContext=null)}function Me(t){var e=t._currentValue;if(rd!==t)if(t={context:t,memoizedValue:e,next:null},En===null){if(ns===null)throw Error(J(308));En=t,ns.dependencies={lanes:0,firstContext:t}}else En=En.next=t;return e}var Qr=null;function id(t){Qr===null?Qr=[t]:Qr.push(t)}function tb(t,e,r,o){var i=e.interleaved;return i===null?(r.next=r,id(e)):(r.next=i.next,i.next=r),e.interleaved=r,fr(t,o)}function fr(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var kr=!1;function sd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function eb(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function br(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Rr(t,e,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,Et&2){var i=o.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),o.pending=e,fr(t,r)}return i=o.interleaved,i===null?(e.next=e,id(o)):(e.next=i.next,i.next=e),o.interleaved=e,fr(t,r)}function Mi(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var o=e.lanes;o&=t.pendingLanes,r|=o,e.lanes=r,Ua(t,r)}}function Bc(t,e){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var i=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?i=s=l:s=s.next=l,r=r.next}while(r!==null);s===null?i=s=e:s=s.next=e}else i=s=e;r={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:o.shared,effects:o.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function os(t,e,r,o){var i=t.updateQueue;kr=!1;var s=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var d=a,c=d.next;d.next=null,l===null?s=c:l.next=c,l=d;var p=t.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==l&&(a===null?p.firstBaseUpdate=c:a.next=c,p.lastBaseUpdate=d))}if(s!==null){var y=i.baseState;l=0,p=c=d=null,a=s;do{var h=a.lane,w=a.eventTime;if((o&h)===h){p!==null&&(p=p.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});t:{var v=t,k=a;switch(h=e,w=r,k.tag){case 1:if(v=k.payload,typeof v=="function"){y=v.call(w,y,h);break t}y=v;break t;case 3:v.flags=v.flags&-65537|128;case 0:if(v=k.payload,h=typeof v=="function"?v.call(w,y,h):v,h==null)break t;y=Ht({},y,h);break t;case 2:kr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else w={eventTime:w,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(c=p=w,d=y):p=p.next=w,l|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(p===null&&(d=y),i.baseState=d,i.firstBaseUpdate=c,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do l|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);rn|=l,t.lanes=l,t.memoizedState=y}}function Dc(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var o=t[e],i=o.callback;if(i!==null){if(o.callback=null,o=r,typeof i!="function")throw Error(J(191,i));i.call(o)}}}var qo={},rr=Pr(qo),Oo=Pr(qo),No=Pr(qo);function Kr(t){if(t===qo)throw Error(J(174));return t}function ld(t,e){switch(At(No,e),At(Oo,t),At(rr,qo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ml(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ml(e,t)}_t(rr),At(rr,e)}function Hn(){_t(rr),_t(Oo),_t(No)}function rb(t){Kr(No.current);var e=Kr(rr.current),r=Ml(e,t.type);e!==r&&(At(Oo,t),At(rr,r))}function ad(t){Oo.current===t&&(_t(rr),_t(Oo))}var Ot=Pr(0);function is(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var rl=[];function dd(){for(var t=0;t<rl.length;t++)rl[t]._workInProgressVersionPrimary=null;rl.length=0}var Wi=yr.ReactCurrentDispatcher,nl=yr.ReactCurrentBatchConfig,en=0,Nt=null,Xt=null,Zt=null,ss=!1,So=!1,Ho=0,Tf=0;function le(){throw Error(J(321))}function cd(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!Ve(t[r],e[r]))return!1;return!0}function gd(t,e,r,o,i,s){if(en=s,Nt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Wi.current=t===null||t.memoizedState===null?Rf:Ff,t=r(o,i),So){s=0;do{if(So=!1,Ho=0,25<=s)throw Error(J(301));s+=1,Zt=Xt=null,e.updateQueue=null,Wi.current=Af,t=r(o,i)}while(So)}if(Wi.current=ls,e=Xt!==null&&Xt.next!==null,en=0,Zt=Xt=Nt=null,ss=!1,e)throw Error(J(300));return t}function ud(){var t=Ho!==0;return Ho=0,t}function qe(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?Nt.memoizedState=Zt=t:Zt=Zt.next=t,Zt}function We(){if(Xt===null){var t=Nt.alternate;t=t!==null?t.memoizedState:null}else t=Xt.next;var e=Zt===null?Nt.memoizedState:Zt.next;if(e!==null)Zt=e,Xt=t;else{if(t===null)throw Error(J(310));Xt=t,t={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},Zt===null?Nt.memoizedState=Zt=t:Zt=Zt.next=t}return Zt}function Go(t,e){return typeof e=="function"?e(t):e}function ol(t){var e=We(),r=e.queue;if(r===null)throw Error(J(311));r.lastRenderedReducer=t;var o=Xt,i=o.baseQueue,s=r.pending;if(s!==null){if(i!==null){var l=i.next;i.next=s.next,s.next=l}o.baseQueue=i=s,r.pending=null}if(i!==null){s=i.next,o=o.baseState;var a=l=null,d=null,c=s;do{var p=c.lane;if((en&p)===p)d!==null&&(d=d.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),o=c.hasEagerState?c.eagerState:t(o,c.action);else{var y={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};d===null?(a=d=y,l=o):d=d.next=y,Nt.lanes|=p,rn|=p}c=c.next}while(c!==null&&c!==s);d===null?l=o:d.next=a,Ve(o,e.memoizedState)||(ye=!0),e.memoizedState=o,e.baseState=l,e.baseQueue=d,r.lastRenderedState=o}if(t=r.interleaved,t!==null){i=t;do s=i.lane,Nt.lanes|=s,rn|=s,i=i.next;while(i!==t)}else i===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function il(t){var e=We(),r=e.queue;if(r===null)throw Error(J(311));r.lastRenderedReducer=t;var o=r.dispatch,i=r.pending,s=e.memoizedState;if(i!==null){r.pending=null;var l=i=i.next;do s=t(s,l.action),l=l.next;while(l!==i);Ve(s,e.memoizedState)||(ye=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),r.lastRenderedState=s}return[s,o]}function nb(){}function ob(t,e){var r=Nt,o=We(),i=e(),s=!Ve(o.memoizedState,i);if(s&&(o.memoizedState=i,ye=!0),o=o.queue,bd(lb.bind(null,r,o,t),[t]),o.getSnapshot!==e||s||Zt!==null&&Zt.memoizedState.tag&1){if(r.flags|=2048,Uo(9,sb.bind(null,r,o,i,e),void 0,null),te===null)throw Error(J(349));en&30||ib(r,e,i)}return i}function ib(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=Nt.updateQueue,e===null?(e={lastEffect:null,stores:null},Nt.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function sb(t,e,r,o){e.value=r,e.getSnapshot=o,ab(e)&&db(t)}function lb(t,e,r){return r(function(){ab(e)&&db(t)})}function ab(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!Ve(t,r)}catch{return!0}}function db(t){var e=fr(t,1);e!==null&&Ue(e,t,1,-1)}function Rc(t){var e=qe();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Go,lastRenderedState:t},e.queue=t,t=t.dispatch=Df.bind(null,Nt,t),[e.memoizedState,t]}function Uo(t,e,r,o){return t={tag:t,create:e,destroy:r,deps:o,next:null},e=Nt.updateQueue,e===null?(e={lastEffect:null,stores:null},Nt.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,e.lastEffect=t)),t}function cb(){return We().memoizedState}function _i(t,e,r,o){var i=qe();Nt.flags|=t,i.memoizedState=Uo(1|e,r,void 0,o===void 0?null:o)}function js(t,e,r,o){var i=We();o=o===void 0?null:o;var s=void 0;if(Xt!==null){var l=Xt.memoizedState;if(s=l.destroy,o!==null&&cd(o,l.deps)){i.memoizedState=Uo(e,r,s,o);return}}Nt.flags|=t,i.memoizedState=Uo(1|e,r,s,o)}function Fc(t,e){return _i(8390656,8,t,e)}function bd(t,e){return js(2048,8,t,e)}function gb(t,e){return js(4,2,t,e)}function ub(t,e){return js(4,4,t,e)}function bb(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function pb(t,e,r){return r=r!=null?r.concat([t]):null,js(4,4,bb.bind(null,e,t),r)}function pd(){}function mb(t,e){var r=We();e=e===void 0?null:e;var o=r.memoizedState;return o!==null&&e!==null&&cd(e,o[1])?o[0]:(r.memoizedState=[t,e],t)}function fb(t,e){var r=We();e=e===void 0?null:e;var o=r.memoizedState;return o!==null&&e!==null&&cd(e,o[1])?o[0]:(t=t(),r.memoizedState=[t,e],t)}function hb(t,e,r){return en&21?(Ve(r,e)||(r=wu(),Nt.lanes|=r,rn|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ye=!0),t.memoizedState=r)}function Ef(t,e){var r=Rt;Rt=r!==0&&4>r?r:4,t(!0);var o=nl.transition;nl.transition={};try{t(!1),e()}finally{Rt=r,nl.transition=o}}function yb(){return We().memoizedState}function Bf(t,e,r){var o=Ar(t);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},vb(t))xb(e,r);else if(r=tb(t,e,r,o),r!==null){var i=be();Ue(r,t,o,i),kb(r,e,o)}}function Df(t,e,r){var o=Ar(t),i={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if(vb(t))xb(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var l=e.lastRenderedState,a=s(l,r);if(i.hasEagerState=!0,i.eagerState=a,Ve(a,l)){var d=e.interleaved;d===null?(i.next=i,id(e)):(i.next=d.next,d.next=i),e.interleaved=i;return}}catch{}finally{}r=tb(t,e,i,o),r!==null&&(i=be(),Ue(r,t,o,i),kb(r,e,o))}}function vb(t){var e=t.alternate;return t===Nt||e!==null&&e===Nt}function xb(t,e){So=ss=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function kb(t,e,r){if(r&4194240){var o=e.lanes;o&=t.pendingLanes,r|=o,e.lanes=r,Ua(t,r)}}var ls={readContext:Me,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},Rf={readContext:Me,useCallback:function(t,e){return qe().memoizedState=[t,e===void 0?null:e],t},useContext:Me,useEffect:Fc,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,_i(4194308,4,bb.bind(null,e,t),r)},useLayoutEffect:function(t,e){return _i(4194308,4,t,e)},useInsertionEffect:function(t,e){return _i(4,2,t,e)},useMemo:function(t,e){var r=qe();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var o=qe();return e=r!==void 0?r(e):e,o.memoizedState=o.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},o.queue=t,t=t.dispatch=Bf.bind(null,Nt,t),[o.memoizedState,t]},useRef:function(t){var e=qe();return t={current:t},e.memoizedState=t},useState:Rc,useDebugValue:pd,useDeferredValue:function(t){return qe().memoizedState=t},useTransition:function(){var t=Rc(!1),e=t[0];return t=Ef.bind(null,t[1]),qe().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var o=Nt,i=qe();if(Pt){if(r===void 0)throw Error(J(407));r=r()}else{if(r=e(),te===null)throw Error(J(349));en&30||ib(o,e,r)}i.memoizedState=r;var s={value:r,getSnapshot:e};return i.queue=s,Fc(lb.bind(null,o,s,t),[t]),o.flags|=2048,Uo(9,sb.bind(null,o,s,r,e),void 0,null),r},useId:function(){var t=qe(),e=te.identifierPrefix;if(Pt){var r=ur,o=gr;r=(o&~(1<<32-Ge(o)-1)).toString(32)+r,e=":"+e+"R"+r,r=Ho++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=Tf++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ff={readContext:Me,useCallback:mb,useContext:Me,useEffect:bd,useImperativeHandle:pb,useInsertionEffect:gb,useLayoutEffect:ub,useMemo:fb,useReducer:ol,useRef:cb,useState:function(){return ol(Go)},useDebugValue:pd,useDeferredValue:function(t){var e=We();return hb(e,Xt.memoizedState,t)},useTransition:function(){var t=ol(Go)[0],e=We().memoizedState;return[t,e]},useMutableSource:nb,useSyncExternalStore:ob,useId:yb,unstable_isNewReconciler:!1},Af={readContext:Me,useCallback:mb,useContext:Me,useEffect:bd,useImperativeHandle:pb,useInsertionEffect:gb,useLayoutEffect:ub,useMemo:fb,useReducer:il,useRef:cb,useState:function(){return il(Go)},useDebugValue:pd,useDeferredValue:function(t){var e=We();return Xt===null?e.memoizedState=t:hb(e,Xt.memoizedState,t)},useTransition:function(){var t=il(Go)[0],e=We().memoizedState;return[t,e]},useMutableSource:nb,useSyncExternalStore:ob,useId:yb,unstable_isNewReconciler:!1};function Oe(t,e){if(t&&t.defaultProps){e=Ht({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}function ra(t,e,r,o){e=t.memoizedState,r=r(o,e),r=r==null?e:Ht({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Ss={isMounted:function(t){return(t=t._reactInternals)?an(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var o=be(),i=Ar(t),s=br(o,i);s.payload=e,r!=null&&(s.callback=r),e=Rr(t,s,i),e!==null&&(Ue(e,t,i,o),Mi(e,t,i))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var o=be(),i=Ar(t),s=br(o,i);s.tag=1,s.payload=e,r!=null&&(s.callback=r),e=Rr(t,s,i),e!==null&&(Ue(e,t,i,o),Mi(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=be(),o=Ar(t),i=br(r,o);i.tag=2,e!=null&&(i.callback=e),e=Rr(t,i,o),e!==null&&(Ue(e,t,o,r),Mi(e,t,o))}};function Ac(t,e,r,o,i,s,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,s,l):e.prototype&&e.prototype.isPureReactComponent?!_o(r,o)||!_o(i,s):!0}function wb(t,e,r){var o=!1,i=_r,s=e.contextType;return typeof s=="object"&&s!==null?s=Me(s):(i=xe(e)?Zr:ge.current,o=e.contextTypes,s=(o=o!=null)?$n(t,i):_r),e=new e(r,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ss,t.stateNode=e,e._reactInternals=t,o&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Mc(t,e,r,o){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,o),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,o),e.state!==t&&Ss.enqueueReplaceState(e,e.state,null)}function na(t,e,r,o){var i=t.stateNode;i.props=r,i.state=t.memoizedState,i.refs={},sd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Me(s):(s=xe(e)?Zr:ge.current,i.context=$n(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ra(t,e,s,r),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ss.enqueueReplaceState(i,i.state,null),os(t,r,i,o),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Gn(t,e){try{var r="",o=e;do r+=lm(o),o=o.return;while(o);var i=r}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function sl(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function oa(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var Mf=typeof WeakMap=="function"?WeakMap:Map;function jb(t,e,r){r=br(-1,r),r.tag=3,r.payload={element:null};var o=e.value;return r.callback=function(){ds||(ds=!0,pa=o),oa(t,e)},r}function Sb(t,e,r){r=br(-1,r),r.tag=3;var o=t.type.getDerivedStateFromError;if(typeof o=="function"){var i=e.value;r.payload=function(){return o(i)},r.callback=function(){oa(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){oa(t,e),typeof o!="function"&&(Fr===null?Fr=new Set([this]):Fr.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),r}function Wc(t,e,r){var o=t.pingCache;if(o===null){o=t.pingCache=new Mf;var i=new Set;o.set(e,i)}else i=o.get(e),i===void 0&&(i=new Set,o.set(e,i));i.has(r)||(i.add(r),t=Kf.bind(null,t,e,r),e.then(t,t))}function _c(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Lc(t,e,r,o,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=br(-1,1),e.tag=2,Rr(r,e,1))),r.lanes|=1),t)}var Wf=yr.ReactCurrentOwner,ye=!1;function ue(t,e,r,o){e.child=t===null?Zu(e,null,r,o):Nn(e,t.child,r,o)}function Pc(t,e,r,o,i){r=r.render;var s=e.ref;return Wn(e,i),o=gd(t,e,r,o,s,i),r=ud(),t!==null&&!ye?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,hr(t,e,i)):(Pt&&r&&Za(e),e.flags|=1,ue(t,e,o,i),e.child)}function $c(t,e,r,o,i){if(t===null){var s=r.type;return typeof s=="function"&&!wd(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=s,Cb(t,e,s,o,i)):(t=Oi(r.type,null,o,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var l=s.memoizedProps;if(r=r.compare,r=r!==null?r:_o,r(l,o)&&t.ref===e.ref)return hr(t,e,i)}return e.flags|=1,t=Mr(s,o),t.ref=e.ref,t.return=e,e.child=t}function Cb(t,e,r,o,i){if(t!==null){var s=t.memoizedProps;if(_o(s,o)&&t.ref===e.ref)if(ye=!1,e.pendingProps=o=s,(t.lanes&i)!==0)t.flags&131072&&(ye=!0);else return e.lanes=t.lanes,hr(t,e,i)}return ia(t,e,r,o,i)}function Ib(t,e,r){var o=e.pendingProps,i=o.children,s=t!==null?t.memoizedState:null;if(o.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},At(Dn,we),we|=r;else{if(!(r&1073741824))return t=s!==null?s.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,At(Dn,we),we|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=s!==null?s.baseLanes:r,At(Dn,we),we|=o}else s!==null?(o=s.baseLanes|r,e.memoizedState=null):o=r,At(Dn,we),we|=o;return ue(t,e,i,r),e.child}function zb(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function ia(t,e,r,o,i){var s=xe(r)?Zr:ge.current;return s=$n(e,s),Wn(e,i),r=gd(t,e,r,o,s,i),o=ud(),t!==null&&!ye?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,hr(t,e,i)):(Pt&&o&&Za(e),e.flags|=1,ue(t,e,r,i),e.child)}function Oc(t,e,r,o,i){if(xe(r)){var s=!0;Zi(e)}else s=!1;if(Wn(e,i),e.stateNode===null)Li(t,e),wb(e,r,o),na(e,r,o,i),o=!0;else if(t===null){var l=e.stateNode,a=e.memoizedProps;l.props=a;var d=l.context,c=r.contextType;typeof c=="object"&&c!==null?c=Me(c):(c=xe(r)?Zr:ge.current,c=$n(e,c));var p=r.getDerivedStateFromProps,y=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";y||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==o||d!==c)&&Mc(e,l,o,c),kr=!1;var h=e.memoizedState;l.state=h,os(e,o,l,i),d=e.memoizedState,a!==o||h!==d||ve.current||kr?(typeof p=="function"&&(ra(e,r,p,o),d=e.memoizedState),(a=kr||Ac(e,r,a,o,h,d,c))?(y||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=o,e.memoizedState=d),l.props=o,l.state=d,l.context=c,o=a):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),o=!1)}else{l=e.stateNode,eb(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Oe(e.type,a),l.props=c,y=e.pendingProps,h=l.context,d=r.contextType,typeof d=="object"&&d!==null?d=Me(d):(d=xe(r)?Zr:ge.current,d=$n(e,d));var w=r.getDerivedStateFromProps;(p=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==y||h!==d)&&Mc(e,l,o,d),kr=!1,h=e.memoizedState,l.state=h,os(e,o,l,i);var v=e.memoizedState;a!==y||h!==v||ve.current||kr?(typeof w=="function"&&(ra(e,r,w,o),v=e.memoizedState),(c=kr||Ac(e,r,c,o,h,v,d)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(o,v,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(o,v,d)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=o,e.memoizedState=v),l.props=o,l.state=v,l.context=d,o=c):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),o=!1)}return sa(t,e,r,o,s,i)}function sa(t,e,r,o,i,s){zb(t,e);var l=(e.flags&128)!==0;if(!o&&!l)return i&&Ic(e,r,!1),hr(t,e,s);o=e.stateNode,Wf.current=e;var a=l&&typeof r.getDerivedStateFromError!="function"?null:o.render();return e.flags|=1,t!==null&&l?(e.child=Nn(e,t.child,null,s),e.child=Nn(e,null,a,s)):ue(t,e,a,s),e.memoizedState=o.state,i&&Ic(e,r,!0),e.child}function Tb(t){var e=t.stateNode;e.pendingContext?Cc(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Cc(t,e.context,!1),ld(t,e.containerInfo)}function Nc(t,e,r,o,i){return On(),ed(i),e.flags|=256,ue(t,e,r,o),e.child}var la={dehydrated:null,treeContext:null,retryLane:0};function aa(t){return{baseLanes:t,cachePool:null,transitions:null}}function Eb(t,e,r){var o=e.pendingProps,i=Ot.current,s=!1,l=(e.flags&128)!==0,a;if((a=l)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),At(Ot,i&1),t===null)return ta(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=o.children,t=o.fallback,s?(o=e.mode,s=e.child,l={mode:"hidden",children:l},!(o&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=zs(l,o,0,null),t=Jr(t,o,r,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=aa(r),e.memoizedState=la,t):md(e,l));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return _f(t,e,l,o,a,i,r);if(s){s=o.fallback,l=e.mode,i=t.child,a=i.sibling;var d={mode:"hidden",children:o.children};return!(l&1)&&e.child!==i?(o=e.child,o.childLanes=0,o.pendingProps=d,e.deletions=null):(o=Mr(i,d),o.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Mr(a,s):(s=Jr(s,l,r,null),s.flags|=2),s.return=e,o.return=e,o.sibling=s,e.child=o,o=s,s=e.child,l=t.child.memoizedState,l=l===null?aa(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=t.childLanes&~r,e.memoizedState=la,o}return s=t.child,t=s.sibling,o=Mr(s,{mode:"visible",children:o.children}),!(e.mode&1)&&(o.lanes=r),o.return=e,o.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=o,e.memoizedState=null,o}function md(t,e){return e=zs({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function pi(t,e,r,o){return o!==null&&ed(o),Nn(e,t.child,null,r),t=md(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function _f(t,e,r,o,i,s,l){if(r)return e.flags&256?(e.flags&=-257,o=sl(Error(J(422))),pi(t,e,l,o)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=o.fallback,i=e.mode,o=zs({mode:"visible",children:o.children},i,0,null),s=Jr(s,i,l,null),s.flags|=2,o.return=e,s.return=e,o.sibling=s,e.child=o,e.mode&1&&Nn(e,t.child,null,l),e.child.memoizedState=aa(l),e.memoizedState=la,s);if(!(e.mode&1))return pi(t,e,l,null);if(i.data==="$!"){if(o=i.nextSibling&&i.nextSibling.dataset,o)var a=o.dgst;return o=a,s=Error(J(419)),o=sl(s,o,void 0),pi(t,e,l,o)}if(a=(l&t.childLanes)!==0,ye||a){if(o=te,o!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(o.suspendedLanes|l)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,fr(t,i),Ue(o,t,i,-1))}return kd(),o=sl(Error(J(421))),pi(t,e,l,o)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Xf.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Se=Dr(i.nextSibling),Ce=e,Pt=!0,He=null,t!==null&&(De[Re++]=gr,De[Re++]=ur,De[Re++]=tn,gr=t.id,ur=t.overflow,tn=e),e=md(e,o.children),e.flags|=4096,e)}function Hc(t,e,r){t.lanes|=e;var o=t.alternate;o!==null&&(o.lanes|=e),ea(t.return,e,r)}function ll(t,e,r,o,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=r,s.tailMode=i)}function Bb(t,e,r){var o=e.pendingProps,i=o.revealOrder,s=o.tail;if(ue(t,e,o.children,r),o=Ot.current,o&2)o=o&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Hc(t,r,e);else if(t.tag===19)Hc(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}if(At(Ot,o),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(r=e.child,i=null;r!==null;)t=r.alternate,t!==null&&is(t)===null&&(i=r),r=r.sibling;r=i,r===null?(i=e.child,e.child=null):(i=r.sibling,r.sibling=null),ll(e,!1,i,r,s);break;case"backwards":for(r=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&is(t)===null){e.child=i;break}t=i.sibling,i.sibling=r,r=i,i=t}ll(e,!0,r,null,s);break;case"together":ll(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Li(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function hr(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),rn|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(J(153));if(e.child!==null){for(t=e.child,r=Mr(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=Mr(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function Lf(t,e,r){switch(e.tag){case 3:Tb(e),On();break;case 5:rb(e);break;case 1:xe(e.type)&&Zi(e);break;case 4:ld(e,e.stateNode.containerInfo);break;case 10:var o=e.type._context,i=e.memoizedProps.value;At(rs,o._currentValue),o._currentValue=i;break;case 13:if(o=e.memoizedState,o!==null)return o.dehydrated!==null?(At(Ot,Ot.current&1),e.flags|=128,null):r&e.child.childLanes?Eb(t,e,r):(At(Ot,Ot.current&1),t=hr(t,e,r),t!==null?t.sibling:null);At(Ot,Ot.current&1);break;case 19:if(o=(r&e.childLanes)!==0,t.flags&128){if(o)return Bb(t,e,r);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),At(Ot,Ot.current),o)break;return null;case 22:case 23:return e.lanes=0,Ib(t,e,r)}return hr(t,e,r)}var Db,da,Rb,Fb;Db=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};da=function(){};Rb=function(t,e,r,o){var i=t.memoizedProps;if(i!==o){t=e.stateNode,Kr(rr.current);var s=null;switch(r){case"input":i=Dl(t,i),o=Dl(t,o),s=[];break;case"select":i=Ht({},i,{value:void 0}),o=Ht({},o,{value:void 0}),s=[];break;case"textarea":i=Al(t,i),o=Al(t,o),s=[];break;default:typeof i.onClick!="function"&&typeof o.onClick=="function"&&(t.onclick=qi)}Wl(r,o);var l;r=null;for(c in i)if(!o.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(l in a)a.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Bo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in o){var d=o[c];if(a=i!=null?i[c]:void 0,o.hasOwnProperty(c)&&d!==a&&(d!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in d)d.hasOwnProperty(l)&&a[l]!==d[l]&&(r||(r={}),r[l]=d[l])}else r||(s||(s=[]),s.push(c,r)),r=d;else c==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,a=a?a.__html:void 0,d!=null&&a!==d&&(s=s||[]).push(c,d)):c==="children"?typeof d!="string"&&typeof d!="number"||(s=s||[]).push(c,""+d):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Bo.hasOwnProperty(c)?(d!=null&&c==="onScroll"&&Wt("scroll",t),s||a===d||(s=[])):(s=s||[]).push(c,d))}r&&(s=s||[]).push("style",r);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Fb=function(t,e,r,o){r!==o&&(e.flags|=4)};function ao(t,e){if(!Pt)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function ae(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(e)for(var i=t.child;i!==null;)r|=i.lanes|i.childLanes,o|=i.subtreeFlags&14680064,o|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)r|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=o,t.childLanes=r,e}function Pf(t,e,r){var o=e.pendingProps;switch(td(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(e),null;case 1:return xe(e.type)&&Ji(),ae(e),null;case 3:return o=e.stateNode,Hn(),_t(ve),_t(ge),dd(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(t===null||t.child===null)&&(ui(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,He!==null&&(ha(He),He=null))),da(t,e),ae(e),null;case 5:ad(e);var i=Kr(No.current);if(r=e.type,t!==null&&e.stateNode!=null)Rb(t,e,r,o,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!o){if(e.stateNode===null)throw Error(J(166));return ae(e),null}if(t=Kr(rr.current),ui(e)){o=e.stateNode,r=e.type;var s=e.memoizedProps;switch(o[tr]=e,o[$o]=s,t=(e.mode&1)!==0,r){case"dialog":Wt("cancel",o),Wt("close",o);break;case"iframe":case"object":case"embed":Wt("load",o);break;case"video":case"audio":for(i=0;i<po.length;i++)Wt(po[i],o);break;case"source":Wt("error",o);break;case"img":case"image":case"link":Wt("error",o),Wt("load",o);break;case"details":Wt("toggle",o);break;case"input":Jd(o,s),Wt("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!s.multiple},Wt("invalid",o);break;case"textarea":tc(o,s),Wt("invalid",o)}Wl(r,s),i=null;for(var l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="children"?typeof a=="string"?o.textContent!==a&&(s.suppressHydrationWarning!==!0&&gi(o.textContent,a,t),i=["children",a]):typeof a=="number"&&o.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&gi(o.textContent,a,t),i=["children",""+a]):Bo.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&Wt("scroll",o)}switch(r){case"input":ni(o),Zd(o,s,!0);break;case"textarea":ni(o),ec(o);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(o.onclick=qi)}o=i,e.updateQueue=o,o!==null&&(e.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=lu(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof o.is=="string"?t=l.createElement(r,{is:o.is}):(t=l.createElement(r),r==="select"&&(l=t,o.multiple?l.multiple=!0:o.size&&(l.size=o.size))):t=l.createElementNS(t,r),t[tr]=e,t[$o]=o,Db(t,e,!1,!1),e.stateNode=t;t:{switch(l=_l(r,o),r){case"dialog":Wt("cancel",t),Wt("close",t),i=o;break;case"iframe":case"object":case"embed":Wt("load",t),i=o;break;case"video":case"audio":for(i=0;i<po.length;i++)Wt(po[i],t);i=o;break;case"source":Wt("error",t),i=o;break;case"img":case"image":case"link":Wt("error",t),Wt("load",t),i=o;break;case"details":Wt("toggle",t),i=o;break;case"input":Jd(t,o),i=Dl(t,o),Wt("invalid",t);break;case"option":i=o;break;case"select":t._wrapperState={wasMultiple:!!o.multiple},i=Ht({},o,{value:void 0}),Wt("invalid",t);break;case"textarea":tc(t,o),i=Al(t,o),Wt("invalid",t);break;default:i=o}Wl(r,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var d=a[s];s==="style"?cu(t,d):s==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&au(t,d)):s==="children"?typeof d=="string"?(r!=="textarea"||d!=="")&&Do(t,d):typeof d=="number"&&Do(t,""+d):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Bo.hasOwnProperty(s)?d!=null&&s==="onScroll"&&Wt("scroll",t):d!=null&&Pa(t,s,d,l))}switch(r){case"input":ni(t),Zd(t,o,!1);break;case"textarea":ni(t),ec(t);break;case"option":o.value!=null&&t.setAttribute("value",""+Wr(o.value));break;case"select":t.multiple=!!o.multiple,s=o.value,s!=null?Rn(t,!!o.multiple,s,!1):o.defaultValue!=null&&Rn(t,!!o.multiple,o.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=qi)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}}o&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ae(e),null;case 6:if(t&&e.stateNode!=null)Fb(t,e,t.memoizedProps,o);else{if(typeof o!="string"&&e.stateNode===null)throw Error(J(166));if(r=Kr(No.current),Kr(rr.current),ui(e)){if(o=e.stateNode,r=e.memoizedProps,o[tr]=e,(s=o.nodeValue!==r)&&(t=Ce,t!==null))switch(t.tag){case 3:gi(o.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&gi(o.nodeValue,r,(t.mode&1)!==0)}s&&(e.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[tr]=e,e.stateNode=o}return ae(e),null;case 13:if(_t(Ot),o=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Pt&&Se!==null&&e.mode&1&&!(e.flags&128))qu(),On(),e.flags|=98560,s=!1;else if(s=ui(e),o!==null&&o.dehydrated!==null){if(t===null){if(!s)throw Error(J(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(J(317));s[tr]=e}else On(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ae(e),s=!1}else He!==null&&(ha(He),He=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(o=o!==null,o!==(t!==null&&t.memoizedState!==null)&&o&&(e.child.flags|=8192,e.mode&1&&(t===null||Ot.current&1?qt===0&&(qt=3):kd())),e.updateQueue!==null&&(e.flags|=4),ae(e),null);case 4:return Hn(),da(t,e),t===null&&Lo(e.stateNode.containerInfo),ae(e),null;case 10:return od(e.type._context),ae(e),null;case 17:return xe(e.type)&&Ji(),ae(e),null;case 19:if(_t(Ot),s=e.memoizedState,s===null)return ae(e),null;if(o=(e.flags&128)!==0,l=s.rendering,l===null)if(o)ao(s,!1);else{if(qt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(l=is(t),l!==null){for(e.flags|=128,ao(s,!1),o=l.updateQueue,o!==null&&(e.updateQueue=o,e.flags|=4),e.subtreeFlags=0,o=r,r=e.child;r!==null;)s=r,t=o,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,t=l.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return At(Ot,Ot.current&1|2),e.child}t=t.sibling}s.tail!==null&&Yt()>Un&&(e.flags|=128,o=!0,ao(s,!1),e.lanes=4194304)}else{if(!o)if(t=is(l),t!==null){if(e.flags|=128,o=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),ao(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!Pt)return ae(e),null}else 2*Yt()-s.renderingStartTime>Un&&r!==1073741824&&(e.flags|=128,o=!0,ao(s,!1),e.lanes=4194304);s.isBackwards?(l.sibling=e.child,e.child=l):(r=s.last,r!==null?r.sibling=l:e.child=l,s.last=l)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Yt(),e.sibling=null,r=Ot.current,At(Ot,o?r&1|2:r&1),e):(ae(e),null);case 22:case 23:return xd(),o=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==o&&(e.flags|=8192),o&&e.mode&1?we&1073741824&&(ae(e),e.subtreeFlags&6&&(e.flags|=8192)):ae(e),null;case 24:return null;case 25:return null}throw Error(J(156,e.tag))}function $f(t,e){switch(td(e),e.tag){case 1:return xe(e.type)&&Ji(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Hn(),_t(ve),_t(ge),dd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ad(e),null;case 13:if(_t(Ot),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(J(340));On()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _t(Ot),null;case 4:return Hn(),null;case 10:return od(e.type._context),null;case 22:case 23:return xd(),null;case 24:return null;default:return null}}var mi=!1,de=!1,Of=typeof WeakSet=="function"?WeakSet:Set,pt=null;function Bn(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){Vt(t,e,o)}else r.current=null}function ca(t,e,r){try{r()}catch(o){Vt(t,e,o)}}var Gc=!1;function Nf(t,e){if(Yl=Qi,t=Lu(),Ja(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var i=o.anchorOffset,s=o.focusNode;o=o.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break t}var l=0,a=-1,d=-1,c=0,p=0,y=t,h=null;e:for(;;){for(var w;y!==r||i!==0&&y.nodeType!==3||(a=l+i),y!==s||o!==0&&y.nodeType!==3||(d=l+o),y.nodeType===3&&(l+=y.nodeValue.length),(w=y.firstChild)!==null;)h=y,y=w;for(;;){if(y===t)break e;if(h===r&&++c===i&&(a=l),h===s&&++p===o&&(d=l),(w=y.nextSibling)!==null)break;y=h,h=y.parentNode}y=w}r=a===-1||d===-1?null:{start:a,end:d}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ql={focusedElem:t,selectionRange:r},Qi=!1,pt=e;pt!==null;)if(e=pt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pt=t;else for(;pt!==null;){e=pt;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var k=v.memoizedProps,z=v.memoizedState,f=e.stateNode,g=f.getSnapshotBeforeUpdate(e.elementType===e.type?k:Oe(e.type,k),z);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var b=e.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(J(163))}}catch(C){Vt(e,e.return,C)}if(t=e.sibling,t!==null){t.return=e.return,pt=t;break}pt=e.return}return v=Gc,Gc=!1,v}function Co(t,e,r){var o=e.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var i=o=o.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ca(e,r,s)}i=i.next}while(i!==o)}}function Cs(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var o=r.create;r.destroy=o()}r=r.next}while(r!==e)}}function ga(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function Ab(t){var e=t.alternate;e!==null&&(t.alternate=null,Ab(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[tr],delete e[$o],delete e[ql],delete e[Sf],delete e[Cf])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Mb(t){return t.tag===5||t.tag===3||t.tag===4}function Uc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Mb(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ua(t,e,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=qi));else if(o!==4&&(t=t.child,t!==null))for(ua(t,e,r),t=t.sibling;t!==null;)ua(t,e,r),t=t.sibling}function ba(t,e,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(o!==4&&(t=t.child,t!==null))for(ba(t,e,r),t=t.sibling;t!==null;)ba(t,e,r),t=t.sibling}var re=null,Ne=!1;function vr(t,e,r){for(r=r.child;r!==null;)Wb(t,e,r),r=r.sibling}function Wb(t,e,r){if(er&&typeof er.onCommitFiberUnmount=="function")try{er.onCommitFiberUnmount(hs,r)}catch{}switch(r.tag){case 5:de||Bn(r,e);case 6:var o=re,i=Ne;re=null,vr(t,e,r),re=o,Ne=i,re!==null&&(Ne?(t=re,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):re.removeChild(r.stateNode));break;case 18:re!==null&&(Ne?(t=re,r=r.stateNode,t.nodeType===8?tl(t.parentNode,r):t.nodeType===1&&tl(t,r),Mo(t)):tl(re,r.stateNode));break;case 4:o=re,i=Ne,re=r.stateNode.containerInfo,Ne=!0,vr(t,e,r),re=o,Ne=i;break;case 0:case 11:case 14:case 15:if(!de&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){i=o=o.next;do{var s=i,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&ca(r,e,l),i=i.next}while(i!==o)}vr(t,e,r);break;case 1:if(!de&&(Bn(r,e),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(a){Vt(r,e,a)}vr(t,e,r);break;case 21:vr(t,e,r);break;case 22:r.mode&1?(de=(o=de)||r.memoizedState!==null,vr(t,e,r),de=o):vr(t,e,r);break;default:vr(t,e,r)}}function Vc(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new Of),e.forEach(function(o){var i=qf.bind(null,t,o);r.has(o)||(r.add(o),o.then(i,i))})}}function $e(t,e){var r=e.deletions;if(r!==null)for(var o=0;o<r.length;o++){var i=r[o];try{var s=t,l=e,a=l;t:for(;a!==null;){switch(a.tag){case 5:re=a.stateNode,Ne=!1;break t;case 3:re=a.stateNode.containerInfo,Ne=!0;break t;case 4:re=a.stateNode.containerInfo,Ne=!0;break t}a=a.return}if(re===null)throw Error(J(160));Wb(s,l,i),re=null,Ne=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(c){Vt(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)_b(e,t),e=e.sibling}function _b(t,e){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if($e(e,t),Ke(t),o&4){try{Co(3,t,t.return),Cs(3,t)}catch(k){Vt(t,t.return,k)}try{Co(5,t,t.return)}catch(k){Vt(t,t.return,k)}}break;case 1:$e(e,t),Ke(t),o&512&&r!==null&&Bn(r,r.return);break;case 5:if($e(e,t),Ke(t),o&512&&r!==null&&Bn(r,r.return),t.flags&32){var i=t.stateNode;try{Do(i,"")}catch(k){Vt(t,t.return,k)}}if(o&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,l=r!==null?r.memoizedProps:s,a=t.type,d=t.updateQueue;if(t.updateQueue=null,d!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&iu(i,s),_l(a,l);var c=_l(a,s);for(l=0;l<d.length;l+=2){var p=d[l],y=d[l+1];p==="style"?cu(i,y):p==="dangerouslySetInnerHTML"?au(i,y):p==="children"?Do(i,y):Pa(i,p,y,c)}switch(a){case"input":Rl(i,s);break;case"textarea":su(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?Rn(i,!!s.multiple,w,!1):h!==!!s.multiple&&(s.defaultValue!=null?Rn(i,!!s.multiple,s.defaultValue,!0):Rn(i,!!s.multiple,s.multiple?[]:"",!1))}i[$o]=s}catch(k){Vt(t,t.return,k)}}break;case 6:if($e(e,t),Ke(t),o&4){if(t.stateNode===null)throw Error(J(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){Vt(t,t.return,k)}}break;case 3:if($e(e,t),Ke(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{Mo(e.containerInfo)}catch(k){Vt(t,t.return,k)}break;case 4:$e(e,t),Ke(t);break;case 13:$e(e,t),Ke(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(yd=Yt())),o&4&&Vc(t);break;case 22:if(p=r!==null&&r.memoizedState!==null,t.mode&1?(de=(c=de)||p,$e(e,t),de=c):$e(e,t),Ke(t),o&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!p&&t.mode&1)for(pt=t,p=t.child;p!==null;){for(y=pt=p;pt!==null;){switch(h=pt,w=h.child,h.tag){case 0:case 11:case 14:case 15:Co(4,h,h.return);break;case 1:Bn(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){o=h,r=h.return;try{e=o,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(k){Vt(o,r,k)}}break;case 5:Bn(h,h.return);break;case 22:if(h.memoizedState!==null){Qc(y);continue}}w!==null?(w.return=h,pt=w):Qc(y)}p=p.sibling}t:for(p=null,y=t;;){if(y.tag===5){if(p===null){p=y;try{i=y.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=y.stateNode,d=y.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,a.style.display=du("display",l))}catch(k){Vt(t,t.return,k)}}}else if(y.tag===6){if(p===null)try{y.stateNode.nodeValue=c?"":y.memoizedProps}catch(k){Vt(t,t.return,k)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===t)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===t)break t;for(;y.sibling===null;){if(y.return===null||y.return===t)break t;p===y&&(p=null),y=y.return}p===y&&(p=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:$e(e,t),Ke(t),o&4&&Vc(t);break;case 21:break;default:$e(e,t),Ke(t)}}function Ke(t){var e=t.flags;if(e&2){try{t:{for(var r=t.return;r!==null;){if(Mb(r)){var o=r;break t}r=r.return}throw Error(J(160))}switch(o.tag){case 5:var i=o.stateNode;o.flags&32&&(Do(i,""),o.flags&=-33);var s=Uc(t);ba(t,s,i);break;case 3:case 4:var l=o.stateNode.containerInfo,a=Uc(t);ua(t,a,l);break;default:throw Error(J(161))}}catch(d){Vt(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Hf(t,e,r){pt=t,Lb(t)}function Lb(t,e,r){for(var o=(t.mode&1)!==0;pt!==null;){var i=pt,s=i.child;if(i.tag===22&&o){var l=i.memoizedState!==null||mi;if(!l){var a=i.alternate,d=a!==null&&a.memoizedState!==null||de;a=mi;var c=de;if(mi=l,(de=d)&&!c)for(pt=i;pt!==null;)l=pt,d=l.child,l.tag===22&&l.memoizedState!==null?Kc(i):d!==null?(d.return=l,pt=d):Kc(i);for(;s!==null;)pt=s,Lb(s),s=s.sibling;pt=i,mi=a,de=c}Yc(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,pt=s):Yc(t)}}function Yc(t){for(;pt!==null;){var e=pt;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:de||Cs(5,e);break;case 1:var o=e.stateNode;if(e.flags&4&&!de)if(r===null)o.componentDidMount();else{var i=e.elementType===e.type?r.memoizedProps:Oe(e.type,r.memoizedProps);o.componentDidUpdate(i,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Dc(e,s,o);break;case 3:var l=e.updateQueue;if(l!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}Dc(e,l,r)}break;case 5:var a=e.stateNode;if(r===null&&e.flags&4){r=a;var d=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&r.focus();break;case"img":d.src&&(r.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var y=p.dehydrated;y!==null&&Mo(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(J(163))}de||e.flags&512&&ga(e)}catch(h){Vt(e,e.return,h)}}if(e===t){pt=null;break}if(r=e.sibling,r!==null){r.return=e.return,pt=r;break}pt=e.return}}function Qc(t){for(;pt!==null;){var e=pt;if(e===t){pt=null;break}var r=e.sibling;if(r!==null){r.return=e.return,pt=r;break}pt=e.return}}function Kc(t){for(;pt!==null;){var e=pt;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{Cs(4,e)}catch(d){Vt(e,r,d)}break;case 1:var o=e.stateNode;if(typeof o.componentDidMount=="function"){var i=e.return;try{o.componentDidMount()}catch(d){Vt(e,i,d)}}var s=e.return;try{ga(e)}catch(d){Vt(e,s,d)}break;case 5:var l=e.return;try{ga(e)}catch(d){Vt(e,l,d)}}}catch(d){Vt(e,e.return,d)}if(e===t){pt=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pt=a;break}pt=e.return}}var Gf=Math.ceil,as=yr.ReactCurrentDispatcher,fd=yr.ReactCurrentOwner,Ae=yr.ReactCurrentBatchConfig,Et=0,te=null,Kt=null,ne=0,we=0,Dn=Pr(0),qt=0,Vo=null,rn=0,Is=0,hd=0,Io=null,he=null,yd=0,Un=1/0,ar=null,ds=!1,pa=null,Fr=null,fi=!1,zr=null,cs=0,zo=0,ma=null,Pi=-1,$i=0;function be(){return Et&6?Yt():Pi!==-1?Pi:Pi=Yt()}function Ar(t){return t.mode&1?Et&2&&ne!==0?ne&-ne:zf.transition!==null?($i===0&&($i=wu()),$i):(t=Rt,t!==0||(t=window.event,t=t===void 0?16:Eu(t.type)),t):1}function Ue(t,e,r,o){if(50<zo)throw zo=0,ma=null,Error(J(185));Qo(t,r,o),(!(Et&2)||t!==te)&&(t===te&&(!(Et&2)&&(Is|=r),qt===4&&Sr(t,ne)),ke(t,o),r===1&&Et===0&&!(e.mode&1)&&(Un=Yt()+500,ws&&$r()))}function ke(t,e){var r=t.callbackNode;Im(t,e);var o=Yi(t,t===te?ne:0);if(o===0)r!==null&&oc(r),t.callbackNode=null,t.callbackPriority=0;else if(e=o&-o,t.callbackPriority!==e){if(r!=null&&oc(r),e===1)t.tag===0?If(Xc.bind(null,t)):Qu(Xc.bind(null,t)),wf(function(){!(Et&6)&&$r()}),r=null;else{switch(ju(o)){case 1:r=Ga;break;case 4:r=xu;break;case 16:r=Vi;break;case 536870912:r=ku;break;default:r=Vi}r=Vb(r,Pb.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function Pb(t,e){if(Pi=-1,$i=0,Et&6)throw Error(J(327));var r=t.callbackNode;if(_n()&&t.callbackNode!==r)return null;var o=Yi(t,t===te?ne:0);if(o===0)return null;if(o&30||o&t.expiredLanes||e)e=gs(t,o);else{e=o;var i=Et;Et|=2;var s=Ob();(te!==t||ne!==e)&&(ar=null,Un=Yt()+500,qr(t,e));do try{Yf();break}catch(a){$b(t,a)}while(!0);nd(),as.current=s,Et=i,Kt!==null?e=0:(te=null,ne=0,e=qt)}if(e!==0){if(e===2&&(i=Nl(t),i!==0&&(o=i,e=fa(t,i))),e===1)throw r=Vo,qr(t,0),Sr(t,o),ke(t,Yt()),r;if(e===6)Sr(t,o);else{if(i=t.current.alternate,!(o&30)&&!Uf(i)&&(e=gs(t,o),e===2&&(s=Nl(t),s!==0&&(o=s,e=fa(t,s))),e===1))throw r=Vo,qr(t,0),Sr(t,o),ke(t,Yt()),r;switch(t.finishedWork=i,t.finishedLanes=o,e){case 0:case 1:throw Error(J(345));case 2:Ur(t,he,ar);break;case 3:if(Sr(t,o),(o&130023424)===o&&(e=yd+500-Yt(),10<e)){if(Yi(t,0)!==0)break;if(i=t.suspendedLanes,(i&o)!==o){be(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Xl(Ur.bind(null,t,he,ar),e);break}Ur(t,he,ar);break;case 4:if(Sr(t,o),(o&4194240)===o)break;for(e=t.eventTimes,i=-1;0<o;){var l=31-Ge(o);s=1<<l,l=e[l],l>i&&(i=l),o&=~s}if(o=i,o=Yt()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Gf(o/1960))-o,10<o){t.timeoutHandle=Xl(Ur.bind(null,t,he,ar),o);break}Ur(t,he,ar);break;case 5:Ur(t,he,ar);break;default:throw Error(J(329))}}}return ke(t,Yt()),t.callbackNode===r?Pb.bind(null,t):null}function fa(t,e){var r=Io;return t.current.memoizedState.isDehydrated&&(qr(t,e).flags|=256),t=gs(t,e),t!==2&&(e=he,he=r,e!==null&&ha(e)),t}function ha(t){he===null?he=t:he.push.apply(he,t)}function Uf(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var i=r[o],s=i.getSnapshot;i=i.value;try{if(!Ve(s(),i))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Sr(t,e){for(e&=~hd,e&=~Is,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-Ge(e),o=1<<r;t[r]=-1,e&=~o}}function Xc(t){if(Et&6)throw Error(J(327));_n();var e=Yi(t,0);if(!(e&1))return ke(t,Yt()),null;var r=gs(t,e);if(t.tag!==0&&r===2){var o=Nl(t);o!==0&&(e=o,r=fa(t,o))}if(r===1)throw r=Vo,qr(t,0),Sr(t,e),ke(t,Yt()),r;if(r===6)throw Error(J(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ur(t,he,ar),ke(t,Yt()),null}function vd(t,e){var r=Et;Et|=1;try{return t(e)}finally{Et=r,Et===0&&(Un=Yt()+500,ws&&$r())}}function nn(t){zr!==null&&zr.tag===0&&!(Et&6)&&_n();var e=Et;Et|=1;var r=Ae.transition,o=Rt;try{if(Ae.transition=null,Rt=1,t)return t()}finally{Rt=o,Ae.transition=r,Et=e,!(Et&6)&&$r()}}function xd(){we=Dn.current,_t(Dn)}function qr(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,kf(r)),Kt!==null)for(r=Kt.return;r!==null;){var o=r;switch(td(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Ji();break;case 3:Hn(),_t(ve),_t(ge),dd();break;case 5:ad(o);break;case 4:Hn();break;case 13:_t(Ot);break;case 19:_t(Ot);break;case 10:od(o.type._context);break;case 22:case 23:xd()}r=r.return}if(te=t,Kt=t=Mr(t.current,null),ne=we=e,qt=0,Vo=null,hd=Is=rn=0,he=Io=null,Qr!==null){for(e=0;e<Qr.length;e++)if(r=Qr[e],o=r.interleaved,o!==null){r.interleaved=null;var i=o.next,s=r.pending;if(s!==null){var l=s.next;s.next=i,o.next=l}r.pending=o}Qr=null}return t}function $b(t,e){do{var r=Kt;try{if(nd(),Wi.current=ls,ss){for(var o=Nt.memoizedState;o!==null;){var i=o.queue;i!==null&&(i.pending=null),o=o.next}ss=!1}if(en=0,Zt=Xt=Nt=null,So=!1,Ho=0,fd.current=null,r===null||r.return===null){qt=1,Vo=e,Kt=null;break}t:{var s=t,l=r.return,a=r,d=e;if(e=ne,a.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var c=d,p=a,y=p.tag;if(!(p.mode&1)&&(y===0||y===11||y===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var w=_c(l);if(w!==null){w.flags&=-257,Lc(w,l,a,s,e),w.mode&1&&Wc(s,c,e),e=w,d=c;var v=e.updateQueue;if(v===null){var k=new Set;k.add(d),e.updateQueue=k}else v.add(d);break t}else{if(!(e&1)){Wc(s,c,e),kd();break t}d=Error(J(426))}}else if(Pt&&a.mode&1){var z=_c(l);if(z!==null){!(z.flags&65536)&&(z.flags|=256),Lc(z,l,a,s,e),ed(Gn(d,a));break t}}s=d=Gn(d,a),qt!==4&&(qt=2),Io===null?Io=[s]:Io.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=jb(s,d,e);Bc(s,f);break t;case 1:a=d;var g=s.type,b=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Fr===null||!Fr.has(b)))){s.flags|=65536,e&=-e,s.lanes|=e;var C=Sb(s,a,e);Bc(s,C);break t}}s=s.return}while(s!==null)}Hb(r)}catch(S){e=S,Kt===r&&r!==null&&(Kt=r=r.return);continue}break}while(!0)}function Ob(){var t=as.current;return as.current=ls,t===null?ls:t}function kd(){(qt===0||qt===3||qt===2)&&(qt=4),te===null||!(rn&268435455)&&!(Is&268435455)||Sr(te,ne)}function gs(t,e){var r=Et;Et|=2;var o=Ob();(te!==t||ne!==e)&&(ar=null,qr(t,e));do try{Vf();break}catch(i){$b(t,i)}while(!0);if(nd(),Et=r,as.current=o,Kt!==null)throw Error(J(261));return te=null,ne=0,qt}function Vf(){for(;Kt!==null;)Nb(Kt)}function Yf(){for(;Kt!==null&&!hm();)Nb(Kt)}function Nb(t){var e=Ub(t.alternate,t,we);t.memoizedProps=t.pendingProps,e===null?Hb(t):Kt=e,fd.current=null}function Hb(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=$f(r,e),r!==null){r.flags&=32767,Kt=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{qt=6,Kt=null;return}}else if(r=Pf(r,e,we),r!==null){Kt=r;return}if(e=e.sibling,e!==null){Kt=e;return}Kt=e=t}while(e!==null);qt===0&&(qt=5)}function Ur(t,e,r){var o=Rt,i=Ae.transition;try{Ae.transition=null,Rt=1,Qf(t,e,r,o)}finally{Ae.transition=i,Rt=o}return null}function Qf(t,e,r,o){do _n();while(zr!==null);if(Et&6)throw Error(J(327));r=t.finishedWork;var i=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(J(177));t.callbackNode=null,t.callbackPriority=0;var s=r.lanes|r.childLanes;if(zm(t,s),t===te&&(Kt=te=null,ne=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||fi||(fi=!0,Vb(Vi,function(){return _n(),null})),s=(r.flags&15990)!==0,r.subtreeFlags&15990||s){s=Ae.transition,Ae.transition=null;var l=Rt;Rt=1;var a=Et;Et|=4,fd.current=null,Nf(t,r),_b(r,t),pf(Ql),Qi=!!Yl,Ql=Yl=null,t.current=r,Hf(r),ym(),Et=a,Rt=l,Ae.transition=s}else t.current=r;if(fi&&(fi=!1,zr=t,cs=i),s=t.pendingLanes,s===0&&(Fr=null),km(r.stateNode),ke(t,Yt()),e!==null)for(o=t.onRecoverableError,r=0;r<e.length;r++)i=e[r],o(i.value,{componentStack:i.stack,digest:i.digest});if(ds)throw ds=!1,t=pa,pa=null,t;return cs&1&&t.tag!==0&&_n(),s=t.pendingLanes,s&1?t===ma?zo++:(zo=0,ma=t):zo=0,$r(),null}function _n(){if(zr!==null){var t=ju(cs),e=Ae.transition,r=Rt;try{if(Ae.transition=null,Rt=16>t?16:t,zr===null)var o=!1;else{if(t=zr,zr=null,cs=0,Et&6)throw Error(J(331));var i=Et;for(Et|=4,pt=t.current;pt!==null;){var s=pt,l=s.child;if(pt.flags&16){var a=s.deletions;if(a!==null){for(var d=0;d<a.length;d++){var c=a[d];for(pt=c;pt!==null;){var p=pt;switch(p.tag){case 0:case 11:case 15:Co(8,p,s)}var y=p.child;if(y!==null)y.return=p,pt=y;else for(;pt!==null;){p=pt;var h=p.sibling,w=p.return;if(Ab(p),p===c){pt=null;break}if(h!==null){h.return=w,pt=h;break}pt=w}}}var v=s.alternate;if(v!==null){var k=v.child;if(k!==null){v.child=null;do{var z=k.sibling;k.sibling=null,k=z}while(k!==null)}}pt=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,pt=l;else t:for(;pt!==null;){if(s=pt,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Co(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,pt=f;break t}pt=s.return}}var g=t.current;for(pt=g;pt!==null;){l=pt;var b=l.child;if(l.subtreeFlags&2064&&b!==null)b.return=l,pt=b;else t:for(l=g;pt!==null;){if(a=pt,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Cs(9,a)}}catch(S){Vt(a,a.return,S)}if(a===l){pt=null;break t}var C=a.sibling;if(C!==null){C.return=a.return,pt=C;break t}pt=a.return}}if(Et=i,$r(),er&&typeof er.onPostCommitFiberRoot=="function")try{er.onPostCommitFiberRoot(hs,t)}catch{}o=!0}return o}finally{Rt=r,Ae.transition=e}}return!1}function qc(t,e,r){e=Gn(r,e),e=jb(t,e,1),t=Rr(t,e,1),e=be(),t!==null&&(Qo(t,1,e),ke(t,e))}function Vt(t,e,r){if(t.tag===3)qc(t,t,r);else for(;e!==null;){if(e.tag===3){qc(e,t,r);break}else if(e.tag===1){var o=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Fr===null||!Fr.has(o))){t=Gn(r,t),t=Sb(e,t,1),e=Rr(e,t,1),t=be(),e!==null&&(Qo(e,1,t),ke(e,t));break}}e=e.return}}function Kf(t,e,r){var o=t.pingCache;o!==null&&o.delete(e),e=be(),t.pingedLanes|=t.suspendedLanes&r,te===t&&(ne&r)===r&&(qt===4||qt===3&&(ne&130023424)===ne&&500>Yt()-yd?qr(t,0):hd|=r),ke(t,e)}function Gb(t,e){e===0&&(t.mode&1?(e=si,si<<=1,!(si&130023424)&&(si=4194304)):e=1);var r=be();t=fr(t,e),t!==null&&(Qo(t,e,r),ke(t,r))}function Xf(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),Gb(t,r)}function qf(t,e){var r=0;switch(t.tag){case 13:var o=t.stateNode,i=t.memoizedState;i!==null&&(r=i.retryLane);break;case 19:o=t.stateNode;break;default:throw Error(J(314))}o!==null&&o.delete(e),Gb(t,r)}var Ub;Ub=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||ve.current)ye=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return ye=!1,Lf(t,e,r);ye=!!(t.flags&131072)}else ye=!1,Pt&&e.flags&1048576&&Ku(e,es,e.index);switch(e.lanes=0,e.tag){case 2:var o=e.type;Li(t,e),t=e.pendingProps;var i=$n(e,ge.current);Wn(e,r),i=gd(null,e,o,t,i,r);var s=ud();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xe(o)?(s=!0,Zi(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,sd(e),i.updater=Ss,e.stateNode=i,i._reactInternals=e,na(e,o,t,r),e=sa(null,e,o,!0,s,r)):(e.tag=0,Pt&&s&&Za(e),ue(null,e,i,r),e=e.child),e;case 16:o=e.elementType;t:{switch(Li(t,e),t=e.pendingProps,i=o._init,o=i(o._payload),e.type=o,i=e.tag=Zf(o),t=Oe(o,t),i){case 0:e=ia(null,e,o,t,r);break t;case 1:e=Oc(null,e,o,t,r);break t;case 11:e=Pc(null,e,o,t,r);break t;case 14:e=$c(null,e,o,Oe(o.type,t),r);break t}throw Error(J(306,o,""))}return e;case 0:return o=e.type,i=e.pendingProps,i=e.elementType===o?i:Oe(o,i),ia(t,e,o,i,r);case 1:return o=e.type,i=e.pendingProps,i=e.elementType===o?i:Oe(o,i),Oc(t,e,o,i,r);case 3:t:{if(Tb(e),t===null)throw Error(J(387));o=e.pendingProps,s=e.memoizedState,i=s.element,eb(t,e),os(e,o,null,r);var l=e.memoizedState;if(o=l.element,s.isDehydrated)if(s={element:o,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Gn(Error(J(423)),e),e=Nc(t,e,o,r,i);break t}else if(o!==i){i=Gn(Error(J(424)),e),e=Nc(t,e,o,r,i);break t}else for(Se=Dr(e.stateNode.containerInfo.firstChild),Ce=e,Pt=!0,He=null,r=Zu(e,null,o,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(On(),o===i){e=hr(t,e,r);break t}ue(t,e,o,r)}e=e.child}return e;case 5:return rb(e),t===null&&ta(e),o=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,l=i.children,Kl(o,i)?l=null:s!==null&&Kl(o,s)&&(e.flags|=32),zb(t,e),ue(t,e,l,r),e.child;case 6:return t===null&&ta(e),null;case 13:return Eb(t,e,r);case 4:return ld(e,e.stateNode.containerInfo),o=e.pendingProps,t===null?e.child=Nn(e,null,o,r):ue(t,e,o,r),e.child;case 11:return o=e.type,i=e.pendingProps,i=e.elementType===o?i:Oe(o,i),Pc(t,e,o,i,r);case 7:return ue(t,e,e.pendingProps,r),e.child;case 8:return ue(t,e,e.pendingProps.children,r),e.child;case 12:return ue(t,e,e.pendingProps.children,r),e.child;case 10:t:{if(o=e.type._context,i=e.pendingProps,s=e.memoizedProps,l=i.value,At(rs,o._currentValue),o._currentValue=l,s!==null)if(Ve(s.value,l)){if(s.children===i.children&&!ve.current){e=hr(t,e,r);break t}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){l=s.child;for(var d=a.firstContext;d!==null;){if(d.context===o){if(s.tag===1){d=br(-1,r&-r),d.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?d.next=d:(d.next=p.next,p.next=d),c.pending=d}}s.lanes|=r,d=s.alternate,d!==null&&(d.lanes|=r),ea(s.return,r,e),a.lanes|=r;break}d=d.next}}else if(s.tag===10)l=s.type===e.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(J(341));l.lanes|=r,a=l.alternate,a!==null&&(a.lanes|=r),ea(l,r,e),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===e){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}ue(t,e,i.children,r),e=e.child}return e;case 9:return i=e.type,o=e.pendingProps.children,Wn(e,r),i=Me(i),o=o(i),e.flags|=1,ue(t,e,o,r),e.child;case 14:return o=e.type,i=Oe(o,e.pendingProps),i=Oe(o.type,i),$c(t,e,o,i,r);case 15:return Cb(t,e,e.type,e.pendingProps,r);case 17:return o=e.type,i=e.pendingProps,i=e.elementType===o?i:Oe(o,i),Li(t,e),e.tag=1,xe(o)?(t=!0,Zi(e)):t=!1,Wn(e,r),wb(e,o,i),na(e,o,i,r),sa(null,e,o,!0,t,r);case 19:return Bb(t,e,r);case 22:return Ib(t,e,r)}throw Error(J(156,e.tag))};function Vb(t,e){return vu(t,e)}function Jf(t,e,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(t,e,r,o){return new Jf(t,e,r,o)}function wd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Zf(t){if(typeof t=="function")return wd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Oa)return 11;if(t===Na)return 14}return 2}function Mr(t,e){var r=t.alternate;return r===null?(r=Fe(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function Oi(t,e,r,o,i,s){var l=2;if(o=t,typeof t=="function")wd(t)&&(l=1);else if(typeof t=="string")l=5;else t:switch(t){case kn:return Jr(r.children,i,s,e);case $a:l=8,i|=8;break;case zl:return t=Fe(12,r,e,i|2),t.elementType=zl,t.lanes=s,t;case Tl:return t=Fe(13,r,e,i),t.elementType=Tl,t.lanes=s,t;case El:return t=Fe(19,r,e,i),t.elementType=El,t.lanes=s,t;case ru:return zs(r,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case tu:l=10;break t;case eu:l=9;break t;case Oa:l=11;break t;case Na:l=14;break t;case xr:l=16,o=null;break t}throw Error(J(130,t==null?t:typeof t,""))}return e=Fe(l,r,e,i),e.elementType=t,e.type=o,e.lanes=s,e}function Jr(t,e,r,o){return t=Fe(7,t,o,e),t.lanes=r,t}function zs(t,e,r,o){return t=Fe(22,t,o,e),t.elementType=ru,t.lanes=r,t.stateNode={isHidden:!1},t}function al(t,e,r){return t=Fe(6,t,null,e),t.lanes=r,t}function dl(t,e,r){return e=Fe(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function th(t,e,r,o,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hs(0),this.expirationTimes=Hs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hs(0),this.identifierPrefix=o,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function jd(t,e,r,o,i,s,l,a,d){return t=new th(t,e,r,a,d),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Fe(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},sd(s),t}function eh(t,e,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xn,key:o==null?null:""+o,children:t,containerInfo:e,implementation:r}}function Yb(t){if(!t)return _r;t=t._reactInternals;t:{if(an(t)!==t||t.tag!==1)throw Error(J(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break t;case 1:if(xe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break t}}e=e.return}while(e!==null);throw Error(J(171))}if(t.tag===1){var r=t.type;if(xe(r))return Yu(t,r,e)}return e}function Qb(t,e,r,o,i,s,l,a,d){return t=jd(r,o,!0,t,i,s,l,a,d),t.context=Yb(null),r=t.current,o=be(),i=Ar(r),s=br(o,i),s.callback=e??null,Rr(r,s,i),t.current.lanes=i,Qo(t,i,o),ke(t,o),t}function Ts(t,e,r,o){var i=e.current,s=be(),l=Ar(i);return r=Yb(r),e.context===null?e.context=r:e.pendingContext=r,e=br(s,l),e.payload={element:t},o=o===void 0?null:o,o!==null&&(e.callback=o),t=Rr(i,e,l),t!==null&&(Ue(t,i,l,s),Mi(t,i,l)),l}function us(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Jc(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function Sd(t,e){Jc(t,e),(t=t.alternate)&&Jc(t,e)}function rh(){return null}var Kb=typeof reportError=="function"?reportError:function(t){console.error(t)};function Cd(t){this._internalRoot=t}Es.prototype.render=Cd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(J(409));Ts(t,e,null,null)};Es.prototype.unmount=Cd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;nn(function(){Ts(null,t,null,null)}),e[mr]=null}};function Es(t){this._internalRoot=t}Es.prototype.unstable_scheduleHydration=function(t){if(t){var e=Iu();t={blockedOn:null,target:t,priority:e};for(var r=0;r<jr.length&&e!==0&&e<jr[r].priority;r++);jr.splice(r,0,t),r===0&&Tu(t)}};function Id(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bs(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Zc(){}function nh(t,e,r,o,i){if(i){if(typeof o=="function"){var s=o;o=function(){var c=us(l);s.call(c)}}var l=Qb(e,o,t,0,null,!1,!1,"",Zc);return t._reactRootContainer=l,t[mr]=l.current,Lo(t.nodeType===8?t.parentNode:t),nn(),l}for(;i=t.lastChild;)t.removeChild(i);if(typeof o=="function"){var a=o;o=function(){var c=us(d);a.call(c)}}var d=jd(t,0,!1,null,null,!1,!1,"",Zc);return t._reactRootContainer=d,t[mr]=d.current,Lo(t.nodeType===8?t.parentNode:t),nn(function(){Ts(e,d,r,o)}),d}function Ds(t,e,r,o,i){var s=r._reactRootContainer;if(s){var l=s;if(typeof i=="function"){var a=i;i=function(){var d=us(l);a.call(d)}}Ts(e,l,t,i)}else l=nh(r,e,t,i,o);return us(l)}Su=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=bo(e.pendingLanes);r!==0&&(Ua(e,r|1),ke(e,Yt()),!(Et&6)&&(Un=Yt()+500,$r()))}break;case 13:nn(function(){var o=fr(t,1);if(o!==null){var i=be();Ue(o,t,1,i)}}),Sd(t,1)}};Va=function(t){if(t.tag===13){var e=fr(t,134217728);if(e!==null){var r=be();Ue(e,t,134217728,r)}Sd(t,134217728)}};Cu=function(t){if(t.tag===13){var e=Ar(t),r=fr(t,e);if(r!==null){var o=be();Ue(r,t,e,o)}Sd(t,e)}};Iu=function(){return Rt};zu=function(t,e){var r=Rt;try{return Rt=t,e()}finally{Rt=r}};Pl=function(t,e,r){switch(e){case"input":if(Rl(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var o=r[e];if(o!==t&&o.form===t.form){var i=ks(o);if(!i)throw Error(J(90));ou(o),Rl(o,i)}}}break;case"textarea":su(t,r);break;case"select":e=r.value,e!=null&&Rn(t,!!r.multiple,e,!1)}};bu=vd;pu=nn;var oh={usingClientEntryPoint:!1,Events:[Xo,Cn,ks,gu,uu,vd]},co={findFiberByHostInstance:Yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ih={bundleType:co.bundleType,version:co.version,rendererPackageName:co.rendererPackageName,rendererConfig:co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=hu(t),t===null?null:t.stateNode},findFiberByHostInstance:co.findFiberByHostInstance||rh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hi.isDisabled&&hi.supportsFiber)try{hs=hi.inject(ih),er=hi}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oh;ze.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Id(e))throw Error(J(200));return eh(t,e,null,r)};ze.createRoot=function(t,e){if(!Id(t))throw Error(J(299));var r=!1,o="",i=Kb;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=jd(t,1,!1,null,null,r,!1,o,i),t[mr]=e.current,Lo(t.nodeType===8?t.parentNode:t),new Cd(e)};ze.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(J(188)):(t=Object.keys(t).join(","),Error(J(268,t)));return t=hu(e),t=t===null?null:t.stateNode,t};ze.flushSync=function(t){return nn(t)};ze.hydrate=function(t,e,r){if(!Bs(e))throw Error(J(200));return Ds(null,t,e,!0,r)};ze.hydrateRoot=function(t,e,r){if(!Id(t))throw Error(J(405));var o=r!=null&&r.hydratedSources||null,i=!1,s="",l=Kb;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),e=Qb(e,null,t,1,r??null,i,!1,s,l),t[mr]=e.current,Lo(t),o)for(t=0;t<o.length;t++)r=o[t],i=r._getVersion,i=i(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,i]:e.mutableSourceEagerHydrationData.push(r,i);return new Es(e)};ze.render=function(t,e,r){if(!Bs(e))throw Error(J(200));return Ds(null,t,e,!1,r)};ze.unmountComponentAtNode=function(t){if(!Bs(t))throw Error(J(40));return t._reactRootContainer?(nn(function(){Ds(null,null,t,!1,function(){t._reactRootContainer=null,t[mr]=null})}),!0):!1};ze.unstable_batchedUpdates=vd;ze.unstable_renderSubtreeIntoContainer=function(t,e,r,o){if(!Bs(r))throw Error(J(200));if(t==null||t._reactInternals===void 0)throw Error(J(38));return Ds(t,e,r,!1,o)};ze.version="18.3.1-next-f1338f8080-20240426";function Xb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xb)}catch(t){console.error(t)}}Xb(),Xg.exports=ze;var sh=Xg.exports,qb,tg=sh;qb=tg.createRoot,tg.hydrateRoot;/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Jb=(...t)=>t.filter((e,r,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===r).join(" ").trim();/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ah={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=u.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:i="",children:s,iconNode:l,...a},d)=>u.createElement("svg",{ref:d,...ah,width:e,height:e,stroke:t,strokeWidth:o?Number(r)*24/Number(e):r,className:Jb("lucide",i),...a},[...l.map(([c,p])=>u.createElement(c,p)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=(t,e)=>{const r=u.forwardRef(({className:o,...i},s)=>u.createElement(dh,{ref:s,iconNode:e,className:Jb(`lucide-${lh(t)}`,o),...i}));return r.displayName=`${t}`,r};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=gt("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=gt("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=gt("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=gt("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=gt("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=gt("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=gt("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=gt("CalendarPlus",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=gt("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=gt("ChartLine",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=gt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rs=gt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=gt("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=gt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=gt("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=gt("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=gt("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=gt("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xa=gt("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=gt("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=gt("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=gt("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=gt("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=gt("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=gt("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=gt("HeartPulse",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=gt("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=gt("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fs=gt("ImagePlus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=gt("Images",[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18",key:"nf6bnh"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2",key:"12espp"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=gt("IndianRupee",[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=gt("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=gt("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=gt("LayoutList",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=gt("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=gt("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=gt("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=gt("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=gt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=gt("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=gt("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=gt("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=gt("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=gt("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=gt("PanelLeftOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=gt("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=gt("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=gt("PiggyBank",[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z",key:"1ivx2i"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h.01",key:"xkw8gn"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=gt("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=gt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=gt("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=gt("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=gt("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=gt("Scissors",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=gt("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=gt("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=gt("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ni=gt("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=gt("Sunrise",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=gt("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=gt("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=gt("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=gt("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=gt("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=gt("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=gt("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=gt("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=gt("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=gt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=gt("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),Bd="anvil_token",Dd=()=>localStorage.getItem(Bd),Oh=t=>localStorage.setItem(Bd,t),wa=()=>localStorage.removeItem(Bd),K=async(t,e,r)=>{const o={};r!==void 0&&(o["Content-Type"]="application/json");const i=Dd();i&&(o.Authorization=`Bearer ${i}`);const s=await fetch(`/api${e}`,{method:t,headers:o,body:r!==void 0?JSON.stringify(r):void 0});if(s.status===401)throw wa(),window.dispatchEvent(new Event("anvil-unauthorized")),new Error("Not authenticated");if(s.status===204)return null;if(!s.ok){const l=await s.text();let a=l;try{a=JSON.parse(l).detail||l}catch{}throw new Error(a||`HTTP ${s.status}`)}return s.json()},H={register:t=>K("POST","/auth/register",t),login:t=>K("POST","/auth/login",t),me:()=>K("GET","/auth/me"),getGcalStatus:()=>K("GET","/auth/google/status"),connectGoogle:()=>{window.location.href=`/api/auth/google?token=${encodeURIComponent(Dd()||"")}`},disconnectGoogle:()=>K("DELETE","/auth/google"),getPillars:()=>K("GET","/pillars"),getFocus:()=>K("GET","/focus"),createFocus:t=>K("POST","/focus",t),deleteFocus:t=>K("DELETE",`/focus/${t}`),addScreenTime:(t,e)=>K("POST","/screentime",{screen:t,seconds:e}),getScreenTime:()=>K("GET","/screentime"),getPayouts:()=>K("GET","/rewards/payouts"),createPayout:t=>K("POST","/rewards/payouts",t),deletePayout:t=>K("DELETE",`/rewards/payouts/${t}`),getRewardRates:()=>K("GET","/rewards/rates"),setRewardRate:t=>K("POST","/rewards/rates",t),getMedia:()=>K("GET","/media"),createMedia:t=>K("POST","/media",t),updateMedia:(t,e)=>K("PUT",`/media/${t}`,e),deleteMedia:t=>K("DELETE",`/media/${t}`),restoreMedia:t=>K("POST",`/media/${t}/restore`),getDecks:()=>K("GET","/spiritual/decks"),createDeck:t=>K("POST","/spiritual/decks",t),deleteDeck:t=>K("DELETE",`/spiritual/decks/${t}`),getGoldenGoals:()=>K("GET","/golden/goals"),getGoldenGoal:t=>K("GET",`/golden/goals/${t}`),createGolden:t=>K("POST","/golden/goals",t),updateGolden:(t,e)=>K("PUT",`/golden/goals/${t}`,e),achieveGolden:t=>K("POST",`/golden/goals/${t}/achieve`),unachieveGolden:t=>K("POST",`/golden/goals/${t}/unachieve`),upsertGoldenEntry:(t,e)=>K("PUT",`/golden/goals/${t}/entry`,e),deleteGolden:t=>K("DELETE",`/golden/goals/${t}`),restoreGolden:t=>K("POST",`/golden/goals/${t}/restore`),getKickstart:()=>K("GET","/kickstart/videos"),createKickstart:t=>K("POST","/kickstart/videos",t),updateKickstart:(t,e)=>K("PUT",`/kickstart/videos/${t}`,e),deleteKickstart:t=>K("DELETE",`/kickstart/videos/${t}`),restoreKickstart:t=>K("POST",`/kickstart/videos/${t}/restore`),getTxns:()=>K("GET","/finance/txns"),createTxn:t=>K("POST","/finance/txns",t),updateTxn:(t,e)=>K("PUT",`/finance/txns/${t}`,e),deleteTxn:t=>K("DELETE",`/finance/txns/${t}`),restoreTxn:t=>K("POST",`/finance/txns/${t}/restore`),getSetting:t=>K("GET",`/settings/${t}`),setSetting:(t,e)=>K("PUT",`/settings/${t}`,{value:e}),getTasks:()=>K("GET","/tasks"),createTask:t=>K("POST","/tasks",t),updateTask:(t,e)=>K("PUT",`/tasks/${t}`,e),deleteTask:t=>K("DELETE",`/tasks/${t}`),restoreTask:t=>K("POST",`/tasks/${t}/restore`),scheduleTask:t=>K("PUT",`/tasks/${t}/schedule`),getGoals:t=>K("GET",`/goals${t?`?pillar=${encodeURIComponent(t)}`:""}`),createGoal:t=>K("POST","/goals",t),updateGoal:(t,e)=>K("PUT",`/goals/${t}`,e),deleteGoal:t=>K("DELETE",`/goals/${t}`),restoreGoal:t=>K("POST",`/goals/${t}/restore`),getHabits:()=>K("GET","/habits"),createHabit:t=>K("POST","/habits",t),updateHabit:(t,e)=>K("PUT",`/habits/${t}`,e),deleteHabit:t=>K("DELETE",`/habits/${t}`),restoreHabit:t=>K("POST",`/habits/${t}/restore`),toggleHabitLog:(t,e)=>K("POST",`/habits/${t}/log/${e}`),setHabitLogNote:(t,e,r)=>K("PUT",`/habits/${t}/log/${e}/note`,{note:r}),setHabitLogCount:(t,e,r,o)=>K("PUT",`/habits/${t}/log/${e}/count`,{count:r,note:o}),clearHabitLog:(t,e)=>K("DELETE",`/habits/${t}/log/${e}`),getHabitsYearly:t=>K("GET",`/habits/yearly/${t}`),getJournalEntry:t=>K("GET",`/journal/${t}`),getJournalHistory:(t,e)=>K("GET",`/journal/history/${t}/${e}`),updateJournalMood:(t,e)=>K("PUT",`/journal/${t}`,{mood:e}),addJournalBullet:(t,e,r)=>K("POST",`/journal/${t}/bullets`,{section:e,text:r}),deleteJournalBullet:t=>K("DELETE",`/journal/bullets/${t}`),getSkills:()=>K("GET","/skills"),createSkill:t=>K("POST","/skills",t),updateSkill:(t,e)=>K("PUT",`/skills/${t}`,e),deleteSkill:t=>K("DELETE",`/skills/${t}`),restoreSkill:t=>K("POST",`/skills/${t}/restore`),addSkillNote:(t,e,r)=>K("POST",`/skills/${t}/notes`,{stage:e,text:r}),deleteSkillNote:t=>K("DELETE",`/skill-notes/${t}`),updateSkillNote:(t,e)=>K("PUT",`/skill-notes/${t}`,{text:e}),toggleSkillNote:t=>K("PUT",`/skill-notes/${t}/toggle`),completeSkillStage:(t,e)=>K("POST",`/skills/${t}/complete-stage`,{stage:e}),getScriptures:()=>K("GET","/scriptures"),createScripture:t=>K("POST","/scriptures",t),deleteScripture:t=>K("DELETE",`/scriptures/${t}`),restoreScripture:t=>K("POST",`/scriptures/${t}/restore`),addChapter:(t,e)=>K("POST",`/scriptures/${t}/chapters`,e),updateChapter:(t,e)=>K("PUT",`/chapters/${t}`,e),deleteChapter:t=>K("DELETE",`/chapters/${t}`),restoreChapter:t=>K("POST",`/chapters/${t}/restore`),addInsight:(t,e)=>K("POST",`/chapters/${t}/insights`,{text:e}),deleteInsight:t=>K("DELETE",`/insights/${t}`),getTopics:()=>K("GET","/revision/topics"),createTopic:t=>K("POST","/revision/topics",t),updateTopic:(t,e)=>K("PUT",`/revision/topics/${t}`,e),deleteTopic:t=>K("DELETE",`/revision/topics/${t}`),restoreTopic:t=>K("POST",`/revision/topics/${t}/restore`),getDueToday:()=>K("GET","/revision/due-today"),getCalendar:(t,e)=>K("GET",`/revision/calendar/${t}/${e}`),toggleReviewDone:t=>K("PUT",`/revision/reviews/${t}/done`),getAffirmations:()=>K("GET","/affirmations"),createAffirmation:t=>K("POST","/affirmations",t),updateAffirmation:(t,e)=>K("PUT",`/affirmations/${t}`,e),deleteAffirmation:t=>K("DELETE",`/affirmations/${t}`),restoreAffirmation:t=>K("POST",`/affirmations/${t}/restore`)},Nh=7e3;function cn(t,e,r){const[o,i]=u.useState([]),s=u.useRef({}),l=u.useCallback(async(c,p="Item")=>{await t(c),r();const y=`${c}-${Date.now()}`;i(h=>[...h,{id:y,itemId:c,label:p}]),s.current[y]=setTimeout(()=>{i(h=>h.filter(w=>w.id!==y)),delete s.current[y]},Nh)},[t,r]),a=u.useCallback(async c=>{const p=o.find(y=>y.id===c);p&&(clearTimeout(s.current[c]),delete s.current[c],i(y=>y.filter(h=>h.id!==c)),await e(p.itemId),r())},[o,e,r]),d=u.useCallback(c=>{clearTimeout(s.current[c]),delete s.current[c],i(p=>p.filter(y=>y.id!==c))},[]);return{deleteItem:l,toasts:o,handleUndo:a,handleDismiss:d}}function gn({toasts:t,onUndo:e,onDismiss:r}){return n.jsx("div",{style:vn.container,children:t.map(o=>n.jsx(Hh,{toast:o,onUndo:e,onDismiss:r},o.id))})}function Hh({toast:t,onUndo:e,onDismiss:r}){const[o,i]=u.useState(100);return u.useEffect(()=>{const s=Date.now(),l=7e3,a=setInterval(()=>{const d=Date.now()-s,c=Math.max(0,100-d/l*100);i(c),c===0&&clearInterval(a)},50);return()=>clearInterval(a)},[]),n.jsxs("div",{style:vn.toast,children:[n.jsx("div",{style:{...vn.bar,width:`${o}%`}}),n.jsxs("span",{style:vn.msg,children:[t.label," deleted"]}),n.jsx("button",{style:vn.undoBtn,onClick:()=>e(t.id),children:"Undo"}),n.jsx("button",{style:vn.closeBtn,onClick:()=>r(t.id),children:"×"})]})}const vn={container:{position:"fixed",bottom:24,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",gap:8,zIndex:999,pointerEvents:"none"},toast:{position:"relative",display:"flex",alignItems:"center",gap:12,background:"var(--accent-strong)",color:"#fff",borderRadius:10,padding:"12px 16px",fontSize:13.5,fontFamily:"'Inter', system-ui, sans-serif",boxShadow:"0 4px 20px rgba(0,0,0,0.25)",minWidth:260,overflow:"hidden",pointerEvents:"all"},bar:{position:"absolute",bottom:0,left:0,height:3,background:"#4C9A6B",transition:"width 0.05s linear",borderRadius:"0 0 0 10px"},msg:{flex:1,fontWeight:500},undoBtn:{border:"1px solid rgba(255,255,255,0.3)",background:"none",color:"#4C9A6B",fontWeight:700,fontSize:13,padding:"4px 10px",borderRadius:6,cursor:"pointer",fontFamily:"inherit"},closeBtn:{border:"none",background:"none",color:"rgba(255,255,255,0.5)",cursor:"pointer",fontSize:18,lineHeight:1,padding:"0 2px"}},ir={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},ng=[{id:"Q1",symbol:"™",title:"Do Now",sub:"Important · Urgent",accent:"#C2536B"},{id:"Q2",symbol:"©",title:"Schedule",sub:"Important · Not Urgent",accent:"#3A7CA5"},{id:"Q3",symbol:"®",title:"Delegate",sub:"Not Important · Urgent",accent:"#C9A227"},{id:"Q4",symbol:"•",title:"Drop",sub:"Not Important · Not Urgent",accent:"#8A8780"}];function pp(){return new Date().toLocaleDateString("en-CA",{timeZone:"Asia/Kolkata"})}function mp(){const t=new Date(new Date().toLocaleString("en-US",{timeZone:"Asia/Kolkata"})),r=t.getMinutes()<30?30:0,o=r===0?t.getHours()+1:t.getHours();return`${String(o%24).padStart(2,"0")}:${String(r).padStart(2,"0")}`}function og(t,e){const[r,o]=t.split(":").map(Number),i=r*60+o+e;return`${String(Math.floor(i/60)%24).padStart(2,"0")}:${String(i%60).padStart(2,"0")}`}function Gh(t){return t?new Date(t).toLocaleString("en-IN",{timeZone:"Asia/Kolkata",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit",hour12:!0}):""}const vi=()=>({title:"",pillar:"Financial",est:30,date:pp(),startTime:mp()});function Uh(){const[t,e]=u.useState([]),[r,o]=u.useState([]),[i,s]=u.useState("All"),[l,a]=u.useState(null),[d,c]=u.useState(null),[p,y]=u.useState(vi()),[h,w]=u.useState(null),[v,k]=u.useState(vi()),[z,f]=u.useState({connected:!1,configured:!1}),g=u.useCallback(()=>H.getTasks().then(e).catch(console.error),[]);u.useEffect(()=>{g(),H.getGcalStatus().then(f).catch(()=>{}),H.getGoals().then(L=>o(L.filter(st=>st.horizon==="Weekly"))).catch(()=>{})},[g]);const b=Object.keys(ir),C=r.filter(L=>i==="All"||L.pillar===i),S=r.find(L=>L.id===l)||null,B=t.filter(L=>l!=null?L.goal_id===l:i!=="All"?L.pillar===i:!0),O=L=>{s(L),a(null),c(null),y(st=>({...st,pillar:L==="All"?"Financial":L}))},Y=L=>{a(L),c(null);const st=r.find(q=>q.id===L);st&&y(q=>({...q,pillar:st.pillar}))},{deleteItem:F,toasts:N,handleUndo:j,handleDismiss:T}=cn(H.deleteTask,H.restoreTask,g),x=L=>B.filter(st=>st.quadrant===L),U=L=>x(L).reduce((st,q)=>st+q.time_estimate_min,0),bt=L=>L>=60?`${Math.floor(L/60)}h${L%60?` ${L%60}m`:""}`:`${L}m`,et=L=>{var q;return`${((q=ng.find(Z=>Z.id===L.quadrant))==null?void 0:q.symbol)??""} ${L.title}`},D=async L=>{if(!p.title.trim())return;const st=p.date&&p.startTime?`${p.date}T${p.startTime}:00`:null;await H.createTask({pillar:S?S.pillar:p.pillar,title:p.title,quadrant:L,time_estimate_min:Number(p.est)||30,start_datetime:st,goal_id:l??null}),y(vi()),c(null),g()},A=(L,st)=>F(L,st),M=L=>{const st=L.start_datetime?L.start_datetime.split("T"):[];w(L.id),c(null),k({title:L.title,pillar:L.pillar,est:L.time_estimate_min,date:st[0]||pp(),startTime:(st[1]||"").slice(0,5)||mp()})},V=async L=>{if(!v.title.trim())return;const st=v.date&&v.startTime?`${v.date}T${v.startTime}:00`:null;await H.updateTask(L.id,{title:v.title.trim(),pillar:v.pillar,time_estimate_min:Number(v.est)||30,start_datetime:st}),w(null),g()},W=u.useRef(null),R=u.useRef(null),[m,G]=u.useState(null),lt=(L,st)=>{var Z;const q=document.elementFromPoint(L,st);return q&&q.closest&&((Z=q.closest("[data-quad]"))==null?void 0:Z.getAttribute("data-quad"))||null};u.useEffect(()=>{const L=q=>{const Z=W.current;if(!Z)return;const X=Math.hypot(q.clientX-Z.startX,q.clientY-Z.startY);if(!Z.active){if(Z.pointerType!=="mouse"){X>12&&(clearTimeout(R.current),W.current=null);return}if(X<6)return;Z.active=!0,document.body.style.userSelect="none"}q.cancelable&&q.preventDefault(),Z.overQ=lt(q.clientX,q.clientY),G({id:Z.task.id,title:Z.task.title,x:q.clientX,y:q.clientY,overQ:Z.overQ})},st=()=>{clearTimeout(R.current);const q=W.current;W.current=null,document.body.style.userSelect="",document.body.style.touchAction="",G(null),q&&q.active&&q.overQ&&q.overQ!==q.task.quadrant&&H.updateTask(q.task.id,{quadrant:q.overQ}).then(g).catch(()=>{})};return window.addEventListener("pointermove",L,{passive:!1}),window.addEventListener("pointerup",st),window.addEventListener("pointercancel",st),()=>{window.removeEventListener("pointermove",L),window.removeEventListener("pointerup",st),window.removeEventListener("pointercancel",st)}},[g]);const rt=(L,st)=>{L.pointerType==="mouse"&&L.button!==0||(W.current={task:st,startX:L.clientX,startY:L.clientY,active:!1,pointerType:L.pointerType,overQ:null},L.pointerType!=="mouse"&&(R.current=setTimeout(()=>{const q=W.current;q&&(q.active=!0,document.body.style.touchAction="none",G({id:q.task.id,title:q.task.title,x:q.startX,y:q.startY,overQ:q.task.quadrant}))},280)))};return n.jsxs("div",{style:nt.page,children:[n.jsxs("div",{style:nt.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:nt.eyebrow,children:"Anvil · Weekly Routing"}),n.jsx("h1",{style:nt.h1,children:"Weekly Routing"})]}),n.jsxs("div",{style:nt.headRight,children:[n.jsx("div",{style:nt.legend,children:Object.entries(ir).map(([L,st])=>n.jsxs("span",{style:nt.legendItem,children:[n.jsx("span",{style:{...nt.dot,background:st.dot}}),L]},L))}),z.configured&&(z.connected?n.jsxs("button",{style:nt.gcalBadgeOn,title:"Disconnect Google Calendar",onClick:()=>H.disconnectGoogle().then(()=>f({...z,connected:!1})),children:[n.jsx(yi,{size:13})," Google Calendar connected"]}):n.jsxs("button",{style:nt.gcalBadgeOff,onClick:()=>H.connectGoogle(),children:[n.jsx(yi,{size:13})," Connect Google Calendar"]}))]})]}),n.jsx("div",{style:nt.filterBar,children:["All",...b].map(L=>{const st=i===L,q=ir[L];return n.jsxs("button",{onClick:()=>O(L),style:{...nt.pillChip,...st?q?{background:q.dot,color:"#fff",borderColor:q.dot}:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"}:{}},children:[q&&n.jsx("span",{style:{...nt.dot,background:st?"#fff":q.dot}}),L==="All"?"All":L]},L)})}),n.jsxs("div",{style:nt.goalBar,children:[n.jsx("button",{onClick:()=>a(null),style:{...nt.goalChip,...l==null?nt.goalChipOn:{}},children:"All goals"}),C.map(L=>{var Z;const st=((Z=ir[L.pillar])==null?void 0:Z.dot)||"#9A968C",q=l===L.id;return n.jsxs("button",{onClick:()=>Y(L.id),style:{...nt.goalChip,...q?{background:st,color:"#fff",borderColor:st}:{}},title:L.title,children:[n.jsx("span",{style:{...nt.dot,background:q?"#fff":st}}),n.jsx("span",{style:nt.goalChipText,children:L.title})]},L.id)}),C.length===0&&n.jsxs("span",{style:nt.goalEmpty,children:["No weekly goals",i!=="All"?` for ${i}`:""," — create them in Goals."]})]}),n.jsx("div",{style:nt.grid,children:ng.map(L=>{var st,q;return n.jsxs("section",{"data-quad":L.id,style:{...nt.quad,borderTop:`3px solid ${L.accent}`,...m&&m.overQ===L.id&&m.overQ!==((st=t.find(Z=>Z.id===m.id))==null?void 0:st.quadrant)?{outline:`2px dashed ${L.accent}`,outlineOffset:2,background:"var(--hover)"}:{}},children:[n.jsxs("header",{style:nt.quadHead,children:[n.jsxs("div",{style:nt.quadTitleRow,children:[n.jsx("span",{style:{...nt.symbol,color:L.accent},children:L.symbol}),n.jsxs("div",{children:[n.jsx("div",{style:nt.quadTitle,children:L.title}),n.jsx("div",{style:nt.quadSub,children:L.sub})]})]}),n.jsx("span",{style:nt.quadTotal,children:bt(U(L.id))})]}),n.jsxs("div",{style:nt.list,children:[x(L.id).map(Z=>{const X=ir[Z.pillar]||ir.Financial,vt=!!Z.gcal_event_id;return h===Z.id?n.jsxs("div",{style:nt.addBox,children:[n.jsx("input",{autoFocus:!0,placeholder:"Task title",value:v.title,onChange:ut=>k({...v,title:ut.target.value}),onKeyDown:ut=>ut.key==="Enter"&&V(Z),style:nt.input}),n.jsxs("div",{style:nt.dateTimeRow,children:[n.jsxs("div",{style:nt.dateTimeGroup,children:[n.jsx("label",{style:nt.dtLabel,children:"Date"}),n.jsx("input",{type:"date",value:v.date,onChange:ut=>k({...v,date:ut.target.value}),style:nt.dtInput})]}),n.jsxs("div",{style:nt.dateTimeGroup,children:[n.jsx("label",{style:nt.dtLabel,children:"Start"}),n.jsx("input",{type:"time",value:v.startTime,onChange:ut=>k({...v,startTime:ut.target.value}),style:nt.dtInput})]}),n.jsxs("div",{style:nt.dateTimeGroup,children:[n.jsx("label",{style:nt.dtLabel,children:"End"}),n.jsx("div",{style:nt.dtEndValue,children:og(v.startTime,Number(v.est)||30)})]})]}),n.jsxs("div",{style:nt.addRow,children:[n.jsx("select",{value:v.pillar,onChange:ut=>k({...v,pillar:ut.target.value}),style:nt.select,children:Object.keys(ir).map(ut=>n.jsx("option",{children:ut},ut))}),n.jsx("input",{type:"number",value:v.est,onChange:ut=>k({...v,est:ut.target.value}),style:{...nt.input,width:60}}),n.jsx("span",{style:nt.minLabel,children:"min"}),n.jsx("button",{onClick:()=>V(Z),style:nt.saveBtn,children:n.jsx(zt,{size:14})}),n.jsx("button",{onClick:()=>w(null),style:nt.cancelBtn,children:n.jsx(jt,{size:14})})]})]},Z.id):n.jsxs("div",{onPointerDown:ut=>rt(ut,Z),style:{...nt.card,background:X.soft,cursor:"grab",touchAction:"pan-y",...(m==null?void 0:m.id)===Z.id?{opacity:.4}:{}},children:[n.jsx("span",{style:{...nt.cardBar,background:X.dot}}),n.jsxs("div",{style:nt.cardBody,children:[n.jsx("div",{style:nt.cardTitle,children:Z.title}),Z.start_datetime&&n.jsxs("div",{style:nt.eventTime,children:[n.jsx(yi,{size:10}),Gh(Z.start_datetime),vt&&n.jsx("span",{style:nt.syncedDot,title:"Synced to Google Calendar"})]}),n.jsxs("div",{style:nt.cardMeta,children:[n.jsxs("span",{style:nt.metaPill,children:[n.jsx("span",{style:{...nt.dot,background:X.dot,width:7,height:7}}),Z.pillar]}),n.jsxs("span",{style:nt.metaPill,children:[n.jsx(ph,{size:11})," ",bt(Z.time_estimate_min)]})]})]}),n.jsxs("div",{style:nt.cardActions,children:[vt&&n.jsx("span",{title:`On calendar as "${et(Z)}"`,style:nt.calDoneIcon,children:n.jsx(zt,{size:14})}),n.jsx("button",{onClick:()=>M(Z),onPointerDown:ut=>ut.stopPropagation(),style:nt.delBtn,title:"Edit",children:n.jsx(pe,{size:12})}),n.jsx("button",{onClick:()=>A(Z.id,Z.title),onPointerDown:ut=>ut.stopPropagation(),style:nt.delBtn,children:n.jsx(jt,{size:13})})]})]},Z.id)}),d===L.id?n.jsxs("div",{style:nt.addBox,children:[n.jsx("input",{autoFocus:!0,placeholder:"Task title",value:p.title,onChange:Z=>y({...p,title:Z.target.value}),onKeyDown:Z=>Z.key==="Enter"&&D(L.id),style:nt.input}),n.jsxs("div",{style:nt.dateTimeRow,children:[n.jsxs("div",{style:nt.dateTimeGroup,children:[n.jsx("label",{style:nt.dtLabel,children:"Date"}),n.jsx("input",{type:"date",value:p.date,onChange:Z=>y({...p,date:Z.target.value}),style:nt.dtInput})]}),n.jsxs("div",{style:nt.dateTimeGroup,children:[n.jsx("label",{style:nt.dtLabel,children:"Start"}),n.jsx("input",{type:"time",value:p.startTime,onChange:Z=>y({...p,startTime:Z.target.value}),style:nt.dtInput})]}),n.jsxs("div",{style:nt.dateTimeGroup,children:[n.jsx("label",{style:nt.dtLabel,children:"End"}),n.jsx("div",{style:nt.dtEndValue,children:og(p.startTime,Number(p.est)||30)})]})]}),n.jsxs("div",{style:nt.addRow,children:[S?n.jsxs("span",{style:nt.goalPillarTag,children:[n.jsx("span",{style:{...nt.dot,background:(q=ir[S.pillar])==null?void 0:q.dot}})," ",S.pillar]}):n.jsx("select",{value:p.pillar,onChange:Z=>y({...p,pillar:Z.target.value}),style:nt.select,children:Object.keys(ir).map(Z=>n.jsx("option",{children:Z},Z))}),n.jsx("input",{type:"number",value:p.est,onChange:Z=>y({...p,est:Z.target.value}),style:{...nt.input,width:60}}),n.jsx("span",{style:nt.minLabel,children:"min"}),z.connected&&n.jsx("span",{style:nt.gcalHint,title:"Will sync to Google Calendar",children:n.jsx(yi,{size:12})}),n.jsx("button",{onClick:()=>D(L.id),style:nt.saveBtn,children:n.jsx(zt,{size:14})}),n.jsx("button",{onClick:()=>{c(null),y(vi())},style:nt.cancelBtn,children:n.jsx(jt,{size:14})})]})]}):n.jsxs("button",{onClick:()=>c(L.id),style:nt.addTrigger,children:[n.jsx(ce,{size:13})," Add task"]})]})]},L.id)})}),m&&n.jsx("div",{style:{...nt.dragClone,left:m.x+12,top:m.y+12},children:m.title}),n.jsx(gn,{toasts:N,onUndo:j,onDismiss:T})]})}const nt={page:{fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:16,marginBottom:22},headRight:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:10},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces', Georgia, serif"},legend:{display:"flex",gap:14,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"var(--text-2)",fontWeight:500},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},gcalBadgeOn:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:500,color:"#4C9A6B",background:"rgba(76,154,107,0.10)",border:"1px solid rgba(76,154,107,0.3)",borderRadius:20,padding:"5px 12px",cursor:"pointer"},gcalBadgeOff:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:500,color:"var(--text-2)",background:"var(--surface)",border:"1px solid #DCDAD3",borderRadius:20,padding:"5px 12px",cursor:"pointer"},filterBar:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:10},pillChip:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},goalBar:{display:"flex",gap:7,flexWrap:"wrap",alignItems:"center",marginBottom:18,paddingBottom:14,borderBottom:"1px solid var(--border)"},goalChip:{display:"inline-flex",alignItems:"center",gap:6,maxWidth:220,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},goalChipOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},goalChipText:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},goalEmpty:{fontSize:12,color:"var(--text-3)",fontStyle:"italic"},goalPillarTag:{display:"inline-flex",alignItems:"center",gap:6,fontSize:12.5,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"7px 10px",borderRadius:6,flex:1},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:16},quad:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.06)"},quadHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14},quadTitleRow:{display:"flex",gap:10,alignItems:"center"},symbol:{fontSize:20,lineHeight:1},quadTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em"},quadSub:{fontSize:11,color:"var(--text-3)",marginTop:1,letterSpacing:"0.02em"},quadTotal:{fontSize:12,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"3px 9px",borderRadius:20},list:{display:"flex",flexDirection:"column",gap:8},card:{display:"flex",alignItems:"stretch",gap:10,borderRadius:9,padding:"10px 10px 10px 0",overflow:"hidden"},cardBar:{width:3,borderRadius:3,flexShrink:0},cardBody:{flex:1,minWidth:0},cardTitle:{fontSize:13.5,fontWeight:500,lineHeight:1.35,marginBottom:4},eventTime:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"#3A7CA5",fontWeight:500,marginBottom:5},syncedDot:{width:6,height:6,borderRadius:"50%",background:"#4C9A6B",display:"inline-block",marginLeft:2},cardMeta:{display:"flex",gap:8,flexWrap:"wrap"},metaPill:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"var(--text-2)",fontWeight:500},cardActions:{display:"flex",flexDirection:"column",gap:4,alignSelf:"center",flexShrink:0},calDoneIcon:{width:30,height:30,borderRadius:8,background:"#4C9A6B",color:"#fff",display:"grid",placeItems:"center"},delBtn:{width:30,height:30,borderRadius:8,border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center"},addTrigger:{display:"flex",alignItems:"center",gap:5,fontSize:12.5,color:"var(--text-3)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"8px 10px",cursor:"pointer",fontWeight:500,marginTop:2},addBox:{border:"1px solid var(--border)",borderRadius:9,padding:10,display:"flex",flexDirection:"column",gap:8},dateTimeRow:{display:"flex",gap:8,alignItems:"flex-end"},dateTimeGroup:{display:"flex",flexDirection:"column",gap:3,flex:1},dtLabel:{fontSize:10,fontWeight:600,color:"var(--text-3)",letterSpacing:"0.08em",textTransform:"uppercase"},dtInput:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},dtEndValue:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,color:"var(--text-2)",background:"var(--bg)"},addRow:{display:"flex",alignItems:"center",gap:6},input:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",flex:1,minWidth:0},select:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 8px",fontSize:12.5,fontFamily:"inherit",flex:1},minLabel:{fontSize:11,color:"var(--text-3)"},gcalHint:{color:"#3A7CA5",display:"grid",placeItems:"center"},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"},dragClone:{position:"fixed",zIndex:1e3,pointerEvents:"none",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:8,padding:"8px 12px",fontSize:13,fontWeight:600,color:"var(--text)",boxShadow:"0 8px 24px rgba(0,0,0,0.25)",maxWidth:220,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},Be={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},ig=Object.keys(Be),cl=["Yearly","Quarterly","Monthly","Weekly"],wr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],sg=[{label:"Q1 · Jan–Mar",startMonth:0},{label:"Q2 · Apr–Jun",startMonth:3},{label:"Q3 · Jul–Sep",startMonth:6},{label:"Q4 · Oct–Dec",startMonth:9}],ja=new Date().getFullYear(),lg=Array.from({length:8},(t,e)=>ja-1+e);function Vh(t=720){const[e,r]=u.useState(()=>window.innerWidth<t);return u.useEffect(()=>{const o=()=>r(window.innerWidth<t);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[t]),e}const mo=864e5,Jt=30,To=190,fn=t=>new Date(t+"T00:00:00"),ag=t=>t.toLocaleDateString("en-US",{month:"short",day:"numeric"}),Yh=[{key:"yearly",label:"Yearly",horizons:["Yearly"]},{key:"quarterly",label:"Quarterly",horizons:["Quarterly"]},{key:"mw",label:"Monthly & Weekly",horizons:["Monthly","Weekly"]}],dg={Yearly:"Yr",Quarterly:"Q",Monthly:"Mo",Weekly:"Wk"},Qh={Yearly:"Y",Quarterly:"Q",Monthly:"M",Weekly:"W"},cg={Yearly:0,Quarterly:1,Monthly:2,Weekly:3},gl=t=>cl[Math.min(cl.indexOf(t)+1,cl.length-1)],xi=t=>{if(!t||!t.start_date)return Array.from({length:12},(l,a)=>a);const e=new Date(t.start_date+"T00:00:00"),r=new Date(t.end_date+"T00:00:00"),o=e.getFullYear(),i=e.getMonth(),s=r.getFullYear()>o?11:r.getMonth();return Array.from({length:s-i+1},(l,a)=>i+a)},ki=t=>new Date(t+"T00:00:00").getFullYear(),fp=(t,e,r)=>{const o=(r-1)*7+1,i=Math.min(o+6,new Date(t,e+1,0).getDate()),s=String(e+1).padStart(2,"0");return{start_date:`${t}-${s}-${String(o).padStart(2,"0")}`,end_date:`${t}-${s}-${String(i).padStart(2,"0")}`}},Ln=(t,e,r,o=1)=>{const i=e;switch(t){case"Yearly":return{start_date:`${i}-01-01`,end_date:`${i}-12-31`};case"Quarterly":{const s=Math.floor(r/3)*3,l=s+1,a=s+3,d=new Date(i,a,0).getDate();return{start_date:`${i}-${String(l).padStart(2,"0")}-01`,end_date:`${i}-${String(a).padStart(2,"0")}-${d}`}}case"Monthly":{const s=new Date(i,r+1,0).getDate();return{start_date:`${i}-${String(r+1).padStart(2,"0")}-01`,end_date:`${i}-${String(r+1).padStart(2,"0")}-${s}`}}case"Weekly":return fp(i,r,o);default:return{start_date:`${i}-01-01`,end_date:`${i}-12-31`}}},hp=(t,e)=>{const r=new Date(t+"T00:00:00");return r.setDate(r.getDate()+e),`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}-${String(r.getDate()).padStart(2,"0")}`},Sa=(t,e)=>Math.round((new Date(e+"T00:00:00")-new Date(t+"T00:00:00"))/mo)+1,Kh=(t,e)=>new Date(t,e+1,0).getDate(),Ca=t=>{const e=new Date(t.start_date+"T00:00:00");if(t.horizon==="Monthly")return Kh(e.getFullYear(),e.getMonth());if(t.horizon==="Weekly"){const r=Math.min(Math.max(Math.ceil(e.getDate()/7),1),4),o=fp(e.getFullYear(),e.getMonth(),r);return Sa(o.start_date,o.end_date)}return Sa(t.start_date,t.end_date)},gg=t=>Math.round(Ca(t)*1.5),Xh=t=>t.horizon==="Monthly"||t.horizon==="Weekly",qh=(t,e)=>{const r=e.getFullYear(),o=e.getMonth();return Ln("Weekly",r,o,Math.min(Math.max(Math.ceil(e.getDate()/7),1),4))},Jh=(t,e)=>{const r=new Date(t.start_date+"T00:00:00");if(t.horizon==="Yearly")return Ln("Yearly",r.getFullYear()+e,0);if(t.horizon==="Quarterly"){const o=r.getFullYear()*12+Math.floor(r.getMonth()/3)*3+e*3;return Ln("Quarterly",Math.floor(o/12),(o%12+12)%12)}if(t.horizon==="Monthly"){const o=r.getFullYear()*12+r.getMonth()+e;return Ln("Monthly",Math.floor(o/12),(o%12+12)%12)}return qh("Weekly",new Date(hp(t.start_date,e*7)+"T00:00:00"))},Zh=t=>{if(!t.start_date)return"";const e=new Date(t.start_date+"T00:00:00"),r=e.getMonth();switch(t.horizon){case"Yearly":return`${e.getFullYear()}`;case"Quarterly":return`Q${Math.floor(r/3)+1} ${e.getFullYear()}`;case"Monthly":return`${wr[r]} ${e.getFullYear()}`;case"Weekly":return`${wr[r]} W${Math.ceil(e.getDate()/7)}`;default:return""}};function ty(){const[t,e]=u.useState([]),[r,o]=u.useState("All"),[i,s]=u.useState({}),[l,a]=u.useState({}),[d,c]=u.useState(null),[p,y]=u.useState(""),[h,w]=u.useState(0),[v,k]=u.useState(1),[z,f]=u.useState(ja),[g,b]=u.useState(null),C=Vh(),[S,B]=u.useState(!C),[O,Y]=u.useState("day"),[F,N]=u.useState(null),j=u.useRef(null);u.useEffect(()=>{j.current=F},[F]);const[T,x]=u.useState(null),U=u.useRef(null);u.useEffect(()=>{U.current=T},[T]);const bt=u.useRef(null),[et,D]=u.useState(null),A=u.useRef(null),[M,V]=u.useState(null),[W,R]=u.useState(null),m=(I,_)=>{if(M===_){V(null);return}const mt=I.currentTarget.getBoundingClientRect(),xt=mt.bottom+220<window.innerHeight;R({right:Math.max(8,window.innerWidth-mt.right),...xt?{top:mt.bottom+4}:{bottom:window.innerHeight-mt.top+4}}),V(_)},G=I=>{clearTimeout(A.current),A.current=setTimeout(()=>D(I),350)},lt=()=>{clearTimeout(A.current),D(null)},rt=u.useCallback(()=>{H.getGoals().then(e).catch(console.error)},[]);u.useEffect(()=>{rt()},[rt]);const{deleteItem:L,toasts:st,handleUndo:q,handleDismiss:Z}=cn(H.deleteGoal,H.restoreGoal,rt),X=u.useCallback(async()=>{const I=j.current;if(N(null),!I)return;const _=Math.round(I.dx/(I.stepPx||Jt*3));if(!_)return;const mt=Jh(I.g,_);mt.start_date!==I.g.start_date&&(await H.updateGoal(I.g.id,{pillar:I.g.pillar,start_date:mt.start_date,end_date:mt.end_date}),rt())},[rt]),vt=!!F;u.useEffect(()=>{if(!vt)return;const I=mt=>N(xt=>xt&&{...xt,dx:mt.clientX-xt.startX}),_=()=>X();return window.addEventListener("pointermove",I),window.addEventListener("pointerup",_),()=>{window.removeEventListener("pointermove",I),window.removeEventListener("pointerup",_)}},[vt,X]);const ut=u.useCallback(async()=>{const I=U.current;if(x(null),!I)return;const _=I.g,mt=Ca(_),xt=gg(_),Lt=Math.max(mt,Math.min(xt,Sa(_.start_date,_.end_date)+Math.round(I.dx/Jt))),ie=hp(_.start_date,Lt-1);ie!==_.end_date&&(await H.updateGoal(_.id,{end_date:ie}),rt())},[rt]),Bt=!!T;u.useEffect(()=>{if(!Bt)return;const I=mt=>x(xt=>xt&&{...xt,dx:mt.clientX-xt.startX}),_=()=>ut();return window.addEventListener("pointermove",I),window.addEventListener("pointerup",_),()=>{window.removeEventListener("pointermove",I),window.removeEventListener("pointerup",_)}},[Bt,ut]);const $t=r==="All",_e=Be[r]||{dot:"var(--text-3)"},Le=$t?t:t.filter(I=>I.pillar===r),Or=Le.filter(I=>!I.parent_goal_id),$=I=>Le.filter(_=>_.parent_goal_id===I),kt=I=>a(_=>({..._,[I]:!_[I]})),Mt=I=>I.horizon==="Monthly"||I.horizon==="Weekly",ee=I=>i[I.id]!==void 0?i[I.id]:Mt(I),Ye=I=>s(_=>({..._,[I.id]:!ee(I)})),Qe=(I,_=null)=>{c(I),y(""),k(1),f(_?ki(_.start_date):ja);const mt=I==="ROOT"?"Yearly":gl(_==null?void 0:_.horizon),xt=I==="ROOT"?[0]:xi(_);w(mt==="Quarterly"?Math.floor(xt[0]/3)*3:xt[0]??0)},Fd=async(I,_)=>{if(!p.trim())return;const mt=(_==null?void 0:_.horizon)??null,xt=I==="ROOT"?"Yearly":gl(mt),Lt=I==="ROOT"?r:(_==null?void 0:_.pillar)||r,ie=xt==="Yearly"?Number(z):_?ki(_.start_date):Number(z),{start_date:wt,end_date:se}=Ln(xt,ie,h,v);await H.createGoal({pillar:Lt,title:p.trim(),horizon:xt,parent_goal_id:I==="ROOT"?null:I,start_date:wt,end_date:se}),I!=="ROOT"&&a(Pe=>({...Pe,[I]:!0})),c(null),y(""),rt()},Ad=I=>{const _=I.start_date?new Date(I.start_date+"T00:00:00"):new Date,mt=_.getMonth(),xt=Math.min(Math.max(Math.ceil(_.getDate()/7),1),4);b({id:I.id,title:I.title,pillar:I.pillar,horizon:I.horizon,parentGoal:t.find(Lt=>Lt.id===I.parent_goal_id)||null,year:ki(I.start_date),month:I.horizon==="Quarterly"?Math.floor(mt/3)*3:mt,week:xt})},Md=async()=>{if(!g||!g.title.trim())return;let I=g.month;g.horizon==="Weekly"&&(I=xi(g.parentGoal)[0]);const _=g.horizon==="Yearly"?Number(g.year):g.parentGoal?ki(g.parentGoal.start_date):Number(g.year),{start_date:mt,end_date:xt}=Ln(g.horizon,_,I,g.week);await H.updateGoal(g.id,{title:g.title.trim(),pillar:g.pillar,start_date:mt,end_date:xt}),b(null),rt()},Wd=({parentId:I,parentGoal:_,depth:mt})=>{const xt=I==="ROOT"?"Yearly":gl((_==null?void 0:_.horizon)??null),Lt=I==="ROOT"?Array.from({length:12},(wt,se)=>se):xi(_),ie=sg.filter(wt=>Lt.includes(wt.startMonth));return n.jsxs("div",{style:{...Q.addBox,marginLeft:mt*24},children:[n.jsx("input",{autoFocus:!0,placeholder:`New ${xt.toLowerCase()} goal…`,value:p,onChange:wt=>y(wt.target.value),onKeyDown:wt=>{wt.key==="Enter"&&Fd(I,_),wt.key==="Escape"&&c(null)},style:Q.input}),xt==="Yearly"&&n.jsx("select",{value:z,onChange:wt=>f(Number(wt.target.value)),style:Q.monthSelect,children:lg.map(wt=>n.jsx("option",{value:wt,children:wt},wt))}),xt==="Quarterly"&&n.jsx("select",{value:h,onChange:wt=>w(Number(wt.target.value)),style:Q.monthSelect,children:ie.map(wt=>n.jsx("option",{value:wt.startMonth,children:wt.label},wt.startMonth))}),xt==="Monthly"&&n.jsx("select",{value:h,onChange:wt=>w(Number(wt.target.value)),style:Q.monthSelect,children:Lt.map(wt=>n.jsx("option",{value:wt,children:wr[wt]},wt))}),xt==="Weekly"&&n.jsxs(n.Fragment,{children:[n.jsx("span",{style:Q.inheritTag,children:wr[Lt[0]]}),n.jsx("select",{value:v,onChange:wt=>k(Number(wt.target.value)),style:Q.monthSelect,children:[1,2,3,4].map(wt=>n.jsxs("option",{value:wt,children:["Week ",wt]},wt))})]}),n.jsx("button",{onClick:()=>Fd(I,_),style:Q.saveBtn,children:n.jsx(zt,{size:14})}),n.jsx("button",{onClick:()=>c(null),style:Q.cancelBtn,children:n.jsx(jt,{size:14})})]})},_d=({goal:I,depth:_})=>{var wt,se,Pe,nr,or;const mt=$(I.id),xt=l[I.id],Lt=I.horizon!=="Weekly";if((g==null?void 0:g.id)===I.id){const Ut=xi(g.parentGoal),Nr=sg.filter(Ct=>Ut.includes(Ct.startMonth));return n.jsxs("div",{style:{...Q.editBox,marginLeft:_*24},children:[n.jsx("input",{autoFocus:!0,value:g.title,onChange:Ct=>b({...g,title:Ct.target.value}),onKeyDown:Ct=>Ct.key==="Enter"&&Md(),style:{...Q.input,flex:1}}),n.jsx("select",{value:g.pillar,onChange:Ct=>b({...g,pillar:Ct.target.value}),style:Q.monthSelect,children:ig.map(Ct=>n.jsx("option",{children:Ct},Ct))}),g.horizon==="Yearly"&&n.jsx("select",{value:g.year,onChange:Ct=>b({...g,year:Number(Ct.target.value)}),style:Q.monthSelect,children:lg.map(Ct=>n.jsx("option",{value:Ct,children:Ct},Ct))}),g.horizon==="Quarterly"&&n.jsx("select",{value:g.month,onChange:Ct=>b({...g,month:Number(Ct.target.value)}),style:Q.monthSelect,children:Nr.map(Ct=>n.jsx("option",{value:Ct.startMonth,children:Ct.label},Ct.startMonth))}),g.horizon==="Monthly"&&n.jsx("select",{value:g.month,onChange:Ct=>b({...g,month:Number(Ct.target.value)}),style:Q.monthSelect,children:Ut.map(Ct=>n.jsx("option",{value:Ct,children:wr[Ct]},Ct))}),g.horizon==="Weekly"&&n.jsxs(n.Fragment,{children:[n.jsx("span",{style:Q.inheritTag,children:wr[Ut[0]]}),n.jsx("select",{value:g.week,onChange:Ct=>b({...g,week:Number(Ct.target.value)}),style:Q.monthSelect,children:[1,2,3,4].map(Ct=>n.jsxs("option",{value:Ct,children:["Week ",Ct]},Ct))})]}),n.jsx("button",{onClick:Md,style:Q.saveBtn,children:n.jsx(zt,{size:14})}),n.jsx("button",{onClick:()=>b(null),style:Q.cancelBtn,children:n.jsx(jt,{size:14})})]})}return n.jsxs("div",{children:[n.jsxs("div",{style:{...Q.row,marginLeft:_*24,background:_===0&&((wt=Be[I.pillar])==null?void 0:wt.soft)||"transparent"},children:[mt.length>0?n.jsx("button",{onClick:()=>kt(I.id),style:Q.caret,children:xt?n.jsx(Rs,{size:15}):n.jsx(dn,{size:15})}):n.jsx("span",{style:{...Q.caret,opacity:.25},children:n.jsx(Ed,{size:12})}),n.jsx("span",{style:{...Q.horizonTag,color:((se=Be[I.pillar])==null?void 0:se.dot)||_e.dot,borderColor:((Pe=Be[I.pillar])==null?void 0:Pe.dot)||_e.dot},title:I.horizon,children:C?Qh[I.horizon]:I.horizon}),n.jsxs("div",{style:Q.nameCol,children:[n.jsx("span",{style:{...Q.title,...et===I.id?Q.titleFull:{}},title:I.title,onPointerDown:()=>G(I.id),onPointerUp:lt,onPointerLeave:lt,onPointerCancel:lt,children:I.title}),n.jsx("span",{style:Q.whenSub,children:Zh(I)})]}),C?n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{position:"relative",flexShrink:0},children:[n.jsx("button",{onClick:Ut=>m(Ut,I.id),style:Q.rowAdd,title:"Options",children:n.jsx(gp,{size:15})}),M===I.id&&n.jsxs(n.Fragment,{children:[n.jsx("div",{style:Q.menuBackdrop,onClick:()=>V(null)}),n.jsxs("div",{style:{...Q.goalMenu,...W},children:[n.jsxs("button",{style:Q.menuItem,onClick:()=>{Ad(I),V(null)},children:[n.jsx(pe,{size:14})," Edit"]}),Lt&&n.jsxs("button",{style:Q.menuItem,onClick:()=>{a(Ut=>({...Ut,[I.id]:!0})),Qe(I.id,I),V(null)},children:[n.jsx(ce,{size:14})," Add sub-goal"]}),n.jsxs("button",{style:{...Q.menuItem,color:"#C2536B"},onClick:()=>{L(I.id,I.title),V(null)},children:[n.jsx(jt,{size:14})," Delete"]})]})]})]}),n.jsx("button",{onClick:()=>Ye(I),style:{...Q.rowAdd,color:ee(I)?((nr=Be[I.pillar])==null?void 0:nr.dot)||_e.dot:"var(--text-3)"},title:ee(I)?"Showing on timeline":"Hidden from timeline",children:ee(I)?n.jsx(bs,{size:14}):n.jsx(xa,{size:14})})]}):n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:()=>Ye(I),style:{...Q.rowAdd,color:ee(I)?((or=Be[I.pillar])==null?void 0:or.dot)||_e.dot:"var(--text-3)"},title:ee(I)?"Showing on timeline — click to hide":"Hidden from timeline — click to show",children:ee(I)?n.jsx(bs,{size:13}):n.jsx(xa,{size:13})}),n.jsx("button",{onClick:()=>Ad(I),style:Q.rowAdd,title:"Edit",children:n.jsx(pe,{size:12})}),Lt&&n.jsx("button",{onClick:()=>{a(Ut=>({...Ut,[I.id]:!0})),Qe(I.id,I)},style:Q.rowAdd,title:"Add sub-goal",children:n.jsx(ce,{size:13})}),n.jsx("button",{onClick:()=>L(I.id,I.title),style:{...Q.rowAdd,color:"var(--text-3)"},title:"Delete",children:n.jsx(jt,{size:13})})]})]}),xt&&mt.map(Ut=>n.jsx(_d,{goal:Ut,depth:_+1},Ut.id)),xt&&d===I.id&&n.jsx(Wd,{parentId:I.id,parentGoal:I,depth:_+1})]})},Zn=t.filter(I=>ee(I)&&I.start_date&&I.end_date),Ld=Yh.map(I=>({...I,items:Zn.filter(_=>I.horizons.includes(_.horizon)).sort((_,mt)=>_.pillar.localeCompare(mt.pillar)||_.start_date.localeCompare(mt.start_date)||cg[_.horizon]-cg[mt.horizon]||_.end_date.localeCompare(mt.end_date))})).filter(I=>I.items.length>0),Gt=(()=>{if(!Zn.length)return null;let I=Zn[0].start_date,_=Zn[0].end_date;return Zn.forEach(mt=>{mt.start_date<I&&(I=mt.start_date),mt.end_date>_&&(_=mt.end_date)}),{start:fn(I),end:fn(_)}})(),Ws=(()=>{if(!Gt)return[];const I=[];for(let _=Gt.start.getTime();_<=Gt.end.getTime();_+=mo)I.push(new Date(_));return I})(),Zo=Ws.length,Ep=(()=>{const I=[];return Ws.forEach(_=>{const mt=`${_.getFullYear()}-${_.getMonth()}`,xt=I[I.length-1];xt&&xt.key===mt?xt.days++:I.push({key:mt,label:`${wr[_.getMonth()]} '${String(_.getFullYear()).slice(2)}`,days:1})}),I})(),to=new Date;to.setHours(0,0,0,0);const un=Gt?Math.round((to-Gt.start)/mo):-1,eo=un>=0&&un<Zo,Pd=I=>Math.round((fn(I.end_date)-fn(I.start_date))/mo)+1,bn=O==="month",$d=Gt?Gt.start.getFullYear():0,Od=Gt?Gt.start.getMonth():0,Nd=(()=>{if(!Gt)return[];const I=[];let _=$d,mt=Od;const xt=Gt.end.getFullYear(),Lt=Gt.end.getMonth();for(;_<xt||_===xt&&mt<=Lt;)I.push({y:_,m:mt}),mt++,mt>11&&(mt=0,_++);return I})(),ti=Nd.length||1,Bp=(I,_)=>{const mt=fn(I),xt=(mt.getFullYear()-$d)*12+mt.getMonth()-Od,Lt=new Date(mt.getFullYear(),mt.getMonth()+1,0).getDate();return xt+(mt.getDate()-(_?0:1))/Lt},_s=(I,_)=>Bp(I,_)/ti*100,Dp=`${to.getFullYear()}-${String(to.getMonth()+1).padStart(2,"0")}-${String(to.getDate()).padStart(2,"0")}`,Rp=Gt?_s(Dp,!1):0,Hd=(S?To:0)+un*Jt,Fp=Gt?`${Gt.start.getTime()}-${Gt.end.getTime()}`:"";return u.useEffect(()=>{if(bn||!eo)return;const I=bt.current;I&&(I.scrollLeft=Math.max(0,Hd-I.clientWidth/2+Jt/2))},[Fp,un,S,eo,bn]),n.jsxs("div",{style:Q.page,children:[n.jsxs("div",{style:Q.head,children:[n.jsx("div",{style:Q.eyebrow,children:"Anvil · Goals"}),n.jsx("h1",{style:Q.h1,children:$t?"All Goals":`${r} Goals`})]}),n.jsxs("div",{style:Q.pillarPicker,children:[n.jsx("button",{onClick:()=>{o("All"),c(null),b(null)},style:{...Q.pillarChip,...$t?{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"}:{}},children:"All Goals"}),ig.map(I=>{const _=I===r;return n.jsxs("button",{onClick:()=>{o(I),c(null),b(null)},style:{...Q.pillarChip,..._?{background:Be[I].dot,color:"#fff",borderColor:Be[I].dot}:{}},children:[n.jsx("span",{style:{...Q.dot,background:_?"#fff":Be[I].dot}}),I]},I)})]}),n.jsxs("div",{style:Q.list,children:[Or.map(I=>n.jsx(_d,{goal:I,depth:0},I.id)),Or.length===0&&n.jsxs("div",{style:Q.ganttEmpty,children:["No goals yet",$t?"":` for ${r}`,"."]}),!$t&&d==="ROOT"&&n.jsx(Wd,{parentId:"ROOT",parentGoal:null,depth:0}),!$t&&d!=="ROOT"&&n.jsxs("button",{onClick:()=>Qe("ROOT",null),style:Q.rootAdd,children:[n.jsx(ce,{size:14})," Add top-level goal"]}),$t&&n.jsx("div",{style:Q.allHint,children:"Pick a pillar above to add new goals."})]}),n.jsxs("div",{style:Q.ganttWrap,children:[n.jsxs("div",{style:Q.ganttTop,children:[n.jsxs("div",{style:Q.ganttTitle,children:[bn?"Monthly":"Daily"," Timeline",Gt?` · ${ag(Gt.start)} – ${ag(Gt.end)}`:""]}),n.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[n.jsxs("div",{style:Q.zoomToggle,children:[n.jsx("button",{onClick:()=>Y("day"),style:{...Q.zoomBtn,...bn?{}:Q.zoomBtnOn},children:"Day"}),n.jsx("button",{onClick:()=>Y("month"),style:{...Q.zoomBtn,...bn?Q.zoomBtnOn:{}},children:"Month"})]}),n.jsxs("button",{onClick:()=>B(I=>!I),style:Q.labelToggle,children:[S?n.jsx(zh,{size:14}):n.jsx(Th,{size:14}),S?"Hide names":"Show names"]})]})]}),Gt?bn?n.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[n.jsxs("div",{style:Q.gBandRow,children:[S&&n.jsx("div",{style:{...Q.gLabelHead,zIndex:4},children:"Goal"}),n.jsx("div",{style:{flex:1,display:"grid",gridTemplateColumns:`repeat(${ti}, 1fr)`,minWidth:0},children:Nd.map((I,_)=>n.jsxs("div",{style:Q.gMonthFluid,children:[wr[I.m],I.m===0||_===0?` '${String(I.y).slice(2)}`:""]},_))})]}),Ld.map(I=>n.jsxs("div",{children:[n.jsxs("div",{style:Q.gGroupRow,children:[S?n.jsxs("div",{style:Q.gGroupLabel,children:[I.label,n.jsx("span",{style:Q.gGroupCount,children:I.items.length})]}):n.jsxs("div",{style:Q.gGroupChip,children:[I.label," · ",I.items.length]}),n.jsx("div",{style:{flex:1}})]}),I.items.map(_=>{var or;const mt=((or=Be[_.pillar])==null?void 0:or.dot)||"#9A968C",xt=(F==null?void 0:F.id)===_.id,Lt=xt?F.dx:0,ie=_s(_.start_date,!1),wt=Math.max(2,_s(_.end_date,!0)-ie),se=Pd(_),Pe=wt>=14,nr=`${_.title} · ${_.start_date} → ${_.end_date} · ${se} day${se>1?"s":""}`;return n.jsxs("div",{style:Q.gRow,children:[S&&n.jsxs("div",{style:{...Q.gLabel,paddingLeft:12},children:[n.jsx("span",{style:{...Q.ganttRowDot,background:mt}}),n.jsx("span",{style:{...Q.gHzTag,color:mt,borderColor:mt},children:dg[_.horizon]}),n.jsx("span",{style:Q.gLabelText,title:_.title,children:_.title}),n.jsxs("span",{style:Q.gDurChip,children:[se,"d"]})]}),n.jsxs("div",{style:{position:"relative",flex:1,minHeight:36,minWidth:0,backgroundImage:`repeating-linear-gradient(to right, var(--border) 0, var(--border) 1px, transparent 1px, transparent calc(100% / ${ti}))`},children:[eo&&n.jsx("div",{style:{...Q.gTodayLine,left:`${Rp}%`}}),n.jsxs("div",{onPointerDown:Ut=>{Ut.preventDefault();const Nr=Ut.currentTarget.parentNode.offsetWidth;N({id:_.id,startX:Ut.clientX,dx:0,g:_,stepPx:Math.max(8,Nr/ti/2)})},style:{...Q.gBar,left:`${ie}%`,width:`${wt}%`,background:mt,cursor:xt?"grabbing":"grab",transform:Lt?`translateX(${Lt}px)`:"none",zIndex:xt?6:1,boxShadow:xt?"0 4px 12px rgba(0,0,0,0.28)":"0 1px 2px rgba(0,0,0,0.15)",touchAction:"none"},title:nr,children:[n.jsx(eg,{size:12,style:{opacity:.7,flexShrink:0,marginRight:2,color:"#fff"}}),Pe&&n.jsx("span",{style:Q.gBarLabel,children:_.title})]}),!Pe&&n.jsx("span",{style:{...Q.gBarOutside,left:`calc(${ie+wt}% + 6px)`},title:nr,children:_.title})]})]},_.id)})]},I.key))]}):n.jsx("div",{style:Q.ganttScroll,ref:bt,children:n.jsxs("div",{style:{minWidth:(S?To:0)+Zo*Jt,position:"relative"},children:[eo&&n.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:Hd,width:Jt,background:"color-mix(in srgb, var(--accent) 14%, transparent)",pointerEvents:"none",zIndex:3}}),n.jsxs("div",{style:Q.gBandRow,children:[S&&n.jsx("div",{style:{...Q.gLabelHead,zIndex:4},children:"Goal"}),n.jsx("div",{style:{display:"flex"},children:Ep.map((I,_)=>n.jsx("div",{style:{...Q.gMonthCell,width:I.days*Jt},children:I.label},_))})]}),n.jsxs("div",{style:Q.gBandRow,children:[S&&n.jsx("div",{style:{...Q.gLabelHead,zIndex:4,fontSize:10,color:"var(--text-3)",fontWeight:600},children:"days →"}),n.jsx("div",{style:{display:"flex"},children:Ws.map((I,_)=>{const mt=I.getDay()===0||I.getDay()===6,xt=_===un;return n.jsx("div",{style:{...Q.gDayCell,...mt?Q.gWeekend:{},...xt?Q.gTodayCell:{}},children:I.getDate()},_)})})]}),Ld.map(I=>n.jsxs("div",{children:[n.jsxs("div",{style:Q.gGroupRow,children:[S?n.jsxs("div",{style:Q.gGroupLabel,children:[I.label,n.jsx("span",{style:Q.gGroupCount,children:I.items.length})]}):n.jsxs("div",{style:Q.gGroupChip,children:[I.label," · ",I.items.length]}),n.jsx("div",{style:{width:Zo*Jt,flexShrink:0}})]}),I.items.map(_=>{var Ud;const mt=((Ud=Be[_.pillar])==null?void 0:Ud.dot)||"#9A968C",xt=Math.round((fn(_.start_date)-Gt.start)/mo),Lt=Pd(_),ie=(F==null?void 0:F.id)===_.id,wt=ie?F.dx:0,se=Xh(_),Pe=(T==null?void 0:T.id)===_.id,nr=se?Ca(_):Lt,or=se?gg(_):Lt,Ut=Pe?Math.max(nr,Math.min(or,Lt+Math.round(T.dx/Jt))):Lt,Nr=Ut*Jt-4,Ct=Nr>=54,Gd=`${_.title} · ${_.start_date} → ${_.end_date} · ${Ut} day${Ut>1?"s":""}${se?` (max ${or})`:""}`;return n.jsxs("div",{style:Q.gRow,children:[S&&n.jsxs("div",{style:{...Q.gLabel,paddingLeft:12},children:[n.jsx("span",{style:{...Q.ganttRowDot,background:mt}}),n.jsx("span",{style:{...Q.gHzTag,color:mt,borderColor:mt},children:dg[_.horizon]}),n.jsx("span",{style:Q.gLabelText,title:_.title,children:_.title}),n.jsxs("span",{style:Q.gDurChip,children:[Ut,"d"]})]}),n.jsxs("div",{style:{...Q.gTrack,width:Zo*Jt},children:[eo&&n.jsx("div",{style:{...Q.gTodayLine,left:un*Jt}}),n.jsxs("div",{onPointerDown:pn=>{pn.preventDefault(),N({id:_.id,startX:pn.clientX,dx:0,g:_,stepPx:Jt*3})},style:{...Q.gBar,left:xt*Jt+2,width:Nr,background:mt,cursor:ie?"grabbing":"grab",transform:wt?`translateX(${wt}px)`:"none",zIndex:ie||Pe?6:1,boxShadow:ie||Pe?"0 4px 12px rgba(0,0,0,0.28)":"0 1px 2px rgba(0,0,0,0.15)",touchAction:"none"},title:Gd,children:[se&&Ut>nr&&n.jsx("div",{style:{position:"absolute",left:nr*Jt,top:0,bottom:0,right:0,background:"#C2536B",borderRadius:"0 5px 5px 0"}}),n.jsx(eg,{size:12,style:{opacity:.7,flexShrink:0,marginRight:2,color:"#fff",position:"relative",zIndex:1}}),Ct&&n.jsx("span",{style:{...Q.gBarLabel,position:"relative",zIndex:1},children:_.title}),se&&n.jsx("div",{onPointerDown:pn=>{pn.preventDefault(),pn.stopPropagation(),x({id:_.id,startX:pn.clientX,dx:0,g:_})},style:Q.resizeHandle,title:`Drag to extend up to ${or} days`,children:n.jsx("div",{style:Q.resizeGrip})})]}),!Ct&&n.jsx("span",{style:{...Q.gBarOutside,left:xt*Jt+Nr+8+wt},title:Gd,children:_.title})]})]},_.id)})]},I.key))]})}):n.jsx("div",{style:Q.ganttEmpty,children:"No goals on the timeline. Click the eye icon on a goal to show it here."}),Gt&&n.jsxs("div",{style:Q.gLegend,children:[n.jsxs("span",{style:Q.gLegendItem,children:[n.jsx("span",{style:{...Q.gLegendBar}})," bar length = number of days"]}),n.jsxs("span",{style:Q.gLegendItem,children:[n.jsx("span",{style:Q.gLegendToday})," today"]})]})]}),n.jsx(gn,{toasts:st,onUndo:q,onDismiss:Z})]})}const Q={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box",maxWidth:"100%",overflowX:"hidden"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},pillarPicker:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16},pillarChip:{display:"flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},list:{background:"var(--surface)",borderRadius:12,padding:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"hidden"},row:{display:"flex",alignItems:"center",gap:9,padding:"9px 10px",borderRadius:8,flexWrap:"nowrap"},caret:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",display:"grid",placeItems:"center",padding:0,width:18,height:18,flexShrink:0},horizonTag:{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",border:"1px solid",borderRadius:5,padding:"2px 6px",flexShrink:0},nameCol:{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:1},title:{fontSize:14,fontWeight:500,lineHeight:1.3,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",userSelect:"none",WebkitUserSelect:"none",cursor:"default"},titleFull:{whiteSpace:"normal",overflow:"visible",textOverflow:"clip",wordBreak:"break-word"},whenSub:{fontSize:11,fontStyle:"italic",color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},rowAdd:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,flexShrink:0},menuBackdrop:{position:"fixed",inset:0,zIndex:40},goalMenu:{position:"fixed",zIndex:41,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 6px 24px rgba(0,0,0,0.18)",padding:4,minWidth:180,display:"flex",flexDirection:"column"},menuItem:{display:"flex",alignItems:"center",gap:9,width:"100%",border:"none",background:"none",padding:"10px 12px",borderRadius:7,cursor:"pointer",fontFamily:"inherit",fontSize:13.5,fontWeight:500,color:"var(--text)",textAlign:"left"},rootAdd:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"var(--text-2)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"9px 12px",cursor:"pointer",fontWeight:600,fontFamily:"inherit",marginTop:6,width:"100%",justifyContent:"center"},addBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 0 6px 28px",flexWrap:"wrap"},editBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 10px",flexWrap:"wrap",background:"var(--bg)",borderRadius:8,margin:"4px 0"},input:{border:"1px solid var(--border)",borderRadius:7,padding:"8px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",flex:1,minWidth:120},monthSelect:{border:"1px solid var(--border)",borderRadius:7,padding:"8px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},inheritTag:{fontSize:11.5,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"6px 9px",borderRadius:7,flexShrink:0},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},ganttWrap:{background:"var(--surface)",borderRadius:12,padding:"16px 14px",marginTop:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},ganttTop:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:10,marginBottom:14},ganttTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",fontFamily:"'Fraunces',Georgia,serif"},labelToggle:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"5px 10px",borderRadius:8,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},zoomToggle:{display:"inline-flex",border:"1px solid var(--border)",borderRadius:8,overflow:"hidden"},zoomBtn:{border:"none",background:"var(--surface)",color:"var(--text-2)",padding:"5px 12px",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},zoomBtnOn:{background:"var(--accent-strong)",color:"#fff"},gMonthFluid:{borderLeft:"1px solid var(--border)",fontSize:10,fontWeight:700,color:"var(--text-2)",textAlign:"center",padding:"5px 0",whiteSpace:"nowrap",overflow:"hidden"},gGroupChip:{position:"sticky",left:0,zIndex:3,background:"var(--surface-2)",padding:"5px 10px",fontSize:10,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-2)",whiteSpace:"nowrap",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center"},allHint:{fontSize:12,color:"var(--text-3)",fontStyle:"italic",padding:"10px 12px"},ganttEmpty:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},ganttScroll:{overflowX:"auto"},ganttRowDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},gBandRow:{display:"flex",alignItems:"stretch",borderBottom:"1px solid var(--border)"},gLabelHead:{width:To,flexShrink:0,position:"sticky",left:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center",padding:"6px 10px",fontSize:12,fontWeight:700,color:"var(--text-2)"},gMonthCell:{flexShrink:0,borderLeft:"1px solid var(--border)",fontSize:10.5,fontWeight:700,color:"var(--text-2)",textAlign:"center",padding:"5px 0",whiteSpace:"nowrap",overflow:"hidden"},gDayCell:{width:Jt,flexShrink:0,textAlign:"center",fontSize:10,color:"var(--text-3)",padding:"4px 0",borderLeft:"1px solid var(--border)",fontWeight:600},gWeekend:{background:"var(--surface-2)"},gTodayCell:{background:"var(--hover)",color:"var(--accent)",fontWeight:800},gGroupRow:{display:"flex",alignItems:"stretch",background:"var(--surface-2)",borderBottom:"1px solid var(--border)",borderTop:"1px solid var(--border)"},gGroupLabel:{width:To,flexShrink:0,position:"sticky",left:0,background:"var(--surface-2)",zIndex:3,padding:"6px 12px",fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-2)",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center",gap:7},gGroupCount:{fontSize:10,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 6px"},gHzTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.04em",border:"1px solid",borderRadius:4,padding:"1px 4px",flexShrink:0},gRow:{display:"flex",alignItems:"stretch",minHeight:36,borderBottom:"1px solid var(--border)"},gLabel:{width:To,flexShrink:0,display:"flex",alignItems:"center",gap:7,position:"sticky",left:0,background:"var(--surface)",zIndex:2,borderRight:"1px solid var(--border)",paddingRight:8,overflow:"hidden"},gLabelText:{flex:1,minWidth:0,fontSize:12,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"var(--text)"},gDurChip:{fontSize:10,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",borderRadius:10,padding:"1px 6px",flexShrink:0,marginRight:6},gTrack:{position:"relative",flexShrink:0,minHeight:36,backgroundImage:`repeating-linear-gradient(to right, var(--border) 0, var(--border) 1px, transparent 1px, transparent ${Jt}px)`},gBar:{position:"absolute",top:9,height:18,borderRadius:5,display:"flex",alignItems:"center",padding:"0 7px",boxShadow:"0 1px 2px rgba(0,0,0,0.15)",overflow:"hidden",zIndex:1},gBarLabel:{fontSize:11,fontWeight:600,color:"#fff",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},gBarOutside:{position:"absolute",top:9,height:18,display:"flex",alignItems:"center",fontSize:11,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",pointerEvents:"none",zIndex:1},resizeHandle:{position:"absolute",right:0,top:0,bottom:0,width:12,cursor:"ew-resize",display:"grid",placeItems:"center",touchAction:"none",zIndex:2},resizeGrip:{width:2,height:11,background:"rgba(255,255,255,0.9)",borderRadius:1,boxShadow:"3px 0 0 rgba(255,255,255,0.6)"},gTodayLine:{position:"absolute",top:0,bottom:0,width:2,background:"#C2536B",zIndex:0,opacity:.6},gLegend:{display:"flex",gap:16,marginTop:12,fontSize:11,color:"var(--text-3)",flexWrap:"wrap"},gLegendItem:{display:"flex",alignItems:"center",gap:6,fontWeight:600},gLegendBar:{width:18,height:8,borderRadius:3,background:"var(--accent)",display:"inline-block"},gLegendToday:{width:2,height:12,background:"#C2536B",display:"inline-block"}},sn={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.12)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.12)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.12)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.12)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.12)"}},yp=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],ey=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],As=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,ry=()=>As(new Date),ny=(t=0)=>{const e=new Date,r=e.getDay(),o=r===0?-6:1-r,i=new Date(e);return i.setDate(e.getDate()+o+t*7),Array.from({length:7},(s,l)=>{const a=new Date(i);return a.setDate(i.getDate()+l),As(a)})},oy=(t=0)=>{const e=new Date,r=new Date(e.getFullYear(),e.getMonth()+t,1),o=r.getFullYear(),i=r.getMonth(),s=new Date(o,i+1,0).getDate(),l=r.getDay(),a=l===0?6:l-1,d=Array.from({length:s},(p,y)=>`${o}-${String(i+1).padStart(2,"0")}-${String(y+1).padStart(2,"0")}`),c=r.toLocaleDateString("en-US",{month:"long",year:"numeric"});return{dates:d,startOffset:a,label:c,year:o,month:i}},ug=t=>new Date(t+"T00:00").toLocaleDateString("en-US",{month:"short",day:"numeric"}),Cr=ry(),iy=new Date().getFullYear();function sy(){var W,R;const[t,e]=u.useState([]),[r,o]=u.useState("ALL"),[i,s]=u.useState(!1),[l,a]=u.useState(!1),[d,c]=u.useState(!1),[p,y]=u.useState(null),[h,w]=u.useState(null),[v,k]=u.useState({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week"}),[z,f]=u.useState(!1),[g,b]=u.useState([]),C=u.useCallback(()=>H.getHabits().then(e).catch(console.error),[]);u.useEffect(()=>{C()},[C]),u.useEffect(()=>{H.getSetting("habit_order").then(m=>{Array.isArray(m==null?void 0:m.value)&&b(m.value)}).catch(()=>{})},[]);const S=u.useMemo(()=>g.length?[...t].sort((m,G)=>{const lt=g.indexOf(m.id),rt=g.indexOf(G.id);return lt===-1&&rt===-1?0:lt===-1?1:rt===-1?-1:lt-rt}):t,[t,g]),B=async m=>{b(m),await H.setSetting("habit_order",m),f(!1)};u.useEffect(()=>{const m=()=>{const G=window.innerWidth<720;s(G),G||a(!1)};return m(),window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[]);const{deleteItem:O,toasts:Y,handleUndo:F,handleDismiss:N}=cn(H.deleteHabit,H.restoreHabit,C),j=m=>{o(m),i&&a(!1)},T=(m,G)=>{(m.type==="minimum"||m.type==="maximum")&&m.period==="day"?w({habit:m,date:G}):x(m.id,G)},x=async(m,G)=>{await H.toggleHabitLog(m,G),C()},U=async(m,G,lt,rt)=>{await H.setHabitLogCount(m,G,lt,rt),w(null),C()},bt=async(m,G)=>{await H.clearHabitLog(m,G),w(null),C()},et=async()=>{if(!v.name.trim())return;const m={name:v.name.trim(),pillar:v.pillar,target_per_week:Number(v.target_per_week)||7,type:v.type,target_count:v.type!=="regular"?Number(v.target_count)||1:null,period:v.type!=="regular"?v.period:null};await H.createHabit(m),k({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week"}),c(!1),C()},D=async(m,G)=>{r===m&&o("ALL"),O(m,G)},A=t.find(m=>m.id===r),M=m=>new Set(m.logs||[]),V={...P.sidebar,...i?P.sidebarOverlay:{},...i&&!l?P.sidebarHidden:{}};return n.jsxs("div",{style:P.shell,children:[i&&l&&n.jsx("div",{style:P.backdrop,onClick:()=>a(!1)}),n.jsxs("aside",{style:V,children:[n.jsxs("div",{style:P.sideTop,children:[n.jsx("div",{style:P.brand,children:"Anvil · Habits"}),i&&n.jsx("button",{onClick:()=>a(!1),style:P.closeBtn,children:n.jsx(jt,{size:18})})]}),n.jsxs("div",{style:{...P.sideItem,...r==="ALL"?P.sideItemOn:{},cursor:"default",padding:"2px 6px 2px 10px"},children:[n.jsxs("button",{onClick:()=>j("ALL"),style:{display:"flex",alignItems:"center",gap:9,flex:1,border:"none",background:"none",cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:r==="ALL"?600:500,color:"var(--text-2)",padding:"7px 0"},children:[n.jsx(op,{size:15}),n.jsx("span",{style:P.sideLabel,children:"All Habits"}),n.jsx("span",{style:P.sideCount,children:t.length})]}),n.jsx("button",{onClick:m=>{m.stopPropagation(),f(!0)},style:P.tinyBtn,title:"Reorder habits",children:n.jsx(pe,{size:12})})]}),n.jsx("div",{style:P.sideDivider}),S.map(m=>{var rt;const G=r===m.id,lt=((rt=sn[m.pillar])==null?void 0:rt.dot)||"#9A968C";return n.jsxs("button",{onClick:()=>j(m.id),style:{...P.sideItem,...G?P.sideItemOn:{}},children:[n.jsx("span",{style:{...P.sideDot,background:lt}}),n.jsx("span",{style:P.sideLabel,children:m.name}),n.jsxs("span",{style:P.sideStreak,children:[n.jsx(Jn,{size:11})," ",m.streak]})]},m.id)}),d?n.jsx(ly,{habit:v,onChange:k,onSave:et,onCancel:()=>c(!1)}):n.jsxs("button",{onClick:()=>c(!0),style:P.sideNewBtn,children:[n.jsx(ce,{size:13})," New habit"]})]}),n.jsxs("main",{style:P.main,children:[i&&n.jsxs("button",{onClick:()=>a(!0),style:P.hamburger,children:[n.jsx(Td,{size:18}),n.jsx("span",{style:P.hamburgerLabel,children:r==="ALL"?"All Habits":A==null?void 0:A.name})]}),r==="ALL"?n.jsx(cy,{habits:S,dayAction:T,logSet:M,onDelete:D,onEdit:m=>y(m)}):n.jsx(gy,{habit:A,dayAction:T,logSet:M,onDelete:()=>D(A.id,A.name),onEdit:()=>y(A),setNote:(m,G)=>H.setHabitLogNote(A.id,m,G).then(C)}),r==="ALL"&&n.jsx(py,{year:iy})]}),z&&n.jsx(by,{habits:S,onSave:B,onClose:()=>f(!1)}),p&&n.jsx(ay,{habit:p,onSave:async m=>{await H.updateHabit(p.id,m),y(null),C()},onClose:()=>y(null)}),h&&n.jsx(dy,{habit:h.habit,date:h.date,initialCount:((W=h.habit.log_counts)==null?void 0:W[h.date])??0,initialNote:((R=h.habit.log_notes)==null?void 0:R[h.date])??"",onSave:(m,G)=>U(h.habit.id,h.date,m,G),onClear:()=>bt(h.habit.id,h.date),onClose:()=>w(null)}),n.jsx(gn,{toasts:Y,onUndo:F,onDismiss:N})]})}function ly({habit:t,onChange:e,onSave:r,onCancel:o}){const i=t.type!=="regular";return n.jsxs("div",{style:P.addBox,children:[n.jsx("input",{autoFocus:!0,placeholder:"Habit name",value:t.name,onChange:s=>e(l=>({...l,name:s.target.value})),onKeyDown:s=>s.key==="Enter"&&r(),style:P.sideInput}),n.jsx("select",{value:t.pillar,onChange:s=>e(l=>({...l,pillar:s.target.value})),style:P.sideInput,children:Object.keys(sn).map(s=>n.jsx("option",{children:s},s))}),n.jsxs("select",{value:t.type,onChange:s=>e(l=>({...l,type:s.target.value})),style:P.sideInput,children:[n.jsx("option",{value:"regular",children:"Regular (yes/no)"}),n.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),n.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),i&&n.jsxs("div",{style:{display:"flex",gap:6},children:[n.jsx("input",{type:"number",min:1,placeholder:"N",value:t.target_count||"",onChange:s=>e(l=>({...l,target_count:s.target.value})),style:{...P.sideInput,width:60}}),n.jsx("select",{value:t.period,onChange:s=>e(l=>({...l,period:s.target.value})),style:P.sideInput,children:["day","week","month","year"].map(s=>n.jsx("option",{children:s},s))})]}),n.jsxs("div",{style:{display:"flex",gap:6},children:[n.jsx("button",{onClick:r,style:P.sideAddBtn,children:n.jsx(zt,{size:13})}),n.jsx("button",{onClick:o,style:P.sideCancelBtn,children:n.jsx(jt,{size:13})})]})]})}function ay({habit:t,onSave:e,onClose:r}){const[o,i]=u.useState(t.name),[s,l]=u.useState(t.type||"regular"),[a,d]=u.useState(t.target_count||""),[c,p]=u.useState(t.period||"week"),[y,h]=u.useState(t.reminder_time||""),w=()=>e({name:o.trim(),type:s,target_count:s!=="regular"?Number(a):null,period:s!=="regular"?c:null,reminder_time:y||null});return n.jsx("div",{style:P.modalOverlay,onClick:r,children:n.jsxs("div",{style:P.modal,onClick:v=>v.stopPropagation(),children:[n.jsxs("div",{style:P.modalHead,children:["Edit Habit",n.jsx("button",{onClick:r,style:P.closeBtn,children:n.jsx(jt,{size:16})})]}),n.jsx("label",{style:P.modalLabel,children:"Name"}),n.jsx("input",{value:o,onChange:v=>i(v.target.value),style:P.sideInput}),n.jsx("label",{style:P.modalLabel,children:"Type"}),n.jsxs("select",{value:s,onChange:v=>l(v.target.value),style:P.sideInput,children:[n.jsx("option",{value:"regular",children:"Regular (yes/no)"}),n.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),n.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),s!=="regular"&&n.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[n.jsx("input",{type:"number",min:1,value:a,onChange:v=>d(v.target.value),style:{...P.sideInput,width:70}}),n.jsx("select",{value:c,onChange:v=>p(v.target.value),style:P.sideInput,children:["day","week","month","year"].map(v=>n.jsx("option",{children:v},v))})]}),n.jsx("label",{style:P.modalLabel,children:"Reminder time"}),n.jsx("input",{type:"time",value:y,onChange:v=>h(v.target.value),style:P.sideInput}),n.jsx("button",{onClick:w,style:{...P.sideAddBtn,width:"100%",marginTop:10,height:36},children:"Save"})]})})}function dy({habit:t,date:e,initialCount:r,initialNote:o,onSave:i,onClear:s,onClose:l}){const[a,d]=u.useState(r??0),[c,p]=u.useState(o??""),y=t.target_count,h=t.type==="minimum"?a>=y:a>0&&a<=y,w=t.type==="maximum"&&a>y,v=h?"#4C9A6B":w?"#C2536B":"#C2773B",k=h?"✓ Goal met":w?"Over the limit":"Not met yet";return n.jsx("div",{style:P.modalOverlay,onClick:l,children:n.jsxs("div",{style:P.modal,onClick:z=>z.stopPropagation(),children:[n.jsxs("div",{style:P.modalHead,children:[t.name,n.jsx("button",{onClick:l,style:P.closeBtn,children:n.jsx(jt,{size:16})})]}),n.jsxs("div",{style:{fontSize:12,color:"var(--text-3)",marginBottom:2},children:[e," · ",t.type==="minimum"?`at least ${y}`:`no more than ${y}`," / ",t.period]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:20,margin:"14px 0 6px"},children:[n.jsx("button",{onClick:()=>d(z=>Math.max(0,z-1)),style:P.counterBtn,children:"−"}),n.jsx("span",{style:{fontSize:38,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:52,textAlign:"center",color:v},children:a}),n.jsx("button",{onClick:()=>d(z=>z+1),style:P.counterBtn,children:"+"})]}),n.jsx("div",{style:{textAlign:"center",fontSize:12.5,fontWeight:700,color:v,marginBottom:12},children:k}),n.jsx("textarea",{value:c,onChange:z=>p(z.target.value),placeholder:"Add a comment (optional)…",style:{...P.sideInput,minHeight:56,resize:"vertical"}}),n.jsxs("div",{style:{display:"flex",gap:8,marginTop:10},children:[n.jsxs("button",{onClick:s,style:{...P.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[n.jsx(jt,{size:14})," Delete"]}),n.jsxs("button",{onClick:()=>i(a,c),style:{...P.sideAddBtn,flex:1,justifyContent:"center",height:38},children:[n.jsx(zt,{size:14})," Set"]})]})]})})}function ul({pct:t,label:e,sub:r,color:o}){const s=2*Math.PI*26,l=s*(1-Math.max(0,Math.min(100,t))/100);return n.jsxs("div",{style:P.ringStat,children:[n.jsxs("div",{style:P.ringBox,children:[n.jsxs("svg",{width:"70",height:"70",viewBox:"0 0 70 70",children:[n.jsx("circle",{cx:"35",cy:"35",r:26,fill:"none",stroke:"var(--border)",strokeWidth:"7"}),n.jsx("circle",{cx:"35",cy:"35",r:26,fill:"none",stroke:o,strokeWidth:"7",strokeLinecap:"round",strokeDasharray:s,strokeDashoffset:l,transform:"rotate(-90 35 35)",style:{transition:"stroke-dashoffset 0.5s ease"}})]}),n.jsxs("div",{style:{...P.ringPct,color:o},children:[t,"%"]})]}),n.jsxs("div",{children:[n.jsx("div",{style:P.ringLabel,children:e}),n.jsx("div",{style:P.ringSub,children:r})]})]})}function cy({habits:t,dayAction:e,logSet:r,onDelete:o,onEdit:i}){const[s,l]=u.useState(0),a=ny(s),d=`${ug(a[0])} – ${ug(a[6])}${s===0?" · This week":""}`,c=j=>{const T=new Date(j+"T00:00:00"),x=T.getDay(),U=new Date(T);return U.setDate(T.getDate()+(x===0?-6:1-x)),Array.from({length:7},(bt,et)=>{const D=new Date(U);return D.setDate(U.getDate()+et),As(D)})},p=j=>j.logs||[],y=(j,T)=>j.type==="minimum"&&j.period==="week"&&T.filter(x=>r(j).has(x)).length>=(j.target_count||0),h=(j,T)=>j.type==="minimum"&&j.period==="month"&&p(j).filter(x=>x.slice(0,7)===T).length>=(j.target_count||0),w=(j,T)=>j.type==="minimum"&&j.period==="year"&&p(j).filter(x=>x.slice(0,4)===T).length>=(j.target_count||0),v=(j,T)=>{var x;if((j.type==="minimum"||j.type==="maximum")&&j.period==="day"){const U=(x=j.log_counts)==null?void 0:x[T];return U==null?!1:j.type==="minimum"?U>=(j.target_count||0):U>0&&U<=(j.target_count||0)}return r(j).has(T)},k=(j,T)=>j.type!=="minimum"?!1:j.period==="week"?y(j,c(T)):j.period==="month"?h(j,T.slice(0,7)):j.period==="year"?w(j,T.slice(0,4)):!1,z=(j,T)=>v(j,T)||k(j,T),f=t.filter(j=>z(j,Cr)).length,g=t.length?Math.round(f/t.length*100):0,b=j=>{if(j.type==="minimum"&&j.period==="month"&&(h(j,a[0].slice(0,7))||h(j,a[6].slice(0,7)))||j.type==="minimum"&&j.period==="year"&&(w(j,a[0].slice(0,4))||w(j,a[6].slice(0,4)))||j.type==="minimum"&&j.period==="week"&&y(j,a))return 1;if((j.type==="minimum"||j.type==="maximum")&&j.period==="day")return Math.min(1,a.filter(bt=>v(j,bt)).length/7);const T=r(j),x=a.filter(bt=>T.has(bt)).length,U=j.type==="minimum"&&j.period==="week"?j.target_count||1:j.target_per_week||7;return U>0?Math.min(1,x/U):0},C=t.length?Math.round(t.reduce((j,T)=>j+b(T),0)/t.length*100):0,S=new Date,B=`${S.getFullYear()}-${String(S.getMonth()+1).padStart(2,"0")}`,O=new Date(S.getFullYear(),S.getMonth()+1,0).getDate(),Y=O/7,F=j=>{if(j.type==="minimum"&&j.period==="month"&&h(j,B)||j.type==="minimum"&&j.period==="year"&&w(j,B.slice(0,4)))return 1;if((j.type==="minimum"||j.type==="maximum")&&j.period==="day"){let U=0;for(let bt=1;bt<=O;bt++)v(j,`${B}-${String(bt).padStart(2,"0")}`)&&U++;return Math.min(1,U/O)}const T=p(j).filter(U=>U.slice(0,7)===B).length;let x;return j.type==="minimum"&&j.period==="week"?x=(j.target_count||1)*Y:j.type==="minimum"&&j.period==="month"?x=j.target_count||1:j.type==="minimum"&&j.period==="year"?x=(j.target_count||1)/12:x=(j.target_per_week||7)*Y,x>0?Math.min(1,T/x):0},N=t.length?Math.round(t.reduce((j,T)=>j+F(T),0)/t.length*100):0;return n.jsxs("div",{children:[n.jsxs("div",{style:P.mainHead,children:[n.jsx("div",{style:P.eyebrow,children:"Weekly view"}),n.jsx("h1",{style:P.h1,children:"All Habits"})]}),n.jsxs("div",{style:P.navBar,children:[n.jsx("button",{onClick:()=>l(j=>j-1),style:P.navBtn,children:n.jsx(qn,{size:16})}),n.jsx("span",{style:P.navLabel,children:d}),n.jsx("button",{onClick:()=>l(j=>Math.min(0,j+1)),disabled:s>=0,style:{...P.navBtn,...s>=0?P.navBtnDisabled:{}},children:n.jsx(dn,{size:16})})]}),n.jsxs("div",{style:P.weekCard,children:[n.jsxs("div",{style:P.weekHeadRow,children:[n.jsx("div",{style:P.weekNameCol}),yp.map((j,T)=>n.jsxs("div",{style:P.weekDayHead,children:[n.jsx("span",{style:P.weekDayName,children:j}),n.jsx("span",{style:{...P.weekDayNum,...a[T]===Cr?P.weekDayToday:{}},children:new Date(a[T]+"T00:00").getDate()})]},j)),n.jsx("div",{style:P.weekStreakCol,children:"Streak"})]}),t.map(j=>{var G,lt;const T=((G=sn[j.pillar])==null?void 0:G.dot)||"#9A968C",x=((lt=sn[j.pillar])==null?void 0:lt.soft)||"rgba(0,0,0,0.05)",U=r(j),bt=j.type==="minimum"&&["week","month","year"].includes(j.period),et=j.target_count||0,D=j.logs||[],A=rt=>D.filter(L=>L.slice(0,7)===rt).length,M=rt=>D.filter(L=>L.slice(0,4)===rt).length,V=a.filter(rt=>U.has(rt)).length,W=rt=>bt?j.period==="week"?V>=et:j.period==="month"?A(rt.slice(0,7))>=et:j.period==="year"?M(rt.slice(0,4))>=et:!1:!1,R=bt&&a.some(W),m=j.period==="week"?V:j.period==="month"?A(a[0].slice(0,7)):j.period==="year"?M(a[0].slice(0,4)):0;return n.jsxs("div",{style:P.weekRow,children:[n.jsxs("div",{style:{...P.weekNameCol,flexDirection:"column",alignItems:"flex-start",gap:2},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[n.jsx("span",{style:{...P.sideDot,background:T}}),n.jsx("span",{style:P.weekHabitName,children:j.name})]}),j.type!=="regular"&&n.jsx("span",{style:P.typeBadge,children:j.type==="minimum"?`≥${j.target_count}/${j.period}`:`≤${j.target_count}/${j.period}`})]}),a.map((rt,L)=>{var Or,$;const st=U.has(rt),q=rt>Cr,Z=(j.type==="minimum"||j.type==="maximum")&&j.period==="day",X=(Or=j.log_counts)==null?void 0:Or[rt],vt=X!=null,ut=!!(($=j.log_notes)!=null&&$[rt]),Bt=W(rt),$t=L>0&&W(a[L-1]),_e=L<a.length-1&&W(a[L+1]),Le=st||Bt;return n.jsxs("div",{style:{...P.weekCell,position:"relative"},children:[Bt&&n.jsx("span",{style:{...P.chainLine,background:T,left:$t?0:"50%",right:_e?0:"50%"}}),n.jsx("button",{disabled:q,onClick:()=>e(j,rt),style:{...P.tick,position:"relative",zIndex:1,...Le?{background:T,borderColor:T,color:"#fff"}:{},...Z&&vt&&!st?{borderColor:T,color:T}:{},...q&&!Le?P.tickFuture:{}},children:Z?vt?n.jsx("span",{style:{fontSize:12,fontWeight:700},children:X}):null:st&&n.jsx(zt,{size:14,color:"#fff",strokeWidth:3})}),ut&&n.jsx("span",{style:P.cellNoteBubble})]},rt)}),n.jsx("div",{style:P.weekStreakCol,children:R?n.jsxs("span",{style:{...P.streakPill,background:x,color:T},children:[n.jsx(ka,{size:12})," ",m,"/",et]}):n.jsxs("span",{style:{...P.streakPill,background:x,color:T},children:[n.jsx(Jn,{size:12})," ",j.streak]})})]},j.id)}),t.length===0&&n.jsx("div",{style:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},children:"No habits yet — add one from the sidebar."})]}),t.length>0&&n.jsxs("div",{style:{...P.progressCard,marginTop:18,marginBottom:0},children:[n.jsx(ul,{pct:g,label:"Today",sub:`${f}/${t.length} done`,color:"#4C9A6B"}),n.jsx("div",{style:P.progressDivider}),n.jsx(ul,{pct:C,label:"This week",sub:"of weekly targets",color:"#3A7CA5"}),n.jsx("div",{style:P.progressDivider}),n.jsx(ul,{pct:N,label:"This month",sub:"of monthly targets",color:"#8268B0"})]})]})}function gy({habit:t,dayAction:e,logSet:r,onDelete:o,onEdit:i,setNote:s}){var W,R;const[l,a]=u.useState(null),[d,c]=u.useState(""),[p,y]=u.useState(null),[h,w]=u.useState(0),v=u.useRef(null);if(!t)return null;const k=((W=sn[t.pillar])==null?void 0:W.dot)||"#9A968C",z=((R=sn[t.pillar])==null?void 0:R.soft)||"rgba(0,0,0,0.05)",f=r(t),{dates:g,startOffset:b,label:C,year:S}=oy(h),B=g.filter(m=>m<=Cr&&f.has(m)).length,O=g.filter(m=>m<=Cr).length,Y=O>0?Math.round(B/O*100):0,F=t.type==="minimum"&&(t.period==="month"||t.period==="year"),N=t.period==="year"?(t.logs||[]).filter(m=>m.startsWith(`${S}-`)).length:g.filter(m=>f.has(m)).length,j=F&&N>=(t.target_count||0),T=t.type==="minimum"&&t.period==="week",x=t.target_count||0,U=m=>{const G=new Date(m+"T00:00"),lt=G.getDay(),rt=new Date(G);rt.setDate(G.getDate()+(lt===0?-6:1-lt));let L=0;for(let st=0;st<7;st++){const q=new Date(rt);q.setDate(rt.getDate()+st),f.has(As(q))&&L++}return L},bt=m=>F?j:T?U(m)>=x:!1,et=T?U(Cr):0,D=T&&et>=x,A=m=>{v.current=setTimeout(()=>a(m),500)},M=()=>clearTimeout(v.current),V=m=>{var G;y(m),c(((G=t.log_notes)==null?void 0:G[m])||""),a(null)};return n.jsxs("div",{children:[n.jsxs("div",{style:P.mainHead,children:[n.jsxs("div",{children:[n.jsxs("div",{style:P.eyebrow,children:[n.jsx("span",{style:{...P.sideDot,background:k,marginRight:6}}),t.pillar," · Monthly view"]}),n.jsx("h1",{style:P.h1,children:t.name})]}),n.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[n.jsxs("button",{onClick:i,style:P.actionBtn,children:[n.jsx(pe,{size:14})," Edit"]}),n.jsxs("button",{onClick:o,style:{...P.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[n.jsx(jt,{size:14})," Delete"]}),t.reminder_time&&n.jsxs("button",{style:P.actionBtn,children:[n.jsx(tp,{size:14})," ",t.reminder_time]})]})]}),n.jsxs("div",{style:P.statStrip,children:[n.jsx(hn,{label:"Current streak",value:`${t.streak} days`,c:k,soft:z,flame:!0}),n.jsx(hn,{label:"Best streak",value:`${t.max_streak??t.streak} days`,c:k,soft:z,flame:!0}),n.jsx(hn,{label:"Done this month",value:`${B}/${O}`,c:k,soft:z}),n.jsx(hn,{label:"Completion",value:`${Y}%`,c:k,soft:z}),t.type==="regular"?n.jsx(hn,{label:"Weekly target",value:`${t.target_per_week}×`,c:k,soft:z}):n.jsx(hn,{label:t.type==="minimum"?"Min target":"Max allowed",value:`${t.target_count}/${t.period}`,c:k,soft:z})]}),n.jsxs("div",{style:P.navBar,children:[n.jsx("button",{onClick:()=>w(m=>m-1),style:P.navBtn,children:n.jsx(qn,{size:16})}),n.jsxs("span",{style:P.navLabel,children:[C,h===0?" · This month":""]}),n.jsx("button",{onClick:()=>w(m=>Math.min(0,m+1)),disabled:h>=0,style:{...P.navBtn,...h>=0?P.navBtnDisabled:{}},children:n.jsx(dn,{size:16})})]}),F&&n.jsxs("div",{style:{...P.chainBanner,background:j?z:"var(--bg)",color:j?k:"var(--text-3)"},children:[n.jsx(ka,{size:15}),j?`${t.period==="year"?"Yearly":"Monthly"} chain complete — ${N}/${t.target_count} connected`:`${N}/${t.target_count} this ${t.period} · ${(t.target_count||0)-N} more to connect the chain`]}),T&&h===0&&n.jsxs("div",{style:{...P.chainBanner,background:D?z:"var(--bg)",color:D?k:"var(--text-3)"},children:[n.jsx(ka,{size:15}),D?`This week's chain complete — ${et}/${x} connected`:`${et}/${x} this week · ${Math.max(0,x-et)} more to connect the chain`]}),n.jsxs("div",{style:P.monthCard,children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[n.jsx("div",{style:P.monthTitle,children:C}),n.jsx("span",{style:{fontSize:11,color:"var(--text-3)"},children:"Long-press a day for options"})]}),n.jsx("div",{style:P.monthDow,children:yp.map(m=>n.jsx("div",{style:P.monthDowCell,children:m},m))}),n.jsxs("div",{style:P.monthGrid,children:[Array.from({length:b}).map((m,G)=>n.jsx("div",{},`pad${G}`)),g.map((m,G)=>{var _e,Le;const lt=G+1,rt=f.has(m),L=m>Cr,st=m===Cr,q=!!((_e=t.log_notes)!=null&&_e[m]),Z=(t.type==="minimum"||t.type==="maximum")&&t.period==="day",X=(Le=t.log_counts)==null?void 0:Le[m],vt=X!=null,ut=bt(m),Bt=ut&&!rt,$t=(b+G)%7;return n.jsxs("div",{style:{position:"relative"},children:[ut&&n.jsx("span",{style:{...P.chainLine,background:k,...$t===0?{left:"50%"}:{left:-6},...$t===6?{right:"50%"}:{right:-6}}}),n.jsx("button",{disabled:L,onClick:()=>e(t,m),onMouseDown:()=>!Z&&A(m),onMouseUp:M,onTouchStart:()=>!Z&&A(m),onTouchEnd:M,style:{...P.monthDay,position:"relative",zIndex:1,...rt?{background:k,borderColor:k,color:"#fff"}:{},...Bt?{background:z,borderColor:k,color:k}:{},...Z&&vt&&!rt?{borderColor:k,color:k}:{},...L&&!rt?P.monthDayFuture:{},...st&&!rt?{borderColor:k,borderWidth:2}:{},width:"100%"},children:lt}),Z&&vt&&n.jsx("span",{style:{...P.countBadge,background:rt?"#4C9A6B":k},children:X}),q&&n.jsx("span",{style:P.noteIndicator}),l===m&&n.jsx(uy,{onEdit:i,onDelete:o,onAddNote:()=>V(m),onRemind:i,onClose:()=>a(null)})]},m)})]})]}),p&&n.jsxs("div",{style:P.noteBox,children:[n.jsxs("div",{style:{fontWeight:600,fontSize:13,marginBottom:6},children:["Note for ",p]}),n.jsx("textarea",{value:d,onChange:m=>c(m.target.value),placeholder:"Add a note for this day…",style:{...P.sideInput,minHeight:60,resize:"vertical"}}),n.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[n.jsxs("button",{onClick:()=>{s(p,d),y(null)},style:P.sideAddBtn,children:[n.jsx(zt,{size:13})," Save"]}),n.jsx("button",{onClick:()=>y(null),style:P.sideCancelBtn,children:n.jsx(jt,{size:13})})]})]})]})}function uy({onEdit:t,onDelete:e,onAddNote:r,onRemind:o,onClose:i}){return n.jsxs("div",{style:P.longPressMenu,children:[n.jsxs("button",{style:P.menuItem,onClick:()=>{t(),i()},children:[n.jsx(pe,{size:13})," Edit"]}),n.jsxs("button",{style:P.menuItem,onClick:()=>{r(),i()},children:[n.jsx(zd,{size:13})," Add note"]}),n.jsxs("button",{style:P.menuItem,onClick:()=>{o(),i()},children:[n.jsx(tp,{size:13})," Remind"]}),n.jsxs("button",{style:{...P.menuItem,color:"#C2536B"},onClick:()=>{e(),i()},children:[n.jsx(jt,{size:13})," Delete"]})]})}function by({habits:t,onSave:e,onClose:r}){const[o,i]=u.useState([...t]),s=(l,a)=>{const d=[...o],c=l+a;c<0||c>=d.length||([d[l],d[c]]=[d[c],d[l]],i(d))};return n.jsx("div",{style:P.modalOverlay,onClick:r,children:n.jsxs("div",{style:{...P.modal,maxHeight:"80vh",overflowY:"auto"},onClick:l=>l.stopPropagation(),children:[n.jsxs("div",{style:P.modalHead,children:["Reorder Habits",n.jsx("button",{onClick:r,style:P.closeBtn,children:n.jsx(jt,{size:16})})]}),n.jsx("p",{style:{fontSize:12,color:"var(--text-3)",margin:"0 0 10px"},children:"Use arrows to set the display order."}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:o.map((l,a)=>{var c;const d=((c=sn[l.pillar])==null?void 0:c.dot)||"#9A968C";return n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"9px 10px",background:"var(--bg)",borderRadius:9,border:"1px solid var(--border)"},children:[n.jsx("span",{style:{...P.sideDot,background:d}}),n.jsx("span",{style:{flex:1,fontSize:13,fontWeight:500},children:l.name}),n.jsx("button",{onClick:()=>s(a,-1),disabled:a===0,style:{...P.navBtn,width:28,height:28,opacity:a===0?.3:1,fontSize:14},children:"↑"}),n.jsx("button",{onClick:()=>s(a,1),disabled:a===o.length-1,style:{...P.navBtn,width:28,height:28,opacity:a===o.length-1?.3:1,fontSize:14},children:"↓"})]},l.id)})}),n.jsxs("button",{onClick:()=>e(o.map(l=>l.id)),style:{...P.sideAddBtn,width:"100%",marginTop:14,height:38,justifyContent:"center"},children:[n.jsx(zt,{size:14})," Save Order"]})]})})}function py({year:t}){const[e,r]=u.useState([]);if(u.useEffect(()=>{H.getHabitsYearly(t).then(r).catch(console.error)},[t]),!e.length)return null;const o=Array.from({length:12},(s,l)=>{const a=e.reduce((c,p)=>{var y;return c+(((y=p.monthly[l+1])==null?void 0:y.done)||0)},0),d=e.reduce((c,p)=>{var y;return c+Math.floor((((y=p.monthly[l+1])==null?void 0:y.days)||30)/7*7)},0);return d>0?Math.round(a/d*100):0}),i=Math.max(...o,1);return n.jsxs("div",{style:{...P.monthCard,marginTop:18},children:[n.jsxs("div",{style:P.monthTitle,children:[t," Completion"]}),n.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:6,height:80,marginTop:12},children:o.map((s,l)=>n.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[n.jsx("div",{style:{width:"100%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",height:`${s/i*60}px`,minHeight:2,opacity:s>0?1:.15},title:`${s}%`}),n.jsx("span",{style:{fontSize:9,color:"var(--text-3)",fontWeight:600},children:ey[l]})]},l))})]})}function hn({label:t,value:e,c:r,soft:o,flame:i}){return n.jsxs("div",{style:{...P.stat,background:o},children:[n.jsx("div",{style:P.statLabel,children:t}),n.jsxs("div",{style:{...P.statValue,color:r},children:[i&&n.jsx(Jn,{size:15})," ",e]})]})}const P={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:230,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",padding:"20px 12px",display:"flex",flexDirection:"column",gap:3,overflowY:"auto"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.18)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)",boxShadow:"none"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.38)",zIndex:20},sideTop:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 4px"},closeBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",marginBottom:8},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700,padding:"0 6px 14px"},sideItem:{display:"flex",alignItems:"center",gap:9,width:"100%",border:"none",background:"none",padding:"9px 10px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:500,color:"var(--text-2)",textAlign:"left"},sideItemOn:{background:"var(--hover)",fontWeight:600},sideLabel:{flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},sideCount:{fontSize:11,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:10,padding:"1px 7px"},sideStreak:{display:"flex",alignItems:"center",gap:3,fontSize:11,fontWeight:600,color:"#C2773B"},sideDot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},sideDivider:{height:1,background:"var(--border)",margin:"8px 6px"},addBox:{padding:"10px 6px",display:"flex",flexDirection:"column",gap:6},sideInput:{border:"1px solid var(--border)",borderRadius:7,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},sideAddBtn:{border:"none",background:"#4C9A6B",color:"#fff",height:30,padding:"0 12px",borderRadius:7,cursor:"pointer",display:"flex",alignItems:"center",gap:5,fontSize:13,fontFamily:"inherit"},sideCancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:30,height:30,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},sideNewBtn:{display:"flex",alignItems:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",borderRadius:8,padding:"8px 10px",fontSize:12.5,color:"var(--text-3)",fontWeight:600,cursor:"pointer",fontFamily:"inherit",marginTop:6,justifyContent:"center"},main:{flex:1,padding:"26px",overflowX:"hidden",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:200},mainHead:{marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:5,display:"flex",alignItems:"center"},h1:{fontSize:27,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},actionBtn:{display:"flex",alignItems:"center",gap:5,fontSize:12,fontWeight:500,color:"var(--text-2)",border:"1px solid var(--border)",background:"var(--surface)",padding:"5px 10px",borderRadius:7,cursor:"pointer",fontFamily:"inherit"},progressCard:{background:"var(--surface)",borderRadius:12,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14,display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"},progressDivider:{width:1,alignSelf:"stretch",background:"var(--border)",minHeight:48},ringStat:{display:"flex",alignItems:"center",gap:12,flex:"1 1 160px"},ringBox:{position:"relative",width:70,height:70,display:"grid",placeItems:"center",flexShrink:0},ringPct:{position:"absolute",inset:0,display:"grid",placeItems:"center",fontSize:16,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},ringLabel:{fontSize:14,fontWeight:700,color:"var(--text)"},ringSub:{fontSize:11.5,color:"var(--text-3)",fontWeight:500,marginTop:2},weekCard:{background:"var(--surface)",borderRadius:12,padding:"8px 14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"auto"},weekHeadRow:{display:"flex",alignItems:"flex-end",padding:"10px 0",borderBottom:"1px solid var(--border)",minWidth:480},weekNameCol:{width:160,flexShrink:0,display:"flex",alignItems:"center",gap:8},weekDayHead:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:2},weekDayName:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekDayNum:{fontSize:12,fontWeight:600,color:"var(--text-2)",width:22,height:22,display:"grid",placeItems:"center",borderRadius:"50%"},weekDayToday:{background:"var(--accent-strong)",color:"#fff"},weekStreakCol:{width:64,flexShrink:0,textAlign:"center",fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekRow:{display:"flex",alignItems:"center",padding:"9px 0",borderBottom:"1px solid #F4F2EC",minWidth:480},weekHabitName:{fontSize:13,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},weekCell:{flex:1,display:"grid",placeItems:"center"},typeBadge:{fontSize:10,color:"var(--text-3)",background:"var(--hover)",padding:"1px 6px",borderRadius:8,fontWeight:600},tick:{width:26,height:26,borderRadius:7,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",padding:0},tickFuture:{opacity:.4,cursor:"not-allowed",borderStyle:"dashed"},streakPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:12,fontWeight:700,padding:"3px 9px",borderRadius:12},tinyBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:"2px 3px",display:"grid",placeItems:"center",borderRadius:4},statStrip:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(120px,1fr))",gap:10,marginBottom:18},stat:{borderRadius:10,padding:"13px 14px"},statLabel:{fontSize:11,fontWeight:600,color:"var(--text-2)",marginBottom:5},statValue:{fontSize:19,fontWeight:700,display:"flex",alignItems:"center",gap:5,fontFamily:"'Fraunces',Georgia,serif"},monthCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},monthTitle:{fontSize:14,fontWeight:700,marginBottom:12,fontFamily:"'Fraunces',Georgia,serif"},monthDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6,marginBottom:8},monthDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},monthGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6},monthDay:{aspectRatio:"1",border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",display:"grid",placeItems:"center"},monthDayFuture:{opacity:.4,cursor:"not-allowed",background:"var(--surface-2)"},noteIndicator:{position:"absolute",top:3,right:3,width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},cellNoteBubble:{position:"absolute",top:2,right:"calc(50% - 16px)",width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},countBadge:{position:"absolute",bottom:2,right:2,minWidth:13,height:13,padding:"0 2px",borderRadius:7,color:"#fff",fontSize:9,fontWeight:700,display:"grid",placeItems:"center",lineHeight:1},counterBtn:{width:44,height:44,borderRadius:"50%",border:"1.5px solid var(--border)",background:"var(--surface)",color:"var(--text)",fontSize:24,fontWeight:700,cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit",lineHeight:1},chainLine:{position:"absolute",top:"calc(50% - 3px)",left:0,right:0,height:6,zIndex:0,opacity:.9},chainBanner:{display:"flex",alignItems:"center",gap:8,borderRadius:10,padding:"10px 14px",marginBottom:14,fontSize:12.5,fontWeight:700,fontFamily:"'Inter',system-ui,sans-serif"},navBar:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:16},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},navLabel:{fontSize:13,fontWeight:700,color:"var(--text)",minWidth:180,textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},noteBox:{background:"var(--surface)",borderRadius:10,padding:14,marginTop:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},longPressMenu:{position:"absolute",top:"100%",left:0,zIndex:50,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 4px 16px rgba(0,0,0,0.12)",padding:"4px 0",minWidth:140},menuItem:{display:"flex",alignItems:"center",gap:8,width:"100%",border:"none",background:"none",padding:"8px 14px",fontSize:13,color:"var(--text)",cursor:"pointer",fontFamily:"inherit",textAlign:"left"},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",zIndex:100,display:"grid",placeItems:"center"},modal:{background:"var(--surface)",borderRadius:14,padding:24,width:320,maxWidth:"90vw",display:"flex",flexDirection:"column",gap:8},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",fontWeight:700,fontSize:16,fontFamily:"'Fraunces',Georgia,serif",marginBottom:6},modalLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.08em",marginTop:4}},Ia=[{id:1,label:"Rough",emoji:"😣",color:"#C2536B"},{id:2,label:"Low",emoji:"🙁",color:"#C2773B"},{id:3,label:"Okay",emoji:"😐",color:"#C9A227"},{id:4,label:"Good",emoji:"🙂",color:"#4C9A6B"},{id:5,label:"Great",emoji:"😄",color:"#3A7CA5"}],my=t=>Ia.find(e=>e.id===t),bl=[{id:"wins",label:"Wins",hint:"What went well today?",icon:on,color:"#C9A227"},{id:"grateful",label:"Grateful for",hint:"1–3 things",icon:xh,color:"#C2536B"},{id:"mattered",label:"What mattered",hint:"The point of today",icon:Ed,color:"#3A7CA5"},{id:"letgo",label:"Letting go of",hint:"Offload what's draining",icon:Ph,color:"#8268B0"},{id:"tomorrow",label:"Tomorrow's one thing",hint:"A single priority",icon:Ah,color:"#4C9A6B"}],vp=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,fy=()=>vp(new Date),pl=t=>new Date(t+"T00:00:00").toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long",year:"numeric"});function hy(){const t=fy(),[e,r]=[new Date().getFullYear(),new Date().getMonth()+1],[o,i]=u.useState(null),s=o||t,l=s===t,[a,d]=u.useState(null),[c,p]=u.useState({}),[y,h]=u.useState(Object.fromEntries(bl.map(F=>[F.id,""]))),w=u.useCallback(async F=>{const N=await H.getJournalEntry(F);d(N)},[]);u.useCallback(async()=>{const F=await H.getJournalHistory(e,r);p(F)},[e,r]);const v=u.useCallback(async()=>{const[F,N]=await Promise.all([H.getJournalEntry(s),H.getJournalHistory(e,r)]);d(F),p(N)},[s,e,r]);u.useEffect(()=>{v()},[v]);const k=async F=>{l&&(await H.updateJournalMood(s,F),v())},z=async F=>{if(!l)return;const N=y[F].trim();N&&(await H.addJournalBullet(s,F,N),h(j=>({...j,[F]:""})),w(s))},f=async F=>{await H.deleteJournalBullet(F),w(s)},g=F=>{i(F===t?null:F),h(Object.fromEntries(bl.map(N=>[N.id,""])))};if(!a)return n.jsx("div",{style:{padding:28,color:"var(--text-3)"},children:"Loading…"});const b=a.mood!==null,C=(()=>{let F=0;const N=new Date(t);if(c[t]||l&&b)F=1,N.setDate(N.getDate()-1);else return 0;for(;;){const T=vp(N);if(c[T])F++,N.setDate(N.getDate()-1);else break}return F})(),S=Object.values(a.bullets||{}).reduce((F,N)=>F+N.length,0),B=new Date(e,r,0).getDate(),O=new Date(e,r-1,1).getDay(),Y=O===0?6:O-1;return n.jsxs("div",{style:St.page,children:[n.jsxs("div",{style:St.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:St.eyebrow,children:"Anvil · Journal"}),!l&&n.jsxs("button",{style:St.backBtn,onClick:()=>i(null),children:[n.jsx(qn,{size:14})," Back to Today"]}),n.jsx("h1",{style:St.h1,children:l?"Today":pl(s)}),l&&n.jsx("div",{style:St.date,children:pl(t)})]}),n.jsxs("div",{style:St.streakBox,children:[n.jsx(Jn,{size:16,color:"#C2773B"}),n.jsx("span",{style:St.streakNum,children:C}),n.jsx("span",{style:St.streakLabel,children:"day streak"})]})]}),n.jsxs("div",{style:St.card,children:[n.jsxs("div",{style:St.cardTitle,children:["How ",l?"are":"were"," you?"]}),n.jsx("div",{style:St.moodRow,children:Ia.map(F=>{const N=a.mood===F.id;return n.jsxs("button",{onClick:()=>k(F.id),disabled:!l,style:{...St.moodBtn,cursor:l?"pointer":"default",...N?{background:F.color,borderColor:F.color,transform:"translateY(-2px)"}:{},...!l&&!N?{opacity:.55}:{}},children:[n.jsx("span",{style:St.moodEmoji,children:F.emoji}),n.jsx("span",{style:{...St.moodLabel,color:N?"#fff":"#6B675E"},children:F.label})]},F.id)})})]}),bl.map(F=>{var T;const N=F.icon,j=((T=a.bullets)==null?void 0:T[F.id])||[];return n.jsxs("div",{style:St.card,children:[n.jsxs("div",{style:St.sectionHead,children:[n.jsx("span",{style:{...St.sectionIcon,background:`${F.color}1A`,color:F.color},children:n.jsx(N,{size:15})}),n.jsxs("div",{children:[n.jsx("div",{style:St.cardTitle,children:F.label}),n.jsx("div",{style:St.sectionHint,children:F.hint})]})]}),n.jsxs("ul",{style:St.bulletList,children:[j.map(x=>n.jsxs("li",{style:St.bullet,children:[n.jsx("span",{style:{...St.bulletDot,background:F.color}}),n.jsx("span",{style:St.bulletText,children:x.text}),l&&n.jsx("button",{onClick:()=>f(x.id),style:St.bulletDel,children:n.jsx(jt,{size:13})})]},x.id)),!l&&j.length===0&&n.jsx("li",{style:St.sectionHint,children:"Nothing written."})]}),l&&n.jsxs("div",{style:St.addRow,children:[n.jsx("input",{placeholder:"Add a point…",value:y[F.id],onChange:x=>h(U=>({...U,[F.id]:x.target.value})),onKeyDown:x=>x.key==="Enter"&&z(F.id),style:St.input}),n.jsx("button",{onClick:()=>z(F.id),style:{...St.addBtn,background:F.color},children:n.jsx(ce,{size:16})})]})]},F.id)}),n.jsxs("div",{style:St.card,children:[n.jsxs("div",{style:St.cardTitle,children:[new Date(e,r-1).toLocaleDateString("en-US",{month:"long",year:"numeric"})," · Mood history",n.jsx("span",{style:{fontSize:11,color:"var(--text-3)",fontWeight:400,marginLeft:8},children:"tap a day to view"})]}),n.jsx("div",{style:St.calDow,children:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(F=>n.jsx("div",{style:St.calDowCell,children:F},F))}),n.jsxs("div",{style:St.calGrid,children:[Array.from({length:Y}).map((F,N)=>n.jsx("div",{},`p${N}`)),Array.from({length:B},(F,N)=>N+1).map(F=>{const N=`${e}-${String(r).padStart(2,"0")}-${String(F).padStart(2,"0")}`,j=N===t&&a.mood?a.mood:c[N],T=j?my(j):null,x=N>t,U=N===s;return n.jsx("button",{onClick:()=>!x&&g(N),disabled:x,style:{...St.calDay,background:T?T.color:x?"var(--surface-2)":"var(--surface)",borderColor:U?"var(--accent-strong)":"var(--border)",borderWidth:U?2:1,color:T?"#fff":"var(--text-3)",opacity:x?.5:1,cursor:x?"not-allowed":"pointer",outline:U?"2px solid var(--accent-strong)":"none",outlineOffset:1},title:T?T.label:N,children:T?T.emoji:F},F)})]}),n.jsx("div",{style:St.legend,children:Ia.map(F=>n.jsxs("span",{style:St.legendItem,children:[n.jsx("span",{style:{...St.legendDot,background:F.color}})," ",F.label]},F.id))})]}),n.jsx("div",{style:St.footer,children:l?b?`Mood set · ${S} point${S===1?"":"s"} written today`:"Tap a mood to log today and keep your streak":`Viewing ${pl(s)} · past entries are read-only`})]})}const St={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:22},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},backBtn:{display:"inline-flex",alignItems:"center",gap:4,border:"none",background:"none",color:"#3A7CA5",fontSize:12.5,fontWeight:600,cursor:"pointer",padding:"0 0 6px",fontFamily:"inherit"},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},date:{fontSize:13,color:"var(--text-3)",marginTop:4},streakBox:{display:"flex",alignItems:"center",gap:6,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"8px 14px"},streakNum:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"#C2773B"},streakLabel:{fontSize:11,color:"var(--text-3)",fontWeight:500},card:{background:"var(--surface)",borderRadius:12,padding:"18px 20px",marginBottom:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},cardTitle:{fontSize:14,fontWeight:700,marginBottom:12,color:"var(--text)"},moodRow:{display:"flex",gap:8,flexWrap:"wrap"},moodBtn:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,border:"2px solid var(--border)",background:"var(--surface)",borderRadius:10,padding:"10px 12px",cursor:"pointer",flex:"1 1 60px",transition:"transform 0.1s"},moodEmoji:{fontSize:22},moodLabel:{fontSize:11,fontWeight:600},sectionHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:10},sectionIcon:{width:32,height:32,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},sectionHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},bulletList:{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6,marginBottom:10},bullet:{display:"flex",alignItems:"center",gap:8,fontSize:13.5,lineHeight:1.4},bulletDot:{width:6,height:6,borderRadius:"50%",flexShrink:0},bulletText:{flex:1},bulletDel:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},addRow:{display:"flex",gap:8},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 12px",fontSize:13.5,fontFamily:"inherit",outline:"none"},addBtn:{width:36,height:36,border:"none",borderRadius:8,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:12},calDay:{aspectRatio:"1",border:"1px solid var(--border)",borderRadius:7,fontSize:13,display:"grid",placeItems:"center",fontWeight:500,fontFamily:"inherit"},legend:{display:"flex",gap:10,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)"},legendDot:{width:8,height:8,borderRadius:"50%",display:"inline-block"},footer:{fontSize:12.5,color:"var(--text-3)",textAlign:"center",marginTop:8,fontStyle:"italic"}},Xe=[{id:"D",label:"Data",color:"#3A7CA5",soft:"rgba(58,124,165,0.10)",prompt:"What did you read/watch? Log the raw source and a quick note.",hint:"e.g. 'Atomic Habits ch.1 — habits are systems not goals'"},{id:"I",label:"Information",color:"#8268B0",soft:"rgba(130,104,176,0.10)",prompt:"What did you actually understand from it? In your own words.",hint:"e.g. 'Small 1% improvements compound into massive change over time'"},{id:"K",label:"Knowledge",color:"#C9A227",soft:"rgba(201,162,39,0.10)",prompt:"How will this specifically improve your life? Connect it to your goals.",hint:"e.g. 'I will improve my morning workout habit by 1% each week'"},{id:"W",label:"Wisdom",color:"#4C9A6B",soft:"rgba(76,154,107,0.10)",prompt:"How have you implemented it? What changed?",hint:"e.g. 'I've not missed a workout in 3 weeks using the 1% rule'"}],bg=t=>Xe.findIndex(e=>e.id===t),za=[{id:"book",label:"Book",icon:ep},{id:"video",label:"Video",icon:$h},{id:"article",label:"Article",icon:zd}],pg=t=>za.find(e=>e.id===t)||za[0],ml={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"};function yy(){var et;const[t,e]=u.useState([]),[r,o]=u.useState(null),[i,s]=u.useState("ALL"),[l,a]=u.useState(!1),[d,c]=u.useState(null),[p,y]=u.useState({title:"",type:"book",pillar:"Academic",note:""}),[h,w]=u.useState({}),[v,k]=u.useState(null),[z,f]=u.useState(null),g=u.useCallback(async()=>{try{const D=await H.getSkills();e(D);const A={};D.forEach(M=>{A[M.id]=Object.fromEntries(Xe.map(V=>[V.id,""]))}),w(M=>{const V={...A};return D.forEach(W=>{M[W.id]&&(V[W.id]={...A[W.id],...M[W.id]})}),V})}catch(D){console.error(D)}},[]);u.useEffect(()=>{g()},[g]);const b=t.find(D=>D.id===r),C=b?bg(b.stage):-1,S=async(D,A)=>{var V;const M=(((V=h[D])==null?void 0:V[A])??"").trim();M&&(await H.addSkillNote(D,A,M),w(W=>({...W,[D]:{...W[D],[A]:""}})),g())},B=async D=>{await H.deleteSkillNote(D),g()},O=async()=>{!b||!(z!=null&&z.trim())||(await H.updateSkill(b.id,{title:z.trim()}),f(null),g())},Y=async()=>{!v||!v.text.trim()||(await H.updateSkillNote(v.id,v.text.trim()),k(null),g())},F=async D=>{await H.toggleSkillNote(D),g()},N=async(D,A)=>{t.find(V=>V.id===D)&&(A==="W"&&c(D),await H.completeSkillStage(D,A),g())},j=async()=>{if(!p.title.trim())return;const D=await H.createSkill({pillar:p.pillar,title:p.title.trim(),source_type:p.type,note_d:p.note.trim()});a(!1),y({title:"",type:"book",pillar:"Academic",note:""}),o(D.id),g()},T=async D=>{await H.deleteSkill(D),r===D&&o(null),g()},x=i==="ALL"?t:t.filter(D=>D.stage===i),U=t.filter(D=>D.stage==="W").length,bt=!!b;return n.jsxs("div",{style:dt.page,children:[d&&n.jsx("div",{style:dt.celebOverlay,children:n.jsxs("div",{style:dt.celebBox,children:[n.jsx("div",{style:dt.celebEmoji,children:"🏆"}),n.jsx("div",{style:dt.celebTitle,children:"Wisdom unlocked!"}),n.jsx("div",{style:dt.celebSub,children:"You've implemented this knowledge — that's rare and real."}),n.jsx("button",{onClick:()=>c(null),style:dt.celebBtn,children:"Continue"})]})}),n.jsxs("div",{style:dt.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:dt.eyebrow,children:"Anvil · Skills"}),n.jsx("h1",{style:dt.h1,children:"DIKW Skills"}),n.jsx("div",{style:dt.subhead,children:"Data → Information → Knowledge → Wisdom"})]}),n.jsxs("div",{style:dt.headRight,children:[n.jsxs("div",{style:dt.wisdomBadge,children:[n.jsx(on,{size:14,color:"#C9A227"})," ",U," Wisdom",U!==1?"s":""]}),n.jsxs("button",{onClick:()=>{a(!0),o(null)},style:dt.addSkillBtn,children:[n.jsx(ce,{size:15})," Add skill"]})]})]}),n.jsx("div",{style:dt.filterBar,children:["ALL",...Xe.map(D=>D.id)].map(D=>{const A=Xe.find(V=>V.id===D),M=i===D;return n.jsx("button",{onClick:()=>s(D),style:{...dt.filterBtn,...M?{background:A?A.color:"var(--accent-strong)",color:"#fff",borderColor:"transparent"}:{}},children:A?`${D} · ${A.label}`:"All"},D)})}),n.jsxs("div",{style:{...dt.layout,gridTemplateColumns:bt?"1fr 1fr":"1fr"},children:[n.jsxs("div",{style:dt.cardList,children:[l&&n.jsxs("div",{style:{...dt.skillCard,border:"2px dashed #3A7CA5"},children:[n.jsx("div",{style:dt.cardTitle,children:"New skill"}),n.jsx("input",{placeholder:"Title (book / video / article name)",value:p.title,onChange:D=>y(A=>({...A,title:D.target.value})),onKeyDown:D=>D.key==="Enter"&&j(),style:dt.input,autoFocus:!0}),n.jsxs("div",{style:dt.addRow,children:[n.jsx("select",{value:p.type,onChange:D=>y(A=>({...A,type:D.target.value})),style:dt.select,children:za.map(D=>n.jsx("option",{value:D.id,children:D.label},D.id))}),n.jsx("select",{value:p.pillar,onChange:D=>y(A=>({...A,pillar:D.target.value})),style:dt.select,children:Object.keys(ml).map(D=>n.jsx("option",{children:D},D))})]}),n.jsx("input",{placeholder:"First note (what did you read/watch?)",value:p.note,onChange:D=>y(A=>({...A,note:D.target.value})),style:dt.input}),n.jsxs("div",{style:dt.addRow,children:[n.jsxs("button",{onClick:j,style:dt.saveBtn,children:[n.jsx(zt,{size:14})," Save"]}),n.jsxs("button",{onClick:()=>a(!1),style:dt.cancelBtn,children:[n.jsx(jt,{size:14})," Cancel"]})]})]}),x.map(D=>{const A=bg(D.stage),M=Xe[A],V=pg(D.type),W=D.stage==="W",R=r===D.id;return n.jsxs("div",{onClick:()=>o(R?null:D.id),style:{...dt.skillCard,...R?{borderColor:M.color,borderWidth:2}:{},...W?{background:"rgba(76,154,107,0.05)"}:{}},children:[n.jsxs("div",{style:dt.skillCardTop,children:[n.jsxs("div",{style:dt.skillMeta,children:[n.jsx("span",{style:{color:ml[D.pillar]},children:n.jsx(V.icon,{size:13})}),n.jsx("span",{style:{...dt.pillarDot,background:ml[D.pillar]}}),n.jsxs("span",{style:dt.srcLabel,children:[V.label," · ",D.pillar]})]}),n.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[W&&n.jsx(Jo,{size:14,color:"#4C9A6B"}),n.jsx("button",{onClick:m=>{m.stopPropagation(),T(D.id)},style:dt.ghostBtn,children:n.jsx(jt,{size:13})})]})]}),n.jsx("div",{style:dt.skillTitle,children:D.title}),n.jsxs("div",{style:dt.track,children:[Xe.map((m,G)=>{var st;const lt=G<A,rt=G===A,L=(st=D.completed_stages)==null?void 0:st[m.id];return n.jsxs("div",{style:dt.trackItem,children:[n.jsxs("div",{style:{...dt.trackDot,background:lt||L||rt?m.color:"var(--border)",boxShadow:rt?`0 0 0 3px ${m.color}33`:"none"},children:[(lt||rt&&L)&&n.jsx(zt,{size:9,color:"#fff",strokeWidth:3}),rt&&!L&&n.jsx("span",{style:dt.trackCurrent,children:m.id}),!lt&&!rt&&n.jsx(rg,{size:8,color:"#B5B1A7"})]}),G<Xe.length-1&&n.jsx("div",{style:{...dt.trackLine,background:lt?Xe[G+1].color:"var(--border)"}})]},m.id)}),n.jsx("span",{style:{...dt.stageTag,background:M.soft,color:M.color},children:M.label})]})]},D.id)}),x.length===0&&!l&&n.jsx("div",{style:dt.empty,children:"No skills at this stage yet."})]}),b&&n.jsxs("div",{style:dt.detail,children:[n.jsxs("div",{style:dt.detailHead,children:[n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsxs("div",{style:dt.eyebrow,children:[pg(b.type).label," · ",b.pillar]}),z!==null?n.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",marginTop:4},children:[n.jsx("input",{autoFocus:!0,value:z,onChange:D=>f(D.target.value),onKeyDown:D=>{D.key==="Enter"&&O(),D.key==="Escape"&&f(null)},style:{...dt.input,fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:0,flex:1}}),n.jsx("button",{onClick:O,style:{...dt.noteAddBtn,background:"#4C9A6B",width:30,height:30},children:n.jsx(zt,{size:13})}),n.jsx("button",{onClick:()=>f(null),style:{...dt.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:30,height:30},children:n.jsx(jt,{size:13})})]}):n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[n.jsx("div",{style:dt.detailTitle,children:b.title}),n.jsx("button",{onClick:()=>f(b.title),style:dt.ghostBtn,title:"Edit name",children:n.jsx(pe,{size:13})})]})]}),n.jsx("button",{onClick:()=>{o(null),f(null)},style:dt.closeBtn,children:n.jsx(jt,{size:16})})]}),Xe.map((D,A)=>{var lt,rt,L;const M=A<=C,V=A===C,W=A<C||((lt=b.completed_stages)==null?void 0:lt[D.id]),R=A>C,m=((rt=b.notes)==null?void 0:rt[D.id])||[],G=((L=h[b.id])==null?void 0:L[D.id])??"";return n.jsxs("div",{style:{...dt.stageBlock,...M?{borderColor:D.color}:{},opacity:R?.45:1},children:[n.jsxs("div",{style:dt.stageBlockHead,children:[n.jsx("div",{style:{...dt.stageLetter,background:M?D.color:"var(--border)",color:M?"#fff":"#9A968C"},children:W&&!V?n.jsx(zt,{size:12,color:"#fff",strokeWidth:3}):R?n.jsx(rg,{size:11,color:"#9A968C"}):D.id}),n.jsxs("div",{style:{flex:1},children:[n.jsx("div",{style:{...dt.stageName,color:M?D.color:"#9A968C"},children:D.label}),M&&n.jsx("div",{style:dt.stagePrompt,children:D.prompt})]}),W&&!V&&n.jsx("span",{style:{...dt.doneBadge,color:D.color,background:D.soft},children:"Done"})]}),M&&(()=>{var X,vt;const st=D.id==="W",q=m.length>0&&m.every(ut=>ut.done),Z=st?q:m.length>0;return n.jsxs(n.Fragment,{children:[m.length>0&&n.jsx("ul",{style:dt.noteList,children:m.map(ut=>n.jsxs("li",{style:dt.noteItem,children:[st?n.jsx("button",{onClick:()=>F(ut.id),style:{...dt.checkBox,...ut.done?{background:D.color,borderColor:D.color}:{}},children:ut.done&&n.jsx(zt,{size:11,color:"#fff",strokeWidth:3})}):n.jsx("span",{style:{...dt.noteDot,background:D.color}}),(v==null?void 0:v.id)===ut.id?n.jsxs("div",{style:{flex:1,display:"flex",gap:5},children:[n.jsx("input",{autoFocus:!0,value:v.text,onChange:Bt=>k($t=>({...$t,text:Bt.target.value})),onKeyDown:Bt=>{Bt.key==="Enter"&&Y(),Bt.key==="Escape"&&k(null)},style:{...dt.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}),n.jsx("button",{onClick:Y,style:{...dt.noteAddBtn,background:D.color,width:28,height:28},children:n.jsx(zt,{size:12})}),n.jsx("button",{onClick:()=>k(null),style:{...dt.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:28,height:28},children:n.jsx(jt,{size:12})})]}):n.jsx("span",{style:{...dt.noteText,...st&&ut.done?{textDecoration:"line-through",color:"var(--text-3)"}:{}},children:ut.text}),(v==null?void 0:v.id)!==ut.id&&n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:()=>k({id:ut.id,text:ut.text}),style:dt.ghostBtn,children:n.jsx(pe,{size:12})}),n.jsx("button",{onClick:()=>B(ut.id),style:dt.ghostBtn,children:n.jsx(jt,{size:12})})]})]},ut.id))}),m.length===0&&n.jsx("div",{style:dt.noNotes,children:st?"Add the steps to implement this — check each off as you do it.":`No notes yet — ${D.hint}`}),n.jsxs("div",{style:dt.noteAddRow,children:[n.jsx("input",{placeholder:st?"Add a step to implement…":`Add a ${D.label} note…`,value:G,onChange:ut=>w(Bt=>({...Bt,[b.id]:{...Bt[b.id],[D.id]:ut.target.value}})),onKeyDown:ut=>ut.key==="Enter"&&S(b.id,D.id),style:dt.noteInput}),n.jsx("button",{onClick:()=>S(b.id,D.id),style:{...dt.noteAddBtn,background:D.color},children:n.jsx(ce,{size:14})})]}),V&&!((X=b.completed_stages)!=null&&X[D.id])&&n.jsxs(n.Fragment,{children:[st&&m.length>0&&!q&&n.jsxs("div",{style:dt.checklistHint,children:[m.filter(ut=>ut.done).length,"/",m.length," done — check all steps to complete Wisdom"]}),n.jsxs("button",{onClick:()=>N(b.id,D.id),disabled:!Z,style:{...dt.advanceBtn,background:Z?D.color:"#C3BFB5",marginTop:10,cursor:Z?"pointer":"not-allowed"},children:[n.jsx(zt,{size:14}),st?"Mark Wisdom complete":`Complete ${D.label} → ${(vt=Xe[A+1])==null?void 0:vt.label}`]})]})]})})()]},D.id)}),b.stage==="W"&&((et=b.completed_stages)==null?void 0:et.W)&&n.jsxs("div",{style:dt.wisdomDone,children:[n.jsx(on,{size:16,color:"#4C9A6B"})," Wisdom achieved — implemented in your life"]})]})]})]})}const dt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box",position:"relative"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},headRight:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},wisdomBadge:{display:"flex",alignItems:"center",gap:5,background:"rgba(201,162,39,0.12)",border:"1px solid rgba(201,162,39,0.3)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:700,color:"#8A6E1A"},addSkillBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},filterBar:{display:"flex",gap:6,flexWrap:"wrap",marginBottom:16},filterBtn:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},layout:{display:"grid",gap:12},cardList:{display:"flex",flexDirection:"column",gap:10},skillCard:{background:"var(--surface)",borderRadius:12,padding:"14px",border:"1.5px solid var(--border)",cursor:"pointer",boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},skillCardTop:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},skillMeta:{display:"flex",alignItems:"center",gap:6},pillarDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},srcLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)"},skillTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em",marginBottom:12},cardTitle:{fontSize:13,fontWeight:700,marginBottom:10},track:{display:"flex",alignItems:"center"},trackItem:{display:"flex",alignItems:"center"},trackDot:{width:22,height:22,borderRadius:"50%",display:"grid",placeItems:"center",flexShrink:0},trackCurrent:{fontSize:9,fontWeight:800,color:"#fff"},trackLine:{width:24,height:3,borderRadius:2},stageTag:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:12,marginLeft:10},detail:{background:"var(--surface)",borderRadius:14,padding:"18px 16px",boxShadow:"0 1px 4px rgba(0,0,0,0.07)",border:"1.5px solid var(--border)",alignSelf:"start"},detailHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16},detailTitle:{fontSize:18,fontWeight:700,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},stageBlock:{border:"1.5px solid var(--border)",borderRadius:10,padding:"12px 13px",marginBottom:10},stageBlockHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:8},stageLetter:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",fontSize:13,fontWeight:800,flexShrink:0},stageName:{fontSize:13,fontWeight:700},stagePrompt:{fontSize:11.5,color:"var(--text-2)",marginTop:2,lineHeight:1.4},doneBadge:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10,marginLeft:"auto",flexShrink:0},noteList:{margin:"0 0 8px 0",padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6},noteItem:{display:"flex",alignItems:"flex-start",gap:8,fontSize:13,lineHeight:1.4},noteDot:{width:6,height:6,borderRadius:"50%",flexShrink:0,marginTop:5},checkBox:{width:18,height:18,borderRadius:5,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,marginTop:1,padding:0},checklistHint:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,marginTop:10,textAlign:"center"},noteText:{flex:1,color:"var(--text)"},noNotes:{fontSize:12,color:"var(--text-3)",fontStyle:"italic",marginBottom:8},noteAddRow:{display:"flex",gap:6},noteInput:{flex:1,border:"1px solid var(--border)",borderRadius:7,padding:"7px 10px",fontSize:13,fontFamily:"inherit",outline:"none"},noteAddBtn:{width:32,height:32,border:"none",borderRadius:7,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},advanceBtn:{display:"flex",alignItems:"center",gap:8,border:"none",color:"#fff",padding:"10px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit",width:"100%",justifyContent:"center"},wisdomDone:{display:"flex",alignItems:"center",gap:8,justifyContent:"center",fontSize:13.5,fontWeight:700,color:"#4C9A6B",padding:12,background:"rgba(76,154,107,0.08)",borderRadius:10,marginTop:4},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},input:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box",marginBottom:8},select:{border:"1px solid var(--border)",borderRadius:8,padding:"8px 10px",fontSize:12.5,fontFamily:"inherit",flex:1},addRow:{display:"flex",gap:8,marginBottom:8},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},empty:{fontSize:13,color:"var(--text-3)",padding:"32px 12px",textAlign:"center"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.55)",zIndex:50,display:"grid",placeItems:"center"},celebBox:{background:"var(--surface)",borderRadius:20,padding:"40px 32px",textAlign:"center",maxWidth:320,boxShadow:"0 8px 40px rgba(0,0,0,0.18)"},celebEmoji:{fontSize:52,marginBottom:12},celebTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:8},celebSub:{fontSize:13.5,color:"var(--text-2)",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:"#4C9A6B",color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},wi=[{id:"aarti",title:"Aarti",html:`<h1>॥ गणपतीची आरती ॥</h1><br/>
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
      </div>`}];function vy(){const[t,e]=u.useState(()=>window.innerWidth<720);return u.useEffect(()=>{const r=()=>e(window.innerWidth<720);return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),t}const xy=t=>new Promise((e,r)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:l,height:a}=i;l>a&&l>1400?(a=a*1400/l,l=1400):a>1400&&(l=l*1400/a,a=1400);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(i,0,0,l,a),e(d.toDataURL("image/jpeg",.85))},i.onerror=r,i.src=o.result},o.onerror=r,o.readAsDataURL(t)});function mg({base:t,count:e,images:r}){const o=r&&r.length?r:null,i=o?o.length:e,[s,l]=u.useState(0);if(!i)return null;const a=s%i,d=o?o[a]:`${t}${a+1}.jpg`;return n.jsxs("div",{style:{maxWidth:560,margin:"0 auto"},children:[n.jsx("div",{style:ht.carouselFrame,children:n.jsx("img",{src:d,alt:`Page ${a+1}`,style:ht.carouselImg})}),n.jsxs("div",{style:ht.carouselNav,children:[n.jsxs("button",{onClick:()=>l(c=>(c-1+i)%i),style:ht.carouselBtn,children:[n.jsx(qn,{size:16})," Prev"]}),n.jsxs("span",{style:ht.carouselCount,children:[o?"":"Adhyay ",a+1," / ",i]}),n.jsxs("button",{onClick:()=>l(c=>(c+1)%i),style:ht.carouselBtn,children:["Next ",n.jsx(dn,{size:16})]})]})]})}function ky(){const t=vy(),[e,r]=u.useState(!1),[o,i]=u.useState([]),[s,l]=u.useState("dss"),[a,d]=u.useState(!1),[c,p]=u.useState({title:"",type:"text",content:"",images:[]}),[y,h]=u.useState([]),[w,v]=u.useState(null),[k,z]=u.useState(!1),f=u.useRef(!1),g=u.useCallback(async()=>{try{const[M,V,W]=await Promise.all([H.getDecks(),H.getSetting("spiritual_order"),H.getSetting("spiritual_default")]);if(i(M),Array.isArray(V==null?void 0:V.value)&&h(V.value),W!=null&&W.value&&v(W.value),!f.current){f.current=!0;const R=new Set([...wi.map(m=>m.id),...M.map(m=>`deck-${m.id}`)]);W!=null&&W.value&&R.has(W.value)&&l(W.value)}}catch{}},[]);u.useEffect(()=>{g()},[g]);const b=[...wi.map(M=>({id:M.id,title:M.title})),...o.map(M=>({id:`deck-${M.id}`,title:M.title}))],C=(()=>{if(!y.length)return b;const M=new Map(b.map(W=>[W.id,W])),V=[];return y.forEach(W=>{M.has(W)&&(V.push(M.get(W)),M.delete(W))}),M.forEach(W=>V.push(W)),V})(),S=(M,V)=>{const W=C.map(m=>m.id),R=M+V;R<0||R>=W.length||([W[M],W[R]]=[W[R],W[M]],h(W),H.setSetting("spiritual_order",W).catch(()=>{}))},B=M=>{v(M),H.setSetting("spiritual_default",M).catch(()=>{})},O=s.startsWith("deck-")?Number(s.slice(5)):null,Y=O!=null?o.find(M=>M.id===O):null,F=Y?null:wi.find(M=>M.id===s)||(O==null?wi[0]:null),N=a?"New deck":Y?Y.title:(F==null?void 0:F.title)||"",j=M=>{l(M),d(!1),t&&r(!1)},T=()=>{d(!0),p({title:"",type:"text",content:"",images:[]}),t&&r(!1)},x=async M=>{const V=Array.from(M.target.files||[]),W=[];for(const R of V)try{W.push(await xy(R))}catch{}p(R=>({...R,images:[...R.images,...W]})),M.target.value=""},U=M=>p(V=>({...V,images:V.images.filter((W,R)=>R!==M)})),bt=c.title.trim()&&(c.type==="text"?c.content.trim():c.images.length>0),et=async()=>{if(!bt)return;const M=await H.createDeck({title:c.title.trim(),type:c.type,content:c.type==="text"?c.content:"",images:c.type==="images"?c.images:[]});d(!1),await g(),l(`deck-${M.id}`)},D=async M=>{await H.deleteDeck(M),s===`deck-${M}`&&l("dss"),g()},A={...ht.sidebar,...t?ht.sidebarOverlay:{},...t&&!e?ht.sidebarHidden:{}};return n.jsxs("div",{style:ht.shell,children:[n.jsx("style",{children:wy}),t&&e&&n.jsx("div",{style:ht.backdrop,onClick:()=>r(!1)}),n.jsxs("aside",{style:A,children:[n.jsxs("div",{style:ht.sideHead,children:[n.jsx("div",{style:ht.brand,children:"Anvil · Spiritual"}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:2},children:[n.jsx("button",{onClick:()=>z(M=>!M),style:ht.iconBtn,title:"Rearrange & set default",children:k?n.jsx(zt,{size:16}):n.jsx(pe,{size:15})}),t&&n.jsx("button",{onClick:()=>r(!1),style:ht.iconBtn,children:n.jsx(jt,{size:17})})]})]}),k&&n.jsxs("div",{style:ht.editHint,children:["Arrows reorder · ",n.jsx(ps,{size:11,style:{verticalAlign:"-1px"}})," sets what opens by default"]}),n.jsxs("div",{style:ht.sideScroll,children:[C.map((M,V)=>{const W=M.id===s&&!a,R=w===M.id;return n.jsxs("div",{style:ht.sideRow,children:[n.jsxs("button",{onClick:()=>j(M.id),style:{...ht.sideItem,flex:1,...W?ht.sideItemOn:{}},children:[M.title,R&&n.jsx("span",{style:ht.defStar,title:"Opens by default",children:" ★"})]}),k&&n.jsxs("div",{style:ht.editControls,children:[n.jsx("button",{onClick:()=>B(M.id),title:"Set as default",style:{...ht.miniBtn,...R?{color:"#8268B0"}:{}},children:n.jsx(ps,{size:13})}),n.jsx("button",{onClick:()=>S(V,-1),disabled:V===0,style:{...ht.miniBtn,opacity:V===0?.3:1},children:n.jsx(rp,{size:13})}),n.jsx("button",{onClick:()=>S(V,1),disabled:V===C.length-1,style:{...ht.miniBtn,opacity:V===C.length-1?.3:1},children:n.jsx(Rs,{size:13})})]})]},M.id)}),n.jsxs("button",{onClick:T,style:{...ht.newDeckBtn,...a?ht.sideItemOn:{}},children:[n.jsx(ce,{size:14})," New deck"]})]})]}),n.jsxs("main",{style:ht.main,children:[t&&n.jsxs("button",{onClick:()=>r(!0),style:ht.hamburger,children:[n.jsx(Td,{size:17}),n.jsx("span",{style:ht.hamburgerLabel,children:N})]}),a?n.jsxs("div",{style:ht.contentWrap,children:[n.jsx("div",{style:ht.formTitle,children:"Create a deck"}),n.jsx("input",{placeholder:"Deck title (e.g. Vishnu Sahasranamam)",value:c.title,onChange:M=>p({...c,title:M.target.value}),style:ht.input}),n.jsxs("div",{style:ht.typeRow,children:[n.jsxs("button",{onClick:()=>p({...c,type:"text"}),style:{...ht.typeBtn,...c.type==="text"?ht.typeOn:{}},children:[n.jsx(zd,{size:15})," Text"]}),n.jsxs("button",{onClick:()=>p({...c,type:"images"}),style:{...ht.typeBtn,...c.type==="images"?ht.typeOn:{}},children:[n.jsx(kh,{size:15})," Images"]})]}),c.type==="text"?n.jsx("textarea",{placeholder:"Paste or write the text (verses, chant, reflection)…",value:c.content,onChange:M=>p({...c,content:M.target.value}),style:ht.textarea}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:ht.imgGrid,children:[c.images.map((M,V)=>n.jsxs("div",{style:ht.imgThumbWrap,children:[n.jsx("img",{src:M,alt:"",style:ht.imgThumb}),n.jsx("button",{onClick:()=>U(V),style:ht.imgDel,children:n.jsx(jt,{size:12})})]},V)),n.jsxs("label",{style:ht.imgAdd,children:[n.jsx(Fs,{size:20}),n.jsx("span",{style:{fontSize:11},children:"Add images"}),n.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:x,style:{display:"none"}})]})]}),n.jsx("div",{style:ht.hint,children:"Images show as a swipeable carousel, in the order added."})]}),n.jsxs("div",{style:ht.formActions,children:[n.jsxs("button",{onClick:()=>d(!1),style:ht.cancelBtn,children:[n.jsx(jt,{size:14})," Cancel"]}),n.jsxs("button",{onClick:et,disabled:!bt,style:{...ht.saveBtn,...bt?{}:ht.saveDisabled},children:[n.jsx(zt,{size:15})," Create deck"]})]})]}):Y?n.jsxs("div",{style:ht.contentWrap,children:[n.jsxs("div",{style:ht.deckHead,children:[n.jsx("h2",{style:ht.deckTitle,children:Y.title}),n.jsx("button",{onClick:()=>D(Y.id),style:ht.deckDel,title:"Delete deck",children:n.jsx(Wh,{size:15})})]}),Y.type==="images"?n.jsx(mg,{images:Y.images}):n.jsx("div",{style:ht.deckText,children:Y.content})]}):n.jsxs("div",{style:ht.contentWrap,children:[(F==null?void 0:F.youtube)&&n.jsx("div",{style:ht.videoFrame,children:n.jsx("iframe",{src:`https://www.youtube.com/embed/${F.youtube}`,title:F.title,style:ht.video,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0},F.youtube)}),F!=null&&F.carousel?n.jsx(mg,{base:F.imageBase,count:F.carousel}):n.jsx("div",{className:"spiritual-content",dangerouslySetInnerHTML:{__html:(F==null?void 0:F.html)||""}})]})]})]})}const wy=`
.spiritual-content { font-family: 'Inter', system-ui, sans-serif; color: var(--text); line-height: 1.9; font-size: 16px; text-align: center; }
.spiritual-content h1 { font-family: 'Fraunces', Georgia, serif; font-size: 24px; color: #8268B0; margin: 8px 0 18px; letter-spacing: -0.01em; }
.spiritual-content h2 { font-family: 'Fraunces', Georgia, serif; font-size: 18px; color: #7A5EA8; margin: 20px 0 8px; }
.spiritual-content h3 { font-size: 15px; color: var(--text-3); text-transform: uppercase; letter-spacing: 0.06em; margin: 18px 0 6px; }
.spiritual-content b { color: #8268B0; }
.spiritual-content div { text-align: center; }
`,ht={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:240,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.15)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.35)",zIndex:20},sideHead:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"18px 14px 12px"},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700},sideScroll:{flex:1,overflowY:"auto",padding:"0 8px 16px"},sideItem:{display:"block",width:"100%",border:"none",background:"none",padding:"10px 12px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13.5,fontWeight:500,color:"var(--text-2)",textAlign:"left",marginBottom:2},sideItemOn:{background:"rgba(130,104,176,0.12)",color:"#8268B0",fontWeight:700},sideRow:{display:"flex",alignItems:"center",gap:2},editControls:{display:"flex",alignItems:"center",gap:1,flexShrink:0},miniBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",borderRadius:5},defStar:{color:"#C9A227",fontWeight:700},editHint:{fontSize:10.5,color:"var(--text-3)",padding:"0 14px 8px",lineHeight:1.4},newDeckBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",padding:"9px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:600,color:"var(--text-2)",marginTop:6},main:{flex:1,padding:"26px 22px",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:220},contentWrap:{background:"var(--surface)",borderRadius:14,padding:"26px 28px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",maxWidth:760,margin:"0 auto"},videoFrame:{position:"relative",width:"100%",maxWidth:600,margin:"0 auto 22px",aspectRatio:"16 / 9",borderRadius:12,overflow:"hidden",background:"#000"},video:{position:"absolute",inset:0,width:"100%",height:"100%",border:"none"},carouselFrame:{background:"var(--surface-2)",borderRadius:12,padding:8,border:"1px solid var(--border)"},carouselImg:{width:"100%",borderRadius:8,display:"block"},carouselNav:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:14},carouselBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},carouselCount:{fontSize:13,fontWeight:700,color:"#8268B0",fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"none",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,color:"var(--text-2)"},deckHead:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,marginBottom:16,borderBottom:"1px solid var(--border)",paddingBottom:12},deckTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",margin:0,color:"#8268B0"},deckDel:{border:"1px solid var(--border)",background:"var(--surface)",color:"#C2536B",cursor:"pointer",display:"grid",placeItems:"center",padding:7,borderRadius:8,flexShrink:0},deckText:{fontSize:16,lineHeight:1.9,whiteSpace:"pre-wrap",color:"var(--text)",textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},formTitle:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:14},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none"},typeRow:{display:"flex",gap:8,marginTop:12},typeBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},typeOn:{background:"#8268B0",color:"#fff",borderColor:"#8268B0"},textarea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"12px",fontSize:15,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:200,resize:"vertical",lineHeight:1.7,marginTop:12},imgGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(90px, 1fr))",gap:8,marginTop:12},imgThumbWrap:{position:"relative",aspectRatio:"1",borderRadius:8,overflow:"hidden",border:"1px solid var(--border)"},imgThumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},imgDel:{position:"absolute",top:3,right:3,border:"none",background:"rgba(0,0,0,0.6)",color:"#fff",borderRadius:"50%",width:18,height:18,cursor:"pointer",display:"grid",placeItems:"center",padding:0},imgAdd:{aspectRatio:"1",border:"1px dashed var(--border)",borderRadius:8,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:4,cursor:"pointer",color:"var(--text-3)"},hint:{fontSize:11.5,color:"var(--text-3)",marginTop:8},formActions:{display:"flex",gap:8,marginTop:16},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:"#8268B0",color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"}},sr={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},fg=Object.keys(sr),jy=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Sy=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Cy=()=>{const t=new Date;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`},Iy=(t,e)=>`${Sy[e-1]} ${t}`,zy=(t,e)=>{const r=new Date(t,e,0).getDate();return Array.from({length:r},(o,i)=>`${t}-${String(e).padStart(2,"0")}-${String(i+1).padStart(2,"0")}`)},Ty=(t,e)=>{const r=new Date(t,e-1,1).getDay();return r===0?6:r-1};function Ey(){const t=Cy(),[e,r]=u.useState(new Date().getFullYear()),[o,i]=u.useState(new Date().getMonth()+1),[s,l]=u.useState([]),[a,d]=u.useState([]),[c,p]=u.useState({}),[y,h]=u.useState(null),[w,v]=u.useState(!1),[k,z]=u.useState(!1),[f,g]=u.useState({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:t}),[b,C]=u.useState(null),S=u.useCallback(async()=>{const[m,G,lt]=await Promise.all([H.getTopics(),H.getDueToday(),H.getCalendar(e,o)]);l(m),d(G),p(lt)},[e,o]);u.useEffect(()=>{S()},[S]);const B=async m=>{await H.toggleReviewDone(m),S()},O=async()=>{const m=f.intervals.split(",").map(G=>parseInt(G.trim(),10)).filter(G=>!isNaN(G));!f.topic.trim()||m.length===0||(await H.createTopic({pillar:f.pillar,topic:f.topic.trim(),intervals:m,learned_date:f.learned_date||t}),g({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:t}),z(!1),S())},{deleteItem:Y,toasts:F,handleUndo:N,handleDismiss:j}=cn(H.deleteTopic,H.restoreTopic,S),T=(m,G)=>Y(m,G),x=m=>C({id:m.id,topic:m.topic,pillar:m.pillar,intervals:(m.intervals||[]).join(", "),learned_date:m.learned_date}),U=async()=>{if(!b)return;const m=b.intervals.split(",").map(G=>parseInt(G.trim(),10)).filter(G=>!isNaN(G)&&G>=0);!b.topic.trim()||m.length===0||(await H.updateTopic(b.id,{topic:b.topic.trim(),pillar:b.pillar,learned_date:b.learned_date,intervals:m}),C(null),S())},bt=()=>{o===1?(r(m=>m-1),i(12)):i(m=>m-1),h(null)},et=()=>{o===12?(r(m=>m+1),i(1)):i(m=>m+1),h(null)},D=s.filter(m=>!m.cemented),A=s.filter(m=>m.cemented),M=zy(e,o),V=Ty(e,o),W=u.useMemo(()=>{const m={};return s.forEach(G=>G.reviews.forEach(lt=>{lt.done||(m[lt.due_date]=m[lt.due_date]||[]).push({topic:G.topic,pillar:G.pillar,stage:lt.stage})})),m},[s]),R=y?s.flatMap(m=>m.reviews.filter(G=>G.due_date===y).map(G=>({...G,topic:m.topic,pillar:m.pillar,total:m.reviews.length}))):[];return n.jsxs("div",{style:at.page,children:[n.jsxs("div",{style:at.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:at.eyebrow,children:"Anvil · Revision"}),n.jsx("h1",{style:at.h1,children:"Spaced Repetition"})]}),n.jsxs("button",{onClick:()=>z(!0),style:at.addBtn,children:[n.jsx(ce,{size:15})," Add topic"]})]}),k&&n.jsxs("div",{style:at.addBox,children:[n.jsx("input",{autoFocus:!0,placeholder:"What did you learn?",value:f.topic,onChange:m=>g(G=>({...G,topic:m.target.value})),onKeyDown:m=>m.key==="Enter"&&O(),style:at.input}),n.jsxs("div",{style:at.addRow,children:[n.jsx("select",{value:f.pillar,onChange:m=>g(G=>({...G,pillar:m.target.value})),style:at.select,children:fg.map(m=>n.jsx("option",{children:m},m))}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[n.jsx("label",{style:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},children:"Learned on"}),n.jsx("input",{type:"date",value:f.learned_date,onChange:m=>g(G=>({...G,learned_date:m.target.value})),style:{...at.select,fontSize:13}})]}),n.jsx("div",{style:{flex:1,minWidth:0},children:n.jsx("input",{value:f.intervals,onChange:m=>g(G=>({...G,intervals:m.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:at.input})})]}),n.jsxs("div",{style:at.addRow,children:[n.jsxs("button",{onClick:O,style:at.saveBtn,children:[n.jsx(zt,{size:14})," Save"]}),n.jsxs("button",{onClick:()=>z(!1),style:at.cancelBtn,children:[n.jsx(jt,{size:14})," Cancel"]})]})]}),a.length>0&&n.jsxs("div",{style:at.section,children:[n.jsxs("div",{style:at.sectionTitle,children:[n.jsx(cp,{size:15,color:"#C2536B"}),"Due Today",n.jsx("span",{style:at.badge,children:a.length})]}),a.map(m=>{var lt,rt;const G=((lt=sr[m.pillar])==null?void 0:lt.dot)||"#9A968C";return n.jsxs("div",{style:{...at.reviewCard,borderLeft:`3px solid ${G}`,...m.is_missed?{opacity:.85}:{}},children:[n.jsx("button",{onClick:()=>B(m.review_id),style:{...at.checkbox,...m.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:m.done&&n.jsx(zt,{size:12,color:"#fff",strokeWidth:3})}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("div",{style:at.reviewTopic,children:m.topic}),n.jsxs("div",{style:at.reviewMeta,children:[n.jsxs("span",{style:{...at.stageTag,background:((rt=sr[m.pillar])==null?void 0:rt.soft)||"rgba(0,0,0,0.05)",color:G},children:["Review ",m.stage,"/",m.total_stages]}),m.is_missed&&n.jsxs("span",{style:at.missedTag,children:["missed · ",m.due_date]})]})]})]},m.review_id)})]}),n.jsxs("div",{style:at.section,children:[n.jsxs("div",{style:at.sectionTitle,children:["Active Topics ",n.jsx("span",{style:at.badge,children:D.length})]}),D.length===0&&n.jsx("div",{style:at.empty,children:"No active topics. Add something you learned today."}),D.map(m=>{var L,st;const G=((L=sr[m.pillar])==null?void 0:L.dot)||"#9A968C",lt=((st=sr[m.pillar])==null?void 0:st.soft)||"rgba(0,0,0,0.05)",rt=m.reviews.filter(q=>q.done).length;return(b==null?void 0:b.id)===m.id?n.jsxs("div",{style:at.addBox,children:[n.jsx("input",{autoFocus:!0,value:b.topic,onChange:q=>C(Z=>({...Z,topic:q.target.value})),onKeyDown:q=>q.key==="Enter"&&U(),placeholder:"Topic",style:at.input}),n.jsxs("div",{style:at.addRow,children:[n.jsx("select",{value:b.pillar,onChange:q=>C(Z=>({...Z,pillar:q.target.value})),style:at.select,children:fg.map(q=>n.jsx("option",{children:q},q))}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[n.jsx("label",{style:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},children:"Learned on"}),n.jsx("input",{type:"date",value:b.learned_date,onChange:q=>C(Z=>({...Z,learned_date:q.target.value})),style:{...at.select,fontSize:13}})]}),n.jsx("div",{style:{flex:1,minWidth:0},children:n.jsx("input",{value:b.intervals,onChange:q=>C(Z=>({...Z,intervals:q.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:at.input})})]}),n.jsx("div",{style:at.editHint,children:"Changing the date or intervals reschedules the reviews (completed steps are kept where they still apply)."}),n.jsxs("div",{style:at.addRow,children:[n.jsxs("button",{onClick:U,style:at.saveBtn,children:[n.jsx(zt,{size:14})," Save plan"]}),n.jsxs("button",{onClick:()=>C(null),style:at.cancelBtn,children:[n.jsx(jt,{size:14})," Cancel"]})]})]},m.id):n.jsxs("div",{style:at.topicCard,children:[n.jsxs("div",{style:at.topicHead,children:[n.jsx("span",{style:{...at.dot,background:G}}),n.jsx("span",{style:at.topicName,children:m.topic}),n.jsx("span",{style:at.topicPillar,children:m.pillar}),n.jsxs("span",{style:at.topicProgress,children:[rt,"/",m.reviews.length," done"]}),n.jsx("button",{onClick:()=>x(m),style:at.ghostBtn,title:"Edit plan",children:n.jsx(pe,{size:12})}),n.jsx("button",{onClick:()=>T(m.id,m.topic),style:at.ghostBtn,title:"Delete",children:n.jsx(jt,{size:13})})]}),n.jsxs("div",{style:at.reviewDots,children:[m.reviews.map(q=>{q.due_date<t;const Z=q.due_date===t;return n.jsx("button",{onClick:()=>B(q.id),title:`Review ${q.stage} · ${q.due_date}${q.done?" · Done":""}`,style:{...at.reviewDot,background:q.done?G:Z?lt:"var(--hover)",border:`2px solid ${q.done||Z?G:"var(--border)"}`,color:q.done?"#fff":G},children:q.stage},q.id)}),n.jsxs("span",{style:at.learnedDate,children:["Learned ",m.learned_date]})]})]},m.id)})]}),A.length>0&&n.jsxs("div",{style:at.section,children:[n.jsxs("button",{onClick:()=>v(m=>!m),style:at.cementedToggle,children:[w?n.jsx(Rs,{size:15}):n.jsx(dn,{size:15}),n.jsx(on,{size:14,color:"#C9A227"}),"Cemented",n.jsx("span",{style:{...at.badge,background:"rgba(201,162,39,0.12)",color:"#8A6E1A"},children:A.length})]}),w&&A.map(m=>{var lt;const G=((lt=sr[m.pillar])==null?void 0:lt.dot)||"#9A968C";return n.jsx("div",{style:{...at.topicCard,opacity:.75},children:n.jsxs("div",{style:at.topicHead,children:[n.jsx("span",{style:{...at.dot,background:G}}),n.jsx("span",{style:at.topicName,children:m.topic}),n.jsx("span",{style:at.topicPillar,children:m.pillar}),n.jsx(on,{size:13,color:"#C9A227",style:{marginLeft:"auto"}})]})},m.id)})]}),n.jsxs("div",{style:at.calCard,children:[n.jsxs("div",{style:at.calHead,children:[n.jsx("button",{onClick:bt,style:at.calNav,children:"‹"}),n.jsxs("div",{style:at.calTitle,children:[Iy(e,o)," · Review Calendar"]}),n.jsx("button",{onClick:et,style:at.calNav,children:"›"})]}),n.jsx("div",{style:at.calDow,children:jy.map(m=>n.jsx("div",{style:at.calDowCell,children:m},m))}),n.jsxs("div",{style:at.calGrid,children:[Array.from({length:V}).map((m,G)=>n.jsx("div",{},`p${G}`)),M.map((m,G)=>{const lt=W[m]||[],rt=m===t,L=m===y,st=m<t,q=L?"#fff":rt?"var(--text)":st?"var(--text-2)":"var(--text-3)";return n.jsxs("button",{onClick:()=>h(L?null:m),style:{...at.calDay,background:L?"var(--accent-strong)":rt?"var(--hover)":"var(--surface)",borderColor:rt||L?"var(--accent-strong)":"var(--border)"},children:[n.jsx("span",{style:{...at.calDayNum,color:q,fontWeight:rt||L?700:600},children:G+1}),lt.slice(0,2).map((Z,X)=>{var vt;return n.jsxs("span",{title:Z.topic,style:{...at.calItem,color:L?"#fff":((vt=sr[Z.pillar])==null?void 0:vt.dot)||"var(--text-2)"},children:[X+1,". ",Z.topic]},X)}),lt.length>2&&n.jsxs("span",{style:{...at.calMore,color:L?"#fff":"var(--text-3)"},children:["+",lt.length-2," more"]})]},m)})]}),y&&n.jsxs("div",{style:at.dayDetail,children:[n.jsxs("div",{style:at.dayDetailTitle,children:["Reviews for ",y]}),R.length===0?n.jsx("div",{style:at.empty,children:"No reviews scheduled for this day."}):R.map((m,G)=>{var rt,L;const lt=((rt=sr[m.pillar])==null?void 0:rt.dot)||"#9A968C";return n.jsxs("div",{style:{...at.reviewCard,borderLeft:`3px solid ${lt}`},children:[n.jsx("button",{onClick:()=>B(m.id),style:{...at.checkbox,...m.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:m.done&&n.jsx(zt,{size:12,color:"#fff",strokeWidth:3})}),n.jsxs("div",{children:[n.jsxs("div",{style:at.reviewTopic,children:[G+1,". ",m.topic]}),n.jsxs("span",{style:{...at.stageTag,background:((L=sr[m.pillar])==null?void 0:L.soft)||"rgba(0,0,0,0.05)",color:lt},children:["Review ",m.stage,"/",m.total]})]})]},m.id)})]})]}),n.jsx(gn,{toasts:F,onUndo:N,onDismiss:j})]})}const at={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},addBox:{background:"var(--surface)",borderRadius:12,padding:16,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column",gap:10},addRow:{display:"flex",gap:8,alignItems:"center"},editHint:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.4},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",minWidth:0},select:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 10px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},section:{marginBottom:20},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10},badge:{fontSize:11,fontWeight:700,background:"var(--hover)",color:"var(--text-2)",borderRadius:10,padding:"1px 7px"},reviewCard:{display:"flex",alignItems:"center",gap:12,background:"var(--surface)",borderRadius:10,padding:"12px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},checkbox:{width:22,height:22,borderRadius:6,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,padding:0},reviewTopic:{fontSize:13.5,fontWeight:600,marginBottom:4},reviewMeta:{display:"flex",alignItems:"center",gap:8},stageTag:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10},missedTag:{fontSize:11,color:"#C2536B",fontWeight:600},topicCard:{background:"var(--surface)",borderRadius:12,padding:"13px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},topicHead:{display:"flex",alignItems:"center",gap:8,marginBottom:10},dot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},topicName:{fontSize:14,fontWeight:600,flex:1},topicPillar:{fontSize:11,color:"var(--text-3)",fontWeight:500},topicProgress:{fontSize:11,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",padding:"2px 7px",borderRadius:10},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},reviewDots:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"},reviewDot:{width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",fontSize:11,fontWeight:700,padding:0},learnedDate:{fontSize:11,color:"var(--text-3)",marginLeft:"auto"},cementedToggle:{display:"flex",alignItems:"center",gap:8,border:"none",background:"none",cursor:"pointer",fontSize:13,fontWeight:700,color:"var(--text-2)",padding:"4px 0",fontFamily:"inherit",marginBottom:8},empty:{fontSize:13,color:"var(--text-3)",padding:"16px 0",textAlign:"center"},calCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calNav:{border:"none",background:"none",fontSize:20,cursor:"pointer",color:"var(--text-2)",padding:"0 6px",lineHeight:1},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4},calDay:{minHeight:62,border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,cursor:"pointer",fontFamily:"inherit",display:"flex",flexDirection:"column",alignItems:"stretch",justifyContent:"flex-start",gap:1,position:"relative",padding:"3px 4px",overflow:"hidden",textAlign:"left"},calDayNum:{fontSize:11,lineHeight:1.1,marginBottom:1},calItem:{fontSize:8.5,fontWeight:700,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",lineHeight:1.3,textAlign:"left"},calMore:{fontSize:8,fontWeight:700,opacity:.85,lineHeight:1.2},dayDetail:{marginTop:16,paddingTop:16,borderTop:"1px solid var(--border)"},dayDetailTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10}},ji=[{id:1,title:"Regular Habits",cards:[{id:1,text:"1. I always do everything I need to do, when I need to do it. "},{id:2,text:"2. I never argue or let my emotions work against me. "},{id:3,text:"3. I have a good memory. I easily and automatically remember any name or anything that is important to me. "},{id:4,text:"4. I eat only what I should. "},{id:5,text:"5. I am a good listener. I hear everything that is said. I am attentive, interested, and aware of everything that is going on around me. "},{id:6,text:"6. I have the courage to state my opinions. I take responsibility for myself and everything I say and do."},{id:7,text:"7. I never spend more than I earn. I am financially responsible, both for my present and for my future."},{id:8,text:"8. I set goals and I follow them. I set my sights, take the appropriate action, and achieve my goals."},{id:9,text:"9. I spend time with my family and my loved ones. I enjoy sharing their lives with mine and my life with theirs."}]},{id:2,title:"Motivational",cards:[{id:1,text:"1. I can do anything I believe I can do. I’ve got it and every day I get more of it. I have talent, skills, and ability"},{id:2,text:"2. I set goals and I reach them. I know what I want out of life. I go after it and I get it. "},{id:3,text:"3. People like me, and I feel good about myself. I have a sense of pride in whoa am and I believe in myself. Nothing seems to stop me. I have a lot of determination. "},{id:4,text:"4. I turn problems into advantages. I find possibilities in things that other people never give a chance."},{id:5,text:"5. I have a lot of energy––I am very alive. I enjoy life and I can tell it and so can others"},{id:6,text:"6. I keep myself up, looking ahead, and liking it. I know that I can accomplish anything I choose, and I refuse to let anything negative hold me back or stand in my way. I am not afraid of anything or anyone. I have strength, power, conviction, and confidence. "},{id:7,text:"7. I like challenges and I meet them head on, face to face––today especially. I am on top of the world and I’m going for it. "},{id:8,text:"8. I have a clear picture in my mind of what I want. I can see it in front of me. "},{id:9,text:"9. I know what I want and I know how to get it. I know that it’s all up to me and I know I can do it. Roadblocks don’t bother me. They just mean that I am alive and running, and I’m not going to stand still for anything. "},{id:10,text:"10. I trust myself I’ve got what it takes––plenty of it––and I know how to use it. "},{id:11,text:"11. Today, more than ever. Today I am unstoppable. I’ve got myself together and I’m getting more together every day. And today––look out world, here I come. "},{id:12,text:"12. Limitations? I don’t even recognize them as limitations. There is no challenge I can’t conquer; there is no wall I can’t climb over. "},{id:13,text:"13. There is no problem I can’t defeat or turn around and make it work for me. I stand tall. I am honest and sincere. I like to deal with people and they like me. "},{id:14,text:"14. I think well; I think clearly. I am organized; I am in control of myself, and everything about me. I call my shots and no one has to call them for me. I never blame anyone else for the circumstances of my life. "},{id:15,text:"15. I accept my failings and move past them as easily as I accept the rewards for my victories. I never demand perfection of myself, but I expect the very best of what I have to give––and that’s what I get. I never give myself excuses. "},{id:16,text:"16. I get things done on time and in the right way. Today I have the inner strength to do more than ever. I am an exceptional human being. "},{id:17,text:"17. My goals and my incredible belief in myself turn my goals into reality. I have the power to live my dreams."},{id:18,text:"18.  I believe in them like I believe in myself. And that belief is so strong that there is nothing that diminishes my undefeatable spirit. "}]},{id:3,title:"Organized planning",cards:[{id:1,text:"1. I am organized and in control of my life. I am in control of myself, my thoughts, my time, my actions, and my future. "},{id:2,text:"2. I know what to do and when to do it, and I do everything I need to do, when I need to do it. "},{id:3,text:"3. I program my mind to make the maximum use of my time. I am in control of my time and how to use it. I like being organized, efficient, and on top of things."},{id:4,text:"4. Controlling my time keeps me that way. "},{id:5,text:"5. I never waste time––I always “plan” time. And because I plan my time, I always have time to do the things I choose to do. "},{id:6,text:"6. Each day I become more organized and in control of all areas of my life––at home, at work, in my mind and in my thoughts, in everything that I do. "},{id:7,text:"7. I am very well organized. Each night I make a list of things I need to do the next day. I set my priorities and I follow them. "},{id:8,text:"8. I am always on time. I am always right where I need to be, exactly when I need to be there. "},{id:9,text:"9. Being on time is easy for me and the more I control my time and the more organized I become, the easier it is. "},{id:10,text:"10. I am in control of my feelings, my emotions, my attitudes, and my needs. I control them; they do not control me. "},{id:11,text:"11. I have the winning vote in the outcome of my own actions. And I choose to live my life by choice, not chance. Therefore, I take the time to take control."},{id:12,text:"12. I have an organized and orderly mind. Because I think in an organized way, I conduct my life in an organized manner. "},{id:13,text:"13. I think in the most positive and productive way at all times and in all things. The way I think is the way I live––and I think “right.” "},{id:14,text:"14. I am the director of my destiny. I know where I am going and I know why I am going there. My earthly life is in my hands and in my control. "},{id:15,text:"15. I control my goals and the achievement of my goals. I organize my goals by writing each of them down, along with the steps I need to reach them. One of the reasons for my success is that my goals are clearly defined and organized."},{id:16,text:"16. I am in complete control of what I think and how I think. Therefore, I choose to think only those thoughts which help me and which are of genuine benefit to me."}]},{id:4,title:"Solving Problems",cards:[{id:1,text:"1. I’m good at solving problems. I like challenges and I meet them head on. "},{id:2,text:"2. Problems are my teachers. They help me to learn and grow. Without them, I would be going nowhere. With them, I am moving forward in the direction of my own goals. "},{id:3,text:"3. There is no problem which I cannot conquer. I am strong in mind, body, and spirit. My will, my strength, and my determination are always greater than any problem I face."},{id:4,text:"4. When I meet a new problem, I do not see the problem as my enemy. I know that finding the solution to the problem will move me forward in my own personal growth."},{id:5,text:"5. Because I know that problems are a key ingredient in my spiritual and mental education and preparation, I recognize that all problems are important to me. "},{id:6,text:"6. I do not fear problems, I solve them. I do not ignore problems, I confront them. I do not avoid problems, I conquer them. "},{id:7,text:"7. I know that every problem holds within itself the keys to its own solution. Therefore, the better I understand the problem, the clearer I am able to see its solution. "},{id:8,text:"8. Having problems is not a problem for me. I am confident, self-assured, positive, and determined. I always know that I am going to overcome any problem I encounter––and I always do. "},{id:9,text:"9. I am good at breaking large obstacles down into smaller pieces that are easier to handle. And I never make any problem appear to be larger than it actually is. "},{id:10,text:"10. I never worry. I turn “worry time” into positive, constructive, “solution time.” I keep my mind alert and open to all solutions—and solutions come quickly and easily to me. "},{id:11,text:"11. I have learned to recognize that many problems carry with them benefits and potential opportunities which would not have presented themselves had the problem not occurred in the first place. "},{id:12,text:"12. I do not seek to live a life which is free from all problems. Instead, I choose to live a life of finding solutions and enjoying the benefits which those solutions create."},{id:13,text:"13. Challenge, conquer, solution, and win are words which I live by daily. Challenges are opportunities. Conquering them is the inevitable outcome. "},{id:14,text:"14. “Solutions” are the stepping stones to my success, and “Winning” is my way of life."}]},{id:5,title:"Self Esteem",cards:[{id:1,text:"1. I really am very special. I like who I am and I feel good about myself. "},{id:2,text:"2. Although I always work to improve myself and I get better every day, I like who I am today. And tomorrow, when I’m even better, I’ll like myself then, too. "},{id:3,text:"3. It’s true that there really is no one else like me in the entire world. There never was another me before, and there will never be another me again. "},{id:4,text:"4. I am unique––from the top of my head to the bottom of my feet. In some ways I may look and act and sound like some others––but I am not them. I am me."},{id:5,text:"5. I wanted to be somebody––and now I know I am I would rather be me than anyone else in the world. "},{id:6,text:"6. I like how I feel and I like how I think and I like how I do things. I approve of me and I approve of who I am."},{id:7,text:"7. I have many beautiful qualities about me. I have talents and skills and abilities. I even have talents that I don’t even know about yet. And I am discovering new talents inside myself all the time. "},{id:8,text:"8. I am positive. I am confident. I radiate good things. If you look closely, you can even see a glow around me."},{id:9,text:"9. I am full of life. I like life and I’m glad to be alive. I am a very special person, living at a very special time. "},{id:10,text:"10. I am intelligent. My mind is quick and alert and clever and fun. I think good thoughts, and my mind makes things work right for me. "},{id:11,text:"11. I have a lot of energy and enthusiasm and vitality. I am exciting and I really enjoy being me. "},{id:12,text:"12. I like to be around other people and other people like to be around me. People like to hear what I have to say and know what I have to think. "},{id:13,text:"13. I smile a lot. I am happy on the inside and I am happy on the outside. "},{id:14,text:"14. I am interested in many things. I appreciate all the blessings I have, and the things that I learn, and all the things I will learn today and tomorrow and forever––just as long as I am. "},{id:15,text:"15. I am warm, sincere, honest, and genuine. I am all of these things and more. And all of these things are me. I like who I am, and I’m glad to be me."}]},{id:6,title:"Self-Responsibility",cards:[{id:1,text:"1. I take full responsibility for everything about me––even the thoughts that I think. I am in control of the vast resources of my own mind."},{id:2,text:"2. I alone am responsible for what I do and what I tell myself about me. No one can share this responsibility with me. "},{id:3,text:"3. I also allow others to accept their responsibilities far themselves and I do not try to accept their responsibilities for them. "},{id:4,text:"4. I enjoy being responsible. It puts me in charge of being me––and that’s a challenge I enjoy. "},{id:5,text:"5. I allow no one else, at any time, to assume control or responsibility over my life or over anything that I do. My responsibility to others is an extension of my own responsibility to myself. "},{id:6,text:"6. I choose to leave nothing about me up to chance. When it comes to me––and anything in my life––I choose to CHOOSE. "},{id:7,text:"7. My choices are mine alone to make for myself. I do not, at any time, allow anyone else to make my choices for me. And I accept full responsibility for every choice and decision I make. "},{id:8,text:"8. I always meet all of the obligations which I accept. And I accept no obligations which I will not meet. "},{id:9,text:"9. I am trustworthy. I can be counted on. I have accepted winning responsibility for myself––and I always live up to the responsibilities I accept. "},{id:10,text:"10. There is no they on whom I lay the blame, or with whom I share my own personal responsibilities. I have learned the great secret of mastering my own destiny. I have learned that “they” is “me.” "},{id:11,text:"11. I have no need to make excuses and no one needs to carry my responsibility for me. I gladly carry my own weight––and I carry it well. "},{id:12,text:"12. Each day I acknowledge and accept the responsibility––not only for my own actions––but also for my emotions, my thoughts, and my attitude. "},{id:13,text:"13. I accept the responsibility for living my life in a way which creates my strengths, my happiness, my positive, healthy beliefs, and for my past, my present, and my future."}]},{id:7,title:"Freedom from worry",cards:[{id:1,text:"1. I never worry. Instead of worrying, I find solutions and I act on them. "},{id:2,text:"2. My mind is constantly in tune with the positive. It is bright, cheerful, enthusiastic, and full of good, positive thoughts and ideas. "},{id:3,text:"3. I am able to relax easily and comfortably in my body and in my mind. I am calm, confident, and self-assured. "},{id:4,text:"4. My mind is orderly and well-organized. I consciously choose what I think and I always choose those thoughts which are the most positive and beneficial for me. "},{id:5,text:"5. All of my thoughts create healthiness within me. My mind dwells only on those thoughts which create more harmony, balance, and well-being within me and in the world around me. "},{id:6,text:"6. I automatically, and always, think in a decisive and determined way. "},{id:7,text:"7. I am full of resolution and the absolute assurance of the best possible outcome in everything that I do. "},{id:8,text:"8. I choose to look at the world around me in the bright, healthy light of optimism and self-assurance. "},{id:9,text:"9. I do only those things which are best for me. I create the best within myself, I attract the best in others, and I find the best in the world around me. "},{id:10,text:"10. I willingly, and without fail, take care of the duties and obligations which I have accepted for myself."},{id:11,text:"11. I commit only to those responsibilities which I know I can fulfill. "},{id:12,text:"12. I focus the attention of my mind only on those things that I can do something about. If I cannot affect it or direct it––I accept it. "},{id:13,text:"13. I keep my mind too busy thinking good, healthy, positive, constructive, and productive thoughts to ever have any time for worry. "},{id:14,text:"14. I control the thoughts I choose. No thought, at any time, can dwell in my mind without my approval or permission. I never worry."}]},{id:8,title:"Eating Habits",cards:[{id:1,text:"1. I am in control of myself in every way––at all times and in all situations. "},{id:2,text:"2. Each time I sit down to eat I reaffirm my determination to achieve my goal. By eating right, and never giving in, I am reaching the weight I want. "},{id:3,text:"3. Whether eating in or eating out, I really enjoy eating less. "},{id:4,text:"4. I never feel the need to finish the food in front of me. I eat only what I should––and never one bite more. "},{id:5,text:"5. One way to weight-loss that’s easy and works, is less food on my plate, and less on my fork. "},{id:6,text:'6. By ordering less when I eat out, and by serving myself smaller portions at home, I keep myself aware of the importance of staying with my goal––each and every day. “Less on my plate means less on my waist."'},{id:7,text:"7. When I sit down to eat, at no time do I allow anyone else to influence, tempt, or discourage me in any negative way."},{id:8,text:"8. What I eat, and the goals I reach, are up to me. And I give no one the right to hinder or control my success."},{id:9,text:"9. Although others may benefit from my success, I. am achieving my weight-loss goals for my own personal reasons––for myself, my life, my future, and my own personal well-being."},{id:10,text:"10. I am never, at any time, tempted to take one bite more than I should. I am strong, I am capable of reaching my goal, and I am doing it."},{id:11,text:"11. Being in situations which put a lot of food in front of me is not a problem to me now. I simply say “No” to the food and “Yes” to my success."},{id:12,text:"12. I enjoy sitting down to eat. Each time I do I conquer my past, and I create a trimmer, happier, more self-confident future in front of me. "},{id:13,text:"13. When I sit down to eat, I do not need someone else to remind me of my goal, or to keep me from eating something I should not. I take full responsibility for myself, and no one else has to do it for me. "},{id:14,text:"14. Controlling my weight, and my appetite, is easy for me now. I enjoy smaller portions, smaller bites, and a slower, healthier, more relaxed way of eating. "},{id:15,text:"15. I have set my goal and I am staying with it. I have turned mealtime into “achievement time.”"}]}],hg=["#3A7CA5","#4C9A6B","#C2773B","#8268B0","#C2536B","#C9A227","#3A7CA5","#4C9A6B"],fl=t=>hg[t%hg.length],By=t=>t+"1A",xp="anvil_affirmation_favs",Dy=()=>{try{return new Set(JSON.parse(localStorage.getItem(xp)||"[]"))}catch{return new Set}};function Ry(){const[t,e]=u.useState(0),[r,o]=u.useState(0),[i,s]=u.useState(Dy);u.useEffect(()=>{localStorage.setItem(xp,JSON.stringify([...i]))},[i]);const l=(z,f)=>`${z}#${f.id}`,a=t==="FAV"?ji.flatMap((z,f)=>z.cards.filter(g=>i.has(l(z.title,g))).map(g=>({...g,color:fl(f),title:z.title}))):ji[t].cards.map(z=>({...z,color:fl(t),title:ji[t].title})),d=a.length,c=Math.min(r,Math.max(0,d-1)),p=a[c],y=z=>{e(z),o(0)},h=u.useCallback(()=>o(z=>Math.max(0,z-1)),[]),w=u.useCallback(()=>o(z=>Math.min(d-1,z+1)),[d]);u.useEffect(()=>{const z=f=>{f.key==="ArrowLeft"&&h(),f.key==="ArrowRight"&&w()};return window.addEventListener("keydown",z),()=>window.removeEventListener("keydown",z)},[h,w]);const v=z=>s(f=>{const g=new Set(f);return g.has(z)?g.delete(z):g.add(z),g}),k=p?p.color:"#8268B0";return n.jsxs("div",{style:Ft.page,children:[n.jsxs("div",{style:Ft.head,children:[n.jsx("div",{style:Ft.eyebrow,children:"Anvil · Affirmations"}),n.jsx("h1",{style:Ft.h1,children:"Affirmations"}),n.jsx("div",{style:Ft.subhead,children:"One at a time — read it, mean it."})]}),n.jsxs("div",{style:Ft.filterBar,children:[ji.map((z,f)=>{const g=t===f,b=fl(f);return n.jsxs("button",{onClick:()=>y(f),style:{...Ft.chip,...g?{background:b,color:"#fff",borderColor:b}:{}},children:[n.jsx("span",{style:{...Ft.catDot,background:g?"#fff":b}})," ",z.title," ",n.jsx("span",{style:Ft.chipCount,children:z.cards.length})]},z.title)}),n.jsxs("button",{onClick:()=>y("FAV"),style:{...Ft.chip,...t==="FAV"?{background:"#C9A227",color:"#fff",borderColor:"#C9A227"}:{}},children:[n.jsx(Ni,{size:12,fill:t==="FAV"?"#fff":"none"})," Favorites ",n.jsx("span",{style:Ft.chipCount,children:i.size})]})]}),d===0?n.jsxs("div",{style:Ft.empty,children:[n.jsx(Ni,{size:22,color:"#C3BFB5"}),n.jsx("div",{children:"No favorites yet — tap the star on a card to save it here."})]}):n.jsxs("div",{style:Ft.viewer,children:[n.jsxs("div",{style:{...Ft.card,borderTop:`4px solid ${k}`},children:[n.jsx("div",{style:{...Ft.cardCat,color:k,background:By(k)},children:p.title}),n.jsx("button",{onClick:()=>v(l(p.title,p)),style:{...Ft.favBtn,color:i.has(l(p.title,p))?"#C9A227":"#C3BFB5"},title:"Favorite",children:n.jsx(Ni,{size:20,fill:i.has(l(p.title,p))?"#C9A227":"none"})}),n.jsx(dp,{size:30,color:k,style:{opacity:.25}}),n.jsx("p",{style:Ft.cardText,children:p.text.trim()})]}),n.jsxs("div",{style:Ft.navRow,children:[n.jsxs("button",{onClick:h,disabled:c===0,style:{...Ft.navBtn,...c===0?Ft.navBtnDisabled:{}},children:[n.jsx(qn,{size:18})," Back"]}),n.jsxs("span",{style:{...Ft.counter,color:k},children:[c+1," ",n.jsxs("span",{style:Ft.counterTotal,children:["/ ",d]})]}),n.jsxs("button",{onClick:w,disabled:c===d-1,style:{...Ft.navBtn,...c===d-1?Ft.navBtnDisabled:{}},children:["Next ",n.jsx(dn,{size:18})]})]}),n.jsx("div",{style:Ft.dots,children:a.map((z,f)=>n.jsx("button",{onClick:()=>o(f),style:{...Ft.dot,...f===c?{background:k,transform:"scale(1.5)"}:{}},title:`${f+1}`},f))})]})]})}const Ft={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},filterBar:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:22},chip:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipCount:{fontSize:11,fontWeight:700,opacity:.7},catDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},empty:{display:"flex",flexDirection:"column",alignItems:"center",gap:10,fontSize:13.5,color:"var(--text-3)",padding:"56px 12px",textAlign:"center",background:"var(--surface)",borderRadius:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},viewer:{display:"flex",flexDirection:"column",alignItems:"center"},card:{position:"relative",background:"var(--surface)",borderRadius:16,padding:"40px 32px 44px",boxShadow:"0 4px 20px rgba(0,0,0,0.07)",width:"100%",minHeight:240,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",boxSizing:"border-box"},cardCat:{position:"absolute",top:16,left:16,fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:12,textTransform:"uppercase",letterSpacing:"0.04em"},favBtn:{position:"absolute",top:14,right:14,border:"none",background:"none",cursor:"pointer",padding:4,display:"grid",placeItems:"center"},cardText:{fontSize:21,lineHeight:1.55,margin:"14px 0 0",fontWeight:500,color:"var(--text)",fontFamily:"'Fraunces',Georgia,serif",maxWidth:560},navRow:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",maxWidth:420,marginTop:22},navBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},counter:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},counterTotal:{fontSize:13,fontWeight:600,color:"var(--text-3)"},dots:{display:"flex",gap:6,flexWrap:"wrap",justifyContent:"center",marginTop:20,maxWidth:480},dot:{width:7,height:7,borderRadius:"50%",border:"none",background:"var(--border)",cursor:"pointer",padding:0,transition:"transform 0.12s"}},je={financial:{label:"Financial",leaf:"#C9A227",shape:"round"},academic:{label:"Academic",leaf:"#3A7CA5",shape:"pine"},relationship:{label:"Relationship",leaf:"#C2536B",shape:"round"},spiritual:{label:"Spiritual",leaf:"#8268B0",shape:"tall"},health:{label:"Health",leaf:"#4C9A6B",shape:"round"}},Vn="health";function Rd({species:t=Vn,progress:e=1,withered:r=!1,size:o=200}){const i=Math.max(0,Math.min(1,e)),s=je[t]||je[Vn],l=r?"#8A7B63":"#7A5A3C",a=r?"#A99C84":s.leaf,d=r?"#8F8268":a,c=14+i*46,p=112-c,y=i>.14,h=y?8+i*30:0;return n.jsxs("svg",{viewBox:"0 0 120 120",width:o,height:o,style:{display:"block"},children:[n.jsx("ellipse",{cx:"60",cy:"114",rx:20+i*14,ry:"5",fill:"rgba(38,36,31,0.08)"}),!y&&n.jsxs("g",{transform:`translate(60 ${112-i*40})`,children:[n.jsx("path",{d:"M0 8 C0 8 0 -2 0 -6",stroke:"#4C9A6B",strokeWidth:"2.5",fill:"none"}),n.jsx("ellipse",{cx:"-5",cy:"-4",rx:"6",ry:"3.5",fill:"#4C9A6B",transform:"rotate(-30 -5 -4)"}),n.jsx("ellipse",{cx:"5",cy:"-4",rx:"6",ry:"3.5",fill:"#5BB07E",transform:"rotate(30 5 -4)"})]}),y&&n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:60-(2+i*2.5),y:p,width:(2+i*2.5)*2,height:c,rx:"2",fill:l}),s.shape==="pine"?n.jsxs(n.Fragment,{children:[n.jsx("polygon",{points:`60,${p-h*2.2} ${60-h},${p+4} ${60+h},${p+4}`,fill:a}),n.jsx("polygon",{points:`60,${p-h*3} ${60-h*.8},${p-h*.7} ${60+h*.8},${p-h*.7}`,fill:d})]}):s.shape==="tall"?n.jsxs(n.Fragment,{children:[n.jsx("ellipse",{cx:"60",cy:p-h*.3,rx:h*.78,ry:h*1.55,fill:a}),n.jsx("ellipse",{cx:"60",cy:p-h*.9,rx:h*.5,ry:h*1,fill:d,opacity:"0.9"})]}):n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"60",cy:p,r:h,fill:a}),n.jsx("circle",{cx:60-h*.7,cy:p+h*.3,r:h*.78,fill:a}),n.jsx("circle",{cx:60+h*.7,cy:p+h*.3,r:h*.78,fill:d}),n.jsx("circle",{cx:"60",cy:p-h*.5,r:h*.8,fill:d,opacity:"0.92"})]})]})]})}function Fy({species:t}){return n.jsx(Rd,{species:t,progress:1,size:56})}const Ay=[{id:"day",label:"Day"},{id:"week",label:"Week"},{id:"month",label:"Month"},{id:"year",label:"Year"}],dr=t=>t>=60?`${Math.floor(t/60)}h ${t%60}m`:`${t}m`,My=t=>{const e=t<12?"am":"pm",r=t%12===0?12:t%12;return`${String(r).padStart(2,"0")} ${e}`};function Wy(t){const e=t<=60?10:t<=120?20:t<=300?60:120,r=Math.max(60,Math.ceil((t||1)/e)*e),o=[];for(let i=0;i<=r;i+=e)o.push(i);return{max:r,ticks:o}}const kp=t=>{const e=new Date(t);return e.setHours(0,0,0,0),e},_y=t=>{const e=kp(t),r=(e.getDay()+6)%7;return e.setDate(e.getDate()-r),e},Ly=t=>new Date(t.getFullYear(),t.getMonth(),1),Py=t=>new Date(t.getFullYear(),0,1);function $y(t,e){if(t==="day"){const i=kp(e);return{start:i,end:new Date(+i+864e5),prev:new Date(+i-864e5),prev2:new Date(+i-2*864e5)}}if(t==="week"){const i=_y(e);return{start:i,end:new Date(+i+7*864e5),prev:new Date(+i-7*864e5),prev2:new Date(+i-14*864e5)}}if(t==="month"){const i=Ly(e),s=e.getFullYear(),l=e.getMonth();return{start:i,end:new Date(s,l+1,1),prev:new Date(s,l-1,1),prev2:new Date(s,l-2,1)}}const r=e.getFullYear();return{start:Py(e),end:new Date(r+1,0,1),prev:new Date(r-1,0,1),prev2:new Date(r-2,0,1)}}function Oy({sessions:t=[],onBack:e}){const[r,o]=u.useState("day"),i=new Date,{start:s,end:l,prev:a,prev2:d}=$y(r,i),c=et=>new Date(et.started_at||et.created_at),p=t.filter(et=>et.completed),y=(et,D,A)=>{const M=c(et);return M>=D&&M<A},h=(et,D)=>p.filter(A=>y(A,et,D)).reduce((A,M)=>A+(M.actual_min||0),0),w=p.filter(et=>y(et,s,l)),v=w.reduce((et,D)=>et+(D.actual_min||0),0),k=h(a,s),z=h(d,a),f=w.length,g=Array(24).fill(0);w.forEach(et=>{g[c(et).getHours()]+=et.actual_min||0});const b=Math.max(...g,0),C=Wy(b),S={};w.forEach(et=>{const D=je[et.tree]?et.tree:Vn;S[D]=(S[D]||0)+(et.actual_min||0)});const B=Object.entries(S).map(([et,D])=>({name:je[et].label,min:D,color:je[et].leaf})).sort((et,D)=>D.min-et.min),O=k>0?Math.round((v-k)/k*100):v>0?100:0,Y=O>0?bp:O<0?up:Ch,F=O>0?"#4C9A6B":O<0?"#C2536B":"#9A968C",N={day:"yesterday",week:"last week",month:"last month",year:"last year"}[r],j={day:"2 days ago",week:"2 weeks ago",month:"2 months ago",year:"2 years ago"}[r],T=54,x=22,U=2*Math.PI*T;let bt=0;return n.jsxs("div",{style:ft.page,children:[n.jsxs("div",{style:ft.topbar,children:[n.jsxs("button",{onClick:e,style:ft.back,children:[n.jsx(Zb,{size:18})," Grove"]}),n.jsx("h1",{style:ft.h1,children:"Insights"}),n.jsx("div",{style:{width:76}})]}),n.jsx("div",{style:ft.rangeBar,children:Ay.map(et=>n.jsx("button",{onClick:()=>o(et.id),style:{...ft.rangeBtn,...r===et.id?ft.rangeOn:{}},children:et.label},et.id))}),n.jsxs("div",{style:ft.headline,children:[n.jsxs("div",{style:ft.bigStat,children:[n.jsx("div",{style:ft.bigVal,children:dr(v)}),n.jsxs("div",{style:ft.bigLbl,children:["Focused this ",r]})]}),n.jsxs("div",{style:ft.bigStat,children:[n.jsx("div",{style:ft.bigVal,children:f}),n.jsx("div",{style:ft.bigLbl,children:"Trees"})]})]}),n.jsxs("div",{style:ft.card,children:[n.jsxs("div",{style:ft.cardHead,children:[n.jsxs("div",{style:ft.cardTitle,children:["Your forest this ",r]}),n.jsx("div",{style:ft.cardHint,children:"Each tree is a completed session — bigger means longer focus"})]}),n.jsx(Gy,{sessions:w}),n.jsxs("div",{style:ft.forestNumber,children:[f," ",f===1?"tree":"trees"," · ",dr(v)," focused"]})]}),n.jsx(hl,{title:"Focus distribution",hint:"Minutes focused at each time of day",children:b===0?n.jsx(yg,{}):n.jsx(Hy,{hours:g,axis:C})}),n.jsx(hl,{title:"Pillar distribution",hint:"How your focus splits across the five trees",children:B.length===0?n.jsx(yg,{}):n.jsxs("div",{style:ft.donutWrap,children:[n.jsxs("svg",{viewBox:"0 0 140 140",width:"150",height:"150",style:{flexShrink:0},children:[B.map(et=>{const D=et.min/(v||1)*U,A=n.jsx("circle",{cx:"70",cy:"70",r:T,fill:"none",stroke:et.color,strokeWidth:x,strokeDasharray:`${D} ${U-D}`,strokeDashoffset:-bt,transform:"rotate(-90 70 70)"},et.name);return bt+=D,A}),n.jsx("text",{x:"70",y:"66",textAnchor:"middle",style:ft.donutCenterTop,children:dr(v)}),n.jsx("text",{x:"70",y:"82",textAnchor:"middle",style:ft.donutCenterSub,children:"total"})]}),n.jsx("div",{style:ft.legend,children:B.map(et=>n.jsxs("div",{style:ft.legendRow,children:[n.jsx("span",{style:{...ft.legendDot,background:et.color}}),n.jsx("span",{style:ft.legendName,children:et.name}),n.jsxs("span",{style:ft.legendVal,children:[dr(et.min)," · ",Math.round(et.min/(v||1)*100),"%"]})]},et.name))})]})}),n.jsxs(hl,{title:"Focus trend",hint:`This ${r} vs the previous two`,children:[n.jsxs("div",{style:ft.trend3,children:[n.jsxs("div",{style:ft.trendCol,children:[n.jsx("div",{style:ft.trendVal,children:dr(v)}),n.jsxs("div",{style:ft.trendLbl,children:["This ",r]})]}),n.jsxs("div",{style:ft.trendCol,children:[n.jsx("div",{style:{...ft.trendVal,color:"var(--text-2)"},children:dr(k)}),n.jsx("div",{style:ft.trendLbl,children:N})]}),n.jsxs("div",{style:ft.trendCol,children:[n.jsx("div",{style:{...ft.trendVal,color:"var(--text-3)"},children:dr(z)}),n.jsx("div",{style:ft.trendLbl,children:j})]})]}),n.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:14},children:n.jsxs("div",{style:{...ft.trendBadge,color:F,background:F+"1A"},children:[n.jsx(Y,{size:15})," ",O>0?"+":"",O,"% vs ",N]})}),n.jsx(Uy,{items:[{label:`This ${r}`,value:v,color:"#4C9A6B"},{label:N,value:k,color:"var(--text-3)"},{label:j,value:z,color:"var(--text-3)"}]})]})]})}const Ny=t=>t===0?"12a":t<12?`${t}a`:t===12?"12p":`${t-12}p`;function Hy({hours:t,axis:e}){return n.jsxs("div",{children:[n.jsxs("div",{style:ft.vcPlot,children:[e.ticks.map(r=>n.jsxs("div",{style:{...ft.vcGridRow,bottom:`${r/e.max*100}%`},children:[n.jsx("span",{style:ft.vcYLabel,children:r}),n.jsx("div",{style:ft.vcGridLine})]},r)),n.jsx("div",{style:ft.vcBars,children:t.map((r,o)=>n.jsx("div",{style:ft.vcCell,title:`${My(o)} · ${r} min`,children:n.jsx("div",{style:{...ft.vcBar,height:r>0?`max(3px, ${r/e.max*100}%)`:0}})},o))})]}),n.jsx("div",{style:ft.vcXAxis,children:t.map((r,o)=>n.jsx("div",{style:ft.vcXCell,children:o%3===0?Ny(o):""},o))}),n.jsx("div",{style:ft.vcYTitle,children:"minutes focused, by hour of day"})]})}function Gy({sessions:t}){if(!t.length)return n.jsx("div",{style:ft.sceneEmpty,children:"No trees yet this period. 🌱"});const r=t.slice(0,80),o=t.length-r.length,i=s=>Math.round(Math.max(40,Math.min(88,40+(s||0)*.6)));return n.jsxs("div",{children:[n.jsx("div",{style:ft.scene,children:r.map(s=>n.jsx("div",{style:ft.sceneTree,title:`${s.label||"Focus"} · ${dr(s.actual_min||s.duration_min)}`,children:n.jsx(Rd,{species:s.tree,progress:1,size:i(s.actual_min||s.duration_min)})},s.id))}),o>0&&n.jsxs("div",{style:ft.overflow,children:["+",o," more trees"]})]})}function hl({title:t,hint:e,children:r}){return n.jsxs("div",{style:ft.card,children:[n.jsxs("div",{style:ft.cardHead,children:[n.jsx("div",{style:ft.cardTitle,children:t}),e&&n.jsx("div",{style:ft.cardHint,children:e})]}),r]})}function yg(){return n.jsx("div",{style:ft.empty,children:"No focus sessions in this period yet. 🌱"})}function Uy({items:t}){const e=Math.max(1,...t.map(r=>r.value));return n.jsx("div",{style:ft.tbWrap,children:t.map(r=>n.jsxs("div",{style:ft.tbRow,children:[n.jsx("div",{style:ft.tbLbl,children:r.label}),n.jsx("div",{style:ft.tbTrack,children:n.jsx("div",{style:{...ft.tbBar,width:`${r.value/e*100}%`,background:r.color}})}),n.jsx("div",{style:ft.tbVal,children:dr(r.value)})]},r.label))})}const ft={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"20px 16px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:720,margin:"0 auto"},topbar:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16},back:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},h1:{fontSize:20,fontWeight:700,margin:0,fontFamily:"'Fraunces',Georgia,serif"},rangeBar:{display:"flex",gap:6,background:"var(--surface)",padding:5,borderRadius:12,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},rangeBtn:{flex:1,border:"none",background:"none",padding:"9px 0",borderRadius:8,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},rangeOn:{background:"var(--accent-strong)",color:"#fff"},headline:{display:"flex",gap:12,marginBottom:16},bigStat:{flex:1,background:"var(--surface)",borderRadius:14,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},bigVal:{fontSize:26,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em"},bigLbl:{fontSize:12,color:"var(--text-3)",marginTop:3,fontWeight:500},card:{background:"var(--surface)",borderRadius:16,padding:"18px 18px 20px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:16},cardHead:{marginBottom:14},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardHint:{fontSize:12,color:"var(--text-3)",marginTop:2},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"24px 0"},scene:{display:"flex",flexWrap:"wrap",alignItems:"flex-end",justifyContent:"center",gap:"0 2px",padding:"14px 8px 6px",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,minHeight:110,border:"1px solid var(--border)"},sceneTree:{lineHeight:0},sceneEmpty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"34px 0",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,border:"1px solid var(--border)"},overflow:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",marginTop:6,fontWeight:600},forestNumber:{textAlign:"center",marginTop:12,fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},vcPlot:{position:"relative",height:180,paddingLeft:30},vcGridRow:{position:"absolute",left:0,right:0,display:"flex",alignItems:"center",height:0},vcYLabel:{width:26,marginRight:4,textAlign:"right",fontSize:9,color:"var(--text-3)",fontWeight:600,flexShrink:0},vcGridLine:{flex:1,height:1,background:"#EEEBE4"},vcBars:{position:"absolute",left:30,right:0,top:0,bottom:0,display:"flex",alignItems:"flex-end",gap:1},vcCell:{flex:1,height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"center"},vcBar:{width:"72%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",transition:"height 0.3s"},vcXAxis:{display:"flex",marginLeft:30,marginTop:4},vcXCell:{flex:1,textAlign:"center",fontSize:8.5,color:"var(--text-3)",fontWeight:600,overflow:"hidden"},vcYTitle:{textAlign:"center",fontSize:9.5,color:"var(--text-3)",marginTop:6,letterSpacing:"0.06em",textTransform:"uppercase",fontWeight:600},donutWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap",justifyContent:"center"},donutCenterTop:{fontSize:16,fontWeight:800,fill:"var(--text)",fontFamily:"'Fraunces',Georgia,serif"},donutCenterSub:{fontSize:9,fill:"#9A968C",textTransform:"uppercase",letterSpacing:"0.08em"},legend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8},legendDot:{width:11,height:11,borderRadius:3,flexShrink:0},legendName:{flex:1,fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},legendVal:{fontSize:12,color:"var(--text-3)",fontWeight:600,flexShrink:0},trend3:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12,gap:8},trendCol:{textAlign:"center",flex:1},trendVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},trendLbl:{fontSize:11,color:"var(--text-3)",marginTop:2},trendBadge:{display:"inline-flex",alignItems:"center",gap:4,fontSize:13,fontWeight:800,padding:"6px 12px",borderRadius:20,width:"fit-content"},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:78,fontSize:11,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},tbTrack:{flex:1,height:14,background:"#F2F0EA",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:56,fontSize:11,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"}},Vy=[15,30,45,60,90],yl="anvil_grove_active",vg=t=>`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`,ms=t=>t>=60?`${Math.floor(t/60)}h ${t%60}m`:`${t}m`;function Yy(){const[t,e]=u.useState("timer"),[r,o]=u.useState("idle"),[i,s]=u.useState(15),[l,a]=u.useState(!1),[d,c]=u.useState(""),[p,y]=u.useState(Vn),[h,w]=u.useState(()=>localStorage.getItem("anvil_grove_deepfocus")!=="0"),[v,k]=u.useState(15*60),[z,f]=u.useState({sessions:[],stats:null}),g=u.useRef(null),b=u.useRef(null),C=u.useRef(!1),S=u.useCallback(async()=>{try{f(await H.getFocus())}catch{}},[]),B=u.useCallback(async(W,R)=>{if(!C.current){C.current=!0,localStorage.removeItem(yl);try{await H.createFocus({label:d.trim()||null,tree:p,duration_min:i,actual_min:R,completed:W,started_at:b.current,ended_at:new Date().toISOString()})}catch{}S()}},[d,p,i,S]),O=u.useCallback(()=>{if(r!=="running")return;const W=b.current?Math.round((Date.now()-new Date(b.current).getTime())/6e4):0;o("failed"),B(!1,Math.max(0,Math.min(i,W)))},[r,i,B]),Y=u.useCallback(()=>{o("done"),k(0),B(!0,i)},[i,B]);u.useEffect(()=>{S();const W=JSON.parse(localStorage.getItem(yl)||"null");if(W&&W.endTime){const R=Math.round((W.endTime-Date.now())/1e3);s(W.duration),c(W.label||""),y(W.tree||"oak"),g.current=W.endTime,b.current=W.startedAt,R>0?(k(R),o("running")):(o("done"),C.current=!1,B(!0,W.duration))}},[]),u.useEffect(()=>{if(r!=="running")return;const W=()=>{const m=Math.round((g.current-Date.now())/1e3);if(m<=0){Y();return}k(m)};W();const R=setInterval(W,250);return()=>clearInterval(R)},[r,Y]),u.useEffect(()=>{if(r!=="running"||!h)return;const W=()=>{document.hidden&&O()};return document.addEventListener("visibilitychange",W),()=>document.removeEventListener("visibilitychange",W)},[r,h,O]),u.useEffect(()=>{const W=()=>{!document.hidden&&r!=="running"&&S()};window.addEventListener("focus",W),document.addEventListener("visibilitychange",W);const R=setInterval(W,6e4);return()=>{window.removeEventListener("focus",W),document.removeEventListener("visibilitychange",W),clearInterval(R)}},[S,r]);const F=()=>w(W=>{const R=!W;return localStorage.setItem("anvil_grove_deepfocus",R?"1":"0"),R}),N=()=>{C.current=!1,b.current=new Date().toISOString(),g.current=Date.now()+i*60*1e3,localStorage.setItem(yl,JSON.stringify({endTime:g.current,duration:i,label:d,tree:p,startedAt:b.current})),k(i*60),o("running")},j=()=>{o("idle"),k(i*60)},T=W=>{a(!1),s(W),k(W*60)},x=()=>{l||(a(!0),s(5),k(5*60))},U=W=>{if(a(!0),W===""){s(0),k(0);return}const R=Math.max(1,Math.min(600,parseInt(W,10)||0));s(R),k(R*60)},bt=i*60,et=r==="running"?1-v/bt:r==="done"?1:0,D=130,A=2*Math.PI*D,M=A*(1-(r==="running"?et:r==="done"?1:0)),V=z.stats;return t==="stats"?n.jsx(Oy,{sessions:z.sessions,onBack:()=>e("timer")}):n.jsxs("div",{style:yt.page,children:[n.jsxs("div",{style:yt.head,children:[n.jsx("div",{style:yt.eyebrow,children:"Anvil · Grove"}),n.jsx("h1",{style:yt.h1,children:"Grove"}),n.jsx("div",{style:yt.subhead,children:"Plant a tree, stay focused, grow your grove."}),n.jsxs("button",{onClick:()=>e("stats"),style:yt.insightsBtn,disabled:r==="running",children:[n.jsx(uh,{size:15})," Insights"]})]}),V&&n.jsxs("div",{style:yt.statRow,children:[n.jsx(Si,{label:"Today",value:ms(V.today_minutes)}),n.jsx(Si,{label:"Trees",value:V.trees}),n.jsx(Si,{label:"Streak",value:`${V.streak}d`}),n.jsx(Si,{label:"Success",value:`${V.success_rate}%`})]}),n.jsxs("div",{style:yt.stage,children:[n.jsxs("div",{style:yt.ringWrap,children:[n.jsxs("svg",{width:"300",height:"300",viewBox:"0 0 300 300",style:{position:"absolute",inset:0},children:[n.jsx("circle",{cx:"150",cy:"150",r:D,fill:"none",stroke:"var(--border)",strokeWidth:"10"}),n.jsx("circle",{cx:"150",cy:"150",r:D,fill:"none",stroke:r==="failed"?"#C2536B":"#4C9A6B",strokeWidth:"10",strokeLinecap:"round",strokeDasharray:A,strokeDashoffset:M,transform:"rotate(-90 150 150)",style:{transition:"stroke-dashoffset 0.4s linear"}})]}),n.jsx("div",{style:yt.ringInner,children:n.jsx(Rd,{species:p,progress:r==="idle"?0:et,withered:r==="failed",size:170})})]}),r==="idle"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{style:yt.timeBig,children:vg(i*60)}),n.jsxs("div",{style:yt.controls,children:[n.jsxs("div",{style:yt.chips,children:[Vy.map(W=>n.jsxs("button",{onClick:()=>T(W),style:{...yt.chip,...!l&&i===W?yt.chipOn:{}},children:[W,"m"]},W)),n.jsx("button",{onClick:x,style:{...yt.chip,...l?yt.chipOn:{}},children:"Custom"})]}),l&&n.jsxs("div",{style:yt.customRow,children:[n.jsx("input",{type:"number",min:"1",max:"600",inputMode:"numeric",autoFocus:!0,value:i||"",onChange:W=>U(W.target.value),placeholder:"e.g. 50",style:yt.customInput}),n.jsx("span",{style:yt.customUnit,children:"minutes"})]}),n.jsx("input",{value:d,onChange:W=>c(W.target.value),placeholder:"What are you focusing on? (optional)",style:yt.input,maxLength:60}),n.jsx("div",{style:yt.treePick,children:Object.entries(je).map(([W,R])=>n.jsxs("button",{onClick:()=>y(W),title:R.label,style:{...yt.treeBtn,...p===W?{borderColor:R.leaf,background:R.leaf+"1A"}:{}},children:[n.jsx("span",{style:{...yt.treeDot,background:R.leaf}}),R.label]},W))}),n.jsxs("button",{onClick:F,style:yt.toggleRow,children:[n.jsxs("div",{style:{textAlign:"left"},children:[n.jsx("div",{style:yt.toggleTitle,children:"Deep Focus"}),n.jsx("div",{style:yt.toggleHint,children:h?"Leaving the app kills the tree":"Tree survives until you give up"})]}),n.jsx("div",{style:{...yt.switch,...h?yt.switchOn:{}},children:n.jsx("div",{style:{...yt.knob,...h?yt.knobOn:{}}})})]}),n.jsx("button",{onClick:N,disabled:i<1,style:{...yt.plantBtn,...i<1?{opacity:.5,cursor:"not-allowed"}:{}},children:"Plant tree"})]})]}),r==="running"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{style:yt.timeBig,children:vg(v)}),n.jsx("div",{style:yt.focusLabel,children:d.trim()||"Focusing…"}),n.jsx("div",{style:h?yt.warn:yt.warnSoft,children:h?"⚠ Deep Focus on — leaving this app will kill your tree.":"🌿 Relaxed mode — only Give up ends this session."}),n.jsx("button",{onClick:O,style:yt.giveUp,children:"Give up"})]}),r==="done"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:yt.resultTitle,children:["🌳 You grew a ",je[p].label," tree!"]}),n.jsxs("div",{style:yt.resultSub,children:[ms(i)," of focus added to your grove."]}),n.jsx("button",{onClick:j,style:yt.plantBtn,children:"Plant another"})]}),r==="failed"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{...yt.resultTitle,color:"#C2536B"},children:"Your tree withered."}),n.jsx("div",{style:yt.resultSub,children:"You left before the timer finished. Try again?"}),n.jsx("button",{onClick:j,style:yt.plantBtn,children:"Try again"})]})]}),n.jsx(Qy,{sessions:z.sessions,onDelete:async W=>{await H.deleteFocus(W),S()}})]})}function Si({label:t,value:e}){return n.jsxs("div",{style:yt.stat,children:[n.jsx("div",{style:yt.statValue,children:e}),n.jsx("div",{style:yt.statLabel,children:t})]})}function Qy({sessions:t,onDelete:e}){const r=t.filter(l=>l.completed);if(r.length===0)return n.jsx("div",{style:yt.forestEmpty,children:"Your grove is empty. Plant your first tree above. 🌱"});const o={};for(const l of r){const a=(l.started_at||l.created_at||"").slice(0,10);(o[a]||(o[a]=[])).push(l)}const i=Object.keys(o).sort().reverse(),s=l=>{const a=new Date().toISOString().slice(0,10);return l===a?"Today":new Date(l+"T00:00").toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})};return n.jsxs("div",{style:yt.forest,children:[n.jsxs("div",{style:yt.forestHead,children:["Your Grove · ",r.length," trees"]}),i.map(l=>n.jsxs("div",{style:yt.daySection,children:[n.jsxs("div",{style:yt.dayLabel,children:[s(l)," · ",o[l].length]}),n.jsx("div",{style:yt.treeGrid,children:o[l].map(a=>n.jsxs("div",{style:yt.treeCard,title:`${a.label||"Focus"} · ${ms(a.actual_min)}`,onDoubleClick:()=>e(a.id),children:[n.jsx(Fy,{species:a.tree}),n.jsx("div",{style:yt.treeCardMin,children:ms(a.actual_min||a.duration_min)}),a.label&&n.jsx("div",{style:yt.treeCardLabel,children:a.label})]},a.id))})]},l)),n.jsx("div",{style:yt.forestHint,children:"Double-tap a tree to remove it."})]})}const yt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:820,margin:"0 auto"},head:{marginBottom:16,textAlign:"center"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},insightsBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginTop:12},statRow:{display:"flex",gap:10,justifyContent:"center",marginBottom:18,flexWrap:"wrap"},stat:{background:"var(--surface)",borderRadius:12,padding:"10px 18px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",minWidth:78},statValue:{fontSize:19,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},statLabel:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},stage:{background:"var(--surface)",borderRadius:18,padding:"28px 24px 32px",boxShadow:"0 2px 12px rgba(0,0,0,0.06)",display:"flex",flexDirection:"column",alignItems:"center",marginBottom:26},ringWrap:{position:"relative",width:300,height:300,display:"grid",placeItems:"center"},ringInner:{position:"relative",zIndex:1,display:"grid",placeItems:"center"},timeBig:{fontSize:40,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:6},focusLabel:{fontSize:14,color:"var(--text-2)",marginTop:2,fontWeight:500},warn:{fontSize:12,color:"#C2773B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},warnSoft:{fontSize:12,color:"#4C9A6B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},toggleRow:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,border:"1px solid var(--border)",background:"var(--surface)",borderRadius:12,padding:"10px 14px",cursor:"pointer",fontFamily:"inherit",width:"100%"},toggleTitle:{fontSize:14,fontWeight:700,color:"var(--text)"},toggleHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},switch:{width:42,height:24,borderRadius:12,background:"var(--border)",flexShrink:0,padding:2,transition:"background 0.18s",boxSizing:"border-box"},switchOn:{background:"#4C9A6B"},knob:{width:20,height:20,borderRadius:"50%",background:"var(--surface)",boxShadow:"0 1px 2px rgba(0,0,0,0.2)",transform:"translateX(0)",transition:"transform 0.18s"},knobOn:{transform:"translateX(18px)"},controls:{width:"100%",maxWidth:380,display:"flex",flexDirection:"column",gap:14,marginTop:8},chips:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},chip:{border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 16px",borderRadius:20,fontSize:13.5,fontWeight:700,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipOn:{background:"#4C9A6B",color:"#fff",borderColor:"#4C9A6B"},customRow:{display:"flex",alignItems:"center",justifyContent:"center",gap:8},customInput:{border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",fontSize:15,fontWeight:700,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center",width:100},customUnit:{fontSize:13,color:"var(--text-3)",fontWeight:600},input:{border:"1px solid var(--border)",borderRadius:10,padding:"11px 13px",fontSize:14,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center"},treePick:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},treeBtn:{display:"flex",alignItems:"center",gap:6,border:"1.5px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},treeDot:{width:10,height:10,borderRadius:"50%"},plantBtn:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:4},giveUp:{border:"1px solid var(--border)",background:"var(--surface)",color:"#C2536B",padding:"11px 26px",borderRadius:11,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:18},resultTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginTop:14,textAlign:"center"},resultSub:{fontSize:13.5,color:"var(--text-3)",marginTop:6,marginBottom:18,textAlign:"center"},forest:{background:"var(--surface)",borderRadius:16,padding:"20px 22px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},forestHead:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:14},forestEmpty:{background:"var(--surface)",borderRadius:16,padding:"40px 20px",textAlign:"center",color:"var(--text-3)",fontSize:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},daySection:{marginBottom:16},dayLabel:{fontSize:12,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.04em",marginBottom:8},treeGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(80px,1fr))",gap:8},treeCard:{display:"flex",flexDirection:"column",alignItems:"center",padding:"8px 4px",borderRadius:10,cursor:"pointer",background:"var(--surface-2)"},treeCardMin:{fontSize:12,fontWeight:700,color:"#4C9A6B",marginTop:-4},treeCardLabel:{fontSize:10.5,color:"var(--text-3)",marginTop:2,textAlign:"center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:76},forestHint:{fontSize:11,color:"var(--text-3)",textAlign:"center",marginTop:6}},Ta=[{code:"INR",symbol:"₹",locale:"en-IN",label:"Indian Rupee"},{code:"USD",symbol:"$",locale:"en-US",label:"US Dollar"},{code:"EUR",symbol:"€",locale:"de-DE",label:"Euro"},{code:"GBP",symbol:"£",locale:"en-GB",label:"British Pound"},{code:"JPY",symbol:"¥",locale:"ja-JP",label:"Japanese Yen"},{code:"AED",symbol:"د.إ",locale:"en-AE",label:"UAE Dirham"},{code:"AUD",symbol:"A$",locale:"en-AU",label:"Australian Dollar"},{code:"CAD",symbol:"C$",locale:"en-CA",label:"Canadian Dollar"},{code:"SGD",symbol:"S$",locale:"en-SG",label:"Singapore Dollar"}],xg="INR",wp="anvil_currency",Ms=t=>Ta.find(e=>e.code===t)||Ta[0];function Yn(){try{return localStorage.getItem(wp)||xg}catch{return xg}}function kg(t){try{localStorage.setItem(wp,t)}catch{}return window.dispatchEvent(new CustomEvent("anvil-currency",{detail:t})),t}function Ea(t,e){const r=Ms(e||Yn()),o=Math.round(Number(t)||0);return r.symbol+o.toLocaleString(r.locale)}function Ky(t,e){const r=Ms(e||Yn()),o=Number(t)||0;return r.symbol+o.toLocaleString(r.locale,{minimumFractionDigits:2,maximumFractionDigits:2})}function Xy(t,e){const r=Ms(e||Yn()),o=Math.round(Number(t)||0),i=Math.abs(o);return r.code==="INR"?i>=1e7?r.symbol+(o/1e7).toFixed(i>=1e8?0:1)+"Cr":i>=1e5?r.symbol+(o/1e5).toFixed(i>=1e6?0:1)+"L":i>=1e3?r.symbol+(o/1e3).toFixed(i>=1e4?0:1)+"K":r.symbol+o:i>=1e9?r.symbol+(o/1e9).toFixed(1)+"B":i>=1e6?r.symbol+(o/1e6).toFixed(1)+"M":i>=1e3?r.symbol+(o/1e3).toFixed(1)+"K":r.symbol+o}function jp(){const[t,e]=u.useState(Yn());return u.useEffect(()=>{const r=o=>e(o.detail||Yn());return window.addEventListener("anvil-currency",r),()=>window.removeEventListener("anvil-currency",r)},[]),Ms(t)}const qy="grove_rates",Jy="reward_rates",Ci=Object.keys(je),wg=[{id:"kickstart",label:"Kickstart"},{id:"golden",label:"Golden Book"},{id:"habits",label:"Habits"},{id:"quadrant",label:"Quadrant"},{id:"goals",label:"Goals"},{id:"grove",label:"Grove"},{id:"journal",label:"Journal"},{id:"revision",label:"Revision"},{id:"affirmations",label:"Affirmations"},{id:"skills",label:"Skills"},{id:"spiritual",label:"Spiritual"},{id:"mindscape",label:"Mindscape"},{id:"vault",label:"Vault"}],Ii="#C9A227",vl="#3A7CA5",Zy=t=>{const e=Math.floor(t/60),r=Math.round(t%60);return e&&r?`${e}h ${r}m`:e?`${e}h`:`${r}m`},t0=t=>{let e=Math.round((t||0)*60);const r=Math.floor(e/3600);e%=3600;const o=Math.floor(e/60);return e%=60,[r?`${r}h`:null,r||o?`${o}m`:null,`${e}s`].filter(Boolean).join(" ")},e0=()=>{const t=new Date,e=r=>String(r).padStart(2,"0");return`${t.getFullYear()}-${e(t.getMonth()+1)}-${e(t.getDate())}T${e(t.getHours())}:${e(t.getMinutes())}`},r0=t=>{if(!t)return"";const e=new Date(t.includes("T")?t:t+"T00:00:00");return isNaN(e)?t:e.toLocaleDateString("en-US",t.includes("T")?{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}:{month:"short",day:"numeric",year:"numeric"})},Ee=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,jg=t=>{const e=new Date(t);return e.setHours(0,0,0,0),e.setDate(e.getDate()-(e.getDay()+6)%7),e},xl=[{id:"today",label:"Today"},{id:"all",label:"All time"},{id:"tweek",label:"This week"},{id:"tmonth",label:"This month"},{id:"pweek",label:"Last week"},{id:"pmonth",label:"Last month"},{id:"tyear",label:"This year"}];function n0(t){const e=new Date;if(t==="today")return[Ee(e),Ee(e)];if(t==="tweek"){const r=jg(e),o=new Date(r);return o.setDate(r.getDate()+6),[Ee(r),Ee(o)]}if(t==="pweek"){const r=jg(e);r.setDate(r.getDate()-7);const o=new Date(r);return o.setDate(r.getDate()+6),[Ee(r),Ee(o)]}return t==="tmonth"?[Ee(new Date(e.getFullYear(),e.getMonth(),1)),Ee(new Date(e.getFullYear(),e.getMonth()+1,0))]:t==="pmonth"?[Ee(new Date(e.getFullYear(),e.getMonth()-1,1)),Ee(new Date(e.getFullYear(),e.getMonth(),0))]:t==="tyear"?[Ee(new Date(e.getFullYear(),0,1)),Ee(new Date(e.getFullYear(),11,31))]:["0000-01-01","9999-12-31"]}function o0(){const t=jp(),e=$=>Ky($,t.code),[r,o]=u.useState([]),[i,s]=u.useState([]),[l,a]=u.useState([]),[d,c]=u.useState([]),[p,y]=u.useState({}),[h,w]=u.useState({}),[v,k]=u.useState(!1),[z,f]=u.useState({}),[g,b]=u.useState({}),[C,S]=u.useState(!1),[B,O]=u.useState(!1),[Y,F]=u.useState(!1),[N,j]=u.useState(""),[T,x]=u.useState("today"),U=()=>H.getPayouts().then(c).catch(()=>{}),bt=()=>H.getRewardRates().then(a).catch(()=>{});u.useEffect(()=>{(async()=>{try{const[$,kt,Mt,ee,Ye,Qe]=await Promise.all([H.getFocus(),H.getScreenTime(),H.getRewardRates(),H.getPayouts(),H.getSetting(qy),H.getSetting(Jy)]);o($.sessions||[]),s(Array.isArray(kt)?kt:[]),a(Mt||[]),c(ee||[]),y((Ye==null?void 0:Ye.value)||{}),w((Qe==null?void 0:Qe.value)||{})}catch{}k(!0)})()},[]);const et={};l.forEach($=>{var kt;(et[kt=`${$.kind}:${$.rkey}`]||(et[kt]=[])).push({eff:$.eff_date,rate:$.rate})}),Object.values(et).forEach($=>$.sort((kt,Mt)=>kt.eff.localeCompare(Mt.eff)));const D=($,kt,Mt)=>{const ee=et[`${$}:${kt}`];if(ee){let Ye=null;for(const Qe of ee)if(Qe.eff<=Mt)Ye=Qe.rate;else break;if(Ye!==null)return Ye}return($==="focus"?p[kt]:h[kt])||0},A=($,kt)=>{const Mt=et[`${$}:${kt}`];return Mt&&Mt.length?Mt[Mt.length-1].rate:($==="focus"?p[kt]:h[kt])??""},[M,V]=n0(T);let W=0,R=0;r.filter($=>$.completed).forEach($=>{const kt=($.started_at||$.created_at||"").slice(0,10),Mt=je[$.tree]?$.tree:Vn;W+=($.actual_min||0)/60*D("focus",Mt,kt)}),i.forEach($=>{$.screen!=="worth"&&(R+=$.seconds/60*D("usage",$.screen,$.date))});const m=W+R,G=d.reduce(($,kt)=>$+kt.amount,0),lt=Math.max(0,m-G),rt={};Ci.forEach($=>rt[$]={minutes:0,earned:0}),r.filter($=>$.completed).forEach($=>{const kt=($.started_at||$.created_at||"").slice(0,10);if(kt<M||kt>V)return;const Mt=je[$.tree]?$.tree:Vn,ee=$.actual_min||0;rt[Mt].minutes+=ee,rt[Mt].earned+=ee/60*D("focus",Mt,kt)});const L=Ci.reduce(($,kt)=>$+rt[kt].earned,0),st={};i.forEach($=>{var Mt;if($.screen==="worth"||$.date<M||$.date>V)return;const kt=st[Mt=$.screen]||(st[Mt]={seconds:0,earned:0});kt.seconds+=$.seconds,kt.earned+=$.seconds/60*D("usage",$.screen,$.date)});const q=Object.values(st).reduce(($,kt)=>$+kt.earned,0),Z=L+q,X=Z>0?L/Z*100:0,vt=Z>0?q/Z*100:0,ut=Ci.map($=>({p:$,...rt[$],...je[$]})).filter($=>$.minutes>0).sort(($,kt)=>kt.earned-$.earned),Bt=wg.map($=>({...$,...st[$.id]||{seconds:0,earned:0}})).filter($=>$.seconds>0).sort(($,kt)=>kt.earned-$.earned),$t=($,kt)=>{H.setRewardRate({kind:"focus",rkey:$,rate:Math.max(0,parseFloat(kt)||0)}).then(bt).catch(()=>{})},_e=($,kt)=>{H.setRewardRate({kind:"usage",rkey:$,rate:Math.max(0,parseFloat(kt)||0)}).then(bt).catch(()=>{})},Le=async $=>{const kt=Math.min(parseFloat($)||0,lt);kt<=0||(await H.createPayout({amount:kt,note:"",date:e0()}),F(!1),j(""),U())},Or=async $=>{await H.deletePayout($),U()};return n.jsxs("div",{style:tt.page,children:[n.jsxs("div",{style:tt.head,children:[n.jsx("div",{style:tt.eyebrow,children:"Anvil · Rewards"}),n.jsx("h1",{style:tt.h1,children:"Rewards"}),n.jsx("div",{style:tt.subhead,children:"Your earned rewards from focus and app usage."})]}),n.jsxs("div",{style:tt.hero,children:[n.jsx("div",{style:tt.heroLabel,children:"Final reward · pending"}),n.jsx("div",{style:tt.heroVal,children:e(lt)}),n.jsxs("div",{style:tt.heroSub,children:["Earned ",e(m)," · Taken ",e(G)]}),Y?n.jsxs("div",{style:tt.partialRow,children:[n.jsxs("div",{style:tt.partialInputWrap,children:[n.jsx("span",{style:tt.partialSign,children:t.symbol}),n.jsx("input",{type:"number",min:"0",step:"0.01",autoFocus:!0,placeholder:lt.toFixed(2),value:N,onChange:$=>j($.target.value),style:tt.partialInput})]}),n.jsx("button",{onClick:()=>Le(N),style:tt.heroBtnSolid,children:"Confirm"}),n.jsx("button",{onClick:()=>{F(!1),j("")},style:tt.heroBtnGhost,children:"Cancel"})]}):n.jsxs("div",{style:tt.heroBtns,children:[n.jsx("button",{onClick:()=>F(!0),disabled:lt<=0,style:{...tt.heroBtnGhost,...lt<=0?tt.btnDisabled:{}},children:"Take partial"}),n.jsx("button",{onClick:()=>Le(lt),disabled:lt<=0,style:{...tt.heroBtnSolid,...lt<=0?tt.btnDisabled:{}},children:"Take all pending"})]})]}),n.jsxs("div",{style:tt.statRow,children:[n.jsxs("div",{style:tt.statCard,children:[n.jsx("div",{style:tt.statVal,children:e(G)}),n.jsx("div",{style:tt.statLbl,children:"Total taken"})]}),n.jsxs("div",{style:tt.statCard,children:[n.jsx("div",{style:{...tt.statVal,color:Ii},children:e(lt)}),n.jsx("div",{style:tt.statLbl,children:"Total pending"})]})]}),n.jsx("div",{style:tt.periodRow,children:xl.map($=>n.jsx("button",{onClick:()=>x($.id),style:{...tt.periodChip,...T===$.id?tt.periodChipOn:{}},children:$.label},$.id))}),Z>0?n.jsxs("div",{style:tt.card,children:[n.jsxs("div",{style:tt.cardTitleRow,children:[n.jsx("span",{style:tt.cardTitle,children:"Reward split"}),n.jsxs("span",{style:tt.periodTotal,children:[e(Z)," · ",xl.find($=>$.id===T).label]})]}),n.jsxs("div",{style:tt.splitTrack,children:[n.jsx("div",{style:{width:`${X}%`,background:Ii,height:"100%"}}),n.jsx("div",{style:{width:`${vt}%`,background:vl,height:"100%"}})]}),n.jsxs("div",{style:tt.legendRow,children:[n.jsxs("span",{style:tt.legendItem,children:[n.jsx("span",{style:{...tt.legendDot,background:Ii}})," Focus ",Math.round(X),"% · ",e(L)]}),n.jsxs("span",{style:tt.legendItem,children:[n.jsx("span",{style:{...tt.legendDot,background:vl}})," Usage ",Math.round(vt),"% · ",e(q)]})]})]}):n.jsxs("div",{style:{...tt.card,...tt.muted},children:["No rewards earned in ",xl.find($=>$.id===T).label.toLowerCase(),"."]}),n.jsxs("div",{style:tt.card,children:[n.jsxs("button",{onClick:()=>S($=>!$),style:tt.collapseBtn,children:[n.jsxs("span",{style:{...tt.cardTitle,color:Ii},children:["Focus Rewards · ",e(L)]}),n.jsx("span",{style:tt.collapseHint,children:C?"Hide rates":"Set rates"})]}),C&&n.jsx("div",{style:{...tt.rateGrid,marginTop:12},children:Ci.map($=>n.jsxs("div",{style:tt.rateRow,children:[n.jsx("span",{style:{...tt.dot,background:je[$].leaf}}),n.jsx("span",{style:tt.rateName,children:je[$].label}),n.jsxs("div",{style:tt.rateInputWrap,children:[n.jsx("span",{style:tt.unitSign,children:t.symbol}),n.jsx("input",{type:"number",min:"0",step:"0.5",inputMode:"decimal",placeholder:"0",value:z[$]!==void 0?z[$]:A("focus",$),onChange:kt=>f(Mt=>({...Mt,[$]:kt.target.value})),onBlur:kt=>$t($,kt.target.value),style:tt.rateInput}),n.jsx("span",{style:tt.unit,children:"/hr"})]})]},$))}),ut.length>0?n.jsx("div",{style:{...tt.rows,marginTop:14},children:ut.map($=>n.jsxs("div",{style:tt.row,children:[n.jsx("span",{style:{...tt.dot,background:$.leaf}}),n.jsx("span",{style:tt.rowName,children:$.label}),n.jsx("span",{style:tt.rowMeta,children:Zy(Math.round($.minutes))}),n.jsx("span",{style:tt.rowAmt,children:e($.earned)})]},$.p))}):n.jsx("div",{style:tt.muted,children:"No focus sessions yet."})]}),n.jsxs("div",{style:tt.card,children:[n.jsxs("button",{onClick:()=>O($=>!$),style:tt.collapseBtn,children:[n.jsxs("span",{style:{...tt.cardTitle,color:vl},children:["Usage Rewards · ",e(q)]}),n.jsx("span",{style:tt.collapseHint,children:B?"Hide rates":"Set rates"})]}),B&&n.jsx("div",{style:{...tt.rateGrid,marginTop:12},children:wg.map($=>n.jsxs("div",{style:tt.rateRow,children:[n.jsx("span",{style:tt.rateName,children:$.label}),n.jsxs("div",{style:tt.rateInputWrap,children:[n.jsx("span",{style:tt.unitSign,children:t.symbol}),n.jsx("input",{type:"number",min:"0",step:"0.1",inputMode:"decimal",placeholder:"0",value:g[$.id]!==void 0?g[$.id]:A("usage",$.id),onChange:kt=>b(Mt=>({...Mt,[$.id]:kt.target.value})),onBlur:kt=>_e($.id,kt.target.value),style:tt.rateInput}),n.jsx("span",{style:tt.unit,children:"/min"})]})]},$.id))}),Bt.length>0?n.jsx("div",{style:{...tt.rows,marginTop:14},children:Bt.map($=>n.jsxs("div",{style:tt.row,children:[n.jsx("span",{style:tt.rowName,children:$.label}),n.jsx("span",{style:tt.rowMeta,children:t0($.seconds/60)}),n.jsx("span",{style:tt.rowAmt,children:e($.earned)})]},$.id))}):n.jsx("div",{style:tt.muted,children:v?"No usage tracked yet.":"Loading…"})]}),d.length>0&&n.jsxs("div",{style:tt.card,children:[n.jsx("div",{style:tt.cardTitle,children:"Rewards taken"}),n.jsxs("div",{style:tt.rows,children:[d.map($=>n.jsxs("div",{style:tt.row,children:[n.jsx("span",{style:tt.rowMeta,children:r0($.date)}),n.jsx("span",{style:{...tt.rowName,textAlign:"right"}}),n.jsx("span",{style:tt.rowAmt,children:e($.amount)}),n.jsx("button",{onClick:()=>Or($.id),style:tt.del,children:"×"})]},$.id)),n.jsxs("div",{style:tt.totalRow,children:[n.jsx("span",{children:"Total taken"}),n.jsx("span",{style:tt.totalVal,children:e(G)})]})]})]}),n.jsx("div",{style:tt.note,children:"Set rates only affect time from today onward — past time keeps the rate it was earned at."})]})}const tt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},hero:{background:"linear-gradient(135deg,var(--accent-strong),var(--accent-2))",borderRadius:16,padding:"22px 24px",color:"#fff",marginBottom:14,textAlign:"center"},heroLabel:{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",opacity:.85},heroVal:{fontSize:44,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:2,lineHeight:1.05},heroSub:{fontSize:12.5,opacity:.9,marginTop:6},heroBtns:{display:"flex",gap:10,marginTop:16,justifyContent:"center"},heroBtnSolid:{border:"none",background:"#fff",color:"var(--accent-strong)",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},heroBtnGhost:{border:"1px solid rgba(255,255,255,0.6)",background:"transparent",color:"#fff",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},btnDisabled:{opacity:.45,cursor:"not-allowed"},partialRow:{display:"flex",gap:8,marginTop:16,justifyContent:"center",alignItems:"center",flexWrap:"wrap"},partialInputWrap:{display:"flex",alignItems:"center",gap:4,background:"#fff",borderRadius:10,padding:"6px 12px"},partialSign:{fontSize:15,color:"var(--accent-strong)",fontWeight:700},partialInput:{border:"none",background:"none",outline:"none",width:90,fontSize:16,fontWeight:700,fontFamily:"inherit",color:"#26241F"},statRow:{display:"flex",gap:10,marginBottom:14},statCard:{flex:1,background:"var(--surface)",borderRadius:12,padding:"12px 14px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},statVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},statLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},card:{background:"var(--surface)",borderRadius:16,padding:"18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:10,flexWrap:"wrap"},periodTotal:{fontSize:13,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text-2)"},periodRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},periodChip:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},periodChipOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},collapseBtn:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",border:"none",background:"none",cursor:"pointer",padding:0,fontFamily:"inherit"},collapseHint:{fontSize:12,fontWeight:700,color:"var(--accent)"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"12px 0"},splitTrack:{display:"flex",height:16,borderRadius:8,overflow:"hidden",marginTop:12,marginBottom:12,border:"1px solid var(--border)"},legendRow:{display:"flex",gap:16,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:600,color:"var(--text-2)"},legendDot:{width:10,height:10,borderRadius:3},rows:{display:"flex",flexDirection:"column",gap:2},row:{display:"flex",alignItems:"center",gap:8,padding:"7px 0",borderBottom:"1px solid var(--border)"},dot:{width:10,height:10,borderRadius:3,flexShrink:0},rowName:{flex:1,fontSize:13.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},rowMeta:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,flexShrink:0},rowAmt:{fontSize:13.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",flexShrink:0,minWidth:64,textAlign:"right"},del:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",fontSize:16,lineHeight:1,padding:"0 2px",flexShrink:0},totalRow:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:10,marginTop:4,fontSize:14,fontWeight:700},totalVal:{fontSize:16,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},rateGrid:{display:"flex",flexDirection:"column",gap:10},rateRow:{display:"flex",alignItems:"center",gap:8},rateName:{flex:1,fontSize:14,fontWeight:600},rateInputWrap:{display:"flex",alignItems:"center",gap:3,border:"1px solid var(--border)",borderRadius:9,padding:"4px 10px",background:"var(--surface-2)"},unitSign:{fontSize:14,color:"var(--text-2)",fontWeight:600},rateInput:{border:"none",background:"none",outline:"none",width:64,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},unit:{fontSize:12,color:"var(--text-3)",fontWeight:600},note:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",fontStyle:"italic",marginTop:4}};function i0({onAuthed:t}){const[e,r]=u.useState("login"),[o,i]=u.useState(""),[s,l]=u.useState(""),[a,d]=u.useState(""),[c,p]=u.useState(""),[y,h]=u.useState(!1),w=e==="register",v=async k=>{if(k.preventDefault(),p(""),!s.trim()||!a){p("Email and password are required.");return}if(w&&a.length<6){p("Password must be at least 6 characters.");return}h(!0);try{const z=w?await H.register({name:o,email:s,password:a}):await H.login({email:s,password:a});Oh(z.token),t(z.user)}catch(z){p(z.message||"Something went wrong.")}finally{h(!1)}};return n.jsx("div",{style:Qt.page,children:n.jsxs("form",{style:Qt.card,onSubmit:v,children:[n.jsxs("div",{style:Qt.brand,children:[n.jsx("div",{style:Qt.logo,children:"B"}),n.jsx("span",{style:Qt.brandName,children:"Anvil"})]}),n.jsx("h1",{style:Qt.title,children:w?"Create your account":"Welcome back"}),n.jsx("p",{style:Qt.sub,children:w?"Start forging your days.":"Sign in to continue."}),w&&n.jsxs("label",{style:Qt.field,children:[n.jsx("span",{style:Qt.label,children:"Name"}),n.jsx("input",{value:o,onChange:k=>i(k.target.value),placeholder:"Your name",style:Qt.input,autoFocus:!0})]}),n.jsxs("label",{style:Qt.field,children:[n.jsx("span",{style:Qt.label,children:"Email"}),n.jsx("input",{type:"email",value:s,onChange:k=>l(k.target.value),placeholder:"you@example.com",style:Qt.input,autoFocus:!w})]}),n.jsxs("label",{style:Qt.field,children:[n.jsx("span",{style:Qt.label,children:"Password"}),n.jsx("input",{type:"password",value:a,onChange:k=>d(k.target.value),placeholder:"••••••••",style:Qt.input})]}),c&&n.jsx("div",{style:Qt.error,children:c}),n.jsx("button",{type:"submit",disabled:y,style:{...Qt.submit,...y?{opacity:.6}:{}},children:y?"Please wait…":w?"Create account":"Sign in"}),n.jsxs("div",{style:Qt.switch,children:[w?"Already have an account?":"New here?"," ",n.jsx("button",{type:"button",onClick:()=>{r(w?"login":"register"),p("")},style:Qt.link,children:w?"Sign in":"Create one"})]})]})})}const Qt={page:{minHeight:"100vh",display:"grid",placeItems:"center",background:"var(--bg)",fontFamily:"'Inter',system-ui,sans-serif",padding:20},card:{width:"100%",maxWidth:380,background:"var(--surface)",borderRadius:16,padding:"32px 28px",boxShadow:"0 4px 24px rgba(0,0,0,0.08)",display:"flex",flexDirection:"column"},brand:{display:"flex",alignItems:"center",gap:9,marginBottom:20},logo:{width:32,height:32,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},brandName:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},title:{fontSize:22,fontWeight:700,margin:"0 0 4px",fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},sub:{fontSize:13.5,color:"var(--text-3)",margin:"0 0 22px"},field:{display:"flex",flexDirection:"column",gap:5,marginBottom:14},label:{fontSize:12,fontWeight:600,color:"var(--text-2)"},input:{border:"1px solid var(--border)",borderRadius:9,padding:"11px 12px",fontSize:14,fontFamily:"inherit",outline:"none",color:"var(--text)"},error:{background:"rgba(194,83,107,0.10)",color:"#C2536B",fontSize:13,padding:"9px 12px",borderRadius:8,marginBottom:14,fontWeight:500},submit:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"12px",borderRadius:10,fontSize:14.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:4},switch:{fontSize:13,color:"var(--text-2)",textAlign:"center",marginTop:18},link:{border:"none",background:"none",color:"#3A7CA5",fontWeight:700,cursor:"pointer",fontFamily:"inherit",fontSize:13,padding:0}},Sg=["Salary","Stocks","Business","Interest","Rent","Gift","Other"],Cg=["Bills","EMI","Rent","Food","Shopping","Transport","Health","Entertainment","Education","Other"],s0={Salary:"#4C9A6B",Stocks:"#3A7CA5",Business:"#C9A227",Interest:"#8268B0",Gift:"#C2773B",Bills:"#C2536B",EMI:"#A23E57",Food:"#E08E45",Shopping:"#8268B0",Transport:"#3A7CA5",Health:"#4C9A6B",Entertainment:"#C9A227",Education:"#5B7C99",Rent:"#5B8C5A",Other:"#9A968C"},Sp=t=>s0[t]||"#9A968C",Je="#3E9E6B",Ze="#D1556E",fo=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,Eo=fo(new Date),l0=[{id:"month",label:"This month"},{id:"last",label:"Last month"},{id:"year",label:"This year"},{id:"all",label:"All time"}];function a0(t){const e=new Date;return t==="month"?[fo(new Date(e.getFullYear(),e.getMonth(),1)),Eo]:t==="last"?[fo(new Date(e.getFullYear(),e.getMonth()-1,1)),fo(new Date(e.getFullYear(),e.getMonth(),0))]:t==="year"?[fo(new Date(e.getFullYear(),0,1)),Eo]:["0000-01-01","9999-12-31"]}function d0(){const t=jp(),[e,r]=u.useState("overview"),[o,i]=u.useState([]),[s,l]=u.useState(!1),a=u.useCallback(()=>H.getTxns().then(c=>{i(c),l(!0)}).catch(()=>l(!0)),[]);u.useEffect(()=>{a()},[a]);const d=c=>Ea(c,t.code);return n.jsxs("div",{style:E.page,children:[n.jsxs("div",{style:E.head,children:[n.jsx("div",{style:E.eyebrow,children:"Anvil · Vault"}),n.jsx("h1",{style:E.h1,children:"Vault"}),n.jsx("div",{style:E.subhead,children:"Your money — what comes in, what goes out, and where it's headed."})]}),n.jsx("div",{style:E.tabs,children:[["overview","Overview",bh],["money","Money",Lh],["calc","Calculators",gh]].map(([c,p,y])=>n.jsxs("button",{onClick:()=>r(c),style:{...E.tab,...e===c?E.tabOn:{}},children:[n.jsx(y,{size:15})," ",p]},c))}),e==="overview"&&n.jsx(c0,{txns:o,loaded:s,money:d,cur:t}),e==="money"&&n.jsx(u0,{txns:o,reload:a,money:d}),e==="calc"&&n.jsx(b0,{money:d,cur:t})]})}function c0({txns:t,loaded:e,money:r,cur:o}){const[i,s]=u.useState("month"),[l,a]=a0(i),d=u.useMemo(()=>t.filter(k=>k.date>=l&&k.date<=a),[t,l,a]),c=d.filter(k=>k.kind==="income"),p=d.filter(k=>k.kind==="expense"),y=c.reduce((k,z)=>k+z.amount,0),h=p.reduce((k,z)=>k+z.amount,0),w=y-h,v=k=>{const z={};return k.forEach(f=>{z[f.category]=(z[f.category]||0)+f.amount}),Object.entries(z).map(([f,g])=>({category:f,amount:g})).sort((f,g)=>g.amount-f.amount)};return n.jsxs(n.Fragment,{children:[n.jsx("div",{style:E.presetRow,children:l0.map(k=>n.jsx("button",{onClick:()=>s(k.id),style:{...E.preset,...i===k.id?E.presetOn:{}},children:k.label},k.id))}),n.jsxs("div",{style:E.sumGrid,children:[n.jsx(kl,{icon:n.jsx(ya,{size:16}),label:"Income",value:r(y),color:Je}),n.jsx(kl,{icon:n.jsx(va,{size:16}),label:"Expenses",value:r(h),color:Ze}),n.jsx(kl,{icon:w>=0?n.jsx(bp,{size:16}):n.jsx(up,{size:16}),label:"Net savings",value:r(w),color:w>=0?Je:Ze})]}),e?d.length===0?n.jsx("div",{style:E.card,children:n.jsxs("div",{style:E.muted,children:["No transactions in this period. Add some under the ",n.jsx("b",{children:"Money"})," tab."]})}):n.jsxs(n.Fragment,{children:[n.jsx(g0,{totalIn:y,totalOut:h}),n.jsxs("div",{style:E.twoCol,children:[n.jsx(Ig,{title:"Incoming",subtitle:"Where your money comes from",total:y,data:v(c),accent:Je,cur:o}),n.jsx(Ig,{title:"Outgoing",subtitle:"Where your money goes",total:h,data:v(p),accent:Ze,cur:o})]})]}):n.jsx("div",{style:E.muted,children:"Loading…"})]})}function kl({icon:t,label:e,value:r,color:o}){return n.jsxs("div",{style:E.sumCard,children:[n.jsx("div",{style:{...E.sumIcon,color:o,background:o+"1A"},children:t}),n.jsx("div",{style:E.sumLabel,children:e}),n.jsx("div",{style:{...E.sumVal,color:o},children:r})]})}function Ig({title:t,subtitle:e,total:r,data:o,accent:i,cur:s}){let l=0;const a=o.map(c=>{const p=r>0?l/r*100:0;l+=c.amount;const y=r>0?l/r*100:0;return{...c,start:p,end:y,color:Sp(c.category),pct:r>0?c.amount/r*100:0}}),d=a.length?`conic-gradient(${a.map(c=>`${c.color} ${c.start}% ${c.end}%`).join(", ")})`:"var(--surface-2)";return n.jsxs("div",{style:E.card,children:[n.jsxs("div",{style:E.cardTitleRow,children:[n.jsxs("div",{children:[n.jsx("div",{style:{...E.cardTitle,color:i},children:t}),n.jsx("div",{style:E.cardSub,children:e})]}),n.jsx("div",{style:{...E.cardTotal,color:i},children:Ea(r,s.code)})]}),o.length===0?n.jsx("div",{style:E.muted,children:"Nothing logged."}):n.jsxs("div",{style:E.pieWrap,children:[n.jsxs("div",{style:E.pieChart,children:[n.jsx("div",{style:{...E.pieDisc,background:d}}),n.jsxs("div",{style:E.pieHole,children:[n.jsx("span",{style:E.pieHoleVal,children:Xy(r,s.code)}),n.jsx("span",{style:E.pieHoleLbl,children:"total"})]})]}),n.jsx("div",{style:E.pieLegend,children:a.map(c=>n.jsxs("div",{style:E.legendRow,children:[n.jsx("span",{style:{...E.dot,background:c.color}}),n.jsx("span",{style:E.legendName,children:c.category}),n.jsxs("span",{style:E.legendPct,children:[Math.round(c.pct),"%"]}),n.jsx("span",{style:E.legendAmt,children:Ea(c.amount,s.code)})]},c.category))})]})]})}function g0({totalIn:t,totalOut:e}){const r=t-e,o=t>0?r/t:0,i=t===0?0:Math.max(0,Math.min(100,Math.round(50+o*100)));let s,l,a;t===0?(s="No income logged",l="#9A968C",a="Add your income to see your financial health."):o>=.3?(s="Excellent",l="#3E9E6B",a="You're saving 30%+ of income — keep investing the surplus."):o>=.2?(s="Healthy",l="#4C9A6B",a="Solid savings rate. Consider automating a SIP with the surplus."):o>=.1?(s="Okay",l="#C9A227",a="Decent, but aim for 20%+. Trim your biggest expense category."):o>=0?(s="Tight",l="#C2773B",a="You're saving very little. Review recurring bills and EMIs."):(s="Overspending",l="#D1556E",a="You're spending more than you earn. Cut back to avoid debt.");const d=t>0?Math.min(100,Math.round(e/t*100)):0;return n.jsxs("div",{style:E.card,children:[n.jsxs("div",{style:E.cardTitleRow,children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx(vh,{size:18,color:l}),n.jsxs("div",{children:[n.jsx("div",{style:E.cardTitle,children:"Financial health"}),n.jsx("div",{style:E.cardSub,children:"Based on your savings rate this period"})]})]}),n.jsxs("div",{style:{textAlign:"right"},children:[n.jsx("div",{style:{...E.healthScore,color:l},children:t===0?"—":i}),n.jsx("div",{style:{...E.healthStatus,color:l},children:s})]})]}),n.jsx("div",{style:E.gaugeTrack,children:n.jsx("div",{style:{...E.gaugeFill,width:`${t===0?0:i}%`,background:l}})}),n.jsxs("div",{style:E.healthStats,children:[n.jsxs("div",{style:E.healthStat,children:[n.jsxs("span",{style:E.healthStatV,children:[t>0?Math.round(o*100):0,"%"]}),n.jsx("span",{style:E.healthStatL,children:"Savings rate"})]}),n.jsxs("div",{style:E.healthStat,children:[n.jsxs("span",{style:E.healthStatV,children:[d,"%"]}),n.jsx("span",{style:E.healthStatL,children:"of income spent"})]})]}),n.jsx("div",{style:{...E.tip,borderColor:l+"55",background:l+"12",color:l},children:a})]})}function u0({txns:t,reload:e,money:r}){const[o,i]=u.useState("expense"),[s,l]=u.useState(""),[a,d]=u.useState("Bills"),[c,p]=u.useState(Eo),[y,h]=u.useState(""),[w,v]=u.useState(null),{deleteItem:k,toasts:z,handleUndo:f,handleDismiss:g}=cn(H.deleteTxn,H.restoreTxn,e),b=o==="income"?Sg:Cg,C=T=>{i(T),d(T==="income"?"Salary":"Bills")},S=async()=>{const T=parseFloat(s);!T||T<=0||(await H.createTxn({kind:o,category:a,amount:T,note:y.trim(),date:c}),l(""),h(""),e())},B=T=>v({id:T.id,kind:T.kind,amount:String(T.amount),category:T.category,date:T.date,note:T.note||""}),O=(w==null?void 0:w.kind)==="income"?Sg:Cg,Y=T=>v(x=>({...x,kind:T,category:O.includes(x.category)?x.category:T==="income"?"Salary":"Bills"})),F=async()=>{const T=parseFloat(w.amount);!T||T<=0||(await H.updateTxn(w.id,{kind:w.kind,category:w.category,amount:T,note:w.note.trim(),date:w.date}),v(null),e())},N=u.useMemo(()=>{const T={};return t.forEach(x=>{(T[x.date]=T[x.date]||[]).push(x)}),Object.entries(T).sort((x,U)=>U[0].localeCompare(x[0]))},[t]),j=T=>new Date(T+"T00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"});return n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:E.card,children:[n.jsx("div",{style:E.cardTitle,children:"Add transaction"}),n.jsxs("div",{style:E.kindToggle,children:[n.jsxs("button",{onClick:()=>C("expense"),style:{...E.kindBtn,...o==="expense"?{background:Ze,color:"#fff",borderColor:Ze}:{}},children:[n.jsx(va,{size:15})," Expense"]}),n.jsxs("button",{onClick:()=>C("income"),style:{...E.kindBtn,...o==="income"?{background:Je,color:"#fff",borderColor:Je}:{}},children:[n.jsx(ya,{size:15})," Income"]})]}),n.jsxs("div",{style:E.formGrid,children:[n.jsx("input",{type:"number",inputMode:"decimal",placeholder:"Amount",value:s,onChange:T=>l(T.target.value),onKeyDown:T=>T.key==="Enter"&&S(),style:E.input,autoFocus:!0}),n.jsx("select",{value:a,onChange:T=>d(T.target.value),style:E.input,children:b.map(T=>n.jsx("option",{children:T},T))}),n.jsx("input",{type:"date",value:c,max:Eo,onChange:T=>p(T.target.value),style:E.input})]}),n.jsx("input",{placeholder:"Note (optional)",value:y,onChange:T=>h(T.target.value),onKeyDown:T=>T.key==="Enter"&&S(),style:{...E.input,marginTop:8}}),n.jsxs("button",{onClick:S,style:{...E.addBtn,background:o==="income"?Je:Ze},children:[n.jsx(ce,{size:15})," Add ",o]})]}),n.jsxs("div",{style:E.card,children:[n.jsx("div",{style:E.cardTitle,children:"History"}),N.length===0?n.jsx("div",{style:E.muted,children:"No transactions yet."}):n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:N.map(([T,x])=>n.jsxs("div",{children:[n.jsx("div",{style:E.dateHead,children:j(T)}),x.map(U=>(w==null?void 0:w.id)===U.id?n.jsxs("div",{style:E.editTxn,children:[n.jsxs("div",{style:E.kindToggle,children:[n.jsxs("button",{onClick:()=>Y("expense"),style:{...E.kindBtn,...w.kind==="expense"?{background:Ze,color:"#fff",borderColor:Ze}:{}},children:[n.jsx(va,{size:14})," Expense"]}),n.jsxs("button",{onClick:()=>Y("income"),style:{...E.kindBtn,...w.kind==="income"?{background:Je,color:"#fff",borderColor:Je}:{}},children:[n.jsx(ya,{size:14})," Income"]})]}),n.jsxs("div",{style:E.formGrid,children:[n.jsx("input",{type:"number",inputMode:"decimal",value:w.amount,onChange:bt=>v({...w,amount:bt.target.value}),style:E.input}),n.jsx("select",{value:w.category,onChange:bt=>v({...w,category:bt.target.value}),style:E.input,children:O.map(bt=>n.jsx("option",{children:bt},bt))}),n.jsx("input",{type:"date",value:w.date,max:Eo,onChange:bt=>v({...w,date:bt.target.value}),style:E.input})]}),n.jsx("input",{placeholder:"Note (optional)",value:w.note,onChange:bt=>v({...w,note:bt.target.value}),onKeyDown:bt=>bt.key==="Enter"&&F(),style:{...E.input,marginTop:8}}),n.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[n.jsxs("button",{onClick:()=>v(null),style:E.editCancel,children:[n.jsx(jt,{size:14})," Cancel"]}),n.jsxs("button",{onClick:F,style:{...E.addBtn,marginTop:0,flex:1,background:w.kind==="income"?Je:Ze},children:[n.jsx(zt,{size:15})," Save"]})]})]},U.id):n.jsxs("div",{style:E.txnRow,children:[n.jsx("span",{style:{...E.txnDot,background:Sp(U.category)}}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("div",{style:E.txnCat,children:U.category}),U.note&&n.jsx("div",{style:E.txnNote,children:U.note})]}),n.jsxs("span",{style:{...E.txnAmt,color:U.kind==="income"?Je:Ze},children:[U.kind==="income"?"+":"−",r(U.amount)]}),n.jsx("button",{onClick:()=>B(U),style:E.delBtn,children:n.jsx(pe,{size:13})}),n.jsx("button",{onClick:()=>k(U.id,U.category),style:E.delBtn,children:n.jsx(jt,{size:14})})]},U.id))]},T))})]}),n.jsx(gn,{toasts:z,onUndo:f,onDismiss:g})]})}function b0({money:t,cur:e}){return n.jsxs(n.Fragment,{children:[n.jsx(p0,{money:t,cur:e}),n.jsx(f0,{money:t,cur:e})]})}function Xr({label:t,value:e,set:r,min:o,max:i,step:s,suffix:l}){return n.jsxs("div",{style:E.field,children:[n.jsxs("div",{style:E.fieldTop,children:[n.jsx("span",{style:E.fieldLabel,children:t}),n.jsxs("div",{style:E.fieldInputWrap,children:[n.jsx("input",{type:"number",value:e,onChange:a=>r(a.target.value),style:E.fieldInput}),l&&n.jsx("span",{style:E.fieldSuffix,children:l})]})]}),n.jsx("input",{type:"range",min:o,max:i,step:s,value:e,onChange:a=>r(a.target.value),style:E.range})]})}function p0({money:t,cur:e}){const[r,o]=u.useState(3e4),[i,s]=u.useState(12),[l,a]=u.useState(15),{invested:d,futureValue:c,gains:p,yearly:y}=u.useMemo(()=>{const w=Math.max(0,parseFloat(r)||0),v=Math.max(0,parseFloat(i)||0),k=Math.max(0,Math.min(60,parseInt(l)||0)),z=v/12/100,f=S=>S<=0?0:z===0?w*S:w*((Math.pow(1+z,S)-1)/z)*(1+z),g=[];for(let S=1;S<=k;S++)g.push({year:S,invested:w*12*S,value:f(S*12)});const b=f(k*12),C=w*12*k;return{invested:C,futureValue:b,gains:b-C,yearly:g}},[r,i,l]),h=Math.max(1,...y.map(w=>w.value));return n.jsxs("div",{style:E.card,children:[n.jsx("div",{style:E.cardTitleRow,children:n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx(Bh,{size:18,color:"#3A7CA5"}),n.jsxs("div",{children:[n.jsx("div",{style:E.cardTitle,children:"SIP projection"}),n.jsx("div",{style:E.cardSub,children:"Mutual fund / SIP future value"})]})]})}),n.jsx(Xr,{label:"Monthly investment",value:r,set:o,min:500,max:5e5,step:500,suffix:e.symbol}),n.jsx(Xr,{label:"Expected return (p.a.)",value:i,set:s,min:1,max:30,step:.5,suffix:"%"}),n.jsx(Xr,{label:"Time period",value:l,set:a,min:1,max:40,step:1,suffix:"yrs"}),n.jsxs("div",{style:E.resultHero,children:[n.jsx("div",{style:E.resultLabel,children:"Projected wealth"}),n.jsx("div",{style:{...E.resultVal,color:"#3A7CA5"},children:t(c)})]}),n.jsxs("div",{style:E.splitRow,children:[n.jsxs("div",{style:E.splitItem,children:[n.jsx("span",{style:E.splitV,children:t(d)}),n.jsx("span",{style:E.splitL,children:"Invested"})]}),n.jsxs("div",{style:E.splitItem,children:[n.jsx("span",{style:{...E.splitV,color:"#3E9E6B"},children:t(p)}),n.jsx("span",{style:E.splitL,children:"Est. returns"})]})]}),y.length>0&&n.jsxs("div",{style:E.chartWrap,children:[n.jsx("div",{style:E.chartBars,children:y.map(w=>n.jsx("div",{style:E.chartCol,title:`Year ${w.year}: ${t(w.value)}`,children:n.jsx("div",{style:{...E.chartStack,height:`${w.value/h*100}%`},children:n.jsx("div",{style:{...E.chartGain,height:`${(1-w.invested/w.value)*100}%`}})})},w.year))}),n.jsxs("div",{style:E.chartAxis,children:[n.jsx("span",{children:"Yr 1"}),n.jsxs("span",{style:{marginLeft:"auto"},children:["Yr ",y.length]})]}),n.jsxs("div",{style:E.legend,children:[n.jsxs("span",{style:E.legendItem,children:[n.jsx("span",{style:{...E.legendDot,background:"#9DBFD6"}})," Invested"]}),n.jsxs("span",{style:E.legendItem,children:[n.jsx("span",{style:{...E.legendDot,background:"#3E9E6B"}})," Returns"]})]})]})]})}function zg(t,e,r,o=0,i=0){let s=Math.max(0,t-i),l=0,a=0,d=i;const c=1200;for(;s>.01&&a<c;){const p=s*e;let y=r+o,h=y-p;if(h<=0)return{months:1/0,totalInterest:1/0,totalPaid:1/0};h>s&&(h=s,y=s+p),s-=h,l+=p,d+=y,a++}return{months:a,totalInterest:l,totalPaid:d}}const Tg=t=>{if(!isFinite(t))return"—";const e=Math.floor(t/12),r=t%12;return(e?`${e}y `:"")+`${r}m`},m0=t=>{if(!isFinite(t))return"—";const e=new Date;return e.setMonth(e.getMonth()+t),e.toLocaleDateString("en-US",{month:"short",year:"numeric"})};function f0({money:t,cur:e}){const[r,o]=u.useState(2e6),[i,s]=u.useState(9),[l,a]=u.useState(20),[d,c]=u.useState(5e5),[p,y]=u.useState("once"),[h,w]=u.useState("tenure"),v=u.useMemo(()=>{const b=Math.max(0,parseFloat(r)||0),C=Math.max(0,parseFloat(i)||0)/12/100,S=Math.max(1,Math.round((parseFloat(l)||0)*12)),B=C===0?b/S:b*C*Math.pow(1+C,S)/(Math.pow(1+C,S)-1);return{P:b,i:C,n:S,emi:B,totalPay:B*S,totalInterest:B*S-b}},[r,i,l]),k=p==="monthly"?"tenure":h,z=u.useMemo(()=>{const{P:b,i:C,n:S,emi:B,totalInterest:O}=v,Y=Math.max(0,parseFloat(d)||0);if(Y<=0)return null;let F=B,N=S,j=O,T=v.totalPay;if(p==="once"&&k==="emi"){const x=Math.max(0,b-Y);F=C===0?x/S:x*C*Math.pow(1+C,S)/(Math.pow(1+C,S)-1),N=S,j=F*S-x,T=Y+F*S}else if(p==="once"){const x=zg(b,C,B,0,Y);N=x.months,j=x.totalInterest,T=x.totalPaid}else{const x=zg(b,C,B,Y,0);N=x.months,j=x.totalInterest,T=x.totalPaid}return{newEMI:F,newMonths:N,newInterest:j,totalPaid:T,interestSaved:Math.max(0,O-j),monthsSaved:Math.max(0,S-(isFinite(N)?N:S))}},[v,d,p,k]),f=v.totalPay>0?v.P/v.totalPay*100:0,g=p==="once"?Math.max(1e5,Math.round(v.P)):Math.max(5e4,Math.round(v.emi*3));return n.jsxs("div",{style:E.card,children:[n.jsx("div",{style:E.cardTitleRow,children:n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx(np,{size:18,color:"#C2536B"}),n.jsxs("div",{children:[n.jsx("div",{style:E.cardTitle,children:"EMI calculator"}),n.jsx("div",{style:E.cardSub,children:"Loan / mortgage monthly payment"})]})]})}),n.jsx(Xr,{label:"Loan amount",value:r,set:o,min:5e4,max:5e7,step:5e4,suffix:e.symbol}),n.jsx(Xr,{label:"Interest rate (p.a.)",value:i,set:s,min:1,max:24,step:.1,suffix:"%"}),n.jsx(Xr,{label:"Tenure",value:l,set:a,min:1,max:30,step:1,suffix:"yrs"}),n.jsxs("div",{style:E.resultHero,children:[n.jsx("div",{style:E.resultLabel,children:"Monthly EMI"}),n.jsx("div",{style:{...E.resultVal,color:"#C2536B"},children:t(v.emi)})]}),n.jsxs("div",{style:E.emiSplitTrack,children:[n.jsx("div",{style:{width:`${f}%`,background:"#5B7C99",height:"100%"}}),n.jsx("div",{style:{width:`${100-f}%`,background:"#C2536B",height:"100%"}})]}),n.jsxs("div",{style:E.splitRow,children:[n.jsxs("div",{style:E.splitItem,children:[n.jsx("span",{style:{...E.splitV,color:"#5B7C99"},children:t(v.P)}),n.jsx("span",{style:E.splitL,children:"Principal"})]}),n.jsxs("div",{style:E.splitItem,children:[n.jsx("span",{style:{...E.splitV,color:"#C2536B"},children:t(v.totalInterest)}),n.jsx("span",{style:E.splitL,children:"Total interest"})]}),n.jsxs("div",{style:E.splitItem,children:[n.jsx("span",{style:E.splitV,children:t(v.totalPay)}),n.jsx("span",{style:E.splitL,children:"Total payable"})]})]}),n.jsx("div",{style:E.subDivider}),n.jsx("div",{style:E.subTitle,children:"Prepayment planner"}),n.jsx("div",{style:E.cardSub,children:"See what an extra payment does to your loan."}),n.jsx("div",{style:{marginTop:14},children:n.jsx(Xr,{label:"Prepayment amount",value:d,set:c,min:0,max:g,step:p==="once"?25e3:1e3,suffix:e.symbol})}),n.jsxs("div",{style:E.segGroup,children:[n.jsx("span",{style:E.segLbl,children:"Type"}),n.jsxs("div",{style:E.segRow,children:[n.jsx(zi,{label:"One-time",on:p==="once",onClick:()=>y("once")}),n.jsx(zi,{label:"Every month",on:p==="monthly",onClick:()=>y("monthly")})]})]}),n.jsxs("div",{style:E.segGroup,children:[n.jsx("span",{style:E.segLbl,children:"Strategy"}),n.jsxs("div",{style:E.segRow,children:[n.jsx(zi,{label:"Reduce tenure",on:k==="tenure",onClick:()=>w("tenure")}),n.jsx(zi,{label:"Reduce EMI",on:k==="emi",disabled:p==="monthly",onClick:()=>w("emi")})]})]}),p==="monthly"&&n.jsx("div",{style:E.note,children:"An extra monthly payment always shortens the tenure. Switch to a one-time prepayment to reduce your EMI instead."}),z?n.jsxs("div",{style:E.cmpCard,children:[n.jsxs("div",{style:E.cmpRow,children:[n.jsx("span",{style:E.cmpLbl,children:"New EMI"}),n.jsxs("span",{style:E.cmpVal,children:[t(z.newEMI),z.newEMI<v.emi-1&&n.jsxs("span",{style:E.cmpWas,children:[" was ",t(v.emi)]})]})]}),n.jsxs("div",{style:E.cmpRow,children:[n.jsx("span",{style:E.cmpLbl,children:"New tenure"}),n.jsxs("span",{style:E.cmpVal,children:[Tg(z.newMonths)," ",n.jsxs("span",{style:E.cmpWas,children:["· paid off ",m0(z.newMonths)]})]})]}),n.jsxs("div",{style:E.cmpRow,children:[n.jsx("span",{style:E.cmpLbl,children:"Total interest"}),n.jsx("span",{style:E.cmpVal,children:t(z.newInterest)})]}),n.jsxs("div",{style:E.cmpRow,children:[n.jsx("span",{style:E.cmpLbl,children:"Total payable"}),n.jsx("span",{style:E.cmpVal,children:t(z.totalPaid)})]}),n.jsxs("div",{style:E.saveRow,children:["You save ",t(z.interestSaved)," in interest",z.monthsSaved>0?` · ${Tg(z.monthsSaved)} sooner`:""]})]}):n.jsx("div",{style:E.muted,children:"Enter a prepayment amount to see the impact."})]})}function zi({label:t,on:e,onClick:r,disabled:o}){return n.jsx("button",{onClick:o?void 0:r,disabled:o,style:{...E.seg,...e?E.segOn:{},...o?E.segDisabled:{}},children:t})}const E={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},tabs:{display:"flex",gap:7,marginBottom:18,flexWrap:"wrap"},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:10,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},presetRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},preset:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:18,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},presetOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},sumGrid:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:16},sumCard:{background:"var(--surface)",borderRadius:14,padding:"14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},sumIcon:{width:30,height:30,borderRadius:9,display:"grid",placeItems:"center",marginBottom:8},sumLabel:{fontSize:11.5,color:"var(--text-3)",fontWeight:600},sumVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:2,letterSpacing:"-0.01em",wordBreak:"break-word"},card:{background:"var(--surface)",borderRadius:16,padding:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)",marginBottom:16},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14,gap:10},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardSub:{fontSize:11.5,color:"var(--text-3)",marginTop:2},cardTotal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"14px 0"},twoCol:{display:"grid",gridTemplateColumns:"1fr",gap:0},dot:{width:10,height:10,borderRadius:3,flexShrink:0},pieWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap"},pieChart:{position:"relative",width:132,height:132,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:80,height:80,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:160,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8},legendName:{flex:1,fontSize:12.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},legendPct:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,width:34,textAlign:"right"},legendAmt:{fontSize:12.5,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:64,textAlign:"right"},healthScore:{fontSize:32,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1},healthStatus:{fontSize:12.5,fontWeight:700,marginTop:2},gaugeTrack:{height:10,background:"var(--surface-2)",borderRadius:6,overflow:"hidden",marginBottom:14},gaugeFill:{height:"100%",borderRadius:6,transition:"width 0.4s"},healthStats:{display:"flex",gap:24,marginBottom:12},healthStat:{display:"flex",flexDirection:"column"},healthStatV:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},healthStatL:{fontSize:11,color:"var(--text-3)",fontWeight:600},tip:{fontSize:12.5,lineHeight:1.5,padding:"10px 12px",borderRadius:10,border:"1px solid",fontWeight:500},kindToggle:{display:"flex",gap:8,marginBottom:12},kindBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},formGrid:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8},input:{border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},addBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",marginTop:10,border:"none",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},dateHead:{fontSize:11,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8},txnRow:{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid var(--border)"},txnDot:{width:9,height:9,borderRadius:"50%",flexShrink:0},txnCat:{fontSize:13.5,fontWeight:600},txnNote:{fontSize:11.5,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},txnAmt:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},delBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",flexShrink:0},editTxn:{background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:12,padding:12,margin:"6px 0"},editCancel:{display:"flex",alignItems:"center",justifyContent:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},field:{marginBottom:16},fieldTop:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},fieldLabel:{fontSize:13,fontWeight:600,color:"var(--text-2)"},fieldInputWrap:{display:"flex",alignItems:"center",gap:4,border:"1px solid var(--border)",borderRadius:8,padding:"5px 10px",background:"var(--surface-2)"},fieldInput:{border:"none",background:"none",outline:"none",width:90,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},fieldSuffix:{fontSize:12,color:"var(--text-3)",fontWeight:600},range:{width:"100%",accentColor:"var(--accent)",cursor:"pointer"},resultHero:{textAlign:"center",padding:"14px 0 6px"},resultLabel:{fontSize:12,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em"},resultVal:{fontSize:34,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:2,wordBreak:"break-word"},splitRow:{display:"flex",gap:10,marginTop:10},splitItem:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",background:"var(--surface-2)",borderRadius:10,padding:"10px 6px"},splitV:{fontSize:14.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",wordBreak:"break-word"},splitL:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginTop:2},chartWrap:{marginTop:18},chartBars:{display:"flex",alignItems:"flex-end",gap:3,height:90},chartCol:{flex:1,height:"100%",display:"flex",alignItems:"flex-end"},chartStack:{width:"100%",background:"#9DBFD6",borderRadius:"3px 3px 0 0",minHeight:2,position:"relative",display:"flex",flexDirection:"column",justifyContent:"flex-start"},chartGain:{width:"100%",background:"#3E9E6B",borderRadius:"3px 3px 0 0"},chartAxis:{display:"flex",fontSize:10,color:"var(--text-3)",fontWeight:600,marginTop:6},legend:{display:"flex",gap:16,justifyContent:"center",marginTop:10},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)",fontWeight:600},legendDot:{width:10,height:10,borderRadius:3},emiSplitTrack:{display:"flex",height:12,borderRadius:6,overflow:"hidden",marginTop:16,border:"1px solid var(--border)"},subDivider:{height:1,background:"var(--border)",margin:"20px 0 14px"},subTitle:{fontSize:15,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},segGroup:{marginBottom:12},segLbl:{fontSize:12,fontWeight:600,color:"var(--text-3)",display:"block",marginBottom:6},segRow:{display:"flex",gap:8},seg:{flex:1,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},segOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},segDisabled:{opacity:.4,cursor:"not-allowed"},note:{fontSize:12,lineHeight:1.5,color:"var(--text-3)",background:"var(--surface-2)",borderRadius:9,padding:"9px 11px",marginBottom:12},cmpCard:{background:"var(--surface-2)",borderRadius:12,padding:"12px 14px",marginTop:4},cmpRow:{display:"flex",justifyContent:"space-between",alignItems:"baseline",padding:"6px 0",borderBottom:"1px solid var(--border)",gap:10},cmpLbl:{fontSize:12.5,color:"var(--text-2)",fontWeight:600},cmpVal:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",textAlign:"right"},cmpWas:{fontSize:11,color:"var(--text-3)",fontWeight:500,fontFamily:"'Inter',system-ui,sans-serif"},saveRow:{marginTop:12,background:"rgba(62,158,107,0.12)",color:"#3E9E6B",borderRadius:9,padding:"10px 12px",fontSize:13,fontWeight:700,textAlign:"center"}},Ba=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],wl={Monday:"Mon",Tuesday:"Tue",Wednesday:"Wed",Thursday:"Thu",Friday:"Fri",Saturday:"Sat",Sunday:"Sun"},ho=()=>Ba[(new Date().getDay()+6)%7],lr={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"},Eg=Object.keys(lr),jl=21,Bg="kickstart_tags",Sl=t=>{if(!t)return"";const e=t.trim();if(/^[A-Za-z0-9_-]{11}$/.test(e))return e;const r=e.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return r?r[1]:""},Dg=t=>{if(!t||!String(t).trim())return null;const e=String(t).split(":").map(r=>parseInt(r.trim(),10));return e.some(r=>isNaN(r)||r<0)?null:e.reduce((r,o)=>r*60+o,0)},Ti=t=>{if(t==null)return"";const e=Math.max(0,t|0);return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`},h0=t=>`https://www.youtube.com/embed/${t.youtube_id}?start=${t.start_sec||0}`+(t.end_sec?`&end=${t.end_sec}`:"")+"&autoplay=1&rel=0",y0=()=>({id:null,url:"",title:"",start:"",end:"",days:[ho()],pillars:[],customs:[]});function v0(){const[t,e]=u.useState([]),[r,o]=u.useState([]),[i,s]=u.useState(!1),[l,a]=u.useState({type:"day",value:ho()}),[d,c]=u.useState(null),[p,y]=u.useState(null),[h,w]=u.useState(""),v=u.useCallback(async()=>{try{const[x,U]=await Promise.all([H.getKickstart(),H.getSetting(Bg)]);e(x),o(Array.isArray(U==null?void 0:U.value)?U.value:[])}catch{}s(!0)},[]);u.useEffect(()=>{v()},[v]);const{deleteItem:k,toasts:z,handleUndo:f,handleDismiss:g}=cn(H.deleteKickstart,H.restoreKickstart,v);u.useEffect(()=>{if(!p)return;const x=t.find(A=>A.id===p);if(!x)return;const U=x.end_sec?Math.max(1,x.end_sec-(x.start_sec||0)):1/0;let bt=0;const et=10,D=setInterval(()=>{if(document.hidden)return;const A=U-bt;if(A<=0){clearInterval(D);return}const M=Math.min(et,A);bt+=M,H.addScreenTime("kickstart",Math.round(M)).catch(()=>{})},et*1e3);return()=>clearInterval(D)},[p,t]);const b=x=>{o(x),H.setSetting(Bg,x).catch(()=>{})},C=()=>{const x=h.trim();!x||r.length>=jl||r.includes(x)||(b([...r,x]),c(U=>U&&!U.customs.includes(x)?{...U,customs:[...U.customs,x]}:U),w(""))},S=x=>b(r.filter(U=>U!==x)),B=(x,U)=>c(bt=>({...bt,[x]:bt[x].includes(U)?bt[x].filter(et=>et!==U):[...bt[x],U]})),O=x=>c({id:x.id,url:`https://youtu.be/${x.youtube_id}`,title:x.title,start:Ti(x.start_sec),end:x.end_sec?Ti(x.end_sec):"",days:[...x.days],pillars:[...x.pillars],customs:[...x.customs]}),Y=async()=>{const x=Sl(d.url);if(!x||d.days.length===0||!d.title.trim())return;const U={youtube_id:x,title:d.title.trim(),start_sec:Dg(d.start)||0,end_sec:Dg(d.end),days:d.days,pillars:d.pillars,customs:d.customs};d.id?await H.updateKickstart(d.id,U):await H.createKickstart(U),c(null),v()},F=u.useMemo(()=>t.filter(x=>l.type==="all"?!0:l.type==="day"?x.days.includes(l.value):l.type==="pillar"?x.pillars.includes(l.value):l.type==="custom"?x.customs.includes(l.value):!0),[t,l]),N=(x,U)=>l.type===x&&l.value===U,j=d?[!Sl(d.url)&&"a valid YouTube link",!d.title.trim()&&"a title",d.days.length===0&&"at least one day"].filter(Boolean):[],T=!!d&&j.length===0;return n.jsxs("div",{style:ot.page,children:[n.jsxs("div",{style:ot.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:ot.eyebrow,children:"Anvil · Kickstart"}),n.jsx("h1",{style:ot.h1,children:"Kickstart"}),n.jsxs("div",{style:ot.subhead,children:["Your motivation hub — the right push for ",ho(),"."]})]}),!d&&n.jsxs("button",{onClick:()=>c(y0()),style:ot.addBtn,children:[n.jsx(ce,{size:15})," Add video"]})]}),d&&n.jsxs("div",{style:ot.card,children:[n.jsx("div",{style:ot.cardTitle,children:d.id?"Edit video":"Add video"}),n.jsx("input",{placeholder:"YouTube link (or video ID)",value:d.url,onChange:x=>c({...d,url:x.target.value}),style:ot.input,autoFocus:!0}),d.url&&!Sl(d.url)&&n.jsx("div",{style:ot.warn,children:"Couldn't find a YouTube video ID in that link."}),n.jsx("input",{placeholder:"Title (required)",value:d.title,onChange:x=>c({...d,title:x.target.value}),style:{...ot.input,marginTop:8}}),n.jsxs("div",{style:ot.trimRow,children:[n.jsx(Rh,{size:15,color:"var(--text-3)"}),n.jsxs("label",{style:ot.trimField,children:[n.jsx("span",{style:ot.trimLbl,children:"Start"}),n.jsx("input",{placeholder:"0:30",value:d.start,onChange:x=>c({...d,start:x.target.value}),style:ot.trimInput})]}),n.jsx("span",{style:ot.trimArrow,children:"→"}),n.jsxs("label",{style:ot.trimField,children:[n.jsx("span",{style:ot.trimLbl,children:"End"}),n.jsx("input",{placeholder:"end (optional)",value:d.end,onChange:x=>c({...d,end:x.target.value}),style:ot.trimInput})]})]}),n.jsx("div",{style:ot.hint,children:"Only this trimmed part plays. Use m:ss (e.g. 1:30). Leave End blank to play to the end."}),n.jsxs("div",{style:ot.tagBlock,children:[n.jsxs("div",{style:ot.tagLabel,children:["Days ",n.jsx("span",{style:ot.req,children:"required"})]}),n.jsx("div",{style:ot.chipRow,children:Ba.map(x=>n.jsx("button",{onClick:()=>B("days",x),style:{...ot.chip,...d.days.includes(x)?ot.chipOnDark:{}},children:wl[x]},x))})]}),n.jsxs("div",{style:ot.tagBlock,children:[n.jsxs("div",{style:ot.tagLabel,children:["Pillars ",n.jsx("span",{style:ot.opt,children:"optional"})]}),n.jsx("div",{style:ot.chipRow,children:Eg.map(x=>{const U=d.pillars.includes(x);return n.jsxs("button",{onClick:()=>B("pillars",x),style:{...ot.chip,...U?{background:lr[x],color:"#fff",borderColor:lr[x]}:{}},children:[n.jsx("span",{style:{...ot.dot,background:U?"#fff":lr[x]}}),x]},x)})})]}),n.jsxs("div",{style:ot.tagBlock,children:[n.jsxs("div",{style:ot.tagLabel,children:["Custom tags ",n.jsxs("span",{style:ot.opt,children:["optional · ",r.length,"/",jl]})]}),n.jsxs("div",{style:ot.chipRow,children:[r.map(x=>n.jsxs("span",{style:{...ot.chip,...d.customs.includes(x)?ot.chipOnAccent:{},paddingRight:4},children:[n.jsx("button",{onClick:()=>B("customs",x),style:ot.chipInner,children:x}),n.jsx("button",{onClick:()=>S(x),style:ot.chipX,title:"Delete tag",children:n.jsx(jt,{size:11})})]},x)),r.length===0&&n.jsx("span",{style:ot.muted,children:"No custom tags yet."})]}),r.length<jl&&n.jsxs("div",{style:ot.newTagRow,children:[n.jsx("input",{placeholder:"New custom tag…",value:h,onChange:x=>w(x.target.value),onKeyDown:x=>x.key==="Enter"&&C(),style:{...ot.input,padding:"7px 10px"}}),n.jsx("button",{onClick:C,style:ot.smallBtn,children:n.jsx(ce,{size:14})})]})]}),!T&&n.jsxs("div",{style:ot.warn,children:["Add ",j.join(", ")," to save."]}),n.jsxs("div",{style:ot.formActions,children:[n.jsxs("button",{onClick:()=>c(null),style:ot.cancelBtn,children:[n.jsx(jt,{size:14})," Cancel"]}),n.jsxs("button",{onClick:Y,disabled:!T,style:{...ot.saveBtn,...T?{}:ot.saveDisabled},children:[n.jsx(zt,{size:15})," ",d.id?"Save":"Add video"]})]})]}),n.jsxs("div",{style:ot.filterCard,children:[n.jsx("button",{onClick:()=>a({type:"all"}),style:{...ot.fChip,...l.type==="all"?ot.fChipOnDark:{}},children:"All"}),n.jsx("span",{style:ot.fDivider}),Ba.map(x=>n.jsxs("button",{onClick:()=>a({type:"day",value:x}),style:{...ot.fChip,...N("day",x)?ot.fChipOnDark:{},...x===ho()?ot.fToday:{}},children:[wl[x],x===ho()?" ·":""]},x)),n.jsx("span",{style:ot.fDivider}),Eg.map(x=>n.jsxs("button",{onClick:()=>a({type:"pillar",value:x}),style:{...ot.fChip,...N("pillar",x)?{background:lr[x],color:"#fff",borderColor:lr[x]}:{}},children:[n.jsx("span",{style:{...ot.dot,background:N("pillar",x)?"#fff":lr[x]}}),x]},x)),r.length>0&&n.jsx("span",{style:ot.fDivider}),r.map(x=>n.jsxs("button",{onClick:()=>a({type:"custom",value:x}),style:{...ot.fChip,...N("custom",x)?ot.fChipOnAccent:{}},children:[n.jsx(Mh,{size:11})," ",x]},x))]}),i?F.length===0?n.jsx("div",{style:ot.empty,children:t.length===0?"No videos yet — add your first motivation clip.":"No videos for this tag."}):n.jsx("div",{style:ot.grid,children:F.map(x=>n.jsxs("div",{style:ot.videoCard,children:[n.jsx("div",{style:ot.thumbWrap,children:p===x.id?n.jsx("iframe",{src:h0(x),title:x.title||x.youtube_id,style:ot.iframe,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):n.jsxs("button",{onClick:()=>y(x.id),style:ot.thumbBtn,children:[n.jsx("img",{src:`https://img.youtube.com/vi/${x.youtube_id}/hqdefault.jpg`,alt:"",style:ot.thumb}),n.jsx("span",{style:ot.playOverlay,children:n.jsx(ap,{size:22,color:"#fff",fill:"#fff"})}),n.jsxs("span",{style:ot.trimBadge,children:[Ti(x.start_sec),x.end_sec?` – ${Ti(x.end_sec)}`:"+"]})]})}),n.jsxs("div",{style:ot.videoBody,children:[n.jsx("div",{style:ot.videoTitle,children:x.title||"Untitled clip"}),n.jsxs("div",{style:ot.tagWrap,children:[x.days.map(U=>n.jsx("span",{style:ot.dayTag,children:wl[U]},U)),x.pillars.map(U=>n.jsx("span",{style:{...ot.pillTag,color:lr[U]||"var(--text-2)",borderColor:lr[U]||"var(--border)"},children:U},U)),x.customs.map(U=>n.jsx("span",{style:ot.customTag,children:U},U))]}),n.jsxs("div",{style:ot.cardActions,children:[n.jsx("button",{onClick:()=>O(x),style:ot.iconBtn,title:"Edit",children:n.jsx(pe,{size:13})}),n.jsx("button",{onClick:()=>k(x.id,x.title||"video"),style:ot.iconBtn,title:"Delete",children:n.jsx(jt,{size:14})})]})]})]},x.id))}):n.jsx("div",{style:ot.muted,children:"Loading…"}),n.jsx(gn,{toasts:z,onUndo:f,onDismiss:g})]})}const ot={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:1e3,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},input:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},warn:{fontSize:11.5,color:"#C2773B",marginTop:5,fontWeight:600},hint:{fontSize:11.5,color:"var(--text-3)",marginTop:6,lineHeight:1.4},trimRow:{display:"flex",alignItems:"flex-end",gap:10,marginTop:10},trimField:{display:"flex",flexDirection:"column",gap:4,flex:1},trimLbl:{fontSize:11,color:"var(--text-2)",fontWeight:600},trimInput:{border:"1px solid var(--border)",borderRadius:8,padding:"8px 10px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},trimArrow:{color:"var(--text-3)",paddingBottom:9},tagBlock:{marginTop:14},tagLabel:{fontSize:12,fontWeight:700,color:"var(--text-2)",marginBottom:7},req:{fontSize:10,fontWeight:700,color:"#C2536B",textTransform:"uppercase",marginLeft:6},opt:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",marginLeft:6},chipRow:{display:"flex",gap:6,flexWrap:"wrap"},chip:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},chipOnDark:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},chipOnAccent:{background:"var(--accent)",color:"#fff",borderColor:"var(--accent)"},chipInner:{border:"none",background:"none",color:"inherit",cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:600,padding:0},chipX:{border:"none",background:"rgba(0,0,0,0.12)",color:"inherit",cursor:"pointer",display:"grid",placeItems:"center",borderRadius:"50%",width:16,height:16,padding:0},newTagRow:{display:"flex",gap:6,marginTop:8,maxWidth:280},smallBtn:{border:"none",background:"var(--accent)",color:"#fff",width:34,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},dot:{width:8,height:8,borderRadius:"50%",flexShrink:0,display:"inline-block"},formActions:{display:"flex",gap:8,marginTop:16},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:"var(--accent)",color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"},filterCard:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:12,marginBottom:18},fChip:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},fChipOnDark:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},fChipOnAccent:{background:"var(--accent)",color:"#fff",borderColor:"var(--accent)"},fToday:{borderColor:"var(--accent)",borderWidth:2},fDivider:{width:1,alignSelf:"stretch",background:"var(--border)",margin:"0 2px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:14},videoCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},thumbWrap:{position:"relative",width:"100%",aspectRatio:"16 / 9",background:"#000"},thumbBtn:{border:"none",padding:0,margin:0,cursor:"pointer",width:"100%",height:"100%",position:"relative",display:"block",background:"#000"},thumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},playOverlay:{position:"absolute",inset:0,display:"grid",placeItems:"center",background:"rgba(0,0,0,0.28)"},trimBadge:{position:"absolute",bottom:8,right:8,background:"rgba(0,0,0,0.75)",color:"#fff",fontSize:11,fontWeight:700,padding:"2px 7px",borderRadius:6,fontFamily:"'Fraunces',Georgia,serif"},iframe:{width:"100%",height:"100%",border:"none",display:"block"},videoBody:{padding:"12px 13px",display:"flex",flexDirection:"column",gap:8},videoTitle:{fontSize:14,fontWeight:700},tagWrap:{display:"flex",gap:5,flexWrap:"wrap"},dayTag:{fontSize:10,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",padding:"2px 7px",borderRadius:8},pillTag:{fontSize:10,fontWeight:700,border:"1px solid",borderRadius:8,padding:"2px 7px"},customTag:{fontSize:10,fontWeight:700,color:"var(--accent)",background:"color-mix(in srgb, var(--accent) 14%, transparent)",padding:"2px 7px",borderRadius:8},cardActions:{display:"flex",gap:4,justifyContent:"flex-end"},iconBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"}},Cp=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,Rg=()=>Cp(new Date),Fg=(t,e)=>{const r=new Date(t+"T00:00:00");return r.setDate(r.getDate()+e),Cp(r)},Ag=t=>new Date(t+"T00:00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",year:"numeric"}),x0=t=>{if(!t)return"";const e=t.trim();if(/^[A-Za-z0-9_-]{11}$/.test(e))return e;const r=e.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return r?r[1]:""},k0=t=>new Promise((e,r)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:l,height:a}=i;l>a&&l>900?(a=a*900/l,l=900):a>900&&(l=l*900/a,a=900);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(i,0,0,l,a),e(d.toDataURL("image/jpeg",.82))},i.onerror=r,i.src=o.result},o.onerror=r,o.readAsDataURL(t)});function w0(){const[t,e]=u.useState([]),[r,o]=u.useState(!1),[i,s]=u.useState(null),[l,a]=u.useState(!1),[d,c]=u.useState({title:"",image:""}),[p,y]=u.useState(""),[h,w]=u.useState(!0),[v,k]=u.useState(null),z=u.useCallback(async()=>{try{e(await H.getGoldenGoals())}catch{}o(!0)},[]);u.useEffect(()=>{z()},[z]),u.useEffect(()=>{H.getSetting("golden_music").then(S=>y(x0((S==null?void 0:S.value)||""))).catch(()=>{})},[]);const f=async()=>{if(!d.title.trim())return;const S=await H.createGolden({title:d.title.trim(),image:d.image});c({title:"",image:""}),a(!1),await z(),s(S.id)},g=async(S,B)=>{var Y;const O=(Y=S.target.files)==null?void 0:Y[0];if(O)try{B(await k0(O))}catch{}},b=t.filter(S=>!S.achieved),C=t.filter(S=>S.achieved);return i?n.jsxs("div",{style:it.page,children:[n.jsx(C0,{musicId:p,on:h}),n.jsx(j0,{goalId:i,onBack:()=>s(null),onReload:z,onCelebrate:(S,B)=>k({title:S,days:B}),pickImage:g,musicId:p,musicOn:h,setMusicOn:w}),v&&n.jsx(S0,{data:v,onClose:()=>k(null)})]}):n.jsxs("div",{style:it.page,children:[n.jsxs("div",{style:it.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:it.eyebrow,children:"Anvil · Golden Book"}),n.jsx("h1",{style:it.h1,children:"Golden Book"}),n.jsx("div",{style:it.subhead,children:"Write your dreams into being — a little every day."})]}),!l&&n.jsxs("button",{onClick:()=>a(!0),style:it.addBtn,children:[n.jsx(ce,{size:15})," New dream"]})]}),l&&n.jsxs("div",{style:it.card,children:[n.jsx("div",{style:it.cardTitle,children:"Manifest a new dream"}),n.jsx("textarea",{autoFocus:!0,placeholder:"Write your dream as if it's already true…",value:d.title,onChange:S=>c({...d,title:S.target.value}),style:it.textarea}),n.jsxs("label",{style:it.photoPick,children:[d.image?n.jsx("img",{src:d.image,alt:"",style:it.photoPreview}):n.jsxs("span",{style:it.photoEmpty,children:[n.jsx(Fs,{size:18})," Add a photo"]}),n.jsx("input",{type:"file",accept:"image/*",onChange:S=>g(S,B=>c({...d,image:B})),style:{display:"none"}})]}),n.jsxs("div",{style:it.formActions,children:[n.jsxs("button",{onClick:()=>{a(!1),c({title:"",image:""})},style:it.cancelBtn,children:[n.jsx(jt,{size:14})," Cancel"]}),n.jsxs("button",{onClick:f,disabled:!d.title.trim(),style:{...it.saveBtn,...d.title.trim()?{}:it.saveDisabled},children:[n.jsx(zt,{size:15})," Create"]})]})]}),r?n.jsxs(n.Fragment,{children:[b.length===0&&C.length===0&&!l&&n.jsx("div",{style:it.empty,children:"No dreams yet. Add your first one and revisit it daily."}),b.length>0&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:it.sectionTitle,children:[n.jsx(Jo,{size:15,color:"#C9A227"})," Manifesting ",n.jsx("span",{style:it.badge,children:b.length})]}),n.jsx("div",{style:it.grid,children:b.map(S=>n.jsx(Mg,{g:S,onOpen:()=>s(S.id)},S.id))})]}),C.length>0&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{...it.sectionTitle,marginTop:22},children:[n.jsx(on,{size:15,color:"#4C9A6B"})," Manifested ",n.jsx("span",{style:it.badge,children:C.length})]}),n.jsx("div",{style:it.grid,children:C.map(S=>n.jsx(Mg,{g:S,onOpen:()=>s(S.id),achieved:!0},S.id))})]})]}):n.jsx("div",{style:it.muted,children:"Loading…"})]})}function Mg({g:t,onOpen:e,achieved:r}){return n.jsxs("button",{onClick:e,style:{...it.goalCard,...r?{opacity:.96}:{}},children:[n.jsxs("div",{style:it.thumbWrap,children:[t.image?n.jsx("img",{src:t.image,alt:"",style:it.thumb}):n.jsx("div",{style:it.thumbEmpty,children:n.jsx(Jo,{size:26,color:"var(--text-3)"})}),r&&n.jsx("span",{style:it.stamp,children:"✦ Manifested"})]}),n.jsxs("div",{style:it.goalBody,children:[n.jsx("div",{style:it.goalTitle,children:t.title}),n.jsxs("div",{style:it.goalMeta,children:[r?n.jsxs("span",{style:{...it.metaPill,color:"#4C9A6B",background:"rgba(76,154,107,0.12)"},children:[n.jsx(on,{size:12})," ",t.days_to_manifest!=null?`in ${t.days_to_manifest} day${t.days_to_manifest===1?"":"s"}`:"done"]}):n.jsxs("span",{style:{...it.metaPill,color:"#C2773B",background:"rgba(194,119,59,0.12)"},children:[n.jsx(Jn,{size:12})," ",t.streak," day streak"]}),n.jsxs("span",{style:it.metaDim,children:[t.total_days," entr",t.total_days===1?"y":"ies"]})]})]})]})}function j0({goalId:t,onBack:e,onReload:r,onCelebrate:o,pickImage:i,musicId:s,musicOn:l,setMusicOn:a}){const[d,c]=u.useState(null),[p,y]=u.useState({}),[h,w]=u.useState(Rg()),[v,k]=u.useState(""),[z,f]=u.useState(null),g=Rg(),b=u.useCallback(async()=>{const T=await H.getGoldenGoal(t);c(T);const x={};T.entries.forEach(U=>{x[U.date]=U.text}),y(x),k(x[g]||"")},[t,g]);if(u.useEffect(()=>{b()},[b]),!d)return n.jsx("div",{style:it.muted,children:"Loading…"});const C=h===g,S=h>d.created_date,B=h<g,O=async()=>{await H.upsertGoldenEntry(t,{date:g,text:v}),await b(),r()},Y=async()=>{const T=await H.achieveGolden(t);o(d.title,T.days_to_manifest),await b(),r()},F=async()=>{await H.unachieveGolden(t),await b(),r()},N=async()=>{z.trim()&&(await H.updateGolden(t,{title:z.trim()}),f(null),await b(),r())},j=T=>H.updateGolden(t,{image:T}).then(()=>{b(),r()});return n.jsxs(n.Fragment,{children:[n.jsxs("button",{onClick:e,style:it.backBtn,children:[n.jsx(Zb,{size:16})," All dreams"]}),n.jsxs("div",{style:it.detailHero,children:[n.jsxs("label",{style:it.heroPhoto,children:[d.image?n.jsx("img",{src:d.image,alt:"",style:it.heroImg}):n.jsxs("span",{style:it.photoEmpty,children:[n.jsx(Fs,{size:20})," Add a photo"]}),n.jsxs("span",{style:it.photoEdit,children:[n.jsx(pe,{size:12})," Edit photo"]}),n.jsx("input",{type:"file",accept:"image/*",onChange:T=>i(T,j),style:{display:"none"}})]}),n.jsxs("div",{style:it.heroInfo,children:[d.achieved&&n.jsxs("span",{style:it.heroStamp,children:["✦ Manifested",d.days_to_manifest!=null?` in ${d.days_to_manifest} day${d.days_to_manifest===1?"":"s"}`:""]}),z!==null?n.jsxs("div",{style:{display:"flex",gap:6,width:"100%"},children:[n.jsx("textarea",{autoFocus:!0,value:z,onChange:T=>f(T.target.value),style:{...it.textarea,minHeight:60}}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[n.jsx("button",{onClick:N,style:it.iconSave,children:n.jsx(zt,{size:14})}),n.jsx("button",{onClick:()=>f(null),style:it.iconCancel,children:n.jsx(jt,{size:14})})]})]}):n.jsxs("div",{style:it.heroTitleRow,children:[n.jsx("div",{style:it.heroTitle,children:d.title}),n.jsx("button",{onClick:()=>f(d.title),style:it.ghostBtn,title:"Edit",children:n.jsx(pe,{size:13})})]}),n.jsxs("div",{style:it.heroStats,children:[n.jsxs("span",{style:{...it.metaPill,color:"#C2773B",background:"rgba(194,119,59,0.12)"},children:[n.jsx(Jn,{size:13})," ",d.streak," day streak"]}),n.jsxs("span",{style:it.metaDim,children:[d.total_days," entr",d.total_days===1?"y":"ies"]}),n.jsxs("span",{style:it.metaDim,children:["since ",Ag(d.created_date)]})]})]})]}),n.jsxs("div",{style:it.writeCard,children:[n.jsx("div",{style:it.tuneRow,children:s?n.jsxs("button",{onClick:()=>a(T=>!T),style:{...it.tuneBtn,...l?it.tuneOn:{}},children:[l?n.jsx(sp,{size:14}):n.jsx(lp,{size:14})," Soft tunes"]}):n.jsx("span",{style:it.tuneHint,children:"Add a track in Settings → Music"})}),n.jsxs("div",{style:it.writeNav,children:[n.jsx("button",{onClick:()=>w(T=>Fg(T,-1)),disabled:!S,style:{...it.navBtn,...S?{}:it.navDisabled},children:n.jsx(qn,{size:16})}),n.jsx("div",{style:it.writeDate,children:C?"Today":Ag(h)}),n.jsx("button",{onClick:()=>w(T=>Fg(T,1)),disabled:!B,style:{...it.navBtn,...B?{}:it.navDisabled},children:n.jsx(dn,{size:16})})]}),C&&!d.achieved?n.jsxs(n.Fragment,{children:[n.jsx("textarea",{value:v,onChange:T=>k(T.target.value),placeholder:"Write it again today, as if it's already yours…",style:it.writeArea}),n.jsxs("button",{onClick:O,style:it.writeSave,children:[n.jsx(zt,{size:15})," Save today's entry"]})]}):n.jsx("div",{style:it.readEntry,children:p[h]?n.jsxs(n.Fragment,{children:[n.jsx(dp,{size:16,color:"var(--text-3)"}),n.jsx("p",{style:it.readText,children:p[h]})]}):n.jsx("div",{style:it.muted,children:"Nothing written on this day."})})]}),d.achieved?n.jsx("button",{onClick:F,style:it.unmanifestBtn,children:"Undo manifested"}):n.jsxs("button",{onClick:Y,style:it.manifestBtn,children:[n.jsx(Jo,{size:16})," Mark as manifested"]})]})}function S0({data:t,onClose:e}){return n.jsx("div",{style:it.celebOverlay,onClick:e,children:n.jsxs("div",{style:it.celebBox,onClick:r=>r.stopPropagation(),children:[n.jsx("div",{style:it.celebEmoji,children:"✨🌟✨"}),n.jsx("div",{style:it.celebTitle,children:"It's happening!"}),n.jsxs("div",{style:it.celebDream,children:['"',t.title,'"']}),n.jsxs("div",{style:it.celebSub,children:[t.days!=null?`Manifested in ${t.days} day${t.days===1?"":"s"}.`:"Manifested."," The universe delivered. 🙏"]}),n.jsx("button",{onClick:e,style:it.celebBtn,children:"Wonderful"})]})})}function C0({musicId:t,on:e}){return!t||!e?null:n.jsx("iframe",{title:"golden-music",src:`https://www.youtube.com/embed/${t}?autoplay=1&loop=1&playlist=${t}&controls=0&modestbranding=1&playsinline=1`,allow:"autoplay; encrypted-media",style:{position:"fixed",left:-1e4,top:0,width:320,height:180,border:"none"}})}const Hr="#C9A227",it={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:860,margin:"0 auto",position:"relative"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:Hr,color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},textarea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"11px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:70,resize:"vertical",lineHeight:1.5},photoPick:{display:"block",marginTop:10,cursor:"pointer",borderRadius:12,overflow:"hidden",border:"1px dashed var(--border)"},photoPreview:{width:"100%",maxHeight:220,objectFit:"cover",display:"block"},photoEmpty:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"26px 0",color:"var(--text-3)",fontSize:13,fontWeight:600},formActions:{display:"flex",gap:8,marginTop:14},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:Hr,color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:12},badge:{fontSize:11,fontWeight:700,background:"var(--hover)",color:"var(--text-2)",borderRadius:10,padding:"1px 7px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:14},goalCard:{textAlign:"left",border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,overflow:"hidden",cursor:"pointer",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",padding:0,fontFamily:"inherit",display:"flex",flexDirection:"column"},thumbWrap:{position:"relative",width:"100%",aspectRatio:"16 / 10",background:"var(--surface-2)"},thumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},thumbEmpty:{width:"100%",height:"100%",display:"grid",placeItems:"center"},stamp:{position:"absolute",top:8,right:8,transform:"rotate(6deg)",background:"rgba(76,154,107,0.95)",color:"#fff",fontSize:11,fontWeight:800,letterSpacing:"0.04em",padding:"3px 9px",borderRadius:6,border:"1.5px solid #fff",textTransform:"uppercase"},goalBody:{padding:"11px 13px",display:"flex",flexDirection:"column",gap:8},goalTitle:{fontSize:14,fontWeight:600,lineHeight:1.35,display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"},goalMeta:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},metaPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11.5,fontWeight:700,padding:"2px 8px",borderRadius:10},metaDim:{fontSize:11,color:"var(--text-3)",fontWeight:500},backBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit",marginBottom:16},detailHero:{display:"flex",flexDirection:"column",gap:14,marginBottom:16},heroPhoto:{position:"relative",width:"100%",borderRadius:14,overflow:"hidden",border:"1px solid var(--border)",cursor:"pointer",background:"var(--surface-2)",display:"flex",alignItems:"center",justifyContent:"center",minHeight:120},heroImg:{width:"100%",maxHeight:"62vh",objectFit:"contain",display:"block"},photoEdit:{position:"absolute",bottom:8,right:8,display:"flex",alignItems:"center",gap:5,background:"rgba(0,0,0,0.6)",color:"#fff",fontSize:11,fontWeight:600,padding:"4px 8px",borderRadius:7},heroInfo:{display:"flex",flexDirection:"column",gap:10,alignItems:"center",textAlign:"center"},heroStamp:{alignSelf:"center",background:"rgba(76,154,107,0.14)",color:"#4C9A6B",fontSize:12,fontWeight:800,padding:"4px 10px",borderRadius:8,letterSpacing:"0.03em"},heroTitleRow:{display:"flex",alignItems:"flex-start",gap:8,justifyContent:"center"},heroTitle:{fontSize:23,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.35},heroStats:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap",justifyContent:"center"},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",flexShrink:0},iconSave:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},iconCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},writeCard:{background:"var(--surface)",borderRadius:14,padding:16,border:"1px solid var(--border)",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},tuneRow:{display:"flex",justifyContent:"flex-end",marginBottom:10},tuneBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 12px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tuneOn:{background:Hr,color:"#fff",borderColor:Hr},tuneHint:{fontSize:11,color:"var(--text-3)",fontWeight:500},writeNav:{display:"flex",alignItems:"center",justifyContent:"center",gap:14,marginBottom:12},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center"},navDisabled:{opacity:.35,cursor:"not-allowed"},writeDate:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:150,textAlign:"center"},writeArea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"12px",fontSize:15,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:120,resize:"vertical",lineHeight:1.6},writeSave:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",marginTop:10,border:"none",background:Hr,color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},readEntry:{display:"flex",gap:8,padding:"6px 2px"},readText:{fontSize:15,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.6,margin:0,whiteSpace:"pre-wrap"},manifestBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,width:"100%",border:"none",background:"linear-gradient(135deg,#C9A227,#E0BD45)",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:800,cursor:"pointer",fontFamily:"inherit",boxShadow:"0 2px 10px rgba(201,162,39,0.35)"},unmanifestBtn:{display:"block",margin:"0 auto",border:"none",background:"none",color:"var(--text-3)",fontSize:12,fontWeight:600,cursor:"pointer",textDecoration:"underline",fontFamily:"inherit"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.6)",zIndex:200,display:"grid",placeItems:"center",padding:16},celebBox:{background:"var(--surface)",color:"var(--text)",borderRadius:20,padding:"36px 30px",textAlign:"center",maxWidth:360,boxShadow:"0 12px 48px rgba(0,0,0,0.3)"},celebEmoji:{fontSize:40,marginBottom:10},celebTitle:{fontSize:24,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginBottom:10,color:Hr},celebDream:{fontSize:15,fontStyle:"italic",fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.5,marginBottom:10},celebSub:{fontSize:13.5,color:"var(--text-2)",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:Hr,color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},Cl=[{id:"meditation",label:"Meditation Hub",icon:ch,color:"#8268B0"},{id:"visualization",label:"Visualization",icon:bs,color:"#3A7CA5"}],Wg=t=>{if(!t)return"";const e=t.trim();if(/^[A-Za-z0-9_-]{11}$/.test(e))return e;const r=e.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return r?r[1]:""},I0=t=>new Promise((e,r)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:l,height:a}=i;l>a&&l>1e3?(a=a*1e3/l,l=1e3):a>1e3&&(l=l*1e3/a,a=1e3);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(i,0,0,l,a),e(d.toDataURL("image/jpeg",.82))},i.onerror=r,i.src=o.result},o.onerror=r,o.readAsDataURL(t)}),z0=t=>({id:null,kind:t,title:"",url:"",image:""});function T0(){const[t,e]=u.useState("meditation"),[r,o]=u.useState([]),[i,s]=u.useState(!1),[l,a]=u.useState(null),[d,c]=u.useState(null),p=u.useCallback(async()=>{try{o(await H.getMedia())}catch{}s(!0)},[]);u.useEffect(()=>{p()},[p]);const{deleteItem:y,toasts:h,handleUndo:w,handleDismiss:v}=cn(H.deleteMedia,H.restoreMedia,p);u.useEffect(()=>{if(!d)return;const B=10,O=setInterval(()=>{document.hidden||H.addScreenTime("mindscape",B).catch(()=>{})},B*1e3);return()=>clearInterval(O)},[d]);const k=Cl.find(B=>B.id===t),z=r.filter(B=>B.kind===t),f=B=>a({id:B.id,kind:B.kind,title:B.title,url:`https://youtu.be/${B.youtube_id}`,image:B.image}),g=async B=>{var Y;const O=(Y=B.target.files)==null?void 0:Y[0];if(O){try{const F=await I0(O);a(N=>({...N,image:F}))}catch{}B.target.value=""}},b=l?[!l.title.trim()&&"a title",!l.image&&"an image",!Wg(l.url)&&"a valid YouTube link"].filter(Boolean):[],C=!!l&&b.length===0,S=async()=>{if(!C)return;const B={kind:l.kind,title:l.title.trim(),image:l.image,youtube_id:Wg(l.url)};l.id?await H.updateMedia(l.id,B):await H.createMedia(B),a(null),p()};return n.jsxs("div",{style:Tt.page,children:[d&&n.jsx("iframe",{title:"mindscape-audio",src:`https://www.youtube.com/embed/${d.youtube_id}?autoplay=1&controls=0&modestbranding=1&playsinline=1`,allow:"autoplay; encrypted-media",style:{position:"fixed",left:-1e4,top:0,width:320,height:180,border:"none"}}),n.jsxs("div",{style:Tt.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:Tt.eyebrow,children:"Anvil · Mindscape"}),n.jsx("h1",{style:Tt.h1,children:"Mindscape"}),n.jsx("div",{style:Tt.subhead,children:"Close your eyes and listen — guided meditation and visualization."})]}),!l&&n.jsxs("button",{onClick:()=>a(z0(t)),style:{...Tt.addBtn,background:k.color},children:[n.jsx(ce,{size:15})," Add"]})]}),n.jsx("div",{style:Tt.tabs,children:Cl.map(B=>{const O=B.icon,Y=t===B.id;return n.jsxs("button",{onClick:()=>{e(B.id),a(null)},style:{...Tt.tab,...Y?{background:B.color,color:"#fff",borderColor:B.color}:{}},children:[n.jsx(O,{size:15})," ",B.label]},B.id)})}),l&&n.jsxs("div",{style:Tt.card,children:[n.jsx("div",{style:Tt.cardTitle,children:l.id?"Edit":`New ${Cl.find(B=>B.id===l.kind).label}`}),n.jsx("input",{placeholder:"YouTube link (plays as audio only)",value:l.url,onChange:B=>a({...l,url:B.target.value}),style:Tt.input,autoFocus:!0}),n.jsx("input",{placeholder:"Title (required)",value:l.title,onChange:B=>a({...l,title:B.target.value}),style:{...Tt.input,marginTop:8}}),n.jsxs("label",{style:Tt.photoPick,children:[l.image?n.jsx("img",{src:l.image,alt:"",style:Tt.photoPreview}):n.jsxs("span",{style:Tt.photoEmpty,children:[n.jsx(Fs,{size:18})," Add cover image (required)"]}),n.jsx("input",{type:"file",accept:"image/*",onChange:g,style:{display:"none"}})]}),!C&&n.jsxs("div",{style:Tt.warn,children:["Add ",b.join(", ")," to save."]}),n.jsxs("div",{style:Tt.formActions,children:[n.jsxs("button",{onClick:()=>a(null),style:Tt.cancelBtn,children:[n.jsx(jt,{size:14})," Cancel"]}),n.jsxs("button",{onClick:S,disabled:!C,style:{...Tt.saveBtn,background:C?k.color:"var(--border)",color:C?"#fff":"var(--text-3)",cursor:C?"pointer":"not-allowed"},children:[n.jsx(zt,{size:15})," ",l.id?"Save":"Add"]})]})]}),i?z.length===0?n.jsxs("div",{style:Tt.empty,children:["Nothing here yet — add a ",k.label.toLowerCase()," track."]}):n.jsx("div",{style:Tt.grid,children:z.map(B=>{const O=(d==null?void 0:d.id)===B.id;return n.jsxs("div",{style:Tt.mediaCard,children:[n.jsxs("button",{onClick:()=>c(O?null:B),style:Tt.coverBtn,title:O?"Pause":"Play",children:[n.jsx("img",{src:B.image,alt:"",style:Tt.cover}),n.jsx("span",{style:{...Tt.playOverlay,background:O?"rgba(0,0,0,0.45)":"rgba(0,0,0,0.28)"},children:n.jsx("span",{style:{...Tt.playCircle,background:k.color},children:O?n.jsx(Eh,{size:20,color:"#fff",fill:"#fff"}):n.jsx(ap,{size:20,color:"#fff",fill:"#fff"})})}),O&&n.jsxs("span",{style:Tt.nowPlaying,children:[n.jsx(sp,{size:11})," Playing"]})]}),n.jsxs("div",{style:Tt.mediaBody,children:[n.jsx("div",{style:Tt.mediaTitle,children:B.title}),n.jsxs("div",{style:Tt.cardActions,children:[n.jsx("button",{onClick:()=>f(B),style:Tt.iconBtn,title:"Edit",children:n.jsx(pe,{size:13})}),n.jsx("button",{onClick:()=>{(d==null?void 0:d.id)===B.id&&c(null),y(B.id,B.title)},style:Tt.iconBtn,title:"Delete",children:n.jsx(jt,{size:14})})]})]})]},B.id)})}):n.jsx("div",{style:Tt.muted,children:"Loading…"}),n.jsx(gn,{toasts:h,onUndo:w,onDismiss:v})]})}const Tt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:900,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},tabs:{display:"flex",gap:8,marginBottom:18,flexWrap:"wrap"},tab:{display:"flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:20,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none"},photoPick:{display:"block",marginTop:10,cursor:"pointer",borderRadius:12,overflow:"hidden",border:"1px dashed var(--border)"},photoPreview:{width:"100%",maxHeight:200,objectFit:"cover",display:"block"},photoEmpty:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"26px 0",color:"var(--text-3)",fontSize:13,fontWeight:600},warn:{fontSize:12,color:"#C2773B",marginTop:8,fontWeight:600},formActions:{display:"flex",gap:8,marginTop:14},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,fontFamily:"inherit"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gap:16},mediaCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},coverBtn:{position:"relative",border:"none",padding:0,cursor:"pointer",display:"block",width:"100%",aspectRatio:"1",background:"var(--surface-2)"},cover:{width:"100%",height:"100%",objectFit:"cover",display:"block"},playOverlay:{position:"absolute",inset:0,display:"grid",placeItems:"center"},playCircle:{width:46,height:46,borderRadius:"50%",display:"grid",placeItems:"center",boxShadow:"0 2px 10px rgba(0,0,0,0.3)"},nowPlaying:{position:"absolute",bottom:8,left:8,display:"flex",alignItems:"center",gap:4,background:"rgba(0,0,0,0.65)",color:"#fff",fontSize:11,fontWeight:700,padding:"3px 8px",borderRadius:7},mediaBody:{padding:"12px 14px",display:"flex",alignItems:"flex-start",gap:8},mediaTitle:{flex:1,fontSize:14.5,fontWeight:600,lineHeight:1.4,minWidth:0,wordBreak:"break-word"},cardActions:{display:"flex",gap:2,flexShrink:0,marginTop:1},iconBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"}},Da=[{id:"sandstone",name:"Sandstone",description:"Warm editorial light — the original Anvil look.",dark:!1,swatch:["#F7F6F3","#4C9A6B","#26241F"],vars:{"--bg":"#F7F6F3","--surface":"#FFFFFF","--surface-2":"#FAFAF8","--hover":"#F2F1EC","--border":"#ECEAE3","--text":"#26241F","--text-2":"#6B675E","--text-3":"#9A968C","--accent":"#4C9A6B","--accent-strong":"#26241F","--accent-2":"#3A352C"}},{id:"midnight",name:"Midnight",description:"Deep low-glare dark mode for night owls and focus.",dark:!0,swatch:["#161513","#6FB58C","#ECEAE3"],vars:{"--bg":"#161513","--surface":"#211F1C","--surface-2":"#1B1A17","--hover":"#2B2924","--border":"#34312B","--text":"#ECEAE3","--text-2":"#B6B1A6","--text-3":"#8A857A","--accent":"#6FB58C","--accent-strong":"#2E6F4B","--accent-2":"#245C3E"}},{id:"blossom",name:"Blossom",description:"Soft rose & blush — gentle, warm, and feminine.",dark:!1,swatch:["#FFF5F8","#E0608E","#B23A6B"],vars:{"--bg":"#FFF5F8","--surface":"#FFFFFF","--surface-2":"#FFF0F4","--hover":"#FDE7EE","--border":"#F6D9E2","--text":"#3D2230","--text-2":"#7A5466","--text-3":"#B08799","--accent":"#E0608E","--accent-strong":"#B23A6B","--accent-2":"#9C2F5C"}},{id:"tide",name:"Tide",description:"Calm professional blues — clean and focused.",dark:!1,swatch:["#F1F6FA","#2E86C1","#1C4E73"],vars:{"--bg":"#F1F6FA","--surface":"#FFFFFF","--surface-2":"#ECF3F9","--hover":"#E2EEF6","--border":"#D5E3EE","--text":"#13283A","--text-2":"#4A6275","--text-3":"#8AA0B0","--accent":"#2E86C1","--accent-strong":"#1C4E73","--accent-2":"#163E5C"}},{id:"velocity",name:"Velocity",description:"High-energy sport — crisp slate with electric orange.",dark:!1,swatch:["#F4F5F7","#F4511E","#1F2A37"],vars:{"--bg":"#F4F5F7","--surface":"#FFFFFF","--surface-2":"#EEF0F3","--hover":"#E7EAEE","--border":"#DCE0E6","--text":"#18202B","--text-2":"#515B68","--text-3":"#8B95A1","--accent":"#F4511E","--accent-strong":"#1F2A37","--accent-2":"#16202B"}},{id:"evergreen",name:"Evergreen",description:"Earthy forest greens — grounded and natural.",dark:!1,swatch:["#F2F6F1","#3E8E52","#2A4A30"],vars:{"--bg":"#F2F6F1","--surface":"#FFFFFF","--surface-2":"#ECF2EA","--hover":"#E4EEE2","--border":"#D7E4D3","--text":"#1E2B20","--text-2":"#4F6151","--text-3":"#8AA08C","--accent":"#3E8E52","--accent-strong":"#2A4A30","--accent-2":"#213B26"}},{id:"amethyst",name:"Amethyst",description:"Premium purple & plum — elegant and refined.",dark:!1,swatch:["#F6F4FB","#7A4FE0","#3A2D5C"],vars:{"--bg":"#F6F4FB","--surface":"#FFFFFF","--surface-2":"#F1EDF9","--hover":"#EAE3F6","--border":"#DFD6F0","--text":"#241B36","--text-2":"#5A4E72","--text-3":"#9588AE","--accent":"#7A4FE0","--accent-strong":"#3A2D5C","--accent-2":"#2E2349"}}],_g="sandstone",Ip="anvil_theme",E0=t=>Da.find(e=>e.id===t)||Da[0];function zp(){try{return localStorage.getItem(Ip)||_g}catch{return _g}}function yo(t,e=!0){const r=E0(t),o=document.documentElement;Object.entries(r.vars).forEach(([s,l])=>o.style.setProperty(s,l)),o.style.colorScheme=r.dark?"dark":"light",o.setAttribute("data-theme",r.id);const i=document.querySelector('meta[name="theme-color"]');if(i&&i.setAttribute("content",r.vars["--surface"]),e)try{localStorage.setItem(Ip,r.id)}catch{}return r.id}function B0(t=560){const[e,r]=u.useState(()=>window.innerWidth<=t);return u.useEffect(()=>{const o=()=>r(window.innerWidth<=t);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[t]),e}function D0({screens:t,order:e,hidden:r,themeId:o,currency:i,ticker:s,defaultScreen:l,onSetDefault:a,onSaveSidebar:d,onPreviewTheme:c,onCommitTheme:p,onSelectCurrency:y,onSaveTicker:h,onClose:w}){const[v,k]=u.useState("sidebar"),[z,f]=u.useState(()=>e.map(X=>({id:X,hidden:r.includes(X)}))),[g,b]=u.useState(o),[C,S]=u.useState(""),[B,O]=u.useState(!1),Y=B0(),[F,N]=u.useState(!!(s!=null&&s.enabled)),[j,T]=u.useState(()=>{const X=Array.isArray(s==null?void 0:s.statements)?s.statements.slice(0,5):[];return X.length?X:[""]}),[x,U]=u.useState((s==null?void 0:s.speed)??60),[bt,et]=u.useState((s==null?void 0:s.delay)??3),[D,A]=u.useState(!1),M=(X,vt)=>T(ut=>ut.map((Bt,$t)=>$t===X?vt:Bt)),V=()=>T(X=>X.length<5?[...X,""]:X),W=X=>T(vt=>vt.length>1?vt.filter((ut,Bt)=>Bt!==X):vt),R=()=>{const X=j.map(vt=>vt.trim()).filter(Boolean).slice(0,5);h({enabled:F,statements:X,speed:Number(x),delay:Number(bt)}),A(!0),setTimeout(()=>A(!1),1500)};u.useEffect(()=>{H.getSetting("golden_music").then(X=>S((X==null?void 0:X.value)||"")).catch(()=>{})},[]);const m=()=>{H.setSetting("golden_music",C.trim()).then(()=>{O(!0),setTimeout(()=>O(!1),1500)}).catch(()=>{})},G=X=>{b(X),c(X)},lt=z.filter(X=>!X.hidden).length,rt=(X,vt)=>{const ut=X+vt;if(ut<0||ut>=z.length)return;const Bt=[...z];[Bt[X],Bt[ut]]=[Bt[ut],Bt[X]],f(Bt)},L=X=>{const vt=z[X];if(!vt.hidden&&lt<=1)return;const ut=[...z];ut[X]={...vt,hidden:!vt.hidden},f(ut)},st=()=>{d(z.map(X=>X.id),z.filter(X=>X.hidden).map(X=>X.id))},q=Y?{...ct.overlay,padding:0}:ct.overlay,Z=Y?{...ct.modal,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"100%",borderRadius:0,border:"none"}:ct.modal;return n.jsx("div",{style:q,onClick:w,children:n.jsxs("div",{style:Z,onClick:X=>X.stopPropagation(),children:[n.jsxs("div",{style:ct.head,children:[n.jsx("div",{style:ct.title,children:"Settings"}),n.jsx("button",{onClick:w,style:ct.closeBtn,children:n.jsx(jt,{size:18})})]}),n.jsxs("div",{style:ct.tabs,children:[n.jsxs("button",{onClick:()=>k("sidebar"),style:{...ct.tab,...v==="sidebar"?ct.tabOn:{}},children:[n.jsx(jh,{size:15})," Configure sidebar"]}),n.jsxs("button",{onClick:()=>k("themes"),style:{...ct.tab,...v==="themes"?ct.tabOn:{}},children:[n.jsx(Ih,{size:15})," Themes"]}),n.jsxs("button",{onClick:()=>k("currency"),style:{...ct.tab,...v==="currency"?ct.tabOn:{}},children:[n.jsx(mh,{size:15})," Currency"]}),n.jsxs("button",{onClick:()=>k("music"),style:{...ct.tab,...v==="music"?ct.tabOn:{}},children:[n.jsx(lp,{size:15})," Music"]}),n.jsxs("button",{onClick:()=>k("reminders"),style:{...ct.tab,...v==="reminders"?ct.tabOn:{}},children:[n.jsx(ip,{size:15})," Reminders"]})]}),n.jsx("div",{style:ct.body,children:v==="sidebar"?n.jsxs(n.Fragment,{children:[n.jsxs("p",{style:ct.hint,children:["Reorder with the arrows, hide ones you don't use, and tap ",n.jsx(ps,{size:11,style:{verticalAlign:"-1px"}})," to set the screen that opens on launch."]}),n.jsx("div",{style:ct.list,children:z.map((X,vt)=>{const ut=t[X.id],Bt=ut.icon,$t=l===X.id;return n.jsxs("div",{style:{...ct.row,opacity:X.hidden?.5:1,...$t?{borderColor:"var(--accent)"}:{}},children:[n.jsx("span",{style:ct.rowNum,children:vt+1}),n.jsx(Bt,{size:16}),n.jsxs("span",{style:ct.rowLabel,children:[ut.label,$t&&n.jsx("span",{style:ct.defaultTag,children:"default"})]}),n.jsx("button",{onClick:()=>a(X.id),title:$t?"Opens on launch":"Set as default",style:{...ct.iconBtn,...$t?{color:"var(--accent)"}:{}},children:n.jsx(ps,{size:15})}),n.jsx("button",{onClick:()=>L(vt),title:X.hidden?"Show":"Hide",style:{...ct.iconBtn,...X.hidden?{}:{color:"var(--accent)"}},children:X.hidden?n.jsx(xa,{size:15}):n.jsx(bs,{size:15})}),n.jsx("button",{onClick:()=>rt(vt,-1),disabled:vt===0,style:{...ct.iconBtn,opacity:vt===0?.3:1},children:n.jsx(rp,{size:15})}),n.jsx("button",{onClick:()=>rt(vt,1),disabled:vt===z.length-1,style:{...ct.iconBtn,opacity:vt===z.length-1?.3:1},children:n.jsx(Rs,{size:15})})]},X.id)})}),n.jsxs("button",{onClick:st,style:ct.saveBtn,children:[n.jsx(zt,{size:15})," Save sidebar"]})]}):v==="currency"?n.jsxs(n.Fragment,{children:[n.jsx("p",{style:ct.hint,children:"Choose the currency used across Vault and Worth. Applies instantly."}),n.jsx("div",{style:ct.list,children:Ta.map(X=>{const vt=X.code===i;return n.jsxs("button",{onClick:()=>y(X.code),style:{...ct.row,cursor:"pointer",textAlign:"left",width:"100%",...vt?{borderColor:"var(--accent)"}:{}},children:[n.jsx("span",{style:ct.curSymbol,children:X.symbol}),n.jsxs("span",{style:ct.rowLabel,children:[X.label," ",n.jsx("span",{style:ct.curCode,children:X.code})]}),vt&&n.jsx("span",{style:ct.themeCheck,children:n.jsx(zt,{size:13})})]},X.code)})})]}):v==="music"?n.jsxs(n.Fragment,{children:[n.jsxs("p",{style:ct.hint,children:["Paste a YouTube link to play softly while you write in the ",n.jsx("b",{children:"Golden Book"}),". It plays only on that screen (audio only)."]}),n.jsx("input",{value:C,onChange:X=>S(X.target.value),placeholder:"https://youtube.com/watch?v=…",style:ct.musicInput}),n.jsxs("button",{onClick:m,style:ct.saveBtn,children:[n.jsx(zt,{size:15})," ",B?"Saved":"Save music"]})]}):v==="reminders"?n.jsxs(n.Fragment,{children:[n.jsx("p",{style:ct.hint,children:"Up to 5 reminders scroll across the top of every screen — a gentle nudge toward your goals."}),n.jsxs("button",{onClick:()=>N(X=>!X),style:{...ct.row,cursor:"pointer",width:"100%",justifyContent:"space-between",...F?{borderColor:"var(--accent)"}:{}},children:[n.jsx("span",{style:ct.rowLabel,children:"Show reminder banner"}),n.jsx("span",{style:{...ct.switch,...F?ct.switchOn:{}},children:F?"On":"Off"})]}),n.jsxs("div",{style:{marginTop:14},children:[n.jsxs("div",{style:ct.fieldLbl,children:["Reminders (",j.filter(X=>X.trim()).length,"/5)"]}),j.map((X,vt)=>n.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[n.jsx("input",{value:X,onChange:ut=>M(vt,ut.target.value),maxLength:120,placeholder:`Reminder ${vt+1}`,style:{...ct.musicInput,marginBottom:0}}),n.jsx("button",{onClick:()=>W(vt),style:ct.iconBtn,title:"Remove",children:n.jsx(jt,{size:15})})]},vt)),j.length<5&&n.jsxs("button",{onClick:V,style:ct.addRowBtn,children:[n.jsx(ce,{size:14})," Add reminder"]})]}),n.jsxs("div",{style:{marginTop:16},children:[n.jsxs("div",{style:ct.sliderHead,children:[n.jsx("span",{style:ct.fieldLbl,children:"Scroll speed"}),n.jsxs("span",{style:ct.sliderVal,children:[x," px/s"]})]}),n.jsx("input",{type:"range",min:20,max:200,step:5,value:x,onChange:X=>U(X.target.value),style:ct.range})]}),n.jsxs("div",{style:{marginTop:12},children:[n.jsxs("div",{style:ct.sliderHead,children:[n.jsx("span",{style:ct.fieldLbl,children:"Delay between reminders"}),n.jsxs("span",{style:ct.sliderVal,children:[bt,"s"]})]}),n.jsx("input",{type:"range",min:0,max:15,step:1,value:bt,onChange:X=>et(X.target.value),style:ct.range})]}),n.jsxs("button",{onClick:R,style:{...ct.saveBtn,marginTop:16},children:[n.jsx(zt,{size:15})," ",D?"Saved":"Save reminders"]})]}):n.jsxs(n.Fragment,{children:[n.jsxs("p",{style:ct.hint,children:["Tap a theme to preview it live, then hit ",n.jsx("b",{children:"Apply theme"})," to keep it."]}),n.jsx("div",{style:ct.themeGrid,children:Da.map(X=>{const vt=X.id===g;return n.jsxs("button",{onClick:()=>G(X.id),style:{...ct.themeCard,...vt?ct.themeCardOn:{}},children:[n.jsxs("div",{style:ct.swatchRow,children:[X.swatch.map((ut,Bt)=>n.jsx("span",{style:{...ct.swatch,background:ut}},Bt)),vt&&n.jsx("span",{style:ct.themeCheck,children:n.jsx(zt,{size:13})})]}),n.jsxs("div",{style:ct.themeName,children:[X.name,X.dark?n.jsx("span",{style:ct.darkTag,children:"Dark"}):null]}),n.jsx("div",{style:ct.themeDesc,children:X.description})]},X.id)})}),n.jsxs("button",{onClick:()=>p(g),disabled:g===o,style:{...ct.saveBtn,...g===o?ct.saveBtnDisabled:{}},children:[n.jsx(zt,{size:15})," ",g===o?"Theme applied":"Apply theme"]})]})})]})})}const ct={overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",color:"var(--text)",borderRadius:16,width:460,maxWidth:"100%",maxHeight:"88vh",display:"flex",flexDirection:"column",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)",overflow:"hidden"},head:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 18px",borderBottom:"1px solid var(--border)",flexShrink:0},title:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},tabs:{display:"flex",flexWrap:"wrap",gap:6,padding:"12px 18px 0",flexShrink:0},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"transparent"},body:{padding:"16px 18px 20px",overflowY:"auto",overflowX:"hidden",flex:1,minHeight:0},hint:{fontSize:12.5,color:"var(--text-3)",lineHeight:1.5,margin:"0 0 14px"},list:{display:"flex",flexDirection:"column",gap:6},row:{display:"flex",alignItems:"center",gap:10,padding:"9px 11px",background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:9},rowNum:{fontSize:11,fontWeight:700,color:"var(--text-3)",width:16,textAlign:"center"},rowLabel:{flex:1,fontSize:13.5,fontWeight:500,display:"flex",alignItems:"center",gap:7},defaultTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--accent)",background:"color-mix(in srgb, var(--accent) 14%, transparent)",padding:"1px 6px",borderRadius:6},curSymbol:{width:22,textAlign:"center",fontSize:15,fontWeight:700,color:"var(--text)"},curCode:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginLeft:4},iconBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},saveBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:7,width:"100%",marginTop:16,border:"none",background:"var(--accent)",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer"},saveBtnDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"default"},musicInput:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",marginBottom:12},switch:{fontSize:12,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:20,padding:"3px 12px",minWidth:44,textAlign:"center"},switchOn:{background:"var(--accent)",color:"#fff"},fieldLbl:{fontSize:12,fontWeight:700,color:"var(--text-2)",marginBottom:7},addRowBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"9px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},sliderHead:{display:"flex",justifyContent:"space-between",alignItems:"baseline"},sliderVal:{fontSize:12,fontWeight:700,color:"var(--accent)"},range:{width:"100%",accentColor:"var(--accent)",cursor:"pointer"},themeGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},themeCard:{textAlign:"left",border:"2px solid var(--border)",background:"var(--surface-2)",borderRadius:12,padding:12,cursor:"pointer",display:"flex",flexDirection:"column",gap:6,outline:"none",WebkitTapHighlightColor:"transparent",transition:"border-color .15s ease, box-shadow .15s ease"},themeCardOn:{borderColor:"var(--accent)",boxShadow:"0 0 0 3px color-mix(in srgb, var(--accent) 25%, transparent)"},swatchRow:{display:"flex",alignItems:"center",gap:5,position:"relative"},swatch:{width:22,height:22,borderRadius:"50%",border:"1px solid rgba(0,0,0,0.08)"},themeCheck:{marginLeft:"auto",width:20,height:20,borderRadius:"50%",background:"var(--accent)",color:"#fff",display:"grid",placeItems:"center"},themeName:{fontSize:14,fontWeight:700,display:"flex",alignItems:"center",gap:6},darkTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",background:"var(--hover)",color:"var(--text-2)",padding:"1px 6px",borderRadius:6},themeDesc:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.4}},R0=`
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
`;function F0({statements:t,speed:e=60,delay:r=3}){const o=u.useMemo(()=>(t||[]).map(d=>(d||"").trim()).filter(Boolean).slice(0,5),[t]),[i,s]=u.useState(0),l=u.useRef(null),a=u.useRef(null);return u.useEffect(()=>{s(0)},[o]),u.useEffect(()=>{if(!o.length)return;const d=l.current,c=a.current;if(!d||!c)return;const p=d.offsetWidth,y=c.offsetWidth,h=Math.max(10,Number(e)||60),w=Math.max(2500,(p+y)/h*1e3),v=c.animate([{transform:`translateX(${p}px)`},{transform:`translateX(${-y}px)`}],{duration:w,easing:"linear",fill:"both"});let k;const z=()=>{k=setTimeout(()=>s(f=>(f+1)%o.length),Math.max(0,Number(r)||0)*1e3)};return v.addEventListener("finish",z),()=>{v.cancel(),v.removeEventListener("finish",z),clearTimeout(k)}},[i,o,e,r]),o.length?n.jsxs("div",{style:yn.bar,"aria-label":"Reminders",children:[n.jsx("style",{children:R0}),n.jsx("div",{className:"anvil-tick-glow",style:yn.icon,children:n.jsx("span",{className:"anvil-tick-pulse",style:{display:"grid",placeItems:"center"},children:n.jsx(ip,{size:15})})}),n.jsxs("div",{ref:l,style:yn.viewport,children:[n.jsx("span",{className:"anvil-tick-shimmer",style:yn.shimmer}),n.jsx("div",{className:"anvil-tick-float",style:yn.floatWrap,children:n.jsx("div",{ref:a,style:yn.text,children:o[i%o.length]},i)})]})]}):null}const yn={bar:{display:"flex",alignItems:"center",height:36,flexShrink:0,overflow:"hidden",borderBottom:"1px solid var(--border)",background:"color-mix(in srgb, var(--accent) 12%, var(--surface))"},icon:{display:"grid",placeItems:"center",width:42,height:"100%",flexShrink:0,color:"#fff",background:"var(--accent)",zIndex:2},viewport:{position:"relative",flex:1,height:"100%",overflow:"hidden",display:"flex",alignItems:"center"},shimmer:{position:"absolute",top:0,bottom:0,left:0,width:"22%",background:"linear-gradient(100deg, transparent, color-mix(in srgb, var(--accent) 22%, transparent), transparent)",pointerEvents:"none",zIndex:1},floatWrap:{display:"inline-flex",alignItems:"center",willChange:"transform"},text:{whiteSpace:"nowrap",fontSize:13.5,fontWeight:700,color:"var(--text)",letterSpacing:"0.01em",willChange:"transform",paddingLeft:4}};yo(zp(),!1);const Ra="anvil_default_screen",Lg=()=>{try{return localStorage.getItem(Ra)}catch{return null}},Vr={kickstart:{label:"Kickstart",icon:Dh,component:v0},golden:{label:"Golden Book",icon:fh,component:w0},habits:{label:"Habits",icon:Fh,component:sy},quadrant:{label:"Quadrant",icon:op,component:Uh},goals:{label:"Goals",icon:Ed,component:ty},grove:{label:"Grove",icon:_h,component:Yy},worth:{label:"Rewards",icon:wh,component:o0},vault:{label:"Vault",icon:np,component:d0},journal:{label:"Journal",icon:ep,component:hy},revision:{label:"Revision",icon:cp,component:Ey},affirmations:{label:"Affirmations",icon:Jo,component:Ry},skills:{label:"Skills",icon:hh,component:yy},spiritual:{label:"Spiritual",icon:Ni,component:ky},mindscape:{label:"Mindscape",icon:yh,component:T0}},Tp=["kickstart","golden","habits","quadrant","goals","grove","journal","revision","affirmations","skills","spiritual","mindscape","worth","vault"];function Ei(t){const e=Tp.filter(i=>Vr[i]),o=[...(Array.isArray(t)?t:[]).filter(i=>Vr[i])];return e.forEach(i=>{o.includes(i)||o.push(i)}),o}function A0(){const[t,e]=u.useState(()=>window.innerWidth<720);return u.useEffect(()=>{const r=()=>e(window.innerWidth<720);return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),t}function M0(){const[t,e]=u.useState(()=>{const R=Lg();return R&&Vr[R]?R:"habits"}),[r,o]=u.useState(()=>Lg()||"habits"),[i,s]=u.useState(!1),[l,a]=u.useState(null),[d,c]=u.useState(!1),[p,y]=u.useState(!1),[h,w]=u.useState(zp()),[v,k]=u.useState(Yn()),[z,f]=u.useState({enabled:!1,statements:[],speed:60,delay:3}),[g,b]=u.useState(()=>Ei(Tp)),[C,S]=u.useState([]),B=A0(),O=u.useRef(t);u.useEffect(()=>{O.current=t},[t]),u.useEffect(()=>{if(!l)return;const R=10,m=new Set(["kickstart","mindscape"]),G=setInterval(()=>{const lt=O.current;!document.hidden&&lt&&!m.has(lt)&&H.addScreenTime(lt,R).catch(()=>{})},R*1e3);return()=>clearInterval(G)},[l]),u.useEffect(()=>{let R=!1;const m=()=>{wa(),a(null)};return window.addEventListener("anvil-unauthorized",m),Dd()?H.me().then(G=>{R||a(G)}).catch(()=>{}).finally(()=>{R||c(!0)}):c(!0),()=>{R=!0,window.removeEventListener("anvil-unauthorized",m)}},[]),u.useEffect(()=>{l&&(H.getSetting("theme").then(R=>{R!=null&&R.value&&w(yo(R.value))}).catch(()=>{}),H.getSetting("currency").then(R=>{R!=null&&R.value&&k(kg(R.value))}).catch(()=>{}),H.getSetting("ticker").then(R=>{R!=null&&R.value&&f(m=>({...m,...R.value}))}).catch(()=>{}),H.getSetting("default_screen").then(R=>{if(R!=null&&R.value&&Vr[R.value]){o(R.value);try{localStorage.setItem(Ra,R.value)}catch{}}}).catch(()=>{}),H.getSetting("sidebar_order").then(R=>{Array.isArray(R==null?void 0:R.value)&&b(Ei(R.value))}).catch(()=>{}),H.getSetting("sidebar_hidden").then(R=>{Array.isArray(R==null?void 0:R.value)&&S(R.value)}).catch(()=>{}))},[l]);function Y(R){e(R),s(!1)}const F=()=>{wa(),a(null)},N=R=>{yo(R,!1)},j=R=>{w(yo(R)),H.setSetting("theme",R).catch(()=>{}),y(!1)},T=()=>{yo(h,!1),y(!1)},x=R=>{k(kg(R)),H.setSetting("currency",R).catch(()=>{})},U=R=>{f(R),H.setSetting("ticker",R).catch(()=>{})},bt=R=>{o(R);try{localStorage.setItem(Ra,R)}catch{}H.setSetting("default_screen",R).catch(()=>{})},et=(R,m)=>{if(b(Ei(R)),S(m),y(!1),H.setSetting("sidebar_order",R).catch(()=>{}),H.setSetting("sidebar_hidden",m).catch(()=>{}),m.includes(t)){const G=Ei(R).find(lt=>!m.includes(lt));G&&e(G)}},D=g.filter(R=>!C.includes(R));if(!d)return n.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",fontFamily:"'Inter',system-ui,sans-serif",color:"var(--text-3)"},children:"Loading…"});if(!l)return n.jsx(i0,{onAuthed:a});const A=Vr[t],M=A.component,V=()=>n.jsx("div",{style:Dt.navItems,children:D.map(R=>{const m=Vr[R];if(!m)return null;const G=m.icon,lt=t===R;return n.jsxs("button",{onClick:()=>Y(R),title:m.label,style:{...Dt.navItem,...lt?Dt.navItemOn:{}},children:[n.jsx(G,{size:18}),n.jsx("span",{style:Dt.navLabel,children:m.label})]},R)})}),W=()=>n.jsxs("div",{style:Dt.footerWrap,children:[n.jsxs("button",{onClick:()=>y(!0),style:Dt.settingsBtn,title:"Settings",children:[n.jsx(gp,{size:17}),n.jsx("span",{children:"Settings"})]}),n.jsxs("div",{style:Dt.userFooter,children:[n.jsxs("div",{style:Dt.userInfo,children:[n.jsx("div",{style:Dt.userAvatar,children:(l.name||l.email||"?").charAt(0).toUpperCase()}),n.jsxs("div",{style:{minWidth:0},children:[n.jsx("div",{style:Dt.userName,children:l.name||"You"}),n.jsx("div",{style:Dt.userEmail,children:l.email})]})]}),n.jsx("button",{onClick:F,style:Dt.logoutBtn,title:"Sign out",children:n.jsx(Sh,{size:16})})]})]});return n.jsxs("div",{style:Dt.shell,children:[!B&&n.jsxs("nav",{style:Dt.nav,children:[n.jsxs("div",{style:Dt.brand,children:[n.jsx("div",{style:Dt.brandLogo,children:"B"}),n.jsx("span",{style:Dt.brandName,children:"Anvil"})]}),n.jsx(V,{}),n.jsx(W,{})]}),B&&i&&n.jsx("div",{style:Dt.overlay,onClick:()=>s(!1),children:n.jsxs("nav",{style:Dt.drawer,onClick:R=>R.stopPropagation(),children:[n.jsxs("div",{style:Dt.drawerHeader,children:[n.jsxs("div",{style:Dt.brand,children:[n.jsx("div",{style:Dt.brandLogo,children:"B"}),n.jsx("span",{style:Dt.brandName,children:"Anvil"})]}),n.jsx("button",{style:Dt.closeBtn,onClick:()=>s(!1),children:n.jsx(jt,{size:20})})]}),n.jsx(V,{}),n.jsx(W,{})]})}),n.jsxs("div",{style:Dt.content,children:[B&&n.jsxs("div",{style:Dt.topBar,children:[n.jsx("button",{style:Dt.menuBtn,onClick:()=>s(!0),children:n.jsx(Td,{size:22})}),n.jsx("span",{style:Dt.topBarTitle,children:A.label}),n.jsx("div",{style:{width:38}})]}),z.enabled&&n.jsx(F0,{statements:z.statements,speed:z.speed,delay:z.delay}),n.jsx("main",{style:Dt.main,children:n.jsx(M,{})})]}),p&&n.jsx(D0,{screens:Vr,order:g,hidden:C,themeId:h,currency:v,ticker:z,defaultScreen:r,onSetDefault:bt,onSaveSidebar:et,onPreviewTheme:N,onCommitTheme:j,onSelectCurrency:x,onSaveTicker:U,onClose:T})]})}const Dt={shell:{display:"flex",height:"100vh",overflow:"hidden",fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)"},nav:{width:200,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column",padding:"20px 10px",gap:2,overflowY:"auto",overflowX:"hidden"},brand:{display:"flex",alignItems:"center",gap:9,padding:"6px 10px 20px",borderBottom:"1px solid var(--border)",marginBottom:8},brandLogo:{width:30,height:30,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:14,fontWeight:800,fontFamily:"'Fraunces', Georgia, serif",flexShrink:0},brandName:{fontSize:16,fontWeight:700,letterSpacing:"-0.01em",color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},navItems:{display:"flex",flexDirection:"column",gap:2},navItem:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},navItemOn:{background:"var(--hover)",color:"var(--text)",fontWeight:700},footerWrap:{marginTop:"auto",paddingTop:8},settingsBtn:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},userFooter:{marginTop:4,paddingTop:12,borderTop:"1px solid var(--border)",display:"flex",alignItems:"center",gap:8},userInfo:{display:"flex",alignItems:"center",gap:8,flex:1,minWidth:0},userAvatar:{width:30,height:30,borderRadius:"50%",background:"#8268B0",color:"#fff",display:"grid",placeItems:"center",fontSize:13,fontWeight:700,flexShrink:0},userName:{fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},userEmail:{fontSize:11,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},logoutBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",padding:7,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},navLabel:{flex:1},content:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},main:{flex:1,overflowY:"auto",overflowX:"hidden"},topBar:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",background:"var(--surface)",borderBottom:"1px solid var(--border)",flexShrink:0},topBarTitle:{fontSize:16,fontWeight:700,color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},menuBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text)",padding:8,borderRadius:8,display:"grid",placeItems:"center"},overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.35)",zIndex:100,display:"flex"},drawer:{width:220,background:"var(--surface)",height:"100%",display:"flex",flexDirection:"column",padding:"16px 10px",gap:2,boxShadow:"4px 0 24px rgba(0,0,0,0.12)"},drawerHeader:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:4},closeBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",padding:6,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0}};qb(document.getElementById("root")).render(n.jsx(u.StrictMode,{children:n.jsx(M0,{})}));
