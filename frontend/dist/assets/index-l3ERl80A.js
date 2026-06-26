(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Au={exports:{}},ol={},Fu={exports:{}},He={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Di=Symbol.for("react.element"),Mm=Symbol.for("react.portal"),Wm=Symbol.for("react.fragment"),Lm=Symbol.for("react.strict_mode"),_m=Symbol.for("react.profiler"),Pm=Symbol.for("react.provider"),$m=Symbol.for("react.context"),Om=Symbol.for("react.forward_ref"),Nm=Symbol.for("react.suspense"),Hm=Symbol.for("react.memo"),Gm=Symbol.for("react.lazy"),Mc=Symbol.iterator;function Um(e){return e===null||typeof e!="object"?null:(e=Mc&&e[Mc]||e["@@iterator"],typeof e=="function"?e:null)}var Mu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wu=Object.assign,Lu={};function So(e,t,n){this.props=e,this.context=t,this.refs=Lu,this.updater=n||Mu}So.prototype.isReactComponent={};So.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};So.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function _u(){}_u.prototype=So.prototype;function vd(e,t,n){this.props=e,this.context=t,this.refs=Lu,this.updater=n||Mu}var kd=vd.prototype=new _u;kd.constructor=vd;Wu(kd,So.prototype);kd.isPureReactComponent=!0;var Wc=Array.isArray,Pu=Object.prototype.hasOwnProperty,wd={current:null},$u={key:!0,ref:!0,__self:!0,__source:!0};function Ou(e,t,n){var o,i={},s=null,l=null;if(t!=null)for(o in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(s=""+t.key),t)Pu.call(t,o)&&!$u.hasOwnProperty(o)&&(i[o]=t[o]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var d=Array(a),c=0;c<a;c++)d[c]=arguments[c+2];i.children=d}if(e&&e.defaultProps)for(o in a=e.defaultProps,a)i[o]===void 0&&(i[o]=a[o]);return{$$typeof:Di,type:e,key:s,ref:l,props:i,_owner:wd.current}}function Ym(e,t){return{$$typeof:Di,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function jd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Di}function Vm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Lc=/\/+/g;function Il(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Vm(""+e.key):t.toString(36)}function gs(e,t,n,o,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Di:case Mm:l=!0}}if(l)return l=e,i=i(l),e=o===""?"."+Il(l,0):o,Wc(i)?(n="",e!=null&&(n=e.replace(Lc,"$&/")+"/"),gs(i,t,n,"",function(c){return c})):i!=null&&(jd(i)&&(i=Ym(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Lc,"$&/")+"/")+e)),t.push(i)),1;if(l=0,o=o===""?".":o+":",Wc(e))for(var a=0;a<e.length;a++){s=e[a];var d=o+Il(s,a);l+=gs(s,t,n,d,i)}else if(d=Um(e),typeof d=="function")for(e=d.call(e),a=0;!(s=e.next()).done;)s=s.value,d=o+Il(s,a++),l+=gs(s,t,n,d,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Li(e,t,n){if(e==null)return e;var o=[],i=0;return gs(e,o,"","",function(s){return t.call(n,s,i++)}),o}function Qm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Wt={current:null},us={transition:null},Km={ReactCurrentDispatcher:Wt,ReactCurrentBatchConfig:us,ReactCurrentOwner:wd};function Nu(){throw Error("act(...) is not supported in production builds of React.")}He.Children={map:Li,forEach:function(e,t,n){Li(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Li(e,function(){t++}),t},toArray:function(e){return Li(e,function(t){return t})||[]},only:function(e){if(!jd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};He.Component=So;He.Fragment=Wm;He.Profiler=_m;He.PureComponent=vd;He.StrictMode=Lm;He.Suspense=Nm;He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Km;He.act=Nu;He.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=Wu({},e.props),i=e.key,s=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,l=wd.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(d in t)Pu.call(t,d)&&!$u.hasOwnProperty(d)&&(o[d]=t[d]===void 0&&a!==void 0?a[d]:t[d])}var d=arguments.length-2;if(d===1)o.children=n;else if(1<d){a=Array(d);for(var c=0;c<d;c++)a[c]=arguments[c+2];o.children=a}return{$$typeof:Di,type:e.type,key:i,ref:s,props:o,_owner:l}};He.createContext=function(e){return e={$$typeof:$m,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Pm,_context:e},e.Consumer=e};He.createElement=Ou;He.createFactory=function(e){var t=Ou.bind(null,e);return t.type=e,t};He.createRef=function(){return{current:null}};He.forwardRef=function(e){return{$$typeof:Om,render:e}};He.isValidElement=jd;He.lazy=function(e){return{$$typeof:Gm,_payload:{_status:-1,_result:e},_init:Qm}};He.memo=function(e,t){return{$$typeof:Hm,type:e,compare:t===void 0?null:t}};He.startTransition=function(e){var t=us.transition;us.transition={};try{e()}finally{us.transition=t}};He.unstable_act=Nu;He.useCallback=function(e,t){return Wt.current.useCallback(e,t)};He.useContext=function(e){return Wt.current.useContext(e)};He.useDebugValue=function(){};He.useDeferredValue=function(e){return Wt.current.useDeferredValue(e)};He.useEffect=function(e,t){return Wt.current.useEffect(e,t)};He.useId=function(){return Wt.current.useId()};He.useImperativeHandle=function(e,t,n){return Wt.current.useImperativeHandle(e,t,n)};He.useInsertionEffect=function(e,t){return Wt.current.useInsertionEffect(e,t)};He.useLayoutEffect=function(e,t){return Wt.current.useLayoutEffect(e,t)};He.useMemo=function(e,t){return Wt.current.useMemo(e,t)};He.useReducer=function(e,t,n){return Wt.current.useReducer(e,t,n)};He.useRef=function(e){return Wt.current.useRef(e)};He.useState=function(e){return Wt.current.useState(e)};He.useSyncExternalStore=function(e,t,n){return Wt.current.useSyncExternalStore(e,t,n)};He.useTransition=function(){return Wt.current.useTransition()};He.version="18.3.1";Fu.exports=He;var g=Fu.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xm=g,qm=Symbol.for("react.element"),Zm=Symbol.for("react.fragment"),Jm=Object.prototype.hasOwnProperty,eh=Xm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,th={key:!0,ref:!0,__self:!0,__source:!0};function Hu(e,t,n){var o,i={},s=null,l=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(l=t.ref);for(o in t)Jm.call(t,o)&&!th.hasOwnProperty(o)&&(i[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)i[o]===void 0&&(i[o]=t[o]);return{$$typeof:qm,type:e,key:s,ref:l,props:i,_owner:eh.current}}ol.Fragment=Zm;ol.jsx=Hu;ol.jsxs=Hu;Au.exports=ol;var r=Au.exports,Gu={exports:{}},Zt={},Uu={exports:{}},Yu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(q,N){var se=q.length;q.push(N);e:for(;0<se;){var Y=se-1>>>1,le=q[Y];if(0<i(le,N))q[Y]=N,q[se]=le,se=Y;else break e}}function n(q){return q.length===0?null:q[0]}function o(q){if(q.length===0)return null;var N=q[0],se=q.pop();if(se!==N){q[0]=se;e:for(var Y=0,le=q.length,T=le>>>1;Y<T;){var oe=2*(Y+1)-1,Ce=q[oe],V=oe+1,v=q[V];if(0>i(Ce,se))V<le&&0>i(v,Ce)?(q[Y]=v,q[V]=se,Y=V):(q[Y]=Ce,q[oe]=se,Y=oe);else if(V<le&&0>i(v,se))q[Y]=v,q[V]=se,Y=V;else break e}}return N}function i(q,N){var se=q.sortIndex-N.sortIndex;return se!==0?se:q.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var d=[],c=[],h=1,x=null,f=3,R=!1,S=!1,y=!1,A=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(q){for(var N=n(c);N!==null;){if(N.callback===null)o(c);else if(N.startTime<=q)o(c),N.sortIndex=N.expirationTime,t(d,N);else break;N=n(c)}}function E(q){if(y=!1,b(q),!S)if(n(d)!==null)S=!0,de(C);else{var N=n(c);N!==null&&ye(E,N.startTime-q)}}function C(q,N){S=!1,y&&(y=!1,m(_),_=-1),R=!0;var se=f;try{for(b(N),x=n(d);x!==null&&(!(x.expirationTime>N)||q&&!j());){var Y=x.callback;if(typeof Y=="function"){x.callback=null,f=x.priorityLevel;var le=Y(x.expirationTime<=N);N=e.unstable_now(),typeof le=="function"?x.callback=le:x===n(d)&&o(d),b(N)}else o(d);x=n(d)}if(x!==null)var T=!0;else{var oe=n(c);oe!==null&&ye(E,oe.startTime-N),T=!1}return T}finally{x=null,f=se,R=!1}}var z=!1,M=null,_=-1,B=5,W=-1;function j(){return!(e.unstable_now()-W<B)}function J(){if(M!==null){var q=e.unstable_now();W=q;var N=!0;try{N=M(!0,q)}finally{N?I():(z=!1,M=null)}}else z=!1}var I;if(typeof p=="function")I=function(){p(J)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,ue=re.port2;re.port1.onmessage=J,I=function(){ue.postMessage(null)}}else I=function(){A(J,0)};function de(q){M=q,z||(z=!0,I())}function ye(q,N){_=A(function(){q(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(q){q.callback=null},e.unstable_continueExecution=function(){S||R||(S=!0,de(C))},e.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<q?Math.floor(1e3/q):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(q){switch(f){case 1:case 2:case 3:var N=3;break;default:N=f}var se=f;f=N;try{return q()}finally{f=se}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(q,N){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var se=f;f=q;try{return N()}finally{f=se}},e.unstable_scheduleCallback=function(q,N,se){var Y=e.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?Y+se:Y):se=Y,q){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=se+le,q={id:h++,callback:N,priorityLevel:q,startTime:se,expirationTime:le,sortIndex:-1},se>Y?(q.sortIndex=se,t(c,q),n(d)===null&&q===n(c)&&(y?(m(_),_=-1):y=!0,ye(E,se-Y))):(q.sortIndex=le,t(d,q),S||R||(S=!0,de(C))),q},e.unstable_shouldYield=j,e.unstable_wrapCallback=function(q){var N=f;return function(){var se=f;f=N;try{return q.apply(this,arguments)}finally{f=se}}}})(Yu);Uu.exports=Yu;var rh=Uu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nh=g,qt=rh;function ce(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vu=new Set,gi={};function Ln(e,t){mo(e,t),mo(e+"Capture",t)}function mo(e,t){for(gi[e]=t,e=0;e<t.length;e++)Vu.add(t[e])}var Pr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ma=Object.prototype.hasOwnProperty,oh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_c={},Pc={};function ih(e){return ma.call(Pc,e)?!0:ma.call(_c,e)?!1:oh.test(e)?Pc[e]=!0:(_c[e]=!0,!1)}function sh(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function lh(e,t,n,o){if(t===null||typeof t>"u"||sh(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Lt(e,t,n,o,i,s,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=l}var zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){zt[e]=new Lt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];zt[t]=new Lt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){zt[e]=new Lt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){zt[e]=new Lt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){zt[e]=new Lt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){zt[e]=new Lt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){zt[e]=new Lt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){zt[e]=new Lt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){zt[e]=new Lt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Sd=/[\-:]([a-z])/g;function Cd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Sd,Cd);zt[t]=new Lt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Sd,Cd);zt[t]=new Lt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Sd,Cd);zt[t]=new Lt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){zt[e]=new Lt(e,1,!1,e.toLowerCase(),null,!1,!1)});zt.xlinkHref=new Lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){zt[e]=new Lt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Id(e,t,n,o){var i=zt.hasOwnProperty(t)?zt[t]:null;(i!==null?i.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(lh(t,n,i,o)&&(n=null),o||i===null?ih(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,o=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var Gr=nh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_i=Symbol.for("react.element"),Xn=Symbol.for("react.portal"),qn=Symbol.for("react.fragment"),zd=Symbol.for("react.strict_mode"),ha=Symbol.for("react.profiler"),Qu=Symbol.for("react.provider"),Ku=Symbol.for("react.context"),Td=Symbol.for("react.forward_ref"),fa=Symbol.for("react.suspense"),xa=Symbol.for("react.suspense_list"),Ed=Symbol.for("react.memo"),Xr=Symbol.for("react.lazy"),Xu=Symbol.for("react.offscreen"),$c=Symbol.iterator;function Mo(e){return e===null||typeof e!="object"?null:(e=$c&&e[$c]||e["@@iterator"],typeof e=="function"?e:null)}var dt=Object.assign,zl;function Vo(e){if(zl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);zl=t&&t[1]||""}return`
`+zl+e}var Tl=!1;function El(e,t){if(!e||Tl)return"";Tl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var o=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){o=c}e.call(t.prototype)}else{try{throw Error()}catch(c){o=c}e()}}catch(c){if(c&&o&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=o.stack.split(`
`),l=i.length-1,a=s.length-1;1<=l&&0<=a&&i[l]!==s[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==s[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==s[a]){var d=`
`+i[l].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=l&&0<=a);break}}}finally{Tl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Vo(e):""}function ah(e){switch(e.tag){case 5:return Vo(e.type);case 16:return Vo("Lazy");case 13:return Vo("Suspense");case 19:return Vo("SuspenseList");case 0:case 2:case 15:return e=El(e.type,!1),e;case 11:return e=El(e.type.render,!1),e;case 1:return e=El(e.type,!0),e;default:return""}}function ya(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qn:return"Fragment";case Xn:return"Portal";case ha:return"Profiler";case zd:return"StrictMode";case fa:return"Suspense";case xa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ku:return(e.displayName||"Context")+".Consumer";case Qu:return(e._context.displayName||"Context")+".Provider";case Td:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ed:return t=e.displayName||null,t!==null?t:ya(e.type)||"Memo";case Xr:t=e._payload,e=e._init;try{return ya(e(t))}catch{}}return null}function dh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ya(t);case 8:return t===zd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function un(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ch(e){var t=qu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){o=""+l,s.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(l){o=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pi(e){e._valueTracker||(e._valueTracker=ch(e))}function Zu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=qu(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function Is(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function va(e,t){var n=t.checked;return dt({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Oc(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=un(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ju(e,t){t=t.checked,t!=null&&Id(e,"checked",t,!1)}function ka(e,t){Ju(e,t);var n=un(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?wa(e,t.type,n):t.hasOwnProperty("defaultValue")&&wa(e,t.type,un(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Nc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function wa(e,t,n){(t!=="number"||Is(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Qo=Array.isArray;function ao(e,t,n,o){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&o&&(e[n].defaultSelected=!0)}else{for(n=""+un(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,o&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ja(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(ce(91));return dt({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Hc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(ce(92));if(Qo(n)){if(1<n.length)throw Error(ce(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:un(n)}}function ep(e,t){var n=un(t.value),o=un(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function Gc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function tp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?tp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var $i,rp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for($i=$i||document.createElement("div"),$i.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=$i.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ui(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ei={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gh=["Webkit","ms","Moz","O"];Object.keys(ei).forEach(function(e){gh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ei[t]=ei[e]})});function np(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ei.hasOwnProperty(e)&&ei[e]?(""+t).trim():t+"px"}function op(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,i=np(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,i):e[n]=i}}var uh=dt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ca(e,t){if(t){if(uh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(ce(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(ce(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(ce(61))}if(t.style!=null&&typeof t.style!="object")throw Error(ce(62))}}function Ia(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var za=null;function Bd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ta=null,co=null,go=null;function Uc(e){if(e=Fi(e)){if(typeof Ta!="function")throw Error(ce(280));var t=e.stateNode;t&&(t=dl(t),Ta(e.stateNode,e.type,t))}}function ip(e){co?go?go.push(e):go=[e]:co=e}function sp(){if(co){var e=co,t=go;if(go=co=null,Uc(e),t)for(e=0;e<t.length;e++)Uc(t[e])}}function lp(e,t){return e(t)}function ap(){}var Bl=!1;function dp(e,t,n){if(Bl)return e(t,n);Bl=!0;try{return lp(e,t,n)}finally{Bl=!1,(co!==null||go!==null)&&(ap(),sp())}}function pi(e,t){var n=e.stateNode;if(n===null)return null;var o=dl(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(ce(231,t,typeof n));return n}var Ea=!1;if(Pr)try{var Wo={};Object.defineProperty(Wo,"passive",{get:function(){Ea=!0}}),window.addEventListener("test",Wo,Wo),window.removeEventListener("test",Wo,Wo)}catch{Ea=!1}function ph(e,t,n,o,i,s,l,a,d){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var ti=!1,zs=null,Ts=!1,Ba=null,bh={onError:function(e){ti=!0,zs=e}};function mh(e,t,n,o,i,s,l,a,d){ti=!1,zs=null,ph.apply(bh,arguments)}function hh(e,t,n,o,i,s,l,a,d){if(mh.apply(this,arguments),ti){if(ti){var c=zs;ti=!1,zs=null}else throw Error(ce(198));Ts||(Ts=!0,Ba=c)}}function _n(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function cp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Yc(e){if(_n(e)!==e)throw Error(ce(188))}function fh(e){var t=e.alternate;if(!t){if(t=_n(e),t===null)throw Error(ce(188));return t!==e?null:e}for(var n=e,o=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(o=i.return,o!==null){n=o;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Yc(i),e;if(s===o)return Yc(i),t;s=s.sibling}throw Error(ce(188))}if(n.return!==o.return)n=i,o=s;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,o=s;break}if(a===o){l=!0,o=i,n=s;break}a=a.sibling}if(!l){for(a=s.child;a;){if(a===n){l=!0,n=s,o=i;break}if(a===o){l=!0,o=s,n=i;break}a=a.sibling}if(!l)throw Error(ce(189))}}if(n.alternate!==o)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?e:t}function gp(e){return e=fh(e),e!==null?up(e):null}function up(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=up(e);if(t!==null)return t;e=e.sibling}return null}var pp=qt.unstable_scheduleCallback,Vc=qt.unstable_cancelCallback,xh=qt.unstable_shouldYield,yh=qt.unstable_requestPaint,mt=qt.unstable_now,vh=qt.unstable_getCurrentPriorityLevel,Dd=qt.unstable_ImmediatePriority,bp=qt.unstable_UserBlockingPriority,Es=qt.unstable_NormalPriority,kh=qt.unstable_LowPriority,mp=qt.unstable_IdlePriority,il=null,Cr=null;function wh(e){if(Cr&&typeof Cr.onCommitFiberRoot=="function")try{Cr.onCommitFiberRoot(il,e,void 0,(e.current.flags&128)===128)}catch{}}var hr=Math.clz32?Math.clz32:Ch,jh=Math.log,Sh=Math.LN2;function Ch(e){return e>>>=0,e===0?32:31-(jh(e)/Sh|0)|0}var Oi=64,Ni=4194304;function Ko(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Bs(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,i=e.suspendedLanes,s=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?o=Ko(a):(s&=l,s!==0&&(o=Ko(s)))}else l=n&~i,l!==0?o=Ko(l):s!==0&&(o=Ko(s));if(o===0)return 0;if(t!==0&&t!==o&&!(t&i)&&(i=o&-o,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(o&4&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-hr(t),i=1<<n,o|=e[n],t&=~i;return o}function Ih(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zh(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var l=31-hr(s),a=1<<l,d=i[l];d===-1?(!(a&n)||a&o)&&(i[l]=Ih(a,t)):d<=t&&(e.expiredLanes|=a),s&=~a}}function Da(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function hp(){var e=Oi;return Oi<<=1,!(Oi&4194240)&&(Oi=64),e}function Dl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ri(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-hr(t),e[t]=n}function Th(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-hr(n),s=1<<i;t[i]=0,o[i]=-1,e[i]=-1,n&=~s}}function Rd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-hr(n),i=1<<o;i&t|e[o]&t&&(e[o]|=t),n&=~i}}var Xe=0;function fp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var xp,Ad,yp,vp,kp,Ra=!1,Hi=[],nn=null,on=null,sn=null,bi=new Map,mi=new Map,Zr=[],Eh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qc(e,t){switch(e){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":on=null;break;case"mouseover":case"mouseout":sn=null;break;case"pointerover":case"pointerout":bi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":mi.delete(t.pointerId)}}function Lo(e,t,n,o,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Fi(t),t!==null&&Ad(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Bh(e,t,n,o,i){switch(t){case"focusin":return nn=Lo(nn,e,t,n,o,i),!0;case"dragenter":return on=Lo(on,e,t,n,o,i),!0;case"mouseover":return sn=Lo(sn,e,t,n,o,i),!0;case"pointerover":var s=i.pointerId;return bi.set(s,Lo(bi.get(s)||null,e,t,n,o,i)),!0;case"gotpointercapture":return s=i.pointerId,mi.set(s,Lo(mi.get(s)||null,e,t,n,o,i)),!0}return!1}function wp(e){var t=Cn(e.target);if(t!==null){var n=_n(t);if(n!==null){if(t=n.tag,t===13){if(t=cp(n),t!==null){e.blockedOn=t,kp(e.priority,function(){yp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ps(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Aa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);za=o,n.target.dispatchEvent(o),za=null}else return t=Fi(n),t!==null&&Ad(t),e.blockedOn=n,!1;t.shift()}return!0}function Kc(e,t,n){ps(e)&&n.delete(t)}function Dh(){Ra=!1,nn!==null&&ps(nn)&&(nn=null),on!==null&&ps(on)&&(on=null),sn!==null&&ps(sn)&&(sn=null),bi.forEach(Kc),mi.forEach(Kc)}function _o(e,t){e.blockedOn===t&&(e.blockedOn=null,Ra||(Ra=!0,qt.unstable_scheduleCallback(qt.unstable_NormalPriority,Dh)))}function hi(e){function t(i){return _o(i,e)}if(0<Hi.length){_o(Hi[0],e);for(var n=1;n<Hi.length;n++){var o=Hi[n];o.blockedOn===e&&(o.blockedOn=null)}}for(nn!==null&&_o(nn,e),on!==null&&_o(on,e),sn!==null&&_o(sn,e),bi.forEach(t),mi.forEach(t),n=0;n<Zr.length;n++)o=Zr[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<Zr.length&&(n=Zr[0],n.blockedOn===null);)wp(n),n.blockedOn===null&&Zr.shift()}var uo=Gr.ReactCurrentBatchConfig,Ds=!0;function Rh(e,t,n,o){var i=Xe,s=uo.transition;uo.transition=null;try{Xe=1,Fd(e,t,n,o)}finally{Xe=i,uo.transition=s}}function Ah(e,t,n,o){var i=Xe,s=uo.transition;uo.transition=null;try{Xe=4,Fd(e,t,n,o)}finally{Xe=i,uo.transition=s}}function Fd(e,t,n,o){if(Ds){var i=Aa(e,t,n,o);if(i===null)Ol(e,t,o,Rs,n),Qc(e,o);else if(Bh(i,e,t,n,o))o.stopPropagation();else if(Qc(e,o),t&4&&-1<Eh.indexOf(e)){for(;i!==null;){var s=Fi(i);if(s!==null&&xp(s),s=Aa(e,t,n,o),s===null&&Ol(e,t,o,Rs,n),s===i)break;i=s}i!==null&&o.stopPropagation()}else Ol(e,t,o,null,n)}}var Rs=null;function Aa(e,t,n,o){if(Rs=null,e=Bd(o),e=Cn(e),e!==null)if(t=_n(e),t===null)e=null;else if(n=t.tag,n===13){if(e=cp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Rs=e,null}function jp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vh()){case Dd:return 1;case bp:return 4;case Es:case kh:return 16;case mp:return 536870912;default:return 16}default:return 16}}var tn=null,Md=null,bs=null;function Sp(){if(bs)return bs;var e,t=Md,n=t.length,o,i="value"in tn?tn.value:tn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(o=1;o<=l&&t[n-o]===i[s-o];o++);return bs=i.slice(e,1<o?1-o:void 0)}function ms(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Gi(){return!0}function Xc(){return!1}function Jt(e){function t(n,o,i,s,l){this._reactName=n,this._targetInst=i,this.type=o,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Gi:Xc,this.isPropagationStopped=Xc,this}return dt(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Gi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Gi)},persist:function(){},isPersistent:Gi}),t}var Co={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wd=Jt(Co),Ai=dt({},Co,{view:0,detail:0}),Fh=Jt(Ai),Rl,Al,Po,sl=dt({},Ai,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ld,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Po&&(Po&&e.type==="mousemove"?(Rl=e.screenX-Po.screenX,Al=e.screenY-Po.screenY):Al=Rl=0,Po=e),Rl)},movementY:function(e){return"movementY"in e?e.movementY:Al}}),qc=Jt(sl),Mh=dt({},sl,{dataTransfer:0}),Wh=Jt(Mh),Lh=dt({},Ai,{relatedTarget:0}),Fl=Jt(Lh),_h=dt({},Co,{animationName:0,elapsedTime:0,pseudoElement:0}),Ph=Jt(_h),$h=dt({},Co,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Oh=Jt($h),Nh=dt({},Co,{data:0}),Zc=Jt(Nh),Hh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Uh[e])?!!t[e]:!1}function Ld(){return Yh}var Vh=dt({},Ai,{key:function(e){if(e.key){var t=Hh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ms(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ld,charCode:function(e){return e.type==="keypress"?ms(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ms(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qh=Jt(Vh),Kh=dt({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jc=Jt(Kh),Xh=dt({},Ai,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ld}),qh=Jt(Xh),Zh=dt({},Co,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jh=Jt(Zh),ef=dt({},sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),tf=Jt(ef),rf=[9,13,27,32],_d=Pr&&"CompositionEvent"in window,ri=null;Pr&&"documentMode"in document&&(ri=document.documentMode);var nf=Pr&&"TextEvent"in window&&!ri,Cp=Pr&&(!_d||ri&&8<ri&&11>=ri),eg=" ",tg=!1;function Ip(e,t){switch(e){case"keyup":return rf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zn=!1;function of(e,t){switch(e){case"compositionend":return zp(t);case"keypress":return t.which!==32?null:(tg=!0,eg);case"textInput":return e=t.data,e===eg&&tg?null:e;default:return null}}function sf(e,t){if(Zn)return e==="compositionend"||!_d&&Ip(e,t)?(e=Sp(),bs=Md=tn=null,Zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cp&&t.locale!=="ko"?null:t.data;default:return null}}var lf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!lf[e.type]:t==="textarea"}function Tp(e,t,n,o){ip(o),t=As(t,"onChange"),0<t.length&&(n=new Wd("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var ni=null,fi=null;function af(e){Pp(e,0)}function ll(e){var t=to(e);if(Zu(t))return e}function df(e,t){if(e==="change")return t}var Ep=!1;if(Pr){var Ml;if(Pr){var Wl="oninput"in document;if(!Wl){var ng=document.createElement("div");ng.setAttribute("oninput","return;"),Wl=typeof ng.oninput=="function"}Ml=Wl}else Ml=!1;Ep=Ml&&(!document.documentMode||9<document.documentMode)}function og(){ni&&(ni.detachEvent("onpropertychange",Bp),fi=ni=null)}function Bp(e){if(e.propertyName==="value"&&ll(fi)){var t=[];Tp(t,fi,e,Bd(e)),dp(af,t)}}function cf(e,t,n){e==="focusin"?(og(),ni=t,fi=n,ni.attachEvent("onpropertychange",Bp)):e==="focusout"&&og()}function gf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(fi)}function uf(e,t){if(e==="click")return ll(t)}function pf(e,t){if(e==="input"||e==="change")return ll(t)}function bf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xr=typeof Object.is=="function"?Object.is:bf;function xi(e,t){if(xr(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var i=n[o];if(!ma.call(t,i)||!xr(e[i],t[i]))return!1}return!0}function ig(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sg(e,t){var n=ig(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ig(n)}}function Dp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Dp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Rp(){for(var e=window,t=Is();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Is(e.document)}return t}function Pd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function mf(e){var t=Rp(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Dp(n.ownerDocument.documentElement,n)){if(o!==null&&Pd(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(o.start,i);o=o.end===void 0?s:Math.min(o.end,i),!e.extend&&s>o&&(i=o,o=s,s=i),i=sg(n,s);var l=sg(n,o);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>o?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var hf=Pr&&"documentMode"in document&&11>=document.documentMode,Jn=null,Fa=null,oi=null,Ma=!1;function lg(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ma||Jn==null||Jn!==Is(o)||(o=Jn,"selectionStart"in o&&Pd(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),oi&&xi(oi,o)||(oi=o,o=As(Fa,"onSelect"),0<o.length&&(t=new Wd("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=Jn)))}function Ui(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var eo={animationend:Ui("Animation","AnimationEnd"),animationiteration:Ui("Animation","AnimationIteration"),animationstart:Ui("Animation","AnimationStart"),transitionend:Ui("Transition","TransitionEnd")},Ll={},Ap={};Pr&&(Ap=document.createElement("div").style,"AnimationEvent"in window||(delete eo.animationend.animation,delete eo.animationiteration.animation,delete eo.animationstart.animation),"TransitionEvent"in window||delete eo.transitionend.transition);function al(e){if(Ll[e])return Ll[e];if(!eo[e])return e;var t=eo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ap)return Ll[e]=t[n];return e}var Fp=al("animationend"),Mp=al("animationiteration"),Wp=al("animationstart"),Lp=al("transitionend"),_p=new Map,ag="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bn(e,t){_p.set(e,t),Ln(t,[e])}for(var _l=0;_l<ag.length;_l++){var Pl=ag[_l],ff=Pl.toLowerCase(),xf=Pl[0].toUpperCase()+Pl.slice(1);bn(ff,"on"+xf)}bn(Fp,"onAnimationEnd");bn(Mp,"onAnimationIteration");bn(Wp,"onAnimationStart");bn("dblclick","onDoubleClick");bn("focusin","onFocus");bn("focusout","onBlur");bn(Lp,"onTransitionEnd");mo("onMouseEnter",["mouseout","mouseover"]);mo("onMouseLeave",["mouseout","mouseover"]);mo("onPointerEnter",["pointerout","pointerover"]);mo("onPointerLeave",["pointerout","pointerover"]);Ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ln("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xo));function dg(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,hh(o,t,void 0,e),e.currentTarget=null}function Pp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],i=o.event;o=o.listeners;e:{var s=void 0;if(t)for(var l=o.length-1;0<=l;l--){var a=o[l],d=a.instance,c=a.currentTarget;if(a=a.listener,d!==s&&i.isPropagationStopped())break e;dg(i,a,c),s=d}else for(l=0;l<o.length;l++){if(a=o[l],d=a.instance,c=a.currentTarget,a=a.listener,d!==s&&i.isPropagationStopped())break e;dg(i,a,c),s=d}}}if(Ts)throw e=Ba,Ts=!1,Ba=null,e}function rt(e,t){var n=t[$a];n===void 0&&(n=t[$a]=new Set);var o=e+"__bubble";n.has(o)||($p(t,e,2,!1),n.add(o))}function $l(e,t,n){var o=0;t&&(o|=4),$p(n,e,o,t)}var Yi="_reactListening"+Math.random().toString(36).slice(2);function yi(e){if(!e[Yi]){e[Yi]=!0,Vu.forEach(function(n){n!=="selectionchange"&&(yf.has(n)||$l(n,!1,e),$l(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yi]||(t[Yi]=!0,$l("selectionchange",!1,t))}}function $p(e,t,n,o){switch(jp(t)){case 1:var i=Rh;break;case 4:i=Ah;break;default:i=Fd}n=i.bind(null,t,n,e),i=void 0,!Ea||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),o?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ol(e,t,n,o,i){var s=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var a=o.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=o.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;l=l.return}for(;a!==null;){if(l=Cn(a),l===null)return;if(d=l.tag,d===5||d===6){o=s=l;continue e}a=a.parentNode}}o=o.return}dp(function(){var c=s,h=Bd(n),x=[];e:{var f=_p.get(e);if(f!==void 0){var R=Wd,S=e;switch(e){case"keypress":if(ms(n)===0)break e;case"keydown":case"keyup":R=Qh;break;case"focusin":S="focus",R=Fl;break;case"focusout":S="blur",R=Fl;break;case"beforeblur":case"afterblur":R=Fl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=qc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=Wh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=qh;break;case Fp:case Mp:case Wp:R=Ph;break;case Lp:R=Jh;break;case"scroll":R=Fh;break;case"wheel":R=tf;break;case"copy":case"cut":case"paste":R=Oh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Jc}var y=(t&4)!==0,A=!y&&e==="scroll",m=y?f!==null?f+"Capture":null:f;y=[];for(var p=c,b;p!==null;){b=p;var E=b.stateNode;if(b.tag===5&&E!==null&&(b=E,m!==null&&(E=pi(p,m),E!=null&&y.push(vi(p,E,b)))),A)break;p=p.return}0<y.length&&(f=new R(f,S,null,n,h),x.push({event:f,listeners:y}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",f&&n!==za&&(S=n.relatedTarget||n.fromElement)&&(Cn(S)||S[$r]))break e;if((R||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,R?(S=n.relatedTarget||n.toElement,R=c,S=S?Cn(S):null,S!==null&&(A=_n(S),S!==A||S.tag!==5&&S.tag!==6)&&(S=null)):(R=null,S=c),R!==S)){if(y=qc,E="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(y=Jc,E="onPointerLeave",m="onPointerEnter",p="pointer"),A=R==null?f:to(R),b=S==null?f:to(S),f=new y(E,p+"leave",R,n,h),f.target=A,f.relatedTarget=b,E=null,Cn(h)===c&&(y=new y(m,p+"enter",S,n,h),y.target=b,y.relatedTarget=A,E=y),A=E,R&&S)t:{for(y=R,m=S,p=0,b=y;b;b=Nn(b))p++;for(b=0,E=m;E;E=Nn(E))b++;for(;0<p-b;)y=Nn(y),p--;for(;0<b-p;)m=Nn(m),b--;for(;p--;){if(y===m||m!==null&&y===m.alternate)break t;y=Nn(y),m=Nn(m)}y=null}else y=null;R!==null&&cg(x,f,R,y,!1),S!==null&&A!==null&&cg(x,A,S,y,!0)}}e:{if(f=c?to(c):window,R=f.nodeName&&f.nodeName.toLowerCase(),R==="select"||R==="input"&&f.type==="file")var C=df;else if(rg(f))if(Ep)C=pf;else{C=gf;var z=cf}else(R=f.nodeName)&&R.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=uf);if(C&&(C=C(e,c))){Tp(x,C,n,h);break e}z&&z(e,f,c),e==="focusout"&&(z=f._wrapperState)&&z.controlled&&f.type==="number"&&wa(f,"number",f.value)}switch(z=c?to(c):window,e){case"focusin":(rg(z)||z.contentEditable==="true")&&(Jn=z,Fa=c,oi=null);break;case"focusout":oi=Fa=Jn=null;break;case"mousedown":Ma=!0;break;case"contextmenu":case"mouseup":case"dragend":Ma=!1,lg(x,n,h);break;case"selectionchange":if(hf)break;case"keydown":case"keyup":lg(x,n,h)}var M;if(_d)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Zn?Ip(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Cp&&n.locale!=="ko"&&(Zn||_!=="onCompositionStart"?_==="onCompositionEnd"&&Zn&&(M=Sp()):(tn=h,Md="value"in tn?tn.value:tn.textContent,Zn=!0)),z=As(c,_),0<z.length&&(_=new Zc(_,e,null,n,h),x.push({event:_,listeners:z}),M?_.data=M:(M=zp(n),M!==null&&(_.data=M)))),(M=nf?of(e,n):sf(e,n))&&(c=As(c,"onBeforeInput"),0<c.length&&(h=new Zc("onBeforeInput","beforeinput",null,n,h),x.push({event:h,listeners:c}),h.data=M))}Pp(x,t)})}function vi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function As(e,t){for(var n=t+"Capture",o=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=pi(e,n),s!=null&&o.unshift(vi(e,s,i)),s=pi(e,t),s!=null&&o.push(vi(e,s,i))),e=e.return}return o}function Nn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function cg(e,t,n,o,i){for(var s=t._reactName,l=[];n!==null&&n!==o;){var a=n,d=a.alternate,c=a.stateNode;if(d!==null&&d===o)break;a.tag===5&&c!==null&&(a=c,i?(d=pi(n,s),d!=null&&l.unshift(vi(n,d,a))):i||(d=pi(n,s),d!=null&&l.push(vi(n,d,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var vf=/\r\n?/g,kf=/\u0000|\uFFFD/g;function gg(e){return(typeof e=="string"?e:""+e).replace(vf,`
`).replace(kf,"")}function Vi(e,t,n){if(t=gg(t),gg(e)!==t&&n)throw Error(ce(425))}function Fs(){}var Wa=null,La=null;function _a(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Pa=typeof setTimeout=="function"?setTimeout:void 0,wf=typeof clearTimeout=="function"?clearTimeout:void 0,ug=typeof Promise=="function"?Promise:void 0,jf=typeof queueMicrotask=="function"?queueMicrotask:typeof ug<"u"?function(e){return ug.resolve(null).then(e).catch(Sf)}:Pa;function Sf(e){setTimeout(function(){throw e})}function Nl(e,t){var n=t,o=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(o===0){e.removeChild(i),hi(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=i}while(n);hi(t)}function ln(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function pg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Io=Math.random().toString(36).slice(2),Sr="__reactFiber$"+Io,ki="__reactProps$"+Io,$r="__reactContainer$"+Io,$a="__reactEvents$"+Io,Cf="__reactListeners$"+Io,If="__reactHandles$"+Io;function Cn(e){var t=e[Sr];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$r]||n[Sr]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=pg(e);e!==null;){if(n=e[Sr])return n;e=pg(e)}return t}e=n,n=e.parentNode}return null}function Fi(e){return e=e[Sr]||e[$r],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function to(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(ce(33))}function dl(e){return e[ki]||null}var Oa=[],ro=-1;function mn(e){return{current:e}}function nt(e){0>ro||(e.current=Oa[ro],Oa[ro]=null,ro--)}function Je(e,t){ro++,Oa[ro]=e.current,e.current=t}var pn={},Dt=mn(pn),$t=mn(!1),Dn=pn;function ho(e,t){var n=e.type.contextTypes;if(!n)return pn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ot(e){return e=e.childContextTypes,e!=null}function Ms(){nt($t),nt(Dt)}function bg(e,t,n){if(Dt.current!==pn)throw Error(ce(168));Je(Dt,t),Je($t,n)}function Op(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var i in o)if(!(i in t))throw Error(ce(108,dh(e)||"Unknown",i));return dt({},n,o)}function Ws(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pn,Dn=Dt.current,Je(Dt,e),Je($t,$t.current),!0}function mg(e,t,n){var o=e.stateNode;if(!o)throw Error(ce(169));n?(e=Op(e,t,Dn),o.__reactInternalMemoizedMergedChildContext=e,nt($t),nt(Dt),Je(Dt,e)):nt($t),Je($t,n)}var Ar=null,cl=!1,Hl=!1;function Np(e){Ar===null?Ar=[e]:Ar.push(e)}function zf(e){cl=!0,Np(e)}function hn(){if(!Hl&&Ar!==null){Hl=!0;var e=0,t=Xe;try{var n=Ar;for(Xe=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}Ar=null,cl=!1}catch(i){throw Ar!==null&&(Ar=Ar.slice(e+1)),pp(Dd,hn),i}finally{Xe=t,Hl=!1}}return null}var no=[],oo=0,Ls=null,_s=0,or=[],ir=0,Rn=null,Wr=1,Lr="";function wn(e,t){no[oo++]=_s,no[oo++]=Ls,Ls=e,_s=t}function Hp(e,t,n){or[ir++]=Wr,or[ir++]=Lr,or[ir++]=Rn,Rn=e;var o=Wr;e=Lr;var i=32-hr(o)-1;o&=~(1<<i),n+=1;var s=32-hr(t)+i;if(30<s){var l=i-i%5;s=(o&(1<<l)-1).toString(32),o>>=l,i-=l,Wr=1<<32-hr(t)+i|n<<i|o,Lr=s+e}else Wr=1<<s|n<<i|o,Lr=e}function $d(e){e.return!==null&&(wn(e,1),Hp(e,1,0))}function Od(e){for(;e===Ls;)Ls=no[--oo],no[oo]=null,_s=no[--oo],no[oo]=null;for(;e===Rn;)Rn=or[--ir],or[ir]=null,Lr=or[--ir],or[ir]=null,Wr=or[--ir],or[ir]=null}var Xt=null,Kt=null,st=!1,mr=null;function Gp(e,t){var n=sr(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function hg(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xt=e,Kt=ln(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xt=e,Kt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Rn!==null?{id:Wr,overflow:Lr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=sr(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Xt=e,Kt=null,!0):!1;default:return!1}}function Na(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ha(e){if(st){var t=Kt;if(t){var n=t;if(!hg(e,t)){if(Na(e))throw Error(ce(418));t=ln(n.nextSibling);var o=Xt;t&&hg(e,t)?Gp(o,n):(e.flags=e.flags&-4097|2,st=!1,Xt=e)}}else{if(Na(e))throw Error(ce(418));e.flags=e.flags&-4097|2,st=!1,Xt=e}}}function fg(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xt=e}function Qi(e){if(e!==Xt)return!1;if(!st)return fg(e),st=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_a(e.type,e.memoizedProps)),t&&(t=Kt)){if(Na(e))throw Up(),Error(ce(418));for(;t;)Gp(e,t),t=ln(t.nextSibling)}if(fg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(ce(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Kt=ln(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Kt=null}}else Kt=Xt?ln(e.stateNode.nextSibling):null;return!0}function Up(){for(var e=Kt;e;)e=ln(e.nextSibling)}function fo(){Kt=Xt=null,st=!1}function Nd(e){mr===null?mr=[e]:mr.push(e)}var Tf=Gr.ReactCurrentBatchConfig;function $o(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var o=n.stateNode}if(!o)throw Error(ce(147,e));var i=o,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(l){var a=i.refs;l===null?delete a[s]:a[s]=l},t._stringRef=s,t)}if(typeof e!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,e))}return e}function Ki(e,t){throw e=Object.prototype.toString.call(t),Error(ce(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xg(e){var t=e._init;return t(e._payload)}function Yp(e){function t(m,p){if(e){var b=m.deletions;b===null?(m.deletions=[p],m.flags|=16):b.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function o(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=gn(m,p),m.index=0,m.sibling=null,m}function s(m,p,b){return m.index=b,e?(b=m.alternate,b!==null?(b=b.index,b<p?(m.flags|=2,p):b):(m.flags|=2,p)):(m.flags|=1048576,p)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,p,b,E){return p===null||p.tag!==6?(p=Xl(b,m.mode,E),p.return=m,p):(p=i(p,b),p.return=m,p)}function d(m,p,b,E){var C=b.type;return C===qn?h(m,p,b.props.children,E,b.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Xr&&xg(C)===p.type)?(E=i(p,b.props),E.ref=$o(m,p,b),E.return=m,E):(E=ws(b.type,b.key,b.props,null,m.mode,E),E.ref=$o(m,p,b),E.return=m,E)}function c(m,p,b,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==b.containerInfo||p.stateNode.implementation!==b.implementation?(p=ql(b,m.mode,E),p.return=m,p):(p=i(p,b.children||[]),p.return=m,p)}function h(m,p,b,E,C){return p===null||p.tag!==7?(p=Bn(b,m.mode,E,C),p.return=m,p):(p=i(p,b),p.return=m,p)}function x(m,p,b){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Xl(""+p,m.mode,b),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case _i:return b=ws(p.type,p.key,p.props,null,m.mode,b),b.ref=$o(m,null,p),b.return=m,b;case Xn:return p=ql(p,m.mode,b),p.return=m,p;case Xr:var E=p._init;return x(m,E(p._payload),b)}if(Qo(p)||Mo(p))return p=Bn(p,m.mode,b,null),p.return=m,p;Ki(m,p)}return null}function f(m,p,b,E){var C=p!==null?p.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return C!==null?null:a(m,p,""+b,E);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case _i:return b.key===C?d(m,p,b,E):null;case Xn:return b.key===C?c(m,p,b,E):null;case Xr:return C=b._init,f(m,p,C(b._payload),E)}if(Qo(b)||Mo(b))return C!==null?null:h(m,p,b,E,null);Ki(m,b)}return null}function R(m,p,b,E,C){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(b)||null,a(p,m,""+E,C);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case _i:return m=m.get(E.key===null?b:E.key)||null,d(p,m,E,C);case Xn:return m=m.get(E.key===null?b:E.key)||null,c(p,m,E,C);case Xr:var z=E._init;return R(m,p,b,z(E._payload),C)}if(Qo(E)||Mo(E))return m=m.get(b)||null,h(p,m,E,C,null);Ki(p,E)}return null}function S(m,p,b,E){for(var C=null,z=null,M=p,_=p=0,B=null;M!==null&&_<b.length;_++){M.index>_?(B=M,M=null):B=M.sibling;var W=f(m,M,b[_],E);if(W===null){M===null&&(M=B);break}e&&M&&W.alternate===null&&t(m,M),p=s(W,p,_),z===null?C=W:z.sibling=W,z=W,M=B}if(_===b.length)return n(m,M),st&&wn(m,_),C;if(M===null){for(;_<b.length;_++)M=x(m,b[_],E),M!==null&&(p=s(M,p,_),z===null?C=M:z.sibling=M,z=M);return st&&wn(m,_),C}for(M=o(m,M);_<b.length;_++)B=R(M,m,_,b[_],E),B!==null&&(e&&B.alternate!==null&&M.delete(B.key===null?_:B.key),p=s(B,p,_),z===null?C=B:z.sibling=B,z=B);return e&&M.forEach(function(j){return t(m,j)}),st&&wn(m,_),C}function y(m,p,b,E){var C=Mo(b);if(typeof C!="function")throw Error(ce(150));if(b=C.call(b),b==null)throw Error(ce(151));for(var z=C=null,M=p,_=p=0,B=null,W=b.next();M!==null&&!W.done;_++,W=b.next()){M.index>_?(B=M,M=null):B=M.sibling;var j=f(m,M,W.value,E);if(j===null){M===null&&(M=B);break}e&&M&&j.alternate===null&&t(m,M),p=s(j,p,_),z===null?C=j:z.sibling=j,z=j,M=B}if(W.done)return n(m,M),st&&wn(m,_),C;if(M===null){for(;!W.done;_++,W=b.next())W=x(m,W.value,E),W!==null&&(p=s(W,p,_),z===null?C=W:z.sibling=W,z=W);return st&&wn(m,_),C}for(M=o(m,M);!W.done;_++,W=b.next())W=R(M,m,_,W.value,E),W!==null&&(e&&W.alternate!==null&&M.delete(W.key===null?_:W.key),p=s(W,p,_),z===null?C=W:z.sibling=W,z=W);return e&&M.forEach(function(J){return t(m,J)}),st&&wn(m,_),C}function A(m,p,b,E){if(typeof b=="object"&&b!==null&&b.type===qn&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case _i:e:{for(var C=b.key,z=p;z!==null;){if(z.key===C){if(C=b.type,C===qn){if(z.tag===7){n(m,z.sibling),p=i(z,b.props.children),p.return=m,m=p;break e}}else if(z.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Xr&&xg(C)===z.type){n(m,z.sibling),p=i(z,b.props),p.ref=$o(m,z,b),p.return=m,m=p;break e}n(m,z);break}else t(m,z);z=z.sibling}b.type===qn?(p=Bn(b.props.children,m.mode,E,b.key),p.return=m,m=p):(E=ws(b.type,b.key,b.props,null,m.mode,E),E.ref=$o(m,p,b),E.return=m,m=E)}return l(m);case Xn:e:{for(z=b.key;p!==null;){if(p.key===z)if(p.tag===4&&p.stateNode.containerInfo===b.containerInfo&&p.stateNode.implementation===b.implementation){n(m,p.sibling),p=i(p,b.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=ql(b,m.mode,E),p.return=m,m=p}return l(m);case Xr:return z=b._init,A(m,p,z(b._payload),E)}if(Qo(b))return S(m,p,b,E);if(Mo(b))return y(m,p,b,E);Ki(m,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,b),p.return=m,m=p):(n(m,p),p=Xl(b,m.mode,E),p.return=m,m=p),l(m)):n(m,p)}return A}var xo=Yp(!0),Vp=Yp(!1),Ps=mn(null),$s=null,io=null,Hd=null;function Gd(){Hd=io=$s=null}function Ud(e){var t=Ps.current;nt(Ps),e._currentValue=t}function Ga(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function po(e,t){$s=e,Hd=io=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Pt=!0),e.firstContext=null)}function ar(e){var t=e._currentValue;if(Hd!==e)if(e={context:e,memoizedValue:t,next:null},io===null){if($s===null)throw Error(ce(308));io=e,$s.dependencies={lanes:0,firstContext:e}}else io=io.next=e;return t}var In=null;function Yd(e){In===null?In=[e]:In.push(e)}function Qp(e,t,n,o){var i=t.interleaved;return i===null?(n.next=n,Yd(t)):(n.next=i.next,i.next=n),t.interleaved=n,Or(e,o)}function Or(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qr=!1;function Vd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function _r(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function an(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,Ue&2){var i=o.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),o.pending=t,Or(e,n)}return i=o.interleaved,i===null?(t.next=t,Yd(o)):(t.next=i.next,i.next=t),o.interleaved=t,Or(e,n)}function hs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Rd(e,n)}}function yg(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=l:s=s.next=l,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Os(e,t,n,o){var i=e.updateQueue;qr=!1;var s=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var d=a,c=d.next;d.next=null,l===null?s=c:l.next=c,l=d;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==l&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=d))}if(s!==null){var x=i.baseState;l=0,h=c=d=null,a=s;do{var f=a.lane,R=a.eventTime;if((o&f)===f){h!==null&&(h=h.next={eventTime:R,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=e,y=a;switch(f=t,R=n,y.tag){case 1:if(S=y.payload,typeof S=="function"){x=S.call(R,x,f);break e}x=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=y.payload,f=typeof S=="function"?S.call(R,x,f):S,f==null)break e;x=dt({},x,f);break e;case 2:qr=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else R={eventTime:R,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=R,d=x):h=h.next=R,l|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(h===null&&(d=x),i.baseState=d,i.firstBaseUpdate=c,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Fn|=l,e.lanes=l,e.memoizedState=x}}function vg(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],i=o.callback;if(i!==null){if(o.callback=null,o=n,typeof i!="function")throw Error(ce(191,i));i.call(o)}}}var Mi={},Ir=mn(Mi),wi=mn(Mi),ji=mn(Mi);function zn(e){if(e===Mi)throw Error(ce(174));return e}function Qd(e,t){switch(Je(ji,t),Je(wi,e),Je(Ir,Mi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Sa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Sa(t,e)}nt(Ir),Je(Ir,t)}function yo(){nt(Ir),nt(wi),nt(ji)}function Xp(e){zn(ji.current);var t=zn(Ir.current),n=Sa(t,e.type);t!==n&&(Je(wi,e),Je(Ir,n))}function Kd(e){wi.current===e&&(nt(Ir),nt(wi))}var lt=mn(0);function Ns(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Gl=[];function Xd(){for(var e=0;e<Gl.length;e++)Gl[e]._workInProgressVersionPrimary=null;Gl.length=0}var fs=Gr.ReactCurrentDispatcher,Ul=Gr.ReactCurrentBatchConfig,An=0,at=null,xt=null,wt=null,Hs=!1,ii=!1,Si=0,Ef=0;function Tt(){throw Error(ce(321))}function qd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xr(e[n],t[n]))return!1;return!0}function Zd(e,t,n,o,i,s){if(An=s,at=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,fs.current=e===null||e.memoizedState===null?Af:Ff,e=n(o,i),ii){s=0;do{if(ii=!1,Si=0,25<=s)throw Error(ce(301));s+=1,wt=xt=null,t.updateQueue=null,fs.current=Mf,e=n(o,i)}while(ii)}if(fs.current=Gs,t=xt!==null&&xt.next!==null,An=0,wt=xt=at=null,Hs=!1,t)throw Error(ce(300));return e}function Jd(){var e=Si!==0;return Si=0,e}function wr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?at.memoizedState=wt=e:wt=wt.next=e,wt}function dr(){if(xt===null){var e=at.alternate;e=e!==null?e.memoizedState:null}else e=xt.next;var t=wt===null?at.memoizedState:wt.next;if(t!==null)wt=t,xt=e;else{if(e===null)throw Error(ce(310));xt=e,e={memoizedState:xt.memoizedState,baseState:xt.baseState,baseQueue:xt.baseQueue,queue:xt.queue,next:null},wt===null?at.memoizedState=wt=e:wt=wt.next=e}return wt}function Ci(e,t){return typeof t=="function"?t(e):t}function Yl(e){var t=dr(),n=t.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=e;var o=xt,i=o.baseQueue,s=n.pending;if(s!==null){if(i!==null){var l=i.next;i.next=s.next,s.next=l}o.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,o=o.baseState;var a=l=null,d=null,c=s;do{var h=c.lane;if((An&h)===h)d!==null&&(d=d.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),o=c.hasEagerState?c.eagerState:e(o,c.action);else{var x={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};d===null?(a=d=x,l=o):d=d.next=x,at.lanes|=h,Fn|=h}c=c.next}while(c!==null&&c!==s);d===null?l=o:d.next=a,xr(o,t.memoizedState)||(Pt=!0),t.memoizedState=o,t.baseState=l,t.baseQueue=d,n.lastRenderedState=o}if(e=n.interleaved,e!==null){i=e;do s=i.lane,at.lanes|=s,Fn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vl(e){var t=dr(),n=t.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=e;var o=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do s=e(s,l.action),l=l.next;while(l!==i);xr(s,t.memoizedState)||(Pt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,o]}function qp(){}function Zp(e,t){var n=at,o=dr(),i=t(),s=!xr(o.memoizedState,i);if(s&&(o.memoizedState=i,Pt=!0),o=o.queue,ec(tb.bind(null,n,o,e),[e]),o.getSnapshot!==t||s||wt!==null&&wt.memoizedState.tag&1){if(n.flags|=2048,Ii(9,eb.bind(null,n,o,i,t),void 0,null),jt===null)throw Error(ce(349));An&30||Jp(n,t,i)}return i}function Jp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=at.updateQueue,t===null?(t={lastEffect:null,stores:null},at.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function eb(e,t,n,o){t.value=n,t.getSnapshot=o,rb(t)&&nb(e)}function tb(e,t,n){return n(function(){rb(t)&&nb(e)})}function rb(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xr(e,n)}catch{return!0}}function nb(e){var t=Or(e,1);t!==null&&fr(t,e,1,-1)}function kg(e){var t=wr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ci,lastRenderedState:e},t.queue=e,e=e.dispatch=Rf.bind(null,at,e),[t.memoizedState,e]}function Ii(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=at.updateQueue,t===null?(t={lastEffect:null,stores:null},at.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function ob(){return dr().memoizedState}function xs(e,t,n,o){var i=wr();at.flags|=e,i.memoizedState=Ii(1|t,n,void 0,o===void 0?null:o)}function gl(e,t,n,o){var i=dr();o=o===void 0?null:o;var s=void 0;if(xt!==null){var l=xt.memoizedState;if(s=l.destroy,o!==null&&qd(o,l.deps)){i.memoizedState=Ii(t,n,s,o);return}}at.flags|=e,i.memoizedState=Ii(1|t,n,s,o)}function wg(e,t){return xs(8390656,8,e,t)}function ec(e,t){return gl(2048,8,e,t)}function ib(e,t){return gl(4,2,e,t)}function sb(e,t){return gl(4,4,e,t)}function lb(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ab(e,t,n){return n=n!=null?n.concat([e]):null,gl(4,4,lb.bind(null,t,e),n)}function tc(){}function db(e,t){var n=dr();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&qd(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function cb(e,t){var n=dr();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&qd(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function gb(e,t,n){return An&21?(xr(n,t)||(n=hp(),at.lanes|=n,Fn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Pt=!0),e.memoizedState=n)}function Bf(e,t){var n=Xe;Xe=n!==0&&4>n?n:4,e(!0);var o=Ul.transition;Ul.transition={};try{e(!1),t()}finally{Xe=n,Ul.transition=o}}function ub(){return dr().memoizedState}function Df(e,t,n){var o=cn(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},pb(e))bb(t,n);else if(n=Qp(e,t,n,o),n!==null){var i=Mt();fr(n,e,o,i),mb(n,t,o)}}function Rf(e,t,n){var o=cn(e),i={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(pb(e))bb(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var l=t.lastRenderedState,a=s(l,n);if(i.hasEagerState=!0,i.eagerState=a,xr(a,l)){var d=t.interleaved;d===null?(i.next=i,Yd(t)):(i.next=d.next,d.next=i),t.interleaved=i;return}}catch{}finally{}n=Qp(e,t,i,o),n!==null&&(i=Mt(),fr(n,e,o,i),mb(n,t,o))}}function pb(e){var t=e.alternate;return e===at||t!==null&&t===at}function bb(e,t){ii=Hs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function mb(e,t,n){if(n&4194240){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Rd(e,n)}}var Gs={readContext:ar,useCallback:Tt,useContext:Tt,useEffect:Tt,useImperativeHandle:Tt,useInsertionEffect:Tt,useLayoutEffect:Tt,useMemo:Tt,useReducer:Tt,useRef:Tt,useState:Tt,useDebugValue:Tt,useDeferredValue:Tt,useTransition:Tt,useMutableSource:Tt,useSyncExternalStore:Tt,useId:Tt,unstable_isNewReconciler:!1},Af={readContext:ar,useCallback:function(e,t){return wr().memoizedState=[e,t===void 0?null:t],e},useContext:ar,useEffect:wg,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,xs(4194308,4,lb.bind(null,t,e),n)},useLayoutEffect:function(e,t){return xs(4194308,4,e,t)},useInsertionEffect:function(e,t){return xs(4,2,e,t)},useMemo:function(e,t){var n=wr();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=wr();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=Df.bind(null,at,e),[o.memoizedState,e]},useRef:function(e){var t=wr();return e={current:e},t.memoizedState=e},useState:kg,useDebugValue:tc,useDeferredValue:function(e){return wr().memoizedState=e},useTransition:function(){var e=kg(!1),t=e[0];return e=Bf.bind(null,e[1]),wr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=at,i=wr();if(st){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=t(),jt===null)throw Error(ce(349));An&30||Jp(o,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,wg(tb.bind(null,o,s,e),[e]),o.flags|=2048,Ii(9,eb.bind(null,o,s,n,t),void 0,null),n},useId:function(){var e=wr(),t=jt.identifierPrefix;if(st){var n=Lr,o=Wr;n=(o&~(1<<32-hr(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=Si++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ef++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ff={readContext:ar,useCallback:db,useContext:ar,useEffect:ec,useImperativeHandle:ab,useInsertionEffect:ib,useLayoutEffect:sb,useMemo:cb,useReducer:Yl,useRef:ob,useState:function(){return Yl(Ci)},useDebugValue:tc,useDeferredValue:function(e){var t=dr();return gb(t,xt.memoizedState,e)},useTransition:function(){var e=Yl(Ci)[0],t=dr().memoizedState;return[e,t]},useMutableSource:qp,useSyncExternalStore:Zp,useId:ub,unstable_isNewReconciler:!1},Mf={readContext:ar,useCallback:db,useContext:ar,useEffect:ec,useImperativeHandle:ab,useInsertionEffect:ib,useLayoutEffect:sb,useMemo:cb,useReducer:Vl,useRef:ob,useState:function(){return Vl(Ci)},useDebugValue:tc,useDeferredValue:function(e){var t=dr();return xt===null?t.memoizedState=e:gb(t,xt.memoizedState,e)},useTransition:function(){var e=Vl(Ci)[0],t=dr().memoizedState;return[e,t]},useMutableSource:qp,useSyncExternalStore:Zp,useId:ub,unstable_isNewReconciler:!1};function ur(e,t){if(e&&e.defaultProps){t=dt({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ua(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:dt({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ul={isMounted:function(e){return(e=e._reactInternals)?_n(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=Mt(),i=cn(e),s=_r(o,i);s.payload=t,n!=null&&(s.callback=n),t=an(e,s,i),t!==null&&(fr(t,e,i,o),hs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=Mt(),i=cn(e),s=_r(o,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=an(e,s,i),t!==null&&(fr(t,e,i,o),hs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Mt(),o=cn(e),i=_r(n,o);i.tag=2,t!=null&&(i.callback=t),t=an(e,i,o),t!==null&&(fr(t,e,o,n),hs(t,e,o))}};function jg(e,t,n,o,i,s,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,s,l):t.prototype&&t.prototype.isPureReactComponent?!xi(n,o)||!xi(i,s):!0}function hb(e,t,n){var o=!1,i=pn,s=t.contextType;return typeof s=="object"&&s!==null?s=ar(s):(i=Ot(t)?Dn:Dt.current,o=t.contextTypes,s=(o=o!=null)?ho(e,i):pn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ul,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Sg(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&ul.enqueueReplaceState(t,t.state,null)}function Ya(e,t,n,o){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Vd(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=ar(s):(s=Ot(t)?Dn:Dt.current,i.context=ho(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Ua(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ul.enqueueReplaceState(i,i.state,null),Os(e,n,i,o),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function vo(e,t){try{var n="",o=t;do n+=ah(o),o=o.return;while(o);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Ql(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Va(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Wf=typeof WeakMap=="function"?WeakMap:Map;function fb(e,t,n){n=_r(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){Ys||(Ys=!0,nd=o),Va(e,t)},n}function xb(e,t,n){n=_r(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var i=t.value;n.payload=function(){return o(i)},n.callback=function(){Va(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Va(e,t),typeof o!="function"&&(dn===null?dn=new Set([this]):dn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Cg(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new Wf;var i=new Set;o.set(t,i)}else i=o.get(t),i===void 0&&(i=new Set,o.set(t,i));i.has(n)||(i.add(n),e=Xf.bind(null,e,t,n),t.then(e,e))}function Ig(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function zg(e,t,n,o,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=_r(-1,1),t.tag=2,an(n,t,1))),n.lanes|=1),e)}var Lf=Gr.ReactCurrentOwner,Pt=!1;function Ft(e,t,n,o){t.child=e===null?Vp(t,null,n,o):xo(t,e.child,n,o)}function Tg(e,t,n,o,i){n=n.render;var s=t.ref;return po(t,i),o=Zd(e,t,n,o,s,i),n=Jd(),e!==null&&!Pt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Nr(e,t,i)):(st&&n&&$d(t),t.flags|=1,Ft(e,t,o,i),t.child)}function Eg(e,t,n,o,i){if(e===null){var s=n.type;return typeof s=="function"&&!dc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,yb(e,t,s,o,i)):(e=ws(n.type,null,o,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var l=s.memoizedProps;if(n=n.compare,n=n!==null?n:xi,n(l,o)&&e.ref===t.ref)return Nr(e,t,i)}return t.flags|=1,e=gn(s,o),e.ref=t.ref,e.return=t,t.child=e}function yb(e,t,n,o,i){if(e!==null){var s=e.memoizedProps;if(xi(s,o)&&e.ref===t.ref)if(Pt=!1,t.pendingProps=o=s,(e.lanes&i)!==0)e.flags&131072&&(Pt=!0);else return t.lanes=e.lanes,Nr(e,t,i)}return Qa(e,t,n,o,i)}function vb(e,t,n){var o=t.pendingProps,i=o.children,s=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Je(lo,Vt),Vt|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Je(lo,Vt),Vt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=s!==null?s.baseLanes:n,Je(lo,Vt),Vt|=o}else s!==null?(o=s.baseLanes|n,t.memoizedState=null):o=n,Je(lo,Vt),Vt|=o;return Ft(e,t,i,n),t.child}function kb(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Qa(e,t,n,o,i){var s=Ot(n)?Dn:Dt.current;return s=ho(t,s),po(t,i),n=Zd(e,t,n,o,s,i),o=Jd(),e!==null&&!Pt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Nr(e,t,i)):(st&&o&&$d(t),t.flags|=1,Ft(e,t,n,i),t.child)}function Bg(e,t,n,o,i){if(Ot(n)){var s=!0;Ws(t)}else s=!1;if(po(t,i),t.stateNode===null)ys(e,t),hb(t,n,o),Ya(t,n,o,i),o=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var d=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=ar(c):(c=Ot(n)?Dn:Dt.current,c=ho(t,c));var h=n.getDerivedStateFromProps,x=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";x||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==o||d!==c)&&Sg(t,l,o,c),qr=!1;var f=t.memoizedState;l.state=f,Os(t,o,l,i),d=t.memoizedState,a!==o||f!==d||$t.current||qr?(typeof h=="function"&&(Ua(t,n,h,o),d=t.memoizedState),(a=qr||jg(t,n,a,o,f,d,c))?(x||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=d),l.props=o,l.state=d,l.context=c,o=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{l=t.stateNode,Kp(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:ur(t.type,a),l.props=c,x=t.pendingProps,f=l.context,d=n.contextType,typeof d=="object"&&d!==null?d=ar(d):(d=Ot(n)?Dn:Dt.current,d=ho(t,d));var R=n.getDerivedStateFromProps;(h=typeof R=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==x||f!==d)&&Sg(t,l,o,d),qr=!1,f=t.memoizedState,l.state=f,Os(t,o,l,i);var S=t.memoizedState;a!==x||f!==S||$t.current||qr?(typeof R=="function"&&(Ua(t,n,R,o),S=t.memoizedState),(c=qr||jg(t,n,c,o,f,S,d)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(o,S,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(o,S,d)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=S),l.props=o,l.state=S,l.context=d,o=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),o=!1)}return Ka(e,t,n,o,s,i)}function Ka(e,t,n,o,i,s){kb(e,t);var l=(t.flags&128)!==0;if(!o&&!l)return i&&mg(t,n,!1),Nr(e,t,s);o=t.stateNode,Lf.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&l?(t.child=xo(t,e.child,null,s),t.child=xo(t,null,a,s)):Ft(e,t,a,s),t.memoizedState=o.state,i&&mg(t,n,!0),t.child}function wb(e){var t=e.stateNode;t.pendingContext?bg(e,t.pendingContext,t.pendingContext!==t.context):t.context&&bg(e,t.context,!1),Qd(e,t.containerInfo)}function Dg(e,t,n,o,i){return fo(),Nd(i),t.flags|=256,Ft(e,t,n,o),t.child}var Xa={dehydrated:null,treeContext:null,retryLane:0};function qa(e){return{baseLanes:e,cachePool:null,transitions:null}}function jb(e,t,n){var o=t.pendingProps,i=lt.current,s=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Je(lt,i&1),e===null)return Ha(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=o.children,e=o.fallback,s?(o=t.mode,s=t.child,l={mode:"hidden",children:l},!(o&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=ml(l,o,0,null),e=Bn(e,o,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=qa(n),t.memoizedState=Xa,e):rc(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return _f(e,t,l,o,a,i,n);if(s){s=o.fallback,l=t.mode,i=e.child,a=i.sibling;var d={mode:"hidden",children:o.children};return!(l&1)&&t.child!==i?(o=t.child,o.childLanes=0,o.pendingProps=d,t.deletions=null):(o=gn(i,d),o.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=gn(a,s):(s=Bn(s,l,n,null),s.flags|=2),s.return=t,o.return=t,o.sibling=s,t.child=o,o=s,s=t.child,l=e.child.memoizedState,l=l===null?qa(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=Xa,o}return s=e.child,e=s.sibling,o=gn(s,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function rc(e,t){return t=ml({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Xi(e,t,n,o){return o!==null&&Nd(o),xo(t,e.child,null,n),e=rc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _f(e,t,n,o,i,s,l){if(n)return t.flags&256?(t.flags&=-257,o=Ql(Error(ce(422))),Xi(e,t,l,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=o.fallback,i=t.mode,o=ml({mode:"visible",children:o.children},i,0,null),s=Bn(s,i,l,null),s.flags|=2,o.return=t,s.return=t,o.sibling=s,t.child=o,t.mode&1&&xo(t,e.child,null,l),t.child.memoizedState=qa(l),t.memoizedState=Xa,s);if(!(t.mode&1))return Xi(e,t,l,null);if(i.data==="$!"){if(o=i.nextSibling&&i.nextSibling.dataset,o)var a=o.dgst;return o=a,s=Error(ce(419)),o=Ql(s,o,void 0),Xi(e,t,l,o)}if(a=(l&e.childLanes)!==0,Pt||a){if(o=jt,o!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(o.suspendedLanes|l)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Or(e,i),fr(o,e,i,-1))}return ac(),o=Ql(Error(ce(421))),Xi(e,t,l,o)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=qf.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Kt=ln(i.nextSibling),Xt=t,st=!0,mr=null,e!==null&&(or[ir++]=Wr,or[ir++]=Lr,or[ir++]=Rn,Wr=e.id,Lr=e.overflow,Rn=t),t=rc(t,o.children),t.flags|=4096,t)}function Rg(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Ga(e.return,t,n)}function Kl(e,t,n,o,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=n,s.tailMode=i)}function Sb(e,t,n){var o=t.pendingProps,i=o.revealOrder,s=o.tail;if(Ft(e,t,o.children,n),o=lt.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rg(e,n,t);else if(e.tag===19)Rg(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(Je(lt,o),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ns(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Kl(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ns(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Kl(t,!0,n,null,s);break;case"together":Kl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ys(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Nr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Fn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(ce(153));if(t.child!==null){for(e=t.child,n=gn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pf(e,t,n){switch(t.tag){case 3:wb(t),fo();break;case 5:Xp(t);break;case 1:Ot(t.type)&&Ws(t);break;case 4:Qd(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,i=t.memoizedProps.value;Je(Ps,o._currentValue),o._currentValue=i;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(Je(lt,lt.current&1),t.flags|=128,null):n&t.child.childLanes?jb(e,t,n):(Je(lt,lt.current&1),e=Nr(e,t,n),e!==null?e.sibling:null);Je(lt,lt.current&1);break;case 19:if(o=(n&t.childLanes)!==0,e.flags&128){if(o)return Sb(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Je(lt,lt.current),o)break;return null;case 22:case 23:return t.lanes=0,vb(e,t,n)}return Nr(e,t,n)}var Cb,Za,Ib,zb;Cb=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Za=function(){};Ib=function(e,t,n,o){var i=e.memoizedProps;if(i!==o){e=t.stateNode,zn(Ir.current);var s=null;switch(n){case"input":i=va(e,i),o=va(e,o),s=[];break;case"select":i=dt({},i,{value:void 0}),o=dt({},o,{value:void 0}),s=[];break;case"textarea":i=ja(e,i),o=ja(e,o),s=[];break;default:typeof i.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Fs)}Ca(n,o);var l;n=null;for(c in i)if(!o.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(gi.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in o){var d=o[c];if(a=i!=null?i[c]:void 0,o.hasOwnProperty(c)&&d!==a&&(d!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in d)d.hasOwnProperty(l)&&a[l]!==d[l]&&(n||(n={}),n[l]=d[l])}else n||(s||(s=[]),s.push(c,n)),n=d;else c==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,a=a?a.__html:void 0,d!=null&&a!==d&&(s=s||[]).push(c,d)):c==="children"?typeof d!="string"&&typeof d!="number"||(s=s||[]).push(c,""+d):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(gi.hasOwnProperty(c)?(d!=null&&c==="onScroll"&&rt("scroll",e),s||a===d||(s=[])):(s=s||[]).push(c,d))}n&&(s=s||[]).push("style",n);var c=s;(t.updateQueue=c)&&(t.flags|=4)}};zb=function(e,t,n,o){n!==o&&(t.flags|=4)};function Oo(e,t){if(!st)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Et(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags&14680064,o|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function $f(e,t,n){var o=t.pendingProps;switch(Od(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Et(t),null;case 1:return Ot(t.type)&&Ms(),Et(t),null;case 3:return o=t.stateNode,yo(),nt($t),nt(Dt),Xd(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Qi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,mr!==null&&(sd(mr),mr=null))),Za(e,t),Et(t),null;case 5:Kd(t);var i=zn(ji.current);if(n=t.type,e!==null&&t.stateNode!=null)Ib(e,t,n,o,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(ce(166));return Et(t),null}if(e=zn(Ir.current),Qi(t)){o=t.stateNode,n=t.type;var s=t.memoizedProps;switch(o[Sr]=t,o[ki]=s,e=(t.mode&1)!==0,n){case"dialog":rt("cancel",o),rt("close",o);break;case"iframe":case"object":case"embed":rt("load",o);break;case"video":case"audio":for(i=0;i<Xo.length;i++)rt(Xo[i],o);break;case"source":rt("error",o);break;case"img":case"image":case"link":rt("error",o),rt("load",o);break;case"details":rt("toggle",o);break;case"input":Oc(o,s),rt("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!s.multiple},rt("invalid",o);break;case"textarea":Hc(o,s),rt("invalid",o)}Ca(n,s),i=null;for(var l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="children"?typeof a=="string"?o.textContent!==a&&(s.suppressHydrationWarning!==!0&&Vi(o.textContent,a,e),i=["children",a]):typeof a=="number"&&o.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Vi(o.textContent,a,e),i=["children",""+a]):gi.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&rt("scroll",o)}switch(n){case"input":Pi(o),Nc(o,s,!0);break;case"textarea":Pi(o),Gc(o);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(o.onclick=Fs)}o=i,t.updateQueue=o,o!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=tp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=l.createElement(n,{is:o.is}):(e=l.createElement(n),n==="select"&&(l=e,o.multiple?l.multiple=!0:o.size&&(l.size=o.size))):e=l.createElementNS(e,n),e[Sr]=t,e[ki]=o,Cb(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ia(n,o),n){case"dialog":rt("cancel",e),rt("close",e),i=o;break;case"iframe":case"object":case"embed":rt("load",e),i=o;break;case"video":case"audio":for(i=0;i<Xo.length;i++)rt(Xo[i],e);i=o;break;case"source":rt("error",e),i=o;break;case"img":case"image":case"link":rt("error",e),rt("load",e),i=o;break;case"details":rt("toggle",e),i=o;break;case"input":Oc(e,o),i=va(e,o),rt("invalid",e);break;case"option":i=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},i=dt({},o,{value:void 0}),rt("invalid",e);break;case"textarea":Hc(e,o),i=ja(e,o),rt("invalid",e);break;default:i=o}Ca(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var d=a[s];s==="style"?op(e,d):s==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&rp(e,d)):s==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&ui(e,d):typeof d=="number"&&ui(e,""+d):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(gi.hasOwnProperty(s)?d!=null&&s==="onScroll"&&rt("scroll",e):d!=null&&Id(e,s,d,l))}switch(n){case"input":Pi(e),Nc(e,o,!1);break;case"textarea":Pi(e),Gc(e);break;case"option":o.value!=null&&e.setAttribute("value",""+un(o.value));break;case"select":e.multiple=!!o.multiple,s=o.value,s!=null?ao(e,!!o.multiple,s,!1):o.defaultValue!=null&&ao(e,!!o.multiple,o.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Fs)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Et(t),null;case 6:if(e&&t.stateNode!=null)zb(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(ce(166));if(n=zn(ji.current),zn(Ir.current),Qi(t)){if(o=t.stateNode,n=t.memoizedProps,o[Sr]=t,(s=o.nodeValue!==n)&&(e=Xt,e!==null))switch(e.tag){case 3:Vi(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Vi(o.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[Sr]=t,t.stateNode=o}return Et(t),null;case 13:if(nt(lt),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(st&&Kt!==null&&t.mode&1&&!(t.flags&128))Up(),fo(),t.flags|=98560,s=!1;else if(s=Qi(t),o!==null&&o.dehydrated!==null){if(e===null){if(!s)throw Error(ce(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[Sr]=t}else fo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Et(t),s=!1}else mr!==null&&(sd(mr),mr=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||lt.current&1?yt===0&&(yt=3):ac())),t.updateQueue!==null&&(t.flags|=4),Et(t),null);case 4:return yo(),Za(e,t),e===null&&yi(t.stateNode.containerInfo),Et(t),null;case 10:return Ud(t.type._context),Et(t),null;case 17:return Ot(t.type)&&Ms(),Et(t),null;case 19:if(nt(lt),s=t.memoizedState,s===null)return Et(t),null;if(o=(t.flags&128)!==0,l=s.rendering,l===null)if(o)Oo(s,!1);else{if(yt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Ns(e),l!==null){for(t.flags|=128,Oo(s,!1),o=l.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)s=n,e=o,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Je(lt,lt.current&1|2),t.child}e=e.sibling}s.tail!==null&&mt()>ko&&(t.flags|=128,o=!0,Oo(s,!1),t.lanes=4194304)}else{if(!o)if(e=Ns(l),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Oo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!st)return Et(t),null}else 2*mt()-s.renderingStartTime>ko&&n!==1073741824&&(t.flags|=128,o=!0,Oo(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(n=s.last,n!==null?n.sibling=l:t.child=l,s.last=l)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=mt(),t.sibling=null,n=lt.current,Je(lt,o?n&1|2:n&1),t):(Et(t),null);case 22:case 23:return lc(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?Vt&1073741824&&(Et(t),t.subtreeFlags&6&&(t.flags|=8192)):Et(t),null;case 24:return null;case 25:return null}throw Error(ce(156,t.tag))}function Of(e,t){switch(Od(t),t.tag){case 1:return Ot(t.type)&&Ms(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yo(),nt($t),nt(Dt),Xd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Kd(t),null;case 13:if(nt(lt),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(ce(340));fo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return nt(lt),null;case 4:return yo(),null;case 10:return Ud(t.type._context),null;case 22:case 23:return lc(),null;case 24:return null;default:return null}}var qi=!1,Bt=!1,Nf=typeof WeakSet=="function"?WeakSet:Set,Se=null;function so(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){pt(e,t,o)}else n.current=null}function Ja(e,t,n){try{n()}catch(o){pt(e,t,o)}}var Ag=!1;function Hf(e,t){if(Wa=Ds,e=Rp(),Pd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var i=o.anchorOffset,s=o.focusNode;o=o.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var l=0,a=-1,d=-1,c=0,h=0,x=e,f=null;t:for(;;){for(var R;x!==n||i!==0&&x.nodeType!==3||(a=l+i),x!==s||o!==0&&x.nodeType!==3||(d=l+o),x.nodeType===3&&(l+=x.nodeValue.length),(R=x.firstChild)!==null;)f=x,x=R;for(;;){if(x===e)break t;if(f===n&&++c===i&&(a=l),f===s&&++h===o&&(d=l),(R=x.nextSibling)!==null)break;x=f,f=x.parentNode}x=R}n=a===-1||d===-1?null:{start:a,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(La={focusedElem:e,selectionRange:n},Ds=!1,Se=t;Se!==null;)if(t=Se,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Se=e;else for(;Se!==null;){t=Se;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var y=S.memoizedProps,A=S.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?y:ur(t.type,y),A);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(E){pt(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,Se=e;break}Se=t.return}return S=Ag,Ag=!1,S}function si(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var i=o=o.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ja(t,n,s)}i=i.next}while(i!==o)}}function pl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function ed(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Tb(e){var t=e.alternate;t!==null&&(e.alternate=null,Tb(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Sr],delete t[ki],delete t[$a],delete t[Cf],delete t[If])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Eb(e){return e.tag===5||e.tag===3||e.tag===4}function Fg(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Eb(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function td(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Fs));else if(o!==4&&(e=e.child,e!==null))for(td(e,t,n),e=e.sibling;e!==null;)td(e,t,n),e=e.sibling}function rd(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(rd(e,t,n),e=e.sibling;e!==null;)rd(e,t,n),e=e.sibling}var Ct=null,br=!1;function Vr(e,t,n){for(n=n.child;n!==null;)Bb(e,t,n),n=n.sibling}function Bb(e,t,n){if(Cr&&typeof Cr.onCommitFiberUnmount=="function")try{Cr.onCommitFiberUnmount(il,n)}catch{}switch(n.tag){case 5:Bt||so(n,t);case 6:var o=Ct,i=br;Ct=null,Vr(e,t,n),Ct=o,br=i,Ct!==null&&(br?(e=Ct,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ct.removeChild(n.stateNode));break;case 18:Ct!==null&&(br?(e=Ct,n=n.stateNode,e.nodeType===8?Nl(e.parentNode,n):e.nodeType===1&&Nl(e,n),hi(e)):Nl(Ct,n.stateNode));break;case 4:o=Ct,i=br,Ct=n.stateNode.containerInfo,br=!0,Vr(e,t,n),Ct=o,br=i;break;case 0:case 11:case 14:case 15:if(!Bt&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){i=o=o.next;do{var s=i,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&Ja(n,t,l),i=i.next}while(i!==o)}Vr(e,t,n);break;case 1:if(!Bt&&(so(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(a){pt(n,t,a)}Vr(e,t,n);break;case 21:Vr(e,t,n);break;case 22:n.mode&1?(Bt=(o=Bt)||n.memoizedState!==null,Vr(e,t,n),Bt=o):Vr(e,t,n);break;default:Vr(e,t,n)}}function Mg(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Nf),t.forEach(function(o){var i=Zf.bind(null,e,o);n.has(o)||(n.add(o),o.then(i,i))})}}function cr(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var i=n[o];try{var s=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Ct=a.stateNode,br=!1;break e;case 3:Ct=a.stateNode.containerInfo,br=!0;break e;case 4:Ct=a.stateNode.containerInfo,br=!0;break e}a=a.return}if(Ct===null)throw Error(ce(160));Bb(s,l,i),Ct=null,br=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(c){pt(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Db(t,e),t=t.sibling}function Db(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(cr(t,e),vr(e),o&4){try{si(3,e,e.return),pl(3,e)}catch(y){pt(e,e.return,y)}try{si(5,e,e.return)}catch(y){pt(e,e.return,y)}}break;case 1:cr(t,e),vr(e),o&512&&n!==null&&so(n,n.return);break;case 5:if(cr(t,e),vr(e),o&512&&n!==null&&so(n,n.return),e.flags&32){var i=e.stateNode;try{ui(i,"")}catch(y){pt(e,e.return,y)}}if(o&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,l=n!==null?n.memoizedProps:s,a=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ju(i,s),Ia(a,l);var c=Ia(a,s);for(l=0;l<d.length;l+=2){var h=d[l],x=d[l+1];h==="style"?op(i,x):h==="dangerouslySetInnerHTML"?rp(i,x):h==="children"?ui(i,x):Id(i,h,x,c)}switch(a){case"input":ka(i,s);break;case"textarea":ep(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var R=s.value;R!=null?ao(i,!!s.multiple,R,!1):f!==!!s.multiple&&(s.defaultValue!=null?ao(i,!!s.multiple,s.defaultValue,!0):ao(i,!!s.multiple,s.multiple?[]:"",!1))}i[ki]=s}catch(y){pt(e,e.return,y)}}break;case 6:if(cr(t,e),vr(e),o&4){if(e.stateNode===null)throw Error(ce(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(y){pt(e,e.return,y)}}break;case 3:if(cr(t,e),vr(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{hi(t.containerInfo)}catch(y){pt(e,e.return,y)}break;case 4:cr(t,e),vr(e);break;case 13:cr(t,e),vr(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ic=mt())),o&4&&Mg(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(Bt=(c=Bt)||h,cr(t,e),Bt=c):cr(t,e),vr(e),o&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(Se=e,h=e.child;h!==null;){for(x=Se=h;Se!==null;){switch(f=Se,R=f.child,f.tag){case 0:case 11:case 14:case 15:si(4,f,f.return);break;case 1:so(f,f.return);var S=f.stateNode;if(typeof S.componentWillUnmount=="function"){o=f,n=f.return;try{t=o,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(y){pt(o,n,y)}}break;case 5:so(f,f.return);break;case 22:if(f.memoizedState!==null){Lg(x);continue}}R!==null?(R.return=f,Se=R):Lg(x)}h=h.sibling}e:for(h=null,x=e;;){if(x.tag===5){if(h===null){h=x;try{i=x.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=x.stateNode,d=x.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,a.style.display=np("display",l))}catch(y){pt(e,e.return,y)}}}else if(x.tag===6){if(h===null)try{x.stateNode.nodeValue=c?"":x.memoizedProps}catch(y){pt(e,e.return,y)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;h===x&&(h=null),x=x.return}h===x&&(h=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:cr(t,e),vr(e),o&4&&Mg(e);break;case 21:break;default:cr(t,e),vr(e)}}function vr(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Eb(n)){var o=n;break e}n=n.return}throw Error(ce(160))}switch(o.tag){case 5:var i=o.stateNode;o.flags&32&&(ui(i,""),o.flags&=-33);var s=Fg(e);rd(e,s,i);break;case 3:case 4:var l=o.stateNode.containerInfo,a=Fg(e);td(e,a,l);break;default:throw Error(ce(161))}}catch(d){pt(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Gf(e,t,n){Se=e,Rb(e)}function Rb(e,t,n){for(var o=(e.mode&1)!==0;Se!==null;){var i=Se,s=i.child;if(i.tag===22&&o){var l=i.memoizedState!==null||qi;if(!l){var a=i.alternate,d=a!==null&&a.memoizedState!==null||Bt;a=qi;var c=Bt;if(qi=l,(Bt=d)&&!c)for(Se=i;Se!==null;)l=Se,d=l.child,l.tag===22&&l.memoizedState!==null?_g(i):d!==null?(d.return=l,Se=d):_g(i);for(;s!==null;)Se=s,Rb(s),s=s.sibling;Se=i,qi=a,Bt=c}Wg(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Se=s):Wg(e)}}function Wg(e){for(;Se!==null;){var t=Se;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Bt||pl(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!Bt)if(n===null)o.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ur(t.type,n.memoizedProps);o.componentDidUpdate(i,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&vg(t,s,o);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}vg(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var x=h.dehydrated;x!==null&&hi(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}Bt||t.flags&512&&ed(t)}catch(f){pt(t,t.return,f)}}if(t===e){Se=null;break}if(n=t.sibling,n!==null){n.return=t.return,Se=n;break}Se=t.return}}function Lg(e){for(;Se!==null;){var t=Se;if(t===e){Se=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Se=n;break}Se=t.return}}function _g(e){for(;Se!==null;){var t=Se;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{pl(4,t)}catch(d){pt(t,n,d)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var i=t.return;try{o.componentDidMount()}catch(d){pt(t,i,d)}}var s=t.return;try{ed(t)}catch(d){pt(t,s,d)}break;case 5:var l=t.return;try{ed(t)}catch(d){pt(t,l,d)}}}catch(d){pt(t,t.return,d)}if(t===e){Se=null;break}var a=t.sibling;if(a!==null){a.return=t.return,Se=a;break}Se=t.return}}var Uf=Math.ceil,Us=Gr.ReactCurrentDispatcher,nc=Gr.ReactCurrentOwner,lr=Gr.ReactCurrentBatchConfig,Ue=0,jt=null,ft=null,It=0,Vt=0,lo=mn(0),yt=0,zi=null,Fn=0,bl=0,oc=0,li=null,_t=null,ic=0,ko=1/0,Br=null,Ys=!1,nd=null,dn=null,Zi=!1,rn=null,Vs=0,ai=0,od=null,vs=-1,ks=0;function Mt(){return Ue&6?mt():vs!==-1?vs:vs=mt()}function cn(e){return e.mode&1?Ue&2&&It!==0?It&-It:Tf.transition!==null?(ks===0&&(ks=hp()),ks):(e=Xe,e!==0||(e=window.event,e=e===void 0?16:jp(e.type)),e):1}function fr(e,t,n,o){if(50<ai)throw ai=0,od=null,Error(ce(185));Ri(e,n,o),(!(Ue&2)||e!==jt)&&(e===jt&&(!(Ue&2)&&(bl|=n),yt===4&&Jr(e,It)),Nt(e,o),n===1&&Ue===0&&!(t.mode&1)&&(ko=mt()+500,cl&&hn()))}function Nt(e,t){var n=e.callbackNode;zh(e,t);var o=Bs(e,e===jt?It:0);if(o===0)n!==null&&Vc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&Vc(n),t===1)e.tag===0?zf(Pg.bind(null,e)):Np(Pg.bind(null,e)),jf(function(){!(Ue&6)&&hn()}),n=null;else{switch(fp(o)){case 1:n=Dd;break;case 4:n=bp;break;case 16:n=Es;break;case 536870912:n=mp;break;default:n=Es}n=$b(n,Ab.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ab(e,t){if(vs=-1,ks=0,Ue&6)throw Error(ce(327));var n=e.callbackNode;if(bo()&&e.callbackNode!==n)return null;var o=Bs(e,e===jt?It:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=Qs(e,o);else{t=o;var i=Ue;Ue|=2;var s=Mb();(jt!==e||It!==t)&&(Br=null,ko=mt()+500,En(e,t));do try{Qf();break}catch(a){Fb(e,a)}while(!0);Gd(),Us.current=s,Ue=i,ft!==null?t=0:(jt=null,It=0,t=yt)}if(t!==0){if(t===2&&(i=Da(e),i!==0&&(o=i,t=id(e,i))),t===1)throw n=zi,En(e,0),Jr(e,o),Nt(e,mt()),n;if(t===6)Jr(e,o);else{if(i=e.current.alternate,!(o&30)&&!Yf(i)&&(t=Qs(e,o),t===2&&(s=Da(e),s!==0&&(o=s,t=id(e,s))),t===1))throw n=zi,En(e,0),Jr(e,o),Nt(e,mt()),n;switch(e.finishedWork=i,e.finishedLanes=o,t){case 0:case 1:throw Error(ce(345));case 2:jn(e,_t,Br);break;case 3:if(Jr(e,o),(o&130023424)===o&&(t=ic+500-mt(),10<t)){if(Bs(e,0)!==0)break;if(i=e.suspendedLanes,(i&o)!==o){Mt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Pa(jn.bind(null,e,_t,Br),t);break}jn(e,_t,Br);break;case 4:if(Jr(e,o),(o&4194240)===o)break;for(t=e.eventTimes,i=-1;0<o;){var l=31-hr(o);s=1<<l,l=t[l],l>i&&(i=l),o&=~s}if(o=i,o=mt()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Uf(o/1960))-o,10<o){e.timeoutHandle=Pa(jn.bind(null,e,_t,Br),o);break}jn(e,_t,Br);break;case 5:jn(e,_t,Br);break;default:throw Error(ce(329))}}}return Nt(e,mt()),e.callbackNode===n?Ab.bind(null,e):null}function id(e,t){var n=li;return e.current.memoizedState.isDehydrated&&(En(e,t).flags|=256),e=Qs(e,t),e!==2&&(t=_t,_t=n,t!==null&&sd(t)),e}function sd(e){_t===null?_t=e:_t.push.apply(_t,e)}function Yf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var i=n[o],s=i.getSnapshot;i=i.value;try{if(!xr(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jr(e,t){for(t&=~oc,t&=~bl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-hr(t),o=1<<n;e[n]=-1,t&=~o}}function Pg(e){if(Ue&6)throw Error(ce(327));bo();var t=Bs(e,0);if(!(t&1))return Nt(e,mt()),null;var n=Qs(e,t);if(e.tag!==0&&n===2){var o=Da(e);o!==0&&(t=o,n=id(e,o))}if(n===1)throw n=zi,En(e,0),Jr(e,t),Nt(e,mt()),n;if(n===6)throw Error(ce(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,jn(e,_t,Br),Nt(e,mt()),null}function sc(e,t){var n=Ue;Ue|=1;try{return e(t)}finally{Ue=n,Ue===0&&(ko=mt()+500,cl&&hn())}}function Mn(e){rn!==null&&rn.tag===0&&!(Ue&6)&&bo();var t=Ue;Ue|=1;var n=lr.transition,o=Xe;try{if(lr.transition=null,Xe=1,e)return e()}finally{Xe=o,lr.transition=n,Ue=t,!(Ue&6)&&hn()}}function lc(){Vt=lo.current,nt(lo)}function En(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,wf(n)),ft!==null)for(n=ft.return;n!==null;){var o=n;switch(Od(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Ms();break;case 3:yo(),nt($t),nt(Dt),Xd();break;case 5:Kd(o);break;case 4:yo();break;case 13:nt(lt);break;case 19:nt(lt);break;case 10:Ud(o.type._context);break;case 22:case 23:lc()}n=n.return}if(jt=e,ft=e=gn(e.current,null),It=Vt=t,yt=0,zi=null,oc=bl=Fn=0,_t=li=null,In!==null){for(t=0;t<In.length;t++)if(n=In[t],o=n.interleaved,o!==null){n.interleaved=null;var i=o.next,s=n.pending;if(s!==null){var l=s.next;s.next=i,o.next=l}n.pending=o}In=null}return e}function Fb(e,t){do{var n=ft;try{if(Gd(),fs.current=Gs,Hs){for(var o=at.memoizedState;o!==null;){var i=o.queue;i!==null&&(i.pending=null),o=o.next}Hs=!1}if(An=0,wt=xt=at=null,ii=!1,Si=0,nc.current=null,n===null||n.return===null){yt=1,zi=t,ft=null;break}e:{var s=e,l=n.return,a=n,d=t;if(t=It,a.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var c=d,h=a,x=h.tag;if(!(h.mode&1)&&(x===0||x===11||x===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var R=Ig(l);if(R!==null){R.flags&=-257,zg(R,l,a,s,t),R.mode&1&&Cg(s,c,t),t=R,d=c;var S=t.updateQueue;if(S===null){var y=new Set;y.add(d),t.updateQueue=y}else S.add(d);break e}else{if(!(t&1)){Cg(s,c,t),ac();break e}d=Error(ce(426))}}else if(st&&a.mode&1){var A=Ig(l);if(A!==null){!(A.flags&65536)&&(A.flags|=256),zg(A,l,a,s,t),Nd(vo(d,a));break e}}s=d=vo(d,a),yt!==4&&(yt=2),li===null?li=[s]:li.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var m=fb(s,d,t);yg(s,m);break e;case 1:a=d;var p=s.type,b=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(dn===null||!dn.has(b)))){s.flags|=65536,t&=-t,s.lanes|=t;var E=xb(s,a,t);yg(s,E);break e}}s=s.return}while(s!==null)}Lb(n)}catch(C){t=C,ft===n&&n!==null&&(ft=n=n.return);continue}break}while(!0)}function Mb(){var e=Us.current;return Us.current=Gs,e===null?Gs:e}function ac(){(yt===0||yt===3||yt===2)&&(yt=4),jt===null||!(Fn&268435455)&&!(bl&268435455)||Jr(jt,It)}function Qs(e,t){var n=Ue;Ue|=2;var o=Mb();(jt!==e||It!==t)&&(Br=null,En(e,t));do try{Vf();break}catch(i){Fb(e,i)}while(!0);if(Gd(),Ue=n,Us.current=o,ft!==null)throw Error(ce(261));return jt=null,It=0,yt}function Vf(){for(;ft!==null;)Wb(ft)}function Qf(){for(;ft!==null&&!xh();)Wb(ft)}function Wb(e){var t=Pb(e.alternate,e,Vt);e.memoizedProps=e.pendingProps,t===null?Lb(e):ft=t,nc.current=null}function Lb(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Of(n,t),n!==null){n.flags&=32767,ft=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{yt=6,ft=null;return}}else if(n=$f(n,t,Vt),n!==null){ft=n;return}if(t=t.sibling,t!==null){ft=t;return}ft=t=e}while(t!==null);yt===0&&(yt=5)}function jn(e,t,n){var o=Xe,i=lr.transition;try{lr.transition=null,Xe=1,Kf(e,t,n,o)}finally{lr.transition=i,Xe=o}return null}function Kf(e,t,n,o){do bo();while(rn!==null);if(Ue&6)throw Error(ce(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(ce(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Th(e,s),e===jt&&(ft=jt=null,It=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zi||(Zi=!0,$b(Es,function(){return bo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=lr.transition,lr.transition=null;var l=Xe;Xe=1;var a=Ue;Ue|=4,nc.current=null,Hf(e,n),Db(n,e),mf(La),Ds=!!Wa,La=Wa=null,e.current=n,Gf(n),yh(),Ue=a,Xe=l,lr.transition=s}else e.current=n;if(Zi&&(Zi=!1,rn=e,Vs=i),s=e.pendingLanes,s===0&&(dn=null),wh(n.stateNode),Nt(e,mt()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],o(i.value,{componentStack:i.stack,digest:i.digest});if(Ys)throw Ys=!1,e=nd,nd=null,e;return Vs&1&&e.tag!==0&&bo(),s=e.pendingLanes,s&1?e===od?ai++:(ai=0,od=e):ai=0,hn(),null}function bo(){if(rn!==null){var e=fp(Vs),t=lr.transition,n=Xe;try{if(lr.transition=null,Xe=16>e?16:e,rn===null)var o=!1;else{if(e=rn,rn=null,Vs=0,Ue&6)throw Error(ce(331));var i=Ue;for(Ue|=4,Se=e.current;Se!==null;){var s=Se,l=s.child;if(Se.flags&16){var a=s.deletions;if(a!==null){for(var d=0;d<a.length;d++){var c=a[d];for(Se=c;Se!==null;){var h=Se;switch(h.tag){case 0:case 11:case 15:si(8,h,s)}var x=h.child;if(x!==null)x.return=h,Se=x;else for(;Se!==null;){h=Se;var f=h.sibling,R=h.return;if(Tb(h),h===c){Se=null;break}if(f!==null){f.return=R,Se=f;break}Se=R}}}var S=s.alternate;if(S!==null){var y=S.child;if(y!==null){S.child=null;do{var A=y.sibling;y.sibling=null,y=A}while(y!==null)}}Se=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,Se=l;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:si(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,Se=m;break e}Se=s.return}}var p=e.current;for(Se=p;Se!==null;){l=Se;var b=l.child;if(l.subtreeFlags&2064&&b!==null)b.return=l,Se=b;else e:for(l=p;Se!==null;){if(a=Se,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:pl(9,a)}}catch(C){pt(a,a.return,C)}if(a===l){Se=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,Se=E;break e}Se=a.return}}if(Ue=i,hn(),Cr&&typeof Cr.onPostCommitFiberRoot=="function")try{Cr.onPostCommitFiberRoot(il,e)}catch{}o=!0}return o}finally{Xe=n,lr.transition=t}}return!1}function $g(e,t,n){t=vo(n,t),t=fb(e,t,1),e=an(e,t,1),t=Mt(),e!==null&&(Ri(e,1,t),Nt(e,t))}function pt(e,t,n){if(e.tag===3)$g(e,e,n);else for(;t!==null;){if(t.tag===3){$g(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(dn===null||!dn.has(o))){e=vo(n,e),e=xb(t,e,1),t=an(t,e,1),e=Mt(),t!==null&&(Ri(t,1,e),Nt(t,e));break}}t=t.return}}function Xf(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=Mt(),e.pingedLanes|=e.suspendedLanes&n,jt===e&&(It&n)===n&&(yt===4||yt===3&&(It&130023424)===It&&500>mt()-ic?En(e,0):oc|=n),Nt(e,t)}function _b(e,t){t===0&&(e.mode&1?(t=Ni,Ni<<=1,!(Ni&130023424)&&(Ni=4194304)):t=1);var n=Mt();e=Or(e,t),e!==null&&(Ri(e,t,n),Nt(e,n))}function qf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_b(e,n)}function Zf(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(ce(314))}o!==null&&o.delete(t),_b(e,n)}var Pb;Pb=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||$t.current)Pt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Pt=!1,Pf(e,t,n);Pt=!!(e.flags&131072)}else Pt=!1,st&&t.flags&1048576&&Hp(t,_s,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;ys(e,t),e=t.pendingProps;var i=ho(t,Dt.current);po(t,n),i=Zd(null,t,o,e,i,n);var s=Jd();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ot(o)?(s=!0,Ws(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vd(t),i.updater=ul,t.stateNode=i,i._reactInternals=t,Ya(t,o,e,n),t=Ka(null,t,o,!0,s,n)):(t.tag=0,st&&s&&$d(t),Ft(null,t,i,n),t=t.child),t;case 16:o=t.elementType;e:{switch(ys(e,t),e=t.pendingProps,i=o._init,o=i(o._payload),t.type=o,i=t.tag=ex(o),e=ur(o,e),i){case 0:t=Qa(null,t,o,e,n);break e;case 1:t=Bg(null,t,o,e,n);break e;case 11:t=Tg(null,t,o,e,n);break e;case 14:t=Eg(null,t,o,ur(o.type,e),n);break e}throw Error(ce(306,o,""))}return t;case 0:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:ur(o,i),Qa(e,t,o,i,n);case 1:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:ur(o,i),Bg(e,t,o,i,n);case 3:e:{if(wb(t),e===null)throw Error(ce(387));o=t.pendingProps,s=t.memoizedState,i=s.element,Kp(e,t),Os(t,o,null,n);var l=t.memoizedState;if(o=l.element,s.isDehydrated)if(s={element:o,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=vo(Error(ce(423)),t),t=Dg(e,t,o,n,i);break e}else if(o!==i){i=vo(Error(ce(424)),t),t=Dg(e,t,o,n,i);break e}else for(Kt=ln(t.stateNode.containerInfo.firstChild),Xt=t,st=!0,mr=null,n=Vp(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fo(),o===i){t=Nr(e,t,n);break e}Ft(e,t,o,n)}t=t.child}return t;case 5:return Xp(t),e===null&&Ha(t),o=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,l=i.children,_a(o,i)?l=null:s!==null&&_a(o,s)&&(t.flags|=32),kb(e,t),Ft(e,t,l,n),t.child;case 6:return e===null&&Ha(t),null;case 13:return jb(e,t,n);case 4:return Qd(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=xo(t,null,o,n):Ft(e,t,o,n),t.child;case 11:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:ur(o,i),Tg(e,t,o,i,n);case 7:return Ft(e,t,t.pendingProps,n),t.child;case 8:return Ft(e,t,t.pendingProps.children,n),t.child;case 12:return Ft(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,i=t.pendingProps,s=t.memoizedProps,l=i.value,Je(Ps,o._currentValue),o._currentValue=l,s!==null)if(xr(s.value,l)){if(s.children===i.children&&!$t.current){t=Nr(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){l=s.child;for(var d=a.firstContext;d!==null;){if(d.context===o){if(s.tag===1){d=_r(-1,n&-n),d.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?d.next=d:(d.next=h.next,h.next=d),c.pending=d}}s.lanes|=n,d=s.alternate,d!==null&&(d.lanes|=n),Ga(s.return,n,t),a.lanes|=n;break}d=d.next}}else if(s.tag===10)l=s.type===t.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(ce(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Ga(l,n,t),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===t){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}Ft(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,o=t.pendingProps.children,po(t,n),i=ar(i),o=o(i),t.flags|=1,Ft(e,t,o,n),t.child;case 14:return o=t.type,i=ur(o,t.pendingProps),i=ur(o.type,i),Eg(e,t,o,i,n);case 15:return yb(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:ur(o,i),ys(e,t),t.tag=1,Ot(o)?(e=!0,Ws(t)):e=!1,po(t,n),hb(t,o,i),Ya(t,o,i,n),Ka(null,t,o,!0,e,n);case 19:return Sb(e,t,n);case 22:return vb(e,t,n)}throw Error(ce(156,t.tag))};function $b(e,t){return pp(e,t)}function Jf(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function sr(e,t,n,o){return new Jf(e,t,n,o)}function dc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ex(e){if(typeof e=="function")return dc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Td)return 11;if(e===Ed)return 14}return 2}function gn(e,t){var n=e.alternate;return n===null?(n=sr(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ws(e,t,n,o,i,s){var l=2;if(o=e,typeof e=="function")dc(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case qn:return Bn(n.children,i,s,t);case zd:l=8,i|=8;break;case ha:return e=sr(12,n,t,i|2),e.elementType=ha,e.lanes=s,e;case fa:return e=sr(13,n,t,i),e.elementType=fa,e.lanes=s,e;case xa:return e=sr(19,n,t,i),e.elementType=xa,e.lanes=s,e;case Xu:return ml(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Qu:l=10;break e;case Ku:l=9;break e;case Td:l=11;break e;case Ed:l=14;break e;case Xr:l=16,o=null;break e}throw Error(ce(130,e==null?e:typeof e,""))}return t=sr(l,n,t,i),t.elementType=e,t.type=o,t.lanes=s,t}function Bn(e,t,n,o){return e=sr(7,e,o,t),e.lanes=n,e}function ml(e,t,n,o){return e=sr(22,e,o,t),e.elementType=Xu,e.lanes=n,e.stateNode={isHidden:!1},e}function Xl(e,t,n){return e=sr(6,e,null,t),e.lanes=n,e}function ql(e,t,n){return t=sr(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function tx(e,t,n,o,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dl(0),this.expirationTimes=Dl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dl(0),this.identifierPrefix=o,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function cc(e,t,n,o,i,s,l,a,d){return e=new tx(e,t,n,a,d),t===1?(t=1,s===!0&&(t|=8)):t=0,s=sr(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vd(s),e}function rx(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xn,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function Ob(e){if(!e)return pn;e=e._reactInternals;e:{if(_n(e)!==e||e.tag!==1)throw Error(ce(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ot(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(ce(171))}if(e.tag===1){var n=e.type;if(Ot(n))return Op(e,n,t)}return t}function Nb(e,t,n,o,i,s,l,a,d){return e=cc(n,o,!0,e,i,s,l,a,d),e.context=Ob(null),n=e.current,o=Mt(),i=cn(n),s=_r(o,i),s.callback=t??null,an(n,s,i),e.current.lanes=i,Ri(e,i,o),Nt(e,o),e}function hl(e,t,n,o){var i=t.current,s=Mt(),l=cn(i);return n=Ob(n),t.context===null?t.context=n:t.pendingContext=n,t=_r(s,l),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=an(i,t,l),e!==null&&(fr(e,i,l,s),hs(e,i,l)),l}function Ks(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Og(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function gc(e,t){Og(e,t),(e=e.alternate)&&Og(e,t)}function nx(){return null}var Hb=typeof reportError=="function"?reportError:function(e){console.error(e)};function uc(e){this._internalRoot=e}fl.prototype.render=uc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(ce(409));hl(e,t,null,null)};fl.prototype.unmount=uc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mn(function(){hl(null,e,null,null)}),t[$r]=null}};function fl(e){this._internalRoot=e}fl.prototype.unstable_scheduleHydration=function(e){if(e){var t=vp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Zr.length&&t!==0&&t<Zr[n].priority;n++);Zr.splice(n,0,e),n===0&&wp(e)}};function pc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ng(){}function ox(e,t,n,o,i){if(i){if(typeof o=="function"){var s=o;o=function(){var c=Ks(l);s.call(c)}}var l=Nb(t,o,e,0,null,!1,!1,"",Ng);return e._reactRootContainer=l,e[$r]=l.current,yi(e.nodeType===8?e.parentNode:e),Mn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof o=="function"){var a=o;o=function(){var c=Ks(d);a.call(c)}}var d=cc(e,0,!1,null,null,!1,!1,"",Ng);return e._reactRootContainer=d,e[$r]=d.current,yi(e.nodeType===8?e.parentNode:e),Mn(function(){hl(t,d,n,o)}),d}function yl(e,t,n,o,i){var s=n._reactRootContainer;if(s){var l=s;if(typeof i=="function"){var a=i;i=function(){var d=Ks(l);a.call(d)}}hl(t,l,e,i)}else l=ox(n,t,e,i,o);return Ks(l)}xp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ko(t.pendingLanes);n!==0&&(Rd(t,n|1),Nt(t,mt()),!(Ue&6)&&(ko=mt()+500,hn()))}break;case 13:Mn(function(){var o=Or(e,1);if(o!==null){var i=Mt();fr(o,e,1,i)}}),gc(e,1)}};Ad=function(e){if(e.tag===13){var t=Or(e,134217728);if(t!==null){var n=Mt();fr(t,e,134217728,n)}gc(e,134217728)}};yp=function(e){if(e.tag===13){var t=cn(e),n=Or(e,t);if(n!==null){var o=Mt();fr(n,e,t,o)}gc(e,t)}};vp=function(){return Xe};kp=function(e,t){var n=Xe;try{return Xe=e,t()}finally{Xe=n}};Ta=function(e,t,n){switch(t){case"input":if(ka(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var i=dl(o);if(!i)throw Error(ce(90));Zu(o),ka(o,i)}}}break;case"textarea":ep(e,n);break;case"select":t=n.value,t!=null&&ao(e,!!n.multiple,t,!1)}};lp=sc;ap=Mn;var ix={usingClientEntryPoint:!1,Events:[Fi,to,dl,ip,sp,sc]},No={findFiberByHostInstance:Cn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sx={bundleType:No.bundleType,version:No.version,rendererPackageName:No.rendererPackageName,rendererConfig:No.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=gp(e),e===null?null:e.stateNode},findFiberByHostInstance:No.findFiberByHostInstance||nx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ji=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ji.isDisabled&&Ji.supportsFiber)try{il=Ji.inject(sx),Cr=Ji}catch{}}Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ix;Zt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pc(t))throw Error(ce(200));return rx(e,t,null,n)};Zt.createRoot=function(e,t){if(!pc(e))throw Error(ce(299));var n=!1,o="",i=Hb;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=cc(e,1,!1,null,null,n,!1,o,i),e[$r]=t.current,yi(e.nodeType===8?e.parentNode:e),new uc(t)};Zt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(ce(188)):(e=Object.keys(e).join(","),Error(ce(268,e)));return e=gp(t),e=e===null?null:e.stateNode,e};Zt.flushSync=function(e){return Mn(e)};Zt.hydrate=function(e,t,n){if(!xl(t))throw Error(ce(200));return yl(null,e,t,!0,n)};Zt.hydrateRoot=function(e,t,n){if(!pc(e))throw Error(ce(405));var o=n!=null&&n.hydratedSources||null,i=!1,s="",l=Hb;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Nb(t,null,e,1,n??null,i,!1,s,l),e[$r]=t.current,yi(e),o)for(e=0;e<o.length;e++)n=o[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new fl(t)};Zt.render=function(e,t,n){if(!xl(t))throw Error(ce(200));return yl(null,e,t,!1,n)};Zt.unmountComponentAtNode=function(e){if(!xl(e))throw Error(ce(40));return e._reactRootContainer?(Mn(function(){yl(null,null,e,!1,function(){e._reactRootContainer=null,e[$r]=null})}),!0):!1};Zt.unstable_batchedUpdates=sc;Zt.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!xl(n))throw Error(ce(200));if(e==null||e._reactInternals===void 0)throw Error(ce(38));return yl(e,t,n,!1,o)};Zt.version="18.3.1-next-f1338f8080-20240426";function Gb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gb)}catch(e){console.error(e)}}Gb(),Gu.exports=Zt;var lx=Gu.exports,Ub,Hg=lx;Ub=Hg.createRoot,Hg.hydrateRoot;/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Yb=(...e)=>e.filter((t,n,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=g.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:o,className:i="",children:s,iconNode:l,...a},d)=>g.createElement("svg",{ref:d,...dx,width:t,height:t,stroke:e,strokeWidth:o?Number(n)*24/Number(t):n,className:Yb("lucide",i),...a},[...l.map(([c,h])=>g.createElement(c,h)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=(e,t)=>{const n=g.forwardRef(({className:o,...i},s)=>g.createElement(cx,{ref:s,iconNode:t,className:Yb(`lucide-${ax(e)}`,o),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=ie("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=ie("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=ie("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=ie("Baby",[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=ie("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=ie("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=ie("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=ie("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=ie("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=ie("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=ie("Bus",[["path",{d:"M8 6v6",key:"18i7km"}],["path",{d:"M15 6v6",key:"1sg6z9"}],["path",{d:"M2 12h19.6",key:"de5uta"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",key:"1wwztk"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M9 18h5",key:"lrx6i"}],["circle",{cx:"16",cy:"18",r:"2",key:"1v4tcr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=ie("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=ie("CalendarPlus",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=ie("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=ie("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=ie("Carrot",[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46",key:"rfqxbe"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z",key:"6b25w4"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z",key:"fn65lo"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=ie("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=ie("ChartLine",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const We=ie("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wi=ie("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=ie("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ur=ie("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=ie("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=ie("Clapperboard",[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",key:"1tn4o7"}],["path",{d:"m6.2 5.3 3.1 3.9",key:"iuk76l"}],["path",{d:"m12.4 3.4 3.1 4",key:"6hsd6n"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",key:"ltgou9"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=ie("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=ie("Coffee",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=ie("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=ie("Columns3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=ie("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=ie("Droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=ie("Dumbbell",[["path",{d:"M14.4 14.4 9.6 9.6",key:"ic80wn"}],["path",{d:"M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z",key:"nnl7wr"}],["path",{d:"m21.5 21.5-1.4-1.4",key:"1f1ice"}],["path",{d:"M3.9 3.9 2.5 2.5",key:"1evmna"}],["path",{d:"M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z",key:"yhosts"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=ie("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xs=ie("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=ie("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zo=ie("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=ie("Fuel",[["line",{x1:"3",x2:"15",y1:"22",y2:"22",key:"xegly4"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9",key:"xcnuvu"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",key:"16j0yd"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",key:"7cu91f"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=ie("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qs=ie("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=ie("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zs=ie("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=ie("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=ie("HeartPulse",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=ie("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=ie("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=ie("ImagePlus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=ie("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=ie("Images",[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18",key:"nf6bnh"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2",key:"12espp"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=ie("IndianRupee",[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=ie("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=ie("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=ie("LayoutList",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=ie("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Js=ie("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=ie("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=ie("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=ie("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=ie("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=ie("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=ie("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=ie("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=ie("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=ie("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=ie("PanelLeftOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=ie("PartyPopper",[["path",{d:"M5.8 11.3 2 22l10.7-3.79",key:"gwxi1d"}],["path",{d:"M4 3h.01",key:"1vcuye"}],["path",{d:"M22 8h.01",key:"1mrtc2"}],["path",{d:"M15 2h.01",key:"1cjtqr"}],["path",{d:"M22 20h.01",key:"1mrys2"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",key:"hbicv8"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17",key:"1i94pl"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7",key:"1cofks"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",key:"4kbmks"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=ie("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=ie("PawPrint",[["circle",{cx:"11",cy:"4",r:"2",key:"vol9p0"}],["circle",{cx:"18",cy:"8",r:"2",key:"17gozi"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",key:"1ydw1z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=ie("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=ie("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=ie("PiggyBank",[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z",key:"1ivx2i"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h.01",key:"xkw8gn"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=ie("Pill",[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=ie("Plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=ie("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=ie("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=ie("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=ie("ReceiptText",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=ie("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=ie("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=ie("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=ie("Scissors",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=ie("ScrollText",[["path",{d:"M15 12h-5",key:"r7krc0"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=ie("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=ie("Shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=ie("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=ie("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=ie("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=ie("Sprout",[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=ie("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const js=ie("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=ie("Sunrise",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=ie("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=ie("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=ie("TramFront",[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M12 3v8",key:"1h2ygw"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m18 22-2-3",key:"1p0ohu"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M16 15h.01",key:"rnfrdf"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=ie("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=ie("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc=ie("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc=ie("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=ie("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hr=ie("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=ie("Tv",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=ie("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=ie("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=ie("WashingMachine",[["path",{d:"M3 6h3",key:"155dbl"}],["path",{d:"M17 6h.01",key:"e2y6kg"}],["rect",{width:"18",height:"20",x:"3",y:"2",rx:"2",key:"od3kk9"}],["circle",{cx:"12",cy:"13",r:"5",key:"nlbqau"}],["path",{d:"M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5",key:"17lach"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=ie("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=ie("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=ie("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=ie("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=ie("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),jc="anvil_token",Sc=()=>localStorage.getItem(jc),by=e=>localStorage.setItem(jc,e),dd=()=>localStorage.removeItem(jc),K=async(e,t,n)=>{const o={};n!==void 0&&(o["Content-Type"]="application/json");const i=Sc();i&&(o.Authorization=`Bearer ${i}`);const s=await fetch(`/api${t}`,{method:e,headers:o,body:n!==void 0?JSON.stringify(n):void 0});if(s.status===401)throw dd(),window.dispatchEvent(new Event("anvil-unauthorized")),new Error("Not authenticated");if(s.status===204)return null;if(!s.ok){const l=await s.text();let a=l;try{a=JSON.parse(l).detail||l}catch{}throw new Error(a||`HTTP ${s.status}`)}return s.json()},$={register:e=>K("POST","/auth/register",e),login:e=>K("POST","/auth/login",e),me:()=>K("GET","/auth/me"),forgotPassword:e=>K("POST","/auth/forgot",{email:e}),resetPassword:(e,t)=>K("POST","/auth/reset",{token:e,password:t}),getGcalStatus:()=>K("GET","/auth/google/status"),connectGoogle:()=>{window.location.href=`/api/auth/google?token=${encodeURIComponent(Sc()||"")}`},disconnectGoogle:()=>K("DELETE","/auth/google"),getPillars:()=>K("GET","/pillars"),getFocus:()=>K("GET","/focus"),createFocus:e=>K("POST","/focus",e),deleteFocus:e=>K("DELETE",`/focus/${e}`),addScreenTime:(e,t)=>K("POST","/screentime",{screen:e,seconds:t}),getScreenTime:()=>K("GET","/screentime"),getPayouts:()=>K("GET","/rewards/payouts"),createPayout:e=>K("POST","/rewards/payouts",e),deletePayout:e=>K("DELETE",`/rewards/payouts/${e}`),getRewardRates:()=>K("GET","/rewards/rates"),setRewardRate:e=>K("POST","/rewards/rates",e),getMedia:()=>K("GET","/media"),createMedia:e=>K("POST","/media",e),updateMedia:(e,t)=>K("PUT",`/media/${e}`,t),deleteMedia:e=>K("DELETE",`/media/${e}`),restoreMedia:e=>K("POST",`/media/${e}/restore`),getDecks:()=>K("GET","/spiritual/decks"),createDeck:e=>K("POST","/spiritual/decks",e),deleteDeck:e=>K("DELETE",`/spiritual/decks/${e}`),getGoldenGoals:()=>K("GET","/golden/goals"),getGoldenGoal:e=>K("GET",`/golden/goals/${e}`),createGolden:e=>K("POST","/golden/goals",e),updateGolden:(e,t)=>K("PUT",`/golden/goals/${e}`,t),achieveGolden:e=>K("POST",`/golden/goals/${e}/achieve`),unachieveGolden:e=>K("POST",`/golden/goals/${e}/unachieve`),upsertGoldenEntry:(e,t)=>K("PUT",`/golden/goals/${e}/entry`,t),deleteGolden:e=>K("DELETE",`/golden/goals/${e}`),restoreGolden:e=>K("POST",`/golden/goals/${e}/restore`),getKickstart:()=>K("GET","/kickstart/videos"),createKickstart:e=>K("POST","/kickstart/videos",e),updateKickstart:(e,t)=>K("PUT",`/kickstart/videos/${e}`,t),deleteKickstart:e=>K("DELETE",`/kickstart/videos/${e}`),restoreKickstart:e=>K("POST",`/kickstart/videos/${e}/restore`),getTxns:()=>K("GET","/finance/txns"),createTxn:e=>K("POST","/finance/txns",e),updateTxn:(e,t)=>K("PUT",`/finance/txns/${e}`,t),deleteTxn:e=>K("DELETE",`/finance/txns/${e}`),restoreTxn:e=>K("POST",`/finance/txns/${e}/restore`),getInvestments:()=>K("GET","/finance/investments"),createInvestment:e=>K("POST","/finance/investments",e),updateInvestment:(e,t)=>K("PUT",`/finance/investments/${e}`,t),deleteInvestment:e=>K("DELETE",`/finance/investments/${e}`),restoreInvestment:e=>K("POST",`/finance/investments/${e}/restore`),getFixedItems:()=>K("GET","/finance/fixed-items"),createFixedItem:e=>K("POST","/finance/fixed-items",e),updateFixedItem:(e,t)=>K("PUT",`/finance/fixed-items/${e}`,t),deleteFixedItem:e=>K("DELETE",`/finance/fixed-items/${e}`),getExpenses:()=>K("GET","/expenses"),createExpenseCategory:e=>K("POST","/expenses/categories",e),updateExpenseCategory:(e,t)=>K("PUT",`/expenses/categories/${e}`,t),deleteExpenseCategory:e=>K("DELETE",`/expenses/categories/${e}`),createExpenseLog:e=>K("POST","/expenses/logs",e),updateExpenseLog:(e,t)=>K("PUT",`/expenses/logs/${e}`,t),deleteExpenseLog:e=>K("DELETE",`/expenses/logs/${e}`),restoreExpenseLog:e=>K("POST",`/expenses/logs/${e}/restore`),getSetting:e=>K("GET",`/settings/${e}`),setSetting:(e,t)=>K("PUT",`/settings/${e}`,{value:t}),getTasks:()=>K("GET","/tasks"),createTask:e=>K("POST","/tasks",e),updateTask:(e,t)=>K("PUT",`/tasks/${e}`,t),deleteTask:e=>K("DELETE",`/tasks/${e}`),restoreTask:e=>K("POST",`/tasks/${e}/restore`),scheduleTask:e=>K("PUT",`/tasks/${e}/schedule`),getGoals:e=>K("GET",`/goals${e?`?pillar=${encodeURIComponent(e)}`:""}`),createGoal:e=>K("POST","/goals",e),updateGoal:(e,t)=>K("PUT",`/goals/${e}`,t),deleteGoal:e=>K("DELETE",`/goals/${e}`),restoreGoal:e=>K("POST",`/goals/${e}/restore`),getHabits:()=>K("GET","/habits"),createHabit:e=>K("POST","/habits",e),updateHabit:(e,t)=>K("PUT",`/habits/${e}`,t),deleteHabit:e=>K("DELETE",`/habits/${e}`),restoreHabit:e=>K("POST",`/habits/${e}/restore`),toggleHabitLog:(e,t)=>K("POST",`/habits/${e}/log/${t}`),setHabitLogNote:(e,t,n)=>K("PUT",`/habits/${e}/log/${t}/note`,{note:n}),setHabitLogCount:(e,t,n,o)=>K("PUT",`/habits/${e}/log/${t}/count`,{count:n,note:o}),clearHabitLog:(e,t)=>K("DELETE",`/habits/${e}/log/${t}`),getHabitsYearly:e=>K("GET",`/habits/yearly/${e}`),getJournalEntry:e=>K("GET",`/journal/${e}`),getJournalHistory:(e,t)=>K("GET",`/journal/history/${e}/${t}`),updateJournalMood:(e,t)=>K("PUT",`/journal/${e}`,{mood:t}),addJournalBullet:(e,t,n)=>K("POST",`/journal/${e}/bullets`,{section:t,text:n}),deleteJournalBullet:e=>K("DELETE",`/journal/bullets/${e}`),getSkills:()=>K("GET","/skills"),createSkill:e=>K("POST","/skills",e),updateSkill:(e,t)=>K("PUT",`/skills/${e}`,t),deleteSkill:e=>K("DELETE",`/skills/${e}`),restoreSkill:e=>K("POST",`/skills/${e}/restore`),addSkillNote:(e,t,n,o=null)=>K("POST",`/skills/${e}/notes`,{stage:t,text:n,grp:o}),setSkillGroups:(e,t)=>K("PUT",`/skills/${e}/groups`,{groups:t}),deleteSkillNote:e=>K("DELETE",`/skill-notes/${e}`),updateSkillNote:(e,t)=>K("PUT",`/skill-notes/${e}`,{text:t}),toggleSkillNote:e=>K("PUT",`/skill-notes/${e}/toggle`),completeSkillStage:(e,t)=>K("POST",`/skills/${e}/complete-stage`,{stage:t}),getScriptures:()=>K("GET","/scriptures"),createScripture:e=>K("POST","/scriptures",e),deleteScripture:e=>K("DELETE",`/scriptures/${e}`),restoreScripture:e=>K("POST",`/scriptures/${e}/restore`),addChapter:(e,t)=>K("POST",`/scriptures/${e}/chapters`,t),updateChapter:(e,t)=>K("PUT",`/chapters/${e}`,t),deleteChapter:e=>K("DELETE",`/chapters/${e}`),restoreChapter:e=>K("POST",`/chapters/${e}/restore`),addInsight:(e,t)=>K("POST",`/chapters/${e}/insights`,{text:t}),deleteInsight:e=>K("DELETE",`/insights/${e}`),getTopics:()=>K("GET","/revision/topics"),createTopic:e=>K("POST","/revision/topics",e),updateTopic:(e,t)=>K("PUT",`/revision/topics/${e}`,t),deleteTopic:e=>K("DELETE",`/revision/topics/${e}`),restoreTopic:e=>K("POST",`/revision/topics/${e}/restore`),getDueToday:()=>K("GET","/revision/due-today"),getCalendar:(e,t)=>K("GET",`/revision/calendar/${e}/${t}`),toggleReviewDone:e=>K("PUT",`/revision/reviews/${e}/done`),getAffirmations:()=>K("GET","/affirmations"),createAffirmation:e=>K("POST","/affirmations",e),updateAffirmation:(e,t)=>K("PUT",`/affirmations/${e}`,t),deleteAffirmation:e=>K("DELETE",`/affirmations/${e}`),restoreAffirmation:e=>K("POST",`/affirmations/${e}/restore`),getAchievements:()=>K("GET","/achievements"),createAchievement:e=>K("POST","/achievements",e),updateAchievement:(e,t)=>K("PUT",`/achievements/${e}`,t),deleteAchievement:e=>K("DELETE",`/achievements/${e}`),restoreAchievement:e=>K("POST",`/achievements/${e}/restore`),getDelight:()=>K("GET","/delight"),createCollection:e=>K("POST","/delight/collections",e),updateCollection:(e,t)=>K("PUT",`/delight/collections/${e}`,t),deleteCollection:e=>K("DELETE",`/delight/collections/${e}`),restoreCollection:e=>K("POST",`/delight/collections/${e}/restore`),createDelightItem:(e,t)=>K("POST",`/delight/collections/${e}/items`,t),updateDelightItem:(e,t)=>K("PUT",`/delight/items/${e}`,t),deleteDelightItem:e=>K("DELETE",`/delight/items/${e}`),restoreDelightItem:e=>K("POST",`/delight/items/${e}/restore`),arrangeDelight:(e,t)=>K("PUT",`/delight/collections/${e}/arrange`,{order:t})},my=7e3;function Ht(e,t,n){const[o,i]=g.useState([]),s=g.useRef({}),l=g.useCallback(async(c,h="Item")=>{await e(c),n();const x=`${c}-${Date.now()}`;i(f=>[...f,{id:x,itemId:c,label:h}]),s.current[x]=setTimeout(()=>{i(f=>f.filter(R=>R.id!==x)),delete s.current[x]},my)},[e,n]),a=g.useCallback(async c=>{const h=o.find(x=>x.id===c);h&&(clearTimeout(s.current[c]),delete s.current[c],i(x=>x.filter(f=>f.id!==c)),await t(h.itemId),n())},[o,t,n]),d=g.useCallback(c=>{clearTimeout(s.current[c]),delete s.current[c],i(h=>h.filter(x=>x.id!==c))},[]);return{deleteItem:l,toasts:o,handleUndo:a,handleDismiss:d}}function Gt({toasts:e,onUndo:t,onDismiss:n}){return r.jsx("div",{style:Qn.container,children:e.map(o=>r.jsx(hy,{toast:o,onUndo:t,onDismiss:n},o.id))})}function hy({toast:e,onUndo:t,onDismiss:n}){const[o,i]=g.useState(100);return g.useEffect(()=>{const s=Date.now(),l=7e3,a=setInterval(()=>{const d=Date.now()-s,c=Math.max(0,100-d/l*100);i(c),c===0&&clearInterval(a)},50);return()=>clearInterval(a)},[]),r.jsxs("div",{style:Qn.toast,children:[r.jsx("div",{style:{...Qn.bar,width:`${o}%`}}),r.jsxs("span",{style:Qn.msg,children:[e.label," deleted"]}),r.jsx("button",{style:Qn.undoBtn,onClick:()=>t(e.id),children:"Undo"}),r.jsx("button",{style:Qn.closeBtn,onClick:()=>n(e.id),children:"×"})]})}const Qn={container:{position:"fixed",bottom:24,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",gap:8,zIndex:999,pointerEvents:"none"},toast:{position:"relative",display:"flex",alignItems:"center",gap:12,background:"var(--accent-strong)",color:"#fff",borderRadius:10,padding:"12px 16px",fontSize:13.5,fontFamily:"'Inter', system-ui, sans-serif",boxShadow:"0 4px 20px rgba(0,0,0,0.25)",minWidth:260,overflow:"hidden",pointerEvents:"all"},bar:{position:"absolute",bottom:0,left:0,height:3,background:"#4C9A6B",transition:"width 0.05s linear",borderRadius:"0 0 0 10px"},msg:{flex:1,fontWeight:500},undoBtn:{border:"1px solid rgba(255,255,255,0.3)",background:"none",color:"#4C9A6B",fontWeight:700,fontSize:13,padding:"4px 10px",borderRadius:6,cursor:"pointer",fontFamily:"inherit"},closeBtn:{border:"none",background:"none",color:"rgba(255,255,255,0.5)",cursor:"pointer",fontSize:18,lineHeight:1,padding:"0 2px"}},zr={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},Ug=[{id:"Q1",symbol:"™",title:"Do Now",sub:"Important · Urgent",accent:"#C2536B"},{id:"Q2",symbol:"©",title:"Schedule",sub:"Important · Not Urgent",accent:"#3A7CA5"},{id:"Q3",symbol:"®",title:"Delegate",sub:"Not Important · Urgent",accent:"#C9A227"},{id:"Q4",symbol:"•",title:"Drop",sub:"Not Important · Not Urgent",accent:"#8A8780"}];function um(){return new Date().toLocaleDateString("en-CA",{timeZone:"Asia/Kolkata"})}function pm(){const e=new Date(new Date().toLocaleString("en-US",{timeZone:"Asia/Kolkata"})),n=e.getMinutes()<30?30:0,o=n===0?e.getHours()+1:e.getHours();return`${String(o%24).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function Yg(e,t){const[n,o]=e.split(":").map(Number),i=n*60+o+t;return`${String(Math.floor(i/60)%24).padStart(2,"0")}:${String(i%60).padStart(2,"0")}`}function fy(e){return e?new Date(e).toLocaleString("en-IN",{timeZone:"Asia/Kolkata",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit",hour12:!0}):""}const ts=()=>({title:"",pillar:"Financial",est:30,date:um(),startTime:pm()});function xy(){const[e,t]=g.useState([]),[n,o]=g.useState([]),[i,s]=g.useState("All"),[l,a]=g.useState(null),[d,c]=g.useState(null),[h,x]=g.useState(ts()),[f,R]=g.useState(null),[S,y]=g.useState(ts()),[A,m]=g.useState({connected:!1,configured:!1}),p=g.useCallback(()=>$.getTasks().then(t).catch(console.error),[]);g.useEffect(()=>{p(),$.getGcalStatus().then(m).catch(()=>{}),$.getGoals().then(v=>o(v.filter(D=>D.horizon==="Weekly"))).catch(()=>{})},[p]);const b=Object.keys(zr),E=n.filter(v=>i==="All"||v.pillar===i),C=n.find(v=>v.id===l)||null,z=e.filter(v=>l!=null?v.goal_id===l:i!=="All"?v.pillar===i:!0),M=v=>{s(v),a(null),c(null),x(D=>({...D,pillar:v==="All"?"Financial":v}))},_=v=>{a(v),c(null);const D=n.find(P=>P.id===v);D&&x(P=>({...P,pillar:D.pillar}))},{deleteItem:B,toasts:W,handleUndo:j,handleDismiss:J}=Ht($.deleteTask,$.restoreTask,p),I=v=>z.filter(D=>D.quadrant===v),re=v=>I(v).reduce((D,P)=>D+P.time_estimate_min,0),ue=v=>v>=60?`${Math.floor(v/60)}h${v%60?` ${v%60}m`:""}`:`${v}m`,de=v=>{var P;return`${((P=Ug.find(G=>G.id===v.quadrant))==null?void 0:P.symbol)??""} ${v.title}`},ye=async v=>{if(!h.title.trim())return;const D=h.date&&h.startTime?`${h.date}T${h.startTime}:00`:null;await $.createTask({pillar:C?C.pillar:h.pillar,title:h.title,quadrant:v,time_estimate_min:Number(h.est)||30,start_datetime:D,goal_id:l??null}),x(ts()),c(null),p()},q=(v,D)=>B(v,D),N=v=>{const D=v.start_datetime?v.start_datetime.split("T"):[];R(v.id),c(null),y({title:v.title,pillar:v.pillar,est:v.time_estimate_min,date:D[0]||um(),startTime:(D[1]||"").slice(0,5)||pm()})},se=async v=>{if(!S.title.trim())return;const D=S.date&&S.startTime?`${S.date}T${S.startTime}:00`:null;await $.updateTask(v.id,{title:S.title.trim(),pillar:S.pillar,time_estimate_min:Number(S.est)||30,start_datetime:D}),R(null),p()},Y=g.useRef(null),le=g.useRef(null),[T,oe]=g.useState(null),Ce=(v,D)=>{var G;const P=document.elementFromPoint(v,D);return P&&P.closest&&((G=P.closest("[data-quad]"))==null?void 0:G.getAttribute("data-quad"))||null};g.useEffect(()=>{const v=P=>{const G=Y.current;if(!G)return;const ne=Math.hypot(P.clientX-G.startX,P.clientY-G.startY);if(!G.active){if(G.pointerType!=="mouse"){ne>12&&(clearTimeout(le.current),Y.current=null);return}if(ne<6)return;G.active=!0,document.body.style.userSelect="none"}P.cancelable&&P.preventDefault(),G.overQ=Ce(P.clientX,P.clientY),oe({id:G.task.id,title:G.task.title,x:P.clientX,y:P.clientY,overQ:G.overQ})},D=()=>{clearTimeout(le.current);const P=Y.current;Y.current=null,document.body.style.userSelect="",document.body.style.touchAction="",oe(null),P&&P.active&&P.overQ&&P.overQ!==P.task.quadrant&&$.updateTask(P.task.id,{quadrant:P.overQ}).then(p).catch(()=>{})};return window.addEventListener("pointermove",v,{passive:!1}),window.addEventListener("pointerup",D),window.addEventListener("pointercancel",D),()=>{window.removeEventListener("pointermove",v),window.removeEventListener("pointerup",D),window.removeEventListener("pointercancel",D)}},[p]);const V=(v,D)=>{v.pointerType==="mouse"&&v.button!==0||(Y.current={task:D,startX:v.clientX,startY:v.clientY,active:!1,pointerType:v.pointerType,overQ:null},v.pointerType!=="mouse"&&(le.current=setTimeout(()=>{const P=Y.current;P&&(P.active=!0,document.body.style.touchAction="none",oe({id:P.task.id,title:P.task.title,x:P.startX,y:P.startY,overQ:P.task.quadrant}))},280)))};return r.jsxs("div",{style:pe.page,children:[r.jsxs("div",{style:pe.head,children:[r.jsxs("div",{children:[r.jsx("div",{style:pe.eyebrow,children:"Anvil · Weekly Routing"}),r.jsx("h1",{style:pe.h1,children:"Weekly Routing"})]}),r.jsxs("div",{style:pe.headRight,children:[r.jsx("div",{style:pe.legend,children:Object.entries(zr).map(([v,D])=>r.jsxs("span",{style:pe.legendItem,children:[r.jsx("span",{style:{...pe.dot,background:D.dot}}),v]},v))}),A.configured&&(A.connected?r.jsxs("button",{style:pe.gcalBadgeOn,title:"Disconnect Google Calendar",onClick:()=>$.disconnectGoogle().then(()=>m({...A,connected:!1})),children:[r.jsx(es,{size:13})," Google Calendar connected"]}):r.jsxs("button",{style:pe.gcalBadgeOff,onClick:()=>$.connectGoogle(),children:[r.jsx(es,{size:13})," Connect Google Calendar"]}))]})]}),r.jsx("div",{style:pe.filterBar,children:["All",...b].map(v=>{const D=i===v,P=zr[v];return r.jsxs("button",{onClick:()=>M(v),style:{...pe.pillChip,...D?P?{background:P.dot,color:"#fff",borderColor:P.dot}:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"}:{}},children:[P&&r.jsx("span",{style:{...pe.dot,background:D?"#fff":P.dot}}),v==="All"?"All":v]},v)})}),r.jsxs("div",{style:pe.goalBar,children:[r.jsx("button",{onClick:()=>a(null),style:{...pe.goalChip,...l==null?pe.goalChipOn:{}},children:"All goals"}),E.map(v=>{var G;const D=((G=zr[v.pillar])==null?void 0:G.dot)||"#9A968C",P=l===v.id;return r.jsxs("button",{onClick:()=>_(v.id),style:{...pe.goalChip,...P?{background:D,color:"#fff",borderColor:D}:{}},title:v.title,children:[r.jsx("span",{style:{...pe.dot,background:P?"#fff":D}}),r.jsx("span",{style:pe.goalChipText,children:v.title})]},v.id)}),E.length===0&&r.jsxs("span",{style:pe.goalEmpty,children:["No weekly goals",i!=="All"?` for ${i}`:""," — create them in Goals."]})]}),r.jsx("div",{style:pe.grid,children:Ug.map(v=>{var D,P;return r.jsxs("section",{"data-quad":v.id,style:{...pe.quad,borderTop:`3px solid ${v.accent}`,...T&&T.overQ===v.id&&T.overQ!==((D=e.find(G=>G.id===T.id))==null?void 0:D.quadrant)?{outline:`2px dashed ${v.accent}`,outlineOffset:2,background:"var(--hover)"}:{}},children:[r.jsxs("header",{style:pe.quadHead,children:[r.jsxs("div",{style:pe.quadTitleRow,children:[r.jsx("span",{style:{...pe.symbol,color:v.accent},children:v.symbol}),r.jsxs("div",{children:[r.jsx("div",{style:pe.quadTitle,children:v.title}),r.jsx("div",{style:pe.quadSub,children:v.sub})]})]}),r.jsx("span",{style:pe.quadTotal,children:ue(re(v.id))})]}),r.jsxs("div",{style:pe.list,children:[I(v.id).map(G=>{const ne=zr[G.pillar]||zr.Financial,ge=!!G.gcal_event_id;return f===G.id?r.jsxs("div",{style:pe.addBox,children:[r.jsx("input",{autoFocus:!0,placeholder:"Task title",value:S.title,onChange:O=>y({...S,title:O.target.value}),onKeyDown:O=>O.key==="Enter"&&se(G),style:pe.input}),r.jsxs("div",{style:pe.dateTimeRow,children:[r.jsxs("div",{style:pe.dateTimeGroup,children:[r.jsx("label",{style:pe.dtLabel,children:"Date"}),r.jsx("input",{type:"date",value:S.date,onChange:O=>y({...S,date:O.target.value}),style:pe.dtInput})]}),r.jsxs("div",{style:pe.dateTimeGroup,children:[r.jsx("label",{style:pe.dtLabel,children:"Start"}),r.jsx("input",{type:"time",value:S.startTime,onChange:O=>y({...S,startTime:O.target.value}),style:pe.dtInput})]}),r.jsxs("div",{style:pe.dateTimeGroup,children:[r.jsx("label",{style:pe.dtLabel,children:"End"}),r.jsx("div",{style:pe.dtEndValue,children:Yg(S.startTime,Number(S.est)||30)})]})]}),r.jsxs("div",{style:pe.addRow,children:[r.jsx("select",{value:S.pillar,onChange:O=>y({...S,pillar:O.target.value}),style:pe.select,children:Object.keys(zr).map(O=>r.jsx("option",{children:O},O))}),r.jsx("input",{type:"number",value:S.est,onChange:O=>y({...S,est:O.target.value}),style:{...pe.input,width:60}}),r.jsx("span",{style:pe.minLabel,children:"min"}),r.jsx("button",{onClick:()=>se(G),style:pe.saveBtn,children:r.jsx(We,{size:14})}),r.jsx("button",{onClick:()=>R(null),style:pe.cancelBtn,children:r.jsx(ze,{size:14})})]})]},G.id):r.jsxs("div",{onPointerDown:O=>V(O,G),style:{...pe.card,background:ne.soft,cursor:"grab",touchAction:"pan-y",...(T==null?void 0:T.id)===G.id?{opacity:.4}:{}},children:[r.jsx("span",{style:{...pe.cardBar,background:ne.dot}}),r.jsxs("div",{style:pe.cardBody,children:[r.jsx("div",{style:pe.cardTitle,children:G.title}),G.start_datetime&&r.jsxs("div",{style:pe.eventTime,children:[r.jsx(es,{size:10}),fy(G.start_datetime),ge&&r.jsx("span",{style:pe.syncedDot,title:"Synced to Google Calendar"})]}),r.jsxs("div",{style:pe.cardMeta,children:[r.jsxs("span",{style:pe.metaPill,children:[r.jsx("span",{style:{...pe.dot,background:ne.dot,width:7,height:7}}),G.pillar]}),r.jsxs("span",{style:pe.metaPill,children:[r.jsx(Cx,{size:11})," ",ue(G.time_estimate_min)]})]})]}),r.jsxs("div",{style:pe.cardActions,children:[ge&&r.jsx("span",{title:`On calendar as "${de(G)}"`,style:pe.calDoneIcon,children:r.jsx(We,{size:14})}),r.jsx("button",{onClick:()=>N(G),onPointerDown:O=>O.stopPropagation(),style:pe.delBtn,title:"Edit",children:r.jsx(bt,{size:12})}),r.jsx("button",{onClick:()=>q(G.id,G.title),onPointerDown:O=>O.stopPropagation(),style:pe.delBtn,children:r.jsx(ze,{size:13})})]})]},G.id)}),d===v.id?r.jsxs("div",{style:pe.addBox,children:[r.jsx("input",{autoFocus:!0,placeholder:"Task title",value:h.title,onChange:G=>x({...h,title:G.target.value}),onKeyDown:G=>G.key==="Enter"&&ye(v.id),style:pe.input}),r.jsxs("div",{style:pe.dateTimeRow,children:[r.jsxs("div",{style:pe.dateTimeGroup,children:[r.jsx("label",{style:pe.dtLabel,children:"Date"}),r.jsx("input",{type:"date",value:h.date,onChange:G=>x({...h,date:G.target.value}),style:pe.dtInput})]}),r.jsxs("div",{style:pe.dateTimeGroup,children:[r.jsx("label",{style:pe.dtLabel,children:"Start"}),r.jsx("input",{type:"time",value:h.startTime,onChange:G=>x({...h,startTime:G.target.value}),style:pe.dtInput})]}),r.jsxs("div",{style:pe.dateTimeGroup,children:[r.jsx("label",{style:pe.dtLabel,children:"End"}),r.jsx("div",{style:pe.dtEndValue,children:Yg(h.startTime,Number(h.est)||30)})]})]}),r.jsxs("div",{style:pe.addRow,children:[C?r.jsxs("span",{style:pe.goalPillarTag,children:[r.jsx("span",{style:{...pe.dot,background:(P=zr[C.pillar])==null?void 0:P.dot}})," ",C.pillar]}):r.jsx("select",{value:h.pillar,onChange:G=>x({...h,pillar:G.target.value}),style:pe.select,children:Object.keys(zr).map(G=>r.jsx("option",{children:G},G))}),r.jsx("input",{type:"number",value:h.est,onChange:G=>x({...h,est:G.target.value}),style:{...pe.input,width:60}}),r.jsx("span",{style:pe.minLabel,children:"min"}),A.connected&&r.jsx("span",{style:pe.gcalHint,title:"Will sync to Google Calendar",children:r.jsx(es,{size:12})}),r.jsx("button",{onClick:()=>ye(v.id),style:pe.saveBtn,children:r.jsx(We,{size:14})}),r.jsx("button",{onClick:()=>{c(null),x(ts())},style:pe.cancelBtn,children:r.jsx(ze,{size:14})})]})]}):r.jsxs("button",{onClick:()=>c(v.id),style:pe.addTrigger,children:[r.jsx(Ke,{size:13})," Add task"]})]})]},v.id)})}),T&&r.jsx("div",{style:{...pe.dragClone,left:T.x+12,top:T.y+12},children:T.title}),r.jsx(Gt,{toasts:W,onUndo:j,onDismiss:J})]})}const pe={page:{fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:16,marginBottom:22},headRight:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:10},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces', Georgia, serif"},legend:{display:"flex",gap:14,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"var(--text-2)",fontWeight:500},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},gcalBadgeOn:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:500,color:"#4C9A6B",background:"rgba(76,154,107,0.10)",border:"1px solid rgba(76,154,107,0.3)",borderRadius:20,padding:"5px 12px",cursor:"pointer"},gcalBadgeOff:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:500,color:"var(--text-2)",background:"var(--surface)",border:"1px solid #DCDAD3",borderRadius:20,padding:"5px 12px",cursor:"pointer"},filterBar:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:10},pillChip:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},goalBar:{display:"flex",gap:7,flexWrap:"wrap",alignItems:"center",marginBottom:18,paddingBottom:14,borderBottom:"1px solid var(--border)"},goalChip:{display:"inline-flex",alignItems:"center",gap:6,maxWidth:220,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},goalChipOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},goalChipText:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},goalEmpty:{fontSize:12,color:"var(--text-3)",fontStyle:"italic"},goalPillarTag:{display:"inline-flex",alignItems:"center",gap:6,fontSize:12.5,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"7px 10px",borderRadius:6,flex:1},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:16},quad:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.06)"},quadHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14},quadTitleRow:{display:"flex",gap:10,alignItems:"center"},symbol:{fontSize:20,lineHeight:1},quadTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em"},quadSub:{fontSize:11,color:"var(--text-3)",marginTop:1,letterSpacing:"0.02em"},quadTotal:{fontSize:12,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"3px 9px",borderRadius:20},list:{display:"flex",flexDirection:"column",gap:8},card:{display:"flex",alignItems:"stretch",gap:10,borderRadius:9,padding:"10px 10px 10px 0",overflow:"hidden"},cardBar:{width:3,borderRadius:3,flexShrink:0},cardBody:{flex:1,minWidth:0},cardTitle:{fontSize:13.5,fontWeight:500,lineHeight:1.35,marginBottom:4},eventTime:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"#3A7CA5",fontWeight:500,marginBottom:5},syncedDot:{width:6,height:6,borderRadius:"50%",background:"#4C9A6B",display:"inline-block",marginLeft:2},cardMeta:{display:"flex",gap:8,flexWrap:"wrap"},metaPill:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"var(--text-2)",fontWeight:500},cardActions:{display:"flex",flexDirection:"column",gap:4,alignSelf:"center",flexShrink:0},calDoneIcon:{width:30,height:30,borderRadius:8,background:"#4C9A6B",color:"#fff",display:"grid",placeItems:"center"},delBtn:{width:30,height:30,borderRadius:8,border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center"},addTrigger:{display:"flex",alignItems:"center",gap:5,fontSize:12.5,color:"var(--text-3)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"8px 10px",cursor:"pointer",fontWeight:500,marginTop:2},addBox:{border:"1px solid var(--border)",borderRadius:9,padding:10,display:"flex",flexDirection:"column",gap:8},dateTimeRow:{display:"flex",gap:8,alignItems:"flex-end"},dateTimeGroup:{display:"flex",flexDirection:"column",gap:3,flex:1},dtLabel:{fontSize:10,fontWeight:600,color:"var(--text-3)",letterSpacing:"0.08em",textTransform:"uppercase"},dtInput:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},dtEndValue:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,color:"var(--text-2)",background:"var(--bg)"},addRow:{display:"flex",alignItems:"center",gap:6},input:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",flex:1,minWidth:0},select:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 8px",fontSize:12.5,fontFamily:"inherit",flex:1},minLabel:{fontSize:11,color:"var(--text-3)"},gcalHint:{color:"#3A7CA5",display:"grid",placeItems:"center"},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"},dragClone:{position:"fixed",zIndex:1e3,pointerEvents:"none",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:8,padding:"8px 12px",fontSize:13,fontWeight:600,color:"var(--text)",boxShadow:"0 8px 24px rgba(0,0,0,0.25)",maxWidth:220,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},rr={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},Ho=Object.keys(rr),Ss=["Yearly","Quarterly","Monthly","Weekly"],jr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Vg=[{label:"Q1 · Jan–Mar",startMonth:0},{label:"Q2 · Apr–Jun",startMonth:3},{label:"Q3 · Jul–Sep",startMonth:6},{label:"Q4 · Oct–Dec",startMonth:9}],Cs=new Date().getFullYear(),Hn=Array.from({length:8},(e,t)=>Cs-1+t);function yy(e=720){const[t,n]=g.useState(()=>window.innerWidth<e);return g.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),t}const qo=864e5,kt=30,di=190,Gn=e=>new Date(e+"T00:00:00"),Qg=e=>e.toLocaleDateString("en-US",{month:"short",day:"numeric"}),vy=[{key:"yearly",label:"Yearly",horizons:["Yearly"]},{key:"quarterly",label:"Quarterly",horizons:["Quarterly"]},{key:"mw",label:"Monthly & Weekly",horizons:["Monthly","Weekly"]}],Kg={Yearly:"Yr",Quarterly:"Q",Monthly:"Mo",Weekly:"Wk"},ky={Yearly:"Y",Quarterly:"Q",Monthly:"M",Weekly:"W"},Xg={Yearly:0,Quarterly:1,Monthly:2,Weekly:3},Zl=e=>Ss[Math.min(Ss.indexOf(e)+1,Ss.length-1)],rs=e=>{if(!e||!e.start_date)return Array.from({length:12},(l,a)=>a);const t=new Date(e.start_date+"T00:00:00"),n=new Date(e.end_date+"T00:00:00"),o=t.getFullYear(),i=t.getMonth(),s=n.getFullYear()>o?11:n.getMonth();return Array.from({length:s-i+1},(l,a)=>i+a)},Go=e=>new Date(e+"T00:00:00").getFullYear(),bm=(e,t,n)=>{const o=(n-1)*7+1,i=Math.min(o+6,new Date(e,t+1,0).getDate()),s=String(t+1).padStart(2,"0");return{start_date:`${e}-${s}-${String(o).padStart(2,"0")}`,end_date:`${e}-${s}-${String(i).padStart(2,"0")}`}},qg=(e,t,n,o=1)=>{const i=t;switch(e){case"Yearly":return{start_date:`${i}-01-01`,end_date:`${i}-12-31`};case"Quarterly":{const s=Math.floor(n/3)*3,l=s+1,a=s+3,d=new Date(i,a,0).getDate();return{start_date:`${i}-${String(l).padStart(2,"0")}-01`,end_date:`${i}-${String(a).padStart(2,"0")}-${d}`}}case"Monthly":{const s=new Date(i,n+1,0).getDate();return{start_date:`${i}-${String(n+1).padStart(2,"0")}-01`,end_date:`${i}-${String(n+1).padStart(2,"0")}-${s}`}}case"Weekly":return bm(i,n,o);default:return{start_date:`${i}-01-01`,end_date:`${i}-12-31`}}},ci=(e,t)=>{const n=new Date(e+"T00:00:00");return n.setDate(n.getDate()+t),`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`},tl=(e,t)=>Math.round((new Date(t+"T00:00:00")-new Date(e+"T00:00:00"))/qo)+1,wy=(e,t,n)=>{if(!n||!n.start_date||!n.end_date)return{start_date:e,end_date:t,clamped:!1};const o=tl(e,t);let i=e,s=t,l=!1;return i<n.start_date&&(i=n.start_date,s=ci(i,o-1),l=!0),s>n.end_date&&(s=n.end_date,i=ci(s,-(o-1)),l=!0,i<n.start_date&&(i=n.start_date)),{start_date:i,end_date:s,clamped:l}},jy=(e,t)=>new Date(e,t+1,0).getDate(),cd=e=>{const t=new Date(e.start_date+"T00:00:00");if(e.horizon==="Monthly")return jy(t.getFullYear(),t.getMonth());if(e.horizon==="Weekly"){const n=Math.min(Math.max(Math.ceil(t.getDate()/7),1),4),o=bm(t.getFullYear(),t.getMonth(),n);return tl(o.start_date,o.end_date)}return tl(e.start_date,e.end_date)},Zg=e=>Math.round(cd(e)*1.5),Sy=e=>e.horizon==="Monthly"||e.horizon==="Weekly",Cy=e=>{if(!e.start_date)return"";const t=new Date(e.start_date+"T00:00:00"),n=t.getMonth();switch(e.horizon){case"Yearly":{const o=e.end_date?new Date(e.end_date+"T00:00:00").getFullYear():t.getFullYear();return o>t.getFullYear()?`${t.getFullYear()}–${o}`:`${t.getFullYear()}`}case"Quarterly":return`Q${Math.floor(n/3)+1} ${t.getFullYear()}`;case"Monthly":return`${jr[n]} ${t.getFullYear()}`;case"Weekly":return`${jr[n]} W${Math.ceil(t.getDate()/7)}`;default:return""}};function Iy(){const[e,t]=g.useState([]),[n,o]=g.useState("All"),[i,s]=g.useState({}),[l,a]=g.useState({}),[d,c]=g.useState(null),[h,x]=g.useState(""),[f,R]=g.useState(0),[S,y]=g.useState(1),[A,m]=g.useState(Cs),[p,b]=g.useState(Cs),[E,C]=g.useState("Yearly"),[z,M]=g.useState(Ho[0]),[_,B]=g.useState(null),W=yy(),[j,J]=g.useState(!W),[I,re]=g.useState("day"),[ue,de]=g.useState(null),ye=g.useRef(null);g.useEffect(()=>{ye.current=ue},[ue]);const q=g.useRef(e);g.useEffect(()=>{q.current=e},[e]);const[N,se]=g.useState(null),Y=g.useRef(null);g.useEffect(()=>{Y.current=N},[N]);const le=g.useRef(null),T=g.useRef(0),[oe,Ce]=g.useState(null),V=g.useRef(null),v=g.useCallback(L=>{Ce(L),clearTimeout(V.current),V.current=setTimeout(()=>Ce(null),2800)},[]),[D,P]=g.useState(null),G=g.useRef(null),[ne,ge]=g.useState(null),[O,F]=g.useState(null),k=(L,Q)=>{if(ne===Q){ge(null);return}const we=L.currentTarget.getBoundingClientRect(),Ee=we.bottom+220<window.innerHeight;F({right:Math.max(8,window.innerWidth-we.right),...Ee?{top:we.bottom+4}:{bottom:window.innerHeight-we.top+4}}),ge(Q)},ee=L=>{clearTimeout(G.current),G.current=setTimeout(()=>P(L),350)},me=()=>{clearTimeout(G.current),P(null)},Te=g.useCallback(()=>{$.getGoals().then(t).catch(console.error)},[]);g.useEffect(()=>{Te()},[Te]);const{deleteItem:ct,toasts:Le,handleUndo:ot,handleDismiss:et}=Ht($.deleteGoal,$.restoreGoal,Te),Qe=g.useCallback(async()=>{const L=ye.current;if(de(null),!L)return;const Q=Math.round(L.dx/(L.pxPerDay||kt));if(!Q)return;let we=ci(L.g.start_date,Q),Ee=ci(L.g.end_date,Q);if(L.g.parent_goal_id){const Oe=q.current.find(Ne=>Ne.id===L.g.parent_goal_id),Pe=wy(we,Ee,Oe);Pe.clamped&&v(`Can't move past "${(Oe==null?void 0:Oe.title)||"parent goal"}" — kept within its dates.`),we=Pe.start_date,Ee=Pe.end_date}(we!==L.g.start_date||Ee!==L.g.end_date)&&(await $.updateGoal(L.g.id,{pillar:L.g.pillar,start_date:we,end_date:Ee}),Te())},[Te,v]),tt=!!ue;g.useEffect(()=>{if(!tt)return;const L=Pe=>{T.current=Pe.clientX,de(Ne=>Ne&&{...Ne,dx:Pe.clientX-Ne.startX})},Q=()=>Qe();window.addEventListener("pointermove",L),window.addEventListener("pointerup",Q);const we=44,Ee=16,Oe=setInterval(()=>{const Pe=le.current;if(!Pe)return;const Ne=Pe.getBoundingClientRect(),qe=T.current;let he=0;if(qe<Ne.left+we?he=-1:qe>Ne.right-we&&(he=1),!he)return;const vt=Pe.scrollLeft;Pe.scrollLeft=Math.max(0,Math.min(vt+he*Ee,Pe.scrollWidth-Pe.clientWidth));const Yt=Pe.scrollLeft-vt;Yt&&de(Ye=>Ye&&{...Ye,startX:Ye.startX-Yt,dx:qe-(Ye.startX-Yt)})},16);return()=>{window.removeEventListener("pointermove",L),window.removeEventListener("pointerup",Q),clearInterval(Oe)}},[tt,Qe]);const gt=g.useCallback(async()=>{const L=Y.current;if(se(null),!L)return;const Q=L.g,we=cd(Q),Ee=Zg(Q),Oe=Math.max(we,Math.min(Ee,tl(Q.start_date,Q.end_date)+Math.round(L.dx/kt)));let Pe=ci(Q.start_date,Oe-1);if(Q.parent_goal_id){const Ne=q.current.find(qe=>qe.id===Q.parent_goal_id);Ne!=null&&Ne.end_date&&Pe>Ne.end_date&&(Pe=Ne.end_date,v(`Can't extend past "${(Ne==null?void 0:Ne.title)||"parent goal"}" — kept within its dates.`))}Pe!==Q.end_date&&Pe>=Q.start_date&&(await $.updateGoal(Q.id,{end_date:Pe}),Te())},[Te,v]),Yr=!!N;g.useEffect(()=>{if(!Yr)return;const L=we=>se(Ee=>Ee&&{...Ee,dx:we.clientX-Ee.startX}),Q=()=>gt();return window.addEventListener("pointermove",L),window.addEventListener("pointerup",Q),()=>{window.removeEventListener("pointermove",L),window.removeEventListener("pointerup",Q)}},[Yr,gt]);const Ut=n==="All",Rt=rr[n]||{dot:"var(--text-3)"},er=Ut?e:e.filter(L=>L.pillar===n),yr=er.filter(L=>!L.parent_goal_id),u=L=>er.filter(Q=>Q.parent_goal_id===L),Z=L=>a(Q=>({...Q,[L]:!Q[L]})),Fe=L=>L.horizon==="Monthly"||L.horizon==="Weekly",Me=L=>i[L.id]!==void 0?i[L.id]:Fe(L),je=L=>s(Q=>({...Q,[L.id]:!Me(L)})),_e=(L,Q=null)=>{c(L),x(""),y(1);const we=Q?Go(Q.start_date):Cs;m(we),b(we),L==="ROOT"&&M(Ut?Ho[0]:n);const Ee=L==="ROOT"?"Yearly":Zl(Q==null?void 0:Q.horizon);C(Ee);const Oe=L==="ROOT"?Array.from({length:12},(Pe,Ne)=>Ne):rs(Q);R(Ee==="Quarterly"?Math.floor(Oe[0]/3)*3:Oe[0]??0)},St=async(L,Q)=>{if(!h.trim())return;const we=(Q==null?void 0:Q.horizon)??null,Ee=L==="ROOT"?E:Zl(we),Oe=L==="ROOT"?z:(Q==null?void 0:Q.pillar)||n;let Pe,Ne;if(Ee==="Yearly"){const qe=Number(A),he=Math.max(qe,Number(p)||qe);Pe=`${qe}-01-01`,Ne=`${he}-12-31`}else{const qe=Q?Go(Q.start_date):Number(A);({start_date:Pe,end_date:Ne}=qg(Ee,qe,f,S))}await $.createGoal({pillar:Oe,title:h.trim(),horizon:Ee,parent_goal_id:L==="ROOT"?null:L,start_date:Pe,end_date:Ne}),L!=="ROOT"&&a(qe=>({...qe,[L]:!0})),c(null),x(""),Te()},At=L=>{const Q=L.start_date?new Date(L.start_date+"T00:00:00"):new Date,we=Q.getMonth(),Ee=Math.min(Math.max(Math.ceil(Q.getDate()/7),1),4);B({id:L.id,title:L.title,pillar:L.pillar,horizon:L.horizon,parentGoal:e.find(Oe=>Oe.id===L.parent_goal_id)||null,year:Go(L.start_date),endYear:Go(L.end_date),month:L.horizon==="Quarterly"?Math.floor(we/3)*3:we,week:Ee})},Pn=async()=>{if(!_||!_.title.trim())return;let L,Q;if(_.horizon==="Yearly"){const we=Number(_.year),Ee=Math.max(we,Number(_.endYear)||we);L=`${we}-01-01`,Q=`${Ee}-12-31`}else{let we=_.month;_.horizon==="Weekly"&&_.parentGoal&&(we=rs(_.parentGoal)[0]);const Ee=_.parentGoal?Go(_.parentGoal.start_date):Number(_.year);({start_date:L,end_date:Q}=qg(_.horizon,Ee,we,_.week))}await $.updateGoal(_.id,{title:_.title.trim(),pillar:_.pillar,start_date:L,end_date:Q}),B(null),Te()},zc=({parentId:L,parentGoal:Q,depth:we})=>{const Ee=L==="ROOT",Oe=Ee?E:Zl((Q==null?void 0:Q.horizon)??null),Pe=Ee?Array.from({length:12},(he,vt)=>vt):rs(Q),Ne=Vg.filter(he=>Pe.includes(he.startMonth)),qe=he=>{C(he),R(0),y(1),b(A)};return r.jsxs("div",{style:{...te.addBox,marginLeft:we*24},children:[r.jsx("input",{autoFocus:!0,placeholder:`New ${Oe.toLowerCase()} goal…`,value:h,onChange:he=>x(he.target.value),onKeyDown:he=>{he.key==="Enter"&&St(L,Q),he.key==="Escape"&&c(null)},style:te.input}),Ee&&Ut&&r.jsx("select",{value:z,onChange:he=>M(he.target.value),style:te.monthSelect,title:"Pillar",children:Ho.map(he=>r.jsx("option",{value:he,children:he},he))}),Ee&&r.jsx("select",{value:E,onChange:he=>qe(he.target.value),style:te.monthSelect,title:"Goal level",children:Ss.map(he=>r.jsx("option",{value:he,children:he},he))}),Oe==="Yearly"&&r.jsxs(r.Fragment,{children:[r.jsx("select",{value:A,onChange:he=>{const vt=Number(he.target.value);m(vt),p<vt&&b(vt)},style:te.monthSelect,title:"Start year",children:Hn.map(he=>r.jsx("option",{value:he,children:he},he))}),r.jsx("span",{style:te.toTag,children:"to"}),r.jsx("select",{value:p,onChange:he=>b(Number(he.target.value)),style:te.monthSelect,title:"End year (spans multiple years)",children:Hn.filter(he=>he>=A).map(he=>r.jsx("option",{value:he,children:he},he))})]}),Oe!=="Yearly"&&Ee&&r.jsx("select",{value:A,onChange:he=>m(Number(he.target.value)),style:te.monthSelect,title:"Year",children:Hn.map(he=>r.jsx("option",{value:he,children:he},he))}),Oe==="Quarterly"&&r.jsx("select",{value:f,onChange:he=>R(Number(he.target.value)),style:te.monthSelect,children:Ne.map(he=>r.jsx("option",{value:he.startMonth,children:he.label},he.startMonth))}),Oe==="Monthly"&&r.jsx("select",{value:f,onChange:he=>R(Number(he.target.value)),style:te.monthSelect,children:Pe.map(he=>r.jsx("option",{value:he,children:jr[he]},he))}),Oe==="Weekly"&&r.jsxs(r.Fragment,{children:[Ee?r.jsx("select",{value:f,onChange:he=>R(Number(he.target.value)),style:te.monthSelect,children:Pe.map(he=>r.jsx("option",{value:he,children:jr[he]},he))}):r.jsx("span",{style:te.inheritTag,children:jr[Pe[0]]}),r.jsx("select",{value:S,onChange:he=>y(Number(he.target.value)),style:te.monthSelect,children:[1,2,3,4].map(he=>r.jsxs("option",{value:he,children:["Week ",he]},he))})]}),r.jsx("button",{onClick:()=>St(L,Q),style:te.saveBtn,children:r.jsx(We,{size:14})}),r.jsx("button",{onClick:()=>c(null),style:te.cancelBtn,children:r.jsx(ze,{size:14})})]})},Tc=({goal:L,depth:Q})=>{var Ne,qe,he,vt,Yt;const we=u(L.id),Ee=l[L.id],Oe=L.horizon!=="Weekly";if((_==null?void 0:_.id)===L.id){const Ye=rs(_.parentGoal),xn=Vg.filter(Be=>Ye.includes(Be.startMonth)),Ao=!_.parentGoal;return r.jsxs("div",{style:{...te.editBox,marginLeft:Q*24},children:[r.jsx("input",{autoFocus:!0,value:_.title,onChange:Be=>B({..._,title:Be.target.value}),onKeyDown:Be=>Be.key==="Enter"&&Pn(),style:{...te.input,flex:1}}),r.jsx("select",{value:_.pillar,onChange:Be=>B({..._,pillar:Be.target.value}),style:te.monthSelect,children:Ho.map(Be=>r.jsx("option",{children:Be},Be))}),_.horizon==="Yearly"&&r.jsxs(r.Fragment,{children:[r.jsx("select",{value:_.year,onChange:Be=>{const Fo=Number(Be.target.value);B({..._,year:Fo,endYear:Math.max(Fo,_.endYear)})},style:te.monthSelect,title:"Start year",children:Hn.map(Be=>r.jsx("option",{value:Be,children:Be},Be))}),r.jsx("span",{style:te.toTag,children:"to"}),r.jsx("select",{value:_.endYear,onChange:Be=>B({..._,endYear:Number(Be.target.value)}),style:te.monthSelect,title:"End year (spans multiple years)",children:Hn.filter(Be=>Be>=_.year).map(Be=>r.jsx("option",{value:Be,children:Be},Be))})]}),_.horizon!=="Yearly"&&Ao&&r.jsx("select",{value:_.year,onChange:Be=>B({..._,year:Number(Be.target.value)}),style:te.monthSelect,title:"Year",children:Hn.map(Be=>r.jsx("option",{value:Be,children:Be},Be))}),_.horizon==="Quarterly"&&r.jsx("select",{value:_.month,onChange:Be=>B({..._,month:Number(Be.target.value)}),style:te.monthSelect,children:xn.map(Be=>r.jsx("option",{value:Be.startMonth,children:Be.label},Be.startMonth))}),_.horizon==="Monthly"&&r.jsx("select",{value:_.month,onChange:Be=>B({..._,month:Number(Be.target.value)}),style:te.monthSelect,children:Ye.map(Be=>r.jsx("option",{value:Be,children:jr[Be]},Be))}),_.horizon==="Weekly"&&r.jsxs(r.Fragment,{children:[Ao?r.jsx("select",{value:_.month,onChange:Be=>B({..._,month:Number(Be.target.value)}),style:te.monthSelect,children:Ye.map(Be=>r.jsx("option",{value:Be,children:jr[Be]},Be))}):r.jsx("span",{style:te.inheritTag,children:jr[Ye[0]]}),r.jsx("select",{value:_.week,onChange:Be=>B({..._,week:Number(Be.target.value)}),style:te.monthSelect,children:[1,2,3,4].map(Be=>r.jsxs("option",{value:Be,children:["Week ",Be]},Be))})]}),r.jsx("button",{onClick:Pn,style:te.saveBtn,children:r.jsx(We,{size:14})}),r.jsx("button",{onClick:()=>B(null),style:te.cancelBtn,children:r.jsx(ze,{size:14})})]})}return r.jsxs("div",{children:[r.jsxs("div",{style:{...te.row,marginLeft:Q*24,background:Q===0&&((Ne=rr[L.pillar])==null?void 0:Ne.soft)||"transparent"},children:[we.length>0?r.jsx("button",{onClick:()=>Z(L.id),style:te.caret,children:Ee?r.jsx(Wi,{size:15}):r.jsx(Ur,{size:15})}):r.jsx("span",{style:{...te.caret,opacity:.25},children:r.jsx(yc,{size:12})}),r.jsx("span",{style:{...te.horizonTag,color:((qe=rr[L.pillar])==null?void 0:qe.dot)||Rt.dot,borderColor:((he=rr[L.pillar])==null?void 0:he.dot)||Rt.dot},title:L.horizon,children:W?ky[L.horizon]:L.horizon}),r.jsxs("div",{style:te.nameCol,children:[r.jsx("span",{style:{...te.title,...D===L.id?te.titleFull:{}},title:L.title,onPointerDown:()=>ee(L.id),onPointerUp:me,onPointerLeave:me,onPointerCancel:me,children:L.title}),r.jsx("span",{style:te.whenSub,children:Cy(L)})]}),W?r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{position:"relative",flexShrink:0},children:[r.jsx("button",{onClick:Ye=>k(Ye,L.id),style:te.rowAdd,title:"Options",children:r.jsx(dm,{size:15})}),ne===L.id&&r.jsxs(r.Fragment,{children:[r.jsx("div",{style:te.menuBackdrop,onClick:()=>ge(null)}),r.jsxs("div",{style:{...te.goalMenu,...O},children:[r.jsxs("button",{style:te.menuItem,onClick:()=>{At(L),ge(null)},children:[r.jsx(bt,{size:14})," Edit"]}),Oe&&r.jsxs("button",{style:te.menuItem,onClick:()=>{a(Ye=>({...Ye,[L.id]:!0})),_e(L.id,L),ge(null)},children:[r.jsx(Ke,{size:14})," Add sub-goal"]}),r.jsxs("button",{style:{...te.menuItem,color:"#C2536B"},onClick:()=>{ct(L.id,L.title),ge(null)},children:[r.jsx(ze,{size:14})," Delete"]})]})]})]}),r.jsx("button",{onClick:()=>je(L),style:{...te.rowAdd,color:Me(L)?((vt=rr[L.pillar])==null?void 0:vt.dot)||Rt.dot:"var(--text-3)"},title:Me(L)?"Showing on timeline":"Hidden from timeline",children:Me(L)?r.jsx(Xs,{size:14}):r.jsx(ld,{size:14})})]}):r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:()=>je(L),style:{...te.rowAdd,color:Me(L)?((Yt=rr[L.pillar])==null?void 0:Yt.dot)||Rt.dot:"var(--text-3)"},title:Me(L)?"Showing on timeline — click to hide":"Hidden from timeline — click to show",children:Me(L)?r.jsx(Xs,{size:13}):r.jsx(ld,{size:13})}),r.jsx("button",{onClick:()=>At(L),style:te.rowAdd,title:"Edit",children:r.jsx(bt,{size:12})}),Oe&&r.jsx("button",{onClick:()=>{a(Ye=>({...Ye,[L.id]:!0})),_e(L.id,L)},style:te.rowAdd,title:"Add sub-goal",children:r.jsx(Ke,{size:13})}),r.jsx("button",{onClick:()=>ct(L.id,L.title),style:{...te.rowAdd,color:"var(--text-3)"},title:"Delete",children:r.jsx(ze,{size:13})})]})]}),Ee&&we.map(Ye=>r.jsx(Tc,{goal:Ye,depth:Q+1},Ye.id)),Ee&&d===L.id&&r.jsx(zc,{parentId:L.id,parentGoal:L,depth:Q+1})]})},Eo=e.filter(L=>Me(L)&&L.start_date&&L.end_date),Ec=vy.map(L=>({...L,items:Eo.filter(Q=>L.horizons.includes(Q.horizon)).sort((Q,we)=>Q.pillar.localeCompare(we.pillar)||Q.start_date.localeCompare(we.start_date)||Xg[Q.horizon]-Xg[we.horizon]||Q.end_date.localeCompare(we.end_date))})).filter(L=>L.items.length>0),ut=(()=>{if(!Eo.length)return null;let L=Eo[0].start_date,Q=Eo[0].end_date;return Eo.forEach(we=>{we.start_date<L&&(L=we.start_date),we.end_date>Q&&(Q=we.end_date)}),{start:Gn(L),end:Gn(Q)}})(),jl=(()=>{if(!ut)return[];const L=[];for(let Q=ut.start.getTime();Q<=ut.end.getTime();Q+=qo)L.push(new Date(Q));return L})(),Bo=jl.length,Bm=(()=>{const L=[];return jl.forEach(Q=>{const we=`${Q.getFullYear()}-${Q.getMonth()}`,Ee=L[L.length-1];Ee&&Ee.key===we?Ee.days++:L.push({key:we,label:`${jr[Q.getMonth()]} '${String(Q.getFullYear()).slice(2)}`,days:1})}),L})(),Do=new Date;Do.setHours(0,0,0,0);const $n=ut?Math.round((Do-ut.start)/qo):-1,Ro=$n>=0&&$n<Bo,Bc=L=>Math.round((Gn(L.end_date)-Gn(L.start_date))/qo)+1,On=I==="month",Dc=ut?ut.start.getFullYear():0,Rc=ut?ut.start.getMonth():0,Ac=(()=>{if(!ut)return[];const L=[];let Q=Dc,we=Rc;const Ee=ut.end.getFullYear(),Oe=ut.end.getMonth();for(;Q<Ee||Q===Ee&&we<=Oe;)L.push({y:Q,m:we}),we++,we>11&&(we=0,Q++);return L})(),Sl=Ac.length||1,Dm=(L,Q)=>{const we=Gn(L),Ee=(we.getFullYear()-Dc)*12+we.getMonth()-Rc,Oe=new Date(we.getFullYear(),we.getMonth()+1,0).getDate();return Ee+(we.getDate()-(Q?0:1))/Oe},Cl=(L,Q)=>Dm(L,Q)/Sl*100,Rm=`${Do.getFullYear()}-${String(Do.getMonth()+1).padStart(2,"0")}-${String(Do.getDate()).padStart(2,"0")}`,Am=ut?Cl(Rm,!1):0,Fc=(j?di:0)+$n*kt,Fm=ut?`${ut.start.getTime()}-${ut.end.getTime()}`:"";return g.useEffect(()=>{if(On||!Ro)return;const L=le.current;L&&(L.scrollLeft=Math.max(0,Fc-L.clientWidth/2+kt/2))},[Fm,$n,j,Ro,On]),r.jsxs("div",{style:te.page,children:[r.jsxs("div",{style:te.head,children:[r.jsx("div",{style:te.eyebrow,children:"Anvil · Goals"}),r.jsx("h1",{style:te.h1,children:Ut?"All Goals":`${n} Goals`})]}),r.jsxs("div",{style:te.pillarPicker,children:[r.jsx("button",{onClick:()=>{o("All"),c(null),B(null)},style:{...te.pillarChip,...Ut?{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"}:{}},children:"All Goals"}),Ho.map(L=>{const Q=L===n;return r.jsxs("button",{onClick:()=>{o(L),c(null),B(null)},style:{...te.pillarChip,...Q?{background:rr[L].dot,color:"#fff",borderColor:rr[L].dot}:{}},children:[r.jsx("span",{style:{...te.dot,background:Q?"#fff":rr[L].dot}}),L]},L)})]}),r.jsxs("div",{style:te.list,children:[yr.map(L=>r.jsx(Tc,{goal:L,depth:0},L.id)),yr.length===0&&r.jsxs("div",{style:te.ganttEmpty,children:["No goals yet",Ut?"":` for ${n}`,"."]}),d==="ROOT"&&r.jsx(zc,{parentId:"ROOT",parentGoal:null,depth:0}),d!=="ROOT"&&r.jsxs("button",{onClick:()=>_e("ROOT",null),style:te.rootAdd,children:[r.jsx(Ke,{size:14})," Add new goal"]})]}),r.jsxs("div",{style:te.ganttWrap,children:[r.jsxs("div",{style:te.ganttTop,children:[r.jsxs("div",{style:te.ganttTitle,children:[On?"Monthly":"Daily"," Timeline",ut?` · ${Qg(ut.start)} – ${Qg(ut.end)}`:""]}),r.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[r.jsxs("div",{style:te.zoomToggle,children:[r.jsx("button",{onClick:()=>re("day"),style:{...te.zoomBtn,...On?{}:te.zoomBtnOn},children:"Day"}),r.jsx("button",{onClick:()=>re("month"),style:{...te.zoomBtn,...On?te.zoomBtnOn:{}},children:"Month"})]}),r.jsxs("button",{onClick:()=>J(L=>!L),style:te.labelToggle,children:[j?r.jsx(Gx,{size:14}):r.jsx(Ux,{size:14}),j?"Hide names":"Show names"]})]})]}),ut?On?r.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[r.jsxs("div",{style:te.gBandRow,children:[j&&r.jsx("div",{style:{...te.gLabelHead,zIndex:4},children:"Goal"}),r.jsx("div",{style:{flex:1,display:"grid",gridTemplateColumns:`repeat(${Sl}, 1fr)`,minWidth:0},children:Ac.map((L,Q)=>r.jsxs("div",{style:te.gMonthFluid,children:[jr[L.m],L.m===0||Q===0?` '${String(L.y).slice(2)}`:""]},Q))})]}),Ec.map(L=>r.jsxs("div",{children:[r.jsxs("div",{style:te.gGroupRow,children:[j?r.jsxs("div",{style:te.gGroupLabel,children:[L.label,r.jsx("span",{style:te.gGroupCount,children:L.items.length})]}):r.jsxs("div",{style:te.gGroupChip,children:[L.label," · ",L.items.length]}),r.jsx("div",{style:{flex:1}})]}),L.items.map(Q=>{var Yt;const we=((Yt=rr[Q.pillar])==null?void 0:Yt.dot)||"#9A968C",Ee=(ue==null?void 0:ue.id)===Q.id,Oe=Ee?ue.dx:0,Pe=Cl(Q.start_date,!1),Ne=Math.max(2,Cl(Q.end_date,!0)-Pe),qe=Bc(Q),he=Ne>=14,vt=`${Q.title} · ${Q.start_date} → ${Q.end_date} · ${qe} day${qe>1?"s":""}`;return r.jsxs("div",{style:te.gRow,children:[j&&r.jsxs("div",{style:{...te.gLabel,paddingLeft:12},children:[r.jsx("span",{style:{...te.ganttRowDot,background:we}}),r.jsx("span",{style:{...te.gHzTag,color:we,borderColor:we},children:Kg[Q.horizon]}),r.jsx("span",{style:te.gLabelText,title:Q.title,children:Q.title}),r.jsxs("span",{style:te.gDurChip,children:[qe,"d"]})]}),r.jsxs("div",{style:{position:"relative",flex:1,minHeight:36,minWidth:0,backgroundImage:`repeating-linear-gradient(to right, var(--border) 0, var(--border) 1px, transparent 1px, transparent calc(100% / ${Sl}))`},children:[Ro&&r.jsx("div",{style:{...te.gTodayLine,left:`${Am}%`}}),r.jsxs("div",{onPointerDown:Ye=>{Ye.preventDefault(),T.current=Ye.clientX;const xn=Ye.currentTarget.parentNode.offsetWidth;de({id:Q.id,startX:Ye.clientX,dx:0,g:Q,pxPerDay:xn/Bo})},style:{...te.gBar,left:`${Pe}%`,width:`${Ne}%`,background:we,cursor:Ee?"grabbing":"grab",transform:Oe?`translateX(${Oe}px)`:"none",zIndex:Ee?6:1,boxShadow:Ee?"0 4px 12px rgba(0,0,0,0.28)":"0 1px 2px rgba(0,0,0,0.15)",touchAction:"none"},title:vt,children:[r.jsx(Zs,{size:12,style:{opacity:.7,flexShrink:0,marginRight:2,color:"#fff"}}),he&&r.jsx("span",{style:te.gBarLabel,children:Q.title})]}),!he&&r.jsx("span",{style:{...te.gBarOutside,left:`calc(${Pe+Ne}% + 6px)`},title:vt,children:Q.title})]})]},Q.id)})]},L.key))]}):r.jsx("div",{style:te.ganttScroll,ref:le,children:r.jsxs("div",{style:{minWidth:(j?di:0)+Bo*kt,position:"relative"},children:[Ro&&r.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:Fc,width:kt,background:"color-mix(in srgb, var(--accent) 14%, transparent)",pointerEvents:"none",zIndex:3}}),r.jsxs("div",{style:te.gBandRow,children:[j&&r.jsx("div",{style:{...te.gLabelHead,zIndex:4},children:"Goal"}),r.jsx("div",{style:{display:"flex"},children:Bm.map((L,Q)=>r.jsx("div",{style:{...te.gMonthCell,width:L.days*kt},children:L.label},Q))})]}),r.jsxs("div",{style:te.gBandRow,children:[j&&r.jsx("div",{style:{...te.gLabelHead,zIndex:4,fontSize:10,color:"var(--text-3)",fontWeight:600},children:"days →"}),r.jsx("div",{style:{display:"flex"},children:jl.map((L,Q)=>{const we=L.getDay()===0||L.getDay()===6,Ee=Q===$n;return r.jsx("div",{style:{...te.gDayCell,...we?te.gWeekend:{},...Ee?te.gTodayCell:{}},children:L.getDate()},Q)})})]}),Ec.map(L=>r.jsxs("div",{children:[r.jsxs("div",{style:te.gGroupRow,children:[j?r.jsxs("div",{style:te.gGroupLabel,children:[L.label,r.jsx("span",{style:te.gGroupCount,children:L.items.length})]}):r.jsxs("div",{style:te.gGroupChip,children:[L.label," · ",L.items.length]}),r.jsx("div",{style:{width:Bo*kt,flexShrink:0}})]}),L.items.map(Q=>{var Fo;const we=((Fo=rr[Q.pillar])==null?void 0:Fo.dot)||"#9A968C",Ee=Math.round((Gn(Q.start_date)-ut.start)/qo),Oe=Bc(Q),Pe=(ue==null?void 0:ue.id)===Q.id,Ne=Pe?ue.dx:0,qe=Sy(Q),he=(N==null?void 0:N.id)===Q.id,vt=qe?cd(Q):Oe,Yt=qe?Zg(Q):Oe,Ye=he?Math.max(vt,Math.min(Yt,Oe+Math.round(N.dx/kt))):Oe,xn=Ye*kt-4,Ao=xn>=54,Be=`${Q.title} · ${Q.start_date} → ${Q.end_date} · ${Ye} day${Ye>1?"s":""}${qe?` (max ${Yt})`:""}`;return r.jsxs("div",{style:te.gRow,children:[j&&r.jsxs("div",{style:{...te.gLabel,paddingLeft:12},children:[r.jsx("span",{style:{...te.ganttRowDot,background:we}}),r.jsx("span",{style:{...te.gHzTag,color:we,borderColor:we},children:Kg[Q.horizon]}),r.jsx("span",{style:te.gLabelText,title:Q.title,children:Q.title}),r.jsxs("span",{style:te.gDurChip,children:[Ye,"d"]})]}),r.jsxs("div",{style:{...te.gTrack,width:Bo*kt},children:[Ro&&r.jsx("div",{style:{...te.gTodayLine,left:$n*kt}}),r.jsxs("div",{onPointerDown:yn=>{yn.preventDefault(),T.current=yn.clientX,de({id:Q.id,startX:yn.clientX,dx:0,g:Q,pxPerDay:kt})},style:{...te.gBar,left:Ee*kt+2,width:xn,background:we,cursor:Pe?"grabbing":"grab",transform:Ne?`translateX(${Ne}px)`:"none",zIndex:Pe||he?6:1,boxShadow:Pe||he?"0 4px 12px rgba(0,0,0,0.28)":"0 1px 2px rgba(0,0,0,0.15)",touchAction:"none"},title:Be,children:[qe&&Ye>vt&&r.jsx("div",{style:{position:"absolute",left:vt*kt,top:0,bottom:0,right:0,background:"#C2536B",borderRadius:"0 5px 5px 0"}}),r.jsx(Zs,{size:12,style:{opacity:.7,flexShrink:0,marginRight:2,color:"#fff",position:"relative",zIndex:1}}),Ao&&r.jsx("span",{style:{...te.gBarLabel,position:"relative",zIndex:1},children:Q.title}),qe&&r.jsx("div",{onPointerDown:yn=>{yn.preventDefault(),yn.stopPropagation(),se({id:Q.id,startX:yn.clientX,dx:0,g:Q})},style:te.resizeHandle,title:`Drag to extend up to ${Yt} days`,children:r.jsx("div",{style:te.resizeGrip})})]}),!Ao&&r.jsx("span",{style:{...te.gBarOutside,left:Ee*kt+xn+8+Ne},title:Be,children:Q.title})]})]},Q.id)})]},L.key))]})}):r.jsx("div",{style:te.ganttEmpty,children:"No goals on the timeline. Click the eye icon on a goal to show it here."}),ut&&r.jsxs("div",{style:te.gLegend,children:[r.jsxs("span",{style:te.gLegendItem,children:[r.jsx("span",{style:{...te.gLegendBar}})," bar length = number of days"]}),r.jsxs("span",{style:te.gLegendItem,children:[r.jsx("span",{style:te.gLegendToday})," today"]})]})]}),oe&&r.jsxs("div",{style:te.warnToast,children:[r.jsx(sy,{size:15,style:{flexShrink:0}}),r.jsx("span",{children:oe})]}),r.jsx(Gt,{toasts:Le,onUndo:ot,onDismiss:et})]})}const te={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box",maxWidth:"100%",overflowX:"hidden"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},pillarPicker:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16},pillarChip:{display:"flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},list:{background:"var(--surface)",borderRadius:12,padding:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"hidden"},row:{display:"flex",alignItems:"center",gap:9,padding:"9px 10px",borderRadius:8,flexWrap:"nowrap"},caret:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",display:"grid",placeItems:"center",padding:0,width:18,height:18,flexShrink:0},horizonTag:{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",border:"1px solid",borderRadius:5,padding:"2px 6px",flexShrink:0},nameCol:{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:1},title:{fontSize:14,fontWeight:500,lineHeight:1.3,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",userSelect:"none",WebkitUserSelect:"none",cursor:"default"},titleFull:{whiteSpace:"normal",overflow:"visible",textOverflow:"clip",wordBreak:"break-word"},whenSub:{fontSize:11,fontStyle:"italic",color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},rowAdd:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,flexShrink:0},menuBackdrop:{position:"fixed",inset:0,zIndex:40},goalMenu:{position:"fixed",zIndex:41,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 6px 24px rgba(0,0,0,0.18)",padding:4,minWidth:180,display:"flex",flexDirection:"column"},menuItem:{display:"flex",alignItems:"center",gap:9,width:"100%",border:"none",background:"none",padding:"10px 12px",borderRadius:7,cursor:"pointer",fontFamily:"inherit",fontSize:13.5,fontWeight:500,color:"var(--text)",textAlign:"left"},rootAdd:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"var(--text-2)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"9px 12px",cursor:"pointer",fontWeight:600,fontFamily:"inherit",marginTop:6,width:"100%",justifyContent:"center"},addBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 0 6px 28px",flexWrap:"wrap"},editBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 10px",flexWrap:"wrap",background:"var(--bg)",borderRadius:8,margin:"4px 0"},input:{border:"1px solid var(--border)",borderRadius:7,padding:"8px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",flex:1,minWidth:120},monthSelect:{border:"1px solid var(--border)",borderRadius:7,padding:"8px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},inheritTag:{fontSize:11.5,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"6px 9px",borderRadius:7,flexShrink:0},toTag:{fontSize:11.5,fontWeight:600,color:"var(--text-3)",flexShrink:0},warnToast:{position:"fixed",top:18,left:"50%",transform:"translateX(-50%)",zIndex:300,display:"flex",alignItems:"center",gap:8,maxWidth:"90vw",background:"#C2536B",color:"#fff",padding:"10px 16px",borderRadius:10,fontSize:13,fontWeight:600,boxShadow:"0 6px 24px rgba(0,0,0,0.25)"},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},ganttWrap:{background:"var(--surface)",borderRadius:12,padding:"16px 14px",marginTop:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},ganttTop:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:10,marginBottom:14},ganttTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",fontFamily:"'Fraunces',Georgia,serif"},labelToggle:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"5px 10px",borderRadius:8,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},zoomToggle:{display:"inline-flex",border:"1px solid var(--border)",borderRadius:8,overflow:"hidden"},zoomBtn:{border:"none",background:"var(--surface)",color:"var(--text-2)",padding:"5px 12px",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},zoomBtnOn:{background:"var(--accent-strong)",color:"#fff"},gMonthFluid:{borderLeft:"1px solid var(--border)",fontSize:10,fontWeight:700,color:"var(--text-2)",textAlign:"center",padding:"5px 0",whiteSpace:"nowrap",overflow:"hidden"},gGroupChip:{position:"sticky",left:0,zIndex:3,background:"var(--surface-2)",padding:"5px 10px",fontSize:10,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-2)",whiteSpace:"nowrap",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center"},ganttEmpty:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},ganttScroll:{overflowX:"auto"},ganttRowDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},gBandRow:{display:"flex",alignItems:"stretch",borderBottom:"1px solid var(--border)"},gLabelHead:{width:di,flexShrink:0,position:"sticky",left:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center",padding:"6px 10px",fontSize:12,fontWeight:700,color:"var(--text-2)"},gMonthCell:{flexShrink:0,borderLeft:"1px solid var(--border)",fontSize:10.5,fontWeight:700,color:"var(--text-2)",textAlign:"center",padding:"5px 0",whiteSpace:"nowrap",overflow:"hidden"},gDayCell:{width:kt,flexShrink:0,textAlign:"center",fontSize:10,color:"var(--text-3)",padding:"4px 0",borderLeft:"1px solid var(--border)",fontWeight:600},gWeekend:{background:"var(--surface-2)"},gTodayCell:{background:"var(--hover)",color:"var(--accent)",fontWeight:800},gGroupRow:{display:"flex",alignItems:"stretch",background:"var(--surface-2)",borderBottom:"1px solid var(--border)",borderTop:"1px solid var(--border)"},gGroupLabel:{width:di,flexShrink:0,position:"sticky",left:0,background:"var(--surface-2)",zIndex:3,padding:"6px 12px",fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-2)",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center",gap:7},gGroupCount:{fontSize:10,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 6px"},gHzTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.04em",border:"1px solid",borderRadius:4,padding:"1px 4px",flexShrink:0},gRow:{display:"flex",alignItems:"stretch",minHeight:36,borderBottom:"1px solid var(--border)"},gLabel:{width:di,flexShrink:0,display:"flex",alignItems:"center",gap:7,position:"sticky",left:0,background:"var(--surface)",zIndex:2,borderRight:"1px solid var(--border)",paddingRight:8,overflow:"hidden"},gLabelText:{flex:1,minWidth:0,fontSize:12,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"var(--text)"},gDurChip:{fontSize:10,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",borderRadius:10,padding:"1px 6px",flexShrink:0,marginRight:6},gTrack:{position:"relative",flexShrink:0,minHeight:36,backgroundImage:`repeating-linear-gradient(to right, var(--border) 0, var(--border) 1px, transparent 1px, transparent ${kt}px)`},gBar:{position:"absolute",top:9,height:18,borderRadius:5,display:"flex",alignItems:"center",padding:"0 7px",boxShadow:"0 1px 2px rgba(0,0,0,0.15)",overflow:"hidden",zIndex:1},gBarLabel:{fontSize:11,fontWeight:600,color:"#fff",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},gBarOutside:{position:"absolute",top:9,height:18,display:"flex",alignItems:"center",fontSize:11,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",pointerEvents:"none",zIndex:1},resizeHandle:{position:"absolute",right:0,top:0,bottom:0,width:12,cursor:"ew-resize",display:"grid",placeItems:"center",touchAction:"none",zIndex:2},resizeGrip:{width:2,height:11,background:"rgba(255,255,255,0.9)",borderRadius:1,boxShadow:"3px 0 0 rgba(255,255,255,0.6)"},gTodayLine:{position:"absolute",top:0,bottom:0,width:2,background:"#C2536B",zIndex:0,opacity:.6},gLegend:{display:"flex",gap:16,marginTop:12,fontSize:11,color:"var(--text-3)",flexWrap:"wrap"},gLegendItem:{display:"flex",alignItems:"center",gap:6,fontWeight:600},gLegendBar:{width:18,height:8,borderRadius:3,background:"var(--accent)",display:"inline-block"},gLegendToday:{width:2,height:12,background:"#C2536B",display:"inline-block"}},Wn={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.12)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.12)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.12)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.12)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.12)"}},Ei=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],zy=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Bi=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,Ty=()=>Bi(new Date),Ey=(e=0)=>{const t=new Date,n=t.getDay(),o=n===0?-6:1-n,i=new Date(t);return i.setDate(t.getDate()+o+e*7),Array.from({length:7},(s,l)=>{const a=new Date(i);return a.setDate(i.getDate()+l),Bi(a)})},By=(e=0)=>{const t=new Date,n=new Date(t.getFullYear(),t.getMonth()+e,1),o=n.getFullYear(),i=n.getMonth(),s=new Date(o,i+1,0).getDate(),l=n.getDay(),a=l===0?6:l-1,d=Array.from({length:s},(h,x)=>`${o}-${String(i+1).padStart(2,"0")}-${String(x+1).padStart(2,"0")}`),c=n.toLocaleDateString("en-US",{month:"long",year:"numeric"});return{dates:d,startOffset:a,label:c,year:o,month:i}},Jg=e=>new Date(e+"T00:00").toLocaleDateString("en-US",{month:"short",day:"numeric"}),en=Ty(),Dy=new Date().getFullYear();function Ry(){var Y,le;const[e,t]=g.useState([]),[n,o]=g.useState("ALL"),[i,s]=g.useState(!1),[l,a]=g.useState(!1),[d,c]=g.useState(!1),[h,x]=g.useState(null),[f,R]=g.useState(null),[S,y]=g.useState({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week",days:[]}),[A,m]=g.useState(!1),[p,b]=g.useState([]),E=g.useCallback(()=>$.getHabits().then(t).catch(console.error),[]);g.useEffect(()=>{E()},[E]),g.useEffect(()=>{$.getSetting("habit_order").then(T=>{Array.isArray(T==null?void 0:T.value)&&b(T.value)}).catch(()=>{})},[]);const C=g.useMemo(()=>p.length?[...e].sort((T,oe)=>{const Ce=p.indexOf(T.id),V=p.indexOf(oe.id);return Ce===-1&&V===-1?0:Ce===-1?1:V===-1?-1:Ce-V}):e,[e,p]),z=async T=>{b(T),await $.setSetting("habit_order",T),m(!1)};g.useEffect(()=>{const T=()=>{const oe=window.innerWidth<720;s(oe),oe||a(!1)};return T(),window.addEventListener("resize",T),()=>window.removeEventListener("resize",T)},[]);const{deleteItem:M,toasts:_,handleUndo:B,handleDismiss:W}=Ht($.deleteHabit,$.restoreHabit,E),j=T=>{o(T),i&&a(!1)},J=(T,oe)=>{(T.type==="minimum"||T.type==="maximum")&&T.period==="day"?R({habit:T,date:oe}):I(T.id,oe)},I=async(T,oe)=>{await $.toggleHabitLog(T,oe),E()},re=async(T,oe,Ce,V)=>{await $.setHabitLogCount(T,oe,Ce,V),R(null),E()},ue=async(T,oe)=>{await $.clearHabitLog(T,oe),R(null),E()},de=async()=>{if(!S.name.trim())return;const T=S.type==="minimum"||S.type==="maximum",oe=S.type==="weekly";if(oe&&S.days.length===0)return;const Ce={name:S.name.trim(),pillar:S.pillar,target_per_week:Number(S.target_per_week)||7,type:S.type,target_count:T?Number(S.target_count)||1:null,period:T?S.period:null,days:oe?S.days:null};await $.createHabit(Ce),y({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week",days:[]}),c(!1),E()},ye=async(T,oe)=>{n===T&&o("ALL"),M(T,oe)},q=e.find(T=>T.id===n),N=T=>new Set(T.logs||[]),se={...H.sidebar,...i?H.sidebarOverlay:{},...i&&!l?H.sidebarHidden:{}};return r.jsxs("div",{style:H.shell,children:[i&&l&&r.jsx("div",{style:H.backdrop,onClick:()=>a(!1)}),r.jsxs("aside",{style:se,children:[r.jsxs("div",{style:H.sideTop,children:[r.jsx("div",{style:H.brand,children:"Anvil · Habits"}),i&&r.jsx("button",{onClick:()=>a(!1),style:H.closeBtn,children:r.jsx(ze,{size:18})})]}),r.jsxs("div",{style:{...H.sideItem,...n==="ALL"?H.sideItemOn:{},cursor:"default",padding:"2px 6px 2px 10px"},children:[r.jsxs("button",{onClick:()=>j("ALL"),style:{display:"flex",alignItems:"center",gap:9,flex:1,border:"none",background:"none",cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:n==="ALL"?600:500,color:"var(--text-2)",padding:"7px 0"},children:[r.jsx(Jb,{size:15}),r.jsx("span",{style:H.sideLabel,children:"All Habits"}),r.jsx("span",{style:H.sideCount,children:e.length})]}),r.jsx("button",{onClick:T=>{T.stopPropagation(),m(!0)},style:H.tinyBtn,title:"Reorder habits",children:r.jsx(bt,{size:12})})]}),r.jsx("div",{style:H.sideDivider}),C.map(T=>{var V;const oe=n===T.id,Ce=((V=Wn[T.pillar])==null?void 0:V.dot)||"#9A968C";return r.jsxs("button",{onClick:()=>j(T.id),style:{...H.sideItem,...oe?H.sideItemOn:{}},children:[r.jsx("span",{style:{...H.sideDot,background:Ce}}),r.jsx("span",{style:H.sideLabel,children:T.name}),r.jsxs("span",{style:H.sideStreak,children:[r.jsx(zo,{size:11})," ",T.streak]})]},T.id)}),d?r.jsx(Ay,{habit:S,onChange:y,onSave:de,onCancel:()=>c(!1)}):r.jsxs("button",{onClick:()=>c(!0),style:H.sideNewBtn,children:[r.jsx(Ke,{size:13})," New habit"]})]}),r.jsxs("main",{style:H.main,children:[i&&r.jsxs("button",{onClick:()=>a(!0),style:H.hamburger,children:[r.jsx(hc,{size:18}),r.jsx("span",{style:H.hamburgerLabel,children:n==="ALL"?"All Habits":q==null?void 0:q.name})]}),n==="ALL"?r.jsx(Wy,{habits:C,dayAction:J,logSet:N,onDelete:ye,onEdit:T=>x(T)}):r.jsx(Ly,{habit:q,dayAction:J,logSet:N,onDelete:()=>ye(q.id,q.name),onEdit:()=>x(q),setNote:(T,oe)=>$.setHabitLogNote(q.id,T,oe).then(E)}),n==="ALL"&&r.jsx($y,{year:Dy})]}),A&&r.jsx(Py,{habits:C,onSave:z,onClose:()=>m(!1)}),h&&r.jsx(Fy,{habit:h,onSave:async T=>{await $.updateHabit(h.id,T),x(null),E()},onClose:()=>x(null)}),f&&r.jsx(My,{habit:f.habit,date:f.date,initialCount:((Y=f.habit.log_counts)==null?void 0:Y[f.date])??0,initialNote:((le=f.habit.log_notes)==null?void 0:le[f.date])??"",onSave:(T,oe)=>re(f.habit.id,f.date,T,oe),onClear:()=>ue(f.habit.id,f.date),onClose:()=>R(null)}),r.jsx(Gt,{toasts:_,onUndo:B,onDismiss:W})]})}function mm({days:e,onToggle:t}){return r.jsx("div",{style:H.dayPick,children:Ei.map((n,o)=>r.jsx("button",{type:"button",onClick:()=>t(o),style:{...H.dayChip,...e.includes(o)?H.dayChipOn:{}},children:n},n))})}function Ay({habit:e,onChange:t,onSave:n,onCancel:o}){const i=e.type==="minimum"||e.type==="maximum",s=e.type==="weekly",l=a=>t(d=>({...d,days:d.days.includes(a)?d.days.filter(c=>c!==a):[...d.days,a].sort((c,h)=>c-h)}));return r.jsxs("div",{style:H.addBox,children:[r.jsx("input",{autoFocus:!0,placeholder:"Habit name",value:e.name,onChange:a=>t(d=>({...d,name:a.target.value})),onKeyDown:a=>a.key==="Enter"&&n(),style:H.sideInput}),r.jsx("select",{value:e.pillar,onChange:a=>t(d=>({...d,pillar:a.target.value})),style:H.sideInput,children:Object.keys(Wn).map(a=>r.jsx("option",{children:a},a))}),r.jsxs("select",{value:e.type,onChange:a=>t(d=>({...d,type:a.target.value})),style:H.sideInput,children:[r.jsx("option",{value:"regular",children:"Regular (yes/no)"}),r.jsx("option",{value:"weekly",children:"Weekly (specific days)"}),r.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),r.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),s&&r.jsxs(r.Fragment,{children:[r.jsx("div",{style:H.pickHint,children:"Do this on…"}),r.jsx(mm,{days:e.days,onToggle:l})]}),i&&r.jsxs("div",{style:{display:"flex",gap:6},children:[r.jsx("input",{type:"number",min:1,placeholder:"N",value:e.target_count||"",onChange:a=>t(d=>({...d,target_count:a.target.value})),style:{...H.sideInput,width:60}}),r.jsx("select",{value:e.period,onChange:a=>t(d=>({...d,period:a.target.value})),style:H.sideInput,children:["day","week","month","year"].map(a=>r.jsx("option",{children:a},a))})]}),r.jsxs("div",{style:{display:"flex",gap:6},children:[r.jsx("button",{onClick:n,style:H.sideAddBtn,children:r.jsx(We,{size:13})}),r.jsx("button",{onClick:o,style:H.sideCancelBtn,children:r.jsx(ze,{size:13})})]})]})}function Fy({habit:e,onSave:t,onClose:n}){const[o,i]=g.useState(e.name),[s,l]=g.useState(e.type||"regular"),[a,d]=g.useState(e.target_count||""),[c,h]=g.useState(e.period||"week"),[x,f]=g.useState(e.reminder_time||""),[R,S]=g.useState(e.days||[]),y=s==="minimum"||s==="maximum",A=s==="weekly",m=b=>S(E=>E.includes(b)?E.filter(C=>C!==b):[...E,b].sort((C,z)=>C-z)),p=()=>{A&&R.length===0||t({name:o.trim(),type:s,target_count:y?Number(a):null,period:y?c:null,days:A?R:[],reminder_time:x||null})};return r.jsx("div",{style:H.modalOverlay,onClick:n,children:r.jsxs("div",{style:H.modal,onClick:b=>b.stopPropagation(),children:[r.jsxs("div",{style:H.modalHead,children:["Edit Habit",r.jsx("button",{onClick:n,style:H.closeBtn,children:r.jsx(ze,{size:16})})]}),r.jsx("label",{style:H.modalLabel,children:"Name"}),r.jsx("input",{value:o,onChange:b=>i(b.target.value),style:H.sideInput}),r.jsx("label",{style:H.modalLabel,children:"Type"}),r.jsxs("select",{value:s,onChange:b=>l(b.target.value),style:H.sideInput,children:[r.jsx("option",{value:"regular",children:"Regular (yes/no)"}),r.jsx("option",{value:"weekly",children:"Weekly (specific days)"}),r.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),r.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),A&&r.jsxs(r.Fragment,{children:[r.jsx("label",{style:H.modalLabel,children:"Days"}),r.jsx(mm,{days:R,onToggle:m})]}),y&&r.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[r.jsx("input",{type:"number",min:1,value:a,onChange:b=>d(b.target.value),style:{...H.sideInput,width:70}}),r.jsx("select",{value:c,onChange:b=>h(b.target.value),style:H.sideInput,children:["day","week","month","year"].map(b=>r.jsx("option",{children:b},b))})]}),r.jsx("label",{style:H.modalLabel,children:"Reminder time"}),r.jsx("input",{type:"time",value:x,onChange:b=>f(b.target.value),style:H.sideInput}),r.jsx("button",{onClick:p,style:{...H.sideAddBtn,width:"100%",marginTop:10,height:36},children:"Save"})]})})}function My({habit:e,date:t,initialCount:n,initialNote:o,onSave:i,onClear:s,onClose:l}){const[a,d]=g.useState(n??0),[c,h]=g.useState(o??""),x=e.target_count,f=e.type==="minimum"?a>=x:a>0&&a<=x,R=e.type==="maximum"&&a>x,S=f?"#4C9A6B":R?"#C2536B":"#C2773B",y=f?"✓ Goal met":R?"Over the limit":"Not met yet";return r.jsx("div",{style:H.modalOverlay,onClick:l,children:r.jsxs("div",{style:H.modal,onClick:A=>A.stopPropagation(),children:[r.jsxs("div",{style:H.modalHead,children:[e.name,r.jsx("button",{onClick:l,style:H.closeBtn,children:r.jsx(ze,{size:16})})]}),r.jsxs("div",{style:{fontSize:12,color:"var(--text-3)",marginBottom:2},children:[t," · ",e.type==="minimum"?`at least ${x}`:`no more than ${x}`," / ",e.period]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:20,margin:"14px 0 6px"},children:[r.jsx("button",{onClick:()=>d(A=>Math.max(0,A-1)),style:H.counterBtn,children:"−"}),r.jsx("span",{style:{fontSize:38,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:52,textAlign:"center",color:S},children:a}),r.jsx("button",{onClick:()=>d(A=>A+1),style:H.counterBtn,children:"+"})]}),r.jsx("div",{style:{textAlign:"center",fontSize:12.5,fontWeight:700,color:S,marginBottom:12},children:y}),r.jsx("textarea",{value:c,onChange:A=>h(A.target.value),placeholder:"Add a comment (optional)…",style:{...H.sideInput,minHeight:56,resize:"vertical"}}),r.jsxs("div",{style:{display:"flex",gap:8,marginTop:10},children:[r.jsxs("button",{onClick:s,style:{...H.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[r.jsx(ze,{size:14})," Delete"]}),r.jsxs("button",{onClick:()=>i(a,c),style:{...H.sideAddBtn,flex:1,justifyContent:"center",height:38},children:[r.jsx(We,{size:14})," Set"]})]})]})})}function Jl({pct:e,label:t,sub:n,color:o}){const s=2*Math.PI*26,l=s*(1-Math.max(0,Math.min(100,e))/100);return r.jsxs("div",{style:H.ringStat,children:[r.jsxs("div",{style:H.ringBox,children:[r.jsxs("svg",{width:"70",height:"70",viewBox:"0 0 70 70",children:[r.jsx("circle",{cx:"35",cy:"35",r:26,fill:"none",stroke:"var(--border)",strokeWidth:"7"}),r.jsx("circle",{cx:"35",cy:"35",r:26,fill:"none",stroke:o,strokeWidth:"7",strokeLinecap:"round",strokeDasharray:s,strokeDashoffset:l,transform:"rotate(-90 35 35)",style:{transition:"stroke-dashoffset 0.5s ease"}})]}),r.jsxs("div",{style:{...H.ringPct,color:o},children:[e,"%"]})]}),r.jsxs("div",{children:[r.jsx("div",{style:H.ringLabel,children:t}),r.jsx("div",{style:H.ringSub,children:n})]})]})}function Wy({habits:e,dayAction:t,logSet:n,onDelete:o,onEdit:i}){const[s,l]=g.useState(0),a=Ey(s),d=`${Jg(a[0])} – ${Jg(a[6])}${s===0?" · This week":""}`,c=j=>{const J=new Date(j+"T00:00:00"),I=J.getDay(),re=new Date(J);return re.setDate(J.getDate()+(I===0?-6:1-I)),Array.from({length:7},(ue,de)=>{const ye=new Date(re);return ye.setDate(re.getDate()+de),Bi(ye)})},h=j=>j.logs||[],x=(j,J)=>j.type==="minimum"&&j.period==="week"&&J.filter(I=>n(j).has(I)).length>=(j.target_count||0),f=(j,J)=>j.type==="minimum"&&j.period==="month"&&h(j).filter(I=>I.slice(0,7)===J).length>=(j.target_count||0),R=(j,J)=>j.type==="minimum"&&j.period==="year"&&h(j).filter(I=>I.slice(0,4)===J).length>=(j.target_count||0),S=(j,J)=>{var I;if((j.type==="minimum"||j.type==="maximum")&&j.period==="day"){const re=(I=j.log_counts)==null?void 0:I[J];return re==null?!1:j.type==="minimum"?re>=(j.target_count||0):re>0&&re<=(j.target_count||0)}return n(j).has(J)},y=(j,J)=>j.type!=="minimum"?!1:j.period==="week"?x(j,c(J)):j.period==="month"?f(j,J.slice(0,7)):j.period==="year"?R(j,J.slice(0,4)):!1,A=(j,J)=>S(j,J)||y(j,J),m=e.filter(j=>A(j,en)).length,p=e.length?Math.round(m/e.length*100):0,b=j=>{if(j.type==="minimum"&&j.period==="month"&&(f(j,a[0].slice(0,7))||f(j,a[6].slice(0,7)))||j.type==="minimum"&&j.period==="year"&&(R(j,a[0].slice(0,4))||R(j,a[6].slice(0,4)))||j.type==="minimum"&&j.period==="week"&&x(j,a))return 1;if((j.type==="minimum"||j.type==="maximum")&&j.period==="day")return Math.min(1,a.filter(ue=>S(j,ue)).length/7);const J=n(j),I=a.filter(ue=>J.has(ue)).length,re=j.type==="minimum"&&j.period==="week"?j.target_count||1:j.target_per_week||7;return re>0?Math.min(1,I/re):0},E=e.length?Math.round(e.reduce((j,J)=>j+b(J),0)/e.length*100):0,C=new Date,z=`${C.getFullYear()}-${String(C.getMonth()+1).padStart(2,"0")}`,M=new Date(C.getFullYear(),C.getMonth()+1,0).getDate(),_=M/7,B=j=>{if(j.type==="minimum"&&j.period==="month"&&f(j,z)||j.type==="minimum"&&j.period==="year"&&R(j,z.slice(0,4)))return 1;if((j.type==="minimum"||j.type==="maximum")&&j.period==="day"){let re=0;for(let ue=1;ue<=M;ue++)S(j,`${z}-${String(ue).padStart(2,"0")}`)&&re++;return Math.min(1,re/M)}const J=h(j).filter(re=>re.slice(0,7)===z).length;let I;return j.type==="minimum"&&j.period==="week"?I=(j.target_count||1)*_:j.type==="minimum"&&j.period==="month"?I=j.target_count||1:j.type==="minimum"&&j.period==="year"?I=(j.target_count||1)/12:I=(j.target_per_week||7)*_,I>0?Math.min(1,J/I):0},W=e.length?Math.round(e.reduce((j,J)=>j+B(J),0)/e.length*100):0;return r.jsxs("div",{children:[r.jsxs("div",{style:H.mainHead,children:[r.jsx("div",{style:H.eyebrow,children:"Weekly view"}),r.jsx("h1",{style:H.h1,children:"All Habits"})]}),r.jsxs("div",{style:H.navBar,children:[r.jsx("button",{onClick:()=>l(j=>j-1),style:H.navBtn,children:r.jsx(fn,{size:16})}),r.jsx("span",{style:H.navLabel,children:d}),r.jsx("button",{onClick:()=>l(j=>Math.min(0,j+1)),disabled:s>=0,style:{...H.navBtn,...s>=0?H.navBtnDisabled:{}},children:r.jsx(Ur,{size:16})})]}),r.jsxs("div",{style:H.weekCard,children:[r.jsxs("div",{style:H.weekHeadRow,children:[r.jsx("div",{style:H.weekNameCol}),Ei.map((j,J)=>r.jsxs("div",{style:H.weekDayHead,children:[r.jsx("span",{style:H.weekDayName,children:j}),r.jsx("span",{style:{...H.weekDayNum,...a[J]===en?H.weekDayToday:{}},children:new Date(a[J]+"T00:00").getDate()})]},j)),r.jsx("div",{style:H.weekStreakCol,children:"Streak"})]}),e.map(j=>{var P,G;const J=((P=Wn[j.pillar])==null?void 0:P.dot)||"#9A968C",I=((G=Wn[j.pillar])==null?void 0:G.soft)||"rgba(0,0,0,0.05)",re=n(j),ue=j.type==="weekly",de=new Set(j.days||[]),ye=[0,1,2,3,4,5,6].filter(ne=>de.has(ne)),q=ue&&ye.length>0&&ye.every(ne=>re.has(a[ne])),N=ue?Array(7).fill(q):null,se=j.type==="minimum"&&["week","month","year"].includes(j.period),Y=j.target_count||0,le=j.logs||[],T=ne=>le.filter(ge=>ge.slice(0,7)===ne).length,oe=ne=>le.filter(ge=>ge.slice(0,4)===ne).length,Ce=a.filter(ne=>re.has(ne)).length,V=ne=>se?j.period==="week"?Ce>=Y:j.period==="month"?T(ne.slice(0,7))>=Y:j.period==="year"?oe(ne.slice(0,4))>=Y:!1:!1,v=se&&a.some(V),D=j.period==="week"?Ce:j.period==="month"?T(a[0].slice(0,7)):j.period==="year"?oe(a[0].slice(0,4)):0;return r.jsxs("div",{style:H.weekRow,children:[r.jsxs("div",{style:{...H.weekNameCol,flexDirection:"column",alignItems:"flex-start",gap:2},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx("span",{style:{...H.sideDot,background:J}}),r.jsx("span",{style:H.weekHabitName,children:j.name})]}),j.type==="weekly"?r.jsx("span",{style:H.typeBadge,children:(j.days||[]).map(ne=>Ei[ne]).join("·")||"—"}):j.type!=="regular"?r.jsx("span",{style:H.typeBadge,children:j.type==="minimum"?`≥${j.target_count}/${j.period}`:`≤${j.target_count}/${j.period}`}):null]}),a.map((ne,ge)=>{var Qe,tt;if(ue&&!de.has(ge))return r.jsxs("div",{style:{...H.weekCell,position:"relative",zIndex:0},children:[N[ge]&&r.jsx("span",{style:{...H.chainLine,background:J,left:N[ge-1]?0:"50%",right:N[ge+1]?0:"50%"}}),r.jsx("span",{style:{...H.offDay,position:"relative",zIndex:1},title:"Not scheduled",children:"·"})]},ne);const O=re.has(ne),F=ne>en,k=(j.type==="minimum"||j.type==="maximum")&&j.period==="day",ee=(Qe=j.log_counts)==null?void 0:Qe[ne],me=ee!=null,Te=!!((tt=j.log_notes)!=null&&tt[ne]),ct=V(ne),Le=ge>0&&V(a[ge-1]),ot=ge<a.length-1&&V(a[ge+1]),et=O||ct;return r.jsxs("div",{style:{...H.weekCell,position:"relative",zIndex:0},children:[ct&&r.jsx("span",{style:{...H.chainLine,background:J,left:Le?0:"50%",right:ot?0:"50%"}}),ue&&N[ge]&&r.jsx("span",{style:{...H.chainLine,background:J,left:N[ge-1]?0:"50%",right:N[ge+1]?0:"50%"}}),r.jsx("button",{disabled:F,onClick:()=>t(j,ne),style:{...H.tick,...et?{background:J,borderColor:J,color:"#fff"}:{},...k&&me&&!O?{borderColor:J,color:J}:{},...F&&!et?H.tickFuture:{}},children:k?me?r.jsx("span",{style:{fontSize:12,fontWeight:700},children:ee}):null:O&&r.jsx(We,{size:14,color:"#fff",strokeWidth:3})}),Te&&r.jsx("span",{style:H.cellNoteBubble})]},ne)}),r.jsx("div",{style:H.weekStreakCol,children:q?r.jsxs("span",{style:{...H.streakPill,background:I,color:J},children:[r.jsx(Js,{size:12})," ",ye.length,"/",ye.length]}):v?r.jsxs("span",{style:{...H.streakPill,background:I,color:J},children:[r.jsx(Js,{size:12})," ",D,"/",Y]}):r.jsxs("span",{style:{...H.streakPill,background:I,color:J},children:[r.jsx(zo,{size:12})," ",j.streak]})})]},j.id)}),e.length===0&&r.jsx("div",{style:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},children:"No habits yet — add one from the sidebar."})]}),e.length>0&&r.jsxs("div",{style:{...H.progressCard,marginTop:18,marginBottom:0},children:[r.jsx(Jl,{pct:p,label:"Today",sub:`${m}/${e.length} done`,color:"#4C9A6B"}),r.jsx("div",{style:H.progressDivider}),r.jsx(Jl,{pct:E,label:"This week",sub:"of weekly targets",color:"#3A7CA5"}),r.jsx("div",{style:H.progressDivider}),r.jsx(Jl,{pct:W,label:"This month",sub:"of monthly targets",color:"#8268B0"})]})]})}function Ly({habit:e,dayAction:t,logSet:n,onDelete:o,onEdit:i,setNote:s}){var V,v;const[l,a]=g.useState(null),[d,c]=g.useState(""),[h,x]=g.useState(null),[f,R]=g.useState(0),S=g.useRef(null);if(!e)return null;const y=((V=Wn[e.pillar])==null?void 0:V.dot)||"#9A968C",A=((v=Wn[e.pillar])==null?void 0:v.soft)||"rgba(0,0,0,0.05)",m=n(e),p=e.type==="weekly",b=new Set(e.days||[]),E=D=>(new Date(D+"T00:00").getDay()+6)%7,C=D=>!p||b.has(E(D)),z=D=>{const P=new Date(D+"T00:00"),G=P.getDay(),ne=new Date(P);ne.setDate(P.getDate()+(G===0?-6:1-G));const ge=Array.from({length:7},(k,ee)=>{const me=new Date(ne);return me.setDate(ne.getDate()+ee),Bi(me)}),O=[0,1,2,3,4,5,6].filter(k=>b.has(k)),F=O.length>0&&O.every(k=>m.has(ge[k]));return Array(7).fill(F)},{dates:M,startOffset:_,label:B,year:W}=By(f),j=M.filter(D=>D<=en&&C(D)&&m.has(D)).length,J=M.filter(D=>D<=en&&C(D)).length,I=J>0?Math.round(j/J*100):0,re=e.type==="minimum"&&(e.period==="month"||e.period==="year"),ue=e.period==="year"?(e.logs||[]).filter(D=>D.startsWith(`${W}-`)).length:M.filter(D=>m.has(D)).length,de=re&&ue>=(e.target_count||0),ye=e.type==="minimum"&&e.period==="week",q=e.target_count||0,N=D=>{const P=new Date(D+"T00:00"),G=P.getDay(),ne=new Date(P);ne.setDate(P.getDate()+(G===0?-6:1-G));let ge=0;for(let O=0;O<7;O++){const F=new Date(ne);F.setDate(ne.getDate()+O),m.has(Bi(F))&&ge++}return ge},se=D=>re?de:ye?N(D)>=q:!1,Y=ye?N(en):0,le=ye&&Y>=q,T=D=>{S.current=setTimeout(()=>a(D),500)},oe=()=>clearTimeout(S.current),Ce=D=>{var P;x(D),c(((P=e.log_notes)==null?void 0:P[D])||""),a(null)};return r.jsxs("div",{children:[r.jsxs("div",{style:H.mainHead,children:[r.jsxs("div",{children:[r.jsxs("div",{style:H.eyebrow,children:[r.jsx("span",{style:{...H.sideDot,background:y,marginRight:6}}),e.pillar," · Monthly view"]}),r.jsx("h1",{style:H.h1,children:e.name})]}),r.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[r.jsxs("button",{onClick:i,style:H.actionBtn,children:[r.jsx(bt,{size:14})," Edit"]}),r.jsxs("button",{onClick:o,style:{...H.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[r.jsx(ze,{size:14})," Delete"]}),e.reminder_time&&r.jsxs("button",{style:H.actionBtn,children:[r.jsx(Kb,{size:14})," ",e.reminder_time]})]})]}),r.jsxs("div",{style:H.statStrip,children:[r.jsx(vn,{label:"Current streak",value:`${e.streak} days`,c:y,soft:A,flame:!0}),r.jsx(vn,{label:"Best streak",value:`${e.max_streak??e.streak} days`,c:y,soft:A,flame:!0}),r.jsx(vn,{label:"Done this month",value:`${j}/${J}`,c:y,soft:A}),r.jsx(vn,{label:"Completion",value:`${I}%`,c:y,soft:A}),e.type==="regular"?r.jsx(vn,{label:"Weekly target",value:`${e.target_per_week}×`,c:y,soft:A}):e.type==="weekly"?r.jsx(vn,{label:"Days",value:(e.days||[]).map(D=>Ei[D]).join(", ")||"—",c:y,soft:A}):r.jsx(vn,{label:e.type==="minimum"?"Min target":"Max allowed",value:`${e.target_count}/${e.period}`,c:y,soft:A})]}),r.jsxs("div",{style:H.navBar,children:[r.jsx("button",{onClick:()=>R(D=>D-1),style:H.navBtn,children:r.jsx(fn,{size:16})}),r.jsxs("span",{style:H.navLabel,children:[B,f===0?" · This month":""]}),r.jsx("button",{onClick:()=>R(D=>Math.min(0,D+1)),disabled:f>=0,style:{...H.navBtn,...f>=0?H.navBtnDisabled:{}},children:r.jsx(Ur,{size:16})})]}),re&&r.jsxs("div",{style:{...H.chainBanner,background:de?A:"var(--bg)",color:de?y:"var(--text-3)"},children:[r.jsx(Js,{size:15}),de?`${e.period==="year"?"Yearly":"Monthly"} chain complete — ${ue}/${e.target_count} connected`:`${ue}/${e.target_count} this ${e.period} · ${(e.target_count||0)-ue} more to connect the chain`]}),ye&&f===0&&r.jsxs("div",{style:{...H.chainBanner,background:le?A:"var(--bg)",color:le?y:"var(--text-3)"},children:[r.jsx(Js,{size:15}),le?`This week's chain complete — ${Y}/${q} connected`:`${Y}/${q} this week · ${Math.max(0,q-Y)} more to connect the chain`]}),r.jsxs("div",{style:H.monthCard,children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[r.jsx("div",{style:H.monthTitle,children:B}),r.jsx("span",{style:{fontSize:11,color:"var(--text-3)"},children:"Long-press a day for options"})]}),r.jsx("div",{style:H.monthDow,children:Ei.map(D=>r.jsx("div",{style:H.monthDowCell,children:D},D))}),r.jsxs("div",{style:H.monthGrid,children:[Array.from({length:_}).map((D,P)=>r.jsx("div",{},`pad${P}`)),M.map((D,P)=>{var ot,et;const G=P+1;if(p&&!C(D)){const Qe=E(D),tt=z(D),gt=(_+P)%7;return r.jsxs("div",{style:{position:"relative"},children:[tt[Qe]&&r.jsx("span",{style:{...H.chainLine,background:y,...gt===0?{left:"50%"}:{left:tt[Qe-1]?-6:"50%"},...gt===6?{right:"50%"}:{right:tt[Qe+1]?-6:"50%"}}}),r.jsx("div",{style:{...H.monthDay,...H.monthDayOff,width:"100%",position:"relative",zIndex:1},children:G})]},D)}const ne=m.has(D),ge=D>en,O=D===en,F=!!((ot=e.log_notes)!=null&&ot[D]),k=(e.type==="minimum"||e.type==="maximum")&&e.period==="day",ee=(et=e.log_counts)==null?void 0:et[D],me=ee!=null,Te=se(D),ct=Te&&!ne,Le=(_+P)%7;return r.jsxs("div",{style:{position:"relative"},children:[Te&&r.jsx("span",{style:{...H.chainLine,background:y,...Le===0?{left:"50%"}:{left:-6},...Le===6?{right:"50%"}:{right:-6}}}),p&&(()=>{const Qe=E(D),tt=z(D);return tt[Qe]?r.jsx("span",{style:{...H.chainLine,background:y,...Le===0?{left:"50%"}:{left:tt[Qe-1]?-6:"50%"},...Le===6?{right:"50%"}:{right:tt[Qe+1]?-6:"50%"}}}):null})(),r.jsx("button",{disabled:ge,onClick:()=>t(e,D),onMouseDown:()=>!k&&T(D),onMouseUp:oe,onTouchStart:()=>!k&&T(D),onTouchEnd:oe,style:{...H.monthDay,position:"relative",zIndex:1,...ne?{background:y,borderColor:y,color:"#fff"}:{},...ct?{background:A,borderColor:y,color:y}:{},...k&&me&&!ne?{borderColor:y,color:y}:{},...ge&&!ne?H.monthDayFuture:{},...O&&!ne?{borderColor:y,borderWidth:2}:{},width:"100%"},children:G}),k&&me&&r.jsx("span",{style:{...H.countBadge,background:ne?"#4C9A6B":y},children:ee}),F&&r.jsx("span",{style:H.noteIndicator}),l===D&&r.jsx(_y,{onEdit:i,onDelete:o,onAddNote:()=>Ce(D),onRemind:i,onClose:()=>a(null)})]},D)})]})]}),h&&r.jsxs("div",{style:H.noteBox,children:[r.jsxs("div",{style:{fontWeight:600,fontSize:13,marginBottom:6},children:["Note for ",h]}),r.jsx("textarea",{value:d,onChange:D=>c(D.target.value),placeholder:"Add a note for this day…",style:{...H.sideInput,minHeight:60,resize:"vertical"}}),r.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[r.jsxs("button",{onClick:()=>{s(h,d),x(null)},style:H.sideAddBtn,children:[r.jsx(We,{size:13})," Save"]}),r.jsx("button",{onClick:()=>x(null),style:H.sideCancelBtn,children:r.jsx(ze,{size:13})})]})]})]})}function _y({onEdit:e,onDelete:t,onAddNote:n,onRemind:o,onClose:i}){return r.jsxs("div",{style:H.longPressMenu,children:[r.jsxs("button",{style:H.menuItem,onClick:()=>{e(),i()},children:[r.jsx(bt,{size:13})," Edit"]}),r.jsxs("button",{style:H.menuItem,onClick:()=>{n(),i()},children:[r.jsx(mc,{size:13})," Add note"]}),r.jsxs("button",{style:H.menuItem,onClick:()=>{o(),i()},children:[r.jsx(Kb,{size:13})," Remind"]}),r.jsxs("button",{style:{...H.menuItem,color:"#C2536B"},onClick:()=>{t(),i()},children:[r.jsx(ze,{size:13})," Delete"]})]})}function Py({habits:e,onSave:t,onClose:n}){const[o,i]=g.useState([...e]),s=(l,a)=>{const d=[...o],c=l+a;c<0||c>=d.length||([d[l],d[c]]=[d[c],d[l]],i(d))};return r.jsx("div",{style:H.modalOverlay,onClick:n,children:r.jsxs("div",{style:{...H.modal,maxHeight:"80vh",overflow:"hidden"},onClick:l=>l.stopPropagation(),children:[r.jsxs("div",{style:{...H.modalHead,flexShrink:0},children:["Reorder Habits",r.jsx("button",{onClick:n,style:H.closeBtn,children:r.jsx(ze,{size:16})})]}),r.jsx("p",{style:{fontSize:12,color:"var(--text-3)",margin:"0 0 10px",flexShrink:0},children:"Use arrows to set the display order."}),r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6,overflowY:"auto",minHeight:0},children:o.map((l,a)=>{var c;const d=((c=Wn[l.pillar])==null?void 0:c.dot)||"#9A968C";return r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"9px 10px",background:"var(--bg)",borderRadius:9,border:"1px solid var(--border)"},children:[r.jsx("span",{style:{...H.sideDot,background:d}}),r.jsx("span",{style:{flex:1,fontSize:13,fontWeight:500},children:l.name}),r.jsx("button",{onClick:()=>s(a,-1),disabled:a===0,style:{...H.navBtn,width:28,height:28,opacity:a===0?.3:1,fontSize:14},children:"↑"}),r.jsx("button",{onClick:()=>s(a,1),disabled:a===o.length-1,style:{...H.navBtn,width:28,height:28,opacity:a===o.length-1?.3:1,fontSize:14},children:"↓"})]},l.id)})}),r.jsxs("button",{onClick:()=>t(o.map(l=>l.id)),style:{...H.sideAddBtn,width:"100%",marginTop:14,height:38,justifyContent:"center",flexShrink:0},children:[r.jsx(We,{size:14})," Save Order"]})]})})}function $y({year:e}){const[t,n]=g.useState([]);if(g.useEffect(()=>{$.getHabitsYearly(e).then(n).catch(console.error)},[e]),!t.length)return null;const o=Array.from({length:12},(s,l)=>{const a=t.reduce((c,h)=>{var x;return c+(((x=h.monthly[l+1])==null?void 0:x.done)||0)},0),d=t.reduce((c,h)=>{var x;return c+Math.floor((((x=h.monthly[l+1])==null?void 0:x.days)||30)/7*7)},0);return d>0?Math.round(a/d*100):0}),i=Math.max(...o,1);return r.jsxs("div",{style:{...H.monthCard,marginTop:18},children:[r.jsxs("div",{style:H.monthTitle,children:[e," Completion"]}),r.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:6,height:80,marginTop:12},children:o.map((s,l)=>r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[r.jsx("div",{style:{width:"100%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",height:`${s/i*60}px`,minHeight:2,opacity:s>0?1:.15},title:`${s}%`}),r.jsx("span",{style:{fontSize:9,color:"var(--text-3)",fontWeight:600},children:zy[l]})]},l))})]})}function vn({label:e,value:t,c:n,soft:o,flame:i}){return r.jsxs("div",{style:{...H.stat,background:o},children:[r.jsx("div",{style:H.statLabel,children:e}),r.jsxs("div",{style:{...H.statValue,color:n},children:[i&&r.jsx(zo,{size:15})," ",t]})]})}const H={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:230,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",padding:"20px 12px",display:"flex",flexDirection:"column",gap:3,overflowY:"auto"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.18)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)",boxShadow:"none"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.38)",zIndex:20},sideTop:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 4px"},closeBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",marginBottom:8},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700,padding:"0 6px 14px"},sideItem:{display:"flex",alignItems:"center",gap:9,width:"100%",border:"none",background:"none",padding:"9px 10px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:500,color:"var(--text-2)",textAlign:"left"},sideItemOn:{background:"var(--hover)",fontWeight:600},sideLabel:{flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},sideCount:{fontSize:11,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:10,padding:"1px 7px"},sideStreak:{display:"flex",alignItems:"center",gap:3,fontSize:11,fontWeight:600,color:"#C2773B"},sideDot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},sideDivider:{height:1,background:"var(--border)",margin:"8px 6px"},addBox:{padding:"10px 6px",display:"flex",flexDirection:"column",gap:6},sideInput:{border:"1px solid var(--border)",borderRadius:7,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},sideAddBtn:{border:"none",background:"#4C9A6B",color:"#fff",height:30,padding:"0 12px",borderRadius:7,cursor:"pointer",display:"flex",alignItems:"center",gap:5,fontSize:13,fontFamily:"inherit"},sideCancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:30,height:30,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},sideNewBtn:{display:"flex",alignItems:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",borderRadius:8,padding:"8px 10px",fontSize:12.5,color:"var(--text-3)",fontWeight:600,cursor:"pointer",fontFamily:"inherit",marginTop:6,justifyContent:"center"},main:{flex:1,padding:"26px",overflowX:"hidden",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:200},mainHead:{marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:5,display:"flex",alignItems:"center"},h1:{fontSize:27,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},actionBtn:{display:"flex",alignItems:"center",gap:5,fontSize:12,fontWeight:500,color:"var(--text-2)",border:"1px solid var(--border)",background:"var(--surface)",padding:"5px 10px",borderRadius:7,cursor:"pointer",fontFamily:"inherit"},progressCard:{background:"var(--surface)",borderRadius:12,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14,display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"},progressDivider:{width:1,alignSelf:"stretch",background:"var(--border)",minHeight:48},ringStat:{display:"flex",alignItems:"center",gap:12,flex:"1 1 160px"},ringBox:{position:"relative",width:70,height:70,display:"grid",placeItems:"center",flexShrink:0},ringPct:{position:"absolute",inset:0,display:"grid",placeItems:"center",fontSize:16,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},ringLabel:{fontSize:14,fontWeight:700,color:"var(--text)"},ringSub:{fontSize:11.5,color:"var(--text-3)",fontWeight:500,marginTop:2},weekCard:{background:"var(--surface)",borderRadius:12,padding:"8px 14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"auto"},weekHeadRow:{display:"flex",alignItems:"flex-end",padding:"10px 0",borderBottom:"1px solid var(--border)",minWidth:480,position:"relative",zIndex:0},weekNameCol:{width:160,flexShrink:0,alignSelf:"stretch",display:"flex",alignItems:"center",gap:8,position:"sticky",left:0,zIndex:5,background:"var(--surface)",boxShadow:"6px 0 6px -6px rgba(0,0,0,0.15)"},weekDayHead:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:2},weekDayName:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekDayNum:{fontSize:12,fontWeight:600,color:"var(--text-2)",width:22,height:22,display:"grid",placeItems:"center",borderRadius:"50%"},weekDayToday:{background:"var(--accent-strong)",color:"#fff"},weekStreakCol:{width:64,flexShrink:0,textAlign:"center",fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekRow:{display:"flex",alignItems:"center",padding:"9px 0",borderBottom:"1px solid #F4F2EC",minWidth:480,position:"relative",zIndex:0},weekHabitName:{fontSize:13,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},weekCell:{flex:1,display:"grid",placeItems:"center"},typeBadge:{fontSize:10,color:"var(--text-3)",background:"var(--hover)",padding:"1px 6px",borderRadius:8,fontWeight:600},tick:{width:26,height:26,borderRadius:7,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",padding:0},tickFuture:{opacity:.4,cursor:"not-allowed",borderStyle:"dashed"},streakPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:12,fontWeight:700,padding:"3px 9px",borderRadius:12},tinyBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:"2px 3px",display:"grid",placeItems:"center",borderRadius:4},statStrip:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(120px,1fr))",gap:10,marginBottom:18},stat:{borderRadius:10,padding:"13px 14px"},statLabel:{fontSize:11,fontWeight:600,color:"var(--text-2)",marginBottom:5},statValue:{fontSize:19,fontWeight:700,display:"flex",alignItems:"center",gap:5,fontFamily:"'Fraunces',Georgia,serif"},monthCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},monthTitle:{fontSize:14,fontWeight:700,marginBottom:12,fontFamily:"'Fraunces',Georgia,serif"},monthDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6,marginBottom:8},monthDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},monthGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6},monthDay:{aspectRatio:"1",border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",display:"grid",placeItems:"center"},monthDayFuture:{opacity:.4,cursor:"not-allowed",background:"var(--surface-2)"},monthDayOff:{background:"var(--surface-2)",borderStyle:"dashed",color:"var(--text-3)",opacity:.5,cursor:"default"},dayPick:{display:"flex",gap:4,flexWrap:"wrap"},dayChip:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",borderRadius:7,padding:"5px 7px",fontSize:11,fontWeight:700,cursor:"pointer",fontFamily:"inherit",minWidth:34},dayChipOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},pickHint:{fontSize:11,color:"var(--text-3)",fontWeight:600},offDay:{color:"var(--text-3)",opacity:.4,fontSize:18,lineHeight:1,userSelect:"none"},noteIndicator:{position:"absolute",top:3,right:3,width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},cellNoteBubble:{position:"absolute",top:2,right:"calc(50% - 16px)",width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},countBadge:{position:"absolute",bottom:2,right:2,minWidth:13,height:13,padding:"0 2px",borderRadius:7,color:"#fff",fontSize:9,fontWeight:700,display:"grid",placeItems:"center",lineHeight:1},counterBtn:{width:44,height:44,borderRadius:"50%",border:"1.5px solid var(--border)",background:"var(--surface)",color:"var(--text)",fontSize:24,fontWeight:700,cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit",lineHeight:1},chainLine:{position:"absolute",top:"calc(50% - 3px)",left:0,right:0,height:6,zIndex:0,opacity:.9},chainBanner:{display:"flex",alignItems:"center",gap:8,borderRadius:10,padding:"10px 14px",marginBottom:14,fontSize:12.5,fontWeight:700,fontFamily:"'Inter',system-ui,sans-serif"},navBar:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:16},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},navLabel:{fontSize:13,fontWeight:700,color:"var(--text)",minWidth:180,textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},noteBox:{background:"var(--surface)",borderRadius:10,padding:14,marginTop:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},longPressMenu:{position:"absolute",top:"100%",left:0,zIndex:50,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 4px 16px rgba(0,0,0,0.12)",padding:"4px 0",minWidth:140},menuItem:{display:"flex",alignItems:"center",gap:8,width:"100%",border:"none",background:"none",padding:"8px 14px",fontSize:13,color:"var(--text)",cursor:"pointer",fontFamily:"inherit",textAlign:"left"},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",zIndex:100,display:"grid",placeItems:"center"},modal:{background:"var(--surface)",borderRadius:14,padding:24,width:320,maxWidth:"90vw",display:"flex",flexDirection:"column",gap:8},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",fontWeight:700,fontSize:16,fontFamily:"'Fraunces',Georgia,serif",marginBottom:6},modalLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.08em",marginTop:4}},gd=[{id:1,label:"Rough",emoji:"😣",color:"#C2536B"},{id:2,label:"Low",emoji:"🙁",color:"#C2773B"},{id:3,label:"Okay",emoji:"😐",color:"#C9A227"},{id:4,label:"Good",emoji:"🙂",color:"#4C9A6B"},{id:5,label:"Great",emoji:"😄",color:"#3A7CA5"}],Oy=e=>gd.find(t=>t.id===e),ea=[{id:"wins",label:"Wins",hint:"What went well today?",icon:Hr,color:"#C9A227"},{id:"grateful",label:"Grateful for",hint:"1–3 things",icon:Zb,color:"#C2536B"},{id:"mattered",label:"What mattered",hint:"The point of today",icon:yc,color:"#3A7CA5"},{id:"letgo",label:"Letting go of",hint:"Offload what's draining",icon:gy,color:"#8268B0"},{id:"tomorrow",label:"Tomorrow's one thing",hint:"A single priority",icon:ny,color:"#4C9A6B"}],hm=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,Ny=()=>hm(new Date),ta=e=>new Date(e+"T00:00:00").toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long",year:"numeric"});function Hy(){const e=Ny(),[t,n]=[new Date().getFullYear(),new Date().getMonth()+1],[o,i]=g.useState(null),s=o||e,l=s===e,[a,d]=g.useState(null),[c,h]=g.useState({}),[x,f]=g.useState(Object.fromEntries(ea.map(B=>[B.id,""]))),R=g.useCallback(async B=>{const W=await $.getJournalEntry(B);d(W)},[]);g.useCallback(async()=>{const B=await $.getJournalHistory(t,n);h(B)},[t,n]);const S=g.useCallback(async()=>{const[B,W]=await Promise.all([$.getJournalEntry(s),$.getJournalHistory(t,n)]);d(B),h(W)},[s,t,n]);g.useEffect(()=>{S()},[S]);const y=async B=>{l&&(await $.updateJournalMood(s,B),S())},A=async B=>{if(!l)return;const W=x[B].trim();W&&(await $.addJournalBullet(s,B,W),f(j=>({...j,[B]:""})),R(s))},m=async B=>{await $.deleteJournalBullet(B),R(s)},p=B=>{i(B===e?null:B),f(Object.fromEntries(ea.map(W=>[W.id,""])))};if(!a)return r.jsx("div",{style:{padding:28,color:"var(--text-3)"},children:"Loading…"});const b=a.mood!==null,E=(()=>{let B=0;const W=new Date(e);if(c[e]||l&&b)B=1,W.setDate(W.getDate()-1);else return 0;for(;;){const J=hm(W);if(c[J])B++,W.setDate(W.getDate()-1);else break}return B})(),C=Object.values(a.bullets||{}).reduce((B,W)=>B+W.length,0),z=new Date(t,n,0).getDate(),M=new Date(t,n-1,1).getDay(),_=M===0?6:M-1;return r.jsxs("div",{style:$e.page,children:[r.jsxs("div",{style:$e.head,children:[r.jsxs("div",{children:[r.jsx("div",{style:$e.eyebrow,children:"Anvil · Journal"}),!l&&r.jsxs("button",{style:$e.backBtn,onClick:()=>i(null),children:[r.jsx(fn,{size:14})," Back to Today"]}),r.jsx("h1",{style:$e.h1,children:l?"Today":ta(s)}),l&&r.jsx("div",{style:$e.date,children:ta(e)})]}),r.jsxs("div",{style:$e.streakBox,children:[r.jsx(zo,{size:16,color:"#C2773B"}),r.jsx("span",{style:$e.streakNum,children:E}),r.jsx("span",{style:$e.streakLabel,children:"day streak"})]})]}),r.jsxs("div",{style:$e.card,children:[r.jsxs("div",{style:$e.cardTitle,children:["How ",l?"are":"were"," you?"]}),r.jsx("div",{style:$e.moodRow,children:gd.map(B=>{const W=a.mood===B.id;return r.jsxs("button",{onClick:()=>y(B.id),disabled:!l,style:{...$e.moodBtn,cursor:l?"pointer":"default",...W?{background:B.color,borderColor:B.color,transform:"translateY(-2px)"}:{},...!l&&!W?{opacity:.55}:{}},children:[r.jsx("span",{style:$e.moodEmoji,children:B.emoji}),r.jsx("span",{style:{...$e.moodLabel,color:W?"#fff":"#6B675E"},children:B.label})]},B.id)})})]}),ea.map(B=>{var J;const W=B.icon,j=((J=a.bullets)==null?void 0:J[B.id])||[];return r.jsxs("div",{style:$e.card,children:[r.jsxs("div",{style:$e.sectionHead,children:[r.jsx("span",{style:{...$e.sectionIcon,background:`${B.color}1A`,color:B.color},children:r.jsx(W,{size:15})}),r.jsxs("div",{children:[r.jsx("div",{style:$e.cardTitle,children:B.label}),r.jsx("div",{style:$e.sectionHint,children:B.hint})]})]}),r.jsxs("ul",{style:$e.bulletList,children:[j.map(I=>r.jsxs("li",{style:$e.bullet,children:[r.jsx("span",{style:{...$e.bulletDot,background:B.color}}),r.jsx("span",{style:$e.bulletText,children:I.text}),l&&r.jsx("button",{onClick:()=>m(I.id),style:$e.bulletDel,children:r.jsx(ze,{size:13})})]},I.id)),!l&&j.length===0&&r.jsx("li",{style:$e.sectionHint,children:"Nothing written."})]}),l&&r.jsxs("div",{style:$e.addRow,children:[r.jsx("input",{placeholder:"Add a point…",value:x[B.id],onChange:I=>f(re=>({...re,[B.id]:I.target.value})),onKeyDown:I=>I.key==="Enter"&&A(B.id),style:$e.input}),r.jsx("button",{onClick:()=>A(B.id),style:{...$e.addBtn,background:B.color},children:r.jsx(Ke,{size:16})})]})]},B.id)}),r.jsxs("div",{style:$e.card,children:[r.jsxs("div",{style:$e.cardTitle,children:[new Date(t,n-1).toLocaleDateString("en-US",{month:"long",year:"numeric"})," · Mood history",r.jsx("span",{style:{fontSize:11,color:"var(--text-3)",fontWeight:400,marginLeft:8},children:"tap a day to view"})]}),r.jsx("div",{style:$e.calDow,children:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(B=>r.jsx("div",{style:$e.calDowCell,children:B},B))}),r.jsxs("div",{style:$e.calGrid,children:[Array.from({length:_}).map((B,W)=>r.jsx("div",{},`p${W}`)),Array.from({length:z},(B,W)=>W+1).map(B=>{const W=`${t}-${String(n).padStart(2,"0")}-${String(B).padStart(2,"0")}`,j=W===e&&a.mood?a.mood:c[W],J=j?Oy(j):null,I=W>e,re=W===s;return r.jsx("button",{onClick:()=>!I&&p(W),disabled:I,style:{...$e.calDay,background:J?J.color:I?"var(--surface-2)":"var(--surface)",borderColor:re?"var(--accent-strong)":"var(--border)",borderWidth:re?2:1,color:J?"#fff":"var(--text-3)",opacity:I?.5:1,cursor:I?"not-allowed":"pointer",outline:re?"2px solid var(--accent-strong)":"none",outlineOffset:1},title:J?J.label:W,children:J?J.emoji:B},B)})]}),r.jsx("div",{style:$e.legend,children:gd.map(B=>r.jsxs("span",{style:$e.legendItem,children:[r.jsx("span",{style:{...$e.legendDot,background:B.color}})," ",B.label]},B.id))})]}),r.jsx("div",{style:$e.footer,children:l?b?`Mood set · ${C} point${C===1?"":"s"} written today`:"Tap a mood to log today and keep your streak":`Viewing ${ta(s)} · past entries are read-only`})]})}const $e={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:22},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},backBtn:{display:"inline-flex",alignItems:"center",gap:4,border:"none",background:"none",color:"#3A7CA5",fontSize:12.5,fontWeight:600,cursor:"pointer",padding:"0 0 6px",fontFamily:"inherit"},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},date:{fontSize:13,color:"var(--text-3)",marginTop:4},streakBox:{display:"flex",alignItems:"center",gap:6,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"8px 14px"},streakNum:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"#C2773B"},streakLabel:{fontSize:11,color:"var(--text-3)",fontWeight:500},card:{background:"var(--surface)",borderRadius:12,padding:"18px 20px",marginBottom:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},cardTitle:{fontSize:14,fontWeight:700,marginBottom:12,color:"var(--text)"},moodRow:{display:"flex",gap:8,flexWrap:"wrap"},moodBtn:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,border:"2px solid var(--border)",background:"var(--surface)",borderRadius:10,padding:"10px 12px",cursor:"pointer",flex:"1 1 60px",transition:"transform 0.1s"},moodEmoji:{fontSize:22},moodLabel:{fontSize:11,fontWeight:600},sectionHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:10},sectionIcon:{width:32,height:32,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},sectionHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},bulletList:{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6,marginBottom:10},bullet:{display:"flex",alignItems:"center",gap:8,fontSize:13.5,lineHeight:1.4},bulletDot:{width:6,height:6,borderRadius:"50%",flexShrink:0},bulletText:{flex:1},bulletDel:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},addRow:{display:"flex",gap:8},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 12px",fontSize:13.5,fontFamily:"inherit",outline:"none"},addBtn:{width:36,height:36,border:"none",borderRadius:8,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:12},calDay:{aspectRatio:"1",border:"1px solid var(--border)",borderRadius:7,fontSize:13,display:"grid",placeItems:"center",fontWeight:500,fontFamily:"inherit"},legend:{display:"flex",gap:10,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)"},legendDot:{width:8,height:8,borderRadius:"50%",display:"inline-block"},footer:{fontSize:12.5,color:"var(--text-3)",textAlign:"center",marginTop:8,fontStyle:"italic"}};function Gy(e=760){const[t,n]=g.useState(()=>window.innerWidth<e);return g.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),t}const gr=[{id:"D",label:"Data",color:"#3A7CA5",soft:"rgba(58,124,165,0.10)",prompt:"What did you read/watch? Log the raw source and a quick note.",hint:"e.g. 'Atomic Habits ch.1 — habits are systems not goals'"},{id:"I",label:"Information",color:"#8268B0",soft:"rgba(130,104,176,0.10)",prompt:"What did you actually understand from it? In your own words.",hint:"e.g. 'Small 1% improvements compound into massive change over time'"},{id:"K",label:"Knowledge",color:"#C9A227",soft:"rgba(201,162,39,0.10)",prompt:"How will this specifically improve your life? Connect it to your goals.",hint:"e.g. 'I will improve my morning workout habit by 1% each week'"},{id:"W",label:"Wisdom",color:"#4C9A6B",soft:"rgba(76,154,107,0.10)",prompt:"How have you implemented it? What changed?",hint:"e.g. 'I've not missed a workout in 3 weeks using the 1% rule'"}],eu=e=>gr.findIndex(t=>t.id===e),ud=[{id:"book",label:"Book",icon:bc},{id:"video",label:"Video",icon:uy},{id:"article",label:"Article",icon:mc}],tu=e=>ud.find(t=>t.id===e)||ud[0],ra={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"};function Uy(){var O;const[e,t]=g.useState([]),[n,o]=g.useState(null),[i,s]=g.useState("ALL"),[l,a]=g.useState(!1),[d,c]=g.useState(null),[h,x]=g.useState({title:"",type:"book",pillar:"Academic",note:""}),[f,R]=g.useState({}),[S,y]=g.useState(null),[A,m]=g.useState(null),[p,b]=g.useState({}),[E,C]=g.useState({}),[z,M]=g.useState(null),_=Gy(),B=g.useCallback(async()=>{try{const F=await $.getSkills();t(F);const k={};F.forEach(ee=>{k[ee.id]=Object.fromEntries(gr.map(me=>[me.id,""]))}),R(ee=>{const me={...k};return F.forEach(Te=>{ee[Te.id]&&(me[Te.id]={...k[Te.id],...ee[Te.id]})}),me})}catch(F){console.error(F)}},[]);g.useEffect(()=>{B()},[B]);const W=e.find(F=>F.id===n),j=W?eu(W.stage):-1,J=async(F,k)=>{var me;const ee=(((me=f[F])==null?void 0:me[k])??"").trim();ee&&(await $.addSkillNote(F,k,ee),R(Te=>({...Te,[F]:{...Te[F],[k]:""}})),B())},I=async F=>{await $.deleteSkillNote(F),B()},re=F=>(F==null?void 0:F.source_type)==="book"?"Chapter":"Learning",ue=()=>`g${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,de=async F=>{const k=[...F.data_groups||[]];k.push({id:ue(),label:`${re(F)} ${k.length+1}`}),await $.setSkillGroups(F.id,k),C(ee=>({...ee,[k[k.length-1].id]:!0})),B()},ye=async(F,k,ee)=>{const me=(F.data_groups||[]).map(Te=>Te.id===k?{...Te,label:ee}:Te);await $.setSkillGroups(F.id,me),B()},q=async(F,k)=>{const ee=(F.data_groups||[]).filter(me=>me.id!==k);await $.setSkillGroups(F.id,ee),B()},N=async(F,k)=>{const ee=(p[k]??"").trim();ee&&(await $.addSkillNote(F.id,"D",ee,k),b(me=>({...me,[k]:""})),B())},se=async()=>{!W||!(A!=null&&A.trim())||(await $.updateSkill(W.id,{title:A.trim()}),m(null),B())},Y=async()=>{!S||!S.text.trim()||(await $.updateSkillNote(S.id,S.text.trim()),y(null),B())},le=async F=>{await $.toggleSkillNote(F),B()},T=async(F,k)=>{e.find(me=>me.id===F)&&(k==="W"&&c(F),await $.completeSkillStage(F,k),B())},oe=async()=>{if(!h.title.trim())return;const F=await $.createSkill({pillar:h.pillar,title:h.title.trim(),source_type:h.type,note_d:h.note.trim()});a(!1),x({title:"",type:"book",pillar:"Academic",note:""}),o(F.id),B()},{deleteItem:Ce,toasts:V,handleUndo:v,handleDismiss:D}=Ht($.deleteSkill,$.restoreSkill,B),P=(F,k="Skill")=>{n===F&&o(null),Ce(F,k)},G=i==="ALL"?e:e.filter(F=>F.stage===i),ne=e.filter(F=>F.stage==="W").length,ge=!!W;return r.jsxs("div",{style:ae.page,children:[d&&r.jsx("div",{style:ae.celebOverlay,children:r.jsxs("div",{style:ae.celebBox,children:[r.jsx("div",{style:ae.celebEmoji,children:"🏆"}),r.jsx("div",{style:ae.celebTitle,children:"Wisdom unlocked!"}),r.jsx("div",{style:ae.celebSub,children:"You've implemented this knowledge — that's rare and real."}),r.jsx("button",{onClick:()=>c(null),style:ae.celebBtn,children:"Continue"})]})}),r.jsxs("div",{style:ae.head,children:[r.jsxs("div",{children:[r.jsx("div",{style:ae.eyebrow,children:"Anvil · Skills"}),r.jsx("h1",{style:ae.h1,children:"DIKW Skills"}),r.jsx("div",{style:ae.subhead,children:"Data → Information → Knowledge → Wisdom"})]}),r.jsxs("div",{style:ae.headRight,children:[r.jsxs("div",{style:ae.wisdomBadge,children:[r.jsx(Hr,{size:14,color:"#C9A227"})," ",ne," Wisdom",ne!==1?"s":""]}),r.jsxs("button",{onClick:()=>{a(!0),o(null)},style:ae.addSkillBtn,children:[r.jsx(Ke,{size:15})," Add skill"]})]})]}),r.jsx("div",{style:ae.filterBar,children:["ALL",...gr.map(F=>F.id)].map(F=>{const k=gr.find(me=>me.id===F),ee=i===F;return r.jsx("button",{onClick:()=>s(F),style:{...ae.filterBtn,...ee?{background:k?k.color:"var(--accent-strong)",color:"#fff",borderColor:"transparent"}:{}},children:k?`${F} · ${k.label}`:"All"},F)})}),r.jsxs("div",{style:{...ae.layout,gridTemplateColumns:!_&&ge?"minmax(0,1fr) minmax(0,1fr)":"1fr"},children:[(!_||!W)&&r.jsxs("div",{style:{...ae.cardList,gridTemplateColumns:_||ge?"1fr":"repeat(3, minmax(0, 1fr))"},children:[l&&r.jsxs("div",{style:{...ae.skillCard,border:"2px dashed #3A7CA5",gridColumn:"1 / -1"},children:[r.jsx("div",{style:ae.cardTitle,children:"New skill"}),r.jsx("input",{placeholder:"Title (book / video / article name)",value:h.title,onChange:F=>x(k=>({...k,title:F.target.value})),onKeyDown:F=>F.key==="Enter"&&oe(),style:ae.input,autoFocus:!0}),r.jsxs("div",{style:ae.addRow,children:[r.jsx("select",{value:h.type,onChange:F=>x(k=>({...k,type:F.target.value})),style:ae.select,children:ud.map(F=>r.jsx("option",{value:F.id,children:F.label},F.id))}),r.jsx("select",{value:h.pillar,onChange:F=>x(k=>({...k,pillar:F.target.value})),style:ae.select,children:Object.keys(ra).map(F=>r.jsx("option",{children:F},F))})]}),r.jsxs("div",{style:ae.addRow,children:[r.jsxs("button",{onClick:oe,style:ae.saveBtn,children:[r.jsx(We,{size:14})," Save"]}),r.jsxs("button",{onClick:()=>a(!1),style:ae.cancelBtn,children:[r.jsx(ze,{size:14})," Cancel"]})]})]}),G.map(F=>{const k=eu(F.stage),ee=gr[k],me=tu(F.source_type),Te=F.stage==="W",ct=n===F.id;return r.jsxs("div",{onClick:()=>o(ct?null:F.id),style:{...ae.skillCard,...ct?{borderColor:ee.color,borderWidth:2}:{},...Te?{background:"rgba(76,154,107,0.05)"}:{}},children:[r.jsxs("div",{style:ae.skillCardTop,children:[r.jsxs("div",{style:ae.skillMeta,children:[r.jsx("span",{style:{color:ra[F.pillar]},children:r.jsx(me.icon,{size:13})}),r.jsx("span",{style:{...ae.pillarDot,background:ra[F.pillar]}}),r.jsxs("span",{style:ae.srcLabel,children:[me.label," · ",F.pillar]})]}),r.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[Te&&r.jsx(To,{size:14,color:"#4C9A6B"}),r.jsx("button",{onClick:Le=>{Le.stopPropagation(),P(F.id,F.title)},style:ae.ghostBtn,children:r.jsx(ze,{size:13})})]})]}),r.jsx("div",{style:ae.skillTitle,children:F.title}),r.jsxs("div",{style:ae.track,children:[gr.map((Le,ot)=>{var gt;const et=ot<k,Qe=ot===k,tt=(gt=F.completed_stages)==null?void 0:gt[Le.id];return r.jsxs("div",{style:{...ae.trackItem,...ot<gr.length-1?{flex:1}:{}},children:[r.jsxs("div",{style:{...ae.trackDot,background:et||tt||Qe?Le.color:"var(--border)",boxShadow:Qe?`0 0 0 3px ${Le.color}33`:"none"},children:[(et||Qe&&tt)&&r.jsx(We,{size:9,color:"#fff",strokeWidth:3}),Qe&&!tt&&r.jsx("span",{style:ae.trackCurrent,children:Le.id}),!et&&!Qe&&r.jsx(Gg,{size:8,color:"#B5B1A7"})]}),ot<gr.length-1&&r.jsx("div",{style:{...ae.trackLine,background:et?gr[ot+1].color:"var(--border)"}})]},Le.id)}),r.jsx("span",{style:{...ae.stageTag,background:ee.soft,color:ee.color},children:ee.label})]})]},F.id)}),G.length===0&&!l&&r.jsx("div",{style:{...ae.empty,gridColumn:"1 / -1"},children:"No skills at this stage yet."})]}),W&&r.jsxs("div",{style:ae.detail,children:[r.jsxs("div",{style:ae.detailHead,children:[_&&r.jsx("button",{onClick:()=>{o(null),m(null)},style:ae.backBtn,title:"Back to skills",children:r.jsx(fn,{size:18})}),r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsxs("div",{style:ae.eyebrow,children:[tu(W.source_type).label," · ",W.pillar]}),A!==null?r.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",marginTop:4},children:[r.jsx("input",{autoFocus:!0,value:A,onChange:F=>m(F.target.value),onKeyDown:F=>{F.key==="Enter"&&se(),F.key==="Escape"&&m(null)},style:{...ae.input,fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:0,flex:1}}),r.jsx("button",{onClick:se,style:{...ae.noteAddBtn,background:"#4C9A6B",width:30,height:30},children:r.jsx(We,{size:13})}),r.jsx("button",{onClick:()=>m(null),style:{...ae.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:30,height:30},children:r.jsx(ze,{size:13})})]}):r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx("div",{style:ae.detailTitle,children:W.title}),r.jsx("button",{onClick:()=>m(W.title),style:ae.ghostBtn,title:"Edit name",children:r.jsx(bt,{size:13})})]})]}),r.jsx("button",{onClick:()=>{o(null),m(null)},style:ae.closeBtn,children:r.jsx(ze,{size:16})})]}),gr.map((F,k)=>{var et,Qe,tt;const ee=k<=j,me=k===j,Te=k<j||((et=W.completed_stages)==null?void 0:et[F.id]),ct=k>j,Le=((Qe=W.notes)==null?void 0:Qe[F.id])||[],ot=((tt=f[W.id])==null?void 0:tt[F.id])??"";return r.jsxs("div",{style:{...ae.stageBlock,...ee?{borderColor:F.color}:{},opacity:ct?.45:1},children:[r.jsxs("div",{style:ae.stageBlockHead,children:[r.jsx("div",{style:{...ae.stageLetter,background:ee?F.color:"var(--border)",color:ee?"#fff":"#9A968C"},children:Te&&!me?r.jsx(We,{size:12,color:"#fff",strokeWidth:3}):ct?r.jsx(Gg,{size:11,color:"#9A968C"}):F.id}),r.jsxs("div",{style:{flex:1},children:[r.jsx("div",{style:{...ae.stageName,color:ee?F.color:"#9A968C"},children:F.label}),ee&&r.jsx("div",{style:ae.stagePrompt,children:F.prompt})]}),Te&&!me&&r.jsx("span",{style:{...ae.doneBadge,color:F.color,background:F.soft},children:"Done"})]}),ee&&(()=>{var Fe,Me;const gt=F.id==="W",Yr=F.id==="D",Ut=Le.length>0&&Le.every(je=>je.done),Rt=gt?Ut:Le.length>0,er=W.data_groups||[],yr=Le.filter(je=>!je.grp),u=re(W),Z=je=>r.jsxs("li",{style:ae.noteItem,children:[r.jsx("span",{style:{...ae.noteDot,background:F.color}}),(S==null?void 0:S.id)===je.id?r.jsxs("div",{style:{flex:1,display:"flex",gap:5},children:[r.jsx("input",{autoFocus:!0,value:S.text,onChange:_e=>y(St=>({...St,text:_e.target.value})),onKeyDown:_e=>{_e.key==="Enter"&&Y(),_e.key==="Escape"&&y(null)},style:{...ae.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}),r.jsx("button",{onClick:Y,style:{...ae.noteAddBtn,background:F.color,width:28,height:28},children:r.jsx(We,{size:12})}),r.jsx("button",{onClick:()=>y(null),style:{...ae.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:28,height:28},children:r.jsx(ze,{size:12})})]}):r.jsx("span",{style:ae.noteText,children:je.text}),(S==null?void 0:S.id)!==je.id&&r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:()=>y({id:je.id,text:je.text}),style:ae.ghostBtn,children:r.jsx(bt,{size:12})}),r.jsx("button",{onClick:()=>I(je.id),style:ae.ghostBtn,children:r.jsx(ze,{size:12})})]})]},je.id);return r.jsxs(r.Fragment,{children:[Yr?r.jsxs(r.Fragment,{children:[yr.length>0&&r.jsx("ul",{style:ae.noteList,children:yr.map(Z)}),er.map(je=>{const _e=Le.filter(At=>At.grp===je.id),St=E[je.id]!==!1;return r.jsxs("div",{style:{...ae.groupBox,borderColor:`${F.color}55`},children:[r.jsxs("div",{style:ae.groupHead,children:[r.jsx("button",{onClick:()=>C(At=>({...At,[je.id]:!St})),style:ae.groupCaret,children:St?r.jsx(Wi,{size:15}):r.jsx(Ur,{size:15})}),W.source_type==="book"?r.jsx(bc,{size:13,color:F.color}):r.jsx(Ox,{size:13,color:F.color}),(z==null?void 0:z.id)===je.id?r.jsx("input",{autoFocus:!0,value:z.label,onChange:At=>M(Pn=>({...Pn,label:At.target.value})),onKeyDown:At=>{At.key==="Enter"&&(ye(W,je.id,z.label.trim()||je.label),M(null)),At.key==="Escape"&&M(null)},onBlur:()=>{ye(W,je.id,z.label.trim()||je.label),M(null)},style:{...ae.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}):r.jsx("span",{style:ae.groupTitle,onClick:()=>M({id:je.id,label:je.label}),title:"Click to rename",children:je.label}),r.jsx("span",{style:ae.groupCount,children:_e.length}),r.jsx("button",{onClick:()=>q(W,je.id),style:ae.ghostBtn,title:`Delete ${u.toLowerCase()}`,children:r.jsx(ze,{size:13})})]}),St&&r.jsxs("div",{style:ae.groupBody,children:[_e.length>0&&r.jsx("ul",{style:ae.noteList,children:_e.map(Z)}),r.jsxs("div",{style:ae.noteAddRow,children:[r.jsx("input",{placeholder:"Add a point…",value:p[je.id]??"",onChange:At=>b(Pn=>({...Pn,[je.id]:At.target.value})),onKeyDown:At=>At.key==="Enter"&&N(W,je.id),style:ae.noteInput}),r.jsx("button",{onClick:()=>N(W,je.id),style:{...ae.noteAddBtn,background:F.color},children:r.jsx(Ke,{size:14})})]})]})]},je.id)}),er.length===0&&yr.length===0&&r.jsxs("div",{style:ae.noNotes,children:["No ",u.toLowerCase(),"s yet — add one to start logging points."]}),r.jsxs("button",{onClick:()=>de(W),style:{...ae.addGroupBtn,color:F.color,borderColor:`${F.color}80`},children:[r.jsx(Ke,{size:14})," Add ",u.toLowerCase()]})]}):r.jsxs(r.Fragment,{children:[Le.length>0&&r.jsx("ul",{style:ae.noteList,children:Le.map(je=>r.jsxs("li",{style:ae.noteItem,children:[gt?r.jsx("button",{onClick:()=>le(je.id),style:{...ae.checkBox,...je.done?{background:F.color,borderColor:F.color}:{}},children:je.done&&r.jsx(We,{size:11,color:"#fff",strokeWidth:3})}):r.jsx("span",{style:{...ae.noteDot,background:F.color}}),(S==null?void 0:S.id)===je.id?r.jsxs("div",{style:{flex:1,display:"flex",gap:5},children:[r.jsx("input",{autoFocus:!0,value:S.text,onChange:_e=>y(St=>({...St,text:_e.target.value})),onKeyDown:_e=>{_e.key==="Enter"&&Y(),_e.key==="Escape"&&y(null)},style:{...ae.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}),r.jsx("button",{onClick:Y,style:{...ae.noteAddBtn,background:F.color,width:28,height:28},children:r.jsx(We,{size:12})}),r.jsx("button",{onClick:()=>y(null),style:{...ae.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:28,height:28},children:r.jsx(ze,{size:12})})]}):r.jsx("span",{style:{...ae.noteText,...gt&&je.done?{textDecoration:"line-through",color:"var(--text-3)"}:{}},children:je.text}),(S==null?void 0:S.id)!==je.id&&r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:()=>y({id:je.id,text:je.text}),style:ae.ghostBtn,children:r.jsx(bt,{size:12})}),r.jsx("button",{onClick:()=>I(je.id),style:ae.ghostBtn,children:r.jsx(ze,{size:12})})]})]},je.id))}),Le.length===0&&r.jsx("div",{style:ae.noNotes,children:gt?"Add the steps to implement this — check each off as you do it.":`No notes yet — ${F.hint}`}),r.jsxs("div",{style:ae.noteAddRow,children:[r.jsx("input",{placeholder:gt?"Add a step to implement…":`Add a ${F.label} note…`,value:ot,onChange:je=>R(_e=>({..._e,[W.id]:{..._e[W.id],[F.id]:je.target.value}})),onKeyDown:je=>je.key==="Enter"&&J(W.id,F.id),style:ae.noteInput}),r.jsx("button",{onClick:()=>J(W.id,F.id),style:{...ae.noteAddBtn,background:F.color},children:r.jsx(Ke,{size:14})})]})]}),me&&!((Fe=W.completed_stages)!=null&&Fe[F.id])&&r.jsxs(r.Fragment,{children:[gt&&Le.length>0&&!Ut&&r.jsxs("div",{style:ae.checklistHint,children:[Le.filter(je=>je.done).length,"/",Le.length," done — check all steps to complete Wisdom"]}),r.jsxs("button",{onClick:()=>T(W.id,F.id),disabled:!Rt,style:{...ae.advanceBtn,background:Rt?F.color:"#C3BFB5",marginTop:10,cursor:Rt?"pointer":"not-allowed"},children:[r.jsx(We,{size:14}),gt?"Mark Wisdom complete":`Complete ${F.label} → ${(Me=gr[k+1])==null?void 0:Me.label}`]})]})]})})()]},F.id)}),W.stage==="W"&&((O=W.completed_stages)==null?void 0:O.W)&&r.jsxs("div",{style:ae.wisdomDone,children:[r.jsx(Hr,{size:16,color:"#4C9A6B"})," Wisdom achieved — implemented in your life"]})]})]}),r.jsx(Gt,{toasts:V,onUndo:v,onDismiss:D})]})}const ae={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box",position:"relative"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},headRight:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},wisdomBadge:{display:"flex",alignItems:"center",gap:5,background:"rgba(201,162,39,0.12)",border:"1px solid rgba(201,162,39,0.3)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:700,color:"#8A6E1A"},addSkillBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},filterBar:{display:"flex",gap:6,flexWrap:"wrap",marginBottom:16},filterBtn:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},layout:{display:"grid",gap:12,alignItems:"start"},cardList:{display:"grid",gap:10,alignContent:"start"},skillCard:{background:"var(--surface)",borderRadius:12,padding:"16px",border:"1.5px solid var(--border)",cursor:"pointer",boxShadow:"0 1px 2px rgba(0,0,0,0.04)",minWidth:0,overflow:"hidden",boxSizing:"border-box"},skillCardTop:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:8,marginBottom:6},skillMeta:{display:"flex",alignItems:"center",gap:6,minWidth:0},pillarDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},srcLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},skillTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em",marginBottom:12,lineHeight:1.3,wordBreak:"break-word"},cardTitle:{fontSize:13,fontWeight:700,marginBottom:10},track:{display:"flex",alignItems:"center",minWidth:0},trackItem:{display:"flex",alignItems:"center",minWidth:0},trackDot:{width:22,height:22,borderRadius:"50%",display:"grid",placeItems:"center",flexShrink:0},trackCurrent:{fontSize:9,fontWeight:800,color:"#fff"},trackLine:{flex:1,minWidth:8,height:3,borderRadius:2,margin:"0 2px"},stageTag:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:12,marginLeft:8,flexShrink:0,whiteSpace:"nowrap"},detail:{background:"var(--surface)",borderRadius:14,padding:"18px 16px",boxShadow:"0 1px 4px rgba(0,0,0,0.07)",border:"1.5px solid var(--border)",alignSelf:"start"},detailHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16},detailTitle:{fontSize:18,fontWeight:700,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},backBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,marginRight:4},groupBox:{border:"1.5px solid var(--border)",borderRadius:9,marginBottom:8,overflow:"hidden",background:"var(--bg)"},groupHead:{display:"flex",alignItems:"center",gap:7,padding:"8px 10px"},groupCaret:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",display:"grid",placeItems:"center",padding:0,width:18,height:18,flexShrink:0},groupTitle:{flex:1,minWidth:0,fontSize:13,fontWeight:700,color:"var(--text)",cursor:"text",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},groupCount:{fontSize:10.5,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 7px",flexShrink:0},groupBody:{padding:"0 10px 10px 10px"},addGroupBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1.5px dashed",background:"none",padding:"9px 12px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:2},stageBlock:{border:"1.5px solid var(--border)",borderRadius:10,padding:"12px 13px",marginBottom:10},stageBlockHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:8},stageLetter:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",fontSize:13,fontWeight:800,flexShrink:0},stageName:{fontSize:13,fontWeight:700},stagePrompt:{fontSize:11.5,color:"var(--text-2)",marginTop:2,lineHeight:1.4},doneBadge:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10,marginLeft:"auto",flexShrink:0},noteList:{margin:"0 0 8px 0",padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6},noteItem:{display:"flex",alignItems:"flex-start",gap:8,fontSize:13,lineHeight:1.4},noteDot:{width:6,height:6,borderRadius:"50%",flexShrink:0,marginTop:5},checkBox:{width:18,height:18,borderRadius:5,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,marginTop:1,padding:0},checklistHint:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,marginTop:10,textAlign:"center"},noteText:{flex:1,color:"var(--text)"},noNotes:{fontSize:12,color:"var(--text-3)",fontStyle:"italic",marginBottom:8},noteAddRow:{display:"flex",gap:6},noteInput:{flex:1,border:"1px solid var(--border)",borderRadius:7,padding:"7px 10px",fontSize:13,fontFamily:"inherit",outline:"none"},noteAddBtn:{width:32,height:32,border:"none",borderRadius:7,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},advanceBtn:{display:"flex",alignItems:"center",gap:8,border:"none",color:"#fff",padding:"10px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit",width:"100%",justifyContent:"center"},wisdomDone:{display:"flex",alignItems:"center",gap:8,justifyContent:"center",fontSize:13.5,fontWeight:700,color:"#4C9A6B",padding:12,background:"rgba(76,154,107,0.08)",borderRadius:10,marginTop:4},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},input:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box",marginBottom:8},select:{border:"1px solid var(--border)",borderRadius:8,padding:"8px 10px",fontSize:12.5,fontFamily:"inherit",flex:1},addRow:{display:"flex",gap:8,marginBottom:8},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},empty:{fontSize:13,color:"var(--text-3)",padding:"32px 12px",textAlign:"center"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.55)",zIndex:50,display:"grid",placeItems:"center"},celebBox:{background:"var(--surface)",borderRadius:20,padding:"40px 32px",textAlign:"center",maxWidth:320,boxShadow:"0 8px 40px rgba(0,0,0,0.18)"},celebEmoji:{fontSize:52,marginBottom:12},celebTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:8},celebSub:{fontSize:13.5,color:"var(--text-2)",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:"#4C9A6B",color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},ns=[{id:"aarti",title:"Aarti",html:`<h1>॥ गणपतीची आरती ॥</h1><br/>
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
      </div>`}];function Yy(){const[e,t]=g.useState(()=>window.innerWidth<720);return g.useEffect(()=>{const n=()=>t(window.innerWidth<720);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}const Vy=e=>new Promise((t,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:l,height:a}=i;l>a&&l>1400?(a=a*1400/l,l=1400):a>1400&&(l=l*1400/a,a=1400);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(i,0,0,l,a),t(d.toDataURL("image/jpeg",.85))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(e)});function ru({base:e,count:t,images:n}){const o=n&&n.length?n:null,i=o?o.length:t,[s,l]=g.useState(0);if(!i)return null;const a=s%i,d=o?o[a]:`${e}${a+1}.jpg`;return r.jsxs("div",{style:{maxWidth:560,margin:"0 auto"},children:[r.jsx("div",{style:De.carouselFrame,children:r.jsx("img",{src:d,alt:`Page ${a+1}`,style:De.carouselImg})}),r.jsxs("div",{style:De.carouselNav,children:[r.jsxs("button",{onClick:()=>l(c=>(c-1+i)%i),style:De.carouselBtn,children:[r.jsx(fn,{size:16})," Prev"]}),r.jsxs("span",{style:De.carouselCount,children:[o?"":"Adhyay ",a+1," / ",i]}),r.jsxs("button",{onClick:()=>l(c=>(c+1)%i),style:De.carouselBtn,children:["Next ",r.jsx(Ur,{size:16})]})]})]})}function Qy(){const e=Yy(),[t,n]=g.useState(!1),[o,i]=g.useState([]),[s,l]=g.useState("dss"),[a,d]=g.useState(!1),[c,h]=g.useState({title:"",type:"text",content:"",images:[]}),[x,f]=g.useState([]),[R,S]=g.useState(null),[y,A]=g.useState(!1),m=g.useRef(!1),p=g.useCallback(async()=>{try{const[N,se,Y]=await Promise.all([$.getDecks(),$.getSetting("spiritual_order"),$.getSetting("spiritual_default")]);if(i(N),Array.isArray(se==null?void 0:se.value)&&f(se.value),Y!=null&&Y.value&&S(Y.value),!m.current){m.current=!0;const le=new Set([...ns.map(T=>T.id),...N.map(T=>`deck-${T.id}`)]);Y!=null&&Y.value&&le.has(Y.value)&&l(Y.value)}}catch{}},[]);g.useEffect(()=>{p()},[p]);const b=[...ns.map(N=>({id:N.id,title:N.title})),...o.map(N=>({id:`deck-${N.id}`,title:N.title}))],E=(()=>{if(!x.length)return b;const N=new Map(b.map(Y=>[Y.id,Y])),se=[];return x.forEach(Y=>{N.has(Y)&&(se.push(N.get(Y)),N.delete(Y))}),N.forEach(Y=>se.push(Y)),se})(),C=(N,se)=>{const Y=E.map(T=>T.id),le=N+se;le<0||le>=Y.length||([Y[N],Y[le]]=[Y[le],Y[N]],f(Y),$.setSetting("spiritual_order",Y).catch(()=>{}))},z=N=>{S(N),$.setSetting("spiritual_default",N).catch(()=>{})},M=s.startsWith("deck-")?Number(s.slice(5)):null,_=M!=null?o.find(N=>N.id===M):null,B=_?null:ns.find(N=>N.id===s)||(M==null?ns[0]:null),W=a?"New deck":_?_.title:(B==null?void 0:B.title)||"",j=N=>{l(N),d(!1),e&&n(!1)},J=()=>{d(!0),h({title:"",type:"text",content:"",images:[]}),e&&n(!1)},I=async N=>{const se=Array.from(N.target.files||[]),Y=[];for(const le of se)try{Y.push(await Vy(le))}catch{}h(le=>({...le,images:[...le.images,...Y]})),N.target.value=""},re=N=>h(se=>({...se,images:se.images.filter((Y,le)=>le!==N)})),ue=c.title.trim()&&(c.type==="text"?c.content.trim():c.images.length>0),de=async()=>{if(!ue)return;const N=await $.createDeck({title:c.title.trim(),type:c.type,content:c.type==="text"?c.content:"",images:c.type==="images"?c.images:[]});d(!1),await p(),l(`deck-${N.id}`)},ye=async N=>{await $.deleteDeck(N),s===`deck-${N}`&&l("dss"),p()},q={...De.sidebar,...e?De.sidebarOverlay:{},...e&&!t?De.sidebarHidden:{}};return r.jsxs("div",{style:De.shell,children:[r.jsx("style",{children:Ky}),e&&t&&r.jsx("div",{style:De.backdrop,onClick:()=>n(!1)}),r.jsxs("aside",{style:q,children:[r.jsxs("div",{style:De.sideHead,children:[r.jsx("div",{style:De.brand,children:"Anvil · Spiritual"}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:2},children:[r.jsx("button",{onClick:()=>A(N=>!N),style:De.iconBtn,title:"Rearrange & set default",children:y?r.jsx(We,{size:16}):r.jsx(bt,{size:15})}),e&&r.jsx("button",{onClick:()=>n(!1),style:De.iconBtn,children:r.jsx(ze,{size:17})})]})]}),y&&r.jsxs("div",{style:De.editHint,children:["Arrows reorder · ",r.jsx(Ti,{size:11,style:{verticalAlign:"-1px"}})," sets what opens by default"]}),r.jsxs("div",{style:De.sideScroll,children:[E.map((N,se)=>{const Y=N.id===s&&!a,le=R===N.id;return r.jsxs("div",{style:De.sideRow,children:[r.jsxs("button",{onClick:()=>j(N.id),style:{...De.sideItem,flex:1,...Y?De.sideItemOn:{}},children:[N.title,le&&r.jsx("span",{style:De.defStar,title:"Opens by default",children:" ★"})]}),y&&r.jsxs("div",{style:De.editControls,children:[r.jsx("button",{onClick:()=>z(N.id),title:"Set as default",style:{...De.miniBtn,...le?{color:"#8268B0"}:{}},children:r.jsx(Ti,{size:13})}),r.jsx("button",{onClick:()=>C(se,-1),disabled:se===0,style:{...De.miniBtn,opacity:se===0?.3:1},children:r.jsx(Xb,{size:13})}),r.jsx("button",{onClick:()=>C(se,1),disabled:se===E.length-1,style:{...De.miniBtn,opacity:se===E.length-1?.3:1},children:r.jsx(Wi,{size:13})})]})]},N.id)}),r.jsxs("button",{onClick:J,style:{...De.newDeckBtn,...a?De.sideItemOn:{}},children:[r.jsx(Ke,{size:14})," New deck"]})]})]}),r.jsxs("main",{style:De.main,children:[e&&r.jsxs("button",{onClick:()=>n(!0),style:De.hamburger,children:[r.jsx(hc,{size:17}),r.jsx("span",{style:De.hamburgerLabel,children:W})]}),a?r.jsxs("div",{style:De.contentWrap,children:[r.jsx("div",{style:De.formTitle,children:"Create a deck"}),r.jsx("input",{placeholder:"Deck title (e.g. Vishnu Sahasranamam)",value:c.title,onChange:N=>h({...c,title:N.target.value}),style:De.input}),r.jsxs("div",{style:De.typeRow,children:[r.jsxs("button",{onClick:()=>h({...c,type:"text"}),style:{...De.typeBtn,...c.type==="text"?De.typeOn:{}},children:[r.jsx(mc,{size:15})," Text"]}),r.jsxs("button",{onClick:()=>h({...c,type:"images"}),style:{...De.typeBtn,...c.type==="images"?De.typeOn:{}},children:[r.jsx(Lx,{size:15})," Images"]})]}),c.type==="text"?r.jsx("textarea",{placeholder:"Paste or write the text (verses, chant, reflection)…",value:c.content,onChange:N=>h({...c,content:N.target.value}),style:De.textarea}):r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:De.imgGrid,children:[c.images.map((N,se)=>r.jsxs("div",{style:De.imgThumbWrap,children:[r.jsx("img",{src:N,alt:"",style:De.imgThumb}),r.jsx("button",{onClick:()=>re(se),style:De.imgDel,children:r.jsx(ze,{size:12})})]},se)),r.jsxs("label",{style:De.imgAdd,children:[r.jsx(vl,{size:20}),r.jsx("span",{style:{fontSize:11},children:"Add images"}),r.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:I,style:{display:"none"}})]})]}),r.jsx("div",{style:De.hint,children:"Images show as a swipeable carousel, in the order added."})]}),r.jsxs("div",{style:De.formActions,children:[r.jsxs("button",{onClick:()=>d(!1),style:De.cancelBtn,children:[r.jsx(ze,{size:14})," Cancel"]}),r.jsxs("button",{onClick:de,disabled:!ue,style:{...De.saveBtn,...ue?{}:De.saveDisabled},children:[r.jsx(We,{size:15})," Create deck"]})]})]}):_?r.jsxs("div",{style:De.contentWrap,children:[r.jsxs("div",{style:De.deckHead,children:[r.jsx("h2",{style:De.deckTitle,children:_.title}),r.jsx("button",{onClick:()=>ye(_.id),style:De.deckDel,title:"Delete deck",children:r.jsx(vc,{size:15})})]}),_.type==="images"?r.jsx(ru,{images:_.images}):r.jsx("div",{style:De.deckText,children:_.content})]}):r.jsxs("div",{style:De.contentWrap,children:[(B==null?void 0:B.youtube)&&r.jsx("div",{style:De.videoFrame,children:r.jsx("iframe",{src:`https://www.youtube.com/embed/${B.youtube}`,title:B.title,style:De.video,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0},B.youtube)}),B!=null&&B.carousel?r.jsx(ru,{base:B.imageBase,count:B.carousel}):r.jsx("div",{className:"spiritual-content",dangerouslySetInnerHTML:{__html:(B==null?void 0:B.html)||""}})]})]})]})}const Ky=`
.spiritual-content { font-family: 'Inter', system-ui, sans-serif; color: var(--text); line-height: 1.9; font-size: 16px; text-align: center; }
.spiritual-content h1 { font-family: 'Fraunces', Georgia, serif; font-size: 24px; color: #8268B0; margin: 8px 0 18px; letter-spacing: -0.01em; }
.spiritual-content h2 { font-family: 'Fraunces', Georgia, serif; font-size: 18px; color: #7A5EA8; margin: 20px 0 8px; }
.spiritual-content h3 { font-size: 15px; color: var(--text-3); text-transform: uppercase; letter-spacing: 0.06em; margin: 18px 0 6px; }
.spiritual-content b { color: #8268B0; }
.spiritual-content div { text-align: center; }
`,De={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:240,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.15)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.35)",zIndex:20},sideHead:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"18px 14px 12px"},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700},sideScroll:{flex:1,overflowY:"auto",padding:"0 8px 16px"},sideItem:{display:"block",width:"100%",border:"none",background:"none",padding:"10px 12px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13.5,fontWeight:500,color:"var(--text-2)",textAlign:"left",marginBottom:2},sideItemOn:{background:"rgba(130,104,176,0.12)",color:"#8268B0",fontWeight:700},sideRow:{display:"flex",alignItems:"center",gap:2},editControls:{display:"flex",alignItems:"center",gap:1,flexShrink:0},miniBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",borderRadius:5},defStar:{color:"#C9A227",fontWeight:700},editHint:{fontSize:10.5,color:"var(--text-3)",padding:"0 14px 8px",lineHeight:1.4},newDeckBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",padding:"9px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:600,color:"var(--text-2)",marginTop:6},main:{flex:1,padding:"26px 22px",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:220},contentWrap:{background:"var(--surface)",borderRadius:14,padding:"26px 28px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",maxWidth:760,margin:"0 auto"},videoFrame:{position:"relative",width:"100%",maxWidth:600,margin:"0 auto 22px",aspectRatio:"16 / 9",borderRadius:12,overflow:"hidden",background:"#000"},video:{position:"absolute",inset:0,width:"100%",height:"100%",border:"none"},carouselFrame:{background:"var(--surface-2)",borderRadius:12,padding:8,border:"1px solid var(--border)"},carouselImg:{width:"100%",borderRadius:8,display:"block"},carouselNav:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:14},carouselBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},carouselCount:{fontSize:13,fontWeight:700,color:"#8268B0",fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"none",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,color:"var(--text-2)"},deckHead:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,marginBottom:16,borderBottom:"1px solid var(--border)",paddingBottom:12},deckTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",margin:0,color:"#8268B0"},deckDel:{border:"1px solid var(--border)",background:"var(--surface)",color:"#C2536B",cursor:"pointer",display:"grid",placeItems:"center",padding:7,borderRadius:8,flexShrink:0},deckText:{fontSize:16,lineHeight:1.9,whiteSpace:"pre-wrap",color:"var(--text)",textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},formTitle:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:14},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none"},typeRow:{display:"flex",gap:8,marginTop:12},typeBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},typeOn:{background:"#8268B0",color:"#fff",borderColor:"#8268B0"},textarea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"12px",fontSize:15,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:200,resize:"vertical",lineHeight:1.7,marginTop:12},imgGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(90px, 1fr))",gap:8,marginTop:12},imgThumbWrap:{position:"relative",aspectRatio:"1",borderRadius:8,overflow:"hidden",border:"1px solid var(--border)"},imgThumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},imgDel:{position:"absolute",top:3,right:3,border:"none",background:"rgba(0,0,0,0.6)",color:"#fff",borderRadius:"50%",width:18,height:18,cursor:"pointer",display:"grid",placeItems:"center",padding:0},imgAdd:{aspectRatio:"1",border:"1px dashed var(--border)",borderRadius:8,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:4,cursor:"pointer",color:"var(--text-3)"},hint:{fontSize:11.5,color:"var(--text-3)",marginTop:8},formActions:{display:"flex",gap:8,marginTop:16},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:"#8268B0",color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"}},Tr={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},nu=Object.keys(Tr),Xy=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],qy=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Zy=()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},Jy=(e,t)=>`${qy[t-1]} ${e}`,e0=(e,t)=>{const n=new Date(e,t,0).getDate();return Array.from({length:n},(o,i)=>`${e}-${String(t).padStart(2,"0")}-${String(i+1).padStart(2,"0")}`)},t0=(e,t)=>{const n=new Date(e,t-1,1).getDay();return n===0?6:n-1};function r0(){const e=Zy(),[t,n]=g.useState(new Date().getFullYear()),[o,i]=g.useState(new Date().getMonth()+1),[s,l]=g.useState([]),[a,d]=g.useState([]),[c,h]=g.useState({}),[x,f]=g.useState(null),[R,S]=g.useState(!1),[y,A]=g.useState(!1),[m,p]=g.useState({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:e}),[b,E]=g.useState(null),C=g.useCallback(async()=>{const[T,oe,Ce]=await Promise.all([$.getTopics(),$.getDueToday(),$.getCalendar(t,o)]);l(T),d(oe),h(Ce)},[t,o]);g.useEffect(()=>{C()},[C]);const z=async T=>{await $.toggleReviewDone(T),C()},M=async()=>{const T=m.intervals.split(",").map(oe=>parseInt(oe.trim(),10)).filter(oe=>!isNaN(oe));!m.topic.trim()||T.length===0||(await $.createTopic({pillar:m.pillar,topic:m.topic.trim(),intervals:T,learned_date:m.learned_date||e}),p({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:e}),A(!1),C())},{deleteItem:_,toasts:B,handleUndo:W,handleDismiss:j}=Ht($.deleteTopic,$.restoreTopic,C),J=(T,oe)=>_(T,oe),I=T=>E({id:T.id,topic:T.topic,pillar:T.pillar,intervals:(T.intervals||[]).join(", "),learned_date:T.learned_date}),re=async()=>{if(!b)return;const T=b.intervals.split(",").map(oe=>parseInt(oe.trim(),10)).filter(oe=>!isNaN(oe)&&oe>=0);!b.topic.trim()||T.length===0||(await $.updateTopic(b.id,{topic:b.topic.trim(),pillar:b.pillar,learned_date:b.learned_date,intervals:T}),E(null),C())},ue=()=>{o===1?(n(T=>T-1),i(12)):i(T=>T-1),f(null)},de=()=>{o===12?(n(T=>T+1),i(1)):i(T=>T+1),f(null)},ye=s.filter(T=>!T.cemented),q=s.filter(T=>T.cemented),N=e0(t,o),se=t0(t,o),Y=g.useMemo(()=>{const T={};return s.forEach(oe=>oe.reviews.forEach(Ce=>{Ce.done||(T[Ce.due_date]=T[Ce.due_date]||[]).push({topic:oe.topic,pillar:oe.pillar,stage:Ce.stage})})),T},[s]),le=x?s.flatMap(T=>T.reviews.filter(oe=>oe.due_date===x).map(oe=>({...oe,topic:T.topic,pillar:T.pillar,total:T.reviews.length}))):[];return r.jsxs("div",{style:ve.page,children:[r.jsxs("div",{style:ve.head,children:[r.jsxs("div",{children:[r.jsx("div",{style:ve.eyebrow,children:"Anvil · Revision"}),r.jsx("h1",{style:ve.h1,children:"Spaced Repetition"})]}),r.jsxs("button",{onClick:()=>A(!0),style:ve.addBtn,children:[r.jsx(Ke,{size:15})," Add topic"]})]}),y&&r.jsxs("div",{style:ve.addBox,children:[r.jsx("input",{autoFocus:!0,placeholder:"What did you learn?",value:m.topic,onChange:T=>p(oe=>({...oe,topic:T.target.value})),onKeyDown:T=>T.key==="Enter"&&M(),style:ve.input}),r.jsxs("div",{style:ve.addRow,children:[r.jsx("select",{value:m.pillar,onChange:T=>p(oe=>({...oe,pillar:T.target.value})),style:ve.select,children:nu.map(T=>r.jsx("option",{children:T},T))}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[r.jsx("label",{style:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},children:"Learned on"}),r.jsx("input",{type:"date",value:m.learned_date,onChange:T=>p(oe=>({...oe,learned_date:T.target.value})),style:{...ve.select,fontSize:13}})]}),r.jsx("div",{style:{flex:1,minWidth:0},children:r.jsx("input",{value:m.intervals,onChange:T=>p(oe=>({...oe,intervals:T.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:ve.input})})]}),r.jsxs("div",{style:ve.addRow,children:[r.jsxs("button",{onClick:M,style:ve.saveBtn,children:[r.jsx(We,{size:14})," Save"]}),r.jsxs("button",{onClick:()=>A(!1),style:ve.cancelBtn,children:[r.jsx(ze,{size:14})," Cancel"]})]})]}),a.length>0&&r.jsxs("div",{style:ve.section,children:[r.jsxs("div",{style:ve.sectionTitle,children:[r.jsx(lm,{size:15,color:"#C2536B"}),"Due Today",r.jsx("span",{style:ve.badge,children:a.length})]}),a.map(T=>{var Ce,V;const oe=((Ce=Tr[T.pillar])==null?void 0:Ce.dot)||"#9A968C";return r.jsxs("div",{style:{...ve.reviewCard,borderLeft:`3px solid ${oe}`,...T.is_missed?{opacity:.85}:{}},children:[r.jsx("button",{onClick:()=>z(T.review_id),style:{...ve.checkbox,...T.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:T.done&&r.jsx(We,{size:12,color:"#fff",strokeWidth:3})}),r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("div",{style:ve.reviewTopic,children:T.topic}),r.jsxs("div",{style:ve.reviewMeta,children:[r.jsxs("span",{style:{...ve.stageTag,background:((V=Tr[T.pillar])==null?void 0:V.soft)||"rgba(0,0,0,0.05)",color:oe},children:["Review ",T.stage,"/",T.total_stages]}),T.is_missed&&r.jsxs("span",{style:ve.missedTag,children:["missed · ",T.due_date]})]})]})]},T.review_id)})]}),r.jsxs("div",{style:ve.section,children:[r.jsxs("div",{style:ve.sectionTitle,children:["Active Topics ",r.jsx("span",{style:ve.badge,children:ye.length})]}),ye.length===0&&r.jsx("div",{style:ve.empty,children:"No active topics. Add something you learned today."}),ye.map(T=>{var v,D;const oe=((v=Tr[T.pillar])==null?void 0:v.dot)||"#9A968C",Ce=((D=Tr[T.pillar])==null?void 0:D.soft)||"rgba(0,0,0,0.05)",V=T.reviews.filter(P=>P.done).length;return(b==null?void 0:b.id)===T.id?r.jsxs("div",{style:ve.addBox,children:[r.jsx("input",{autoFocus:!0,value:b.topic,onChange:P=>E(G=>({...G,topic:P.target.value})),onKeyDown:P=>P.key==="Enter"&&re(),placeholder:"Topic",style:ve.input}),r.jsxs("div",{style:ve.addRow,children:[r.jsx("select",{value:b.pillar,onChange:P=>E(G=>({...G,pillar:P.target.value})),style:ve.select,children:nu.map(P=>r.jsx("option",{children:P},P))}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[r.jsx("label",{style:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},children:"Learned on"}),r.jsx("input",{type:"date",value:b.learned_date,onChange:P=>E(G=>({...G,learned_date:P.target.value})),style:{...ve.select,fontSize:13}})]}),r.jsx("div",{style:{flex:1,minWidth:0},children:r.jsx("input",{value:b.intervals,onChange:P=>E(G=>({...G,intervals:P.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:ve.input})})]}),r.jsx("div",{style:ve.editHint,children:"Changing the date or intervals reschedules the reviews (completed steps are kept where they still apply)."}),r.jsxs("div",{style:ve.addRow,children:[r.jsxs("button",{onClick:re,style:ve.saveBtn,children:[r.jsx(We,{size:14})," Save plan"]}),r.jsxs("button",{onClick:()=>E(null),style:ve.cancelBtn,children:[r.jsx(ze,{size:14})," Cancel"]})]})]},T.id):r.jsxs("div",{style:ve.topicCard,children:[r.jsxs("div",{style:ve.topicHead,children:[r.jsx("span",{style:{...ve.dot,background:oe}}),r.jsx("span",{style:ve.topicName,children:T.topic}),r.jsx("span",{style:ve.topicPillar,children:T.pillar}),r.jsxs("span",{style:ve.topicProgress,children:[V,"/",T.reviews.length," done"]}),r.jsx("button",{onClick:()=>I(T),style:ve.ghostBtn,title:"Edit plan",children:r.jsx(bt,{size:12})}),r.jsx("button",{onClick:()=>J(T.id,T.topic),style:ve.ghostBtn,title:"Delete",children:r.jsx(ze,{size:13})})]}),r.jsxs("div",{style:ve.reviewDots,children:[T.reviews.map(P=>{P.due_date<e;const G=P.due_date===e;return r.jsx("button",{onClick:()=>z(P.id),title:`Review ${P.stage} · ${P.due_date}${P.done?" · Done":""}`,style:{...ve.reviewDot,background:P.done?oe:G?Ce:"var(--hover)",border:`2px solid ${P.done||G?oe:"var(--border)"}`,color:P.done?"#fff":oe},children:P.stage},P.id)}),r.jsxs("span",{style:ve.learnedDate,children:["Learned ",T.learned_date]})]})]},T.id)})]}),q.length>0&&r.jsxs("div",{style:ve.section,children:[r.jsxs("button",{onClick:()=>S(T=>!T),style:ve.cementedToggle,children:[R?r.jsx(Wi,{size:15}):r.jsx(Ur,{size:15}),r.jsx(Hr,{size:14,color:"#C9A227"}),"Cemented",r.jsx("span",{style:{...ve.badge,background:"rgba(201,162,39,0.12)",color:"#8A6E1A"},children:q.length})]}),R&&q.map(T=>{var Ce;const oe=((Ce=Tr[T.pillar])==null?void 0:Ce.dot)||"#9A968C";return r.jsx("div",{style:{...ve.topicCard,opacity:.75},children:r.jsxs("div",{style:ve.topicHead,children:[r.jsx("span",{style:{...ve.dot,background:oe}}),r.jsx("span",{style:ve.topicName,children:T.topic}),r.jsx("span",{style:ve.topicPillar,children:T.pillar}),r.jsx(Hr,{size:13,color:"#C9A227",style:{marginLeft:"auto"}})]})},T.id)})]}),r.jsxs("div",{style:ve.calCard,children:[r.jsxs("div",{style:ve.calHead,children:[r.jsx("button",{onClick:ue,style:ve.calNav,children:"‹"}),r.jsxs("div",{style:ve.calTitle,children:[Jy(t,o)," · Review Calendar"]}),r.jsx("button",{onClick:de,style:ve.calNav,children:"›"})]}),r.jsx("div",{style:ve.calDow,children:Xy.map(T=>r.jsx("div",{style:ve.calDowCell,children:T},T))}),r.jsxs("div",{style:ve.calGrid,children:[Array.from({length:se}).map((T,oe)=>r.jsx("div",{},`p${oe}`)),N.map((T,oe)=>{const Ce=Y[T]||[],V=T===e,v=T===x,D=T<e,P=v?"#fff":V?"var(--text)":D?"var(--text-2)":"var(--text-3)";return r.jsxs("button",{onClick:()=>f(v?null:T),style:{...ve.calDay,background:v?"var(--accent-strong)":V?"var(--hover)":"var(--surface)",borderColor:V||v?"var(--accent-strong)":"var(--border)"},children:[r.jsx("span",{style:{...ve.calDayNum,color:P,fontWeight:V||v?700:600},children:oe+1}),Ce.slice(0,2).map((G,ne)=>{var ge;return r.jsxs("span",{title:G.topic,style:{...ve.calItem,color:v?"#fff":((ge=Tr[G.pillar])==null?void 0:ge.dot)||"var(--text-2)"},children:[ne+1,". ",G.topic]},ne)}),Ce.length>2&&r.jsxs("span",{style:{...ve.calMore,color:v?"#fff":"var(--text-3)"},children:["+",Ce.length-2," more"]})]},T)})]}),x&&r.jsxs("div",{style:ve.dayDetail,children:[r.jsxs("div",{style:ve.dayDetailTitle,children:["Reviews for ",x]}),le.length===0?r.jsx("div",{style:ve.empty,children:"No reviews scheduled for this day."}):le.map((T,oe)=>{var V,v;const Ce=((V=Tr[T.pillar])==null?void 0:V.dot)||"#9A968C";return r.jsxs("div",{style:{...ve.reviewCard,borderLeft:`3px solid ${Ce}`},children:[r.jsx("button",{onClick:()=>z(T.id),style:{...ve.checkbox,...T.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:T.done&&r.jsx(We,{size:12,color:"#fff",strokeWidth:3})}),r.jsxs("div",{children:[r.jsxs("div",{style:ve.reviewTopic,children:[oe+1,". ",T.topic]}),r.jsxs("span",{style:{...ve.stageTag,background:((v=Tr[T.pillar])==null?void 0:v.soft)||"rgba(0,0,0,0.05)",color:Ce},children:["Review ",T.stage,"/",T.total]})]})]},T.id)})]})]}),r.jsx(Gt,{toasts:B,onUndo:W,onDismiss:j})]})}const ve={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},addBox:{background:"var(--surface)",borderRadius:12,padding:16,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column",gap:10},addRow:{display:"flex",gap:8,alignItems:"center"},editHint:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.4},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",minWidth:0},select:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 10px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},section:{marginBottom:20},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10},badge:{fontSize:11,fontWeight:700,background:"var(--hover)",color:"var(--text-2)",borderRadius:10,padding:"1px 7px"},reviewCard:{display:"flex",alignItems:"center",gap:12,background:"var(--surface)",borderRadius:10,padding:"12px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},checkbox:{width:22,height:22,borderRadius:6,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,padding:0},reviewTopic:{fontSize:13.5,fontWeight:600,marginBottom:4},reviewMeta:{display:"flex",alignItems:"center",gap:8},stageTag:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10},missedTag:{fontSize:11,color:"#C2536B",fontWeight:600},topicCard:{background:"var(--surface)",borderRadius:12,padding:"13px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},topicHead:{display:"flex",alignItems:"center",gap:8,marginBottom:10},dot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},topicName:{fontSize:14,fontWeight:600,flex:1},topicPillar:{fontSize:11,color:"var(--text-3)",fontWeight:500},topicProgress:{fontSize:11,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",padding:"2px 7px",borderRadius:10},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},reviewDots:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"},reviewDot:{width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",fontSize:11,fontWeight:700,padding:0},learnedDate:{fontSize:11,color:"var(--text-3)",marginLeft:"auto"},cementedToggle:{display:"flex",alignItems:"center",gap:8,border:"none",background:"none",cursor:"pointer",fontSize:13,fontWeight:700,color:"var(--text-2)",padding:"4px 0",fontFamily:"inherit",marginBottom:8},empty:{fontSize:13,color:"var(--text-3)",padding:"16px 0",textAlign:"center"},calCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calNav:{border:"none",background:"none",fontSize:20,cursor:"pointer",color:"var(--text-2)",padding:"0 6px",lineHeight:1},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4},calDay:{minHeight:62,border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,cursor:"pointer",fontFamily:"inherit",display:"flex",flexDirection:"column",alignItems:"stretch",justifyContent:"flex-start",gap:1,position:"relative",padding:"3px 4px",overflow:"hidden",textAlign:"left"},calDayNum:{fontSize:11,lineHeight:1.1,marginBottom:1},calItem:{fontSize:8.5,fontWeight:700,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",lineHeight:1.3,textAlign:"left"},calMore:{fontSize:8,fontWeight:700,opacity:.85,lineHeight:1.2},dayDetail:{marginTop:16,paddingTop:16,borderTop:"1px solid var(--border)"},dayDetailTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10}},os=[{id:1,title:"Regular Habits",cards:[{id:1,text:"1. I always do everything I need to do, when I need to do it. "},{id:2,text:"2. I never argue or let my emotions work against me. "},{id:3,text:"3. I have a good memory. I easily and automatically remember any name or anything that is important to me. "},{id:4,text:"4. I eat only what I should. "},{id:5,text:"5. I am a good listener. I hear everything that is said. I am attentive, interested, and aware of everything that is going on around me. "},{id:6,text:"6. I have the courage to state my opinions. I take responsibility for myself and everything I say and do."},{id:7,text:"7. I never spend more than I earn. I am financially responsible, both for my present and for my future."},{id:8,text:"8. I set goals and I follow them. I set my sights, take the appropriate action, and achieve my goals."},{id:9,text:"9. I spend time with my family and my loved ones. I enjoy sharing their lives with mine and my life with theirs."}]},{id:2,title:"Motivational",cards:[{id:1,text:"1. I can do anything I believe I can do. I’ve got it and every day I get more of it. I have talent, skills, and ability"},{id:2,text:"2. I set goals and I reach them. I know what I want out of life. I go after it and I get it. "},{id:3,text:"3. People like me, and I feel good about myself. I have a sense of pride in whoa am and I believe in myself. Nothing seems to stop me. I have a lot of determination. "},{id:4,text:"4. I turn problems into advantages. I find possibilities in things that other people never give a chance."},{id:5,text:"5. I have a lot of energy––I am very alive. I enjoy life and I can tell it and so can others"},{id:6,text:"6. I keep myself up, looking ahead, and liking it. I know that I can accomplish anything I choose, and I refuse to let anything negative hold me back or stand in my way. I am not afraid of anything or anyone. I have strength, power, conviction, and confidence. "},{id:7,text:"7. I like challenges and I meet them head on, face to face––today especially. I am on top of the world and I’m going for it. "},{id:8,text:"8. I have a clear picture in my mind of what I want. I can see it in front of me. "},{id:9,text:"9. I know what I want and I know how to get it. I know that it’s all up to me and I know I can do it. Roadblocks don’t bother me. They just mean that I am alive and running, and I’m not going to stand still for anything. "},{id:10,text:"10. I trust myself I’ve got what it takes––plenty of it––and I know how to use it. "},{id:11,text:"11. Today, more than ever. Today I am unstoppable. I’ve got myself together and I’m getting more together every day. And today––look out world, here I come. "},{id:12,text:"12. Limitations? I don’t even recognize them as limitations. There is no challenge I can’t conquer; there is no wall I can’t climb over. "},{id:13,text:"13. There is no problem I can’t defeat or turn around and make it work for me. I stand tall. I am honest and sincere. I like to deal with people and they like me. "},{id:14,text:"14. I think well; I think clearly. I am organized; I am in control of myself, and everything about me. I call my shots and no one has to call them for me. I never blame anyone else for the circumstances of my life. "},{id:15,text:"15. I accept my failings and move past them as easily as I accept the rewards for my victories. I never demand perfection of myself, but I expect the very best of what I have to give––and that’s what I get. I never give myself excuses. "},{id:16,text:"16. I get things done on time and in the right way. Today I have the inner strength to do more than ever. I am an exceptional human being. "},{id:17,text:"17. My goals and my incredible belief in myself turn my goals into reality. I have the power to live my dreams."},{id:18,text:"18.  I believe in them like I believe in myself. And that belief is so strong that there is nothing that diminishes my undefeatable spirit. "}]},{id:3,title:"Organized planning",cards:[{id:1,text:"1. I am organized and in control of my life. I am in control of myself, my thoughts, my time, my actions, and my future. "},{id:2,text:"2. I know what to do and when to do it, and I do everything I need to do, when I need to do it. "},{id:3,text:"3. I program my mind to make the maximum use of my time. I am in control of my time and how to use it. I like being organized, efficient, and on top of things."},{id:4,text:"4. Controlling my time keeps me that way. "},{id:5,text:"5. I never waste time––I always “plan” time. And because I plan my time, I always have time to do the things I choose to do. "},{id:6,text:"6. Each day I become more organized and in control of all areas of my life––at home, at work, in my mind and in my thoughts, in everything that I do. "},{id:7,text:"7. I am very well organized. Each night I make a list of things I need to do the next day. I set my priorities and I follow them. "},{id:8,text:"8. I am always on time. I am always right where I need to be, exactly when I need to be there. "},{id:9,text:"9. Being on time is easy for me and the more I control my time and the more organized I become, the easier it is. "},{id:10,text:"10. I am in control of my feelings, my emotions, my attitudes, and my needs. I control them; they do not control me. "},{id:11,text:"11. I have the winning vote in the outcome of my own actions. And I choose to live my life by choice, not chance. Therefore, I take the time to take control."},{id:12,text:"12. I have an organized and orderly mind. Because I think in an organized way, I conduct my life in an organized manner. "},{id:13,text:"13. I think in the most positive and productive way at all times and in all things. The way I think is the way I live––and I think “right.” "},{id:14,text:"14. I am the director of my destiny. I know where I am going and I know why I am going there. My earthly life is in my hands and in my control. "},{id:15,text:"15. I control my goals and the achievement of my goals. I organize my goals by writing each of them down, along with the steps I need to reach them. One of the reasons for my success is that my goals are clearly defined and organized."},{id:16,text:"16. I am in complete control of what I think and how I think. Therefore, I choose to think only those thoughts which help me and which are of genuine benefit to me."}]},{id:4,title:"Solving Problems",cards:[{id:1,text:"1. I’m good at solving problems. I like challenges and I meet them head on. "},{id:2,text:"2. Problems are my teachers. They help me to learn and grow. Without them, I would be going nowhere. With them, I am moving forward in the direction of my own goals. "},{id:3,text:"3. There is no problem which I cannot conquer. I am strong in mind, body, and spirit. My will, my strength, and my determination are always greater than any problem I face."},{id:4,text:"4. When I meet a new problem, I do not see the problem as my enemy. I know that finding the solution to the problem will move me forward in my own personal growth."},{id:5,text:"5. Because I know that problems are a key ingredient in my spiritual and mental education and preparation, I recognize that all problems are important to me. "},{id:6,text:"6. I do not fear problems, I solve them. I do not ignore problems, I confront them. I do not avoid problems, I conquer them. "},{id:7,text:"7. I know that every problem holds within itself the keys to its own solution. Therefore, the better I understand the problem, the clearer I am able to see its solution. "},{id:8,text:"8. Having problems is not a problem for me. I am confident, self-assured, positive, and determined. I always know that I am going to overcome any problem I encounter––and I always do. "},{id:9,text:"9. I am good at breaking large obstacles down into smaller pieces that are easier to handle. And I never make any problem appear to be larger than it actually is. "},{id:10,text:"10. I never worry. I turn “worry time” into positive, constructive, “solution time.” I keep my mind alert and open to all solutions—and solutions come quickly and easily to me. "},{id:11,text:"11. I have learned to recognize that many problems carry with them benefits and potential opportunities which would not have presented themselves had the problem not occurred in the first place. "},{id:12,text:"12. I do not seek to live a life which is free from all problems. Instead, I choose to live a life of finding solutions and enjoying the benefits which those solutions create."},{id:13,text:"13. Challenge, conquer, solution, and win are words which I live by daily. Challenges are opportunities. Conquering them is the inevitable outcome. "},{id:14,text:"14. “Solutions” are the stepping stones to my success, and “Winning” is my way of life."}]},{id:5,title:"Self Esteem",cards:[{id:1,text:"1. I really am very special. I like who I am and I feel good about myself. "},{id:2,text:"2. Although I always work to improve myself and I get better every day, I like who I am today. And tomorrow, when I’m even better, I’ll like myself then, too. "},{id:3,text:"3. It’s true that there really is no one else like me in the entire world. There never was another me before, and there will never be another me again. "},{id:4,text:"4. I am unique––from the top of my head to the bottom of my feet. In some ways I may look and act and sound like some others––but I am not them. I am me."},{id:5,text:"5. I wanted to be somebody––and now I know I am I would rather be me than anyone else in the world. "},{id:6,text:"6. I like how I feel and I like how I think and I like how I do things. I approve of me and I approve of who I am."},{id:7,text:"7. I have many beautiful qualities about me. I have talents and skills and abilities. I even have talents that I don’t even know about yet. And I am discovering new talents inside myself all the time. "},{id:8,text:"8. I am positive. I am confident. I radiate good things. If you look closely, you can even see a glow around me."},{id:9,text:"9. I am full of life. I like life and I’m glad to be alive. I am a very special person, living at a very special time. "},{id:10,text:"10. I am intelligent. My mind is quick and alert and clever and fun. I think good thoughts, and my mind makes things work right for me. "},{id:11,text:"11. I have a lot of energy and enthusiasm and vitality. I am exciting and I really enjoy being me. "},{id:12,text:"12. I like to be around other people and other people like to be around me. People like to hear what I have to say and know what I have to think. "},{id:13,text:"13. I smile a lot. I am happy on the inside and I am happy on the outside. "},{id:14,text:"14. I am interested in many things. I appreciate all the blessings I have, and the things that I learn, and all the things I will learn today and tomorrow and forever––just as long as I am. "},{id:15,text:"15. I am warm, sincere, honest, and genuine. I am all of these things and more. And all of these things are me. I like who I am, and I’m glad to be me."}]},{id:6,title:"Self-Responsibility",cards:[{id:1,text:"1. I take full responsibility for everything about me––even the thoughts that I think. I am in control of the vast resources of my own mind."},{id:2,text:"2. I alone am responsible for what I do and what I tell myself about me. No one can share this responsibility with me. "},{id:3,text:"3. I also allow others to accept their responsibilities far themselves and I do not try to accept their responsibilities for them. "},{id:4,text:"4. I enjoy being responsible. It puts me in charge of being me––and that’s a challenge I enjoy. "},{id:5,text:"5. I allow no one else, at any time, to assume control or responsibility over my life or over anything that I do. My responsibility to others is an extension of my own responsibility to myself. "},{id:6,text:"6. I choose to leave nothing about me up to chance. When it comes to me––and anything in my life––I choose to CHOOSE. "},{id:7,text:"7. My choices are mine alone to make for myself. I do not, at any time, allow anyone else to make my choices for me. And I accept full responsibility for every choice and decision I make. "},{id:8,text:"8. I always meet all of the obligations which I accept. And I accept no obligations which I will not meet. "},{id:9,text:"9. I am trustworthy. I can be counted on. I have accepted winning responsibility for myself––and I always live up to the responsibilities I accept. "},{id:10,text:"10. There is no they on whom I lay the blame, or with whom I share my own personal responsibilities. I have learned the great secret of mastering my own destiny. I have learned that “they” is “me.” "},{id:11,text:"11. I have no need to make excuses and no one needs to carry my responsibility for me. I gladly carry my own weight––and I carry it well. "},{id:12,text:"12. Each day I acknowledge and accept the responsibility––not only for my own actions––but also for my emotions, my thoughts, and my attitude. "},{id:13,text:"13. I accept the responsibility for living my life in a way which creates my strengths, my happiness, my positive, healthy beliefs, and for my past, my present, and my future."}]},{id:7,title:"Freedom from worry",cards:[{id:1,text:"1. I never worry. Instead of worrying, I find solutions and I act on them. "},{id:2,text:"2. My mind is constantly in tune with the positive. It is bright, cheerful, enthusiastic, and full of good, positive thoughts and ideas. "},{id:3,text:"3. I am able to relax easily and comfortably in my body and in my mind. I am calm, confident, and self-assured. "},{id:4,text:"4. My mind is orderly and well-organized. I consciously choose what I think and I always choose those thoughts which are the most positive and beneficial for me. "},{id:5,text:"5. All of my thoughts create healthiness within me. My mind dwells only on those thoughts which create more harmony, balance, and well-being within me and in the world around me. "},{id:6,text:"6. I automatically, and always, think in a decisive and determined way. "},{id:7,text:"7. I am full of resolution and the absolute assurance of the best possible outcome in everything that I do. "},{id:8,text:"8. I choose to look at the world around me in the bright, healthy light of optimism and self-assurance. "},{id:9,text:"9. I do only those things which are best for me. I create the best within myself, I attract the best in others, and I find the best in the world around me. "},{id:10,text:"10. I willingly, and without fail, take care of the duties and obligations which I have accepted for myself."},{id:11,text:"11. I commit only to those responsibilities which I know I can fulfill. "},{id:12,text:"12. I focus the attention of my mind only on those things that I can do something about. If I cannot affect it or direct it––I accept it. "},{id:13,text:"13. I keep my mind too busy thinking good, healthy, positive, constructive, and productive thoughts to ever have any time for worry. "},{id:14,text:"14. I control the thoughts I choose. No thought, at any time, can dwell in my mind without my approval or permission. I never worry."}]},{id:8,title:"Eating Habits",cards:[{id:1,text:"1. I am in control of myself in every way––at all times and in all situations. "},{id:2,text:"2. Each time I sit down to eat I reaffirm my determination to achieve my goal. By eating right, and never giving in, I am reaching the weight I want. "},{id:3,text:"3. Whether eating in or eating out, I really enjoy eating less. "},{id:4,text:"4. I never feel the need to finish the food in front of me. I eat only what I should––and never one bite more. "},{id:5,text:"5. One way to weight-loss that’s easy and works, is less food on my plate, and less on my fork. "},{id:6,text:'6. By ordering less when I eat out, and by serving myself smaller portions at home, I keep myself aware of the importance of staying with my goal––each and every day. “Less on my plate means less on my waist."'},{id:7,text:"7. When I sit down to eat, at no time do I allow anyone else to influence, tempt, or discourage me in any negative way."},{id:8,text:"8. What I eat, and the goals I reach, are up to me. And I give no one the right to hinder or control my success."},{id:9,text:"9. Although others may benefit from my success, I. am achieving my weight-loss goals for my own personal reasons––for myself, my life, my future, and my own personal well-being."},{id:10,text:"10. I am never, at any time, tempted to take one bite more than I should. I am strong, I am capable of reaching my goal, and I am doing it."},{id:11,text:"11. Being in situations which put a lot of food in front of me is not a problem to me now. I simply say “No” to the food and “Yes” to my success."},{id:12,text:"12. I enjoy sitting down to eat. Each time I do I conquer my past, and I create a trimmer, happier, more self-confident future in front of me. "},{id:13,text:"13. When I sit down to eat, I do not need someone else to remind me of my goal, or to keep me from eating something I should not. I take full responsibility for myself, and no one else has to do it for me. "},{id:14,text:"14. Controlling my weight, and my appetite, is easy for me now. I enjoy smaller portions, smaller bites, and a slower, healthier, more relaxed way of eating. "},{id:15,text:"15. I have set my goal and I am staying with it. I have turned mealtime into “achievement time.”"}]}],ou=["#3A7CA5","#4C9A6B","#C2773B","#8268B0","#C2536B","#C9A227","#3A7CA5","#4C9A6B"],na=e=>ou[e%ou.length],n0=e=>e+"1A",fm="anvil_affirmation_favs",o0=()=>{try{return new Set(JSON.parse(localStorage.getItem(fm)||"[]"))}catch{return new Set}};function i0(){const[e,t]=g.useState(0),[n,o]=g.useState(0),[i,s]=g.useState(o0);g.useEffect(()=>{localStorage.setItem(fm,JSON.stringify([...i]))},[i]);const l=(A,m)=>`${A}#${m.id}`,a=e==="FAV"?os.flatMap((A,m)=>A.cards.filter(p=>i.has(l(A.title,p))).map(p=>({...p,color:na(m),title:A.title}))):os[e].cards.map(A=>({...A,color:na(e),title:os[e].title})),d=a.length,c=Math.min(n,Math.max(0,d-1)),h=a[c],x=A=>{t(A),o(0)},f=g.useCallback(()=>o(A=>Math.max(0,A-1)),[]),R=g.useCallback(()=>o(A=>Math.min(d-1,A+1)),[d]);g.useEffect(()=>{const A=m=>{m.key==="ArrowLeft"&&f(),m.key==="ArrowRight"&&R()};return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)},[f,R]);const S=A=>s(m=>{const p=new Set(m);return p.has(A)?p.delete(A):p.add(A),p}),y=h?h.color:"#8268B0";return r.jsxs("div",{style:Ze.page,children:[r.jsxs("div",{style:Ze.head,children:[r.jsx("div",{style:Ze.eyebrow,children:"Anvil · Affirmations"}),r.jsx("h1",{style:Ze.h1,children:"Affirmations"}),r.jsx("div",{style:Ze.subhead,children:"One at a time — read it, mean it."})]}),r.jsxs("div",{style:Ze.filterBar,children:[os.map((A,m)=>{const p=e===m,b=na(m);return r.jsxs("button",{onClick:()=>x(m),style:{...Ze.chip,...p?{background:b,color:"#fff",borderColor:b}:{}},children:[r.jsx("span",{style:{...Ze.catDot,background:p?"#fff":b}})," ",A.title," ",r.jsx("span",{style:Ze.chipCount,children:A.cards.length})]},A.title)}),r.jsxs("button",{onClick:()=>x("FAV"),style:{...Ze.chip,...e==="FAV"?{background:"#C9A227",color:"#fff",borderColor:"#C9A227"}:{}},children:[r.jsx(js,{size:12,fill:e==="FAV"?"#fff":"none"})," Favorites ",r.jsx("span",{style:Ze.chipCount,children:i.size})]})]}),d===0?r.jsxs("div",{style:Ze.empty,children:[r.jsx(js,{size:22,color:"#C3BFB5"}),r.jsx("div",{children:"No favorites yet — tap the star on a card to save it here."})]}):r.jsxs("div",{style:Ze.viewer,children:[r.jsxs("div",{style:{...Ze.card,borderTop:`4px solid ${y}`},children:[r.jsx("div",{style:{...Ze.cardCat,color:y,background:n0(y)},children:h.title}),r.jsx("button",{onClick:()=>S(l(h.title,h)),style:{...Ze.favBtn,color:i.has(l(h.title,h))?"#C9A227":"#C3BFB5"},title:"Favorite",children:r.jsx(js,{size:20,fill:i.has(l(h.title,h))?"#C9A227":"none"})}),r.jsx(im,{size:30,color:y,style:{opacity:.25}}),r.jsx("p",{style:Ze.cardText,children:h.text.trim()})]}),r.jsxs("div",{style:Ze.navRow,children:[r.jsxs("button",{onClick:f,disabled:c===0,style:{...Ze.navBtn,...c===0?Ze.navBtnDisabled:{}},children:[r.jsx(fn,{size:18})," Back"]}),r.jsxs("span",{style:{...Ze.counter,color:y},children:[c+1," ",r.jsxs("span",{style:Ze.counterTotal,children:["/ ",d]})]}),r.jsxs("button",{onClick:R,disabled:c===d-1,style:{...Ze.navBtn,...c===d-1?Ze.navBtnDisabled:{}},children:["Next ",r.jsx(Ur,{size:18})]})]}),r.jsx("div",{style:Ze.dots,children:a.map((A,m)=>r.jsx("button",{onClick:()=>o(m),style:{...Ze.dot,...m===c?{background:y,transform:"scale(1.5)"}:{}},title:`${m+1}`},m))})]})]})}const Ze={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},filterBar:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:22},chip:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipCount:{fontSize:11,fontWeight:700,opacity:.7},catDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},empty:{display:"flex",flexDirection:"column",alignItems:"center",gap:10,fontSize:13.5,color:"var(--text-3)",padding:"56px 12px",textAlign:"center",background:"var(--surface)",borderRadius:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},viewer:{display:"flex",flexDirection:"column",alignItems:"center"},card:{position:"relative",background:"var(--surface)",borderRadius:16,padding:"40px 32px 44px",boxShadow:"0 4px 20px rgba(0,0,0,0.07)",width:"100%",minHeight:240,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",boxSizing:"border-box"},cardCat:{position:"absolute",top:16,left:16,fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:12,textTransform:"uppercase",letterSpacing:"0.04em"},favBtn:{position:"absolute",top:14,right:14,border:"none",background:"none",cursor:"pointer",padding:4,display:"grid",placeItems:"center"},cardText:{fontSize:21,lineHeight:1.55,margin:"14px 0 0",fontWeight:500,color:"var(--text)",fontFamily:"'Fraunces',Georgia,serif",maxWidth:560},navRow:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",maxWidth:420,marginTop:22},navBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},counter:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},counterTotal:{fontSize:13,fontWeight:600,color:"var(--text-3)"},dots:{display:"flex",gap:6,flexWrap:"wrap",justifyContent:"center",marginTop:20,maxWidth:480},dot:{width:7,height:7,borderRadius:"50%",border:"none",background:"var(--border)",cursor:"pointer",padding:0,transition:"transform 0.12s"}},Qt={financial:{label:"Financial",leaf:"#C9A227",shape:"round"},academic:{label:"Academic",leaf:"#3A7CA5",shape:"pine"},relationship:{label:"Relationship",leaf:"#C2536B",shape:"round"},spiritual:{label:"Spiritual",leaf:"#8268B0",shape:"tall"},health:{label:"Health",leaf:"#4C9A6B",shape:"round"}},wo="health";function Cc({species:e=wo,progress:t=1,withered:n=!1,size:o=200}){const i=Math.max(0,Math.min(1,t)),s=Qt[e]||Qt[wo],l=n?"#8A7B63":"#7A5A3C",a=n?"#A99C84":s.leaf,d=n?"#8F8268":a,c=14+i*46,h=112-c,x=i>.14,f=x?8+i*30:0;return r.jsxs("svg",{viewBox:"0 0 120 120",width:o,height:o,style:{display:"block"},children:[r.jsx("ellipse",{cx:"60",cy:"114",rx:20+i*14,ry:"5",fill:"rgba(38,36,31,0.08)"}),!x&&r.jsxs("g",{transform:`translate(60 ${112-i*40})`,children:[r.jsx("path",{d:"M0 8 C0 8 0 -2 0 -6",stroke:"#4C9A6B",strokeWidth:"2.5",fill:"none"}),r.jsx("ellipse",{cx:"-5",cy:"-4",rx:"6",ry:"3.5",fill:"#4C9A6B",transform:"rotate(-30 -5 -4)"}),r.jsx("ellipse",{cx:"5",cy:"-4",rx:"6",ry:"3.5",fill:"#5BB07E",transform:"rotate(30 5 -4)"})]}),x&&r.jsxs(r.Fragment,{children:[r.jsx("rect",{x:60-(2+i*2.5),y:h,width:(2+i*2.5)*2,height:c,rx:"2",fill:l}),s.shape==="pine"?r.jsxs(r.Fragment,{children:[r.jsx("polygon",{points:`60,${h-f*2.2} ${60-f},${h+4} ${60+f},${h+4}`,fill:a}),r.jsx("polygon",{points:`60,${h-f*3} ${60-f*.8},${h-f*.7} ${60+f*.8},${h-f*.7}`,fill:d})]}):s.shape==="tall"?r.jsxs(r.Fragment,{children:[r.jsx("ellipse",{cx:"60",cy:h-f*.3,rx:f*.78,ry:f*1.55,fill:a}),r.jsx("ellipse",{cx:"60",cy:h-f*.9,rx:f*.5,ry:f*1,fill:d,opacity:"0.9"})]}):r.jsxs(r.Fragment,{children:[r.jsx("circle",{cx:"60",cy:h,r:f,fill:a}),r.jsx("circle",{cx:60-f*.7,cy:h+f*.3,r:f*.78,fill:a}),r.jsx("circle",{cx:60+f*.7,cy:h+f*.3,r:f*.78,fill:d}),r.jsx("circle",{cx:"60",cy:h-f*.5,r:f*.8,fill:d,opacity:"0.92"})]})]})]})}function s0({species:e}){return r.jsx(Cc,{species:e,progress:1,size:56})}const l0=[{id:"day",label:"Day"},{id:"week",label:"Week"},{id:"month",label:"Month"},{id:"year",label:"Year"}],Dr=e=>e>=60?`${Math.floor(e/60)}h ${e%60}m`:`${e}m`,a0=e=>{const t=e<12?"am":"pm",n=e%12===0?12:e%12;return`${String(n).padStart(2,"0")} ${t}`};function d0(e){const t=e<=60?10:e<=120?20:e<=300?60:120,n=Math.max(60,Math.ceil((e||1)/t)*t),o=[];for(let i=0;i<=n;i+=t)o.push(i);return{max:n,ticks:o}}const xm=e=>{const t=new Date(e);return t.setHours(0,0,0,0),t},c0=e=>{const t=xm(e),n=(t.getDay()+6)%7;return t.setDate(t.getDate()-n),t},g0=e=>new Date(e.getFullYear(),e.getMonth(),1),u0=e=>new Date(e.getFullYear(),0,1);function p0(e,t){if(e==="day"){const i=xm(t);return{start:i,end:new Date(+i+864e5),prev:new Date(+i-864e5),prev2:new Date(+i-2*864e5)}}if(e==="week"){const i=c0(t);return{start:i,end:new Date(+i+7*864e5),prev:new Date(+i-7*864e5),prev2:new Date(+i-14*864e5)}}if(e==="month"){const i=g0(t),s=t.getFullYear(),l=t.getMonth();return{start:i,end:new Date(s,l+1,1),prev:new Date(s,l-1,1),prev2:new Date(s,l-2,1)}}const n=t.getFullYear();return{start:u0(t),end:new Date(n+1,0,1),prev:new Date(n-1,0,1),prev2:new Date(n-2,0,1)}}function b0({sessions:e=[],onBack:t}){const[n,o]=g.useState("day"),i=new Date,{start:s,end:l,prev:a,prev2:d}=p0(n,i),c=de=>new Date(de.started_at||de.created_at),h=e.filter(de=>de.completed),x=(de,ye,q)=>{const N=c(de);return N>=ye&&N<q},f=(de,ye)=>h.filter(q=>x(q,de,ye)).reduce((q,N)=>q+(N.actual_min||0),0),R=h.filter(de=>x(de,s,l)),S=R.reduce((de,ye)=>de+(ye.actual_min||0),0),y=f(a,s),A=f(d,a),m=R.length,p=Array(24).fill(0);R.forEach(de=>{p[c(de).getHours()]+=de.actual_min||0});const b=Math.max(...p,0),E=d0(b),C={};R.forEach(de=>{const ye=Qt[de.tree]?de.tree:wo;C[ye]=(C[ye]||0)+(de.actual_min||0)});const z=Object.entries(C).map(([de,ye])=>({name:Qt[de].label,min:ye,color:Qt[de].leaf})).sort((de,ye)=>ye.min-de.min),M=y>0?Math.round((S-y)/y*100):S>0?100:0,_=M>0?wc:M<0?kc:tm,B=M>0?"#4C9A6B":M<0?"#C2536B":"#9A968C",W={day:"yesterday",week:"last week",month:"last month",year:"last year"}[n],j={day:"2 days ago",week:"2 weeks ago",month:"2 months ago",year:"2 years ago"}[n],J=54,I=22,re=2*Math.PI*J;let ue=0;return r.jsxs("div",{style:Ie.page,children:[r.jsxs("div",{style:Ie.topbar,children:[r.jsxs("button",{onClick:t,style:Ie.back,children:[r.jsx(Vb,{size:18})," Grove"]}),r.jsx("h1",{style:Ie.h1,children:"Insights"}),r.jsx("div",{style:{width:76}})]}),r.jsx("div",{style:Ie.rangeBar,children:l0.map(de=>r.jsx("button",{onClick:()=>o(de.id),style:{...Ie.rangeBtn,...n===de.id?Ie.rangeOn:{}},children:de.label},de.id))}),r.jsxs("div",{style:Ie.headline,children:[r.jsxs("div",{style:Ie.bigStat,children:[r.jsx("div",{style:Ie.bigVal,children:Dr(S)}),r.jsxs("div",{style:Ie.bigLbl,children:["Focused this ",n]})]}),r.jsxs("div",{style:Ie.bigStat,children:[r.jsx("div",{style:Ie.bigVal,children:m}),r.jsx("div",{style:Ie.bigLbl,children:"Trees"})]})]}),r.jsxs("div",{style:Ie.card,children:[r.jsxs("div",{style:Ie.cardHead,children:[r.jsxs("div",{style:Ie.cardTitle,children:["Your forest this ",n]}),r.jsx("div",{style:Ie.cardHint,children:"Each tree is a completed session — bigger means longer focus"})]}),r.jsx(f0,{sessions:R}),r.jsxs("div",{style:Ie.forestNumber,children:[m," ",m===1?"tree":"trees"," · ",Dr(S)," focused"]})]}),r.jsx(oa,{title:"Focus distribution",hint:"Minutes focused at each time of day",children:b===0?r.jsx(iu,{}):r.jsx(h0,{hours:p,axis:E})}),r.jsx(oa,{title:"Pillar distribution",hint:"How your focus splits across the five trees",children:z.length===0?r.jsx(iu,{}):r.jsxs("div",{style:Ie.donutWrap,children:[r.jsxs("svg",{viewBox:"0 0 140 140",width:"150",height:"150",style:{flexShrink:0},children:[z.map(de=>{const ye=de.min/(S||1)*re,q=r.jsx("circle",{cx:"70",cy:"70",r:J,fill:"none",stroke:de.color,strokeWidth:I,strokeDasharray:`${ye} ${re-ye}`,strokeDashoffset:-ue,transform:"rotate(-90 70 70)"},de.name);return ue+=ye,q}),r.jsx("text",{x:"70",y:"66",textAnchor:"middle",style:Ie.donutCenterTop,children:Dr(S)}),r.jsx("text",{x:"70",y:"82",textAnchor:"middle",style:Ie.donutCenterSub,children:"total"})]}),r.jsx("div",{style:Ie.legend,children:z.map(de=>r.jsxs("div",{style:Ie.legendRow,children:[r.jsx("span",{style:{...Ie.legendDot,background:de.color}}),r.jsx("span",{style:Ie.legendName,children:de.name}),r.jsxs("span",{style:Ie.legendVal,children:[Dr(de.min)," · ",Math.round(de.min/(S||1)*100),"%"]})]},de.name))})]})}),r.jsxs(oa,{title:"Focus trend",hint:`This ${n} vs the previous two`,children:[r.jsxs("div",{style:Ie.trend3,children:[r.jsxs("div",{style:Ie.trendCol,children:[r.jsx("div",{style:Ie.trendVal,children:Dr(S)}),r.jsxs("div",{style:Ie.trendLbl,children:["This ",n]})]}),r.jsxs("div",{style:Ie.trendCol,children:[r.jsx("div",{style:{...Ie.trendVal,color:"var(--text-2)"},children:Dr(y)}),r.jsx("div",{style:Ie.trendLbl,children:W})]}),r.jsxs("div",{style:Ie.trendCol,children:[r.jsx("div",{style:{...Ie.trendVal,color:"var(--text-3)"},children:Dr(A)}),r.jsx("div",{style:Ie.trendLbl,children:j})]})]}),r.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:14},children:r.jsxs("div",{style:{...Ie.trendBadge,color:B,background:B+"1A"},children:[r.jsx(_,{size:15})," ",M>0?"+":"",M,"% vs ",W]})}),r.jsx(x0,{items:[{label:`This ${n}`,value:S,color:"#4C9A6B"},{label:W,value:y,color:"var(--text-3)"},{label:j,value:A,color:"var(--text-3)"}]})]})]})}const m0=e=>e===0?"12a":e<12?`${e}a`:e===12?"12p":`${e-12}p`;function h0({hours:e,axis:t}){return r.jsxs("div",{children:[r.jsxs("div",{style:Ie.vcPlot,children:[t.ticks.map(n=>r.jsxs("div",{style:{...Ie.vcGridRow,bottom:`${n/t.max*100}%`},children:[r.jsx("span",{style:Ie.vcYLabel,children:n}),r.jsx("div",{style:Ie.vcGridLine})]},n)),r.jsx("div",{style:Ie.vcBars,children:e.map((n,o)=>r.jsx("div",{style:Ie.vcCell,title:`${a0(o)} · ${n} min`,children:r.jsx("div",{style:{...Ie.vcBar,height:n>0?`max(3px, ${n/t.max*100}%)`:0}})},o))})]}),r.jsx("div",{style:Ie.vcXAxis,children:e.map((n,o)=>r.jsx("div",{style:Ie.vcXCell,children:o%3===0?m0(o):""},o))}),r.jsx("div",{style:Ie.vcYTitle,children:"minutes focused, by hour of day"})]})}function f0({sessions:e}){if(!e.length)return r.jsx("div",{style:Ie.sceneEmpty,children:"No trees yet this period. 🌱"});const n=e.slice(0,80),o=e.length-n.length,i=s=>Math.round(Math.max(40,Math.min(88,40+(s||0)*.6)));return r.jsxs("div",{children:[r.jsx("div",{style:Ie.scene,children:n.map(s=>r.jsx("div",{style:Ie.sceneTree,title:`${s.label||"Focus"} · ${Dr(s.actual_min||s.duration_min)}`,children:r.jsx(Cc,{species:s.tree,progress:1,size:i(s.actual_min||s.duration_min)})},s.id))}),o>0&&r.jsxs("div",{style:Ie.overflow,children:["+",o," more trees"]})]})}function oa({title:e,hint:t,children:n}){return r.jsxs("div",{style:Ie.card,children:[r.jsxs("div",{style:Ie.cardHead,children:[r.jsx("div",{style:Ie.cardTitle,children:e}),t&&r.jsx("div",{style:Ie.cardHint,children:t})]}),n]})}function iu(){return r.jsx("div",{style:Ie.empty,children:"No focus sessions in this period yet. 🌱"})}function x0({items:e}){const t=Math.max(1,...e.map(n=>n.value));return r.jsx("div",{style:Ie.tbWrap,children:e.map(n=>r.jsxs("div",{style:Ie.tbRow,children:[r.jsx("div",{style:Ie.tbLbl,children:n.label}),r.jsx("div",{style:Ie.tbTrack,children:r.jsx("div",{style:{...Ie.tbBar,width:`${n.value/t*100}%`,background:n.color}})}),r.jsx("div",{style:Ie.tbVal,children:Dr(n.value)})]},n.label))})}const Ie={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"20px 16px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:720,margin:"0 auto"},topbar:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16},back:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},h1:{fontSize:20,fontWeight:700,margin:0,fontFamily:"'Fraunces',Georgia,serif"},rangeBar:{display:"flex",gap:6,background:"var(--surface)",padding:5,borderRadius:12,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},rangeBtn:{flex:1,border:"none",background:"none",padding:"9px 0",borderRadius:8,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},rangeOn:{background:"var(--accent-strong)",color:"#fff"},headline:{display:"flex",gap:12,marginBottom:16},bigStat:{flex:1,background:"var(--surface)",borderRadius:14,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},bigVal:{fontSize:26,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em"},bigLbl:{fontSize:12,color:"var(--text-3)",marginTop:3,fontWeight:500},card:{background:"var(--surface)",borderRadius:16,padding:"18px 18px 20px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:16},cardHead:{marginBottom:14},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardHint:{fontSize:12,color:"var(--text-3)",marginTop:2},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"24px 0"},scene:{display:"flex",flexWrap:"wrap",alignItems:"flex-end",justifyContent:"center",gap:"0 2px",padding:"14px 8px 6px",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,minHeight:110,border:"1px solid var(--border)"},sceneTree:{lineHeight:0},sceneEmpty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"34px 0",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,border:"1px solid var(--border)"},overflow:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",marginTop:6,fontWeight:600},forestNumber:{textAlign:"center",marginTop:12,fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},vcPlot:{position:"relative",height:180,paddingLeft:30},vcGridRow:{position:"absolute",left:0,right:0,display:"flex",alignItems:"center",height:0},vcYLabel:{width:26,marginRight:4,textAlign:"right",fontSize:9,color:"var(--text-3)",fontWeight:600,flexShrink:0},vcGridLine:{flex:1,height:1,background:"#EEEBE4"},vcBars:{position:"absolute",left:30,right:0,top:0,bottom:0,display:"flex",alignItems:"flex-end",gap:1},vcCell:{flex:1,height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"center"},vcBar:{width:"72%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",transition:"height 0.3s"},vcXAxis:{display:"flex",marginLeft:30,marginTop:4},vcXCell:{flex:1,textAlign:"center",fontSize:8.5,color:"var(--text-3)",fontWeight:600,overflow:"hidden"},vcYTitle:{textAlign:"center",fontSize:9.5,color:"var(--text-3)",marginTop:6,letterSpacing:"0.06em",textTransform:"uppercase",fontWeight:600},donutWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap",justifyContent:"center"},donutCenterTop:{fontSize:16,fontWeight:800,fill:"var(--text)",fontFamily:"'Fraunces',Georgia,serif"},donutCenterSub:{fontSize:9,fill:"#9A968C",textTransform:"uppercase",letterSpacing:"0.08em"},legend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8},legendDot:{width:11,height:11,borderRadius:3,flexShrink:0},legendName:{flex:1,fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},legendVal:{fontSize:12,color:"var(--text-3)",fontWeight:600,flexShrink:0},trend3:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12,gap:8},trendCol:{textAlign:"center",flex:1},trendVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},trendLbl:{fontSize:11,color:"var(--text-3)",marginTop:2},trendBadge:{display:"inline-flex",alignItems:"center",gap:4,fontSize:13,fontWeight:800,padding:"6px 12px",borderRadius:20,width:"fit-content"},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:78,fontSize:11,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},tbTrack:{flex:1,height:14,background:"#F2F0EA",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:56,fontSize:11,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"}},y0=[15,30,45,60,90],ia="anvil_grove_active",su=e=>`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`,rl=e=>e>=60?`${Math.floor(e/60)}h ${e%60}m`:`${e}m`;function v0(){const[e,t]=g.useState("timer"),[n,o]=g.useState("idle"),[i,s]=g.useState(15),[l,a]=g.useState(!1),[d,c]=g.useState(""),[h,x]=g.useState(wo),[f,R]=g.useState(()=>localStorage.getItem("anvil_grove_deepfocus")!=="0"),[S,y]=g.useState(15*60),[A,m]=g.useState({sessions:[],stats:null}),p=g.useRef(null),b=g.useRef(null),E=g.useRef(!1),C=g.useCallback(async()=>{try{m(await $.getFocus())}catch{}},[]),z=g.useCallback(async(Y,le)=>{if(!E.current){E.current=!0,localStorage.removeItem(ia);try{await $.createFocus({label:d.trim()||null,tree:h,duration_min:i,actual_min:le,completed:Y,started_at:b.current,ended_at:new Date().toISOString()})}catch{}C()}},[d,h,i,C]),M=g.useCallback(()=>{if(n!=="running")return;const Y=b.current?Math.round((Date.now()-new Date(b.current).getTime())/6e4):0;o("failed"),z(!1,Math.max(0,Math.min(i,Y)))},[n,i,z]),_=g.useCallback(()=>{o("done"),y(0),z(!0,i)},[i,z]);g.useEffect(()=>{C();const Y=JSON.parse(localStorage.getItem(ia)||"null");if(Y&&Y.endTime){const le=Math.round((Y.endTime-Date.now())/1e3);s(Y.duration),c(Y.label||""),x(Y.tree||"oak"),p.current=Y.endTime,b.current=Y.startedAt,le>0?(y(le),o("running")):(o("done"),E.current=!1,z(!0,Y.duration))}},[]),g.useEffect(()=>{if(n!=="running")return;const Y=()=>{const T=Math.round((p.current-Date.now())/1e3);if(T<=0){_();return}y(T)};Y();const le=setInterval(Y,250);return()=>clearInterval(le)},[n,_]),g.useEffect(()=>{if(n!=="running"||!f)return;const Y=()=>{document.hidden&&M()};return document.addEventListener("visibilitychange",Y),()=>document.removeEventListener("visibilitychange",Y)},[n,f,M]),g.useEffect(()=>{const Y=()=>{!document.hidden&&n!=="running"&&C()};window.addEventListener("focus",Y),document.addEventListener("visibilitychange",Y);const le=setInterval(Y,6e4);return()=>{window.removeEventListener("focus",Y),document.removeEventListener("visibilitychange",Y),clearInterval(le)}},[C,n]);const B=()=>R(Y=>{const le=!Y;return localStorage.setItem("anvil_grove_deepfocus",le?"1":"0"),le}),W=()=>{E.current=!1,b.current=new Date().toISOString(),p.current=Date.now()+i*60*1e3,localStorage.setItem(ia,JSON.stringify({endTime:p.current,duration:i,label:d,tree:h,startedAt:b.current})),y(i*60),o("running")},j=()=>{o("idle"),y(i*60)},J=Y=>{a(!1),s(Y),y(Y*60)},I=()=>{l||(a(!0),s(5),y(5*60))},re=Y=>{if(a(!0),Y===""){s(0),y(0);return}const le=Math.max(1,Math.min(600,parseInt(Y,10)||0));s(le),y(le*60)},ue=i*60,de=n==="running"?1-S/ue:n==="done"?1:0,ye=130,q=2*Math.PI*ye,N=q*(1-(n==="running"?de:n==="done"?1:0)),se=A.stats;return e==="stats"?r.jsx(b0,{sessions:A.sessions,onBack:()=>t("timer")}):r.jsxs("div",{style:Re.page,children:[r.jsxs("div",{style:Re.head,children:[r.jsx("div",{style:Re.eyebrow,children:"Anvil · Grove"}),r.jsx("h1",{style:Re.h1,children:"Grove"}),r.jsx("div",{style:Re.subhead,children:"Plant a tree, stay focused, grow your grove."}),r.jsxs("button",{onClick:()=>t("stats"),style:Re.insightsBtn,disabled:n==="running",children:[r.jsx(wx,{size:15})," Insights"]})]}),se&&r.jsxs("div",{style:Re.statRow,children:[r.jsx(is,{label:"Today",value:rl(se.today_minutes)}),r.jsx(is,{label:"Trees",value:se.trees}),r.jsx(is,{label:"Streak",value:`${se.streak}d`}),r.jsx(is,{label:"Success",value:`${se.success_rate}%`})]}),r.jsxs("div",{style:Re.stage,children:[r.jsxs("div",{style:Re.ringWrap,children:[r.jsxs("svg",{width:"300",height:"300",viewBox:"0 0 300 300",style:{position:"absolute",inset:0},children:[r.jsx("circle",{cx:"150",cy:"150",r:ye,fill:"none",stroke:"var(--border)",strokeWidth:"10"}),r.jsx("circle",{cx:"150",cy:"150",r:ye,fill:"none",stroke:n==="failed"?"#C2536B":"#4C9A6B",strokeWidth:"10",strokeLinecap:"round",strokeDasharray:q,strokeDashoffset:N,transform:"rotate(-90 150 150)",style:{transition:"stroke-dashoffset 0.4s linear"}})]}),r.jsx("div",{style:Re.ringInner,children:r.jsx(Cc,{species:h,progress:n==="idle"?0:de,withered:n==="failed",size:170})})]}),n==="idle"&&r.jsxs(r.Fragment,{children:[r.jsx("div",{style:Re.timeBig,children:su(i*60)}),r.jsxs("div",{style:Re.controls,children:[r.jsxs("div",{style:Re.chips,children:[y0.map(Y=>r.jsxs("button",{onClick:()=>J(Y),style:{...Re.chip,...!l&&i===Y?Re.chipOn:{}},children:[Y,"m"]},Y)),r.jsx("button",{onClick:I,style:{...Re.chip,...l?Re.chipOn:{}},children:"Custom"})]}),l&&r.jsxs("div",{style:Re.customRow,children:[r.jsx("input",{type:"number",min:"1",max:"600",inputMode:"numeric",autoFocus:!0,value:i||"",onChange:Y=>re(Y.target.value),placeholder:"e.g. 50",style:Re.customInput}),r.jsx("span",{style:Re.customUnit,children:"minutes"})]}),r.jsx("input",{value:d,onChange:Y=>c(Y.target.value),placeholder:"What are you focusing on? (optional)",style:Re.input,maxLength:60}),r.jsx("div",{style:Re.treePick,children:Object.entries(Qt).map(([Y,le])=>r.jsxs("button",{onClick:()=>x(Y),title:le.label,style:{...Re.treeBtn,...h===Y?{borderColor:le.leaf,background:le.leaf+"1A"}:{}},children:[r.jsx("span",{style:{...Re.treeDot,background:le.leaf}}),le.label]},Y))}),r.jsxs("button",{onClick:B,style:Re.toggleRow,children:[r.jsxs("div",{style:{textAlign:"left"},children:[r.jsx("div",{style:Re.toggleTitle,children:"Deep Focus"}),r.jsx("div",{style:Re.toggleHint,children:f?"Leaving the app kills the tree":"Tree survives until you give up"})]}),r.jsx("div",{style:{...Re.switch,...f?Re.switchOn:{}},children:r.jsx("div",{style:{...Re.knob,...f?Re.knobOn:{}}})})]}),r.jsx("button",{onClick:W,disabled:i<1,style:{...Re.plantBtn,...i<1?{opacity:.5,cursor:"not-allowed"}:{}},children:"Plant tree"})]})]}),n==="running"&&r.jsxs(r.Fragment,{children:[r.jsx("div",{style:Re.timeBig,children:su(S)}),r.jsx("div",{style:Re.focusLabel,children:d.trim()||"Focusing…"}),r.jsx("div",{style:f?Re.warn:Re.warnSoft,children:f?"⚠ Deep Focus on — leaving this app will kill your tree.":"🌿 Relaxed mode — only Give up ends this session."}),r.jsx("button",{onClick:M,style:Re.giveUp,children:"Give up"})]}),n==="done"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:Re.resultTitle,children:["🌳 You grew a ",Qt[h].label," tree!"]}),r.jsxs("div",{style:Re.resultSub,children:[rl(i)," of focus added to your grove."]}),r.jsx("button",{onClick:j,style:Re.plantBtn,children:"Plant another"})]}),n==="failed"&&r.jsxs(r.Fragment,{children:[r.jsx("div",{style:{...Re.resultTitle,color:"#C2536B"},children:"Your tree withered."}),r.jsx("div",{style:Re.resultSub,children:"You left before the timer finished. Try again?"}),r.jsx("button",{onClick:j,style:Re.plantBtn,children:"Try again"})]})]}),r.jsx(k0,{sessions:A.sessions,onDelete:async Y=>{await $.deleteFocus(Y),C()}})]})}function is({label:e,value:t}){return r.jsxs("div",{style:Re.stat,children:[r.jsx("div",{style:Re.statValue,children:t}),r.jsx("div",{style:Re.statLabel,children:e})]})}function k0({sessions:e,onDelete:t}){const n=e.filter(l=>l.completed);if(n.length===0)return r.jsx("div",{style:Re.forestEmpty,children:"Your grove is empty. Plant your first tree above. 🌱"});const o={};for(const l of n){const a=(l.started_at||l.created_at||"").slice(0,10);(o[a]||(o[a]=[])).push(l)}const i=Object.keys(o).sort().reverse(),s=l=>{const a=new Date().toISOString().slice(0,10);return l===a?"Today":new Date(l+"T00:00").toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})};return r.jsxs("div",{style:Re.forest,children:[r.jsxs("div",{style:Re.forestHead,children:["Your Grove · ",n.length," trees"]}),i.map(l=>r.jsxs("div",{style:Re.daySection,children:[r.jsxs("div",{style:Re.dayLabel,children:[s(l)," · ",o[l].length]}),r.jsx("div",{style:Re.treeGrid,children:o[l].map(a=>r.jsxs("div",{style:Re.treeCard,title:`${a.label||"Focus"} · ${rl(a.actual_min)}`,onDoubleClick:()=>t(a.id),children:[r.jsx(s0,{species:a.tree}),r.jsx("div",{style:Re.treeCardMin,children:rl(a.actual_min||a.duration_min)}),a.label&&r.jsx("div",{style:Re.treeCardLabel,children:a.label})]},a.id))})]},l)),r.jsx("div",{style:Re.forestHint,children:"Double-tap a tree to remove it."})]})}const Re={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:820,margin:"0 auto"},head:{marginBottom:16,textAlign:"center"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},insightsBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginTop:12},statRow:{display:"flex",gap:10,justifyContent:"center",marginBottom:18,flexWrap:"wrap"},stat:{background:"var(--surface)",borderRadius:12,padding:"10px 18px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",minWidth:78},statValue:{fontSize:19,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},statLabel:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},stage:{background:"var(--surface)",borderRadius:18,padding:"28px 24px 32px",boxShadow:"0 2px 12px rgba(0,0,0,0.06)",display:"flex",flexDirection:"column",alignItems:"center",marginBottom:26},ringWrap:{position:"relative",width:300,height:300,display:"grid",placeItems:"center"},ringInner:{position:"relative",zIndex:1,display:"grid",placeItems:"center"},timeBig:{fontSize:40,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:6},focusLabel:{fontSize:14,color:"var(--text-2)",marginTop:2,fontWeight:500},warn:{fontSize:12,color:"#C2773B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},warnSoft:{fontSize:12,color:"#4C9A6B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},toggleRow:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,border:"1px solid var(--border)",background:"var(--surface)",borderRadius:12,padding:"10px 14px",cursor:"pointer",fontFamily:"inherit",width:"100%"},toggleTitle:{fontSize:14,fontWeight:700,color:"var(--text)"},toggleHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},switch:{width:42,height:24,borderRadius:12,background:"var(--border)",flexShrink:0,padding:2,transition:"background 0.18s",boxSizing:"border-box"},switchOn:{background:"#4C9A6B"},knob:{width:20,height:20,borderRadius:"50%",background:"var(--surface)",boxShadow:"0 1px 2px rgba(0,0,0,0.2)",transform:"translateX(0)",transition:"transform 0.18s"},knobOn:{transform:"translateX(18px)"},controls:{width:"100%",maxWidth:380,display:"flex",flexDirection:"column",gap:14,marginTop:8},chips:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},chip:{border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 16px",borderRadius:20,fontSize:13.5,fontWeight:700,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipOn:{background:"#4C9A6B",color:"#fff",borderColor:"#4C9A6B"},customRow:{display:"flex",alignItems:"center",justifyContent:"center",gap:8},customInput:{border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",fontSize:15,fontWeight:700,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center",width:100},customUnit:{fontSize:13,color:"var(--text-3)",fontWeight:600},input:{border:"1px solid var(--border)",borderRadius:10,padding:"11px 13px",fontSize:14,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center"},treePick:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},treeBtn:{display:"flex",alignItems:"center",gap:6,border:"1.5px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},treeDot:{width:10,height:10,borderRadius:"50%"},plantBtn:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:4},giveUp:{border:"1px solid var(--border)",background:"var(--surface)",color:"#C2536B",padding:"11px 26px",borderRadius:11,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:18},resultTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginTop:14,textAlign:"center"},resultSub:{fontSize:13.5,color:"var(--text-3)",marginTop:6,marginBottom:18,textAlign:"center"},forest:{background:"var(--surface)",borderRadius:16,padding:"20px 22px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},forestHead:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:14},forestEmpty:{background:"var(--surface)",borderRadius:16,padding:"40px 20px",textAlign:"center",color:"var(--text-3)",fontSize:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},daySection:{marginBottom:16},dayLabel:{fontSize:12,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.04em",marginBottom:8},treeGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(80px,1fr))",gap:8},treeCard:{display:"flex",flexDirection:"column",alignItems:"center",padding:"8px 4px",borderRadius:10,cursor:"pointer",background:"var(--surface-2)"},treeCardMin:{fontSize:12,fontWeight:700,color:"#4C9A6B",marginTop:-4},treeCardLabel:{fontSize:10.5,color:"var(--text-3)",marginTop:2,textAlign:"center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:76},forestHint:{fontSize:11,color:"var(--text-3)",textAlign:"center",marginTop:6}},pd=[{code:"INR",symbol:"₹",locale:"en-IN",label:"Indian Rupee"},{code:"USD",symbol:"$",locale:"en-US",label:"US Dollar"},{code:"EUR",symbol:"€",locale:"de-DE",label:"Euro"},{code:"GBP",symbol:"£",locale:"en-GB",label:"British Pound"},{code:"JPY",symbol:"¥",locale:"ja-JP",label:"Japanese Yen"},{code:"AED",symbol:"د.إ",locale:"en-AE",label:"UAE Dirham"},{code:"AUD",symbol:"A$",locale:"en-AU",label:"Australian Dollar"},{code:"CAD",symbol:"C$",locale:"en-CA",label:"Canadian Dollar"},{code:"SGD",symbol:"S$",locale:"en-SG",label:"Singapore Dollar"}],lu="INR",ym="anvil_currency",kl=e=>pd.find(t=>t.code===e)||pd[0];function jo(){try{return localStorage.getItem(ym)||lu}catch{return lu}}function au(e){try{localStorage.setItem(ym,e)}catch{}return window.dispatchEvent(new CustomEvent("anvil-currency",{detail:e})),e}function nl(e,t){const n=kl(t||jo()),o=Math.round(Number(e)||0);return n.symbol+o.toLocaleString(n.locale)}function vm(e,t){const n=kl(t||jo()),o=Number(e)||0;return n.symbol+o.toLocaleString(n.locale,{minimumFractionDigits:2,maximumFractionDigits:2})}function du(e,t){const n=kl(t||jo()),o=Math.round(Number(e)||0),i=Math.abs(o);return n.code==="INR"?i>=1e7?n.symbol+(o/1e7).toFixed(i>=1e8?0:1)+"Cr":i>=1e5?n.symbol+(o/1e5).toFixed(i>=1e6?0:1)+"L":i>=1e3?n.symbol+(o/1e3).toFixed(i>=1e4?0:1)+"K":n.symbol+o:i>=1e9?n.symbol+(o/1e9).toFixed(1)+"B":i>=1e6?n.symbol+(o/1e6).toFixed(1)+"M":i>=1e3?n.symbol+(o/1e3).toFixed(1)+"K":n.symbol+o}function wl(){const[e,t]=g.useState(jo());return g.useEffect(()=>{const n=o=>t(o.detail||jo());return window.addEventListener("anvil-currency",n),()=>window.removeEventListener("anvil-currency",n)},[]),kl(e)}const w0="grove_rates",j0="reward_rates",ss=Object.keys(Qt),cu=[{id:"kickstart",label:"Kickstart"},{id:"golden",label:"Golden Book"},{id:"habits",label:"Habits"},{id:"quadrant",label:"Quadrant"},{id:"goals",label:"Goals"},{id:"grove",label:"Grove"},{id:"journal",label:"Journal"},{id:"revision",label:"Revision"},{id:"affirmations",label:"Affirmations"},{id:"skills",label:"Skills"},{id:"spiritual",label:"Spiritual"},{id:"mindscape",label:"Mindscape"},{id:"vault",label:"Wallet"},{id:"expenses",label:"Expenses"},{id:"delight",label:"Delights"}],gu=new Set(["worth","achievements"]),Un="#C9A227",Uo="#3A7CA5",Yn="#C2536B",S0=e=>{const t=Math.floor(e/60),n=Math.round(e%60);return t&&n?`${t}h ${n}m`:t?`${t}h`:`${n}m`},C0=e=>{let t=Math.round((e||0)*60);const n=Math.floor(t/3600);t%=3600;const o=Math.floor(t/60);return t%=60,[n?`${n}h`:null,n||o?`${o}m`:null,`${t}s`].filter(Boolean).join(" ")},I0=()=>{const e=new Date,t=n=>String(n).padStart(2,"0");return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}T${t(e.getHours())}:${t(e.getMinutes())}`},uu=e=>{if(!e)return"";const t=new Date(e.includes("T")?e:e+"T00:00:00");return isNaN(t)?e:t.toLocaleDateString("en-US",e.includes("T")?{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}:{month:"short",day:"numeric",year:"numeric"})},tr=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,pu=e=>{const t=new Date(e);return t.setHours(0,0,0,0),t.setDate(t.getDate()-(t.getDay()+6)%7),t},ls=[{id:"today",label:"Today"},{id:"all",label:"All time"},{id:"tweek",label:"This week"},{id:"tmonth",label:"This month"},{id:"pweek",label:"Last week"},{id:"pmonth",label:"Last month"},{id:"tyear",label:"This year"}];function z0(e){const t=new Date;if(e==="today")return[tr(t),tr(t)];if(e==="tweek"){const n=pu(t),o=new Date(n);return o.setDate(n.getDate()+6),[tr(n),tr(o)]}if(e==="pweek"){const n=pu(t);n.setDate(n.getDate()-7);const o=new Date(n);return o.setDate(n.getDate()+6),[tr(n),tr(o)]}return e==="tmonth"?[tr(new Date(t.getFullYear(),t.getMonth(),1)),tr(new Date(t.getFullYear(),t.getMonth()+1,0))]:e==="pmonth"?[tr(new Date(t.getFullYear(),t.getMonth()-1,1)),tr(new Date(t.getFullYear(),t.getMonth(),0))]:e==="tyear"?[tr(new Date(t.getFullYear(),0,1)),tr(new Date(t.getFullYear(),11,31))]:["0000-01-01","9999-12-31"]}function T0(){const e=wl(),t=u=>vm(u,e.code),[n,o]=g.useState([]),[i,s]=g.useState([]),[l,a]=g.useState([]),[d,c]=g.useState([]),[h,x]=g.useState([]),[f,R]=g.useState({}),[S,y]=g.useState({}),[A,m]=g.useState(!1),[p,b]=g.useState({}),[E,C]=g.useState({}),[z,M]=g.useState(!1),[_,B]=g.useState(!1),[W,j]=g.useState(null),[J,I]=g.useState(""),[re,ue]=g.useState(""),[de,ye]=g.useState(!1),[q,N]=g.useState("today"),se=()=>$.getPayouts().then(c).catch(()=>{}),Y=()=>$.getRewardRates().then(a).catch(()=>{});g.useEffect(()=>{(async()=>{try{const[u,Z,Fe,Me,je,_e,St]=await Promise.all([$.getFocus(),$.getScreenTime(),$.getRewardRates(),$.getPayouts(),$.getAchievements(),$.getSetting(w0),$.getSetting(j0)]);o(u.sessions||[]),s(Array.isArray(Z)?Z:[]),a(Fe||[]),c(Me||[]),x(Array.isArray(je)?je:[]),R((_e==null?void 0:_e.value)||{}),y((St==null?void 0:St.value)||{})}catch{}m(!0)})()},[]);const le={};l.forEach(u=>{var Z;(le[Z=`${u.kind}:${u.rkey}`]||(le[Z]=[])).push({eff:u.eff_date,rate:u.rate})}),Object.values(le).forEach(u=>u.sort((Z,Fe)=>Z.eff.localeCompare(Fe.eff)));const T=(u,Z,Fe)=>{const Me=le[`${u}:${Z}`];if(Me){let je=null;for(const _e of Me)if(_e.eff<=Fe)je=_e.rate;else break;if(je!==null)return je}return(u==="focus"?f[Z]:S[Z])||0},oe=(u,Z)=>{const Fe=le[`${u}:${Z}`];return Fe&&Fe.length?Fe[Fe.length-1].rate:(u==="focus"?f[Z]:S[Z])??""},[Ce,V]=z0(q);let v=0,D=0;n.filter(u=>u.completed).forEach(u=>{const Z=(u.started_at||u.created_at||"").slice(0,10),Fe=Qt[u.tree]?u.tree:wo;v+=(u.actual_min||0)/60*T("focus",Fe,Z)}),i.forEach(u=>{gu.has(u.screen)||(D+=u.seconds/60*T("usage",u.screen,u.date))});const P=h.reduce((u,Z)=>u+(Z.reward||0),0),G=v+D+P,ne=d.reduce((u,Z)=>u+Z.amount,0),ge=Math.max(0,G-ne),O={};ss.forEach(u=>O[u]={minutes:0,earned:0}),n.filter(u=>u.completed).forEach(u=>{const Z=(u.started_at||u.created_at||"").slice(0,10);if(Z<Ce||Z>V)return;const Fe=Qt[u.tree]?u.tree:wo,Me=u.actual_min||0;O[Fe].minutes+=Me,O[Fe].earned+=Me/60*T("focus",Fe,Z)});const F=ss.reduce((u,Z)=>u+O[Z].earned,0),k={};i.forEach(u=>{var Fe;if(gu.has(u.screen)||u.date<Ce||u.date>V)return;const Z=k[Fe=u.screen]||(k[Fe]={seconds:0,earned:0});Z.seconds+=u.seconds,Z.earned+=u.seconds/60*T("usage",u.screen,u.date)});const ee=Object.values(k).reduce((u,Z)=>u+Z.earned,0),me=h.filter(u=>u.date>=Ce&&u.date<=V&&(u.reward||0)>0),Te=[...me].sort((u,Z)=>Z.date.localeCompare(u.date)||Z.reward-u.reward),ct=me.reduce((u,Z)=>u+(Z.reward||0),0),Le=F+ee+ct,ot=Le>0?F/Le*100:0,et=Le>0?ee/Le*100:0,Qe=Le>0?ct/Le*100:0,tt=ss.map(u=>({p:u,...O[u],...Qt[u]})).filter(u=>u.minutes>0).sort((u,Z)=>Z.earned-u.earned),gt=cu.map(u=>({...u,...k[u.id]||{seconds:0,earned:0}})).filter(u=>u.seconds>0).sort((u,Z)=>Z.earned-u.earned),Yr=(u,Z)=>{$.setRewardRate({kind:"focus",rkey:u,rate:Math.max(0,parseFloat(Z)||0)}).then(Y).catch(()=>{})},Ut=(u,Z)=>{$.setRewardRate({kind:"usage",rkey:u,rate:Math.max(0,parseFloat(Z)||0)}).then(Y).catch(()=>{})},Rt=u=>{ge<=0||(j(u),I(u==="all"?ge.toFixed(2):""),ue(""))},er=async()=>{const u=Math.min(parseFloat(J)||0,ge);u<=0||!re.trim()||(await $.createPayout({amount:u,note:re.trim(),date:I0()}),j(null),I(""),ue(""),await se(),ye(!0))},yr=async u=>{await $.deletePayout(u),se()};return r.jsxs("div",{style:X.page,children:[r.jsxs("div",{style:X.head,children:[r.jsx("div",{style:X.eyebrow,children:"Anvil · Rewards"}),r.jsx("h1",{style:X.h1,children:"Rewards"}),r.jsx("div",{style:X.subhead,children:"Your earned rewards from focus and app usage."})]}),r.jsxs("div",{style:X.hero,children:[r.jsx("button",{onClick:()=>ye(u=>!u),style:X.logIcon,title:"View reward log",children:r.jsx(Jx,{size:16})}),r.jsx("div",{style:X.heroLabel,children:"Final reward · pending"}),r.jsx("div",{style:X.heroVal,children:t(ge)}),r.jsxs("div",{style:X.heroSub,children:["Earned ",t(G)," · Taken ",t(ne),P>0?` · incl. ${t(P)} achievement`:""]}),r.jsxs("div",{style:X.heroBtns,children:[r.jsx("button",{onClick:()=>Rt("partial"),disabled:ge<=0,style:{...X.heroBtnGhost,...ge<=0?X.btnDisabled:{}},children:"Take partial"}),r.jsx("button",{onClick:()=>Rt("all"),disabled:ge<=0,style:{...X.heroBtnSolid,...ge<=0?X.btnDisabled:{}},children:"Take all pending"})]})]}),r.jsxs("div",{style:X.statRow,children:[r.jsxs("div",{style:X.statCard,children:[r.jsx("div",{style:X.statVal,children:t(ne)}),r.jsx("div",{style:X.statLbl,children:"Total taken"})]}),r.jsxs("div",{style:X.statCard,children:[r.jsx("div",{style:{...X.statVal,color:Un},children:t(ge)}),r.jsx("div",{style:X.statLbl,children:"Total pending"})]})]}),r.jsx("div",{style:X.periodRow,children:ls.map(u=>r.jsx("button",{onClick:()=>N(u.id),style:{...X.periodChip,...q===u.id?X.periodChipOn:{}},children:u.label},u.id))}),Le>0?r.jsxs("div",{style:X.card,children:[r.jsxs("div",{style:X.cardTitleRow,children:[r.jsx("span",{style:X.cardTitle,children:"Reward split"}),r.jsxs("span",{style:X.periodTotal,children:[t(Le)," · ",ls.find(u=>u.id===q).label]})]}),r.jsxs("div",{style:X.splitTrack,children:[r.jsx("div",{style:{width:`${ot}%`,background:Un,height:"100%"}}),r.jsx("div",{style:{width:`${et}%`,background:Uo,height:"100%"}}),r.jsx("div",{style:{width:`${Qe}%`,background:Yn,height:"100%"}})]}),r.jsxs("div",{style:X.legendRow,children:[r.jsxs("span",{style:X.legendItem,children:[r.jsx("span",{style:{...X.legendDot,background:Un}})," Focus ",Math.round(ot),"% · ",t(F)]}),r.jsxs("span",{style:X.legendItem,children:[r.jsx("span",{style:{...X.legendDot,background:Uo}})," Usage ",Math.round(et),"% · ",t(ee)]}),r.jsxs("span",{style:X.legendItem,children:[r.jsx("span",{style:{...X.legendDot,background:Yn}})," Achievement ",Math.round(Qe),"% · ",t(ct)]})]})]}):r.jsxs("div",{style:{...X.card,...X.muted},children:["No rewards earned in ",ls.find(u=>u.id===q).label.toLowerCase(),"."]}),r.jsxs("div",{style:X.card,children:[r.jsxs("button",{onClick:()=>M(u=>!u),style:X.collapseBtn,children:[r.jsxs("span",{style:{...X.cardTitle,color:Un},children:["Focus Rewards · ",t(F)]}),r.jsx("span",{style:X.collapseHint,children:z?"Hide rates":"Set rates"})]}),z&&r.jsx("div",{style:{...X.rateGrid,marginTop:12},children:ss.map(u=>r.jsxs("div",{style:X.rateRow,children:[r.jsx("span",{style:{...X.dot,background:Qt[u].leaf}}),r.jsx("span",{style:X.rateName,children:Qt[u].label}),r.jsxs("div",{style:X.rateInputWrap,children:[r.jsx("span",{style:X.unitSign,children:e.symbol}),r.jsx("input",{type:"number",min:"0",step:"0.5",inputMode:"decimal",placeholder:"0",value:p[u]!==void 0?p[u]:oe("focus",u),onChange:Z=>b(Fe=>({...Fe,[u]:Z.target.value})),onBlur:Z=>Yr(u,Z.target.value),style:X.rateInput}),r.jsx("span",{style:X.unit,children:"/hr"})]})]},u))}),tt.length>0?r.jsx("div",{style:{...X.rows,marginTop:14},children:tt.map(u=>r.jsxs("div",{style:X.row,children:[r.jsx("span",{style:{...X.dot,background:u.leaf}}),r.jsx("span",{style:X.rowName,children:u.label}),r.jsx("span",{style:X.rowMeta,children:S0(Math.round(u.minutes))}),r.jsx("span",{style:X.rowAmt,children:t(u.earned)})]},u.p))}):r.jsx("div",{style:X.muted,children:"No focus sessions yet."})]}),r.jsxs("div",{style:X.card,children:[r.jsxs("button",{onClick:()=>B(u=>!u),style:X.collapseBtn,children:[r.jsxs("span",{style:{...X.cardTitle,color:Uo},children:["Usage Rewards · ",t(ee)]}),r.jsx("span",{style:X.collapseHint,children:_?"Hide rates":"Set rates"})]}),_&&r.jsx("div",{style:{...X.rateGrid,marginTop:12},children:cu.map(u=>r.jsxs("div",{style:X.rateRow,children:[r.jsx("span",{style:X.rateName,children:u.label}),r.jsxs("div",{style:X.rateInputWrap,children:[r.jsx("span",{style:X.unitSign,children:e.symbol}),r.jsx("input",{type:"number",min:"0",step:"0.1",inputMode:"decimal",placeholder:"0",value:E[u.id]!==void 0?E[u.id]:oe("usage",u.id),onChange:Z=>C(Fe=>({...Fe,[u.id]:Z.target.value})),onBlur:Z=>Ut(u.id,Z.target.value),style:X.rateInput}),r.jsx("span",{style:X.unit,children:"/min"})]})]},u.id))}),gt.length>0?r.jsx("div",{style:{...X.rows,marginTop:14},children:gt.map(u=>r.jsxs("div",{style:X.row,children:[r.jsx("span",{style:X.rowName,children:u.label}),r.jsx("span",{style:X.rowMeta,children:C0(u.seconds/60)}),r.jsx("span",{style:X.rowAmt,children:t(u.earned)})]},u.id))}):r.jsx("div",{style:X.muted,children:A?"No usage tracked yet.":"Loading…"})]}),r.jsxs("div",{style:X.card,children:[r.jsxs("div",{style:X.cardTitleRow,children:[r.jsxs("span",{style:{...X.cardTitle,color:Yn},children:["Achievement Rewards · ",t(ct)]}),r.jsx("span",{style:X.collapseHint,children:"Set in Achievements"})]}),Te.length>0?r.jsx("div",{style:{...X.rows,marginTop:14},children:Te.map(u=>r.jsxs("div",{style:X.row,children:[r.jsx("span",{style:{...X.dot,background:Yn}}),r.jsx("span",{style:X.rowName,children:u.title}),r.jsx("span",{style:X.rowMeta,children:uu(u.date)}),r.jsx("span",{style:X.rowAmt,children:t(u.reward)})]},u.id))}):r.jsxs("div",{style:{...X.muted,marginTop:10},children:["No achievement rewards in ",ls.find(u=>u.id===q).label.toLowerCase(),". Add a reward to a win in the Achievements section."]})]}),de&&r.jsx("div",{style:X.modalOverlay,onClick:()=>ye(!1),children:r.jsxs("div",{style:X.logModal,onClick:u=>u.stopPropagation(),children:[r.jsxs("div",{style:X.logModalHead,children:[r.jsx("span",{style:X.modalTitle,children:"Reward log"}),r.jsx("button",{onClick:()=>ye(!1),style:X.logClose,title:"Close",children:r.jsx(ze,{size:16})})]}),d.length===0?r.jsx("div",{style:{...X.muted,padding:"24px 0",textAlign:"center"},children:"No rewards taken yet."}):r.jsxs(r.Fragment,{children:[r.jsx("div",{style:X.logScroll,children:d.map(u=>r.jsxs("div",{style:X.row,children:[r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("div",{style:X.logNote,children:u.note||"Reward taken"}),r.jsx("div",{style:X.rowMeta,children:uu(u.date)})]}),r.jsx("span",{style:X.rowAmt,children:t(u.amount)}),r.jsx("button",{onClick:()=>yr(u.id),style:X.del,children:"×"})]},u.id))}),r.jsxs("div",{style:X.totalRow,children:[r.jsx("span",{children:"Total taken"}),r.jsx("span",{style:X.totalVal,children:t(ne)})]})]})]})}),Le>0&&r.jsxs("div",{style:X.card,children:[r.jsx("div",{style:X.cardTitle,children:"Reward breakdown"}),r.jsxs("div",{style:X.pieWrap,children:[r.jsxs("div",{style:X.pieChart,children:[r.jsx("div",{style:{...X.pieDisc,background:`conic-gradient(${Un} 0 ${ot}%, ${Uo} ${ot}% ${ot+et}%, ${Yn} ${ot+et}% 100%)`}}),r.jsxs("div",{style:X.pieHole,children:[r.jsx("span",{style:X.pieHoleVal,children:t(Le)}),r.jsx("span",{style:X.pieHoleLbl,children:"total"})]})]}),r.jsxs("div",{style:X.pieLegend,children:[r.jsxs("div",{style:X.pieLegRow,children:[r.jsx("span",{style:{...X.legendDot,background:Un}}),r.jsx("span",{style:X.pieLegName,children:"Focus"}),r.jsxs("span",{style:X.pieLegPct,children:[Math.round(ot),"%"]}),r.jsx("span",{style:X.pieLegMin,children:t(F)})]}),r.jsxs("div",{style:X.pieLegRow,children:[r.jsx("span",{style:{...X.legendDot,background:Uo}}),r.jsx("span",{style:X.pieLegName,children:"Usage"}),r.jsxs("span",{style:X.pieLegPct,children:[Math.round(et),"%"]}),r.jsx("span",{style:X.pieLegMin,children:t(ee)})]}),r.jsxs("div",{style:X.pieLegRow,children:[r.jsx("span",{style:{...X.legendDot,background:Yn}}),r.jsx("span",{style:X.pieLegName,children:"Achievement"}),r.jsxs("span",{style:X.pieLegPct,children:[Math.round(Qe),"%"]}),r.jsx("span",{style:X.pieLegMin,children:t(ct)})]})]})]})]}),W&&r.jsx("div",{style:X.modalOverlay,onClick:()=>j(null),children:r.jsxs("div",{style:X.modalCard,onClick:u=>u.stopPropagation(),children:[r.jsx("div",{style:X.modalTitle,children:W==="all"?"Take all pending reward?":"Take partial reward"}),r.jsxs("div",{style:X.modalSub,children:["Pending: ",t(ge)]}),r.jsxs("div",{style:X.modalInputWrap,children:[r.jsx("span",{style:X.modalSign,children:e.symbol}),r.jsx("input",{type:"number",min:"0",step:"0.01",autoFocus:!0,placeholder:ge.toFixed(2),value:J,onChange:u=>I(u.target.value),style:X.modalAmt})]}),r.jsx("input",{placeholder:"What is this reward for? (required)",value:re,onChange:u=>ue(u.target.value),onKeyDown:u=>u.key==="Enter"&&er(),style:X.modalReason}),(()=>{const u=parseFloat(J)>0&&!!re.trim();return r.jsxs("div",{style:X.modalActions,children:[r.jsx("button",{onClick:()=>j(null),style:X.modalCancel,children:"Cancel"}),r.jsxs("button",{onClick:er,disabled:!u,style:{...X.modalConfirm,...u?{}:{opacity:.5,cursor:"not-allowed"}},children:["Confirm · ",t(Math.min(parseFloat(J)||0,ge))]})]})})()]})}),r.jsx("div",{style:X.note,children:"Set rates only affect time from today onward — past time keeps the rate it was earned at."})]})}const X={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},hero:{position:"relative",background:"linear-gradient(135deg,var(--accent-strong),var(--accent-2))",borderRadius:16,padding:"22px 24px",color:"#fff",marginBottom:14,textAlign:"center"},logIcon:{position:"absolute",top:12,right:12,border:"1px solid rgba(255,255,255,0.5)",background:"rgba(255,255,255,0.12)",color:"#fff",width:32,height:32,borderRadius:9,cursor:"pointer",display:"grid",placeItems:"center"},logClose:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:28,height:28,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},logNote:{fontSize:13.5,fontWeight:600,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:200,display:"grid",placeItems:"center",padding:16},modalCard:{background:"var(--surface)",color:"var(--text)",borderRadius:16,padding:"22px 22px 18px",width:360,maxWidth:"100%",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)"},logModal:{background:"var(--surface)",color:"var(--text)",borderRadius:16,padding:"18px 18px 14px",width:440,maxWidth:"100%",maxHeight:"82vh",display:"flex",flexDirection:"column",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)",boxSizing:"border-box"},logModalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8,flexShrink:0},logScroll:{overflowY:"auto",display:"flex",flexDirection:"column",gap:2,paddingRight:2,minHeight:0},modalTitle:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:4},modalSub:{fontSize:12.5,color:"var(--text-3)",fontWeight:600,marginBottom:14},modalInputWrap:{display:"flex",alignItems:"center",gap:4,border:"1px solid var(--border)",borderRadius:10,padding:"8px 12px",background:"var(--surface-2)",marginBottom:8},modalSign:{fontSize:16,color:"var(--text-2)",fontWeight:700},modalAmt:{border:"none",background:"none",outline:"none",flex:1,fontSize:18,fontWeight:700,fontFamily:"inherit",color:"var(--text)"},modalReason:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"9px 12px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",marginBottom:14},modalActions:{display:"flex",gap:8},modalCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},modalConfirm:{flex:1,border:"none",background:"#C9A227",color:"#fff",padding:"10px 14px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},heroLabel:{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",opacity:.85},heroVal:{fontSize:44,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:2,lineHeight:1.05},heroSub:{fontSize:12.5,opacity:.9,marginTop:6},heroBtns:{display:"flex",gap:10,marginTop:16,justifyContent:"center"},heroBtnSolid:{border:"none",background:"#fff",color:"var(--accent-strong)",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},heroBtnGhost:{border:"1px solid rgba(255,255,255,0.6)",background:"transparent",color:"#fff",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},btnDisabled:{opacity:.45,cursor:"not-allowed"},statRow:{display:"flex",gap:10,marginBottom:14},statCard:{flex:1,background:"var(--surface)",borderRadius:12,padding:"12px 14px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},statVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},statLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},card:{background:"var(--surface)",borderRadius:16,padding:"18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:10,flexWrap:"wrap"},periodTotal:{fontSize:13,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text-2)"},periodRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},periodChip:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},periodChipOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},collapseBtn:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",border:"none",background:"none",cursor:"pointer",padding:0,fontFamily:"inherit"},collapseHint:{fontSize:12,fontWeight:700,color:"var(--accent)"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"12px 0"},splitTrack:{display:"flex",height:16,borderRadius:8,overflow:"hidden",marginTop:12,marginBottom:12,border:"1px solid var(--border)"},legendRow:{display:"flex",gap:16,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:600,color:"var(--text-2)"},legendDot:{width:10,height:10,borderRadius:3,flexShrink:0},pieWrap:{display:"flex",alignItems:"center",gap:20,flexWrap:"wrap",marginTop:6},pieChart:{position:"relative",width:130,height:130,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:78,height:78,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:14,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:10},pieLegRow:{display:"flex",alignItems:"center",gap:8},pieLegName:{flex:1,fontSize:13.5,fontWeight:600},pieLegPct:{fontSize:13,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",width:46,textAlign:"right"},pieLegMin:{fontSize:12,color:"var(--text-3)",fontWeight:600,minWidth:64,textAlign:"right"},rows:{display:"flex",flexDirection:"column",gap:2},row:{display:"flex",alignItems:"center",gap:8,padding:"7px 0",borderBottom:"1px solid var(--border)"},dot:{width:10,height:10,borderRadius:3,flexShrink:0},rowName:{flex:1,fontSize:13.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},rowMeta:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,flexShrink:0},rowAmt:{fontSize:13.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",flexShrink:0,minWidth:64,textAlign:"right"},del:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",fontSize:16,lineHeight:1,padding:"0 2px",flexShrink:0},totalRow:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:10,marginTop:4,fontSize:14,fontWeight:700},totalVal:{fontSize:16,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},rateGrid:{display:"flex",flexDirection:"column",gap:10},rateRow:{display:"flex",alignItems:"center",gap:8},rateName:{flex:1,fontSize:14,fontWeight:600},rateInputWrap:{display:"flex",alignItems:"center",gap:3,border:"1px solid var(--border)",borderRadius:9,padding:"4px 10px",background:"var(--surface-2)"},unitSign:{fontSize:14,color:"var(--text-2)",fontWeight:600},rateInput:{border:"none",background:"none",outline:"none",width:64,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},unit:{fontSize:12,color:"var(--text-3)",fontWeight:600},note:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",fontStyle:"italic",marginTop:4}};function E0({onAuthed:e}){const[t,n]=g.useState("login"),[o,i]=g.useState(""),[s,l]=g.useState(""),[a,d]=g.useState(""),[c,h]=g.useState(""),[x,f]=g.useState(!1),[R,S]=g.useState(!1),y=t==="register",A=t==="forgot",m=b=>{n(b),h(""),S(!1)},p=async b=>{if(b.preventDefault(),h(""),A){if(!s.trim()){h("Enter your email.");return}f(!0);try{await $.forgotPassword(s),S(!0)}catch(E){h(E.message||"Something went wrong.")}finally{f(!1)}return}if(!s.trim()||!a){h("Email and password are required.");return}if(y&&a.length<6){h("Password must be at least 6 characters.");return}f(!0);try{const E=y?await $.register({name:o,email:s,password:a}):await $.login({email:s,password:a});by(E.token),e(E.user)}catch(E){h(E.message||"Something went wrong.")}finally{f(!1)}};return r.jsx("div",{style:it.page,children:r.jsxs("form",{style:it.card,onSubmit:p,children:[r.jsxs("div",{style:it.brand,children:[r.jsx("div",{style:it.logo,children:"B"}),r.jsx("span",{style:it.brandName,children:"Anvil"})]}),r.jsx("h1",{style:it.title,children:A?"Reset your password":y?"Create your account":"Welcome back"}),r.jsx("p",{style:it.sub,children:A?"We'll email you a link to set a new password.":y?"Start forging your days.":"Sign in to continue."}),A&&R?r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:it.notice,children:["If an account exists for ",r.jsx("strong",{children:s.trim()}),", a reset link is on its way. The link expires in 1 hour."]}),r.jsx("button",{type:"button",onClick:()=>m("login"),style:{...it.submit,marginTop:4},children:"Back to sign in"})]}):r.jsxs(r.Fragment,{children:[y&&r.jsxs("label",{style:it.field,children:[r.jsx("span",{style:it.label,children:"Name"}),r.jsx("input",{value:o,onChange:b=>i(b.target.value),placeholder:"Your name",style:it.input,autoFocus:!0})]}),r.jsxs("label",{style:it.field,children:[r.jsx("span",{style:it.label,children:"Email"}),r.jsx("input",{type:"email",value:s,onChange:b=>l(b.target.value),placeholder:"you@example.com",style:it.input,autoFocus:!y})]}),!A&&r.jsxs("label",{style:it.field,children:[r.jsx("span",{style:it.label,children:"Password"}),r.jsx("input",{type:"password",value:a,onChange:b=>d(b.target.value),placeholder:"••••••••",style:it.input})]}),t==="login"&&r.jsx("div",{style:{textAlign:"right",marginTop:-6,marginBottom:14},children:r.jsx("button",{type:"button",onClick:()=>m("forgot"),style:it.link,children:"Forgot password?"})}),c&&r.jsx("div",{style:it.error,children:c}),r.jsx("button",{type:"submit",disabled:x,style:{...it.submit,...x?{opacity:.6}:{}},children:x?"Please wait…":A?"Send reset link":y?"Create account":"Sign in"}),r.jsx("div",{style:it.switch,children:A?r.jsxs(r.Fragment,{children:["Remembered it?"," ",r.jsx("button",{type:"button",onClick:()=>m("login"),style:it.link,children:"Back to sign in"})]}):r.jsxs(r.Fragment,{children:[y?"Already have an account?":"New here?"," ",r.jsx("button",{type:"button",onClick:()=>m(y?"login":"register"),style:it.link,children:y?"Sign in":"Create one"})]})})]})]})})}const it={page:{minHeight:"100vh",display:"grid",placeItems:"center",background:"var(--bg)",fontFamily:"'Inter',system-ui,sans-serif",padding:20},card:{width:"100%",maxWidth:380,background:"var(--surface)",borderRadius:16,padding:"32px 28px",boxShadow:"0 4px 24px rgba(0,0,0,0.08)",display:"flex",flexDirection:"column"},brand:{display:"flex",alignItems:"center",gap:9,marginBottom:20},logo:{width:32,height:32,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},brandName:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},title:{fontSize:22,fontWeight:700,margin:"0 0 4px",fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},sub:{fontSize:13.5,color:"var(--text-3)",margin:"0 0 22px"},field:{display:"flex",flexDirection:"column",gap:5,marginBottom:14},label:{fontSize:12,fontWeight:600,color:"var(--text-2)"},input:{border:"1px solid var(--border)",borderRadius:9,padding:"11px 12px",fontSize:14,fontFamily:"inherit",outline:"none",color:"var(--text)"},error:{background:"rgba(194,83,107,0.10)",color:"#C2536B",fontSize:13,padding:"9px 12px",borderRadius:8,marginBottom:14,fontWeight:500},notice:{background:"rgba(76,154,107,0.10)",color:"#3B7A54",fontSize:13,padding:"11px 13px",borderRadius:8,marginBottom:14,fontWeight:500,lineHeight:1.5},submit:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"12px",borderRadius:10,fontSize:14.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:4},switch:{fontSize:13,color:"var(--text-2)",textAlign:"center",marginTop:18},link:{border:"none",background:"none",color:"#3A7CA5",fontWeight:700,cursor:"pointer",fontFamily:"inherit",fontSize:13,padding:0}};function B0({token:e,onDone:t}){const[n,o]=g.useState(""),[i,s]=g.useState(""),[l,a]=g.useState(""),[d,c]=g.useState(!1),[h,x]=g.useState(!1),f=async R=>{if(R.preventDefault(),a(""),n.length<6){a("Password must be at least 6 characters.");return}if(n!==i){a("The two passwords don't match.");return}c(!0);try{await $.resetPassword(e,n),x(!0)}catch(S){a(S.message||"This reset link is invalid or has expired.")}finally{c(!1)}};return r.jsx("div",{style:ht.page,children:r.jsxs("form",{style:ht.card,onSubmit:f,children:[r.jsxs("div",{style:ht.brand,children:[r.jsx("div",{style:ht.logo,children:"B"}),r.jsx("span",{style:ht.brandName,children:"Anvil"})]}),h?r.jsxs(r.Fragment,{children:[r.jsx("h1",{style:ht.title,children:"Password updated"}),r.jsx("p",{style:ht.sub,children:"You can now sign in with your new password."}),r.jsx("button",{type:"button",onClick:t,style:ht.submit,children:"Go to sign in"})]}):r.jsxs(r.Fragment,{children:[r.jsx("h1",{style:ht.title,children:"Set a new password"}),r.jsx("p",{style:ht.sub,children:"Enter your new password twice to confirm."}),r.jsxs("label",{style:ht.field,children:[r.jsx("span",{style:ht.label,children:"New password"}),r.jsx("input",{type:"password",value:n,onChange:R=>o(R.target.value),placeholder:"••••••••",style:ht.input,autoFocus:!0})]}),r.jsxs("label",{style:ht.field,children:[r.jsx("span",{style:ht.label,children:"Confirm new password"}),r.jsx("input",{type:"password",value:i,onChange:R=>s(R.target.value),placeholder:"••••••••",style:ht.input})]}),l&&r.jsx("div",{style:ht.error,children:l}),r.jsx("button",{type:"submit",disabled:d,style:{...ht.submit,...d?{opacity:.6}:{}},children:d?"Please wait…":"Reset password"}),r.jsx("div",{style:ht.switch,children:r.jsx("button",{type:"button",onClick:t,style:ht.link,children:"Back to sign in"})})]})]})})}const ht={page:{minHeight:"100vh",display:"grid",placeItems:"center",background:"var(--bg)",fontFamily:"'Inter',system-ui,sans-serif",padding:20},card:{width:"100%",maxWidth:380,background:"var(--surface)",borderRadius:16,padding:"32px 28px",boxShadow:"0 4px 24px rgba(0,0,0,0.08)",display:"flex",flexDirection:"column"},brand:{display:"flex",alignItems:"center",gap:9,marginBottom:20},logo:{width:32,height:32,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},brandName:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},title:{fontSize:22,fontWeight:700,margin:"0 0 4px",fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},sub:{fontSize:13.5,color:"var(--text-3)",margin:"0 0 22px"},field:{display:"flex",flexDirection:"column",gap:5,marginBottom:14},label:{fontSize:12,fontWeight:600,color:"var(--text-2)"},input:{border:"1px solid var(--border)",borderRadius:9,padding:"11px 12px",fontSize:14,fontFamily:"inherit",outline:"none",color:"var(--text)"},error:{background:"rgba(194,83,107,0.10)",color:"#C2536B",fontSize:13,padding:"9px 12px",borderRadius:8,marginBottom:14,fontWeight:500},submit:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"12px",borderRadius:10,fontSize:14.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:4},switch:{fontSize:13,color:"var(--text-2)",textAlign:"center",marginTop:18},link:{border:"none",background:"none",color:"#3A7CA5",fontWeight:700,cursor:"pointer",fontFamily:"inherit",fontSize:13,padding:0}},bd=1,km="anvil_month_start_day";function md(){try{return Number(localStorage.getItem(km))||bd}catch{return bd}}function bu(e){const t=Math.min(28,Math.max(1,Number(e)||bd));try{localStorage.setItem(km,String(t))}catch{}return window.dispatchEvent(new CustomEvent("anvil-month-start",{detail:t})),t}function wm(){const[e,t]=g.useState(md());return g.useEffect(()=>{const n=o=>t(o.detail||md());return window.addEventListener("anvil-month-start",n),()=>window.removeEventListener("anvil-month-start",n)},[]),e}const mu=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`;function Rr(e,t,n=0){const o=e.getFullYear(),i=e.getMonth(),l=e.getDate()>=t?i:i-1,a=new Date(o,l+n,t),d=new Date(o,l+n+1,t-1);return[mu(a),mu(d)]}const hu=["Salary","Stocks","Business","Interest","Rent","Gift","Other"],D0=["Bills","EMI","Rent","Food","Shopping","Transport","Health","Entertainment","Education","Other"],fu=["Stocks","Mutual Fund","SIP","Fixed Deposit","Gold","Real Estate","PPF/EPF","Crypto","Other"],R0={Salary:"#4C9A6B",Stocks:"#3A7CA5",Business:"#C9A227",Interest:"#8268B0",Gift:"#C2773B",Bills:"#C2536B",EMI:"#A23E57",Food:"#E08E45",Shopping:"#8268B0",Transport:"#3A7CA5",Health:"#4C9A6B",Entertainment:"#C9A227",Education:"#5B7C99",Rent:"#5B8C5A",Other:"#9A968C"},Ic=e=>R0[e]||"#9A968C",A0={Stocks:"#2F6B4F","Mutual Fund":"#3E9E6B",SIP:"#4FAE7E","Fixed Deposit":"#6BBE92",Gold:"#8ECDA8","Real Estate":"#1F5C3F","PPF/EPF":"#5BAE83",Crypto:"#7FC79E",Other:"#9AD4B3"},F0=e=>A0[e]||"#4C9A6B",Mr="#3E9E6B",nr="#D1556E",Fr="#3A7CA5",sa="#8268B0",jm=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,Kn=jm(new Date),M0=[{id:"month",label:"This month"},{id:"last",label:"Last month"},{id:"year",label:"This year"},{id:"all",label:"All time"}];function W0(e,t){const n=new Date;return e==="month"?Rr(n,t):e==="last"?Rr(n,t,-1):e==="year"?[jm(new Date(n.getFullYear(),0,1)),Kn]:["0000-01-01","9999-12-31"]}function L0(){const e=wl(),[t,n]=g.useState("overview"),[o,i]=g.useState([]),[s,l]=g.useState([]),[a,d]=g.useState([]),[c,h]=g.useState([]),[x,f]=g.useState([]),[R,S]=g.useState(!1),y=g.useCallback(()=>Promise.all([$.getTxns(),$.getExpenses(),$.getInvestments()]).then(([z,M,_])=>(i(z),l(M.categories),d(M.logs),h(_),$.getFixedItems())).then(f).then(()=>S(!0)).catch(()=>S(!0)),[]);g.useEffect(()=>{y()},[y]);const A=g.useMemo(()=>{const z={};return s.forEach(M=>z[M.id]=M),z},[s]),m=g.useMemo(()=>a.map(z=>{var M;return{id:`exp-${z.id}`,rawId:z.id,source:"expense",kind:"expense",category:((M=A[z.category_id])==null?void 0:M.name)||"Other",amount:z.amount,note:z.note,date:z.date}}),[a,A]),p=g.useMemo(()=>o.filter(z=>z.kind==="expense").map(z=>({...z,source:"legacy"})),[o]),b=g.useMemo(()=>o.filter(z=>z.kind==="income").map(z=>({...z,source:"legacy"})),[o]),E=g.useMemo(()=>[...b,...p,...m].sort((z,M)=>M.date.localeCompare(z.date)),[b,p,m]),C=z=>nl(z,e.code);return r.jsxs("div",{style:w.page,children:[r.jsxs("div",{style:w.head,children:[r.jsx("div",{style:w.eyebrow,children:"Anvil · Wallet"}),r.jsx("h1",{style:w.h1,children:"Wallet"}),r.jsx("div",{style:w.subhead,children:"Your money — what comes in, what goes out, and where it's headed."})]}),r.jsx("div",{style:w.tabs,children:[["overview","Overview",jx],["money","Money",gm],["calc","Calculators",xx]].map(([z,M,_])=>r.jsxs("button",{onClick:()=>n(z),style:{...w.tab,...t===z?w.tabOn:{}},children:[r.jsx(_,{size:15})," ",M]},z))}),t==="overview"&&r.jsx(_0,{txns:E,investments:c,loaded:R,money:C,cur:e}),t==="money"&&r.jsx(O0,{txns:E,expCats:s,investments:c,fixedItems:x,reload:y,money:C,cur:e}),t==="calc"&&r.jsx(N0,{money:C,cur:e})]})}function _0({txns:e,investments:t,loaded:n,money:o,cur:i}){const s=wm(),[l,a]=g.useState("month"),[d,c]=W0(l,s),h=g.useMemo(()=>e.filter(W=>W.date>=d&&W.date<=c),[e,d,c]),x=h.filter(W=>W.kind==="income"),f=h.filter(W=>W.kind==="expense"),R=x.reduce((W,j)=>W+j.amount,0),S=f.reduce((W,j)=>W+j.amount,0),y=g.useMemo(()=>t.filter(W=>W.date>=d&&W.date<=c),[t,d,c]),A=y.reduce((W,j)=>W+j.invested,0),m=S+A,p=R-m,b=t.reduce((W,j)=>W+j.invested,0),E=t.reduce((W,j)=>W+j.current_value,0),C=E-b,z=W=>{const j={};return W.forEach(J=>{j[J.category]=(j[J.category]||0)+J.amount}),Object.entries(j).map(([J,I])=>({category:J,amount:I,color:Ic(J)})).sort((J,I)=>I.amount-J.amount)},M=z(f),_=g.useMemo(()=>{const W={};return y.forEach(j=>{W[j.kind]=(W[j.kind]||0)+j.invested}),Object.entries(W).map(([j,J])=>({category:j,amount:J,color:F0(j)})).sort((j,J)=>J.amount-j.amount)},[y]),B=[...M,..._];return r.jsxs(r.Fragment,{children:[r.jsx("div",{style:w.presetRow,children:M0.map(W=>r.jsx("button",{onClick:()=>a(W.id),style:{...w.preset,...l===W.id?w.presetOn:{}},children:W.label},W.id))}),r.jsxs("div",{style:w.sumGrid,children:[r.jsx(la,{icon:r.jsx(gx,{size:16}),label:"Income",value:o(R),color:Mr}),r.jsx(la,{icon:r.jsx(Qb,{size:16}),label:"Expenses",value:o(m),color:nr}),r.jsx(la,{icon:p>=0?r.jsx(wc,{size:16}):r.jsx(kc,{size:16}),label:"Net savings",value:o(p),color:p>=0?Mr:nr})]}),A>0&&r.jsxs("div",{style:w.investNote,children:[r.jsx(el,{size:13,color:Fr})," Includes ",o(A)," invested this period — counted as outgoing and deducted from net savings."]}),t.length>0&&r.jsxs("div",{style:w.card,children:[r.jsxs("div",{style:w.cardTitleRow,children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx(el,{size:18,color:Fr}),r.jsxs("div",{children:[r.jsx("div",{style:w.cardTitle,children:"Assets & investments"}),r.jsx("div",{style:w.cardSub,children:"Across all your holdings, all time"})]})]}),r.jsx("div",{style:{...w.cardTotal,color:Fr},children:o(E)})]}),r.jsxs("div",{style:w.healthStats,children:[r.jsxs("div",{style:w.healthStat,children:[r.jsx("span",{style:w.healthStatV,children:o(b)}),r.jsx("span",{style:w.healthStatL,children:"Total invested"})]}),r.jsxs("div",{style:w.healthStat,children:[r.jsxs("span",{style:{...w.healthStatV,color:C>=0?Mr:nr},children:[C>=0?"+":"",o(C)]}),r.jsx("span",{style:w.healthStatL,children:"Unrealized gain"})]})]})]}),n?h.length===0&&y.length===0?r.jsx("div",{style:w.card,children:r.jsxs("div",{style:w.muted,children:["No transactions in this period. Add some under the ",r.jsx("b",{children:"Money"})," tab."]})}):r.jsxs(r.Fragment,{children:[r.jsx($0,{totalIn:R,totalOut:m}),r.jsxs("div",{style:w.twoCol,children:[r.jsx(xu,{title:"Incoming",subtitle:"Where your money comes from",total:R,data:z(x),accent:Mr,cur:i}),r.jsx(xu,{title:"Outgoing",subtitle:"Spending + money set aside in investments",total:m,data:B,accent:nr,cur:i})]})]}):r.jsx("div",{style:w.muted,children:"Loading…"})]})}function la({icon:e,label:t,value:n,color:o}){return r.jsxs("div",{style:w.sumCard,children:[r.jsx("div",{style:{...w.sumIcon,color:o,background:o+"1A"},children:e}),r.jsx("div",{style:w.sumLabel,children:t}),r.jsx("div",{style:{...w.sumVal,color:o},children:n})]})}function xu({title:e,subtitle:t,total:n,data:o,accent:i,cur:s}){const[l,a]=g.useState(null);let d=0;const c=o.map(f=>{const R=n>0?d/n*100:0;d+=f.amount;const S=n>0?d/n*100:0;return{...f,start:R,end:S,color:f.color||Ic(f.category),pct:n>0?f.amount/n*100:0}}),h=l!=null?c[l]:null,x=c.length===1;return r.jsxs("div",{style:w.card,children:[r.jsxs("div",{style:w.cardTitleRow,children:[r.jsxs("div",{children:[r.jsx("div",{style:{...w.cardTitle,color:i},children:e}),r.jsx("div",{style:w.cardSub,children:t})]}),r.jsx("div",{style:{...w.cardTotal,color:i},children:nl(n,s.code)})]}),o.length===0?r.jsx("div",{style:w.muted,children:"Nothing logged."}):r.jsxs("div",{style:w.pieWrap,children:[r.jsxs("div",{style:w.pieChart,onMouseLeave:()=>a(null),children:[r.jsx("svg",{viewBox:"0 0 120 120",style:w.pieSvg,children:c.map((f,R)=>r.jsx("path",{d:P0(f.start,f.end,R===l,x),fill:f.color,onMouseEnter:()=>a(R),style:{cursor:"pointer",transition:"transform 0.15s, filter 0.15s",filter:R===l?"brightness(1.08)":"none"}},f.category))}),r.jsx("div",{style:{...w.pieHole,...h?{transform:"translate(-50%,-50%) scale(1.06)",boxShadow:`0 0 0 4px ${h.color}33`}:{}},children:h?r.jsxs(r.Fragment,{children:[r.jsx("span",{style:{...w.pieHoleVal,color:h.color,fontSize:13},children:du(h.amount,s.code)}),r.jsxs("span",{style:w.pieHoleLbl,children:[Math.round(h.pct),"% · ",h.category]})]}):r.jsxs(r.Fragment,{children:[r.jsx("span",{style:w.pieHoleVal,children:du(n,s.code)}),r.jsx("span",{style:w.pieHoleLbl,children:"total"})]})})]}),r.jsx("div",{style:w.pieLegend,children:c.map((f,R)=>r.jsxs("div",{style:{...w.legendRow,...R===l?w.legendRowOn:{}},onMouseEnter:()=>a(R),onMouseLeave:()=>a(null),children:[r.jsx("span",{style:{...w.dot,background:f.color}}),r.jsx("span",{style:w.legendName,children:f.category}),r.jsxs("span",{style:w.legendPct,children:[Math.round(f.pct),"%"]}),r.jsx("span",{style:w.legendAmt,children:nl(f.amount,s.code)})]},f.category))})]})]})}function P0(e,t,n,o){const d=n?6:0,c=(z,M,_=0,B=0)=>{const W=z/100*2*Math.PI-Math.PI/2;return[60+_+M*Math.cos(W),60+B+M*Math.sin(W)]},h=(e+t)/2/100*2*Math.PI-Math.PI/2,x=o?0:Math.cos(h)*d,f=o?0:Math.sin(h)*d;if(t-e>=99.999)return`M ${60+x} ${60+f-58} A 58 58 0 1 1 ${60+x-.01} ${60+f-58} L ${60+x-.01} ${60+f-35} A 35 35 0 1 0 ${60+x} ${60+f-35} Z`;const[R,S]=c(e,58,x,f),[y,A]=c(t,58,x,f),[m,p]=c(t,35,x,f),[b,E]=c(e,35,x,f),C=t-e>50?1:0;return`M ${R} ${S} A 58 58 0 ${C} 1 ${y} ${A} L ${m} ${p} A 35 35 0 ${C} 0 ${b} ${E} Z`}function $0({totalIn:e,totalOut:t}){const n=e-t,o=e>0?n/e:0,i=e===0?0:Math.max(0,Math.min(100,Math.round(50+o*100)));let s,l,a;e===0?(s="No income logged",l="#9A968C",a="Add your income to see your financial health."):o>=.3?(s="Excellent",l="#3E9E6B",a="You're saving 30%+ of income — keep investing the surplus."):o>=.2?(s="Healthy",l="#4C9A6B",a="Solid savings rate. Consider automating a SIP with the surplus."):o>=.1?(s="Okay",l="#C9A227",a="Decent, but aim for 20%+. Trim your biggest expense category."):o>=0?(s="Tight",l="#C2773B",a="You're saving very little. Review recurring bills and EMIs."):(s="Overspending",l="#D1556E",a="You're spending more than you earn. Cut back to avoid debt.");const d=e>0?Math.min(100,Math.round(t/e*100)):0;return r.jsxs("div",{style:w.card,children:[r.jsxs("div",{style:w.cardTitleRow,children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx(Mx,{size:18,color:l}),r.jsxs("div",{children:[r.jsx("div",{style:w.cardTitle,children:"Financial health"}),r.jsx("div",{style:w.cardSub,children:"Based on your savings rate this period"})]})]}),r.jsxs("div",{style:{textAlign:"right"},children:[r.jsx("div",{style:{...w.healthScore,color:l},children:e===0?"—":i}),r.jsx("div",{style:{...w.healthStatus,color:l},children:s})]})]}),r.jsx("div",{style:w.gaugeTrack,children:r.jsx("div",{style:{...w.gaugeFill,width:`${e===0?0:i}%`,background:l}})}),r.jsxs("div",{style:w.healthStats,children:[r.jsxs("div",{style:w.healthStat,children:[r.jsxs("span",{style:w.healthStatV,children:[e>0?Math.round(o*100):0,"%"]}),r.jsx("span",{style:w.healthStatL,children:"Savings rate"})]}),r.jsxs("div",{style:w.healthStat,children:[r.jsxs("span",{style:w.healthStatV,children:[d,"%"]}),r.jsx("span",{style:w.healthStatL,children:"of income spent"})]})]}),r.jsx("div",{style:{...w.tip,borderColor:l+"55",background:l+"12",color:l},children:a})]})}function O0({txns:e,expCats:t,investments:n,fixedItems:o,reload:i,money:s,cur:l}){const[a,d]=g.useState(""),[c,h]=g.useState("Salary"),[x,f]=g.useState(Kn),[R,S]=g.useState(""),[y,A]=g.useState(null),[m,p]=g.useState(null),[b,E]=g.useState(null),{deleteItem:C,toasts:z,handleUndo:M,handleDismiss:_}=Ht($.deleteTxn,$.restoreTxn,i),{deleteItem:B,toasts:W,handleUndo:j,handleDismiss:J}=Ht($.deleteExpenseLog,$.restoreExpenseLog,i),{deleteItem:I,toasts:re,handleUndo:ue,handleDismiss:de}=Ht($.deleteInvestment,$.restoreInvestment,i),ye=()=>{var k;return E({id:null,kind:"expense",name:"",amount:"",category_id:((k=t[0])==null?void 0:k.id)||"",invest_kind:"Stocks",note:""})},q=k=>{var ee;return E({id:k.id,kind:k.kind,name:k.name,amount:String(k.amount),category_id:k.category_id||((ee=t[0])==null?void 0:ee.id)||"",invest_kind:k.invest_kind||"Stocks",note:k.note||""})},N=async()=>{const k=b.name.trim(),ee=parseFloat(b.amount)||0;if(!k||ee<=0)return;const me={kind:b.kind,name:k,amount:ee,note:b.note.trim(),...b.kind==="expense"?{category_id:Number(b.category_id)}:{invest_kind:b.invest_kind}};b.id?await $.updateFixedItem(b.id,me):await $.createFixedItem(me),E(null),i()},se=async k=>{window.confirm(`Stop "${k.name}" from auto-posting each month? Past entries it already created will stay.`)&&(await $.deleteFixedItem(k.id),i())},Y=async k=>{await $.updateFixedItem(k.id,{active:!k.active}),i()},le=()=>p({id:null,name:"",kind:"Stocks",invested:"",current_value:"",date:Kn,note:""}),T=k=>p({id:k.id,name:k.name,kind:k.kind,invested:String(k.invested),current_value:String(k.current_value),date:k.date,note:k.note||""}),oe=async()=>{const k=m.name.trim(),ee=parseFloat(m.invested)||0,me=parseFloat(m.current_value)||0;if(!k)return;const Te={name:k,kind:m.kind,invested:ee,current_value:me,note:m.note.trim(),date:m.date};m.id?await $.updateInvestment(m.id,Te):await $.createInvestment(Te),p(null),i()},Ce=n.reduce((k,ee)=>k+ee.invested,0),V=n.reduce((k,ee)=>k+ee.current_value,0),v=V-Ce,D=async()=>{const k=parseFloat(a);!k||k<=0||(await $.createTxn({kind:"income",category:c,amount:k,note:R.trim(),date:x}),d(""),S(""),i())},P=k=>A({id:k.id,rawId:k.rawId,source:k.source,kind:k.kind,amount:String(k.amount),category:k.category,date:k.date,note:k.note||""}),G=(y==null?void 0:y.source)==="expense"?t.map(k=>k.name):(y==null?void 0:y.kind)==="income"?hu:D0,ne=async()=>{const k=parseFloat(y.amount);if(!(!k||k<=0)){if(y.source==="expense"){const ee=t.find(me=>me.name===y.category);await $.updateExpenseLog(y.rawId,{amount:k,note:y.note.trim(),date:y.date,...ee?{category_id:ee.id}:{}})}else await $.updateTxn(y.id,{kind:y.kind,category:y.category,amount:k,note:y.note.trim(),date:y.date});A(null),i()}},ge=k=>{k.source==="expense"?B(k.rawId,k.category):C(k.id,k.category)},O=g.useMemo(()=>{const k={};return e.forEach(ee=>{(k[ee.date]=k[ee.date]||[]).push(ee)}),Object.entries(k).sort((ee,me)=>me[0].localeCompare(ee[0]))},[e]),F=k=>new Date(k+"T00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"});return r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:w.card,children:[r.jsx("div",{style:w.cardTitle,children:"Add income"}),r.jsxs("div",{style:w.cardSub,children:["Expenses are added from the ",r.jsx("b",{children:"Expenses"})," section and show up here automatically."]}),r.jsxs("div",{style:w.formGrid,children:[r.jsx("input",{type:"number",inputMode:"decimal",placeholder:"Amount",value:a,onChange:k=>d(k.target.value),onKeyDown:k=>k.key==="Enter"&&D(),style:w.input,autoFocus:!0}),r.jsx("select",{value:c,onChange:k=>h(k.target.value),style:w.input,children:hu.map(k=>r.jsx("option",{children:k},k))}),r.jsx("input",{type:"date",value:x,max:Kn,onChange:k=>f(k.target.value),style:w.input})]}),r.jsx("input",{placeholder:"Note (optional)",value:R,onChange:k=>S(k.target.value),onKeyDown:k=>k.key==="Enter"&&D(),style:{...w.input,marginTop:8}}),r.jsxs("button",{onClick:D,style:{...w.addBtn,background:Mr},children:[r.jsx(Ke,{size:15})," Add income"]})]}),r.jsxs("div",{style:w.card,children:[r.jsxs("div",{style:w.cardTitleRow,children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx(qx,{size:18,color:sa}),r.jsxs("div",{children:[r.jsx("div",{style:w.cardTitle,children:"Fixed items"}),r.jsx("div",{style:w.cardSub,children:"EMI, rent, SIP… auto-posted at the start of every billing cycle"})]})]}),r.jsxs("button",{onClick:ye,style:{...w.invAddBtn,background:sa},children:[r.jsx(Ke,{size:14})," Add"]})]}),o.length===0?r.jsx("div",{style:w.muted,children:"No fixed items yet — add an EMI or rent to auto-post it every cycle."}):r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:o.map(k=>{var me;const ee=k.kind==="expense"?((me=t.find(Te=>Te.id===k.category_id))==null?void 0:me.name)||"Other":k.invest_kind||"Other";return r.jsxs("div",{style:{...w.invRow,opacity:k.active?1:.5},children:[r.jsx("span",{style:{...w.txnDot,background:k.kind==="expense"?nr:Fr}}),r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("div",{style:w.txnCat,children:k.name}),r.jsxs("div",{style:w.txnNote,children:[k.kind==="expense"?"Fixed expense":"Fixed investment"," · ",ee]})]}),r.jsxs("span",{style:{...w.txnAmt,color:k.kind==="expense"?nr:Fr},children:[s(k.amount),"/mo"]}),r.jsx("button",{onClick:()=>Y(k),style:w.delBtn,title:k.active?"Pause":"Resume",children:k.active?r.jsx(om,{size:13}):r.jsx(xc,{size:13})}),r.jsx("button",{onClick:()=>q(k),style:w.delBtn,children:r.jsx(bt,{size:13})}),r.jsx("button",{onClick:()=>se(k),style:w.delBtn,children:r.jsx(ze,{size:14})})]},k.id)})})]}),r.jsxs("div",{style:w.card,children:[r.jsxs("div",{style:w.cardTitleRow,children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx(el,{size:18,color:Fr}),r.jsxs("div",{children:[r.jsx("div",{style:w.cardTitle,children:"Investments"}),r.jsx("div",{style:w.cardSub,children:"Asset generation — what you've put in vs. what it's worth now"})]})]}),r.jsxs("button",{onClick:le,style:w.invAddBtn,children:[r.jsx(Ke,{size:14})," Add"]})]}),n.length===0?r.jsx("div",{style:w.muted,children:"No investments tracked yet."}):r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:w.healthStats,children:[r.jsxs("div",{style:w.healthStat,children:[r.jsx("span",{style:w.healthStatV,children:s(Ce)}),r.jsx("span",{style:w.healthStatL,children:"Invested"})]}),r.jsxs("div",{style:w.healthStat,children:[r.jsx("span",{style:w.healthStatV,children:s(V)}),r.jsx("span",{style:w.healthStatL,children:"Current value"})]}),r.jsxs("div",{style:w.healthStat,children:[r.jsxs("span",{style:{...w.healthStatV,color:v>=0?Mr:nr},children:[v>=0?"+":"",s(v)]}),r.jsx("span",{style:w.healthStatL,children:"Gain / loss"})]})]}),r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,marginTop:4},children:n.map(k=>{const ee=k.current_value-k.invested,me=k.invested>0?ee/k.invested*100:0;return r.jsxs("div",{style:w.invRow,children:[r.jsx("span",{style:{...w.txnDot,background:Fr}}),r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("div",{style:w.txnCat,children:k.name}),r.jsxs("div",{style:w.txnNote,children:[k.kind," · invested ",s(k.invested)]})]}),r.jsxs("div",{style:{textAlign:"right"},children:[r.jsx("div",{style:w.txnAmt,children:s(k.current_value)}),r.jsxs("div",{style:{...w.invPct,color:ee>=0?Mr:nr},children:[ee>=0?"+":"",Math.round(me),"%"]})]}),r.jsx("button",{onClick:()=>T(k),style:w.delBtn,children:r.jsx(bt,{size:13})}),r.jsx("button",{onClick:()=>I(k.id,k.name),style:w.delBtn,children:r.jsx(ze,{size:14})})]},k.id)})})]})]}),r.jsxs("div",{style:w.card,children:[r.jsx("div",{style:w.cardTitle,children:"History"}),O.length===0?r.jsx("div",{style:w.muted,children:"No transactions yet."}):r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:O.map(([k,ee])=>r.jsxs("div",{children:[r.jsx("div",{style:w.dateHead,children:F(k)}),ee.map(me=>(y==null?void 0:y.id)===me.id?r.jsxs("div",{style:w.editTxn,children:[r.jsxs("div",{style:w.formGrid,children:[r.jsx("input",{type:"number",inputMode:"decimal",value:y.amount,onChange:Te=>A({...y,amount:Te.target.value}),style:w.input}),r.jsx("select",{value:y.category,onChange:Te=>A({...y,category:Te.target.value}),style:w.input,children:G.map(Te=>r.jsx("option",{children:Te},Te))}),r.jsx("input",{type:"date",value:y.date,max:Kn,onChange:Te=>A({...y,date:Te.target.value}),style:w.input})]}),r.jsx("input",{placeholder:"Note (optional)",value:y.note,onChange:Te=>A({...y,note:Te.target.value}),onKeyDown:Te=>Te.key==="Enter"&&ne(),style:{...w.input,marginTop:8}}),r.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[r.jsxs("button",{onClick:()=>A(null),style:w.editCancel,children:[r.jsx(ze,{size:14})," Cancel"]}),r.jsxs("button",{onClick:ne,style:{...w.addBtn,marginTop:0,flex:1,background:y.kind==="income"?Mr:nr},children:[r.jsx(We,{size:15})," Save"]})]})]},me.id):r.jsxs("div",{style:w.txnRow,children:[r.jsx("span",{style:{...w.txnDot,background:Ic(me.category)}}),r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("div",{style:w.txnCat,children:me.category}),me.note&&r.jsx("div",{style:w.txnNote,children:me.note})]}),r.jsxs("span",{style:{...w.txnAmt,color:me.kind==="income"?Mr:nr},children:[me.kind==="income"?"+":"−",s(me.amount)]}),r.jsx("button",{onClick:()=>P(me),style:w.delBtn,children:r.jsx(bt,{size:13})}),r.jsx("button",{onClick:()=>ge(me),style:w.delBtn,children:r.jsx(ze,{size:14})})]},me.id))]},k))})]}),m&&r.jsx("div",{style:w.overlay,onClick:()=>p(null),children:r.jsxs("div",{style:w.modal,onClick:k=>k.stopPropagation(),children:[r.jsxs("div",{style:w.modalHead,children:[r.jsx("span",{style:w.modalTitle,children:m.id?"Edit investment":"New investment"}),r.jsx("button",{onClick:()=>p(null),style:w.iconBtnPlain,children:r.jsx(ze,{size:16})})]}),r.jsx("label",{style:w.label,children:"Name *"}),r.jsx("input",{autoFocus:!0,value:m.name,onChange:k=>p(ee=>({...ee,name:k.target.value})),placeholder:"e.g. Nifty Index Fund, HDFC FD…",style:w.input}),r.jsx("label",{style:w.label,children:"Type"}),r.jsx("select",{value:m.kind,onChange:k=>p(ee=>({...ee,kind:k.target.value})),style:w.input,children:fu.map(k=>r.jsx("option",{children:k},k))}),r.jsxs("div",{style:w.formGrid,children:[r.jsxs("div",{children:[r.jsx("label",{style:w.label,children:"Invested"}),r.jsx("input",{type:"number",inputMode:"decimal",value:m.invested,onChange:k=>p(ee=>({...ee,invested:k.target.value})),placeholder:"0",style:w.input})]}),r.jsxs("div",{children:[r.jsx("label",{style:w.label,children:"Current value"}),r.jsx("input",{type:"number",inputMode:"decimal",value:m.current_value,onChange:k=>p(ee=>({...ee,current_value:k.target.value})),placeholder:"0",style:w.input})]}),r.jsxs("div",{children:[r.jsx("label",{style:w.label,children:"Date"}),r.jsx("input",{type:"date",value:m.date,max:Kn,onChange:k=>p(ee=>({...ee,date:k.target.value})),style:w.input})]})]}),r.jsx("label",{style:w.label,children:"Note (optional)"}),r.jsx("input",{value:m.note,onChange:k=>p(ee=>({...ee,note:k.target.value})),placeholder:"Folio no., broker, etc.",style:w.input}),r.jsxs("div",{style:w.modalActions,children:[r.jsx("button",{onClick:()=>p(null),style:w.cancelBtn,children:"Cancel"}),r.jsxs("button",{onClick:oe,disabled:!m.name.trim(),style:{...w.saveBtn,...m.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[r.jsx(We,{size:15})," ",m.id?"Save":"Add"]})]})]})}),b&&r.jsx("div",{style:w.overlay,onClick:()=>E(null),children:r.jsxs("div",{style:w.modal,onClick:k=>k.stopPropagation(),children:[r.jsxs("div",{style:w.modalHead,children:[r.jsx("span",{style:w.modalTitle,children:b.id?"Edit fixed item":"New fixed item"}),r.jsx("button",{onClick:()=>E(null),style:w.iconBtnPlain,children:r.jsx(ze,{size:16})})]}),r.jsxs("div",{style:w.kindToggle,children:[r.jsxs("button",{onClick:()=>E(k=>({...k,kind:"expense"})),style:{...w.kindBtn,...b.kind==="expense"?{background:nr,color:"#fff",borderColor:nr}:{}},children:[r.jsx(Qb,{size:15})," Expense"]}),r.jsxs("button",{onClick:()=>E(k=>({...k,kind:"investment"})),style:{...w.kindBtn,...b.kind==="investment"?{background:Fr,color:"#fff",borderColor:Fr}:{}},children:[r.jsx(el,{size:15})," Investment"]})]}),r.jsx("label",{style:w.label,children:"Name *"}),r.jsx("input",{autoFocus:!0,value:b.name,onChange:k=>E(ee=>({...ee,name:k.target.value})),placeholder:b.kind==="expense"?"e.g. Home loan EMI, Rent…":"e.g. Monthly SIP — Nifty Index",style:w.input}),r.jsxs("div",{style:w.formGrid,children:[r.jsxs("div",{children:[r.jsx("label",{style:w.label,children:"Amount / month"}),r.jsx("input",{type:"number",inputMode:"decimal",value:b.amount,onChange:k=>E(ee=>({...ee,amount:k.target.value})),placeholder:"0",style:w.input})]}),r.jsxs("div",{children:[r.jsx("label",{style:w.label,children:b.kind==="expense"?"Category":"Type"}),b.kind==="expense"?r.jsx("select",{value:b.category_id,onChange:k=>E(ee=>({...ee,category_id:k.target.value})),style:w.input,children:t.map(k=>r.jsx("option",{value:k.id,children:k.name},k.id))}):r.jsx("select",{value:b.invest_kind,onChange:k=>E(ee=>({...ee,invest_kind:k.target.value})),style:w.input,children:fu.map(k=>r.jsx("option",{children:k},k))})]})]}),r.jsx("label",{style:w.label,children:"Note (optional)"}),r.jsx("input",{value:b.note,onChange:k=>E(ee=>({...ee,note:k.target.value})),placeholder:"Loan account no., etc.",style:w.input}),r.jsx("p",{style:w.fixedHint,children:"Posts automatically at the start of every billing cycle (set in Settings → Currency). This one posts immediately for the current cycle when you save."}),r.jsxs("div",{style:w.modalActions,children:[r.jsx("button",{onClick:()=>E(null),style:w.cancelBtn,children:"Cancel"}),r.jsxs("button",{onClick:N,disabled:!b.name.trim()||!(parseFloat(b.amount)>0),style:{...w.saveBtn,background:sa,...!b.name.trim()||!(parseFloat(b.amount)>0)?{opacity:.5,cursor:"not-allowed"}:{}},children:[r.jsx(We,{size:15})," ",b.id?"Save":"Add"]})]})]})}),r.jsx(Gt,{toasts:z,onUndo:M,onDismiss:_}),r.jsx(Gt,{toasts:W,onUndo:j,onDismiss:J}),r.jsx(Gt,{toasts:re,onUndo:ue,onDismiss:de})]})}function N0({money:e,cur:t}){return r.jsxs(r.Fragment,{children:[r.jsx(H0,{money:e,cur:t}),r.jsx(U0,{money:e,cur:t})]})}function Tn({label:e,value:t,set:n,min:o,max:i,step:s,suffix:l}){return r.jsxs("div",{style:w.field,children:[r.jsxs("div",{style:w.fieldTop,children:[r.jsx("span",{style:w.fieldLabel,children:e}),r.jsxs("div",{style:w.fieldInputWrap,children:[r.jsx("input",{type:"number",value:t,onChange:a=>n(a.target.value),style:w.fieldInput}),l&&r.jsx("span",{style:w.fieldSuffix,children:l})]})]}),r.jsx("input",{type:"range",min:o,max:i,step:s,value:t,onChange:a=>n(a.target.value),style:w.range})]})}function H0({money:e,cur:t}){const[n,o]=g.useState(3e4),[i,s]=g.useState(12),[l,a]=g.useState(15),{invested:d,futureValue:c,gains:h,yearly:x}=g.useMemo(()=>{const R=Math.max(0,parseFloat(n)||0),S=Math.max(0,parseFloat(i)||0),y=Math.max(0,Math.min(60,parseInt(l)||0)),A=S/12/100,m=C=>C<=0?0:A===0?R*C:R*((Math.pow(1+A,C)-1)/A)*(1+A),p=[];for(let C=1;C<=y;C++)p.push({year:C,invested:R*12*C,value:m(C*12)});const b=m(y*12),E=R*12*y;return{invested:E,futureValue:b,gains:b-E,yearly:p}},[n,i,l]),f=Math.max(1,...x.map(R=>R.value));return r.jsxs("div",{style:w.card,children:[r.jsx("div",{style:w.cardTitleRow,children:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx(Qx,{size:18,color:"#3A7CA5"}),r.jsxs("div",{children:[r.jsx("div",{style:w.cardTitle,children:"SIP projection"}),r.jsx("div",{style:w.cardSub,children:"Mutual fund / SIP future value"})]})]})}),r.jsx(Tn,{label:"Monthly investment",value:n,set:o,min:500,max:5e5,step:500,suffix:t.symbol}),r.jsx(Tn,{label:"Expected return (p.a.)",value:i,set:s,min:1,max:30,step:.5,suffix:"%"}),r.jsx(Tn,{label:"Time period",value:l,set:a,min:1,max:40,step:1,suffix:"yrs"}),r.jsxs("div",{style:w.resultHero,children:[r.jsx("div",{style:w.resultLabel,children:"Projected wealth"}),r.jsx("div",{style:{...w.resultVal,color:"#3A7CA5"},children:e(c)})]}),r.jsxs("div",{style:w.splitRow,children:[r.jsxs("div",{style:w.splitItem,children:[r.jsx("span",{style:w.splitV,children:e(d)}),r.jsx("span",{style:w.splitL,children:"Invested"})]}),r.jsxs("div",{style:w.splitItem,children:[r.jsx("span",{style:{...w.splitV,color:"#3E9E6B"},children:e(h)}),r.jsx("span",{style:w.splitL,children:"Est. returns"})]})]}),x.length>0&&r.jsxs("div",{style:w.chartWrap,children:[r.jsx("div",{style:w.chartBars,children:x.map(R=>r.jsx("div",{style:w.chartCol,title:`Year ${R.year}: ${e(R.value)}`,children:r.jsx("div",{style:{...w.chartStack,height:`${R.value/f*100}%`},children:r.jsx("div",{style:{...w.chartGain,height:`${(1-R.invested/R.value)*100}%`}})})},R.year))}),r.jsxs("div",{style:w.chartAxis,children:[r.jsx("span",{children:"Yr 1"}),r.jsxs("span",{style:{marginLeft:"auto"},children:["Yr ",x.length]})]}),r.jsxs("div",{style:w.legend,children:[r.jsxs("span",{style:w.legendItem,children:[r.jsx("span",{style:{...w.legendDot,background:"#9DBFD6"}})," Invested"]}),r.jsxs("span",{style:w.legendItem,children:[r.jsx("span",{style:{...w.legendDot,background:"#3E9E6B"}})," Returns"]})]})]})]})}function yu(e,t,n,o=0,i=0){let s=Math.max(0,e-i),l=0,a=0,d=i;const c=1200;for(;s>.01&&a<c;){const h=s*t;let x=n+o,f=x-h;if(f<=0)return{months:1/0,totalInterest:1/0,totalPaid:1/0};f>s&&(f=s,x=s+h),s-=f,l+=h,d+=x,a++}return{months:a,totalInterest:l,totalPaid:d}}const vu=e=>{if(!isFinite(e))return"—";const t=Math.floor(e/12),n=e%12;return(t?`${t}y `:"")+`${n}m`},G0=e=>{if(!isFinite(e))return"—";const t=new Date;return t.setMonth(t.getMonth()+e),t.toLocaleDateString("en-US",{month:"short",year:"numeric"})};function U0({money:e,cur:t}){const[n,o]=g.useState(2e6),[i,s]=g.useState(9),[l,a]=g.useState(20),[d,c]=g.useState(5e5),[h,x]=g.useState("once"),[f,R]=g.useState("tenure"),S=g.useMemo(()=>{const b=Math.max(0,parseFloat(n)||0),E=Math.max(0,parseFloat(i)||0)/12/100,C=Math.max(1,Math.round((parseFloat(l)||0)*12)),z=E===0?b/C:b*E*Math.pow(1+E,C)/(Math.pow(1+E,C)-1);return{P:b,i:E,n:C,emi:z,totalPay:z*C,totalInterest:z*C-b}},[n,i,l]),y=h==="monthly"?"tenure":f,A=g.useMemo(()=>{const{P:b,i:E,n:C,emi:z,totalInterest:M}=S,_=Math.max(0,parseFloat(d)||0);if(_<=0)return null;let B=z,W=C,j=M,J=S.totalPay;if(h==="once"&&y==="emi"){const I=Math.max(0,b-_);B=E===0?I/C:I*E*Math.pow(1+E,C)/(Math.pow(1+E,C)-1),W=C,j=B*C-I,J=_+B*C}else if(h==="once"){const I=yu(b,E,z,0,_);W=I.months,j=I.totalInterest,J=I.totalPaid}else{const I=yu(b,E,z,_,0);W=I.months,j=I.totalInterest,J=I.totalPaid}return{newEMI:B,newMonths:W,newInterest:j,totalPaid:J,interestSaved:Math.max(0,M-j),monthsSaved:Math.max(0,C-(isFinite(W)?W:C))}},[S,d,h,y]),m=S.totalPay>0?S.P/S.totalPay*100:0,p=h==="once"?Math.max(1e5,Math.round(S.P)):Math.max(5e4,Math.round(S.emi*3));return r.jsxs("div",{style:w.card,children:[r.jsx("div",{style:w.cardTitleRow,children:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx(Px,{size:18,color:"#C2536B"}),r.jsxs("div",{children:[r.jsx("div",{style:w.cardTitle,children:"EMI calculator"}),r.jsx("div",{style:w.cardSub,children:"Loan / mortgage monthly payment"})]})]})}),r.jsx(Tn,{label:"Loan amount",value:n,set:o,min:5e4,max:5e7,step:5e4,suffix:t.symbol}),r.jsx(Tn,{label:"Interest rate (p.a.)",value:i,set:s,min:1,max:24,step:.1,suffix:"%"}),r.jsx(Tn,{label:"Tenure",value:l,set:a,min:1,max:30,step:1,suffix:"yrs"}),r.jsxs("div",{style:w.resultHero,children:[r.jsx("div",{style:w.resultLabel,children:"Monthly EMI"}),r.jsx("div",{style:{...w.resultVal,color:"#C2536B"},children:e(S.emi)})]}),r.jsxs("div",{style:w.emiSplitTrack,children:[r.jsx("div",{style:{width:`${m}%`,background:"#5B7C99",height:"100%"}}),r.jsx("div",{style:{width:`${100-m}%`,background:"#C2536B",height:"100%"}})]}),r.jsxs("div",{style:w.splitRow,children:[r.jsxs("div",{style:w.splitItem,children:[r.jsx("span",{style:{...w.splitV,color:"#5B7C99"},children:e(S.P)}),r.jsx("span",{style:w.splitL,children:"Principal"})]}),r.jsxs("div",{style:w.splitItem,children:[r.jsx("span",{style:{...w.splitV,color:"#C2536B"},children:e(S.totalInterest)}),r.jsx("span",{style:w.splitL,children:"Total interest"})]}),r.jsxs("div",{style:w.splitItem,children:[r.jsx("span",{style:w.splitV,children:e(S.totalPay)}),r.jsx("span",{style:w.splitL,children:"Total payable"})]})]}),r.jsx("div",{style:w.subDivider}),r.jsx("div",{style:w.subTitle,children:"Prepayment planner"}),r.jsx("div",{style:w.cardSub,children:"See what an extra payment does to your loan."}),r.jsx("div",{style:{marginTop:14},children:r.jsx(Tn,{label:"Prepayment amount",value:d,set:c,min:0,max:p,step:h==="once"?25e3:1e3,suffix:t.symbol})}),r.jsxs("div",{style:w.segGroup,children:[r.jsx("span",{style:w.segLbl,children:"Type"}),r.jsxs("div",{style:w.segRow,children:[r.jsx(as,{label:"One-time",on:h==="once",onClick:()=>x("once")}),r.jsx(as,{label:"Every month",on:h==="monthly",onClick:()=>x("monthly")})]})]}),r.jsxs("div",{style:w.segGroup,children:[r.jsx("span",{style:w.segLbl,children:"Strategy"}),r.jsxs("div",{style:w.segRow,children:[r.jsx(as,{label:"Reduce tenure",on:y==="tenure",onClick:()=>R("tenure")}),r.jsx(as,{label:"Reduce EMI",on:y==="emi",disabled:h==="monthly",onClick:()=>R("emi")})]})]}),h==="monthly"&&r.jsx("div",{style:w.note,children:"An extra monthly payment always shortens the tenure. Switch to a one-time prepayment to reduce your EMI instead."}),A?r.jsxs("div",{style:w.cmpCard,children:[r.jsxs("div",{style:w.cmpRow,children:[r.jsx("span",{style:w.cmpLbl,children:"New EMI"}),r.jsxs("span",{style:w.cmpVal,children:[e(A.newEMI),A.newEMI<S.emi-1&&r.jsxs("span",{style:w.cmpWas,children:[" was ",e(S.emi)]})]})]}),r.jsxs("div",{style:w.cmpRow,children:[r.jsx("span",{style:w.cmpLbl,children:"New tenure"}),r.jsxs("span",{style:w.cmpVal,children:[vu(A.newMonths)," ",r.jsxs("span",{style:w.cmpWas,children:["· paid off ",G0(A.newMonths)]})]})]}),r.jsxs("div",{style:w.cmpRow,children:[r.jsx("span",{style:w.cmpLbl,children:"Total interest"}),r.jsx("span",{style:w.cmpVal,children:e(A.newInterest)})]}),r.jsxs("div",{style:w.cmpRow,children:[r.jsx("span",{style:w.cmpLbl,children:"Total payable"}),r.jsx("span",{style:w.cmpVal,children:e(A.totalPaid)})]}),r.jsxs("div",{style:w.saveRow,children:["You save ",e(A.interestSaved)," in interest",A.monthsSaved>0?` · ${vu(A.monthsSaved)} sooner`:""]})]}):r.jsx("div",{style:w.muted,children:"Enter a prepayment amount to see the impact."})]})}function as({label:e,on:t,onClick:n,disabled:o}){return r.jsx("button",{onClick:o?void 0:n,disabled:o,style:{...w.seg,...t?w.segOn:{},...o?w.segDisabled:{}},children:e})}const w={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},tabs:{display:"flex",gap:7,marginBottom:18,flexWrap:"wrap"},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:10,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},presetRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},preset:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:18,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},presetOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},sumGrid:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:16},sumCard:{background:"var(--surface)",borderRadius:14,padding:"14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},sumIcon:{width:30,height:30,borderRadius:9,display:"grid",placeItems:"center",marginBottom:8},sumLabel:{fontSize:11.5,color:"var(--text-3)",fontWeight:600},sumVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:2,letterSpacing:"-0.01em",wordBreak:"break-word"},card:{background:"var(--surface)",borderRadius:16,padding:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)",marginBottom:16},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14,gap:10},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardSub:{fontSize:11.5,color:"var(--text-3)",marginTop:2},cardTotal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"14px 0"},twoCol:{display:"grid",gridTemplateColumns:"1fr",gap:0},dot:{width:10,height:10,borderRadius:3,flexShrink:0},pieWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap"},pieChart:{position:"relative",width:132,height:132,flexShrink:0,margin:"0 auto"},pieSvg:{position:"absolute",inset:0,width:"100%",height:"100%",overflow:"visible"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:80,height:80,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",transition:"transform 0.15s, box-shadow 0.15s",pointerEvents:"none",textAlign:"center",padding:4,boxSizing:"border-box"},pieHoleVal:{fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:160,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8,borderRadius:8,padding:"3px 5px",margin:"-3px -5px",cursor:"default",transition:"background 0.15s"},legendRowOn:{background:"var(--surface-2)"},legendName:{flex:1,fontSize:12.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},legendPct:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,width:34,textAlign:"right"},legendAmt:{fontSize:12.5,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:64,textAlign:"right"},investNote:{display:"flex",alignItems:"center",gap:6,fontSize:11.5,color:"var(--text-3)",marginBottom:14,marginTop:-4},healthScore:{fontSize:32,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1},healthStatus:{fontSize:12.5,fontWeight:700,marginTop:2},gaugeTrack:{height:10,background:"var(--surface-2)",borderRadius:6,overflow:"hidden",marginBottom:14},gaugeFill:{height:"100%",borderRadius:6,transition:"width 0.4s"},healthStats:{display:"flex",gap:24,marginBottom:12},healthStat:{display:"flex",flexDirection:"column"},healthStatV:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},healthStatL:{fontSize:11,color:"var(--text-3)",fontWeight:600},tip:{fontSize:12.5,lineHeight:1.5,padding:"10px 12px",borderRadius:10,border:"1px solid",fontWeight:500},kindToggle:{display:"flex",gap:8,marginBottom:12},kindBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},formGrid:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8},input:{border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},addBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",marginTop:10,border:"none",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},invAddBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"7px 13px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",flexShrink:0},invRow:{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid var(--border)"},invPct:{fontSize:11,fontWeight:700,marginTop:1},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtnPlain:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},fixedHint:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.5,marginTop:10,marginBottom:0},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},dateHead:{fontSize:11,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8},txnRow:{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid var(--border)"},txnDot:{width:9,height:9,borderRadius:"50%",flexShrink:0},txnCat:{fontSize:13.5,fontWeight:600},txnNote:{fontSize:11.5,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},txnAmt:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},delBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",flexShrink:0},editTxn:{background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:12,padding:12,margin:"6px 0"},editCancel:{display:"flex",alignItems:"center",justifyContent:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},field:{marginBottom:16},fieldTop:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},fieldLabel:{fontSize:13,fontWeight:600,color:"var(--text-2)"},fieldInputWrap:{display:"flex",alignItems:"center",gap:4,border:"1px solid var(--border)",borderRadius:8,padding:"5px 10px",background:"var(--surface-2)"},fieldInput:{border:"none",background:"none",outline:"none",width:90,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},fieldSuffix:{fontSize:12,color:"var(--text-3)",fontWeight:600},range:{width:"100%",accentColor:"var(--accent)",cursor:"pointer"},resultHero:{textAlign:"center",padding:"14px 0 6px"},resultLabel:{fontSize:12,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em"},resultVal:{fontSize:34,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:2,wordBreak:"break-word"},splitRow:{display:"flex",gap:10,marginTop:10},splitItem:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",background:"var(--surface-2)",borderRadius:10,padding:"10px 6px"},splitV:{fontSize:14.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",wordBreak:"break-word"},splitL:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginTop:2},chartWrap:{marginTop:18},chartBars:{display:"flex",alignItems:"flex-end",gap:3,height:90},chartCol:{flex:1,height:"100%",display:"flex",alignItems:"flex-end"},chartStack:{width:"100%",background:"#9DBFD6",borderRadius:"3px 3px 0 0",minHeight:2,position:"relative",display:"flex",flexDirection:"column",justifyContent:"flex-start"},chartGain:{width:"100%",background:"#3E9E6B",borderRadius:"3px 3px 0 0"},chartAxis:{display:"flex",fontSize:10,color:"var(--text-3)",fontWeight:600,marginTop:6},legend:{display:"flex",gap:16,justifyContent:"center",marginTop:10},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)",fontWeight:600},legendDot:{width:10,height:10,borderRadius:3},emiSplitTrack:{display:"flex",height:12,borderRadius:6,overflow:"hidden",marginTop:16,border:"1px solid var(--border)"},subDivider:{height:1,background:"var(--border)",margin:"20px 0 14px"},subTitle:{fontSize:15,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},segGroup:{marginBottom:12},segLbl:{fontSize:12,fontWeight:600,color:"var(--text-3)",display:"block",marginBottom:6},segRow:{display:"flex",gap:8},seg:{flex:1,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},segOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},segDisabled:{opacity:.4,cursor:"not-allowed"},note:{fontSize:12,lineHeight:1.5,color:"var(--text-3)",background:"var(--surface-2)",borderRadius:9,padding:"9px 11px",marginBottom:12},cmpCard:{background:"var(--surface-2)",borderRadius:12,padding:"12px 14px",marginTop:4},cmpRow:{display:"flex",justifyContent:"space-between",alignItems:"baseline",padding:"6px 0",borderBottom:"1px solid var(--border)",gap:10},cmpLbl:{fontSize:12.5,color:"var(--text-2)",fontWeight:600},cmpVal:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",textAlign:"right"},cmpWas:{fontSize:11,color:"var(--text-3)",fontWeight:500,fontFamily:"'Inter',system-ui,sans-serif"},saveRow:{marginTop:12,background:"rgba(62,158,107,0.12)",color:"#3E9E6B",borderRadius:9,padding:"10px 12px",fontSize:13,fontWeight:700,textAlign:"center"}},hd=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],aa={Monday:"Mon",Tuesday:"Tue",Wednesday:"Wed",Thursday:"Thu",Friday:"Fri",Saturday:"Sat",Sunday:"Sun"},Zo=()=>hd[(new Date().getDay()+6)%7],Er={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"},ku=Object.keys(Er),da=21,wu="kickstart_tags",ca=e=>{if(!e)return"";const t=e.trim();if(/^[A-Za-z0-9_-]{11}$/.test(t))return t;const n=t.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return n?n[1]:""},ju=e=>{if(!e||!String(e).trim())return null;const t=String(e).split(":").map(n=>parseInt(n.trim(),10));return t.some(n=>isNaN(n)||n<0)?null:t.reduce((n,o)=>n*60+o,0)},ds=e=>{if(e==null)return"";const t=Math.max(0,e|0);return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`},Y0=e=>`https://www.youtube.com/embed/${e.youtube_id}?start=${e.start_sec||0}`+(e.end_sec?`&end=${e.end_sec}`:"")+"&autoplay=1&rel=0",V0=()=>({id:null,url:"",title:"",start:"",end:"",days:[Zo()],pillars:[],customs:[]});function Q0(){const[e,t]=g.useState([]),[n,o]=g.useState([]),[i,s]=g.useState(!1),[l,a]=g.useState({type:"day",value:Zo()}),[d,c]=g.useState(null),[h,x]=g.useState(null),[f,R]=g.useState(""),S=g.useCallback(async()=>{try{const[I,re]=await Promise.all([$.getKickstart(),$.getSetting(wu)]);t(I),o(Array.isArray(re==null?void 0:re.value)?re.value:[])}catch{}s(!0)},[]);g.useEffect(()=>{S()},[S]);const{deleteItem:y,toasts:A,handleUndo:m,handleDismiss:p}=Ht($.deleteKickstart,$.restoreKickstart,S);g.useEffect(()=>{if(!h)return;const I=e.find(q=>q.id===h);if(!I)return;const re=I.end_sec?Math.max(1,I.end_sec-(I.start_sec||0)):1/0;let ue=0;const de=10,ye=setInterval(()=>{if(document.hidden)return;const q=re-ue;if(q<=0){clearInterval(ye);return}const N=Math.min(de,q);ue+=N,$.addScreenTime("kickstart",Math.round(N)).catch(()=>{})},de*1e3);return()=>clearInterval(ye)},[h,e]);const b=I=>{o(I),$.setSetting(wu,I).catch(()=>{})},E=()=>{const I=f.trim();!I||n.length>=da||n.includes(I)||(b([...n,I]),c(re=>re&&!re.customs.includes(I)?{...re,customs:[...re.customs,I]}:re),R(""))},C=I=>b(n.filter(re=>re!==I)),z=(I,re)=>c(ue=>({...ue,[I]:ue[I].includes(re)?ue[I].filter(de=>de!==re):[...ue[I],re]})),M=I=>c({id:I.id,url:`https://youtu.be/${I.youtube_id}`,title:I.title,start:ds(I.start_sec),end:I.end_sec?ds(I.end_sec):"",days:[...I.days],pillars:[...I.pillars],customs:[...I.customs]}),_=async()=>{const I=ca(d.url);if(!I||d.days.length===0||!d.title.trim())return;const re={youtube_id:I,title:d.title.trim(),start_sec:ju(d.start)||0,end_sec:ju(d.end),days:d.days,pillars:d.pillars,customs:d.customs};d.id?await $.updateKickstart(d.id,re):await $.createKickstart(re),c(null),S()},B=g.useMemo(()=>e.filter(I=>l.type==="all"?!0:l.type==="day"?I.days.includes(l.value):l.type==="pillar"?I.pillars.includes(l.value):l.type==="custom"?I.customs.includes(l.value):!0),[e,l]),W=(I,re)=>l.type===I&&l.value===re,j=d?[!ca(d.url)&&"a valid YouTube link",!d.title.trim()&&"a title",d.days.length===0&&"at least one day"].filter(Boolean):[],J=!!d&&j.length===0;return r.jsxs("div",{style:fe.page,children:[r.jsxs("div",{style:fe.head,children:[r.jsxs("div",{children:[r.jsx("div",{style:fe.eyebrow,children:"Anvil · Kickstart"}),r.jsx("h1",{style:fe.h1,children:"Kickstart"}),r.jsxs("div",{style:fe.subhead,children:["Your motivation hub — the right push for ",Zo(),"."]})]}),!d&&r.jsxs("button",{onClick:()=>c(V0()),style:fe.addBtn,children:[r.jsx(Ke,{size:15})," Add video"]})]}),d&&r.jsxs("div",{style:fe.card,children:[r.jsx("div",{style:fe.cardTitle,children:d.id?"Edit video":"Add video"}),r.jsx("input",{placeholder:"YouTube link (or video ID)",value:d.url,onChange:I=>c({...d,url:I.target.value}),style:fe.input,autoFocus:!0}),d.url&&!ca(d.url)&&r.jsx("div",{style:fe.warn,children:"Couldn't find a YouTube video ID in that link."}),r.jsx("input",{placeholder:"Title (required)",value:d.title,onChange:I=>c({...d,title:I.target.value}),style:{...fe.input,marginTop:8}}),r.jsxs("div",{style:fe.trimRow,children:[r.jsx(am,{size:15,color:"var(--text-3)"}),r.jsxs("label",{style:fe.trimField,children:[r.jsx("span",{style:fe.trimLbl,children:"Start"}),r.jsx("input",{placeholder:"0:30",value:d.start,onChange:I=>c({...d,start:I.target.value}),style:fe.trimInput})]}),r.jsx("span",{style:fe.trimArrow,children:"→"}),r.jsxs("label",{style:fe.trimField,children:[r.jsx("span",{style:fe.trimLbl,children:"End"}),r.jsx("input",{placeholder:"end (optional)",value:d.end,onChange:I=>c({...d,end:I.target.value}),style:fe.trimInput})]})]}),r.jsx("div",{style:fe.hint,children:"Only this trimmed part plays. Use m:ss (e.g. 1:30). Leave End blank to play to the end."}),r.jsxs("div",{style:fe.tagBlock,children:[r.jsxs("div",{style:fe.tagLabel,children:["Days ",r.jsx("span",{style:fe.req,children:"required"})]}),r.jsx("div",{style:fe.chipRow,children:hd.map(I=>r.jsx("button",{onClick:()=>z("days",I),style:{...fe.chip,...d.days.includes(I)?fe.chipOnDark:{}},children:aa[I]},I))})]}),r.jsxs("div",{style:fe.tagBlock,children:[r.jsxs("div",{style:fe.tagLabel,children:["Pillars ",r.jsx("span",{style:fe.opt,children:"optional"})]}),r.jsx("div",{style:fe.chipRow,children:ku.map(I=>{const re=d.pillars.includes(I);return r.jsxs("button",{onClick:()=>z("pillars",I),style:{...fe.chip,...re?{background:Er[I],color:"#fff",borderColor:Er[I]}:{}},children:[r.jsx("span",{style:{...fe.dot,background:re?"#fff":Er[I]}}),I]},I)})})]}),r.jsxs("div",{style:fe.tagBlock,children:[r.jsxs("div",{style:fe.tagLabel,children:["Custom tags ",r.jsxs("span",{style:fe.opt,children:["optional · ",n.length,"/",da]})]}),r.jsxs("div",{style:fe.chipRow,children:[n.map(I=>r.jsxs("span",{style:{...fe.chip,...d.customs.includes(I)?fe.chipOnAccent:{},paddingRight:4},children:[r.jsx("button",{onClick:()=>z("customs",I),style:fe.chipInner,children:I}),r.jsx("button",{onClick:()=>C(I),style:fe.chipX,title:"Delete tag",children:r.jsx(ze,{size:11})})]},I)),n.length===0&&r.jsx("span",{style:fe.muted,children:"No custom tags yet."})]}),n.length<da&&r.jsxs("div",{style:fe.newTagRow,children:[r.jsx("input",{placeholder:"New custom tag…",value:f,onChange:I=>R(I.target.value),onKeyDown:I=>I.key==="Enter"&&E(),style:{...fe.input,padding:"7px 10px"}}),r.jsx("button",{onClick:E,style:fe.smallBtn,children:r.jsx(Ke,{size:14})})]})]}),!J&&r.jsxs("div",{style:fe.warn,children:["Add ",j.join(", ")," to save."]}),r.jsxs("div",{style:fe.formActions,children:[r.jsxs("button",{onClick:()=>c(null),style:fe.cancelBtn,children:[r.jsx(ze,{size:14})," Cancel"]}),r.jsxs("button",{onClick:_,disabled:!J,style:{...fe.saveBtn,...J?{}:fe.saveDisabled},children:[r.jsx(We,{size:15})," ",d.id?"Save":"Add video"]})]})]}),r.jsxs("div",{style:fe.filterCard,children:[r.jsx("button",{onClick:()=>a({type:"all"}),style:{...fe.fChip,...l.type==="all"?fe.fChipOnDark:{}},children:"All"}),r.jsx("span",{style:fe.fDivider}),hd.map(I=>r.jsxs("button",{onClick:()=>a({type:"day",value:I}),style:{...fe.fChip,...W("day",I)?fe.fChipOnDark:{},...I===Zo()?fe.fToday:{}},children:[aa[I],I===Zo()?" ·":""]},I)),r.jsx("span",{style:fe.fDivider}),ku.map(I=>r.jsxs("button",{onClick:()=>a({type:"pillar",value:I}),style:{...fe.fChip,...W("pillar",I)?{background:Er[I],color:"#fff",borderColor:Er[I]}:{}},children:[r.jsx("span",{style:{...fe.dot,background:W("pillar",I)?"#fff":Er[I]}}),I]},I)),n.length>0&&r.jsx("span",{style:fe.fDivider}),n.map(I=>r.jsxs("button",{onClick:()=>a({type:"custom",value:I}),style:{...fe.fChip,...W("custom",I)?fe.fChipOnAccent:{}},children:[r.jsx(ad,{size:11})," ",I]},I))]}),i?B.length===0?r.jsx("div",{style:fe.empty,children:e.length===0?"No videos yet — add your first motivation clip.":"No videos for this tag."}):r.jsx("div",{style:fe.grid,children:B.map(I=>r.jsxs("div",{style:fe.videoCard,children:[r.jsx("div",{style:fe.thumbWrap,children:h===I.id?r.jsx("iframe",{src:Y0(I),title:I.title||I.youtube_id,style:fe.iframe,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):r.jsxs("button",{onClick:()=>x(I.id),style:fe.thumbBtn,children:[r.jsx("img",{src:`https://img.youtube.com/vi/${I.youtube_id}/hqdefault.jpg`,alt:"",style:fe.thumb}),r.jsx("span",{style:fe.playOverlay,children:r.jsx(xc,{size:22,color:"#fff",fill:"#fff"})}),r.jsxs("span",{style:fe.trimBadge,children:[ds(I.start_sec),I.end_sec?` – ${ds(I.end_sec)}`:"+"]})]})}),r.jsxs("div",{style:fe.videoBody,children:[r.jsx("div",{style:fe.videoTitle,children:I.title||"Untitled clip"}),r.jsxs("div",{style:fe.tagWrap,children:[I.days.map(re=>r.jsx("span",{style:fe.dayTag,children:aa[re]},re)),I.pillars.map(re=>r.jsx("span",{style:{...fe.pillTag,color:Er[re]||"var(--text-2)",borderColor:Er[re]||"var(--border)"},children:re},re)),I.customs.map(re=>r.jsx("span",{style:fe.customTag,children:re},re))]}),r.jsxs("div",{style:fe.cardActions,children:[r.jsx("button",{onClick:()=>M(I),style:fe.iconBtn,title:"Edit",children:r.jsx(bt,{size:13})}),r.jsx("button",{onClick:()=>y(I.id,I.title||"video"),style:fe.iconBtn,title:"Delete",children:r.jsx(ze,{size:14})})]})]})]},I.id))}):r.jsx("div",{style:fe.muted,children:"Loading…"}),r.jsx(Gt,{toasts:A,onUndo:m,onDismiss:p})]})}const fe={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:1e3,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},input:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},warn:{fontSize:11.5,color:"#C2773B",marginTop:5,fontWeight:600},hint:{fontSize:11.5,color:"var(--text-3)",marginTop:6,lineHeight:1.4},trimRow:{display:"flex",alignItems:"flex-end",gap:10,marginTop:10},trimField:{display:"flex",flexDirection:"column",gap:4,flex:1},trimLbl:{fontSize:11,color:"var(--text-2)",fontWeight:600},trimInput:{border:"1px solid var(--border)",borderRadius:8,padding:"8px 10px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},trimArrow:{color:"var(--text-3)",paddingBottom:9},tagBlock:{marginTop:14},tagLabel:{fontSize:12,fontWeight:700,color:"var(--text-2)",marginBottom:7},req:{fontSize:10,fontWeight:700,color:"#C2536B",textTransform:"uppercase",marginLeft:6},opt:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",marginLeft:6},chipRow:{display:"flex",gap:6,flexWrap:"wrap"},chip:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},chipOnDark:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},chipOnAccent:{background:"var(--accent)",color:"#fff",borderColor:"var(--accent)"},chipInner:{border:"none",background:"none",color:"inherit",cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:600,padding:0},chipX:{border:"none",background:"rgba(0,0,0,0.12)",color:"inherit",cursor:"pointer",display:"grid",placeItems:"center",borderRadius:"50%",width:16,height:16,padding:0},newTagRow:{display:"flex",gap:6,marginTop:8,maxWidth:280},smallBtn:{border:"none",background:"var(--accent)",color:"#fff",width:34,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},dot:{width:8,height:8,borderRadius:"50%",flexShrink:0,display:"inline-block"},formActions:{display:"flex",gap:8,marginTop:16},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:"var(--accent)",color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"},filterCard:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:12,marginBottom:18},fChip:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},fChipOnDark:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},fChipOnAccent:{background:"var(--accent)",color:"#fff",borderColor:"var(--accent)"},fToday:{borderColor:"var(--accent)",borderWidth:2},fDivider:{width:1,alignSelf:"stretch",background:"var(--border)",margin:"0 2px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:14},videoCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},thumbWrap:{position:"relative",width:"100%",aspectRatio:"16 / 9",background:"#000"},thumbBtn:{border:"none",padding:0,margin:0,cursor:"pointer",width:"100%",height:"100%",position:"relative",display:"block",background:"#000"},thumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},playOverlay:{position:"absolute",inset:0,display:"grid",placeItems:"center",background:"rgba(0,0,0,0.28)"},trimBadge:{position:"absolute",bottom:8,right:8,background:"rgba(0,0,0,0.75)",color:"#fff",fontSize:11,fontWeight:700,padding:"2px 7px",borderRadius:6,fontFamily:"'Fraunces',Georgia,serif"},iframe:{width:"100%",height:"100%",border:"none",display:"block"},videoBody:{padding:"12px 13px",display:"flex",flexDirection:"column",gap:8},videoTitle:{fontSize:14,fontWeight:700},tagWrap:{display:"flex",gap:5,flexWrap:"wrap"},dayTag:{fontSize:10,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",padding:"2px 7px",borderRadius:8},pillTag:{fontSize:10,fontWeight:700,border:"1px solid",borderRadius:8,padding:"2px 7px"},customTag:{fontSize:10,fontWeight:700,color:"var(--accent)",background:"color-mix(in srgb, var(--accent) 14%, transparent)",padding:"2px 7px",borderRadius:8},cardActions:{display:"flex",gap:4,justifyContent:"flex-end"},iconBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"}},Sm=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,Su=()=>Sm(new Date),Cu=(e,t)=>{const n=new Date(e+"T00:00:00");return n.setDate(n.getDate()+t),Sm(n)},Iu=e=>new Date(e+"T00:00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",year:"numeric"}),K0=e=>{if(!e)return"";const t=e.trim();if(/^[A-Za-z0-9_-]{11}$/.test(t))return t;const n=t.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return n?n[1]:""},X0=e=>new Promise((t,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:l,height:a}=i;l>a&&l>900?(a=a*900/l,l=900):a>900&&(l=l*900/a,a=900);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(i,0,0,l,a),t(d.toDataURL("image/jpeg",.82))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(e)});function q0(){const[e,t]=g.useState([]),[n,o]=g.useState(!1),[i,s]=g.useState(null),[l,a]=g.useState(!1),[d,c]=g.useState({title:"",image:""}),[h,x]=g.useState(""),[f,R]=g.useState(!0),[S,y]=g.useState(null),A=g.useCallback(async()=>{try{t(await $.getGoldenGoals())}catch{}o(!0)},[]);g.useEffect(()=>{A()},[A]);const{deleteItem:m,toasts:p,handleUndo:b,handleDismiss:E}=Ht($.deleteGolden,$.restoreGolden,A);g.useEffect(()=>{$.getSetting("golden_music").then(B=>x(K0((B==null?void 0:B.value)||""))).catch(()=>{})},[]);const C=async()=>{if(!d.title.trim())return;const B=await $.createGolden({title:d.title.trim(),image:d.image});c({title:"",image:""}),a(!1),await A(),s(B.id)},z=async(B,W)=>{var J;const j=(J=B.target.files)==null?void 0:J[0];if(j)try{W(await X0(j))}catch{}},M=e.filter(B=>!B.achieved),_=e.filter(B=>B.achieved);return i?r.jsxs("div",{style:be.page,children:[r.jsx(ev,{musicId:h,on:f}),r.jsx(Z0,{goalId:i,onBack:()=>s(null),onReload:A,onCelebrate:(B,W)=>y({title:B,days:W}),pickImage:z,musicId:h,musicOn:f,setMusicOn:R}),S&&r.jsx(J0,{data:S,onClose:()=>y(null)})]}):r.jsxs("div",{style:be.page,children:[r.jsxs("div",{style:be.head,children:[r.jsxs("div",{children:[r.jsx("div",{style:be.eyebrow,children:"Anvil · Golden Book"}),r.jsx("h1",{style:be.h1,children:"Golden Book"}),r.jsx("div",{style:be.subhead,children:"Write your dreams into being — a little every day."})]}),!l&&r.jsxs("button",{onClick:()=>a(!0),style:be.addBtn,children:[r.jsx(Ke,{size:15})," New dream"]})]}),l&&r.jsxs("div",{style:be.card,children:[r.jsx("div",{style:be.cardTitle,children:"Manifest a new dream"}),r.jsx("textarea",{autoFocus:!0,placeholder:"Write your dream as if it's already true…",value:d.title,onChange:B=>c({...d,title:B.target.value}),style:be.textarea}),r.jsxs("label",{style:be.photoPick,children:[d.image?r.jsx("img",{src:d.image,alt:"",style:be.photoPreview}):r.jsxs("span",{style:be.photoEmpty,children:[r.jsx(vl,{size:18})," Add a photo"]}),r.jsx("input",{type:"file",accept:"image/*",onChange:B=>z(B,W=>c({...d,image:W})),style:{display:"none"}})]}),r.jsxs("div",{style:be.formActions,children:[r.jsxs("button",{onClick:()=>{a(!1),c({title:"",image:""})},style:be.cancelBtn,children:[r.jsx(ze,{size:14})," Cancel"]}),r.jsxs("button",{onClick:C,disabled:!d.title.trim(),style:{...be.saveBtn,...d.title.trim()?{}:be.saveDisabled},children:[r.jsx(We,{size:15})," Create"]})]})]}),n?r.jsxs(r.Fragment,{children:[M.length===0&&_.length===0&&!l&&r.jsx("div",{style:be.empty,children:"No dreams yet. Add your first one and revisit it daily."}),M.length>0&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:be.sectionTitle,children:[r.jsx(To,{size:15,color:"#C9A227"})," Manifesting ",r.jsx("span",{style:be.badge,children:M.length})]}),r.jsx("div",{style:be.grid,children:M.map(B=>r.jsx(zu,{g:B,onOpen:()=>s(B.id),onDelete:()=>m(B.id,B.title)},B.id))})]}),_.length>0&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{...be.sectionTitle,marginTop:22},children:[r.jsx(Hr,{size:15,color:"#4C9A6B"})," Manifested ",r.jsx("span",{style:be.badge,children:_.length})]}),r.jsx("div",{style:be.grid,children:_.map(B=>r.jsx(zu,{g:B,onOpen:()=>s(B.id),onDelete:()=>m(B.id,B.title),achieved:!0},B.id))})]})]}):r.jsx("div",{style:be.muted,children:"Loading…"}),r.jsx(Gt,{toasts:p,onUndo:b,onDismiss:E})]})}function zu({g:e,onOpen:t,onDelete:n,achieved:o}){return r.jsxs("div",{style:{...be.goalCard,...o?{opacity:.96}:{},position:"relative"},children:[r.jsxs("button",{onClick:t,style:be.goalCardBtn,children:[r.jsxs("div",{style:be.thumbWrap,children:[e.image?r.jsx("img",{src:e.image,alt:"",style:be.thumb}):r.jsx("div",{style:be.thumbEmpty,children:r.jsx(To,{size:26,color:"var(--text-3)"})}),o&&r.jsx("span",{style:be.stamp,children:"✦ Manifested"})]}),r.jsxs("div",{style:be.goalBody,children:[r.jsx("div",{style:be.goalTitle,children:e.title}),r.jsxs("div",{style:be.goalMeta,children:[o?r.jsxs("span",{style:{...be.metaPill,color:"#4C9A6B",background:"rgba(76,154,107,0.12)"},children:[r.jsx(Hr,{size:12})," ",e.days_to_manifest!=null?`in ${e.days_to_manifest} day${e.days_to_manifest===1?"":"s"}`:"done"]}):r.jsxs("span",{style:{...be.metaPill,color:"#C2773B",background:"rgba(194,119,59,0.12)"},children:[r.jsx(zo,{size:12})," ",e.streak," day streak"]}),r.jsxs("span",{style:be.metaDim,children:[e.total_days," entr",e.total_days===1?"y":"ies"]})]})]})]}),r.jsx("button",{onClick:i=>{i.stopPropagation(),window.confirm(`Delete "${e.title}"?`)&&n()},style:be.cardDelBtn,title:"Delete dream",children:r.jsx(vc,{size:14})})]})}function Z0({goalId:e,onBack:t,onReload:n,onCelebrate:o,pickImage:i,musicId:s,musicOn:l,setMusicOn:a}){const[d,c]=g.useState(null),[h,x]=g.useState({}),[f,R]=g.useState(Su()),[S,y]=g.useState(""),[A,m]=g.useState(null),p=Su(),b=g.useCallback(async()=>{const I=await $.getGoldenGoal(e);c(I);const re={};I.entries.forEach(ue=>{re[ue.date]=ue.text}),x(re),y(re[p]||"")},[e,p]);if(g.useEffect(()=>{b()},[b]),!d)return r.jsx("div",{style:be.muted,children:"Loading…"});const E=f===p,C=f>d.created_date,z=f<p,M=async()=>{await $.upsertGoldenEntry(e,{date:p,text:S}),await b(),n()},_=async()=>{const I=await $.achieveGolden(e);o(d.title,I.days_to_manifest),await b(),n()},B=async()=>{await $.unachieveGolden(e),await b(),n()},W=async()=>{A.trim()&&(await $.updateGolden(e,{title:A.trim()}),m(null),await b(),n())},j=I=>$.updateGolden(e,{image:I}).then(()=>{b(),n()}),J=async()=>{window.confirm(`Delete "${d.title}"? This cannot be undone from here.`)&&(await $.deleteGolden(e),n(),t())};return r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:be.detailTopRow,children:[r.jsxs("button",{onClick:t,style:be.backBtn,children:[r.jsx(Vb,{size:16})," All dreams"]}),r.jsxs("button",{onClick:J,style:be.deleteBtn,title:"Delete dream",children:[r.jsx(vc,{size:14})," Delete"]})]}),r.jsxs("div",{style:be.detailHero,children:[r.jsxs("label",{style:be.heroPhoto,children:[d.image?r.jsx("img",{src:d.image,alt:"",style:be.heroImg}):r.jsxs("span",{style:be.photoEmpty,children:[r.jsx(vl,{size:20})," Add a photo"]}),r.jsxs("span",{style:be.photoEdit,children:[r.jsx(bt,{size:12})," Edit photo"]}),r.jsx("input",{type:"file",accept:"image/*",onChange:I=>i(I,j),style:{display:"none"}})]}),r.jsxs("div",{style:be.heroInfo,children:[d.achieved&&r.jsxs("span",{style:be.heroStamp,children:["✦ Manifested",d.days_to_manifest!=null?` in ${d.days_to_manifest} day${d.days_to_manifest===1?"":"s"}`:""]}),A!==null?r.jsxs("div",{style:{display:"flex",gap:6,width:"100%"},children:[r.jsx("textarea",{autoFocus:!0,value:A,onChange:I=>m(I.target.value),style:{...be.textarea,minHeight:60}}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[r.jsx("button",{onClick:W,style:be.iconSave,children:r.jsx(We,{size:14})}),r.jsx("button",{onClick:()=>m(null),style:be.iconCancel,children:r.jsx(ze,{size:14})})]})]}):r.jsxs("div",{style:be.heroTitleRow,children:[r.jsx("div",{style:be.heroTitle,children:d.title}),r.jsx("button",{onClick:()=>m(d.title),style:be.ghostBtn,title:"Edit",children:r.jsx(bt,{size:13})})]}),r.jsxs("div",{style:be.heroStats,children:[r.jsxs("span",{style:{...be.metaPill,color:"#C2773B",background:"rgba(194,119,59,0.12)"},children:[r.jsx(zo,{size:13})," ",d.streak," day streak"]}),r.jsxs("span",{style:be.metaDim,children:[d.total_days," entr",d.total_days===1?"y":"ies"]}),r.jsxs("span",{style:be.metaDim,children:["since ",Iu(d.created_date)]})]})]})]}),r.jsxs("div",{style:be.writeCard,children:[r.jsx("div",{style:be.tuneRow,children:s?r.jsxs("button",{onClick:()=>a(I=>!I),style:{...be.tuneBtn,...l?be.tuneOn:{}},children:[l?r.jsx(rm,{size:14}):r.jsx(fc,{size:14})," Soft tunes"]}):r.jsx("span",{style:be.tuneHint,children:"Add a track in Settings → Music"})}),r.jsxs("div",{style:be.writeNav,children:[r.jsx("button",{onClick:()=>R(I=>Cu(I,-1)),disabled:!C,style:{...be.navBtn,...C?{}:be.navDisabled},children:r.jsx(fn,{size:16})}),r.jsx("div",{style:be.writeDate,children:E?"Today":Iu(f)}),r.jsx("button",{onClick:()=>R(I=>Cu(I,1)),disabled:!z,style:{...be.navBtn,...z?{}:be.navDisabled},children:r.jsx(Ur,{size:16})})]}),E&&!d.achieved?r.jsxs(r.Fragment,{children:[r.jsx("textarea",{value:S,onChange:I=>y(I.target.value),placeholder:"Write it again today, as if it's already yours…",style:be.writeArea}),r.jsxs("button",{onClick:M,style:be.writeSave,children:[r.jsx(We,{size:15})," Save today's entry"]})]}):r.jsx("div",{style:be.readEntry,children:h[f]?r.jsxs(r.Fragment,{children:[r.jsx(im,{size:16,color:"var(--text-3)"}),r.jsx("p",{style:be.readText,children:h[f]})]}):r.jsx("div",{style:be.muted,children:"Nothing written on this day."})})]}),d.achieved?r.jsx("button",{onClick:B,style:be.unmanifestBtn,children:"Undo manifested"}):r.jsxs("button",{onClick:_,style:be.manifestBtn,children:[r.jsx(To,{size:16})," Mark as manifested"]})]})}function J0({data:e,onClose:t}){return r.jsx("div",{style:be.celebOverlay,onClick:t,children:r.jsxs("div",{style:be.celebBox,onClick:n=>n.stopPropagation(),children:[r.jsx("div",{style:be.celebEmoji,children:"✨🌟✨"}),r.jsx("div",{style:be.celebTitle,children:"It's happening!"}),r.jsxs("div",{style:be.celebDream,children:['"',e.title,'"']}),r.jsxs("div",{style:be.celebSub,children:[e.days!=null?`Manifested in ${e.days} day${e.days===1?"":"s"}.`:"Manifested."," The universe delivered. 🙏"]}),r.jsx("button",{onClick:t,style:be.celebBtn,children:"Wonderful"})]})})}function ev({musicId:e,on:t}){return!e||!t?null:r.jsx("iframe",{title:"golden-music",src:`https://www.youtube.com/embed/${e}?autoplay=1&loop=1&playlist=${e}&controls=0&modestbranding=1&playsinline=1`,allow:"autoplay; encrypted-media",style:{position:"fixed",left:-1e4,top:0,width:320,height:180,border:"none"}})}const kn="#C9A227",be={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:860,margin:"0 auto",position:"relative"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:kn,color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},textarea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"11px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:70,resize:"vertical",lineHeight:1.5},photoPick:{display:"block",marginTop:10,cursor:"pointer",borderRadius:12,overflow:"hidden",border:"1px dashed var(--border)"},photoPreview:{width:"100%",maxHeight:220,objectFit:"cover",display:"block"},photoEmpty:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"26px 0",color:"var(--text-3)",fontSize:13,fontWeight:600},formActions:{display:"flex",gap:8,marginTop:14},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:kn,color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:12},badge:{fontSize:11,fontWeight:700,background:"var(--hover)",color:"var(--text-2)",borderRadius:10,padding:"1px 7px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:14},goalCard:{textAlign:"left",border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},goalCardBtn:{textAlign:"left",border:"none",background:"none",cursor:"pointer",padding:0,fontFamily:"inherit",display:"flex",flexDirection:"column",width:"100%"},cardDelBtn:{position:"absolute",top:8,left:8,border:"none",background:"rgba(0,0,0,0.55)",color:"#fff",width:26,height:26,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",zIndex:2},thumbWrap:{position:"relative",width:"100%",aspectRatio:"16 / 10",background:"var(--surface-2)"},thumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},thumbEmpty:{width:"100%",height:"100%",display:"grid",placeItems:"center"},stamp:{position:"absolute",top:8,right:8,transform:"rotate(6deg)",background:"rgba(76,154,107,0.95)",color:"#fff",fontSize:11,fontWeight:800,letterSpacing:"0.04em",padding:"3px 9px",borderRadius:6,border:"1.5px solid #fff",textTransform:"uppercase"},goalBody:{padding:"11px 13px",display:"flex",flexDirection:"column",gap:8},goalTitle:{fontSize:14,fontWeight:600,lineHeight:1.35,display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"},goalMeta:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},metaPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11.5,fontWeight:700,padding:"2px 8px",borderRadius:10},metaDim:{fontSize:11,color:"var(--text-3)",fontWeight:500},detailTopRow:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16,gap:10},backBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},deleteBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid rgba(194,83,107,0.4)",background:"rgba(194,83,107,0.08)",color:"#C2536B",padding:"7px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},detailHero:{display:"flex",flexDirection:"column",gap:14,marginBottom:16},heroPhoto:{position:"relative",width:"100%",borderRadius:14,overflow:"hidden",border:"1px solid var(--border)",cursor:"pointer",background:"var(--surface-2)",display:"flex",alignItems:"center",justifyContent:"center",minHeight:120},heroImg:{width:"100%",maxHeight:"62vh",objectFit:"contain",display:"block"},photoEdit:{position:"absolute",bottom:8,right:8,display:"flex",alignItems:"center",gap:5,background:"rgba(0,0,0,0.6)",color:"#fff",fontSize:11,fontWeight:600,padding:"4px 8px",borderRadius:7},heroInfo:{display:"flex",flexDirection:"column",gap:10,alignItems:"center",textAlign:"center"},heroStamp:{alignSelf:"center",background:"rgba(76,154,107,0.14)",color:"#4C9A6B",fontSize:12,fontWeight:800,padding:"4px 10px",borderRadius:8,letterSpacing:"0.03em"},heroTitleRow:{display:"flex",alignItems:"flex-start",gap:8,justifyContent:"center"},heroTitle:{fontSize:23,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.35},heroStats:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap",justifyContent:"center"},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",flexShrink:0},iconSave:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},iconCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},writeCard:{background:"var(--surface)",borderRadius:14,padding:16,border:"1px solid var(--border)",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},tuneRow:{display:"flex",justifyContent:"flex-end",marginBottom:10},tuneBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 12px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tuneOn:{background:kn,color:"#fff",borderColor:kn},tuneHint:{fontSize:11,color:"var(--text-3)",fontWeight:500},writeNav:{display:"flex",alignItems:"center",justifyContent:"center",gap:14,marginBottom:12},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center"},navDisabled:{opacity:.35,cursor:"not-allowed"},writeDate:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:150,textAlign:"center"},writeArea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"12px",fontSize:15,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:120,resize:"vertical",lineHeight:1.6},writeSave:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",marginTop:10,border:"none",background:kn,color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},readEntry:{display:"flex",gap:8,padding:"6px 2px"},readText:{fontSize:15,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.6,margin:0,whiteSpace:"pre-wrap"},manifestBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,width:"100%",border:"none",background:"linear-gradient(135deg,#C9A227,#E0BD45)",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:800,cursor:"pointer",fontFamily:"inherit",boxShadow:"0 2px 10px rgba(201,162,39,0.35)"},unmanifestBtn:{display:"block",margin:"0 auto",border:"none",background:"none",color:"var(--text-3)",fontSize:12,fontWeight:600,cursor:"pointer",textDecoration:"underline",fontFamily:"inherit"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.6)",zIndex:200,display:"grid",placeItems:"center",padding:16},celebBox:{background:"var(--surface)",color:"var(--text)",borderRadius:20,padding:"36px 30px",textAlign:"center",maxWidth:360,boxShadow:"0 12px 48px rgba(0,0,0,0.3)"},celebEmoji:{fontSize:40,marginBottom:10},celebTitle:{fontSize:24,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginBottom:10,color:kn},celebDream:{fontSize:15,fontStyle:"italic",fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.5,marginBottom:10},celebSub:{fontSize:13.5,color:"var(--text-2)",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:kn,color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},ga=[{id:"meditation",label:"Meditation Hub",icon:mx,color:"#8268B0"},{id:"visualization",label:"Visualization",icon:Xs,color:"#3A7CA5"}],Tu=e=>{if(!e)return"";const t=e.trim();if(/^[A-Za-z0-9_-]{11}$/.test(t))return t;const n=t.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return n?n[1]:""},tv=e=>new Promise((t,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:l,height:a}=i;l>a&&l>1e3?(a=a*1e3/l,l=1e3):a>1e3&&(l=l*1e3/a,a=1e3);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(i,0,0,l,a),t(d.toDataURL("image/jpeg",.82))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(e)}),rv=e=>({id:null,kind:e,title:"",url:"",image:""});function nv(){const[e,t]=g.useState("meditation"),[n,o]=g.useState([]),[i,s]=g.useState(!1),[l,a]=g.useState(null),[d,c]=g.useState(null),h=g.useCallback(async()=>{try{o(await $.getMedia())}catch{}s(!0)},[]);g.useEffect(()=>{h()},[h]);const{deleteItem:x,toasts:f,handleUndo:R,handleDismiss:S}=Ht($.deleteMedia,$.restoreMedia,h);g.useEffect(()=>{if(!d)return;const z=10,M=setInterval(()=>{document.hidden||$.addScreenTime("mindscape",z).catch(()=>{})},z*1e3);return()=>clearInterval(M)},[d]);const y=ga.find(z=>z.id===e),A=n.filter(z=>z.kind===e),m=z=>a({id:z.id,kind:z.kind,title:z.title,url:`https://youtu.be/${z.youtube_id}`,image:z.image}),p=async z=>{var _;const M=(_=z.target.files)==null?void 0:_[0];if(M){try{const B=await tv(M);a(W=>({...W,image:B}))}catch{}z.target.value=""}},b=l?[!l.title.trim()&&"a title",!l.image&&"an image",!Tu(l.url)&&"a valid YouTube link"].filter(Boolean):[],E=!!l&&b.length===0,C=async()=>{if(!E)return;const z={kind:l.kind,title:l.title.trim(),image:l.image,youtube_id:Tu(l.url)};l.id?await $.updateMedia(l.id,z):await $.createMedia(z),a(null),h()};return r.jsxs("div",{style:Ge.page,children:[d&&r.jsx("iframe",{title:"mindscape-audio",src:`https://www.youtube.com/embed/${d.youtube_id}?autoplay=1&controls=0&modestbranding=1&playsinline=1`,allow:"autoplay; encrypted-media",style:{position:"fixed",left:-1e4,top:0,width:320,height:180,border:"none"}}),r.jsxs("div",{style:Ge.head,children:[r.jsxs("div",{children:[r.jsx("div",{style:Ge.eyebrow,children:"Anvil · Mindscape"}),r.jsx("h1",{style:Ge.h1,children:"Mindscape"}),r.jsx("div",{style:Ge.subhead,children:"Close your eyes and listen — guided meditation and visualization."})]}),!l&&r.jsxs("button",{onClick:()=>a(rv(e)),style:{...Ge.addBtn,background:y.color},children:[r.jsx(Ke,{size:15})," Add"]})]}),r.jsx("div",{style:Ge.tabs,children:ga.map(z=>{const M=z.icon,_=e===z.id;return r.jsxs("button",{onClick:()=>{t(z.id),a(null)},style:{...Ge.tab,..._?{background:z.color,color:"#fff",borderColor:z.color}:{}},children:[r.jsx(M,{size:15})," ",z.label]},z.id)})}),l&&r.jsxs("div",{style:Ge.card,children:[r.jsx("div",{style:Ge.cardTitle,children:l.id?"Edit":`New ${ga.find(z=>z.id===l.kind).label}`}),r.jsx("input",{placeholder:"YouTube link (plays as audio only)",value:l.url,onChange:z=>a({...l,url:z.target.value}),style:Ge.input,autoFocus:!0}),r.jsx("input",{placeholder:"Title (required)",value:l.title,onChange:z=>a({...l,title:z.target.value}),style:{...Ge.input,marginTop:8}}),r.jsxs("label",{style:Ge.photoPick,children:[l.image?r.jsx("img",{src:l.image,alt:"",style:Ge.photoPreview}):r.jsxs("span",{style:Ge.photoEmpty,children:[r.jsx(vl,{size:18})," Add cover image (required)"]}),r.jsx("input",{type:"file",accept:"image/*",onChange:p,style:{display:"none"}})]}),!E&&r.jsxs("div",{style:Ge.warn,children:["Add ",b.join(", ")," to save."]}),r.jsxs("div",{style:Ge.formActions,children:[r.jsxs("button",{onClick:()=>a(null),style:Ge.cancelBtn,children:[r.jsx(ze,{size:14})," Cancel"]}),r.jsxs("button",{onClick:C,disabled:!E,style:{...Ge.saveBtn,background:E?y.color:"var(--border)",color:E?"#fff":"var(--text-3)",cursor:E?"pointer":"not-allowed"},children:[r.jsx(We,{size:15})," ",l.id?"Save":"Add"]})]})]}),i?A.length===0?r.jsxs("div",{style:Ge.empty,children:["Nothing here yet — add a ",y.label.toLowerCase()," track."]}):r.jsx("div",{style:Ge.grid,children:A.map(z=>{const M=(d==null?void 0:d.id)===z.id;return r.jsxs("div",{style:Ge.mediaCard,children:[r.jsxs("button",{onClick:()=>c(M?null:z),style:Ge.coverBtn,title:M?"Pause":"Play",children:[r.jsx("img",{src:z.image,alt:"",style:Ge.cover}),r.jsx("span",{style:{...Ge.playOverlay,background:M?"rgba(0,0,0,0.45)":"rgba(0,0,0,0.28)"},children:r.jsx("span",{style:{...Ge.playCircle,background:y.color},children:M?r.jsx(om,{size:20,color:"#fff",fill:"#fff"}):r.jsx(xc,{size:20,color:"#fff",fill:"#fff"})})}),M&&r.jsxs("span",{style:Ge.nowPlaying,children:[r.jsx(rm,{size:11})," Playing"]})]}),r.jsxs("div",{style:Ge.mediaBody,children:[r.jsx("div",{style:Ge.mediaTitle,children:z.title}),r.jsxs("div",{style:Ge.cardActions,children:[r.jsx("button",{onClick:()=>m(z),style:Ge.iconBtn,title:"Edit",children:r.jsx(bt,{size:13})}),r.jsx("button",{onClick:()=>{(d==null?void 0:d.id)===z.id&&c(null),x(z.id,z.title)},style:Ge.iconBtn,title:"Delete",children:r.jsx(ze,{size:14})})]})]})]},z.id)})}):r.jsx("div",{style:Ge.muted,children:"Loading…"}),r.jsx(Gt,{toasts:f,onUndo:R,onDismiss:S})]})}const Ge={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:900,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},tabs:{display:"flex",gap:8,marginBottom:18,flexWrap:"wrap"},tab:{display:"flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:20,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none"},photoPick:{display:"block",marginTop:10,cursor:"pointer",borderRadius:12,overflow:"hidden",border:"1px dashed var(--border)"},photoPreview:{width:"100%",maxHeight:200,objectFit:"cover",display:"block"},photoEmpty:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"26px 0",color:"var(--text-3)",fontSize:13,fontWeight:600},warn:{fontSize:12,color:"#C2773B",marginTop:8,fontWeight:600},formActions:{display:"flex",gap:8,marginTop:14},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,fontFamily:"inherit"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gap:16},mediaCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},coverBtn:{position:"relative",border:"none",padding:0,cursor:"pointer",display:"block",width:"100%",aspectRatio:"1",background:"var(--surface-2)"},cover:{width:"100%",height:"100%",objectFit:"cover",display:"block"},playOverlay:{position:"absolute",inset:0,display:"grid",placeItems:"center"},playCircle:{width:46,height:46,borderRadius:"50%",display:"grid",placeItems:"center",boxShadow:"0 2px 10px rgba(0,0,0,0.3)"},nowPlaying:{position:"absolute",bottom:8,left:8,display:"flex",alignItems:"center",gap:4,background:"rgba(0,0,0,0.65)",color:"#fff",fontSize:11,fontWeight:700,padding:"3px 8px",borderRadius:7},mediaBody:{padding:"12px 14px",display:"flex",alignItems:"flex-start",gap:8},mediaTitle:{flex:1,fontSize:14.5,fontWeight:600,lineHeight:1.4,minWidth:0,wordBreak:"break-word"},cardActions:{display:"flex",gap:2,flexShrink:0,marginTop:1},iconBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"}},Cm={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"},ov=Object.keys(Cm),iv="#9A7B4F";function sv(e=760){const[t,n]=g.useState(()=>window.innerWidth<e);return g.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),t}const lv=()=>{const e=new Date,t=n=>String(n).padStart(2,"0");return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}`},av=e=>{if(!e)return"";const t=new Date(e+"T00:00:00");return isNaN(t)?e:t.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})},ua=e=>(e||"").slice(0,4),dv=e=>new Promise((t,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:l,height:a}=i;l>a&&l>1e3?(a=a*1e3/l,l=1e3):a>1e3&&(l=l*1e3/a,a=1e3);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(i,0,0,l,a),t(d.toDataURL("image/jpeg",.82))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(e)}),cv={id:null,title:"",date:lv(),pillar:"",reward:"",image:"",note:""};function gv(){const e=wl(),t=C=>vm(C,e.code),n=sv(),[o,i]=g.useState([]),[s,l]=g.useState(null),[a,d]=g.useState(!1),c=g.useRef(null),h=g.useCallback(()=>{$.getAchievements().then(i).catch(()=>{})},[]);g.useEffect(()=>{h()},[h]);const{deleteItem:x,toasts:f,handleUndo:R,handleDismiss:S}=Ht($.deleteAchievement,$.restoreAchievement,h),y=()=>l({...cv}),A=C=>l({id:C.id,title:C.title,date:C.date,pillar:C.pillar||"",reward:C.reward?String(C.reward):"",image:C.image||"",note:C.note||""}),m=async C=>{var M;const z=(M=C.target.files)==null?void 0:M[0];if(z){try{const _=await dv(z);l(B=>({...B,image:_}))}catch{}c.current&&(c.current.value="")}},p=s&&s.title.trim()&&s.date,b=async()=>{if(!p||a)return;d(!0);const C={title:s.title.trim(),date:s.date,pillar:s.pillar||null,reward:parseFloat(s.reward)||0,image:s.image||null,note:s.note.trim()};try{s.id?await $.updateAchievement(s.id,C):await $.createAchievement(C),l(null),h()}catch{}finally{d(!1)}},E=o.reduce((C,z)=>C+(z.reward||0),0);return r.jsxs("div",{style:Ae.page,children:[r.jsxs("div",{style:Ae.head,children:[r.jsxs("div",{children:[r.jsx("div",{style:Ae.eyebrow,children:"Anvil · Achievements"}),r.jsx("h1",{style:Ae.h1,children:"Achievements"}),r.jsx("div",{style:Ae.subhead,children:"Your tree of wins — newest at the top, scroll down through the past."})]}),r.jsxs("div",{style:Ae.headRight,children:[E>0&&r.jsxs("div",{style:Ae.totalBadge,children:[r.jsx(qs,{size:14,color:"#C9A227"})," ",t(E)," earned"]}),r.jsxs("button",{onClick:y,style:Ae.addBtn,children:[r.jsx(Ke,{size:15})," Add achievement"]})]})]}),o.length===0?r.jsxs("div",{style:Ae.empty,children:[r.jsx(Hr,{size:30,color:"var(--text-3)"}),r.jsx("div",{style:{marginTop:10},children:"No achievements yet."}),r.jsx("div",{style:Ae.emptySub,children:"Plant your first win — it'll grow into a timeline you can look back on."})]}):r.jsxs("div",{style:{...Ae.timeline,paddingLeft:0},children:[r.jsx("div",{style:{...Ae.trunk,left:n?13:"50%"}}),o.map((C,z)=>{const M=Cm[C.pillar]||iv,_=!n&&z%2===1,B=o[z-1],W=!B||ua(B.date)!==ua(C.date);return r.jsxs("div",{children:[W&&r.jsx("div",{style:{...Ae.yearRow,justifyContent:n?"flex-start":"center",paddingLeft:n?36:0},children:r.jsx("span",{style:Ae.yearChip,children:ua(C.date)})}),r.jsxs("div",{style:{...Ae.row,gridTemplateColumns:n?"28px 1fr":"1fr 44px 1fr"},children:[!n&&r.jsx("div",{style:{gridColumn:1,display:"flex",justifyContent:"flex-end"},children:_&&r.jsx(Eu,{a:C,color:M,side:"left",money:t,onEdit:()=>A(C),onDelete:()=>x(C.id,C.title)})}),r.jsx("div",{style:{gridColumn:n?1:2,display:"flex",justifyContent:"center",position:"relative"},children:r.jsx("div",{style:{...Ae.node,borderColor:M,background:"var(--surface)"},children:r.jsx("div",{style:{...Ae.nodeDot,background:M}})})}),r.jsx("div",{style:{gridColumn:n?2:3,display:"flex",justifyContent:"flex-start"},children:(n||!_)&&r.jsx(Eu,{a:C,color:M,side:n?"mobile":"right",money:t,onEdit:()=>A(C),onDelete:()=>x(C.id,C.title)})})]})]},C.id)})]}),s&&r.jsx("div",{style:Ae.overlay,onClick:()=>l(null),children:r.jsxs("div",{style:Ae.modal,onClick:C=>C.stopPropagation(),children:[r.jsxs("div",{style:Ae.modalHead,children:[r.jsx("div",{style:Ae.modalTitle,children:s.id?"Edit achievement":"New achievement"}),r.jsx("button",{onClick:()=>l(null),style:Ae.iconBtn,children:r.jsx(ze,{size:16})})]}),r.jsx("label",{style:Ae.label,children:"Title *"}),r.jsx("input",{autoFocus:!0,value:s.title,onChange:C=>l(z=>({...z,title:C.target.value})),placeholder:"What did you achieve?",style:Ae.input}),r.jsxs("div",{style:Ae.formRow,children:[r.jsxs("div",{style:{flex:1},children:[r.jsxs("label",{style:Ae.label,children:[r.jsx(yx,{size:12})," Date *"]}),r.jsx("input",{type:"date",value:s.date,onChange:C=>l(z=>({...z,date:C.target.value})),style:Ae.input})]}),r.jsxs("div",{style:{flex:1},children:[r.jsx("label",{style:Ae.label,children:"Pillar (optional)"}),r.jsxs("select",{value:s.pillar,onChange:C=>l(z=>({...z,pillar:C.target.value})),style:Ae.input,children:[r.jsx("option",{value:"",children:"— None —"}),ov.map(C=>r.jsx("option",{value:C,children:C},C))]})]})]}),r.jsxs("label",{style:Ae.label,children:[r.jsx(qs,{size:12})," Reward (",e.code,") — optional gesture of appreciation"]}),r.jsx("input",{type:"number",min:"0",step:"any",value:s.reward,onChange:C=>l(z=>({...z,reward:C.target.value})),placeholder:"0",style:Ae.input}),r.jsx("label",{style:Ae.label,children:"Photo (optional)"}),s.image?r.jsxs("div",{style:Ae.imgWrap,children:[r.jsx("img",{src:s.image,alt:"",style:Ae.imgPreview}),r.jsx("button",{onClick:()=>l(C=>({...C,image:""})),style:Ae.imgRemove,children:r.jsx(ze,{size:14})})]}):r.jsxs("button",{onClick:()=>{var C;return(C=c.current)==null?void 0:C.click()},style:Ae.uploadBtn,children:[r.jsx(Wx,{size:15})," Add a photo"]}),r.jsx("input",{ref:c,type:"file",accept:"image/*",onChange:m,style:{display:"none"}}),r.jsx("label",{style:Ae.label,children:"Note (optional)"}),r.jsx("textarea",{value:s.note,onChange:C=>l(z=>({...z,note:C.target.value})),placeholder:"The story behind it…",rows:3,style:{...Ae.input,resize:"vertical",fontFamily:"inherit"}}),r.jsxs("div",{style:Ae.modalActions,children:[r.jsx("button",{onClick:()=>l(null),style:Ae.cancelBtn,children:"Cancel"}),r.jsxs("button",{onClick:b,disabled:!p||a,style:{...Ae.saveBtn,...!p||a?{opacity:.5,cursor:"not-allowed"}:{}},children:[r.jsx(We,{size:15})," ",s.id?"Save":"Add"]})]})]})}),r.jsx(Gt,{toasts:f,onUndo:R,onDismiss:S})]})}function Eu({a:e,color:t,side:n,money:o,onEdit:i,onDelete:s}){return r.jsxs("div",{style:{...Ae.card,borderTop:`3px solid ${t}`,textAlign:n==="left"?"right":"left"},children:[r.jsxs("div",{style:{...Ae.cardTop,flexDirection:n==="left"?"row-reverse":"row"},children:[r.jsx("span",{style:{...Ae.dateChip,background:`${t}1A`,color:t},children:av(e.date)}),r.jsxs("div",{style:{display:"flex",gap:2},children:[r.jsx("button",{onClick:i,style:Ae.ghostBtn,title:"Edit",children:r.jsx(bt,{size:13})}),r.jsx("button",{onClick:s,style:Ae.ghostBtn,title:"Delete",children:r.jsx(ze,{size:14})})]})]}),r.jsx("div",{style:Ae.cardTitle,children:e.title}),e.image&&r.jsx("img",{src:e.image,alt:"",style:Ae.cardImg}),e.note&&r.jsx("div",{style:Ae.cardNote,children:e.note}),e.reward>0&&r.jsxs("div",{style:{...Ae.rewardBadge,marginLeft:n==="left"?"auto":0},children:[r.jsx(qs,{size:13})," ",o(e.reward)]})]})}const Ae={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:22},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},headRight:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},totalBadge:{display:"flex",alignItems:"center",gap:5,background:"rgba(201,162,39,0.12)",border:"1px solid rgba(201,162,39,0.3)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:700,color:"#8A6E1A"},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},empty:{textAlign:"center",color:"var(--text-3)",padding:"60px 16px",fontSize:14,fontWeight:600},emptySub:{fontSize:12.5,fontWeight:400,marginTop:6,maxWidth:320,marginInline:"auto",lineHeight:1.5},timeline:{position:"relative",maxWidth:1e3,margin:"0 auto",paddingBottom:30},trunk:{position:"absolute",top:8,bottom:8,width:3,background:"linear-gradient(to bottom, var(--border), var(--border))",transform:"translateX(-1.5px)",borderRadius:2},yearRow:{display:"flex",margin:"6px 0 12px"},yearChip:{fontSize:11.5,fontWeight:800,letterSpacing:"0.06em",color:"var(--text-2)",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:"4px 12px",position:"relative",zIndex:2},row:{display:"grid",alignItems:"center",gap:8,marginBottom:16},node:{width:20,height:20,borderRadius:"50%",border:"3px solid",display:"grid",placeItems:"center",zIndex:2,boxShadow:"0 0 0 4px var(--bg)"},nodeDot:{width:7,height:7,borderRadius:"50%"},card:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:"12px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.06)",maxWidth:420,width:"100%",boxSizing:"border-box"},cardTop:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,marginBottom:7},dateChip:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:12,whiteSpace:"nowrap"},cardTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em",lineHeight:1.3,wordBreak:"break-word"},cardImg:{width:"100%",maxHeight:220,objectFit:"cover",borderRadius:9,marginTop:9,display:"block"},cardNote:{fontSize:12.5,color:"var(--text-2)",marginTop:7,lineHeight:1.5,whiteSpace:"pre-wrap",wordBreak:"break-word"},rewardBadge:{display:"inline-flex",alignItems:"center",gap:5,marginTop:9,background:"rgba(201,162,39,0.12)",color:"#8A6E1A",border:"1px solid rgba(201,162,39,0.3)",padding:"3px 10px",borderRadius:14,fontSize:12,fontWeight:700},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",borderRadius:6},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:60,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:460,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},label:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)"},formRow:{display:"flex",gap:10},uploadBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:7,width:"100%",border:"1.5px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"11px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},imgWrap:{position:"relative",borderRadius:10,overflow:"hidden"},imgPreview:{width:"100%",maxHeight:220,objectFit:"cover",display:"block",borderRadius:10},imgRemove:{position:"absolute",top:8,right:8,border:"none",background:"rgba(0,0,0,0.55)",color:"#fff",width:28,height:28,borderRadius:"50%",cursor:"pointer",display:"grid",placeItems:"center"},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}};function uv(e=760){const[t,n]=g.useState(()=>window.innerWidth<e);return g.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),t}const kr="#C9772E",Yo=[{id:"todo",label:"Want to",color:"#3A7CA5"},{id:"doing",label:"Enjoying",color:"#C9772E"},{id:"done",label:"Satisfied",color:"#4C9A6B"}],pv=[{id:"text",label:"Text"},{id:"number",label:"Number"},{id:"link",label:"Link"}],pa=e=>(e&&typeof e=="object"?e.type:"text")||"text",Qr=e=>(e&&typeof e=="object"?e.name:e)||"";function bv(){const e=uv(),[t,n]=g.useState([]),[o,i]=g.useState(null),[s,l]=g.useState(!1),[a,d]=g.useState(null),[c,h]=g.useState(null),[x,f]=g.useState(null),[R,S]=g.useState(null),[y,A]=g.useState([]),m=g.useRef({}),p=g.useCallback(()=>{$.getDelight().then(v=>{n(v),i(D=>{var P;return D&&v.some(G=>G.id===D)?D:((P=v[0])==null?void 0:P.id)??null}),l(!0)}).catch(()=>l(!0))},[]);g.useEffect(()=>{p()},[p]),g.useEffect(()=>{A([])},[o]);const{deleteItem:b,toasts:E,handleUndo:C,handleDismiss:z}=Ht($.deleteDelightItem,$.restoreDelightItem,p),M=t.find(v=>v.id===o)||null,_=g.useMemo(()=>{const v={todo:[],doing:[],done:[]};return((M==null?void 0:M.items)||[]).forEach(D=>{(v[D.status]||v.todo).push(D)}),Object.values(v).forEach(D=>D.sort((P,G)=>P.position-G.position||P.id-G.id)),v},[M]),B=v=>/^tags?$/i.test(Qr(v).trim()),W=v=>((M==null?void 0:M.columns)||[]).filter(B).flatMap(D=>(v.fields[Qr(D)]||"").split(",").map(P=>P.trim()).filter(Boolean)),j=g.useMemo(()=>{const v=new Set;return((M==null?void 0:M.items)||[]).forEach(D=>(M.columns||[]).filter(B).forEach(P=>(D.fields[Qr(P)]||"").split(",").map(G=>G.trim()).filter(Boolean).forEach(G=>v.add(G)))),[...v].sort((D,P)=>D.localeCompare(P))},[M]),J=g.useMemo(()=>{const v={};return((M==null?void 0:M.columns)||[]).forEach(D=>{const P=Qr(D);if(B(D))return;const G=new Set;((M==null?void 0:M.items)||[]).forEach(ne=>{const ge=(ne.fields[P]||"").trim();ge&&G.add(ge)}),v[P]=[...G].sort((ne,ge)=>ne.localeCompare(ge))}),v},[M]),I=v=>y.length===0||W(v).some(D=>y.includes(D)),re=v=>A(D=>D.includes(v)?D.filter(P=>P!==v):[...D,v]),ue=(v,D,P)=>{for(const G of Yo){const ne=m.current[G.id];if(!ne)continue;const ge=ne.getBoundingClientRect();if(v>=ge.left&&v<=ge.right&&D>=ge.top&&D<=ge.bottom){const O=[...ne.querySelectorAll("[data-card]")].filter(k=>k.dataset.id!==String(P));let F=O.length;for(let k=0;k<O.length;k++){const ee=O[k].getBoundingClientRect();if(D<ee.top+ee.height/2){F=k;break}}return{status:G.id,index:F}}}return null},de=(v,D)=>{if(v.target.closest("button"))return;const P=v.clientX,G=v.clientY,ne=v.currentTarget;let ge=!1,O=null,F=null;const k=me=>{if(!ge){if(Math.hypot(me.clientX-P,me.clientY-G)<6)return;ge=!0;const Te=ne.getBoundingClientRect();F={id:D.id,item:D,w:Te.width,offX:P-Te.left,offY:G-Te.top}}F={...F,x:me.clientX,y:me.clientY},f(F),O=ue(me.clientX,me.clientY,D.id)||O,S(O)},ee=()=>{window.removeEventListener("pointermove",k),window.removeEventListener("pointerup",ee),ge&&O&&ye(D,O),f(null),S(null)};window.addEventListener("pointermove",k),window.addEventListener("pointerup",ee)},ye=(v,D)=>{const P={};Yo.forEach(O=>{P[O.id]=(_[O.id]||[]).filter(F=>F.id!==v.id)});const G=P[D.status]||[];let ne;if(y.length){const O=G.filter(I);ne=D.index<O.length?G.indexOf(O[D.index]):G.length}else ne=Math.max(0,Math.min(D.index,G.length));P[D.status]=[...G.slice(0,ne),{...v,status:D.status},...G.slice(ne)];const ge=[];Yo.forEach(O=>(P[O.id]||[]).forEach((F,k)=>ge.push({id:F.id,status:O.id,position:k}))),n(O=>O.map(F=>F.id===o?{...F,items:ge.map(k=>({...F.items.find(ee=>ee.id===k.id),status:k.status,position:k.position}))}:F)),$.arrangeDelight(o,ge).then(p).catch(p)},q=async v=>{window.confirm(`Delete "${v.name}" and all its items?`)&&(await $.deleteCollection(v.id),p())},N=()=>({name:"",type:"text"}),se=()=>d({id:null,name:"",columns:[N(),N()]}),Y=v=>d({id:v.id,name:v.name,columns:v.columns.length?v.columns.map(D=>({name:Qr(D),type:pa(D)})):[N()]}),le=async()=>{const v=a.name.trim();if(!v)return;const D=a.columns.map(P=>({name:P.name.trim(),type:P.type||"text"})).filter(P=>P.name);a.id?await $.updateCollection(a.id,{name:v,columns:D}):await $.createCollection({name:v,columns:D}),d(null),p()},T=(v="todo")=>h({id:null,name:"",fields:{},status:v}),oe=v=>h({id:v.id,name:v.name,fields:{...v.fields},status:v.status}),Ce=async()=>{const v=c.name.trim();if(!v||!M)return;const D={name:v,fields:c.fields,status:c.status};c.id?await $.updateDelightItem(c.id,D):await $.createDelightItem(M.id,D),h(null),p()},V=({it:v})=>{const D=M.columns.filter(G=>v.fields[Qr(G)]&&!B(G)),P=W(v);return r.jsxs("div",{"data-card":!0,"data-id":v.id,onPointerDown:G=>de(G,v),style:xe.itemCard,children:[r.jsxs("div",{style:xe.itemCardTop,children:[r.jsx(Zs,{size:13,style:{color:"var(--text-3)",flexShrink:0}}),r.jsx("span",{style:xe.itemName,children:v.name}),r.jsx("button",{onClick:()=>oe(v),style:xe.ghostBtn,children:r.jsx(bt,{size:12})}),r.jsx("button",{onClick:()=>b(v.id,v.name),style:xe.ghostBtn,children:r.jsx(ze,{size:13})})]}),D.map(G=>{const ne=Qr(G),ge=v.fields[ne];return r.jsxs("div",{style:xe.itemField,children:[r.jsx("span",{style:xe.fieldLabel,children:ne}),pa(G)==="link"?r.jsx("a",{href:/^https?:\/\//i.test(ge)?ge:`https://${ge}`,target:"_blank",rel:"noreferrer",style:{minWidth:0,wordBreak:"break-word",color:kr},onClick:O=>O.stopPropagation(),children:ge}):r.jsx("span",{style:{minWidth:0,wordBreak:"break-word"},children:ge})]},ne)}),P.length>0&&r.jsx("div",{style:xe.tagWrap,children:P.map((G,ne)=>r.jsx("span",{style:xe.tag,children:G},ne))})]})};return r.jsxs("div",{style:xe.page,children:[r.jsxs("div",{style:xe.head,children:[r.jsxs("div",{children:[r.jsx("div",{style:xe.eyebrow,children:"Anvil · Delights"}),r.jsx("h1",{style:xe.h1,children:"Delights"}),r.jsx("div",{style:xe.subhead,children:"Books, films, places, food — track what you want to enjoy and how you felt."})]}),r.jsxs("button",{onClick:se,style:xe.addColBtn,children:[r.jsx(Ke,{size:15})," New list"]})]}),r.jsxs("div",{style:xe.tabs,children:[t.map(v=>r.jsxs("button",{onClick:()=>i(v.id),style:{...xe.tab,...v.id===o?xe.tabOn:{}},children:[v.name,r.jsx("span",{style:xe.tabCount,children:v.items.length})]},v.id)),r.jsx("button",{onClick:se,style:xe.tabAdd,title:"New list",children:r.jsx(Ke,{size:15})})]}),s?M?r.jsxs("div",{children:[r.jsxs("div",{style:xe.colHead,children:[r.jsx("h2",{style:xe.colTitle,children:M.name}),r.jsxs("div",{style:xe.colActions,children:[r.jsxs("button",{onClick:()=>T(),style:xe.primaryBtn,children:[r.jsx(Ke,{size:14})," Add"]}),r.jsx("button",{onClick:()=>Y(M),style:xe.ghostBtn,title:"Edit list & columns",children:r.jsx(Tx,{size:15})}),r.jsx("button",{onClick:()=>q(M),style:xe.ghostBtn,title:"Delete list",children:r.jsx(ze,{size:16})})]})]}),j.length>0&&r.jsxs("div",{style:xe.filterBar,children:[r.jsx("span",{style:xe.filterLabel,children:"Tags"}),r.jsx("button",{onClick:()=>A([]),style:{...xe.filterChip,...y.length===0?xe.filterChipOn:{}},children:"All"}),j.map(v=>r.jsx("button",{onClick:()=>re(v),style:{...xe.filterChip,...y.includes(v)?xe.filterChipOn:{}},children:v},v))]}),r.jsx("div",{style:{...xe.board,gridTemplateColumns:e?"1fr":"repeat(3, 1fr)"},children:Yo.map(v=>{const D=(_[v.id]||[]).filter(I),P=x?D.filter(ne=>ne.id!==x.id):D,G=R&&R.status===v.id;return r.jsxs("div",{ref:ne=>m.current[v.id]=ne,style:{...xe.lane,...G?{outline:`2px dashed ${v.color}`,outlineOffset:-2}:{}},children:[r.jsxs("div",{style:xe.laneHead,children:[r.jsx("span",{style:{...xe.laneDot,background:v.color}}),r.jsx("span",{style:xe.laneLabel,children:v.label}),r.jsx("span",{style:xe.laneCount,children:D.length}),r.jsx("button",{onClick:()=>T(v.id),style:xe.laneAdd,title:`Add to ${v.label}`,children:r.jsx(Ke,{size:13})})]}),r.jsxs("div",{style:xe.laneBody,children:[P.map((ne,ge)=>r.jsxs("div",{children:[G&&R.index===ge&&r.jsx("div",{style:{...xe.insertLine,background:v.color}}),r.jsx(V,{it:ne})]},ne.id)),G&&R.index>=P.length&&r.jsx("div",{style:{...xe.insertLine,background:v.color}}),P.length===0&&!G&&r.jsx("div",{style:xe.laneEmpty,children:"Drop here"})]})]},v.id)})})]}):r.jsxs("div",{style:xe.empty,children:[r.jsx(nm,{size:28,color:"var(--text-3)"}),r.jsx("div",{style:{marginTop:10},children:"No lists yet."}),r.jsxs("button",{onClick:se,style:{...xe.addColBtn,marginTop:14},children:[r.jsx(Ke,{size:15})," Create your first list"]})]}):r.jsx("div",{style:xe.muted,children:"Loading…"}),x&&r.jsx("div",{style:{...xe.ghost,width:x.w,left:x.x-x.offX,top:x.y-x.offY},children:r.jsxs("div",{style:xe.itemCardTop,children:[r.jsx(Zs,{size:13,style:{color:"var(--text-3)",flexShrink:0}}),r.jsx("span",{style:xe.itemName,children:x.item.name})]})}),a&&r.jsx("div",{style:xe.overlay,onClick:()=>d(null),children:r.jsxs("div",{style:xe.modal,onClick:v=>v.stopPropagation(),children:[r.jsxs("div",{style:xe.modalHead,children:[r.jsx("span",{style:xe.modalTitle,children:a.id?"Edit list":"New list"}),r.jsx("button",{onClick:()=>d(null),style:xe.iconBtn,children:r.jsx(ze,{size:16})})]}),r.jsx("label",{style:xe.label,children:"List name *"}),r.jsx("input",{autoFocus:!0,value:a.name,onChange:v=>d(D=>({...D,name:v.target.value})),placeholder:"e.g. Gardens, Cafés, Trips…",style:xe.input}),r.jsx("label",{style:xe.label,children:"Columns"}),r.jsx("div",{style:xe.muted2,children:"Name the details you want to track (e.g. Author, Distance, Tag)."}),a.columns.map((v,D)=>r.jsxs("div",{style:xe.colRow,children:[r.jsx("input",{value:v.name,placeholder:`Column ${D+1}`,onChange:P=>d(G=>{const ne=[...G.columns];return ne[D]={...ne[D],name:P.target.value},{...G,columns:ne}}),style:{...xe.input,marginBottom:0,flex:1}}),r.jsx("select",{value:v.type,onChange:P=>d(G=>{const ne=[...G.columns];return ne[D]={...ne[D],type:P.target.value},{...G,columns:ne}}),style:xe.colTypeSelect,children:pv.map(P=>r.jsx("option",{value:P.id,children:P.label},P.id))}),r.jsx("button",{onClick:()=>d(P=>({...P,columns:P.columns.filter((G,ne)=>ne!==D)})),style:xe.iconBtn,children:r.jsx(ze,{size:14})})]},D)),a.columns.length<6&&r.jsxs("button",{onClick:()=>d(v=>({...v,columns:[...v.columns,N()]})),style:xe.addColInline,children:[r.jsx(Ke,{size:13})," Add column"]}),r.jsxs("div",{style:xe.modalActions,children:[r.jsx("button",{onClick:()=>d(null),style:xe.cancelBtn,children:"Cancel"}),r.jsxs("button",{onClick:le,disabled:!a.name.trim(),style:{...xe.saveBtn,...a.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[r.jsx(We,{size:15})," ",a.id?"Save":"Create"]})]})]})}),c&&M&&r.jsx("div",{style:xe.overlay,onClick:()=>h(null),children:r.jsxs("div",{style:xe.modal,onClick:v=>v.stopPropagation(),children:[r.jsxs("div",{style:xe.modalHead,children:[r.jsx("span",{style:xe.modalTitle,children:c.id?"Edit":`Add to ${M.name}`}),r.jsx("button",{onClick:()=>h(null),style:xe.iconBtn,children:r.jsx(ze,{size:16})})]}),r.jsx("label",{style:xe.label,children:"Name *"}),r.jsx("input",{autoFocus:!0,value:c.name,onChange:v=>h(D=>({...D,name:v.target.value})),onKeyDown:v=>v.key==="Enter"&&Ce(),placeholder:"Title / name",style:xe.input}),M.columns.map(v=>{const D=Qr(v),P=pa(v),G=`dl-${M.id}-${D}`,ne=J[D]||[];return r.jsxs("div",{children:[r.jsx("label",{style:xe.label,children:D}),r.jsx("input",{value:c.fields[D]||"",type:P==="number"?"number":P==="link"?"url":"text",list:ne.length?G:void 0,onChange:ge=>h(O=>({...O,fields:{...O.fields,[D]:ge.target.value}})),placeholder:P==="link"?"https://…":D,style:xe.input}),ne.length>0&&r.jsx("datalist",{id:G,children:ne.map(ge=>r.jsx("option",{value:ge},ge))})]},D)}),r.jsx("label",{style:xe.label,children:"Status"}),r.jsx("div",{style:xe.statusPick,children:Yo.map(v=>r.jsx("button",{type:"button",onClick:()=>h(D=>({...D,status:v.id})),style:{...xe.statusChip,...c.status===v.id?{background:v.color,color:"#fff",borderColor:v.color}:{}},children:v.label},v.id))}),r.jsxs("div",{style:xe.modalActions,children:[r.jsx("button",{onClick:()=>h(null),style:xe.cancelBtn,children:"Cancel"}),r.jsxs("button",{onClick:Ce,disabled:!c.name.trim(),style:{...xe.saveBtn,...c.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[r.jsx(We,{size:15})," ",c.id?"Save":"Add"]})]})]})}),r.jsx(Gt,{toasts:E,onUndo:C,onDismiss:z})]})}const xe={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},addColBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"none",background:kr,color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tabs:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16,alignItems:"center"},tab:{display:"inline-flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},tabOn:{background:kr,color:"#fff",borderColor:kr},tabCount:{fontSize:10.5,fontWeight:700,background:"rgba(0,0,0,0.12)",borderRadius:9,padding:"1px 6px"},tabAdd:{border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",width:32,height:32,borderRadius:"50%",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},colHead:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:10,marginBottom:12,flexWrap:"wrap"},colTitle:{fontSize:18,fontWeight:700,margin:0,fontFamily:"'Fraunces',Georgia,serif"},colActions:{display:"flex",gap:6,alignItems:"center"},primaryBtn:{display:"inline-flex",alignItems:"center",gap:5,border:"none",background:kr,color:"#fff",padding:"7px 13px",borderRadius:8,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",borderRadius:6,flexShrink:0},filterBar:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center",marginBottom:14},filterLabel:{fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--text-3)",marginRight:2},filterChip:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"5px 11px",borderRadius:16,fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},filterChipOn:{background:kr,color:"#fff",borderColor:kr},board:{display:"grid",gap:12,alignItems:"start"},lane:{background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:12,padding:"10px 10px 12px",minHeight:120,display:"flex",flexDirection:"column"},laneHead:{display:"flex",alignItems:"center",gap:7,padding:"2px 4px 10px"},laneDot:{width:9,height:9,borderRadius:"50%",flexShrink:0},laneLabel:{fontSize:12.5,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--text-2)"},laneCount:{fontSize:10.5,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 6px"},laneAdd:{marginLeft:"auto",border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center",padding:2,borderRadius:6},laneBody:{display:"flex",flexDirection:"column",gap:8,minHeight:40,flex:1},laneEmpty:{fontSize:12,color:"var(--text-3)",fontStyle:"italic",textAlign:"center",padding:"16px 0",border:"1px dashed var(--border)",borderRadius:8},insertLine:{height:3,borderRadius:2,margin:"1px 0"},itemCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"9px 10px",boxShadow:"0 1px 2px rgba(0,0,0,0.05)",cursor:"grab",touchAction:"none",userSelect:"none"},itemCardTop:{display:"flex",alignItems:"center",gap:6},itemName:{flex:1,minWidth:0,fontSize:13.5,fontWeight:700,wordBreak:"break-word"},itemField:{display:"flex",gap:8,fontSize:12,color:"var(--text-2)",marginTop:5,paddingLeft:19},fieldLabel:{fontWeight:700,color:"var(--text-3)",minWidth:64,flexShrink:0},tagWrap:{display:"flex",flexWrap:"wrap",gap:5,marginTop:8,paddingLeft:19},tag:{fontSize:10.5,fontWeight:700,color:kr,background:"color-mix(in srgb, "+kr+" 14%, transparent)",border:"1px solid color-mix(in srgb, "+kr+" 30%, transparent)",borderRadius:12,padding:"2px 8px",whiteSpace:"nowrap"},ghost:{position:"fixed",zIndex:300,pointerEvents:"none",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"9px 10px",boxShadow:"0 8px 28px rgba(0,0,0,0.28)",opacity:.95,transform:"rotate(1.5deg)"},muted:{fontSize:13,color:"var(--text-3)"},muted2:{fontSize:11.5,color:"var(--text-3)",marginBottom:8},empty:{textAlign:"center",color:"var(--text-3)",padding:"50px 16px",fontSize:14,fontWeight:600,display:"flex",flexDirection:"column",alignItems:"center"},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)",marginBottom:8},colRow:{display:"flex",gap:6,alignItems:"center",marginBottom:8},colTypeSelect:{border:"1px solid var(--border)",borderRadius:9,padding:"9px 8px",fontSize:12.5,fontFamily:"inherit",outline:"none",background:"var(--bg)",color:"var(--text)",flexShrink:0},addColInline:{display:"inline-flex",alignItems:"center",gap:5,border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"7px 12px",borderRadius:8,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},statusPick:{display:"flex",gap:6,flexWrap:"wrap"},statusChip:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 13px",borderRadius:18,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},pr="#C9772E",Im={Carrot:kx,ShoppingCart:ty,Clapperboard:Sx,ShoppingBag:cm,Fuel:Rx,Sparkles:To,Shirt:ey,WashingMachine:dy,Zap:py,Tv:ly,Droplet:Bx,Coffee:Ix,Utensils:ay,Bus:fx,Train:oy,Plane:Xx,Home:Ti,Heart:Zb,Gift:qs,Book:bx,Dumbbell:Dx,Pill:Kx,Phone:Vx,Wifi:cy,Gamepad2:Ax,Music:fc,Scissors:am,PawPrint:Yx,Baby:ux,GraduationCap:qb,Briefcase:hx,Car:vx,Bike:px},Kr=({name:e,...t})=>{const n=Im[e]||cm;return r.jsx(n,{...t})},ba=["#C9772E","#4C9A6B","#3A7CA5","#8268B0","#C2536B","#C9A227","#D1556E","#5B7C99","#A23E57","#3E9E6B"],fd=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,Bu=fd(new Date);function mv(e=760){const[t,n]=g.useState(()=>window.innerWidth<e);return g.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),t}function hv(){const e=mv(),t=wl(),n=wm(),[o,i]=g.useState([]),[s,l]=g.useState([]),[a,d]=g.useState(!1),[c,h]=g.useState(Bu),[x,f]=g.useState(()=>{const u=new Date;return new Date(u.getFullYear(),u.getMonth(),1)}),[R,S]=g.useState(null),[y,A]=g.useState(null),[m,p]=g.useState(!1),[b,E]=g.useState("day"),[C,z]=g.useState(()=>Rr(new Date,n)[0]),[M,_]=g.useState("all"),B=g.useCallback(()=>{$.getExpenses().then(u=>{i(u.categories),l(u.logs),d(!0)}).catch(()=>d(!0))},[]);g.useEffect(()=>{B()},[B]);const{deleteItem:W,toasts:j,handleUndo:J,handleDismiss:I}=Ht($.deleteExpenseLog,$.restoreExpenseLog,B),re=g.useMemo(()=>{const u={};return o.forEach(Z=>u[Z.id]=Z),u},[o]),ue=u=>nl(u,t.code),de=g.useMemo(()=>s.filter(u=>u.date===c),[s,c]),ye=de.reduce((u,Z)=>u+Z.amount,0),q=g.useMemo(()=>{if(b==="day")return de;if(b==="month"){const[u,Z]=Rr(new Date(c+"T00:00"),n);return s.filter(Fe=>Fe.date>=u&&Fe.date<=Z)}if(b==="year"){const u=c.slice(0,4);return s.filter(Z=>Z.date.slice(0,4)===u)}return s},[s,de,b,c,n]),N=q.reduce((u,Z)=>u+Z.amount,0),se=g.useMemo(()=>{const u={};return q.forEach(Z=>{u[Z.category_id]=(u[Z.category_id]||0)+Z.amount}),Object.entries(u).map(([Z,Fe])=>({cat:re[Z],amount:Fe})).filter(Z=>Z.cat).sort((Z,Fe)=>Fe.amount-Z.amount)},[q,re]),Y=u=>Rr(new Date(u+"T00:00"),n)[0],le=g.useMemo(()=>{const u=new Set(s.map(Z=>Y(Z.date)));return u.add(Rr(new Date,n)[0]),Array.from(u).sort().reverse().slice(0,12)},[s,n]),T=u=>new Date(u+"T00:00").toLocaleDateString("en-US",{month:"short",year:"numeric"}),oe=(u,Z)=>Rr(new Date(u+"T00:00"),n,-Z)[0],Ce=u=>M==="all"||u.category_id===Number(M),V=[C,oe(C,1),oe(C,2)],v=V.map(u=>{const[Z,Fe]=Rr(new Date(u+"T00:00"),n);return s.filter(Me=>Me.date>=Z&&Me.date<=Fe&&Ce(Me)).reduce((Me,je)=>Me+je.amount,0)}),[D,P,G]=v,ne=P>0?Math.round((D-P)/P*100):D>0?100:0,ge=ne>0?wc:ne<0?kc:tm,O=ne>0?"#C2536B":ne<0?"#4C9A6B":"#9A968C",F=g.useMemo(()=>{const[u,Z]=Rr(new Date(C+"T00:00"),n),Fe={};return s.filter(Me=>Me.date>=u&&Me.date<=Z&&Ce(Me)).forEach(Me=>{Fe[Me.category_id]=(Fe[Me.category_id]||0)+Me.amount}),Object.entries(Fe).map(([Me,je])=>({cat:re[Me],amount:je})).filter(Me=>Me.cat).sort((Me,je)=>je.amount-Me.amount)},[s,C,M,re,n]);let k=0;const ee=F.map(u=>{const Z=D>0?k/D*100:0;k+=u.amount;const Fe=D>0?k/D*100:0;return{...u,start:Z,end:Fe,pct:D>0?u.amount/D*100:0}}),me=ee.length?`conic-gradient(${ee.map(u=>`${u.cat.color} ${u.start}% ${u.end}%`).join(", ")})`:"var(--surface-2)",Te=g.useMemo(()=>{const u=x,Z=(u.getDay()+6)%7,Fe=new Date(u.getFullYear(),u.getMonth()+1,0).getDate(),Me={};s.forEach(_e=>{_e.date.slice(0,7)===fd(u).slice(0,7)&&(Me[_e.date]=(Me[_e.date]||0)+_e.amount)});const je=[];for(let _e=0;_e<Z;_e++)je.push(null);for(let _e=1;_e<=Fe;_e++){const St=fd(new Date(u.getFullYear(),u.getMonth(),_e));je.push({date:St,day:_e,total:Me[St]||0})}return je},[x,s]),ct=u=>f(Z=>new Date(Z.getFullYear(),Z.getMonth()+u,1)),Le=x.toLocaleDateString("en-US",{month:"long",year:"numeric"}),ot=u=>S({cat:u,amount:"",note:""}),et=async()=>{const u=parseFloat(R.amount);!u||u<=0||(await $.createExpenseLog({category_id:R.cat.id,amount:u,note:R.note.trim(),date:c}),S(null),B())},Qe=()=>A({id:null,name:"",icon:"ShoppingBag",color:ba[o.length%ba.length]}),tt=u=>A({id:u.id,name:u.name,icon:u.icon,color:u.color}),gt=async()=>{const u=y.name.trim();u&&(y.id?await $.updateExpenseCategory(y.id,{name:u,icon:y.icon,color:y.color}):await $.createExpenseCategory({name:u,icon:y.icon,color:y.color}),A(null),B())},Yr=async u=>{window.confirm(`Delete "${u.name}"? Its logged expenses will stay, but you won't be able to add new ones to it.`)&&(await $.deleteExpenseCategory(u.id),B())},Ut=new Date(c+"T00:00").toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"});let Rt=0;const er=se.map(u=>{const Z=N>0?Rt/N*100:0;Rt+=u.amount;const Fe=N>0?Rt/N*100:0;return{...u,start:Z,end:Fe,pct:N>0?u.amount/N*100:0}}),yr=er.length?`conic-gradient(${er.map(u=>`${u.cat.color} ${u.start}% ${u.end}%`).join(", ")})`:"var(--surface-2)";return r.jsxs("div",{style:U.page,children:[r.jsx("div",{style:U.head,children:r.jsxs("div",{children:[r.jsx("div",{style:U.eyebrow,children:"Anvil · Expenses"}),r.jsx("h1",{style:U.h1,children:"Expenses"}),r.jsx("div",{style:U.subhead,children:"Log day-to-day spending by category and see where it goes."})]})}),r.jsxs("div",{style:U.totalCard,children:[r.jsxs("div",{style:U.totalLeft,children:[r.jsx(sm,{size:20,color:pr}),r.jsxs("div",{children:[r.jsxs("div",{style:U.totalLabel,children:["Total spent ",b==="day"?"today":b==="month"?"this month":b==="year"?"this year":"all time"]}),r.jsx("div",{style:U.totalVal,children:ue(N)})]})]}),r.jsx("div",{style:U.scopeRow,children:[["day","Day"],["month","Month"],["year","Year"],["all","All"]].map(([u,Z])=>r.jsx("button",{onClick:()=>E(u),style:{...U.scopeBtn,...b===u?U.scopeBtnOn:{}},children:Z},u))})]}),r.jsxs("div",{style:{...U.cols,gridTemplateColumns:e?"1fr":"320px 1fr"},children:[r.jsxs("div",{style:U.card,children:[r.jsxs("div",{style:U.calHead,children:[r.jsx("button",{onClick:()=>ct(-1),style:U.calNav,children:r.jsx(fn,{size:16})}),r.jsx("span",{style:U.calTitle,children:Le}),r.jsx("button",{onClick:()=>ct(1),style:U.calNav,children:r.jsx(Ur,{size:16})})]}),r.jsxs("div",{style:U.calGrid,children:[["M","T","W","T","F","S","S"].map((u,Z)=>r.jsx("div",{style:U.calDow,children:u},Z)),Te.map((u,Z)=>u===null?r.jsx("div",{},Z):r.jsxs("button",{onClick:()=>h(u.date),style:{...U.calCell,...u.date===c?U.calCellOn:{},...u.date===Bu&&u.date!==c?U.calCellToday:{}},children:[r.jsx("span",{children:u.day}),u.total>0&&r.jsx("span",{style:{...U.calDot,background:u.date===c?"#fff":pr}})]},u.date))]})]}),r.jsxs("div",{children:[r.jsxs("div",{style:U.card,children:[r.jsxs("div",{style:U.cardTitleRow,children:[r.jsxs("div",{children:[r.jsx("div",{style:U.cardTitle,children:Ut}),r.jsx("div",{style:U.cardSub,children:"Tap a category to log an expense for this day."})]}),r.jsx("div",{style:U.dayTotal,children:ue(ye)})]}),r.jsxs("div",{style:U.iconGrid,children:[o.map(u=>r.jsxs("div",{style:U.iconCell,children:[r.jsx("button",{onClick:()=>ot(u),style:{...U.iconBtn,background:u.color+"1A",color:u.color,borderColor:u.color+"44"},children:r.jsx(Kr,{name:u.icon,size:22})}),r.jsx("span",{style:U.iconLabel,children:u.name})]},u.id)),r.jsxs("div",{style:U.iconCell,children:[r.jsx("button",{onClick:Qe,style:U.iconBtnAdd,children:r.jsx(Ke,{size:20})}),r.jsx("span",{style:U.iconLabel,children:"Add"})]})]}),r.jsxs("button",{onClick:()=>p(!0),style:U.manageLink,children:[r.jsx(bt,{size:11})," Customize categories"]}),de.length>0&&r.jsx("div",{style:U.logList,children:de.map(u=>{const Z=re[u.category_id];return r.jsxs("div",{style:U.logRow,children:[r.jsx("span",{style:{...U.logIcon,background:((Z==null?void 0:Z.color)||"#9A968C")+"1A",color:(Z==null?void 0:Z.color)||"#9A968C"},children:r.jsx(Kr,{name:Z==null?void 0:Z.icon,size:14})}),r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("div",{style:U.logCat,children:(Z==null?void 0:Z.name)||"Deleted category"}),u.note&&r.jsx("div",{style:U.logNote,children:u.note})]}),r.jsx("span",{style:U.logAmt,children:ue(u.amount)}),r.jsx("button",{onClick:()=>W(u.id,(Z==null?void 0:Z.name)||"Expense"),style:U.delBtn,children:r.jsx(ze,{size:14})})]},u.id)})})]}),r.jsxs("div",{style:U.card,children:[r.jsx("div",{style:U.cardTitleRow,children:r.jsxs("div",{children:[r.jsx("div",{style:U.cardTitle,children:"Spending by category"}),r.jsxs("div",{style:U.cardSub,children:[b==="day"?"Today":b==="month"?"This month":b==="year"?"This year":"All time"," — percentage & amount"]})]})}),se.length===0?r.jsx("div",{style:U.muted,children:"No expenses logged for this period yet."}):r.jsxs("div",{style:U.pieWrap,children:[r.jsxs("div",{style:U.pieChart,children:[r.jsx("div",{style:{...U.pieDisc,background:yr}}),r.jsxs("div",{style:U.pieHole,children:[r.jsx("span",{style:U.pieHoleVal,children:ue(N)}),r.jsx("span",{style:U.pieHoleLbl,children:"total"})]})]}),r.jsx("div",{style:U.pieLegend,children:er.map(u=>r.jsxs("div",{style:U.legendRow,children:[r.jsx("span",{style:{...U.dot,background:u.cat.color}}),r.jsx(Kr,{name:u.cat.icon,size:13,style:{color:u.cat.color,flexShrink:0}}),r.jsx("span",{style:U.legendName,children:u.cat.name}),r.jsxs("span",{style:U.legendPct,children:[Math.round(u.pct),"%"]}),r.jsx("span",{style:U.legendAmt,children:ue(u.amount)})]},u.cat.id))})]})]}),r.jsxs("div",{style:U.card,children:[r.jsx("div",{style:U.cardTitleRow,children:r.jsxs("div",{children:[r.jsx("div",{style:U.cardTitle,children:"Monthly trend"}),r.jsx("div",{style:U.cardSub,children:"Compare a month against the previous two"})]})}),r.jsx("div",{style:U.tagRow,children:le.map(u=>r.jsxs("button",{onClick:()=>z(u),style:{...U.tagChip,...C===u?U.tagChipOn:{}},children:[r.jsx(ad,{size:11})," ",T(u)]},u))}),r.jsxs("div",{style:{...U.tagRow,marginTop:8},children:[r.jsxs("button",{onClick:()=>_("all"),style:{...U.tagChip,...M==="all"?U.tagChipOn:{}},children:[r.jsx(ad,{size:11})," All categories"]}),o.map(u=>r.jsxs("button",{onClick:()=>_(String(u.id)),style:{...U.tagChip,...M===String(u.id)?U.tagChipOn:{}},children:[r.jsx(Kr,{name:u.icon,size:11})," ",u.name]},u.id))]}),r.jsxs("div",{style:{...U.trend3,marginTop:16},children:[r.jsxs("div",{style:U.trendCol,children:[r.jsx("div",{style:U.trendVal,children:ue(D)}),r.jsx("div",{style:U.trendLbl,children:T(V[0])})]}),r.jsxs("div",{style:U.trendCol,children:[r.jsx("div",{style:{...U.trendVal,color:"var(--text-2)"},children:ue(P)}),r.jsx("div",{style:U.trendLbl,children:T(V[1])})]}),r.jsxs("div",{style:U.trendCol,children:[r.jsx("div",{style:{...U.trendVal,color:"var(--text-3)"},children:ue(G)}),r.jsx("div",{style:U.trendLbl,children:T(V[2])})]})]}),r.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:14},children:r.jsxs("div",{style:{...U.trendBadge,color:O,background:O+"1A"},children:[r.jsx(ge,{size:15})," ",ne>0?"+":"",ne,"% vs ",T(V[1])]})}),r.jsx(fv,{items:[{label:T(V[0]),value:D,color:pr},{label:T(V[1]),value:P,color:"var(--text-3)"},{label:T(V[2]),value:G,color:"var(--text-3)"}],money:ue}),r.jsx("div",{style:U.trendDivider}),r.jsxs("div",{style:U.cardSub,children:["Category split for ",T(C)]}),F.length===0?r.jsx("div",{style:U.muted,children:"No expenses logged for this month yet."}):r.jsxs("div",{style:{...U.pieWrap,marginTop:10},children:[r.jsxs("div",{style:U.pieChart,children:[r.jsx("div",{style:{...U.pieDisc,background:me}}),r.jsxs("div",{style:U.pieHole,children:[r.jsx("span",{style:U.pieHoleVal,children:ue(D)}),r.jsx("span",{style:U.pieHoleLbl,children:"total"})]})]}),r.jsx("div",{style:U.pieLegend,children:ee.map(u=>r.jsxs("div",{style:U.legendRow,children:[r.jsx("span",{style:{...U.dot,background:u.cat.color}}),r.jsx(Kr,{name:u.cat.icon,size:13,style:{color:u.cat.color,flexShrink:0}}),r.jsx("span",{style:U.legendName,children:u.cat.name}),r.jsxs("span",{style:U.legendPct,children:[Math.round(u.pct),"%"]}),r.jsx("span",{style:U.legendAmt,children:ue(u.amount)})]},u.cat.id))})]})]})]})]}),R&&r.jsx("div",{style:U.overlay,onClick:()=>S(null),children:r.jsxs("div",{style:U.modal,onClick:u=>u.stopPropagation(),children:[r.jsxs("div",{style:U.modalHead,children:[r.jsxs("span",{style:{...U.modalTitle,display:"flex",alignItems:"center",gap:8},children:[r.jsx("span",{style:{...U.iconBadge,background:R.cat.color+"1A",color:R.cat.color},children:r.jsx(Kr,{name:R.cat.icon,size:16})}),R.cat.name]}),r.jsx("button",{onClick:()=>S(null),style:U.iconBtnPlain,children:r.jsx(ze,{size:16})})]}),r.jsx("label",{style:U.label,children:"Amount *"}),r.jsx("input",{autoFocus:!0,type:"number",inputMode:"decimal",value:R.amount,onChange:u=>S(Z=>({...Z,amount:u.target.value})),onKeyDown:u=>u.key==="Enter"&&et(),placeholder:"0",style:U.input}),r.jsx("label",{style:U.label,children:"Note (optional)"}),r.jsx("input",{value:R.note,onChange:u=>S(Z=>({...Z,note:u.target.value})),onKeyDown:u=>u.key==="Enter"&&et(),placeholder:"What was it for?",style:U.input}),r.jsxs("div",{style:U.modalActions,children:[r.jsx("button",{onClick:()=>S(null),style:U.cancelBtn,children:"Cancel"}),r.jsxs("button",{onClick:et,disabled:!R.amount,style:{...U.saveBtn,...R.amount?{}:{opacity:.5,cursor:"not-allowed"}},children:[r.jsx(We,{size:15})," Add"]})]})]})}),m&&r.jsx("div",{style:U.overlay,onClick:()=>p(!1),children:r.jsxs("div",{style:U.modal,onClick:u=>u.stopPropagation(),children:[r.jsxs("div",{style:U.modalHead,children:[r.jsx("span",{style:U.modalTitle,children:"Customize categories"}),r.jsx("button",{onClick:()=>p(!1),style:U.iconBtnPlain,children:r.jsx(ze,{size:16})})]}),r.jsx("div",{style:U.manageList,children:o.map(u=>r.jsxs("div",{style:U.manageRow,children:[r.jsx("span",{style:{...U.iconBadge,background:u.color+"1A",color:u.color},children:r.jsx(Kr,{name:u.icon,size:15})}),r.jsx("span",{style:{flex:1,fontSize:13.5,fontWeight:600},children:u.name}),r.jsx("button",{onClick:()=>tt(u),style:U.delBtn,children:r.jsx(bt,{size:13})}),r.jsx("button",{onClick:()=>Yr(u),style:U.delBtn,children:r.jsx(ze,{size:14})})]},u.id))}),r.jsxs("button",{onClick:Qe,style:U.addColInline,children:[r.jsx(Ke,{size:13})," Add category"]})]})}),y&&r.jsx("div",{style:U.overlay,onClick:()=>A(null),children:r.jsxs("div",{style:U.modal,onClick:u=>u.stopPropagation(),children:[r.jsxs("div",{style:U.modalHead,children:[r.jsx("span",{style:U.modalTitle,children:y.id?"Edit category":"New category"}),r.jsx("button",{onClick:()=>A(null),style:U.iconBtnPlain,children:r.jsx(ze,{size:16})})]}),r.jsx("label",{style:U.label,children:"Name *"}),r.jsx("input",{autoFocus:!0,value:y.name,onChange:u=>A(Z=>({...Z,name:u.target.value})),onKeyDown:u=>u.key==="Enter"&&gt(),placeholder:"e.g. Vegetables, Petrol…",style:U.input}),r.jsx("label",{style:U.label,children:"Color"}),r.jsx("div",{style:U.colorRow,children:ba.map(u=>r.jsx("button",{onClick:()=>A(Z=>({...Z,color:u})),style:{...U.colorSwatch,background:u,...y.color===u?U.colorSwatchOn:{}}},u))}),r.jsx("label",{style:U.label,children:"Icon"}),r.jsx("div",{style:U.iconPickGrid,children:Object.keys(Im).map(u=>r.jsx("button",{onClick:()=>A(Z=>({...Z,icon:u})),style:{...U.iconPick,...y.icon===u?{background:y.color+"22",borderColor:y.color,color:y.color}:{}},children:r.jsx(Kr,{name:u,size:17})},u))}),r.jsxs("div",{style:U.modalActions,children:[r.jsx("button",{onClick:()=>A(null),style:U.cancelBtn,children:"Cancel"}),r.jsxs("button",{onClick:gt,disabled:!y.name.trim(),style:{...U.saveBtn,...y.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[r.jsx(We,{size:15})," ",y.id?"Save":"Create"]})]})]})}),!a&&r.jsx("div",{style:U.muted,children:"Loading…"}),r.jsx(Gt,{toasts:j,onUndo:J,onDismiss:I})]})}function fv({items:e,money:t}){const n=Math.max(1,...e.map(o=>o.value));return r.jsx("div",{style:U.tbWrap,children:e.map((o,i)=>r.jsxs("div",{style:U.tbRow,children:[r.jsx("div",{style:U.tbLbl,children:o.label}),r.jsx("div",{style:U.tbTrack,children:r.jsx("div",{style:{...U.tbBar,width:`${o.value/n*100}%`,background:o.color}})}),r.jsx("div",{style:U.tbVal,children:t(o.value)})]},i))})}const U={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},totalCard:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:14,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:16,padding:"16px 18px",marginBottom:16,flexWrap:"wrap"},totalLeft:{display:"flex",alignItems:"center",gap:12},totalLabel:{fontSize:12,color:"var(--text-3)",fontWeight:600},totalVal:{fontSize:24,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:2},scopeRow:{display:"flex",gap:6},scopeBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 13px",borderRadius:8,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},scopeBtnOn:{background:pr,color:"#fff",borderColor:pr},cols:{display:"grid",gap:16,alignItems:"start"},card:{background:"var(--surface)",borderRadius:16,padding:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)",marginBottom:16},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14,gap:10},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardSub:{fontSize:11.5,color:"var(--text-3)",marginTop:2},dayTotal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap",color:pr},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"14px 0"},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},calNav:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4},calDow:{fontSize:10.5,fontWeight:700,color:"var(--text-3)",textAlign:"center",padding:"4px 0"},calCell:{position:"relative",border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",borderRadius:8,aspectRatio:"1",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},calCellOn:{background:pr,color:"#fff",borderColor:pr,fontWeight:700},calCellToday:{borderColor:pr,fontWeight:700},calDot:{position:"absolute",bottom:3,width:4,height:4,borderRadius:"50%"},iconGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(64px, 1fr))",gap:10,marginTop:4},iconCell:{display:"flex",flexDirection:"column",alignItems:"center",gap:5},iconBtn:{width:52,height:52,borderRadius:14,border:"1px solid",display:"grid",placeItems:"center",cursor:"pointer"},iconBtnAdd:{width:52,height:52,borderRadius:14,border:"1px dashed var(--border)",background:"none",color:"var(--text-3)",display:"grid",placeItems:"center",cursor:"pointer"},iconLabel:{fontSize:10.5,fontWeight:600,color:"var(--text-2)",textAlign:"center",maxWidth:66,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},manageLink:{display:"inline-flex",alignItems:"center",gap:5,border:"none",background:"none",color:"var(--text-3)",fontSize:11.5,fontWeight:600,cursor:"pointer",marginTop:12,padding:0,fontFamily:"inherit"},logList:{marginTop:14,paddingTop:14,borderTop:"1px solid var(--border)",display:"flex",flexDirection:"column",gap:8},logRow:{display:"flex",alignItems:"center",gap:10},logIcon:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},logCat:{fontSize:13,fontWeight:600},logNote:{fontSize:11,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},logAmt:{fontSize:13.5,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},delBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",flexShrink:0},pieWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap"},pieChart:{position:"relative",width:132,height:132,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:80,height:80,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:14,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:7},dot:{width:9,height:9,borderRadius:3,flexShrink:0},legendName:{flex:1,fontSize:12.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},legendPct:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,width:34,textAlign:"right"},legendAmt:{fontSize:12.5,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:64,textAlign:"right"},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtnPlain:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},iconBadge:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)",marginBottom:8},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},manageList:{display:"flex",flexDirection:"column",gap:6,marginBottom:10,maxHeight:320,overflowY:"auto"},manageRow:{display:"flex",alignItems:"center",gap:10,padding:"6px 2px"},addColInline:{display:"inline-flex",alignItems:"center",gap:5,border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"9px 12px",borderRadius:8,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit",width:"100%",justifyContent:"center"},colorRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:4},colorSwatch:{width:26,height:26,borderRadius:"50%",border:"2px solid transparent",cursor:"pointer",padding:0},colorSwatchOn:{border:"2px solid var(--text)",boxShadow:"0 0 0 2px var(--surface)"},iconPickGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6,marginBottom:4},iconPick:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",borderRadius:9,height:36,display:"grid",placeItems:"center",cursor:"pointer"},tagRow:{display:"flex",gap:6,flexWrap:"wrap"},tagChip:{display:"inline-flex",alignItems:"center",gap:4,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:20,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tagChipOn:{background:pr,color:"#fff",borderColor:pr},trendDivider:{height:1,background:"var(--border)",margin:"16px 0 12px"},trend3:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12,gap:8},trendCol:{textAlign:"center",flex:1},trendVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},trendLbl:{fontSize:11,color:"var(--text-3)",marginTop:2},trendBadge:{display:"inline-flex",alignItems:"center",gap:4,fontSize:13,fontWeight:800,padding:"6px 12px",borderRadius:20,width:"fit-content"},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:78,fontSize:11,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},tbTrack:{flex:1,height:14,background:"#F2F0EA",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:64,fontSize:11,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"}},xd=[{id:"sandstone",name:"Sandstone",description:"Warm editorial light — the original Anvil look.",dark:!1,swatch:["#F7F6F3","#4C9A6B","#26241F"],vars:{"--bg":"#F7F6F3","--surface":"#FFFFFF","--surface-2":"#FAFAF8","--hover":"#F2F1EC","--border":"#ECEAE3","--text":"#26241F","--text-2":"#6B675E","--text-3":"#9A968C","--accent":"#4C9A6B","--accent-strong":"#26241F","--accent-2":"#3A352C"}},{id:"midnight",name:"Midnight",description:"Deep low-glare dark mode for night owls and focus.",dark:!0,swatch:["#161513","#6FB58C","#ECEAE3"],vars:{"--bg":"#161513","--surface":"#211F1C","--surface-2":"#1B1A17","--hover":"#2B2924","--border":"#34312B","--text":"#ECEAE3","--text-2":"#B6B1A6","--text-3":"#8A857A","--accent":"#6FB58C","--accent-strong":"#2E6F4B","--accent-2":"#245C3E"}},{id:"blossom",name:"Blossom",description:"Soft rose & blush — gentle, warm, and feminine.",dark:!1,swatch:["#FFF5F8","#E0608E","#B23A6B"],vars:{"--bg":"#FFF5F8","--surface":"#FFFFFF","--surface-2":"#FFF0F4","--hover":"#FDE7EE","--border":"#F6D9E2","--text":"#3D2230","--text-2":"#7A5466","--text-3":"#B08799","--accent":"#E0608E","--accent-strong":"#B23A6B","--accent-2":"#9C2F5C"}},{id:"tide",name:"Tide",description:"Calm professional blues — clean and focused.",dark:!1,swatch:["#F1F6FA","#2E86C1","#1C4E73"],vars:{"--bg":"#F1F6FA","--surface":"#FFFFFF","--surface-2":"#ECF3F9","--hover":"#E2EEF6","--border":"#D5E3EE","--text":"#13283A","--text-2":"#4A6275","--text-3":"#8AA0B0","--accent":"#2E86C1","--accent-strong":"#1C4E73","--accent-2":"#163E5C"}},{id:"velocity",name:"Velocity",description:"High-energy sport — crisp slate with electric orange.",dark:!1,swatch:["#F4F5F7","#F4511E","#1F2A37"],vars:{"--bg":"#F4F5F7","--surface":"#FFFFFF","--surface-2":"#EEF0F3","--hover":"#E7EAEE","--border":"#DCE0E6","--text":"#18202B","--text-2":"#515B68","--text-3":"#8B95A1","--accent":"#F4511E","--accent-strong":"#1F2A37","--accent-2":"#16202B"}},{id:"evergreen",name:"Evergreen",description:"Earthy forest greens — grounded and natural.",dark:!1,swatch:["#F2F6F1","#3E8E52","#2A4A30"],vars:{"--bg":"#F2F6F1","--surface":"#FFFFFF","--surface-2":"#ECF2EA","--hover":"#E4EEE2","--border":"#D7E4D3","--text":"#1E2B20","--text-2":"#4F6151","--text-3":"#8AA08C","--accent":"#3E8E52","--accent-strong":"#2A4A30","--accent-2":"#213B26"}},{id:"amethyst",name:"Amethyst",description:"Premium purple & plum — elegant and refined.",dark:!1,swatch:["#F6F4FB","#7A4FE0","#3A2D5C"],vars:{"--bg":"#F6F4FB","--surface":"#FFFFFF","--surface-2":"#F1EDF9","--hover":"#EAE3F6","--border":"#DFD6F0","--text":"#241B36","--text-2":"#5A4E72","--text-3":"#9588AE","--accent":"#7A4FE0","--accent-strong":"#3A2D5C","--accent-2":"#2E2349"}}],Du="sandstone",zm="anvil_theme",xv=e=>xd.find(t=>t.id===e)||xd[0];function Tm(){try{return localStorage.getItem(zm)||Du}catch{return Du}}function Jo(e,t=!0){const n=xv(e),o=document.documentElement;Object.entries(n.vars).forEach(([s,l])=>o.style.setProperty(s,l)),o.style.colorScheme=n.dark?"dark":"light",o.setAttribute("data-theme",n.id);const i=document.querySelector('meta[name="theme-color"]');if(i&&i.setAttribute("content",n.vars["--surface"]),t)try{localStorage.setItem(zm,n.id)}catch{}return n.id}const yv=e=>e%10===1&&e!==11?"st":e%10===2&&e!==12?"nd":e%10===3&&e!==13?"rd":"th";function vv(e=560){const[t,n]=g.useState(()=>window.innerWidth<=e);return g.useEffect(()=>{const o=()=>n(window.innerWidth<=e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),t}function kv({screens:e,order:t,hidden:n,themeId:o,currency:i,monthStartDay:s,ticker:l,defaultScreen:a,onSetDefault:d,onSaveSidebar:c,onPreviewTheme:h,onCommitTheme:x,onSelectCurrency:f,onSelectMonthStartDay:R,onSaveTicker:S,onClose:y}){const[A,m]=g.useState("sidebar"),[p,b]=g.useState(()=>t.map(O=>({id:O,hidden:n.includes(O)}))),[E,C]=g.useState(o),[z,M]=g.useState(""),[_,B]=g.useState(!1),W=vv(),[j,J]=g.useState(!!(l!=null&&l.enabled)),[I,re]=g.useState(()=>{const O=Array.isArray(l==null?void 0:l.statements)?l.statements.slice(0,5):[];return O.length?O:[""]}),[ue,de]=g.useState((l==null?void 0:l.speed)??60),[ye,q]=g.useState((l==null?void 0:l.delay)??3),[N,se]=g.useState(!1),Y=(O,F)=>re(k=>k.map((ee,me)=>me===O?F:ee)),le=()=>re(O=>O.length<5?[...O,""]:O),T=O=>re(F=>F.length>1?F.filter((k,ee)=>ee!==O):F),oe=()=>{const O=I.map(F=>F.trim()).filter(Boolean).slice(0,5);S({enabled:j,statements:O,speed:Number(ue),delay:Number(ye)}),se(!0),setTimeout(()=>se(!1),1500)};g.useEffect(()=>{$.getSetting("golden_music").then(O=>M((O==null?void 0:O.value)||"")).catch(()=>{})},[]);const Ce=()=>{$.setSetting("golden_music",z.trim()).then(()=>{B(!0),setTimeout(()=>B(!1),1500)}).catch(()=>{})},V=O=>{C(O),h(O)},v=p.filter(O=>!O.hidden).length,D=(O,F)=>{const k=O+F;if(k<0||k>=p.length)return;const ee=[...p];[ee[O],ee[k]]=[ee[k],ee[O]],b(ee)},P=O=>{const F=p[O];if(!F.hidden&&v<=1)return;const k=[...p];k[O]={...F,hidden:!F.hidden},b(k)},G=()=>{c(p.map(O=>O.id),p.filter(O=>O.hidden).map(O=>O.id))},ne=W?{...ke.overlay,padding:0}:ke.overlay,ge=W?{...ke.modal,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"100%",borderRadius:0,border:"none"}:ke.modal;return r.jsx("div",{style:ne,onClick:y,children:r.jsxs("div",{style:ge,onClick:O=>O.stopPropagation(),children:[r.jsxs("div",{style:ke.head,children:[r.jsx("div",{style:ke.title,children:"Settings"}),r.jsx("button",{onClick:y,style:ke.closeBtn,children:r.jsx(ze,{size:18})})]}),r.jsxs("div",{style:ke.tabs,children:[r.jsxs("button",{onClick:()=>m("sidebar"),style:{...ke.tab,...A==="sidebar"?ke.tabOn:{}},children:[r.jsx($x,{size:15})," Configure sidebar"]}),r.jsxs("button",{onClick:()=>m("themes"),style:{...ke.tab,...A==="themes"?ke.tabOn:{}},children:[r.jsx(Hx,{size:15})," Themes"]}),r.jsxs("button",{onClick:()=>m("currency"),style:{...ke.tab,...A==="currency"?ke.tabOn:{}},children:[r.jsx(zx,{size:15})," Currency"]}),r.jsxs("button",{onClick:()=>m("music"),style:{...ke.tab,...A==="music"?ke.tabOn:{}},children:[r.jsx(fc,{size:15})," Music"]}),r.jsxs("button",{onClick:()=>m("reminders"),style:{...ke.tab,...A==="reminders"?ke.tabOn:{}},children:[r.jsx(em,{size:15})," Reminders"]})]}),r.jsx("div",{style:ke.body,children:A==="sidebar"?r.jsxs(r.Fragment,{children:[r.jsxs("p",{style:ke.hint,children:["Reorder with the arrows, hide ones you don't use, and tap ",r.jsx(Ti,{size:11,style:{verticalAlign:"-1px"}})," to set the screen that opens on launch."]}),r.jsx("div",{style:ke.list,children:p.map((O,F)=>{const k=e[O.id],ee=k.icon,me=a===O.id;return r.jsxs("div",{style:{...ke.row,opacity:O.hidden?.5:1,...me?{borderColor:"var(--accent)"}:{}},children:[r.jsx("span",{style:ke.rowNum,children:F+1}),r.jsx(ee,{size:16}),r.jsxs("span",{style:ke.rowLabel,children:[k.label,me&&r.jsx("span",{style:ke.defaultTag,children:"default"})]}),r.jsx("button",{onClick:()=>d(O.id),title:me?"Opens on launch":"Set as default",style:{...ke.iconBtn,...me?{color:"var(--accent)"}:{}},children:r.jsx(Ti,{size:15})}),r.jsx("button",{onClick:()=>P(F),title:O.hidden?"Show":"Hide",style:{...ke.iconBtn,...O.hidden?{}:{color:"var(--accent)"}},children:O.hidden?r.jsx(ld,{size:15}):r.jsx(Xs,{size:15})}),r.jsx("button",{onClick:()=>D(F,-1),disabled:F===0,style:{...ke.iconBtn,opacity:F===0?.3:1},children:r.jsx(Xb,{size:15})}),r.jsx("button",{onClick:()=>D(F,1),disabled:F===p.length-1,style:{...ke.iconBtn,opacity:F===p.length-1?.3:1},children:r.jsx(Wi,{size:15})})]},O.id)})}),r.jsxs("button",{onClick:G,style:ke.saveBtn,children:[r.jsx(We,{size:15})," Save sidebar"]})]}):A==="currency"?r.jsxs(r.Fragment,{children:[r.jsx("p",{style:ke.hint,children:"Choose the currency used across Wallet and Worth. Applies instantly."}),r.jsx("div",{style:ke.list,children:pd.map(O=>{const F=O.code===i;return r.jsxs("button",{onClick:()=>f(O.code),style:{...ke.row,cursor:"pointer",textAlign:"left",width:"100%",...F?{borderColor:"var(--accent)"}:{}},children:[r.jsx("span",{style:ke.curSymbol,children:O.symbol}),r.jsxs("span",{style:ke.rowLabel,children:[O.label," ",r.jsx("span",{style:ke.curCode,children:O.code})]}),F&&r.jsx("span",{style:ke.themeCheck,children:r.jsx(We,{size:13})})]},O.code)})}),r.jsx("div",{style:ke.subDivider}),r.jsx("div",{style:ke.fieldLbl,children:"Month starts on"}),r.jsx("p",{style:ke.hint,children:'If your salary lands on the 25th, set this to 25 — Wallet and Expenses will treat each "month" as running 25th to 24th instead of calendar month.'}),r.jsx("select",{value:s,onChange:O=>R(Number(O.target.value)),style:ke.musicInput,children:Array.from({length:28},(O,F)=>F+1).map(O=>r.jsx("option",{value:O,children:O===1?"1st (calendar month)":`${O}${yv(O)}`},O))})]}):A==="music"?r.jsxs(r.Fragment,{children:[r.jsxs("p",{style:ke.hint,children:["Paste a YouTube link to play softly while you write in the ",r.jsx("b",{children:"Golden Book"}),". It plays only on that screen (audio only)."]}),r.jsx("input",{value:z,onChange:O=>M(O.target.value),placeholder:"https://youtube.com/watch?v=…",style:ke.musicInput}),r.jsxs("button",{onClick:Ce,style:ke.saveBtn,children:[r.jsx(We,{size:15})," ",_?"Saved":"Save music"]})]}):A==="reminders"?r.jsxs(r.Fragment,{children:[r.jsx("p",{style:ke.hint,children:"Up to 5 reminders scroll across the top of every screen — a gentle nudge toward your goals."}),r.jsxs("button",{onClick:()=>J(O=>!O),style:{...ke.row,cursor:"pointer",width:"100%",justifyContent:"space-between",...j?{borderColor:"var(--accent)"}:{}},children:[r.jsx("span",{style:ke.rowLabel,children:"Show reminder banner"}),r.jsx("span",{style:{...ke.switch,...j?ke.switchOn:{}},children:j?"On":"Off"})]}),r.jsxs("div",{style:{marginTop:14},children:[r.jsxs("div",{style:ke.fieldLbl,children:["Reminders (",I.filter(O=>O.trim()).length,"/5)"]}),I.map((O,F)=>r.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[r.jsx("input",{value:O,onChange:k=>Y(F,k.target.value),maxLength:120,placeholder:`Reminder ${F+1}`,style:{...ke.musicInput,marginBottom:0}}),r.jsx("button",{onClick:()=>T(F),style:ke.iconBtn,title:"Remove",children:r.jsx(ze,{size:15})})]},F)),I.length<5&&r.jsxs("button",{onClick:le,style:ke.addRowBtn,children:[r.jsx(Ke,{size:14})," Add reminder"]})]}),r.jsxs("div",{style:{marginTop:16},children:[r.jsxs("div",{style:ke.sliderHead,children:[r.jsx("span",{style:ke.fieldLbl,children:"Scroll speed"}),r.jsxs("span",{style:ke.sliderVal,children:[ue," px/s"]})]}),r.jsx("input",{type:"range",min:20,max:200,step:5,value:ue,onChange:O=>de(O.target.value),style:ke.range})]}),r.jsxs("div",{style:{marginTop:12},children:[r.jsxs("div",{style:ke.sliderHead,children:[r.jsx("span",{style:ke.fieldLbl,children:"Delay between reminders"}),r.jsxs("span",{style:ke.sliderVal,children:[ye,"s"]})]}),r.jsx("input",{type:"range",min:0,max:15,step:1,value:ye,onChange:O=>q(O.target.value),style:ke.range})]}),r.jsxs("button",{onClick:oe,style:{...ke.saveBtn,marginTop:16},children:[r.jsx(We,{size:15})," ",N?"Saved":"Save reminders"]})]}):r.jsxs(r.Fragment,{children:[r.jsxs("p",{style:ke.hint,children:["Tap a theme to preview it live, then hit ",r.jsx("b",{children:"Apply theme"})," to keep it."]}),r.jsx("div",{style:ke.themeGrid,children:xd.map(O=>{const F=O.id===E;return r.jsxs("button",{onClick:()=>V(O.id),style:{...ke.themeCard,...F?ke.themeCardOn:{}},children:[r.jsxs("div",{style:ke.swatchRow,children:[O.swatch.map((k,ee)=>r.jsx("span",{style:{...ke.swatch,background:k}},ee)),F&&r.jsx("span",{style:ke.themeCheck,children:r.jsx(We,{size:13})})]}),r.jsxs("div",{style:ke.themeName,children:[O.name,O.dark?r.jsx("span",{style:ke.darkTag,children:"Dark"}):null]}),r.jsx("div",{style:ke.themeDesc,children:O.description})]},O.id)})}),r.jsxs("button",{onClick:()=>x(E),disabled:E===o,style:{...ke.saveBtn,...E===o?ke.saveBtnDisabled:{}},children:[r.jsx(We,{size:15})," ",E===o?"Theme applied":"Apply theme"]})]})})]})})}const ke={overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",color:"var(--text)",borderRadius:16,width:460,maxWidth:"100%",maxHeight:"88vh",display:"flex",flexDirection:"column",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)",overflow:"hidden"},head:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 18px",borderBottom:"1px solid var(--border)",flexShrink:0},title:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},tabs:{display:"flex",flexWrap:"wrap",gap:6,padding:"12px 18px 0",flexShrink:0},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"transparent"},body:{padding:"16px 18px 20px",overflowY:"auto",overflowX:"hidden",flex:1,minHeight:0},hint:{fontSize:12.5,color:"var(--text-3)",lineHeight:1.5,margin:"0 0 14px"},list:{display:"flex",flexDirection:"column",gap:6},row:{display:"flex",alignItems:"center",gap:10,padding:"9px 11px",background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:9},rowNum:{fontSize:11,fontWeight:700,color:"var(--text-3)",width:16,textAlign:"center"},rowLabel:{flex:1,fontSize:13.5,fontWeight:500,display:"flex",alignItems:"center",gap:7},defaultTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--accent)",background:"color-mix(in srgb, var(--accent) 14%, transparent)",padding:"1px 6px",borderRadius:6},curSymbol:{width:22,textAlign:"center",fontSize:15,fontWeight:700,color:"var(--text)"},curCode:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginLeft:4},iconBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},saveBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:7,width:"100%",marginTop:16,border:"none",background:"var(--accent)",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer"},saveBtnDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"default"},musicInput:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",marginBottom:12},switch:{fontSize:12,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:20,padding:"3px 12px",minWidth:44,textAlign:"center"},switchOn:{background:"var(--accent)",color:"#fff"},fieldLbl:{fontSize:12,fontWeight:700,color:"var(--text-2)",marginBottom:7},subDivider:{height:1,background:"var(--border)",margin:"18px 0 14px"},addRowBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"9px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},sliderHead:{display:"flex",justifyContent:"space-between",alignItems:"baseline"},sliderVal:{fontSize:12,fontWeight:700,color:"var(--accent)"},range:{width:"100%",accentColor:"var(--accent)",cursor:"pointer"},themeGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},themeCard:{textAlign:"left",border:"2px solid var(--border)",background:"var(--surface-2)",borderRadius:12,padding:12,cursor:"pointer",display:"flex",flexDirection:"column",gap:6,outline:"none",WebkitTapHighlightColor:"transparent",transition:"border-color .15s ease, box-shadow .15s ease"},themeCardOn:{borderColor:"var(--accent)",boxShadow:"0 0 0 3px color-mix(in srgb, var(--accent) 25%, transparent)"},swatchRow:{display:"flex",alignItems:"center",gap:5,position:"relative"},swatch:{width:22,height:22,borderRadius:"50%",border:"1px solid rgba(0,0,0,0.08)"},themeCheck:{marginLeft:"auto",width:20,height:20,borderRadius:"50%",background:"var(--accent)",color:"#fff",display:"grid",placeItems:"center"},themeName:{fontSize:14,fontWeight:700,display:"flex",alignItems:"center",gap:6},darkTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",background:"var(--hover)",color:"var(--text-2)",padding:"1px 6px",borderRadius:6},themeDesc:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.4}},wv=`
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
`;function jv({statements:e,speed:t=60,delay:n=3}){const o=g.useMemo(()=>(e||[]).map(d=>(d||"").trim()).filter(Boolean).slice(0,5),[e]),[i,s]=g.useState(0),l=g.useRef(null),a=g.useRef(null);return g.useEffect(()=>{s(0)},[o]),g.useEffect(()=>{if(!o.length)return;const d=l.current,c=a.current;if(!d||!c)return;const h=d.offsetWidth,x=c.offsetWidth,f=Math.max(10,Number(t)||60),R=Math.max(2500,(h+x)/f*1e3),S=c.animate([{transform:`translateX(${h}px)`},{transform:`translateX(${-x}px)`}],{duration:R,easing:"linear",fill:"both"});let y;const A=()=>{y=setTimeout(()=>s(m=>(m+1)%o.length),Math.max(0,Number(n)||0)*1e3)};return S.addEventListener("finish",A),()=>{S.cancel(),S.removeEventListener("finish",A),clearTimeout(y)}},[i,o,t,n]),o.length?r.jsxs("div",{style:Vn.bar,"aria-label":"Reminders",children:[r.jsx("style",{children:wv}),r.jsx("div",{className:"anvil-tick-glow",style:Vn.icon,children:r.jsx("span",{className:"anvil-tick-pulse",style:{display:"grid",placeItems:"center"},children:r.jsx(em,{size:15})})}),r.jsxs("div",{ref:l,style:Vn.viewport,children:[r.jsx("span",{className:"anvil-tick-shimmer",style:Vn.shimmer}),r.jsx("div",{className:"anvil-tick-float",style:Vn.floatWrap,children:r.jsx("div",{ref:a,style:Vn.text,children:o[i%o.length]},i)})]})]}):null}const Vn={bar:{display:"flex",alignItems:"center",height:36,flexShrink:0,overflow:"hidden",borderBottom:"1px solid var(--border)",background:"color-mix(in srgb, var(--accent) 12%, var(--surface))"},icon:{display:"grid",placeItems:"center",width:42,height:"100%",flexShrink:0,color:"#fff",background:"var(--accent)",zIndex:2},viewport:{position:"relative",flex:1,height:"100%",overflow:"hidden",display:"flex",alignItems:"center"},shimmer:{position:"absolute",top:0,bottom:0,left:0,width:"22%",background:"linear-gradient(100deg, transparent, color-mix(in srgb, var(--accent) 22%, transparent), transparent)",pointerEvents:"none",zIndex:1},floatWrap:{display:"inline-flex",alignItems:"center",willChange:"transform"},text:{whiteSpace:"nowrap",fontSize:13.5,fontWeight:700,color:"var(--text)",letterSpacing:"0.01em",willChange:"transform",paddingLeft:4}};Jo(Tm(),!1);const yd="anvil_default_screen",Ru=()=>{try{return localStorage.getItem(yd)}catch{return null}},Sn={kickstart:{label:"Kickstart",icon:Zx,component:Q0},golden:{label:"Golden Book",icon:Ex,component:q0},habits:{label:"Habits",icon:ry,component:Ry},quadrant:{label:"Quadrant",icon:Jb,component:xy},goals:{label:"Goals",icon:yc,component:Iy},grove:{label:"Grove",icon:iy,component:v0},worth:{label:"Rewards",icon:_x,component:T0},vault:{label:"Wallet",icon:gm,component:L0},expenses:{label:"Expenses",icon:sm,component:hv},journal:{label:"Journal",icon:bc,component:Hy},revision:{label:"Revision",icon:lm,component:r0},affirmations:{label:"Affirmations",icon:To,component:i0},skills:{label:"Skills",icon:qb,component:Uy},spiritual:{label:"Spiritual",icon:js,component:Qy},mindscape:{label:"Mindscape",icon:Fx,component:nv},achievements:{label:"Achievements",icon:Hr,component:gv},delight:{label:"Delights",icon:nm,component:bv}},Em=["kickstart","golden","habits","quadrant","goals","grove","journal","revision","affirmations","skills","spiritual","mindscape","achievements","delight","worth","vault","expenses"];function cs(e){const t=Em.filter(i=>Sn[i]),o=[...(Array.isArray(e)?e:[]).filter(i=>Sn[i])];return t.forEach(i=>{o.includes(i)||o.push(i)}),o}function Sv(){const[e,t]=g.useState(()=>window.innerWidth<720);return g.useEffect(()=>{const n=()=>t(window.innerWidth<720);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}function Cv(){const[e,t]=g.useState(()=>{const V=Ru();return V&&Sn[V]?V:"habits"}),[n,o]=g.useState(()=>Ru()||"habits"),[i,s]=g.useState(!1),[l,a]=g.useState(null),[d,c]=g.useState(!1),[h,x]=g.useState(!1),[f,R]=g.useState(Tm()),[S,y]=g.useState(jo()),[A,m]=g.useState(md()),[p,b]=g.useState({enabled:!1,statements:[],speed:60,delay:3}),[E,C]=g.useState(()=>cs(Em)),[z,M]=g.useState([]),[_]=g.useState(()=>new URLSearchParams(window.location.search).get("reset")),B=Sv(),W=g.useRef(e);g.useEffect(()=>{W.current=e},[e]),g.useEffect(()=>{if(!l)return;const V=10,v=new Set(["kickstart","mindscape"]),D=setInterval(()=>{const P=W.current;!document.hidden&&P&&!v.has(P)&&$.addScreenTime(P,V).catch(()=>{})},V*1e3);return()=>clearInterval(D)},[l]),g.useEffect(()=>{let V=!1;const v=()=>{dd(),a(null)};return window.addEventListener("anvil-unauthorized",v),Sc()?$.me().then(D=>{V||a(D)}).catch(()=>{}).finally(()=>{V||c(!0)}):c(!0),()=>{V=!0,window.removeEventListener("anvil-unauthorized",v)}},[]),g.useEffect(()=>{l&&($.getSetting("theme").then(V=>{V!=null&&V.value&&R(Jo(V.value))}).catch(()=>{}),$.getSetting("currency").then(V=>{V!=null&&V.value&&y(au(V.value))}).catch(()=>{}),$.getSetting("month_start_day").then(V=>{V!=null&&V.value&&m(bu(V.value))}).catch(()=>{}),$.getSetting("ticker").then(V=>{V!=null&&V.value&&b(v=>({...v,...V.value}))}).catch(()=>{}),$.getSetting("default_screen").then(V=>{if(V!=null&&V.value&&Sn[V.value]){o(V.value);try{localStorage.setItem(yd,V.value)}catch{}}}).catch(()=>{}),$.getSetting("sidebar_order").then(V=>{Array.isArray(V==null?void 0:V.value)&&C(cs(V.value))}).catch(()=>{}),$.getSetting("sidebar_hidden").then(V=>{Array.isArray(V==null?void 0:V.value)&&M(V.value)}).catch(()=>{}))},[l]);function j(V){t(V),s(!1)}const J=()=>{dd(),a(null)},I=V=>{Jo(V,!1)},re=V=>{R(Jo(V)),$.setSetting("theme",V).catch(()=>{}),x(!1)},ue=()=>{Jo(f,!1),x(!1)},de=V=>{y(au(V)),$.setSetting("currency",V).catch(()=>{})},ye=V=>{m(bu(V)),$.setSetting("month_start_day",Number(V)).catch(()=>{})},q=V=>{b(V),$.setSetting("ticker",V).catch(()=>{})},N=V=>{o(V);try{localStorage.setItem(yd,V)}catch{}$.setSetting("default_screen",V).catch(()=>{})},se=(V,v)=>{if(C(cs(V)),M(v),x(!1),$.setSetting("sidebar_order",V).catch(()=>{}),$.setSetting("sidebar_hidden",v).catch(()=>{}),v.includes(e)){const D=cs(V).find(P=>!v.includes(P));D&&t(D)}},Y=E.filter(V=>!z.includes(V));if(_)return r.jsx(B0,{token:_,onDone:()=>{window.history.replaceState({},"",window.location.pathname),window.location.reload()}});if(!d)return r.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",fontFamily:"'Inter',system-ui,sans-serif",color:"var(--text-3)"},children:"Loading…"});if(!l)return r.jsx(E0,{onAuthed:a});const le=Sn[e],T=le.component,oe=()=>r.jsx("div",{style:Ve.navItems,children:Y.map(V=>{const v=Sn[V];if(!v)return null;const D=v.icon,P=e===V;return r.jsxs("button",{onClick:()=>j(V),title:v.label,style:{...Ve.navItem,...P?Ve.navItemOn:{}},children:[r.jsx(D,{size:18}),r.jsx("span",{style:Ve.navLabel,children:v.label})]},V)})}),Ce=()=>r.jsxs("div",{style:Ve.footerWrap,children:[r.jsxs("button",{onClick:()=>x(!0),style:Ve.settingsBtn,title:"Settings",children:[r.jsx(dm,{size:17}),r.jsx("span",{children:"Settings"})]}),r.jsxs("div",{style:Ve.userFooter,children:[r.jsxs("div",{style:Ve.userInfo,children:[r.jsx("div",{style:Ve.userAvatar,children:(l.name||l.email||"?").charAt(0).toUpperCase()}),r.jsxs("div",{style:{minWidth:0},children:[r.jsx("div",{style:Ve.userName,children:l.name||"You"}),r.jsx("div",{style:Ve.userEmail,children:l.email})]})]}),r.jsx("button",{onClick:J,style:Ve.logoutBtn,title:"Sign out",children:r.jsx(Nx,{size:16})})]})]});return r.jsxs("div",{style:Ve.shell,children:[!B&&r.jsxs("nav",{style:Ve.nav,children:[r.jsxs("div",{style:Ve.brand,children:[r.jsx("div",{style:Ve.brandLogo,children:"B"}),r.jsx("span",{style:Ve.brandName,children:"Anvil"})]}),r.jsx(oe,{}),r.jsx(Ce,{})]}),B&&i&&r.jsx("div",{style:Ve.overlay,onClick:()=>s(!1),children:r.jsxs("nav",{style:Ve.drawer,onClick:V=>V.stopPropagation(),children:[r.jsxs("div",{style:Ve.drawerHeader,children:[r.jsxs("div",{style:Ve.brand,children:[r.jsx("div",{style:Ve.brandLogo,children:"B"}),r.jsx("span",{style:Ve.brandName,children:"Anvil"})]}),r.jsx("button",{style:Ve.closeBtn,onClick:()=>s(!1),children:r.jsx(ze,{size:20})})]}),r.jsx("div",{style:Ve.drawerNav,children:r.jsx(oe,{})}),r.jsx(Ce,{})]})}),r.jsxs("div",{style:Ve.content,children:[B&&r.jsxs("div",{style:Ve.topBar,children:[r.jsx("button",{style:Ve.menuBtn,onClick:()=>s(!0),children:r.jsx(hc,{size:22})}),r.jsx("span",{style:Ve.topBarTitle,children:le.label}),r.jsx("div",{style:{width:38}})]}),p.enabled&&r.jsx(jv,{statements:p.statements,speed:p.speed,delay:p.delay}),r.jsx("main",{style:Ve.main,children:r.jsx(T,{})})]}),h&&r.jsx(kv,{screens:Sn,order:E,hidden:z,themeId:f,currency:S,monthStartDay:A,ticker:p,defaultScreen:n,onSetDefault:N,onSaveSidebar:se,onPreviewTheme:I,onCommitTheme:re,onSelectCurrency:de,onSelectMonthStartDay:ye,onSaveTicker:q,onClose:ue})]})}const Ve={shell:{display:"flex",height:"100vh",overflow:"hidden",fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)"},nav:{width:200,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column",padding:"20px 10px",gap:2,overflowY:"auto",overflowX:"hidden"},brand:{display:"flex",alignItems:"center",gap:9,padding:"6px 10px 20px",borderBottom:"1px solid var(--border)",marginBottom:8},brandLogo:{width:30,height:30,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:14,fontWeight:800,fontFamily:"'Fraunces', Georgia, serif",flexShrink:0},brandName:{fontSize:16,fontWeight:700,letterSpacing:"-0.01em",color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},navItems:{display:"flex",flexDirection:"column",gap:2},navItem:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},navItemOn:{background:"var(--hover)",color:"var(--text)",fontWeight:700},footerWrap:{marginTop:"auto",paddingTop:8,flexShrink:0},settingsBtn:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},userFooter:{marginTop:4,paddingTop:12,borderTop:"1px solid var(--border)",display:"flex",alignItems:"center",gap:8},userInfo:{display:"flex",alignItems:"center",gap:8,flex:1,minWidth:0},userAvatar:{width:30,height:30,borderRadius:"50%",background:"#8268B0",color:"#fff",display:"grid",placeItems:"center",fontSize:13,fontWeight:700,flexShrink:0},userName:{fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},userEmail:{fontSize:11,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},logoutBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",padding:7,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},navLabel:{flex:1},content:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},main:{flex:1,overflowY:"auto",overflowX:"hidden"},topBar:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",background:"var(--surface)",borderBottom:"1px solid var(--border)",flexShrink:0},topBarTitle:{fontSize:16,fontWeight:700,color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},menuBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text)",padding:8,borderRadius:8,display:"grid",placeItems:"center"},overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.35)",zIndex:100,display:"flex"},drawer:{width:220,background:"var(--surface)",height:"100%",display:"flex",flexDirection:"column",padding:"16px 10px",gap:2,boxShadow:"4px 0 24px rgba(0,0,0,0.12)",overflow:"hidden"},drawerNav:{flex:1,minHeight:0,overflowY:"auto",overflowX:"hidden"},drawerHeader:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:4,flexShrink:0},closeBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",padding:6,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0}};Ub(document.getElementById("root")).render(r.jsx(g.StrictMode,{children:r.jsx(Cv,{})}));
