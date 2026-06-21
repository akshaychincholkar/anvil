(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();var Ic={exports:{}},ss={},zc={exports:{}},wt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wo=Symbol.for("react.element"),hp=Symbol.for("react.portal"),yp=Symbol.for("react.fragment"),vp=Symbol.for("react.strict_mode"),xp=Symbol.for("react.profiler"),kp=Symbol.for("react.provider"),wp=Symbol.for("react.context"),jp=Symbol.for("react.forward_ref"),Sp=Symbol.for("react.suspense"),Cp=Symbol.for("react.memo"),Ip=Symbol.for("react.lazy"),Ad=Symbol.iterator;function zp(t){return t===null||typeof t!="object"?null:(t=Ad&&t[Ad]||t["@@iterator"],typeof t=="function"?t:null)}var Tc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ec=Object.assign,Bc={};function _n(t,e,r){this.props=t,this.context=e,this.refs=Bc,this.updater=r||Tc}_n.prototype.isReactComponent={};_n.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};_n.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Dc(){}Dc.prototype=_n.prototype;function wa(t,e,r){this.props=t,this.context=e,this.refs=Bc,this.updater=r||Tc}var ja=wa.prototype=new Dc;ja.constructor=wa;Ec(ja,_n.prototype);ja.isPureReactComponent=!0;var Md=Array.isArray,Rc=Object.prototype.hasOwnProperty,Sa={current:null},Fc={key:!0,ref:!0,__self:!0,__source:!0};function Ac(t,e,r){var o,i={},s=null,l=null;if(e!=null)for(o in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(s=""+e.key),e)Rc.call(e,o)&&!Fc.hasOwnProperty(o)&&(i[o]=e[o]);var a=arguments.length-2;if(a===1)i.children=r;else if(1<a){for(var d=Array(a),g=0;g<a;g++)d[g]=arguments[g+2];i.children=d}if(t&&t.defaultProps)for(o in a=t.defaultProps,a)i[o]===void 0&&(i[o]=a[o]);return{$$typeof:Wo,type:t,key:s,ref:l,props:i,_owner:Sa.current}}function Tp(t,e){return{$$typeof:Wo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ca(t){return typeof t=="object"&&t!==null&&t.$$typeof===Wo}function Ep(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var Wd=/\/+/g;function zs(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ep(""+t.key):e.toString(36)}function vi(t,e,r,o,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case Wo:case hp:l=!0}}if(l)return l=t,i=i(l),t=o===""?"."+zs(l,0):o,Md(i)?(r="",t!=null&&(r=t.replace(Wd,"$&/")+"/"),vi(i,e,r,"",function(g){return g})):i!=null&&(Ca(i)&&(i=Tp(i,r+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Wd,"$&/")+"/")+t)),e.push(i)),1;if(l=0,o=o===""?".":o+":",Md(t))for(var a=0;a<t.length;a++){s=t[a];var d=o+zs(s,a);l+=vi(s,e,r,d,i)}else if(d=zp(t),typeof d=="function")for(t=d.call(t),a=0;!(s=t.next()).done;)s=s.value,d=o+zs(s,a++),l+=vi(s,e,r,d,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function Vo(t,e,r){if(t==null)return t;var o=[],i=0;return vi(t,o,"","",function(s){return e.call(r,s,i++)}),o}function Bp(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var le={current:null},xi={transition:null},Dp={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:xi,ReactCurrentOwner:Sa};function Mc(){throw Error("act(...) is not supported in production builds of React.")}wt.Children={map:Vo,forEach:function(t,e,r){Vo(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return Vo(t,function(){e++}),e},toArray:function(t){return Vo(t,function(e){return e})||[]},only:function(t){if(!Ca(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};wt.Component=_n;wt.Fragment=yp;wt.Profiler=xp;wt.PureComponent=wa;wt.StrictMode=vp;wt.Suspense=Sp;wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dp;wt.act=Mc;wt.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var o=Ec({},t.props),i=t.key,s=t.ref,l=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,l=Sa.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(d in e)Rc.call(e,d)&&!Fc.hasOwnProperty(d)&&(o[d]=e[d]===void 0&&a!==void 0?a[d]:e[d])}var d=arguments.length-2;if(d===1)o.children=r;else if(1<d){a=Array(d);for(var g=0;g<d;g++)a[g]=arguments[g+2];o.children=a}return{$$typeof:Wo,type:t.type,key:i,ref:s,props:o,_owner:l}};wt.createContext=function(t){return t={$$typeof:wp,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:kp,_context:t},t.Consumer=t};wt.createElement=Ac;wt.createFactory=function(t){var e=Ac.bind(null,t);return e.type=t,e};wt.createRef=function(){return{current:null}};wt.forwardRef=function(t){return{$$typeof:jp,render:t}};wt.isValidElement=Ca;wt.lazy=function(t){return{$$typeof:Ip,_payload:{_status:-1,_result:t},_init:Bp}};wt.memo=function(t,e){return{$$typeof:Cp,type:t,compare:e===void 0?null:e}};wt.startTransition=function(t){var e=xi.transition;xi.transition={};try{t()}finally{xi.transition=e}};wt.unstable_act=Mc;wt.useCallback=function(t,e){return le.current.useCallback(t,e)};wt.useContext=function(t){return le.current.useContext(t)};wt.useDebugValue=function(){};wt.useDeferredValue=function(t){return le.current.useDeferredValue(t)};wt.useEffect=function(t,e){return le.current.useEffect(t,e)};wt.useId=function(){return le.current.useId()};wt.useImperativeHandle=function(t,e,r){return le.current.useImperativeHandle(t,e,r)};wt.useInsertionEffect=function(t,e){return le.current.useInsertionEffect(t,e)};wt.useLayoutEffect=function(t,e){return le.current.useLayoutEffect(t,e)};wt.useMemo=function(t,e){return le.current.useMemo(t,e)};wt.useReducer=function(t,e,r){return le.current.useReducer(t,e,r)};wt.useRef=function(t){return le.current.useRef(t)};wt.useState=function(t){return le.current.useState(t)};wt.useSyncExternalStore=function(t,e,r){return le.current.useSyncExternalStore(t,e,r)};wt.useTransition=function(){return le.current.useTransition()};wt.version="18.3.1";zc.exports=wt;var p=zc.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rp=p,Fp=Symbol.for("react.element"),Ap=Symbol.for("react.fragment"),Mp=Object.prototype.hasOwnProperty,Wp=Rp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_p={key:!0,ref:!0,__self:!0,__source:!0};function Wc(t,e,r){var o,i={},s=null,l=null;r!==void 0&&(s=""+r),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(l=e.ref);for(o in e)Mp.call(e,o)&&!_p.hasOwnProperty(o)&&(i[o]=e[o]);if(t&&t.defaultProps)for(o in e=t.defaultProps,e)i[o]===void 0&&(i[o]=e[o]);return{$$typeof:Fp,type:t,key:s,ref:l,props:i,_owner:Wp.current}}ss.Fragment=Ap;ss.jsx=Wc;ss.jsxs=Wc;Ic.exports=ss;var n=Ic.exports,_c={exports:{}},xe={},Lc={exports:{}},Pc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,M){var G=A.length;A.push(M);t:for(;0<G;){var j=G-1>>>1,Y=A[j];if(0<i(Y,M))A[j]=M,A[G]=Y,G=j;else break t}}function r(A){return A.length===0?null:A[0]}function o(A){if(A.length===0)return null;var M=A[0],G=A.pop();if(G!==M){A[0]=G;t:for(var j=0,Y=A.length,h=Y>>>1;j<h;){var $=2*(j+1)-1,dt=A[$],et=$+1,mt=A[et];if(0>i(dt,G))et<Y&&0>i(mt,dt)?(A[j]=mt,A[et]=G,j=et):(A[j]=dt,A[$]=G,j=$);else if(et<Y&&0>i(mt,G))A[j]=mt,A[et]=G,j=et;else break t}}return M}function i(A,M){var G=A.sortIndex-M.sortIndex;return G!==0?G:A.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var l=Date,a=l.now();t.unstable_now=function(){return l.now()-a}}var d=[],g=[],f=1,y=null,m=3,S=!1,k=!1,C=!1,T=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function u(A){for(var M=r(g);M!==null;){if(M.callback===null)o(g);else if(M.startTime<=A)o(g),M.sortIndex=M.expirationTime,e(d,M);else break;M=r(g)}}function x(A){if(C=!1,u(A),!k)if(r(d)!==null)k=!0,q(v);else{var M=r(g);M!==null&&R(x,M.startTime-A)}}function v(A,M){k=!1,C&&(C=!1,b(L),L=-1),S=!0;var G=m;try{for(u(M),y=r(d);y!==null&&(!(y.expirationTime>M)||A&&!I());){var j=y.callback;if(typeof j=="function"){y.callback=null,m=y.priorityLevel;var Y=j(y.expirationTime<=M);M=t.unstable_now(),typeof Y=="function"?y.callback=Y:y===r(d)&&o(d),u(M)}else o(d);y=r(d)}if(y!==null)var h=!0;else{var $=r(g);$!==null&&R(x,$.startTime-M),h=!1}return h}finally{y=null,m=G,S=!1}}var z=!1,_=null,L=-1,F=5,P=-1;function I(){return!(t.unstable_now()-P<F)}function D(){if(_!==null){var A=t.unstable_now();P=A;var M=!0;try{M=_(!0,A)}finally{M?w():(z=!1,_=null)}}else z=!1}var w;if(typeof c=="function")w=function(){c(D)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,st=O.port2;O.port1.onmessage=D,w=function(){st.postMessage(null)}}else w=function(){T(D,0)};function q(A){_=A,z||(z=!0,w())}function R(A,M){L=T(function(){A(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){k||S||(k=!0,q(v))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return r(d)},t.unstable_next=function(A){switch(m){case 1:case 2:case 3:var M=3;break;default:M=m}var G=m;m=M;try{return A()}finally{m=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,M){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var G=m;m=A;try{return M()}finally{m=G}},t.unstable_scheduleCallback=function(A,M,G){var j=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?j+G:j):G=j,A){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=G+Y,A={id:f++,callback:M,priorityLevel:A,startTime:G,expirationTime:Y,sortIndex:-1},G>j?(A.sortIndex=G,e(g,A),r(d)===null&&A===r(g)&&(C?(b(L),L=-1):C=!0,R(x,G-j))):(A.sortIndex=Y,e(d,A),k||S||(k=!0,q(v))),A},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(A){var M=m;return function(){var G=m;m=M;try{return A.apply(this,arguments)}finally{m=G}}}})(Pc);Lc.exports=Pc;var Lp=Lc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp=p,ve=Lp;function V(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $c=new Set,ho={};function Jr(t,e){Bn(t,e),Bn(t+"Capture",e)}function Bn(t,e){for(ho[t]=e,t=0;t<e.length;t++)$c.add(e[t])}var rr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fl=Object.prototype.hasOwnProperty,$p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_d={},Ld={};function Np(t){return fl.call(Ld,t)?!0:fl.call(_d,t)?!1:$p.test(t)?Ld[t]=!0:(_d[t]=!0,!1)}function Op(t,e,r,o){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Hp(t,e,r,o){if(e===null||typeof e>"u"||Op(t,e,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ae(t,e,r,o,i,s,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=o,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=l}var Jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Jt[t]=new ae(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Jt[e]=new ae(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Jt[t]=new ae(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Jt[t]=new ae(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Jt[t]=new ae(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Jt[t]=new ae(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Jt[t]=new ae(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Jt[t]=new ae(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Jt[t]=new ae(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ia=/[\-:]([a-z])/g;function za(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ia,za);Jt[e]=new ae(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ia,za);Jt[e]=new ae(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ia,za);Jt[e]=new ae(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Jt[t]=new ae(t,1,!1,t.toLowerCase(),null,!1,!1)});Jt.xlinkHref=new ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Jt[t]=new ae(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ta(t,e,r,o){var i=Jt.hasOwnProperty(e)?Jt[e]:null;(i!==null?i.type!==0:o||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Hp(e,r,i,o)&&(r=null),o||i===null?Np(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):i.mustUseProperty?t[i.propertyName]=r===null?i.type===3?!1:"":r:(e=i.attributeName,o=i.attributeNamespace,r===null?t.removeAttribute(e):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,o?t.setAttributeNS(o,e,r):t.setAttribute(e,r))))}var sr=Pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yo=Symbol.for("react.element"),cn=Symbol.for("react.portal"),un=Symbol.for("react.fragment"),Ea=Symbol.for("react.strict_mode"),hl=Symbol.for("react.profiler"),Nc=Symbol.for("react.provider"),Oc=Symbol.for("react.context"),Ba=Symbol.for("react.forward_ref"),yl=Symbol.for("react.suspense"),vl=Symbol.for("react.suspense_list"),Da=Symbol.for("react.memo"),dr=Symbol.for("react.lazy"),Hc=Symbol.for("react.offscreen"),Pd=Symbol.iterator;function Hn(t){return t===null||typeof t!="object"?null:(t=Pd&&t[Pd]||t["@@iterator"],typeof t=="function"?t:null)}var Lt=Object.assign,Ts;function Jn(t){if(Ts===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);Ts=e&&e[1]||""}return`
`+Ts+t}var Es=!1;function Bs(t,e){if(!t||Es)return"";Es=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(g){var o=g}Reflect.construct(t,[],e)}else{try{e.call()}catch(g){o=g}t.call(e.prototype)}else{try{throw Error()}catch(g){o=g}t()}}catch(g){if(g&&o&&typeof g.stack=="string"){for(var i=g.stack.split(`
`),s=o.stack.split(`
`),l=i.length-1,a=s.length-1;1<=l&&0<=a&&i[l]!==s[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==s[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==s[a]){var d=`
`+i[l].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=l&&0<=a);break}}}finally{Es=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?Jn(t):""}function Gp(t){switch(t.tag){case 5:return Jn(t.type);case 16:return Jn("Lazy");case 13:return Jn("Suspense");case 19:return Jn("SuspenseList");case 0:case 2:case 15:return t=Bs(t.type,!1),t;case 11:return t=Bs(t.type.render,!1),t;case 1:return t=Bs(t.type,!0),t;default:return""}}function xl(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case un:return"Fragment";case cn:return"Portal";case hl:return"Profiler";case Ea:return"StrictMode";case yl:return"Suspense";case vl:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Oc:return(t.displayName||"Context")+".Consumer";case Nc:return(t._context.displayName||"Context")+".Provider";case Ba:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Da:return e=t.displayName||null,e!==null?e:xl(t.type)||"Memo";case dr:e=t._payload,t=t._init;try{return xl(t(e))}catch{}}return null}function Up(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xl(e);case 8:return e===Ea?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Sr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Gc(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Vp(t){var e=Gc(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),o=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,s=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(l){o=""+l,s.call(this,l)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(l){o=""+l},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Qo(t){t._valueTracker||(t._valueTracker=Vp(t))}function Uc(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),o="";return t&&(o=Gc(t)?t.checked?"true":"false":t.value),t=o,t!==r?(e.setValue(t),!0):!1}function Ri(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function kl(t,e){var r=e.checked;return Lt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function $d(t,e){var r=e.defaultValue==null?"":e.defaultValue,o=e.checked!=null?e.checked:e.defaultChecked;r=Sr(e.value!=null?e.value:r),t._wrapperState={initialChecked:o,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Vc(t,e){e=e.checked,e!=null&&Ta(t,"checked",e,!1)}function wl(t,e){Vc(t,e);var r=Sr(e.value),o=e.type;if(r!=null)o==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(o==="submit"||o==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?jl(t,e.type,r):e.hasOwnProperty("defaultValue")&&jl(t,e.type,Sr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Nd(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var o=e.type;if(!(o!=="submit"&&o!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function jl(t,e,r){(e!=="number"||Ri(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var qn=Array.isArray;function Sn(t,e,r,o){if(t=t.options,e){e={};for(var i=0;i<r.length;i++)e["$"+r[i]]=!0;for(r=0;r<t.length;r++)i=e.hasOwnProperty("$"+t[r].value),t[r].selected!==i&&(t[r].selected=i),i&&o&&(t[r].defaultSelected=!0)}else{for(r=""+Sr(r),e=null,i=0;i<t.length;i++){if(t[i].value===r){t[i].selected=!0,o&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Sl(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(V(91));return Lt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Od(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(V(92));if(qn(r)){if(1<r.length)throw Error(V(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:Sr(r)}}function Yc(t,e){var r=Sr(e.value),o=Sr(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),o!=null&&(t.defaultValue=""+o)}function Hd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Qc(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cl(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Qc(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ko,Kc=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,o,i){MSApp.execUnsafeLocalFunction(function(){return t(e,r,o,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ko=Ko||document.createElement("div"),Ko.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ko.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function yo(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var io={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yp=["Webkit","ms","Moz","O"];Object.keys(io).forEach(function(t){Yp.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),io[e]=io[t]})});function Xc(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||io.hasOwnProperty(t)&&io[t]?(""+e).trim():e+"px"}function Jc(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var o=r.indexOf("--")===0,i=Xc(r,e[r],o);r==="float"&&(r="cssFloat"),o?t.setProperty(r,i):t[r]=i}}var Qp=Lt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Il(t,e){if(e){if(Qp[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(V(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(V(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(V(61))}if(e.style!=null&&typeof e.style!="object")throw Error(V(62))}}function zl(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tl=null;function Ra(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var El=null,Cn=null,In=null;function Gd(t){if(t=Po(t)){if(typeof El!="function")throw Error(V(280));var e=t.stateNode;e&&(e=cs(e),El(t.stateNode,t.type,e))}}function qc(t){Cn?In?In.push(t):In=[t]:Cn=t}function Zc(){if(Cn){var t=Cn,e=In;if(In=Cn=null,Gd(t),e)for(t=0;t<e.length;t++)Gd(e[t])}}function tu(t,e){return t(e)}function eu(){}var Ds=!1;function ru(t,e,r){if(Ds)return t(e,r);Ds=!0;try{return tu(t,e,r)}finally{Ds=!1,(Cn!==null||In!==null)&&(eu(),Zc())}}function vo(t,e){var r=t.stateNode;if(r===null)return null;var o=cs(r);if(o===null)return null;r=o[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break t;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(V(231,e,typeof r));return r}var Bl=!1;if(rr)try{var Gn={};Object.defineProperty(Gn,"passive",{get:function(){Bl=!0}}),window.addEventListener("test",Gn,Gn),window.removeEventListener("test",Gn,Gn)}catch{Bl=!1}function Kp(t,e,r,o,i,s,l,a,d){var g=Array.prototype.slice.call(arguments,3);try{e.apply(r,g)}catch(f){this.onError(f)}}var so=!1,Fi=null,Ai=!1,Dl=null,Xp={onError:function(t){so=!0,Fi=t}};function Jp(t,e,r,o,i,s,l,a,d){so=!1,Fi=null,Kp.apply(Xp,arguments)}function qp(t,e,r,o,i,s,l,a,d){if(Jp.apply(this,arguments),so){if(so){var g=Fi;so=!1,Fi=null}else throw Error(V(198));Ai||(Ai=!0,Dl=g)}}function qr(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function nu(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ud(t){if(qr(t)!==t)throw Error(V(188))}function Zp(t){var e=t.alternate;if(!e){if(e=qr(t),e===null)throw Error(V(188));return e!==t?null:t}for(var r=t,o=e;;){var i=r.return;if(i===null)break;var s=i.alternate;if(s===null){if(o=i.return,o!==null){r=o;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===r)return Ud(i),t;if(s===o)return Ud(i),e;s=s.sibling}throw Error(V(188))}if(r.return!==o.return)r=i,o=s;else{for(var l=!1,a=i.child;a;){if(a===r){l=!0,r=i,o=s;break}if(a===o){l=!0,o=i,r=s;break}a=a.sibling}if(!l){for(a=s.child;a;){if(a===r){l=!0,r=s,o=i;break}if(a===o){l=!0,o=s,r=i;break}a=a.sibling}if(!l)throw Error(V(189))}}if(r.alternate!==o)throw Error(V(190))}if(r.tag!==3)throw Error(V(188));return r.stateNode.current===r?t:e}function ou(t){return t=Zp(t),t!==null?iu(t):null}function iu(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=iu(t);if(e!==null)return e;t=t.sibling}return null}var su=ve.unstable_scheduleCallback,Vd=ve.unstable_cancelCallback,tm=ve.unstable_shouldYield,em=ve.unstable_requestPaint,$t=ve.unstable_now,rm=ve.unstable_getCurrentPriorityLevel,Fa=ve.unstable_ImmediatePriority,lu=ve.unstable_UserBlockingPriority,Mi=ve.unstable_NormalPriority,nm=ve.unstable_LowPriority,au=ve.unstable_IdlePriority,ls=null,Ve=null;function om(t){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(ls,t,void 0,(t.current.flags&128)===128)}catch{}}var Me=Math.clz32?Math.clz32:lm,im=Math.log,sm=Math.LN2;function lm(t){return t>>>=0,t===0?32:31-(im(t)/sm|0)|0}var Xo=64,Jo=4194304;function Zn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Wi(t,e){var r=t.pendingLanes;if(r===0)return 0;var o=0,i=t.suspendedLanes,s=t.pingedLanes,l=r&268435455;if(l!==0){var a=l&~i;a!==0?o=Zn(a):(s&=l,s!==0&&(o=Zn(s)))}else l=r&~i,l!==0?o=Zn(l):s!==0&&(o=Zn(s));if(o===0)return 0;if(e!==0&&e!==o&&!(e&i)&&(i=o&-o,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(o&4&&(o|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=o;0<e;)r=31-Me(e),i=1<<r,o|=t[r],e&=~i;return o}function am(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dm(t,e){for(var r=t.suspendedLanes,o=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var l=31-Me(s),a=1<<l,d=i[l];d===-1?(!(a&r)||a&o)&&(i[l]=am(a,e)):d<=e&&(t.expiredLanes|=a),s&=~a}}function Rl(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function du(){var t=Xo;return Xo<<=1,!(Xo&4194240)&&(Xo=64),t}function Rs(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function _o(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Me(e),t[e]=r}function gm(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var o=t.eventTimes;for(t=t.expirationTimes;0<r;){var i=31-Me(r),s=1<<i;e[i]=0,o[i]=-1,t[i]=-1,r&=~s}}function Aa(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var o=31-Me(r),i=1<<o;i&e|t[o]&e&&(t[o]|=e),r&=~i}}var Bt=0;function gu(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var cu,Ma,uu,bu,pu,Fl=!1,qo=[],fr=null,hr=null,yr=null,xo=new Map,ko=new Map,cr=[],cm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yd(t,e){switch(t){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":yr=null;break;case"pointerover":case"pointerout":xo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(e.pointerId)}}function Un(t,e,r,o,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:r,eventSystemFlags:o,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Po(e),e!==null&&Ma(e)),t):(t.eventSystemFlags|=o,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function um(t,e,r,o,i){switch(e){case"focusin":return fr=Un(fr,t,e,r,o,i),!0;case"dragenter":return hr=Un(hr,t,e,r,o,i),!0;case"mouseover":return yr=Un(yr,t,e,r,o,i),!0;case"pointerover":var s=i.pointerId;return xo.set(s,Un(xo.get(s)||null,t,e,r,o,i)),!0;case"gotpointercapture":return s=i.pointerId,ko.set(s,Un(ko.get(s)||null,t,e,r,o,i)),!0}return!1}function mu(t){var e=Lr(t.target);if(e!==null){var r=qr(e);if(r!==null){if(e=r.tag,e===13){if(e=nu(r),e!==null){t.blockedOn=e,pu(t.priority,function(){uu(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ki(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=Al(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);Tl=o,r.target.dispatchEvent(o),Tl=null}else return e=Po(r),e!==null&&Ma(e),t.blockedOn=r,!1;e.shift()}return!0}function Qd(t,e,r){ki(t)&&r.delete(e)}function bm(){Fl=!1,fr!==null&&ki(fr)&&(fr=null),hr!==null&&ki(hr)&&(hr=null),yr!==null&&ki(yr)&&(yr=null),xo.forEach(Qd),ko.forEach(Qd)}function Vn(t,e){t.blockedOn===e&&(t.blockedOn=null,Fl||(Fl=!0,ve.unstable_scheduleCallback(ve.unstable_NormalPriority,bm)))}function wo(t){function e(i){return Vn(i,t)}if(0<qo.length){Vn(qo[0],t);for(var r=1;r<qo.length;r++){var o=qo[r];o.blockedOn===t&&(o.blockedOn=null)}}for(fr!==null&&Vn(fr,t),hr!==null&&Vn(hr,t),yr!==null&&Vn(yr,t),xo.forEach(e),ko.forEach(e),r=0;r<cr.length;r++)o=cr[r],o.blockedOn===t&&(o.blockedOn=null);for(;0<cr.length&&(r=cr[0],r.blockedOn===null);)mu(r),r.blockedOn===null&&cr.shift()}var zn=sr.ReactCurrentBatchConfig,_i=!0;function pm(t,e,r,o){var i=Bt,s=zn.transition;zn.transition=null;try{Bt=1,Wa(t,e,r,o)}finally{Bt=i,zn.transition=s}}function mm(t,e,r,o){var i=Bt,s=zn.transition;zn.transition=null;try{Bt=4,Wa(t,e,r,o)}finally{Bt=i,zn.transition=s}}function Wa(t,e,r,o){if(_i){var i=Al(t,e,r,o);if(i===null)Os(t,e,o,Li,r),Yd(t,o);else if(um(i,t,e,r,o))o.stopPropagation();else if(Yd(t,o),e&4&&-1<cm.indexOf(t)){for(;i!==null;){var s=Po(i);if(s!==null&&cu(s),s=Al(t,e,r,o),s===null&&Os(t,e,o,Li,r),s===i)break;i=s}i!==null&&o.stopPropagation()}else Os(t,e,o,null,r)}}var Li=null;function Al(t,e,r,o){if(Li=null,t=Ra(o),t=Lr(t),t!==null)if(e=qr(t),e===null)t=null;else if(r=e.tag,r===13){if(t=nu(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Li=t,null}function fu(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rm()){case Fa:return 1;case lu:return 4;case Mi:case nm:return 16;case au:return 536870912;default:return 16}default:return 16}}var pr=null,_a=null,wi=null;function hu(){if(wi)return wi;var t,e=_a,r=e.length,o,i="value"in pr?pr.value:pr.textContent,s=i.length;for(t=0;t<r&&e[t]===i[t];t++);var l=r-t;for(o=1;o<=l&&e[r-o]===i[s-o];o++);return wi=i.slice(t,1<o?1-o:void 0)}function ji(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Zo(){return!0}function Kd(){return!1}function ke(t){function e(r,o,i,s,l){this._reactName=r,this._targetInst=i,this.type=o,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(r=t[a],this[a]=r?r(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Zo:Kd,this.isPropagationStopped=Kd,this}return Lt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Zo)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Zo)},persist:function(){},isPersistent:Zo}),e}var Ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},La=ke(Ln),Lo=Lt({},Ln,{view:0,detail:0}),fm=ke(Lo),Fs,As,Yn,as=Lt({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pa,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Yn&&(Yn&&t.type==="mousemove"?(Fs=t.screenX-Yn.screenX,As=t.screenY-Yn.screenY):As=Fs=0,Yn=t),Fs)},movementY:function(t){return"movementY"in t?t.movementY:As}}),Xd=ke(as),hm=Lt({},as,{dataTransfer:0}),ym=ke(hm),vm=Lt({},Lo,{relatedTarget:0}),Ms=ke(vm),xm=Lt({},Ln,{animationName:0,elapsedTime:0,pseudoElement:0}),km=ke(xm),wm=Lt({},Ln,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),jm=ke(wm),Sm=Lt({},Ln,{data:0}),Jd=ke(Sm),Cm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Im={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tm(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=zm[t])?!!e[t]:!1}function Pa(){return Tm}var Em=Lt({},Lo,{key:function(t){if(t.key){var e=Cm[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ji(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Im[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pa,charCode:function(t){return t.type==="keypress"?ji(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ji(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Bm=ke(Em),Dm=Lt({},as,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qd=ke(Dm),Rm=Lt({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pa}),Fm=ke(Rm),Am=Lt({},Ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mm=ke(Am),Wm=Lt({},as,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),_m=ke(Wm),Lm=[9,13,27,32],$a=rr&&"CompositionEvent"in window,lo=null;rr&&"documentMode"in document&&(lo=document.documentMode);var Pm=rr&&"TextEvent"in window&&!lo,yu=rr&&(!$a||lo&&8<lo&&11>=lo),Zd=" ",tg=!1;function vu(t,e){switch(t){case"keyup":return Lm.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xu(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var bn=!1;function $m(t,e){switch(t){case"compositionend":return xu(e);case"keypress":return e.which!==32?null:(tg=!0,Zd);case"textInput":return t=e.data,t===Zd&&tg?null:t;default:return null}}function Nm(t,e){if(bn)return t==="compositionend"||!$a&&vu(t,e)?(t=hu(),wi=_a=pr=null,bn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return yu&&e.locale!=="ko"?null:e.data;default:return null}}var Om={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Om[t.type]:e==="textarea"}function ku(t,e,r,o){qc(o),e=Pi(e,"onChange"),0<e.length&&(r=new La("onChange","change",null,r,o),t.push({event:r,listeners:e}))}var ao=null,jo=null;function Hm(t){Ru(t,0)}function ds(t){var e=fn(t);if(Uc(e))return t}function Gm(t,e){if(t==="change")return e}var wu=!1;if(rr){var Ws;if(rr){var _s="oninput"in document;if(!_s){var rg=document.createElement("div");rg.setAttribute("oninput","return;"),_s=typeof rg.oninput=="function"}Ws=_s}else Ws=!1;wu=Ws&&(!document.documentMode||9<document.documentMode)}function ng(){ao&&(ao.detachEvent("onpropertychange",ju),jo=ao=null)}function ju(t){if(t.propertyName==="value"&&ds(jo)){var e=[];ku(e,jo,t,Ra(t)),ru(Hm,e)}}function Um(t,e,r){t==="focusin"?(ng(),ao=e,jo=r,ao.attachEvent("onpropertychange",ju)):t==="focusout"&&ng()}function Vm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ds(jo)}function Ym(t,e){if(t==="click")return ds(e)}function Qm(t,e){if(t==="input"||t==="change")return ds(e)}function Km(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var _e=typeof Object.is=="function"?Object.is:Km;function So(t,e){if(_e(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),o=Object.keys(e);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var i=r[o];if(!fl.call(e,i)||!_e(t[i],e[i]))return!1}return!0}function og(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ig(t,e){var r=og(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=e&&o>=e)return{node:r,offset:e-t};t=o}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=og(r)}}function Su(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Su(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Cu(){for(var t=window,e=Ri();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=Ri(t.document)}return e}function Na(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Xm(t){var e=Cu(),r=t.focusedElem,o=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&Su(r.ownerDocument.documentElement,r)){if(o!==null&&Na(r)){if(e=o.start,t=o.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=r.textContent.length,s=Math.min(o.start,i);o=o.end===void 0?s:Math.min(o.end,i),!t.extend&&s>o&&(i=o,o=s,s=i),i=ig(r,s);var l=ig(r,o);i&&l&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>o?(t.addRange(e),t.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Jm=rr&&"documentMode"in document&&11>=document.documentMode,pn=null,Ml=null,go=null,Wl=!1;function sg(t,e,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Wl||pn==null||pn!==Ri(o)||(o=pn,"selectionStart"in o&&Na(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),go&&So(go,o)||(go=o,o=Pi(Ml,"onSelect"),0<o.length&&(e=new La("onSelect","select",null,e,r),t.push({event:e,listeners:o}),e.target=pn)))}function ti(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var mn={animationend:ti("Animation","AnimationEnd"),animationiteration:ti("Animation","AnimationIteration"),animationstart:ti("Animation","AnimationStart"),transitionend:ti("Transition","TransitionEnd")},Ls={},Iu={};rr&&(Iu=document.createElement("div").style,"AnimationEvent"in window||(delete mn.animationend.animation,delete mn.animationiteration.animation,delete mn.animationstart.animation),"TransitionEvent"in window||delete mn.transitionend.transition);function gs(t){if(Ls[t])return Ls[t];if(!mn[t])return t;var e=mn[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in Iu)return Ls[t]=e[r];return t}var zu=gs("animationend"),Tu=gs("animationiteration"),Eu=gs("animationstart"),Bu=gs("transitionend"),Du=new Map,lg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(t,e){Du.set(t,e),Jr(e,[t])}for(var Ps=0;Ps<lg.length;Ps++){var $s=lg[Ps],qm=$s.toLowerCase(),Zm=$s[0].toUpperCase()+$s.slice(1);Ir(qm,"on"+Zm)}Ir(zu,"onAnimationEnd");Ir(Tu,"onAnimationIteration");Ir(Eu,"onAnimationStart");Ir("dblclick","onDoubleClick");Ir("focusin","onFocus");Ir("focusout","onBlur");Ir(Bu,"onTransitionEnd");Bn("onMouseEnter",["mouseout","mouseover"]);Bn("onMouseLeave",["mouseout","mouseover"]);Bn("onPointerEnter",["pointerout","pointerover"]);Bn("onPointerLeave",["pointerout","pointerover"]);Jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var to="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tf=new Set("cancel close invalid load scroll toggle".split(" ").concat(to));function ag(t,e,r){var o=t.type||"unknown-event";t.currentTarget=r,qp(o,e,void 0,t),t.currentTarget=null}function Ru(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],i=o.event;o=o.listeners;t:{var s=void 0;if(e)for(var l=o.length-1;0<=l;l--){var a=o[l],d=a.instance,g=a.currentTarget;if(a=a.listener,d!==s&&i.isPropagationStopped())break t;ag(i,a,g),s=d}else for(l=0;l<o.length;l++){if(a=o[l],d=a.instance,g=a.currentTarget,a=a.listener,d!==s&&i.isPropagationStopped())break t;ag(i,a,g),s=d}}}if(Ai)throw t=Dl,Ai=!1,Dl=null,t}function Ft(t,e){var r=e[Nl];r===void 0&&(r=e[Nl]=new Set);var o=t+"__bubble";r.has(o)||(Fu(e,t,2,!1),r.add(o))}function Ns(t,e,r){var o=0;e&&(o|=4),Fu(r,t,o,e)}var ei="_reactListening"+Math.random().toString(36).slice(2);function Co(t){if(!t[ei]){t[ei]=!0,$c.forEach(function(r){r!=="selectionchange"&&(tf.has(r)||Ns(r,!1,t),Ns(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ei]||(e[ei]=!0,Ns("selectionchange",!1,e))}}function Fu(t,e,r,o){switch(fu(e)){case 1:var i=pm;break;case 4:i=mm;break;default:i=Wa}r=i.bind(null,e,r,t),i=void 0,!Bl||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),o?i!==void 0?t.addEventListener(e,r,{capture:!0,passive:i}):t.addEventListener(e,r,!0):i!==void 0?t.addEventListener(e,r,{passive:i}):t.addEventListener(e,r,!1)}function Os(t,e,r,o,i){var s=o;if(!(e&1)&&!(e&2)&&o!==null)t:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var a=o.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=o.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;l=l.return}for(;a!==null;){if(l=Lr(a),l===null)return;if(d=l.tag,d===5||d===6){o=s=l;continue t}a=a.parentNode}}o=o.return}ru(function(){var g=s,f=Ra(r),y=[];t:{var m=Du.get(t);if(m!==void 0){var S=La,k=t;switch(t){case"keypress":if(ji(r)===0)break t;case"keydown":case"keyup":S=Bm;break;case"focusin":k="focus",S=Ms;break;case"focusout":k="blur",S=Ms;break;case"beforeblur":case"afterblur":S=Ms;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Xd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=ym;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Fm;break;case zu:case Tu:case Eu:S=km;break;case Bu:S=Mm;break;case"scroll":S=fm;break;case"wheel":S=_m;break;case"copy":case"cut":case"paste":S=jm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=qd}var C=(e&4)!==0,T=!C&&t==="scroll",b=C?m!==null?m+"Capture":null:m;C=[];for(var c=g,u;c!==null;){u=c;var x=u.stateNode;if(u.tag===5&&x!==null&&(u=x,b!==null&&(x=vo(c,b),x!=null&&C.push(Io(c,x,u)))),T)break;c=c.return}0<C.length&&(m=new S(m,k,null,r,f),y.push({event:m,listeners:C}))}}if(!(e&7)){t:{if(m=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",m&&r!==Tl&&(k=r.relatedTarget||r.fromElement)&&(Lr(k)||k[nr]))break t;if((S||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,S?(k=r.relatedTarget||r.toElement,S=g,k=k?Lr(k):null,k!==null&&(T=qr(k),k!==T||k.tag!==5&&k.tag!==6)&&(k=null)):(S=null,k=g),S!==k)){if(C=Xd,x="onMouseLeave",b="onMouseEnter",c="mouse",(t==="pointerout"||t==="pointerover")&&(C=qd,x="onPointerLeave",b="onPointerEnter",c="pointer"),T=S==null?m:fn(S),u=k==null?m:fn(k),m=new C(x,c+"leave",S,r,f),m.target=T,m.relatedTarget=u,x=null,Lr(f)===g&&(C=new C(b,c+"enter",k,r,f),C.target=u,C.relatedTarget=T,x=C),T=x,S&&k)e:{for(C=S,b=k,c=0,u=C;u;u=sn(u))c++;for(u=0,x=b;x;x=sn(x))u++;for(;0<c-u;)C=sn(C),c--;for(;0<u-c;)b=sn(b),u--;for(;c--;){if(C===b||b!==null&&C===b.alternate)break e;C=sn(C),b=sn(b)}C=null}else C=null;S!==null&&dg(y,m,S,C,!1),k!==null&&T!==null&&dg(y,T,k,C,!0)}}t:{if(m=g?fn(g):window,S=m.nodeName&&m.nodeName.toLowerCase(),S==="select"||S==="input"&&m.type==="file")var v=Gm;else if(eg(m))if(wu)v=Qm;else{v=Vm;var z=Um}else(S=m.nodeName)&&S.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(v=Ym);if(v&&(v=v(t,g))){ku(y,v,r,f);break t}z&&z(t,m,g),t==="focusout"&&(z=m._wrapperState)&&z.controlled&&m.type==="number"&&jl(m,"number",m.value)}switch(z=g?fn(g):window,t){case"focusin":(eg(z)||z.contentEditable==="true")&&(pn=z,Ml=g,go=null);break;case"focusout":go=Ml=pn=null;break;case"mousedown":Wl=!0;break;case"contextmenu":case"mouseup":case"dragend":Wl=!1,sg(y,r,f);break;case"selectionchange":if(Jm)break;case"keydown":case"keyup":sg(y,r,f)}var _;if($a)t:{switch(t){case"compositionstart":var L="onCompositionStart";break t;case"compositionend":L="onCompositionEnd";break t;case"compositionupdate":L="onCompositionUpdate";break t}L=void 0}else bn?vu(t,r)&&(L="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(L="onCompositionStart");L&&(yu&&r.locale!=="ko"&&(bn||L!=="onCompositionStart"?L==="onCompositionEnd"&&bn&&(_=hu()):(pr=f,_a="value"in pr?pr.value:pr.textContent,bn=!0)),z=Pi(g,L),0<z.length&&(L=new Jd(L,t,null,r,f),y.push({event:L,listeners:z}),_?L.data=_:(_=xu(r),_!==null&&(L.data=_)))),(_=Pm?$m(t,r):Nm(t,r))&&(g=Pi(g,"onBeforeInput"),0<g.length&&(f=new Jd("onBeforeInput","beforeinput",null,r,f),y.push({event:f,listeners:g}),f.data=_))}Ru(y,e)})}function Io(t,e,r){return{instance:t,listener:e,currentTarget:r}}function Pi(t,e){for(var r=e+"Capture",o=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=vo(t,r),s!=null&&o.unshift(Io(t,s,i)),s=vo(t,e),s!=null&&o.push(Io(t,s,i))),t=t.return}return o}function sn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function dg(t,e,r,o,i){for(var s=e._reactName,l=[];r!==null&&r!==o;){var a=r,d=a.alternate,g=a.stateNode;if(d!==null&&d===o)break;a.tag===5&&g!==null&&(a=g,i?(d=vo(r,s),d!=null&&l.unshift(Io(r,d,a))):i||(d=vo(r,s),d!=null&&l.push(Io(r,d,a)))),r=r.return}l.length!==0&&t.push({event:e,listeners:l})}var ef=/\r\n?/g,rf=/\u0000|\uFFFD/g;function gg(t){return(typeof t=="string"?t:""+t).replace(ef,`
`).replace(rf,"")}function ri(t,e,r){if(e=gg(e),gg(t)!==e&&r)throw Error(V(425))}function $i(){}var _l=null,Ll=null;function Pl(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $l=typeof setTimeout=="function"?setTimeout:void 0,nf=typeof clearTimeout=="function"?clearTimeout:void 0,cg=typeof Promise=="function"?Promise:void 0,of=typeof queueMicrotask=="function"?queueMicrotask:typeof cg<"u"?function(t){return cg.resolve(null).then(t).catch(sf)}:$l;function sf(t){setTimeout(function(){throw t})}function Hs(t,e){var r=e,o=0;do{var i=r.nextSibling;if(t.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(o===0){t.removeChild(i),wo(e);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=i}while(r);wo(e)}function vr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ug(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var Pn=Math.random().toString(36).slice(2),Ue="__reactFiber$"+Pn,zo="__reactProps$"+Pn,nr="__reactContainer$"+Pn,Nl="__reactEvents$"+Pn,lf="__reactListeners$"+Pn,af="__reactHandles$"+Pn;function Lr(t){var e=t[Ue];if(e)return e;for(var r=t.parentNode;r;){if(e=r[nr]||r[Ue]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=ug(t);t!==null;){if(r=t[Ue])return r;t=ug(t)}return e}t=r,r=t.parentNode}return null}function Po(t){return t=t[Ue]||t[nr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function fn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(V(33))}function cs(t){return t[zo]||null}var Ol=[],hn=-1;function zr(t){return{current:t}}function At(t){0>hn||(t.current=Ol[hn],Ol[hn]=null,hn--)}function Rt(t,e){hn++,Ol[hn]=t.current,t.current=e}var Cr={},oe=zr(Cr),ue=zr(!1),Gr=Cr;function Dn(t,e){var r=t.type.contextTypes;if(!r)return Cr;var o=t.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===e)return o.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in r)i[s]=e[s];return o&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function be(t){return t=t.childContextTypes,t!=null}function Ni(){At(ue),At(oe)}function bg(t,e,r){if(oe.current!==Cr)throw Error(V(168));Rt(oe,e),Rt(ue,r)}function Au(t,e,r){var o=t.stateNode;if(e=e.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var i in o)if(!(i in e))throw Error(V(108,Up(t)||"Unknown",i));return Lt({},r,o)}function Oi(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Cr,Gr=oe.current,Rt(oe,t),Rt(ue,ue.current),!0}function pg(t,e,r){var o=t.stateNode;if(!o)throw Error(V(169));r?(t=Au(t,e,Gr),o.__reactInternalMemoizedMergedChildContext=t,At(ue),At(oe),Rt(oe,t)):At(ue),Rt(ue,r)}var qe=null,us=!1,Gs=!1;function Mu(t){qe===null?qe=[t]:qe.push(t)}function df(t){us=!0,Mu(t)}function Tr(){if(!Gs&&qe!==null){Gs=!0;var t=0,e=Bt;try{var r=qe;for(Bt=1;t<r.length;t++){var o=r[t];do o=o(!0);while(o!==null)}qe=null,us=!1}catch(i){throw qe!==null&&(qe=qe.slice(t+1)),su(Fa,Tr),i}finally{Bt=e,Gs=!1}}return null}var yn=[],vn=0,Hi=null,Gi=0,Se=[],Ce=0,Ur=null,Ze=1,tr="";function Ar(t,e){yn[vn++]=Gi,yn[vn++]=Hi,Hi=t,Gi=e}function Wu(t,e,r){Se[Ce++]=Ze,Se[Ce++]=tr,Se[Ce++]=Ur,Ur=t;var o=Ze;t=tr;var i=32-Me(o)-1;o&=~(1<<i),r+=1;var s=32-Me(e)+i;if(30<s){var l=i-i%5;s=(o&(1<<l)-1).toString(32),o>>=l,i-=l,Ze=1<<32-Me(e)+i|r<<i|o,tr=s+t}else Ze=1<<s|r<<i|o,tr=t}function Oa(t){t.return!==null&&(Ar(t,1),Wu(t,1,0))}function Ha(t){for(;t===Hi;)Hi=yn[--vn],yn[vn]=null,Gi=yn[--vn],yn[vn]=null;for(;t===Ur;)Ur=Se[--Ce],Se[Ce]=null,tr=Se[--Ce],Se[Ce]=null,Ze=Se[--Ce],Se[Ce]=null}var ye=null,he=null,Mt=!1,Ae=null;function _u(t,e){var r=Ie(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function mg(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ye=t,he=vr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ye=t,he=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=Ur!==null?{id:Ze,overflow:tr}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=Ie(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,ye=t,he=null,!0):!1;default:return!1}}function Hl(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Gl(t){if(Mt){var e=he;if(e){var r=e;if(!mg(t,e)){if(Hl(t))throw Error(V(418));e=vr(r.nextSibling);var o=ye;e&&mg(t,e)?_u(o,r):(t.flags=t.flags&-4097|2,Mt=!1,ye=t)}}else{if(Hl(t))throw Error(V(418));t.flags=t.flags&-4097|2,Mt=!1,ye=t}}}function fg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ye=t}function ni(t){if(t!==ye)return!1;if(!Mt)return fg(t),Mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Pl(t.type,t.memoizedProps)),e&&(e=he)){if(Hl(t))throw Lu(),Error(V(418));for(;e;)_u(t,e),e=vr(e.nextSibling)}if(fg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(V(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){he=vr(t.nextSibling);break t}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}he=null}}else he=ye?vr(t.stateNode.nextSibling):null;return!0}function Lu(){for(var t=he;t;)t=vr(t.nextSibling)}function Rn(){he=ye=null,Mt=!1}function Ga(t){Ae===null?Ae=[t]:Ae.push(t)}var gf=sr.ReactCurrentBatchConfig;function Qn(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(V(309));var o=r.stateNode}if(!o)throw Error(V(147,t));var i=o,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(l){var a=i.refs;l===null?delete a[s]:a[s]=l},e._stringRef=s,e)}if(typeof t!="string")throw Error(V(284));if(!r._owner)throw Error(V(290,t))}return t}function oi(t,e){throw t=Object.prototype.toString.call(e),Error(V(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function hg(t){var e=t._init;return e(t._payload)}function Pu(t){function e(b,c){if(t){var u=b.deletions;u===null?(b.deletions=[c],b.flags|=16):u.push(c)}}function r(b,c){if(!t)return null;for(;c!==null;)e(b,c),c=c.sibling;return null}function o(b,c){for(b=new Map;c!==null;)c.key!==null?b.set(c.key,c):b.set(c.index,c),c=c.sibling;return b}function i(b,c){return b=jr(b,c),b.index=0,b.sibling=null,b}function s(b,c,u){return b.index=u,t?(u=b.alternate,u!==null?(u=u.index,u<c?(b.flags|=2,c):u):(b.flags|=2,c)):(b.flags|=1048576,c)}function l(b){return t&&b.alternate===null&&(b.flags|=2),b}function a(b,c,u,x){return c===null||c.tag!==6?(c=Js(u,b.mode,x),c.return=b,c):(c=i(c,u),c.return=b,c)}function d(b,c,u,x){var v=u.type;return v===un?f(b,c,u.props.children,x,u.key):c!==null&&(c.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===dr&&hg(v)===c.type)?(x=i(c,u.props),x.ref=Qn(b,c,u),x.return=b,x):(x=Bi(u.type,u.key,u.props,null,b.mode,x),x.ref=Qn(b,c,u),x.return=b,x)}function g(b,c,u,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==u.containerInfo||c.stateNode.implementation!==u.implementation?(c=qs(u,b.mode,x),c.return=b,c):(c=i(c,u.children||[]),c.return=b,c)}function f(b,c,u,x,v){return c===null||c.tag!==7?(c=Hr(u,b.mode,x,v),c.return=b,c):(c=i(c,u),c.return=b,c)}function y(b,c,u){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Js(""+c,b.mode,u),c.return=b,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Yo:return u=Bi(c.type,c.key,c.props,null,b.mode,u),u.ref=Qn(b,null,c),u.return=b,u;case cn:return c=qs(c,b.mode,u),c.return=b,c;case dr:var x=c._init;return y(b,x(c._payload),u)}if(qn(c)||Hn(c))return c=Hr(c,b.mode,u,null),c.return=b,c;oi(b,c)}return null}function m(b,c,u,x){var v=c!==null?c.key:null;if(typeof u=="string"&&u!==""||typeof u=="number")return v!==null?null:a(b,c,""+u,x);if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Yo:return u.key===v?d(b,c,u,x):null;case cn:return u.key===v?g(b,c,u,x):null;case dr:return v=u._init,m(b,c,v(u._payload),x)}if(qn(u)||Hn(u))return v!==null?null:f(b,c,u,x,null);oi(b,u)}return null}function S(b,c,u,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return b=b.get(u)||null,a(c,b,""+x,v);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Yo:return b=b.get(x.key===null?u:x.key)||null,d(c,b,x,v);case cn:return b=b.get(x.key===null?u:x.key)||null,g(c,b,x,v);case dr:var z=x._init;return S(b,c,u,z(x._payload),v)}if(qn(x)||Hn(x))return b=b.get(u)||null,f(c,b,x,v,null);oi(c,x)}return null}function k(b,c,u,x){for(var v=null,z=null,_=c,L=c=0,F=null;_!==null&&L<u.length;L++){_.index>L?(F=_,_=null):F=_.sibling;var P=m(b,_,u[L],x);if(P===null){_===null&&(_=F);break}t&&_&&P.alternate===null&&e(b,_),c=s(P,c,L),z===null?v=P:z.sibling=P,z=P,_=F}if(L===u.length)return r(b,_),Mt&&Ar(b,L),v;if(_===null){for(;L<u.length;L++)_=y(b,u[L],x),_!==null&&(c=s(_,c,L),z===null?v=_:z.sibling=_,z=_);return Mt&&Ar(b,L),v}for(_=o(b,_);L<u.length;L++)F=S(_,b,L,u[L],x),F!==null&&(t&&F.alternate!==null&&_.delete(F.key===null?L:F.key),c=s(F,c,L),z===null?v=F:z.sibling=F,z=F);return t&&_.forEach(function(I){return e(b,I)}),Mt&&Ar(b,L),v}function C(b,c,u,x){var v=Hn(u);if(typeof v!="function")throw Error(V(150));if(u=v.call(u),u==null)throw Error(V(151));for(var z=v=null,_=c,L=c=0,F=null,P=u.next();_!==null&&!P.done;L++,P=u.next()){_.index>L?(F=_,_=null):F=_.sibling;var I=m(b,_,P.value,x);if(I===null){_===null&&(_=F);break}t&&_&&I.alternate===null&&e(b,_),c=s(I,c,L),z===null?v=I:z.sibling=I,z=I,_=F}if(P.done)return r(b,_),Mt&&Ar(b,L),v;if(_===null){for(;!P.done;L++,P=u.next())P=y(b,P.value,x),P!==null&&(c=s(P,c,L),z===null?v=P:z.sibling=P,z=P);return Mt&&Ar(b,L),v}for(_=o(b,_);!P.done;L++,P=u.next())P=S(_,b,L,P.value,x),P!==null&&(t&&P.alternate!==null&&_.delete(P.key===null?L:P.key),c=s(P,c,L),z===null?v=P:z.sibling=P,z=P);return t&&_.forEach(function(D){return e(b,D)}),Mt&&Ar(b,L),v}function T(b,c,u,x){if(typeof u=="object"&&u!==null&&u.type===un&&u.key===null&&(u=u.props.children),typeof u=="object"&&u!==null){switch(u.$$typeof){case Yo:t:{for(var v=u.key,z=c;z!==null;){if(z.key===v){if(v=u.type,v===un){if(z.tag===7){r(b,z.sibling),c=i(z,u.props.children),c.return=b,b=c;break t}}else if(z.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===dr&&hg(v)===z.type){r(b,z.sibling),c=i(z,u.props),c.ref=Qn(b,z,u),c.return=b,b=c;break t}r(b,z);break}else e(b,z);z=z.sibling}u.type===un?(c=Hr(u.props.children,b.mode,x,u.key),c.return=b,b=c):(x=Bi(u.type,u.key,u.props,null,b.mode,x),x.ref=Qn(b,c,u),x.return=b,b=x)}return l(b);case cn:t:{for(z=u.key;c!==null;){if(c.key===z)if(c.tag===4&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){r(b,c.sibling),c=i(c,u.children||[]),c.return=b,b=c;break t}else{r(b,c);break}else e(b,c);c=c.sibling}c=qs(u,b.mode,x),c.return=b,b=c}return l(b);case dr:return z=u._init,T(b,c,z(u._payload),x)}if(qn(u))return k(b,c,u,x);if(Hn(u))return C(b,c,u,x);oi(b,u)}return typeof u=="string"&&u!==""||typeof u=="number"?(u=""+u,c!==null&&c.tag===6?(r(b,c.sibling),c=i(c,u),c.return=b,b=c):(r(b,c),c=Js(u,b.mode,x),c.return=b,b=c),l(b)):r(b,c)}return T}var Fn=Pu(!0),$u=Pu(!1),Ui=zr(null),Vi=null,xn=null,Ua=null;function Va(){Ua=xn=Vi=null}function Ya(t){var e=Ui.current;At(Ui),t._currentValue=e}function Ul(t,e,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,o!==null&&(o.childLanes|=e)):o!==null&&(o.childLanes&e)!==e&&(o.childLanes|=e),t===r)break;t=t.return}}function Tn(t,e){Vi=t,Ua=xn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ce=!0),t.firstContext=null)}function Ee(t){var e=t._currentValue;if(Ua!==t)if(t={context:t,memoizedValue:e,next:null},xn===null){if(Vi===null)throw Error(V(308));xn=t,Vi.dependencies={lanes:0,firstContext:t}}else xn=xn.next=t;return e}var Pr=null;function Qa(t){Pr===null?Pr=[t]:Pr.push(t)}function Nu(t,e,r,o){var i=e.interleaved;return i===null?(r.next=r,Qa(e)):(r.next=i.next,i.next=r),e.interleaved=r,or(t,o)}function or(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var gr=!1;function Ka(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ou(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function er(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function xr(t,e,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,Ct&2){var i=o.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),o.pending=e,or(t,r)}return i=o.interleaved,i===null?(e.next=e,Qa(o)):(e.next=i.next,i.next=e),o.interleaved=e,or(t,r)}function Si(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var o=e.lanes;o&=t.pendingLanes,r|=o,e.lanes=r,Aa(t,r)}}function yg(t,e){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var i=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?i=s=l:s=s.next=l,r=r.next}while(r!==null);s===null?i=s=e:s=s.next=e}else i=s=e;r={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:o.shared,effects:o.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function Yi(t,e,r,o){var i=t.updateQueue;gr=!1;var s=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var d=a,g=d.next;d.next=null,l===null?s=g:l.next=g,l=d;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==l&&(a===null?f.firstBaseUpdate=g:a.next=g,f.lastBaseUpdate=d))}if(s!==null){var y=i.baseState;l=0,f=g=d=null,a=s;do{var m=a.lane,S=a.eventTime;if((o&m)===m){f!==null&&(f=f.next={eventTime:S,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});t:{var k=t,C=a;switch(m=e,S=r,C.tag){case 1:if(k=C.payload,typeof k=="function"){y=k.call(S,y,m);break t}y=k;break t;case 3:k.flags=k.flags&-65537|128;case 0:if(k=C.payload,m=typeof k=="function"?k.call(S,y,m):k,m==null)break t;y=Lt({},y,m);break t;case 2:gr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else S={eventTime:S,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(g=f=S,d=y):f=f.next=S,l|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(d=y),i.baseState=d,i.firstBaseUpdate=g,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do l|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Yr|=l,t.lanes=l,t.memoizedState=y}}function vg(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var o=t[e],i=o.callback;if(i!==null){if(o.callback=null,o=r,typeof i!="function")throw Error(V(191,i));i.call(o)}}}var $o={},Ye=zr($o),To=zr($o),Eo=zr($o);function $r(t){if(t===$o)throw Error(V(174));return t}function Xa(t,e){switch(Rt(Eo,e),Rt(To,t),Rt(Ye,$o),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Cl(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Cl(e,t)}At(Ye),Rt(Ye,e)}function An(){At(Ye),At(To),At(Eo)}function Hu(t){$r(Eo.current);var e=$r(Ye.current),r=Cl(e,t.type);e!==r&&(Rt(To,t),Rt(Ye,r))}function Ja(t){To.current===t&&(At(Ye),At(To))}var Wt=zr(0);function Qi(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Us=[];function qa(){for(var t=0;t<Us.length;t++)Us[t]._workInProgressVersionPrimary=null;Us.length=0}var Ci=sr.ReactCurrentDispatcher,Vs=sr.ReactCurrentBatchConfig,Vr=0,_t=null,Ht=null,Ut=null,Ki=!1,co=!1,Bo=0,cf=0;function te(){throw Error(V(321))}function Za(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!_e(t[r],e[r]))return!1;return!0}function td(t,e,r,o,i,s){if(Vr=s,_t=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ci.current=t===null||t.memoizedState===null?mf:ff,t=r(o,i),co){s=0;do{if(co=!1,Bo=0,25<=s)throw Error(V(301));s+=1,Ut=Ht=null,e.updateQueue=null,Ci.current=hf,t=r(o,i)}while(co)}if(Ci.current=Xi,e=Ht!==null&&Ht.next!==null,Vr=0,Ut=Ht=_t=null,Ki=!1,e)throw Error(V(300));return t}function ed(){var t=Bo!==0;return Bo=0,t}function Oe(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?_t.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function Be(){if(Ht===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=Ht.next;var e=Ut===null?_t.memoizedState:Ut.next;if(e!==null)Ut=e,Ht=t;else{if(t===null)throw Error(V(310));Ht=t,t={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},Ut===null?_t.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function Do(t,e){return typeof e=="function"?e(t):e}function Ys(t){var e=Be(),r=e.queue;if(r===null)throw Error(V(311));r.lastRenderedReducer=t;var o=Ht,i=o.baseQueue,s=r.pending;if(s!==null){if(i!==null){var l=i.next;i.next=s.next,s.next=l}o.baseQueue=i=s,r.pending=null}if(i!==null){s=i.next,o=o.baseState;var a=l=null,d=null,g=s;do{var f=g.lane;if((Vr&f)===f)d!==null&&(d=d.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),o=g.hasEagerState?g.eagerState:t(o,g.action);else{var y={lane:f,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};d===null?(a=d=y,l=o):d=d.next=y,_t.lanes|=f,Yr|=f}g=g.next}while(g!==null&&g!==s);d===null?l=o:d.next=a,_e(o,e.memoizedState)||(ce=!0),e.memoizedState=o,e.baseState=l,e.baseQueue=d,r.lastRenderedState=o}if(t=r.interleaved,t!==null){i=t;do s=i.lane,_t.lanes|=s,Yr|=s,i=i.next;while(i!==t)}else i===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function Qs(t){var e=Be(),r=e.queue;if(r===null)throw Error(V(311));r.lastRenderedReducer=t;var o=r.dispatch,i=r.pending,s=e.memoizedState;if(i!==null){r.pending=null;var l=i=i.next;do s=t(s,l.action),l=l.next;while(l!==i);_e(s,e.memoizedState)||(ce=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),r.lastRenderedState=s}return[s,o]}function Gu(){}function Uu(t,e){var r=_t,o=Be(),i=e(),s=!_e(o.memoizedState,i);if(s&&(o.memoizedState=i,ce=!0),o=o.queue,rd(Qu.bind(null,r,o,t),[t]),o.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(r.flags|=2048,Ro(9,Yu.bind(null,r,o,i,e),void 0,null),Vt===null)throw Error(V(349));Vr&30||Vu(r,e,i)}return i}function Vu(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function Yu(t,e,r,o){e.value=r,e.getSnapshot=o,Ku(e)&&Xu(t)}function Qu(t,e,r){return r(function(){Ku(e)&&Xu(t)})}function Ku(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!_e(t,r)}catch{return!0}}function Xu(t){var e=or(t,1);e!==null&&We(e,t,1,-1)}function xg(t){var e=Oe();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Do,lastRenderedState:t},e.queue=t,t=t.dispatch=pf.bind(null,_t,t),[e.memoizedState,t]}function Ro(t,e,r,o){return t={tag:t,create:e,destroy:r,deps:o,next:null},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,e.lastEffect=t)),t}function Ju(){return Be().memoizedState}function Ii(t,e,r,o){var i=Oe();_t.flags|=t,i.memoizedState=Ro(1|e,r,void 0,o===void 0?null:o)}function bs(t,e,r,o){var i=Be();o=o===void 0?null:o;var s=void 0;if(Ht!==null){var l=Ht.memoizedState;if(s=l.destroy,o!==null&&Za(o,l.deps)){i.memoizedState=Ro(e,r,s,o);return}}_t.flags|=t,i.memoizedState=Ro(1|e,r,s,o)}function kg(t,e){return Ii(8390656,8,t,e)}function rd(t,e){return bs(2048,8,t,e)}function qu(t,e){return bs(4,2,t,e)}function Zu(t,e){return bs(4,4,t,e)}function tb(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function eb(t,e,r){return r=r!=null?r.concat([t]):null,bs(4,4,tb.bind(null,e,t),r)}function nd(){}function rb(t,e){var r=Be();e=e===void 0?null:e;var o=r.memoizedState;return o!==null&&e!==null&&Za(e,o[1])?o[0]:(r.memoizedState=[t,e],t)}function nb(t,e){var r=Be();e=e===void 0?null:e;var o=r.memoizedState;return o!==null&&e!==null&&Za(e,o[1])?o[0]:(t=t(),r.memoizedState=[t,e],t)}function ob(t,e,r){return Vr&21?(_e(r,e)||(r=du(),_t.lanes|=r,Yr|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ce=!0),t.memoizedState=r)}function uf(t,e){var r=Bt;Bt=r!==0&&4>r?r:4,t(!0);var o=Vs.transition;Vs.transition={};try{t(!1),e()}finally{Bt=r,Vs.transition=o}}function ib(){return Be().memoizedState}function bf(t,e,r){var o=wr(t);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},sb(t))lb(e,r);else if(r=Nu(t,e,r,o),r!==null){var i=se();We(r,t,o,i),ab(r,e,o)}}function pf(t,e,r){var o=wr(t),i={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if(sb(t))lb(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var l=e.lastRenderedState,a=s(l,r);if(i.hasEagerState=!0,i.eagerState=a,_e(a,l)){var d=e.interleaved;d===null?(i.next=i,Qa(e)):(i.next=d.next,d.next=i),e.interleaved=i;return}}catch{}finally{}r=Nu(t,e,i,o),r!==null&&(i=se(),We(r,t,o,i),ab(r,e,o))}}function sb(t){var e=t.alternate;return t===_t||e!==null&&e===_t}function lb(t,e){co=Ki=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function ab(t,e,r){if(r&4194240){var o=e.lanes;o&=t.pendingLanes,r|=o,e.lanes=r,Aa(t,r)}}var Xi={readContext:Ee,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useInsertionEffect:te,useLayoutEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useMutableSource:te,useSyncExternalStore:te,useId:te,unstable_isNewReconciler:!1},mf={readContext:Ee,useCallback:function(t,e){return Oe().memoizedState=[t,e===void 0?null:e],t},useContext:Ee,useEffect:kg,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,Ii(4194308,4,tb.bind(null,e,t),r)},useLayoutEffect:function(t,e){return Ii(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ii(4,2,t,e)},useMemo:function(t,e){var r=Oe();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var o=Oe();return e=r!==void 0?r(e):e,o.memoizedState=o.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},o.queue=t,t=t.dispatch=bf.bind(null,_t,t),[o.memoizedState,t]},useRef:function(t){var e=Oe();return t={current:t},e.memoizedState=t},useState:xg,useDebugValue:nd,useDeferredValue:function(t){return Oe().memoizedState=t},useTransition:function(){var t=xg(!1),e=t[0];return t=uf.bind(null,t[1]),Oe().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var o=_t,i=Oe();if(Mt){if(r===void 0)throw Error(V(407));r=r()}else{if(r=e(),Vt===null)throw Error(V(349));Vr&30||Vu(o,e,r)}i.memoizedState=r;var s={value:r,getSnapshot:e};return i.queue=s,kg(Qu.bind(null,o,s,t),[t]),o.flags|=2048,Ro(9,Yu.bind(null,o,s,r,e),void 0,null),r},useId:function(){var t=Oe(),e=Vt.identifierPrefix;if(Mt){var r=tr,o=Ze;r=(o&~(1<<32-Me(o)-1)).toString(32)+r,e=":"+e+"R"+r,r=Bo++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=cf++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ff={readContext:Ee,useCallback:rb,useContext:Ee,useEffect:rd,useImperativeHandle:eb,useInsertionEffect:qu,useLayoutEffect:Zu,useMemo:nb,useReducer:Ys,useRef:Ju,useState:function(){return Ys(Do)},useDebugValue:nd,useDeferredValue:function(t){var e=Be();return ob(e,Ht.memoizedState,t)},useTransition:function(){var t=Ys(Do)[0],e=Be().memoizedState;return[t,e]},useMutableSource:Gu,useSyncExternalStore:Uu,useId:ib,unstable_isNewReconciler:!1},hf={readContext:Ee,useCallback:rb,useContext:Ee,useEffect:rd,useImperativeHandle:eb,useInsertionEffect:qu,useLayoutEffect:Zu,useMemo:nb,useReducer:Qs,useRef:Ju,useState:function(){return Qs(Do)},useDebugValue:nd,useDeferredValue:function(t){var e=Be();return Ht===null?e.memoizedState=t:ob(e,Ht.memoizedState,t)},useTransition:function(){var t=Qs(Do)[0],e=Be().memoizedState;return[t,e]},useMutableSource:Gu,useSyncExternalStore:Uu,useId:ib,unstable_isNewReconciler:!1};function Re(t,e){if(t&&t.defaultProps){e=Lt({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}function Vl(t,e,r,o){e=t.memoizedState,r=r(o,e),r=r==null?e:Lt({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var ps={isMounted:function(t){return(t=t._reactInternals)?qr(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var o=se(),i=wr(t),s=er(o,i);s.payload=e,r!=null&&(s.callback=r),e=xr(t,s,i),e!==null&&(We(e,t,i,o),Si(e,t,i))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var o=se(),i=wr(t),s=er(o,i);s.tag=1,s.payload=e,r!=null&&(s.callback=r),e=xr(t,s,i),e!==null&&(We(e,t,i,o),Si(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=se(),o=wr(t),i=er(r,o);i.tag=2,e!=null&&(i.callback=e),e=xr(t,i,o),e!==null&&(We(e,t,o,r),Si(e,t,o))}};function wg(t,e,r,o,i,s,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,s,l):e.prototype&&e.prototype.isPureReactComponent?!So(r,o)||!So(i,s):!0}function db(t,e,r){var o=!1,i=Cr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ee(s):(i=be(e)?Gr:oe.current,o=e.contextTypes,s=(o=o!=null)?Dn(t,i):Cr),e=new e(r,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ps,t.stateNode=e,e._reactInternals=t,o&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function jg(t,e,r,o){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,o),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,o),e.state!==t&&ps.enqueueReplaceState(e,e.state,null)}function Yl(t,e,r,o){var i=t.stateNode;i.props=r,i.state=t.memoizedState,i.refs={},Ka(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ee(s):(s=be(e)?Gr:oe.current,i.context=Dn(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Vl(t,e,s,r),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ps.enqueueReplaceState(i,i.state,null),Yi(t,r,i,o),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Mn(t,e){try{var r="",o=e;do r+=Gp(o),o=o.return;while(o);var i=r}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ks(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function Ql(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var yf=typeof WeakMap=="function"?WeakMap:Map;function gb(t,e,r){r=er(-1,r),r.tag=3,r.payload={element:null};var o=e.value;return r.callback=function(){qi||(qi=!0,oa=o),Ql(t,e)},r}function cb(t,e,r){r=er(-1,r),r.tag=3;var o=t.type.getDerivedStateFromError;if(typeof o=="function"){var i=e.value;r.payload=function(){return o(i)},r.callback=function(){Ql(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){Ql(t,e),typeof o!="function"&&(kr===null?kr=new Set([this]):kr.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),r}function Sg(t,e,r){var o=t.pingCache;if(o===null){o=t.pingCache=new yf;var i=new Set;o.set(e,i)}else i=o.get(e),i===void 0&&(i=new Set,o.set(e,i));i.has(r)||(i.add(r),t=Rf.bind(null,t,e,r),e.then(t,t))}function Cg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ig(t,e,r,o,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=er(-1,1),e.tag=2,xr(r,e,1))),r.lanes|=1),t)}var vf=sr.ReactCurrentOwner,ce=!1;function ie(t,e,r,o){e.child=t===null?$u(e,null,r,o):Fn(e,t.child,r,o)}function zg(t,e,r,o,i){r=r.render;var s=e.ref;return Tn(e,i),o=td(t,e,r,o,s,i),r=ed(),t!==null&&!ce?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ir(t,e,i)):(Mt&&r&&Oa(e),e.flags|=1,ie(t,e,o,i),e.child)}function Tg(t,e,r,o,i){if(t===null){var s=r.type;return typeof s=="function"&&!cd(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=s,ub(t,e,s,o,i)):(t=Bi(r.type,null,o,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var l=s.memoizedProps;if(r=r.compare,r=r!==null?r:So,r(l,o)&&t.ref===e.ref)return ir(t,e,i)}return e.flags|=1,t=jr(s,o),t.ref=e.ref,t.return=e,e.child=t}function ub(t,e,r,o,i){if(t!==null){var s=t.memoizedProps;if(So(s,o)&&t.ref===e.ref)if(ce=!1,e.pendingProps=o=s,(t.lanes&i)!==0)t.flags&131072&&(ce=!0);else return e.lanes=t.lanes,ir(t,e,i)}return Kl(t,e,r,o,i)}function bb(t,e,r){var o=e.pendingProps,i=o.children,s=t!==null?t.memoizedState:null;if(o.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Rt(wn,fe),fe|=r;else{if(!(r&1073741824))return t=s!==null?s.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Rt(wn,fe),fe|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=s!==null?s.baseLanes:r,Rt(wn,fe),fe|=o}else s!==null?(o=s.baseLanes|r,e.memoizedState=null):o=r,Rt(wn,fe),fe|=o;return ie(t,e,i,r),e.child}function pb(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function Kl(t,e,r,o,i){var s=be(r)?Gr:oe.current;return s=Dn(e,s),Tn(e,i),r=td(t,e,r,o,s,i),o=ed(),t!==null&&!ce?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ir(t,e,i)):(Mt&&o&&Oa(e),e.flags|=1,ie(t,e,r,i),e.child)}function Eg(t,e,r,o,i){if(be(r)){var s=!0;Oi(e)}else s=!1;if(Tn(e,i),e.stateNode===null)zi(t,e),db(e,r,o),Yl(e,r,o,i),o=!0;else if(t===null){var l=e.stateNode,a=e.memoizedProps;l.props=a;var d=l.context,g=r.contextType;typeof g=="object"&&g!==null?g=Ee(g):(g=be(r)?Gr:oe.current,g=Dn(e,g));var f=r.getDerivedStateFromProps,y=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";y||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==o||d!==g)&&jg(e,l,o,g),gr=!1;var m=e.memoizedState;l.state=m,Yi(e,o,l,i),d=e.memoizedState,a!==o||m!==d||ue.current||gr?(typeof f=="function"&&(Vl(e,r,f,o),d=e.memoizedState),(a=gr||wg(e,r,a,o,m,d,g))?(y||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=o,e.memoizedState=d),l.props=o,l.state=d,l.context=g,o=a):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),o=!1)}else{l=e.stateNode,Ou(t,e),a=e.memoizedProps,g=e.type===e.elementType?a:Re(e.type,a),l.props=g,y=e.pendingProps,m=l.context,d=r.contextType,typeof d=="object"&&d!==null?d=Ee(d):(d=be(r)?Gr:oe.current,d=Dn(e,d));var S=r.getDerivedStateFromProps;(f=typeof S=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==y||m!==d)&&jg(e,l,o,d),gr=!1,m=e.memoizedState,l.state=m,Yi(e,o,l,i);var k=e.memoizedState;a!==y||m!==k||ue.current||gr?(typeof S=="function"&&(Vl(e,r,S,o),k=e.memoizedState),(g=gr||wg(e,r,g,o,m,k,d)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(o,k,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(o,k,d)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=o,e.memoizedState=k),l.props=o,l.state=k,l.context=d,o=g):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),o=!1)}return Xl(t,e,r,o,s,i)}function Xl(t,e,r,o,i,s){pb(t,e);var l=(e.flags&128)!==0;if(!o&&!l)return i&&pg(e,r,!1),ir(t,e,s);o=e.stateNode,vf.current=e;var a=l&&typeof r.getDerivedStateFromError!="function"?null:o.render();return e.flags|=1,t!==null&&l?(e.child=Fn(e,t.child,null,s),e.child=Fn(e,null,a,s)):ie(t,e,a,s),e.memoizedState=o.state,i&&pg(e,r,!0),e.child}function mb(t){var e=t.stateNode;e.pendingContext?bg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&bg(t,e.context,!1),Xa(t,e.containerInfo)}function Bg(t,e,r,o,i){return Rn(),Ga(i),e.flags|=256,ie(t,e,r,o),e.child}var Jl={dehydrated:null,treeContext:null,retryLane:0};function ql(t){return{baseLanes:t,cachePool:null,transitions:null}}function fb(t,e,r){var o=e.pendingProps,i=Wt.current,s=!1,l=(e.flags&128)!==0,a;if((a=l)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Rt(Wt,i&1),t===null)return Gl(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=o.children,t=o.fallback,s?(o=e.mode,s=e.child,l={mode:"hidden",children:l},!(o&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=hs(l,o,0,null),t=Hr(t,o,r,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ql(r),e.memoizedState=Jl,t):od(e,l));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return xf(t,e,l,o,a,i,r);if(s){s=o.fallback,l=e.mode,i=t.child,a=i.sibling;var d={mode:"hidden",children:o.children};return!(l&1)&&e.child!==i?(o=e.child,o.childLanes=0,o.pendingProps=d,e.deletions=null):(o=jr(i,d),o.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=jr(a,s):(s=Hr(s,l,r,null),s.flags|=2),s.return=e,o.return=e,o.sibling=s,e.child=o,o=s,s=e.child,l=t.child.memoizedState,l=l===null?ql(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=t.childLanes&~r,e.memoizedState=Jl,o}return s=t.child,t=s.sibling,o=jr(s,{mode:"visible",children:o.children}),!(e.mode&1)&&(o.lanes=r),o.return=e,o.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=o,e.memoizedState=null,o}function od(t,e){return e=hs({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ii(t,e,r,o){return o!==null&&Ga(o),Fn(e,t.child,null,r),t=od(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function xf(t,e,r,o,i,s,l){if(r)return e.flags&256?(e.flags&=-257,o=Ks(Error(V(422))),ii(t,e,l,o)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=o.fallback,i=e.mode,o=hs({mode:"visible",children:o.children},i,0,null),s=Hr(s,i,l,null),s.flags|=2,o.return=e,s.return=e,o.sibling=s,e.child=o,e.mode&1&&Fn(e,t.child,null,l),e.child.memoizedState=ql(l),e.memoizedState=Jl,s);if(!(e.mode&1))return ii(t,e,l,null);if(i.data==="$!"){if(o=i.nextSibling&&i.nextSibling.dataset,o)var a=o.dgst;return o=a,s=Error(V(419)),o=Ks(s,o,void 0),ii(t,e,l,o)}if(a=(l&t.childLanes)!==0,ce||a){if(o=Vt,o!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(o.suspendedLanes|l)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,or(t,i),We(o,t,i,-1))}return gd(),o=Ks(Error(V(421))),ii(t,e,l,o)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Ff.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,he=vr(i.nextSibling),ye=e,Mt=!0,Ae=null,t!==null&&(Se[Ce++]=Ze,Se[Ce++]=tr,Se[Ce++]=Ur,Ze=t.id,tr=t.overflow,Ur=e),e=od(e,o.children),e.flags|=4096,e)}function Dg(t,e,r){t.lanes|=e;var o=t.alternate;o!==null&&(o.lanes|=e),Ul(t.return,e,r)}function Xs(t,e,r,o,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=r,s.tailMode=i)}function hb(t,e,r){var o=e.pendingProps,i=o.revealOrder,s=o.tail;if(ie(t,e,o.children,r),o=Wt.current,o&2)o=o&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dg(t,r,e);else if(t.tag===19)Dg(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}if(Rt(Wt,o),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(r=e.child,i=null;r!==null;)t=r.alternate,t!==null&&Qi(t)===null&&(i=r),r=r.sibling;r=i,r===null?(i=e.child,e.child=null):(i=r.sibling,r.sibling=null),Xs(e,!1,i,r,s);break;case"backwards":for(r=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Qi(t)===null){e.child=i;break}t=i.sibling,i.sibling=r,r=i,i=t}Xs(e,!0,r,null,s);break;case"together":Xs(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function zi(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ir(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),Yr|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(V(153));if(e.child!==null){for(t=e.child,r=jr(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=jr(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function kf(t,e,r){switch(e.tag){case 3:mb(e),Rn();break;case 5:Hu(e);break;case 1:be(e.type)&&Oi(e);break;case 4:Xa(e,e.stateNode.containerInfo);break;case 10:var o=e.type._context,i=e.memoizedProps.value;Rt(Ui,o._currentValue),o._currentValue=i;break;case 13:if(o=e.memoizedState,o!==null)return o.dehydrated!==null?(Rt(Wt,Wt.current&1),e.flags|=128,null):r&e.child.childLanes?fb(t,e,r):(Rt(Wt,Wt.current&1),t=ir(t,e,r),t!==null?t.sibling:null);Rt(Wt,Wt.current&1);break;case 19:if(o=(r&e.childLanes)!==0,t.flags&128){if(o)return hb(t,e,r);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Rt(Wt,Wt.current),o)break;return null;case 22:case 23:return e.lanes=0,bb(t,e,r)}return ir(t,e,r)}var yb,Zl,vb,xb;yb=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Zl=function(){};vb=function(t,e,r,o){var i=t.memoizedProps;if(i!==o){t=e.stateNode,$r(Ye.current);var s=null;switch(r){case"input":i=kl(t,i),o=kl(t,o),s=[];break;case"select":i=Lt({},i,{value:void 0}),o=Lt({},o,{value:void 0}),s=[];break;case"textarea":i=Sl(t,i),o=Sl(t,o),s=[];break;default:typeof i.onClick!="function"&&typeof o.onClick=="function"&&(t.onclick=$i)}Il(r,o);var l;r=null;for(g in i)if(!o.hasOwnProperty(g)&&i.hasOwnProperty(g)&&i[g]!=null)if(g==="style"){var a=i[g];for(l in a)a.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(ho.hasOwnProperty(g)?s||(s=[]):(s=s||[]).push(g,null));for(g in o){var d=o[g];if(a=i!=null?i[g]:void 0,o.hasOwnProperty(g)&&d!==a&&(d!=null||a!=null))if(g==="style")if(a){for(l in a)!a.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in d)d.hasOwnProperty(l)&&a[l]!==d[l]&&(r||(r={}),r[l]=d[l])}else r||(s||(s=[]),s.push(g,r)),r=d;else g==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,a=a?a.__html:void 0,d!=null&&a!==d&&(s=s||[]).push(g,d)):g==="children"?typeof d!="string"&&typeof d!="number"||(s=s||[]).push(g,""+d):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(ho.hasOwnProperty(g)?(d!=null&&g==="onScroll"&&Ft("scroll",t),s||a===d||(s=[])):(s=s||[]).push(g,d))}r&&(s=s||[]).push("style",r);var g=s;(e.updateQueue=g)&&(e.flags|=4)}};xb=function(t,e,r,o){r!==o&&(e.flags|=4)};function Kn(t,e){if(!Mt)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function ee(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(e)for(var i=t.child;i!==null;)r|=i.lanes|i.childLanes,o|=i.subtreeFlags&14680064,o|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)r|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=o,t.childLanes=r,e}function wf(t,e,r){var o=e.pendingProps;switch(Ha(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ee(e),null;case 1:return be(e.type)&&Ni(),ee(e),null;case 3:return o=e.stateNode,An(),At(ue),At(oe),qa(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(t===null||t.child===null)&&(ni(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ae!==null&&(la(Ae),Ae=null))),Zl(t,e),ee(e),null;case 5:Ja(e);var i=$r(Eo.current);if(r=e.type,t!==null&&e.stateNode!=null)vb(t,e,r,o,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!o){if(e.stateNode===null)throw Error(V(166));return ee(e),null}if(t=$r(Ye.current),ni(e)){o=e.stateNode,r=e.type;var s=e.memoizedProps;switch(o[Ue]=e,o[zo]=s,t=(e.mode&1)!==0,r){case"dialog":Ft("cancel",o),Ft("close",o);break;case"iframe":case"object":case"embed":Ft("load",o);break;case"video":case"audio":for(i=0;i<to.length;i++)Ft(to[i],o);break;case"source":Ft("error",o);break;case"img":case"image":case"link":Ft("error",o),Ft("load",o);break;case"details":Ft("toggle",o);break;case"input":$d(o,s),Ft("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!s.multiple},Ft("invalid",o);break;case"textarea":Od(o,s),Ft("invalid",o)}Il(r,s),i=null;for(var l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="children"?typeof a=="string"?o.textContent!==a&&(s.suppressHydrationWarning!==!0&&ri(o.textContent,a,t),i=["children",a]):typeof a=="number"&&o.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ri(o.textContent,a,t),i=["children",""+a]):ho.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&Ft("scroll",o)}switch(r){case"input":Qo(o),Nd(o,s,!0);break;case"textarea":Qo(o),Hd(o);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(o.onclick=$i)}o=i,e.updateQueue=o,o!==null&&(e.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Qc(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof o.is=="string"?t=l.createElement(r,{is:o.is}):(t=l.createElement(r),r==="select"&&(l=t,o.multiple?l.multiple=!0:o.size&&(l.size=o.size))):t=l.createElementNS(t,r),t[Ue]=e,t[zo]=o,yb(t,e,!1,!1),e.stateNode=t;t:{switch(l=zl(r,o),r){case"dialog":Ft("cancel",t),Ft("close",t),i=o;break;case"iframe":case"object":case"embed":Ft("load",t),i=o;break;case"video":case"audio":for(i=0;i<to.length;i++)Ft(to[i],t);i=o;break;case"source":Ft("error",t),i=o;break;case"img":case"image":case"link":Ft("error",t),Ft("load",t),i=o;break;case"details":Ft("toggle",t),i=o;break;case"input":$d(t,o),i=kl(t,o),Ft("invalid",t);break;case"option":i=o;break;case"select":t._wrapperState={wasMultiple:!!o.multiple},i=Lt({},o,{value:void 0}),Ft("invalid",t);break;case"textarea":Od(t,o),i=Sl(t,o),Ft("invalid",t);break;default:i=o}Il(r,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var d=a[s];s==="style"?Jc(t,d):s==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Kc(t,d)):s==="children"?typeof d=="string"?(r!=="textarea"||d!=="")&&yo(t,d):typeof d=="number"&&yo(t,""+d):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ho.hasOwnProperty(s)?d!=null&&s==="onScroll"&&Ft("scroll",t):d!=null&&Ta(t,s,d,l))}switch(r){case"input":Qo(t),Nd(t,o,!1);break;case"textarea":Qo(t),Hd(t);break;case"option":o.value!=null&&t.setAttribute("value",""+Sr(o.value));break;case"select":t.multiple=!!o.multiple,s=o.value,s!=null?Sn(t,!!o.multiple,s,!1):o.defaultValue!=null&&Sn(t,!!o.multiple,o.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=$i)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}}o&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ee(e),null;case 6:if(t&&e.stateNode!=null)xb(t,e,t.memoizedProps,o);else{if(typeof o!="string"&&e.stateNode===null)throw Error(V(166));if(r=$r(Eo.current),$r(Ye.current),ni(e)){if(o=e.stateNode,r=e.memoizedProps,o[Ue]=e,(s=o.nodeValue!==r)&&(t=ye,t!==null))switch(t.tag){case 3:ri(o.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ri(o.nodeValue,r,(t.mode&1)!==0)}s&&(e.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[Ue]=e,e.stateNode=o}return ee(e),null;case 13:if(At(Wt),o=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Mt&&he!==null&&e.mode&1&&!(e.flags&128))Lu(),Rn(),e.flags|=98560,s=!1;else if(s=ni(e),o!==null&&o.dehydrated!==null){if(t===null){if(!s)throw Error(V(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(V(317));s[Ue]=e}else Rn(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ee(e),s=!1}else Ae!==null&&(la(Ae),Ae=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(o=o!==null,o!==(t!==null&&t.memoizedState!==null)&&o&&(e.child.flags|=8192,e.mode&1&&(t===null||Wt.current&1?Gt===0&&(Gt=3):gd())),e.updateQueue!==null&&(e.flags|=4),ee(e),null);case 4:return An(),Zl(t,e),t===null&&Co(e.stateNode.containerInfo),ee(e),null;case 10:return Ya(e.type._context),ee(e),null;case 17:return be(e.type)&&Ni(),ee(e),null;case 19:if(At(Wt),s=e.memoizedState,s===null)return ee(e),null;if(o=(e.flags&128)!==0,l=s.rendering,l===null)if(o)Kn(s,!1);else{if(Gt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(l=Qi(t),l!==null){for(e.flags|=128,Kn(s,!1),o=l.updateQueue,o!==null&&(e.updateQueue=o,e.flags|=4),e.subtreeFlags=0,o=r,r=e.child;r!==null;)s=r,t=o,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,t=l.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return Rt(Wt,Wt.current&1|2),e.child}t=t.sibling}s.tail!==null&&$t()>Wn&&(e.flags|=128,o=!0,Kn(s,!1),e.lanes=4194304)}else{if(!o)if(t=Qi(l),t!==null){if(e.flags|=128,o=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),Kn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!Mt)return ee(e),null}else 2*$t()-s.renderingStartTime>Wn&&r!==1073741824&&(e.flags|=128,o=!0,Kn(s,!1),e.lanes=4194304);s.isBackwards?(l.sibling=e.child,e.child=l):(r=s.last,r!==null?r.sibling=l:e.child=l,s.last=l)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=$t(),e.sibling=null,r=Wt.current,Rt(Wt,o?r&1|2:r&1),e):(ee(e),null);case 22:case 23:return dd(),o=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==o&&(e.flags|=8192),o&&e.mode&1?fe&1073741824&&(ee(e),e.subtreeFlags&6&&(e.flags|=8192)):ee(e),null;case 24:return null;case 25:return null}throw Error(V(156,e.tag))}function jf(t,e){switch(Ha(e),e.tag){case 1:return be(e.type)&&Ni(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return An(),At(ue),At(oe),qa(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ja(e),null;case 13:if(At(Wt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(V(340));Rn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return At(Wt),null;case 4:return An(),null;case 10:return Ya(e.type._context),null;case 22:case 23:return dd(),null;case 24:return null;default:return null}}var si=!1,re=!1,Sf=typeof WeakSet=="function"?WeakSet:Set,ot=null;function kn(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){Pt(t,e,o)}else r.current=null}function ta(t,e,r){try{r()}catch(o){Pt(t,e,o)}}var Rg=!1;function Cf(t,e){if(_l=_i,t=Cu(),Na(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var i=o.anchorOffset,s=o.focusNode;o=o.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break t}var l=0,a=-1,d=-1,g=0,f=0,y=t,m=null;e:for(;;){for(var S;y!==r||i!==0&&y.nodeType!==3||(a=l+i),y!==s||o!==0&&y.nodeType!==3||(d=l+o),y.nodeType===3&&(l+=y.nodeValue.length),(S=y.firstChild)!==null;)m=y,y=S;for(;;){if(y===t)break e;if(m===r&&++g===i&&(a=l),m===s&&++f===o&&(d=l),(S=y.nextSibling)!==null)break;y=m,m=y.parentNode}y=S}r=a===-1||d===-1?null:{start:a,end:d}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ll={focusedElem:t,selectionRange:r},_i=!1,ot=e;ot!==null;)if(e=ot,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ot=t;else for(;ot!==null;){e=ot;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var C=k.memoizedProps,T=k.memoizedState,b=e.stateNode,c=b.getSnapshotBeforeUpdate(e.elementType===e.type?C:Re(e.type,C),T);b.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var u=e.stateNode.containerInfo;u.nodeType===1?u.textContent="":u.nodeType===9&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(x){Pt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,ot=t;break}ot=e.return}return k=Rg,Rg=!1,k}function uo(t,e,r){var o=e.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var i=o=o.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ta(e,r,s)}i=i.next}while(i!==o)}}function ms(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var o=r.create;r.destroy=o()}r=r.next}while(r!==e)}}function ea(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function kb(t){var e=t.alternate;e!==null&&(t.alternate=null,kb(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ue],delete e[zo],delete e[Nl],delete e[lf],delete e[af])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function wb(t){return t.tag===5||t.tag===3||t.tag===4}function Fg(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||wb(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ra(t,e,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=$i));else if(o!==4&&(t=t.child,t!==null))for(ra(t,e,r),t=t.sibling;t!==null;)ra(t,e,r),t=t.sibling}function na(t,e,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(o!==4&&(t=t.child,t!==null))for(na(t,e,r),t=t.sibling;t!==null;)na(t,e,r),t=t.sibling}var Kt=null,Fe=!1;function ar(t,e,r){for(r=r.child;r!==null;)jb(t,e,r),r=r.sibling}function jb(t,e,r){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(ls,r)}catch{}switch(r.tag){case 5:re||kn(r,e);case 6:var o=Kt,i=Fe;Kt=null,ar(t,e,r),Kt=o,Fe=i,Kt!==null&&(Fe?(t=Kt,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):Kt.removeChild(r.stateNode));break;case 18:Kt!==null&&(Fe?(t=Kt,r=r.stateNode,t.nodeType===8?Hs(t.parentNode,r):t.nodeType===1&&Hs(t,r),wo(t)):Hs(Kt,r.stateNode));break;case 4:o=Kt,i=Fe,Kt=r.stateNode.containerInfo,Fe=!0,ar(t,e,r),Kt=o,Fe=i;break;case 0:case 11:case 14:case 15:if(!re&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){i=o=o.next;do{var s=i,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&ta(r,e,l),i=i.next}while(i!==o)}ar(t,e,r);break;case 1:if(!re&&(kn(r,e),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(a){Pt(r,e,a)}ar(t,e,r);break;case 21:ar(t,e,r);break;case 22:r.mode&1?(re=(o=re)||r.memoizedState!==null,ar(t,e,r),re=o):ar(t,e,r);break;default:ar(t,e,r)}}function Ag(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new Sf),e.forEach(function(o){var i=Af.bind(null,t,o);r.has(o)||(r.add(o),o.then(i,i))})}}function De(t,e){var r=e.deletions;if(r!==null)for(var o=0;o<r.length;o++){var i=r[o];try{var s=t,l=e,a=l;t:for(;a!==null;){switch(a.tag){case 5:Kt=a.stateNode,Fe=!1;break t;case 3:Kt=a.stateNode.containerInfo,Fe=!0;break t;case 4:Kt=a.stateNode.containerInfo,Fe=!0;break t}a=a.return}if(Kt===null)throw Error(V(160));jb(s,l,i),Kt=null,Fe=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(g){Pt(i,e,g)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Sb(e,t),e=e.sibling}function Sb(t,e){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(De(e,t),Le(t),o&4){try{uo(3,t,t.return),ms(3,t)}catch(C){Pt(t,t.return,C)}try{uo(5,t,t.return)}catch(C){Pt(t,t.return,C)}}break;case 1:De(e,t),Le(t),o&512&&r!==null&&kn(r,r.return);break;case 5:if(De(e,t),Le(t),o&512&&r!==null&&kn(r,r.return),t.flags&32){var i=t.stateNode;try{yo(i,"")}catch(C){Pt(t,t.return,C)}}if(o&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,l=r!==null?r.memoizedProps:s,a=t.type,d=t.updateQueue;if(t.updateQueue=null,d!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Vc(i,s),zl(a,l);var g=zl(a,s);for(l=0;l<d.length;l+=2){var f=d[l],y=d[l+1];f==="style"?Jc(i,y):f==="dangerouslySetInnerHTML"?Kc(i,y):f==="children"?yo(i,y):Ta(i,f,y,g)}switch(a){case"input":wl(i,s);break;case"textarea":Yc(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var S=s.value;S!=null?Sn(i,!!s.multiple,S,!1):m!==!!s.multiple&&(s.defaultValue!=null?Sn(i,!!s.multiple,s.defaultValue,!0):Sn(i,!!s.multiple,s.multiple?[]:"",!1))}i[zo]=s}catch(C){Pt(t,t.return,C)}}break;case 6:if(De(e,t),Le(t),o&4){if(t.stateNode===null)throw Error(V(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(C){Pt(t,t.return,C)}}break;case 3:if(De(e,t),Le(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{wo(e.containerInfo)}catch(C){Pt(t,t.return,C)}break;case 4:De(e,t),Le(t);break;case 13:De(e,t),Le(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ld=$t())),o&4&&Ag(t);break;case 22:if(f=r!==null&&r.memoizedState!==null,t.mode&1?(re=(g=re)||f,De(e,t),re=g):De(e,t),Le(t),o&8192){if(g=t.memoizedState!==null,(t.stateNode.isHidden=g)&&!f&&t.mode&1)for(ot=t,f=t.child;f!==null;){for(y=ot=f;ot!==null;){switch(m=ot,S=m.child,m.tag){case 0:case 11:case 14:case 15:uo(4,m,m.return);break;case 1:kn(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){o=m,r=m.return;try{e=o,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(C){Pt(o,r,C)}}break;case 5:kn(m,m.return);break;case 22:if(m.memoizedState!==null){Wg(y);continue}}S!==null?(S.return=m,ot=S):Wg(y)}f=f.sibling}t:for(f=null,y=t;;){if(y.tag===5){if(f===null){f=y;try{i=y.stateNode,g?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=y.stateNode,d=y.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,a.style.display=Xc("display",l))}catch(C){Pt(t,t.return,C)}}}else if(y.tag===6){if(f===null)try{y.stateNode.nodeValue=g?"":y.memoizedProps}catch(C){Pt(t,t.return,C)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===t)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===t)break t;for(;y.sibling===null;){if(y.return===null||y.return===t)break t;f===y&&(f=null),y=y.return}f===y&&(f=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:De(e,t),Le(t),o&4&&Ag(t);break;case 21:break;default:De(e,t),Le(t)}}function Le(t){var e=t.flags;if(e&2){try{t:{for(var r=t.return;r!==null;){if(wb(r)){var o=r;break t}r=r.return}throw Error(V(160))}switch(o.tag){case 5:var i=o.stateNode;o.flags&32&&(yo(i,""),o.flags&=-33);var s=Fg(t);na(t,s,i);break;case 3:case 4:var l=o.stateNode.containerInfo,a=Fg(t);ra(t,a,l);break;default:throw Error(V(161))}}catch(d){Pt(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function If(t,e,r){ot=t,Cb(t)}function Cb(t,e,r){for(var o=(t.mode&1)!==0;ot!==null;){var i=ot,s=i.child;if(i.tag===22&&o){var l=i.memoizedState!==null||si;if(!l){var a=i.alternate,d=a!==null&&a.memoizedState!==null||re;a=si;var g=re;if(si=l,(re=d)&&!g)for(ot=i;ot!==null;)l=ot,d=l.child,l.tag===22&&l.memoizedState!==null?_g(i):d!==null?(d.return=l,ot=d):_g(i);for(;s!==null;)ot=s,Cb(s),s=s.sibling;ot=i,si=a,re=g}Mg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,ot=s):Mg(t)}}function Mg(t){for(;ot!==null;){var e=ot;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:re||ms(5,e);break;case 1:var o=e.stateNode;if(e.flags&4&&!re)if(r===null)o.componentDidMount();else{var i=e.elementType===e.type?r.memoizedProps:Re(e.type,r.memoizedProps);o.componentDidUpdate(i,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&vg(e,s,o);break;case 3:var l=e.updateQueue;if(l!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}vg(e,l,r)}break;case 5:var a=e.stateNode;if(r===null&&e.flags&4){r=a;var d=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&r.focus();break;case"img":d.src&&(r.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var g=e.alternate;if(g!==null){var f=g.memoizedState;if(f!==null){var y=f.dehydrated;y!==null&&wo(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}re||e.flags&512&&ea(e)}catch(m){Pt(e,e.return,m)}}if(e===t){ot=null;break}if(r=e.sibling,r!==null){r.return=e.return,ot=r;break}ot=e.return}}function Wg(t){for(;ot!==null;){var e=ot;if(e===t){ot=null;break}var r=e.sibling;if(r!==null){r.return=e.return,ot=r;break}ot=e.return}}function _g(t){for(;ot!==null;){var e=ot;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{ms(4,e)}catch(d){Pt(e,r,d)}break;case 1:var o=e.stateNode;if(typeof o.componentDidMount=="function"){var i=e.return;try{o.componentDidMount()}catch(d){Pt(e,i,d)}}var s=e.return;try{ea(e)}catch(d){Pt(e,s,d)}break;case 5:var l=e.return;try{ea(e)}catch(d){Pt(e,l,d)}}}catch(d){Pt(e,e.return,d)}if(e===t){ot=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ot=a;break}ot=e.return}}var zf=Math.ceil,Ji=sr.ReactCurrentDispatcher,id=sr.ReactCurrentOwner,Te=sr.ReactCurrentBatchConfig,Ct=0,Vt=null,Ot=null,Xt=0,fe=0,wn=zr(0),Gt=0,Fo=null,Yr=0,fs=0,sd=0,bo=null,ge=null,ld=0,Wn=1/0,Xe=null,qi=!1,oa=null,kr=null,li=!1,mr=null,Zi=0,po=0,ia=null,Ti=-1,Ei=0;function se(){return Ct&6?$t():Ti!==-1?Ti:Ti=$t()}function wr(t){return t.mode&1?Ct&2&&Xt!==0?Xt&-Xt:gf.transition!==null?(Ei===0&&(Ei=du()),Ei):(t=Bt,t!==0||(t=window.event,t=t===void 0?16:fu(t.type)),t):1}function We(t,e,r,o){if(50<po)throw po=0,ia=null,Error(V(185));_o(t,r,o),(!(Ct&2)||t!==Vt)&&(t===Vt&&(!(Ct&2)&&(fs|=r),Gt===4&&ur(t,Xt)),pe(t,o),r===1&&Ct===0&&!(e.mode&1)&&(Wn=$t()+500,us&&Tr()))}function pe(t,e){var r=t.callbackNode;dm(t,e);var o=Wi(t,t===Vt?Xt:0);if(o===0)r!==null&&Vd(r),t.callbackNode=null,t.callbackPriority=0;else if(e=o&-o,t.callbackPriority!==e){if(r!=null&&Vd(r),e===1)t.tag===0?df(Lg.bind(null,t)):Mu(Lg.bind(null,t)),of(function(){!(Ct&6)&&Tr()}),r=null;else{switch(gu(o)){case 1:r=Fa;break;case 4:r=lu;break;case 16:r=Mi;break;case 536870912:r=au;break;default:r=Mi}r=Fb(r,Ib.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function Ib(t,e){if(Ti=-1,Ei=0,Ct&6)throw Error(V(327));var r=t.callbackNode;if(En()&&t.callbackNode!==r)return null;var o=Wi(t,t===Vt?Xt:0);if(o===0)return null;if(o&30||o&t.expiredLanes||e)e=ts(t,o);else{e=o;var i=Ct;Ct|=2;var s=Tb();(Vt!==t||Xt!==e)&&(Xe=null,Wn=$t()+500,Or(t,e));do try{Bf();break}catch(a){zb(t,a)}while(!0);Va(),Ji.current=s,Ct=i,Ot!==null?e=0:(Vt=null,Xt=0,e=Gt)}if(e!==0){if(e===2&&(i=Rl(t),i!==0&&(o=i,e=sa(t,i))),e===1)throw r=Fo,Or(t,0),ur(t,o),pe(t,$t()),r;if(e===6)ur(t,o);else{if(i=t.current.alternate,!(o&30)&&!Tf(i)&&(e=ts(t,o),e===2&&(s=Rl(t),s!==0&&(o=s,e=sa(t,s))),e===1))throw r=Fo,Or(t,0),ur(t,o),pe(t,$t()),r;switch(t.finishedWork=i,t.finishedLanes=o,e){case 0:case 1:throw Error(V(345));case 2:Mr(t,ge,Xe);break;case 3:if(ur(t,o),(o&130023424)===o&&(e=ld+500-$t(),10<e)){if(Wi(t,0)!==0)break;if(i=t.suspendedLanes,(i&o)!==o){se(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=$l(Mr.bind(null,t,ge,Xe),e);break}Mr(t,ge,Xe);break;case 4:if(ur(t,o),(o&4194240)===o)break;for(e=t.eventTimes,i=-1;0<o;){var l=31-Me(o);s=1<<l,l=e[l],l>i&&(i=l),o&=~s}if(o=i,o=$t()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*zf(o/1960))-o,10<o){t.timeoutHandle=$l(Mr.bind(null,t,ge,Xe),o);break}Mr(t,ge,Xe);break;case 5:Mr(t,ge,Xe);break;default:throw Error(V(329))}}}return pe(t,$t()),t.callbackNode===r?Ib.bind(null,t):null}function sa(t,e){var r=bo;return t.current.memoizedState.isDehydrated&&(Or(t,e).flags|=256),t=ts(t,e),t!==2&&(e=ge,ge=r,e!==null&&la(e)),t}function la(t){ge===null?ge=t:ge.push.apply(ge,t)}function Tf(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var i=r[o],s=i.getSnapshot;i=i.value;try{if(!_e(s(),i))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ur(t,e){for(e&=~sd,e&=~fs,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-Me(e),o=1<<r;t[r]=-1,e&=~o}}function Lg(t){if(Ct&6)throw Error(V(327));En();var e=Wi(t,0);if(!(e&1))return pe(t,$t()),null;var r=ts(t,e);if(t.tag!==0&&r===2){var o=Rl(t);o!==0&&(e=o,r=sa(t,o))}if(r===1)throw r=Fo,Or(t,0),ur(t,e),pe(t,$t()),r;if(r===6)throw Error(V(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mr(t,ge,Xe),pe(t,$t()),null}function ad(t,e){var r=Ct;Ct|=1;try{return t(e)}finally{Ct=r,Ct===0&&(Wn=$t()+500,us&&Tr())}}function Qr(t){mr!==null&&mr.tag===0&&!(Ct&6)&&En();var e=Ct;Ct|=1;var r=Te.transition,o=Bt;try{if(Te.transition=null,Bt=1,t)return t()}finally{Bt=o,Te.transition=r,Ct=e,!(Ct&6)&&Tr()}}function dd(){fe=wn.current,At(wn)}function Or(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,nf(r)),Ot!==null)for(r=Ot.return;r!==null;){var o=r;switch(Ha(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Ni();break;case 3:An(),At(ue),At(oe),qa();break;case 5:Ja(o);break;case 4:An();break;case 13:At(Wt);break;case 19:At(Wt);break;case 10:Ya(o.type._context);break;case 22:case 23:dd()}r=r.return}if(Vt=t,Ot=t=jr(t.current,null),Xt=fe=e,Gt=0,Fo=null,sd=fs=Yr=0,ge=bo=null,Pr!==null){for(e=0;e<Pr.length;e++)if(r=Pr[e],o=r.interleaved,o!==null){r.interleaved=null;var i=o.next,s=r.pending;if(s!==null){var l=s.next;s.next=i,o.next=l}r.pending=o}Pr=null}return t}function zb(t,e){do{var r=Ot;try{if(Va(),Ci.current=Xi,Ki){for(var o=_t.memoizedState;o!==null;){var i=o.queue;i!==null&&(i.pending=null),o=o.next}Ki=!1}if(Vr=0,Ut=Ht=_t=null,co=!1,Bo=0,id.current=null,r===null||r.return===null){Gt=1,Fo=e,Ot=null;break}t:{var s=t,l=r.return,a=r,d=e;if(e=Xt,a.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var g=d,f=a,y=f.tag;if(!(f.mode&1)&&(y===0||y===11||y===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var S=Cg(l);if(S!==null){S.flags&=-257,Ig(S,l,a,s,e),S.mode&1&&Sg(s,g,e),e=S,d=g;var k=e.updateQueue;if(k===null){var C=new Set;C.add(d),e.updateQueue=C}else k.add(d);break t}else{if(!(e&1)){Sg(s,g,e),gd();break t}d=Error(V(426))}}else if(Mt&&a.mode&1){var T=Cg(l);if(T!==null){!(T.flags&65536)&&(T.flags|=256),Ig(T,l,a,s,e),Ga(Mn(d,a));break t}}s=d=Mn(d,a),Gt!==4&&(Gt=2),bo===null?bo=[s]:bo.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var b=gb(s,d,e);yg(s,b);break t;case 1:a=d;var c=s.type,u=s.stateNode;if(!(s.flags&128)&&(typeof c.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(kr===null||!kr.has(u)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=cb(s,a,e);yg(s,x);break t}}s=s.return}while(s!==null)}Bb(r)}catch(v){e=v,Ot===r&&r!==null&&(Ot=r=r.return);continue}break}while(!0)}function Tb(){var t=Ji.current;return Ji.current=Xi,t===null?Xi:t}function gd(){(Gt===0||Gt===3||Gt===2)&&(Gt=4),Vt===null||!(Yr&268435455)&&!(fs&268435455)||ur(Vt,Xt)}function ts(t,e){var r=Ct;Ct|=2;var o=Tb();(Vt!==t||Xt!==e)&&(Xe=null,Or(t,e));do try{Ef();break}catch(i){zb(t,i)}while(!0);if(Va(),Ct=r,Ji.current=o,Ot!==null)throw Error(V(261));return Vt=null,Xt=0,Gt}function Ef(){for(;Ot!==null;)Eb(Ot)}function Bf(){for(;Ot!==null&&!tm();)Eb(Ot)}function Eb(t){var e=Rb(t.alternate,t,fe);t.memoizedProps=t.pendingProps,e===null?Bb(t):Ot=e,id.current=null}function Bb(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=jf(r,e),r!==null){r.flags&=32767,Ot=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Gt=6,Ot=null;return}}else if(r=wf(r,e,fe),r!==null){Ot=r;return}if(e=e.sibling,e!==null){Ot=e;return}Ot=e=t}while(e!==null);Gt===0&&(Gt=5)}function Mr(t,e,r){var o=Bt,i=Te.transition;try{Te.transition=null,Bt=1,Df(t,e,r,o)}finally{Te.transition=i,Bt=o}return null}function Df(t,e,r,o){do En();while(mr!==null);if(Ct&6)throw Error(V(327));r=t.finishedWork;var i=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(V(177));t.callbackNode=null,t.callbackPriority=0;var s=r.lanes|r.childLanes;if(gm(t,s),t===Vt&&(Ot=Vt=null,Xt=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||li||(li=!0,Fb(Mi,function(){return En(),null})),s=(r.flags&15990)!==0,r.subtreeFlags&15990||s){s=Te.transition,Te.transition=null;var l=Bt;Bt=1;var a=Ct;Ct|=4,id.current=null,Cf(t,r),Sb(r,t),Xm(Ll),_i=!!_l,Ll=_l=null,t.current=r,If(r),em(),Ct=a,Bt=l,Te.transition=s}else t.current=r;if(li&&(li=!1,mr=t,Zi=i),s=t.pendingLanes,s===0&&(kr=null),om(r.stateNode),pe(t,$t()),e!==null)for(o=t.onRecoverableError,r=0;r<e.length;r++)i=e[r],o(i.value,{componentStack:i.stack,digest:i.digest});if(qi)throw qi=!1,t=oa,oa=null,t;return Zi&1&&t.tag!==0&&En(),s=t.pendingLanes,s&1?t===ia?po++:(po=0,ia=t):po=0,Tr(),null}function En(){if(mr!==null){var t=gu(Zi),e=Te.transition,r=Bt;try{if(Te.transition=null,Bt=16>t?16:t,mr===null)var o=!1;else{if(t=mr,mr=null,Zi=0,Ct&6)throw Error(V(331));var i=Ct;for(Ct|=4,ot=t.current;ot!==null;){var s=ot,l=s.child;if(ot.flags&16){var a=s.deletions;if(a!==null){for(var d=0;d<a.length;d++){var g=a[d];for(ot=g;ot!==null;){var f=ot;switch(f.tag){case 0:case 11:case 15:uo(8,f,s)}var y=f.child;if(y!==null)y.return=f,ot=y;else for(;ot!==null;){f=ot;var m=f.sibling,S=f.return;if(kb(f),f===g){ot=null;break}if(m!==null){m.return=S,ot=m;break}ot=S}}}var k=s.alternate;if(k!==null){var C=k.child;if(C!==null){k.child=null;do{var T=C.sibling;C.sibling=null,C=T}while(C!==null)}}ot=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,ot=l;else t:for(;ot!==null;){if(s=ot,s.flags&2048)switch(s.tag){case 0:case 11:case 15:uo(9,s,s.return)}var b=s.sibling;if(b!==null){b.return=s.return,ot=b;break t}ot=s.return}}var c=t.current;for(ot=c;ot!==null;){l=ot;var u=l.child;if(l.subtreeFlags&2064&&u!==null)u.return=l,ot=u;else t:for(l=c;ot!==null;){if(a=ot,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ms(9,a)}}catch(v){Pt(a,a.return,v)}if(a===l){ot=null;break t}var x=a.sibling;if(x!==null){x.return=a.return,ot=x;break t}ot=a.return}}if(Ct=i,Tr(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(ls,t)}catch{}o=!0}return o}finally{Bt=r,Te.transition=e}}return!1}function Pg(t,e,r){e=Mn(r,e),e=gb(t,e,1),t=xr(t,e,1),e=se(),t!==null&&(_o(t,1,e),pe(t,e))}function Pt(t,e,r){if(t.tag===3)Pg(t,t,r);else for(;e!==null;){if(e.tag===3){Pg(e,t,r);break}else if(e.tag===1){var o=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(kr===null||!kr.has(o))){t=Mn(r,t),t=cb(e,t,1),e=xr(e,t,1),t=se(),e!==null&&(_o(e,1,t),pe(e,t));break}}e=e.return}}function Rf(t,e,r){var o=t.pingCache;o!==null&&o.delete(e),e=se(),t.pingedLanes|=t.suspendedLanes&r,Vt===t&&(Xt&r)===r&&(Gt===4||Gt===3&&(Xt&130023424)===Xt&&500>$t()-ld?Or(t,0):sd|=r),pe(t,e)}function Db(t,e){e===0&&(t.mode&1?(e=Jo,Jo<<=1,!(Jo&130023424)&&(Jo=4194304)):e=1);var r=se();t=or(t,e),t!==null&&(_o(t,e,r),pe(t,r))}function Ff(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),Db(t,r)}function Af(t,e){var r=0;switch(t.tag){case 13:var o=t.stateNode,i=t.memoizedState;i!==null&&(r=i.retryLane);break;case 19:o=t.stateNode;break;default:throw Error(V(314))}o!==null&&o.delete(e),Db(t,r)}var Rb;Rb=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||ue.current)ce=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return ce=!1,kf(t,e,r);ce=!!(t.flags&131072)}else ce=!1,Mt&&e.flags&1048576&&Wu(e,Gi,e.index);switch(e.lanes=0,e.tag){case 2:var o=e.type;zi(t,e),t=e.pendingProps;var i=Dn(e,oe.current);Tn(e,r),i=td(null,e,o,t,i,r);var s=ed();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,be(o)?(s=!0,Oi(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ka(e),i.updater=ps,e.stateNode=i,i._reactInternals=e,Yl(e,o,t,r),e=Xl(null,e,o,!0,s,r)):(e.tag=0,Mt&&s&&Oa(e),ie(null,e,i,r),e=e.child),e;case 16:o=e.elementType;t:{switch(zi(t,e),t=e.pendingProps,i=o._init,o=i(o._payload),e.type=o,i=e.tag=Wf(o),t=Re(o,t),i){case 0:e=Kl(null,e,o,t,r);break t;case 1:e=Eg(null,e,o,t,r);break t;case 11:e=zg(null,e,o,t,r);break t;case 14:e=Tg(null,e,o,Re(o.type,t),r);break t}throw Error(V(306,o,""))}return e;case 0:return o=e.type,i=e.pendingProps,i=e.elementType===o?i:Re(o,i),Kl(t,e,o,i,r);case 1:return o=e.type,i=e.pendingProps,i=e.elementType===o?i:Re(o,i),Eg(t,e,o,i,r);case 3:t:{if(mb(e),t===null)throw Error(V(387));o=e.pendingProps,s=e.memoizedState,i=s.element,Ou(t,e),Yi(e,o,null,r);var l=e.memoizedState;if(o=l.element,s.isDehydrated)if(s={element:o,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Mn(Error(V(423)),e),e=Bg(t,e,o,r,i);break t}else if(o!==i){i=Mn(Error(V(424)),e),e=Bg(t,e,o,r,i);break t}else for(he=vr(e.stateNode.containerInfo.firstChild),ye=e,Mt=!0,Ae=null,r=$u(e,null,o,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Rn(),o===i){e=ir(t,e,r);break t}ie(t,e,o,r)}e=e.child}return e;case 5:return Hu(e),t===null&&Gl(e),o=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,l=i.children,Pl(o,i)?l=null:s!==null&&Pl(o,s)&&(e.flags|=32),pb(t,e),ie(t,e,l,r),e.child;case 6:return t===null&&Gl(e),null;case 13:return fb(t,e,r);case 4:return Xa(e,e.stateNode.containerInfo),o=e.pendingProps,t===null?e.child=Fn(e,null,o,r):ie(t,e,o,r),e.child;case 11:return o=e.type,i=e.pendingProps,i=e.elementType===o?i:Re(o,i),zg(t,e,o,i,r);case 7:return ie(t,e,e.pendingProps,r),e.child;case 8:return ie(t,e,e.pendingProps.children,r),e.child;case 12:return ie(t,e,e.pendingProps.children,r),e.child;case 10:t:{if(o=e.type._context,i=e.pendingProps,s=e.memoizedProps,l=i.value,Rt(Ui,o._currentValue),o._currentValue=l,s!==null)if(_e(s.value,l)){if(s.children===i.children&&!ue.current){e=ir(t,e,r);break t}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){l=s.child;for(var d=a.firstContext;d!==null;){if(d.context===o){if(s.tag===1){d=er(-1,r&-r),d.tag=2;var g=s.updateQueue;if(g!==null){g=g.shared;var f=g.pending;f===null?d.next=d:(d.next=f.next,f.next=d),g.pending=d}}s.lanes|=r,d=s.alternate,d!==null&&(d.lanes|=r),Ul(s.return,r,e),a.lanes|=r;break}d=d.next}}else if(s.tag===10)l=s.type===e.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(V(341));l.lanes|=r,a=l.alternate,a!==null&&(a.lanes|=r),Ul(l,r,e),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===e){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}ie(t,e,i.children,r),e=e.child}return e;case 9:return i=e.type,o=e.pendingProps.children,Tn(e,r),i=Ee(i),o=o(i),e.flags|=1,ie(t,e,o,r),e.child;case 14:return o=e.type,i=Re(o,e.pendingProps),i=Re(o.type,i),Tg(t,e,o,i,r);case 15:return ub(t,e,e.type,e.pendingProps,r);case 17:return o=e.type,i=e.pendingProps,i=e.elementType===o?i:Re(o,i),zi(t,e),e.tag=1,be(o)?(t=!0,Oi(e)):t=!1,Tn(e,r),db(e,o,i),Yl(e,o,i,r),Xl(null,e,o,!0,t,r);case 19:return hb(t,e,r);case 22:return bb(t,e,r)}throw Error(V(156,e.tag))};function Fb(t,e){return su(t,e)}function Mf(t,e,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ie(t,e,r,o){return new Mf(t,e,r,o)}function cd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Wf(t){if(typeof t=="function")return cd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ba)return 11;if(t===Da)return 14}return 2}function jr(t,e){var r=t.alternate;return r===null?(r=Ie(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function Bi(t,e,r,o,i,s){var l=2;if(o=t,typeof t=="function")cd(t)&&(l=1);else if(typeof t=="string")l=5;else t:switch(t){case un:return Hr(r.children,i,s,e);case Ea:l=8,i|=8;break;case hl:return t=Ie(12,r,e,i|2),t.elementType=hl,t.lanes=s,t;case yl:return t=Ie(13,r,e,i),t.elementType=yl,t.lanes=s,t;case vl:return t=Ie(19,r,e,i),t.elementType=vl,t.lanes=s,t;case Hc:return hs(r,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Nc:l=10;break t;case Oc:l=9;break t;case Ba:l=11;break t;case Da:l=14;break t;case dr:l=16,o=null;break t}throw Error(V(130,t==null?t:typeof t,""))}return e=Ie(l,r,e,i),e.elementType=t,e.type=o,e.lanes=s,e}function Hr(t,e,r,o){return t=Ie(7,t,o,e),t.lanes=r,t}function hs(t,e,r,o){return t=Ie(22,t,o,e),t.elementType=Hc,t.lanes=r,t.stateNode={isHidden:!1},t}function Js(t,e,r){return t=Ie(6,t,null,e),t.lanes=r,t}function qs(t,e,r){return e=Ie(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function _f(t,e,r,o,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rs(0),this.expirationTimes=Rs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rs(0),this.identifierPrefix=o,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ud(t,e,r,o,i,s,l,a,d){return t=new _f(t,e,r,a,d),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ie(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ka(s),t}function Lf(t,e,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cn,key:o==null?null:""+o,children:t,containerInfo:e,implementation:r}}function Ab(t){if(!t)return Cr;t=t._reactInternals;t:{if(qr(t)!==t||t.tag!==1)throw Error(V(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break t;case 1:if(be(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break t}}e=e.return}while(e!==null);throw Error(V(171))}if(t.tag===1){var r=t.type;if(be(r))return Au(t,r,e)}return e}function Mb(t,e,r,o,i,s,l,a,d){return t=ud(r,o,!0,t,i,s,l,a,d),t.context=Ab(null),r=t.current,o=se(),i=wr(r),s=er(o,i),s.callback=e??null,xr(r,s,i),t.current.lanes=i,_o(t,i,o),pe(t,o),t}function ys(t,e,r,o){var i=e.current,s=se(),l=wr(i);return r=Ab(r),e.context===null?e.context=r:e.pendingContext=r,e=er(s,l),e.payload={element:t},o=o===void 0?null:o,o!==null&&(e.callback=o),t=xr(i,e,l),t!==null&&(We(t,i,l,s),Si(t,i,l)),l}function es(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $g(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function bd(t,e){$g(t,e),(t=t.alternate)&&$g(t,e)}function Pf(){return null}var Wb=typeof reportError=="function"?reportError:function(t){console.error(t)};function pd(t){this._internalRoot=t}vs.prototype.render=pd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(V(409));ys(t,e,null,null)};vs.prototype.unmount=pd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Qr(function(){ys(null,t,null,null)}),e[nr]=null}};function vs(t){this._internalRoot=t}vs.prototype.unstable_scheduleHydration=function(t){if(t){var e=bu();t={blockedOn:null,target:t,priority:e};for(var r=0;r<cr.length&&e!==0&&e<cr[r].priority;r++);cr.splice(r,0,t),r===0&&mu(t)}};function md(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function xs(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ng(){}function $f(t,e,r,o,i){if(i){if(typeof o=="function"){var s=o;o=function(){var g=es(l);s.call(g)}}var l=Mb(e,o,t,0,null,!1,!1,"",Ng);return t._reactRootContainer=l,t[nr]=l.current,Co(t.nodeType===8?t.parentNode:t),Qr(),l}for(;i=t.lastChild;)t.removeChild(i);if(typeof o=="function"){var a=o;o=function(){var g=es(d);a.call(g)}}var d=ud(t,0,!1,null,null,!1,!1,"",Ng);return t._reactRootContainer=d,t[nr]=d.current,Co(t.nodeType===8?t.parentNode:t),Qr(function(){ys(e,d,r,o)}),d}function ks(t,e,r,o,i){var s=r._reactRootContainer;if(s){var l=s;if(typeof i=="function"){var a=i;i=function(){var d=es(l);a.call(d)}}ys(e,l,t,i)}else l=$f(r,e,t,i,o);return es(l)}cu=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=Zn(e.pendingLanes);r!==0&&(Aa(e,r|1),pe(e,$t()),!(Ct&6)&&(Wn=$t()+500,Tr()))}break;case 13:Qr(function(){var o=or(t,1);if(o!==null){var i=se();We(o,t,1,i)}}),bd(t,1)}};Ma=function(t){if(t.tag===13){var e=or(t,134217728);if(e!==null){var r=se();We(e,t,134217728,r)}bd(t,134217728)}};uu=function(t){if(t.tag===13){var e=wr(t),r=or(t,e);if(r!==null){var o=se();We(r,t,e,o)}bd(t,e)}};bu=function(){return Bt};pu=function(t,e){var r=Bt;try{return Bt=t,e()}finally{Bt=r}};El=function(t,e,r){switch(e){case"input":if(wl(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var o=r[e];if(o!==t&&o.form===t.form){var i=cs(o);if(!i)throw Error(V(90));Uc(o),wl(o,i)}}}break;case"textarea":Yc(t,r);break;case"select":e=r.value,e!=null&&Sn(t,!!r.multiple,e,!1)}};tu=ad;eu=Qr;var Nf={usingClientEntryPoint:!1,Events:[Po,fn,cs,qc,Zc,ad]},Xn={findFiberByHostInstance:Lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Of={bundleType:Xn.bundleType,version:Xn.version,rendererPackageName:Xn.rendererPackageName,rendererConfig:Xn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ou(t),t===null?null:t.stateNode},findFiberByHostInstance:Xn.findFiberByHostInstance||Pf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ai=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ai.isDisabled&&ai.supportsFiber)try{ls=ai.inject(Of),Ve=ai}catch{}}xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nf;xe.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!md(e))throw Error(V(200));return Lf(t,e,null,r)};xe.createRoot=function(t,e){if(!md(t))throw Error(V(299));var r=!1,o="",i=Wb;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ud(t,1,!1,null,null,r,!1,o,i),t[nr]=e.current,Co(t.nodeType===8?t.parentNode:t),new pd(e)};xe.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(V(188)):(t=Object.keys(t).join(","),Error(V(268,t)));return t=ou(e),t=t===null?null:t.stateNode,t};xe.flushSync=function(t){return Qr(t)};xe.hydrate=function(t,e,r){if(!xs(e))throw Error(V(200));return ks(null,t,e,!0,r)};xe.hydrateRoot=function(t,e,r){if(!md(t))throw Error(V(405));var o=r!=null&&r.hydratedSources||null,i=!1,s="",l=Wb;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),e=Mb(e,null,t,1,r??null,i,!1,s,l),t[nr]=e.current,Co(t),o)for(t=0;t<o.length;t++)r=o[t],i=r._getVersion,i=i(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,i]:e.mutableSourceEagerHydrationData.push(r,i);return new vs(e)};xe.render=function(t,e,r){if(!xs(e))throw Error(V(200));return ks(null,t,e,!1,r)};xe.unmountComponentAtNode=function(t){if(!xs(t))throw Error(V(40));return t._reactRootContainer?(Qr(function(){ks(null,null,t,!1,function(){t._reactRootContainer=null,t[nr]=null})}),!0):!1};xe.unstable_batchedUpdates=ad;xe.unstable_renderSubtreeIntoContainer=function(t,e,r,o){if(!xs(r))throw Error(V(200));if(t==null||t._reactInternals===void 0)throw Error(V(38));return ks(t,e,r,!1,o)};xe.version="18.3.1-next-f1338f8080-20240426";function _b(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_b)}catch(t){console.error(t)}}_b(),_c.exports=xe;var Hf=_c.exports,Lb,Og=Hf;Lb=Og.createRoot,Og.hydrateRoot;/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Pb=(...t)=>t.filter((e,r,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===r).join(" ").trim();/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Uf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=p.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:i="",children:s,iconNode:l,...a},d)=>p.createElement("svg",{ref:d,...Uf,width:e,height:e,stroke:t,strokeWidth:o?Number(r)*24/Number(e):r,className:Pb("lucide",i),...a},[...l.map(([g,f])=>p.createElement(g,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=(t,e)=>{const r=p.forwardRef(({className:o,...i},s)=>p.createElement(Vf,{ref:s,iconNode:e,className:Pb(`lucide-${Gf(t)}`,o),...i}));return r.displayName=`${t}`,r};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aa=nt("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=nt("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const da=nt("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb=nt("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=nt("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=nt("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=nt("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const di=nt("CalendarPlus",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=nt("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=nt("ChartLine",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=nt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws=nt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=nt("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=nt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=nt("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=nt("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=nt("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=nt("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ga=nt("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=nt("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=nt("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=nt("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=nt("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=nt("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=nt("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=nt("HeartPulse",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=nt("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=nt("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const js=nt("ImagePlus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=nt("Images",[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18",key:"nf6bnh"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2",key:"12espp"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=nt("IndianRupee",[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=nt("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=nt("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=nt("LayoutList",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=nt("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=nt("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=nt("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=nt("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=nt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=nt("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=nt("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=nt("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=nt("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=nt("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=nt("PanelLeftOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=nt("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=nt("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=nt("PiggyBank",[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z",key:"1ivx2i"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h.01",key:"xkw8gn"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=nt("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=nt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=nt("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=nt("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=nt("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=nt("Scissors",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=nt("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const No=nt("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=nt("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Di=nt("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=nt("Sunrise",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=nt("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=nt("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=nt("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=nt("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=nt("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=nt("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kr=nt("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=nt("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=nt("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=nt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=nt("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),vd="anvil_token",xd=()=>localStorage.getItem(vd),Ch=t=>localStorage.setItem(vd,t),ua=()=>localStorage.removeItem(vd),U=async(t,e,r)=>{const o={};r!==void 0&&(o["Content-Type"]="application/json");const i=xd();i&&(o.Authorization=`Bearer ${i}`);const s=await fetch(`/api${e}`,{method:t,headers:o,body:r!==void 0?JSON.stringify(r):void 0});if(s.status===401)throw ua(),window.dispatchEvent(new Event("anvil-unauthorized")),new Error("Not authenticated");if(s.status===204)return null;if(!s.ok){const l=await s.text();let a=l;try{a=JSON.parse(l).detail||l}catch{}throw new Error(a||`HTTP ${s.status}`)}return s.json()},H={register:t=>U("POST","/auth/register",t),login:t=>U("POST","/auth/login",t),me:()=>U("GET","/auth/me"),getGcalStatus:()=>U("GET","/auth/google/status"),connectGoogle:()=>{window.location.href=`/api/auth/google?token=${encodeURIComponent(xd()||"")}`},disconnectGoogle:()=>U("DELETE","/auth/google"),getPillars:()=>U("GET","/pillars"),getFocus:()=>U("GET","/focus"),createFocus:t=>U("POST","/focus",t),deleteFocus:t=>U("DELETE",`/focus/${t}`),getMedia:()=>U("GET","/media"),createMedia:t=>U("POST","/media",t),updateMedia:(t,e)=>U("PUT",`/media/${t}`,e),deleteMedia:t=>U("DELETE",`/media/${t}`),restoreMedia:t=>U("POST",`/media/${t}/restore`),getDecks:()=>U("GET","/spiritual/decks"),createDeck:t=>U("POST","/spiritual/decks",t),deleteDeck:t=>U("DELETE",`/spiritual/decks/${t}`),getGoldenGoals:()=>U("GET","/golden/goals"),getGoldenGoal:t=>U("GET",`/golden/goals/${t}`),createGolden:t=>U("POST","/golden/goals",t),updateGolden:(t,e)=>U("PUT",`/golden/goals/${t}`,e),achieveGolden:t=>U("POST",`/golden/goals/${t}/achieve`),unachieveGolden:t=>U("POST",`/golden/goals/${t}/unachieve`),upsertGoldenEntry:(t,e)=>U("PUT",`/golden/goals/${t}/entry`,e),deleteGolden:t=>U("DELETE",`/golden/goals/${t}`),restoreGolden:t=>U("POST",`/golden/goals/${t}/restore`),getKickstart:()=>U("GET","/kickstart/videos"),createKickstart:t=>U("POST","/kickstart/videos",t),updateKickstart:(t,e)=>U("PUT",`/kickstart/videos/${t}`,e),deleteKickstart:t=>U("DELETE",`/kickstart/videos/${t}`),restoreKickstart:t=>U("POST",`/kickstart/videos/${t}/restore`),getTxns:()=>U("GET","/finance/txns"),createTxn:t=>U("POST","/finance/txns",t),updateTxn:(t,e)=>U("PUT",`/finance/txns/${t}`,e),deleteTxn:t=>U("DELETE",`/finance/txns/${t}`),restoreTxn:t=>U("POST",`/finance/txns/${t}/restore`),getSetting:t=>U("GET",`/settings/${t}`),setSetting:(t,e)=>U("PUT",`/settings/${t}`,{value:e}),getTasks:()=>U("GET","/tasks"),createTask:t=>U("POST","/tasks",t),updateTask:(t,e)=>U("PUT",`/tasks/${t}`,e),deleteTask:t=>U("DELETE",`/tasks/${t}`),restoreTask:t=>U("POST",`/tasks/${t}/restore`),scheduleTask:t=>U("PUT",`/tasks/${t}/schedule`),getGoals:t=>U("GET",`/goals${t?`?pillar=${encodeURIComponent(t)}`:""}`),createGoal:t=>U("POST","/goals",t),updateGoal:(t,e)=>U("PUT",`/goals/${t}`,e),deleteGoal:t=>U("DELETE",`/goals/${t}`),restoreGoal:t=>U("POST",`/goals/${t}/restore`),getHabits:()=>U("GET","/habits"),createHabit:t=>U("POST","/habits",t),updateHabit:(t,e)=>U("PUT",`/habits/${t}`,e),deleteHabit:t=>U("DELETE",`/habits/${t}`),restoreHabit:t=>U("POST",`/habits/${t}/restore`),toggleHabitLog:(t,e)=>U("POST",`/habits/${t}/log/${e}`),setHabitLogNote:(t,e,r)=>U("PUT",`/habits/${t}/log/${e}/note`,{note:r}),setHabitLogCount:(t,e,r,o)=>U("PUT",`/habits/${t}/log/${e}/count`,{count:r,note:o}),clearHabitLog:(t,e)=>U("DELETE",`/habits/${t}/log/${e}`),getHabitsYearly:t=>U("GET",`/habits/yearly/${t}`),getJournalEntry:t=>U("GET",`/journal/${t}`),getJournalHistory:(t,e)=>U("GET",`/journal/history/${t}/${e}`),updateJournalMood:(t,e)=>U("PUT",`/journal/${t}`,{mood:e}),addJournalBullet:(t,e,r)=>U("POST",`/journal/${t}/bullets`,{section:e,text:r}),deleteJournalBullet:t=>U("DELETE",`/journal/bullets/${t}`),getSkills:()=>U("GET","/skills"),createSkill:t=>U("POST","/skills",t),updateSkill:(t,e)=>U("PUT",`/skills/${t}`,e),deleteSkill:t=>U("DELETE",`/skills/${t}`),restoreSkill:t=>U("POST",`/skills/${t}/restore`),addSkillNote:(t,e,r)=>U("POST",`/skills/${t}/notes`,{stage:e,text:r}),deleteSkillNote:t=>U("DELETE",`/skill-notes/${t}`),updateSkillNote:(t,e)=>U("PUT",`/skill-notes/${t}`,{text:e}),toggleSkillNote:t=>U("PUT",`/skill-notes/${t}/toggle`),completeSkillStage:(t,e)=>U("POST",`/skills/${t}/complete-stage`,{stage:e}),getScriptures:()=>U("GET","/scriptures"),createScripture:t=>U("POST","/scriptures",t),deleteScripture:t=>U("DELETE",`/scriptures/${t}`),restoreScripture:t=>U("POST",`/scriptures/${t}/restore`),addChapter:(t,e)=>U("POST",`/scriptures/${t}/chapters`,e),updateChapter:(t,e)=>U("PUT",`/chapters/${t}`,e),deleteChapter:t=>U("DELETE",`/chapters/${t}`),restoreChapter:t=>U("POST",`/chapters/${t}/restore`),addInsight:(t,e)=>U("POST",`/chapters/${t}/insights`,{text:e}),deleteInsight:t=>U("DELETE",`/insights/${t}`),getTopics:()=>U("GET","/revision/topics"),createTopic:t=>U("POST","/revision/topics",t),updateTopic:(t,e)=>U("PUT",`/revision/topics/${t}`,e),deleteTopic:t=>U("DELETE",`/revision/topics/${t}`),restoreTopic:t=>U("POST",`/revision/topics/${t}/restore`),getDueToday:()=>U("GET","/revision/due-today"),getCalendar:(t,e)=>U("GET",`/revision/calendar/${t}/${e}`),toggleReviewDone:t=>U("PUT",`/revision/reviews/${t}/done`),getAffirmations:()=>U("GET","/affirmations"),createAffirmation:t=>U("POST","/affirmations",t),updateAffirmation:(t,e)=>U("PUT",`/affirmations/${t}`,e),deleteAffirmation:t=>U("DELETE",`/affirmations/${t}`),restoreAffirmation:t=>U("POST",`/affirmations/${t}/restore`)},Ih=7e3;function tn(t,e,r){const[o,i]=p.useState([]),s=p.useRef({}),l=p.useCallback(async(g,f="Item")=>{await t(g),r();const y=`${g}-${Date.now()}`;i(m=>[...m,{id:y,itemId:g,label:f}]),s.current[y]=setTimeout(()=>{i(m=>m.filter(S=>S.id!==y)),delete s.current[y]},Ih)},[t,r]),a=p.useCallback(async g=>{const f=o.find(y=>y.id===g);f&&(clearTimeout(s.current[g]),delete s.current[g],i(y=>y.filter(m=>m.id!==g)),await e(f.itemId),r())},[o,e,r]),d=p.useCallback(g=>{clearTimeout(s.current[g]),delete s.current[g],i(f=>f.filter(y=>y.id!==g))},[]);return{deleteItem:l,toasts:o,handleUndo:a,handleDismiss:d}}function en({toasts:t,onUndo:e,onDismiss:r}){return n.jsx("div",{style:gn.container,children:t.map(o=>n.jsx(zh,{toast:o,onUndo:e,onDismiss:r},o.id))})}function zh({toast:t,onUndo:e,onDismiss:r}){const[o,i]=p.useState(100);return p.useEffect(()=>{const s=Date.now(),l=7e3,a=setInterval(()=>{const d=Date.now()-s,g=Math.max(0,100-d/l*100);i(g),g===0&&clearInterval(a)},50);return()=>clearInterval(a)},[]),n.jsxs("div",{style:gn.toast,children:[n.jsx("div",{style:{...gn.bar,width:`${o}%`}}),n.jsxs("span",{style:gn.msg,children:[t.label," deleted"]}),n.jsx("button",{style:gn.undoBtn,onClick:()=>e(t.id),children:"Undo"}),n.jsx("button",{style:gn.closeBtn,onClick:()=>r(t.id),children:"×"})]})}const gn={container:{position:"fixed",bottom:24,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",gap:8,zIndex:999,pointerEvents:"none"},toast:{position:"relative",display:"flex",alignItems:"center",gap:12,background:"var(--accent-strong)",color:"#fff",borderRadius:10,padding:"12px 16px",fontSize:13.5,fontFamily:"'Inter', system-ui, sans-serif",boxShadow:"0 4px 20px rgba(0,0,0,0.25)",minWidth:260,overflow:"hidden",pointerEvents:"all"},bar:{position:"absolute",bottom:0,left:0,height:3,background:"#4C9A6B",transition:"width 0.05s linear",borderRadius:"0 0 0 10px"},msg:{flex:1,fontWeight:500},undoBtn:{border:"1px solid rgba(255,255,255,0.3)",background:"none",color:"#4C9A6B",fontWeight:700,fontSize:13,padding:"4px 10px",borderRadius:6,cursor:"pointer",fontFamily:"inherit"},closeBtn:{border:"none",background:"none",color:"rgba(255,255,255,0.5)",cursor:"pointer",fontSize:18,lineHeight:1,padding:"0 2px"}},gi={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},Gg=[{id:"Q1",symbol:"™",title:"Do Now",sub:"Important · Urgent",accent:"#C2536B"},{id:"Q2",symbol:"©",title:"Schedule",sub:"Important · Not Urgent",accent:"#3A7CA5"},{id:"Q3",symbol:"®",title:"Delegate",sub:"Not Important · Urgent",accent:"#C9A227"},{id:"Q4",symbol:"•",title:"Drop",sub:"Not Important · Not Urgent",accent:"#8A8780"}];function Th(){return new Date().toLocaleDateString("en-CA",{timeZone:"Asia/Kolkata"})}function Eh(){const t=new Date(new Date().toLocaleString("en-US",{timeZone:"Asia/Kolkata"})),r=t.getMinutes()<30?30:0,o=r===0?t.getHours()+1:t.getHours();return`${String(o%24).padStart(2,"0")}:${String(r).padStart(2,"0")}`}function Bh(t,e){const[r,o]=t.split(":").map(Number),i=r*60+o+e;return`${String(Math.floor(i/60)%24).padStart(2,"0")}:${String(i%60).padStart(2,"0")}`}function Dh(t){return t?new Date(t).toLocaleString("en-IN",{timeZone:"Asia/Kolkata",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit",hour12:!0}):""}const Zs=()=>({title:"",pillar:"Financial",est:30,date:Th(),startTime:Eh()});function Rh(){const[t,e]=p.useState([]),[r,o]=p.useState(null),[i,s]=p.useState(Zs()),[l,a]=p.useState({connected:!1,configured:!1}),d=p.useCallback(()=>H.getTasks().then(e).catch(console.error),[]);p.useEffect(()=>{d(),H.getGcalStatus().then(a).catch(()=>{})},[d]);const{deleteItem:g,toasts:f,handleUndo:y,handleDismiss:m}=tn(H.deleteTask,H.restoreTask,d),S=u=>t.filter(x=>x.quadrant===u),k=u=>S(u).reduce((x,v)=>x+v.time_estimate_min,0),C=u=>u>=60?`${Math.floor(u/60)}h${u%60?` ${u%60}m`:""}`:`${u}m`,T=u=>{var v;return`${((v=Gg.find(z=>z.id===u.quadrant))==null?void 0:v.symbol)??""} ${u.title}`},b=async u=>{if(!i.title.trim())return;const x=i.date&&i.startTime?`${i.date}T${i.startTime}:00`:null;await H.createTask({pillar:i.pillar,title:i.title,quadrant:u,time_estimate_min:Number(i.est)||30,start_datetime:x}),s(Zs()),o(null),d()},c=(u,x)=>g(u,x);return n.jsxs("div",{style:gt.page,children:[n.jsxs("div",{style:gt.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:gt.eyebrow,children:"Anvil · Weekly Routing"}),n.jsx("h1",{style:gt.h1,children:"Weekly Routing"})]}),n.jsxs("div",{style:gt.headRight,children:[n.jsx("div",{style:gt.legend,children:Object.entries(gi).map(([u,x])=>n.jsxs("span",{style:gt.legendItem,children:[n.jsx("span",{style:{...gt.dot,background:x.dot}}),u]},u))}),l.configured&&(l.connected?n.jsxs("button",{style:gt.gcalBadgeOn,title:"Disconnect Google Calendar",onClick:()=>H.disconnectGoogle().then(()=>a({...l,connected:!1})),children:[n.jsx(di,{size:13})," Google Calendar connected"]}):n.jsxs("button",{style:gt.gcalBadgeOff,onClick:()=>H.connectGoogle(),children:[n.jsx(di,{size:13})," Connect Google Calendar"]}))]})]}),n.jsx("div",{style:gt.grid,children:Gg.map(u=>n.jsxs("section",{style:{...gt.quad,borderTop:`3px solid ${u.accent}`},children:[n.jsxs("header",{style:gt.quadHead,children:[n.jsxs("div",{style:gt.quadTitleRow,children:[n.jsx("span",{style:{...gt.symbol,color:u.accent},children:u.symbol}),n.jsxs("div",{children:[n.jsx("div",{style:gt.quadTitle,children:u.title}),n.jsx("div",{style:gt.quadSub,children:u.sub})]})]}),n.jsx("span",{style:gt.quadTotal,children:C(k(u.id))})]}),n.jsxs("div",{style:gt.list,children:[S(u.id).map(x=>{const v=gi[x.pillar]||gi.Financial,z=!!x.gcal_event_id;return n.jsxs("div",{style:{...gt.card,background:v.soft},children:[n.jsx("span",{style:{...gt.cardBar,background:v.dot}}),n.jsxs("div",{style:gt.cardBody,children:[n.jsx("div",{style:gt.cardTitle,children:x.title}),x.start_datetime&&n.jsxs("div",{style:gt.eventTime,children:[n.jsx(di,{size:10}),Dh(x.start_datetime),z&&n.jsx("span",{style:gt.syncedDot,title:"Synced to Google Calendar"})]}),n.jsxs("div",{style:gt.cardMeta,children:[n.jsxs("span",{style:gt.metaPill,children:[n.jsx("span",{style:{...gt.dot,background:v.dot,width:7,height:7}}),x.pillar]}),n.jsxs("span",{style:gt.metaPill,children:[n.jsx(Jf,{size:11})," ",C(x.time_estimate_min)]})]})]}),n.jsxs("div",{style:gt.cardActions,children:[z&&n.jsx("span",{title:`On calendar as "${T(x)}"`,style:gt.calDoneIcon,children:n.jsx(jt,{size:14})}),n.jsx("button",{onClick:()=>c(x.id,x.title),style:gt.delBtn,children:n.jsx(vt,{size:13})})]})]},x.id)}),r===u.id?n.jsxs("div",{style:gt.addBox,children:[n.jsx("input",{autoFocus:!0,placeholder:"Task title",value:i.title,onChange:x=>s({...i,title:x.target.value}),onKeyDown:x=>x.key==="Enter"&&b(u.id),style:gt.input}),n.jsxs("div",{style:gt.dateTimeRow,children:[n.jsxs("div",{style:gt.dateTimeGroup,children:[n.jsx("label",{style:gt.dtLabel,children:"Date"}),n.jsx("input",{type:"date",value:i.date,onChange:x=>s({...i,date:x.target.value}),style:gt.dtInput})]}),n.jsxs("div",{style:gt.dateTimeGroup,children:[n.jsx("label",{style:gt.dtLabel,children:"Start"}),n.jsx("input",{type:"time",value:i.startTime,onChange:x=>s({...i,startTime:x.target.value}),style:gt.dtInput})]}),n.jsxs("div",{style:gt.dateTimeGroup,children:[n.jsx("label",{style:gt.dtLabel,children:"End"}),n.jsx("div",{style:gt.dtEndValue,children:Bh(i.startTime,Number(i.est)||30)})]})]}),n.jsxs("div",{style:gt.addRow,children:[n.jsx("select",{value:i.pillar,onChange:x=>s({...i,pillar:x.target.value}),style:gt.select,children:Object.keys(gi).map(x=>n.jsx("option",{children:x},x))}),n.jsx("input",{type:"number",value:i.est,onChange:x=>s({...i,est:x.target.value}),style:{...gt.input,width:60}}),n.jsx("span",{style:gt.minLabel,children:"min"}),l.connected&&n.jsx("span",{style:gt.gcalHint,title:"Will sync to Google Calendar",children:n.jsx(di,{size:12})}),n.jsx("button",{onClick:()=>b(u.id),style:gt.saveBtn,children:n.jsx(jt,{size:14})}),n.jsx("button",{onClick:()=>{o(null),s(Zs())},style:gt.cancelBtn,children:n.jsx(vt,{size:14})})]})]}):n.jsxs("button",{onClick:()=>o(u.id),style:gt.addTrigger,children:[n.jsx(ne,{size:13})," Add task"]})]})]},u.id))}),n.jsx(en,{toasts:f,onUndo:y,onDismiss:m})]})}const gt={page:{fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:16,marginBottom:22},headRight:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:10},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces', Georgia, serif"},legend:{display:"flex",gap:14,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"var(--text-2)",fontWeight:500},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},gcalBadgeOn:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:500,color:"#4C9A6B",background:"rgba(76,154,107,0.10)",border:"1px solid rgba(76,154,107,0.3)",borderRadius:20,padding:"5px 12px",cursor:"pointer"},gcalBadgeOff:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:500,color:"var(--text-2)",background:"var(--surface)",border:"1px solid #DCDAD3",borderRadius:20,padding:"5px 12px",cursor:"pointer"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:16},quad:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.06)"},quadHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14},quadTitleRow:{display:"flex",gap:10,alignItems:"center"},symbol:{fontSize:20,lineHeight:1},quadTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em"},quadSub:{fontSize:11,color:"var(--text-3)",marginTop:1,letterSpacing:"0.02em"},quadTotal:{fontSize:12,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"3px 9px",borderRadius:20},list:{display:"flex",flexDirection:"column",gap:8},card:{display:"flex",alignItems:"stretch",gap:10,borderRadius:9,padding:"10px 10px 10px 0",overflow:"hidden"},cardBar:{width:3,borderRadius:3,flexShrink:0},cardBody:{flex:1,minWidth:0},cardTitle:{fontSize:13.5,fontWeight:500,lineHeight:1.35,marginBottom:4},eventTime:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"#3A7CA5",fontWeight:500,marginBottom:5},syncedDot:{width:6,height:6,borderRadius:"50%",background:"#4C9A6B",display:"inline-block",marginLeft:2},cardMeta:{display:"flex",gap:8,flexWrap:"wrap"},metaPill:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"var(--text-2)",fontWeight:500},cardActions:{display:"flex",flexDirection:"column",gap:4,alignSelf:"center",flexShrink:0},calDoneIcon:{width:30,height:30,borderRadius:8,background:"#4C9A6B",color:"#fff",display:"grid",placeItems:"center"},delBtn:{width:30,height:30,borderRadius:8,border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center"},addTrigger:{display:"flex",alignItems:"center",gap:5,fontSize:12.5,color:"var(--text-3)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"8px 10px",cursor:"pointer",fontWeight:500,marginTop:2},addBox:{border:"1px solid var(--border)",borderRadius:9,padding:10,display:"flex",flexDirection:"column",gap:8},dateTimeRow:{display:"flex",gap:8,alignItems:"flex-end"},dateTimeGroup:{display:"flex",flexDirection:"column",gap:3,flex:1},dtLabel:{fontSize:10,fontWeight:600,color:"var(--text-3)",letterSpacing:"0.08em",textTransform:"uppercase"},dtInput:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},dtEndValue:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,color:"var(--text-2)",background:"var(--bg)"},addRow:{display:"flex",alignItems:"center",gap:6},input:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",flex:1,minWidth:0},select:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 8px",fontSize:12.5,fontFamily:"inherit",flex:1},minLabel:{fontSize:11,color:"var(--text-3)"},gcalHint:{color:"#3A7CA5",display:"grid",placeItems:"center"},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"}},$e={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},Ug=Object.keys($e),tl=["Yearly","Quarterly","Monthly","Weekly"],Wr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Vg=[{label:"Q1 · Jan–Mar",startMonth:0},{label:"Q2 · Apr–Jun",startMonth:3},{label:"Q3 · Jul–Sep",startMonth:6},{label:"Q4 · Oct–Dec",startMonth:9}],ba=new Date().getFullYear(),Yg=Array.from({length:8},(t,e)=>ba-1+e);function Fh(t=720){const[e,r]=p.useState(()=>window.innerWidth<t);return p.useEffect(()=>{const o=()=>r(window.innerWidth<t);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[t]),e}const eo=864e5,Qt=30,mo=190,ln=t=>new Date(t+"T00:00:00"),Qg=t=>t.toLocaleDateString("en-US",{month:"short",day:"numeric"}),Ah=[{key:"yearly",label:"Yearly",horizons:["Yearly"]},{key:"quarterly",label:"Quarterly",horizons:["Quarterly"]},{key:"mw",label:"Monthly & Weekly",horizons:["Monthly","Weekly"]}],Mh={Yearly:"Yr",Quarterly:"Q",Monthly:"Mo",Weekly:"Wk"},Wh={Yearly:"Y",Quarterly:"Q",Monthly:"M",Weekly:"W"},Kg={Yearly:0,Quarterly:1,Monthly:2,Weekly:3},el=t=>tl[Math.min(tl.indexOf(t)+1,tl.length-1)],ci=t=>{if(!t||!t.start_date)return Array.from({length:12},(l,a)=>a);const e=new Date(t.start_date+"T00:00:00"),r=new Date(t.end_date+"T00:00:00"),o=e.getFullYear(),i=e.getMonth(),s=r.getFullYear()>o?11:r.getMonth();return Array.from({length:s-i+1},(l,a)=>i+a)},ui=t=>new Date(t+"T00:00:00").getFullYear(),ep=(t,e,r)=>{const o=(r-1)*7+1,i=Math.min(o+6,new Date(t,e+1,0).getDate()),s=String(e+1).padStart(2,"0");return{start_date:`${t}-${s}-${String(o).padStart(2,"0")}`,end_date:`${t}-${s}-${String(i).padStart(2,"0")}`}},jn=(t,e,r,o=1)=>{const i=e;switch(t){case"Yearly":return{start_date:`${i}-01-01`,end_date:`${i}-12-31`};case"Quarterly":{const s=Math.floor(r/3)*3,l=s+1,a=s+3,d=new Date(i,a,0).getDate();return{start_date:`${i}-${String(l).padStart(2,"0")}-01`,end_date:`${i}-${String(a).padStart(2,"0")}-${d}`}}case"Monthly":{const s=new Date(i,r+1,0).getDate();return{start_date:`${i}-${String(r+1).padStart(2,"0")}-01`,end_date:`${i}-${String(r+1).padStart(2,"0")}-${s}`}}case"Weekly":return ep(i,r,o);default:return{start_date:`${i}-01-01`,end_date:`${i}-12-31`}}},Xg=(t,e)=>{const r=new Date(t+"T00:00:00");return r.setDate(r.getDate()+e),`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}-${String(r.getDate()).padStart(2,"0")}`},pa=(t,e)=>Math.round((new Date(e+"T00:00:00")-new Date(t+"T00:00:00"))/eo)+1,_h=(t,e)=>new Date(t,e+1,0).getDate(),ma=t=>{const e=new Date(t.start_date+"T00:00:00");if(t.horizon==="Monthly")return _h(e.getFullYear(),e.getMonth());if(t.horizon==="Weekly"){const r=Math.min(Math.max(Math.ceil(e.getDate()/7),1),4),o=ep(e.getFullYear(),e.getMonth(),r);return pa(o.start_date,o.end_date)}return pa(t.start_date,t.end_date)},Jg=t=>Math.round(ma(t)*1.5),Lh=t=>t.horizon==="Monthly"||t.horizon==="Weekly",Ph=(t,e)=>{const r=e.getFullYear(),o=e.getMonth();return t==="Quarterly"?jn("Quarterly",r,o):t==="Monthly"?jn("Monthly",r,o):t==="Weekly"?jn("Weekly",r,o,Math.min(Math.max(Math.ceil(e.getDate()/7),1),4)):jn("Yearly",r,0)},$h=t=>{if(!t.start_date)return"";const e=new Date(t.start_date+"T00:00:00"),r=e.getMonth();switch(t.horizon){case"Yearly":return`${e.getFullYear()}`;case"Quarterly":return`Q${Math.floor(r/3)+1} ${e.getFullYear()}`;case"Monthly":return`${Wr[r]} ${e.getFullYear()}`;case"Weekly":return`${Wr[r]} W${Math.ceil(e.getDate()/7)}`;default:return""}};function Nh(){const[t,e]=p.useState([]),[r,o]=p.useState("All"),[i,s]=p.useState({}),[l,a]=p.useState({}),[d,g]=p.useState(null),[f,y]=p.useState(""),[m,S]=p.useState(0),[k,C]=p.useState(1),[T,b]=p.useState(ba),[c,u]=p.useState(null),x=Fh(),[v,z]=p.useState(!x),[_,L]=p.useState(null),F=p.useRef(null);p.useEffect(()=>{F.current=_},[_]);const[P,I]=p.useState(null),D=p.useRef(null);p.useEffect(()=>{D.current=P},[P]);const w=p.useRef(null),[O,st]=p.useState(null),q=p.useRef(null),[R,A]=p.useState(null),[M,G]=p.useState(null),j=(B,N)=>{if(R===N){A(null);return}const bt=B.currentTarget.getBoundingClientRect(),ht=bt.bottom+220<window.innerHeight;G({right:Math.max(8,window.innerWidth-bt.right),...ht?{top:bt.bottom+4}:{bottom:window.innerHeight-bt.top+4}}),A(N)},Y=B=>{clearTimeout(q.current),q.current=setTimeout(()=>st(B),350)},h=()=>{clearTimeout(q.current),st(null)},$=p.useCallback(()=>{H.getGoals().then(e).catch(console.error)},[]);p.useEffect(()=>{$()},[$]);const{deleteItem:dt,toasts:et,handleUndo:mt,handleDismiss:Tt}=tn(H.deleteGoal,H.restoreGoal,$),ft=p.useCallback(async()=>{const B=F.current;if(L(null),!B)return;const N=Math.round(B.dx/Qt);if(!N)return;const bt=Ph(B.g.horizon,ln(Xg(B.g.start_date,N)));bt.start_date!==B.g.start_date&&(await H.updateGoal(B.g.id,{pillar:B.g.pillar,start_date:bt.start_date,end_date:bt.end_date}),$())},[$]),It=!!_;p.useEffect(()=>{if(!It)return;const B=bt=>L(ht=>ht&&{...ht,dx:bt.clientX-ht.startX}),N=()=>ft();return window.addEventListener("pointermove",B),window.addEventListener("pointerup",N),()=>{window.removeEventListener("pointermove",B),window.removeEventListener("pointerup",N)}},[It,ft]);const Q=p.useCallback(async()=>{const B=D.current;if(I(null),!B)return;const N=B.g,bt=ma(N),ht=Jg(N),Yt=Math.max(bt,Math.min(ht,pa(N.start_date,N.end_date)+Math.round(B.dx/Qt))),we=Xg(N.start_date,Yt-1);we!==N.end_date&&(await H.updateGoal(N.id,{end_date:we}),$())},[$]),ut=!!P;p.useEffect(()=>{if(!ut)return;const B=bt=>I(ht=>ht&&{...ht,dx:bt.clientX-ht.startX}),N=()=>Q();return window.addEventListener("pointermove",B),window.addEventListener("pointerup",N),()=>{window.removeEventListener("pointermove",B),window.removeEventListener("pointerup",N)}},[ut,Q]);const ct=r==="All",zt=$e[r]||{dot:"var(--text-3)"},qt=ct?t:t.filter(B=>B.pillar===r),Er=qt.filter(B=>!B.parent_goal_id),Br=B=>qt.filter(N=>N.parent_goal_id===B),Oo=B=>a(N=>({...N,[B]:!N[B]})),Ho=B=>B.horizon==="Monthly"||B.horizon==="Weekly",Dr=B=>i[B.id]!==void 0?i[B.id]:Ho(B),jd=B=>s(N=>({...N,[B.id]:!Dr(B)})),Cs=(B,N=null)=>{g(B),y(""),C(1),b(N?ui(N.start_date):ba);const bt=B==="ROOT"?"Yearly":el(N==null?void 0:N.horizon),ht=B==="ROOT"?[0]:ci(N);S(bt==="Quarterly"?Math.floor(ht[0]/3)*3:ht[0]??0)},Sd=async(B,N)=>{if(!f.trim())return;const bt=(N==null?void 0:N.horizon)??null,ht=B==="ROOT"?"Yearly":el(bt),Yt=B==="ROOT"?r:(N==null?void 0:N.pillar)||r,we=ht==="Yearly"?Number(T):N?ui(N.start_date):Number(T),{start_date:yt,end_date:je}=jn(ht,we,m,k);await H.createGoal({pillar:Yt,title:f.trim(),horizon:ht,parent_goal_id:B==="ROOT"?null:B,start_date:yt,end_date:je}),B!=="ROOT"&&a(lr=>({...lr,[B]:!0})),g(null),y(""),$()},Cd=B=>{const N=B.start_date?new Date(B.start_date+"T00:00:00"):new Date,bt=N.getMonth(),ht=Math.min(Math.max(Math.ceil(N.getDate()/7),1),4);u({id:B.id,title:B.title,pillar:B.pillar,horizon:B.horizon,parentGoal:t.find(Yt=>Yt.id===B.parent_goal_id)||null,year:ui(B.start_date),month:B.horizon==="Quarterly"?Math.floor(bt/3)*3:bt,week:ht})},Id=async()=>{if(!c||!c.title.trim())return;let B=c.month;c.horizon==="Weekly"&&(B=ci(c.parentGoal)[0]);const N=c.horizon==="Yearly"?Number(c.year):c.parentGoal?ui(c.parentGoal.start_date):Number(c.year),{start_date:bt,end_date:ht}=jn(c.horizon,N,B,c.week);await H.updateGoal(c.id,{title:c.title.trim(),pillar:c.pillar,start_date:bt,end_date:ht}),u(null),$()},zd=({parentId:B,parentGoal:N,depth:bt})=>{const ht=B==="ROOT"?"Yearly":el((N==null?void 0:N.horizon)??null),Yt=B==="ROOT"?Array.from({length:12},(yt,je)=>je):ci(N),we=Vg.filter(yt=>Yt.includes(yt.startMonth));return n.jsxs("div",{style:{...K.addBox,marginLeft:bt*24},children:[n.jsx("input",{autoFocus:!0,placeholder:`New ${ht.toLowerCase()} goal…`,value:f,onChange:yt=>y(yt.target.value),onKeyDown:yt=>{yt.key==="Enter"&&Sd(B,N),yt.key==="Escape"&&g(null)},style:K.input}),ht==="Yearly"&&n.jsx("select",{value:T,onChange:yt=>b(Number(yt.target.value)),style:K.monthSelect,children:Yg.map(yt=>n.jsx("option",{value:yt,children:yt},yt))}),ht==="Quarterly"&&n.jsx("select",{value:m,onChange:yt=>S(Number(yt.target.value)),style:K.monthSelect,children:we.map(yt=>n.jsx("option",{value:yt.startMonth,children:yt.label},yt.startMonth))}),ht==="Monthly"&&n.jsx("select",{value:m,onChange:yt=>S(Number(yt.target.value)),style:K.monthSelect,children:Yt.map(yt=>n.jsx("option",{value:yt,children:Wr[yt]},yt))}),ht==="Weekly"&&n.jsxs(n.Fragment,{children:[n.jsx("span",{style:K.inheritTag,children:Wr[Yt[0]]}),n.jsx("select",{value:k,onChange:yt=>C(Number(yt.target.value)),style:K.monthSelect,children:[1,2,3,4].map(yt=>n.jsxs("option",{value:yt,children:["Week ",yt]},yt))})]}),n.jsx("button",{onClick:()=>Sd(B,N),style:K.saveBtn,children:n.jsx(jt,{size:14})}),n.jsx("button",{onClick:()=>g(null),style:K.cancelBtn,children:n.jsx(vt,{size:14})})]})},Td=({goal:B,depth:N})=>{var yt,je,lr,nn;const bt=Br(B.id),ht=l[B.id],Yt=B.horizon!=="Weekly";if((c==null?void 0:c.id)===B.id){const Zt=ci(c.parentGoal),Rr=Vg.filter(kt=>Zt.includes(kt.startMonth));return n.jsxs("div",{style:{...K.editBox,marginLeft:N*24},children:[n.jsx("input",{autoFocus:!0,value:c.title,onChange:kt=>u({...c,title:kt.target.value}),onKeyDown:kt=>kt.key==="Enter"&&Id(),style:{...K.input,flex:1}}),n.jsx("select",{value:c.pillar,onChange:kt=>u({...c,pillar:kt.target.value}),style:K.monthSelect,children:Ug.map(kt=>n.jsx("option",{children:kt},kt))}),c.horizon==="Yearly"&&n.jsx("select",{value:c.year,onChange:kt=>u({...c,year:Number(kt.target.value)}),style:K.monthSelect,children:Yg.map(kt=>n.jsx("option",{value:kt,children:kt},kt))}),c.horizon==="Quarterly"&&n.jsx("select",{value:c.month,onChange:kt=>u({...c,month:Number(kt.target.value)}),style:K.monthSelect,children:Rr.map(kt=>n.jsx("option",{value:kt.startMonth,children:kt.label},kt.startMonth))}),c.horizon==="Monthly"&&n.jsx("select",{value:c.month,onChange:kt=>u({...c,month:Number(kt.target.value)}),style:K.monthSelect,children:Zt.map(kt=>n.jsx("option",{value:kt,children:Wr[kt]},kt))}),c.horizon==="Weekly"&&n.jsxs(n.Fragment,{children:[n.jsx("span",{style:K.inheritTag,children:Wr[Zt[0]]}),n.jsx("select",{value:c.week,onChange:kt=>u({...c,week:Number(kt.target.value)}),style:K.monthSelect,children:[1,2,3,4].map(kt=>n.jsxs("option",{value:kt,children:["Week ",kt]},kt))})]}),n.jsx("button",{onClick:Id,style:K.saveBtn,children:n.jsx(jt,{size:14})}),n.jsx("button",{onClick:()=>u(null),style:K.cancelBtn,children:n.jsx(vt,{size:14})})]})}return n.jsxs("div",{children:[n.jsxs("div",{style:{...K.row,marginLeft:N*24,background:N===0&&((yt=$e[B.pillar])==null?void 0:yt.soft)||"transparent"},children:[bt.length>0?n.jsx("button",{onClick:()=>Oo(B.id),style:K.caret,children:ht?n.jsx(ws,{size:15}):n.jsx(Zr,{size:15})}):n.jsx("span",{style:{...K.caret,opacity:.25},children:n.jsx(yd,{size:12})}),n.jsx("span",{style:{...K.horizonTag,color:((je=$e[B.pillar])==null?void 0:je.dot)||zt.dot,borderColor:((lr=$e[B.pillar])==null?void 0:lr.dot)||zt.dot},title:B.horizon,children:x?Wh[B.horizon]:B.horizon}),n.jsx("span",{style:{...K.title,...O===B.id?K.titleFull:{}},title:B.title,onPointerDown:()=>Y(B.id),onPointerUp:h,onPointerLeave:h,onPointerCancel:h,children:B.title}),!x&&n.jsx("span",{style:K.periodTag,children:$h(B)}),x?n.jsxs("div",{style:{position:"relative",flexShrink:0},children:[n.jsx("button",{onClick:Zt=>j(Zt,B.id),style:K.rowAdd,title:"Options",children:n.jsx(qb,{size:15})}),R===B.id&&n.jsxs(n.Fragment,{children:[n.jsx("div",{style:K.menuBackdrop,onClick:()=>A(null)}),n.jsxs("div",{style:{...K.goalMenu,...M},children:[n.jsxs("button",{style:K.menuItem,onClick:()=>{jd(B),A(null)},children:[Dr(B)?n.jsx(ga,{size:14}):n.jsx(rs,{size:14})," ",Dr(B)?"Hide from timeline":"Show on timeline"]}),n.jsxs("button",{style:K.menuItem,onClick:()=>{Cd(B),A(null)},children:[n.jsx(me,{size:14})," Edit"]}),Yt&&n.jsxs("button",{style:K.menuItem,onClick:()=>{a(Zt=>({...Zt,[B.id]:!0})),Cs(B.id,B),A(null)},children:[n.jsx(ne,{size:14})," Add sub-goal"]}),n.jsxs("button",{style:{...K.menuItem,color:"#C2536B"},onClick:()=>{dt(B.id,B.title),A(null)},children:[n.jsx(vt,{size:14})," Delete"]})]})]})]}):n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:()=>jd(B),style:{...K.rowAdd,color:Dr(B)?((nn=$e[B.pillar])==null?void 0:nn.dot)||zt.dot:"var(--text-3)"},title:Dr(B)?"Showing on timeline — click to hide":"Hidden from timeline — click to show",children:Dr(B)?n.jsx(rs,{size:13}):n.jsx(ga,{size:13})}),n.jsx("button",{onClick:()=>Cd(B),style:K.rowAdd,title:"Edit",children:n.jsx(me,{size:12})}),Yt&&n.jsx("button",{onClick:()=>{a(Zt=>({...Zt,[B.id]:!0})),Cs(B.id,B)},style:K.rowAdd,title:"Add sub-goal",children:n.jsx(ne,{size:13})}),n.jsx("button",{onClick:()=>dt(B.id,B.title),style:{...K.rowAdd,color:"var(--text-3)"},title:"Delete",children:n.jsx(vt,{size:13})})]})]}),ht&&bt.map(Zt=>n.jsx(Td,{goal:Zt,depth:N+1},Zt.id)),ht&&d===B.id&&n.jsx(zd,{parentId:B.id,parentGoal:B,depth:N+1})]})},On=t.filter(B=>Dr(B)&&B.start_date&&B.end_date),bp=Ah.map(B=>({...B,items:On.filter(N=>B.horizons.includes(N.horizon)).sort((N,bt)=>N.pillar.localeCompare(bt.pillar)||N.start_date.localeCompare(bt.start_date)||Kg[N.horizon]-Kg[bt.horizon]||N.end_date.localeCompare(bt.end_date))})).filter(B=>B.items.length>0),de=(()=>{if(!On.length)return null;let B=On[0].start_date,N=On[0].end_date;return On.forEach(bt=>{bt.start_date<B&&(B=bt.start_date),bt.end_date>N&&(N=bt.end_date)}),{start:ln(B),end:ln(N)}})(),Is=(()=>{if(!de)return[];const B=[];for(let N=de.start.getTime();N<=de.end.getTime();N+=eo)B.push(new Date(N));return B})(),Go=Is.length,pp=(()=>{const B=[];return Is.forEach(N=>{const bt=`${N.getFullYear()}-${N.getMonth()}`,ht=B[B.length-1];ht&&ht.key===bt?ht.days++:B.push({key:bt,label:`${Wr[N.getMonth()]} '${String(N.getFullYear()).slice(2)}`,days:1})}),B})(),Ed=new Date;Ed.setHours(0,0,0,0);const rn=de?Math.round((Ed-de.start)/eo):-1,Uo=rn>=0&&rn<Go,mp=B=>Math.round((ln(B.end_date)-ln(B.start_date))/eo)+1,Bd=(v?mo:0)+rn*Qt,fp=de?`${de.start.getTime()}-${de.end.getTime()}`:"";return p.useEffect(()=>{if(!Uo)return;const B=w.current;B&&(B.scrollLeft=Math.max(0,Bd-B.clientWidth/2+Qt/2))},[fp,rn,v,Uo]),n.jsxs("div",{style:K.page,children:[n.jsxs("div",{style:K.head,children:[n.jsx("div",{style:K.eyebrow,children:"Anvil · Goals"}),n.jsx("h1",{style:K.h1,children:ct?"All Goals":`${r} Goals`})]}),n.jsxs("div",{style:K.pillarPicker,children:[n.jsx("button",{onClick:()=>{o("All"),g(null),u(null)},style:{...K.pillarChip,...ct?{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"}:{}},children:"All Goals"}),Ug.map(B=>{const N=B===r;return n.jsxs("button",{onClick:()=>{o(B),g(null),u(null)},style:{...K.pillarChip,...N?{background:$e[B].dot,color:"#fff",borderColor:$e[B].dot}:{}},children:[n.jsx("span",{style:{...K.dot,background:N?"#fff":$e[B].dot}}),B]},B)})]}),n.jsxs("div",{style:K.list,children:[Er.map(B=>n.jsx(Td,{goal:B,depth:0},B.id)),Er.length===0&&n.jsxs("div",{style:K.ganttEmpty,children:["No goals yet",ct?"":` for ${r}`,"."]}),!ct&&d==="ROOT"&&n.jsx(zd,{parentId:"ROOT",parentGoal:null,depth:0}),!ct&&d!=="ROOT"&&n.jsxs("button",{onClick:()=>Cs("ROOT",null),style:K.rootAdd,children:[n.jsx(ne,{size:14})," Add top-level goal"]}),ct&&n.jsx("div",{style:K.allHint,children:"Pick a pillar above to add new goals."})]}),n.jsxs("div",{style:K.ganttWrap,children:[n.jsxs("div",{style:K.ganttTop,children:[n.jsxs("div",{style:K.ganttTitle,children:["Daily Timeline",de?` · ${Qg(de.start)} – ${Qg(de.end)}`:""]}),n.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[n.jsx("span",{style:K.ganttHint,children:"Drag a bar to reschedule"}),n.jsxs("button",{onClick:()=>z(B=>!B),style:K.labelToggle,children:[v?n.jsx(ch,{size:14}):n.jsx(uh,{size:14}),v?"Hide names":"Show names"]})]})]}),de?n.jsx("div",{style:K.ganttScroll,ref:w,children:n.jsxs("div",{style:{minWidth:(v?mo:0)+Go*Qt,position:"relative"},children:[Uo&&n.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:Bd,width:Qt,background:"color-mix(in srgb, var(--accent) 14%, transparent)",pointerEvents:"none",zIndex:3}}),n.jsxs("div",{style:K.gBandRow,children:[v&&n.jsx("div",{style:{...K.gLabelHead,zIndex:4},children:"Goal"}),n.jsx("div",{style:{display:"flex"},children:pp.map((B,N)=>n.jsx("div",{style:{...K.gMonthCell,width:B.days*Qt},children:B.label},N))})]}),n.jsxs("div",{style:K.gBandRow,children:[v&&n.jsx("div",{style:{...K.gLabelHead,zIndex:4,fontSize:10,color:"var(--text-3)",fontWeight:600},children:"days →"}),n.jsx("div",{style:{display:"flex"},children:Is.map((B,N)=>{const bt=B.getDay()===0||B.getDay()===6,ht=N===rn;return n.jsx("div",{style:{...K.gDayCell,...bt?K.gWeekend:{},...ht?K.gTodayCell:{}},children:B.getDate()},N)})})]}),bp.map(B=>n.jsxs("div",{children:[n.jsxs("div",{style:K.gGroupRow,children:[v?n.jsxs("div",{style:K.gGroupLabel,children:[B.label,n.jsx("span",{style:K.gGroupCount,children:B.items.length})]}):n.jsxs("div",{style:K.gGroupChip,children:[B.label," · ",B.items.length]}),n.jsx("div",{style:{width:Go*Qt,flexShrink:0}})]}),B.items.map(N=>{var Fd;const bt=((Fd=$e[N.pillar])==null?void 0:Fd.dot)||"#9A968C",ht=Math.round((ln(N.start_date)-de.start)/eo),Yt=mp(N),we=(_==null?void 0:_.id)===N.id,yt=we?_.dx:0,je=Lh(N),lr=(P==null?void 0:P.id)===N.id,nn=je?ma(N):Yt,Zt=je?Jg(N):Yt,Rr=lr?Math.max(nn,Math.min(Zt,Yt+Math.round(P.dx/Qt))):Yt,kt=Rr*Qt-4,Dd=kt>=54,Rd=`${N.title} · ${N.start_date} → ${N.end_date} · ${Rr} day${Rr>1?"s":""}${je?` (max ${Zt})`:""}`;return n.jsxs("div",{style:K.gRow,children:[v&&n.jsxs("div",{style:{...K.gLabel,paddingLeft:12},children:[n.jsx("span",{style:{...K.ganttRowDot,background:bt}}),n.jsx("span",{style:{...K.gHzTag,color:bt,borderColor:bt},children:Mh[N.horizon]}),n.jsx("span",{style:K.gLabelText,title:N.title,children:N.title}),n.jsxs("span",{style:K.gDurChip,children:[Rr,"d"]})]}),n.jsxs("div",{style:{...K.gTrack,width:Go*Qt},children:[Uo&&n.jsx("div",{style:{...K.gTodayLine,left:rn*Qt}}),n.jsxs("div",{onPointerDown:on=>{on.preventDefault(),L({id:N.id,startX:on.clientX,dx:0,g:N})},style:{...K.gBar,left:ht*Qt+2,width:kt,background:bt,cursor:we?"grabbing":"grab",transform:yt?`translateX(${yt}px)`:"none",zIndex:we||lr?6:1,boxShadow:we||lr?"0 4px 12px rgba(0,0,0,0.28)":"0 1px 2px rgba(0,0,0,0.15)",touchAction:"none"},title:Rd,children:[je&&Rr>nn&&n.jsx("div",{style:{position:"absolute",left:nn*Qt,top:0,bottom:0,right:0,background:"#C2536B",borderRadius:"0 5px 5px 0"}}),n.jsx(eh,{size:12,style:{opacity:.7,flexShrink:0,marginRight:2,color:"#fff",position:"relative",zIndex:1}}),Dd&&n.jsx("span",{style:{...K.gBarLabel,position:"relative",zIndex:1},children:N.title}),je&&n.jsx("div",{onPointerDown:on=>{on.preventDefault(),on.stopPropagation(),I({id:N.id,startX:on.clientX,dx:0,g:N})},style:K.resizeHandle,title:`Drag to extend up to ${Zt} days`,children:n.jsx("div",{style:K.resizeGrip})})]}),!Dd&&n.jsx("span",{style:{...K.gBarOutside,left:ht*Qt+kt+8+yt},title:Rd,children:N.title})]})]},N.id)})]},B.key))]})}):n.jsx("div",{style:K.ganttEmpty,children:"No goals on the timeline. Click the eye icon on a goal to show it here."}),de&&n.jsxs("div",{style:K.gLegend,children:[n.jsxs("span",{style:K.gLegendItem,children:[n.jsx("span",{style:{...K.gLegendBar}})," bar length = number of days"]}),n.jsxs("span",{style:K.gLegendItem,children:[n.jsx("span",{style:K.gLegendToday})," today"]})]})]}),n.jsx(en,{toasts:et,onUndo:mt,onDismiss:Tt})]})}const K={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box",maxWidth:"100%",overflowX:"hidden"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},pillarPicker:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16},pillarChip:{display:"flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},list:{background:"var(--surface)",borderRadius:12,padding:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"hidden"},row:{display:"flex",alignItems:"center",gap:9,padding:"9px 10px",borderRadius:8,flexWrap:"nowrap"},caret:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",display:"grid",placeItems:"center",padding:0,width:18,height:18,flexShrink:0},horizonTag:{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",border:"1px solid",borderRadius:5,padding:"2px 6px",flexShrink:0},title:{fontSize:14,fontWeight:500,lineHeight:1.3,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",userSelect:"none",WebkitUserSelect:"none",cursor:"default"},titleFull:{whiteSpace:"normal",overflow:"visible",textOverflow:"clip",wordBreak:"break-word"},periodTag:{fontSize:11,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"3px 8px",borderRadius:12,flexShrink:0},rowAdd:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,flexShrink:0},menuBackdrop:{position:"fixed",inset:0,zIndex:40},goalMenu:{position:"fixed",zIndex:41,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 6px 24px rgba(0,0,0,0.18)",padding:4,minWidth:180,display:"flex",flexDirection:"column"},menuItem:{display:"flex",alignItems:"center",gap:9,width:"100%",border:"none",background:"none",padding:"10px 12px",borderRadius:7,cursor:"pointer",fontFamily:"inherit",fontSize:13.5,fontWeight:500,color:"var(--text)",textAlign:"left"},rootAdd:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"var(--text-2)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"9px 12px",cursor:"pointer",fontWeight:600,fontFamily:"inherit",marginTop:6,width:"100%",justifyContent:"center"},addBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 0 6px 28px",flexWrap:"wrap"},editBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 10px",flexWrap:"wrap",background:"var(--bg)",borderRadius:8,margin:"4px 0"},input:{border:"1px solid var(--border)",borderRadius:7,padding:"8px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",flex:1,minWidth:120},monthSelect:{border:"1px solid var(--border)",borderRadius:7,padding:"8px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},inheritTag:{fontSize:11.5,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"6px 9px",borderRadius:7,flexShrink:0},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},ganttWrap:{background:"var(--surface)",borderRadius:12,padding:"16px 14px",marginTop:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},ganttTop:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:10,marginBottom:14},ganttTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",fontFamily:"'Fraunces',Georgia,serif"},ganttHint:{fontSize:11.5,color:"var(--text-3)",fontWeight:500},labelToggle:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"5px 10px",borderRadius:8,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},gGroupChip:{position:"sticky",left:0,zIndex:3,background:"var(--surface-2)",padding:"5px 10px",fontSize:10,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-2)",whiteSpace:"nowrap",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center"},allHint:{fontSize:12,color:"var(--text-3)",fontStyle:"italic",padding:"10px 12px"},ganttEmpty:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},ganttScroll:{overflowX:"auto"},ganttRowDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},gBandRow:{display:"flex",alignItems:"stretch",borderBottom:"1px solid var(--border)"},gLabelHead:{width:mo,flexShrink:0,position:"sticky",left:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center",padding:"6px 10px",fontSize:12,fontWeight:700,color:"var(--text-2)"},gMonthCell:{flexShrink:0,borderLeft:"1px solid var(--border)",fontSize:10.5,fontWeight:700,color:"var(--text-2)",textAlign:"center",padding:"5px 0",whiteSpace:"nowrap",overflow:"hidden"},gDayCell:{width:Qt,flexShrink:0,textAlign:"center",fontSize:10,color:"var(--text-3)",padding:"4px 0",borderLeft:"1px solid var(--border)",fontWeight:600},gWeekend:{background:"var(--surface-2)"},gTodayCell:{background:"var(--hover)",color:"var(--accent)",fontWeight:800},gGroupRow:{display:"flex",alignItems:"stretch",background:"var(--surface-2)",borderBottom:"1px solid var(--border)",borderTop:"1px solid var(--border)"},gGroupLabel:{width:mo,flexShrink:0,position:"sticky",left:0,background:"var(--surface-2)",zIndex:3,padding:"6px 12px",fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-2)",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center",gap:7},gGroupCount:{fontSize:10,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 6px"},gHzTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.04em",border:"1px solid",borderRadius:4,padding:"1px 4px",flexShrink:0},gRow:{display:"flex",alignItems:"stretch",minHeight:36,borderBottom:"1px solid var(--border)"},gLabel:{width:mo,flexShrink:0,display:"flex",alignItems:"center",gap:7,position:"sticky",left:0,background:"var(--surface)",zIndex:2,borderRight:"1px solid var(--border)",paddingRight:8,overflow:"hidden"},gLabelText:{flex:1,minWidth:0,fontSize:12,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"var(--text)"},gDurChip:{fontSize:10,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",borderRadius:10,padding:"1px 6px",flexShrink:0,marginRight:6},gTrack:{position:"relative",flexShrink:0,minHeight:36,backgroundImage:`repeating-linear-gradient(to right, var(--border) 0, var(--border) 1px, transparent 1px, transparent ${Qt}px)`},gBar:{position:"absolute",top:9,height:18,borderRadius:5,display:"flex",alignItems:"center",padding:"0 7px",boxShadow:"0 1px 2px rgba(0,0,0,0.15)",overflow:"hidden",zIndex:1},gBarLabel:{fontSize:11,fontWeight:600,color:"#fff",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},gBarOutside:{position:"absolute",top:9,height:18,display:"flex",alignItems:"center",fontSize:11,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",pointerEvents:"none",zIndex:1},resizeHandle:{position:"absolute",right:0,top:0,bottom:0,width:12,cursor:"ew-resize",display:"grid",placeItems:"center",touchAction:"none",zIndex:2},resizeGrip:{width:2,height:11,background:"rgba(255,255,255,0.9)",borderRadius:1,boxShadow:"3px 0 0 rgba(255,255,255,0.6)"},gTodayLine:{position:"absolute",top:0,bottom:0,width:2,background:"#C2536B",zIndex:0,opacity:.6},gLegend:{display:"flex",gap:16,marginTop:12,fontSize:11,color:"var(--text-3)",flexWrap:"wrap"},gLegendItem:{display:"flex",alignItems:"center",gap:6,fontWeight:600},gLegendBar:{width:18,height:8,borderRadius:3,background:"var(--accent)",display:"inline-block"},gLegendToday:{width:2,height:12,background:"#C2536B",display:"inline-block"}},Xr={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.12)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.12)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.12)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.12)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.12)"}},rp=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Oh=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Ss=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,Hh=()=>Ss(new Date),Gh=(t=0)=>{const e=new Date,r=e.getDay(),o=r===0?-6:1-r,i=new Date(e);return i.setDate(e.getDate()+o+t*7),Array.from({length:7},(s,l)=>{const a=new Date(i);return a.setDate(i.getDate()+l),Ss(a)})},Uh=(t=0)=>{const e=new Date,r=new Date(e.getFullYear(),e.getMonth()+t,1),o=r.getFullYear(),i=r.getMonth(),s=new Date(o,i+1,0).getDate(),l=r.getDay(),a=l===0?6:l-1,d=Array.from({length:s},(f,y)=>`${o}-${String(i+1).padStart(2,"0")}-${String(y+1).padStart(2,"0")}`),g=r.toLocaleDateString("en-US",{month:"long",year:"numeric"});return{dates:d,startOffset:a,label:g,year:o,month:i}},qg=t=>new Date(t+"T00:00").toLocaleDateString("en-US",{month:"short",day:"numeric"}),br=Hh(),Vh=new Date().getFullYear();function Yh(){var j,Y;const[t,e]=p.useState([]),[r,o]=p.useState("ALL"),[i,s]=p.useState(!1),[l,a]=p.useState(!1),[d,g]=p.useState(!1),[f,y]=p.useState(null),[m,S]=p.useState(null),[k,C]=p.useState({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week"}),[T,b]=p.useState(!1),[c,u]=p.useState([]),x=p.useCallback(()=>H.getHabits().then(e).catch(console.error),[]);p.useEffect(()=>{x()},[x]),p.useEffect(()=>{H.getSetting("habit_order").then(h=>{Array.isArray(h==null?void 0:h.value)&&u(h.value)}).catch(()=>{})},[]);const v=p.useMemo(()=>c.length?[...t].sort((h,$)=>{const dt=c.indexOf(h.id),et=c.indexOf($.id);return dt===-1&&et===-1?0:dt===-1?1:et===-1?-1:dt-et}):t,[t,c]),z=async h=>{u(h),await H.setSetting("habit_order",h),b(!1)};p.useEffect(()=>{const h=()=>{const $=window.innerWidth<720;s($),$||a(!1)};return h(),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[]);const{deleteItem:_,toasts:L,handleUndo:F,handleDismiss:P}=tn(H.deleteHabit,H.restoreHabit,x),I=h=>{o(h),i&&a(!1)},D=(h,$)=>{(h.type==="minimum"||h.type==="maximum")&&h.period==="day"?S({habit:h,date:$}):w(h.id,$)},w=async(h,$)=>{await H.toggleHabitLog(h,$),x()},O=async(h,$,dt,et)=>{await H.setHabitLogCount(h,$,dt,et),S(null),x()},st=async(h,$)=>{await H.clearHabitLog(h,$),S(null),x()},q=async()=>{if(!k.name.trim())return;const h={name:k.name.trim(),pillar:k.pillar,target_per_week:Number(k.target_per_week)||7,type:k.type,target_count:k.type!=="regular"?Number(k.target_count)||1:null,period:k.type!=="regular"?k.period:null};await H.createHabit(h),C({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week"}),g(!1),x()},R=async(h,$)=>{r===h&&o("ALL"),_(h,$)},A=t.find(h=>h.id===r),M=h=>new Set(h.logs||[]),G={...W.sidebar,...i?W.sidebarOverlay:{},...i&&!l?W.sidebarHidden:{}};return n.jsxs("div",{style:W.shell,children:[i&&l&&n.jsx("div",{style:W.backdrop,onClick:()=>a(!1)}),n.jsxs("aside",{style:G,children:[n.jsxs("div",{style:W.sideTop,children:[n.jsx("div",{style:W.brand,children:"Anvil · Habits"}),i&&n.jsx("button",{onClick:()=>a(!1),style:W.closeBtn,children:n.jsx(vt,{size:18})})]}),n.jsxs("div",{style:{...W.sideItem,...r==="ALL"?W.sideItemOn:{},cursor:"default",padding:"2px 6px 2px 10px"},children:[n.jsxs("button",{onClick:()=>I("ALL"),style:{display:"flex",alignItems:"center",gap:9,flex:1,border:"none",background:"none",cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:r==="ALL"?600:500,color:"var(--text-2)",padding:"7px 0"},children:[n.jsx(Ub,{size:15}),n.jsx("span",{style:W.sideLabel,children:"All Habits"}),n.jsx("span",{style:W.sideCount,children:t.length})]}),n.jsx("button",{onClick:h=>{h.stopPropagation(),b(!0)},style:W.tinyBtn,title:"Reorder habits",children:n.jsx(me,{size:12})})]}),n.jsx("div",{style:W.sideDivider}),v.map(h=>{var et;const $=r===h.id,dt=((et=Xr[h.pillar])==null?void 0:et.dot)||"#9A968C";return n.jsxs("button",{onClick:()=>I(h.id),style:{...W.sideItem,...$?W.sideItemOn:{}},children:[n.jsx("span",{style:{...W.sideDot,background:dt}}),n.jsx("span",{style:W.sideLabel,children:h.name}),n.jsxs("span",{style:W.sideStreak,children:[n.jsx(Nn,{size:11})," ",h.streak]})]},h.id)}),d?n.jsx(Qh,{habit:k,onChange:C,onSave:q,onCancel:()=>g(!1)}):n.jsxs("button",{onClick:()=>g(!0),style:W.sideNewBtn,children:[n.jsx(ne,{size:13})," New habit"]})]}),n.jsxs("main",{style:W.main,children:[i&&n.jsxs("button",{onClick:()=>a(!0),style:W.hamburger,children:[n.jsx(hd,{size:18}),n.jsx("span",{style:W.hamburgerLabel,children:r==="ALL"?"All Habits":A==null?void 0:A.name})]}),r==="ALL"?n.jsx(Jh,{habits:v,dayAction:D,logSet:M,onDelete:R,onEdit:h=>y(h)}):n.jsx(qh,{habit:A,dayAction:D,logSet:M,onDelete:()=>R(A.id,A.name),onEdit:()=>y(A),setNote:(h,$)=>H.setHabitLogNote(A.id,h,$).then(x)}),r==="ALL"&&n.jsx(ey,{year:Vh})]}),T&&n.jsx(ty,{habits:v,onSave:z,onClose:()=>b(!1)}),f&&n.jsx(Kh,{habit:f,onSave:async h=>{await H.updateHabit(f.id,h),y(null),x()},onClose:()=>y(null)}),m&&n.jsx(Xh,{habit:m.habit,date:m.date,initialCount:((j=m.habit.log_counts)==null?void 0:j[m.date])??0,initialNote:((Y=m.habit.log_notes)==null?void 0:Y[m.date])??"",onSave:(h,$)=>O(m.habit.id,m.date,h,$),onClear:()=>st(m.habit.id,m.date),onClose:()=>S(null)}),n.jsx(en,{toasts:L,onUndo:F,onDismiss:P})]})}function Qh({habit:t,onChange:e,onSave:r,onCancel:o}){const i=t.type!=="regular";return n.jsxs("div",{style:W.addBox,children:[n.jsx("input",{autoFocus:!0,placeholder:"Habit name",value:t.name,onChange:s=>e(l=>({...l,name:s.target.value})),onKeyDown:s=>s.key==="Enter"&&r(),style:W.sideInput}),n.jsx("select",{value:t.pillar,onChange:s=>e(l=>({...l,pillar:s.target.value})),style:W.sideInput,children:Object.keys(Xr).map(s=>n.jsx("option",{children:s},s))}),n.jsxs("select",{value:t.type,onChange:s=>e(l=>({...l,type:s.target.value})),style:W.sideInput,children:[n.jsx("option",{value:"regular",children:"Regular (yes/no)"}),n.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),n.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),i&&n.jsxs("div",{style:{display:"flex",gap:6},children:[n.jsx("input",{type:"number",min:1,placeholder:"N",value:t.target_count||"",onChange:s=>e(l=>({...l,target_count:s.target.value})),style:{...W.sideInput,width:60}}),n.jsx("select",{value:t.period,onChange:s=>e(l=>({...l,period:s.target.value})),style:W.sideInput,children:["day","week","month","year"].map(s=>n.jsx("option",{children:s},s))})]}),n.jsxs("div",{style:{display:"flex",gap:6},children:[n.jsx("button",{onClick:r,style:W.sideAddBtn,children:n.jsx(jt,{size:13})}),n.jsx("button",{onClick:o,style:W.sideCancelBtn,children:n.jsx(vt,{size:13})})]})]})}function Kh({habit:t,onSave:e,onClose:r}){const[o,i]=p.useState(t.name),[s,l]=p.useState(t.type||"regular"),[a,d]=p.useState(t.target_count||""),[g,f]=p.useState(t.period||"week"),[y,m]=p.useState(t.reminder_time||""),S=()=>e({name:o.trim(),type:s,target_count:s!=="regular"?Number(a):null,period:s!=="regular"?g:null,reminder_time:y||null});return n.jsx("div",{style:W.modalOverlay,onClick:r,children:n.jsxs("div",{style:W.modal,onClick:k=>k.stopPropagation(),children:[n.jsxs("div",{style:W.modalHead,children:["Edit Habit",n.jsx("button",{onClick:r,style:W.closeBtn,children:n.jsx(vt,{size:16})})]}),n.jsx("label",{style:W.modalLabel,children:"Name"}),n.jsx("input",{value:o,onChange:k=>i(k.target.value),style:W.sideInput}),n.jsx("label",{style:W.modalLabel,children:"Type"}),n.jsxs("select",{value:s,onChange:k=>l(k.target.value),style:W.sideInput,children:[n.jsx("option",{value:"regular",children:"Regular (yes/no)"}),n.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),n.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),s!=="regular"&&n.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[n.jsx("input",{type:"number",min:1,value:a,onChange:k=>d(k.target.value),style:{...W.sideInput,width:70}}),n.jsx("select",{value:g,onChange:k=>f(k.target.value),style:W.sideInput,children:["day","week","month","year"].map(k=>n.jsx("option",{children:k},k))})]}),n.jsx("label",{style:W.modalLabel,children:"Reminder time"}),n.jsx("input",{type:"time",value:y,onChange:k=>m(k.target.value),style:W.sideInput}),n.jsx("button",{onClick:S,style:{...W.sideAddBtn,width:"100%",marginTop:10,height:36},children:"Save"})]})})}function Xh({habit:t,date:e,initialCount:r,initialNote:o,onSave:i,onClear:s,onClose:l}){const[a,d]=p.useState(r??0),[g,f]=p.useState(o??""),y=t.target_count,m=t.type==="minimum"?a>=y:a>0&&a<=y,S=t.type==="maximum"&&a>y,k=m?"#4C9A6B":S?"#C2536B":"#C2773B",C=m?"✓ Goal met":S?"Over the limit":"Not met yet";return n.jsx("div",{style:W.modalOverlay,onClick:l,children:n.jsxs("div",{style:W.modal,onClick:T=>T.stopPropagation(),children:[n.jsxs("div",{style:W.modalHead,children:[t.name,n.jsx("button",{onClick:l,style:W.closeBtn,children:n.jsx(vt,{size:16})})]}),n.jsxs("div",{style:{fontSize:12,color:"var(--text-3)",marginBottom:2},children:[e," · ",t.type==="minimum"?`at least ${y}`:`no more than ${y}`," / ",t.period]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:20,margin:"14px 0 6px"},children:[n.jsx("button",{onClick:()=>d(T=>Math.max(0,T-1)),style:W.counterBtn,children:"−"}),n.jsx("span",{style:{fontSize:38,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:52,textAlign:"center",color:k},children:a}),n.jsx("button",{onClick:()=>d(T=>T+1),style:W.counterBtn,children:"+"})]}),n.jsx("div",{style:{textAlign:"center",fontSize:12.5,fontWeight:700,color:k,marginBottom:12},children:C}),n.jsx("textarea",{value:g,onChange:T=>f(T.target.value),placeholder:"Add a comment (optional)…",style:{...W.sideInput,minHeight:56,resize:"vertical"}}),n.jsxs("div",{style:{display:"flex",gap:8,marginTop:10},children:[n.jsxs("button",{onClick:s,style:{...W.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[n.jsx(vt,{size:14})," Delete"]}),n.jsxs("button",{onClick:()=>i(a,g),style:{...W.sideAddBtn,flex:1,justifyContent:"center",height:38},children:[n.jsx(jt,{size:14})," Set"]})]})]})})}function rl({pct:t,label:e,sub:r,color:o}){const s=2*Math.PI*26,l=s*(1-Math.max(0,Math.min(100,t))/100);return n.jsxs("div",{style:W.ringStat,children:[n.jsxs("div",{style:W.ringBox,children:[n.jsxs("svg",{width:"70",height:"70",viewBox:"0 0 70 70",children:[n.jsx("circle",{cx:"35",cy:"35",r:26,fill:"none",stroke:"var(--border)",strokeWidth:"7"}),n.jsx("circle",{cx:"35",cy:"35",r:26,fill:"none",stroke:o,strokeWidth:"7",strokeLinecap:"round",strokeDasharray:s,strokeDashoffset:l,transform:"rotate(-90 35 35)",style:{transition:"stroke-dashoffset 0.5s ease"}})]}),n.jsxs("div",{style:{...W.ringPct,color:o},children:[t,"%"]})]}),n.jsxs("div",{children:[n.jsx("div",{style:W.ringLabel,children:e}),n.jsx("div",{style:W.ringSub,children:r})]})]})}function Jh({habits:t,dayAction:e,logSet:r,onDelete:o,onEdit:i}){const[s,l]=p.useState(0),a=Gh(s),d=`${qg(a[0])} – ${qg(a[6])}${s===0?" · This week":""}`,g=I=>{const D=new Date(I+"T00:00:00"),w=D.getDay(),O=new Date(D);return O.setDate(D.getDate()+(w===0?-6:1-w)),Array.from({length:7},(st,q)=>{const R=new Date(O);return R.setDate(O.getDate()+q),Ss(R)})},f=I=>I.logs||[],y=(I,D)=>I.type==="minimum"&&I.period==="week"&&D.filter(w=>r(I).has(w)).length>=(I.target_count||0),m=(I,D)=>I.type==="minimum"&&I.period==="month"&&f(I).filter(w=>w.slice(0,7)===D).length>=(I.target_count||0),S=(I,D)=>I.type==="minimum"&&I.period==="year"&&f(I).filter(w=>w.slice(0,4)===D).length>=(I.target_count||0),k=(I,D)=>{var w;if((I.type==="minimum"||I.type==="maximum")&&I.period==="day"){const O=(w=I.log_counts)==null?void 0:w[D];return O==null?!1:I.type==="minimum"?O>=(I.target_count||0):O>0&&O<=(I.target_count||0)}return r(I).has(D)},C=(I,D)=>I.type!=="minimum"?!1:I.period==="week"?y(I,g(D)):I.period==="month"?m(I,D.slice(0,7)):I.period==="year"?S(I,D.slice(0,4)):!1,T=(I,D)=>k(I,D)||C(I,D),b=t.filter(I=>T(I,br)).length,c=t.length?Math.round(b/t.length*100):0,u=I=>{if(I.type==="minimum"&&I.period==="month"&&(m(I,a[0].slice(0,7))||m(I,a[6].slice(0,7)))||I.type==="minimum"&&I.period==="year"&&(S(I,a[0].slice(0,4))||S(I,a[6].slice(0,4)))||I.type==="minimum"&&I.period==="week"&&y(I,a))return 1;if((I.type==="minimum"||I.type==="maximum")&&I.period==="day")return Math.min(1,a.filter(st=>k(I,st)).length/7);const D=r(I),w=a.filter(st=>D.has(st)).length,O=I.type==="minimum"&&I.period==="week"?I.target_count||1:I.target_per_week||7;return O>0?Math.min(1,w/O):0},x=t.length?Math.round(t.reduce((I,D)=>I+u(D),0)/t.length*100):0,v=new Date,z=`${v.getFullYear()}-${String(v.getMonth()+1).padStart(2,"0")}`,_=new Date(v.getFullYear(),v.getMonth()+1,0).getDate(),L=_/7,F=I=>{if(I.type==="minimum"&&I.period==="month"&&m(I,z)||I.type==="minimum"&&I.period==="year"&&S(I,z.slice(0,4)))return 1;if((I.type==="minimum"||I.type==="maximum")&&I.period==="day"){let O=0;for(let st=1;st<=_;st++)k(I,`${z}-${String(st).padStart(2,"0")}`)&&O++;return Math.min(1,O/_)}const D=f(I).filter(O=>O.slice(0,7)===z).length;let w;return I.type==="minimum"&&I.period==="week"?w=(I.target_count||1)*L:I.type==="minimum"&&I.period==="month"?w=I.target_count||1:I.type==="minimum"&&I.period==="year"?w=(I.target_count||1)/12:w=(I.target_per_week||7)*L,w>0?Math.min(1,D/w):0},P=t.length?Math.round(t.reduce((I,D)=>I+F(D),0)/t.length*100):0;return n.jsxs("div",{children:[n.jsxs("div",{style:W.mainHead,children:[n.jsx("div",{style:W.eyebrow,children:"Weekly view"}),n.jsx("h1",{style:W.h1,children:"All Habits"})]}),n.jsxs("div",{style:W.navBar,children:[n.jsx("button",{onClick:()=>l(I=>I-1),style:W.navBtn,children:n.jsx($n,{size:16})}),n.jsx("span",{style:W.navLabel,children:d}),n.jsx("button",{onClick:()=>l(I=>Math.min(0,I+1)),disabled:s>=0,style:{...W.navBtn,...s>=0?W.navBtnDisabled:{}},children:n.jsx(Zr,{size:16})})]}),n.jsxs("div",{style:W.weekCard,children:[n.jsxs("div",{style:W.weekHeadRow,children:[n.jsx("div",{style:W.weekNameCol}),rp.map((I,D)=>n.jsxs("div",{style:W.weekDayHead,children:[n.jsx("span",{style:W.weekDayName,children:I}),n.jsx("span",{style:{...W.weekDayNum,...a[D]===br?W.weekDayToday:{}},children:new Date(a[D]+"T00:00").getDate()})]},I)),n.jsx("div",{style:W.weekStreakCol,children:"Streak"})]}),t.map(I=>{var $,dt;const D=(($=Xr[I.pillar])==null?void 0:$.dot)||"#9A968C",w=((dt=Xr[I.pillar])==null?void 0:dt.soft)||"rgba(0,0,0,0.05)",O=r(I),st=I.type==="minimum"&&["week","month","year"].includes(I.period),q=I.target_count||0,R=I.logs||[],A=et=>R.filter(mt=>mt.slice(0,7)===et).length,M=et=>R.filter(mt=>mt.slice(0,4)===et).length,G=a.filter(et=>O.has(et)).length,j=et=>st?I.period==="week"?G>=q:I.period==="month"?A(et.slice(0,7))>=q:I.period==="year"?M(et.slice(0,4))>=q:!1:!1,Y=st&&a.some(j),h=I.period==="week"?G:I.period==="month"?A(a[0].slice(0,7)):I.period==="year"?M(a[0].slice(0,4)):0;return n.jsxs("div",{style:W.weekRow,children:[n.jsxs("div",{style:{...W.weekNameCol,flexDirection:"column",alignItems:"flex-start",gap:2},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[n.jsx("span",{style:{...W.sideDot,background:D}}),n.jsx("span",{style:W.weekHabitName,children:I.name})]}),I.type!=="regular"&&n.jsx("span",{style:W.typeBadge,children:I.type==="minimum"?`≥${I.target_count}/${I.period}`:`≤${I.target_count}/${I.period}`})]}),a.map((et,mt)=>{var Oo,Ho;const Tt=O.has(et),ft=et>br,It=(I.type==="minimum"||I.type==="maximum")&&I.period==="day",Q=(Oo=I.log_counts)==null?void 0:Oo[et],ut=Q!=null,ct=!!((Ho=I.log_notes)!=null&&Ho[et]),zt=j(et),qt=mt>0&&j(a[mt-1]),Er=mt<a.length-1&&j(a[mt+1]),Br=Tt||zt;return n.jsxs("div",{style:{...W.weekCell,position:"relative"},children:[zt&&n.jsx("span",{style:{...W.chainLine,background:D,left:qt?0:"50%",right:Er?0:"50%"}}),n.jsx("button",{disabled:ft,onClick:()=>e(I,et),style:{...W.tick,position:"relative",zIndex:1,...Br?{background:D,borderColor:D,color:"#fff"}:{},...It&&ut&&!Tt?{borderColor:D,color:D}:{},...ft&&!Br?W.tickFuture:{}},children:It?ut?n.jsx("span",{style:{fontSize:12,fontWeight:700},children:Q}):null:Tt&&n.jsx(jt,{size:14,color:"#fff",strokeWidth:3})}),ct&&n.jsx("span",{style:W.cellNoteBubble})]},et)}),n.jsx("div",{style:W.weekStreakCol,children:Y?n.jsxs("span",{style:{...W.streakPill,background:w,color:D},children:[n.jsx(ca,{size:12})," ",h,"/",q]}):n.jsxs("span",{style:{...W.streakPill,background:w,color:D},children:[n.jsx(Nn,{size:12})," ",I.streak]})})]},I.id)}),t.length===0&&n.jsx("div",{style:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},children:"No habits yet — add one from the sidebar."})]}),t.length>0&&n.jsxs("div",{style:{...W.progressCard,marginTop:18,marginBottom:0},children:[n.jsx(rl,{pct:c,label:"Today",sub:`${b}/${t.length} done`,color:"#4C9A6B"}),n.jsx("div",{style:W.progressDivider}),n.jsx(rl,{pct:x,label:"This week",sub:"of weekly targets",color:"#3A7CA5"}),n.jsx("div",{style:W.progressDivider}),n.jsx(rl,{pct:P,label:"This month",sub:"of monthly targets",color:"#8268B0"})]})]})}function qh({habit:t,dayAction:e,logSet:r,onDelete:o,onEdit:i,setNote:s}){var j,Y;const[l,a]=p.useState(null),[d,g]=p.useState(""),[f,y]=p.useState(null),[m,S]=p.useState(0),k=p.useRef(null);if(!t)return null;const C=((j=Xr[t.pillar])==null?void 0:j.dot)||"#9A968C",T=((Y=Xr[t.pillar])==null?void 0:Y.soft)||"rgba(0,0,0,0.05)",b=r(t),{dates:c,startOffset:u,label:x,year:v}=Uh(m),z=c.filter(h=>h<=br&&b.has(h)).length,_=c.filter(h=>h<=br).length,L=_>0?Math.round(z/_*100):0,F=t.type==="minimum"&&(t.period==="month"||t.period==="year"),P=t.period==="year"?(t.logs||[]).filter(h=>h.startsWith(`${v}-`)).length:c.filter(h=>b.has(h)).length,I=F&&P>=(t.target_count||0),D=t.type==="minimum"&&t.period==="week",w=t.target_count||0,O=h=>{const $=new Date(h+"T00:00"),dt=$.getDay(),et=new Date($);et.setDate($.getDate()+(dt===0?-6:1-dt));let mt=0;for(let Tt=0;Tt<7;Tt++){const ft=new Date(et);ft.setDate(et.getDate()+Tt),b.has(Ss(ft))&&mt++}return mt},st=h=>F?I:D?O(h)>=w:!1,q=D?O(br):0,R=D&&q>=w,A=h=>{k.current=setTimeout(()=>a(h),500)},M=()=>clearTimeout(k.current),G=h=>{var $;y(h),g((($=t.log_notes)==null?void 0:$[h])||""),a(null)};return n.jsxs("div",{children:[n.jsxs("div",{style:W.mainHead,children:[n.jsxs("div",{children:[n.jsxs("div",{style:W.eyebrow,children:[n.jsx("span",{style:{...W.sideDot,background:C,marginRight:6}}),t.pillar," · Monthly view"]}),n.jsx("h1",{style:W.h1,children:t.name})]}),n.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[n.jsxs("button",{onClick:i,style:W.actionBtn,children:[n.jsx(me,{size:14})," Edit"]}),n.jsxs("button",{onClick:o,style:{...W.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[n.jsx(vt,{size:14})," Delete"]}),t.reminder_time&&n.jsxs("button",{style:W.actionBtn,children:[n.jsx(Nb,{size:14})," ",t.reminder_time]})]})]}),n.jsxs("div",{style:W.statStrip,children:[n.jsx(an,{label:"Current streak",value:`${t.streak} days`,c:C,soft:T,flame:!0}),n.jsx(an,{label:"Best streak",value:`${t.max_streak??t.streak} days`,c:C,soft:T,flame:!0}),n.jsx(an,{label:"Done this month",value:`${z}/${_}`,c:C,soft:T}),n.jsx(an,{label:"Completion",value:`${L}%`,c:C,soft:T}),t.type==="regular"?n.jsx(an,{label:"Weekly target",value:`${t.target_per_week}×`,c:C,soft:T}):n.jsx(an,{label:t.type==="minimum"?"Min target":"Max allowed",value:`${t.target_count}/${t.period}`,c:C,soft:T})]}),n.jsxs("div",{style:W.navBar,children:[n.jsx("button",{onClick:()=>S(h=>h-1),style:W.navBtn,children:n.jsx($n,{size:16})}),n.jsxs("span",{style:W.navLabel,children:[x,m===0?" · This month":""]}),n.jsx("button",{onClick:()=>S(h=>Math.min(0,h+1)),disabled:m>=0,style:{...W.navBtn,...m>=0?W.navBtnDisabled:{}},children:n.jsx(Zr,{size:16})})]}),F&&n.jsxs("div",{style:{...W.chainBanner,background:I?T:"var(--bg)",color:I?C:"var(--text-3)"},children:[n.jsx(ca,{size:15}),I?`${t.period==="year"?"Yearly":"Monthly"} chain complete — ${P}/${t.target_count} connected`:`${P}/${t.target_count} this ${t.period} · ${(t.target_count||0)-P} more to connect the chain`]}),D&&m===0&&n.jsxs("div",{style:{...W.chainBanner,background:R?T:"var(--bg)",color:R?C:"var(--text-3)"},children:[n.jsx(ca,{size:15}),R?`This week's chain complete — ${q}/${w} connected`:`${q}/${w} this week · ${Math.max(0,w-q)} more to connect the chain`]}),n.jsxs("div",{style:W.monthCard,children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[n.jsx("div",{style:W.monthTitle,children:x}),n.jsx("span",{style:{fontSize:11,color:"var(--text-3)"},children:"Long-press a day for options"})]}),n.jsx("div",{style:W.monthDow,children:rp.map(h=>n.jsx("div",{style:W.monthDowCell,children:h},h))}),n.jsxs("div",{style:W.monthGrid,children:[Array.from({length:u}).map((h,$)=>n.jsx("div",{},`pad${$}`)),c.map((h,$)=>{var Er,Br;const dt=$+1,et=b.has(h),mt=h>br,Tt=h===br,ft=!!((Er=t.log_notes)!=null&&Er[h]),It=(t.type==="minimum"||t.type==="maximum")&&t.period==="day",Q=(Br=t.log_counts)==null?void 0:Br[h],ut=Q!=null,ct=st(h),zt=ct&&!et,qt=(u+$)%7;return n.jsxs("div",{style:{position:"relative"},children:[ct&&n.jsx("span",{style:{...W.chainLine,background:C,...qt===0?{left:"50%"}:{left:-6},...qt===6?{right:"50%"}:{right:-6}}}),n.jsx("button",{disabled:mt,onClick:()=>e(t,h),onMouseDown:()=>!It&&A(h),onMouseUp:M,onTouchStart:()=>!It&&A(h),onTouchEnd:M,style:{...W.monthDay,position:"relative",zIndex:1,...et?{background:C,borderColor:C,color:"#fff"}:{},...zt?{background:T,borderColor:C,color:C}:{},...It&&ut&&!et?{borderColor:C,color:C}:{},...mt&&!et?W.monthDayFuture:{},...Tt&&!et?{borderColor:C,borderWidth:2}:{},width:"100%"},children:dt}),It&&ut&&n.jsx("span",{style:{...W.countBadge,background:et?"#4C9A6B":C},children:Q}),ft&&n.jsx("span",{style:W.noteIndicator}),l===h&&n.jsx(Zh,{onEdit:i,onDelete:o,onAddNote:()=>G(h),onRemind:i,onClose:()=>a(null)})]},h)})]})]}),f&&n.jsxs("div",{style:W.noteBox,children:[n.jsxs("div",{style:{fontWeight:600,fontSize:13,marginBottom:6},children:["Note for ",f]}),n.jsx("textarea",{value:d,onChange:h=>g(h.target.value),placeholder:"Add a note for this day…",style:{...W.sideInput,minHeight:60,resize:"vertical"}}),n.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[n.jsxs("button",{onClick:()=>{s(f,d),y(null)},style:W.sideAddBtn,children:[n.jsx(jt,{size:13})," Save"]}),n.jsx("button",{onClick:()=>y(null),style:W.sideCancelBtn,children:n.jsx(vt,{size:13})})]})]})]})}function Zh({onEdit:t,onDelete:e,onAddNote:r,onRemind:o,onClose:i}){return n.jsxs("div",{style:W.longPressMenu,children:[n.jsxs("button",{style:W.menuItem,onClick:()=>{t(),i()},children:[n.jsx(me,{size:13})," Edit"]}),n.jsxs("button",{style:W.menuItem,onClick:()=>{r(),i()},children:[n.jsx(fd,{size:13})," Add note"]}),n.jsxs("button",{style:W.menuItem,onClick:()=>{o(),i()},children:[n.jsx(Nb,{size:13})," Remind"]}),n.jsxs("button",{style:{...W.menuItem,color:"#C2536B"},onClick:()=>{e(),i()},children:[n.jsx(vt,{size:13})," Delete"]})]})}function ty({habits:t,onSave:e,onClose:r}){const[o,i]=p.useState([...t]),s=(l,a)=>{const d=[...o],g=l+a;g<0||g>=d.length||([d[l],d[g]]=[d[g],d[l]],i(d))};return n.jsx("div",{style:W.modalOverlay,onClick:r,children:n.jsxs("div",{style:{...W.modal,maxHeight:"80vh",overflowY:"auto"},onClick:l=>l.stopPropagation(),children:[n.jsxs("div",{style:W.modalHead,children:["Reorder Habits",n.jsx("button",{onClick:r,style:W.closeBtn,children:n.jsx(vt,{size:16})})]}),n.jsx("p",{style:{fontSize:12,color:"var(--text-3)",margin:"0 0 10px"},children:"Use arrows to set the display order."}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:o.map((l,a)=>{var g;const d=((g=Xr[l.pillar])==null?void 0:g.dot)||"#9A968C";return n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"9px 10px",background:"var(--bg)",borderRadius:9,border:"1px solid var(--border)"},children:[n.jsx("span",{style:{...W.sideDot,background:d}}),n.jsx("span",{style:{flex:1,fontSize:13,fontWeight:500},children:l.name}),n.jsx("button",{onClick:()=>s(a,-1),disabled:a===0,style:{...W.navBtn,width:28,height:28,opacity:a===0?.3:1,fontSize:14},children:"↑"}),n.jsx("button",{onClick:()=>s(a,1),disabled:a===o.length-1,style:{...W.navBtn,width:28,height:28,opacity:a===o.length-1?.3:1,fontSize:14},children:"↓"})]},l.id)})}),n.jsxs("button",{onClick:()=>e(o.map(l=>l.id)),style:{...W.sideAddBtn,width:"100%",marginTop:14,height:38,justifyContent:"center"},children:[n.jsx(jt,{size:14})," Save Order"]})]})})}function ey({year:t}){const[e,r]=p.useState([]);if(p.useEffect(()=>{H.getHabitsYearly(t).then(r).catch(console.error)},[t]),!e.length)return null;const o=Array.from({length:12},(s,l)=>{const a=e.reduce((g,f)=>{var y;return g+(((y=f.monthly[l+1])==null?void 0:y.done)||0)},0),d=e.reduce((g,f)=>{var y;return g+Math.floor((((y=f.monthly[l+1])==null?void 0:y.days)||30)/7*7)},0);return d>0?Math.round(a/d*100):0}),i=Math.max(...o,1);return n.jsxs("div",{style:{...W.monthCard,marginTop:18},children:[n.jsxs("div",{style:W.monthTitle,children:[t," Completion"]}),n.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:6,height:80,marginTop:12},children:o.map((s,l)=>n.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[n.jsx("div",{style:{width:"100%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",height:`${s/i*60}px`,minHeight:2,opacity:s>0?1:.15},title:`${s}%`}),n.jsx("span",{style:{fontSize:9,color:"var(--text-3)",fontWeight:600},children:Oh[l]})]},l))})]})}function an({label:t,value:e,c:r,soft:o,flame:i}){return n.jsxs("div",{style:{...W.stat,background:o},children:[n.jsx("div",{style:W.statLabel,children:t}),n.jsxs("div",{style:{...W.statValue,color:r},children:[i&&n.jsx(Nn,{size:15})," ",e]})]})}const W={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:230,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",padding:"20px 12px",display:"flex",flexDirection:"column",gap:3,overflowY:"auto"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.18)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)",boxShadow:"none"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.38)",zIndex:20},sideTop:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 4px"},closeBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",marginBottom:8},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700,padding:"0 6px 14px"},sideItem:{display:"flex",alignItems:"center",gap:9,width:"100%",border:"none",background:"none",padding:"9px 10px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:500,color:"var(--text-2)",textAlign:"left"},sideItemOn:{background:"var(--hover)",fontWeight:600},sideLabel:{flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},sideCount:{fontSize:11,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:10,padding:"1px 7px"},sideStreak:{display:"flex",alignItems:"center",gap:3,fontSize:11,fontWeight:600,color:"#C2773B"},sideDot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},sideDivider:{height:1,background:"var(--border)",margin:"8px 6px"},addBox:{padding:"10px 6px",display:"flex",flexDirection:"column",gap:6},sideInput:{border:"1px solid var(--border)",borderRadius:7,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},sideAddBtn:{border:"none",background:"#4C9A6B",color:"#fff",height:30,padding:"0 12px",borderRadius:7,cursor:"pointer",display:"flex",alignItems:"center",gap:5,fontSize:13,fontFamily:"inherit"},sideCancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:30,height:30,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},sideNewBtn:{display:"flex",alignItems:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",borderRadius:8,padding:"8px 10px",fontSize:12.5,color:"var(--text-3)",fontWeight:600,cursor:"pointer",fontFamily:"inherit",marginTop:6,justifyContent:"center"},main:{flex:1,padding:"26px",overflowX:"hidden",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:200},mainHead:{marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:5,display:"flex",alignItems:"center"},h1:{fontSize:27,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},actionBtn:{display:"flex",alignItems:"center",gap:5,fontSize:12,fontWeight:500,color:"var(--text-2)",border:"1px solid var(--border)",background:"var(--surface)",padding:"5px 10px",borderRadius:7,cursor:"pointer",fontFamily:"inherit"},progressCard:{background:"var(--surface)",borderRadius:12,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14,display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"},progressDivider:{width:1,alignSelf:"stretch",background:"var(--border)",minHeight:48},ringStat:{display:"flex",alignItems:"center",gap:12,flex:"1 1 160px"},ringBox:{position:"relative",width:70,height:70,display:"grid",placeItems:"center",flexShrink:0},ringPct:{position:"absolute",inset:0,display:"grid",placeItems:"center",fontSize:16,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},ringLabel:{fontSize:14,fontWeight:700,color:"var(--text)"},ringSub:{fontSize:11.5,color:"var(--text-3)",fontWeight:500,marginTop:2},weekCard:{background:"var(--surface)",borderRadius:12,padding:"8px 14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"auto"},weekHeadRow:{display:"flex",alignItems:"flex-end",padding:"10px 0",borderBottom:"1px solid var(--border)",minWidth:480},weekNameCol:{width:160,flexShrink:0,display:"flex",alignItems:"center",gap:8},weekDayHead:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:2},weekDayName:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekDayNum:{fontSize:12,fontWeight:600,color:"var(--text-2)",width:22,height:22,display:"grid",placeItems:"center",borderRadius:"50%"},weekDayToday:{background:"var(--accent-strong)",color:"#fff"},weekStreakCol:{width:64,flexShrink:0,textAlign:"center",fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekRow:{display:"flex",alignItems:"center",padding:"9px 0",borderBottom:"1px solid #F4F2EC",minWidth:480},weekHabitName:{fontSize:13,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},weekCell:{flex:1,display:"grid",placeItems:"center"},typeBadge:{fontSize:10,color:"var(--text-3)",background:"var(--hover)",padding:"1px 6px",borderRadius:8,fontWeight:600},tick:{width:26,height:26,borderRadius:7,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",padding:0},tickFuture:{opacity:.4,cursor:"not-allowed",borderStyle:"dashed"},streakPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:12,fontWeight:700,padding:"3px 9px",borderRadius:12},tinyBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:"2px 3px",display:"grid",placeItems:"center",borderRadius:4},statStrip:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(120px,1fr))",gap:10,marginBottom:18},stat:{borderRadius:10,padding:"13px 14px"},statLabel:{fontSize:11,fontWeight:600,color:"var(--text-2)",marginBottom:5},statValue:{fontSize:19,fontWeight:700,display:"flex",alignItems:"center",gap:5,fontFamily:"'Fraunces',Georgia,serif"},monthCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},monthTitle:{fontSize:14,fontWeight:700,marginBottom:12,fontFamily:"'Fraunces',Georgia,serif"},monthDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6,marginBottom:8},monthDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},monthGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6},monthDay:{aspectRatio:"1",border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",display:"grid",placeItems:"center"},monthDayFuture:{opacity:.4,cursor:"not-allowed",background:"var(--surface-2)"},noteIndicator:{position:"absolute",top:3,right:3,width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},cellNoteBubble:{position:"absolute",top:2,right:"calc(50% - 16px)",width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},countBadge:{position:"absolute",bottom:2,right:2,minWidth:13,height:13,padding:"0 2px",borderRadius:7,color:"#fff",fontSize:9,fontWeight:700,display:"grid",placeItems:"center",lineHeight:1},counterBtn:{width:44,height:44,borderRadius:"50%",border:"1.5px solid var(--border)",background:"var(--surface)",color:"var(--text)",fontSize:24,fontWeight:700,cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit",lineHeight:1},chainLine:{position:"absolute",top:"calc(50% - 3px)",left:0,right:0,height:6,zIndex:0,opacity:.9},chainBanner:{display:"flex",alignItems:"center",gap:8,borderRadius:10,padding:"10px 14px",marginBottom:14,fontSize:12.5,fontWeight:700,fontFamily:"'Inter',system-ui,sans-serif"},navBar:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:16},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},navLabel:{fontSize:13,fontWeight:700,color:"var(--text)",minWidth:180,textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},noteBox:{background:"var(--surface)",borderRadius:10,padding:14,marginTop:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},longPressMenu:{position:"absolute",top:"100%",left:0,zIndex:50,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 4px 16px rgba(0,0,0,0.12)",padding:"4px 0",minWidth:140},menuItem:{display:"flex",alignItems:"center",gap:8,width:"100%",border:"none",background:"none",padding:"8px 14px",fontSize:13,color:"var(--text)",cursor:"pointer",fontFamily:"inherit",textAlign:"left"},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",zIndex:100,display:"grid",placeItems:"center"},modal:{background:"var(--surface)",borderRadius:14,padding:24,width:320,maxWidth:"90vw",display:"flex",flexDirection:"column",gap:8},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",fontWeight:700,fontSize:16,fontFamily:"'Fraunces',Georgia,serif",marginBottom:6},modalLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.08em",marginTop:4}},fa=[{id:1,label:"Rough",emoji:"😣",color:"#C2536B"},{id:2,label:"Low",emoji:"🙁",color:"#C2773B"},{id:3,label:"Okay",emoji:"😐",color:"#C9A227"},{id:4,label:"Good",emoji:"🙂",color:"#4C9A6B"},{id:5,label:"Great",emoji:"😄",color:"#3A7CA5"}],ry=t=>fa.find(e=>e.id===t),nl=[{id:"wins",label:"Wins",hint:"What went well today?",icon:Kr,color:"#C9A227"},{id:"grateful",label:"Grateful for",hint:"1–3 things",icon:oh,color:"#C2536B"},{id:"mattered",label:"What mattered",hint:"The point of today",icon:yd,color:"#3A7CA5"},{id:"letgo",label:"Letting go of",hint:"Offload what's draining",icon:jh,color:"#8268B0"},{id:"tomorrow",label:"Tomorrow's one thing",hint:"A single priority",icon:yh,color:"#4C9A6B"}],np=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,ny=()=>np(new Date),ol=t=>new Date(t+"T00:00:00").toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long",year:"numeric"});function oy(){const t=ny(),[e,r]=[new Date().getFullYear(),new Date().getMonth()+1],[o,i]=p.useState(null),s=o||t,l=s===t,[a,d]=p.useState(null),[g,f]=p.useState({}),[y,m]=p.useState(Object.fromEntries(nl.map(F=>[F.id,""]))),S=p.useCallback(async F=>{const P=await H.getJournalEntry(F);d(P)},[]);p.useCallback(async()=>{const F=await H.getJournalHistory(e,r);f(F)},[e,r]);const k=p.useCallback(async()=>{const[F,P]=await Promise.all([H.getJournalEntry(s),H.getJournalHistory(e,r)]);d(F),f(P)},[s,e,r]);p.useEffect(()=>{k()},[k]);const C=async F=>{l&&(await H.updateJournalMood(s,F),k())},T=async F=>{if(!l)return;const P=y[F].trim();P&&(await H.addJournalBullet(s,F,P),m(I=>({...I,[F]:""})),S(s))},b=async F=>{await H.deleteJournalBullet(F),S(s)},c=F=>{i(F===t?null:F),m(Object.fromEntries(nl.map(P=>[P.id,""])))};if(!a)return n.jsx("div",{style:{padding:28,color:"var(--text-3)"},children:"Loading…"});const u=a.mood!==null,x=(()=>{let F=0;const P=new Date(t);if(g[t]||l&&u)F=1,P.setDate(P.getDate()-1);else return 0;for(;;){const D=np(P);if(g[D])F++,P.setDate(P.getDate()-1);else break}return F})(),v=Object.values(a.bullets||{}).reduce((F,P)=>F+P.length,0),z=new Date(e,r,0).getDate(),_=new Date(e,r-1,1).getDay(),L=_===0?6:_-1;return n.jsxs("div",{style:xt.page,children:[n.jsxs("div",{style:xt.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:xt.eyebrow,children:"Anvil · Journal"}),!l&&n.jsxs("button",{style:xt.backBtn,onClick:()=>i(null),children:[n.jsx($n,{size:14})," Back to Today"]}),n.jsx("h1",{style:xt.h1,children:l?"Today":ol(s)}),l&&n.jsx("div",{style:xt.date,children:ol(t)})]}),n.jsxs("div",{style:xt.streakBox,children:[n.jsx(Nn,{size:16,color:"#C2773B"}),n.jsx("span",{style:xt.streakNum,children:x}),n.jsx("span",{style:xt.streakLabel,children:"day streak"})]})]}),n.jsxs("div",{style:xt.card,children:[n.jsxs("div",{style:xt.cardTitle,children:["How ",l?"are":"were"," you?"]}),n.jsx("div",{style:xt.moodRow,children:fa.map(F=>{const P=a.mood===F.id;return n.jsxs("button",{onClick:()=>C(F.id),disabled:!l,style:{...xt.moodBtn,cursor:l?"pointer":"default",...P?{background:F.color,borderColor:F.color,transform:"translateY(-2px)"}:{},...!l&&!P?{opacity:.55}:{}},children:[n.jsx("span",{style:xt.moodEmoji,children:F.emoji}),n.jsx("span",{style:{...xt.moodLabel,color:P?"#fff":"#6B675E"},children:F.label})]},F.id)})})]}),nl.map(F=>{var D;const P=F.icon,I=((D=a.bullets)==null?void 0:D[F.id])||[];return n.jsxs("div",{style:xt.card,children:[n.jsxs("div",{style:xt.sectionHead,children:[n.jsx("span",{style:{...xt.sectionIcon,background:`${F.color}1A`,color:F.color},children:n.jsx(P,{size:15})}),n.jsxs("div",{children:[n.jsx("div",{style:xt.cardTitle,children:F.label}),n.jsx("div",{style:xt.sectionHint,children:F.hint})]})]}),n.jsxs("ul",{style:xt.bulletList,children:[I.map(w=>n.jsxs("li",{style:xt.bullet,children:[n.jsx("span",{style:{...xt.bulletDot,background:F.color}}),n.jsx("span",{style:xt.bulletText,children:w.text}),l&&n.jsx("button",{onClick:()=>b(w.id),style:xt.bulletDel,children:n.jsx(vt,{size:13})})]},w.id)),!l&&I.length===0&&n.jsx("li",{style:xt.sectionHint,children:"Nothing written."})]}),l&&n.jsxs("div",{style:xt.addRow,children:[n.jsx("input",{placeholder:"Add a point…",value:y[F.id],onChange:w=>m(O=>({...O,[F.id]:w.target.value})),onKeyDown:w=>w.key==="Enter"&&T(F.id),style:xt.input}),n.jsx("button",{onClick:()=>T(F.id),style:{...xt.addBtn,background:F.color},children:n.jsx(ne,{size:16})})]})]},F.id)}),n.jsxs("div",{style:xt.card,children:[n.jsxs("div",{style:xt.cardTitle,children:[new Date(e,r-1).toLocaleDateString("en-US",{month:"long",year:"numeric"})," · Mood history",n.jsx("span",{style:{fontSize:11,color:"var(--text-3)",fontWeight:400,marginLeft:8},children:"tap a day to view"})]}),n.jsx("div",{style:xt.calDow,children:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(F=>n.jsx("div",{style:xt.calDowCell,children:F},F))}),n.jsxs("div",{style:xt.calGrid,children:[Array.from({length:L}).map((F,P)=>n.jsx("div",{},`p${P}`)),Array.from({length:z},(F,P)=>P+1).map(F=>{const P=`${e}-${String(r).padStart(2,"0")}-${String(F).padStart(2,"0")}`,I=P===t&&a.mood?a.mood:g[P],D=I?ry(I):null,w=P>t,O=P===s;return n.jsx("button",{onClick:()=>!w&&c(P),disabled:w,style:{...xt.calDay,background:D?D.color:w?"var(--surface-2)":"var(--surface)",borderColor:O?"var(--accent-strong)":"var(--border)",borderWidth:O?2:1,color:D?"#fff":"var(--text-3)",opacity:w?.5:1,cursor:w?"not-allowed":"pointer",outline:O?"2px solid var(--accent-strong)":"none",outlineOffset:1},title:D?D.label:P,children:D?D.emoji:F},F)})]}),n.jsx("div",{style:xt.legend,children:fa.map(F=>n.jsxs("span",{style:xt.legendItem,children:[n.jsx("span",{style:{...xt.legendDot,background:F.color}})," ",F.label]},F.id))})]}),n.jsx("div",{style:xt.footer,children:l?u?`Mood set · ${v} point${v===1?"":"s"} written today`:"Tap a mood to log today and keep your streak":`Viewing ${ol(s)} · past entries are read-only`})]})}const xt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:22},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},backBtn:{display:"inline-flex",alignItems:"center",gap:4,border:"none",background:"none",color:"#3A7CA5",fontSize:12.5,fontWeight:600,cursor:"pointer",padding:"0 0 6px",fontFamily:"inherit"},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},date:{fontSize:13,color:"var(--text-3)",marginTop:4},streakBox:{display:"flex",alignItems:"center",gap:6,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"8px 14px"},streakNum:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"#C2773B"},streakLabel:{fontSize:11,color:"var(--text-3)",fontWeight:500},card:{background:"var(--surface)",borderRadius:12,padding:"18px 20px",marginBottom:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},cardTitle:{fontSize:14,fontWeight:700,marginBottom:12,color:"var(--text)"},moodRow:{display:"flex",gap:8,flexWrap:"wrap"},moodBtn:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,border:"2px solid var(--border)",background:"var(--surface)",borderRadius:10,padding:"10px 12px",cursor:"pointer",flex:"1 1 60px",transition:"transform 0.1s"},moodEmoji:{fontSize:22},moodLabel:{fontSize:11,fontWeight:600},sectionHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:10},sectionIcon:{width:32,height:32,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},sectionHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},bulletList:{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6,marginBottom:10},bullet:{display:"flex",alignItems:"center",gap:8,fontSize:13.5,lineHeight:1.4},bulletDot:{width:6,height:6,borderRadius:"50%",flexShrink:0},bulletText:{flex:1},bulletDel:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},addRow:{display:"flex",gap:8},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 12px",fontSize:13.5,fontFamily:"inherit",outline:"none"},addBtn:{width:36,height:36,border:"none",borderRadius:8,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:12},calDay:{aspectRatio:"1",border:"1px solid var(--border)",borderRadius:7,fontSize:13,display:"grid",placeItems:"center",fontWeight:500,fontFamily:"inherit"},legend:{display:"flex",gap:10,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)"},legendDot:{width:8,height:8,borderRadius:"50%",display:"inline-block"},footer:{fontSize:12.5,color:"var(--text-3)",textAlign:"center",marginTop:8,fontStyle:"italic"}},Ne=[{id:"D",label:"Data",color:"#3A7CA5",soft:"rgba(58,124,165,0.10)",prompt:"What did you read/watch? Log the raw source and a quick note.",hint:"e.g. 'Atomic Habits ch.1 — habits are systems not goals'"},{id:"I",label:"Information",color:"#8268B0",soft:"rgba(130,104,176,0.10)",prompt:"What did you actually understand from it? In your own words.",hint:"e.g. 'Small 1% improvements compound into massive change over time'"},{id:"K",label:"Knowledge",color:"#C9A227",soft:"rgba(201,162,39,0.10)",prompt:"How will this specifically improve your life? Connect it to your goals.",hint:"e.g. 'I will improve my morning workout habit by 1% each week'"},{id:"W",label:"Wisdom",color:"#4C9A6B",soft:"rgba(76,154,107,0.10)",prompt:"How have you implemented it? What changed?",hint:"e.g. 'I've not missed a workout in 3 weeks using the 1% rule'"}],Zg=t=>Ne.findIndex(e=>e.id===t),ha=[{id:"book",label:"Book",icon:Ob},{id:"video",label:"Video",icon:Sh},{id:"article",label:"Article",icon:fd}],tc=t=>ha.find(e=>e.id===t)||ha[0],il={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"};function iy(){var q;const[t,e]=p.useState([]),[r,o]=p.useState(null),[i,s]=p.useState("ALL"),[l,a]=p.useState(!1),[d,g]=p.useState(null),[f,y]=p.useState({title:"",type:"book",pillar:"Academic",note:""}),[m,S]=p.useState({}),[k,C]=p.useState(null),[T,b]=p.useState(null),c=p.useCallback(async()=>{try{const R=await H.getSkills();e(R);const A={};R.forEach(M=>{A[M.id]=Object.fromEntries(Ne.map(G=>[G.id,""]))}),S(M=>{const G={...A};return R.forEach(j=>{M[j.id]&&(G[j.id]={...A[j.id],...M[j.id]})}),G})}catch(R){console.error(R)}},[]);p.useEffect(()=>{c()},[c]);const u=t.find(R=>R.id===r),x=u?Zg(u.stage):-1,v=async(R,A)=>{var G;const M=(((G=m[R])==null?void 0:G[A])??"").trim();M&&(await H.addSkillNote(R,A,M),S(j=>({...j,[R]:{...j[R],[A]:""}})),c())},z=async R=>{await H.deleteSkillNote(R),c()},_=async()=>{!u||!(T!=null&&T.trim())||(await H.updateSkill(u.id,{title:T.trim()}),b(null),c())},L=async()=>{!k||!k.text.trim()||(await H.updateSkillNote(k.id,k.text.trim()),C(null),c())},F=async R=>{await H.toggleSkillNote(R),c()},P=async(R,A)=>{t.find(G=>G.id===R)&&(A==="W"&&g(R),await H.completeSkillStage(R,A),c())},I=async()=>{if(!f.title.trim())return;const R=await H.createSkill({pillar:f.pillar,title:f.title.trim(),source_type:f.type,note_d:f.note.trim()});a(!1),y({title:"",type:"book",pillar:"Academic",note:""}),o(R.id),c()},D=async R=>{await H.deleteSkill(R),r===R&&o(null),c()},w=i==="ALL"?t:t.filter(R=>R.stage===i),O=t.filter(R=>R.stage==="W").length,st=!!u;return n.jsxs("div",{style:tt.page,children:[d&&n.jsx("div",{style:tt.celebOverlay,children:n.jsxs("div",{style:tt.celebBox,children:[n.jsx("div",{style:tt.celebEmoji,children:"🏆"}),n.jsx("div",{style:tt.celebTitle,children:"Wisdom unlocked!"}),n.jsx("div",{style:tt.celebSub,children:"You've implemented this knowledge — that's rare and real."}),n.jsx("button",{onClick:()=>g(null),style:tt.celebBtn,children:"Continue"})]})}),n.jsxs("div",{style:tt.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:tt.eyebrow,children:"Anvil · Skills"}),n.jsx("h1",{style:tt.h1,children:"DIKW Skills"}),n.jsx("div",{style:tt.subhead,children:"Data → Information → Knowledge → Wisdom"})]}),n.jsxs("div",{style:tt.headRight,children:[n.jsxs("div",{style:tt.wisdomBadge,children:[n.jsx(Kr,{size:14,color:"#C9A227"})," ",O," Wisdom",O!==1?"s":""]}),n.jsxs("button",{onClick:()=>{a(!0),o(null)},style:tt.addSkillBtn,children:[n.jsx(ne,{size:15})," Add skill"]})]})]}),n.jsx("div",{style:tt.filterBar,children:["ALL",...Ne.map(R=>R.id)].map(R=>{const A=Ne.find(G=>G.id===R),M=i===R;return n.jsx("button",{onClick:()=>s(R),style:{...tt.filterBtn,...M?{background:A?A.color:"var(--accent-strong)",color:"#fff",borderColor:"transparent"}:{}},children:A?`${R} · ${A.label}`:"All"},R)})}),n.jsxs("div",{style:{...tt.layout,gridTemplateColumns:st?"1fr 1fr":"1fr"},children:[n.jsxs("div",{style:tt.cardList,children:[l&&n.jsxs("div",{style:{...tt.skillCard,border:"2px dashed #3A7CA5"},children:[n.jsx("div",{style:tt.cardTitle,children:"New skill"}),n.jsx("input",{placeholder:"Title (book / video / article name)",value:f.title,onChange:R=>y(A=>({...A,title:R.target.value})),onKeyDown:R=>R.key==="Enter"&&I(),style:tt.input,autoFocus:!0}),n.jsxs("div",{style:tt.addRow,children:[n.jsx("select",{value:f.type,onChange:R=>y(A=>({...A,type:R.target.value})),style:tt.select,children:ha.map(R=>n.jsx("option",{value:R.id,children:R.label},R.id))}),n.jsx("select",{value:f.pillar,onChange:R=>y(A=>({...A,pillar:R.target.value})),style:tt.select,children:Object.keys(il).map(R=>n.jsx("option",{children:R},R))})]}),n.jsx("input",{placeholder:"First note (what did you read/watch?)",value:f.note,onChange:R=>y(A=>({...A,note:R.target.value})),style:tt.input}),n.jsxs("div",{style:tt.addRow,children:[n.jsxs("button",{onClick:I,style:tt.saveBtn,children:[n.jsx(jt,{size:14})," Save"]}),n.jsxs("button",{onClick:()=>a(!1),style:tt.cancelBtn,children:[n.jsx(vt,{size:14})," Cancel"]})]})]}),w.map(R=>{const A=Zg(R.stage),M=Ne[A],G=tc(R.type),j=R.stage==="W",Y=r===R.id;return n.jsxs("div",{onClick:()=>o(Y?null:R.id),style:{...tt.skillCard,...Y?{borderColor:M.color,borderWidth:2}:{},...j?{background:"rgba(76,154,107,0.05)"}:{}},children:[n.jsxs("div",{style:tt.skillCardTop,children:[n.jsxs("div",{style:tt.skillMeta,children:[n.jsx("span",{style:{color:il[R.pillar]},children:n.jsx(G.icon,{size:13})}),n.jsx("span",{style:{...tt.pillarDot,background:il[R.pillar]}}),n.jsxs("span",{style:tt.srcLabel,children:[G.label," · ",R.pillar]})]}),n.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[j&&n.jsx(No,{size:14,color:"#4C9A6B"}),n.jsx("button",{onClick:h=>{h.stopPropagation(),D(R.id)},style:tt.ghostBtn,children:n.jsx(vt,{size:13})})]})]}),n.jsx("div",{style:tt.skillTitle,children:R.title}),n.jsxs("div",{style:tt.track,children:[Ne.map((h,$)=>{var Tt;const dt=$<A,et=$===A,mt=(Tt=R.completed_stages)==null?void 0:Tt[h.id];return n.jsxs("div",{style:tt.trackItem,children:[n.jsxs("div",{style:{...tt.trackDot,background:dt||mt||et?h.color:"var(--border)",boxShadow:et?`0 0 0 3px ${h.color}33`:"none"},children:[(dt||et&&mt)&&n.jsx(jt,{size:9,color:"#fff",strokeWidth:3}),et&&!mt&&n.jsx("span",{style:tt.trackCurrent,children:h.id}),!dt&&!et&&n.jsx(Hg,{size:8,color:"#B5B1A7"})]}),$<Ne.length-1&&n.jsx("div",{style:{...tt.trackLine,background:dt?Ne[$+1].color:"var(--border)"}})]},h.id)}),n.jsx("span",{style:{...tt.stageTag,background:M.soft,color:M.color},children:M.label})]})]},R.id)}),w.length===0&&!l&&n.jsx("div",{style:tt.empty,children:"No skills at this stage yet."})]}),u&&n.jsxs("div",{style:tt.detail,children:[n.jsxs("div",{style:tt.detailHead,children:[n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsxs("div",{style:tt.eyebrow,children:[tc(u.type).label," · ",u.pillar]}),T!==null?n.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",marginTop:4},children:[n.jsx("input",{autoFocus:!0,value:T,onChange:R=>b(R.target.value),onKeyDown:R=>{R.key==="Enter"&&_(),R.key==="Escape"&&b(null)},style:{...tt.input,fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:0,flex:1}}),n.jsx("button",{onClick:_,style:{...tt.noteAddBtn,background:"#4C9A6B",width:30,height:30},children:n.jsx(jt,{size:13})}),n.jsx("button",{onClick:()=>b(null),style:{...tt.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:30,height:30},children:n.jsx(vt,{size:13})})]}):n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[n.jsx("div",{style:tt.detailTitle,children:u.title}),n.jsx("button",{onClick:()=>b(u.title),style:tt.ghostBtn,title:"Edit name",children:n.jsx(me,{size:13})})]})]}),n.jsx("button",{onClick:()=>{o(null),b(null)},style:tt.closeBtn,children:n.jsx(vt,{size:16})})]}),Ne.map((R,A)=>{var dt,et,mt;const M=A<=x,G=A===x,j=A<x||((dt=u.completed_stages)==null?void 0:dt[R.id]),Y=A>x,h=((et=u.notes)==null?void 0:et[R.id])||[],$=((mt=m[u.id])==null?void 0:mt[R.id])??"";return n.jsxs("div",{style:{...tt.stageBlock,...M?{borderColor:R.color}:{},opacity:Y?.45:1},children:[n.jsxs("div",{style:tt.stageBlockHead,children:[n.jsx("div",{style:{...tt.stageLetter,background:M?R.color:"var(--border)",color:M?"#fff":"#9A968C"},children:j&&!G?n.jsx(jt,{size:12,color:"#fff",strokeWidth:3}):Y?n.jsx(Hg,{size:11,color:"#9A968C"}):R.id}),n.jsxs("div",{style:{flex:1},children:[n.jsx("div",{style:{...tt.stageName,color:M?R.color:"#9A968C"},children:R.label}),M&&n.jsx("div",{style:tt.stagePrompt,children:R.prompt})]}),j&&!G&&n.jsx("span",{style:{...tt.doneBadge,color:R.color,background:R.soft},children:"Done"})]}),M&&(()=>{var Q,ut;const Tt=R.id==="W",ft=h.length>0&&h.every(ct=>ct.done),It=Tt?ft:h.length>0;return n.jsxs(n.Fragment,{children:[h.length>0&&n.jsx("ul",{style:tt.noteList,children:h.map(ct=>n.jsxs("li",{style:tt.noteItem,children:[Tt?n.jsx("button",{onClick:()=>F(ct.id),style:{...tt.checkBox,...ct.done?{background:R.color,borderColor:R.color}:{}},children:ct.done&&n.jsx(jt,{size:11,color:"#fff",strokeWidth:3})}):n.jsx("span",{style:{...tt.noteDot,background:R.color}}),(k==null?void 0:k.id)===ct.id?n.jsxs("div",{style:{flex:1,display:"flex",gap:5},children:[n.jsx("input",{autoFocus:!0,value:k.text,onChange:zt=>C(qt=>({...qt,text:zt.target.value})),onKeyDown:zt=>{zt.key==="Enter"&&L(),zt.key==="Escape"&&C(null)},style:{...tt.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}),n.jsx("button",{onClick:L,style:{...tt.noteAddBtn,background:R.color,width:28,height:28},children:n.jsx(jt,{size:12})}),n.jsx("button",{onClick:()=>C(null),style:{...tt.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:28,height:28},children:n.jsx(vt,{size:12})})]}):n.jsx("span",{style:{...tt.noteText,...Tt&&ct.done?{textDecoration:"line-through",color:"var(--text-3)"}:{}},children:ct.text}),(k==null?void 0:k.id)!==ct.id&&n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:()=>C({id:ct.id,text:ct.text}),style:tt.ghostBtn,children:n.jsx(me,{size:12})}),n.jsx("button",{onClick:()=>z(ct.id),style:tt.ghostBtn,children:n.jsx(vt,{size:12})})]})]},ct.id))}),h.length===0&&n.jsx("div",{style:tt.noNotes,children:Tt?"Add the steps to implement this — check each off as you do it.":`No notes yet — ${R.hint}`}),n.jsxs("div",{style:tt.noteAddRow,children:[n.jsx("input",{placeholder:Tt?"Add a step to implement…":`Add a ${R.label} note…`,value:$,onChange:ct=>S(zt=>({...zt,[u.id]:{...zt[u.id],[R.id]:ct.target.value}})),onKeyDown:ct=>ct.key==="Enter"&&v(u.id,R.id),style:tt.noteInput}),n.jsx("button",{onClick:()=>v(u.id,R.id),style:{...tt.noteAddBtn,background:R.color},children:n.jsx(ne,{size:14})})]}),G&&!((Q=u.completed_stages)!=null&&Q[R.id])&&n.jsxs(n.Fragment,{children:[Tt&&h.length>0&&!ft&&n.jsxs("div",{style:tt.checklistHint,children:[h.filter(ct=>ct.done).length,"/",h.length," done — check all steps to complete Wisdom"]}),n.jsxs("button",{onClick:()=>P(u.id,R.id),disabled:!It,style:{...tt.advanceBtn,background:It?R.color:"#C3BFB5",marginTop:10,cursor:It?"pointer":"not-allowed"},children:[n.jsx(jt,{size:14}),Tt?"Mark Wisdom complete":`Complete ${R.label} → ${(ut=Ne[A+1])==null?void 0:ut.label}`]})]})]})})()]},R.id)}),u.stage==="W"&&((q=u.completed_stages)==null?void 0:q.W)&&n.jsxs("div",{style:tt.wisdomDone,children:[n.jsx(Kr,{size:16,color:"#4C9A6B"})," Wisdom achieved — implemented in your life"]})]})]})]})}const tt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box",position:"relative"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},headRight:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},wisdomBadge:{display:"flex",alignItems:"center",gap:5,background:"rgba(201,162,39,0.12)",border:"1px solid rgba(201,162,39,0.3)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:700,color:"#8A6E1A"},addSkillBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},filterBar:{display:"flex",gap:6,flexWrap:"wrap",marginBottom:16},filterBtn:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},layout:{display:"grid",gap:12},cardList:{display:"flex",flexDirection:"column",gap:10},skillCard:{background:"var(--surface)",borderRadius:12,padding:"14px",border:"1.5px solid var(--border)",cursor:"pointer",boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},skillCardTop:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},skillMeta:{display:"flex",alignItems:"center",gap:6},pillarDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},srcLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)"},skillTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em",marginBottom:12},cardTitle:{fontSize:13,fontWeight:700,marginBottom:10},track:{display:"flex",alignItems:"center"},trackItem:{display:"flex",alignItems:"center"},trackDot:{width:22,height:22,borderRadius:"50%",display:"grid",placeItems:"center",flexShrink:0},trackCurrent:{fontSize:9,fontWeight:800,color:"#fff"},trackLine:{width:24,height:3,borderRadius:2},stageTag:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:12,marginLeft:10},detail:{background:"var(--surface)",borderRadius:14,padding:"18px 16px",boxShadow:"0 1px 4px rgba(0,0,0,0.07)",border:"1.5px solid var(--border)",alignSelf:"start"},detailHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16},detailTitle:{fontSize:18,fontWeight:700,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},stageBlock:{border:"1.5px solid var(--border)",borderRadius:10,padding:"12px 13px",marginBottom:10},stageBlockHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:8},stageLetter:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",fontSize:13,fontWeight:800,flexShrink:0},stageName:{fontSize:13,fontWeight:700},stagePrompt:{fontSize:11.5,color:"var(--text-2)",marginTop:2,lineHeight:1.4},doneBadge:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10,marginLeft:"auto",flexShrink:0},noteList:{margin:"0 0 8px 0",padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6},noteItem:{display:"flex",alignItems:"flex-start",gap:8,fontSize:13,lineHeight:1.4},noteDot:{width:6,height:6,borderRadius:"50%",flexShrink:0,marginTop:5},checkBox:{width:18,height:18,borderRadius:5,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,marginTop:1,padding:0},checklistHint:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,marginTop:10,textAlign:"center"},noteText:{flex:1,color:"var(--text)"},noNotes:{fontSize:12,color:"var(--text-3)",fontStyle:"italic",marginBottom:8},noteAddRow:{display:"flex",gap:6},noteInput:{flex:1,border:"1px solid var(--border)",borderRadius:7,padding:"7px 10px",fontSize:13,fontFamily:"inherit",outline:"none"},noteAddBtn:{width:32,height:32,border:"none",borderRadius:7,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},advanceBtn:{display:"flex",alignItems:"center",gap:8,border:"none",color:"#fff",padding:"10px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit",width:"100%",justifyContent:"center"},wisdomDone:{display:"flex",alignItems:"center",gap:8,justifyContent:"center",fontSize:13.5,fontWeight:700,color:"#4C9A6B",padding:12,background:"rgba(76,154,107,0.08)",borderRadius:10,marginTop:4},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},input:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box",marginBottom:8},select:{border:"1px solid var(--border)",borderRadius:8,padding:"8px 10px",fontSize:12.5,fontFamily:"inherit",flex:1},addRow:{display:"flex",gap:8,marginBottom:8},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},empty:{fontSize:13,color:"var(--text-3)",padding:"32px 12px",textAlign:"center"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.55)",zIndex:50,display:"grid",placeItems:"center"},celebBox:{background:"var(--surface)",borderRadius:20,padding:"40px 32px",textAlign:"center",maxWidth:320,boxShadow:"0 8px 40px rgba(0,0,0,0.18)"},celebEmoji:{fontSize:52,marginBottom:12},celebTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:8},celebSub:{fontSize:13.5,color:"var(--text-2)",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:"#4C9A6B",color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},bi=[{id:"aarti",title:"Aarti",html:`<h1>॥ गणपतीची आरती ॥</h1><br/>
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
      </div>`}];function sy(){const[t,e]=p.useState(()=>window.innerWidth<720);return p.useEffect(()=>{const r=()=>e(window.innerWidth<720);return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),t}const ly=t=>new Promise((e,r)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:l,height:a}=i;l>a&&l>1400?(a=a*1400/l,l=1400):a>1400&&(l=l*1400/a,a=1400);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(i,0,0,l,a),e(d.toDataURL("image/jpeg",.85))},i.onerror=r,i.src=o.result},o.onerror=r,o.readAsDataURL(t)});function ec({base:t,count:e,images:r}){const o=r&&r.length?r:null,i=o?o.length:e,[s,l]=p.useState(0);if(!i)return null;const a=s%i,d=o?o[a]:`${t}${a+1}.jpg`;return n.jsxs("div",{style:{maxWidth:560,margin:"0 auto"},children:[n.jsx("div",{style:lt.carouselFrame,children:n.jsx("img",{src:d,alt:`Page ${a+1}`,style:lt.carouselImg})}),n.jsxs("div",{style:lt.carouselNav,children:[n.jsxs("button",{onClick:()=>l(g=>(g-1+i)%i),style:lt.carouselBtn,children:[n.jsx($n,{size:16})," Prev"]}),n.jsxs("span",{style:lt.carouselCount,children:[o?"":"Adhyay ",a+1," / ",i]}),n.jsxs("button",{onClick:()=>l(g=>(g+1)%i),style:lt.carouselBtn,children:["Next ",n.jsx(Zr,{size:16})]})]})]})}function ay(){const t=sy(),[e,r]=p.useState(!1),[o,i]=p.useState([]),[s,l]=p.useState("dss"),[a,d]=p.useState(!1),[g,f]=p.useState({title:"",type:"text",content:"",images:[]}),[y,m]=p.useState([]),[S,k]=p.useState(null),[C,T]=p.useState(!1),b=p.useRef(!1),c=p.useCallback(async()=>{try{const[M,G,j]=await Promise.all([H.getDecks(),H.getSetting("spiritual_order"),H.getSetting("spiritual_default")]);if(i(M),Array.isArray(G==null?void 0:G.value)&&m(G.value),j!=null&&j.value&&k(j.value),!b.current){b.current=!0;const Y=new Set([...bi.map(h=>h.id),...M.map(h=>`deck-${h.id}`)]);j!=null&&j.value&&Y.has(j.value)&&l(j.value)}}catch{}},[]);p.useEffect(()=>{c()},[c]);const u=[...bi.map(M=>({id:M.id,title:M.title})),...o.map(M=>({id:`deck-${M.id}`,title:M.title}))],x=(()=>{if(!y.length)return u;const M=new Map(u.map(j=>[j.id,j])),G=[];return y.forEach(j=>{M.has(j)&&(G.push(M.get(j)),M.delete(j))}),M.forEach(j=>G.push(j)),G})(),v=(M,G)=>{const j=x.map(h=>h.id),Y=M+G;Y<0||Y>=j.length||([j[M],j[Y]]=[j[Y],j[M]],m(j),H.setSetting("spiritual_order",j).catch(()=>{}))},z=M=>{k(M),H.setSetting("spiritual_default",M).catch(()=>{})},_=s.startsWith("deck-")?Number(s.slice(5)):null,L=_!=null?o.find(M=>M.id===_):null,F=L?null:bi.find(M=>M.id===s)||(_==null?bi[0]:null),P=a?"New deck":L?L.title:(F==null?void 0:F.title)||"",I=M=>{l(M),d(!1),t&&r(!1)},D=()=>{d(!0),f({title:"",type:"text",content:"",images:[]}),t&&r(!1)},w=async M=>{const G=Array.from(M.target.files||[]),j=[];for(const Y of G)try{j.push(await ly(Y))}catch{}f(Y=>({...Y,images:[...Y.images,...j]})),M.target.value=""},O=M=>f(G=>({...G,images:G.images.filter((j,Y)=>Y!==M)})),st=g.title.trim()&&(g.type==="text"?g.content.trim():g.images.length>0),q=async()=>{if(!st)return;const M=await H.createDeck({title:g.title.trim(),type:g.type,content:g.type==="text"?g.content:"",images:g.type==="images"?g.images:[]});d(!1),await c(),l(`deck-${M.id}`)},R=async M=>{await H.deleteDeck(M),s===`deck-${M}`&&l("dss"),c()},A={...lt.sidebar,...t?lt.sidebarOverlay:{},...t&&!e?lt.sidebarHidden:{}};return n.jsxs("div",{style:lt.shell,children:[n.jsx("style",{children:dy}),t&&e&&n.jsx("div",{style:lt.backdrop,onClick:()=>r(!1)}),n.jsxs("aside",{style:A,children:[n.jsxs("div",{style:lt.sideHead,children:[n.jsx("div",{style:lt.brand,children:"Anvil · Spiritual"}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:2},children:[n.jsx("button",{onClick:()=>T(M=>!M),style:lt.iconBtn,title:"Rearrange & set default",children:C?n.jsx(jt,{size:16}):n.jsx(me,{size:15})}),t&&n.jsx("button",{onClick:()=>r(!1),style:lt.iconBtn,children:n.jsx(vt,{size:17})})]})]}),C&&n.jsxs("div",{style:lt.editHint,children:["Arrows reorder · ",n.jsx(ns,{size:11,style:{verticalAlign:"-1px"}})," sets what opens by default"]}),n.jsxs("div",{style:lt.sideScroll,children:[x.map((M,G)=>{const j=M.id===s&&!a,Y=S===M.id;return n.jsxs("div",{style:lt.sideRow,children:[n.jsxs("button",{onClick:()=>I(M.id),style:{...lt.sideItem,flex:1,...j?lt.sideItemOn:{}},children:[M.title,Y&&n.jsx("span",{style:lt.defStar,title:"Opens by default",children:" ★"})]}),C&&n.jsxs("div",{style:lt.editControls,children:[n.jsx("button",{onClick:()=>z(M.id),title:"Set as default",style:{...lt.miniBtn,...Y?{color:"#8268B0"}:{}},children:n.jsx(ns,{size:13})}),n.jsx("button",{onClick:()=>v(G,-1),disabled:G===0,style:{...lt.miniBtn,opacity:G===0?.3:1},children:n.jsx(Hb,{size:13})}),n.jsx("button",{onClick:()=>v(G,1),disabled:G===x.length-1,style:{...lt.miniBtn,opacity:G===x.length-1?.3:1},children:n.jsx(ws,{size:13})})]})]},M.id)}),n.jsxs("button",{onClick:D,style:{...lt.newDeckBtn,...a?lt.sideItemOn:{}},children:[n.jsx(ne,{size:14})," New deck"]})]})]}),n.jsxs("main",{style:lt.main,children:[t&&n.jsxs("button",{onClick:()=>r(!0),style:lt.hamburger,children:[n.jsx(hd,{size:17}),n.jsx("span",{style:lt.hamburgerLabel,children:P})]}),a?n.jsxs("div",{style:lt.contentWrap,children:[n.jsx("div",{style:lt.formTitle,children:"Create a deck"}),n.jsx("input",{placeholder:"Deck title (e.g. Vishnu Sahasranamam)",value:g.title,onChange:M=>f({...g,title:M.target.value}),style:lt.input}),n.jsxs("div",{style:lt.typeRow,children:[n.jsxs("button",{onClick:()=>f({...g,type:"text"}),style:{...lt.typeBtn,...g.type==="text"?lt.typeOn:{}},children:[n.jsx(fd,{size:15})," Text"]}),n.jsxs("button",{onClick:()=>f({...g,type:"images"}),style:{...lt.typeBtn,...g.type==="images"?lt.typeOn:{}},children:[n.jsx(ih,{size:15})," Images"]})]}),g.type==="text"?n.jsx("textarea",{placeholder:"Paste or write the text (verses, chant, reflection)…",value:g.content,onChange:M=>f({...g,content:M.target.value}),style:lt.textarea}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:lt.imgGrid,children:[g.images.map((M,G)=>n.jsxs("div",{style:lt.imgThumbWrap,children:[n.jsx("img",{src:M,alt:"",style:lt.imgThumb}),n.jsx("button",{onClick:()=>O(G),style:lt.imgDel,children:n.jsx(vt,{size:12})})]},G)),n.jsxs("label",{style:lt.imgAdd,children:[n.jsx(js,{size:20}),n.jsx("span",{style:{fontSize:11},children:"Add images"}),n.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:w,style:{display:"none"}})]})]}),n.jsx("div",{style:lt.hint,children:"Images show as a swipeable carousel, in the order added."})]}),n.jsxs("div",{style:lt.formActions,children:[n.jsxs("button",{onClick:()=>d(!1),style:lt.cancelBtn,children:[n.jsx(vt,{size:14})," Cancel"]}),n.jsxs("button",{onClick:q,disabled:!st,style:{...lt.saveBtn,...st?{}:lt.saveDisabled},children:[n.jsx(jt,{size:15})," Create deck"]})]})]}):L?n.jsxs("div",{style:lt.contentWrap,children:[n.jsxs("div",{style:lt.deckHead,children:[n.jsx("h2",{style:lt.deckTitle,children:L.title}),n.jsx("button",{onClick:()=>R(L.id),style:lt.deckDel,title:"Delete deck",children:n.jsx(xh,{size:15})})]}),L.type==="images"?n.jsx(ec,{images:L.images}):n.jsx("div",{style:lt.deckText,children:L.content})]}):n.jsxs("div",{style:lt.contentWrap,children:[(F==null?void 0:F.youtube)&&n.jsx("div",{style:lt.videoFrame,children:n.jsx("iframe",{src:`https://www.youtube.com/embed/${F.youtube}`,title:F.title,style:lt.video,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0},F.youtube)}),F!=null&&F.carousel?n.jsx(ec,{base:F.imageBase,count:F.carousel}):n.jsx("div",{className:"spiritual-content",dangerouslySetInnerHTML:{__html:(F==null?void 0:F.html)||""}})]})]})]})}const dy=`
.spiritual-content { font-family: 'Inter', system-ui, sans-serif; color: var(--text); line-height: 1.9; font-size: 16px; text-align: center; }
.spiritual-content h1 { font-family: 'Fraunces', Georgia, serif; font-size: 24px; color: #8268B0; margin: 8px 0 18px; letter-spacing: -0.01em; }
.spiritual-content h2 { font-family: 'Fraunces', Georgia, serif; font-size: 18px; color: #7A5EA8; margin: 20px 0 8px; }
.spiritual-content h3 { font-size: 15px; color: var(--text-3); text-transform: uppercase; letter-spacing: 0.06em; margin: 18px 0 6px; }
.spiritual-content b { color: #8268B0; }
.spiritual-content div { text-align: center; }
`,lt={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:240,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.15)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.35)",zIndex:20},sideHead:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"18px 14px 12px"},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700},sideScroll:{flex:1,overflowY:"auto",padding:"0 8px 16px"},sideItem:{display:"block",width:"100%",border:"none",background:"none",padding:"10px 12px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13.5,fontWeight:500,color:"var(--text-2)",textAlign:"left",marginBottom:2},sideItemOn:{background:"rgba(130,104,176,0.12)",color:"#8268B0",fontWeight:700},sideRow:{display:"flex",alignItems:"center",gap:2},editControls:{display:"flex",alignItems:"center",gap:1,flexShrink:0},miniBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",borderRadius:5},defStar:{color:"#C9A227",fontWeight:700},editHint:{fontSize:10.5,color:"var(--text-3)",padding:"0 14px 8px",lineHeight:1.4},newDeckBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",padding:"9px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:600,color:"var(--text-2)",marginTop:6},main:{flex:1,padding:"26px 22px",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:220},contentWrap:{background:"var(--surface)",borderRadius:14,padding:"26px 28px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",maxWidth:760,margin:"0 auto"},videoFrame:{position:"relative",width:"100%",maxWidth:600,margin:"0 auto 22px",aspectRatio:"16 / 9",borderRadius:12,overflow:"hidden",background:"#000"},video:{position:"absolute",inset:0,width:"100%",height:"100%",border:"none"},carouselFrame:{background:"var(--surface-2)",borderRadius:12,padding:8,border:"1px solid var(--border)"},carouselImg:{width:"100%",borderRadius:8,display:"block"},carouselNav:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:14},carouselBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},carouselCount:{fontSize:13,fontWeight:700,color:"#8268B0",fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"none",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,color:"var(--text-2)"},deckHead:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,marginBottom:16,borderBottom:"1px solid var(--border)",paddingBottom:12},deckTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",margin:0,color:"#8268B0"},deckDel:{border:"1px solid var(--border)",background:"var(--surface)",color:"#C2536B",cursor:"pointer",display:"grid",placeItems:"center",padding:7,borderRadius:8,flexShrink:0},deckText:{fontSize:16,lineHeight:1.9,whiteSpace:"pre-wrap",color:"var(--text)",textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},formTitle:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:14},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none"},typeRow:{display:"flex",gap:8,marginTop:12},typeBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},typeOn:{background:"#8268B0",color:"#fff",borderColor:"#8268B0"},textarea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"12px",fontSize:15,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:200,resize:"vertical",lineHeight:1.7,marginTop:12},imgGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(90px, 1fr))",gap:8,marginTop:12},imgThumbWrap:{position:"relative",aspectRatio:"1",borderRadius:8,overflow:"hidden",border:"1px solid var(--border)"},imgThumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},imgDel:{position:"absolute",top:3,right:3,border:"none",background:"rgba(0,0,0,0.6)",color:"#fff",borderRadius:"50%",width:18,height:18,cursor:"pointer",display:"grid",placeItems:"center",padding:0},imgAdd:{aspectRatio:"1",border:"1px dashed var(--border)",borderRadius:8,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:4,cursor:"pointer",color:"var(--text-3)"},hint:{fontSize:11.5,color:"var(--text-3)",marginTop:8},formActions:{display:"flex",gap:8,marginTop:16},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:"#8268B0",color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"}},Qe={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},rc=Object.keys(Qe),gy=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],cy=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],uy=()=>{const t=new Date;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`},by=(t,e)=>`${cy[e-1]} ${t}`,py=(t,e)=>{const r=new Date(t,e,0).getDate();return Array.from({length:r},(o,i)=>`${t}-${String(e).padStart(2,"0")}-${String(i+1).padStart(2,"0")}`)},my=(t,e)=>{const r=new Date(t,e-1,1).getDay();return r===0?6:r-1};function fy(){const t=uy(),[e,r]=p.useState(new Date().getFullYear()),[o,i]=p.useState(new Date().getMonth()+1),[s,l]=p.useState([]),[a,d]=p.useState([]),[g,f]=p.useState({}),[y,m]=p.useState(null),[S,k]=p.useState(!1),[C,T]=p.useState(!1),[b,c]=p.useState({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:t}),[u,x]=p.useState(null),v=p.useCallback(async()=>{const[h,$,dt]=await Promise.all([H.getTopics(),H.getDueToday(),H.getCalendar(e,o)]);l(h),d($),f(dt)},[e,o]);p.useEffect(()=>{v()},[v]);const z=async h=>{await H.toggleReviewDone(h),v()},_=async()=>{const h=b.intervals.split(",").map($=>parseInt($.trim(),10)).filter($=>!isNaN($));!b.topic.trim()||h.length===0||(await H.createTopic({pillar:b.pillar,topic:b.topic.trim(),intervals:h,learned_date:b.learned_date||t}),c({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:t}),T(!1),v())},{deleteItem:L,toasts:F,handleUndo:P,handleDismiss:I}=tn(H.deleteTopic,H.restoreTopic,v),D=(h,$)=>L(h,$),w=h=>x({id:h.id,topic:h.topic,pillar:h.pillar,intervals:(h.intervals||[]).join(", "),learned_date:h.learned_date}),O=async()=>{if(!u)return;const h=u.intervals.split(",").map($=>parseInt($.trim(),10)).filter($=>!isNaN($)&&$>=0);!u.topic.trim()||h.length===0||(await H.updateTopic(u.id,{topic:u.topic.trim(),pillar:u.pillar,learned_date:u.learned_date,intervals:h}),x(null),v())},st=()=>{o===1?(r(h=>h-1),i(12)):i(h=>h-1),m(null)},q=()=>{o===12?(r(h=>h+1),i(1)):i(h=>h+1),m(null)},R=s.filter(h=>!h.cemented),A=s.filter(h=>h.cemented),M=py(e,o),G=my(e,o),j=p.useMemo(()=>{const h={};return s.forEach($=>$.reviews.forEach(dt=>{dt.done||(h[dt.due_date]=h[dt.due_date]||[]).push({topic:$.topic,pillar:$.pillar,stage:dt.stage})})),h},[s]),Y=y?s.flatMap(h=>h.reviews.filter($=>$.due_date===y).map($=>({...$,topic:h.topic,pillar:h.pillar,total:h.reviews.length}))):[];return n.jsxs("div",{style:Z.page,children:[n.jsxs("div",{style:Z.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:Z.eyebrow,children:"Anvil · Revision"}),n.jsx("h1",{style:Z.h1,children:"Spaced Repetition"})]}),n.jsxs("button",{onClick:()=>T(!0),style:Z.addBtn,children:[n.jsx(ne,{size:15})," Add topic"]})]}),C&&n.jsxs("div",{style:Z.addBox,children:[n.jsx("input",{autoFocus:!0,placeholder:"What did you learn?",value:b.topic,onChange:h=>c($=>({...$,topic:h.target.value})),onKeyDown:h=>h.key==="Enter"&&_(),style:Z.input}),n.jsxs("div",{style:Z.addRow,children:[n.jsx("select",{value:b.pillar,onChange:h=>c($=>({...$,pillar:h.target.value})),style:Z.select,children:rc.map(h=>n.jsx("option",{children:h},h))}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[n.jsx("label",{style:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},children:"Learned on"}),n.jsx("input",{type:"date",value:b.learned_date,onChange:h=>c($=>({...$,learned_date:h.target.value})),style:{...Z.select,fontSize:13}})]}),n.jsx("div",{style:{flex:1,minWidth:0},children:n.jsx("input",{value:b.intervals,onChange:h=>c($=>({...$,intervals:h.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:Z.input})})]}),n.jsxs("div",{style:Z.addRow,children:[n.jsxs("button",{onClick:_,style:Z.saveBtn,children:[n.jsx(jt,{size:14})," Save"]}),n.jsxs("button",{onClick:()=>T(!1),style:Z.cancelBtn,children:[n.jsx(vt,{size:14})," Cancel"]})]})]}),a.length>0&&n.jsxs("div",{style:Z.section,children:[n.jsxs("div",{style:Z.sectionTitle,children:[n.jsx(Jb,{size:15,color:"#C2536B"}),"Due Today",n.jsx("span",{style:Z.badge,children:a.length})]}),a.map(h=>{var dt,et;const $=((dt=Qe[h.pillar])==null?void 0:dt.dot)||"#9A968C";return n.jsxs("div",{style:{...Z.reviewCard,borderLeft:`3px solid ${$}`,...h.is_missed?{opacity:.85}:{}},children:[n.jsx("button",{onClick:()=>z(h.review_id),style:{...Z.checkbox,...h.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:h.done&&n.jsx(jt,{size:12,color:"#fff",strokeWidth:3})}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("div",{style:Z.reviewTopic,children:h.topic}),n.jsxs("div",{style:Z.reviewMeta,children:[n.jsxs("span",{style:{...Z.stageTag,background:((et=Qe[h.pillar])==null?void 0:et.soft)||"rgba(0,0,0,0.05)",color:$},children:["Review ",h.stage,"/",h.total_stages]}),h.is_missed&&n.jsxs("span",{style:Z.missedTag,children:["missed · ",h.due_date]})]})]})]},h.review_id)})]}),n.jsxs("div",{style:Z.section,children:[n.jsxs("div",{style:Z.sectionTitle,children:["Active Topics ",n.jsx("span",{style:Z.badge,children:R.length})]}),R.length===0&&n.jsx("div",{style:Z.empty,children:"No active topics. Add something you learned today."}),R.map(h=>{var mt,Tt;const $=((mt=Qe[h.pillar])==null?void 0:mt.dot)||"#9A968C",dt=((Tt=Qe[h.pillar])==null?void 0:Tt.soft)||"rgba(0,0,0,0.05)",et=h.reviews.filter(ft=>ft.done).length;return(u==null?void 0:u.id)===h.id?n.jsxs("div",{style:Z.addBox,children:[n.jsx("input",{autoFocus:!0,value:u.topic,onChange:ft=>x(It=>({...It,topic:ft.target.value})),onKeyDown:ft=>ft.key==="Enter"&&O(),placeholder:"Topic",style:Z.input}),n.jsxs("div",{style:Z.addRow,children:[n.jsx("select",{value:u.pillar,onChange:ft=>x(It=>({...It,pillar:ft.target.value})),style:Z.select,children:rc.map(ft=>n.jsx("option",{children:ft},ft))}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[n.jsx("label",{style:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},children:"Learned on"}),n.jsx("input",{type:"date",value:u.learned_date,onChange:ft=>x(It=>({...It,learned_date:ft.target.value})),style:{...Z.select,fontSize:13}})]}),n.jsx("div",{style:{flex:1,minWidth:0},children:n.jsx("input",{value:u.intervals,onChange:ft=>x(It=>({...It,intervals:ft.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:Z.input})})]}),n.jsx("div",{style:Z.editHint,children:"Changing the date or intervals reschedules the reviews (completed steps are kept where they still apply)."}),n.jsxs("div",{style:Z.addRow,children:[n.jsxs("button",{onClick:O,style:Z.saveBtn,children:[n.jsx(jt,{size:14})," Save plan"]}),n.jsxs("button",{onClick:()=>x(null),style:Z.cancelBtn,children:[n.jsx(vt,{size:14})," Cancel"]})]})]},h.id):n.jsxs("div",{style:Z.topicCard,children:[n.jsxs("div",{style:Z.topicHead,children:[n.jsx("span",{style:{...Z.dot,background:$}}),n.jsx("span",{style:Z.topicName,children:h.topic}),n.jsx("span",{style:Z.topicPillar,children:h.pillar}),n.jsxs("span",{style:Z.topicProgress,children:[et,"/",h.reviews.length," done"]}),n.jsx("button",{onClick:()=>w(h),style:Z.ghostBtn,title:"Edit plan",children:n.jsx(me,{size:12})}),n.jsx("button",{onClick:()=>D(h.id,h.topic),style:Z.ghostBtn,title:"Delete",children:n.jsx(vt,{size:13})})]}),n.jsxs("div",{style:Z.reviewDots,children:[h.reviews.map(ft=>{ft.due_date<t;const It=ft.due_date===t;return n.jsx("button",{onClick:()=>z(ft.id),title:`Review ${ft.stage} · ${ft.due_date}${ft.done?" · Done":""}`,style:{...Z.reviewDot,background:ft.done?$:It?dt:"var(--hover)",border:`2px solid ${ft.done||It?$:"var(--border)"}`,color:ft.done?"#fff":$},children:ft.stage},ft.id)}),n.jsxs("span",{style:Z.learnedDate,children:["Learned ",h.learned_date]})]})]},h.id)})]}),A.length>0&&n.jsxs("div",{style:Z.section,children:[n.jsxs("button",{onClick:()=>k(h=>!h),style:Z.cementedToggle,children:[S?n.jsx(ws,{size:15}):n.jsx(Zr,{size:15}),n.jsx(Kr,{size:14,color:"#C9A227"}),"Cemented",n.jsx("span",{style:{...Z.badge,background:"rgba(201,162,39,0.12)",color:"#8A6E1A"},children:A.length})]}),S&&A.map(h=>{var dt;const $=((dt=Qe[h.pillar])==null?void 0:dt.dot)||"#9A968C";return n.jsx("div",{style:{...Z.topicCard,opacity:.75},children:n.jsxs("div",{style:Z.topicHead,children:[n.jsx("span",{style:{...Z.dot,background:$}}),n.jsx("span",{style:Z.topicName,children:h.topic}),n.jsx("span",{style:Z.topicPillar,children:h.pillar}),n.jsx(Kr,{size:13,color:"#C9A227",style:{marginLeft:"auto"}})]})},h.id)})]}),n.jsxs("div",{style:Z.calCard,children:[n.jsxs("div",{style:Z.calHead,children:[n.jsx("button",{onClick:st,style:Z.calNav,children:"‹"}),n.jsxs("div",{style:Z.calTitle,children:[by(e,o)," · Review Calendar"]}),n.jsx("button",{onClick:q,style:Z.calNav,children:"›"})]}),n.jsx("div",{style:Z.calDow,children:gy.map(h=>n.jsx("div",{style:Z.calDowCell,children:h},h))}),n.jsxs("div",{style:Z.calGrid,children:[Array.from({length:G}).map((h,$)=>n.jsx("div",{},`p${$}`)),M.map((h,$)=>{const dt=j[h]||[],et=h===t,mt=h===y,Tt=h<t,ft=mt?"#fff":et?"var(--text)":Tt?"var(--text-2)":"var(--text-3)";return n.jsxs("button",{onClick:()=>m(mt?null:h),style:{...Z.calDay,background:mt?"var(--accent-strong)":et?"var(--hover)":"var(--surface)",borderColor:et||mt?"var(--accent-strong)":"var(--border)"},children:[n.jsx("span",{style:{...Z.calDayNum,color:ft,fontWeight:et||mt?700:600},children:$+1}),dt.slice(0,2).map((It,Q)=>{var ut;return n.jsxs("span",{title:It.topic,style:{...Z.calItem,color:mt?"#fff":((ut=Qe[It.pillar])==null?void 0:ut.dot)||"var(--text-2)"},children:[Q+1,". ",It.topic]},Q)}),dt.length>2&&n.jsxs("span",{style:{...Z.calMore,color:mt?"#fff":"var(--text-3)"},children:["+",dt.length-2," more"]})]},h)})]}),y&&n.jsxs("div",{style:Z.dayDetail,children:[n.jsxs("div",{style:Z.dayDetailTitle,children:["Reviews for ",y]}),Y.length===0?n.jsx("div",{style:Z.empty,children:"No reviews scheduled for this day."}):Y.map((h,$)=>{var et,mt;const dt=((et=Qe[h.pillar])==null?void 0:et.dot)||"#9A968C";return n.jsxs("div",{style:{...Z.reviewCard,borderLeft:`3px solid ${dt}`},children:[n.jsx("button",{onClick:()=>z(h.id),style:{...Z.checkbox,...h.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:h.done&&n.jsx(jt,{size:12,color:"#fff",strokeWidth:3})}),n.jsxs("div",{children:[n.jsxs("div",{style:Z.reviewTopic,children:[$+1,". ",h.topic]}),n.jsxs("span",{style:{...Z.stageTag,background:((mt=Qe[h.pillar])==null?void 0:mt.soft)||"rgba(0,0,0,0.05)",color:dt},children:["Review ",h.stage,"/",h.total]})]})]},h.id)})]})]}),n.jsx(en,{toasts:F,onUndo:P,onDismiss:I})]})}const Z={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},addBox:{background:"var(--surface)",borderRadius:12,padding:16,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column",gap:10},addRow:{display:"flex",gap:8,alignItems:"center"},editHint:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.4},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",minWidth:0},select:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 10px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},section:{marginBottom:20},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10},badge:{fontSize:11,fontWeight:700,background:"var(--hover)",color:"var(--text-2)",borderRadius:10,padding:"1px 7px"},reviewCard:{display:"flex",alignItems:"center",gap:12,background:"var(--surface)",borderRadius:10,padding:"12px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},checkbox:{width:22,height:22,borderRadius:6,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,padding:0},reviewTopic:{fontSize:13.5,fontWeight:600,marginBottom:4},reviewMeta:{display:"flex",alignItems:"center",gap:8},stageTag:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10},missedTag:{fontSize:11,color:"#C2536B",fontWeight:600},topicCard:{background:"var(--surface)",borderRadius:12,padding:"13px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},topicHead:{display:"flex",alignItems:"center",gap:8,marginBottom:10},dot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},topicName:{fontSize:14,fontWeight:600,flex:1},topicPillar:{fontSize:11,color:"var(--text-3)",fontWeight:500},topicProgress:{fontSize:11,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",padding:"2px 7px",borderRadius:10},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},reviewDots:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"},reviewDot:{width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",fontSize:11,fontWeight:700,padding:0},learnedDate:{fontSize:11,color:"var(--text-3)",marginLeft:"auto"},cementedToggle:{display:"flex",alignItems:"center",gap:8,border:"none",background:"none",cursor:"pointer",fontSize:13,fontWeight:700,color:"var(--text-2)",padding:"4px 0",fontFamily:"inherit",marginBottom:8},empty:{fontSize:13,color:"var(--text-3)",padding:"16px 0",textAlign:"center"},calCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calNav:{border:"none",background:"none",fontSize:20,cursor:"pointer",color:"var(--text-2)",padding:"0 6px",lineHeight:1},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4},calDay:{minHeight:62,border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,cursor:"pointer",fontFamily:"inherit",display:"flex",flexDirection:"column",alignItems:"stretch",justifyContent:"flex-start",gap:1,position:"relative",padding:"3px 4px",overflow:"hidden",textAlign:"left"},calDayNum:{fontSize:11,lineHeight:1.1,marginBottom:1},calItem:{fontSize:8.5,fontWeight:700,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",lineHeight:1.3,textAlign:"left"},calMore:{fontSize:8,fontWeight:700,opacity:.85,lineHeight:1.2},dayDetail:{marginTop:16,paddingTop:16,borderTop:"1px solid var(--border)"},dayDetailTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10}},pi=[{id:1,title:"Regular Habits",cards:[{id:1,text:"1. I always do everything I need to do, when I need to do it. "},{id:2,text:"2. I never argue or let my emotions work against me. "},{id:3,text:"3. I have a good memory. I easily and automatically remember any name or anything that is important to me. "},{id:4,text:"4. I eat only what I should. "},{id:5,text:"5. I am a good listener. I hear everything that is said. I am attentive, interested, and aware of everything that is going on around me. "},{id:6,text:"6. I have the courage to state my opinions. I take responsibility for myself and everything I say and do."},{id:7,text:"7. I never spend more than I earn. I am financially responsible, both for my present and for my future."},{id:8,text:"8. I set goals and I follow them. I set my sights, take the appropriate action, and achieve my goals."},{id:9,text:"9. I spend time with my family and my loved ones. I enjoy sharing their lives with mine and my life with theirs."}]},{id:2,title:"Motivational",cards:[{id:1,text:"1. I can do anything I believe I can do. I’ve got it and every day I get more of it. I have talent, skills, and ability"},{id:2,text:"2. I set goals and I reach them. I know what I want out of life. I go after it and I get it. "},{id:3,text:"3. People like me, and I feel good about myself. I have a sense of pride in whoa am and I believe in myself. Nothing seems to stop me. I have a lot of determination. "},{id:4,text:"4. I turn problems into advantages. I find possibilities in things that other people never give a chance."},{id:5,text:"5. I have a lot of energy––I am very alive. I enjoy life and I can tell it and so can others"},{id:6,text:"6. I keep myself up, looking ahead, and liking it. I know that I can accomplish anything I choose, and I refuse to let anything negative hold me back or stand in my way. I am not afraid of anything or anyone. I have strength, power, conviction, and confidence. "},{id:7,text:"7. I like challenges and I meet them head on, face to face––today especially. I am on top of the world and I’m going for it. "},{id:8,text:"8. I have a clear picture in my mind of what I want. I can see it in front of me. "},{id:9,text:"9. I know what I want and I know how to get it. I know that it’s all up to me and I know I can do it. Roadblocks don’t bother me. They just mean that I am alive and running, and I’m not going to stand still for anything. "},{id:10,text:"10. I trust myself I’ve got what it takes––plenty of it––and I know how to use it. "},{id:11,text:"11. Today, more than ever. Today I am unstoppable. I’ve got myself together and I’m getting more together every day. And today––look out world, here I come. "},{id:12,text:"12. Limitations? I don’t even recognize them as limitations. There is no challenge I can’t conquer; there is no wall I can’t climb over. "},{id:13,text:"13. There is no problem I can’t defeat or turn around and make it work for me. I stand tall. I am honest and sincere. I like to deal with people and they like me. "},{id:14,text:"14. I think well; I think clearly. I am organized; I am in control of myself, and everything about me. I call my shots and no one has to call them for me. I never blame anyone else for the circumstances of my life. "},{id:15,text:"15. I accept my failings and move past them as easily as I accept the rewards for my victories. I never demand perfection of myself, but I expect the very best of what I have to give––and that’s what I get. I never give myself excuses. "},{id:16,text:"16. I get things done on time and in the right way. Today I have the inner strength to do more than ever. I am an exceptional human being. "},{id:17,text:"17. My goals and my incredible belief in myself turn my goals into reality. I have the power to live my dreams."},{id:18,text:"18.  I believe in them like I believe in myself. And that belief is so strong that there is nothing that diminishes my undefeatable spirit. "}]},{id:3,title:"Organized planning",cards:[{id:1,text:"1. I am organized and in control of my life. I am in control of myself, my thoughts, my time, my actions, and my future. "},{id:2,text:"2. I know what to do and when to do it, and I do everything I need to do, when I need to do it. "},{id:3,text:"3. I program my mind to make the maximum use of my time. I am in control of my time and how to use it. I like being organized, efficient, and on top of things."},{id:4,text:"4. Controlling my time keeps me that way. "},{id:5,text:"5. I never waste time––I always “plan” time. And because I plan my time, I always have time to do the things I choose to do. "},{id:6,text:"6. Each day I become more organized and in control of all areas of my life––at home, at work, in my mind and in my thoughts, in everything that I do. "},{id:7,text:"7. I am very well organized. Each night I make a list of things I need to do the next day. I set my priorities and I follow them. "},{id:8,text:"8. I am always on time. I am always right where I need to be, exactly when I need to be there. "},{id:9,text:"9. Being on time is easy for me and the more I control my time and the more organized I become, the easier it is. "},{id:10,text:"10. I am in control of my feelings, my emotions, my attitudes, and my needs. I control them; they do not control me. "},{id:11,text:"11. I have the winning vote in the outcome of my own actions. And I choose to live my life by choice, not chance. Therefore, I take the time to take control."},{id:12,text:"12. I have an organized and orderly mind. Because I think in an organized way, I conduct my life in an organized manner. "},{id:13,text:"13. I think in the most positive and productive way at all times and in all things. The way I think is the way I live––and I think “right.” "},{id:14,text:"14. I am the director of my destiny. I know where I am going and I know why I am going there. My earthly life is in my hands and in my control. "},{id:15,text:"15. I control my goals and the achievement of my goals. I organize my goals by writing each of them down, along with the steps I need to reach them. One of the reasons for my success is that my goals are clearly defined and organized."},{id:16,text:"16. I am in complete control of what I think and how I think. Therefore, I choose to think only those thoughts which help me and which are of genuine benefit to me."}]},{id:4,title:"Solving Problems",cards:[{id:1,text:"1. I’m good at solving problems. I like challenges and I meet them head on. "},{id:2,text:"2. Problems are my teachers. They help me to learn and grow. Without them, I would be going nowhere. With them, I am moving forward in the direction of my own goals. "},{id:3,text:"3. There is no problem which I cannot conquer. I am strong in mind, body, and spirit. My will, my strength, and my determination are always greater than any problem I face."},{id:4,text:"4. When I meet a new problem, I do not see the problem as my enemy. I know that finding the solution to the problem will move me forward in my own personal growth."},{id:5,text:"5. Because I know that problems are a key ingredient in my spiritual and mental education and preparation, I recognize that all problems are important to me. "},{id:6,text:"6. I do not fear problems, I solve them. I do not ignore problems, I confront them. I do not avoid problems, I conquer them. "},{id:7,text:"7. I know that every problem holds within itself the keys to its own solution. Therefore, the better I understand the problem, the clearer I am able to see its solution. "},{id:8,text:"8. Having problems is not a problem for me. I am confident, self-assured, positive, and determined. I always know that I am going to overcome any problem I encounter––and I always do. "},{id:9,text:"9. I am good at breaking large obstacles down into smaller pieces that are easier to handle. And I never make any problem appear to be larger than it actually is. "},{id:10,text:"10. I never worry. I turn “worry time” into positive, constructive, “solution time.” I keep my mind alert and open to all solutions—and solutions come quickly and easily to me. "},{id:11,text:"11. I have learned to recognize that many problems carry with them benefits and potential opportunities which would not have presented themselves had the problem not occurred in the first place. "},{id:12,text:"12. I do not seek to live a life which is free from all problems. Instead, I choose to live a life of finding solutions and enjoying the benefits which those solutions create."},{id:13,text:"13. Challenge, conquer, solution, and win are words which I live by daily. Challenges are opportunities. Conquering them is the inevitable outcome. "},{id:14,text:"14. “Solutions” are the stepping stones to my success, and “Winning” is my way of life."}]},{id:5,title:"Self Esteem",cards:[{id:1,text:"1. I really am very special. I like who I am and I feel good about myself. "},{id:2,text:"2. Although I always work to improve myself and I get better every day, I like who I am today. And tomorrow, when I’m even better, I’ll like myself then, too. "},{id:3,text:"3. It’s true that there really is no one else like me in the entire world. There never was another me before, and there will never be another me again. "},{id:4,text:"4. I am unique––from the top of my head to the bottom of my feet. In some ways I may look and act and sound like some others––but I am not them. I am me."},{id:5,text:"5. I wanted to be somebody––and now I know I am I would rather be me than anyone else in the world. "},{id:6,text:"6. I like how I feel and I like how I think and I like how I do things. I approve of me and I approve of who I am."},{id:7,text:"7. I have many beautiful qualities about me. I have talents and skills and abilities. I even have talents that I don’t even know about yet. And I am discovering new talents inside myself all the time. "},{id:8,text:"8. I am positive. I am confident. I radiate good things. If you look closely, you can even see a glow around me."},{id:9,text:"9. I am full of life. I like life and I’m glad to be alive. I am a very special person, living at a very special time. "},{id:10,text:"10. I am intelligent. My mind is quick and alert and clever and fun. I think good thoughts, and my mind makes things work right for me. "},{id:11,text:"11. I have a lot of energy and enthusiasm and vitality. I am exciting and I really enjoy being me. "},{id:12,text:"12. I like to be around other people and other people like to be around me. People like to hear what I have to say and know what I have to think. "},{id:13,text:"13. I smile a lot. I am happy on the inside and I am happy on the outside. "},{id:14,text:"14. I am interested in many things. I appreciate all the blessings I have, and the things that I learn, and all the things I will learn today and tomorrow and forever––just as long as I am. "},{id:15,text:"15. I am warm, sincere, honest, and genuine. I am all of these things and more. And all of these things are me. I like who I am, and I’m glad to be me."}]},{id:6,title:"Self-Responsibility",cards:[{id:1,text:"1. I take full responsibility for everything about me––even the thoughts that I think. I am in control of the vast resources of my own mind."},{id:2,text:"2. I alone am responsible for what I do and what I tell myself about me. No one can share this responsibility with me. "},{id:3,text:"3. I also allow others to accept their responsibilities far themselves and I do not try to accept their responsibilities for them. "},{id:4,text:"4. I enjoy being responsible. It puts me in charge of being me––and that’s a challenge I enjoy. "},{id:5,text:"5. I allow no one else, at any time, to assume control or responsibility over my life or over anything that I do. My responsibility to others is an extension of my own responsibility to myself. "},{id:6,text:"6. I choose to leave nothing about me up to chance. When it comes to me––and anything in my life––I choose to CHOOSE. "},{id:7,text:"7. My choices are mine alone to make for myself. I do not, at any time, allow anyone else to make my choices for me. And I accept full responsibility for every choice and decision I make. "},{id:8,text:"8. I always meet all of the obligations which I accept. And I accept no obligations which I will not meet. "},{id:9,text:"9. I am trustworthy. I can be counted on. I have accepted winning responsibility for myself––and I always live up to the responsibilities I accept. "},{id:10,text:"10. There is no they on whom I lay the blame, or with whom I share my own personal responsibilities. I have learned the great secret of mastering my own destiny. I have learned that “they” is “me.” "},{id:11,text:"11. I have no need to make excuses and no one needs to carry my responsibility for me. I gladly carry my own weight––and I carry it well. "},{id:12,text:"12. Each day I acknowledge and accept the responsibility––not only for my own actions––but also for my emotions, my thoughts, and my attitude. "},{id:13,text:"13. I accept the responsibility for living my life in a way which creates my strengths, my happiness, my positive, healthy beliefs, and for my past, my present, and my future."}]},{id:7,title:"Freedom from worry",cards:[{id:1,text:"1. I never worry. Instead of worrying, I find solutions and I act on them. "},{id:2,text:"2. My mind is constantly in tune with the positive. It is bright, cheerful, enthusiastic, and full of good, positive thoughts and ideas. "},{id:3,text:"3. I am able to relax easily and comfortably in my body and in my mind. I am calm, confident, and self-assured. "},{id:4,text:"4. My mind is orderly and well-organized. I consciously choose what I think and I always choose those thoughts which are the most positive and beneficial for me. "},{id:5,text:"5. All of my thoughts create healthiness within me. My mind dwells only on those thoughts which create more harmony, balance, and well-being within me and in the world around me. "},{id:6,text:"6. I automatically, and always, think in a decisive and determined way. "},{id:7,text:"7. I am full of resolution and the absolute assurance of the best possible outcome in everything that I do. "},{id:8,text:"8. I choose to look at the world around me in the bright, healthy light of optimism and self-assurance. "},{id:9,text:"9. I do only those things which are best for me. I create the best within myself, I attract the best in others, and I find the best in the world around me. "},{id:10,text:"10. I willingly, and without fail, take care of the duties and obligations which I have accepted for myself."},{id:11,text:"11. I commit only to those responsibilities which I know I can fulfill. "},{id:12,text:"12. I focus the attention of my mind only on those things that I can do something about. If I cannot affect it or direct it––I accept it. "},{id:13,text:"13. I keep my mind too busy thinking good, healthy, positive, constructive, and productive thoughts to ever have any time for worry. "},{id:14,text:"14. I control the thoughts I choose. No thought, at any time, can dwell in my mind without my approval or permission. I never worry."}]},{id:8,title:"Eating Habits",cards:[{id:1,text:"1. I am in control of myself in every way––at all times and in all situations. "},{id:2,text:"2. Each time I sit down to eat I reaffirm my determination to achieve my goal. By eating right, and never giving in, I am reaching the weight I want. "},{id:3,text:"3. Whether eating in or eating out, I really enjoy eating less. "},{id:4,text:"4. I never feel the need to finish the food in front of me. I eat only what I should––and never one bite more. "},{id:5,text:"5. One way to weight-loss that’s easy and works, is less food on my plate, and less on my fork. "},{id:6,text:'6. By ordering less when I eat out, and by serving myself smaller portions at home, I keep myself aware of the importance of staying with my goal––each and every day. “Less on my plate means less on my waist."'},{id:7,text:"7. When I sit down to eat, at no time do I allow anyone else to influence, tempt, or discourage me in any negative way."},{id:8,text:"8. What I eat, and the goals I reach, are up to me. And I give no one the right to hinder or control my success."},{id:9,text:"9. Although others may benefit from my success, I. am achieving my weight-loss goals for my own personal reasons––for myself, my life, my future, and my own personal well-being."},{id:10,text:"10. I am never, at any time, tempted to take one bite more than I should. I am strong, I am capable of reaching my goal, and I am doing it."},{id:11,text:"11. Being in situations which put a lot of food in front of me is not a problem to me now. I simply say “No” to the food and “Yes” to my success."},{id:12,text:"12. I enjoy sitting down to eat. Each time I do I conquer my past, and I create a trimmer, happier, more self-confident future in front of me. "},{id:13,text:"13. When I sit down to eat, I do not need someone else to remind me of my goal, or to keep me from eating something I should not. I take full responsibility for myself, and no one else has to do it for me. "},{id:14,text:"14. Controlling my weight, and my appetite, is easy for me now. I enjoy smaller portions, smaller bites, and a slower, healthier, more relaxed way of eating. "},{id:15,text:"15. I have set my goal and I am staying with it. I have turned mealtime into “achievement time.”"}]}],nc=["#3A7CA5","#4C9A6B","#C2773B","#8268B0","#C2536B","#C9A227","#3A7CA5","#4C9A6B"],sl=t=>nc[t%nc.length],hy=t=>t+"1A",op="anvil_affirmation_favs",yy=()=>{try{return new Set(JSON.parse(localStorage.getItem(op)||"[]"))}catch{return new Set}};function vy(){const[t,e]=p.useState(0),[r,o]=p.useState(0),[i,s]=p.useState(yy);p.useEffect(()=>{localStorage.setItem(op,JSON.stringify([...i]))},[i]);const l=(T,b)=>`${T}#${b.id}`,a=t==="FAV"?pi.flatMap((T,b)=>T.cards.filter(c=>i.has(l(T.title,c))).map(c=>({...c,color:sl(b),title:T.title}))):pi[t].cards.map(T=>({...T,color:sl(t),title:pi[t].title})),d=a.length,g=Math.min(r,Math.max(0,d-1)),f=a[g],y=T=>{e(T),o(0)},m=p.useCallback(()=>o(T=>Math.max(0,T-1)),[]),S=p.useCallback(()=>o(T=>Math.min(d-1,T+1)),[d]);p.useEffect(()=>{const T=b=>{b.key==="ArrowLeft"&&m(),b.key==="ArrowRight"&&S()};return window.addEventListener("keydown",T),()=>window.removeEventListener("keydown",T)},[m,S]);const k=T=>s(b=>{const c=new Set(b);return c.has(T)?c.delete(T):c.add(T),c}),C=f?f.color:"#8268B0";return n.jsxs("div",{style:Dt.page,children:[n.jsxs("div",{style:Dt.head,children:[n.jsx("div",{style:Dt.eyebrow,children:"Anvil · Affirmations"}),n.jsx("h1",{style:Dt.h1,children:"Affirmations"}),n.jsx("div",{style:Dt.subhead,children:"One at a time — read it, mean it."})]}),n.jsxs("div",{style:Dt.filterBar,children:[pi.map((T,b)=>{const c=t===b,u=sl(b);return n.jsxs("button",{onClick:()=>y(b),style:{...Dt.chip,...c?{background:u,color:"#fff",borderColor:u}:{}},children:[n.jsx("span",{style:{...Dt.catDot,background:c?"#fff":u}})," ",T.title," ",n.jsx("span",{style:Dt.chipCount,children:T.cards.length})]},T.title)}),n.jsxs("button",{onClick:()=>y("FAV"),style:{...Dt.chip,...t==="FAV"?{background:"#C9A227",color:"#fff",borderColor:"#C9A227"}:{}},children:[n.jsx(Di,{size:12,fill:t==="FAV"?"#fff":"none"})," Favorites ",n.jsx("span",{style:Dt.chipCount,children:i.size})]})]}),d===0?n.jsxs("div",{style:Dt.empty,children:[n.jsx(Di,{size:22,color:"#C3BFB5"}),n.jsx("div",{children:"No favorites yet — tap the star on a card to save it here."})]}):n.jsxs("div",{style:Dt.viewer,children:[n.jsxs("div",{style:{...Dt.card,borderTop:`4px solid ${C}`},children:[n.jsx("div",{style:{...Dt.cardCat,color:C,background:hy(C)},children:f.title}),n.jsx("button",{onClick:()=>k(l(f.title,f)),style:{...Dt.favBtn,color:i.has(l(f.title,f))?"#C9A227":"#C3BFB5"},title:"Favorite",children:n.jsx(Di,{size:20,fill:i.has(l(f.title,f))?"#C9A227":"none"})}),n.jsx(Xb,{size:30,color:C,style:{opacity:.25}}),n.jsx("p",{style:Dt.cardText,children:f.text.trim()})]}),n.jsxs("div",{style:Dt.navRow,children:[n.jsxs("button",{onClick:m,disabled:g===0,style:{...Dt.navBtn,...g===0?Dt.navBtnDisabled:{}},children:[n.jsx($n,{size:18})," Back"]}),n.jsxs("span",{style:{...Dt.counter,color:C},children:[g+1," ",n.jsxs("span",{style:Dt.counterTotal,children:["/ ",d]})]}),n.jsxs("button",{onClick:S,disabled:g===d-1,style:{...Dt.navBtn,...g===d-1?Dt.navBtnDisabled:{}},children:["Next ",n.jsx(Zr,{size:18})]})]}),n.jsx("div",{style:Dt.dots,children:a.map((T,b)=>n.jsx("button",{onClick:()=>o(b),style:{...Dt.dot,...b===g?{background:C,transform:"scale(1.5)"}:{}},title:`${b+1}`},b))})]})]})}const Dt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},filterBar:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:22},chip:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipCount:{fontSize:11,fontWeight:700,opacity:.7},catDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},empty:{display:"flex",flexDirection:"column",alignItems:"center",gap:10,fontSize:13.5,color:"var(--text-3)",padding:"56px 12px",textAlign:"center",background:"var(--surface)",borderRadius:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},viewer:{display:"flex",flexDirection:"column",alignItems:"center"},card:{position:"relative",background:"var(--surface)",borderRadius:16,padding:"40px 32px 44px",boxShadow:"0 4px 20px rgba(0,0,0,0.07)",width:"100%",minHeight:240,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",boxSizing:"border-box"},cardCat:{position:"absolute",top:16,left:16,fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:12,textTransform:"uppercase",letterSpacing:"0.04em"},favBtn:{position:"absolute",top:14,right:14,border:"none",background:"none",cursor:"pointer",padding:4,display:"grid",placeItems:"center"},cardText:{fontSize:21,lineHeight:1.55,margin:"14px 0 0",fontWeight:500,color:"var(--text)",fontFamily:"'Fraunces',Georgia,serif",maxWidth:560},navRow:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",maxWidth:420,marginTop:22},navBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},counter:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},counterTotal:{fontSize:13,fontWeight:600,color:"var(--text-3)"},dots:{display:"flex",gap:6,flexWrap:"wrap",justifyContent:"center",marginTop:20,maxWidth:480},dot:{width:7,height:7,borderRadius:"50%",border:"none",background:"var(--border)",cursor:"pointer",padding:0,transition:"transform 0.12s"}},ze={financial:{label:"Financial",leaf:"#C9A227",shape:"round"},academic:{label:"Academic",leaf:"#3A7CA5",shape:"pine"},relationship:{label:"Relationship",leaf:"#C2536B",shape:"round"},spiritual:{label:"Spiritual",leaf:"#8268B0",shape:"tall"},health:{label:"Health",leaf:"#4C9A6B",shape:"round"}},Ao="health";function kd({species:t=Ao,progress:e=1,withered:r=!1,size:o=200}){const i=Math.max(0,Math.min(1,e)),s=ze[t]||ze[Ao],l=r?"#8A7B63":"#7A5A3C",a=r?"#A99C84":s.leaf,d=r?"#8F8268":a,g=14+i*46,f=112-g,y=i>.14,m=y?8+i*30:0;return n.jsxs("svg",{viewBox:"0 0 120 120",width:o,height:o,style:{display:"block"},children:[n.jsx("ellipse",{cx:"60",cy:"114",rx:20+i*14,ry:"5",fill:"rgba(38,36,31,0.08)"}),!y&&n.jsxs("g",{transform:`translate(60 ${112-i*40})`,children:[n.jsx("path",{d:"M0 8 C0 8 0 -2 0 -6",stroke:"#4C9A6B",strokeWidth:"2.5",fill:"none"}),n.jsx("ellipse",{cx:"-5",cy:"-4",rx:"6",ry:"3.5",fill:"#4C9A6B",transform:"rotate(-30 -5 -4)"}),n.jsx("ellipse",{cx:"5",cy:"-4",rx:"6",ry:"3.5",fill:"#5BB07E",transform:"rotate(30 5 -4)"})]}),y&&n.jsxs(n.Fragment,{children:[n.jsx("rect",{x:60-(2+i*2.5),y:f,width:(2+i*2.5)*2,height:g,rx:"2",fill:l}),s.shape==="pine"?n.jsxs(n.Fragment,{children:[n.jsx("polygon",{points:`60,${f-m*2.2} ${60-m},${f+4} ${60+m},${f+4}`,fill:a}),n.jsx("polygon",{points:`60,${f-m*3} ${60-m*.8},${f-m*.7} ${60+m*.8},${f-m*.7}`,fill:d})]}):s.shape==="tall"?n.jsxs(n.Fragment,{children:[n.jsx("ellipse",{cx:"60",cy:f-m*.3,rx:m*.78,ry:m*1.55,fill:a}),n.jsx("ellipse",{cx:"60",cy:f-m*.9,rx:m*.5,ry:m*1,fill:d,opacity:"0.9"})]}):n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:"60",cy:f,r:m,fill:a}),n.jsx("circle",{cx:60-m*.7,cy:f+m*.3,r:m*.78,fill:a}),n.jsx("circle",{cx:60+m*.7,cy:f+m*.3,r:m*.78,fill:d}),n.jsx("circle",{cx:"60",cy:f-m*.5,r:m*.8,fill:d,opacity:"0.92"})]})]})]})}function xy({species:t}){return n.jsx(kd,{species:t,progress:1,size:56})}const ky=[{id:"day",label:"Day"},{id:"week",label:"Week"},{id:"month",label:"Month"},{id:"year",label:"Year"}],Je=t=>t>=60?`${Math.floor(t/60)}h ${t%60}m`:`${t}m`,wy=t=>{const e=t<12?"am":"pm",r=t%12===0?12:t%12;return`${String(r).padStart(2,"0")} ${e}`};function jy(t){const e=t<=60?10:t<=120?20:t<=300?60:120,r=Math.max(60,Math.ceil((t||1)/e)*e),o=[];for(let i=0;i<=r;i+=e)o.push(i);return{max:r,ticks:o}}const ip=t=>{const e=new Date(t);return e.setHours(0,0,0,0),e},Sy=t=>{const e=ip(t),r=(e.getDay()+6)%7;return e.setDate(e.getDate()-r),e},Cy=t=>new Date(t.getFullYear(),t.getMonth(),1),Iy=t=>new Date(t.getFullYear(),0,1);function zy(t,e){if(t==="day"){const i=ip(e);return{start:i,end:new Date(+i+864e5),prev:new Date(+i-864e5),prev2:new Date(+i-2*864e5)}}if(t==="week"){const i=Sy(e);return{start:i,end:new Date(+i+7*864e5),prev:new Date(+i-7*864e5),prev2:new Date(+i-14*864e5)}}if(t==="month"){const i=Cy(e),s=e.getFullYear(),l=e.getMonth();return{start:i,end:new Date(s,l+1,1),prev:new Date(s,l-1,1),prev2:new Date(s,l-2,1)}}const r=e.getFullYear();return{start:Iy(e),end:new Date(r+1,0,1),prev:new Date(r-1,0,1),prev2:new Date(r-2,0,1)}}function Ty({sessions:t=[],onBack:e}){const[r,o]=p.useState("day"),i=new Date,{start:s,end:l,prev:a,prev2:d}=zy(r,i),g=q=>new Date(q.started_at||q.created_at),f=t.filter(q=>q.completed),y=(q,R,A)=>{const M=g(q);return M>=R&&M<A},m=(q,R)=>f.filter(A=>y(A,q,R)).reduce((A,M)=>A+(M.actual_min||0),0),S=f.filter(q=>y(q,s,l)),k=S.reduce((q,R)=>q+(R.actual_min||0),0),C=m(a,s),T=m(d,a),b=S.length,c=Array(24).fill(0);S.forEach(q=>{c[g(q).getHours()]+=q.actual_min||0});const u=Math.max(...c,0),x=jy(u),v={};S.forEach(q=>{const R=ze[q.tree]?q.tree:Ao;v[R]=(v[R]||0)+(q.actual_min||0)});const z=Object.entries(v).map(([q,R])=>({name:ze[q].label,min:R,color:ze[q].leaf})).sort((q,R)=>R.min-q.min),_=C>0?Math.round((k-C)/C*100):k>0?100:0,L=_>0?tp:_<0?Zb:dh,F=_>0?"#4C9A6B":_<0?"#C2536B":"#9A968C",P={day:"yesterday",week:"last week",month:"last month",year:"last year"}[r],I={day:"2 days ago",week:"2 weeks ago",month:"2 months ago",year:"2 years ago"}[r],D=54,w=22,O=2*Math.PI*D;let st=0;return n.jsxs("div",{style:it.page,children:[n.jsxs("div",{style:it.topbar,children:[n.jsxs("button",{onClick:e,style:it.back,children:[n.jsx($b,{size:18})," Grove"]}),n.jsx("h1",{style:it.h1,children:"Insights"}),n.jsx("div",{style:{width:76}})]}),n.jsx("div",{style:it.rangeBar,children:ky.map(q=>n.jsx("button",{onClick:()=>o(q.id),style:{...it.rangeBtn,...r===q.id?it.rangeOn:{}},children:q.label},q.id))}),n.jsxs("div",{style:it.headline,children:[n.jsxs("div",{style:it.bigStat,children:[n.jsx("div",{style:it.bigVal,children:Je(k)}),n.jsxs("div",{style:it.bigLbl,children:["Focused this ",r]})]}),n.jsxs("div",{style:it.bigStat,children:[n.jsx("div",{style:it.bigVal,children:b}),n.jsx("div",{style:it.bigLbl,children:"Trees"})]})]}),n.jsxs("div",{style:it.card,children:[n.jsxs("div",{style:it.cardHead,children:[n.jsxs("div",{style:it.cardTitle,children:["Your forest this ",r]}),n.jsx("div",{style:it.cardHint,children:"Each tree is a completed session — bigger means longer focus"})]}),n.jsx(Dy,{sessions:S}),n.jsxs("div",{style:it.forestNumber,children:[b," ",b===1?"tree":"trees"," · ",Je(k)," focused"]})]}),n.jsx(ll,{title:"Focus distribution",hint:"Minutes focused at each time of day",children:u===0?n.jsx(oc,{}):n.jsx(By,{hours:c,axis:x})}),n.jsx(ll,{title:"Pillar distribution",hint:"How your focus splits across the five trees",children:z.length===0?n.jsx(oc,{}):n.jsxs("div",{style:it.donutWrap,children:[n.jsxs("svg",{viewBox:"0 0 140 140",width:"150",height:"150",style:{flexShrink:0},children:[z.map(q=>{const R=q.min/(k||1)*O,A=n.jsx("circle",{cx:"70",cy:"70",r:D,fill:"none",stroke:q.color,strokeWidth:w,strokeDasharray:`${R} ${O-R}`,strokeDashoffset:-st,transform:"rotate(-90 70 70)"},q.name);return st+=R,A}),n.jsx("text",{x:"70",y:"66",textAnchor:"middle",style:it.donutCenterTop,children:Je(k)}),n.jsx("text",{x:"70",y:"82",textAnchor:"middle",style:it.donutCenterSub,children:"total"})]}),n.jsx("div",{style:it.legend,children:z.map(q=>n.jsxs("div",{style:it.legendRow,children:[n.jsx("span",{style:{...it.legendDot,background:q.color}}),n.jsx("span",{style:it.legendName,children:q.name}),n.jsxs("span",{style:it.legendVal,children:[Je(q.min)," · ",Math.round(q.min/(k||1)*100),"%"]})]},q.name))})]})}),n.jsxs(ll,{title:"Focus trend",hint:`This ${r} vs the previous two`,children:[n.jsxs("div",{style:it.trend3,children:[n.jsxs("div",{style:it.trendCol,children:[n.jsx("div",{style:it.trendVal,children:Je(k)}),n.jsxs("div",{style:it.trendLbl,children:["This ",r]})]}),n.jsxs("div",{style:it.trendCol,children:[n.jsx("div",{style:{...it.trendVal,color:"var(--text-2)"},children:Je(C)}),n.jsx("div",{style:it.trendLbl,children:P})]}),n.jsxs("div",{style:it.trendCol,children:[n.jsx("div",{style:{...it.trendVal,color:"var(--text-3)"},children:Je(T)}),n.jsx("div",{style:it.trendLbl,children:I})]})]}),n.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:14},children:n.jsxs("div",{style:{...it.trendBadge,color:F,background:F+"1A"},children:[n.jsx(L,{size:15})," ",_>0?"+":"",_,"% vs ",P]})}),n.jsx(Ry,{items:[{label:`This ${r}`,value:k,color:"#4C9A6B"},{label:P,value:C,color:"var(--text-3)"},{label:I,value:T,color:"var(--text-3)"}]})]})]})}const Ey=t=>t===0?"12a":t<12?`${t}a`:t===12?"12p":`${t-12}p`;function By({hours:t,axis:e}){return n.jsxs("div",{children:[n.jsxs("div",{style:it.vcPlot,children:[e.ticks.map(r=>n.jsxs("div",{style:{...it.vcGridRow,bottom:`${r/e.max*100}%`},children:[n.jsx("span",{style:it.vcYLabel,children:r}),n.jsx("div",{style:it.vcGridLine})]},r)),n.jsx("div",{style:it.vcBars,children:t.map((r,o)=>n.jsx("div",{style:it.vcCell,title:`${wy(o)} · ${r} min`,children:n.jsx("div",{style:{...it.vcBar,height:r>0?`max(3px, ${r/e.max*100}%)`:0}})},o))})]}),n.jsx("div",{style:it.vcXAxis,children:t.map((r,o)=>n.jsx("div",{style:it.vcXCell,children:o%3===0?Ey(o):""},o))}),n.jsx("div",{style:it.vcYTitle,children:"minutes focused, by hour of day"})]})}function Dy({sessions:t}){if(!t.length)return n.jsx("div",{style:it.sceneEmpty,children:"No trees yet this period. 🌱"});const r=t.slice(0,80),o=t.length-r.length,i=s=>Math.round(Math.max(40,Math.min(88,40+(s||0)*.6)));return n.jsxs("div",{children:[n.jsx("div",{style:it.scene,children:r.map(s=>n.jsx("div",{style:it.sceneTree,title:`${s.label||"Focus"} · ${Je(s.actual_min||s.duration_min)}`,children:n.jsx(kd,{species:s.tree,progress:1,size:i(s.actual_min||s.duration_min)})},s.id))}),o>0&&n.jsxs("div",{style:it.overflow,children:["+",o," more trees"]})]})}function ll({title:t,hint:e,children:r}){return n.jsxs("div",{style:it.card,children:[n.jsxs("div",{style:it.cardHead,children:[n.jsx("div",{style:it.cardTitle,children:t}),e&&n.jsx("div",{style:it.cardHint,children:e})]}),r]})}function oc(){return n.jsx("div",{style:it.empty,children:"No focus sessions in this period yet. 🌱"})}function Ry({items:t}){const e=Math.max(1,...t.map(r=>r.value));return n.jsx("div",{style:it.tbWrap,children:t.map(r=>n.jsxs("div",{style:it.tbRow,children:[n.jsx("div",{style:it.tbLbl,children:r.label}),n.jsx("div",{style:it.tbTrack,children:n.jsx("div",{style:{...it.tbBar,width:`${r.value/e*100}%`,background:r.color}})}),n.jsx("div",{style:it.tbVal,children:Je(r.value)})]},r.label))})}const it={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"20px 16px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:720,margin:"0 auto"},topbar:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16},back:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},h1:{fontSize:20,fontWeight:700,margin:0,fontFamily:"'Fraunces',Georgia,serif"},rangeBar:{display:"flex",gap:6,background:"var(--surface)",padding:5,borderRadius:12,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},rangeBtn:{flex:1,border:"none",background:"none",padding:"9px 0",borderRadius:8,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},rangeOn:{background:"var(--accent-strong)",color:"#fff"},headline:{display:"flex",gap:12,marginBottom:16},bigStat:{flex:1,background:"var(--surface)",borderRadius:14,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},bigVal:{fontSize:26,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em"},bigLbl:{fontSize:12,color:"var(--text-3)",marginTop:3,fontWeight:500},card:{background:"var(--surface)",borderRadius:16,padding:"18px 18px 20px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:16},cardHead:{marginBottom:14},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardHint:{fontSize:12,color:"var(--text-3)",marginTop:2},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"24px 0"},scene:{display:"flex",flexWrap:"wrap",alignItems:"flex-end",justifyContent:"center",gap:"0 2px",padding:"14px 8px 6px",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,minHeight:110,border:"1px solid var(--border)"},sceneTree:{lineHeight:0},sceneEmpty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"34px 0",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,border:"1px solid var(--border)"},overflow:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",marginTop:6,fontWeight:600},forestNumber:{textAlign:"center",marginTop:12,fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},vcPlot:{position:"relative",height:180,paddingLeft:30},vcGridRow:{position:"absolute",left:0,right:0,display:"flex",alignItems:"center",height:0},vcYLabel:{width:26,marginRight:4,textAlign:"right",fontSize:9,color:"var(--text-3)",fontWeight:600,flexShrink:0},vcGridLine:{flex:1,height:1,background:"#EEEBE4"},vcBars:{position:"absolute",left:30,right:0,top:0,bottom:0,display:"flex",alignItems:"flex-end",gap:1},vcCell:{flex:1,height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"center"},vcBar:{width:"72%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",transition:"height 0.3s"},vcXAxis:{display:"flex",marginLeft:30,marginTop:4},vcXCell:{flex:1,textAlign:"center",fontSize:8.5,color:"var(--text-3)",fontWeight:600,overflow:"hidden"},vcYTitle:{textAlign:"center",fontSize:9.5,color:"var(--text-3)",marginTop:6,letterSpacing:"0.06em",textTransform:"uppercase",fontWeight:600},donutWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap",justifyContent:"center"},donutCenterTop:{fontSize:16,fontWeight:800,fill:"var(--text)",fontFamily:"'Fraunces',Georgia,serif"},donutCenterSub:{fontSize:9,fill:"#9A968C",textTransform:"uppercase",letterSpacing:"0.08em"},legend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8},legendDot:{width:11,height:11,borderRadius:3,flexShrink:0},legendName:{flex:1,fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},legendVal:{fontSize:12,color:"var(--text-3)",fontWeight:600,flexShrink:0},trend3:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12,gap:8},trendCol:{textAlign:"center",flex:1},trendVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},trendLbl:{fontSize:11,color:"var(--text-3)",marginTop:2},trendBadge:{display:"inline-flex",alignItems:"center",gap:4,fontSize:13,fontWeight:800,padding:"6px 12px",borderRadius:20,width:"fit-content"},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:78,fontSize:11,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},tbTrack:{flex:1,height:14,background:"#F2F0EA",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:56,fontSize:11,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"}},Fy=[15,30,45,60,90],al="anvil_grove_active",ic=t=>`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`,os=t=>t>=60?`${Math.floor(t/60)}h ${t%60}m`:`${t}m`;function Ay(){const[t,e]=p.useState("timer"),[r,o]=p.useState("idle"),[i,s]=p.useState(15),[l,a]=p.useState(!1),[d,g]=p.useState(""),[f,y]=p.useState(Ao),[m,S]=p.useState(()=>localStorage.getItem("anvil_grove_deepfocus")!=="0"),[k,C]=p.useState(15*60),[T,b]=p.useState({sessions:[],stats:null}),c=p.useRef(null),u=p.useRef(null),x=p.useRef(!1),v=p.useCallback(async()=>{try{b(await H.getFocus())}catch{}},[]),z=p.useCallback(async(j,Y)=>{if(!x.current){x.current=!0,localStorage.removeItem(al);try{await H.createFocus({label:d.trim()||null,tree:f,duration_min:i,actual_min:Y,completed:j,started_at:u.current,ended_at:new Date().toISOString()})}catch{}v()}},[d,f,i,v]),_=p.useCallback(()=>{if(r!=="running")return;const j=u.current?Math.round((Date.now()-new Date(u.current).getTime())/6e4):0;o("failed"),z(!1,Math.max(0,Math.min(i,j)))},[r,i,z]),L=p.useCallback(()=>{o("done"),C(0),z(!0,i)},[i,z]);p.useEffect(()=>{v();const j=JSON.parse(localStorage.getItem(al)||"null");if(j&&j.endTime){const Y=Math.round((j.endTime-Date.now())/1e3);s(j.duration),g(j.label||""),y(j.tree||"oak"),c.current=j.endTime,u.current=j.startedAt,Y>0?(C(Y),o("running")):(o("done"),x.current=!1,z(!0,j.duration))}},[]),p.useEffect(()=>{if(r!=="running")return;const j=()=>{const h=Math.round((c.current-Date.now())/1e3);if(h<=0){L();return}C(h)};j();const Y=setInterval(j,250);return()=>clearInterval(Y)},[r,L]),p.useEffect(()=>{if(r!=="running"||!m)return;const j=()=>{document.hidden&&_()};return document.addEventListener("visibilitychange",j),()=>document.removeEventListener("visibilitychange",j)},[r,m,_]),p.useEffect(()=>{const j=()=>{!document.hidden&&r!=="running"&&v()};window.addEventListener("focus",j),document.addEventListener("visibilitychange",j);const Y=setInterval(j,6e4);return()=>{window.removeEventListener("focus",j),document.removeEventListener("visibilitychange",j),clearInterval(Y)}},[v,r]);const F=()=>S(j=>{const Y=!j;return localStorage.setItem("anvil_grove_deepfocus",Y?"1":"0"),Y}),P=()=>{x.current=!1,u.current=new Date().toISOString(),c.current=Date.now()+i*60*1e3,localStorage.setItem(al,JSON.stringify({endTime:c.current,duration:i,label:d,tree:f,startedAt:u.current})),C(i*60),o("running")},I=()=>{o("idle"),C(i*60)},D=j=>{a(!1),s(j),C(j*60)},w=()=>{l||(a(!0),s(5),C(5*60))},O=j=>{if(a(!0),j===""){s(0),C(0);return}const Y=Math.max(1,Math.min(600,parseInt(j,10)||0));s(Y),C(Y*60)},st=i*60,q=r==="running"?1-k/st:r==="done"?1:0,R=130,A=2*Math.PI*R,M=A*(1-(r==="running"?q:r==="done"?1:0)),G=T.stats;return t==="stats"?n.jsx(Ty,{sessions:T.sessions,onBack:()=>e("timer")}):n.jsxs("div",{style:at.page,children:[n.jsxs("div",{style:at.head,children:[n.jsx("div",{style:at.eyebrow,children:"Anvil · Grove"}),n.jsx("h1",{style:at.h1,children:"Grove"}),n.jsx("div",{style:at.subhead,children:"Plant a tree, stay focused, grow your grove."}),n.jsxs("button",{onClick:()=>e("stats"),style:at.insightsBtn,disabled:r==="running",children:[n.jsx(Kf,{size:15})," Insights"]})]}),G&&n.jsxs("div",{style:at.statRow,children:[n.jsx(mi,{label:"Today",value:os(G.today_minutes)}),n.jsx(mi,{label:"Trees",value:G.trees}),n.jsx(mi,{label:"Streak",value:`${G.streak}d`}),n.jsx(mi,{label:"Success",value:`${G.success_rate}%`})]}),n.jsxs("div",{style:at.stage,children:[n.jsxs("div",{style:at.ringWrap,children:[n.jsxs("svg",{width:"300",height:"300",viewBox:"0 0 300 300",style:{position:"absolute",inset:0},children:[n.jsx("circle",{cx:"150",cy:"150",r:R,fill:"none",stroke:"var(--border)",strokeWidth:"10"}),n.jsx("circle",{cx:"150",cy:"150",r:R,fill:"none",stroke:r==="failed"?"#C2536B":"#4C9A6B",strokeWidth:"10",strokeLinecap:"round",strokeDasharray:A,strokeDashoffset:M,transform:"rotate(-90 150 150)",style:{transition:"stroke-dashoffset 0.4s linear"}})]}),n.jsx("div",{style:at.ringInner,children:n.jsx(kd,{species:f,progress:r==="idle"?0:q,withered:r==="failed",size:170})})]}),r==="idle"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{style:at.timeBig,children:ic(i*60)}),n.jsxs("div",{style:at.controls,children:[n.jsxs("div",{style:at.chips,children:[Fy.map(j=>n.jsxs("button",{onClick:()=>D(j),style:{...at.chip,...!l&&i===j?at.chipOn:{}},children:[j,"m"]},j)),n.jsx("button",{onClick:w,style:{...at.chip,...l?at.chipOn:{}},children:"Custom"})]}),l&&n.jsxs("div",{style:at.customRow,children:[n.jsx("input",{type:"number",min:"1",max:"600",inputMode:"numeric",autoFocus:!0,value:i||"",onChange:j=>O(j.target.value),placeholder:"e.g. 50",style:at.customInput}),n.jsx("span",{style:at.customUnit,children:"minutes"})]}),n.jsx("input",{value:d,onChange:j=>g(j.target.value),placeholder:"What are you focusing on? (optional)",style:at.input,maxLength:60}),n.jsx("div",{style:at.treePick,children:Object.entries(ze).map(([j,Y])=>n.jsxs("button",{onClick:()=>y(j),title:Y.label,style:{...at.treeBtn,...f===j?{borderColor:Y.leaf,background:Y.leaf+"1A"}:{}},children:[n.jsx("span",{style:{...at.treeDot,background:Y.leaf}}),Y.label]},j))}),n.jsxs("button",{onClick:F,style:at.toggleRow,children:[n.jsxs("div",{style:{textAlign:"left"},children:[n.jsx("div",{style:at.toggleTitle,children:"Deep Focus"}),n.jsx("div",{style:at.toggleHint,children:m?"Leaving the app kills the tree":"Tree survives until you give up"})]}),n.jsx("div",{style:{...at.switch,...m?at.switchOn:{}},children:n.jsx("div",{style:{...at.knob,...m?at.knobOn:{}}})})]}),n.jsx("button",{onClick:P,disabled:i<1,style:{...at.plantBtn,...i<1?{opacity:.5,cursor:"not-allowed"}:{}},children:"Plant tree"})]})]}),r==="running"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{style:at.timeBig,children:ic(k)}),n.jsx("div",{style:at.focusLabel,children:d.trim()||"Focusing…"}),n.jsx("div",{style:m?at.warn:at.warnSoft,children:m?"⚠ Deep Focus on — leaving this app will kill your tree.":"🌿 Relaxed mode — only Give up ends this session."}),n.jsx("button",{onClick:_,style:at.giveUp,children:"Give up"})]}),r==="done"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:at.resultTitle,children:["🌳 You grew a ",ze[f].label," tree!"]}),n.jsxs("div",{style:at.resultSub,children:[os(i)," of focus added to your grove."]}),n.jsx("button",{onClick:I,style:at.plantBtn,children:"Plant another"})]}),r==="failed"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{...at.resultTitle,color:"#C2536B"},children:"Your tree withered."}),n.jsx("div",{style:at.resultSub,children:"You left before the timer finished. Try again?"}),n.jsx("button",{onClick:I,style:at.plantBtn,children:"Try again"})]})]}),n.jsx(My,{sessions:T.sessions,onDelete:async j=>{await H.deleteFocus(j),v()}})]})}function mi({label:t,value:e}){return n.jsxs("div",{style:at.stat,children:[n.jsx("div",{style:at.statValue,children:e}),n.jsx("div",{style:at.statLabel,children:t})]})}function My({sessions:t,onDelete:e}){const r=t.filter(l=>l.completed);if(r.length===0)return n.jsx("div",{style:at.forestEmpty,children:"Your grove is empty. Plant your first tree above. 🌱"});const o={};for(const l of r){const a=(l.started_at||l.created_at||"").slice(0,10);(o[a]||(o[a]=[])).push(l)}const i=Object.keys(o).sort().reverse(),s=l=>{const a=new Date().toISOString().slice(0,10);return l===a?"Today":new Date(l+"T00:00").toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})};return n.jsxs("div",{style:at.forest,children:[n.jsxs("div",{style:at.forestHead,children:["Your Grove · ",r.length," trees"]}),i.map(l=>n.jsxs("div",{style:at.daySection,children:[n.jsxs("div",{style:at.dayLabel,children:[s(l)," · ",o[l].length]}),n.jsx("div",{style:at.treeGrid,children:o[l].map(a=>n.jsxs("div",{style:at.treeCard,title:`${a.label||"Focus"} · ${os(a.actual_min)}`,onDoubleClick:()=>e(a.id),children:[n.jsx(xy,{species:a.tree}),n.jsx("div",{style:at.treeCardMin,children:os(a.actual_min||a.duration_min)}),a.label&&n.jsx("div",{style:at.treeCardLabel,children:a.label})]},a.id))})]},l)),n.jsx("div",{style:at.forestHint,children:"Double-tap a tree to remove it."})]})}const at={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:820,margin:"0 auto"},head:{marginBottom:16,textAlign:"center"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},insightsBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginTop:12},statRow:{display:"flex",gap:10,justifyContent:"center",marginBottom:18,flexWrap:"wrap"},stat:{background:"var(--surface)",borderRadius:12,padding:"10px 18px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",minWidth:78},statValue:{fontSize:19,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},statLabel:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},stage:{background:"var(--surface)",borderRadius:18,padding:"28px 24px 32px",boxShadow:"0 2px 12px rgba(0,0,0,0.06)",display:"flex",flexDirection:"column",alignItems:"center",marginBottom:26},ringWrap:{position:"relative",width:300,height:300,display:"grid",placeItems:"center"},ringInner:{position:"relative",zIndex:1,display:"grid",placeItems:"center"},timeBig:{fontSize:40,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:6},focusLabel:{fontSize:14,color:"var(--text-2)",marginTop:2,fontWeight:500},warn:{fontSize:12,color:"#C2773B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},warnSoft:{fontSize:12,color:"#4C9A6B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},toggleRow:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,border:"1px solid var(--border)",background:"var(--surface)",borderRadius:12,padding:"10px 14px",cursor:"pointer",fontFamily:"inherit",width:"100%"},toggleTitle:{fontSize:14,fontWeight:700,color:"var(--text)"},toggleHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},switch:{width:42,height:24,borderRadius:12,background:"var(--border)",flexShrink:0,padding:2,transition:"background 0.18s",boxSizing:"border-box"},switchOn:{background:"#4C9A6B"},knob:{width:20,height:20,borderRadius:"50%",background:"var(--surface)",boxShadow:"0 1px 2px rgba(0,0,0,0.2)",transform:"translateX(0)",transition:"transform 0.18s"},knobOn:{transform:"translateX(18px)"},controls:{width:"100%",maxWidth:380,display:"flex",flexDirection:"column",gap:14,marginTop:8},chips:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},chip:{border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 16px",borderRadius:20,fontSize:13.5,fontWeight:700,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipOn:{background:"#4C9A6B",color:"#fff",borderColor:"#4C9A6B"},customRow:{display:"flex",alignItems:"center",justifyContent:"center",gap:8},customInput:{border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",fontSize:15,fontWeight:700,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center",width:100},customUnit:{fontSize:13,color:"var(--text-3)",fontWeight:600},input:{border:"1px solid var(--border)",borderRadius:10,padding:"11px 13px",fontSize:14,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center"},treePick:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},treeBtn:{display:"flex",alignItems:"center",gap:6,border:"1.5px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},treeDot:{width:10,height:10,borderRadius:"50%"},plantBtn:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:4},giveUp:{border:"1px solid var(--border)",background:"var(--surface)",color:"#C2536B",padding:"11px 26px",borderRadius:11,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:18},resultTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginTop:14,textAlign:"center"},resultSub:{fontSize:13.5,color:"var(--text-3)",marginTop:6,marginBottom:18,textAlign:"center"},forest:{background:"var(--surface)",borderRadius:16,padding:"20px 22px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},forestHead:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:14},forestEmpty:{background:"var(--surface)",borderRadius:16,padding:"40px 20px",textAlign:"center",color:"var(--text-3)",fontSize:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},daySection:{marginBottom:16},dayLabel:{fontSize:12,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.04em",marginBottom:8},treeGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(80px,1fr))",gap:8},treeCard:{display:"flex",flexDirection:"column",alignItems:"center",padding:"8px 4px",borderRadius:10,cursor:"pointer",background:"var(--surface-2)"},treeCardMin:{fontSize:12,fontWeight:700,color:"#4C9A6B",marginTop:-4},treeCardLabel:{fontSize:10.5,color:"var(--text-3)",marginTop:2,textAlign:"center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:76},forestHint:{fontSize:11,color:"var(--text-3)",textAlign:"center",marginTop:6}},ya=[{code:"INR",symbol:"₹",locale:"en-IN",label:"Indian Rupee"},{code:"USD",symbol:"$",locale:"en-US",label:"US Dollar"},{code:"EUR",symbol:"€",locale:"de-DE",label:"Euro"},{code:"GBP",symbol:"£",locale:"en-GB",label:"British Pound"},{code:"JPY",symbol:"¥",locale:"ja-JP",label:"Japanese Yen"},{code:"AED",symbol:"د.إ",locale:"en-AE",label:"UAE Dirham"},{code:"AUD",symbol:"A$",locale:"en-AU",label:"Australian Dollar"},{code:"CAD",symbol:"C$",locale:"en-CA",label:"Canadian Dollar"},{code:"SGD",symbol:"S$",locale:"en-SG",label:"Singapore Dollar"}],sc="INR",sp="anvil_currency",wd=t=>ya.find(e=>e.code===t)||ya[0];function Mo(){try{return localStorage.getItem(sp)||sc}catch{return sc}}function lc(t){try{localStorage.setItem(sp,t)}catch{}return window.dispatchEvent(new CustomEvent("anvil-currency",{detail:t})),t}function is(t,e){const r=wd(e||Mo()),o=Math.round(Number(t)||0);return r.symbol+o.toLocaleString(r.locale)}function Wy(t,e){const r=wd(e||Mo()),o=Math.round(Number(t)||0),i=Math.abs(o);return r.code==="INR"?i>=1e7?r.symbol+(o/1e7).toFixed(i>=1e8?0:1)+"Cr":i>=1e5?r.symbol+(o/1e5).toFixed(i>=1e6?0:1)+"L":i>=1e3?r.symbol+(o/1e3).toFixed(i>=1e4?0:1)+"K":r.symbol+o:i>=1e9?r.symbol+(o/1e9).toFixed(1)+"B":i>=1e6?r.symbol+(o/1e6).toFixed(1)+"M":i>=1e3?r.symbol+(o/1e3).toFixed(1)+"K":r.symbol+o}function lp(){const[t,e]=p.useState(Mo());return p.useEffect(()=>{const r=o=>e(o.detail||Mo());return window.addEventListener("anvil-currency",r),()=>window.removeEventListener("anvil-currency",r)},[]),wd(t)}const ac="grove_rates",dl=Object.keys(ze),Pe=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,dc=t=>{const e=new Date(t);e.setHours(0,0,0,0);const r=(e.getDay()+6)%7;return e.setDate(e.getDate()-r),e},gc=t=>{const e=Math.floor(t/60),r=t%60;return e&&r?`${e}h ${r}m`:e?`${e}h`:`${r}m`},_y=[{id:"week",label:"This week"},{id:"month",label:"This month"},{id:"last7",label:"Last 7 days"},{id:"year",label:"This year"}];function gl(t){const e=new Date;if(t==="week")return[Pe(dc(e)),Pe(e)];if(t==="month")return[Pe(new Date(e.getFullYear(),e.getMonth(),1)),Pe(e)];if(t==="last7"){const r=new Date(e);return r.setDate(r.getDate()-6),[Pe(r),Pe(e)]}return t==="year"?[Pe(new Date(e.getFullYear(),0,1)),Pe(e)]:[Pe(dc(e)),Pe(e)]}function Ly(){const t=lp(),e=v=>is(v,t.code),[r,o]=p.useState({}),[i,s]=p.useState([]),[l,a]=p.useState("week"),[d,g]=p.useState(()=>gl("week")[0]),[f,y]=p.useState(()=>gl("week")[1]),[m,S]=p.useState(!1);p.useEffect(()=>{(async()=>{try{const[v,z]=await Promise.all([H.getFocus(),H.getSetting(ac)]);s(v.sessions||[]),o(z.value||{})}catch{}S(!0)})()},[]);const k=v=>{a(v);const[z,_]=gl(v);g(z),y(_)},C=(v,z)=>{a(""),v==="from"?g(z):y(z)},T=(v,z)=>{const _=Math.max(0,parseFloat(z)||0),L={...r,[v]:_};o(L),H.setSetting(ac,L).catch(()=>{})},b=p.useMemo(()=>{const v=d,z=f,_={};return dl.forEach(L=>_[L]=0),i.filter(L=>L.completed).forEach(L=>{const F=(L.started_at||L.created_at||"").slice(0,10);if(F<v||F>z)return;const P=ze[L.tree]?L.tree:Ao;_[P]+=L.actual_min||0}),dl.map(L=>{const F=_[L],P=r[L]||0;return{pillar:L,minutes:F,rate:P,cost:F/60*P,...ze[L]}}).sort((L,F)=>F.cost-L.cost||F.minutes-L.minutes)},[i,r,d,f]),c=b.reduce((v,z)=>v+z.cost,0),u=b.reduce((v,z)=>v+z.minutes,0),x=Math.max(1,...b.map(v=>v.cost));return n.jsxs("div",{style:pt.page,children:[n.jsxs("div",{style:pt.head,children:[n.jsx("div",{style:pt.eyebrow,children:"Anvil · Worth"}),n.jsx("h1",{style:pt.h1,children:"Worth"}),n.jsx("div",{style:pt.subhead,children:"What your focused time is worth, by pillar."})]}),n.jsxs("div",{style:pt.hero,children:[n.jsx("div",{style:pt.heroVal,children:e(c)}),n.jsxs("div",{style:pt.heroSub,children:[gc(u)," focused · ",d," → ",f]})]}),n.jsxs("div",{style:pt.card,children:[n.jsx("div",{style:pt.cardTitle,children:"Period"}),n.jsx("div",{style:pt.presetRow,children:_y.map(v=>n.jsx("button",{onClick:()=>k(v.id),style:{...pt.preset,...l===v.id?pt.presetOn:{}},children:v.label},v.id))}),n.jsxs("div",{style:pt.dateRow,children:[n.jsxs("label",{style:pt.dateField,children:[n.jsx("span",{style:pt.dateLbl,children:"From"}),n.jsx("input",{type:"date",value:d,max:f,onChange:v=>C("from",v.target.value),style:pt.dateInput})]}),n.jsx("span",{style:pt.dateArrow,children:"→"}),n.jsxs("label",{style:pt.dateField,children:[n.jsx("span",{style:pt.dateLbl,children:"To"}),n.jsx("input",{type:"date",value:f,min:d,onChange:v=>C("to",v.target.value),style:pt.dateInput})]})]})]}),n.jsxs("div",{style:pt.card,children:[n.jsx("div",{style:pt.cardTitle,children:"Breakdown"}),m?u===0?n.jsx("div",{style:pt.muted,children:"No focus sessions in this period."}):n.jsxs("div",{style:pt.rows,children:[b.map(v=>n.jsxs("div",{style:pt.row,children:[n.jsxs("div",{style:pt.rowTop,children:[n.jsx("span",{style:{...pt.dot,background:v.leaf}}),n.jsx("span",{style:pt.rowName,children:v.label}),n.jsx("span",{style:pt.rowCost,children:e(v.cost)})]}),n.jsx("div",{style:pt.rowBarTrack,children:n.jsx("div",{style:{...pt.rowBar,width:`${v.cost/x*100}%`,background:v.leaf}})}),n.jsxs("div",{style:pt.rowMeta,children:[gc(v.minutes)," × ",e(v.rate),"/hr"]})]},v.pillar)),n.jsxs("div",{style:pt.totalRow,children:[n.jsx("span",{children:"Total"}),n.jsx("span",{style:pt.totalVal,children:e(c)})]})]}):n.jsx("div",{style:pt.muted,children:"Loading…"})]}),n.jsxs("div",{style:pt.card,children:[n.jsx("div",{style:pt.cardTitle,children:"Hourly rates"}),n.jsx("div",{style:pt.cardHint,children:"Set how much an hour of focus is worth for each pillar."}),n.jsx("div",{style:pt.rateGrid,children:dl.map(v=>n.jsxs("div",{style:pt.rateRow,children:[n.jsx("span",{style:{...pt.dot,background:ze[v].leaf}}),n.jsx("span",{style:pt.rateName,children:ze[v].label}),n.jsxs("div",{style:pt.rateInputWrap,children:[n.jsx("span",{style:pt.rupeeSign,children:t.symbol}),n.jsx("input",{type:"number",min:"0",inputMode:"numeric",placeholder:"0",value:r[v]??"",onChange:z=>T(v,z.target.value),style:pt.rateInput}),n.jsx("span",{style:pt.perHr,children:"/hr"})]})]},v))})]})]})}const pt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},hero:{background:"linear-gradient(135deg,var(--accent-strong),var(--accent-2))",borderRadius:16,padding:"22px 24px",color:"#fff",marginBottom:16,textAlign:"center"},heroVal:{fontSize:38,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em"},heroSub:{fontSize:12.5,color:"var(--text-3)",marginTop:4},card:{background:"var(--surface)",borderRadius:16,padding:"18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:16},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},cardHint:{fontSize:12,color:"var(--text-3)",marginTop:-8,marginBottom:12},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},presetRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},preset:{border:"1px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:18,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},presetOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},dateRow:{display:"flex",alignItems:"flex-end",gap:10},dateField:{display:"flex",flexDirection:"column",gap:4,flex:1},dateLbl:{fontSize:11,color:"var(--text-2)",fontWeight:600},dateInput:{border:"1px solid var(--border)",borderRadius:9,padding:"9px 10px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",outline:"none",width:"100%",boxSizing:"border-box"},dateArrow:{color:"var(--text-3)",paddingBottom:9},rows:{display:"flex",flexDirection:"column",gap:14},row:{},rowTop:{display:"flex",alignItems:"center",gap:8,marginBottom:6},dot:{width:11,height:11,borderRadius:3,flexShrink:0},rowName:{flex:1,fontSize:14,fontWeight:600},rowCost:{fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},rowBarTrack:{height:8,background:"#F2F0EA",borderRadius:4,overflow:"hidden"},rowBar:{height:"100%",borderRadius:4,transition:"width 0.3s"},rowMeta:{fontSize:11.5,color:"var(--text-3)",marginTop:5,fontWeight:500},totalRow:{display:"flex",justifyContent:"space-between",alignItems:"center",borderTop:"1px solid var(--border)",paddingTop:12,marginTop:2,fontSize:14,fontWeight:700},totalVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},rateGrid:{display:"flex",flexDirection:"column",gap:10},rateRow:{display:"flex",alignItems:"center",gap:8},rateName:{flex:1,fontSize:14,fontWeight:600},rateInputWrap:{display:"flex",alignItems:"center",gap:3,border:"1px solid var(--border)",borderRadius:9,padding:"4px 10px",background:"var(--surface-2)"},rupeeSign:{fontSize:14,color:"var(--text-2)",fontWeight:600},rateInput:{border:"none",background:"none",outline:"none",width:64,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},perHr:{fontSize:12,color:"var(--text-3)",fontWeight:600}};function Py({onAuthed:t}){const[e,r]=p.useState("login"),[o,i]=p.useState(""),[s,l]=p.useState(""),[a,d]=p.useState(""),[g,f]=p.useState(""),[y,m]=p.useState(!1),S=e==="register",k=async C=>{if(C.preventDefault(),f(""),!s.trim()||!a){f("Email and password are required.");return}if(S&&a.length<6){f("Password must be at least 6 characters.");return}m(!0);try{const T=S?await H.register({name:o,email:s,password:a}):await H.login({email:s,password:a});Ch(T.token),t(T.user)}catch(T){f(T.message||"Something went wrong.")}finally{m(!1)}};return n.jsx("div",{style:Nt.page,children:n.jsxs("form",{style:Nt.card,onSubmit:k,children:[n.jsxs("div",{style:Nt.brand,children:[n.jsx("div",{style:Nt.logo,children:"B"}),n.jsx("span",{style:Nt.brandName,children:"Anvil"})]}),n.jsx("h1",{style:Nt.title,children:S?"Create your account":"Welcome back"}),n.jsx("p",{style:Nt.sub,children:S?"Start forging your days.":"Sign in to continue."}),S&&n.jsxs("label",{style:Nt.field,children:[n.jsx("span",{style:Nt.label,children:"Name"}),n.jsx("input",{value:o,onChange:C=>i(C.target.value),placeholder:"Your name",style:Nt.input,autoFocus:!0})]}),n.jsxs("label",{style:Nt.field,children:[n.jsx("span",{style:Nt.label,children:"Email"}),n.jsx("input",{type:"email",value:s,onChange:C=>l(C.target.value),placeholder:"you@example.com",style:Nt.input,autoFocus:!S})]}),n.jsxs("label",{style:Nt.field,children:[n.jsx("span",{style:Nt.label,children:"Password"}),n.jsx("input",{type:"password",value:a,onChange:C=>d(C.target.value),placeholder:"••••••••",style:Nt.input})]}),g&&n.jsx("div",{style:Nt.error,children:g}),n.jsx("button",{type:"submit",disabled:y,style:{...Nt.submit,...y?{opacity:.6}:{}},children:y?"Please wait…":S?"Create account":"Sign in"}),n.jsxs("div",{style:Nt.switch,children:[S?"Already have an account?":"New here?"," ",n.jsx("button",{type:"button",onClick:()=>{r(S?"login":"register"),f("")},style:Nt.link,children:S?"Sign in":"Create one"})]})]})})}const Nt={page:{minHeight:"100vh",display:"grid",placeItems:"center",background:"var(--bg)",fontFamily:"'Inter',system-ui,sans-serif",padding:20},card:{width:"100%",maxWidth:380,background:"var(--surface)",borderRadius:16,padding:"32px 28px",boxShadow:"0 4px 24px rgba(0,0,0,0.08)",display:"flex",flexDirection:"column"},brand:{display:"flex",alignItems:"center",gap:9,marginBottom:20},logo:{width:32,height:32,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},brandName:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},title:{fontSize:22,fontWeight:700,margin:"0 0 4px",fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},sub:{fontSize:13.5,color:"var(--text-3)",margin:"0 0 22px"},field:{display:"flex",flexDirection:"column",gap:5,marginBottom:14},label:{fontSize:12,fontWeight:600,color:"var(--text-2)"},input:{border:"1px solid var(--border)",borderRadius:9,padding:"11px 12px",fontSize:14,fontFamily:"inherit",outline:"none",color:"var(--text)"},error:{background:"rgba(194,83,107,0.10)",color:"#C2536B",fontSize:13,padding:"9px 12px",borderRadius:8,marginBottom:14,fontWeight:500},submit:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"12px",borderRadius:10,fontSize:14.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:4},switch:{fontSize:13,color:"var(--text-2)",textAlign:"center",marginTop:18},link:{border:"none",background:"none",color:"#3A7CA5",fontWeight:700,cursor:"pointer",fontFamily:"inherit",fontSize:13,padding:0}},cc=["Salary","Stocks","Business","Interest","Rent","Gift","Other"],uc=["Bills","EMI","Rent","Food","Shopping","Transport","Health","Entertainment","Education","Other"],$y={Salary:"#4C9A6B",Stocks:"#3A7CA5",Business:"#C9A227",Interest:"#8268B0",Gift:"#C2773B",Bills:"#C2536B",EMI:"#A23E57",Food:"#E08E45",Shopping:"#8268B0",Transport:"#3A7CA5",Health:"#4C9A6B",Entertainment:"#C9A227",Education:"#5B7C99",Rent:"#5B8C5A",Other:"#9A968C"},ap=t=>$y[t]||"#9A968C",He="#3E9E6B",Ge="#D1556E",ro=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,fo=ro(new Date),Ny=[{id:"month",label:"This month"},{id:"last",label:"Last month"},{id:"year",label:"This year"},{id:"all",label:"All time"}];function Oy(t){const e=new Date;return t==="month"?[ro(new Date(e.getFullYear(),e.getMonth(),1)),fo]:t==="last"?[ro(new Date(e.getFullYear(),e.getMonth()-1,1)),ro(new Date(e.getFullYear(),e.getMonth(),0))]:t==="year"?[ro(new Date(e.getFullYear(),0,1)),fo]:["0000-01-01","9999-12-31"]}function Hy(){const t=lp(),[e,r]=p.useState("overview"),[o,i]=p.useState([]),[s,l]=p.useState(!1),a=p.useCallback(()=>H.getTxns().then(g=>{i(g),l(!0)}).catch(()=>l(!0)),[]);p.useEffect(()=>{a()},[a]);const d=g=>is(g,t.code);return n.jsxs("div",{style:E.page,children:[n.jsxs("div",{style:E.head,children:[n.jsx("div",{style:E.eyebrow,children:"Anvil · Vault"}),n.jsx("h1",{style:E.h1,children:"Vault"}),n.jsx("div",{style:E.subhead,children:"Your money — what comes in, what goes out, and where it's headed."})]}),n.jsx("div",{style:E.tabs,children:[["overview","Overview",Xf],["money","Money",wh],["calc","Calculators",Qf]].map(([g,f,y])=>n.jsxs("button",{onClick:()=>r(g),style:{...E.tab,...e===g?E.tabOn:{}},children:[n.jsx(y,{size:15})," ",f]},g))}),e==="overview"&&n.jsx(Gy,{txns:o,loaded:s,money:d,cur:t}),e==="money"&&n.jsx(Vy,{txns:o,reload:a,money:d}),e==="calc"&&n.jsx(Yy,{money:d,cur:t})]})}function Gy({txns:t,loaded:e,money:r,cur:o}){const[i,s]=p.useState("month"),[l,a]=Oy(i),d=p.useMemo(()=>t.filter(C=>C.date>=l&&C.date<=a),[t,l,a]),g=d.filter(C=>C.kind==="income"),f=d.filter(C=>C.kind==="expense"),y=g.reduce((C,T)=>C+T.amount,0),m=f.reduce((C,T)=>C+T.amount,0),S=y-m,k=C=>{const T={};return C.forEach(b=>{T[b.category]=(T[b.category]||0)+b.amount}),Object.entries(T).map(([b,c])=>({category:b,amount:c})).sort((b,c)=>c.amount-b.amount)};return n.jsxs(n.Fragment,{children:[n.jsx("div",{style:E.presetRow,children:Ny.map(C=>n.jsx("button",{onClick:()=>s(C.id),style:{...E.preset,...i===C.id?E.presetOn:{}},children:C.label},C.id))}),n.jsxs("div",{style:E.sumGrid,children:[n.jsx(cl,{icon:n.jsx(aa,{size:16}),label:"Income",value:r(y),color:He}),n.jsx(cl,{icon:n.jsx(da,{size:16}),label:"Expenses",value:r(m),color:Ge}),n.jsx(cl,{icon:S>=0?n.jsx(tp,{size:16}):n.jsx(Zb,{size:16}),label:"Net savings",value:r(S),color:S>=0?He:Ge})]}),e?d.length===0?n.jsx("div",{style:E.card,children:n.jsxs("div",{style:E.muted,children:["No transactions in this period. Add some under the ",n.jsx("b",{children:"Money"})," tab."]})}):n.jsxs(n.Fragment,{children:[n.jsx(Uy,{totalIn:y,totalOut:m}),n.jsxs("div",{style:E.twoCol,children:[n.jsx(bc,{title:"Incoming",subtitle:"Where your money comes from",total:y,data:k(g),accent:He,cur:o}),n.jsx(bc,{title:"Outgoing",subtitle:"Where your money goes",total:m,data:k(f),accent:Ge,cur:o})]})]}):n.jsx("div",{style:E.muted,children:"Loading…"})]})}function cl({icon:t,label:e,value:r,color:o}){return n.jsxs("div",{style:E.sumCard,children:[n.jsx("div",{style:{...E.sumIcon,color:o,background:o+"1A"},children:t}),n.jsx("div",{style:E.sumLabel,children:e}),n.jsx("div",{style:{...E.sumVal,color:o},children:r})]})}function bc({title:t,subtitle:e,total:r,data:o,accent:i,cur:s}){let l=0;const a=o.map(g=>{const f=r>0?l/r*100:0;l+=g.amount;const y=r>0?l/r*100:0;return{...g,start:f,end:y,color:ap(g.category),pct:r>0?g.amount/r*100:0}}),d=a.length?`conic-gradient(${a.map(g=>`${g.color} ${g.start}% ${g.end}%`).join(", ")})`:"var(--surface-2)";return n.jsxs("div",{style:E.card,children:[n.jsxs("div",{style:E.cardTitleRow,children:[n.jsxs("div",{children:[n.jsx("div",{style:{...E.cardTitle,color:i},children:t}),n.jsx("div",{style:E.cardSub,children:e})]}),n.jsx("div",{style:{...E.cardTotal,color:i},children:is(r,s.code)})]}),o.length===0?n.jsx("div",{style:E.muted,children:"Nothing logged."}):n.jsxs("div",{style:E.pieWrap,children:[n.jsxs("div",{style:E.pieChart,children:[n.jsx("div",{style:{...E.pieDisc,background:d}}),n.jsxs("div",{style:E.pieHole,children:[n.jsx("span",{style:E.pieHoleVal,children:Wy(r,s.code)}),n.jsx("span",{style:E.pieHoleLbl,children:"total"})]})]}),n.jsx("div",{style:E.pieLegend,children:a.map(g=>n.jsxs("div",{style:E.legendRow,children:[n.jsx("span",{style:{...E.dot,background:g.color}}),n.jsx("span",{style:E.legendName,children:g.category}),n.jsxs("span",{style:E.legendPct,children:[Math.round(g.pct),"%"]}),n.jsx("span",{style:E.legendAmt,children:is(g.amount,s.code)})]},g.category))})]})]})}function Uy({totalIn:t,totalOut:e}){const r=t-e,o=t>0?r/t:0,i=t===0?0:Math.max(0,Math.min(100,Math.round(50+o*100)));let s,l,a;t===0?(s="No income logged",l="#9A968C",a="Add your income to see your financial health."):o>=.3?(s="Excellent",l="#3E9E6B",a="You're saving 30%+ of income — keep investing the surplus."):o>=.2?(s="Healthy",l="#4C9A6B",a="Solid savings rate. Consider automating a SIP with the surplus."):o>=.1?(s="Okay",l="#C9A227",a="Decent, but aim for 20%+. Trim your biggest expense category."):o>=0?(s="Tight",l="#C2773B",a="You're saving very little. Review recurring bills and EMIs."):(s="Overspending",l="#D1556E",a="You're spending more than you earn. Cut back to avoid debt.");const d=t>0?Math.min(100,Math.round(e/t*100)):0;return n.jsxs("div",{style:E.card,children:[n.jsxs("div",{style:E.cardTitleRow,children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx(nh,{size:18,color:l}),n.jsxs("div",{children:[n.jsx("div",{style:E.cardTitle,children:"Financial health"}),n.jsx("div",{style:E.cardSub,children:"Based on your savings rate this period"})]})]}),n.jsxs("div",{style:{textAlign:"right"},children:[n.jsx("div",{style:{...E.healthScore,color:l},children:t===0?"—":i}),n.jsx("div",{style:{...E.healthStatus,color:l},children:s})]})]}),n.jsx("div",{style:E.gaugeTrack,children:n.jsx("div",{style:{...E.gaugeFill,width:`${t===0?0:i}%`,background:l}})}),n.jsxs("div",{style:E.healthStats,children:[n.jsxs("div",{style:E.healthStat,children:[n.jsxs("span",{style:E.healthStatV,children:[t>0?Math.round(o*100):0,"%"]}),n.jsx("span",{style:E.healthStatL,children:"Savings rate"})]}),n.jsxs("div",{style:E.healthStat,children:[n.jsxs("span",{style:E.healthStatV,children:[d,"%"]}),n.jsx("span",{style:E.healthStatL,children:"of income spent"})]})]}),n.jsx("div",{style:{...E.tip,borderColor:l+"55",background:l+"12",color:l},children:a})]})}function Vy({txns:t,reload:e,money:r}){const[o,i]=p.useState("expense"),[s,l]=p.useState(""),[a,d]=p.useState("Bills"),[g,f]=p.useState(fo),[y,m]=p.useState(""),[S,k]=p.useState(null),{deleteItem:C,toasts:T,handleUndo:b,handleDismiss:c}=tn(H.deleteTxn,H.restoreTxn,e),u=o==="income"?cc:uc,x=D=>{i(D),d(D==="income"?"Salary":"Bills")},v=async()=>{const D=parseFloat(s);!D||D<=0||(await H.createTxn({kind:o,category:a,amount:D,note:y.trim(),date:g}),l(""),m(""),e())},z=D=>k({id:D.id,kind:D.kind,amount:String(D.amount),category:D.category,date:D.date,note:D.note||""}),_=(S==null?void 0:S.kind)==="income"?cc:uc,L=D=>k(w=>({...w,kind:D,category:_.includes(w.category)?w.category:D==="income"?"Salary":"Bills"})),F=async()=>{const D=parseFloat(S.amount);!D||D<=0||(await H.updateTxn(S.id,{kind:S.kind,category:S.category,amount:D,note:S.note.trim(),date:S.date}),k(null),e())},P=p.useMemo(()=>{const D={};return t.forEach(w=>{(D[w.date]=D[w.date]||[]).push(w)}),Object.entries(D).sort((w,O)=>O[0].localeCompare(w[0]))},[t]),I=D=>new Date(D+"T00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"});return n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:E.card,children:[n.jsx("div",{style:E.cardTitle,children:"Add transaction"}),n.jsxs("div",{style:E.kindToggle,children:[n.jsxs("button",{onClick:()=>x("expense"),style:{...E.kindBtn,...o==="expense"?{background:Ge,color:"#fff",borderColor:Ge}:{}},children:[n.jsx(da,{size:15})," Expense"]}),n.jsxs("button",{onClick:()=>x("income"),style:{...E.kindBtn,...o==="income"?{background:He,color:"#fff",borderColor:He}:{}},children:[n.jsx(aa,{size:15})," Income"]})]}),n.jsxs("div",{style:E.formGrid,children:[n.jsx("input",{type:"number",inputMode:"decimal",placeholder:"Amount",value:s,onChange:D=>l(D.target.value),onKeyDown:D=>D.key==="Enter"&&v(),style:E.input,autoFocus:!0}),n.jsx("select",{value:a,onChange:D=>d(D.target.value),style:E.input,children:u.map(D=>n.jsx("option",{children:D},D))}),n.jsx("input",{type:"date",value:g,max:fo,onChange:D=>f(D.target.value),style:E.input})]}),n.jsx("input",{placeholder:"Note (optional)",value:y,onChange:D=>m(D.target.value),onKeyDown:D=>D.key==="Enter"&&v(),style:{...E.input,marginTop:8}}),n.jsxs("button",{onClick:v,style:{...E.addBtn,background:o==="income"?He:Ge},children:[n.jsx(ne,{size:15})," Add ",o]})]}),n.jsxs("div",{style:E.card,children:[n.jsx("div",{style:E.cardTitle,children:"History"}),P.length===0?n.jsx("div",{style:E.muted,children:"No transactions yet."}):n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:P.map(([D,w])=>n.jsxs("div",{children:[n.jsx("div",{style:E.dateHead,children:I(D)}),w.map(O=>(S==null?void 0:S.id)===O.id?n.jsxs("div",{style:E.editTxn,children:[n.jsxs("div",{style:E.kindToggle,children:[n.jsxs("button",{onClick:()=>L("expense"),style:{...E.kindBtn,...S.kind==="expense"?{background:Ge,color:"#fff",borderColor:Ge}:{}},children:[n.jsx(da,{size:14})," Expense"]}),n.jsxs("button",{onClick:()=>L("income"),style:{...E.kindBtn,...S.kind==="income"?{background:He,color:"#fff",borderColor:He}:{}},children:[n.jsx(aa,{size:14})," Income"]})]}),n.jsxs("div",{style:E.formGrid,children:[n.jsx("input",{type:"number",inputMode:"decimal",value:S.amount,onChange:st=>k({...S,amount:st.target.value}),style:E.input}),n.jsx("select",{value:S.category,onChange:st=>k({...S,category:st.target.value}),style:E.input,children:_.map(st=>n.jsx("option",{children:st},st))}),n.jsx("input",{type:"date",value:S.date,max:fo,onChange:st=>k({...S,date:st.target.value}),style:E.input})]}),n.jsx("input",{placeholder:"Note (optional)",value:S.note,onChange:st=>k({...S,note:st.target.value}),onKeyDown:st=>st.key==="Enter"&&F(),style:{...E.input,marginTop:8}}),n.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[n.jsxs("button",{onClick:()=>k(null),style:E.editCancel,children:[n.jsx(vt,{size:14})," Cancel"]}),n.jsxs("button",{onClick:F,style:{...E.addBtn,marginTop:0,flex:1,background:S.kind==="income"?He:Ge},children:[n.jsx(jt,{size:15})," Save"]})]})]},O.id):n.jsxs("div",{style:E.txnRow,children:[n.jsx("span",{style:{...E.txnDot,background:ap(O.category)}}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("div",{style:E.txnCat,children:O.category}),O.note&&n.jsx("div",{style:E.txnNote,children:O.note})]}),n.jsxs("span",{style:{...E.txnAmt,color:O.kind==="income"?He:Ge},children:[O.kind==="income"?"+":"−",r(O.amount)]}),n.jsx("button",{onClick:()=>z(O),style:E.delBtn,children:n.jsx(me,{size:13})}),n.jsx("button",{onClick:()=>C(O.id,O.category),style:E.delBtn,children:n.jsx(vt,{size:14})})]},O.id))]},D))})]}),n.jsx(en,{toasts:T,onUndo:b,onDismiss:c})]})}function Yy({money:t,cur:e}){return n.jsxs(n.Fragment,{children:[n.jsx(Qy,{money:t,cur:e}),n.jsx(Xy,{money:t,cur:e})]})}function Nr({label:t,value:e,set:r,min:o,max:i,step:s,suffix:l}){return n.jsxs("div",{style:E.field,children:[n.jsxs("div",{style:E.fieldTop,children:[n.jsx("span",{style:E.fieldLabel,children:t}),n.jsxs("div",{style:E.fieldInputWrap,children:[n.jsx("input",{type:"number",value:e,onChange:a=>r(a.target.value),style:E.fieldInput}),l&&n.jsx("span",{style:E.fieldSuffix,children:l})]})]}),n.jsx("input",{type:"range",min:o,max:i,step:s,value:e,onChange:a=>r(a.target.value),style:E.range})]})}function Qy({money:t,cur:e}){const[r,o]=p.useState(3e4),[i,s]=p.useState(12),[l,a]=p.useState(15),{invested:d,futureValue:g,gains:f,yearly:y}=p.useMemo(()=>{const S=Math.max(0,parseFloat(r)||0),k=Math.max(0,parseFloat(i)||0),C=Math.max(0,Math.min(60,parseInt(l)||0)),T=k/12/100,b=v=>v<=0?0:T===0?S*v:S*((Math.pow(1+T,v)-1)/T)*(1+T),c=[];for(let v=1;v<=C;v++)c.push({year:v,invested:S*12*v,value:b(v*12)});const u=b(C*12),x=S*12*C;return{invested:x,futureValue:u,gains:u-x,yearly:c}},[r,i,l]),m=Math.max(1,...y.map(S=>S.value));return n.jsxs("div",{style:E.card,children:[n.jsx("div",{style:E.cardTitleRow,children:n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx(ph,{size:18,color:"#3A7CA5"}),n.jsxs("div",{children:[n.jsx("div",{style:E.cardTitle,children:"SIP projection"}),n.jsx("div",{style:E.cardSub,children:"Mutual fund / SIP future value"})]})]})}),n.jsx(Nr,{label:"Monthly investment",value:r,set:o,min:500,max:5e5,step:500,suffix:e.symbol}),n.jsx(Nr,{label:"Expected return (p.a.)",value:i,set:s,min:1,max:30,step:.5,suffix:"%"}),n.jsx(Nr,{label:"Time period",value:l,set:a,min:1,max:40,step:1,suffix:"yrs"}),n.jsxs("div",{style:E.resultHero,children:[n.jsx("div",{style:E.resultLabel,children:"Projected wealth"}),n.jsx("div",{style:{...E.resultVal,color:"#3A7CA5"},children:t(g)})]}),n.jsxs("div",{style:E.splitRow,children:[n.jsxs("div",{style:E.splitItem,children:[n.jsx("span",{style:E.splitV,children:t(d)}),n.jsx("span",{style:E.splitL,children:"Invested"})]}),n.jsxs("div",{style:E.splitItem,children:[n.jsx("span",{style:{...E.splitV,color:"#3E9E6B"},children:t(f)}),n.jsx("span",{style:E.splitL,children:"Est. returns"})]})]}),y.length>0&&n.jsxs("div",{style:E.chartWrap,children:[n.jsx("div",{style:E.chartBars,children:y.map(S=>n.jsx("div",{style:E.chartCol,title:`Year ${S.year}: ${t(S.value)}`,children:n.jsx("div",{style:{...E.chartStack,height:`${S.value/m*100}%`},children:n.jsx("div",{style:{...E.chartGain,height:`${(1-S.invested/S.value)*100}%`}})})},S.year))}),n.jsxs("div",{style:E.chartAxis,children:[n.jsx("span",{children:"Yr 1"}),n.jsxs("span",{style:{marginLeft:"auto"},children:["Yr ",y.length]})]}),n.jsxs("div",{style:E.legend,children:[n.jsxs("span",{style:E.legendItem,children:[n.jsx("span",{style:{...E.legendDot,background:"#9DBFD6"}})," Invested"]}),n.jsxs("span",{style:E.legendItem,children:[n.jsx("span",{style:{...E.legendDot,background:"#3E9E6B"}})," Returns"]})]})]})]})}function pc(t,e,r,o=0,i=0){let s=Math.max(0,t-i),l=0,a=0,d=i;const g=1200;for(;s>.01&&a<g;){const f=s*e;let y=r+o,m=y-f;if(m<=0)return{months:1/0,totalInterest:1/0,totalPaid:1/0};m>s&&(m=s,y=s+f),s-=m,l+=f,d+=y,a++}return{months:a,totalInterest:l,totalPaid:d}}const mc=t=>{if(!isFinite(t))return"—";const e=Math.floor(t/12),r=t%12;return(e?`${e}y `:"")+`${r}m`},Ky=t=>{if(!isFinite(t))return"—";const e=new Date;return e.setMonth(e.getMonth()+t),e.toLocaleDateString("en-US",{month:"short",year:"numeric"})};function Xy({money:t,cur:e}){const[r,o]=p.useState(2e6),[i,s]=p.useState(9),[l,a]=p.useState(20),[d,g]=p.useState(5e5),[f,y]=p.useState("once"),[m,S]=p.useState("tenure"),k=p.useMemo(()=>{const u=Math.max(0,parseFloat(r)||0),x=Math.max(0,parseFloat(i)||0)/12/100,v=Math.max(1,Math.round((parseFloat(l)||0)*12)),z=x===0?u/v:u*x*Math.pow(1+x,v)/(Math.pow(1+x,v)-1);return{P:u,i:x,n:v,emi:z,totalPay:z*v,totalInterest:z*v-u}},[r,i,l]),C=f==="monthly"?"tenure":m,T=p.useMemo(()=>{const{P:u,i:x,n:v,emi:z,totalInterest:_}=k,L=Math.max(0,parseFloat(d)||0);if(L<=0)return null;let F=z,P=v,I=_,D=k.totalPay;if(f==="once"&&C==="emi"){const w=Math.max(0,u-L);F=x===0?w/v:w*x*Math.pow(1+x,v)/(Math.pow(1+x,v)-1),P=v,I=F*v-w,D=L+F*v}else if(f==="once"){const w=pc(u,x,z,0,L);P=w.months,I=w.totalInterest,D=w.totalPaid}else{const w=pc(u,x,z,L,0);P=w.months,I=w.totalInterest,D=w.totalPaid}return{newEMI:F,newMonths:P,newInterest:I,totalPaid:D,interestSaved:Math.max(0,_-I),monthsSaved:Math.max(0,v-(isFinite(P)?P:v))}},[k,d,f,C]),b=k.totalPay>0?k.P/k.totalPay*100:0,c=f==="once"?Math.max(1e5,Math.round(k.P)):Math.max(5e4,Math.round(k.emi*3));return n.jsxs("div",{style:E.card,children:[n.jsx("div",{style:E.cardTitleRow,children:n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx(Gb,{size:18,color:"#C2536B"}),n.jsxs("div",{children:[n.jsx("div",{style:E.cardTitle,children:"EMI calculator"}),n.jsx("div",{style:E.cardSub,children:"Loan / mortgage monthly payment"})]})]})}),n.jsx(Nr,{label:"Loan amount",value:r,set:o,min:5e4,max:5e7,step:5e4,suffix:e.symbol}),n.jsx(Nr,{label:"Interest rate (p.a.)",value:i,set:s,min:1,max:24,step:.1,suffix:"%"}),n.jsx(Nr,{label:"Tenure",value:l,set:a,min:1,max:30,step:1,suffix:"yrs"}),n.jsxs("div",{style:E.resultHero,children:[n.jsx("div",{style:E.resultLabel,children:"Monthly EMI"}),n.jsx("div",{style:{...E.resultVal,color:"#C2536B"},children:t(k.emi)})]}),n.jsxs("div",{style:E.emiSplitTrack,children:[n.jsx("div",{style:{width:`${b}%`,background:"#5B7C99",height:"100%"}}),n.jsx("div",{style:{width:`${100-b}%`,background:"#C2536B",height:"100%"}})]}),n.jsxs("div",{style:E.splitRow,children:[n.jsxs("div",{style:E.splitItem,children:[n.jsx("span",{style:{...E.splitV,color:"#5B7C99"},children:t(k.P)}),n.jsx("span",{style:E.splitL,children:"Principal"})]}),n.jsxs("div",{style:E.splitItem,children:[n.jsx("span",{style:{...E.splitV,color:"#C2536B"},children:t(k.totalInterest)}),n.jsx("span",{style:E.splitL,children:"Total interest"})]}),n.jsxs("div",{style:E.splitItem,children:[n.jsx("span",{style:E.splitV,children:t(k.totalPay)}),n.jsx("span",{style:E.splitL,children:"Total payable"})]})]}),n.jsx("div",{style:E.subDivider}),n.jsx("div",{style:E.subTitle,children:"Prepayment planner"}),n.jsx("div",{style:E.cardSub,children:"See what an extra payment does to your loan."}),n.jsx("div",{style:{marginTop:14},children:n.jsx(Nr,{label:"Prepayment amount",value:d,set:g,min:0,max:c,step:f==="once"?25e3:1e3,suffix:e.symbol})}),n.jsxs("div",{style:E.segGroup,children:[n.jsx("span",{style:E.segLbl,children:"Type"}),n.jsxs("div",{style:E.segRow,children:[n.jsx(fi,{label:"One-time",on:f==="once",onClick:()=>y("once")}),n.jsx(fi,{label:"Every month",on:f==="monthly",onClick:()=>y("monthly")})]})]}),n.jsxs("div",{style:E.segGroup,children:[n.jsx("span",{style:E.segLbl,children:"Strategy"}),n.jsxs("div",{style:E.segRow,children:[n.jsx(fi,{label:"Reduce tenure",on:C==="tenure",onClick:()=>S("tenure")}),n.jsx(fi,{label:"Reduce EMI",on:C==="emi",disabled:f==="monthly",onClick:()=>S("emi")})]})]}),f==="monthly"&&n.jsx("div",{style:E.note,children:"An extra monthly payment always shortens the tenure. Switch to a one-time prepayment to reduce your EMI instead."}),T?n.jsxs("div",{style:E.cmpCard,children:[n.jsxs("div",{style:E.cmpRow,children:[n.jsx("span",{style:E.cmpLbl,children:"New EMI"}),n.jsxs("span",{style:E.cmpVal,children:[t(T.newEMI),T.newEMI<k.emi-1&&n.jsxs("span",{style:E.cmpWas,children:[" was ",t(k.emi)]})]})]}),n.jsxs("div",{style:E.cmpRow,children:[n.jsx("span",{style:E.cmpLbl,children:"New tenure"}),n.jsxs("span",{style:E.cmpVal,children:[mc(T.newMonths)," ",n.jsxs("span",{style:E.cmpWas,children:["· paid off ",Ky(T.newMonths)]})]})]}),n.jsxs("div",{style:E.cmpRow,children:[n.jsx("span",{style:E.cmpLbl,children:"Total interest"}),n.jsx("span",{style:E.cmpVal,children:t(T.newInterest)})]}),n.jsxs("div",{style:E.cmpRow,children:[n.jsx("span",{style:E.cmpLbl,children:"Total payable"}),n.jsx("span",{style:E.cmpVal,children:t(T.totalPaid)})]}),n.jsxs("div",{style:E.saveRow,children:["You save ",t(T.interestSaved)," in interest",T.monthsSaved>0?` · ${mc(T.monthsSaved)} sooner`:""]})]}):n.jsx("div",{style:E.muted,children:"Enter a prepayment amount to see the impact."})]})}function fi({label:t,on:e,onClick:r,disabled:o}){return n.jsx("button",{onClick:o?void 0:r,disabled:o,style:{...E.seg,...e?E.segOn:{},...o?E.segDisabled:{}},children:t})}const E={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},tabs:{display:"flex",gap:7,marginBottom:18,flexWrap:"wrap"},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:10,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},presetRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},preset:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:18,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},presetOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},sumGrid:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:16},sumCard:{background:"var(--surface)",borderRadius:14,padding:"14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},sumIcon:{width:30,height:30,borderRadius:9,display:"grid",placeItems:"center",marginBottom:8},sumLabel:{fontSize:11.5,color:"var(--text-3)",fontWeight:600},sumVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:2,letterSpacing:"-0.01em",wordBreak:"break-word"},card:{background:"var(--surface)",borderRadius:16,padding:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)",marginBottom:16},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14,gap:10},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardSub:{fontSize:11.5,color:"var(--text-3)",marginTop:2},cardTotal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"14px 0"},twoCol:{display:"grid",gridTemplateColumns:"1fr",gap:0},dot:{width:10,height:10,borderRadius:3,flexShrink:0},pieWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap"},pieChart:{position:"relative",width:132,height:132,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:80,height:80,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:160,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8},legendName:{flex:1,fontSize:12.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},legendPct:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,width:34,textAlign:"right"},legendAmt:{fontSize:12.5,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:64,textAlign:"right"},healthScore:{fontSize:32,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1},healthStatus:{fontSize:12.5,fontWeight:700,marginTop:2},gaugeTrack:{height:10,background:"var(--surface-2)",borderRadius:6,overflow:"hidden",marginBottom:14},gaugeFill:{height:"100%",borderRadius:6,transition:"width 0.4s"},healthStats:{display:"flex",gap:24,marginBottom:12},healthStat:{display:"flex",flexDirection:"column"},healthStatV:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},healthStatL:{fontSize:11,color:"var(--text-3)",fontWeight:600},tip:{fontSize:12.5,lineHeight:1.5,padding:"10px 12px",borderRadius:10,border:"1px solid",fontWeight:500},kindToggle:{display:"flex",gap:8,marginBottom:12},kindBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},formGrid:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8},input:{border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},addBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",marginTop:10,border:"none",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},dateHead:{fontSize:11,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8},txnRow:{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid var(--border)"},txnDot:{width:9,height:9,borderRadius:"50%",flexShrink:0},txnCat:{fontSize:13.5,fontWeight:600},txnNote:{fontSize:11.5,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},txnAmt:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},delBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",flexShrink:0},editTxn:{background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:12,padding:12,margin:"6px 0"},editCancel:{display:"flex",alignItems:"center",justifyContent:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},field:{marginBottom:16},fieldTop:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},fieldLabel:{fontSize:13,fontWeight:600,color:"var(--text-2)"},fieldInputWrap:{display:"flex",alignItems:"center",gap:4,border:"1px solid var(--border)",borderRadius:8,padding:"5px 10px",background:"var(--surface-2)"},fieldInput:{border:"none",background:"none",outline:"none",width:90,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},fieldSuffix:{fontSize:12,color:"var(--text-3)",fontWeight:600},range:{width:"100%",accentColor:"var(--accent)",cursor:"pointer"},resultHero:{textAlign:"center",padding:"14px 0 6px"},resultLabel:{fontSize:12,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em"},resultVal:{fontSize:34,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:2,wordBreak:"break-word"},splitRow:{display:"flex",gap:10,marginTop:10},splitItem:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",background:"var(--surface-2)",borderRadius:10,padding:"10px 6px"},splitV:{fontSize:14.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",wordBreak:"break-word"},splitL:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginTop:2},chartWrap:{marginTop:18},chartBars:{display:"flex",alignItems:"flex-end",gap:3,height:90},chartCol:{flex:1,height:"100%",display:"flex",alignItems:"flex-end"},chartStack:{width:"100%",background:"#9DBFD6",borderRadius:"3px 3px 0 0",minHeight:2,position:"relative",display:"flex",flexDirection:"column",justifyContent:"flex-start"},chartGain:{width:"100%",background:"#3E9E6B",borderRadius:"3px 3px 0 0"},chartAxis:{display:"flex",fontSize:10,color:"var(--text-3)",fontWeight:600,marginTop:6},legend:{display:"flex",gap:16,justifyContent:"center",marginTop:10},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)",fontWeight:600},legendDot:{width:10,height:10,borderRadius:3},emiSplitTrack:{display:"flex",height:12,borderRadius:6,overflow:"hidden",marginTop:16,border:"1px solid var(--border)"},subDivider:{height:1,background:"var(--border)",margin:"20px 0 14px"},subTitle:{fontSize:15,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},segGroup:{marginBottom:12},segLbl:{fontSize:12,fontWeight:600,color:"var(--text-3)",display:"block",marginBottom:6},segRow:{display:"flex",gap:8},seg:{flex:1,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},segOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},segDisabled:{opacity:.4,cursor:"not-allowed"},note:{fontSize:12,lineHeight:1.5,color:"var(--text-3)",background:"var(--surface-2)",borderRadius:9,padding:"9px 11px",marginBottom:12},cmpCard:{background:"var(--surface-2)",borderRadius:12,padding:"12px 14px",marginTop:4},cmpRow:{display:"flex",justifyContent:"space-between",alignItems:"baseline",padding:"6px 0",borderBottom:"1px solid var(--border)",gap:10},cmpLbl:{fontSize:12.5,color:"var(--text-2)",fontWeight:600},cmpVal:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",textAlign:"right"},cmpWas:{fontSize:11,color:"var(--text-3)",fontWeight:500,fontFamily:"'Inter',system-ui,sans-serif"},saveRow:{marginTop:12,background:"rgba(62,158,107,0.12)",color:"#3E9E6B",borderRadius:9,padding:"10px 12px",fontSize:13,fontWeight:700,textAlign:"center"}},va=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],ul={Monday:"Mon",Tuesday:"Tue",Wednesday:"Wed",Thursday:"Thu",Friday:"Fri",Saturday:"Sat",Sunday:"Sun"},no=()=>va[(new Date().getDay()+6)%7],Ke={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"},fc=Object.keys(Ke),bl=21,hc="kickstart_tags",pl=t=>{if(!t)return"";const e=t.trim();if(/^[A-Za-z0-9_-]{11}$/.test(e))return e;const r=e.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return r?r[1]:""},yc=t=>{if(!t||!String(t).trim())return null;const e=String(t).split(":").map(r=>parseInt(r.trim(),10));return e.some(r=>isNaN(r)||r<0)?null:e.reduce((r,o)=>r*60+o,0)},hi=t=>{if(t==null)return"";const e=Math.max(0,t|0);return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`},Jy=t=>`https://www.youtube.com/embed/${t.youtube_id}?start=${t.start_sec||0}`+(t.end_sec?`&end=${t.end_sec}`:"")+"&autoplay=1&rel=0",qy=()=>({id:null,url:"",title:"",start:"",end:"",days:[no()],pillars:[],customs:[]});function Zy(){const[t,e]=p.useState([]),[r,o]=p.useState([]),[i,s]=p.useState(!1),[l,a]=p.useState({type:"day",value:no()}),[d,g]=p.useState(null),[f,y]=p.useState(null),[m,S]=p.useState(""),k=p.useCallback(async()=>{try{const[w,O]=await Promise.all([H.getKickstart(),H.getSetting(hc)]);e(w),o(Array.isArray(O==null?void 0:O.value)?O.value:[])}catch{}s(!0)},[]);p.useEffect(()=>{k()},[k]);const{deleteItem:C,toasts:T,handleUndo:b,handleDismiss:c}=tn(H.deleteKickstart,H.restoreKickstart,k),u=w=>{o(w),H.setSetting(hc,w).catch(()=>{})},x=()=>{const w=m.trim();!w||r.length>=bl||r.includes(w)||(u([...r,w]),g(O=>O&&!O.customs.includes(w)?{...O,customs:[...O.customs,w]}:O),S(""))},v=w=>u(r.filter(O=>O!==w)),z=(w,O)=>g(st=>({...st,[w]:st[w].includes(O)?st[w].filter(q=>q!==O):[...st[w],O]})),_=w=>g({id:w.id,url:`https://youtu.be/${w.youtube_id}`,title:w.title,start:hi(w.start_sec),end:w.end_sec?hi(w.end_sec):"",days:[...w.days],pillars:[...w.pillars],customs:[...w.customs]}),L=async()=>{const w=pl(d.url);if(!w||d.days.length===0||!d.title.trim())return;const O={youtube_id:w,title:d.title.trim(),start_sec:yc(d.start)||0,end_sec:yc(d.end),days:d.days,pillars:d.pillars,customs:d.customs};d.id?await H.updateKickstart(d.id,O):await H.createKickstart(O),g(null),k()},F=p.useMemo(()=>t.filter(w=>l.type==="all"?!0:l.type==="day"?w.days.includes(l.value):l.type==="pillar"?w.pillars.includes(l.value):l.type==="custom"?w.customs.includes(l.value):!0),[t,l]),P=(w,O)=>l.type===w&&l.value===O,I=d?[!pl(d.url)&&"a valid YouTube link",!d.title.trim()&&"a title",d.days.length===0&&"at least one day"].filter(Boolean):[],D=!!d&&I.length===0;return n.jsxs("div",{style:X.page,children:[n.jsxs("div",{style:X.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:X.eyebrow,children:"Anvil · Kickstart"}),n.jsx("h1",{style:X.h1,children:"Kickstart"}),n.jsxs("div",{style:X.subhead,children:["Your motivation hub — the right push for ",no(),"."]})]}),!d&&n.jsxs("button",{onClick:()=>g(qy()),style:X.addBtn,children:[n.jsx(ne,{size:15})," Add video"]})]}),d&&n.jsxs("div",{style:X.card,children:[n.jsx("div",{style:X.cardTitle,children:d.id?"Edit video":"Add video"}),n.jsx("input",{placeholder:"YouTube link (or video ID)",value:d.url,onChange:w=>g({...d,url:w.target.value}),style:X.input,autoFocus:!0}),d.url&&!pl(d.url)&&n.jsx("div",{style:X.warn,children:"Couldn't find a YouTube video ID in that link."}),n.jsx("input",{placeholder:"Title (required)",value:d.title,onChange:w=>g({...d,title:w.target.value}),style:{...X.input,marginTop:8}}),n.jsxs("div",{style:X.trimRow,children:[n.jsx(fh,{size:15,color:"var(--text-3)"}),n.jsxs("label",{style:X.trimField,children:[n.jsx("span",{style:X.trimLbl,children:"Start"}),n.jsx("input",{placeholder:"0:30",value:d.start,onChange:w=>g({...d,start:w.target.value}),style:X.trimInput})]}),n.jsx("span",{style:X.trimArrow,children:"→"}),n.jsxs("label",{style:X.trimField,children:[n.jsx("span",{style:X.trimLbl,children:"End"}),n.jsx("input",{placeholder:"end (optional)",value:d.end,onChange:w=>g({...d,end:w.target.value}),style:X.trimInput})]})]}),n.jsx("div",{style:X.hint,children:"Only this trimmed part plays. Use m:ss (e.g. 1:30). Leave End blank to play to the end."}),n.jsxs("div",{style:X.tagBlock,children:[n.jsxs("div",{style:X.tagLabel,children:["Days ",n.jsx("span",{style:X.req,children:"required"})]}),n.jsx("div",{style:X.chipRow,children:va.map(w=>n.jsx("button",{onClick:()=>z("days",w),style:{...X.chip,...d.days.includes(w)?X.chipOnDark:{}},children:ul[w]},w))})]}),n.jsxs("div",{style:X.tagBlock,children:[n.jsxs("div",{style:X.tagLabel,children:["Pillars ",n.jsx("span",{style:X.opt,children:"optional"})]}),n.jsx("div",{style:X.chipRow,children:fc.map(w=>{const O=d.pillars.includes(w);return n.jsxs("button",{onClick:()=>z("pillars",w),style:{...X.chip,...O?{background:Ke[w],color:"#fff",borderColor:Ke[w]}:{}},children:[n.jsx("span",{style:{...X.dot,background:O?"#fff":Ke[w]}}),w]},w)})})]}),n.jsxs("div",{style:X.tagBlock,children:[n.jsxs("div",{style:X.tagLabel,children:["Custom tags ",n.jsxs("span",{style:X.opt,children:["optional · ",r.length,"/",bl]})]}),n.jsxs("div",{style:X.chipRow,children:[r.map(w=>n.jsxs("span",{style:{...X.chip,...d.customs.includes(w)?X.chipOnAccent:{},paddingRight:4},children:[n.jsx("button",{onClick:()=>z("customs",w),style:X.chipInner,children:w}),n.jsx("button",{onClick:()=>v(w),style:X.chipX,title:"Delete tag",children:n.jsx(vt,{size:11})})]},w)),r.length===0&&n.jsx("span",{style:X.muted,children:"No custom tags yet."})]}),r.length<bl&&n.jsxs("div",{style:X.newTagRow,children:[n.jsx("input",{placeholder:"New custom tag…",value:m,onChange:w=>S(w.target.value),onKeyDown:w=>w.key==="Enter"&&x(),style:{...X.input,padding:"7px 10px"}}),n.jsx("button",{onClick:x,style:X.smallBtn,children:n.jsx(ne,{size:14})})]})]}),!D&&n.jsxs("div",{style:X.warn,children:["Add ",I.join(", ")," to save."]}),n.jsxs("div",{style:X.formActions,children:[n.jsxs("button",{onClick:()=>g(null),style:X.cancelBtn,children:[n.jsx(vt,{size:14})," Cancel"]}),n.jsxs("button",{onClick:L,disabled:!D,style:{...X.saveBtn,...D?{}:X.saveDisabled},children:[n.jsx(jt,{size:15})," ",d.id?"Save":"Add video"]})]})]}),n.jsxs("div",{style:X.filterCard,children:[n.jsx("button",{onClick:()=>a({type:"all"}),style:{...X.fChip,...l.type==="all"?X.fChipOnDark:{}},children:"All"}),n.jsx("span",{style:X.fDivider}),va.map(w=>n.jsxs("button",{onClick:()=>a({type:"day",value:w}),style:{...X.fChip,...P("day",w)?X.fChipOnDark:{},...w===no()?X.fToday:{}},children:[ul[w],w===no()?" ·":""]},w)),n.jsx("span",{style:X.fDivider}),fc.map(w=>n.jsxs("button",{onClick:()=>a({type:"pillar",value:w}),style:{...X.fChip,...P("pillar",w)?{background:Ke[w],color:"#fff",borderColor:Ke[w]}:{}},children:[n.jsx("span",{style:{...X.dot,background:P("pillar",w)?"#fff":Ke[w]}}),w]},w)),r.length>0&&n.jsx("span",{style:X.fDivider}),r.map(w=>n.jsxs("button",{onClick:()=>a({type:"custom",value:w}),style:{...X.fChip,...P("custom",w)?X.fChipOnAccent:{}},children:[n.jsx(vh,{size:11})," ",w]},w))]}),i?F.length===0?n.jsx("div",{style:X.empty,children:t.length===0?"No videos yet — add your first motivation clip.":"No videos for this tag."}):n.jsx("div",{style:X.grid,children:F.map(w=>n.jsxs("div",{style:X.videoCard,children:[n.jsx("div",{style:X.thumbWrap,children:f===w.id?n.jsx("iframe",{src:Jy(w),title:w.title||w.youtube_id,style:X.iframe,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):n.jsxs("button",{onClick:()=>y(w.id),style:X.thumbBtn,children:[n.jsx("img",{src:`https://img.youtube.com/vi/${w.youtube_id}/hqdefault.jpg`,alt:"",style:X.thumb}),n.jsx("span",{style:X.playOverlay,children:n.jsx(Kb,{size:22,color:"#fff",fill:"#fff"})}),n.jsxs("span",{style:X.trimBadge,children:[hi(w.start_sec),w.end_sec?` – ${hi(w.end_sec)}`:"+"]})]})}),n.jsxs("div",{style:X.videoBody,children:[n.jsx("div",{style:X.videoTitle,children:w.title||"Untitled clip"}),n.jsxs("div",{style:X.tagWrap,children:[w.days.map(O=>n.jsx("span",{style:X.dayTag,children:ul[O]},O)),w.pillars.map(O=>n.jsx("span",{style:{...X.pillTag,color:Ke[O]||"var(--text-2)",borderColor:Ke[O]||"var(--border)"},children:O},O)),w.customs.map(O=>n.jsx("span",{style:X.customTag,children:O},O))]}),n.jsxs("div",{style:X.cardActions,children:[n.jsx("button",{onClick:()=>_(w),style:X.iconBtn,title:"Edit",children:n.jsx(me,{size:13})}),n.jsx("button",{onClick:()=>C(w.id,w.title||"video"),style:X.iconBtn,title:"Delete",children:n.jsx(vt,{size:14})})]})]})]},w.id))}):n.jsx("div",{style:X.muted,children:"Loading…"}),n.jsx(en,{toasts:T,onUndo:b,onDismiss:c})]})}const X={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:1e3,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},input:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},warn:{fontSize:11.5,color:"#C2773B",marginTop:5,fontWeight:600},hint:{fontSize:11.5,color:"var(--text-3)",marginTop:6,lineHeight:1.4},trimRow:{display:"flex",alignItems:"flex-end",gap:10,marginTop:10},trimField:{display:"flex",flexDirection:"column",gap:4,flex:1},trimLbl:{fontSize:11,color:"var(--text-2)",fontWeight:600},trimInput:{border:"1px solid var(--border)",borderRadius:8,padding:"8px 10px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},trimArrow:{color:"var(--text-3)",paddingBottom:9},tagBlock:{marginTop:14},tagLabel:{fontSize:12,fontWeight:700,color:"var(--text-2)",marginBottom:7},req:{fontSize:10,fontWeight:700,color:"#C2536B",textTransform:"uppercase",marginLeft:6},opt:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",marginLeft:6},chipRow:{display:"flex",gap:6,flexWrap:"wrap"},chip:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},chipOnDark:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},chipOnAccent:{background:"var(--accent)",color:"#fff",borderColor:"var(--accent)"},chipInner:{border:"none",background:"none",color:"inherit",cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:600,padding:0},chipX:{border:"none",background:"rgba(0,0,0,0.12)",color:"inherit",cursor:"pointer",display:"grid",placeItems:"center",borderRadius:"50%",width:16,height:16,padding:0},newTagRow:{display:"flex",gap:6,marginTop:8,maxWidth:280},smallBtn:{border:"none",background:"var(--accent)",color:"#fff",width:34,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},dot:{width:8,height:8,borderRadius:"50%",flexShrink:0,display:"inline-block"},formActions:{display:"flex",gap:8,marginTop:16},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:"var(--accent)",color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"},filterCard:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:12,marginBottom:18},fChip:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},fChipOnDark:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},fChipOnAccent:{background:"var(--accent)",color:"#fff",borderColor:"var(--accent)"},fToday:{borderColor:"var(--accent)",borderWidth:2},fDivider:{width:1,alignSelf:"stretch",background:"var(--border)",margin:"0 2px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:14},videoCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},thumbWrap:{position:"relative",width:"100%",aspectRatio:"16 / 9",background:"#000"},thumbBtn:{border:"none",padding:0,margin:0,cursor:"pointer",width:"100%",height:"100%",position:"relative",display:"block",background:"#000"},thumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},playOverlay:{position:"absolute",inset:0,display:"grid",placeItems:"center",background:"rgba(0,0,0,0.28)"},trimBadge:{position:"absolute",bottom:8,right:8,background:"rgba(0,0,0,0.75)",color:"#fff",fontSize:11,fontWeight:700,padding:"2px 7px",borderRadius:6,fontFamily:"'Fraunces',Georgia,serif"},iframe:{width:"100%",height:"100%",border:"none",display:"block"},videoBody:{padding:"12px 13px",display:"flex",flexDirection:"column",gap:8},videoTitle:{fontSize:14,fontWeight:700},tagWrap:{display:"flex",gap:5,flexWrap:"wrap"},dayTag:{fontSize:10,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",padding:"2px 7px",borderRadius:8},pillTag:{fontSize:10,fontWeight:700,border:"1px solid",borderRadius:8,padding:"2px 7px"},customTag:{fontSize:10,fontWeight:700,color:"var(--accent)",background:"color-mix(in srgb, var(--accent) 14%, transparent)",padding:"2px 7px",borderRadius:8},cardActions:{display:"flex",gap:4,justifyContent:"flex-end"},iconBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"}},dp=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,vc=()=>dp(new Date),xc=(t,e)=>{const r=new Date(t+"T00:00:00");return r.setDate(r.getDate()+e),dp(r)},kc=t=>new Date(t+"T00:00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",year:"numeric"}),tv=t=>{if(!t)return"";const e=t.trim();if(/^[A-Za-z0-9_-]{11}$/.test(e))return e;const r=e.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return r?r[1]:""},ev=t=>new Promise((e,r)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:l,height:a}=i;l>a&&l>900?(a=a*900/l,l=900):a>900&&(l=l*900/a,a=900);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(i,0,0,l,a),e(d.toDataURL("image/jpeg",.82))},i.onerror=r,i.src=o.result},o.onerror=r,o.readAsDataURL(t)});function rv(){const[t,e]=p.useState([]),[r,o]=p.useState(!1),[i,s]=p.useState(null),[l,a]=p.useState(!1),[d,g]=p.useState({title:"",image:""}),[f,y]=p.useState(""),[m,S]=p.useState(!0),[k,C]=p.useState(null),T=p.useCallback(async()=>{try{e(await H.getGoldenGoals())}catch{}o(!0)},[]);p.useEffect(()=>{T()},[T]),p.useEffect(()=>{H.getSetting("golden_music").then(v=>y(tv((v==null?void 0:v.value)||""))).catch(()=>{})},[]);const b=async()=>{if(!d.title.trim())return;const v=await H.createGolden({title:d.title.trim(),image:d.image});g({title:"",image:""}),a(!1),await T(),s(v.id)},c=async(v,z)=>{var L;const _=(L=v.target.files)==null?void 0:L[0];if(_)try{z(await ev(_))}catch{}},u=t.filter(v=>!v.achieved),x=t.filter(v=>v.achieved);return i?n.jsxs("div",{style:J.page,children:[n.jsx(iv,{musicId:f,on:m}),n.jsx(nv,{goalId:i,onBack:()=>s(null),onReload:T,onCelebrate:(v,z)=>C({title:v,days:z}),pickImage:c,musicId:f,musicOn:m,setMusicOn:S}),k&&n.jsx(ov,{data:k,onClose:()=>C(null)})]}):n.jsxs("div",{style:J.page,children:[n.jsxs("div",{style:J.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:J.eyebrow,children:"Anvil · Golden Book"}),n.jsx("h1",{style:J.h1,children:"Golden Book"}),n.jsx("div",{style:J.subhead,children:"Write your dreams into being — a little every day."})]}),!l&&n.jsxs("button",{onClick:()=>a(!0),style:J.addBtn,children:[n.jsx(ne,{size:15})," New dream"]})]}),l&&n.jsxs("div",{style:J.card,children:[n.jsx("div",{style:J.cardTitle,children:"Manifest a new dream"}),n.jsx("textarea",{autoFocus:!0,placeholder:"Write your dream as if it's already true…",value:d.title,onChange:v=>g({...d,title:v.target.value}),style:J.textarea}),n.jsxs("label",{style:J.photoPick,children:[d.image?n.jsx("img",{src:d.image,alt:"",style:J.photoPreview}):n.jsxs("span",{style:J.photoEmpty,children:[n.jsx(js,{size:18})," Add a photo"]}),n.jsx("input",{type:"file",accept:"image/*",onChange:v=>c(v,z=>g({...d,image:z})),style:{display:"none"}})]}),n.jsxs("div",{style:J.formActions,children:[n.jsxs("button",{onClick:()=>{a(!1),g({title:"",image:""})},style:J.cancelBtn,children:[n.jsx(vt,{size:14})," Cancel"]}),n.jsxs("button",{onClick:b,disabled:!d.title.trim(),style:{...J.saveBtn,...d.title.trim()?{}:J.saveDisabled},children:[n.jsx(jt,{size:15})," Create"]})]})]}),r?n.jsxs(n.Fragment,{children:[u.length===0&&x.length===0&&!l&&n.jsx("div",{style:J.empty,children:"No dreams yet. Add your first one and revisit it daily."}),u.length>0&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:J.sectionTitle,children:[n.jsx(No,{size:15,color:"#C9A227"})," Manifesting ",n.jsx("span",{style:J.badge,children:u.length})]}),n.jsx("div",{style:J.grid,children:u.map(v=>n.jsx(wc,{g:v,onOpen:()=>s(v.id)},v.id))})]}),x.length>0&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{...J.sectionTitle,marginTop:22},children:[n.jsx(Kr,{size:15,color:"#4C9A6B"})," Manifested ",n.jsx("span",{style:J.badge,children:x.length})]}),n.jsx("div",{style:J.grid,children:x.map(v=>n.jsx(wc,{g:v,onOpen:()=>s(v.id),achieved:!0},v.id))})]})]}):n.jsx("div",{style:J.muted,children:"Loading…"})]})}function wc({g:t,onOpen:e,achieved:r}){return n.jsxs("button",{onClick:e,style:{...J.goalCard,...r?{opacity:.96}:{}},children:[n.jsxs("div",{style:J.thumbWrap,children:[t.image?n.jsx("img",{src:t.image,alt:"",style:J.thumb}):n.jsx("div",{style:J.thumbEmpty,children:n.jsx(No,{size:26,color:"var(--text-3)"})}),r&&n.jsx("span",{style:J.stamp,children:"✦ Manifested"})]}),n.jsxs("div",{style:J.goalBody,children:[n.jsx("div",{style:J.goalTitle,children:t.title}),n.jsxs("div",{style:J.goalMeta,children:[r?n.jsxs("span",{style:{...J.metaPill,color:"#4C9A6B",background:"rgba(76,154,107,0.12)"},children:[n.jsx(Kr,{size:12})," ",t.days_to_manifest!=null?`in ${t.days_to_manifest} day${t.days_to_manifest===1?"":"s"}`:"done"]}):n.jsxs("span",{style:{...J.metaPill,color:"#C2773B",background:"rgba(194,119,59,0.12)"},children:[n.jsx(Nn,{size:12})," ",t.streak," day streak"]}),n.jsxs("span",{style:J.metaDim,children:[t.total_days," entr",t.total_days===1?"y":"ies"]})]})]})]})}function nv({goalId:t,onBack:e,onReload:r,onCelebrate:o,pickImage:i,musicId:s,musicOn:l,setMusicOn:a}){const[d,g]=p.useState(null),[f,y]=p.useState({}),[m,S]=p.useState(vc()),[k,C]=p.useState(""),[T,b]=p.useState(null),c=vc(),u=p.useCallback(async()=>{const D=await H.getGoldenGoal(t);g(D);const w={};D.entries.forEach(O=>{w[O.date]=O.text}),y(w),C(w[c]||"")},[t,c]);if(p.useEffect(()=>{u()},[u]),!d)return n.jsx("div",{style:J.muted,children:"Loading…"});const x=m===c,v=m>d.created_date,z=m<c,_=async()=>{await H.upsertGoldenEntry(t,{date:c,text:k}),await u(),r()},L=async()=>{const D=await H.achieveGolden(t);o(d.title,D.days_to_manifest),await u(),r()},F=async()=>{await H.unachieveGolden(t),await u(),r()},P=async()=>{T.trim()&&(await H.updateGolden(t,{title:T.trim()}),b(null),await u(),r())},I=D=>H.updateGolden(t,{image:D}).then(()=>{u(),r()});return n.jsxs(n.Fragment,{children:[n.jsxs("button",{onClick:e,style:J.backBtn,children:[n.jsx($b,{size:16})," All dreams"]}),n.jsxs("div",{style:J.detailHero,children:[n.jsxs("label",{style:J.heroPhoto,children:[d.image?n.jsx("img",{src:d.image,alt:"",style:J.heroImg}):n.jsxs("span",{style:J.photoEmpty,children:[n.jsx(js,{size:20})," Add a photo"]}),n.jsxs("span",{style:J.photoEdit,children:[n.jsx(me,{size:12})," Edit photo"]}),n.jsx("input",{type:"file",accept:"image/*",onChange:D=>i(D,I),style:{display:"none"}})]}),n.jsxs("div",{style:J.heroInfo,children:[d.achieved&&n.jsxs("span",{style:J.heroStamp,children:["✦ Manifested",d.days_to_manifest!=null?` in ${d.days_to_manifest} day${d.days_to_manifest===1?"":"s"}`:""]}),T!==null?n.jsxs("div",{style:{display:"flex",gap:6,width:"100%"},children:[n.jsx("textarea",{autoFocus:!0,value:T,onChange:D=>b(D.target.value),style:{...J.textarea,minHeight:60}}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[n.jsx("button",{onClick:P,style:J.iconSave,children:n.jsx(jt,{size:14})}),n.jsx("button",{onClick:()=>b(null),style:J.iconCancel,children:n.jsx(vt,{size:14})})]})]}):n.jsxs("div",{style:J.heroTitleRow,children:[n.jsx("div",{style:J.heroTitle,children:d.title}),n.jsx("button",{onClick:()=>b(d.title),style:J.ghostBtn,title:"Edit",children:n.jsx(me,{size:13})})]}),n.jsxs("div",{style:J.heroStats,children:[n.jsxs("span",{style:{...J.metaPill,color:"#C2773B",background:"rgba(194,119,59,0.12)"},children:[n.jsx(Nn,{size:13})," ",d.streak," day streak"]}),n.jsxs("span",{style:J.metaDim,children:[d.total_days," entr",d.total_days===1?"y":"ies"]}),n.jsxs("span",{style:J.metaDim,children:["since ",kc(d.created_date)]})]})]})]}),n.jsxs("div",{style:J.writeCard,children:[n.jsx("div",{style:J.tuneRow,children:s?n.jsxs("button",{onClick:()=>a(D=>!D),style:{...J.tuneBtn,...l?J.tuneOn:{}},children:[l?n.jsx(Yb,{size:14}):n.jsx(Qb,{size:14})," Soft tunes"]}):n.jsx("span",{style:J.tuneHint,children:"Add a track in Settings → Music"})}),n.jsxs("div",{style:J.writeNav,children:[n.jsx("button",{onClick:()=>S(D=>xc(D,-1)),disabled:!v,style:{...J.navBtn,...v?{}:J.navDisabled},children:n.jsx($n,{size:16})}),n.jsx("div",{style:J.writeDate,children:x?"Today":kc(m)}),n.jsx("button",{onClick:()=>S(D=>xc(D,1)),disabled:!z,style:{...J.navBtn,...z?{}:J.navDisabled},children:n.jsx(Zr,{size:16})})]}),x&&!d.achieved?n.jsxs(n.Fragment,{children:[n.jsx("textarea",{value:k,onChange:D=>C(D.target.value),placeholder:"Write it again today, as if it's already yours…",style:J.writeArea}),n.jsxs("button",{onClick:_,style:J.writeSave,children:[n.jsx(jt,{size:15})," Save today's entry"]})]}):n.jsx("div",{style:J.readEntry,children:f[m]?n.jsxs(n.Fragment,{children:[n.jsx(Xb,{size:16,color:"var(--text-3)"}),n.jsx("p",{style:J.readText,children:f[m]})]}):n.jsx("div",{style:J.muted,children:"Nothing written on this day."})})]}),d.achieved?n.jsx("button",{onClick:F,style:J.unmanifestBtn,children:"Undo manifested"}):n.jsxs("button",{onClick:L,style:J.manifestBtn,children:[n.jsx(No,{size:16})," Mark as manifested"]})]})}function ov({data:t,onClose:e}){return n.jsx("div",{style:J.celebOverlay,onClick:e,children:n.jsxs("div",{style:J.celebBox,onClick:r=>r.stopPropagation(),children:[n.jsx("div",{style:J.celebEmoji,children:"✨🌟✨"}),n.jsx("div",{style:J.celebTitle,children:"It's happening!"}),n.jsxs("div",{style:J.celebDream,children:['"',t.title,'"']}),n.jsxs("div",{style:J.celebSub,children:[t.days!=null?`Manifested in ${t.days} day${t.days===1?"":"s"}.`:"Manifested."," The universe delivered. 🙏"]}),n.jsx("button",{onClick:e,style:J.celebBtn,children:"Wonderful"})]})})}function iv({musicId:t,on:e}){return!t||!e?null:n.jsx("iframe",{title:"golden-music",src:`https://www.youtube.com/embed/${t}?autoplay=1&loop=1&playlist=${t}&controls=0&modestbranding=1&playsinline=1`,allow:"autoplay; encrypted-media",style:{position:"fixed",left:-1e4,top:0,width:320,height:180,border:"none"}})}const Fr="#C9A227",J={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:860,margin:"0 auto",position:"relative"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:Fr,color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},textarea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"11px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:70,resize:"vertical",lineHeight:1.5},photoPick:{display:"block",marginTop:10,cursor:"pointer",borderRadius:12,overflow:"hidden",border:"1px dashed var(--border)"},photoPreview:{width:"100%",maxHeight:220,objectFit:"cover",display:"block"},photoEmpty:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"26px 0",color:"var(--text-3)",fontSize:13,fontWeight:600},formActions:{display:"flex",gap:8,marginTop:14},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:Fr,color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:12},badge:{fontSize:11,fontWeight:700,background:"var(--hover)",color:"var(--text-2)",borderRadius:10,padding:"1px 7px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:14},goalCard:{textAlign:"left",border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,overflow:"hidden",cursor:"pointer",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",padding:0,fontFamily:"inherit",display:"flex",flexDirection:"column"},thumbWrap:{position:"relative",width:"100%",aspectRatio:"16 / 10",background:"var(--surface-2)"},thumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},thumbEmpty:{width:"100%",height:"100%",display:"grid",placeItems:"center"},stamp:{position:"absolute",top:8,right:8,transform:"rotate(6deg)",background:"rgba(76,154,107,0.95)",color:"#fff",fontSize:11,fontWeight:800,letterSpacing:"0.04em",padding:"3px 9px",borderRadius:6,border:"1.5px solid #fff",textTransform:"uppercase"},goalBody:{padding:"11px 13px",display:"flex",flexDirection:"column",gap:8},goalTitle:{fontSize:14,fontWeight:600,lineHeight:1.35,display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"},goalMeta:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},metaPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11.5,fontWeight:700,padding:"2px 8px",borderRadius:10},metaDim:{fontSize:11,color:"var(--text-3)",fontWeight:500},backBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit",marginBottom:16},detailHero:{display:"flex",flexDirection:"column",gap:14,marginBottom:16},heroPhoto:{position:"relative",width:"100%",borderRadius:14,overflow:"hidden",border:"1px solid var(--border)",cursor:"pointer",background:"var(--surface-2)",display:"flex",alignItems:"center",justifyContent:"center",minHeight:120},heroImg:{width:"100%",maxHeight:"62vh",objectFit:"contain",display:"block"},photoEdit:{position:"absolute",bottom:8,right:8,display:"flex",alignItems:"center",gap:5,background:"rgba(0,0,0,0.6)",color:"#fff",fontSize:11,fontWeight:600,padding:"4px 8px",borderRadius:7},heroInfo:{display:"flex",flexDirection:"column",gap:10,alignItems:"center",textAlign:"center"},heroStamp:{alignSelf:"center",background:"rgba(76,154,107,0.14)",color:"#4C9A6B",fontSize:12,fontWeight:800,padding:"4px 10px",borderRadius:8,letterSpacing:"0.03em"},heroTitleRow:{display:"flex",alignItems:"flex-start",gap:8,justifyContent:"center"},heroTitle:{fontSize:23,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.35},heroStats:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap",justifyContent:"center"},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",flexShrink:0},iconSave:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},iconCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},writeCard:{background:"var(--surface)",borderRadius:14,padding:16,border:"1px solid var(--border)",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},tuneRow:{display:"flex",justifyContent:"flex-end",marginBottom:10},tuneBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 12px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tuneOn:{background:Fr,color:"#fff",borderColor:Fr},tuneHint:{fontSize:11,color:"var(--text-3)",fontWeight:500},writeNav:{display:"flex",alignItems:"center",justifyContent:"center",gap:14,marginBottom:12},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center"},navDisabled:{opacity:.35,cursor:"not-allowed"},writeDate:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:150,textAlign:"center"},writeArea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"12px",fontSize:15,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:120,resize:"vertical",lineHeight:1.6},writeSave:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",marginTop:10,border:"none",background:Fr,color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},readEntry:{display:"flex",gap:8,padding:"6px 2px"},readText:{fontSize:15,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.6,margin:0,whiteSpace:"pre-wrap"},manifestBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,width:"100%",border:"none",background:"linear-gradient(135deg,#C9A227,#E0BD45)",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:800,cursor:"pointer",fontFamily:"inherit",boxShadow:"0 2px 10px rgba(201,162,39,0.35)"},unmanifestBtn:{display:"block",margin:"0 auto",border:"none",background:"none",color:"var(--text-3)",fontSize:12,fontWeight:600,cursor:"pointer",textDecoration:"underline",fontFamily:"inherit"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.6)",zIndex:200,display:"grid",placeItems:"center",padding:16},celebBox:{background:"var(--surface)",color:"var(--text)",borderRadius:20,padding:"36px 30px",textAlign:"center",maxWidth:360,boxShadow:"0 12px 48px rgba(0,0,0,0.3)"},celebEmoji:{fontSize:40,marginBottom:10},celebTitle:{fontSize:24,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginBottom:10,color:Fr},celebDream:{fontSize:15,fontStyle:"italic",fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.5,marginBottom:10},celebSub:{fontSize:13.5,color:"var(--text-2)",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:Fr,color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},ml=[{id:"meditation",label:"Meditation Hub",icon:Yf,color:"#8268B0"},{id:"visualization",label:"Visualization",icon:rs,color:"#3A7CA5"}],jc=t=>{if(!t)return"";const e=t.trim();if(/^[A-Za-z0-9_-]{11}$/.test(e))return e;const r=e.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return r?r[1]:""},sv=t=>new Promise((e,r)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:l,height:a}=i;l>a&&l>1e3?(a=a*1e3/l,l=1e3):a>1e3&&(l=l*1e3/a,a=1e3);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(i,0,0,l,a),e(d.toDataURL("image/jpeg",.82))},i.onerror=r,i.src=o.result},o.onerror=r,o.readAsDataURL(t)}),lv=t=>({id:null,kind:t,title:"",url:"",image:""});function av(){const[t,e]=p.useState("meditation"),[r,o]=p.useState([]),[i,s]=p.useState(!1),[l,a]=p.useState(null),[d,g]=p.useState(null),f=p.useCallback(async()=>{try{o(await H.getMedia())}catch{}s(!0)},[]);p.useEffect(()=>{f()},[f]);const{deleteItem:y,toasts:m,handleUndo:S,handleDismiss:k}=tn(H.deleteMedia,H.restoreMedia,f),C=ml.find(z=>z.id===t),T=r.filter(z=>z.kind===t),b=z=>a({id:z.id,kind:z.kind,title:z.title,url:`https://youtu.be/${z.youtube_id}`,image:z.image}),c=async z=>{var L;const _=(L=z.target.files)==null?void 0:L[0];if(_){try{const F=await sv(_);a(P=>({...P,image:F}))}catch{}z.target.value=""}},u=l?[!l.title.trim()&&"a title",!l.image&&"an image",!jc(l.url)&&"a valid YouTube link"].filter(Boolean):[],x=!!l&&u.length===0,v=async()=>{if(!x)return;const z={kind:l.kind,title:l.title.trim(),image:l.image,youtube_id:jc(l.url)};l.id?await H.updateMedia(l.id,z):await H.createMedia(z),a(null),f()};return n.jsxs("div",{style:St.page,children:[d&&n.jsx("iframe",{title:"mindscape-audio",src:`https://www.youtube.com/embed/${d.youtube_id}?autoplay=1&controls=0&modestbranding=1&playsinline=1`,allow:"autoplay; encrypted-media",style:{position:"fixed",left:-1e4,top:0,width:320,height:180,border:"none"}}),n.jsxs("div",{style:St.head,children:[n.jsxs("div",{children:[n.jsx("div",{style:St.eyebrow,children:"Anvil · Mindscape"}),n.jsx("h1",{style:St.h1,children:"Mindscape"}),n.jsx("div",{style:St.subhead,children:"Close your eyes and listen — guided meditation and visualization."})]}),!l&&n.jsxs("button",{onClick:()=>a(lv(t)),style:{...St.addBtn,background:C.color},children:[n.jsx(ne,{size:15})," Add"]})]}),n.jsx("div",{style:St.tabs,children:ml.map(z=>{const _=z.icon,L=t===z.id;return n.jsxs("button",{onClick:()=>{e(z.id),a(null)},style:{...St.tab,...L?{background:z.color,color:"#fff",borderColor:z.color}:{}},children:[n.jsx(_,{size:15})," ",z.label]},z.id)})}),l&&n.jsxs("div",{style:St.card,children:[n.jsx("div",{style:St.cardTitle,children:l.id?"Edit":`New ${ml.find(z=>z.id===l.kind).label}`}),n.jsx("input",{placeholder:"YouTube link (plays as audio only)",value:l.url,onChange:z=>a({...l,url:z.target.value}),style:St.input,autoFocus:!0}),n.jsx("input",{placeholder:"Title (required)",value:l.title,onChange:z=>a({...l,title:z.target.value}),style:{...St.input,marginTop:8}}),n.jsxs("label",{style:St.photoPick,children:[l.image?n.jsx("img",{src:l.image,alt:"",style:St.photoPreview}):n.jsxs("span",{style:St.photoEmpty,children:[n.jsx(js,{size:18})," Add cover image (required)"]}),n.jsx("input",{type:"file",accept:"image/*",onChange:c,style:{display:"none"}})]}),!x&&n.jsxs("div",{style:St.warn,children:["Add ",u.join(", ")," to save."]}),n.jsxs("div",{style:St.formActions,children:[n.jsxs("button",{onClick:()=>a(null),style:St.cancelBtn,children:[n.jsx(vt,{size:14})," Cancel"]}),n.jsxs("button",{onClick:v,disabled:!x,style:{...St.saveBtn,background:x?C.color:"var(--border)",color:x?"#fff":"var(--text-3)",cursor:x?"pointer":"not-allowed"},children:[n.jsx(jt,{size:15})," ",l.id?"Save":"Add"]})]})]}),i?T.length===0?n.jsxs("div",{style:St.empty,children:["Nothing here yet — add a ",C.label.toLowerCase()," track."]}):n.jsx("div",{style:St.grid,children:T.map(z=>{const _=(d==null?void 0:d.id)===z.id;return n.jsxs("div",{style:St.mediaCard,children:[n.jsxs("button",{onClick:()=>g(_?null:z),style:St.coverBtn,title:_?"Pause":"Play",children:[n.jsx("img",{src:z.image,alt:"",style:St.cover}),n.jsx("span",{style:{...St.playOverlay,background:_?"rgba(0,0,0,0.45)":"rgba(0,0,0,0.28)"},children:n.jsx("span",{style:{...St.playCircle,background:C.color},children:_?n.jsx(bh,{size:20,color:"#fff",fill:"#fff"}):n.jsx(Kb,{size:20,color:"#fff",fill:"#fff"})})}),_&&n.jsxs("span",{style:St.nowPlaying,children:[n.jsx(Yb,{size:11})," Playing"]})]}),n.jsxs("div",{style:St.mediaBody,children:[n.jsx("div",{style:St.mediaTitle,children:z.title}),n.jsxs("div",{style:St.cardActions,children:[n.jsx("button",{onClick:()=>b(z),style:St.iconBtn,title:"Edit",children:n.jsx(me,{size:13})}),n.jsx("button",{onClick:()=>{(d==null?void 0:d.id)===z.id&&g(null),y(z.id,z.title)},style:St.iconBtn,title:"Delete",children:n.jsx(vt,{size:14})})]})]})]},z.id)})}):n.jsx("div",{style:St.muted,children:"Loading…"}),n.jsx(en,{toasts:m,onUndo:S,onDismiss:k})]})}const St={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:900,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},tabs:{display:"flex",gap:8,marginBottom:18,flexWrap:"wrap"},tab:{display:"flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:20,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none"},photoPick:{display:"block",marginTop:10,cursor:"pointer",borderRadius:12,overflow:"hidden",border:"1px dashed var(--border)"},photoPreview:{width:"100%",maxHeight:200,objectFit:"cover",display:"block"},photoEmpty:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"26px 0",color:"var(--text-3)",fontSize:13,fontWeight:600},warn:{fontSize:12,color:"#C2773B",marginTop:8,fontWeight:600},formActions:{display:"flex",gap:8,marginTop:14},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,fontFamily:"inherit"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gap:16},mediaCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},coverBtn:{position:"relative",border:"none",padding:0,cursor:"pointer",display:"block",width:"100%",aspectRatio:"1",background:"var(--surface-2)"},cover:{width:"100%",height:"100%",objectFit:"cover",display:"block"},playOverlay:{position:"absolute",inset:0,display:"grid",placeItems:"center"},playCircle:{width:46,height:46,borderRadius:"50%",display:"grid",placeItems:"center",boxShadow:"0 2px 10px rgba(0,0,0,0.3)"},nowPlaying:{position:"absolute",bottom:8,left:8,display:"flex",alignItems:"center",gap:4,background:"rgba(0,0,0,0.65)",color:"#fff",fontSize:11,fontWeight:700,padding:"3px 8px",borderRadius:7},mediaBody:{padding:"12px 14px",display:"flex",alignItems:"flex-start",gap:8},mediaTitle:{flex:1,fontSize:14.5,fontWeight:600,lineHeight:1.4,minWidth:0,wordBreak:"break-word"},cardActions:{display:"flex",gap:2,flexShrink:0,marginTop:1},iconBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"}},xa=[{id:"sandstone",name:"Sandstone",description:"Warm editorial light — the original Anvil look.",dark:!1,swatch:["#F7F6F3","#4C9A6B","#26241F"],vars:{"--bg":"#F7F6F3","--surface":"#FFFFFF","--surface-2":"#FAFAF8","--hover":"#F2F1EC","--border":"#ECEAE3","--text":"#26241F","--text-2":"#6B675E","--text-3":"#9A968C","--accent":"#4C9A6B","--accent-strong":"#26241F","--accent-2":"#3A352C"}},{id:"midnight",name:"Midnight",description:"Deep low-glare dark mode for night owls and focus.",dark:!0,swatch:["#161513","#6FB58C","#ECEAE3"],vars:{"--bg":"#161513","--surface":"#211F1C","--surface-2":"#1B1A17","--hover":"#2B2924","--border":"#34312B","--text":"#ECEAE3","--text-2":"#B6B1A6","--text-3":"#8A857A","--accent":"#6FB58C","--accent-strong":"#2E6F4B","--accent-2":"#245C3E"}},{id:"blossom",name:"Blossom",description:"Soft rose & blush — gentle, warm, and feminine.",dark:!1,swatch:["#FFF5F8","#E0608E","#B23A6B"],vars:{"--bg":"#FFF5F8","--surface":"#FFFFFF","--surface-2":"#FFF0F4","--hover":"#FDE7EE","--border":"#F6D9E2","--text":"#3D2230","--text-2":"#7A5466","--text-3":"#B08799","--accent":"#E0608E","--accent-strong":"#B23A6B","--accent-2":"#9C2F5C"}},{id:"tide",name:"Tide",description:"Calm professional blues — clean and focused.",dark:!1,swatch:["#F1F6FA","#2E86C1","#1C4E73"],vars:{"--bg":"#F1F6FA","--surface":"#FFFFFF","--surface-2":"#ECF3F9","--hover":"#E2EEF6","--border":"#D5E3EE","--text":"#13283A","--text-2":"#4A6275","--text-3":"#8AA0B0","--accent":"#2E86C1","--accent-strong":"#1C4E73","--accent-2":"#163E5C"}},{id:"velocity",name:"Velocity",description:"High-energy sport — crisp slate with electric orange.",dark:!1,swatch:["#F4F5F7","#F4511E","#1F2A37"],vars:{"--bg":"#F4F5F7","--surface":"#FFFFFF","--surface-2":"#EEF0F3","--hover":"#E7EAEE","--border":"#DCE0E6","--text":"#18202B","--text-2":"#515B68","--text-3":"#8B95A1","--accent":"#F4511E","--accent-strong":"#1F2A37","--accent-2":"#16202B"}},{id:"evergreen",name:"Evergreen",description:"Earthy forest greens — grounded and natural.",dark:!1,swatch:["#F2F6F1","#3E8E52","#2A4A30"],vars:{"--bg":"#F2F6F1","--surface":"#FFFFFF","--surface-2":"#ECF2EA","--hover":"#E4EEE2","--border":"#D7E4D3","--text":"#1E2B20","--text-2":"#4F6151","--text-3":"#8AA08C","--accent":"#3E8E52","--accent-strong":"#2A4A30","--accent-2":"#213B26"}},{id:"amethyst",name:"Amethyst",description:"Premium purple & plum — elegant and refined.",dark:!1,swatch:["#F6F4FB","#7A4FE0","#3A2D5C"],vars:{"--bg":"#F6F4FB","--surface":"#FFFFFF","--surface-2":"#F1EDF9","--hover":"#EAE3F6","--border":"#DFD6F0","--text":"#241B36","--text-2":"#5A4E72","--text-3":"#9588AE","--accent":"#7A4FE0","--accent-strong":"#3A2D5C","--accent-2":"#2E2349"}}],Sc="sandstone",gp="anvil_theme",dv=t=>xa.find(e=>e.id===t)||xa[0];function cp(){try{return localStorage.getItem(gp)||Sc}catch{return Sc}}function oo(t,e=!0){const r=dv(t),o=document.documentElement;Object.entries(r.vars).forEach(([s,l])=>o.style.setProperty(s,l)),o.style.colorScheme=r.dark?"dark":"light",o.setAttribute("data-theme",r.id);const i=document.querySelector('meta[name="theme-color"]');if(i&&i.setAttribute("content",r.vars["--surface"]),e)try{localStorage.setItem(gp,r.id)}catch{}return r.id}function gv(t=560){const[e,r]=p.useState(()=>window.innerWidth<=t);return p.useEffect(()=>{const o=()=>r(window.innerWidth<=t);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[t]),e}function cv({screens:t,order:e,hidden:r,themeId:o,currency:i,ticker:s,defaultScreen:l,onSetDefault:a,onSaveSidebar:d,onPreviewTheme:g,onCommitTheme:f,onSelectCurrency:y,onSaveTicker:m,onClose:S}){const[k,C]=p.useState("sidebar"),[T,b]=p.useState(()=>e.map(Q=>({id:Q,hidden:r.includes(Q)}))),[c,u]=p.useState(o),[x,v]=p.useState(""),[z,_]=p.useState(!1),L=gv(),[F,P]=p.useState(!!(s!=null&&s.enabled)),[I,D]=p.useState(()=>{const Q=Array.isArray(s==null?void 0:s.statements)?s.statements.slice(0,5):[];return Q.length?Q:[""]}),[w,O]=p.useState((s==null?void 0:s.speed)??60),[st,q]=p.useState((s==null?void 0:s.delay)??3),[R,A]=p.useState(!1),M=(Q,ut)=>D(ct=>ct.map((zt,qt)=>qt===Q?ut:zt)),G=()=>D(Q=>Q.length<5?[...Q,""]:Q),j=Q=>D(ut=>ut.length>1?ut.filter((ct,zt)=>zt!==Q):ut),Y=()=>{const Q=I.map(ut=>ut.trim()).filter(Boolean).slice(0,5);m({enabled:F,statements:Q,speed:Number(w),delay:Number(st)}),A(!0),setTimeout(()=>A(!1),1500)};p.useEffect(()=>{H.getSetting("golden_music").then(Q=>v((Q==null?void 0:Q.value)||"")).catch(()=>{})},[]);const h=()=>{H.setSetting("golden_music",x.trim()).then(()=>{_(!0),setTimeout(()=>_(!1),1500)}).catch(()=>{})},$=Q=>{u(Q),g(Q)},dt=T.filter(Q=>!Q.hidden).length,et=(Q,ut)=>{const ct=Q+ut;if(ct<0||ct>=T.length)return;const zt=[...T];[zt[Q],zt[ct]]=[zt[ct],zt[Q]],b(zt)},mt=Q=>{const ut=T[Q];if(!ut.hidden&&dt<=1)return;const ct=[...T];ct[Q]={...ut,hidden:!ut.hidden},b(ct)},Tt=()=>{d(T.map(Q=>Q.id),T.filter(Q=>Q.hidden).map(Q=>Q.id))},ft=L?{...rt.overlay,padding:0}:rt.overlay,It=L?{...rt.modal,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"100%",borderRadius:0,border:"none"}:rt.modal;return n.jsx("div",{style:ft,onClick:S,children:n.jsxs("div",{style:It,onClick:Q=>Q.stopPropagation(),children:[n.jsxs("div",{style:rt.head,children:[n.jsx("div",{style:rt.title,children:"Settings"}),n.jsx("button",{onClick:S,style:rt.closeBtn,children:n.jsx(vt,{size:18})})]}),n.jsxs("div",{style:rt.tabs,children:[n.jsxs("button",{onClick:()=>C("sidebar"),style:{...rt.tab,...k==="sidebar"?rt.tabOn:{}},children:[n.jsx(lh,{size:15})," Configure sidebar"]}),n.jsxs("button",{onClick:()=>C("themes"),style:{...rt.tab,...k==="themes"?rt.tabOn:{}},children:[n.jsx(gh,{size:15})," Themes"]}),n.jsxs("button",{onClick:()=>C("currency"),style:{...rt.tab,...k==="currency"?rt.tabOn:{}},children:[n.jsx(qf,{size:15})," Currency"]}),n.jsxs("button",{onClick:()=>C("music"),style:{...rt.tab,...k==="music"?rt.tabOn:{}},children:[n.jsx(Qb,{size:15})," Music"]}),n.jsxs("button",{onClick:()=>C("reminders"),style:{...rt.tab,...k==="reminders"?rt.tabOn:{}},children:[n.jsx(Vb,{size:15})," Reminders"]})]}),n.jsx("div",{style:rt.body,children:k==="sidebar"?n.jsxs(n.Fragment,{children:[n.jsxs("p",{style:rt.hint,children:["Reorder with the arrows, hide ones you don't use, and tap ",n.jsx(ns,{size:11,style:{verticalAlign:"-1px"}})," to set the screen that opens on launch."]}),n.jsx("div",{style:rt.list,children:T.map((Q,ut)=>{const ct=t[Q.id],zt=ct.icon,qt=l===Q.id;return n.jsxs("div",{style:{...rt.row,opacity:Q.hidden?.5:1,...qt?{borderColor:"var(--accent)"}:{}},children:[n.jsx("span",{style:rt.rowNum,children:ut+1}),n.jsx(zt,{size:16}),n.jsxs("span",{style:rt.rowLabel,children:[ct.label,qt&&n.jsx("span",{style:rt.defaultTag,children:"default"})]}),n.jsx("button",{onClick:()=>a(Q.id),title:qt?"Opens on launch":"Set as default",style:{...rt.iconBtn,...qt?{color:"var(--accent)"}:{}},children:n.jsx(ns,{size:15})}),n.jsx("button",{onClick:()=>mt(ut),title:Q.hidden?"Show":"Hide",style:{...rt.iconBtn,...Q.hidden?{}:{color:"var(--accent)"}},children:Q.hidden?n.jsx(ga,{size:15}):n.jsx(rs,{size:15})}),n.jsx("button",{onClick:()=>et(ut,-1),disabled:ut===0,style:{...rt.iconBtn,opacity:ut===0?.3:1},children:n.jsx(Hb,{size:15})}),n.jsx("button",{onClick:()=>et(ut,1),disabled:ut===T.length-1,style:{...rt.iconBtn,opacity:ut===T.length-1?.3:1},children:n.jsx(ws,{size:15})})]},Q.id)})}),n.jsxs("button",{onClick:Tt,style:rt.saveBtn,children:[n.jsx(jt,{size:15})," Save sidebar"]})]}):k==="currency"?n.jsxs(n.Fragment,{children:[n.jsx("p",{style:rt.hint,children:"Choose the currency used across Vault and Worth. Applies instantly."}),n.jsx("div",{style:rt.list,children:ya.map(Q=>{const ut=Q.code===i;return n.jsxs("button",{onClick:()=>y(Q.code),style:{...rt.row,cursor:"pointer",textAlign:"left",width:"100%",...ut?{borderColor:"var(--accent)"}:{}},children:[n.jsx("span",{style:rt.curSymbol,children:Q.symbol}),n.jsxs("span",{style:rt.rowLabel,children:[Q.label," ",n.jsx("span",{style:rt.curCode,children:Q.code})]}),ut&&n.jsx("span",{style:rt.themeCheck,children:n.jsx(jt,{size:13})})]},Q.code)})})]}):k==="music"?n.jsxs(n.Fragment,{children:[n.jsxs("p",{style:rt.hint,children:["Paste a YouTube link to play softly while you write in the ",n.jsx("b",{children:"Golden Book"}),". It plays only on that screen (audio only)."]}),n.jsx("input",{value:x,onChange:Q=>v(Q.target.value),placeholder:"https://youtube.com/watch?v=…",style:rt.musicInput}),n.jsxs("button",{onClick:h,style:rt.saveBtn,children:[n.jsx(jt,{size:15})," ",z?"Saved":"Save music"]})]}):k==="reminders"?n.jsxs(n.Fragment,{children:[n.jsx("p",{style:rt.hint,children:"Up to 5 reminders scroll across the top of every screen — a gentle nudge toward your goals."}),n.jsxs("button",{onClick:()=>P(Q=>!Q),style:{...rt.row,cursor:"pointer",width:"100%",justifyContent:"space-between",...F?{borderColor:"var(--accent)"}:{}},children:[n.jsx("span",{style:rt.rowLabel,children:"Show reminder banner"}),n.jsx("span",{style:{...rt.switch,...F?rt.switchOn:{}},children:F?"On":"Off"})]}),n.jsxs("div",{style:{marginTop:14},children:[n.jsxs("div",{style:rt.fieldLbl,children:["Reminders (",I.filter(Q=>Q.trim()).length,"/5)"]}),I.map((Q,ut)=>n.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[n.jsx("input",{value:Q,onChange:ct=>M(ut,ct.target.value),maxLength:120,placeholder:`Reminder ${ut+1}`,style:{...rt.musicInput,marginBottom:0}}),n.jsx("button",{onClick:()=>j(ut),style:rt.iconBtn,title:"Remove",children:n.jsx(vt,{size:15})})]},ut)),I.length<5&&n.jsxs("button",{onClick:G,style:rt.addRowBtn,children:[n.jsx(ne,{size:14})," Add reminder"]})]}),n.jsxs("div",{style:{marginTop:16},children:[n.jsxs("div",{style:rt.sliderHead,children:[n.jsx("span",{style:rt.fieldLbl,children:"Scroll speed"}),n.jsxs("span",{style:rt.sliderVal,children:[w," px/s"]})]}),n.jsx("input",{type:"range",min:20,max:200,step:5,value:w,onChange:Q=>O(Q.target.value),style:rt.range})]}),n.jsxs("div",{style:{marginTop:12},children:[n.jsxs("div",{style:rt.sliderHead,children:[n.jsx("span",{style:rt.fieldLbl,children:"Delay between reminders"}),n.jsxs("span",{style:rt.sliderVal,children:[st,"s"]})]}),n.jsx("input",{type:"range",min:0,max:15,step:1,value:st,onChange:Q=>q(Q.target.value),style:rt.range})]}),n.jsxs("button",{onClick:Y,style:{...rt.saveBtn,marginTop:16},children:[n.jsx(jt,{size:15})," ",R?"Saved":"Save reminders"]})]}):n.jsxs(n.Fragment,{children:[n.jsxs("p",{style:rt.hint,children:["Tap a theme to preview it live, then hit ",n.jsx("b",{children:"Apply theme"})," to keep it."]}),n.jsx("div",{style:rt.themeGrid,children:xa.map(Q=>{const ut=Q.id===c;return n.jsxs("button",{onClick:()=>$(Q.id),style:{...rt.themeCard,...ut?rt.themeCardOn:{}},children:[n.jsxs("div",{style:rt.swatchRow,children:[Q.swatch.map((ct,zt)=>n.jsx("span",{style:{...rt.swatch,background:ct}},zt)),ut&&n.jsx("span",{style:rt.themeCheck,children:n.jsx(jt,{size:13})})]}),n.jsxs("div",{style:rt.themeName,children:[Q.name,Q.dark?n.jsx("span",{style:rt.darkTag,children:"Dark"}):null]}),n.jsx("div",{style:rt.themeDesc,children:Q.description})]},Q.id)})}),n.jsxs("button",{onClick:()=>f(c),disabled:c===o,style:{...rt.saveBtn,...c===o?rt.saveBtnDisabled:{}},children:[n.jsx(jt,{size:15})," ",c===o?"Theme applied":"Apply theme"]})]})})]})})}const rt={overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",color:"var(--text)",borderRadius:16,width:460,maxWidth:"100%",maxHeight:"88vh",display:"flex",flexDirection:"column",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)",overflow:"hidden"},head:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 18px",borderBottom:"1px solid var(--border)",flexShrink:0},title:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},tabs:{display:"flex",flexWrap:"wrap",gap:6,padding:"12px 18px 0",flexShrink:0},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"transparent"},body:{padding:"16px 18px 20px",overflowY:"auto",overflowX:"hidden",flex:1,minHeight:0},hint:{fontSize:12.5,color:"var(--text-3)",lineHeight:1.5,margin:"0 0 14px"},list:{display:"flex",flexDirection:"column",gap:6},row:{display:"flex",alignItems:"center",gap:10,padding:"9px 11px",background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:9},rowNum:{fontSize:11,fontWeight:700,color:"var(--text-3)",width:16,textAlign:"center"},rowLabel:{flex:1,fontSize:13.5,fontWeight:500,display:"flex",alignItems:"center",gap:7},defaultTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--accent)",background:"color-mix(in srgb, var(--accent) 14%, transparent)",padding:"1px 6px",borderRadius:6},curSymbol:{width:22,textAlign:"center",fontSize:15,fontWeight:700,color:"var(--text)"},curCode:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginLeft:4},iconBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},saveBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:7,width:"100%",marginTop:16,border:"none",background:"var(--accent)",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer"},saveBtnDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"default"},musicInput:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",marginBottom:12},switch:{fontSize:12,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:20,padding:"3px 12px",minWidth:44,textAlign:"center"},switchOn:{background:"var(--accent)",color:"#fff"},fieldLbl:{fontSize:12,fontWeight:700,color:"var(--text-2)",marginBottom:7},addRowBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"9px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},sliderHead:{display:"flex",justifyContent:"space-between",alignItems:"baseline"},sliderVal:{fontSize:12,fontWeight:700,color:"var(--accent)"},range:{width:"100%",accentColor:"var(--accent)",cursor:"pointer"},themeGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},themeCard:{textAlign:"left",border:"2px solid var(--border)",background:"var(--surface-2)",borderRadius:12,padding:12,cursor:"pointer",display:"flex",flexDirection:"column",gap:6,outline:"none",WebkitTapHighlightColor:"transparent",transition:"border-color .15s ease, box-shadow .15s ease"},themeCardOn:{borderColor:"var(--accent)",boxShadow:"0 0 0 3px color-mix(in srgb, var(--accent) 25%, transparent)"},swatchRow:{display:"flex",alignItems:"center",gap:5,position:"relative"},swatch:{width:22,height:22,borderRadius:"50%",border:"1px solid rgba(0,0,0,0.08)"},themeCheck:{marginLeft:"auto",width:20,height:20,borderRadius:"50%",background:"var(--accent)",color:"#fff",display:"grid",placeItems:"center"},themeName:{fontSize:14,fontWeight:700,display:"flex",alignItems:"center",gap:6},darkTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",background:"var(--hover)",color:"var(--text-2)",padding:"1px 6px",borderRadius:6},themeDesc:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.4}},uv=`
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
`;function bv({statements:t,speed:e=60,delay:r=3}){const o=p.useMemo(()=>(t||[]).map(d=>(d||"").trim()).filter(Boolean).slice(0,5),[t]),[i,s]=p.useState(0),l=p.useRef(null),a=p.useRef(null);return p.useEffect(()=>{s(0)},[o]),p.useEffect(()=>{if(!o.length)return;const d=l.current,g=a.current;if(!d||!g)return;const f=d.offsetWidth,y=g.offsetWidth,m=Math.max(10,Number(e)||60),S=Math.max(2500,(f+y)/m*1e3),k=g.animate([{transform:`translateX(${f}px)`},{transform:`translateX(${-y}px)`}],{duration:S,easing:"linear",fill:"both"});let C;const T=()=>{C=setTimeout(()=>s(b=>(b+1)%o.length),Math.max(0,Number(r)||0)*1e3)};return k.addEventListener("finish",T),()=>{k.cancel(),k.removeEventListener("finish",T),clearTimeout(C)}},[i,o,e,r]),o.length?n.jsxs("div",{style:dn.bar,"aria-label":"Reminders",children:[n.jsx("style",{children:uv}),n.jsx("div",{className:"anvil-tick-glow",style:dn.icon,children:n.jsx("span",{className:"anvil-tick-pulse",style:{display:"grid",placeItems:"center"},children:n.jsx(Vb,{size:15})})}),n.jsxs("div",{ref:l,style:dn.viewport,children:[n.jsx("span",{className:"anvil-tick-shimmer",style:dn.shimmer}),n.jsx("div",{className:"anvil-tick-float",style:dn.floatWrap,children:n.jsx("div",{ref:a,style:dn.text,children:o[i%o.length]},i)})]})]}):null}const dn={bar:{display:"flex",alignItems:"center",height:36,flexShrink:0,overflow:"hidden",borderBottom:"1px solid var(--border)",background:"color-mix(in srgb, var(--accent) 12%, var(--surface))"},icon:{display:"grid",placeItems:"center",width:42,height:"100%",flexShrink:0,color:"#fff",background:"var(--accent)",zIndex:2},viewport:{position:"relative",flex:1,height:"100%",overflow:"hidden",display:"flex",alignItems:"center"},shimmer:{position:"absolute",top:0,bottom:0,left:0,width:"22%",background:"linear-gradient(100deg, transparent, color-mix(in srgb, var(--accent) 22%, transparent), transparent)",pointerEvents:"none",zIndex:1},floatWrap:{display:"inline-flex",alignItems:"center",willChange:"transform"},text:{whiteSpace:"nowrap",fontSize:13.5,fontWeight:700,color:"var(--text)",letterSpacing:"0.01em",willChange:"transform",paddingLeft:4}};oo(cp(),!1);const ka="anvil_default_screen",Cc=()=>{try{return localStorage.getItem(ka)}catch{return null}},_r={kickstart:{label:"Kickstart",icon:mh,component:Zy},golden:{label:"Golden Book",icon:Zf,component:rv},habits:{label:"Habits",icon:hh,component:Yh},quadrant:{label:"Quadrant",icon:Ub,component:Rh},goals:{label:"Goals",icon:yd,component:Nh},grove:{label:"Grove",icon:kh,component:Ay},worth:{label:"Worth",icon:sh,component:Ly},vault:{label:"Vault",icon:Gb,component:Hy},journal:{label:"Journal",icon:Ob,component:oy},revision:{label:"Revision",icon:Jb,component:fy},affirmations:{label:"Affirmations",icon:No,component:vy},skills:{label:"Skills",icon:th,component:iy},spiritual:{label:"Spiritual",icon:Di,component:ay},mindscape:{label:"Mindscape",icon:rh,component:av}},up=["kickstart","golden","habits","quadrant","goals","grove","journal","revision","affirmations","skills","spiritual","mindscape","worth","vault"];function yi(t){const e=up.filter(i=>_r[i]),o=[...(Array.isArray(t)?t:[]).filter(i=>_r[i])];return e.forEach(i=>{o.includes(i)||o.push(i)}),o}function pv(){const[t,e]=p.useState(()=>window.innerWidth<720);return p.useEffect(()=>{const r=()=>e(window.innerWidth<720);return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),t}function mv(){const[t,e]=p.useState(()=>{const j=Cc();return j&&_r[j]?j:"habits"}),[r,o]=p.useState(()=>Cc()||"habits"),[i,s]=p.useState(!1),[l,a]=p.useState(null),[d,g]=p.useState(!1),[f,y]=p.useState(!1),[m,S]=p.useState(cp()),[k,C]=p.useState(Mo()),[T,b]=p.useState({enabled:!1,statements:[],speed:60,delay:3}),[c,u]=p.useState(()=>yi(up)),[x,v]=p.useState([]),z=pv();p.useEffect(()=>{let j=!1;const Y=()=>{ua(),a(null)};return window.addEventListener("anvil-unauthorized",Y),xd()?H.me().then(h=>{j||a(h)}).catch(()=>{}).finally(()=>{j||g(!0)}):g(!0),()=>{j=!0,window.removeEventListener("anvil-unauthorized",Y)}},[]),p.useEffect(()=>{l&&(H.getSetting("theme").then(j=>{j!=null&&j.value&&S(oo(j.value))}).catch(()=>{}),H.getSetting("currency").then(j=>{j!=null&&j.value&&C(lc(j.value))}).catch(()=>{}),H.getSetting("ticker").then(j=>{j!=null&&j.value&&b(Y=>({...Y,...j.value}))}).catch(()=>{}),H.getSetting("default_screen").then(j=>{if(j!=null&&j.value&&_r[j.value]){o(j.value);try{localStorage.setItem(ka,j.value)}catch{}}}).catch(()=>{}),H.getSetting("sidebar_order").then(j=>{Array.isArray(j==null?void 0:j.value)&&u(yi(j.value))}).catch(()=>{}),H.getSetting("sidebar_hidden").then(j=>{Array.isArray(j==null?void 0:j.value)&&v(j.value)}).catch(()=>{}))},[l]);function _(j){e(j),s(!1)}const L=()=>{ua(),a(null)},F=j=>{oo(j,!1)},P=j=>{S(oo(j)),H.setSetting("theme",j).catch(()=>{}),y(!1)},I=()=>{oo(m,!1),y(!1)},D=j=>{C(lc(j)),H.setSetting("currency",j).catch(()=>{})},w=j=>{b(j),H.setSetting("ticker",j).catch(()=>{})},O=j=>{o(j);try{localStorage.setItem(ka,j)}catch{}H.setSetting("default_screen",j).catch(()=>{})},st=(j,Y)=>{if(u(yi(j)),v(Y),y(!1),H.setSetting("sidebar_order",j).catch(()=>{}),H.setSetting("sidebar_hidden",Y).catch(()=>{}),Y.includes(t)){const h=yi(j).find($=>!Y.includes($));h&&e(h)}},q=c.filter(j=>!x.includes(j));if(!d)return n.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",fontFamily:"'Inter',system-ui,sans-serif",color:"var(--text-3)"},children:"Loading…"});if(!l)return n.jsx(Py,{onAuthed:a});const R=_r[t],A=R.component,M=()=>n.jsx("div",{style:Et.navItems,children:q.map(j=>{const Y=_r[j];if(!Y)return null;const h=Y.icon,$=t===j;return n.jsxs("button",{onClick:()=>_(j),title:Y.label,style:{...Et.navItem,...$?Et.navItemOn:{}},children:[n.jsx(h,{size:18}),n.jsx("span",{style:Et.navLabel,children:Y.label})]},j)})}),G=()=>n.jsxs("div",{style:Et.footerWrap,children:[n.jsxs("button",{onClick:()=>y(!0),style:Et.settingsBtn,title:"Settings",children:[n.jsx(qb,{size:17}),n.jsx("span",{children:"Settings"})]}),n.jsxs("div",{style:Et.userFooter,children:[n.jsxs("div",{style:Et.userInfo,children:[n.jsx("div",{style:Et.userAvatar,children:(l.name||l.email||"?").charAt(0).toUpperCase()}),n.jsxs("div",{style:{minWidth:0},children:[n.jsx("div",{style:Et.userName,children:l.name||"You"}),n.jsx("div",{style:Et.userEmail,children:l.email})]})]}),n.jsx("button",{onClick:L,style:Et.logoutBtn,title:"Sign out",children:n.jsx(ah,{size:16})})]})]});return n.jsxs("div",{style:Et.shell,children:[!z&&n.jsxs("nav",{style:Et.nav,children:[n.jsxs("div",{style:Et.brand,children:[n.jsx("div",{style:Et.brandLogo,children:"B"}),n.jsx("span",{style:Et.brandName,children:"Anvil"})]}),n.jsx(M,{}),n.jsx(G,{})]}),z&&i&&n.jsx("div",{style:Et.overlay,onClick:()=>s(!1),children:n.jsxs("nav",{style:Et.drawer,onClick:j=>j.stopPropagation(),children:[n.jsxs("div",{style:Et.drawerHeader,children:[n.jsxs("div",{style:Et.brand,children:[n.jsx("div",{style:Et.brandLogo,children:"B"}),n.jsx("span",{style:Et.brandName,children:"Anvil"})]}),n.jsx("button",{style:Et.closeBtn,onClick:()=>s(!1),children:n.jsx(vt,{size:20})})]}),n.jsx(M,{}),n.jsx(G,{})]})}),n.jsxs("div",{style:Et.content,children:[z&&n.jsxs("div",{style:Et.topBar,children:[n.jsx("button",{style:Et.menuBtn,onClick:()=>s(!0),children:n.jsx(hd,{size:22})}),n.jsx("span",{style:Et.topBarTitle,children:R.label}),n.jsx("div",{style:{width:38}})]}),T.enabled&&n.jsx(bv,{statements:T.statements,speed:T.speed,delay:T.delay}),n.jsx("main",{style:Et.main,children:n.jsx(A,{})})]}),f&&n.jsx(cv,{screens:_r,order:c,hidden:x,themeId:m,currency:k,ticker:T,defaultScreen:r,onSetDefault:O,onSaveSidebar:st,onPreviewTheme:F,onCommitTheme:P,onSelectCurrency:D,onSaveTicker:w,onClose:I})]})}const Et={shell:{display:"flex",height:"100vh",overflow:"hidden",fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)"},nav:{width:200,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column",padding:"20px 10px",gap:2,overflowY:"auto",overflowX:"hidden"},brand:{display:"flex",alignItems:"center",gap:9,padding:"6px 10px 20px",borderBottom:"1px solid var(--border)",marginBottom:8},brandLogo:{width:30,height:30,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:14,fontWeight:800,fontFamily:"'Fraunces', Georgia, serif",flexShrink:0},brandName:{fontSize:16,fontWeight:700,letterSpacing:"-0.01em",color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},navItems:{display:"flex",flexDirection:"column",gap:2},navItem:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},navItemOn:{background:"var(--hover)",color:"var(--text)",fontWeight:700},footerWrap:{marginTop:"auto",paddingTop:8},settingsBtn:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},userFooter:{marginTop:4,paddingTop:12,borderTop:"1px solid var(--border)",display:"flex",alignItems:"center",gap:8},userInfo:{display:"flex",alignItems:"center",gap:8,flex:1,minWidth:0},userAvatar:{width:30,height:30,borderRadius:"50%",background:"#8268B0",color:"#fff",display:"grid",placeItems:"center",fontSize:13,fontWeight:700,flexShrink:0},userName:{fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},userEmail:{fontSize:11,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},logoutBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",padding:7,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},navLabel:{flex:1},content:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},main:{flex:1,overflowY:"auto",overflowX:"hidden"},topBar:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",background:"var(--surface)",borderBottom:"1px solid var(--border)",flexShrink:0},topBarTitle:{fontSize:16,fontWeight:700,color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},menuBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text)",padding:8,borderRadius:8,display:"grid",placeItems:"center"},overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.35)",zIndex:100,display:"flex"},drawer:{width:220,background:"var(--surface)",height:"100%",display:"flex",flexDirection:"column",padding:"16px 10px",gap:2,boxShadow:"4px 0 24px rgba(0,0,0,0.12)"},drawerHeader:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:4},closeBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",padding:6,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0}};Lb(document.getElementById("root")).render(n.jsx(p.StrictMode,{children:n.jsx(mv,{})}));
