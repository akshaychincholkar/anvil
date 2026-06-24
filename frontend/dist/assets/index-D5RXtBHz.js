(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var lu={exports:{}},Hs={},au={exports:{}},Wt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hi=Symbol.for("react.element"),em=Symbol.for("react.portal"),rm=Symbol.for("react.fragment"),nm=Symbol.for("react.strict_mode"),om=Symbol.for("react.profiler"),im=Symbol.for("react.provider"),sm=Symbol.for("react.context"),lm=Symbol.for("react.forward_ref"),am=Symbol.for("react.suspense"),dm=Symbol.for("react.memo"),cm=Symbol.for("react.lazy"),uc=Symbol.iterator;function gm(t){return t===null||typeof t!="object"?null:(t=uc&&t[uc]||t["@@iterator"],typeof t=="function"?t:null)}var du={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cu=Object.assign,gu={};function bo(t,e,n){this.props=t,this.context=e,this.refs=gu,this.updater=n||du}bo.prototype.isReactComponent={};bo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};bo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function uu(){}uu.prototype=bo.prototype;function rd(t,e,n){this.props=t,this.context=e,this.refs=gu,this.updater=n||du}var nd=rd.prototype=new uu;nd.constructor=rd;cu(nd,bo.prototype);nd.isPureReactComponent=!0;var pc=Array.isArray,pu=Object.prototype.hasOwnProperty,od={current:null},bu={key:!0,ref:!0,__self:!0,__source:!0};function mu(t,e,n){var o,i={},s=null,l=null;if(e!=null)for(o in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(s=""+e.key),e)pu.call(e,o)&&!bu.hasOwnProperty(o)&&(i[o]=e[o]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var d=Array(a),c=0;c<a;c++)d[c]=arguments[c+2];i.children=d}if(t&&t.defaultProps)for(o in a=t.defaultProps,a)i[o]===void 0&&(i[o]=a[o]);return{$$typeof:hi,type:t,key:s,ref:l,props:i,_owner:od.current}}function um(t,e){return{$$typeof:hi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function id(t){return typeof t=="object"&&t!==null&&t.$$typeof===hi}function pm(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var bc=/\/+/g;function cl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?pm(""+t.key):e.toString(36)}function ts(t,e,n,o,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case hi:case em:l=!0}}if(l)return l=t,i=i(l),t=o===""?"."+cl(l,0):o,pc(i)?(n="",t!=null&&(n=t.replace(bc,"$&/")+"/"),ts(i,e,n,"",function(c){return c})):i!=null&&(id(i)&&(i=um(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(bc,"$&/")+"/")+t)),e.push(i)),1;if(l=0,o=o===""?".":o+":",pc(t))for(var a=0;a<t.length;a++){s=t[a];var d=o+cl(s,a);l+=ts(s,e,n,d,i)}else if(d=gm(t),typeof d=="function")for(t=d.call(t),a=0;!(s=t.next()).done;)s=s.value,d=o+cl(s,a++),l+=ts(s,e,n,d,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function Ii(t,e,n){if(t==null)return t;var o=[],i=0;return ts(t,o,"","",function(s){return e.call(n,s,i++)}),o}function bm(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Re={current:null},es={transition:null},mm={ReactCurrentDispatcher:Re,ReactCurrentBatchConfig:es,ReactCurrentOwner:od};function fu(){throw Error("act(...) is not supported in production builds of React.")}Wt.Children={map:Ii,forEach:function(t,e,n){Ii(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ii(t,function(){e++}),e},toArray:function(t){return Ii(t,function(e){return e})||[]},only:function(t){if(!id(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Wt.Component=bo;Wt.Fragment=rm;Wt.Profiler=om;Wt.PureComponent=rd;Wt.StrictMode=nm;Wt.Suspense=am;Wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mm;Wt.act=fu;Wt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var o=cu({},t.props),i=t.key,s=t.ref,l=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,l=od.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(d in e)pu.call(e,d)&&!bu.hasOwnProperty(d)&&(o[d]=e[d]===void 0&&a!==void 0?a[d]:e[d])}var d=arguments.length-2;if(d===1)o.children=n;else if(1<d){a=Array(d);for(var c=0;c<d;c++)a[c]=arguments[c+2];o.children=a}return{$$typeof:hi,type:t.type,key:i,ref:s,props:o,_owner:l}};Wt.createContext=function(t){return t={$$typeof:sm,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:im,_context:t},t.Consumer=t};Wt.createElement=mu;Wt.createFactory=function(t){var e=mu.bind(null,t);return e.type=t,e};Wt.createRef=function(){return{current:null}};Wt.forwardRef=function(t){return{$$typeof:lm,render:t}};Wt.isValidElement=id;Wt.lazy=function(t){return{$$typeof:cm,_payload:{_status:-1,_result:t},_init:bm}};Wt.memo=function(t,e){return{$$typeof:dm,type:t,compare:e===void 0?null:e}};Wt.startTransition=function(t){var e=es.transition;es.transition={};try{t()}finally{es.transition=e}};Wt.unstable_act=fu;Wt.useCallback=function(t,e){return Re.current.useCallback(t,e)};Wt.useContext=function(t){return Re.current.useContext(t)};Wt.useDebugValue=function(){};Wt.useDeferredValue=function(t){return Re.current.useDeferredValue(t)};Wt.useEffect=function(t,e){return Re.current.useEffect(t,e)};Wt.useId=function(){return Re.current.useId()};Wt.useImperativeHandle=function(t,e,n){return Re.current.useImperativeHandle(t,e,n)};Wt.useInsertionEffect=function(t,e){return Re.current.useInsertionEffect(t,e)};Wt.useLayoutEffect=function(t,e){return Re.current.useLayoutEffect(t,e)};Wt.useMemo=function(t,e){return Re.current.useMemo(t,e)};Wt.useReducer=function(t,e,n){return Re.current.useReducer(t,e,n)};Wt.useRef=function(t){return Re.current.useRef(t)};Wt.useState=function(t){return Re.current.useState(t)};Wt.useSyncExternalStore=function(t,e,n){return Re.current.useSyncExternalStore(t,e,n)};Wt.useTransition=function(){return Re.current.useTransition()};Wt.version="18.3.1";au.exports=Wt;var g=au.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fm=g,hm=Symbol.for("react.element"),ym=Symbol.for("react.fragment"),xm=Object.prototype.hasOwnProperty,vm=fm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wm={key:!0,ref:!0,__self:!0,__source:!0};function hu(t,e,n){var o,i={},s=null,l=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(l=e.ref);for(o in e)xm.call(e,o)&&!wm.hasOwnProperty(o)&&(i[o]=e[o]);if(t&&t.defaultProps)for(o in e=t.defaultProps,e)i[o]===void 0&&(i[o]=e[o]);return{$$typeof:hm,type:t,key:s,ref:l,props:i,_owner:vm.current}}Hs.Fragment=ym;Hs.jsx=hu;Hs.jsxs=hu;lu.exports=Hs;var r=lu.exports,yu={exports:{}},Ge={},xu={exports:{}},vu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,O){var q=U.length;U.push(O);t:for(;0<q;){var P=q-1>>>1,F=U[P];if(0<i(F,O))U[P]=O,U[q]=F,q=P;else break t}}function n(U){return U.length===0?null:U[0]}function o(U){if(U.length===0)return null;var O=U[0],q=U.pop();if(q!==O){U[0]=q;t:for(var P=0,F=U.length,f=F>>>1;P<f;){var Q=2*(P+1)-1,xt=U[Q],gt=Q+1,H=U[gt];if(0>i(xt,q))gt<F&&0>i(H,xt)?(U[P]=H,U[gt]=q,P=gt):(U[P]=xt,U[Q]=q,P=Q);else if(gt<F&&0>i(H,q))U[P]=H,U[gt]=q,P=gt;else break t}}return O}function i(U,O){var q=U.sortIndex-O.sortIndex;return q!==0?q:U.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var l=Date,a=l.now();t.unstable_now=function(){return l.now()-a}}var d=[],c=[],p=1,y=null,m=3,j=!1,x=!1,k=!1,T=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(U){for(var O=n(c);O!==null;){if(O.callback===null)o(c);else if(O.startTime<=U)o(c),O.sortIndex=O.expirationTime,e(d,O);else break;O=n(c)}}function z(U){if(k=!1,h(U),!x)if(n(d)!==null)x=!0,rt(v);else{var O=n(c);O!==null&&ht(z,O.startTime-U)}}function v(U,O){x=!1,k&&(k=!1,b(R),R=-1),j=!0;var q=m;try{for(h(O),y=n(d);y!==null&&(!(y.expirationTime>O)||U&&!S());){var P=y.callback;if(typeof P=="function"){y.callback=null,m=y.priorityLevel;var F=P(y.expirationTime<=O);O=t.unstable_now(),typeof F=="function"?y.callback=F:y===n(d)&&o(d),h(O)}else o(d);y=n(d)}if(y!==null)var f=!0;else{var Q=n(c);Q!==null&&ht(z,Q.startTime-O),f=!1}return f}finally{y=null,m=q,j=!1}}var I=!1,L=null,R=-1,E=5,M=-1;function S(){return!(t.unstable_now()-M<E)}function A(){if(L!==null){var U=t.unstable_now();M=U;var O=!0;try{O=L(!0,U)}finally{O?w():(I=!1,L=null)}}else I=!1}var w;if(typeof u=="function")w=function(){u(A)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,lt=Y.port2;Y.port1.onmessage=A,w=function(){lt.postMessage(null)}}else w=function(){T(A,0)};function rt(U){L=U,I||(I=!0,w())}function ht(U,O){R=T(function(){U(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){x||j||(x=!0,rt(v))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(d)},t.unstable_next=function(U){switch(m){case 1:case 2:case 3:var O=3;break;default:O=m}var q=m;m=O;try{return U()}finally{m=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,O){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var q=m;m=U;try{return O()}finally{m=q}},t.unstable_scheduleCallback=function(U,O,q){var P=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?P+q:P):q=P,U){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=q+F,U={id:p++,callback:O,priorityLevel:U,startTime:q,expirationTime:F,sortIndex:-1},q>P?(U.sortIndex=q,e(c,U),n(d)===null&&U===n(c)&&(k?(b(R),R=-1):k=!0,ht(z,q-P))):(U.sortIndex=F,e(d,U),x||j||(x=!0,rt(v))),U},t.unstable_shouldYield=S,t.unstable_wrapCallback=function(U){var O=m;return function(){var q=m;m=O;try{return U.apply(this,arguments)}finally{m=q}}}})(vu);xu.exports=vu;var km=xu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm=g,He=km;function tt(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wu=new Set,ti={};function Cn(t,e){oo(t,e),oo(t+"Capture",e)}function oo(t,e){for(ti[t]=e,t=0;t<e.length;t++)wu.add(e[t])}var Tr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xl=Object.prototype.hasOwnProperty,Sm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mc={},fc={};function Cm(t){return Xl.call(fc,t)?!0:Xl.call(mc,t)?!1:Sm.test(t)?fc[t]=!0:(mc[t]=!0,!1)}function Im(t,e,n,o){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function zm(t,e,n,o){if(e===null||typeof e>"u"||Im(t,e,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Be(t,e,n,o,i,s,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=o,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=l}var xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){xe[t]=new Be(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];xe[e]=new Be(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){xe[t]=new Be(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){xe[t]=new Be(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){xe[t]=new Be(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){xe[t]=new Be(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){xe[t]=new Be(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){xe[t]=new Be(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){xe[t]=new Be(t,5,!1,t.toLowerCase(),null,!1,!1)});var sd=/[\-:]([a-z])/g;function ld(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(sd,ld);xe[e]=new Be(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(sd,ld);xe[e]=new Be(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(sd,ld);xe[e]=new Be(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){xe[t]=new Be(t,1,!1,t.toLowerCase(),null,!1,!1)});xe.xlinkHref=new Be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){xe[t]=new Be(t,1,!1,t.toLowerCase(),null,!0,!0)});function ad(t,e,n,o){var i=xe.hasOwnProperty(e)?xe[e]:null;(i!==null?i.type!==0:o||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(zm(e,n,i,o)&&(n=null),o||i===null?Cm(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,o=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,o?t.setAttributeNS(o,e,n):t.setAttribute(e,n))))}var Ar=jm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zi=Symbol.for("react.element"),$n=Symbol.for("react.portal"),Nn=Symbol.for("react.fragment"),dd=Symbol.for("react.strict_mode"),ql=Symbol.for("react.profiler"),ku=Symbol.for("react.provider"),ju=Symbol.for("react.context"),cd=Symbol.for("react.forward_ref"),Jl=Symbol.for("react.suspense"),Zl=Symbol.for("react.suspense_list"),gd=Symbol.for("react.memo"),Pr=Symbol.for("react.lazy"),Su=Symbol.for("react.offscreen"),hc=Symbol.iterator;function jo(t){return t===null||typeof t!="object"?null:(t=hc&&t[hc]||t["@@iterator"],typeof t=="function"?t:null)}var te=Object.assign,gl;function Fo(t){if(gl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);gl=e&&e[1]||""}return`
`+gl+t}var ul=!1;function pl(t,e){if(!t||ul)return"";ul=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var o=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){o=c}t.call(e.prototype)}else{try{throw Error()}catch(c){o=c}t()}}catch(c){if(c&&o&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=o.stack.split(`
`),l=i.length-1,a=s.length-1;1<=l&&0<=a&&i[l]!==s[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==s[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==s[a]){var d=`
`+i[l].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=l&&0<=a);break}}}finally{ul=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Fo(t):""}function Tm(t){switch(t.tag){case 5:return Fo(t.type);case 16:return Fo("Lazy");case 13:return Fo("Suspense");case 19:return Fo("SuspenseList");case 0:case 2:case 15:return t=pl(t.type,!1),t;case 11:return t=pl(t.type.render,!1),t;case 1:return t=pl(t.type,!0),t;default:return""}}function ta(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Nn:return"Fragment";case $n:return"Portal";case ql:return"Profiler";case dd:return"StrictMode";case Jl:return"Suspense";case Zl:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ju:return(t.displayName||"Context")+".Consumer";case ku:return(t._context.displayName||"Context")+".Provider";case cd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case gd:return e=t.displayName||null,e!==null?e:ta(t.type)||"Memo";case Pr:e=t._payload,t=t._init;try{return ta(t(e))}catch{}}return null}function Em(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ta(e);case 8:return e===dd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function tn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Cu(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Rm(t){var e=Cu(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),o=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(l){o=""+l,s.call(this,l)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(l){o=""+l},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ti(t){t._valueTracker||(t._valueTracker=Rm(t))}function Iu(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),o="";return t&&(o=Cu(t)?t.checked?"true":"false":t.value),t=o,t!==n?(e.setValue(t),!0):!1}function ms(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ea(t,e){var n=e.checked;return te({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function yc(t,e){var n=e.defaultValue==null?"":e.defaultValue,o=e.checked!=null?e.checked:e.defaultChecked;n=tn(e.value!=null?e.value:n),t._wrapperState={initialChecked:o,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function zu(t,e){e=e.checked,e!=null&&ad(t,"checked",e,!1)}function ra(t,e){zu(t,e);var n=tn(e.value),o=e.type;if(n!=null)o==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(o==="submit"||o==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?na(t,e.type,n):e.hasOwnProperty("defaultValue")&&na(t,e.type,tn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function xc(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var o=e.type;if(!(o!=="submit"&&o!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function na(t,e,n){(e!=="number"||ms(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Mo=Array.isArray;function Jn(t,e,n,o){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&o&&(t[n].defaultSelected=!0)}else{for(n=""+tn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,o&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function oa(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(tt(91));return te({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function vc(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(tt(92));if(Mo(n)){if(1<n.length)throw Error(tt(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:tn(n)}}function Tu(t,e){var n=tn(e.value),o=tn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),o!=null&&(t.defaultValue=""+o)}function wc(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Eu(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ia(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Eu(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ei,Ru=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,o,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,o,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ei=Ei||document.createElement("div"),Ei.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ei.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ei(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Oo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bm=["Webkit","ms","Moz","O"];Object.keys(Oo).forEach(function(t){Bm.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Oo[e]=Oo[t]})});function Bu(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Oo.hasOwnProperty(t)&&Oo[t]?(""+e).trim():e+"px"}function Du(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var o=n.indexOf("--")===0,i=Bu(n,e[n],o);n==="float"&&(n="cssFloat"),o?t.setProperty(n,i):t[n]=i}}var Dm=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sa(t,e){if(e){if(Dm[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(tt(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(tt(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(tt(61))}if(e.style!=null&&typeof e.style!="object")throw Error(tt(62))}}function la(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var aa=null;function ud(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var da=null,Zn=null,to=null;function kc(t){if(t=vi(t)){if(typeof da!="function")throw Error(tt(280));var e=t.stateNode;e&&(e=Qs(e),da(t.stateNode,t.type,e))}}function Au(t){Zn?to?to.push(t):to=[t]:Zn=t}function Fu(){if(Zn){var t=Zn,e=to;if(to=Zn=null,kc(t),e)for(t=0;t<e.length;t++)kc(e[t])}}function Mu(t,e){return t(e)}function Wu(){}var bl=!1;function _u(t,e,n){if(bl)return t(e,n);bl=!0;try{return Mu(t,e,n)}finally{bl=!1,(Zn!==null||to!==null)&&(Wu(),Fu())}}function ri(t,e){var n=t.stateNode;if(n===null)return null;var o=Qs(n);if(o===null)return null;n=o[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(tt(231,e,typeof n));return n}var ca=!1;if(Tr)try{var So={};Object.defineProperty(So,"passive",{get:function(){ca=!0}}),window.addEventListener("test",So,So),window.removeEventListener("test",So,So)}catch{ca=!1}function Am(t,e,n,o,i,s,l,a,d){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(p){this.onError(p)}}var Ho=!1,fs=null,hs=!1,ga=null,Fm={onError:function(t){Ho=!0,fs=t}};function Mm(t,e,n,o,i,s,l,a,d){Ho=!1,fs=null,Am.apply(Fm,arguments)}function Wm(t,e,n,o,i,s,l,a,d){if(Mm.apply(this,arguments),Ho){if(Ho){var c=fs;Ho=!1,fs=null}else throw Error(tt(198));hs||(hs=!0,ga=c)}}function In(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Lu(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function jc(t){if(In(t)!==t)throw Error(tt(188))}function _m(t){var e=t.alternate;if(!e){if(e=In(t),e===null)throw Error(tt(188));return e!==t?null:t}for(var n=t,o=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(o=i.return,o!==null){n=o;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return jc(i),t;if(s===o)return jc(i),e;s=s.sibling}throw Error(tt(188))}if(n.return!==o.return)n=i,o=s;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,o=s;break}if(a===o){l=!0,o=i,n=s;break}a=a.sibling}if(!l){for(a=s.child;a;){if(a===n){l=!0,n=s,o=i;break}if(a===o){l=!0,o=s,n=i;break}a=a.sibling}if(!l)throw Error(tt(189))}}if(n.alternate!==o)throw Error(tt(190))}if(n.tag!==3)throw Error(tt(188));return n.stateNode.current===n?t:e}function Pu(t){return t=_m(t),t!==null?$u(t):null}function $u(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=$u(t);if(e!==null)return e;t=t.sibling}return null}var Nu=He.unstable_scheduleCallback,Sc=He.unstable_cancelCallback,Lm=He.unstable_shouldYield,Pm=He.unstable_requestPaint,ne=He.unstable_now,$m=He.unstable_getCurrentPriorityLevel,pd=He.unstable_ImmediatePriority,Ou=He.unstable_UserBlockingPriority,ys=He.unstable_NormalPriority,Nm=He.unstable_LowPriority,Hu=He.unstable_IdlePriority,Gs=null,hr=null;function Om(t){if(hr&&typeof hr.onCommitFiberRoot=="function")try{hr.onCommitFiberRoot(Gs,t,void 0,(t.current.flags&128)===128)}catch{}}var ar=Math.clz32?Math.clz32:Um,Hm=Math.log,Gm=Math.LN2;function Um(t){return t>>>=0,t===0?32:31-(Hm(t)/Gm|0)|0}var Ri=64,Bi=4194304;function Wo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function xs(t,e){var n=t.pendingLanes;if(n===0)return 0;var o=0,i=t.suspendedLanes,s=t.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?o=Wo(a):(s&=l,s!==0&&(o=Wo(s)))}else l=n&~i,l!==0?o=Wo(l):s!==0&&(o=Wo(s));if(o===0)return 0;if(e!==0&&e!==o&&!(e&i)&&(i=o&-o,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(o&4&&(o|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=o;0<e;)n=31-ar(e),i=1<<n,o|=t[n],e&=~i;return o}function Ym(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vm(t,e){for(var n=t.suspendedLanes,o=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var l=31-ar(s),a=1<<l,d=i[l];d===-1?(!(a&n)||a&o)&&(i[l]=Ym(a,e)):d<=e&&(t.expiredLanes|=a),s&=~a}}function ua(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Gu(){var t=Ri;return Ri<<=1,!(Ri&4194240)&&(Ri=64),t}function ml(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function yi(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ar(e),t[e]=n}function Qm(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var o=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ar(n),s=1<<i;e[i]=0,o[i]=-1,t[i]=-1,n&=~s}}function bd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var o=31-ar(n),i=1<<o;i&e|t[o]&e&&(t[o]|=e),n&=~i}}var Ht=0;function Uu(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Yu,md,Vu,Qu,Ku,pa=!1,Di=[],Yr=null,Vr=null,Qr=null,ni=new Map,oi=new Map,Nr=[],Km="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cc(t,e){switch(t){case"focusin":case"focusout":Yr=null;break;case"dragenter":case"dragleave":Vr=null;break;case"mouseover":case"mouseout":Qr=null;break;case"pointerover":case"pointerout":ni.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":oi.delete(e.pointerId)}}function Co(t,e,n,o,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:o,nativeEvent:s,targetContainers:[i]},e!==null&&(e=vi(e),e!==null&&md(e)),t):(t.eventSystemFlags|=o,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Xm(t,e,n,o,i){switch(e){case"focusin":return Yr=Co(Yr,t,e,n,o,i),!0;case"dragenter":return Vr=Co(Vr,t,e,n,o,i),!0;case"mouseover":return Qr=Co(Qr,t,e,n,o,i),!0;case"pointerover":var s=i.pointerId;return ni.set(s,Co(ni.get(s)||null,t,e,n,o,i)),!0;case"gotpointercapture":return s=i.pointerId,oi.set(s,Co(oi.get(s)||null,t,e,n,o,i)),!0}return!1}function Xu(t){var e=pn(t.target);if(e!==null){var n=In(e);if(n!==null){if(e=n.tag,e===13){if(e=Lu(n),e!==null){t.blockedOn=e,Ku(t.priority,function(){Vu(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function rs(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ba(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var o=new n.constructor(n.type,n);aa=o,n.target.dispatchEvent(o),aa=null}else return e=vi(n),e!==null&&md(e),t.blockedOn=n,!1;e.shift()}return!0}function Ic(t,e,n){rs(t)&&n.delete(e)}function qm(){pa=!1,Yr!==null&&rs(Yr)&&(Yr=null),Vr!==null&&rs(Vr)&&(Vr=null),Qr!==null&&rs(Qr)&&(Qr=null),ni.forEach(Ic),oi.forEach(Ic)}function Io(t,e){t.blockedOn===e&&(t.blockedOn=null,pa||(pa=!0,He.unstable_scheduleCallback(He.unstable_NormalPriority,qm)))}function ii(t){function e(i){return Io(i,t)}if(0<Di.length){Io(Di[0],t);for(var n=1;n<Di.length;n++){var o=Di[n];o.blockedOn===t&&(o.blockedOn=null)}}for(Yr!==null&&Io(Yr,t),Vr!==null&&Io(Vr,t),Qr!==null&&Io(Qr,t),ni.forEach(e),oi.forEach(e),n=0;n<Nr.length;n++)o=Nr[n],o.blockedOn===t&&(o.blockedOn=null);for(;0<Nr.length&&(n=Nr[0],n.blockedOn===null);)Xu(n),n.blockedOn===null&&Nr.shift()}var eo=Ar.ReactCurrentBatchConfig,vs=!0;function Jm(t,e,n,o){var i=Ht,s=eo.transition;eo.transition=null;try{Ht=1,fd(t,e,n,o)}finally{Ht=i,eo.transition=s}}function Zm(t,e,n,o){var i=Ht,s=eo.transition;eo.transition=null;try{Ht=4,fd(t,e,n,o)}finally{Ht=i,eo.transition=s}}function fd(t,e,n,o){if(vs){var i=ba(t,e,n,o);if(i===null)Cl(t,e,o,ws,n),Cc(t,o);else if(Xm(i,t,e,n,o))o.stopPropagation();else if(Cc(t,o),e&4&&-1<Km.indexOf(t)){for(;i!==null;){var s=vi(i);if(s!==null&&Yu(s),s=ba(t,e,n,o),s===null&&Cl(t,e,o,ws,n),s===i)break;i=s}i!==null&&o.stopPropagation()}else Cl(t,e,o,null,n)}}var ws=null;function ba(t,e,n,o){if(ws=null,t=ud(o),t=pn(t),t!==null)if(e=In(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Lu(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ws=t,null}function qu(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($m()){case pd:return 1;case Ou:return 4;case ys:case Nm:return 16;case Hu:return 536870912;default:return 16}default:return 16}}var Gr=null,hd=null,ns=null;function Ju(){if(ns)return ns;var t,e=hd,n=e.length,o,i="value"in Gr?Gr.value:Gr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var l=n-t;for(o=1;o<=l&&e[n-o]===i[s-o];o++);return ns=i.slice(t,1<o?1-o:void 0)}function os(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ai(){return!0}function zc(){return!1}function Ue(t){function e(n,o,i,s,l){this._reactName=n,this._targetInst=i,this.type=o,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ai:zc,this.isPropagationStopped=zc,this}return te(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ai)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ai)},persist:function(){},isPersistent:Ai}),e}var mo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yd=Ue(mo),xi=te({},mo,{view:0,detail:0}),tf=Ue(xi),fl,hl,zo,Us=te({},xi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zo&&(zo&&t.type==="mousemove"?(fl=t.screenX-zo.screenX,hl=t.screenY-zo.screenY):hl=fl=0,zo=t),fl)},movementY:function(t){return"movementY"in t?t.movementY:hl}}),Tc=Ue(Us),ef=te({},Us,{dataTransfer:0}),rf=Ue(ef),nf=te({},xi,{relatedTarget:0}),yl=Ue(nf),of=te({},mo,{animationName:0,elapsedTime:0,pseudoElement:0}),sf=Ue(of),lf=te({},mo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),af=Ue(lf),df=te({},mo,{data:0}),Ec=Ue(df),cf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pf(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=uf[t])?!!e[t]:!1}function xd(){return pf}var bf=te({},xi,{key:function(t){if(t.key){var e=cf[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=os(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gf[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xd,charCode:function(t){return t.type==="keypress"?os(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?os(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),mf=Ue(bf),ff=te({},Us,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rc=Ue(ff),hf=te({},xi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xd}),yf=Ue(hf),xf=te({},mo,{propertyName:0,elapsedTime:0,pseudoElement:0}),vf=Ue(xf),wf=te({},Us,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),kf=Ue(wf),jf=[9,13,27,32],vd=Tr&&"CompositionEvent"in window,Go=null;Tr&&"documentMode"in document&&(Go=document.documentMode);var Sf=Tr&&"TextEvent"in window&&!Go,Zu=Tr&&(!vd||Go&&8<Go&&11>=Go),Bc=" ",Dc=!1;function tp(t,e){switch(t){case"keyup":return jf.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ep(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var On=!1;function Cf(t,e){switch(t){case"compositionend":return ep(e);case"keypress":return e.which!==32?null:(Dc=!0,Bc);case"textInput":return t=e.data,t===Bc&&Dc?null:t;default:return null}}function If(t,e){if(On)return t==="compositionend"||!vd&&tp(t,e)?(t=Ju(),ns=hd=Gr=null,On=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Zu&&e.locale!=="ko"?null:e.data;default:return null}}var zf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ac(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!zf[t.type]:e==="textarea"}function rp(t,e,n,o){Au(o),e=ks(e,"onChange"),0<e.length&&(n=new yd("onChange","change",null,n,o),t.push({event:n,listeners:e}))}var Uo=null,si=null;function Tf(t){pp(t,0)}function Ys(t){var e=Un(t);if(Iu(e))return t}function Ef(t,e){if(t==="change")return e}var np=!1;if(Tr){var xl;if(Tr){var vl="oninput"in document;if(!vl){var Fc=document.createElement("div");Fc.setAttribute("oninput","return;"),vl=typeof Fc.oninput=="function"}xl=vl}else xl=!1;np=xl&&(!document.documentMode||9<document.documentMode)}function Mc(){Uo&&(Uo.detachEvent("onpropertychange",op),si=Uo=null)}function op(t){if(t.propertyName==="value"&&Ys(si)){var e=[];rp(e,si,t,ud(t)),_u(Tf,e)}}function Rf(t,e,n){t==="focusin"?(Mc(),Uo=e,si=n,Uo.attachEvent("onpropertychange",op)):t==="focusout"&&Mc()}function Bf(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ys(si)}function Df(t,e){if(t==="click")return Ys(e)}function Af(t,e){if(t==="input"||t==="change")return Ys(e)}function Ff(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var cr=typeof Object.is=="function"?Object.is:Ff;function li(t,e){if(cr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),o=Object.keys(e);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var i=n[o];if(!Xl.call(e,i)||!cr(t[i],e[i]))return!1}return!0}function Wc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _c(t,e){var n=Wc(t);t=0;for(var o;n;){if(n.nodeType===3){if(o=t+n.textContent.length,t<=e&&o>=e)return{node:n,offset:e-t};t=o}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Wc(n)}}function ip(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ip(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function sp(){for(var t=window,e=ms();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ms(t.document)}return e}function wd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Mf(t){var e=sp(),n=t.focusedElem,o=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ip(n.ownerDocument.documentElement,n)){if(o!==null&&wd(n)){if(e=o.start,t=o.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(o.start,i);o=o.end===void 0?s:Math.min(o.end,i),!t.extend&&s>o&&(i=o,o=s,s=i),i=_c(n,s);var l=_c(n,o);i&&l&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>o?(t.addRange(e),t.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Wf=Tr&&"documentMode"in document&&11>=document.documentMode,Hn=null,ma=null,Yo=null,fa=!1;function Lc(t,e,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fa||Hn==null||Hn!==ms(o)||(o=Hn,"selectionStart"in o&&wd(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Yo&&li(Yo,o)||(Yo=o,o=ks(ma,"onSelect"),0<o.length&&(e=new yd("onSelect","select",null,e,n),t.push({event:e,listeners:o}),e.target=Hn)))}function Fi(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Gn={animationend:Fi("Animation","AnimationEnd"),animationiteration:Fi("Animation","AnimationIteration"),animationstart:Fi("Animation","AnimationStart"),transitionend:Fi("Transition","TransitionEnd")},wl={},lp={};Tr&&(lp=document.createElement("div").style,"AnimationEvent"in window||(delete Gn.animationend.animation,delete Gn.animationiteration.animation,delete Gn.animationstart.animation),"TransitionEvent"in window||delete Gn.transitionend.transition);function Vs(t){if(wl[t])return wl[t];if(!Gn[t])return t;var e=Gn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in lp)return wl[t]=e[n];return t}var ap=Vs("animationend"),dp=Vs("animationiteration"),cp=Vs("animationstart"),gp=Vs("transitionend"),up=new Map,Pc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rn(t,e){up.set(t,e),Cn(e,[t])}for(var kl=0;kl<Pc.length;kl++){var jl=Pc[kl],_f=jl.toLowerCase(),Lf=jl[0].toUpperCase()+jl.slice(1);rn(_f,"on"+Lf)}rn(ap,"onAnimationEnd");rn(dp,"onAnimationIteration");rn(cp,"onAnimationStart");rn("dblclick","onDoubleClick");rn("focusin","onFocus");rn("focusout","onBlur");rn(gp,"onTransitionEnd");oo("onMouseEnter",["mouseout","mouseover"]);oo("onMouseLeave",["mouseout","mouseover"]);oo("onPointerEnter",["pointerout","pointerover"]);oo("onPointerLeave",["pointerout","pointerover"]);Cn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pf=new Set("cancel close invalid load scroll toggle".split(" ").concat(_o));function $c(t,e,n){var o=t.type||"unknown-event";t.currentTarget=n,Wm(o,e,void 0,t),t.currentTarget=null}function pp(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var o=t[n],i=o.event;o=o.listeners;t:{var s=void 0;if(e)for(var l=o.length-1;0<=l;l--){var a=o[l],d=a.instance,c=a.currentTarget;if(a=a.listener,d!==s&&i.isPropagationStopped())break t;$c(i,a,c),s=d}else for(l=0;l<o.length;l++){if(a=o[l],d=a.instance,c=a.currentTarget,a=a.listener,d!==s&&i.isPropagationStopped())break t;$c(i,a,c),s=d}}}if(hs)throw t=ga,hs=!1,ga=null,t}function Kt(t,e){var n=e[wa];n===void 0&&(n=e[wa]=new Set);var o=t+"__bubble";n.has(o)||(bp(e,t,2,!1),n.add(o))}function Sl(t,e,n){var o=0;e&&(o|=4),bp(n,t,o,e)}var Mi="_reactListening"+Math.random().toString(36).slice(2);function ai(t){if(!t[Mi]){t[Mi]=!0,wu.forEach(function(n){n!=="selectionchange"&&(Pf.has(n)||Sl(n,!1,t),Sl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Mi]||(e[Mi]=!0,Sl("selectionchange",!1,e))}}function bp(t,e,n,o){switch(qu(e)){case 1:var i=Jm;break;case 4:i=Zm;break;default:i=fd}n=i.bind(null,e,n,t),i=void 0,!ca||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),o?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Cl(t,e,n,o,i){var s=o;if(!(e&1)&&!(e&2)&&o!==null)t:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var a=o.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=o.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;l=l.return}for(;a!==null;){if(l=pn(a),l===null)return;if(d=l.tag,d===5||d===6){o=s=l;continue t}a=a.parentNode}}o=o.return}_u(function(){var c=s,p=ud(n),y=[];t:{var m=up.get(t);if(m!==void 0){var j=yd,x=t;switch(t){case"keypress":if(os(n)===0)break t;case"keydown":case"keyup":j=mf;break;case"focusin":x="focus",j=yl;break;case"focusout":x="blur",j=yl;break;case"beforeblur":case"afterblur":j=yl;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Tc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=rf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=yf;break;case ap:case dp:case cp:j=sf;break;case gp:j=vf;break;case"scroll":j=tf;break;case"wheel":j=kf;break;case"copy":case"cut":case"paste":j=af;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Rc}var k=(e&4)!==0,T=!k&&t==="scroll",b=k?m!==null?m+"Capture":null:m;k=[];for(var u=c,h;u!==null;){h=u;var z=h.stateNode;if(h.tag===5&&z!==null&&(h=z,b!==null&&(z=ri(u,b),z!=null&&k.push(di(u,z,h)))),T)break;u=u.return}0<k.length&&(m=new j(m,x,null,n,p),y.push({event:m,listeners:k}))}}if(!(e&7)){t:{if(m=t==="mouseover"||t==="pointerover",j=t==="mouseout"||t==="pointerout",m&&n!==aa&&(x=n.relatedTarget||n.fromElement)&&(pn(x)||x[Er]))break t;if((j||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,j?(x=n.relatedTarget||n.toElement,j=c,x=x?pn(x):null,x!==null&&(T=In(x),x!==T||x.tag!==5&&x.tag!==6)&&(x=null)):(j=null,x=c),j!==x)){if(k=Tc,z="onMouseLeave",b="onMouseEnter",u="mouse",(t==="pointerout"||t==="pointerover")&&(k=Rc,z="onPointerLeave",b="onPointerEnter",u="pointer"),T=j==null?m:Un(j),h=x==null?m:Un(x),m=new k(z,u+"leave",j,n,p),m.target=T,m.relatedTarget=h,z=null,pn(p)===c&&(k=new k(b,u+"enter",x,n,p),k.target=h,k.relatedTarget=T,z=k),T=z,j&&x)e:{for(k=j,b=x,u=0,h=k;h;h=Dn(h))u++;for(h=0,z=b;z;z=Dn(z))h++;for(;0<u-h;)k=Dn(k),u--;for(;0<h-u;)b=Dn(b),h--;for(;u--;){if(k===b||b!==null&&k===b.alternate)break e;k=Dn(k),b=Dn(b)}k=null}else k=null;j!==null&&Nc(y,m,j,k,!1),x!==null&&T!==null&&Nc(y,T,x,k,!0)}}t:{if(m=c?Un(c):window,j=m.nodeName&&m.nodeName.toLowerCase(),j==="select"||j==="input"&&m.type==="file")var v=Ef;else if(Ac(m))if(np)v=Af;else{v=Bf;var I=Rf}else(j=m.nodeName)&&j.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(v=Df);if(v&&(v=v(t,c))){rp(y,v,n,p);break t}I&&I(t,m,c),t==="focusout"&&(I=m._wrapperState)&&I.controlled&&m.type==="number"&&na(m,"number",m.value)}switch(I=c?Un(c):window,t){case"focusin":(Ac(I)||I.contentEditable==="true")&&(Hn=I,ma=c,Yo=null);break;case"focusout":Yo=ma=Hn=null;break;case"mousedown":fa=!0;break;case"contextmenu":case"mouseup":case"dragend":fa=!1,Lc(y,n,p);break;case"selectionchange":if(Wf)break;case"keydown":case"keyup":Lc(y,n,p)}var L;if(vd)t:{switch(t){case"compositionstart":var R="onCompositionStart";break t;case"compositionend":R="onCompositionEnd";break t;case"compositionupdate":R="onCompositionUpdate";break t}R=void 0}else On?tp(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Zu&&n.locale!=="ko"&&(On||R!=="onCompositionStart"?R==="onCompositionEnd"&&On&&(L=Ju()):(Gr=p,hd="value"in Gr?Gr.value:Gr.textContent,On=!0)),I=ks(c,R),0<I.length&&(R=new Ec(R,t,null,n,p),y.push({event:R,listeners:I}),L?R.data=L:(L=ep(n),L!==null&&(R.data=L)))),(L=Sf?Cf(t,n):If(t,n))&&(c=ks(c,"onBeforeInput"),0<c.length&&(p=new Ec("onBeforeInput","beforeinput",null,n,p),y.push({event:p,listeners:c}),p.data=L))}pp(y,e)})}function di(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ks(t,e){for(var n=e+"Capture",o=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ri(t,n),s!=null&&o.unshift(di(t,s,i)),s=ri(t,e),s!=null&&o.push(di(t,s,i))),t=t.return}return o}function Dn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Nc(t,e,n,o,i){for(var s=e._reactName,l=[];n!==null&&n!==o;){var a=n,d=a.alternate,c=a.stateNode;if(d!==null&&d===o)break;a.tag===5&&c!==null&&(a=c,i?(d=ri(n,s),d!=null&&l.unshift(di(n,d,a))):i||(d=ri(n,s),d!=null&&l.push(di(n,d,a)))),n=n.return}l.length!==0&&t.push({event:e,listeners:l})}var $f=/\r\n?/g,Nf=/\u0000|\uFFFD/g;function Oc(t){return(typeof t=="string"?t:""+t).replace($f,`
`).replace(Nf,"")}function Wi(t,e,n){if(e=Oc(e),Oc(t)!==e&&n)throw Error(tt(425))}function js(){}var ha=null,ya=null;function xa(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var va=typeof setTimeout=="function"?setTimeout:void 0,Of=typeof clearTimeout=="function"?clearTimeout:void 0,Hc=typeof Promise=="function"?Promise:void 0,Hf=typeof queueMicrotask=="function"?queueMicrotask:typeof Hc<"u"?function(t){return Hc.resolve(null).then(t).catch(Gf)}:va;function Gf(t){setTimeout(function(){throw t})}function Il(t,e){var n=e,o=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(o===0){t.removeChild(i),ii(e);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=i}while(n);ii(e)}function Kr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Gc(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var fo=Math.random().toString(36).slice(2),fr="__reactFiber$"+fo,ci="__reactProps$"+fo,Er="__reactContainer$"+fo,wa="__reactEvents$"+fo,Uf="__reactListeners$"+fo,Yf="__reactHandles$"+fo;function pn(t){var e=t[fr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Er]||n[fr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Gc(t);t!==null;){if(n=t[fr])return n;t=Gc(t)}return e}t=n,n=t.parentNode}return null}function vi(t){return t=t[fr]||t[Er],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Un(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(tt(33))}function Qs(t){return t[ci]||null}var ka=[],Yn=-1;function nn(t){return{current:t}}function Xt(t){0>Yn||(t.current=ka[Yn],ka[Yn]=null,Yn--)}function Qt(t,e){Yn++,ka[Yn]=t.current,t.current=e}var en={},Se=nn(en),Me=nn(!1),xn=en;function io(t,e){var n=t.type.contextTypes;if(!n)return en;var o=t.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===e)return o.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return o&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function We(t){return t=t.childContextTypes,t!=null}function Ss(){Xt(Me),Xt(Se)}function Uc(t,e,n){if(Se.current!==en)throw Error(tt(168));Qt(Se,e),Qt(Me,n)}function mp(t,e,n){var o=t.stateNode;if(e=e.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var i in o)if(!(i in e))throw Error(tt(108,Em(t)||"Unknown",i));return te({},n,o)}function Cs(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||en,xn=Se.current,Qt(Se,t),Qt(Me,Me.current),!0}function Yc(t,e,n){var o=t.stateNode;if(!o)throw Error(tt(169));n?(t=mp(t,e,xn),o.__reactInternalMemoizedMergedChildContext=t,Xt(Me),Xt(Se),Qt(Se,t)):Xt(Me),Qt(Me,n)}var Sr=null,Ks=!1,zl=!1;function fp(t){Sr===null?Sr=[t]:Sr.push(t)}function Vf(t){Ks=!0,fp(t)}function on(){if(!zl&&Sr!==null){zl=!0;var t=0,e=Ht;try{var n=Sr;for(Ht=1;t<n.length;t++){var o=n[t];do o=o(!0);while(o!==null)}Sr=null,Ks=!1}catch(i){throw Sr!==null&&(Sr=Sr.slice(t+1)),Nu(pd,on),i}finally{Ht=e,zl=!1}}return null}var Vn=[],Qn=0,Is=null,zs=0,Ke=[],Xe=0,vn=null,Cr=1,Ir="";function cn(t,e){Vn[Qn++]=zs,Vn[Qn++]=Is,Is=t,zs=e}function hp(t,e,n){Ke[Xe++]=Cr,Ke[Xe++]=Ir,Ke[Xe++]=vn,vn=t;var o=Cr;t=Ir;var i=32-ar(o)-1;o&=~(1<<i),n+=1;var s=32-ar(e)+i;if(30<s){var l=i-i%5;s=(o&(1<<l)-1).toString(32),o>>=l,i-=l,Cr=1<<32-ar(e)+i|n<<i|o,Ir=s+t}else Cr=1<<s|n<<i|o,Ir=t}function kd(t){t.return!==null&&(cn(t,1),hp(t,1,0))}function jd(t){for(;t===Is;)Is=Vn[--Qn],Vn[Qn]=null,zs=Vn[--Qn],Vn[Qn]=null;for(;t===vn;)vn=Ke[--Xe],Ke[Xe]=null,Ir=Ke[--Xe],Ke[Xe]=null,Cr=Ke[--Xe],Ke[Xe]=null}var Oe=null,Ne=null,qt=!1,lr=null;function yp(t,e){var n=qe(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Vc(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Oe=t,Ne=Kr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Oe=t,Ne=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=vn!==null?{id:Cr,overflow:Ir}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=qe(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Oe=t,Ne=null,!0):!1;default:return!1}}function ja(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Sa(t){if(qt){var e=Ne;if(e){var n=e;if(!Vc(t,e)){if(ja(t))throw Error(tt(418));e=Kr(n.nextSibling);var o=Oe;e&&Vc(t,e)?yp(o,n):(t.flags=t.flags&-4097|2,qt=!1,Oe=t)}}else{if(ja(t))throw Error(tt(418));t.flags=t.flags&-4097|2,qt=!1,Oe=t}}}function Qc(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Oe=t}function _i(t){if(t!==Oe)return!1;if(!qt)return Qc(t),qt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!xa(t.type,t.memoizedProps)),e&&(e=Ne)){if(ja(t))throw xp(),Error(tt(418));for(;e;)yp(t,e),e=Kr(e.nextSibling)}if(Qc(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(tt(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ne=Kr(t.nextSibling);break t}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ne=null}}else Ne=Oe?Kr(t.stateNode.nextSibling):null;return!0}function xp(){for(var t=Ne;t;)t=Kr(t.nextSibling)}function so(){Ne=Oe=null,qt=!1}function Sd(t){lr===null?lr=[t]:lr.push(t)}var Qf=Ar.ReactCurrentBatchConfig;function To(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(tt(309));var o=n.stateNode}if(!o)throw Error(tt(147,t));var i=o,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(l){var a=i.refs;l===null?delete a[s]:a[s]=l},e._stringRef=s,e)}if(typeof t!="string")throw Error(tt(284));if(!n._owner)throw Error(tt(290,t))}return t}function Li(t,e){throw t=Object.prototype.toString.call(e),Error(tt(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Kc(t){var e=t._init;return e(t._payload)}function vp(t){function e(b,u){if(t){var h=b.deletions;h===null?(b.deletions=[u],b.flags|=16):h.push(u)}}function n(b,u){if(!t)return null;for(;u!==null;)e(b,u),u=u.sibling;return null}function o(b,u){for(b=new Map;u!==null;)u.key!==null?b.set(u.key,u):b.set(u.index,u),u=u.sibling;return b}function i(b,u){return b=Zr(b,u),b.index=0,b.sibling=null,b}function s(b,u,h){return b.index=h,t?(h=b.alternate,h!==null?(h=h.index,h<u?(b.flags|=2,u):h):(b.flags|=2,u)):(b.flags|=1048576,u)}function l(b){return t&&b.alternate===null&&(b.flags|=2),b}function a(b,u,h,z){return u===null||u.tag!==6?(u=Fl(h,b.mode,z),u.return=b,u):(u=i(u,h),u.return=b,u)}function d(b,u,h,z){var v=h.type;return v===Nn?p(b,u,h.props.children,z,h.key):u!==null&&(u.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===Pr&&Kc(v)===u.type)?(z=i(u,h.props),z.ref=To(b,u,h),z.return=b,z):(z=gs(h.type,h.key,h.props,null,b.mode,z),z.ref=To(b,u,h),z.return=b,z)}function c(b,u,h,z){return u===null||u.tag!==4||u.stateNode.containerInfo!==h.containerInfo||u.stateNode.implementation!==h.implementation?(u=Ml(h,b.mode,z),u.return=b,u):(u=i(u,h.children||[]),u.return=b,u)}function p(b,u,h,z,v){return u===null||u.tag!==7?(u=yn(h,b.mode,z,v),u.return=b,u):(u=i(u,h),u.return=b,u)}function y(b,u,h){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Fl(""+u,b.mode,h),u.return=b,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case zi:return h=gs(u.type,u.key,u.props,null,b.mode,h),h.ref=To(b,null,u),h.return=b,h;case $n:return u=Ml(u,b.mode,h),u.return=b,u;case Pr:var z=u._init;return y(b,z(u._payload),h)}if(Mo(u)||jo(u))return u=yn(u,b.mode,h,null),u.return=b,u;Li(b,u)}return null}function m(b,u,h,z){var v=u!==null?u.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return v!==null?null:a(b,u,""+h,z);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case zi:return h.key===v?d(b,u,h,z):null;case $n:return h.key===v?c(b,u,h,z):null;case Pr:return v=h._init,m(b,u,v(h._payload),z)}if(Mo(h)||jo(h))return v!==null?null:p(b,u,h,z,null);Li(b,h)}return null}function j(b,u,h,z,v){if(typeof z=="string"&&z!==""||typeof z=="number")return b=b.get(h)||null,a(u,b,""+z,v);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case zi:return b=b.get(z.key===null?h:z.key)||null,d(u,b,z,v);case $n:return b=b.get(z.key===null?h:z.key)||null,c(u,b,z,v);case Pr:var I=z._init;return j(b,u,h,I(z._payload),v)}if(Mo(z)||jo(z))return b=b.get(h)||null,p(u,b,z,v,null);Li(u,z)}return null}function x(b,u,h,z){for(var v=null,I=null,L=u,R=u=0,E=null;L!==null&&R<h.length;R++){L.index>R?(E=L,L=null):E=L.sibling;var M=m(b,L,h[R],z);if(M===null){L===null&&(L=E);break}t&&L&&M.alternate===null&&e(b,L),u=s(M,u,R),I===null?v=M:I.sibling=M,I=M,L=E}if(R===h.length)return n(b,L),qt&&cn(b,R),v;if(L===null){for(;R<h.length;R++)L=y(b,h[R],z),L!==null&&(u=s(L,u,R),I===null?v=L:I.sibling=L,I=L);return qt&&cn(b,R),v}for(L=o(b,L);R<h.length;R++)E=j(L,b,R,h[R],z),E!==null&&(t&&E.alternate!==null&&L.delete(E.key===null?R:E.key),u=s(E,u,R),I===null?v=E:I.sibling=E,I=E);return t&&L.forEach(function(S){return e(b,S)}),qt&&cn(b,R),v}function k(b,u,h,z){var v=jo(h);if(typeof v!="function")throw Error(tt(150));if(h=v.call(h),h==null)throw Error(tt(151));for(var I=v=null,L=u,R=u=0,E=null,M=h.next();L!==null&&!M.done;R++,M=h.next()){L.index>R?(E=L,L=null):E=L.sibling;var S=m(b,L,M.value,z);if(S===null){L===null&&(L=E);break}t&&L&&S.alternate===null&&e(b,L),u=s(S,u,R),I===null?v=S:I.sibling=S,I=S,L=E}if(M.done)return n(b,L),qt&&cn(b,R),v;if(L===null){for(;!M.done;R++,M=h.next())M=y(b,M.value,z),M!==null&&(u=s(M,u,R),I===null?v=M:I.sibling=M,I=M);return qt&&cn(b,R),v}for(L=o(b,L);!M.done;R++,M=h.next())M=j(L,b,R,M.value,z),M!==null&&(t&&M.alternate!==null&&L.delete(M.key===null?R:M.key),u=s(M,u,R),I===null?v=M:I.sibling=M,I=M);return t&&L.forEach(function(A){return e(b,A)}),qt&&cn(b,R),v}function T(b,u,h,z){if(typeof h=="object"&&h!==null&&h.type===Nn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case zi:t:{for(var v=h.key,I=u;I!==null;){if(I.key===v){if(v=h.type,v===Nn){if(I.tag===7){n(b,I.sibling),u=i(I,h.props.children),u.return=b,b=u;break t}}else if(I.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===Pr&&Kc(v)===I.type){n(b,I.sibling),u=i(I,h.props),u.ref=To(b,I,h),u.return=b,b=u;break t}n(b,I);break}else e(b,I);I=I.sibling}h.type===Nn?(u=yn(h.props.children,b.mode,z,h.key),u.return=b,b=u):(z=gs(h.type,h.key,h.props,null,b.mode,z),z.ref=To(b,u,h),z.return=b,b=z)}return l(b);case $n:t:{for(I=h.key;u!==null;){if(u.key===I)if(u.tag===4&&u.stateNode.containerInfo===h.containerInfo&&u.stateNode.implementation===h.implementation){n(b,u.sibling),u=i(u,h.children||[]),u.return=b,b=u;break t}else{n(b,u);break}else e(b,u);u=u.sibling}u=Ml(h,b.mode,z),u.return=b,b=u}return l(b);case Pr:return I=h._init,T(b,u,I(h._payload),z)}if(Mo(h))return x(b,u,h,z);if(jo(h))return k(b,u,h,z);Li(b,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,u!==null&&u.tag===6?(n(b,u.sibling),u=i(u,h),u.return=b,b=u):(n(b,u),u=Fl(h,b.mode,z),u.return=b,b=u),l(b)):n(b,u)}return T}var lo=vp(!0),wp=vp(!1),Ts=nn(null),Es=null,Kn=null,Cd=null;function Id(){Cd=Kn=Es=null}function zd(t){var e=Ts.current;Xt(Ts),t._currentValue=e}function Ca(t,e,n){for(;t!==null;){var o=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,o!==null&&(o.childLanes|=e)):o!==null&&(o.childLanes&e)!==e&&(o.childLanes|=e),t===n)break;t=t.return}}function ro(t,e){Es=t,Cd=Kn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Fe=!0),t.firstContext=null)}function Ze(t){var e=t._currentValue;if(Cd!==t)if(t={context:t,memoizedValue:e,next:null},Kn===null){if(Es===null)throw Error(tt(308));Kn=t,Es.dependencies={lanes:0,firstContext:t}}else Kn=Kn.next=t;return e}var bn=null;function Td(t){bn===null?bn=[t]:bn.push(t)}function kp(t,e,n,o){var i=e.interleaved;return i===null?(n.next=n,Td(e)):(n.next=i.next,i.next=n),e.interleaved=n,Rr(t,o)}function Rr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var $r=!1;function Ed(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jp(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function zr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Xr(t,e,n){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,$t&2){var i=o.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),o.pending=e,Rr(t,n)}return i=o.interleaved,i===null?(e.next=e,Td(o)):(e.next=i.next,i.next=e),o.interleaved=e,Rr(t,n)}function is(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var o=e.lanes;o&=t.pendingLanes,n|=o,e.lanes=n,bd(t,n)}}function Xc(t,e){var n=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=l:s=s.next=l,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:o.shared,effects:o.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Rs(t,e,n,o){var i=t.updateQueue;$r=!1;var s=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var d=a,c=d.next;d.next=null,l===null?s=c:l.next=c,l=d;var p=t.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==l&&(a===null?p.firstBaseUpdate=c:a.next=c,p.lastBaseUpdate=d))}if(s!==null){var y=i.baseState;l=0,p=c=d=null,a=s;do{var m=a.lane,j=a.eventTime;if((o&m)===m){p!==null&&(p=p.next={eventTime:j,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});t:{var x=t,k=a;switch(m=e,j=n,k.tag){case 1:if(x=k.payload,typeof x=="function"){y=x.call(j,y,m);break t}y=x;break t;case 3:x.flags=x.flags&-65537|128;case 0:if(x=k.payload,m=typeof x=="function"?x.call(j,y,m):x,m==null)break t;y=te({},y,m);break t;case 2:$r=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else j={eventTime:j,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(c=p=j,d=y):p=p.next=j,l|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(p===null&&(d=y),i.baseState=d,i.firstBaseUpdate=c,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do l|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);kn|=l,t.lanes=l,t.memoizedState=y}}function qc(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var o=t[e],i=o.callback;if(i!==null){if(o.callback=null,o=n,typeof i!="function")throw Error(tt(191,i));i.call(o)}}}var wi={},yr=nn(wi),gi=nn(wi),ui=nn(wi);function mn(t){if(t===wi)throw Error(tt(174));return t}function Rd(t,e){switch(Qt(ui,e),Qt(gi,t),Qt(yr,wi),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ia(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ia(e,t)}Xt(yr),Qt(yr,e)}function ao(){Xt(yr),Xt(gi),Xt(ui)}function Sp(t){mn(ui.current);var e=mn(yr.current),n=ia(e,t.type);e!==n&&(Qt(gi,t),Qt(yr,n))}function Bd(t){gi.current===t&&(Xt(yr),Xt(gi))}var Jt=nn(0);function Bs(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Tl=[];function Dd(){for(var t=0;t<Tl.length;t++)Tl[t]._workInProgressVersionPrimary=null;Tl.length=0}var ss=Ar.ReactCurrentDispatcher,El=Ar.ReactCurrentBatchConfig,wn=0,Zt=null,le=null,ue=null,Ds=!1,Vo=!1,pi=0,Kf=0;function we(){throw Error(tt(321))}function Ad(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!cr(t[n],e[n]))return!1;return!0}function Fd(t,e,n,o,i,s){if(wn=s,Zt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ss.current=t===null||t.memoizedState===null?Zf:th,t=n(o,i),Vo){s=0;do{if(Vo=!1,pi=0,25<=s)throw Error(tt(301));s+=1,ue=le=null,e.updateQueue=null,ss.current=eh,t=n(o,i)}while(Vo)}if(ss.current=As,e=le!==null&&le.next!==null,wn=0,ue=le=Zt=null,Ds=!1,e)throw Error(tt(300));return t}function Md(){var t=pi!==0;return pi=0,t}function ur(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?Zt.memoizedState=ue=t:ue=ue.next=t,ue}function tr(){if(le===null){var t=Zt.alternate;t=t!==null?t.memoizedState:null}else t=le.next;var e=ue===null?Zt.memoizedState:ue.next;if(e!==null)ue=e,le=t;else{if(t===null)throw Error(tt(310));le=t,t={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},ue===null?Zt.memoizedState=ue=t:ue=ue.next=t}return ue}function bi(t,e){return typeof e=="function"?e(t):e}function Rl(t){var e=tr(),n=e.queue;if(n===null)throw Error(tt(311));n.lastRenderedReducer=t;var o=le,i=o.baseQueue,s=n.pending;if(s!==null){if(i!==null){var l=i.next;i.next=s.next,s.next=l}o.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,o=o.baseState;var a=l=null,d=null,c=s;do{var p=c.lane;if((wn&p)===p)d!==null&&(d=d.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),o=c.hasEagerState?c.eagerState:t(o,c.action);else{var y={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};d===null?(a=d=y,l=o):d=d.next=y,Zt.lanes|=p,kn|=p}c=c.next}while(c!==null&&c!==s);d===null?l=o:d.next=a,cr(o,e.memoizedState)||(Fe=!0),e.memoizedState=o,e.baseState=l,e.baseQueue=d,n.lastRenderedState=o}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Zt.lanes|=s,kn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Bl(t){var e=tr(),n=e.queue;if(n===null)throw Error(tt(311));n.lastRenderedReducer=t;var o=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do s=t(s,l.action),l=l.next;while(l!==i);cr(s,e.memoizedState)||(Fe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,o]}function Cp(){}function Ip(t,e){var n=Zt,o=tr(),i=e(),s=!cr(o.memoizedState,i);if(s&&(o.memoizedState=i,Fe=!0),o=o.queue,Wd(Ep.bind(null,n,o,t),[t]),o.getSnapshot!==e||s||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,mi(9,Tp.bind(null,n,o,i,e),void 0,null),pe===null)throw Error(tt(349));wn&30||zp(n,e,i)}return i}function zp(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Zt.updateQueue,e===null?(e={lastEffect:null,stores:null},Zt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Tp(t,e,n,o){e.value=n,e.getSnapshot=o,Rp(e)&&Bp(t)}function Ep(t,e,n){return n(function(){Rp(e)&&Bp(t)})}function Rp(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!cr(t,n)}catch{return!0}}function Bp(t){var e=Rr(t,1);e!==null&&dr(e,t,1,-1)}function Jc(t){var e=ur();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bi,lastRenderedState:t},e.queue=t,t=t.dispatch=Jf.bind(null,Zt,t),[e.memoizedState,t]}function mi(t,e,n,o){return t={tag:t,create:e,destroy:n,deps:o,next:null},e=Zt.updateQueue,e===null?(e={lastEffect:null,stores:null},Zt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(o=n.next,n.next=t,t.next=o,e.lastEffect=t)),t}function Dp(){return tr().memoizedState}function ls(t,e,n,o){var i=ur();Zt.flags|=t,i.memoizedState=mi(1|e,n,void 0,o===void 0?null:o)}function Xs(t,e,n,o){var i=tr();o=o===void 0?null:o;var s=void 0;if(le!==null){var l=le.memoizedState;if(s=l.destroy,o!==null&&Ad(o,l.deps)){i.memoizedState=mi(e,n,s,o);return}}Zt.flags|=t,i.memoizedState=mi(1|e,n,s,o)}function Zc(t,e){return ls(8390656,8,t,e)}function Wd(t,e){return Xs(2048,8,t,e)}function Ap(t,e){return Xs(4,2,t,e)}function Fp(t,e){return Xs(4,4,t,e)}function Mp(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Wp(t,e,n){return n=n!=null?n.concat([t]):null,Xs(4,4,Mp.bind(null,e,t),n)}function _d(){}function _p(t,e){var n=tr();e=e===void 0?null:e;var o=n.memoizedState;return o!==null&&e!==null&&Ad(e,o[1])?o[0]:(n.memoizedState=[t,e],t)}function Lp(t,e){var n=tr();e=e===void 0?null:e;var o=n.memoizedState;return o!==null&&e!==null&&Ad(e,o[1])?o[0]:(t=t(),n.memoizedState=[t,e],t)}function Pp(t,e,n){return wn&21?(cr(n,e)||(n=Gu(),Zt.lanes|=n,kn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Fe=!0),t.memoizedState=n)}function Xf(t,e){var n=Ht;Ht=n!==0&&4>n?n:4,t(!0);var o=El.transition;El.transition={};try{t(!1),e()}finally{Ht=n,El.transition=o}}function $p(){return tr().memoizedState}function qf(t,e,n){var o=Jr(t);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},Np(t))Op(e,n);else if(n=kp(t,e,n,o),n!==null){var i=Ee();dr(n,t,o,i),Hp(n,e,o)}}function Jf(t,e,n){var o=Jr(t),i={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(Np(t))Op(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var l=e.lastRenderedState,a=s(l,n);if(i.hasEagerState=!0,i.eagerState=a,cr(a,l)){var d=e.interleaved;d===null?(i.next=i,Td(e)):(i.next=d.next,d.next=i),e.interleaved=i;return}}catch{}finally{}n=kp(t,e,i,o),n!==null&&(i=Ee(),dr(n,t,o,i),Hp(n,e,o))}}function Np(t){var e=t.alternate;return t===Zt||e!==null&&e===Zt}function Op(t,e){Vo=Ds=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Hp(t,e,n){if(n&4194240){var o=e.lanes;o&=t.pendingLanes,n|=o,e.lanes=n,bd(t,n)}}var As={readContext:Ze,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useInsertionEffect:we,useLayoutEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useMutableSource:we,useSyncExternalStore:we,useId:we,unstable_isNewReconciler:!1},Zf={readContext:Ze,useCallback:function(t,e){return ur().memoizedState=[t,e===void 0?null:e],t},useContext:Ze,useEffect:Zc,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ls(4194308,4,Mp.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ls(4194308,4,t,e)},useInsertionEffect:function(t,e){return ls(4,2,t,e)},useMemo:function(t,e){var n=ur();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var o=ur();return e=n!==void 0?n(e):e,o.memoizedState=o.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},o.queue=t,t=t.dispatch=qf.bind(null,Zt,t),[o.memoizedState,t]},useRef:function(t){var e=ur();return t={current:t},e.memoizedState=t},useState:Jc,useDebugValue:_d,useDeferredValue:function(t){return ur().memoizedState=t},useTransition:function(){var t=Jc(!1),e=t[0];return t=Xf.bind(null,t[1]),ur().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var o=Zt,i=ur();if(qt){if(n===void 0)throw Error(tt(407));n=n()}else{if(n=e(),pe===null)throw Error(tt(349));wn&30||zp(o,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Zc(Ep.bind(null,o,s,t),[t]),o.flags|=2048,mi(9,Tp.bind(null,o,s,n,e),void 0,null),n},useId:function(){var t=ur(),e=pe.identifierPrefix;if(qt){var n=Ir,o=Cr;n=(o&~(1<<32-ar(o)-1)).toString(32)+n,e=":"+e+"R"+n,n=pi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Kf++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},th={readContext:Ze,useCallback:_p,useContext:Ze,useEffect:Wd,useImperativeHandle:Wp,useInsertionEffect:Ap,useLayoutEffect:Fp,useMemo:Lp,useReducer:Rl,useRef:Dp,useState:function(){return Rl(bi)},useDebugValue:_d,useDeferredValue:function(t){var e=tr();return Pp(e,le.memoizedState,t)},useTransition:function(){var t=Rl(bi)[0],e=tr().memoizedState;return[t,e]},useMutableSource:Cp,useSyncExternalStore:Ip,useId:$p,unstable_isNewReconciler:!1},eh={readContext:Ze,useCallback:_p,useContext:Ze,useEffect:Wd,useImperativeHandle:Wp,useInsertionEffect:Ap,useLayoutEffect:Fp,useMemo:Lp,useReducer:Bl,useRef:Dp,useState:function(){return Bl(bi)},useDebugValue:_d,useDeferredValue:function(t){var e=tr();return le===null?e.memoizedState=t:Pp(e,le.memoizedState,t)},useTransition:function(){var t=Bl(bi)[0],e=tr().memoizedState;return[t,e]},useMutableSource:Cp,useSyncExternalStore:Ip,useId:$p,unstable_isNewReconciler:!1};function ir(t,e){if(t&&t.defaultProps){e=te({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ia(t,e,n,o){e=t.memoizedState,n=n(o,e),n=n==null?e:te({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var qs={isMounted:function(t){return(t=t._reactInternals)?In(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var o=Ee(),i=Jr(t),s=zr(o,i);s.payload=e,n!=null&&(s.callback=n),e=Xr(t,s,i),e!==null&&(dr(e,t,i,o),is(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var o=Ee(),i=Jr(t),s=zr(o,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Xr(t,s,i),e!==null&&(dr(e,t,i,o),is(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ee(),o=Jr(t),i=zr(n,o);i.tag=2,e!=null&&(i.callback=e),e=Xr(t,i,o),e!==null&&(dr(e,t,o,n),is(e,t,o))}};function tg(t,e,n,o,i,s,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,s,l):e.prototype&&e.prototype.isPureReactComponent?!li(n,o)||!li(i,s):!0}function Gp(t,e,n){var o=!1,i=en,s=e.contextType;return typeof s=="object"&&s!==null?s=Ze(s):(i=We(e)?xn:Se.current,o=e.contextTypes,s=(o=o!=null)?io(t,i):en),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=qs,t.stateNode=e,e._reactInternals=t,o&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function eg(t,e,n,o){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,o),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,o),e.state!==t&&qs.enqueueReplaceState(e,e.state,null)}function za(t,e,n,o){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Ed(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ze(s):(s=We(e)?xn:Se.current,i.context=io(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ia(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&qs.enqueueReplaceState(i,i.state,null),Rs(t,n,i,o),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function co(t,e){try{var n="",o=e;do n+=Tm(o),o=o.return;while(o);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Dl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ta(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var rh=typeof WeakMap=="function"?WeakMap:Map;function Up(t,e,n){n=zr(-1,n),n.tag=3,n.payload={element:null};var o=e.value;return n.callback=function(){Ms||(Ms=!0,La=o),Ta(t,e)},n}function Yp(t,e,n){n=zr(-1,n),n.tag=3;var o=t.type.getDerivedStateFromError;if(typeof o=="function"){var i=e.value;n.payload=function(){return o(i)},n.callback=function(){Ta(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ta(t,e),typeof o!="function"&&(qr===null?qr=new Set([this]):qr.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),n}function rg(t,e,n){var o=t.pingCache;if(o===null){o=t.pingCache=new rh;var i=new Set;o.set(e,i)}else i=o.get(e),i===void 0&&(i=new Set,o.set(e,i));i.has(n)||(i.add(n),t=fh.bind(null,t,e,n),e.then(t,t))}function ng(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function og(t,e,n,o,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=zr(-1,1),e.tag=2,Xr(n,e,1))),n.lanes|=1),t)}var nh=Ar.ReactCurrentOwner,Fe=!1;function Te(t,e,n,o){e.child=t===null?wp(e,null,n,o):lo(e,t.child,n,o)}function ig(t,e,n,o,i){n=n.render;var s=e.ref;return ro(e,i),o=Fd(t,e,n,o,s,i),n=Md(),t!==null&&!Fe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Br(t,e,i)):(qt&&n&&kd(e),e.flags|=1,Te(t,e,o,i),e.child)}function sg(t,e,n,o,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ud(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Vp(t,e,s,o,i)):(t=gs(n.type,null,o,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var l=s.memoizedProps;if(n=n.compare,n=n!==null?n:li,n(l,o)&&t.ref===e.ref)return Br(t,e,i)}return e.flags|=1,t=Zr(s,o),t.ref=e.ref,t.return=e,e.child=t}function Vp(t,e,n,o,i){if(t!==null){var s=t.memoizedProps;if(li(s,o)&&t.ref===e.ref)if(Fe=!1,e.pendingProps=o=s,(t.lanes&i)!==0)t.flags&131072&&(Fe=!0);else return e.lanes=t.lanes,Br(t,e,i)}return Ea(t,e,n,o,i)}function Qp(t,e,n){var o=e.pendingProps,i=o.children,s=t!==null?t.memoizedState:null;if(o.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Qt(qn,Pe),Pe|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Qt(qn,Pe),Pe|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=s!==null?s.baseLanes:n,Qt(qn,Pe),Pe|=o}else s!==null?(o=s.baseLanes|n,e.memoizedState=null):o=n,Qt(qn,Pe),Pe|=o;return Te(t,e,i,n),e.child}function Kp(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ea(t,e,n,o,i){var s=We(n)?xn:Se.current;return s=io(e,s),ro(e,i),n=Fd(t,e,n,o,s,i),o=Md(),t!==null&&!Fe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Br(t,e,i)):(qt&&o&&kd(e),e.flags|=1,Te(t,e,n,i),e.child)}function lg(t,e,n,o,i){if(We(n)){var s=!0;Cs(e)}else s=!1;if(ro(e,i),e.stateNode===null)as(t,e),Gp(e,n,o),za(e,n,o,i),o=!0;else if(t===null){var l=e.stateNode,a=e.memoizedProps;l.props=a;var d=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ze(c):(c=We(n)?xn:Se.current,c=io(e,c));var p=n.getDerivedStateFromProps,y=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";y||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==o||d!==c)&&eg(e,l,o,c),$r=!1;var m=e.memoizedState;l.state=m,Rs(e,o,l,i),d=e.memoizedState,a!==o||m!==d||Me.current||$r?(typeof p=="function"&&(Ia(e,n,p,o),d=e.memoizedState),(a=$r||tg(e,n,a,o,m,d,c))?(y||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=o,e.memoizedState=d),l.props=o,l.state=d,l.context=c,o=a):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),o=!1)}else{l=e.stateNode,jp(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ir(e.type,a),l.props=c,y=e.pendingProps,m=l.context,d=n.contextType,typeof d=="object"&&d!==null?d=Ze(d):(d=We(n)?xn:Se.current,d=io(e,d));var j=n.getDerivedStateFromProps;(p=typeof j=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==y||m!==d)&&eg(e,l,o,d),$r=!1,m=e.memoizedState,l.state=m,Rs(e,o,l,i);var x=e.memoizedState;a!==y||m!==x||Me.current||$r?(typeof j=="function"&&(Ia(e,n,j,o),x=e.memoizedState),(c=$r||tg(e,n,c,o,m,x,d)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(o,x,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(o,x,d)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=o,e.memoizedState=x),l.props=o,l.state=x,l.context=d,o=c):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),o=!1)}return Ra(t,e,n,o,s,i)}function Ra(t,e,n,o,i,s){Kp(t,e);var l=(e.flags&128)!==0;if(!o&&!l)return i&&Yc(e,n,!1),Br(t,e,s);o=e.stateNode,nh.current=e;var a=l&&typeof n.getDerivedStateFromError!="function"?null:o.render();return e.flags|=1,t!==null&&l?(e.child=lo(e,t.child,null,s),e.child=lo(e,null,a,s)):Te(t,e,a,s),e.memoizedState=o.state,i&&Yc(e,n,!0),e.child}function Xp(t){var e=t.stateNode;e.pendingContext?Uc(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Uc(t,e.context,!1),Rd(t,e.containerInfo)}function ag(t,e,n,o,i){return so(),Sd(i),e.flags|=256,Te(t,e,n,o),e.child}var Ba={dehydrated:null,treeContext:null,retryLane:0};function Da(t){return{baseLanes:t,cachePool:null,transitions:null}}function qp(t,e,n){var o=e.pendingProps,i=Jt.current,s=!1,l=(e.flags&128)!==0,a;if((a=l)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Qt(Jt,i&1),t===null)return Sa(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=o.children,t=o.fallback,s?(o=e.mode,s=e.child,l={mode:"hidden",children:l},!(o&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=tl(l,o,0,null),t=yn(t,o,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Da(n),e.memoizedState=Ba,t):Ld(e,l));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return oh(t,e,l,o,a,i,n);if(s){s=o.fallback,l=e.mode,i=t.child,a=i.sibling;var d={mode:"hidden",children:o.children};return!(l&1)&&e.child!==i?(o=e.child,o.childLanes=0,o.pendingProps=d,e.deletions=null):(o=Zr(i,d),o.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Zr(a,s):(s=yn(s,l,n,null),s.flags|=2),s.return=e,o.return=e,o.sibling=s,e.child=o,o=s,s=e.child,l=t.child.memoizedState,l=l===null?Da(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=t.childLanes&~n,e.memoizedState=Ba,o}return s=t.child,t=s.sibling,o=Zr(s,{mode:"visible",children:o.children}),!(e.mode&1)&&(o.lanes=n),o.return=e,o.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=o,e.memoizedState=null,o}function Ld(t,e){return e=tl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Pi(t,e,n,o){return o!==null&&Sd(o),lo(e,t.child,null,n),t=Ld(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function oh(t,e,n,o,i,s,l){if(n)return e.flags&256?(e.flags&=-257,o=Dl(Error(tt(422))),Pi(t,e,l,o)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=o.fallback,i=e.mode,o=tl({mode:"visible",children:o.children},i,0,null),s=yn(s,i,l,null),s.flags|=2,o.return=e,s.return=e,o.sibling=s,e.child=o,e.mode&1&&lo(e,t.child,null,l),e.child.memoizedState=Da(l),e.memoizedState=Ba,s);if(!(e.mode&1))return Pi(t,e,l,null);if(i.data==="$!"){if(o=i.nextSibling&&i.nextSibling.dataset,o)var a=o.dgst;return o=a,s=Error(tt(419)),o=Dl(s,o,void 0),Pi(t,e,l,o)}if(a=(l&t.childLanes)!==0,Fe||a){if(o=pe,o!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(o.suspendedLanes|l)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Rr(t,i),dr(o,t,i,-1))}return Gd(),o=Dl(Error(tt(421))),Pi(t,e,l,o)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=hh.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ne=Kr(i.nextSibling),Oe=e,qt=!0,lr=null,t!==null&&(Ke[Xe++]=Cr,Ke[Xe++]=Ir,Ke[Xe++]=vn,Cr=t.id,Ir=t.overflow,vn=e),e=Ld(e,o.children),e.flags|=4096,e)}function dg(t,e,n){t.lanes|=e;var o=t.alternate;o!==null&&(o.lanes|=e),Ca(t.return,e,n)}function Al(t,e,n,o,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=n,s.tailMode=i)}function Jp(t,e,n){var o=e.pendingProps,i=o.revealOrder,s=o.tail;if(Te(t,e,o.children,n),o=Jt.current,o&2)o=o&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&dg(t,n,e);else if(t.tag===19)dg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}if(Qt(Jt,o),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Bs(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Al(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Bs(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Al(e,!0,n,null,s);break;case"together":Al(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function as(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Br(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),kn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(tt(153));if(e.child!==null){for(t=e.child,n=Zr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Zr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ih(t,e,n){switch(e.tag){case 3:Xp(e),so();break;case 5:Sp(e);break;case 1:We(e.type)&&Cs(e);break;case 4:Rd(e,e.stateNode.containerInfo);break;case 10:var o=e.type._context,i=e.memoizedProps.value;Qt(Ts,o._currentValue),o._currentValue=i;break;case 13:if(o=e.memoizedState,o!==null)return o.dehydrated!==null?(Qt(Jt,Jt.current&1),e.flags|=128,null):n&e.child.childLanes?qp(t,e,n):(Qt(Jt,Jt.current&1),t=Br(t,e,n),t!==null?t.sibling:null);Qt(Jt,Jt.current&1);break;case 19:if(o=(n&e.childLanes)!==0,t.flags&128){if(o)return Jp(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Qt(Jt,Jt.current),o)break;return null;case 22:case 23:return e.lanes=0,Qp(t,e,n)}return Br(t,e,n)}var Zp,Aa,tb,eb;Zp=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Aa=function(){};tb=function(t,e,n,o){var i=t.memoizedProps;if(i!==o){t=e.stateNode,mn(yr.current);var s=null;switch(n){case"input":i=ea(t,i),o=ea(t,o),s=[];break;case"select":i=te({},i,{value:void 0}),o=te({},o,{value:void 0}),s=[];break;case"textarea":i=oa(t,i),o=oa(t,o),s=[];break;default:typeof i.onClick!="function"&&typeof o.onClick=="function"&&(t.onclick=js)}sa(n,o);var l;n=null;for(c in i)if(!o.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ti.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in o){var d=o[c];if(a=i!=null?i[c]:void 0,o.hasOwnProperty(c)&&d!==a&&(d!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in d)d.hasOwnProperty(l)&&a[l]!==d[l]&&(n||(n={}),n[l]=d[l])}else n||(s||(s=[]),s.push(c,n)),n=d;else c==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,a=a?a.__html:void 0,d!=null&&a!==d&&(s=s||[]).push(c,d)):c==="children"?typeof d!="string"&&typeof d!="number"||(s=s||[]).push(c,""+d):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ti.hasOwnProperty(c)?(d!=null&&c==="onScroll"&&Kt("scroll",t),s||a===d||(s=[])):(s=s||[]).push(c,d))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};eb=function(t,e,n,o){n!==o&&(e.flags|=4)};function Eo(t,e){if(!qt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function ke(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,o=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags&14680064,o|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=o,t.childLanes=n,e}function sh(t,e,n){var o=e.pendingProps;switch(jd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(e),null;case 1:return We(e.type)&&Ss(),ke(e),null;case 3:return o=e.stateNode,ao(),Xt(Me),Xt(Se),Dd(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(t===null||t.child===null)&&(_i(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,lr!==null&&(Na(lr),lr=null))),Aa(t,e),ke(e),null;case 5:Bd(e);var i=mn(ui.current);if(n=e.type,t!==null&&e.stateNode!=null)tb(t,e,n,o,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!o){if(e.stateNode===null)throw Error(tt(166));return ke(e),null}if(t=mn(yr.current),_i(e)){o=e.stateNode,n=e.type;var s=e.memoizedProps;switch(o[fr]=e,o[ci]=s,t=(e.mode&1)!==0,n){case"dialog":Kt("cancel",o),Kt("close",o);break;case"iframe":case"object":case"embed":Kt("load",o);break;case"video":case"audio":for(i=0;i<_o.length;i++)Kt(_o[i],o);break;case"source":Kt("error",o);break;case"img":case"image":case"link":Kt("error",o),Kt("load",o);break;case"details":Kt("toggle",o);break;case"input":yc(o,s),Kt("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!s.multiple},Kt("invalid",o);break;case"textarea":vc(o,s),Kt("invalid",o)}sa(n,s),i=null;for(var l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="children"?typeof a=="string"?o.textContent!==a&&(s.suppressHydrationWarning!==!0&&Wi(o.textContent,a,t),i=["children",a]):typeof a=="number"&&o.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Wi(o.textContent,a,t),i=["children",""+a]):ti.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&Kt("scroll",o)}switch(n){case"input":Ti(o),xc(o,s,!0);break;case"textarea":Ti(o),wc(o);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(o.onclick=js)}o=i,e.updateQueue=o,o!==null&&(e.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Eu(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof o.is=="string"?t=l.createElement(n,{is:o.is}):(t=l.createElement(n),n==="select"&&(l=t,o.multiple?l.multiple=!0:o.size&&(l.size=o.size))):t=l.createElementNS(t,n),t[fr]=e,t[ci]=o,Zp(t,e,!1,!1),e.stateNode=t;t:{switch(l=la(n,o),n){case"dialog":Kt("cancel",t),Kt("close",t),i=o;break;case"iframe":case"object":case"embed":Kt("load",t),i=o;break;case"video":case"audio":for(i=0;i<_o.length;i++)Kt(_o[i],t);i=o;break;case"source":Kt("error",t),i=o;break;case"img":case"image":case"link":Kt("error",t),Kt("load",t),i=o;break;case"details":Kt("toggle",t),i=o;break;case"input":yc(t,o),i=ea(t,o),Kt("invalid",t);break;case"option":i=o;break;case"select":t._wrapperState={wasMultiple:!!o.multiple},i=te({},o,{value:void 0}),Kt("invalid",t);break;case"textarea":vc(t,o),i=oa(t,o),Kt("invalid",t);break;default:i=o}sa(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var d=a[s];s==="style"?Du(t,d):s==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Ru(t,d)):s==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&ei(t,d):typeof d=="number"&&ei(t,""+d):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ti.hasOwnProperty(s)?d!=null&&s==="onScroll"&&Kt("scroll",t):d!=null&&ad(t,s,d,l))}switch(n){case"input":Ti(t),xc(t,o,!1);break;case"textarea":Ti(t),wc(t);break;case"option":o.value!=null&&t.setAttribute("value",""+tn(o.value));break;case"select":t.multiple=!!o.multiple,s=o.value,s!=null?Jn(t,!!o.multiple,s,!1):o.defaultValue!=null&&Jn(t,!!o.multiple,o.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=js)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}}o&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ke(e),null;case 6:if(t&&e.stateNode!=null)eb(t,e,t.memoizedProps,o);else{if(typeof o!="string"&&e.stateNode===null)throw Error(tt(166));if(n=mn(ui.current),mn(yr.current),_i(e)){if(o=e.stateNode,n=e.memoizedProps,o[fr]=e,(s=o.nodeValue!==n)&&(t=Oe,t!==null))switch(t.tag){case 3:Wi(o.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Wi(o.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[fr]=e,e.stateNode=o}return ke(e),null;case 13:if(Xt(Jt),o=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(qt&&Ne!==null&&e.mode&1&&!(e.flags&128))xp(),so(),e.flags|=98560,s=!1;else if(s=_i(e),o!==null&&o.dehydrated!==null){if(t===null){if(!s)throw Error(tt(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(tt(317));s[fr]=e}else so(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ke(e),s=!1}else lr!==null&&(Na(lr),lr=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(o=o!==null,o!==(t!==null&&t.memoizedState!==null)&&o&&(e.child.flags|=8192,e.mode&1&&(t===null||Jt.current&1?ae===0&&(ae=3):Gd())),e.updateQueue!==null&&(e.flags|=4),ke(e),null);case 4:return ao(),Aa(t,e),t===null&&ai(e.stateNode.containerInfo),ke(e),null;case 10:return zd(e.type._context),ke(e),null;case 17:return We(e.type)&&Ss(),ke(e),null;case 19:if(Xt(Jt),s=e.memoizedState,s===null)return ke(e),null;if(o=(e.flags&128)!==0,l=s.rendering,l===null)if(o)Eo(s,!1);else{if(ae!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(l=Bs(t),l!==null){for(e.flags|=128,Eo(s,!1),o=l.updateQueue,o!==null&&(e.updateQueue=o,e.flags|=4),e.subtreeFlags=0,o=n,n=e.child;n!==null;)s=n,t=o,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,t=l.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Qt(Jt,Jt.current&1|2),e.child}t=t.sibling}s.tail!==null&&ne()>go&&(e.flags|=128,o=!0,Eo(s,!1),e.lanes=4194304)}else{if(!o)if(t=Bs(l),t!==null){if(e.flags|=128,o=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Eo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!qt)return ke(e),null}else 2*ne()-s.renderingStartTime>go&&n!==1073741824&&(e.flags|=128,o=!0,Eo(s,!1),e.lanes=4194304);s.isBackwards?(l.sibling=e.child,e.child=l):(n=s.last,n!==null?n.sibling=l:e.child=l,s.last=l)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ne(),e.sibling=null,n=Jt.current,Qt(Jt,o?n&1|2:n&1),e):(ke(e),null);case 22:case 23:return Hd(),o=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==o&&(e.flags|=8192),o&&e.mode&1?Pe&1073741824&&(ke(e),e.subtreeFlags&6&&(e.flags|=8192)):ke(e),null;case 24:return null;case 25:return null}throw Error(tt(156,e.tag))}function lh(t,e){switch(jd(e),e.tag){case 1:return We(e.type)&&Ss(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ao(),Xt(Me),Xt(Se),Dd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Bd(e),null;case 13:if(Xt(Jt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(tt(340));so()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Xt(Jt),null;case 4:return ao(),null;case 10:return zd(e.type._context),null;case 22:case 23:return Hd(),null;case 24:return null;default:return null}}var $i=!1,je=!1,ah=typeof WeakSet=="function"?WeakSet:Set,mt=null;function Xn(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){re(t,e,o)}else n.current=null}function Fa(t,e,n){try{n()}catch(o){re(t,e,o)}}var cg=!1;function dh(t,e){if(ha=vs,t=sp(),wd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var i=o.anchorOffset,s=o.focusNode;o=o.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break t}var l=0,a=-1,d=-1,c=0,p=0,y=t,m=null;e:for(;;){for(var j;y!==n||i!==0&&y.nodeType!==3||(a=l+i),y!==s||o!==0&&y.nodeType!==3||(d=l+o),y.nodeType===3&&(l+=y.nodeValue.length),(j=y.firstChild)!==null;)m=y,y=j;for(;;){if(y===t)break e;if(m===n&&++c===i&&(a=l),m===s&&++p===o&&(d=l),(j=y.nextSibling)!==null)break;y=m,m=y.parentNode}y=j}n=a===-1||d===-1?null:{start:a,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(ya={focusedElem:t,selectionRange:n},vs=!1,mt=e;mt!==null;)if(e=mt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,mt=t;else for(;mt!==null;){e=mt;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var k=x.memoizedProps,T=x.memoizedState,b=e.stateNode,u=b.getSnapshotBeforeUpdate(e.elementType===e.type?k:ir(e.type,k),T);b.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var h=e.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(tt(163))}}catch(z){re(e,e.return,z)}if(t=e.sibling,t!==null){t.return=e.return,mt=t;break}mt=e.return}return x=cg,cg=!1,x}function Qo(t,e,n){var o=e.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var i=o=o.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Fa(e,n,s)}i=i.next}while(i!==o)}}function Js(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var o=n.create;n.destroy=o()}n=n.next}while(n!==e)}}function Ma(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function rb(t){var e=t.alternate;e!==null&&(t.alternate=null,rb(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[fr],delete e[ci],delete e[wa],delete e[Uf],delete e[Yf])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function nb(t){return t.tag===5||t.tag===3||t.tag===4}function gg(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||nb(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wa(t,e,n){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=js));else if(o!==4&&(t=t.child,t!==null))for(Wa(t,e,n),t=t.sibling;t!==null;)Wa(t,e,n),t=t.sibling}function _a(t,e,n){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(o!==4&&(t=t.child,t!==null))for(_a(t,e,n),t=t.sibling;t!==null;)_a(t,e,n),t=t.sibling}var fe=null,sr=!1;function Lr(t,e,n){for(n=n.child;n!==null;)ob(t,e,n),n=n.sibling}function ob(t,e,n){if(hr&&typeof hr.onCommitFiberUnmount=="function")try{hr.onCommitFiberUnmount(Gs,n)}catch{}switch(n.tag){case 5:je||Xn(n,e);case 6:var o=fe,i=sr;fe=null,Lr(t,e,n),fe=o,sr=i,fe!==null&&(sr?(t=fe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):fe.removeChild(n.stateNode));break;case 18:fe!==null&&(sr?(t=fe,n=n.stateNode,t.nodeType===8?Il(t.parentNode,n):t.nodeType===1&&Il(t,n),ii(t)):Il(fe,n.stateNode));break;case 4:o=fe,i=sr,fe=n.stateNode.containerInfo,sr=!0,Lr(t,e,n),fe=o,sr=i;break;case 0:case 11:case 14:case 15:if(!je&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){i=o=o.next;do{var s=i,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&Fa(n,e,l),i=i.next}while(i!==o)}Lr(t,e,n);break;case 1:if(!je&&(Xn(n,e),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(a){re(n,e,a)}Lr(t,e,n);break;case 21:Lr(t,e,n);break;case 22:n.mode&1?(je=(o=je)||n.memoizedState!==null,Lr(t,e,n),je=o):Lr(t,e,n);break;default:Lr(t,e,n)}}function ug(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ah),e.forEach(function(o){var i=yh.bind(null,t,o);n.has(o)||(n.add(o),o.then(i,i))})}}function nr(t,e){var n=e.deletions;if(n!==null)for(var o=0;o<n.length;o++){var i=n[o];try{var s=t,l=e,a=l;t:for(;a!==null;){switch(a.tag){case 5:fe=a.stateNode,sr=!1;break t;case 3:fe=a.stateNode.containerInfo,sr=!0;break t;case 4:fe=a.stateNode.containerInfo,sr=!0;break t}a=a.return}if(fe===null)throw Error(tt(160));ob(s,l,i),fe=null,sr=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(c){re(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ib(e,t),e=e.sibling}function ib(t,e){var n=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(nr(e,t),gr(t),o&4){try{Qo(3,t,t.return),Js(3,t)}catch(k){re(t,t.return,k)}try{Qo(5,t,t.return)}catch(k){re(t,t.return,k)}}break;case 1:nr(e,t),gr(t),o&512&&n!==null&&Xn(n,n.return);break;case 5:if(nr(e,t),gr(t),o&512&&n!==null&&Xn(n,n.return),t.flags&32){var i=t.stateNode;try{ei(i,"")}catch(k){re(t,t.return,k)}}if(o&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,l=n!==null?n.memoizedProps:s,a=t.type,d=t.updateQueue;if(t.updateQueue=null,d!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&zu(i,s),la(a,l);var c=la(a,s);for(l=0;l<d.length;l+=2){var p=d[l],y=d[l+1];p==="style"?Du(i,y):p==="dangerouslySetInnerHTML"?Ru(i,y):p==="children"?ei(i,y):ad(i,p,y,c)}switch(a){case"input":ra(i,s);break;case"textarea":Tu(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var j=s.value;j!=null?Jn(i,!!s.multiple,j,!1):m!==!!s.multiple&&(s.defaultValue!=null?Jn(i,!!s.multiple,s.defaultValue,!0):Jn(i,!!s.multiple,s.multiple?[]:"",!1))}i[ci]=s}catch(k){re(t,t.return,k)}}break;case 6:if(nr(e,t),gr(t),o&4){if(t.stateNode===null)throw Error(tt(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){re(t,t.return,k)}}break;case 3:if(nr(e,t),gr(t),o&4&&n!==null&&n.memoizedState.isDehydrated)try{ii(e.containerInfo)}catch(k){re(t,t.return,k)}break;case 4:nr(e,t),gr(t);break;case 13:nr(e,t),gr(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Nd=ne())),o&4&&ug(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(je=(c=je)||p,nr(e,t),je=c):nr(e,t),gr(t),o&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!p&&t.mode&1)for(mt=t,p=t.child;p!==null;){for(y=mt=p;mt!==null;){switch(m=mt,j=m.child,m.tag){case 0:case 11:case 14:case 15:Qo(4,m,m.return);break;case 1:Xn(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){o=m,n=m.return;try{e=o,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(k){re(o,n,k)}}break;case 5:Xn(m,m.return);break;case 22:if(m.memoizedState!==null){bg(y);continue}}j!==null?(j.return=m,mt=j):bg(y)}p=p.sibling}t:for(p=null,y=t;;){if(y.tag===5){if(p===null){p=y;try{i=y.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=y.stateNode,d=y.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,a.style.display=Bu("display",l))}catch(k){re(t,t.return,k)}}}else if(y.tag===6){if(p===null)try{y.stateNode.nodeValue=c?"":y.memoizedProps}catch(k){re(t,t.return,k)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===t)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===t)break t;for(;y.sibling===null;){if(y.return===null||y.return===t)break t;p===y&&(p=null),y=y.return}p===y&&(p=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:nr(e,t),gr(t),o&4&&ug(t);break;case 21:break;default:nr(e,t),gr(t)}}function gr(t){var e=t.flags;if(e&2){try{t:{for(var n=t.return;n!==null;){if(nb(n)){var o=n;break t}n=n.return}throw Error(tt(160))}switch(o.tag){case 5:var i=o.stateNode;o.flags&32&&(ei(i,""),o.flags&=-33);var s=gg(t);_a(t,s,i);break;case 3:case 4:var l=o.stateNode.containerInfo,a=gg(t);Wa(t,a,l);break;default:throw Error(tt(161))}}catch(d){re(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ch(t,e,n){mt=t,sb(t)}function sb(t,e,n){for(var o=(t.mode&1)!==0;mt!==null;){var i=mt,s=i.child;if(i.tag===22&&o){var l=i.memoizedState!==null||$i;if(!l){var a=i.alternate,d=a!==null&&a.memoizedState!==null||je;a=$i;var c=je;if($i=l,(je=d)&&!c)for(mt=i;mt!==null;)l=mt,d=l.child,l.tag===22&&l.memoizedState!==null?mg(i):d!==null?(d.return=l,mt=d):mg(i);for(;s!==null;)mt=s,sb(s),s=s.sibling;mt=i,$i=a,je=c}pg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,mt=s):pg(t)}}function pg(t){for(;mt!==null;){var e=mt;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:je||Js(5,e);break;case 1:var o=e.stateNode;if(e.flags&4&&!je)if(n===null)o.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:ir(e.type,n.memoizedProps);o.componentDidUpdate(i,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&qc(e,s,o);break;case 3:var l=e.updateQueue;if(l!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}qc(e,l,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var d=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var y=p.dehydrated;y!==null&&ii(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(tt(163))}je||e.flags&512&&Ma(e)}catch(m){re(e,e.return,m)}}if(e===t){mt=null;break}if(n=e.sibling,n!==null){n.return=e.return,mt=n;break}mt=e.return}}function bg(t){for(;mt!==null;){var e=mt;if(e===t){mt=null;break}var n=e.sibling;if(n!==null){n.return=e.return,mt=n;break}mt=e.return}}function mg(t){for(;mt!==null;){var e=mt;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Js(4,e)}catch(d){re(e,n,d)}break;case 1:var o=e.stateNode;if(typeof o.componentDidMount=="function"){var i=e.return;try{o.componentDidMount()}catch(d){re(e,i,d)}}var s=e.return;try{Ma(e)}catch(d){re(e,s,d)}break;case 5:var l=e.return;try{Ma(e)}catch(d){re(e,l,d)}}}catch(d){re(e,e.return,d)}if(e===t){mt=null;break}var a=e.sibling;if(a!==null){a.return=e.return,mt=a;break}mt=e.return}}var gh=Math.ceil,Fs=Ar.ReactCurrentDispatcher,Pd=Ar.ReactCurrentOwner,Je=Ar.ReactCurrentBatchConfig,$t=0,pe=null,se=null,he=0,Pe=0,qn=nn(0),ae=0,fi=null,kn=0,Zs=0,$d=0,Ko=null,Ae=null,Nd=0,go=1/0,kr=null,Ms=!1,La=null,qr=null,Ni=!1,Ur=null,Ws=0,Xo=0,Pa=null,ds=-1,cs=0;function Ee(){return $t&6?ne():ds!==-1?ds:ds=ne()}function Jr(t){return t.mode&1?$t&2&&he!==0?he&-he:Qf.transition!==null?(cs===0&&(cs=Gu()),cs):(t=Ht,t!==0||(t=window.event,t=t===void 0?16:qu(t.type)),t):1}function dr(t,e,n,o){if(50<Xo)throw Xo=0,Pa=null,Error(tt(185));yi(t,n,o),(!($t&2)||t!==pe)&&(t===pe&&(!($t&2)&&(Zs|=n),ae===4&&Or(t,he)),_e(t,o),n===1&&$t===0&&!(e.mode&1)&&(go=ne()+500,Ks&&on()))}function _e(t,e){var n=t.callbackNode;Vm(t,e);var o=xs(t,t===pe?he:0);if(o===0)n!==null&&Sc(n),t.callbackNode=null,t.callbackPriority=0;else if(e=o&-o,t.callbackPriority!==e){if(n!=null&&Sc(n),e===1)t.tag===0?Vf(fg.bind(null,t)):fp(fg.bind(null,t)),Hf(function(){!($t&6)&&on()}),n=null;else{switch(Uu(o)){case 1:n=pd;break;case 4:n=Ou;break;case 16:n=ys;break;case 536870912:n=Hu;break;default:n=ys}n=bb(n,lb.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function lb(t,e){if(ds=-1,cs=0,$t&6)throw Error(tt(327));var n=t.callbackNode;if(no()&&t.callbackNode!==n)return null;var o=xs(t,t===pe?he:0);if(o===0)return null;if(o&30||o&t.expiredLanes||e)e=_s(t,o);else{e=o;var i=$t;$t|=2;var s=db();(pe!==t||he!==e)&&(kr=null,go=ne()+500,hn(t,e));do try{bh();break}catch(a){ab(t,a)}while(!0);Id(),Fs.current=s,$t=i,se!==null?e=0:(pe=null,he=0,e=ae)}if(e!==0){if(e===2&&(i=ua(t),i!==0&&(o=i,e=$a(t,i))),e===1)throw n=fi,hn(t,0),Or(t,o),_e(t,ne()),n;if(e===6)Or(t,o);else{if(i=t.current.alternate,!(o&30)&&!uh(i)&&(e=_s(t,o),e===2&&(s=ua(t),s!==0&&(o=s,e=$a(t,s))),e===1))throw n=fi,hn(t,0),Or(t,o),_e(t,ne()),n;switch(t.finishedWork=i,t.finishedLanes=o,e){case 0:case 1:throw Error(tt(345));case 2:gn(t,Ae,kr);break;case 3:if(Or(t,o),(o&130023424)===o&&(e=Nd+500-ne(),10<e)){if(xs(t,0)!==0)break;if(i=t.suspendedLanes,(i&o)!==o){Ee(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=va(gn.bind(null,t,Ae,kr),e);break}gn(t,Ae,kr);break;case 4:if(Or(t,o),(o&4194240)===o)break;for(e=t.eventTimes,i=-1;0<o;){var l=31-ar(o);s=1<<l,l=e[l],l>i&&(i=l),o&=~s}if(o=i,o=ne()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*gh(o/1960))-o,10<o){t.timeoutHandle=va(gn.bind(null,t,Ae,kr),o);break}gn(t,Ae,kr);break;case 5:gn(t,Ae,kr);break;default:throw Error(tt(329))}}}return _e(t,ne()),t.callbackNode===n?lb.bind(null,t):null}function $a(t,e){var n=Ko;return t.current.memoizedState.isDehydrated&&(hn(t,e).flags|=256),t=_s(t,e),t!==2&&(e=Ae,Ae=n,e!==null&&Na(e)),t}function Na(t){Ae===null?Ae=t:Ae.push.apply(Ae,t)}function uh(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var i=n[o],s=i.getSnapshot;i=i.value;try{if(!cr(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Or(t,e){for(e&=~$d,e&=~Zs,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ar(e),o=1<<n;t[n]=-1,e&=~o}}function fg(t){if($t&6)throw Error(tt(327));no();var e=xs(t,0);if(!(e&1))return _e(t,ne()),null;var n=_s(t,e);if(t.tag!==0&&n===2){var o=ua(t);o!==0&&(e=o,n=$a(t,o))}if(n===1)throw n=fi,hn(t,0),Or(t,e),_e(t,ne()),n;if(n===6)throw Error(tt(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,gn(t,Ae,kr),_e(t,ne()),null}function Od(t,e){var n=$t;$t|=1;try{return t(e)}finally{$t=n,$t===0&&(go=ne()+500,Ks&&on())}}function jn(t){Ur!==null&&Ur.tag===0&&!($t&6)&&no();var e=$t;$t|=1;var n=Je.transition,o=Ht;try{if(Je.transition=null,Ht=1,t)return t()}finally{Ht=o,Je.transition=n,$t=e,!($t&6)&&on()}}function Hd(){Pe=qn.current,Xt(qn)}function hn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Of(n)),se!==null)for(n=se.return;n!==null;){var o=n;switch(jd(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Ss();break;case 3:ao(),Xt(Me),Xt(Se),Dd();break;case 5:Bd(o);break;case 4:ao();break;case 13:Xt(Jt);break;case 19:Xt(Jt);break;case 10:zd(o.type._context);break;case 22:case 23:Hd()}n=n.return}if(pe=t,se=t=Zr(t.current,null),he=Pe=e,ae=0,fi=null,$d=Zs=kn=0,Ae=Ko=null,bn!==null){for(e=0;e<bn.length;e++)if(n=bn[e],o=n.interleaved,o!==null){n.interleaved=null;var i=o.next,s=n.pending;if(s!==null){var l=s.next;s.next=i,o.next=l}n.pending=o}bn=null}return t}function ab(t,e){do{var n=se;try{if(Id(),ss.current=As,Ds){for(var o=Zt.memoizedState;o!==null;){var i=o.queue;i!==null&&(i.pending=null),o=o.next}Ds=!1}if(wn=0,ue=le=Zt=null,Vo=!1,pi=0,Pd.current=null,n===null||n.return===null){ae=1,fi=e,se=null;break}t:{var s=t,l=n.return,a=n,d=e;if(e=he,a.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var c=d,p=a,y=p.tag;if(!(p.mode&1)&&(y===0||y===11||y===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var j=ng(l);if(j!==null){j.flags&=-257,og(j,l,a,s,e),j.mode&1&&rg(s,c,e),e=j,d=c;var x=e.updateQueue;if(x===null){var k=new Set;k.add(d),e.updateQueue=k}else x.add(d);break t}else{if(!(e&1)){rg(s,c,e),Gd();break t}d=Error(tt(426))}}else if(qt&&a.mode&1){var T=ng(l);if(T!==null){!(T.flags&65536)&&(T.flags|=256),og(T,l,a,s,e),Sd(co(d,a));break t}}s=d=co(d,a),ae!==4&&(ae=2),Ko===null?Ko=[s]:Ko.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var b=Up(s,d,e);Xc(s,b);break t;case 1:a=d;var u=s.type,h=s.stateNode;if(!(s.flags&128)&&(typeof u.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(qr===null||!qr.has(h)))){s.flags|=65536,e&=-e,s.lanes|=e;var z=Yp(s,a,e);Xc(s,z);break t}}s=s.return}while(s!==null)}gb(n)}catch(v){e=v,se===n&&n!==null&&(se=n=n.return);continue}break}while(!0)}function db(){var t=Fs.current;return Fs.current=As,t===null?As:t}function Gd(){(ae===0||ae===3||ae===2)&&(ae=4),pe===null||!(kn&268435455)&&!(Zs&268435455)||Or(pe,he)}function _s(t,e){var n=$t;$t|=2;var o=db();(pe!==t||he!==e)&&(kr=null,hn(t,e));do try{ph();break}catch(i){ab(t,i)}while(!0);if(Id(),$t=n,Fs.current=o,se!==null)throw Error(tt(261));return pe=null,he=0,ae}function ph(){for(;se!==null;)cb(se)}function bh(){for(;se!==null&&!Lm();)cb(se)}function cb(t){var e=pb(t.alternate,t,Pe);t.memoizedProps=t.pendingProps,e===null?gb(t):se=e,Pd.current=null}function gb(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=lh(n,e),n!==null){n.flags&=32767,se=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ae=6,se=null;return}}else if(n=sh(n,e,Pe),n!==null){se=n;return}if(e=e.sibling,e!==null){se=e;return}se=e=t}while(e!==null);ae===0&&(ae=5)}function gn(t,e,n){var o=Ht,i=Je.transition;try{Je.transition=null,Ht=1,mh(t,e,n,o)}finally{Je.transition=i,Ht=o}return null}function mh(t,e,n,o){do no();while(Ur!==null);if($t&6)throw Error(tt(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(tt(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Qm(t,s),t===pe&&(se=pe=null,he=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ni||(Ni=!0,bb(ys,function(){return no(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Je.transition,Je.transition=null;var l=Ht;Ht=1;var a=$t;$t|=4,Pd.current=null,dh(t,n),ib(n,t),Mf(ya),vs=!!ha,ya=ha=null,t.current=n,ch(n),Pm(),$t=a,Ht=l,Je.transition=s}else t.current=n;if(Ni&&(Ni=!1,Ur=t,Ws=i),s=t.pendingLanes,s===0&&(qr=null),Om(n.stateNode),_e(t,ne()),e!==null)for(o=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],o(i.value,{componentStack:i.stack,digest:i.digest});if(Ms)throw Ms=!1,t=La,La=null,t;return Ws&1&&t.tag!==0&&no(),s=t.pendingLanes,s&1?t===Pa?Xo++:(Xo=0,Pa=t):Xo=0,on(),null}function no(){if(Ur!==null){var t=Uu(Ws),e=Je.transition,n=Ht;try{if(Je.transition=null,Ht=16>t?16:t,Ur===null)var o=!1;else{if(t=Ur,Ur=null,Ws=0,$t&6)throw Error(tt(331));var i=$t;for($t|=4,mt=t.current;mt!==null;){var s=mt,l=s.child;if(mt.flags&16){var a=s.deletions;if(a!==null){for(var d=0;d<a.length;d++){var c=a[d];for(mt=c;mt!==null;){var p=mt;switch(p.tag){case 0:case 11:case 15:Qo(8,p,s)}var y=p.child;if(y!==null)y.return=p,mt=y;else for(;mt!==null;){p=mt;var m=p.sibling,j=p.return;if(rb(p),p===c){mt=null;break}if(m!==null){m.return=j,mt=m;break}mt=j}}}var x=s.alternate;if(x!==null){var k=x.child;if(k!==null){x.child=null;do{var T=k.sibling;k.sibling=null,k=T}while(k!==null)}}mt=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,mt=l;else t:for(;mt!==null;){if(s=mt,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Qo(9,s,s.return)}var b=s.sibling;if(b!==null){b.return=s.return,mt=b;break t}mt=s.return}}var u=t.current;for(mt=u;mt!==null;){l=mt;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,mt=h;else t:for(l=u;mt!==null;){if(a=mt,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Js(9,a)}}catch(v){re(a,a.return,v)}if(a===l){mt=null;break t}var z=a.sibling;if(z!==null){z.return=a.return,mt=z;break t}mt=a.return}}if($t=i,on(),hr&&typeof hr.onPostCommitFiberRoot=="function")try{hr.onPostCommitFiberRoot(Gs,t)}catch{}o=!0}return o}finally{Ht=n,Je.transition=e}}return!1}function hg(t,e,n){e=co(n,e),e=Up(t,e,1),t=Xr(t,e,1),e=Ee(),t!==null&&(yi(t,1,e),_e(t,e))}function re(t,e,n){if(t.tag===3)hg(t,t,n);else for(;e!==null;){if(e.tag===3){hg(e,t,n);break}else if(e.tag===1){var o=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(qr===null||!qr.has(o))){t=co(n,t),t=Yp(e,t,1),e=Xr(e,t,1),t=Ee(),e!==null&&(yi(e,1,t),_e(e,t));break}}e=e.return}}function fh(t,e,n){var o=t.pingCache;o!==null&&o.delete(e),e=Ee(),t.pingedLanes|=t.suspendedLanes&n,pe===t&&(he&n)===n&&(ae===4||ae===3&&(he&130023424)===he&&500>ne()-Nd?hn(t,0):$d|=n),_e(t,e)}function ub(t,e){e===0&&(t.mode&1?(e=Bi,Bi<<=1,!(Bi&130023424)&&(Bi=4194304)):e=1);var n=Ee();t=Rr(t,e),t!==null&&(yi(t,e,n),_e(t,n))}function hh(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ub(t,n)}function yh(t,e){var n=0;switch(t.tag){case 13:var o=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:o=t.stateNode;break;default:throw Error(tt(314))}o!==null&&o.delete(e),ub(t,n)}var pb;pb=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Me.current)Fe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Fe=!1,ih(t,e,n);Fe=!!(t.flags&131072)}else Fe=!1,qt&&e.flags&1048576&&hp(e,zs,e.index);switch(e.lanes=0,e.tag){case 2:var o=e.type;as(t,e),t=e.pendingProps;var i=io(e,Se.current);ro(e,n),i=Fd(null,e,o,t,i,n);var s=Md();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,We(o)?(s=!0,Cs(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ed(e),i.updater=qs,e.stateNode=i,i._reactInternals=e,za(e,o,t,n),e=Ra(null,e,o,!0,s,n)):(e.tag=0,qt&&s&&kd(e),Te(null,e,i,n),e=e.child),e;case 16:o=e.elementType;t:{switch(as(t,e),t=e.pendingProps,i=o._init,o=i(o._payload),e.type=o,i=e.tag=vh(o),t=ir(o,t),i){case 0:e=Ea(null,e,o,t,n);break t;case 1:e=lg(null,e,o,t,n);break t;case 11:e=ig(null,e,o,t,n);break t;case 14:e=sg(null,e,o,ir(o.type,t),n);break t}throw Error(tt(306,o,""))}return e;case 0:return o=e.type,i=e.pendingProps,i=e.elementType===o?i:ir(o,i),Ea(t,e,o,i,n);case 1:return o=e.type,i=e.pendingProps,i=e.elementType===o?i:ir(o,i),lg(t,e,o,i,n);case 3:t:{if(Xp(e),t===null)throw Error(tt(387));o=e.pendingProps,s=e.memoizedState,i=s.element,jp(t,e),Rs(e,o,null,n);var l=e.memoizedState;if(o=l.element,s.isDehydrated)if(s={element:o,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=co(Error(tt(423)),e),e=ag(t,e,o,n,i);break t}else if(o!==i){i=co(Error(tt(424)),e),e=ag(t,e,o,n,i);break t}else for(Ne=Kr(e.stateNode.containerInfo.firstChild),Oe=e,qt=!0,lr=null,n=wp(e,null,o,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(so(),o===i){e=Br(t,e,n);break t}Te(t,e,o,n)}e=e.child}return e;case 5:return Sp(e),t===null&&Sa(e),o=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,l=i.children,xa(o,i)?l=null:s!==null&&xa(o,s)&&(e.flags|=32),Kp(t,e),Te(t,e,l,n),e.child;case 6:return t===null&&Sa(e),null;case 13:return qp(t,e,n);case 4:return Rd(e,e.stateNode.containerInfo),o=e.pendingProps,t===null?e.child=lo(e,null,o,n):Te(t,e,o,n),e.child;case 11:return o=e.type,i=e.pendingProps,i=e.elementType===o?i:ir(o,i),ig(t,e,o,i,n);case 7:return Te(t,e,e.pendingProps,n),e.child;case 8:return Te(t,e,e.pendingProps.children,n),e.child;case 12:return Te(t,e,e.pendingProps.children,n),e.child;case 10:t:{if(o=e.type._context,i=e.pendingProps,s=e.memoizedProps,l=i.value,Qt(Ts,o._currentValue),o._currentValue=l,s!==null)if(cr(s.value,l)){if(s.children===i.children&&!Me.current){e=Br(t,e,n);break t}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){l=s.child;for(var d=a.firstContext;d!==null;){if(d.context===o){if(s.tag===1){d=zr(-1,n&-n),d.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?d.next=d:(d.next=p.next,p.next=d),c.pending=d}}s.lanes|=n,d=s.alternate,d!==null&&(d.lanes|=n),Ca(s.return,n,e),a.lanes|=n;break}d=d.next}}else if(s.tag===10)l=s.type===e.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(tt(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Ca(l,n,e),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===e){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}Te(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,o=e.pendingProps.children,ro(e,n),i=Ze(i),o=o(i),e.flags|=1,Te(t,e,o,n),e.child;case 14:return o=e.type,i=ir(o,e.pendingProps),i=ir(o.type,i),sg(t,e,o,i,n);case 15:return Vp(t,e,e.type,e.pendingProps,n);case 17:return o=e.type,i=e.pendingProps,i=e.elementType===o?i:ir(o,i),as(t,e),e.tag=1,We(o)?(t=!0,Cs(e)):t=!1,ro(e,n),Gp(e,o,i),za(e,o,i,n),Ra(null,e,o,!0,t,n);case 19:return Jp(t,e,n);case 22:return Qp(t,e,n)}throw Error(tt(156,e.tag))};function bb(t,e){return Nu(t,e)}function xh(t,e,n,o){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(t,e,n,o){return new xh(t,e,n,o)}function Ud(t){return t=t.prototype,!(!t||!t.isReactComponent)}function vh(t){if(typeof t=="function")return Ud(t)?1:0;if(t!=null){if(t=t.$$typeof,t===cd)return 11;if(t===gd)return 14}return 2}function Zr(t,e){var n=t.alternate;return n===null?(n=qe(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function gs(t,e,n,o,i,s){var l=2;if(o=t,typeof t=="function")Ud(t)&&(l=1);else if(typeof t=="string")l=5;else t:switch(t){case Nn:return yn(n.children,i,s,e);case dd:l=8,i|=8;break;case ql:return t=qe(12,n,e,i|2),t.elementType=ql,t.lanes=s,t;case Jl:return t=qe(13,n,e,i),t.elementType=Jl,t.lanes=s,t;case Zl:return t=qe(19,n,e,i),t.elementType=Zl,t.lanes=s,t;case Su:return tl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ku:l=10;break t;case ju:l=9;break t;case cd:l=11;break t;case gd:l=14;break t;case Pr:l=16,o=null;break t}throw Error(tt(130,t==null?t:typeof t,""))}return e=qe(l,n,e,i),e.elementType=t,e.type=o,e.lanes=s,e}function yn(t,e,n,o){return t=qe(7,t,o,e),t.lanes=n,t}function tl(t,e,n,o){return t=qe(22,t,o,e),t.elementType=Su,t.lanes=n,t.stateNode={isHidden:!1},t}function Fl(t,e,n){return t=qe(6,t,null,e),t.lanes=n,t}function Ml(t,e,n){return e=qe(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function wh(t,e,n,o,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ml(0),this.expirationTimes=ml(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ml(0),this.identifierPrefix=o,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Yd(t,e,n,o,i,s,l,a,d){return t=new wh(t,e,n,a,d),e===1?(e=1,s===!0&&(e|=8)):e=0,s=qe(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ed(s),t}function kh(t,e,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$n,key:o==null?null:""+o,children:t,containerInfo:e,implementation:n}}function mb(t){if(!t)return en;t=t._reactInternals;t:{if(In(t)!==t||t.tag!==1)throw Error(tt(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break t;case 1:if(We(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break t}}e=e.return}while(e!==null);throw Error(tt(171))}if(t.tag===1){var n=t.type;if(We(n))return mp(t,n,e)}return e}function fb(t,e,n,o,i,s,l,a,d){return t=Yd(n,o,!0,t,i,s,l,a,d),t.context=mb(null),n=t.current,o=Ee(),i=Jr(n),s=zr(o,i),s.callback=e??null,Xr(n,s,i),t.current.lanes=i,yi(t,i,o),_e(t,o),t}function el(t,e,n,o){var i=e.current,s=Ee(),l=Jr(i);return n=mb(n),e.context===null?e.context=n:e.pendingContext=n,e=zr(s,l),e.payload={element:t},o=o===void 0?null:o,o!==null&&(e.callback=o),t=Xr(i,e,l),t!==null&&(dr(t,i,l,s),is(t,i,l)),l}function Ls(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function yg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Vd(t,e){yg(t,e),(t=t.alternate)&&yg(t,e)}function jh(){return null}var hb=typeof reportError=="function"?reportError:function(t){console.error(t)};function Qd(t){this._internalRoot=t}rl.prototype.render=Qd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(tt(409));el(t,e,null,null)};rl.prototype.unmount=Qd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;jn(function(){el(null,t,null,null)}),e[Er]=null}};function rl(t){this._internalRoot=t}rl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Qu();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Nr.length&&e!==0&&e<Nr[n].priority;n++);Nr.splice(n,0,t),n===0&&Xu(t)}};function Kd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function xg(){}function Sh(t,e,n,o,i){if(i){if(typeof o=="function"){var s=o;o=function(){var c=Ls(l);s.call(c)}}var l=fb(e,o,t,0,null,!1,!1,"",xg);return t._reactRootContainer=l,t[Er]=l.current,ai(t.nodeType===8?t.parentNode:t),jn(),l}for(;i=t.lastChild;)t.removeChild(i);if(typeof o=="function"){var a=o;o=function(){var c=Ls(d);a.call(c)}}var d=Yd(t,0,!1,null,null,!1,!1,"",xg);return t._reactRootContainer=d,t[Er]=d.current,ai(t.nodeType===8?t.parentNode:t),jn(function(){el(e,d,n,o)}),d}function ol(t,e,n,o,i){var s=n._reactRootContainer;if(s){var l=s;if(typeof i=="function"){var a=i;i=function(){var d=Ls(l);a.call(d)}}el(e,l,t,i)}else l=Sh(n,e,t,i,o);return Ls(l)}Yu=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Wo(e.pendingLanes);n!==0&&(bd(e,n|1),_e(e,ne()),!($t&6)&&(go=ne()+500,on()))}break;case 13:jn(function(){var o=Rr(t,1);if(o!==null){var i=Ee();dr(o,t,1,i)}}),Vd(t,1)}};md=function(t){if(t.tag===13){var e=Rr(t,134217728);if(e!==null){var n=Ee();dr(e,t,134217728,n)}Vd(t,134217728)}};Vu=function(t){if(t.tag===13){var e=Jr(t),n=Rr(t,e);if(n!==null){var o=Ee();dr(n,t,e,o)}Vd(t,e)}};Qu=function(){return Ht};Ku=function(t,e){var n=Ht;try{return Ht=t,e()}finally{Ht=n}};da=function(t,e,n){switch(e){case"input":if(ra(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var o=n[e];if(o!==t&&o.form===t.form){var i=Qs(o);if(!i)throw Error(tt(90));Iu(o),ra(o,i)}}}break;case"textarea":Tu(t,n);break;case"select":e=n.value,e!=null&&Jn(t,!!n.multiple,e,!1)}};Mu=Od;Wu=jn;var Ch={usingClientEntryPoint:!1,Events:[vi,Un,Qs,Au,Fu,Od]},Ro={findFiberByHostInstance:pn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ih={bundleType:Ro.bundleType,version:Ro.version,rendererPackageName:Ro.rendererPackageName,rendererConfig:Ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ar.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Pu(t),t===null?null:t.stateNode},findFiberByHostInstance:Ro.findFiberByHostInstance||jh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oi.isDisabled&&Oi.supportsFiber)try{Gs=Oi.inject(Ih),hr=Oi}catch{}}Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ch;Ge.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kd(e))throw Error(tt(200));return kh(t,e,null,n)};Ge.createRoot=function(t,e){if(!Kd(t))throw Error(tt(299));var n=!1,o="",i=hb;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Yd(t,1,!1,null,null,n,!1,o,i),t[Er]=e.current,ai(t.nodeType===8?t.parentNode:t),new Qd(e)};Ge.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(tt(188)):(t=Object.keys(t).join(","),Error(tt(268,t)));return t=Pu(e),t=t===null?null:t.stateNode,t};Ge.flushSync=function(t){return jn(t)};Ge.hydrate=function(t,e,n){if(!nl(e))throw Error(tt(200));return ol(null,t,e,!0,n)};Ge.hydrateRoot=function(t,e,n){if(!Kd(t))throw Error(tt(405));var o=n!=null&&n.hydratedSources||null,i=!1,s="",l=hb;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),e=fb(e,null,t,1,n??null,i,!1,s,l),t[Er]=e.current,ai(t),o)for(t=0;t<o.length;t++)n=o[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new rl(e)};Ge.render=function(t,e,n){if(!nl(e))throw Error(tt(200));return ol(null,t,e,!1,n)};Ge.unmountComponentAtNode=function(t){if(!nl(t))throw Error(tt(40));return t._reactRootContainer?(jn(function(){ol(null,null,t,!1,function(){t._reactRootContainer=null,t[Er]=null})}),!0):!1};Ge.unstable_batchedUpdates=Od;Ge.unstable_renderSubtreeIntoContainer=function(t,e,n,o){if(!nl(n))throw Error(tt(200));if(t==null||t._reactInternals===void 0)throw Error(tt(38));return ol(t,e,n,!1,o)};Ge.version="18.3.1-next-f1338f8080-20240426";function yb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yb)}catch(t){console.error(t)}}yb(),yu.exports=Ge;var zh=yu.exports,xb,vg=zh;xb=vg.createRoot,vg.hydrateRoot;/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),vb=(...t)=>t.filter((e,n,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Eh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=g.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:o,className:i="",children:s,iconNode:l,...a},d)=>g.createElement("svg",{ref:d,...Eh,width:e,height:e,stroke:t,strokeWidth:o?Number(n)*24/Number(e):n,className:vb("lucide",i),...a},[...l.map(([c,p])=>g.createElement(c,p)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=(t,e)=>{const n=g.forwardRef(({className:o,...i},s)=>g.createElement(Rh,{ref:s,iconNode:e,className:vb(`lucide-${Th(t)}`,o),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oa=at("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=at("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ha=at("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=at("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=at("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=at("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=at("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hi=at("CalendarPlus",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=at("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=at("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=at("ChartLine",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=at("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki=at("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zn=at("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=at("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=at("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=at("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=at("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=at("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ga=at("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ps=at("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=at("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=at("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ua=at("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=at("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=at("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=at("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=at("HeartPulse",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=at("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $s=at("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const il=at("ImagePlus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=at("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=at("Images",[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18",key:"nf6bnh"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2",key:"12espp"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=at("IndianRupee",[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=at("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cb=at("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=at("LayoutList",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=at("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=at("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=at("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=at("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=at("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=at("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=at("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=at("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=at("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=at("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=at("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=at("PanelLeftOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=at("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=at("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=at("PiggyBank",[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z",key:"1ivx2i"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h.01",key:"xkw8gn"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=at("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=at("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rb=at("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=at("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=at("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=at("Scissors",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=at("ScrollText",[["path",{d:"M15 12h-5",key:"r7krc0"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Db=at("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji=at("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=at("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=at("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=at("Sunrise",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=at("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=at("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=at("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=at("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=at("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=at("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=at("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr=at("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=at("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=at("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=at("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=at("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),tc="anvil_token",ec=()=>localStorage.getItem(tc),py=t=>localStorage.setItem(tc,t),Va=()=>localStorage.removeItem(tc),K=async(t,e,n)=>{const o={};n!==void 0&&(o["Content-Type"]="application/json");const i=ec();i&&(o.Authorization=`Bearer ${i}`);const s=await fetch(`/api${e}`,{method:t,headers:o,body:n!==void 0?JSON.stringify(n):void 0});if(s.status===401)throw Va(),window.dispatchEvent(new Event("anvil-unauthorized")),new Error("Not authenticated");if(s.status===204)return null;if(!s.ok){const l=await s.text();let a=l;try{a=JSON.parse(l).detail||l}catch{}throw new Error(a||`HTTP ${s.status}`)}return s.json()},G={register:t=>K("POST","/auth/register",t),login:t=>K("POST","/auth/login",t),me:()=>K("GET","/auth/me"),getGcalStatus:()=>K("GET","/auth/google/status"),connectGoogle:()=>{window.location.href=`/api/auth/google?token=${encodeURIComponent(ec()||"")}`},disconnectGoogle:()=>K("DELETE","/auth/google"),getPillars:()=>K("GET","/pillars"),getFocus:()=>K("GET","/focus"),createFocus:t=>K("POST","/focus",t),deleteFocus:t=>K("DELETE",`/focus/${t}`),addScreenTime:(t,e)=>K("POST","/screentime",{screen:t,seconds:e}),getScreenTime:()=>K("GET","/screentime"),getPayouts:()=>K("GET","/rewards/payouts"),createPayout:t=>K("POST","/rewards/payouts",t),deletePayout:t=>K("DELETE",`/rewards/payouts/${t}`),getRewardRates:()=>K("GET","/rewards/rates"),setRewardRate:t=>K("POST","/rewards/rates",t),getMedia:()=>K("GET","/media"),createMedia:t=>K("POST","/media",t),updateMedia:(t,e)=>K("PUT",`/media/${t}`,e),deleteMedia:t=>K("DELETE",`/media/${t}`),restoreMedia:t=>K("POST",`/media/${t}/restore`),getDecks:()=>K("GET","/spiritual/decks"),createDeck:t=>K("POST","/spiritual/decks",t),deleteDeck:t=>K("DELETE",`/spiritual/decks/${t}`),getGoldenGoals:()=>K("GET","/golden/goals"),getGoldenGoal:t=>K("GET",`/golden/goals/${t}`),createGolden:t=>K("POST","/golden/goals",t),updateGolden:(t,e)=>K("PUT",`/golden/goals/${t}`,e),achieveGolden:t=>K("POST",`/golden/goals/${t}/achieve`),unachieveGolden:t=>K("POST",`/golden/goals/${t}/unachieve`),upsertGoldenEntry:(t,e)=>K("PUT",`/golden/goals/${t}/entry`,e),deleteGolden:t=>K("DELETE",`/golden/goals/${t}`),restoreGolden:t=>K("POST",`/golden/goals/${t}/restore`),getKickstart:()=>K("GET","/kickstart/videos"),createKickstart:t=>K("POST","/kickstart/videos",t),updateKickstart:(t,e)=>K("PUT",`/kickstart/videos/${t}`,e),deleteKickstart:t=>K("DELETE",`/kickstart/videos/${t}`),restoreKickstart:t=>K("POST",`/kickstart/videos/${t}/restore`),getTxns:()=>K("GET","/finance/txns"),createTxn:t=>K("POST","/finance/txns",t),updateTxn:(t,e)=>K("PUT",`/finance/txns/${t}`,e),deleteTxn:t=>K("DELETE",`/finance/txns/${t}`),restoreTxn:t=>K("POST",`/finance/txns/${t}/restore`),getSetting:t=>K("GET",`/settings/${t}`),setSetting:(t,e)=>K("PUT",`/settings/${t}`,{value:e}),getTasks:()=>K("GET","/tasks"),createTask:t=>K("POST","/tasks",t),updateTask:(t,e)=>K("PUT",`/tasks/${t}`,e),deleteTask:t=>K("DELETE",`/tasks/${t}`),restoreTask:t=>K("POST",`/tasks/${t}/restore`),scheduleTask:t=>K("PUT",`/tasks/${t}/schedule`),getGoals:t=>K("GET",`/goals${t?`?pillar=${encodeURIComponent(t)}`:""}`),createGoal:t=>K("POST","/goals",t),updateGoal:(t,e)=>K("PUT",`/goals/${t}`,e),deleteGoal:t=>K("DELETE",`/goals/${t}`),restoreGoal:t=>K("POST",`/goals/${t}/restore`),getHabits:()=>K("GET","/habits"),createHabit:t=>K("POST","/habits",t),updateHabit:(t,e)=>K("PUT",`/habits/${t}`,e),deleteHabit:t=>K("DELETE",`/habits/${t}`),restoreHabit:t=>K("POST",`/habits/${t}/restore`),toggleHabitLog:(t,e)=>K("POST",`/habits/${t}/log/${e}`),setHabitLogNote:(t,e,n)=>K("PUT",`/habits/${t}/log/${e}/note`,{note:n}),setHabitLogCount:(t,e,n,o)=>K("PUT",`/habits/${t}/log/${e}/count`,{count:n,note:o}),clearHabitLog:(t,e)=>K("DELETE",`/habits/${t}/log/${e}`),getHabitsYearly:t=>K("GET",`/habits/yearly/${t}`),getJournalEntry:t=>K("GET",`/journal/${t}`),getJournalHistory:(t,e)=>K("GET",`/journal/history/${t}/${e}`),updateJournalMood:(t,e)=>K("PUT",`/journal/${t}`,{mood:e}),addJournalBullet:(t,e,n)=>K("POST",`/journal/${t}/bullets`,{section:e,text:n}),deleteJournalBullet:t=>K("DELETE",`/journal/bullets/${t}`),getSkills:()=>K("GET","/skills"),createSkill:t=>K("POST","/skills",t),updateSkill:(t,e)=>K("PUT",`/skills/${t}`,e),deleteSkill:t=>K("DELETE",`/skills/${t}`),restoreSkill:t=>K("POST",`/skills/${t}/restore`),addSkillNote:(t,e,n,o=null)=>K("POST",`/skills/${t}/notes`,{stage:e,text:n,grp:o}),setSkillGroups:(t,e)=>K("PUT",`/skills/${t}/groups`,{groups:e}),deleteSkillNote:t=>K("DELETE",`/skill-notes/${t}`),updateSkillNote:(t,e)=>K("PUT",`/skill-notes/${t}`,{text:e}),toggleSkillNote:t=>K("PUT",`/skill-notes/${t}/toggle`),completeSkillStage:(t,e)=>K("POST",`/skills/${t}/complete-stage`,{stage:e}),getScriptures:()=>K("GET","/scriptures"),createScripture:t=>K("POST","/scriptures",t),deleteScripture:t=>K("DELETE",`/scriptures/${t}`),restoreScripture:t=>K("POST",`/scriptures/${t}/restore`),addChapter:(t,e)=>K("POST",`/scriptures/${t}/chapters`,e),updateChapter:(t,e)=>K("PUT",`/chapters/${t}`,e),deleteChapter:t=>K("DELETE",`/chapters/${t}`),restoreChapter:t=>K("POST",`/chapters/${t}/restore`),addInsight:(t,e)=>K("POST",`/chapters/${t}/insights`,{text:e}),deleteInsight:t=>K("DELETE",`/insights/${t}`),getTopics:()=>K("GET","/revision/topics"),createTopic:t=>K("POST","/revision/topics",t),updateTopic:(t,e)=>K("PUT",`/revision/topics/${t}`,e),deleteTopic:t=>K("DELETE",`/revision/topics/${t}`),restoreTopic:t=>K("POST",`/revision/topics/${t}/restore`),getDueToday:()=>K("GET","/revision/due-today"),getCalendar:(t,e)=>K("GET",`/revision/calendar/${t}/${e}`),toggleReviewDone:t=>K("PUT",`/revision/reviews/${t}/done`),getAffirmations:()=>K("GET","/affirmations"),createAffirmation:t=>K("POST","/affirmations",t),updateAffirmation:(t,e)=>K("PUT",`/affirmations/${t}`,e),deleteAffirmation:t=>K("DELETE",`/affirmations/${t}`),restoreAffirmation:t=>K("POST",`/affirmations/${t}/restore`),getAchievements:()=>K("GET","/achievements"),createAchievement:t=>K("POST","/achievements",t),updateAchievement:(t,e)=>K("PUT",`/achievements/${t}`,e),deleteAchievement:t=>K("DELETE",`/achievements/${t}`),restoreAchievement:t=>K("POST",`/achievements/${t}/restore`)},by=7e3;function Fr(t,e,n){const[o,i]=g.useState([]),s=g.useRef({}),l=g.useCallback(async(c,p="Item")=>{await t(c),n();const y=`${c}-${Date.now()}`;i(m=>[...m,{id:y,itemId:c,label:p}]),s.current[y]=setTimeout(()=>{i(m=>m.filter(j=>j.id!==y)),delete s.current[y]},by)},[t,n]),a=g.useCallback(async c=>{const p=o.find(y=>y.id===c);p&&(clearTimeout(s.current[c]),delete s.current[c],i(y=>y.filter(m=>m.id!==c)),await e(p.itemId),n())},[o,e,n]),d=g.useCallback(c=>{clearTimeout(s.current[c]),delete s.current[c],i(p=>p.filter(y=>y.id!==c))},[]);return{deleteItem:l,toasts:o,handleUndo:a,handleDismiss:d}}function Mr({toasts:t,onUndo:e,onDismiss:n}){return r.jsx("div",{style:Pn.container,children:t.map(o=>r.jsx(my,{toast:o,onUndo:e,onDismiss:n},o.id))})}function my({toast:t,onUndo:e,onDismiss:n}){const[o,i]=g.useState(100);return g.useEffect(()=>{const s=Date.now(),l=7e3,a=setInterval(()=>{const d=Date.now()-s,c=Math.max(0,100-d/l*100);i(c),c===0&&clearInterval(a)},50);return()=>clearInterval(a)},[]),r.jsxs("div",{style:Pn.toast,children:[r.jsx("div",{style:{...Pn.bar,width:`${o}%`}}),r.jsxs("span",{style:Pn.msg,children:[t.label," deleted"]}),r.jsx("button",{style:Pn.undoBtn,onClick:()=>e(t.id),children:"Undo"}),r.jsx("button",{style:Pn.closeBtn,onClick:()=>n(t.id),children:"×"})]})}const Pn={container:{position:"fixed",bottom:24,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",gap:8,zIndex:999,pointerEvents:"none"},toast:{position:"relative",display:"flex",alignItems:"center",gap:12,background:"var(--accent-strong)",color:"#fff",borderRadius:10,padding:"12px 16px",fontSize:13.5,fontFamily:"'Inter', system-ui, sans-serif",boxShadow:"0 4px 20px rgba(0,0,0,0.25)",minWidth:260,overflow:"hidden",pointerEvents:"all"},bar:{position:"absolute",bottom:0,left:0,height:3,background:"#4C9A6B",transition:"width 0.05s linear",borderRadius:"0 0 0 10px"},msg:{flex:1,fontWeight:500},undoBtn:{border:"1px solid rgba(255,255,255,0.3)",background:"none",color:"#4C9A6B",fontWeight:700,fontSize:13,padding:"4px 10px",borderRadius:6,cursor:"pointer",fontFamily:"inherit"},closeBtn:{border:"none",background:"none",color:"rgba(255,255,255,0.5)",cursor:"pointer",fontSize:18,lineHeight:1,padding:"0 2px"}},xr={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},jg=[{id:"Q1",symbol:"™",title:"Do Now",sub:"Important · Urgent",accent:"#C2536B"},{id:"Q2",symbol:"©",title:"Schedule",sub:"Important · Not Urgent",accent:"#3A7CA5"},{id:"Q3",symbol:"®",title:"Delegate",sub:"Not Important · Urgent",accent:"#C9A227"},{id:"Q4",symbol:"•",title:"Drop",sub:"Not Important · Not Urgent",accent:"#8A8780"}];function Mb(){return new Date().toLocaleDateString("en-CA",{timeZone:"Asia/Kolkata"})}function Wb(){const t=new Date(new Date().toLocaleString("en-US",{timeZone:"Asia/Kolkata"})),n=t.getMinutes()<30?30:0,o=n===0?t.getHours()+1:t.getHours();return`${String(o%24).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function Sg(t,e){const[n,o]=t.split(":").map(Number),i=n*60+o+e;return`${String(Math.floor(i/60)%24).padStart(2,"0")}:${String(i%60).padStart(2,"0")}`}function fy(t){return t?new Date(t).toLocaleString("en-IN",{timeZone:"Asia/Kolkata",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit",hour12:!0}):""}const Gi=()=>({title:"",pillar:"Financial",est:30,date:Mb(),startTime:Wb()});function hy(){const[t,e]=g.useState([]),[n,o]=g.useState([]),[i,s]=g.useState("All"),[l,a]=g.useState(null),[d,c]=g.useState(null),[p,y]=g.useState(Gi()),[m,j]=g.useState(null),[x,k]=g.useState(Gi()),[T,b]=g.useState({connected:!1,configured:!1}),u=g.useCallback(()=>G.getTasks().then(e).catch(console.error),[]);g.useEffect(()=>{u(),G.getGcalStatus().then(b).catch(()=>{}),G.getGoals().then(H=>o(H.filter(ft=>ft.horizon==="Weekly"))).catch(()=>{})},[u]);const h=Object.keys(xr),z=n.filter(H=>i==="All"||H.pillar===i),v=n.find(H=>H.id===l)||null,I=t.filter(H=>l!=null?H.goal_id===l:i!=="All"?H.pillar===i:!0),L=H=>{s(H),a(null),c(null),y(ft=>({...ft,pillar:H==="All"?"Financial":H}))},R=H=>{a(H),c(null);const ft=n.find(J=>J.id===H);ft&&y(J=>({...J,pillar:ft.pillar}))},{deleteItem:E,toasts:M,handleUndo:S,handleDismiss:A}=Fr(G.deleteTask,G.restoreTask,u),w=H=>I.filter(ft=>ft.quadrant===H),Y=H=>w(H).reduce((ft,J)=>ft+J.time_estimate_min,0),lt=H=>H>=60?`${Math.floor(H/60)}h${H%60?` ${H%60}m`:""}`:`${H}m`,rt=H=>{var J;return`${((J=jg.find(et=>et.id===H.quadrant))==null?void 0:J.symbol)??""} ${H.title}`},ht=async H=>{if(!p.title.trim())return;const ft=p.date&&p.startTime?`${p.date}T${p.startTime}:00`:null;await G.createTask({pillar:v?v.pillar:p.pillar,title:p.title,quadrant:H,time_estimate_min:Number(p.est)||30,start_datetime:ft,goal_id:l??null}),y(Gi()),c(null),u()},U=(H,ft)=>E(H,ft),O=H=>{const ft=H.start_datetime?H.start_datetime.split("T"):[];j(H.id),c(null),k({title:H.title,pillar:H.pillar,est:H.time_estimate_min,date:ft[0]||Mb(),startTime:(ft[1]||"").slice(0,5)||Wb()})},q=async H=>{if(!x.title.trim())return;const ft=x.date&&x.startTime?`${x.date}T${x.startTime}:00`:null;await G.updateTask(H.id,{title:x.title.trim(),pillar:x.pillar,time_estimate_min:Number(x.est)||30,start_datetime:ft}),j(null),u()},P=g.useRef(null),F=g.useRef(null),[f,Q]=g.useState(null),xt=(H,ft)=>{var et;const J=document.elementFromPoint(H,ft);return J&&J.closest&&((et=J.closest("[data-quad]"))==null?void 0:et.getAttribute("data-quad"))||null};g.useEffect(()=>{const H=J=>{const et=P.current;if(!et)return;const X=Math.hypot(J.clientX-et.startX,J.clientY-et.startY);if(!et.active){if(et.pointerType!=="mouse"){X>12&&(clearTimeout(F.current),P.current=null);return}if(X<6)return;et.active=!0,document.body.style.userSelect="none"}J.cancelable&&J.preventDefault(),et.overQ=xt(J.clientX,J.clientY),Q({id:et.task.id,title:et.task.title,x:J.clientX,y:J.clientY,overQ:et.overQ})},ft=()=>{clearTimeout(F.current);const J=P.current;P.current=null,document.body.style.userSelect="",document.body.style.touchAction="",Q(null),J&&J.active&&J.overQ&&J.overQ!==J.task.quadrant&&G.updateTask(J.task.id,{quadrant:J.overQ}).then(u).catch(()=>{})};return window.addEventListener("pointermove",H,{passive:!1}),window.addEventListener("pointerup",ft),window.addEventListener("pointercancel",ft),()=>{window.removeEventListener("pointermove",H),window.removeEventListener("pointerup",ft),window.removeEventListener("pointercancel",ft)}},[u]);const gt=(H,ft)=>{H.pointerType==="mouse"&&H.button!==0||(P.current={task:ft,startX:H.clientX,startY:H.clientY,active:!1,pointerType:H.pointerType,overQ:null},H.pointerType!=="mouse"&&(F.current=setTimeout(()=>{const J=P.current;J&&(J.active=!0,document.body.style.touchAction="none",Q({id:J.task.id,title:J.task.title,x:J.startX,y:J.startY,overQ:J.task.quadrant}))},280)))};return r.jsxs("div",{style:nt.page,children:[r.jsxs("div",{style:nt.head,children:[r.jsxs("div",{children:[r.jsx("div",{style:nt.eyebrow,children:"Anvil · Weekly Routing"}),r.jsx("h1",{style:nt.h1,children:"Weekly Routing"})]}),r.jsxs("div",{style:nt.headRight,children:[r.jsx("div",{style:nt.legend,children:Object.entries(xr).map(([H,ft])=>r.jsxs("span",{style:nt.legendItem,children:[r.jsx("span",{style:{...nt.dot,background:ft.dot}}),H]},H))}),T.configured&&(T.connected?r.jsxs("button",{style:nt.gcalBadgeOn,title:"Disconnect Google Calendar",onClick:()=>G.disconnectGoogle().then(()=>b({...T,connected:!1})),children:[r.jsx(Hi,{size:13})," Google Calendar connected"]}):r.jsxs("button",{style:nt.gcalBadgeOff,onClick:()=>G.connectGoogle(),children:[r.jsx(Hi,{size:13})," Connect Google Calendar"]}))]})]}),r.jsx("div",{style:nt.filterBar,children:["All",...h].map(H=>{const ft=i===H,J=xr[H];return r.jsxs("button",{onClick:()=>L(H),style:{...nt.pillChip,...ft?J?{background:J.dot,color:"#fff",borderColor:J.dot}:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"}:{}},children:[J&&r.jsx("span",{style:{...nt.dot,background:ft?"#fff":J.dot}}),H==="All"?"All":H]},H)})}),r.jsxs("div",{style:nt.goalBar,children:[r.jsx("button",{onClick:()=>a(null),style:{...nt.goalChip,...l==null?nt.goalChipOn:{}},children:"All goals"}),z.map(H=>{var et;const ft=((et=xr[H.pillar])==null?void 0:et.dot)||"#9A968C",J=l===H.id;return r.jsxs("button",{onClick:()=>R(H.id),style:{...nt.goalChip,...J?{background:ft,color:"#fff",borderColor:ft}:{}},title:H.title,children:[r.jsx("span",{style:{...nt.dot,background:J?"#fff":ft}}),r.jsx("span",{style:nt.goalChipText,children:H.title})]},H.id)}),z.length===0&&r.jsxs("span",{style:nt.goalEmpty,children:["No weekly goals",i!=="All"?` for ${i}`:""," — create them in Goals."]})]}),r.jsx("div",{style:nt.grid,children:jg.map(H=>{var ft,J;return r.jsxs("section",{"data-quad":H.id,style:{...nt.quad,borderTop:`3px solid ${H.accent}`,...f&&f.overQ===H.id&&f.overQ!==((ft=t.find(et=>et.id===f.id))==null?void 0:ft.quadrant)?{outline:`2px dashed ${H.accent}`,outlineOffset:2,background:"var(--hover)"}:{}},children:[r.jsxs("header",{style:nt.quadHead,children:[r.jsxs("div",{style:nt.quadTitleRow,children:[r.jsx("span",{style:{...nt.symbol,color:H.accent},children:H.symbol}),r.jsxs("div",{children:[r.jsx("div",{style:nt.quadTitle,children:H.title}),r.jsx("div",{style:nt.quadSub,children:H.sub})]})]}),r.jsx("span",{style:nt.quadTotal,children:lt(Y(H.id))})]}),r.jsxs("div",{style:nt.list,children:[w(H.id).map(et=>{const X=xr[et.pillar]||xr.Financial,pt=!!et.gcal_event_id;return m===et.id?r.jsxs("div",{style:nt.addBox,children:[r.jsx("input",{autoFocus:!0,placeholder:"Task title",value:x.title,onChange:It=>k({...x,title:It.target.value}),onKeyDown:It=>It.key==="Enter"&&q(et),style:nt.input}),r.jsxs("div",{style:nt.dateTimeRow,children:[r.jsxs("div",{style:nt.dateTimeGroup,children:[r.jsx("label",{style:nt.dtLabel,children:"Date"}),r.jsx("input",{type:"date",value:x.date,onChange:It=>k({...x,date:It.target.value}),style:nt.dtInput})]}),r.jsxs("div",{style:nt.dateTimeGroup,children:[r.jsx("label",{style:nt.dtLabel,children:"Start"}),r.jsx("input",{type:"time",value:x.startTime,onChange:It=>k({...x,startTime:It.target.value}),style:nt.dtInput})]}),r.jsxs("div",{style:nt.dateTimeGroup,children:[r.jsx("label",{style:nt.dtLabel,children:"End"}),r.jsx("div",{style:nt.dtEndValue,children:Sg(x.startTime,Number(x.est)||30)})]})]}),r.jsxs("div",{style:nt.addRow,children:[r.jsx("select",{value:x.pillar,onChange:It=>k({...x,pillar:It.target.value}),style:nt.select,children:Object.keys(xr).map(It=>r.jsx("option",{children:It},It))}),r.jsx("input",{type:"number",value:x.est,onChange:It=>k({...x,est:It.target.value}),style:{...nt.input,width:60}}),r.jsx("span",{style:nt.minLabel,children:"min"}),r.jsx("button",{onClick:()=>q(et),style:nt.saveBtn,children:r.jsx(Mt,{size:14})}),r.jsx("button",{onClick:()=>j(null),style:nt.cancelBtn,children:r.jsx(Tt,{size:14})})]})]},et.id):r.jsxs("div",{onPointerDown:It=>gt(It,et),style:{...nt.card,background:X.soft,cursor:"grab",touchAction:"pan-y",...(f==null?void 0:f.id)===et.id?{opacity:.4}:{}},children:[r.jsx("span",{style:{...nt.cardBar,background:X.dot}}),r.jsxs("div",{style:nt.cardBody,children:[r.jsx("div",{style:nt.cardTitle,children:et.title}),et.start_datetime&&r.jsxs("div",{style:nt.eventTime,children:[r.jsx(Hi,{size:10}),fy(et.start_datetime),pt&&r.jsx("span",{style:nt.syncedDot,title:"Synced to Google Calendar"})]}),r.jsxs("div",{style:nt.cardMeta,children:[r.jsxs("span",{style:nt.metaPill,children:[r.jsx("span",{style:{...nt.dot,background:X.dot,width:7,height:7}}),et.pillar]}),r.jsxs("span",{style:nt.metaPill,children:[r.jsx(Wh,{size:11})," ",lt(et.time_estimate_min)]})]})]}),r.jsxs("div",{style:nt.cardActions,children:[pt&&r.jsx("span",{title:`On calendar as "${rt(et)}"`,style:nt.calDoneIcon,children:r.jsx(Mt,{size:14})}),r.jsx("button",{onClick:()=>O(et),onPointerDown:It=>It.stopPropagation(),style:nt.delBtn,title:"Edit",children:r.jsx(ye,{size:12})}),r.jsx("button",{onClick:()=>U(et.id,et.title),onPointerDown:It=>It.stopPropagation(),style:nt.delBtn,children:r.jsx(Tt,{size:13})})]})]},et.id)}),d===H.id?r.jsxs("div",{style:nt.addBox,children:[r.jsx("input",{autoFocus:!0,placeholder:"Task title",value:p.title,onChange:et=>y({...p,title:et.target.value}),onKeyDown:et=>et.key==="Enter"&&ht(H.id),style:nt.input}),r.jsxs("div",{style:nt.dateTimeRow,children:[r.jsxs("div",{style:nt.dateTimeGroup,children:[r.jsx("label",{style:nt.dtLabel,children:"Date"}),r.jsx("input",{type:"date",value:p.date,onChange:et=>y({...p,date:et.target.value}),style:nt.dtInput})]}),r.jsxs("div",{style:nt.dateTimeGroup,children:[r.jsx("label",{style:nt.dtLabel,children:"Start"}),r.jsx("input",{type:"time",value:p.startTime,onChange:et=>y({...p,startTime:et.target.value}),style:nt.dtInput})]}),r.jsxs("div",{style:nt.dateTimeGroup,children:[r.jsx("label",{style:nt.dtLabel,children:"End"}),r.jsx("div",{style:nt.dtEndValue,children:Sg(p.startTime,Number(p.est)||30)})]})]}),r.jsxs("div",{style:nt.addRow,children:[v?r.jsxs("span",{style:nt.goalPillarTag,children:[r.jsx("span",{style:{...nt.dot,background:(J=xr[v.pillar])==null?void 0:J.dot}})," ",v.pillar]}):r.jsx("select",{value:p.pillar,onChange:et=>y({...p,pillar:et.target.value}),style:nt.select,children:Object.keys(xr).map(et=>r.jsx("option",{children:et},et))}),r.jsx("input",{type:"number",value:p.est,onChange:et=>y({...p,est:et.target.value}),style:{...nt.input,width:60}}),r.jsx("span",{style:nt.minLabel,children:"min"}),T.connected&&r.jsx("span",{style:nt.gcalHint,title:"Will sync to Google Calendar",children:r.jsx(Hi,{size:12})}),r.jsx("button",{onClick:()=>ht(H.id),style:nt.saveBtn,children:r.jsx(Mt,{size:14})}),r.jsx("button",{onClick:()=>{c(null),y(Gi())},style:nt.cancelBtn,children:r.jsx(Tt,{size:14})})]})]}):r.jsxs("button",{onClick:()=>c(H.id),style:nt.addTrigger,children:[r.jsx(de,{size:13})," Add task"]})]})]},H.id)})}),f&&r.jsx("div",{style:{...nt.dragClone,left:f.x+12,top:f.y+12},children:f.title}),r.jsx(Mr,{toasts:M,onUndo:S,onDismiss:A})]})}const nt={page:{fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:16,marginBottom:22},headRight:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:10},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces', Georgia, serif"},legend:{display:"flex",gap:14,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"var(--text-2)",fontWeight:500},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},gcalBadgeOn:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:500,color:"#4C9A6B",background:"rgba(76,154,107,0.10)",border:"1px solid rgba(76,154,107,0.3)",borderRadius:20,padding:"5px 12px",cursor:"pointer"},gcalBadgeOff:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:500,color:"var(--text-2)",background:"var(--surface)",border:"1px solid #DCDAD3",borderRadius:20,padding:"5px 12px",cursor:"pointer"},filterBar:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:10},pillChip:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},goalBar:{display:"flex",gap:7,flexWrap:"wrap",alignItems:"center",marginBottom:18,paddingBottom:14,borderBottom:"1px solid var(--border)"},goalChip:{display:"inline-flex",alignItems:"center",gap:6,maxWidth:220,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},goalChipOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},goalChipText:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},goalEmpty:{fontSize:12,color:"var(--text-3)",fontStyle:"italic"},goalPillarTag:{display:"inline-flex",alignItems:"center",gap:6,fontSize:12.5,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"7px 10px",borderRadius:6,flex:1},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:16},quad:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.06)"},quadHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14},quadTitleRow:{display:"flex",gap:10,alignItems:"center"},symbol:{fontSize:20,lineHeight:1},quadTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em"},quadSub:{fontSize:11,color:"var(--text-3)",marginTop:1,letterSpacing:"0.02em"},quadTotal:{fontSize:12,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"3px 9px",borderRadius:20},list:{display:"flex",flexDirection:"column",gap:8},card:{display:"flex",alignItems:"stretch",gap:10,borderRadius:9,padding:"10px 10px 10px 0",overflow:"hidden"},cardBar:{width:3,borderRadius:3,flexShrink:0},cardBody:{flex:1,minWidth:0},cardTitle:{fontSize:13.5,fontWeight:500,lineHeight:1.35,marginBottom:4},eventTime:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"#3A7CA5",fontWeight:500,marginBottom:5},syncedDot:{width:6,height:6,borderRadius:"50%",background:"#4C9A6B",display:"inline-block",marginLeft:2},cardMeta:{display:"flex",gap:8,flexWrap:"wrap"},metaPill:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"var(--text-2)",fontWeight:500},cardActions:{display:"flex",flexDirection:"column",gap:4,alignSelf:"center",flexShrink:0},calDoneIcon:{width:30,height:30,borderRadius:8,background:"#4C9A6B",color:"#fff",display:"grid",placeItems:"center"},delBtn:{width:30,height:30,borderRadius:8,border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center"},addTrigger:{display:"flex",alignItems:"center",gap:5,fontSize:12.5,color:"var(--text-3)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"8px 10px",cursor:"pointer",fontWeight:500,marginTop:2},addBox:{border:"1px solid var(--border)",borderRadius:9,padding:10,display:"flex",flexDirection:"column",gap:8},dateTimeRow:{display:"flex",gap:8,alignItems:"flex-end"},dateTimeGroup:{display:"flex",flexDirection:"column",gap:3,flex:1},dtLabel:{fontSize:10,fontWeight:600,color:"var(--text-3)",letterSpacing:"0.08em",textTransform:"uppercase"},dtInput:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},dtEndValue:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,color:"var(--text-2)",background:"var(--bg)"},addRow:{display:"flex",alignItems:"center",gap:6},input:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",flex:1,minWidth:0},select:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 8px",fontSize:12.5,fontFamily:"inherit",flex:1},minLabel:{fontSize:11,color:"var(--text-3)"},gcalHint:{color:"#3A7CA5",display:"grid",placeItems:"center"},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"},dragClone:{position:"fixed",zIndex:1e3,pointerEvents:"none",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:8,padding:"8px 12px",fontSize:13,fontWeight:600,color:"var(--text)",boxShadow:"0 8px 24px rgba(0,0,0,0.25)",maxWidth:220,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},Qe={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},Bo=Object.keys(Qe),ps=["Yearly","Quarterly","Monthly","Weekly"],pr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Cg=[{label:"Q1 · Jan–Mar",startMonth:0},{label:"Q2 · Apr–Jun",startMonth:3},{label:"Q3 · Jul–Sep",startMonth:6},{label:"Q4 · Oct–Dec",startMonth:9}],bs=new Date().getFullYear(),An=Array.from({length:8},(t,e)=>bs-1+e);function yy(t=720){const[e,n]=g.useState(()=>window.innerWidth<t);return g.useEffect(()=>{const o=()=>n(window.innerWidth<t);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[t]),e}const Lo=864e5,ge=30,qo=190,Fn=t=>new Date(t+"T00:00:00"),Ig=t=>t.toLocaleDateString("en-US",{month:"short",day:"numeric"}),xy=[{key:"yearly",label:"Yearly",horizons:["Yearly"]},{key:"quarterly",label:"Quarterly",horizons:["Quarterly"]},{key:"mw",label:"Monthly & Weekly",horizons:["Monthly","Weekly"]}],zg={Yearly:"Yr",Quarterly:"Q",Monthly:"Mo",Weekly:"Wk"},vy={Yearly:"Y",Quarterly:"Q",Monthly:"M",Weekly:"W"},Tg={Yearly:0,Quarterly:1,Monthly:2,Weekly:3},Wl=t=>ps[Math.min(ps.indexOf(t)+1,ps.length-1)],Ui=t=>{if(!t||!t.start_date)return Array.from({length:12},(l,a)=>a);const e=new Date(t.start_date+"T00:00:00"),n=new Date(t.end_date+"T00:00:00"),o=e.getFullYear(),i=e.getMonth(),s=n.getFullYear()>o?11:n.getMonth();return Array.from({length:s-i+1},(l,a)=>i+a)},Do=t=>new Date(t+"T00:00:00").getFullYear(),_b=(t,e,n)=>{const o=(n-1)*7+1,i=Math.min(o+6,new Date(t,e+1,0).getDate()),s=String(e+1).padStart(2,"0");return{start_date:`${t}-${s}-${String(o).padStart(2,"0")}`,end_date:`${t}-${s}-${String(i).padStart(2,"0")}`}},Eg=(t,e,n,o=1)=>{const i=e;switch(t){case"Yearly":return{start_date:`${i}-01-01`,end_date:`${i}-12-31`};case"Quarterly":{const s=Math.floor(n/3)*3,l=s+1,a=s+3,d=new Date(i,a,0).getDate();return{start_date:`${i}-${String(l).padStart(2,"0")}-01`,end_date:`${i}-${String(a).padStart(2,"0")}-${d}`}}case"Monthly":{const s=new Date(i,n+1,0).getDate();return{start_date:`${i}-${String(n+1).padStart(2,"0")}-01`,end_date:`${i}-${String(n+1).padStart(2,"0")}-${s}`}}case"Weekly":return _b(i,n,o);default:return{start_date:`${i}-01-01`,end_date:`${i}-12-31`}}},Jo=(t,e)=>{const n=new Date(t+"T00:00:00");return n.setDate(n.getDate()+e),`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`},Ns=(t,e)=>Math.round((new Date(e+"T00:00:00")-new Date(t+"T00:00:00"))/Lo)+1,wy=(t,e,n)=>{if(!n||!n.start_date||!n.end_date)return{start_date:t,end_date:e,clamped:!1};const o=Ns(t,e);let i=t,s=e,l=!1;return i<n.start_date&&(i=n.start_date,s=Jo(i,o-1),l=!0),s>n.end_date&&(s=n.end_date,i=Jo(s,-(o-1)),l=!0,i<n.start_date&&(i=n.start_date)),{start_date:i,end_date:s,clamped:l}},ky=(t,e)=>new Date(t,e+1,0).getDate(),Qa=t=>{const e=new Date(t.start_date+"T00:00:00");if(t.horizon==="Monthly")return ky(e.getFullYear(),e.getMonth());if(t.horizon==="Weekly"){const n=Math.min(Math.max(Math.ceil(e.getDate()/7),1),4),o=_b(e.getFullYear(),e.getMonth(),n);return Ns(o.start_date,o.end_date)}return Ns(t.start_date,t.end_date)},Rg=t=>Math.round(Qa(t)*1.5),jy=t=>t.horizon==="Monthly"||t.horizon==="Weekly",Sy=t=>{if(!t.start_date)return"";const e=new Date(t.start_date+"T00:00:00"),n=e.getMonth();switch(t.horizon){case"Yearly":{const o=t.end_date?new Date(t.end_date+"T00:00:00").getFullYear():e.getFullYear();return o>e.getFullYear()?`${e.getFullYear()}–${o}`:`${e.getFullYear()}`}case"Quarterly":return`Q${Math.floor(n/3)+1} ${e.getFullYear()}`;case"Monthly":return`${pr[n]} ${e.getFullYear()}`;case"Weekly":return`${pr[n]} W${Math.ceil(e.getDate()/7)}`;default:return""}};function Cy(){const[t,e]=g.useState([]),[n,o]=g.useState("All"),[i,s]=g.useState({}),[l,a]=g.useState({}),[d,c]=g.useState(null),[p,y]=g.useState(""),[m,j]=g.useState(0),[x,k]=g.useState(1),[T,b]=g.useState(bs),[u,h]=g.useState(bs),[z,v]=g.useState("Yearly"),[I,L]=g.useState(Bo[0]),[R,E]=g.useState(null),M=yy(),[S,A]=g.useState(!M),[w,Y]=g.useState("day"),[lt,rt]=g.useState(null),ht=g.useRef(null);g.useEffect(()=>{ht.current=lt},[lt]);const U=g.useRef(t);g.useEffect(()=>{U.current=t},[t]);const[O,q]=g.useState(null),P=g.useRef(null);g.useEffect(()=>{P.current=O},[O]);const F=g.useRef(null),f=g.useRef(0),[Q,xt]=g.useState(null),gt=g.useRef(null),H=g.useCallback(C=>{xt(C),clearTimeout(gt.current),gt.current=setTimeout(()=>xt(null),2800)},[]),[ft,J]=g.useState(null),et=g.useRef(null),[X,pt]=g.useState(null),[It,W]=g.useState(null),bt=(C,_)=>{if(X===_){pt(null);return}const ct=C.currentTarget.getBoundingClientRect(),wt=ct.bottom+220<window.innerHeight;W({right:Math.max(8,window.innerWidth-ct.right),...wt?{top:ct.bottom+4}:{bottom:window.innerHeight-ct.top+4}}),pt(_)},Et=C=>{clearTimeout(et.current),et.current=setTimeout(()=>J(C),350)},Dt=()=>{clearTimeout(et.current),J(null)},_t=g.useCallback(()=>{G.getGoals().then(e).catch(console.error)},[]);g.useEffect(()=>{_t()},[_t]);const{deleteItem:be,toasts:Lt,handleUndo:me,handleDismiss:Ce}=Fr(G.deleteGoal,G.restoreGoal,_t),Ie=g.useCallback(async()=>{const C=ht.current;if(rt(null),!C)return;const _=Math.round(C.dx/(C.pxPerDay||ge));if(!_)return;let ct=Jo(C.g.start_date,_),wt=Jo(C.g.end_date,_);if(C.g.parent_goal_id){const At=U.current.find(Ft=>Ft.id===C.g.parent_goal_id),Rt=wy(ct,wt,At);Rt.clamped&&H(`Can't move past "${(At==null?void 0:At.title)||"parent goal"}" — kept within its dates.`),ct=Rt.start_date,wt=Rt.end_date}(ct!==C.g.start_date||wt!==C.g.end_date)&&(await G.updateGoal(C.g.id,{pillar:C.g.pillar,start_date:ct,end_date:wt}),_t())},[_t,H]),Ye=!!lt;g.useEffect(()=>{if(!Ye)return;const C=Rt=>{f.current=Rt.clientX,rt(Ft=>Ft&&{...Ft,dx:Rt.clientX-Ft.startX})},_=()=>Ie();window.addEventListener("pointermove",C),window.addEventListener("pointerup",_);const ct=44,wt=16,At=setInterval(()=>{const Rt=F.current;if(!Rt)return;const Ft=Rt.getBoundingClientRect(),Ut=f.current;let ot=0;if(Ut<Ft.left+ct?ot=-1:Ut>Ft.right-ct&&(ot=1),!ot)return;const ce=Rt.scrollLeft;Rt.scrollLeft=Math.max(0,Math.min(ce+ot*wt,Rt.scrollWidth-Rt.clientWidth));const Le=Rt.scrollLeft-ce;Le&&rt(Nt=>Nt&&{...Nt,startX:Nt.startX-Le,dx:Ut-(Nt.startX-Le)})},16);return()=>{window.removeEventListener("pointermove",C),window.removeEventListener("pointerup",_),clearInterval(At)}},[Ye,Ie]);const ve=g.useCallback(async()=>{const C=P.current;if(q(null),!C)return;const _=C.g,ct=Qa(_),wt=Rg(_),At=Math.max(ct,Math.min(wt,Ns(_.start_date,_.end_date)+Math.round(C.dx/ge)));let Rt=Jo(_.start_date,At-1);if(_.parent_goal_id){const Ft=U.current.find(Ut=>Ut.id===_.parent_goal_id);Ft!=null&&Ft.end_date&&Rt>Ft.end_date&&(Rt=Ft.end_date,H(`Can't extend past "${(Ft==null?void 0:Ft.title)||"parent goal"}" — kept within its dates.`))}Rt!==_.end_date&&Rt>=_.start_date&&(await G.updateGoal(_.id,{end_date:Rt}),_t())},[_t,H]),Tn=!!O;g.useEffect(()=>{if(!Tn)return;const C=ct=>q(wt=>wt&&{...wt,dx:ct.clientX-wt.startX}),_=()=>ve();return window.addEventListener("pointermove",C),window.addEventListener("pointerup",_),()=>{window.removeEventListener("pointermove",C),window.removeEventListener("pointerup",_)}},[Tn,ve]);const er=n==="All",rr=Qe[n]||{dot:"var(--text-3)"},Wr=er?t:t.filter(C=>C.pillar===n),_r=Wr.filter(C=>!C.parent_goal_id),B=C=>Wr.filter(_=>_.parent_goal_id===C),vt=C=>a(_=>({..._,[C]:!_[C]})),Gt=C=>C.horizon==="Monthly"||C.horizon==="Weekly",oe=C=>i[C.id]!==void 0?i[C.id]:Gt(C),kt=C=>s(_=>({..._,[C.id]:!oe(C)})),Yt=(C,_=null)=>{c(C),y(""),k(1);const ct=_?Do(_.start_date):bs;b(ct),h(ct),C==="ROOT"&&L(er?Bo[0]:n);const wt=C==="ROOT"?"Yearly":Wl(_==null?void 0:_.horizon);v(wt);const At=C==="ROOT"?Array.from({length:12},(Rt,Ft)=>Ft):Ui(_);j(wt==="Quarterly"?Math.floor(At[0]/3)*3:At[0]??0)},De=async(C,_)=>{if(!p.trim())return;const ct=(_==null?void 0:_.horizon)??null,wt=C==="ROOT"?z:Wl(ct),At=C==="ROOT"?I:(_==null?void 0:_.pillar)||n;let Rt,Ft;if(wt==="Yearly"){const Ut=Number(T),ot=Math.max(Ut,Number(u)||Ut);Rt=`${Ut}-01-01`,Ft=`${ot}-12-31`}else{const Ut=_?Do(_.start_date):Number(T);({start_date:Rt,end_date:Ft}=Eg(wt,Ut,m,x))}await G.createGoal({pillar:At,title:p.trim(),horizon:wt,parent_goal_id:C==="ROOT"?null:C,start_date:Rt,end_date:Ft}),C!=="ROOT"&&a(Ut=>({...Ut,[C]:!0})),c(null),y(""),_t()},ze=C=>{const _=C.start_date?new Date(C.start_date+"T00:00:00"):new Date,ct=_.getMonth(),wt=Math.min(Math.max(Math.ceil(_.getDate()/7),1),4);E({id:C.id,title:C.title,pillar:C.pillar,horizon:C.horizon,parentGoal:t.find(At=>At.id===C.parent_goal_id)||null,year:Do(C.start_date),endYear:Do(C.end_date),month:C.horizon==="Quarterly"?Math.floor(ct/3)*3:ct,week:wt})},En=async()=>{if(!R||!R.title.trim())return;let C,_;if(R.horizon==="Yearly"){const ct=Number(R.year),wt=Math.max(ct,Number(R.endYear)||ct);C=`${ct}-01-01`,_=`${wt}-12-31`}else{let ct=R.month;R.horizon==="Weekly"&&R.parentGoal&&(ct=Ui(R.parentGoal)[0]);const wt=R.parentGoal?Do(R.parentGoal.start_date):Number(R.year);({start_date:C,end_date:_}=Eg(R.horizon,wt,ct,R.week))}await G.updateGoal(R.id,{title:R.title.trim(),pillar:R.pillar,start_date:C,end_date:_}),E(null),_t()},oc=({parentId:C,parentGoal:_,depth:ct})=>{const wt=C==="ROOT",At=wt?z:Wl((_==null?void 0:_.horizon)??null),Rt=wt?Array.from({length:12},(ot,ce)=>ce):Ui(_),Ft=Cg.filter(ot=>Rt.includes(ot.startMonth)),Ut=ot=>{v(ot),j(0),k(1),h(T)};return r.jsxs("div",{style:{...V.addBox,marginLeft:ct*24},children:[r.jsx("input",{autoFocus:!0,placeholder:`New ${At.toLowerCase()} goal…`,value:p,onChange:ot=>y(ot.target.value),onKeyDown:ot=>{ot.key==="Enter"&&De(C,_),ot.key==="Escape"&&c(null)},style:V.input}),wt&&er&&r.jsx("select",{value:I,onChange:ot=>L(ot.target.value),style:V.monthSelect,title:"Pillar",children:Bo.map(ot=>r.jsx("option",{value:ot,children:ot},ot))}),wt&&r.jsx("select",{value:z,onChange:ot=>Ut(ot.target.value),style:V.monthSelect,title:"Goal level",children:ps.map(ot=>r.jsx("option",{value:ot,children:ot},ot))}),At==="Yearly"&&r.jsxs(r.Fragment,{children:[r.jsx("select",{value:T,onChange:ot=>{const ce=Number(ot.target.value);b(ce),u<ce&&h(ce)},style:V.monthSelect,title:"Start year",children:An.map(ot=>r.jsx("option",{value:ot,children:ot},ot))}),r.jsx("span",{style:V.toTag,children:"to"}),r.jsx("select",{value:u,onChange:ot=>h(Number(ot.target.value)),style:V.monthSelect,title:"End year (spans multiple years)",children:An.filter(ot=>ot>=T).map(ot=>r.jsx("option",{value:ot,children:ot},ot))})]}),At!=="Yearly"&&wt&&r.jsx("select",{value:T,onChange:ot=>b(Number(ot.target.value)),style:V.monthSelect,title:"Year",children:An.map(ot=>r.jsx("option",{value:ot,children:ot},ot))}),At==="Quarterly"&&r.jsx("select",{value:m,onChange:ot=>j(Number(ot.target.value)),style:V.monthSelect,children:Ft.map(ot=>r.jsx("option",{value:ot.startMonth,children:ot.label},ot.startMonth))}),At==="Monthly"&&r.jsx("select",{value:m,onChange:ot=>j(Number(ot.target.value)),style:V.monthSelect,children:Rt.map(ot=>r.jsx("option",{value:ot,children:pr[ot]},ot))}),At==="Weekly"&&r.jsxs(r.Fragment,{children:[wt?r.jsx("select",{value:m,onChange:ot=>j(Number(ot.target.value)),style:V.monthSelect,children:Rt.map(ot=>r.jsx("option",{value:ot,children:pr[ot]},ot))}):r.jsx("span",{style:V.inheritTag,children:pr[Rt[0]]}),r.jsx("select",{value:x,onChange:ot=>k(Number(ot.target.value)),style:V.monthSelect,children:[1,2,3,4].map(ot=>r.jsxs("option",{value:ot,children:["Week ",ot]},ot))})]}),r.jsx("button",{onClick:()=>De(C,_),style:V.saveBtn,children:r.jsx(Mt,{size:14})}),r.jsx("button",{onClick:()=>c(null),style:V.cancelBtn,children:r.jsx(Tt,{size:14})})]})},ic=({goal:C,depth:_})=>{var Ft,Ut,ot,ce,Le;const ct=B(C.id),wt=l[C.id],At=C.horizon!=="Weekly";if((R==null?void 0:R.id)===C.id){const Nt=Ui(R.parentGoal),ln=Cg.filter(jt=>Nt.includes(jt.startMonth)),wo=!R.parentGoal;return r.jsxs("div",{style:{...V.editBox,marginLeft:_*24},children:[r.jsx("input",{autoFocus:!0,value:R.title,onChange:jt=>E({...R,title:jt.target.value}),onKeyDown:jt=>jt.key==="Enter"&&En(),style:{...V.input,flex:1}}),r.jsx("select",{value:R.pillar,onChange:jt=>E({...R,pillar:jt.target.value}),style:V.monthSelect,children:Bo.map(jt=>r.jsx("option",{children:jt},jt))}),R.horizon==="Yearly"&&r.jsxs(r.Fragment,{children:[r.jsx("select",{value:R.year,onChange:jt=>{const ko=Number(jt.target.value);E({...R,year:ko,endYear:Math.max(ko,R.endYear)})},style:V.monthSelect,title:"Start year",children:An.map(jt=>r.jsx("option",{value:jt,children:jt},jt))}),r.jsx("span",{style:V.toTag,children:"to"}),r.jsx("select",{value:R.endYear,onChange:jt=>E({...R,endYear:Number(jt.target.value)}),style:V.monthSelect,title:"End year (spans multiple years)",children:An.filter(jt=>jt>=R.year).map(jt=>r.jsx("option",{value:jt,children:jt},jt))})]}),R.horizon!=="Yearly"&&wo&&r.jsx("select",{value:R.year,onChange:jt=>E({...R,year:Number(jt.target.value)}),style:V.monthSelect,title:"Year",children:An.map(jt=>r.jsx("option",{value:jt,children:jt},jt))}),R.horizon==="Quarterly"&&r.jsx("select",{value:R.month,onChange:jt=>E({...R,month:Number(jt.target.value)}),style:V.monthSelect,children:ln.map(jt=>r.jsx("option",{value:jt.startMonth,children:jt.label},jt.startMonth))}),R.horizon==="Monthly"&&r.jsx("select",{value:R.month,onChange:jt=>E({...R,month:Number(jt.target.value)}),style:V.monthSelect,children:Nt.map(jt=>r.jsx("option",{value:jt,children:pr[jt]},jt))}),R.horizon==="Weekly"&&r.jsxs(r.Fragment,{children:[wo?r.jsx("select",{value:R.month,onChange:jt=>E({...R,month:Number(jt.target.value)}),style:V.monthSelect,children:Nt.map(jt=>r.jsx("option",{value:jt,children:pr[jt]},jt))}):r.jsx("span",{style:V.inheritTag,children:pr[Nt[0]]}),r.jsx("select",{value:R.week,onChange:jt=>E({...R,week:Number(jt.target.value)}),style:V.monthSelect,children:[1,2,3,4].map(jt=>r.jsxs("option",{value:jt,children:["Week ",jt]},jt))})]}),r.jsx("button",{onClick:En,style:V.saveBtn,children:r.jsx(Mt,{size:14})}),r.jsx("button",{onClick:()=>E(null),style:V.cancelBtn,children:r.jsx(Tt,{size:14})})]})}return r.jsxs("div",{children:[r.jsxs("div",{style:{...V.row,marginLeft:_*24,background:_===0&&((Ft=Qe[C.pillar])==null?void 0:Ft.soft)||"transparent"},children:[ct.length>0?r.jsx("button",{onClick:()=>vt(C.id),style:V.caret,children:wt?r.jsx(ki,{size:15}):r.jsx(sn,{size:15})}):r.jsx("span",{style:{...V.caret,opacity:.25},children:r.jsx(Zd,{size:12})}),r.jsx("span",{style:{...V.horizonTag,color:((Ut=Qe[C.pillar])==null?void 0:Ut.dot)||rr.dot,borderColor:((ot=Qe[C.pillar])==null?void 0:ot.dot)||rr.dot},title:C.horizon,children:M?vy[C.horizon]:C.horizon}),r.jsxs("div",{style:V.nameCol,children:[r.jsx("span",{style:{...V.title,...ft===C.id?V.titleFull:{}},title:C.title,onPointerDown:()=>Et(C.id),onPointerUp:Dt,onPointerLeave:Dt,onPointerCancel:Dt,children:C.title}),r.jsx("span",{style:V.whenSub,children:Sy(C)})]}),M?r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{position:"relative",flexShrink:0},children:[r.jsx("button",{onClick:Nt=>bt(Nt,C.id),style:V.rowAdd,title:"Options",children:r.jsx(Db,{size:15})}),X===C.id&&r.jsxs(r.Fragment,{children:[r.jsx("div",{style:V.menuBackdrop,onClick:()=>pt(null)}),r.jsxs("div",{style:{...V.goalMenu,...It},children:[r.jsxs("button",{style:V.menuItem,onClick:()=>{ze(C),pt(null)},children:[r.jsx(ye,{size:14})," Edit"]}),At&&r.jsxs("button",{style:V.menuItem,onClick:()=>{a(Nt=>({...Nt,[C.id]:!0})),Yt(C.id,C),pt(null)},children:[r.jsx(de,{size:14})," Add sub-goal"]}),r.jsxs("button",{style:{...V.menuItem,color:"#C2536B"},onClick:()=>{be(C.id,C.title),pt(null)},children:[r.jsx(Tt,{size:14})," Delete"]})]})]})]}),r.jsx("button",{onClick:()=>kt(C),style:{...V.rowAdd,color:oe(C)?((ce=Qe[C.pillar])==null?void 0:ce.dot)||rr.dot:"var(--text-3)"},title:oe(C)?"Showing on timeline":"Hidden from timeline",children:oe(C)?r.jsx(Ps,{size:14}):r.jsx(Ga,{size:14})})]}):r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:()=>kt(C),style:{...V.rowAdd,color:oe(C)?((Le=Qe[C.pillar])==null?void 0:Le.dot)||rr.dot:"var(--text-3)"},title:oe(C)?"Showing on timeline — click to hide":"Hidden from timeline — click to show",children:oe(C)?r.jsx(Ps,{size:13}):r.jsx(Ga,{size:13})}),r.jsx("button",{onClick:()=>ze(C),style:V.rowAdd,title:"Edit",children:r.jsx(ye,{size:12})}),At&&r.jsx("button",{onClick:()=>{a(Nt=>({...Nt,[C.id]:!0})),Yt(C.id,C)},style:V.rowAdd,title:"Add sub-goal",children:r.jsx(de,{size:13})}),r.jsx("button",{onClick:()=>be(C.id,C.title),style:{...V.rowAdd,color:"var(--text-3)"},title:"Delete",children:r.jsx(Tt,{size:13})})]})]}),wt&&ct.map(Nt=>r.jsx(ic,{goal:Nt,depth:_+1},Nt.id)),wt&&d===C.id&&r.jsx(oc,{parentId:C.id,parentGoal:C,depth:_+1})]})},yo=t.filter(C=>oe(C)&&C.start_date&&C.end_date),sc=xy.map(C=>({...C,items:yo.filter(_=>C.horizons.includes(_.horizon)).sort((_,ct)=>_.pillar.localeCompare(ct.pillar)||_.start_date.localeCompare(ct.start_date)||Tg[_.horizon]-Tg[ct.horizon]||_.end_date.localeCompare(ct.end_date))})).filter(C=>C.items.length>0),ee=(()=>{if(!yo.length)return null;let C=yo[0].start_date,_=yo[0].end_date;return yo.forEach(ct=>{ct.start_date<C&&(C=ct.start_date),ct.end_date>_&&(_=ct.end_date)}),{start:Fn(C),end:Fn(_)}})(),al=(()=>{if(!ee)return[];const C=[];for(let _=ee.start.getTime();_<=ee.end.getTime();_+=Lo)C.push(new Date(_));return C})(),Si=al.length,Xb=(()=>{const C=[];return al.forEach(_=>{const ct=`${_.getFullYear()}-${_.getMonth()}`,wt=C[C.length-1];wt&&wt.key===ct?wt.days++:C.push({key:ct,label:`${pr[_.getMonth()]} '${String(_.getFullYear()).slice(2)}`,days:1})}),C})(),xo=new Date;xo.setHours(0,0,0,0);const Rn=ee?Math.round((xo-ee.start)/Lo):-1,vo=Rn>=0&&Rn<Si,lc=C=>Math.round((Fn(C.end_date)-Fn(C.start_date))/Lo)+1,Bn=w==="month",ac=ee?ee.start.getFullYear():0,dc=ee?ee.start.getMonth():0,cc=(()=>{if(!ee)return[];const C=[];let _=ac,ct=dc;const wt=ee.end.getFullYear(),At=ee.end.getMonth();for(;_<wt||_===wt&&ct<=At;)C.push({y:_,m:ct}),ct++,ct>11&&(ct=0,_++);return C})(),Ci=cc.length||1,qb=(C,_)=>{const ct=Fn(C),wt=(ct.getFullYear()-ac)*12+ct.getMonth()-dc,At=new Date(ct.getFullYear(),ct.getMonth()+1,0).getDate();return wt+(ct.getDate()-(_?0:1))/At},dl=(C,_)=>qb(C,_)/Ci*100,Jb=`${xo.getFullYear()}-${String(xo.getMonth()+1).padStart(2,"0")}-${String(xo.getDate()).padStart(2,"0")}`,Zb=ee?dl(Jb,!1):0,gc=(S?qo:0)+Rn*ge,tm=ee?`${ee.start.getTime()}-${ee.end.getTime()}`:"";return g.useEffect(()=>{if(Bn||!vo)return;const C=F.current;C&&(C.scrollLeft=Math.max(0,gc-C.clientWidth/2+ge/2))},[tm,Rn,S,vo,Bn]),r.jsxs("div",{style:V.page,children:[r.jsxs("div",{style:V.head,children:[r.jsx("div",{style:V.eyebrow,children:"Anvil · Goals"}),r.jsx("h1",{style:V.h1,children:er?"All Goals":`${n} Goals`})]}),r.jsxs("div",{style:V.pillarPicker,children:[r.jsx("button",{onClick:()=>{o("All"),c(null),E(null)},style:{...V.pillarChip,...er?{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"}:{}},children:"All Goals"}),Bo.map(C=>{const _=C===n;return r.jsxs("button",{onClick:()=>{o(C),c(null),E(null)},style:{...V.pillarChip,..._?{background:Qe[C].dot,color:"#fff",borderColor:Qe[C].dot}:{}},children:[r.jsx("span",{style:{...V.dot,background:_?"#fff":Qe[C].dot}}),C]},C)})]}),r.jsxs("div",{style:V.list,children:[_r.map(C=>r.jsx(ic,{goal:C,depth:0},C.id)),_r.length===0&&r.jsxs("div",{style:V.ganttEmpty,children:["No goals yet",er?"":` for ${n}`,"."]}),d==="ROOT"&&r.jsx(oc,{parentId:"ROOT",parentGoal:null,depth:0}),d!=="ROOT"&&r.jsxs("button",{onClick:()=>Yt("ROOT",null),style:V.rootAdd,children:[r.jsx(de,{size:14})," Add new goal"]})]}),r.jsxs("div",{style:V.ganttWrap,children:[r.jsxs("div",{style:V.ganttTop,children:[r.jsxs("div",{style:V.ganttTitle,children:[Bn?"Monthly":"Daily"," Timeline",ee?` · ${Ig(ee.start)} – ${Ig(ee.end)}`:""]}),r.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[r.jsxs("div",{style:V.zoomToggle,children:[r.jsx("button",{onClick:()=>Y("day"),style:{...V.zoomBtn,...Bn?{}:V.zoomBtnOn},children:"Day"}),r.jsx("button",{onClick:()=>Y("month"),style:{...V.zoomBtn,...Bn?V.zoomBtnOn:{}},children:"Month"})]}),r.jsxs("button",{onClick:()=>A(C=>!C),style:V.labelToggle,children:[S?r.jsx(qh,{size:14}):r.jsx(Jh,{size:14}),S?"Hide names":"Show names"]})]})]}),ee?Bn?r.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[r.jsxs("div",{style:V.gBandRow,children:[S&&r.jsx("div",{style:{...V.gLabelHead,zIndex:4},children:"Goal"}),r.jsx("div",{style:{flex:1,display:"grid",gridTemplateColumns:`repeat(${Ci}, 1fr)`,minWidth:0},children:cc.map((C,_)=>r.jsxs("div",{style:V.gMonthFluid,children:[pr[C.m],C.m===0||_===0?` '${String(C.y).slice(2)}`:""]},_))})]}),sc.map(C=>r.jsxs("div",{children:[r.jsxs("div",{style:V.gGroupRow,children:[S?r.jsxs("div",{style:V.gGroupLabel,children:[C.label,r.jsx("span",{style:V.gGroupCount,children:C.items.length})]}):r.jsxs("div",{style:V.gGroupChip,children:[C.label," · ",C.items.length]}),r.jsx("div",{style:{flex:1}})]}),C.items.map(_=>{var Le;const ct=((Le=Qe[_.pillar])==null?void 0:Le.dot)||"#9A968C",wt=(lt==null?void 0:lt.id)===_.id,At=wt?lt.dx:0,Rt=dl(_.start_date,!1),Ft=Math.max(2,dl(_.end_date,!0)-Rt),Ut=lc(_),ot=Ft>=14,ce=`${_.title} · ${_.start_date} → ${_.end_date} · ${Ut} day${Ut>1?"s":""}`;return r.jsxs("div",{style:V.gRow,children:[S&&r.jsxs("div",{style:{...V.gLabel,paddingLeft:12},children:[r.jsx("span",{style:{...V.ganttRowDot,background:ct}}),r.jsx("span",{style:{...V.gHzTag,color:ct,borderColor:ct},children:zg[_.horizon]}),r.jsx("span",{style:V.gLabelText,title:_.title,children:_.title}),r.jsxs("span",{style:V.gDurChip,children:[Ut,"d"]})]}),r.jsxs("div",{style:{position:"relative",flex:1,minHeight:36,minWidth:0,backgroundImage:`repeating-linear-gradient(to right, var(--border) 0, var(--border) 1px, transparent 1px, transparent calc(100% / ${Ci}))`},children:[vo&&r.jsx("div",{style:{...V.gTodayLine,left:`${Zb}%`}}),r.jsxs("div",{onPointerDown:Nt=>{Nt.preventDefault(),f.current=Nt.clientX;const ln=Nt.currentTarget.parentNode.offsetWidth;rt({id:_.id,startX:Nt.clientX,dx:0,g:_,pxPerDay:ln/Ci/30.44})},style:{...V.gBar,left:`${Rt}%`,width:`${Ft}%`,background:ct,cursor:wt?"grabbing":"grab",transform:At?`translateX(${At}px)`:"none",zIndex:wt?6:1,boxShadow:wt?"0 4px 12px rgba(0,0,0,0.28)":"0 1px 2px rgba(0,0,0,0.15)",touchAction:"none"},title:ce,children:[r.jsx(wg,{size:12,style:{opacity:.7,flexShrink:0,marginRight:2,color:"#fff"}}),ot&&r.jsx("span",{style:V.gBarLabel,children:_.title})]}),!ot&&r.jsx("span",{style:{...V.gBarOutside,left:`calc(${Rt+Ft}% + 6px)`},title:ce,children:_.title})]})]},_.id)})]},C.key))]}):r.jsx("div",{style:V.ganttScroll,ref:F,children:r.jsxs("div",{style:{minWidth:(S?qo:0)+Si*ge,position:"relative"},children:[vo&&r.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:gc,width:ge,background:"color-mix(in srgb, var(--accent) 14%, transparent)",pointerEvents:"none",zIndex:3}}),r.jsxs("div",{style:V.gBandRow,children:[S&&r.jsx("div",{style:{...V.gLabelHead,zIndex:4},children:"Goal"}),r.jsx("div",{style:{display:"flex"},children:Xb.map((C,_)=>r.jsx("div",{style:{...V.gMonthCell,width:C.days*ge},children:C.label},_))})]}),r.jsxs("div",{style:V.gBandRow,children:[S&&r.jsx("div",{style:{...V.gLabelHead,zIndex:4,fontSize:10,color:"var(--text-3)",fontWeight:600},children:"days →"}),r.jsx("div",{style:{display:"flex"},children:al.map((C,_)=>{const ct=C.getDay()===0||C.getDay()===6,wt=_===Rn;return r.jsx("div",{style:{...V.gDayCell,...ct?V.gWeekend:{},...wt?V.gTodayCell:{}},children:C.getDate()},_)})})]}),sc.map(C=>r.jsxs("div",{children:[r.jsxs("div",{style:V.gGroupRow,children:[S?r.jsxs("div",{style:V.gGroupLabel,children:[C.label,r.jsx("span",{style:V.gGroupCount,children:C.items.length})]}):r.jsxs("div",{style:V.gGroupChip,children:[C.label," · ",C.items.length]}),r.jsx("div",{style:{width:Si*ge,flexShrink:0}})]}),C.items.map(_=>{var ko;const ct=((ko=Qe[_.pillar])==null?void 0:ko.dot)||"#9A968C",wt=Math.round((Fn(_.start_date)-ee.start)/Lo),At=lc(_),Rt=(lt==null?void 0:lt.id)===_.id,Ft=Rt?lt.dx:0,Ut=jy(_),ot=(O==null?void 0:O.id)===_.id,ce=Ut?Qa(_):At,Le=Ut?Rg(_):At,Nt=ot?Math.max(ce,Math.min(Le,At+Math.round(O.dx/ge))):At,ln=Nt*ge-4,wo=ln>=54,jt=`${_.title} · ${_.start_date} → ${_.end_date} · ${Nt} day${Nt>1?"s":""}${Ut?` (max ${Le})`:""}`;return r.jsxs("div",{style:V.gRow,children:[S&&r.jsxs("div",{style:{...V.gLabel,paddingLeft:12},children:[r.jsx("span",{style:{...V.ganttRowDot,background:ct}}),r.jsx("span",{style:{...V.gHzTag,color:ct,borderColor:ct},children:zg[_.horizon]}),r.jsx("span",{style:V.gLabelText,title:_.title,children:_.title}),r.jsxs("span",{style:V.gDurChip,children:[Nt,"d"]})]}),r.jsxs("div",{style:{...V.gTrack,width:Si*ge},children:[vo&&r.jsx("div",{style:{...V.gTodayLine,left:Rn*ge}}),r.jsxs("div",{onPointerDown:an=>{an.preventDefault(),f.current=an.clientX,rt({id:_.id,startX:an.clientX,dx:0,g:_,pxPerDay:ge})},style:{...V.gBar,left:wt*ge+2,width:ln,background:ct,cursor:Rt?"grabbing":"grab",transform:Ft?`translateX(${Ft}px)`:"none",zIndex:Rt||ot?6:1,boxShadow:Rt||ot?"0 4px 12px rgba(0,0,0,0.28)":"0 1px 2px rgba(0,0,0,0.15)",touchAction:"none"},title:jt,children:[Ut&&Nt>ce&&r.jsx("div",{style:{position:"absolute",left:ce*ge,top:0,bottom:0,right:0,background:"#C2536B",borderRadius:"0 5px 5px 0"}}),r.jsx(wg,{size:12,style:{opacity:.7,flexShrink:0,marginRight:2,color:"#fff",position:"relative",zIndex:1}}),wo&&r.jsx("span",{style:{...V.gBarLabel,position:"relative",zIndex:1},children:_.title}),Ut&&r.jsx("div",{onPointerDown:an=>{an.preventDefault(),an.stopPropagation(),q({id:_.id,startX:an.clientX,dx:0,g:_})},style:V.resizeHandle,title:`Drag to extend up to ${Le} days`,children:r.jsx("div",{style:V.resizeGrip})})]}),!wo&&r.jsx("span",{style:{...V.gBarOutside,left:wt*ge+ln+8+Ft},title:jt,children:_.title})]})]},_.id)})]},C.key))]})}):r.jsx("div",{style:V.ganttEmpty,children:"No goals on the timeline. Click the eye icon on a goal to show it here."}),ee&&r.jsxs("div",{style:V.gLegend,children:[r.jsxs("span",{style:V.gLegendItem,children:[r.jsx("span",{style:{...V.gLegendBar}})," bar length = number of days"]}),r.jsxs("span",{style:V.gLegendItem,children:[r.jsx("span",{style:V.gLegendToday})," today"]})]})]}),Q&&r.jsxs("div",{style:V.warnToast,children:[r.jsx(dy,{size:15,style:{flexShrink:0}}),r.jsx("span",{children:Q})]}),r.jsx(Mr,{toasts:Lt,onUndo:me,onDismiss:Ce})]})}const V={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box",maxWidth:"100%",overflowX:"hidden"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},pillarPicker:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16},pillarChip:{display:"flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},list:{background:"var(--surface)",borderRadius:12,padding:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"hidden"},row:{display:"flex",alignItems:"center",gap:9,padding:"9px 10px",borderRadius:8,flexWrap:"nowrap"},caret:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",display:"grid",placeItems:"center",padding:0,width:18,height:18,flexShrink:0},horizonTag:{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",border:"1px solid",borderRadius:5,padding:"2px 6px",flexShrink:0},nameCol:{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:1},title:{fontSize:14,fontWeight:500,lineHeight:1.3,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",userSelect:"none",WebkitUserSelect:"none",cursor:"default"},titleFull:{whiteSpace:"normal",overflow:"visible",textOverflow:"clip",wordBreak:"break-word"},whenSub:{fontSize:11,fontStyle:"italic",color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},rowAdd:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,flexShrink:0},menuBackdrop:{position:"fixed",inset:0,zIndex:40},goalMenu:{position:"fixed",zIndex:41,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 6px 24px rgba(0,0,0,0.18)",padding:4,minWidth:180,display:"flex",flexDirection:"column"},menuItem:{display:"flex",alignItems:"center",gap:9,width:"100%",border:"none",background:"none",padding:"10px 12px",borderRadius:7,cursor:"pointer",fontFamily:"inherit",fontSize:13.5,fontWeight:500,color:"var(--text)",textAlign:"left"},rootAdd:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"var(--text-2)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"9px 12px",cursor:"pointer",fontWeight:600,fontFamily:"inherit",marginTop:6,width:"100%",justifyContent:"center"},addBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 0 6px 28px",flexWrap:"wrap"},editBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 10px",flexWrap:"wrap",background:"var(--bg)",borderRadius:8,margin:"4px 0"},input:{border:"1px solid var(--border)",borderRadius:7,padding:"8px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",flex:1,minWidth:120},monthSelect:{border:"1px solid var(--border)",borderRadius:7,padding:"8px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},inheritTag:{fontSize:11.5,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"6px 9px",borderRadius:7,flexShrink:0},toTag:{fontSize:11.5,fontWeight:600,color:"var(--text-3)",flexShrink:0},warnToast:{position:"fixed",top:18,left:"50%",transform:"translateX(-50%)",zIndex:300,display:"flex",alignItems:"center",gap:8,maxWidth:"90vw",background:"#C2536B",color:"#fff",padding:"10px 16px",borderRadius:10,fontSize:13,fontWeight:600,boxShadow:"0 6px 24px rgba(0,0,0,0.25)"},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},ganttWrap:{background:"var(--surface)",borderRadius:12,padding:"16px 14px",marginTop:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},ganttTop:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:10,marginBottom:14},ganttTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",fontFamily:"'Fraunces',Georgia,serif"},labelToggle:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"5px 10px",borderRadius:8,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},zoomToggle:{display:"inline-flex",border:"1px solid var(--border)",borderRadius:8,overflow:"hidden"},zoomBtn:{border:"none",background:"var(--surface)",color:"var(--text-2)",padding:"5px 12px",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},zoomBtnOn:{background:"var(--accent-strong)",color:"#fff"},gMonthFluid:{borderLeft:"1px solid var(--border)",fontSize:10,fontWeight:700,color:"var(--text-2)",textAlign:"center",padding:"5px 0",whiteSpace:"nowrap",overflow:"hidden"},gGroupChip:{position:"sticky",left:0,zIndex:3,background:"var(--surface-2)",padding:"5px 10px",fontSize:10,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-2)",whiteSpace:"nowrap",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center"},ganttEmpty:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},ganttScroll:{overflowX:"auto"},ganttRowDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},gBandRow:{display:"flex",alignItems:"stretch",borderBottom:"1px solid var(--border)"},gLabelHead:{width:qo,flexShrink:0,position:"sticky",left:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center",padding:"6px 10px",fontSize:12,fontWeight:700,color:"var(--text-2)"},gMonthCell:{flexShrink:0,borderLeft:"1px solid var(--border)",fontSize:10.5,fontWeight:700,color:"var(--text-2)",textAlign:"center",padding:"5px 0",whiteSpace:"nowrap",overflow:"hidden"},gDayCell:{width:ge,flexShrink:0,textAlign:"center",fontSize:10,color:"var(--text-3)",padding:"4px 0",borderLeft:"1px solid var(--border)",fontWeight:600},gWeekend:{background:"var(--surface-2)"},gTodayCell:{background:"var(--hover)",color:"var(--accent)",fontWeight:800},gGroupRow:{display:"flex",alignItems:"stretch",background:"var(--surface-2)",borderBottom:"1px solid var(--border)",borderTop:"1px solid var(--border)"},gGroupLabel:{width:qo,flexShrink:0,position:"sticky",left:0,background:"var(--surface-2)",zIndex:3,padding:"6px 12px",fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-2)",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center",gap:7},gGroupCount:{fontSize:10,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 6px"},gHzTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.04em",border:"1px solid",borderRadius:4,padding:"1px 4px",flexShrink:0},gRow:{display:"flex",alignItems:"stretch",minHeight:36,borderBottom:"1px solid var(--border)"},gLabel:{width:qo,flexShrink:0,display:"flex",alignItems:"center",gap:7,position:"sticky",left:0,background:"var(--surface)",zIndex:2,borderRight:"1px solid var(--border)",paddingRight:8,overflow:"hidden"},gLabelText:{flex:1,minWidth:0,fontSize:12,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"var(--text)"},gDurChip:{fontSize:10,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",borderRadius:10,padding:"1px 6px",flexShrink:0,marginRight:6},gTrack:{position:"relative",flexShrink:0,minHeight:36,backgroundImage:`repeating-linear-gradient(to right, var(--border) 0, var(--border) 1px, transparent 1px, transparent ${ge}px)`},gBar:{position:"absolute",top:9,height:18,borderRadius:5,display:"flex",alignItems:"center",padding:"0 7px",boxShadow:"0 1px 2px rgba(0,0,0,0.15)",overflow:"hidden",zIndex:1},gBarLabel:{fontSize:11,fontWeight:600,color:"#fff",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},gBarOutside:{position:"absolute",top:9,height:18,display:"flex",alignItems:"center",fontSize:11,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",pointerEvents:"none",zIndex:1},resizeHandle:{position:"absolute",right:0,top:0,bottom:0,width:12,cursor:"ew-resize",display:"grid",placeItems:"center",touchAction:"none",zIndex:2},resizeGrip:{width:2,height:11,background:"rgba(255,255,255,0.9)",borderRadius:1,boxShadow:"3px 0 0 rgba(255,255,255,0.6)"},gTodayLine:{position:"absolute",top:0,bottom:0,width:2,background:"#C2536B",zIndex:0,opacity:.6},gLegend:{display:"flex",gap:16,marginTop:12,fontSize:11,color:"var(--text-3)",flexWrap:"wrap"},gLegendItem:{display:"flex",alignItems:"center",gap:6,fontWeight:600},gLegendBar:{width:18,height:8,borderRadius:3,background:"var(--accent)",display:"inline-block"},gLegendToday:{width:2,height:12,background:"#C2536B",display:"inline-block"}},Sn={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.12)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.12)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.12)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.12)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.12)"}},Lb=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Iy=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],sl=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,zy=()=>sl(new Date),Ty=(t=0)=>{const e=new Date,n=e.getDay(),o=n===0?-6:1-n,i=new Date(e);return i.setDate(e.getDate()+o+t*7),Array.from({length:7},(s,l)=>{const a=new Date(i);return a.setDate(i.getDate()+l),sl(a)})},Ey=(t=0)=>{const e=new Date,n=new Date(e.getFullYear(),e.getMonth()+t,1),o=n.getFullYear(),i=n.getMonth(),s=new Date(o,i+1,0).getDate(),l=n.getDay(),a=l===0?6:l-1,d=Array.from({length:s},(p,y)=>`${o}-${String(i+1).padStart(2,"0")}-${String(y+1).padStart(2,"0")}`),c=n.toLocaleDateString("en-US",{month:"long",year:"numeric"});return{dates:d,startOffset:a,label:c,year:o,month:i}},Bg=t=>new Date(t+"T00:00").toLocaleDateString("en-US",{month:"short",day:"numeric"}),Hr=zy(),Ry=new Date().getFullYear();function By(){var P,F;const[t,e]=g.useState([]),[n,o]=g.useState("ALL"),[i,s]=g.useState(!1),[l,a]=g.useState(!1),[d,c]=g.useState(!1),[p,y]=g.useState(null),[m,j]=g.useState(null),[x,k]=g.useState({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week"}),[T,b]=g.useState(!1),[u,h]=g.useState([]),z=g.useCallback(()=>G.getHabits().then(e).catch(console.error),[]);g.useEffect(()=>{z()},[z]),g.useEffect(()=>{G.getSetting("habit_order").then(f=>{Array.isArray(f==null?void 0:f.value)&&h(f.value)}).catch(()=>{})},[]);const v=g.useMemo(()=>u.length?[...t].sort((f,Q)=>{const xt=u.indexOf(f.id),gt=u.indexOf(Q.id);return xt===-1&&gt===-1?0:xt===-1?1:gt===-1?-1:xt-gt}):t,[t,u]),I=async f=>{h(f),await G.setSetting("habit_order",f),b(!1)};g.useEffect(()=>{const f=()=>{const Q=window.innerWidth<720;s(Q),Q||a(!1)};return f(),window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[]);const{deleteItem:L,toasts:R,handleUndo:E,handleDismiss:M}=Fr(G.deleteHabit,G.restoreHabit,z),S=f=>{o(f),i&&a(!1)},A=(f,Q)=>{(f.type==="minimum"||f.type==="maximum")&&f.period==="day"?j({habit:f,date:Q}):w(f.id,Q)},w=async(f,Q)=>{await G.toggleHabitLog(f,Q),z()},Y=async(f,Q,xt,gt)=>{await G.setHabitLogCount(f,Q,xt,gt),j(null),z()},lt=async(f,Q)=>{await G.clearHabitLog(f,Q),j(null),z()},rt=async()=>{if(!x.name.trim())return;const f={name:x.name.trim(),pillar:x.pillar,target_per_week:Number(x.target_per_week)||7,type:x.type,target_count:x.type!=="regular"?Number(x.target_count)||1:null,period:x.type!=="regular"?x.period:null};await G.createHabit(f),k({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week"}),c(!1),z()},ht=async(f,Q)=>{n===f&&o("ALL"),L(f,Q)},U=t.find(f=>f.id===n),O=f=>new Set(f.logs||[]),q={...$.sidebar,...i?$.sidebarOverlay:{},...i&&!l?$.sidebarHidden:{}};return r.jsxs("div",{style:$.shell,children:[i&&l&&r.jsx("div",{style:$.backdrop,onClick:()=>a(!1)}),r.jsxs("aside",{style:q,children:[r.jsxs("div",{style:$.sideTop,children:[r.jsx("div",{style:$.brand,children:"Anvil · Habits"}),i&&r.jsx("button",{onClick:()=>a(!1),style:$.closeBtn,children:r.jsx(Tt,{size:18})})]}),r.jsxs("div",{style:{...$.sideItem,...n==="ALL"?$.sideItemOn:{},cursor:"default",padding:"2px 6px 2px 10px"},children:[r.jsxs("button",{onClick:()=>S("ALL"),style:{display:"flex",alignItems:"center",gap:9,flex:1,border:"none",background:"none",cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:n==="ALL"?600:500,color:"var(--text-2)",padding:"7px 0"},children:[r.jsx(Cb,{size:15}),r.jsx("span",{style:$.sideLabel,children:"All Habits"}),r.jsx("span",{style:$.sideCount,children:t.length})]}),r.jsx("button",{onClick:f=>{f.stopPropagation(),b(!0)},style:$.tinyBtn,title:"Reorder habits",children:r.jsx(ye,{size:12})})]}),r.jsx("div",{style:$.sideDivider}),v.map(f=>{var gt;const Q=n===f.id,xt=((gt=Sn[f.pillar])==null?void 0:gt.dot)||"#9A968C";return r.jsxs("button",{onClick:()=>S(f.id),style:{...$.sideItem,...Q?$.sideItemOn:{}},children:[r.jsx("span",{style:{...$.sideDot,background:xt}}),r.jsx("span",{style:$.sideLabel,children:f.name}),r.jsxs("span",{style:$.sideStreak,children:[r.jsx(ho,{size:11})," ",f.streak]})]},f.id)}),d?r.jsx(Dy,{habit:x,onChange:k,onSave:rt,onCancel:()=>c(!1)}):r.jsxs("button",{onClick:()=>c(!0),style:$.sideNewBtn,children:[r.jsx(de,{size:13})," New habit"]})]}),r.jsxs("main",{style:$.main,children:[i&&r.jsxs("button",{onClick:()=>a(!0),style:$.hamburger,children:[r.jsx(Jd,{size:18}),r.jsx("span",{style:$.hamburgerLabel,children:n==="ALL"?"All Habits":U==null?void 0:U.name})]}),n==="ALL"?r.jsx(My,{habits:v,dayAction:A,logSet:O,onDelete:ht,onEdit:f=>y(f)}):r.jsx(Wy,{habit:U,dayAction:A,logSet:O,onDelete:()=>ht(U.id,U.name),onEdit:()=>y(U),setNote:(f,Q)=>G.setHabitLogNote(U.id,f,Q).then(z)}),n==="ALL"&&r.jsx(Py,{year:Ry})]}),T&&r.jsx(Ly,{habits:v,onSave:I,onClose:()=>b(!1)}),p&&r.jsx(Ay,{habit:p,onSave:async f=>{await G.updateHabit(p.id,f),y(null),z()},onClose:()=>y(null)}),m&&r.jsx(Fy,{habit:m.habit,date:m.date,initialCount:((P=m.habit.log_counts)==null?void 0:P[m.date])??0,initialNote:((F=m.habit.log_notes)==null?void 0:F[m.date])??"",onSave:(f,Q)=>Y(m.habit.id,m.date,f,Q),onClear:()=>lt(m.habit.id,m.date),onClose:()=>j(null)}),r.jsx(Mr,{toasts:R,onUndo:E,onDismiss:M})]})}function Dy({habit:t,onChange:e,onSave:n,onCancel:o}){const i=t.type!=="regular";return r.jsxs("div",{style:$.addBox,children:[r.jsx("input",{autoFocus:!0,placeholder:"Habit name",value:t.name,onChange:s=>e(l=>({...l,name:s.target.value})),onKeyDown:s=>s.key==="Enter"&&n(),style:$.sideInput}),r.jsx("select",{value:t.pillar,onChange:s=>e(l=>({...l,pillar:s.target.value})),style:$.sideInput,children:Object.keys(Sn).map(s=>r.jsx("option",{children:s},s))}),r.jsxs("select",{value:t.type,onChange:s=>e(l=>({...l,type:s.target.value})),style:$.sideInput,children:[r.jsx("option",{value:"regular",children:"Regular (yes/no)"}),r.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),r.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),i&&r.jsxs("div",{style:{display:"flex",gap:6},children:[r.jsx("input",{type:"number",min:1,placeholder:"N",value:t.target_count||"",onChange:s=>e(l=>({...l,target_count:s.target.value})),style:{...$.sideInput,width:60}}),r.jsx("select",{value:t.period,onChange:s=>e(l=>({...l,period:s.target.value})),style:$.sideInput,children:["day","week","month","year"].map(s=>r.jsx("option",{children:s},s))})]}),r.jsxs("div",{style:{display:"flex",gap:6},children:[r.jsx("button",{onClick:n,style:$.sideAddBtn,children:r.jsx(Mt,{size:13})}),r.jsx("button",{onClick:o,style:$.sideCancelBtn,children:r.jsx(Tt,{size:13})})]})]})}function Ay({habit:t,onSave:e,onClose:n}){const[o,i]=g.useState(t.name),[s,l]=g.useState(t.type||"regular"),[a,d]=g.useState(t.target_count||""),[c,p]=g.useState(t.period||"week"),[y,m]=g.useState(t.reminder_time||""),j=()=>e({name:o.trim(),type:s,target_count:s!=="regular"?Number(a):null,period:s!=="regular"?c:null,reminder_time:y||null});return r.jsx("div",{style:$.modalOverlay,onClick:n,children:r.jsxs("div",{style:$.modal,onClick:x=>x.stopPropagation(),children:[r.jsxs("div",{style:$.modalHead,children:["Edit Habit",r.jsx("button",{onClick:n,style:$.closeBtn,children:r.jsx(Tt,{size:16})})]}),r.jsx("label",{style:$.modalLabel,children:"Name"}),r.jsx("input",{value:o,onChange:x=>i(x.target.value),style:$.sideInput}),r.jsx("label",{style:$.modalLabel,children:"Type"}),r.jsxs("select",{value:s,onChange:x=>l(x.target.value),style:$.sideInput,children:[r.jsx("option",{value:"regular",children:"Regular (yes/no)"}),r.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),r.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),s!=="regular"&&r.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[r.jsx("input",{type:"number",min:1,value:a,onChange:x=>d(x.target.value),style:{...$.sideInput,width:70}}),r.jsx("select",{value:c,onChange:x=>p(x.target.value),style:$.sideInput,children:["day","week","month","year"].map(x=>r.jsx("option",{children:x},x))})]}),r.jsx("label",{style:$.modalLabel,children:"Reminder time"}),r.jsx("input",{type:"time",value:y,onChange:x=>m(x.target.value),style:$.sideInput}),r.jsx("button",{onClick:j,style:{...$.sideAddBtn,width:"100%",marginTop:10,height:36},children:"Save"})]})})}function Fy({habit:t,date:e,initialCount:n,initialNote:o,onSave:i,onClear:s,onClose:l}){const[a,d]=g.useState(n??0),[c,p]=g.useState(o??""),y=t.target_count,m=t.type==="minimum"?a>=y:a>0&&a<=y,j=t.type==="maximum"&&a>y,x=m?"#4C9A6B":j?"#C2536B":"#C2773B",k=m?"✓ Goal met":j?"Over the limit":"Not met yet";return r.jsx("div",{style:$.modalOverlay,onClick:l,children:r.jsxs("div",{style:$.modal,onClick:T=>T.stopPropagation(),children:[r.jsxs("div",{style:$.modalHead,children:[t.name,r.jsx("button",{onClick:l,style:$.closeBtn,children:r.jsx(Tt,{size:16})})]}),r.jsxs("div",{style:{fontSize:12,color:"var(--text-3)",marginBottom:2},children:[e," · ",t.type==="minimum"?`at least ${y}`:`no more than ${y}`," / ",t.period]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:20,margin:"14px 0 6px"},children:[r.jsx("button",{onClick:()=>d(T=>Math.max(0,T-1)),style:$.counterBtn,children:"−"}),r.jsx("span",{style:{fontSize:38,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:52,textAlign:"center",color:x},children:a}),r.jsx("button",{onClick:()=>d(T=>T+1),style:$.counterBtn,children:"+"})]}),r.jsx("div",{style:{textAlign:"center",fontSize:12.5,fontWeight:700,color:x,marginBottom:12},children:k}),r.jsx("textarea",{value:c,onChange:T=>p(T.target.value),placeholder:"Add a comment (optional)…",style:{...$.sideInput,minHeight:56,resize:"vertical"}}),r.jsxs("div",{style:{display:"flex",gap:8,marginTop:10},children:[r.jsxs("button",{onClick:s,style:{...$.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[r.jsx(Tt,{size:14})," Delete"]}),r.jsxs("button",{onClick:()=>i(a,c),style:{...$.sideAddBtn,flex:1,justifyContent:"center",height:38},children:[r.jsx(Mt,{size:14})," Set"]})]})]})})}function _l({pct:t,label:e,sub:n,color:o}){const s=2*Math.PI*26,l=s*(1-Math.max(0,Math.min(100,t))/100);return r.jsxs("div",{style:$.ringStat,children:[r.jsxs("div",{style:$.ringBox,children:[r.jsxs("svg",{width:"70",height:"70",viewBox:"0 0 70 70",children:[r.jsx("circle",{cx:"35",cy:"35",r:26,fill:"none",stroke:"var(--border)",strokeWidth:"7"}),r.jsx("circle",{cx:"35",cy:"35",r:26,fill:"none",stroke:o,strokeWidth:"7",strokeLinecap:"round",strokeDasharray:s,strokeDashoffset:l,transform:"rotate(-90 35 35)",style:{transition:"stroke-dashoffset 0.5s ease"}})]}),r.jsxs("div",{style:{...$.ringPct,color:o},children:[t,"%"]})]}),r.jsxs("div",{children:[r.jsx("div",{style:$.ringLabel,children:e}),r.jsx("div",{style:$.ringSub,children:n})]})]})}function My({habits:t,dayAction:e,logSet:n,onDelete:o,onEdit:i}){const[s,l]=g.useState(0),a=Ty(s),d=`${Bg(a[0])} – ${Bg(a[6])}${s===0?" · This week":""}`,c=S=>{const A=new Date(S+"T00:00:00"),w=A.getDay(),Y=new Date(A);return Y.setDate(A.getDate()+(w===0?-6:1-w)),Array.from({length:7},(lt,rt)=>{const ht=new Date(Y);return ht.setDate(Y.getDate()+rt),sl(ht)})},p=S=>S.logs||[],y=(S,A)=>S.type==="minimum"&&S.period==="week"&&A.filter(w=>n(S).has(w)).length>=(S.target_count||0),m=(S,A)=>S.type==="minimum"&&S.period==="month"&&p(S).filter(w=>w.slice(0,7)===A).length>=(S.target_count||0),j=(S,A)=>S.type==="minimum"&&S.period==="year"&&p(S).filter(w=>w.slice(0,4)===A).length>=(S.target_count||0),x=(S,A)=>{var w;if((S.type==="minimum"||S.type==="maximum")&&S.period==="day"){const Y=(w=S.log_counts)==null?void 0:w[A];return Y==null?!1:S.type==="minimum"?Y>=(S.target_count||0):Y>0&&Y<=(S.target_count||0)}return n(S).has(A)},k=(S,A)=>S.type!=="minimum"?!1:S.period==="week"?y(S,c(A)):S.period==="month"?m(S,A.slice(0,7)):S.period==="year"?j(S,A.slice(0,4)):!1,T=(S,A)=>x(S,A)||k(S,A),b=t.filter(S=>T(S,Hr)).length,u=t.length?Math.round(b/t.length*100):0,h=S=>{if(S.type==="minimum"&&S.period==="month"&&(m(S,a[0].slice(0,7))||m(S,a[6].slice(0,7)))||S.type==="minimum"&&S.period==="year"&&(j(S,a[0].slice(0,4))||j(S,a[6].slice(0,4)))||S.type==="minimum"&&S.period==="week"&&y(S,a))return 1;if((S.type==="minimum"||S.type==="maximum")&&S.period==="day")return Math.min(1,a.filter(lt=>x(S,lt)).length/7);const A=n(S),w=a.filter(lt=>A.has(lt)).length,Y=S.type==="minimum"&&S.period==="week"?S.target_count||1:S.target_per_week||7;return Y>0?Math.min(1,w/Y):0},z=t.length?Math.round(t.reduce((S,A)=>S+h(A),0)/t.length*100):0,v=new Date,I=`${v.getFullYear()}-${String(v.getMonth()+1).padStart(2,"0")}`,L=new Date(v.getFullYear(),v.getMonth()+1,0).getDate(),R=L/7,E=S=>{if(S.type==="minimum"&&S.period==="month"&&m(S,I)||S.type==="minimum"&&S.period==="year"&&j(S,I.slice(0,4)))return 1;if((S.type==="minimum"||S.type==="maximum")&&S.period==="day"){let Y=0;for(let lt=1;lt<=L;lt++)x(S,`${I}-${String(lt).padStart(2,"0")}`)&&Y++;return Math.min(1,Y/L)}const A=p(S).filter(Y=>Y.slice(0,7)===I).length;let w;return S.type==="minimum"&&S.period==="week"?w=(S.target_count||1)*R:S.type==="minimum"&&S.period==="month"?w=S.target_count||1:S.type==="minimum"&&S.period==="year"?w=(S.target_count||1)/12:w=(S.target_per_week||7)*R,w>0?Math.min(1,A/w):0},M=t.length?Math.round(t.reduce((S,A)=>S+E(A),0)/t.length*100):0;return r.jsxs("div",{children:[r.jsxs("div",{style:$.mainHead,children:[r.jsx("div",{style:$.eyebrow,children:"Weekly view"}),r.jsx("h1",{style:$.h1,children:"All Habits"})]}),r.jsxs("div",{style:$.navBar,children:[r.jsx("button",{onClick:()=>l(S=>S-1),style:$.navBtn,children:r.jsx(zn,{size:16})}),r.jsx("span",{style:$.navLabel,children:d}),r.jsx("button",{onClick:()=>l(S=>Math.min(0,S+1)),disabled:s>=0,style:{...$.navBtn,...s>=0?$.navBtnDisabled:{}},children:r.jsx(sn,{size:16})})]}),r.jsxs("div",{style:$.weekCard,children:[r.jsxs("div",{style:$.weekHeadRow,children:[r.jsx("div",{style:$.weekNameCol}),Lb.map((S,A)=>r.jsxs("div",{style:$.weekDayHead,children:[r.jsx("span",{style:$.weekDayName,children:S}),r.jsx("span",{style:{...$.weekDayNum,...a[A]===Hr?$.weekDayToday:{}},children:new Date(a[A]+"T00:00").getDate()})]},S)),r.jsx("div",{style:$.weekStreakCol,children:"Streak"})]}),t.map(S=>{var Q,xt;const A=((Q=Sn[S.pillar])==null?void 0:Q.dot)||"#9A968C",w=((xt=Sn[S.pillar])==null?void 0:xt.soft)||"rgba(0,0,0,0.05)",Y=n(S),lt=S.type==="minimum"&&["week","month","year"].includes(S.period),rt=S.target_count||0,ht=S.logs||[],U=gt=>ht.filter(H=>H.slice(0,7)===gt).length,O=gt=>ht.filter(H=>H.slice(0,4)===gt).length,q=a.filter(gt=>Y.has(gt)).length,P=gt=>lt?S.period==="week"?q>=rt:S.period==="month"?U(gt.slice(0,7))>=rt:S.period==="year"?O(gt.slice(0,4))>=rt:!1:!1,F=lt&&a.some(P),f=S.period==="week"?q:S.period==="month"?U(a[0].slice(0,7)):S.period==="year"?O(a[0].slice(0,4)):0;return r.jsxs("div",{style:$.weekRow,children:[r.jsxs("div",{style:{...$.weekNameCol,flexDirection:"column",alignItems:"flex-start",gap:2},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx("span",{style:{...$.sideDot,background:A}}),r.jsx("span",{style:$.weekHabitName,children:S.name})]}),S.type!=="regular"&&r.jsx("span",{style:$.typeBadge,children:S.type==="minimum"?`≥${S.target_count}/${S.period}`:`≤${S.target_count}/${S.period}`})]}),a.map((gt,H)=>{var _t,be;const ft=Y.has(gt),J=gt>Hr,et=(S.type==="minimum"||S.type==="maximum")&&S.period==="day",X=(_t=S.log_counts)==null?void 0:_t[gt],pt=X!=null,It=!!((be=S.log_notes)!=null&&be[gt]),W=P(gt),bt=H>0&&P(a[H-1]),Et=H<a.length-1&&P(a[H+1]),Dt=ft||W;return r.jsxs("div",{style:{...$.weekCell,position:"relative"},children:[W&&r.jsx("span",{style:{...$.chainLine,background:A,left:bt?0:"50%",right:Et?0:"50%"}}),r.jsx("button",{disabled:J,onClick:()=>e(S,gt),style:{...$.tick,position:"relative",zIndex:1,...Dt?{background:A,borderColor:A,color:"#fff"}:{},...et&&pt&&!ft?{borderColor:A,color:A}:{},...J&&!Dt?$.tickFuture:{}},children:et?pt?r.jsx("span",{style:{fontSize:12,fontWeight:700},children:X}):null:ft&&r.jsx(Mt,{size:14,color:"#fff",strokeWidth:3})}),It&&r.jsx("span",{style:$.cellNoteBubble})]},gt)}),r.jsx("div",{style:$.weekStreakCol,children:F?r.jsxs("span",{style:{...$.streakPill,background:w,color:A},children:[r.jsx(Ya,{size:12})," ",f,"/",rt]}):r.jsxs("span",{style:{...$.streakPill,background:w,color:A},children:[r.jsx(ho,{size:12})," ",S.streak]})})]},S.id)}),t.length===0&&r.jsx("div",{style:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},children:"No habits yet — add one from the sidebar."})]}),t.length>0&&r.jsxs("div",{style:{...$.progressCard,marginTop:18,marginBottom:0},children:[r.jsx(_l,{pct:u,label:"Today",sub:`${b}/${t.length} done`,color:"#4C9A6B"}),r.jsx("div",{style:$.progressDivider}),r.jsx(_l,{pct:z,label:"This week",sub:"of weekly targets",color:"#3A7CA5"}),r.jsx("div",{style:$.progressDivider}),r.jsx(_l,{pct:M,label:"This month",sub:"of monthly targets",color:"#8268B0"})]})]})}function Wy({habit:t,dayAction:e,logSet:n,onDelete:o,onEdit:i,setNote:s}){var P,F;const[l,a]=g.useState(null),[d,c]=g.useState(""),[p,y]=g.useState(null),[m,j]=g.useState(0),x=g.useRef(null);if(!t)return null;const k=((P=Sn[t.pillar])==null?void 0:P.dot)||"#9A968C",T=((F=Sn[t.pillar])==null?void 0:F.soft)||"rgba(0,0,0,0.05)",b=n(t),{dates:u,startOffset:h,label:z,year:v}=Ey(m),I=u.filter(f=>f<=Hr&&b.has(f)).length,L=u.filter(f=>f<=Hr).length,R=L>0?Math.round(I/L*100):0,E=t.type==="minimum"&&(t.period==="month"||t.period==="year"),M=t.period==="year"?(t.logs||[]).filter(f=>f.startsWith(`${v}-`)).length:u.filter(f=>b.has(f)).length,S=E&&M>=(t.target_count||0),A=t.type==="minimum"&&t.period==="week",w=t.target_count||0,Y=f=>{const Q=new Date(f+"T00:00"),xt=Q.getDay(),gt=new Date(Q);gt.setDate(Q.getDate()+(xt===0?-6:1-xt));let H=0;for(let ft=0;ft<7;ft++){const J=new Date(gt);J.setDate(gt.getDate()+ft),b.has(sl(J))&&H++}return H},lt=f=>E?S:A?Y(f)>=w:!1,rt=A?Y(Hr):0,ht=A&&rt>=w,U=f=>{x.current=setTimeout(()=>a(f),500)},O=()=>clearTimeout(x.current),q=f=>{var Q;y(f),c(((Q=t.log_notes)==null?void 0:Q[f])||""),a(null)};return r.jsxs("div",{children:[r.jsxs("div",{style:$.mainHead,children:[r.jsxs("div",{children:[r.jsxs("div",{style:$.eyebrow,children:[r.jsx("span",{style:{...$.sideDot,background:k,marginRight:6}}),t.pillar," · Monthly view"]}),r.jsx("h1",{style:$.h1,children:t.name})]}),r.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[r.jsxs("button",{onClick:i,style:$.actionBtn,children:[r.jsx(ye,{size:14})," Edit"]}),r.jsxs("button",{onClick:o,style:{...$.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[r.jsx(Tt,{size:14})," Delete"]}),t.reminder_time&&r.jsxs("button",{style:$.actionBtn,children:[r.jsx(kb,{size:14})," ",t.reminder_time]})]})]}),r.jsxs("div",{style:$.statStrip,children:[r.jsx(Mn,{label:"Current streak",value:`${t.streak} days`,c:k,soft:T,flame:!0}),r.jsx(Mn,{label:"Best streak",value:`${t.max_streak??t.streak} days`,c:k,soft:T,flame:!0}),r.jsx(Mn,{label:"Done this month",value:`${I}/${L}`,c:k,soft:T}),r.jsx(Mn,{label:"Completion",value:`${R}%`,c:k,soft:T}),t.type==="regular"?r.jsx(Mn,{label:"Weekly target",value:`${t.target_per_week}×`,c:k,soft:T}):r.jsx(Mn,{label:t.type==="minimum"?"Min target":"Max allowed",value:`${t.target_count}/${t.period}`,c:k,soft:T})]}),r.jsxs("div",{style:$.navBar,children:[r.jsx("button",{onClick:()=>j(f=>f-1),style:$.navBtn,children:r.jsx(zn,{size:16})}),r.jsxs("span",{style:$.navLabel,children:[z,m===0?" · This month":""]}),r.jsx("button",{onClick:()=>j(f=>Math.min(0,f+1)),disabled:m>=0,style:{...$.navBtn,...m>=0?$.navBtnDisabled:{}},children:r.jsx(sn,{size:16})})]}),E&&r.jsxs("div",{style:{...$.chainBanner,background:S?T:"var(--bg)",color:S?k:"var(--text-3)"},children:[r.jsx(Ya,{size:15}),S?`${t.period==="year"?"Yearly":"Monthly"} chain complete — ${M}/${t.target_count} connected`:`${M}/${t.target_count} this ${t.period} · ${(t.target_count||0)-M} more to connect the chain`]}),A&&m===0&&r.jsxs("div",{style:{...$.chainBanner,background:ht?T:"var(--bg)",color:ht?k:"var(--text-3)"},children:[r.jsx(Ya,{size:15}),ht?`This week's chain complete — ${rt}/${w} connected`:`${rt}/${w} this week · ${Math.max(0,w-rt)} more to connect the chain`]}),r.jsxs("div",{style:$.monthCard,children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[r.jsx("div",{style:$.monthTitle,children:z}),r.jsx("span",{style:{fontSize:11,color:"var(--text-3)"},children:"Long-press a day for options"})]}),r.jsx("div",{style:$.monthDow,children:Lb.map(f=>r.jsx("div",{style:$.monthDowCell,children:f},f))}),r.jsxs("div",{style:$.monthGrid,children:[Array.from({length:h}).map((f,Q)=>r.jsx("div",{},`pad${Q}`)),u.map((f,Q)=>{var Et,Dt;const xt=Q+1,gt=b.has(f),H=f>Hr,ft=f===Hr,J=!!((Et=t.log_notes)!=null&&Et[f]),et=(t.type==="minimum"||t.type==="maximum")&&t.period==="day",X=(Dt=t.log_counts)==null?void 0:Dt[f],pt=X!=null,It=lt(f),W=It&&!gt,bt=(h+Q)%7;return r.jsxs("div",{style:{position:"relative"},children:[It&&r.jsx("span",{style:{...$.chainLine,background:k,...bt===0?{left:"50%"}:{left:-6},...bt===6?{right:"50%"}:{right:-6}}}),r.jsx("button",{disabled:H,onClick:()=>e(t,f),onMouseDown:()=>!et&&U(f),onMouseUp:O,onTouchStart:()=>!et&&U(f),onTouchEnd:O,style:{...$.monthDay,position:"relative",zIndex:1,...gt?{background:k,borderColor:k,color:"#fff"}:{},...W?{background:T,borderColor:k,color:k}:{},...et&&pt&&!gt?{borderColor:k,color:k}:{},...H&&!gt?$.monthDayFuture:{},...ft&&!gt?{borderColor:k,borderWidth:2}:{},width:"100%"},children:xt}),et&&pt&&r.jsx("span",{style:{...$.countBadge,background:gt?"#4C9A6B":k},children:X}),J&&r.jsx("span",{style:$.noteIndicator}),l===f&&r.jsx(_y,{onEdit:i,onDelete:o,onAddNote:()=>q(f),onRemind:i,onClose:()=>a(null)})]},f)})]})]}),p&&r.jsxs("div",{style:$.noteBox,children:[r.jsxs("div",{style:{fontWeight:600,fontSize:13,marginBottom:6},children:["Note for ",p]}),r.jsx("textarea",{value:d,onChange:f=>c(f.target.value),placeholder:"Add a note for this day…",style:{...$.sideInput,minHeight:60,resize:"vertical"}}),r.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[r.jsxs("button",{onClick:()=>{s(p,d),y(null)},style:$.sideAddBtn,children:[r.jsx(Mt,{size:13})," Save"]}),r.jsx("button",{onClick:()=>y(null),style:$.sideCancelBtn,children:r.jsx(Tt,{size:13})})]})]})]})}function _y({onEdit:t,onDelete:e,onAddNote:n,onRemind:o,onClose:i}){return r.jsxs("div",{style:$.longPressMenu,children:[r.jsxs("button",{style:$.menuItem,onClick:()=>{t(),i()},children:[r.jsx(ye,{size:13})," Edit"]}),r.jsxs("button",{style:$.menuItem,onClick:()=>{n(),i()},children:[r.jsx(qd,{size:13})," Add note"]}),r.jsxs("button",{style:$.menuItem,onClick:()=>{o(),i()},children:[r.jsx(kb,{size:13})," Remind"]}),r.jsxs("button",{style:{...$.menuItem,color:"#C2536B"},onClick:()=>{e(),i()},children:[r.jsx(Tt,{size:13})," Delete"]})]})}function Ly({habits:t,onSave:e,onClose:n}){const[o,i]=g.useState([...t]),s=(l,a)=>{const d=[...o],c=l+a;c<0||c>=d.length||([d[l],d[c]]=[d[c],d[l]],i(d))};return r.jsx("div",{style:$.modalOverlay,onClick:n,children:r.jsxs("div",{style:{...$.modal,maxHeight:"80vh",overflowY:"auto"},onClick:l=>l.stopPropagation(),children:[r.jsxs("div",{style:$.modalHead,children:["Reorder Habits",r.jsx("button",{onClick:n,style:$.closeBtn,children:r.jsx(Tt,{size:16})})]}),r.jsx("p",{style:{fontSize:12,color:"var(--text-3)",margin:"0 0 10px"},children:"Use arrows to set the display order."}),r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:o.map((l,a)=>{var c;const d=((c=Sn[l.pillar])==null?void 0:c.dot)||"#9A968C";return r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"9px 10px",background:"var(--bg)",borderRadius:9,border:"1px solid var(--border)"},children:[r.jsx("span",{style:{...$.sideDot,background:d}}),r.jsx("span",{style:{flex:1,fontSize:13,fontWeight:500},children:l.name}),r.jsx("button",{onClick:()=>s(a,-1),disabled:a===0,style:{...$.navBtn,width:28,height:28,opacity:a===0?.3:1,fontSize:14},children:"↑"}),r.jsx("button",{onClick:()=>s(a,1),disabled:a===o.length-1,style:{...$.navBtn,width:28,height:28,opacity:a===o.length-1?.3:1,fontSize:14},children:"↓"})]},l.id)})}),r.jsxs("button",{onClick:()=>e(o.map(l=>l.id)),style:{...$.sideAddBtn,width:"100%",marginTop:14,height:38,justifyContent:"center"},children:[r.jsx(Mt,{size:14})," Save Order"]})]})})}function Py({year:t}){const[e,n]=g.useState([]);if(g.useEffect(()=>{G.getHabitsYearly(t).then(n).catch(console.error)},[t]),!e.length)return null;const o=Array.from({length:12},(s,l)=>{const a=e.reduce((c,p)=>{var y;return c+(((y=p.monthly[l+1])==null?void 0:y.done)||0)},0),d=e.reduce((c,p)=>{var y;return c+Math.floor((((y=p.monthly[l+1])==null?void 0:y.days)||30)/7*7)},0);return d>0?Math.round(a/d*100):0}),i=Math.max(...o,1);return r.jsxs("div",{style:{...$.monthCard,marginTop:18},children:[r.jsxs("div",{style:$.monthTitle,children:[t," Completion"]}),r.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:6,height:80,marginTop:12},children:o.map((s,l)=>r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[r.jsx("div",{style:{width:"100%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",height:`${s/i*60}px`,minHeight:2,opacity:s>0?1:.15},title:`${s}%`}),r.jsx("span",{style:{fontSize:9,color:"var(--text-3)",fontWeight:600},children:Iy[l]})]},l))})]})}function Mn({label:t,value:e,c:n,soft:o,flame:i}){return r.jsxs("div",{style:{...$.stat,background:o},children:[r.jsx("div",{style:$.statLabel,children:t}),r.jsxs("div",{style:{...$.statValue,color:n},children:[i&&r.jsx(ho,{size:15})," ",e]})]})}const $={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:230,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",padding:"20px 12px",display:"flex",flexDirection:"column",gap:3,overflowY:"auto"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.18)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)",boxShadow:"none"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.38)",zIndex:20},sideTop:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 4px"},closeBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",marginBottom:8},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700,padding:"0 6px 14px"},sideItem:{display:"flex",alignItems:"center",gap:9,width:"100%",border:"none",background:"none",padding:"9px 10px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:500,color:"var(--text-2)",textAlign:"left"},sideItemOn:{background:"var(--hover)",fontWeight:600},sideLabel:{flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},sideCount:{fontSize:11,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:10,padding:"1px 7px"},sideStreak:{display:"flex",alignItems:"center",gap:3,fontSize:11,fontWeight:600,color:"#C2773B"},sideDot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},sideDivider:{height:1,background:"var(--border)",margin:"8px 6px"},addBox:{padding:"10px 6px",display:"flex",flexDirection:"column",gap:6},sideInput:{border:"1px solid var(--border)",borderRadius:7,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},sideAddBtn:{border:"none",background:"#4C9A6B",color:"#fff",height:30,padding:"0 12px",borderRadius:7,cursor:"pointer",display:"flex",alignItems:"center",gap:5,fontSize:13,fontFamily:"inherit"},sideCancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:30,height:30,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},sideNewBtn:{display:"flex",alignItems:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",borderRadius:8,padding:"8px 10px",fontSize:12.5,color:"var(--text-3)",fontWeight:600,cursor:"pointer",fontFamily:"inherit",marginTop:6,justifyContent:"center"},main:{flex:1,padding:"26px",overflowX:"hidden",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:200},mainHead:{marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:5,display:"flex",alignItems:"center"},h1:{fontSize:27,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},actionBtn:{display:"flex",alignItems:"center",gap:5,fontSize:12,fontWeight:500,color:"var(--text-2)",border:"1px solid var(--border)",background:"var(--surface)",padding:"5px 10px",borderRadius:7,cursor:"pointer",fontFamily:"inherit"},progressCard:{background:"var(--surface)",borderRadius:12,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14,display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"},progressDivider:{width:1,alignSelf:"stretch",background:"var(--border)",minHeight:48},ringStat:{display:"flex",alignItems:"center",gap:12,flex:"1 1 160px"},ringBox:{position:"relative",width:70,height:70,display:"grid",placeItems:"center",flexShrink:0},ringPct:{position:"absolute",inset:0,display:"grid",placeItems:"center",fontSize:16,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},ringLabel:{fontSize:14,fontWeight:700,color:"var(--text)"},ringSub:{fontSize:11.5,color:"var(--text-3)",fontWeight:500,marginTop:2},weekCard:{background:"var(--surface)",borderRadius:12,padding:"8px 14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"auto"},weekHeadRow:{display:"flex",alignItems:"flex-end",padding:"10px 0",borderBottom:"1px solid var(--border)",minWidth:480},weekNameCol:{width:160,flexShrink:0,display:"flex",alignItems:"center",gap:8},weekDayHead:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:2},weekDayName:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekDayNum:{fontSize:12,fontWeight:600,color:"var(--text-2)",width:22,height:22,display:"grid",placeItems:"center",borderRadius:"50%"},weekDayToday:{background:"var(--accent-strong)",color:"#fff"},weekStreakCol:{width:64,flexShrink:0,textAlign:"center",fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekRow:{display:"flex",alignItems:"center",padding:"9px 0",borderBottom:"1px solid #F4F2EC",minWidth:480},weekHabitName:{fontSize:13,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},weekCell:{flex:1,display:"grid",placeItems:"center"},typeBadge:{fontSize:10,color:"var(--text-3)",background:"var(--hover)",padding:"1px 6px",borderRadius:8,fontWeight:600},tick:{width:26,height:26,borderRadius:7,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",padding:0},tickFuture:{opacity:.4,cursor:"not-allowed",borderStyle:"dashed"},streakPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:12,fontWeight:700,padding:"3px 9px",borderRadius:12},tinyBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:"2px 3px",display:"grid",placeItems:"center",borderRadius:4},statStrip:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(120px,1fr))",gap:10,marginBottom:18},stat:{borderRadius:10,padding:"13px 14px"},statLabel:{fontSize:11,fontWeight:600,color:"var(--text-2)",marginBottom:5},statValue:{fontSize:19,fontWeight:700,display:"flex",alignItems:"center",gap:5,fontFamily:"'Fraunces',Georgia,serif"},monthCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},monthTitle:{fontSize:14,fontWeight:700,marginBottom:12,fontFamily:"'Fraunces',Georgia,serif"},monthDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6,marginBottom:8},monthDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},monthGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6},monthDay:{aspectRatio:"1",border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",display:"grid",placeItems:"center"},monthDayFuture:{opacity:.4,cursor:"not-allowed",background:"var(--surface-2)"},noteIndicator:{position:"absolute",top:3,right:3,width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},cellNoteBubble:{position:"absolute",top:2,right:"calc(50% - 16px)",width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},countBadge:{position:"absolute",bottom:2,right:2,minWidth:13,height:13,padding:"0 2px",borderRadius:7,color:"#fff",fontSize:9,fontWeight:700,display:"grid",placeItems:"center",lineHeight:1},counterBtn:{width:44,height:44,borderRadius:"50%",border:"1.5px solid var(--border)",background:"var(--surface)",color:"var(--text)",fontSize:24,fontWeight:700,cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit",lineHeight:1},chainLine:{position:"absolute",top:"calc(50% - 3px)",left:0,right:0,height:6,zIndex:0,opacity:.9},chainBanner:{display:"flex",alignItems:"center",gap:8,borderRadius:10,padding:"10px 14px",marginBottom:14,fontSize:12.5,fontWeight:700,fontFamily:"'Inter',system-ui,sans-serif"},navBar:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:16},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},navLabel:{fontSize:13,fontWeight:700,color:"var(--text)",minWidth:180,textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},noteBox:{background:"var(--surface)",borderRadius:10,padding:14,marginTop:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},longPressMenu:{position:"absolute",top:"100%",left:0,zIndex:50,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 4px 16px rgba(0,0,0,0.12)",padding:"4px 0",minWidth:140},menuItem:{display:"flex",alignItems:"center",gap:8,width:"100%",border:"none",background:"none",padding:"8px 14px",fontSize:13,color:"var(--text)",cursor:"pointer",fontFamily:"inherit",textAlign:"left"},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",zIndex:100,display:"grid",placeItems:"center"},modal:{background:"var(--surface)",borderRadius:14,padding:24,width:320,maxWidth:"90vw",display:"flex",flexDirection:"column",gap:8},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",fontWeight:700,fontSize:16,fontFamily:"'Fraunces',Georgia,serif",marginBottom:6},modalLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.08em",marginTop:4}},Ka=[{id:1,label:"Rough",emoji:"😣",color:"#C2536B"},{id:2,label:"Low",emoji:"🙁",color:"#C2773B"},{id:3,label:"Okay",emoji:"😐",color:"#C9A227"},{id:4,label:"Good",emoji:"🙂",color:"#4C9A6B"},{id:5,label:"Great",emoji:"😄",color:"#3A7CA5"}],$y=t=>Ka.find(e=>e.id===t),Ll=[{id:"wins",label:"Wins",hint:"What went well today?",icon:Dr,color:"#C9A227"},{id:"grateful",label:"Grateful for",hint:"1–3 things",icon:Oh,color:"#C2536B"},{id:"mattered",label:"What mattered",hint:"The point of today",icon:Zd,color:"#3A7CA5"},{id:"letgo",label:"Letting go of",hint:"Offload what's draining",icon:gy,color:"#8268B0"},{id:"tomorrow",label:"Tomorrow's one thing",hint:"A single priority",icon:iy,color:"#4C9A6B"}],Pb=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,Ny=()=>Pb(new Date),Pl=t=>new Date(t+"T00:00:00").toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long",year:"numeric"});function Oy(){const t=Ny(),[e,n]=[new Date().getFullYear(),new Date().getMonth()+1],[o,i]=g.useState(null),s=o||t,l=s===t,[a,d]=g.useState(null),[c,p]=g.useState({}),[y,m]=g.useState(Object.fromEntries(Ll.map(E=>[E.id,""]))),j=g.useCallback(async E=>{const M=await G.getJournalEntry(E);d(M)},[]);g.useCallback(async()=>{const E=await G.getJournalHistory(e,n);p(E)},[e,n]);const x=g.useCallback(async()=>{const[E,M]=await Promise.all([G.getJournalEntry(s),G.getJournalHistory(e,n)]);d(E),p(M)},[s,e,n]);g.useEffect(()=>{x()},[x]);const k=async E=>{l&&(await G.updateJournalMood(s,E),x())},T=async E=>{if(!l)return;const M=y[E].trim();M&&(await G.addJournalBullet(s,E,M),m(S=>({...S,[E]:""})),j(s))},b=async E=>{await G.deleteJournalBullet(E),j(s)},u=E=>{i(E===t?null:E),m(Object.fromEntries(Ll.map(M=>[M.id,""])))};if(!a)return r.jsx("div",{style:{padding:28,color:"var(--text-3)"},children:"Loading…"});const h=a.mood!==null,z=(()=>{let E=0;const M=new Date(t);if(c[t]||l&&h)E=1,M.setDate(M.getDate()-1);else return 0;for(;;){const A=Pb(M);if(c[A])E++,M.setDate(M.getDate()-1);else break}return E})(),v=Object.values(a.bullets||{}).reduce((E,M)=>E+M.length,0),I=new Date(e,n,0).getDate(),L=new Date(e,n-1,1).getDay(),R=L===0?6:L-1;return r.jsxs("div",{style:Bt.page,children:[r.jsxs("div",{style:Bt.head,children:[r.jsxs("div",{children:[r.jsx("div",{style:Bt.eyebrow,children:"Anvil · Journal"}),!l&&r.jsxs("button",{style:Bt.backBtn,onClick:()=>i(null),children:[r.jsx(zn,{size:14})," Back to Today"]}),r.jsx("h1",{style:Bt.h1,children:l?"Today":Pl(s)}),l&&r.jsx("div",{style:Bt.date,children:Pl(t)})]}),r.jsxs("div",{style:Bt.streakBox,children:[r.jsx(ho,{size:16,color:"#C2773B"}),r.jsx("span",{style:Bt.streakNum,children:z}),r.jsx("span",{style:Bt.streakLabel,children:"day streak"})]})]}),r.jsxs("div",{style:Bt.card,children:[r.jsxs("div",{style:Bt.cardTitle,children:["How ",l?"are":"were"," you?"]}),r.jsx("div",{style:Bt.moodRow,children:Ka.map(E=>{const M=a.mood===E.id;return r.jsxs("button",{onClick:()=>k(E.id),disabled:!l,style:{...Bt.moodBtn,cursor:l?"pointer":"default",...M?{background:E.color,borderColor:E.color,transform:"translateY(-2px)"}:{},...!l&&!M?{opacity:.55}:{}},children:[r.jsx("span",{style:Bt.moodEmoji,children:E.emoji}),r.jsx("span",{style:{...Bt.moodLabel,color:M?"#fff":"#6B675E"},children:E.label})]},E.id)})})]}),Ll.map(E=>{var A;const M=E.icon,S=((A=a.bullets)==null?void 0:A[E.id])||[];return r.jsxs("div",{style:Bt.card,children:[r.jsxs("div",{style:Bt.sectionHead,children:[r.jsx("span",{style:{...Bt.sectionIcon,background:`${E.color}1A`,color:E.color},children:r.jsx(M,{size:15})}),r.jsxs("div",{children:[r.jsx("div",{style:Bt.cardTitle,children:E.label}),r.jsx("div",{style:Bt.sectionHint,children:E.hint})]})]}),r.jsxs("ul",{style:Bt.bulletList,children:[S.map(w=>r.jsxs("li",{style:Bt.bullet,children:[r.jsx("span",{style:{...Bt.bulletDot,background:E.color}}),r.jsx("span",{style:Bt.bulletText,children:w.text}),l&&r.jsx("button",{onClick:()=>b(w.id),style:Bt.bulletDel,children:r.jsx(Tt,{size:13})})]},w.id)),!l&&S.length===0&&r.jsx("li",{style:Bt.sectionHint,children:"Nothing written."})]}),l&&r.jsxs("div",{style:Bt.addRow,children:[r.jsx("input",{placeholder:"Add a point…",value:y[E.id],onChange:w=>m(Y=>({...Y,[E.id]:w.target.value})),onKeyDown:w=>w.key==="Enter"&&T(E.id),style:Bt.input}),r.jsx("button",{onClick:()=>T(E.id),style:{...Bt.addBtn,background:E.color},children:r.jsx(de,{size:16})})]})]},E.id)}),r.jsxs("div",{style:Bt.card,children:[r.jsxs("div",{style:Bt.cardTitle,children:[new Date(e,n-1).toLocaleDateString("en-US",{month:"long",year:"numeric"})," · Mood history",r.jsx("span",{style:{fontSize:11,color:"var(--text-3)",fontWeight:400,marginLeft:8},children:"tap a day to view"})]}),r.jsx("div",{style:Bt.calDow,children:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(E=>r.jsx("div",{style:Bt.calDowCell,children:E},E))}),r.jsxs("div",{style:Bt.calGrid,children:[Array.from({length:R}).map((E,M)=>r.jsx("div",{},`p${M}`)),Array.from({length:I},(E,M)=>M+1).map(E=>{const M=`${e}-${String(n).padStart(2,"0")}-${String(E).padStart(2,"0")}`,S=M===t&&a.mood?a.mood:c[M],A=S?$y(S):null,w=M>t,Y=M===s;return r.jsx("button",{onClick:()=>!w&&u(M),disabled:w,style:{...Bt.calDay,background:A?A.color:w?"var(--surface-2)":"var(--surface)",borderColor:Y?"var(--accent-strong)":"var(--border)",borderWidth:Y?2:1,color:A?"#fff":"var(--text-3)",opacity:w?.5:1,cursor:w?"not-allowed":"pointer",outline:Y?"2px solid var(--accent-strong)":"none",outlineOffset:1},title:A?A.label:M,children:A?A.emoji:E},E)})]}),r.jsx("div",{style:Bt.legend,children:Ka.map(E=>r.jsxs("span",{style:Bt.legendItem,children:[r.jsx("span",{style:{...Bt.legendDot,background:E.color}})," ",E.label]},E.id))})]}),r.jsx("div",{style:Bt.footer,children:l?h?`Mood set · ${v} point${v===1?"":"s"} written today`:"Tap a mood to log today and keep your streak":`Viewing ${Pl(s)} · past entries are read-only`})]})}const Bt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:22},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},backBtn:{display:"inline-flex",alignItems:"center",gap:4,border:"none",background:"none",color:"#3A7CA5",fontSize:12.5,fontWeight:600,cursor:"pointer",padding:"0 0 6px",fontFamily:"inherit"},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},date:{fontSize:13,color:"var(--text-3)",marginTop:4},streakBox:{display:"flex",alignItems:"center",gap:6,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"8px 14px"},streakNum:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"#C2773B"},streakLabel:{fontSize:11,color:"var(--text-3)",fontWeight:500},card:{background:"var(--surface)",borderRadius:12,padding:"18px 20px",marginBottom:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},cardTitle:{fontSize:14,fontWeight:700,marginBottom:12,color:"var(--text)"},moodRow:{display:"flex",gap:8,flexWrap:"wrap"},moodBtn:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,border:"2px solid var(--border)",background:"var(--surface)",borderRadius:10,padding:"10px 12px",cursor:"pointer",flex:"1 1 60px",transition:"transform 0.1s"},moodEmoji:{fontSize:22},moodLabel:{fontSize:11,fontWeight:600},sectionHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:10},sectionIcon:{width:32,height:32,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},sectionHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},bulletList:{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6,marginBottom:10},bullet:{display:"flex",alignItems:"center",gap:8,fontSize:13.5,lineHeight:1.4},bulletDot:{width:6,height:6,borderRadius:"50%",flexShrink:0},bulletText:{flex:1},bulletDel:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},addRow:{display:"flex",gap:8},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 12px",fontSize:13.5,fontFamily:"inherit",outline:"none"},addBtn:{width:36,height:36,border:"none",borderRadius:8,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:12},calDay:{aspectRatio:"1",border:"1px solid var(--border)",borderRadius:7,fontSize:13,display:"grid",placeItems:"center",fontWeight:500,fontFamily:"inherit"},legend:{display:"flex",gap:10,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)"},legendDot:{width:8,height:8,borderRadius:"50%",display:"inline-block"},footer:{fontSize:12.5,color:"var(--text-3)",textAlign:"center",marginTop:8,fontStyle:"italic"}};function Hy(t=760){const[e,n]=g.useState(()=>window.innerWidth<t);return g.useEffect(()=>{const o=()=>n(window.innerWidth<t);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[t]),e}const or=[{id:"D",label:"Data",color:"#3A7CA5",soft:"rgba(58,124,165,0.10)",prompt:"What did you read/watch? Log the raw source and a quick note.",hint:"e.g. 'Atomic Habits ch.1 — habits are systems not goals'"},{id:"I",label:"Information",color:"#8268B0",soft:"rgba(130,104,176,0.10)",prompt:"What did you actually understand from it? In your own words.",hint:"e.g. 'Small 1% improvements compound into massive change over time'"},{id:"K",label:"Knowledge",color:"#C9A227",soft:"rgba(201,162,39,0.10)",prompt:"How will this specifically improve your life? Connect it to your goals.",hint:"e.g. 'I will improve my morning workout habit by 1% each week'"},{id:"W",label:"Wisdom",color:"#4C9A6B",soft:"rgba(76,154,107,0.10)",prompt:"How have you implemented it? What changed?",hint:"e.g. 'I've not missed a workout in 3 weeks using the 1% rule'"}],Dg=t=>or.findIndex(e=>e.id===t),Xa=[{id:"book",label:"Book",icon:Xd},{id:"video",label:"Video",icon:uy},{id:"article",label:"Article",icon:qd}],Ag=t=>Xa.find(e=>e.id===t)||Xa[0],$l={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"};function Gy(){var It;const[t,e]=g.useState([]),[n,o]=g.useState(null),[i,s]=g.useState("ALL"),[l,a]=g.useState(!1),[d,c]=g.useState(null),[p,y]=g.useState({title:"",type:"book",pillar:"Academic",note:""}),[m,j]=g.useState({}),[x,k]=g.useState(null),[T,b]=g.useState(null),[u,h]=g.useState({}),[z,v]=g.useState({}),[I,L]=g.useState(null),R=Hy(),E=g.useCallback(async()=>{try{const W=await G.getSkills();e(W);const bt={};W.forEach(Et=>{bt[Et.id]=Object.fromEntries(or.map(Dt=>[Dt.id,""]))}),j(Et=>{const Dt={...bt};return W.forEach(_t=>{Et[_t.id]&&(Dt[_t.id]={...bt[_t.id],...Et[_t.id]})}),Dt})}catch(W){console.error(W)}},[]);g.useEffect(()=>{E()},[E]);const M=t.find(W=>W.id===n),S=M?Dg(M.stage):-1,A=async(W,bt)=>{var Dt;const Et=(((Dt=m[W])==null?void 0:Dt[bt])??"").trim();Et&&(await G.addSkillNote(W,bt,Et),j(_t=>({..._t,[W]:{..._t[W],[bt]:""}})),E())},w=async W=>{await G.deleteSkillNote(W),E()},Y=W=>(W==null?void 0:W.source_type)==="book"?"Chapter":"Learning",lt=()=>`g${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,rt=async W=>{const bt=[...W.data_groups||[]];bt.push({id:lt(),label:`${Y(W)} ${bt.length+1}`}),await G.setSkillGroups(W.id,bt),v(Et=>({...Et,[bt[bt.length-1].id]:!0})),E()},ht=async(W,bt,Et)=>{const Dt=(W.data_groups||[]).map(_t=>_t.id===bt?{..._t,label:Et}:_t);await G.setSkillGroups(W.id,Dt),E()},U=async(W,bt)=>{const Et=(W.data_groups||[]).filter(Dt=>Dt.id!==bt);await G.setSkillGroups(W.id,Et),E()},O=async(W,bt)=>{const Et=(u[bt]??"").trim();Et&&(await G.addSkillNote(W.id,"D",Et,bt),h(Dt=>({...Dt,[bt]:""})),E())},q=async()=>{!M||!(T!=null&&T.trim())||(await G.updateSkill(M.id,{title:T.trim()}),b(null),E())},P=async()=>{!x||!x.text.trim()||(await G.updateSkillNote(x.id,x.text.trim()),k(null),E())},F=async W=>{await G.toggleSkillNote(W),E()},f=async(W,bt)=>{t.find(Dt=>Dt.id===W)&&(bt==="W"&&c(W),await G.completeSkillStage(W,bt),E())},Q=async()=>{if(!p.title.trim())return;const W=await G.createSkill({pillar:p.pillar,title:p.title.trim(),source_type:p.type,note_d:p.note.trim()});a(!1),y({title:"",type:"book",pillar:"Academic",note:""}),o(W.id),E()},{deleteItem:xt,toasts:gt,handleUndo:H,handleDismiss:ft}=Fr(G.deleteSkill,G.restoreSkill,E),J=(W,bt="Skill")=>{n===W&&o(null),xt(W,bt)},et=i==="ALL"?t:t.filter(W=>W.stage===i),X=t.filter(W=>W.stage==="W").length,pt=!!M;return r.jsxs("div",{style:Z.page,children:[d&&r.jsx("div",{style:Z.celebOverlay,children:r.jsxs("div",{style:Z.celebBox,children:[r.jsx("div",{style:Z.celebEmoji,children:"🏆"}),r.jsx("div",{style:Z.celebTitle,children:"Wisdom unlocked!"}),r.jsx("div",{style:Z.celebSub,children:"You've implemented this knowledge — that's rare and real."}),r.jsx("button",{onClick:()=>c(null),style:Z.celebBtn,children:"Continue"})]})}),r.jsxs("div",{style:Z.head,children:[r.jsxs("div",{children:[r.jsx("div",{style:Z.eyebrow,children:"Anvil · Skills"}),r.jsx("h1",{style:Z.h1,children:"DIKW Skills"}),r.jsx("div",{style:Z.subhead,children:"Data → Information → Knowledge → Wisdom"})]}),r.jsxs("div",{style:Z.headRight,children:[r.jsxs("div",{style:Z.wisdomBadge,children:[r.jsx(Dr,{size:14,color:"#C9A227"})," ",X," Wisdom",X!==1?"s":""]}),r.jsxs("button",{onClick:()=>{a(!0),o(null)},style:Z.addSkillBtn,children:[r.jsx(de,{size:15})," Add skill"]})]})]}),r.jsx("div",{style:Z.filterBar,children:["ALL",...or.map(W=>W.id)].map(W=>{const bt=or.find(Dt=>Dt.id===W),Et=i===W;return r.jsx("button",{onClick:()=>s(W),style:{...Z.filterBtn,...Et?{background:bt?bt.color:"var(--accent-strong)",color:"#fff",borderColor:"transparent"}:{}},children:bt?`${W} · ${bt.label}`:"All"},W)})}),r.jsxs("div",{style:{...Z.layout,gridTemplateColumns:!R&&pt?"minmax(0,1fr) minmax(0,1fr)":"1fr"},children:[(!R||!M)&&r.jsxs("div",{style:{...Z.cardList,gridTemplateColumns:R||pt?"1fr":"repeat(3, minmax(0, 1fr))"},children:[l&&r.jsxs("div",{style:{...Z.skillCard,border:"2px dashed #3A7CA5",gridColumn:"1 / -1"},children:[r.jsx("div",{style:Z.cardTitle,children:"New skill"}),r.jsx("input",{placeholder:"Title (book / video / article name)",value:p.title,onChange:W=>y(bt=>({...bt,title:W.target.value})),onKeyDown:W=>W.key==="Enter"&&Q(),style:Z.input,autoFocus:!0}),r.jsxs("div",{style:Z.addRow,children:[r.jsx("select",{value:p.type,onChange:W=>y(bt=>({...bt,type:W.target.value})),style:Z.select,children:Xa.map(W=>r.jsx("option",{value:W.id,children:W.label},W.id))}),r.jsx("select",{value:p.pillar,onChange:W=>y(bt=>({...bt,pillar:W.target.value})),style:Z.select,children:Object.keys($l).map(W=>r.jsx("option",{children:W},W))})]}),r.jsxs("div",{style:Z.addRow,children:[r.jsxs("button",{onClick:Q,style:Z.saveBtn,children:[r.jsx(Mt,{size:14})," Save"]}),r.jsxs("button",{onClick:()=>a(!1),style:Z.cancelBtn,children:[r.jsx(Tt,{size:14})," Cancel"]})]})]}),et.map(W=>{const bt=Dg(W.stage),Et=or[bt],Dt=Ag(W.source_type),_t=W.stage==="W",be=n===W.id;return r.jsxs("div",{onClick:()=>o(be?null:W.id),style:{...Z.skillCard,...be?{borderColor:Et.color,borderWidth:2}:{},..._t?{background:"rgba(76,154,107,0.05)"}:{}},children:[r.jsxs("div",{style:Z.skillCardTop,children:[r.jsxs("div",{style:Z.skillMeta,children:[r.jsx("span",{style:{color:$l[W.pillar]},children:r.jsx(Dt.icon,{size:13})}),r.jsx("span",{style:{...Z.pillarDot,background:$l[W.pillar]}}),r.jsxs("span",{style:Z.srcLabel,children:[Dt.label," · ",W.pillar]})]}),r.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[_t&&r.jsx(ji,{size:14,color:"#4C9A6B"}),r.jsx("button",{onClick:Lt=>{Lt.stopPropagation(),J(W.id,W.title)},style:Z.ghostBtn,children:r.jsx(Tt,{size:13})})]})]}),r.jsx("div",{style:Z.skillTitle,children:W.title}),r.jsxs("div",{style:Z.track,children:[or.map((Lt,me)=>{var ve;const Ce=me<bt,Ie=me===bt,Ye=(ve=W.completed_stages)==null?void 0:ve[Lt.id];return r.jsxs("div",{style:{...Z.trackItem,...me<or.length-1?{flex:1}:{}},children:[r.jsxs("div",{style:{...Z.trackDot,background:Ce||Ye||Ie?Lt.color:"var(--border)",boxShadow:Ie?`0 0 0 3px ${Lt.color}33`:"none"},children:[(Ce||Ie&&Ye)&&r.jsx(Mt,{size:9,color:"#fff",strokeWidth:3}),Ie&&!Ye&&r.jsx("span",{style:Z.trackCurrent,children:Lt.id}),!Ce&&!Ie&&r.jsx(kg,{size:8,color:"#B5B1A7"})]}),me<or.length-1&&r.jsx("div",{style:{...Z.trackLine,background:Ce?or[me+1].color:"var(--border)"}})]},Lt.id)}),r.jsx("span",{style:{...Z.stageTag,background:Et.soft,color:Et.color},children:Et.label})]})]},W.id)}),et.length===0&&!l&&r.jsx("div",{style:{...Z.empty,gridColumn:"1 / -1"},children:"No skills at this stage yet."})]}),M&&r.jsxs("div",{style:Z.detail,children:[r.jsxs("div",{style:Z.detailHead,children:[R&&r.jsx("button",{onClick:()=>{o(null),b(null)},style:Z.backBtn,title:"Back to skills",children:r.jsx(zn,{size:18})}),r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsxs("div",{style:Z.eyebrow,children:[Ag(M.source_type).label," · ",M.pillar]}),T!==null?r.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",marginTop:4},children:[r.jsx("input",{autoFocus:!0,value:T,onChange:W=>b(W.target.value),onKeyDown:W=>{W.key==="Enter"&&q(),W.key==="Escape"&&b(null)},style:{...Z.input,fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:0,flex:1}}),r.jsx("button",{onClick:q,style:{...Z.noteAddBtn,background:"#4C9A6B",width:30,height:30},children:r.jsx(Mt,{size:13})}),r.jsx("button",{onClick:()=>b(null),style:{...Z.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:30,height:30},children:r.jsx(Tt,{size:13})})]}):r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx("div",{style:Z.detailTitle,children:M.title}),r.jsx("button",{onClick:()=>b(M.title),style:Z.ghostBtn,title:"Edit name",children:r.jsx(ye,{size:13})})]})]}),r.jsx("button",{onClick:()=>{o(null),b(null)},style:Z.closeBtn,children:r.jsx(Tt,{size:16})})]}),or.map((W,bt)=>{var Ce,Ie,Ye;const Et=bt<=S,Dt=bt===S,_t=bt<S||((Ce=M.completed_stages)==null?void 0:Ce[W.id]),be=bt>S,Lt=((Ie=M.notes)==null?void 0:Ie[W.id])||[],me=((Ye=m[M.id])==null?void 0:Ye[W.id])??"";return r.jsxs("div",{style:{...Z.stageBlock,...Et?{borderColor:W.color}:{},opacity:be?.45:1},children:[r.jsxs("div",{style:Z.stageBlockHead,children:[r.jsx("div",{style:{...Z.stageLetter,background:Et?W.color:"var(--border)",color:Et?"#fff":"#9A968C"},children:_t&&!Dt?r.jsx(Mt,{size:12,color:"#fff",strokeWidth:3}):be?r.jsx(kg,{size:11,color:"#9A968C"}):W.id}),r.jsxs("div",{style:{flex:1},children:[r.jsx("div",{style:{...Z.stageName,color:Et?W.color:"#9A968C"},children:W.label}),Et&&r.jsx("div",{style:Z.stagePrompt,children:W.prompt})]}),_t&&!Dt&&r.jsx("span",{style:{...Z.doneBadge,color:W.color,background:W.soft},children:"Done"})]}),Et&&(()=>{var Gt,oe;const ve=W.id==="W",Tn=W.id==="D",er=Lt.length>0&&Lt.every(kt=>kt.done),rr=ve?er:Lt.length>0,Wr=M.data_groups||[],_r=Lt.filter(kt=>!kt.grp),B=Y(M),vt=kt=>r.jsxs("li",{style:Z.noteItem,children:[r.jsx("span",{style:{...Z.noteDot,background:W.color}}),(x==null?void 0:x.id)===kt.id?r.jsxs("div",{style:{flex:1,display:"flex",gap:5},children:[r.jsx("input",{autoFocus:!0,value:x.text,onChange:Yt=>k(De=>({...De,text:Yt.target.value})),onKeyDown:Yt=>{Yt.key==="Enter"&&P(),Yt.key==="Escape"&&k(null)},style:{...Z.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}),r.jsx("button",{onClick:P,style:{...Z.noteAddBtn,background:W.color,width:28,height:28},children:r.jsx(Mt,{size:12})}),r.jsx("button",{onClick:()=>k(null),style:{...Z.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:28,height:28},children:r.jsx(Tt,{size:12})})]}):r.jsx("span",{style:Z.noteText,children:kt.text}),(x==null?void 0:x.id)!==kt.id&&r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:()=>k({id:kt.id,text:kt.text}),style:Z.ghostBtn,children:r.jsx(ye,{size:12})}),r.jsx("button",{onClick:()=>w(kt.id),style:Z.ghostBtn,children:r.jsx(Tt,{size:12})})]})]},kt.id);return r.jsxs(r.Fragment,{children:[Tn?r.jsxs(r.Fragment,{children:[_r.length>0&&r.jsx("ul",{style:Z.noteList,children:_r.map(vt)}),Wr.map(kt=>{const Yt=Lt.filter(ze=>ze.grp===kt.id),De=z[kt.id]!==!1;return r.jsxs("div",{style:{...Z.groupBox,borderColor:`${W.color}55`},children:[r.jsxs("div",{style:Z.groupHead,children:[r.jsx("button",{onClick:()=>v(ze=>({...ze,[kt.id]:!De})),style:Z.groupCaret,children:De?r.jsx(ki,{size:15}):r.jsx(sn,{size:15})}),M.source_type==="book"?r.jsx(Xd,{size:13,color:W.color}):r.jsx(Vh,{size:13,color:W.color}),(I==null?void 0:I.id)===kt.id?r.jsx("input",{autoFocus:!0,value:I.label,onChange:ze=>L(En=>({...En,label:ze.target.value})),onKeyDown:ze=>{ze.key==="Enter"&&(ht(M,kt.id,I.label.trim()||kt.label),L(null)),ze.key==="Escape"&&L(null)},onBlur:()=>{ht(M,kt.id,I.label.trim()||kt.label),L(null)},style:{...Z.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}):r.jsx("span",{style:Z.groupTitle,onClick:()=>L({id:kt.id,label:kt.label}),title:"Click to rename",children:kt.label}),r.jsx("span",{style:Z.groupCount,children:Yt.length}),r.jsx("button",{onClick:()=>U(M,kt.id),style:Z.ghostBtn,title:`Delete ${B.toLowerCase()}`,children:r.jsx(Tt,{size:13})})]}),De&&r.jsxs("div",{style:Z.groupBody,children:[Yt.length>0&&r.jsx("ul",{style:Z.noteList,children:Yt.map(vt)}),r.jsxs("div",{style:Z.noteAddRow,children:[r.jsx("input",{placeholder:"Add a point…",value:u[kt.id]??"",onChange:ze=>h(En=>({...En,[kt.id]:ze.target.value})),onKeyDown:ze=>ze.key==="Enter"&&O(M,kt.id),style:Z.noteInput}),r.jsx("button",{onClick:()=>O(M,kt.id),style:{...Z.noteAddBtn,background:W.color},children:r.jsx(de,{size:14})})]})]})]},kt.id)}),Wr.length===0&&_r.length===0&&r.jsxs("div",{style:Z.noNotes,children:["No ",B.toLowerCase(),"s yet — add one to start logging points."]}),r.jsxs("button",{onClick:()=>rt(M),style:{...Z.addGroupBtn,color:W.color,borderColor:`${W.color}80`},children:[r.jsx(de,{size:14})," Add ",B.toLowerCase()]})]}):r.jsxs(r.Fragment,{children:[Lt.length>0&&r.jsx("ul",{style:Z.noteList,children:Lt.map(kt=>r.jsxs("li",{style:Z.noteItem,children:[ve?r.jsx("button",{onClick:()=>F(kt.id),style:{...Z.checkBox,...kt.done?{background:W.color,borderColor:W.color}:{}},children:kt.done&&r.jsx(Mt,{size:11,color:"#fff",strokeWidth:3})}):r.jsx("span",{style:{...Z.noteDot,background:W.color}}),(x==null?void 0:x.id)===kt.id?r.jsxs("div",{style:{flex:1,display:"flex",gap:5},children:[r.jsx("input",{autoFocus:!0,value:x.text,onChange:Yt=>k(De=>({...De,text:Yt.target.value})),onKeyDown:Yt=>{Yt.key==="Enter"&&P(),Yt.key==="Escape"&&k(null)},style:{...Z.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}),r.jsx("button",{onClick:P,style:{...Z.noteAddBtn,background:W.color,width:28,height:28},children:r.jsx(Mt,{size:12})}),r.jsx("button",{onClick:()=>k(null),style:{...Z.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:28,height:28},children:r.jsx(Tt,{size:12})})]}):r.jsx("span",{style:{...Z.noteText,...ve&&kt.done?{textDecoration:"line-through",color:"var(--text-3)"}:{}},children:kt.text}),(x==null?void 0:x.id)!==kt.id&&r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:()=>k({id:kt.id,text:kt.text}),style:Z.ghostBtn,children:r.jsx(ye,{size:12})}),r.jsx("button",{onClick:()=>w(kt.id),style:Z.ghostBtn,children:r.jsx(Tt,{size:12})})]})]},kt.id))}),Lt.length===0&&r.jsx("div",{style:Z.noNotes,children:ve?"Add the steps to implement this — check each off as you do it.":`No notes yet — ${W.hint}`}),r.jsxs("div",{style:Z.noteAddRow,children:[r.jsx("input",{placeholder:ve?"Add a step to implement…":`Add a ${W.label} note…`,value:me,onChange:kt=>j(Yt=>({...Yt,[M.id]:{...Yt[M.id],[W.id]:kt.target.value}})),onKeyDown:kt=>kt.key==="Enter"&&A(M.id,W.id),style:Z.noteInput}),r.jsx("button",{onClick:()=>A(M.id,W.id),style:{...Z.noteAddBtn,background:W.color},children:r.jsx(de,{size:14})})]})]}),Dt&&!((Gt=M.completed_stages)!=null&&Gt[W.id])&&r.jsxs(r.Fragment,{children:[ve&&Lt.length>0&&!er&&r.jsxs("div",{style:Z.checklistHint,children:[Lt.filter(kt=>kt.done).length,"/",Lt.length," done — check all steps to complete Wisdom"]}),r.jsxs("button",{onClick:()=>f(M.id,W.id),disabled:!rr,style:{...Z.advanceBtn,background:rr?W.color:"#C3BFB5",marginTop:10,cursor:rr?"pointer":"not-allowed"},children:[r.jsx(Mt,{size:14}),ve?"Mark Wisdom complete":`Complete ${W.label} → ${(oe=or[bt+1])==null?void 0:oe.label}`]})]})]})})()]},W.id)}),M.stage==="W"&&((It=M.completed_stages)==null?void 0:It.W)&&r.jsxs("div",{style:Z.wisdomDone,children:[r.jsx(Dr,{size:16,color:"#4C9A6B"})," Wisdom achieved — implemented in your life"]})]})]}),r.jsx(Mr,{toasts:gt,onUndo:H,onDismiss:ft})]})}const Z={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box",position:"relative"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},headRight:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},wisdomBadge:{display:"flex",alignItems:"center",gap:5,background:"rgba(201,162,39,0.12)",border:"1px solid rgba(201,162,39,0.3)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:700,color:"#8A6E1A"},addSkillBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},filterBar:{display:"flex",gap:6,flexWrap:"wrap",marginBottom:16},filterBtn:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},layout:{display:"grid",gap:12,alignItems:"start"},cardList:{display:"grid",gap:10,alignContent:"start"},skillCard:{background:"var(--surface)",borderRadius:12,padding:"16px",border:"1.5px solid var(--border)",cursor:"pointer",boxShadow:"0 1px 2px rgba(0,0,0,0.04)",minWidth:0,overflow:"hidden",boxSizing:"border-box"},skillCardTop:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:8,marginBottom:6},skillMeta:{display:"flex",alignItems:"center",gap:6,minWidth:0},pillarDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},srcLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},skillTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em",marginBottom:12,lineHeight:1.3,wordBreak:"break-word"},cardTitle:{fontSize:13,fontWeight:700,marginBottom:10},track:{display:"flex",alignItems:"center",minWidth:0},trackItem:{display:"flex",alignItems:"center",minWidth:0},trackDot:{width:22,height:22,borderRadius:"50%",display:"grid",placeItems:"center",flexShrink:0},trackCurrent:{fontSize:9,fontWeight:800,color:"#fff"},trackLine:{flex:1,minWidth:8,height:3,borderRadius:2,margin:"0 2px"},stageTag:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:12,marginLeft:8,flexShrink:0,whiteSpace:"nowrap"},detail:{background:"var(--surface)",borderRadius:14,padding:"18px 16px",boxShadow:"0 1px 4px rgba(0,0,0,0.07)",border:"1.5px solid var(--border)",alignSelf:"start"},detailHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16},detailTitle:{fontSize:18,fontWeight:700,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},backBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,marginRight:4},groupBox:{border:"1.5px solid var(--border)",borderRadius:9,marginBottom:8,overflow:"hidden",background:"var(--bg)"},groupHead:{display:"flex",alignItems:"center",gap:7,padding:"8px 10px"},groupCaret:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",display:"grid",placeItems:"center",padding:0,width:18,height:18,flexShrink:0},groupTitle:{flex:1,minWidth:0,fontSize:13,fontWeight:700,color:"var(--text)",cursor:"text",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},groupCount:{fontSize:10.5,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 7px",flexShrink:0},groupBody:{padding:"0 10px 10px 10px"},addGroupBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1.5px dashed",background:"none",padding:"9px 12px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:2},stageBlock:{border:"1.5px solid var(--border)",borderRadius:10,padding:"12px 13px",marginBottom:10},stageBlockHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:8},stageLetter:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",fontSize:13,fontWeight:800,flexShrink:0},stageName:{fontSize:13,fontWeight:700},stagePrompt:{fontSize:11.5,color:"var(--text-2)",marginTop:2,lineHeight:1.4},doneBadge:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10,marginLeft:"auto",flexShrink:0},noteList:{margin:"0 0 8px 0",padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6},noteItem:{display:"flex",alignItems:"flex-start",gap:8,fontSize:13,lineHeight:1.4},noteDot:{width:6,height:6,borderRadius:"50%",flexShrink:0,marginTop:5},checkBox:{width:18,height:18,borderRadius:5,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,marginTop:1,padding:0},checklistHint:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,marginTop:10,textAlign:"center"},noteText:{flex:1,color:"var(--text)"},noNotes:{fontSize:12,color:"var(--text-3)",fontStyle:"italic",marginBottom:8},noteAddRow:{display:"flex",gap:6},noteInput:{flex:1,border:"1px solid var(--border)",borderRadius:7,padding:"7px 10px",fontSize:13,fontFamily:"inherit",outline:"none"},noteAddBtn:{width:32,height:32,border:"none",borderRadius:7,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},advanceBtn:{display:"flex",alignItems:"center",gap:8,border:"none",color:"#fff",padding:"10px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit",width:"100%",justifyContent:"center"},wisdomDone:{display:"flex",alignItems:"center",gap:8,justifyContent:"center",fontSize:13.5,fontWeight:700,color:"#4C9A6B",padding:12,background:"rgba(76,154,107,0.08)",borderRadius:10,marginTop:4},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},input:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box",marginBottom:8},select:{border:"1px solid var(--border)",borderRadius:8,padding:"8px 10px",fontSize:12.5,fontFamily:"inherit",flex:1},addRow:{display:"flex",gap:8,marginBottom:8},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},empty:{fontSize:13,color:"var(--text-3)",padding:"32px 12px",textAlign:"center"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.55)",zIndex:50,display:"grid",placeItems:"center"},celebBox:{background:"var(--surface)",borderRadius:20,padding:"40px 32px",textAlign:"center",maxWidth:320,boxShadow:"0 8px 40px rgba(0,0,0,0.18)"},celebEmoji:{fontSize:52,marginBottom:12},celebTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:8},celebSub:{fontSize:13.5,color:"var(--text-2)",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:"#4C9A6B",color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},Yi=[{id:"aarti",title:"Aarti",html:`<h1>॥ गणपतीची आरती ॥</h1><br/>
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
      </div>`}];function Uy(){const[t,e]=g.useState(()=>window.innerWidth<720);return g.useEffect(()=>{const n=()=>e(window.innerWidth<720);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),t}const Yy=t=>new Promise((e,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:l,height:a}=i;l>a&&l>1400?(a=a*1400/l,l=1400):a>1400&&(l=l*1400/a,a=1400);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(i,0,0,l,a),e(d.toDataURL("image/jpeg",.85))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(t)});function Fg({base:t,count:e,images:n}){const o=n&&n.length?n:null,i=o?o.length:e,[s,l]=g.useState(0);if(!i)return null;const a=s%i,d=o?o[a]:`${t}${a+1}.jpg`;return r.jsxs("div",{style:{maxWidth:560,margin:"0 auto"},children:[r.jsx("div",{style:St.carouselFrame,children:r.jsx("img",{src:d,alt:`Page ${a+1}`,style:St.carouselImg})}),r.jsxs("div",{style:St.carouselNav,children:[r.jsxs("button",{onClick:()=>l(c=>(c-1+i)%i),style:St.carouselBtn,children:[r.jsx(zn,{size:16})," Prev"]}),r.jsxs("span",{style:St.carouselCount,children:[o?"":"Adhyay ",a+1," / ",i]}),r.jsxs("button",{onClick:()=>l(c=>(c+1)%i),style:St.carouselBtn,children:["Next ",r.jsx(sn,{size:16})]})]})]})}function Vy(){const t=Uy(),[e,n]=g.useState(!1),[o,i]=g.useState([]),[s,l]=g.useState("dss"),[a,d]=g.useState(!1),[c,p]=g.useState({title:"",type:"text",content:"",images:[]}),[y,m]=g.useState([]),[j,x]=g.useState(null),[k,T]=g.useState(!1),b=g.useRef(!1),u=g.useCallback(async()=>{try{const[O,q,P]=await Promise.all([G.getDecks(),G.getSetting("spiritual_order"),G.getSetting("spiritual_default")]);if(i(O),Array.isArray(q==null?void 0:q.value)&&m(q.value),P!=null&&P.value&&x(P.value),!b.current){b.current=!0;const F=new Set([...Yi.map(f=>f.id),...O.map(f=>`deck-${f.id}`)]);P!=null&&P.value&&F.has(P.value)&&l(P.value)}}catch{}},[]);g.useEffect(()=>{u()},[u]);const h=[...Yi.map(O=>({id:O.id,title:O.title})),...o.map(O=>({id:`deck-${O.id}`,title:O.title}))],z=(()=>{if(!y.length)return h;const O=new Map(h.map(P=>[P.id,P])),q=[];return y.forEach(P=>{O.has(P)&&(q.push(O.get(P)),O.delete(P))}),O.forEach(P=>q.push(P)),q})(),v=(O,q)=>{const P=z.map(f=>f.id),F=O+q;F<0||F>=P.length||([P[O],P[F]]=[P[F],P[O]],m(P),G.setSetting("spiritual_order",P).catch(()=>{}))},I=O=>{x(O),G.setSetting("spiritual_default",O).catch(()=>{})},L=s.startsWith("deck-")?Number(s.slice(5)):null,R=L!=null?o.find(O=>O.id===L):null,E=R?null:Yi.find(O=>O.id===s)||(L==null?Yi[0]:null),M=a?"New deck":R?R.title:(E==null?void 0:E.title)||"",S=O=>{l(O),d(!1),t&&n(!1)},A=()=>{d(!0),p({title:"",type:"text",content:"",images:[]}),t&&n(!1)},w=async O=>{const q=Array.from(O.target.files||[]),P=[];for(const F of q)try{P.push(await Yy(F))}catch{}p(F=>({...F,images:[...F.images,...P]})),O.target.value=""},Y=O=>p(q=>({...q,images:q.images.filter((P,F)=>F!==O)})),lt=c.title.trim()&&(c.type==="text"?c.content.trim():c.images.length>0),rt=async()=>{if(!lt)return;const O=await G.createDeck({title:c.title.trim(),type:c.type,content:c.type==="text"?c.content:"",images:c.type==="images"?c.images:[]});d(!1),await u(),l(`deck-${O.id}`)},ht=async O=>{await G.deleteDeck(O),s===`deck-${O}`&&l("dss"),u()},U={...St.sidebar,...t?St.sidebarOverlay:{},...t&&!e?St.sidebarHidden:{}};return r.jsxs("div",{style:St.shell,children:[r.jsx("style",{children:Qy}),t&&e&&r.jsx("div",{style:St.backdrop,onClick:()=>n(!1)}),r.jsxs("aside",{style:U,children:[r.jsxs("div",{style:St.sideHead,children:[r.jsx("div",{style:St.brand,children:"Anvil · Spiritual"}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:2},children:[r.jsx("button",{onClick:()=>T(O=>!O),style:St.iconBtn,title:"Rearrange & set default",children:k?r.jsx(Mt,{size:16}):r.jsx(ye,{size:15})}),t&&r.jsx("button",{onClick:()=>n(!1),style:St.iconBtn,children:r.jsx(Tt,{size:17})})]})]}),k&&r.jsxs("div",{style:St.editHint,children:["Arrows reorder · ",r.jsx($s,{size:11,style:{verticalAlign:"-1px"}})," sets what opens by default"]}),r.jsxs("div",{style:St.sideScroll,children:[z.map((O,q)=>{const P=O.id===s&&!a,F=j===O.id;return r.jsxs("div",{style:St.sideRow,children:[r.jsxs("button",{onClick:()=>S(O.id),style:{...St.sideItem,flex:1,...P?St.sideItemOn:{}},children:[O.title,F&&r.jsx("span",{style:St.defStar,title:"Opens by default",children:" ★"})]}),k&&r.jsxs("div",{style:St.editControls,children:[r.jsx("button",{onClick:()=>I(O.id),title:"Set as default",style:{...St.miniBtn,...F?{color:"#8268B0"}:{}},children:r.jsx($s,{size:13})}),r.jsx("button",{onClick:()=>v(q,-1),disabled:q===0,style:{...St.miniBtn,opacity:q===0?.3:1},children:r.jsx(jb,{size:13})}),r.jsx("button",{onClick:()=>v(q,1),disabled:q===z.length-1,style:{...St.miniBtn,opacity:q===z.length-1?.3:1},children:r.jsx(ki,{size:13})})]})]},O.id)}),r.jsxs("button",{onClick:A,style:{...St.newDeckBtn,...a?St.sideItemOn:{}},children:[r.jsx(de,{size:14})," New deck"]})]})]}),r.jsxs("main",{style:St.main,children:[t&&r.jsxs("button",{onClick:()=>n(!0),style:St.hamburger,children:[r.jsx(Jd,{size:17}),r.jsx("span",{style:St.hamburgerLabel,children:M})]}),a?r.jsxs("div",{style:St.contentWrap,children:[r.jsx("div",{style:St.formTitle,children:"Create a deck"}),r.jsx("input",{placeholder:"Deck title (e.g. Vishnu Sahasranamam)",value:c.title,onChange:O=>p({...c,title:O.target.value}),style:St.input}),r.jsxs("div",{style:St.typeRow,children:[r.jsxs("button",{onClick:()=>p({...c,type:"text"}),style:{...St.typeBtn,...c.type==="text"?St.typeOn:{}},children:[r.jsx(qd,{size:15})," Text"]}),r.jsxs("button",{onClick:()=>p({...c,type:"images"}),style:{...St.typeBtn,...c.type==="images"?St.typeOn:{}},children:[r.jsx(Gh,{size:15})," Images"]})]}),c.type==="text"?r.jsx("textarea",{placeholder:"Paste or write the text (verses, chant, reflection)…",value:c.content,onChange:O=>p({...c,content:O.target.value}),style:St.textarea}):r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:St.imgGrid,children:[c.images.map((O,q)=>r.jsxs("div",{style:St.imgThumbWrap,children:[r.jsx("img",{src:O,alt:"",style:St.imgThumb}),r.jsx("button",{onClick:()=>Y(q),style:St.imgDel,children:r.jsx(Tt,{size:12})})]},q)),r.jsxs("label",{style:St.imgAdd,children:[r.jsx(il,{size:20}),r.jsx("span",{style:{fontSize:11},children:"Add images"}),r.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:w,style:{display:"none"}})]})]}),r.jsx("div",{style:St.hint,children:"Images show as a swipeable carousel, in the order added."})]}),r.jsxs("div",{style:St.formActions,children:[r.jsxs("button",{onClick:()=>d(!1),style:St.cancelBtn,children:[r.jsx(Tt,{size:14})," Cancel"]}),r.jsxs("button",{onClick:rt,disabled:!lt,style:{...St.saveBtn,...lt?{}:St.saveDisabled},children:[r.jsx(Mt,{size:15})," Create deck"]})]})]}):R?r.jsxs("div",{style:St.contentWrap,children:[r.jsxs("div",{style:St.deckHead,children:[r.jsx("h2",{style:St.deckTitle,children:R.title}),r.jsx("button",{onClick:()=>ht(R.id),style:St.deckDel,title:"Delete deck",children:r.jsx(ly,{size:15})})]}),R.type==="images"?r.jsx(Fg,{images:R.images}):r.jsx("div",{style:St.deckText,children:R.content})]}):r.jsxs("div",{style:St.contentWrap,children:[(E==null?void 0:E.youtube)&&r.jsx("div",{style:St.videoFrame,children:r.jsx("iframe",{src:`https://www.youtube.com/embed/${E.youtube}`,title:E.title,style:St.video,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0},E.youtube)}),E!=null&&E.carousel?r.jsx(Fg,{base:E.imageBase,count:E.carousel}):r.jsx("div",{className:"spiritual-content",dangerouslySetInnerHTML:{__html:(E==null?void 0:E.html)||""}})]})]})]})}const Qy=`
.spiritual-content { font-family: 'Inter', system-ui, sans-serif; color: var(--text); line-height: 1.9; font-size: 16px; text-align: center; }
.spiritual-content h1 { font-family: 'Fraunces', Georgia, serif; font-size: 24px; color: #8268B0; margin: 8px 0 18px; letter-spacing: -0.01em; }
.spiritual-content h2 { font-family: 'Fraunces', Georgia, serif; font-size: 18px; color: #7A5EA8; margin: 20px 0 8px; }
.spiritual-content h3 { font-size: 15px; color: var(--text-3); text-transform: uppercase; letter-spacing: 0.06em; margin: 18px 0 6px; }
.spiritual-content b { color: #8268B0; }
.spiritual-content div { text-align: center; }
`,St={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:240,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.15)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.35)",zIndex:20},sideHead:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"18px 14px 12px"},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700},sideScroll:{flex:1,overflowY:"auto",padding:"0 8px 16px"},sideItem:{display:"block",width:"100%",border:"none",background:"none",padding:"10px 12px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13.5,fontWeight:500,color:"var(--text-2)",textAlign:"left",marginBottom:2},sideItemOn:{background:"rgba(130,104,176,0.12)",color:"#8268B0",fontWeight:700},sideRow:{display:"flex",alignItems:"center",gap:2},editControls:{display:"flex",alignItems:"center",gap:1,flexShrink:0},miniBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",borderRadius:5},defStar:{color:"#C9A227",fontWeight:700},editHint:{fontSize:10.5,color:"var(--text-3)",padding:"0 14px 8px",lineHeight:1.4},newDeckBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",padding:"9px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:600,color:"var(--text-2)",marginTop:6},main:{flex:1,padding:"26px 22px",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:220},contentWrap:{background:"var(--surface)",borderRadius:14,padding:"26px 28px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",maxWidth:760,margin:"0 auto"},videoFrame:{position:"relative",width:"100%",maxWidth:600,margin:"0 auto 22px",aspectRatio:"16 / 9",borderRadius:12,overflow:"hidden",background:"#000"},video:{position:"absolute",inset:0,width:"100%",height:"100%",border:"none"},carouselFrame:{background:"var(--surface-2)",borderRadius:12,padding:8,border:"1px solid var(--border)"},carouselImg:{width:"100%",borderRadius:8,display:"block"},carouselNav:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:14},carouselBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},carouselCount:{fontSize:13,fontWeight:700,color:"#8268B0",fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"none",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,color:"var(--text-2)"},deckHead:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,marginBottom:16,borderBottom:"1px solid var(--border)",paddingBottom:12},deckTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",margin:0,color:"#8268B0"},deckDel:{border:"1px solid var(--border)",background:"var(--surface)",color:"#C2536B",cursor:"pointer",display:"grid",placeItems:"center",padding:7,borderRadius:8,flexShrink:0},deckText:{fontSize:16,lineHeight:1.9,whiteSpace:"pre-wrap",color:"var(--text)",textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},formTitle:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:14},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none"},typeRow:{display:"flex",gap:8,marginTop:12},typeBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},typeOn:{background:"#8268B0",color:"#fff",borderColor:"#8268B0"},textarea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"12px",fontSize:15,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:200,resize:"vertical",lineHeight:1.7,marginTop:12},imgGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(90px, 1fr))",gap:8,marginTop:12},imgThumbWrap:{position:"relative",aspectRatio:"1",borderRadius:8,overflow:"hidden",border:"1px solid var(--border)"},imgThumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},imgDel:{position:"absolute",top:3,right:3,border:"none",background:"rgba(0,0,0,0.6)",color:"#fff",borderRadius:"50%",width:18,height:18,cursor:"pointer",display:"grid",placeItems:"center",padding:0},imgAdd:{aspectRatio:"1",border:"1px dashed var(--border)",borderRadius:8,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:4,cursor:"pointer",color:"var(--text-3)"},hint:{fontSize:11.5,color:"var(--text-3)",marginTop:8},formActions:{display:"flex",gap:8,marginTop:16},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:"#8268B0",color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"}},vr={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},Mg=Object.keys(vr),Ky=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Xy=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],qy=()=>{const t=new Date;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`},Jy=(t,e)=>`${Xy[e-1]} ${t}`,Zy=(t,e)=>{const n=new Date(t,e,0).getDate();return Array.from({length:n},(o,i)=>`${t}-${String(e).padStart(2,"0")}-${String(i+1).padStart(2,"0")}`)},t0=(t,e)=>{const n=new Date(t,e-1,1).getDay();return n===0?6:n-1};function e0(){const t=qy(),[e,n]=g.useState(new Date().getFullYear()),[o,i]=g.useState(new Date().getMonth()+1),[s,l]=g.useState([]),[a,d]=g.useState([]),[c,p]=g.useState({}),[y,m]=g.useState(null),[j,x]=g.useState(!1),[k,T]=g.useState(!1),[b,u]=g.useState({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:t}),[h,z]=g.useState(null),v=g.useCallback(async()=>{const[f,Q,xt]=await Promise.all([G.getTopics(),G.getDueToday(),G.getCalendar(e,o)]);l(f),d(Q),p(xt)},[e,o]);g.useEffect(()=>{v()},[v]);const I=async f=>{await G.toggleReviewDone(f),v()},L=async()=>{const f=b.intervals.split(",").map(Q=>parseInt(Q.trim(),10)).filter(Q=>!isNaN(Q));!b.topic.trim()||f.length===0||(await G.createTopic({pillar:b.pillar,topic:b.topic.trim(),intervals:f,learned_date:b.learned_date||t}),u({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:t}),T(!1),v())},{deleteItem:R,toasts:E,handleUndo:M,handleDismiss:S}=Fr(G.deleteTopic,G.restoreTopic,v),A=(f,Q)=>R(f,Q),w=f=>z({id:f.id,topic:f.topic,pillar:f.pillar,intervals:(f.intervals||[]).join(", "),learned_date:f.learned_date}),Y=async()=>{if(!h)return;const f=h.intervals.split(",").map(Q=>parseInt(Q.trim(),10)).filter(Q=>!isNaN(Q)&&Q>=0);!h.topic.trim()||f.length===0||(await G.updateTopic(h.id,{topic:h.topic.trim(),pillar:h.pillar,learned_date:h.learned_date,intervals:f}),z(null),v())},lt=()=>{o===1?(n(f=>f-1),i(12)):i(f=>f-1),m(null)},rt=()=>{o===12?(n(f=>f+1),i(1)):i(f=>f+1),m(null)},ht=s.filter(f=>!f.cemented),U=s.filter(f=>f.cemented),O=Zy(e,o),q=t0(e,o),P=g.useMemo(()=>{const f={};return s.forEach(Q=>Q.reviews.forEach(xt=>{xt.done||(f[xt.due_date]=f[xt.due_date]||[]).push({topic:Q.topic,pillar:Q.pillar,stage:xt.stage})})),f},[s]),F=y?s.flatMap(f=>f.reviews.filter(Q=>Q.due_date===y).map(Q=>({...Q,topic:f.topic,pillar:f.pillar,total:f.reviews.length}))):[];return r.jsxs("div",{style:dt.page,children:[r.jsxs("div",{style:dt.head,children:[r.jsxs("div",{children:[r.jsx("div",{style:dt.eyebrow,children:"Anvil · Revision"}),r.jsx("h1",{style:dt.h1,children:"Spaced Repetition"})]}),r.jsxs("button",{onClick:()=>T(!0),style:dt.addBtn,children:[r.jsx(de,{size:15})," Add topic"]})]}),k&&r.jsxs("div",{style:dt.addBox,children:[r.jsx("input",{autoFocus:!0,placeholder:"What did you learn?",value:b.topic,onChange:f=>u(Q=>({...Q,topic:f.target.value})),onKeyDown:f=>f.key==="Enter"&&L(),style:dt.input}),r.jsxs("div",{style:dt.addRow,children:[r.jsx("select",{value:b.pillar,onChange:f=>u(Q=>({...Q,pillar:f.target.value})),style:dt.select,children:Mg.map(f=>r.jsx("option",{children:f},f))}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[r.jsx("label",{style:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},children:"Learned on"}),r.jsx("input",{type:"date",value:b.learned_date,onChange:f=>u(Q=>({...Q,learned_date:f.target.value})),style:{...dt.select,fontSize:13}})]}),r.jsx("div",{style:{flex:1,minWidth:0},children:r.jsx("input",{value:b.intervals,onChange:f=>u(Q=>({...Q,intervals:f.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:dt.input})})]}),r.jsxs("div",{style:dt.addRow,children:[r.jsxs("button",{onClick:L,style:dt.saveBtn,children:[r.jsx(Mt,{size:14})," Save"]}),r.jsxs("button",{onClick:()=>T(!1),style:dt.cancelBtn,children:[r.jsx(Tt,{size:14})," Cancel"]})]})]}),a.length>0&&r.jsxs("div",{style:dt.section,children:[r.jsxs("div",{style:dt.sectionTitle,children:[r.jsx(Bb,{size:15,color:"#C2536B"}),"Due Today",r.jsx("span",{style:dt.badge,children:a.length})]}),a.map(f=>{var xt,gt;const Q=((xt=vr[f.pillar])==null?void 0:xt.dot)||"#9A968C";return r.jsxs("div",{style:{...dt.reviewCard,borderLeft:`3px solid ${Q}`,...f.is_missed?{opacity:.85}:{}},children:[r.jsx("button",{onClick:()=>I(f.review_id),style:{...dt.checkbox,...f.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:f.done&&r.jsx(Mt,{size:12,color:"#fff",strokeWidth:3})}),r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("div",{style:dt.reviewTopic,children:f.topic}),r.jsxs("div",{style:dt.reviewMeta,children:[r.jsxs("span",{style:{...dt.stageTag,background:((gt=vr[f.pillar])==null?void 0:gt.soft)||"rgba(0,0,0,0.05)",color:Q},children:["Review ",f.stage,"/",f.total_stages]}),f.is_missed&&r.jsxs("span",{style:dt.missedTag,children:["missed · ",f.due_date]})]})]})]},f.review_id)})]}),r.jsxs("div",{style:dt.section,children:[r.jsxs("div",{style:dt.sectionTitle,children:["Active Topics ",r.jsx("span",{style:dt.badge,children:ht.length})]}),ht.length===0&&r.jsx("div",{style:dt.empty,children:"No active topics. Add something you learned today."}),ht.map(f=>{var H,ft;const Q=((H=vr[f.pillar])==null?void 0:H.dot)||"#9A968C",xt=((ft=vr[f.pillar])==null?void 0:ft.soft)||"rgba(0,0,0,0.05)",gt=f.reviews.filter(J=>J.done).length;return(h==null?void 0:h.id)===f.id?r.jsxs("div",{style:dt.addBox,children:[r.jsx("input",{autoFocus:!0,value:h.topic,onChange:J=>z(et=>({...et,topic:J.target.value})),onKeyDown:J=>J.key==="Enter"&&Y(),placeholder:"Topic",style:dt.input}),r.jsxs("div",{style:dt.addRow,children:[r.jsx("select",{value:h.pillar,onChange:J=>z(et=>({...et,pillar:J.target.value})),style:dt.select,children:Mg.map(J=>r.jsx("option",{children:J},J))}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[r.jsx("label",{style:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},children:"Learned on"}),r.jsx("input",{type:"date",value:h.learned_date,onChange:J=>z(et=>({...et,learned_date:J.target.value})),style:{...dt.select,fontSize:13}})]}),r.jsx("div",{style:{flex:1,minWidth:0},children:r.jsx("input",{value:h.intervals,onChange:J=>z(et=>({...et,intervals:J.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:dt.input})})]}),r.jsx("div",{style:dt.editHint,children:"Changing the date or intervals reschedules the reviews (completed steps are kept where they still apply)."}),r.jsxs("div",{style:dt.addRow,children:[r.jsxs("button",{onClick:Y,style:dt.saveBtn,children:[r.jsx(Mt,{size:14})," Save plan"]}),r.jsxs("button",{onClick:()=>z(null),style:dt.cancelBtn,children:[r.jsx(Tt,{size:14})," Cancel"]})]})]},f.id):r.jsxs("div",{style:dt.topicCard,children:[r.jsxs("div",{style:dt.topicHead,children:[r.jsx("span",{style:{...dt.dot,background:Q}}),r.jsx("span",{style:dt.topicName,children:f.topic}),r.jsx("span",{style:dt.topicPillar,children:f.pillar}),r.jsxs("span",{style:dt.topicProgress,children:[gt,"/",f.reviews.length," done"]}),r.jsx("button",{onClick:()=>w(f),style:dt.ghostBtn,title:"Edit plan",children:r.jsx(ye,{size:12})}),r.jsx("button",{onClick:()=>A(f.id,f.topic),style:dt.ghostBtn,title:"Delete",children:r.jsx(Tt,{size:13})})]}),r.jsxs("div",{style:dt.reviewDots,children:[f.reviews.map(J=>{J.due_date<t;const et=J.due_date===t;return r.jsx("button",{onClick:()=>I(J.id),title:`Review ${J.stage} · ${J.due_date}${J.done?" · Done":""}`,style:{...dt.reviewDot,background:J.done?Q:et?xt:"var(--hover)",border:`2px solid ${J.done||et?Q:"var(--border)"}`,color:J.done?"#fff":Q},children:J.stage},J.id)}),r.jsxs("span",{style:dt.learnedDate,children:["Learned ",f.learned_date]})]})]},f.id)})]}),U.length>0&&r.jsxs("div",{style:dt.section,children:[r.jsxs("button",{onClick:()=>x(f=>!f),style:dt.cementedToggle,children:[j?r.jsx(ki,{size:15}):r.jsx(sn,{size:15}),r.jsx(Dr,{size:14,color:"#C9A227"}),"Cemented",r.jsx("span",{style:{...dt.badge,background:"rgba(201,162,39,0.12)",color:"#8A6E1A"},children:U.length})]}),j&&U.map(f=>{var xt;const Q=((xt=vr[f.pillar])==null?void 0:xt.dot)||"#9A968C";return r.jsx("div",{style:{...dt.topicCard,opacity:.75},children:r.jsxs("div",{style:dt.topicHead,children:[r.jsx("span",{style:{...dt.dot,background:Q}}),r.jsx("span",{style:dt.topicName,children:f.topic}),r.jsx("span",{style:dt.topicPillar,children:f.pillar}),r.jsx(Dr,{size:13,color:"#C9A227",style:{marginLeft:"auto"}})]})},f.id)})]}),r.jsxs("div",{style:dt.calCard,children:[r.jsxs("div",{style:dt.calHead,children:[r.jsx("button",{onClick:lt,style:dt.calNav,children:"‹"}),r.jsxs("div",{style:dt.calTitle,children:[Jy(e,o)," · Review Calendar"]}),r.jsx("button",{onClick:rt,style:dt.calNav,children:"›"})]}),r.jsx("div",{style:dt.calDow,children:Ky.map(f=>r.jsx("div",{style:dt.calDowCell,children:f},f))}),r.jsxs("div",{style:dt.calGrid,children:[Array.from({length:q}).map((f,Q)=>r.jsx("div",{},`p${Q}`)),O.map((f,Q)=>{const xt=P[f]||[],gt=f===t,H=f===y,ft=f<t,J=H?"#fff":gt?"var(--text)":ft?"var(--text-2)":"var(--text-3)";return r.jsxs("button",{onClick:()=>m(H?null:f),style:{...dt.calDay,background:H?"var(--accent-strong)":gt?"var(--hover)":"var(--surface)",borderColor:gt||H?"var(--accent-strong)":"var(--border)"},children:[r.jsx("span",{style:{...dt.calDayNum,color:J,fontWeight:gt||H?700:600},children:Q+1}),xt.slice(0,2).map((et,X)=>{var pt;return r.jsxs("span",{title:et.topic,style:{...dt.calItem,color:H?"#fff":((pt=vr[et.pillar])==null?void 0:pt.dot)||"var(--text-2)"},children:[X+1,". ",et.topic]},X)}),xt.length>2&&r.jsxs("span",{style:{...dt.calMore,color:H?"#fff":"var(--text-3)"},children:["+",xt.length-2," more"]})]},f)})]}),y&&r.jsxs("div",{style:dt.dayDetail,children:[r.jsxs("div",{style:dt.dayDetailTitle,children:["Reviews for ",y]}),F.length===0?r.jsx("div",{style:dt.empty,children:"No reviews scheduled for this day."}):F.map((f,Q)=>{var gt,H;const xt=((gt=vr[f.pillar])==null?void 0:gt.dot)||"#9A968C";return r.jsxs("div",{style:{...dt.reviewCard,borderLeft:`3px solid ${xt}`},children:[r.jsx("button",{onClick:()=>I(f.id),style:{...dt.checkbox,...f.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:f.done&&r.jsx(Mt,{size:12,color:"#fff",strokeWidth:3})}),r.jsxs("div",{children:[r.jsxs("div",{style:dt.reviewTopic,children:[Q+1,". ",f.topic]}),r.jsxs("span",{style:{...dt.stageTag,background:((H=vr[f.pillar])==null?void 0:H.soft)||"rgba(0,0,0,0.05)",color:xt},children:["Review ",f.stage,"/",f.total]})]})]},f.id)})]})]}),r.jsx(Mr,{toasts:E,onUndo:M,onDismiss:S})]})}const dt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},addBox:{background:"var(--surface)",borderRadius:12,padding:16,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column",gap:10},addRow:{display:"flex",gap:8,alignItems:"center"},editHint:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.4},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",minWidth:0},select:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 10px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},section:{marginBottom:20},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10},badge:{fontSize:11,fontWeight:700,background:"var(--hover)",color:"var(--text-2)",borderRadius:10,padding:"1px 7px"},reviewCard:{display:"flex",alignItems:"center",gap:12,background:"var(--surface)",borderRadius:10,padding:"12px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},checkbox:{width:22,height:22,borderRadius:6,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,padding:0},reviewTopic:{fontSize:13.5,fontWeight:600,marginBottom:4},reviewMeta:{display:"flex",alignItems:"center",gap:8},stageTag:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10},missedTag:{fontSize:11,color:"#C2536B",fontWeight:600},topicCard:{background:"var(--surface)",borderRadius:12,padding:"13px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},topicHead:{display:"flex",alignItems:"center",gap:8,marginBottom:10},dot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},topicName:{fontSize:14,fontWeight:600,flex:1},topicPillar:{fontSize:11,color:"var(--text-3)",fontWeight:500},topicProgress:{fontSize:11,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",padding:"2px 7px",borderRadius:10},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},reviewDots:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"},reviewDot:{width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",fontSize:11,fontWeight:700,padding:0},learnedDate:{fontSize:11,color:"var(--text-3)",marginLeft:"auto"},cementedToggle:{display:"flex",alignItems:"center",gap:8,border:"none",background:"none",cursor:"pointer",fontSize:13,fontWeight:700,color:"var(--text-2)",padding:"4px 0",fontFamily:"inherit",marginBottom:8},empty:{fontSize:13,color:"var(--text-3)",padding:"16px 0",textAlign:"center"},calCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calNav:{border:"none",background:"none",fontSize:20,cursor:"pointer",color:"var(--text-2)",padding:"0 6px",lineHeight:1},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4},calDay:{minHeight:62,border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,cursor:"pointer",fontFamily:"inherit",display:"flex",flexDirection:"column",alignItems:"stretch",justifyContent:"flex-start",gap:1,position:"relative",padding:"3px 4px",overflow:"hidden",textAlign:"left"},calDayNum:{fontSize:11,lineHeight:1.1,marginBottom:1},calItem:{fontSize:8.5,fontWeight:700,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",lineHeight:1.3,textAlign:"left"},calMore:{fontSize:8,fontWeight:700,opacity:.85,lineHeight:1.2},dayDetail:{marginTop:16,paddingTop:16,borderTop:"1px solid var(--border)"},dayDetailTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10}},Vi=[{id:1,title:"Regular Habits",cards:[{id:1,text:"1. I always do everything I need to do, when I need to do it. "},{id:2,text:"2. I never argue or let my emotions work against me. "},{id:3,text:"3. I have a good memory. I easily and automatically remember any name or anything that is important to me. "},{id:4,text:"4. I eat only what I should. "},{id:5,text:"5. I am a good listener. I hear everything that is said. I am attentive, interested, and aware of everything that is going on around me. "},{id:6,text:"6. I have the courage to state my opinions. I take responsibility for myself and everything I say and do."},{id:7,text:"7. I never spend more than I earn. I am financially responsible, both for my present and for my future."},{id:8,text:"8. I set goals and I follow them. I set my sights, take the appropriate action, and achieve my goals."},{id:9,text:"9. I spend time with my family and my loved ones. I enjoy sharing their lives with mine and my life with theirs."}]},{id:2,title:"Motivational",cards:[{id:1,text:"1. I can do anything I believe I can do. I’ve got it and every day I get more of it. I have talent, skills, and ability"},{id:2,text:"2. I set goals and I reach them. I know what I want out of life. I go after it and I get it. "},{id:3,text:"3. People like me, and I feel good about myself. I have a sense of pride in whoa am and I believe in myself. Nothing seems to stop me. I have a lot of determination. "},{id:4,text:"4. I turn problems into advantages. I find possibilities in things that other people never give a chance."},{id:5,text:"5. I have a lot of energy––I am very alive. I enjoy life and I can tell it and so can others"},{id:6,text:"6. I keep myself up, looking ahead, and liking it. I know that I can accomplish anything I choose, and I refuse to let anything negative hold me back or stand in my way. I am not afraid of anything or anyone. I have strength, power, conviction, and confidence. "},{id:7,text:"7. I like challenges and I meet them head on, face to face––today especially. I am on top of the world and I’m going for it. "},{id:8,text:"8. I have a clear picture in my mind of what I want. I can see it in front of me. "},{id:9,text:"9. I know what I want and I know how to get it. I know that it’s all up to me and I know I can do it. Roadblocks don’t bother me. They just mean that I am alive and running, and I’m not going to stand still for anything. "},{id:10,text:"10. I trust myself I’ve got what it takes––plenty of it––and I know how to use it. "},{id:11,text:"11. Today, more than ever. Today I am unstoppable. I’ve got myself together and I’m getting more together every day. And today––look out world, here I come. "},{id:12,text:"12. Limitations? I don’t even recognize them as limitations. There is no challenge I can’t conquer; there is no wall I can’t climb over. "},{id:13,text:"13. There is no problem I can’t defeat or turn around and make it work for me. I stand tall. I am honest and sincere. I like to deal with people and they like me. "},{id:14,text:"14. I think well; I think clearly. I am organized; I am in control of myself, and everything about me. I call my shots and no one has to call them for me. I never blame anyone else for the circumstances of my life. "},{id:15,text:"15. I accept my failings and move past them as easily as I accept the rewards for my victories. I never demand perfection of myself, but I expect the very best of what I have to give––and that’s what I get. I never give myself excuses. "},{id:16,text:"16. I get things done on time and in the right way. Today I have the inner strength to do more than ever. I am an exceptional human being. "},{id:17,text:"17. My goals and my incredible belief in myself turn my goals into reality. I have the power to live my dreams."},{id:18,text:"18.  I believe in them like I believe in myself. And that belief is so strong that there is nothing that diminishes my undefeatable spirit. "}]},{id:3,title:"Organized planning",cards:[{id:1,text:"1. I am organized and in control of my life. I am in control of myself, my thoughts, my time, my actions, and my future. "},{id:2,text:"2. I know what to do and when to do it, and I do everything I need to do, when I need to do it. "},{id:3,text:"3. I program my mind to make the maximum use of my time. I am in control of my time and how to use it. I like being organized, efficient, and on top of things."},{id:4,text:"4. Controlling my time keeps me that way. "},{id:5,text:"5. I never waste time––I always “plan” time. And because I plan my time, I always have time to do the things I choose to do. "},{id:6,text:"6. Each day I become more organized and in control of all areas of my life––at home, at work, in my mind and in my thoughts, in everything that I do. "},{id:7,text:"7. I am very well organized. Each night I make a list of things I need to do the next day. I set my priorities and I follow them. "},{id:8,text:"8. I am always on time. I am always right where I need to be, exactly when I need to be there. "},{id:9,text:"9. Being on time is easy for me and the more I control my time and the more organized I become, the easier it is. "},{id:10,text:"10. I am in control of my feelings, my emotions, my attitudes, and my needs. I control them; they do not control me. "},{id:11,text:"11. I have the winning vote in the outcome of my own actions. And I choose to live my life by choice, not chance. Therefore, I take the time to take control."},{id:12,text:"12. I have an organized and orderly mind. Because I think in an organized way, I conduct my life in an organized manner. "},{id:13,text:"13. I think in the most positive and productive way at all times and in all things. The way I think is the way I live––and I think “right.” "},{id:14,text:"14. I am the director of my destiny. I know where I am going and I know why I am going there. My earthly life is in my hands and in my control. "},{id:15,text:"15. I control my goals and the achievement of my goals. I organize my goals by writing each of them down, along with the steps I need to reach them. One of the reasons for my success is that my goals are clearly defined and organized."},{id:16,text:"16. I am in complete control of what I think and how I think. Therefore, I choose to think only those thoughts which help me and which are of genuine benefit to me."}]},{id:4,title:"Solving Problems",cards:[{id:1,text:"1. I’m good at solving problems. I like challenges and I meet them head on. "},{id:2,text:"2. Problems are my teachers. They help me to learn and grow. Without them, I would be going nowhere. With them, I am moving forward in the direction of my own goals. "},{id:3,text:"3. There is no problem which I cannot conquer. I am strong in mind, body, and spirit. My will, my strength, and my determination are always greater than any problem I face."},{id:4,text:"4. When I meet a new problem, I do not see the problem as my enemy. I know that finding the solution to the problem will move me forward in my own personal growth."},{id:5,text:"5. Because I know that problems are a key ingredient in my spiritual and mental education and preparation, I recognize that all problems are important to me. "},{id:6,text:"6. I do not fear problems, I solve them. I do not ignore problems, I confront them. I do not avoid problems, I conquer them. "},{id:7,text:"7. I know that every problem holds within itself the keys to its own solution. Therefore, the better I understand the problem, the clearer I am able to see its solution. "},{id:8,text:"8. Having problems is not a problem for me. I am confident, self-assured, positive, and determined. I always know that I am going to overcome any problem I encounter––and I always do. "},{id:9,text:"9. I am good at breaking large obstacles down into smaller pieces that are easier to handle. And I never make any problem appear to be larger than it actually is. "},{id:10,text:"10. I never worry. I turn “worry time” into positive, constructive, “solution time.” I keep my mind alert and open to all solutions—and solutions come quickly and easily to me. "},{id:11,text:"11. I have learned to recognize that many problems carry with them benefits and potential opportunities which would not have presented themselves had the problem not occurred in the first place. "},{id:12,text:"12. I do not seek to live a life which is free from all problems. Instead, I choose to live a life of finding solutions and enjoying the benefits which those solutions create."},{id:13,text:"13. Challenge, conquer, solution, and win are words which I live by daily. Challenges are opportunities. Conquering them is the inevitable outcome. "},{id:14,text:"14. “Solutions” are the stepping stones to my success, and “Winning” is my way of life."}]},{id:5,title:"Self Esteem",cards:[{id:1,text:"1. I really am very special. I like who I am and I feel good about myself. "},{id:2,text:"2. Although I always work to improve myself and I get better every day, I like who I am today. And tomorrow, when I’m even better, I’ll like myself then, too. "},{id:3,text:"3. It’s true that there really is no one else like me in the entire world. There never was another me before, and there will never be another me again. "},{id:4,text:"4. I am unique––from the top of my head to the bottom of my feet. In some ways I may look and act and sound like some others––but I am not them. I am me."},{id:5,text:"5. I wanted to be somebody––and now I know I am I would rather be me than anyone else in the world. "},{id:6,text:"6. I like how I feel and I like how I think and I like how I do things. I approve of me and I approve of who I am."},{id:7,text:"7. I have many beautiful qualities about me. I have talents and skills and abilities. I even have talents that I don’t even know about yet. And I am discovering new talents inside myself all the time. "},{id:8,text:"8. I am positive. I am confident. I radiate good things. If you look closely, you can even see a glow around me."},{id:9,text:"9. I am full of life. I like life and I’m glad to be alive. I am a very special person, living at a very special time. "},{id:10,text:"10. I am intelligent. My mind is quick and alert and clever and fun. I think good thoughts, and my mind makes things work right for me. "},{id:11,text:"11. I have a lot of energy and enthusiasm and vitality. I am exciting and I really enjoy being me. "},{id:12,text:"12. I like to be around other people and other people like to be around me. People like to hear what I have to say and know what I have to think. "},{id:13,text:"13. I smile a lot. I am happy on the inside and I am happy on the outside. "},{id:14,text:"14. I am interested in many things. I appreciate all the blessings I have, and the things that I learn, and all the things I will learn today and tomorrow and forever––just as long as I am. "},{id:15,text:"15. I am warm, sincere, honest, and genuine. I am all of these things and more. And all of these things are me. I like who I am, and I’m glad to be me."}]},{id:6,title:"Self-Responsibility",cards:[{id:1,text:"1. I take full responsibility for everything about me––even the thoughts that I think. I am in control of the vast resources of my own mind."},{id:2,text:"2. I alone am responsible for what I do and what I tell myself about me. No one can share this responsibility with me. "},{id:3,text:"3. I also allow others to accept their responsibilities far themselves and I do not try to accept their responsibilities for them. "},{id:4,text:"4. I enjoy being responsible. It puts me in charge of being me––and that’s a challenge I enjoy. "},{id:5,text:"5. I allow no one else, at any time, to assume control or responsibility over my life or over anything that I do. My responsibility to others is an extension of my own responsibility to myself. "},{id:6,text:"6. I choose to leave nothing about me up to chance. When it comes to me––and anything in my life––I choose to CHOOSE. "},{id:7,text:"7. My choices are mine alone to make for myself. I do not, at any time, allow anyone else to make my choices for me. And I accept full responsibility for every choice and decision I make. "},{id:8,text:"8. I always meet all of the obligations which I accept. And I accept no obligations which I will not meet. "},{id:9,text:"9. I am trustworthy. I can be counted on. I have accepted winning responsibility for myself––and I always live up to the responsibilities I accept. "},{id:10,text:"10. There is no they on whom I lay the blame, or with whom I share my own personal responsibilities. I have learned the great secret of mastering my own destiny. I have learned that “they” is “me.” "},{id:11,text:"11. I have no need to make excuses and no one needs to carry my responsibility for me. I gladly carry my own weight––and I carry it well. "},{id:12,text:"12. Each day I acknowledge and accept the responsibility––not only for my own actions––but also for my emotions, my thoughts, and my attitude. "},{id:13,text:"13. I accept the responsibility for living my life in a way which creates my strengths, my happiness, my positive, healthy beliefs, and for my past, my present, and my future."}]},{id:7,title:"Freedom from worry",cards:[{id:1,text:"1. I never worry. Instead of worrying, I find solutions and I act on them. "},{id:2,text:"2. My mind is constantly in tune with the positive. It is bright, cheerful, enthusiastic, and full of good, positive thoughts and ideas. "},{id:3,text:"3. I am able to relax easily and comfortably in my body and in my mind. I am calm, confident, and self-assured. "},{id:4,text:"4. My mind is orderly and well-organized. I consciously choose what I think and I always choose those thoughts which are the most positive and beneficial for me. "},{id:5,text:"5. All of my thoughts create healthiness within me. My mind dwells only on those thoughts which create more harmony, balance, and well-being within me and in the world around me. "},{id:6,text:"6. I automatically, and always, think in a decisive and determined way. "},{id:7,text:"7. I am full of resolution and the absolute assurance of the best possible outcome in everything that I do. "},{id:8,text:"8. I choose to look at the world around me in the bright, healthy light of optimism and self-assurance. "},{id:9,text:"9. I do only those things which are best for me. I create the best within myself, I attract the best in others, and I find the best in the world around me. "},{id:10,text:"10. I willingly, and without fail, take care of the duties and obligations which I have accepted for myself."},{id:11,text:"11. I commit only to those responsibilities which I know I can fulfill. "},{id:12,text:"12. I focus the attention of my mind only on those things that I can do something about. If I cannot affect it or direct it––I accept it. "},{id:13,text:"13. I keep my mind too busy thinking good, healthy, positive, constructive, and productive thoughts to ever have any time for worry. "},{id:14,text:"14. I control the thoughts I choose. No thought, at any time, can dwell in my mind without my approval or permission. I never worry."}]},{id:8,title:"Eating Habits",cards:[{id:1,text:"1. I am in control of myself in every way––at all times and in all situations. "},{id:2,text:"2. Each time I sit down to eat I reaffirm my determination to achieve my goal. By eating right, and never giving in, I am reaching the weight I want. "},{id:3,text:"3. Whether eating in or eating out, I really enjoy eating less. "},{id:4,text:"4. I never feel the need to finish the food in front of me. I eat only what I should––and never one bite more. "},{id:5,text:"5. One way to weight-loss that’s easy and works, is less food on my plate, and less on my fork. "},{id:6,text:'6. By ordering less when I eat out, and by serving myself smaller portions at home, I keep myself aware of the importance of staying with my goal––each and every day. “Less on my plate means less on my waist."'},{id:7,text:"7. When I sit down to eat, at no time do I allow anyone else to influence, tempt, or discourage me in any negative way."},{id:8,text:"8. What I eat, and the goals I reach, are up to me. And I give no one the right to hinder or control my success."},{id:9,text:"9. Although others may benefit from my success, I. am achieving my weight-loss goals for my own personal reasons––for myself, my life, my future, and my own personal well-being."},{id:10,text:"10. I am never, at any time, tempted to take one bite more than I should. I am strong, I am capable of reaching my goal, and I am doing it."},{id:11,text:"11. Being in situations which put a lot of food in front of me is not a problem to me now. I simply say “No” to the food and “Yes” to my success."},{id:12,text:"12. I enjoy sitting down to eat. Each time I do I conquer my past, and I create a trimmer, happier, more self-confident future in front of me. "},{id:13,text:"13. When I sit down to eat, I do not need someone else to remind me of my goal, or to keep me from eating something I should not. I take full responsibility for myself, and no one else has to do it for me. "},{id:14,text:"14. Controlling my weight, and my appetite, is easy for me now. I enjoy smaller portions, smaller bites, and a slower, healthier, more relaxed way of eating. "},{id:15,text:"15. I have set my goal and I am staying with it. I have turned mealtime into “achievement time.”"}]}],Wg=["#3A7CA5","#4C9A6B","#C2773B","#8268B0","#C2536B","#C9A227","#3A7CA5","#4C9A6B"],Nl=t=>Wg[t%Wg.length],r0=t=>t+"1A",$b="anvil_affirmation_favs",n0=()=>{try{return new Set(JSON.parse(localStorage.getItem($b)||"[]"))}catch{return new Set}};function o0(){const[t,e]=g.useState(0),[n,o]=g.useState(0),[i,s]=g.useState(n0);g.useEffect(()=>{localStorage.setItem($b,JSON.stringify([...i]))},[i]);const l=(T,b)=>`${T}#${b.id}`,a=t==="FAV"?Vi.flatMap((T,b)=>T.cards.filter(u=>i.has(l(T.title,u))).map(u=>({...u,color:Nl(b),title:T.title}))):Vi[t].cards.map(T=>({...T,color:Nl(t),title:Vi[t].title})),d=a.length,c=Math.min(n,Math.max(0,d-1)),p=a[c],y=T=>{e(T),o(0)},m=g.useCallback(()=>o(T=>Math.max(0,T-1)),[]),j=g.useCallback(()=>o(T=>Math.min(d-1,T+1)),[d]);g.useEffect(()=>{const T=b=>{b.key==="ArrowLeft"&&m(),b.key==="ArrowRight"&&j()};return window.addEventListener("keydown",T),()=>window.removeEventListener("keydown",T)},[m,j]);const x=T=>s(b=>{const u=new Set(b);return u.has(T)?u.delete(T):u.add(T),u}),k=p?p.color:"#8268B0";return r.jsxs("div",{style:Vt.page,children:[r.jsxs("div",{style:Vt.head,children:[r.jsx("div",{style:Vt.eyebrow,children:"Anvil · Affirmations"}),r.jsx("h1",{style:Vt.h1,children:"Affirmations"}),r.jsx("div",{style:Vt.subhead,children:"One at a time — read it, mean it."})]}),r.jsxs("div",{style:Vt.filterBar,children:[Vi.map((T,b)=>{const u=t===b,h=Nl(b);return r.jsxs("button",{onClick:()=>y(b),style:{...Vt.chip,...u?{background:h,color:"#fff",borderColor:h}:{}},children:[r.jsx("span",{style:{...Vt.catDot,background:u?"#fff":h}})," ",T.title," ",r.jsx("span",{style:Vt.chipCount,children:T.cards.length})]},T.title)}),r.jsxs("button",{onClick:()=>y("FAV"),style:{...Vt.chip,...t==="FAV"?{background:"#C9A227",color:"#fff",borderColor:"#C9A227"}:{}},children:[r.jsx(us,{size:12,fill:t==="FAV"?"#fff":"none"})," Favorites ",r.jsx("span",{style:Vt.chipCount,children:i.size})]})]}),d===0?r.jsxs("div",{style:Vt.empty,children:[r.jsx(us,{size:22,color:"#C3BFB5"}),r.jsx("div",{children:"No favorites yet — tap the star on a card to save it here."})]}):r.jsxs("div",{style:Vt.viewer,children:[r.jsxs("div",{style:{...Vt.card,borderTop:`4px solid ${k}`},children:[r.jsx("div",{style:{...Vt.cardCat,color:k,background:r0(k)},children:p.title}),r.jsx("button",{onClick:()=>x(l(p.title,p)),style:{...Vt.favBtn,color:i.has(l(p.title,p))?"#C9A227":"#C3BFB5"},title:"Favorite",children:r.jsx(us,{size:20,fill:i.has(l(p.title,p))?"#C9A227":"none"})}),r.jsx(Rb,{size:30,color:k,style:{opacity:.25}}),r.jsx("p",{style:Vt.cardText,children:p.text.trim()})]}),r.jsxs("div",{style:Vt.navRow,children:[r.jsxs("button",{onClick:m,disabled:c===0,style:{...Vt.navBtn,...c===0?Vt.navBtnDisabled:{}},children:[r.jsx(zn,{size:18})," Back"]}),r.jsxs("span",{style:{...Vt.counter,color:k},children:[c+1," ",r.jsxs("span",{style:Vt.counterTotal,children:["/ ",d]})]}),r.jsxs("button",{onClick:j,disabled:c===d-1,style:{...Vt.navBtn,...c===d-1?Vt.navBtnDisabled:{}},children:["Next ",r.jsx(sn,{size:18})]})]}),r.jsx("div",{style:Vt.dots,children:a.map((T,b)=>r.jsx("button",{onClick:()=>o(b),style:{...Vt.dot,...b===c?{background:k,transform:"scale(1.5)"}:{}},title:`${b+1}`},b))})]})]})}const Vt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},filterBar:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:22},chip:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipCount:{fontSize:11,fontWeight:700,opacity:.7},catDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},empty:{display:"flex",flexDirection:"column",alignItems:"center",gap:10,fontSize:13.5,color:"var(--text-3)",padding:"56px 12px",textAlign:"center",background:"var(--surface)",borderRadius:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},viewer:{display:"flex",flexDirection:"column",alignItems:"center"},card:{position:"relative",background:"var(--surface)",borderRadius:16,padding:"40px 32px 44px",boxShadow:"0 4px 20px rgba(0,0,0,0.07)",width:"100%",minHeight:240,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",boxSizing:"border-box"},cardCat:{position:"absolute",top:16,left:16,fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:12,textTransform:"uppercase",letterSpacing:"0.04em"},favBtn:{position:"absolute",top:14,right:14,border:"none",background:"none",cursor:"pointer",padding:4,display:"grid",placeItems:"center"},cardText:{fontSize:21,lineHeight:1.55,margin:"14px 0 0",fontWeight:500,color:"var(--text)",fontFamily:"'Fraunces',Georgia,serif",maxWidth:560},navRow:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",maxWidth:420,marginTop:22},navBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},counter:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},counterTotal:{fontSize:13,fontWeight:600,color:"var(--text-3)"},dots:{display:"flex",gap:6,flexWrap:"wrap",justifyContent:"center",marginTop:20,maxWidth:480},dot:{width:7,height:7,borderRadius:"50%",border:"none",background:"var(--border)",cursor:"pointer",padding:0,transition:"transform 0.12s"}},$e={financial:{label:"Financial",leaf:"#C9A227",shape:"round"},academic:{label:"Academic",leaf:"#3A7CA5",shape:"pine"},relationship:{label:"Relationship",leaf:"#C2536B",shape:"round"},spiritual:{label:"Spiritual",leaf:"#8268B0",shape:"tall"},health:{label:"Health",leaf:"#4C9A6B",shape:"round"}},uo="health";function rc({species:t=uo,progress:e=1,withered:n=!1,size:o=200}){const i=Math.max(0,Math.min(1,e)),s=$e[t]||$e[uo],l=n?"#8A7B63":"#7A5A3C",a=n?"#A99C84":s.leaf,d=n?"#8F8268":a,c=14+i*46,p=112-c,y=i>.14,m=y?8+i*30:0;return r.jsxs("svg",{viewBox:"0 0 120 120",width:o,height:o,style:{display:"block"},children:[r.jsx("ellipse",{cx:"60",cy:"114",rx:20+i*14,ry:"5",fill:"rgba(38,36,31,0.08)"}),!y&&r.jsxs("g",{transform:`translate(60 ${112-i*40})`,children:[r.jsx("path",{d:"M0 8 C0 8 0 -2 0 -6",stroke:"#4C9A6B",strokeWidth:"2.5",fill:"none"}),r.jsx("ellipse",{cx:"-5",cy:"-4",rx:"6",ry:"3.5",fill:"#4C9A6B",transform:"rotate(-30 -5 -4)"}),r.jsx("ellipse",{cx:"5",cy:"-4",rx:"6",ry:"3.5",fill:"#5BB07E",transform:"rotate(30 5 -4)"})]}),y&&r.jsxs(r.Fragment,{children:[r.jsx("rect",{x:60-(2+i*2.5),y:p,width:(2+i*2.5)*2,height:c,rx:"2",fill:l}),s.shape==="pine"?r.jsxs(r.Fragment,{children:[r.jsx("polygon",{points:`60,${p-m*2.2} ${60-m},${p+4} ${60+m},${p+4}`,fill:a}),r.jsx("polygon",{points:`60,${p-m*3} ${60-m*.8},${p-m*.7} ${60+m*.8},${p-m*.7}`,fill:d})]}):s.shape==="tall"?r.jsxs(r.Fragment,{children:[r.jsx("ellipse",{cx:"60",cy:p-m*.3,rx:m*.78,ry:m*1.55,fill:a}),r.jsx("ellipse",{cx:"60",cy:p-m*.9,rx:m*.5,ry:m*1,fill:d,opacity:"0.9"})]}):r.jsxs(r.Fragment,{children:[r.jsx("circle",{cx:"60",cy:p,r:m,fill:a}),r.jsx("circle",{cx:60-m*.7,cy:p+m*.3,r:m*.78,fill:a}),r.jsx("circle",{cx:60+m*.7,cy:p+m*.3,r:m*.78,fill:d}),r.jsx("circle",{cx:"60",cy:p-m*.5,r:m*.8,fill:d,opacity:"0.92"})]})]})]})}function i0({species:t}){return r.jsx(rc,{species:t,progress:1,size:56})}const s0=[{id:"day",label:"Day"},{id:"week",label:"Week"},{id:"month",label:"Month"},{id:"year",label:"Year"}],jr=t=>t>=60?`${Math.floor(t/60)}h ${t%60}m`:`${t}m`,l0=t=>{const e=t<12?"am":"pm",n=t%12===0?12:t%12;return`${String(n).padStart(2,"0")} ${e}`};function a0(t){const e=t<=60?10:t<=120?20:t<=300?60:120,n=Math.max(60,Math.ceil((t||1)/e)*e),o=[];for(let i=0;i<=n;i+=e)o.push(i);return{max:n,ticks:o}}const Nb=t=>{const e=new Date(t);return e.setHours(0,0,0,0),e},d0=t=>{const e=Nb(t),n=(e.getDay()+6)%7;return e.setDate(e.getDate()-n),e},c0=t=>new Date(t.getFullYear(),t.getMonth(),1),g0=t=>new Date(t.getFullYear(),0,1);function u0(t,e){if(t==="day"){const i=Nb(e);return{start:i,end:new Date(+i+864e5),prev:new Date(+i-864e5),prev2:new Date(+i-2*864e5)}}if(t==="week"){const i=d0(e);return{start:i,end:new Date(+i+7*864e5),prev:new Date(+i-7*864e5),prev2:new Date(+i-14*864e5)}}if(t==="month"){const i=c0(e),s=e.getFullYear(),l=e.getMonth();return{start:i,end:new Date(s,l+1,1),prev:new Date(s,l-1,1),prev2:new Date(s,l-2,1)}}const n=e.getFullYear();return{start:g0(e),end:new Date(n+1,0,1),prev:new Date(n-1,0,1),prev2:new Date(n-2,0,1)}}function p0({sessions:t=[],onBack:e}){const[n,o]=g.useState("day"),i=new Date,{start:s,end:l,prev:a,prev2:d}=u0(n,i),c=rt=>new Date(rt.started_at||rt.created_at),p=t.filter(rt=>rt.completed),y=(rt,ht,U)=>{const O=c(rt);return O>=ht&&O<U},m=(rt,ht)=>p.filter(U=>y(U,rt,ht)).reduce((U,O)=>U+(O.actual_min||0),0),j=p.filter(rt=>y(rt,s,l)),x=j.reduce((rt,ht)=>rt+(ht.actual_min||0),0),k=m(a,s),T=m(d,a),b=j.length,u=Array(24).fill(0);j.forEach(rt=>{u[c(rt).getHours()]+=rt.actual_min||0});const h=Math.max(...u,0),z=a0(h),v={};j.forEach(rt=>{const ht=$e[rt.tree]?rt.tree:uo;v[ht]=(v[ht]||0)+(rt.actual_min||0)});const I=Object.entries(v).map(([rt,ht])=>({name:$e[rt].label,min:ht,color:$e[rt].leaf})).sort((rt,ht)=>ht.min-rt.min),L=k>0?Math.round((x-k)/k*100):x>0?100:0,R=L>0?Fb:L<0?Ab:Kh,E=L>0?"#4C9A6B":L<0?"#C2536B":"#9A968C",M={day:"yesterday",week:"last week",month:"last month",year:"last year"}[n],S={day:"2 days ago",week:"2 weeks ago",month:"2 months ago",year:"2 years ago"}[n],A=54,w=22,Y=2*Math.PI*A;let lt=0;return r.jsxs("div",{style:yt.page,children:[r.jsxs("div",{style:yt.topbar,children:[r.jsxs("button",{onClick:e,style:yt.back,children:[r.jsx(wb,{size:18})," Grove"]}),r.jsx("h1",{style:yt.h1,children:"Insights"}),r.jsx("div",{style:{width:76}})]}),r.jsx("div",{style:yt.rangeBar,children:s0.map(rt=>r.jsx("button",{onClick:()=>o(rt.id),style:{...yt.rangeBtn,...n===rt.id?yt.rangeOn:{}},children:rt.label},rt.id))}),r.jsxs("div",{style:yt.headline,children:[r.jsxs("div",{style:yt.bigStat,children:[r.jsx("div",{style:yt.bigVal,children:jr(x)}),r.jsxs("div",{style:yt.bigLbl,children:["Focused this ",n]})]}),r.jsxs("div",{style:yt.bigStat,children:[r.jsx("div",{style:yt.bigVal,children:b}),r.jsx("div",{style:yt.bigLbl,children:"Trees"})]})]}),r.jsxs("div",{style:yt.card,children:[r.jsxs("div",{style:yt.cardHead,children:[r.jsxs("div",{style:yt.cardTitle,children:["Your forest this ",n]}),r.jsx("div",{style:yt.cardHint,children:"Each tree is a completed session — bigger means longer focus"})]}),r.jsx(f0,{sessions:j}),r.jsxs("div",{style:yt.forestNumber,children:[b," ",b===1?"tree":"trees"," · ",jr(x)," focused"]})]}),r.jsx(Ol,{title:"Focus distribution",hint:"Minutes focused at each time of day",children:h===0?r.jsx(_g,{}):r.jsx(m0,{hours:u,axis:z})}),r.jsx(Ol,{title:"Pillar distribution",hint:"How your focus splits across the five trees",children:I.length===0?r.jsx(_g,{}):r.jsxs("div",{style:yt.donutWrap,children:[r.jsxs("svg",{viewBox:"0 0 140 140",width:"150",height:"150",style:{flexShrink:0},children:[I.map(rt=>{const ht=rt.min/(x||1)*Y,U=r.jsx("circle",{cx:"70",cy:"70",r:A,fill:"none",stroke:rt.color,strokeWidth:w,strokeDasharray:`${ht} ${Y-ht}`,strokeDashoffset:-lt,transform:"rotate(-90 70 70)"},rt.name);return lt+=ht,U}),r.jsx("text",{x:"70",y:"66",textAnchor:"middle",style:yt.donutCenterTop,children:jr(x)}),r.jsx("text",{x:"70",y:"82",textAnchor:"middle",style:yt.donutCenterSub,children:"total"})]}),r.jsx("div",{style:yt.legend,children:I.map(rt=>r.jsxs("div",{style:yt.legendRow,children:[r.jsx("span",{style:{...yt.legendDot,background:rt.color}}),r.jsx("span",{style:yt.legendName,children:rt.name}),r.jsxs("span",{style:yt.legendVal,children:[jr(rt.min)," · ",Math.round(rt.min/(x||1)*100),"%"]})]},rt.name))})]})}),r.jsxs(Ol,{title:"Focus trend",hint:`This ${n} vs the previous two`,children:[r.jsxs("div",{style:yt.trend3,children:[r.jsxs("div",{style:yt.trendCol,children:[r.jsx("div",{style:yt.trendVal,children:jr(x)}),r.jsxs("div",{style:yt.trendLbl,children:["This ",n]})]}),r.jsxs("div",{style:yt.trendCol,children:[r.jsx("div",{style:{...yt.trendVal,color:"var(--text-2)"},children:jr(k)}),r.jsx("div",{style:yt.trendLbl,children:M})]}),r.jsxs("div",{style:yt.trendCol,children:[r.jsx("div",{style:{...yt.trendVal,color:"var(--text-3)"},children:jr(T)}),r.jsx("div",{style:yt.trendLbl,children:S})]})]}),r.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:14},children:r.jsxs("div",{style:{...yt.trendBadge,color:E,background:E+"1A"},children:[r.jsx(R,{size:15})," ",L>0?"+":"",L,"% vs ",M]})}),r.jsx(h0,{items:[{label:`This ${n}`,value:x,color:"#4C9A6B"},{label:M,value:k,color:"var(--text-3)"},{label:S,value:T,color:"var(--text-3)"}]})]})]})}const b0=t=>t===0?"12a":t<12?`${t}a`:t===12?"12p":`${t-12}p`;function m0({hours:t,axis:e}){return r.jsxs("div",{children:[r.jsxs("div",{style:yt.vcPlot,children:[e.ticks.map(n=>r.jsxs("div",{style:{...yt.vcGridRow,bottom:`${n/e.max*100}%`},children:[r.jsx("span",{style:yt.vcYLabel,children:n}),r.jsx("div",{style:yt.vcGridLine})]},n)),r.jsx("div",{style:yt.vcBars,children:t.map((n,o)=>r.jsx("div",{style:yt.vcCell,title:`${l0(o)} · ${n} min`,children:r.jsx("div",{style:{...yt.vcBar,height:n>0?`max(3px, ${n/e.max*100}%)`:0}})},o))})]}),r.jsx("div",{style:yt.vcXAxis,children:t.map((n,o)=>r.jsx("div",{style:yt.vcXCell,children:o%3===0?b0(o):""},o))}),r.jsx("div",{style:yt.vcYTitle,children:"minutes focused, by hour of day"})]})}function f0({sessions:t}){if(!t.length)return r.jsx("div",{style:yt.sceneEmpty,children:"No trees yet this period. 🌱"});const n=t.slice(0,80),o=t.length-n.length,i=s=>Math.round(Math.max(40,Math.min(88,40+(s||0)*.6)));return r.jsxs("div",{children:[r.jsx("div",{style:yt.scene,children:n.map(s=>r.jsx("div",{style:yt.sceneTree,title:`${s.label||"Focus"} · ${jr(s.actual_min||s.duration_min)}`,children:r.jsx(rc,{species:s.tree,progress:1,size:i(s.actual_min||s.duration_min)})},s.id))}),o>0&&r.jsxs("div",{style:yt.overflow,children:["+",o," more trees"]})]})}function Ol({title:t,hint:e,children:n}){return r.jsxs("div",{style:yt.card,children:[r.jsxs("div",{style:yt.cardHead,children:[r.jsx("div",{style:yt.cardTitle,children:t}),e&&r.jsx("div",{style:yt.cardHint,children:e})]}),n]})}function _g(){return r.jsx("div",{style:yt.empty,children:"No focus sessions in this period yet. 🌱"})}function h0({items:t}){const e=Math.max(1,...t.map(n=>n.value));return r.jsx("div",{style:yt.tbWrap,children:t.map(n=>r.jsxs("div",{style:yt.tbRow,children:[r.jsx("div",{style:yt.tbLbl,children:n.label}),r.jsx("div",{style:yt.tbTrack,children:r.jsx("div",{style:{...yt.tbBar,width:`${n.value/e*100}%`,background:n.color}})}),r.jsx("div",{style:yt.tbVal,children:jr(n.value)})]},n.label))})}const yt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"20px 16px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:720,margin:"0 auto"},topbar:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16},back:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},h1:{fontSize:20,fontWeight:700,margin:0,fontFamily:"'Fraunces',Georgia,serif"},rangeBar:{display:"flex",gap:6,background:"var(--surface)",padding:5,borderRadius:12,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},rangeBtn:{flex:1,border:"none",background:"none",padding:"9px 0",borderRadius:8,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},rangeOn:{background:"var(--accent-strong)",color:"#fff"},headline:{display:"flex",gap:12,marginBottom:16},bigStat:{flex:1,background:"var(--surface)",borderRadius:14,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},bigVal:{fontSize:26,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em"},bigLbl:{fontSize:12,color:"var(--text-3)",marginTop:3,fontWeight:500},card:{background:"var(--surface)",borderRadius:16,padding:"18px 18px 20px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:16},cardHead:{marginBottom:14},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardHint:{fontSize:12,color:"var(--text-3)",marginTop:2},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"24px 0"},scene:{display:"flex",flexWrap:"wrap",alignItems:"flex-end",justifyContent:"center",gap:"0 2px",padding:"14px 8px 6px",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,minHeight:110,border:"1px solid var(--border)"},sceneTree:{lineHeight:0},sceneEmpty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"34px 0",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,border:"1px solid var(--border)"},overflow:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",marginTop:6,fontWeight:600},forestNumber:{textAlign:"center",marginTop:12,fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},vcPlot:{position:"relative",height:180,paddingLeft:30},vcGridRow:{position:"absolute",left:0,right:0,display:"flex",alignItems:"center",height:0},vcYLabel:{width:26,marginRight:4,textAlign:"right",fontSize:9,color:"var(--text-3)",fontWeight:600,flexShrink:0},vcGridLine:{flex:1,height:1,background:"#EEEBE4"},vcBars:{position:"absolute",left:30,right:0,top:0,bottom:0,display:"flex",alignItems:"flex-end",gap:1},vcCell:{flex:1,height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"center"},vcBar:{width:"72%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",transition:"height 0.3s"},vcXAxis:{display:"flex",marginLeft:30,marginTop:4},vcXCell:{flex:1,textAlign:"center",fontSize:8.5,color:"var(--text-3)",fontWeight:600,overflow:"hidden"},vcYTitle:{textAlign:"center",fontSize:9.5,color:"var(--text-3)",marginTop:6,letterSpacing:"0.06em",textTransform:"uppercase",fontWeight:600},donutWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap",justifyContent:"center"},donutCenterTop:{fontSize:16,fontWeight:800,fill:"var(--text)",fontFamily:"'Fraunces',Georgia,serif"},donutCenterSub:{fontSize:9,fill:"#9A968C",textTransform:"uppercase",letterSpacing:"0.08em"},legend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8},legendDot:{width:11,height:11,borderRadius:3,flexShrink:0},legendName:{flex:1,fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},legendVal:{fontSize:12,color:"var(--text-3)",fontWeight:600,flexShrink:0},trend3:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12,gap:8},trendCol:{textAlign:"center",flex:1},trendVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},trendLbl:{fontSize:11,color:"var(--text-3)",marginTop:2},trendBadge:{display:"inline-flex",alignItems:"center",gap:4,fontSize:13,fontWeight:800,padding:"6px 12px",borderRadius:20,width:"fit-content"},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:78,fontSize:11,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},tbTrack:{flex:1,height:14,background:"#F2F0EA",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:56,fontSize:11,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"}},y0=[15,30,45,60,90],Hl="anvil_grove_active",Lg=t=>`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`,Os=t=>t>=60?`${Math.floor(t/60)}h ${t%60}m`:`${t}m`;function x0(){const[t,e]=g.useState("timer"),[n,o]=g.useState("idle"),[i,s]=g.useState(15),[l,a]=g.useState(!1),[d,c]=g.useState(""),[p,y]=g.useState(uo),[m,j]=g.useState(()=>localStorage.getItem("anvil_grove_deepfocus")!=="0"),[x,k]=g.useState(15*60),[T,b]=g.useState({sessions:[],stats:null}),u=g.useRef(null),h=g.useRef(null),z=g.useRef(!1),v=g.useCallback(async()=>{try{b(await G.getFocus())}catch{}},[]),I=g.useCallback(async(P,F)=>{if(!z.current){z.current=!0,localStorage.removeItem(Hl);try{await G.createFocus({label:d.trim()||null,tree:p,duration_min:i,actual_min:F,completed:P,started_at:h.current,ended_at:new Date().toISOString()})}catch{}v()}},[d,p,i,v]),L=g.useCallback(()=>{if(n!=="running")return;const P=h.current?Math.round((Date.now()-new Date(h.current).getTime())/6e4):0;o("failed"),I(!1,Math.max(0,Math.min(i,P)))},[n,i,I]),R=g.useCallback(()=>{o("done"),k(0),I(!0,i)},[i,I]);g.useEffect(()=>{v();const P=JSON.parse(localStorage.getItem(Hl)||"null");if(P&&P.endTime){const F=Math.round((P.endTime-Date.now())/1e3);s(P.duration),c(P.label||""),y(P.tree||"oak"),u.current=P.endTime,h.current=P.startedAt,F>0?(k(F),o("running")):(o("done"),z.current=!1,I(!0,P.duration))}},[]),g.useEffect(()=>{if(n!=="running")return;const P=()=>{const f=Math.round((u.current-Date.now())/1e3);if(f<=0){R();return}k(f)};P();const F=setInterval(P,250);return()=>clearInterval(F)},[n,R]),g.useEffect(()=>{if(n!=="running"||!m)return;const P=()=>{document.hidden&&L()};return document.addEventListener("visibilitychange",P),()=>document.removeEventListener("visibilitychange",P)},[n,m,L]),g.useEffect(()=>{const P=()=>{!document.hidden&&n!=="running"&&v()};window.addEventListener("focus",P),document.addEventListener("visibilitychange",P);const F=setInterval(P,6e4);return()=>{window.removeEventListener("focus",P),document.removeEventListener("visibilitychange",P),clearInterval(F)}},[v,n]);const E=()=>j(P=>{const F=!P;return localStorage.setItem("anvil_grove_deepfocus",F?"1":"0"),F}),M=()=>{z.current=!1,h.current=new Date().toISOString(),u.current=Date.now()+i*60*1e3,localStorage.setItem(Hl,JSON.stringify({endTime:u.current,duration:i,label:d,tree:p,startedAt:h.current})),k(i*60),o("running")},S=()=>{o("idle"),k(i*60)},A=P=>{a(!1),s(P),k(P*60)},w=()=>{l||(a(!0),s(5),k(5*60))},Y=P=>{if(a(!0),P===""){s(0),k(0);return}const F=Math.max(1,Math.min(600,parseInt(P,10)||0));s(F),k(F*60)},lt=i*60,rt=n==="running"?1-x/lt:n==="done"?1:0,ht=130,U=2*Math.PI*ht,O=U*(1-(n==="running"?rt:n==="done"?1:0)),q=T.stats;return t==="stats"?r.jsx(p0,{sessions:T.sessions,onBack:()=>e("timer")}):r.jsxs("div",{style:Ct.page,children:[r.jsxs("div",{style:Ct.head,children:[r.jsx("div",{style:Ct.eyebrow,children:"Anvil · Grove"}),r.jsx("h1",{style:Ct.h1,children:"Grove"}),r.jsx("div",{style:Ct.subhead,children:"Plant a tree, stay focused, grow your grove."}),r.jsxs("button",{onClick:()=>e("stats"),style:Ct.insightsBtn,disabled:n==="running",children:[r.jsx(Fh,{size:15})," Insights"]})]}),q&&r.jsxs("div",{style:Ct.statRow,children:[r.jsx(Qi,{label:"Today",value:Os(q.today_minutes)}),r.jsx(Qi,{label:"Trees",value:q.trees}),r.jsx(Qi,{label:"Streak",value:`${q.streak}d`}),r.jsx(Qi,{label:"Success",value:`${q.success_rate}%`})]}),r.jsxs("div",{style:Ct.stage,children:[r.jsxs("div",{style:Ct.ringWrap,children:[r.jsxs("svg",{width:"300",height:"300",viewBox:"0 0 300 300",style:{position:"absolute",inset:0},children:[r.jsx("circle",{cx:"150",cy:"150",r:ht,fill:"none",stroke:"var(--border)",strokeWidth:"10"}),r.jsx("circle",{cx:"150",cy:"150",r:ht,fill:"none",stroke:n==="failed"?"#C2536B":"#4C9A6B",strokeWidth:"10",strokeLinecap:"round",strokeDasharray:U,strokeDashoffset:O,transform:"rotate(-90 150 150)",style:{transition:"stroke-dashoffset 0.4s linear"}})]}),r.jsx("div",{style:Ct.ringInner,children:r.jsx(rc,{species:p,progress:n==="idle"?0:rt,withered:n==="failed",size:170})})]}),n==="idle"&&r.jsxs(r.Fragment,{children:[r.jsx("div",{style:Ct.timeBig,children:Lg(i*60)}),r.jsxs("div",{style:Ct.controls,children:[r.jsxs("div",{style:Ct.chips,children:[y0.map(P=>r.jsxs("button",{onClick:()=>A(P),style:{...Ct.chip,...!l&&i===P?Ct.chipOn:{}},children:[P,"m"]},P)),r.jsx("button",{onClick:w,style:{...Ct.chip,...l?Ct.chipOn:{}},children:"Custom"})]}),l&&r.jsxs("div",{style:Ct.customRow,children:[r.jsx("input",{type:"number",min:"1",max:"600",inputMode:"numeric",autoFocus:!0,value:i||"",onChange:P=>Y(P.target.value),placeholder:"e.g. 50",style:Ct.customInput}),r.jsx("span",{style:Ct.customUnit,children:"minutes"})]}),r.jsx("input",{value:d,onChange:P=>c(P.target.value),placeholder:"What are you focusing on? (optional)",style:Ct.input,maxLength:60}),r.jsx("div",{style:Ct.treePick,children:Object.entries($e).map(([P,F])=>r.jsxs("button",{onClick:()=>y(P),title:F.label,style:{...Ct.treeBtn,...p===P?{borderColor:F.leaf,background:F.leaf+"1A"}:{}},children:[r.jsx("span",{style:{...Ct.treeDot,background:F.leaf}}),F.label]},P))}),r.jsxs("button",{onClick:E,style:Ct.toggleRow,children:[r.jsxs("div",{style:{textAlign:"left"},children:[r.jsx("div",{style:Ct.toggleTitle,children:"Deep Focus"}),r.jsx("div",{style:Ct.toggleHint,children:m?"Leaving the app kills the tree":"Tree survives until you give up"})]}),r.jsx("div",{style:{...Ct.switch,...m?Ct.switchOn:{}},children:r.jsx("div",{style:{...Ct.knob,...m?Ct.knobOn:{}}})})]}),r.jsx("button",{onClick:M,disabled:i<1,style:{...Ct.plantBtn,...i<1?{opacity:.5,cursor:"not-allowed"}:{}},children:"Plant tree"})]})]}),n==="running"&&r.jsxs(r.Fragment,{children:[r.jsx("div",{style:Ct.timeBig,children:Lg(x)}),r.jsx("div",{style:Ct.focusLabel,children:d.trim()||"Focusing…"}),r.jsx("div",{style:m?Ct.warn:Ct.warnSoft,children:m?"⚠ Deep Focus on — leaving this app will kill your tree.":"🌿 Relaxed mode — only Give up ends this session."}),r.jsx("button",{onClick:L,style:Ct.giveUp,children:"Give up"})]}),n==="done"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:Ct.resultTitle,children:["🌳 You grew a ",$e[p].label," tree!"]}),r.jsxs("div",{style:Ct.resultSub,children:[Os(i)," of focus added to your grove."]}),r.jsx("button",{onClick:S,style:Ct.plantBtn,children:"Plant another"})]}),n==="failed"&&r.jsxs(r.Fragment,{children:[r.jsx("div",{style:{...Ct.resultTitle,color:"#C2536B"},children:"Your tree withered."}),r.jsx("div",{style:Ct.resultSub,children:"You left before the timer finished. Try again?"}),r.jsx("button",{onClick:S,style:Ct.plantBtn,children:"Try again"})]})]}),r.jsx(v0,{sessions:T.sessions,onDelete:async P=>{await G.deleteFocus(P),v()}})]})}function Qi({label:t,value:e}){return r.jsxs("div",{style:Ct.stat,children:[r.jsx("div",{style:Ct.statValue,children:e}),r.jsx("div",{style:Ct.statLabel,children:t})]})}function v0({sessions:t,onDelete:e}){const n=t.filter(l=>l.completed);if(n.length===0)return r.jsx("div",{style:Ct.forestEmpty,children:"Your grove is empty. Plant your first tree above. 🌱"});const o={};for(const l of n){const a=(l.started_at||l.created_at||"").slice(0,10);(o[a]||(o[a]=[])).push(l)}const i=Object.keys(o).sort().reverse(),s=l=>{const a=new Date().toISOString().slice(0,10);return l===a?"Today":new Date(l+"T00:00").toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})};return r.jsxs("div",{style:Ct.forest,children:[r.jsxs("div",{style:Ct.forestHead,children:["Your Grove · ",n.length," trees"]}),i.map(l=>r.jsxs("div",{style:Ct.daySection,children:[r.jsxs("div",{style:Ct.dayLabel,children:[s(l)," · ",o[l].length]}),r.jsx("div",{style:Ct.treeGrid,children:o[l].map(a=>r.jsxs("div",{style:Ct.treeCard,title:`${a.label||"Focus"} · ${Os(a.actual_min)}`,onDoubleClick:()=>e(a.id),children:[r.jsx(i0,{species:a.tree}),r.jsx("div",{style:Ct.treeCardMin,children:Os(a.actual_min||a.duration_min)}),a.label&&r.jsx("div",{style:Ct.treeCardLabel,children:a.label})]},a.id))})]},l)),r.jsx("div",{style:Ct.forestHint,children:"Double-tap a tree to remove it."})]})}const Ct={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:820,margin:"0 auto"},head:{marginBottom:16,textAlign:"center"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},insightsBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginTop:12},statRow:{display:"flex",gap:10,justifyContent:"center",marginBottom:18,flexWrap:"wrap"},stat:{background:"var(--surface)",borderRadius:12,padding:"10px 18px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",minWidth:78},statValue:{fontSize:19,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},statLabel:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},stage:{background:"var(--surface)",borderRadius:18,padding:"28px 24px 32px",boxShadow:"0 2px 12px rgba(0,0,0,0.06)",display:"flex",flexDirection:"column",alignItems:"center",marginBottom:26},ringWrap:{position:"relative",width:300,height:300,display:"grid",placeItems:"center"},ringInner:{position:"relative",zIndex:1,display:"grid",placeItems:"center"},timeBig:{fontSize:40,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:6},focusLabel:{fontSize:14,color:"var(--text-2)",marginTop:2,fontWeight:500},warn:{fontSize:12,color:"#C2773B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},warnSoft:{fontSize:12,color:"#4C9A6B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},toggleRow:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,border:"1px solid var(--border)",background:"var(--surface)",borderRadius:12,padding:"10px 14px",cursor:"pointer",fontFamily:"inherit",width:"100%"},toggleTitle:{fontSize:14,fontWeight:700,color:"var(--text)"},toggleHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},switch:{width:42,height:24,borderRadius:12,background:"var(--border)",flexShrink:0,padding:2,transition:"background 0.18s",boxSizing:"border-box"},switchOn:{background:"#4C9A6B"},knob:{width:20,height:20,borderRadius:"50%",background:"var(--surface)",boxShadow:"0 1px 2px rgba(0,0,0,0.2)",transform:"translateX(0)",transition:"transform 0.18s"},knobOn:{transform:"translateX(18px)"},controls:{width:"100%",maxWidth:380,display:"flex",flexDirection:"column",gap:14,marginTop:8},chips:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},chip:{border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 16px",borderRadius:20,fontSize:13.5,fontWeight:700,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipOn:{background:"#4C9A6B",color:"#fff",borderColor:"#4C9A6B"},customRow:{display:"flex",alignItems:"center",justifyContent:"center",gap:8},customInput:{border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",fontSize:15,fontWeight:700,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center",width:100},customUnit:{fontSize:13,color:"var(--text-3)",fontWeight:600},input:{border:"1px solid var(--border)",borderRadius:10,padding:"11px 13px",fontSize:14,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center"},treePick:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},treeBtn:{display:"flex",alignItems:"center",gap:6,border:"1.5px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},treeDot:{width:10,height:10,borderRadius:"50%"},plantBtn:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:4},giveUp:{border:"1px solid var(--border)",background:"var(--surface)",color:"#C2536B",padding:"11px 26px",borderRadius:11,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:18},resultTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginTop:14,textAlign:"center"},resultSub:{fontSize:13.5,color:"var(--text-3)",marginTop:6,marginBottom:18,textAlign:"center"},forest:{background:"var(--surface)",borderRadius:16,padding:"20px 22px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},forestHead:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:14},forestEmpty:{background:"var(--surface)",borderRadius:16,padding:"40px 20px",textAlign:"center",color:"var(--text-3)",fontSize:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},daySection:{marginBottom:16},dayLabel:{fontSize:12,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.04em",marginBottom:8},treeGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(80px,1fr))",gap:8},treeCard:{display:"flex",flexDirection:"column",alignItems:"center",padding:"8px 4px",borderRadius:10,cursor:"pointer",background:"var(--surface-2)"},treeCardMin:{fontSize:12,fontWeight:700,color:"#4C9A6B",marginTop:-4},treeCardLabel:{fontSize:10.5,color:"var(--text-3)",marginTop:2,textAlign:"center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:76},forestHint:{fontSize:11,color:"var(--text-3)",textAlign:"center",marginTop:6}},qa=[{code:"INR",symbol:"₹",locale:"en-IN",label:"Indian Rupee"},{code:"USD",symbol:"$",locale:"en-US",label:"US Dollar"},{code:"EUR",symbol:"€",locale:"de-DE",label:"Euro"},{code:"GBP",symbol:"£",locale:"en-GB",label:"British Pound"},{code:"JPY",symbol:"¥",locale:"ja-JP",label:"Japanese Yen"},{code:"AED",symbol:"د.إ",locale:"en-AE",label:"UAE Dirham"},{code:"AUD",symbol:"A$",locale:"en-AU",label:"Australian Dollar"},{code:"CAD",symbol:"C$",locale:"en-CA",label:"Canadian Dollar"},{code:"SGD",symbol:"S$",locale:"en-SG",label:"Singapore Dollar"}],Pg="INR",Ob="anvil_currency",ll=t=>qa.find(e=>e.code===t)||qa[0];function po(){try{return localStorage.getItem(Ob)||Pg}catch{return Pg}}function $g(t){try{localStorage.setItem(Ob,t)}catch{}return window.dispatchEvent(new CustomEvent("anvil-currency",{detail:t})),t}function Ja(t,e){const n=ll(e||po()),o=Math.round(Number(t)||0);return n.symbol+o.toLocaleString(n.locale)}function Hb(t,e){const n=ll(e||po()),o=Number(t)||0;return n.symbol+o.toLocaleString(n.locale,{minimumFractionDigits:2,maximumFractionDigits:2})}function w0(t,e){const n=ll(e||po()),o=Math.round(Number(t)||0),i=Math.abs(o);return n.code==="INR"?i>=1e7?n.symbol+(o/1e7).toFixed(i>=1e8?0:1)+"Cr":i>=1e5?n.symbol+(o/1e5).toFixed(i>=1e6?0:1)+"L":i>=1e3?n.symbol+(o/1e3).toFixed(i>=1e4?0:1)+"K":n.symbol+o:i>=1e9?n.symbol+(o/1e9).toFixed(1)+"B":i>=1e6?n.symbol+(o/1e6).toFixed(1)+"M":i>=1e3?n.symbol+(o/1e3).toFixed(1)+"K":n.symbol+o}function nc(){const[t,e]=g.useState(po());return g.useEffect(()=>{const n=o=>e(o.detail||po());return window.addEventListener("anvil-currency",n),()=>window.removeEventListener("anvil-currency",n)},[]),ll(t)}const k0="grove_rates",j0="reward_rates",Ki=Object.keys($e),Ng=[{id:"kickstart",label:"Kickstart"},{id:"golden",label:"Golden Book"},{id:"habits",label:"Habits"},{id:"quadrant",label:"Quadrant"},{id:"goals",label:"Goals"},{id:"grove",label:"Grove"},{id:"journal",label:"Journal"},{id:"revision",label:"Revision"},{id:"affirmations",label:"Affirmations"},{id:"skills",label:"Skills"},{id:"spiritual",label:"Spiritual"},{id:"mindscape",label:"Mindscape"},{id:"vault",label:"Vault"}],Og=new Set(["worth","achievements"]),Wn="#C9A227",Ao="#3A7CA5",_n="#C2536B",S0=t=>{const e=Math.floor(t/60),n=Math.round(t%60);return e&&n?`${e}h ${n}m`:e?`${e}h`:`${n}m`},C0=t=>{let e=Math.round((t||0)*60);const n=Math.floor(e/3600);e%=3600;const o=Math.floor(e/60);return e%=60,[n?`${n}h`:null,n||o?`${o}m`:null,`${e}s`].filter(Boolean).join(" ")},I0=()=>{const t=new Date,e=n=>String(n).padStart(2,"0");return`${t.getFullYear()}-${e(t.getMonth()+1)}-${e(t.getDate())}T${e(t.getHours())}:${e(t.getMinutes())}`},Hg=t=>{if(!t)return"";const e=new Date(t.includes("T")?t:t+"T00:00:00");return isNaN(e)?t:e.toLocaleDateString("en-US",t.includes("T")?{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}:{month:"short",day:"numeric",year:"numeric"})},Ve=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,Gg=t=>{const e=new Date(t);return e.setHours(0,0,0,0),e.setDate(e.getDate()-(e.getDay()+6)%7),e},Xi=[{id:"today",label:"Today"},{id:"all",label:"All time"},{id:"tweek",label:"This week"},{id:"tmonth",label:"This month"},{id:"pweek",label:"Last week"},{id:"pmonth",label:"Last month"},{id:"tyear",label:"This year"}];function z0(t){const e=new Date;if(t==="today")return[Ve(e),Ve(e)];if(t==="tweek"){const n=Gg(e),o=new Date(n);return o.setDate(n.getDate()+6),[Ve(n),Ve(o)]}if(t==="pweek"){const n=Gg(e);n.setDate(n.getDate()-7);const o=new Date(n);return o.setDate(n.getDate()+6),[Ve(n),Ve(o)]}return t==="tmonth"?[Ve(new Date(e.getFullYear(),e.getMonth(),1)),Ve(new Date(e.getFullYear(),e.getMonth()+1,0))]:t==="pmonth"?[Ve(new Date(e.getFullYear(),e.getMonth()-1,1)),Ve(new Date(e.getFullYear(),e.getMonth(),0))]:t==="tyear"?[Ve(new Date(e.getFullYear(),0,1)),Ve(new Date(e.getFullYear(),11,31))]:["0000-01-01","9999-12-31"]}function T0(){const t=nc(),e=B=>Hb(B,t.code),[n,o]=g.useState([]),[i,s]=g.useState([]),[l,a]=g.useState([]),[d,c]=g.useState([]),[p,y]=g.useState([]),[m,j]=g.useState({}),[x,k]=g.useState({}),[T,b]=g.useState(!1),[u,h]=g.useState({}),[z,v]=g.useState({}),[I,L]=g.useState(!1),[R,E]=g.useState(!1),[M,S]=g.useState(null),[A,w]=g.useState(""),[Y,lt]=g.useState(""),[rt,ht]=g.useState(!1),[U,O]=g.useState("today"),q=()=>G.getPayouts().then(c).catch(()=>{}),P=()=>G.getRewardRates().then(a).catch(()=>{});g.useEffect(()=>{(async()=>{try{const[B,vt,Gt,oe,kt,Yt,De]=await Promise.all([G.getFocus(),G.getScreenTime(),G.getRewardRates(),G.getPayouts(),G.getAchievements(),G.getSetting(k0),G.getSetting(j0)]);o(B.sessions||[]),s(Array.isArray(vt)?vt:[]),a(Gt||[]),c(oe||[]),y(Array.isArray(kt)?kt:[]),j((Yt==null?void 0:Yt.value)||{}),k((De==null?void 0:De.value)||{})}catch{}b(!0)})()},[]);const F={};l.forEach(B=>{var vt;(F[vt=`${B.kind}:${B.rkey}`]||(F[vt]=[])).push({eff:B.eff_date,rate:B.rate})}),Object.values(F).forEach(B=>B.sort((vt,Gt)=>vt.eff.localeCompare(Gt.eff)));const f=(B,vt,Gt)=>{const oe=F[`${B}:${vt}`];if(oe){let kt=null;for(const Yt of oe)if(Yt.eff<=Gt)kt=Yt.rate;else break;if(kt!==null)return kt}return(B==="focus"?m[vt]:x[vt])||0},Q=(B,vt)=>{const Gt=F[`${B}:${vt}`];return Gt&&Gt.length?Gt[Gt.length-1].rate:(B==="focus"?m[vt]:x[vt])??""},[xt,gt]=z0(U);let H=0,ft=0;n.filter(B=>B.completed).forEach(B=>{const vt=(B.started_at||B.created_at||"").slice(0,10),Gt=$e[B.tree]?B.tree:uo;H+=(B.actual_min||0)/60*f("focus",Gt,vt)}),i.forEach(B=>{Og.has(B.screen)||(ft+=B.seconds/60*f("usage",B.screen,B.date))});const J=p.reduce((B,vt)=>B+(vt.reward||0),0),et=H+ft+J,X=d.reduce((B,vt)=>B+vt.amount,0),pt=Math.max(0,et-X),It={};Ki.forEach(B=>It[B]={minutes:0,earned:0}),n.filter(B=>B.completed).forEach(B=>{const vt=(B.started_at||B.created_at||"").slice(0,10);if(vt<xt||vt>gt)return;const Gt=$e[B.tree]?B.tree:uo,oe=B.actual_min||0;It[Gt].minutes+=oe,It[Gt].earned+=oe/60*f("focus",Gt,vt)});const W=Ki.reduce((B,vt)=>B+It[vt].earned,0),bt={};i.forEach(B=>{var Gt;if(Og.has(B.screen)||B.date<xt||B.date>gt)return;const vt=bt[Gt=B.screen]||(bt[Gt]={seconds:0,earned:0});vt.seconds+=B.seconds,vt.earned+=B.seconds/60*f("usage",B.screen,B.date)});const Et=Object.values(bt).reduce((B,vt)=>B+vt.earned,0),Dt=p.filter(B=>B.date>=xt&&B.date<=gt&&(B.reward||0)>0),_t=[...Dt].sort((B,vt)=>vt.date.localeCompare(B.date)||vt.reward-B.reward),be=Dt.reduce((B,vt)=>B+(vt.reward||0),0),Lt=W+Et+be,me=Lt>0?W/Lt*100:0,Ce=Lt>0?Et/Lt*100:0,Ie=Lt>0?be/Lt*100:0,Ye=Ki.map(B=>({p:B,...It[B],...$e[B]})).filter(B=>B.minutes>0).sort((B,vt)=>vt.earned-B.earned),ve=Ng.map(B=>({...B,...bt[B.id]||{seconds:0,earned:0}})).filter(B=>B.seconds>0).sort((B,vt)=>vt.earned-B.earned),Tn=(B,vt)=>{G.setRewardRate({kind:"focus",rkey:B,rate:Math.max(0,parseFloat(vt)||0)}).then(P).catch(()=>{})},er=(B,vt)=>{G.setRewardRate({kind:"usage",rkey:B,rate:Math.max(0,parseFloat(vt)||0)}).then(P).catch(()=>{})},rr=B=>{pt<=0||(S(B),w(B==="all"?pt.toFixed(2):""),lt(""))},Wr=async()=>{const B=Math.min(parseFloat(A)||0,pt);B<=0||!Y.trim()||(await G.createPayout({amount:B,note:Y.trim(),date:I0()}),S(null),w(""),lt(""),await q(),ht(!0))},_r=async B=>{await G.deletePayout(B),q()};return r.jsxs("div",{style:N.page,children:[r.jsxs("div",{style:N.head,children:[r.jsx("div",{style:N.eyebrow,children:"Anvil · Rewards"}),r.jsx("h1",{style:N.h1,children:"Rewards"}),r.jsx("div",{style:N.subhead,children:"Your earned rewards from focus and app usage."})]}),r.jsxs("div",{style:N.hero,children:[r.jsx("button",{onClick:()=>ht(B=>!B),style:N.logIcon,title:"View reward log",children:r.jsx(ny,{size:16})}),r.jsx("div",{style:N.heroLabel,children:"Final reward · pending"}),r.jsx("div",{style:N.heroVal,children:e(pt)}),r.jsxs("div",{style:N.heroSub,children:["Earned ",e(et)," · Taken ",e(X),J>0?` · incl. ${e(J)} achievement`:""]}),r.jsxs("div",{style:N.heroBtns,children:[r.jsx("button",{onClick:()=>rr("partial"),disabled:pt<=0,style:{...N.heroBtnGhost,...pt<=0?N.btnDisabled:{}},children:"Take partial"}),r.jsx("button",{onClick:()=>rr("all"),disabled:pt<=0,style:{...N.heroBtnSolid,...pt<=0?N.btnDisabled:{}},children:"Take all pending"})]})]}),r.jsxs("div",{style:N.statRow,children:[r.jsxs("div",{style:N.statCard,children:[r.jsx("div",{style:N.statVal,children:e(X)}),r.jsx("div",{style:N.statLbl,children:"Total taken"})]}),r.jsxs("div",{style:N.statCard,children:[r.jsx("div",{style:{...N.statVal,color:Wn},children:e(pt)}),r.jsx("div",{style:N.statLbl,children:"Total pending"})]})]}),r.jsx("div",{style:N.periodRow,children:Xi.map(B=>r.jsx("button",{onClick:()=>O(B.id),style:{...N.periodChip,...U===B.id?N.periodChipOn:{}},children:B.label},B.id))}),Lt>0?r.jsxs("div",{style:N.card,children:[r.jsxs("div",{style:N.cardTitleRow,children:[r.jsx("span",{style:N.cardTitle,children:"Reward split"}),r.jsxs("span",{style:N.periodTotal,children:[e(Lt)," · ",Xi.find(B=>B.id===U).label]})]}),r.jsxs("div",{style:N.splitTrack,children:[r.jsx("div",{style:{width:`${me}%`,background:Wn,height:"100%"}}),r.jsx("div",{style:{width:`${Ce}%`,background:Ao,height:"100%"}}),r.jsx("div",{style:{width:`${Ie}%`,background:_n,height:"100%"}})]}),r.jsxs("div",{style:N.legendRow,children:[r.jsxs("span",{style:N.legendItem,children:[r.jsx("span",{style:{...N.legendDot,background:Wn}})," Focus ",Math.round(me),"% · ",e(W)]}),r.jsxs("span",{style:N.legendItem,children:[r.jsx("span",{style:{...N.legendDot,background:Ao}})," Usage ",Math.round(Ce),"% · ",e(Et)]}),r.jsxs("span",{style:N.legendItem,children:[r.jsx("span",{style:{...N.legendDot,background:_n}})," Achievement ",Math.round(Ie),"% · ",e(be)]})]})]}):r.jsxs("div",{style:{...N.card,...N.muted},children:["No rewards earned in ",Xi.find(B=>B.id===U).label.toLowerCase(),"."]}),r.jsxs("div",{style:N.card,children:[r.jsxs("button",{onClick:()=>L(B=>!B),style:N.collapseBtn,children:[r.jsxs("span",{style:{...N.cardTitle,color:Wn},children:["Focus Rewards · ",e(W)]}),r.jsx("span",{style:N.collapseHint,children:I?"Hide rates":"Set rates"})]}),I&&r.jsx("div",{style:{...N.rateGrid,marginTop:12},children:Ki.map(B=>r.jsxs("div",{style:N.rateRow,children:[r.jsx("span",{style:{...N.dot,background:$e[B].leaf}}),r.jsx("span",{style:N.rateName,children:$e[B].label}),r.jsxs("div",{style:N.rateInputWrap,children:[r.jsx("span",{style:N.unitSign,children:t.symbol}),r.jsx("input",{type:"number",min:"0",step:"0.5",inputMode:"decimal",placeholder:"0",value:u[B]!==void 0?u[B]:Q("focus",B),onChange:vt=>h(Gt=>({...Gt,[B]:vt.target.value})),onBlur:vt=>Tn(B,vt.target.value),style:N.rateInput}),r.jsx("span",{style:N.unit,children:"/hr"})]})]},B))}),Ye.length>0?r.jsx("div",{style:{...N.rows,marginTop:14},children:Ye.map(B=>r.jsxs("div",{style:N.row,children:[r.jsx("span",{style:{...N.dot,background:B.leaf}}),r.jsx("span",{style:N.rowName,children:B.label}),r.jsx("span",{style:N.rowMeta,children:S0(Math.round(B.minutes))}),r.jsx("span",{style:N.rowAmt,children:e(B.earned)})]},B.p))}):r.jsx("div",{style:N.muted,children:"No focus sessions yet."})]}),r.jsxs("div",{style:N.card,children:[r.jsxs("button",{onClick:()=>E(B=>!B),style:N.collapseBtn,children:[r.jsxs("span",{style:{...N.cardTitle,color:Ao},children:["Usage Rewards · ",e(Et)]}),r.jsx("span",{style:N.collapseHint,children:R?"Hide rates":"Set rates"})]}),R&&r.jsx("div",{style:{...N.rateGrid,marginTop:12},children:Ng.map(B=>r.jsxs("div",{style:N.rateRow,children:[r.jsx("span",{style:N.rateName,children:B.label}),r.jsxs("div",{style:N.rateInputWrap,children:[r.jsx("span",{style:N.unitSign,children:t.symbol}),r.jsx("input",{type:"number",min:"0",step:"0.1",inputMode:"decimal",placeholder:"0",value:z[B.id]!==void 0?z[B.id]:Q("usage",B.id),onChange:vt=>v(Gt=>({...Gt,[B.id]:vt.target.value})),onBlur:vt=>er(B.id,vt.target.value),style:N.rateInput}),r.jsx("span",{style:N.unit,children:"/min"})]})]},B.id))}),ve.length>0?r.jsx("div",{style:{...N.rows,marginTop:14},children:ve.map(B=>r.jsxs("div",{style:N.row,children:[r.jsx("span",{style:N.rowName,children:B.label}),r.jsx("span",{style:N.rowMeta,children:C0(B.seconds/60)}),r.jsx("span",{style:N.rowAmt,children:e(B.earned)})]},B.id))}):r.jsx("div",{style:N.muted,children:T?"No usage tracked yet.":"Loading…"})]}),r.jsxs("div",{style:N.card,children:[r.jsxs("div",{style:N.cardTitleRow,children:[r.jsxs("span",{style:{...N.cardTitle,color:_n},children:["Achievement Rewards · ",e(be)]}),r.jsx("span",{style:N.collapseHint,children:"Set in Achievements"})]}),_t.length>0?r.jsx("div",{style:{...N.rows,marginTop:14},children:_t.map(B=>r.jsxs("div",{style:N.row,children:[r.jsx("span",{style:{...N.dot,background:_n}}),r.jsx("span",{style:N.rowName,children:B.title}),r.jsx("span",{style:N.rowMeta,children:Hg(B.date)}),r.jsx("span",{style:N.rowAmt,children:e(B.reward)})]},B.id))}):r.jsxs("div",{style:{...N.muted,marginTop:10},children:["No achievement rewards in ",Xi.find(B=>B.id===U).label.toLowerCase(),". Add a reward to a win in the Achievements section."]})]}),rt&&r.jsx("div",{style:N.modalOverlay,onClick:()=>ht(!1),children:r.jsxs("div",{style:N.logModal,onClick:B=>B.stopPropagation(),children:[r.jsxs("div",{style:N.logModalHead,children:[r.jsx("span",{style:N.modalTitle,children:"Reward log"}),r.jsx("button",{onClick:()=>ht(!1),style:N.logClose,title:"Close",children:r.jsx(Tt,{size:16})})]}),d.length===0?r.jsx("div",{style:{...N.muted,padding:"24px 0",textAlign:"center"},children:"No rewards taken yet."}):r.jsxs(r.Fragment,{children:[r.jsx("div",{style:N.logScroll,children:d.map(B=>r.jsxs("div",{style:N.row,children:[r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("div",{style:N.logNote,children:B.note||"Reward taken"}),r.jsx("div",{style:N.rowMeta,children:Hg(B.date)})]}),r.jsx("span",{style:N.rowAmt,children:e(B.amount)}),r.jsx("button",{onClick:()=>_r(B.id),style:N.del,children:"×"})]},B.id))}),r.jsxs("div",{style:N.totalRow,children:[r.jsx("span",{children:"Total taken"}),r.jsx("span",{style:N.totalVal,children:e(X)})]})]})]})}),Lt>0&&r.jsxs("div",{style:N.card,children:[r.jsx("div",{style:N.cardTitle,children:"Reward breakdown"}),r.jsxs("div",{style:N.pieWrap,children:[r.jsxs("div",{style:N.pieChart,children:[r.jsx("div",{style:{...N.pieDisc,background:`conic-gradient(${Wn} 0 ${me}%, ${Ao} ${me}% ${me+Ce}%, ${_n} ${me+Ce}% 100%)`}}),r.jsxs("div",{style:N.pieHole,children:[r.jsx("span",{style:N.pieHoleVal,children:e(Lt)}),r.jsx("span",{style:N.pieHoleLbl,children:"total"})]})]}),r.jsxs("div",{style:N.pieLegend,children:[r.jsxs("div",{style:N.pieLegRow,children:[r.jsx("span",{style:{...N.legendDot,background:Wn}}),r.jsx("span",{style:N.pieLegName,children:"Focus"}),r.jsxs("span",{style:N.pieLegPct,children:[Math.round(me),"%"]}),r.jsx("span",{style:N.pieLegMin,children:e(W)})]}),r.jsxs("div",{style:N.pieLegRow,children:[r.jsx("span",{style:{...N.legendDot,background:Ao}}),r.jsx("span",{style:N.pieLegName,children:"Usage"}),r.jsxs("span",{style:N.pieLegPct,children:[Math.round(Ce),"%"]}),r.jsx("span",{style:N.pieLegMin,children:e(Et)})]}),r.jsxs("div",{style:N.pieLegRow,children:[r.jsx("span",{style:{...N.legendDot,background:_n}}),r.jsx("span",{style:N.pieLegName,children:"Achievement"}),r.jsxs("span",{style:N.pieLegPct,children:[Math.round(Ie),"%"]}),r.jsx("span",{style:N.pieLegMin,children:e(be)})]})]})]})]}),M&&r.jsx("div",{style:N.modalOverlay,onClick:()=>S(null),children:r.jsxs("div",{style:N.modalCard,onClick:B=>B.stopPropagation(),children:[r.jsx("div",{style:N.modalTitle,children:M==="all"?"Take all pending reward?":"Take partial reward"}),r.jsxs("div",{style:N.modalSub,children:["Pending: ",e(pt)]}),r.jsxs("div",{style:N.modalInputWrap,children:[r.jsx("span",{style:N.modalSign,children:t.symbol}),r.jsx("input",{type:"number",min:"0",step:"0.01",autoFocus:!0,placeholder:pt.toFixed(2),value:A,onChange:B=>w(B.target.value),style:N.modalAmt})]}),r.jsx("input",{placeholder:"What is this reward for? (required)",value:Y,onChange:B=>lt(B.target.value),onKeyDown:B=>B.key==="Enter"&&Wr(),style:N.modalReason}),(()=>{const B=parseFloat(A)>0&&!!Y.trim();return r.jsxs("div",{style:N.modalActions,children:[r.jsx("button",{onClick:()=>S(null),style:N.modalCancel,children:"Cancel"}),r.jsxs("button",{onClick:Wr,disabled:!B,style:{...N.modalConfirm,...B?{}:{opacity:.5,cursor:"not-allowed"}},children:["Confirm · ",e(Math.min(parseFloat(A)||0,pt))]})]})})()]})}),r.jsx("div",{style:N.note,children:"Set rates only affect time from today onward — past time keeps the rate it was earned at."})]})}const N={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},hero:{position:"relative",background:"linear-gradient(135deg,var(--accent-strong),var(--accent-2))",borderRadius:16,padding:"22px 24px",color:"#fff",marginBottom:14,textAlign:"center"},logIcon:{position:"absolute",top:12,right:12,border:"1px solid rgba(255,255,255,0.5)",background:"rgba(255,255,255,0.12)",color:"#fff",width:32,height:32,borderRadius:9,cursor:"pointer",display:"grid",placeItems:"center"},logClose:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:28,height:28,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},logNote:{fontSize:13.5,fontWeight:600,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:200,display:"grid",placeItems:"center",padding:16},modalCard:{background:"var(--surface)",color:"var(--text)",borderRadius:16,padding:"22px 22px 18px",width:360,maxWidth:"100%",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)"},logModal:{background:"var(--surface)",color:"var(--text)",borderRadius:16,padding:"18px 18px 14px",width:440,maxWidth:"100%",maxHeight:"82vh",display:"flex",flexDirection:"column",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)",boxSizing:"border-box"},logModalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8,flexShrink:0},logScroll:{overflowY:"auto",display:"flex",flexDirection:"column",gap:2,paddingRight:2,minHeight:0},modalTitle:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:4},modalSub:{fontSize:12.5,color:"var(--text-3)",fontWeight:600,marginBottom:14},modalInputWrap:{display:"flex",alignItems:"center",gap:4,border:"1px solid var(--border)",borderRadius:10,padding:"8px 12px",background:"var(--surface-2)",marginBottom:8},modalSign:{fontSize:16,color:"var(--text-2)",fontWeight:700},modalAmt:{border:"none",background:"none",outline:"none",flex:1,fontSize:18,fontWeight:700,fontFamily:"inherit",color:"var(--text)"},modalReason:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"9px 12px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",marginBottom:14},modalActions:{display:"flex",gap:8},modalCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},modalConfirm:{flex:1,border:"none",background:"#C9A227",color:"#fff",padding:"10px 14px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},heroLabel:{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",opacity:.85},heroVal:{fontSize:44,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:2,lineHeight:1.05},heroSub:{fontSize:12.5,opacity:.9,marginTop:6},heroBtns:{display:"flex",gap:10,marginTop:16,justifyContent:"center"},heroBtnSolid:{border:"none",background:"#fff",color:"var(--accent-strong)",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},heroBtnGhost:{border:"1px solid rgba(255,255,255,0.6)",background:"transparent",color:"#fff",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},btnDisabled:{opacity:.45,cursor:"not-allowed"},statRow:{display:"flex",gap:10,marginBottom:14},statCard:{flex:1,background:"var(--surface)",borderRadius:12,padding:"12px 14px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},statVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},statLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},card:{background:"var(--surface)",borderRadius:16,padding:"18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:10,flexWrap:"wrap"},periodTotal:{fontSize:13,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text-2)"},periodRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},periodChip:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},periodChipOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},collapseBtn:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",border:"none",background:"none",cursor:"pointer",padding:0,fontFamily:"inherit"},collapseHint:{fontSize:12,fontWeight:700,color:"var(--accent)"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"12px 0"},splitTrack:{display:"flex",height:16,borderRadius:8,overflow:"hidden",marginTop:12,marginBottom:12,border:"1px solid var(--border)"},legendRow:{display:"flex",gap:16,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:600,color:"var(--text-2)"},legendDot:{width:10,height:10,borderRadius:3,flexShrink:0},pieWrap:{display:"flex",alignItems:"center",gap:20,flexWrap:"wrap",marginTop:6},pieChart:{position:"relative",width:130,height:130,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:78,height:78,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:14,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:10},pieLegRow:{display:"flex",alignItems:"center",gap:8},pieLegName:{flex:1,fontSize:13.5,fontWeight:600},pieLegPct:{fontSize:13,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",width:46,textAlign:"right"},pieLegMin:{fontSize:12,color:"var(--text-3)",fontWeight:600,minWidth:64,textAlign:"right"},rows:{display:"flex",flexDirection:"column",gap:2},row:{display:"flex",alignItems:"center",gap:8,padding:"7px 0",borderBottom:"1px solid var(--border)"},dot:{width:10,height:10,borderRadius:3,flexShrink:0},rowName:{flex:1,fontSize:13.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},rowMeta:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,flexShrink:0},rowAmt:{fontSize:13.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",flexShrink:0,minWidth:64,textAlign:"right"},del:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",fontSize:16,lineHeight:1,padding:"0 2px",flexShrink:0},totalRow:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:10,marginTop:4,fontSize:14,fontWeight:700},totalVal:{fontSize:16,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},rateGrid:{display:"flex",flexDirection:"column",gap:10},rateRow:{display:"flex",alignItems:"center",gap:8},rateName:{flex:1,fontSize:14,fontWeight:600},rateInputWrap:{display:"flex",alignItems:"center",gap:3,border:"1px solid var(--border)",borderRadius:9,padding:"4px 10px",background:"var(--surface-2)"},unitSign:{fontSize:14,color:"var(--text-2)",fontWeight:600},rateInput:{border:"none",background:"none",outline:"none",width:64,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},unit:{fontSize:12,color:"var(--text-3)",fontWeight:600},note:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",fontStyle:"italic",marginTop:4}};function E0({onAuthed:t}){const[e,n]=g.useState("login"),[o,i]=g.useState(""),[s,l]=g.useState(""),[a,d]=g.useState(""),[c,p]=g.useState(""),[y,m]=g.useState(!1),j=e==="register",x=async k=>{if(k.preventDefault(),p(""),!s.trim()||!a){p("Email and password are required.");return}if(j&&a.length<6){p("Password must be at least 6 characters.");return}m(!0);try{const T=j?await G.register({name:o,email:s,password:a}):await G.login({email:s,password:a});py(T.token),t(T.user)}catch(T){p(T.message||"Something went wrong.")}finally{m(!1)}};return r.jsx("div",{style:ie.page,children:r.jsxs("form",{style:ie.card,onSubmit:x,children:[r.jsxs("div",{style:ie.brand,children:[r.jsx("div",{style:ie.logo,children:"B"}),r.jsx("span",{style:ie.brandName,children:"Anvil"})]}),r.jsx("h1",{style:ie.title,children:j?"Create your account":"Welcome back"}),r.jsx("p",{style:ie.sub,children:j?"Start forging your days.":"Sign in to continue."}),j&&r.jsxs("label",{style:ie.field,children:[r.jsx("span",{style:ie.label,children:"Name"}),r.jsx("input",{value:o,onChange:k=>i(k.target.value),placeholder:"Your name",style:ie.input,autoFocus:!0})]}),r.jsxs("label",{style:ie.field,children:[r.jsx("span",{style:ie.label,children:"Email"}),r.jsx("input",{type:"email",value:s,onChange:k=>l(k.target.value),placeholder:"you@example.com",style:ie.input,autoFocus:!j})]}),r.jsxs("label",{style:ie.field,children:[r.jsx("span",{style:ie.label,children:"Password"}),r.jsx("input",{type:"password",value:a,onChange:k=>d(k.target.value),placeholder:"••••••••",style:ie.input})]}),c&&r.jsx("div",{style:ie.error,children:c}),r.jsx("button",{type:"submit",disabled:y,style:{...ie.submit,...y?{opacity:.6}:{}},children:y?"Please wait…":j?"Create account":"Sign in"}),r.jsxs("div",{style:ie.switch,children:[j?"Already have an account?":"New here?"," ",r.jsx("button",{type:"button",onClick:()=>{n(j?"login":"register"),p("")},style:ie.link,children:j?"Sign in":"Create one"})]})]})})}const ie={page:{minHeight:"100vh",display:"grid",placeItems:"center",background:"var(--bg)",fontFamily:"'Inter',system-ui,sans-serif",padding:20},card:{width:"100%",maxWidth:380,background:"var(--surface)",borderRadius:16,padding:"32px 28px",boxShadow:"0 4px 24px rgba(0,0,0,0.08)",display:"flex",flexDirection:"column"},brand:{display:"flex",alignItems:"center",gap:9,marginBottom:20},logo:{width:32,height:32,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},brandName:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},title:{fontSize:22,fontWeight:700,margin:"0 0 4px",fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},sub:{fontSize:13.5,color:"var(--text-3)",margin:"0 0 22px"},field:{display:"flex",flexDirection:"column",gap:5,marginBottom:14},label:{fontSize:12,fontWeight:600,color:"var(--text-2)"},input:{border:"1px solid var(--border)",borderRadius:9,padding:"11px 12px",fontSize:14,fontFamily:"inherit",outline:"none",color:"var(--text)"},error:{background:"rgba(194,83,107,0.10)",color:"#C2536B",fontSize:13,padding:"9px 12px",borderRadius:8,marginBottom:14,fontWeight:500},submit:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"12px",borderRadius:10,fontSize:14.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:4},switch:{fontSize:13,color:"var(--text-2)",textAlign:"center",marginTop:18},link:{border:"none",background:"none",color:"#3A7CA5",fontWeight:700,cursor:"pointer",fontFamily:"inherit",fontSize:13,padding:0}},Ug=["Salary","Stocks","Business","Interest","Rent","Gift","Other"],Yg=["Bills","EMI","Rent","Food","Shopping","Transport","Health","Entertainment","Education","Other"],R0={Salary:"#4C9A6B",Stocks:"#3A7CA5",Business:"#C9A227",Interest:"#8268B0",Gift:"#C2773B",Bills:"#C2536B",EMI:"#A23E57",Food:"#E08E45",Shopping:"#8268B0",Transport:"#3A7CA5",Health:"#4C9A6B",Entertainment:"#C9A227",Education:"#5B7C99",Rent:"#5B8C5A",Other:"#9A968C"},Gb=t=>R0[t]||"#9A968C",br="#3E9E6B",mr="#D1556E",Po=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,Zo=Po(new Date),B0=[{id:"month",label:"This month"},{id:"last",label:"Last month"},{id:"year",label:"This year"},{id:"all",label:"All time"}];function D0(t){const e=new Date;return t==="month"?[Po(new Date(e.getFullYear(),e.getMonth(),1)),Zo]:t==="last"?[Po(new Date(e.getFullYear(),e.getMonth()-1,1)),Po(new Date(e.getFullYear(),e.getMonth(),0))]:t==="year"?[Po(new Date(e.getFullYear(),0,1)),Zo]:["0000-01-01","9999-12-31"]}function A0(){const t=nc(),[e,n]=g.useState("overview"),[o,i]=g.useState([]),[s,l]=g.useState(!1),a=g.useCallback(()=>G.getTxns().then(c=>{i(c),l(!0)}).catch(()=>l(!0)),[]);g.useEffect(()=>{a()},[a]);const d=c=>Ja(c,t.code);return r.jsxs("div",{style:D.page,children:[r.jsxs("div",{style:D.head,children:[r.jsx("div",{style:D.eyebrow,children:"Anvil · Vault"}),r.jsx("h1",{style:D.h1,children:"Vault"}),r.jsx("div",{style:D.subhead,children:"Your money — what comes in, what goes out, and where it's headed."})]}),r.jsx("div",{style:D.tabs,children:[["overview","Overview",Mh],["money","Money",cy],["calc","Calculators",Dh]].map(([c,p,y])=>r.jsxs("button",{onClick:()=>n(c),style:{...D.tab,...e===c?D.tabOn:{}},children:[r.jsx(y,{size:15})," ",p]},c))}),e==="overview"&&r.jsx(F0,{txns:o,loaded:s,money:d,cur:t}),e==="money"&&r.jsx(W0,{txns:o,reload:a,money:d}),e==="calc"&&r.jsx(_0,{money:d,cur:t})]})}function F0({txns:t,loaded:e,money:n,cur:o}){const[i,s]=g.useState("month"),[l,a]=D0(i),d=g.useMemo(()=>t.filter(k=>k.date>=l&&k.date<=a),[t,l,a]),c=d.filter(k=>k.kind==="income"),p=d.filter(k=>k.kind==="expense"),y=c.reduce((k,T)=>k+T.amount,0),m=p.reduce((k,T)=>k+T.amount,0),j=y-m,x=k=>{const T={};return k.forEach(b=>{T[b.category]=(T[b.category]||0)+b.amount}),Object.entries(T).map(([b,u])=>({category:b,amount:u})).sort((b,u)=>u.amount-b.amount)};return r.jsxs(r.Fragment,{children:[r.jsx("div",{style:D.presetRow,children:B0.map(k=>r.jsx("button",{onClick:()=>s(k.id),style:{...D.preset,...i===k.id?D.presetOn:{}},children:k.label},k.id))}),r.jsxs("div",{style:D.sumGrid,children:[r.jsx(Gl,{icon:r.jsx(Oa,{size:16}),label:"Income",value:n(y),color:br}),r.jsx(Gl,{icon:r.jsx(Ha,{size:16}),label:"Expenses",value:n(m),color:mr}),r.jsx(Gl,{icon:j>=0?r.jsx(Fb,{size:16}):r.jsx(Ab,{size:16}),label:"Net savings",value:n(j),color:j>=0?br:mr})]}),e?d.length===0?r.jsx("div",{style:D.card,children:r.jsxs("div",{style:D.muted,children:["No transactions in this period. Add some under the ",r.jsx("b",{children:"Money"})," tab."]})}):r.jsxs(r.Fragment,{children:[r.jsx(M0,{totalIn:y,totalOut:m}),r.jsxs("div",{style:D.twoCol,children:[r.jsx(Vg,{title:"Incoming",subtitle:"Where your money comes from",total:y,data:x(c),accent:br,cur:o}),r.jsx(Vg,{title:"Outgoing",subtitle:"Where your money goes",total:m,data:x(p),accent:mr,cur:o})]})]}):r.jsx("div",{style:D.muted,children:"Loading…"})]})}function Gl({icon:t,label:e,value:n,color:o}){return r.jsxs("div",{style:D.sumCard,children:[r.jsx("div",{style:{...D.sumIcon,color:o,background:o+"1A"},children:t}),r.jsx("div",{style:D.sumLabel,children:e}),r.jsx("div",{style:{...D.sumVal,color:o},children:n})]})}function Vg({title:t,subtitle:e,total:n,data:o,accent:i,cur:s}){let l=0;const a=o.map(c=>{const p=n>0?l/n*100:0;l+=c.amount;const y=n>0?l/n*100:0;return{...c,start:p,end:y,color:Gb(c.category),pct:n>0?c.amount/n*100:0}}),d=a.length?`conic-gradient(${a.map(c=>`${c.color} ${c.start}% ${c.end}%`).join(", ")})`:"var(--surface-2)";return r.jsxs("div",{style:D.card,children:[r.jsxs("div",{style:D.cardTitleRow,children:[r.jsxs("div",{children:[r.jsx("div",{style:{...D.cardTitle,color:i},children:t}),r.jsx("div",{style:D.cardSub,children:e})]}),r.jsx("div",{style:{...D.cardTotal,color:i},children:Ja(n,s.code)})]}),o.length===0?r.jsx("div",{style:D.muted,children:"Nothing logged."}):r.jsxs("div",{style:D.pieWrap,children:[r.jsxs("div",{style:D.pieChart,children:[r.jsx("div",{style:{...D.pieDisc,background:d}}),r.jsxs("div",{style:D.pieHole,children:[r.jsx("span",{style:D.pieHoleVal,children:w0(n,s.code)}),r.jsx("span",{style:D.pieHoleLbl,children:"total"})]})]}),r.jsx("div",{style:D.pieLegend,children:a.map(c=>r.jsxs("div",{style:D.legendRow,children:[r.jsx("span",{style:{...D.dot,background:c.color}}),r.jsx("span",{style:D.legendName,children:c.category}),r.jsxs("span",{style:D.legendPct,children:[Math.round(c.pct),"%"]}),r.jsx("span",{style:D.legendAmt,children:Ja(c.amount,s.code)})]},c.category))})]})]})}function M0({totalIn:t,totalOut:e}){const n=t-e,o=t>0?n/t:0,i=t===0?0:Math.max(0,Math.min(100,Math.round(50+o*100)));let s,l,a;t===0?(s="No income logged",l="#9A968C",a="Add your income to see your financial health."):o>=.3?(s="Excellent",l="#3E9E6B",a="You're saving 30%+ of income — keep investing the surplus."):o>=.2?(s="Healthy",l="#4C9A6B",a="Solid savings rate. Consider automating a SIP with the surplus."):o>=.1?(s="Okay",l="#C9A227",a="Decent, but aim for 20%+. Trim your biggest expense category."):o>=0?(s="Tight",l="#C2773B",a="You're saving very little. Review recurring bills and EMIs."):(s="Overspending",l="#D1556E",a="You're spending more than you earn. Cut back to avoid debt.");const d=t>0?Math.min(100,Math.round(e/t*100)):0;return r.jsxs("div",{style:D.card,children:[r.jsxs("div",{style:D.cardTitleRow,children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx(Nh,{size:18,color:l}),r.jsxs("div",{children:[r.jsx("div",{style:D.cardTitle,children:"Financial health"}),r.jsx("div",{style:D.cardSub,children:"Based on your savings rate this period"})]})]}),r.jsxs("div",{style:{textAlign:"right"},children:[r.jsx("div",{style:{...D.healthScore,color:l},children:t===0?"—":i}),r.jsx("div",{style:{...D.healthStatus,color:l},children:s})]})]}),r.jsx("div",{style:D.gaugeTrack,children:r.jsx("div",{style:{...D.gaugeFill,width:`${t===0?0:i}%`,background:l}})}),r.jsxs("div",{style:D.healthStats,children:[r.jsxs("div",{style:D.healthStat,children:[r.jsxs("span",{style:D.healthStatV,children:[t>0?Math.round(o*100):0,"%"]}),r.jsx("span",{style:D.healthStatL,children:"Savings rate"})]}),r.jsxs("div",{style:D.healthStat,children:[r.jsxs("span",{style:D.healthStatV,children:[d,"%"]}),r.jsx("span",{style:D.healthStatL,children:"of income spent"})]})]}),r.jsx("div",{style:{...D.tip,borderColor:l+"55",background:l+"12",color:l},children:a})]})}function W0({txns:t,reload:e,money:n}){const[o,i]=g.useState("expense"),[s,l]=g.useState(""),[a,d]=g.useState("Bills"),[c,p]=g.useState(Zo),[y,m]=g.useState(""),[j,x]=g.useState(null),{deleteItem:k,toasts:T,handleUndo:b,handleDismiss:u}=Fr(G.deleteTxn,G.restoreTxn,e),h=o==="income"?Ug:Yg,z=A=>{i(A),d(A==="income"?"Salary":"Bills")},v=async()=>{const A=parseFloat(s);!A||A<=0||(await G.createTxn({kind:o,category:a,amount:A,note:y.trim(),date:c}),l(""),m(""),e())},I=A=>x({id:A.id,kind:A.kind,amount:String(A.amount),category:A.category,date:A.date,note:A.note||""}),L=(j==null?void 0:j.kind)==="income"?Ug:Yg,R=A=>x(w=>({...w,kind:A,category:L.includes(w.category)?w.category:A==="income"?"Salary":"Bills"})),E=async()=>{const A=parseFloat(j.amount);!A||A<=0||(await G.updateTxn(j.id,{kind:j.kind,category:j.category,amount:A,note:j.note.trim(),date:j.date}),x(null),e())},M=g.useMemo(()=>{const A={};return t.forEach(w=>{(A[w.date]=A[w.date]||[]).push(w)}),Object.entries(A).sort((w,Y)=>Y[0].localeCompare(w[0]))},[t]),S=A=>new Date(A+"T00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"});return r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:D.card,children:[r.jsx("div",{style:D.cardTitle,children:"Add transaction"}),r.jsxs("div",{style:D.kindToggle,children:[r.jsxs("button",{onClick:()=>z("expense"),style:{...D.kindBtn,...o==="expense"?{background:mr,color:"#fff",borderColor:mr}:{}},children:[r.jsx(Ha,{size:15})," Expense"]}),r.jsxs("button",{onClick:()=>z("income"),style:{...D.kindBtn,...o==="income"?{background:br,color:"#fff",borderColor:br}:{}},children:[r.jsx(Oa,{size:15})," Income"]})]}),r.jsxs("div",{style:D.formGrid,children:[r.jsx("input",{type:"number",inputMode:"decimal",placeholder:"Amount",value:s,onChange:A=>l(A.target.value),onKeyDown:A=>A.key==="Enter"&&v(),style:D.input,autoFocus:!0}),r.jsx("select",{value:a,onChange:A=>d(A.target.value),style:D.input,children:h.map(A=>r.jsx("option",{children:A},A))}),r.jsx("input",{type:"date",value:c,max:Zo,onChange:A=>p(A.target.value),style:D.input})]}),r.jsx("input",{placeholder:"Note (optional)",value:y,onChange:A=>m(A.target.value),onKeyDown:A=>A.key==="Enter"&&v(),style:{...D.input,marginTop:8}}),r.jsxs("button",{onClick:v,style:{...D.addBtn,background:o==="income"?br:mr},children:[r.jsx(de,{size:15})," Add ",o]})]}),r.jsxs("div",{style:D.card,children:[r.jsx("div",{style:D.cardTitle,children:"History"}),M.length===0?r.jsx("div",{style:D.muted,children:"No transactions yet."}):r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:M.map(([A,w])=>r.jsxs("div",{children:[r.jsx("div",{style:D.dateHead,children:S(A)}),w.map(Y=>(j==null?void 0:j.id)===Y.id?r.jsxs("div",{style:D.editTxn,children:[r.jsxs("div",{style:D.kindToggle,children:[r.jsxs("button",{onClick:()=>R("expense"),style:{...D.kindBtn,...j.kind==="expense"?{background:mr,color:"#fff",borderColor:mr}:{}},children:[r.jsx(Ha,{size:14})," Expense"]}),r.jsxs("button",{onClick:()=>R("income"),style:{...D.kindBtn,...j.kind==="income"?{background:br,color:"#fff",borderColor:br}:{}},children:[r.jsx(Oa,{size:14})," Income"]})]}),r.jsxs("div",{style:D.formGrid,children:[r.jsx("input",{type:"number",inputMode:"decimal",value:j.amount,onChange:lt=>x({...j,amount:lt.target.value}),style:D.input}),r.jsx("select",{value:j.category,onChange:lt=>x({...j,category:lt.target.value}),style:D.input,children:L.map(lt=>r.jsx("option",{children:lt},lt))}),r.jsx("input",{type:"date",value:j.date,max:Zo,onChange:lt=>x({...j,date:lt.target.value}),style:D.input})]}),r.jsx("input",{placeholder:"Note (optional)",value:j.note,onChange:lt=>x({...j,note:lt.target.value}),onKeyDown:lt=>lt.key==="Enter"&&E(),style:{...D.input,marginTop:8}}),r.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[r.jsxs("button",{onClick:()=>x(null),style:D.editCancel,children:[r.jsx(Tt,{size:14})," Cancel"]}),r.jsxs("button",{onClick:E,style:{...D.addBtn,marginTop:0,flex:1,background:j.kind==="income"?br:mr},children:[r.jsx(Mt,{size:15})," Save"]})]})]},Y.id):r.jsxs("div",{style:D.txnRow,children:[r.jsx("span",{style:{...D.txnDot,background:Gb(Y.category)}}),r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("div",{style:D.txnCat,children:Y.category}),Y.note&&r.jsx("div",{style:D.txnNote,children:Y.note})]}),r.jsxs("span",{style:{...D.txnAmt,color:Y.kind==="income"?br:mr},children:[Y.kind==="income"?"+":"−",n(Y.amount)]}),r.jsx("button",{onClick:()=>I(Y),style:D.delBtn,children:r.jsx(ye,{size:13})}),r.jsx("button",{onClick:()=>k(Y.id,Y.category),style:D.delBtn,children:r.jsx(Tt,{size:14})})]},Y.id))]},A))})]}),r.jsx(Mr,{toasts:T,onUndo:b,onDismiss:u})]})}function _0({money:t,cur:e}){return r.jsxs(r.Fragment,{children:[r.jsx(L0,{money:t,cur:e}),r.jsx($0,{money:t,cur:e})]})}function fn({label:t,value:e,set:n,min:o,max:i,step:s,suffix:l}){return r.jsxs("div",{style:D.field,children:[r.jsxs("div",{style:D.fieldTop,children:[r.jsx("span",{style:D.fieldLabel,children:t}),r.jsxs("div",{style:D.fieldInputWrap,children:[r.jsx("input",{type:"number",value:e,onChange:a=>n(a.target.value),style:D.fieldInput}),l&&r.jsx("span",{style:D.fieldSuffix,children:l})]})]}),r.jsx("input",{type:"range",min:o,max:i,step:s,value:e,onChange:a=>n(a.target.value),style:D.range})]})}function L0({money:t,cur:e}){const[n,o]=g.useState(3e4),[i,s]=g.useState(12),[l,a]=g.useState(15),{invested:d,futureValue:c,gains:p,yearly:y}=g.useMemo(()=>{const j=Math.max(0,parseFloat(n)||0),x=Math.max(0,parseFloat(i)||0),k=Math.max(0,Math.min(60,parseInt(l)||0)),T=x/12/100,b=v=>v<=0?0:T===0?j*v:j*((Math.pow(1+T,v)-1)/T)*(1+T),u=[];for(let v=1;v<=k;v++)u.push({year:v,invested:j*12*v,value:b(v*12)});const h=b(k*12),z=j*12*k;return{invested:z,futureValue:h,gains:h-z,yearly:u}},[n,i,l]),m=Math.max(1,...y.map(j=>j.value));return r.jsxs("div",{style:D.card,children:[r.jsx("div",{style:D.cardTitleRow,children:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx(ty,{size:18,color:"#3A7CA5"}),r.jsxs("div",{children:[r.jsx("div",{style:D.cardTitle,children:"SIP projection"}),r.jsx("div",{style:D.cardSub,children:"Mutual fund / SIP future value"})]})]})}),r.jsx(fn,{label:"Monthly investment",value:n,set:o,min:500,max:5e5,step:500,suffix:e.symbol}),r.jsx(fn,{label:"Expected return (p.a.)",value:i,set:s,min:1,max:30,step:.5,suffix:"%"}),r.jsx(fn,{label:"Time period",value:l,set:a,min:1,max:40,step:1,suffix:"yrs"}),r.jsxs("div",{style:D.resultHero,children:[r.jsx("div",{style:D.resultLabel,children:"Projected wealth"}),r.jsx("div",{style:{...D.resultVal,color:"#3A7CA5"},children:t(c)})]}),r.jsxs("div",{style:D.splitRow,children:[r.jsxs("div",{style:D.splitItem,children:[r.jsx("span",{style:D.splitV,children:t(d)}),r.jsx("span",{style:D.splitL,children:"Invested"})]}),r.jsxs("div",{style:D.splitItem,children:[r.jsx("span",{style:{...D.splitV,color:"#3E9E6B"},children:t(p)}),r.jsx("span",{style:D.splitL,children:"Est. returns"})]})]}),y.length>0&&r.jsxs("div",{style:D.chartWrap,children:[r.jsx("div",{style:D.chartBars,children:y.map(j=>r.jsx("div",{style:D.chartCol,title:`Year ${j.year}: ${t(j.value)}`,children:r.jsx("div",{style:{...D.chartStack,height:`${j.value/m*100}%`},children:r.jsx("div",{style:{...D.chartGain,height:`${(1-j.invested/j.value)*100}%`}})})},j.year))}),r.jsxs("div",{style:D.chartAxis,children:[r.jsx("span",{children:"Yr 1"}),r.jsxs("span",{style:{marginLeft:"auto"},children:["Yr ",y.length]})]}),r.jsxs("div",{style:D.legend,children:[r.jsxs("span",{style:D.legendItem,children:[r.jsx("span",{style:{...D.legendDot,background:"#9DBFD6"}})," Invested"]}),r.jsxs("span",{style:D.legendItem,children:[r.jsx("span",{style:{...D.legendDot,background:"#3E9E6B"}})," Returns"]})]})]})]})}function Qg(t,e,n,o=0,i=0){let s=Math.max(0,t-i),l=0,a=0,d=i;const c=1200;for(;s>.01&&a<c;){const p=s*e;let y=n+o,m=y-p;if(m<=0)return{months:1/0,totalInterest:1/0,totalPaid:1/0};m>s&&(m=s,y=s+p),s-=m,l+=p,d+=y,a++}return{months:a,totalInterest:l,totalPaid:d}}const Kg=t=>{if(!isFinite(t))return"—";const e=Math.floor(t/12),n=t%12;return(e?`${e}y `:"")+`${n}m`},P0=t=>{if(!isFinite(t))return"—";const e=new Date;return e.setMonth(e.getMonth()+t),e.toLocaleDateString("en-US",{month:"short",year:"numeric"})};function $0({money:t,cur:e}){const[n,o]=g.useState(2e6),[i,s]=g.useState(9),[l,a]=g.useState(20),[d,c]=g.useState(5e5),[p,y]=g.useState("once"),[m,j]=g.useState("tenure"),x=g.useMemo(()=>{const h=Math.max(0,parseFloat(n)||0),z=Math.max(0,parseFloat(i)||0)/12/100,v=Math.max(1,Math.round((parseFloat(l)||0)*12)),I=z===0?h/v:h*z*Math.pow(1+z,v)/(Math.pow(1+z,v)-1);return{P:h,i:z,n:v,emi:I,totalPay:I*v,totalInterest:I*v-h}},[n,i,l]),k=p==="monthly"?"tenure":m,T=g.useMemo(()=>{const{P:h,i:z,n:v,emi:I,totalInterest:L}=x,R=Math.max(0,parseFloat(d)||0);if(R<=0)return null;let E=I,M=v,S=L,A=x.totalPay;if(p==="once"&&k==="emi"){const w=Math.max(0,h-R);E=z===0?w/v:w*z*Math.pow(1+z,v)/(Math.pow(1+z,v)-1),M=v,S=E*v-w,A=R+E*v}else if(p==="once"){const w=Qg(h,z,I,0,R);M=w.months,S=w.totalInterest,A=w.totalPaid}else{const w=Qg(h,z,I,R,0);M=w.months,S=w.totalInterest,A=w.totalPaid}return{newEMI:E,newMonths:M,newInterest:S,totalPaid:A,interestSaved:Math.max(0,L-S),monthsSaved:Math.max(0,v-(isFinite(M)?M:v))}},[x,d,p,k]),b=x.totalPay>0?x.P/x.totalPay*100:0,u=p==="once"?Math.max(1e5,Math.round(x.P)):Math.max(5e4,Math.round(x.emi*3));return r.jsxs("div",{style:D.card,children:[r.jsx("div",{style:D.cardTitleRow,children:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx(Sb,{size:18,color:"#C2536B"}),r.jsxs("div",{children:[r.jsx("div",{style:D.cardTitle,children:"EMI calculator"}),r.jsx("div",{style:D.cardSub,children:"Loan / mortgage monthly payment"})]})]})}),r.jsx(fn,{label:"Loan amount",value:n,set:o,min:5e4,max:5e7,step:5e4,suffix:e.symbol}),r.jsx(fn,{label:"Interest rate (p.a.)",value:i,set:s,min:1,max:24,step:.1,suffix:"%"}),r.jsx(fn,{label:"Tenure",value:l,set:a,min:1,max:30,step:1,suffix:"yrs"}),r.jsxs("div",{style:D.resultHero,children:[r.jsx("div",{style:D.resultLabel,children:"Monthly EMI"}),r.jsx("div",{style:{...D.resultVal,color:"#C2536B"},children:t(x.emi)})]}),r.jsxs("div",{style:D.emiSplitTrack,children:[r.jsx("div",{style:{width:`${b}%`,background:"#5B7C99",height:"100%"}}),r.jsx("div",{style:{width:`${100-b}%`,background:"#C2536B",height:"100%"}})]}),r.jsxs("div",{style:D.splitRow,children:[r.jsxs("div",{style:D.splitItem,children:[r.jsx("span",{style:{...D.splitV,color:"#5B7C99"},children:t(x.P)}),r.jsx("span",{style:D.splitL,children:"Principal"})]}),r.jsxs("div",{style:D.splitItem,children:[r.jsx("span",{style:{...D.splitV,color:"#C2536B"},children:t(x.totalInterest)}),r.jsx("span",{style:D.splitL,children:"Total interest"})]}),r.jsxs("div",{style:D.splitItem,children:[r.jsx("span",{style:D.splitV,children:t(x.totalPay)}),r.jsx("span",{style:D.splitL,children:"Total payable"})]})]}),r.jsx("div",{style:D.subDivider}),r.jsx("div",{style:D.subTitle,children:"Prepayment planner"}),r.jsx("div",{style:D.cardSub,children:"See what an extra payment does to your loan."}),r.jsx("div",{style:{marginTop:14},children:r.jsx(fn,{label:"Prepayment amount",value:d,set:c,min:0,max:u,step:p==="once"?25e3:1e3,suffix:e.symbol})}),r.jsxs("div",{style:D.segGroup,children:[r.jsx("span",{style:D.segLbl,children:"Type"}),r.jsxs("div",{style:D.segRow,children:[r.jsx(qi,{label:"One-time",on:p==="once",onClick:()=>y("once")}),r.jsx(qi,{label:"Every month",on:p==="monthly",onClick:()=>y("monthly")})]})]}),r.jsxs("div",{style:D.segGroup,children:[r.jsx("span",{style:D.segLbl,children:"Strategy"}),r.jsxs("div",{style:D.segRow,children:[r.jsx(qi,{label:"Reduce tenure",on:k==="tenure",onClick:()=>j("tenure")}),r.jsx(qi,{label:"Reduce EMI",on:k==="emi",disabled:p==="monthly",onClick:()=>j("emi")})]})]}),p==="monthly"&&r.jsx("div",{style:D.note,children:"An extra monthly payment always shortens the tenure. Switch to a one-time prepayment to reduce your EMI instead."}),T?r.jsxs("div",{style:D.cmpCard,children:[r.jsxs("div",{style:D.cmpRow,children:[r.jsx("span",{style:D.cmpLbl,children:"New EMI"}),r.jsxs("span",{style:D.cmpVal,children:[t(T.newEMI),T.newEMI<x.emi-1&&r.jsxs("span",{style:D.cmpWas,children:[" was ",t(x.emi)]})]})]}),r.jsxs("div",{style:D.cmpRow,children:[r.jsx("span",{style:D.cmpLbl,children:"New tenure"}),r.jsxs("span",{style:D.cmpVal,children:[Kg(T.newMonths)," ",r.jsxs("span",{style:D.cmpWas,children:["· paid off ",P0(T.newMonths)]})]})]}),r.jsxs("div",{style:D.cmpRow,children:[r.jsx("span",{style:D.cmpLbl,children:"Total interest"}),r.jsx("span",{style:D.cmpVal,children:t(T.newInterest)})]}),r.jsxs("div",{style:D.cmpRow,children:[r.jsx("span",{style:D.cmpLbl,children:"Total payable"}),r.jsx("span",{style:D.cmpVal,children:t(T.totalPaid)})]}),r.jsxs("div",{style:D.saveRow,children:["You save ",t(T.interestSaved)," in interest",T.monthsSaved>0?` · ${Kg(T.monthsSaved)} sooner`:""]})]}):r.jsx("div",{style:D.muted,children:"Enter a prepayment amount to see the impact."})]})}function qi({label:t,on:e,onClick:n,disabled:o}){return r.jsx("button",{onClick:o?void 0:n,disabled:o,style:{...D.seg,...e?D.segOn:{},...o?D.segDisabled:{}},children:t})}const D={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},tabs:{display:"flex",gap:7,marginBottom:18,flexWrap:"wrap"},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:10,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},presetRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},preset:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:18,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},presetOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},sumGrid:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:16},sumCard:{background:"var(--surface)",borderRadius:14,padding:"14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},sumIcon:{width:30,height:30,borderRadius:9,display:"grid",placeItems:"center",marginBottom:8},sumLabel:{fontSize:11.5,color:"var(--text-3)",fontWeight:600},sumVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:2,letterSpacing:"-0.01em",wordBreak:"break-word"},card:{background:"var(--surface)",borderRadius:16,padding:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)",marginBottom:16},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14,gap:10},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardSub:{fontSize:11.5,color:"var(--text-3)",marginTop:2},cardTotal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"14px 0"},twoCol:{display:"grid",gridTemplateColumns:"1fr",gap:0},dot:{width:10,height:10,borderRadius:3,flexShrink:0},pieWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap"},pieChart:{position:"relative",width:132,height:132,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:80,height:80,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:160,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8},legendName:{flex:1,fontSize:12.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},legendPct:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,width:34,textAlign:"right"},legendAmt:{fontSize:12.5,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:64,textAlign:"right"},healthScore:{fontSize:32,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1},healthStatus:{fontSize:12.5,fontWeight:700,marginTop:2},gaugeTrack:{height:10,background:"var(--surface-2)",borderRadius:6,overflow:"hidden",marginBottom:14},gaugeFill:{height:"100%",borderRadius:6,transition:"width 0.4s"},healthStats:{display:"flex",gap:24,marginBottom:12},healthStat:{display:"flex",flexDirection:"column"},healthStatV:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},healthStatL:{fontSize:11,color:"var(--text-3)",fontWeight:600},tip:{fontSize:12.5,lineHeight:1.5,padding:"10px 12px",borderRadius:10,border:"1px solid",fontWeight:500},kindToggle:{display:"flex",gap:8,marginBottom:12},kindBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},formGrid:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8},input:{border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},addBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",marginTop:10,border:"none",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},dateHead:{fontSize:11,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8},txnRow:{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid var(--border)"},txnDot:{width:9,height:9,borderRadius:"50%",flexShrink:0},txnCat:{fontSize:13.5,fontWeight:600},txnNote:{fontSize:11.5,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},txnAmt:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},delBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",flexShrink:0},editTxn:{background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:12,padding:12,margin:"6px 0"},editCancel:{display:"flex",alignItems:"center",justifyContent:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},field:{marginBottom:16},fieldTop:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},fieldLabel:{fontSize:13,fontWeight:600,color:"var(--text-2)"},fieldInputWrap:{display:"flex",alignItems:"center",gap:4,border:"1px solid var(--border)",borderRadius:8,padding:"5px 10px",background:"var(--surface-2)"},fieldInput:{border:"none",background:"none",outline:"none",width:90,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},fieldSuffix:{fontSize:12,color:"var(--text-3)",fontWeight:600},range:{width:"100%",accentColor:"var(--accent)",cursor:"pointer"},resultHero:{textAlign:"center",padding:"14px 0 6px"},resultLabel:{fontSize:12,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em"},resultVal:{fontSize:34,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:2,wordBreak:"break-word"},splitRow:{display:"flex",gap:10,marginTop:10},splitItem:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",background:"var(--surface-2)",borderRadius:10,padding:"10px 6px"},splitV:{fontSize:14.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",wordBreak:"break-word"},splitL:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginTop:2},chartWrap:{marginTop:18},chartBars:{display:"flex",alignItems:"flex-end",gap:3,height:90},chartCol:{flex:1,height:"100%",display:"flex",alignItems:"flex-end"},chartStack:{width:"100%",background:"#9DBFD6",borderRadius:"3px 3px 0 0",minHeight:2,position:"relative",display:"flex",flexDirection:"column",justifyContent:"flex-start"},chartGain:{width:"100%",background:"#3E9E6B",borderRadius:"3px 3px 0 0"},chartAxis:{display:"flex",fontSize:10,color:"var(--text-3)",fontWeight:600,marginTop:6},legend:{display:"flex",gap:16,justifyContent:"center",marginTop:10},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)",fontWeight:600},legendDot:{width:10,height:10,borderRadius:3},emiSplitTrack:{display:"flex",height:12,borderRadius:6,overflow:"hidden",marginTop:16,border:"1px solid var(--border)"},subDivider:{height:1,background:"var(--border)",margin:"20px 0 14px"},subTitle:{fontSize:15,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},segGroup:{marginBottom:12},segLbl:{fontSize:12,fontWeight:600,color:"var(--text-3)",display:"block",marginBottom:6},segRow:{display:"flex",gap:8},seg:{flex:1,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},segOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},segDisabled:{opacity:.4,cursor:"not-allowed"},note:{fontSize:12,lineHeight:1.5,color:"var(--text-3)",background:"var(--surface-2)",borderRadius:9,padding:"9px 11px",marginBottom:12},cmpCard:{background:"var(--surface-2)",borderRadius:12,padding:"12px 14px",marginTop:4},cmpRow:{display:"flex",justifyContent:"space-between",alignItems:"baseline",padding:"6px 0",borderBottom:"1px solid var(--border)",gap:10},cmpLbl:{fontSize:12.5,color:"var(--text-2)",fontWeight:600},cmpVal:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",textAlign:"right"},cmpWas:{fontSize:11,color:"var(--text-3)",fontWeight:500,fontFamily:"'Inter',system-ui,sans-serif"},saveRow:{marginTop:12,background:"rgba(62,158,107,0.12)",color:"#3E9E6B",borderRadius:9,padding:"10px 12px",fontSize:13,fontWeight:700,textAlign:"center"}},Za=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Ul={Monday:"Mon",Tuesday:"Tue",Wednesday:"Wed",Thursday:"Thu",Friday:"Fri",Saturday:"Sat",Sunday:"Sun"},$o=()=>Za[(new Date().getDay()+6)%7],wr={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"},Xg=Object.keys(wr),Yl=21,qg="kickstart_tags",Vl=t=>{if(!t)return"";const e=t.trim();if(/^[A-Za-z0-9_-]{11}$/.test(e))return e;const n=e.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return n?n[1]:""},Jg=t=>{if(!t||!String(t).trim())return null;const e=String(t).split(":").map(n=>parseInt(n.trim(),10));return e.some(n=>isNaN(n)||n<0)?null:e.reduce((n,o)=>n*60+o,0)},Ji=t=>{if(t==null)return"";const e=Math.max(0,t|0);return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`},N0=t=>`https://www.youtube.com/embed/${t.youtube_id}?start=${t.start_sec||0}`+(t.end_sec?`&end=${t.end_sec}`:"")+"&autoplay=1&rel=0",O0=()=>({id:null,url:"",title:"",start:"",end:"",days:[$o()],pillars:[],customs:[]});function H0(){const[t,e]=g.useState([]),[n,o]=g.useState([]),[i,s]=g.useState(!1),[l,a]=g.useState({type:"day",value:$o()}),[d,c]=g.useState(null),[p,y]=g.useState(null),[m,j]=g.useState(""),x=g.useCallback(async()=>{try{const[w,Y]=await Promise.all([G.getKickstart(),G.getSetting(qg)]);e(w),o(Array.isArray(Y==null?void 0:Y.value)?Y.value:[])}catch{}s(!0)},[]);g.useEffect(()=>{x()},[x]);const{deleteItem:k,toasts:T,handleUndo:b,handleDismiss:u}=Fr(G.deleteKickstart,G.restoreKickstart,x);g.useEffect(()=>{if(!p)return;const w=t.find(U=>U.id===p);if(!w)return;const Y=w.end_sec?Math.max(1,w.end_sec-(w.start_sec||0)):1/0;let lt=0;const rt=10,ht=setInterval(()=>{if(document.hidden)return;const U=Y-lt;if(U<=0){clearInterval(ht);return}const O=Math.min(rt,U);lt+=O,G.addScreenTime("kickstart",Math.round(O)).catch(()=>{})},rt*1e3);return()=>clearInterval(ht)},[p,t]);const h=w=>{o(w),G.setSetting(qg,w).catch(()=>{})},z=()=>{const w=m.trim();!w||n.length>=Yl||n.includes(w)||(h([...n,w]),c(Y=>Y&&!Y.customs.includes(w)?{...Y,customs:[...Y.customs,w]}:Y),j(""))},v=w=>h(n.filter(Y=>Y!==w)),I=(w,Y)=>c(lt=>({...lt,[w]:lt[w].includes(Y)?lt[w].filter(rt=>rt!==Y):[...lt[w],Y]})),L=w=>c({id:w.id,url:`https://youtu.be/${w.youtube_id}`,title:w.title,start:Ji(w.start_sec),end:w.end_sec?Ji(w.end_sec):"",days:[...w.days],pillars:[...w.pillars],customs:[...w.customs]}),R=async()=>{const w=Vl(d.url);if(!w||d.days.length===0||!d.title.trim())return;const Y={youtube_id:w,title:d.title.trim(),start_sec:Jg(d.start)||0,end_sec:Jg(d.end),days:d.days,pillars:d.pillars,customs:d.customs};d.id?await G.updateKickstart(d.id,Y):await G.createKickstart(Y),c(null),x()},E=g.useMemo(()=>t.filter(w=>l.type==="all"?!0:l.type==="day"?w.days.includes(l.value):l.type==="pillar"?w.pillars.includes(l.value):l.type==="custom"?w.customs.includes(l.value):!0),[t,l]),M=(w,Y)=>l.type===w&&l.value===Y,S=d?[!Vl(d.url)&&"a valid YouTube link",!d.title.trim()&&"a title",d.days.length===0&&"at least one day"].filter(Boolean):[],A=!!d&&S.length===0;return r.jsxs("div",{style:it.page,children:[r.jsxs("div",{style:it.head,children:[r.jsxs("div",{children:[r.jsx("div",{style:it.eyebrow,children:"Anvil · Kickstart"}),r.jsx("h1",{style:it.h1,children:"Kickstart"}),r.jsxs("div",{style:it.subhead,children:["Your motivation hub — the right push for ",$o(),"."]})]}),!d&&r.jsxs("button",{onClick:()=>c(O0()),style:it.addBtn,children:[r.jsx(de,{size:15})," Add video"]})]}),d&&r.jsxs("div",{style:it.card,children:[r.jsx("div",{style:it.cardTitle,children:d.id?"Edit video":"Add video"}),r.jsx("input",{placeholder:"YouTube link (or video ID)",value:d.url,onChange:w=>c({...d,url:w.target.value}),style:it.input,autoFocus:!0}),d.url&&!Vl(d.url)&&r.jsx("div",{style:it.warn,children:"Couldn't find a YouTube video ID in that link."}),r.jsx("input",{placeholder:"Title (required)",value:d.title,onChange:w=>c({...d,title:w.target.value}),style:{...it.input,marginTop:8}}),r.jsxs("div",{style:it.trimRow,children:[r.jsx(ry,{size:15,color:"var(--text-3)"}),r.jsxs("label",{style:it.trimField,children:[r.jsx("span",{style:it.trimLbl,children:"Start"}),r.jsx("input",{placeholder:"0:30",value:d.start,onChange:w=>c({...d,start:w.target.value}),style:it.trimInput})]}),r.jsx("span",{style:it.trimArrow,children:"→"}),r.jsxs("label",{style:it.trimField,children:[r.jsx("span",{style:it.trimLbl,children:"End"}),r.jsx("input",{placeholder:"end (optional)",value:d.end,onChange:w=>c({...d,end:w.target.value}),style:it.trimInput})]})]}),r.jsx("div",{style:it.hint,children:"Only this trimmed part plays. Use m:ss (e.g. 1:30). Leave End blank to play to the end."}),r.jsxs("div",{style:it.tagBlock,children:[r.jsxs("div",{style:it.tagLabel,children:["Days ",r.jsx("span",{style:it.req,children:"required"})]}),r.jsx("div",{style:it.chipRow,children:Za.map(w=>r.jsx("button",{onClick:()=>I("days",w),style:{...it.chip,...d.days.includes(w)?it.chipOnDark:{}},children:Ul[w]},w))})]}),r.jsxs("div",{style:it.tagBlock,children:[r.jsxs("div",{style:it.tagLabel,children:["Pillars ",r.jsx("span",{style:it.opt,children:"optional"})]}),r.jsx("div",{style:it.chipRow,children:Xg.map(w=>{const Y=d.pillars.includes(w);return r.jsxs("button",{onClick:()=>I("pillars",w),style:{...it.chip,...Y?{background:wr[w],color:"#fff",borderColor:wr[w]}:{}},children:[r.jsx("span",{style:{...it.dot,background:Y?"#fff":wr[w]}}),w]},w)})})]}),r.jsxs("div",{style:it.tagBlock,children:[r.jsxs("div",{style:it.tagLabel,children:["Custom tags ",r.jsxs("span",{style:it.opt,children:["optional · ",n.length,"/",Yl]})]}),r.jsxs("div",{style:it.chipRow,children:[n.map(w=>r.jsxs("span",{style:{...it.chip,...d.customs.includes(w)?it.chipOnAccent:{},paddingRight:4},children:[r.jsx("button",{onClick:()=>I("customs",w),style:it.chipInner,children:w}),r.jsx("button",{onClick:()=>v(w),style:it.chipX,title:"Delete tag",children:r.jsx(Tt,{size:11})})]},w)),n.length===0&&r.jsx("span",{style:it.muted,children:"No custom tags yet."})]}),n.length<Yl&&r.jsxs("div",{style:it.newTagRow,children:[r.jsx("input",{placeholder:"New custom tag…",value:m,onChange:w=>j(w.target.value),onKeyDown:w=>w.key==="Enter"&&z(),style:{...it.input,padding:"7px 10px"}}),r.jsx("button",{onClick:z,style:it.smallBtn,children:r.jsx(de,{size:14})})]})]}),!A&&r.jsxs("div",{style:it.warn,children:["Add ",S.join(", ")," to save."]}),r.jsxs("div",{style:it.formActions,children:[r.jsxs("button",{onClick:()=>c(null),style:it.cancelBtn,children:[r.jsx(Tt,{size:14})," Cancel"]}),r.jsxs("button",{onClick:R,disabled:!A,style:{...it.saveBtn,...A?{}:it.saveDisabled},children:[r.jsx(Mt,{size:15})," ",d.id?"Save":"Add video"]})]})]}),r.jsxs("div",{style:it.filterCard,children:[r.jsx("button",{onClick:()=>a({type:"all"}),style:{...it.fChip,...l.type==="all"?it.fChipOnDark:{}},children:"All"}),r.jsx("span",{style:it.fDivider}),Za.map(w=>r.jsxs("button",{onClick:()=>a({type:"day",value:w}),style:{...it.fChip,...M("day",w)?it.fChipOnDark:{},...w===$o()?it.fToday:{}},children:[Ul[w],w===$o()?" ·":""]},w)),r.jsx("span",{style:it.fDivider}),Xg.map(w=>r.jsxs("button",{onClick:()=>a({type:"pillar",value:w}),style:{...it.fChip,...M("pillar",w)?{background:wr[w],color:"#fff",borderColor:wr[w]}:{}},children:[r.jsx("span",{style:{...it.dot,background:M("pillar",w)?"#fff":wr[w]}}),w]},w)),n.length>0&&r.jsx("span",{style:it.fDivider}),n.map(w=>r.jsxs("button",{onClick:()=>a({type:"custom",value:w}),style:{...it.fChip,...M("custom",w)?it.fChipOnAccent:{}},children:[r.jsx(sy,{size:11})," ",w]},w))]}),i?E.length===0?r.jsx("div",{style:it.empty,children:t.length===0?"No videos yet — add your first motivation clip.":"No videos for this tag."}):r.jsx("div",{style:it.grid,children:E.map(w=>r.jsxs("div",{style:it.videoCard,children:[r.jsx("div",{style:it.thumbWrap,children:p===w.id?r.jsx("iframe",{src:N0(w),title:w.title||w.youtube_id,style:it.iframe,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):r.jsxs("button",{onClick:()=>y(w.id),style:it.thumbBtn,children:[r.jsx("img",{src:`https://img.youtube.com/vi/${w.youtube_id}/hqdefault.jpg`,alt:"",style:it.thumb}),r.jsx("span",{style:it.playOverlay,children:r.jsx(Eb,{size:22,color:"#fff",fill:"#fff"})}),r.jsxs("span",{style:it.trimBadge,children:[Ji(w.start_sec),w.end_sec?` – ${Ji(w.end_sec)}`:"+"]})]})}),r.jsxs("div",{style:it.videoBody,children:[r.jsx("div",{style:it.videoTitle,children:w.title||"Untitled clip"}),r.jsxs("div",{style:it.tagWrap,children:[w.days.map(Y=>r.jsx("span",{style:it.dayTag,children:Ul[Y]},Y)),w.pillars.map(Y=>r.jsx("span",{style:{...it.pillTag,color:wr[Y]||"var(--text-2)",borderColor:wr[Y]||"var(--border)"},children:Y},Y)),w.customs.map(Y=>r.jsx("span",{style:it.customTag,children:Y},Y))]}),r.jsxs("div",{style:it.cardActions,children:[r.jsx("button",{onClick:()=>L(w),style:it.iconBtn,title:"Edit",children:r.jsx(ye,{size:13})}),r.jsx("button",{onClick:()=>k(w.id,w.title||"video"),style:it.iconBtn,title:"Delete",children:r.jsx(Tt,{size:14})})]})]})]},w.id))}):r.jsx("div",{style:it.muted,children:"Loading…"}),r.jsx(Mr,{toasts:T,onUndo:b,onDismiss:u})]})}const it={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:1e3,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},input:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},warn:{fontSize:11.5,color:"#C2773B",marginTop:5,fontWeight:600},hint:{fontSize:11.5,color:"var(--text-3)",marginTop:6,lineHeight:1.4},trimRow:{display:"flex",alignItems:"flex-end",gap:10,marginTop:10},trimField:{display:"flex",flexDirection:"column",gap:4,flex:1},trimLbl:{fontSize:11,color:"var(--text-2)",fontWeight:600},trimInput:{border:"1px solid var(--border)",borderRadius:8,padding:"8px 10px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},trimArrow:{color:"var(--text-3)",paddingBottom:9},tagBlock:{marginTop:14},tagLabel:{fontSize:12,fontWeight:700,color:"var(--text-2)",marginBottom:7},req:{fontSize:10,fontWeight:700,color:"#C2536B",textTransform:"uppercase",marginLeft:6},opt:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",marginLeft:6},chipRow:{display:"flex",gap:6,flexWrap:"wrap"},chip:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},chipOnDark:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},chipOnAccent:{background:"var(--accent)",color:"#fff",borderColor:"var(--accent)"},chipInner:{border:"none",background:"none",color:"inherit",cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:600,padding:0},chipX:{border:"none",background:"rgba(0,0,0,0.12)",color:"inherit",cursor:"pointer",display:"grid",placeItems:"center",borderRadius:"50%",width:16,height:16,padding:0},newTagRow:{display:"flex",gap:6,marginTop:8,maxWidth:280},smallBtn:{border:"none",background:"var(--accent)",color:"#fff",width:34,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},dot:{width:8,height:8,borderRadius:"50%",flexShrink:0,display:"inline-block"},formActions:{display:"flex",gap:8,marginTop:16},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:"var(--accent)",color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"},filterCard:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:12,marginBottom:18},fChip:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},fChipOnDark:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},fChipOnAccent:{background:"var(--accent)",color:"#fff",borderColor:"var(--accent)"},fToday:{borderColor:"var(--accent)",borderWidth:2},fDivider:{width:1,alignSelf:"stretch",background:"var(--border)",margin:"0 2px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:14},videoCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},thumbWrap:{position:"relative",width:"100%",aspectRatio:"16 / 9",background:"#000"},thumbBtn:{border:"none",padding:0,margin:0,cursor:"pointer",width:"100%",height:"100%",position:"relative",display:"block",background:"#000"},thumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},playOverlay:{position:"absolute",inset:0,display:"grid",placeItems:"center",background:"rgba(0,0,0,0.28)"},trimBadge:{position:"absolute",bottom:8,right:8,background:"rgba(0,0,0,0.75)",color:"#fff",fontSize:11,fontWeight:700,padding:"2px 7px",borderRadius:6,fontFamily:"'Fraunces',Georgia,serif"},iframe:{width:"100%",height:"100%",border:"none",display:"block"},videoBody:{padding:"12px 13px",display:"flex",flexDirection:"column",gap:8},videoTitle:{fontSize:14,fontWeight:700},tagWrap:{display:"flex",gap:5,flexWrap:"wrap"},dayTag:{fontSize:10,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",padding:"2px 7px",borderRadius:8},pillTag:{fontSize:10,fontWeight:700,border:"1px solid",borderRadius:8,padding:"2px 7px"},customTag:{fontSize:10,fontWeight:700,color:"var(--accent)",background:"color-mix(in srgb, var(--accent) 14%, transparent)",padding:"2px 7px",borderRadius:8},cardActions:{display:"flex",gap:4,justifyContent:"flex-end"},iconBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"}},Ub=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,Zg=()=>Ub(new Date),tu=(t,e)=>{const n=new Date(t+"T00:00:00");return n.setDate(n.getDate()+e),Ub(n)},eu=t=>new Date(t+"T00:00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",year:"numeric"}),G0=t=>{if(!t)return"";const e=t.trim();if(/^[A-Za-z0-9_-]{11}$/.test(e))return e;const n=e.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return n?n[1]:""},U0=t=>new Promise((e,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:l,height:a}=i;l>a&&l>900?(a=a*900/l,l=900):a>900&&(l=l*900/a,a=900);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(i,0,0,l,a),e(d.toDataURL("image/jpeg",.82))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(t)});function Y0(){const[t,e]=g.useState([]),[n,o]=g.useState(!1),[i,s]=g.useState(null),[l,a]=g.useState(!1),[d,c]=g.useState({title:"",image:""}),[p,y]=g.useState(""),[m,j]=g.useState(!0),[x,k]=g.useState(null),T=g.useCallback(async()=>{try{e(await G.getGoldenGoals())}catch{}o(!0)},[]);g.useEffect(()=>{T()},[T]),g.useEffect(()=>{G.getSetting("golden_music").then(v=>y(G0((v==null?void 0:v.value)||""))).catch(()=>{})},[]);const b=async()=>{if(!d.title.trim())return;const v=await G.createGolden({title:d.title.trim(),image:d.image});c({title:"",image:""}),a(!1),await T(),s(v.id)},u=async(v,I)=>{var R;const L=(R=v.target.files)==null?void 0:R[0];if(L)try{I(await U0(L))}catch{}},h=t.filter(v=>!v.achieved),z=t.filter(v=>v.achieved);return i?r.jsxs("div",{style:st.page,children:[r.jsx(K0,{musicId:p,on:m}),r.jsx(V0,{goalId:i,onBack:()=>s(null),onReload:T,onCelebrate:(v,I)=>k({title:v,days:I}),pickImage:u,musicId:p,musicOn:m,setMusicOn:j}),x&&r.jsx(Q0,{data:x,onClose:()=>k(null)})]}):r.jsxs("div",{style:st.page,children:[r.jsxs("div",{style:st.head,children:[r.jsxs("div",{children:[r.jsx("div",{style:st.eyebrow,children:"Anvil · Golden Book"}),r.jsx("h1",{style:st.h1,children:"Golden Book"}),r.jsx("div",{style:st.subhead,children:"Write your dreams into being — a little every day."})]}),!l&&r.jsxs("button",{onClick:()=>a(!0),style:st.addBtn,children:[r.jsx(de,{size:15})," New dream"]})]}),l&&r.jsxs("div",{style:st.card,children:[r.jsx("div",{style:st.cardTitle,children:"Manifest a new dream"}),r.jsx("textarea",{autoFocus:!0,placeholder:"Write your dream as if it's already true…",value:d.title,onChange:v=>c({...d,title:v.target.value}),style:st.textarea}),r.jsxs("label",{style:st.photoPick,children:[d.image?r.jsx("img",{src:d.image,alt:"",style:st.photoPreview}):r.jsxs("span",{style:st.photoEmpty,children:[r.jsx(il,{size:18})," Add a photo"]}),r.jsx("input",{type:"file",accept:"image/*",onChange:v=>u(v,I=>c({...d,image:I})),style:{display:"none"}})]}),r.jsxs("div",{style:st.formActions,children:[r.jsxs("button",{onClick:()=>{a(!1),c({title:"",image:""})},style:st.cancelBtn,children:[r.jsx(Tt,{size:14})," Cancel"]}),r.jsxs("button",{onClick:b,disabled:!d.title.trim(),style:{...st.saveBtn,...d.title.trim()?{}:st.saveDisabled},children:[r.jsx(Mt,{size:15})," Create"]})]})]}),n?r.jsxs(r.Fragment,{children:[h.length===0&&z.length===0&&!l&&r.jsx("div",{style:st.empty,children:"No dreams yet. Add your first one and revisit it daily."}),h.length>0&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:st.sectionTitle,children:[r.jsx(ji,{size:15,color:"#C9A227"})," Manifesting ",r.jsx("span",{style:st.badge,children:h.length})]}),r.jsx("div",{style:st.grid,children:h.map(v=>r.jsx(ru,{g:v,onOpen:()=>s(v.id)},v.id))})]}),z.length>0&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{...st.sectionTitle,marginTop:22},children:[r.jsx(Dr,{size:15,color:"#4C9A6B"})," Manifested ",r.jsx("span",{style:st.badge,children:z.length})]}),r.jsx("div",{style:st.grid,children:z.map(v=>r.jsx(ru,{g:v,onOpen:()=>s(v.id),achieved:!0},v.id))})]})]}):r.jsx("div",{style:st.muted,children:"Loading…"})]})}function ru({g:t,onOpen:e,achieved:n}){return r.jsxs("button",{onClick:e,style:{...st.goalCard,...n?{opacity:.96}:{}},children:[r.jsxs("div",{style:st.thumbWrap,children:[t.image?r.jsx("img",{src:t.image,alt:"",style:st.thumb}):r.jsx("div",{style:st.thumbEmpty,children:r.jsx(ji,{size:26,color:"var(--text-3)"})}),n&&r.jsx("span",{style:st.stamp,children:"✦ Manifested"})]}),r.jsxs("div",{style:st.goalBody,children:[r.jsx("div",{style:st.goalTitle,children:t.title}),r.jsxs("div",{style:st.goalMeta,children:[n?r.jsxs("span",{style:{...st.metaPill,color:"#4C9A6B",background:"rgba(76,154,107,0.12)"},children:[r.jsx(Dr,{size:12})," ",t.days_to_manifest!=null?`in ${t.days_to_manifest} day${t.days_to_manifest===1?"":"s"}`:"done"]}):r.jsxs("span",{style:{...st.metaPill,color:"#C2773B",background:"rgba(194,119,59,0.12)"},children:[r.jsx(ho,{size:12})," ",t.streak," day streak"]}),r.jsxs("span",{style:st.metaDim,children:[t.total_days," entr",t.total_days===1?"y":"ies"]})]})]})]})}function V0({goalId:t,onBack:e,onReload:n,onCelebrate:o,pickImage:i,musicId:s,musicOn:l,setMusicOn:a}){const[d,c]=g.useState(null),[p,y]=g.useState({}),[m,j]=g.useState(Zg()),[x,k]=g.useState(""),[T,b]=g.useState(null),u=Zg(),h=g.useCallback(async()=>{const A=await G.getGoldenGoal(t);c(A);const w={};A.entries.forEach(Y=>{w[Y.date]=Y.text}),y(w),k(w[u]||"")},[t,u]);if(g.useEffect(()=>{h()},[h]),!d)return r.jsx("div",{style:st.muted,children:"Loading…"});const z=m===u,v=m>d.created_date,I=m<u,L=async()=>{await G.upsertGoldenEntry(t,{date:u,text:x}),await h(),n()},R=async()=>{const A=await G.achieveGolden(t);o(d.title,A.days_to_manifest),await h(),n()},E=async()=>{await G.unachieveGolden(t),await h(),n()},M=async()=>{T.trim()&&(await G.updateGolden(t,{title:T.trim()}),b(null),await h(),n())},S=A=>G.updateGolden(t,{image:A}).then(()=>{h(),n()});return r.jsxs(r.Fragment,{children:[r.jsxs("button",{onClick:e,style:st.backBtn,children:[r.jsx(wb,{size:16})," All dreams"]}),r.jsxs("div",{style:st.detailHero,children:[r.jsxs("label",{style:st.heroPhoto,children:[d.image?r.jsx("img",{src:d.image,alt:"",style:st.heroImg}):r.jsxs("span",{style:st.photoEmpty,children:[r.jsx(il,{size:20})," Add a photo"]}),r.jsxs("span",{style:st.photoEdit,children:[r.jsx(ye,{size:12})," Edit photo"]}),r.jsx("input",{type:"file",accept:"image/*",onChange:A=>i(A,S),style:{display:"none"}})]}),r.jsxs("div",{style:st.heroInfo,children:[d.achieved&&r.jsxs("span",{style:st.heroStamp,children:["✦ Manifested",d.days_to_manifest!=null?` in ${d.days_to_manifest} day${d.days_to_manifest===1?"":"s"}`:""]}),T!==null?r.jsxs("div",{style:{display:"flex",gap:6,width:"100%"},children:[r.jsx("textarea",{autoFocus:!0,value:T,onChange:A=>b(A.target.value),style:{...st.textarea,minHeight:60}}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[r.jsx("button",{onClick:M,style:st.iconSave,children:r.jsx(Mt,{size:14})}),r.jsx("button",{onClick:()=>b(null),style:st.iconCancel,children:r.jsx(Tt,{size:14})})]})]}):r.jsxs("div",{style:st.heroTitleRow,children:[r.jsx("div",{style:st.heroTitle,children:d.title}),r.jsx("button",{onClick:()=>b(d.title),style:st.ghostBtn,title:"Edit",children:r.jsx(ye,{size:13})})]}),r.jsxs("div",{style:st.heroStats,children:[r.jsxs("span",{style:{...st.metaPill,color:"#C2773B",background:"rgba(194,119,59,0.12)"},children:[r.jsx(ho,{size:13})," ",d.streak," day streak"]}),r.jsxs("span",{style:st.metaDim,children:[d.total_days," entr",d.total_days===1?"y":"ies"]}),r.jsxs("span",{style:st.metaDim,children:["since ",eu(d.created_date)]})]})]})]}),r.jsxs("div",{style:st.writeCard,children:[r.jsx("div",{style:st.tuneRow,children:s?r.jsxs("button",{onClick:()=>a(A=>!A),style:{...st.tuneBtn,...l?st.tuneOn:{}},children:[l?r.jsx(zb,{size:14}):r.jsx(Tb,{size:14})," Soft tunes"]}):r.jsx("span",{style:st.tuneHint,children:"Add a track in Settings → Music"})}),r.jsxs("div",{style:st.writeNav,children:[r.jsx("button",{onClick:()=>j(A=>tu(A,-1)),disabled:!v,style:{...st.navBtn,...v?{}:st.navDisabled},children:r.jsx(zn,{size:16})}),r.jsx("div",{style:st.writeDate,children:z?"Today":eu(m)}),r.jsx("button",{onClick:()=>j(A=>tu(A,1)),disabled:!I,style:{...st.navBtn,...I?{}:st.navDisabled},children:r.jsx(sn,{size:16})})]}),z&&!d.achieved?r.jsxs(r.Fragment,{children:[r.jsx("textarea",{value:x,onChange:A=>k(A.target.value),placeholder:"Write it again today, as if it's already yours…",style:st.writeArea}),r.jsxs("button",{onClick:L,style:st.writeSave,children:[r.jsx(Mt,{size:15})," Save today's entry"]})]}):r.jsx("div",{style:st.readEntry,children:p[m]?r.jsxs(r.Fragment,{children:[r.jsx(Rb,{size:16,color:"var(--text-3)"}),r.jsx("p",{style:st.readText,children:p[m]})]}):r.jsx("div",{style:st.muted,children:"Nothing written on this day."})})]}),d.achieved?r.jsx("button",{onClick:E,style:st.unmanifestBtn,children:"Undo manifested"}):r.jsxs("button",{onClick:R,style:st.manifestBtn,children:[r.jsx(ji,{size:16})," Mark as manifested"]})]})}function Q0({data:t,onClose:e}){return r.jsx("div",{style:st.celebOverlay,onClick:e,children:r.jsxs("div",{style:st.celebBox,onClick:n=>n.stopPropagation(),children:[r.jsx("div",{style:st.celebEmoji,children:"✨🌟✨"}),r.jsx("div",{style:st.celebTitle,children:"It's happening!"}),r.jsxs("div",{style:st.celebDream,children:['"',t.title,'"']}),r.jsxs("div",{style:st.celebSub,children:[t.days!=null?`Manifested in ${t.days} day${t.days===1?"":"s"}.`:"Manifested."," The universe delivered. 🙏"]}),r.jsx("button",{onClick:e,style:st.celebBtn,children:"Wonderful"})]})})}function K0({musicId:t,on:e}){return!t||!e?null:r.jsx("iframe",{title:"golden-music",src:`https://www.youtube.com/embed/${t}?autoplay=1&loop=1&playlist=${t}&controls=0&modestbranding=1&playsinline=1`,allow:"autoplay; encrypted-media",style:{position:"fixed",left:-1e4,top:0,width:320,height:180,border:"none"}})}const dn="#C9A227",st={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:860,margin:"0 auto",position:"relative"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:dn,color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},textarea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"11px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:70,resize:"vertical",lineHeight:1.5},photoPick:{display:"block",marginTop:10,cursor:"pointer",borderRadius:12,overflow:"hidden",border:"1px dashed var(--border)"},photoPreview:{width:"100%",maxHeight:220,objectFit:"cover",display:"block"},photoEmpty:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"26px 0",color:"var(--text-3)",fontSize:13,fontWeight:600},formActions:{display:"flex",gap:8,marginTop:14},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:dn,color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:12},badge:{fontSize:11,fontWeight:700,background:"var(--hover)",color:"var(--text-2)",borderRadius:10,padding:"1px 7px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:14},goalCard:{textAlign:"left",border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,overflow:"hidden",cursor:"pointer",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",padding:0,fontFamily:"inherit",display:"flex",flexDirection:"column"},thumbWrap:{position:"relative",width:"100%",aspectRatio:"16 / 10",background:"var(--surface-2)"},thumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},thumbEmpty:{width:"100%",height:"100%",display:"grid",placeItems:"center"},stamp:{position:"absolute",top:8,right:8,transform:"rotate(6deg)",background:"rgba(76,154,107,0.95)",color:"#fff",fontSize:11,fontWeight:800,letterSpacing:"0.04em",padding:"3px 9px",borderRadius:6,border:"1.5px solid #fff",textTransform:"uppercase"},goalBody:{padding:"11px 13px",display:"flex",flexDirection:"column",gap:8},goalTitle:{fontSize:14,fontWeight:600,lineHeight:1.35,display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"},goalMeta:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},metaPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11.5,fontWeight:700,padding:"2px 8px",borderRadius:10},metaDim:{fontSize:11,color:"var(--text-3)",fontWeight:500},backBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit",marginBottom:16},detailHero:{display:"flex",flexDirection:"column",gap:14,marginBottom:16},heroPhoto:{position:"relative",width:"100%",borderRadius:14,overflow:"hidden",border:"1px solid var(--border)",cursor:"pointer",background:"var(--surface-2)",display:"flex",alignItems:"center",justifyContent:"center",minHeight:120},heroImg:{width:"100%",maxHeight:"62vh",objectFit:"contain",display:"block"},photoEdit:{position:"absolute",bottom:8,right:8,display:"flex",alignItems:"center",gap:5,background:"rgba(0,0,0,0.6)",color:"#fff",fontSize:11,fontWeight:600,padding:"4px 8px",borderRadius:7},heroInfo:{display:"flex",flexDirection:"column",gap:10,alignItems:"center",textAlign:"center"},heroStamp:{alignSelf:"center",background:"rgba(76,154,107,0.14)",color:"#4C9A6B",fontSize:12,fontWeight:800,padding:"4px 10px",borderRadius:8,letterSpacing:"0.03em"},heroTitleRow:{display:"flex",alignItems:"flex-start",gap:8,justifyContent:"center"},heroTitle:{fontSize:23,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.35},heroStats:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap",justifyContent:"center"},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",flexShrink:0},iconSave:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},iconCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},writeCard:{background:"var(--surface)",borderRadius:14,padding:16,border:"1px solid var(--border)",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},tuneRow:{display:"flex",justifyContent:"flex-end",marginBottom:10},tuneBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 12px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tuneOn:{background:dn,color:"#fff",borderColor:dn},tuneHint:{fontSize:11,color:"var(--text-3)",fontWeight:500},writeNav:{display:"flex",alignItems:"center",justifyContent:"center",gap:14,marginBottom:12},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center"},navDisabled:{opacity:.35,cursor:"not-allowed"},writeDate:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:150,textAlign:"center"},writeArea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"12px",fontSize:15,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:120,resize:"vertical",lineHeight:1.6},writeSave:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",marginTop:10,border:"none",background:dn,color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},readEntry:{display:"flex",gap:8,padding:"6px 2px"},readText:{fontSize:15,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.6,margin:0,whiteSpace:"pre-wrap"},manifestBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,width:"100%",border:"none",background:"linear-gradient(135deg,#C9A227,#E0BD45)",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:800,cursor:"pointer",fontFamily:"inherit",boxShadow:"0 2px 10px rgba(201,162,39,0.35)"},unmanifestBtn:{display:"block",margin:"0 auto",border:"none",background:"none",color:"var(--text-3)",fontSize:12,fontWeight:600,cursor:"pointer",textDecoration:"underline",fontFamily:"inherit"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.6)",zIndex:200,display:"grid",placeItems:"center",padding:16},celebBox:{background:"var(--surface)",color:"var(--text)",borderRadius:20,padding:"36px 30px",textAlign:"center",maxWidth:360,boxShadow:"0 12px 48px rgba(0,0,0,0.3)"},celebEmoji:{fontSize:40,marginBottom:10},celebTitle:{fontSize:24,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginBottom:10,color:dn},celebDream:{fontSize:15,fontStyle:"italic",fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.5,marginBottom:10},celebSub:{fontSize:13.5,color:"var(--text-2)",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:dn,color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},Ql=[{id:"meditation",label:"Meditation Hub",icon:Bh,color:"#8268B0"},{id:"visualization",label:"Visualization",icon:Ps,color:"#3A7CA5"}],nu=t=>{if(!t)return"";const e=t.trim();if(/^[A-Za-z0-9_-]{11}$/.test(e))return e;const n=e.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return n?n[1]:""},X0=t=>new Promise((e,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:l,height:a}=i;l>a&&l>1e3?(a=a*1e3/l,l=1e3):a>1e3&&(l=l*1e3/a,a=1e3);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(i,0,0,l,a),e(d.toDataURL("image/jpeg",.82))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(t)}),q0=t=>({id:null,kind:t,title:"",url:"",image:""});function J0(){const[t,e]=g.useState("meditation"),[n,o]=g.useState([]),[i,s]=g.useState(!1),[l,a]=g.useState(null),[d,c]=g.useState(null),p=g.useCallback(async()=>{try{o(await G.getMedia())}catch{}s(!0)},[]);g.useEffect(()=>{p()},[p]);const{deleteItem:y,toasts:m,handleUndo:j,handleDismiss:x}=Fr(G.deleteMedia,G.restoreMedia,p);g.useEffect(()=>{if(!d)return;const I=10,L=setInterval(()=>{document.hidden||G.addScreenTime("mindscape",I).catch(()=>{})},I*1e3);return()=>clearInterval(L)},[d]);const k=Ql.find(I=>I.id===t),T=n.filter(I=>I.kind===t),b=I=>a({id:I.id,kind:I.kind,title:I.title,url:`https://youtu.be/${I.youtube_id}`,image:I.image}),u=async I=>{var R;const L=(R=I.target.files)==null?void 0:R[0];if(L){try{const E=await X0(L);a(M=>({...M,image:E}))}catch{}I.target.value=""}},h=l?[!l.title.trim()&&"a title",!l.image&&"an image",!nu(l.url)&&"a valid YouTube link"].filter(Boolean):[],z=!!l&&h.length===0,v=async()=>{if(!z)return;const I={kind:l.kind,title:l.title.trim(),image:l.image,youtube_id:nu(l.url)};l.id?await G.updateMedia(l.id,I):await G.createMedia(I),a(null),p()};return r.jsxs("div",{style:Pt.page,children:[d&&r.jsx("iframe",{title:"mindscape-audio",src:`https://www.youtube.com/embed/${d.youtube_id}?autoplay=1&controls=0&modestbranding=1&playsinline=1`,allow:"autoplay; encrypted-media",style:{position:"fixed",left:-1e4,top:0,width:320,height:180,border:"none"}}),r.jsxs("div",{style:Pt.head,children:[r.jsxs("div",{children:[r.jsx("div",{style:Pt.eyebrow,children:"Anvil · Mindscape"}),r.jsx("h1",{style:Pt.h1,children:"Mindscape"}),r.jsx("div",{style:Pt.subhead,children:"Close your eyes and listen — guided meditation and visualization."})]}),!l&&r.jsxs("button",{onClick:()=>a(q0(t)),style:{...Pt.addBtn,background:k.color},children:[r.jsx(de,{size:15})," Add"]})]}),r.jsx("div",{style:Pt.tabs,children:Ql.map(I=>{const L=I.icon,R=t===I.id;return r.jsxs("button",{onClick:()=>{e(I.id),a(null)},style:{...Pt.tab,...R?{background:I.color,color:"#fff",borderColor:I.color}:{}},children:[r.jsx(L,{size:15})," ",I.label]},I.id)})}),l&&r.jsxs("div",{style:Pt.card,children:[r.jsx("div",{style:Pt.cardTitle,children:l.id?"Edit":`New ${Ql.find(I=>I.id===l.kind).label}`}),r.jsx("input",{placeholder:"YouTube link (plays as audio only)",value:l.url,onChange:I=>a({...l,url:I.target.value}),style:Pt.input,autoFocus:!0}),r.jsx("input",{placeholder:"Title (required)",value:l.title,onChange:I=>a({...l,title:I.target.value}),style:{...Pt.input,marginTop:8}}),r.jsxs("label",{style:Pt.photoPick,children:[l.image?r.jsx("img",{src:l.image,alt:"",style:Pt.photoPreview}):r.jsxs("span",{style:Pt.photoEmpty,children:[r.jsx(il,{size:18})," Add cover image (required)"]}),r.jsx("input",{type:"file",accept:"image/*",onChange:u,style:{display:"none"}})]}),!z&&r.jsxs("div",{style:Pt.warn,children:["Add ",h.join(", ")," to save."]}),r.jsxs("div",{style:Pt.formActions,children:[r.jsxs("button",{onClick:()=>a(null),style:Pt.cancelBtn,children:[r.jsx(Tt,{size:14})," Cancel"]}),r.jsxs("button",{onClick:v,disabled:!z,style:{...Pt.saveBtn,background:z?k.color:"var(--border)",color:z?"#fff":"var(--text-3)",cursor:z?"pointer":"not-allowed"},children:[r.jsx(Mt,{size:15})," ",l.id?"Save":"Add"]})]})]}),i?T.length===0?r.jsxs("div",{style:Pt.empty,children:["Nothing here yet — add a ",k.label.toLowerCase()," track."]}):r.jsx("div",{style:Pt.grid,children:T.map(I=>{const L=(d==null?void 0:d.id)===I.id;return r.jsxs("div",{style:Pt.mediaCard,children:[r.jsxs("button",{onClick:()=>c(L?null:I),style:Pt.coverBtn,title:L?"Pause":"Play",children:[r.jsx("img",{src:I.image,alt:"",style:Pt.cover}),r.jsx("span",{style:{...Pt.playOverlay,background:L?"rgba(0,0,0,0.45)":"rgba(0,0,0,0.28)"},children:r.jsx("span",{style:{...Pt.playCircle,background:k.color},children:L?r.jsx(Zh,{size:20,color:"#fff",fill:"#fff"}):r.jsx(Eb,{size:20,color:"#fff",fill:"#fff"})})}),L&&r.jsxs("span",{style:Pt.nowPlaying,children:[r.jsx(zb,{size:11})," Playing"]})]}),r.jsxs("div",{style:Pt.mediaBody,children:[r.jsx("div",{style:Pt.mediaTitle,children:I.title}),r.jsxs("div",{style:Pt.cardActions,children:[r.jsx("button",{onClick:()=>b(I),style:Pt.iconBtn,title:"Edit",children:r.jsx(ye,{size:13})}),r.jsx("button",{onClick:()=>{(d==null?void 0:d.id)===I.id&&c(null),y(I.id,I.title)},style:Pt.iconBtn,title:"Delete",children:r.jsx(Tt,{size:14})})]})]})]},I.id)})}):r.jsx("div",{style:Pt.muted,children:"Loading…"}),r.jsx(Mr,{toasts:m,onUndo:j,onDismiss:x})]})}const Pt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:900,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},tabs:{display:"flex",gap:8,marginBottom:18,flexWrap:"wrap"},tab:{display:"flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:20,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none"},photoPick:{display:"block",marginTop:10,cursor:"pointer",borderRadius:12,overflow:"hidden",border:"1px dashed var(--border)"},photoPreview:{width:"100%",maxHeight:200,objectFit:"cover",display:"block"},photoEmpty:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"26px 0",color:"var(--text-3)",fontSize:13,fontWeight:600},warn:{fontSize:12,color:"#C2773B",marginTop:8,fontWeight:600},formActions:{display:"flex",gap:8,marginTop:14},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,fontFamily:"inherit"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gap:16},mediaCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},coverBtn:{position:"relative",border:"none",padding:0,cursor:"pointer",display:"block",width:"100%",aspectRatio:"1",background:"var(--surface-2)"},cover:{width:"100%",height:"100%",objectFit:"cover",display:"block"},playOverlay:{position:"absolute",inset:0,display:"grid",placeItems:"center"},playCircle:{width:46,height:46,borderRadius:"50%",display:"grid",placeItems:"center",boxShadow:"0 2px 10px rgba(0,0,0,0.3)"},nowPlaying:{position:"absolute",bottom:8,left:8,display:"flex",alignItems:"center",gap:4,background:"rgba(0,0,0,0.65)",color:"#fff",fontSize:11,fontWeight:700,padding:"3px 8px",borderRadius:7},mediaBody:{padding:"12px 14px",display:"flex",alignItems:"flex-start",gap:8},mediaTitle:{flex:1,fontSize:14.5,fontWeight:600,lineHeight:1.4,minWidth:0,wordBreak:"break-word"},cardActions:{display:"flex",gap:2,flexShrink:0,marginTop:1},iconBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"}},Yb={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"},Z0=Object.keys(Yb),tx="#9A7B4F";function ex(t=760){const[e,n]=g.useState(()=>window.innerWidth<t);return g.useEffect(()=>{const o=()=>n(window.innerWidth<t);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[t]),e}const rx=()=>{const t=new Date,e=n=>String(n).padStart(2,"0");return`${t.getFullYear()}-${e(t.getMonth()+1)}-${e(t.getDate())}`},nx=t=>{if(!t)return"";const e=new Date(t+"T00:00:00");return isNaN(e)?t:e.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})},Kl=t=>(t||"").slice(0,4),ox=t=>new Promise((e,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:l,height:a}=i;l>a&&l>1e3?(a=a*1e3/l,l=1e3):a>1e3&&(l=l*1e3/a,a=1e3);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(i,0,0,l,a),e(d.toDataURL("image/jpeg",.82))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(t)}),ix={id:null,title:"",date:rx(),pillar:"",reward:"",image:"",note:""};function sx(){const t=nc(),e=v=>Hb(v,t.code),n=ex(),[o,i]=g.useState([]),[s,l]=g.useState(null),[a,d]=g.useState(!1),c=g.useRef(null),p=g.useCallback(()=>{G.getAchievements().then(i).catch(()=>{})},[]);g.useEffect(()=>{p()},[p]);const{deleteItem:y,toasts:m,handleUndo:j,handleDismiss:x}=Fr(G.deleteAchievement,G.restoreAchievement,p),k=()=>l({...ix}),T=v=>l({id:v.id,title:v.title,date:v.date,pillar:v.pillar||"",reward:v.reward?String(v.reward):"",image:v.image||"",note:v.note||""}),b=async v=>{var L;const I=(L=v.target.files)==null?void 0:L[0];if(I){try{const R=await ox(I);l(E=>({...E,image:R}))}catch{}c.current&&(c.current.value="")}},u=s&&s.title.trim()&&s.date,h=async()=>{if(!u||a)return;d(!0);const v={title:s.title.trim(),date:s.date,pillar:s.pillar||null,reward:parseFloat(s.reward)||0,image:s.image||null,note:s.note.trim()};try{s.id?await G.updateAchievement(s.id,v):await G.createAchievement(v),l(null),p()}catch{}finally{d(!1)}},z=o.reduce((v,I)=>v+(I.reward||0),0);return r.jsxs("div",{style:zt.page,children:[r.jsxs("div",{style:zt.head,children:[r.jsxs("div",{children:[r.jsx("div",{style:zt.eyebrow,children:"Anvil · Achievements"}),r.jsx("h1",{style:zt.h1,children:"Achievements"}),r.jsx("div",{style:zt.subhead,children:"Your tree of wins — newest at the top, scroll down through the past."})]}),r.jsxs("div",{style:zt.headRight,children:[z>0&&r.jsxs("div",{style:zt.totalBadge,children:[r.jsx(Ua,{size:14,color:"#C9A227"})," ",e(z)," earned"]}),r.jsxs("button",{onClick:k,style:zt.addBtn,children:[r.jsx(de,{size:15})," Add achievement"]})]})]}),o.length===0?r.jsxs("div",{style:zt.empty,children:[r.jsx(Dr,{size:30,color:"var(--text-3)"}),r.jsx("div",{style:{marginTop:10},children:"No achievements yet."}),r.jsx("div",{style:zt.emptySub,children:"Plant your first win — it'll grow into a timeline you can look back on."})]}):r.jsxs("div",{style:{...zt.timeline,paddingLeft:0},children:[r.jsx("div",{style:{...zt.trunk,left:n?13:"50%"}}),o.map((v,I)=>{const L=Yb[v.pillar]||tx,R=!n&&I%2===1,E=o[I-1],M=!E||Kl(E.date)!==Kl(v.date);return r.jsxs("div",{children:[M&&r.jsx("div",{style:{...zt.yearRow,justifyContent:n?"flex-start":"center",paddingLeft:n?36:0},children:r.jsx("span",{style:zt.yearChip,children:Kl(v.date)})}),r.jsxs("div",{style:{...zt.row,gridTemplateColumns:n?"28px 1fr":"1fr 44px 1fr"},children:[!n&&r.jsx("div",{style:{gridColumn:1,display:"flex",justifyContent:"flex-end"},children:R&&r.jsx(ou,{a:v,color:L,side:"left",money:e,onEdit:()=>T(v),onDelete:()=>y(v.id,v.title)})}),r.jsx("div",{style:{gridColumn:n?1:2,display:"flex",justifyContent:"center",position:"relative"},children:r.jsx("div",{style:{...zt.node,borderColor:L,background:"var(--surface)"},children:r.jsx("div",{style:{...zt.nodeDot,background:L}})})}),r.jsx("div",{style:{gridColumn:n?2:3,display:"flex",justifyContent:"flex-start"},children:(n||!R)&&r.jsx(ou,{a:v,color:L,side:n?"mobile":"right",money:e,onEdit:()=>T(v),onDelete:()=>y(v.id,v.title)})})]})]},v.id)})]}),s&&r.jsx("div",{style:zt.overlay,onClick:()=>l(null),children:r.jsxs("div",{style:zt.modal,onClick:v=>v.stopPropagation(),children:[r.jsxs("div",{style:zt.modalHead,children:[r.jsx("div",{style:zt.modalTitle,children:s.id?"Edit achievement":"New achievement"}),r.jsx("button",{onClick:()=>l(null),style:zt.iconBtn,children:r.jsx(Tt,{size:16})})]}),r.jsx("label",{style:zt.label,children:"Title *"}),r.jsx("input",{autoFocus:!0,value:s.title,onChange:v=>l(I=>({...I,title:v.target.value})),placeholder:"What did you achieve?",style:zt.input}),r.jsxs("div",{style:zt.formRow,children:[r.jsxs("div",{style:{flex:1},children:[r.jsxs("label",{style:zt.label,children:[r.jsx(Ah,{size:12})," Date *"]}),r.jsx("input",{type:"date",value:s.date,onChange:v=>l(I=>({...I,date:v.target.value})),style:zt.input})]}),r.jsxs("div",{style:{flex:1},children:[r.jsx("label",{style:zt.label,children:"Pillar (optional)"}),r.jsxs("select",{value:s.pillar,onChange:v=>l(I=>({...I,pillar:v.target.value})),style:zt.input,children:[r.jsx("option",{value:"",children:"— None —"}),Z0.map(v=>r.jsx("option",{value:v,children:v},v))]})]})]}),r.jsxs("label",{style:zt.label,children:[r.jsx(Ua,{size:12})," Reward (",t.code,") — optional gesture of appreciation"]}),r.jsx("input",{type:"number",min:"0",step:"any",value:s.reward,onChange:v=>l(I=>({...I,reward:v.target.value})),placeholder:"0",style:zt.input}),r.jsx("label",{style:zt.label,children:"Photo (optional)"}),s.image?r.jsxs("div",{style:zt.imgWrap,children:[r.jsx("img",{src:s.image,alt:"",style:zt.imgPreview}),r.jsx("button",{onClick:()=>l(v=>({...v,image:""})),style:zt.imgRemove,children:r.jsx(Tt,{size:14})})]}):r.jsxs("button",{onClick:()=>{var v;return(v=c.current)==null?void 0:v.click()},style:zt.uploadBtn,children:[r.jsx(Hh,{size:15})," Add a photo"]}),r.jsx("input",{ref:c,type:"file",accept:"image/*",onChange:b,style:{display:"none"}}),r.jsx("label",{style:zt.label,children:"Note (optional)"}),r.jsx("textarea",{value:s.note,onChange:v=>l(I=>({...I,note:v.target.value})),placeholder:"The story behind it…",rows:3,style:{...zt.input,resize:"vertical",fontFamily:"inherit"}}),r.jsxs("div",{style:zt.modalActions,children:[r.jsx("button",{onClick:()=>l(null),style:zt.cancelBtn,children:"Cancel"}),r.jsxs("button",{onClick:h,disabled:!u||a,style:{...zt.saveBtn,...!u||a?{opacity:.5,cursor:"not-allowed"}:{}},children:[r.jsx(Mt,{size:15})," ",s.id?"Save":"Add"]})]})]})}),r.jsx(Mr,{toasts:m,onUndo:j,onDismiss:x})]})}function ou({a:t,color:e,side:n,money:o,onEdit:i,onDelete:s}){return r.jsxs("div",{style:{...zt.card,borderTop:`3px solid ${e}`,textAlign:n==="left"?"right":"left"},children:[r.jsxs("div",{style:{...zt.cardTop,flexDirection:n==="left"?"row-reverse":"row"},children:[r.jsx("span",{style:{...zt.dateChip,background:`${e}1A`,color:e},children:nx(t.date)}),r.jsxs("div",{style:{display:"flex",gap:2},children:[r.jsx("button",{onClick:i,style:zt.ghostBtn,title:"Edit",children:r.jsx(ye,{size:13})}),r.jsx("button",{onClick:s,style:zt.ghostBtn,title:"Delete",children:r.jsx(Tt,{size:14})})]})]}),r.jsx("div",{style:zt.cardTitle,children:t.title}),t.image&&r.jsx("img",{src:t.image,alt:"",style:zt.cardImg}),t.note&&r.jsx("div",{style:zt.cardNote,children:t.note}),t.reward>0&&r.jsxs("div",{style:{...zt.rewardBadge,marginLeft:n==="left"?"auto":0},children:[r.jsx(Ua,{size:13})," ",o(t.reward)]})]})}const zt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:22},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},headRight:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},totalBadge:{display:"flex",alignItems:"center",gap:5,background:"rgba(201,162,39,0.12)",border:"1px solid rgba(201,162,39,0.3)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:700,color:"#8A6E1A"},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},empty:{textAlign:"center",color:"var(--text-3)",padding:"60px 16px",fontSize:14,fontWeight:600},emptySub:{fontSize:12.5,fontWeight:400,marginTop:6,maxWidth:320,marginInline:"auto",lineHeight:1.5},timeline:{position:"relative",maxWidth:1e3,margin:"0 auto",paddingBottom:30},trunk:{position:"absolute",top:8,bottom:8,width:3,background:"linear-gradient(to bottom, var(--border), var(--border))",transform:"translateX(-1.5px)",borderRadius:2},yearRow:{display:"flex",margin:"6px 0 12px"},yearChip:{fontSize:11.5,fontWeight:800,letterSpacing:"0.06em",color:"var(--text-2)",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:"4px 12px",position:"relative",zIndex:2},row:{display:"grid",alignItems:"center",gap:8,marginBottom:16},node:{width:20,height:20,borderRadius:"50%",border:"3px solid",display:"grid",placeItems:"center",zIndex:2,boxShadow:"0 0 0 4px var(--bg)"},nodeDot:{width:7,height:7,borderRadius:"50%"},card:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:"12px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.06)",maxWidth:420,width:"100%",boxSizing:"border-box"},cardTop:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,marginBottom:7},dateChip:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:12,whiteSpace:"nowrap"},cardTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em",lineHeight:1.3,wordBreak:"break-word"},cardImg:{width:"100%",maxHeight:220,objectFit:"cover",borderRadius:9,marginTop:9,display:"block"},cardNote:{fontSize:12.5,color:"var(--text-2)",marginTop:7,lineHeight:1.5,whiteSpace:"pre-wrap",wordBreak:"break-word"},rewardBadge:{display:"inline-flex",alignItems:"center",gap:5,marginTop:9,background:"rgba(201,162,39,0.12)",color:"#8A6E1A",border:"1px solid rgba(201,162,39,0.3)",padding:"3px 10px",borderRadius:14,fontSize:12,fontWeight:700},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",borderRadius:6},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:60,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:460,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},label:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)"},formRow:{display:"flex",gap:10},uploadBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:7,width:"100%",border:"1.5px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"11px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},imgWrap:{position:"relative",borderRadius:10,overflow:"hidden"},imgPreview:{width:"100%",maxHeight:220,objectFit:"cover",display:"block",borderRadius:10},imgRemove:{position:"absolute",top:8,right:8,border:"none",background:"rgba(0,0,0,0.55)",color:"#fff",width:28,height:28,borderRadius:"50%",cursor:"pointer",display:"grid",placeItems:"center"},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},td=[{id:"sandstone",name:"Sandstone",description:"Warm editorial light — the original Anvil look.",dark:!1,swatch:["#F7F6F3","#4C9A6B","#26241F"],vars:{"--bg":"#F7F6F3","--surface":"#FFFFFF","--surface-2":"#FAFAF8","--hover":"#F2F1EC","--border":"#ECEAE3","--text":"#26241F","--text-2":"#6B675E","--text-3":"#9A968C","--accent":"#4C9A6B","--accent-strong":"#26241F","--accent-2":"#3A352C"}},{id:"midnight",name:"Midnight",description:"Deep low-glare dark mode for night owls and focus.",dark:!0,swatch:["#161513","#6FB58C","#ECEAE3"],vars:{"--bg":"#161513","--surface":"#211F1C","--surface-2":"#1B1A17","--hover":"#2B2924","--border":"#34312B","--text":"#ECEAE3","--text-2":"#B6B1A6","--text-3":"#8A857A","--accent":"#6FB58C","--accent-strong":"#2E6F4B","--accent-2":"#245C3E"}},{id:"blossom",name:"Blossom",description:"Soft rose & blush — gentle, warm, and feminine.",dark:!1,swatch:["#FFF5F8","#E0608E","#B23A6B"],vars:{"--bg":"#FFF5F8","--surface":"#FFFFFF","--surface-2":"#FFF0F4","--hover":"#FDE7EE","--border":"#F6D9E2","--text":"#3D2230","--text-2":"#7A5466","--text-3":"#B08799","--accent":"#E0608E","--accent-strong":"#B23A6B","--accent-2":"#9C2F5C"}},{id:"tide",name:"Tide",description:"Calm professional blues — clean and focused.",dark:!1,swatch:["#F1F6FA","#2E86C1","#1C4E73"],vars:{"--bg":"#F1F6FA","--surface":"#FFFFFF","--surface-2":"#ECF3F9","--hover":"#E2EEF6","--border":"#D5E3EE","--text":"#13283A","--text-2":"#4A6275","--text-3":"#8AA0B0","--accent":"#2E86C1","--accent-strong":"#1C4E73","--accent-2":"#163E5C"}},{id:"velocity",name:"Velocity",description:"High-energy sport — crisp slate with electric orange.",dark:!1,swatch:["#F4F5F7","#F4511E","#1F2A37"],vars:{"--bg":"#F4F5F7","--surface":"#FFFFFF","--surface-2":"#EEF0F3","--hover":"#E7EAEE","--border":"#DCE0E6","--text":"#18202B","--text-2":"#515B68","--text-3":"#8B95A1","--accent":"#F4511E","--accent-strong":"#1F2A37","--accent-2":"#16202B"}},{id:"evergreen",name:"Evergreen",description:"Earthy forest greens — grounded and natural.",dark:!1,swatch:["#F2F6F1","#3E8E52","#2A4A30"],vars:{"--bg":"#F2F6F1","--surface":"#FFFFFF","--surface-2":"#ECF2EA","--hover":"#E4EEE2","--border":"#D7E4D3","--text":"#1E2B20","--text-2":"#4F6151","--text-3":"#8AA08C","--accent":"#3E8E52","--accent-strong":"#2A4A30","--accent-2":"#213B26"}},{id:"amethyst",name:"Amethyst",description:"Premium purple & plum — elegant and refined.",dark:!1,swatch:["#F6F4FB","#7A4FE0","#3A2D5C"],vars:{"--bg":"#F6F4FB","--surface":"#FFFFFF","--surface-2":"#F1EDF9","--hover":"#EAE3F6","--border":"#DFD6F0","--text":"#241B36","--text-2":"#5A4E72","--text-3":"#9588AE","--accent":"#7A4FE0","--accent-strong":"#3A2D5C","--accent-2":"#2E2349"}}],iu="sandstone",Vb="anvil_theme",lx=t=>td.find(e=>e.id===t)||td[0];function Qb(){try{return localStorage.getItem(Vb)||iu}catch{return iu}}function No(t,e=!0){const n=lx(t),o=document.documentElement;Object.entries(n.vars).forEach(([s,l])=>o.style.setProperty(s,l)),o.style.colorScheme=n.dark?"dark":"light",o.setAttribute("data-theme",n.id);const i=document.querySelector('meta[name="theme-color"]');if(i&&i.setAttribute("content",n.vars["--surface"]),e)try{localStorage.setItem(Vb,n.id)}catch{}return n.id}function ax(t=560){const[e,n]=g.useState(()=>window.innerWidth<=t);return g.useEffect(()=>{const o=()=>n(window.innerWidth<=t);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[t]),e}function dx({screens:t,order:e,hidden:n,themeId:o,currency:i,ticker:s,defaultScreen:l,onSetDefault:a,onSaveSidebar:d,onPreviewTheme:c,onCommitTheme:p,onSelectCurrency:y,onSaveTicker:m,onClose:j}){const[x,k]=g.useState("sidebar"),[T,b]=g.useState(()=>e.map(X=>({id:X,hidden:n.includes(X)}))),[u,h]=g.useState(o),[z,v]=g.useState(""),[I,L]=g.useState(!1),R=ax(),[E,M]=g.useState(!!(s!=null&&s.enabled)),[S,A]=g.useState(()=>{const X=Array.isArray(s==null?void 0:s.statements)?s.statements.slice(0,5):[];return X.length?X:[""]}),[w,Y]=g.useState((s==null?void 0:s.speed)??60),[lt,rt]=g.useState((s==null?void 0:s.delay)??3),[ht,U]=g.useState(!1),O=(X,pt)=>A(It=>It.map((W,bt)=>bt===X?pt:W)),q=()=>A(X=>X.length<5?[...X,""]:X),P=X=>A(pt=>pt.length>1?pt.filter((It,W)=>W!==X):pt),F=()=>{const X=S.map(pt=>pt.trim()).filter(Boolean).slice(0,5);m({enabled:E,statements:X,speed:Number(w),delay:Number(lt)}),U(!0),setTimeout(()=>U(!1),1500)};g.useEffect(()=>{G.getSetting("golden_music").then(X=>v((X==null?void 0:X.value)||"")).catch(()=>{})},[]);const f=()=>{G.setSetting("golden_music",z.trim()).then(()=>{L(!0),setTimeout(()=>L(!1),1500)}).catch(()=>{})},Q=X=>{h(X),c(X)},xt=T.filter(X=>!X.hidden).length,gt=(X,pt)=>{const It=X+pt;if(It<0||It>=T.length)return;const W=[...T];[W[X],W[It]]=[W[It],W[X]],b(W)},H=X=>{const pt=T[X];if(!pt.hidden&&xt<=1)return;const It=[...T];It[X]={...pt,hidden:!pt.hidden},b(It)},ft=()=>{d(T.map(X=>X.id),T.filter(X=>X.hidden).map(X=>X.id))},J=R?{...ut.overlay,padding:0}:ut.overlay,et=R?{...ut.modal,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"100%",borderRadius:0,border:"none"}:ut.modal;return r.jsx("div",{style:J,onClick:j,children:r.jsxs("div",{style:et,onClick:X=>X.stopPropagation(),children:[r.jsxs("div",{style:ut.head,children:[r.jsx("div",{style:ut.title,children:"Settings"}),r.jsx("button",{onClick:j,style:ut.closeBtn,children:r.jsx(Tt,{size:18})})]}),r.jsxs("div",{style:ut.tabs,children:[r.jsxs("button",{onClick:()=>k("sidebar"),style:{...ut.tab,...x==="sidebar"?ut.tabOn:{}},children:[r.jsx(Yh,{size:15})," Configure sidebar"]}),r.jsxs("button",{onClick:()=>k("themes"),style:{...ut.tab,...x==="themes"?ut.tabOn:{}},children:[r.jsx(Xh,{size:15})," Themes"]}),r.jsxs("button",{onClick:()=>k("currency"),style:{...ut.tab,...x==="currency"?ut.tabOn:{}},children:[r.jsx(_h,{size:15})," Currency"]}),r.jsxs("button",{onClick:()=>k("music"),style:{...ut.tab,...x==="music"?ut.tabOn:{}},children:[r.jsx(Tb,{size:15})," Music"]}),r.jsxs("button",{onClick:()=>k("reminders"),style:{...ut.tab,...x==="reminders"?ut.tabOn:{}},children:[r.jsx(Ib,{size:15})," Reminders"]})]}),r.jsx("div",{style:ut.body,children:x==="sidebar"?r.jsxs(r.Fragment,{children:[r.jsxs("p",{style:ut.hint,children:["Reorder with the arrows, hide ones you don't use, and tap ",r.jsx($s,{size:11,style:{verticalAlign:"-1px"}})," to set the screen that opens on launch."]}),r.jsx("div",{style:ut.list,children:T.map((X,pt)=>{const It=t[X.id],W=It.icon,bt=l===X.id;return r.jsxs("div",{style:{...ut.row,opacity:X.hidden?.5:1,...bt?{borderColor:"var(--accent)"}:{}},children:[r.jsx("span",{style:ut.rowNum,children:pt+1}),r.jsx(W,{size:16}),r.jsxs("span",{style:ut.rowLabel,children:[It.label,bt&&r.jsx("span",{style:ut.defaultTag,children:"default"})]}),r.jsx("button",{onClick:()=>a(X.id),title:bt?"Opens on launch":"Set as default",style:{...ut.iconBtn,...bt?{color:"var(--accent)"}:{}},children:r.jsx($s,{size:15})}),r.jsx("button",{onClick:()=>H(pt),title:X.hidden?"Show":"Hide",style:{...ut.iconBtn,...X.hidden?{}:{color:"var(--accent)"}},children:X.hidden?r.jsx(Ga,{size:15}):r.jsx(Ps,{size:15})}),r.jsx("button",{onClick:()=>gt(pt,-1),disabled:pt===0,style:{...ut.iconBtn,opacity:pt===0?.3:1},children:r.jsx(jb,{size:15})}),r.jsx("button",{onClick:()=>gt(pt,1),disabled:pt===T.length-1,style:{...ut.iconBtn,opacity:pt===T.length-1?.3:1},children:r.jsx(ki,{size:15})})]},X.id)})}),r.jsxs("button",{onClick:ft,style:ut.saveBtn,children:[r.jsx(Mt,{size:15})," Save sidebar"]})]}):x==="currency"?r.jsxs(r.Fragment,{children:[r.jsx("p",{style:ut.hint,children:"Choose the currency used across Vault and Worth. Applies instantly."}),r.jsx("div",{style:ut.list,children:qa.map(X=>{const pt=X.code===i;return r.jsxs("button",{onClick:()=>y(X.code),style:{...ut.row,cursor:"pointer",textAlign:"left",width:"100%",...pt?{borderColor:"var(--accent)"}:{}},children:[r.jsx("span",{style:ut.curSymbol,children:X.symbol}),r.jsxs("span",{style:ut.rowLabel,children:[X.label," ",r.jsx("span",{style:ut.curCode,children:X.code})]}),pt&&r.jsx("span",{style:ut.themeCheck,children:r.jsx(Mt,{size:13})})]},X.code)})})]}):x==="music"?r.jsxs(r.Fragment,{children:[r.jsxs("p",{style:ut.hint,children:["Paste a YouTube link to play softly while you write in the ",r.jsx("b",{children:"Golden Book"}),". It plays only on that screen (audio only)."]}),r.jsx("input",{value:z,onChange:X=>v(X.target.value),placeholder:"https://youtube.com/watch?v=…",style:ut.musicInput}),r.jsxs("button",{onClick:f,style:ut.saveBtn,children:[r.jsx(Mt,{size:15})," ",I?"Saved":"Save music"]})]}):x==="reminders"?r.jsxs(r.Fragment,{children:[r.jsx("p",{style:ut.hint,children:"Up to 5 reminders scroll across the top of every screen — a gentle nudge toward your goals."}),r.jsxs("button",{onClick:()=>M(X=>!X),style:{...ut.row,cursor:"pointer",width:"100%",justifyContent:"space-between",...E?{borderColor:"var(--accent)"}:{}},children:[r.jsx("span",{style:ut.rowLabel,children:"Show reminder banner"}),r.jsx("span",{style:{...ut.switch,...E?ut.switchOn:{}},children:E?"On":"Off"})]}),r.jsxs("div",{style:{marginTop:14},children:[r.jsxs("div",{style:ut.fieldLbl,children:["Reminders (",S.filter(X=>X.trim()).length,"/5)"]}),S.map((X,pt)=>r.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[r.jsx("input",{value:X,onChange:It=>O(pt,It.target.value),maxLength:120,placeholder:`Reminder ${pt+1}`,style:{...ut.musicInput,marginBottom:0}}),r.jsx("button",{onClick:()=>P(pt),style:ut.iconBtn,title:"Remove",children:r.jsx(Tt,{size:15})})]},pt)),S.length<5&&r.jsxs("button",{onClick:q,style:ut.addRowBtn,children:[r.jsx(de,{size:14})," Add reminder"]})]}),r.jsxs("div",{style:{marginTop:16},children:[r.jsxs("div",{style:ut.sliderHead,children:[r.jsx("span",{style:ut.fieldLbl,children:"Scroll speed"}),r.jsxs("span",{style:ut.sliderVal,children:[w," px/s"]})]}),r.jsx("input",{type:"range",min:20,max:200,step:5,value:w,onChange:X=>Y(X.target.value),style:ut.range})]}),r.jsxs("div",{style:{marginTop:12},children:[r.jsxs("div",{style:ut.sliderHead,children:[r.jsx("span",{style:ut.fieldLbl,children:"Delay between reminders"}),r.jsxs("span",{style:ut.sliderVal,children:[lt,"s"]})]}),r.jsx("input",{type:"range",min:0,max:15,step:1,value:lt,onChange:X=>rt(X.target.value),style:ut.range})]}),r.jsxs("button",{onClick:F,style:{...ut.saveBtn,marginTop:16},children:[r.jsx(Mt,{size:15})," ",ht?"Saved":"Save reminders"]})]}):r.jsxs(r.Fragment,{children:[r.jsxs("p",{style:ut.hint,children:["Tap a theme to preview it live, then hit ",r.jsx("b",{children:"Apply theme"})," to keep it."]}),r.jsx("div",{style:ut.themeGrid,children:td.map(X=>{const pt=X.id===u;return r.jsxs("button",{onClick:()=>Q(X.id),style:{...ut.themeCard,...pt?ut.themeCardOn:{}},children:[r.jsxs("div",{style:ut.swatchRow,children:[X.swatch.map((It,W)=>r.jsx("span",{style:{...ut.swatch,background:It}},W)),pt&&r.jsx("span",{style:ut.themeCheck,children:r.jsx(Mt,{size:13})})]}),r.jsxs("div",{style:ut.themeName,children:[X.name,X.dark?r.jsx("span",{style:ut.darkTag,children:"Dark"}):null]}),r.jsx("div",{style:ut.themeDesc,children:X.description})]},X.id)})}),r.jsxs("button",{onClick:()=>p(u),disabled:u===o,style:{...ut.saveBtn,...u===o?ut.saveBtnDisabled:{}},children:[r.jsx(Mt,{size:15})," ",u===o?"Theme applied":"Apply theme"]})]})})]})})}const ut={overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",color:"var(--text)",borderRadius:16,width:460,maxWidth:"100%",maxHeight:"88vh",display:"flex",flexDirection:"column",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)",overflow:"hidden"},head:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 18px",borderBottom:"1px solid var(--border)",flexShrink:0},title:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},tabs:{display:"flex",flexWrap:"wrap",gap:6,padding:"12px 18px 0",flexShrink:0},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"transparent"},body:{padding:"16px 18px 20px",overflowY:"auto",overflowX:"hidden",flex:1,minHeight:0},hint:{fontSize:12.5,color:"var(--text-3)",lineHeight:1.5,margin:"0 0 14px"},list:{display:"flex",flexDirection:"column",gap:6},row:{display:"flex",alignItems:"center",gap:10,padding:"9px 11px",background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:9},rowNum:{fontSize:11,fontWeight:700,color:"var(--text-3)",width:16,textAlign:"center"},rowLabel:{flex:1,fontSize:13.5,fontWeight:500,display:"flex",alignItems:"center",gap:7},defaultTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--accent)",background:"color-mix(in srgb, var(--accent) 14%, transparent)",padding:"1px 6px",borderRadius:6},curSymbol:{width:22,textAlign:"center",fontSize:15,fontWeight:700,color:"var(--text)"},curCode:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginLeft:4},iconBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},saveBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:7,width:"100%",marginTop:16,border:"none",background:"var(--accent)",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer"},saveBtnDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"default"},musicInput:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",marginBottom:12},switch:{fontSize:12,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:20,padding:"3px 12px",minWidth:44,textAlign:"center"},switchOn:{background:"var(--accent)",color:"#fff"},fieldLbl:{fontSize:12,fontWeight:700,color:"var(--text-2)",marginBottom:7},addRowBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"9px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},sliderHead:{display:"flex",justifyContent:"space-between",alignItems:"baseline"},sliderVal:{fontSize:12,fontWeight:700,color:"var(--accent)"},range:{width:"100%",accentColor:"var(--accent)",cursor:"pointer"},themeGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},themeCard:{textAlign:"left",border:"2px solid var(--border)",background:"var(--surface-2)",borderRadius:12,padding:12,cursor:"pointer",display:"flex",flexDirection:"column",gap:6,outline:"none",WebkitTapHighlightColor:"transparent",transition:"border-color .15s ease, box-shadow .15s ease"},themeCardOn:{borderColor:"var(--accent)",boxShadow:"0 0 0 3px color-mix(in srgb, var(--accent) 25%, transparent)"},swatchRow:{display:"flex",alignItems:"center",gap:5,position:"relative"},swatch:{width:22,height:22,borderRadius:"50%",border:"1px solid rgba(0,0,0,0.08)"},themeCheck:{marginLeft:"auto",width:20,height:20,borderRadius:"50%",background:"var(--accent)",color:"#fff",display:"grid",placeItems:"center"},themeName:{fontSize:14,fontWeight:700,display:"flex",alignItems:"center",gap:6},darkTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",background:"var(--hover)",color:"var(--text-2)",padding:"1px 6px",borderRadius:6},themeDesc:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.4}},cx=`
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
`;function gx({statements:t,speed:e=60,delay:n=3}){const o=g.useMemo(()=>(t||[]).map(d=>(d||"").trim()).filter(Boolean).slice(0,5),[t]),[i,s]=g.useState(0),l=g.useRef(null),a=g.useRef(null);return g.useEffect(()=>{s(0)},[o]),g.useEffect(()=>{if(!o.length)return;const d=l.current,c=a.current;if(!d||!c)return;const p=d.offsetWidth,y=c.offsetWidth,m=Math.max(10,Number(e)||60),j=Math.max(2500,(p+y)/m*1e3),x=c.animate([{transform:`translateX(${p}px)`},{transform:`translateX(${-y}px)`}],{duration:j,easing:"linear",fill:"both"});let k;const T=()=>{k=setTimeout(()=>s(b=>(b+1)%o.length),Math.max(0,Number(n)||0)*1e3)};return x.addEventListener("finish",T),()=>{x.cancel(),x.removeEventListener("finish",T),clearTimeout(k)}},[i,o,e,n]),o.length?r.jsxs("div",{style:Ln.bar,"aria-label":"Reminders",children:[r.jsx("style",{children:cx}),r.jsx("div",{className:"anvil-tick-glow",style:Ln.icon,children:r.jsx("span",{className:"anvil-tick-pulse",style:{display:"grid",placeItems:"center"},children:r.jsx(Ib,{size:15})})}),r.jsxs("div",{ref:l,style:Ln.viewport,children:[r.jsx("span",{className:"anvil-tick-shimmer",style:Ln.shimmer}),r.jsx("div",{className:"anvil-tick-float",style:Ln.floatWrap,children:r.jsx("div",{ref:a,style:Ln.text,children:o[i%o.length]},i)})]})]}):null}const Ln={bar:{display:"flex",alignItems:"center",height:36,flexShrink:0,overflow:"hidden",borderBottom:"1px solid var(--border)",background:"color-mix(in srgb, var(--accent) 12%, var(--surface))"},icon:{display:"grid",placeItems:"center",width:42,height:"100%",flexShrink:0,color:"#fff",background:"var(--accent)",zIndex:2},viewport:{position:"relative",flex:1,height:"100%",overflow:"hidden",display:"flex",alignItems:"center"},shimmer:{position:"absolute",top:0,bottom:0,left:0,width:"22%",background:"linear-gradient(100deg, transparent, color-mix(in srgb, var(--accent) 22%, transparent), transparent)",pointerEvents:"none",zIndex:1},floatWrap:{display:"inline-flex",alignItems:"center",willChange:"transform"},text:{whiteSpace:"nowrap",fontSize:13.5,fontWeight:700,color:"var(--text)",letterSpacing:"0.01em",willChange:"transform",paddingLeft:4}};No(Qb(),!1);const ed="anvil_default_screen",su=()=>{try{return localStorage.getItem(ed)}catch{return null}},un={kickstart:{label:"Kickstart",icon:ey,component:H0},golden:{label:"Golden Book",icon:Lh,component:Y0},habits:{label:"Habits",icon:oy,component:By},quadrant:{label:"Quadrant",icon:Cb,component:hy},goals:{label:"Goals",icon:Zd,component:Cy},grove:{label:"Grove",icon:ay,component:x0},worth:{label:"Rewards",icon:Uh,component:T0},vault:{label:"Vault",icon:Sb,component:A0},journal:{label:"Journal",icon:Xd,component:Oy},revision:{label:"Revision",icon:Bb,component:e0},affirmations:{label:"Affirmations",icon:ji,component:o0},skills:{label:"Skills",icon:Ph,component:Gy},spiritual:{label:"Spiritual",icon:us,component:Vy},mindscape:{label:"Mindscape",icon:$h,component:J0},achievements:{label:"Achievements",icon:Dr,component:sx}},Kb=["kickstart","golden","habits","quadrant","goals","grove","journal","revision","affirmations","skills","spiritual","mindscape","achievements","worth","vault"];function Zi(t){const e=Kb.filter(i=>un[i]),o=[...(Array.isArray(t)?t:[]).filter(i=>un[i])];return e.forEach(i=>{o.includes(i)||o.push(i)}),o}function ux(){const[t,e]=g.useState(()=>window.innerWidth<720);return g.useEffect(()=>{const n=()=>e(window.innerWidth<720);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),t}function px(){const[t,e]=g.useState(()=>{const F=su();return F&&un[F]?F:"habits"}),[n,o]=g.useState(()=>su()||"habits"),[i,s]=g.useState(!1),[l,a]=g.useState(null),[d,c]=g.useState(!1),[p,y]=g.useState(!1),[m,j]=g.useState(Qb()),[x,k]=g.useState(po()),[T,b]=g.useState({enabled:!1,statements:[],speed:60,delay:3}),[u,h]=g.useState(()=>Zi(Kb)),[z,v]=g.useState([]),I=ux(),L=g.useRef(t);g.useEffect(()=>{L.current=t},[t]),g.useEffect(()=>{if(!l)return;const F=10,f=new Set(["kickstart","mindscape"]),Q=setInterval(()=>{const xt=L.current;!document.hidden&&xt&&!f.has(xt)&&G.addScreenTime(xt,F).catch(()=>{})},F*1e3);return()=>clearInterval(Q)},[l]),g.useEffect(()=>{let F=!1;const f=()=>{Va(),a(null)};return window.addEventListener("anvil-unauthorized",f),ec()?G.me().then(Q=>{F||a(Q)}).catch(()=>{}).finally(()=>{F||c(!0)}):c(!0),()=>{F=!0,window.removeEventListener("anvil-unauthorized",f)}},[]),g.useEffect(()=>{l&&(G.getSetting("theme").then(F=>{F!=null&&F.value&&j(No(F.value))}).catch(()=>{}),G.getSetting("currency").then(F=>{F!=null&&F.value&&k($g(F.value))}).catch(()=>{}),G.getSetting("ticker").then(F=>{F!=null&&F.value&&b(f=>({...f,...F.value}))}).catch(()=>{}),G.getSetting("default_screen").then(F=>{if(F!=null&&F.value&&un[F.value]){o(F.value);try{localStorage.setItem(ed,F.value)}catch{}}}).catch(()=>{}),G.getSetting("sidebar_order").then(F=>{Array.isArray(F==null?void 0:F.value)&&h(Zi(F.value))}).catch(()=>{}),G.getSetting("sidebar_hidden").then(F=>{Array.isArray(F==null?void 0:F.value)&&v(F.value)}).catch(()=>{}))},[l]);function R(F){e(F),s(!1)}const E=()=>{Va(),a(null)},M=F=>{No(F,!1)},S=F=>{j(No(F)),G.setSetting("theme",F).catch(()=>{}),y(!1)},A=()=>{No(m,!1),y(!1)},w=F=>{k($g(F)),G.setSetting("currency",F).catch(()=>{})},Y=F=>{b(F),G.setSetting("ticker",F).catch(()=>{})},lt=F=>{o(F);try{localStorage.setItem(ed,F)}catch{}G.setSetting("default_screen",F).catch(()=>{})},rt=(F,f)=>{if(h(Zi(F)),v(f),y(!1),G.setSetting("sidebar_order",F).catch(()=>{}),G.setSetting("sidebar_hidden",f).catch(()=>{}),f.includes(t)){const Q=Zi(F).find(xt=>!f.includes(xt));Q&&e(Q)}},ht=u.filter(F=>!z.includes(F));if(!d)return r.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",fontFamily:"'Inter',system-ui,sans-serif",color:"var(--text-3)"},children:"Loading…"});if(!l)return r.jsx(E0,{onAuthed:a});const U=un[t],O=U.component,q=()=>r.jsx("div",{style:Ot.navItems,children:ht.map(F=>{const f=un[F];if(!f)return null;const Q=f.icon,xt=t===F;return r.jsxs("button",{onClick:()=>R(F),title:f.label,style:{...Ot.navItem,...xt?Ot.navItemOn:{}},children:[r.jsx(Q,{size:18}),r.jsx("span",{style:Ot.navLabel,children:f.label})]},F)})}),P=()=>r.jsxs("div",{style:Ot.footerWrap,children:[r.jsxs("button",{onClick:()=>y(!0),style:Ot.settingsBtn,title:"Settings",children:[r.jsx(Db,{size:17}),r.jsx("span",{children:"Settings"})]}),r.jsxs("div",{style:Ot.userFooter,children:[r.jsxs("div",{style:Ot.userInfo,children:[r.jsx("div",{style:Ot.userAvatar,children:(l.name||l.email||"?").charAt(0).toUpperCase()}),r.jsxs("div",{style:{minWidth:0},children:[r.jsx("div",{style:Ot.userName,children:l.name||"You"}),r.jsx("div",{style:Ot.userEmail,children:l.email})]})]}),r.jsx("button",{onClick:E,style:Ot.logoutBtn,title:"Sign out",children:r.jsx(Qh,{size:16})})]})]});return r.jsxs("div",{style:Ot.shell,children:[!I&&r.jsxs("nav",{style:Ot.nav,children:[r.jsxs("div",{style:Ot.brand,children:[r.jsx("div",{style:Ot.brandLogo,children:"B"}),r.jsx("span",{style:Ot.brandName,children:"Anvil"})]}),r.jsx(q,{}),r.jsx(P,{})]}),I&&i&&r.jsx("div",{style:Ot.overlay,onClick:()=>s(!1),children:r.jsxs("nav",{style:Ot.drawer,onClick:F=>F.stopPropagation(),children:[r.jsxs("div",{style:Ot.drawerHeader,children:[r.jsxs("div",{style:Ot.brand,children:[r.jsx("div",{style:Ot.brandLogo,children:"B"}),r.jsx("span",{style:Ot.brandName,children:"Anvil"})]}),r.jsx("button",{style:Ot.closeBtn,onClick:()=>s(!1),children:r.jsx(Tt,{size:20})})]}),r.jsx(q,{}),r.jsx(P,{})]})}),r.jsxs("div",{style:Ot.content,children:[I&&r.jsxs("div",{style:Ot.topBar,children:[r.jsx("button",{style:Ot.menuBtn,onClick:()=>s(!0),children:r.jsx(Jd,{size:22})}),r.jsx("span",{style:Ot.topBarTitle,children:U.label}),r.jsx("div",{style:{width:38}})]}),T.enabled&&r.jsx(gx,{statements:T.statements,speed:T.speed,delay:T.delay}),r.jsx("main",{style:Ot.main,children:r.jsx(O,{})})]}),p&&r.jsx(dx,{screens:un,order:u,hidden:z,themeId:m,currency:x,ticker:T,defaultScreen:n,onSetDefault:lt,onSaveSidebar:rt,onPreviewTheme:M,onCommitTheme:S,onSelectCurrency:w,onSaveTicker:Y,onClose:A})]})}const Ot={shell:{display:"flex",height:"100vh",overflow:"hidden",fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)"},nav:{width:200,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column",padding:"20px 10px",gap:2,overflowY:"auto",overflowX:"hidden"},brand:{display:"flex",alignItems:"center",gap:9,padding:"6px 10px 20px",borderBottom:"1px solid var(--border)",marginBottom:8},brandLogo:{width:30,height:30,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:14,fontWeight:800,fontFamily:"'Fraunces', Georgia, serif",flexShrink:0},brandName:{fontSize:16,fontWeight:700,letterSpacing:"-0.01em",color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},navItems:{display:"flex",flexDirection:"column",gap:2},navItem:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},navItemOn:{background:"var(--hover)",color:"var(--text)",fontWeight:700},footerWrap:{marginTop:"auto",paddingTop:8},settingsBtn:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},userFooter:{marginTop:4,paddingTop:12,borderTop:"1px solid var(--border)",display:"flex",alignItems:"center",gap:8},userInfo:{display:"flex",alignItems:"center",gap:8,flex:1,minWidth:0},userAvatar:{width:30,height:30,borderRadius:"50%",background:"#8268B0",color:"#fff",display:"grid",placeItems:"center",fontSize:13,fontWeight:700,flexShrink:0},userName:{fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},userEmail:{fontSize:11,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},logoutBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",padding:7,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},navLabel:{flex:1},content:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},main:{flex:1,overflowY:"auto",overflowX:"hidden"},topBar:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",background:"var(--surface)",borderBottom:"1px solid var(--border)",flexShrink:0},topBarTitle:{fontSize:16,fontWeight:700,color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},menuBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text)",padding:8,borderRadius:8,display:"grid",placeItems:"center"},overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.35)",zIndex:100,display:"flex"},drawer:{width:220,background:"var(--surface)",height:"100%",display:"flex",flexDirection:"column",padding:"16px 10px",gap:2,boxShadow:"4px 0 24px rgba(0,0,0,0.12)"},drawerHeader:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:4},closeBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",padding:6,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0}};xb(document.getElementById("root")).render(r.jsx(g.StrictMode,{children:r.jsx(px,{})}));
