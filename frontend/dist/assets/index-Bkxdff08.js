(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var sb={exports:{}},pl={},ab={exports:{}},dt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Es=Symbol.for("react.element"),hf=Symbol.for("react.portal"),ff=Symbol.for("react.fragment"),xf=Symbol.for("react.strict_mode"),yf=Symbol.for("react.profiler"),vf=Symbol.for("react.provider"),jf=Symbol.for("react.context"),kf=Symbol.for("react.forward_ref"),wf=Symbol.for("react.suspense"),Sf=Symbol.for("react.memo"),Cf=Symbol.for("react.lazy"),Hg=Symbol.iterator;function Tf(e){return e===null||typeof e!="object"?null:(e=Hg&&e[Hg]||e["@@iterator"],typeof e=="function"?e:null)}var lb={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},db=Object.assign,cb={};function wi(e,r,n){this.props=e,this.context=r,this.refs=cb,this.updater=n||lb}wi.prototype.isReactComponent={};wi.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")};wi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function gb(){}gb.prototype=wi.prototype;function Wc(e,r,n){this.props=e,this.context=r,this.refs=cb,this.updater=n||lb}var Mc=Wc.prototype=new gb;Mc.constructor=Wc;db(Mc,wi.prototype);Mc.isPureReactComponent=!0;var Gg=Array.isArray,ub=Object.prototype.hasOwnProperty,_c={current:null},pb={key:!0,ref:!0,__self:!0,__source:!0};function bb(e,r,n){var o,i={},s=null,a=null;if(r!=null)for(o in r.ref!==void 0&&(a=r.ref),r.key!==void 0&&(s=""+r.key),r)ub.call(r,o)&&!pb.hasOwnProperty(o)&&(i[o]=r[o]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var d=Array(l),g=0;g<l;g++)d[g]=arguments[g+2];i.children=d}if(e&&e.defaultProps)for(o in l=e.defaultProps,l)i[o]===void 0&&(i[o]=l[o]);return{$$typeof:Es,type:e,key:s,ref:a,props:i,_owner:_c.current}}function zf(e,r){return{$$typeof:Es,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function Lc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Es}function If(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return r[n]})}var Ug=/\/+/g;function Al(e,r){return typeof e=="object"&&e!==null&&e.key!=null?If(""+e.key):r.toString(36)}function ja(e,r,n,o,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Es:case hf:a=!0}}if(a)return a=e,i=i(a),e=o===""?"."+Al(a,0):o,Gg(i)?(n="",e!=null&&(n=e.replace(Ug,"$&/")+"/"),ja(i,r,n,"",function(g){return g})):i!=null&&(Lc(i)&&(i=zf(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Ug,"$&/")+"/")+e)),r.push(i)),1;if(a=0,o=o===""?".":o+":",Gg(e))for(var l=0;l<e.length;l++){s=e[l];var d=o+Al(s,l);a+=ja(s,r,n,d,i)}else if(d=Tf(e),typeof d=="function")for(e=d.call(e),l=0;!(s=e.next()).done;)s=s.value,d=o+Al(s,l++),a+=ja(s,r,n,d,i);else if(s==="object")throw r=String(e),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return a}function $s(e,r,n){if(e==null)return e;var o=[],i=0;return ja(e,o,"","",function(s){return r.call(n,s,i++)}),o}function Bf(e){if(e._status===-1){var r=e._result;r=r(),r.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=r)}if(e._status===1)return e._result.default;throw e._result}var hr={current:null},ka={transition:null},Rf={ReactCurrentDispatcher:hr,ReactCurrentBatchConfig:ka,ReactCurrentOwner:_c};function mb(){throw Error("act(...) is not supported in production builds of React.")}dt.Children={map:$s,forEach:function(e,r,n){$s(e,function(){r.apply(this,arguments)},n)},count:function(e){var r=0;return $s(e,function(){r++}),r},toArray:function(e){return $s(e,function(r){return r})||[]},only:function(e){if(!Lc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};dt.Component=wi;dt.Fragment=ff;dt.Profiler=yf;dt.PureComponent=Wc;dt.StrictMode=xf;dt.Suspense=wf;dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rf;dt.act=mb;dt.cloneElement=function(e,r,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=db({},e.props),i=e.key,s=e.ref,a=e._owner;if(r!=null){if(r.ref!==void 0&&(s=r.ref,a=_c.current),r.key!==void 0&&(i=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in r)ub.call(r,d)&&!pb.hasOwnProperty(d)&&(o[d]=r[d]===void 0&&l!==void 0?l[d]:r[d])}var d=arguments.length-2;if(d===1)o.children=n;else if(1<d){l=Array(d);for(var g=0;g<d;g++)l[g]=arguments[g+2];o.children=l}return{$$typeof:Es,type:e.type,key:i,ref:s,props:o,_owner:a}};dt.createContext=function(e){return e={$$typeof:jf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:vf,_context:e},e.Consumer=e};dt.createElement=bb;dt.createFactory=function(e){var r=bb.bind(null,e);return r.type=e,r};dt.createRef=function(){return{current:null}};dt.forwardRef=function(e){return{$$typeof:kf,render:e}};dt.isValidElement=Lc;dt.lazy=function(e){return{$$typeof:Cf,_payload:{_status:-1,_result:e},_init:Bf}};dt.memo=function(e,r){return{$$typeof:Sf,type:e,compare:r===void 0?null:r}};dt.startTransition=function(e){var r=ka.transition;ka.transition={};try{e()}finally{ka.transition=r}};dt.unstable_act=mb;dt.useCallback=function(e,r){return hr.current.useCallback(e,r)};dt.useContext=function(e){return hr.current.useContext(e)};dt.useDebugValue=function(){};dt.useDeferredValue=function(e){return hr.current.useDeferredValue(e)};dt.useEffect=function(e,r){return hr.current.useEffect(e,r)};dt.useId=function(){return hr.current.useId()};dt.useImperativeHandle=function(e,r,n){return hr.current.useImperativeHandle(e,r,n)};dt.useInsertionEffect=function(e,r){return hr.current.useInsertionEffect(e,r)};dt.useLayoutEffect=function(e,r){return hr.current.useLayoutEffect(e,r)};dt.useMemo=function(e,r){return hr.current.useMemo(e,r)};dt.useReducer=function(e,r,n){return hr.current.useReducer(e,r,n)};dt.useRef=function(e){return hr.current.useRef(e)};dt.useState=function(e){return hr.current.useState(e)};dt.useSyncExternalStore=function(e,r,n){return hr.current.useSyncExternalStore(e,r,n)};dt.useTransition=function(){return hr.current.useTransition()};dt.version="18.3.1";ab.exports=dt;var c=ab.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ef=c,Df=Symbol.for("react.element"),Af=Symbol.for("react.fragment"),Ff=Object.prototype.hasOwnProperty,Wf=Ef.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mf={key:!0,ref:!0,__self:!0,__source:!0};function hb(e,r,n){var o,i={},s=null,a=null;n!==void 0&&(s=""+n),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(a=r.ref);for(o in r)Ff.call(r,o)&&!Mf.hasOwnProperty(o)&&(i[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps,r)i[o]===void 0&&(i[o]=r[o]);return{$$typeof:Df,type:e,key:s,ref:a,props:i,_owner:Wf.current}}pl.Fragment=Af;pl.jsx=hb;pl.jsxs=hb;sb.exports=pl;var t=sb.exports,fb={exports:{}},Ar={},xb={exports:{}},yb={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function r(q,K){var de=q.length;q.push(K);e:for(;0<de;){var J=de-1>>>1,R=q[J];if(0<i(R,K))q[J]=K,q[de]=R,de=J;else break e}}function n(q){return q.length===0?null:q[0]}function o(q){if(q.length===0)return null;var K=q[0],de=q.pop();if(de!==K){q[0]=de;e:for(var J=0,R=q.length,O=R>>>1;J<O;){var G=2*(J+1)-1,$=q[G],ae=G+1,me=q[ae];if(0>i($,de))ae<R&&0>i(me,$)?(q[J]=me,q[ae]=de,J=ae):(q[J]=$,q[G]=de,J=G);else if(ae<R&&0>i(me,de))q[J]=me,q[ae]=de,J=ae;else break e}}return K}function i(q,K){var de=q.sortIndex-K.sortIndex;return de!==0?de:q.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var d=[],g=[],m=1,f=null,h=3,T=!1,D=!1,I=!1,z=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function u(q){for(var K=n(g);K!==null;){if(K.callback===null)o(g);else if(K.startTime<=q)o(g),K.sortIndex=K.expirationTime,r(d,K);else break;K=n(g)}}function y(q){if(I=!1,u(q),!D)if(n(d)!==null)D=!0,ie(j);else{var K=n(g);K!==null&&xe(y,K.startTime-q)}}function j(q,K){D=!1,I&&(I=!1,b(x),x=-1),T=!0;var de=h;try{for(u(K),f=n(d);f!==null&&(!(f.expirationTime>K)||q&&!Q());){var J=f.callback;if(typeof J=="function"){f.callback=null,h=f.priorityLevel;var R=J(f.expirationTime<=K);K=e.unstable_now(),typeof R=="function"?f.callback=R:f===n(d)&&o(d),u(K)}else o(d);f=n(d)}if(f!==null)var O=!0;else{var G=n(g);G!==null&&xe(y,G.startTime-K),O=!1}return O}finally{f=null,h=de,T=!1}}var C=!1,k=null,x=-1,B=5,W=-1;function Q(){return!(e.unstable_now()-W<B)}function re(){if(k!==null){var q=e.unstable_now();W=q;var K=!0;try{K=k(!0,q)}finally{K?ge():(C=!1,k=null)}}else C=!1}var ge;if(typeof p=="function")ge=function(){p(re)};else if(typeof MessageChannel<"u"){var A=new MessageChannel,X=A.port2;A.port1.onmessage=re,ge=function(){X.postMessage(null)}}else ge=function(){z(re,0)};function ie(q){k=q,C||(C=!0,ge())}function xe(q,K){x=z(function(){q(e.unstable_now())},K)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(q){q.callback=null},e.unstable_continueExecution=function(){D||T||(D=!0,ie(j))},e.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<q?Math.floor(1e3/q):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(q){switch(h){case 1:case 2:case 3:var K=3;break;default:K=h}var de=h;h=K;try{return q()}finally{h=de}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(q,K){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var de=h;h=q;try{return K()}finally{h=de}},e.unstable_scheduleCallback=function(q,K,de){var J=e.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?J+de:J):de=J,q){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=de+R,q={id:m++,callback:K,priorityLevel:q,startTime:de,expirationTime:R,sortIndex:-1},de>J?(q.sortIndex=de,r(g,q),n(d)===null&&q===n(g)&&(I?(b(x),x=-1):I=!0,xe(y,de-J))):(q.sortIndex=R,r(d,q),D||T||(D=!0,ie(j))),q},e.unstable_shouldYield=Q,e.unstable_wrapCallback=function(q){var K=h;return function(){var de=h;h=K;try{return q.apply(this,arguments)}finally{h=de}}}})(yb);xb.exports=yb;var _f=xb.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lf=c,Dr=_f;function Te(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vb=new Set,ls={};function Wo(e,r){bi(e,r),bi(e+"Capture",r)}function bi(e,r){for(ls[e]=r,e=0;e<r.length;e++)vb.add(r[e])}var Rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Id=Object.prototype.hasOwnProperty,$f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vg={},Yg={};function Pf(e){return Id.call(Yg,e)?!0:Id.call(Vg,e)?!1:$f.test(e)?Yg[e]=!0:(Vg[e]=!0,!1)}function Of(e,r,n,o){if(n!==null&&n.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Nf(e,r,n,o){if(r===null||typeof r>"u"||Of(e,r,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function fr(e,r,n,o,i,s,a){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=o,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=r,this.sanitizeURL=s,this.removeEmptyString=a}var nr={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){nr[e]=new fr(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];nr[r]=new fr(r,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){nr[e]=new fr(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){nr[e]=new fr(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){nr[e]=new fr(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){nr[e]=new fr(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){nr[e]=new fr(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){nr[e]=new fr(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){nr[e]=new fr(e,5,!1,e.toLowerCase(),null,!1,!1)});var $c=/[\-:]([a-z])/g;function Pc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace($c,Pc);nr[r]=new fr(r,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace($c,Pc);nr[r]=new fr(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace($c,Pc);nr[r]=new fr(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){nr[e]=new fr(e,1,!1,e.toLowerCase(),null,!1,!1)});nr.xlinkHref=new fr("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){nr[e]=new fr(e,1,!1,e.toLowerCase(),null,!0,!0)});function Oc(e,r,n,o){var i=nr.hasOwnProperty(r)?nr[r]:null;(i!==null?i.type!==0:o||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Nf(r,n,i,o)&&(n=null),o||i===null?Pf(r)&&(n===null?e.removeAttribute(r):e.setAttribute(r,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(r=i.attributeName,o=i.attributeNamespace,n===null?e.removeAttribute(r):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,o?e.setAttributeNS(o,r,n):e.setAttribute(r,n))))}var Wn=Lf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ps=Symbol.for("react.element"),Ko=Symbol.for("react.portal"),Qo=Symbol.for("react.fragment"),Nc=Symbol.for("react.strict_mode"),Bd=Symbol.for("react.profiler"),jb=Symbol.for("react.provider"),kb=Symbol.for("react.context"),Hc=Symbol.for("react.forward_ref"),Rd=Symbol.for("react.suspense"),Ed=Symbol.for("react.suspense_list"),Gc=Symbol.for("react.memo"),Gn=Symbol.for("react.lazy"),wb=Symbol.for("react.offscreen"),Kg=Symbol.iterator;function Ti(e){return e===null||typeof e!="object"?null:(e=Kg&&e[Kg]||e["@@iterator"],typeof e=="function"?e:null)}var $t=Object.assign,Fl;function Li(e){if(Fl===void 0)try{throw Error()}catch(n){var r=n.stack.trim().match(/\n( *(at )?)/);Fl=r&&r[1]||""}return`
`+Fl+e}var Wl=!1;function Ml(e,r){if(!e||Wl)return"";Wl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(g){var o=g}Reflect.construct(e,[],r)}else{try{r.call()}catch(g){o=g}e.call(r.prototype)}else{try{throw Error()}catch(g){o=g}e()}}catch(g){if(g&&o&&typeof g.stack=="string"){for(var i=g.stack.split(`
`),s=o.stack.split(`
`),a=i.length-1,l=s.length-1;1<=a&&0<=l&&i[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==s[l]){var d=`
`+i[a].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=a&&0<=l);break}}}finally{Wl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Li(e):""}function Hf(e){switch(e.tag){case 5:return Li(e.type);case 16:return Li("Lazy");case 13:return Li("Suspense");case 19:return Li("SuspenseList");case 0:case 2:case 15:return e=Ml(e.type,!1),e;case 11:return e=Ml(e.type.render,!1),e;case 1:return e=Ml(e.type,!0),e;default:return""}}function Dd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qo:return"Fragment";case Ko:return"Portal";case Bd:return"Profiler";case Nc:return"StrictMode";case Rd:return"Suspense";case Ed:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case kb:return(e.displayName||"Context")+".Consumer";case jb:return(e._context.displayName||"Context")+".Provider";case Hc:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Gc:return r=e.displayName||null,r!==null?r:Dd(e.type)||"Memo";case Gn:r=e._payload,e=e._init;try{return Dd(e(r))}catch{}}return null}function Gf(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Dd(r);case 8:return r===Nc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function lo(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Sb(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Uf(e){var r=Sb(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),o=""+e[r];if(!e.hasOwnProperty(r)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return i.call(this)},set:function(a){o=""+a,s.call(this,a)}}),Object.defineProperty(e,r,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(a){o=""+a},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function Os(e){e._valueTracker||(e._valueTracker=Uf(e))}function Cb(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var n=r.getValue(),o="";return e&&(o=Sb(e)?e.checked?"true":"false":e.value),e=o,e!==n?(r.setValue(e),!0):!1}function Ma(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ad(e,r){var n=r.checked;return $t({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Qg(e,r){var n=r.defaultValue==null?"":r.defaultValue,o=r.checked!=null?r.checked:r.defaultChecked;n=lo(r.value!=null?r.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Tb(e,r){r=r.checked,r!=null&&Oc(e,"checked",r,!1)}function Fd(e,r){Tb(e,r);var n=lo(r.value),o=r.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Wd(e,r.type,n):r.hasOwnProperty("defaultValue")&&Wd(e,r.type,lo(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function Xg(e,r,n){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var o=r.type;if(!(o!=="submit"&&o!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,n||r===e.value||(e.value=r),e.defaultValue=r}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Wd(e,r,n){(r!=="number"||Ma(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var $i=Array.isArray;function si(e,r,n,o){if(e=e.options,r){r={};for(var i=0;i<n.length;i++)r["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=r.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&o&&(e[n].defaultSelected=!0)}else{for(n=""+lo(n),r=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,o&&(e[i].defaultSelected=!0);return}r!==null||e[i].disabled||(r=e[i])}r!==null&&(r.selected=!0)}}function Md(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(Te(91));return $t({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function qg(e,r){var n=r.value;if(n==null){if(n=r.children,r=r.defaultValue,n!=null){if(r!=null)throw Error(Te(92));if($i(n)){if(1<n.length)throw Error(Te(93));n=n[0]}r=n}r==null&&(r=""),n=r}e._wrapperState={initialValue:lo(n)}}function zb(e,r){var n=lo(r.value),o=lo(r.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),r.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function Zg(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function Ib(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _d(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?Ib(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ns,Bb=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,n,o,i){MSApp.execUnsafeLocalFunction(function(){return e(r,n,o,i)})}:e}(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(Ns=Ns||document.createElement("div"),Ns.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ns.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function ds(e,r){if(r){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=r;return}}e.textContent=r}var Yi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vf=["Webkit","ms","Moz","O"];Object.keys(Yi).forEach(function(e){Vf.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),Yi[r]=Yi[e]})});function Rb(e,r,n){return r==null||typeof r=="boolean"||r===""?"":n||typeof r!="number"||r===0||Yi.hasOwnProperty(e)&&Yi[e]?(""+r).trim():r+"px"}function Eb(e,r){e=e.style;for(var n in r)if(r.hasOwnProperty(n)){var o=n.indexOf("--")===0,i=Rb(n,r[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,i):e[n]=i}}var Yf=$t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ld(e,r){if(r){if(Yf[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(Te(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(Te(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(Te(61))}if(r.style!=null&&typeof r.style!="object")throw Error(Te(62))}}function $d(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pd=null;function Uc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Od=null,ai=null,li=null;function Jg(e){if(e=Fs(e)){if(typeof Od!="function")throw Error(Te(280));var r=e.stateNode;r&&(r=xl(r),Od(e.stateNode,e.type,r))}}function Db(e){ai?li?li.push(e):li=[e]:ai=e}function Ab(){if(ai){var e=ai,r=li;if(li=ai=null,Jg(e),r)for(e=0;e<r.length;e++)Jg(r[e])}}function Fb(e,r){return e(r)}function Wb(){}var _l=!1;function Mb(e,r,n){if(_l)return e(r,n);_l=!0;try{return Fb(e,r,n)}finally{_l=!1,(ai!==null||li!==null)&&(Wb(),Ab())}}function cs(e,r){var n=e.stateNode;if(n===null)return null;var o=xl(n);if(o===null)return null;n=o[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Te(231,r,typeof n));return n}var Nd=!1;if(Rn)try{var zi={};Object.defineProperty(zi,"passive",{get:function(){Nd=!0}}),window.addEventListener("test",zi,zi),window.removeEventListener("test",zi,zi)}catch{Nd=!1}function Kf(e,r,n,o,i,s,a,l,d){var g=Array.prototype.slice.call(arguments,3);try{r.apply(n,g)}catch(m){this.onError(m)}}var Ki=!1,_a=null,La=!1,Hd=null,Qf={onError:function(e){Ki=!0,_a=e}};function Xf(e,r,n,o,i,s,a,l,d){Ki=!1,_a=null,Kf.apply(Qf,arguments)}function qf(e,r,n,o,i,s,a,l,d){if(Xf.apply(this,arguments),Ki){if(Ki){var g=_a;Ki=!1,_a=null}else throw Error(Te(198));La||(La=!0,Hd=g)}}function Mo(e){var r=e,n=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,r.flags&4098&&(n=r.return),e=r.return;while(e)}return r.tag===3?n:null}function _b(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function eu(e){if(Mo(e)!==e)throw Error(Te(188))}function Zf(e){var r=e.alternate;if(!r){if(r=Mo(e),r===null)throw Error(Te(188));return r!==e?null:e}for(var n=e,o=r;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(o=i.return,o!==null){n=o;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return eu(i),e;if(s===o)return eu(i),r;s=s.sibling}throw Error(Te(188))}if(n.return!==o.return)n=i,o=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,o=s;break}if(l===o){a=!0,o=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,o=i;break}if(l===o){a=!0,o=s,n=i;break}l=l.sibling}if(!a)throw Error(Te(189))}}if(n.alternate!==o)throw Error(Te(190))}if(n.tag!==3)throw Error(Te(188));return n.stateNode.current===n?e:r}function Lb(e){return e=Zf(e),e!==null?$b(e):null}function $b(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=$b(e);if(r!==null)return r;e=e.sibling}return null}var Pb=Dr.unstable_scheduleCallback,tu=Dr.unstable_cancelCallback,Jf=Dr.unstable_shouldYield,ex=Dr.unstable_requestPaint,Nt=Dr.unstable_now,tx=Dr.unstable_getCurrentPriorityLevel,Vc=Dr.unstable_ImmediatePriority,Ob=Dr.unstable_UserBlockingPriority,$a=Dr.unstable_NormalPriority,rx=Dr.unstable_LowPriority,Nb=Dr.unstable_IdlePriority,bl=null,un=null;function nx(e){if(un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(bl,e,void 0,(e.current.flags&128)===128)}catch{}}var Jr=Math.clz32?Math.clz32:sx,ox=Math.log,ix=Math.LN2;function sx(e){return e>>>=0,e===0?32:31-(ox(e)/ix|0)|0}var Hs=64,Gs=4194304;function Pi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Pa(e,r){var n=e.pendingLanes;if(n===0)return 0;var o=0,i=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?o=Pi(l):(s&=a,s!==0&&(o=Pi(s)))}else a=n&~i,a!==0?o=Pi(a):s!==0&&(o=Pi(s));if(o===0)return 0;if(r!==0&&r!==o&&!(r&i)&&(i=o&-o,s=r&-r,i>=s||i===16&&(s&4194240)!==0))return r;if(o&4&&(o|=n&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=o;0<r;)n=31-Jr(r),i=1<<n,o|=e[n],r&=~i;return o}function ax(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lx(e,r){for(var n=e.suspendedLanes,o=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-Jr(s),l=1<<a,d=i[a];d===-1?(!(l&n)||l&o)&&(i[a]=ax(l,r)):d<=r&&(e.expiredLanes|=l),s&=~l}}function Gd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Hb(){var e=Hs;return Hs<<=1,!(Hs&4194240)&&(Hs=64),e}function Ll(e){for(var r=[],n=0;31>n;n++)r.push(e);return r}function Ds(e,r,n){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Jr(r),e[r]=n}function dx(e,r){var n=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Jr(n),s=1<<i;r[i]=0,o[i]=-1,e[i]=-1,n&=~s}}function Yc(e,r){var n=e.entangledLanes|=r;for(e=e.entanglements;n;){var o=31-Jr(n),i=1<<o;i&r|e[o]&r&&(e[o]|=r),n&=~i}}var Ct=0;function Gb(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ub,Kc,Vb,Yb,Kb,Ud=!1,Us=[],Zn=null,Jn=null,eo=null,gs=new Map,us=new Map,Yn=[],cx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ru(e,r){switch(e){case"focusin":case"focusout":Zn=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":eo=null;break;case"pointerover":case"pointerout":gs.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":us.delete(r.pointerId)}}function Ii(e,r,n,o,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:r,domEventName:n,eventSystemFlags:o,nativeEvent:s,targetContainers:[i]},r!==null&&(r=Fs(r),r!==null&&Kc(r)),e):(e.eventSystemFlags|=o,r=e.targetContainers,i!==null&&r.indexOf(i)===-1&&r.push(i),e)}function gx(e,r,n,o,i){switch(r){case"focusin":return Zn=Ii(Zn,e,r,n,o,i),!0;case"dragenter":return Jn=Ii(Jn,e,r,n,o,i),!0;case"mouseover":return eo=Ii(eo,e,r,n,o,i),!0;case"pointerover":var s=i.pointerId;return gs.set(s,Ii(gs.get(s)||null,e,r,n,o,i)),!0;case"gotpointercapture":return s=i.pointerId,us.set(s,Ii(us.get(s)||null,e,r,n,o,i)),!0}return!1}function Qb(e){var r=So(e.target);if(r!==null){var n=Mo(r);if(n!==null){if(r=n.tag,r===13){if(r=_b(n),r!==null){e.blockedOn=r,Kb(e.priority,function(){Vb(n)});return}}else if(r===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wa(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var n=Vd(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);Pd=o,n.target.dispatchEvent(o),Pd=null}else return r=Fs(n),r!==null&&Kc(r),e.blockedOn=n,!1;r.shift()}return!0}function nu(e,r,n){wa(e)&&n.delete(r)}function ux(){Ud=!1,Zn!==null&&wa(Zn)&&(Zn=null),Jn!==null&&wa(Jn)&&(Jn=null),eo!==null&&wa(eo)&&(eo=null),gs.forEach(nu),us.forEach(nu)}function Bi(e,r){e.blockedOn===r&&(e.blockedOn=null,Ud||(Ud=!0,Dr.unstable_scheduleCallback(Dr.unstable_NormalPriority,ux)))}function ps(e){function r(i){return Bi(i,e)}if(0<Us.length){Bi(Us[0],e);for(var n=1;n<Us.length;n++){var o=Us[n];o.blockedOn===e&&(o.blockedOn=null)}}for(Zn!==null&&Bi(Zn,e),Jn!==null&&Bi(Jn,e),eo!==null&&Bi(eo,e),gs.forEach(r),us.forEach(r),n=0;n<Yn.length;n++)o=Yn[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<Yn.length&&(n=Yn[0],n.blockedOn===null);)Qb(n),n.blockedOn===null&&Yn.shift()}var di=Wn.ReactCurrentBatchConfig,Oa=!0;function px(e,r,n,o){var i=Ct,s=di.transition;di.transition=null;try{Ct=1,Qc(e,r,n,o)}finally{Ct=i,di.transition=s}}function bx(e,r,n,o){var i=Ct,s=di.transition;di.transition=null;try{Ct=4,Qc(e,r,n,o)}finally{Ct=i,di.transition=s}}function Qc(e,r,n,o){if(Oa){var i=Vd(e,r,n,o);if(i===null)Kl(e,r,o,Na,n),ru(e,o);else if(gx(i,e,r,n,o))o.stopPropagation();else if(ru(e,o),r&4&&-1<cx.indexOf(e)){for(;i!==null;){var s=Fs(i);if(s!==null&&Ub(s),s=Vd(e,r,n,o),s===null&&Kl(e,r,o,Na,n),s===i)break;i=s}i!==null&&o.stopPropagation()}else Kl(e,r,o,null,n)}}var Na=null;function Vd(e,r,n,o){if(Na=null,e=Uc(o),e=So(e),e!==null)if(r=Mo(e),r===null)e=null;else if(n=r.tag,n===13){if(e=_b(r),e!==null)return e;e=null}else if(n===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return Na=e,null}function Xb(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tx()){case Vc:return 1;case Ob:return 4;case $a:case rx:return 16;case Nb:return 536870912;default:return 16}default:return 16}}var Xn=null,Xc=null,Sa=null;function qb(){if(Sa)return Sa;var e,r=Xc,n=r.length,o,i="value"in Xn?Xn.value:Xn.textContent,s=i.length;for(e=0;e<n&&r[e]===i[e];e++);var a=n-e;for(o=1;o<=a&&r[n-o]===i[s-o];o++);return Sa=i.slice(e,1<o?1-o:void 0)}function Ca(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function Vs(){return!0}function ou(){return!1}function Fr(e){function r(n,o,i,s,a){this._reactName=n,this._targetInst=i,this.type=o,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Vs:ou,this.isPropagationStopped=ou,this}return $t(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vs)},persist:function(){},isPersistent:Vs}),r}var Si={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qc=Fr(Si),As=$t({},Si,{view:0,detail:0}),mx=Fr(As),$l,Pl,Ri,ml=$t({},As,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ri&&(Ri&&e.type==="mousemove"?($l=e.screenX-Ri.screenX,Pl=e.screenY-Ri.screenY):Pl=$l=0,Ri=e),$l)},movementY:function(e){return"movementY"in e?e.movementY:Pl}}),iu=Fr(ml),hx=$t({},ml,{dataTransfer:0}),fx=Fr(hx),xx=$t({},As,{relatedTarget:0}),Ol=Fr(xx),yx=$t({},Si,{animationName:0,elapsedTime:0,pseudoElement:0}),vx=Fr(yx),jx=$t({},Si,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kx=Fr(jx),wx=$t({},Si,{data:0}),su=Fr(wx),Sx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zx(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=Tx[e])?!!r[e]:!1}function Zc(){return zx}var Ix=$t({},As,{key:function(e){if(e.key){var r=Sx[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=Ca(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zc,charCode:function(e){return e.type==="keypress"?Ca(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ca(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bx=Fr(Ix),Rx=$t({},ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),au=Fr(Rx),Ex=$t({},As,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zc}),Dx=Fr(Ex),Ax=$t({},Si,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fx=Fr(Ax),Wx=$t({},ml,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mx=Fr(Wx),_x=[9,13,27,32],Jc=Rn&&"CompositionEvent"in window,Qi=null;Rn&&"documentMode"in document&&(Qi=document.documentMode);var Lx=Rn&&"TextEvent"in window&&!Qi,Zb=Rn&&(!Jc||Qi&&8<Qi&&11>=Qi),lu=" ",du=!1;function Jb(e,r){switch(e){case"keyup":return _x.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function em(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xo=!1;function $x(e,r){switch(e){case"compositionend":return em(r);case"keypress":return r.which!==32?null:(du=!0,lu);case"textInput":return e=r.data,e===lu&&du?null:e;default:return null}}function Px(e,r){if(Xo)return e==="compositionend"||!Jc&&Jb(e,r)?(e=qb(),Sa=Xc=Xn=null,Xo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Zb&&r.locale!=="ko"?null:r.data;default:return null}}var Ox={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cu(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!Ox[e.type]:r==="textarea"}function tm(e,r,n,o){Db(o),r=Ha(r,"onChange"),0<r.length&&(n=new qc("onChange","change",null,n,o),e.push({event:n,listeners:r}))}var Xi=null,bs=null;function Nx(e){um(e,0)}function hl(e){var r=Jo(e);if(Cb(r))return e}function Hx(e,r){if(e==="change")return r}var rm=!1;if(Rn){var Nl;if(Rn){var Hl="oninput"in document;if(!Hl){var gu=document.createElement("div");gu.setAttribute("oninput","return;"),Hl=typeof gu.oninput=="function"}Nl=Hl}else Nl=!1;rm=Nl&&(!document.documentMode||9<document.documentMode)}function uu(){Xi&&(Xi.detachEvent("onpropertychange",nm),bs=Xi=null)}function nm(e){if(e.propertyName==="value"&&hl(bs)){var r=[];tm(r,bs,e,Uc(e)),Mb(Nx,r)}}function Gx(e,r,n){e==="focusin"?(uu(),Xi=r,bs=n,Xi.attachEvent("onpropertychange",nm)):e==="focusout"&&uu()}function Ux(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hl(bs)}function Vx(e,r){if(e==="click")return hl(r)}function Yx(e,r){if(e==="input"||e==="change")return hl(r)}function Kx(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var tn=typeof Object.is=="function"?Object.is:Kx;function ms(e,r){if(tn(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var n=Object.keys(e),o=Object.keys(r);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var i=n[o];if(!Id.call(r,i)||!tn(e[i],r[i]))return!1}return!0}function pu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bu(e,r){var n=pu(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=r&&o>=r)return{node:n,offset:r-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pu(n)}}function om(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?om(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function im(){for(var e=window,r=Ma();r instanceof e.HTMLIFrameElement;){try{var n=typeof r.contentWindow.location.href=="string"}catch{n=!1}if(n)e=r.contentWindow;else break;r=Ma(e.document)}return r}function eg(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function Qx(e){var r=im(),n=e.focusedElem,o=e.selectionRange;if(r!==n&&n&&n.ownerDocument&&om(n.ownerDocument.documentElement,n)){if(o!==null&&eg(n)){if(r=o.start,e=o.end,e===void 0&&(e=r),"selectionStart"in n)n.selectionStart=r,n.selectionEnd=Math.min(e,n.value.length);else if(e=(r=n.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(o.start,i);o=o.end===void 0?s:Math.min(o.end,i),!e.extend&&s>o&&(i=o,o=s,s=i),i=bu(n,s);var a=bu(n,o);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(r=r.createRange(),r.setStart(i.node,i.offset),e.removeAllRanges(),s>o?(e.addRange(r),e.extend(a.node,a.offset)):(r.setEnd(a.node,a.offset),e.addRange(r)))}}for(r=[],e=n;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<r.length;n++)e=r[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xx=Rn&&"documentMode"in document&&11>=document.documentMode,qo=null,Yd=null,qi=null,Kd=!1;function mu(e,r,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kd||qo==null||qo!==Ma(o)||(o=qo,"selectionStart"in o&&eg(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),qi&&ms(qi,o)||(qi=o,o=Ha(Yd,"onSelect"),0<o.length&&(r=new qc("onSelect","select",null,r,n),e.push({event:r,listeners:o}),r.target=qo)))}function Ys(e,r){var n={};return n[e.toLowerCase()]=r.toLowerCase(),n["Webkit"+e]="webkit"+r,n["Moz"+e]="moz"+r,n}var Zo={animationend:Ys("Animation","AnimationEnd"),animationiteration:Ys("Animation","AnimationIteration"),animationstart:Ys("Animation","AnimationStart"),transitionend:Ys("Transition","TransitionEnd")},Gl={},sm={};Rn&&(sm=document.createElement("div").style,"AnimationEvent"in window||(delete Zo.animationend.animation,delete Zo.animationiteration.animation,delete Zo.animationstart.animation),"TransitionEvent"in window||delete Zo.transitionend.transition);function fl(e){if(Gl[e])return Gl[e];if(!Zo[e])return e;var r=Zo[e],n;for(n in r)if(r.hasOwnProperty(n)&&n in sm)return Gl[e]=r[n];return e}var am=fl("animationend"),lm=fl("animationiteration"),dm=fl("animationstart"),cm=fl("transitionend"),gm=new Map,hu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function uo(e,r){gm.set(e,r),Wo(r,[e])}for(var Ul=0;Ul<hu.length;Ul++){var Vl=hu[Ul],qx=Vl.toLowerCase(),Zx=Vl[0].toUpperCase()+Vl.slice(1);uo(qx,"on"+Zx)}uo(am,"onAnimationEnd");uo(lm,"onAnimationIteration");uo(dm,"onAnimationStart");uo("dblclick","onDoubleClick");uo("focusin","onFocus");uo("focusout","onBlur");uo(cm,"onTransitionEnd");bi("onMouseEnter",["mouseout","mouseover"]);bi("onMouseLeave",["mouseout","mouseover"]);bi("onPointerEnter",["pointerout","pointerover"]);bi("onPointerLeave",["pointerout","pointerover"]);Wo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oi));function fu(e,r,n){var o=e.type||"unknown-event";e.currentTarget=n,qf(o,r,void 0,e),e.currentTarget=null}function um(e,r){r=(r&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],i=o.event;o=o.listeners;e:{var s=void 0;if(r)for(var a=o.length-1;0<=a;a--){var l=o[a],d=l.instance,g=l.currentTarget;if(l=l.listener,d!==s&&i.isPropagationStopped())break e;fu(i,l,g),s=d}else for(a=0;a<o.length;a++){if(l=o[a],d=l.instance,g=l.currentTarget,l=l.listener,d!==s&&i.isPropagationStopped())break e;fu(i,l,g),s=d}}}if(La)throw e=Hd,La=!1,Hd=null,e}function Bt(e,r){var n=r[Jd];n===void 0&&(n=r[Jd]=new Set);var o=e+"__bubble";n.has(o)||(pm(r,e,2,!1),n.add(o))}function Yl(e,r,n){var o=0;r&&(o|=4),pm(n,e,o,r)}var Ks="_reactListening"+Math.random().toString(36).slice(2);function hs(e){if(!e[Ks]){e[Ks]=!0,vb.forEach(function(n){n!=="selectionchange"&&(Jx.has(n)||Yl(n,!1,e),Yl(n,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Ks]||(r[Ks]=!0,Yl("selectionchange",!1,r))}}function pm(e,r,n,o){switch(Xb(r)){case 1:var i=px;break;case 4:i=bx;break;default:i=Qc}n=i.bind(null,r,n,e),i=void 0,!Nd||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(i=!0),o?i!==void 0?e.addEventListener(r,n,{capture:!0,passive:i}):e.addEventListener(r,n,!0):i!==void 0?e.addEventListener(r,n,{passive:i}):e.addEventListener(r,n,!1)}function Kl(e,r,n,o,i){var s=o;if(!(r&1)&&!(r&2)&&o!==null)e:for(;;){if(o===null)return;var a=o.tag;if(a===3||a===4){var l=o.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=o.return;a!==null;){var d=a.tag;if((d===3||d===4)&&(d=a.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;a=a.return}for(;l!==null;){if(a=So(l),a===null)return;if(d=a.tag,d===5||d===6){o=s=a;continue e}l=l.parentNode}}o=o.return}Mb(function(){var g=s,m=Uc(n),f=[];e:{var h=gm.get(e);if(h!==void 0){var T=qc,D=e;switch(e){case"keypress":if(Ca(n)===0)break e;case"keydown":case"keyup":T=Bx;break;case"focusin":D="focus",T=Ol;break;case"focusout":D="blur",T=Ol;break;case"beforeblur":case"afterblur":T=Ol;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=iu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=fx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=Dx;break;case am:case lm:case dm:T=vx;break;case cm:T=Fx;break;case"scroll":T=mx;break;case"wheel":T=Mx;break;case"copy":case"cut":case"paste":T=kx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=au}var I=(r&4)!==0,z=!I&&e==="scroll",b=I?h!==null?h+"Capture":null:h;I=[];for(var p=g,u;p!==null;){u=p;var y=u.stateNode;if(u.tag===5&&y!==null&&(u=y,b!==null&&(y=cs(p,b),y!=null&&I.push(fs(p,y,u)))),z)break;p=p.return}0<I.length&&(h=new T(h,D,null,n,m),f.push({event:h,listeners:I}))}}if(!(r&7)){e:{if(h=e==="mouseover"||e==="pointerover",T=e==="mouseout"||e==="pointerout",h&&n!==Pd&&(D=n.relatedTarget||n.fromElement)&&(So(D)||D[En]))break e;if((T||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,T?(D=n.relatedTarget||n.toElement,T=g,D=D?So(D):null,D!==null&&(z=Mo(D),D!==z||D.tag!==5&&D.tag!==6)&&(D=null)):(T=null,D=g),T!==D)){if(I=iu,y="onMouseLeave",b="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(I=au,y="onPointerLeave",b="onPointerEnter",p="pointer"),z=T==null?h:Jo(T),u=D==null?h:Jo(D),h=new I(y,p+"leave",T,n,m),h.target=z,h.relatedTarget=u,y=null,So(m)===g&&(I=new I(b,p+"enter",D,n,m),I.target=u,I.relatedTarget=z,y=I),z=y,T&&D)t:{for(I=T,b=D,p=0,u=I;u;u=$o(u))p++;for(u=0,y=b;y;y=$o(y))u++;for(;0<p-u;)I=$o(I),p--;for(;0<u-p;)b=$o(b),u--;for(;p--;){if(I===b||b!==null&&I===b.alternate)break t;I=$o(I),b=$o(b)}I=null}else I=null;T!==null&&xu(f,h,T,I,!1),D!==null&&z!==null&&xu(f,z,D,I,!0)}}e:{if(h=g?Jo(g):window,T=h.nodeName&&h.nodeName.toLowerCase(),T==="select"||T==="input"&&h.type==="file")var j=Hx;else if(cu(h))if(rm)j=Yx;else{j=Ux;var C=Gx}else(T=h.nodeName)&&T.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(j=Vx);if(j&&(j=j(e,g))){tm(f,j,n,m);break e}C&&C(e,h,g),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Wd(h,"number",h.value)}switch(C=g?Jo(g):window,e){case"focusin":(cu(C)||C.contentEditable==="true")&&(qo=C,Yd=g,qi=null);break;case"focusout":qi=Yd=qo=null;break;case"mousedown":Kd=!0;break;case"contextmenu":case"mouseup":case"dragend":Kd=!1,mu(f,n,m);break;case"selectionchange":if(Xx)break;case"keydown":case"keyup":mu(f,n,m)}var k;if(Jc)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Xo?Jb(e,n)&&(x="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(Zb&&n.locale!=="ko"&&(Xo||x!=="onCompositionStart"?x==="onCompositionEnd"&&Xo&&(k=qb()):(Xn=m,Xc="value"in Xn?Xn.value:Xn.textContent,Xo=!0)),C=Ha(g,x),0<C.length&&(x=new su(x,e,null,n,m),f.push({event:x,listeners:C}),k?x.data=k:(k=em(n),k!==null&&(x.data=k)))),(k=Lx?$x(e,n):Px(e,n))&&(g=Ha(g,"onBeforeInput"),0<g.length&&(m=new su("onBeforeInput","beforeinput",null,n,m),f.push({event:m,listeners:g}),m.data=k))}um(f,r)})}function fs(e,r,n){return{instance:e,listener:r,currentTarget:n}}function Ha(e,r){for(var n=r+"Capture",o=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=cs(e,n),s!=null&&o.unshift(fs(e,s,i)),s=cs(e,r),s!=null&&o.push(fs(e,s,i))),e=e.return}return o}function $o(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xu(e,r,n,o,i){for(var s=r._reactName,a=[];n!==null&&n!==o;){var l=n,d=l.alternate,g=l.stateNode;if(d!==null&&d===o)break;l.tag===5&&g!==null&&(l=g,i?(d=cs(n,s),d!=null&&a.unshift(fs(n,d,l))):i||(d=cs(n,s),d!=null&&a.push(fs(n,d,l)))),n=n.return}a.length!==0&&e.push({event:r,listeners:a})}var ey=/\r\n?/g,ty=/\u0000|\uFFFD/g;function yu(e){return(typeof e=="string"?e:""+e).replace(ey,`
`).replace(ty,"")}function Qs(e,r,n){if(r=yu(r),yu(e)!==r&&n)throw Error(Te(425))}function Ga(){}var Qd=null,Xd=null;function qd(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Zd=typeof setTimeout=="function"?setTimeout:void 0,ry=typeof clearTimeout=="function"?clearTimeout:void 0,vu=typeof Promise=="function"?Promise:void 0,ny=typeof queueMicrotask=="function"?queueMicrotask:typeof vu<"u"?function(e){return vu.resolve(null).then(e).catch(oy)}:Zd;function oy(e){setTimeout(function(){throw e})}function Ql(e,r){var n=r,o=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(o===0){e.removeChild(i),ps(r);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=i}while(n);ps(r)}function to(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function ju(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(r===0)return e;r--}else n==="/$"&&r++}e=e.previousSibling}return null}var Ci=Math.random().toString(36).slice(2),gn="__reactFiber$"+Ci,xs="__reactProps$"+Ci,En="__reactContainer$"+Ci,Jd="__reactEvents$"+Ci,iy="__reactListeners$"+Ci,sy="__reactHandles$"+Ci;function So(e){var r=e[gn];if(r)return r;for(var n=e.parentNode;n;){if(r=n[En]||n[gn]){if(n=r.alternate,r.child!==null||n!==null&&n.child!==null)for(e=ju(e);e!==null;){if(n=e[gn])return n;e=ju(e)}return r}e=n,n=e.parentNode}return null}function Fs(e){return e=e[gn]||e[En],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Jo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(Te(33))}function xl(e){return e[xs]||null}var ec=[],ei=-1;function po(e){return{current:e}}function Rt(e){0>ei||(e.current=ec[ei],ec[ei]=null,ei--)}function It(e,r){ei++,ec[ei]=e.current,e.current=r}var co={},gr=po(co),kr=po(!1),Ro=co;function mi(e,r){var n=e.type.contextTypes;if(!n)return co;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===r)return o.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=r[s];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),i}function wr(e){return e=e.childContextTypes,e!=null}function Ua(){Rt(kr),Rt(gr)}function ku(e,r,n){if(gr.current!==co)throw Error(Te(168));It(gr,r),It(kr,n)}function bm(e,r,n){var o=e.stateNode;if(r=r.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var i in o)if(!(i in r))throw Error(Te(108,Gf(e)||"Unknown",i));return $t({},n,o)}function Va(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||co,Ro=gr.current,It(gr,e),It(kr,kr.current),!0}function wu(e,r,n){var o=e.stateNode;if(!o)throw Error(Te(169));n?(e=bm(e,r,Ro),o.__reactInternalMemoizedMergedChildContext=e,Rt(kr),Rt(gr),It(gr,e)):Rt(kr),It(kr,n)}var Cn=null,yl=!1,Xl=!1;function mm(e){Cn===null?Cn=[e]:Cn.push(e)}function ay(e){yl=!0,mm(e)}function bo(){if(!Xl&&Cn!==null){Xl=!0;var e=0,r=Ct;try{var n=Cn;for(Ct=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}Cn=null,yl=!1}catch(i){throw Cn!==null&&(Cn=Cn.slice(e+1)),Pb(Vc,bo),i}finally{Ct=r,Xl=!1}}return null}var ti=[],ri=0,Ya=null,Ka=0,Pr=[],Or=0,Eo=null,zn=1,In="";function vo(e,r){ti[ri++]=Ka,ti[ri++]=Ya,Ya=e,Ka=r}function hm(e,r,n){Pr[Or++]=zn,Pr[Or++]=In,Pr[Or++]=Eo,Eo=e;var o=zn;e=In;var i=32-Jr(o)-1;o&=~(1<<i),n+=1;var s=32-Jr(r)+i;if(30<s){var a=i-i%5;s=(o&(1<<a)-1).toString(32),o>>=a,i-=a,zn=1<<32-Jr(r)+i|n<<i|o,In=s+e}else zn=1<<s|n<<i|o,In=e}function tg(e){e.return!==null&&(vo(e,1),hm(e,1,0))}function rg(e){for(;e===Ya;)Ya=ti[--ri],ti[ri]=null,Ka=ti[--ri],ti[ri]=null;for(;e===Eo;)Eo=Pr[--Or],Pr[Or]=null,In=Pr[--Or],Pr[Or]=null,zn=Pr[--Or],Pr[Or]=null}var Er=null,Rr=null,Ft=!1,Zr=null;function fm(e,r){var n=Nr(5,null,null,0);n.elementType="DELETED",n.stateNode=r,n.return=e,r=e.deletions,r===null?(e.deletions=[n],e.flags|=16):r.push(n)}function Su(e,r){switch(e.tag){case 5:var n=e.type;return r=r.nodeType!==1||n.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,Er=e,Rr=to(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,Er=e,Rr=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(n=Eo!==null?{id:zn,overflow:In}:null,e.memoizedState={dehydrated:r,treeContext:n,retryLane:1073741824},n=Nr(18,null,null,0),n.stateNode=r,n.return=e,e.child=n,Er=e,Rr=null,!0):!1;default:return!1}}function tc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function rc(e){if(Ft){var r=Rr;if(r){var n=r;if(!Su(e,r)){if(tc(e))throw Error(Te(418));r=to(n.nextSibling);var o=Er;r&&Su(e,r)?fm(o,n):(e.flags=e.flags&-4097|2,Ft=!1,Er=e)}}else{if(tc(e))throw Error(Te(418));e.flags=e.flags&-4097|2,Ft=!1,Er=e}}}function Cu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Er=e}function Xs(e){if(e!==Er)return!1;if(!Ft)return Cu(e),Ft=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!qd(e.type,e.memoizedProps)),r&&(r=Rr)){if(tc(e))throw xm(),Error(Te(418));for(;r;)fm(e,r),r=to(r.nextSibling)}if(Cu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Te(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(r===0){Rr=to(e.nextSibling);break e}r--}else n!=="$"&&n!=="$!"&&n!=="$?"||r++}e=e.nextSibling}Rr=null}}else Rr=Er?to(e.stateNode.nextSibling):null;return!0}function xm(){for(var e=Rr;e;)e=to(e.nextSibling)}function hi(){Rr=Er=null,Ft=!1}function ng(e){Zr===null?Zr=[e]:Zr.push(e)}var ly=Wn.ReactCurrentBatchConfig;function Ei(e,r,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Te(309));var o=n.stateNode}if(!o)throw Error(Te(147,e));var i=o,s=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===s?r.ref:(r=function(a){var l=i.refs;a===null?delete l[s]:l[s]=a},r._stringRef=s,r)}if(typeof e!="string")throw Error(Te(284));if(!n._owner)throw Error(Te(290,e))}return e}function qs(e,r){throw e=Object.prototype.toString.call(r),Error(Te(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function Tu(e){var r=e._init;return r(e._payload)}function ym(e){function r(b,p){if(e){var u=b.deletions;u===null?(b.deletions=[p],b.flags|=16):u.push(p)}}function n(b,p){if(!e)return null;for(;p!==null;)r(b,p),p=p.sibling;return null}function o(b,p){for(b=new Map;p!==null;)p.key!==null?b.set(p.key,p):b.set(p.index,p),p=p.sibling;return b}function i(b,p){return b=io(b,p),b.index=0,b.sibling=null,b}function s(b,p,u){return b.index=u,e?(u=b.alternate,u!==null?(u=u.index,u<p?(b.flags|=2,p):u):(b.flags|=2,p)):(b.flags|=1048576,p)}function a(b){return e&&b.alternate===null&&(b.flags|=2),b}function l(b,p,u,y){return p===null||p.tag!==6?(p=nd(u,b.mode,y),p.return=b,p):(p=i(p,u),p.return=b,p)}function d(b,p,u,y){var j=u.type;return j===Qo?m(b,p,u.props.children,y,u.key):p!==null&&(p.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Gn&&Tu(j)===p.type)?(y=i(p,u.props),y.ref=Ei(b,p,u),y.return=b,y):(y=Da(u.type,u.key,u.props,null,b.mode,y),y.ref=Ei(b,p,u),y.return=b,y)}function g(b,p,u,y){return p===null||p.tag!==4||p.stateNode.containerInfo!==u.containerInfo||p.stateNode.implementation!==u.implementation?(p=od(u,b.mode,y),p.return=b,p):(p=i(p,u.children||[]),p.return=b,p)}function m(b,p,u,y,j){return p===null||p.tag!==7?(p=Bo(u,b.mode,y,j),p.return=b,p):(p=i(p,u),p.return=b,p)}function f(b,p,u){if(typeof p=="string"&&p!==""||typeof p=="number")return p=nd(""+p,b.mode,u),p.return=b,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ps:return u=Da(p.type,p.key,p.props,null,b.mode,u),u.ref=Ei(b,null,p),u.return=b,u;case Ko:return p=od(p,b.mode,u),p.return=b,p;case Gn:var y=p._init;return f(b,y(p._payload),u)}if($i(p)||Ti(p))return p=Bo(p,b.mode,u,null),p.return=b,p;qs(b,p)}return null}function h(b,p,u,y){var j=p!==null?p.key:null;if(typeof u=="string"&&u!==""||typeof u=="number")return j!==null?null:l(b,p,""+u,y);if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Ps:return u.key===j?d(b,p,u,y):null;case Ko:return u.key===j?g(b,p,u,y):null;case Gn:return j=u._init,h(b,p,j(u._payload),y)}if($i(u)||Ti(u))return j!==null?null:m(b,p,u,y,null);qs(b,u)}return null}function T(b,p,u,y,j){if(typeof y=="string"&&y!==""||typeof y=="number")return b=b.get(u)||null,l(p,b,""+y,j);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ps:return b=b.get(y.key===null?u:y.key)||null,d(p,b,y,j);case Ko:return b=b.get(y.key===null?u:y.key)||null,g(p,b,y,j);case Gn:var C=y._init;return T(b,p,u,C(y._payload),j)}if($i(y)||Ti(y))return b=b.get(u)||null,m(p,b,y,j,null);qs(p,y)}return null}function D(b,p,u,y){for(var j=null,C=null,k=p,x=p=0,B=null;k!==null&&x<u.length;x++){k.index>x?(B=k,k=null):B=k.sibling;var W=h(b,k,u[x],y);if(W===null){k===null&&(k=B);break}e&&k&&W.alternate===null&&r(b,k),p=s(W,p,x),C===null?j=W:C.sibling=W,C=W,k=B}if(x===u.length)return n(b,k),Ft&&vo(b,x),j;if(k===null){for(;x<u.length;x++)k=f(b,u[x],y),k!==null&&(p=s(k,p,x),C===null?j=k:C.sibling=k,C=k);return Ft&&vo(b,x),j}for(k=o(b,k);x<u.length;x++)B=T(k,b,x,u[x],y),B!==null&&(e&&B.alternate!==null&&k.delete(B.key===null?x:B.key),p=s(B,p,x),C===null?j=B:C.sibling=B,C=B);return e&&k.forEach(function(Q){return r(b,Q)}),Ft&&vo(b,x),j}function I(b,p,u,y){var j=Ti(u);if(typeof j!="function")throw Error(Te(150));if(u=j.call(u),u==null)throw Error(Te(151));for(var C=j=null,k=p,x=p=0,B=null,W=u.next();k!==null&&!W.done;x++,W=u.next()){k.index>x?(B=k,k=null):B=k.sibling;var Q=h(b,k,W.value,y);if(Q===null){k===null&&(k=B);break}e&&k&&Q.alternate===null&&r(b,k),p=s(Q,p,x),C===null?j=Q:C.sibling=Q,C=Q,k=B}if(W.done)return n(b,k),Ft&&vo(b,x),j;if(k===null){for(;!W.done;x++,W=u.next())W=f(b,W.value,y),W!==null&&(p=s(W,p,x),C===null?j=W:C.sibling=W,C=W);return Ft&&vo(b,x),j}for(k=o(b,k);!W.done;x++,W=u.next())W=T(k,b,x,W.value,y),W!==null&&(e&&W.alternate!==null&&k.delete(W.key===null?x:W.key),p=s(W,p,x),C===null?j=W:C.sibling=W,C=W);return e&&k.forEach(function(re){return r(b,re)}),Ft&&vo(b,x),j}function z(b,p,u,y){if(typeof u=="object"&&u!==null&&u.type===Qo&&u.key===null&&(u=u.props.children),typeof u=="object"&&u!==null){switch(u.$$typeof){case Ps:e:{for(var j=u.key,C=p;C!==null;){if(C.key===j){if(j=u.type,j===Qo){if(C.tag===7){n(b,C.sibling),p=i(C,u.props.children),p.return=b,b=p;break e}}else if(C.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Gn&&Tu(j)===C.type){n(b,C.sibling),p=i(C,u.props),p.ref=Ei(b,C,u),p.return=b,b=p;break e}n(b,C);break}else r(b,C);C=C.sibling}u.type===Qo?(p=Bo(u.props.children,b.mode,y,u.key),p.return=b,b=p):(y=Da(u.type,u.key,u.props,null,b.mode,y),y.ref=Ei(b,p,u),y.return=b,b=y)}return a(b);case Ko:e:{for(C=u.key;p!==null;){if(p.key===C)if(p.tag===4&&p.stateNode.containerInfo===u.containerInfo&&p.stateNode.implementation===u.implementation){n(b,p.sibling),p=i(p,u.children||[]),p.return=b,b=p;break e}else{n(b,p);break}else r(b,p);p=p.sibling}p=od(u,b.mode,y),p.return=b,b=p}return a(b);case Gn:return C=u._init,z(b,p,C(u._payload),y)}if($i(u))return D(b,p,u,y);if(Ti(u))return I(b,p,u,y);qs(b,u)}return typeof u=="string"&&u!==""||typeof u=="number"?(u=""+u,p!==null&&p.tag===6?(n(b,p.sibling),p=i(p,u),p.return=b,b=p):(n(b,p),p=nd(u,b.mode,y),p.return=b,b=p),a(b)):n(b,p)}return z}var fi=ym(!0),vm=ym(!1),Qa=po(null),Xa=null,ni=null,og=null;function ig(){og=ni=Xa=null}function sg(e){var r=Qa.current;Rt(Qa),e._currentValue=r}function nc(e,r,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,o!==null&&(o.childLanes|=r)):o!==null&&(o.childLanes&r)!==r&&(o.childLanes|=r),e===n)break;e=e.return}}function ci(e,r){Xa=e,og=ni=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&r&&(jr=!0),e.firstContext=null)}function Gr(e){var r=e._currentValue;if(og!==e)if(e={context:e,memoizedValue:r,next:null},ni===null){if(Xa===null)throw Error(Te(308));ni=e,Xa.dependencies={lanes:0,firstContext:e}}else ni=ni.next=e;return r}var Co=null;function ag(e){Co===null?Co=[e]:Co.push(e)}function jm(e,r,n,o){var i=r.interleaved;return i===null?(n.next=n,ag(r)):(n.next=i.next,i.next=n),r.interleaved=n,Dn(e,o)}function Dn(e,r){e.lanes|=r;var n=e.alternate;for(n!==null&&(n.lanes|=r),n=e,e=e.return;e!==null;)e.childLanes|=r,n=e.alternate,n!==null&&(n.childLanes|=r),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Un=!1;function lg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function km(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bn(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function ro(e,r,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,ft&2){var i=o.pending;return i===null?r.next=r:(r.next=i.next,i.next=r),o.pending=r,Dn(e,n)}return i=o.interleaved,i===null?(r.next=r,ag(o)):(r.next=i.next,i.next=r),o.interleaved=r,Dn(e,n)}function Ta(e,r,n){if(r=r.updateQueue,r!==null&&(r=r.shared,(n&4194240)!==0)){var o=r.lanes;o&=e.pendingLanes,n|=o,r.lanes=n,Yc(e,n)}}function zu(e,r){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=r:s=s.next=r}else i=s=r;n={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=r:e.next=r,n.lastBaseUpdate=r}function qa(e,r,n,o){var i=e.updateQueue;Un=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var d=l,g=d.next;d.next=null,a===null?s=g:a.next=g,a=d;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==a&&(l===null?m.firstBaseUpdate=g:l.next=g,m.lastBaseUpdate=d))}if(s!==null){var f=i.baseState;a=0,m=g=d=null,l=s;do{var h=l.lane,T=l.eventTime;if((o&h)===h){m!==null&&(m=m.next={eventTime:T,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var D=e,I=l;switch(h=r,T=n,I.tag){case 1:if(D=I.payload,typeof D=="function"){f=D.call(T,f,h);break e}f=D;break e;case 3:D.flags=D.flags&-65537|128;case 0:if(D=I.payload,h=typeof D=="function"?D.call(T,f,h):D,h==null)break e;f=$t({},f,h);break e;case 2:Un=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else T={eventTime:T,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(g=m=T,d=f):m=m.next=T,a|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(m===null&&(d=f),i.baseState=d,i.firstBaseUpdate=g,i.lastBaseUpdate=m,r=i.shared.interleaved,r!==null){i=r;do a|=i.lane,i=i.next;while(i!==r)}else s===null&&(i.shared.lanes=0);Ao|=a,e.lanes=a,e.memoizedState=f}}function Iu(e,r,n){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var o=e[r],i=o.callback;if(i!==null){if(o.callback=null,o=n,typeof i!="function")throw Error(Te(191,i));i.call(o)}}}var Ws={},pn=po(Ws),ys=po(Ws),vs=po(Ws);function To(e){if(e===Ws)throw Error(Te(174));return e}function dg(e,r){switch(It(vs,r),It(ys,e),It(pn,Ws),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:_d(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=_d(r,e)}Rt(pn),It(pn,r)}function xi(){Rt(pn),Rt(ys),Rt(vs)}function wm(e){To(vs.current);var r=To(pn.current),n=_d(r,e.type);r!==n&&(It(ys,e),It(pn,n))}function cg(e){ys.current===e&&(Rt(pn),Rt(ys))}var _t=po(0);function Za(e){for(var r=e;r!==null;){if(r.tag===13){var n=r.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var ql=[];function gg(){for(var e=0;e<ql.length;e++)ql[e]._workInProgressVersionPrimary=null;ql.length=0}var za=Wn.ReactCurrentDispatcher,Zl=Wn.ReactCurrentBatchConfig,Do=0,Lt=null,Qt=null,Zt=null,Ja=!1,Zi=!1,js=0,dy=0;function ir(){throw Error(Te(321))}function ug(e,r){if(r===null)return!1;for(var n=0;n<r.length&&n<e.length;n++)if(!tn(e[n],r[n]))return!1;return!0}function pg(e,r,n,o,i,s){if(Do=s,Lt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,za.current=e===null||e.memoizedState===null?py:by,e=n(o,i),Zi){s=0;do{if(Zi=!1,js=0,25<=s)throw Error(Te(301));s+=1,Zt=Qt=null,r.updateQueue=null,za.current=my,e=n(o,i)}while(Zi)}if(za.current=el,r=Qt!==null&&Qt.next!==null,Do=0,Zt=Qt=Lt=null,Ja=!1,r)throw Error(Te(300));return e}function bg(){var e=js!==0;return js=0,e}function ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?Lt.memoizedState=Zt=e:Zt=Zt.next=e,Zt}function Ur(){if(Qt===null){var e=Lt.alternate;e=e!==null?e.memoizedState:null}else e=Qt.next;var r=Zt===null?Lt.memoizedState:Zt.next;if(r!==null)Zt=r,Qt=e;else{if(e===null)throw Error(Te(310));Qt=e,e={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},Zt===null?Lt.memoizedState=Zt=e:Zt=Zt.next=e}return Zt}function ks(e,r){return typeof r=="function"?r(e):r}function Jl(e){var r=Ur(),n=r.queue;if(n===null)throw Error(Te(311));n.lastRenderedReducer=e;var o=Qt,i=o.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}o.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,o=o.baseState;var l=a=null,d=null,g=s;do{var m=g.lane;if((Do&m)===m)d!==null&&(d=d.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),o=g.hasEagerState?g.eagerState:e(o,g.action);else{var f={lane:m,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};d===null?(l=d=f,a=o):d=d.next=f,Lt.lanes|=m,Ao|=m}g=g.next}while(g!==null&&g!==s);d===null?a=o:d.next=l,tn(o,r.memoizedState)||(jr=!0),r.memoizedState=o,r.baseState=a,r.baseQueue=d,n.lastRenderedState=o}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Lt.lanes|=s,Ao|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[r.memoizedState,n.dispatch]}function ed(e){var r=Ur(),n=r.queue;if(n===null)throw Error(Te(311));n.lastRenderedReducer=e;var o=n.dispatch,i=n.pending,s=r.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=e(s,a.action),a=a.next;while(a!==i);tn(s,r.memoizedState)||(jr=!0),r.memoizedState=s,r.baseQueue===null&&(r.baseState=s),n.lastRenderedState=s}return[s,o]}function Sm(){}function Cm(e,r){var n=Lt,o=Ur(),i=r(),s=!tn(o.memoizedState,i);if(s&&(o.memoizedState=i,jr=!0),o=o.queue,mg(Im.bind(null,n,o,e),[e]),o.getSnapshot!==r||s||Zt!==null&&Zt.memoizedState.tag&1){if(n.flags|=2048,ws(9,zm.bind(null,n,o,i,r),void 0,null),Jt===null)throw Error(Te(349));Do&30||Tm(n,r,i)}return i}function Tm(e,r,n){e.flags|=16384,e={getSnapshot:r,value:n},r=Lt.updateQueue,r===null?(r={lastEffect:null,stores:null},Lt.updateQueue=r,r.stores=[e]):(n=r.stores,n===null?r.stores=[e]:n.push(e))}function zm(e,r,n,o){r.value=n,r.getSnapshot=o,Bm(r)&&Rm(e)}function Im(e,r,n){return n(function(){Bm(r)&&Rm(e)})}function Bm(e){var r=e.getSnapshot;e=e.value;try{var n=r();return!tn(e,n)}catch{return!0}}function Rm(e){var r=Dn(e,1);r!==null&&en(r,e,1,-1)}function Bu(e){var r=ln();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ks,lastRenderedState:e},r.queue=e,e=e.dispatch=uy.bind(null,Lt,e),[r.memoizedState,e]}function ws(e,r,n,o){return e={tag:e,create:r,destroy:n,deps:o,next:null},r=Lt.updateQueue,r===null?(r={lastEffect:null,stores:null},Lt.updateQueue=r,r.lastEffect=e.next=e):(n=r.lastEffect,n===null?r.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,r.lastEffect=e)),e}function Em(){return Ur().memoizedState}function Ia(e,r,n,o){var i=ln();Lt.flags|=e,i.memoizedState=ws(1|r,n,void 0,o===void 0?null:o)}function vl(e,r,n,o){var i=Ur();o=o===void 0?null:o;var s=void 0;if(Qt!==null){var a=Qt.memoizedState;if(s=a.destroy,o!==null&&ug(o,a.deps)){i.memoizedState=ws(r,n,s,o);return}}Lt.flags|=e,i.memoizedState=ws(1|r,n,s,o)}function Ru(e,r){return Ia(8390656,8,e,r)}function mg(e,r){return vl(2048,8,e,r)}function Dm(e,r){return vl(4,2,e,r)}function Am(e,r){return vl(4,4,e,r)}function Fm(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function Wm(e,r,n){return n=n!=null?n.concat([e]):null,vl(4,4,Fm.bind(null,r,e),n)}function hg(){}function Mm(e,r){var n=Ur();r=r===void 0?null:r;var o=n.memoizedState;return o!==null&&r!==null&&ug(r,o[1])?o[0]:(n.memoizedState=[e,r],e)}function _m(e,r){var n=Ur();r=r===void 0?null:r;var o=n.memoizedState;return o!==null&&r!==null&&ug(r,o[1])?o[0]:(e=e(),n.memoizedState=[e,r],e)}function Lm(e,r,n){return Do&21?(tn(n,r)||(n=Hb(),Lt.lanes|=n,Ao|=n,e.baseState=!0),r):(e.baseState&&(e.baseState=!1,jr=!0),e.memoizedState=n)}function cy(e,r){var n=Ct;Ct=n!==0&&4>n?n:4,e(!0);var o=Zl.transition;Zl.transition={};try{e(!1),r()}finally{Ct=n,Zl.transition=o}}function $m(){return Ur().memoizedState}function gy(e,r,n){var o=oo(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},Pm(e))Om(r,n);else if(n=jm(e,r,n,o),n!==null){var i=mr();en(n,e,o,i),Nm(n,r,o)}}function uy(e,r,n){var o=oo(e),i={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pm(e))Om(r,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=r.lastRenderedReducer,s!==null))try{var a=r.lastRenderedState,l=s(a,n);if(i.hasEagerState=!0,i.eagerState=l,tn(l,a)){var d=r.interleaved;d===null?(i.next=i,ag(r)):(i.next=d.next,d.next=i),r.interleaved=i;return}}catch{}finally{}n=jm(e,r,i,o),n!==null&&(i=mr(),en(n,e,o,i),Nm(n,r,o))}}function Pm(e){var r=e.alternate;return e===Lt||r!==null&&r===Lt}function Om(e,r){Zi=Ja=!0;var n=e.pending;n===null?r.next=r:(r.next=n.next,n.next=r),e.pending=r}function Nm(e,r,n){if(n&4194240){var o=r.lanes;o&=e.pendingLanes,n|=o,r.lanes=n,Yc(e,n)}}var el={readContext:Gr,useCallback:ir,useContext:ir,useEffect:ir,useImperativeHandle:ir,useInsertionEffect:ir,useLayoutEffect:ir,useMemo:ir,useReducer:ir,useRef:ir,useState:ir,useDebugValue:ir,useDeferredValue:ir,useTransition:ir,useMutableSource:ir,useSyncExternalStore:ir,useId:ir,unstable_isNewReconciler:!1},py={readContext:Gr,useCallback:function(e,r){return ln().memoizedState=[e,r===void 0?null:r],e},useContext:Gr,useEffect:Ru,useImperativeHandle:function(e,r,n){return n=n!=null?n.concat([e]):null,Ia(4194308,4,Fm.bind(null,r,e),n)},useLayoutEffect:function(e,r){return Ia(4194308,4,e,r)},useInsertionEffect:function(e,r){return Ia(4,2,e,r)},useMemo:function(e,r){var n=ln();return r=r===void 0?null:r,e=e(),n.memoizedState=[e,r],e},useReducer:function(e,r,n){var o=ln();return r=n!==void 0?n(r):r,o.memoizedState=o.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},o.queue=e,e=e.dispatch=gy.bind(null,Lt,e),[o.memoizedState,e]},useRef:function(e){var r=ln();return e={current:e},r.memoizedState=e},useState:Bu,useDebugValue:hg,useDeferredValue:function(e){return ln().memoizedState=e},useTransition:function(){var e=Bu(!1),r=e[0];return e=cy.bind(null,e[1]),ln().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,n){var o=Lt,i=ln();if(Ft){if(n===void 0)throw Error(Te(407));n=n()}else{if(n=r(),Jt===null)throw Error(Te(349));Do&30||Tm(o,r,n)}i.memoizedState=n;var s={value:n,getSnapshot:r};return i.queue=s,Ru(Im.bind(null,o,s,e),[e]),o.flags|=2048,ws(9,zm.bind(null,o,s,n,r),void 0,null),n},useId:function(){var e=ln(),r=Jt.identifierPrefix;if(Ft){var n=In,o=zn;n=(o&~(1<<32-Jr(o)-1)).toString(32)+n,r=":"+r+"R"+n,n=js++,0<n&&(r+="H"+n.toString(32)),r+=":"}else n=dy++,r=":"+r+"r"+n.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},by={readContext:Gr,useCallback:Mm,useContext:Gr,useEffect:mg,useImperativeHandle:Wm,useInsertionEffect:Dm,useLayoutEffect:Am,useMemo:_m,useReducer:Jl,useRef:Em,useState:function(){return Jl(ks)},useDebugValue:hg,useDeferredValue:function(e){var r=Ur();return Lm(r,Qt.memoizedState,e)},useTransition:function(){var e=Jl(ks)[0],r=Ur().memoizedState;return[e,r]},useMutableSource:Sm,useSyncExternalStore:Cm,useId:$m,unstable_isNewReconciler:!1},my={readContext:Gr,useCallback:Mm,useContext:Gr,useEffect:mg,useImperativeHandle:Wm,useInsertionEffect:Dm,useLayoutEffect:Am,useMemo:_m,useReducer:ed,useRef:Em,useState:function(){return ed(ks)},useDebugValue:hg,useDeferredValue:function(e){var r=Ur();return Qt===null?r.memoizedState=e:Lm(r,Qt.memoizedState,e)},useTransition:function(){var e=ed(ks)[0],r=Ur().memoizedState;return[e,r]},useMutableSource:Sm,useSyncExternalStore:Cm,useId:$m,unstable_isNewReconciler:!1};function Xr(e,r){if(e&&e.defaultProps){r=$t({},r),e=e.defaultProps;for(var n in e)r[n]===void 0&&(r[n]=e[n]);return r}return r}function oc(e,r,n,o){r=e.memoizedState,n=n(o,r),n=n==null?r:$t({},r,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var jl={isMounted:function(e){return(e=e._reactInternals)?Mo(e)===e:!1},enqueueSetState:function(e,r,n){e=e._reactInternals;var o=mr(),i=oo(e),s=Bn(o,i);s.payload=r,n!=null&&(s.callback=n),r=ro(e,s,i),r!==null&&(en(r,e,i,o),Ta(r,e,i))},enqueueReplaceState:function(e,r,n){e=e._reactInternals;var o=mr(),i=oo(e),s=Bn(o,i);s.tag=1,s.payload=r,n!=null&&(s.callback=n),r=ro(e,s,i),r!==null&&(en(r,e,i,o),Ta(r,e,i))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var n=mr(),o=oo(e),i=Bn(n,o);i.tag=2,r!=null&&(i.callback=r),r=ro(e,i,o),r!==null&&(en(r,e,o,n),Ta(r,e,o))}};function Eu(e,r,n,o,i,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,s,a):r.prototype&&r.prototype.isPureReactComponent?!ms(n,o)||!ms(i,s):!0}function Hm(e,r,n){var o=!1,i=co,s=r.contextType;return typeof s=="object"&&s!==null?s=Gr(s):(i=wr(r)?Ro:gr.current,o=r.contextTypes,s=(o=o!=null)?mi(e,i):co),r=new r(n,s),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=jl,e.stateNode=r,r._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),r}function Du(e,r,n,o){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(n,o),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(n,o),r.state!==e&&jl.enqueueReplaceState(r,r.state,null)}function ic(e,r,n,o){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},lg(e);var s=r.contextType;typeof s=="object"&&s!==null?i.context=Gr(s):(s=wr(r)?Ro:gr.current,i.context=mi(e,s)),i.state=e.memoizedState,s=r.getDerivedStateFromProps,typeof s=="function"&&(oc(e,r,s,n),i.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&jl.enqueueReplaceState(i,i.state,null),qa(e,n,i,o),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function yi(e,r){try{var n="",o=r;do n+=Hf(o),o=o.return;while(o);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:r,stack:i,digest:null}}function td(e,r,n){return{value:e,source:null,stack:n??null,digest:r??null}}function sc(e,r){try{console.error(r.value)}catch(n){setTimeout(function(){throw n})}}var hy=typeof WeakMap=="function"?WeakMap:Map;function Gm(e,r,n){n=Bn(-1,n),n.tag=3,n.payload={element:null};var o=r.value;return n.callback=function(){rl||(rl=!0,hc=o),sc(e,r)},n}function Um(e,r,n){n=Bn(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var i=r.value;n.payload=function(){return o(i)},n.callback=function(){sc(e,r)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){sc(e,r),typeof o!="function"&&(no===null?no=new Set([this]):no.add(this));var a=r.stack;this.componentDidCatch(r.value,{componentStack:a!==null?a:""})}),n}function Au(e,r,n){var o=e.pingCache;if(o===null){o=e.pingCache=new hy;var i=new Set;o.set(r,i)}else i=o.get(r),i===void 0&&(i=new Set,o.set(r,i));i.has(n)||(i.add(n),e=Ry.bind(null,e,r,n),r.then(e,e))}function Fu(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function Wu(e,r,n,o,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===r?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(r=Bn(-1,1),r.tag=2,ro(n,r,1))),n.lanes|=1),e)}var fy=Wn.ReactCurrentOwner,jr=!1;function ur(e,r,n,o){r.child=e===null?vm(r,null,n,o):fi(r,e.child,n,o)}function Mu(e,r,n,o,i){n=n.render;var s=r.ref;return ci(r,i),o=pg(e,r,n,o,s,i),n=bg(),e!==null&&!jr?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,An(e,r,i)):(Ft&&n&&tg(r),r.flags|=1,ur(e,r,o,i),r.child)}function _u(e,r,n,o,i){if(e===null){var s=n.type;return typeof s=="function"&&!Sg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(r.tag=15,r.type=s,Vm(e,r,s,o,i)):(e=Da(n.type,null,o,r,r.mode,i),e.ref=r.ref,e.return=r,r.child=e)}if(s=e.child,!(e.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:ms,n(a,o)&&e.ref===r.ref)return An(e,r,i)}return r.flags|=1,e=io(s,o),e.ref=r.ref,e.return=r,r.child=e}function Vm(e,r,n,o,i){if(e!==null){var s=e.memoizedProps;if(ms(s,o)&&e.ref===r.ref)if(jr=!1,r.pendingProps=o=s,(e.lanes&i)!==0)e.flags&131072&&(jr=!0);else return r.lanes=e.lanes,An(e,r,i)}return ac(e,r,n,o,i)}function Ym(e,r,n){var o=r.pendingProps,i=o.children,s=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},It(ii,Br),Br|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,It(ii,Br),Br|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=s!==null?s.baseLanes:n,It(ii,Br),Br|=o}else s!==null?(o=s.baseLanes|n,r.memoizedState=null):o=n,It(ii,Br),Br|=o;return ur(e,r,i,n),r.child}function Km(e,r){var n=r.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(r.flags|=512,r.flags|=2097152)}function ac(e,r,n,o,i){var s=wr(n)?Ro:gr.current;return s=mi(r,s),ci(r,i),n=pg(e,r,n,o,s,i),o=bg(),e!==null&&!jr?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,An(e,r,i)):(Ft&&o&&tg(r),r.flags|=1,ur(e,r,n,i),r.child)}function Lu(e,r,n,o,i){if(wr(n)){var s=!0;Va(r)}else s=!1;if(ci(r,i),r.stateNode===null)Ba(e,r),Hm(r,n,o),ic(r,n,o,i),o=!0;else if(e===null){var a=r.stateNode,l=r.memoizedProps;a.props=l;var d=a.context,g=n.contextType;typeof g=="object"&&g!==null?g=Gr(g):(g=wr(n)?Ro:gr.current,g=mi(r,g));var m=n.getDerivedStateFromProps,f=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==o||d!==g)&&Du(r,a,o,g),Un=!1;var h=r.memoizedState;a.state=h,qa(r,o,a,i),d=r.memoizedState,l!==o||h!==d||kr.current||Un?(typeof m=="function"&&(oc(r,n,m,o),d=r.memoizedState),(l=Un||Eu(r,n,l,o,h,d,g))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(r.flags|=4194308)):(typeof a.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=o,r.memoizedState=d),a.props=o,a.state=d,a.context=g,o=l):(typeof a.componentDidMount=="function"&&(r.flags|=4194308),o=!1)}else{a=r.stateNode,km(e,r),l=r.memoizedProps,g=r.type===r.elementType?l:Xr(r.type,l),a.props=g,f=r.pendingProps,h=a.context,d=n.contextType,typeof d=="object"&&d!==null?d=Gr(d):(d=wr(n)?Ro:gr.current,d=mi(r,d));var T=n.getDerivedStateFromProps;(m=typeof T=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||h!==d)&&Du(r,a,o,d),Un=!1,h=r.memoizedState,a.state=h,qa(r,o,a,i);var D=r.memoizedState;l!==f||h!==D||kr.current||Un?(typeof T=="function"&&(oc(r,n,T,o),D=r.memoizedState),(g=Un||Eu(r,n,g,o,h,D,d)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(o,D,d),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(o,D,d)),typeof a.componentDidUpdate=="function"&&(r.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(r.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(r.flags|=1024),r.memoizedProps=o,r.memoizedState=D),a.props=o,a.state=D,a.context=d,o=g):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(r.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(r.flags|=1024),o=!1)}return lc(e,r,n,o,s,i)}function lc(e,r,n,o,i,s){Km(e,r);var a=(r.flags&128)!==0;if(!o&&!a)return i&&wu(r,n,!1),An(e,r,s);o=r.stateNode,fy.current=r;var l=a&&typeof n.getDerivedStateFromError!="function"?null:o.render();return r.flags|=1,e!==null&&a?(r.child=fi(r,e.child,null,s),r.child=fi(r,null,l,s)):ur(e,r,l,s),r.memoizedState=o.state,i&&wu(r,n,!0),r.child}function Qm(e){var r=e.stateNode;r.pendingContext?ku(e,r.pendingContext,r.pendingContext!==r.context):r.context&&ku(e,r.context,!1),dg(e,r.containerInfo)}function $u(e,r,n,o,i){return hi(),ng(i),r.flags|=256,ur(e,r,n,o),r.child}var dc={dehydrated:null,treeContext:null,retryLane:0};function cc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xm(e,r,n){var o=r.pendingProps,i=_t.current,s=!1,a=(r.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),It(_t,i&1),e===null)return rc(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(r.mode&1?e.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(a=o.children,e=o.fallback,s?(o=r.mode,s=r.child,a={mode:"hidden",children:a},!(o&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Sl(a,o,0,null),e=Bo(e,o,n,null),s.return=r,e.return=r,s.sibling=e,r.child=s,r.child.memoizedState=cc(n),r.memoizedState=dc,e):fg(r,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return xy(e,r,a,o,l,i,n);if(s){s=o.fallback,a=r.mode,i=e.child,l=i.sibling;var d={mode:"hidden",children:o.children};return!(a&1)&&r.child!==i?(o=r.child,o.childLanes=0,o.pendingProps=d,r.deletions=null):(o=io(i,d),o.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=io(l,s):(s=Bo(s,a,n,null),s.flags|=2),s.return=r,o.return=r,o.sibling=s,r.child=o,o=s,s=r.child,a=e.child.memoizedState,a=a===null?cc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,r.memoizedState=dc,o}return s=e.child,e=s.sibling,o=io(s,{mode:"visible",children:o.children}),!(r.mode&1)&&(o.lanes=n),o.return=r,o.sibling=null,e!==null&&(n=r.deletions,n===null?(r.deletions=[e],r.flags|=16):n.push(e)),r.child=o,r.memoizedState=null,o}function fg(e,r){return r=Sl({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function Zs(e,r,n,o){return o!==null&&ng(o),fi(r,e.child,null,n),e=fg(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function xy(e,r,n,o,i,s,a){if(n)return r.flags&256?(r.flags&=-257,o=td(Error(Te(422))),Zs(e,r,a,o)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(s=o.fallback,i=r.mode,o=Sl({mode:"visible",children:o.children},i,0,null),s=Bo(s,i,a,null),s.flags|=2,o.return=r,s.return=r,o.sibling=s,r.child=o,r.mode&1&&fi(r,e.child,null,a),r.child.memoizedState=cc(a),r.memoizedState=dc,s);if(!(r.mode&1))return Zs(e,r,a,null);if(i.data==="$!"){if(o=i.nextSibling&&i.nextSibling.dataset,o)var l=o.dgst;return o=l,s=Error(Te(419)),o=td(s,o,void 0),Zs(e,r,a,o)}if(l=(a&e.childLanes)!==0,jr||l){if(o=Jt,o!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(o.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Dn(e,i),en(o,e,i,-1))}return wg(),o=td(Error(Te(421))),Zs(e,r,a,o)}return i.data==="$?"?(r.flags|=128,r.child=e.child,r=Ey.bind(null,e),i._reactRetry=r,null):(e=s.treeContext,Rr=to(i.nextSibling),Er=r,Ft=!0,Zr=null,e!==null&&(Pr[Or++]=zn,Pr[Or++]=In,Pr[Or++]=Eo,zn=e.id,In=e.overflow,Eo=r),r=fg(r,o.children),r.flags|=4096,r)}function Pu(e,r,n){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r),nc(e.return,r,n)}function rd(e,r,n,o,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:i}:(s.isBackwards=r,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=n,s.tailMode=i)}function qm(e,r,n){var o=r.pendingProps,i=o.revealOrder,s=o.tail;if(ur(e,r,o.children,n),o=_t.current,o&2)o=o&1|2,r.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pu(e,n,r);else if(e.tag===19)Pu(e,n,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(It(_t,o),!(r.mode&1))r.memoizedState=null;else switch(i){case"forwards":for(n=r.child,i=null;n!==null;)e=n.alternate,e!==null&&Za(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=r.child,r.child=null):(i=n.sibling,n.sibling=null),rd(r,!1,i,n,s);break;case"backwards":for(n=null,i=r.child,r.child=null;i!==null;){if(e=i.alternate,e!==null&&Za(e)===null){r.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}rd(r,!0,n,null,s);break;case"together":rd(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ba(e,r){!(r.mode&1)&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function An(e,r,n){if(e!==null&&(r.dependencies=e.dependencies),Ao|=r.lanes,!(n&r.childLanes))return null;if(e!==null&&r.child!==e.child)throw Error(Te(153));if(r.child!==null){for(e=r.child,n=io(e,e.pendingProps),r.child=n,n.return=r;e.sibling!==null;)e=e.sibling,n=n.sibling=io(e,e.pendingProps),n.return=r;n.sibling=null}return r.child}function yy(e,r,n){switch(r.tag){case 3:Qm(r),hi();break;case 5:wm(r);break;case 1:wr(r.type)&&Va(r);break;case 4:dg(r,r.stateNode.containerInfo);break;case 10:var o=r.type._context,i=r.memoizedProps.value;It(Qa,o._currentValue),o._currentValue=i;break;case 13:if(o=r.memoizedState,o!==null)return o.dehydrated!==null?(It(_t,_t.current&1),r.flags|=128,null):n&r.child.childLanes?Xm(e,r,n):(It(_t,_t.current&1),e=An(e,r,n),e!==null?e.sibling:null);It(_t,_t.current&1);break;case 19:if(o=(n&r.childLanes)!==0,e.flags&128){if(o)return qm(e,r,n);r.flags|=128}if(i=r.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),It(_t,_t.current),o)break;return null;case 22:case 23:return r.lanes=0,Ym(e,r,n)}return An(e,r,n)}var Zm,gc,Jm,eh;Zm=function(e,r){for(var n=r.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gc=function(){};Jm=function(e,r,n,o){var i=e.memoizedProps;if(i!==o){e=r.stateNode,To(pn.current);var s=null;switch(n){case"input":i=Ad(e,i),o=Ad(e,o),s=[];break;case"select":i=$t({},i,{value:void 0}),o=$t({},o,{value:void 0}),s=[];break;case"textarea":i=Md(e,i),o=Md(e,o),s=[];break;default:typeof i.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Ga)}Ld(n,o);var a;n=null;for(g in i)if(!o.hasOwnProperty(g)&&i.hasOwnProperty(g)&&i[g]!=null)if(g==="style"){var l=i[g];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(ls.hasOwnProperty(g)?s||(s=[]):(s=s||[]).push(g,null));for(g in o){var d=o[g];if(l=i!=null?i[g]:void 0,o.hasOwnProperty(g)&&d!==l&&(d!=null||l!=null))if(g==="style")if(l){for(a in l)!l.hasOwnProperty(a)||d&&d.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in d)d.hasOwnProperty(a)&&l[a]!==d[a]&&(n||(n={}),n[a]=d[a])}else n||(s||(s=[]),s.push(g,n)),n=d;else g==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,l=l?l.__html:void 0,d!=null&&l!==d&&(s=s||[]).push(g,d)):g==="children"?typeof d!="string"&&typeof d!="number"||(s=s||[]).push(g,""+d):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(ls.hasOwnProperty(g)?(d!=null&&g==="onScroll"&&Bt("scroll",e),s||l===d||(s=[])):(s=s||[]).push(g,d))}n&&(s=s||[]).push("style",n);var g=s;(r.updateQueue=g)&&(r.flags|=4)}};eh=function(e,r,n,o){n!==o&&(r.flags|=4)};function Di(e,r){if(!Ft)switch(e.tailMode){case"hidden":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function sr(e){var r=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(r)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags&14680064,o|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=o,e.childLanes=n,r}function vy(e,r,n){var o=r.pendingProps;switch(rg(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sr(r),null;case 1:return wr(r.type)&&Ua(),sr(r),null;case 3:return o=r.stateNode,xi(),Rt(kr),Rt(gr),gg(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Xs(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Zr!==null&&(yc(Zr),Zr=null))),gc(e,r),sr(r),null;case 5:cg(r);var i=To(vs.current);if(n=r.type,e!==null&&r.stateNode!=null)Jm(e,r,n,o,i),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!o){if(r.stateNode===null)throw Error(Te(166));return sr(r),null}if(e=To(pn.current),Xs(r)){o=r.stateNode,n=r.type;var s=r.memoizedProps;switch(o[gn]=r,o[xs]=s,e=(r.mode&1)!==0,n){case"dialog":Bt("cancel",o),Bt("close",o);break;case"iframe":case"object":case"embed":Bt("load",o);break;case"video":case"audio":for(i=0;i<Oi.length;i++)Bt(Oi[i],o);break;case"source":Bt("error",o);break;case"img":case"image":case"link":Bt("error",o),Bt("load",o);break;case"details":Bt("toggle",o);break;case"input":Qg(o,s),Bt("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!s.multiple},Bt("invalid",o);break;case"textarea":qg(o,s),Bt("invalid",o)}Ld(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?o.textContent!==l&&(s.suppressHydrationWarning!==!0&&Qs(o.textContent,l,e),i=["children",l]):typeof l=="number"&&o.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Qs(o.textContent,l,e),i=["children",""+l]):ls.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Bt("scroll",o)}switch(n){case"input":Os(o),Xg(o,s,!0);break;case"textarea":Os(o),Zg(o);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(o.onclick=Ga)}o=i,r.updateQueue=o,o!==null&&(r.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ib(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=a.createElement(n,{is:o.is}):(e=a.createElement(n),n==="select"&&(a=e,o.multiple?a.multiple=!0:o.size&&(a.size=o.size))):e=a.createElementNS(e,n),e[gn]=r,e[xs]=o,Zm(e,r,!1,!1),r.stateNode=e;e:{switch(a=$d(n,o),n){case"dialog":Bt("cancel",e),Bt("close",e),i=o;break;case"iframe":case"object":case"embed":Bt("load",e),i=o;break;case"video":case"audio":for(i=0;i<Oi.length;i++)Bt(Oi[i],e);i=o;break;case"source":Bt("error",e),i=o;break;case"img":case"image":case"link":Bt("error",e),Bt("load",e),i=o;break;case"details":Bt("toggle",e),i=o;break;case"input":Qg(e,o),i=Ad(e,o),Bt("invalid",e);break;case"option":i=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},i=$t({},o,{value:void 0}),Bt("invalid",e);break;case"textarea":qg(e,o),i=Md(e,o),Bt("invalid",e);break;default:i=o}Ld(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var d=l[s];s==="style"?Eb(e,d):s==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Bb(e,d)):s==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&ds(e,d):typeof d=="number"&&ds(e,""+d):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ls.hasOwnProperty(s)?d!=null&&s==="onScroll"&&Bt("scroll",e):d!=null&&Oc(e,s,d,a))}switch(n){case"input":Os(e),Xg(e,o,!1);break;case"textarea":Os(e),Zg(e);break;case"option":o.value!=null&&e.setAttribute("value",""+lo(o.value));break;case"select":e.multiple=!!o.multiple,s=o.value,s!=null?si(e,!!o.multiple,s,!1):o.defaultValue!=null&&si(e,!!o.multiple,o.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ga)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return sr(r),null;case 6:if(e&&r.stateNode!=null)eh(e,r,e.memoizedProps,o);else{if(typeof o!="string"&&r.stateNode===null)throw Error(Te(166));if(n=To(vs.current),To(pn.current),Xs(r)){if(o=r.stateNode,n=r.memoizedProps,o[gn]=r,(s=o.nodeValue!==n)&&(e=Er,e!==null))switch(e.tag){case 3:Qs(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qs(o.nodeValue,n,(e.mode&1)!==0)}s&&(r.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[gn]=r,r.stateNode=o}return sr(r),null;case 13:if(Rt(_t),o=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ft&&Rr!==null&&r.mode&1&&!(r.flags&128))xm(),hi(),r.flags|=98560,s=!1;else if(s=Xs(r),o!==null&&o.dehydrated!==null){if(e===null){if(!s)throw Error(Te(318));if(s=r.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Te(317));s[gn]=r}else hi(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;sr(r),s=!1}else Zr!==null&&(yc(Zr),Zr=null),s=!0;if(!s)return r.flags&65536?r:null}return r.flags&128?(r.lanes=n,r):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(r.child.flags|=8192,r.mode&1&&(e===null||_t.current&1?Xt===0&&(Xt=3):wg())),r.updateQueue!==null&&(r.flags|=4),sr(r),null);case 4:return xi(),gc(e,r),e===null&&hs(r.stateNode.containerInfo),sr(r),null;case 10:return sg(r.type._context),sr(r),null;case 17:return wr(r.type)&&Ua(),sr(r),null;case 19:if(Rt(_t),s=r.memoizedState,s===null)return sr(r),null;if(o=(r.flags&128)!==0,a=s.rendering,a===null)if(o)Di(s,!1);else{if(Xt!==0||e!==null&&e.flags&128)for(e=r.child;e!==null;){if(a=Za(e),a!==null){for(r.flags|=128,Di(s,!1),o=a.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),r.subtreeFlags=0,o=n,n=r.child;n!==null;)s=n,e=o,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return It(_t,_t.current&1|2),r.child}e=e.sibling}s.tail!==null&&Nt()>vi&&(r.flags|=128,o=!0,Di(s,!1),r.lanes=4194304)}else{if(!o)if(e=Za(a),e!==null){if(r.flags|=128,o=!0,n=e.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),Di(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Ft)return sr(r),null}else 2*Nt()-s.renderingStartTime>vi&&n!==1073741824&&(r.flags|=128,o=!0,Di(s,!1),r.lanes=4194304);s.isBackwards?(a.sibling=r.child,r.child=a):(n=s.last,n!==null?n.sibling=a:r.child=a,s.last=a)}return s.tail!==null?(r=s.tail,s.rendering=r,s.tail=r.sibling,s.renderingStartTime=Nt(),r.sibling=null,n=_t.current,It(_t,o?n&1|2:n&1),r):(sr(r),null);case 22:case 23:return kg(),o=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(r.flags|=8192),o&&r.mode&1?Br&1073741824&&(sr(r),r.subtreeFlags&6&&(r.flags|=8192)):sr(r),null;case 24:return null;case 25:return null}throw Error(Te(156,r.tag))}function jy(e,r){switch(rg(r),r.tag){case 1:return wr(r.type)&&Ua(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return xi(),Rt(kr),Rt(gr),gg(),e=r.flags,e&65536&&!(e&128)?(r.flags=e&-65537|128,r):null;case 5:return cg(r),null;case 13:if(Rt(_t),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(Te(340));hi()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return Rt(_t),null;case 4:return xi(),null;case 10:return sg(r.type._context),null;case 22:case 23:return kg(),null;case 24:return null;default:return null}}var Js=!1,dr=!1,ky=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function oi(e,r){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){Pt(e,r,o)}else n.current=null}function uc(e,r,n){try{n()}catch(o){Pt(e,r,o)}}var Ou=!1;function wy(e,r){if(Qd=Oa,e=im(),eg(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var i=o.anchorOffset,s=o.focusNode;o=o.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,d=-1,g=0,m=0,f=e,h=null;t:for(;;){for(var T;f!==n||i!==0&&f.nodeType!==3||(l=a+i),f!==s||o!==0&&f.nodeType!==3||(d=a+o),f.nodeType===3&&(a+=f.nodeValue.length),(T=f.firstChild)!==null;)h=f,f=T;for(;;){if(f===e)break t;if(h===n&&++g===i&&(l=a),h===s&&++m===o&&(d=a),(T=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=T}n=l===-1||d===-1?null:{start:l,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xd={focusedElem:e,selectionRange:n},Oa=!1,Pe=r;Pe!==null;)if(r=Pe,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,Pe=e;else for(;Pe!==null;){r=Pe;try{var D=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(D!==null){var I=D.memoizedProps,z=D.memoizedState,b=r.stateNode,p=b.getSnapshotBeforeUpdate(r.elementType===r.type?I:Xr(r.type,I),z);b.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var u=r.stateNode.containerInfo;u.nodeType===1?u.textContent="":u.nodeType===9&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Te(163))}}catch(y){Pt(r,r.return,y)}if(e=r.sibling,e!==null){e.return=r.return,Pe=e;break}Pe=r.return}return D=Ou,Ou=!1,D}function Ji(e,r,n){var o=r.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var i=o=o.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&uc(r,n,s)}i=i.next}while(i!==o)}}function kl(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==r)}}function pc(e){var r=e.ref;if(r!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof r=="function"?r(e):r.current=e}}function th(e){var r=e.alternate;r!==null&&(e.alternate=null,th(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[gn],delete r[xs],delete r[Jd],delete r[iy],delete r[sy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function rh(e){return e.tag===5||e.tag===3||e.tag===4}function Nu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||rh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bc(e,r,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?n.nodeType===8?n.parentNode.insertBefore(e,r):n.insertBefore(e,r):(n.nodeType===8?(r=n.parentNode,r.insertBefore(e,n)):(r=n,r.appendChild(e)),n=n._reactRootContainer,n!=null||r.onclick!==null||(r.onclick=Ga));else if(o!==4&&(e=e.child,e!==null))for(bc(e,r,n),e=e.sibling;e!==null;)bc(e,r,n),e=e.sibling}function mc(e,r,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?n.insertBefore(e,r):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(mc(e,r,n),e=e.sibling;e!==null;)mc(e,r,n),e=e.sibling}var tr=null,qr=!1;function $n(e,r,n){for(n=n.child;n!==null;)nh(e,r,n),n=n.sibling}function nh(e,r,n){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(bl,n)}catch{}switch(n.tag){case 5:dr||oi(n,r);case 6:var o=tr,i=qr;tr=null,$n(e,r,n),tr=o,qr=i,tr!==null&&(qr?(e=tr,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):tr.removeChild(n.stateNode));break;case 18:tr!==null&&(qr?(e=tr,n=n.stateNode,e.nodeType===8?Ql(e.parentNode,n):e.nodeType===1&&Ql(e,n),ps(e)):Ql(tr,n.stateNode));break;case 4:o=tr,i=qr,tr=n.stateNode.containerInfo,qr=!0,$n(e,r,n),tr=o,qr=i;break;case 0:case 11:case 14:case 15:if(!dr&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){i=o=o.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&uc(n,r,a),i=i.next}while(i!==o)}$n(e,r,n);break;case 1:if(!dr&&(oi(n,r),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(l){Pt(n,r,l)}$n(e,r,n);break;case 21:$n(e,r,n);break;case 22:n.mode&1?(dr=(o=dr)||n.memoizedState!==null,$n(e,r,n),dr=o):$n(e,r,n);break;default:$n(e,r,n)}}function Hu(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ky),r.forEach(function(o){var i=Dy.bind(null,e,o);n.has(o)||(n.add(o),o.then(i,i))})}}function Vr(e,r){var n=r.deletions;if(n!==null)for(var o=0;o<n.length;o++){var i=n[o];try{var s=e,a=r,l=a;e:for(;l!==null;){switch(l.tag){case 5:tr=l.stateNode,qr=!1;break e;case 3:tr=l.stateNode.containerInfo,qr=!0;break e;case 4:tr=l.stateNode.containerInfo,qr=!0;break e}l=l.return}if(tr===null)throw Error(Te(160));nh(s,a,i),tr=null,qr=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(g){Pt(i,r,g)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)oh(r,e),r=r.sibling}function oh(e,r){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Vr(r,e),on(e),o&4){try{Ji(3,e,e.return),kl(3,e)}catch(I){Pt(e,e.return,I)}try{Ji(5,e,e.return)}catch(I){Pt(e,e.return,I)}}break;case 1:Vr(r,e),on(e),o&512&&n!==null&&oi(n,n.return);break;case 5:if(Vr(r,e),on(e),o&512&&n!==null&&oi(n,n.return),e.flags&32){var i=e.stateNode;try{ds(i,"")}catch(I){Pt(e,e.return,I)}}if(o&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,l=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Tb(i,s),$d(l,a);var g=$d(l,s);for(a=0;a<d.length;a+=2){var m=d[a],f=d[a+1];m==="style"?Eb(i,f):m==="dangerouslySetInnerHTML"?Bb(i,f):m==="children"?ds(i,f):Oc(i,m,f,g)}switch(l){case"input":Fd(i,s);break;case"textarea":zb(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var T=s.value;T!=null?si(i,!!s.multiple,T,!1):h!==!!s.multiple&&(s.defaultValue!=null?si(i,!!s.multiple,s.defaultValue,!0):si(i,!!s.multiple,s.multiple?[]:"",!1))}i[xs]=s}catch(I){Pt(e,e.return,I)}}break;case 6:if(Vr(r,e),on(e),o&4){if(e.stateNode===null)throw Error(Te(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(I){Pt(e,e.return,I)}}break;case 3:if(Vr(r,e),on(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{ps(r.containerInfo)}catch(I){Pt(e,e.return,I)}break;case 4:Vr(r,e),on(e);break;case 13:Vr(r,e),on(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(vg=Nt())),o&4&&Hu(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(dr=(g=dr)||m,Vr(r,e),dr=g):Vr(r,e),on(e),o&8192){if(g=e.memoizedState!==null,(e.stateNode.isHidden=g)&&!m&&e.mode&1)for(Pe=e,m=e.child;m!==null;){for(f=Pe=m;Pe!==null;){switch(h=Pe,T=h.child,h.tag){case 0:case 11:case 14:case 15:Ji(4,h,h.return);break;case 1:oi(h,h.return);var D=h.stateNode;if(typeof D.componentWillUnmount=="function"){o=h,n=h.return;try{r=o,D.props=r.memoizedProps,D.state=r.memoizedState,D.componentWillUnmount()}catch(I){Pt(o,n,I)}}break;case 5:oi(h,h.return);break;case 22:if(h.memoizedState!==null){Uu(f);continue}}T!==null?(T.return=h,Pe=T):Uu(f)}m=m.sibling}e:for(m=null,f=e;;){if(f.tag===5){if(m===null){m=f;try{i=f.stateNode,g?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,d=f.memoizedProps.style,a=d!=null&&d.hasOwnProperty("display")?d.display:null,l.style.display=Rb("display",a))}catch(I){Pt(e,e.return,I)}}}else if(f.tag===6){if(m===null)try{f.stateNode.nodeValue=g?"":f.memoizedProps}catch(I){Pt(e,e.return,I)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;m===f&&(m=null),f=f.return}m===f&&(m=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Vr(r,e),on(e),o&4&&Hu(e);break;case 21:break;default:Vr(r,e),on(e)}}function on(e){var r=e.flags;if(r&2){try{e:{for(var n=e.return;n!==null;){if(rh(n)){var o=n;break e}n=n.return}throw Error(Te(160))}switch(o.tag){case 5:var i=o.stateNode;o.flags&32&&(ds(i,""),o.flags&=-33);var s=Nu(e);mc(e,s,i);break;case 3:case 4:var a=o.stateNode.containerInfo,l=Nu(e);bc(e,l,a);break;default:throw Error(Te(161))}}catch(d){Pt(e,e.return,d)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function Sy(e,r,n){Pe=e,ih(e)}function ih(e,r,n){for(var o=(e.mode&1)!==0;Pe!==null;){var i=Pe,s=i.child;if(i.tag===22&&o){var a=i.memoizedState!==null||Js;if(!a){var l=i.alternate,d=l!==null&&l.memoizedState!==null||dr;l=Js;var g=dr;if(Js=a,(dr=d)&&!g)for(Pe=i;Pe!==null;)a=Pe,d=a.child,a.tag===22&&a.memoizedState!==null?Vu(i):d!==null?(d.return=a,Pe=d):Vu(i);for(;s!==null;)Pe=s,ih(s),s=s.sibling;Pe=i,Js=l,dr=g}Gu(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Pe=s):Gu(e)}}function Gu(e){for(;Pe!==null;){var r=Pe;if(r.flags&8772){var n=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:dr||kl(5,r);break;case 1:var o=r.stateNode;if(r.flags&4&&!dr)if(n===null)o.componentDidMount();else{var i=r.elementType===r.type?n.memoizedProps:Xr(r.type,n.memoizedProps);o.componentDidUpdate(i,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var s=r.updateQueue;s!==null&&Iu(r,s,o);break;case 3:var a=r.updateQueue;if(a!==null){if(n=null,r.child!==null)switch(r.child.tag){case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}Iu(r,a,n)}break;case 5:var l=r.stateNode;if(n===null&&r.flags&4){n=l;var d=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var g=r.alternate;if(g!==null){var m=g.memoizedState;if(m!==null){var f=m.dehydrated;f!==null&&ps(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Te(163))}dr||r.flags&512&&pc(r)}catch(h){Pt(r,r.return,h)}}if(r===e){Pe=null;break}if(n=r.sibling,n!==null){n.return=r.return,Pe=n;break}Pe=r.return}}function Uu(e){for(;Pe!==null;){var r=Pe;if(r===e){Pe=null;break}var n=r.sibling;if(n!==null){n.return=r.return,Pe=n;break}Pe=r.return}}function Vu(e){for(;Pe!==null;){var r=Pe;try{switch(r.tag){case 0:case 11:case 15:var n=r.return;try{kl(4,r)}catch(d){Pt(r,n,d)}break;case 1:var o=r.stateNode;if(typeof o.componentDidMount=="function"){var i=r.return;try{o.componentDidMount()}catch(d){Pt(r,i,d)}}var s=r.return;try{pc(r)}catch(d){Pt(r,s,d)}break;case 5:var a=r.return;try{pc(r)}catch(d){Pt(r,a,d)}}}catch(d){Pt(r,r.return,d)}if(r===e){Pe=null;break}var l=r.sibling;if(l!==null){l.return=r.return,Pe=l;break}Pe=r.return}}var Cy=Math.ceil,tl=Wn.ReactCurrentDispatcher,xg=Wn.ReactCurrentOwner,Hr=Wn.ReactCurrentBatchConfig,ft=0,Jt=null,Vt=null,rr=0,Br=0,ii=po(0),Xt=0,Ss=null,Ao=0,wl=0,yg=0,es=null,vr=null,vg=0,vi=1/0,kn=null,rl=!1,hc=null,no=null,ea=!1,qn=null,nl=0,ts=0,fc=null,Ra=-1,Ea=0;function mr(){return ft&6?Nt():Ra!==-1?Ra:Ra=Nt()}function oo(e){return e.mode&1?ft&2&&rr!==0?rr&-rr:ly.transition!==null?(Ea===0&&(Ea=Hb()),Ea):(e=Ct,e!==0||(e=window.event,e=e===void 0?16:Xb(e.type)),e):1}function en(e,r,n,o){if(50<ts)throw ts=0,fc=null,Error(Te(185));Ds(e,n,o),(!(ft&2)||e!==Jt)&&(e===Jt&&(!(ft&2)&&(wl|=n),Xt===4&&Kn(e,rr)),Sr(e,o),n===1&&ft===0&&!(r.mode&1)&&(vi=Nt()+500,yl&&bo()))}function Sr(e,r){var n=e.callbackNode;lx(e,r);var o=Pa(e,e===Jt?rr:0);if(o===0)n!==null&&tu(n),e.callbackNode=null,e.callbackPriority=0;else if(r=o&-o,e.callbackPriority!==r){if(n!=null&&tu(n),r===1)e.tag===0?ay(Yu.bind(null,e)):mm(Yu.bind(null,e)),ny(function(){!(ft&6)&&bo()}),n=null;else{switch(Gb(o)){case 1:n=Vc;break;case 4:n=Ob;break;case 16:n=$a;break;case 536870912:n=Nb;break;default:n=$a}n=ph(n,sh.bind(null,e))}e.callbackPriority=r,e.callbackNode=n}}function sh(e,r){if(Ra=-1,Ea=0,ft&6)throw Error(Te(327));var n=e.callbackNode;if(gi()&&e.callbackNode!==n)return null;var o=Pa(e,e===Jt?rr:0);if(o===0)return null;if(o&30||o&e.expiredLanes||r)r=ol(e,o);else{r=o;var i=ft;ft|=2;var s=lh();(Jt!==e||rr!==r)&&(kn=null,vi=Nt()+500,Io(e,r));do try{Iy();break}catch(l){ah(e,l)}while(!0);ig(),tl.current=s,ft=i,Vt!==null?r=0:(Jt=null,rr=0,r=Xt)}if(r!==0){if(r===2&&(i=Gd(e),i!==0&&(o=i,r=xc(e,i))),r===1)throw n=Ss,Io(e,0),Kn(e,o),Sr(e,Nt()),n;if(r===6)Kn(e,o);else{if(i=e.current.alternate,!(o&30)&&!Ty(i)&&(r=ol(e,o),r===2&&(s=Gd(e),s!==0&&(o=s,r=xc(e,s))),r===1))throw n=Ss,Io(e,0),Kn(e,o),Sr(e,Nt()),n;switch(e.finishedWork=i,e.finishedLanes=o,r){case 0:case 1:throw Error(Te(345));case 2:jo(e,vr,kn);break;case 3:if(Kn(e,o),(o&130023424)===o&&(r=vg+500-Nt(),10<r)){if(Pa(e,0)!==0)break;if(i=e.suspendedLanes,(i&o)!==o){mr(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Zd(jo.bind(null,e,vr,kn),r);break}jo(e,vr,kn);break;case 4:if(Kn(e,o),(o&4194240)===o)break;for(r=e.eventTimes,i=-1;0<o;){var a=31-Jr(o);s=1<<a,a=r[a],a>i&&(i=a),o&=~s}if(o=i,o=Nt()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Cy(o/1960))-o,10<o){e.timeoutHandle=Zd(jo.bind(null,e,vr,kn),o);break}jo(e,vr,kn);break;case 5:jo(e,vr,kn);break;default:throw Error(Te(329))}}}return Sr(e,Nt()),e.callbackNode===n?sh.bind(null,e):null}function xc(e,r){var n=es;return e.current.memoizedState.isDehydrated&&(Io(e,r).flags|=256),e=ol(e,r),e!==2&&(r=vr,vr=n,r!==null&&yc(r)),e}function yc(e){vr===null?vr=e:vr.push.apply(vr,e)}function Ty(e){for(var r=e;;){if(r.flags&16384){var n=r.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var i=n[o],s=i.getSnapshot;i=i.value;try{if(!tn(s(),i))return!1}catch{return!1}}}if(n=r.child,r.subtreeFlags&16384&&n!==null)n.return=r,r=n;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Kn(e,r){for(r&=~yg,r&=~wl,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var n=31-Jr(r),o=1<<n;e[n]=-1,r&=~o}}function Yu(e){if(ft&6)throw Error(Te(327));gi();var r=Pa(e,0);if(!(r&1))return Sr(e,Nt()),null;var n=ol(e,r);if(e.tag!==0&&n===2){var o=Gd(e);o!==0&&(r=o,n=xc(e,o))}if(n===1)throw n=Ss,Io(e,0),Kn(e,r),Sr(e,Nt()),n;if(n===6)throw Error(Te(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,jo(e,vr,kn),Sr(e,Nt()),null}function jg(e,r){var n=ft;ft|=1;try{return e(r)}finally{ft=n,ft===0&&(vi=Nt()+500,yl&&bo())}}function Fo(e){qn!==null&&qn.tag===0&&!(ft&6)&&gi();var r=ft;ft|=1;var n=Hr.transition,o=Ct;try{if(Hr.transition=null,Ct=1,e)return e()}finally{Ct=o,Hr.transition=n,ft=r,!(ft&6)&&bo()}}function kg(){Br=ii.current,Rt(ii)}function Io(e,r){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ry(n)),Vt!==null)for(n=Vt.return;n!==null;){var o=n;switch(rg(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Ua();break;case 3:xi(),Rt(kr),Rt(gr),gg();break;case 5:cg(o);break;case 4:xi();break;case 13:Rt(_t);break;case 19:Rt(_t);break;case 10:sg(o.type._context);break;case 22:case 23:kg()}n=n.return}if(Jt=e,Vt=e=io(e.current,null),rr=Br=r,Xt=0,Ss=null,yg=wl=Ao=0,vr=es=null,Co!==null){for(r=0;r<Co.length;r++)if(n=Co[r],o=n.interleaved,o!==null){n.interleaved=null;var i=o.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,o.next=a}n.pending=o}Co=null}return e}function ah(e,r){do{var n=Vt;try{if(ig(),za.current=el,Ja){for(var o=Lt.memoizedState;o!==null;){var i=o.queue;i!==null&&(i.pending=null),o=o.next}Ja=!1}if(Do=0,Zt=Qt=Lt=null,Zi=!1,js=0,xg.current=null,n===null||n.return===null){Xt=1,Ss=r,Vt=null;break}e:{var s=e,a=n.return,l=n,d=r;if(r=rr,l.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var g=d,m=l,f=m.tag;if(!(m.mode&1)&&(f===0||f===11||f===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var T=Fu(a);if(T!==null){T.flags&=-257,Wu(T,a,l,s,r),T.mode&1&&Au(s,g,r),r=T,d=g;var D=r.updateQueue;if(D===null){var I=new Set;I.add(d),r.updateQueue=I}else D.add(d);break e}else{if(!(r&1)){Au(s,g,r),wg();break e}d=Error(Te(426))}}else if(Ft&&l.mode&1){var z=Fu(a);if(z!==null){!(z.flags&65536)&&(z.flags|=256),Wu(z,a,l,s,r),ng(yi(d,l));break e}}s=d=yi(d,l),Xt!==4&&(Xt=2),es===null?es=[s]:es.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,r&=-r,s.lanes|=r;var b=Gm(s,d,r);zu(s,b);break e;case 1:l=d;var p=s.type,u=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(no===null||!no.has(u)))){s.flags|=65536,r&=-r,s.lanes|=r;var y=Um(s,l,r);zu(s,y);break e}}s=s.return}while(s!==null)}ch(n)}catch(j){r=j,Vt===n&&n!==null&&(Vt=n=n.return);continue}break}while(!0)}function lh(){var e=tl.current;return tl.current=el,e===null?el:e}function wg(){(Xt===0||Xt===3||Xt===2)&&(Xt=4),Jt===null||!(Ao&268435455)&&!(wl&268435455)||Kn(Jt,rr)}function ol(e,r){var n=ft;ft|=2;var o=lh();(Jt!==e||rr!==r)&&(kn=null,Io(e,r));do try{zy();break}catch(i){ah(e,i)}while(!0);if(ig(),ft=n,tl.current=o,Vt!==null)throw Error(Te(261));return Jt=null,rr=0,Xt}function zy(){for(;Vt!==null;)dh(Vt)}function Iy(){for(;Vt!==null&&!Jf();)dh(Vt)}function dh(e){var r=uh(e.alternate,e,Br);e.memoizedProps=e.pendingProps,r===null?ch(e):Vt=r,xg.current=null}function ch(e){var r=e;do{var n=r.alternate;if(e=r.return,r.flags&32768){if(n=jy(n,r),n!==null){n.flags&=32767,Vt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Xt=6,Vt=null;return}}else if(n=vy(n,r,Br),n!==null){Vt=n;return}if(r=r.sibling,r!==null){Vt=r;return}Vt=r=e}while(r!==null);Xt===0&&(Xt=5)}function jo(e,r,n){var o=Ct,i=Hr.transition;try{Hr.transition=null,Ct=1,By(e,r,n,o)}finally{Hr.transition=i,Ct=o}return null}function By(e,r,n,o){do gi();while(qn!==null);if(ft&6)throw Error(Te(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(Te(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(dx(e,s),e===Jt&&(Vt=Jt=null,rr=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ea||(ea=!0,ph($a,function(){return gi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Hr.transition,Hr.transition=null;var a=Ct;Ct=1;var l=ft;ft|=4,xg.current=null,wy(e,n),oh(n,e),Qx(Xd),Oa=!!Qd,Xd=Qd=null,e.current=n,Sy(n),ex(),ft=l,Ct=a,Hr.transition=s}else e.current=n;if(ea&&(ea=!1,qn=e,nl=i),s=e.pendingLanes,s===0&&(no=null),nx(n.stateNode),Sr(e,Nt()),r!==null)for(o=e.onRecoverableError,n=0;n<r.length;n++)i=r[n],o(i.value,{componentStack:i.stack,digest:i.digest});if(rl)throw rl=!1,e=hc,hc=null,e;return nl&1&&e.tag!==0&&gi(),s=e.pendingLanes,s&1?e===fc?ts++:(ts=0,fc=e):ts=0,bo(),null}function gi(){if(qn!==null){var e=Gb(nl),r=Hr.transition,n=Ct;try{if(Hr.transition=null,Ct=16>e?16:e,qn===null)var o=!1;else{if(e=qn,qn=null,nl=0,ft&6)throw Error(Te(331));var i=ft;for(ft|=4,Pe=e.current;Pe!==null;){var s=Pe,a=s.child;if(Pe.flags&16){var l=s.deletions;if(l!==null){for(var d=0;d<l.length;d++){var g=l[d];for(Pe=g;Pe!==null;){var m=Pe;switch(m.tag){case 0:case 11:case 15:Ji(8,m,s)}var f=m.child;if(f!==null)f.return=m,Pe=f;else for(;Pe!==null;){m=Pe;var h=m.sibling,T=m.return;if(th(m),m===g){Pe=null;break}if(h!==null){h.return=T,Pe=h;break}Pe=T}}}var D=s.alternate;if(D!==null){var I=D.child;if(I!==null){D.child=null;do{var z=I.sibling;I.sibling=null,I=z}while(I!==null)}}Pe=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Pe=a;else e:for(;Pe!==null;){if(s=Pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ji(9,s,s.return)}var b=s.sibling;if(b!==null){b.return=s.return,Pe=b;break e}Pe=s.return}}var p=e.current;for(Pe=p;Pe!==null;){a=Pe;var u=a.child;if(a.subtreeFlags&2064&&u!==null)u.return=a,Pe=u;else e:for(a=p;Pe!==null;){if(l=Pe,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:kl(9,l)}}catch(j){Pt(l,l.return,j)}if(l===a){Pe=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,Pe=y;break e}Pe=l.return}}if(ft=i,bo(),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(bl,e)}catch{}o=!0}return o}finally{Ct=n,Hr.transition=r}}return!1}function Ku(e,r,n){r=yi(n,r),r=Gm(e,r,1),e=ro(e,r,1),r=mr(),e!==null&&(Ds(e,1,r),Sr(e,r))}function Pt(e,r,n){if(e.tag===3)Ku(e,e,n);else for(;r!==null;){if(r.tag===3){Ku(r,e,n);break}else if(r.tag===1){var o=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(no===null||!no.has(o))){e=yi(n,e),e=Um(r,e,1),r=ro(r,e,1),e=mr(),r!==null&&(Ds(r,1,e),Sr(r,e));break}}r=r.return}}function Ry(e,r,n){var o=e.pingCache;o!==null&&o.delete(r),r=mr(),e.pingedLanes|=e.suspendedLanes&n,Jt===e&&(rr&n)===n&&(Xt===4||Xt===3&&(rr&130023424)===rr&&500>Nt()-vg?Io(e,0):yg|=n),Sr(e,r)}function gh(e,r){r===0&&(e.mode&1?(r=Gs,Gs<<=1,!(Gs&130023424)&&(Gs=4194304)):r=1);var n=mr();e=Dn(e,r),e!==null&&(Ds(e,r,n),Sr(e,n))}function Ey(e){var r=e.memoizedState,n=0;r!==null&&(n=r.retryLane),gh(e,n)}function Dy(e,r){var n=0;switch(e.tag){case 13:var o=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(Te(314))}o!==null&&o.delete(r),gh(e,n)}var uh;uh=function(e,r,n){if(e!==null)if(e.memoizedProps!==r.pendingProps||kr.current)jr=!0;else{if(!(e.lanes&n)&&!(r.flags&128))return jr=!1,yy(e,r,n);jr=!!(e.flags&131072)}else jr=!1,Ft&&r.flags&1048576&&hm(r,Ka,r.index);switch(r.lanes=0,r.tag){case 2:var o=r.type;Ba(e,r),e=r.pendingProps;var i=mi(r,gr.current);ci(r,n),i=pg(null,r,o,e,i,n);var s=bg();return r.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,wr(o)?(s=!0,Va(r)):s=!1,r.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,lg(r),i.updater=jl,r.stateNode=i,i._reactInternals=r,ic(r,o,e,n),r=lc(null,r,o,!0,s,n)):(r.tag=0,Ft&&s&&tg(r),ur(null,r,i,n),r=r.child),r;case 16:o=r.elementType;e:{switch(Ba(e,r),e=r.pendingProps,i=o._init,o=i(o._payload),r.type=o,i=r.tag=Fy(o),e=Xr(o,e),i){case 0:r=ac(null,r,o,e,n);break e;case 1:r=Lu(null,r,o,e,n);break e;case 11:r=Mu(null,r,o,e,n);break e;case 14:r=_u(null,r,o,Xr(o.type,e),n);break e}throw Error(Te(306,o,""))}return r;case 0:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Xr(o,i),ac(e,r,o,i,n);case 1:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Xr(o,i),Lu(e,r,o,i,n);case 3:e:{if(Qm(r),e===null)throw Error(Te(387));o=r.pendingProps,s=r.memoizedState,i=s.element,km(e,r),qa(r,o,null,n);var a=r.memoizedState;if(o=a.element,s.isDehydrated)if(s={element:o,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},r.updateQueue.baseState=s,r.memoizedState=s,r.flags&256){i=yi(Error(Te(423)),r),r=$u(e,r,o,n,i);break e}else if(o!==i){i=yi(Error(Te(424)),r),r=$u(e,r,o,n,i);break e}else for(Rr=to(r.stateNode.containerInfo.firstChild),Er=r,Ft=!0,Zr=null,n=vm(r,null,o,n),r.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hi(),o===i){r=An(e,r,n);break e}ur(e,r,o,n)}r=r.child}return r;case 5:return wm(r),e===null&&rc(r),o=r.type,i=r.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,qd(o,i)?a=null:s!==null&&qd(o,s)&&(r.flags|=32),Km(e,r),ur(e,r,a,n),r.child;case 6:return e===null&&rc(r),null;case 13:return Xm(e,r,n);case 4:return dg(r,r.stateNode.containerInfo),o=r.pendingProps,e===null?r.child=fi(r,null,o,n):ur(e,r,o,n),r.child;case 11:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Xr(o,i),Mu(e,r,o,i,n);case 7:return ur(e,r,r.pendingProps,n),r.child;case 8:return ur(e,r,r.pendingProps.children,n),r.child;case 12:return ur(e,r,r.pendingProps.children,n),r.child;case 10:e:{if(o=r.type._context,i=r.pendingProps,s=r.memoizedProps,a=i.value,It(Qa,o._currentValue),o._currentValue=a,s!==null)if(tn(s.value,a)){if(s.children===i.children&&!kr.current){r=An(e,r,n);break e}}else for(s=r.child,s!==null&&(s.return=r);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var d=l.firstContext;d!==null;){if(d.context===o){if(s.tag===1){d=Bn(-1,n&-n),d.tag=2;var g=s.updateQueue;if(g!==null){g=g.shared;var m=g.pending;m===null?d.next=d:(d.next=m.next,m.next=d),g.pending=d}}s.lanes|=n,d=s.alternate,d!==null&&(d.lanes|=n),nc(s.return,n,r),l.lanes|=n;break}d=d.next}}else if(s.tag===10)a=s.type===r.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(Te(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),nc(a,n,r),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===r){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}ur(e,r,i.children,n),r=r.child}return r;case 9:return i=r.type,o=r.pendingProps.children,ci(r,n),i=Gr(i),o=o(i),r.flags|=1,ur(e,r,o,n),r.child;case 14:return o=r.type,i=Xr(o,r.pendingProps),i=Xr(o.type,i),_u(e,r,o,i,n);case 15:return Vm(e,r,r.type,r.pendingProps,n);case 17:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Xr(o,i),Ba(e,r),r.tag=1,wr(o)?(e=!0,Va(r)):e=!1,ci(r,n),Hm(r,o,i),ic(r,o,i,n),lc(null,r,o,!0,e,n);case 19:return qm(e,r,n);case 22:return Ym(e,r,n)}throw Error(Te(156,r.tag))};function ph(e,r){return Pb(e,r)}function Ay(e,r,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nr(e,r,n,o){return new Ay(e,r,n,o)}function Sg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fy(e){if(typeof e=="function")return Sg(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Hc)return 11;if(e===Gc)return 14}return 2}function io(e,r){var n=e.alternate;return n===null?(n=Nr(e.tag,r,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=r,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,r=e.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Da(e,r,n,o,i,s){var a=2;if(o=e,typeof e=="function")Sg(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Qo:return Bo(n.children,i,s,r);case Nc:a=8,i|=8;break;case Bd:return e=Nr(12,n,r,i|2),e.elementType=Bd,e.lanes=s,e;case Rd:return e=Nr(13,n,r,i),e.elementType=Rd,e.lanes=s,e;case Ed:return e=Nr(19,n,r,i),e.elementType=Ed,e.lanes=s,e;case wb:return Sl(n,i,s,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case jb:a=10;break e;case kb:a=9;break e;case Hc:a=11;break e;case Gc:a=14;break e;case Gn:a=16,o=null;break e}throw Error(Te(130,e==null?e:typeof e,""))}return r=Nr(a,n,r,i),r.elementType=e,r.type=o,r.lanes=s,r}function Bo(e,r,n,o){return e=Nr(7,e,o,r),e.lanes=n,e}function Sl(e,r,n,o){return e=Nr(22,e,o,r),e.elementType=wb,e.lanes=n,e.stateNode={isHidden:!1},e}function nd(e,r,n){return e=Nr(6,e,null,r),e.lanes=n,e}function od(e,r,n){return r=Nr(4,e.children!==null?e.children:[],e.key,r),r.lanes=n,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function Wy(e,r,n,o,i){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ll(0),this.expirationTimes=Ll(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ll(0),this.identifierPrefix=o,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Cg(e,r,n,o,i,s,a,l,d){return e=new Wy(e,r,n,l,d),r===1?(r=1,s===!0&&(r|=8)):r=0,s=Nr(3,null,null,r),e.current=s,s.stateNode=e,s.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},lg(s),e}function My(e,r,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ko,key:o==null?null:""+o,children:e,containerInfo:r,implementation:n}}function bh(e){if(!e)return co;e=e._reactInternals;e:{if(Mo(e)!==e||e.tag!==1)throw Error(Te(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(wr(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(Te(171))}if(e.tag===1){var n=e.type;if(wr(n))return bm(e,n,r)}return r}function mh(e,r,n,o,i,s,a,l,d){return e=Cg(n,o,!0,e,i,s,a,l,d),e.context=bh(null),n=e.current,o=mr(),i=oo(n),s=Bn(o,i),s.callback=r??null,ro(n,s,i),e.current.lanes=i,Ds(e,i,o),Sr(e,o),e}function Cl(e,r,n,o){var i=r.current,s=mr(),a=oo(i);return n=bh(n),r.context===null?r.context=n:r.pendingContext=n,r=Bn(s,a),r.payload={element:e},o=o===void 0?null:o,o!==null&&(r.callback=o),e=ro(i,r,a),e!==null&&(en(e,i,a,s),Ta(e,i,a)),a}function il(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Qu(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<r?n:r}}function Tg(e,r){Qu(e,r),(e=e.alternate)&&Qu(e,r)}function _y(){return null}var hh=typeof reportError=="function"?reportError:function(e){console.error(e)};function zg(e){this._internalRoot=e}Tl.prototype.render=zg.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(Te(409));Cl(e,r,null,null)};Tl.prototype.unmount=zg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;Fo(function(){Cl(null,e,null,null)}),r[En]=null}};function Tl(e){this._internalRoot=e}Tl.prototype.unstable_scheduleHydration=function(e){if(e){var r=Yb();e={blockedOn:null,target:e,priority:r};for(var n=0;n<Yn.length&&r!==0&&r<Yn[n].priority;n++);Yn.splice(n,0,e),n===0&&Qb(e)}};function Ig(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xu(){}function Ly(e,r,n,o,i){if(i){if(typeof o=="function"){var s=o;o=function(){var g=il(a);s.call(g)}}var a=mh(r,o,e,0,null,!1,!1,"",Xu);return e._reactRootContainer=a,e[En]=a.current,hs(e.nodeType===8?e.parentNode:e),Fo(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof o=="function"){var l=o;o=function(){var g=il(d);l.call(g)}}var d=Cg(e,0,!1,null,null,!1,!1,"",Xu);return e._reactRootContainer=d,e[En]=d.current,hs(e.nodeType===8?e.parentNode:e),Fo(function(){Cl(r,d,n,o)}),d}function Il(e,r,n,o,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var l=i;i=function(){var d=il(a);l.call(d)}}Cl(r,a,e,i)}else a=Ly(n,r,e,i,o);return il(a)}Ub=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var n=Pi(r.pendingLanes);n!==0&&(Yc(r,n|1),Sr(r,Nt()),!(ft&6)&&(vi=Nt()+500,bo()))}break;case 13:Fo(function(){var o=Dn(e,1);if(o!==null){var i=mr();en(o,e,1,i)}}),Tg(e,1)}};Kc=function(e){if(e.tag===13){var r=Dn(e,134217728);if(r!==null){var n=mr();en(r,e,134217728,n)}Tg(e,134217728)}};Vb=function(e){if(e.tag===13){var r=oo(e),n=Dn(e,r);if(n!==null){var o=mr();en(n,e,r,o)}Tg(e,r)}};Yb=function(){return Ct};Kb=function(e,r){var n=Ct;try{return Ct=e,r()}finally{Ct=n}};Od=function(e,r,n){switch(r){case"input":if(Fd(e,n),r=n.name,n.type==="radio"&&r!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<n.length;r++){var o=n[r];if(o!==e&&o.form===e.form){var i=xl(o);if(!i)throw Error(Te(90));Cb(o),Fd(o,i)}}}break;case"textarea":zb(e,n);break;case"select":r=n.value,r!=null&&si(e,!!n.multiple,r,!1)}};Fb=jg;Wb=Fo;var $y={usingClientEntryPoint:!1,Events:[Fs,Jo,xl,Db,Ab,jg]},Ai={findFiberByHostInstance:So,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Py={bundleType:Ai.bundleType,version:Ai.version,rendererPackageName:Ai.rendererPackageName,rendererConfig:Ai.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Lb(e),e===null?null:e.stateNode},findFiberByHostInstance:Ai.findFiberByHostInstance||_y,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ta=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ta.isDisabled&&ta.supportsFiber)try{bl=ta.inject(Py),un=ta}catch{}}Ar.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$y;Ar.createPortal=function(e,r){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ig(r))throw Error(Te(200));return My(e,r,null,n)};Ar.createRoot=function(e,r){if(!Ig(e))throw Error(Te(299));var n=!1,o="",i=hh;return r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),r=Cg(e,1,!1,null,null,n,!1,o,i),e[En]=r.current,hs(e.nodeType===8?e.parentNode:e),new zg(r)};Ar.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(Te(188)):(e=Object.keys(e).join(","),Error(Te(268,e)));return e=Lb(r),e=e===null?null:e.stateNode,e};Ar.flushSync=function(e){return Fo(e)};Ar.hydrate=function(e,r,n){if(!zl(r))throw Error(Te(200));return Il(null,e,r,!0,n)};Ar.hydrateRoot=function(e,r,n){if(!Ig(e))throw Error(Te(405));var o=n!=null&&n.hydratedSources||null,i=!1,s="",a=hh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),r=mh(r,null,e,1,n??null,i,!1,s,a),e[En]=r.current,hs(e),o)for(e=0;e<o.length;e++)n=o[e],i=n._getVersion,i=i(n._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[n,i]:r.mutableSourceEagerHydrationData.push(n,i);return new Tl(r)};Ar.render=function(e,r,n){if(!zl(r))throw Error(Te(200));return Il(null,e,r,!1,n)};Ar.unmountComponentAtNode=function(e){if(!zl(e))throw Error(Te(40));return e._reactRootContainer?(Fo(function(){Il(null,null,e,!1,function(){e._reactRootContainer=null,e[En]=null})}),!0):!1};Ar.unstable_batchedUpdates=jg;Ar.unstable_renderSubtreeIntoContainer=function(e,r,n,o){if(!zl(n))throw Error(Te(200));if(e==null||e._reactInternals===void 0)throw Error(Te(38));return Il(e,r,n,!1,o)};Ar.version="18.3.1-next-f1338f8080-20240426";function fh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fh)}catch(e){console.error(e)}}fh(),fb.exports=Ar;var Oy=fb.exports,xh,qu=Oy;xh=qu.createRoot,qu.hydrateRoot;/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),yh=(...e)=>e.filter((r,n,o)=>!!r&&r.trim()!==""&&o.indexOf(r)===n).join(" ").trim();/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Hy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=c.forwardRef(({color:e="currentColor",size:r=24,strokeWidth:n=2,absoluteStrokeWidth:o,className:i="",children:s,iconNode:a,...l},d)=>c.createElement("svg",{ref:d,...Hy,width:r,height:r,stroke:e,strokeWidth:o?Number(n)*24/Number(r):n,className:yh("lucide",i),...l},[...a.map(([g,m])=>c.createElement(g,m)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=(e,r)=>{const n=c.forwardRef(({className:o,...i},s)=>c.createElement(Gy,{ref:s,iconNode:r,className:yh(`lucide-${Ny(e)}`,o),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=ue("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=ue("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=ue("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=ue("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=ue("Baby",[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=ue("BellOff",[["path",{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5",key:"o7mx20"}],["path",{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7",key:"16f1lm"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=ue("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=ue("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ms=ue("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=ue("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=ue("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=ue("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=ue("Bus",[["path",{d:"M8 6v6",key:"18i7km"}],["path",{d:"M15 6v6",key:"1sg6z9"}],["path",{d:"M2 12h19.6",key:"de5uta"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",key:"1wwztk"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M9 18h5",key:"lrx6i"}],["circle",{cx:"16",cy:"18",r:"2",key:"1v4tcr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=ue("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=ue("CalendarClock",[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M17.5 17.5 16 16.3V14",key:"akvzfd"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=ue("CalendarPlus",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=ue("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=ue("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=ue("Carrot",[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46",key:"rfqxbe"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z",key:"6b25w4"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z",key:"fn65lo"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=ue("ChartCandlestick",[["path",{d:"M9 5v4",key:"14uxtq"}],["rect",{width:"4",height:"6",x:"7",y:"9",rx:"1",key:"f4fvz0"}],["path",{d:"M9 15v2",key:"r5rk32"}],["path",{d:"M17 3v2",key:"1l2re6"}],["rect",{width:"4",height:"8",x:"15",y:"5",rx:"1",key:"z38je5"}],["path",{d:"M17 13v3",key:"5l0wba"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=ue("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=ue("ChartLine",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=ue("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=ue("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=ue("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=ue("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=ue("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=ue("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=ue("Clapperboard",[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",key:"1tn4o7"}],["path",{d:"m6.2 5.3 3.1 3.9",key:"iuk76l"}],["path",{d:"m12.4 3.4 3.1 4",key:"6hsd6n"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",key:"ltgou9"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=ue("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=ue("Coffee",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=ue("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=ue("Columns3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=ue("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=ue("Droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=ue("Dumbbell",[["path",{d:"M14.4 14.4 9.6 9.6",key:"ic80wn"}],["path",{d:"M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z",key:"nnl7wr"}],["path",{d:"m21.5 21.5-1.4-1.4",key:"1f1ice"}],["path",{d:"M3.9 3.9 2.5 2.5",key:"1evmna"}],["path",{d:"M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z",key:"yhosts"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=ue("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sl=ue("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cs=ue("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=ue("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=ue("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=ue("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=ue("Fuel",[["line",{x1:"3",x2:"15",y1:"22",y2:"22",key:"xegly4"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9",key:"xcnuvu"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",key:"16j0yd"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",key:"7cu91f"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=ue("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=ue("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=ue("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const al=ue("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=ue("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=ue("HeartPulse",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=ue("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zs=ue("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=ue("ImagePlus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=ue("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=ue("Images",[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18",key:"nf6bnh"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2",key:"12espp"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=ue("IndianRupee",[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zu=ue("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=ue("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=ue("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=ue("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=ue("LayoutList",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=ue("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Is=ue("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=ue("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ju=ue("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=ue("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=ue("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=ue("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=ue("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=ue("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=ue("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=ue("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=ue("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=ue("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=ue("PanelLeftOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=ue("PartyPopper",[["path",{d:"M5.8 11.3 2 22l10.7-3.79",key:"gwxi1d"}],["path",{d:"M4 3h.01",key:"1vcuye"}],["path",{d:"M22 8h.01",key:"1mrtc2"}],["path",{d:"M15 2h.01",key:"1cjtqr"}],["path",{d:"M22 20h.01",key:"1mrys2"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",key:"hbicv8"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17",key:"1i94pl"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7",key:"1cofks"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",key:"4kbmks"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=ue("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=ue("PawPrint",[["circle",{cx:"11",cy:"4",r:"2",key:"vol9p0"}],["circle",{cx:"18",cy:"8",r:"2",key:"17gozi"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",key:"1ydw1z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=ue("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=ue("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=ue("PiggyBank",[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z",key:"1ivx2i"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h.01",key:"xkw8gn"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=ue("Pill",[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=ue("Plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ll=ue("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=ue("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=ue("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=ue("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=ue("ReceiptText",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=ue("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=ue("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=ue("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=ue("Scissors",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=ue("ScrollText",[["path",{d:"M15 12h-5",key:"r7krc0"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=ue("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=ue("Shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=ue("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=ue("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=ue("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=ue("Sprout",[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=ue("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aa=ue("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=ue("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=ue("Sunrise",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=ue("Swords",[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5",key:"hbey2j"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18",key:"1hf58s"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20",key:"pidxm4"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21",key:"1pehsh"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=ue("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=ue("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=ue("TramFront",[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M12 3v8",key:"1h2ygw"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m18 22-2-3",key:"1p0ohu"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M16 15h.01",key:"rnfrdf"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji=ue("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=ue("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const so=ue("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=ue("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=ue("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=ue("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=ue("Tv",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=ue("Undo2",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=ue("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=ue("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=ue("WashingMachine",[["path",{d:"M3 6h3",key:"155dbl"}],["path",{d:"M17 6h.01",key:"e2y6kg"}],["rect",{width:"18",height:"20",x:"3",y:"2",rx:"2",key:"od3kk9"}],["circle",{cx:"12",cy:"13",r:"5",key:"nlbqau"}],["path",{d:"M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5",key:"17lach"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=ue("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=ue("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=ue("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=ue("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=ue("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Lg="anvil_token",Uh=()=>localStorage.getItem(Lg),K0=e=>localStorage.setItem(Lg,e),kc=()=>localStorage.removeItem(Lg),te=async(e,r,n)=>{const o={};n!==void 0&&(o["Content-Type"]="application/json");const i=Uh();i&&(o.Authorization=`Bearer ${i}`);const s=await fetch(`/api${r}`,{method:e,headers:o,body:n!==void 0?JSON.stringify(n):void 0});if(s.status===401)throw kc(),window.dispatchEvent(new Event("anvil-unauthorized")),new Error("Not authenticated");if(s.status===204)return null;if(!s.ok){const a=await s.text();let l=a;try{l=JSON.parse(a).detail||a}catch{}throw new Error(l||`HTTP ${s.status}`)}return s.json()},_={me:()=>te("GET","/auth/me"),signInWithGoogle:()=>{window.location.href="/api/auth/google"},getPillars:()=>te("GET","/pillars"),getFocus:()=>te("GET","/focus"),createFocus:e=>te("POST","/focus",e),deleteFocus:e=>te("DELETE",`/focus/${e}`),addScreenTime:(e,r)=>te("POST","/screentime",{screen:e,seconds:r}),getScreenTime:()=>te("GET","/screentime"),getPayouts:()=>te("GET","/rewards/payouts"),createPayout:e=>te("POST","/rewards/payouts",e),deletePayout:e=>te("DELETE",`/rewards/payouts/${e}`),getRewardRates:()=>te("GET","/rewards/rates"),setRewardRate:e=>te("POST","/rewards/rates",e),getMedia:()=>te("GET","/media"),createMedia:e=>te("POST","/media",e),updateMedia:(e,r)=>te("PUT",`/media/${e}`,r),deleteMedia:e=>te("DELETE",`/media/${e}`),restoreMedia:e=>te("POST",`/media/${e}/restore`),getDecks:()=>te("GET","/spiritual/decks"),createDeck:e=>te("POST","/spiritual/decks",e),deleteDeck:e=>te("DELETE",`/spiritual/decks/${e}`),getGoldenGoals:()=>te("GET","/golden/goals"),getGoldenGoal:e=>te("GET",`/golden/goals/${e}`),createGolden:e=>te("POST","/golden/goals",e),updateGolden:(e,r)=>te("PUT",`/golden/goals/${e}`,r),achieveGolden:e=>te("POST",`/golden/goals/${e}/achieve`),unachieveGolden:e=>te("POST",`/golden/goals/${e}/unachieve`),upsertGoldenEntry:(e,r)=>te("PUT",`/golden/goals/${e}/entry`,r),deleteGolden:e=>te("DELETE",`/golden/goals/${e}`),restoreGolden:e=>te("POST",`/golden/goals/${e}/restore`),logTesla369:e=>te("POST",`/golden/goals/${e}/369/log`),undoTesla369:e=>te("DELETE",`/golden/goals/${e}/369/log`),getKickstart:()=>te("GET","/kickstart/videos"),createKickstart:e=>te("POST","/kickstart/videos",e),updateKickstart:(e,r)=>te("PUT",`/kickstart/videos/${e}`,r),deleteKickstart:e=>te("DELETE",`/kickstart/videos/${e}`),restoreKickstart:e=>te("POST",`/kickstart/videos/${e}/restore`),getTxns:()=>te("GET","/finance/txns"),createTxn:e=>te("POST","/finance/txns",e),updateTxn:(e,r)=>te("PUT",`/finance/txns/${e}`,r),deleteTxn:e=>te("DELETE",`/finance/txns/${e}`),restoreTxn:e=>te("POST",`/finance/txns/${e}/restore`),getInvestments:()=>te("GET","/finance/investments"),createInvestment:e=>te("POST","/finance/investments",e),updateInvestment:(e,r)=>te("PUT",`/finance/investments/${e}`,r),deleteInvestment:e=>te("DELETE",`/finance/investments/${e}`),restoreInvestment:e=>te("POST",`/finance/investments/${e}/restore`),getFixedItems:()=>te("GET","/finance/fixed-items"),createFixedItem:e=>te("POST","/finance/fixed-items",e),updateFixedItem:(e,r)=>te("PUT",`/finance/fixed-items/${e}`,r),deleteFixedItem:e=>te("DELETE",`/finance/fixed-items/${e}`),getExpenses:()=>te("GET","/expenses"),createExpenseCategory:e=>te("POST","/expenses/categories",e),updateExpenseCategory:(e,r)=>te("PUT",`/expenses/categories/${e}`,r),arrangeExpenseCategories:e=>te("PUT","/expenses/categories/arrange",{order:e}),deleteExpenseCategory:e=>te("DELETE",`/expenses/categories/${e}`),createExpenseLog:e=>te("POST","/expenses/logs",e),updateExpenseLog:(e,r)=>te("PUT",`/expenses/logs/${e}`,r),deleteExpenseLog:e=>te("DELETE",`/expenses/logs/${e}`),restoreExpenseLog:e=>te("POST",`/expenses/logs/${e}/restore`),getTrades:()=>te("GET","/trades"),createTradeEntry:e=>te("POST","/trades/entries",e),updateTradeEntry:(e,r)=>te("PUT",`/trades/entries/${e}`,r),bookTradeEntry:(e,r,n)=>te("POST",`/trades/entries/${e}/book`,{outcome:r,date:n}),reopenTradeEntry:e=>te("POST",`/trades/entries/${e}/reopen`),deleteTradeEntry:e=>te("DELETE",`/trades/entries/${e}`),setTradeLearning:(e,r)=>te("PUT","/trades/learning",{date:e,learning:r}),getSetting:e=>te("GET",`/settings/${e}`),setSetting:(e,r)=>te("PUT",`/settings/${e}`,{value:r}),getTasks:()=>te("GET","/tasks"),createTask:e=>te("POST","/tasks",e),updateTask:(e,r)=>te("PUT",`/tasks/${e}`,r),deleteTask:e=>te("DELETE",`/tasks/${e}`),restoreTask:e=>te("POST",`/tasks/${e}/restore`),scheduleTask:e=>te("PUT",`/tasks/${e}/schedule`),getGoals:e=>te("GET",`/goals${e?`?pillar=${encodeURIComponent(e)}`:""}`),createGoal:e=>te("POST","/goals",e),updateGoal:(e,r)=>te("PUT",`/goals/${e}`,r),deleteGoal:e=>te("DELETE",`/goals/${e}`),restoreGoal:e=>te("POST",`/goals/${e}/restore`),getHabits:()=>te("GET","/habits"),createHabit:e=>te("POST","/habits",e),updateHabit:(e,r)=>te("PUT",`/habits/${e}`,r),deleteHabit:e=>te("DELETE",`/habits/${e}`),restoreHabit:e=>te("POST",`/habits/${e}/restore`),toggleHabitLog:(e,r)=>te("POST",`/habits/${e}/log/${r}`),setHabitLogNote:(e,r,n)=>te("PUT",`/habits/${e}/log/${r}/note`,{note:n}),setHabitLogCount:(e,r,n,o)=>te("PUT",`/habits/${e}/log/${r}/count`,{count:n,note:o}),incrementHabitLog:(e,r)=>te("POST",`/habits/${e}/log/${r}/increment`),clearHabitLog:(e,r)=>te("DELETE",`/habits/${e}/log/${r}`),getHabitsYearly:e=>te("GET",`/habits/yearly/${e}`),getJournalEntry:e=>te("GET",`/journal/${e}`),getJournalHistory:(e,r)=>te("GET",`/journal/history/${e}/${r}`),updateJournalMood:(e,r)=>te("PUT",`/journal/${e}`,{mood:r}),addJournalBullet:(e,r,n)=>te("POST",`/journal/${e}/bullets`,{section:r,text:n}),deleteJournalBullet:e=>te("DELETE",`/journal/bullets/${e}`),getSkills:()=>te("GET","/skills"),createSkill:e=>te("POST","/skills",e),updateSkill:(e,r)=>te("PUT",`/skills/${e}`,r),deleteSkill:e=>te("DELETE",`/skills/${e}`),restoreSkill:e=>te("POST",`/skills/${e}/restore`),addSkillNote:(e,r,n,o=null)=>te("POST",`/skills/${e}/notes`,{stage:r,text:n,grp:o}),setSkillGroups:(e,r)=>te("PUT",`/skills/${e}/groups`,{groups:r}),deleteSkillNote:e=>te("DELETE",`/skill-notes/${e}`),updateSkillNote:(e,r)=>te("PUT",`/skill-notes/${e}`,{text:r}),toggleSkillNote:e=>te("PUT",`/skill-notes/${e}/toggle`),completeSkillStage:(e,r)=>te("POST",`/skills/${e}/complete-stage`,{stage:r}),getScriptures:()=>te("GET","/scriptures"),createScripture:e=>te("POST","/scriptures",e),deleteScripture:e=>te("DELETE",`/scriptures/${e}`),restoreScripture:e=>te("POST",`/scriptures/${e}/restore`),addChapter:(e,r)=>te("POST",`/scriptures/${e}/chapters`,r),updateChapter:(e,r)=>te("PUT",`/chapters/${e}`,r),deleteChapter:e=>te("DELETE",`/chapters/${e}`),restoreChapter:e=>te("POST",`/chapters/${e}/restore`),addInsight:(e,r)=>te("POST",`/chapters/${e}/insights`,{text:r}),deleteInsight:e=>te("DELETE",`/insights/${e}`),getTopics:()=>te("GET","/revision/topics"),createTopic:e=>te("POST","/revision/topics",e),updateTopic:(e,r)=>te("PUT",`/revision/topics/${e}`,r),deleteTopic:e=>te("DELETE",`/revision/topics/${e}`),restoreTopic:e=>te("POST",`/revision/topics/${e}/restore`),getDueToday:()=>te("GET","/revision/due-today"),getCalendar:(e,r)=>te("GET",`/revision/calendar/${e}/${r}`),toggleReviewDone:e=>te("PUT",`/revision/reviews/${e}/done`),getAffirmations:()=>te("GET","/affirmations"),createAffirmation:e=>te("POST","/affirmations",e),updateAffirmation:(e,r)=>te("PUT",`/affirmations/${e}`,r),deleteAffirmation:e=>te("DELETE",`/affirmations/${e}`),restoreAffirmation:e=>te("POST",`/affirmations/${e}/restore`),getBucket:()=>te("GET","/bucket"),createBucketWish:e=>te("POST","/bucket",e),updateBucketWish:(e,r)=>te("PUT",`/bucket/${e}`,r),fulfillBucketWish:e=>te("POST",`/bucket/${e}/fulfill`),arrangeBucket:e=>te("PUT","/bucket/arrange",{order:e}),deleteBucketWish:e=>te("DELETE",`/bucket/${e}`),restoreBucketWish:e=>te("POST",`/bucket/${e}/restore`),getChallenges:()=>te("GET","/challenges"),createChallenge:e=>te("POST","/challenges",e),updateChallenge:(e,r)=>te("PUT",`/challenges/${e}`,r),deleteChallenge:e=>te("DELETE",`/challenges/${e}`),restoreChallenge:e=>te("POST",`/challenges/${e}/restore`),getAchievements:()=>te("GET","/achievements"),createAchievement:e=>te("POST","/achievements",e),updateAchievement:(e,r)=>te("PUT",`/achievements/${e}`,r),deleteAchievement:e=>te("DELETE",`/achievements/${e}`),restoreAchievement:e=>te("POST",`/achievements/${e}/restore`),getDelight:()=>te("GET","/delight"),createCollection:e=>te("POST","/delight/collections",e),updateCollection:(e,r)=>te("PUT",`/delight/collections/${e}`,r),deleteCollection:e=>te("DELETE",`/delight/collections/${e}`),restoreCollection:e=>te("POST",`/delight/collections/${e}/restore`),createDelightItem:(e,r)=>te("POST",`/delight/collections/${e}/items`,r),updateDelightItem:(e,r)=>te("PUT",`/delight/items/${e}`,r),deleteDelightItem:e=>te("DELETE",`/delight/items/${e}`),restoreDelightItem:e=>te("POST",`/delight/items/${e}/restore`),arrangeDelight:(e,r)=>te("PUT",`/delight/collections/${e}/arrange`,{order:r})},wc=[{code:"INR",symbol:"₹",locale:"en-IN",label:"Indian Rupee"},{code:"USD",symbol:"$",locale:"en-US",label:"US Dollar"},{code:"EUR",symbol:"€",locale:"de-DE",label:"Euro"},{code:"GBP",symbol:"£",locale:"en-GB",label:"British Pound"},{code:"JPY",symbol:"¥",locale:"ja-JP",label:"Japanese Yen"},{code:"AED",symbol:"د.إ",locale:"en-AE",label:"UAE Dirham"},{code:"AUD",symbol:"A$",locale:"en-AU",label:"Australian Dollar"},{code:"CAD",symbol:"C$",locale:"en-CA",label:"Canadian Dollar"},{code:"SGD",symbol:"S$",locale:"en-SG",label:"Singapore Dollar"}],ep="INR",Vh="anvil_currency",Dl=e=>wc.find(r=>r.code===e)||wc[0];function ki(){try{return localStorage.getItem(Vh)||ep}catch{return ep}}function tp(e){try{localStorage.setItem(Vh,e)}catch{}return window.dispatchEvent(new CustomEvent("anvil-currency",{detail:e})),e}function Bs(e,r){const n=Dl(r||ki()),o=Math.round(Number(e)||0);return n.symbol+o.toLocaleString(n.locale)}function _s(e,r){const n=Dl(r||ki()),o=Number(e)||0;return n.symbol+o.toLocaleString(n.locale,{minimumFractionDigits:2,maximumFractionDigits:2})}function Sc(e,r){const n=Dl(r||ki()),o=Math.round(Number(e)||0),i=Math.abs(o);return n.code==="INR"?i>=1e7?n.symbol+(o/1e7).toFixed(i>=1e8?0:1)+"Cr":i>=1e5?n.symbol+(o/1e5).toFixed(i>=1e6?0:1)+"L":i>=1e3?n.symbol+(o/1e3).toFixed(i>=1e4?0:1)+"K":n.symbol+o:i>=1e9?n.symbol+(o/1e9).toFixed(1)+"B":i>=1e6?n.symbol+(o/1e6).toFixed(1)+"M":i>=1e3?n.symbol+(o/1e3).toFixed(1)+"K":n.symbol+o}function ho(){const[e,r]=c.useState(ki());return c.useEffect(()=>{const n=o=>r(o.detail||ki());return window.addEventListener("anvil-currency",n),()=>window.removeEventListener("anvil-currency",n)},[]),Dl(e)}const Cc=1,Yh="anvil_month_start_day";function Tc(){try{return Number(localStorage.getItem(Yh))||Cc}catch{return Cc}}function rp(e){const r=Math.min(28,Math.max(1,Number(e)||Cc));try{localStorage.setItem(Yh,String(r))}catch{}return window.dispatchEvent(new CustomEvent("anvil-month-start",{detail:r})),r}function $g(){const[e,r]=c.useState(Tc());return c.useEffect(()=>{const n=o=>r(o.detail||Tc());return window.addEventListener("anvil-month-start",n),()=>window.removeEventListener("anvil-month-start",n)},[]),e}const np=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`;function lr(e,r,n=0){const o=e.getFullYear(),i=e.getMonth(),a=e.getDate()>=r?i:i-1,l=new Date(o,a+n,r),d=new Date(o,a+n+1,r-1);return[np(l),np(d)]}const op=0,Kh="anvil_day_start_hour";function Qh(){try{const e=parseInt(localStorage.getItem(Kh),10);return isNaN(e)?op:Math.min(23,Math.max(0,e))}catch{return op}}function zc(e){const r=Math.min(23,Math.max(0,Number(e)||0));try{localStorage.setItem(Kh,String(r))}catch{}return window.dispatchEvent(new CustomEvent("anvil-day-start",{detail:r})),r}const Q0=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`;function Lo(){return Q0(new Date(Date.now()-Qh()*36e5))}const pr={financial:{label:"Financial",leaf:"#C9A227",shape:"round"},academic:{label:"Academic",leaf:"#3A7CA5",shape:"pine"},relationship:{label:"Relationship",leaf:"#C2536B",shape:"round"},spiritual:{label:"Spiritual",leaf:"#8268B0",shape:"tall"},health:{label:"Health",leaf:"#4C9A6B",shape:"round"}},ao="health";function Pg({species:e=ao,progress:r=1,withered:n=!1,size:o=200}){const i=Math.max(0,Math.min(1,r)),s=pr[e]||pr[ao],a=n?"#8A7B63":"#7A5A3C",l=n?"#A99C84":s.leaf,d=n?"#8F8268":l,g=14+i*46,m=112-g,f=i>.14,h=f?8+i*30:0;return t.jsxs("svg",{viewBox:"0 0 120 120",width:o,height:o,style:{display:"block"},children:[t.jsx("ellipse",{cx:"60",cy:"114",rx:20+i*14,ry:"5",fill:"rgba(38,36,31,0.08)"}),!f&&t.jsxs("g",{transform:`translate(60 ${112-i*40})`,children:[t.jsx("path",{d:"M0 8 C0 8 0 -2 0 -6",stroke:"#4C9A6B",strokeWidth:"2.5",fill:"none"}),t.jsx("ellipse",{cx:"-5",cy:"-4",rx:"6",ry:"3.5",fill:"#4C9A6B",transform:"rotate(-30 -5 -4)"}),t.jsx("ellipse",{cx:"5",cy:"-4",rx:"6",ry:"3.5",fill:"#5BB07E",transform:"rotate(30 5 -4)"})]}),f&&t.jsxs(t.Fragment,{children:[t.jsx("rect",{x:60-(2+i*2.5),y:m,width:(2+i*2.5)*2,height:g,rx:"2",fill:a}),s.shape==="pine"?t.jsxs(t.Fragment,{children:[t.jsx("polygon",{points:`60,${m-h*2.2} ${60-h},${m+4} ${60+h},${m+4}`,fill:l}),t.jsx("polygon",{points:`60,${m-h*3} ${60-h*.8},${m-h*.7} ${60+h*.8},${m-h*.7}`,fill:d})]}):s.shape==="tall"?t.jsxs(t.Fragment,{children:[t.jsx("ellipse",{cx:"60",cy:m-h*.3,rx:h*.78,ry:h*1.55,fill:l}),t.jsx("ellipse",{cx:"60",cy:m-h*.9,rx:h*.5,ry:h*1,fill:d,opacity:"0.9"})]}):t.jsxs(t.Fragment,{children:[t.jsx("circle",{cx:"60",cy:m,r:h,fill:l}),t.jsx("circle",{cx:60-h*.7,cy:m+h*.3,r:h*.78,fill:l}),t.jsx("circle",{cx:60+h*.7,cy:m+h*.3,r:h*.78,fill:d}),t.jsx("circle",{cx:"60",cy:m-h*.5,r:h*.8,fill:d,opacity:"0.92"})]})]})]})}function X0({species:e}){return t.jsx(Pg,{species:e,progress:1,size:56})}const q0="modulepreload",Z0=function(e){return"/"+e},ip={},Ut=function(r,n,o){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(d=>{if(d=Z0(d),d in ip)return;ip[d]=!0;const g=d.endsWith(".css"),m=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${m}`))return;const f=document.createElement("link");if(f.rel=g?"stylesheet":q0,g||(f.as="script"),f.crossOrigin="",f.href=d,l&&f.setAttribute("nonce",l),document.head.appendChild(f),g)return new Promise((h,T)=>{f.addEventListener("load",h),f.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${d}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return r().catch(s)})},Xh={habits:()=>Ut(()=>import("./habits-rpPZlZZJ.js"),[]),dashboard:()=>Ut(()=>import("./dashboard-DwRo2XLQ.js"),[]),expenses:()=>Ut(()=>import("./expenses-B55g9uVt.js"),[]),"golden-book":()=>Ut(()=>import("./golden-book-DE2y9Nd2.js"),[]),grove:()=>Ut(()=>import("./grove-g_Blbw3c.js"),[]),achievements:()=>Ut(()=>import("./achievements-CIRh_MHd.js"),[]),journal:()=>Ut(()=>import("./journal-CF8GZxOQ.js"),[]),revision:()=>Ut(()=>import("./revision-8E4IN634.js"),[]),spiritual:()=>Ut(()=>import("./spiritual-CE6jOTOa.js"),[]),kickstart:()=>Ut(()=>import("./kickstart-CqposMhy.js"),[]),affirmations:()=>Ut(()=>import("./affirmations-BXDfEYyM.js"),[]),challenges:()=>Ut(()=>import("./challenges-qowOLHBV.js"),[]),finance:()=>Ut(()=>import("./finance-QJicgyLg.js"),[]),worth:()=>Ut(()=>import("./worth-B0qM9I7p.js"),[]),"trading-journal":()=>Ut(()=>import("./trading-journal-BFWnjoZs.js"),[]),mindscape:()=>Ut(()=>import("./mindscape-CszBvpZ_.js"),[]),"bucket-list":()=>Ut(()=>import("./bucket-list-DzTlI2o0.js"),[]),goals:()=>Ut(()=>import("./goals-Dn5xKS6w.js"),[]),skills:()=>Ut(()=>import("./skills-BsOOt0lp.js"),[]),delight:()=>Ut(()=>import("./delight-C_U_mvHo.js"),[])};function Yt({id:e}){const[r,n]=c.useState(!1);return Xh[e]?t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>n(!0),style:Ot.btn,title:"How to use this section","aria-label":"Help",children:t.jsx(l0,{size:16})}),r&&t.jsx(J0,{id:e,onClose:()=>n(!1)})]}):null}function J0({id:e,onClose:r}){const[n,o]=c.useState(null),i=rv(e);return c.useEffect(()=>{Xh[e]().then(s=>o(s.default)).catch(()=>o(!1))},[e]),t.jsx("div",{style:Ot.overlay,onClick:r,children:t.jsxs("div",{style:Ot.modal,onClick:s=>s.stopPropagation(),children:[t.jsx("button",{onClick:r,style:Ot.closeBtn,"aria-label":"Close",children:t.jsx(De,{size:18})}),n?t.jsxs("div",{style:Ot.body,children:[t.jsx("div",{style:Ot.eyebrow,children:"Help"}),t.jsx("h2",{style:Ot.title,children:n.title}),t.jsx("p",{style:Ot.tagline,children:n.tagline}),t.jsxs(id,{label:"What it is",children:[t.jsx("p",{style:Ot.p,children:n.what}),t.jsx(sp,{src:i[0]})]}),t.jsx(id,{label:"How to use it",children:n.howTo.map((s,a)=>t.jsxs("div",{style:Ot.step,children:[t.jsxs("div",{style:Ot.stepHead,children:[t.jsx("span",{style:Ot.stepNum,children:a+1}),t.jsx("span",{style:Ot.stepHeading,children:s.heading})]}),t.jsx("p",{style:Ot.p,children:s.body}),s.list&&t.jsx("ul",{style:Ot.list,children:s.list.map((l,d)=>t.jsx("li",{style:Ot.li,children:l},d))}),t.jsx(sp,{src:i[a+1]})]},a))}),t.jsx(id,{label:"Why it matters",children:n.why.split(`

`).map((s,a)=>t.jsx("p",{style:Ot.p,children:s},a))})]}):t.jsx("div",{style:Ot.loading,children:n===!1?"Help content coming soon.":"Loading…"})]})})}function id({label:e,children:r}){return t.jsxs("div",{style:Ot.section,children:[t.jsx("div",{style:Ot.sectionLabel,children:e}),r]})}const ev=["jpg","jpeg","png","webp"],tv=12;function rv(e){const[r,n]=c.useState([]);return c.useEffect(()=>{let o=!1;return n([]),Promise.all(Array.from({length:tv},(i,s)=>{const a=String(s+1).padStart(2,"0");return Promise.any(ev.map(l=>new Promise((d,g)=>{const m=`/help/${e}/${a}.${l}`,f=new Image;f.onload=()=>d(m),f.onerror=g,f.src=m}))).catch(()=>null)})).then(i=>{o||n(i.filter(Boolean))}),()=>{o=!0}},[e]),r}function sp({src:e}){return e?t.jsx("img",{src:e,alt:"",style:Ot.shot}):null}const Ot={btn:{display:"grid",placeItems:"center",width:28,height:28,borderRadius:"50%",border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",flexShrink:0},overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:400,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:14,width:"100%",maxWidth:640,maxHeight:"88vh",overflowY:"auto",position:"relative",padding:"26px 26px 30px",boxShadow:"0 20px 60px rgba(0,0,0,0.3)",fontFamily:"'Inter',system-ui,sans-serif"},closeBtn:{position:"absolute",top:16,right:16,border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:"50%",cursor:"pointer",display:"grid",placeItems:"center"},loading:{padding:"40px 0",textAlign:"center",color:"var(--text-3)",fontSize:13},body:{display:"flex",flexDirection:"column"},eyebrow:{fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},title:{fontSize:24,fontWeight:700,margin:"0 0 4px",letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif",paddingRight:30},tagline:{margin:"0 0 18px",fontSize:13.5,color:"var(--text-2)",fontStyle:"italic"},section:{marginBottom:20},sectionLabel:{fontSize:11.5,fontWeight:700,letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--accent)",marginBottom:8,borderBottom:"1px solid var(--border)",paddingBottom:6},p:{fontSize:13.5,lineHeight:1.6,color:"var(--text)",margin:"0 0 8px"},step:{marginBottom:14},stepHead:{display:"flex",alignItems:"center",gap:8,marginBottom:4},stepNum:{width:20,height:20,borderRadius:"50%",background:"var(--accent)",color:"#fff",fontSize:11,fontWeight:700,display:"grid",placeItems:"center",flexShrink:0},stepHeading:{fontSize:14,fontWeight:700,color:"var(--text)"},list:{margin:"0 0 8px",paddingLeft:20},li:{fontSize:13.5,lineHeight:1.6,color:"var(--text)",marginBottom:4},shot:{width:"100%",borderRadius:8,border:"1px solid var(--border)",display:"block",margin:"8px 0 4px",boxShadow:"0 1px 4px rgba(0,0,0,0.08)"}},sd="#C9A227",ap="#3A7CA5",lp="#C2536B",ad="#4C9A6B",nv=new Set(["worth"]),qh=e=>{const r=n=>String(n).padStart(2,"0");return`${e.getFullYear()}-${r(e.getMonth()+1)}-${r(e.getDate())}`},ar=Lo(),dp=e=>{const r=new Date(ar+"T12:00:00");return r.setDate(r.getDate()+e),qh(r)},ov=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],cp=()=>ov[(new Date().getDay()+6)%7],iv={1:"😣 Rough",2:"🙁 Low",3:"😐 Okay",4:"🙂 Good",5:"😄 Great"},ra=e=>{const r=Math.round(e||0),n=Math.floor(r/60),o=r%60;return n?`${n}h ${o}m`:`${o}m`},gp=e=>{const r=new Date(e+"T00:00:00"),n=r.getDay(),o=new Date(r);return o.setDate(r.getDate()+(n===0?-6:1-n)),Array.from({length:7},(i,s)=>{const a=new Date(o);return a.setDate(o.getDate()+s),qh(a)})};function sv({onNavigate:e}){var ee,Ie;const r=ho(),n=$g(),o=v=>_s(v,r.code),[i,s]=c.useState(!1),[a,l]=c.useState([]),[d,g]=c.useState({sessions:[],stats:{}}),[m,f]=c.useState([]),[h,T]=c.useState([]),[D,I]=c.useState([]),[z,b]=c.useState([]),[p,u]=c.useState({}),[y,j]=c.useState({}),[C,k]=c.useState([]),[x,B]=c.useState([]),[W,Q]=c.useState([]),[re,ge]=c.useState([]),[A,X]=c.useState([]),[ie,xe]=c.useState([]),[q,K]=c.useState([]),[de,J]=c.useState(null),[R,O]=c.useState([]),G=c.useCallback(()=>{Promise.all([_.getHabits().catch(()=>[]),_.getFocus().catch(()=>({sessions:[],stats:{}})),_.getScreenTime().catch(()=>[]),_.getRewardRates().catch(()=>[]),_.getPayouts().catch(()=>[]),_.getAchievements().catch(()=>[]),_.getSetting("grove_rates").catch(()=>null),_.getSetting("reward_rates").catch(()=>null),_.getExpenses().catch(()=>({categories:[],logs:[]})),_.getDueToday().catch(()=>[]),_.getChallenges().catch(()=>[]),_.getGoldenGoals().catch(()=>[]),_.getScriptures().catch(()=>[]),_.getGoals().catch(()=>[]),_.getJournalEntry(ar).catch(()=>null),_.getKickstart().catch(()=>[])]).then(([v,pe,Be,$e,Je,we,Mt,pt,nt,hn,_n,Ve,Ln,nn,mf,Ng])=>{l(v||[]),g(pe||{sessions:[],stats:{}}),f(Array.isArray(Be)?Be:[]),T($e||[]),I(Je||[]),b(Array.isArray(we)?we:[]),u((Mt==null?void 0:Mt.value)||{}),j((pt==null?void 0:pt.value)||{}),k((nt==null?void 0:nt.categories)||[]),B((nt==null?void 0:nt.logs)||[]),Q(hn||[]),ge(Array.isArray(_n)?_n:[]),X(Array.isArray(Ve)?Ve:[]),xe(Array.isArray(Ln)?Ln:[]),K(Array.isArray(nn)?nn:[]),J(mf),O(Array.isArray(Ng)?Ng:[]),s(!0)}).catch(()=>s(!0))},[]);c.useEffect(()=>{G()},[G]);const $=c.useMemo(()=>a.filter(v=>v.active!==!1),[a]),ae=v=>new Set(v.logs||[]),me=(v,pe)=>{var Be;if((v.type==="minimum"||v.type==="maximum")&&v.period==="day"){const $e=(Be=v.log_counts)==null?void 0:Be[pe];return $e==null?!1:v.type==="minimum"?$e>=(v.target_count||0):$e>0&&$e<=(v.target_count||0)}return ae(v).has(pe)},Oe=(v,pe)=>v.type==="minimum"&&v.period==="week"&&pe.filter(Be=>ae(v).has(Be)).length>=(v.target_count||0),Ce=(v,pe)=>v.type==="minimum"&&v.period==="month"&&(v.logs||[]).filter(Be=>Be.slice(0,7)===pe).length>=(v.target_count||0),U=(v,pe)=>v.type==="minimum"&&v.period==="year"&&(v.logs||[]).filter(Be=>Be.slice(0,4)===pe).length>=(v.target_count||0),P=(v,pe)=>v.type!=="minimum"?!1:v.period==="week"?Oe(v,gp(pe)):v.period==="month"?Ce(v,pe.slice(0,7)):v.period==="year"?U(v,pe.slice(0,4)):!1,ne=(v,pe)=>me(v,pe)||P(v,pe),E=gp(ar),w=$.filter(v=>ne(v,ar)).length,oe=$.length?Math.round(w/$.length*100):0,he=v=>{if(v.type==="minimum"&&v.period==="month"&&Ce(v,E[0].slice(0,7))||v.type==="minimum"&&v.period==="year"&&U(v,E[0].slice(0,4))||v.type==="minimum"&&v.period==="week"&&Oe(v,E))return 1;if((v.type==="minimum"||v.type==="maximum")&&v.period==="day")return Math.min(1,E.filter(Je=>me(v,Je)).length/7);const pe=ae(v),Be=E.filter(Je=>pe.has(Je)).length,$e=v.type==="minimum"&&v.period==="week"?v.target_count||1:v.target_per_week||7;return $e>0?Math.min(1,Be/$e):0},V=$.length?Math.round($.reduce((v,pe)=>v+he(pe),0)/$.length*100):0,fe=ar.slice(0,7),ye=new Date(Number(ar.slice(0,4)),Number(ar.slice(5,7)),0).getDate(),Ae=v=>{if(v.type==="minimum"&&v.period==="month"&&Ce(v,fe)||v.type==="minimum"&&v.period==="year"&&U(v,fe.slice(0,4)))return 1;if((v.type==="minimum"||v.type==="maximum")&&v.period==="day"){let $e=0;for(let Je=1;Je<=ye;Je++)me(v,`${fe}-${String(Je).padStart(2,"0")}`)&&$e++;return Math.min(1,$e/ye)}const pe=(v.logs||[]).filter($e=>$e.slice(0,7)===fe).length;let Be;return v.type==="minimum"&&v.period==="week"?Be=(v.target_count||1)*(ye/7):v.type==="minimum"&&v.period==="month"?Be=v.target_count||1:v.type==="minimum"&&v.period==="year"?Be=(v.target_count||1)/12:Be=(v.target_per_week||7)*(ye/7),Be>0?Math.min(1,pe/Be):0},tt=$.length?Math.round($.reduce((v,pe)=>v+Ae(pe),0)/$.length*100):0,yt=[0,-1,-2].map((v,pe)=>({label:pe===0?"Today":pe===1?"Yesterday":"Day before",value:$.filter(Be=>ne(Be,dp(v))).length,color:pe===0?"#4C9A6B":"var(--text-3)"})),_e=x.filter(v=>v.date===ar).reduce((v,pe)=>v+pe.amount,0),st=[0,-1,-2].map((v,pe)=>({label:pe===0?"Today":pe===1?"Yesterday":"Day before",value:x.filter(Be=>Be.date===dp(v)).reduce((Be,$e)=>Be+$e.amount,0),color:pe===0?"#C9772E":"var(--text-3)"})),Ze=c.useMemo(()=>Object.fromEntries(C.map(v=>[v.id,v])),[C]),at=c.useMemo(()=>{const[v,pe]=lr(new Date,n),Be={};x.forEach(pt=>{pt.date>=v&&pt.date<=pe&&(Be[pt.category_id]=(Be[pt.category_id]||0)+pt.amount)});const $e=Object.entries(Be).map(([pt,nt])=>({cat:Ze[pt],amount:nt})).filter(pt=>pt.cat).sort((pt,nt)=>nt.amount-pt.amount),Je=$e.reduce((pt,nt)=>pt+nt.amount,0);let we=0;return{segs:$e.map(pt=>{const nt=Je>0?we/Je*100:0;return we+=pt.amount,{...pt,start:nt,end:Je>0?we/Je*100:0,pct:Je>0?pt.amount/Je*100:0}}),total:Je}},[x,Ze,n]),vt=at.segs.length?`conic-gradient(${at.segs.map(v=>`${v.cat.color} ${v.start}% ${v.end}%`).join(", ")})`:"var(--surface-2)",ct={};h.forEach(v=>{var pe;(ct[pe=`${v.kind}:${v.rkey}`]||(ct[pe]=[])).push({eff:v.eff_date,rate:v.rate})}),Object.values(ct).forEach(v=>v.sort((pe,Be)=>pe.eff.localeCompare(Be.eff)));const Ht=(v,pe,Be)=>{const $e=ct[`${v}:${pe}`];if($e){let Je=null;for(const we of $e)if(we.eff<=Be)Je=we.rate;else break;if(Je!==null)return Je}return(v==="focus"?p[pe]:y[pe])||0};let Wt=0,Et=0,le=0,Le=0;(d.sessions||[]).filter(v=>v.completed).forEach(v=>{const pe=(v.started_at||v.created_at||"").slice(0,10),Be=pr[v.tree]?v.tree:ao,$e=(v.actual_min||0)/60*Ht("focus",Be,pe);le+=$e,pe===ar&&(Wt+=$e)}),m.forEach(v=>{if(nv.has(v.screen))return;const pe=v.seconds/60*Ht("usage",v.screen,v.date);Le+=pe,v.date===ar&&(Et+=pe)});const ot=z.filter(v=>v.date===ar).reduce((v,pe)=>v+(pe.reward||0),0),bt=z.reduce((v,pe)=>v+(pe.reward||0),0),zt=re.filter(v=>v.status==="done"),xr=zt.filter(v=>!v.end_date||v.end_date===ar).reduce((v,pe)=>v+(pe.reward_earned||0),0),Ge=zt.reduce((v,pe)=>v+(pe.reward_earned||0),0),it=Wt+Et+ot+xr,xt=v=>it>0?v/it*100:0,ut=xt(Wt),Dt=xt(Et),Wr=xt(ot),jt=xt(xr),Mr=D.reduce((v,pe)=>v+pe.amount,0),Gt=Math.max(0,le+Le+bt+Ge-Mr),mn=((ee=d.stats)==null?void 0:ee.today_minutes)||0,er=((Ie=d.stats)==null?void 0:Ie.today_trees)||0,or=c.useMemo(()=>ie.flatMap(v=>(v.chapters||[]).map(pe=>({...pe,scripture:v.name,color:v.color}))),[ie]),yr=or.filter(v=>v.read_date===ar),M=R.filter(v=>(v.days||[]).includes(cp())),ce=v=>m.filter(pe=>pe.screen===v&&pe.date===ar).reduce((pe,Be)=>pe+Be.seconds,0),We=ce("kickstart"),Ye=ce("affirmations"),St=ce("mindscape"),Ue=A.filter(v=>!v.achieved),Ke=v=>{var pe;return v.t369_enabled?!!((pe=v.t369)!=null&&pe.day_complete):!!v.today_done},Tt={active:re.filter(v=>v.status==="active").length,done:zt.length,failed:re.filter(v=>v.status==="failed").length},_r=re.filter(v=>v.status==="active").slice(0,3),L=q.filter(v=>v.horizon==="Weekly"&&v.start_date<=ar&&v.end_date>=ar),ze=de?Object.values(de.bullets||{}).reduce((v,pe)=>v+pe.length,0):0,rt=!!(de&&(de.mood!=null||ze>0)),F=v=>e&&e(v);return i?t.jsxs("div",{style:Ee.page,children:[t.jsxs("div",{style:Ee.head,children:[t.jsx("div",{style:Ee.eyebrow,children:"Anvil · Today"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("h1",{style:Ee.h1,children:"Dashboard"}),t.jsx(Yt,{id:"dashboard"})]}),t.jsx("div",{style:Ee.subhead,children:new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})})]}),t.jsxs("div",{style:Ee.statGrid,children:[t.jsx(na,{icon:$h,color:"#4C9A6B",label:"Habits done",value:`${w}/${$.length}`,onClick:()=>F("habits")}),t.jsx(na,{icon:Oh,color:sd,label:er?`Grove · ${er} tree${er===1?"":"s"}`:"Grove today",value:ra(mn),onClick:()=>F("grove")}),t.jsx(na,{icon:Fg,color:"#C9772E",label:"Spent today",value:o(_e),onClick:()=>F("expenses")}),t.jsx(na,{icon:Ih,color:"#C9A227",label:"Rewards pending",value:o(Gt),onClick:()=>F("worth")})]}),t.jsx(fn,{title:"Habits",eyebrow:`${w}/${$.length} done today`,onClick:()=>F("habits"),children:$.length===0?t.jsx(Pn,{children:"No habits yet."}):t.jsxs(t.Fragment,{children:[t.jsx(up,{items:yt,fmt:v=>`${v}/${$.length}`,max:$.length}),t.jsxs("div",{style:Ee.ringRow,children:[t.jsx(ld,{pct:oe,label:"Today",sub:`${w}/${$.length} done`,color:"#4C9A6B"}),t.jsx(ld,{pct:V,label:"This week",sub:"of weekly targets",color:"#3A7CA5"}),t.jsx(ld,{pct:tt,label:"This month",sub:"of monthly targets",color:"#8268B0"})]})]})}),t.jsxs(fn,{title:"Expenses",eyebrow:`${o(_e)} today`,onClick:()=>F("expenses"),children:[t.jsx(up,{items:st,fmt:v=>o(v)}),at.segs.length>0&&t.jsxs("div",{style:{...Ee.pieWrap,marginTop:14},children:[t.jsxs("div",{style:Ee.pieChart,children:[t.jsx("div",{style:{...Ee.pieDisc,background:vt}}),t.jsxs("div",{style:Ee.pieHole,children:[t.jsx("span",{style:Ee.pieHoleVal,children:o(at.total)}),t.jsx("span",{style:Ee.pieHoleLbl,children:"this month"})]})]}),t.jsx("div",{style:Ee.pieLegend,children:at.segs.slice(0,6).map(v=>t.jsx(Fi,{color:v.cat.color,label:v.cat.name,pct:v.pct,val:o(v.amount)},v.cat.id))})]})]}),t.jsx(fn,{title:"Rewards",eyebrow:`Pending ${o(Gt)}`,onClick:()=>F("worth"),children:it>0?t.jsxs("div",{style:Ee.pieWrap,children:[t.jsxs("div",{style:Ee.pieChart,children:[t.jsx("div",{style:{...Ee.pieDisc,background:`conic-gradient(${sd} 0 ${ut}%, ${ap} ${ut}% ${ut+Dt}%, ${lp} ${ut+Dt}% ${ut+Dt+Wr}%, ${ad} ${ut+Dt+Wr}% 100%)`}}),t.jsxs("div",{style:Ee.pieHole,children:[t.jsx("span",{style:Ee.pieHoleVal,children:o(it)}),t.jsx("span",{style:Ee.pieHoleLbl,children:"today"})]})]}),t.jsxs("div",{style:Ee.pieLegend,children:[t.jsx(Fi,{color:sd,label:"Focus",pct:ut,val:o(Wt)}),t.jsx(Fi,{color:ap,label:"Usage",pct:Dt,val:o(Et)}),t.jsx(Fi,{color:lp,label:"Achievement",pct:Wr,val:o(ot)}),t.jsx(Fi,{color:ad,label:"Challenges",pct:jt,val:o(xr)})]})]}):t.jsx(Pn,{children:"No rewards earned yet today."})}),t.jsx(fn,{title:"Revision",eyebrow:W.length?`${W.length} due`:"Nothing due",onClick:()=>F("revision"),children:W.length===0?t.jsx(Pn,{children:"No topics due for revision today. 🎉"}):t.jsx("div",{style:Ee.rows,children:W.slice(0,6).map(v=>t.jsxs("div",{style:Ee.row,children:[t.jsx("span",{style:{...Ee.dot,background:v.is_missed?"#C2536B":"#C9A227"}}),t.jsx("span",{style:Ee.rowName,children:v.topic}),t.jsxs("span",{style:Ee.rowMeta,children:["Stage ",v.stage,v.is_missed?" · missed":""]})]},v.review_id))})}),t.jsxs("div",{style:Ee.twoCol,children:[t.jsx(fn,{title:"Golden Book",eyebrow:Ue.length?`${Ue.filter(Ke).length}/${Ue.length} written`:null,onClick:()=>F("golden"),children:Ue.length===0?t.jsx(Pn,{children:"No active dreams."}):t.jsx("div",{style:Ee.rows,children:Ue.slice(0,5).map(v=>t.jsxs("div",{style:Ee.row,children:[t.jsx(Sh,{size:13,color:"#C9A227",style:{flexShrink:0}}),t.jsx("span",{style:Ee.rowName,children:v.title}),t.jsx(av,{done:Ke(v),doneText:v.t369_enabled?"369 done":"Written",pendingText:"Pending"})]},v.id))})}),t.jsx(fn,{title:"Challenges",eyebrow:`${Tt.active} active · ${Tt.done} done${Tt.failed?` · ${Tt.failed} missed`:""}`,onClick:()=>F("challenges"),children:re.length===0?t.jsx(Pn,{children:"No challenges yet."}):_r.length===0?t.jsx(Pn,{children:"No active challenges."}):t.jsx("div",{style:Ee.rows,children:_r.map(v=>{const pe=v.target>0?Math.min(100,Math.max(0,v.completed/v.target*100)):0,Be=(v.completed||0)<0;return t.jsxs("div",{style:{padding:"6px 0",borderBottom:"1px solid var(--border)"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:8},children:[t.jsx("span",{style:Ee.rowName,children:v.name}),t.jsxs("span",{style:{...Ee.rowMeta,color:Be?"#C2536B":"var(--text-3)"},children:[Be?"-":"",Math.round(Be?Math.abs(v.completed/(v.target||1)*100):pe),"%"]})]}),t.jsx("div",{style:Ee.miniTrack,children:t.jsx("div",{style:{...Ee.miniBar,width:`${Be?Math.min(100,Math.abs(v.completed/(v.target||1)*100)):pe}%`,background:Be?"#C2536B":ad}})})]},v.id)})})}),t.jsx(fn,{title:"Goals this week",eyebrow:L.length?`${L.length}`:null,onClick:()=>F("goals"),children:L.length===0?t.jsx(Pn,{children:"No weekly goals running."}):t.jsx("div",{style:Ee.rows,children:L.slice(0,5).map(v=>t.jsxs("div",{style:Ee.row,children:[t.jsx(El,{size:13,color:"#3A7CA5",style:{flexShrink:0}}),t.jsx("span",{style:Ee.rowName,children:v.title}),t.jsx("span",{style:Ee.rowMeta,children:v.pillar})]},v.id))})}),t.jsx(fn,{title:"Journal",eyebrow:rt?"Done today":"Not yet",onClick:()=>F("journal"),children:t.jsxs("div",{style:Ee.journalRow,children:[t.jsx(Ms,{size:18,color:rt?"#4C9A6B":"var(--text-3)"}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:14,fontWeight:700,color:rt?"#4C9A6B":"var(--text-2)"},children:rt?"Journaled today":"Not journaled yet"}),t.jsxs("div",{style:Ee.rowMeta,children:[(de==null?void 0:de.mood)!=null?`Mood: ${iv[de.mood]||de.mood}`:"No mood set",ze>0?` · ${ze} bullet${ze===1?"":"s"}`:""]})]})]})})]}),t.jsx(fn,{title:"Spiritual",eyebrow:`${or.length} chapter${or.length===1?"":"s"} read overall`,onClick:()=>F("spiritual"),children:ie.length===0?t.jsx(Pn,{children:"No scriptures yet."}):t.jsxs(t.Fragment,{children:[yr.length>0&&t.jsx("div",{style:Ee.rows,children:yr.map(v=>t.jsxs("div",{style:Ee.row,children:[t.jsx("span",{style:{...Ee.dot,background:v.color||"#8268B0"}}),t.jsx("span",{style:Ee.rowName,children:v.title}),t.jsxs("span",{style:Ee.rowMeta,children:["read today · ",v.scripture]})]},v.id))}),t.jsx("div",{style:{...Ee.chipWrap,marginTop:yr.length?10:0},children:ie.map(v=>t.jsxs("span",{style:{...Ee.scripChip,borderColor:(v.color||"#8268B0")+"66",color:v.color||"#8268B0"},children:[v.name," · ",(v.chapters||[]).length]},v.id))}),yr.length===0&&t.jsx("div",{style:{...Ee.muted,paddingTop:8},children:"Nothing read today yet."})]})}),t.jsxs("div",{style:Ee.miniGrid,children:[t.jsx(oa,{icon:Wh,color:"#C9772E",label:"Kickstart",onClick:()=>F("kickstart"),main:We>0?`Watched ${ra(We/60)}`:"Not watched yet",done:We>0,sub:`${M.length} video${M.length===1?"":"s"} lined up for ${cp()}`}),t.jsx(oa,{icon:_o,color:"#C9A227",label:"Affirmations",onClick:()=>F("affirmations"),main:Ye>0?`Read for ${ra(Ye/60)}`:"Not read yet",done:Ye>0,sub:Ye>0?"Nice — keep affirming daily":"Open a card and read it aloud"}),t.jsx(oa,{icon:Th,color:"#3A7CA5",label:"Meditation / Visualization",onClick:()=>F("mindscape"),main:St>0?`Practiced ${ra(St/60)}`:"Not done yet",done:St>0,sub:St>0?"Session logged for today":"A few minutes still counts"}),t.jsx(oa,{icon:Wg,color:"#8268B0",label:"Revision",onClick:()=>F("revision"),main:W.length?`${W.length} topic${W.length===1?"":"s"} due`:"All clear",done:W.length===0,sub:W.length?"Review them before the day ends":"No reviews pending today"})]})]}):t.jsx("div",{style:Ee.loading,children:"Loading…"})}function fn({title:e,eyebrow:r,onClick:n,children:o}){return t.jsxs("div",{style:Ee.card,children:[t.jsxs("div",{style:Ee.cardTitleRow,children:[t.jsxs("button",{onClick:n,style:Ee.cardTitleBtn,children:[e," ",t.jsx(Vy,{size:13})]}),r&&t.jsx("span",{style:Ee.cardEyebrow,children:r})]}),o]})}function Pn({children:e}){return t.jsx("div",{style:Ee.muted,children:e})}function up({items:e,fmt:r,max:n}){const o=Math.max(1,n||0,...e.map(i=>i.value));return t.jsx("div",{style:Ee.tbWrap,children:e.map((i,s)=>t.jsxs("div",{style:Ee.tbRow,children:[t.jsx("div",{style:Ee.tbLbl,children:i.label}),t.jsx("div",{style:Ee.tbTrack,children:t.jsx("div",{style:{...Ee.tbBar,width:`${i.value/o*100}%`,background:i.color}})}),t.jsx("div",{style:Ee.tbVal,children:r(i.value)})]},s))})}function ld({pct:e,label:r,sub:n,color:o}){const s=2*Math.PI*24,a=s*(1-Math.max(0,Math.min(100,e))/100);return t.jsxs("div",{style:Ee.ringStat,children:[t.jsxs("div",{style:Ee.ringBox,children:[t.jsxs("svg",{width:"64",height:"64",viewBox:"0 0 64 64",children:[t.jsx("circle",{cx:"32",cy:"32",r:24,fill:"none",stroke:"var(--border)",strokeWidth:"6"}),t.jsx("circle",{cx:"32",cy:"32",r:24,fill:"none",stroke:o,strokeWidth:"6",strokeLinecap:"round",strokeDasharray:s,strokeDashoffset:a,transform:"rotate(-90 32 32)",style:{transition:"stroke-dashoffset 0.5s ease"}})]}),t.jsxs("div",{style:{...Ee.ringPct,color:o},children:[e,"%"]})]}),t.jsxs("div",{children:[t.jsx("div",{style:Ee.ringLabel,children:r}),t.jsx("div",{style:Ee.ringSub,children:n})]})]})}function Fi({color:e,label:r,pct:n,val:o}){return t.jsxs("div",{style:Ee.pieLegRow,children:[t.jsx("span",{style:{...Ee.legendDot,background:e}}),t.jsx("span",{style:Ee.pieLegName,children:r}),t.jsxs("span",{style:Ee.pieLegPct,children:[Math.round(n),"%"]}),t.jsx("span",{style:Ee.pieLegMin,children:o})]})}function na({icon:e,color:r,label:n,value:o,onClick:i}){return t.jsxs("button",{onClick:i,style:Ee.statTile,children:[t.jsx("div",{style:{...Ee.statIcon,background:`${r}1A`,color:r},children:t.jsx(e,{size:17})}),t.jsxs("div",{style:{minWidth:0},children:[t.jsx("div",{style:Ee.statVal,children:o}),t.jsx("div",{style:Ee.statLbl,children:n})]})]})}function av({done:e,doneText:r="Done",pendingText:n="Pending"}){return t.jsx("span",{style:{...Ee.badge,color:e?"#4C9A6B":"#C2773B",background:e?"rgba(76,154,107,0.12)":"rgba(194,119,59,0.12)"},children:e?r:n})}function oa({icon:e,color:r,label:n,main:o,sub:i,done:s,onClick:a}){return t.jsxs("button",{onClick:a,style:Ee.miniCard,children:[t.jsx("div",{style:{...Ee.statIcon,background:`${r}1A`,color:r},children:t.jsx(e,{size:16})}),t.jsx("div",{style:Ee.miniLabel,children:n}),t.jsx("div",{style:{...Ee.miniMain,color:s?"#4C9A6B":"var(--text-2)"},children:o}),t.jsx("div",{style:Ee.miniSub,children:i})]})}const Ee={loading:{padding:40,textAlign:"center",color:"var(--text-3)",fontFamily:"'Inter',system-ui,sans-serif"},page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:820,margin:"0 auto"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},statGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:10,marginBottom:14},statTile:{display:"flex",alignItems:"center",gap:10,border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,padding:"12px 14px",cursor:"pointer",fontFamily:"inherit",textAlign:"left",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},statIcon:{width:34,height:34,borderRadius:10,display:"grid",placeItems:"center",flexShrink:0},statVal:{fontSize:16,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},statLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginTop:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},card:{background:"var(--surface)",borderRadius:16,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:10,marginBottom:10,flexWrap:"wrap"},cardTitleBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"none",cursor:"pointer",padding:0,fontFamily:"'Fraunces',Georgia,serif",fontSize:16,fontWeight:700,color:"var(--text)"},cardEyebrow:{fontSize:12,fontWeight:700,color:"var(--text-3)"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"10px 0"},twoCol:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:14,marginBottom:0},rows:{display:"flex",flexDirection:"column",gap:2},row:{display:"flex",alignItems:"center",gap:8,padding:"7px 0",borderBottom:"1px solid var(--border)"},dot:{width:10,height:10,borderRadius:3,flexShrink:0},rowName:{flex:1,fontSize:13.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},rowMeta:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,flexShrink:0},badge:{fontSize:10.5,fontWeight:700,padding:"3px 9px",borderRadius:12,flexShrink:0,whiteSpace:"nowrap"},tbWrap:{display:"flex",flexDirection:"column",gap:7},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:78,fontSize:11.5,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap"},tbTrack:{flex:1,height:13,background:"var(--surface-2)",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:70,fontSize:11.5,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"},ringRow:{display:"flex",gap:14,flexWrap:"wrap",marginTop:14,paddingTop:12,borderTop:"1px solid var(--border)"},ringStat:{display:"flex",alignItems:"center",gap:10,flex:"1 1 150px"},ringBox:{position:"relative",width:64,height:64,display:"grid",placeItems:"center",flexShrink:0},ringPct:{position:"absolute",inset:0,display:"grid",placeItems:"center",fontSize:14,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},ringLabel:{fontSize:13,fontWeight:700,color:"var(--text)"},ringSub:{fontSize:11,color:"var(--text-3)",fontWeight:500,marginTop:1},pieWrap:{display:"flex",alignItems:"center",gap:20,flexWrap:"wrap"},pieChart:{position:"relative",width:110,height:110,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:66,height:66,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:12,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",maxWidth:62,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},pieHoleLbl:{fontSize:9.5,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:170,display:"flex",flexDirection:"column",gap:7},pieLegRow:{display:"flex",alignItems:"center",gap:8},legendDot:{width:10,height:10,borderRadius:3,flexShrink:0},pieLegName:{flex:1,fontSize:12.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},pieLegPct:{fontSize:12,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",width:38,textAlign:"right"},pieLegMin:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,minWidth:58,textAlign:"right"},miniTrack:{height:8,background:"var(--surface-2)",borderRadius:4,overflow:"hidden",marginTop:5},miniBar:{height:"100%",borderRadius:4,transition:"width 0.3s"},journalRow:{display:"flex",alignItems:"center",gap:12,padding:"4px 0"},chipWrap:{display:"flex",gap:7,flexWrap:"wrap"},scripChip:{border:"1px solid",borderRadius:14,padding:"4px 11px",fontSize:12,fontWeight:700,background:"var(--surface)"},miniGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(170px, 1fr))",gap:10,marginTop:14},miniCard:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:5,border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,padding:"12px 14px",cursor:"pointer",fontFamily:"inherit",textAlign:"left",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},miniLabel:{fontSize:12.5,fontWeight:700,color:"var(--text)"},miniMain:{fontSize:13,fontWeight:700},miniSub:{fontSize:11,color:"var(--text-3)",fontWeight:500,lineHeight:1.35}},lv=7e3;function Cr(e,r,n){const[o,i]=c.useState([]),s=c.useRef({}),a=c.useCallback(async(g,m="Item")=>{await e(g),n();const f=`${g}-${Date.now()}`;i(h=>[...h,{id:f,itemId:g,label:m}]),s.current[f]=setTimeout(()=>{i(h=>h.filter(T=>T.id!==f)),delete s.current[f]},lv)},[e,n]),l=c.useCallback(async g=>{const m=o.find(f=>f.id===g);m&&(clearTimeout(s.current[g]),delete s.current[g],i(f=>f.filter(h=>h.id!==g)),await r(m.itemId),n())},[o,r,n]),d=c.useCallback(g=>{clearTimeout(s.current[g]),delete s.current[g],i(m=>m.filter(f=>f.id!==g))},[]);return{deleteItem:a,toasts:o,handleUndo:l,handleDismiss:d}}function Tr({toasts:e,onUndo:r,onDismiss:n}){return t.jsx("div",{style:Yo.container,children:e.map(o=>t.jsx(dv,{toast:o,onUndo:r,onDismiss:n},o.id))})}function dv({toast:e,onUndo:r,onDismiss:n}){const[o,i]=c.useState(100);return c.useEffect(()=>{const s=Date.now(),a=7e3,l=setInterval(()=>{const d=Date.now()-s,g=Math.max(0,100-d/a*100);i(g),g===0&&clearInterval(l)},50);return()=>clearInterval(l)},[]),t.jsxs("div",{style:Yo.toast,children:[t.jsx("div",{style:{...Yo.bar,width:`${o}%`}}),t.jsxs("span",{style:Yo.msg,children:[e.label," deleted"]}),t.jsx("button",{style:Yo.undoBtn,onClick:()=>r(e.id),children:"Undo"}),t.jsx("button",{style:Yo.closeBtn,onClick:()=>n(e.id),children:"×"})]})}const Yo={container:{position:"fixed",bottom:24,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",gap:8,zIndex:999,pointerEvents:"none"},toast:{position:"relative",display:"flex",alignItems:"center",gap:12,background:"var(--accent-strong)",color:"#fff",borderRadius:10,padding:"12px 16px",fontSize:13.5,fontFamily:"'Inter', system-ui, sans-serif",boxShadow:"0 4px 20px rgba(0,0,0,0.25)",minWidth:260,overflow:"hidden",pointerEvents:"all"},bar:{position:"absolute",bottom:0,left:0,height:3,background:"#4C9A6B",transition:"width 0.05s linear",borderRadius:"0 0 0 10px"},msg:{flex:1,fontWeight:500},undoBtn:{border:"1px solid rgba(255,255,255,0.3)",background:"none",color:"#4C9A6B",fontWeight:700,fontSize:13,padding:"4px 10px",borderRadius:6,cursor:"pointer",fontFamily:"inherit"},closeBtn:{border:"none",background:"none",color:"rgba(255,255,255,0.5)",cursor:"pointer",fontSize:18,lineHeight:1,padding:"0 2px"}},xn={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},cv=[{id:"Q1",symbol:"™",title:"Do Now",sub:"Important · Urgent",accent:"#C2536B"},{id:"Q2",symbol:"©",title:"Schedule",sub:"Important · Not Urgent",accent:"#3A7CA5"},{id:"Q3",symbol:"®",title:"Delegate",sub:"Not Important · Urgent",accent:"#C9A227"},{id:"Q4",symbol:"•",title:"Drop",sub:"Not Important · Not Urgent",accent:"#8A8780"}];function Zh(){return new Date().toLocaleDateString("en-CA",{timeZone:"Asia/Kolkata"})}function Jh(){const e=new Date(new Date().toLocaleString("en-US",{timeZone:"Asia/Kolkata"})),n=e.getMinutes()<30?30:0,o=n===0?e.getHours()+1:e.getHours();return`${String(o%24).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function pp(e,r){const[n,o]=e.split(":").map(Number),i=n*60+o+r;return`${String(Math.floor(i/60)%24).padStart(2,"0")}:${String(i%60).padStart(2,"0")}`}function gv(e){return e?new Date(e).toLocaleString("en-IN",{timeZone:"Asia/Kolkata",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit",hour12:!0}):""}const ia=()=>({title:"",pillar:"Financial",est:30,date:Zh(),startTime:Jh()});function uv(){const[e,r]=c.useState([]),[n,o]=c.useState([]),[i,s]=c.useState("All"),[a,l]=c.useState(null),[d,g]=c.useState(null),[m,f]=c.useState(ia()),[h,T]=c.useState(null),[D,I]=c.useState(ia()),z=c.useCallback(()=>_.getTasks().then(r).catch(console.error),[]);c.useEffect(()=>{z(),_.getGoals().then(G=>o(G.filter($=>$.horizon==="Weekly"))).catch(()=>{})},[z]);const b=Object.keys(xn),p=n.filter(G=>i==="All"||G.pillar===i),u=n.find(G=>G.id===a)||null,y=e.filter(G=>a!=null?G.goal_id===a:i!=="All"?G.pillar===i:!0),j=G=>{s(G),l(null),g(null),f($=>({...$,pillar:G==="All"?"Financial":G}))},C=G=>{l(G),g(null);const $=n.find(ae=>ae.id===G);$&&f(ae=>({...ae,pillar:$.pillar}))},{deleteItem:k,toasts:x,handleUndo:B,handleDismiss:W}=Cr(_.deleteTask,_.restoreTask,z),Q=G=>y.filter($=>$.quadrant===G),re=G=>Q(G).reduce(($,ae)=>$+ae.time_estimate_min,0),ge=G=>G>=60?`${Math.floor(G/60)}h${G%60?` ${G%60}m`:""}`:`${G}m`,A=async G=>{if(!m.title.trim())return;const $=m.date&&m.startTime?`${m.date}T${m.startTime}:00`:null;await _.createTask({pillar:u?u.pillar:m.pillar,title:m.title,quadrant:G,time_estimate_min:Number(m.est)||30,start_datetime:$,goal_id:a??null}),f(ia()),g(null),z()},X=(G,$)=>k(G,$),ie=G=>{const $=G.start_datetime?G.start_datetime.split("T"):[];T(G.id),g(null),I({title:G.title,pillar:G.pillar,est:G.time_estimate_min,date:$[0]||Zh(),startTime:($[1]||"").slice(0,5)||Jh()})},xe=async G=>{if(!D.title.trim())return;const $=D.date&&D.startTime?`${D.date}T${D.startTime}:00`:null;await _.updateTask(G.id,{title:D.title.trim(),pillar:D.pillar,time_estimate_min:Number(D.est)||30,start_datetime:$}),T(null),z()},q=c.useRef(null),K=c.useRef(null),[de,J]=c.useState(null),R=(G,$)=>{var me;const ae=document.elementFromPoint(G,$);return ae&&ae.closest&&((me=ae.closest("[data-quad]"))==null?void 0:me.getAttribute("data-quad"))||null};c.useEffect(()=>{const G=ae=>{const me=q.current;if(!me)return;const Oe=Math.hypot(ae.clientX-me.startX,ae.clientY-me.startY);if(!me.active){if(me.pointerType!=="mouse"){Oe>12&&(clearTimeout(K.current),q.current=null);return}if(Oe<6)return;me.active=!0,document.body.style.userSelect="none"}ae.cancelable&&ae.preventDefault(),me.overQ=R(ae.clientX,ae.clientY),J({id:me.task.id,title:me.task.title,x:ae.clientX,y:ae.clientY,overQ:me.overQ})},$=()=>{clearTimeout(K.current);const ae=q.current;q.current=null,document.body.style.userSelect="",document.body.style.touchAction="",J(null),ae&&ae.active&&ae.overQ&&ae.overQ!==ae.task.quadrant&&_.updateTask(ae.task.id,{quadrant:ae.overQ}).then(z).catch(()=>{})};return window.addEventListener("pointermove",G,{passive:!1}),window.addEventListener("pointerup",$),window.addEventListener("pointercancel",$),()=>{window.removeEventListener("pointermove",G),window.removeEventListener("pointerup",$),window.removeEventListener("pointercancel",$)}},[z]);const O=(G,$)=>{G.pointerType==="mouse"&&G.button!==0||(q.current={task:$,startX:G.clientX,startY:G.clientY,active:!1,pointerType:G.pointerType,overQ:null},G.pointerType!=="mouse"&&(K.current=setTimeout(()=>{const ae=q.current;ae&&(ae.active=!0,document.body.style.touchAction="none",J({id:ae.task.id,title:ae.task.title,x:ae.startX,y:ae.startY,overQ:ae.task.quadrant}))},280)))};return t.jsxs("div",{style:Fe.page,children:[t.jsxs("div",{style:Fe.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:Fe.eyebrow,children:"Anvil · Weekly Routing"}),t.jsx("h1",{style:Fe.h1,children:"Weekly Routing"})]}),t.jsx("div",{style:Fe.headRight,children:t.jsx("div",{style:Fe.legend,children:Object.entries(xn).map(([G,$])=>t.jsxs("span",{style:Fe.legendItem,children:[t.jsx("span",{style:{...Fe.dot,background:$.dot}}),G]},G))})})]}),t.jsx("div",{style:Fe.filterBar,children:["All",...b].map(G=>{const $=i===G,ae=xn[G];return t.jsxs("button",{onClick:()=>j(G),style:{...Fe.pillChip,...$?ae?{background:ae.dot,color:"#fff",borderColor:ae.dot}:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"}:{}},children:[ae&&t.jsx("span",{style:{...Fe.dot,background:$?"#fff":ae.dot}}),G==="All"?"All":G]},G)})}),t.jsxs("div",{style:Fe.goalBar,children:[t.jsx("button",{onClick:()=>l(null),style:{...Fe.goalChip,...a==null?Fe.goalChipOn:{}},children:"All goals"}),p.map(G=>{var me;const $=((me=xn[G.pillar])==null?void 0:me.dot)||"#9A968C",ae=a===G.id;return t.jsxs("button",{onClick:()=>C(G.id),style:{...Fe.goalChip,...ae?{background:$,color:"#fff",borderColor:$}:{}},title:G.title,children:[t.jsx("span",{style:{...Fe.dot,background:ae?"#fff":$}}),t.jsx("span",{style:Fe.goalChipText,children:G.title})]},G.id)}),p.length===0&&t.jsxs("span",{style:Fe.goalEmpty,children:["No weekly goals",i!=="All"?` for ${i}`:""," — create them in Goals."]})]}),t.jsx("div",{style:Fe.grid,children:cv.map(G=>{var $,ae;return t.jsxs("section",{"data-quad":G.id,style:{...Fe.quad,borderTop:`3px solid ${G.accent}`,...de&&de.overQ===G.id&&de.overQ!==(($=e.find(me=>me.id===de.id))==null?void 0:$.quadrant)?{outline:`2px dashed ${G.accent}`,outlineOffset:2,background:"var(--hover)"}:{}},children:[t.jsxs("header",{style:Fe.quadHead,children:[t.jsxs("div",{style:Fe.quadTitleRow,children:[t.jsx("span",{style:{...Fe.symbol,color:G.accent},children:G.symbol}),t.jsxs("div",{children:[t.jsx("div",{style:Fe.quadTitle,children:G.title}),t.jsx("div",{style:Fe.quadSub,children:G.sub})]})]}),t.jsx("span",{style:Fe.quadTotal,children:ge(re(G.id))})]}),t.jsxs("div",{style:Fe.list,children:[Q(G.id).map(me=>{const Oe=xn[me.pillar]||xn.Financial;return h===me.id?t.jsxs("div",{style:Fe.addBox,children:[t.jsx("input",{autoFocus:!0,placeholder:"Task title",value:D.title,onChange:Ce=>I({...D,title:Ce.target.value}),onKeyDown:Ce=>Ce.key==="Enter"&&xe(me),style:Fe.input}),t.jsxs("div",{style:Fe.dateTimeRow,children:[t.jsxs("div",{style:Fe.dateTimeGroup,children:[t.jsx("label",{style:Fe.dtLabel,children:"Date"}),t.jsx("input",{type:"date",value:D.date,onChange:Ce=>I({...D,date:Ce.target.value}),style:Fe.dtInput})]}),t.jsxs("div",{style:Fe.dateTimeGroup,children:[t.jsx("label",{style:Fe.dtLabel,children:"Start"}),t.jsx("input",{type:"time",value:D.startTime,onChange:Ce=>I({...D,startTime:Ce.target.value}),style:Fe.dtInput})]}),t.jsxs("div",{style:Fe.dateTimeGroup,children:[t.jsx("label",{style:Fe.dtLabel,children:"End"}),t.jsx("div",{style:Fe.dtEndValue,children:pp(D.startTime,Number(D.est)||30)})]})]}),t.jsxs("div",{style:Fe.addRow,children:[t.jsx("select",{value:D.pillar,onChange:Ce=>I({...D,pillar:Ce.target.value}),style:Fe.select,children:Object.keys(xn).map(Ce=>t.jsx("option",{children:Ce},Ce))}),t.jsx("input",{type:"number",value:D.est,onChange:Ce=>I({...D,est:Ce.target.value}),style:{...Fe.input,width:60}}),t.jsx("span",{style:Fe.minLabel,children:"min"}),t.jsx("button",{onClick:()=>xe(me),style:Fe.saveBtn,children:t.jsx(He,{size:14})}),t.jsx("button",{onClick:()=>T(null),style:Fe.cancelBtn,children:t.jsx(De,{size:14})})]})]},me.id):t.jsxs("div",{onPointerDown:Ce=>O(Ce,me),style:{...Fe.card,background:Oe.soft,cursor:"grab",touchAction:"pan-y",...(de==null?void 0:de.id)===me.id?{opacity:.4}:{}},children:[t.jsx("span",{style:{...Fe.cardBar,background:Oe.dot}}),t.jsxs("div",{style:Fe.cardBody,children:[t.jsx("div",{style:Fe.cardTitle,children:me.title}),me.start_datetime&&t.jsxs("div",{style:Fe.eventTime,children:[t.jsx(r0,{size:10}),gv(me.start_datetime)]}),t.jsxs("div",{style:Fe.cardMeta,children:[t.jsxs("span",{style:Fe.metaPill,children:[t.jsx("span",{style:{...Fe.dot,background:Oe.dot,width:7,height:7}}),me.pillar]}),t.jsxs("span",{style:Fe.metaPill,children:[t.jsx(wh,{size:11})," ",ge(me.time_estimate_min)]})]})]}),t.jsxs("div",{style:Fe.cardActions,children:[t.jsx("button",{onClick:()=>ie(me),onPointerDown:Ce=>Ce.stopPropagation(),style:Fe.delBtn,title:"Edit",children:t.jsx(wt,{size:12})}),t.jsx("button",{onClick:()=>X(me.id,me.title),onPointerDown:Ce=>Ce.stopPropagation(),style:Fe.delBtn,children:t.jsx(De,{size:13})})]})]},me.id)}),d===G.id?t.jsxs("div",{style:Fe.addBox,children:[t.jsx("input",{autoFocus:!0,placeholder:"Task title",value:m.title,onChange:me=>f({...m,title:me.target.value}),onKeyDown:me=>me.key==="Enter"&&A(G.id),style:Fe.input}),t.jsxs("div",{style:Fe.dateTimeRow,children:[t.jsxs("div",{style:Fe.dateTimeGroup,children:[t.jsx("label",{style:Fe.dtLabel,children:"Date"}),t.jsx("input",{type:"date",value:m.date,onChange:me=>f({...m,date:me.target.value}),style:Fe.dtInput})]}),t.jsxs("div",{style:Fe.dateTimeGroup,children:[t.jsx("label",{style:Fe.dtLabel,children:"Start"}),t.jsx("input",{type:"time",value:m.startTime,onChange:me=>f({...m,startTime:me.target.value}),style:Fe.dtInput})]}),t.jsxs("div",{style:Fe.dateTimeGroup,children:[t.jsx("label",{style:Fe.dtLabel,children:"End"}),t.jsx("div",{style:Fe.dtEndValue,children:pp(m.startTime,Number(m.est)||30)})]})]}),t.jsxs("div",{style:Fe.addRow,children:[u?t.jsxs("span",{style:Fe.goalPillarTag,children:[t.jsx("span",{style:{...Fe.dot,background:(ae=xn[u.pillar])==null?void 0:ae.dot}})," ",u.pillar]}):t.jsx("select",{value:m.pillar,onChange:me=>f({...m,pillar:me.target.value}),style:Fe.select,children:Object.keys(xn).map(me=>t.jsx("option",{children:me},me))}),t.jsx("input",{type:"number",value:m.est,onChange:me=>f({...m,est:me.target.value}),style:{...Fe.input,width:60}}),t.jsx("span",{style:Fe.minLabel,children:"min"}),t.jsx("button",{onClick:()=>A(G.id),style:Fe.saveBtn,children:t.jsx(He,{size:14})}),t.jsx("button",{onClick:()=>{g(null),f(ia())},style:Fe.cancelBtn,children:t.jsx(De,{size:14})})]})]}):t.jsxs("button",{onClick:()=>g(G.id),style:Fe.addTrigger,children:[t.jsx(mt,{size:13})," Add task"]})]})]},G.id)})}),de&&t.jsx("div",{style:{...Fe.dragClone,left:de.x+12,top:de.y+12},children:de.title}),t.jsx(Tr,{toasts:x,onUndo:B,onDismiss:W})]})}const Fe={page:{fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:16,marginBottom:22},headRight:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:10},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces', Georgia, serif"},legend:{display:"flex",gap:14,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"var(--text-2)",fontWeight:500},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},filterBar:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:10},pillChip:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},goalBar:{display:"flex",gap:7,flexWrap:"wrap",alignItems:"center",marginBottom:18,paddingBottom:14,borderBottom:"1px solid var(--border)"},goalChip:{display:"inline-flex",alignItems:"center",gap:6,maxWidth:220,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},goalChipOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},goalChipText:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},goalEmpty:{fontSize:12,color:"var(--text-3)",fontStyle:"italic"},goalPillarTag:{display:"inline-flex",alignItems:"center",gap:6,fontSize:12.5,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"7px 10px",borderRadius:6,flex:1},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:16},quad:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.06)"},quadHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14},quadTitleRow:{display:"flex",gap:10,alignItems:"center"},symbol:{fontSize:20,lineHeight:1},quadTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em"},quadSub:{fontSize:11,color:"var(--text-3)",marginTop:1,letterSpacing:"0.02em"},quadTotal:{fontSize:12,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"3px 9px",borderRadius:20},list:{display:"flex",flexDirection:"column",gap:8},card:{display:"flex",alignItems:"stretch",gap:10,borderRadius:9,padding:"10px 10px 10px 0",overflow:"hidden"},cardBar:{width:3,borderRadius:3,flexShrink:0},cardBody:{flex:1,minWidth:0},cardTitle:{fontSize:13.5,fontWeight:500,lineHeight:1.35,marginBottom:4},eventTime:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"#3A7CA5",fontWeight:500,marginBottom:5},cardMeta:{display:"flex",gap:8,flexWrap:"wrap"},metaPill:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"var(--text-2)",fontWeight:500},cardActions:{display:"flex",flexDirection:"column",gap:4,alignSelf:"center",flexShrink:0},delBtn:{width:30,height:30,borderRadius:8,border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center"},addTrigger:{display:"flex",alignItems:"center",gap:5,fontSize:12.5,color:"var(--text-3)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"8px 10px",cursor:"pointer",fontWeight:500,marginTop:2},addBox:{border:"1px solid var(--border)",borderRadius:9,padding:10,display:"flex",flexDirection:"column",gap:8},dateTimeRow:{display:"flex",gap:8,alignItems:"flex-end"},dateTimeGroup:{display:"flex",flexDirection:"column",gap:3,flex:1},dtLabel:{fontSize:10,fontWeight:600,color:"var(--text-3)",letterSpacing:"0.08em",textTransform:"uppercase"},dtInput:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},dtEndValue:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,color:"var(--text-2)",background:"var(--bg)"},addRow:{display:"flex",alignItems:"center",gap:6},input:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",flex:1,minWidth:0},select:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 8px",fontSize:12.5,fontFamily:"inherit",flex:1},minLabel:{fontSize:11,color:"var(--text-3)"},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"},dragClone:{position:"fixed",zIndex:1e3,pointerEvents:"none",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:8,padding:"8px 12px",fontSize:13,fontWeight:600,color:"var(--text)",boxShadow:"0 8px 24px rgba(0,0,0,0.25)",maxWidth:220,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},Lr={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},Wi=Object.keys(Lr),Fa=["Yearly","Quarterly","Monthly","Weekly"],dn=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],bp=[{label:"Q1 · Jan–Mar",startMonth:0},{label:"Q2 · Apr–Jun",startMonth:3},{label:"Q3 · Jul–Sep",startMonth:6},{label:"Q4 · Oct–Dec",startMonth:9}],Wa=new Date().getFullYear(),Po=Array.from({length:8},(e,r)=>Wa-1+r);function pv(e=720){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const Ni=864e5,qt=30,os=190,Oo=e=>new Date(e+"T00:00:00"),mp=e=>e.toLocaleDateString("en-US",{month:"short",day:"numeric"}),bv=[{key:"yearly",label:"Yearly",horizons:["Yearly"]},{key:"quarterly",label:"Quarterly",horizons:["Quarterly"]},{key:"mw",label:"Monthly & Weekly",horizons:["Monthly","Weekly"]}],hp={Yearly:"Yr",Quarterly:"Q",Monthly:"Mo",Weekly:"Wk"},mv={Yearly:"Y",Quarterly:"Q",Monthly:"M",Weekly:"W"},fp={Yearly:0,Quarterly:1,Monthly:2,Weekly:3},dd=e=>Fa[Math.min(Fa.indexOf(e)+1,Fa.length-1)],sa=e=>{if(!e||!e.start_date)return Array.from({length:12},(a,l)=>l);const r=new Date(e.start_date+"T00:00:00"),n=new Date(e.end_date+"T00:00:00"),o=r.getFullYear(),i=r.getMonth(),s=n.getFullYear()>o?11:n.getMonth();return Array.from({length:s-i+1},(a,l)=>i+l)},Mi=e=>new Date(e+"T00:00:00").getFullYear(),ef=(e,r,n)=>{const o=(n-1)*7+1,i=Math.min(o+6,new Date(e,r+1,0).getDate()),s=String(r+1).padStart(2,"0");return{start_date:`${e}-${s}-${String(o).padStart(2,"0")}`,end_date:`${e}-${s}-${String(i).padStart(2,"0")}`}},xp=(e,r,n,o=1)=>{const i=r;switch(e){case"Yearly":return{start_date:`${i}-01-01`,end_date:`${i}-12-31`};case"Quarterly":{const s=Math.floor(n/3)*3,a=s+1,l=s+3,d=new Date(i,l,0).getDate();return{start_date:`${i}-${String(a).padStart(2,"0")}-01`,end_date:`${i}-${String(l).padStart(2,"0")}-${d}`}}case"Monthly":{const s=new Date(i,n+1,0).getDate();return{start_date:`${i}-${String(n+1).padStart(2,"0")}-01`,end_date:`${i}-${String(n+1).padStart(2,"0")}-${s}`}}case"Weekly":return ef(i,n,o);default:return{start_date:`${i}-01-01`,end_date:`${i}-12-31`}}},is=(e,r)=>{const n=new Date(e+"T00:00:00");return n.setDate(n.getDate()+r),`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`},dl=(e,r)=>Math.round((new Date(r+"T00:00:00")-new Date(e+"T00:00:00"))/Ni)+1,hv=(e,r,n)=>{if(!n||!n.start_date||!n.end_date)return{start_date:e,end_date:r,clamped:!1};const o=dl(e,r);let i=e,s=r,a=!1;return i<n.start_date&&(i=n.start_date,s=is(i,o-1),a=!0),s>n.end_date&&(s=n.end_date,i=is(s,-(o-1)),a=!0,i<n.start_date&&(i=n.start_date)),{start_date:i,end_date:s,clamped:a}},fv=(e,r)=>new Date(e,r+1,0).getDate(),Ic=e=>{const r=new Date(e.start_date+"T00:00:00");if(e.horizon==="Monthly")return fv(r.getFullYear(),r.getMonth());if(e.horizon==="Weekly"){const n=Math.min(Math.max(Math.ceil(r.getDate()/7),1),4),o=ef(r.getFullYear(),r.getMonth(),n);return dl(o.start_date,o.end_date)}return dl(e.start_date,e.end_date)},yp=e=>Math.round(Ic(e)*1.5),xv=e=>e.horizon==="Monthly"||e.horizon==="Weekly",yv=e=>{if(!e.start_date)return"";const r=new Date(e.start_date+"T00:00:00"),n=r.getMonth();switch(e.horizon){case"Yearly":{const o=e.end_date?new Date(e.end_date+"T00:00:00").getFullYear():r.getFullYear();return o>r.getFullYear()?`${r.getFullYear()}–${o}`:`${r.getFullYear()}`}case"Quarterly":return`Q${Math.floor(n/3)+1} ${r.getFullYear()}`;case"Monthly":return`${dn[n]} ${r.getFullYear()}`;case"Weekly":return`${dn[n]} W${Math.ceil(r.getDate()/7)}`;default:return""}};function vv(){const[e,r]=c.useState([]),[n,o]=c.useState("All"),[i,s]=c.useState({}),[a,l]=c.useState({}),[d,g]=c.useState(null),[m,f]=c.useState(""),[h,T]=c.useState(0),[D,I]=c.useState(1),[z,b]=c.useState(Wa),[p,u]=c.useState(Wa),[y,j]=c.useState("Yearly"),[C,k]=c.useState(Wi[0]),[x,B]=c.useState(null),W=pv(),[Q,re]=c.useState(!W),[ge,A]=c.useState("day"),[X,ie]=c.useState(null),xe=c.useRef(null);c.useEffect(()=>{xe.current=X},[X]);const q=c.useRef(e);c.useEffect(()=>{q.current=e},[e]);const[K,de]=c.useState(null),J=c.useRef(null);c.useEffect(()=>{J.current=K},[K]);const R=c.useRef(null),O=c.useRef(0),[G,$]=c.useState(null),ae=c.useRef(null),me=c.useCallback(F=>{$(F),clearTimeout(ae.current),ae.current=setTimeout(()=>$(null),2800)},[]),[Oe,Ce]=c.useState(null),U=c.useRef(null),[P,ne]=c.useState(null),[E,w]=c.useState(null),oe=(F,ee)=>{if(P===ee){ne(null);return}const Ie=F.currentTarget.getBoundingClientRect(),v=Ie.bottom+220<window.innerHeight;w({right:Math.max(8,window.innerWidth-Ie.right),...v?{top:Ie.bottom+4}:{bottom:window.innerHeight-Ie.top+4}}),ne(ee)},he=F=>{clearTimeout(U.current),U.current=setTimeout(()=>Ce(F),350)},V=()=>{clearTimeout(U.current),Ce(null)},fe=c.useCallback(()=>{_.getGoals().then(r).catch(console.error)},[]);c.useEffect(()=>{fe()},[fe]);const{deleteItem:ye,toasts:Ae,handleUndo:tt,handleDismiss:yt}=Cr(_.deleteGoal,_.restoreGoal,fe),_e=c.useCallback(async()=>{const F=xe.current;if(ie(null),!F)return;const ee=Math.round(F.dx/(F.pxPerDay||qt));if(!ee)return;let Ie=is(F.g.start_date,ee),v=is(F.g.end_date,ee);if(F.g.parent_goal_id){const pe=q.current.find($e=>$e.id===F.g.parent_goal_id),Be=hv(Ie,v,pe);Be.clamped&&me(`Can't move past "${(pe==null?void 0:pe.title)||"parent goal"}" — kept within its dates.`),Ie=Be.start_date,v=Be.end_date}(Ie!==F.g.start_date||v!==F.g.end_date)&&(await _.updateGoal(F.g.id,{pillar:F.g.pillar,start_date:Ie,end_date:v}),fe())},[fe,me]),st=!!X;c.useEffect(()=>{if(!st)return;const F=Be=>{O.current=Be.clientX,ie($e=>$e&&{...$e,dx:Be.clientX-$e.startX})},ee=()=>_e();window.addEventListener("pointermove",F),window.addEventListener("pointerup",ee);const Ie=44,v=16,pe=setInterval(()=>{const Be=R.current;if(!Be)return;const $e=Be.getBoundingClientRect(),Je=O.current;let we=0;if(Je<$e.left+Ie?we=-1:Je>$e.right-Ie&&(we=1),!we)return;const Mt=Be.scrollLeft;Be.scrollLeft=Math.max(0,Math.min(Mt+we*v,Be.scrollWidth-Be.clientWidth));const pt=Be.scrollLeft-Mt;pt&&ie(nt=>nt&&{...nt,startX:nt.startX-pt,dx:Je-(nt.startX-pt)})},16);return()=>{window.removeEventListener("pointermove",F),window.removeEventListener("pointerup",ee),clearInterval(pe)}},[st,_e]);const Ze=c.useCallback(async()=>{const F=J.current;if(de(null),!F)return;const ee=F.g,Ie=Ic(ee),v=yp(ee),pe=Math.max(Ie,Math.min(v,dl(ee.start_date,ee.end_date)+Math.round(F.dx/qt)));let Be=is(ee.start_date,pe-1);if(ee.parent_goal_id){const $e=q.current.find(Je=>Je.id===ee.parent_goal_id);$e!=null&&$e.end_date&&Be>$e.end_date&&(Be=$e.end_date,me(`Can't extend past "${($e==null?void 0:$e.title)||"parent goal"}" — kept within its dates.`))}Be!==ee.end_date&&Be>=ee.start_date&&(await _.updateGoal(ee.id,{end_date:Be}),fe())},[fe,me]),at=!!K;c.useEffect(()=>{if(!at)return;const F=Ie=>de(v=>v&&{...v,dx:Ie.clientX-v.startX}),ee=()=>Ze();return window.addEventListener("pointermove",F),window.addEventListener("pointerup",ee),()=>{window.removeEventListener("pointermove",F),window.removeEventListener("pointerup",ee)}},[at,Ze]);const vt=n==="All",ct=Lr[n]||{dot:"var(--text-3)"},Ht=vt?e:e.filter(F=>F.pillar===n),Wt=Ht.filter(F=>!F.parent_goal_id),Et=F=>Ht.filter(ee=>ee.parent_goal_id===F),le=F=>l(ee=>({...ee,[F]:!ee[F]})),Le=F=>F.horizon==="Monthly"||F.horizon==="Weekly",ot=F=>i[F.id]!==void 0?i[F.id]:Le(F),bt=F=>s(ee=>({...ee,[F.id]:!ot(F)})),zt=(F,ee=null)=>{g(F),f(""),I(1);const Ie=ee?Mi(ee.start_date):Wa;b(Ie),u(Ie),F==="ROOT"&&k(vt?Wi[0]:n);const v=F==="ROOT"?"Yearly":dd(ee==null?void 0:ee.horizon);j(v);const pe=F==="ROOT"?Array.from({length:12},(Be,$e)=>$e):sa(ee);T(v==="Quarterly"?Math.floor(pe[0]/3)*3:pe[0]??0)},xr=async(F,ee)=>{if(!m.trim())return;const Ie=(ee==null?void 0:ee.horizon)??null,v=F==="ROOT"?y:dd(Ie),pe=F==="ROOT"?C:(ee==null?void 0:ee.pillar)||n;let Be,$e;if(v==="Yearly"){const Je=Number(z),we=Math.max(Je,Number(p)||Je);Be=`${Je}-01-01`,$e=`${we}-12-31`}else{const Je=ee?Mi(ee.start_date):Number(z);({start_date:Be,end_date:$e}=xp(v,Je,h,D))}await _.createGoal({pillar:pe,title:m.trim(),horizon:v,parent_goal_id:F==="ROOT"?null:F,start_date:Be,end_date:$e}),F!=="ROOT"&&l(Je=>({...Je,[F]:!0})),g(null),f(""),fe()},Ge=F=>{const ee=F.start_date?new Date(F.start_date+"T00:00:00"):new Date,Ie=ee.getMonth(),v=Math.min(Math.max(Math.ceil(ee.getDate()/7),1),4);B({id:F.id,title:F.title,pillar:F.pillar,horizon:F.horizon,parentGoal:e.find(pe=>pe.id===F.parent_goal_id)||null,year:Mi(F.start_date),endYear:Mi(F.end_date),month:F.horizon==="Quarterly"?Math.floor(Ie/3)*3:Ie,week:v})},it=async()=>{if(!x||!x.title.trim())return;let F,ee;if(x.horizon==="Yearly"){const Ie=Number(x.year),v=Math.max(Ie,Number(x.endYear)||Ie);F=`${Ie}-01-01`,ee=`${v}-12-31`}else{let Ie=x.month;x.horizon==="Weekly"&&x.parentGoal&&(Ie=sa(x.parentGoal)[0]);const v=x.parentGoal?Mi(x.parentGoal.start_date):Number(x.year);({start_date:F,end_date:ee}=xp(x.horizon,v,Ie,x.week))}await _.updateGoal(x.id,{title:x.title.trim(),pillar:x.pillar,start_date:F,end_date:ee}),B(null),fe()},xt=({parentId:F,parentGoal:ee,depth:Ie})=>{const v=F==="ROOT",pe=v?y:dd((ee==null?void 0:ee.horizon)??null),Be=v?Array.from({length:12},(we,Mt)=>Mt):sa(ee),$e=bp.filter(we=>Be.includes(we.startMonth)),Je=we=>{j(we),T(0),I(1),u(z)};return t.jsxs("div",{style:{...be.addBox,marginLeft:Ie*24},children:[t.jsx("input",{autoFocus:!0,placeholder:`New ${pe.toLowerCase()} goal…`,value:m,onChange:we=>f(we.target.value),onKeyDown:we=>{we.key==="Enter"&&xr(F,ee),we.key==="Escape"&&g(null)},style:be.input}),v&&vt&&t.jsx("select",{value:C,onChange:we=>k(we.target.value),style:be.monthSelect,title:"Pillar",children:Wi.map(we=>t.jsx("option",{value:we,children:we},we))}),v&&t.jsx("select",{value:y,onChange:we=>Je(we.target.value),style:be.monthSelect,title:"Goal level",children:Fa.map(we=>t.jsx("option",{value:we,children:we},we))}),pe==="Yearly"&&t.jsxs(t.Fragment,{children:[t.jsx("select",{value:z,onChange:we=>{const Mt=Number(we.target.value);b(Mt),p<Mt&&u(Mt)},style:be.monthSelect,title:"Start year",children:Po.map(we=>t.jsx("option",{value:we,children:we},we))}),t.jsx("span",{style:be.toTag,children:"to"}),t.jsx("select",{value:p,onChange:we=>u(Number(we.target.value)),style:be.monthSelect,title:"End year (spans multiple years)",children:Po.filter(we=>we>=z).map(we=>t.jsx("option",{value:we,children:we},we))})]}),pe!=="Yearly"&&v&&t.jsx("select",{value:z,onChange:we=>b(Number(we.target.value)),style:be.monthSelect,title:"Year",children:Po.map(we=>t.jsx("option",{value:we,children:we},we))}),pe==="Quarterly"&&t.jsx("select",{value:h,onChange:we=>T(Number(we.target.value)),style:be.monthSelect,children:$e.map(we=>t.jsx("option",{value:we.startMonth,children:we.label},we.startMonth))}),pe==="Monthly"&&t.jsx("select",{value:h,onChange:we=>T(Number(we.target.value)),style:be.monthSelect,children:Be.map(we=>t.jsx("option",{value:we,children:dn[we]},we))}),pe==="Weekly"&&t.jsxs(t.Fragment,{children:[v?t.jsx("select",{value:h,onChange:we=>T(Number(we.target.value)),style:be.monthSelect,children:Be.map(we=>t.jsx("option",{value:we,children:dn[we]},we))}):t.jsx("span",{style:be.inheritTag,children:dn[Be[0]]}),t.jsx("select",{value:D,onChange:we=>I(Number(we.target.value)),style:be.monthSelect,children:[1,2,3,4].map(we=>t.jsxs("option",{value:we,children:["Week ",we]},we))})]}),t.jsx("button",{onClick:()=>xr(F,ee),style:be.saveBtn,children:t.jsx(He,{size:14})}),t.jsx("button",{onClick:()=>g(null),style:be.cancelBtn,children:t.jsx(De,{size:14})})]})},ut=({goal:F,depth:ee})=>{var $e,Je,we,Mt,pt;const Ie=Et(F.id),v=a[F.id],pe=F.horizon!=="Weekly";if((x==null?void 0:x.id)===F.id){const nt=sa(x.parentGoal),hn=bp.filter(Ve=>nt.includes(Ve.startMonth)),_n=!x.parentGoal;return t.jsxs("div",{style:{...be.editBox,marginLeft:ee*24},children:[t.jsx("input",{autoFocus:!0,value:x.title,onChange:Ve=>B({...x,title:Ve.target.value}),onKeyDown:Ve=>Ve.key==="Enter"&&it(),style:{...be.input,flex:1}}),t.jsx("select",{value:x.pillar,onChange:Ve=>B({...x,pillar:Ve.target.value}),style:be.monthSelect,children:Wi.map(Ve=>t.jsx("option",{children:Ve},Ve))}),x.horizon==="Yearly"&&t.jsxs(t.Fragment,{children:[t.jsx("select",{value:x.year,onChange:Ve=>{const Ln=Number(Ve.target.value);B({...x,year:Ln,endYear:Math.max(Ln,x.endYear)})},style:be.monthSelect,title:"Start year",children:Po.map(Ve=>t.jsx("option",{value:Ve,children:Ve},Ve))}),t.jsx("span",{style:be.toTag,children:"to"}),t.jsx("select",{value:x.endYear,onChange:Ve=>B({...x,endYear:Number(Ve.target.value)}),style:be.monthSelect,title:"End year (spans multiple years)",children:Po.filter(Ve=>Ve>=x.year).map(Ve=>t.jsx("option",{value:Ve,children:Ve},Ve))})]}),x.horizon!=="Yearly"&&_n&&t.jsx("select",{value:x.year,onChange:Ve=>B({...x,year:Number(Ve.target.value)}),style:be.monthSelect,title:"Year",children:Po.map(Ve=>t.jsx("option",{value:Ve,children:Ve},Ve))}),x.horizon==="Quarterly"&&t.jsx("select",{value:x.month,onChange:Ve=>B({...x,month:Number(Ve.target.value)}),style:be.monthSelect,children:hn.map(Ve=>t.jsx("option",{value:Ve.startMonth,children:Ve.label},Ve.startMonth))}),x.horizon==="Monthly"&&t.jsx("select",{value:x.month,onChange:Ve=>B({...x,month:Number(Ve.target.value)}),style:be.monthSelect,children:nt.map(Ve=>t.jsx("option",{value:Ve,children:dn[Ve]},Ve))}),x.horizon==="Weekly"&&t.jsxs(t.Fragment,{children:[_n?t.jsx("select",{value:x.month,onChange:Ve=>B({...x,month:Number(Ve.target.value)}),style:be.monthSelect,children:nt.map(Ve=>t.jsx("option",{value:Ve,children:dn[Ve]},Ve))}):t.jsx("span",{style:be.inheritTag,children:dn[nt[0]]}),t.jsx("select",{value:x.week,onChange:Ve=>B({...x,week:Number(Ve.target.value)}),style:be.monthSelect,children:[1,2,3,4].map(Ve=>t.jsxs("option",{value:Ve,children:["Week ",Ve]},Ve))})]}),t.jsx("button",{onClick:it,style:be.saveBtn,children:t.jsx(He,{size:14})}),t.jsx("button",{onClick:()=>B(null),style:be.cancelBtn,children:t.jsx(De,{size:14})})]})}return t.jsxs("div",{children:[t.jsxs("div",{style:{...be.row,marginLeft:ee*24,background:ee===0&&(($e=Lr[F.pillar])==null?void 0:$e.soft)||"transparent"},children:[Ie.length>0?t.jsx("button",{onClick:()=>le(F.id),style:be.caret,children:v?t.jsx(mo,{size:15}):t.jsx(bn,{size:15})}):t.jsx("span",{style:{...be.caret,opacity:.25},children:t.jsx(El,{size:12})}),t.jsx("span",{style:{...be.horizonTag,color:((Je=Lr[F.pillar])==null?void 0:Je.dot)||ct.dot,borderColor:((we=Lr[F.pillar])==null?void 0:we.dot)||ct.dot},title:F.horizon,children:W?mv[F.horizon]:F.horizon}),t.jsxs("div",{style:be.nameCol,children:[t.jsx("span",{style:{...be.title,...Oe===F.id?be.titleFull:{}},title:F.title,onPointerDown:()=>he(F.id),onPointerUp:V,onPointerLeave:V,onPointerCancel:V,children:F.title}),t.jsx("span",{style:be.whenSub,children:yv(F)})]}),W?t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{position:"relative",flexShrink:0},children:[t.jsx("button",{onClick:nt=>oe(nt,F.id),style:be.rowAdd,title:"Options",children:t.jsx(_h,{size:15})}),P===F.id&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:be.menuBackdrop,onClick:()=>ne(null)}),t.jsxs("div",{style:{...be.goalMenu,...E},children:[t.jsxs("button",{style:be.menuItem,onClick:()=>{Ge(F),ne(null)},children:[t.jsx(wt,{size:14})," Edit"]}),pe&&t.jsxs("button",{style:be.menuItem,onClick:()=>{l(nt=>({...nt,[F.id]:!0})),zt(F.id,F),ne(null)},children:[t.jsx(mt,{size:14})," Add sub-goal"]}),t.jsxs("button",{style:{...be.menuItem,color:"#C2536B"},onClick:()=>{ye(F.id,F.title),ne(null)},children:[t.jsx(De,{size:14})," Delete"]})]})]})]}),t.jsx("button",{onClick:()=>bt(F),style:{...be.rowAdd,color:ot(F)?((Mt=Lr[F.pillar])==null?void 0:Mt.dot)||ct.dot:"var(--text-3)"},title:ot(F)?"Showing on timeline":"Hidden from timeline",children:ot(F)?t.jsx(Cs,{size:14}):t.jsx(sl,{size:14})})]}):t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>bt(F),style:{...be.rowAdd,color:ot(F)?((pt=Lr[F.pillar])==null?void 0:pt.dot)||ct.dot:"var(--text-3)"},title:ot(F)?"Showing on timeline — click to hide":"Hidden from timeline — click to show",children:ot(F)?t.jsx(Cs,{size:13}):t.jsx(sl,{size:13})}),t.jsx("button",{onClick:()=>Ge(F),style:be.rowAdd,title:"Edit",children:t.jsx(wt,{size:12})}),pe&&t.jsx("button",{onClick:()=>{l(nt=>({...nt,[F.id]:!0})),zt(F.id,F)},style:be.rowAdd,title:"Add sub-goal",children:t.jsx(mt,{size:13})}),t.jsx("button",{onClick:()=>ye(F.id,F.title),style:{...be.rowAdd,color:"var(--text-3)"},title:"Delete",children:t.jsx(De,{size:13})})]})]}),v&&Ie.map(nt=>t.jsx(ut,{goal:nt,depth:ee+1},nt.id)),v&&d===F.id&&t.jsx(xt,{parentId:F.id,parentGoal:F,depth:ee+1})]})},Dt=e.filter(F=>ot(F)&&F.start_date&&F.end_date),Wr=bv.map(F=>({...F,items:Dt.filter(ee=>F.horizons.includes(ee.horizon)).sort((ee,Ie)=>ee.pillar.localeCompare(Ie.pillar)||ee.start_date.localeCompare(Ie.start_date)||fp[ee.horizon]-fp[Ie.horizon]||ee.end_date.localeCompare(Ie.end_date))})).filter(F=>F.items.length>0),jt=(()=>{if(!Dt.length)return null;let F=Dt[0].start_date,ee=Dt[0].end_date;return Dt.forEach(Ie=>{Ie.start_date<F&&(F=Ie.start_date),Ie.end_date>ee&&(ee=Ie.end_date)}),{start:Oo(F),end:Oo(ee)}})(),Mr=(()=>{if(!jt)return[];const F=[];for(let ee=jt.start.getTime();ee<=jt.end.getTime();ee+=Ni)F.push(new Date(ee));return F})(),Gt=Mr.length,mn=(()=>{const F=[];return Mr.forEach(ee=>{const Ie=`${ee.getFullYear()}-${ee.getMonth()}`,v=F[F.length-1];v&&v.key===Ie?v.days++:F.push({key:Ie,label:`${dn[ee.getMonth()]} '${String(ee.getFullYear()).slice(2)}`,days:1})}),F})(),er=new Date;er.setHours(0,0,0,0);const or=jt?Math.round((er-jt.start)/Ni):-1,yr=or>=0&&or<Gt,M=F=>Math.round((Oo(F.end_date)-Oo(F.start_date))/Ni)+1,ce=ge==="month",We=jt?jt.start.getFullYear():0,Ye=jt?jt.start.getMonth():0,St=(()=>{if(!jt)return[];const F=[];let ee=We,Ie=Ye;const v=jt.end.getFullYear(),pe=jt.end.getMonth();for(;ee<v||ee===v&&Ie<=pe;)F.push({y:ee,m:Ie}),Ie++,Ie>11&&(Ie=0,ee++);return F})(),Ue=St.length||1,Ke=(F,ee)=>{const Ie=Oo(F),v=(Ie.getFullYear()-We)*12+Ie.getMonth()-Ye,pe=new Date(Ie.getFullYear(),Ie.getMonth()+1,0).getDate();return v+(Ie.getDate()-(ee?0:1))/pe},Tt=(F,ee)=>Ke(F,ee)/Ue*100,_r=`${er.getFullYear()}-${String(er.getMonth()+1).padStart(2,"0")}-${String(er.getDate()).padStart(2,"0")}`,L=jt?Tt(_r,!1):0,ze=(Q?os:0)+or*qt,rt=jt?`${jt.start.getTime()}-${jt.end.getTime()}`:"";return c.useEffect(()=>{if(ce||!yr)return;const F=R.current;F&&(F.scrollLeft=Math.max(0,ze-F.clientWidth/2+qt/2))},[rt,or,Q,yr,ce]),t.jsxs("div",{style:be.page,children:[t.jsxs("div",{style:be.head,children:[t.jsx("div",{style:be.eyebrow,children:"Anvil · Goals"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("h1",{style:be.h1,children:vt?"All Goals":`${n} Goals`}),t.jsx(Yt,{id:"goals"})]})]}),t.jsxs("div",{style:be.pillarPicker,children:[t.jsx("button",{onClick:()=>{o("All"),g(null),B(null)},style:{...be.pillarChip,...vt?{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"}:{}},children:"All Goals"}),Wi.map(F=>{const ee=F===n;return t.jsxs("button",{onClick:()=>{o(F),g(null),B(null)},style:{...be.pillarChip,...ee?{background:Lr[F].dot,color:"#fff",borderColor:Lr[F].dot}:{}},children:[t.jsx("span",{style:{...be.dot,background:ee?"#fff":Lr[F].dot}}),F]},F)})]}),t.jsxs("div",{style:be.list,children:[Wt.map(F=>t.jsx(ut,{goal:F,depth:0},F.id)),Wt.length===0&&t.jsxs("div",{style:be.ganttEmpty,children:["No goals yet",vt?"":` for ${n}`,"."]}),d==="ROOT"&&t.jsx(xt,{parentId:"ROOT",parentGoal:null,depth:0}),d!=="ROOT"&&t.jsxs("button",{onClick:()=>zt("ROOT",null),style:be.rootAdd,children:[t.jsx(mt,{size:14})," Add new goal"]})]}),t.jsxs("div",{style:be.ganttWrap,children:[t.jsxs("div",{style:be.ganttTop,children:[t.jsxs("div",{style:be.ganttTitle,children:[ce?"Monthly":"Daily"," Timeline",jt?` · ${mp(jt.start)} – ${mp(jt.end)}`:""]}),t.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[t.jsxs("div",{style:be.zoomToggle,children:[t.jsx("button",{onClick:()=>A("day"),style:{...be.zoomBtn,...ce?{}:be.zoomBtnOn},children:"Day"}),t.jsx("button",{onClick:()=>A("month"),style:{...be.zoomBtn,...ce?be.zoomBtnOn:{}},children:"Month"})]}),t.jsxs("button",{onClick:()=>re(F=>!F),style:be.labelToggle,children:[Q?t.jsx(B0,{size:14}):t.jsx(R0,{size:14}),Q?"Hide names":"Show names"]})]})]}),jt?ce?t.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[t.jsxs("div",{style:be.gBandRow,children:[Q&&t.jsx("div",{style:{...be.gLabelHead,zIndex:4},children:"Goal"}),t.jsx("div",{style:{flex:1,display:"grid",gridTemplateColumns:`repeat(${Ue}, 1fr)`,minWidth:0},children:St.map((F,ee)=>t.jsxs("div",{style:be.gMonthFluid,children:[dn[F.m],F.m===0||ee===0?` '${String(F.y).slice(2)}`:""]},ee))})]}),Wr.map(F=>t.jsxs("div",{children:[t.jsxs("div",{style:be.gGroupRow,children:[Q?t.jsxs("div",{style:be.gGroupLabel,children:[F.label,t.jsx("span",{style:be.gGroupCount,children:F.items.length})]}):t.jsxs("div",{style:be.gGroupChip,children:[F.label," · ",F.items.length]}),t.jsx("div",{style:{flex:1}})]}),F.items.map(ee=>{var pt;const Ie=((pt=Lr[ee.pillar])==null?void 0:pt.dot)||"#9A968C",v=(X==null?void 0:X.id)===ee.id,pe=v?X.dx:0,Be=Tt(ee.start_date,!1),$e=Math.max(2,Tt(ee.end_date,!0)-Be),Je=M(ee),we=$e>=14,Mt=`${ee.title} · ${ee.start_date} → ${ee.end_date} · ${Je} day${Je>1?"s":""}`;return t.jsxs("div",{style:be.gRow,children:[Q&&t.jsxs("div",{style:{...be.gLabel,paddingLeft:12},children:[t.jsx("span",{style:{...be.ganttRowDot,background:Ie}}),t.jsx("span",{style:{...be.gHzTag,color:Ie,borderColor:Ie},children:hp[ee.horizon]}),t.jsx("span",{style:be.gLabelText,title:ee.title,children:ee.title}),t.jsxs("span",{style:be.gDurChip,children:[Je,"d"]})]}),t.jsxs("div",{style:{position:"relative",flex:1,minHeight:36,minWidth:0,backgroundImage:`repeating-linear-gradient(to right, var(--border) 0, var(--border) 1px, transparent 1px, transparent calc(100% / ${Ue}))`},children:[yr&&t.jsx("div",{style:{...be.gTodayLine,left:`${L}%`}}),t.jsxs("div",{onPointerDown:nt=>{nt.preventDefault(),O.current=nt.clientX;const hn=nt.currentTarget.parentNode.offsetWidth;ie({id:ee.id,startX:nt.clientX,dx:0,g:ee,pxPerDay:hn/Gt})},style:{...be.gBar,left:`${Be}%`,width:`${$e}%`,background:Ie,cursor:v?"grabbing":"grab",transform:pe?`translateX(${pe}px)`:"none",zIndex:v?6:1,boxShadow:v?"0 4px 12px rgba(0,0,0,0.28)":"0 1px 2px rgba(0,0,0,0.15)",touchAction:"none"},title:Mt,children:[t.jsx(al,{size:12,style:{opacity:.7,flexShrink:0,marginRight:2,color:"#fff"}}),we&&t.jsx("span",{style:be.gBarLabel,children:ee.title})]}),!we&&t.jsx("span",{style:{...be.gBarOutside,left:`calc(${Be+$e}% + 6px)`},title:Mt,children:ee.title})]})]},ee.id)})]},F.key))]}):t.jsx("div",{style:be.ganttScroll,ref:R,children:t.jsxs("div",{style:{minWidth:(Q?os:0)+Gt*qt,position:"relative"},children:[yr&&t.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:ze,width:qt,background:"color-mix(in srgb, var(--accent) 14%, transparent)",pointerEvents:"none",zIndex:3}}),t.jsxs("div",{style:be.gBandRow,children:[Q&&t.jsx("div",{style:{...be.gLabelHead,zIndex:4},children:"Goal"}),t.jsx("div",{style:{display:"flex"},children:mn.map((F,ee)=>t.jsx("div",{style:{...be.gMonthCell,width:F.days*qt},children:F.label},ee))})]}),t.jsxs("div",{style:be.gBandRow,children:[Q&&t.jsx("div",{style:{...be.gLabelHead,zIndex:4,fontSize:10,color:"var(--text-3)",fontWeight:600},children:"days →"}),t.jsx("div",{style:{display:"flex"},children:Mr.map((F,ee)=>{const Ie=F.getDay()===0||F.getDay()===6,v=ee===or;return t.jsx("div",{style:{...be.gDayCell,...Ie?be.gWeekend:{},...v?be.gTodayCell:{}},children:F.getDate()},ee)})})]}),Wr.map(F=>t.jsxs("div",{children:[t.jsxs("div",{style:be.gGroupRow,children:[Q?t.jsxs("div",{style:be.gGroupLabel,children:[F.label,t.jsx("span",{style:be.gGroupCount,children:F.items.length})]}):t.jsxs("div",{style:be.gGroupChip,children:[F.label," · ",F.items.length]}),t.jsx("div",{style:{width:Gt*qt,flexShrink:0}})]}),F.items.map(ee=>{var Ln;const Ie=((Ln=Lr[ee.pillar])==null?void 0:Ln.dot)||"#9A968C",v=Math.round((Oo(ee.start_date)-jt.start)/Ni),pe=M(ee),Be=(X==null?void 0:X.id)===ee.id,$e=Be?X.dx:0,Je=xv(ee),we=(K==null?void 0:K.id)===ee.id,Mt=Je?Ic(ee):pe,pt=Je?yp(ee):pe,nt=we?Math.max(Mt,Math.min(pt,pe+Math.round(K.dx/qt))):pe,hn=nt*qt-4,_n=hn>=54,Ve=`${ee.title} · ${ee.start_date} → ${ee.end_date} · ${nt} day${nt>1?"s":""}${Je?` (max ${pt})`:""}`;return t.jsxs("div",{style:be.gRow,children:[Q&&t.jsxs("div",{style:{...be.gLabel,paddingLeft:12},children:[t.jsx("span",{style:{...be.ganttRowDot,background:Ie}}),t.jsx("span",{style:{...be.gHzTag,color:Ie,borderColor:Ie},children:hp[ee.horizon]}),t.jsx("span",{style:be.gLabelText,title:ee.title,children:ee.title}),t.jsxs("span",{style:be.gDurChip,children:[nt,"d"]})]}),t.jsxs("div",{style:{...be.gTrack,width:Gt*qt},children:[yr&&t.jsx("div",{style:{...be.gTodayLine,left:or*qt}}),t.jsxs("div",{onPointerDown:nn=>{nn.preventDefault(),O.current=nn.clientX,ie({id:ee.id,startX:nn.clientX,dx:0,g:ee,pxPerDay:qt})},style:{...be.gBar,left:v*qt+2,width:hn,background:Ie,cursor:Be?"grabbing":"grab",transform:$e?`translateX(${$e}px)`:"none",zIndex:Be||we?6:1,boxShadow:Be||we?"0 4px 12px rgba(0,0,0,0.28)":"0 1px 2px rgba(0,0,0,0.15)",touchAction:"none"},title:Ve,children:[Je&&nt>Mt&&t.jsx("div",{style:{position:"absolute",left:Mt*qt,top:0,bottom:0,right:0,background:"#C2536B",borderRadius:"0 5px 5px 0"}}),t.jsx(al,{size:12,style:{opacity:.7,flexShrink:0,marginRight:2,color:"#fff",position:"relative",zIndex:1}}),_n&&t.jsx("span",{style:{...be.gBarLabel,position:"relative",zIndex:1},children:ee.title}),Je&&t.jsx("div",{onPointerDown:nn=>{nn.preventDefault(),nn.stopPropagation(),de({id:ee.id,startX:nn.clientX,dx:0,g:ee})},style:be.resizeHandle,title:`Drag to extend up to ${pt} days`,children:t.jsx("div",{style:be.resizeGrip})})]}),!_n&&t.jsx("span",{style:{...be.gBarOutside,left:v*qt+hn+8+$e},title:Ve,children:ee.title})]})]},ee.id)})]},F.key))]})}):t.jsx("div",{style:be.ganttEmpty,children:"No goals on the timeline. Click the eye icon on a goal to show it here."}),jt&&t.jsxs("div",{style:be.gLegend,children:[t.jsxs("span",{style:be.gLegendItem,children:[t.jsx("span",{style:{...be.gLegendBar}})," bar length = number of days"]}),t.jsxs("span",{style:be.gLegendItem,children:[t.jsx("span",{style:be.gLegendToday})," today"]})]})]}),G&&t.jsxs("div",{style:be.warnToast,children:[t.jsx(Nh,{size:15,style:{flexShrink:0}}),t.jsx("span",{children:G})]}),t.jsx(Tr,{toasts:Ae,onUndo:tt,onDismiss:yt})]})}const be={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box",maxWidth:"100%",overflowX:"hidden"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},pillarPicker:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16},pillarChip:{display:"flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},list:{background:"var(--surface)",borderRadius:12,padding:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"hidden"},row:{display:"flex",alignItems:"center",gap:9,padding:"9px 10px",borderRadius:8,flexWrap:"nowrap"},caret:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",display:"grid",placeItems:"center",padding:0,width:18,height:18,flexShrink:0},horizonTag:{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",border:"1px solid",borderRadius:5,padding:"2px 6px",flexShrink:0},nameCol:{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:1},title:{fontSize:14,fontWeight:500,lineHeight:1.3,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",userSelect:"none",WebkitUserSelect:"none",cursor:"default"},titleFull:{whiteSpace:"normal",overflow:"visible",textOverflow:"clip",wordBreak:"break-word"},whenSub:{fontSize:11,fontStyle:"italic",color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},rowAdd:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,flexShrink:0},menuBackdrop:{position:"fixed",inset:0,zIndex:40},goalMenu:{position:"fixed",zIndex:41,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 6px 24px rgba(0,0,0,0.18)",padding:4,minWidth:180,display:"flex",flexDirection:"column"},menuItem:{display:"flex",alignItems:"center",gap:9,width:"100%",border:"none",background:"none",padding:"10px 12px",borderRadius:7,cursor:"pointer",fontFamily:"inherit",fontSize:13.5,fontWeight:500,color:"var(--text)",textAlign:"left"},rootAdd:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"var(--text-2)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"9px 12px",cursor:"pointer",fontWeight:600,fontFamily:"inherit",marginTop:6,width:"100%",justifyContent:"center"},addBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 0 6px 28px",flexWrap:"wrap"},editBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 10px",flexWrap:"wrap",background:"var(--bg)",borderRadius:8,margin:"4px 0"},input:{border:"1px solid var(--border)",borderRadius:7,padding:"8px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",flex:1,minWidth:120},monthSelect:{border:"1px solid var(--border)",borderRadius:7,padding:"8px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},inheritTag:{fontSize:11.5,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"6px 9px",borderRadius:7,flexShrink:0},toTag:{fontSize:11.5,fontWeight:600,color:"var(--text-3)",flexShrink:0},warnToast:{position:"fixed",top:18,left:"50%",transform:"translateX(-50%)",zIndex:300,display:"flex",alignItems:"center",gap:8,maxWidth:"90vw",background:"#C2536B",color:"#fff",padding:"10px 16px",borderRadius:10,fontSize:13,fontWeight:600,boxShadow:"0 6px 24px rgba(0,0,0,0.25)"},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},ganttWrap:{background:"var(--surface)",borderRadius:12,padding:"16px 14px",marginTop:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},ganttTop:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:10,marginBottom:14},ganttTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",fontFamily:"'Fraunces',Georgia,serif"},labelToggle:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"5px 10px",borderRadius:8,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},zoomToggle:{display:"inline-flex",border:"1px solid var(--border)",borderRadius:8,overflow:"hidden"},zoomBtn:{border:"none",background:"var(--surface)",color:"var(--text-2)",padding:"5px 12px",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},zoomBtnOn:{background:"var(--accent-strong)",color:"#fff"},gMonthFluid:{borderLeft:"1px solid var(--border)",fontSize:10,fontWeight:700,color:"var(--text-2)",textAlign:"center",padding:"5px 0",whiteSpace:"nowrap",overflow:"hidden"},gGroupChip:{position:"sticky",left:0,zIndex:3,background:"var(--surface-2)",padding:"5px 10px",fontSize:10,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-2)",whiteSpace:"nowrap",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center"},ganttEmpty:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},ganttScroll:{overflowX:"auto"},ganttRowDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},gBandRow:{display:"flex",alignItems:"stretch",borderBottom:"1px solid var(--border)"},gLabelHead:{width:os,flexShrink:0,position:"sticky",left:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center",padding:"6px 10px",fontSize:12,fontWeight:700,color:"var(--text-2)"},gMonthCell:{flexShrink:0,borderLeft:"1px solid var(--border)",fontSize:10.5,fontWeight:700,color:"var(--text-2)",textAlign:"center",padding:"5px 0",whiteSpace:"nowrap",overflow:"hidden"},gDayCell:{width:qt,flexShrink:0,textAlign:"center",fontSize:10,color:"var(--text-3)",padding:"4px 0",borderLeft:"1px solid var(--border)",fontWeight:600},gWeekend:{background:"var(--surface-2)"},gTodayCell:{background:"var(--hover)",color:"var(--accent)",fontWeight:800},gGroupRow:{display:"flex",alignItems:"stretch",background:"var(--surface-2)",borderBottom:"1px solid var(--border)",borderTop:"1px solid var(--border)"},gGroupLabel:{width:os,flexShrink:0,position:"sticky",left:0,background:"var(--surface-2)",zIndex:3,padding:"6px 12px",fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-2)",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center",gap:7},gGroupCount:{fontSize:10,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 6px"},gHzTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.04em",border:"1px solid",borderRadius:4,padding:"1px 4px",flexShrink:0},gRow:{display:"flex",alignItems:"stretch",minHeight:36,borderBottom:"1px solid var(--border)"},gLabel:{width:os,flexShrink:0,display:"flex",alignItems:"center",gap:7,position:"sticky",left:0,background:"var(--surface)",zIndex:2,borderRight:"1px solid var(--border)",paddingRight:8,overflow:"hidden"},gLabelText:{flex:1,minWidth:0,fontSize:12,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"var(--text)"},gDurChip:{fontSize:10,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",borderRadius:10,padding:"1px 6px",flexShrink:0,marginRight:6},gTrack:{position:"relative",flexShrink:0,minHeight:36,backgroundImage:`repeating-linear-gradient(to right, var(--border) 0, var(--border) 1px, transparent 1px, transparent ${qt}px)`},gBar:{position:"absolute",top:9,height:18,borderRadius:5,display:"flex",alignItems:"center",padding:"0 7px",boxShadow:"0 1px 2px rgba(0,0,0,0.15)",overflow:"hidden",zIndex:1},gBarLabel:{fontSize:11,fontWeight:600,color:"#fff",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},gBarOutside:{position:"absolute",top:9,height:18,display:"flex",alignItems:"center",fontSize:11,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",pointerEvents:"none",zIndex:1},resizeHandle:{position:"absolute",right:0,top:0,bottom:0,width:12,cursor:"ew-resize",display:"grid",placeItems:"center",touchAction:"none",zIndex:2},resizeGrip:{width:2,height:11,background:"rgba(255,255,255,0.9)",borderRadius:1,boxShadow:"3px 0 0 rgba(255,255,255,0.6)"},gTodayLine:{position:"absolute",top:0,bottom:0,width:2,background:"#C2536B",zIndex:0,opacity:.6},gLegend:{display:"flex",gap:16,marginTop:12,fontSize:11,color:"var(--text-3)",flexWrap:"wrap"},gLegendItem:{display:"flex",alignItems:"center",gap:6,fontWeight:600},gLegendBar:{width:18,height:8,borderRadius:3,background:"var(--accent)",display:"inline-block"},gLegendToday:{width:2,height:12,background:"#C2536B",display:"inline-block"}},jv=`
@keyframes anvilDdPop { 0% { opacity: 0; transform: translateY(-4px) scale(0.98); } 100% { opacity: 1; transform: translateY(0) scale(1); } }
.anvil-dd-item:hover { background: var(--hover); }
`;function cr({value:e,options:r,onChange:n,style:o,placeholder:i="Select…"}){const[s,a]=c.useState(!1),l=c.useRef(null),d=(r||[]).map(m=>m!==null&&typeof m=="object"?m:{value:m,label:String(m)}),g=d.find(m=>String(m.value)===String(e));return c.useEffect(()=>{if(!s)return;const m=h=>{l.current&&!l.current.contains(h.target)&&a(!1)},f=h=>{h.key==="Escape"&&a(!1)};return document.addEventListener("mousedown",m),document.addEventListener("keydown",f),()=>{document.removeEventListener("mousedown",m),document.removeEventListener("keydown",f)}},[s]),t.jsxs("div",{ref:l,style:{...yn.wrap,...o},children:[t.jsxs("button",{type:"button",onClick:()=>a(m=>!m),style:{...yn.trigger,...s?yn.triggerOpen:{}},children:[t.jsx("span",{style:{...yn.triggerLbl,...g?{}:{color:"var(--text-3)"}},children:g?g.label:i}),t.jsx(mo,{size:14,style:{...yn.chev,...s?{transform:"rotate(180deg)"}:{}}})]}),s&&t.jsxs("div",{style:yn.menu,children:[t.jsx("style",{children:jv}),d.map(m=>{const f=String(m.value)===String(e);return t.jsxs("button",{type:"button",className:"anvil-dd-item",onClick:()=>{n(m.value),a(!1)},style:{...yn.item,...f?yn.itemSel:{}},children:[t.jsx("span",{style:yn.itemLbl,children:m.label}),f&&t.jsx(He,{size:13,style:{flexShrink:0}})]},String(m.value))})]})]})}const yn={wrap:{position:"relative",minWidth:0},trigger:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,width:"100%",border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text)",borderRadius:9,padding:"8px 11px",fontSize:13,fontWeight:500,cursor:"pointer",fontFamily:"inherit",textAlign:"left",transition:"border-color 0.15s ease, box-shadow 0.15s ease"},triggerOpen:{borderColor:"var(--accent)",boxShadow:"0 0 0 3px color-mix(in srgb, var(--accent) 20%, transparent)"},triggerLbl:{flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},chev:{color:"var(--text-3)",flexShrink:0,transition:"transform 0.15s ease"},menu:{position:"absolute",top:"calc(100% + 4px)",left:0,right:0,zIndex:400,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 10px 32px rgba(0,0,0,0.16)",padding:4,maxHeight:240,overflowY:"auto",animation:"anvilDdPop 0.14s ease"},item:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,width:"100%",border:"none",background:"none",color:"var(--text)",borderRadius:7,padding:"8px 10px",fontSize:13,fontWeight:500,cursor:"pointer",fontFamily:"inherit",textAlign:"left"},itemSel:{background:"color-mix(in srgb, var(--accent) 12%, transparent)",color:"var(--accent)",fontWeight:700},itemLbl:{flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}};function kv(){const e=c.useRef(null),[r,n]=c.useState(null),o=c.useCallback(a=>new Promise(l=>{e.current=l,n(a)}),[]),i=c.useCallback(a=>{var l;n(null),(l=e.current)==null||l.call(e,a),e.current=null},[]),s=c.useCallback(()=>r?t.jsx(wv,{...r,onConfirm:()=>i(!0),onCancel:()=>i(!1)}):null,[r,i]);return o.Host=s,o}function wv({title:e,message:r,confirmLabel:n="Delete",cancelLabel:o="Cancel",danger:i=!0,onConfirm:s,onCancel:a}){return t.jsx("div",{style:sn.overlay,onClick:a,children:t.jsxs("div",{style:sn.modal,onClick:l=>l.stopPropagation(),children:[t.jsx("div",{style:{...sn.iconWrap,...i?{}:sn.iconWrapCalm},children:t.jsx(Nh,{size:20,color:i?"#C2536B":"var(--accent)"})}),t.jsx("div",{style:sn.title,children:e}),r&&t.jsx("div",{style:sn.message,children:r}),t.jsxs("div",{style:sn.actions,children:[t.jsx("button",{onClick:a,style:sn.cancelBtn,children:o}),t.jsx("button",{onClick:s,style:{...sn.confirmBtn,...i?{}:sn.confirmBtnCalm},children:n})]})]})})}const sn={overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:500,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:14,width:"100%",maxWidth:360,padding:"22px 22px 18px",boxShadow:"0 20px 60px rgba(0,0,0,0.3)",fontFamily:"'Inter',system-ui,sans-serif",textAlign:"center"},iconWrap:{width:42,height:42,borderRadius:"50%",background:"rgba(194,83,107,0.12)",display:"grid",placeItems:"center",margin:"0 auto 12px"},iconWrapCalm:{background:"color-mix(in srgb, var(--accent) 14%, transparent)"},title:{fontSize:16,fontWeight:700,color:"var(--text)",marginBottom:6,lineHeight:1.35},message:{fontSize:13,color:"var(--text-2)",lineHeight:1.55,marginBottom:18},actions:{display:"flex",gap:8,marginTop:4},cancelBtn:{flex:1,height:38,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",fontSize:13.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},confirmBtn:{flex:1,height:38,borderRadius:9,border:"none",background:"#C2536B",color:"#fff",fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},confirmBtnCalm:{background:"var(--accent)"}},tf=[{value:"regular",label:"Regular (yes/no)"},{value:"weekly",label:"Weekly (specific days)"},{value:"minimum",label:"Minimum (at least N)"},{value:"maximum",label:"Maximum (no more than N)"}],rf=["day","week","month","year"],Fn={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.12)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.12)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.12)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.12)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.12)"}},ui=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Sv=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Rs=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,Ls=()=>Lo(),Cv=(e=0)=>{const r=new Date(Ls()+"T12:00:00"),n=r.getDay(),o=n===0?-6:1-n,i=new Date(r);return i.setDate(r.getDate()+o+e*7),Array.from({length:7},(s,a)=>{const l=new Date(i);return l.setDate(i.getDate()+a),Rs(l)})},Tv=(e=0)=>{const r=new Date(Ls()+"T12:00:00"),n=new Date(r.getFullYear(),r.getMonth()+e,1),o=n.getFullYear(),i=n.getMonth(),s=new Date(o,i+1,0).getDate(),a=n.getDay(),l=a===0?6:a-1,d=Array.from({length:s},(m,f)=>`${o}-${String(i+1).padStart(2,"0")}-${String(f+1).padStart(2,"0")}`),g=n.toLocaleDateString("en-US",{month:"long",year:"numeric"});return{dates:d,startOffset:l,label:g,year:o,month:i}},vp=e=>new Date(e+"T00:00").toLocaleDateString("en-US",{month:"short",day:"numeric"}),zv=(e,r)=>{var i;const n=Number(e==null?void 0:e.min_interval_min)||0;if(n<=0||r!==Ls())return 0;const o=(i=e.log_count_times)==null?void 0:i[r];return o?Math.max(0,new Date(o).getTime()+n*6e4-Date.now()):0},nf=e=>{const r=Math.ceil(e/1e3);return`${Math.floor(r/60)}:${String(r%60).padStart(2,"0")}`},Qn=Ls(),Iv=new Date().getFullYear();function Bv(){var Oe,Ce;const[e,r]=c.useState([]),[n,o]=c.useState("ALL"),[i,s]=c.useState(!1),[a,l]=c.useState(!1),[d,g]=c.useState(!1),[m,f]=c.useState(null),[h,T]=c.useState(null),[D,I]=c.useState(null),[z,b]=c.useState({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week",days:[],min_interval_min:0}),[p,u]=c.useState(!1),[y,j]=c.useState([]),C=kv(),k=c.useCallback(()=>_.getHabits().then(r).catch(console.error),[]);c.useEffect(()=>{k()},[k]);const x=c.useCallback(U=>{U&&U.id!=null&&r(P=>P.map(ne=>ne.id===U.id?U:ne))},[]);c.useEffect(()=>{_.getSetting("habit_order").then(U=>{Array.isArray(U==null?void 0:U.value)&&j(U.value)}).catch(()=>{})},[]);const B=c.useMemo(()=>y.length?[...e].sort((U,P)=>{const ne=y.indexOf(U.id),E=y.indexOf(P.id);return ne===-1&&E===-1?0:ne===-1?1:E===-1?-1:ne-E}):e,[e,y]),W=c.useMemo(()=>B.filter(U=>U.active!==!1),[B]);c.useEffect(()=>{n!=="ALL"&&e.some(U=>U.id===n&&U.active===!1)&&o("ALL")},[e,n]);const Q=async U=>{j(U),await _.setSetting("habit_order",U),u(!1)},re=async(U,P)=>{x(await _.updateHabit(U,{active:P}))};c.useEffect(()=>{const U=()=>{const P=window.innerWidth<720;s(P),P||l(!1)};return U(),window.addEventListener("resize",U),()=>window.removeEventListener("resize",U)},[]);const{deleteItem:ge,toasts:A,handleUndo:X,handleDismiss:ie}=Cr(_.deleteHabit,_.restoreHabit,k),xe=U=>{o(U),i&&l(!1)},q=(U,P)=>{(U.type==="minimum"||U.type==="maximum")&&U.period==="day"?!i&&zv(U,P)>0?I(ne=>ne&&ne.habitId===U.id&&ne.date===P?null:{habitId:U.id,date:P}):T({habit:U,date:P}):K(U.id,P)},K=async(U,P)=>{x(await _.toggleHabitLog(U,P))},de=async(U,P,ne,E)=>{try{x(await _.setHabitLogCount(U,P,ne,E)),T(null)}catch(w){alert(w.message||"Could not save.")}},J=async(U,P,ne)=>{await C({title:"Clear this entry?",message:`This removes "${ne}"'s logged count for ${P}.`,confirmLabel:"Clear entry"})&&(x(await _.clearHabitLog(U,P)),T(null))},R=U=>{var P;return!D||D.habitId!==U.id?null:t.jsx(Dv,{habit:U,date:D.date,onSave:async ne=>{var E;try{await _.setHabitLogCount(U.id,D.date,ne,((E=U.log_notes)==null?void 0:E[D.date])??"").then(x)}catch(w){alert(w.message||"Could not save.")}},onOpen:()=>{I(null),T({habit:U,date:D.date})},onClose:()=>I(null)},D.date+":"+(((P=U.log_count_times)==null?void 0:P[D.date])||""))},O=async()=>{if(!z.name.trim())return;const U=z.type==="minimum"||z.type==="maximum",P=z.type==="weekly";if(P&&z.days.length===0)return;const ne={name:z.name.trim(),pillar:z.pillar,target_per_week:Number(z.target_per_week)||7,type:z.type,target_count:U?Number(z.target_count)||1:null,period:U?z.period:null,days:P?z.days:null,min_interval_min:U&&z.period==="day"&&Number(z.min_interval_min)||0};await _.createHabit(ne),b({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week",days:[],min_interval_min:0}),g(!1),k()},G=async(U,P)=>{await C({title:`Delete "${P}"?`,message:"This removes all of its logged history. You'll have 7 seconds to undo right after.",confirmLabel:"Delete"})&&(n===U&&o("ALL"),ge(U,P))},$=e.find(U=>U.id===n),ae=U=>new Set(U.logs||[]),me={...Y.sidebar,...i?Y.sidebarOverlay:{},...i&&!a?Y.sidebarHidden:{}};return t.jsxs("div",{style:Y.shell,children:[i&&a&&t.jsx("div",{style:Y.backdrop,onClick:()=>l(!1)}),t.jsxs("aside",{style:me,children:[t.jsxs("div",{style:Y.sideTop,children:[t.jsx("div",{style:Y.brand,children:"Anvil · Habits"}),i&&t.jsx("button",{onClick:()=>l(!1),style:Y.closeBtn,children:t.jsx(De,{size:18})})]}),t.jsxs("div",{style:{...Y.sideItem,...n==="ALL"?Y.sideItemOn:{},cursor:"default",padding:"2px 6px 2px 10px"},children:[t.jsxs("button",{onClick:()=>xe("ALL"),style:{display:"flex",alignItems:"center",gap:9,flex:1,border:"none",background:"none",cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:n==="ALL"?600:500,color:"var(--text-2)",padding:"7px 0"},children:[t.jsx(Bh,{size:15}),t.jsx("span",{style:Y.sideLabel,children:"All Habits"}),t.jsx("span",{style:Y.sideCount,children:e.length})]}),t.jsx("button",{onClick:U=>{U.stopPropagation(),u(!0)},style:Y.tinyBtn,title:"Reorder habits",children:t.jsx(wt,{size:12})})]}),t.jsx("div",{style:Y.sideDivider}),W.map(U=>{var E;const P=n===U.id,ne=((E=Fn[U.pillar])==null?void 0:E.dot)||"#9A968C";return t.jsxs("button",{onClick:()=>xe(U.id),style:{...Y.sideItem,...P?Y.sideItemOn:{}},children:[t.jsx("span",{style:{...Y.sideDot,background:ne}}),t.jsx("span",{style:Y.sideLabel,children:U.name}),t.jsxs("span",{style:Y.sideStreak,children:[t.jsx(go,{size:11})," ",U.streak]})]},U.id)}),d?t.jsx(Rv,{habit:z,onChange:b,onSave:O,onCancel:()=>g(!1)}):t.jsxs("button",{onClick:()=>g(!0),style:Y.sideNewBtn,children:[t.jsx(mt,{size:13})," New habit"]})]}),t.jsxs("main",{style:Y.main,children:[i&&t.jsxs("button",{onClick:()=>l(!0),style:Y.hamburger,children:[t.jsx(Eg,{size:18}),t.jsx("span",{style:Y.hamburgerLabel,children:n==="ALL"?"All Habits":$==null?void 0:$.name})]}),n==="ALL"?t.jsx(Fv,{habits:W,dayAction:q,logSet:ae,onDelete:G,onEdit:U=>f(U),isMobile:i,onOpenHabit:xe,renderInline:R}):t.jsx(Mv,{habit:$,dayAction:q,logSet:ae,onDelete:()=>G($.id,$.name),onEdit:()=>f($),onToggleActive:re,renderInline:R,setNote:(U,P)=>_.setHabitLogNote($.id,U,P).then(x)}),n==="ALL"&&t.jsx($v,{year:Iv})]}),p&&t.jsx(Lv,{habits:B,onSave:Q,onToggleActive:re,onDelete:G,onClose:()=>u(!1)}),m&&t.jsx(Ev,{habit:m,onSave:async U=>{await _.updateHabit(m.id,U),f(null),k()},onClose:()=>f(null)}),h&&t.jsx(Av,{habit:h.habit,date:h.date,initialCount:((Oe=h.habit.log_counts)==null?void 0:Oe[h.date])??0,initialNote:((Ce=h.habit.log_notes)==null?void 0:Ce[h.date])??"",onSave:(U,P)=>de(h.habit.id,h.date,U,P),onClear:()=>J(h.habit.id,h.date,h.habit.name),onClose:()=>T(null)},`${h.habit.id}:${h.date}`),t.jsx(Tr,{toasts:A,onUndo:X,onDismiss:ie}),t.jsx(C.Host,{})]})}function of({days:e,onToggle:r}){return t.jsx("div",{style:Y.dayPick,children:ui.map((n,o)=>t.jsx("button",{type:"button",onClick:()=>r(o),style:{...Y.dayChip,...e.includes(o)?Y.dayChipOn:{}},children:n},n))})}function Rv({habit:e,onChange:r,onSave:n,onCancel:o}){const i=e.type==="minimum"||e.type==="maximum",s=e.type==="weekly",a=l=>r(d=>({...d,days:d.days.includes(l)?d.days.filter(g=>g!==l):[...d.days,l].sort((g,m)=>g-m)}));return t.jsxs("div",{style:Y.addBox,children:[t.jsx("input",{autoFocus:!0,placeholder:"Habit name",value:e.name,onChange:l=>r(d=>({...d,name:l.target.value})),onKeyDown:l=>l.key==="Enter"&&n(),style:Y.sideInput}),t.jsx(cr,{value:e.pillar,options:Object.keys(Fn),onChange:l=>r(d=>({...d,pillar:l}))}),t.jsx(cr,{value:e.type,options:tf,onChange:l=>r(d=>({...d,type:l}))}),s&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:Y.pickHint,children:"Do this on…"}),t.jsx(of,{days:e.days,onToggle:a})]}),i&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{display:"flex",gap:6},children:[t.jsx("input",{type:"number",min:1,placeholder:"N",value:e.target_count||"",onChange:l=>r(d=>({...d,target_count:l.target.value})),style:{...Y.sideInput,width:60}}),t.jsx(cr,{value:e.period,options:rf,style:{flex:1},onChange:l=>r(d=>({...d,period:l}))})]}),e.period==="day"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:Y.pickHint,children:"Min gap between entries (minutes)"}),t.jsx("input",{type:"number",min:0,placeholder:"0",value:e.min_interval_min??0,onChange:l=>r(d=>({...d,min_interval_min:l.target.value})),style:Y.sideInput})]})]}),t.jsxs("div",{style:{display:"flex",gap:6},children:[t.jsx("button",{onClick:n,style:Y.sideAddBtn,children:t.jsx(He,{size:13})}),t.jsx("button",{onClick:o,style:Y.sideCancelBtn,children:t.jsx(De,{size:13})})]})]})}function Ev({habit:e,onSave:r,onClose:n}){const[o,i]=c.useState(e.name),[s,a]=c.useState(e.pillar||"Health"),[l,d]=c.useState(e.type||"regular"),[g,m]=c.useState(e.target_count||""),[f,h]=c.useState(e.period||"week"),[T,D]=c.useState(e.reminder_time||""),[I,z]=c.useState(e.days||[]),[b,p]=c.useState(e.min_interval_min??0),u=l==="minimum"||l==="maximum",y=l==="weekly",j=k=>z(x=>x.includes(k)?x.filter(B=>B!==k):[...x,k].sort((B,W)=>B-W)),C=()=>{y&&I.length===0||r({name:o.trim(),pillar:s,type:l,target_count:u?Number(g):null,period:u?f:null,days:y?I:[],reminder_time:T||null,min_interval_min:u&&f==="day"&&Number(b)||0})};return t.jsx("div",{style:Y.modalOverlay,onClick:n,children:t.jsxs("div",{style:Y.modal,onClick:k=>k.stopPropagation(),children:[t.jsxs("div",{style:Y.modalHead,children:["Edit Habit",t.jsx("button",{onClick:n,style:Y.closeBtn,children:t.jsx(De,{size:16})})]}),t.jsx("label",{style:Y.modalLabel,children:"Name"}),t.jsx("input",{value:o,onChange:k=>i(k.target.value),style:Y.sideInput}),t.jsx("label",{style:Y.modalLabel,children:"Pillar"}),t.jsx(cr,{value:s,options:Object.keys(Fn),onChange:a}),t.jsx("label",{style:Y.modalLabel,children:"Type"}),t.jsx(cr,{value:l,options:tf,onChange:d}),y&&t.jsxs(t.Fragment,{children:[t.jsx("label",{style:Y.modalLabel,children:"Days"}),t.jsx(of,{days:I,onToggle:j})]}),u&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[t.jsx("input",{type:"number",min:1,value:g,onChange:k=>m(k.target.value),style:{...Y.sideInput,width:70}}),t.jsx(cr,{value:f,options:rf,onChange:h,style:{flex:1}})]}),f==="day"&&t.jsxs(t.Fragment,{children:[t.jsx("label",{style:Y.modalLabel,children:"Min gap between entries (minutes)"}),t.jsx("input",{type:"number",min:0,value:b,onChange:k=>p(k.target.value),style:Y.sideInput})]})]}),t.jsx("label",{style:Y.modalLabel,children:"Reminder time"}),t.jsx("input",{type:"time",value:T,onChange:k=>D(k.target.value),style:Y.sideInput}),t.jsx("button",{onClick:C,style:{...Y.sideAddBtn,width:"100%",marginTop:10,height:36},children:"Save"})]})})}function Dv({habit:e,date:r,onSave:n,onOpen:o,onClose:i}){var y,j,C;const[s,a]=c.useState(Date.now()),l=((y=e.log_counts)==null?void 0:y[r])??0,[d,g]=c.useState(l),m=Number(e.min_interval_min)||0,f=e.target_count,h=(j=e.log_count_times)==null?void 0:j[r],T=h?new Date(h).getTime()+m*6e4:0,D=Math.max(0,T-s);c.useEffect(()=>{const k=window.setInterval(()=>a(Date.now()),1e3);return()=>window.clearInterval(k)},[]);const I=d>=l+1||D>0,z=d<=0,b=d!==l,p=((C=Fn[e.pillar])==null?void 0:C.dot)||"#9A968C",u=e.type==="minimum"?d>=f:d>0&&d<=f;return t.jsxs("div",{style:Y.inlineCounter,children:[t.jsxs("span",{style:{...Y.inlineCount,color:u?"#4C9A6B":p},children:[d,t.jsxs("span",{style:Y.inlineTarget,children:["/",f]})]}),t.jsx("button",{onClick:()=>!z&&g(k=>Math.max(0,k-1)),disabled:z,style:{...Y.inlinePlus,...z?{opacity:.45,cursor:"not-allowed"}:{}},children:"−"}),t.jsx("button",{onClick:()=>!I&&g(k=>k+1),disabled:I,style:{...Y.inlinePlus,...I?{opacity:.45,cursor:"not-allowed"}:{background:p,borderColor:p,color:"#fff"}},title:D>0?"Wait for the interval":d>=l+1?"Press Set to confirm":"Stage an entry",children:"+"}),t.jsx("button",{onClick:()=>n(d),disabled:!b,style:{...Y.inlineSet,...b?{background:p,borderColor:p,color:"#fff"}:{opacity:.5,cursor:"not-allowed"}},children:"Set"}),D>0?t.jsxs("span",{style:Y.inlineWait,children:["Wait ",nf(D)]}):t.jsx("span",{style:Y.inlineReady,children:b?"Press Set to confirm":"Tap + to add"}),t.jsx("button",{onClick:o,style:Y.inlineMore,title:"Open details",children:"⋯"}),t.jsx("button",{onClick:i,style:Y.inlineMore,title:"Hide",children:t.jsx(De,{size:13})})]})}function Av({habit:e,date:r,initialCount:n,initialNote:o,onSave:i,onClear:s,onClose:a}){var xe;const l=n??0,[d,g]=c.useState(l),[m,f]=c.useState(o??""),[h,T]=c.useState(Date.now()),[D,I]=c.useState(!1),z=e.target_count,b=e.type==="minimum"?d>=z:d>0&&d<=z,p=e.type==="maximum"&&d>z,u=b?"#4C9A6B":p?"#C2536B":"#C2773B",y=b?"✓ Goal met":p?"Over the limit":"Not met yet",j=Number(e.min_interval_min)||0,C=r===Ls(),k=j>0&&C,x=(xe=e.log_count_times)==null?void 0:xe[r],B=k&&x?new Date(x).getTime()+j*6e4:0,W=Math.max(0,B-h);c.useEffect(()=>{if(!k||W<=0)return;const q=window.setInterval(()=>T(Date.now()),1e3);return()=>window.clearInterval(q)},[k,W]),c.useEffect(()=>{if(!D)return;const q=setTimeout(()=>I(!1),3200);return()=>clearTimeout(q)},[D]);const Q=d-l,re=k&&(d>=l+1||W>0),ge=d<=0,A=()=>{j>0&&!C&&I(!0),re||g(q=>q+1)},X=()=>{ge||g(q=>Math.max(0,q-1))},ie=d!==l||m!==(o??"");return t.jsx("div",{style:Y.modalOverlay,onClick:a,children:t.jsxs("div",{style:{...Y.modal,position:"relative"},onClick:q=>q.stopPropagation(),children:[D&&t.jsxs("div",{style:Y.floatHint,children:["This ",j,"-minute gap only applies to today's entries — past days can be edited freely, with no wait."]}),t.jsxs("div",{style:Y.modalHead,children:[e.name,t.jsx("button",{onClick:a,style:Y.closeBtn,children:t.jsx(De,{size:16})})]}),t.jsxs("div",{style:{fontSize:12,color:"var(--text-3)",marginBottom:2},children:[r," · ",e.type==="minimum"?`at least ${z}`:`no more than ${z}`," / ",e.period,j>0&&t.jsxs(t.Fragment,{children:[" · ",j,"m between entries"]})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:20,margin:"14px 0 6px"},children:[t.jsx("button",{onClick:X,disabled:ge,style:{...Y.counterBtn,...ge?{opacity:.45,cursor:"not-allowed"}:{}},children:"−"}),t.jsx("span",{style:{fontSize:38,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:52,textAlign:"center",color:u},children:d}),t.jsx("button",{onClick:A,disabled:re,style:{...Y.counterBtn,...re?{opacity:.45,cursor:"not-allowed"}:{}},title:k&&W>0?"Wait for the interval before the next entry":k&&d>=l+1?"Press Set to confirm this entry":void 0,children:"+"})]}),k&&W>0&&t.jsxs("div",{style:{textAlign:"center",fontSize:12,fontWeight:700,color:"#C2773B",marginBottom:8},children:["Wait ",nf(W)," before the next entry"]}),k&&W<=0&&t.jsx("div",{style:{textAlign:"center",fontSize:11.5,color:"var(--text-3)",marginBottom:8},children:Q>0?"Press Set to confirm this entry":`Tap + to add an entry (each at least ${j}m apart)`}),t.jsx("div",{style:{textAlign:"center",fontSize:12.5,fontWeight:700,color:u,marginBottom:12},children:y}),t.jsx("textarea",{value:m,onChange:q=>f(q.target.value),placeholder:"Add a comment (optional)…",style:{...Y.sideInput,minHeight:56,resize:"vertical"}}),t.jsxs("div",{style:{display:"flex",gap:8,marginTop:10},children:[t.jsxs("button",{onClick:s,style:{...Y.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[t.jsx(De,{size:14})," Delete"]}),t.jsxs("button",{onClick:()=>i(d,m),disabled:!ie,style:{...Y.sideAddBtn,flex:1,justifyContent:"center",height:38,...ie?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:14})," Set"]})]})]})})}function cd({pct:e,label:r,sub:n,color:o}){const s=2*Math.PI*26,a=s*(1-Math.max(0,Math.min(100,e))/100);return t.jsxs("div",{style:Y.ringStat,children:[t.jsxs("div",{style:Y.ringBox,children:[t.jsxs("svg",{width:"70",height:"70",viewBox:"0 0 70 70",children:[t.jsx("circle",{cx:"35",cy:"35",r:26,fill:"none",stroke:"var(--border)",strokeWidth:"7"}),t.jsx("circle",{cx:"35",cy:"35",r:26,fill:"none",stroke:o,strokeWidth:"7",strokeLinecap:"round",strokeDasharray:s,strokeDashoffset:a,transform:"rotate(-90 35 35)",style:{transition:"stroke-dashoffset 0.5s ease"}})]}),t.jsxs("div",{style:{...Y.ringPct,color:o},children:[e,"%"]})]}),t.jsxs("div",{children:[t.jsx("div",{style:Y.ringLabel,children:r}),t.jsx("div",{style:Y.ringSub,children:n})]})]})}function Fv({habits:e,dayAction:r,logSet:n,onDelete:o,onEdit:i,renderInline:s,isMobile:a,onOpenHabit:l}){const[d,g]=c.useState(0),[m,f]=c.useState(null),[h,T]=c.useState(!1);c.useEffect(()=>{_.getSetting("habit_show_names").then(R=>{typeof(R==null?void 0:R.value)=="boolean"&&T(R.value)}).catch(()=>{})},[]);const D=()=>T(R=>{const O=!R;return _.setSetting("habit_show_names",O).catch(()=>{}),O&&f(null),O}),I=Cv(d),z=`${vp(I[0])} – ${vp(I[6])}${d===0?" · This week":""}`,b=R=>{const O=new Date(R+"T00:00:00"),G=O.getDay(),$=new Date(O);return $.setDate(O.getDate()+(G===0?-6:1-G)),Array.from({length:7},(ae,me)=>{const Oe=new Date($);return Oe.setDate($.getDate()+me),Rs(Oe)})},p=R=>R.logs||[],u=(R,O)=>R.type==="minimum"&&R.period==="week"&&O.filter(G=>n(R).has(G)).length>=(R.target_count||0),y=(R,O)=>R.type==="minimum"&&R.period==="month"&&p(R).filter(G=>G.slice(0,7)===O).length>=(R.target_count||0),j=(R,O)=>R.type==="minimum"&&R.period==="year"&&p(R).filter(G=>G.slice(0,4)===O).length>=(R.target_count||0),C=(R,O)=>{var G;if((R.type==="minimum"||R.type==="maximum")&&R.period==="day"){const $=(G=R.log_counts)==null?void 0:G[O];return $==null?!1:R.type==="minimum"?$>=(R.target_count||0):$>0&&$<=(R.target_count||0)}return n(R).has(O)},k=(R,O)=>R.type!=="minimum"?!1:R.period==="week"?u(R,b(O)):R.period==="month"?y(R,O.slice(0,7)):R.period==="year"?j(R,O.slice(0,4)):!1,x=(R,O)=>C(R,O)||k(R,O),B=e.filter(R=>x(R,Qn)).length,W=e.length?Math.round(B/e.length*100):0,Q=R=>{if(R.type==="minimum"&&R.period==="month"&&(y(R,I[0].slice(0,7))||y(R,I[6].slice(0,7)))||R.type==="minimum"&&R.period==="year"&&(j(R,I[0].slice(0,4))||j(R,I[6].slice(0,4)))||R.type==="minimum"&&R.period==="week"&&u(R,I))return 1;if((R.type==="minimum"||R.type==="maximum")&&R.period==="day")return Math.min(1,I.filter(ae=>C(R,ae)).length/7);const O=n(R),G=I.filter(ae=>O.has(ae)).length,$=R.type==="minimum"&&R.period==="week"?R.target_count||1:R.target_per_week||7;return $>0?Math.min(1,G/$):0},re=e.length?Math.round(e.reduce((R,O)=>R+Q(O),0)/e.length*100):0,ge=new Date,A=`${ge.getFullYear()}-${String(ge.getMonth()+1).padStart(2,"0")}`,X=new Date(ge.getFullYear(),ge.getMonth()+1,0).getDate(),ie=X/7,xe=R=>{if(R.type==="minimum"&&R.period==="month"&&y(R,A)||R.type==="minimum"&&R.period==="year"&&j(R,A.slice(0,4)))return 1;if((R.type==="minimum"||R.type==="maximum")&&R.period==="day"){let $=0;for(let ae=1;ae<=X;ae++)C(R,`${A}-${String(ae).padStart(2,"0")}`)&&$++;return Math.min(1,$/X)}const O=p(R).filter($=>$.slice(0,7)===A).length;let G;return R.type==="minimum"&&R.period==="week"?G=(R.target_count||1)*ie:R.type==="minimum"&&R.period==="month"?G=R.target_count||1:R.type==="minimum"&&R.period==="year"?G=(R.target_count||1)/12:G=(R.target_per_week||7)*ie,G>0?Math.min(1,O/G):0},q=e.length?Math.round(e.reduce((R,O)=>R+xe(O),0)/e.length*100):0,K=R=>{const O=new Date;return O.setDate(O.getDate()+R),Rs(O)},de=R=>e.filter(O=>x(O,R)).length,J=[{label:"Today",value:de(K(0)),color:"#4C9A6B"},{label:"Yesterday",value:de(K(-1)),color:"var(--text-3)"},{label:"Day before",value:de(K(-2)),color:"var(--text-3)"}];return t.jsxs("div",{children:[t.jsxs("div",{style:Y.mainHead,children:[t.jsx("div",{style:Y.eyebrow,children:"Weekly view"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,flexWrap:"wrap"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("h1",{style:Y.h1,children:"All Habits"}),t.jsx(Yt,{id:"habits"})]}),a&&e.length>0&&t.jsxs("button",{onClick:D,style:Y.nameToggle,title:h?"Hide habit names — tap a circle to reveal one":"Show all habit names",children:[t.jsx("span",{style:{...Y.nameToggleTrack,background:h?"#4C9A6B":"var(--border)"},children:t.jsx("span",{style:{...Y.nameToggleKnob,left:h?19:3}})}),h?t.jsx(Cs,{size:13}):t.jsx(sl,{size:13}),t.jsx("span",{children:"Names"})]})]})]}),t.jsxs("div",{style:Y.navBar,children:[t.jsx("button",{onClick:()=>g(R=>R-1),style:Y.navBtn,children:t.jsx(Mn,{size:16})}),t.jsx("span",{style:Y.navLabel,children:z}),t.jsx("button",{onClick:()=>g(R=>Math.min(0,R+1)),disabled:d>=0,style:{...Y.navBtn,...d>=0?Y.navBtnDisabled:{}},children:t.jsx(bn,{size:16})})]}),t.jsxs("div",{style:{...Y.weekCard,...a?Y.weekCardMobile:{}},children:[t.jsxs("div",{style:{...Y.weekHeadRow,...a?Y.weekRowMobile:{}},children:[t.jsx("div",{style:{...Y.weekNameCol,...a?Y.weekNameColMobile:{}}}),ui.map((R,O)=>t.jsxs("div",{style:Y.weekDayHead,children:[t.jsx("span",{style:Y.weekDayName,children:R}),t.jsx("span",{style:{...Y.weekDayNum,...I[O]===Qn?Y.weekDayToday:{}},children:new Date(I[O]+"T00:00").getDate()})]},R)),t.jsx("div",{style:{...Y.weekStreakCol,...a?Y.weekStreakColMobile:{}},children:a?t.jsx(go,{size:12}):"Streak"})]}),e.map(R=>{var tt,yt;const O=((tt=Fn[R.pillar])==null?void 0:tt.dot)||"#9A968C",G=((yt=Fn[R.pillar])==null?void 0:yt.soft)||"rgba(0,0,0,0.05)",$=n(R),ae=R.type==="weekly",me=new Set(R.days||[]),Oe=[0,1,2,3,4,5,6].filter(_e=>me.has(_e)),Ce=ae&&Oe.length>0&&Oe.every(_e=>$.has(I[_e])),U=ae?Array(7).fill(Ce):null,P=R.type==="minimum"&&["week","month","year"].includes(R.period),ne=R.target_count||0,E=R.logs||[],w=_e=>E.filter(st=>st.slice(0,7)===_e).length,oe=_e=>E.filter(st=>st.slice(0,4)===_e).length,he=I.filter(_e=>$.has(_e)).length,V=_e=>P?R.period==="week"?he>=ne:R.period==="month"?w(_e.slice(0,7))>=ne:R.period==="year"?oe(_e.slice(0,4))>=ne:!1:!1,fe=P&&I.some(V),ye=R.period==="week"?he:R.period==="month"?w(I[0].slice(0,7)):R.period==="year"?oe(I[0].slice(0,4)):0,Ae=m===R.id;return t.jsxs(c.Fragment,{children:[a&&(Ae||h)&&t.jsxs("button",{onClick:()=>l&&l(R.id),style:{...Y.mobileNameBanner,color:O},children:[t.jsx("span",{style:{...Y.sideDot,background:O}}),t.jsx("span",{style:Y.mobileNameText,children:R.name}),R.type==="weekly"?t.jsx("span",{style:Y.typeBadge,children:(R.days||[]).map(_e=>ui[_e]).join("·")||"—"}):R.type!=="regular"?t.jsx("span",{style:Y.typeBadge,children:R.type==="minimum"?`≥${R.target_count}/${R.period}`:`≤${R.target_count}/${R.period}`}):null]}),t.jsxs("div",{style:{...Y.weekRow,...a?Y.weekRowMobile:{}},children:[a?t.jsx("div",{style:{...Y.weekNameCol,...Y.weekNameColMobile},children:t.jsx("button",{onClick:()=>f(Ae?null:R.id),style:{...Y.habitAvatar,background:O},title:R.name,children:(R.name||"?").trim().charAt(0).toUpperCase()})}):t.jsxs("div",{style:{...Y.weekNameCol,flexDirection:"column",alignItems:"flex-start",gap:2},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[t.jsx("span",{style:{...Y.sideDot,background:O}}),t.jsx("span",{style:Y.weekHabitName,children:R.name})]}),R.type==="weekly"?t.jsx("span",{style:Y.typeBadge,children:(R.days||[]).map(_e=>ui[_e]).join("·")||"—"}):R.type!=="regular"?t.jsx("span",{style:Y.typeBadge,children:R.type==="minimum"?`≥${R.target_count}/${R.period}`:`≤${R.target_count}/${R.period}`}):null]}),I.map((_e,st)=>{var bt,zt;if(ae&&!me.has(st))return t.jsxs("div",{style:{...Y.weekCell,position:"relative",zIndex:0},children:[U[st]&&t.jsx("span",{style:{...Y.chainLine,background:O,left:U[st-1]?0:"50%",right:U[st+1]?0:"50%"}}),t.jsx("span",{style:{...Y.offDay,position:"relative",zIndex:1},title:"Not scheduled",children:"·"})]},_e);const Ze=$.has(_e),at=_e>Qn,vt=(R.type==="minimum"||R.type==="maximum")&&R.period==="day",ct=(bt=R.log_counts)==null?void 0:bt[_e],Ht=ct!=null,Wt=!!((zt=R.log_notes)!=null&&zt[_e]),Et=V(_e),le=st>0&&V(I[st-1]),Le=st<I.length-1&&V(I[st+1]),ot=Ze||Et;return t.jsxs("div",{style:{...Y.weekCell,position:"relative",zIndex:0},children:[Et&&t.jsx("span",{style:{...Y.chainLine,background:O,left:le?0:"50%",right:Le?0:"50%"}}),ae&&U[st]&&t.jsx("span",{style:{...Y.chainLine,background:O,left:U[st-1]?0:"50%",right:U[st+1]?0:"50%"}}),t.jsx("button",{disabled:at,onClick:()=>r(R,_e),style:{...Y.tick,...ot?{background:O,borderColor:O,color:"#fff"}:{},...vt&&Ht&&!Ze?{borderColor:O,color:O}:{},...at&&!ot?Y.tickFuture:{}},children:vt?Ht?t.jsx("span",{style:{fontSize:12,fontWeight:700},children:ct}):null:Ze&&t.jsx(He,{size:14,color:"#fff",strokeWidth:3})}),Wt&&t.jsx("span",{style:Y.cellNoteBubble})]},_e)}),t.jsx("div",{style:{...Y.weekStreakCol,...a?Y.weekStreakColMobile:{}},children:Ce?t.jsxs("span",{style:{...Y.streakPill,...a?Y.streakPillMobile:{},background:G,color:O},children:[t.jsx(Is,{size:12})," ",a?Oe.length:`${Oe.length}/${Oe.length}`]}):fe?t.jsxs("span",{style:{...Y.streakPill,...a?Y.streakPillMobile:{},background:G,color:O},children:[t.jsx(Is,{size:12})," ",a?ye:`${ye}/${ne}`]}):t.jsxs("span",{style:{...Y.streakPill,...a?Y.streakPillMobile:{},background:G,color:O},children:[t.jsx(go,{size:12})," ",R.streak]})})]}),s&&s(R)]},R.id)}),e.length===0&&t.jsx("div",{style:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},children:"No habits yet — add one from the sidebar."})]}),e.length>0&&t.jsxs("div",{style:{...Y.progressCard,marginTop:18,marginBottom:0},children:[t.jsx(cd,{pct:W,label:"Today",sub:`${B}/${e.length} done`,color:"#4C9A6B"}),t.jsx("div",{style:Y.progressDivider}),t.jsx(cd,{pct:re,label:"This week",sub:"of weekly targets",color:"#3A7CA5"}),t.jsx("div",{style:Y.progressDivider}),t.jsx(cd,{pct:q,label:"This month",sub:"of monthly targets",color:"#8268B0"})]}),e.length>0&&t.jsxs("div",{style:{...Y.progressCard,marginTop:14,marginBottom:0,flexDirection:"column",alignItems:"stretch",gap:12},children:[t.jsx("div",{style:Y.threeDayTitle,children:"Last 3 days · habits completed"}),t.jsx(Wv,{items:J,total:e.length})]})]})}function Wv({items:e,total:r}){const n=Math.max(1,r,...e.map(o=>o.value));return t.jsx("div",{style:Y.tbWrap,children:e.map((o,i)=>t.jsxs("div",{style:Y.tbRow,children:[t.jsx("div",{style:Y.tbLbl,children:o.label}),t.jsx("div",{style:Y.tbTrack,children:t.jsx("div",{style:{...Y.tbBar,width:`${o.value/n*100}%`,background:o.color}})}),t.jsxs("div",{style:Y.tbVal,children:[o.value,"/",r]})]},i))})}function Mv({habit:e,dayAction:r,logSet:n,onDelete:o,onEdit:i,setNote:s,onToggleActive:a,renderInline:l}){var Oe,Ce;const[d,g]=c.useState(null),[m,f]=c.useState(""),[h,T]=c.useState(null),[D,I]=c.useState(0),z=c.useRef(null);if(!e)return null;const b=((Oe=Fn[e.pillar])==null?void 0:Oe.dot)||"#9A968C",p=((Ce=Fn[e.pillar])==null?void 0:Ce.soft)||"rgba(0,0,0,0.05)",u=n(e),y=e.type==="weekly",j=new Set(e.days||[]),C=U=>(new Date(U+"T00:00").getDay()+6)%7,k=U=>!y||j.has(C(U)),x=U=>{const P=new Date(U+"T00:00"),ne=P.getDay(),E=new Date(P);E.setDate(P.getDate()+(ne===0?-6:1-ne));const w=Array.from({length:7},(V,fe)=>{const ye=new Date(E);return ye.setDate(E.getDate()+fe),Rs(ye)}),oe=[0,1,2,3,4,5,6].filter(V=>j.has(V)),he=oe.length>0&&oe.every(V=>u.has(w[V]));return Array(7).fill(he)},{dates:B,startOffset:W,label:Q,year:re}=Tv(D),ge=B.filter(U=>U<=Qn&&k(U)&&u.has(U)).length,A=B.filter(U=>U<=Qn&&k(U)).length,X=A>0?Math.round(ge/A*100):0,ie=e.type==="minimum"&&(e.period==="month"||e.period==="year"),xe=e.period==="year"?(e.logs||[]).filter(U=>U.startsWith(`${re}-`)).length:B.filter(U=>u.has(U)).length,q=ie&&xe>=(e.target_count||0),K=e.type==="minimum"&&e.period==="week",de=e.target_count||0,J=U=>{const P=new Date(U+"T00:00"),ne=P.getDay(),E=new Date(P);E.setDate(P.getDate()+(ne===0?-6:1-ne));let w=0;for(let oe=0;oe<7;oe++){const he=new Date(E);he.setDate(E.getDate()+oe),u.has(Rs(he))&&w++}return w},R=U=>ie?q:K?J(U)>=de:!1,O=K?J(Qn):0,G=K&&O>=de,$=U=>{z.current=setTimeout(()=>g(U),500)},ae=()=>clearTimeout(z.current),me=U=>{var P;T(U),f(((P=e.log_notes)==null?void 0:P[U])||""),g(null)};return t.jsxs("div",{children:[t.jsxs("div",{style:Y.mainHead,children:[t.jsxs("div",{children:[t.jsxs("div",{style:Y.eyebrow,children:[t.jsx("span",{style:{...Y.sideDot,background:b,marginRight:6}}),e.pillar," · Monthly view"]}),t.jsx("h1",{style:Y.h1,children:e.name})]}),t.jsxs("div",{style:{display:"flex",gap:8,marginTop:8,flexWrap:"wrap"},children:[t.jsxs("button",{onClick:i,style:Y.actionBtn,children:[t.jsx(wt,{size:14})," Edit"]}),t.jsx("button",{onClick:()=>a(e.id,e.active===!1),style:{...Y.actionBtn,...e.active===!1?{color:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:e.active===!1?t.jsxs(t.Fragment,{children:[t.jsx(He,{size:14})," Enable"]}):t.jsxs(t.Fragment,{children:[t.jsx(W0,{size:14})," Disable"]})}),t.jsxs("button",{onClick:o,style:{...Y.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[t.jsx(De,{size:14})," Delete"]}),e.reminder_time&&t.jsxs("button",{style:Y.actionBtn,children:[t.jsx(Bg,{size:14})," ",e.reminder_time]})]})]}),t.jsxs("div",{style:Y.statStrip,children:[t.jsx(fo,{label:"Current streak",value:`${e.streak} days`,c:b,soft:p,flame:!0}),t.jsx(fo,{label:"Best streak",value:`${e.max_streak??e.streak} days`,c:b,soft:p,flame:!0}),t.jsx(fo,{label:"Done this month",value:`${ge}/${A}`,c:b,soft:p}),t.jsx(fo,{label:"Completion",value:`${X}%`,c:b,soft:p}),e.type==="regular"?t.jsx(fo,{label:"Weekly target",value:`${e.target_per_week}×`,c:b,soft:p}):e.type==="weekly"?t.jsx(fo,{label:"Days",value:(e.days||[]).map(U=>ui[U]).join(", ")||"—",c:b,soft:p}):t.jsx(fo,{label:e.type==="minimum"?"Min target":"Max allowed",value:`${e.target_count}/${e.period}`,c:b,soft:p})]}),l&&l(e),t.jsxs("div",{style:Y.navBar,children:[t.jsx("button",{onClick:()=>I(U=>U-1),style:Y.navBtn,children:t.jsx(Mn,{size:16})}),t.jsxs("span",{style:Y.navLabel,children:[Q,D===0?" · This month":""]}),t.jsx("button",{onClick:()=>I(U=>Math.min(0,U+1)),disabled:D>=0,style:{...Y.navBtn,...D>=0?Y.navBtnDisabled:{}},children:t.jsx(bn,{size:16})})]}),ie&&t.jsxs("div",{style:{...Y.chainBanner,background:q?p:"var(--bg)",color:q?b:"var(--text-3)"},children:[t.jsx(Is,{size:15}),q?`${e.period==="year"?"Yearly":"Monthly"} chain complete — ${xe}/${e.target_count} connected`:`${xe}/${e.target_count} this ${e.period} · ${(e.target_count||0)-xe} more to connect the chain`]}),K&&D===0&&t.jsxs("div",{style:{...Y.chainBanner,background:G?p:"var(--bg)",color:G?b:"var(--text-3)"},children:[t.jsx(Is,{size:15}),G?`This week's chain complete — ${O}/${de} connected`:`${O}/${de} this week · ${Math.max(0,de-O)} more to connect the chain`]}),t.jsxs("div",{style:Y.monthCard,children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[t.jsx("div",{style:Y.monthTitle,children:Q}),t.jsx("span",{style:{fontSize:11,color:"var(--text-3)"},children:"Long-press a day for options"})]}),t.jsx("div",{style:Y.monthDow,children:ui.map(U=>t.jsx("div",{style:Y.monthDowCell,children:U},U))}),t.jsxs("div",{style:Y.monthGrid,children:[Array.from({length:W}).map((U,P)=>t.jsx("div",{},`pad${P}`)),B.map((U,P)=>{var _e,st;const ne=P+1;if(y&&!k(U)){const Ze=C(U),at=x(U),vt=(W+P)%7;return t.jsxs("div",{style:{position:"relative"},children:[at[Ze]&&t.jsx("span",{style:{...Y.chainLine,background:b,...vt===0?{left:"50%"}:{left:at[Ze-1]?-6:"50%"},...vt===6?{right:"50%"}:{right:at[Ze+1]?-6:"50%"}}}),t.jsx("div",{style:{...Y.monthDay,...Y.monthDayOff,width:"100%",position:"relative",zIndex:1},children:ne})]},U)}const E=u.has(U),w=U>Qn,oe=U===Qn,he=!!((_e=e.log_notes)!=null&&_e[U]),V=(e.type==="minimum"||e.type==="maximum")&&e.period==="day",fe=(st=e.log_counts)==null?void 0:st[U],ye=fe!=null,Ae=R(U),tt=Ae&&!E,yt=(W+P)%7;return t.jsxs("div",{style:{position:"relative"},children:[Ae&&t.jsx("span",{style:{...Y.chainLine,background:b,...yt===0?{left:"50%"}:{left:-6},...yt===6?{right:"50%"}:{right:-6}}}),y&&(()=>{const Ze=C(U),at=x(U);return at[Ze]?t.jsx("span",{style:{...Y.chainLine,background:b,...yt===0?{left:"50%"}:{left:at[Ze-1]?-6:"50%"},...yt===6?{right:"50%"}:{right:at[Ze+1]?-6:"50%"}}}):null})(),t.jsx("button",{disabled:w,onClick:()=>r(e,U),onMouseDown:()=>!V&&$(U),onMouseUp:ae,onTouchStart:()=>!V&&$(U),onTouchEnd:ae,style:{...Y.monthDay,position:"relative",zIndex:1,...E?{background:b,borderColor:b,color:"#fff"}:{},...tt?{background:p,borderColor:b,color:b}:{},...V&&ye&&!E?{borderColor:b,color:b}:{},...w&&!E?Y.monthDayFuture:{},...oe&&!E?{borderColor:b,borderWidth:2}:{},width:"100%"},children:ne}),V&&ye&&t.jsx("span",{style:{...Y.countBadge,background:E?"#4C9A6B":b},children:fe}),he&&t.jsx("span",{style:Y.noteIndicator}),d===U&&t.jsx(_v,{onEdit:i,onDelete:o,onAddNote:()=>me(U),onRemind:i,onClose:()=>g(null)})]},U)})]})]}),h&&t.jsxs("div",{style:Y.noteBox,children:[t.jsxs("div",{style:{fontWeight:600,fontSize:13,marginBottom:6},children:["Note for ",h]}),t.jsx("textarea",{value:m,onChange:U=>f(U.target.value),placeholder:"Add a note for this day…",style:{...Y.sideInput,minHeight:60,resize:"vertical"}}),t.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[t.jsxs("button",{onClick:()=>{s(h,m),T(null)},style:Y.sideAddBtn,children:[t.jsx(He,{size:13})," Save"]}),t.jsx("button",{onClick:()=>T(null),style:Y.sideCancelBtn,children:t.jsx(De,{size:13})})]})]})]})}function _v({onEdit:e,onDelete:r,onAddNote:n,onRemind:o,onClose:i}){return t.jsxs("div",{style:Y.longPressMenu,children:[t.jsxs("button",{style:Y.menuItem,onClick:()=>{e(),i()},children:[t.jsx(wt,{size:13})," Edit"]}),t.jsxs("button",{style:Y.menuItem,onClick:()=>{n(),i()},children:[t.jsx(Rg,{size:13})," Add note"]}),t.jsxs("button",{style:Y.menuItem,onClick:()=>{o(),i()},children:[t.jsx(Bg,{size:13})," Remind"]}),t.jsxs("button",{style:{...Y.menuItem,color:"#C2536B"},onClick:()=>{r(),i()},children:[t.jsx(De,{size:13})," Delete"]})]})}function Lv({habits:e,onSave:r,onToggleActive:n,onDelete:o,onClose:i}){const[s,a]=c.useState(()=>e.map(m=>m.id)),l=c.useMemo(()=>{const m={};return e.forEach(f=>m[f.id]=f),m},[e]),d=s.map(m=>l[m]).filter(Boolean),g=(m,f)=>{const h=m+f;if(h<0||h>=s.length)return;const T=[...s];[T[m],T[h]]=[T[h],T[m]],a(T)};return t.jsx("div",{style:Y.modalOverlay,onClick:i,children:t.jsxs("div",{style:{...Y.modal,maxHeight:"80vh",overflow:"hidden"},onClick:m=>m.stopPropagation(),children:[t.jsxs("div",{style:{...Y.modalHead,flexShrink:0},children:["Edit Habits",t.jsx("button",{onClick:i,style:Y.closeBtn,children:t.jsx(De,{size:16})})]}),t.jsx("p",{style:{fontSize:12,color:"var(--text-3)",margin:"0 0 10px",flexShrink:0},children:"Reorder with the arrows, toggle a habit off to hide it (its history is kept), or delete it for good."}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6,overflowY:"auto",minHeight:0},children:d.map((m,f)=>{var D;const h=((D=Fn[m.pillar])==null?void 0:D.dot)||"#9A968C",T=m.active!==!1;return t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"9px 10px",background:"var(--bg)",borderRadius:9,border:"1px solid var(--border)",opacity:T?1:.5},children:[t.jsx("span",{style:{...Y.sideDot,background:h}}),t.jsx("span",{style:{flex:1,fontSize:13,fontWeight:500,textDecoration:T?"none":"line-through"},children:m.name}),t.jsx("button",{onClick:()=>n(m.id,!T),title:T?"Disable (hide) habit":"Enable habit",style:{...Y.activeToggle,...T?Y.activeToggleOn:{}},role:"switch","aria-checked":T,children:t.jsx("span",{style:{...Y.activeKnob,...T?Y.activeKnobOn:{}}})}),t.jsx("button",{onClick:()=>g(f,-1),disabled:f===0,style:{...Y.navBtn,width:28,height:28,opacity:f===0?.3:1,fontSize:14},children:"↑"}),t.jsx("button",{onClick:()=>g(f,1),disabled:f===d.length-1,style:{...Y.navBtn,width:28,height:28,opacity:f===d.length-1?.3:1,fontSize:14},children:"↓"}),t.jsx("button",{onClick:()=>o(m.id,m.name),title:"Delete habit",style:{...Y.navBtn,width:28,height:28,color:"#C2536B",borderColor:"#C2536B"},children:t.jsx(De,{size:14})})]},m.id)})}),t.jsxs("button",{onClick:()=>r(s),style:{...Y.sideAddBtn,width:"100%",marginTop:14,height:38,justifyContent:"center",flexShrink:0},children:[t.jsx(He,{size:14})," Save Order"]})]})})}function $v({year:e}){const[r,n]=c.useState([]);if(c.useEffect(()=>{_.getHabitsYearly(e).then(n).catch(console.error)},[e]),!r.length)return null;const o=Array.from({length:12},(s,a)=>{const l=r.reduce((g,m)=>{var f;return g+(((f=m.monthly[a+1])==null?void 0:f.done)||0)},0),d=r.reduce((g,m)=>{var f;return g+Math.floor((((f=m.monthly[a+1])==null?void 0:f.days)||30)/7*7)},0);return d>0?Math.round(l/d*100):0}),i=Math.max(...o,1);return t.jsxs("div",{style:{...Y.monthCard,marginTop:18},children:[t.jsxs("div",{style:Y.monthTitle,children:[e," Completion"]}),t.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:6,height:80,marginTop:12},children:o.map((s,a)=>t.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[t.jsx("div",{style:{width:"100%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",height:`${s/i*60}px`,minHeight:2,opacity:s>0?1:.15},title:`${s}%`}),t.jsx("span",{style:{fontSize:9,color:"var(--text-3)",fontWeight:600},children:Sv[a]})]},a))})]})}function fo({label:e,value:r,c:n,soft:o,flame:i}){return t.jsxs("div",{style:{...Y.stat,background:o},children:[t.jsx("div",{style:Y.statLabel,children:e}),t.jsxs("div",{style:{...Y.statValue,color:n},children:[i&&t.jsx(go,{size:15})," ",r]})]})}const Y={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:230,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",padding:"20px 12px",display:"flex",flexDirection:"column",gap:3,overflowY:"auto"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.18)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)",boxShadow:"none"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.38)",zIndex:20},sideTop:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 4px"},closeBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",marginBottom:8},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700,padding:"0 6px 14px"},sideItem:{display:"flex",alignItems:"center",gap:9,width:"100%",border:"none",background:"none",padding:"9px 10px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:500,color:"var(--text-2)",textAlign:"left"},sideItemOn:{background:"var(--hover)",fontWeight:600},sideLabel:{flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},sideCount:{fontSize:11,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:10,padding:"1px 7px"},sideStreak:{display:"flex",alignItems:"center",gap:3,fontSize:11,fontWeight:600,color:"#C2773B"},sideDot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},sideDivider:{height:1,background:"var(--border)",margin:"8px 6px"},addBox:{padding:"10px 6px",display:"flex",flexDirection:"column",gap:6},sideInput:{border:"1px solid var(--border)",borderRadius:7,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},sideAddBtn:{border:"none",background:"#4C9A6B",color:"#fff",height:30,padding:"0 12px",borderRadius:7,cursor:"pointer",display:"flex",alignItems:"center",gap:5,fontSize:13,fontFamily:"inherit"},sideCancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:30,height:30,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},sideNewBtn:{display:"flex",alignItems:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",borderRadius:8,padding:"8px 10px",fontSize:12.5,color:"var(--text-3)",fontWeight:600,cursor:"pointer",fontFamily:"inherit",marginTop:6,justifyContent:"center"},main:{flex:1,padding:"26px",overflowX:"hidden",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:200},mainHead:{marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:5,display:"flex",alignItems:"center"},h1:{fontSize:27,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},actionBtn:{display:"flex",alignItems:"center",gap:5,fontSize:12,fontWeight:500,color:"var(--text-2)",border:"1px solid var(--border)",background:"var(--surface)",padding:"5px 10px",borderRadius:7,cursor:"pointer",fontFamily:"inherit"},progressCard:{background:"var(--surface)",borderRadius:12,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14,display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"},progressDivider:{width:1,alignSelf:"stretch",background:"var(--border)",minHeight:48},threeDayTitle:{fontSize:13,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:84,fontSize:11.5,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap"},tbTrack:{flex:1,height:14,background:"var(--surface-2)",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:52,fontSize:11.5,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"},ringStat:{display:"flex",alignItems:"center",gap:12,flex:"1 1 160px"},ringBox:{position:"relative",width:70,height:70,display:"grid",placeItems:"center",flexShrink:0},ringPct:{position:"absolute",inset:0,display:"grid",placeItems:"center",fontSize:16,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},ringLabel:{fontSize:14,fontWeight:700,color:"var(--text)"},ringSub:{fontSize:11.5,color:"var(--text-3)",fontWeight:500,marginTop:2},weekCard:{background:"var(--surface)",borderRadius:12,padding:"8px 14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"auto"},weekCardMobile:{padding:"8px 8px 12px",overflowX:"hidden"},weekHeadRow:{display:"flex",alignItems:"flex-end",padding:"10px 0",borderBottom:"1px solid var(--border)",minWidth:480,position:"relative",zIndex:0},weekRowMobile:{minWidth:0},weekNameCol:{width:160,flexShrink:0,alignSelf:"stretch",display:"flex",alignItems:"center",gap:8,position:"sticky",left:0,zIndex:5,background:"var(--surface)",boxShadow:"6px 0 6px -6px rgba(0,0,0,0.15)"},weekNameColMobile:{width:34,gap:0,boxShadow:"none",justifyContent:"center",position:"static"},weekStreakColMobile:{width:30},streakPillMobile:{padding:"3px 6px",gap:2},habitAvatar:{width:26,height:26,borderRadius:"50%",border:"none",color:"#fff",fontSize:12,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,lineHeight:1},mobileNameBanner:{display:"flex",alignItems:"center",gap:7,width:"100%",border:"none",background:"var(--hover)",borderRadius:8,padding:"6px 10px",margin:"4px 0 2px",cursor:"pointer",fontFamily:"inherit",textAlign:"left"},mobileNameText:{fontSize:13,fontWeight:700,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},nameToggle:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",borderRadius:20,padding:"5px 11px 5px 5px",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit",flexShrink:0},nameToggleTrack:{position:"relative",width:34,height:20,borderRadius:10,flexShrink:0,transition:"background 0.2s",display:"inline-block"},nameToggleKnob:{position:"absolute",top:3,width:14,height:14,borderRadius:"50%",background:"#fff",transition:"left 0.2s",boxShadow:"0 1px 2px rgba(0,0,0,0.3)"},weekDayHead:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:2},weekDayName:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekDayNum:{fontSize:12,fontWeight:600,color:"var(--text-2)",width:22,height:22,display:"grid",placeItems:"center",borderRadius:"50%"},weekDayToday:{background:"var(--accent-strong)",color:"#fff"},weekStreakCol:{width:64,flexShrink:0,textAlign:"center",fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekRow:{display:"flex",alignItems:"center",padding:"9px 0",borderBottom:"1px solid #F4F2EC",minWidth:480,position:"relative",zIndex:0},weekHabitName:{fontSize:13,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},weekCell:{flex:1,display:"grid",placeItems:"center"},typeBadge:{fontSize:10,color:"var(--text-3)",background:"var(--hover)",padding:"1px 6px",borderRadius:8,fontWeight:600},tick:{width:26,height:26,borderRadius:7,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",padding:0,position:"relative",zIndex:1},tickFuture:{opacity:.4,cursor:"not-allowed",borderStyle:"dashed"},streakPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:12,fontWeight:700,padding:"3px 9px",borderRadius:12},tinyBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:"2px 3px",display:"grid",placeItems:"center",borderRadius:4},statStrip:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(120px,1fr))",gap:10,marginBottom:18},stat:{borderRadius:10,padding:"13px 14px"},statLabel:{fontSize:11,fontWeight:600,color:"var(--text-2)",marginBottom:5},statValue:{fontSize:19,fontWeight:700,display:"flex",alignItems:"center",gap:5,fontFamily:"'Fraunces',Georgia,serif"},monthCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},monthTitle:{fontSize:14,fontWeight:700,marginBottom:12,fontFamily:"'Fraunces',Georgia,serif"},monthDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6,marginBottom:8},monthDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},monthGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6},monthDay:{aspectRatio:"1",border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",display:"grid",placeItems:"center"},monthDayFuture:{opacity:.4,cursor:"not-allowed",background:"var(--surface-2)"},monthDayOff:{background:"var(--surface-2)",borderStyle:"dashed",color:"var(--text-3)",opacity:.5,cursor:"default"},dayPick:{display:"flex",gap:4,flexWrap:"wrap"},dayChip:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",borderRadius:7,padding:"5px 7px",fontSize:11,fontWeight:700,cursor:"pointer",fontFamily:"inherit",minWidth:34},dayChipOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},pickHint:{fontSize:11,color:"var(--text-3)",fontWeight:600},offDay:{color:"var(--text-3)",opacity:.4,fontSize:18,lineHeight:1,userSelect:"none"},noteIndicator:{position:"absolute",top:3,right:3,width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},cellNoteBubble:{position:"absolute",top:2,right:"calc(50% - 16px)",width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},countBadge:{position:"absolute",bottom:2,right:2,minWidth:13,height:13,padding:"0 2px",borderRadius:7,color:"#fff",fontSize:9,fontWeight:700,display:"grid",placeItems:"center",lineHeight:1},counterBtn:{width:44,height:44,borderRadius:"50%",border:"1.5px solid var(--border)",background:"var(--surface)",color:"var(--text)",fontSize:24,fontWeight:700,cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit",lineHeight:1},floatHint:{position:"absolute",left:"50%",bottom:"100%",transform:"translateX(-50%)",marginBottom:10,width:260,maxWidth:"80vw",textAlign:"center",fontSize:12,fontWeight:600,lineHeight:1.4,color:"#fff",background:"#26241F",borderRadius:10,padding:"9px 12px",boxShadow:"0 8px 24px rgba(0,0,0,0.28)",zIndex:10,pointerEvents:"none"},inlineCounter:{display:"flex",alignItems:"center",gap:10,padding:"8px 12px",margin:"2px 0 8px",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,flexWrap:"wrap"},inlineCount:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1},inlineTarget:{fontSize:12,fontWeight:600,color:"var(--text-3)",marginLeft:1},inlinePlus:{width:30,height:30,borderRadius:8,border:"1.5px solid var(--border)",background:"var(--surface)",color:"var(--text)",fontSize:18,fontWeight:700,cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit",lineHeight:1,flexShrink:0},inlineSet:{height:30,padding:"0 12px",borderRadius:8,border:"1.5px solid var(--border)",background:"var(--surface)",color:"var(--text)",fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",flexShrink:0},inlineWait:{fontSize:12,fontWeight:700,color:"#C2773B"},inlineReady:{fontSize:12,fontWeight:700,color:"#4C9A6B"},inlineMore:{marginLeft:"auto",border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",fontSize:16,fontWeight:700,lineHeight:1},activeToggle:{position:"relative",width:38,height:22,borderRadius:11,border:"none",background:"var(--border)",cursor:"pointer",flexShrink:0,transition:"background 0.2s",padding:0},activeToggleOn:{background:"#4C9A6B"},activeKnob:{position:"absolute",top:3,left:3,width:16,height:16,borderRadius:"50%",background:"#fff",transition:"left 0.2s",boxShadow:"0 1px 2px rgba(0,0,0,0.3)"},activeKnobOn:{left:19},chainLine:{position:"absolute",top:"calc(50% - 3px)",left:0,right:0,height:6,zIndex:0,opacity:.9},chainBanner:{display:"flex",alignItems:"center",gap:8,borderRadius:10,padding:"10px 14px",marginBottom:14,fontSize:12.5,fontWeight:700,fontFamily:"'Inter',system-ui,sans-serif"},navBar:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:16},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},navLabel:{fontSize:13,fontWeight:700,color:"var(--text)",minWidth:180,textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},noteBox:{background:"var(--surface)",borderRadius:10,padding:14,marginTop:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},longPressMenu:{position:"absolute",top:"100%",left:0,zIndex:50,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 4px 16px rgba(0,0,0,0.12)",padding:"4px 0",minWidth:140},menuItem:{display:"flex",alignItems:"center",gap:8,width:"100%",border:"none",background:"none",padding:"8px 14px",fontSize:13,color:"var(--text)",cursor:"pointer",fontFamily:"inherit",textAlign:"left"},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",zIndex:100,display:"grid",placeItems:"center"},modal:{background:"var(--surface)",borderRadius:14,padding:24,width:320,maxWidth:"90vw",display:"flex",flexDirection:"column",gap:8},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",fontWeight:700,fontSize:16,fontFamily:"'Fraunces',Georgia,serif",marginBottom:6},modalLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.08em",marginTop:4}},Bc=[{id:1,label:"Rough",emoji:"😣",color:"#C2536B"},{id:2,label:"Low",emoji:"🙁",color:"#C2773B"},{id:3,label:"Okay",emoji:"😐",color:"#C9A227"},{id:4,label:"Good",emoji:"🙂",color:"#4C9A6B"},{id:5,label:"Great",emoji:"😄",color:"#3A7CA5"}],Pv=e=>Bc.find(r=>r.id===e),gd=[{id:"wins",label:"Wins",hint:"What went well today?",icon:rn,color:"#C9A227"},{id:"grateful",label:"Grateful for",hint:"1–3 things",icon:zh,color:"#C2536B"},{id:"mattered",label:"What mattered",hint:"The point of today",icon:El,color:"#3A7CA5"},{id:"letgo",label:"Letting go of",hint:"Offload what's draining",icon:Y0,color:"#8268B0"},{id:"tomorrow",label:"Tomorrow's one thing",hint:"A single priority",icon:Ph,color:"#4C9A6B"}],Ov=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,Nv=()=>Lo(),ud=e=>new Date(e+"T00:00:00").toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long",year:"numeric"});function Hv(){const e=Nv(),[r,n]=[new Date().getFullYear(),new Date().getMonth()+1],[o,i]=c.useState(null),s=o||e,a=s===e,[l,d]=c.useState(null),[g,m]=c.useState({}),[f,h]=c.useState(Object.fromEntries(gd.map(B=>[B.id,""]))),T=c.useCallback(async B=>{const W=await _.getJournalEntry(B);d(W)},[]);c.useCallback(async()=>{const B=await _.getJournalHistory(r,n);m(B)},[r,n]);const D=c.useCallback(async()=>{const[B,W]=await Promise.all([_.getJournalEntry(s),_.getJournalHistory(r,n)]);d(B),m(W)},[s,r,n]);c.useEffect(()=>{D()},[D]);const I=async B=>{a&&(await _.updateJournalMood(s,B),D())},z=async B=>{if(!a)return;const W=f[B].trim();W&&(await _.addJournalBullet(s,B,W),h(Q=>({...Q,[B]:""})),T(s))},b=async B=>{await _.deleteJournalBullet(B),T(s)},p=B=>{i(B===e?null:B),h(Object.fromEntries(gd.map(W=>[W.id,""])))};if(!l)return t.jsx("div",{style:{padding:28,color:"var(--text-3)"},children:"Loading…"});const u=l.mood!==null,y=(()=>{let B=0;const W=new Date(e);if(g[e]||a&&u)B=1,W.setDate(W.getDate()-1);else return 0;for(;;){const re=Ov(W);if(g[re])B++,W.setDate(W.getDate()-1);else break}return B})(),j=Object.values(l.bullets||{}).reduce((B,W)=>B+W.length,0),C=new Date(r,n,0).getDate(),k=new Date(r,n-1,1).getDay(),x=k===0?6:k-1;return t.jsxs("div",{style:lt.page,children:[t.jsxs("div",{style:lt.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:lt.eyebrow,children:"Anvil · Journal"}),!a&&t.jsxs("button",{style:lt.backBtn,onClick:()=>i(null),children:[t.jsx(Mn,{size:14})," Back to Today"]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("h1",{style:lt.h1,children:a?"Today":ud(s)}),t.jsx(Yt,{id:"journal"})]}),a&&t.jsx("div",{style:lt.date,children:ud(e)})]}),t.jsxs("div",{style:lt.streakBox,children:[t.jsx(go,{size:16,color:"#C2773B"}),t.jsx("span",{style:lt.streakNum,children:y}),t.jsx("span",{style:lt.streakLabel,children:"day streak"})]})]}),t.jsxs("div",{style:lt.card,children:[t.jsxs("div",{style:lt.cardTitle,children:["How ",a?"are":"were"," you?"]}),t.jsx("div",{style:lt.moodRow,children:Bc.map(B=>{const W=l.mood===B.id;return t.jsxs("button",{onClick:()=>I(B.id),disabled:!a,style:{...lt.moodBtn,cursor:a?"pointer":"default",...W?{background:B.color,borderColor:B.color,transform:"translateY(-2px)"}:{},...!a&&!W?{opacity:.55}:{}},children:[t.jsx("span",{style:lt.moodEmoji,children:B.emoji}),t.jsx("span",{style:{...lt.moodLabel,color:W?"#fff":"#6B675E"},children:B.label})]},B.id)})})]}),gd.map(B=>{var re;const W=B.icon,Q=((re=l.bullets)==null?void 0:re[B.id])||[];return t.jsxs("div",{style:lt.card,children:[t.jsxs("div",{style:lt.sectionHead,children:[t.jsx("span",{style:{...lt.sectionIcon,background:`${B.color}1A`,color:B.color},children:t.jsx(W,{size:15})}),t.jsxs("div",{children:[t.jsx("div",{style:lt.cardTitle,children:B.label}),t.jsx("div",{style:lt.sectionHint,children:B.hint})]})]}),t.jsxs("ul",{style:lt.bulletList,children:[Q.map(ge=>t.jsxs("li",{style:lt.bullet,children:[t.jsx("span",{style:{...lt.bulletDot,background:B.color}}),t.jsx("span",{style:lt.bulletText,children:ge.text}),a&&t.jsx("button",{onClick:()=>b(ge.id),style:lt.bulletDel,children:t.jsx(De,{size:13})})]},ge.id)),!a&&Q.length===0&&t.jsx("li",{style:lt.sectionHint,children:"Nothing written."})]}),a&&t.jsxs("div",{style:lt.addRow,children:[t.jsx("input",{placeholder:"Add a point…",value:f[B.id],onChange:ge=>h(A=>({...A,[B.id]:ge.target.value})),onKeyDown:ge=>ge.key==="Enter"&&z(B.id),style:lt.input}),t.jsx("button",{onClick:()=>z(B.id),style:{...lt.addBtn,background:B.color},children:t.jsx(mt,{size:16})})]})]},B.id)}),t.jsxs("div",{style:lt.card,children:[t.jsxs("div",{style:lt.cardTitle,children:[new Date(r,n-1).toLocaleDateString("en-US",{month:"long",year:"numeric"})," · Mood history",t.jsx("span",{style:{fontSize:11,color:"var(--text-3)",fontWeight:400,marginLeft:8},children:"tap a day to view"})]}),t.jsx("div",{style:lt.calDow,children:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(B=>t.jsx("div",{style:lt.calDowCell,children:B},B))}),t.jsxs("div",{style:lt.calGrid,children:[Array.from({length:x}).map((B,W)=>t.jsx("div",{},`p${W}`)),Array.from({length:C},(B,W)=>W+1).map(B=>{const W=`${r}-${String(n).padStart(2,"0")}-${String(B).padStart(2,"0")}`,Q=W===e&&l.mood?l.mood:g[W],re=Q?Pv(Q):null,ge=W>e,A=W===s;return t.jsx("button",{onClick:()=>!ge&&p(W),disabled:ge,style:{...lt.calDay,background:re?re.color:ge?"var(--surface-2)":"var(--surface)",borderColor:A?"var(--accent-strong)":"var(--border)",borderWidth:A?2:1,color:re?"#fff":"var(--text-3)",opacity:ge?.5:1,cursor:ge?"not-allowed":"pointer",outline:A?"2px solid var(--accent-strong)":"none",outlineOffset:1},title:re?re.label:W,children:re?re.emoji:B},B)})]}),t.jsx("div",{style:lt.legend,children:Bc.map(B=>t.jsxs("span",{style:lt.legendItem,children:[t.jsx("span",{style:{...lt.legendDot,background:B.color}})," ",B.label]},B.id))})]}),t.jsx("div",{style:lt.footer,children:a?u?`Mood set · ${j} point${j===1?"":"s"} written today`:"Tap a mood to log today and keep your streak":`Viewing ${ud(s)} · past entries are read-only`})]})}const lt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:22},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},backBtn:{display:"inline-flex",alignItems:"center",gap:4,border:"none",background:"none",color:"#3A7CA5",fontSize:12.5,fontWeight:600,cursor:"pointer",padding:"0 0 6px",fontFamily:"inherit"},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},date:{fontSize:13,color:"var(--text-3)",marginTop:4},streakBox:{display:"flex",alignItems:"center",gap:6,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"8px 14px"},streakNum:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"#C2773B"},streakLabel:{fontSize:11,color:"var(--text-3)",fontWeight:500},card:{background:"var(--surface)",borderRadius:12,padding:"18px 20px",marginBottom:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},cardTitle:{fontSize:14,fontWeight:700,marginBottom:12,color:"var(--text)"},moodRow:{display:"flex",gap:8,flexWrap:"wrap"},moodBtn:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,border:"2px solid var(--border)",background:"var(--surface)",borderRadius:10,padding:"10px 12px",cursor:"pointer",flex:"1 1 60px",transition:"transform 0.1s"},moodEmoji:{fontSize:22},moodLabel:{fontSize:11,fontWeight:600},sectionHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:10},sectionIcon:{width:32,height:32,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},sectionHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},bulletList:{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6,marginBottom:10},bullet:{display:"flex",alignItems:"center",gap:8,fontSize:13.5,lineHeight:1.4},bulletDot:{width:6,height:6,borderRadius:"50%",flexShrink:0},bulletText:{flex:1},bulletDel:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},addRow:{display:"flex",gap:8},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 12px",fontSize:13.5,fontFamily:"inherit",outline:"none"},addBtn:{width:36,height:36,border:"none",borderRadius:8,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:12},calDay:{aspectRatio:"1",border:"1px solid var(--border)",borderRadius:7,fontSize:13,display:"grid",placeItems:"center",fontWeight:500,fontFamily:"inherit"},legend:{display:"flex",gap:10,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)"},legendDot:{width:8,height:8,borderRadius:"50%",display:"inline-block"},footer:{fontSize:12.5,color:"var(--text-3)",textAlign:"center",marginTop:8,fontStyle:"italic"}};function Gv(e=760){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const Kr=[{id:"D",label:"Data",color:"#3A7CA5",soft:"rgba(58,124,165,0.10)",prompt:"What did you read/watch? Log the raw source and a quick note.",hint:"e.g. 'Atomic Habits ch.1 — habits are systems not goals'"},{id:"I",label:"Information",color:"#8268B0",soft:"rgba(130,104,176,0.10)",prompt:"What did you actually understand from it? In your own words.",hint:"e.g. 'Small 1% improvements compound into massive change over time'"},{id:"K",label:"Knowledge",color:"#C9A227",soft:"rgba(201,162,39,0.10)",prompt:"How will this specifically improve your life? Connect it to your goals.",hint:"e.g. 'I will improve my morning workout habit by 1% each week'"},{id:"W",label:"Wisdom",color:"#4C9A6B",soft:"rgba(76,154,107,0.10)",prompt:"How have you implemented it? What changed?",hint:"e.g. 'I've not missed a workout in 3 weeks using the 1% rule'"}],jp=e=>Kr.findIndex(r=>r.id===e),Rc=[{id:"book",label:"Book",icon:Ms},{id:"video",label:"Video",icon:Gh},{id:"article",label:"Article",icon:Rg}],aa=e=>Rc.find(r=>r.id===e)||Rc[0],pd={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"};function Uv(){var he;const[e,r]=c.useState([]),[n,o]=c.useState(null),[i,s]=c.useState("ALL"),[a,l]=c.useState(!1),[d,g]=c.useState(null),[m,f]=c.useState({title:"",type:"book",pillar:"Academic",note:"",link:""}),[h,T]=c.useState(null),[D,I]=c.useState({}),[z,b]=c.useState(null),[p,u]=c.useState(null),[y,j]=c.useState({}),[C,k]=c.useState({}),[x,B]=c.useState(null),W=Gv(),Q=c.useCallback(async()=>{try{const V=await _.getSkills();r(V);const fe={};V.forEach(ye=>{fe[ye.id]=Object.fromEntries(Kr.map(Ae=>[Ae.id,""]))}),I(ye=>{const Ae={...fe};return V.forEach(tt=>{ye[tt.id]&&(Ae[tt.id]={...fe[tt.id],...ye[tt.id]})}),Ae})}catch(V){console.error(V)}},[]);c.useEffect(()=>{Q()},[Q]);const re=e.find(V=>V.id===n),ge=re?jp(re.stage):-1,A=async(V,fe)=>{var Ae;const ye=(((Ae=D[V])==null?void 0:Ae[fe])??"").trim();ye&&(await _.addSkillNote(V,fe,ye),I(tt=>({...tt,[V]:{...tt[V],[fe]:""}})),Q())},X=async V=>{await _.deleteSkillNote(V),Q()},ie=V=>(V==null?void 0:V.source_type)==="book"?"Chapter":"Learning",xe=()=>`g${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,q=async V=>{const fe=[...V.data_groups||[]];fe.push({id:xe(),label:`${ie(V)} ${fe.length+1}`}),await _.setSkillGroups(V.id,fe),k(ye=>({...ye,[fe[fe.length-1].id]:!0})),Q()},K=async(V,fe,ye)=>{const Ae=(V.data_groups||[]).map(tt=>tt.id===fe?{...tt,label:ye}:tt);await _.setSkillGroups(V.id,Ae),Q()},de=async(V,fe)=>{const ye=(V.data_groups||[]).filter(Ae=>Ae.id!==fe);await _.setSkillGroups(V.id,ye),Q()},J=async(V,fe)=>{const ye=(y[fe]??"").trim();ye&&(await _.addSkillNote(V.id,"D",ye,fe),j(Ae=>({...Ae,[fe]:""})),Q())},R=async()=>{!re||!(p!=null&&p.trim())||(await _.updateSkill(re.id,{title:p.trim()}),u(null),Q())},O=async()=>{!z||!z.text.trim()||(await _.updateSkillNote(z.id,z.text.trim()),b(null),Q())},G=async V=>{await _.toggleSkillNote(V),Q()},$=async(V,fe)=>{e.find(Ae=>Ae.id===V)&&(fe==="W"&&g(V),await _.completeSkillStage(V,fe),Q())},ae=async()=>{if(!m.title.trim())return;const V=await _.createSkill({pillar:m.pillar,title:m.title.trim(),source_type:m.type,link:m.link.trim(),note_d:m.note.trim()});l(!1),f({title:"",type:"book",pillar:"Academic",note:"",link:""}),o(V.id),Q()},me=async()=>{re&&(await _.updateSkill(re.id,{link:(h||"").trim()}),T(null),Q())},{deleteItem:Oe,toasts:Ce,handleUndo:U,handleDismiss:P}=Cr(_.deleteSkill,_.restoreSkill,Q),ne=(V,fe="Skill")=>{n===V&&o(null),Oe(V,fe)},E=i==="ALL"?e:e.filter(V=>V.stage===i),w=e.filter(V=>V.stage==="W").length,oe=!!re;return t.jsxs("div",{style:ve.page,children:[d&&t.jsx("div",{style:ve.celebOverlay,children:t.jsxs("div",{style:ve.celebBox,children:[t.jsx("div",{style:ve.celebEmoji,children:"🏆"}),t.jsx("div",{style:ve.celebTitle,children:"Wisdom unlocked!"}),t.jsx("div",{style:ve.celebSub,children:"You've implemented this knowledge — that's rare and real."}),t.jsx("button",{onClick:()=>g(null),style:ve.celebBtn,children:"Continue"})]})}),t.jsxs("div",{style:ve.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:ve.eyebrow,children:"Anvil · Skills"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("h1",{style:ve.h1,children:"Skills"}),t.jsx(Yt,{id:"skills"})]}),t.jsx("div",{style:ve.subhead,children:"Data → Information → Knowledge → Wisdom"})]}),t.jsxs("div",{style:ve.headRight,children:[t.jsxs("div",{style:ve.wisdomBadge,children:[t.jsx(rn,{size:14,color:"#C9A227"})," ",w," Wisdom",w!==1?"s":""]}),t.jsxs("button",{onClick:()=>{l(!0),o(null)},style:ve.addSkillBtn,children:[t.jsx(mt,{size:15})," Add skill"]})]})]}),t.jsx("div",{style:ve.filterBar,children:["ALL",...Kr.map(V=>V.id)].map(V=>{const fe=Kr.find(Ae=>Ae.id===V),ye=i===V;return t.jsx("button",{onClick:()=>s(V),style:{...ve.filterBtn,...ye?{background:fe?fe.color:"var(--accent-strong)",color:"#fff",borderColor:"transparent"}:{}},children:fe?`${V} · ${fe.label}`:"All"},V)})}),t.jsxs("div",{style:{...ve.layout,gridTemplateColumns:!W&&oe?"minmax(0,1fr) minmax(0,1fr)":"1fr"},children:[(!W||!re)&&t.jsxs("div",{style:{...ve.cardList,gridTemplateColumns:W||oe?"1fr":"repeat(3, minmax(0, 1fr))"},children:[a&&t.jsxs("div",{style:{...ve.skillCard,border:"2px dashed #3A7CA5",gridColumn:"1 / -1"},children:[t.jsx("div",{style:ve.cardTitle,children:"New skill"}),t.jsx("input",{placeholder:"Title (book / video / article name)",value:m.title,onChange:V=>f(fe=>({...fe,title:V.target.value})),onKeyDown:V=>V.key==="Enter"&&ae(),style:ve.input,autoFocus:!0}),t.jsxs("div",{style:ve.addRow,children:[t.jsx(cr,{value:m.type,options:Rc.map(V=>({value:V.id,label:V.label})),onChange:V=>f(fe=>({...fe,type:V})),style:{flex:1}}),t.jsx(cr,{value:m.pillar,options:Object.keys(pd),onChange:V=>f(fe=>({...fe,pillar:V})),style:{flex:1}})]}),t.jsx("input",{placeholder:m.type==="book"?"Link (optional)":`${aa(m.type).label} link (optional) — paste URL to route here`,value:m.link,onChange:V=>f(fe=>({...fe,link:V.target.value})),onKeyDown:V=>V.key==="Enter"&&ae(),style:ve.input}),t.jsxs("div",{style:ve.addRow,children:[t.jsxs("button",{onClick:ae,style:ve.saveBtn,children:[t.jsx(He,{size:14})," Save"]}),t.jsxs("button",{onClick:()=>l(!1),style:ve.cancelBtn,children:[t.jsx(De,{size:14})," Cancel"]})]})]}),E.map(V=>{const fe=jp(V.stage),ye=Kr[fe],Ae=aa(V.source_type),tt=V.stage==="W",yt=n===V.id;return t.jsxs("div",{onClick:()=>o(yt?null:V.id),style:{...ve.skillCard,...yt?{borderColor:ye.color,borderWidth:2}:{},...tt?{background:"rgba(76,154,107,0.05)"}:{}},children:[t.jsxs("div",{style:ve.skillCardTop,children:[t.jsxs("div",{style:ve.skillMeta,children:[t.jsx("span",{style:{color:pd[V.pillar]},children:t.jsx(Ae.icon,{size:13})}),t.jsx("span",{style:{...ve.pillarDot,background:pd[V.pillar]}}),t.jsxs("span",{style:ve.srcLabel,children:[Ae.label," · ",V.pillar]})]}),t.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[tt&&t.jsx(_o,{size:14,color:"#4C9A6B"}),V.link&&t.jsx("a",{href:V.link,target:"_blank",rel:"noreferrer",onClick:_e=>_e.stopPropagation(),style:ve.ghostBtn,title:"Open source",children:t.jsx(vc,{size:13})}),t.jsx("button",{onClick:_e=>{_e.stopPropagation(),ne(V.id,V.title)},style:ve.ghostBtn,children:t.jsx(De,{size:13})})]})]}),t.jsx("div",{style:ve.skillTitle,children:V.title}),t.jsxs("div",{style:ve.track,children:[Kr.map((_e,st)=>{var ct;const Ze=st<fe,at=st===fe,vt=(ct=V.completed_stages)==null?void 0:ct[_e.id];return t.jsxs("div",{style:{...ve.trackItem,...st<Kr.length-1?{flex:1}:{}},children:[t.jsxs("div",{style:{...ve.trackDot,background:Ze||vt||at?_e.color:"var(--border)",boxShadow:at?`0 0 0 3px ${_e.color}33`:"none"},children:[(Ze||at&&vt)&&t.jsx(He,{size:9,color:"#fff",strokeWidth:3}),at&&!vt&&t.jsx("span",{style:ve.trackCurrent,children:_e.id}),!Ze&&!at&&t.jsx(Ju,{size:8,color:"#B5B1A7"})]}),st<Kr.length-1&&t.jsx("div",{style:{...ve.trackLine,background:Ze?Kr[st+1].color:"var(--border)"}})]},_e.id)}),t.jsx("span",{style:{...ve.stageTag,background:ye.soft,color:ye.color},children:ye.label})]})]},V.id)}),E.length===0&&!a&&t.jsx("div",{style:{...ve.empty,gridColumn:"1 / -1"},children:"No skills at this stage yet."})]}),re&&t.jsxs("div",{style:ve.detail,children:[t.jsxs("div",{style:ve.detailHead,children:[W&&t.jsx("button",{onClick:()=>{o(null),u(null)},style:ve.backBtn,title:"Back to skills",children:t.jsx(Mn,{size:18})}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsxs("div",{style:ve.eyebrow,children:[aa(re.source_type).label," · ",re.pillar]}),p!==null?t.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",marginTop:4},children:[t.jsx("input",{autoFocus:!0,value:p,onChange:V=>u(V.target.value),onKeyDown:V=>{V.key==="Enter"&&R(),V.key==="Escape"&&u(null)},style:{...ve.input,fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:0,flex:1}}),t.jsx("button",{onClick:R,style:{...ve.noteAddBtn,background:"#4C9A6B",width:30,height:30},children:t.jsx(He,{size:13})}),t.jsx("button",{onClick:()=>u(null),style:{...ve.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:30,height:30},children:t.jsx(De,{size:13})})]}):t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[t.jsx("div",{style:ve.detailTitle,children:re.title}),t.jsx("button",{onClick:()=>u(re.title),style:ve.ghostBtn,title:"Edit name",children:t.jsx(wt,{size:13})})]}),h!==null?t.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",marginTop:6},children:[t.jsx("input",{autoFocus:!0,value:h,placeholder:"Paste the video / article URL",onChange:V=>T(V.target.value),onKeyDown:V=>{V.key==="Enter"&&me(),V.key==="Escape"&&T(null)},style:{...ve.input,marginBottom:0,flex:1}}),t.jsx("button",{onClick:me,style:{...ve.noteAddBtn,background:"#4C9A6B",width:30,height:30},children:t.jsx(He,{size:13})}),t.jsx("button",{onClick:()=>T(null),style:{...ve.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:30,height:30},children:t.jsx(De,{size:13})})]}):t.jsx("div",{style:{display:"flex",alignItems:"center",gap:8,marginTop:6,flexWrap:"wrap"},children:re.link?t.jsxs(t.Fragment,{children:[t.jsxs("a",{href:re.link,target:"_blank",rel:"noreferrer",style:ve.openLinkBtn,children:[t.jsx(vc,{size:13})," Open ",aa(re.source_type).label.toLowerCase()]}),t.jsx("button",{onClick:()=>T(re.link),style:ve.ghostBtn,title:"Edit link",children:t.jsx(wt,{size:12})})]}):t.jsxs("button",{onClick:()=>T(""),style:ve.addLinkBtn,children:[t.jsx(Is,{size:12})," Add link"]})})]}),t.jsx("button",{onClick:()=>{o(null),u(null)},style:ve.closeBtn,children:t.jsx(De,{size:16})})]}),Kr.map((V,fe)=>{var Ze,at,vt;const ye=fe<=ge,Ae=fe===ge,tt=fe<ge||((Ze=re.completed_stages)==null?void 0:Ze[V.id]),yt=fe>ge,_e=((at=re.notes)==null?void 0:at[V.id])||[],st=((vt=D[re.id])==null?void 0:vt[V.id])??"";return t.jsxs("div",{style:{...ve.stageBlock,...ye?{borderColor:V.color}:{},opacity:yt?.45:1},children:[t.jsxs("div",{style:ve.stageBlockHead,children:[t.jsx("div",{style:{...ve.stageLetter,background:ye?V.color:"var(--border)",color:ye?"#fff":"#9A968C"},children:tt&&!Ae?t.jsx(He,{size:12,color:"#fff",strokeWidth:3}):yt?t.jsx(Ju,{size:11,color:"#9A968C"}):V.id}),t.jsxs("div",{style:{flex:1},children:[t.jsx("div",{style:{...ve.stageName,color:ye?V.color:"#9A968C"},children:V.label}),ye&&t.jsx("div",{style:ve.stagePrompt,children:V.prompt})]}),tt&&!Ae&&t.jsx("span",{style:{...ve.doneBadge,color:V.color,background:V.soft},children:"Done"})]}),ye&&(()=>{var zt,xr;const ct=V.id==="W",Ht=V.id==="D",Wt=_e.length>0&&_e.every(Ge=>Ge.done),Et=ct?Wt:_e.length>0,le=re.data_groups||[],Le=_e.filter(Ge=>!Ge.grp),ot=ie(re),bt=Ge=>t.jsxs("li",{style:ve.noteItem,children:[t.jsx("span",{style:{...ve.noteDot,background:V.color}}),(z==null?void 0:z.id)===Ge.id?t.jsxs("div",{style:{flex:1,display:"flex",gap:5},children:[t.jsx("input",{autoFocus:!0,value:z.text,onChange:it=>b(xt=>({...xt,text:it.target.value})),onKeyDown:it=>{it.key==="Enter"&&O(),it.key==="Escape"&&b(null)},style:{...ve.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}),t.jsx("button",{onClick:O,style:{...ve.noteAddBtn,background:V.color,width:28,height:28},children:t.jsx(He,{size:12})}),t.jsx("button",{onClick:()=>b(null),style:{...ve.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:28,height:28},children:t.jsx(De,{size:12})})]}):t.jsx("span",{style:ve.noteText,children:Ge.text}),(z==null?void 0:z.id)!==Ge.id&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>b({id:Ge.id,text:Ge.text}),style:ve.ghostBtn,children:t.jsx(wt,{size:12})}),t.jsx("button",{onClick:()=>X(Ge.id),style:ve.ghostBtn,children:t.jsx(De,{size:12})})]})]},Ge.id);return t.jsxs(t.Fragment,{children:[Ht?t.jsxs(t.Fragment,{children:[Le.length>0&&t.jsx("ul",{style:ve.noteList,children:Le.map(bt)}),le.map(Ge=>{const it=_e.filter(ut=>ut.grp===Ge.id),xt=C[Ge.id]!==!1;return t.jsxs("div",{style:{...ve.groupBox,borderColor:`${V.color}55`},children:[t.jsxs("div",{style:ve.groupHead,children:[t.jsx("button",{onClick:()=>k(ut=>({...ut,[Ge.id]:!xt})),style:ve.groupCaret,children:xt?t.jsx(mo,{size:15}):t.jsx(bn,{size:15})}),re.source_type==="book"?t.jsx(Ms,{size:13,color:V.color}):t.jsx(S0,{size:13,color:V.color}),(x==null?void 0:x.id)===Ge.id?t.jsx("input",{autoFocus:!0,value:x.label,onChange:ut=>B(Dt=>({...Dt,label:ut.target.value})),onKeyDown:ut=>{ut.key==="Enter"&&(K(re,Ge.id,x.label.trim()||Ge.label),B(null)),ut.key==="Escape"&&B(null)},onBlur:()=>{K(re,Ge.id,x.label.trim()||Ge.label),B(null)},style:{...ve.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}):t.jsx("span",{style:ve.groupTitle,onClick:()=>B({id:Ge.id,label:Ge.label}),title:"Click to rename",children:Ge.label}),t.jsx("span",{style:ve.groupCount,children:it.length}),t.jsx("button",{onClick:()=>de(re,Ge.id),style:ve.ghostBtn,title:`Delete ${ot.toLowerCase()}`,children:t.jsx(De,{size:13})})]}),xt&&t.jsxs("div",{style:ve.groupBody,children:[it.length>0&&t.jsx("ul",{style:ve.noteList,children:it.map(bt)}),t.jsxs("div",{style:ve.noteAddRow,children:[t.jsx("input",{placeholder:"Add a point…",value:y[Ge.id]??"",onChange:ut=>j(Dt=>({...Dt,[Ge.id]:ut.target.value})),onKeyDown:ut=>ut.key==="Enter"&&J(re,Ge.id),style:ve.noteInput}),t.jsx("button",{onClick:()=>J(re,Ge.id),style:{...ve.noteAddBtn,background:V.color},children:t.jsx(mt,{size:14})})]})]})]},Ge.id)}),le.length===0&&Le.length===0&&t.jsxs("div",{style:ve.noNotes,children:["No ",ot.toLowerCase(),"s yet — add one to start logging points."]}),t.jsxs("button",{onClick:()=>q(re),style:{...ve.addGroupBtn,color:V.color,borderColor:`${V.color}80`},children:[t.jsx(mt,{size:14})," Add ",ot.toLowerCase()]})]}):t.jsxs(t.Fragment,{children:[_e.length>0&&t.jsx("ul",{style:ve.noteList,children:_e.map(Ge=>t.jsxs("li",{style:ve.noteItem,children:[ct?t.jsx("button",{onClick:()=>G(Ge.id),style:{...ve.checkBox,...Ge.done?{background:V.color,borderColor:V.color}:{}},children:Ge.done&&t.jsx(He,{size:11,color:"#fff",strokeWidth:3})}):t.jsx("span",{style:{...ve.noteDot,background:V.color}}),(z==null?void 0:z.id)===Ge.id?t.jsxs("div",{style:{flex:1,display:"flex",gap:5},children:[t.jsx("input",{autoFocus:!0,value:z.text,onChange:it=>b(xt=>({...xt,text:it.target.value})),onKeyDown:it=>{it.key==="Enter"&&O(),it.key==="Escape"&&b(null)},style:{...ve.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}),t.jsx("button",{onClick:O,style:{...ve.noteAddBtn,background:V.color,width:28,height:28},children:t.jsx(He,{size:12})}),t.jsx("button",{onClick:()=>b(null),style:{...ve.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:28,height:28},children:t.jsx(De,{size:12})})]}):t.jsx("span",{style:{...ve.noteText,...ct&&Ge.done?{textDecoration:"line-through",color:"var(--text-3)"}:{}},children:Ge.text}),(z==null?void 0:z.id)!==Ge.id&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>b({id:Ge.id,text:Ge.text}),style:ve.ghostBtn,children:t.jsx(wt,{size:12})}),t.jsx("button",{onClick:()=>X(Ge.id),style:ve.ghostBtn,children:t.jsx(De,{size:12})})]})]},Ge.id))}),_e.length===0&&t.jsx("div",{style:ve.noNotes,children:ct?"Add the steps to implement this — check each off as you do it.":`No notes yet — ${V.hint}`}),t.jsxs("div",{style:ve.noteAddRow,children:[t.jsx("input",{placeholder:ct?"Add a step to implement…":`Add a ${V.label} note…`,value:st,onChange:Ge=>I(it=>({...it,[re.id]:{...it[re.id],[V.id]:Ge.target.value}})),onKeyDown:Ge=>Ge.key==="Enter"&&A(re.id,V.id),style:ve.noteInput}),t.jsx("button",{onClick:()=>A(re.id,V.id),style:{...ve.noteAddBtn,background:V.color},children:t.jsx(mt,{size:14})})]})]}),Ae&&!((zt=re.completed_stages)!=null&&zt[V.id])&&t.jsxs(t.Fragment,{children:[ct&&_e.length>0&&!Wt&&t.jsxs("div",{style:ve.checklistHint,children:[_e.filter(Ge=>Ge.done).length,"/",_e.length," done — check all steps to complete Wisdom"]}),t.jsxs("button",{onClick:()=>$(re.id,V.id),disabled:!Et,style:{...ve.advanceBtn,background:Et?V.color:"#C3BFB5",marginTop:10,cursor:Et?"pointer":"not-allowed"},children:[t.jsx(He,{size:14}),ct?"Mark Wisdom complete":`Complete ${V.label} → ${(xr=Kr[fe+1])==null?void 0:xr.label}`]})]})]})})()]},V.id)}),re.stage==="W"&&((he=re.completed_stages)==null?void 0:he.W)&&t.jsxs("div",{style:ve.wisdomDone,children:[t.jsx(rn,{size:16,color:"#4C9A6B"})," Wisdom achieved — implemented in your life"]})]})]}),t.jsx(Tr,{toasts:Ce,onUndo:U,onDismiss:P})]})}const ve={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box",position:"relative"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},headRight:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},wisdomBadge:{display:"flex",alignItems:"center",gap:5,background:"rgba(201,162,39,0.12)",border:"1px solid rgba(201,162,39,0.3)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:700,color:"#8A6E1A"},addSkillBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},filterBar:{display:"flex",gap:6,flexWrap:"wrap",marginBottom:16},filterBtn:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},layout:{display:"grid",gap:12,alignItems:"start"},cardList:{display:"grid",gap:10,alignContent:"start"},skillCard:{background:"var(--surface)",borderRadius:12,padding:"16px",border:"1.5px solid var(--border)",cursor:"pointer",boxShadow:"0 1px 2px rgba(0,0,0,0.04)",minWidth:0,overflow:"hidden",boxSizing:"border-box"},skillCardTop:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:8,marginBottom:6},skillMeta:{display:"flex",alignItems:"center",gap:6,minWidth:0},pillarDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},srcLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},skillTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em",marginBottom:12,lineHeight:1.3,wordBreak:"break-word"},cardTitle:{fontSize:13,fontWeight:700,marginBottom:10},track:{display:"flex",alignItems:"center",minWidth:0},trackItem:{display:"flex",alignItems:"center",minWidth:0},trackDot:{width:22,height:22,borderRadius:"50%",display:"grid",placeItems:"center",flexShrink:0},trackCurrent:{fontSize:9,fontWeight:800,color:"#fff"},trackLine:{flex:1,minWidth:8,height:3,borderRadius:2,margin:"0 2px"},stageTag:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:12,marginLeft:8,flexShrink:0,whiteSpace:"nowrap"},detail:{background:"var(--surface)",borderRadius:14,padding:"18px 16px",boxShadow:"0 1px 4px rgba(0,0,0,0.07)",border:"1.5px solid var(--border)",alignSelf:"start"},detailHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16},detailTitle:{fontSize:18,fontWeight:700,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},backBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,marginRight:4},groupBox:{border:"1.5px solid var(--border)",borderRadius:9,marginBottom:8,overflow:"hidden",background:"var(--bg)"},groupHead:{display:"flex",alignItems:"center",gap:7,padding:"8px 10px"},groupCaret:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",display:"grid",placeItems:"center",padding:0,width:18,height:18,flexShrink:0},groupTitle:{flex:1,minWidth:0,fontSize:13,fontWeight:700,color:"var(--text)",cursor:"text",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},groupCount:{fontSize:10.5,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 7px",flexShrink:0},groupBody:{padding:"0 10px 10px 10px"},addGroupBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1.5px dashed",background:"none",padding:"9px 12px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:2},stageBlock:{border:"1.5px solid var(--border)",borderRadius:10,padding:"12px 13px",marginBottom:10},stageBlockHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:8},stageLetter:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",fontSize:13,fontWeight:800,flexShrink:0},stageName:{fontSize:13,fontWeight:700},stagePrompt:{fontSize:11.5,color:"var(--text-2)",marginTop:2,lineHeight:1.4},doneBadge:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10,marginLeft:"auto",flexShrink:0},noteList:{margin:"0 0 8px 0",padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6},noteItem:{display:"flex",alignItems:"flex-start",gap:8,fontSize:13,lineHeight:1.4},noteDot:{width:6,height:6,borderRadius:"50%",flexShrink:0,marginTop:5},checkBox:{width:18,height:18,borderRadius:5,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,marginTop:1,padding:0},checklistHint:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,marginTop:10,textAlign:"center"},noteText:{flex:1,color:"var(--text)"},noNotes:{fontSize:12,color:"var(--text-3)",fontStyle:"italic",marginBottom:8},noteAddRow:{display:"flex",gap:6},noteInput:{flex:1,border:"1px solid var(--border)",borderRadius:7,padding:"7px 10px",fontSize:13,fontFamily:"inherit",outline:"none"},noteAddBtn:{width:32,height:32,border:"none",borderRadius:7,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},advanceBtn:{display:"flex",alignItems:"center",gap:8,border:"none",color:"#fff",padding:"10px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit",width:"100%",justifyContent:"center"},wisdomDone:{display:"flex",alignItems:"center",gap:8,justifyContent:"center",fontSize:13.5,fontWeight:700,color:"#4C9A6B",padding:12,background:"rgba(76,154,107,0.08)",borderRadius:10,marginTop:4},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},openLinkBtn:{display:"inline-flex",alignItems:"center",gap:5,textDecoration:"none",border:"1px solid #3A7CA5",background:"rgba(58,124,165,0.10)",color:"#3A7CA5",fontSize:12,fontWeight:700,padding:"5px 11px",borderRadius:8,fontFamily:"inherit",cursor:"pointer"},addLinkBtn:{display:"inline-flex",alignItems:"center",gap:5,border:"1px dashed var(--border)",background:"none",color:"var(--text-3)",fontSize:12,fontWeight:600,padding:"5px 11px",borderRadius:8,fontFamily:"inherit",cursor:"pointer"},input:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box",marginBottom:8},addRow:{display:"flex",gap:8,marginBottom:8},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},empty:{fontSize:13,color:"var(--text-3)",padding:"32px 12px",textAlign:"center"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.55)",zIndex:50,display:"grid",placeItems:"center"},celebBox:{background:"var(--surface)",borderRadius:20,padding:"40px 32px",textAlign:"center",maxWidth:320,boxShadow:"0 8px 40px rgba(0,0,0,0.18)"},celebEmoji:{fontSize:52,marginBottom:12},celebTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:8},celebSub:{fontSize:13.5,color:"var(--text-2)",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:"#4C9A6B",color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},la=[{id:"aarti",title:"Aarti",html:`<h1>॥ गणपतीची आरती ॥</h1><br/>
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
      </div>`}];function Vv(){const[e,r]=c.useState(()=>window.innerWidth<720);return c.useEffect(()=>{const n=()=>r(window.innerWidth<720);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}const Yv=e=>new Promise((r,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:a,height:l}=i;a>l&&a>1400?(l=l*1400/a,a=1400):l>1400&&(a=a*1400/l,l=1400);const d=document.createElement("canvas");d.width=a,d.height=l,d.getContext("2d").drawImage(i,0,0,a,l),r(d.toDataURL("image/jpeg",.85))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(e)});function kp({base:e,count:r,images:n}){const o=n&&n.length?n:null,i=o?o.length:r,[s,a]=c.useState(0);if(!i)return null;const l=s%i,d=o?o[l]:`${e}${l+1}.jpg`;return t.jsxs("div",{style:{maxWidth:560,margin:"0 auto"},children:[t.jsx("div",{style:Qe.carouselFrame,children:t.jsx("img",{src:d,alt:`Page ${l+1}`,style:Qe.carouselImg})}),t.jsxs("div",{style:Qe.carouselNav,children:[t.jsxs("button",{onClick:()=>a(g=>(g-1+i)%i),style:Qe.carouselBtn,children:[t.jsx(Mn,{size:16})," Prev"]}),t.jsxs("span",{style:Qe.carouselCount,children:[o?"":"Adhyay ",l+1," / ",i]}),t.jsxs("button",{onClick:()=>a(g=>(g+1)%i),style:Qe.carouselBtn,children:["Next ",t.jsx(bn,{size:16})]})]})]})}function Kv(){const e=Vv(),[r,n]=c.useState(!1),[o,i]=c.useState([]),[s,a]=c.useState("dss"),[l,d]=c.useState(!1),[g,m]=c.useState({title:"",type:"text",content:"",images:[]}),[f,h]=c.useState([]),[T,D]=c.useState(null),[I,z]=c.useState(!1),b=c.useRef(!1),p=c.useCallback(async()=>{try{const[K,de,J]=await Promise.all([_.getDecks(),_.getSetting("spiritual_order"),_.getSetting("spiritual_default")]);if(i(K),Array.isArray(de==null?void 0:de.value)&&h(de.value),J!=null&&J.value&&D(J.value),!b.current){b.current=!0;const R=new Set([...la.map(O=>O.id),...K.map(O=>`deck-${O.id}`)]);J!=null&&J.value&&R.has(J.value)&&a(J.value)}}catch{}},[]);c.useEffect(()=>{p()},[p]);const u=[...la.map(K=>({id:K.id,title:K.title})),...o.map(K=>({id:`deck-${K.id}`,title:K.title}))],y=(()=>{if(!f.length)return u;const K=new Map(u.map(J=>[J.id,J])),de=[];return f.forEach(J=>{K.has(J)&&(de.push(K.get(J)),K.delete(J))}),K.forEach(J=>de.push(J)),de})(),j=(K,de)=>{const J=y.map(O=>O.id),R=K+de;R<0||R>=J.length||([J[K],J[R]]=[J[R],J[K]],h(J),_.setSetting("spiritual_order",J).catch(()=>{}))},C=K=>{D(K),_.setSetting("spiritual_default",K).catch(()=>{})},k=s.startsWith("deck-")?Number(s.slice(5)):null,x=k!=null?o.find(K=>K.id===k):null,B=x?null:la.find(K=>K.id===s)||(k==null?la[0]:null),W=l?"New deck":x?x.title:(B==null?void 0:B.title)||"",Q=K=>{a(K),d(!1),e&&n(!1)},re=()=>{d(!0),m({title:"",type:"text",content:"",images:[]}),e&&n(!1)},ge=async K=>{const de=Array.from(K.target.files||[]),J=[];for(const R of de)try{J.push(await Yv(R))}catch{}m(R=>({...R,images:[...R.images,...J]})),K.target.value=""},A=K=>m(de=>({...de,images:de.images.filter((J,R)=>R!==K)})),X=g.title.trim()&&(g.type==="text"?g.content.trim():g.images.length>0),ie=async()=>{if(!X)return;const K=await _.createDeck({title:g.title.trim(),type:g.type,content:g.type==="text"?g.content:"",images:g.type==="images"?g.images:[]});d(!1),await p(),a(`deck-${K.id}`)},xe=async K=>{await _.deleteDeck(K),s===`deck-${K}`&&a("dss"),p()},q={...Qe.sidebar,...e?Qe.sidebarOverlay:{},...e&&!r?Qe.sidebarHidden:{}};return t.jsxs("div",{style:Qe.shell,children:[t.jsx("style",{children:Qv}),e&&r&&t.jsx("div",{style:Qe.backdrop,onClick:()=>n(!1)}),t.jsxs("aside",{style:q,children:[t.jsxs("div",{style:Qe.sideHead,children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[t.jsx("div",{style:Qe.brand,children:"Anvil · Spiritual"}),t.jsx(Yt,{id:"spiritual"})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:2},children:[t.jsx("button",{onClick:()=>z(K=>!K),style:Qe.iconBtn,title:"Rearrange & set default",children:I?t.jsx(He,{size:16}):t.jsx(wt,{size:15})}),e&&t.jsx("button",{onClick:()=>n(!1),style:Qe.iconBtn,children:t.jsx(De,{size:17})})]})]}),I&&t.jsxs("div",{style:Qe.editHint,children:["Arrows reorder · ",t.jsx(zs,{size:11,style:{verticalAlign:"-1px"}})," sets what opens by default"]}),t.jsxs("div",{style:Qe.sideScroll,children:[y.map((K,de)=>{const J=K.id===s&&!l,R=T===K.id;return t.jsxs("div",{style:Qe.sideRow,children:[t.jsxs("button",{onClick:()=>Q(K.id),style:{...Qe.sideItem,flex:1,...J?Qe.sideItemOn:{}},children:[K.title,R&&t.jsx("span",{style:Qe.defStar,title:"Opens by default",children:" ★"})]}),I&&t.jsxs("div",{style:Qe.editControls,children:[t.jsx("button",{onClick:()=>C(K.id),title:"Set as default",style:{...Qe.miniBtn,...R?{color:"#8268B0"}:{}},children:t.jsx(zs,{size:13})}),t.jsx("button",{onClick:()=>j(de,-1),disabled:de===0,style:{...Qe.miniBtn,opacity:de===0?.3:1},children:t.jsx(Bl,{size:13})}),t.jsx("button",{onClick:()=>j(de,1),disabled:de===y.length-1,style:{...Qe.miniBtn,opacity:de===y.length-1?.3:1},children:t.jsx(mo,{size:13})})]})]},K.id)}),t.jsxs("button",{onClick:re,style:{...Qe.newDeckBtn,...l?Qe.sideItemOn:{}},children:[t.jsx(mt,{size:14})," New deck"]})]})]}),t.jsxs("main",{style:Qe.main,children:[e&&t.jsxs("button",{onClick:()=>n(!0),style:Qe.hamburger,children:[t.jsx(Eg,{size:17}),t.jsx("span",{style:Qe.hamburgerLabel,children:W})]}),l?t.jsxs("div",{style:Qe.contentWrap,children:[t.jsx("div",{style:Qe.formTitle,children:"Create a deck"}),t.jsx("input",{placeholder:"Deck title (e.g. Vishnu Sahasranamam)",value:g.title,onChange:K=>m({...g,title:K.target.value}),style:Qe.input}),t.jsxs("div",{style:Qe.typeRow,children:[t.jsxs("button",{onClick:()=>m({...g,type:"text"}),style:{...Qe.typeBtn,...g.type==="text"?Qe.typeOn:{}},children:[t.jsx(Rg,{size:15})," Text"]}),t.jsxs("button",{onClick:()=>m({...g,type:"images"}),style:{...Qe.typeBtn,...g.type==="images"?Qe.typeOn:{}},children:[t.jsx(v0,{size:15})," Images"]})]}),g.type==="text"?t.jsx("textarea",{placeholder:"Paste or write the text (verses, chant, reflection)…",value:g.content,onChange:K=>m({...g,content:K.target.value}),style:Qe.textarea}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:Qe.imgGrid,children:[g.images.map((K,de)=>t.jsxs("div",{style:Qe.imgThumbWrap,children:[t.jsx("img",{src:K,alt:"",style:Qe.imgThumb}),t.jsx("button",{onClick:()=>A(de),style:Qe.imgDel,children:t.jsx(De,{size:12})})]},de)),t.jsxs("label",{style:Qe.imgAdd,children:[t.jsx(Rl,{size:20}),t.jsx("span",{style:{fontSize:11},children:"Add images"}),t.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:ge,style:{display:"none"}})]})]}),t.jsx("div",{style:Qe.hint,children:"Images show as a swipeable carousel, in the order added."})]}),t.jsxs("div",{style:Qe.formActions,children:[t.jsxs("button",{onClick:()=>d(!1),style:Qe.cancelBtn,children:[t.jsx(De,{size:14})," Cancel"]}),t.jsxs("button",{onClick:ie,disabled:!X,style:{...Qe.saveBtn,...X?{}:Qe.saveDisabled},children:[t.jsx(He,{size:15})," Create deck"]})]})]}):x?t.jsxs("div",{style:Qe.contentWrap,children:[t.jsxs("div",{style:Qe.deckHead,children:[t.jsx("h2",{style:Qe.deckTitle,children:x.title}),t.jsx("button",{onClick:()=>xe(x.id),style:Qe.deckDel,title:"Delete deck",children:t.jsx(ji,{size:15})})]}),x.type==="images"?t.jsx(kp,{images:x.images}):t.jsx("div",{style:Qe.deckText,children:x.content})]}):t.jsxs("div",{style:Qe.contentWrap,children:[(B==null?void 0:B.youtube)&&t.jsx("div",{style:Qe.videoFrame,children:t.jsx("iframe",{src:`https://www.youtube.com/embed/${B.youtube}`,title:B.title,style:Qe.video,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0},B.youtube)}),B!=null&&B.carousel?t.jsx(kp,{base:B.imageBase,count:B.carousel}):t.jsx("div",{className:"spiritual-content",dangerouslySetInnerHTML:{__html:(B==null?void 0:B.html)||""}})]})]})]})}const Qv=`
.spiritual-content { font-family: 'Inter', system-ui, sans-serif; color: var(--text); line-height: 1.9; font-size: 16px; text-align: center; }
.spiritual-content h1 { font-family: 'Fraunces', Georgia, serif; font-size: 24px; color: #8268B0; margin: 8px 0 18px; letter-spacing: -0.01em; }
.spiritual-content h2 { font-family: 'Fraunces', Georgia, serif; font-size: 18px; color: #7A5EA8; margin: 20px 0 8px; }
.spiritual-content h3 { font-size: 15px; color: var(--text-3); text-transform: uppercase; letter-spacing: 0.06em; margin: 18px 0 6px; }
.spiritual-content b { color: #8268B0; }
.spiritual-content div { text-align: center; }
`,Qe={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:240,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.15)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.35)",zIndex:20},sideHead:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"18px 14px 12px"},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700},sideScroll:{flex:1,overflowY:"auto",padding:"0 8px 16px"},sideItem:{display:"block",width:"100%",border:"none",background:"none",padding:"10px 12px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13.5,fontWeight:500,color:"var(--text-2)",textAlign:"left",marginBottom:2},sideItemOn:{background:"rgba(130,104,176,0.12)",color:"#8268B0",fontWeight:700},sideRow:{display:"flex",alignItems:"center",gap:2},editControls:{display:"flex",alignItems:"center",gap:1,flexShrink:0},miniBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",borderRadius:5},defStar:{color:"#C9A227",fontWeight:700},editHint:{fontSize:10.5,color:"var(--text-3)",padding:"0 14px 8px",lineHeight:1.4},newDeckBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",padding:"9px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:600,color:"var(--text-2)",marginTop:6},main:{flex:1,padding:"26px 22px",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:220},contentWrap:{background:"var(--surface)",borderRadius:14,padding:"26px 28px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",maxWidth:760,margin:"0 auto"},videoFrame:{position:"relative",width:"100%",maxWidth:600,margin:"0 auto 22px",aspectRatio:"16 / 9",borderRadius:12,overflow:"hidden",background:"#000"},video:{position:"absolute",inset:0,width:"100%",height:"100%",border:"none"},carouselFrame:{background:"var(--surface-2)",borderRadius:12,padding:8,border:"1px solid var(--border)"},carouselImg:{width:"100%",borderRadius:8,display:"block"},carouselNav:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:14},carouselBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},carouselCount:{fontSize:13,fontWeight:700,color:"#8268B0",fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"none",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,color:"var(--text-2)"},deckHead:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,marginBottom:16,borderBottom:"1px solid var(--border)",paddingBottom:12},deckTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",margin:0,color:"#8268B0"},deckDel:{border:"1px solid var(--border)",background:"var(--surface)",color:"#C2536B",cursor:"pointer",display:"grid",placeItems:"center",padding:7,borderRadius:8,flexShrink:0},deckText:{fontSize:16,lineHeight:1.9,whiteSpace:"pre-wrap",color:"var(--text)",textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},formTitle:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:14},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none"},typeRow:{display:"flex",gap:8,marginTop:12},typeBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},typeOn:{background:"#8268B0",color:"#fff",borderColor:"#8268B0"},textarea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"12px",fontSize:15,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:200,resize:"vertical",lineHeight:1.7,marginTop:12},imgGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(90px, 1fr))",gap:8,marginTop:12},imgThumbWrap:{position:"relative",aspectRatio:"1",borderRadius:8,overflow:"hidden",border:"1px solid var(--border)"},imgThumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},imgDel:{position:"absolute",top:3,right:3,border:"none",background:"rgba(0,0,0,0.6)",color:"#fff",borderRadius:"50%",width:18,height:18,cursor:"pointer",display:"grid",placeItems:"center",padding:0},imgAdd:{aspectRatio:"1",border:"1px dashed var(--border)",borderRadius:8,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:4,cursor:"pointer",color:"var(--text-3)"},hint:{fontSize:11.5,color:"var(--text-3)",marginTop:8},formActions:{display:"flex",gap:8,marginTop:16},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:"#8268B0",color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"}},vn={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},wp=Object.keys(vn),Xv=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],qv=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Zv=()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},Jv=(e,r)=>`${qv[r-1]} ${e}`,e1=(e,r)=>{const n=new Date(e,r,0).getDate();return Array.from({length:n},(o,i)=>`${e}-${String(r).padStart(2,"0")}-${String(i+1).padStart(2,"0")}`)},t1=(e,r)=>{const n=new Date(e,r-1,1).getDay();return n===0?6:n-1};function r1(){const e=Zv(),[r,n]=c.useState(new Date().getFullYear()),[o,i]=c.useState(new Date().getMonth()+1),[s,a]=c.useState([]),[l,d]=c.useState([]),[g,m]=c.useState({}),[f,h]=c.useState(null),[T,D]=c.useState(!1),[I,z]=c.useState(!1),[b,p]=c.useState({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:e}),[u,y]=c.useState(null),j=c.useCallback(async()=>{const[O,G,$]=await Promise.all([_.getTopics(),_.getDueToday(),_.getCalendar(r,o)]);a(O),d(G),m($)},[r,o]);c.useEffect(()=>{j()},[j]);const C=async O=>{await _.toggleReviewDone(O),j()},k=async()=>{const O=b.intervals.split(",").map(G=>parseInt(G.trim(),10)).filter(G=>!isNaN(G));!b.topic.trim()||O.length===0||(await _.createTopic({pillar:b.pillar,topic:b.topic.trim(),intervals:O,learned_date:b.learned_date||e}),p({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:e}),z(!1),j())},{deleteItem:x,toasts:B,handleUndo:W,handleDismiss:Q}=Cr(_.deleteTopic,_.restoreTopic,j),re=(O,G)=>x(O,G),ge=O=>y({id:O.id,topic:O.topic,pillar:O.pillar,intervals:(O.intervals||[]).join(", "),learned_date:O.learned_date}),A=async()=>{if(!u)return;const O=u.intervals.split(",").map(G=>parseInt(G.trim(),10)).filter(G=>!isNaN(G)&&G>=0);!u.topic.trim()||O.length===0||(await _.updateTopic(u.id,{topic:u.topic.trim(),pillar:u.pillar,learned_date:u.learned_date,intervals:O}),y(null),j())},X=()=>{o===1?(n(O=>O-1),i(12)):i(O=>O-1),h(null)},ie=()=>{o===12?(n(O=>O+1),i(1)):i(O=>O+1),h(null)},xe=s.filter(O=>!O.cemented),q=s.filter(O=>O.cemented),K=e1(r,o),de=t1(r,o),J=c.useMemo(()=>{const O={};return s.forEach(G=>G.reviews.forEach($=>{$.done||(O[$.due_date]=O[$.due_date]||[]).push({topic:G.topic,pillar:G.pillar,stage:$.stage})})),O},[s]),R=f?s.flatMap(O=>O.reviews.filter(G=>G.due_date===f).map(G=>({...G,topic:O.topic,pillar:O.pillar,total:O.reviews.length}))):[];return t.jsxs("div",{style:Me.page,children:[t.jsxs("div",{style:Me.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:Me.eyebrow,children:"Anvil · Revision"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("h1",{style:Me.h1,children:"Spaced Repetition"}),t.jsx(Yt,{id:"revision"})]})]}),t.jsxs("button",{onClick:()=>z(!0),style:Me.addBtn,children:[t.jsx(mt,{size:15})," Add topic"]})]}),I&&t.jsxs("div",{style:Me.addBox,children:[t.jsx("input",{autoFocus:!0,placeholder:"What did you learn?",value:b.topic,onChange:O=>p(G=>({...G,topic:O.target.value})),onKeyDown:O=>O.key==="Enter"&&k(),style:Me.input}),t.jsxs("div",{style:Me.addRow,children:[t.jsx("select",{value:b.pillar,onChange:O=>p(G=>({...G,pillar:O.target.value})),style:Me.select,children:wp.map(O=>t.jsx("option",{children:O},O))}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[t.jsx("label",{style:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},children:"Learned on"}),t.jsx("input",{type:"date",value:b.learned_date,onChange:O=>p(G=>({...G,learned_date:O.target.value})),style:{...Me.select,fontSize:13}})]}),t.jsx("div",{style:{flex:1,minWidth:0},children:t.jsx("input",{value:b.intervals,onChange:O=>p(G=>({...G,intervals:O.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:Me.input})})]}),t.jsxs("div",{style:Me.addRow,children:[t.jsxs("button",{onClick:k,style:Me.saveBtn,children:[t.jsx(He,{size:14})," Save"]}),t.jsxs("button",{onClick:()=>z(!1),style:Me.cancelBtn,children:[t.jsx(De,{size:14})," Cancel"]})]})]}),l.length>0&&t.jsxs("div",{style:Me.section,children:[t.jsxs("div",{style:Me.sectionTitle,children:[t.jsx(Wg,{size:15,color:"#C2536B"}),"Due Today",t.jsx("span",{style:Me.badge,children:l.length})]}),l.map(O=>{var $,ae;const G=(($=vn[O.pillar])==null?void 0:$.dot)||"#9A968C";return t.jsxs("div",{style:{...Me.reviewCard,borderLeft:`3px solid ${G}`,...O.is_missed?{opacity:.85}:{}},children:[t.jsx("button",{onClick:()=>C(O.review_id),style:{...Me.checkbox,...O.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:O.done&&t.jsx(He,{size:12,color:"#fff",strokeWidth:3})}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:Me.reviewTopic,children:O.topic}),t.jsxs("div",{style:Me.reviewMeta,children:[t.jsxs("span",{style:{...Me.stageTag,background:((ae=vn[O.pillar])==null?void 0:ae.soft)||"rgba(0,0,0,0.05)",color:G},children:["Review ",O.stage,"/",O.total_stages]}),O.is_missed&&t.jsxs("span",{style:Me.missedTag,children:["missed · ",O.due_date]})]})]})]},O.review_id)})]}),t.jsxs("div",{style:Me.section,children:[t.jsxs("div",{style:Me.sectionTitle,children:["Active Topics ",t.jsx("span",{style:Me.badge,children:xe.length})]}),xe.length===0&&t.jsx("div",{style:Me.empty,children:"No active topics. Add something you learned today."}),xe.map(O=>{var me,Oe;const G=((me=vn[O.pillar])==null?void 0:me.dot)||"#9A968C",$=((Oe=vn[O.pillar])==null?void 0:Oe.soft)||"rgba(0,0,0,0.05)",ae=O.reviews.filter(Ce=>Ce.done).length;return(u==null?void 0:u.id)===O.id?t.jsxs("div",{style:Me.addBox,children:[t.jsx("input",{autoFocus:!0,value:u.topic,onChange:Ce=>y(U=>({...U,topic:Ce.target.value})),onKeyDown:Ce=>Ce.key==="Enter"&&A(),placeholder:"Topic",style:Me.input}),t.jsxs("div",{style:Me.addRow,children:[t.jsx("select",{value:u.pillar,onChange:Ce=>y(U=>({...U,pillar:Ce.target.value})),style:Me.select,children:wp.map(Ce=>t.jsx("option",{children:Ce},Ce))}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[t.jsx("label",{style:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},children:"Learned on"}),t.jsx("input",{type:"date",value:u.learned_date,onChange:Ce=>y(U=>({...U,learned_date:Ce.target.value})),style:{...Me.select,fontSize:13}})]}),t.jsx("div",{style:{flex:1,minWidth:0},children:t.jsx("input",{value:u.intervals,onChange:Ce=>y(U=>({...U,intervals:Ce.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:Me.input})})]}),t.jsx("div",{style:Me.editHint,children:"Changing the date or intervals reschedules the reviews (completed steps are kept where they still apply)."}),t.jsxs("div",{style:Me.addRow,children:[t.jsxs("button",{onClick:A,style:Me.saveBtn,children:[t.jsx(He,{size:14})," Save plan"]}),t.jsxs("button",{onClick:()=>y(null),style:Me.cancelBtn,children:[t.jsx(De,{size:14})," Cancel"]})]})]},O.id):t.jsxs("div",{style:Me.topicCard,children:[t.jsxs("div",{style:Me.topicHead,children:[t.jsx("span",{style:{...Me.dot,background:G}}),t.jsx("span",{style:Me.topicName,children:O.topic}),t.jsx("span",{style:Me.topicPillar,children:O.pillar}),t.jsxs("span",{style:Me.topicProgress,children:[ae,"/",O.reviews.length," done"]}),t.jsx("button",{onClick:()=>ge(O),style:Me.ghostBtn,title:"Edit plan",children:t.jsx(wt,{size:12})}),t.jsx("button",{onClick:()=>re(O.id,O.topic),style:Me.ghostBtn,title:"Delete",children:t.jsx(De,{size:13})})]}),t.jsxs("div",{style:Me.reviewDots,children:[O.reviews.map(Ce=>{Ce.due_date<e;const U=Ce.due_date===e;return t.jsx("button",{onClick:()=>C(Ce.id),title:`Review ${Ce.stage} · ${Ce.due_date}${Ce.done?" · Done":""}`,style:{...Me.reviewDot,background:Ce.done?G:U?$:"var(--hover)",border:`2px solid ${Ce.done||U?G:"var(--border)"}`,color:Ce.done?"#fff":G},children:Ce.stage},Ce.id)}),t.jsxs("span",{style:Me.learnedDate,children:["Learned ",O.learned_date]})]})]},O.id)})]}),q.length>0&&t.jsxs("div",{style:Me.section,children:[t.jsxs("button",{onClick:()=>D(O=>!O),style:Me.cementedToggle,children:[T?t.jsx(mo,{size:15}):t.jsx(bn,{size:15}),t.jsx(rn,{size:14,color:"#C9A227"}),"Cemented",t.jsx("span",{style:{...Me.badge,background:"rgba(201,162,39,0.12)",color:"#8A6E1A"},children:q.length})]}),T&&q.map(O=>{var $;const G=(($=vn[O.pillar])==null?void 0:$.dot)||"#9A968C";return t.jsx("div",{style:{...Me.topicCard,opacity:.75},children:t.jsxs("div",{style:Me.topicHead,children:[t.jsx("span",{style:{...Me.dot,background:G}}),t.jsx("span",{style:Me.topicName,children:O.topic}),t.jsx("span",{style:Me.topicPillar,children:O.pillar}),t.jsx(rn,{size:13,color:"#C9A227",style:{marginLeft:"auto"}})]})},O.id)})]}),t.jsxs("div",{style:Me.calCard,children:[t.jsxs("div",{style:Me.calHead,children:[t.jsx("button",{onClick:X,style:Me.calNav,children:"‹"}),t.jsxs("div",{style:Me.calTitle,children:[Jv(r,o)," · Review Calendar"]}),t.jsx("button",{onClick:ie,style:Me.calNav,children:"›"})]}),t.jsx("div",{style:Me.calDow,children:Xv.map(O=>t.jsx("div",{style:Me.calDowCell,children:O},O))}),t.jsxs("div",{style:Me.calGrid,children:[Array.from({length:de}).map((O,G)=>t.jsx("div",{},`p${G}`)),K.map((O,G)=>{const $=J[O]||[],ae=O===e,me=O===f,Oe=O<e,Ce=me?"#fff":ae?"var(--text)":Oe?"var(--text-2)":"var(--text-3)";return t.jsxs("button",{onClick:()=>h(me?null:O),style:{...Me.calDay,background:me?"var(--accent-strong)":ae?"var(--hover)":"var(--surface)",borderColor:ae||me?"var(--accent-strong)":"var(--border)"},children:[t.jsx("span",{style:{...Me.calDayNum,color:Ce,fontWeight:ae||me?700:600},children:G+1}),$.slice(0,2).map((U,P)=>{var ne;return t.jsxs("span",{title:U.topic,style:{...Me.calItem,color:me?"#fff":((ne=vn[U.pillar])==null?void 0:ne.dot)||"var(--text-2)"},children:[P+1,". ",U.topic]},P)}),$.length>2&&t.jsxs("span",{style:{...Me.calMore,color:me?"#fff":"var(--text-3)"},children:["+",$.length-2," more"]})]},O)})]}),f&&t.jsxs("div",{style:Me.dayDetail,children:[t.jsxs("div",{style:Me.dayDetailTitle,children:["Reviews for ",f]}),R.length===0?t.jsx("div",{style:Me.empty,children:"No reviews scheduled for this day."}):R.map((O,G)=>{var ae,me;const $=((ae=vn[O.pillar])==null?void 0:ae.dot)||"#9A968C";return t.jsxs("div",{style:{...Me.reviewCard,borderLeft:`3px solid ${$}`},children:[t.jsx("button",{onClick:()=>C(O.id),style:{...Me.checkbox,...O.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:O.done&&t.jsx(He,{size:12,color:"#fff",strokeWidth:3})}),t.jsxs("div",{children:[t.jsxs("div",{style:Me.reviewTopic,children:[G+1,". ",O.topic]}),t.jsxs("span",{style:{...Me.stageTag,background:((me=vn[O.pillar])==null?void 0:me.soft)||"rgba(0,0,0,0.05)",color:$},children:["Review ",O.stage,"/",O.total]})]})]},O.id)})]})]}),t.jsx(Tr,{toasts:B,onUndo:W,onDismiss:Q})]})}const Me={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},addBox:{background:"var(--surface)",borderRadius:12,padding:16,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column",gap:10},addRow:{display:"flex",gap:8,alignItems:"center"},editHint:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.4},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",minWidth:0},select:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 10px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},section:{marginBottom:20},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10},badge:{fontSize:11,fontWeight:700,background:"var(--hover)",color:"var(--text-2)",borderRadius:10,padding:"1px 7px"},reviewCard:{display:"flex",alignItems:"center",gap:12,background:"var(--surface)",borderRadius:10,padding:"12px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},checkbox:{width:22,height:22,borderRadius:6,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,padding:0},reviewTopic:{fontSize:13.5,fontWeight:600,marginBottom:4},reviewMeta:{display:"flex",alignItems:"center",gap:8},stageTag:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10},missedTag:{fontSize:11,color:"#C2536B",fontWeight:600},topicCard:{background:"var(--surface)",borderRadius:12,padding:"13px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},topicHead:{display:"flex",alignItems:"center",gap:8,marginBottom:10},dot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},topicName:{fontSize:14,fontWeight:600,flex:1},topicPillar:{fontSize:11,color:"var(--text-3)",fontWeight:500},topicProgress:{fontSize:11,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",padding:"2px 7px",borderRadius:10},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},reviewDots:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"},reviewDot:{width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",fontSize:11,fontWeight:700,padding:0},learnedDate:{fontSize:11,color:"var(--text-3)",marginLeft:"auto"},cementedToggle:{display:"flex",alignItems:"center",gap:8,border:"none",background:"none",cursor:"pointer",fontSize:13,fontWeight:700,color:"var(--text-2)",padding:"4px 0",fontFamily:"inherit",marginBottom:8},empty:{fontSize:13,color:"var(--text-3)",padding:"16px 0",textAlign:"center"},calCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calNav:{border:"none",background:"none",fontSize:20,cursor:"pointer",color:"var(--text-2)",padding:"0 6px",lineHeight:1},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4},calDay:{minHeight:62,border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,cursor:"pointer",fontFamily:"inherit",display:"flex",flexDirection:"column",alignItems:"stretch",justifyContent:"flex-start",gap:1,position:"relative",padding:"3px 4px",overflow:"hidden",textAlign:"left"},calDayNum:{fontSize:11,lineHeight:1.1,marginBottom:1},calItem:{fontSize:8.5,fontWeight:700,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",lineHeight:1.3,textAlign:"left"},calMore:{fontSize:8,fontWeight:700,opacity:.85,lineHeight:1.2},dayDetail:{marginTop:16,paddingTop:16,borderTop:"1px solid var(--border)"},dayDetailTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10}},Sp=[{id:1,title:"Regular Habits",cards:[{id:1,text:"1. I always do everything I need to do, when I need to do it. "},{id:2,text:"2. I never argue or let my emotions work against me. "},{id:3,text:"3. I have a good memory. I easily and automatically remember any name or anything that is important to me. "},{id:4,text:"4. I eat only what I should. "},{id:5,text:"5. I am a good listener. I hear everything that is said. I am attentive, interested, and aware of everything that is going on around me. "},{id:6,text:"6. I have the courage to state my opinions. I take responsibility for myself and everything I say and do."},{id:7,text:"7. I never spend more than I earn. I am financially responsible, both for my present and for my future."},{id:8,text:"8. I set goals and I follow them. I set my sights, take the appropriate action, and achieve my goals."},{id:9,text:"9. I spend time with my family and my loved ones. I enjoy sharing their lives with mine and my life with theirs."}]},{id:2,title:"Motivational",cards:[{id:1,text:"1. I can do anything I believe I can do. I’ve got it and every day I get more of it. I have talent, skills, and ability"},{id:2,text:"2. I set goals and I reach them. I know what I want out of life. I go after it and I get it. "},{id:3,text:"3. People like me, and I feel good about myself. I have a sense of pride in whoa am and I believe in myself. Nothing seems to stop me. I have a lot of determination. "},{id:4,text:"4. I turn problems into advantages. I find possibilities in things that other people never give a chance."},{id:5,text:"5. I have a lot of energy––I am very alive. I enjoy life and I can tell it and so can others"},{id:6,text:"6. I keep myself up, looking ahead, and liking it. I know that I can accomplish anything I choose, and I refuse to let anything negative hold me back or stand in my way. I am not afraid of anything or anyone. I have strength, power, conviction, and confidence. "},{id:7,text:"7. I like challenges and I meet them head on, face to face––today especially. I am on top of the world and I’m going for it. "},{id:8,text:"8. I have a clear picture in my mind of what I want. I can see it in front of me. "},{id:9,text:"9. I know what I want and I know how to get it. I know that it’s all up to me and I know I can do it. Roadblocks don’t bother me. They just mean that I am alive and running, and I’m not going to stand still for anything. "},{id:10,text:"10. I trust myself I’ve got what it takes––plenty of it––and I know how to use it. "},{id:11,text:"11. Today, more than ever. Today I am unstoppable. I’ve got myself together and I’m getting more together every day. And today––look out world, here I come. "},{id:12,text:"12. Limitations? I don’t even recognize them as limitations. There is no challenge I can’t conquer; there is no wall I can’t climb over. "},{id:13,text:"13. There is no problem I can’t defeat or turn around and make it work for me. I stand tall. I am honest and sincere. I like to deal with people and they like me. "},{id:14,text:"14. I think well; I think clearly. I am organized; I am in control of myself, and everything about me. I call my shots and no one has to call them for me. I never blame anyone else for the circumstances of my life. "},{id:15,text:"15. I accept my failings and move past them as easily as I accept the rewards for my victories. I never demand perfection of myself, but I expect the very best of what I have to give––and that’s what I get. I never give myself excuses. "},{id:16,text:"16. I get things done on time and in the right way. Today I have the inner strength to do more than ever. I am an exceptional human being. "},{id:17,text:"17. My goals and my incredible belief in myself turn my goals into reality. I have the power to live my dreams."},{id:18,text:"18.  I believe in them like I believe in myself. And that belief is so strong that there is nothing that diminishes my undefeatable spirit. "}]},{id:3,title:"Organized planning",cards:[{id:1,text:"1. I am organized and in control of my life. I am in control of myself, my thoughts, my time, my actions, and my future. "},{id:2,text:"2. I know what to do and when to do it, and I do everything I need to do, when I need to do it. "},{id:3,text:"3. I program my mind to make the maximum use of my time. I am in control of my time and how to use it. I like being organized, efficient, and on top of things."},{id:4,text:"4. Controlling my time keeps me that way. "},{id:5,text:"5. I never waste time––I always “plan” time. And because I plan my time, I always have time to do the things I choose to do. "},{id:6,text:"6. Each day I become more organized and in control of all areas of my life––at home, at work, in my mind and in my thoughts, in everything that I do. "},{id:7,text:"7. I am very well organized. Each night I make a list of things I need to do the next day. I set my priorities and I follow them. "},{id:8,text:"8. I am always on time. I am always right where I need to be, exactly when I need to be there. "},{id:9,text:"9. Being on time is easy for me and the more I control my time and the more organized I become, the easier it is. "},{id:10,text:"10. I am in control of my feelings, my emotions, my attitudes, and my needs. I control them; they do not control me. "},{id:11,text:"11. I have the winning vote in the outcome of my own actions. And I choose to live my life by choice, not chance. Therefore, I take the time to take control."},{id:12,text:"12. I have an organized and orderly mind. Because I think in an organized way, I conduct my life in an organized manner. "},{id:13,text:"13. I think in the most positive and productive way at all times and in all things. The way I think is the way I live––and I think “right.” "},{id:14,text:"14. I am the director of my destiny. I know where I am going and I know why I am going there. My earthly life is in my hands and in my control. "},{id:15,text:"15. I control my goals and the achievement of my goals. I organize my goals by writing each of them down, along with the steps I need to reach them. One of the reasons for my success is that my goals are clearly defined and organized."},{id:16,text:"16. I am in complete control of what I think and how I think. Therefore, I choose to think only those thoughts which help me and which are of genuine benefit to me."}]},{id:4,title:"Solving Problems",cards:[{id:1,text:"1. I’m good at solving problems. I like challenges and I meet them head on. "},{id:2,text:"2. Problems are my teachers. They help me to learn and grow. Without them, I would be going nowhere. With them, I am moving forward in the direction of my own goals. "},{id:3,text:"3. There is no problem which I cannot conquer. I am strong in mind, body, and spirit. My will, my strength, and my determination are always greater than any problem I face."},{id:4,text:"4. When I meet a new problem, I do not see the problem as my enemy. I know that finding the solution to the problem will move me forward in my own personal growth."},{id:5,text:"5. Because I know that problems are a key ingredient in my spiritual and mental education and preparation, I recognize that all problems are important to me. "},{id:6,text:"6. I do not fear problems, I solve them. I do not ignore problems, I confront them. I do not avoid problems, I conquer them. "},{id:7,text:"7. I know that every problem holds within itself the keys to its own solution. Therefore, the better I understand the problem, the clearer I am able to see its solution. "},{id:8,text:"8. Having problems is not a problem for me. I am confident, self-assured, positive, and determined. I always know that I am going to overcome any problem I encounter––and I always do. "},{id:9,text:"9. I am good at breaking large obstacles down into smaller pieces that are easier to handle. And I never make any problem appear to be larger than it actually is. "},{id:10,text:"10. I never worry. I turn “worry time” into positive, constructive, “solution time.” I keep my mind alert and open to all solutions—and solutions come quickly and easily to me. "},{id:11,text:"11. I have learned to recognize that many problems carry with them benefits and potential opportunities which would not have presented themselves had the problem not occurred in the first place. "},{id:12,text:"12. I do not seek to live a life which is free from all problems. Instead, I choose to live a life of finding solutions and enjoying the benefits which those solutions create."},{id:13,text:"13. Challenge, conquer, solution, and win are words which I live by daily. Challenges are opportunities. Conquering them is the inevitable outcome. "},{id:14,text:"14. “Solutions” are the stepping stones to my success, and “Winning” is my way of life."}]},{id:5,title:"Self Esteem",cards:[{id:1,text:"1. I really am very special. I like who I am and I feel good about myself. "},{id:2,text:"2. Although I always work to improve myself and I get better every day, I like who I am today. And tomorrow, when I’m even better, I’ll like myself then, too. "},{id:3,text:"3. It’s true that there really is no one else like me in the entire world. There never was another me before, and there will never be another me again. "},{id:4,text:"4. I am unique––from the top of my head to the bottom of my feet. In some ways I may look and act and sound like some others––but I am not them. I am me."},{id:5,text:"5. I wanted to be somebody––and now I know I am I would rather be me than anyone else in the world. "},{id:6,text:"6. I like how I feel and I like how I think and I like how I do things. I approve of me and I approve of who I am."},{id:7,text:"7. I have many beautiful qualities about me. I have talents and skills and abilities. I even have talents that I don’t even know about yet. And I am discovering new talents inside myself all the time. "},{id:8,text:"8. I am positive. I am confident. I radiate good things. If you look closely, you can even see a glow around me."},{id:9,text:"9. I am full of life. I like life and I’m glad to be alive. I am a very special person, living at a very special time. "},{id:10,text:"10. I am intelligent. My mind is quick and alert and clever and fun. I think good thoughts, and my mind makes things work right for me. "},{id:11,text:"11. I have a lot of energy and enthusiasm and vitality. I am exciting and I really enjoy being me. "},{id:12,text:"12. I like to be around other people and other people like to be around me. People like to hear what I have to say and know what I have to think. "},{id:13,text:"13. I smile a lot. I am happy on the inside and I am happy on the outside. "},{id:14,text:"14. I am interested in many things. I appreciate all the blessings I have, and the things that I learn, and all the things I will learn today and tomorrow and forever––just as long as I am. "},{id:15,text:"15. I am warm, sincere, honest, and genuine. I am all of these things and more. And all of these things are me. I like who I am, and I’m glad to be me."}]},{id:6,title:"Self-Responsibility",cards:[{id:1,text:"1. I take full responsibility for everything about me––even the thoughts that I think. I am in control of the vast resources of my own mind."},{id:2,text:"2. I alone am responsible for what I do and what I tell myself about me. No one can share this responsibility with me. "},{id:3,text:"3. I also allow others to accept their responsibilities far themselves and I do not try to accept their responsibilities for them. "},{id:4,text:"4. I enjoy being responsible. It puts me in charge of being me––and that’s a challenge I enjoy. "},{id:5,text:"5. I allow no one else, at any time, to assume control or responsibility over my life or over anything that I do. My responsibility to others is an extension of my own responsibility to myself. "},{id:6,text:"6. I choose to leave nothing about me up to chance. When it comes to me––and anything in my life––I choose to CHOOSE. "},{id:7,text:"7. My choices are mine alone to make for myself. I do not, at any time, allow anyone else to make my choices for me. And I accept full responsibility for every choice and decision I make. "},{id:8,text:"8. I always meet all of the obligations which I accept. And I accept no obligations which I will not meet. "},{id:9,text:"9. I am trustworthy. I can be counted on. I have accepted winning responsibility for myself––and I always live up to the responsibilities I accept. "},{id:10,text:"10. There is no they on whom I lay the blame, or with whom I share my own personal responsibilities. I have learned the great secret of mastering my own destiny. I have learned that “they” is “me.” "},{id:11,text:"11. I have no need to make excuses and no one needs to carry my responsibility for me. I gladly carry my own weight––and I carry it well. "},{id:12,text:"12. Each day I acknowledge and accept the responsibility––not only for my own actions––but also for my emotions, my thoughts, and my attitude. "},{id:13,text:"13. I accept the responsibility for living my life in a way which creates my strengths, my happiness, my positive, healthy beliefs, and for my past, my present, and my future."}]},{id:7,title:"Freedom from worry",cards:[{id:1,text:"1. I never worry. Instead of worrying, I find solutions and I act on them. "},{id:2,text:"2. My mind is constantly in tune with the positive. It is bright, cheerful, enthusiastic, and full of good, positive thoughts and ideas. "},{id:3,text:"3. I am able to relax easily and comfortably in my body and in my mind. I am calm, confident, and self-assured. "},{id:4,text:"4. My mind is orderly and well-organized. I consciously choose what I think and I always choose those thoughts which are the most positive and beneficial for me. "},{id:5,text:"5. All of my thoughts create healthiness within me. My mind dwells only on those thoughts which create more harmony, balance, and well-being within me and in the world around me. "},{id:6,text:"6. I automatically, and always, think in a decisive and determined way. "},{id:7,text:"7. I am full of resolution and the absolute assurance of the best possible outcome in everything that I do. "},{id:8,text:"8. I choose to look at the world around me in the bright, healthy light of optimism and self-assurance. "},{id:9,text:"9. I do only those things which are best for me. I create the best within myself, I attract the best in others, and I find the best in the world around me. "},{id:10,text:"10. I willingly, and without fail, take care of the duties and obligations which I have accepted for myself."},{id:11,text:"11. I commit only to those responsibilities which I know I can fulfill. "},{id:12,text:"12. I focus the attention of my mind only on those things that I can do something about. If I cannot affect it or direct it––I accept it. "},{id:13,text:"13. I keep my mind too busy thinking good, healthy, positive, constructive, and productive thoughts to ever have any time for worry. "},{id:14,text:"14. I control the thoughts I choose. No thought, at any time, can dwell in my mind without my approval or permission. I never worry."}]},{id:8,title:"Eating Habits",cards:[{id:1,text:"1. I am in control of myself in every way––at all times and in all situations. "},{id:2,text:"2. Each time I sit down to eat I reaffirm my determination to achieve my goal. By eating right, and never giving in, I am reaching the weight I want. "},{id:3,text:"3. Whether eating in or eating out, I really enjoy eating less. "},{id:4,text:"4. I never feel the need to finish the food in front of me. I eat only what I should––and never one bite more. "},{id:5,text:"5. One way to weight-loss that’s easy and works, is less food on my plate, and less on my fork. "},{id:6,text:'6. By ordering less when I eat out, and by serving myself smaller portions at home, I keep myself aware of the importance of staying with my goal––each and every day. “Less on my plate means less on my waist."'},{id:7,text:"7. When I sit down to eat, at no time do I allow anyone else to influence, tempt, or discourage me in any negative way."},{id:8,text:"8. What I eat, and the goals I reach, are up to me. And I give no one the right to hinder or control my success."},{id:9,text:"9. Although others may benefit from my success, I. am achieving my weight-loss goals for my own personal reasons––for myself, my life, my future, and my own personal well-being."},{id:10,text:"10. I am never, at any time, tempted to take one bite more than I should. I am strong, I am capable of reaching my goal, and I am doing it."},{id:11,text:"11. Being in situations which put a lot of food in front of me is not a problem to me now. I simply say “No” to the food and “Yes” to my success."},{id:12,text:"12. I enjoy sitting down to eat. Each time I do I conquer my past, and I create a trimmer, happier, more self-confident future in front of me. "},{id:13,text:"13. When I sit down to eat, I do not need someone else to remind me of my goal, or to keep me from eating something I should not. I take full responsibility for myself, and no one else has to do it for me. "},{id:14,text:"14. Controlling my weight, and my appetite, is easy for me now. I enjoy smaller portions, smaller bites, and a slower, healthier, more relaxed way of eating. "},{id:15,text:"15. I have set my goal and I am staying with it. I have turned mealtime into “achievement time.”"}]}],Cp=["#3A7CA5","#4C9A6B","#C2773B","#8268B0","#C2536B","#C9A227","#3A7CA5","#4C9A6B"],bd=e=>Cp[e%Cp.length],n1=e=>e+"1A",Hi="affirmation_favs",o1="anvil_affirmation_favs",Tp=()=>{try{return JSON.parse(localStorage.getItem(Hi)||localStorage.getItem(o1)||"[]")}catch{return[]}},da="__new__";function i1(){var ge;const[e,r]=c.useState(0),[n,o]=c.useState(0),[i,s]=c.useState(()=>new Set(Tp())),[a,l]=c.useState([]),[d,g]=c.useState(!1),[m,f]=c.useState({text:"",category:((ge=Sp[0])==null?void 0:ge.title)||"",newCat:""}),h=c.useRef(!1),T=c.useCallback(()=>{_.getAffirmations().then(A=>l(Array.isArray(A)?A:[])).catch(()=>{})},[]);c.useEffect(()=>{T()},[T]);const D=c.useMemo(()=>{const A=Sp.map(X=>({title:X.title,cards:[...X.cards]}));return a.forEach(X=>{const ie={id:`u${X.id}`,text:X.text,user:!0,dbId:X.id},xe=A.find(q=>q.title.toLowerCase()===(X.category||"").toLowerCase());xe?xe.cards.push(ie):A.push({title:X.category||"My affirmations",cards:[ie]})}),A},[a]);c.useEffect(()=>{let A=!1;return _.getSetting(Hi).then(X=>{if(!A){if(Array.isArray(X==null?void 0:X.value))s(new Set(X.value));else{const ie=Tp();ie.length&&_.setSetting(Hi,ie).catch(()=>{}),s(new Set(ie))}h.current=!0}}).catch(()=>{h.current=!0}),()=>{A=!0}},[]),c.useEffect(()=>{localStorage.setItem(Hi,JSON.stringify([...i])),h.current&&_.setSetting(Hi,[...i]).catch(()=>{})},[i]);const I=(A,X)=>`${A}#${X.id}`,z=e==="FAV"?"FAV":Math.min(e,D.length-1),b=z==="FAV"?D.flatMap((A,X)=>A.cards.filter(ie=>i.has(I(A.title,ie))).map(ie=>({...ie,color:bd(X),title:A.title}))):D[z].cards.map(A=>({...A,color:bd(z),title:D[z].title})),p=b.length,u=Math.min(n,Math.max(0,p-1)),y=b[u],j=A=>{r(A),o(0)},C=c.useCallback(()=>o(A=>Math.max(0,A-1)),[]),k=c.useCallback(()=>o(A=>Math.min(p-1,A+1)),[p]);c.useEffect(()=>{const A=X=>{X.key==="ArrowLeft"&&C(),X.key==="ArrowRight"&&k()};return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)},[C,k]);const x=A=>s(X=>{const ie=new Set(X);return ie.has(A)?ie.delete(A):ie.add(A),ie}),B=async()=>{const A=m.text.trim(),X=(m.category===da?m.newCat:m.category).trim();if(!A||!X)return;await _.createAffirmation({text:A,category:X}),g(!1),f({text:"",category:X,newCat:""}),T();const ie=D.findIndex(xe=>xe.title.toLowerCase()===X.toLowerCase());j(ie>=0?ie:D.length)},W=async A=>{window.confirm("Delete this affirmation?")&&(await _.deleteAffirmation(A.dbId),s(X=>{const ie=new Set(X);return ie.delete(I(A.title,A)),ie}),T())},Q=m.text.trim()&&(m.category===da?m.newCat.trim():m.category),re=y?y.color:"#8268B0";return t.jsxs("div",{style:gt.page,children:[t.jsxs("div",{style:{...gt.head,display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:12,flexWrap:"wrap"},children:[t.jsxs("div",{children:[t.jsx("div",{style:gt.eyebrow,children:"Anvil · Affirmations"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("h1",{style:gt.h1,children:"Affirmations"}),t.jsx(Yt,{id:"affirmations"})]}),t.jsx("div",{style:gt.subhead,children:"One at a time — read it, mean it."})]}),!d&&t.jsxs("button",{onClick:()=>g(!0),style:gt.addBtn,children:[t.jsx(mt,{size:15})," Add affirmation"]})]}),d&&t.jsxs("div",{style:gt.addCard,children:[t.jsx("div",{style:gt.addTitle,children:"New affirmation"}),t.jsx("textarea",{autoFocus:!0,value:m.text,onChange:A=>f(X=>({...X,text:A.target.value})),placeholder:"Write it in the present tense — e.g. 'I attract abundance effortlessly.'",style:gt.addArea}),t.jsxs("div",{style:gt.addRow,children:[t.jsx(cr,{value:m.category,options:[...D.map(A=>A.title),{value:da,label:"+ New category…"}],onChange:A=>f(X=>({...X,category:A})),style:{minWidth:180}}),m.category===da&&t.jsx("input",{value:m.newCat,onChange:A=>f(X=>({...X,newCat:A.target.value})),placeholder:"Category name",style:gt.addInput})]}),t.jsxs("div",{style:gt.addActions,children:[t.jsxs("button",{onClick:()=>g(!1),style:gt.cancelBtn,children:[t.jsx(De,{size:14})," Cancel"]}),t.jsxs("button",{onClick:B,disabled:!Q,style:{...gt.saveBtn,...Q?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," Save"]})]})]}),t.jsxs("div",{style:gt.filterBar,children:[D.map((A,X)=>{const ie=z===X,xe=bd(X);return t.jsxs("button",{onClick:()=>j(X),style:{...gt.chip,...ie?{background:xe,color:"#fff",borderColor:xe}:{}},children:[t.jsx("span",{style:{...gt.catDot,background:ie?"#fff":xe}})," ",A.title," ",t.jsx("span",{style:gt.chipCount,children:A.cards.length})]},A.title)}),t.jsxs("button",{onClick:()=>j("FAV"),style:{...gt.chip,...e==="FAV"?{background:"#C9A227",color:"#fff",borderColor:"#C9A227"}:{}},children:[t.jsx(Aa,{size:12,fill:e==="FAV"?"#fff":"none"})," Favorites ",t.jsx("span",{style:gt.chipCount,children:i.size})]})]}),p===0?t.jsxs("div",{style:gt.empty,children:[t.jsx(Aa,{size:22,color:"#C3BFB5"}),t.jsx("div",{children:"No favorites yet — tap the star on a card to save it here."})]}):t.jsxs("div",{style:gt.viewer,children:[t.jsxs("div",{style:{...gt.card,borderTop:`4px solid ${re}`},children:[t.jsx("div",{style:{...gt.cardCat,color:re,background:n1(re)},children:y.title}),t.jsx("button",{onClick:()=>x(I(y.title,y)),style:{...gt.favBtn,color:i.has(I(y.title,y))?"#C9A227":"#C3BFB5"},title:"Favorite",children:t.jsx(Aa,{size:20,fill:i.has(I(y.title,y))?"#C9A227":"none"})}),y.user&&t.jsx("button",{onClick:()=>W(y),style:gt.trashBtn,title:"Delete your affirmation",children:t.jsx(ji,{size:16})}),t.jsx(jc,{size:30,color:re,style:{opacity:.25}}),t.jsx("p",{style:gt.cardText,children:y.text.trim()})]}),t.jsxs("div",{style:gt.navRow,children:[t.jsxs("button",{onClick:C,disabled:u===0,style:{...gt.navBtn,...u===0?gt.navBtnDisabled:{}},children:[t.jsx(Mn,{size:18})," Back"]}),t.jsxs("span",{style:{...gt.counter,color:re},children:[u+1," ",t.jsxs("span",{style:gt.counterTotal,children:["/ ",p]})]}),t.jsxs("button",{onClick:k,disabled:u===p-1,style:{...gt.navBtn,...u===p-1?gt.navBtnDisabled:{}},children:["Next ",t.jsx(bn,{size:18})]})]}),t.jsx("div",{style:gt.dots,children:b.map((A,X)=>t.jsx("button",{onClick:()=>o(X),style:{...gt.dot,...X===u?{background:re,transform:"scale(1.5)"}:{}},title:`${X+1}`},X))})]})]})}const gt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},addCard:{background:"var(--surface)",borderRadius:14,padding:16,marginBottom:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},addTitle:{fontSize:15,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:10},addArea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--bg)",outline:"none",minHeight:64,resize:"vertical",lineHeight:1.5},addRow:{display:"flex",gap:8,marginTop:10,flexWrap:"wrap"},addInput:{flex:1,minWidth:140,border:"1px solid var(--border)",borderRadius:9,padding:"8px 10px",fontSize:13,fontFamily:"inherit",color:"var(--text)",background:"var(--bg)",outline:"none"},addActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:12},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},trashBtn:{position:"absolute",top:14,right:46,border:"none",background:"none",cursor:"pointer",padding:4,display:"grid",placeItems:"center",color:"#C3BFB5"},filterBar:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:22},chip:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipCount:{fontSize:11,fontWeight:700,opacity:.7},catDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},empty:{display:"flex",flexDirection:"column",alignItems:"center",gap:10,fontSize:13.5,color:"var(--text-3)",padding:"56px 12px",textAlign:"center",background:"var(--surface)",borderRadius:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},viewer:{display:"flex",flexDirection:"column",alignItems:"center"},card:{position:"relative",background:"var(--surface)",borderRadius:16,padding:"40px 32px 44px",boxShadow:"0 4px 20px rgba(0,0,0,0.07)",width:"100%",minHeight:240,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",boxSizing:"border-box"},cardCat:{position:"absolute",top:16,left:16,fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:12,textTransform:"uppercase",letterSpacing:"0.04em"},favBtn:{position:"absolute",top:14,right:14,border:"none",background:"none",cursor:"pointer",padding:4,display:"grid",placeItems:"center"},cardText:{fontSize:21,lineHeight:1.55,margin:"14px 0 0",fontWeight:500,color:"var(--text)",fontFamily:"'Fraunces',Georgia,serif",maxWidth:560},navRow:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",maxWidth:420,marginTop:22},navBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},counter:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},counterTotal:{fontSize:13,fontWeight:600,color:"var(--text-3)"},dots:{display:"flex",gap:6,flexWrap:"wrap",justifyContent:"center",marginTop:20,maxWidth:480},dot:{width:7,height:7,borderRadius:"50%",border:"none",background:"var(--border)",cursor:"pointer",padding:0,transition:"transform 0.12s"}},s1=[{id:"day",label:"Day"},{id:"week",label:"Week"},{id:"month",label:"Month"},{id:"year",label:"Year"}],wn=e=>e>=60?`${Math.floor(e/60)}h ${e%60}m`:`${e}m`,a1=e=>{const r=e<12?"am":"pm",n=e%12===0?12:e%12;return`${String(n).padStart(2,"0")} ${r}`};function l1(e){const r=e<=60?10:e<=120?20:e<=300?60:120,n=Math.max(60,Math.ceil((e||1)/r)*r),o=[];for(let i=0;i<=n;i+=r)o.push(i);return{max:n,ticks:o}}const sf=e=>{const r=new Date(e);return r.setHours(0,0,0,0),r},d1=e=>{const r=sf(e),n=(r.getDay()+6)%7;return r.setDate(r.getDate()-n),r},c1=e=>new Date(e.getFullYear(),e.getMonth(),1),g1=e=>new Date(e.getFullYear(),0,1);function u1(e,r){if(e==="day"){const i=sf(r);return{start:i,end:new Date(+i+864e5),prev:new Date(+i-864e5),prev2:new Date(+i-2*864e5)}}if(e==="week"){const i=d1(r);return{start:i,end:new Date(+i+7*864e5),prev:new Date(+i-7*864e5),prev2:new Date(+i-14*864e5)}}if(e==="month"){const i=c1(r),s=r.getFullYear(),a=r.getMonth();return{start:i,end:new Date(s,a+1,1),prev:new Date(s,a-1,1),prev2:new Date(s,a-2,1)}}const n=r.getFullYear();return{start:g1(r),end:new Date(n+1,0,1),prev:new Date(n-1,0,1),prev2:new Date(n-2,0,1)}}function p1({sessions:e=[],onBack:r}){const[n,o]=c.useState("day"),i=new Date,{start:s,end:a,prev:l,prev2:d}=u1(n,i),g=ie=>new Date(ie.started_at||ie.created_at),m=e.filter(ie=>ie.completed),f=(ie,xe,q)=>{const K=g(ie);return K>=xe&&K<q},h=(ie,xe)=>m.filter(q=>f(q,ie,xe)).reduce((q,K)=>q+(K.actual_min||0),0),T=m.filter(ie=>f(ie,s,a)),D=T.reduce((ie,xe)=>ie+(xe.actual_min||0),0),I=h(l,s),z=h(d,l),b=T.length,p=Array(24).fill(0);T.forEach(ie=>{p[g(ie).getHours()]+=ie.actual_min||0});const u=Math.max(...p,0),y=l1(u),j={};T.forEach(ie=>{const xe=pr[ie.tree]?ie.tree:ao;j[xe]=(j[xe]||0)+(ie.actual_min||0)});const C=Object.entries(j).map(([ie,xe])=>({name:pr[ie].label,min:xe,color:pr[ie].leaf})).sort((ie,xe)=>xe.min-ie.min),k=I>0?Math.round((D-I)/I*100):D>0?100:0,x=k>0?ns:k<0?so:Eh,B=k>0?"#4C9A6B":k<0?"#C2536B":"#9A968C",W={day:"yesterday",week:"last week",month:"last month",year:"last year"}[n],Q={day:"2 days ago",week:"2 weeks ago",month:"2 months ago",year:"2 years ago"}[n],re=54,ge=22,A=2*Math.PI*re;let X=0;return t.jsxs("div",{style:Ne.page,children:[t.jsxs("div",{style:Ne.topbar,children:[t.jsxs("button",{onClick:r,style:Ne.back,children:[t.jsx(vh,{size:18})," Grove"]}),t.jsx("h1",{style:Ne.h1,children:"Insights"}),t.jsx("div",{style:{width:76}})]}),t.jsx("div",{style:Ne.rangeBar,children:s1.map(ie=>t.jsx("button",{onClick:()=>o(ie.id),style:{...Ne.rangeBtn,...n===ie.id?Ne.rangeOn:{}},children:ie.label},ie.id))}),t.jsxs("div",{style:Ne.headline,children:[t.jsxs("div",{style:Ne.bigStat,children:[t.jsx("div",{style:Ne.bigVal,children:wn(D)}),t.jsxs("div",{style:Ne.bigLbl,children:["Focused this ",n]})]}),t.jsxs("div",{style:Ne.bigStat,children:[t.jsx("div",{style:Ne.bigVal,children:b}),t.jsx("div",{style:Ne.bigLbl,children:"Trees"})]})]}),t.jsxs("div",{style:Ne.card,children:[t.jsxs("div",{style:Ne.cardHead,children:[t.jsxs("div",{style:Ne.cardTitle,children:["Your forest this ",n]}),t.jsx("div",{style:Ne.cardHint,children:"Each tree is a completed session — bigger means longer focus"})]}),t.jsx(h1,{sessions:T}),t.jsxs("div",{style:Ne.forestNumber,children:[b," ",b===1?"tree":"trees"," · ",wn(D)," focused"]})]}),t.jsx(md,{title:"Focus distribution",hint:"Minutes focused at each time of day",children:u===0?t.jsx(zp,{}):t.jsx(m1,{hours:p,axis:y})}),t.jsx(md,{title:"Pillar distribution",hint:"How your focus splits across the five trees",children:C.length===0?t.jsx(zp,{}):t.jsxs("div",{style:Ne.donutWrap,children:[t.jsxs("svg",{viewBox:"0 0 140 140",width:"150",height:"150",style:{flexShrink:0},children:[C.map(ie=>{const xe=ie.min/(D||1)*A,q=t.jsx("circle",{cx:"70",cy:"70",r:re,fill:"none",stroke:ie.color,strokeWidth:ge,strokeDasharray:`${xe} ${A-xe}`,strokeDashoffset:-X,transform:"rotate(-90 70 70)"},ie.name);return X+=xe,q}),t.jsx("text",{x:"70",y:"66",textAnchor:"middle",style:Ne.donutCenterTop,children:wn(D)}),t.jsx("text",{x:"70",y:"82",textAnchor:"middle",style:Ne.donutCenterSub,children:"total"})]}),t.jsx("div",{style:Ne.legend,children:C.map(ie=>t.jsxs("div",{style:Ne.legendRow,children:[t.jsx("span",{style:{...Ne.legendDot,background:ie.color}}),t.jsx("span",{style:Ne.legendName,children:ie.name}),t.jsxs("span",{style:Ne.legendVal,children:[wn(ie.min)," · ",Math.round(ie.min/(D||1)*100),"%"]})]},ie.name))})]})}),t.jsxs(md,{title:"Focus trend",hint:`This ${n} vs the previous two`,children:[t.jsxs("div",{style:Ne.trend3,children:[t.jsxs("div",{style:Ne.trendCol,children:[t.jsx("div",{style:Ne.trendVal,children:wn(D)}),t.jsxs("div",{style:Ne.trendLbl,children:["This ",n]})]}),t.jsxs("div",{style:Ne.trendCol,children:[t.jsx("div",{style:{...Ne.trendVal,color:"var(--text-2)"},children:wn(I)}),t.jsx("div",{style:Ne.trendLbl,children:W})]}),t.jsxs("div",{style:Ne.trendCol,children:[t.jsx("div",{style:{...Ne.trendVal,color:"var(--text-3)"},children:wn(z)}),t.jsx("div",{style:Ne.trendLbl,children:Q})]})]}),t.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:14},children:t.jsxs("div",{style:{...Ne.trendBadge,color:B,background:B+"1A"},children:[t.jsx(x,{size:15})," ",k>0?"+":"",k,"% vs ",W]})}),t.jsx(f1,{items:[{label:`This ${n}`,value:D,color:"#4C9A6B"},{label:W,value:I,color:"var(--text-3)"},{label:Q,value:z,color:"var(--text-3)"}]})]})]})}const b1=e=>e===0?"12a":e<12?`${e}a`:e===12?"12p":`${e-12}p`;function m1({hours:e,axis:r}){return t.jsxs("div",{children:[t.jsxs("div",{style:Ne.vcPlot,children:[r.ticks.map(n=>t.jsxs("div",{style:{...Ne.vcGridRow,bottom:`${n/r.max*100}%`},children:[t.jsx("span",{style:Ne.vcYLabel,children:n}),t.jsx("div",{style:Ne.vcGridLine})]},n)),t.jsx("div",{style:Ne.vcBars,children:e.map((n,o)=>t.jsx("div",{style:Ne.vcCell,title:`${a1(o)} · ${n} min`,children:t.jsx("div",{style:{...Ne.vcBar,height:n>0?`max(3px, ${n/r.max*100}%)`:0}})},o))})]}),t.jsx("div",{style:Ne.vcXAxis,children:e.map((n,o)=>t.jsx("div",{style:Ne.vcXCell,children:o%3===0?b1(o):""},o))}),t.jsx("div",{style:Ne.vcYTitle,children:"minutes focused, by hour of day"})]})}function h1({sessions:e}){if(!e.length)return t.jsx("div",{style:Ne.sceneEmpty,children:"No trees yet this period. 🌱"});const n=e.slice(0,80),o=e.length-n.length,i=s=>Math.round(Math.max(40,Math.min(88,40+(s||0)*.6)));return t.jsxs("div",{children:[t.jsx("div",{style:Ne.scene,children:n.map(s=>t.jsx("div",{style:Ne.sceneTree,title:`${s.label||"Focus"} · ${wn(s.actual_min||s.duration_min)}`,children:t.jsx(Pg,{species:s.tree,progress:1,size:i(s.actual_min||s.duration_min)})},s.id))}),o>0&&t.jsxs("div",{style:Ne.overflow,children:["+",o," more trees"]})]})}function md({title:e,hint:r,children:n}){return t.jsxs("div",{style:Ne.card,children:[t.jsxs("div",{style:Ne.cardHead,children:[t.jsx("div",{style:Ne.cardTitle,children:e}),r&&t.jsx("div",{style:Ne.cardHint,children:r})]}),n]})}function zp(){return t.jsx("div",{style:Ne.empty,children:"No focus sessions in this period yet. 🌱"})}function f1({items:e}){const r=Math.max(1,...e.map(n=>n.value));return t.jsx("div",{style:Ne.tbWrap,children:e.map(n=>t.jsxs("div",{style:Ne.tbRow,children:[t.jsx("div",{style:Ne.tbLbl,children:n.label}),t.jsx("div",{style:Ne.tbTrack,children:t.jsx("div",{style:{...Ne.tbBar,width:`${n.value/r*100}%`,background:n.color}})}),t.jsx("div",{style:Ne.tbVal,children:wn(n.value)})]},n.label))})}const Ne={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"20px 16px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:720,margin:"0 auto"},topbar:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16},back:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},h1:{fontSize:20,fontWeight:700,margin:0,fontFamily:"'Fraunces',Georgia,serif"},rangeBar:{display:"flex",gap:6,background:"var(--surface)",padding:5,borderRadius:12,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},rangeBtn:{flex:1,border:"none",background:"none",padding:"9px 0",borderRadius:8,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},rangeOn:{background:"var(--accent-strong)",color:"#fff"},headline:{display:"flex",gap:12,marginBottom:16},bigStat:{flex:1,background:"var(--surface)",borderRadius:14,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},bigVal:{fontSize:26,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em"},bigLbl:{fontSize:12,color:"var(--text-3)",marginTop:3,fontWeight:500},card:{background:"var(--surface)",borderRadius:16,padding:"18px 18px 20px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:16},cardHead:{marginBottom:14},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardHint:{fontSize:12,color:"var(--text-3)",marginTop:2},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"24px 0"},scene:{display:"flex",flexWrap:"wrap",alignItems:"flex-end",justifyContent:"center",gap:"0 2px",padding:"14px 8px 6px",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,minHeight:110,border:"1px solid var(--border)"},sceneTree:{lineHeight:0},sceneEmpty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"34px 0",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,border:"1px solid var(--border)"},overflow:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",marginTop:6,fontWeight:600},forestNumber:{textAlign:"center",marginTop:12,fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},vcPlot:{position:"relative",height:180,paddingLeft:30},vcGridRow:{position:"absolute",left:0,right:0,display:"flex",alignItems:"center",height:0},vcYLabel:{width:26,marginRight:4,textAlign:"right",fontSize:9,color:"var(--text-3)",fontWeight:600,flexShrink:0},vcGridLine:{flex:1,height:1,background:"#EEEBE4"},vcBars:{position:"absolute",left:30,right:0,top:0,bottom:0,display:"flex",alignItems:"flex-end",gap:1},vcCell:{flex:1,height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"center"},vcBar:{width:"72%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",transition:"height 0.3s"},vcXAxis:{display:"flex",marginLeft:30,marginTop:4},vcXCell:{flex:1,textAlign:"center",fontSize:8.5,color:"var(--text-3)",fontWeight:600,overflow:"hidden"},vcYTitle:{textAlign:"center",fontSize:9.5,color:"var(--text-3)",marginTop:6,letterSpacing:"0.06em",textTransform:"uppercase",fontWeight:600},donutWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap",justifyContent:"center"},donutCenterTop:{fontSize:16,fontWeight:800,fill:"var(--text)",fontFamily:"'Fraunces',Georgia,serif"},donutCenterSub:{fontSize:9,fill:"#9A968C",textTransform:"uppercase",letterSpacing:"0.08em"},legend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8},legendDot:{width:11,height:11,borderRadius:3,flexShrink:0},legendName:{flex:1,fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},legendVal:{fontSize:12,color:"var(--text-3)",fontWeight:600,flexShrink:0},trend3:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12,gap:8},trendCol:{textAlign:"center",flex:1},trendVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},trendLbl:{fontSize:11,color:"var(--text-3)",marginTop:2},trendBadge:{display:"inline-flex",alignItems:"center",gap:4,fontSize:13,fontWeight:800,padding:"6px 12px",borderRadius:20,width:"fit-content"},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:78,fontSize:11,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},tbTrack:{flex:1,height:14,background:"#F2F0EA",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:56,fontSize:11,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"}},x1=[15,30,45,60,90],hd="anvil_grove_active",Ip=e=>`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`,cl=e=>e>=60?`${Math.floor(e/60)}h ${e%60}m`:`${e}m`;function y1(){const[e,r]=c.useState("timer"),[n,o]=c.useState("idle"),[i,s]=c.useState(15),[a,l]=c.useState(!1),[d,g]=c.useState(""),[m,f]=c.useState(ao),[h,T]=c.useState(()=>localStorage.getItem("anvil_grove_deepfocus")!=="0"),[D,I]=c.useState(15*60),[z,b]=c.useState({sessions:[],stats:null}),p=c.useRef(null),u=c.useRef(null),y=c.useRef(!1),j=c.useCallback(async()=>{try{b(await _.getFocus())}catch{}},[]),C=c.useCallback(async(J,R)=>{if(!y.current){y.current=!0,localStorage.removeItem(hd);try{await _.createFocus({label:d.trim()||null,tree:m,duration_min:i,actual_min:R,completed:J,started_at:u.current,ended_at:new Date().toISOString()})}catch{}j()}},[d,m,i,j]),k=c.useCallback(()=>{if(n!=="running")return;const J=u.current?Math.round((Date.now()-new Date(u.current).getTime())/6e4):0;o("failed"),C(!1,Math.max(0,Math.min(i,J)))},[n,i,C]),x=c.useCallback(()=>{o("done"),I(0),C(!0,i)},[i,C]);c.useEffect(()=>{j();const J=JSON.parse(localStorage.getItem(hd)||"null");if(J&&J.endTime){const R=Math.round((J.endTime-Date.now())/1e3);s(J.duration),g(J.label||""),f(J.tree||"oak"),p.current=J.endTime,u.current=J.startedAt,R>0?(I(R),o("running")):(o("done"),y.current=!1,C(!0,J.duration))}},[]),c.useEffect(()=>{if(n!=="running")return;const J=()=>{const O=Math.round((p.current-Date.now())/1e3);if(O<=0){x();return}I(O)};J();const R=setInterval(J,250);return()=>clearInterval(R)},[n,x]),c.useEffect(()=>{if(n!=="running"||!h)return;const J=()=>{document.hidden&&k()};return document.addEventListener("visibilitychange",J),()=>document.removeEventListener("visibilitychange",J)},[n,h,k]),c.useEffect(()=>{const J=()=>{!document.hidden&&n!=="running"&&j()};window.addEventListener("focus",J),document.addEventListener("visibilitychange",J);const R=setInterval(J,6e4);return()=>{window.removeEventListener("focus",J),document.removeEventListener("visibilitychange",J),clearInterval(R)}},[j,n]);const B=()=>T(J=>{const R=!J;return localStorage.setItem("anvil_grove_deepfocus",R?"1":"0"),R}),W=()=>{y.current=!1,u.current=new Date().toISOString(),p.current=Date.now()+i*60*1e3,localStorage.setItem(hd,JSON.stringify({endTime:p.current,duration:i,label:d,tree:m,startedAt:u.current})),I(i*60),o("running")},Q=()=>{o("idle"),I(i*60)},re=J=>{l(!1),s(J),I(J*60)},ge=()=>{a||(l(!0),s(5),I(5*60))},A=J=>{if(l(!0),J===""){s(0),I(0);return}const R=Math.max(1,Math.min(600,parseInt(J,10)||0));s(R),I(R*60)},X=i*60,ie=n==="running"?1-D/X:n==="done"?1:0,xe=130,q=2*Math.PI*xe,K=q*(1-(n==="running"?ie:n==="done"?1:0)),de=z.stats;return e==="stats"?t.jsx(p1,{sessions:z.sessions,onBack:()=>r("timer")}):t.jsxs("div",{style:qe.page,children:[t.jsxs("div",{style:qe.head,children:[t.jsx("div",{style:qe.eyebrow,children:"Anvil · Grove"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("h1",{style:qe.h1,children:"Grove"}),t.jsx(Yt,{id:"grove"})]}),t.jsx("div",{style:qe.subhead,children:"Plant a tree, stay focused, grow your grove."}),t.jsxs("button",{onClick:()=>r("stats"),style:qe.insightsBtn,disabled:n==="running",children:[t.jsx(a0,{size:15})," Insights"]})]}),de&&t.jsxs("div",{style:qe.statRow,children:[t.jsx(ca,{label:"Today",value:cl(de.today_minutes)}),t.jsx(ca,{label:"Trees",value:de.trees}),t.jsx(ca,{label:"Streak",value:`${de.streak}d`}),t.jsx(ca,{label:"Success",value:`${de.success_rate}%`})]}),t.jsxs("div",{style:qe.stage,children:[t.jsxs("div",{style:qe.ringWrap,children:[t.jsxs("svg",{width:"300",height:"300",viewBox:"0 0 300 300",style:{position:"absolute",inset:0},children:[t.jsx("circle",{cx:"150",cy:"150",r:xe,fill:"none",stroke:"var(--border)",strokeWidth:"10"}),t.jsx("circle",{cx:"150",cy:"150",r:xe,fill:"none",stroke:n==="failed"?"#C2536B":"#4C9A6B",strokeWidth:"10",strokeLinecap:"round",strokeDasharray:q,strokeDashoffset:K,transform:"rotate(-90 150 150)",style:{transition:"stroke-dashoffset 0.4s linear"}})]}),t.jsx("div",{style:qe.ringInner,children:t.jsx(Pg,{species:m,progress:n==="idle"?0:ie,withered:n==="failed",size:170})})]}),n==="idle"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:qe.timeBig,children:Ip(i*60)}),t.jsxs("div",{style:qe.controls,children:[t.jsxs("div",{style:qe.chips,children:[x1.map(J=>t.jsxs("button",{onClick:()=>re(J),style:{...qe.chip,...!a&&i===J?qe.chipOn:{}},children:[J,"m"]},J)),t.jsx("button",{onClick:ge,style:{...qe.chip,...a?qe.chipOn:{}},children:"Custom"})]}),a&&t.jsxs("div",{style:qe.customRow,children:[t.jsx("input",{type:"number",min:"1",max:"600",inputMode:"numeric",autoFocus:!0,value:i||"",onChange:J=>A(J.target.value),placeholder:"e.g. 50",style:qe.customInput}),t.jsx("span",{style:qe.customUnit,children:"minutes"})]}),t.jsx("input",{value:d,onChange:J=>g(J.target.value),placeholder:"What are you focusing on? (optional)",style:qe.input,maxLength:60}),t.jsx("div",{style:qe.treePick,children:Object.entries(pr).map(([J,R])=>t.jsxs("button",{onClick:()=>f(J),title:R.label,style:{...qe.treeBtn,...m===J?{borderColor:R.leaf,background:R.leaf+"1A"}:{}},children:[t.jsx("span",{style:{...qe.treeDot,background:R.leaf}}),R.label]},J))}),t.jsxs("button",{onClick:B,style:qe.toggleRow,children:[t.jsxs("div",{style:{textAlign:"left"},children:[t.jsx("div",{style:qe.toggleTitle,children:"Deep Focus"}),t.jsx("div",{style:qe.toggleHint,children:h?"Leaving the app kills the tree":"Tree survives until you give up"})]}),t.jsx("div",{style:{...qe.switch,...h?qe.switchOn:{}},children:t.jsx("div",{style:{...qe.knob,...h?qe.knobOn:{}}})})]}),t.jsx("button",{onClick:W,disabled:i<1,style:{...qe.plantBtn,...i<1?{opacity:.5,cursor:"not-allowed"}:{}},children:"Plant tree"})]})]}),n==="running"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:qe.timeBig,children:Ip(D)}),t.jsx("div",{style:qe.focusLabel,children:d.trim()||"Focusing…"}),t.jsx("div",{style:h?qe.warn:qe.warnSoft,children:h?"⚠ Deep Focus on — leaving this app will kill your tree.":"🌿 Relaxed mode — only Give up ends this session."}),t.jsx("button",{onClick:k,style:qe.giveUp,children:"Give up"})]}),n==="done"&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:qe.resultTitle,children:["🌳 You grew a ",pr[m].label," tree!"]}),t.jsxs("div",{style:qe.resultSub,children:[cl(i)," of focus added to your grove."]}),t.jsx("button",{onClick:Q,style:qe.plantBtn,children:"Plant another"})]}),n==="failed"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:{...qe.resultTitle,color:"#C2536B"},children:"Your tree withered."}),t.jsx("div",{style:qe.resultSub,children:"You left before the timer finished. Try again?"}),t.jsx("button",{onClick:Q,style:qe.plantBtn,children:"Try again"})]})]}),t.jsx(v1,{sessions:z.sessions,onDelete:async J=>{await _.deleteFocus(J),j()}})]})}function ca({label:e,value:r}){return t.jsxs("div",{style:qe.stat,children:[t.jsx("div",{style:qe.statValue,children:r}),t.jsx("div",{style:qe.statLabel,children:e})]})}function v1({sessions:e,onDelete:r}){const n=e.filter(a=>a.completed);if(n.length===0)return t.jsx("div",{style:qe.forestEmpty,children:"Your grove is empty. Plant your first tree above. 🌱"});const o={};for(const a of n){const l=(a.started_at||a.created_at||"").slice(0,10);(o[l]||(o[l]=[])).push(a)}const i=Object.keys(o).sort().reverse(),s=a=>{const l=new Date().toISOString().slice(0,10);return a===l?"Today":new Date(a+"T00:00").toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})};return t.jsxs("div",{style:qe.forest,children:[t.jsxs("div",{style:qe.forestHead,children:["Your Grove · ",n.length," trees"]}),i.map(a=>t.jsxs("div",{style:qe.daySection,children:[t.jsxs("div",{style:qe.dayLabel,children:[s(a)," · ",o[a].length]}),t.jsx("div",{style:qe.treeGrid,children:o[a].map(l=>t.jsxs("div",{style:qe.treeCard,title:`${l.label||"Focus"} · ${cl(l.actual_min)}`,onDoubleClick:()=>r(l.id),children:[t.jsx(X0,{species:l.tree}),t.jsx("div",{style:qe.treeCardMin,children:cl(l.actual_min||l.duration_min)}),l.label&&t.jsx("div",{style:qe.treeCardLabel,children:l.label})]},l.id))})]},a)),t.jsx("div",{style:qe.forestHint,children:"Double-tap a tree to remove it."})]})}const qe={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:820,margin:"0 auto"},head:{marginBottom:16,textAlign:"center"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},insightsBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginTop:12},statRow:{display:"flex",gap:10,justifyContent:"center",marginBottom:18,flexWrap:"wrap"},stat:{background:"var(--surface)",borderRadius:12,padding:"10px 18px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",minWidth:78},statValue:{fontSize:19,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},statLabel:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},stage:{background:"var(--surface)",borderRadius:18,padding:"28px 24px 32px",boxShadow:"0 2px 12px rgba(0,0,0,0.06)",display:"flex",flexDirection:"column",alignItems:"center",marginBottom:26},ringWrap:{position:"relative",width:300,height:300,display:"grid",placeItems:"center"},ringInner:{position:"relative",zIndex:1,display:"grid",placeItems:"center"},timeBig:{fontSize:40,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:6},focusLabel:{fontSize:14,color:"var(--text-2)",marginTop:2,fontWeight:500},warn:{fontSize:12,color:"#C2773B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},warnSoft:{fontSize:12,color:"#4C9A6B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},toggleRow:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,border:"1px solid var(--border)",background:"var(--surface)",borderRadius:12,padding:"10px 14px",cursor:"pointer",fontFamily:"inherit",width:"100%"},toggleTitle:{fontSize:14,fontWeight:700,color:"var(--text)"},toggleHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},switch:{width:42,height:24,borderRadius:12,background:"var(--border)",flexShrink:0,padding:2,transition:"background 0.18s",boxSizing:"border-box"},switchOn:{background:"#4C9A6B"},knob:{width:20,height:20,borderRadius:"50%",background:"var(--surface)",boxShadow:"0 1px 2px rgba(0,0,0,0.2)",transform:"translateX(0)",transition:"transform 0.18s"},knobOn:{transform:"translateX(18px)"},controls:{width:"100%",maxWidth:380,display:"flex",flexDirection:"column",gap:14,marginTop:8},chips:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},chip:{border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 16px",borderRadius:20,fontSize:13.5,fontWeight:700,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipOn:{background:"#4C9A6B",color:"#fff",borderColor:"#4C9A6B"},customRow:{display:"flex",alignItems:"center",justifyContent:"center",gap:8},customInput:{border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",fontSize:15,fontWeight:700,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center",width:100},customUnit:{fontSize:13,color:"var(--text-3)",fontWeight:600},input:{border:"1px solid var(--border)",borderRadius:10,padding:"11px 13px",fontSize:14,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center"},treePick:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},treeBtn:{display:"flex",alignItems:"center",gap:6,border:"1.5px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},treeDot:{width:10,height:10,borderRadius:"50%"},plantBtn:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:4},giveUp:{border:"1px solid var(--border)",background:"var(--surface)",color:"#C2536B",padding:"11px 26px",borderRadius:11,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:18},resultTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginTop:14,textAlign:"center"},resultSub:{fontSize:13.5,color:"var(--text-3)",marginTop:6,marginBottom:18,textAlign:"center"},forest:{background:"var(--surface)",borderRadius:16,padding:"20px 22px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},forestHead:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:14},forestEmpty:{background:"var(--surface)",borderRadius:16,padding:"40px 20px",textAlign:"center",color:"var(--text-3)",fontSize:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},daySection:{marginBottom:16},dayLabel:{fontSize:12,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.04em",marginBottom:8},treeGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(80px,1fr))",gap:8},treeCard:{display:"flex",flexDirection:"column",alignItems:"center",padding:"8px 4px",borderRadius:10,cursor:"pointer",background:"var(--surface-2)"},treeCardMin:{fontSize:12,fontWeight:700,color:"#4C9A6B",marginTop:-4},treeCardLabel:{fontSize:10.5,color:"var(--text-3)",marginTop:2,textAlign:"center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:76},forestHint:{fontSize:11,color:"var(--text-3)",textAlign:"center",marginTop:6}},j1="grove_rates",k1="reward_rates",ga=Object.keys(pr),Bp=[{id:"kickstart",label:"Kickstart"},{id:"golden",label:"Golden Book"},{id:"habits",label:"Habits"},{id:"quadrant",label:"Quadrant"},{id:"goals",label:"Goals"},{id:"grove",label:"Grove"},{id:"journal",label:"Journal"},{id:"revision",label:"Revision"},{id:"affirmations",label:"Affirmations"},{id:"skills",label:"Skills"},{id:"spiritual",label:"Spiritual"},{id:"mindscape",label:"Mindscape"},{id:"vault",label:"Wallet"},{id:"expenses",label:"Expenses"},{id:"trading",label:"Trading Journal"},{id:"delight",label:"Delights"},{id:"achievements",label:"Achievements"},{id:"challenges",label:"Challenges"},{id:"bucket",label:"Bucket List"}],fd=new Set(["worth"]),Rp="reward_toggles",Ep="bucket_take_enabled",On="#C9A227",No="#3A7CA5",xo="#C2536B",yo="#4C9A6B",Dp=["#3A7CA5","#4C9A6B","#C2773B","#8268B0","#C2536B","#C9A227","#5B9B9B","#B0654E","#6E7FC2","#A23E57","#3E9E6B","#9A7BB0","#C99B2E","#4E86B0","#B04E86","#6BA34C","#8A6D3B"],w1=e=>{const r=Math.floor(e/60),n=Math.round(e%60);return r&&n?`${r}h ${n}m`:r?`${r}h`:`${n}m`},xd=e=>{let r=Math.round((e||0)*60);const n=Math.floor(r/3600);r%=3600;const o=Math.floor(r/60);return r%=60,[n?`${n}h`:null,n||o?`${o}m`:null,`${r}s`].filter(Boolean).join(" ")},S1=()=>{const e=new Date,r=n=>String(n).padStart(2,"0");return`${e.getFullYear()}-${r(e.getMonth()+1)}-${r(e.getDate())}T${r(e.getHours())}:${r(e.getMinutes())}`},Ap=e=>{if(!e)return"";const r=new Date(e.includes("T")?e:e+"T00:00:00");return isNaN(r)?e:r.toLocaleDateString("en-US",e.includes("T")?{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}:{month:"short",day:"numeric",year:"numeric"})},Ir=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,Fp=e=>{const r=new Date(e);return r.setHours(0,0,0,0),r.setDate(r.getDate()-(r.getDay()+6)%7),r},Ho=[{id:"today",label:"Today"},{id:"all",label:"All time"},{id:"tweek",label:"This week"},{id:"tmonth",label:"This month"},{id:"pweek",label:"Last week"},{id:"pmonth",label:"Last month"},{id:"tyear",label:"This year"}];function C1(e){const r=new Date(Lo()+"T12:00:00");if(e==="today")return[Ir(r),Ir(r)];if(e==="tweek"){const n=Fp(r),o=new Date(n);return o.setDate(n.getDate()+6),[Ir(n),Ir(o)]}if(e==="pweek"){const n=Fp(r);n.setDate(n.getDate()-7);const o=new Date(n);return o.setDate(n.getDate()+6),[Ir(n),Ir(o)]}return e==="tmonth"?[Ir(new Date(r.getFullYear(),r.getMonth(),1)),Ir(new Date(r.getFullYear(),r.getMonth()+1,0))]:e==="pmonth"?[Ir(new Date(r.getFullYear(),r.getMonth()-1,1)),Ir(new Date(r.getFullYear(),r.getMonth(),0))]:e==="tyear"?[Ir(new Date(r.getFullYear(),0,1)),Ir(new Date(r.getFullYear(),11,31))]:["0000-01-01","9999-12-31"]}function T1(){const e=ho(),r=L=>_s(L,e.code),[n,o]=c.useState([]),[i,s]=c.useState([]),[a,l]=c.useState([]),[d,g]=c.useState([]),[m,f]=c.useState([]),[h,T]=c.useState([]),[D,I]=c.useState({}),[z,b]=c.useState({}),[p,u]=c.useState({focus:!0,usage:!0,achievement:!0,challenge:!0}),[y,j]=c.useState(!1),[C,k]=c.useState({}),[x,B]=c.useState({}),[W,Q]=c.useState(!1),[re,ge]=c.useState(!1),[A,X]=c.useState(null),[ie,xe]=c.useState(""),[q,K]=c.useState(""),[de,J]=c.useState(!1),[R,O]=c.useState("today"),[G,$]=c.useState([]),[ae,me]=c.useState(!1),[Oe,Ce]=c.useState(null),U=()=>_.getPayouts().then(g).catch(()=>{}),P=()=>_.getBucket().then(L=>$(Array.isArray(L)?L:[])).catch(()=>{}),ne=()=>_.getRewardRates().then(l).catch(()=>{});c.useEffect(()=>{(async()=>{try{const[L,ze,rt,F,ee,Ie,v,pe,Be,$e,Je]=await Promise.all([_.getFocus(),_.getScreenTime(),_.getRewardRates(),_.getPayouts(),_.getAchievements(),_.getChallenges(),_.getBucket(),_.getSetting(j1),_.getSetting(k1),_.getSetting(Rp),_.getSetting(Ep)]);o(L.sessions||[]),s(Array.isArray(ze)?ze:[]),l(rt||[]),g(F||[]),f(Array.isArray(ee)?ee:[]),T(Array.isArray(Ie)?Ie:[]),$(Array.isArray(v)?v:[]),I((pe==null?void 0:pe.value)||{}),b((Be==null?void 0:Be.value)||{}),$e!=null&&$e.value&&u(we=>({...we,...$e.value})),me(!!(Je!=null&&Je.value))}catch{}j(!0)})()},[]);const E={};a.forEach(L=>{var ze;(E[ze=`${L.kind}:${L.rkey}`]||(E[ze]=[])).push({eff:L.eff_date,rate:L.rate})}),Object.values(E).forEach(L=>L.sort((ze,rt)=>ze.eff.localeCompare(rt.eff)));const w=(L,ze,rt)=>{const F=E[`${L}:${ze}`];if(F){let ee=null;for(const Ie of F)if(Ie.eff<=rt)ee=Ie.rate;else break;if(ee!==null)return ee}return(L==="focus"?D[ze]:z[ze])||0},oe=(L,ze)=>{const rt=E[`${L}:${ze}`];return rt&&rt.length?rt[rt.length-1].rate:(L==="focus"?D[ze]:z[ze])??""},[he,V]=C1(R);let fe=0,ye=0;n.filter(L=>L.completed).forEach(L=>{const ze=(L.started_at||L.created_at||"").slice(0,10),rt=pr[L.tree]?L.tree:ao;fe+=(L.actual_min||0)/60*w("focus",rt,ze)}),i.forEach(L=>{fd.has(L.screen)||(ye+=L.seconds/60*w("usage",L.screen,L.date))});const Ae=m.reduce((L,ze)=>L+(ze.reward||0),0),tt=h.filter(L=>L.status==="done"),yt=tt.reduce((L,ze)=>L+(ze.reward_earned||0),0),_e=(p.focus?fe:0)+(p.usage?ye:0)+(p.achievement?Ae:0)+(p.challenge?yt:0),st=d.reduce((L,ze)=>L+ze.amount,0),Ze=Math.max(0,_e-st),at=L=>{let ze=0,rt=0;return p.focus&&n.filter(F=>F.completed).forEach(F=>{const ee=(F.started_at||F.created_at||"").slice(0,10);if(ee!==L)return;const Ie=pr[F.tree]?F.tree:ao;ze+=(F.actual_min||0)/60*w("focus",Ie,ee)}),p.usage&&i.forEach(F=>{fd.has(F.screen)||F.date!==L||(rt+=F.seconds/60*w("usage",F.screen,F.date))}),ze+rt},vt=L=>{const ze=new Date;return ze.setDate(ze.getDate()+L),Ir(ze)},ct=[{label:"Today",value:at(vt(0)),color:On},{label:"Yesterday",value:at(vt(-1)),color:"var(--text-3)"},{label:"Day before",value:at(vt(-2)),color:"var(--text-3)"}],Ht={};ga.forEach(L=>Ht[L]={minutes:0,earned:0}),n.filter(L=>L.completed).forEach(L=>{const ze=(L.started_at||L.created_at||"").slice(0,10);if(ze<he||ze>V)return;const rt=pr[L.tree]?L.tree:ao,F=L.actual_min||0;Ht[rt].minutes+=F,Ht[rt].earned+=F/60*w("focus",rt,ze)});const Wt=p.focus?ga.reduce((L,ze)=>L+Ht[ze].earned,0):0,Et={};i.forEach(L=>{var rt;if(fd.has(L.screen)||L.date<he||L.date>V)return;const ze=Et[rt=L.screen]||(Et[rt]={seconds:0,earned:0});ze.seconds+=L.seconds,ze.earned+=L.seconds/60*w("usage",L.screen,L.date)});const le=p.usage?Object.values(Et).reduce((L,ze)=>L+ze.earned,0):0,Le=m.filter(L=>L.date>=he&&L.date<=V&&(L.reward||0)>0),ot=[...Le].sort((L,ze)=>ze.date.localeCompare(L.date)||ze.reward-L.reward),bt=p.achievement?Le.reduce((L,ze)=>L+(ze.reward||0),0):0,zt=tt.filter(L=>!L.end_date||L.end_date>=he&&L.end_date<=V),xr=[...zt].sort((L,ze)=>(ze.reward_earned||0)-(L.reward_earned||0)),Ge=p.challenge?zt.reduce((L,ze)=>L+(ze.reward_earned||0),0):0,it=Wt+le+bt+Ge,xt=it>0?Wt/it*100:0,ut=it>0?le/it*100:0,Dt=it>0?bt/it*100:0,Wr=it>0?Ge/it*100:0,jt=ga.map(L=>({p:L,...Ht[L],...pr[L]})).filter(L=>L.minutes>0).sort((L,ze)=>ze.earned-L.earned),Mr=Bp.map(L=>({...L,...Et[L.id]||{seconds:0,earned:0}})).filter(L=>L.seconds>0).sort((L,ze)=>ze.earned-L.earned),Gt=Mr.reduce((L,ze)=>L+ze.seconds,0);let mn=0;const er=Mr.map((L,ze)=>{const rt=Gt>0?mn/Gt*100:0;mn+=L.seconds;const F=Gt>0?mn/Gt*100:0;return{...L,color:Dp[ze%Dp.length],start:rt,end:F,pct:Gt>0?L.seconds/Gt*100:0}}),or=er.length?`conic-gradient(${er.map(L=>`${L.color} ${L.start}% ${L.end}%`).join(", ")})`:"var(--surface-2)",yr=async()=>{const L=Object.entries(C);for(const[ze,rt]of L)await _.setRewardRate({kind:"focus",rkey:ze,rate:Math.max(0,parseFloat(rt)||0)}).catch(()=>{});k({}),Q(!1),ne()},M=()=>{k({}),Q(!1)},ce=async()=>{const L=Object.entries(x);for(const[ze,rt]of L)await _.setRewardRate({kind:"usage",rkey:ze,rate:Math.max(0,parseFloat(rt)||0)}).catch(()=>{});B({}),ge(!1),ne()},We=()=>{B({}),ge(!1)},Ye=L=>{u(ze=>{const rt={...ze,[L]:!ze[L]};return _.setSetting(Rp,rt).catch(()=>{}),rt})},St=L=>{Ze<=0||(X(L),xe(L==="all"?Ze.toFixed(2):""),K(""),Ce(null))},Ue=async()=>{const L=Math.min(parseFloat(ie)||0,Ze);L<=0||!q.trim()||(await _.createPayout({amount:L,note:q.trim(),date:S1()}),X(null),xe(""),K(""),await U(),J(!0))},Ke=async()=>{!Oe||(Oe.cost||0)>Ze||(await _.fulfillBucketWish(Oe.id).catch(()=>{}),X(null),Ce(null),await Promise.all([U(),P()]),J(!0))},Tt=()=>{me(L=>{const ze=!L;return _.setSetting(Ep,ze).catch(()=>{}),ze})},_r=async L=>{await _.deletePayout(L),U()};return t.jsxs("div",{style:H.page,children:[t.jsxs("div",{style:H.head,children:[t.jsx("div",{style:H.eyebrow,children:"Anvil · Rewards"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("h1",{style:H.h1,children:"Rewards"}),t.jsx(Yt,{id:"worth"})]}),t.jsx("div",{style:H.subhead,children:"Your earned rewards from focus and app usage."})]}),t.jsxs("div",{style:H.hero,children:[t.jsx("button",{onClick:()=>J(L=>!L),style:H.logIcon,title:"View reward log",children:t.jsx(_0,{size:16})}),t.jsx("div",{style:H.heroLabel,children:"Final reward · pending"}),t.jsx("div",{style:H.heroVal,children:r(Ze)}),t.jsxs("div",{style:H.heroSub,children:["Earned ",r(_e)," · Taken ",r(st),Ae>0?` · incl. ${r(Ae)} achievement`:"",yt>0?` · incl. ${r(yt)} challenge`:""]}),t.jsxs("div",{style:H.heroBtns,children:[t.jsx("button",{onClick:()=>St("partial"),disabled:Ze<=0,style:{...H.heroBtnGhost,...Ze<=0?H.btnDisabled:{}},children:"Take partial"}),t.jsx("button",{onClick:()=>St("all"),disabled:Ze<=0,style:{...H.heroBtnSolid,...Ze<=0?H.btnDisabled:{}},children:"Take all pending"})]}),t.jsxs("button",{onClick:Tt,style:H.bucketToggleRow,title:ae?"Taking will pick a bucket-list wish":"Taking uses a free amount",children:[t.jsx("span",{style:{...H.miniToggle,background:ae?"#fff":"rgba(255,255,255,0.3)",justifyContent:ae?"flex-end":"flex-start"},children:t.jsx("span",{style:{...H.miniKnob,background:ae?"var(--accent-strong)":"#fff"}})}),t.jsxs("span",{children:["Fulfil from bucket list",ae?" · on":" · off"]})]})]}),t.jsxs("div",{style:H.statRow,children:[t.jsxs("div",{style:H.statCard,children:[t.jsx("div",{style:H.statVal,children:r(st)}),t.jsx("div",{style:H.statLbl,children:"Total taken"})]}),t.jsxs("div",{style:H.statCard,children:[t.jsx("div",{style:{...H.statVal,color:On},children:r(Ze)}),t.jsx("div",{style:H.statLbl,children:"Total pending"})]})]}),t.jsxs("div",{style:H.card,children:[t.jsx("div",{style:H.threeDayTitle,children:"Earned · last 3 days"}),t.jsx(z1,{items:ct,reward:r})]}),t.jsx("div",{style:H.periodRow,children:Ho.map(L=>t.jsx("button",{onClick:()=>O(L.id),style:{...H.periodChip,...R===L.id?H.periodChipOn:{}},children:L.label},L.id))}),it>0?t.jsxs("div",{style:H.card,children:[t.jsxs("div",{style:H.cardTitleRow,children:[t.jsx("span",{style:H.cardTitle,children:"Reward split"}),t.jsxs("span",{style:H.periodTotal,children:[r(it)," · ",Ho.find(L=>L.id===R).label]})]}),t.jsxs("div",{style:H.splitTrack,children:[t.jsx("div",{style:{width:`${xt}%`,background:On,height:"100%"}}),t.jsx("div",{style:{width:`${ut}%`,background:No,height:"100%"}}),t.jsx("div",{style:{width:`${Dt}%`,background:xo,height:"100%"}}),t.jsx("div",{style:{width:`${Wr}%`,background:yo,height:"100%"}})]}),t.jsxs("div",{style:H.legendRow,children:[t.jsxs("span",{style:H.legendItem,children:[t.jsx("span",{style:{...H.legendDot,background:On}})," Focus ",Math.round(xt),"% · ",r(Wt)]}),t.jsxs("span",{style:H.legendItem,children:[t.jsx("span",{style:{...H.legendDot,background:No}})," Usage ",Math.round(ut),"% · ",r(le)]}),t.jsxs("span",{style:H.legendItem,children:[t.jsx("span",{style:{...H.legendDot,background:xo}})," Achievement ",Math.round(Dt),"% · ",r(bt)]}),t.jsxs("span",{style:H.legendItem,children:[t.jsx("span",{style:{...H.legendDot,background:yo}})," Challenges ",Math.round(Wr),"% · ",r(Ge)]})]})]}):t.jsxs("div",{style:{...H.card,...H.muted},children:["No rewards earned in ",Ho.find(L=>L.id===R).label.toLowerCase(),"."]}),t.jsxs("div",{style:{...H.card,...p.focus?{}:H.cardOff},children:[t.jsxs("div",{style:H.sectionHead,children:[t.jsxs("span",{style:{...H.cardTitle,color:On},children:["Focus Rewards · ",r(Wt)]}),t.jsxs("div",{style:H.sectionHeadRight,children:[p.focus&&t.jsx("button",{onClick:()=>W?M():Q(!0),style:H.collapseLink,children:W?"Hide rates":"Set rates"}),t.jsx(ua,{on:p.focus,onClick:()=>Ye("focus"),color:On})]})]}),p.focus&&W&&t.jsxs("div",{style:{marginTop:12},children:[t.jsx("div",{style:H.rateGrid,children:ga.map(L=>t.jsxs("div",{style:H.rateRow,children:[t.jsx("span",{style:{...H.dot,background:pr[L].leaf}}),t.jsx("span",{style:H.rateName,children:pr[L].label}),t.jsxs("div",{style:H.rateInputWrap,children:[t.jsx("span",{style:H.unitSign,children:e.symbol}),t.jsx("input",{type:"number",min:"0",step:"0.5",inputMode:"decimal",placeholder:"0",value:C[L]!==void 0?C[L]:oe("focus",L),onChange:ze=>k(rt=>({...rt,[L]:ze.target.value})),style:H.rateInput}),t.jsx("span",{style:H.unit,children:"/hr"})]})]},L))}),t.jsxs("div",{style:H.rateActions,children:[t.jsx("button",{onClick:M,style:H.rateCancel,children:"Cancel"}),t.jsx("button",{onClick:yr,style:H.rateSave,children:"Save"})]})]}),p.focus?jt.length>0?t.jsx("div",{style:{...H.rows,marginTop:14},children:jt.map(L=>t.jsxs("div",{style:H.row,children:[t.jsx("span",{style:{...H.dot,background:L.leaf}}),t.jsx("span",{style:H.rowName,children:L.label}),t.jsx("span",{style:H.rowMeta,children:w1(Math.round(L.minutes))}),t.jsx("span",{style:H.rowAmt,children:r(L.earned)})]},L.p))}):t.jsx("div",{style:H.muted,children:"No focus sessions yet."}):t.jsx("div",{style:H.muted,children:"Focus rewards are disabled — no reward is being calculated."})]}),t.jsxs("div",{style:{...H.card,...p.usage?{}:H.cardOff},children:[t.jsxs("div",{style:H.sectionHead,children:[t.jsxs("span",{style:{...H.cardTitle,color:No},children:["Usage Rewards · ",r(le)]}),t.jsxs("div",{style:H.sectionHeadRight,children:[p.usage&&t.jsx("button",{onClick:()=>re?We():ge(!0),style:H.collapseLink,children:re?"Hide rates":"Set rates"}),t.jsx(ua,{on:p.usage,onClick:()=>Ye("usage"),color:No})]})]}),p.usage&&re&&t.jsxs("div",{style:{marginTop:12},children:[t.jsx("div",{style:H.rateGrid,children:Bp.map(L=>t.jsxs("div",{style:H.rateRow,children:[t.jsx("span",{style:H.rateName,children:L.label}),t.jsxs("div",{style:H.rateInputWrap,children:[t.jsx("span",{style:H.unitSign,children:e.symbol}),t.jsx("input",{type:"number",min:"0",step:"0.1",inputMode:"decimal",placeholder:"0",value:x[L.id]!==void 0?x[L.id]:oe("usage",L.id),onChange:ze=>B(rt=>({...rt,[L.id]:ze.target.value})),style:H.rateInput}),t.jsx("span",{style:H.unit,children:"/min"})]})]},L.id))}),t.jsxs("div",{style:H.rateActions,children:[t.jsx("button",{onClick:We,style:H.rateCancel,children:"Cancel"}),t.jsx("button",{onClick:ce,style:H.rateSave,children:"Save"})]})]}),p.usage?Mr.length>0?t.jsx("div",{style:{...H.rows,marginTop:14},children:Mr.map(L=>t.jsxs("div",{style:H.row,children:[t.jsx("span",{style:H.rowName,children:L.label}),t.jsx("span",{style:H.rowMeta,children:xd(L.seconds/60)}),t.jsx("span",{style:H.rowAmt,children:r(L.earned)})]},L.id))}):t.jsx("div",{style:H.muted,children:y?"No usage tracked yet.":"Loading…"}):t.jsx("div",{style:H.muted,children:"Usage rewards are disabled — no reward is being calculated."}),p.usage&&Gt>0&&t.jsxs("div",{style:H.usagePieBlock,children:[t.jsxs("div",{style:H.usagePieTitle,children:["Most-used screens · ",Ho.find(L=>L.id===R).label]}),t.jsxs("div",{style:H.pieWrap,children:[t.jsxs("div",{style:H.pieChart,children:[t.jsx("div",{style:{...H.pieDisc,background:or}}),t.jsxs("div",{style:H.pieHole,children:[t.jsx("span",{style:H.pieHoleVal,children:xd(Gt/60)}),t.jsx("span",{style:H.pieHoleLbl,children:"total time"})]})]}),t.jsx("div",{style:H.pieLegend,children:er.map(L=>t.jsxs("div",{style:H.pieLegRow,children:[t.jsx("span",{style:{...H.legendDot,background:L.color}}),t.jsx("span",{style:H.pieLegName,children:L.label}),t.jsxs("span",{style:H.pieLegPct,children:[Math.round(L.pct),"%"]}),t.jsx("span",{style:H.pieLegMin,children:xd(L.seconds/60)})]},L.id))})]})]})]}),t.jsxs("div",{style:{...H.card,...p.achievement?{}:H.cardOff},children:[t.jsxs("div",{style:H.sectionHead,children:[t.jsxs("span",{style:{...H.cardTitle,color:xo},children:["Achievement Rewards · ",r(bt)]}),t.jsxs("div",{style:H.sectionHeadRight,children:[p.achievement&&t.jsx("span",{style:H.collapseHint,children:"Set in Achievements"}),t.jsx(ua,{on:p.achievement,onClick:()=>Ye("achievement"),color:xo})]})]}),p.achievement?ot.length>0?t.jsx("div",{style:{...H.rows,marginTop:14},children:ot.map(L=>t.jsxs("div",{style:H.row,children:[t.jsx("span",{style:{...H.dot,background:xo}}),t.jsx("span",{style:H.rowName,children:L.title}),t.jsx("span",{style:H.rowMeta,children:Ap(L.date)}),t.jsx("span",{style:H.rowAmt,children:r(L.reward)})]},L.id))}):t.jsxs("div",{style:{...H.muted,marginTop:10},children:["No achievement rewards in ",Ho.find(L=>L.id===R).label.toLowerCase(),". Add a reward to a win in the Achievements section."]}):t.jsx("div",{style:{...H.muted,marginTop:10},children:"Achievement rewards are disabled — no reward is being calculated."})]}),t.jsxs("div",{style:{...H.card,...p.challenge?{}:H.cardOff},children:[t.jsxs("div",{style:H.sectionHead,children:[t.jsxs("span",{style:{...H.cardTitle,color:yo},children:["Challenge Rewards · ",r(Ge)]}),t.jsxs("div",{style:H.sectionHeadRight,children:[p.challenge&&t.jsx("span",{style:H.collapseHint,children:"Set in Challenges"}),t.jsx(ua,{on:p.challenge,onClick:()=>Ye("challenge"),color:yo})]})]}),p.challenge?xr.length>0?t.jsx("div",{style:{...H.rows,marginTop:14},children:xr.map(L=>t.jsxs("div",{style:H.row,children:[t.jsx("span",{style:{...H.dot,background:yo}}),t.jsx("span",{style:H.rowName,children:L.name}),t.jsx("span",{style:H.rowMeta,children:L.reward||"Completed"}),t.jsx("span",{style:H.rowAmt,children:r(L.reward_earned)})]},L.id))}):t.jsxs("div",{style:{...H.muted,marginTop:10},children:["No completed challenges in ",Ho.find(L=>L.id===R).label.toLowerCase(),". Finish a challenge in the Challenges section to bank its reward."]}):t.jsx("div",{style:{...H.muted,marginTop:10},children:"Challenge rewards are disabled — no reward is being calculated."})]}),de&&t.jsx("div",{style:H.modalOverlay,onClick:()=>J(!1),children:t.jsxs("div",{style:H.logModal,onClick:L=>L.stopPropagation(),children:[t.jsxs("div",{style:H.logModalHead,children:[t.jsx("span",{style:H.modalTitle,children:"Reward log"}),t.jsx("button",{onClick:()=>J(!1),style:H.logClose,title:"Close",children:t.jsx(De,{size:16})})]}),d.length===0?t.jsx("div",{style:{...H.muted,padding:"24px 0",textAlign:"center"},children:"No rewards taken yet."}):t.jsxs(t.Fragment,{children:[t.jsx("div",{style:H.logScroll,children:d.map(L=>t.jsxs("div",{style:H.row,children:[t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:H.logNote,children:L.note||"Reward taken"}),t.jsx("div",{style:H.rowMeta,children:Ap(L.date)})]}),t.jsx("span",{style:H.rowAmt,children:r(L.amount)}),t.jsx("button",{onClick:()=>_r(L.id),style:H.del,children:"×"})]},L.id))}),t.jsxs("div",{style:H.totalRow,children:[t.jsx("span",{children:"Total taken"}),t.jsx("span",{style:H.totalVal,children:r(st)})]})]})]})}),it>0&&t.jsxs("div",{style:H.card,children:[t.jsx("div",{style:H.cardTitle,children:"Reward breakdown"}),t.jsxs("div",{style:H.pieWrap,children:[t.jsxs("div",{style:H.pieChart,children:[t.jsx("div",{style:{...H.pieDisc,background:`conic-gradient(${On} 0 ${xt}%, ${No} ${xt}% ${xt+ut}%, ${xo} ${xt+ut}% ${xt+ut+Dt}%, ${yo} ${xt+ut+Dt}% 100%)`}}),t.jsxs("div",{style:H.pieHole,children:[t.jsx("span",{style:H.pieHoleVal,children:r(it)}),t.jsx("span",{style:H.pieHoleLbl,children:"total"})]})]}),t.jsxs("div",{style:H.pieLegend,children:[t.jsxs("div",{style:H.pieLegRow,children:[t.jsx("span",{style:{...H.legendDot,background:On}}),t.jsx("span",{style:H.pieLegName,children:"Focus"}),t.jsxs("span",{style:H.pieLegPct,children:[Math.round(xt),"%"]}),t.jsx("span",{style:H.pieLegMin,children:r(Wt)})]}),t.jsxs("div",{style:H.pieLegRow,children:[t.jsx("span",{style:{...H.legendDot,background:No}}),t.jsx("span",{style:H.pieLegName,children:"Usage"}),t.jsxs("span",{style:H.pieLegPct,children:[Math.round(ut),"%"]}),t.jsx("span",{style:H.pieLegMin,children:r(le)})]}),t.jsxs("div",{style:H.pieLegRow,children:[t.jsx("span",{style:{...H.legendDot,background:xo}}),t.jsx("span",{style:H.pieLegName,children:"Achievement"}),t.jsxs("span",{style:H.pieLegPct,children:[Math.round(Dt),"%"]}),t.jsx("span",{style:H.pieLegMin,children:r(bt)})]}),t.jsxs("div",{style:H.pieLegRow,children:[t.jsx("span",{style:{...H.legendDot,background:yo}}),t.jsx("span",{style:H.pieLegName,children:"Challenges"}),t.jsxs("span",{style:H.pieLegPct,children:[Math.round(Wr),"%"]}),t.jsx("span",{style:H.pieLegMin,children:r(Ge)})]})]})]})]}),A&&t.jsx("div",{style:H.modalOverlay,onClick:()=>X(null),children:t.jsxs("div",{style:H.modalCard,onClick:L=>L.stopPropagation(),children:[t.jsx("div",{style:H.modalTitle,children:A==="all"?"Take all pending reward?":"Take partial reward"}),t.jsxs("div",{style:H.modalSub,children:["Pending: ",r(Ze)]}),ae?(()=>{const L=G.filter(F=>!F.fulfilled),ze=Oe&&(Oe.cost||0)>Ze,rt=Oe&&!ze;return t.jsxs(t.Fragment,{children:[L.length===0?t.jsx("div",{style:H.wishEmpty,children:"No unfulfilled wishes. Add some in the Bucket List section."}):t.jsx("div",{style:H.wishList,children:L.map((F,ee)=>{const Ie=(F.cost||0)>Ze,v=(Oe==null?void 0:Oe.id)===F.id;return t.jsxs("button",{onClick:()=>!Ie&&Ce(F),disabled:Ie,style:{...H.wishRow,...v?H.wishRowOn:{},...Ie?H.wishRowOver:{}},children:[t.jsx("span",{style:H.wishRank,children:ee+1}),t.jsx("span",{style:H.wishName,children:F.wish}),t.jsxs("span",{style:H.wishCost,children:[r(F.cost),Ie?" · too costly":""]})]},F.id)})}),t.jsxs("div",{style:H.modalActions,children:[t.jsx("button",{onClick:()=>X(null),style:H.modalCancel,children:"Cancel"}),t.jsx("button",{onClick:Ke,disabled:!rt,style:{...H.modalConfirm,...rt?{}:{opacity:.5,cursor:"not-allowed"}},children:Oe?`Fulfil · ${r(Oe.cost)}`:"Pick a wish"})]})]})})():t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:H.modalInputWrap,children:[t.jsx("span",{style:H.modalSign,children:e.symbol}),t.jsx("input",{type:"number",min:"0",step:"0.01",autoFocus:!0,placeholder:Ze.toFixed(2),value:ie,onChange:L=>xe(L.target.value),style:H.modalAmt})]}),t.jsx("input",{placeholder:"What is this reward for? (required)",value:q,onChange:L=>K(L.target.value),onKeyDown:L=>L.key==="Enter"&&Ue(),style:H.modalReason}),(()=>{const L=parseFloat(ie)>0&&!!q.trim();return t.jsxs("div",{style:H.modalActions,children:[t.jsx("button",{onClick:()=>X(null),style:H.modalCancel,children:"Cancel"}),t.jsxs("button",{onClick:Ue,disabled:!L,style:{...H.modalConfirm,...L?{}:{opacity:.5,cursor:"not-allowed"}},children:["Confirm · ",r(Math.min(parseFloat(ie)||0,Ze))]})]})})()]})]})}),t.jsx("div",{style:H.note,children:"Set rates only affect time from today onward — past time keeps the rate it was earned at."})]})}function ua({on:e,onClick:r,color:n}){return t.jsx("button",{onClick:r,title:e?"Disable — stop calculating this reward":"Enable this reward",style:{...H.toggle,background:e?n:"var(--border)",justifyContent:e?"flex-end":"flex-start"},children:t.jsx("span",{style:H.toggleKnob})})}function z1({items:e,reward:r}){const n=Math.max(1,...e.map(o=>o.value));return t.jsx("div",{style:H.tbWrap,children:e.map((o,i)=>t.jsxs("div",{style:H.tbRow,children:[t.jsx("div",{style:H.tbLbl,children:o.label}),t.jsx("div",{style:H.tbTrack,children:t.jsx("div",{style:{...H.tbBar,width:`${o.value/n*100}%`,background:o.color}})}),t.jsx("div",{style:H.tbVal,children:r(o.value)})]},i))})}const H={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},hero:{position:"relative",background:"linear-gradient(135deg,var(--accent-strong),var(--accent-2))",borderRadius:16,padding:"22px 24px",color:"#fff",marginBottom:14,textAlign:"center"},logIcon:{position:"absolute",top:12,right:12,border:"1px solid rgba(255,255,255,0.5)",background:"rgba(255,255,255,0.12)",color:"#fff",width:32,height:32,borderRadius:9,cursor:"pointer",display:"grid",placeItems:"center"},logClose:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:28,height:28,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},logNote:{fontSize:13.5,fontWeight:600,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:200,display:"grid",placeItems:"center",padding:16},modalCard:{background:"var(--surface)",color:"var(--text)",borderRadius:16,padding:"22px 22px 18px",width:360,maxWidth:"100%",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)"},logModal:{background:"var(--surface)",color:"var(--text)",borderRadius:16,padding:"18px 18px 14px",width:440,maxWidth:"100%",maxHeight:"82vh",display:"flex",flexDirection:"column",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)",boxSizing:"border-box"},logModalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8,flexShrink:0},logScroll:{overflowY:"auto",display:"flex",flexDirection:"column",gap:2,paddingRight:2,minHeight:0},modalTitle:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:4},modalSub:{fontSize:12.5,color:"var(--text-3)",fontWeight:600,marginBottom:14},modalInputWrap:{display:"flex",alignItems:"center",gap:4,border:"1px solid var(--border)",borderRadius:10,padding:"8px 12px",background:"var(--surface-2)",marginBottom:8},modalSign:{fontSize:16,color:"var(--text-2)",fontWeight:700},modalAmt:{border:"none",background:"none",outline:"none",flex:1,fontSize:18,fontWeight:700,fontFamily:"inherit",color:"var(--text)"},modalReason:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"9px 12px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",marginBottom:14},modalActions:{display:"flex",gap:8},modalCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},modalConfirm:{flex:1,border:"none",background:"#C9A227",color:"#fff",padding:"10px 14px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},bucketToggleRow:{display:"inline-flex",alignItems:"center",gap:8,margin:"12px auto 0",border:"none",background:"rgba(255,255,255,0.12)",color:"#fff",padding:"6px 12px",borderRadius:20,fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},miniToggle:{display:"flex",alignItems:"center",width:32,height:18,borderRadius:10,padding:2,flexShrink:0,transition:"background 0.15s"},miniKnob:{width:14,height:14,borderRadius:"50%",boxShadow:"0 1px 2px rgba(0,0,0,0.3)"},wishList:{display:"flex",flexDirection:"column",gap:6,maxHeight:300,overflowY:"auto",margin:"4px 0 4px"},wishRow:{display:"flex",alignItems:"center",gap:10,width:"100%",textAlign:"left",border:"1px solid var(--border)",background:"var(--surface)",borderRadius:10,padding:"10px 12px",cursor:"pointer",fontFamily:"inherit"},wishRowOn:{borderColor:"var(--accent-strong)",background:"var(--hover)",boxShadow:"0 0 0 1px var(--accent-strong)"},wishRowOver:{opacity:.5,cursor:"not-allowed"},wishRank:{fontSize:12,fontWeight:800,color:"var(--text-3)",fontFamily:"'Fraunces',Georgia,serif",flexShrink:0},wishName:{flex:1,fontSize:13.5,fontWeight:700,color:"var(--text)",minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},wishCost:{fontSize:13,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--accent-strong)",flexShrink:0},wishEmpty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"20px 0"},heroLabel:{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",opacity:.85},heroVal:{fontSize:44,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:2,lineHeight:1.05},heroSub:{fontSize:12.5,opacity:.9,marginTop:6},heroBtns:{display:"flex",gap:10,marginTop:16,justifyContent:"center"},heroBtnSolid:{border:"none",background:"#fff",color:"var(--accent-strong)",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},heroBtnGhost:{border:"1px solid rgba(255,255,255,0.6)",background:"transparent",color:"#fff",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},btnDisabled:{opacity:.45,cursor:"not-allowed"},statRow:{display:"flex",gap:10,marginBottom:14},statCard:{flex:1,background:"var(--surface)",borderRadius:12,padding:"12px 14px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},threeDayTitle:{fontSize:13,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:84,fontSize:11.5,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap"},tbTrack:{flex:1,height:14,background:"var(--surface-2)",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:76,fontSize:11.5,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"},statVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},statLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},card:{background:"var(--surface)",borderRadius:16,padding:"18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:10,flexWrap:"wrap"},periodTotal:{fontSize:13,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text-2)"},periodRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},periodChip:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},periodChipOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},collapseHint:{fontSize:12,fontWeight:700,color:"var(--accent)"},sectionHead:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,flexWrap:"wrap"},sectionHeadRight:{display:"flex",alignItems:"center",gap:12},collapseLink:{border:"none",background:"none",cursor:"pointer",padding:0,fontFamily:"inherit",fontSize:12,fontWeight:700,color:"var(--accent)"},cardOff:{opacity:.62},toggle:{border:"none",cursor:"pointer",width:40,height:22,borderRadius:11,padding:2,display:"flex",alignItems:"center",transition:"background 0.15s",flexShrink:0},toggleKnob:{width:18,height:18,borderRadius:"50%",background:"#fff",boxShadow:"0 1px 2px rgba(0,0,0,0.3)"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"12px 0"},splitTrack:{display:"flex",height:16,borderRadius:8,overflow:"hidden",marginTop:12,marginBottom:12,border:"1px solid var(--border)"},legendRow:{display:"flex",gap:16,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:600,color:"var(--text-2)"},legendDot:{width:10,height:10,borderRadius:3,flexShrink:0},usagePieBlock:{marginTop:16,paddingTop:14,borderTop:"1px solid var(--border)"},usagePieTitle:{fontSize:12.5,fontWeight:700,color:"var(--text-2)",marginBottom:6},pieWrap:{display:"flex",alignItems:"center",gap:20,flexWrap:"wrap",marginTop:6},pieChart:{position:"relative",width:130,height:130,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:78,height:78,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:14,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:10},pieLegRow:{display:"flex",alignItems:"center",gap:8},pieLegName:{flex:1,fontSize:13.5,fontWeight:600},pieLegPct:{fontSize:13,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",width:46,textAlign:"right"},pieLegMin:{fontSize:12,color:"var(--text-3)",fontWeight:600,minWidth:64,textAlign:"right"},rows:{display:"flex",flexDirection:"column",gap:2},row:{display:"flex",alignItems:"center",gap:8,padding:"7px 0",borderBottom:"1px solid var(--border)"},dot:{width:10,height:10,borderRadius:3,flexShrink:0},rowName:{flex:1,fontSize:13.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},rowMeta:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,flexShrink:0},rowAmt:{fontSize:13.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",flexShrink:0,minWidth:64,textAlign:"right"},del:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",fontSize:16,lineHeight:1,padding:"0 2px",flexShrink:0},totalRow:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:10,marginTop:4,fontSize:14,fontWeight:700},totalVal:{fontSize:16,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},rateActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:14},rateCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},rateSave:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},rateGrid:{display:"flex",flexDirection:"column",gap:10},rateRow:{display:"flex",alignItems:"center",gap:8},rateName:{flex:1,fontSize:14,fontWeight:600},rateInputWrap:{display:"flex",alignItems:"center",gap:3,border:"1px solid var(--border)",borderRadius:9,padding:"4px 10px",background:"var(--surface-2)"},unitSign:{fontSize:14,color:"var(--text-2)",fontWeight:600},rateInput:{border:"none",background:"none",outline:"none",width:64,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},unit:{fontSize:12,color:"var(--text-3)",fontWeight:600},note:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",fontStyle:"italic",marginTop:4}};function I1(){return t.jsx("div",{style:Nn.page,children:t.jsxs("div",{style:Nn.card,children:[t.jsxs("div",{style:Nn.brand,children:[t.jsx("div",{style:Nn.logo,children:"B"}),t.jsx("span",{style:Nn.brandName,children:"Anvil"})]}),t.jsx("h1",{style:Nn.title,children:"Welcome to Anvil"}),t.jsx("p",{style:Nn.sub,children:"Sign in with Google to continue."}),t.jsxs("button",{onClick:()=>_.signInWithGoogle(),style:Nn.googleBtn,children:[t.jsx(B1,{}),"Sign in with Google"]})]})})}function B1(){return t.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[t.jsx("path",{fill:"#4285F4",d:"M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84c-.21 1.13-.85 2.09-1.81 2.73v2.27h2.92c1.71-1.57 2.69-3.88 2.69-6.64z"}),t.jsx("path",{fill:"#34A853",d:"M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.27c-.81.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.71H.96v2.34C2.44 15.98 5.48 18 9 18z"}),t.jsx("path",{fill:"#FBBC05",d:"M3.97 10.7c-.18-.54-.28-1.11-.28-1.7s.1-1.16.28-1.7V4.96H.96A8.997 8.997 0 0 0 0 9c0 1.45.35 2.83.96 4.04l3.01-2.34z"}),t.jsx("path",{fill:"#EA4335",d:"M9 3.58c1.32 0 2.51.45 3.44 1.35l2.59-2.59C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l3.01 2.34C4.68 5.16 6.66 3.58 9 3.58z"})]})}const Nn={page:{minHeight:"100vh",display:"grid",placeItems:"center",background:"var(--bg)",fontFamily:"'Inter',system-ui,sans-serif",padding:20},card:{width:"100%",maxWidth:380,background:"var(--surface)",borderRadius:16,padding:"32px 28px",boxShadow:"0 4px 24px rgba(0,0,0,0.08)",display:"flex",flexDirection:"column",textAlign:"center"},brand:{display:"flex",alignItems:"center",justifyContent:"center",gap:9,marginBottom:20},logo:{width:32,height:32,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},brandName:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},title:{fontSize:22,fontWeight:700,margin:"0 0 4px",fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},sub:{fontSize:13.5,color:"var(--text-3)",margin:"0 0 24px"},googleBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,border:"1px solid var(--border)",background:"#fff",color:"#26241F",padding:"12px",borderRadius:10,fontSize:14.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}};function R1(e=600){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const Wp=["Salary","Stocks","Business","Interest","Rent","Gift","Other"],E1=["Bills","EMI","Rent","Food","Shopping","Transport","Health","Entertainment","Education","Other"],Mp=["Stocks","Mutual Fund","SIP","Fixed Deposit","Gold","Real Estate","PPF/EPF","Crypto","Other"],D1={Salary:"#4C9A6B",Stocks:"#3A7CA5",Business:"#C9A227",Interest:"#8268B0",Gift:"#C2773B",Bills:"#C2536B",EMI:"#A23E57",Food:"#E08E45",Shopping:"#8268B0",Transport:"#3A7CA5",Health:"#4C9A6B",Entertainment:"#C9A227",Education:"#5B7C99",Rent:"#5B8C5A",Other:"#9A968C"},Og=e=>D1[e]||"#9A968C",A1={Stocks:"#2F6B4F","Mutual Fund":"#3E9E6B",SIP:"#4FAE7E","Fixed Deposit":"#6BBE92",Gold:"#8ECDA8","Real Estate":"#1F5C3F","PPF/EPF":"#5BAE83",Crypto:"#7FC79E",Other:"#9AD4B3"},F1=e=>A1[e]||"#4C9A6B",pi="#3E9E6B",Tn="#D1556E",cn="#3A7CA5",yd="#8268B0",af=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,wo=af(new Date),W1=[{id:"month",label:"This month"},{id:"last",label:"Last month"},{id:"year",label:"This year"},{id:"all",label:"All time"}];function M1(e,r){const n=new Date;return e==="month"?lr(n,r):e==="last"?lr(n,r,-1):e==="year"?[af(new Date(n.getFullYear(),0,1)),wo]:["0000-01-01","9999-12-31"]}function _1(){const e=ho(),[r,n]=c.useState("overview"),[o,i]=c.useState([]),[s,a]=c.useState([]),[l,d]=c.useState([]),[g,m]=c.useState([]),[f,h]=c.useState([]),[T,D]=c.useState(!1),I=c.useCallback(()=>Promise.all([_.getTxns(),_.getExpenses(),_.getInvestments()]).then(([C,k,x])=>(i(C),a(k.categories),d(k.logs),m(x),_.getFixedItems())).then(h).then(()=>D(!0)).catch(()=>D(!0)),[]);c.useEffect(()=>{I()},[I]);const z=c.useMemo(()=>{const C={};return s.forEach(k=>C[k.id]=k),C},[s]),b=c.useMemo(()=>l.map(C=>{var k;return{id:`exp-${C.id}`,rawId:C.id,source:"expense",kind:"expense",category:((k=z[C.category_id])==null?void 0:k.name)||"Other",amount:C.amount,note:C.note,date:C.date}}),[l,z]),p=c.useMemo(()=>o.filter(C=>C.kind==="expense").map(C=>({...C,source:"legacy"})),[o]),u=c.useMemo(()=>o.filter(C=>C.kind==="income").map(C=>({...C,source:"legacy"})),[o]),y=c.useMemo(()=>[...u,...p,...b].sort((C,k)=>k.date.localeCompare(C.date)),[u,p,b]),j=C=>Bs(C,e.code);return t.jsxs("div",{style:S.page,children:[t.jsxs("div",{style:S.head,children:[t.jsx("div",{style:S.eyebrow,children:"Anvil · Wallet"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("h1",{style:S.h1,children:"Wallet"}),t.jsx(Yt,{id:"finance"})]}),t.jsx("div",{style:S.subhead,children:"Your money — what comes in, what goes out, and where it's headed."})]}),t.jsx("div",{style:S.tabs,children:[["overview","Overview",kh],["money","Money",Mg],["calc","Calculators",e0]].map(([C,k,x])=>t.jsxs("button",{onClick:()=>n(C),style:{...S.tab,...r===C?S.tabOn:{}},children:[t.jsx(x,{size:15})," ",k]},C))}),r==="overview"&&t.jsx(L1,{txns:y,investments:g,loaded:T,money:j,cur:e}),r==="money"&&t.jsx(N1,{txns:y,expCats:s,investments:g,fixedItems:f,reload:I,money:j,cur:e}),r==="calc"&&t.jsx(H1,{money:j,cur:e})]})}function L1({txns:e,investments:r,loaded:n,money:o,cur:i}){const s=$g(),a=R1(),[l,d]=c.useState("month"),[g,m]=M1(l,s),f=c.useMemo(()=>e.filter(W=>W.date>=g&&W.date<=m),[e,g,m]),h=f.filter(W=>W.kind==="income"),T=f.filter(W=>W.kind==="expense"),D=h.reduce((W,Q)=>W+Q.amount,0),I=T.reduce((W,Q)=>W+Q.amount,0),z=c.useMemo(()=>r.filter(W=>W.date>=g&&W.date<=m),[r,g,m]),b=z.reduce((W,Q)=>W+Q.invested,0),p=I+b,u=D-p,y=r.reduce((W,Q)=>W+Q.invested,0),j=c.useMemo(()=>{const[W,Q]=lr(new Date,s),re=q=>q.date>=W&&q.date<=Q,ge=e.filter(q=>q.kind==="income"&&re(q)).reduce((q,K)=>q+K.amount,0),A=e.filter(q=>q.kind==="expense"&&re(q)).reduce((q,K)=>q+K.amount,0),X=r.filter(q=>re(q)).reduce((q,K)=>q+K.invested,0),ie=ge-A-X,xe=Math.max(1,Math.round((new Date(Q+"T00:00")-new Date(wo+"T00:00"))/864e5)+1);return{remaining:ie,daysLeft:xe,perDay:ie/xe}},[e,r,s]),C=W=>{const Q={};return W.forEach(re=>{Q[re.category]=(Q[re.category]||0)+re.amount}),Object.entries(Q).map(([re,ge])=>({category:re,amount:ge,color:Og(re)})).sort((re,ge)=>ge.amount-re.amount)},k=C(T),x=c.useMemo(()=>{const W={};return z.forEach(Q=>{W[Q.kind]=(W[Q.kind]||0)+Q.invested}),Object.entries(W).map(([Q,re])=>({category:Q,amount:re,color:F1(Q)})).sort((Q,re)=>re.amount-Q.amount)},[z]),B=[...k,...x];return t.jsxs(t.Fragment,{children:[t.jsx("div",{style:S.presetRow,children:W1.map(W=>t.jsx("button",{onClick:()=>d(W.id),style:{...S.preset,...l===W.id?S.presetOn:{}},children:W.label},W.id))}),t.jsxs("div",{style:{...S.sumGrid,gridTemplateColumns:a?"repeat(2,1fr)":"repeat(4,1fr)"},children:[t.jsx(pa,{icon:t.jsx(Uy,{size:16}),label:"Income",value:o(D),color:pi}),t.jsx(pa,{icon:t.jsx(jh,{size:16}),label:"Expenses",value:o(I),color:Tn}),t.jsx(pa,{icon:t.jsx(rs,{size:16}),label:"Invested",value:o(b),color:cn}),t.jsx(pa,{icon:u>=0?t.jsx(Fh,{size:16}):t.jsx(so,{size:16}),label:"Remaining",value:o(u),color:u>=0?pi:Tn,sub:j.perDay>=0?`≈ ${o(j.perDay)}/day · ${j.daysLeft}d left`:`overspent · ${j.daysLeft}d left`})]}),b>0&&t.jsxs("div",{style:S.investNote,children:[t.jsx(rs,{size:13,color:cn})," ",o(b)," invested this period — counted as outgoing and deducted from what remains."]}),r.length>0&&t.jsxs("div",{style:S.card,children:[t.jsxs("div",{style:S.cardTitleRow,children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(rs,{size:18,color:cn}),t.jsxs("div",{children:[t.jsx("div",{style:S.cardTitle,children:"Assets & investments"}),t.jsx("div",{style:S.cardSub,children:"Total invested across all your holdings, all time"})]})]}),t.jsx("div",{style:{...S.cardTotal,color:cn},children:o(y)})]}),t.jsx($1,{invested:y,investments:r,money:o,cur:i})]}),n?f.length===0&&z.length===0?t.jsx("div",{style:S.card,children:t.jsxs("div",{style:S.muted,children:["No transactions in this period. Add some under the ",t.jsx("b",{children:"Money"})," tab."]})}):t.jsxs(t.Fragment,{children:[t.jsx(O1,{totalIn:D,totalOut:p}),t.jsxs("div",{style:S.twoCol,children:[t.jsx(_p,{title:"Incoming",subtitle:"Where your money comes from",total:D,data:C(h),accent:pi,cur:i}),t.jsx(_p,{title:"Outgoing",subtitle:"Spending + money set aside in investments",total:p,data:B,accent:Tn,cur:i})]})]}):t.jsx("div",{style:S.muted,children:"Loading…"})]})}function $1({invested:e,investments:r,money:n,cur:o}){const[i,s]=c.useState(10),[a,l]=c.useState(""),[d,g]=c.useState(5);c.useEffect(()=>{_.getSetting("invest_forecast_rate").then(k=>{const x=parseFloat(k==null?void 0:k.value);!isNaN(x)&&x>0&&s(x)}).catch(()=>{}),_.getSetting("invest_forecast_stepup").then(k=>{const x=parseFloat(k==null?void 0:k.value);!isNaN(x)&&x>=0&&g(x)}).catch(()=>{}),_.getSetting("invest_forecast_monthly").then(k=>{const x=parseFloat(k==null?void 0:k.value);if(!isNaN(x)&&x>=0){l(x);return}const B=new Set((r||[]).map(W=>(W.date||"").slice(0,7)).filter(Boolean));B.size>0&&l(Math.round(e/B.size/100)*100)}).catch(()=>{})},[]);const m=(k,x,B=0)=>{const W=parseFloat(x);!isNaN(W)&&W>=B&&_.setSetting(k,W).catch(()=>{})},f=k=>{s(k),m("invest_forecast_rate",k,.01)},h=k=>{l(k),m("invest_forecast_monthly",k)},T=k=>{g(k),m("invest_forecast_stepup",k)},D=parseFloat(i),I=!isNaN(D)&&D>0?D:10,z=Math.max(0,parseFloat(a)||0),b=Math.max(0,parseFloat(d)||0),p=k=>{let x=e,B=z*12,W=e;for(let Q=1;Q<=k;Q++)x=(x+B)*(1+I/100),W+=B,B*=1+b/100;return{value:x,putIn:W}},y=Array.from({length:20},(k,x)=>x+1).map(k=>({mo:k*12,...p(k)})),j=Math.max(...y.map(k=>k.value),1),C=y[y.length-1];return t.jsxs("div",{style:S.forecastWrap,children:[t.jsxs("div",{style:S.forecastHead,children:[t.jsxs("div",{children:[t.jsx("div",{style:S.forecastTitle,children:"Growth forecast"}),t.jsxs("div",{style:S.cardSub,children:[n(z),"/month",b>0?`, stepping up ${b}% yearly (${n(z*(1+b/100))}/mo from year 2)`:""]})]}),t.jsxs("div",{style:S.forecastInputs,children:[t.jsxs("label",{style:S.rateWrap,title:"How much you invest every month",children:[t.jsx("span",{style:S.rateUnit,children:o.symbol}),t.jsx("input",{type:"number",min:"0",step:"500",value:a,placeholder:"15000",onChange:k=>h(k.target.value),style:{...S.rateInput,width:76,textAlign:"left"}}),t.jsx("span",{style:S.rateUnit,children:"/ mo"})]}),t.jsxs("label",{style:S.rateWrap,title:"Yearly increase of the monthly amount",children:[t.jsx("span",{style:S.rateUnit,children:"+"}),t.jsx("input",{type:"number",min:"0",max:"100",step:"1",value:d,onChange:k=>T(k.target.value),style:{...S.rateInput,width:40}}),t.jsx("span",{style:S.rateUnit,children:"% / yr"})]}),t.jsxs("label",{style:S.rateWrap,title:"Expected annual return",children:[t.jsx("input",{type:"number",min:"1",max:"100",step:"0.5",value:i,onChange:k=>f(k.target.value),style:S.rateInput}),t.jsx("span",{style:S.rateUnit,children:"% / yr"})]})]})]}),t.jsx("div",{style:S.forecastBarsWrap,children:t.jsx("div",{style:S.forecastBars,children:y.map((k,x)=>t.jsxs("div",{style:S.fBarCol,children:[t.jsx("div",{style:S.fBarVal,children:Sc(k.value,o.code)}),t.jsx("div",{style:S.fBarTrack,children:t.jsx("div",{style:{...S.fBar,height:`${Math.max(6,k.value/j*100)}%`,opacity:.4+.6*(x/(y.length-1))}})}),t.jsxs("div",{style:S.fBarLbl,children:[k.mo/12,"y"]})]},k.mo))})}),t.jsxs("div",{style:S.forecastNote,children:["In 20 years at ",I,"% p.a. → ",t.jsx("b",{children:n(C.value)})," (you'd put in ",n(C.putIn),", growth adds ",n(Math.max(0,C.value-C.putIn)),")"]})]})}function pa({icon:e,wideIcon:r,label:n,value:o,color:i,style:s,wide:a,sub:l}){return a?t.jsxs("div",{style:{...S.sumCard,...S.sumCardWide,...s},children:[t.jsx("div",{style:{...S.sumIconWide,color:i,background:i+"1A"},children:r||e}),t.jsxs("div",{style:S.sumWideText,children:[t.jsx("div",{style:S.sumLabel,children:n}),t.jsx("div",{style:{...S.sumVal,color:i,marginTop:0},children:o}),l&&t.jsx("div",{style:S.sumSub,children:l})]})]}):t.jsxs("div",{style:{...S.sumCard,...s},children:[t.jsx("div",{style:{...S.sumIcon,color:i,background:i+"1A"},children:e}),t.jsx("div",{style:S.sumLabel,children:n}),t.jsx("div",{style:{...S.sumVal,color:i},children:o}),l&&t.jsx("div",{style:S.sumSub,children:l})]})}function _p({title:e,subtitle:r,total:n,data:o,accent:i,cur:s}){const[a,l]=c.useState(null);let d=0;const g=o.map(h=>{const T=n>0?d/n*100:0;d+=h.amount;const D=n>0?d/n*100:0;return{...h,start:T,end:D,color:h.color||Og(h.category),pct:n>0?h.amount/n*100:0}}),m=a!=null?g[a]:null,f=g.length===1;return t.jsxs("div",{style:S.card,children:[t.jsxs("div",{style:S.cardTitleRow,children:[t.jsxs("div",{children:[t.jsx("div",{style:{...S.cardTitle,color:i},children:e}),t.jsx("div",{style:S.cardSub,children:r})]}),t.jsx("div",{style:{...S.cardTotal,color:i},children:Bs(n,s.code)})]}),o.length===0?t.jsx("div",{style:S.muted,children:"Nothing logged."}):t.jsxs("div",{style:S.pieWrap,children:[t.jsxs("div",{style:S.pieChart,onMouseLeave:()=>l(null),children:[t.jsx("svg",{viewBox:"0 0 120 120",style:S.pieSvg,children:g.map((h,T)=>t.jsx("path",{d:P1(h.start,h.end,T===a,f),fill:h.color,onMouseEnter:()=>l(T),style:{cursor:"pointer",transition:"transform 0.15s, filter 0.15s",filter:T===a?"brightness(1.08)":"none"}},h.category))}),t.jsx("div",{style:{...S.pieHole,...m?{transform:"translate(-50%,-50%) scale(1.06)",boxShadow:`0 0 0 4px ${m.color}33`}:{}},children:m?t.jsxs(t.Fragment,{children:[t.jsx("span",{style:{...S.pieHoleVal,color:m.color,fontSize:13},children:Sc(m.amount,s.code)}),t.jsxs("span",{style:S.pieHoleLbl,children:[Math.round(m.pct),"% · ",m.category]})]}):t.jsxs(t.Fragment,{children:[t.jsx("span",{style:S.pieHoleVal,children:Sc(n,s.code)}),t.jsx("span",{style:S.pieHoleLbl,children:"total"})]})})]}),t.jsx("div",{style:S.pieLegend,children:g.map((h,T)=>t.jsxs("div",{style:{...S.legendRow,...T===a?S.legendRowOn:{}},onMouseEnter:()=>l(T),onMouseLeave:()=>l(null),children:[t.jsx("span",{style:{...S.dot,background:h.color}}),t.jsx("span",{style:S.legendName,children:h.category}),t.jsxs("span",{style:S.legendPct,children:[Math.round(h.pct),"%"]}),t.jsx("span",{style:S.legendAmt,children:Bs(h.amount,s.code)})]},h.category))})]})]})}function P1(e,r,n,o){const d=n?6:0,g=(C,k,x=0,B=0)=>{const W=C/100*2*Math.PI-Math.PI/2;return[60+x+k*Math.cos(W),60+B+k*Math.sin(W)]},m=(e+r)/2/100*2*Math.PI-Math.PI/2,f=o?0:Math.cos(m)*d,h=o?0:Math.sin(m)*d;if(r-e>=99.999)return`M ${60+f} ${60+h-58} A 58 58 0 1 1 ${60+f-.01} ${60+h-58} L ${60+f-.01} ${60+h-35} A 35 35 0 1 0 ${60+f} ${60+h-35} Z`;const[T,D]=g(e,58,f,h),[I,z]=g(r,58,f,h),[b,p]=g(r,35,f,h),[u,y]=g(e,35,f,h),j=r-e>50?1:0;return`M ${T} ${D} A 58 58 0 ${j} 1 ${I} ${z} L ${b} ${p} A 35 35 0 ${j} 0 ${u} ${y} Z`}function O1({totalIn:e,totalOut:r}){const n=e-r,o=e>0?n/e:0,i=e===0?0:Math.max(0,Math.min(100,Math.round(50+o*100)));let s,a,l;e===0?(s="No income logged",a="#9A968C",l="Add your income to see your financial health."):o>=.3?(s="Excellent",a="#3E9E6B",l="You're saving 30%+ of income — keep investing the surplus."):o>=.2?(s="Healthy",a="#4C9A6B",l="Solid savings rate. Consider automating a SIP with the surplus."):o>=.1?(s="Okay",a="#C9A227",l="Decent, but aim for 20%+. Trim your biggest expense category."):o>=0?(s="Tight",a="#C2773B",l="You're saving very little. Review recurring bills and EMIs."):(s="Overspending",a="#D1556E",l="You're spending more than you earn. Cut back to avoid debt.");const d=e>0?Math.min(100,Math.round(r/e*100)):0;return t.jsxs("div",{style:S.card,children:[t.jsxs("div",{style:S.cardTitleRow,children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(x0,{size:18,color:a}),t.jsxs("div",{children:[t.jsx("div",{style:S.cardTitle,children:"Financial health"}),t.jsx("div",{style:S.cardSub,children:"Based on your savings rate this period"})]})]}),t.jsxs("div",{style:{textAlign:"right"},children:[t.jsx("div",{style:{...S.healthScore,color:a},children:e===0?"—":i}),t.jsx("div",{style:{...S.healthStatus,color:a},children:s})]})]}),t.jsx("div",{style:S.gaugeTrack,children:t.jsx("div",{style:{...S.gaugeFill,width:`${e===0?0:i}%`,background:a}})}),t.jsxs("div",{style:S.healthStats,children:[t.jsxs("div",{style:S.healthStat,children:[t.jsxs("span",{style:S.healthStatV,children:[e>0?Math.round(o*100):0,"%"]}),t.jsx("span",{style:S.healthStatL,children:"Savings rate"})]}),t.jsxs("div",{style:S.healthStat,children:[t.jsxs("span",{style:S.healthStatV,children:[d,"%"]}),t.jsx("span",{style:S.healthStatL,children:"of income spent"})]})]}),t.jsx("div",{style:{...S.tip,borderColor:a+"55",background:a+"12",color:a},children:l})]})}function N1({txns:e,expCats:r,investments:n,fixedItems:o,reload:i,money:s,cur:a}){const[l,d]=c.useState(""),[g,m]=c.useState("Salary"),[f,h]=c.useState(wo),[T,D]=c.useState(""),[I,z]=c.useState(null),[b,p]=c.useState(null),[u,y]=c.useState(null),{deleteItem:j,toasts:C,handleUndo:k,handleDismiss:x}=Cr(_.deleteTxn,_.restoreTxn,i),{deleteItem:B,toasts:W,handleUndo:Q,handleDismiss:re}=Cr(_.deleteExpenseLog,_.restoreExpenseLog,i),{deleteItem:ge,toasts:A,handleUndo:X,handleDismiss:ie}=Cr(_.deleteInvestment,_.restoreInvestment,i),xe=()=>{var E;return y({id:null,kind:"expense",name:"",amount:"",category_id:((E=r[0])==null?void 0:E.id)||"",invest_kind:"Stocks",note:""})},q=E=>{var w;return y({id:E.id,kind:E.kind,name:E.name,amount:String(E.amount),category_id:E.category_id||((w=r[0])==null?void 0:w.id)||"",invest_kind:E.invest_kind||"Stocks",note:E.note||""})},K=async()=>{const E=u.name.trim(),w=parseFloat(u.amount)||0;if(!E||w<=0)return;const oe={kind:u.kind,name:E,amount:w,note:u.note.trim(),...u.kind==="expense"?{category_id:Number(u.category_id)}:{invest_kind:u.invest_kind}};u.id?await _.updateFixedItem(u.id,oe):await _.createFixedItem(oe),y(null),i()},de=async E=>{window.confirm(`Stop "${E.name}" from auto-posting each month? Past entries it already created will stay.`)&&(await _.deleteFixedItem(E.id),i())},J=async E=>{await _.updateFixedItem(E.id,{active:!E.active}),i()},R=()=>p({id:null,name:"",kind:"Stocks",invested:"",current_value:"",date:wo,note:""}),O=E=>p({id:E.id,name:E.name,kind:E.kind,invested:String(E.invested),current_value:String(E.current_value),date:E.date,note:E.note||""}),G=async()=>{const E=b.name.trim(),w=parseFloat(b.invested)||0,oe=parseFloat(b.current_value)||0;if(!E)return;const he={name:E,kind:b.kind,invested:w,current_value:oe,note:b.note.trim(),date:b.date};b.id?await _.updateInvestment(b.id,he):await _.createInvestment(he),p(null),i()},$=n.reduce((E,w)=>E+w.invested,0),ae=async()=>{const E=parseFloat(l);!E||E<=0||(await _.createTxn({kind:"income",category:g,amount:E,note:T.trim(),date:f}),d(""),D(""),i())},me=E=>z({id:E.id,rawId:E.rawId,source:E.source,kind:E.kind,amount:String(E.amount),category:E.category,date:E.date,note:E.note||""}),Oe=(I==null?void 0:I.source)==="expense"?r.map(E=>E.name):(I==null?void 0:I.kind)==="income"?Wp:E1,Ce=async()=>{const E=parseFloat(I.amount);if(!(!E||E<=0)){if(I.source==="expense"){const w=r.find(oe=>oe.name===I.category);await _.updateExpenseLog(I.rawId,{amount:E,note:I.note.trim(),date:I.date,...w?{category_id:w.id}:{}})}else await _.updateTxn(I.id,{kind:I.kind,category:I.category,amount:E,note:I.note.trim(),date:I.date});z(null),i()}},U=E=>{E.source==="expense"?B(E.rawId,E.category):j(E.id,E.category)},P=c.useMemo(()=>{const E={};return e.forEach(w=>{(E[w.date]=E[w.date]||[]).push(w)}),Object.entries(E).sort((w,oe)=>oe[0].localeCompare(w[0]))},[e]),ne=E=>new Date(E+"T00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"});return t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:S.card,children:[t.jsx("div",{style:S.cardTitle,children:"Add income"}),t.jsxs("div",{style:S.cardSub,children:["Expenses are added from the ",t.jsx("b",{children:"Expenses"})," section and show up here automatically."]}),t.jsxs("div",{style:S.formGrid,children:[t.jsx("input",{type:"number",inputMode:"decimal",placeholder:"Amount",value:l,onChange:E=>d(E.target.value),onKeyDown:E=>E.key==="Enter"&&ae(),style:S.input,autoFocus:!0}),t.jsx(cr,{value:g,options:Wp,onChange:m}),t.jsx("input",{type:"date",value:f,max:wo,onChange:E=>h(E.target.value),style:S.input})]}),t.jsx("input",{placeholder:"Note (optional)",value:T,onChange:E=>D(E.target.value),onKeyDown:E=>E.key==="Enter"&&ae(),style:{...S.input,marginTop:8}}),t.jsxs("button",{onClick:ae,style:{...S.addBtn,background:pi},children:[t.jsx(mt,{size:15})," Add income"]})]}),t.jsxs("div",{style:S.card,children:[t.jsxs("div",{style:S.cardTitleRow,children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(M0,{size:18,color:yd}),t.jsxs("div",{children:[t.jsx("div",{style:S.cardTitle,children:"Fixed items"}),t.jsx("div",{style:S.cardSub,children:"EMI, rent, SIP… auto-posted at the start of every billing cycle"})]})]}),t.jsxs("button",{onClick:xe,style:{...S.invAddBtn,background:yd},children:[t.jsx(mt,{size:14})," Add"]})]}),o.length===0?t.jsx("div",{style:S.muted,children:"No fixed items yet — add an EMI or rent to auto-post it every cycle."}):t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:o.map(E=>{var oe;const w=E.kind==="expense"?((oe=r.find(he=>he.id===E.category_id))==null?void 0:oe.name)||"Other":E.invest_kind||"Other";return t.jsxs("div",{style:{...S.invRow,opacity:E.active?1:.5},children:[t.jsx("span",{style:{...S.txnDot,background:E.kind==="expense"?Tn:cn}}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:S.txnCat,children:E.name}),t.jsxs("div",{style:S.txnNote,children:[E.kind==="expense"?"Fixed expense":"Fixed investment"," · ",w]})]}),t.jsxs("span",{style:{...S.txnAmt,color:E.kind==="expense"?Tn:cn},children:[s(E.amount),"/mo"]}),t.jsx("button",{onClick:()=>J(E),style:S.delBtn,title:E.active?"Pause":"Resume",children:E.active?t.jsx(Ah,{size:13}):t.jsx(ll,{size:13})}),t.jsx("button",{onClick:()=>q(E),style:S.delBtn,children:t.jsx(wt,{size:13})}),t.jsx("button",{onClick:()=>de(E),style:S.delBtn,children:t.jsx(De,{size:14})})]},E.id)})})]}),t.jsxs("div",{style:S.card,children:[t.jsxs("div",{style:S.cardTitleRow,children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(rs,{size:18,color:cn}),t.jsxs("div",{children:[t.jsx("div",{style:S.cardTitle,children:"Investments"}),t.jsx("div",{style:S.cardSub,children:"Asset generation — money you've set aside"})]})]}),t.jsxs("button",{onClick:R,style:S.invAddBtn,children:[t.jsx(mt,{size:14})," Add"]})]}),n.length===0?t.jsx("div",{style:S.muted,children:"No investments tracked yet."}):t.jsxs(t.Fragment,{children:[t.jsx("div",{style:S.healthStats,children:t.jsxs("div",{style:S.healthStat,children:[t.jsx("span",{style:S.healthStatV,children:s($)}),t.jsx("span",{style:S.healthStatL,children:"Total invested"})]})}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,marginTop:4},children:n.map(E=>t.jsxs("div",{style:S.invRow,children:[t.jsx("span",{style:{...S.txnDot,background:cn}}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:S.txnCat,children:E.name}),t.jsxs("div",{style:S.txnNote,children:[E.kind," · ",E.date]})]}),t.jsx("div",{style:S.txnAmt,children:s(E.invested)}),t.jsx("button",{onClick:()=>O(E),style:S.delBtn,children:t.jsx(wt,{size:13})}),t.jsx("button",{onClick:()=>ge(E.id,E.name),style:S.delBtn,children:t.jsx(De,{size:14})})]},E.id))})]})]}),t.jsxs("div",{style:S.card,children:[t.jsx("div",{style:S.cardTitle,children:"History"}),P.length===0?t.jsx("div",{style:S.muted,children:"No transactions yet."}):t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:P.map(([E,w])=>t.jsxs("div",{children:[t.jsx("div",{style:S.dateHead,children:ne(E)}),w.map(oe=>(I==null?void 0:I.id)===oe.id?t.jsxs("div",{style:S.editTxn,children:[t.jsxs("div",{style:S.formGrid,children:[t.jsx("input",{type:"number",inputMode:"decimal",value:I.amount,onChange:he=>z({...I,amount:he.target.value}),style:S.input}),t.jsx(cr,{value:I.category,options:Oe,onChange:he=>z({...I,category:he})}),t.jsx("input",{type:"date",value:I.date,max:wo,onChange:he=>z({...I,date:he.target.value}),style:S.input})]}),t.jsx("input",{placeholder:"Note (optional)",value:I.note,onChange:he=>z({...I,note:he.target.value}),onKeyDown:he=>he.key==="Enter"&&Ce(),style:{...S.input,marginTop:8}}),t.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[t.jsxs("button",{onClick:()=>z(null),style:S.editCancel,children:[t.jsx(De,{size:14})," Cancel"]}),t.jsxs("button",{onClick:Ce,style:{...S.addBtn,marginTop:0,flex:1,background:I.kind==="income"?pi:Tn},children:[t.jsx(He,{size:15})," Save"]})]})]},oe.id):t.jsxs("div",{style:S.txnRow,children:[t.jsx("span",{style:{...S.txnDot,background:Og(oe.category)}}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:S.txnCat,children:oe.category}),oe.note&&t.jsx("div",{style:S.txnNote,children:oe.note})]}),t.jsxs("span",{style:{...S.txnAmt,color:oe.kind==="income"?pi:Tn},children:[oe.kind==="income"?"+":"−",s(oe.amount)]}),t.jsx("button",{onClick:()=>me(oe),style:S.delBtn,children:t.jsx(wt,{size:13})}),t.jsx("button",{onClick:()=>U(oe),style:S.delBtn,children:t.jsx(De,{size:14})})]},oe.id))]},E))})]}),b&&t.jsx("div",{style:S.overlay,onClick:()=>p(null),children:t.jsxs("div",{style:S.modal,onClick:E=>E.stopPropagation(),children:[t.jsxs("div",{style:S.modalHead,children:[t.jsx("span",{style:S.modalTitle,children:b.id?"Edit investment":"New investment"}),t.jsx("button",{onClick:()=>p(null),style:S.iconBtnPlain,children:t.jsx(De,{size:16})})]}),t.jsx("label",{style:S.label,children:"Name *"}),t.jsx("input",{autoFocus:!0,value:b.name,onChange:E=>p(w=>({...w,name:E.target.value})),placeholder:"e.g. Nifty Index Fund, HDFC FD…",style:S.input}),t.jsx("label",{style:S.label,children:"Type"}),t.jsx(cr,{value:b.kind,options:Mp,onChange:E=>p(w=>({...w,kind:E}))}),t.jsxs("div",{style:S.formGrid,children:[t.jsxs("div",{children:[t.jsx("label",{style:S.label,children:"Invested"}),t.jsx("input",{type:"number",inputMode:"decimal",value:b.invested,onChange:E=>p(w=>({...w,invested:E.target.value})),placeholder:"0",style:S.input})]}),t.jsxs("div",{children:[t.jsx("label",{style:S.label,children:"Current value"}),t.jsx("input",{type:"number",inputMode:"decimal",value:b.current_value,onChange:E=>p(w=>({...w,current_value:E.target.value})),placeholder:"0",style:S.input})]}),t.jsxs("div",{children:[t.jsx("label",{style:S.label,children:"Date"}),t.jsx("input",{type:"date",value:b.date,max:wo,onChange:E=>p(w=>({...w,date:E.target.value})),style:S.input})]})]}),t.jsx("label",{style:S.label,children:"Note (optional)"}),t.jsx("input",{value:b.note,onChange:E=>p(w=>({...w,note:E.target.value})),placeholder:"Folio no., broker, etc.",style:S.input}),t.jsxs("div",{style:S.modalActions,children:[t.jsx("button",{onClick:()=>p(null),style:S.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:G,disabled:!b.name.trim(),style:{...S.saveBtn,...b.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," ",b.id?"Save":"Add"]})]})]})}),u&&t.jsx("div",{style:S.overlay,onClick:()=>y(null),children:t.jsxs("div",{style:S.modal,onClick:E=>E.stopPropagation(),children:[t.jsxs("div",{style:S.modalHead,children:[t.jsx("span",{style:S.modalTitle,children:u.id?"Edit fixed item":"New fixed item"}),t.jsx("button",{onClick:()=>y(null),style:S.iconBtnPlain,children:t.jsx(De,{size:16})})]}),t.jsxs("div",{style:S.kindToggle,children:[t.jsxs("button",{onClick:()=>y(E=>({...E,kind:"expense"})),style:{...S.kindBtn,...u.kind==="expense"?{background:Tn,color:"#fff",borderColor:Tn}:{}},children:[t.jsx(jh,{size:15})," Expense"]}),t.jsxs("button",{onClick:()=>y(E=>({...E,kind:"investment"})),style:{...S.kindBtn,...u.kind==="investment"?{background:cn,color:"#fff",borderColor:cn}:{}},children:[t.jsx(rs,{size:15})," Investment"]})]}),t.jsx("label",{style:S.label,children:"Name *"}),t.jsx("input",{autoFocus:!0,value:u.name,onChange:E=>y(w=>({...w,name:E.target.value})),placeholder:u.kind==="expense"?"e.g. Home loan EMI, Rent…":"e.g. Monthly SIP — Nifty Index",style:S.input}),t.jsxs("div",{style:S.formGrid,children:[t.jsxs("div",{children:[t.jsx("label",{style:S.label,children:"Amount / month"}),t.jsx("input",{type:"number",inputMode:"decimal",value:u.amount,onChange:E=>y(w=>({...w,amount:E.target.value})),placeholder:"0",style:S.input})]}),t.jsxs("div",{children:[t.jsx("label",{style:S.label,children:u.kind==="expense"?"Category":"Type"}),u.kind==="expense"?t.jsx(cr,{value:u.category_id,options:r.map(E=>({value:E.id,label:E.name})),onChange:E=>y(w=>({...w,category_id:E}))}):t.jsx(cr,{value:u.invest_kind,options:Mp,onChange:E=>y(w=>({...w,invest_kind:E}))})]})]}),t.jsx("label",{style:S.label,children:"Note (optional)"}),t.jsx("input",{value:u.note,onChange:E=>y(w=>({...w,note:E.target.value})),placeholder:"Loan account no., etc.",style:S.input}),t.jsx("p",{style:S.fixedHint,children:"Posts automatically at the start of every billing cycle (set in Settings → Currency). This one posts immediately for the current cycle when you save."}),t.jsxs("div",{style:S.modalActions,children:[t.jsx("button",{onClick:()=>y(null),style:S.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:K,disabled:!u.name.trim()||!(parseFloat(u.amount)>0),style:{...S.saveBtn,background:yd,...!u.name.trim()||!(parseFloat(u.amount)>0)?{opacity:.5,cursor:"not-allowed"}:{}},children:[t.jsx(He,{size:15})," ",u.id?"Save":"Add"]})]})]})}),t.jsx(Tr,{toasts:C,onUndo:k,onDismiss:x}),t.jsx(Tr,{toasts:W,onUndo:Q,onDismiss:re}),t.jsx(Tr,{toasts:A,onUndo:X,onDismiss:ie})]})}function H1({money:e,cur:r}){return t.jsxs(t.Fragment,{children:[t.jsx(G1,{money:e,cur:r}),t.jsx(V1,{money:e,cur:r})]})}function zo({label:e,value:r,set:n,min:o,max:i,step:s,suffix:a}){return t.jsxs("div",{style:S.field,children:[t.jsxs("div",{style:S.fieldTop,children:[t.jsx("span",{style:S.fieldLabel,children:e}),t.jsxs("div",{style:S.fieldInputWrap,children:[t.jsx("input",{type:"number",value:r,onChange:l=>n(l.target.value),style:S.fieldInput}),a&&t.jsx("span",{style:S.fieldSuffix,children:a})]})]}),t.jsx("input",{type:"range",min:o,max:i,step:s,value:r,onChange:l=>n(l.target.value),style:S.range})]})}function G1({money:e,cur:r}){const[n,o]=c.useState(3e4),[i,s]=c.useState(12),[a,l]=c.useState(15),{invested:d,futureValue:g,gains:m,yearly:f}=c.useMemo(()=>{const T=Math.max(0,parseFloat(n)||0),D=Math.max(0,parseFloat(i)||0),I=Math.max(0,Math.min(60,parseInt(a)||0)),z=D/12/100,b=j=>j<=0?0:z===0?T*j:T*((Math.pow(1+z,j)-1)/z)*(1+z),p=[];for(let j=1;j<=I;j++)p.push({year:j,invested:T*12*j,value:b(j*12)});const u=b(I*12),y=T*12*I;return{invested:y,futureValue:u,gains:u-y,yearly:p}},[n,i,a]),h=Math.max(1,...f.map(T=>T.value));return t.jsxs("div",{style:S.card,children:[t.jsx("div",{style:S.cardTitleRow,children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(Fh,{size:18,color:"#3A7CA5"}),t.jsxs("div",{children:[t.jsx("div",{style:S.cardTitle,children:"SIP projection"}),t.jsx("div",{style:S.cardSub,children:"Mutual fund / SIP future value"})]})]})}),t.jsx(zo,{label:"Monthly investment",value:n,set:o,min:500,max:5e5,step:500,suffix:r.symbol}),t.jsx(zo,{label:"Expected return (p.a.)",value:i,set:s,min:1,max:30,step:.5,suffix:"%"}),t.jsx(zo,{label:"Time period",value:a,set:l,min:1,max:40,step:1,suffix:"yrs"}),t.jsxs("div",{style:S.resultHero,children:[t.jsx("div",{style:S.resultLabel,children:"Projected wealth"}),t.jsx("div",{style:{...S.resultVal,color:"#3A7CA5"},children:e(g)})]}),t.jsxs("div",{style:S.splitRow,children:[t.jsxs("div",{style:S.splitItem,children:[t.jsx("span",{style:S.splitV,children:e(d)}),t.jsx("span",{style:S.splitL,children:"Invested"})]}),t.jsxs("div",{style:S.splitItem,children:[t.jsx("span",{style:{...S.splitV,color:"#3E9E6B"},children:e(m)}),t.jsx("span",{style:S.splitL,children:"Est. returns"})]})]}),f.length>0&&t.jsxs("div",{style:S.chartWrap,children:[t.jsx("div",{style:S.chartBars,children:f.map(T=>t.jsx("div",{style:S.chartCol,title:`Year ${T.year}: ${e(T.value)}`,children:t.jsx("div",{style:{...S.chartStack,height:`${T.value/h*100}%`},children:t.jsx("div",{style:{...S.chartGain,height:`${(1-T.invested/T.value)*100}%`}})})},T.year))}),t.jsxs("div",{style:S.chartAxis,children:[t.jsx("span",{children:"Yr 1"}),t.jsxs("span",{style:{marginLeft:"auto"},children:["Yr ",f.length]})]}),t.jsxs("div",{style:S.legend,children:[t.jsxs("span",{style:S.legendItem,children:[t.jsx("span",{style:{...S.legendDot,background:"#9DBFD6"}})," Invested"]}),t.jsxs("span",{style:S.legendItem,children:[t.jsx("span",{style:{...S.legendDot,background:"#3E9E6B"}})," Returns"]})]})]})]})}function Lp(e,r,n,o=0,i=0){let s=Math.max(0,e-i),a=0,l=0,d=i;const g=1200;for(;s>.01&&l<g;){const m=s*r;let f=n+o,h=f-m;if(h<=0)return{months:1/0,totalInterest:1/0,totalPaid:1/0};h>s&&(h=s,f=s+m),s-=h,a+=m,d+=f,l++}return{months:l,totalInterest:a,totalPaid:d}}const $p=e=>{if(!isFinite(e))return"—";const r=Math.floor(e/12),n=e%12;return(r?`${r}y `:"")+`${n}m`},U1=e=>{if(!isFinite(e))return"—";const r=new Date;return r.setMonth(r.getMonth()+e),r.toLocaleDateString("en-US",{month:"short",year:"numeric"})};function V1({money:e,cur:r}){const[n,o]=c.useState(2e6),[i,s]=c.useState(9),[a,l]=c.useState(20),[d,g]=c.useState(5e5),[m,f]=c.useState("once"),[h,T]=c.useState("tenure"),D=c.useMemo(()=>{const u=Math.max(0,parseFloat(n)||0),y=Math.max(0,parseFloat(i)||0)/12/100,j=Math.max(1,Math.round((parseFloat(a)||0)*12)),C=y===0?u/j:u*y*Math.pow(1+y,j)/(Math.pow(1+y,j)-1);return{P:u,i:y,n:j,emi:C,totalPay:C*j,totalInterest:C*j-u}},[n,i,a]),I=m==="monthly"?"tenure":h,z=c.useMemo(()=>{const{P:u,i:y,n:j,emi:C,totalInterest:k}=D,x=Math.max(0,parseFloat(d)||0);if(x<=0)return null;let B=C,W=j,Q=k,re=D.totalPay;if(m==="once"&&I==="emi"){const ge=Math.max(0,u-x);B=y===0?ge/j:ge*y*Math.pow(1+y,j)/(Math.pow(1+y,j)-1),W=j,Q=B*j-ge,re=x+B*j}else if(m==="once"){const ge=Lp(u,y,C,0,x);W=ge.months,Q=ge.totalInterest,re=ge.totalPaid}else{const ge=Lp(u,y,C,x,0);W=ge.months,Q=ge.totalInterest,re=ge.totalPaid}return{newEMI:B,newMonths:W,newInterest:Q,totalPaid:re,interestSaved:Math.max(0,k-Q),monthsSaved:Math.max(0,j-(isFinite(W)?W:j))}},[D,d,m,I]),b=D.totalPay>0?D.P/D.totalPay*100:0,p=m==="once"?Math.max(1e5,Math.round(D.P)):Math.max(5e4,Math.round(D.emi*3));return t.jsxs("div",{style:S.card,children:[t.jsx("div",{style:S.cardTitleRow,children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(j0,{size:18,color:"#C2536B"}),t.jsxs("div",{children:[t.jsx("div",{style:S.cardTitle,children:"EMI calculator"}),t.jsx("div",{style:S.cardSub,children:"Loan / mortgage monthly payment"})]})]})}),t.jsx(zo,{label:"Loan amount",value:n,set:o,min:5e4,max:5e7,step:5e4,suffix:r.symbol}),t.jsx(zo,{label:"Interest rate (p.a.)",value:i,set:s,min:1,max:24,step:.1,suffix:"%"}),t.jsx(zo,{label:"Tenure",value:a,set:l,min:1,max:30,step:1,suffix:"yrs"}),t.jsxs("div",{style:S.resultHero,children:[t.jsx("div",{style:S.resultLabel,children:"Monthly EMI"}),t.jsx("div",{style:{...S.resultVal,color:"#C2536B"},children:e(D.emi)})]}),t.jsxs("div",{style:S.emiSplitTrack,children:[t.jsx("div",{style:{width:`${b}%`,background:"#5B7C99",height:"100%"}}),t.jsx("div",{style:{width:`${100-b}%`,background:"#C2536B",height:"100%"}})]}),t.jsxs("div",{style:S.splitRow,children:[t.jsxs("div",{style:S.splitItem,children:[t.jsx("span",{style:{...S.splitV,color:"#5B7C99"},children:e(D.P)}),t.jsx("span",{style:S.splitL,children:"Principal"})]}),t.jsxs("div",{style:S.splitItem,children:[t.jsx("span",{style:{...S.splitV,color:"#C2536B"},children:e(D.totalInterest)}),t.jsx("span",{style:S.splitL,children:"Total interest"})]}),t.jsxs("div",{style:S.splitItem,children:[t.jsx("span",{style:S.splitV,children:e(D.totalPay)}),t.jsx("span",{style:S.splitL,children:"Total payable"})]})]}),t.jsx("div",{style:S.subDivider}),t.jsx("div",{style:S.subTitle,children:"Prepayment planner"}),t.jsx("div",{style:S.cardSub,children:"See what an extra payment does to your loan."}),t.jsx("div",{style:{marginTop:14},children:t.jsx(zo,{label:"Prepayment amount",value:d,set:g,min:0,max:p,step:m==="once"?25e3:1e3,suffix:r.symbol})}),t.jsxs("div",{style:S.segGroup,children:[t.jsx("span",{style:S.segLbl,children:"Type"}),t.jsxs("div",{style:S.segRow,children:[t.jsx(ba,{label:"One-time",on:m==="once",onClick:()=>f("once")}),t.jsx(ba,{label:"Every month",on:m==="monthly",onClick:()=>f("monthly")})]})]}),t.jsxs("div",{style:S.segGroup,children:[t.jsx("span",{style:S.segLbl,children:"Strategy"}),t.jsxs("div",{style:S.segRow,children:[t.jsx(ba,{label:"Reduce tenure",on:I==="tenure",onClick:()=>T("tenure")}),t.jsx(ba,{label:"Reduce EMI",on:I==="emi",disabled:m==="monthly",onClick:()=>T("emi")})]})]}),m==="monthly"&&t.jsx("div",{style:S.note,children:"An extra monthly payment always shortens the tenure. Switch to a one-time prepayment to reduce your EMI instead."}),z?t.jsxs("div",{style:S.cmpCard,children:[t.jsxs("div",{style:S.cmpRow,children:[t.jsx("span",{style:S.cmpLbl,children:"New EMI"}),t.jsxs("span",{style:S.cmpVal,children:[e(z.newEMI),z.newEMI<D.emi-1&&t.jsxs("span",{style:S.cmpWas,children:[" was ",e(D.emi)]})]})]}),t.jsxs("div",{style:S.cmpRow,children:[t.jsx("span",{style:S.cmpLbl,children:"New tenure"}),t.jsxs("span",{style:S.cmpVal,children:[$p(z.newMonths)," ",t.jsxs("span",{style:S.cmpWas,children:["· paid off ",U1(z.newMonths)]})]})]}),t.jsxs("div",{style:S.cmpRow,children:[t.jsx("span",{style:S.cmpLbl,children:"Total interest"}),t.jsx("span",{style:S.cmpVal,children:e(z.newInterest)})]}),t.jsxs("div",{style:S.cmpRow,children:[t.jsx("span",{style:S.cmpLbl,children:"Total payable"}),t.jsx("span",{style:S.cmpVal,children:e(z.totalPaid)})]}),t.jsxs("div",{style:S.saveRow,children:["You save ",e(z.interestSaved)," in interest",z.monthsSaved>0?` · ${$p(z.monthsSaved)} sooner`:""]})]}):t.jsx("div",{style:S.muted,children:"Enter a prepayment amount to see the impact."})]})}function ba({label:e,on:r,onClick:n,disabled:o}){return t.jsx("button",{onClick:o?void 0:n,disabled:o,style:{...S.seg,...r?S.segOn:{},...o?S.segDisabled:{}},children:e})}const S={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},tabs:{display:"flex",gap:7,marginBottom:18,flexWrap:"wrap"},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:10,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},presetRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},preset:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:18,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},presetOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},sumGrid:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:16},sumCard:{background:"var(--surface)",borderRadius:14,padding:"14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},sumCardWide:{display:"flex",alignItems:"center",justifyContent:"center",gap:14,padding:"16px 14px"},sumIcon:{width:30,height:30,borderRadius:9,display:"grid",placeItems:"center",marginBottom:8},sumIconWide:{width:48,height:48,borderRadius:12,display:"grid",placeItems:"center",flexShrink:0},sumWideText:{textAlign:"center"},sumLabel:{fontSize:11.5,color:"var(--text-3)",fontWeight:600},sumVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:2,letterSpacing:"-0.01em",wordBreak:"break-word"},sumSub:{fontSize:10.5,color:"var(--text-3)",fontWeight:600,marginTop:3},card:{background:"var(--surface)",borderRadius:16,padding:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)",marginBottom:16},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14,gap:10},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardSub:{fontSize:11.5,color:"var(--text-3)",marginTop:2},cardTotal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"14px 0"},twoCol:{display:"grid",gridTemplateColumns:"1fr",gap:0},dot:{width:10,height:10,borderRadius:3,flexShrink:0},pieWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap"},pieChart:{position:"relative",width:132,height:132,flexShrink:0,margin:"0 auto"},pieSvg:{position:"absolute",inset:0,width:"100%",height:"100%",overflow:"visible"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:80,height:80,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",transition:"transform 0.15s, box-shadow 0.15s",pointerEvents:"none",textAlign:"center",padding:4,boxSizing:"border-box"},pieHoleVal:{fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:160,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8,borderRadius:8,padding:"3px 5px",margin:"-3px -5px",cursor:"default",transition:"background 0.15s"},legendRowOn:{background:"var(--surface-2)"},legendName:{flex:1,fontSize:12.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},legendPct:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,width:34,textAlign:"right"},legendAmt:{fontSize:12.5,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:64,textAlign:"right"},investNote:{display:"flex",alignItems:"center",gap:6,fontSize:11.5,color:"var(--text-3)",marginBottom:14,marginTop:-4},healthScore:{fontSize:32,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1},healthStatus:{fontSize:12.5,fontWeight:700,marginTop:2},gaugeTrack:{height:10,background:"var(--surface-2)",borderRadius:6,overflow:"hidden",marginBottom:14},gaugeFill:{height:"100%",borderRadius:6,transition:"width 0.4s"},healthStats:{display:"flex",gap:24,marginBottom:12},healthStat:{display:"flex",flexDirection:"column"},healthStatV:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},healthStatL:{fontSize:11,color:"var(--text-3)",fontWeight:600},forecastWrap:{marginTop:4,paddingTop:14,borderTop:"1px solid var(--border)"},forecastHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:10,flexWrap:"wrap",marginBottom:14},forecastInputs:{display:"flex",gap:8,flexWrap:"wrap"},forecastTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},rateWrap:{display:"inline-flex",alignItems:"center",gap:4,border:"1px solid var(--border)",borderRadius:9,padding:"5px 10px",background:"var(--surface-2)"},rateInput:{border:"none",background:"none",outline:"none",width:52,fontSize:14,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)",textAlign:"right"},rateUnit:{fontSize:11.5,color:"var(--text-3)",fontWeight:600},forecastBarsWrap:{overflowX:"auto",paddingBottom:4},forecastBars:{display:"flex",alignItems:"stretch",gap:8,minWidth:"min-content"},fBarCol:{flex:"0 0 40px",display:"flex",flexDirection:"column",alignItems:"center",gap:4,minWidth:0},fBarVal:{fontSize:10.5,fontWeight:700,color:"var(--text-2)",whiteSpace:"nowrap"},fBarTrack:{width:"100%",maxWidth:44,height:110,display:"flex",alignItems:"flex-end"},fBar:{width:"100%",background:"#3A7CA5",borderRadius:"6px 6px 2px 2px",transition:"height 0.35s ease"},fBarLbl:{fontSize:10.5,fontWeight:700,color:"var(--text-3)"},forecastNote:{fontSize:11.5,color:"var(--text-3)",marginTop:12,textAlign:"center"},tip:{fontSize:12.5,lineHeight:1.5,padding:"10px 12px",borderRadius:10,border:"1px solid",fontWeight:500},kindToggle:{display:"flex",gap:8,marginBottom:12},kindBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},formGrid:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8},input:{border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},addBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",marginTop:10,border:"none",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},invAddBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"7px 13px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",flexShrink:0},invRow:{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid var(--border)"},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtnPlain:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},fixedHint:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.5,marginTop:10,marginBottom:0},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},dateHead:{fontSize:11,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8},txnRow:{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid var(--border)"},txnDot:{width:9,height:9,borderRadius:"50%",flexShrink:0},txnCat:{fontSize:13.5,fontWeight:600},txnNote:{fontSize:11.5,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},txnAmt:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},delBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",flexShrink:0},editTxn:{background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:12,padding:12,margin:"6px 0"},editCancel:{display:"flex",alignItems:"center",justifyContent:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},field:{marginBottom:16},fieldTop:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},fieldLabel:{fontSize:13,fontWeight:600,color:"var(--text-2)"},fieldInputWrap:{display:"flex",alignItems:"center",gap:4,border:"1px solid var(--border)",borderRadius:8,padding:"5px 10px",background:"var(--surface-2)"},fieldInput:{border:"none",background:"none",outline:"none",width:90,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},fieldSuffix:{fontSize:12,color:"var(--text-3)",fontWeight:600},range:{width:"100%",accentColor:"var(--accent)",cursor:"pointer"},resultHero:{textAlign:"center",padding:"14px 0 6px"},resultLabel:{fontSize:12,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em"},resultVal:{fontSize:34,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:2,wordBreak:"break-word"},splitRow:{display:"flex",gap:10,marginTop:10},splitItem:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",background:"var(--surface-2)",borderRadius:10,padding:"10px 6px"},splitV:{fontSize:14.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",wordBreak:"break-word"},splitL:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginTop:2},chartWrap:{marginTop:18},chartBars:{display:"flex",alignItems:"flex-end",gap:3,height:90},chartCol:{flex:1,height:"100%",display:"flex",alignItems:"flex-end"},chartStack:{width:"100%",background:"#9DBFD6",borderRadius:"3px 3px 0 0",minHeight:2,position:"relative",display:"flex",flexDirection:"column",justifyContent:"flex-start"},chartGain:{width:"100%",background:"#3E9E6B",borderRadius:"3px 3px 0 0"},chartAxis:{display:"flex",fontSize:10,color:"var(--text-3)",fontWeight:600,marginTop:6},legend:{display:"flex",gap:16,justifyContent:"center",marginTop:10},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)",fontWeight:600},legendDot:{width:10,height:10,borderRadius:3},emiSplitTrack:{display:"flex",height:12,borderRadius:6,overflow:"hidden",marginTop:16,border:"1px solid var(--border)"},subDivider:{height:1,background:"var(--border)",margin:"20px 0 14px"},subTitle:{fontSize:15,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},segGroup:{marginBottom:12},segLbl:{fontSize:12,fontWeight:600,color:"var(--text-3)",display:"block",marginBottom:6},segRow:{display:"flex",gap:8},seg:{flex:1,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},segOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},segDisabled:{opacity:.4,cursor:"not-allowed"},note:{fontSize:12,lineHeight:1.5,color:"var(--text-3)",background:"var(--surface-2)",borderRadius:9,padding:"9px 11px",marginBottom:12},cmpCard:{background:"var(--surface-2)",borderRadius:12,padding:"12px 14px",marginTop:4},cmpRow:{display:"flex",justifyContent:"space-between",alignItems:"baseline",padding:"6px 0",borderBottom:"1px solid var(--border)",gap:10},cmpLbl:{fontSize:12.5,color:"var(--text-2)",fontWeight:600},cmpVal:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",textAlign:"right"},cmpWas:{fontSize:11,color:"var(--text-3)",fontWeight:500,fontFamily:"'Inter',system-ui,sans-serif"},saveRow:{marginTop:12,background:"rgba(62,158,107,0.12)",color:"#3E9E6B",borderRadius:9,padding:"10px 12px",fontSize:13,fontWeight:700,textAlign:"center"}},Ec=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],vd={Monday:"Mon",Tuesday:"Tue",Wednesday:"Wed",Thursday:"Thu",Friday:"Fri",Saturday:"Sat",Sunday:"Sun"},Gi=()=>Ec[(new Date().getDay()+6)%7],jn={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"},Pp=Object.keys(jn),jd=21,Op="kickstart_tags",Y1=e=>{if(!e)return"";const r=e.trim();if(/^[A-Za-z0-9_-]{11}$/.test(r))return r;const n=r.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return n?n[1]:""},K1=e=>{if(!e)return"";const r=e.trim().match(/instagram\.com\/(?:reels?|p|tv)\/([A-Za-z0-9_-]+)/);return r?r[1]:""},Np=e=>{const r=K1(e);if(r)return{platform:"instagram",id:r};const n=Y1(e);return n?{platform:"youtube",id:n}:null},Hp=e=>{if(!e||!String(e).trim())return null;const r=String(e).split(":").map(n=>parseInt(n.trim(),10));return r.some(n=>isNaN(n)||n<0)?null:r.reduce((n,o)=>n*60+o,0)},ma=e=>{if(e==null)return"";const r=Math.max(0,e|0);return`${Math.floor(r/60)}:${String(r%60).padStart(2,"0")}`},Q1=e=>e.platform==="instagram"?`https://www.instagram.com/p/${e.youtube_id}/embed/`:`https://www.youtube.com/embed/${e.youtube_id}?start=${e.start_sec||0}`+(e.end_sec?`&end=${e.end_sec}`:"")+"&autoplay=1&rel=0",X1=()=>({id:null,url:"",title:"",start:"",end:"",days:[Gi()],pillars:[],customs:[]});function q1(){const[e,r]=c.useState([]),[n,o]=c.useState([]),[i,s]=c.useState(!1),[a,l]=c.useState({type:"day",value:Gi()}),[d,g]=c.useState(null),[m,f]=c.useState(null),[h,T]=c.useState(""),D=c.useCallback(async()=>{try{const[A,X]=await Promise.all([_.getKickstart(),_.getSetting(Op)]);r(A),o(Array.isArray(X==null?void 0:X.value)?X.value:[])}catch{}s(!0)},[]);c.useEffect(()=>{D()},[D]);const{deleteItem:I,toasts:z,handleUndo:b,handleDismiss:p}=Cr(_.deleteKickstart,_.restoreKickstart,D);c.useEffect(()=>{if(!m)return;const A=e.find(K=>K.id===m);if(!A)return;const X=A.end_sec?Math.max(1,A.end_sec-(A.start_sec||0)):1/0;let ie=0;const xe=10,q=setInterval(()=>{if(document.hidden)return;const K=X-ie;if(K<=0){clearInterval(q);return}const de=Math.min(xe,K);ie+=de,_.addScreenTime("kickstart",Math.round(de)).catch(()=>{})},xe*1e3);return()=>clearInterval(q)},[m,e]);const u=A=>{o(A),_.setSetting(Op,A).catch(()=>{})},y=()=>{const A=h.trim();!A||n.length>=jd||n.includes(A)||(u([...n,A]),g(X=>X&&!X.customs.includes(A)?{...X,customs:[...X.customs,A]}:X),T(""))},j=A=>u(n.filter(X=>X!==A)),C=(A,X)=>g(ie=>({...ie,[A]:ie[A].includes(X)?ie[A].filter(xe=>xe!==X):[...ie[A],X]})),k=A=>g({id:A.id,url:A.platform==="instagram"?`https://www.instagram.com/reel/${A.youtube_id}/`:`https://youtu.be/${A.youtube_id}`,title:A.title,start:ma(A.start_sec),end:A.end_sec?ma(A.end_sec):"",days:[...A.days],pillars:[...A.pillars],customs:[...A.customs]}),x=async()=>{const A=Np(d.url);if(!A||d.days.length===0||!d.title.trim())return;const X=A.platform==="instagram",ie={youtube_id:A.id,platform:A.platform,title:d.title.trim(),start_sec:X?0:Hp(d.start)||0,end_sec:X?null:Hp(d.end),days:d.days,pillars:d.pillars,customs:d.customs};d.id?await _.updateKickstart(d.id,ie):await _.createKickstart(ie),g(null),D()},B=c.useMemo(()=>e.filter(A=>a.type==="all"?!0:a.type==="day"?A.days.includes(a.value):a.type==="pillar"?A.pillars.includes(a.value):a.type==="custom"?A.customs.includes(a.value):!0),[e,a]),W=(A,X)=>a.type===A&&a.value===X,Q=d?Np(d.url):null,re=d?[!Q&&"a valid YouTube or Instagram link",!d.title.trim()&&"a title",d.days.length===0&&"at least one day"].filter(Boolean):[],ge=!!d&&re.length===0;return t.jsxs("div",{style:Re.page,children:[t.jsxs("div",{style:Re.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:Re.eyebrow,children:"Anvil · Kickstart"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("h1",{style:Re.h1,children:"Kickstart"}),t.jsx(Yt,{id:"kickstart"})]}),t.jsxs("div",{style:Re.subhead,children:["Your motivation hub — the right push for ",Gi(),"."]})]}),!d&&t.jsxs("button",{onClick:()=>g(X1()),style:Re.addBtn,children:[t.jsx(mt,{size:15})," Add video"]})]}),d&&t.jsxs("div",{style:Re.card,children:[t.jsx("div",{style:Re.cardTitle,children:d.id?"Edit video":"Add video"}),t.jsx("input",{placeholder:"YouTube or Instagram link",value:d.url,onChange:A=>g({...d,url:A.target.value}),style:Re.input,autoFocus:!0}),d.url&&!Q&&t.jsx("div",{style:Re.warn,children:"Couldn't find a YouTube or Instagram video in that link."}),Q&&t.jsx("div",{style:Re.platformRow,children:Q.platform==="instagram"?t.jsxs(t.Fragment,{children:[t.jsx(Zu,{size:13,color:"#C2536B"})," Instagram reel detected"]}):t.jsxs(t.Fragment,{children:[t.jsx(Gh,{size:13,color:"#C2536B"})," YouTube video detected"]})}),t.jsx("input",{placeholder:"Title (required)",value:d.title,onChange:A=>g({...d,title:A.target.value}),style:{...Re.input,marginTop:8}}),(Q==null?void 0:Q.platform)==="instagram"?t.jsx("div",{style:Re.hint,children:"Instagram clips always play in full — trimming isn't supported by Instagram embeds."}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:Re.trimRow,children:[t.jsx(Mh,{size:15,color:"var(--text-3)"}),t.jsxs("label",{style:Re.trimField,children:[t.jsx("span",{style:Re.trimLbl,children:"Start"}),t.jsx("input",{placeholder:"0:30",value:d.start,onChange:A=>g({...d,start:A.target.value}),style:Re.trimInput})]}),t.jsx("span",{style:Re.trimArrow,children:"→"}),t.jsxs("label",{style:Re.trimField,children:[t.jsx("span",{style:Re.trimLbl,children:"End"}),t.jsx("input",{placeholder:"end (optional)",value:d.end,onChange:A=>g({...d,end:A.target.value}),style:Re.trimInput})]})]}),t.jsx("div",{style:Re.hint,children:"Only this trimmed part plays. Use m:ss (e.g. 1:30). Leave End blank to play to the end."})]}),t.jsxs("div",{style:Re.tagBlock,children:[t.jsxs("div",{style:Re.tagLabel,children:["Days ",t.jsx("span",{style:Re.req,children:"required"})]}),t.jsx("div",{style:Re.chipRow,children:Ec.map(A=>t.jsx("button",{onClick:()=>C("days",A),style:{...Re.chip,...d.days.includes(A)?Re.chipOnDark:{}},children:vd[A]},A))})]}),t.jsxs("div",{style:Re.tagBlock,children:[t.jsxs("div",{style:Re.tagLabel,children:["Pillars ",t.jsx("span",{style:Re.opt,children:"optional"})]}),t.jsx("div",{style:Re.chipRow,children:Pp.map(A=>{const X=d.pillars.includes(A);return t.jsxs("button",{onClick:()=>C("pillars",A),style:{...Re.chip,...X?{background:jn[A],color:"#fff",borderColor:jn[A]}:{}},children:[t.jsx("span",{style:{...Re.dot,background:X?"#fff":jn[A]}}),A]},A)})})]}),t.jsxs("div",{style:Re.tagBlock,children:[t.jsxs("div",{style:Re.tagLabel,children:["Custom tags ",t.jsxs("span",{style:Re.opt,children:["optional · ",n.length,"/",jd]})]}),t.jsxs("div",{style:Re.chipRow,children:[n.map(A=>t.jsxs("span",{style:{...Re.chip,...d.customs.includes(A)?Re.chipOnAccent:{},paddingRight:4},children:[t.jsx("button",{onClick:()=>C("customs",A),style:Re.chipInner,children:A}),t.jsx("button",{onClick:()=>j(A),style:Re.chipX,title:"Delete tag",children:t.jsx(De,{size:11})})]},A)),n.length===0&&t.jsx("span",{style:Re.muted,children:"No custom tags yet."})]}),n.length<jd&&t.jsxs("div",{style:Re.newTagRow,children:[t.jsx("input",{placeholder:"New custom tag…",value:h,onChange:A=>T(A.target.value),onKeyDown:A=>A.key==="Enter"&&y(),style:{...Re.input,padding:"7px 10px"}}),t.jsx("button",{onClick:y,style:Re.smallBtn,children:t.jsx(mt,{size:14})})]})]}),!ge&&t.jsxs("div",{style:Re.warn,children:["Add ",re.join(", ")," to save."]}),t.jsxs("div",{style:Re.formActions,children:[t.jsxs("button",{onClick:()=>g(null),style:Re.cancelBtn,children:[t.jsx(De,{size:14})," Cancel"]}),t.jsxs("button",{onClick:x,disabled:!ge,style:{...Re.saveBtn,...ge?{}:Re.saveDisabled},children:[t.jsx(He,{size:15})," ",d.id?"Save":"Add video"]})]})]}),t.jsxs("div",{style:Re.filterCard,children:[t.jsx("button",{onClick:()=>l({type:"all"}),style:{...Re.fChip,...a.type==="all"?Re.fChipOnDark:{}},children:"All"}),t.jsx("span",{style:Re.fDivider}),Ec.map(A=>t.jsxs("button",{onClick:()=>l({type:"day",value:A}),style:{...Re.fChip,...W("day",A)?Re.fChipOnDark:{},...A===Gi()?Re.fToday:{}},children:[vd[A],A===Gi()?" ·":""]},A)),t.jsx("span",{style:Re.fDivider}),Pp.map(A=>t.jsxs("button",{onClick:()=>l({type:"pillar",value:A}),style:{...Re.fChip,...W("pillar",A)?{background:jn[A],color:"#fff",borderColor:jn[A]}:{}},children:[t.jsx("span",{style:{...Re.dot,background:W("pillar",A)?"#fff":jn[A]}}),A]},A)),n.length>0&&t.jsx("span",{style:Re.fDivider}),n.map(A=>t.jsxs("button",{onClick:()=>l({type:"custom",value:A}),style:{...Re.fChip,...W("custom",A)?Re.fChipOnAccent:{}},children:[t.jsx(Vo,{size:11})," ",A]},A))]}),i?B.length===0?t.jsx("div",{style:Re.empty,children:e.length===0?"No videos yet — add your first motivation clip.":"No videos for this tag."}):t.jsx("div",{style:Re.grid,children:B.map(A=>t.jsxs("div",{style:Re.videoCard,children:[t.jsx("div",{style:{...Re.thumbWrap,...A.platform==="instagram"&&m===A.id?Re.thumbWrapInsta:{}},children:m===A.id?t.jsx("iframe",{src:Q1(A),title:A.title||A.youtube_id,style:Re.iframe,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):A.platform==="instagram"?t.jsxs("button",{onClick:()=>f(A.id),style:{...Re.thumbBtn,...Re.instaThumb},children:[t.jsx(Zu,{size:34,color:"#fff"}),t.jsx("span",{style:Re.instaLabel,children:"Instagram reel"}),t.jsx("span",{style:Re.playOverlay,children:t.jsx(ll,{size:22,color:"#fff",fill:"#fff"})})]}):t.jsxs("button",{onClick:()=>f(A.id),style:Re.thumbBtn,children:[t.jsx("img",{src:`https://img.youtube.com/vi/${A.youtube_id}/hqdefault.jpg`,alt:"",style:Re.thumb}),t.jsx("span",{style:Re.playOverlay,children:t.jsx(ll,{size:22,color:"#fff",fill:"#fff"})}),t.jsxs("span",{style:Re.trimBadge,children:[ma(A.start_sec),A.end_sec?` – ${ma(A.end_sec)}`:"+"]})]})}),t.jsxs("div",{style:Re.videoBody,children:[t.jsx("div",{style:Re.videoTitle,children:A.title||"Untitled clip"}),t.jsxs("div",{style:Re.tagWrap,children:[A.days.map(X=>t.jsx("span",{style:Re.dayTag,children:vd[X]},X)),A.pillars.map(X=>t.jsx("span",{style:{...Re.pillTag,color:jn[X]||"var(--text-2)",borderColor:jn[X]||"var(--border)"},children:X},X)),A.customs.map(X=>t.jsx("span",{style:Re.customTag,children:X},X))]}),t.jsxs("div",{style:Re.cardActions,children:[t.jsx("button",{onClick:()=>k(A),style:Re.iconBtn,title:"Edit",children:t.jsx(wt,{size:13})}),t.jsx("button",{onClick:()=>I(A.id,A.title||"video"),style:Re.iconBtn,title:"Delete",children:t.jsx(De,{size:14})})]})]})]},A.id))}):t.jsx("div",{style:Re.muted,children:"Loading…"}),t.jsx(Tr,{toasts:z,onUndo:b,onDismiss:p})]})}const Re={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:1e3,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},input:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},warn:{fontSize:11.5,color:"#C2773B",marginTop:5,fontWeight:600},hint:{fontSize:11.5,color:"var(--text-3)",marginTop:6,lineHeight:1.4},platformRow:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)",fontWeight:600,marginTop:5},trimRow:{display:"flex",alignItems:"flex-end",gap:10,marginTop:10},trimField:{display:"flex",flexDirection:"column",gap:4,flex:1},trimLbl:{fontSize:11,color:"var(--text-2)",fontWeight:600},trimInput:{border:"1px solid var(--border)",borderRadius:8,padding:"8px 10px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},trimArrow:{color:"var(--text-3)",paddingBottom:9},tagBlock:{marginTop:14},tagLabel:{fontSize:12,fontWeight:700,color:"var(--text-2)",marginBottom:7},req:{fontSize:10,fontWeight:700,color:"#C2536B",textTransform:"uppercase",marginLeft:6},opt:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",marginLeft:6},chipRow:{display:"flex",gap:6,flexWrap:"wrap"},chip:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},chipOnDark:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},chipOnAccent:{background:"var(--accent)",color:"#fff",borderColor:"var(--accent)"},chipInner:{border:"none",background:"none",color:"inherit",cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:600,padding:0},chipX:{border:"none",background:"rgba(0,0,0,0.12)",color:"inherit",cursor:"pointer",display:"grid",placeItems:"center",borderRadius:"50%",width:16,height:16,padding:0},newTagRow:{display:"flex",gap:6,marginTop:8,maxWidth:280},smallBtn:{border:"none",background:"var(--accent)",color:"#fff",width:34,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},dot:{width:8,height:8,borderRadius:"50%",flexShrink:0,display:"inline-block"},formActions:{display:"flex",gap:8,marginTop:16},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:"var(--accent)",color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"},filterCard:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:12,marginBottom:18},fChip:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},fChipOnDark:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},fChipOnAccent:{background:"var(--accent)",color:"#fff",borderColor:"var(--accent)"},fToday:{borderColor:"var(--accent)",borderWidth:2},fDivider:{width:1,alignSelf:"stretch",background:"var(--border)",margin:"0 2px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:14},videoCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},thumbWrap:{position:"relative",width:"100%",aspectRatio:"16 / 9",background:"#000"},thumbWrapInsta:{aspectRatio:"9 / 14"},thumbBtn:{border:"none",padding:0,margin:0,cursor:"pointer",width:"100%",height:"100%",position:"relative",display:"block",background:"#000"},instaThumb:{background:"linear-gradient(135deg, #833AB4, #E1306C 55%, #F77737)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:6},instaLabel:{color:"rgba(255,255,255,0.9)",fontSize:12,fontWeight:700,letterSpacing:"0.04em"},thumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},playOverlay:{position:"absolute",inset:0,display:"grid",placeItems:"center",background:"rgba(0,0,0,0.28)"},trimBadge:{position:"absolute",bottom:8,right:8,background:"rgba(0,0,0,0.75)",color:"#fff",fontSize:11,fontWeight:700,padding:"2px 7px",borderRadius:6,fontFamily:"'Fraunces',Georgia,serif"},iframe:{width:"100%",height:"100%",border:"none",display:"block"},videoBody:{padding:"12px 13px",display:"flex",flexDirection:"column",gap:8},videoTitle:{fontSize:14,fontWeight:700},tagWrap:{display:"flex",gap:5,flexWrap:"wrap"},dayTag:{fontSize:10,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",padding:"2px 7px",borderRadius:8},pillTag:{fontSize:10,fontWeight:700,border:"1px solid",borderRadius:8,padding:"2px 7px"},customTag:{fontSize:10,fontWeight:700,color:"var(--accent)",background:"color-mix(in srgb, var(--accent) 14%, transparent)",padding:"2px 7px",borderRadius:8},cardActions:{display:"flex",gap:4,justifyContent:"flex-end"},iconBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"}},Z1=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,Gp=()=>Lo(),Up=(e,r)=>{const n=new Date(e+"T00:00:00");return n.setDate(n.getDate()+r),Z1(n)},Vp=e=>new Date(e+"T00:00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",year:"numeric"}),J1=e=>{if(!e)return"";const r=e.trim();if(/^[A-Za-z0-9_-]{11}$/.test(r))return r;const n=r.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return n?n[1]:""},e2=e=>new Promise((r,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:a,height:l}=i;a>l&&a>900?(l=l*900/a,a=900):l>900&&(a=a*900/l,l=900);const d=document.createElement("canvas");d.width=a,d.height=l,d.getContext("2d").drawImage(i,0,0,a,l),r(d.toDataURL("image/jpeg",.82))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(e)});function t2(){const[e,r]=c.useState([]),[n,o]=c.useState(!1),[i,s]=c.useState(null),[a,l]=c.useState(!1),[d,g]=c.useState({title:"",image:""}),[m,f]=c.useState(""),[h,T]=c.useState(!1),D=c.useCallback(W=>{T(Q=>{const re=typeof W=="function"?W(Q):W;return _.setSetting("golden_music_on",!!re).catch(()=>{}),re})},[]),[I,z]=c.useState(null),b=c.useCallback(async()=>{try{r(await _.getGoldenGoals())}catch{}o(!0)},[]);c.useEffect(()=>{b()},[b]);const{deleteItem:p,toasts:u,handleUndo:y,handleDismiss:j}=Cr(_.deleteGolden,_.restoreGolden,b);c.useEffect(()=>{_.getSetting("golden_music_on").then(Q=>{typeof(Q==null?void 0:Q.value)=="boolean"&&T(Q.value)}).catch(()=>{});const W=()=>_.getSetting("golden_music").then(Q=>f(J1((Q==null?void 0:Q.value)||""))).catch(()=>{});return W(),window.addEventListener("focus",W),()=>window.removeEventListener("focus",W)},[]);const C=async()=>{if(!d.title.trim())return;const W=await _.createGolden({title:d.title.trim(),image:d.image});g({title:"",image:""}),l(!1),await b(),s(W.id)},k=async(W,Q)=>{var ge;const re=(ge=W.target.files)==null?void 0:ge[0];if(re)try{Q(await e2(re))}catch{}},x=e.filter(W=>!W.achieved),B=e.filter(W=>W.achieved);return i?t.jsxs("div",{style:se.page,children:[t.jsx(a2,{musicId:m,on:h}),t.jsx(i2,{goalId:i,onBack:()=>s(null),onReload:b,onCelebrate:(W,Q)=>z({title:W,days:Q}),pickImage:k,musicId:m,setMusicId:f,musicOn:h,setMusicOn:D}),I&&t.jsx(s2,{data:I,onClose:()=>z(null)})]}):t.jsxs("div",{style:se.page,children:[t.jsxs("div",{style:se.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:se.eyebrow,children:"Anvil · Golden Book"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("h1",{style:se.h1,children:"Golden Book"}),t.jsx(Yt,{id:"golden-book"})]}),t.jsx("div",{style:se.subhead,children:"Write your dreams into being — a little every day."})]}),!a&&t.jsxs("button",{onClick:()=>l(!0),style:se.addBtn,children:[t.jsx(mt,{size:15})," New dream"]})]}),a&&t.jsxs("div",{style:se.card,children:[t.jsx("div",{style:se.cardTitle,children:"Manifest a new dream"}),t.jsx("textarea",{autoFocus:!0,placeholder:"Write your dream as if it's already true…",value:d.title,onChange:W=>g({...d,title:W.target.value}),style:se.textarea}),t.jsxs("label",{style:se.photoPick,children:[d.image?t.jsx("img",{src:d.image,alt:"",style:se.photoPreview}):t.jsxs("span",{style:se.photoEmpty,children:[t.jsx(Rl,{size:18})," Add a photo"]}),t.jsx("input",{type:"file",accept:"image/*",onChange:W=>k(W,Q=>g({...d,image:Q})),style:{display:"none"}})]}),t.jsxs("div",{style:se.formActions,children:[t.jsxs("button",{onClick:()=>{l(!1),g({title:"",image:""})},style:se.cancelBtn,children:[t.jsx(De,{size:14})," Cancel"]}),t.jsxs("button",{onClick:C,disabled:!d.title.trim(),style:{...se.saveBtn,...d.title.trim()?{}:se.saveDisabled},children:[t.jsx(He,{size:15})," Create"]})]})]}),n?t.jsxs(t.Fragment,{children:[x.length===0&&B.length===0&&!a&&t.jsx("div",{style:se.empty,children:"No dreams yet. Add your first one and revisit it daily."}),x.length>0&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:se.sectionTitle,children:[t.jsx(_o,{size:15,color:"#C9A227"})," Manifesting ",t.jsx("span",{style:se.badge,children:x.length})]}),t.jsx("div",{style:se.grid,children:x.map(W=>t.jsx(Qp,{g:W,onOpen:()=>s(W.id),onDelete:()=>p(W.id,W.title)},W.id))})]}),B.length>0&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{...se.sectionTitle,marginTop:22},children:[t.jsx(rn,{size:15,color:"#4C9A6B"})," Manifested ",t.jsx("span",{style:se.badge,children:B.length})]}),t.jsx("div",{style:se.grid,children:B.map(W=>t.jsx(Qp,{g:W,onOpen:()=>s(W.id),onDelete:()=>p(W.id,W.title),achieved:!0},W.id))})]})]}):t.jsx("div",{style:se.muted,children:"Loading…"}),t.jsx(Tr,{toasts:u,onUndo:y,onDismiss:j})]})}const Dc=[{key:"morning",label:"Morning",time:"6 AM – 12 PM",Icon:Ph,color:"#E0883B"},{key:"noon",label:"Noon",time:"12 – 6 PM",Icon:P0,color:"#C9A227"},{key:"night",label:"Night",time:"6 PM – 2 AM",Icon:z0,color:"#6B6FB0"}],Yp=e=>{if(e<31)return`${e} day${e===1?"":"s"}`;const r=Math.floor(e/365),n=Math.floor(e%365/30),o=e%365%30,i=[];return r&&i.push(`${r}y`),n&&i.push(`${n}mo`),o&&i.push(`${o}d`),i.join(" ")},Kp="tesla369_reminders";function r2({g:e,onChanged:r,musicId:n,setMusicId:o,musicOn:i,setMusicOn:s}){const[a,l]=c.useState(""),[d,g]=c.useState(!1),[m,f]=c.useState(!1),[h,T]=c.useState(()=>localStorage.getItem(Kp)==="1"),D=e.t369,I=(e.t369_affirmation||"").trim();if(o2(h&&!!I,D,e.title),!D)return null;const{window:z,targets:b,counts:p,current_streak:u,best_streak:y,min_streak:j,min_reached:C,day_complete:k}=D,x=(p.morning||0)+(p.noon||0)+(p.night||0),B=b.morning+b.noon+b.night,W=async()=>{if(I&&a.trim()===I&&z){f(!0);try{r(await _.logTesla369(e.id)),l("")}catch(X){alert(X.message||"Could not log this write.")}finally{f(!1)}}},Q=async()=>{f(!0);try{r(await _.undoTesla369(e.id))}catch{}finally{f(!1)}},re=async()=>{if(!h&&!await n2()){alert("Enable notifications in your browser to get 369 reminders.");return}const X=!h;T(X),localStorage.setItem(Kp,X?"1":"0")},ge=a.trim()===I&&I!=="",A=z&&(p[z]||0)>=b[z];return t.jsxs("div",{style:se.tCard,children:[t.jsxs("div",{style:se.tHead,children:[t.jsxs("div",{style:se.tTitleWrap,children:[t.jsxs("span",{style:se.tBadge,children:[t.jsx(_g,{size:14})," 369"]}),t.jsxs("div",{children:[t.jsx("div",{style:se.tTitle,children:"369 Method"}),t.jsx("div",{style:se.tSub,children:"Write it 3× morning · 6× noon · 9× night."})]})]}),t.jsxs("div",{style:se.tHeadBtns,children:[t.jsx(lf,{musicId:n,musicOn:i,setMusicOn:s}),t.jsxs("button",{onClick:re,style:{...se.tRemBtn,...h?se.tRemOn:{}},title:h?"Reminders on":"Turn on reminders",children:[h?t.jsx(Bg,{size:14}):t.jsx(Ky,{size:14})," ",h?"Reminders on":"Remind me"]})]})]}),t.jsxs("div",{style:se.tStreakRow,children:[t.jsxs("div",{style:se.tStreakBox,children:[t.jsxs("div",{style:se.tStreakLabel,children:[t.jsx(go,{size:13,color:"#C2773B"})," Current streak"]}),t.jsx("div",{style:se.tStreakVal,children:Yp(u)}),C?t.jsxs("div",{style:{...se.tStreakHint,color:"#4C9A6B"},children:["✓ ",j,"-day minimum met — keep going until it manifests"]}):t.jsxs("div",{style:se.tStreakHint,children:["Day ",u," of ",j," minimum"]}),!C&&t.jsx("div",{style:se.tProgTrack,children:t.jsx("div",{style:{...se.tProgFill,width:`${Math.min(100,u/j*100)}%`}})})]}),t.jsxs("div",{style:se.tStreakBox,children:[t.jsxs("div",{style:se.tStreakLabel,children:[t.jsx(rn,{size:13,color:"#C9A227"})," All-time best"]}),t.jsx("div",{style:se.tStreakVal,children:Yp(y)}),t.jsxs("div",{style:se.tStreakHint,children:["Today: ",x,"/",B," written ",k?"✓":""]})]})]}),I?t.jsxs(t.Fragment,{children:[t.jsx("div",{style:se.tWindows,children:Dc.map(({key:X,label:ie,time:xe,Icon:q,color:K})=>{const de=p[X]||0,J=b[X],R=z===X,O=de>=J;return t.jsxs("div",{style:{...se.tWindow,...R?{border:`1px solid ${K}`,boxShadow:`0 0 0 2px ${K}22`}:{}},children:[t.jsxs("div",{style:se.tWindowHead,children:[t.jsx(q,{size:15,color:K}),t.jsx("span",{style:se.tWindowLabel,children:ie}),R&&t.jsx("span",{style:{...se.tNow,color:K},children:"now"})]}),t.jsx("div",{style:se.tWindowTime,children:xe}),t.jsx("div",{style:se.tDots,children:Array.from({length:J}).map((G,$)=>t.jsx("span",{style:{...se.tDot,...$<de?{background:K,borderColor:K}:{}}},$))}),t.jsxs("div",{style:{...se.tCount,...O?{color:K}:{}},children:[de,"/",J,O?" ✓":""]})]},X)})}),t.jsx("div",{style:se.tWriteBox,children:z?A?t.jsxs("div",{style:se.tDoneMsg,children:["✓ ",Dc.find(X=>X.key===z).label," complete. ",k?"All 18 done today! 🔥":"Next window unlocks ahead."]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{style:se.tNote,children:"✍️ Type it out by hand — no copy-pasting. The act of writing is the point."}),t.jsx("textarea",{value:a,onChange:X=>l(X.target.value),onPaste:X=>{X.preventDefault(),g(!0),setTimeout(()=>g(!1),2500)},onDrop:X=>X.preventDefault(),placeholder:"Type your affirmation here…",style:{...se.writeArea,...ge?{border:"1px solid #4C9A6B"}:{}}}),d&&t.jsx("div",{style:se.tPasteWarn,children:"Pasting is disabled — please type it."}),t.jsxs("div",{style:se.tWriteActions,children:[t.jsxs("button",{onClick:Q,disabled:m||(p[z]||0)===0,style:se.tUndoBtn,title:"Undo last write",children:[t.jsx(Hh,{size:14})," Undo"]}),t.jsxs("button",{onClick:W,disabled:m||!ge,style:{...se.writeSave,flex:1,...ge?{}:se.saveDisabled},children:[t.jsx(He,{size:15})," ",ge?"Log this write":"Type it to log"]})]})]}):t.jsx("div",{style:se.tClosed,children:"Writing windows: 6 AM–12 PM, 12–6 PM, 6 PM–2 AM. Come back during a window."})})]}):t.jsx("div",{style:se.tClosed,children:"Set a 369 affirmation above to start writing."})]})}async function n2(){return"Notification"in window?Notification.permission==="granted"?!0:Notification.permission==="denied"?!1:await Notification.requestPermission()==="granted":!1}function o2(e,r,n){const o=c.useRef({});c.useEffect(()=>{if(!e||!r)return;const i=()=>{var T;if(Notification.permission!=="granted")return;const a=r.window;if(!a)return;const l=r.counts||{},d=r.targets||{};if((l[a]||0)>=(d[a]||0))return;const g=r.today,m=`369-${n||""}-${g}-${a}`;if(o.current[m])return;o.current[m]=!0;const f=((T=Dc.find(D=>D.key===a))==null?void 0:T.label)||"",h=(d[a]||0)-(l[a]||0);try{new Notification("369 — time to write ✍️",{body:`${n?`"${n}" · `:""}${f} window: ${h} more to go. Type your affirmation.`,tag:m})}catch{}};i();const s=setInterval(i,60*1e3);return()=>clearInterval(s)},[e,r,n])}function Qp({g:e,onOpen:r,onDelete:n,achieved:o}){return t.jsxs("div",{style:{...se.goalCard,...o?{opacity:.96}:{},position:"relative"},children:[t.jsxs("button",{onClick:r,style:se.goalCardBtn,children:[t.jsxs("div",{style:se.thumbWrap,children:[e.image?t.jsx("img",{src:e.image,alt:"",style:se.thumb}):t.jsx("div",{style:se.thumbEmpty,children:t.jsx(_o,{size:26,color:"var(--text-3)"})}),o&&t.jsx("span",{style:se.stamp,children:"✦ Manifested"})]}),t.jsxs("div",{style:se.goalBody,children:[t.jsx("div",{style:se.goalTitle,children:e.title}),t.jsxs("div",{style:se.goalMeta,children:[o?t.jsxs("span",{style:{...se.metaPill,color:"#4C9A6B",background:"rgba(76,154,107,0.12)"},children:[t.jsx(rn,{size:12})," ",e.days_to_manifest!=null?`in ${e.days_to_manifest} day${e.days_to_manifest===1?"":"s"}`:"done"]}):t.jsxs("span",{style:{...se.metaPill,color:"#C2773B",background:"rgba(194,119,59,0.12)"},children:[t.jsx(go,{size:12})," ",e.streak," day streak"]}),t.jsxs("span",{style:se.metaDim,children:[e.total_days," entr",e.total_days===1?"y":"ies"]})]})]})]}),t.jsx("button",{onClick:i=>{i.stopPropagation(),window.confirm(`Delete "${e.title}"?`)&&n()},style:se.cardDelBtn,title:"Delete dream",children:t.jsx(ji,{size:14})})]})}function i2({goalId:e,onBack:r,onReload:n,onCelebrate:o,pickImage:i,musicId:s,setMusicId:a,musicOn:l,setMusicOn:d}){const[g,m]=c.useState(null),[f,h]=c.useState({}),[T,D]=c.useState(Gp()),[I,z]=c.useState(""),[b,p]=c.useState(null),[u,y]=c.useState(null),j=Gp(),C=c.useCallback(K=>{m(K);const de={};(K.entries||[]).forEach(J=>{de[J.date]=J.text}),h(de),z(de[j]||"")},[j]),k=c.useCallback(async()=>{C(await _.getGoldenGoal(e))},[e,C]);if(c.useEffect(()=>{k()},[k]),c.useEffect(()=>{if(!(g!=null&&g.t369_enabled))return;const K=setInterval(()=>{_.getGoldenGoal(e).then(C).catch(()=>{})},60*1e3);return()=>clearInterval(K)},[g==null?void 0:g.t369_enabled,e,C]),!g)return t.jsx("div",{style:se.muted,children:"Loading…"});const x=T===j,B=T>g.created_date,W=T<j,Q=async()=>{await _.upsertGoldenEntry(e,{date:j,text:I}),await k(),n()},re=async()=>{const K=await _.achieveGolden(e);o(g.title,K.days_to_manifest),await k(),n()},ge=async()=>{await _.unachieveGolden(e),await k(),n()},A=async()=>{b.trim()&&(await _.updateGolden(e,{title:b.trim()}),p(null),await k(),n())},X=K=>_.updateGolden(e,{image:K}).then(()=>{k(),n()}),ie=async()=>{await _.updateGolden(e,{t369_enabled:!g.t369_enabled}),await k(),n()},xe=async()=>{await _.updateGolden(e,{t369_affirmation:(u||"").trim()}),y(null),await k()},q=async()=>{window.confirm(`Delete "${g.title}"? This cannot be undone from here.`)&&(await _.deleteGolden(e),n(),r())};return t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:se.detailTopRow,children:[t.jsxs("button",{onClick:r,style:se.backBtn,children:[t.jsx(vh,{size:16})," All dreams"]}),t.jsxs("button",{onClick:q,style:se.deleteBtn,title:"Delete dream",children:[t.jsx(ji,{size:14})," Delete"]})]}),t.jsxs("div",{style:se.detailHero,children:[t.jsxs("label",{style:se.heroPhoto,children:[g.image?t.jsx("img",{src:g.image,alt:"",style:se.heroImg}):t.jsxs("span",{style:se.photoEmpty,children:[t.jsx(Rl,{size:20})," Add a photo"]}),t.jsxs("span",{style:se.photoEdit,children:[t.jsx(wt,{size:12})," Edit photo"]}),t.jsx("input",{type:"file",accept:"image/*",onChange:K=>i(K,X),style:{display:"none"}})]}),t.jsxs("div",{style:se.heroInfo,children:[g.achieved&&t.jsxs("span",{style:se.heroStamp,children:["✦ Manifested",g.days_to_manifest!=null?` in ${g.days_to_manifest} day${g.days_to_manifest===1?"":"s"}`:""]}),b!==null?t.jsxs("div",{style:{display:"flex",gap:6,width:"100%"},children:[t.jsx("textarea",{autoFocus:!0,value:b,onChange:K=>p(K.target.value),style:{...se.textarea,minHeight:60}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[t.jsx("button",{onClick:A,style:se.iconSave,children:t.jsx(He,{size:14})}),t.jsx("button",{onClick:()=>p(null),style:se.iconCancel,children:t.jsx(De,{size:14})})]})]}):t.jsxs("div",{style:se.heroTitleRow,children:[t.jsx("div",{style:se.heroTitle,children:g.title}),t.jsx("button",{onClick:()=>p(g.title),style:se.ghostBtn,title:"Edit",children:t.jsx(wt,{size:13})})]}),t.jsxs("div",{style:se.heroStats,children:[t.jsxs("span",{style:{...se.metaPill,color:"#C2773B",background:"rgba(194,119,59,0.12)"},children:[t.jsx(go,{size:13})," ",g.streak," day streak"]}),t.jsxs("span",{style:se.metaDim,children:[g.total_days," entr",g.total_days===1?"y":"ies"]}),t.jsxs("span",{style:se.metaDim,children:["since ",Vp(g.created_date)]})]})]})]}),!g.achieved&&t.jsxs("div",{style:se.t369Row,children:[t.jsxs("div",{style:se.t369RowLeft,children:[t.jsxs("span",{style:{...se.tBadge,...g.t369_enabled?{}:se.tBadgeOff},children:[t.jsx(_g,{size:13})," 369"]}),t.jsxs("div",{children:[t.jsx("div",{style:se.t369RowTitle,children:"Tesla's 369 Method"}),t.jsx("div",{style:se.t369RowSub,children:g.t369_enabled?"On — write this dream 3×/6×/9× across the day.":"Off — using the simple daily entry."})]})]}),t.jsx("button",{onClick:ie,style:{...se.switch,...g.t369_enabled?se.switchOn:{}},role:"switch","aria-checked":g.t369_enabled,title:"Toggle 369 method",children:t.jsx("span",{style:{...se.switchKnob,...g.t369_enabled?se.switchKnobOn:{}}})})]}),g.t369_enabled&&!g.achieved&&t.jsxs(t.Fragment,{children:[u!==null||!g.t369_affirmation?t.jsxs("div",{style:se.card,children:[t.jsx("div",{style:se.cardTitle,children:"Your 369 affirmation"}),t.jsx("textarea",{autoFocus:!0,value:u??g.t369_affirmation??"",onChange:K=>y(K.target.value),placeholder:"The exact line you'll write 18× a day, e.g. 'I am grateful for my dream home.'",style:se.textarea}),t.jsxs("div",{style:se.formActions,children:[g.t369_affirmation&&t.jsxs("button",{onClick:()=>y(null),style:se.cancelBtn,children:[t.jsx(De,{size:14})," Cancel"]}),t.jsxs("button",{onClick:xe,disabled:!(u??"").trim()&&!g.t369_affirmation,style:{...se.saveBtn,...(u??g.t369_affirmation??"").trim()?{}:se.saveDisabled},children:[t.jsx(He,{size:15})," Save affirmation"]})]})]}):t.jsxs("div",{style:se.tAffShow,children:[t.jsx(jc,{size:15,color:Qr}),t.jsx("p",{style:se.tAffText,children:g.t369_affirmation}),t.jsx("button",{onClick:()=>y(g.t369_affirmation),style:se.ghostBtn,title:"Edit affirmation",children:t.jsx(wt,{size:13})})]}),t.jsx(r2,{g,onChanged:C,musicId:s,setMusicId:a,musicOn:l,setMusicOn:d})]}),!g.t369_enabled&&t.jsxs("div",{style:se.writeCard,children:[t.jsx("div",{style:se.tuneRow,children:t.jsx(lf,{musicId:s,musicOn:l,setMusicOn:d})}),t.jsxs("div",{style:se.writeNav,children:[t.jsx("button",{onClick:()=>D(K=>Up(K,-1)),disabled:!B,style:{...se.navBtn,...B?{}:se.navDisabled},children:t.jsx(Mn,{size:16})}),t.jsx("div",{style:se.writeDate,children:x?"Today":Vp(T)}),t.jsx("button",{onClick:()=>D(K=>Up(K,1)),disabled:!W,style:{...se.navBtn,...W?{}:se.navDisabled},children:t.jsx(bn,{size:16})})]}),x&&!g.achieved?t.jsxs(t.Fragment,{children:[t.jsx("textarea",{value:I,onChange:K=>z(K.target.value),placeholder:"Write it again today, as if it's already yours…",style:se.writeArea}),t.jsxs("button",{onClick:Q,style:se.writeSave,children:[t.jsx(He,{size:15})," Save today's entry"]})]}):t.jsx("div",{style:se.readEntry,children:f[T]?t.jsxs(t.Fragment,{children:[t.jsx(jc,{size:16,color:"var(--text-3)"}),t.jsx("p",{style:se.readText,children:f[T]})]}):t.jsx("div",{style:se.muted,children:"Nothing written on this day."})})]}),g.achieved?t.jsx("button",{onClick:ge,style:se.unmanifestBtn,children:"Undo manifested"}):t.jsxs("button",{onClick:re,style:se.manifestBtn,children:[t.jsx(_o,{size:16})," Mark as manifested"]})]})}function s2({data:e,onClose:r}){return t.jsx("div",{style:se.celebOverlay,onClick:r,children:t.jsxs("div",{style:se.celebBox,onClick:n=>n.stopPropagation(),children:[t.jsx("div",{style:se.celebEmoji,children:"✨🌟✨"}),t.jsx("div",{style:se.celebTitle,children:"It's happening!"}),t.jsxs("div",{style:se.celebDream,children:['"',e.title,'"']}),t.jsxs("div",{style:se.celebSub,children:[e.days!=null?`Manifested in ${e.days} day${e.days===1?"":"s"}.`:"Manifested."," The universe delivered. 🙏"]}),t.jsx("button",{onClick:r,style:se.celebBtn,children:"Wonderful"})]})})}function a2({musicId:e,on:r}){return!e||!r?null:t.jsx("iframe",{title:"golden-music",src:`https://www.youtube.com/embed/${e}?autoplay=1&loop=1&playlist=${e}&controls=0&modestbranding=1&playsinline=1`,allow:"autoplay; encrypted-media",style:{position:"fixed",left:-1e4,top:0,width:320,height:180,border:"none"}})}function lf({musicId:e,musicOn:r,setMusicOn:n}){return e?t.jsxs("button",{onClick:()=>n(o=>!o),style:{...se.tRemBtn,...r?se.tuneOn:{}},title:r?"Soft tunes on":"Play soft tunes",children:[r?t.jsx(Dh,{size:14}):t.jsx(Dg,{size:14})," Soft tunes"]}):t.jsx("span",{style:se.tuneHint,children:"Add a track in Settings → Music"})}const Qr="#C9A227",se={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:860,margin:"0 auto",position:"relative"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:Qr,color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},textarea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"11px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:70,resize:"vertical",lineHeight:1.5},photoPick:{display:"block",marginTop:10,cursor:"pointer",borderRadius:12,overflow:"hidden",border:"1px dashed var(--border)"},photoPreview:{width:"100%",maxHeight:220,objectFit:"cover",display:"block"},photoEmpty:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"26px 0",color:"var(--text-3)",fontSize:13,fontWeight:600},formActions:{display:"flex",gap:8,marginTop:14},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:Qr,color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:12},badge:{fontSize:11,fontWeight:700,background:"var(--hover)",color:"var(--text-2)",borderRadius:10,padding:"1px 7px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:14},goalCard:{textAlign:"left",border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},goalCardBtn:{textAlign:"left",border:"none",background:"none",cursor:"pointer",padding:0,fontFamily:"inherit",display:"flex",flexDirection:"column",width:"100%"},cardDelBtn:{position:"absolute",top:8,left:8,border:"none",background:"rgba(0,0,0,0.55)",color:"#fff",width:26,height:26,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",zIndex:2},thumbWrap:{position:"relative",width:"100%",aspectRatio:"16 / 10",background:"var(--surface-2)"},thumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},thumbEmpty:{width:"100%",height:"100%",display:"grid",placeItems:"center"},stamp:{position:"absolute",top:8,right:8,transform:"rotate(6deg)",background:"rgba(76,154,107,0.95)",color:"#fff",fontSize:11,fontWeight:800,letterSpacing:"0.04em",padding:"3px 9px",borderRadius:6,border:"1.5px solid #fff",textTransform:"uppercase"},goalBody:{padding:"11px 13px",display:"flex",flexDirection:"column",gap:8},goalTitle:{fontSize:14,fontWeight:600,lineHeight:1.35,display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"},goalMeta:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},metaPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11.5,fontWeight:700,padding:"2px 8px",borderRadius:10},metaDim:{fontSize:11,color:"var(--text-3)",fontWeight:500},detailTopRow:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16,gap:10},backBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},deleteBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid rgba(194,83,107,0.4)",background:"rgba(194,83,107,0.08)",color:"#C2536B",padding:"7px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},detailHero:{display:"flex",flexDirection:"column",gap:14,marginBottom:16},heroPhoto:{position:"relative",width:"100%",borderRadius:14,overflow:"hidden",border:"1px solid var(--border)",cursor:"pointer",background:"var(--surface-2)",display:"flex",alignItems:"center",justifyContent:"center",minHeight:120},heroImg:{width:"100%",maxHeight:"62vh",objectFit:"contain",display:"block"},photoEdit:{position:"absolute",bottom:8,right:8,display:"flex",alignItems:"center",gap:5,background:"rgba(0,0,0,0.6)",color:"#fff",fontSize:11,fontWeight:600,padding:"4px 8px",borderRadius:7},heroInfo:{display:"flex",flexDirection:"column",gap:10,alignItems:"center",textAlign:"center"},heroStamp:{alignSelf:"center",background:"rgba(76,154,107,0.14)",color:"#4C9A6B",fontSize:12,fontWeight:800,padding:"4px 10px",borderRadius:8,letterSpacing:"0.03em"},heroTitleRow:{display:"flex",alignItems:"flex-start",gap:8,justifyContent:"center"},heroTitle:{fontSize:23,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.35},heroStats:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap",justifyContent:"center"},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",flexShrink:0},iconSave:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},iconCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},writeCard:{background:"var(--surface)",borderRadius:14,padding:16,border:"1px solid var(--border)",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},tuneRow:{display:"flex",justifyContent:"flex-end",marginBottom:10},tuneOn:{background:Qr,color:"#fff",borderColor:Qr},tuneHint:{fontSize:11,color:"var(--text-3)",fontWeight:500},writeNav:{display:"flex",alignItems:"center",justifyContent:"center",gap:14,marginBottom:12},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center"},navDisabled:{opacity:.35,cursor:"not-allowed"},writeDate:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:150,textAlign:"center"},writeArea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"12px",fontSize:15,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:120,resize:"vertical",lineHeight:1.6},writeSave:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",marginTop:10,border:"none",background:Qr,color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},readEntry:{display:"flex",gap:8,padding:"6px 2px"},readText:{fontSize:15,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.6,margin:0,whiteSpace:"pre-wrap"},manifestBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,width:"100%",border:"none",background:"linear-gradient(135deg,#C9A227,#E0BD45)",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:800,cursor:"pointer",fontFamily:"inherit",boxShadow:"0 2px 10px rgba(201,162,39,0.35)"},unmanifestBtn:{display:"block",margin:"0 auto",border:"none",background:"none",color:"var(--text-3)",fontSize:12,fontWeight:600,cursor:"pointer",textDecoration:"underline",fontFamily:"inherit"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.6)",zIndex:200,display:"grid",placeItems:"center",padding:16},celebBox:{background:"var(--surface)",color:"var(--text)",borderRadius:20,padding:"36px 30px",textAlign:"center",maxWidth:360,boxShadow:"0 12px 48px rgba(0,0,0,0.3)"},celebEmoji:{fontSize:40,marginBottom:10},celebTitle:{fontSize:24,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginBottom:10,color:Qr},celebDream:{fontSize:15,fontStyle:"italic",fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.5,marginBottom:10},celebSub:{fontSize:13.5,color:"var(--text-2)",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:Qr,color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},t369Row:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:"12px 16px",marginBottom:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},t369RowLeft:{display:"flex",alignItems:"center",gap:11},t369RowTitle:{fontSize:14,fontWeight:700},t369RowSub:{fontSize:11.5,color:"var(--text-3)",marginTop:2},tBadgeOff:{background:"var(--border)",color:"var(--text-3)"},switch:{position:"relative",width:46,height:26,borderRadius:14,border:"none",background:"var(--border)",cursor:"pointer",flexShrink:0,transition:"background 0.2s",padding:0},switchOn:{background:Qr},switchKnob:{position:"absolute",top:3,left:3,width:20,height:20,borderRadius:"50%",background:"#fff",transition:"left 0.2s",boxShadow:"0 1px 2px rgba(0,0,0,0.3)"},switchKnobOn:{left:23},tCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:16,padding:18,marginBottom:20,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},tHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:12,flexWrap:"wrap",marginBottom:14},tTitleWrap:{display:"flex",alignItems:"center",gap:11},tBadge:{display:"inline-flex",alignItems:"center",gap:4,background:"linear-gradient(135deg,#C9A227,#E0BD45)",color:"#fff",fontSize:14,fontWeight:800,padding:"6px 10px",borderRadius:10,letterSpacing:"0.02em",flexShrink:0},tTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},tSub:{fontSize:12,color:"var(--text-3)",marginTop:2},tHeadBtns:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",justifyContent:"flex-end"},tRemBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 12px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tRemOn:{background:Qr,color:"#fff",borderColor:Qr},tStreakRow:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:14},tStreakBox:{background:"var(--bg)",border:"1px solid var(--border)",borderRadius:12,padding:"12px 14px"},tStreakLabel:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,fontWeight:600,color:"var(--text-2)"},tStreakVal:{fontSize:21,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:4,lineHeight:1.1},tStreakHint:{fontSize:11,color:"var(--text-3)",marginTop:4,fontWeight:500},tProgTrack:{height:5,borderRadius:4,background:"var(--border)",marginTop:8,overflow:"hidden"},tProgFill:{height:"100%",background:"linear-gradient(90deg,#C2773B,#C9A227)",borderRadius:4,transition:"width 0.4s"},tAffShow:{display:"flex",alignItems:"flex-start",gap:9,background:"var(--bg)",border:"1px solid var(--border)",borderRadius:12,padding:"12px 14px",marginBottom:14},tAffText:{flex:1,fontSize:15,fontFamily:"'Fraunces',Georgia,serif",fontStyle:"italic",lineHeight:1.5,margin:0,whiteSpace:"pre-wrap"},tWindows:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:10,marginBottom:14},tWindow:{background:"var(--bg)",border:"1px solid var(--border)",borderRadius:12,padding:"11px 12px",transition:"box-shadow 0.2s, border-color 0.2s"},tWindowHead:{display:"flex",alignItems:"center",gap:6},tWindowLabel:{fontSize:13,fontWeight:700},tNow:{fontSize:10,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",marginLeft:"auto"},tWindowTime:{fontSize:10.5,color:"var(--text-3)",marginTop:2,marginBottom:8,fontWeight:500},tDots:{display:"flex",flexWrap:"wrap",gap:5,marginBottom:7},tDot:{width:11,height:11,borderRadius:"50%",border:"1.5px solid var(--border)",background:"transparent",transition:"background 0.2s"},tCount:{fontSize:12,fontWeight:700,color:"var(--text-2)"},tWriteBox:{borderTop:"1px solid var(--border)",paddingTop:14},tNote:{fontSize:12,fontWeight:600,color:"#C2773B",background:"rgba(194,119,59,0.10)",borderRadius:8,padding:"8px 11px",marginBottom:9},tPasteWarn:{fontSize:11.5,color:"#C2536B",fontWeight:600,marginTop:6},tWriteActions:{display:"flex",gap:8,marginTop:10},tUndoBtn:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"11px 14px",borderRadius:10,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tClosed:{fontSize:12.5,color:"var(--text-3)",textAlign:"center",padding:"10px 4px",lineHeight:1.5},tDoneMsg:{fontSize:13,fontWeight:700,color:"#4C9A6B",textAlign:"center",padding:"10px 4px"}},kd=[{id:"meditation",label:"Meditation Hub",icon:qy,color:"#8268B0"},{id:"visualization",label:"Visualization",icon:Cs,color:"#3A7CA5"}],Xp=e=>{if(!e)return"";const r=e.trim();if(/^[A-Za-z0-9_-]{11}$/.test(r))return r;const n=r.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return n?n[1]:""},l2=e=>new Promise((r,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:a,height:l}=i;a>l&&a>1e3?(l=l*1e3/a,a=1e3):l>1e3&&(a=a*1e3/l,l=1e3);const d=document.createElement("canvas");d.width=a,d.height=l,d.getContext("2d").drawImage(i,0,0,a,l),r(d.toDataURL("image/jpeg",.82))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(e)}),d2=e=>({id:null,kind:e,title:"",url:"",image:""});function c2(){const[e,r]=c.useState("meditation"),[n,o]=c.useState([]),[i,s]=c.useState(!1),[a,l]=c.useState(null),[d,g]=c.useState(null),m=c.useCallback(async()=>{try{o(await _.getMedia())}catch{}s(!0)},[]);c.useEffect(()=>{m()},[m]);const{deleteItem:f,toasts:h,handleUndo:T,handleDismiss:D}=Cr(_.deleteMedia,_.restoreMedia,m);c.useEffect(()=>{if(!d)return;const C=10,k=setInterval(()=>{document.hidden||_.addScreenTime("mindscape",C).catch(()=>{})},C*1e3);return()=>clearInterval(k)},[d]);const I=kd.find(C=>C.id===e),z=n.filter(C=>C.kind===e),b=C=>l({id:C.id,kind:C.kind,title:C.title,url:`https://youtu.be/${C.youtube_id}`,image:C.image}),p=async C=>{var x;const k=(x=C.target.files)==null?void 0:x[0];if(k){try{const B=await l2(k);l(W=>({...W,image:B}))}catch{}C.target.value=""}},u=a?[!a.title.trim()&&"a title",!a.image&&"an image",!Xp(a.url)&&"a valid YouTube link"].filter(Boolean):[],y=!!a&&u.length===0,j=async()=>{if(!y)return;const C={kind:a.kind,title:a.title.trim(),image:a.image,youtube_id:Xp(a.url)};a.id?await _.updateMedia(a.id,C):await _.createMedia(C),l(null),m()};return t.jsxs("div",{style:ht.page,children:[d&&t.jsx("iframe",{title:"mindscape-audio",src:`https://www.youtube.com/embed/${d.youtube_id}?autoplay=1&controls=0&modestbranding=1&playsinline=1`,allow:"autoplay; encrypted-media",style:{position:"fixed",left:-1e4,top:0,width:320,height:180,border:"none"}}),t.jsxs("div",{style:ht.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:ht.eyebrow,children:"Anvil · Mindscape"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("h1",{style:ht.h1,children:"Mindscape"}),t.jsx(Yt,{id:"mindscape"})]}),t.jsx("div",{style:ht.subhead,children:"Close your eyes and listen — guided meditation and visualization."})]}),!a&&t.jsxs("button",{onClick:()=>l(d2(e)),style:{...ht.addBtn,background:I.color},children:[t.jsx(mt,{size:15})," Add"]})]}),t.jsx("div",{style:ht.tabs,children:kd.map(C=>{const k=C.icon,x=e===C.id;return t.jsxs("button",{onClick:()=>{r(C.id),l(null)},style:{...ht.tab,...x?{background:C.color,color:"#fff",borderColor:C.color}:{}},children:[t.jsx(k,{size:15})," ",C.label]},C.id)})}),a&&t.jsxs("div",{style:ht.card,children:[t.jsx("div",{style:ht.cardTitle,children:a.id?"Edit":`New ${kd.find(C=>C.id===a.kind).label}`}),t.jsx("input",{placeholder:"YouTube link (plays as audio only)",value:a.url,onChange:C=>l({...a,url:C.target.value}),style:ht.input,autoFocus:!0}),t.jsx("input",{placeholder:"Title (required)",value:a.title,onChange:C=>l({...a,title:C.target.value}),style:{...ht.input,marginTop:8}}),t.jsxs("label",{style:ht.photoPick,children:[a.image?t.jsx("img",{src:a.image,alt:"",style:ht.photoPreview}):t.jsxs("span",{style:ht.photoEmpty,children:[t.jsx(Rl,{size:18})," Add cover image (required)"]}),t.jsx("input",{type:"file",accept:"image/*",onChange:p,style:{display:"none"}})]}),!y&&t.jsxs("div",{style:ht.warn,children:["Add ",u.join(", ")," to save."]}),t.jsxs("div",{style:ht.formActions,children:[t.jsxs("button",{onClick:()=>l(null),style:ht.cancelBtn,children:[t.jsx(De,{size:14})," Cancel"]}),t.jsxs("button",{onClick:j,disabled:!y,style:{...ht.saveBtn,background:y?I.color:"var(--border)",color:y?"#fff":"var(--text-3)",cursor:y?"pointer":"not-allowed"},children:[t.jsx(He,{size:15})," ",a.id?"Save":"Add"]})]})]}),i?z.length===0?t.jsxs("div",{style:ht.empty,children:["Nothing here yet — add a ",I.label.toLowerCase()," track."]}):t.jsx("div",{style:ht.grid,children:z.map(C=>{const k=(d==null?void 0:d.id)===C.id;return t.jsxs("div",{style:ht.mediaCard,children:[t.jsxs("button",{onClick:()=>g(k?null:C),style:ht.coverBtn,title:k?"Pause":"Play",children:[t.jsx("img",{src:C.image,alt:"",style:ht.cover}),t.jsx("span",{style:{...ht.playOverlay,background:k?"rgba(0,0,0,0.45)":"rgba(0,0,0,0.28)"},children:t.jsx("span",{style:{...ht.playCircle,background:I.color},children:k?t.jsx(Ah,{size:20,color:"#fff",fill:"#fff"}):t.jsx(ll,{size:20,color:"#fff",fill:"#fff"})})}),k&&t.jsxs("span",{style:ht.nowPlaying,children:[t.jsx(Dh,{size:11})," Playing"]})]}),t.jsxs("div",{style:ht.mediaBody,children:[t.jsx("div",{style:ht.mediaTitle,children:C.title}),t.jsxs("div",{style:ht.cardActions,children:[t.jsx("button",{onClick:()=>b(C),style:ht.iconBtn,title:"Edit",children:t.jsx(wt,{size:13})}),t.jsx("button",{onClick:()=>{(d==null?void 0:d.id)===C.id&&g(null),f(C.id,C.title)},style:ht.iconBtn,title:"Delete",children:t.jsx(De,{size:14})})]})]})]},C.id)})}):t.jsx("div",{style:ht.muted,children:"Loading…"}),t.jsx(Tr,{toasts:h,onUndo:T,onDismiss:D})]})}const ht={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:900,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},tabs:{display:"flex",gap:8,marginBottom:18,flexWrap:"wrap"},tab:{display:"flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:20,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none"},photoPick:{display:"block",marginTop:10,cursor:"pointer",borderRadius:12,overflow:"hidden",border:"1px dashed var(--border)"},photoPreview:{width:"100%",maxHeight:200,objectFit:"cover",display:"block"},photoEmpty:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"26px 0",color:"var(--text-3)",fontSize:13,fontWeight:600},warn:{fontSize:12,color:"#C2773B",marginTop:8,fontWeight:600},formActions:{display:"flex",gap:8,marginTop:14},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,fontFamily:"inherit"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gap:16},mediaCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},coverBtn:{position:"relative",border:"none",padding:0,cursor:"pointer",display:"block",width:"100%",aspectRatio:"1",background:"var(--surface-2)"},cover:{width:"100%",height:"100%",objectFit:"cover",display:"block"},playOverlay:{position:"absolute",inset:0,display:"grid",placeItems:"center"},playCircle:{width:46,height:46,borderRadius:"50%",display:"grid",placeItems:"center",boxShadow:"0 2px 10px rgba(0,0,0,0.3)"},nowPlaying:{position:"absolute",bottom:8,left:8,display:"flex",alignItems:"center",gap:4,background:"rgba(0,0,0,0.65)",color:"#fff",fontSize:11,fontWeight:700,padding:"3px 8px",borderRadius:7},mediaBody:{padding:"12px 14px",display:"flex",alignItems:"flex-start",gap:8},mediaTitle:{flex:1,fontSize:14.5,fontWeight:600,lineHeight:1.4,minWidth:0,wordBreak:"break-word"},cardActions:{display:"flex",gap:2,flexShrink:0,marginTop:1},iconBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"}},df={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"},g2=Object.keys(df),u2="#9A7B4F";function p2(e=760){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const b2=()=>{const e=new Date,r=n=>String(n).padStart(2,"0");return`${e.getFullYear()}-${r(e.getMonth()+1)}-${r(e.getDate())}`},m2=e=>{if(!e)return"";const r=new Date(e+"T00:00:00");return isNaN(r)?e:r.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})},wd=e=>(e||"").slice(0,4),h2=e=>new Promise((r,n)=>{const o=new FileReader;o.onload=()=>r(o.result),o.onerror=n,o.readAsDataURL(e)}),f2=(e,r=1e3)=>new Promise((n,o)=>{const i=new Image;i.onload=()=>{let{width:s,height:a}=i;s>a&&s>r?(a=a*r/s,s=r):a>r&&(s=s*r/a,a=r);const l=document.createElement("canvas");l.width=s,l.height=a,l.getContext("2d").drawImage(i,0,0,s,a),n(l.toDataURL("image/jpeg",.82))},i.onerror=o,i.src=e});function x2({src:e,onCancel:r,onCrop:n,onKeepOriginal:o}){const[a,l]=c.useState(null),[d,g]=c.useState(1),[m,f]=c.useState({x:0,y:0}),h=c.useRef(null);c.useEffect(()=>{const j=new Image;j.onload=()=>{l(j);const C=Math.max(300/j.width,300/j.height);g(1),j._base=C;const k=j.width*C,x=j.height*C;f({x:(300-k)/2,y:(300-x)/2})},j.src=e},[e]);const T=a?a._base*d:1,D=a?a.width*T:0,I=a?a.height*T:0,z=(j,C,k)=>({x:Math.min(0,Math.max(300-C,j.x)),y:Math.min(0,Math.max(300-k,j.y))});c.useEffect(()=>{a&&f(j=>z(j,D,I))},[d,a]);const b=j=>{const C=j.touches?j.touches[0]:j;h.current={sx:C.clientX,sy:C.clientY,ox:m.x,oy:m.y}},p=j=>{if(!h.current)return;const C=j.touches?j.touches[0]:j,k=h.current.ox+(C.clientX-h.current.sx),x=h.current.oy+(C.clientY-h.current.sy);f(z({x:k,y:x},D,I))},u=()=>{h.current=null},y=()=>{if(!a)return;const j=document.createElement("canvas");j.width=700,j.height=700;const C=j.getContext("2d"),k=700/300;C.drawImage(a,m.x*k,m.y*k,D*k,I*k),n(j.toDataURL("image/jpeg",.85))};return t.jsx("div",{style:zr.overlay,onClick:r,children:t.jsxs("div",{style:zr.box,onClick:j=>j.stopPropagation(),children:[t.jsxs("div",{style:zr.head,children:["Crop to square",t.jsx("button",{onClick:r,style:zr.close,children:t.jsx(De,{size:16})})]}),t.jsxs("div",{style:{...zr.frame,width:300,height:300},onMouseDown:b,onMouseMove:p,onMouseUp:u,onMouseLeave:u,onTouchStart:b,onTouchMove:p,onTouchEnd:u,children:[a&&t.jsx("img",{src:e,alt:"",draggable:!1,style:{position:"absolute",left:m.x,top:m.y,width:D,height:I,userSelect:"none",pointerEvents:"none"}}),t.jsx("div",{style:zr.grid})]}),t.jsxs("div",{style:zr.zoomRow,children:[t.jsx("span",{style:zr.zoomLbl,children:"Zoom"}),t.jsx("input",{type:"range",min:"1",max:"3",step:"0.01",value:d,onChange:j=>g(parseFloat(j.target.value)),style:{flex:1}})]}),t.jsx("div",{style:zr.hint,children:"Drag to reposition · slide to zoom"}),t.jsxs("div",{style:zr.actions,children:[t.jsx("button",{onClick:r,style:zr.cancel,children:"Cancel"}),t.jsx("button",{onClick:o,style:zr.keep,children:"Keep original"}),t.jsxs("button",{onClick:y,style:zr.apply,children:[t.jsx(He,{size:15})," Square crop"]})]})]})})}const y2={id:null,title:"",date:b2(),pillar:"",reward:"",image:"",note:""};function v2(){const e=ho(),r=x=>_s(x,e.code),n=p2(),[o,i]=c.useState([]),[s,a]=c.useState(null),[l,d]=c.useState(!1),[g,m]=c.useState(null),f=c.useRef(null),h=c.useCallback(()=>{_.getAchievements().then(i).catch(()=>{})},[]);c.useEffect(()=>{h()},[h]);const{deleteItem:T,toasts:D,handleUndo:I,handleDismiss:z}=Cr(_.deleteAchievement,_.restoreAchievement,h),b=()=>a({...y2}),p=x=>a({id:x.id,title:x.title,date:x.date,pillar:x.pillar||"",reward:x.reward?String(x.reward):"",image:x.image||"",note:x.note||""}),u=async x=>{var W;const B=(W=x.target.files)==null?void 0:W[0];if(B){try{const Q=await h2(B);m(Q)}catch{}f.current&&(f.current.value="")}},y=async()=>{let x=g;try{g&&(x=await f2(g))}catch{}a(B=>({...B,image:x})),m(null)},j=s&&s.title.trim()&&s.date,C=async()=>{if(!j||l)return;d(!0);const x={title:s.title.trim(),date:s.date,pillar:s.pillar||null,reward:parseFloat(s.reward)||0,image:s.image||null,note:s.note.trim()};try{s.id?await _.updateAchievement(s.id,x):await _.createAchievement(x),a(null),h()}catch{}finally{d(!1)}},k=o.reduce((x,B)=>x+(B.reward||0),0);return t.jsxs("div",{style:et.page,children:[t.jsxs("div",{style:et.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:et.eyebrow,children:"Anvil · Achievements"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("h1",{style:et.h1,children:"Achievements"}),t.jsx(Yt,{id:"achievements"})]}),t.jsx("div",{style:et.subhead,children:"Your tree of wins — newest at the top, scroll down through the past."})]}),t.jsxs("div",{style:et.headRight,children:[k>0&&t.jsxs("div",{style:et.totalBadge,children:[t.jsx(Ts,{size:14,color:"#C9A227"})," ",r(k)," earned"]}),t.jsxs("button",{onClick:b,style:et.addBtn,children:[t.jsx(mt,{size:15})," Add achievement"]})]})]}),o.length===0?t.jsxs("div",{style:et.empty,children:[t.jsx(rn,{size:30,color:"var(--text-3)"}),t.jsx("div",{style:{marginTop:10},children:"No achievements yet."}),t.jsx("div",{style:et.emptySub,children:"Plant your first win — it'll grow into a timeline you can look back on."})]}):t.jsxs("div",{style:{...et.timeline,paddingLeft:0},children:[t.jsx("div",{style:{...et.trunk,left:n?13:"50%"}}),o.map((x,B)=>{const W=df[x.pillar]||u2,Q=!n&&B%2===1,re=o[B-1],ge=!re||wd(re.date)!==wd(x.date);return t.jsxs("div",{children:[ge&&t.jsx("div",{style:{...et.yearRow,justifyContent:n?"flex-start":"center",paddingLeft:n?36:0},children:t.jsx("span",{style:et.yearChip,children:wd(x.date)})}),t.jsxs("div",{style:{...et.row,gridTemplateColumns:n?"28px 1fr":"1fr 44px 1fr"},children:[!n&&t.jsx("div",{style:{gridColumn:1,display:"flex",justifyContent:"flex-end"},children:Q&&t.jsx(qp,{a:x,color:W,side:"left",money:r,onEdit:()=>p(x),onDelete:()=>T(x.id,x.title)})}),t.jsx("div",{style:{gridColumn:n?1:2,display:"flex",justifyContent:"center",position:"relative"},children:t.jsx("div",{style:{...et.node,borderColor:W,background:"var(--surface)"},children:t.jsx("div",{style:{...et.nodeDot,background:W}})})}),t.jsx("div",{style:{gridColumn:n?2:3,display:"flex",justifyContent:"flex-start"},children:(n||!Q)&&t.jsx(qp,{a:x,color:W,side:n?"mobile":"right",money:r,onEdit:()=>p(x),onDelete:()=>T(x.id,x.title)})})]})]},x.id)})]}),s&&t.jsx("div",{style:et.overlay,onClick:()=>a(null),children:t.jsxs("div",{style:et.modal,onClick:x=>x.stopPropagation(),children:[t.jsxs("div",{style:et.modalHead,children:[t.jsx("div",{style:et.modalTitle,children:s.id?"Edit achievement":"New achievement"}),t.jsx("button",{onClick:()=>a(null),style:et.iconBtn,children:t.jsx(De,{size:16})})]}),t.jsx("label",{style:et.label,children:"Title *"}),t.jsx("input",{autoFocus:!0,value:s.title,onChange:x=>a(B=>({...B,title:x.target.value})),placeholder:"What did you achieve?",style:et.input}),t.jsxs("div",{style:et.formRow,children:[t.jsxs("div",{style:{flex:1},children:[t.jsxs("label",{style:et.label,children:[t.jsx(n0,{size:12})," Date *"]}),t.jsx("input",{type:"date",value:s.date,onChange:x=>a(B=>({...B,date:x.target.value})),style:et.input})]}),t.jsxs("div",{style:{flex:1},children:[t.jsx("label",{style:et.label,children:"Pillar (optional)"}),t.jsxs("select",{value:s.pillar,onChange:x=>a(B=>({...B,pillar:x.target.value})),style:et.input,children:[t.jsx("option",{value:"",children:"— None —"}),g2.map(x=>t.jsx("option",{value:x,children:x},x))]})]})]}),t.jsxs("label",{style:et.label,children:[t.jsx(Ts,{size:12})," Reward (",e.code,") — optional gesture of appreciation"]}),t.jsx("input",{type:"number",min:"0",step:"any",value:s.reward,onChange:x=>a(B=>({...B,reward:x.target.value})),placeholder:"0",style:et.input}),t.jsx("label",{style:et.label,children:"Photo (optional)"}),s.image?t.jsxs("div",{style:et.imgWrap,children:[t.jsx("img",{src:s.image,alt:"",style:et.imgPreview}),t.jsx("button",{onClick:()=>a(x=>({...x,image:""})),style:et.imgRemove,children:t.jsx(De,{size:14})})]}):t.jsxs("button",{onClick:()=>{var x;return(x=f.current)==null?void 0:x.click()},style:et.uploadBtn,children:[t.jsx(y0,{size:15})," Add a photo"]}),t.jsx("input",{ref:f,type:"file",accept:"image/*",onChange:u,style:{display:"none"}}),t.jsx("label",{style:et.label,children:"Note (optional)"}),t.jsx("textarea",{value:s.note,onChange:x=>a(B=>({...B,note:x.target.value})),placeholder:"The story behind it…",rows:3,style:{...et.input,resize:"vertical",fontFamily:"inherit"}}),t.jsxs("div",{style:et.modalActions,children:[t.jsx("button",{onClick:()=>a(null),style:et.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:C,disabled:!j||l,style:{...et.saveBtn,...!j||l?{opacity:.5,cursor:"not-allowed"}:{}},children:[t.jsx(He,{size:15})," ",s.id?"Save":"Add"]})]})]})}),g&&t.jsx(x2,{src:g,onCancel:()=>m(null),onKeepOriginal:y,onCrop:x=>{a(B=>({...B,image:x})),m(null)}}),t.jsx(Tr,{toasts:D,onUndo:I,onDismiss:z})]})}function qp({a:e,color:r,side:n,money:o,onEdit:i,onDelete:s}){return t.jsxs("div",{style:{...et.card,borderTop:`3px solid ${r}`,textAlign:n==="left"?"right":"left"},children:[t.jsxs("div",{style:{...et.cardTop,flexDirection:n==="left"?"row-reverse":"row"},children:[t.jsx("span",{style:{...et.dateChip,background:`${r}1A`,color:r},children:m2(e.date)}),t.jsxs("div",{style:{display:"flex",gap:2},children:[t.jsx("button",{onClick:i,style:et.ghostBtn,title:"Edit",children:t.jsx(wt,{size:13})}),t.jsx("button",{onClick:s,style:et.ghostBtn,title:"Delete",children:t.jsx(De,{size:14})})]})]}),t.jsx("div",{style:et.cardTitle,children:e.title}),e.image&&t.jsx("img",{src:e.image,alt:"",style:et.cardImg}),e.note&&t.jsx("div",{style:et.cardNote,children:e.note}),e.reward>0&&t.jsxs("div",{style:{...et.rewardBadge,marginLeft:n==="left"?"auto":0},children:[t.jsx(Ts,{size:13})," ",o(e.reward)]})]})}const et={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:22},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},headRight:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},totalBadge:{display:"flex",alignItems:"center",gap:5,background:"rgba(201,162,39,0.12)",border:"1px solid rgba(201,162,39,0.3)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:700,color:"#8A6E1A"},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},empty:{textAlign:"center",color:"var(--text-3)",padding:"60px 16px",fontSize:14,fontWeight:600},emptySub:{fontSize:12.5,fontWeight:400,marginTop:6,maxWidth:320,marginInline:"auto",lineHeight:1.5},timeline:{position:"relative",maxWidth:1e3,margin:"0 auto",paddingBottom:30},trunk:{position:"absolute",top:8,bottom:8,width:3,background:"linear-gradient(to bottom, var(--border), var(--border))",transform:"translateX(-1.5px)",borderRadius:2},yearRow:{display:"flex",margin:"6px 0 12px"},yearChip:{fontSize:11.5,fontWeight:800,letterSpacing:"0.06em",color:"var(--text-2)",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:"4px 12px",position:"relative",zIndex:2},row:{display:"grid",alignItems:"center",gap:8,marginBottom:16},node:{width:20,height:20,borderRadius:"50%",border:"3px solid",display:"grid",placeItems:"center",zIndex:2,boxShadow:"0 0 0 4px var(--bg)"},nodeDot:{width:7,height:7,borderRadius:"50%"},card:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:"12px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.06)",maxWidth:420,width:"100%",boxSizing:"border-box"},cardTop:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,marginBottom:7},dateChip:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:12,whiteSpace:"nowrap"},cardTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em",lineHeight:1.3,wordBreak:"break-word"},cardImg:{width:"100%",maxHeight:220,objectFit:"cover",borderRadius:9,marginTop:9,display:"block"},cardNote:{fontSize:12.5,color:"var(--text-2)",marginTop:7,lineHeight:1.5,whiteSpace:"pre-wrap",wordBreak:"break-word"},rewardBadge:{display:"inline-flex",alignItems:"center",gap:5,marginTop:9,background:"rgba(201,162,39,0.12)",color:"#8A6E1A",border:"1px solid rgba(201,162,39,0.3)",padding:"3px 10px",borderRadius:14,fontSize:12,fontWeight:700},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",borderRadius:6},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:60,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:460,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},label:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)"},formRow:{display:"flex",gap:10},uploadBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:7,width:"100%",border:"1.5px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"11px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},imgWrap:{position:"relative",borderRadius:10,overflow:"hidden"},imgPreview:{width:"100%",maxHeight:220,objectFit:"cover",display:"block",borderRadius:10},imgRemove:{position:"absolute",top:8,right:8,border:"none",background:"rgba(0,0,0,0.55)",color:"#fff",width:28,height:28,borderRadius:"50%",cursor:"pointer",display:"grid",placeItems:"center"},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},zr={overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.62)",zIndex:300,display:"grid",placeItems:"center",padding:16},box:{background:"var(--surface)",borderRadius:16,padding:"18px",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",maxWidth:"92vw"},head:{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:15,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},close:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},frame:{position:"relative",overflow:"hidden",borderRadius:12,background:"#000",cursor:"grab",touchAction:"none",margin:"0 auto",maxWidth:"84vw"},grid:{position:"absolute",inset:0,pointerEvents:"none",boxShadow:"inset 0 0 0 1px rgba(255,255,255,0.5)",backgroundImage:"linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)",backgroundSize:"33.33% 33.33%"},zoomRow:{display:"flex",alignItems:"center",gap:10,marginTop:14},zoomLbl:{fontSize:12,fontWeight:700,color:"var(--text-2)"},hint:{fontSize:11,color:"var(--text-3)",textAlign:"center",marginTop:8},actions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:14,flexWrap:"wrap"},cancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},keep:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},apply:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}};function j2(e=760){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const ha=()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},k2=e=>e?new Date(e+"T00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"",an="#C9772E",_i=[{id:"todo",label:"Want to",color:"#3A7CA5"},{id:"doing",label:"Enjoying",color:"#C9772E"},{id:"done",label:"Satisfied",color:"#4C9A6B"}],w2=[{id:"text",label:"Text"},{id:"number",label:"Number"},{id:"link",label:"Link"}],Sd=e=>(e&&typeof e=="object"?e.type:"text")||"text",Hn=e=>(e&&typeof e=="object"?e.name:e)||"";function S2(){const e=j2(),[r,n]=c.useState([]),[o,i]=c.useState(null),[s,a]=c.useState(!1),[l,d]=c.useState(null),[g,m]=c.useState(null),[f,h]=c.useState(null),[T,D]=c.useState(null),[I,z]=c.useState(null),[b,p]=c.useState([]),u=c.useRef({}),y=c.useCallback(()=>{_.getDelight().then(P=>{n(P),i(ne=>{var E;return ne&&P.some(w=>w.id===ne)?ne:((E=P[0])==null?void 0:E.id)??null}),a(!0)}).catch(()=>a(!0))},[]);c.useEffect(()=>{y()},[y]),c.useEffect(()=>{p([])},[o]);const{deleteItem:j,toasts:C,handleUndo:k,handleDismiss:x}=Cr(_.deleteDelightItem,_.restoreDelightItem,y),B=r.find(P=>P.id===o)||null,W=c.useMemo(()=>{const P={todo:[],doing:[],done:[]};return((B==null?void 0:B.items)||[]).forEach(ne=>{(P[ne.status]||P.todo).push(ne)}),Object.values(P).forEach(ne=>ne.sort((E,w)=>E.position-w.position||E.id-w.id)),P},[B]),Q=P=>/^tags?$/i.test(Hn(P).trim()),re=P=>((B==null?void 0:B.columns)||[]).filter(Q).flatMap(ne=>(P.fields[Hn(ne)]||"").split(",").map(E=>E.trim()).filter(Boolean)),ge=c.useMemo(()=>{const P=new Set;return((B==null?void 0:B.items)||[]).forEach(ne=>(B.columns||[]).filter(Q).forEach(E=>(ne.fields[Hn(E)]||"").split(",").map(w=>w.trim()).filter(Boolean).forEach(w=>P.add(w)))),[...P].sort((ne,E)=>ne.localeCompare(E))},[B]),A=c.useMemo(()=>{const P={};return((B==null?void 0:B.columns)||[]).forEach(ne=>{const E=Hn(ne);if(Q(ne))return;const w=new Set;((B==null?void 0:B.items)||[]).forEach(oe=>{const he=(oe.fields[E]||"").trim();he&&w.add(he)}),P[E]=[...w].sort((oe,he)=>oe.localeCompare(he))}),P},[B]),X=P=>b.length===0||re(P).some(ne=>b.includes(ne)),ie=P=>p(ne=>ne.includes(P)?ne.filter(E=>E!==P):[...ne,P]),xe=(P,ne,E)=>{for(const w of _i){const oe=u.current[w.id];if(!oe)continue;const he=oe.getBoundingClientRect();if(P>=he.left&&P<=he.right&&ne>=he.top&&ne<=he.bottom){const V=[...oe.querySelectorAll("[data-card]")].filter(ye=>ye.dataset.id!==String(E));let fe=V.length;for(let ye=0;ye<V.length;ye++){const Ae=V[ye].getBoundingClientRect();if(ne<Ae.top+Ae.height/2){fe=ye;break}}return{status:w.id,index:fe}}}return null},q=(P,ne)=>{if(P.target.closest("button"))return;const E=P.clientX,w=P.clientY,oe=P.currentTarget;let he=!1,V=null,fe=null;const ye=tt=>{if(!he){if(Math.hypot(tt.clientX-E,tt.clientY-w)<6)return;he=!0;const yt=oe.getBoundingClientRect();fe={id:ne.id,item:ne,w:yt.width,offX:E-yt.left,offY:w-yt.top}}fe={...fe,x:tt.clientX,y:tt.clientY},D(fe),V=xe(tt.clientX,tt.clientY,ne.id)||V,z(V)},Ae=()=>{window.removeEventListener("pointermove",ye),window.removeEventListener("pointerup",Ae),he&&V&&K(ne,V),D(null),z(null)};window.addEventListener("pointermove",ye),window.addEventListener("pointerup",Ae)},K=(P,ne)=>{const E={};_i.forEach(V=>{E[V.id]=(W[V.id]||[]).filter(fe=>fe.id!==P.id)});const w=E[ne.status]||[];let oe;if(b.length){const V=w.filter(X);oe=ne.index<V.length?w.indexOf(V[ne.index]):w.length}else oe=Math.max(0,Math.min(ne.index,w.length));E[ne.status]=[...w.slice(0,oe),{...P,status:ne.status},...w.slice(oe)];const he=[];_i.forEach(V=>(E[V.id]||[]).forEach((fe,ye)=>he.push({id:fe.id,status:V.id,position:ye}))),n(V=>V.map(fe=>fe.id===o?{...fe,items:he.map(ye=>({...fe.items.find(Ae=>Ae.id===ye.id),status:ye.status,position:ye.position}))}:fe)),_.arrangeDelight(o,he).then(y).catch(y),ne.status==="done"&&P.status!=="done"&&h({item:P,date:ha(),note:""})},de=async P=>{window.confirm(`Delete "${P.name}" and all its items?`)&&(await _.deleteCollection(P.id),y())},J=()=>({name:"",type:"text"}),R=()=>d({id:null,name:"",columns:[J(),J()]}),O=P=>d({id:P.id,name:P.name,columns:P.columns.length?P.columns.map(ne=>({name:Hn(ne),type:Sd(ne)})):[J()]}),G=async()=>{const P=l.name.trim();if(!P)return;const ne=l.columns.map(E=>({name:E.name.trim(),type:E.type||"text"})).filter(E=>E.name);l.id?await _.updateCollection(l.id,{name:P,columns:ne}):await _.createCollection({name:P,columns:ne}),d(null),y()},$=(P="todo")=>m({id:null,name:"",fields:{},status:P}),ae=P=>m({id:P.id,name:P.name,fields:{...P.fields},status:P.status}),me=async()=>{const P=g.name.trim();if(!P||!B)return;const ne=g.id?(B.items||[]).find(he=>he.id===g.id):null,E=(ne==null?void 0:ne.status)==="done",w={name:P,fields:g.fields,status:g.status};let oe;if(g.id?oe=await _.updateDelightItem(g.id,w):oe=await _.createDelightItem(B.id,w),m(null),await y(),g.status==="done"&&!E){const he=Oe(oe,B.id,P);h({item:he||{id:g.id,name:P},date:ha(),note:""})}},Oe=(P,ne,E)=>{const w=Array.isArray(P)?P.find(he=>he.id===ne):null;if(!w)return null;const oe=(w.items||[]).filter(he=>he.name===E&&he.status==="done");return oe.length?oe[oe.length-1]:null},Ce=async()=>{var P;if(!((P=f==null?void 0:f.item)!=null&&P.id)){h(null);return}await _.updateDelightItem(f.item.id,{completed_date:f.date||ha(),completion_note:f.note||""}),h(null),y()},U=({it:P})=>{const ne=B.columns.filter(w=>P.fields[Hn(w)]&&!Q(w)),E=re(P);return t.jsxs("div",{"data-card":!0,"data-id":P.id,onPointerDown:w=>q(w,P),style:ke.itemCard,children:[t.jsxs("div",{style:ke.itemCardTop,children:[t.jsx(al,{size:13,style:{color:"var(--text-3)",flexShrink:0}}),t.jsx("span",{style:ke.itemName,children:P.name}),t.jsx("button",{onClick:()=>ae(P),style:ke.ghostBtn,children:t.jsx(wt,{size:12})}),t.jsx("button",{onClick:()=>j(P.id,P.name),style:ke.ghostBtn,children:t.jsx(De,{size:13})})]}),ne.map(w=>{const oe=Hn(w),he=P.fields[oe];return t.jsxs("div",{style:ke.itemField,children:[t.jsx("span",{style:ke.fieldLabel,children:oe}),Sd(w)==="link"?t.jsx("a",{href:/^https?:\/\//i.test(he)?he:`https://${he}`,target:"_blank",rel:"noreferrer",style:{minWidth:0,wordBreak:"break-word",color:an},onClick:V=>V.stopPropagation(),children:he}):t.jsx("span",{style:{minWidth:0,wordBreak:"break-word"},children:he})]},oe)}),E.length>0&&t.jsx("div",{style:ke.tagWrap,children:E.map((w,oe)=>t.jsx("span",{style:ke.tag,children:w},oe))}),P.status==="done"&&P.completed_date&&t.jsxs("div",{style:ke.doneMeta,children:[t.jsxs("span",{style:ke.doneDate,children:["✓ ",k2(P.completed_date)]}),P.completion_note&&t.jsx("span",{style:ke.doneNote,children:P.completion_note})]})]})};return t.jsxs("div",{style:ke.page,children:[t.jsxs("div",{style:ke.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:ke.eyebrow,children:"Anvil · Delights"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("h1",{style:ke.h1,children:"Delights"}),t.jsx(Yt,{id:"delight"})]}),t.jsx("div",{style:ke.subhead,children:"Books, films, places, food — track what you want to enjoy and how you felt."})]}),t.jsxs("button",{onClick:R,style:ke.addColBtn,children:[t.jsx(mt,{size:15})," New list"]})]}),t.jsxs("div",{style:ke.tabs,children:[r.map(P=>t.jsxs("button",{onClick:()=>i(P.id),style:{...ke.tab,...P.id===o?ke.tabOn:{}},children:[P.name,t.jsx("span",{style:ke.tabCount,children:P.items.length})]},P.id)),t.jsx("button",{onClick:R,style:ke.tabAdd,title:"New list",children:t.jsx(mt,{size:15})})]}),s?B?t.jsxs("div",{children:[t.jsxs("div",{style:ke.colHead,children:[t.jsx("h2",{style:ke.colTitle,children:B.name}),t.jsxs("div",{style:ke.colActions,children:[t.jsxs("button",{onClick:()=>$(),style:ke.primaryBtn,children:[t.jsx(mt,{size:14})," Add"]}),t.jsx("button",{onClick:()=>O(B),style:ke.ghostBtn,title:"Edit list & columns",children:t.jsx(u0,{size:15})}),t.jsx("button",{onClick:()=>de(B),style:ke.ghostBtn,title:"Delete list",children:t.jsx(De,{size:16})})]})]}),ge.length>0&&t.jsxs("div",{style:ke.filterBar,children:[t.jsx("span",{style:ke.filterLabel,children:"Tags"}),t.jsx("button",{onClick:()=>p([]),style:{...ke.filterChip,...b.length===0?ke.filterChipOn:{}},children:"All"}),ge.map(P=>t.jsx("button",{onClick:()=>ie(P),style:{...ke.filterChip,...b.includes(P)?ke.filterChipOn:{}},children:P},P))]}),t.jsx("div",{style:{...ke.board,gridTemplateColumns:e?"1fr":"repeat(3, 1fr)"},children:_i.map(P=>{const ne=(W[P.id]||[]).filter(X),E=T?ne.filter(oe=>oe.id!==T.id):ne,w=I&&I.status===P.id;return t.jsxs("div",{ref:oe=>u.current[P.id]=oe,style:{...ke.lane,...w?{outline:`2px dashed ${P.color}`,outlineOffset:-2}:{}},children:[t.jsxs("div",{style:ke.laneHead,children:[t.jsx("span",{style:{...ke.laneDot,background:P.color}}),t.jsx("span",{style:ke.laneLabel,children:P.label}),t.jsx("span",{style:ke.laneCount,children:ne.length}),t.jsx("button",{onClick:()=>$(P.id),style:ke.laneAdd,title:`Add to ${P.label}`,children:t.jsx(mt,{size:13})})]}),t.jsxs("div",{style:ke.laneBody,children:[E.map((oe,he)=>t.jsxs("div",{children:[w&&I.index===he&&t.jsx("div",{style:{...ke.insertLine,background:P.color}}),t.jsx(U,{it:oe})]},oe.id)),w&&I.index>=E.length&&t.jsx("div",{style:{...ke.insertLine,background:P.color}}),E.length===0&&!w&&t.jsx("div",{style:ke.laneEmpty,children:"Drop here"})]})]},P.id)})})]}):t.jsxs("div",{style:ke.empty,children:[t.jsx(Ag,{size:28,color:"var(--text-3)"}),t.jsx("div",{style:{marginTop:10},children:"No lists yet."}),t.jsxs("button",{onClick:R,style:{...ke.addColBtn,marginTop:14},children:[t.jsx(mt,{size:15})," Create your first list"]})]}):t.jsx("div",{style:ke.muted,children:"Loading…"}),T&&t.jsx("div",{style:{...ke.ghost,width:T.w,left:T.x-T.offX,top:T.y-T.offY},children:t.jsxs("div",{style:ke.itemCardTop,children:[t.jsx(al,{size:13,style:{color:"var(--text-3)",flexShrink:0}}),t.jsx("span",{style:ke.itemName,children:T.item.name})]})}),l&&t.jsx("div",{style:ke.overlay,onClick:()=>d(null),children:t.jsxs("div",{style:ke.modal,onClick:P=>P.stopPropagation(),children:[t.jsxs("div",{style:ke.modalHead,children:[t.jsx("span",{style:ke.modalTitle,children:l.id?"Edit list":"New list"}),t.jsx("button",{onClick:()=>d(null),style:ke.iconBtn,children:t.jsx(De,{size:16})})]}),t.jsx("label",{style:ke.label,children:"List name *"}),t.jsx("input",{autoFocus:!0,value:l.name,onChange:P=>d(ne=>({...ne,name:P.target.value})),placeholder:"e.g. Gardens, Cafés, Trips…",style:ke.input}),t.jsx("label",{style:ke.label,children:"Columns"}),t.jsx("div",{style:ke.muted2,children:"Name the details you want to track (e.g. Author, Distance, Tag)."}),l.columns.map((P,ne)=>t.jsxs("div",{style:ke.colRow,children:[t.jsx("input",{value:P.name,placeholder:`Column ${ne+1}`,onChange:E=>d(w=>{const oe=[...w.columns];return oe[ne]={...oe[ne],name:E.target.value},{...w,columns:oe}}),style:{...ke.input,marginBottom:0,flex:1}}),t.jsx("select",{value:P.type,onChange:E=>d(w=>{const oe=[...w.columns];return oe[ne]={...oe[ne],type:E.target.value},{...w,columns:oe}}),style:ke.colTypeSelect,children:w2.map(E=>t.jsx("option",{value:E.id,children:E.label},E.id))}),t.jsx("button",{onClick:()=>d(E=>({...E,columns:E.columns.filter((w,oe)=>oe!==ne)})),style:ke.iconBtn,children:t.jsx(De,{size:14})})]},ne)),l.columns.length<6&&t.jsxs("button",{onClick:()=>d(P=>({...P,columns:[...P.columns,J()]})),style:ke.addColInline,children:[t.jsx(mt,{size:13})," Add column"]}),t.jsxs("div",{style:ke.modalActions,children:[t.jsx("button",{onClick:()=>d(null),style:ke.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:G,disabled:!l.name.trim(),style:{...ke.saveBtn,...l.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," ",l.id?"Save":"Create"]})]})]})}),g&&B&&t.jsx("div",{style:ke.overlay,onClick:()=>m(null),children:t.jsxs("div",{style:ke.modal,onClick:P=>P.stopPropagation(),children:[t.jsxs("div",{style:ke.modalHead,children:[t.jsx("span",{style:ke.modalTitle,children:g.id?"Edit":`Add to ${B.name}`}),t.jsx("button",{onClick:()=>m(null),style:ke.iconBtn,children:t.jsx(De,{size:16})})]}),t.jsx("label",{style:ke.label,children:"Name *"}),t.jsx("input",{autoFocus:!0,value:g.name,onChange:P=>m(ne=>({...ne,name:P.target.value})),onKeyDown:P=>P.key==="Enter"&&me(),placeholder:"Title / name",style:ke.input}),B.columns.map(P=>{const ne=Hn(P),E=Sd(P),w=`dl-${B.id}-${ne}`,oe=A[ne]||[];return t.jsxs("div",{children:[t.jsx("label",{style:ke.label,children:ne}),t.jsx("input",{value:g.fields[ne]||"",type:E==="number"?"number":E==="link"?"url":"text",list:oe.length?w:void 0,onChange:he=>m(V=>({...V,fields:{...V.fields,[ne]:he.target.value}})),placeholder:E==="link"?"https://…":ne,style:ke.input}),oe.length>0&&t.jsx("datalist",{id:w,children:oe.map(he=>t.jsx("option",{value:he},he))})]},ne)}),t.jsx("label",{style:ke.label,children:"Status"}),t.jsx("div",{style:ke.statusPick,children:_i.map(P=>t.jsx("button",{type:"button",onClick:()=>m(ne=>({...ne,status:P.id})),style:{...ke.statusChip,...g.status===P.id?{background:P.color,color:"#fff",border:`1px solid ${P.color}`}:{}},children:P.label},P.id))}),t.jsxs("div",{style:ke.modalActions,children:[t.jsx("button",{onClick:()=>m(null),style:ke.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:me,disabled:!g.name.trim(),style:{...ke.saveBtn,...g.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," ",g.id?"Save":"Add"]})]})]})}),f&&t.jsx("div",{style:ke.overlay,onClick:()=>h(null),children:t.jsxs("div",{style:{...ke.modal,maxWidth:380},onClick:P=>P.stopPropagation(),children:[t.jsxs("div",{style:ke.modalHead,children:[t.jsx("span",{style:ke.modalTitle,children:"Satisfied! 🎉"}),t.jsx("button",{onClick:()=>h(null),style:ke.iconBtn,children:t.jsx(De,{size:16})})]}),t.jsxs("div",{style:ke.muted2,children:['"',f.item.name,'" — when did you complete it?']}),t.jsx("label",{style:ke.label,children:"Completed on"}),t.jsx("input",{type:"date",value:f.date,max:ha(),onChange:P=>h(ne=>({...ne,date:P.target.value})),style:ke.input}),t.jsx("label",{style:ke.label,children:"Comment (optional)"}),t.jsx("textarea",{value:f.note,onChange:P=>h(ne=>({...ne,note:P.target.value})),placeholder:"How was it?",style:{...ke.input,minHeight:64,resize:"vertical"}}),t.jsxs("div",{style:ke.modalActions,children:[t.jsx("button",{onClick:()=>h(null),style:ke.cancelBtn,children:"Skip"}),t.jsxs("button",{onClick:Ce,style:ke.saveBtn,children:[t.jsx(He,{size:15})," Save"]})]})]})}),t.jsx(Tr,{toasts:C,onUndo:k,onDismiss:x})]})}const ke={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},addColBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"none",background:an,color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tabs:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16,alignItems:"center"},tab:{display:"inline-flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},tabOn:{background:an,color:"#fff",borderColor:an},tabCount:{fontSize:10.5,fontWeight:700,background:"rgba(0,0,0,0.12)",borderRadius:9,padding:"1px 6px"},tabAdd:{border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",width:32,height:32,borderRadius:"50%",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},colHead:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:10,marginBottom:12,flexWrap:"wrap"},colTitle:{fontSize:18,fontWeight:700,margin:0,fontFamily:"'Fraunces',Georgia,serif"},colActions:{display:"flex",gap:6,alignItems:"center"},primaryBtn:{display:"inline-flex",alignItems:"center",gap:5,border:"none",background:an,color:"#fff",padding:"7px 13px",borderRadius:8,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",borderRadius:6,flexShrink:0},filterBar:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center",marginBottom:14},filterLabel:{fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--text-3)",marginRight:2},filterChip:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"5px 11px",borderRadius:16,fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},filterChipOn:{background:an,color:"#fff",borderColor:an},board:{display:"grid",gap:12,alignItems:"start"},lane:{background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:12,padding:"10px 10px 12px",minHeight:120,display:"flex",flexDirection:"column"},laneHead:{display:"flex",alignItems:"center",gap:7,padding:"2px 4px 10px"},laneDot:{width:9,height:9,borderRadius:"50%",flexShrink:0},laneLabel:{fontSize:12.5,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--text-2)"},laneCount:{fontSize:10.5,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 6px"},laneAdd:{marginLeft:"auto",border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center",padding:2,borderRadius:6},laneBody:{display:"flex",flexDirection:"column",gap:8,minHeight:40,flex:1},laneEmpty:{fontSize:12,color:"var(--text-3)",fontStyle:"italic",textAlign:"center",padding:"16px 0",border:"1px dashed var(--border)",borderRadius:8},insertLine:{height:3,borderRadius:2,margin:"1px 0"},itemCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"9px 10px",boxShadow:"0 1px 2px rgba(0,0,0,0.05)",cursor:"grab",touchAction:"none",userSelect:"none"},itemCardTop:{display:"flex",alignItems:"center",gap:6},itemName:{flex:1,minWidth:0,fontSize:13.5,fontWeight:700,wordBreak:"break-word"},itemField:{display:"flex",gap:8,fontSize:12,color:"var(--text-2)",marginTop:5,paddingLeft:19},fieldLabel:{fontWeight:700,color:"var(--text-3)",minWidth:64,flexShrink:0},tagWrap:{display:"flex",flexWrap:"wrap",gap:5,marginTop:8,paddingLeft:19},tag:{fontSize:10.5,fontWeight:700,color:an,background:"color-mix(in srgb, "+an+" 14%, transparent)",border:"1px solid color-mix(in srgb, "+an+" 30%, transparent)",borderRadius:12,padding:"2px 8px",whiteSpace:"nowrap"},doneMeta:{marginTop:8,paddingLeft:19,display:"flex",flexDirection:"column",gap:3},doneDate:{fontSize:11,fontWeight:700,color:"#4C9A6B"},doneNote:{fontSize:11.5,color:"var(--text-2)",fontStyle:"italic",wordBreak:"break-word"},ghost:{position:"fixed",zIndex:300,pointerEvents:"none",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"9px 10px",boxShadow:"0 8px 28px rgba(0,0,0,0.28)",opacity:.95,transform:"rotate(1.5deg)"},muted:{fontSize:13,color:"var(--text-3)"},muted2:{fontSize:11.5,color:"var(--text-3)",marginBottom:8},empty:{textAlign:"center",color:"var(--text-3)",padding:"50px 16px",fontSize:14,fontWeight:600,display:"flex",flexDirection:"column",alignItems:"center"},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)",marginBottom:8},colRow:{display:"flex",gap:6,alignItems:"center",marginBottom:8},colTypeSelect:{border:"1px solid var(--border)",borderRadius:9,padding:"9px 8px",fontSize:12.5,fontFamily:"inherit",outline:"none",background:"var(--bg)",color:"var(--text)",flexShrink:0},addColInline:{display:"inline-flex",alignItems:"center",gap:5,border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"7px 12px",borderRadius:8,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},statusPick:{display:"flex",gap:6,flexWrap:"wrap"},statusChip:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 13px",borderRadius:18,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},$r="#C9772E",cf={Carrot:i0,ShoppingCart:$0,Clapperboard:d0,ShoppingBag:Lh,Fuel:h0,Sparkles:_o,Shirt:L0,WashingMachine:U0,Zap:_g,Tv:H0,Droplet:p0,Coffee:c0,Utensils:G0,Bus:Jy,Train:N0,Plane:F0,Home:zs,Heart:zh,Gift:Ts,Book:Xy,Dumbbell:b0,Pill:A0,Phone:D0,Wifi:V0,Gamepad2:f0,Music:Dg,Scissors:Mh,PawPrint:E0,Baby:Yy,GraduationCap:Ch,Briefcase:Zy,Car:o0,Bike:Qy},Yr=({name:e,...r})=>{const n=cf[e]||Lh;return t.jsx(n,{...r})},Cd=["#C9772E","#4C9A6B","#3A7CA5","#8268B0","#C2536B","#C9A227","#D1556E","#5B7C99","#A23E57","#3E9E6B"],Zp=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,fa=Lo(),Go=120;function C2(e=760){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}function T2(){const e=C2(),r=ho(),n=$g(),[o,i]=c.useState([]),[s,a]=c.useState([]),[l,d]=c.useState([]),[g,m]=c.useState([]),[f,h]=c.useState(!1),[T,D]=c.useState(fa),[I,z]=c.useState(()=>new Date),[b,p]=c.useState(null),[u,y]=c.useState(null),[j,C]=c.useState(new Set),[k,x]=c.useState(!1),B=M=>C(ce=>{const We=new Set(ce);return We.has(M)?We.delete(M):We.add(M),We}),W=()=>{x(M=>!M),C(new Set)},Q=k||j.size>0,re=()=>{x(!1),C(new Set)},[ge,A]=c.useState(null),[X,ie]=c.useState(!1),[xe,q]=c.useState("day"),[K,de]=c.useState(()=>lr(new Date,n)[0]),[J,R]=c.useState(new Set),O=M=>R(ce=>{const We=new Set(ce);return We.has(M)?We.delete(M):We.add(M),We}),G=c.useCallback(()=>{Promise.all([_.getExpenses(),_.getTxns(),_.getInvestments()]).then(([M,ce,We])=>{i(M.categories),a(M.logs),d(Array.isArray(ce)?ce:[]),m(Array.isArray(We)?We:[]),h(!0)}).catch(()=>h(!0))},[]);c.useEffect(()=>{G()},[G]);const{deleteItem:$,toasts:ae,handleUndo:me,handleDismiss:Oe}=Cr(_.deleteExpenseLog,_.restoreExpenseLog,G),Ce=c.useMemo(()=>{const M={};return o.forEach(ce=>M[ce.id]=ce),M},[o]),U=M=>Bs(M,r.code),P=c.useMemo(()=>s.filter(M=>M.date===T),[s,T]),ne=P.reduce((M,ce)=>M+ce.amount,0),E=c.useMemo(()=>{const[M,ce]=lr(new Date,n),We=L=>L>=M&&L<=ce,Ye=l.filter(L=>L.kind==="income"&&We(L.date)).reduce((L,ze)=>L+ze.amount,0),St=l.filter(L=>L.kind==="expense"&&We(L.date)).reduce((L,ze)=>L+ze.amount,0),Ue=s.filter(L=>We(L.date)).reduce((L,ze)=>L+ze.amount,0),Ke=g.filter(L=>We(L.date)).reduce((L,ze)=>L+ze.invested,0),Tt=Ye-St-Ue-Ke,_r=Math.max(1,Math.round((new Date(ce+"T00:00")-new Date(fa+"T00:00"))/864e5)+1);return{remaining:Tt,daysLeft:_r,perDay:Tt/_r}},[l,s,g,n]),w=c.useMemo(()=>{const M=We=>{const Ye=new Date(fa+"T12:00:00");return Ye.setDate(Ye.getDate()+We),Zp(Ye)},ce=We=>s.filter(Ye=>Ye.date===We).reduce((Ye,St)=>Ye+St.amount,0);return[{label:"Today",value:ce(M(0)),color:$r},{label:"Yesterday",value:ce(M(-1)),color:"var(--text-3)"},{label:"Day before",value:ce(M(-2)),color:"var(--text-3)"}]},[s]),oe=c.useMemo(()=>{if(xe==="day")return P;if(xe==="month"){const[M,ce]=lr(new Date(T+"T00:00"),n);return s.filter(We=>We.date>=M&&We.date<=ce)}if(xe==="year"){const M=T.slice(0,4);return s.filter(ce=>ce.date.slice(0,4)===M)}return s},[s,P,xe,T,n]),he=oe.reduce((M,ce)=>M+ce.amount,0),V=c.useMemo(()=>{const M={};return oe.forEach(ce=>{M[ce.category_id]=(M[ce.category_id]||0)+ce.amount}),Object.entries(M).map(([ce,We])=>({cat:Ce[ce],amount:We})).filter(ce=>ce.cat).sort((ce,We)=>We.amount-ce.amount)},[oe,Ce]),fe=M=>lr(new Date(M+"T00:00"),n)[0],ye=c.useMemo(()=>{const M=new Set(s.map(ce=>fe(ce.date)));return M.add(lr(new Date,n)[0]),Array.from(M).sort().reverse().slice(0,12)},[s,n]),Ae=M=>new Date(M+"T00:00").toLocaleDateString("en-US",{month:"short",year:"numeric"}),tt=(M,ce)=>lr(new Date(M+"T00:00"),n,-ce)[0],yt=M=>J.size===0||J.has(M.category_id),_e=[K,tt(K,1),tt(K,2)],st=_e.map(M=>{const[ce,We]=lr(new Date(M+"T00:00"),n);return s.filter(Ye=>Ye.date>=ce&&Ye.date<=We&&yt(Ye)).reduce((Ye,St)=>Ye+St.amount,0)}),[Ze,at,vt]=st,ct=at>0?Math.round((Ze-at)/at*100):Ze>0?100:0,Ht=ct>0?ns:ct<0?so:Eh,Wt=ct>0?"#C2536B":ct<0?"#4C9A6B":"#9A968C",Et=c.useMemo(()=>{const[M,ce]=lr(new Date(K+"T00:00"),n),We={};return s.filter(Ye=>Ye.date>=M&&Ye.date<=ce&&yt(Ye)).forEach(Ye=>{We[Ye.category_id]=(We[Ye.category_id]||0)+Ye.amount}),Object.entries(We).map(([Ye,St])=>({cat:Ce[Ye],amount:St})).filter(Ye=>Ye.cat).sort((Ye,St)=>St.amount-Ye.amount)},[s,K,J,Ce,n]);let le=0;const Le=Et.map(M=>{const ce=Ze>0?le/Ze*100:0;le+=M.amount;const We=Ze>0?le/Ze*100:0;return{...M,start:ce,end:We,pct:Ze>0?M.amount/Ze*100:0}}),ot=Le.length?`conic-gradient(${Le.map(M=>`${M.cat.color} ${M.start}% ${M.end}%`).join(", ")})`:"var(--surface-2)",bt=c.useMemo(()=>{const[M,ce]=lr(I,n),We=new Date(M+"T00:00"),Ye=new Date(ce+"T00:00"),St=(We.getDay()+6)%7,Ue={};s.forEach(Tt=>{Tt.date>=M&&Tt.date<=ce&&(Ue[Tt.date]=(Ue[Tt.date]||0)+Tt.amount)});const Ke=[];for(let Tt=0;Tt<St;Tt++)Ke.push(null);for(let Tt=new Date(We);Tt<=Ye;Tt.setDate(Tt.getDate()+1)){const _r=Zp(Tt);Ke.push({date:_r,day:Tt.getDate(),total:Ue[_r]||0})}return Ke},[I,s,n]),zt=M=>z(ce=>{const[We]=lr(ce,n,M);return new Date(We+"T00:00")}),xr=c.useMemo(()=>{const[M,ce]=lr(I,n);if(n===1)return new Date(M+"T00:00").toLocaleDateString("en-US",{month:"long",year:"numeric"});const We=Ye=>new Date(Ye+"T00:00").toLocaleDateString("en-US",{day:"numeric",month:"short"});return`${We(M)} – ${We(ce)}`},[I,n]),Ge=M=>p({cat:M,amount:"",note:""}),it=async()=>{const M=parseFloat(b.amount);!M||M<=0||(await _.createExpenseLog({category_id:b.cat.id,amount:M,note:b.note.trim().slice(0,Go),date:T}),p(null),G())},xt=M=>y({id:M.id,category_id:M.category_id,amount:String(M.amount),note:M.note||"",date:M.date}),ut=async()=>{const M=parseFloat(u.amount);!M||M<=0||(await _.updateExpenseLog(u.id,{category_id:u.category_id,amount:M,note:u.note.trim().slice(0,Go),date:u.date}),y(null),G())},Dt=()=>A({id:null,name:"",icon:"ShoppingBag",color:Cd[o.length%Cd.length]}),Wr=M=>A({id:M.id,name:M.name,icon:M.icon,color:M.color}),jt=async()=>{const M=ge.name.trim();M&&(ge.id?await _.updateExpenseCategory(ge.id,{name:M,icon:ge.icon,color:ge.color}):await _.createExpenseCategory({name:M,icon:ge.icon,color:ge.color}),A(null),G())},Mr=async M=>{const ce=s.filter(Ye=>Ye.category_id===M.id).length,We=ce>0?`Delete "${M.name}"? Its ${ce} transaction${ce===1?"":"s"} will be moved to "Other".`:`Delete "${M.name}"?`;window.confirm(We)&&(await _.deleteExpenseCategory(M.id),G())},Gt=async(M,ce)=>{const We=M+ce;if(We<0||We>=o.length)return;const Ye=[...o];[Ye[M],Ye[We]]=[Ye[We],Ye[M]],i(Ye),await _.arrangeExpenseCategories(Ye.map(St=>St.id)).catch(()=>{}),G()},mn=new Date(T+"T00:00").toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"});let er=0;const or=V.map(M=>{const ce=he>0?er/he*100:0;er+=M.amount;const We=he>0?er/he*100:0;return{...M,start:ce,end:We,pct:he>0?M.amount/he*100:0}}),yr=or.length?`conic-gradient(${or.map(M=>`${M.cat.color} ${M.start}% ${M.end}%`).join(", ")})`:"var(--surface-2)";return t.jsxs("div",{style:{...N.page,...e?{padding:"20px 14px"}:{}},children:[t.jsx("div",{style:N.head,children:t.jsxs("div",{children:[t.jsx("div",{style:N.eyebrow,children:"Anvil · Expenses"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("h1",{style:N.h1,children:"Expenses"}),t.jsx(Yt,{id:"expenses"})]}),t.jsx("div",{style:N.subhead,children:"Log day-to-day spending by category and see where it goes."})]})}),t.jsxs("div",{style:N.totalCard,children:[t.jsxs("div",{style:N.totalLeft,children:[t.jsx(Fg,{size:20,color:$r}),t.jsxs("div",{children:[t.jsxs("div",{style:N.totalLabel,children:["Total spent ",xe==="day"?"today":xe==="month"?"this month":xe==="year"?"this year":"all time"]}),t.jsx("div",{style:N.totalVal,children:U(he)}),t.jsx("div",{style:{...N.budgetLine,color:E.perDay>=0?"#4C9A6B":"#C2536B"},children:E.perDay>=0?t.jsxs(t.Fragment,{children:["You can spend ≈ ",t.jsxs("b",{children:[U(E.perDay),"/day"]})," · ",E.daysLeft," day",E.daysLeft===1?"":"s"," till next cycle"]}):t.jsxs(t.Fragment,{children:["Overspent this cycle by ",U(Math.abs(E.remaining))," · ",E.daysLeft," day",E.daysLeft===1?"":"s"," left"]})})]})]}),t.jsx("div",{style:N.scopeRow,children:[["day","Day"],["month","Month"],["year","Year"],["all","All"]].map(([M,ce])=>t.jsx("button",{onClick:()=>q(M),style:{...N.scopeBtn,...xe===M?N.scopeBtnOn:{}},children:ce},M))})]}),t.jsxs("div",{style:{...N.card,marginBottom:16},children:[t.jsx("div",{style:N.threeDayTitle,children:"Last 3 days"}),t.jsx(Jp,{items:w,money:U})]}),t.jsxs("div",{style:{...N.cols,gridTemplateColumns:e?"minmax(0,1fr)":"320px minmax(0,1fr)"},children:[t.jsxs("div",{style:{...N.card,minWidth:0,...e?{padding:12}:{}},children:[t.jsxs("div",{style:N.calHead,children:[t.jsx("button",{onClick:()=>zt(-1),style:N.calNav,children:t.jsx(Mn,{size:16})}),t.jsx("span",{style:N.calTitle,children:xr}),t.jsx("button",{onClick:()=>zt(1),style:N.calNav,children:t.jsx(bn,{size:16})})]}),t.jsxs("div",{style:N.calGrid,children:[["M","T","W","T","F","S","S"].map((M,ce)=>t.jsx("div",{style:N.calDow,children:M},ce)),bt.map((M,ce)=>M===null?t.jsx("div",{},ce):t.jsxs("button",{onClick:()=>D(M.date),style:{...N.calCell,...M.date===T?N.calCellOn:{},...M.date===fa&&M.date!==T?N.calCellToday:{}},children:[t.jsx("span",{children:M.day}),M.total>0&&t.jsx("span",{style:{...N.calDot,background:M.date===T?"#fff":$r}})]},M.date))]})]}),t.jsxs("div",{children:[t.jsxs("div",{style:N.card,children:[t.jsxs("div",{style:N.cardTitleRow,children:[t.jsxs("div",{children:[t.jsx("div",{style:N.cardTitle,children:mn}),t.jsx("div",{style:N.cardSub,children:"Tap a category to log an expense for this day."})]}),t.jsx("div",{style:N.dayTotal,children:U(ne)})]}),t.jsxs("div",{style:N.iconGrid,children:[o.map(M=>t.jsxs("div",{style:N.iconCell,children:[t.jsx("button",{onClick:()=>Ge(M),style:{...N.iconBtn,background:M.color+"1A",color:M.color,borderColor:M.color+"44"},children:t.jsx(Yr,{name:M.icon,size:22})}),t.jsx("span",{style:N.iconLabel,children:M.name})]},M.id)),t.jsxs("div",{style:N.iconCell,children:[t.jsx("button",{onClick:Dt,style:N.iconBtnAdd,children:t.jsx(mt,{size:20})}),t.jsx("span",{style:N.iconLabel,children:"Add"})]})]}),t.jsxs("button",{onClick:()=>ie(!0),style:N.manageLink,children:[t.jsx(wt,{size:11})," Customize categories"]}),P.length>0&&t.jsx("div",{style:N.logList,children:P.map(M=>{const ce=Ce[M.category_id];return t.jsxs("div",{style:N.logRow,children:[t.jsx("span",{style:{...N.logIcon,background:((ce==null?void 0:ce.color)||"#9A968C")+"1A",color:(ce==null?void 0:ce.color)||"#9A968C"},children:t.jsx(Yr,{name:ce==null?void 0:ce.icon,size:14})}),t.jsxs("button",{onClick:()=>xt(M),style:N.logInfoBtn,title:"Edit this expense",children:[t.jsx("div",{style:N.logCat,children:(ce==null?void 0:ce.name)||"Deleted category"}),M.note&&t.jsx("div",{style:N.logNote,children:M.note})]}),t.jsx("span",{style:N.logAmt,children:U(M.amount)}),t.jsx("button",{onClick:()=>xt(M),style:N.editBtn,title:"Edit",children:t.jsx(wt,{size:13})}),t.jsx("button",{onClick:()=>$(M.id,(ce==null?void 0:ce.name)||"Expense"),style:N.delBtn,children:t.jsx(De,{size:14})})]},M.id)})})]}),t.jsxs("div",{style:N.card,children:[t.jsx("div",{style:N.cardTitleRow,children:t.jsxs("div",{children:[t.jsx("div",{style:N.cardTitle,children:"Spending by category"}),t.jsxs("div",{style:N.cardSub,children:[xe==="day"?"Today":xe==="month"?"This month":xe==="year"?"This year":"All time"," — percentage & amount"]})]})}),V.length===0?t.jsx("div",{style:N.muted,children:"No expenses logged for this period yet."}):t.jsxs("div",{style:N.pieWrap,children:[t.jsxs("div",{style:N.pieChart,children:[t.jsx("div",{style:{...N.pieDisc,background:yr}}),t.jsxs("div",{style:N.pieHole,children:[t.jsx("span",{style:N.pieHoleVal,children:U(he)}),t.jsx("span",{style:N.pieHoleLbl,children:"total"})]})]}),t.jsxs("div",{style:N.pieLegend,children:[or.map(M=>{const ce=j.has(M.cat.id);return t.jsxs("button",{onClick:()=>{x(!1),B(M.cat.id)},title:"Show these expenses",style:{...N.legendRow,...N.legendRowBtn,...ce?{background:M.cat.color+"1A"}:{}},children:[t.jsx("span",{style:{...N.dot,background:M.cat.color}}),t.jsx(Yr,{name:M.cat.icon,size:13,style:{color:M.cat.color,flexShrink:0}}),t.jsx("span",{style:N.legendName,children:M.cat.name}),t.jsxs("span",{style:N.legendPct,children:[Math.round(M.pct),"%"]}),t.jsx("span",{style:N.legendAmt,children:U(M.amount)}),ce&&t.jsx(He,{size:13,style:{color:M.cat.color,flexShrink:0}})]},M.cat.id)}),t.jsxs("button",{onClick:W,title:"Show every transaction in this period",style:{...N.legendRow,...N.legendRowBtn,...k?{background:"var(--hover)"}:{}},children:[t.jsx(Vo,{size:13,style:{color:"var(--text-2)",flexShrink:0}}),t.jsx("span",{style:{...N.legendName,fontWeight:700},children:"All categories"}),t.jsx("span",{style:N.legendAmt,children:U(he)})]})]})]}),Q&&(()=>{const M=oe.filter(Ue=>k||j.has(Ue.category_id)).slice().sort((Ue,Ke)=>Ke.date.localeCompare(Ue.date)||Ke.id-Ue.id),ce=M.reduce((Ue,Ke)=>Ue+Ke.amount,0),We=k?[]:[...j].map(Ue=>Ce[Ue]).filter(Boolean),Ye=k?"All categories":We.map(Ue=>Ue.name).join(", ")||"Category",St=k||We.length>1;return t.jsxs("div",{style:N.drillBox,children:[t.jsxs("div",{style:N.drillHead,children:[t.jsx("span",{style:{...N.iconBadge,background:(!k&&We.length===1?We[0].color:"#9A968C")+"1A",color:!k&&We.length===1?We[0].color:"#9A968C"},children:k||We.length!==1?t.jsx(Vo,{size:15}):t.jsx(Yr,{name:We[0].icon,size:15})}),t.jsxs("span",{style:N.drillTitle,children:[Ye," · ",M.length," transaction",M.length===1?"":"s"," · ",U(ce)]}),t.jsx("button",{onClick:re,style:N.delBtn,title:"Close",children:t.jsx(De,{size:15})})]}),M.length===0?t.jsx("div",{style:N.muted,children:"No expenses in this period."}):t.jsx("div",{style:{...N.logList,...N.drillList},children:M.map(Ue=>{const Ke=Ce[Ue.category_id];return t.jsxs("div",{style:N.logRow,children:[St&&t.jsx("span",{style:{...N.logIcon,background:((Ke==null?void 0:Ke.color)||"#9A968C")+"1A",color:(Ke==null?void 0:Ke.color)||"#9A968C"},children:t.jsx(Yr,{name:Ke==null?void 0:Ke.icon,size:14})}),t.jsxs("button",{onClick:()=>xt(Ue),style:N.logInfoBtn,title:"Edit this expense",children:[t.jsxs("div",{style:N.logCat,children:[St?`${(Ke==null?void 0:Ke.name)||"Other"} · `:"",new Date(Ue.date+"T00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",year:"numeric"})]}),Ue.note&&t.jsx("div",{style:N.logNote,children:Ue.note})]}),t.jsx("span",{style:N.logAmt,children:U(Ue.amount)}),t.jsx("button",{onClick:()=>xt(Ue),style:N.editBtn,title:"Edit",children:t.jsx(wt,{size:13})}),t.jsx("button",{onClick:()=>$(Ue.id,(Ke==null?void 0:Ke.name)||"Expense"),style:N.delBtn,children:t.jsx(De,{size:14})})]},Ue.id)})})]})})()]}),t.jsxs("div",{style:N.card,children:[t.jsx("div",{style:N.cardTitleRow,children:t.jsxs("div",{children:[t.jsx("div",{style:N.cardTitle,children:"Monthly trend"}),t.jsx("div",{style:N.cardSub,children:"Compare a month against the previous two"})]})}),t.jsx("div",{style:N.tagRow,children:ye.map(M=>t.jsxs("button",{onClick:()=>de(M),style:{...N.tagChip,...K===M?N.tagChipOn:{}},children:[t.jsx(Vo,{size:11})," ",Ae(M)]},M))}),t.jsxs("div",{style:{...N.tagRow,marginTop:8},children:[t.jsxs("button",{onClick:()=>R(new Set),style:{...N.tagChip,...J.size===0?N.tagChipOn:{}},children:[t.jsx(Vo,{size:11})," All categories"]}),o.map(M=>{const ce=J.has(M.id);return t.jsxs("button",{onClick:()=>O(M.id),style:{...N.tagChip,...ce?N.tagChipOn:{}},children:[t.jsx(Yr,{name:M.icon,size:11})," ",M.name,ce&&t.jsx(He,{size:11,style:{marginLeft:2}})]},M.id)})]}),t.jsxs("div",{style:{...N.trend3,marginTop:16},children:[t.jsxs("div",{style:N.trendCol,children:[t.jsx("div",{style:N.trendVal,children:U(Ze)}),t.jsx("div",{style:N.trendLbl,children:Ae(_e[0])})]}),t.jsxs("div",{style:N.trendCol,children:[t.jsx("div",{style:{...N.trendVal,color:"var(--text-2)"},children:U(at)}),t.jsx("div",{style:N.trendLbl,children:Ae(_e[1])})]}),t.jsxs("div",{style:N.trendCol,children:[t.jsx("div",{style:{...N.trendVal,color:"var(--text-3)"},children:U(vt)}),t.jsx("div",{style:N.trendLbl,children:Ae(_e[2])})]})]}),t.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:14},children:t.jsxs("div",{style:{...N.trendBadge,color:Wt,background:Wt+"1A"},children:[t.jsx(Ht,{size:15})," ",ct>0?"+":"",ct,"% vs ",Ae(_e[1])]})}),t.jsx(Jp,{items:[{label:Ae(_e[0]),value:Ze,color:$r},{label:Ae(_e[1]),value:at,color:"var(--text-3)"},{label:Ae(_e[2]),value:vt,color:"var(--text-3)"}],money:U}),t.jsx("div",{style:N.trendDivider}),t.jsxs("div",{style:N.cardSub,children:["Category split for ",Ae(K)]}),Et.length===0?t.jsx("div",{style:N.muted,children:"No expenses logged for this month yet."}):t.jsxs("div",{style:{...N.pieWrap,marginTop:10},children:[t.jsxs("div",{style:N.pieChart,children:[t.jsx("div",{style:{...N.pieDisc,background:ot}}),t.jsxs("div",{style:N.pieHole,children:[t.jsx("span",{style:N.pieHoleVal,children:U(Ze)}),t.jsx("span",{style:N.pieHoleLbl,children:"total"})]})]}),t.jsx("div",{style:N.pieLegend,children:Le.map(M=>t.jsxs("div",{style:N.legendRow,children:[t.jsx("span",{style:{...N.dot,background:M.cat.color}}),t.jsx(Yr,{name:M.cat.icon,size:13,style:{color:M.cat.color,flexShrink:0}}),t.jsx("span",{style:N.legendName,children:M.cat.name}),t.jsxs("span",{style:N.legendPct,children:[Math.round(M.pct),"%"]}),t.jsx("span",{style:N.legendAmt,children:U(M.amount)})]},M.cat.id))})]}),(()=>{const[M,ce]=lr(new Date(K+"T00:00"),n),We=s.filter(Ue=>Ue.date>=M&&Ue.date<=ce&&yt(Ue)).slice().sort((Ue,Ke)=>Ke.date.localeCompare(Ue.date)||Ke.id-Ue.id);if(We.length===0)return null;const Ye=J.size===0?"All categories":[...J].map(Ue=>{var Ke;return(Ke=Ce[Ue])==null?void 0:Ke.name}).filter(Boolean).join(", "),St=We.reduce((Ue,Ke)=>Ue+Ke.amount,0);return t.jsxs("div",{style:N.drillBox,children:[t.jsxs("div",{style:N.drillHead,children:[t.jsx("span",{style:{...N.iconBadge,background:"#9A968C1A",color:"#9A968C"},children:t.jsx(Vo,{size:15})}),t.jsxs("span",{style:N.drillTitle,children:[Ye," · ",Ae(K)," · ",We.length," transaction",We.length===1?"":"s"," · ",U(St)]})]}),t.jsx("div",{style:{...N.logList,...N.drillList},children:We.map(Ue=>{const Ke=Ce[Ue.category_id];return t.jsxs("div",{style:N.logRow,children:[t.jsx("span",{style:{...N.logIcon,background:((Ke==null?void 0:Ke.color)||"#9A968C")+"1A",color:(Ke==null?void 0:Ke.color)||"#9A968C"},children:t.jsx(Yr,{name:Ke==null?void 0:Ke.icon,size:14})}),t.jsxs("button",{onClick:()=>xt(Ue),style:N.logInfoBtn,title:"Edit this expense",children:[t.jsxs("div",{style:N.logCat,children:[(Ke==null?void 0:Ke.name)||"Other"," · ",new Date(Ue.date+"T00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",year:"numeric"})]}),Ue.note&&t.jsx("div",{style:N.logNote,children:Ue.note})]}),t.jsx("span",{style:N.logAmt,children:U(Ue.amount)}),t.jsx("button",{onClick:()=>xt(Ue),style:N.editBtn,title:"Edit",children:t.jsx(wt,{size:13})}),t.jsx("button",{onClick:()=>$(Ue.id,(Ke==null?void 0:Ke.name)||"Expense"),style:N.delBtn,children:t.jsx(De,{size:14})})]},Ue.id)})})]})})()]})]})]}),b&&t.jsx("div",{style:N.overlay,onClick:()=>p(null),children:t.jsxs("div",{style:N.modal,onClick:M=>M.stopPropagation(),children:[t.jsxs("div",{style:N.modalHead,children:[t.jsxs("span",{style:{...N.modalTitle,display:"flex",alignItems:"center",gap:8},children:[t.jsx("span",{style:{...N.iconBadge,background:b.cat.color+"1A",color:b.cat.color},children:t.jsx(Yr,{name:b.cat.icon,size:16})}),b.cat.name]}),t.jsx("button",{onClick:()=>p(null),style:N.iconBtnPlain,children:t.jsx(De,{size:16})})]}),t.jsx("label",{style:N.label,children:"Amount *"}),t.jsx("input",{autoFocus:!0,type:"number",inputMode:"decimal",value:b.amount,onChange:M=>p(ce=>({...ce,amount:M.target.value})),onKeyDown:M=>M.key==="Enter"&&it(),placeholder:"0",style:N.input}),t.jsx("label",{style:N.label,children:"Note (optional)"}),t.jsx("input",{value:b.note,maxLength:Go,onChange:M=>p(ce=>({...ce,note:M.target.value})),onKeyDown:M=>M.key==="Enter"&&it(),placeholder:"What was it for?",style:N.input}),t.jsxs("div",{style:N.noteCount,children:[b.note.length,"/",Go]}),t.jsxs("div",{style:N.modalActions,children:[t.jsx("button",{onClick:()=>p(null),style:N.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:it,disabled:!b.amount,style:{...N.saveBtn,...b.amount?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," Add"]})]})]})}),u&&(Ce[u.category_id],t.jsx("div",{style:N.overlay,onClick:()=>y(null),children:t.jsxs("div",{style:N.modal,onClick:M=>M.stopPropagation(),children:[t.jsxs("div",{style:N.modalHead,children:[t.jsx("span",{style:N.modalTitle,children:"Edit expense"}),t.jsx("button",{onClick:()=>y(null),style:N.iconBtnPlain,children:t.jsx(De,{size:16})})]}),t.jsx("label",{style:N.label,children:"Category"}),t.jsx(cr,{value:u.category_id,options:o.map(M=>({value:M.id,label:M.name})),onChange:M=>y(ce=>({...ce,category_id:Number(M)})),style:{marginBottom:8}}),t.jsx("label",{style:N.label,children:"Amount *"}),t.jsx("input",{autoFocus:!0,type:"number",inputMode:"decimal",value:u.amount,onChange:M=>y(ce=>({...ce,amount:M.target.value})),onKeyDown:M=>M.key==="Enter"&&ut(),placeholder:"0",style:N.input}),t.jsx("label",{style:N.label,children:"Date"}),t.jsx("input",{type:"date",value:u.date,onChange:M=>y(ce=>({...ce,date:M.target.value})),style:N.input}),t.jsx("label",{style:N.label,children:"Note (optional)"}),t.jsx("input",{value:u.note,maxLength:Go,onChange:M=>y(ce=>({...ce,note:M.target.value})),onKeyDown:M=>M.key==="Enter"&&ut(),placeholder:"What was it for?",style:N.input}),t.jsxs("div",{style:N.noteCount,children:[u.note.length,"/",Go]}),t.jsxs("div",{style:N.modalActions,children:[t.jsx("button",{onClick:()=>y(null),style:N.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:ut,disabled:!u.amount,style:{...N.saveBtn,...u.amount?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," Save"]})]})]})})),X&&t.jsx("div",{style:N.overlay,onClick:()=>ie(!1),children:t.jsxs("div",{style:N.modal,onClick:M=>M.stopPropagation(),children:[t.jsxs("div",{style:N.modalHead,children:[t.jsx("span",{style:N.modalTitle,children:"Customize categories"}),t.jsx("button",{onClick:()=>ie(!1),style:N.iconBtnPlain,children:t.jsx(De,{size:16})})]}),t.jsx("div",{style:N.manageHint,children:"Use the arrows to reorder how categories appear."}),t.jsx("div",{style:N.manageList,children:o.map((M,ce)=>t.jsxs("div",{style:N.manageRow,children:[t.jsxs("div",{style:N.reorderCol,children:[t.jsx("button",{onClick:()=>Gt(ce,-1),disabled:ce===0,style:{...N.reorderBtn,...ce===0?N.reorderDisabled:{}},title:"Move up",children:t.jsx(Bl,{size:13})}),t.jsx("button",{onClick:()=>Gt(ce,1),disabled:ce===o.length-1,style:{...N.reorderBtn,...ce===o.length-1?N.reorderDisabled:{}},title:"Move down",children:t.jsx(mo,{size:13})})]}),t.jsx("span",{style:{...N.iconBadge,background:M.color+"1A",color:M.color},children:t.jsx(Yr,{name:M.icon,size:15})}),t.jsx("span",{style:{flex:1,fontSize:13.5,fontWeight:600},children:M.name}),t.jsx("button",{onClick:()=>Wr(M),style:N.delBtn,children:t.jsx(wt,{size:13})}),t.jsx("button",{onClick:()=>Mr(M),style:N.delBtn,children:t.jsx(De,{size:14})})]},M.id))}),t.jsxs("button",{onClick:Dt,style:N.addColInline,children:[t.jsx(mt,{size:13})," Add category"]})]})}),ge&&t.jsx("div",{style:N.overlay,onClick:()=>A(null),children:t.jsxs("div",{style:N.modal,onClick:M=>M.stopPropagation(),children:[t.jsxs("div",{style:N.modalHead,children:[t.jsx("span",{style:N.modalTitle,children:ge.id?"Edit category":"New category"}),t.jsx("button",{onClick:()=>A(null),style:N.iconBtnPlain,children:t.jsx(De,{size:16})})]}),t.jsx("label",{style:N.label,children:"Name *"}),t.jsx("input",{autoFocus:!0,value:ge.name,onChange:M=>A(ce=>({...ce,name:M.target.value})),onKeyDown:M=>M.key==="Enter"&&jt(),placeholder:"e.g. Vegetables, Petrol…",style:N.input}),t.jsx("label",{style:N.label,children:"Color"}),t.jsx("div",{style:N.colorRow,children:Cd.map(M=>t.jsx("button",{onClick:()=>A(ce=>({...ce,color:M})),style:{...N.colorSwatch,background:M,...ge.color===M?N.colorSwatchOn:{}}},M))}),t.jsx("label",{style:N.label,children:"Icon"}),t.jsx("div",{style:N.iconPickGrid,children:Object.keys(cf).map(M=>t.jsx("button",{onClick:()=>A(ce=>({...ce,icon:M})),style:{...N.iconPick,...ge.icon===M?{background:ge.color+"22",borderColor:ge.color,color:ge.color}:{}},children:t.jsx(Yr,{name:M,size:17})},M))}),t.jsxs("div",{style:N.modalActions,children:[t.jsx("button",{onClick:()=>A(null),style:N.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:jt,disabled:!ge.name.trim(),style:{...N.saveBtn,...ge.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," ",ge.id?"Save":"Create"]})]})]})}),!f&&t.jsx("div",{style:N.muted,children:"Loading…"}),t.jsx(Tr,{toasts:ae,onUndo:me,onDismiss:Oe})]})}function Jp({items:e,money:r}){const n=Math.max(1,...e.map(o=>o.value));return t.jsx("div",{style:N.tbWrap,children:e.map((o,i)=>t.jsxs("div",{style:N.tbRow,children:[t.jsx("div",{style:N.tbLbl,children:o.label}),t.jsx("div",{style:N.tbTrack,children:t.jsx("div",{style:{...N.tbBar,width:`${o.value/n*100}%`,background:o.color}})}),t.jsx("div",{style:N.tbVal,children:r(o.value)})]},i))})}const N={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box",maxWidth:"100%",overflowX:"hidden"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},totalCard:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:14,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:16,padding:"16px 18px",marginBottom:16,flexWrap:"wrap"},totalLeft:{display:"flex",alignItems:"center",gap:12},totalLabel:{fontSize:12,color:"var(--text-3)",fontWeight:600},totalVal:{fontSize:24,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:2},budgetLine:{fontSize:11.5,fontWeight:600,marginTop:4},scopeRow:{display:"flex",gap:6},scopeBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 13px",borderRadius:8,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},scopeBtnOn:{background:$r,color:"#fff",borderColor:$r},cols:{display:"grid",gap:16,alignItems:"start"},card:{background:"var(--surface)",borderRadius:16,padding:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)",marginBottom:16},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14,gap:10},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardSub:{fontSize:11.5,color:"var(--text-3)",marginTop:2},dayTotal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap",color:$r},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"14px 0"},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},calNav:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,minmax(0,1fr))",gap:4},calDow:{fontSize:10.5,fontWeight:700,color:"var(--text-3)",textAlign:"center",padding:"4px 0"},calCell:{position:"relative",border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",borderRadius:8,aspectRatio:"1",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},calCellOn:{background:$r,color:"#fff",borderColor:$r,fontWeight:700},calCellToday:{borderColor:$r,fontWeight:700},calDot:{position:"absolute",bottom:3,width:4,height:4,borderRadius:"50%"},iconGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(64px, 1fr))",gap:10,marginTop:4},iconCell:{display:"flex",flexDirection:"column",alignItems:"center",gap:5},iconBtn:{width:52,height:52,borderRadius:14,border:"1px solid",display:"grid",placeItems:"center",cursor:"pointer"},iconBtnAdd:{width:52,height:52,borderRadius:14,border:"1px dashed var(--border)",background:"none",color:"var(--text-3)",display:"grid",placeItems:"center",cursor:"pointer"},iconLabel:{fontSize:10.5,fontWeight:600,color:"var(--text-2)",textAlign:"center",maxWidth:66,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},manageLink:{display:"inline-flex",alignItems:"center",gap:5,border:"none",background:"none",color:"var(--text-3)",fontSize:11.5,fontWeight:600,cursor:"pointer",marginTop:12,padding:0,fontFamily:"inherit"},logList:{marginTop:14,paddingTop:14,borderTop:"1px solid var(--border)",display:"flex",flexDirection:"column",gap:8},logRow:{display:"flex",alignItems:"center",gap:10,minWidth:0},logIcon:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},logInfoBtn:{flex:1,minWidth:0,border:"none",background:"none",padding:0,cursor:"pointer",textAlign:"left",fontFamily:"inherit",overflow:"hidden",color:"inherit"},logCat:{fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},logNote:{fontSize:11,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},logAmt:{fontSize:13.5,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap",flexShrink:0},editBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",flexShrink:0},delBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",flexShrink:0},noteCount:{fontSize:10.5,color:"var(--text-3)",textAlign:"right",marginTop:3},pieWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap"},pieChart:{position:"relative",width:132,height:132,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:80,height:80,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:14,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:7},legendRowBtn:{width:"100%",border:"none",background:"none",cursor:"pointer",fontFamily:"inherit",padding:"5px 7px",borderRadius:8,textAlign:"left",color:"var(--text)"},drillBox:{marginTop:14,paddingTop:12,borderTop:"1px solid var(--border)"},drillList:{maxHeight:320,overflowY:"auto",paddingRight:4},drillHead:{display:"flex",alignItems:"center",gap:9,marginBottom:4},drillTitle:{flex:1,fontSize:13,fontWeight:700,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},dot:{width:9,height:9,borderRadius:3,flexShrink:0},legendName:{flex:1,fontSize:12.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},legendPct:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,width:34,textAlign:"right"},legendAmt:{fontSize:12.5,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:64,textAlign:"right"},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtnPlain:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},iconBadge:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)",marginBottom:8},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},manageHint:{fontSize:11.5,color:"var(--text-3)",marginBottom:8},manageList:{display:"flex",flexDirection:"column",gap:6,marginBottom:10,maxHeight:320,overflowY:"auto"},manageRow:{display:"flex",alignItems:"center",gap:10,padding:"6px 2px"},reorderCol:{display:"flex",flexDirection:"column",gap:1,flexShrink:0},reorderBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:22,height:17,borderRadius:5,cursor:"pointer",display:"grid",placeItems:"center",padding:0},reorderDisabled:{opacity:.35,cursor:"not-allowed"},addColInline:{display:"inline-flex",alignItems:"center",gap:5,border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"9px 12px",borderRadius:8,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit",width:"100%",justifyContent:"center"},colorRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:4},colorSwatch:{width:26,height:26,borderRadius:"50%",border:"2px solid transparent",cursor:"pointer",padding:0},colorSwatchOn:{border:"2px solid var(--text)",boxShadow:"0 0 0 2px var(--surface)"},iconPickGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6,marginBottom:4},iconPick:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",borderRadius:9,height:36,display:"grid",placeItems:"center",cursor:"pointer"},tagRow:{display:"flex",gap:6,flexWrap:"wrap"},tagChip:{display:"inline-flex",alignItems:"center",gap:4,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:20,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tagChipOn:{background:$r,color:"#fff",borderColor:$r},trendDivider:{height:1,background:"var(--border)",margin:"16px 0 12px"},trend3:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12,gap:8},trendCol:{textAlign:"center",flex:1},trendVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},trendLbl:{fontSize:11,color:"var(--text-3)",marginTop:2},trendBadge:{display:"inline-flex",alignItems:"center",gap:4,fontSize:13,fontWeight:800,padding:"6px 12px",borderRadius:20,width:"fit-content"},threeDayTitle:{fontSize:13,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:78,fontSize:11,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},tbTrack:{flex:1,height:14,background:"#F2F0EA",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:64,fontSize:11,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"}},Sn="#C9A227",ko="#C2536B",gl="#4C9A6B";new Date().toISOString().slice(0,10);const z2=e=>e?new Date(e+"T00:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"—";function I2(e=620){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const Td=e=>(Number(e)||0).toLocaleString(void 0,{maximumFractionDigits:2});function B2(e){const r=e.target||0,n=e.completed||0;return r<=0?{pct:0,negPct:0,negative:!1}:n<0?{pct:0,negPct:Math.min(100,Math.abs(n)/r*100),negative:!0}:{pct:Math.min(100,n/r*100),negPct:0,negative:!1}}const R2=()=>({id:null,name:"",completed:"",target:"",end_date:"",reward:"",reward_cost:"",comment:"",allow_negative:!1});function E2(){const e=ho(),r=u=>_s(u,e.code),n=I2(),[o,i]=c.useState([]),[s,a]=c.useState(!1),[l,d]=c.useState(null),[g,m]=c.useState(null),f=c.useCallback(()=>{_.getChallenges().then(u=>{i(Array.isArray(u)?u:[]),a(!0)}).catch(()=>a(!0))},[]);c.useEffect(()=>{f()},[f]);const h=c.useMemo(()=>{const u=o.filter(j=>j.status==="done"),y=u.reduce((j,C)=>j+(C.reward_earned||0),0);return{total:o.length,done:u.length,active:o.filter(j=>j.status==="active").length,failed:o.filter(j=>j.status==="failed").length,earned:y}},[o]),T=()=>d(R2()),D=u=>d({id:u.id,name:u.name,completed:String(u.completed??""),target:String(u.target??""),end_date:u.end_date||"",reward:u.reward||"",reward_cost:String(u.reward_cost??""),comment:u.comment||"",allow_negative:!!u.allow_negative}),I=async()=>{const u=l.name.trim();if(!u)return;const y={name:u,completed:parseFloat(l.completed)||0,target:parseFloat(l.target)||0,end_date:l.end_date||null,reward:l.reward.trim(),reward_cost:parseFloat(l.reward_cost)||0,comment:l.comment.trim(),allow_negative:l.allow_negative};l.id?await _.updateChallenge(l.id,y):await _.createChallenge(y),d(null),f()},z=async u=>{window.confirm(`Delete challenge "${u.name}"?`)&&(await _.deleteChallenge(u.id),f())},b=u=>m({ch:u,amount:"",mode:"add"}),p=async()=>{const u=parseFloat(g.amount);if(isNaN(u))return;const y=g.mode==="set"?u:(g.ch.completed||0)+u;await _.updateChallenge(g.ch.id,{completed:y}),m(null),f()};return t.jsxs("div",{style:Se.page,children:[t.jsxs("div",{style:Se.head,children:[t.jsx("div",{style:Se.eyebrow,children:"Anvil · Challenges"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("h1",{style:Se.h1,children:"Challenges"}),t.jsx(Yt,{id:"challenges"})]}),t.jsx("div",{style:Se.subhead,children:"Small steps toward success — track each toward its target and bank the reward on completion."})]}),t.jsxs("div",{style:Se.statRow,children:[t.jsxs("div",{style:Se.statCard,children:[t.jsx("div",{style:Se.statVal,children:h.active}),t.jsx("div",{style:Se.statLbl,children:"Active"})]}),t.jsxs("div",{style:Se.statCard,children:[t.jsx("div",{style:{...Se.statVal,color:gl},children:h.done}),t.jsx("div",{style:Se.statLbl,children:"Completed"})]}),t.jsxs("div",{style:Se.statCard,children:[t.jsx("div",{style:{...Se.statVal,color:ko},children:h.failed}),t.jsx("div",{style:Se.statLbl,children:"Missed"})]}),t.jsxs("div",{style:Se.statCard,children:[t.jsx("div",{style:{...Se.statVal,color:Sn},children:r(h.earned)}),t.jsx("div",{style:Se.statLbl,children:"Reward earned"})]})]}),t.jsxs("button",{onClick:T,style:Se.addBtn,children:[t.jsx(mt,{size:16})," New challenge"]}),o.length===0?t.jsx("div",{style:Se.empty,children:s?"No challenges yet. Create your first small step toward success.":"Loading…"}):t.jsx("div",{style:Se.list,children:o.map((u,y)=>{const{pct:j,negPct:C,negative:k}=B2(u),x=k?ko:u.status==="done"?gl:Sn;return t.jsxs("div",{style:{...Se.card,...u.status==="failed"?Se.cardFailed:{}},children:[t.jsxs("div",{style:{...Se.cardTop,...n?{alignItems:"flex-start"}:{}},children:[t.jsxs("span",{style:{...Se.num,...n?{marginTop:2}:{}},children:["#",y+1]}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:{...Se.name,...n?Se.nameMobile:{}},children:u.name}),u.comment&&t.jsx("div",{style:Se.comment,children:u.comment}),n&&t.jsx("div",{style:Se.badgeRow,children:t.jsx(eb,{status:u.status})})]}),!n&&t.jsx(eb,{status:u.status}),t.jsx("button",{onClick:()=>D(u),style:Se.iconBtn,title:"Edit",children:t.jsx(wt,{size:13})}),t.jsx("button",{onClick:()=>z(u),style:Se.iconBtn,title:"Delete",children:t.jsx(De,{size:14})})]}),t.jsxs("div",{style:Se.barWrap,children:[t.jsx("div",{style:Se.barTrack,children:k?t.jsx("div",{style:{...Se.barFill,width:`${C}%`,background:ko,marginLeft:"auto"}}):t.jsx("div",{style:{...Se.barFill,width:`${j}%`,background:x}})}),t.jsxs("div",{style:Se.barMetaRow,children:[t.jsxs("span",{style:{...Se.completed,color:(u.completed||0)<0?ko:"var(--text)"},children:[(u.completed||0)<0&&t.jsx(so,{size:12,style:{marginRight:3,verticalAlign:"-1px"}}),Td(u.completed)]}),t.jsx("span",{style:Se.barPct,children:k?`-${Math.round(C)}%`:`${Math.round(j)}%`}),t.jsxs("span",{style:Se.target,children:["of ",Td(u.target)]})]})]}),t.jsxs("div",{style:Se.chips,children:[t.jsxs("span",{style:Se.chip,children:[t.jsx(m0,{size:12})," Remaining ",Td(u.remaining)]}),t.jsxs("span",{style:Se.chip,children:[t.jsx(t0,{size:12})," ",u.end_date?`Ends ${z2(u.end_date)}`:"No deadline"]}),u.reward&&t.jsxs("span",{style:Se.chip,children:[t.jsx(Ts,{size:12})," ",u.reward]}),u.reward_cost>0&&t.jsxs("span",{style:{...Se.chip,...Se.chipReward},children:[t.jsx(rn,{size:12})," ",r(u.reward_cost),u.status==="done"?" earned":""]}),u.allow_negative&&t.jsx("span",{style:{...Se.chip,color:ko,borderColor:ko+"55"},children:"± negative allowed"})]}),t.jsx("div",{style:Se.actions,children:t.jsxs("button",{onClick:()=>b(u),style:Se.progressBtn,children:[t.jsx(mt,{size:13})," Update progress"]})})]},u.id)})}),l&&t.jsx("div",{style:Se.overlay,onClick:()=>d(null),children:t.jsxs("div",{style:Se.modal,onClick:u=>u.stopPropagation(),children:[t.jsxs("div",{style:Se.modalHead,children:[t.jsx("span",{style:Se.modalTitle,children:l.id?"Edit challenge":"New challenge"}),t.jsx("button",{onClick:()=>d(null),style:Se.iconBtnPlain,children:t.jsx(De,{size:16})})]}),t.jsx("label",{style:Se.label,children:"Name *"}),t.jsx("input",{autoFocus:!0,value:l.name,onChange:u=>d(y=>({...y,name:u.target.value})),placeholder:"e.g. Earn ₹1,00,000 from trading",style:Se.input}),t.jsxs("div",{style:Se.grid2,children:[t.jsxs("div",{children:[t.jsx("label",{style:Se.label,children:"Completed"}),t.jsx("input",{type:"number",inputMode:"decimal",value:l.completed,onChange:u=>d(y=>({...y,completed:u.target.value})),placeholder:"0",style:Se.input})]}),t.jsxs("div",{children:[t.jsx("label",{style:Se.label,children:"Target"}),t.jsx("input",{type:"number",inputMode:"decimal",value:l.target,onChange:u=>d(y=>({...y,target:u.target.value})),placeholder:"0",style:Se.input})]})]}),t.jsx("label",{style:Se.label,children:"End date (optional — past & incomplete marks it missed)"}),t.jsx("input",{type:"date",value:l.end_date,onChange:u=>d(y=>({...y,end_date:u.target.value})),style:Se.input}),t.jsxs("div",{style:Se.grid2,children:[t.jsxs("div",{children:[t.jsx("label",{style:Se.label,children:"Reward"}),t.jsx("input",{value:l.reward,onChange:u=>d(y=>({...y,reward:u.target.value})),placeholder:"e.g. New headphones",style:Se.input})]}),t.jsxs("div",{children:[t.jsx("label",{style:Se.label,children:"Reward cost"}),t.jsx("input",{type:"number",inputMode:"decimal",value:l.reward_cost,onChange:u=>d(y=>({...y,reward_cost:u.target.value})),placeholder:"0",style:Se.input})]})]}),t.jsx("label",{style:Se.label,children:"Comment"}),t.jsx("input",{value:l.comment,onChange:u=>d(y=>({...y,comment:u.target.value})),placeholder:"Notes about this challenge",style:Se.input}),t.jsxs("label",{style:Se.toggleRow,children:[t.jsx("input",{type:"checkbox",checked:l.allow_negative,onChange:u=>d(y=>({...y,allow_negative:u.target.checked})),style:Se.checkbox}),t.jsxs("span",{children:[t.jsx("span",{style:Se.toggleLabel,children:"Allow negative progress"}),t.jsx("span",{style:Se.toggleHint,children:"Let progress drop below zero (e.g. a running trading loss shown in red)."})]})]}),t.jsxs("div",{style:Se.modalActions,children:[t.jsx("button",{onClick:()=>d(null),style:Se.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:I,disabled:!l.name.trim(),style:{...Se.saveBtn,...l.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," ",l.id?"Save":"Create"]})]})]})}),g&&t.jsx("div",{style:Se.overlay,onClick:()=>m(null),children:t.jsxs("div",{style:Se.modal,onClick:u=>u.stopPropagation(),children:[t.jsxs("div",{style:Se.modalHead,children:[t.jsxs("span",{style:Se.modalTitle,children:["Update · ",g.ch.name]}),t.jsx("button",{onClick:()=>m(null),style:Se.iconBtnPlain,children:t.jsx(De,{size:16})})]}),t.jsxs("div",{style:Se.progressCur,children:["Current: ",t.jsx("b",{children:r(g.ch.completed)})," of ",r(g.ch.target)]}),t.jsxs("div",{style:Se.modeRow,children:[t.jsx("button",{onClick:()=>m(u=>({...u,mode:"add"})),style:{...Se.modeBtn,...g.mode==="add"?Se.modeBtnOn:{}},children:"Add / subtract"}),t.jsx("button",{onClick:()=>m(u=>({...u,mode:"set"})),style:{...Se.modeBtn,...g.mode==="set"?Se.modeBtnOn:{}},children:"Set total"})]}),t.jsx("label",{style:Se.label,children:g.mode==="set"?"New completed total":"Amount to add (use a negative number to subtract)"}),t.jsx("input",{autoFocus:!0,type:"number",inputMode:"decimal",value:g.amount,onChange:u=>m(y=>({...y,amount:u.target.value})),onKeyDown:u=>u.key==="Enter"&&p(),placeholder:"0",style:Se.input}),!g.ch.allow_negative&&t.jsx("div",{style:Se.progressHint,children:"Negative totals are blocked for this challenge. Enable “Allow negative progress” to permit them."}),t.jsxs("div",{style:Se.modalActions,children:[t.jsx("button",{onClick:()=>m(null),style:Se.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:p,disabled:g.amount===""||isNaN(parseFloat(g.amount)),style:{...Se.saveBtn,...g.amount===""||isNaN(parseFloat(g.amount))?{opacity:.5,cursor:"not-allowed"}:{}},children:[t.jsx(He,{size:15})," Save"]})]})]})})]})}function eb({status:e}){const r={done:{label:"Completed",color:gl},failed:{label:"Missed",color:ko},active:{label:"In progress",color:"#3A7CA5"}},n=r[e]||r.active;return t.jsx("span",{style:{...Se.badge,color:n.color,background:n.color+"1A",borderColor:n.color+"44"},children:n.label})}const Se={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:780,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},statRow:{display:"flex",gap:10,marginBottom:14,flexWrap:"wrap"},statCard:{flex:1,minWidth:120,background:"var(--surface)",borderRadius:12,padding:"12px 14px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},statVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},statLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},addBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"none",background:Sn,color:"#fff",padding:"10px 16px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginBottom:16},empty:{fontSize:13.5,color:"var(--text-3)",textAlign:"center",padding:"40px 0",background:"var(--surface)",borderRadius:16,border:"1px dashed var(--border)"},list:{display:"flex",flexDirection:"column",gap:14},card:{background:"var(--surface)",borderRadius:16,padding:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardFailed:{opacity:.72},cardTop:{display:"flex",alignItems:"center",gap:10},num:{fontSize:12,fontWeight:800,color:"var(--text-3)",fontFamily:"'Fraunces',Georgia,serif",flexShrink:0},name:{fontSize:15.5,fontWeight:700,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},nameMobile:{whiteSpace:"normal",overflow:"visible",textOverflow:"clip",wordBreak:"break-word",lineHeight:1.25},badgeRow:{marginTop:6},comment:{fontSize:12,color:"var(--text-3)",marginTop:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},badge:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:20,border:"1px solid",flexShrink:0,whiteSpace:"nowrap"},iconBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},barWrap:{marginTop:14},barTrack:{height:14,background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:8,overflow:"hidden",display:"flex"},barFill:{height:"100%",borderRadius:7,transition:"width 0.3s"},barMetaRow:{display:"flex",alignItems:"baseline",gap:8,marginTop:6},completed:{fontSize:14,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},barPct:{fontSize:12,fontWeight:700,color:"var(--text-2)"},target:{fontSize:12,color:"var(--text-3)",marginLeft:"auto"},chips:{display:"flex",gap:7,flexWrap:"wrap",marginTop:12},chip:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11.5,fontWeight:600,color:"var(--text-2)",border:"1px solid var(--border)",borderRadius:20,padding:"4px 10px"},chipReward:{color:Sn,borderColor:Sn+"55",background:Sn+"12"},actions:{marginTop:12},progressBtn:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 14px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:460,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},iconBtnPlain:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)",marginBottom:4},grid2:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},toggleRow:{display:"flex",alignItems:"flex-start",gap:9,marginTop:14,cursor:"pointer"},checkbox:{width:17,height:17,marginTop:1,accentColor:Sn,cursor:"pointer",flexShrink:0},toggleLabel:{display:"block",fontSize:13,fontWeight:700},toggleHint:{display:"block",fontSize:11.5,color:"var(--text-3)",marginTop:2},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:gl,color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},progressCur:{fontSize:13,color:"var(--text-2)",marginBottom:12},progressHint:{fontSize:11.5,color:"var(--text-3)",marginTop:6},modeRow:{display:"flex",gap:6,marginBottom:8},modeBtn:{flex:1,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 10px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},modeBtnOn:{background:Sn,color:"#fff",borderColor:Sn}},Ui="#8268B0",ss="#4C9A6B",D2=e=>e?new Date(e+"T00:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"",A2=()=>({id:null,wish:"",cost:"",note:"",link:""});function F2(){const e=ho(),r=z=>_s(z,e.code),[n,o]=c.useState([]),[i,s]=c.useState(!1),[a,l]=c.useState(null),d=c.useCallback(()=>{_.getBucket().then(z=>{o(Array.isArray(z)?z:[]),s(!0)}).catch(()=>s(!0))},[]);c.useEffect(()=>{d()},[d]);const g=c.useMemo(()=>{const z=n.filter(b=>!b.fulfilled);return{total:n.length,fulfilled:n.filter(b=>b.fulfilled).length,openCost:z.reduce((b,p)=>b+(p.cost||0),0)}},[n]),m=()=>l(A2()),f=z=>l({id:z.id,wish:z.wish,cost:String(z.cost??""),note:z.note||"",link:z.link||""}),h=async()=>{const z=a.wish.trim();if(!z)return;const b={wish:z,cost:parseFloat(a.cost)||0,note:a.note.trim(),link:a.link.trim()};a.id?await _.updateBucketWish(a.id,b):await _.createBucketWish(b),l(null),d()},T=async z=>{window.confirm(`Delete "${z.wish}" from your bucket list?`)&&(await _.deleteBucketWish(z.id),d())},D=async z=>{await _.updateBucketWish(z.id,{fulfilled:!z.fulfilled}),d()},I=async(z,b)=>{const p=z+b;if(p<0||p>=n.length)return;const u=[...n];[u[z],u[p]]=[u[p],u[z]],o(u),await _.arrangeBucket(u.map(y=>y.id)).catch(()=>{}),d()};return t.jsxs("div",{style:Xe.page,children:[t.jsxs("div",{style:Xe.head,children:[t.jsx("div",{style:Xe.eyebrow,children:"Anvil · Bucket List"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("h1",{style:Xe.h1,children:"Bucket List"}),t.jsx(Yt,{id:"bucket-list"})]}),t.jsx("div",{style:Xe.subhead,children:"The materialistic wishes you want to fulfil, big or small — ordered by what matters most."})]}),t.jsxs("div",{style:Xe.statRow,children:[t.jsxs("div",{style:Xe.statCard,children:[t.jsx("div",{style:Xe.statVal,children:g.total}),t.jsx("div",{style:Xe.statLbl,children:"Wishes"})]}),t.jsxs("div",{style:Xe.statCard,children:[t.jsx("div",{style:{...Xe.statVal,color:ss},children:g.fulfilled}),t.jsx("div",{style:Xe.statLbl,children:"Fulfilled"})]}),t.jsxs("div",{style:Xe.statCard,children:[t.jsx("div",{style:{...Xe.statVal,color:Ui},children:r(g.openCost)}),t.jsx("div",{style:Xe.statLbl,children:"Still wished"})]})]}),t.jsxs("button",{onClick:m,style:Xe.addBtn,children:[t.jsx(mt,{size:16})," New wish"]}),n.length===0?t.jsx("div",{style:Xe.empty,children:i?"No wishes yet. Add the first thing you'd love to have.":"Loading…"}):t.jsx("div",{style:Xe.list,children:n.map((z,b)=>t.jsxs("div",{style:{...Xe.card,...z.fulfilled?Xe.cardDone:{}},children:[t.jsxs("div",{style:Xe.reorderCol,children:[t.jsx("button",{onClick:()=>I(b,-1),disabled:b===0,style:{...Xe.reorderBtn,...b===0?Xe.reorderOff:{}},title:"Higher priority",children:t.jsx(Bl,{size:14})}),t.jsx("span",{style:Xe.rank,children:b+1}),t.jsx("button",{onClick:()=>I(b,1),disabled:b===n.length-1,style:{...Xe.reorderBtn,...b===n.length-1?Xe.reorderOff:{}},title:"Lower priority",children:t.jsx(mo,{size:14})})]}),t.jsxs("div",{style:Xe.body,children:[t.jsxs("div",{style:Xe.topRow,children:[t.jsx("span",{style:{...Xe.wishName,...z.fulfilled?Xe.wishNameDone:{}},children:z.wish}),t.jsx("span",{style:Xe.cost,children:r(z.cost)})]}),z.note&&t.jsx("div",{style:Xe.note,children:z.note}),t.jsxs("div",{style:Xe.metaRow,children:[z.fulfilled&&t.jsxs("span",{style:Xe.doneBadge,children:[t.jsx(Ag,{size:11})," Fulfilled",z.fulfilled_date?` · ${D2(z.fulfilled_date)}`:""]}),z.link&&t.jsxs("a",{href:z.link,target:"_blank",rel:"noreferrer",style:Xe.link,children:[t.jsx(vc,{size:11})," Link"]})]})]}),t.jsxs("div",{style:Xe.actions,children:[t.jsxs("button",{onClick:()=>D(z),style:{...Xe.pill,...z.fulfilled?{}:{color:ss,borderColor:ss+"66"}},title:z.fulfilled?"Mark as not fulfilled":"Mark fulfilled",children:[t.jsx(He,{size:13})," ",z.fulfilled?"Undo":"Fulfilled"]}),t.jsx("button",{onClick:()=>f(z),style:Xe.iconBtn,title:"Edit",children:t.jsx(wt,{size:13})}),t.jsx("button",{onClick:()=>T(z),style:Xe.iconBtn,title:"Delete",children:t.jsx(De,{size:14})})]})]},z.id))}),t.jsx("div",{style:Xe.footNote,children:"Enable “Fulfil from bucket list” in the Rewards screen to spend your pending reward on these wishes."}),a&&t.jsx("div",{style:Xe.overlay,onClick:()=>l(null),children:t.jsxs("div",{style:Xe.modal,onClick:z=>z.stopPropagation(),children:[t.jsxs("div",{style:Xe.modalHead,children:[t.jsx("span",{style:Xe.modalTitle,children:a.id?"Edit wish":"New wish"}),t.jsx("button",{onClick:()=>l(null),style:Xe.iconBtnPlain,children:t.jsx(De,{size:16})})]}),t.jsx("label",{style:Xe.label,children:"Wish *"}),t.jsx("input",{autoFocus:!0,value:a.wish,onChange:z=>l(b=>({...b,wish:z.target.value})),placeholder:"e.g. PlayStation 5, trip to Japan",style:Xe.input}),t.jsx("label",{style:Xe.label,children:"Cost"}),t.jsx("input",{type:"number",inputMode:"decimal",value:a.cost,onChange:z=>l(b=>({...b,cost:z.target.value})),placeholder:"0",style:Xe.input}),t.jsx("label",{style:Xe.label,children:"Link (optional)"}),t.jsx("input",{value:a.link,onChange:z=>l(b=>({...b,link:z.target.value})),placeholder:"https://…",style:Xe.input}),t.jsx("label",{style:Xe.label,children:"Note (optional)"}),t.jsx("input",{value:a.note,onChange:z=>l(b=>({...b,note:z.target.value})),placeholder:"colour, model, why you want it…",style:Xe.input}),t.jsxs("div",{style:Xe.modalActions,children:[t.jsx("button",{onClick:()=>l(null),style:Xe.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:h,disabled:!a.wish.trim(),style:{...Xe.saveBtn,...a.wish.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," ",a.id?"Save":"Add wish"]})]})]})})]})}const Xe={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:720,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},statRow:{display:"flex",gap:10,marginBottom:14,flexWrap:"wrap"},statCard:{flex:1,minWidth:110,background:"var(--surface)",borderRadius:12,padding:"12px 14px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},statVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},statLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},addBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"none",background:Ui,color:"#fff",padding:"10px 16px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginBottom:16},empty:{fontSize:13.5,color:"var(--text-3)",textAlign:"center",padding:"40px 0",background:"var(--surface)",borderRadius:16,border:"1px dashed var(--border)"},list:{display:"flex",flexDirection:"column",gap:10},card:{display:"flex",gap:12,alignItems:"stretch",background:"var(--surface)",borderRadius:14,padding:"12px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardDone:{opacity:.7},reorderCol:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:2,flexShrink:0},reorderBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:24,height:20,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center",padding:0},reorderOff:{opacity:.3,cursor:"not-allowed"},rank:{fontSize:12,fontWeight:800,color:"var(--text-3)",fontFamily:"'Fraunces',Georgia,serif",padding:"1px 0"},body:{flex:1,minWidth:0},topRow:{display:"flex",justifyContent:"space-between",gap:10,alignItems:"baseline"},wishName:{fontSize:15,fontWeight:700,minWidth:0,wordBreak:"break-word"},wishNameDone:{textDecoration:"line-through",color:"var(--text-3)"},cost:{fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:Ui,flexShrink:0,whiteSpace:"nowrap"},note:{fontSize:12.5,color:"var(--text-3)",marginTop:3},metaRow:{display:"flex",gap:8,flexWrap:"wrap",marginTop:7,alignItems:"center"},doneBadge:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11,fontWeight:700,color:ss,background:ss+"1A",borderRadius:20,padding:"3px 9px"},link:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11.5,fontWeight:700,color:Ui,textDecoration:"none"},actions:{display:"flex",flexDirection:"column",gap:6,alignItems:"flex-end",justifyContent:"center",flexShrink:0},pill:{display:"inline-flex",alignItems:"center",gap:4,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"5px 10px",borderRadius:8,fontSize:11.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",whiteSpace:"nowrap"},iconBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:26,height:26,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},footNote:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",marginTop:18,fontStyle:"italic"},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtnPlain:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)",marginBottom:4},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:Ui,color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},as="#3A7CA5",Kt="#4C9A6B",At="#C2536B",ul=[{id:"swing",label:"Swing",color:"#8268B0"},{id:"fno",label:"FnO",color:"#C9772E"},{id:"intraday",label:"Intraday",color:"#3A7CA5"}],xa=e=>ul.find(r=>r.id===e)||ul[0],W2=new Set(["fno","intraday"]),tb=e=>W2.has(e),M2=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,ya=Lo(),_2=e=>new Date(e+"T00:00").toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"}),rb=e=>e?new Date(e+"T00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"—",br=e=>e===""||e===null||e===void 0||isNaN(parseFloat(e))?0:parseFloat(e),zd=(e,r)=>{const n=br(e.qty);return r==="profit"?Math.abs(br(e.tgt_price)-br(e.entry_price))*n:-Math.abs(br(e.sl_price)-br(e.entry_price))*n};function L2(e,r,n,o){const i=br(e.entry_price),s=br(e.sl_price),a=br(e.tgt_price),l=br(e.qty),d=e.direction==="short";if(!e.instrument.trim())return"Enter the instrument.";if(i<=0||s<=0||a<=0||l<=0)return"Entry, SL, target and quantity must all be greater than zero.";if(d){if(s<=i)return"For a short, stop loss must be greater than the entry price (CMP).";if(a>=i)return"For a short, target must be less than the entry price (CMP)."}else{if(s>=i)return"Stop loss must be less than the entry price (CMP).";if(a<=i)return"Target must be greater than the entry price (CMP)."}const g=Math.abs(i-s),m=Math.abs(a-i),f=r.capital||0;if(r.rr>0&&m<r.rr*g-1e-9){const T=d?i-r.rr*g:i+r.rr*g;return`Risk:reward must be ≥ 1:${r.rr}. Target must be ${d?"at most":"at least"} ${T.toLocaleString()}.`}if(r.risk_pct>0&&f>0){const T=f*r.risk_pct/100,D=g*l;if(D>T+1e-9)return`This risks ${o(D)} — over your ${r.risk_pct}% limit of ${o(T)}. Reduce qty or tighten SL.`}const h=(r.diversification||{})[e.kind]||0;if(h>0){if(f>0){const T=f/h,D=i*l;if(D>T+1e-9)return`Position value ${o(D)} exceeds the diversification cap ${o(T)} (capital ÷ ${h}).`}if(n>=h)return`You already hold ${n} open ${e.kind} trade(s); diversification allows ${h}.`}return""}function $2(e=760){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const P2=e=>({id:null,kind:"swing",direction:"long",instrument:"",purchase_date:e,entry_price:"",sl_price:"",tgt_price:"",qty:"",note:""});function O2(){const e=$2(),r=ho(),n=w=>Bs(w,r.code),[o,i]=c.useState([]),[s,a]=c.useState({}),[l,d]=c.useState(0),[g,m]=c.useState(0),[f,h]=c.useState(0),[T,D]=c.useState({capital:0,risk_pct:0,rr:0,diversification:{swing:0,fno:0,intraday:0}}),[I,z]=c.useState(!1),[b,p]=c.useState(ya),[u,y]=c.useState(()=>{const w=new Date;return new Date(w.getFullYear(),w.getMonth(),1)}),[j,C]=c.useState(null),[k,x]=c.useState(null),[B,W]=c.useState(""),Q=c.useCallback(()=>{_.getTrades().then(w=>{i(w.entries),a(w.learnings||{}),d(w.capital||0),m(w.net_pl||0),h(w.current||0),w.rules&&D(w.rules),z(!0)}).catch(()=>z(!0))},[]);c.useEffect(()=>{Q()},[Q]),c.useEffect(()=>{W(s[b]||"")},[b,s]);const re=c.useMemo(()=>o.filter(w=>w.status==="open"),[o]),ge=c.useMemo(()=>o.filter(w=>w.status!=="open"),[o]),A=c.useMemo(()=>{if(!j)return"";const w=re.filter(oe=>oe.kind===j.kind&&oe.id!==j.id).length;return L2(j,T,w,n)},[j,T,re,r.code]),X=c.useMemo(()=>{const w={};return ge.forEach(oe=>{w[oe.date]=(w[oe.date]||0)+(Number(oe.pl)||0)}),w},[ge]),ie=ge.filter(w=>w.date===b),xe=X[b]||0,q=xe>0?"positive":xe<0?"negative":"neutral",K=c.useMemo(()=>{const w=u,oe=(w.getDay()+6)%7,he=new Date(w.getFullYear(),w.getMonth()+1,0).getDate(),V=[];for(let fe=0;fe<oe;fe++)V.push(null);for(let fe=1;fe<=he;fe++){const ye=M2(new Date(w.getFullYear(),w.getMonth(),fe)),Ae=X[ye],tt=!!s[ye];V.push({date:ye,day:fe,pl:Ae,hasLearning:tt,has:Ae!==void 0||tt})}return V},[u,X,s]),de=w=>y(oe=>new Date(oe.getFullYear(),oe.getMonth()+w,1)),J=u.toLocaleDateString("en-US",{month:"long",year:"numeric"}),R=(w="swing")=>C({...P2(b),kind:w}),O=w=>C({id:w.id,kind:w.kind,direction:w.direction||"long",instrument:w.instrument,purchase_date:w.purchase_date||w.date,entry_price:w.entry_price??"",sl_price:w.sl_price??"",tgt_price:w.tgt_price??"",qty:w.qty??"",note:w.note||""}),G=w=>C(oe=>({...oe,kind:w,direction:tb(w)?oe.direction:"long"})),$=async()=>{if(A)return;const w={kind:j.kind,direction:j.direction,instrument:j.instrument.trim(),purchase_date:j.purchase_date,entry_price:br(j.entry_price),sl_price:br(j.sl_price),tgt_price:br(j.tgt_price),qty:br(j.qty),note:j.note.trim()};try{j.id?await _.updateTradeEntry(j.id,w):await _.createTradeEntry(w),C(null),Q()}catch(oe){window.alert(oe.message||"Could not save this trade.")}},ae=async w=>{window.confirm("Delete this trade?")&&(await _.deleteTradeEntry(w.id),Q())},me=(w,oe)=>x({trade:w,outcome:oe,date:w.kind==="intraday"&&w.purchase_date||ya}),Oe=async()=>{try{await _.bookTradeEntry(k.trade.id,k.outcome,k.date),x(null),Q()}catch(w){window.alert(w.message||"Could not book this trade.")}},Ce=async w=>{await _.reopenTradeEntry(w.id),Q()},U=async()=>{await _.setTradeLearning(b,B),Q()},P=(s[b]||"")!==B,ne=f>=l,E=g>0?Kt:g<0?At:"var(--text)";return t.jsxs("div",{style:Z.page,children:[t.jsx("div",{style:Z.head,children:t.jsxs("div",{children:[t.jsx("div",{style:Z.eyebrow,children:"Anvil · Trading Journal"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("h1",{style:Z.h1,children:"Trading Journal"}),t.jsx(Yt,{id:"trading-journal"})]}),t.jsx("div",{style:Z.subhead,children:"Open trades with your entry, SL & target — book profit/loss and P/L is calculated for you."})]})}),t.jsxs("div",{style:Z.capStrip,children:[t.jsxs("div",{style:Z.capBox,children:[t.jsxs("div",{style:Z.capLabel,children:[t.jsx(Mg,{size:13})," Starting capital"]}),t.jsx("div",{style:Z.capVal,children:n(l)}),t.jsx("div",{style:Z.capHint,children:"Set in Settings → Trading"})]}),t.jsxs("div",{style:Z.capBox,children:[t.jsxs("div",{style:Z.capLabel,children:[t.jsx(kh,{size:13})," Net P/L (booked)"]}),t.jsxs("div",{style:{...Z.capVal,color:E},children:[g>=0?"+":"",n(g)]}),t.jsxs("div",{style:Z.capHint,children:[ge.length," booked · ",re.length," open"]})]}),t.jsxs("div",{style:{...Z.capBox,...Z.capBoxMain,borderColor:ne?Kt:At},children:[t.jsxs("div",{style:Z.capLabel,children:[ne?t.jsx(ns,{size:13,color:Kt}):t.jsx(so,{size:13,color:At})," Current balance"]}),t.jsx("div",{style:{...Z.capValBig,color:ne?Kt:At},children:n(f)}),t.jsx("div",{style:Z.capHint,children:ne?"Above starting capital":"Below starting capital"})]})]}),t.jsxs("div",{style:Z.card,children:[t.jsxs("div",{style:Z.cardTitleRow,children:[t.jsxs("div",{children:[t.jsxs("div",{style:Z.cardTitle,children:[t.jsx(wh,{size:15,color:as})," Open trades"]}),t.jsx("div",{style:Z.cardSub,children:"Positions you haven't booked yet — mark profit or loss when you exit."})]}),t.jsx("div",{style:Z.addRow,children:ul.map(w=>t.jsxs("button",{onClick:()=>R(w.id),style:{...Z.addKindBtn,color:w.color,borderColor:w.color+"55",background:w.color+"12"},children:[t.jsx(mt,{size:14})," ",w.label]},w.id))})]}),re.length>0?t.jsx("div",{style:Z.openScroll,children:re.map(w=>{const oe=xa(w.kind);return t.jsxs("div",{style:Z.openRow,children:[t.jsx("span",{style:{...Z.kindTag,background:oe.color+"1A",color:oe.color},children:oe.label}),t.jsxs("div",{style:Z.openBody,children:[t.jsxs("div",{style:Z.openTop,children:[t.jsxs("span",{style:Z.tradeInstr,children:[w.instrument||"—",t.jsx(nb,{direction:w.direction})]}),t.jsx("span",{style:Z.openQty,children:w.qty?`${w.qty} qty`:""})]}),t.jsxs("div",{style:Z.openMeta,children:[t.jsxs("span",{style:Z.metaPill,children:["Bought ",rb(w.purchase_date)]}),w.entry_price?t.jsxs("span",{style:Z.metaPill,children:["Entry ",w.entry_price]}):null,w.sl_price?t.jsxs("span",{style:{...Z.metaPill,color:At},children:["SL ",w.sl_price]}):null,w.tgt_price?t.jsxs("span",{style:{...Z.metaPill,color:Kt},children:["TGT ",w.tgt_price]}):null]})]}),t.jsxs("div",{style:Z.bookBtns,children:[t.jsxs("button",{onClick:()=>me(w,"profit"),style:{...Z.bookBtn,background:Kt},children:[t.jsx(ns,{size:13})," Profit"]}),t.jsxs("button",{onClick:()=>me(w,"loss"),style:{...Z.bookBtn,background:At},children:[t.jsx(so,{size:13})," Loss"]}),t.jsx("button",{onClick:()=>O(w),style:Z.iconGhost,title:"Edit",children:t.jsx(wt,{size:13})}),t.jsx("button",{onClick:()=>ae(w),style:Z.iconGhost,title:"Delete",children:t.jsx(ji,{size:13})})]})]},w.id)})}):t.jsx("div",{style:Z.noTrades,children:I?"No open trades. Add one with the buttons above.":"Loading…"})]}),t.jsxs("div",{style:{...Z.cols,gridTemplateColumns:e?"1fr":"320px 1fr"},children:[t.jsxs("div",{style:Z.card,children:[t.jsxs("div",{style:Z.calHead,children:[t.jsx("button",{onClick:()=>de(-1),style:Z.calNav,children:t.jsx(Mn,{size:16})}),t.jsx("span",{style:Z.calTitle,children:J}),t.jsx("button",{onClick:()=>de(1),style:Z.calNav,children:t.jsx(bn,{size:16})})]}),t.jsxs("div",{style:Z.calGrid,children:[["M","T","W","T","F","S","S"].map((w,oe)=>t.jsx("div",{style:Z.calDow,children:w},oe)),K.map((w,oe)=>w===null?t.jsx("div",{},oe):t.jsxs("button",{onClick:()=>p(w.date),style:{...Z.calCell,...w.date===b?Z.calCellOn:{},...w.date===ya&&w.date!==b?Z.calCellToday:{}},children:[t.jsx("span",{children:w.day}),w.pl!==void 0&&w.pl!==0&&t.jsx("span",{style:{...Z.calDot,background:w.date===b?"#fff":w.pl>0?Kt:At}}),w.pl===void 0&&w.hasLearning&&t.jsx("span",{style:{...Z.calDot,background:w.date===b?"#fff":"var(--text-3)"}})]},w.date))]}),t.jsxs("div",{style:Z.calLegend,children:[t.jsxs("span",{children:[t.jsx("span",{style:{...Z.legDot,background:Kt}})," Profit"]}),t.jsxs("span",{children:[t.jsx("span",{style:{...Z.legDot,background:At}})," Loss"]}),t.jsxs("span",{children:[t.jsx("span",{style:{...Z.legDot,background:"var(--text-3)"}})," Learning only"]})]})]}),t.jsxs("div",{children:[t.jsxs("div",{style:Z.card,children:[t.jsxs("div",{style:Z.cardTitleRow,children:[t.jsxs("div",{children:[t.jsx("div",{style:Z.cardTitle,children:_2(b)}),t.jsxs("div",{style:Z.cardSub,children:[ie.length," booked trade",ie.length===1?"":"s"," this day"]})]}),t.jsxs("div",{style:Z.dayPLWrap,children:[t.jsx("span",{style:{...Z.sentiment,...q==="positive"?{background:Kt+"1A",color:Kt}:q==="negative"?{background:At+"1A",color:At}:{background:"var(--hover)",color:"var(--text-3)"}},children:q==="positive"?"Positive day":q==="negative"?"Negative day":"No trades"}),t.jsxs("span",{style:{...Z.dayPL,color:xe>0?Kt:xe<0?At:"var(--text-2)"},children:[xe>=0?"+":"",n(xe)]})]})]}),ie.length>0?t.jsx("div",{style:Z.tradeList,children:ie.map(w=>{const oe=xa(w.kind),he=(Number(w.pl)||0)>=0;return t.jsxs("div",{style:Z.tradeRow,children:[t.jsx("span",{style:{...Z.kindTag,background:oe.color+"1A",color:oe.color},children:oe.label}),t.jsxs("div",{style:Z.tradeBody,children:[t.jsxs("div",{style:Z.tradeTop,children:[t.jsxs("span",{style:Z.tradeInstr,children:[w.instrument||"—",t.jsx(nb,{direction:w.direction})]}),t.jsxs("span",{style:{...Z.tradePL,color:he?Kt:At},children:[he?"+":"",n(Number(w.pl)||0)]})]}),t.jsxs("div",{style:Z.tradeMeta,children:[w.entry_price?t.jsxs("span",{style:Z.metaPill,children:["Entry ",w.entry_price]}):null,w.sl_price?t.jsxs("span",{style:Z.metaPill,children:["SL ",w.sl_price]}):null,w.tgt_price?t.jsxs("span",{style:Z.metaPill,children:["TGT ",w.tgt_price]}):null,w.qty?t.jsxs("span",{style:Z.metaPill,children:[w.qty," qty"]}):null,w.purchase_date&&w.purchase_date!==w.date&&t.jsxs("span",{style:Z.metaPill,children:["Bought ",rb(w.purchase_date)]}),w.note&&t.jsx("span",{style:Z.tradeNote,children:w.note})]})]}),t.jsx("button",{onClick:()=>Ce(w),style:Z.iconGhost,title:"Reopen",children:t.jsx(Hh,{size:13})}),t.jsx("button",{onClick:()=>ae(w),style:Z.iconGhost,title:"Delete",children:t.jsx(ji,{size:13})})]},w.id)})}):t.jsx("div",{style:Z.noTrades,children:"No trades booked on this day — you can still record a learning below."})]}),t.jsxs("div",{style:Z.card,children:[t.jsxs("div",{style:Z.cardTitle,children:[t.jsx(Ms,{size:15,color:as})," Daily learning"]}),t.jsx("textarea",{value:B,onChange:w=>W(w.target.value),placeholder:"What did you learn today? Mistakes, what worked, discipline notes…",style:Z.learnArea}),t.jsxs("button",{onClick:U,disabled:!P,style:{...Z.saveBtn,...P?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:14})," Save learning"]})]})]})]}),j&&(()=>{const w=xa(j.kind),oe=j.direction==="short",he=oe?At:Kt,V=zd(j,"profit"),fe=zd(j,"loss");return t.jsx("div",{style:Z.overlay,onClick:()=>C(null),children:t.jsxs("div",{style:Z.sheet,onClick:ye=>ye.stopPropagation(),children:[t.jsxs("div",{style:{...Z.sheetHead,background:`linear-gradient(135deg, ${w.color}, ${he})`},children:[t.jsxs("div",{style:Z.sheetHeadRow,children:[t.jsx("span",{style:Z.sheetKicker,children:j.id?"Edit position":"New position"}),t.jsx("button",{onClick:()=>C(null),style:Z.sheetClose,children:t.jsx(De,{size:16})})]}),t.jsx("div",{style:Z.sheetTitle,children:j.instrument||"Open trade"}),t.jsxs("div",{style:Z.sheetChips,children:[t.jsx("span",{style:Z.sheetChip,children:w.label}),t.jsx("span",{style:Z.sheetChip,children:oe?"Short ▼":"Long ▲"}),br(j.qty)>0&&t.jsxs("span",{style:Z.sheetChip,children:[br(j.qty)," qty"]})]})]}),t.jsxs("div",{style:Z.sheetBody,children:[t.jsx("label",{style:Z.fLabel,children:"Type"}),t.jsx("div",{style:Z.seg,children:ul.map(ye=>t.jsx("button",{type:"button",onClick:()=>G(ye.id),style:{...Z.segBtn,...j.kind===ye.id?{...Z.segBtnOn,background:ye.color}:{}},children:ye.label},ye.id))}),tb(j.kind)&&t.jsxs(t.Fragment,{children:[t.jsx("label",{style:Z.fLabel,children:"Direction"}),t.jsxs("div",{style:Z.seg,children:[t.jsxs("button",{type:"button",onClick:()=>C(ye=>({...ye,direction:"long"})),style:{...Z.segBtn,...oe?{}:{...Z.segBtnOn,background:Kt}},children:[t.jsx(ns,{size:14})," Long"]}),t.jsxs("button",{type:"button",onClick:()=>C(ye=>({...ye,direction:"short"})),style:{...Z.segBtn,...oe?{...Z.segBtnOn,background:At}:{}},children:[t.jsx(so,{size:14})," Short"]})]}),t.jsx("div",{style:Z.dirHint,children:oe?"Short — profit when price falls. SL sits above CMP, target below.":"Long — profit when price rises. SL sits below CMP, target above."})]}),t.jsx("label",{style:Z.fLabel,children:"Instrument"}),t.jsx("input",{autoFocus:!0,value:j.instrument,onChange:ye=>C(Ae=>({...Ae,instrument:ye.target.value.toUpperCase()})),placeholder:"e.g. NIFTY 22000 CE, RELIANCE",style:{...Z.field,textTransform:"uppercase"}}),t.jsxs("div",{style:Z.grid2,children:[t.jsxs("div",{children:[t.jsx("label",{style:Z.fLabel,children:"Entry (CMP)"}),t.jsx("input",{type:"number",inputMode:"decimal",value:j.entry_price,onChange:ye=>C(Ae=>({...Ae,entry_price:ye.target.value})),placeholder:"0",style:Z.field})]}),t.jsxs("div",{children:[t.jsx("label",{style:Z.fLabel,children:"Quantity"}),t.jsx("input",{type:"number",inputMode:"decimal",value:j.qty,onChange:ye=>C(Ae=>({...Ae,qty:ye.target.value})),placeholder:"0",style:Z.field})]})]}),t.jsxs("div",{style:Z.grid2,children:[t.jsxs("div",{children:[t.jsxs("label",{style:{...Z.fLabel,color:At},children:["Stop loss",oe?" (above)":" (below)"]}),t.jsx("input",{type:"number",inputMode:"decimal",value:j.sl_price,onChange:ye=>C(Ae=>({...Ae,sl_price:ye.target.value})),placeholder:"0",style:{...Z.field,borderColor:At+"55"}})]}),t.jsxs("div",{children:[t.jsxs("label",{style:{...Z.fLabel,color:Kt},children:["Target",oe?" (below)":" (above)"]}),t.jsx("input",{type:"number",inputMode:"decimal",value:j.tgt_price,onChange:ye=>C(Ae=>({...Ae,tgt_price:ye.target.value})),placeholder:"0",style:{...Z.field,borderColor:Kt+"55"}})]})]}),t.jsxs("div",{style:Z.preview2,children:[t.jsxs("div",{style:{...Z.previewCell,background:Kt+"12"},children:[t.jsx("span",{style:Z.previewLbl,children:"If target hit"}),t.jsxs("span",{style:{...Z.previewVal,color:Kt},children:["+",n(V)]})]}),t.jsxs("div",{style:{...Z.previewCell,background:At+"12"},children:[t.jsx("span",{style:Z.previewLbl,children:"If SL hit"}),t.jsx("span",{style:{...Z.previewVal,color:At},children:n(fe)})]})]}),t.jsx("label",{style:Z.fLabel,children:"Purchase date"}),t.jsx("input",{type:"date",value:j.purchase_date,onChange:ye=>C(Ae=>({...Ae,purchase_date:ye.target.value})),style:Z.field}),t.jsx("label",{style:Z.fLabel,children:"Note (optional)"}),t.jsx("input",{value:j.note,onChange:ye=>C(Ae=>({...Ae,note:ye.target.value})),placeholder:"reason, setup, emotion…",style:Z.field}),A?t.jsx("div",{style:Z.errBanner,children:A}):t.jsx(N2,{rules:T,kind:j.kind,money:n})]}),t.jsxs("div",{style:Z.sheetFoot,children:[t.jsx("button",{onClick:()=>C(null),style:Z.ghostBtn,children:"Cancel"}),t.jsxs("button",{onClick:$,disabled:!!A,style:{...Z.primaryBtn,background:he,...A?{opacity:.45,cursor:"not-allowed"}:{}},children:[t.jsx(He,{size:16})," ",j.id?"Save changes":"Open trade"]})]})]})})})(),k&&(()=>{const w=k.outcome==="profit",oe=w?Kt:At,he=k.trade,V=(he.direction||"long")==="short",fe=xa(he.kind),ye=w?V?`(Entry ${he.entry_price||0} − TGT ${he.tgt_price||0}) × ${he.qty||0}`:`(TGT ${he.tgt_price||0} − Entry ${he.entry_price||0}) × ${he.qty||0}`:V?`(SL ${he.sl_price||0} − Entry ${he.entry_price||0}) × ${he.qty||0}`:`(Entry ${he.entry_price||0} − SL ${he.sl_price||0}) × ${he.qty||0}`;return t.jsx("div",{style:Z.overlay,onClick:()=>x(null),children:t.jsxs("div",{style:Z.sheet,onClick:Ae=>Ae.stopPropagation(),children:[t.jsxs("div",{style:{...Z.sheetHead,background:`linear-gradient(135deg, ${oe}, ${oe}CC)`},children:[t.jsxs("div",{style:Z.sheetHeadRow,children:[t.jsx("span",{style:Z.sheetKicker,children:w?"Book profit":"Book loss"}),t.jsx("button",{onClick:()=>x(null),style:Z.sheetClose,children:t.jsx(De,{size:16})})]}),t.jsx("div",{style:Z.sheetTitle,children:he.instrument||"—"}),t.jsxs("div",{style:Z.sheetChips,children:[t.jsx("span",{style:Z.sheetChip,children:fe.label}),t.jsx("span",{style:Z.sheetChip,children:V?"Short":"Long"})]})]}),t.jsxs("div",{style:Z.sheetBody,children:[t.jsxs("div",{style:Z.bookHero,children:[t.jsx("span",{style:Z.bookHeroLbl,children:w?"Realized profit":"Realized loss"}),t.jsxs("span",{style:{...Z.bookHeroVal,color:oe},children:[w?"+":"",n(zd(he,k.outcome))]}),t.jsx("span",{style:Z.bookHeroMeta,children:ye})]}),he.kind==="intraday"?t.jsxs(t.Fragment,{children:[t.jsx("label",{style:Z.fLabel,children:"Outcome date · locked to purchase day"}),t.jsx("input",{type:"date",value:k.date,min:he.purchase_date,max:he.purchase_date,disabled:!0,style:{...Z.field,opacity:.7,cursor:"not-allowed"}}),t.jsx("div",{style:Z.dirHint,children:"Intraday trades are squared off the same day they're bought."})]}):t.jsxs(t.Fragment,{children:[t.jsx("label",{style:Z.fLabel,children:"Outcome date · colours this day"}),t.jsx("input",{type:"date",value:k.date,onChange:Ae=>x(tt=>({...tt,date:Ae.target.value})),style:Z.field})]})]}),t.jsxs("div",{style:Z.sheetFoot,children:[t.jsx("button",{onClick:()=>x(null),style:Z.ghostBtn,children:"Cancel"}),t.jsxs("button",{onClick:Oe,disabled:!k.date,style:{...Z.primaryBtn,background:oe,...k.date?{}:{opacity:.45,cursor:"not-allowed"}},children:[t.jsx(He,{size:16})," Book ",k.outcome]})]})]})})})()]})}function nb({direction:e}){return(e||"long")!=="short"?null:t.jsxs("span",{style:Z.dirBadge,children:[t.jsx(so,{size:10})," SHORT"]})}function N2({rules:e,kind:r,money:n}){const o=[],i=e.capital||0;e.rr>0&&o.push(`Min risk:reward 1:${e.rr}`),e.risk_pct>0&&i>0&&o.push(`Max risk ${n(i*e.risk_pct/100)} (${e.risk_pct}%)`);const s=(e.diversification||{})[r]||0;return s>0&&(i>0&&o.push(`Max position ${n(i/s)}`),o.push(`Max ${s} open ${r}`)),o.length?t.jsxs("div",{style:Z.rulesHint,children:["Rules · ",o.join(" · ")]}):null}const Z={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:1100,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},capStrip:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:12,marginBottom:18},capBox:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:"13px 16px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},capBoxMain:{borderWidth:2},capLabel:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,fontWeight:600,color:"var(--text-2)"},capVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:4,lineHeight:1.1},capValBig:{fontSize:26,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:4,lineHeight:1.1},capHint:{fontSize:10.5,color:"var(--text-3)",marginTop:4},cols:{display:"grid",gap:16,alignItems:"start"},card:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:16},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calNav:{width:30,height:30,borderRadius:8,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:4},calDow:{fontSize:10,fontWeight:700,color:"var(--text-3)",textAlign:"center",padding:"2px 0"},calCell:{position:"relative",aspectRatio:"1",border:"1px solid transparent",borderRadius:8,background:"var(--bg)",color:"var(--text-2)",fontSize:12.5,fontWeight:600,cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit"},calCellOn:{background:as,color:"#fff"},calCellToday:{borderColor:as},calDot:{position:"absolute",bottom:4,width:5,height:5,borderRadius:"50%"},calLegend:{display:"flex",gap:12,flexWrap:"wrap",marginTop:12,fontSize:10.5,color:"var(--text-3)",fontWeight:600},legDot:{display:"inline-block",width:7,height:7,borderRadius:"50%",marginRight:4},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:10,marginBottom:12,flexWrap:"wrap"},cardTitle:{display:"flex",alignItems:"center",gap:6,fontSize:15,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardSub:{fontSize:12,color:"var(--text-3)",marginTop:2},dayPLWrap:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:4},sentiment:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:10},dayPL:{fontSize:17,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},addRow:{display:"flex",gap:8,flexWrap:"wrap"},addKindBtn:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid",borderRadius:9,padding:"7px 12px",fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},openScroll:{display:"flex",flexDirection:"column",gap:8,maxHeight:320,overflowY:"auto",paddingRight:2},openRow:{display:"flex",alignItems:"flex-start",gap:9,padding:"10px 11px",background:"var(--bg)",border:"1px solid var(--border)",borderRadius:10,flexWrap:"wrap"},openBody:{flex:1,minWidth:140},openTop:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"baseline"},openQty:{fontSize:11.5,fontWeight:700,color:"var(--text-3)",flexShrink:0},openMeta:{display:"flex",gap:6,flexWrap:"wrap",marginTop:5,alignItems:"center"},bookBtns:{display:"flex",gap:6,alignItems:"center",flexShrink:0},bookBtn:{display:"inline-flex",alignItems:"center",gap:4,border:"none",color:"#fff",padding:"6px 11px",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},tradeList:{display:"flex",flexDirection:"column",gap:8},tradeRow:{display:"flex",alignItems:"flex-start",gap:9,padding:"9px 10px",background:"var(--bg)",border:"1px solid var(--border)",borderRadius:10},kindTag:{fontSize:10.5,fontWeight:800,padding:"3px 8px",borderRadius:7,flexShrink:0,marginTop:1},tradeBody:{flex:1,minWidth:0},tradeTop:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"baseline"},tradeInstr:{fontSize:13.5,fontWeight:700,wordBreak:"break-word"},tradePL:{fontSize:13.5,fontWeight:800,flexShrink:0},tradeMeta:{display:"flex",gap:6,flexWrap:"wrap",marginTop:5,alignItems:"center"},metaPill:{fontSize:10.5,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",borderRadius:6,padding:"2px 7px"},tradeNote:{fontSize:11.5,color:"var(--text-3)",fontStyle:"italic"},iconGhost:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",flexShrink:0},noTrades:{fontSize:12.5,color:"var(--text-3)",fontStyle:"italic",textAlign:"center",padding:"16px 8px",border:"1px dashed var(--border)",borderRadius:8},learnArea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"11px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--bg)",outline:"none",minHeight:90,resize:"vertical",lineHeight:1.55,marginTop:8},saveBtn:{display:"inline-flex",alignItems:"center",gap:6,marginTop:10,border:"none",background:as,color:"#fff",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},dirBadge:{display:"inline-flex",alignItems:"center",gap:2,fontSize:9.5,fontWeight:800,letterSpacing:"0.03em",color:At,background:At+"1A",borderRadius:5,padding:"1px 5px",marginLeft:6,verticalAlign:"middle"},overlay:{position:"fixed",inset:0,background:"rgba(20,18,15,0.55)",backdropFilter:"blur(3px)",zIndex:200,display:"grid",placeItems:"center",padding:16},sheet:{background:"var(--surface)",borderRadius:20,width:"100%",maxWidth:460,maxHeight:"92vh",display:"flex",flexDirection:"column",overflow:"hidden",boxShadow:"0 24px 64px rgba(0,0,0,0.34)",boxSizing:"border-box"},sheetHead:{padding:"16px 18px 18px",color:"#fff"},sheetHeadRow:{display:"flex",justifyContent:"space-between",alignItems:"center"},sheetKicker:{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",opacity:.9},sheetClose:{border:"none",background:"rgba(255,255,255,0.2)",color:"#fff",width:30,height:30,borderRadius:9,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},sheetTitle:{fontSize:22,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:8,wordBreak:"break-word",lineHeight:1.15},sheetChips:{display:"flex",gap:6,flexWrap:"wrap",marginTop:10},sheetChip:{fontSize:11,fontWeight:700,background:"rgba(255,255,255,0.22)",color:"#fff",borderRadius:20,padding:"3px 10px"},sheetBody:{padding:"16px 18px 6px",overflowY:"auto"},sheetFoot:{display:"flex",gap:10,padding:"14px 18px 16px",borderTop:"1px solid var(--border)",background:"var(--surface)"},fLabel:{display:"block",fontSize:11,fontWeight:700,color:"var(--text-2)",margin:"12px 0 5px",textTransform:"uppercase",letterSpacing:"0.05em"},field:{width:"100%",border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",fontSize:14,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)"},grid2:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},seg:{display:"flex",gap:4,background:"var(--bg)",border:"1px solid var(--border)",borderRadius:12,padding:4},segBtn:{flex:1,display:"inline-flex",alignItems:"center",justifyContent:"center",gap:5,border:"none",background:"none",color:"var(--text-2)",padding:"9px 0",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",transition:"background 0.12s"},segBtnOn:{color:"#fff",boxShadow:"0 2px 8px rgba(0,0,0,0.18)"},dirHint:{fontSize:11.5,color:"var(--text-3)",marginTop:7,lineHeight:1.4},preview2:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginTop:14},previewCell:{display:"flex",flexDirection:"column",gap:2,borderRadius:12,padding:"11px 13px"},previewLbl:{fontSize:11,fontWeight:600,color:"var(--text-2)"},previewVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},bookHero:{textAlign:"center",padding:"14px 0 6px"},bookHeroLbl:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.06em"},bookHeroVal:{display:"block",fontSize:34,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:4,lineHeight:1.05},bookHeroMeta:{display:"block",fontSize:11.5,color:"var(--text-3)",marginTop:6},errBanner:{marginTop:14,background:At+"18",border:`1px solid ${At}55`,color:At,borderRadius:10,padding:"10px 12px",fontSize:12.5,fontWeight:600,lineHeight:1.4},rulesHint:{marginTop:14,fontSize:11.5,color:"var(--text-3)",fontWeight:600,lineHeight:1.4},ghostBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"11px 18px",borderRadius:11,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},primaryBtn:{flex:1,display:"inline-flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",color:"#fff",padding:"11px 18px",borderRadius:11,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},Ac=[{id:"sandstone",name:"Sandstone",description:"Warm editorial light — the original Anvil look.",dark:!1,swatch:["#F7F6F3","#4C9A6B","#26241F"],vars:{"--bg":"#F7F6F3","--surface":"#FFFFFF","--surface-2":"#FAFAF8","--hover":"#F2F1EC","--border":"#ECEAE3","--text":"#26241F","--text-2":"#6B675E","--text-3":"#9A968C","--accent":"#4C9A6B","--accent-strong":"#26241F","--accent-2":"#3A352C"}},{id:"midnight",name:"Midnight",description:"Deep low-glare dark mode for night owls and focus.",dark:!0,swatch:["#161513","#6FB58C","#ECEAE3"],vars:{"--bg":"#161513","--surface":"#211F1C","--surface-2":"#1B1A17","--hover":"#2B2924","--border":"#34312B","--text":"#ECEAE3","--text-2":"#B6B1A6","--text-3":"#8A857A","--accent":"#6FB58C","--accent-strong":"#2E6F4B","--accent-2":"#245C3E"}},{id:"blossom",name:"Blossom",description:"Soft rose & blush — gentle, warm, and feminine.",dark:!1,swatch:["#FFF5F8","#E0608E","#B23A6B"],vars:{"--bg":"#FFF5F8","--surface":"#FFFFFF","--surface-2":"#FFF0F4","--hover":"#FDE7EE","--border":"#F6D9E2","--text":"#3D2230","--text-2":"#7A5466","--text-3":"#B08799","--accent":"#E0608E","--accent-strong":"#B23A6B","--accent-2":"#9C2F5C"}},{id:"tide",name:"Tide",description:"Calm professional blues — clean and focused.",dark:!1,swatch:["#F1F6FA","#2E86C1","#1C4E73"],vars:{"--bg":"#F1F6FA","--surface":"#FFFFFF","--surface-2":"#ECF3F9","--hover":"#E2EEF6","--border":"#D5E3EE","--text":"#13283A","--text-2":"#4A6275","--text-3":"#8AA0B0","--accent":"#2E86C1","--accent-strong":"#1C4E73","--accent-2":"#163E5C"}},{id:"velocity",name:"Velocity",description:"High-energy sport — crisp slate with electric orange.",dark:!1,swatch:["#F4F5F7","#F4511E","#1F2A37"],vars:{"--bg":"#F4F5F7","--surface":"#FFFFFF","--surface-2":"#EEF0F3","--hover":"#E7EAEE","--border":"#DCE0E6","--text":"#18202B","--text-2":"#515B68","--text-3":"#8B95A1","--accent":"#F4511E","--accent-strong":"#1F2A37","--accent-2":"#16202B"}},{id:"evergreen",name:"Evergreen",description:"Earthy forest greens — grounded and natural.",dark:!1,swatch:["#F2F6F1","#3E8E52","#2A4A30"],vars:{"--bg":"#F2F6F1","--surface":"#FFFFFF","--surface-2":"#ECF2EA","--hover":"#E4EEE2","--border":"#D7E4D3","--text":"#1E2B20","--text-2":"#4F6151","--text-3":"#8AA08C","--accent":"#3E8E52","--accent-strong":"#2A4A30","--accent-2":"#213B26"}},{id:"amethyst",name:"Amethyst",description:"Premium purple & plum — elegant and refined.",dark:!1,swatch:["#F6F4FB","#7A4FE0","#3A2D5C"],vars:{"--bg":"#F6F4FB","--surface":"#FFFFFF","--surface-2":"#F1EDF9","--hover":"#EAE3F6","--border":"#DFD6F0","--text":"#241B36","--text-2":"#5A4E72","--text-3":"#9588AE","--accent":"#7A4FE0","--accent-strong":"#3A2D5C","--accent-2":"#2E2349"}}],ob="sandstone",gf="anvil_theme",H2=e=>Ac.find(r=>r.id===e)||Ac[0];function uf(){try{return localStorage.getItem(gf)||ob}catch{return ob}}function Vi(e,r=!0){const n=H2(e),o=document.documentElement;Object.entries(n.vars).forEach(([s,a])=>o.style.setProperty(s,a)),o.style.colorScheme=n.dark?"dark":"light",o.setAttribute("data-theme",n.id);const i=document.querySelector('meta[name="theme-color"]');if(i&&i.setAttribute("content",n.vars["--surface"]),r)try{localStorage.setItem(gf,n.id)}catch{}return n.id}const G2=e=>e%10===1&&e!==11?"st":e%10===2&&e!==12?"nd":e%10===3&&e!==13?"rd":"th";function U2(e=560){const[r,n]=c.useState(()=>window.innerWidth<=e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<=e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}function V2({screens:e,order:r,hidden:n,themeId:o,currency:i,monthStartDay:s,ticker:a,defaultScreen:l,onSetDefault:d,onSaveSidebar:g,onPreviewTheme:m,onCommitTheme:f,onSelectCurrency:h,onSelectMonthStartDay:T,onSaveTicker:D,onClose:I}){const[z,b]=c.useState("sidebar"),[p,u]=c.useState(()=>r.map(le=>({id:le,hidden:n.includes(le)}))),[y,j]=c.useState(o),[C,k]=c.useState(""),[x,B]=c.useState(!1),[W,Q]=c.useState(""),[re,ge]=c.useState(!1),[A,X]=c.useState(""),[ie,xe]=c.useState(""),[q,K]=c.useState({swing:"",fno:"",intraday:""}),[de,J]=c.useState(!1),R=U2(),[O,G]=c.useState(!!(a!=null&&a.enabled)),[$,ae]=c.useState(()=>{const le=Array.isArray(a==null?void 0:a.statements)?a.statements.slice(0,5):[];return le.length?le:[""]}),[me,Oe]=c.useState((a==null?void 0:a.speed)??60),[Ce,U]=c.useState((a==null?void 0:a.delay)??3),[P,ne]=c.useState(!1),E=(le,Le)=>ae(ot=>ot.map((bt,zt)=>zt===le?Le:bt)),w=()=>ae(le=>le.length<5?[...le,""]:le),oe=le=>ae(Le=>Le.length>1?Le.filter((ot,bt)=>bt!==le):Le),he=()=>{const le=$.map(Le=>Le.trim()).filter(Boolean).slice(0,5);D({enabled:O,statements:le,speed:Number(me),delay:Number(Ce)}),ne(!0),setTimeout(()=>ne(!1),1500)};c.useEffect(()=>{_.getSetting("golden_music").then(le=>k((le==null?void 0:le.value)||"")).catch(()=>{})},[]);const V=()=>{_.setSetting("golden_music",C.trim()).then(()=>{B(!0),setTimeout(()=>B(!1),1500)}).catch(()=>{})},[fe,ye]=c.useState(Qh()),[Ae,tt]=c.useState(!1);c.useEffect(()=>{_.getSetting("day_start_hour").then(le=>{(le==null?void 0:le.value)!=null&&ye(zc(le.value))}).catch(()=>{})},[]);const yt=le=>{const Le=zc(le);ye(Le),_.setSetting("day_start_hour",Le).then(()=>{tt(!0),setTimeout(()=>tt(!1),1800)}).catch(()=>{})};c.useEffect(()=>{_.getSetting("trading_capital").then(le=>Q((le==null?void 0:le.value)||"")).catch(()=>{})},[]);const _e=()=>{_.setSetting("trading_capital",String(parseFloat(W)||0)).then(()=>{ge(!0),setTimeout(()=>ge(!1),1500)}).catch(()=>{})};c.useEffect(()=>{_.getSetting("trading_risk_pct").then(le=>X((le==null?void 0:le.value)??"")).catch(()=>{}),_.getSetting("trading_rr").then(le=>xe((le==null?void 0:le.value)??"")).catch(()=>{}),_.getSetting("trading_diversification").then(le=>{const Le=(le==null?void 0:le.value)||{};K({swing:Le.swing??"",fno:Le.fno??"",intraday:Le.intraday??""})}).catch(()=>{})},[]);const st=()=>{const le={swing:parseInt(q.swing,10)||0,fno:parseInt(q.fno,10)||0,intraday:parseInt(q.intraday,10)||0};Promise.all([_.setSetting("trading_risk_pct",parseFloat(A)||0),_.setSetting("trading_rr",parseFloat(ie)||0),_.setSetting("trading_diversification",le)]).then(()=>{J(!0),setTimeout(()=>J(!1),1500)}).catch(()=>{})},Ze=le=>{j(le),m(le)},at=p.filter(le=>!le.hidden).length,vt=(le,Le)=>{const ot=le+Le;if(ot<0||ot>=p.length)return;const bt=[...p];[bt[le],bt[ot]]=[bt[ot],bt[le]],u(bt)},ct=le=>{const Le=p[le];if(!Le.hidden&&at<=1)return;const ot=[...p];ot[le]={...Le,hidden:!Le.hidden},u(ot)},Ht=()=>{g(p.map(le=>le.id),p.filter(le=>le.hidden).map(le=>le.id))},Wt=R?{...je.overlay,padding:0}:je.overlay,Et=R?{...je.modal,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"100%",borderRadius:0,border:"none"}:je.modal;return t.jsx("div",{style:Wt,onClick:I,children:t.jsxs("div",{style:Et,onClick:le=>le.stopPropagation(),children:[t.jsxs("div",{style:je.head,children:[t.jsx("div",{style:je.title,children:"Settings"}),t.jsx("button",{onClick:I,style:je.closeBtn,children:t.jsx(De,{size:18})})]}),t.jsxs("div",{style:je.tabs,children:[t.jsxs("button",{onClick:()=>b("sidebar"),style:{...je.tab,...z==="sidebar"?je.tabOn:{}},children:[t.jsx(w0,{size:15})," Configure sidebar"]}),t.jsxs("button",{onClick:()=>b("themes"),style:{...je.tab,...z==="themes"?je.tabOn:{}},children:[t.jsx(I0,{size:15})," Themes"]}),t.jsxs("button",{onClick:()=>b("currency"),style:{...je.tab,...z==="currency"?je.tabOn:{}},children:[t.jsx(g0,{size:15})," Monetary"]}),t.jsxs("button",{onClick:()=>b("music"),style:{...je.tab,...z==="music"?je.tabOn:{}},children:[t.jsx(Dg,{size:15})," General"]}),t.jsxs("button",{onClick:()=>b("reminders"),style:{...je.tab,...z==="reminders"?je.tabOn:{}},children:[t.jsx(Rh,{size:15})," Reminders"]})]}),t.jsx("div",{style:je.body,children:z==="sidebar"?t.jsxs(t.Fragment,{children:[t.jsxs("p",{style:je.hint,children:["Reorder with the arrows, hide ones you don't use, and tap ",t.jsx(zs,{size:11,style:{verticalAlign:"-1px"}})," to set the screen that opens on launch."]}),t.jsx("div",{style:je.list,children:p.map((le,Le)=>{const ot=e[le.id],bt=ot.icon,zt=l===le.id;return t.jsxs("div",{style:{...je.row,opacity:le.hidden?.5:1,...zt?{borderColor:"var(--accent)"}:{}},children:[t.jsx("span",{style:je.rowNum,children:Le+1}),t.jsx(bt,{size:16}),t.jsxs("span",{style:je.rowLabel,children:[ot.label,zt&&t.jsx("span",{style:je.defaultTag,children:"default"})]}),t.jsx("button",{onClick:()=>d(le.id),title:zt?"Opens on launch":"Set as default",style:{...je.iconBtn,...zt?{color:"var(--accent)"}:{}},children:t.jsx(zs,{size:15})}),t.jsx("button",{onClick:()=>ct(Le),title:le.hidden?"Show":"Hide",style:{...je.iconBtn,...le.hidden?{}:{color:"var(--accent)"}},children:le.hidden?t.jsx(sl,{size:15}):t.jsx(Cs,{size:15})}),t.jsx("button",{onClick:()=>vt(Le,-1),disabled:Le===0,style:{...je.iconBtn,opacity:Le===0?.3:1},children:t.jsx(Bl,{size:15})}),t.jsx("button",{onClick:()=>vt(Le,1),disabled:Le===p.length-1,style:{...je.iconBtn,opacity:Le===p.length-1?.3:1},children:t.jsx(mo,{size:15})})]},le.id)})}),t.jsxs("button",{onClick:Ht,style:je.saveBtn,children:[t.jsx(He,{size:15})," Save sidebar"]})]}):z==="currency"?t.jsxs(t.Fragment,{children:[t.jsx("p",{style:je.hint,children:"Choose the currency used across Wallet and Worth. Applies instantly."}),t.jsx("div",{style:je.list,children:wc.map(le=>{const Le=le.code===i;return t.jsxs("button",{onClick:()=>h(le.code),style:{...je.row,cursor:"pointer",textAlign:"left",width:"100%",...Le?{borderColor:"var(--accent)"}:{}},children:[t.jsx("span",{style:je.curSymbol,children:le.symbol}),t.jsxs("span",{style:je.rowLabel,children:[le.label," ",t.jsx("span",{style:je.curCode,children:le.code})]}),Le&&t.jsx("span",{style:je.themeCheck,children:t.jsx(He,{size:13})})]},le.code)})}),t.jsx("div",{style:je.subDivider}),t.jsx("div",{style:je.fieldLbl,children:"Month starts on"}),t.jsx("p",{style:je.hint,children:'If your salary lands on the 25th, set this to 25 — Wallet and Expenses will treat each "month" as running 25th to 24th instead of calendar month.'}),t.jsx(cr,{value:s,options:Array.from({length:28},(le,Le)=>Le+1).map(le=>({value:le,label:le===1?"1st (calendar month)":`${le}${G2(le)}`})),onChange:le=>T(Number(le)),style:{marginBottom:12}}),t.jsx("div",{style:je.subDivider}),t.jsx("div",{style:je.fieldLbl,children:"Trading capital"}),t.jsxs("p",{style:je.hint,children:["Your starting capital for the ",t.jsx("b",{children:"Trading Journal"}),". The page shows this plus your all-time net P/L — green when in profit, red when below."]}),t.jsx("input",{type:"number",value:W,onChange:le=>Q(le.target.value),placeholder:"e.g. 100000",style:je.musicInput}),t.jsxs("button",{onClick:_e,style:je.saveBtn,children:[t.jsx(He,{size:15})," ",re?"Saved":"Save capital"]}),t.jsx("div",{style:je.subDivider}),t.jsx("div",{style:je.fieldLbl,children:"Trading discipline rules"}),t.jsx("p",{style:je.hint,children:"Guardrails enforced when opening a trade. A trade that breaks any rule can't be saved. Leave a field at 0 (or blank) to disable that rule."}),t.jsx("label",{style:je.miniLbl,children:"Risk per trade (%)"}),t.jsx("p",{style:je.hint,children:"Max loss on any single trade as a percent of capital. e.g. 2% of 100000 caps loss at 2000 — quantity or SL that risks more is blocked."}),t.jsx("input",{type:"number",step:"0.1",min:"0",value:A,onChange:le=>X(le.target.value),placeholder:"e.g. 2",style:je.musicInput}),t.jsx("label",{style:je.miniLbl,children:"Risk : Reward (1 : R)"}),t.jsx("p",{style:je.hint,children:"Minimum reward multiple of risk. Enter 3 for 1:3 — if SL is 5 below entry, target must be at least 15 above entry."}),t.jsx("input",{type:"number",step:"0.5",min:"0",value:ie,onChange:le=>xe(le.target.value),placeholder:"e.g. 3",style:je.musicInput}),t.jsx("label",{style:je.miniLbl,children:"Diversification (max open trades per section)"}),t.jsx("p",{style:je.hint,children:"Limits how many open trades you may hold per section, and caps each position's value at capital ÷ this number (e.g. 5 → max 20000 per trade on 100000 capital)."}),t.jsx("div",{style:je.divGrid,children:[["swing","Swing"],["fno","FnO"],["intraday","Intraday"]].map(([le,Le])=>t.jsxs("div",{style:je.divCell,children:[t.jsx("span",{style:je.divLbl,children:Le}),t.jsx("input",{type:"number",min:"0",step:"1",value:q[le],onChange:ot=>K(bt=>({...bt,[le]:ot.target.value})),placeholder:"0",style:je.divInput})]},le))}),t.jsxs("button",{onClick:st,style:je.saveBtn,children:[t.jsx(He,{size:15})," ",de?"Saved":"Save rules"]})]}):z==="music"?t.jsxs(t.Fragment,{children:[t.jsx("div",{style:je.fieldLbl,children:"Start of day"}),t.jsxs("p",{style:je.hint,children:["When your day actually begins. With ",t.jsx("b",{children:"2 AM"}),", anything you log at 1:30 AM — habits, journal, expenses, Golden Book — still counts toward the previous day."]}),t.jsx("select",{value:fe,onChange:le=>yt(le.target.value),style:je.musicInput,children:Array.from({length:24},(le,Le)=>t.jsx("option",{value:Le,children:Le===0?"Midnight (default)":`${Le%12===0?12:Le%12}:00 ${Le<12?"AM":"PM"}`},Le))}),Ae&&t.jsx("p",{style:{...je.hint,color:"#4C9A6B",fontWeight:700},children:"Saved — the whole app now rolls over at this hour."}),t.jsx("div",{style:je.subDivider}),t.jsx("div",{style:je.fieldLbl,children:"Golden Book music"}),t.jsxs("p",{style:je.hint,children:["Paste a YouTube link to play softly while you write in the ",t.jsx("b",{children:"Golden Book"}),". It plays only on that screen (audio only)."]}),t.jsx("input",{value:C,onChange:le=>k(le.target.value),placeholder:"https://youtube.com/watch?v=…",style:je.musicInput}),t.jsxs("button",{onClick:V,style:je.saveBtn,children:[t.jsx(He,{size:15})," ",x?"Saved":"Save music"]})]}):z==="reminders"?t.jsxs(t.Fragment,{children:[t.jsx("p",{style:je.hint,children:"Up to 5 reminders scroll across the top of every screen — a gentle nudge toward your goals."}),t.jsxs("button",{onClick:()=>G(le=>!le),style:{...je.row,cursor:"pointer",width:"100%",justifyContent:"space-between",...O?{borderColor:"var(--accent)"}:{}},children:[t.jsx("span",{style:je.rowLabel,children:"Show reminder banner"}),t.jsx("span",{style:{...je.switch,...O?je.switchOn:{}},children:O?"On":"Off"})]}),t.jsxs("div",{style:{marginTop:14},children:[t.jsxs("div",{style:je.fieldLbl,children:["Reminders (",$.filter(le=>le.trim()).length,"/5)"]}),$.map((le,Le)=>t.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[t.jsx("input",{value:le,onChange:ot=>E(Le,ot.target.value),maxLength:120,placeholder:`Reminder ${Le+1}`,style:{...je.musicInput,marginBottom:0}}),t.jsx("button",{onClick:()=>oe(Le),style:je.iconBtn,title:"Remove",children:t.jsx(De,{size:15})})]},Le)),$.length<5&&t.jsxs("button",{onClick:w,style:je.addRowBtn,children:[t.jsx(mt,{size:14})," Add reminder"]})]}),t.jsxs("div",{style:{marginTop:16},children:[t.jsxs("div",{style:je.sliderHead,children:[t.jsx("span",{style:je.fieldLbl,children:"Scroll speed"}),t.jsxs("span",{style:je.sliderVal,children:[me," px/s"]})]}),t.jsx("input",{type:"range",min:20,max:200,step:5,value:me,onChange:le=>Oe(le.target.value),style:je.range})]}),t.jsxs("div",{style:{marginTop:12},children:[t.jsxs("div",{style:je.sliderHead,children:[t.jsx("span",{style:je.fieldLbl,children:"Delay between reminders"}),t.jsxs("span",{style:je.sliderVal,children:[Ce,"s"]})]}),t.jsx("input",{type:"range",min:0,max:15,step:1,value:Ce,onChange:le=>U(le.target.value),style:je.range})]}),t.jsxs("button",{onClick:he,style:{...je.saveBtn,marginTop:16},children:[t.jsx(He,{size:15})," ",P?"Saved":"Save reminders"]})]}):t.jsxs(t.Fragment,{children:[t.jsxs("p",{style:je.hint,children:["Tap a theme to preview it live, then hit ",t.jsx("b",{children:"Apply theme"})," to keep it."]}),t.jsx("div",{style:je.themeGrid,children:Ac.map(le=>{const Le=le.id===y;return t.jsxs("button",{onClick:()=>Ze(le.id),style:{...je.themeCard,...Le?je.themeCardOn:{}},children:[t.jsxs("div",{style:je.swatchRow,children:[le.swatch.map((ot,bt)=>t.jsx("span",{style:{...je.swatch,background:ot}},bt)),Le&&t.jsx("span",{style:je.themeCheck,children:t.jsx(He,{size:13})})]}),t.jsxs("div",{style:je.themeName,children:[le.name,le.dark?t.jsx("span",{style:je.darkTag,children:"Dark"}):null]}),t.jsx("div",{style:je.themeDesc,children:le.description})]},le.id)})}),t.jsxs("button",{onClick:()=>f(y),disabled:y===o,style:{...je.saveBtn,...y===o?je.saveBtnDisabled:{}},children:[t.jsx(He,{size:15})," ",y===o?"Theme applied":"Apply theme"]})]})})]})})}const je={overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",color:"var(--text)",borderRadius:16,width:460,maxWidth:"100%",maxHeight:"88vh",display:"flex",flexDirection:"column",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)",overflow:"hidden"},head:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 18px",borderBottom:"1px solid var(--border)",flexShrink:0},title:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},tabs:{display:"flex",flexWrap:"wrap",gap:6,padding:"12px 18px 0",flexShrink:0},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"transparent"},body:{padding:"16px 18px 20px",overflowY:"auto",overflowX:"hidden",flex:1,minHeight:0},hint:{fontSize:12.5,color:"var(--text-3)",lineHeight:1.5,margin:"0 0 14px"},list:{display:"flex",flexDirection:"column",gap:6},row:{display:"flex",alignItems:"center",gap:10,padding:"9px 11px",background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:9},rowNum:{fontSize:11,fontWeight:700,color:"var(--text-3)",width:16,textAlign:"center"},rowLabel:{flex:1,fontSize:13.5,fontWeight:500,display:"flex",alignItems:"center",gap:7},defaultTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--accent)",background:"color-mix(in srgb, var(--accent) 14%, transparent)",padding:"1px 6px",borderRadius:6},curSymbol:{width:22,textAlign:"center",fontSize:15,fontWeight:700,color:"var(--text)"},curCode:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginLeft:4},iconBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},saveBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:7,width:"100%",marginTop:16,border:"none",background:"var(--accent)",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer"},saveBtnDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"default"},musicInput:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",marginBottom:12},switch:{fontSize:12,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:20,padding:"3px 12px",minWidth:44,textAlign:"center"},switchOn:{background:"var(--accent)",color:"#fff"},fieldLbl:{fontSize:12,fontWeight:700,color:"var(--text-2)",marginBottom:7},miniLbl:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text)",margin:"12px 0 2px"},subDivider:{height:1,background:"var(--border)",margin:"18px 0 14px"},divGrid:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:8,marginBottom:12},divCell:{display:"flex",flexDirection:"column",gap:4},divLbl:{fontSize:11,fontWeight:700,color:"var(--text-3)"},divInput:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"8px 10px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none"},addRowBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"9px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},sliderHead:{display:"flex",justifyContent:"space-between",alignItems:"baseline"},sliderVal:{fontSize:12,fontWeight:700,color:"var(--accent)"},range:{width:"100%",accentColor:"var(--accent)",cursor:"pointer"},themeGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},themeCard:{textAlign:"left",border:"2px solid var(--border)",background:"var(--surface-2)",borderRadius:12,padding:12,cursor:"pointer",display:"flex",flexDirection:"column",gap:6,outline:"none",WebkitTapHighlightColor:"transparent",transition:"border-color .15s ease, box-shadow .15s ease"},themeCardOn:{borderColor:"var(--accent)",boxShadow:"0 0 0 3px color-mix(in srgb, var(--accent) 25%, transparent)"},swatchRow:{display:"flex",alignItems:"center",gap:5,position:"relative"},swatch:{width:22,height:22,borderRadius:"50%",border:"1px solid rgba(0,0,0,0.08)"},themeCheck:{marginLeft:"auto",width:20,height:20,borderRadius:"50%",background:"var(--accent)",color:"#fff",display:"grid",placeItems:"center"},themeName:{fontSize:14,fontWeight:700,display:"flex",alignItems:"center",gap:6},darkTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",background:"var(--hover)",color:"var(--text-2)",padding:"1px 6px",borderRadius:6},themeDesc:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.4}},Y2=`
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
`;function K2({statements:e,speed:r=60,delay:n=3}){const o=c.useMemo(()=>(e||[]).map(d=>(d||"").trim()).filter(Boolean).slice(0,5),[e]),[i,s]=c.useState(0),a=c.useRef(null),l=c.useRef(null);return c.useEffect(()=>{s(0)},[o]),c.useEffect(()=>{if(!o.length)return;const d=a.current,g=l.current;if(!d||!g)return;const m=d.offsetWidth,f=g.offsetWidth,h=Math.max(10,Number(r)||60),T=Math.max(2500,(m+f)/h*1e3),D=g.animate([{transform:`translateX(${m}px)`},{transform:`translateX(${-f}px)`}],{duration:T,easing:"linear",fill:"both"});let I;const z=()=>{I=setTimeout(()=>s(b=>(b+1)%o.length),Math.max(0,Number(n)||0)*1e3)};return D.addEventListener("finish",z),()=>{D.cancel(),D.removeEventListener("finish",z),clearTimeout(I)}},[i,o,r,n]),o.length?t.jsxs("div",{style:Uo.bar,"aria-label":"Reminders",children:[t.jsx("style",{children:Y2}),t.jsx("div",{className:"anvil-tick-glow",style:Uo.icon,children:t.jsx("span",{className:"anvil-tick-pulse",style:{display:"grid",placeItems:"center"},children:t.jsx(Rh,{size:15})})}),t.jsxs("div",{ref:a,style:Uo.viewport,children:[t.jsx("span",{className:"anvil-tick-shimmer",style:Uo.shimmer}),t.jsx("div",{className:"anvil-tick-float",style:Uo.floatWrap,children:t.jsx("div",{ref:l,style:Uo.text,children:o[i%o.length]},i)})]})]}):null}const Uo={bar:{display:"flex",alignItems:"center",height:36,flexShrink:0,overflow:"hidden",borderBottom:"1px solid var(--border)",background:"color-mix(in srgb, var(--accent) 12%, var(--surface))"},icon:{display:"grid",placeItems:"center",width:42,height:"100%",flexShrink:0,color:"#fff",background:"var(--accent)",zIndex:2},viewport:{position:"relative",flex:1,height:"100%",overflow:"hidden",display:"flex",alignItems:"center"},shimmer:{position:"absolute",top:0,bottom:0,left:0,width:"22%",background:"linear-gradient(100deg, transparent, color-mix(in srgb, var(--accent) 22%, transparent), transparent)",pointerEvents:"none",zIndex:1},floatWrap:{display:"inline-flex",alignItems:"center",willChange:"transform"},text:{whiteSpace:"nowrap",fontSize:13.5,fontWeight:700,color:"var(--text)",letterSpacing:"0.01em",willChange:"transform",paddingLeft:4}};Vi(uf(),!1);const Fc="anvil_default_screen",ib=()=>{try{return localStorage.getItem(Fc)}catch{return null}},pf="anvil_last_screen",Q2=()=>{try{return localStorage.getItem(pf)}catch{return null}},Vn={dashboard:{label:"Dashboard",icon:k0,component:sv},kickstart:{label:"Kickstart",icon:Wh,component:q1},golden:{label:"Golden Book",icon:Sh,component:t2},habits:{label:"Habits",icon:$h,component:Bv},quadrant:{label:"Quadrant",icon:Bh,component:uv},goals:{label:"Goals",icon:El,component:vv},grove:{label:"Grove",icon:Oh,component:y1},worth:{label:"Rewards",icon:Ih,component:T1},vault:{label:"Wallet",icon:Mg,component:_1},expenses:{label:"Expenses",icon:Fg,component:T2},trading:{label:"Trading Journal",icon:s0,component:O2},journal:{label:"Journal",icon:Ms,component:Hv},revision:{label:"Revision",icon:Wg,component:r1},affirmations:{label:"Affirmations",icon:_o,component:i1},skills:{label:"Skills",icon:Ch,component:Uv},spiritual:{label:"Spiritual",icon:Aa,component:Kv},mindscape:{label:"Mindscape",icon:Th,component:c2},achievements:{label:"Achievements",icon:rn,component:v2},challenges:{label:"Challenges",icon:O0,component:E2},bucket:{label:"Bucket List",icon:C0,component:F2},delight:{label:"Delights",icon:Ag,component:S2}},bf=["dashboard","kickstart","golden","habits","quadrant","goals","grove","journal","revision","affirmations","skills","spiritual","mindscape","achievements","challenges","bucket","delight","worth","vault","expenses","trading"];function va(e){const r=bf.filter(i=>Vn[i]),o=[...(Array.isArray(e)?e:[]).filter(i=>Vn[i])];return r.forEach(i=>{o.includes(i)||o.push(i)}),o}function X2(){const[e,r]=c.useState(()=>window.innerWidth<720);return c.useEffect(()=>{const n=()=>r(window.innerWidth<720);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}function q2(){const[e,r]=c.useState(()=>{const $=Q2();if($&&Vn[$])return $;const ae=ib();return ae&&Vn[ae]?ae:"habits"}),[n,o]=c.useState(()=>ib()||"habits"),[i,s]=c.useState(!1),[a,l]=c.useState(null),[d,g]=c.useState(!1),[m,f]=c.useState(!1),[h,T]=c.useState(uf()),[D,I]=c.useState(ki()),[z,b]=c.useState(Tc()),[p,u]=c.useState({enabled:!1,statements:[],speed:60,delay:3}),[y,j]=c.useState(()=>va(bf)),[C,k]=c.useState([]),x=X2(),B=c.useRef(e);c.useEffect(()=>{B.current=e},[e]),c.useEffect(()=>{if(!a)return;const $=10,ae=new Set(["kickstart","mindscape"]),me=setInterval(()=>{const Oe=B.current;!document.hidden&&Oe&&!ae.has(Oe)&&_.addScreenTime(Oe,$).catch(()=>{})},$*1e3);return()=>clearInterval(me)},[a]),c.useEffect(()=>{let $=!1;const ae=()=>{kc(),l(null)};window.addEventListener("anvil-unauthorized",ae);const me=new URLSearchParams(window.location.search).get("login");return me&&(K0(me),window.history.replaceState({},"",window.location.pathname)),Uh()?_.me().then(Oe=>{$||l(Oe)}).catch(()=>{}).finally(()=>{$||g(!0)}):g(!0),()=>{$=!0,window.removeEventListener("anvil-unauthorized",ae)}},[]),c.useEffect(()=>{a&&(_.getSetting("theme").then($=>{$!=null&&$.value&&T(Vi($.value))}).catch(()=>{}),_.getSetting("currency").then($=>{$!=null&&$.value&&I(tp($.value))}).catch(()=>{}),_.getSetting("month_start_day").then($=>{$!=null&&$.value&&b(rp($.value))}).catch(()=>{}),_.getSetting("day_start_hour").then($=>{($==null?void 0:$.value)!=null&&zc($.value)}).catch(()=>{}),_.getSetting("ticker").then($=>{$!=null&&$.value&&u(ae=>({...ae,...$.value}))}).catch(()=>{}),_.getSetting("default_screen").then($=>{if($!=null&&$.value&&Vn[$.value]){o($.value);try{localStorage.setItem(Fc,$.value)}catch{}}}).catch(()=>{}),_.getSetting("sidebar_order").then($=>{Array.isArray($==null?void 0:$.value)&&j(va($.value))}).catch(()=>{}),_.getSetting("sidebar_hidden").then($=>{Array.isArray($==null?void 0:$.value)&&k($.value)}).catch(()=>{}))},[a]);function W($){r($),s(!1);try{localStorage.setItem(pf,$)}catch{}}const Q=()=>{kc(),l(null)},re=$=>{Vi($,!1)},ge=$=>{T(Vi($)),_.setSetting("theme",$).catch(()=>{}),f(!1)},A=()=>{Vi(h,!1),f(!1)},X=$=>{I(tp($)),_.setSetting("currency",$).catch(()=>{})},ie=$=>{b(rp($)),_.setSetting("month_start_day",Number($)).catch(()=>{})},xe=$=>{u($),_.setSetting("ticker",$).catch(()=>{})},q=$=>{o($);try{localStorage.setItem(Fc,$)}catch{}_.setSetting("default_screen",$).catch(()=>{})},K=($,ae)=>{if(j(va($)),k(ae),f(!1),_.setSetting("sidebar_order",$).catch(()=>{}),_.setSetting("sidebar_hidden",ae).catch(()=>{}),ae.includes(e)){const me=va($).find(Oe=>!ae.includes(Oe));me&&r(me)}},de=y.filter($=>!C.includes($));if(!d)return t.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",fontFamily:"'Inter',system-ui,sans-serif",color:"var(--text-3)"},children:"Loading…"});if(!a)return t.jsx(I1,{});const J=Vn[e],R=J.component,O=()=>t.jsx("div",{style:kt.navItems,children:de.map($=>{const ae=Vn[$];if(!ae)return null;const me=ae.icon,Oe=e===$;return t.jsxs("button",{onClick:()=>W($),title:ae.label,style:{...kt.navItem,...Oe?kt.navItemOn:{}},children:[t.jsx(me,{size:18}),t.jsx("span",{style:kt.navLabel,children:ae.label})]},$)})}),G=()=>t.jsxs("div",{style:kt.footerWrap,children:[t.jsxs("button",{onClick:()=>f(!0),style:kt.settingsBtn,title:"Settings",children:[t.jsx(_h,{size:17}),t.jsx("span",{children:"Settings"})]}),t.jsxs("div",{style:kt.userFooter,children:[t.jsxs("div",{style:kt.userInfo,children:[t.jsx("div",{style:kt.userAvatar,children:(a.name||a.email||"?").charAt(0).toUpperCase()}),t.jsxs("div",{style:{minWidth:0},children:[t.jsx("div",{style:kt.userName,children:a.name||"You"}),t.jsx("div",{style:kt.userEmail,children:a.email})]})]}),t.jsx("button",{onClick:Q,style:kt.logoutBtn,title:"Sign out",children:t.jsx(T0,{size:16})})]})]});return t.jsxs("div",{style:kt.shell,children:[!x&&t.jsxs("nav",{style:kt.nav,children:[t.jsxs("div",{style:kt.brand,children:[t.jsx("div",{style:kt.brandLogo,children:"B"}),t.jsx("span",{style:kt.brandName,children:"Anvil"})]}),t.jsx(O,{}),t.jsx(G,{})]}),x&&i&&t.jsx("div",{style:kt.overlay,onClick:()=>s(!1),children:t.jsxs("nav",{style:kt.drawer,onClick:$=>$.stopPropagation(),children:[t.jsxs("div",{style:kt.drawerHeader,children:[t.jsxs("div",{style:kt.brand,children:[t.jsx("div",{style:kt.brandLogo,children:"B"}),t.jsx("span",{style:kt.brandName,children:"Anvil"})]}),t.jsx("button",{style:kt.closeBtn,onClick:()=>s(!1),children:t.jsx(De,{size:20})})]}),t.jsx("div",{style:kt.drawerNav,children:t.jsx(O,{})}),t.jsx(G,{})]})}),t.jsxs("div",{style:kt.content,children:[x&&t.jsxs("div",{style:kt.topBar,children:[t.jsx("button",{style:kt.menuBtn,onClick:()=>s(!0),children:t.jsx(Eg,{size:22})}),t.jsx("span",{style:kt.topBarTitle,children:J.label}),t.jsx("div",{style:{width:38}})]}),p.enabled&&t.jsx(K2,{statements:p.statements,speed:p.speed,delay:p.delay}),t.jsx("main",{style:kt.main,children:t.jsx(R,{onNavigate:W})})]}),m&&t.jsx(V2,{screens:Vn,order:y,hidden:C,themeId:h,currency:D,monthStartDay:z,ticker:p,defaultScreen:n,onSetDefault:q,onSaveSidebar:K,onPreviewTheme:re,onCommitTheme:ge,onSelectCurrency:X,onSelectMonthStartDay:ie,onSaveTicker:xe,onClose:A})]})}const kt={shell:{display:"flex",height:"100vh",overflow:"hidden",fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)"},nav:{width:200,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column",padding:"20px 10px",gap:2,overflowY:"auto",overflowX:"hidden"},brand:{display:"flex",alignItems:"center",gap:9,padding:"6px 10px 20px",borderBottom:"1px solid var(--border)",marginBottom:8},brandLogo:{width:30,height:30,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:14,fontWeight:800,fontFamily:"'Fraunces', Georgia, serif",flexShrink:0},brandName:{fontSize:16,fontWeight:700,letterSpacing:"-0.01em",color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},navItems:{display:"flex",flexDirection:"column",gap:2},navItem:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},navItemOn:{background:"var(--hover)",color:"var(--text)",fontWeight:700},footerWrap:{marginTop:"auto",paddingTop:8,flexShrink:0},settingsBtn:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},userFooter:{marginTop:4,paddingTop:12,borderTop:"1px solid var(--border)",display:"flex",alignItems:"center",gap:8},userInfo:{display:"flex",alignItems:"center",gap:8,flex:1,minWidth:0},userAvatar:{width:30,height:30,borderRadius:"50%",background:"#8268B0",color:"#fff",display:"grid",placeItems:"center",fontSize:13,fontWeight:700,flexShrink:0},userName:{fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},userEmail:{fontSize:11,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},logoutBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",padding:7,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},navLabel:{flex:1},content:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},main:{flex:1,overflowY:"auto",overflowX:"hidden"},topBar:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",background:"var(--surface)",borderBottom:"1px solid var(--border)",flexShrink:0},topBarTitle:{fontSize:16,fontWeight:700,color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},menuBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text)",padding:8,borderRadius:8,display:"grid",placeItems:"center"},overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.35)",zIndex:100,display:"flex"},drawer:{width:220,background:"var(--surface)",height:"100%",display:"flex",flexDirection:"column",padding:"16px 10px",gap:2,boxShadow:"4px 0 24px rgba(0,0,0,0.12)",overflow:"hidden"},drawerNav:{flex:1,minHeight:0,overflowY:"auto",overflowX:"hidden"},drawerHeader:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:4,flexShrink:0},closeBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",padding:6,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0}};xh(document.getElementById("root")).render(t.jsx(c.StrictMode,{children:t.jsx(q2,{})}));
