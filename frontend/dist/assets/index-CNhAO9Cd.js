(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var bp={exports:{}},Bl={},mp={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yi=Symbol.for("react.element"),bh=Symbol.for("react.portal"),mh=Symbol.for("react.fragment"),hh=Symbol.for("react.strict_mode"),fh=Symbol.for("react.profiler"),xh=Symbol.for("react.provider"),yh=Symbol.for("react.context"),vh=Symbol.for("react.forward_ref"),jh=Symbol.for("react.suspense"),kh=Symbol.for("react.memo"),wh=Symbol.for("react.lazy"),dg=Symbol.iterator;function Sh(e){return e===null||typeof e!="object"?null:(e=dg&&e[dg]||e["@@iterator"],typeof e=="function"?e:null)}var hp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fp=Object.assign,xp={};function Po(e,r,n){this.props=e,this.context=r,this.refs=xp,this.updater=n||hp}Po.prototype.isReactComponent={};Po.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")};Po.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function yp(){}yp.prototype=Po.prototype;function rc(e,r,n){this.props=e,this.context=r,this.refs=xp,this.updater=n||hp}var nc=rc.prototype=new yp;nc.constructor=rc;fp(nc,Po.prototype);nc.isPureReactComponent=!0;var cg=Array.isArray,vp=Object.prototype.hasOwnProperty,oc={current:null},jp={key:!0,ref:!0,__self:!0,__source:!0};function kp(e,r,n){var o,i={},s=null,l=null;if(r!=null)for(o in r.ref!==void 0&&(l=r.ref),r.key!==void 0&&(s=""+r.key),r)vp.call(r,o)&&!jp.hasOwnProperty(o)&&(i[o]=r[o]);var d=arguments.length-2;if(d===1)i.children=n;else if(1<d){for(var a=Array(d),g=0;g<d;g++)a[g]=arguments[g+2];i.children=a}if(e&&e.defaultProps)for(o in d=e.defaultProps,d)i[o]===void 0&&(i[o]=d[o]);return{$$typeof:Yi,type:e,key:s,ref:l,props:i,_owner:oc.current}}function Ch(e,r){return{$$typeof:Yi,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function ic(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yi}function zh(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return r[n]})}var gg=/\/+/g;function ra(e,r){return typeof e=="object"&&e!==null&&e.key!=null?zh(""+e.key):r.toString(36)}function Ws(e,r,n,o,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Yi:case bh:l=!0}}if(l)return l=e,i=i(l),e=o===""?"."+ra(l,0):o,cg(i)?(n="",e!=null&&(n=e.replace(gg,"$&/")+"/"),Ws(i,r,n,"",function(g){return g})):i!=null&&(ic(i)&&(i=Ch(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(gg,"$&/")+"/")+e)),r.push(i)),1;if(l=0,o=o===""?".":o+":",cg(e))for(var d=0;d<e.length;d++){s=e[d];var a=o+ra(s,d);l+=Ws(s,r,n,a,i)}else if(a=Sh(e),typeof a=="function")for(e=a.call(e),d=0;!(s=e.next()).done;)s=s.value,a=o+ra(s,d++),l+=Ws(s,r,n,a,i);else if(s==="object")throw r=String(e),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return l}function rs(e,r,n){if(e==null)return e;var o=[],i=0;return Ws(e,o,"","",function(s){return r.call(n,s,i++)}),o}function Th(e){if(e._status===-1){var r=e._result;r=r(),r.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=r)}if(e._status===1)return e._result.default;throw e._result}var Vt={current:null},Ls={transition:null},Ih={ReactCurrentDispatcher:Vt,ReactCurrentBatchConfig:Ls,ReactCurrentOwner:oc};function wp(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:rs,forEach:function(e,r,n){rs(e,function(){r.apply(this,arguments)},n)},count:function(e){var r=0;return rs(e,function(){r++}),r},toArray:function(e){return rs(e,function(r){return r})||[]},only:function(e){if(!ic(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Xe.Component=Po;Xe.Fragment=mh;Xe.Profiler=fh;Xe.PureComponent=rc;Xe.StrictMode=hh;Xe.Suspense=jh;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ih;Xe.act=wp;Xe.cloneElement=function(e,r,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=fp({},e.props),i=e.key,s=e.ref,l=e._owner;if(r!=null){if(r.ref!==void 0&&(s=r.ref,l=oc.current),r.key!==void 0&&(i=""+r.key),e.type&&e.type.defaultProps)var d=e.type.defaultProps;for(a in r)vp.call(r,a)&&!jp.hasOwnProperty(a)&&(o[a]=r[a]===void 0&&d!==void 0?d[a]:r[a])}var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){d=Array(a);for(var g=0;g<a;g++)d[g]=arguments[g+2];o.children=d}return{$$typeof:Yi,type:e.type,key:i,ref:s,props:o,_owner:l}};Xe.createContext=function(e){return e={$$typeof:yh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:xh,_context:e},e.Consumer=e};Xe.createElement=kp;Xe.createFactory=function(e){var r=kp.bind(null,e);return r.type=e,r};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(e){return{$$typeof:vh,render:e}};Xe.isValidElement=ic;Xe.lazy=function(e){return{$$typeof:wh,_payload:{_status:-1,_result:e},_init:Th}};Xe.memo=function(e,r){return{$$typeof:kh,type:e,compare:r===void 0?null:r}};Xe.startTransition=function(e){var r=Ls.transition;Ls.transition={};try{e()}finally{Ls.transition=r}};Xe.unstable_act=wp;Xe.useCallback=function(e,r){return Vt.current.useCallback(e,r)};Xe.useContext=function(e){return Vt.current.useContext(e)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(e){return Vt.current.useDeferredValue(e)};Xe.useEffect=function(e,r){return Vt.current.useEffect(e,r)};Xe.useId=function(){return Vt.current.useId()};Xe.useImperativeHandle=function(e,r,n){return Vt.current.useImperativeHandle(e,r,n)};Xe.useInsertionEffect=function(e,r){return Vt.current.useInsertionEffect(e,r)};Xe.useLayoutEffect=function(e,r){return Vt.current.useLayoutEffect(e,r)};Xe.useMemo=function(e,r){return Vt.current.useMemo(e,r)};Xe.useReducer=function(e,r,n){return Vt.current.useReducer(e,r,n)};Xe.useRef=function(e){return Vt.current.useRef(e)};Xe.useState=function(e){return Vt.current.useState(e)};Xe.useSyncExternalStore=function(e,r,n){return Vt.current.useSyncExternalStore(e,r,n)};Xe.useTransition=function(){return Vt.current.useTransition()};Xe.version="18.3.1";mp.exports=Xe;var c=mp.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eh=c,Bh=Symbol.for("react.element"),Dh=Symbol.for("react.fragment"),Ah=Object.prototype.hasOwnProperty,Rh=Eh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fh={key:!0,ref:!0,__self:!0,__source:!0};function Sp(e,r,n){var o,i={},s=null,l=null;n!==void 0&&(s=""+n),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(l=r.ref);for(o in r)Ah.call(r,o)&&!Fh.hasOwnProperty(o)&&(i[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps,r)i[o]===void 0&&(i[o]=r[o]);return{$$typeof:Bh,type:e,key:s,ref:l,props:i,_owner:Rh.current}}Bl.Fragment=Dh;Bl.jsx=Sp;Bl.jsxs=Sp;bp.exports=Bl;var t=bp.exports,Cp={exports:{}},lr={},zp={exports:{}},Tp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function r(G,V){var oe=G.length;G.push(V);e:for(;0<oe;){var Q=oe-1>>>1,ue=G[Q];if(0<i(ue,V))G[Q]=V,G[oe]=ue,oe=Q;else break e}}function n(G){return G.length===0?null:G[0]}function o(G){if(G.length===0)return null;var V=G[0],oe=G.pop();if(oe!==V){G[0]=oe;e:for(var Q=0,ue=G.length,v=ue>>>1;Q<v;){var A=2*(Q+1)-1,P=G[A],se=A+1,le=G[se];if(0>i(P,oe))se<ue&&0>i(le,P)?(G[Q]=le,G[se]=oe,Q=se):(G[Q]=P,G[A]=oe,Q=A);else if(se<ue&&0>i(le,oe))G[Q]=le,G[se]=oe,Q=se;else break e}}return V}function i(G,V){var oe=G.sortIndex-V.sortIndex;return oe!==0?oe:G.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var l=Date,d=l.now();e.unstable_now=function(){return l.now()-d}}var a=[],g=[],h=1,x=null,f=3,E=!1,z=!1,k=!1,R=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(G){for(var V=n(g);V!==null;){if(V.callback===null)o(g);else if(V.startTime<=G)o(g),V.sortIndex=V.expirationTime,r(a,V);else break;V=n(g)}}function T(G){if(k=!1,m(G),!z)if(n(a)!==null)z=!0,ae(j);else{var V=n(g);V!==null&&ve(T,V.startTime-G)}}function j(G,V){z=!1,k&&(k=!1,b(M),M=-1),E=!0;var oe=f;try{for(m(V),x=n(a);x!==null&&(!(x.expirationTime>V)||G&&!ie());){var Q=x.callback;if(typeof Q=="function"){x.callback=null,f=x.priorityLevel;var ue=Q(x.expirationTime<=V);V=e.unstable_now(),typeof ue=="function"?x.callback=ue:x===n(a)&&o(a),m(V)}else o(a);x=n(a)}if(x!==null)var v=!0;else{var A=n(g);A!==null&&ve(T,A.startTime-V),v=!1}return v}finally{x=null,f=oe,E=!1}}var C=!1,L=null,M=-1,w=5,D=-1;function ie(){return!(e.unstable_now()-D<w)}function B(){if(L!==null){var G=e.unstable_now();D=G;var V=!0;try{V=L(!0,G)}finally{V?I():(C=!1,L=null)}}else C=!1}var I;if(typeof p=="function")I=function(){p(B)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,be=Z.port2;Z.port1.onmessage=B,I=function(){be.postMessage(null)}}else I=function(){R(B,0)};function ae(G){L=G,C||(C=!0,I())}function ve(G,V){M=R(function(){G(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(G){G.callback=null},e.unstable_continueExecution=function(){z||E||(z=!0,ae(j))},e.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<G?Math.floor(1e3/G):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(G){switch(f){case 1:case 2:case 3:var V=3;break;default:V=f}var oe=f;f=V;try{return G()}finally{f=oe}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(G,V){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var oe=f;f=G;try{return V()}finally{f=oe}},e.unstable_scheduleCallback=function(G,V,oe){var Q=e.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?Q+oe:Q):oe=Q,G){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=oe+ue,G={id:h++,callback:V,priorityLevel:G,startTime:oe,expirationTime:ue,sortIndex:-1},oe>Q?(G.sortIndex=oe,r(g,G),n(a)===null&&G===n(g)&&(k?(b(M),M=-1):k=!0,ve(T,oe-Q))):(G.sortIndex=ue,r(a,G),z||E||(z=!0,ae(j))),G},e.unstable_shouldYield=ie,e.unstable_wrapCallback=function(G){var V=f;return function(){var oe=f;f=V;try{return G.apply(this,arguments)}finally{f=oe}}}})(Tp);zp.exports=Tp;var Mh=zp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wh=c,sr=Mh;function xe(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ip=new Set,zi={};function eo(e,r){Ao(e,r),Ao(e+"Capture",r)}function Ao(e,r){for(zi[e]=r,e=0;e<r.length;e++)Ip.add(r[e])}var nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Va=Object.prototype.hasOwnProperty,Lh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ug={},pg={};function _h(e){return Va.call(pg,e)?!0:Va.call(ug,e)?!1:Lh.test(e)?pg[e]=!0:(ug[e]=!0,!1)}function $h(e,r,n,o){if(n!==null&&n.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ph(e,r,n,o){if(r===null||typeof r>"u"||$h(e,r,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Yt(e,r,n,o,i,s,l){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=o,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=r,this.sanitizeURL=s,this.removeEmptyString=l}var Wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Wt[e]=new Yt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];Wt[r]=new Yt(r,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Wt[e]=new Yt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Wt[e]=new Yt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Wt[e]=new Yt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Wt[e]=new Yt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Wt[e]=new Yt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Wt[e]=new Yt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Wt[e]=new Yt(e,5,!1,e.toLowerCase(),null,!1,!1)});var sc=/[\-:]([a-z])/g;function lc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(sc,lc);Wt[r]=new Yt(r,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(sc,lc);Wt[r]=new Yt(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(sc,lc);Wt[r]=new Yt(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Wt[e]=new Yt(e,1,!1,e.toLowerCase(),null,!1,!1)});Wt.xlinkHref=new Yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Wt[e]=new Yt(e,1,!1,e.toLowerCase(),null,!0,!0)});function ac(e,r,n,o){var i=Wt.hasOwnProperty(r)?Wt[r]:null;(i!==null?i.type!==0:o||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Ph(r,n,i,o)&&(n=null),o||i===null?_h(r)&&(n===null?e.removeAttribute(r):e.setAttribute(r,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(r=i.attributeName,o=i.attributeNamespace,n===null?e.removeAttribute(r):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,o?e.setAttributeNS(o,r,n):e.setAttribute(r,n))))}var an=Wh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ns=Symbol.for("react.element"),bo=Symbol.for("react.portal"),mo=Symbol.for("react.fragment"),dc=Symbol.for("react.strict_mode"),Ya=Symbol.for("react.profiler"),Ep=Symbol.for("react.provider"),Bp=Symbol.for("react.context"),cc=Symbol.for("react.forward_ref"),Qa=Symbol.for("react.suspense"),Ka=Symbol.for("react.suspense_list"),gc=Symbol.for("react.memo"),mn=Symbol.for("react.lazy"),Dp=Symbol.for("react.offscreen"),bg=Symbol.iterator;function Ko(e){return e===null||typeof e!="object"?null:(e=bg&&e[bg]||e["@@iterator"],typeof e=="function"?e:null)}var ht=Object.assign,na;function li(e){if(na===void 0)try{throw Error()}catch(n){var r=n.stack.trim().match(/\n( *(at )?)/);na=r&&r[1]||""}return`
`+na+e}var oa=!1;function ia(e,r){if(!e||oa)return"";oa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(g){var o=g}Reflect.construct(e,[],r)}else{try{r.call()}catch(g){o=g}e.call(r.prototype)}else{try{throw Error()}catch(g){o=g}e()}}catch(g){if(g&&o&&typeof g.stack=="string"){for(var i=g.stack.split(`
`),s=o.stack.split(`
`),l=i.length-1,d=s.length-1;1<=l&&0<=d&&i[l]!==s[d];)d--;for(;1<=l&&0<=d;l--,d--)if(i[l]!==s[d]){if(l!==1||d!==1)do if(l--,d--,0>d||i[l]!==s[d]){var a=`
`+i[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=d);break}}}finally{oa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?li(e):""}function Nh(e){switch(e.tag){case 5:return li(e.type);case 16:return li("Lazy");case 13:return li("Suspense");case 19:return li("SuspenseList");case 0:case 2:case 15:return e=ia(e.type,!1),e;case 11:return e=ia(e.type.render,!1),e;case 1:return e=ia(e.type,!0),e;default:return""}}function Xa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case mo:return"Fragment";case bo:return"Portal";case Ya:return"Profiler";case dc:return"StrictMode";case Qa:return"Suspense";case Ka:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Bp:return(e.displayName||"Context")+".Consumer";case Ep:return(e._context.displayName||"Context")+".Provider";case cc:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gc:return r=e.displayName||null,r!==null?r:Xa(e.type)||"Memo";case mn:r=e._payload,e=e._init;try{return Xa(e(r))}catch{}}return null}function Oh(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xa(r);case 8:return r===dc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Bn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ap(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Hh(e){var r=Ap(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),o=""+e[r];if(!e.hasOwnProperty(r)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return i.call(this)},set:function(l){o=""+l,s.call(this,l)}}),Object.defineProperty(e,r,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(l){o=""+l},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function os(e){e._valueTracker||(e._valueTracker=Hh(e))}function Rp(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var n=r.getValue(),o="";return e&&(o=Ap(e)?e.checked?"true":"false":e.value),e=o,e!==n?(r.setValue(e),!0):!1}function qs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function qa(e,r){var n=r.checked;return ht({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function mg(e,r){var n=r.defaultValue==null?"":r.defaultValue,o=r.checked!=null?r.checked:r.defaultChecked;n=Bn(r.value!=null?r.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Fp(e,r){r=r.checked,r!=null&&ac(e,"checked",r,!1)}function Za(e,r){Fp(e,r);var n=Bn(r.value),o=r.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Ja(e,r.type,n):r.hasOwnProperty("defaultValue")&&Ja(e,r.type,Bn(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function hg(e,r,n){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var o=r.type;if(!(o!=="submit"&&o!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,n||r===e.value||(e.value=r),e.defaultValue=r}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ja(e,r,n){(r!=="number"||qs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ai=Array.isArray;function zo(e,r,n,o){if(e=e.options,r){r={};for(var i=0;i<n.length;i++)r["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=r.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&o&&(e[n].defaultSelected=!0)}else{for(n=""+Bn(n),r=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,o&&(e[i].defaultSelected=!0);return}r!==null||e[i].disabled||(r=e[i])}r!==null&&(r.selected=!0)}}function ed(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(xe(91));return ht({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function fg(e,r){var n=r.value;if(n==null){if(n=r.children,r=r.defaultValue,n!=null){if(r!=null)throw Error(xe(92));if(ai(n)){if(1<n.length)throw Error(xe(93));n=n[0]}r=n}r==null&&(r=""),n=r}e._wrapperState={initialValue:Bn(n)}}function Mp(e,r){var n=Bn(r.value),o=Bn(r.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),r.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function xg(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function Wp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function td(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?Wp(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var is,Lp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,n,o,i){MSApp.execUnsafeLocalFunction(function(){return e(r,n,o,i)})}:e}(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(is=is||document.createElement("div"),is.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=is.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function Ti(e,r){if(r){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=r;return}}e.textContent=r}var bi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gh=["Webkit","ms","Moz","O"];Object.keys(bi).forEach(function(e){Gh.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),bi[r]=bi[e]})});function _p(e,r,n){return r==null||typeof r=="boolean"||r===""?"":n||typeof r!="number"||r===0||bi.hasOwnProperty(e)&&bi[e]?(""+r).trim():r+"px"}function $p(e,r){e=e.style;for(var n in r)if(r.hasOwnProperty(n)){var o=n.indexOf("--")===0,i=_p(n,r[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,i):e[n]=i}}var Uh=ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rd(e,r){if(r){if(Uh[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(xe(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(xe(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(xe(61))}if(r.style!=null&&typeof r.style!="object")throw Error(xe(62))}}function nd(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var od=null;function uc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var id=null,To=null,Io=null;function yg(e){if(e=Xi(e)){if(typeof id!="function")throw Error(xe(280));var r=e.stateNode;r&&(r=Ml(r),id(e.stateNode,e.type,r))}}function Pp(e){To?Io?Io.push(e):Io=[e]:To=e}function Np(){if(To){var e=To,r=Io;if(Io=To=null,yg(e),r)for(e=0;e<r.length;e++)yg(r[e])}}function Op(e,r){return e(r)}function Hp(){}var sa=!1;function Gp(e,r,n){if(sa)return e(r,n);sa=!0;try{return Op(e,r,n)}finally{sa=!1,(To!==null||Io!==null)&&(Hp(),Np())}}function Ii(e,r){var n=e.stateNode;if(n===null)return null;var o=Ml(n);if(o===null)return null;n=o[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(xe(231,r,typeof n));return n}var sd=!1;if(nn)try{var Xo={};Object.defineProperty(Xo,"passive",{get:function(){sd=!0}}),window.addEventListener("test",Xo,Xo),window.removeEventListener("test",Xo,Xo)}catch{sd=!1}function Vh(e,r,n,o,i,s,l,d,a){var g=Array.prototype.slice.call(arguments,3);try{r.apply(n,g)}catch(h){this.onError(h)}}var mi=!1,Zs=null,Js=!1,ld=null,Yh={onError:function(e){mi=!0,Zs=e}};function Qh(e,r,n,o,i,s,l,d,a){mi=!1,Zs=null,Vh.apply(Yh,arguments)}function Kh(e,r,n,o,i,s,l,d,a){if(Qh.apply(this,arguments),mi){if(mi){var g=Zs;mi=!1,Zs=null}else throw Error(xe(198));Js||(Js=!0,ld=g)}}function to(e){var r=e,n=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,r.flags&4098&&(n=r.return),e=r.return;while(e)}return r.tag===3?n:null}function Up(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function vg(e){if(to(e)!==e)throw Error(xe(188))}function Xh(e){var r=e.alternate;if(!r){if(r=to(e),r===null)throw Error(xe(188));return r!==e?null:e}for(var n=e,o=r;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(o=i.return,o!==null){n=o;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return vg(i),e;if(s===o)return vg(i),r;s=s.sibling}throw Error(xe(188))}if(n.return!==o.return)n=i,o=s;else{for(var l=!1,d=i.child;d;){if(d===n){l=!0,n=i,o=s;break}if(d===o){l=!0,o=i,n=s;break}d=d.sibling}if(!l){for(d=s.child;d;){if(d===n){l=!0,n=s,o=i;break}if(d===o){l=!0,o=s,n=i;break}d=d.sibling}if(!l)throw Error(xe(189))}}if(n.alternate!==o)throw Error(xe(190))}if(n.tag!==3)throw Error(xe(188));return n.stateNode.current===n?e:r}function Vp(e){return e=Xh(e),e!==null?Yp(e):null}function Yp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=Yp(e);if(r!==null)return r;e=e.sibling}return null}var Qp=sr.unstable_scheduleCallback,jg=sr.unstable_cancelCallback,qh=sr.unstable_shouldYield,Zh=sr.unstable_requestPaint,yt=sr.unstable_now,Jh=sr.unstable_getCurrentPriorityLevel,pc=sr.unstable_ImmediatePriority,Kp=sr.unstable_UserBlockingPriority,el=sr.unstable_NormalPriority,ef=sr.unstable_LowPriority,Xp=sr.unstable_IdlePriority,Dl=null,_r=null;function tf(e){if(_r&&typeof _r.onCommitFiberRoot=="function")try{_r.onCommitFiberRoot(Dl,e,void 0,(e.current.flags&128)===128)}catch{}}var Tr=Math.clz32?Math.clz32:of,rf=Math.log,nf=Math.LN2;function of(e){return e>>>=0,e===0?32:31-(rf(e)/nf|0)|0}var ss=64,ls=4194304;function di(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function tl(e,r){var n=e.pendingLanes;if(n===0)return 0;var o=0,i=e.suspendedLanes,s=e.pingedLanes,l=n&268435455;if(l!==0){var d=l&~i;d!==0?o=di(d):(s&=l,s!==0&&(o=di(s)))}else l=n&~i,l!==0?o=di(l):s!==0&&(o=di(s));if(o===0)return 0;if(r!==0&&r!==o&&!(r&i)&&(i=o&-o,s=r&-r,i>=s||i===16&&(s&4194240)!==0))return r;if(o&4&&(o|=n&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=o;0<r;)n=31-Tr(r),i=1<<n,o|=e[n],r&=~i;return o}function sf(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lf(e,r){for(var n=e.suspendedLanes,o=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var l=31-Tr(s),d=1<<l,a=i[l];a===-1?(!(d&n)||d&o)&&(i[l]=sf(d,r)):a<=r&&(e.expiredLanes|=d),s&=~d}}function ad(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function qp(){var e=ss;return ss<<=1,!(ss&4194240)&&(ss=64),e}function la(e){for(var r=[],n=0;31>n;n++)r.push(e);return r}function Qi(e,r,n){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Tr(r),e[r]=n}function af(e,r){var n=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Tr(n),s=1<<i;r[i]=0,o[i]=-1,e[i]=-1,n&=~s}}function bc(e,r){var n=e.entangledLanes|=r;for(e=e.entanglements;n;){var o=31-Tr(n),i=1<<o;i&r|e[o]&r&&(e[o]|=r),n&=~i}}var nt=0;function Zp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Jp,mc,eb,tb,rb,dd=!1,as=[],kn=null,wn=null,Sn=null,Ei=new Map,Bi=new Map,fn=[],df="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kg(e,r){switch(e){case"focusin":case"focusout":kn=null;break;case"dragenter":case"dragleave":wn=null;break;case"mouseover":case"mouseout":Sn=null;break;case"pointerover":case"pointerout":Ei.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bi.delete(r.pointerId)}}function qo(e,r,n,o,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:r,domEventName:n,eventSystemFlags:o,nativeEvent:s,targetContainers:[i]},r!==null&&(r=Xi(r),r!==null&&mc(r)),e):(e.eventSystemFlags|=o,r=e.targetContainers,i!==null&&r.indexOf(i)===-1&&r.push(i),e)}function cf(e,r,n,o,i){switch(r){case"focusin":return kn=qo(kn,e,r,n,o,i),!0;case"dragenter":return wn=qo(wn,e,r,n,o,i),!0;case"mouseover":return Sn=qo(Sn,e,r,n,o,i),!0;case"pointerover":var s=i.pointerId;return Ei.set(s,qo(Ei.get(s)||null,e,r,n,o,i)),!0;case"gotpointercapture":return s=i.pointerId,Bi.set(s,qo(Bi.get(s)||null,e,r,n,o,i)),!0}return!1}function nb(e){var r=Hn(e.target);if(r!==null){var n=to(r);if(n!==null){if(r=n.tag,r===13){if(r=Up(n),r!==null){e.blockedOn=r,rb(e.priority,function(){eb(n)});return}}else if(r===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _s(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var n=cd(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);od=o,n.target.dispatchEvent(o),od=null}else return r=Xi(n),r!==null&&mc(r),e.blockedOn=n,!1;r.shift()}return!0}function wg(e,r,n){_s(e)&&n.delete(r)}function gf(){dd=!1,kn!==null&&_s(kn)&&(kn=null),wn!==null&&_s(wn)&&(wn=null),Sn!==null&&_s(Sn)&&(Sn=null),Ei.forEach(wg),Bi.forEach(wg)}function Zo(e,r){e.blockedOn===r&&(e.blockedOn=null,dd||(dd=!0,sr.unstable_scheduleCallback(sr.unstable_NormalPriority,gf)))}function Di(e){function r(i){return Zo(i,e)}if(0<as.length){Zo(as[0],e);for(var n=1;n<as.length;n++){var o=as[n];o.blockedOn===e&&(o.blockedOn=null)}}for(kn!==null&&Zo(kn,e),wn!==null&&Zo(wn,e),Sn!==null&&Zo(Sn,e),Ei.forEach(r),Bi.forEach(r),n=0;n<fn.length;n++)o=fn[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<fn.length&&(n=fn[0],n.blockedOn===null);)nb(n),n.blockedOn===null&&fn.shift()}var Eo=an.ReactCurrentBatchConfig,rl=!0;function uf(e,r,n,o){var i=nt,s=Eo.transition;Eo.transition=null;try{nt=1,hc(e,r,n,o)}finally{nt=i,Eo.transition=s}}function pf(e,r,n,o){var i=nt,s=Eo.transition;Eo.transition=null;try{nt=4,hc(e,r,n,o)}finally{nt=i,Eo.transition=s}}function hc(e,r,n,o){if(rl){var i=cd(e,r,n,o);if(i===null)fa(e,r,o,nl,n),kg(e,o);else if(cf(i,e,r,n,o))o.stopPropagation();else if(kg(e,o),r&4&&-1<df.indexOf(e)){for(;i!==null;){var s=Xi(i);if(s!==null&&Jp(s),s=cd(e,r,n,o),s===null&&fa(e,r,o,nl,n),s===i)break;i=s}i!==null&&o.stopPropagation()}else fa(e,r,o,null,n)}}var nl=null;function cd(e,r,n,o){if(nl=null,e=uc(o),e=Hn(e),e!==null)if(r=to(e),r===null)e=null;else if(n=r.tag,n===13){if(e=Up(r),e!==null)return e;e=null}else if(n===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return nl=e,null}function ob(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jh()){case pc:return 1;case Kp:return 4;case el:case ef:return 16;case Xp:return 536870912;default:return 16}default:return 16}}var vn=null,fc=null,$s=null;function ib(){if($s)return $s;var e,r=fc,n=r.length,o,i="value"in vn?vn.value:vn.textContent,s=i.length;for(e=0;e<n&&r[e]===i[e];e++);var l=n-e;for(o=1;o<=l&&r[n-o]===i[s-o];o++);return $s=i.slice(e,1<o?1-o:void 0)}function Ps(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function ds(){return!0}function Sg(){return!1}function ar(e){function r(n,o,i,s,l){this._reactName=n,this._targetInst=i,this.type=o,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(n=e[d],this[d]=n?n(s):s[d]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ds:Sg,this.isPropagationStopped=Sg,this}return ht(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ds)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ds)},persist:function(){},isPersistent:ds}),r}var No={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xc=ar(No),Ki=ht({},No,{view:0,detail:0}),bf=ar(Ki),aa,da,Jo,Al=ht({},Ki,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jo&&(Jo&&e.type==="mousemove"?(aa=e.screenX-Jo.screenX,da=e.screenY-Jo.screenY):da=aa=0,Jo=e),aa)},movementY:function(e){return"movementY"in e?e.movementY:da}}),Cg=ar(Al),mf=ht({},Al,{dataTransfer:0}),hf=ar(mf),ff=ht({},Ki,{relatedTarget:0}),ca=ar(ff),xf=ht({},No,{animationName:0,elapsedTime:0,pseudoElement:0}),yf=ar(xf),vf=ht({},No,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jf=ar(vf),kf=ht({},No,{data:0}),zg=ar(kf),wf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zf(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=Cf[e])?!!r[e]:!1}function yc(){return zf}var Tf=ht({},Ki,{key:function(e){if(e.key){var r=wf[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=Ps(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yc,charCode:function(e){return e.type==="keypress"?Ps(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ps(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),If=ar(Tf),Ef=ht({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tg=ar(Ef),Bf=ht({},Ki,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yc}),Df=ar(Bf),Af=ht({},No,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rf=ar(Af),Ff=ht({},Al,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mf=ar(Ff),Wf=[9,13,27,32],vc=nn&&"CompositionEvent"in window,hi=null;nn&&"documentMode"in document&&(hi=document.documentMode);var Lf=nn&&"TextEvent"in window&&!hi,sb=nn&&(!vc||hi&&8<hi&&11>=hi),Ig=" ",Eg=!1;function lb(e,r){switch(e){case"keyup":return Wf.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ab(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ho=!1;function _f(e,r){switch(e){case"compositionend":return ab(r);case"keypress":return r.which!==32?null:(Eg=!0,Ig);case"textInput":return e=r.data,e===Ig&&Eg?null:e;default:return null}}function $f(e,r){if(ho)return e==="compositionend"||!vc&&lb(e,r)?(e=ib(),$s=fc=vn=null,ho=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return sb&&r.locale!=="ko"?null:r.data;default:return null}}var Pf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bg(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!Pf[e.type]:r==="textarea"}function db(e,r,n,o){Pp(o),r=ol(r,"onChange"),0<r.length&&(n=new xc("onChange","change",null,n,o),e.push({event:n,listeners:r}))}var fi=null,Ai=null;function Nf(e){vb(e,0)}function Rl(e){var r=yo(e);if(Rp(r))return e}function Of(e,r){if(e==="change")return r}var cb=!1;if(nn){var ga;if(nn){var ua="oninput"in document;if(!ua){var Dg=document.createElement("div");Dg.setAttribute("oninput","return;"),ua=typeof Dg.oninput=="function"}ga=ua}else ga=!1;cb=ga&&(!document.documentMode||9<document.documentMode)}function Ag(){fi&&(fi.detachEvent("onpropertychange",gb),Ai=fi=null)}function gb(e){if(e.propertyName==="value"&&Rl(Ai)){var r=[];db(r,Ai,e,uc(e)),Gp(Nf,r)}}function Hf(e,r,n){e==="focusin"?(Ag(),fi=r,Ai=n,fi.attachEvent("onpropertychange",gb)):e==="focusout"&&Ag()}function Gf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Rl(Ai)}function Uf(e,r){if(e==="click")return Rl(r)}function Vf(e,r){if(e==="input"||e==="change")return Rl(r)}function Yf(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Er=typeof Object.is=="function"?Object.is:Yf;function Ri(e,r){if(Er(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var n=Object.keys(e),o=Object.keys(r);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var i=n[o];if(!Va.call(r,i)||!Er(e[i],r[i]))return!1}return!0}function Rg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fg(e,r){var n=Rg(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=r&&o>=r)return{node:n,offset:r-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rg(n)}}function ub(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?ub(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function pb(){for(var e=window,r=qs();r instanceof e.HTMLIFrameElement;){try{var n=typeof r.contentWindow.location.href=="string"}catch{n=!1}if(n)e=r.contentWindow;else break;r=qs(e.document)}return r}function jc(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function Qf(e){var r=pb(),n=e.focusedElem,o=e.selectionRange;if(r!==n&&n&&n.ownerDocument&&ub(n.ownerDocument.documentElement,n)){if(o!==null&&jc(n)){if(r=o.start,e=o.end,e===void 0&&(e=r),"selectionStart"in n)n.selectionStart=r,n.selectionEnd=Math.min(e,n.value.length);else if(e=(r=n.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(o.start,i);o=o.end===void 0?s:Math.min(o.end,i),!e.extend&&s>o&&(i=o,o=s,s=i),i=Fg(n,s);var l=Fg(n,o);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(r=r.createRange(),r.setStart(i.node,i.offset),e.removeAllRanges(),s>o?(e.addRange(r),e.extend(l.node,l.offset)):(r.setEnd(l.node,l.offset),e.addRange(r)))}}for(r=[],e=n;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<r.length;n++)e=r[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Kf=nn&&"documentMode"in document&&11>=document.documentMode,fo=null,gd=null,xi=null,ud=!1;function Mg(e,r,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ud||fo==null||fo!==qs(o)||(o=fo,"selectionStart"in o&&jc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),xi&&Ri(xi,o)||(xi=o,o=ol(gd,"onSelect"),0<o.length&&(r=new xc("onSelect","select",null,r,n),e.push({event:r,listeners:o}),r.target=fo)))}function cs(e,r){var n={};return n[e.toLowerCase()]=r.toLowerCase(),n["Webkit"+e]="webkit"+r,n["Moz"+e]="moz"+r,n}var xo={animationend:cs("Animation","AnimationEnd"),animationiteration:cs("Animation","AnimationIteration"),animationstart:cs("Animation","AnimationStart"),transitionend:cs("Transition","TransitionEnd")},pa={},bb={};nn&&(bb=document.createElement("div").style,"AnimationEvent"in window||(delete xo.animationend.animation,delete xo.animationiteration.animation,delete xo.animationstart.animation),"TransitionEvent"in window||delete xo.transitionend.transition);function Fl(e){if(pa[e])return pa[e];if(!xo[e])return e;var r=xo[e],n;for(n in r)if(r.hasOwnProperty(n)&&n in bb)return pa[e]=r[n];return e}var mb=Fl("animationend"),hb=Fl("animationiteration"),fb=Fl("animationstart"),xb=Fl("transitionend"),yb=new Map,Wg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rn(e,r){yb.set(e,r),eo(r,[e])}for(var ba=0;ba<Wg.length;ba++){var ma=Wg[ba],Xf=ma.toLowerCase(),qf=ma[0].toUpperCase()+ma.slice(1);Rn(Xf,"on"+qf)}Rn(mb,"onAnimationEnd");Rn(hb,"onAnimationIteration");Rn(fb,"onAnimationStart");Rn("dblclick","onDoubleClick");Rn("focusin","onFocus");Rn("focusout","onBlur");Rn(xb,"onTransitionEnd");Ao("onMouseEnter",["mouseout","mouseover"]);Ao("onMouseLeave",["mouseout","mouseover"]);Ao("onPointerEnter",["pointerout","pointerover"]);Ao("onPointerLeave",["pointerout","pointerover"]);eo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));eo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));eo("onBeforeInput",["compositionend","keypress","textInput","paste"]);eo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));eo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));eo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zf=new Set("cancel close invalid load scroll toggle".split(" ").concat(ci));function Lg(e,r,n){var o=e.type||"unknown-event";e.currentTarget=n,Kh(o,r,void 0,e),e.currentTarget=null}function vb(e,r){r=(r&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],i=o.event;o=o.listeners;e:{var s=void 0;if(r)for(var l=o.length-1;0<=l;l--){var d=o[l],a=d.instance,g=d.currentTarget;if(d=d.listener,a!==s&&i.isPropagationStopped())break e;Lg(i,d,g),s=a}else for(l=0;l<o.length;l++){if(d=o[l],a=d.instance,g=d.currentTarget,d=d.listener,a!==s&&i.isPropagationStopped())break e;Lg(i,d,g),s=a}}}if(Js)throw e=ld,Js=!1,ld=null,e}function dt(e,r){var n=r[fd];n===void 0&&(n=r[fd]=new Set);var o=e+"__bubble";n.has(o)||(jb(r,e,2,!1),n.add(o))}function ha(e,r,n){var o=0;r&&(o|=4),jb(n,e,o,r)}var gs="_reactListening"+Math.random().toString(36).slice(2);function Fi(e){if(!e[gs]){e[gs]=!0,Ip.forEach(function(n){n!=="selectionchange"&&(Zf.has(n)||ha(n,!1,e),ha(n,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[gs]||(r[gs]=!0,ha("selectionchange",!1,r))}}function jb(e,r,n,o){switch(ob(r)){case 1:var i=uf;break;case 4:i=pf;break;default:i=hc}n=i.bind(null,r,n,e),i=void 0,!sd||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(i=!0),o?i!==void 0?e.addEventListener(r,n,{capture:!0,passive:i}):e.addEventListener(r,n,!0):i!==void 0?e.addEventListener(r,n,{passive:i}):e.addEventListener(r,n,!1)}function fa(e,r,n,o,i){var s=o;if(!(r&1)&&!(r&2)&&o!==null)e:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var d=o.stateNode.containerInfo;if(d===i||d.nodeType===8&&d.parentNode===i)break;if(l===4)for(l=o.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;l=l.return}for(;d!==null;){if(l=Hn(d),l===null)return;if(a=l.tag,a===5||a===6){o=s=l;continue e}d=d.parentNode}}o=o.return}Gp(function(){var g=s,h=uc(n),x=[];e:{var f=yb.get(e);if(f!==void 0){var E=xc,z=e;switch(e){case"keypress":if(Ps(n)===0)break e;case"keydown":case"keyup":E=If;break;case"focusin":z="focus",E=ca;break;case"focusout":z="blur",E=ca;break;case"beforeblur":case"afterblur":E=ca;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=Cg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=hf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=Df;break;case mb:case hb:case fb:E=yf;break;case xb:E=Rf;break;case"scroll":E=bf;break;case"wheel":E=Mf;break;case"copy":case"cut":case"paste":E=jf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=Tg}var k=(r&4)!==0,R=!k&&e==="scroll",b=k?f!==null?f+"Capture":null:f;k=[];for(var p=g,m;p!==null;){m=p;var T=m.stateNode;if(m.tag===5&&T!==null&&(m=T,b!==null&&(T=Ii(p,b),T!=null&&k.push(Mi(p,T,m)))),R)break;p=p.return}0<k.length&&(f=new E(f,z,null,n,h),x.push({event:f,listeners:k}))}}if(!(r&7)){e:{if(f=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",f&&n!==od&&(z=n.relatedTarget||n.fromElement)&&(Hn(z)||z[on]))break e;if((E||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,E?(z=n.relatedTarget||n.toElement,E=g,z=z?Hn(z):null,z!==null&&(R=to(z),z!==R||z.tag!==5&&z.tag!==6)&&(z=null)):(E=null,z=g),E!==z)){if(k=Cg,T="onMouseLeave",b="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(k=Tg,T="onPointerLeave",b="onPointerEnter",p="pointer"),R=E==null?f:yo(E),m=z==null?f:yo(z),f=new k(T,p+"leave",E,n,h),f.target=R,f.relatedTarget=m,T=null,Hn(h)===g&&(k=new k(b,p+"enter",z,n,h),k.target=m,k.relatedTarget=R,T=k),R=T,E&&z)t:{for(k=E,b=z,p=0,m=k;m;m=oo(m))p++;for(m=0,T=b;T;T=oo(T))m++;for(;0<p-m;)k=oo(k),p--;for(;0<m-p;)b=oo(b),m--;for(;p--;){if(k===b||b!==null&&k===b.alternate)break t;k=oo(k),b=oo(b)}k=null}else k=null;E!==null&&_g(x,f,E,k,!1),z!==null&&R!==null&&_g(x,R,z,k,!0)}}e:{if(f=g?yo(g):window,E=f.nodeName&&f.nodeName.toLowerCase(),E==="select"||E==="input"&&f.type==="file")var j=Of;else if(Bg(f))if(cb)j=Vf;else{j=Gf;var C=Hf}else(E=f.nodeName)&&E.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(j=Uf);if(j&&(j=j(e,g))){db(x,j,n,h);break e}C&&C(e,f,g),e==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Ja(f,"number",f.value)}switch(C=g?yo(g):window,e){case"focusin":(Bg(C)||C.contentEditable==="true")&&(fo=C,gd=g,xi=null);break;case"focusout":xi=gd=fo=null;break;case"mousedown":ud=!0;break;case"contextmenu":case"mouseup":case"dragend":ud=!1,Mg(x,n,h);break;case"selectionchange":if(Kf)break;case"keydown":case"keyup":Mg(x,n,h)}var L;if(vc)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else ho?lb(e,n)&&(M="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(sb&&n.locale!=="ko"&&(ho||M!=="onCompositionStart"?M==="onCompositionEnd"&&ho&&(L=ib()):(vn=h,fc="value"in vn?vn.value:vn.textContent,ho=!0)),C=ol(g,M),0<C.length&&(M=new zg(M,e,null,n,h),x.push({event:M,listeners:C}),L?M.data=L:(L=ab(n),L!==null&&(M.data=L)))),(L=Lf?_f(e,n):$f(e,n))&&(g=ol(g,"onBeforeInput"),0<g.length&&(h=new zg("onBeforeInput","beforeinput",null,n,h),x.push({event:h,listeners:g}),h.data=L))}vb(x,r)})}function Mi(e,r,n){return{instance:e,listener:r,currentTarget:n}}function ol(e,r){for(var n=r+"Capture",o=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ii(e,n),s!=null&&o.unshift(Mi(e,s,i)),s=Ii(e,r),s!=null&&o.push(Mi(e,s,i))),e=e.return}return o}function oo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _g(e,r,n,o,i){for(var s=r._reactName,l=[];n!==null&&n!==o;){var d=n,a=d.alternate,g=d.stateNode;if(a!==null&&a===o)break;d.tag===5&&g!==null&&(d=g,i?(a=Ii(n,s),a!=null&&l.unshift(Mi(n,a,d))):i||(a=Ii(n,s),a!=null&&l.push(Mi(n,a,d)))),n=n.return}l.length!==0&&e.push({event:r,listeners:l})}var Jf=/\r\n?/g,ex=/\u0000|\uFFFD/g;function $g(e){return(typeof e=="string"?e:""+e).replace(Jf,`
`).replace(ex,"")}function us(e,r,n){if(r=$g(r),$g(e)!==r&&n)throw Error(xe(425))}function il(){}var pd=null,bd=null;function md(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var hd=typeof setTimeout=="function"?setTimeout:void 0,tx=typeof clearTimeout=="function"?clearTimeout:void 0,Pg=typeof Promise=="function"?Promise:void 0,rx=typeof queueMicrotask=="function"?queueMicrotask:typeof Pg<"u"?function(e){return Pg.resolve(null).then(e).catch(nx)}:hd;function nx(e){setTimeout(function(){throw e})}function xa(e,r){var n=r,o=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(o===0){e.removeChild(i),Di(r);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=i}while(n);Di(r)}function Cn(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function Ng(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(r===0)return e;r--}else n==="/$"&&r++}e=e.previousSibling}return null}var Oo=Math.random().toString(36).slice(2),Lr="__reactFiber$"+Oo,Wi="__reactProps$"+Oo,on="__reactContainer$"+Oo,fd="__reactEvents$"+Oo,ox="__reactListeners$"+Oo,ix="__reactHandles$"+Oo;function Hn(e){var r=e[Lr];if(r)return r;for(var n=e.parentNode;n;){if(r=n[on]||n[Lr]){if(n=r.alternate,r.child!==null||n!==null&&n.child!==null)for(e=Ng(e);e!==null;){if(n=e[Lr])return n;e=Ng(e)}return r}e=n,n=e.parentNode}return null}function Xi(e){return e=e[Lr]||e[on],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(xe(33))}function Ml(e){return e[Wi]||null}var xd=[],vo=-1;function Fn(e){return{current:e}}function ct(e){0>vo||(e.current=xd[vo],xd[vo]=null,vo--)}function lt(e,r){vo++,xd[vo]=e.current,e.current=r}var Dn={},Ot=Fn(Dn),qt=Fn(!1),Kn=Dn;function Ro(e,r){var n=e.type.contextTypes;if(!n)return Dn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===r)return o.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=r[s];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),i}function Zt(e){return e=e.childContextTypes,e!=null}function sl(){ct(qt),ct(Ot)}function Og(e,r,n){if(Ot.current!==Dn)throw Error(xe(168));lt(Ot,r),lt(qt,n)}function kb(e,r,n){var o=e.stateNode;if(r=r.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var i in o)if(!(i in r))throw Error(xe(108,Oh(e)||"Unknown",i));return ht({},n,o)}function ll(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Dn,Kn=Ot.current,lt(Ot,e),lt(qt,qt.current),!0}function Hg(e,r,n){var o=e.stateNode;if(!o)throw Error(xe(169));n?(e=kb(e,r,Kn),o.__reactInternalMemoizedMergedChildContext=e,ct(qt),ct(Ot),lt(Ot,e)):ct(qt),lt(qt,n)}var Xr=null,Wl=!1,ya=!1;function wb(e){Xr===null?Xr=[e]:Xr.push(e)}function sx(e){Wl=!0,wb(e)}function Mn(){if(!ya&&Xr!==null){ya=!0;var e=0,r=nt;try{var n=Xr;for(nt=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}Xr=null,Wl=!1}catch(i){throw Xr!==null&&(Xr=Xr.slice(e+1)),Qp(pc,Mn),i}finally{nt=r,ya=!1}}return null}var jo=[],ko=0,al=null,dl=0,pr=[],br=0,Xn=null,Jr=1,en="";function Pn(e,r){jo[ko++]=dl,jo[ko++]=al,al=e,dl=r}function Sb(e,r,n){pr[br++]=Jr,pr[br++]=en,pr[br++]=Xn,Xn=e;var o=Jr;e=en;var i=32-Tr(o)-1;o&=~(1<<i),n+=1;var s=32-Tr(r)+i;if(30<s){var l=i-i%5;s=(o&(1<<l)-1).toString(32),o>>=l,i-=l,Jr=1<<32-Tr(r)+i|n<<i|o,en=s+e}else Jr=1<<s|n<<i|o,en=e}function kc(e){e.return!==null&&(Pn(e,1),Sb(e,1,0))}function wc(e){for(;e===al;)al=jo[--ko],jo[ko]=null,dl=jo[--ko],jo[ko]=null;for(;e===Xn;)Xn=pr[--br],pr[br]=null,en=pr[--br],pr[br]=null,Jr=pr[--br],pr[br]=null}var ir=null,or=null,gt=!1,zr=null;function Cb(e,r){var n=mr(5,null,null,0);n.elementType="DELETED",n.stateNode=r,n.return=e,r=e.deletions,r===null?(e.deletions=[n],e.flags|=16):r.push(n)}function Gg(e,r){switch(e.tag){case 5:var n=e.type;return r=r.nodeType!==1||n.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,ir=e,or=Cn(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,ir=e,or=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(n=Xn!==null?{id:Jr,overflow:en}:null,e.memoizedState={dehydrated:r,treeContext:n,retryLane:1073741824},n=mr(18,null,null,0),n.stateNode=r,n.return=e,e.child=n,ir=e,or=null,!0):!1;default:return!1}}function yd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function vd(e){if(gt){var r=or;if(r){var n=r;if(!Gg(e,r)){if(yd(e))throw Error(xe(418));r=Cn(n.nextSibling);var o=ir;r&&Gg(e,r)?Cb(o,n):(e.flags=e.flags&-4097|2,gt=!1,ir=e)}}else{if(yd(e))throw Error(xe(418));e.flags=e.flags&-4097|2,gt=!1,ir=e}}}function Ug(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ir=e}function ps(e){if(e!==ir)return!1;if(!gt)return Ug(e),gt=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!md(e.type,e.memoizedProps)),r&&(r=or)){if(yd(e))throw zb(),Error(xe(418));for(;r;)Cb(e,r),r=Cn(r.nextSibling)}if(Ug(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(xe(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(r===0){or=Cn(e.nextSibling);break e}r--}else n!=="$"&&n!=="$!"&&n!=="$?"||r++}e=e.nextSibling}or=null}}else or=ir?Cn(e.stateNode.nextSibling):null;return!0}function zb(){for(var e=or;e;)e=Cn(e.nextSibling)}function Fo(){or=ir=null,gt=!1}function Sc(e){zr===null?zr=[e]:zr.push(e)}var lx=an.ReactCurrentBatchConfig;function ei(e,r,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(xe(309));var o=n.stateNode}if(!o)throw Error(xe(147,e));var i=o,s=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===s?r.ref:(r=function(l){var d=i.refs;l===null?delete d[s]:d[s]=l},r._stringRef=s,r)}if(typeof e!="string")throw Error(xe(284));if(!n._owner)throw Error(xe(290,e))}return e}function bs(e,r){throw e=Object.prototype.toString.call(r),Error(xe(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function Vg(e){var r=e._init;return r(e._payload)}function Tb(e){function r(b,p){if(e){var m=b.deletions;m===null?(b.deletions=[p],b.flags|=16):m.push(p)}}function n(b,p){if(!e)return null;for(;p!==null;)r(b,p),p=p.sibling;return null}function o(b,p){for(b=new Map;p!==null;)p.key!==null?b.set(p.key,p):b.set(p.index,p),p=p.sibling;return b}function i(b,p){return b=En(b,p),b.index=0,b.sibling=null,b}function s(b,p,m){return b.index=m,e?(m=b.alternate,m!==null?(m=m.index,m<p?(b.flags|=2,p):m):(b.flags|=2,p)):(b.flags|=1048576,p)}function l(b){return e&&b.alternate===null&&(b.flags|=2),b}function d(b,p,m,T){return p===null||p.tag!==6?(p=za(m,b.mode,T),p.return=b,p):(p=i(p,m),p.return=b,p)}function a(b,p,m,T){var j=m.type;return j===mo?h(b,p,m.props.children,T,m.key):p!==null&&(p.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===mn&&Vg(j)===p.type)?(T=i(p,m.props),T.ref=ei(b,p,m),T.return=b,T):(T=Ys(m.type,m.key,m.props,null,b.mode,T),T.ref=ei(b,p,m),T.return=b,T)}function g(b,p,m,T){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=Ta(m,b.mode,T),p.return=b,p):(p=i(p,m.children||[]),p.return=b,p)}function h(b,p,m,T,j){return p===null||p.tag!==7?(p=Qn(m,b.mode,T,j),p.return=b,p):(p=i(p,m),p.return=b,p)}function x(b,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=za(""+p,b.mode,m),p.return=b,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ns:return m=Ys(p.type,p.key,p.props,null,b.mode,m),m.ref=ei(b,null,p),m.return=b,m;case bo:return p=Ta(p,b.mode,m),p.return=b,p;case mn:var T=p._init;return x(b,T(p._payload),m)}if(ai(p)||Ko(p))return p=Qn(p,b.mode,m,null),p.return=b,p;bs(b,p)}return null}function f(b,p,m,T){var j=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return j!==null?null:d(b,p,""+m,T);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ns:return m.key===j?a(b,p,m,T):null;case bo:return m.key===j?g(b,p,m,T):null;case mn:return j=m._init,f(b,p,j(m._payload),T)}if(ai(m)||Ko(m))return j!==null?null:h(b,p,m,T,null);bs(b,m)}return null}function E(b,p,m,T,j){if(typeof T=="string"&&T!==""||typeof T=="number")return b=b.get(m)||null,d(p,b,""+T,j);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case ns:return b=b.get(T.key===null?m:T.key)||null,a(p,b,T,j);case bo:return b=b.get(T.key===null?m:T.key)||null,g(p,b,T,j);case mn:var C=T._init;return E(b,p,m,C(T._payload),j)}if(ai(T)||Ko(T))return b=b.get(m)||null,h(p,b,T,j,null);bs(p,T)}return null}function z(b,p,m,T){for(var j=null,C=null,L=p,M=p=0,w=null;L!==null&&M<m.length;M++){L.index>M?(w=L,L=null):w=L.sibling;var D=f(b,L,m[M],T);if(D===null){L===null&&(L=w);break}e&&L&&D.alternate===null&&r(b,L),p=s(D,p,M),C===null?j=D:C.sibling=D,C=D,L=w}if(M===m.length)return n(b,L),gt&&Pn(b,M),j;if(L===null){for(;M<m.length;M++)L=x(b,m[M],T),L!==null&&(p=s(L,p,M),C===null?j=L:C.sibling=L,C=L);return gt&&Pn(b,M),j}for(L=o(b,L);M<m.length;M++)w=E(L,b,M,m[M],T),w!==null&&(e&&w.alternate!==null&&L.delete(w.key===null?M:w.key),p=s(w,p,M),C===null?j=w:C.sibling=w,C=w);return e&&L.forEach(function(ie){return r(b,ie)}),gt&&Pn(b,M),j}function k(b,p,m,T){var j=Ko(m);if(typeof j!="function")throw Error(xe(150));if(m=j.call(m),m==null)throw Error(xe(151));for(var C=j=null,L=p,M=p=0,w=null,D=m.next();L!==null&&!D.done;M++,D=m.next()){L.index>M?(w=L,L=null):w=L.sibling;var ie=f(b,L,D.value,T);if(ie===null){L===null&&(L=w);break}e&&L&&ie.alternate===null&&r(b,L),p=s(ie,p,M),C===null?j=ie:C.sibling=ie,C=ie,L=w}if(D.done)return n(b,L),gt&&Pn(b,M),j;if(L===null){for(;!D.done;M++,D=m.next())D=x(b,D.value,T),D!==null&&(p=s(D,p,M),C===null?j=D:C.sibling=D,C=D);return gt&&Pn(b,M),j}for(L=o(b,L);!D.done;M++,D=m.next())D=E(L,b,M,D.value,T),D!==null&&(e&&D.alternate!==null&&L.delete(D.key===null?M:D.key),p=s(D,p,M),C===null?j=D:C.sibling=D,C=D);return e&&L.forEach(function(B){return r(b,B)}),gt&&Pn(b,M),j}function R(b,p,m,T){if(typeof m=="object"&&m!==null&&m.type===mo&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ns:e:{for(var j=m.key,C=p;C!==null;){if(C.key===j){if(j=m.type,j===mo){if(C.tag===7){n(b,C.sibling),p=i(C,m.props.children),p.return=b,b=p;break e}}else if(C.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===mn&&Vg(j)===C.type){n(b,C.sibling),p=i(C,m.props),p.ref=ei(b,C,m),p.return=b,b=p;break e}n(b,C);break}else r(b,C);C=C.sibling}m.type===mo?(p=Qn(m.props.children,b.mode,T,m.key),p.return=b,b=p):(T=Ys(m.type,m.key,m.props,null,b.mode,T),T.ref=ei(b,p,m),T.return=b,b=T)}return l(b);case bo:e:{for(C=m.key;p!==null;){if(p.key===C)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(b,p.sibling),p=i(p,m.children||[]),p.return=b,b=p;break e}else{n(b,p);break}else r(b,p);p=p.sibling}p=Ta(m,b.mode,T),p.return=b,b=p}return l(b);case mn:return C=m._init,R(b,p,C(m._payload),T)}if(ai(m))return z(b,p,m,T);if(Ko(m))return k(b,p,m,T);bs(b,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(b,p.sibling),p=i(p,m),p.return=b,b=p):(n(b,p),p=za(m,b.mode,T),p.return=b,b=p),l(b)):n(b,p)}return R}var Mo=Tb(!0),Ib=Tb(!1),cl=Fn(null),gl=null,wo=null,Cc=null;function zc(){Cc=wo=gl=null}function Tc(e){var r=cl.current;ct(cl),e._currentValue=r}function jd(e,r,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,o!==null&&(o.childLanes|=r)):o!==null&&(o.childLanes&r)!==r&&(o.childLanes|=r),e===n)break;e=e.return}}function Bo(e,r){gl=e,Cc=wo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&r&&(Xt=!0),e.firstContext=null)}function fr(e){var r=e._currentValue;if(Cc!==e)if(e={context:e,memoizedValue:r,next:null},wo===null){if(gl===null)throw Error(xe(308));wo=e,gl.dependencies={lanes:0,firstContext:e}}else wo=wo.next=e;return r}var Gn=null;function Ic(e){Gn===null?Gn=[e]:Gn.push(e)}function Eb(e,r,n,o){var i=r.interleaved;return i===null?(n.next=n,Ic(r)):(n.next=i.next,i.next=n),r.interleaved=n,sn(e,o)}function sn(e,r){e.lanes|=r;var n=e.alternate;for(n!==null&&(n.lanes|=r),n=e,e=e.return;e!==null;)e.childLanes|=r,n=e.alternate,n!==null&&(n.childLanes|=r),n=e,e=e.return;return n.tag===3?n.stateNode:null}var hn=!1;function Ec(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bb(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function tn(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function zn(e,r,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,et&2){var i=o.pending;return i===null?r.next=r:(r.next=i.next,i.next=r),o.pending=r,sn(e,n)}return i=o.interleaved,i===null?(r.next=r,Ic(o)):(r.next=i.next,i.next=r),o.interleaved=r,sn(e,n)}function Ns(e,r,n){if(r=r.updateQueue,r!==null&&(r=r.shared,(n&4194240)!==0)){var o=r.lanes;o&=e.pendingLanes,n|=o,r.lanes=n,bc(e,n)}}function Yg(e,r){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=l:s=s.next=l,n=n.next}while(n!==null);s===null?i=s=r:s=s.next=r}else i=s=r;n={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=r:e.next=r,n.lastBaseUpdate=r}function ul(e,r,n,o){var i=e.updateQueue;hn=!1;var s=i.firstBaseUpdate,l=i.lastBaseUpdate,d=i.shared.pending;if(d!==null){i.shared.pending=null;var a=d,g=a.next;a.next=null,l===null?s=g:l.next=g,l=a;var h=e.alternate;h!==null&&(h=h.updateQueue,d=h.lastBaseUpdate,d!==l&&(d===null?h.firstBaseUpdate=g:d.next=g,h.lastBaseUpdate=a))}if(s!==null){var x=i.baseState;l=0,h=g=a=null,d=s;do{var f=d.lane,E=d.eventTime;if((o&f)===f){h!==null&&(h=h.next={eventTime:E,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});e:{var z=e,k=d;switch(f=r,E=n,k.tag){case 1:if(z=k.payload,typeof z=="function"){x=z.call(E,x,f);break e}x=z;break e;case 3:z.flags=z.flags&-65537|128;case 0:if(z=k.payload,f=typeof z=="function"?z.call(E,x,f):z,f==null)break e;x=ht({},x,f);break e;case 2:hn=!0}}d.callback!==null&&d.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[d]:f.push(d))}else E={eventTime:E,lane:f,tag:d.tag,payload:d.payload,callback:d.callback,next:null},h===null?(g=h=E,a=x):h=h.next=E,l|=f;if(d=d.next,d===null){if(d=i.shared.pending,d===null)break;f=d,d=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(h===null&&(a=x),i.baseState=a,i.firstBaseUpdate=g,i.lastBaseUpdate=h,r=i.shared.interleaved,r!==null){i=r;do l|=i.lane,i=i.next;while(i!==r)}else s===null&&(i.shared.lanes=0);Zn|=l,e.lanes=l,e.memoizedState=x}}function Qg(e,r,n){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var o=e[r],i=o.callback;if(i!==null){if(o.callback=null,o=n,typeof i!="function")throw Error(xe(191,i));i.call(o)}}}var qi={},$r=Fn(qi),Li=Fn(qi),_i=Fn(qi);function Un(e){if(e===qi)throw Error(xe(174));return e}function Bc(e,r){switch(lt(_i,r),lt(Li,e),lt($r,qi),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:td(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=td(r,e)}ct($r),lt($r,r)}function Wo(){ct($r),ct(Li),ct(_i)}function Db(e){Un(_i.current);var r=Un($r.current),n=td(r,e.type);r!==n&&(lt(Li,e),lt($r,n))}function Dc(e){Li.current===e&&(ct($r),ct(Li))}var bt=Fn(0);function pl(e){for(var r=e;r!==null;){if(r.tag===13){var n=r.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var va=[];function Ac(){for(var e=0;e<va.length;e++)va[e]._workInProgressVersionPrimary=null;va.length=0}var Os=an.ReactCurrentDispatcher,ja=an.ReactCurrentBatchConfig,qn=0,mt=null,Ct=null,Dt=null,bl=!1,yi=!1,$i=0,ax=0;function Lt(){throw Error(xe(321))}function Rc(e,r){if(r===null)return!1;for(var n=0;n<r.length&&n<e.length;n++)if(!Er(e[n],r[n]))return!1;return!0}function Fc(e,r,n,o,i,s){if(qn=s,mt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Os.current=e===null||e.memoizedState===null?ux:px,e=n(o,i),yi){s=0;do{if(yi=!1,$i=0,25<=s)throw Error(xe(301));s+=1,Dt=Ct=null,r.updateQueue=null,Os.current=bx,e=n(o,i)}while(yi)}if(Os.current=ml,r=Ct!==null&&Ct.next!==null,qn=0,Dt=Ct=mt=null,bl=!1,r)throw Error(xe(300));return e}function Mc(){var e=$i!==0;return $i=0,e}function Mr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?mt.memoizedState=Dt=e:Dt=Dt.next=e,Dt}function xr(){if(Ct===null){var e=mt.alternate;e=e!==null?e.memoizedState:null}else e=Ct.next;var r=Dt===null?mt.memoizedState:Dt.next;if(r!==null)Dt=r,Ct=e;else{if(e===null)throw Error(xe(310));Ct=e,e={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Dt===null?mt.memoizedState=Dt=e:Dt=Dt.next=e}return Dt}function Pi(e,r){return typeof r=="function"?r(e):r}function ka(e){var r=xr(),n=r.queue;if(n===null)throw Error(xe(311));n.lastRenderedReducer=e;var o=Ct,i=o.baseQueue,s=n.pending;if(s!==null){if(i!==null){var l=i.next;i.next=s.next,s.next=l}o.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,o=o.baseState;var d=l=null,a=null,g=s;do{var h=g.lane;if((qn&h)===h)a!==null&&(a=a.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),o=g.hasEagerState?g.eagerState:e(o,g.action);else{var x={lane:h,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};a===null?(d=a=x,l=o):a=a.next=x,mt.lanes|=h,Zn|=h}g=g.next}while(g!==null&&g!==s);a===null?l=o:a.next=d,Er(o,r.memoizedState)||(Xt=!0),r.memoizedState=o,r.baseState=l,r.baseQueue=a,n.lastRenderedState=o}if(e=n.interleaved,e!==null){i=e;do s=i.lane,mt.lanes|=s,Zn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[r.memoizedState,n.dispatch]}function wa(e){var r=xr(),n=r.queue;if(n===null)throw Error(xe(311));n.lastRenderedReducer=e;var o=n.dispatch,i=n.pending,s=r.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do s=e(s,l.action),l=l.next;while(l!==i);Er(s,r.memoizedState)||(Xt=!0),r.memoizedState=s,r.baseQueue===null&&(r.baseState=s),n.lastRenderedState=s}return[s,o]}function Ab(){}function Rb(e,r){var n=mt,o=xr(),i=r(),s=!Er(o.memoizedState,i);if(s&&(o.memoizedState=i,Xt=!0),o=o.queue,Wc(Wb.bind(null,n,o,e),[e]),o.getSnapshot!==r||s||Dt!==null&&Dt.memoizedState.tag&1){if(n.flags|=2048,Ni(9,Mb.bind(null,n,o,i,r),void 0,null),At===null)throw Error(xe(349));qn&30||Fb(n,r,i)}return i}function Fb(e,r,n){e.flags|=16384,e={getSnapshot:r,value:n},r=mt.updateQueue,r===null?(r={lastEffect:null,stores:null},mt.updateQueue=r,r.stores=[e]):(n=r.stores,n===null?r.stores=[e]:n.push(e))}function Mb(e,r,n,o){r.value=n,r.getSnapshot=o,Lb(r)&&_b(e)}function Wb(e,r,n){return n(function(){Lb(r)&&_b(e)})}function Lb(e){var r=e.getSnapshot;e=e.value;try{var n=r();return!Er(e,n)}catch{return!0}}function _b(e){var r=sn(e,1);r!==null&&Ir(r,e,1,-1)}function Kg(e){var r=Mr();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:e},r.queue=e,e=e.dispatch=gx.bind(null,mt,e),[r.memoizedState,e]}function Ni(e,r,n,o){return e={tag:e,create:r,destroy:n,deps:o,next:null},r=mt.updateQueue,r===null?(r={lastEffect:null,stores:null},mt.updateQueue=r,r.lastEffect=e.next=e):(n=r.lastEffect,n===null?r.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,r.lastEffect=e)),e}function $b(){return xr().memoizedState}function Hs(e,r,n,o){var i=Mr();mt.flags|=e,i.memoizedState=Ni(1|r,n,void 0,o===void 0?null:o)}function Ll(e,r,n,o){var i=xr();o=o===void 0?null:o;var s=void 0;if(Ct!==null){var l=Ct.memoizedState;if(s=l.destroy,o!==null&&Rc(o,l.deps)){i.memoizedState=Ni(r,n,s,o);return}}mt.flags|=e,i.memoizedState=Ni(1|r,n,s,o)}function Xg(e,r){return Hs(8390656,8,e,r)}function Wc(e,r){return Ll(2048,8,e,r)}function Pb(e,r){return Ll(4,2,e,r)}function Nb(e,r){return Ll(4,4,e,r)}function Ob(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function Hb(e,r,n){return n=n!=null?n.concat([e]):null,Ll(4,4,Ob.bind(null,r,e),n)}function Lc(){}function Gb(e,r){var n=xr();r=r===void 0?null:r;var o=n.memoizedState;return o!==null&&r!==null&&Rc(r,o[1])?o[0]:(n.memoizedState=[e,r],e)}function Ub(e,r){var n=xr();r=r===void 0?null:r;var o=n.memoizedState;return o!==null&&r!==null&&Rc(r,o[1])?o[0]:(e=e(),n.memoizedState=[e,r],e)}function Vb(e,r,n){return qn&21?(Er(n,r)||(n=qp(),mt.lanes|=n,Zn|=n,e.baseState=!0),r):(e.baseState&&(e.baseState=!1,Xt=!0),e.memoizedState=n)}function dx(e,r){var n=nt;nt=n!==0&&4>n?n:4,e(!0);var o=ja.transition;ja.transition={};try{e(!1),r()}finally{nt=n,ja.transition=o}}function Yb(){return xr().memoizedState}function cx(e,r,n){var o=In(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},Qb(e))Kb(r,n);else if(n=Eb(e,r,n,o),n!==null){var i=Ut();Ir(n,e,o,i),Xb(n,r,o)}}function gx(e,r,n){var o=In(e),i={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qb(e))Kb(r,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=r.lastRenderedReducer,s!==null))try{var l=r.lastRenderedState,d=s(l,n);if(i.hasEagerState=!0,i.eagerState=d,Er(d,l)){var a=r.interleaved;a===null?(i.next=i,Ic(r)):(i.next=a.next,a.next=i),r.interleaved=i;return}}catch{}finally{}n=Eb(e,r,i,o),n!==null&&(i=Ut(),Ir(n,e,o,i),Xb(n,r,o))}}function Qb(e){var r=e.alternate;return e===mt||r!==null&&r===mt}function Kb(e,r){yi=bl=!0;var n=e.pending;n===null?r.next=r:(r.next=n.next,n.next=r),e.pending=r}function Xb(e,r,n){if(n&4194240){var o=r.lanes;o&=e.pendingLanes,n|=o,r.lanes=n,bc(e,n)}}var ml={readContext:fr,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},ux={readContext:fr,useCallback:function(e,r){return Mr().memoizedState=[e,r===void 0?null:r],e},useContext:fr,useEffect:Xg,useImperativeHandle:function(e,r,n){return n=n!=null?n.concat([e]):null,Hs(4194308,4,Ob.bind(null,r,e),n)},useLayoutEffect:function(e,r){return Hs(4194308,4,e,r)},useInsertionEffect:function(e,r){return Hs(4,2,e,r)},useMemo:function(e,r){var n=Mr();return r=r===void 0?null:r,e=e(),n.memoizedState=[e,r],e},useReducer:function(e,r,n){var o=Mr();return r=n!==void 0?n(r):r,o.memoizedState=o.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},o.queue=e,e=e.dispatch=cx.bind(null,mt,e),[o.memoizedState,e]},useRef:function(e){var r=Mr();return e={current:e},r.memoizedState=e},useState:Kg,useDebugValue:Lc,useDeferredValue:function(e){return Mr().memoizedState=e},useTransition:function(){var e=Kg(!1),r=e[0];return e=dx.bind(null,e[1]),Mr().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,n){var o=mt,i=Mr();if(gt){if(n===void 0)throw Error(xe(407));n=n()}else{if(n=r(),At===null)throw Error(xe(349));qn&30||Fb(o,r,n)}i.memoizedState=n;var s={value:n,getSnapshot:r};return i.queue=s,Xg(Wb.bind(null,o,s,e),[e]),o.flags|=2048,Ni(9,Mb.bind(null,o,s,n,r),void 0,null),n},useId:function(){var e=Mr(),r=At.identifierPrefix;if(gt){var n=en,o=Jr;n=(o&~(1<<32-Tr(o)-1)).toString(32)+n,r=":"+r+"R"+n,n=$i++,0<n&&(r+="H"+n.toString(32)),r+=":"}else n=ax++,r=":"+r+"r"+n.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},px={readContext:fr,useCallback:Gb,useContext:fr,useEffect:Wc,useImperativeHandle:Hb,useInsertionEffect:Pb,useLayoutEffect:Nb,useMemo:Ub,useReducer:ka,useRef:$b,useState:function(){return ka(Pi)},useDebugValue:Lc,useDeferredValue:function(e){var r=xr();return Vb(r,Ct.memoizedState,e)},useTransition:function(){var e=ka(Pi)[0],r=xr().memoizedState;return[e,r]},useMutableSource:Ab,useSyncExternalStore:Rb,useId:Yb,unstable_isNewReconciler:!1},bx={readContext:fr,useCallback:Gb,useContext:fr,useEffect:Wc,useImperativeHandle:Hb,useInsertionEffect:Pb,useLayoutEffect:Nb,useMemo:Ub,useReducer:wa,useRef:$b,useState:function(){return wa(Pi)},useDebugValue:Lc,useDeferredValue:function(e){var r=xr();return Ct===null?r.memoizedState=e:Vb(r,Ct.memoizedState,e)},useTransition:function(){var e=wa(Pi)[0],r=xr().memoizedState;return[e,r]},useMutableSource:Ab,useSyncExternalStore:Rb,useId:Yb,unstable_isNewReconciler:!1};function wr(e,r){if(e&&e.defaultProps){r=ht({},r),e=e.defaultProps;for(var n in e)r[n]===void 0&&(r[n]=e[n]);return r}return r}function kd(e,r,n,o){r=e.memoizedState,n=n(o,r),n=n==null?r:ht({},r,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _l={isMounted:function(e){return(e=e._reactInternals)?to(e)===e:!1},enqueueSetState:function(e,r,n){e=e._reactInternals;var o=Ut(),i=In(e),s=tn(o,i);s.payload=r,n!=null&&(s.callback=n),r=zn(e,s,i),r!==null&&(Ir(r,e,i,o),Ns(r,e,i))},enqueueReplaceState:function(e,r,n){e=e._reactInternals;var o=Ut(),i=In(e),s=tn(o,i);s.tag=1,s.payload=r,n!=null&&(s.callback=n),r=zn(e,s,i),r!==null&&(Ir(r,e,i,o),Ns(r,e,i))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var n=Ut(),o=In(e),i=tn(n,o);i.tag=2,r!=null&&(i.callback=r),r=zn(e,i,o),r!==null&&(Ir(r,e,o,n),Ns(r,e,o))}};function qg(e,r,n,o,i,s,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,s,l):r.prototype&&r.prototype.isPureReactComponent?!Ri(n,o)||!Ri(i,s):!0}function qb(e,r,n){var o=!1,i=Dn,s=r.contextType;return typeof s=="object"&&s!==null?s=fr(s):(i=Zt(r)?Kn:Ot.current,o=r.contextTypes,s=(o=o!=null)?Ro(e,i):Dn),r=new r(n,s),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=_l,e.stateNode=r,r._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),r}function Zg(e,r,n,o){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(n,o),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(n,o),r.state!==e&&_l.enqueueReplaceState(r,r.state,null)}function wd(e,r,n,o){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ec(e);var s=r.contextType;typeof s=="object"&&s!==null?i.context=fr(s):(s=Zt(r)?Kn:Ot.current,i.context=Ro(e,s)),i.state=e.memoizedState,s=r.getDerivedStateFromProps,typeof s=="function"&&(kd(e,r,s,n),i.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&_l.enqueueReplaceState(i,i.state,null),ul(e,n,i,o),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Lo(e,r){try{var n="",o=r;do n+=Nh(o),o=o.return;while(o);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:r,stack:i,digest:null}}function Sa(e,r,n){return{value:e,source:null,stack:n??null,digest:r??null}}function Sd(e,r){try{console.error(r.value)}catch(n){setTimeout(function(){throw n})}}var mx=typeof WeakMap=="function"?WeakMap:Map;function Zb(e,r,n){n=tn(-1,n),n.tag=3,n.payload={element:null};var o=r.value;return n.callback=function(){fl||(fl=!0,Fd=o),Sd(e,r)},n}function Jb(e,r,n){n=tn(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var i=r.value;n.payload=function(){return o(i)},n.callback=function(){Sd(e,r)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Sd(e,r),typeof o!="function"&&(Tn===null?Tn=new Set([this]):Tn.add(this));var l=r.stack;this.componentDidCatch(r.value,{componentStack:l!==null?l:""})}),n}function Jg(e,r,n){var o=e.pingCache;if(o===null){o=e.pingCache=new mx;var i=new Set;o.set(r,i)}else i=o.get(r),i===void 0&&(i=new Set,o.set(r,i));i.has(n)||(i.add(n),e=Ex.bind(null,e,r,n),r.then(e,e))}function eu(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function tu(e,r,n,o,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===r?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(r=tn(-1,1),r.tag=2,zn(n,r,1))),n.lanes|=1),e)}var hx=an.ReactCurrentOwner,Xt=!1;function Gt(e,r,n,o){r.child=e===null?Ib(r,null,n,o):Mo(r,e.child,n,o)}function ru(e,r,n,o,i){n=n.render;var s=r.ref;return Bo(r,i),o=Fc(e,r,n,o,s,i),n=Mc(),e!==null&&!Xt?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,ln(e,r,i)):(gt&&n&&kc(r),r.flags|=1,Gt(e,r,o,i),r.child)}function nu(e,r,n,o,i){if(e===null){var s=n.type;return typeof s=="function"&&!Uc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(r.tag=15,r.type=s,em(e,r,s,o,i)):(e=Ys(n.type,null,o,r,r.mode,i),e.ref=r.ref,e.return=r,r.child=e)}if(s=e.child,!(e.lanes&i)){var l=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ri,n(l,o)&&e.ref===r.ref)return ln(e,r,i)}return r.flags|=1,e=En(s,o),e.ref=r.ref,e.return=r,r.child=e}function em(e,r,n,o,i){if(e!==null){var s=e.memoizedProps;if(Ri(s,o)&&e.ref===r.ref)if(Xt=!1,r.pendingProps=o=s,(e.lanes&i)!==0)e.flags&131072&&(Xt=!0);else return r.lanes=e.lanes,ln(e,r,i)}return Cd(e,r,n,o,i)}function tm(e,r,n){var o=r.pendingProps,i=o.children,s=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(Co,nr),nr|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,lt(Co,nr),nr|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=s!==null?s.baseLanes:n,lt(Co,nr),nr|=o}else s!==null?(o=s.baseLanes|n,r.memoizedState=null):o=n,lt(Co,nr),nr|=o;return Gt(e,r,i,n),r.child}function rm(e,r){var n=r.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(r.flags|=512,r.flags|=2097152)}function Cd(e,r,n,o,i){var s=Zt(n)?Kn:Ot.current;return s=Ro(r,s),Bo(r,i),n=Fc(e,r,n,o,s,i),o=Mc(),e!==null&&!Xt?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,ln(e,r,i)):(gt&&o&&kc(r),r.flags|=1,Gt(e,r,n,i),r.child)}function ou(e,r,n,o,i){if(Zt(n)){var s=!0;ll(r)}else s=!1;if(Bo(r,i),r.stateNode===null)Gs(e,r),qb(r,n,o),wd(r,n,o,i),o=!0;else if(e===null){var l=r.stateNode,d=r.memoizedProps;l.props=d;var a=l.context,g=n.contextType;typeof g=="object"&&g!==null?g=fr(g):(g=Zt(n)?Kn:Ot.current,g=Ro(r,g));var h=n.getDerivedStateFromProps,x=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";x||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(d!==o||a!==g)&&Zg(r,l,o,g),hn=!1;var f=r.memoizedState;l.state=f,ul(r,o,l,i),a=r.memoizedState,d!==o||f!==a||qt.current||hn?(typeof h=="function"&&(kd(r,n,h,o),a=r.memoizedState),(d=hn||qg(r,n,d,o,f,a,g))?(x||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(r.flags|=4194308)):(typeof l.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=o,r.memoizedState=a),l.props=o,l.state=a,l.context=g,o=d):(typeof l.componentDidMount=="function"&&(r.flags|=4194308),o=!1)}else{l=r.stateNode,Bb(e,r),d=r.memoizedProps,g=r.type===r.elementType?d:wr(r.type,d),l.props=g,x=r.pendingProps,f=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=fr(a):(a=Zt(n)?Kn:Ot.current,a=Ro(r,a));var E=n.getDerivedStateFromProps;(h=typeof E=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(d!==x||f!==a)&&Zg(r,l,o,a),hn=!1,f=r.memoizedState,l.state=f,ul(r,o,l,i);var z=r.memoizedState;d!==x||f!==z||qt.current||hn?(typeof E=="function"&&(kd(r,n,E,o),z=r.memoizedState),(g=hn||qg(r,n,g,o,f,z,a)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(o,z,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(o,z,a)),typeof l.componentDidUpdate=="function"&&(r.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof l.componentDidUpdate!="function"||d===e.memoizedProps&&f===e.memoizedState||(r.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&f===e.memoizedState||(r.flags|=1024),r.memoizedProps=o,r.memoizedState=z),l.props=o,l.state=z,l.context=a,o=g):(typeof l.componentDidUpdate!="function"||d===e.memoizedProps&&f===e.memoizedState||(r.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&f===e.memoizedState||(r.flags|=1024),o=!1)}return zd(e,r,n,o,s,i)}function zd(e,r,n,o,i,s){rm(e,r);var l=(r.flags&128)!==0;if(!o&&!l)return i&&Hg(r,n,!1),ln(e,r,s);o=r.stateNode,hx.current=r;var d=l&&typeof n.getDerivedStateFromError!="function"?null:o.render();return r.flags|=1,e!==null&&l?(r.child=Mo(r,e.child,null,s),r.child=Mo(r,null,d,s)):Gt(e,r,d,s),r.memoizedState=o.state,i&&Hg(r,n,!0),r.child}function nm(e){var r=e.stateNode;r.pendingContext?Og(e,r.pendingContext,r.pendingContext!==r.context):r.context&&Og(e,r.context,!1),Bc(e,r.containerInfo)}function iu(e,r,n,o,i){return Fo(),Sc(i),r.flags|=256,Gt(e,r,n,o),r.child}var Td={dehydrated:null,treeContext:null,retryLane:0};function Id(e){return{baseLanes:e,cachePool:null,transitions:null}}function om(e,r,n){var o=r.pendingProps,i=bt.current,s=!1,l=(r.flags&128)!==0,d;if((d=l)||(d=e!==null&&e.memoizedState===null?!1:(i&2)!==0),d?(s=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),lt(bt,i&1),e===null)return vd(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(r.mode&1?e.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(l=o.children,e=o.fallback,s?(o=r.mode,s=r.child,l={mode:"hidden",children:l},!(o&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=Nl(l,o,0,null),e=Qn(e,o,n,null),s.return=r,e.return=r,s.sibling=e,r.child=s,r.child.memoizedState=Id(n),r.memoizedState=Td,e):_c(r,l));if(i=e.memoizedState,i!==null&&(d=i.dehydrated,d!==null))return fx(e,r,l,o,d,i,n);if(s){s=o.fallback,l=r.mode,i=e.child,d=i.sibling;var a={mode:"hidden",children:o.children};return!(l&1)&&r.child!==i?(o=r.child,o.childLanes=0,o.pendingProps=a,r.deletions=null):(o=En(i,a),o.subtreeFlags=i.subtreeFlags&14680064),d!==null?s=En(d,s):(s=Qn(s,l,n,null),s.flags|=2),s.return=r,o.return=r,o.sibling=s,r.child=o,o=s,s=r.child,l=e.child.memoizedState,l=l===null?Id(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,r.memoizedState=Td,o}return s=e.child,e=s.sibling,o=En(s,{mode:"visible",children:o.children}),!(r.mode&1)&&(o.lanes=n),o.return=r,o.sibling=null,e!==null&&(n=r.deletions,n===null?(r.deletions=[e],r.flags|=16):n.push(e)),r.child=o,r.memoizedState=null,o}function _c(e,r){return r=Nl({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function ms(e,r,n,o){return o!==null&&Sc(o),Mo(r,e.child,null,n),e=_c(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function fx(e,r,n,o,i,s,l){if(n)return r.flags&256?(r.flags&=-257,o=Sa(Error(xe(422))),ms(e,r,l,o)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(s=o.fallback,i=r.mode,o=Nl({mode:"visible",children:o.children},i,0,null),s=Qn(s,i,l,null),s.flags|=2,o.return=r,s.return=r,o.sibling=s,r.child=o,r.mode&1&&Mo(r,e.child,null,l),r.child.memoizedState=Id(l),r.memoizedState=Td,s);if(!(r.mode&1))return ms(e,r,l,null);if(i.data==="$!"){if(o=i.nextSibling&&i.nextSibling.dataset,o)var d=o.dgst;return o=d,s=Error(xe(419)),o=Sa(s,o,void 0),ms(e,r,l,o)}if(d=(l&e.childLanes)!==0,Xt||d){if(o=At,o!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(o.suspendedLanes|l)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,sn(e,i),Ir(o,e,i,-1))}return Gc(),o=Sa(Error(xe(421))),ms(e,r,l,o)}return i.data==="$?"?(r.flags|=128,r.child=e.child,r=Bx.bind(null,e),i._reactRetry=r,null):(e=s.treeContext,or=Cn(i.nextSibling),ir=r,gt=!0,zr=null,e!==null&&(pr[br++]=Jr,pr[br++]=en,pr[br++]=Xn,Jr=e.id,en=e.overflow,Xn=r),r=_c(r,o.children),r.flags|=4096,r)}function su(e,r,n){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r),jd(e.return,r,n)}function Ca(e,r,n,o,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:i}:(s.isBackwards=r,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=n,s.tailMode=i)}function im(e,r,n){var o=r.pendingProps,i=o.revealOrder,s=o.tail;if(Gt(e,r,o.children,n),o=bt.current,o&2)o=o&1|2,r.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&su(e,n,r);else if(e.tag===19)su(e,n,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(lt(bt,o),!(r.mode&1))r.memoizedState=null;else switch(i){case"forwards":for(n=r.child,i=null;n!==null;)e=n.alternate,e!==null&&pl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=r.child,r.child=null):(i=n.sibling,n.sibling=null),Ca(r,!1,i,n,s);break;case"backwards":for(n=null,i=r.child,r.child=null;i!==null;){if(e=i.alternate,e!==null&&pl(e)===null){r.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ca(r,!0,n,null,s);break;case"together":Ca(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Gs(e,r){!(r.mode&1)&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function ln(e,r,n){if(e!==null&&(r.dependencies=e.dependencies),Zn|=r.lanes,!(n&r.childLanes))return null;if(e!==null&&r.child!==e.child)throw Error(xe(153));if(r.child!==null){for(e=r.child,n=En(e,e.pendingProps),r.child=n,n.return=r;e.sibling!==null;)e=e.sibling,n=n.sibling=En(e,e.pendingProps),n.return=r;n.sibling=null}return r.child}function xx(e,r,n){switch(r.tag){case 3:nm(r),Fo();break;case 5:Db(r);break;case 1:Zt(r.type)&&ll(r);break;case 4:Bc(r,r.stateNode.containerInfo);break;case 10:var o=r.type._context,i=r.memoizedProps.value;lt(cl,o._currentValue),o._currentValue=i;break;case 13:if(o=r.memoizedState,o!==null)return o.dehydrated!==null?(lt(bt,bt.current&1),r.flags|=128,null):n&r.child.childLanes?om(e,r,n):(lt(bt,bt.current&1),e=ln(e,r,n),e!==null?e.sibling:null);lt(bt,bt.current&1);break;case 19:if(o=(n&r.childLanes)!==0,e.flags&128){if(o)return im(e,r,n);r.flags|=128}if(i=r.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),lt(bt,bt.current),o)break;return null;case 22:case 23:return r.lanes=0,tm(e,r,n)}return ln(e,r,n)}var sm,Ed,lm,am;sm=function(e,r){for(var n=r.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ed=function(){};lm=function(e,r,n,o){var i=e.memoizedProps;if(i!==o){e=r.stateNode,Un($r.current);var s=null;switch(n){case"input":i=qa(e,i),o=qa(e,o),s=[];break;case"select":i=ht({},i,{value:void 0}),o=ht({},o,{value:void 0}),s=[];break;case"textarea":i=ed(e,i),o=ed(e,o),s=[];break;default:typeof i.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=il)}rd(n,o);var l;n=null;for(g in i)if(!o.hasOwnProperty(g)&&i.hasOwnProperty(g)&&i[g]!=null)if(g==="style"){var d=i[g];for(l in d)d.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(zi.hasOwnProperty(g)?s||(s=[]):(s=s||[]).push(g,null));for(g in o){var a=o[g];if(d=i!=null?i[g]:void 0,o.hasOwnProperty(g)&&a!==d&&(a!=null||d!=null))if(g==="style")if(d){for(l in d)!d.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&d[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(s||(s=[]),s.push(g,n)),n=a;else g==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,d=d?d.__html:void 0,a!=null&&d!==a&&(s=s||[]).push(g,a)):g==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(g,""+a):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(zi.hasOwnProperty(g)?(a!=null&&g==="onScroll"&&dt("scroll",e),s||d===a||(s=[])):(s=s||[]).push(g,a))}n&&(s=s||[]).push("style",n);var g=s;(r.updateQueue=g)&&(r.flags|=4)}};am=function(e,r,n,o){n!==o&&(r.flags|=4)};function ti(e,r){if(!gt)switch(e.tailMode){case"hidden":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function _t(e){var r=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(r)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags&14680064,o|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=o,e.childLanes=n,r}function yx(e,r,n){var o=r.pendingProps;switch(wc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _t(r),null;case 1:return Zt(r.type)&&sl(),_t(r),null;case 3:return o=r.stateNode,Wo(),ct(qt),ct(Ot),Ac(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(ps(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,zr!==null&&(Ld(zr),zr=null))),Ed(e,r),_t(r),null;case 5:Dc(r);var i=Un(_i.current);if(n=r.type,e!==null&&r.stateNode!=null)lm(e,r,n,o,i),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!o){if(r.stateNode===null)throw Error(xe(166));return _t(r),null}if(e=Un($r.current),ps(r)){o=r.stateNode,n=r.type;var s=r.memoizedProps;switch(o[Lr]=r,o[Wi]=s,e=(r.mode&1)!==0,n){case"dialog":dt("cancel",o),dt("close",o);break;case"iframe":case"object":case"embed":dt("load",o);break;case"video":case"audio":for(i=0;i<ci.length;i++)dt(ci[i],o);break;case"source":dt("error",o);break;case"img":case"image":case"link":dt("error",o),dt("load",o);break;case"details":dt("toggle",o);break;case"input":mg(o,s),dt("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!s.multiple},dt("invalid",o);break;case"textarea":fg(o,s),dt("invalid",o)}rd(n,s),i=null;for(var l in s)if(s.hasOwnProperty(l)){var d=s[l];l==="children"?typeof d=="string"?o.textContent!==d&&(s.suppressHydrationWarning!==!0&&us(o.textContent,d,e),i=["children",d]):typeof d=="number"&&o.textContent!==""+d&&(s.suppressHydrationWarning!==!0&&us(o.textContent,d,e),i=["children",""+d]):zi.hasOwnProperty(l)&&d!=null&&l==="onScroll"&&dt("scroll",o)}switch(n){case"input":os(o),hg(o,s,!0);break;case"textarea":os(o),xg(o);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(o.onclick=il)}o=i,r.updateQueue=o,o!==null&&(r.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=l.createElement(n,{is:o.is}):(e=l.createElement(n),n==="select"&&(l=e,o.multiple?l.multiple=!0:o.size&&(l.size=o.size))):e=l.createElementNS(e,n),e[Lr]=r,e[Wi]=o,sm(e,r,!1,!1),r.stateNode=e;e:{switch(l=nd(n,o),n){case"dialog":dt("cancel",e),dt("close",e),i=o;break;case"iframe":case"object":case"embed":dt("load",e),i=o;break;case"video":case"audio":for(i=0;i<ci.length;i++)dt(ci[i],e);i=o;break;case"source":dt("error",e),i=o;break;case"img":case"image":case"link":dt("error",e),dt("load",e),i=o;break;case"details":dt("toggle",e),i=o;break;case"input":mg(e,o),i=qa(e,o),dt("invalid",e);break;case"option":i=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},i=ht({},o,{value:void 0}),dt("invalid",e);break;case"textarea":fg(e,o),i=ed(e,o),dt("invalid",e);break;default:i=o}rd(n,i),d=i;for(s in d)if(d.hasOwnProperty(s)){var a=d[s];s==="style"?$p(e,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Lp(e,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Ti(e,a):typeof a=="number"&&Ti(e,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(zi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&dt("scroll",e):a!=null&&ac(e,s,a,l))}switch(n){case"input":os(e),hg(e,o,!1);break;case"textarea":os(e),xg(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Bn(o.value));break;case"select":e.multiple=!!o.multiple,s=o.value,s!=null?zo(e,!!o.multiple,s,!1):o.defaultValue!=null&&zo(e,!!o.multiple,o.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=il)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return _t(r),null;case 6:if(e&&r.stateNode!=null)am(e,r,e.memoizedProps,o);else{if(typeof o!="string"&&r.stateNode===null)throw Error(xe(166));if(n=Un(_i.current),Un($r.current),ps(r)){if(o=r.stateNode,n=r.memoizedProps,o[Lr]=r,(s=o.nodeValue!==n)&&(e=ir,e!==null))switch(e.tag){case 3:us(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&us(o.nodeValue,n,(e.mode&1)!==0)}s&&(r.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[Lr]=r,r.stateNode=o}return _t(r),null;case 13:if(ct(bt),o=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(gt&&or!==null&&r.mode&1&&!(r.flags&128))zb(),Fo(),r.flags|=98560,s=!1;else if(s=ps(r),o!==null&&o.dehydrated!==null){if(e===null){if(!s)throw Error(xe(318));if(s=r.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(xe(317));s[Lr]=r}else Fo(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;_t(r),s=!1}else zr!==null&&(Ld(zr),zr=null),s=!0;if(!s)return r.flags&65536?r:null}return r.flags&128?(r.lanes=n,r):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(r.child.flags|=8192,r.mode&1&&(e===null||bt.current&1?zt===0&&(zt=3):Gc())),r.updateQueue!==null&&(r.flags|=4),_t(r),null);case 4:return Wo(),Ed(e,r),e===null&&Fi(r.stateNode.containerInfo),_t(r),null;case 10:return Tc(r.type._context),_t(r),null;case 17:return Zt(r.type)&&sl(),_t(r),null;case 19:if(ct(bt),s=r.memoizedState,s===null)return _t(r),null;if(o=(r.flags&128)!==0,l=s.rendering,l===null)if(o)ti(s,!1);else{if(zt!==0||e!==null&&e.flags&128)for(e=r.child;e!==null;){if(l=pl(e),l!==null){for(r.flags|=128,ti(s,!1),o=l.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),r.subtreeFlags=0,o=n,n=r.child;n!==null;)s=n,e=o,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return lt(bt,bt.current&1|2),r.child}e=e.sibling}s.tail!==null&&yt()>_o&&(r.flags|=128,o=!0,ti(s,!1),r.lanes=4194304)}else{if(!o)if(e=pl(l),e!==null){if(r.flags|=128,o=!0,n=e.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),ti(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!gt)return _t(r),null}else 2*yt()-s.renderingStartTime>_o&&n!==1073741824&&(r.flags|=128,o=!0,ti(s,!1),r.lanes=4194304);s.isBackwards?(l.sibling=r.child,r.child=l):(n=s.last,n!==null?n.sibling=l:r.child=l,s.last=l)}return s.tail!==null?(r=s.tail,s.rendering=r,s.tail=r.sibling,s.renderingStartTime=yt(),r.sibling=null,n=bt.current,lt(bt,o?n&1|2:n&1),r):(_t(r),null);case 22:case 23:return Hc(),o=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(r.flags|=8192),o&&r.mode&1?nr&1073741824&&(_t(r),r.subtreeFlags&6&&(r.flags|=8192)):_t(r),null;case 24:return null;case 25:return null}throw Error(xe(156,r.tag))}function vx(e,r){switch(wc(r),r.tag){case 1:return Zt(r.type)&&sl(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return Wo(),ct(qt),ct(Ot),Ac(),e=r.flags,e&65536&&!(e&128)?(r.flags=e&-65537|128,r):null;case 5:return Dc(r),null;case 13:if(ct(bt),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(xe(340));Fo()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return ct(bt),null;case 4:return Wo(),null;case 10:return Tc(r.type._context),null;case 22:case 23:return Hc(),null;case 24:return null;default:return null}}var hs=!1,Pt=!1,jx=typeof WeakSet=="function"?WeakSet:Set,Ae=null;function So(e,r){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){xt(e,r,o)}else n.current=null}function Bd(e,r,n){try{n()}catch(o){xt(e,r,o)}}var lu=!1;function kx(e,r){if(pd=rl,e=pb(),jc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var i=o.anchorOffset,s=o.focusNode;o=o.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var l=0,d=-1,a=-1,g=0,h=0,x=e,f=null;t:for(;;){for(var E;x!==n||i!==0&&x.nodeType!==3||(d=l+i),x!==s||o!==0&&x.nodeType!==3||(a=l+o),x.nodeType===3&&(l+=x.nodeValue.length),(E=x.firstChild)!==null;)f=x,x=E;for(;;){if(x===e)break t;if(f===n&&++g===i&&(d=l),f===s&&++h===o&&(a=l),(E=x.nextSibling)!==null)break;x=f,f=x.parentNode}x=E}n=d===-1||a===-1?null:{start:d,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(bd={focusedElem:e,selectionRange:n},rl=!1,Ae=r;Ae!==null;)if(r=Ae,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,Ae=e;else for(;Ae!==null;){r=Ae;try{var z=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(z!==null){var k=z.memoizedProps,R=z.memoizedState,b=r.stateNode,p=b.getSnapshotBeforeUpdate(r.elementType===r.type?k:wr(r.type,k),R);b.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=r.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(xe(163))}}catch(T){xt(r,r.return,T)}if(e=r.sibling,e!==null){e.return=r.return,Ae=e;break}Ae=r.return}return z=lu,lu=!1,z}function vi(e,r,n){var o=r.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var i=o=o.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Bd(r,n,s)}i=i.next}while(i!==o)}}function $l(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==r)}}function Dd(e){var r=e.ref;if(r!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof r=="function"?r(e):r.current=e}}function dm(e){var r=e.alternate;r!==null&&(e.alternate=null,dm(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[Lr],delete r[Wi],delete r[fd],delete r[ox],delete r[ix])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cm(e){return e.tag===5||e.tag===3||e.tag===4}function au(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ad(e,r,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?n.nodeType===8?n.parentNode.insertBefore(e,r):n.insertBefore(e,r):(n.nodeType===8?(r=n.parentNode,r.insertBefore(e,n)):(r=n,r.appendChild(e)),n=n._reactRootContainer,n!=null||r.onclick!==null||(r.onclick=il));else if(o!==4&&(e=e.child,e!==null))for(Ad(e,r,n),e=e.sibling;e!==null;)Ad(e,r,n),e=e.sibling}function Rd(e,r,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?n.insertBefore(e,r):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Rd(e,r,n),e=e.sibling;e!==null;)Rd(e,r,n),e=e.sibling}var Ft=null,Cr=!1;function gn(e,r,n){for(n=n.child;n!==null;)gm(e,r,n),n=n.sibling}function gm(e,r,n){if(_r&&typeof _r.onCommitFiberUnmount=="function")try{_r.onCommitFiberUnmount(Dl,n)}catch{}switch(n.tag){case 5:Pt||So(n,r);case 6:var o=Ft,i=Cr;Ft=null,gn(e,r,n),Ft=o,Cr=i,Ft!==null&&(Cr?(e=Ft,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ft.removeChild(n.stateNode));break;case 18:Ft!==null&&(Cr?(e=Ft,n=n.stateNode,e.nodeType===8?xa(e.parentNode,n):e.nodeType===1&&xa(e,n),Di(e)):xa(Ft,n.stateNode));break;case 4:o=Ft,i=Cr,Ft=n.stateNode.containerInfo,Cr=!0,gn(e,r,n),Ft=o,Cr=i;break;case 0:case 11:case 14:case 15:if(!Pt&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){i=o=o.next;do{var s=i,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&Bd(n,r,l),i=i.next}while(i!==o)}gn(e,r,n);break;case 1:if(!Pt&&(So(n,r),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(d){xt(n,r,d)}gn(e,r,n);break;case 21:gn(e,r,n);break;case 22:n.mode&1?(Pt=(o=Pt)||n.memoizedState!==null,gn(e,r,n),Pt=o):gn(e,r,n);break;default:gn(e,r,n)}}function du(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new jx),r.forEach(function(o){var i=Dx.bind(null,e,o);n.has(o)||(n.add(o),o.then(i,i))})}}function yr(e,r){var n=r.deletions;if(n!==null)for(var o=0;o<n.length;o++){var i=n[o];try{var s=e,l=r,d=l;e:for(;d!==null;){switch(d.tag){case 5:Ft=d.stateNode,Cr=!1;break e;case 3:Ft=d.stateNode.containerInfo,Cr=!0;break e;case 4:Ft=d.stateNode.containerInfo,Cr=!0;break e}d=d.return}if(Ft===null)throw Error(xe(160));gm(s,l,i),Ft=null,Cr=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(g){xt(i,r,g)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)um(r,e),r=r.sibling}function um(e,r){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(yr(r,e),Ar(e),o&4){try{vi(3,e,e.return),$l(3,e)}catch(k){xt(e,e.return,k)}try{vi(5,e,e.return)}catch(k){xt(e,e.return,k)}}break;case 1:yr(r,e),Ar(e),o&512&&n!==null&&So(n,n.return);break;case 5:if(yr(r,e),Ar(e),o&512&&n!==null&&So(n,n.return),e.flags&32){var i=e.stateNode;try{Ti(i,"")}catch(k){xt(e,e.return,k)}}if(o&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,l=n!==null?n.memoizedProps:s,d=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{d==="input"&&s.type==="radio"&&s.name!=null&&Fp(i,s),nd(d,l);var g=nd(d,s);for(l=0;l<a.length;l+=2){var h=a[l],x=a[l+1];h==="style"?$p(i,x):h==="dangerouslySetInnerHTML"?Lp(i,x):h==="children"?Ti(i,x):ac(i,h,x,g)}switch(d){case"input":Za(i,s);break;case"textarea":Mp(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var E=s.value;E!=null?zo(i,!!s.multiple,E,!1):f!==!!s.multiple&&(s.defaultValue!=null?zo(i,!!s.multiple,s.defaultValue,!0):zo(i,!!s.multiple,s.multiple?[]:"",!1))}i[Wi]=s}catch(k){xt(e,e.return,k)}}break;case 6:if(yr(r,e),Ar(e),o&4){if(e.stateNode===null)throw Error(xe(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(k){xt(e,e.return,k)}}break;case 3:if(yr(r,e),Ar(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{Di(r.containerInfo)}catch(k){xt(e,e.return,k)}break;case 4:yr(r,e),Ar(e);break;case 13:yr(r,e),Ar(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Nc=yt())),o&4&&du(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(Pt=(g=Pt)||h,yr(r,e),Pt=g):yr(r,e),Ar(e),o&8192){if(g=e.memoizedState!==null,(e.stateNode.isHidden=g)&&!h&&e.mode&1)for(Ae=e,h=e.child;h!==null;){for(x=Ae=h;Ae!==null;){switch(f=Ae,E=f.child,f.tag){case 0:case 11:case 14:case 15:vi(4,f,f.return);break;case 1:So(f,f.return);var z=f.stateNode;if(typeof z.componentWillUnmount=="function"){o=f,n=f.return;try{r=o,z.props=r.memoizedProps,z.state=r.memoizedState,z.componentWillUnmount()}catch(k){xt(o,n,k)}}break;case 5:So(f,f.return);break;case 22:if(f.memoizedState!==null){gu(x);continue}}E!==null?(E.return=f,Ae=E):gu(x)}h=h.sibling}e:for(h=null,x=e;;){if(x.tag===5){if(h===null){h=x;try{i=x.stateNode,g?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(d=x.stateNode,a=x.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,d.style.display=_p("display",l))}catch(k){xt(e,e.return,k)}}}else if(x.tag===6){if(h===null)try{x.stateNode.nodeValue=g?"":x.memoizedProps}catch(k){xt(e,e.return,k)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;h===x&&(h=null),x=x.return}h===x&&(h=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:yr(r,e),Ar(e),o&4&&du(e);break;case 21:break;default:yr(r,e),Ar(e)}}function Ar(e){var r=e.flags;if(r&2){try{e:{for(var n=e.return;n!==null;){if(cm(n)){var o=n;break e}n=n.return}throw Error(xe(160))}switch(o.tag){case 5:var i=o.stateNode;o.flags&32&&(Ti(i,""),o.flags&=-33);var s=au(e);Rd(e,s,i);break;case 3:case 4:var l=o.stateNode.containerInfo,d=au(e);Ad(e,d,l);break;default:throw Error(xe(161))}}catch(a){xt(e,e.return,a)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function wx(e,r,n){Ae=e,pm(e)}function pm(e,r,n){for(var o=(e.mode&1)!==0;Ae!==null;){var i=Ae,s=i.child;if(i.tag===22&&o){var l=i.memoizedState!==null||hs;if(!l){var d=i.alternate,a=d!==null&&d.memoizedState!==null||Pt;d=hs;var g=Pt;if(hs=l,(Pt=a)&&!g)for(Ae=i;Ae!==null;)l=Ae,a=l.child,l.tag===22&&l.memoizedState!==null?uu(i):a!==null?(a.return=l,Ae=a):uu(i);for(;s!==null;)Ae=s,pm(s),s=s.sibling;Ae=i,hs=d,Pt=g}cu(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Ae=s):cu(e)}}function cu(e){for(;Ae!==null;){var r=Ae;if(r.flags&8772){var n=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Pt||$l(5,r);break;case 1:var o=r.stateNode;if(r.flags&4&&!Pt)if(n===null)o.componentDidMount();else{var i=r.elementType===r.type?n.memoizedProps:wr(r.type,n.memoizedProps);o.componentDidUpdate(i,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var s=r.updateQueue;s!==null&&Qg(r,s,o);break;case 3:var l=r.updateQueue;if(l!==null){if(n=null,r.child!==null)switch(r.child.tag){case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}Qg(r,l,n)}break;case 5:var d=r.stateNode;if(n===null&&r.flags&4){n=d;var a=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var g=r.alternate;if(g!==null){var h=g.memoizedState;if(h!==null){var x=h.dehydrated;x!==null&&Di(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(xe(163))}Pt||r.flags&512&&Dd(r)}catch(f){xt(r,r.return,f)}}if(r===e){Ae=null;break}if(n=r.sibling,n!==null){n.return=r.return,Ae=n;break}Ae=r.return}}function gu(e){for(;Ae!==null;){var r=Ae;if(r===e){Ae=null;break}var n=r.sibling;if(n!==null){n.return=r.return,Ae=n;break}Ae=r.return}}function uu(e){for(;Ae!==null;){var r=Ae;try{switch(r.tag){case 0:case 11:case 15:var n=r.return;try{$l(4,r)}catch(a){xt(r,n,a)}break;case 1:var o=r.stateNode;if(typeof o.componentDidMount=="function"){var i=r.return;try{o.componentDidMount()}catch(a){xt(r,i,a)}}var s=r.return;try{Dd(r)}catch(a){xt(r,s,a)}break;case 5:var l=r.return;try{Dd(r)}catch(a){xt(r,l,a)}}}catch(a){xt(r,r.return,a)}if(r===e){Ae=null;break}var d=r.sibling;if(d!==null){d.return=r.return,Ae=d;break}Ae=r.return}}var Sx=Math.ceil,hl=an.ReactCurrentDispatcher,$c=an.ReactCurrentOwner,hr=an.ReactCurrentBatchConfig,et=0,At=null,jt=null,Mt=0,nr=0,Co=Fn(0),zt=0,Oi=null,Zn=0,Pl=0,Pc=0,ji=null,Kt=null,Nc=0,_o=1/0,Vr=null,fl=!1,Fd=null,Tn=null,fs=!1,jn=null,xl=0,ki=0,Md=null,Us=-1,Vs=0;function Ut(){return et&6?yt():Us!==-1?Us:Us=yt()}function In(e){return e.mode&1?et&2&&Mt!==0?Mt&-Mt:lx.transition!==null?(Vs===0&&(Vs=qp()),Vs):(e=nt,e!==0||(e=window.event,e=e===void 0?16:ob(e.type)),e):1}function Ir(e,r,n,o){if(50<ki)throw ki=0,Md=null,Error(xe(185));Qi(e,n,o),(!(et&2)||e!==At)&&(e===At&&(!(et&2)&&(Pl|=n),zt===4&&xn(e,Mt)),Jt(e,o),n===1&&et===0&&!(r.mode&1)&&(_o=yt()+500,Wl&&Mn()))}function Jt(e,r){var n=e.callbackNode;lf(e,r);var o=tl(e,e===At?Mt:0);if(o===0)n!==null&&jg(n),e.callbackNode=null,e.callbackPriority=0;else if(r=o&-o,e.callbackPriority!==r){if(n!=null&&jg(n),r===1)e.tag===0?sx(pu.bind(null,e)):wb(pu.bind(null,e)),rx(function(){!(et&6)&&Mn()}),n=null;else{switch(Zp(o)){case 1:n=pc;break;case 4:n=Kp;break;case 16:n=el;break;case 536870912:n=Xp;break;default:n=el}n=jm(n,bm.bind(null,e))}e.callbackPriority=r,e.callbackNode=n}}function bm(e,r){if(Us=-1,Vs=0,et&6)throw Error(xe(327));var n=e.callbackNode;if(Do()&&e.callbackNode!==n)return null;var o=tl(e,e===At?Mt:0);if(o===0)return null;if(o&30||o&e.expiredLanes||r)r=yl(e,o);else{r=o;var i=et;et|=2;var s=hm();(At!==e||Mt!==r)&&(Vr=null,_o=yt()+500,Yn(e,r));do try{Tx();break}catch(d){mm(e,d)}while(!0);zc(),hl.current=s,et=i,jt!==null?r=0:(At=null,Mt=0,r=zt)}if(r!==0){if(r===2&&(i=ad(e),i!==0&&(o=i,r=Wd(e,i))),r===1)throw n=Oi,Yn(e,0),xn(e,o),Jt(e,yt()),n;if(r===6)xn(e,o);else{if(i=e.current.alternate,!(o&30)&&!Cx(i)&&(r=yl(e,o),r===2&&(s=ad(e),s!==0&&(o=s,r=Wd(e,s))),r===1))throw n=Oi,Yn(e,0),xn(e,o),Jt(e,yt()),n;switch(e.finishedWork=i,e.finishedLanes=o,r){case 0:case 1:throw Error(xe(345));case 2:Nn(e,Kt,Vr);break;case 3:if(xn(e,o),(o&130023424)===o&&(r=Nc+500-yt(),10<r)){if(tl(e,0)!==0)break;if(i=e.suspendedLanes,(i&o)!==o){Ut(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=hd(Nn.bind(null,e,Kt,Vr),r);break}Nn(e,Kt,Vr);break;case 4:if(xn(e,o),(o&4194240)===o)break;for(r=e.eventTimes,i=-1;0<o;){var l=31-Tr(o);s=1<<l,l=r[l],l>i&&(i=l),o&=~s}if(o=i,o=yt()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Sx(o/1960))-o,10<o){e.timeoutHandle=hd(Nn.bind(null,e,Kt,Vr),o);break}Nn(e,Kt,Vr);break;case 5:Nn(e,Kt,Vr);break;default:throw Error(xe(329))}}}return Jt(e,yt()),e.callbackNode===n?bm.bind(null,e):null}function Wd(e,r){var n=ji;return e.current.memoizedState.isDehydrated&&(Yn(e,r).flags|=256),e=yl(e,r),e!==2&&(r=Kt,Kt=n,r!==null&&Ld(r)),e}function Ld(e){Kt===null?Kt=e:Kt.push.apply(Kt,e)}function Cx(e){for(var r=e;;){if(r.flags&16384){var n=r.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var i=n[o],s=i.getSnapshot;i=i.value;try{if(!Er(s(),i))return!1}catch{return!1}}}if(n=r.child,r.subtreeFlags&16384&&n!==null)n.return=r,r=n;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function xn(e,r){for(r&=~Pc,r&=~Pl,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var n=31-Tr(r),o=1<<n;e[n]=-1,r&=~o}}function pu(e){if(et&6)throw Error(xe(327));Do();var r=tl(e,0);if(!(r&1))return Jt(e,yt()),null;var n=yl(e,r);if(e.tag!==0&&n===2){var o=ad(e);o!==0&&(r=o,n=Wd(e,o))}if(n===1)throw n=Oi,Yn(e,0),xn(e,r),Jt(e,yt()),n;if(n===6)throw Error(xe(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,Nn(e,Kt,Vr),Jt(e,yt()),null}function Oc(e,r){var n=et;et|=1;try{return e(r)}finally{et=n,et===0&&(_o=yt()+500,Wl&&Mn())}}function Jn(e){jn!==null&&jn.tag===0&&!(et&6)&&Do();var r=et;et|=1;var n=hr.transition,o=nt;try{if(hr.transition=null,nt=1,e)return e()}finally{nt=o,hr.transition=n,et=r,!(et&6)&&Mn()}}function Hc(){nr=Co.current,ct(Co)}function Yn(e,r){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,tx(n)),jt!==null)for(n=jt.return;n!==null;){var o=n;switch(wc(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&sl();break;case 3:Wo(),ct(qt),ct(Ot),Ac();break;case 5:Dc(o);break;case 4:Wo();break;case 13:ct(bt);break;case 19:ct(bt);break;case 10:Tc(o.type._context);break;case 22:case 23:Hc()}n=n.return}if(At=e,jt=e=En(e.current,null),Mt=nr=r,zt=0,Oi=null,Pc=Pl=Zn=0,Kt=ji=null,Gn!==null){for(r=0;r<Gn.length;r++)if(n=Gn[r],o=n.interleaved,o!==null){n.interleaved=null;var i=o.next,s=n.pending;if(s!==null){var l=s.next;s.next=i,o.next=l}n.pending=o}Gn=null}return e}function mm(e,r){do{var n=jt;try{if(zc(),Os.current=ml,bl){for(var o=mt.memoizedState;o!==null;){var i=o.queue;i!==null&&(i.pending=null),o=o.next}bl=!1}if(qn=0,Dt=Ct=mt=null,yi=!1,$i=0,$c.current=null,n===null||n.return===null){zt=1,Oi=r,jt=null;break}e:{var s=e,l=n.return,d=n,a=r;if(r=Mt,d.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var g=a,h=d,x=h.tag;if(!(h.mode&1)&&(x===0||x===11||x===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var E=eu(l);if(E!==null){E.flags&=-257,tu(E,l,d,s,r),E.mode&1&&Jg(s,g,r),r=E,a=g;var z=r.updateQueue;if(z===null){var k=new Set;k.add(a),r.updateQueue=k}else z.add(a);break e}else{if(!(r&1)){Jg(s,g,r),Gc();break e}a=Error(xe(426))}}else if(gt&&d.mode&1){var R=eu(l);if(R!==null){!(R.flags&65536)&&(R.flags|=256),tu(R,l,d,s,r),Sc(Lo(a,d));break e}}s=a=Lo(a,d),zt!==4&&(zt=2),ji===null?ji=[s]:ji.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,r&=-r,s.lanes|=r;var b=Zb(s,a,r);Yg(s,b);break e;case 1:d=a;var p=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Tn===null||!Tn.has(m)))){s.flags|=65536,r&=-r,s.lanes|=r;var T=Jb(s,d,r);Yg(s,T);break e}}s=s.return}while(s!==null)}xm(n)}catch(j){r=j,jt===n&&n!==null&&(jt=n=n.return);continue}break}while(!0)}function hm(){var e=hl.current;return hl.current=ml,e===null?ml:e}function Gc(){(zt===0||zt===3||zt===2)&&(zt=4),At===null||!(Zn&268435455)&&!(Pl&268435455)||xn(At,Mt)}function yl(e,r){var n=et;et|=2;var o=hm();(At!==e||Mt!==r)&&(Vr=null,Yn(e,r));do try{zx();break}catch(i){mm(e,i)}while(!0);if(zc(),et=n,hl.current=o,jt!==null)throw Error(xe(261));return At=null,Mt=0,zt}function zx(){for(;jt!==null;)fm(jt)}function Tx(){for(;jt!==null&&!qh();)fm(jt)}function fm(e){var r=vm(e.alternate,e,nr);e.memoizedProps=e.pendingProps,r===null?xm(e):jt=r,$c.current=null}function xm(e){var r=e;do{var n=r.alternate;if(e=r.return,r.flags&32768){if(n=vx(n,r),n!==null){n.flags&=32767,jt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{zt=6,jt=null;return}}else if(n=yx(n,r,nr),n!==null){jt=n;return}if(r=r.sibling,r!==null){jt=r;return}jt=r=e}while(r!==null);zt===0&&(zt=5)}function Nn(e,r,n){var o=nt,i=hr.transition;try{hr.transition=null,nt=1,Ix(e,r,n,o)}finally{hr.transition=i,nt=o}return null}function Ix(e,r,n,o){do Do();while(jn!==null);if(et&6)throw Error(xe(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(xe(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(af(e,s),e===At&&(jt=At=null,Mt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fs||(fs=!0,jm(el,function(){return Do(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=hr.transition,hr.transition=null;var l=nt;nt=1;var d=et;et|=4,$c.current=null,kx(e,n),um(n,e),Qf(bd),rl=!!pd,bd=pd=null,e.current=n,wx(n),Zh(),et=d,nt=l,hr.transition=s}else e.current=n;if(fs&&(fs=!1,jn=e,xl=i),s=e.pendingLanes,s===0&&(Tn=null),tf(n.stateNode),Jt(e,yt()),r!==null)for(o=e.onRecoverableError,n=0;n<r.length;n++)i=r[n],o(i.value,{componentStack:i.stack,digest:i.digest});if(fl)throw fl=!1,e=Fd,Fd=null,e;return xl&1&&e.tag!==0&&Do(),s=e.pendingLanes,s&1?e===Md?ki++:(ki=0,Md=e):ki=0,Mn(),null}function Do(){if(jn!==null){var e=Zp(xl),r=hr.transition,n=nt;try{if(hr.transition=null,nt=16>e?16:e,jn===null)var o=!1;else{if(e=jn,jn=null,xl=0,et&6)throw Error(xe(331));var i=et;for(et|=4,Ae=e.current;Ae!==null;){var s=Ae,l=s.child;if(Ae.flags&16){var d=s.deletions;if(d!==null){for(var a=0;a<d.length;a++){var g=d[a];for(Ae=g;Ae!==null;){var h=Ae;switch(h.tag){case 0:case 11:case 15:vi(8,h,s)}var x=h.child;if(x!==null)x.return=h,Ae=x;else for(;Ae!==null;){h=Ae;var f=h.sibling,E=h.return;if(dm(h),h===g){Ae=null;break}if(f!==null){f.return=E,Ae=f;break}Ae=E}}}var z=s.alternate;if(z!==null){var k=z.child;if(k!==null){z.child=null;do{var R=k.sibling;k.sibling=null,k=R}while(k!==null)}}Ae=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,Ae=l;else e:for(;Ae!==null;){if(s=Ae,s.flags&2048)switch(s.tag){case 0:case 11:case 15:vi(9,s,s.return)}var b=s.sibling;if(b!==null){b.return=s.return,Ae=b;break e}Ae=s.return}}var p=e.current;for(Ae=p;Ae!==null;){l=Ae;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,Ae=m;else e:for(l=p;Ae!==null;){if(d=Ae,d.flags&2048)try{switch(d.tag){case 0:case 11:case 15:$l(9,d)}}catch(j){xt(d,d.return,j)}if(d===l){Ae=null;break e}var T=d.sibling;if(T!==null){T.return=d.return,Ae=T;break e}Ae=d.return}}if(et=i,Mn(),_r&&typeof _r.onPostCommitFiberRoot=="function")try{_r.onPostCommitFiberRoot(Dl,e)}catch{}o=!0}return o}finally{nt=n,hr.transition=r}}return!1}function bu(e,r,n){r=Lo(n,r),r=Zb(e,r,1),e=zn(e,r,1),r=Ut(),e!==null&&(Qi(e,1,r),Jt(e,r))}function xt(e,r,n){if(e.tag===3)bu(e,e,n);else for(;r!==null;){if(r.tag===3){bu(r,e,n);break}else if(r.tag===1){var o=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Tn===null||!Tn.has(o))){e=Lo(n,e),e=Jb(r,e,1),r=zn(r,e,1),e=Ut(),r!==null&&(Qi(r,1,e),Jt(r,e));break}}r=r.return}}function Ex(e,r,n){var o=e.pingCache;o!==null&&o.delete(r),r=Ut(),e.pingedLanes|=e.suspendedLanes&n,At===e&&(Mt&n)===n&&(zt===4||zt===3&&(Mt&130023424)===Mt&&500>yt()-Nc?Yn(e,0):Pc|=n),Jt(e,r)}function ym(e,r){r===0&&(e.mode&1?(r=ls,ls<<=1,!(ls&130023424)&&(ls=4194304)):r=1);var n=Ut();e=sn(e,r),e!==null&&(Qi(e,r,n),Jt(e,n))}function Bx(e){var r=e.memoizedState,n=0;r!==null&&(n=r.retryLane),ym(e,n)}function Dx(e,r){var n=0;switch(e.tag){case 13:var o=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(xe(314))}o!==null&&o.delete(r),ym(e,n)}var vm;vm=function(e,r,n){if(e!==null)if(e.memoizedProps!==r.pendingProps||qt.current)Xt=!0;else{if(!(e.lanes&n)&&!(r.flags&128))return Xt=!1,xx(e,r,n);Xt=!!(e.flags&131072)}else Xt=!1,gt&&r.flags&1048576&&Sb(r,dl,r.index);switch(r.lanes=0,r.tag){case 2:var o=r.type;Gs(e,r),e=r.pendingProps;var i=Ro(r,Ot.current);Bo(r,n),i=Fc(null,r,o,e,i,n);var s=Mc();return r.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Zt(o)?(s=!0,ll(r)):s=!1,r.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ec(r),i.updater=_l,r.stateNode=i,i._reactInternals=r,wd(r,o,e,n),r=zd(null,r,o,!0,s,n)):(r.tag=0,gt&&s&&kc(r),Gt(null,r,i,n),r=r.child),r;case 16:o=r.elementType;e:{switch(Gs(e,r),e=r.pendingProps,i=o._init,o=i(o._payload),r.type=o,i=r.tag=Rx(o),e=wr(o,e),i){case 0:r=Cd(null,r,o,e,n);break e;case 1:r=ou(null,r,o,e,n);break e;case 11:r=ru(null,r,o,e,n);break e;case 14:r=nu(null,r,o,wr(o.type,e),n);break e}throw Error(xe(306,o,""))}return r;case 0:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:wr(o,i),Cd(e,r,o,i,n);case 1:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:wr(o,i),ou(e,r,o,i,n);case 3:e:{if(nm(r),e===null)throw Error(xe(387));o=r.pendingProps,s=r.memoizedState,i=s.element,Bb(e,r),ul(r,o,null,n);var l=r.memoizedState;if(o=l.element,s.isDehydrated)if(s={element:o,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},r.updateQueue.baseState=s,r.memoizedState=s,r.flags&256){i=Lo(Error(xe(423)),r),r=iu(e,r,o,n,i);break e}else if(o!==i){i=Lo(Error(xe(424)),r),r=iu(e,r,o,n,i);break e}else for(or=Cn(r.stateNode.containerInfo.firstChild),ir=r,gt=!0,zr=null,n=Ib(r,null,o,n),r.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fo(),o===i){r=ln(e,r,n);break e}Gt(e,r,o,n)}r=r.child}return r;case 5:return Db(r),e===null&&vd(r),o=r.type,i=r.pendingProps,s=e!==null?e.memoizedProps:null,l=i.children,md(o,i)?l=null:s!==null&&md(o,s)&&(r.flags|=32),rm(e,r),Gt(e,r,l,n),r.child;case 6:return e===null&&vd(r),null;case 13:return om(e,r,n);case 4:return Bc(r,r.stateNode.containerInfo),o=r.pendingProps,e===null?r.child=Mo(r,null,o,n):Gt(e,r,o,n),r.child;case 11:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:wr(o,i),ru(e,r,o,i,n);case 7:return Gt(e,r,r.pendingProps,n),r.child;case 8:return Gt(e,r,r.pendingProps.children,n),r.child;case 12:return Gt(e,r,r.pendingProps.children,n),r.child;case 10:e:{if(o=r.type._context,i=r.pendingProps,s=r.memoizedProps,l=i.value,lt(cl,o._currentValue),o._currentValue=l,s!==null)if(Er(s.value,l)){if(s.children===i.children&&!qt.current){r=ln(e,r,n);break e}}else for(s=r.child,s!==null&&(s.return=r);s!==null;){var d=s.dependencies;if(d!==null){l=s.child;for(var a=d.firstContext;a!==null;){if(a.context===o){if(s.tag===1){a=tn(-1,n&-n),a.tag=2;var g=s.updateQueue;if(g!==null){g=g.shared;var h=g.pending;h===null?a.next=a:(a.next=h.next,h.next=a),g.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),jd(s.return,n,r),d.lanes|=n;break}a=a.next}}else if(s.tag===10)l=s.type===r.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(xe(341));l.lanes|=n,d=l.alternate,d!==null&&(d.lanes|=n),jd(l,n,r),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===r){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}Gt(e,r,i.children,n),r=r.child}return r;case 9:return i=r.type,o=r.pendingProps.children,Bo(r,n),i=fr(i),o=o(i),r.flags|=1,Gt(e,r,o,n),r.child;case 14:return o=r.type,i=wr(o,r.pendingProps),i=wr(o.type,i),nu(e,r,o,i,n);case 15:return em(e,r,r.type,r.pendingProps,n);case 17:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:wr(o,i),Gs(e,r),r.tag=1,Zt(o)?(e=!0,ll(r)):e=!1,Bo(r,n),qb(r,o,i),wd(r,o,i,n),zd(null,r,o,!0,e,n);case 19:return im(e,r,n);case 22:return tm(e,r,n)}throw Error(xe(156,r.tag))};function jm(e,r){return Qp(e,r)}function Ax(e,r,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mr(e,r,n,o){return new Ax(e,r,n,o)}function Uc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Rx(e){if(typeof e=="function")return Uc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===cc)return 11;if(e===gc)return 14}return 2}function En(e,r){var n=e.alternate;return n===null?(n=mr(e.tag,r,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=r,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,r=e.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ys(e,r,n,o,i,s){var l=2;if(o=e,typeof e=="function")Uc(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case mo:return Qn(n.children,i,s,r);case dc:l=8,i|=8;break;case Ya:return e=mr(12,n,r,i|2),e.elementType=Ya,e.lanes=s,e;case Qa:return e=mr(13,n,r,i),e.elementType=Qa,e.lanes=s,e;case Ka:return e=mr(19,n,r,i),e.elementType=Ka,e.lanes=s,e;case Dp:return Nl(n,i,s,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ep:l=10;break e;case Bp:l=9;break e;case cc:l=11;break e;case gc:l=14;break e;case mn:l=16,o=null;break e}throw Error(xe(130,e==null?e:typeof e,""))}return r=mr(l,n,r,i),r.elementType=e,r.type=o,r.lanes=s,r}function Qn(e,r,n,o){return e=mr(7,e,o,r),e.lanes=n,e}function Nl(e,r,n,o){return e=mr(22,e,o,r),e.elementType=Dp,e.lanes=n,e.stateNode={isHidden:!1},e}function za(e,r,n){return e=mr(6,e,null,r),e.lanes=n,e}function Ta(e,r,n){return r=mr(4,e.children!==null?e.children:[],e.key,r),r.lanes=n,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function Fx(e,r,n,o,i){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=la(0),this.expirationTimes=la(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=la(0),this.identifierPrefix=o,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vc(e,r,n,o,i,s,l,d,a){return e=new Fx(e,r,n,d,a),r===1?(r=1,s===!0&&(r|=8)):r=0,s=mr(3,null,null,r),e.current=s,s.stateNode=e,s.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ec(s),e}function Mx(e,r,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bo,key:o==null?null:""+o,children:e,containerInfo:r,implementation:n}}function km(e){if(!e)return Dn;e=e._reactInternals;e:{if(to(e)!==e||e.tag!==1)throw Error(xe(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Zt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(xe(171))}if(e.tag===1){var n=e.type;if(Zt(n))return kb(e,n,r)}return r}function wm(e,r,n,o,i,s,l,d,a){return e=Vc(n,o,!0,e,i,s,l,d,a),e.context=km(null),n=e.current,o=Ut(),i=In(n),s=tn(o,i),s.callback=r??null,zn(n,s,i),e.current.lanes=i,Qi(e,i,o),Jt(e,o),e}function Ol(e,r,n,o){var i=r.current,s=Ut(),l=In(i);return n=km(n),r.context===null?r.context=n:r.pendingContext=n,r=tn(s,l),r.payload={element:e},o=o===void 0?null:o,o!==null&&(r.callback=o),e=zn(i,r,l),e!==null&&(Ir(e,i,l,s),Ns(e,i,l)),l}function vl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function mu(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<r?n:r}}function Yc(e,r){mu(e,r),(e=e.alternate)&&mu(e,r)}function Wx(){return null}var Sm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Qc(e){this._internalRoot=e}Hl.prototype.render=Qc.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(xe(409));Ol(e,r,null,null)};Hl.prototype.unmount=Qc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;Jn(function(){Ol(null,e,null,null)}),r[on]=null}};function Hl(e){this._internalRoot=e}Hl.prototype.unstable_scheduleHydration=function(e){if(e){var r=tb();e={blockedOn:null,target:e,priority:r};for(var n=0;n<fn.length&&r!==0&&r<fn[n].priority;n++);fn.splice(n,0,e),n===0&&nb(e)}};function Kc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Gl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function hu(){}function Lx(e,r,n,o,i){if(i){if(typeof o=="function"){var s=o;o=function(){var g=vl(l);s.call(g)}}var l=wm(r,o,e,0,null,!1,!1,"",hu);return e._reactRootContainer=l,e[on]=l.current,Fi(e.nodeType===8?e.parentNode:e),Jn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof o=="function"){var d=o;o=function(){var g=vl(a);d.call(g)}}var a=Vc(e,0,!1,null,null,!1,!1,"",hu);return e._reactRootContainer=a,e[on]=a.current,Fi(e.nodeType===8?e.parentNode:e),Jn(function(){Ol(r,a,n,o)}),a}function Ul(e,r,n,o,i){var s=n._reactRootContainer;if(s){var l=s;if(typeof i=="function"){var d=i;i=function(){var a=vl(l);d.call(a)}}Ol(r,l,e,i)}else l=Lx(n,r,e,i,o);return vl(l)}Jp=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var n=di(r.pendingLanes);n!==0&&(bc(r,n|1),Jt(r,yt()),!(et&6)&&(_o=yt()+500,Mn()))}break;case 13:Jn(function(){var o=sn(e,1);if(o!==null){var i=Ut();Ir(o,e,1,i)}}),Yc(e,1)}};mc=function(e){if(e.tag===13){var r=sn(e,134217728);if(r!==null){var n=Ut();Ir(r,e,134217728,n)}Yc(e,134217728)}};eb=function(e){if(e.tag===13){var r=In(e),n=sn(e,r);if(n!==null){var o=Ut();Ir(n,e,r,o)}Yc(e,r)}};tb=function(){return nt};rb=function(e,r){var n=nt;try{return nt=e,r()}finally{nt=n}};id=function(e,r,n){switch(r){case"input":if(Za(e,n),r=n.name,n.type==="radio"&&r!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<n.length;r++){var o=n[r];if(o!==e&&o.form===e.form){var i=Ml(o);if(!i)throw Error(xe(90));Rp(o),Za(o,i)}}}break;case"textarea":Mp(e,n);break;case"select":r=n.value,r!=null&&zo(e,!!n.multiple,r,!1)}};Op=Oc;Hp=Jn;var _x={usingClientEntryPoint:!1,Events:[Xi,yo,Ml,Pp,Np,Oc]},ri={findFiberByHostInstance:Hn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$x={bundleType:ri.bundleType,version:ri.version,rendererPackageName:ri.rendererPackageName,rendererConfig:ri.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:an.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Vp(e),e===null?null:e.stateNode},findFiberByHostInstance:ri.findFiberByHostInstance||Wx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xs.isDisabled&&xs.supportsFiber)try{Dl=xs.inject($x),_r=xs}catch{}}lr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_x;lr.createPortal=function(e,r){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kc(r))throw Error(xe(200));return Mx(e,r,null,n)};lr.createRoot=function(e,r){if(!Kc(e))throw Error(xe(299));var n=!1,o="",i=Sm;return r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),r=Vc(e,1,!1,null,null,n,!1,o,i),e[on]=r.current,Fi(e.nodeType===8?e.parentNode:e),new Qc(r)};lr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(xe(188)):(e=Object.keys(e).join(","),Error(xe(268,e)));return e=Vp(r),e=e===null?null:e.stateNode,e};lr.flushSync=function(e){return Jn(e)};lr.hydrate=function(e,r,n){if(!Gl(r))throw Error(xe(200));return Ul(null,e,r,!0,n)};lr.hydrateRoot=function(e,r,n){if(!Kc(e))throw Error(xe(405));var o=n!=null&&n.hydratedSources||null,i=!1,s="",l=Sm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),r=wm(r,null,e,1,n??null,i,!1,s,l),e[on]=r.current,Fi(e),o)for(e=0;e<o.length;e++)n=o[e],i=n._getVersion,i=i(n._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[n,i]:r.mutableSourceEagerHydrationData.push(n,i);return new Hl(r)};lr.render=function(e,r,n){if(!Gl(r))throw Error(xe(200));return Ul(null,e,r,!1,n)};lr.unmountComponentAtNode=function(e){if(!Gl(e))throw Error(xe(40));return e._reactRootContainer?(Jn(function(){Ul(null,null,e,!1,function(){e._reactRootContainer=null,e[on]=null})}),!0):!1};lr.unstable_batchedUpdates=Oc;lr.unstable_renderSubtreeIntoContainer=function(e,r,n,o){if(!Gl(n))throw Error(xe(200));if(e==null||e._reactInternals===void 0)throw Error(xe(38));return Ul(e,r,n,!1,o)};lr.version="18.3.1-next-f1338f8080-20240426";function Cm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cm)}catch(e){console.error(e)}}Cm(),Cp.exports=lr;var Px=Cp.exports,zm,fu=Px;zm=fu.createRoot,fu.hydrateRoot;/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Tm=(...e)=>e.filter((r,n,o)=>!!r&&r.trim()!==""&&o.indexOf(r)===n).join(" ").trim();/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ox={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=c.forwardRef(({color:e="currentColor",size:r=24,strokeWidth:n=2,absoluteStrokeWidth:o,className:i="",children:s,iconNode:l,...d},a)=>c.createElement("svg",{ref:a,...Ox,width:r,height:r,stroke:e,strokeWidth:o?Number(n)*24/Number(r):n,className:Tm("lucide",i),...d},[...l.map(([g,h])=>c.createElement(g,h)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=(e,r)=>{const n=c.forwardRef(({className:o,...i},s)=>c.createElement(Hx,{ref:s,iconNode:r,className:Tm(`lucide-${Nx(e)}`,o),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=ge("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=ge("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=ge("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=ge("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=ge("Baby",[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=ge("BellOff",[["path",{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5",key:"o7mx20"}],["path",{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7",key:"16f1lm"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=ge("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=ge("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=ge("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=ge("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=ge("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=ge("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=ge("Bus",[["path",{d:"M8 6v6",key:"18i7km"}],["path",{d:"M15 6v6",key:"1sg6z9"}],["path",{d:"M2 12h19.6",key:"de5uta"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",key:"1wwztk"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M9 18h5",key:"lrx6i"}],["circle",{cx:"16",cy:"18",r:"2",key:"1v4tcr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=ge("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=ge("CalendarPlus",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=ge("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=ge("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=ge("Carrot",[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46",key:"rfqxbe"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z",key:"6b25w4"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z",key:"fn65lo"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=ge("ChartCandlestick",[["path",{d:"M9 5v4",key:"14uxtq"}],["rect",{width:"4",height:"6",x:"7",y:"9",rx:"1",key:"f4fvz0"}],["path",{d:"M9 15v2",key:"r5rk32"}],["path",{d:"M17 3v2",key:"1l2re6"}],["rect",{width:"4",height:"8",x:"15",y:"5",rx:"1",key:"z38je5"}],["path",{d:"M17 13v3",key:"5l0wba"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=ge("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=ge("ChartLine",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=ge("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=ge("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=ge("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=ge("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=ge("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=ge("Clapperboard",[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",key:"1tn4o7"}],["path",{d:"m6.2 5.3 3.1 3.9",key:"iuk76l"}],["path",{d:"m12.4 3.4 3.1 4",key:"6hsd6n"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",key:"ltgou9"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=ge("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=ge("Coffee",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=ge("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=ge("Columns3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=ge("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=ge("Droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=ge("Dumbbell",[["path",{d:"M14.4 14.4 9.6 9.6",key:"ic80wn"}],["path",{d:"M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z",key:"nnl7wr"}],["path",{d:"m21.5 21.5-1.4-1.4",key:"1f1ice"}],["path",{d:"M3.9 3.9 2.5 2.5",key:"1evmna"}],["path",{d:"M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z",key:"yhosts"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=ge("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=ge("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=ge("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=ge("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=ge("Fuel",[["line",{x1:"3",x2:"15",y1:"22",y2:"22",key:"xegly4"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9",key:"xcnuvu"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",key:"16j0yd"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",key:"7cu91f"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=ge("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=ge("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=ge("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=ge("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=ge("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=ge("HeartPulse",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=ge("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hi=ge("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yl=ge("ImagePlus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=ge("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=ge("Images",[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18",key:"nf6bnh"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2",key:"12espp"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=ge("IndianRupee",[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=ge("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=ge("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=ge("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=ge("LayoutList",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=ge("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=ge("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=ge("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=ge("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=ge("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=ge("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=ge("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=ge("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=ge("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=ge("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=ge("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=ge("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=ge("PanelLeftOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=ge("PartyPopper",[["path",{d:"M5.8 11.3 2 22l10.7-3.79",key:"gwxi1d"}],["path",{d:"M4 3h.01",key:"1vcuye"}],["path",{d:"M22 8h.01",key:"1mrtc2"}],["path",{d:"M15 2h.01",key:"1cjtqr"}],["path",{d:"M22 20h.01",key:"1mrys2"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",key:"hbicv8"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17",key:"1i94pl"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7",key:"1cofks"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",key:"4kbmks"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=ge("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=ge("PawPrint",[["circle",{cx:"11",cy:"4",r:"2",key:"vol9p0"}],["circle",{cx:"18",cy:"8",r:"2",key:"17gozi"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",key:"1ydw1z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=ge("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=ge("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=ge("PiggyBank",[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z",key:"1ivx2i"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h.01",key:"xkw8gn"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=ge("Pill",[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=ge("Plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=ge("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=ge("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=ge("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=ge("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=ge("ReceiptText",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=ge("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=ge("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=ge("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=ge("Scissors",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=ge("ScrollText",[["path",{d:"M15 12h-5",key:"r7krc0"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=ge("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=ge("Shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=ge("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=ge("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=ge("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zl=ge("Sprout",[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=ge("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wi=ge("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=ge("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=ge("Sunrise",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=ge("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=ge("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=ge("TramFront",[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M12 3v8",key:"1h2ygw"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m18 22-2-3",key:"1p0ohu"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M16 15h.01",key:"rnfrdf"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kl=ge("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=ge("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=ge("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=ge("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=ge("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pr=ge("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=ge("Tv",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=ge("Undo2",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=ge("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=ge("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=ge("WashingMachine",[["path",{d:"M3 6h3",key:"155dbl"}],["path",{d:"M17 6h.01",key:"e2y6kg"}],["rect",{width:"18",height:"20",x:"3",y:"2",rx:"2",key:"od3kk9"}],["circle",{cx:"12",cy:"13",r:"5",key:"nlbqau"}],["path",{d:"M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5",key:"17lach"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=ge("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=ge("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=ge("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=ge("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=ge("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),og="anvil_token",Um=()=>localStorage.getItem(og),Ky=e=>localStorage.setItem(og,e),Hd=()=>localStorage.removeItem(og),ee=async(e,r,n)=>{const o={};n!==void 0&&(o["Content-Type"]="application/json");const i=Um();i&&(o.Authorization=`Bearer ${i}`);const s=await fetch(`/api${r}`,{method:e,headers:o,body:n!==void 0?JSON.stringify(n):void 0});if(s.status===401)throw Hd(),window.dispatchEvent(new Event("anvil-unauthorized")),new Error("Not authenticated");if(s.status===204)return null;if(!s.ok){const l=await s.text();let d=l;try{d=JSON.parse(l).detail||l}catch{}throw new Error(d||`HTTP ${s.status}`)}return s.json()},_={me:()=>ee("GET","/auth/me"),signInWithGoogle:()=>{window.location.href="/api/auth/google"},getPillars:()=>ee("GET","/pillars"),getFocus:()=>ee("GET","/focus"),createFocus:e=>ee("POST","/focus",e),deleteFocus:e=>ee("DELETE",`/focus/${e}`),addScreenTime:(e,r)=>ee("POST","/screentime",{screen:e,seconds:r}),getScreenTime:()=>ee("GET","/screentime"),getPayouts:()=>ee("GET","/rewards/payouts"),createPayout:e=>ee("POST","/rewards/payouts",e),deletePayout:e=>ee("DELETE",`/rewards/payouts/${e}`),getRewardRates:()=>ee("GET","/rewards/rates"),setRewardRate:e=>ee("POST","/rewards/rates",e),getMedia:()=>ee("GET","/media"),createMedia:e=>ee("POST","/media",e),updateMedia:(e,r)=>ee("PUT",`/media/${e}`,r),deleteMedia:e=>ee("DELETE",`/media/${e}`),restoreMedia:e=>ee("POST",`/media/${e}/restore`),getDecks:()=>ee("GET","/spiritual/decks"),createDeck:e=>ee("POST","/spiritual/decks",e),deleteDeck:e=>ee("DELETE",`/spiritual/decks/${e}`),getGoldenGoals:()=>ee("GET","/golden/goals"),getGoldenGoal:e=>ee("GET",`/golden/goals/${e}`),createGolden:e=>ee("POST","/golden/goals",e),updateGolden:(e,r)=>ee("PUT",`/golden/goals/${e}`,r),achieveGolden:e=>ee("POST",`/golden/goals/${e}/achieve`),unachieveGolden:e=>ee("POST",`/golden/goals/${e}/unachieve`),upsertGoldenEntry:(e,r)=>ee("PUT",`/golden/goals/${e}/entry`,r),deleteGolden:e=>ee("DELETE",`/golden/goals/${e}`),restoreGolden:e=>ee("POST",`/golden/goals/${e}/restore`),logTesla369:e=>ee("POST",`/golden/goals/${e}/369/log`),undoTesla369:e=>ee("DELETE",`/golden/goals/${e}/369/log`),getKickstart:()=>ee("GET","/kickstart/videos"),createKickstart:e=>ee("POST","/kickstart/videos",e),updateKickstart:(e,r)=>ee("PUT",`/kickstart/videos/${e}`,r),deleteKickstart:e=>ee("DELETE",`/kickstart/videos/${e}`),restoreKickstart:e=>ee("POST",`/kickstart/videos/${e}/restore`),getTxns:()=>ee("GET","/finance/txns"),createTxn:e=>ee("POST","/finance/txns",e),updateTxn:(e,r)=>ee("PUT",`/finance/txns/${e}`,r),deleteTxn:e=>ee("DELETE",`/finance/txns/${e}`),restoreTxn:e=>ee("POST",`/finance/txns/${e}/restore`),getInvestments:()=>ee("GET","/finance/investments"),createInvestment:e=>ee("POST","/finance/investments",e),updateInvestment:(e,r)=>ee("PUT",`/finance/investments/${e}`,r),deleteInvestment:e=>ee("DELETE",`/finance/investments/${e}`),restoreInvestment:e=>ee("POST",`/finance/investments/${e}/restore`),getFixedItems:()=>ee("GET","/finance/fixed-items"),createFixedItem:e=>ee("POST","/finance/fixed-items",e),updateFixedItem:(e,r)=>ee("PUT",`/finance/fixed-items/${e}`,r),deleteFixedItem:e=>ee("DELETE",`/finance/fixed-items/${e}`),getExpenses:()=>ee("GET","/expenses"),createExpenseCategory:e=>ee("POST","/expenses/categories",e),updateExpenseCategory:(e,r)=>ee("PUT",`/expenses/categories/${e}`,r),deleteExpenseCategory:e=>ee("DELETE",`/expenses/categories/${e}`),createExpenseLog:e=>ee("POST","/expenses/logs",e),updateExpenseLog:(e,r)=>ee("PUT",`/expenses/logs/${e}`,r),deleteExpenseLog:e=>ee("DELETE",`/expenses/logs/${e}`),restoreExpenseLog:e=>ee("POST",`/expenses/logs/${e}/restore`),getTrades:()=>ee("GET","/trades"),createTradeEntry:e=>ee("POST","/trades/entries",e),updateTradeEntry:(e,r)=>ee("PUT",`/trades/entries/${e}`,r),deleteTradeEntry:e=>ee("DELETE",`/trades/entries/${e}`),setTradeLearning:(e,r)=>ee("PUT","/trades/learning",{date:e,learning:r}),getSetting:e=>ee("GET",`/settings/${e}`),setSetting:(e,r)=>ee("PUT",`/settings/${e}`,{value:r}),getTasks:()=>ee("GET","/tasks"),createTask:e=>ee("POST","/tasks",e),updateTask:(e,r)=>ee("PUT",`/tasks/${e}`,r),deleteTask:e=>ee("DELETE",`/tasks/${e}`),restoreTask:e=>ee("POST",`/tasks/${e}/restore`),scheduleTask:e=>ee("PUT",`/tasks/${e}/schedule`),getGoals:e=>ee("GET",`/goals${e?`?pillar=${encodeURIComponent(e)}`:""}`),createGoal:e=>ee("POST","/goals",e),updateGoal:(e,r)=>ee("PUT",`/goals/${e}`,r),deleteGoal:e=>ee("DELETE",`/goals/${e}`),restoreGoal:e=>ee("POST",`/goals/${e}/restore`),getHabits:()=>ee("GET","/habits"),createHabit:e=>ee("POST","/habits",e),updateHabit:(e,r)=>ee("PUT",`/habits/${e}`,r),deleteHabit:e=>ee("DELETE",`/habits/${e}`),restoreHabit:e=>ee("POST",`/habits/${e}/restore`),toggleHabitLog:(e,r)=>ee("POST",`/habits/${e}/log/${r}`),setHabitLogNote:(e,r,n)=>ee("PUT",`/habits/${e}/log/${r}/note`,{note:n}),setHabitLogCount:(e,r,n,o)=>ee("PUT",`/habits/${e}/log/${r}/count`,{count:n,note:o}),incrementHabitLog:(e,r)=>ee("POST",`/habits/${e}/log/${r}/increment`),clearHabitLog:(e,r)=>ee("DELETE",`/habits/${e}/log/${r}`),getHabitsYearly:e=>ee("GET",`/habits/yearly/${e}`),getJournalEntry:e=>ee("GET",`/journal/${e}`),getJournalHistory:(e,r)=>ee("GET",`/journal/history/${e}/${r}`),updateJournalMood:(e,r)=>ee("PUT",`/journal/${e}`,{mood:r}),addJournalBullet:(e,r,n)=>ee("POST",`/journal/${e}/bullets`,{section:r,text:n}),deleteJournalBullet:e=>ee("DELETE",`/journal/bullets/${e}`),getSkills:()=>ee("GET","/skills"),createSkill:e=>ee("POST","/skills",e),updateSkill:(e,r)=>ee("PUT",`/skills/${e}`,r),deleteSkill:e=>ee("DELETE",`/skills/${e}`),restoreSkill:e=>ee("POST",`/skills/${e}/restore`),addSkillNote:(e,r,n,o=null)=>ee("POST",`/skills/${e}/notes`,{stage:r,text:n,grp:o}),setSkillGroups:(e,r)=>ee("PUT",`/skills/${e}/groups`,{groups:r}),deleteSkillNote:e=>ee("DELETE",`/skill-notes/${e}`),updateSkillNote:(e,r)=>ee("PUT",`/skill-notes/${e}`,{text:r}),toggleSkillNote:e=>ee("PUT",`/skill-notes/${e}/toggle`),completeSkillStage:(e,r)=>ee("POST",`/skills/${e}/complete-stage`,{stage:r}),getScriptures:()=>ee("GET","/scriptures"),createScripture:e=>ee("POST","/scriptures",e),deleteScripture:e=>ee("DELETE",`/scriptures/${e}`),restoreScripture:e=>ee("POST",`/scriptures/${e}/restore`),addChapter:(e,r)=>ee("POST",`/scriptures/${e}/chapters`,r),updateChapter:(e,r)=>ee("PUT",`/chapters/${e}`,r),deleteChapter:e=>ee("DELETE",`/chapters/${e}`),restoreChapter:e=>ee("POST",`/chapters/${e}/restore`),addInsight:(e,r)=>ee("POST",`/chapters/${e}/insights`,{text:r}),deleteInsight:e=>ee("DELETE",`/insights/${e}`),getTopics:()=>ee("GET","/revision/topics"),createTopic:e=>ee("POST","/revision/topics",e),updateTopic:(e,r)=>ee("PUT",`/revision/topics/${e}`,r),deleteTopic:e=>ee("DELETE",`/revision/topics/${e}`),restoreTopic:e=>ee("POST",`/revision/topics/${e}/restore`),getDueToday:()=>ee("GET","/revision/due-today"),getCalendar:(e,r)=>ee("GET",`/revision/calendar/${e}/${r}`),toggleReviewDone:e=>ee("PUT",`/revision/reviews/${e}/done`),getAffirmations:()=>ee("GET","/affirmations"),createAffirmation:e=>ee("POST","/affirmations",e),updateAffirmation:(e,r)=>ee("PUT",`/affirmations/${e}`,r),deleteAffirmation:e=>ee("DELETE",`/affirmations/${e}`),restoreAffirmation:e=>ee("POST",`/affirmations/${e}/restore`),getAchievements:()=>ee("GET","/achievements"),createAchievement:e=>ee("POST","/achievements",e),updateAchievement:(e,r)=>ee("PUT",`/achievements/${e}`,r),deleteAchievement:e=>ee("DELETE",`/achievements/${e}`),restoreAchievement:e=>ee("POST",`/achievements/${e}/restore`),getDelight:()=>ee("GET","/delight"),createCollection:e=>ee("POST","/delight/collections",e),updateCollection:(e,r)=>ee("PUT",`/delight/collections/${e}`,r),deleteCollection:e=>ee("DELETE",`/delight/collections/${e}`),restoreCollection:e=>ee("POST",`/delight/collections/${e}/restore`),createDelightItem:(e,r)=>ee("POST",`/delight/collections/${e}/items`,r),updateDelightItem:(e,r)=>ee("PUT",`/delight/items/${e}`,r),deleteDelightItem:e=>ee("DELETE",`/delight/items/${e}`),restoreDelightItem:e=>ee("POST",`/delight/items/${e}/restore`),arrangeDelight:(e,r)=>ee("PUT",`/delight/collections/${e}/arrange`,{order:r})},Gd=[{code:"INR",symbol:"₹",locale:"en-IN",label:"Indian Rupee"},{code:"USD",symbol:"$",locale:"en-US",label:"US Dollar"},{code:"EUR",symbol:"€",locale:"de-DE",label:"Euro"},{code:"GBP",symbol:"£",locale:"en-GB",label:"British Pound"},{code:"JPY",symbol:"¥",locale:"ja-JP",label:"Japanese Yen"},{code:"AED",symbol:"د.إ",locale:"en-AE",label:"UAE Dirham"},{code:"AUD",symbol:"A$",locale:"en-AU",label:"Australian Dollar"},{code:"CAD",symbol:"C$",locale:"en-CA",label:"Canadian Dollar"},{code:"SGD",symbol:"S$",locale:"en-SG",label:"Singapore Dollar"}],yu="INR",Vm="anvil_currency",Jl=e=>Gd.find(r=>r.code===e)||Gd[0];function $o(){try{return localStorage.getItem(Vm)||yu}catch{return yu}}function vu(e){try{localStorage.setItem(Vm,e)}catch{}return window.dispatchEvent(new CustomEvent("anvil-currency",{detail:e})),e}function Gi(e,r){const n=Jl(r||$o()),o=Math.round(Number(e)||0);return n.symbol+o.toLocaleString(n.locale)}function Yr(e,r){const n=Jl(r||$o()),o=Number(e)||0;return n.symbol+o.toLocaleString(n.locale,{minimumFractionDigits:2,maximumFractionDigits:2})}function ju(e,r){const n=Jl(r||$o()),o=Math.round(Number(e)||0),i=Math.abs(o);return n.code==="INR"?i>=1e7?n.symbol+(o/1e7).toFixed(i>=1e8?0:1)+"Cr":i>=1e5?n.symbol+(o/1e5).toFixed(i>=1e6?0:1)+"L":i>=1e3?n.symbol+(o/1e3).toFixed(i>=1e4?0:1)+"K":n.symbol+o:i>=1e9?n.symbol+(o/1e9).toFixed(1)+"B":i>=1e6?n.symbol+(o/1e6).toFixed(1)+"M":i>=1e3?n.symbol+(o/1e3).toFixed(1)+"K":n.symbol+o}function Ho(){const[e,r]=c.useState($o());return c.useEffect(()=>{const n=o=>r(o.detail||$o());return window.addEventListener("anvil-currency",n),()=>window.removeEventListener("anvil-currency",n)},[]),Jl(e)}const Nt={financial:{label:"Financial",leaf:"#C9A227",shape:"round"},academic:{label:"Academic",leaf:"#3A7CA5",shape:"pine"},relationship:{label:"Relationship",leaf:"#C2536B",shape:"round"},spiritual:{label:"Spiritual",leaf:"#8268B0",shape:"tall"},health:{label:"Health",leaf:"#4C9A6B",shape:"round"}},rn="health";function ig({species:e=rn,progress:r=1,withered:n=!1,size:o=200}){const i=Math.max(0,Math.min(1,r)),s=Nt[e]||Nt[rn],l=n?"#8A7B63":"#7A5A3C",d=n?"#A99C84":s.leaf,a=n?"#8F8268":d,g=14+i*46,h=112-g,x=i>.14,f=x?8+i*30:0;return t.jsxs("svg",{viewBox:"0 0 120 120",width:o,height:o,style:{display:"block"},children:[t.jsx("ellipse",{cx:"60",cy:"114",rx:20+i*14,ry:"5",fill:"rgba(38,36,31,0.08)"}),!x&&t.jsxs("g",{transform:`translate(60 ${112-i*40})`,children:[t.jsx("path",{d:"M0 8 C0 8 0 -2 0 -6",stroke:"#4C9A6B",strokeWidth:"2.5",fill:"none"}),t.jsx("ellipse",{cx:"-5",cy:"-4",rx:"6",ry:"3.5",fill:"#4C9A6B",transform:"rotate(-30 -5 -4)"}),t.jsx("ellipse",{cx:"5",cy:"-4",rx:"6",ry:"3.5",fill:"#5BB07E",transform:"rotate(30 5 -4)"})]}),x&&t.jsxs(t.Fragment,{children:[t.jsx("rect",{x:60-(2+i*2.5),y:h,width:(2+i*2.5)*2,height:g,rx:"2",fill:l}),s.shape==="pine"?t.jsxs(t.Fragment,{children:[t.jsx("polygon",{points:`60,${h-f*2.2} ${60-f},${h+4} ${60+f},${h+4}`,fill:d}),t.jsx("polygon",{points:`60,${h-f*3} ${60-f*.8},${h-f*.7} ${60+f*.8},${h-f*.7}`,fill:a})]}):s.shape==="tall"?t.jsxs(t.Fragment,{children:[t.jsx("ellipse",{cx:"60",cy:h-f*.3,rx:f*.78,ry:f*1.55,fill:d}),t.jsx("ellipse",{cx:"60",cy:h-f*.9,rx:f*.5,ry:f*1,fill:a,opacity:"0.9"})]}):t.jsxs(t.Fragment,{children:[t.jsx("circle",{cx:"60",cy:h,r:f,fill:d}),t.jsx("circle",{cx:60-f*.7,cy:h+f*.3,r:f*.78,fill:d}),t.jsx("circle",{cx:60+f*.7,cy:h+f*.3,r:f*.78,fill:a}),t.jsx("circle",{cx:"60",cy:h-f*.5,r:f*.8,fill:a,opacity:"0.92"})]})]})]})}function Xy({species:e}){return t.jsx(ig,{species:e,progress:1,size:56})}const ys="#C9A227",ku="#3A7CA5",wu="#C2536B",Su=new Set(["worth","achievements"]),qy=()=>{const e=new Date,r=n=>String(n).padStart(2,"0");return`${e.getFullYear()}-${r(e.getMonth()+1)}-${r(e.getDate())}`},$t=qy(),Zy={kickstart:"Kickstart",golden:"Golden Book",habits:"Habits",quadrant:"Quadrant",goals:"Goals",grove:"Grove",worth:"Rewards",vault:"Wallet",expenses:"Expenses",journal:"Journal",revision:"Revision",affirmations:"Affirmations",skills:"Skills",spiritual:"Spiritual",mindscape:"Mindscape",achievements:"Achievements",delight:"Delights"},Ud=e=>{const r=Math.round(e||0),n=Math.floor(r/60),o=r%60;return n?`${n}h ${o}m`:`${o}m`},Jy=e=>Ud((e||0)/60),Cu=[{id:"Q1",label:"Do Now"},{id:"Q2",label:"Schedule"},{id:"Q3",label:"Delegate"},{id:"Q4",label:"Drop"}],zu=["Financial","Academic","Relationship","Health","Spiritual"];function e0({onNavigate:e}){var Go,at;const r=Ho(),n=N=>Yr(N,r.code),[o,i]=c.useState(!1),[s,l]=c.useState([]),[d,a]=c.useState([]),[g,h]=c.useState({sessions:[],stats:{}}),[x,f]=c.useState([]),[E,z]=c.useState([]),[k,R]=c.useState([]),[b,p]=c.useState([]),[m,T]=c.useState({}),[j,C]=c.useState({}),[L,M]=c.useState([]),[w,D]=c.useState([]),[ie,B]=c.useState([]),[I,Z]=c.useState([]),[be,ae]=c.useState([]),ve=c.useCallback(()=>{Promise.all([_.getHabits().catch(()=>[]),_.getTasks().catch(()=>[]),_.getFocus().catch(()=>({sessions:[],stats:{}})),_.getScreenTime().catch(()=>[]),_.getRewardRates().catch(()=>[]),_.getPayouts().catch(()=>[]),_.getAchievements().catch(()=>[]),_.getSetting("grove_rates").catch(()=>null),_.getSetting("reward_rates").catch(()=>null),_.getExpenses().catch(()=>({categories:[],logs:[]})),_.getInvestments().catch(()=>[]),_.getDueToday().catch(()=>[]),_.getSkills().catch(()=>[])]).then(([N,ye,Ht,Qt,dr,Br,Uo,Dr,no,Or,ts,Vo,ea])=>{l(N||[]),a(ye||[]),h(Ht||{sessions:[],stats:{}}),f(Array.isArray(Qt)?Qt:[]),z(dr||[]),R(Br||[]),p(Array.isArray(Uo)?Uo:[]),T((Dr==null?void 0:Dr.value)||{}),C((no==null?void 0:no.value)||{}),M((Or==null?void 0:Or.categories)||[]),D((Or==null?void 0:Or.logs)||[]),B(ts||[]),Z(Vo||[]),ae(ea||[]),i(!0)}).catch(()=>i(!0))},[]);c.useEffect(()=>{ve()},[ve]);const G=s.filter(N=>(N.logs||[]).includes($t)).length;d.filter(N=>(N.start_datetime||"").slice(0,10)===$t);const V=c.useMemo(()=>{const N={Q1:0,Q2:0,Q3:0,Q4:0};return d.forEach(ye=>{N[ye.quadrant]!==void 0&&N[ye.quadrant]++}),N},[d]),oe=((Go=g.stats)==null?void 0:Go.today_minutes)||0,Q=((at=g.stats)==null?void 0:at.today_trees)||0,ue={};E.forEach(N=>{var ye;(ue[ye=`${N.kind}:${N.rkey}`]||(ue[ye]=[])).push({eff:N.eff_date,rate:N.rate})}),Object.values(ue).forEach(N=>N.sort((ye,Ht)=>ye.eff.localeCompare(Ht.eff)));const v=(N,ye,Ht)=>{const Qt=ue[`${N}:${ye}`];if(Qt){let dr=null;for(const Br of Qt)if(Br.eff<=Ht)dr=Br.rate;else break;if(dr!==null)return dr}return(N==="focus"?m[ye]:j[ye])||0};let A=0,P=0;(g.sessions||[]).filter(N=>N.completed).forEach(N=>{const ye=(N.started_at||N.created_at||"").slice(0,10);if(ye!==$t)return;const Ht=Nt[N.tree]?N.tree:rn;A+=(N.actual_min||0)/60*v("focus",Ht,ye)}),x.forEach(N=>{!Su.has(N.screen)&&N.date===$t&&(P+=N.seconds/60*v("usage",N.screen,N.date))});const le=b.filter(N=>N.date===$t&&(N.reward||0)>0).reduce((N,ye)=>N+(ye.reward||0),0),De=A+P+le,Y=De>0?A/De*100:0,ne=De>0?P/De*100:0,W=De>0?le/De*100:0;let U=0,ce=0;(g.sessions||[]).filter(N=>N.completed).forEach(N=>{const ye=(N.started_at||N.created_at||"").slice(0,10),Ht=Nt[N.tree]?N.tree:rn;U+=(N.actual_min||0)/60*v("focus",Ht,ye)}),x.forEach(N=>{Su.has(N.screen)||(ce+=N.seconds/60*v("usage",N.screen,N.date))});const F=b.reduce((N,ye)=>N+(ye.reward||0),0),y=k.reduce((N,ye)=>N+ye.amount,0),K=Math.max(0,U+ce+F-y),O=w.filter(N=>N.date===$t).reduce((N,ye)=>N+ye.amount,0);c.useMemo(()=>Object.fromEntries(L.map(N=>[N.id,N])),[L]);const Be=ie.filter(N=>N.date===$t||N.start_date===$t).reduce((N,ye)=>N+(ye.invested||0),0),Ge=c.useMemo(()=>{const N={};return x.forEach(ye=>{ye.date===$t&&(N[ye.screen]=(N[ye.screen]||0)+ye.seconds)}),Object.entries(N).filter(([,ye])=>ye>0).sort((ye,Ht)=>Ht[1]-ye[1])},[x]),Ue=N=>x.some(ye=>ye.screen===N&&ye.date===$t&&ye.seconds>0),it=Ue("spiritual"),ft=Ue("affirmations"),qe=c.useMemo(()=>{const N=[];return be.forEach(ye=>Object.values(ye.notes||{}).forEach(Ht=>Ht.forEach(Qt=>{(Qt.created_at||"").slice(0,10)===$t&&N.push({...Qt,skill:ye.title})}))),N},[be]),Tt=Ue("kickstart"),It=Ue("mindscape"),kt=b.filter(N=>N.date===$t),[pt,wt]=c.useState(null),[u,te]=c.useState(null),[Me,Pe]=c.useState(null),[Se,Oe]=c.useState(null),St=N=>_.toggleHabitLog(N.id,$t).then(ve).catch(()=>{}),Rt=async()=>{const N=pt.title.trim();N&&(await _.createTask({pillar:pt.pillar,title:N,quadrant:pt.quadrant,time_estimate_min:Number(pt.time_estimate_min)||30,start_datetime:null,goal_id:null}),wt(null),ve())},cn=async()=>{await _.createFocus({label:u.label.trim()||null,tree:u.tree,duration_min:Number(u.duration_min)||25}),te(null),ve()},Ji=async()=>{const N=parseFloat(Me.amount)||0;N<=0||!Me.category_id||(await _.createExpenseLog({category_id:Number(Me.category_id),amount:N,note:Me.note.trim(),date:$t}),Pe(null),ve())},es=async()=>{const N=Se.name.trim(),ye=parseFloat(Se.invested)||0;!N||ye<=0||(await _.createInvestment({name:N,kind:Se.kind,invested:ye,current_value:ye,note:Se.note.trim(),date:$t}),Oe(null),ve())},vt=N=>e&&e(N);return o?t.jsxs("div",{style:pe.page,children:[t.jsxs("div",{style:pe.head,children:[t.jsx("div",{style:pe.eyebrow,children:"Anvil · Today"}),t.jsx("h1",{style:pe.h1,children:"Dashboard"}),t.jsx("div",{style:pe.subhead,children:new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})})]}),t.jsx(io,{title:"Used today",onClick:()=>{},children:Ge.length===0?t.jsx(vs,{children:"Nothing opened yet today."}):t.jsx("div",{style:pe.chipWrap,children:Ge.map(([N,ye])=>t.jsxs("button",{onClick:()=>vt(N),style:pe.usedChip,children:[Zy[N]||N," ",t.jsx("span",{style:pe.usedChipTime,children:Jy(ye)})]},N))})}),t.jsxs("div",{style:pe.statGrid,children:[t.jsx(js,{icon:Pd,color:"#4C9A6B",label:"Habits done",value:`${G}/${s.length}`,onClick:()=>vt("habits")}),t.jsx(js,{icon:Od,color:ys,label:Q?`Focus · ${Q} tree${Q===1?"":"s"}`:"Focus time",value:Ud(oe),onClick:()=>vt("grove")}),t.jsx(js,{icon:Cl,color:"#C9772E",label:"Spent today",value:Yr(O,r.code),onClick:()=>vt("expenses")}),t.jsx(js,{icon:Zl,color:"#8268B0",label:"Invested today",value:Yr(Be,r.code),onClick:()=>vt("vault")})]}),t.jsx(io,{title:"Rewards",eyebrow:`Pending ${n(K)}`,onClick:()=>vt("worth"),children:De>0?t.jsxs("div",{style:pe.pieWrap,children:[t.jsxs("div",{style:pe.pieChart,children:[t.jsx("div",{style:{...pe.pieDisc,background:`conic-gradient(${ys} 0 ${Y}%, ${ku} ${Y}% ${Y+ne}%, ${wu} ${Y+ne}% 100%)`}}),t.jsxs("div",{style:pe.pieHole,children:[t.jsx("span",{style:pe.pieHoleVal,children:n(De)}),t.jsx("span",{style:pe.pieHoleLbl,children:"today"})]})]}),t.jsxs("div",{style:pe.pieLegend,children:[t.jsx(Ia,{color:ys,label:"Focus",pct:Y,val:n(A)}),t.jsx(Ia,{color:ku,label:"Usage",pct:ne,val:n(P)}),t.jsx(Ia,{color:wu,label:"Achievement",pct:W,val:n(le)})]})]}):t.jsx(vs,{children:"No rewards earned yet today."})}),I.length>0&&t.jsx(io,{title:"Revision due",eyebrow:`${I.length} pending`,onClick:()=>vt("revision"),children:t.jsx("div",{style:pe.rows,children:I.slice(0,5).map(N=>t.jsxs("div",{style:pe.row,children:[t.jsx("span",{style:{...pe.dot,background:N.is_missed?"#C2536B":"#C9A227"}}),t.jsx("span",{style:pe.rowName,children:N.topic}),t.jsxs("span",{style:pe.rowMeta,children:["Stage ",N.stage]})]},N.review_id))})}),t.jsxs("div",{style:pe.cardGrid,children:[t.jsx(ks,{icon:wi,color:"#8268B0",label:"Spiritual",done:it,doneText:"Read today",idleText:"Not opened yet",onClick:()=>vt("spiritual")}),t.jsx(ks,{icon:ro,color:"#C9A227",label:"Affirmations",done:ft,doneText:"Read today",idleText:"Not opened yet",onClick:()=>vt("affirmations")}),t.jsx(ks,{icon:$m,color:"#C9772E",label:"Kickstart",done:Tt,doneText:"Watched today",idleText:"Not watched yet",onClick:()=>vt("kickstart")}),t.jsx(ks,{icon:Rm,color:"#3A7CA5",label:"Mindscape",done:It,doneText:"Listened today",idleText:"Not listened yet",onClick:()=>vt("mindscape")})]}),t.jsx(io,{title:"Skills enhanced",eyebrow:qe.length?`${qe.length} note${qe.length===1?"":"s"}`:null,onClick:()=>vt("skills"),children:qe.length===0?t.jsx(vs,{children:"No skill notes added today."}):t.jsx("div",{style:pe.rows,children:qe.slice(0,5).map(N=>t.jsxs("div",{style:pe.row,children:[t.jsx("span",{style:{...pe.dot,background:"#4C9A6B"}}),t.jsx("span",{style:pe.rowName,children:N.text}),t.jsx("span",{style:pe.rowMeta,children:N.skill})]},N.id))})}),kt.length>0&&t.jsx(io,{title:"Achievements today",eyebrow:`${kt.length}`,onClick:()=>vt("achievements"),children:t.jsx("div",{style:pe.rows,children:kt.map(N=>t.jsxs("div",{style:pe.row,children:[t.jsx("span",{style:{...pe.dot,background:"#C2536B"}}),t.jsx("span",{style:pe.rowName,children:N.title}),N.reward>0&&t.jsx("span",{style:pe.rowAmt,children:n(N.reward)})]},N.id))})}),t.jsx(io,{title:"Wallet status",onClick:()=>vt("vault"),children:t.jsxs("div",{style:pe.walletRow,children:[t.jsxs("div",{style:pe.walletStat,children:[t.jsx("div",{style:{...pe.walletVal,color:"#C9772E"},children:Yr(O,r.code)}),t.jsx("div",{style:pe.walletLbl,children:"Spent today"})]}),t.jsxs("div",{style:pe.walletStat,children:[t.jsx("div",{style:{...pe.walletVal,color:"#8268B0"},children:Yr(Be,r.code)}),t.jsx("div",{style:pe.walletLbl,children:"Invested today"})]}),t.jsxs("div",{style:pe.walletStat,children:[t.jsx("div",{style:pe.walletVal,children:Yr(K,r.code)}),t.jsx("div",{style:pe.walletLbl,children:"Rewards pending"})]})]})}),t.jsx("div",{style:pe.quickHead,children:"Quick log"}),t.jsxs("div",{style:pe.cardGrid,children:[t.jsxs("div",{style:pe.quickCard,children:[t.jsxs("div",{style:pe.quickTitle,children:[t.jsx(Pd,{size:15,color:"#4C9A6B"})," Habits"]}),s.length===0?t.jsx(vs,{children:"No habits yet."}):t.jsx("div",{style:pe.habitList,children:s.slice(0,6).map(N=>{const ye=(N.logs||[]).includes($t);return t.jsxs("button",{onClick:()=>St(N),style:{...pe.habitChip,...ye?pe.habitChipOn:{}},children:[ye&&t.jsx(Wn,{size:12})," ",N.name]},N.id)})})]}),t.jsxs("div",{style:pe.quickCard,children:[t.jsxs("div",{style:pe.quickTitle,children:[t.jsx(Zc,{size:15,color:"#3A7CA5"})," Quadrant"]}),t.jsx("div",{style:pe.quadGrid,children:Cu.map(N=>t.jsxs("div",{style:pe.quadCell,children:[t.jsx("span",{style:pe.quadLabel,children:N.label}),t.jsx("span",{style:pe.quadCount,children:V[N.id]})]},N.id))}),t.jsxs("button",{onClick:()=>wt({title:"",pillar:zu[0],quadrant:"Q1",time_estimate_min:30}),style:pe.quickAddBtn,children:[t.jsx(Ze,{size:14})," Add task"]})]}),t.jsxs("div",{style:pe.quickCard,children:[t.jsxs("div",{style:pe.quickTitle,children:[t.jsx(Od,{size:15,color:ys})," Grove focus"]}),t.jsxs("div",{style:pe.quickStat,children:[Ud(oe)," today"]}),t.jsxs("button",{onClick:()=>te({label:"",tree:rn,duration_min:25}),style:pe.quickAddBtn,children:[t.jsx(Ze,{size:14})," Start session"]})]}),t.jsxs("div",{style:pe.quickCard,children:[t.jsxs("div",{style:pe.quickTitle,children:[t.jsx(Cl,{size:15,color:"#C9772E"})," Expense / Investment"]}),t.jsxs("div",{style:pe.quickStat,children:[Yr(O,r.code)," spent today"]}),t.jsxs("div",{style:{display:"flex",gap:8},children:[t.jsxs("button",{onClick:()=>{var N;return Pe({category_id:((N=L[0])==null?void 0:N.id)||"",amount:"",note:""})},style:{...pe.quickAddBtn,flex:1},children:[t.jsx(Ze,{size:14})," Expense"]}),t.jsxs("button",{onClick:()=>Oe({name:"",kind:"Stocks",invested:"",note:""}),style:{...pe.quickAddBtn,flex:1},children:[t.jsx(Ze,{size:14})," Invest"]})]})]})]}),pt&&t.jsxs(ws,{title:"Add task",onClose:()=>wt(null),children:[t.jsx("input",{autoFocus:!0,placeholder:"Task title",value:pt.title,onChange:N=>wt(ye=>({...ye,title:N.target.value})),style:pe.input}),t.jsx("select",{value:pt.pillar,onChange:N=>wt(ye=>({...ye,pillar:N.target.value})),style:pe.input,children:zu.map(N=>t.jsx("option",{value:N,children:N},N))}),t.jsx("select",{value:pt.quadrant,onChange:N=>wt(ye=>({...ye,quadrant:N.target.value})),style:pe.input,children:Cu.map(N=>t.jsxs("option",{value:N.id,children:[N.id," · ",N.label]},N.id))}),t.jsx("input",{type:"number",min:"1",placeholder:"Estimate (min)",value:pt.time_estimate_min,onChange:N=>wt(ye=>({...ye,time_estimate_min:N.target.value})),style:pe.input}),t.jsx(Ss,{onCancel:()=>wt(null),onSave:Rt,disabled:!pt.title.trim()})]}),u&&t.jsxs(ws,{title:"Start focus session",onClose:()=>te(null),children:[t.jsx("input",{autoFocus:!0,placeholder:"Label (optional)",value:u.label,onChange:N=>te(ye=>({...ye,label:N.target.value})),style:pe.input}),t.jsx("select",{value:u.tree,onChange:N=>te(ye=>({...ye,tree:N.target.value})),style:pe.input,children:Object.entries(Nt).map(([N,ye])=>t.jsx("option",{value:N,children:ye.label},N))}),t.jsx("input",{type:"number",min:"1",placeholder:"Duration (min)",value:u.duration_min,onChange:N=>te(ye=>({...ye,duration_min:N.target.value})),style:pe.input}),t.jsx(Ss,{onCancel:()=>te(null),onSave:cn,disabled:!Number(u.duration_min)})]}),Me&&t.jsxs(ws,{title:"Log expense",onClose:()=>Pe(null),children:[t.jsx("select",{value:Me.category_id,onChange:N=>Pe(ye=>({...ye,category_id:N.target.value})),style:pe.input,children:L.map(N=>t.jsx("option",{value:N.id,children:N.name},N.id))}),t.jsx("input",{autoFocus:!0,type:"number",min:"0",step:"0.01",placeholder:`Amount (${r.symbol})`,value:Me.amount,onChange:N=>Pe(ye=>({...ye,amount:N.target.value})),style:pe.input}),t.jsx("input",{placeholder:"Note (optional)",value:Me.note,onChange:N=>Pe(ye=>({...ye,note:N.target.value})),style:pe.input}),t.jsx(Ss,{onCancel:()=>Pe(null),onSave:Ji,disabled:!(parseFloat(Me.amount)>0&&Me.category_id)})]}),Se&&t.jsxs(ws,{title:"Log investment",onClose:()=>Oe(null),children:[t.jsx("input",{autoFocus:!0,placeholder:"Name",value:Se.name,onChange:N=>Oe(ye=>({...ye,name:N.target.value})),style:pe.input}),t.jsx("select",{value:Se.kind,onChange:N=>Oe(ye=>({...ye,kind:N.target.value})),style:pe.input,children:["Stocks","Mutual Fund","Gold","Real Estate","Fixed Deposit","Crypto","Other"].map(N=>t.jsx("option",{value:N,children:N},N))}),t.jsx("input",{type:"number",min:"0",step:"0.01",placeholder:`Invested (${r.symbol})`,value:Se.invested,onChange:N=>Oe(ye=>({...ye,invested:N.target.value})),style:pe.input}),t.jsx("input",{placeholder:"Note (optional)",value:Se.note,onChange:N=>Oe(ye=>({...ye,note:N.target.value})),style:pe.input}),t.jsx(Ss,{onCancel:()=>Oe(null),onSave:es,disabled:!(Se.name.trim()&&parseFloat(Se.invested)>0)})]})]}):t.jsx("div",{style:pe.loading,children:"Loading…"})}function io({title:e,eyebrow:r,onClick:n,children:o}){return t.jsxs("div",{style:pe.card,children:[t.jsxs("div",{style:pe.cardTitleRow,children:[t.jsxs("button",{onClick:n,style:pe.cardTitleBtn,children:[e," ",t.jsx(Ux,{size:13})]}),r&&t.jsx("span",{style:pe.cardEyebrow,children:r})]}),o]})}function vs({children:e}){return t.jsx("div",{style:pe.muted,children:e})}function Ia({color:e,label:r,pct:n,val:o}){return t.jsxs("div",{style:pe.pieLegRow,children:[t.jsx("span",{style:{...pe.legendDot,background:e}}),t.jsx("span",{style:pe.pieLegName,children:r}),t.jsxs("span",{style:pe.pieLegPct,children:[Math.round(n),"%"]}),t.jsx("span",{style:pe.pieLegMin,children:o})]})}function js({icon:e,color:r,label:n,value:o,sub:i,onClick:s}){return t.jsxs("button",{onClick:s,style:pe.statTile,children:[t.jsx("div",{style:{...pe.statIcon,background:`${r}1A`,color:r},children:t.jsx(e,{size:17})}),t.jsxs("div",{style:{minWidth:0},children:[t.jsx("div",{style:pe.statVal,children:o}),t.jsxs("div",{style:pe.statLbl,children:[n,i?` · ${i}`:""]})]})]})}function ks({icon:e,color:r,label:n,done:o,doneText:i,idleText:s,onClick:l}){return t.jsxs("button",{onClick:l,style:pe.miniCard,children:[t.jsx("div",{style:{...pe.statIcon,background:`${r}1A`,color:r},children:t.jsx(e,{size:16})}),t.jsx("div",{style:pe.miniLabel,children:n}),t.jsx("div",{style:{...pe.miniStatus,color:o?"#4C9A6B":"var(--text-3)"},children:o?i:s})]})}function ws({title:e,onClose:r,children:n}){return t.jsx("div",{style:pe.modalOverlay,onClick:r,children:t.jsxs("div",{style:pe.modalCard,onClick:o=>o.stopPropagation(),children:[t.jsx("div",{style:pe.modalTitle,children:e}),t.jsx("div",{style:pe.modalBody,children:n})]})})}function Ss({onCancel:e,onSave:r,disabled:n}){return t.jsxs("div",{style:pe.modalActions,children:[t.jsx("button",{onClick:e,style:pe.modalCancel,children:"Cancel"}),t.jsx("button",{onClick:r,disabled:n,style:{...pe.modalConfirm,...n?{opacity:.5,cursor:"not-allowed"}:{}},children:"Save"})]})}const pe={loading:{padding:40,textAlign:"center",color:"var(--text-3)",fontFamily:"'Inter',system-ui,sans-serif"},page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},chipWrap:{display:"flex",gap:8,flexWrap:"wrap"},usedChip:{border:"1px solid var(--border)",background:"var(--surface-2)",color:"var(--text-2)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit",display:"flex",alignItems:"center",gap:6},usedChipTime:{color:"var(--text-3)",fontWeight:600,fontSize:11.5},statGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:10,marginBottom:14},statTile:{display:"flex",alignItems:"center",gap:10,border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,padding:"12px 14px",cursor:"pointer",fontFamily:"inherit",textAlign:"left",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},statIcon:{width:34,height:34,borderRadius:10,display:"grid",placeItems:"center",flexShrink:0},statVal:{fontSize:16,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},statLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginTop:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},card:{background:"var(--surface)",borderRadius:16,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:10,marginBottom:10},cardTitleBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"none",cursor:"pointer",padding:0,fontFamily:"'Fraunces',Georgia,serif",fontSize:16,fontWeight:700,color:"var(--text)"},cardEyebrow:{fontSize:12,fontWeight:700,color:"var(--text-3)"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"10px 0"},rows:{display:"flex",flexDirection:"column",gap:2},row:{display:"flex",alignItems:"center",gap:8,padding:"7px 0",borderBottom:"1px solid var(--border)"},dot:{width:10,height:10,borderRadius:3,flexShrink:0},rowName:{flex:1,fontSize:13.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},rowMeta:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,flexShrink:0},rowAmt:{fontSize:13.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",flexShrink:0},pieWrap:{display:"flex",alignItems:"center",gap:20,flexWrap:"wrap"},pieChart:{position:"relative",width:110,height:110,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:66,height:66,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:12.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:9.5,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:160,display:"flex",flexDirection:"column",gap:8},pieLegRow:{display:"flex",alignItems:"center",gap:8},legendDot:{width:10,height:10,borderRadius:3,flexShrink:0},pieLegName:{flex:1,fontSize:13,fontWeight:600},pieLegPct:{fontSize:12.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",width:40,textAlign:"right"},pieLegMin:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,minWidth:58,textAlign:"right"},cardGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:10,marginBottom:14},miniCard:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:6,border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,padding:"12px 14px",cursor:"pointer",fontFamily:"inherit",textAlign:"left",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},miniLabel:{fontSize:13,fontWeight:700,color:"var(--text)"},miniStatus:{fontSize:11.5,fontWeight:600},walletRow:{display:"flex",gap:10},walletStat:{flex:1,textAlign:"center"},walletVal:{fontSize:17,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},walletLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginTop:2},quickHead:{fontSize:13,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.06em",margin:"6px 0 10px"},quickCard:{border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,padding:"14px 16px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column",gap:10},quickTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13.5,fontWeight:700,color:"var(--text)"},quickStat:{fontSize:13,color:"var(--text-2)",fontWeight:600},quickAddBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface-2)",color:"var(--text)",padding:"8px 10px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},habitList:{display:"flex",flexWrap:"wrap",gap:6},habitChip:{border:"1px solid var(--border)",background:"var(--surface-2)",color:"var(--text-2)",padding:"5px 10px",borderRadius:14,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit",display:"flex",alignItems:"center",gap:4},habitChipOn:{background:"#4C9A6B",color:"#fff",borderColor:"#4C9A6B"},quadGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6},quadCell:{display:"flex",justifyContent:"space-between",alignItems:"center",border:"1px solid var(--border)",borderRadius:8,padding:"5px 8px",fontSize:11.5},quadLabel:{color:"var(--text-3)",fontWeight:600},quadCount:{fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",fontSize:13},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:200,display:"grid",placeItems:"center",padding:16},modalCard:{background:"var(--surface)",color:"var(--text)",borderRadius:16,padding:"20px 20px 16px",width:340,maxWidth:"100%",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)"},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},modalBody:{display:"flex",flexDirection:"column",gap:8},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface-2)",outline:"none"},modalActions:{display:"flex",gap:8,marginTop:6},modalCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},modalConfirm:{flex:1,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},t0=7e3;function er(e,r,n){const[o,i]=c.useState([]),s=c.useRef({}),l=c.useCallback(async(g,h="Item")=>{await e(g),n();const x=`${g}-${Date.now()}`;i(f=>[...f,{id:x,itemId:g,label:h}]),s.current[x]=setTimeout(()=>{i(f=>f.filter(E=>E.id!==x)),delete s.current[x]},t0)},[e,n]),d=c.useCallback(async g=>{const h=o.find(x=>x.id===g);h&&(clearTimeout(s.current[g]),delete s.current[g],i(x=>x.filter(f=>f.id!==g)),await r(h.itemId),n())},[o,r,n]),a=c.useCallback(g=>{clearTimeout(s.current[g]),delete s.current[g],i(h=>h.filter(x=>x.id!==g))},[]);return{deleteItem:l,toasts:o,handleUndo:d,handleDismiss:a}}function tr({toasts:e,onUndo:r,onDismiss:n}){return t.jsx("div",{style:uo.container,children:e.map(o=>t.jsx(r0,{toast:o,onUndo:r,onDismiss:n},o.id))})}function r0({toast:e,onUndo:r,onDismiss:n}){const[o,i]=c.useState(100);return c.useEffect(()=>{const s=Date.now(),l=7e3,d=setInterval(()=>{const a=Date.now()-s,g=Math.max(0,100-a/l*100);i(g),g===0&&clearInterval(d)},50);return()=>clearInterval(d)},[]),t.jsxs("div",{style:uo.toast,children:[t.jsx("div",{style:{...uo.bar,width:`${o}%`}}),t.jsxs("span",{style:uo.msg,children:[e.label," deleted"]}),t.jsx("button",{style:uo.undoBtn,onClick:()=>r(e.id),children:"Undo"}),t.jsx("button",{style:uo.closeBtn,onClick:()=>n(e.id),children:"×"})]})}const uo={container:{position:"fixed",bottom:24,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",gap:8,zIndex:999,pointerEvents:"none"},toast:{position:"relative",display:"flex",alignItems:"center",gap:12,background:"var(--accent-strong)",color:"#fff",borderRadius:10,padding:"12px 16px",fontSize:13.5,fontFamily:"'Inter', system-ui, sans-serif",boxShadow:"0 4px 20px rgba(0,0,0,0.25)",minWidth:260,overflow:"hidden",pointerEvents:"all"},bar:{position:"absolute",bottom:0,left:0,height:3,background:"#4C9A6B",transition:"width 0.05s linear",borderRadius:"0 0 0 10px"},msg:{flex:1,fontWeight:500},undoBtn:{border:"1px solid rgba(255,255,255,0.3)",background:"none",color:"#4C9A6B",fontWeight:700,fontSize:13,padding:"4px 10px",borderRadius:6,cursor:"pointer",fontFamily:"inherit"},closeBtn:{border:"none",background:"none",color:"rgba(255,255,255,0.5)",cursor:"pointer",fontSize:18,lineHeight:1,padding:"0 2px"}},Hr={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},n0=[{id:"Q1",symbol:"™",title:"Do Now",sub:"Important · Urgent",accent:"#C2536B"},{id:"Q2",symbol:"©",title:"Schedule",sub:"Important · Not Urgent",accent:"#3A7CA5"},{id:"Q3",symbol:"®",title:"Delegate",sub:"Not Important · Urgent",accent:"#C9A227"},{id:"Q4",symbol:"•",title:"Drop",sub:"Not Important · Not Urgent",accent:"#8A8780"}];function Ym(){return new Date().toLocaleDateString("en-CA",{timeZone:"Asia/Kolkata"})}function Qm(){const e=new Date(new Date().toLocaleString("en-US",{timeZone:"Asia/Kolkata"})),n=e.getMinutes()<30?30:0,o=n===0?e.getHours()+1:e.getHours();return`${String(o%24).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function Tu(e,r){const[n,o]=e.split(":").map(Number),i=n*60+o+r;return`${String(Math.floor(i/60)%24).padStart(2,"0")}:${String(i%60).padStart(2,"0")}`}function o0(e){return e?new Date(e).toLocaleString("en-IN",{timeZone:"Asia/Kolkata",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit",hour12:!0}):""}const Cs=()=>({title:"",pillar:"Financial",est:30,date:Ym(),startTime:Qm()});function i0(){const[e,r]=c.useState([]),[n,o]=c.useState([]),[i,s]=c.useState("All"),[l,d]=c.useState(null),[a,g]=c.useState(null),[h,x]=c.useState(Cs()),[f,E]=c.useState(null),[z,k]=c.useState(Cs()),R=c.useCallback(()=>_.getTasks().then(r).catch(console.error),[]);c.useEffect(()=>{R(),_.getGoals().then(A=>o(A.filter(P=>P.horizon==="Weekly"))).catch(()=>{})},[R]);const b=Object.keys(Hr),p=n.filter(A=>i==="All"||A.pillar===i),m=n.find(A=>A.id===l)||null,T=e.filter(A=>l!=null?A.goal_id===l:i!=="All"?A.pillar===i:!0),j=A=>{s(A),d(null),g(null),x(P=>({...P,pillar:A==="All"?"Financial":A}))},C=A=>{d(A),g(null);const P=n.find(se=>se.id===A);P&&x(se=>({...se,pillar:P.pillar}))},{deleteItem:L,toasts:M,handleUndo:w,handleDismiss:D}=er(_.deleteTask,_.restoreTask,R),ie=A=>T.filter(P=>P.quadrant===A),B=A=>ie(A).reduce((P,se)=>P+se.time_estimate_min,0),I=A=>A>=60?`${Math.floor(A/60)}h${A%60?` ${A%60}m`:""}`:`${A}m`,Z=async A=>{if(!h.title.trim())return;const P=h.date&&h.startTime?`${h.date}T${h.startTime}:00`:null;await _.createTask({pillar:m?m.pillar:h.pillar,title:h.title,quadrant:A,time_estimate_min:Number(h.est)||30,start_datetime:P,goal_id:l??null}),x(Cs()),g(null),R()},be=(A,P)=>L(A,P),ae=A=>{const P=A.start_datetime?A.start_datetime.split("T"):[];E(A.id),g(null),k({title:A.title,pillar:A.pillar,est:A.time_estimate_min,date:P[0]||Ym(),startTime:(P[1]||"").slice(0,5)||Qm()})},ve=async A=>{if(!z.title.trim())return;const P=z.date&&z.startTime?`${z.date}T${z.startTime}:00`:null;await _.updateTask(A.id,{title:z.title.trim(),pillar:z.pillar,time_estimate_min:Number(z.est)||30,start_datetime:P}),E(null),R()},G=c.useRef(null),V=c.useRef(null),[oe,Q]=c.useState(null),ue=(A,P)=>{var le;const se=document.elementFromPoint(A,P);return se&&se.closest&&((le=se.closest("[data-quad]"))==null?void 0:le.getAttribute("data-quad"))||null};c.useEffect(()=>{const A=se=>{const le=G.current;if(!le)return;const De=Math.hypot(se.clientX-le.startX,se.clientY-le.startY);if(!le.active){if(le.pointerType!=="mouse"){De>12&&(clearTimeout(V.current),G.current=null);return}if(De<6)return;le.active=!0,document.body.style.userSelect="none"}se.cancelable&&se.preventDefault(),le.overQ=ue(se.clientX,se.clientY),Q({id:le.task.id,title:le.task.title,x:se.clientX,y:se.clientY,overQ:le.overQ})},P=()=>{clearTimeout(V.current);const se=G.current;G.current=null,document.body.style.userSelect="",document.body.style.touchAction="",Q(null),se&&se.active&&se.overQ&&se.overQ!==se.task.quadrant&&_.updateTask(se.task.id,{quadrant:se.overQ}).then(R).catch(()=>{})};return window.addEventListener("pointermove",A,{passive:!1}),window.addEventListener("pointerup",P),window.addEventListener("pointercancel",P),()=>{window.removeEventListener("pointermove",A),window.removeEventListener("pointerup",P),window.removeEventListener("pointercancel",P)}},[R]);const v=(A,P)=>{A.pointerType==="mouse"&&A.button!==0||(G.current={task:P,startX:A.clientX,startY:A.clientY,active:!1,pointerType:A.pointerType,overQ:null},A.pointerType!=="mouse"&&(V.current=setTimeout(()=>{const se=G.current;se&&(se.active=!0,document.body.style.touchAction="none",Q({id:se.task.id,title:se.task.title,x:se.startX,y:se.startY,overQ:se.task.quadrant}))},280)))};return t.jsxs("div",{style:Ce.page,children:[t.jsxs("div",{style:Ce.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:Ce.eyebrow,children:"Anvil · Weekly Routing"}),t.jsx("h1",{style:Ce.h1,children:"Weekly Routing"})]}),t.jsx("div",{style:Ce.headRight,children:t.jsx("div",{style:Ce.legend,children:Object.entries(Hr).map(([A,P])=>t.jsxs("span",{style:Ce.legendItem,children:[t.jsx("span",{style:{...Ce.dot,background:P.dot}}),A]},A))})})]}),t.jsx("div",{style:Ce.filterBar,children:["All",...b].map(A=>{const P=i===A,se=Hr[A];return t.jsxs("button",{onClick:()=>j(A),style:{...Ce.pillChip,...P?se?{background:se.dot,color:"#fff",borderColor:se.dot}:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"}:{}},children:[se&&t.jsx("span",{style:{...Ce.dot,background:P?"#fff":se.dot}}),A==="All"?"All":A]},A)})}),t.jsxs("div",{style:Ce.goalBar,children:[t.jsx("button",{onClick:()=>d(null),style:{...Ce.goalChip,...l==null?Ce.goalChipOn:{}},children:"All goals"}),p.map(A=>{var le;const P=((le=Hr[A.pillar])==null?void 0:le.dot)||"#9A968C",se=l===A.id;return t.jsxs("button",{onClick:()=>C(A.id),style:{...Ce.goalChip,...se?{background:P,color:"#fff",borderColor:P}:{}},title:A.title,children:[t.jsx("span",{style:{...Ce.dot,background:se?"#fff":P}}),t.jsx("span",{style:Ce.goalChipText,children:A.title})]},A.id)}),p.length===0&&t.jsxs("span",{style:Ce.goalEmpty,children:["No weekly goals",i!=="All"?` for ${i}`:""," — create them in Goals."]})]}),t.jsx("div",{style:Ce.grid,children:n0.map(A=>{var P,se;return t.jsxs("section",{"data-quad":A.id,style:{...Ce.quad,borderTop:`3px solid ${A.accent}`,...oe&&oe.overQ===A.id&&oe.overQ!==((P=e.find(le=>le.id===oe.id))==null?void 0:P.quadrant)?{outline:`2px dashed ${A.accent}`,outlineOffset:2,background:"var(--hover)"}:{}},children:[t.jsxs("header",{style:Ce.quadHead,children:[t.jsxs("div",{style:Ce.quadTitleRow,children:[t.jsx("span",{style:{...Ce.symbol,color:A.accent},children:A.symbol}),t.jsxs("div",{children:[t.jsx("div",{style:Ce.quadTitle,children:A.title}),t.jsx("div",{style:Ce.quadSub,children:A.sub})]})]}),t.jsx("span",{style:Ce.quadTotal,children:I(B(A.id))})]}),t.jsxs("div",{style:Ce.list,children:[ie(A.id).map(le=>{const De=Hr[le.pillar]||Hr.Financial;return f===le.id?t.jsxs("div",{style:Ce.addBox,children:[t.jsx("input",{autoFocus:!0,placeholder:"Task title",value:z.title,onChange:Y=>k({...z,title:Y.target.value}),onKeyDown:Y=>Y.key==="Enter"&&ve(le),style:Ce.input}),t.jsxs("div",{style:Ce.dateTimeRow,children:[t.jsxs("div",{style:Ce.dateTimeGroup,children:[t.jsx("label",{style:Ce.dtLabel,children:"Date"}),t.jsx("input",{type:"date",value:z.date,onChange:Y=>k({...z,date:Y.target.value}),style:Ce.dtInput})]}),t.jsxs("div",{style:Ce.dateTimeGroup,children:[t.jsx("label",{style:Ce.dtLabel,children:"Start"}),t.jsx("input",{type:"time",value:z.startTime,onChange:Y=>k({...z,startTime:Y.target.value}),style:Ce.dtInput})]}),t.jsxs("div",{style:Ce.dateTimeGroup,children:[t.jsx("label",{style:Ce.dtLabel,children:"End"}),t.jsx("div",{style:Ce.dtEndValue,children:Tu(z.startTime,Number(z.est)||30)})]})]}),t.jsxs("div",{style:Ce.addRow,children:[t.jsx("select",{value:z.pillar,onChange:Y=>k({...z,pillar:Y.target.value}),style:Ce.select,children:Object.keys(Hr).map(Y=>t.jsx("option",{children:Y},Y))}),t.jsx("input",{type:"number",value:z.est,onChange:Y=>k({...z,est:Y.target.value}),style:{...Ce.input,width:60}}),t.jsx("span",{style:Ce.minLabel,children:"min"}),t.jsx("button",{onClick:()=>ve(le),style:Ce.saveBtn,children:t.jsx(He,{size:14})}),t.jsx("button",{onClick:()=>E(null),style:Ce.cancelBtn,children:t.jsx(Re,{size:14})})]})]},le.id):t.jsxs("div",{onPointerDown:Y=>v(Y,le),style:{...Ce.card,background:De.soft,cursor:"grab",touchAction:"pan-y",...(oe==null?void 0:oe.id)===le.id?{opacity:.4}:{}},children:[t.jsx("span",{style:{...Ce.cardBar,background:De.dot}}),t.jsxs("div",{style:Ce.cardBody,children:[t.jsx("div",{style:Ce.cardTitle,children:le.title}),le.start_datetime&&t.jsxs("div",{style:Ce.eventTime,children:[t.jsx(ey,{size:10}),o0(le.start_datetime)]}),t.jsxs("div",{style:Ce.cardMeta,children:[t.jsxs("span",{style:Ce.metaPill,children:[t.jsx("span",{style:{...Ce.dot,background:De.dot,width:7,height:7}}),le.pillar]}),t.jsxs("span",{style:Ce.metaPill,children:[t.jsx(ly,{size:11})," ",I(le.time_estimate_min)]})]})]}),t.jsxs("div",{style:Ce.cardActions,children:[t.jsx("button",{onClick:()=>ae(le),onPointerDown:Y=>Y.stopPropagation(),style:Ce.delBtn,title:"Edit",children:t.jsx(ut,{size:12})}),t.jsx("button",{onClick:()=>be(le.id,le.title),onPointerDown:Y=>Y.stopPropagation(),style:Ce.delBtn,children:t.jsx(Re,{size:13})})]})]},le.id)}),a===A.id?t.jsxs("div",{style:Ce.addBox,children:[t.jsx("input",{autoFocus:!0,placeholder:"Task title",value:h.title,onChange:le=>x({...h,title:le.target.value}),onKeyDown:le=>le.key==="Enter"&&Z(A.id),style:Ce.input}),t.jsxs("div",{style:Ce.dateTimeRow,children:[t.jsxs("div",{style:Ce.dateTimeGroup,children:[t.jsx("label",{style:Ce.dtLabel,children:"Date"}),t.jsx("input",{type:"date",value:h.date,onChange:le=>x({...h,date:le.target.value}),style:Ce.dtInput})]}),t.jsxs("div",{style:Ce.dateTimeGroup,children:[t.jsx("label",{style:Ce.dtLabel,children:"Start"}),t.jsx("input",{type:"time",value:h.startTime,onChange:le=>x({...h,startTime:le.target.value}),style:Ce.dtInput})]}),t.jsxs("div",{style:Ce.dateTimeGroup,children:[t.jsx("label",{style:Ce.dtLabel,children:"End"}),t.jsx("div",{style:Ce.dtEndValue,children:Tu(h.startTime,Number(h.est)||30)})]})]}),t.jsxs("div",{style:Ce.addRow,children:[m?t.jsxs("span",{style:Ce.goalPillarTag,children:[t.jsx("span",{style:{...Ce.dot,background:(se=Hr[m.pillar])==null?void 0:se.dot}})," ",m.pillar]}):t.jsx("select",{value:h.pillar,onChange:le=>x({...h,pillar:le.target.value}),style:Ce.select,children:Object.keys(Hr).map(le=>t.jsx("option",{children:le},le))}),t.jsx("input",{type:"number",value:h.est,onChange:le=>x({...h,est:le.target.value}),style:{...Ce.input,width:60}}),t.jsx("span",{style:Ce.minLabel,children:"min"}),t.jsx("button",{onClick:()=>Z(A.id),style:Ce.saveBtn,children:t.jsx(He,{size:14})}),t.jsx("button",{onClick:()=>{g(null),x(Cs())},style:Ce.cancelBtn,children:t.jsx(Re,{size:14})})]})]}):t.jsxs("button",{onClick:()=>g(A.id),style:Ce.addTrigger,children:[t.jsx(Ze,{size:13})," Add task"]})]})]},A.id)})}),oe&&t.jsx("div",{style:{...Ce.dragClone,left:oe.x+12,top:oe.y+12},children:oe.title}),t.jsx(tr,{toasts:M,onUndo:w,onDismiss:D})]})}const Ce={page:{fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:16,marginBottom:22},headRight:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:10},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces', Georgia, serif"},legend:{display:"flex",gap:14,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"var(--text-2)",fontWeight:500},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},filterBar:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:10},pillChip:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},goalBar:{display:"flex",gap:7,flexWrap:"wrap",alignItems:"center",marginBottom:18,paddingBottom:14,borderBottom:"1px solid var(--border)"},goalChip:{display:"inline-flex",alignItems:"center",gap:6,maxWidth:220,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},goalChipOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},goalChipText:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},goalEmpty:{fontSize:12,color:"var(--text-3)",fontStyle:"italic"},goalPillarTag:{display:"inline-flex",alignItems:"center",gap:6,fontSize:12.5,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"7px 10px",borderRadius:6,flex:1},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:16},quad:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.06)"},quadHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14},quadTitleRow:{display:"flex",gap:10,alignItems:"center"},symbol:{fontSize:20,lineHeight:1},quadTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em"},quadSub:{fontSize:11,color:"var(--text-3)",marginTop:1,letterSpacing:"0.02em"},quadTotal:{fontSize:12,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"3px 9px",borderRadius:20},list:{display:"flex",flexDirection:"column",gap:8},card:{display:"flex",alignItems:"stretch",gap:10,borderRadius:9,padding:"10px 10px 10px 0",overflow:"hidden"},cardBar:{width:3,borderRadius:3,flexShrink:0},cardBody:{flex:1,minWidth:0},cardTitle:{fontSize:13.5,fontWeight:500,lineHeight:1.35,marginBottom:4},eventTime:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"#3A7CA5",fontWeight:500,marginBottom:5},cardMeta:{display:"flex",gap:8,flexWrap:"wrap"},metaPill:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"var(--text-2)",fontWeight:500},cardActions:{display:"flex",flexDirection:"column",gap:4,alignSelf:"center",flexShrink:0},delBtn:{width:30,height:30,borderRadius:8,border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center"},addTrigger:{display:"flex",alignItems:"center",gap:5,fontSize:12.5,color:"var(--text-3)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"8px 10px",cursor:"pointer",fontWeight:500,marginTop:2},addBox:{border:"1px solid var(--border)",borderRadius:9,padding:10,display:"flex",flexDirection:"column",gap:8},dateTimeRow:{display:"flex",gap:8,alignItems:"flex-end"},dateTimeGroup:{display:"flex",flexDirection:"column",gap:3,flex:1},dtLabel:{fontSize:10,fontWeight:600,color:"var(--text-3)",letterSpacing:"0.08em",textTransform:"uppercase"},dtInput:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},dtEndValue:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,color:"var(--text-2)",background:"var(--bg)"},addRow:{display:"flex",alignItems:"center",gap:6},input:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",flex:1,minWidth:0},select:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 8px",fontSize:12.5,fontFamily:"inherit",flex:1},minLabel:{fontSize:11,color:"var(--text-3)"},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"},dragClone:{position:"fixed",zIndex:1e3,pointerEvents:"none",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:8,padding:"8px 12px",fontSize:13,fontWeight:600,color:"var(--text)",boxShadow:"0 8px 24px rgba(0,0,0,0.25)",maxWidth:220,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},gr={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},ni=Object.keys(gr),Qs=["Yearly","Quarterly","Monthly","Weekly"],Wr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Iu=[{label:"Q1 · Jan–Mar",startMonth:0},{label:"Q2 · Apr–Jun",startMonth:3},{label:"Q3 · Jul–Sep",startMonth:6},{label:"Q4 · Oct–Dec",startMonth:9}],Ks=new Date().getFullYear(),so=Array.from({length:8},(e,r)=>Ks-1+r);function s0(e=720){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const gi=864e5,Bt=30,Si=190,lo=e=>new Date(e+"T00:00:00"),Eu=e=>e.toLocaleDateString("en-US",{month:"short",day:"numeric"}),l0=[{key:"yearly",label:"Yearly",horizons:["Yearly"]},{key:"quarterly",label:"Quarterly",horizons:["Quarterly"]},{key:"mw",label:"Monthly & Weekly",horizons:["Monthly","Weekly"]}],Bu={Yearly:"Yr",Quarterly:"Q",Monthly:"Mo",Weekly:"Wk"},a0={Yearly:"Y",Quarterly:"Q",Monthly:"M",Weekly:"W"},Du={Yearly:0,Quarterly:1,Monthly:2,Weekly:3},Ea=e=>Qs[Math.min(Qs.indexOf(e)+1,Qs.length-1)],zs=e=>{if(!e||!e.start_date)return Array.from({length:12},(l,d)=>d);const r=new Date(e.start_date+"T00:00:00"),n=new Date(e.end_date+"T00:00:00"),o=r.getFullYear(),i=r.getMonth(),s=n.getFullYear()>o?11:n.getMonth();return Array.from({length:s-i+1},(l,d)=>i+d)},oi=e=>new Date(e+"T00:00:00").getFullYear(),Km=(e,r,n)=>{const o=(n-1)*7+1,i=Math.min(o+6,new Date(e,r+1,0).getDate()),s=String(r+1).padStart(2,"0");return{start_date:`${e}-${s}-${String(o).padStart(2,"0")}`,end_date:`${e}-${s}-${String(i).padStart(2,"0")}`}},Au=(e,r,n,o=1)=>{const i=r;switch(e){case"Yearly":return{start_date:`${i}-01-01`,end_date:`${i}-12-31`};case"Quarterly":{const s=Math.floor(n/3)*3,l=s+1,d=s+3,a=new Date(i,d,0).getDate();return{start_date:`${i}-${String(l).padStart(2,"0")}-01`,end_date:`${i}-${String(d).padStart(2,"0")}-${a}`}}case"Monthly":{const s=new Date(i,n+1,0).getDate();return{start_date:`${i}-${String(n+1).padStart(2,"0")}-01`,end_date:`${i}-${String(n+1).padStart(2,"0")}-${s}`}}case"Weekly":return Km(i,n,o);default:return{start_date:`${i}-01-01`,end_date:`${i}-12-31`}}},Ci=(e,r)=>{const n=new Date(e+"T00:00:00");return n.setDate(n.getDate()+r),`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`},Tl=(e,r)=>Math.round((new Date(r+"T00:00:00")-new Date(e+"T00:00:00"))/gi)+1,d0=(e,r,n)=>{if(!n||!n.start_date||!n.end_date)return{start_date:e,end_date:r,clamped:!1};const o=Tl(e,r);let i=e,s=r,l=!1;return i<n.start_date&&(i=n.start_date,s=Ci(i,o-1),l=!0),s>n.end_date&&(s=n.end_date,i=Ci(s,-(o-1)),l=!0,i<n.start_date&&(i=n.start_date)),{start_date:i,end_date:s,clamped:l}},c0=(e,r)=>new Date(e,r+1,0).getDate(),Vd=e=>{const r=new Date(e.start_date+"T00:00:00");if(e.horizon==="Monthly")return c0(r.getFullYear(),r.getMonth());if(e.horizon==="Weekly"){const n=Math.min(Math.max(Math.ceil(r.getDate()/7),1),4),o=Km(r.getFullYear(),r.getMonth(),n);return Tl(o.start_date,o.end_date)}return Tl(e.start_date,e.end_date)},Ru=e=>Math.round(Vd(e)*1.5),g0=e=>e.horizon==="Monthly"||e.horizon==="Weekly",u0=e=>{if(!e.start_date)return"";const r=new Date(e.start_date+"T00:00:00"),n=r.getMonth();switch(e.horizon){case"Yearly":{const o=e.end_date?new Date(e.end_date+"T00:00:00").getFullYear():r.getFullYear();return o>r.getFullYear()?`${r.getFullYear()}–${o}`:`${r.getFullYear()}`}case"Quarterly":return`Q${Math.floor(n/3)+1} ${r.getFullYear()}`;case"Monthly":return`${Wr[n]} ${r.getFullYear()}`;case"Weekly":return`${Wr[n]} W${Math.ceil(r.getDate()/7)}`;default:return""}};function p0(){const[e,r]=c.useState([]),[n,o]=c.useState("All"),[i,s]=c.useState({}),[l,d]=c.useState({}),[a,g]=c.useState(null),[h,x]=c.useState(""),[f,E]=c.useState(0),[z,k]=c.useState(1),[R,b]=c.useState(Ks),[p,m]=c.useState(Ks),[T,j]=c.useState("Yearly"),[C,L]=c.useState(ni[0]),[M,w]=c.useState(null),D=s0(),[ie,B]=c.useState(!D),[I,Z]=c.useState("day"),[be,ae]=c.useState(null),ve=c.useRef(null);c.useEffect(()=>{ve.current=be},[be]);const G=c.useRef(e);c.useEffect(()=>{G.current=e},[e]);const[V,oe]=c.useState(null),Q=c.useRef(null);c.useEffect(()=>{Q.current=V},[V]);const ue=c.useRef(null),v=c.useRef(0),[A,P]=c.useState(null),se=c.useRef(null),le=c.useCallback($=>{P($),clearTimeout(se.current),se.current=setTimeout(()=>P(null),2800)},[]),[De,Y]=c.useState(null),ne=c.useRef(null),[W,U]=c.useState(null),[ce,F]=c.useState(null),y=($,J)=>{if(W===J){U(null);return}const Ee=$.currentTarget.getBoundingClientRect(),We=Ee.bottom+220<window.innerHeight;F({right:Math.max(8,window.innerWidth-Ee.right),...We?{top:Ee.bottom+4}:{bottom:window.innerHeight-Ee.top+4}}),U(J)},K=$=>{clearTimeout(ne.current),ne.current=setTimeout(()=>Y($),350)},me=()=>{clearTimeout(ne.current),Y(null)},O=c.useCallback(()=>{_.getGoals().then(r).catch(console.error)},[]);c.useEffect(()=>{O()},[O]);const{deleteItem:Te,toasts:Be,handleUndo:Ge,handleDismiss:Ue}=er(_.deleteGoal,_.restoreGoal,O),it=c.useCallback(async()=>{const $=ve.current;if(ae(null),!$)return;const J=Math.round($.dx/($.pxPerDay||Bt));if(!J)return;let Ee=Ci($.g.start_date,J),We=Ci($.g.end_date,J);if($.g.parent_goal_id){const Qe=G.current.find(Ke=>Ke.id===$.g.parent_goal_id),Ve=d0(Ee,We,Qe);Ve.clamped&&le(`Can't move past "${(Qe==null?void 0:Qe.title)||"parent goal"}" — kept within its dates.`),Ee=Ve.start_date,We=Ve.end_date}(Ee!==$.g.start_date||We!==$.g.end_date)&&(await _.updateGoal($.g.id,{pillar:$.g.pillar,start_date:Ee,end_date:We}),O())},[O,le]),ft=!!be;c.useEffect(()=>{if(!ft)return;const $=Ve=>{v.current=Ve.clientX,ae(Ke=>Ke&&{...Ke,dx:Ve.clientX-Ke.startX})},J=()=>it();window.addEventListener("pointermove",$),window.addEventListener("pointerup",J);const Ee=44,We=16,Qe=setInterval(()=>{const Ve=ue.current;if(!Ve)return;const Ke=Ve.getBoundingClientRect(),ot=v.current;let ke=0;if(ot<Ke.left+Ee?ke=-1:ot>Ke.right-Ee&&(ke=1),!ke)return;const Et=Ve.scrollLeft;Ve.scrollLeft=Math.max(0,Math.min(Et+ke*We,Ve.scrollWidth-Ve.clientWidth));const rr=Ve.scrollLeft-Et;rr&&ae(tt=>tt&&{...tt,startX:tt.startX-rr,dx:ot-(tt.startX-rr)})},16);return()=>{window.removeEventListener("pointermove",$),window.removeEventListener("pointerup",J),clearInterval(Qe)}},[ft,it]);const qe=c.useCallback(async()=>{const $=Q.current;if(oe(null),!$)return;const J=$.g,Ee=Vd(J),We=Ru(J),Qe=Math.max(Ee,Math.min(We,Tl(J.start_date,J.end_date)+Math.round($.dx/Bt)));let Ve=Ci(J.start_date,Qe-1);if(J.parent_goal_id){const Ke=G.current.find(ot=>ot.id===J.parent_goal_id);Ke!=null&&Ke.end_date&&Ve>Ke.end_date&&(Ve=Ke.end_date,le(`Can't extend past "${(Ke==null?void 0:Ke.title)||"parent goal"}" — kept within its dates.`))}Ve!==J.end_date&&Ve>=J.start_date&&(await _.updateGoal(J.id,{end_date:Ve}),O())},[O,le]),Tt=!!V;c.useEffect(()=>{if(!Tt)return;const $=Ee=>oe(We=>We&&{...We,dx:Ee.clientX-We.startX}),J=()=>qe();return window.addEventListener("pointermove",$),window.addEventListener("pointerup",J),()=>{window.removeEventListener("pointermove",$),window.removeEventListener("pointerup",J)}},[Tt,qe]);const It=n==="All",kt=gr[n]||{dot:"var(--text-3)"},pt=It?e:e.filter($=>$.pillar===n),wt=pt.filter($=>!$.parent_goal_id),u=$=>pt.filter(J=>J.parent_goal_id===$),te=$=>d(J=>({...J,[$]:!J[$]})),Me=$=>$.horizon==="Monthly"||$.horizon==="Weekly",Pe=$=>i[$.id]!==void 0?i[$.id]:Me($),Se=$=>s(J=>({...J,[$.id]:!Pe($)})),Oe=($,J=null)=>{g($),x(""),k(1);const Ee=J?oi(J.start_date):Ks;b(Ee),m(Ee),$==="ROOT"&&L(It?ni[0]:n);const We=$==="ROOT"?"Yearly":Ea(J==null?void 0:J.horizon);j(We);const Qe=$==="ROOT"?Array.from({length:12},(Ve,Ke)=>Ke):zs(J);E(We==="Quarterly"?Math.floor(Qe[0]/3)*3:Qe[0]??0)},St=async($,J)=>{if(!h.trim())return;const Ee=(J==null?void 0:J.horizon)??null,We=$==="ROOT"?T:Ea(Ee),Qe=$==="ROOT"?C:(J==null?void 0:J.pillar)||n;let Ve,Ke;if(We==="Yearly"){const ot=Number(R),ke=Math.max(ot,Number(p)||ot);Ve=`${ot}-01-01`,Ke=`${ke}-12-31`}else{const ot=J?oi(J.start_date):Number(R);({start_date:Ve,end_date:Ke}=Au(We,ot,f,z))}await _.createGoal({pillar:Qe,title:h.trim(),horizon:We,parent_goal_id:$==="ROOT"?null:$,start_date:Ve,end_date:Ke}),$!=="ROOT"&&d(ot=>({...ot,[$]:!0})),g(null),x(""),O()},Rt=$=>{const J=$.start_date?new Date($.start_date+"T00:00:00"):new Date,Ee=J.getMonth(),We=Math.min(Math.max(Math.ceil(J.getDate()/7),1),4);w({id:$.id,title:$.title,pillar:$.pillar,horizon:$.horizon,parentGoal:e.find(Qe=>Qe.id===$.parent_goal_id)||null,year:oi($.start_date),endYear:oi($.end_date),month:$.horizon==="Quarterly"?Math.floor(Ee/3)*3:Ee,week:We})},cn=async()=>{if(!M||!M.title.trim())return;let $,J;if(M.horizon==="Yearly"){const Ee=Number(M.year),We=Math.max(Ee,Number(M.endYear)||Ee);$=`${Ee}-01-01`,J=`${We}-12-31`}else{let Ee=M.month;M.horizon==="Weekly"&&M.parentGoal&&(Ee=zs(M.parentGoal)[0]);const We=M.parentGoal?oi(M.parentGoal.start_date):Number(M.year);({start_date:$,end_date:J}=Au(M.horizon,We,Ee,M.week))}await _.updateGoal(M.id,{title:M.title.trim(),pillar:M.pillar,start_date:$,end_date:J}),w(null),O()},Ji=({parentId:$,parentGoal:J,depth:Ee})=>{const We=$==="ROOT",Qe=We?T:Ea((J==null?void 0:J.horizon)??null),Ve=We?Array.from({length:12},(ke,Et)=>Et):zs(J),Ke=Iu.filter(ke=>Ve.includes(ke.startMonth)),ot=ke=>{j(ke),E(0),k(1),m(R)};return t.jsxs("div",{style:{...de.addBox,marginLeft:Ee*24},children:[t.jsx("input",{autoFocus:!0,placeholder:`New ${Qe.toLowerCase()} goal…`,value:h,onChange:ke=>x(ke.target.value),onKeyDown:ke=>{ke.key==="Enter"&&St($,J),ke.key==="Escape"&&g(null)},style:de.input}),We&&It&&t.jsx("select",{value:C,onChange:ke=>L(ke.target.value),style:de.monthSelect,title:"Pillar",children:ni.map(ke=>t.jsx("option",{value:ke,children:ke},ke))}),We&&t.jsx("select",{value:T,onChange:ke=>ot(ke.target.value),style:de.monthSelect,title:"Goal level",children:Qs.map(ke=>t.jsx("option",{value:ke,children:ke},ke))}),Qe==="Yearly"&&t.jsxs(t.Fragment,{children:[t.jsx("select",{value:R,onChange:ke=>{const Et=Number(ke.target.value);b(Et),p<Et&&m(Et)},style:de.monthSelect,title:"Start year",children:so.map(ke=>t.jsx("option",{value:ke,children:ke},ke))}),t.jsx("span",{style:de.toTag,children:"to"}),t.jsx("select",{value:p,onChange:ke=>m(Number(ke.target.value)),style:de.monthSelect,title:"End year (spans multiple years)",children:so.filter(ke=>ke>=R).map(ke=>t.jsx("option",{value:ke,children:ke},ke))})]}),Qe!=="Yearly"&&We&&t.jsx("select",{value:R,onChange:ke=>b(Number(ke.target.value)),style:de.monthSelect,title:"Year",children:so.map(ke=>t.jsx("option",{value:ke,children:ke},ke))}),Qe==="Quarterly"&&t.jsx("select",{value:f,onChange:ke=>E(Number(ke.target.value)),style:de.monthSelect,children:Ke.map(ke=>t.jsx("option",{value:ke.startMonth,children:ke.label},ke.startMonth))}),Qe==="Monthly"&&t.jsx("select",{value:f,onChange:ke=>E(Number(ke.target.value)),style:de.monthSelect,children:Ve.map(ke=>t.jsx("option",{value:ke,children:Wr[ke]},ke))}),Qe==="Weekly"&&t.jsxs(t.Fragment,{children:[We?t.jsx("select",{value:f,onChange:ke=>E(Number(ke.target.value)),style:de.monthSelect,children:Ve.map(ke=>t.jsx("option",{value:ke,children:Wr[ke]},ke))}):t.jsx("span",{style:de.inheritTag,children:Wr[Ve[0]]}),t.jsx("select",{value:z,onChange:ke=>k(Number(ke.target.value)),style:de.monthSelect,children:[1,2,3,4].map(ke=>t.jsxs("option",{value:ke,children:["Week ",ke]},ke))})]}),t.jsx("button",{onClick:()=>St($,J),style:de.saveBtn,children:t.jsx(He,{size:14})}),t.jsx("button",{onClick:()=>g(null),style:de.cancelBtn,children:t.jsx(Re,{size:14})})]})},es=({goal:$,depth:J})=>{var Ke,ot,ke,Et,rr;const Ee=u($.id),We=l[$.id],Qe=$.horizon!=="Weekly";if((M==null?void 0:M.id)===$.id){const tt=zs(M.parentGoal),Ln=Iu.filter(Le=>tt.includes(Le.startMonth)),Yo=!M.parentGoal;return t.jsxs("div",{style:{...de.editBox,marginLeft:J*24},children:[t.jsx("input",{autoFocus:!0,value:M.title,onChange:Le=>w({...M,title:Le.target.value}),onKeyDown:Le=>Le.key==="Enter"&&cn(),style:{...de.input,flex:1}}),t.jsx("select",{value:M.pillar,onChange:Le=>w({...M,pillar:Le.target.value}),style:de.monthSelect,children:ni.map(Le=>t.jsx("option",{children:Le},Le))}),M.horizon==="Yearly"&&t.jsxs(t.Fragment,{children:[t.jsx("select",{value:M.year,onChange:Le=>{const Qo=Number(Le.target.value);w({...M,year:Qo,endYear:Math.max(Qo,M.endYear)})},style:de.monthSelect,title:"Start year",children:so.map(Le=>t.jsx("option",{value:Le,children:Le},Le))}),t.jsx("span",{style:de.toTag,children:"to"}),t.jsx("select",{value:M.endYear,onChange:Le=>w({...M,endYear:Number(Le.target.value)}),style:de.monthSelect,title:"End year (spans multiple years)",children:so.filter(Le=>Le>=M.year).map(Le=>t.jsx("option",{value:Le,children:Le},Le))})]}),M.horizon!=="Yearly"&&Yo&&t.jsx("select",{value:M.year,onChange:Le=>w({...M,year:Number(Le.target.value)}),style:de.monthSelect,title:"Year",children:so.map(Le=>t.jsx("option",{value:Le,children:Le},Le))}),M.horizon==="Quarterly"&&t.jsx("select",{value:M.month,onChange:Le=>w({...M,month:Number(Le.target.value)}),style:de.monthSelect,children:Ln.map(Le=>t.jsx("option",{value:Le.startMonth,children:Le.label},Le.startMonth))}),M.horizon==="Monthly"&&t.jsx("select",{value:M.month,onChange:Le=>w({...M,month:Number(Le.target.value)}),style:de.monthSelect,children:tt.map(Le=>t.jsx("option",{value:Le,children:Wr[Le]},Le))}),M.horizon==="Weekly"&&t.jsxs(t.Fragment,{children:[Yo?t.jsx("select",{value:M.month,onChange:Le=>w({...M,month:Number(Le.target.value)}),style:de.monthSelect,children:tt.map(Le=>t.jsx("option",{value:Le,children:Wr[Le]},Le))}):t.jsx("span",{style:de.inheritTag,children:Wr[tt[0]]}),t.jsx("select",{value:M.week,onChange:Le=>w({...M,week:Number(Le.target.value)}),style:de.monthSelect,children:[1,2,3,4].map(Le=>t.jsxs("option",{value:Le,children:["Week ",Le]},Le))})]}),t.jsx("button",{onClick:cn,style:de.saveBtn,children:t.jsx(He,{size:14})}),t.jsx("button",{onClick:()=>w(null),style:de.cancelBtn,children:t.jsx(Re,{size:14})})]})}return t.jsxs("div",{children:[t.jsxs("div",{style:{...de.row,marginLeft:J*24,background:J===0&&((Ke=gr[$.pillar])==null?void 0:Ke.soft)||"transparent"},children:[Ee.length>0?t.jsx("button",{onClick:()=>te($.id),style:de.caret,children:We?t.jsx(Zi,{size:15}):t.jsx(Nr,{size:15})}):t.jsx("span",{style:{...de.caret,opacity:.25},children:t.jsx(rg,{size:12})}),t.jsx("span",{style:{...de.horizonTag,color:((ot=gr[$.pillar])==null?void 0:ot.dot)||kt.dot,borderColor:((ke=gr[$.pillar])==null?void 0:ke.dot)||kt.dot},title:$.horizon,children:D?a0[$.horizon]:$.horizon}),t.jsxs("div",{style:de.nameCol,children:[t.jsx("span",{style:{...de.title,...De===$.id?de.titleFull:{}},title:$.title,onPointerDown:()=>K($.id),onPointerUp:me,onPointerLeave:me,onPointerCancel:me,children:$.title}),t.jsx("span",{style:de.whenSub,children:u0($)})]}),D?t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{position:"relative",flexShrink:0},children:[t.jsx("button",{onClick:tt=>y(tt,$.id),style:de.rowAdd,title:"Options",children:t.jsx(Om,{size:15})}),W===$.id&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:de.menuBackdrop,onClick:()=>U(null)}),t.jsxs("div",{style:{...de.goalMenu,...ce},children:[t.jsxs("button",{style:de.menuItem,onClick:()=>{Rt($),U(null)},children:[t.jsx(ut,{size:14})," Edit"]}),Qe&&t.jsxs("button",{style:de.menuItem,onClick:()=>{d(tt=>({...tt,[$.id]:!0})),Oe($.id,$),U(null)},children:[t.jsx(Ze,{size:14})," Add sub-goal"]}),t.jsxs("button",{style:{...de.menuItem,color:"#C2536B"},onClick:()=>{Te($.id,$.title),U(null)},children:[t.jsx(Re,{size:14})," Delete"]})]})]})]}),t.jsx("button",{onClick:()=>Se($),style:{...de.rowAdd,color:Pe($)?((Et=gr[$.pillar])==null?void 0:Et.dot)||kt.dot:"var(--text-3)"},title:Pe($)?"Showing on timeline":"Hidden from timeline",children:Pe($)?t.jsx(jl,{size:14}):t.jsx(_d,{size:14})})]}):t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>Se($),style:{...de.rowAdd,color:Pe($)?((rr=gr[$.pillar])==null?void 0:rr.dot)||kt.dot:"var(--text-3)"},title:Pe($)?"Showing on timeline — click to hide":"Hidden from timeline — click to show",children:Pe($)?t.jsx(jl,{size:13}):t.jsx(_d,{size:13})}),t.jsx("button",{onClick:()=>Rt($),style:de.rowAdd,title:"Edit",children:t.jsx(ut,{size:12})}),Qe&&t.jsx("button",{onClick:()=>{d(tt=>({...tt,[$.id]:!0})),Oe($.id,$)},style:de.rowAdd,title:"Add sub-goal",children:t.jsx(Ze,{size:13})}),t.jsx("button",{onClick:()=>Te($.id,$.title),style:{...de.rowAdd,color:"var(--text-3)"},title:"Delete",children:t.jsx(Re,{size:13})})]})]}),We&&Ee.map(tt=>t.jsx(es,{goal:tt,depth:J+1},tt.id)),We&&a===$.id&&t.jsx(Ji,{parentId:$.id,parentGoal:$,depth:J+1})]})},vt=e.filter($=>Pe($)&&$.start_date&&$.end_date),Go=l0.map($=>({...$,items:vt.filter(J=>$.horizons.includes(J.horizon)).sort((J,Ee)=>J.pillar.localeCompare(Ee.pillar)||J.start_date.localeCompare(Ee.start_date)||Du[J.horizon]-Du[Ee.horizon]||J.end_date.localeCompare(Ee.end_date))})).filter($=>$.items.length>0),at=(()=>{if(!vt.length)return null;let $=vt[0].start_date,J=vt[0].end_date;return vt.forEach(Ee=>{Ee.start_date<$&&($=Ee.start_date),Ee.end_date>J&&(J=Ee.end_date)}),{start:lo($),end:lo(J)}})(),N=(()=>{if(!at)return[];const $=[];for(let J=at.start.getTime();J<=at.end.getTime();J+=gi)$.push(new Date(J));return $})(),ye=N.length,Ht=(()=>{const $=[];return N.forEach(J=>{const Ee=`${J.getFullYear()}-${J.getMonth()}`,We=$[$.length-1];We&&We.key===Ee?We.days++:$.push({key:Ee,label:`${Wr[J.getMonth()]} '${String(J.getFullYear()).slice(2)}`,days:1})}),$})(),Qt=new Date;Qt.setHours(0,0,0,0);const dr=at?Math.round((Qt-at.start)/gi):-1,Br=dr>=0&&dr<ye,Uo=$=>Math.round((lo($.end_date)-lo($.start_date))/gi)+1,Dr=I==="month",no=at?at.start.getFullYear():0,Or=at?at.start.getMonth():0,ts=(()=>{if(!at)return[];const $=[];let J=no,Ee=Or;const We=at.end.getFullYear(),Qe=at.end.getMonth();for(;J<We||J===We&&Ee<=Qe;)$.push({y:J,m:Ee}),Ee++,Ee>11&&(Ee=0,J++);return $})(),Vo=ts.length||1,ea=($,J)=>{const Ee=lo($),We=(Ee.getFullYear()-no)*12+Ee.getMonth()-Or,Qe=new Date(Ee.getFullYear(),Ee.getMonth()+1,0).getDate();return We+(Ee.getDate()-(J?0:1))/Qe},ta=($,J)=>ea($,J)/Vo*100,gh=`${Qt.getFullYear()}-${String(Qt.getMonth()+1).padStart(2,"0")}-${String(Qt.getDate()).padStart(2,"0")}`,uh=at?ta(gh,!1):0,ag=(ie?Si:0)+dr*Bt,ph=at?`${at.start.getTime()}-${at.end.getTime()}`:"";return c.useEffect(()=>{if(Dr||!Br)return;const $=ue.current;$&&($.scrollLeft=Math.max(0,ag-$.clientWidth/2+Bt/2))},[ph,dr,ie,Br,Dr]),t.jsxs("div",{style:de.page,children:[t.jsxs("div",{style:de.head,children:[t.jsx("div",{style:de.eyebrow,children:"Anvil · Goals"}),t.jsx("h1",{style:de.h1,children:It?"All Goals":`${n} Goals`})]}),t.jsxs("div",{style:de.pillarPicker,children:[t.jsx("button",{onClick:()=>{o("All"),g(null),w(null)},style:{...de.pillarChip,...It?{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"}:{}},children:"All Goals"}),ni.map($=>{const J=$===n;return t.jsxs("button",{onClick:()=>{o($),g(null),w(null)},style:{...de.pillarChip,...J?{background:gr[$].dot,color:"#fff",borderColor:gr[$].dot}:{}},children:[t.jsx("span",{style:{...de.dot,background:J?"#fff":gr[$].dot}}),$]},$)})]}),t.jsxs("div",{style:de.list,children:[wt.map($=>t.jsx(es,{goal:$,depth:0},$.id)),wt.length===0&&t.jsxs("div",{style:de.ganttEmpty,children:["No goals yet",It?"":` for ${n}`,"."]}),a==="ROOT"&&t.jsx(Ji,{parentId:"ROOT",parentGoal:null,depth:0}),a!=="ROOT"&&t.jsxs("button",{onClick:()=>Oe("ROOT",null),style:de.rootAdd,children:[t.jsx(Ze,{size:14})," Add new goal"]})]}),t.jsxs("div",{style:de.ganttWrap,children:[t.jsxs("div",{style:de.ganttTop,children:[t.jsxs("div",{style:de.ganttTitle,children:[Dr?"Monthly":"Daily"," Timeline",at?` · ${Eu(at.start)} – ${Eu(at.end)}`:""]}),t.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[t.jsxs("div",{style:de.zoomToggle,children:[t.jsx("button",{onClick:()=>Z("day"),style:{...de.zoomBtn,...Dr?{}:de.zoomBtnOn},children:"Day"}),t.jsx("button",{onClick:()=>Z("month"),style:{...de.zoomBtn,...Dr?de.zoomBtnOn:{}},children:"Month"})]}),t.jsxs("button",{onClick:()=>B($=>!$),style:de.labelToggle,children:[ie?t.jsx(Ty,{size:14}):t.jsx(Iy,{size:14}),ie?"Hide names":"Show names"]})]})]}),at?Dr?t.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[t.jsxs("div",{style:de.gBandRow,children:[ie&&t.jsx("div",{style:{...de.gLabelHead,zIndex:4},children:"Goal"}),t.jsx("div",{style:{flex:1,display:"grid",gridTemplateColumns:`repeat(${Vo}, 1fr)`,minWidth:0},children:ts.map(($,J)=>t.jsxs("div",{style:de.gMonthFluid,children:[Wr[$.m],$.m===0||J===0?` '${String($.y).slice(2)}`:""]},J))})]}),Go.map($=>t.jsxs("div",{children:[t.jsxs("div",{style:de.gGroupRow,children:[ie?t.jsxs("div",{style:de.gGroupLabel,children:[$.label,t.jsx("span",{style:de.gGroupCount,children:$.items.length})]}):t.jsxs("div",{style:de.gGroupChip,children:[$.label," · ",$.items.length]}),t.jsx("div",{style:{flex:1}})]}),$.items.map(J=>{var rr;const Ee=((rr=gr[J.pillar])==null?void 0:rr.dot)||"#9A968C",We=(be==null?void 0:be.id)===J.id,Qe=We?be.dx:0,Ve=ta(J.start_date,!1),Ke=Math.max(2,ta(J.end_date,!0)-Ve),ot=Uo(J),ke=Ke>=14,Et=`${J.title} · ${J.start_date} → ${J.end_date} · ${ot} day${ot>1?"s":""}`;return t.jsxs("div",{style:de.gRow,children:[ie&&t.jsxs("div",{style:{...de.gLabel,paddingLeft:12},children:[t.jsx("span",{style:{...de.ganttRowDot,background:Ee}}),t.jsx("span",{style:{...de.gHzTag,color:Ee,borderColor:Ee},children:Bu[J.horizon]}),t.jsx("span",{style:de.gLabelText,title:J.title,children:J.title}),t.jsxs("span",{style:de.gDurChip,children:[ot,"d"]})]}),t.jsxs("div",{style:{position:"relative",flex:1,minHeight:36,minWidth:0,backgroundImage:`repeating-linear-gradient(to right, var(--border) 0, var(--border) 1px, transparent 1px, transparent calc(100% / ${Vo}))`},children:[Br&&t.jsx("div",{style:{...de.gTodayLine,left:`${uh}%`}}),t.jsxs("div",{onPointerDown:tt=>{tt.preventDefault(),v.current=tt.clientX;const Ln=tt.currentTarget.parentNode.offsetWidth;ae({id:J.id,startX:tt.clientX,dx:0,g:J,pxPerDay:Ln/ye})},style:{...de.gBar,left:`${Ve}%`,width:`${Ke}%`,background:Ee,cursor:We?"grabbing":"grab",transform:Qe?`translateX(${Qe}px)`:"none",zIndex:We?6:1,boxShadow:We?"0 4px 12px rgba(0,0,0,0.28)":"0 1px 2px rgba(0,0,0,0.15)",touchAction:"none"},title:Et,children:[t.jsx(wl,{size:12,style:{opacity:.7,flexShrink:0,marginRight:2,color:"#fff"}}),ke&&t.jsx("span",{style:de.gBarLabel,children:J.title})]}),!ke&&t.jsx("span",{style:{...de.gBarOutside,left:`calc(${Ve+Ke}% + 6px)`},title:Et,children:J.title})]})]},J.id)})]},$.key))]}):t.jsx("div",{style:de.ganttScroll,ref:ue,children:t.jsxs("div",{style:{minWidth:(ie?Si:0)+ye*Bt,position:"relative"},children:[Br&&t.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:ag,width:Bt,background:"color-mix(in srgb, var(--accent) 14%, transparent)",pointerEvents:"none",zIndex:3}}),t.jsxs("div",{style:de.gBandRow,children:[ie&&t.jsx("div",{style:{...de.gLabelHead,zIndex:4},children:"Goal"}),t.jsx("div",{style:{display:"flex"},children:Ht.map(($,J)=>t.jsx("div",{style:{...de.gMonthCell,width:$.days*Bt},children:$.label},J))})]}),t.jsxs("div",{style:de.gBandRow,children:[ie&&t.jsx("div",{style:{...de.gLabelHead,zIndex:4,fontSize:10,color:"var(--text-3)",fontWeight:600},children:"days →"}),t.jsx("div",{style:{display:"flex"},children:N.map(($,J)=>{const Ee=$.getDay()===0||$.getDay()===6,We=J===dr;return t.jsx("div",{style:{...de.gDayCell,...Ee?de.gWeekend:{},...We?de.gTodayCell:{}},children:$.getDate()},J)})})]}),Go.map($=>t.jsxs("div",{children:[t.jsxs("div",{style:de.gGroupRow,children:[ie?t.jsxs("div",{style:de.gGroupLabel,children:[$.label,t.jsx("span",{style:de.gGroupCount,children:$.items.length})]}):t.jsxs("div",{style:de.gGroupChip,children:[$.label," · ",$.items.length]}),t.jsx("div",{style:{width:ye*Bt,flexShrink:0}})]}),$.items.map(J=>{var Qo;const Ee=((Qo=gr[J.pillar])==null?void 0:Qo.dot)||"#9A968C",We=Math.round((lo(J.start_date)-at.start)/gi),Qe=Uo(J),Ve=(be==null?void 0:be.id)===J.id,Ke=Ve?be.dx:0,ot=g0(J),ke=(V==null?void 0:V.id)===J.id,Et=ot?Vd(J):Qe,rr=ot?Ru(J):Qe,tt=ke?Math.max(Et,Math.min(rr,Qe+Math.round(V.dx/Bt))):Qe,Ln=tt*Bt-4,Yo=Ln>=54,Le=`${J.title} · ${J.start_date} → ${J.end_date} · ${tt} day${tt>1?"s":""}${ot?` (max ${rr})`:""}`;return t.jsxs("div",{style:de.gRow,children:[ie&&t.jsxs("div",{style:{...de.gLabel,paddingLeft:12},children:[t.jsx("span",{style:{...de.ganttRowDot,background:Ee}}),t.jsx("span",{style:{...de.gHzTag,color:Ee,borderColor:Ee},children:Bu[J.horizon]}),t.jsx("span",{style:de.gLabelText,title:J.title,children:J.title}),t.jsxs("span",{style:de.gDurChip,children:[tt,"d"]})]}),t.jsxs("div",{style:{...de.gTrack,width:ye*Bt},children:[Br&&t.jsx("div",{style:{...de.gTodayLine,left:dr*Bt}}),t.jsxs("div",{onPointerDown:_n=>{_n.preventDefault(),v.current=_n.clientX,ae({id:J.id,startX:_n.clientX,dx:0,g:J,pxPerDay:Bt})},style:{...de.gBar,left:We*Bt+2,width:Ln,background:Ee,cursor:Ve?"grabbing":"grab",transform:Ke?`translateX(${Ke}px)`:"none",zIndex:Ve||ke?6:1,boxShadow:Ve||ke?"0 4px 12px rgba(0,0,0,0.28)":"0 1px 2px rgba(0,0,0,0.15)",touchAction:"none"},title:Le,children:[ot&&tt>Et&&t.jsx("div",{style:{position:"absolute",left:Et*Bt,top:0,bottom:0,right:0,background:"#C2536B",borderRadius:"0 5px 5px 0"}}),t.jsx(wl,{size:12,style:{opacity:.7,flexShrink:0,marginRight:2,color:"#fff",position:"relative",zIndex:1}}),Yo&&t.jsx("span",{style:{...de.gBarLabel,position:"relative",zIndex:1},children:J.title}),ot&&t.jsx("div",{onPointerDown:_n=>{_n.preventDefault(),_n.stopPropagation(),oe({id:J.id,startX:_n.clientX,dx:0,g:J})},style:de.resizeHandle,title:`Drag to extend up to ${rr} days`,children:t.jsx("div",{style:de.resizeGrip})})]}),!Yo&&t.jsx("span",{style:{...de.gBarOutside,left:We*Bt+Ln+8+Ke},title:Le,children:J.title})]})]},J.id)})]},$.key))]})}):t.jsx("div",{style:de.ganttEmpty,children:"No goals on the timeline. Click the eye icon on a goal to show it here."}),at&&t.jsxs("div",{style:de.gLegend,children:[t.jsxs("span",{style:de.gLegendItem,children:[t.jsx("span",{style:{...de.gLegendBar}})," bar length = number of days"]}),t.jsxs("span",{style:de.gLegendItem,children:[t.jsx("span",{style:de.gLegendToday})," today"]})]})]}),A&&t.jsxs("div",{style:de.warnToast,children:[t.jsx(Ny,{size:15,style:{flexShrink:0}}),t.jsx("span",{children:A})]}),t.jsx(tr,{toasts:Be,onUndo:Ge,onDismiss:Ue})]})}const de={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box",maxWidth:"100%",overflowX:"hidden"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},pillarPicker:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16},pillarChip:{display:"flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},list:{background:"var(--surface)",borderRadius:12,padding:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"hidden"},row:{display:"flex",alignItems:"center",gap:9,padding:"9px 10px",borderRadius:8,flexWrap:"nowrap"},caret:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",display:"grid",placeItems:"center",padding:0,width:18,height:18,flexShrink:0},horizonTag:{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",border:"1px solid",borderRadius:5,padding:"2px 6px",flexShrink:0},nameCol:{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:1},title:{fontSize:14,fontWeight:500,lineHeight:1.3,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",userSelect:"none",WebkitUserSelect:"none",cursor:"default"},titleFull:{whiteSpace:"normal",overflow:"visible",textOverflow:"clip",wordBreak:"break-word"},whenSub:{fontSize:11,fontStyle:"italic",color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},rowAdd:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,flexShrink:0},menuBackdrop:{position:"fixed",inset:0,zIndex:40},goalMenu:{position:"fixed",zIndex:41,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 6px 24px rgba(0,0,0,0.18)",padding:4,minWidth:180,display:"flex",flexDirection:"column"},menuItem:{display:"flex",alignItems:"center",gap:9,width:"100%",border:"none",background:"none",padding:"10px 12px",borderRadius:7,cursor:"pointer",fontFamily:"inherit",fontSize:13.5,fontWeight:500,color:"var(--text)",textAlign:"left"},rootAdd:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"var(--text-2)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"9px 12px",cursor:"pointer",fontWeight:600,fontFamily:"inherit",marginTop:6,width:"100%",justifyContent:"center"},addBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 0 6px 28px",flexWrap:"wrap"},editBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 10px",flexWrap:"wrap",background:"var(--bg)",borderRadius:8,margin:"4px 0"},input:{border:"1px solid var(--border)",borderRadius:7,padding:"8px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",flex:1,minWidth:120},monthSelect:{border:"1px solid var(--border)",borderRadius:7,padding:"8px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},inheritTag:{fontSize:11.5,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"6px 9px",borderRadius:7,flexShrink:0},toTag:{fontSize:11.5,fontWeight:600,color:"var(--text-3)",flexShrink:0},warnToast:{position:"fixed",top:18,left:"50%",transform:"translateX(-50%)",zIndex:300,display:"flex",alignItems:"center",gap:8,maxWidth:"90vw",background:"#C2536B",color:"#fff",padding:"10px 16px",borderRadius:10,fontSize:13,fontWeight:600,boxShadow:"0 6px 24px rgba(0,0,0,0.25)"},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},ganttWrap:{background:"var(--surface)",borderRadius:12,padding:"16px 14px",marginTop:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},ganttTop:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:10,marginBottom:14},ganttTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",fontFamily:"'Fraunces',Georgia,serif"},labelToggle:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"5px 10px",borderRadius:8,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},zoomToggle:{display:"inline-flex",border:"1px solid var(--border)",borderRadius:8,overflow:"hidden"},zoomBtn:{border:"none",background:"var(--surface)",color:"var(--text-2)",padding:"5px 12px",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},zoomBtnOn:{background:"var(--accent-strong)",color:"#fff"},gMonthFluid:{borderLeft:"1px solid var(--border)",fontSize:10,fontWeight:700,color:"var(--text-2)",textAlign:"center",padding:"5px 0",whiteSpace:"nowrap",overflow:"hidden"},gGroupChip:{position:"sticky",left:0,zIndex:3,background:"var(--surface-2)",padding:"5px 10px",fontSize:10,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-2)",whiteSpace:"nowrap",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center"},ganttEmpty:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},ganttScroll:{overflowX:"auto"},ganttRowDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},gBandRow:{display:"flex",alignItems:"stretch",borderBottom:"1px solid var(--border)"},gLabelHead:{width:Si,flexShrink:0,position:"sticky",left:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center",padding:"6px 10px",fontSize:12,fontWeight:700,color:"var(--text-2)"},gMonthCell:{flexShrink:0,borderLeft:"1px solid var(--border)",fontSize:10.5,fontWeight:700,color:"var(--text-2)",textAlign:"center",padding:"5px 0",whiteSpace:"nowrap",overflow:"hidden"},gDayCell:{width:Bt,flexShrink:0,textAlign:"center",fontSize:10,color:"var(--text-3)",padding:"4px 0",borderLeft:"1px solid var(--border)",fontWeight:600},gWeekend:{background:"var(--surface-2)"},gTodayCell:{background:"var(--hover)",color:"var(--accent)",fontWeight:800},gGroupRow:{display:"flex",alignItems:"stretch",background:"var(--surface-2)",borderBottom:"1px solid var(--border)",borderTop:"1px solid var(--border)"},gGroupLabel:{width:Si,flexShrink:0,position:"sticky",left:0,background:"var(--surface-2)",zIndex:3,padding:"6px 12px",fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-2)",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center",gap:7},gGroupCount:{fontSize:10,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 6px"},gHzTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.04em",border:"1px solid",borderRadius:4,padding:"1px 4px",flexShrink:0},gRow:{display:"flex",alignItems:"stretch",minHeight:36,borderBottom:"1px solid var(--border)"},gLabel:{width:Si,flexShrink:0,display:"flex",alignItems:"center",gap:7,position:"sticky",left:0,background:"var(--surface)",zIndex:2,borderRight:"1px solid var(--border)",paddingRight:8,overflow:"hidden"},gLabelText:{flex:1,minWidth:0,fontSize:12,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"var(--text)"},gDurChip:{fontSize:10,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",borderRadius:10,padding:"1px 6px",flexShrink:0,marginRight:6},gTrack:{position:"relative",flexShrink:0,minHeight:36,backgroundImage:`repeating-linear-gradient(to right, var(--border) 0, var(--border) 1px, transparent 1px, transparent ${Bt}px)`},gBar:{position:"absolute",top:9,height:18,borderRadius:5,display:"flex",alignItems:"center",padding:"0 7px",boxShadow:"0 1px 2px rgba(0,0,0,0.15)",overflow:"hidden",zIndex:1},gBarLabel:{fontSize:11,fontWeight:600,color:"#fff",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},gBarOutside:{position:"absolute",top:9,height:18,display:"flex",alignItems:"center",fontSize:11,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",pointerEvents:"none",zIndex:1},resizeHandle:{position:"absolute",right:0,top:0,bottom:0,width:12,cursor:"ew-resize",display:"grid",placeItems:"center",touchAction:"none",zIndex:2},resizeGrip:{width:2,height:11,background:"rgba(255,255,255,0.9)",borderRadius:1,boxShadow:"3px 0 0 rgba(255,255,255,0.6)"},gTodayLine:{position:"absolute",top:0,bottom:0,width:2,background:"#C2536B",zIndex:0,opacity:.6},gLegend:{display:"flex",gap:16,marginTop:12,fontSize:11,color:"var(--text-3)",flexWrap:"wrap"},gLegendItem:{display:"flex",alignItems:"center",gap:6,fontWeight:600},gLegendBar:{width:18,height:8,borderRadius:3,background:"var(--accent)",display:"inline-block"},gLegendToday:{width:2,height:12,background:"#C2536B",display:"inline-block"}},An={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.12)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.12)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.12)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.12)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.12)"}},Ui=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],b0=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Vi=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,sg=()=>Vi(new Date),m0=(e=0)=>{const r=new Date,n=r.getDay(),o=n===0?-6:1-n,i=new Date(r);return i.setDate(r.getDate()+o+e*7),Array.from({length:7},(s,l)=>{const d=new Date(i);return d.setDate(i.getDate()+l),Vi(d)})},h0=(e=0)=>{const r=new Date,n=new Date(r.getFullYear(),r.getMonth()+e,1),o=n.getFullYear(),i=n.getMonth(),s=new Date(o,i+1,0).getDate(),l=n.getDay(),d=l===0?6:l-1,a=Array.from({length:s},(h,x)=>`${o}-${String(i+1).padStart(2,"0")}-${String(x+1).padStart(2,"0")}`),g=n.toLocaleDateString("en-US",{month:"long",year:"numeric"});return{dates:a,startOffset:d,label:g,year:o,month:i}},Fu=e=>new Date(e+"T00:00").toLocaleDateString("en-US",{month:"short",day:"numeric"}),f0=(e,r)=>{var i;const n=Number(e==null?void 0:e.min_interval_min)||0;if(n<=0||r!==sg())return 0;const o=(i=e.log_count_times)==null?void 0:i[r];return o?Math.max(0,new Date(o).getTime()+n*6e4-Date.now()):0},Xm=e=>{const r=Math.ceil(e/1e3);return`${Math.floor(r/60)}:${String(r%60).padStart(2,"0")}`},yn=sg(),x0=new Date().getFullYear();function y0(){var le,De;const[e,r]=c.useState([]),[n,o]=c.useState("ALL"),[i,s]=c.useState(!1),[l,d]=c.useState(!1),[a,g]=c.useState(!1),[h,x]=c.useState(null),[f,E]=c.useState(null),[z,k]=c.useState(null),[R,b]=c.useState({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week",days:[],min_interval_min:0}),[p,m]=c.useState(!1),[T,j]=c.useState([]),C=c.useCallback(()=>_.getHabits().then(r).catch(console.error),[]);c.useEffect(()=>{C()},[C]);const L=c.useCallback(Y=>{Y&&Y.id!=null&&r(ne=>ne.map(W=>W.id===Y.id?Y:W))},[]);c.useEffect(()=>{_.getSetting("habit_order").then(Y=>{Array.isArray(Y==null?void 0:Y.value)&&j(Y.value)}).catch(()=>{})},[]);const M=c.useMemo(()=>T.length?[...e].sort((Y,ne)=>{const W=T.indexOf(Y.id),U=T.indexOf(ne.id);return W===-1&&U===-1?0:W===-1?1:U===-1?-1:W-U}):e,[e,T]),w=c.useMemo(()=>M.filter(Y=>Y.active!==!1),[M]);c.useEffect(()=>{n!=="ALL"&&e.some(Y=>Y.id===n&&Y.active===!1)&&o("ALL")},[e,n]);const D=async Y=>{j(Y),await _.setSetting("habit_order",Y),m(!1)},ie=async(Y,ne)=>{L(await _.updateHabit(Y,{active:ne}))};c.useEffect(()=>{const Y=()=>{const ne=window.innerWidth<720;s(ne),ne||d(!1)};return Y(),window.addEventListener("resize",Y),()=>window.removeEventListener("resize",Y)},[]);const{deleteItem:B,toasts:I,handleUndo:Z,handleDismiss:be}=er(_.deleteHabit,_.restoreHabit,C),ae=Y=>{o(Y),i&&d(!1)},ve=(Y,ne)=>{(Y.type==="minimum"||Y.type==="maximum")&&Y.period==="day"?f0(Y,ne)>0?k(W=>W&&W.habitId===Y.id&&W.date===ne?null:{habitId:Y.id,date:ne}):E({habit:Y,date:ne}):G(Y.id,ne)},G=async(Y,ne)=>{L(await _.toggleHabitLog(Y,ne))},V=async(Y,ne,W,U)=>{try{L(await _.setHabitLogCount(Y,ne,W,U)),E(null)}catch(ce){alert(ce.message||"Could not save.")}},oe=async(Y,ne)=>{L(await _.clearHabitLog(Y,ne)),E(null)},Q=Y=>{var ne;return!z||z.habitId!==Y.id?null:t.jsx(k0,{habit:Y,date:z.date,onSave:async W=>{var U;try{await _.setHabitLogCount(Y.id,z.date,W,((U=Y.log_notes)==null?void 0:U[z.date])??"").then(L)}catch(ce){alert(ce.message||"Could not save.")}},onOpen:()=>{k(null),E({habit:Y,date:z.date})},onClose:()=>k(null)},z.date+":"+(((ne=Y.log_count_times)==null?void 0:ne[z.date])||""))},ue=async()=>{if(!R.name.trim())return;const Y=R.type==="minimum"||R.type==="maximum",ne=R.type==="weekly";if(ne&&R.days.length===0)return;const W={name:R.name.trim(),pillar:R.pillar,target_per_week:Number(R.target_per_week)||7,type:R.type,target_count:Y?Number(R.target_count)||1:null,period:Y?R.period:null,days:ne?R.days:null,min_interval_min:Y&&R.period==="day"&&Number(R.min_interval_min)||0};await _.createHabit(W),b({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week",days:[],min_interval_min:0}),g(!1),C()},v=async(Y,ne)=>{n===Y&&o("ALL"),B(Y,ne)},A=e.find(Y=>Y.id===n),P=Y=>new Set(Y.logs||[]),se={...H.sidebar,...i?H.sidebarOverlay:{},...i&&!l?H.sidebarHidden:{}};return t.jsxs("div",{style:H.shell,children:[i&&l&&t.jsx("div",{style:H.backdrop,onClick:()=>d(!1)}),t.jsxs("aside",{style:se,children:[t.jsxs("div",{style:H.sideTop,children:[t.jsx("div",{style:H.brand,children:"Anvil · Habits"}),i&&t.jsx("button",{onClick:()=>d(!1),style:H.closeBtn,children:t.jsx(Re,{size:18})})]}),t.jsxs("div",{style:{...H.sideItem,...n==="ALL"?H.sideItemOn:{},cursor:"default",padding:"2px 6px 2px 10px"},children:[t.jsxs("button",{onClick:()=>ae("ALL"),style:{display:"flex",alignItems:"center",gap:9,flex:1,border:"none",background:"none",cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:n==="ALL"?600:500,color:"var(--text-2)",padding:"7px 0"},children:[t.jsx(Zc,{size:15}),t.jsx("span",{style:H.sideLabel,children:"All Habits"}),t.jsx("span",{style:H.sideCount,children:e.length})]}),t.jsx("button",{onClick:Y=>{Y.stopPropagation(),m(!0)},style:H.tinyBtn,title:"Reorder habits",children:t.jsx(ut,{size:12})})]}),t.jsx("div",{style:H.sideDivider}),w.map(Y=>{var U;const ne=n===Y.id,W=((U=An[Y.pillar])==null?void 0:U.dot)||"#9A968C";return t.jsxs("button",{onClick:()=>ae(Y.id),style:{...H.sideItem,...ne?H.sideItemOn:{}},children:[t.jsx("span",{style:{...H.sideDot,background:W}}),t.jsx("span",{style:H.sideLabel,children:Y.name}),t.jsxs("span",{style:H.sideStreak,children:[t.jsx(Wn,{size:11})," ",Y.streak]})]},Y.id)}),a?t.jsx(v0,{habit:R,onChange:b,onSave:ue,onCancel:()=>g(!1)}):t.jsxs("button",{onClick:()=>g(!0),style:H.sideNewBtn,children:[t.jsx(Ze,{size:13})," New habit"]})]}),t.jsxs("main",{style:H.main,children:[i&&t.jsxs("button",{onClick:()=>d(!0),style:H.hamburger,children:[t.jsx(Jc,{size:18}),t.jsx("span",{style:H.hamburgerLabel,children:n==="ALL"?"All Habits":A==null?void 0:A.name})]}),n==="ALL"?t.jsx(S0,{habits:w,dayAction:ve,logSet:P,onDelete:v,onEdit:Y=>x(Y),renderInline:Q}):t.jsx(C0,{habit:A,dayAction:ve,logSet:P,onDelete:()=>v(A.id,A.name),onEdit:()=>x(A),onToggleActive:ie,renderInline:Q,setNote:(Y,ne)=>_.setHabitLogNote(A.id,Y,ne).then(L)}),n==="ALL"&&t.jsx(I0,{year:x0})]}),p&&t.jsx(T0,{habits:M,onSave:D,onToggleActive:ie,onClose:()=>m(!1)}),h&&t.jsx(j0,{habit:h,onSave:async Y=>{await _.updateHabit(h.id,Y),x(null),C()},onClose:()=>x(null)}),f&&t.jsx(w0,{habit:f.habit,date:f.date,initialCount:((le=f.habit.log_counts)==null?void 0:le[f.date])??0,initialNote:((De=f.habit.log_notes)==null?void 0:De[f.date])??"",onSave:(Y,ne)=>V(f.habit.id,f.date,Y,ne),onClear:()=>oe(f.habit.id,f.date),onClose:()=>E(null)}),t.jsx(tr,{toasts:I,onUndo:Z,onDismiss:be})]})}function qm({days:e,onToggle:r}){return t.jsx("div",{style:H.dayPick,children:Ui.map((n,o)=>t.jsx("button",{type:"button",onClick:()=>r(o),style:{...H.dayChip,...e.includes(o)?H.dayChipOn:{}},children:n},n))})}function v0({habit:e,onChange:r,onSave:n,onCancel:o}){const i=e.type==="minimum"||e.type==="maximum",s=e.type==="weekly",l=d=>r(a=>({...a,days:a.days.includes(d)?a.days.filter(g=>g!==d):[...a.days,d].sort((g,h)=>g-h)}));return t.jsxs("div",{style:H.addBox,children:[t.jsx("input",{autoFocus:!0,placeholder:"Habit name",value:e.name,onChange:d=>r(a=>({...a,name:d.target.value})),onKeyDown:d=>d.key==="Enter"&&n(),style:H.sideInput}),t.jsx("select",{value:e.pillar,onChange:d=>r(a=>({...a,pillar:d.target.value})),style:H.sideInput,children:Object.keys(An).map(d=>t.jsx("option",{children:d},d))}),t.jsxs("select",{value:e.type,onChange:d=>r(a=>({...a,type:d.target.value})),style:H.sideInput,children:[t.jsx("option",{value:"regular",children:"Regular (yes/no)"}),t.jsx("option",{value:"weekly",children:"Weekly (specific days)"}),t.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),t.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),s&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:H.pickHint,children:"Do this on…"}),t.jsx(qm,{days:e.days,onToggle:l})]}),i&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{display:"flex",gap:6},children:[t.jsx("input",{type:"number",min:1,placeholder:"N",value:e.target_count||"",onChange:d=>r(a=>({...a,target_count:d.target.value})),style:{...H.sideInput,width:60}}),t.jsx("select",{value:e.period,onChange:d=>r(a=>({...a,period:d.target.value})),style:H.sideInput,children:["day","week","month","year"].map(d=>t.jsx("option",{children:d},d))})]}),e.period==="day"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:H.pickHint,children:"Min gap between entries (minutes)"}),t.jsx("input",{type:"number",min:0,placeholder:"0",value:e.min_interval_min??0,onChange:d=>r(a=>({...a,min_interval_min:d.target.value})),style:H.sideInput})]})]}),t.jsxs("div",{style:{display:"flex",gap:6},children:[t.jsx("button",{onClick:n,style:H.sideAddBtn,children:t.jsx(He,{size:13})}),t.jsx("button",{onClick:o,style:H.sideCancelBtn,children:t.jsx(Re,{size:13})})]})]})}function j0({habit:e,onSave:r,onClose:n}){const[o,i]=c.useState(e.name),[s,l]=c.useState(e.type||"regular"),[d,a]=c.useState(e.target_count||""),[g,h]=c.useState(e.period||"week"),[x,f]=c.useState(e.reminder_time||""),[E,z]=c.useState(e.days||[]),[k,R]=c.useState(e.min_interval_min??0),b=s==="minimum"||s==="maximum",p=s==="weekly",m=j=>z(C=>C.includes(j)?C.filter(L=>L!==j):[...C,j].sort((L,M)=>L-M)),T=()=>{p&&E.length===0||r({name:o.trim(),type:s,target_count:b?Number(d):null,period:b?g:null,days:p?E:[],reminder_time:x||null,min_interval_min:b&&g==="day"&&Number(k)||0})};return t.jsx("div",{style:H.modalOverlay,onClick:n,children:t.jsxs("div",{style:H.modal,onClick:j=>j.stopPropagation(),children:[t.jsxs("div",{style:H.modalHead,children:["Edit Habit",t.jsx("button",{onClick:n,style:H.closeBtn,children:t.jsx(Re,{size:16})})]}),t.jsx("label",{style:H.modalLabel,children:"Name"}),t.jsx("input",{value:o,onChange:j=>i(j.target.value),style:H.sideInput}),t.jsx("label",{style:H.modalLabel,children:"Type"}),t.jsxs("select",{value:s,onChange:j=>l(j.target.value),style:H.sideInput,children:[t.jsx("option",{value:"regular",children:"Regular (yes/no)"}),t.jsx("option",{value:"weekly",children:"Weekly (specific days)"}),t.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),t.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),p&&t.jsxs(t.Fragment,{children:[t.jsx("label",{style:H.modalLabel,children:"Days"}),t.jsx(qm,{days:E,onToggle:m})]}),b&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[t.jsx("input",{type:"number",min:1,value:d,onChange:j=>a(j.target.value),style:{...H.sideInput,width:70}}),t.jsx("select",{value:g,onChange:j=>h(j.target.value),style:H.sideInput,children:["day","week","month","year"].map(j=>t.jsx("option",{children:j},j))})]}),g==="day"&&t.jsxs(t.Fragment,{children:[t.jsx("label",{style:H.modalLabel,children:"Min gap between entries (minutes)"}),t.jsx("input",{type:"number",min:0,value:k,onChange:j=>R(j.target.value),style:H.sideInput})]})]}),t.jsx("label",{style:H.modalLabel,children:"Reminder time"}),t.jsx("input",{type:"time",value:x,onChange:j=>f(j.target.value),style:H.sideInput}),t.jsx("button",{onClick:T,style:{...H.sideAddBtn,width:"100%",marginTop:10,height:36},children:"Save"})]})})}function k0({habit:e,date:r,onSave:n,onOpen:o,onClose:i}){var T,j,C;const[s,l]=c.useState(Date.now()),d=((T=e.log_counts)==null?void 0:T[r])??0,[a,g]=c.useState(d),h=Number(e.min_interval_min)||0,x=e.target_count,f=(j=e.log_count_times)==null?void 0:j[r],E=f?new Date(f).getTime()+h*6e4:0,z=Math.max(0,E-s);c.useEffect(()=>{const L=window.setInterval(()=>l(Date.now()),1e3);return()=>window.clearInterval(L)},[]);const k=a>=d+1||z>0,R=a<=0,b=a!==d,p=((C=An[e.pillar])==null?void 0:C.dot)||"#9A968C",m=e.type==="minimum"?a>=x:a>0&&a<=x;return t.jsxs("div",{style:H.inlineCounter,children:[t.jsxs("span",{style:{...H.inlineCount,color:m?"#4C9A6B":p},children:[a,t.jsxs("span",{style:H.inlineTarget,children:["/",x]})]}),t.jsx("button",{onClick:()=>!R&&g(L=>Math.max(0,L-1)),disabled:R,style:{...H.inlinePlus,...R?{opacity:.45,cursor:"not-allowed"}:{}},children:"−"}),t.jsx("button",{onClick:()=>!k&&g(L=>L+1),disabled:k,style:{...H.inlinePlus,...k?{opacity:.45,cursor:"not-allowed"}:{background:p,borderColor:p,color:"#fff"}},title:z>0?"Wait for the interval":a>=d+1?"Press Set to confirm":"Stage an entry",children:"+"}),t.jsx("button",{onClick:()=>n(a),disabled:!b,style:{...H.inlineSet,...b?{background:p,borderColor:p,color:"#fff"}:{opacity:.5,cursor:"not-allowed"}},children:"Set"}),z>0?t.jsxs("span",{style:H.inlineWait,children:["Wait ",Xm(z)]}):t.jsx("span",{style:H.inlineReady,children:b?"Press Set to confirm":"Tap + to add"}),t.jsx("button",{onClick:o,style:H.inlineMore,title:"Open details",children:"⋯"}),t.jsx("button",{onClick:i,style:H.inlineMore,title:"Hide",children:t.jsx(Re,{size:13})})]})}function w0({habit:e,date:r,initialCount:n,initialNote:o,onSave:i,onClear:s,onClose:l}){var be;const d=n??0,[a,g]=c.useState(d),[h,x]=c.useState(o??""),[f,E]=c.useState(Date.now()),z=e.target_count,k=e.type==="minimum"?a>=z:a>0&&a<=z,R=e.type==="maximum"&&a>z,b=k?"#4C9A6B":R?"#C2536B":"#C2773B",p=k?"✓ Goal met":R?"Over the limit":"Not met yet",m=Number(e.min_interval_min)||0,T=r===sg(),j=m>0&&T,C=(be=e.log_count_times)==null?void 0:be[r],L=j&&C?new Date(C).getTime()+m*6e4:0,M=Math.max(0,L-f);c.useEffect(()=>{if(!j||M<=0)return;const ae=window.setInterval(()=>E(Date.now()),1e3);return()=>window.clearInterval(ae)},[j,M]);const w=a-d,D=j&&(a>=d+1||M>0),ie=a<=0,B=()=>{D||g(ae=>ae+1)},I=()=>{ie||g(ae=>Math.max(0,ae-1))},Z=a!==d||h!==(o??"");return t.jsx("div",{style:H.modalOverlay,onClick:l,children:t.jsxs("div",{style:H.modal,onClick:ae=>ae.stopPropagation(),children:[t.jsxs("div",{style:H.modalHead,children:[e.name,t.jsx("button",{onClick:l,style:H.closeBtn,children:t.jsx(Re,{size:16})})]}),t.jsxs("div",{style:{fontSize:12,color:"var(--text-3)",marginBottom:2},children:[r," · ",e.type==="minimum"?`at least ${z}`:`no more than ${z}`," / ",e.period,m>0&&t.jsxs(t.Fragment,{children:[" · ",m,"m between entries"]})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:20,margin:"14px 0 6px"},children:[t.jsx("button",{onClick:I,disabled:ie,style:{...H.counterBtn,...ie?{opacity:.45,cursor:"not-allowed"}:{}},children:"−"}),t.jsx("span",{style:{fontSize:38,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:52,textAlign:"center",color:b},children:a}),t.jsx("button",{onClick:B,disabled:D,style:{...H.counterBtn,...D?{opacity:.45,cursor:"not-allowed"}:{}},title:j&&M>0?"Wait for the interval before the next entry":j&&a>=d+1?"Press Set to confirm this entry":void 0,children:"+"})]}),j&&M>0&&t.jsxs("div",{style:{textAlign:"center",fontSize:12,fontWeight:700,color:"#C2773B",marginBottom:8},children:["Wait ",Xm(M)," before the next entry"]}),j&&M<=0&&t.jsx("div",{style:{textAlign:"center",fontSize:11.5,color:"var(--text-3)",marginBottom:8},children:w>0?"Press Set to confirm this entry":`Tap + to add an entry (each at least ${m}m apart)`}),t.jsx("div",{style:{textAlign:"center",fontSize:12.5,fontWeight:700,color:b,marginBottom:12},children:p}),t.jsx("textarea",{value:h,onChange:ae=>x(ae.target.value),placeholder:"Add a comment (optional)…",style:{...H.sideInput,minHeight:56,resize:"vertical"}}),t.jsxs("div",{style:{display:"flex",gap:8,marginTop:10},children:[t.jsxs("button",{onClick:s,style:{...H.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[t.jsx(Re,{size:14})," Delete"]}),t.jsxs("button",{onClick:()=>i(a,h),disabled:!Z,style:{...H.sideAddBtn,flex:1,justifyContent:"center",height:38,...Z?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:14})," Set"]})]})]})})}function Ba({pct:e,label:r,sub:n,color:o}){const s=2*Math.PI*26,l=s*(1-Math.max(0,Math.min(100,e))/100);return t.jsxs("div",{style:H.ringStat,children:[t.jsxs("div",{style:H.ringBox,children:[t.jsxs("svg",{width:"70",height:"70",viewBox:"0 0 70 70",children:[t.jsx("circle",{cx:"35",cy:"35",r:26,fill:"none",stroke:"var(--border)",strokeWidth:"7"}),t.jsx("circle",{cx:"35",cy:"35",r:26,fill:"none",stroke:o,strokeWidth:"7",strokeLinecap:"round",strokeDasharray:s,strokeDashoffset:l,transform:"rotate(-90 35 35)",style:{transition:"stroke-dashoffset 0.5s ease"}})]}),t.jsxs("div",{style:{...H.ringPct,color:o},children:[e,"%"]})]}),t.jsxs("div",{children:[t.jsx("div",{style:H.ringLabel,children:r}),t.jsx("div",{style:H.ringSub,children:n})]})]})}function S0({habits:e,dayAction:r,logSet:n,onDelete:o,onEdit:i,renderInline:s}){const[l,d]=c.useState(0),a=m0(l),g=`${Fu(a[0])} – ${Fu(a[6])}${l===0?" · This week":""}`,h=B=>{const I=new Date(B+"T00:00:00"),Z=I.getDay(),be=new Date(I);return be.setDate(I.getDate()+(Z===0?-6:1-Z)),Array.from({length:7},(ae,ve)=>{const G=new Date(be);return G.setDate(be.getDate()+ve),Vi(G)})},x=B=>B.logs||[],f=(B,I)=>B.type==="minimum"&&B.period==="week"&&I.filter(Z=>n(B).has(Z)).length>=(B.target_count||0),E=(B,I)=>B.type==="minimum"&&B.period==="month"&&x(B).filter(Z=>Z.slice(0,7)===I).length>=(B.target_count||0),z=(B,I)=>B.type==="minimum"&&B.period==="year"&&x(B).filter(Z=>Z.slice(0,4)===I).length>=(B.target_count||0),k=(B,I)=>{var Z;if((B.type==="minimum"||B.type==="maximum")&&B.period==="day"){const be=(Z=B.log_counts)==null?void 0:Z[I];return be==null?!1:B.type==="minimum"?be>=(B.target_count||0):be>0&&be<=(B.target_count||0)}return n(B).has(I)},R=(B,I)=>B.type!=="minimum"?!1:B.period==="week"?f(B,h(I)):B.period==="month"?E(B,I.slice(0,7)):B.period==="year"?z(B,I.slice(0,4)):!1,b=(B,I)=>k(B,I)||R(B,I),p=e.filter(B=>b(B,yn)).length,m=e.length?Math.round(p/e.length*100):0,T=B=>{if(B.type==="minimum"&&B.period==="month"&&(E(B,a[0].slice(0,7))||E(B,a[6].slice(0,7)))||B.type==="minimum"&&B.period==="year"&&(z(B,a[0].slice(0,4))||z(B,a[6].slice(0,4)))||B.type==="minimum"&&B.period==="week"&&f(B,a))return 1;if((B.type==="minimum"||B.type==="maximum")&&B.period==="day")return Math.min(1,a.filter(ae=>k(B,ae)).length/7);const I=n(B),Z=a.filter(ae=>I.has(ae)).length,be=B.type==="minimum"&&B.period==="week"?B.target_count||1:B.target_per_week||7;return be>0?Math.min(1,Z/be):0},j=e.length?Math.round(e.reduce((B,I)=>B+T(I),0)/e.length*100):0,C=new Date,L=`${C.getFullYear()}-${String(C.getMonth()+1).padStart(2,"0")}`,M=new Date(C.getFullYear(),C.getMonth()+1,0).getDate(),w=M/7,D=B=>{if(B.type==="minimum"&&B.period==="month"&&E(B,L)||B.type==="minimum"&&B.period==="year"&&z(B,L.slice(0,4)))return 1;if((B.type==="minimum"||B.type==="maximum")&&B.period==="day"){let be=0;for(let ae=1;ae<=M;ae++)k(B,`${L}-${String(ae).padStart(2,"0")}`)&&be++;return Math.min(1,be/M)}const I=x(B).filter(be=>be.slice(0,7)===L).length;let Z;return B.type==="minimum"&&B.period==="week"?Z=(B.target_count||1)*w:B.type==="minimum"&&B.period==="month"?Z=B.target_count||1:B.type==="minimum"&&B.period==="year"?Z=(B.target_count||1)/12:Z=(B.target_per_week||7)*w,Z>0?Math.min(1,I/Z):0},ie=e.length?Math.round(e.reduce((B,I)=>B+D(I),0)/e.length*100):0;return t.jsxs("div",{children:[t.jsxs("div",{style:H.mainHead,children:[t.jsx("div",{style:H.eyebrow,children:"Weekly view"}),t.jsx("h1",{style:H.h1,children:"All Habits"})]}),t.jsxs("div",{style:H.navBar,children:[t.jsx("button",{onClick:()=>d(B=>B-1),style:H.navBtn,children:t.jsx(dn,{size:16})}),t.jsx("span",{style:H.navLabel,children:g}),t.jsx("button",{onClick:()=>d(B=>Math.min(0,B+1)),disabled:l>=0,style:{...H.navBtn,...l>=0?H.navBtnDisabled:{}},children:t.jsx(Nr,{size:16})})]}),t.jsxs("div",{style:H.weekCard,children:[t.jsxs("div",{style:H.weekHeadRow,children:[t.jsx("div",{style:H.weekNameCol}),Ui.map((B,I)=>t.jsxs("div",{style:H.weekDayHead,children:[t.jsx("span",{style:H.weekDayName,children:B}),t.jsx("span",{style:{...H.weekDayNum,...a[I]===yn?H.weekDayToday:{}},children:new Date(a[I]+"T00:00").getDate()})]},B)),t.jsx("div",{style:H.weekStreakCol,children:"Streak"})]}),e.map(B=>{var ne,W;const I=((ne=An[B.pillar])==null?void 0:ne.dot)||"#9A968C",Z=((W=An[B.pillar])==null?void 0:W.soft)||"rgba(0,0,0,0.05)",be=n(B),ae=B.type==="weekly",ve=new Set(B.days||[]),G=[0,1,2,3,4,5,6].filter(U=>ve.has(U)),V=ae&&G.length>0&&G.every(U=>be.has(a[U])),oe=ae?Array(7).fill(V):null,Q=B.type==="minimum"&&["week","month","year"].includes(B.period),ue=B.target_count||0,v=B.logs||[],A=U=>v.filter(ce=>ce.slice(0,7)===U).length,P=U=>v.filter(ce=>ce.slice(0,4)===U).length,se=a.filter(U=>be.has(U)).length,le=U=>Q?B.period==="week"?se>=ue:B.period==="month"?A(U.slice(0,7))>=ue:B.period==="year"?P(U.slice(0,4))>=ue:!1:!1,De=Q&&a.some(le),Y=B.period==="week"?se:B.period==="month"?A(a[0].slice(0,7)):B.period==="year"?P(a[0].slice(0,4)):0;return t.jsxs(c.Fragment,{children:[t.jsxs("div",{style:H.weekRow,children:[t.jsxs("div",{style:{...H.weekNameCol,flexDirection:"column",alignItems:"flex-start",gap:2},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[t.jsx("span",{style:{...H.sideDot,background:I}}),t.jsx("span",{style:H.weekHabitName,children:B.name})]}),B.type==="weekly"?t.jsx("span",{style:H.typeBadge,children:(B.days||[]).map(U=>Ui[U]).join("·")||"—"}):B.type!=="regular"?t.jsx("span",{style:H.typeBadge,children:B.type==="minimum"?`≥${B.target_count}/${B.period}`:`≤${B.target_count}/${B.period}`}):null]}),a.map((U,ce)=>{var ft,qe;if(ae&&!ve.has(ce))return t.jsxs("div",{style:{...H.weekCell,position:"relative",zIndex:0},children:[oe[ce]&&t.jsx("span",{style:{...H.chainLine,background:I,left:oe[ce-1]?0:"50%",right:oe[ce+1]?0:"50%"}}),t.jsx("span",{style:{...H.offDay,position:"relative",zIndex:1},title:"Not scheduled",children:"·"})]},U);const F=be.has(U),y=U>yn,K=(B.type==="minimum"||B.type==="maximum")&&B.period==="day",me=(ft=B.log_counts)==null?void 0:ft[U],O=me!=null,Te=!!((qe=B.log_notes)!=null&&qe[U]),Be=le(U),Ge=ce>0&&le(a[ce-1]),Ue=ce<a.length-1&&le(a[ce+1]),it=F||Be;return t.jsxs("div",{style:{...H.weekCell,position:"relative",zIndex:0},children:[Be&&t.jsx("span",{style:{...H.chainLine,background:I,left:Ge?0:"50%",right:Ue?0:"50%"}}),ae&&oe[ce]&&t.jsx("span",{style:{...H.chainLine,background:I,left:oe[ce-1]?0:"50%",right:oe[ce+1]?0:"50%"}}),t.jsx("button",{disabled:y,onClick:()=>r(B,U),style:{...H.tick,...it?{background:I,borderColor:I,color:"#fff"}:{},...K&&O&&!F?{borderColor:I,color:I}:{},...y&&!it?H.tickFuture:{}},children:K?O?t.jsx("span",{style:{fontSize:12,fontWeight:700},children:me}):null:F&&t.jsx(He,{size:14,color:"#fff",strokeWidth:3})}),Te&&t.jsx("span",{style:H.cellNoteBubble})]},U)}),t.jsx("div",{style:H.weekStreakCol,children:V?t.jsxs("span",{style:{...H.streakPill,background:Z,color:I},children:[t.jsx(Sl,{size:12})," ",G.length,"/",G.length]}):De?t.jsxs("span",{style:{...H.streakPill,background:Z,color:I},children:[t.jsx(Sl,{size:12})," ",Y,"/",ue]}):t.jsxs("span",{style:{...H.streakPill,background:Z,color:I},children:[t.jsx(Wn,{size:12})," ",B.streak]})})]}),s&&s(B)]},B.id)}),e.length===0&&t.jsx("div",{style:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},children:"No habits yet — add one from the sidebar."})]}),e.length>0&&t.jsxs("div",{style:{...H.progressCard,marginTop:18,marginBottom:0},children:[t.jsx(Ba,{pct:m,label:"Today",sub:`${p}/${e.length} done`,color:"#4C9A6B"}),t.jsx("div",{style:H.progressDivider}),t.jsx(Ba,{pct:j,label:"This week",sub:"of weekly targets",color:"#3A7CA5"}),t.jsx("div",{style:H.progressDivider}),t.jsx(Ba,{pct:ie,label:"This month",sub:"of monthly targets",color:"#8268B0"})]})]})}function C0({habit:e,dayAction:r,logSet:n,onDelete:o,onEdit:i,setNote:s,onToggleActive:l,renderInline:d}){var De,Y;const[a,g]=c.useState(null),[h,x]=c.useState(""),[f,E]=c.useState(null),[z,k]=c.useState(0),R=c.useRef(null);if(!e)return null;const b=((De=An[e.pillar])==null?void 0:De.dot)||"#9A968C",p=((Y=An[e.pillar])==null?void 0:Y.soft)||"rgba(0,0,0,0.05)",m=n(e),T=e.type==="weekly",j=new Set(e.days||[]),C=ne=>(new Date(ne+"T00:00").getDay()+6)%7,L=ne=>!T||j.has(C(ne)),M=ne=>{const W=new Date(ne+"T00:00"),U=W.getDay(),ce=new Date(W);ce.setDate(W.getDate()+(U===0?-6:1-U));const F=Array.from({length:7},(me,O)=>{const Te=new Date(ce);return Te.setDate(ce.getDate()+O),Vi(Te)}),y=[0,1,2,3,4,5,6].filter(me=>j.has(me)),K=y.length>0&&y.every(me=>m.has(F[me]));return Array(7).fill(K)},{dates:w,startOffset:D,label:ie,year:B}=h0(z),I=w.filter(ne=>ne<=yn&&L(ne)&&m.has(ne)).length,Z=w.filter(ne=>ne<=yn&&L(ne)).length,be=Z>0?Math.round(I/Z*100):0,ae=e.type==="minimum"&&(e.period==="month"||e.period==="year"),ve=e.period==="year"?(e.logs||[]).filter(ne=>ne.startsWith(`${B}-`)).length:w.filter(ne=>m.has(ne)).length,G=ae&&ve>=(e.target_count||0),V=e.type==="minimum"&&e.period==="week",oe=e.target_count||0,Q=ne=>{const W=new Date(ne+"T00:00"),U=W.getDay(),ce=new Date(W);ce.setDate(W.getDate()+(U===0?-6:1-U));let F=0;for(let y=0;y<7;y++){const K=new Date(ce);K.setDate(ce.getDate()+y),m.has(Vi(K))&&F++}return F},ue=ne=>ae?G:V?Q(ne)>=oe:!1,v=V?Q(yn):0,A=V&&v>=oe,P=ne=>{R.current=setTimeout(()=>g(ne),500)},se=()=>clearTimeout(R.current),le=ne=>{var W;E(ne),x(((W=e.log_notes)==null?void 0:W[ne])||""),g(null)};return t.jsxs("div",{children:[t.jsxs("div",{style:H.mainHead,children:[t.jsxs("div",{children:[t.jsxs("div",{style:H.eyebrow,children:[t.jsx("span",{style:{...H.sideDot,background:b,marginRight:6}}),e.pillar," · Monthly view"]}),t.jsx("h1",{style:H.h1,children:e.name})]}),t.jsxs("div",{style:{display:"flex",gap:8,marginTop:8,flexWrap:"wrap"},children:[t.jsxs("button",{onClick:i,style:H.actionBtn,children:[t.jsx(ut,{size:14})," Edit"]}),t.jsx("button",{onClick:()=>l(e.id,e.active===!1),style:{...H.actionBtn,...e.active===!1?{color:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:e.active===!1?t.jsxs(t.Fragment,{children:[t.jsx(He,{size:14})," Enable"]}):t.jsxs(t.Fragment,{children:[t.jsx(Fy,{size:14})," Disable"]})}),t.jsxs("button",{onClick:o,style:{...H.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[t.jsx(Re,{size:14})," Delete"]}),e.reminder_time&&t.jsxs("button",{style:H.actionBtn,children:[t.jsx(Xc,{size:14})," ",e.reminder_time]})]})]}),t.jsxs("div",{style:H.statStrip,children:[t.jsx($n,{label:"Current streak",value:`${e.streak} days`,c:b,soft:p,flame:!0}),t.jsx($n,{label:"Best streak",value:`${e.max_streak??e.streak} days`,c:b,soft:p,flame:!0}),t.jsx($n,{label:"Done this month",value:`${I}/${Z}`,c:b,soft:p}),t.jsx($n,{label:"Completion",value:`${be}%`,c:b,soft:p}),e.type==="regular"?t.jsx($n,{label:"Weekly target",value:`${e.target_per_week}×`,c:b,soft:p}):e.type==="weekly"?t.jsx($n,{label:"Days",value:(e.days||[]).map(ne=>Ui[ne]).join(", ")||"—",c:b,soft:p}):t.jsx($n,{label:e.type==="minimum"?"Min target":"Max allowed",value:`${e.target_count}/${e.period}`,c:b,soft:p})]}),d&&d(e),t.jsxs("div",{style:H.navBar,children:[t.jsx("button",{onClick:()=>k(ne=>ne-1),style:H.navBtn,children:t.jsx(dn,{size:16})}),t.jsxs("span",{style:H.navLabel,children:[ie,z===0?" · This month":""]}),t.jsx("button",{onClick:()=>k(ne=>Math.min(0,ne+1)),disabled:z>=0,style:{...H.navBtn,...z>=0?H.navBtnDisabled:{}},children:t.jsx(Nr,{size:16})})]}),ae&&t.jsxs("div",{style:{...H.chainBanner,background:G?p:"var(--bg)",color:G?b:"var(--text-3)"},children:[t.jsx(Sl,{size:15}),G?`${e.period==="year"?"Yearly":"Monthly"} chain complete — ${ve}/${e.target_count} connected`:`${ve}/${e.target_count} this ${e.period} · ${(e.target_count||0)-ve} more to connect the chain`]}),V&&z===0&&t.jsxs("div",{style:{...H.chainBanner,background:A?p:"var(--bg)",color:A?b:"var(--text-3)"},children:[t.jsx(Sl,{size:15}),A?`This week's chain complete — ${v}/${oe} connected`:`${v}/${oe} this week · ${Math.max(0,oe-v)} more to connect the chain`]}),t.jsxs("div",{style:H.monthCard,children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[t.jsx("div",{style:H.monthTitle,children:ie}),t.jsx("span",{style:{fontSize:11,color:"var(--text-3)"},children:"Long-press a day for options"})]}),t.jsx("div",{style:H.monthDow,children:Ui.map(ne=>t.jsx("div",{style:H.monthDowCell,children:ne},ne))}),t.jsxs("div",{style:H.monthGrid,children:[Array.from({length:D}).map((ne,W)=>t.jsx("div",{},`pad${W}`)),w.map((ne,W)=>{var it,ft;const U=W+1;if(T&&!L(ne)){const qe=C(ne),Tt=M(ne),It=(D+W)%7;return t.jsxs("div",{style:{position:"relative"},children:[Tt[qe]&&t.jsx("span",{style:{...H.chainLine,background:b,...It===0?{left:"50%"}:{left:Tt[qe-1]?-6:"50%"},...It===6?{right:"50%"}:{right:Tt[qe+1]?-6:"50%"}}}),t.jsx("div",{style:{...H.monthDay,...H.monthDayOff,width:"100%",position:"relative",zIndex:1},children:U})]},ne)}const ce=m.has(ne),F=ne>yn,y=ne===yn,K=!!((it=e.log_notes)!=null&&it[ne]),me=(e.type==="minimum"||e.type==="maximum")&&e.period==="day",O=(ft=e.log_counts)==null?void 0:ft[ne],Te=O!=null,Be=ue(ne),Ge=Be&&!ce,Ue=(D+W)%7;return t.jsxs("div",{style:{position:"relative"},children:[Be&&t.jsx("span",{style:{...H.chainLine,background:b,...Ue===0?{left:"50%"}:{left:-6},...Ue===6?{right:"50%"}:{right:-6}}}),T&&(()=>{const qe=C(ne),Tt=M(ne);return Tt[qe]?t.jsx("span",{style:{...H.chainLine,background:b,...Ue===0?{left:"50%"}:{left:Tt[qe-1]?-6:"50%"},...Ue===6?{right:"50%"}:{right:Tt[qe+1]?-6:"50%"}}}):null})(),t.jsx("button",{disabled:F,onClick:()=>r(e,ne),onMouseDown:()=>!me&&P(ne),onMouseUp:se,onTouchStart:()=>!me&&P(ne),onTouchEnd:se,style:{...H.monthDay,position:"relative",zIndex:1,...ce?{background:b,borderColor:b,color:"#fff"}:{},...Ge?{background:p,borderColor:b,color:b}:{},...me&&Te&&!ce?{borderColor:b,color:b}:{},...F&&!ce?H.monthDayFuture:{},...y&&!ce?{borderColor:b,borderWidth:2}:{},width:"100%"},children:U}),me&&Te&&t.jsx("span",{style:{...H.countBadge,background:ce?"#4C9A6B":b},children:O}),K&&t.jsx("span",{style:H.noteIndicator}),a===ne&&t.jsx(z0,{onEdit:i,onDelete:o,onAddNote:()=>le(ne),onRemind:i,onClose:()=>g(null)})]},ne)})]})]}),f&&t.jsxs("div",{style:H.noteBox,children:[t.jsxs("div",{style:{fontWeight:600,fontSize:13,marginBottom:6},children:["Note for ",f]}),t.jsx("textarea",{value:h,onChange:ne=>x(ne.target.value),placeholder:"Add a note for this day…",style:{...H.sideInput,minHeight:60,resize:"vertical"}}),t.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[t.jsxs("button",{onClick:()=>{s(f,h),E(null)},style:H.sideAddBtn,children:[t.jsx(He,{size:13})," Save"]}),t.jsx("button",{onClick:()=>E(null),style:H.sideCancelBtn,children:t.jsx(Re,{size:13})})]})]})]})}function z0({onEdit:e,onDelete:r,onAddNote:n,onRemind:o,onClose:i}){return t.jsxs("div",{style:H.longPressMenu,children:[t.jsxs("button",{style:H.menuItem,onClick:()=>{e(),i()},children:[t.jsx(ut,{size:13})," Edit"]}),t.jsxs("button",{style:H.menuItem,onClick:()=>{n(),i()},children:[t.jsx(qc,{size:13})," Add note"]}),t.jsxs("button",{style:H.menuItem,onClick:()=>{o(),i()},children:[t.jsx(Xc,{size:13})," Remind"]}),t.jsxs("button",{style:{...H.menuItem,color:"#C2536B"},onClick:()=>{r(),i()},children:[t.jsx(Re,{size:13})," Delete"]})]})}function T0({habits:e,onSave:r,onToggleActive:n,onClose:o}){const[i,s]=c.useState(()=>e.map(g=>g.id)),l=c.useMemo(()=>{const g={};return e.forEach(h=>g[h.id]=h),g},[e]),d=i.map(g=>l[g]).filter(Boolean),a=(g,h)=>{const x=g+h;if(x<0||x>=i.length)return;const f=[...i];[f[g],f[x]]=[f[x],f[g]],s(f)};return t.jsx("div",{style:H.modalOverlay,onClick:o,children:t.jsxs("div",{style:{...H.modal,maxHeight:"80vh",overflow:"hidden"},onClick:g=>g.stopPropagation(),children:[t.jsxs("div",{style:{...H.modalHead,flexShrink:0},children:["Edit Habits",t.jsx("button",{onClick:o,style:H.closeBtn,children:t.jsx(Re,{size:16})})]}),t.jsx("p",{style:{fontSize:12,color:"var(--text-3)",margin:"0 0 10px",flexShrink:0},children:"Reorder with the arrows. Toggle a habit off to hide it from your views (its history is kept)."}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6,overflowY:"auto",minHeight:0},children:d.map((g,h)=>{var E;const x=((E=An[g.pillar])==null?void 0:E.dot)||"#9A968C",f=g.active!==!1;return t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"9px 10px",background:"var(--bg)",borderRadius:9,border:"1px solid var(--border)",opacity:f?1:.5},children:[t.jsx("span",{style:{...H.sideDot,background:x}}),t.jsx("span",{style:{flex:1,fontSize:13,fontWeight:500,textDecoration:f?"none":"line-through"},children:g.name}),t.jsx("button",{onClick:()=>n(g.id,!f),title:f?"Disable (hide) habit":"Enable habit",style:{...H.activeToggle,...f?H.activeToggleOn:{}},role:"switch","aria-checked":f,children:t.jsx("span",{style:{...H.activeKnob,...f?H.activeKnobOn:{}}})}),t.jsx("button",{onClick:()=>a(h,-1),disabled:h===0,style:{...H.navBtn,width:28,height:28,opacity:h===0?.3:1,fontSize:14},children:"↑"}),t.jsx("button",{onClick:()=>a(h,1),disabled:h===d.length-1,style:{...H.navBtn,width:28,height:28,opacity:h===d.length-1?.3:1,fontSize:14},children:"↓"})]},g.id)})}),t.jsxs("button",{onClick:()=>r(i),style:{...H.sideAddBtn,width:"100%",marginTop:14,height:38,justifyContent:"center",flexShrink:0},children:[t.jsx(He,{size:14})," Save Order"]})]})})}function I0({year:e}){const[r,n]=c.useState([]);if(c.useEffect(()=>{_.getHabitsYearly(e).then(n).catch(console.error)},[e]),!r.length)return null;const o=Array.from({length:12},(s,l)=>{const d=r.reduce((g,h)=>{var x;return g+(((x=h.monthly[l+1])==null?void 0:x.done)||0)},0),a=r.reduce((g,h)=>{var x;return g+Math.floor((((x=h.monthly[l+1])==null?void 0:x.days)||30)/7*7)},0);return a>0?Math.round(d/a*100):0}),i=Math.max(...o,1);return t.jsxs("div",{style:{...H.monthCard,marginTop:18},children:[t.jsxs("div",{style:H.monthTitle,children:[e," Completion"]}),t.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:6,height:80,marginTop:12},children:o.map((s,l)=>t.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[t.jsx("div",{style:{width:"100%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",height:`${s/i*60}px`,minHeight:2,opacity:s>0?1:.15},title:`${s}%`}),t.jsx("span",{style:{fontSize:9,color:"var(--text-3)",fontWeight:600},children:b0[l]})]},l))})]})}function $n({label:e,value:r,c:n,soft:o,flame:i}){return t.jsxs("div",{style:{...H.stat,background:o},children:[t.jsx("div",{style:H.statLabel,children:e}),t.jsxs("div",{style:{...H.statValue,color:n},children:[i&&t.jsx(Wn,{size:15})," ",r]})]})}const H={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:230,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",padding:"20px 12px",display:"flex",flexDirection:"column",gap:3,overflowY:"auto"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.18)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)",boxShadow:"none"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.38)",zIndex:20},sideTop:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 4px"},closeBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",marginBottom:8},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700,padding:"0 6px 14px"},sideItem:{display:"flex",alignItems:"center",gap:9,width:"100%",border:"none",background:"none",padding:"9px 10px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:500,color:"var(--text-2)",textAlign:"left"},sideItemOn:{background:"var(--hover)",fontWeight:600},sideLabel:{flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},sideCount:{fontSize:11,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:10,padding:"1px 7px"},sideStreak:{display:"flex",alignItems:"center",gap:3,fontSize:11,fontWeight:600,color:"#C2773B"},sideDot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},sideDivider:{height:1,background:"var(--border)",margin:"8px 6px"},addBox:{padding:"10px 6px",display:"flex",flexDirection:"column",gap:6},sideInput:{border:"1px solid var(--border)",borderRadius:7,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},sideAddBtn:{border:"none",background:"#4C9A6B",color:"#fff",height:30,padding:"0 12px",borderRadius:7,cursor:"pointer",display:"flex",alignItems:"center",gap:5,fontSize:13,fontFamily:"inherit"},sideCancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:30,height:30,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},sideNewBtn:{display:"flex",alignItems:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",borderRadius:8,padding:"8px 10px",fontSize:12.5,color:"var(--text-3)",fontWeight:600,cursor:"pointer",fontFamily:"inherit",marginTop:6,justifyContent:"center"},main:{flex:1,padding:"26px",overflowX:"hidden",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:200},mainHead:{marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:5,display:"flex",alignItems:"center"},h1:{fontSize:27,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},actionBtn:{display:"flex",alignItems:"center",gap:5,fontSize:12,fontWeight:500,color:"var(--text-2)",border:"1px solid var(--border)",background:"var(--surface)",padding:"5px 10px",borderRadius:7,cursor:"pointer",fontFamily:"inherit"},progressCard:{background:"var(--surface)",borderRadius:12,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14,display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"},progressDivider:{width:1,alignSelf:"stretch",background:"var(--border)",minHeight:48},ringStat:{display:"flex",alignItems:"center",gap:12,flex:"1 1 160px"},ringBox:{position:"relative",width:70,height:70,display:"grid",placeItems:"center",flexShrink:0},ringPct:{position:"absolute",inset:0,display:"grid",placeItems:"center",fontSize:16,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},ringLabel:{fontSize:14,fontWeight:700,color:"var(--text)"},ringSub:{fontSize:11.5,color:"var(--text-3)",fontWeight:500,marginTop:2},weekCard:{background:"var(--surface)",borderRadius:12,padding:"8px 14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"auto"},weekHeadRow:{display:"flex",alignItems:"flex-end",padding:"10px 0",borderBottom:"1px solid var(--border)",minWidth:480,position:"relative",zIndex:0},weekNameCol:{width:160,flexShrink:0,alignSelf:"stretch",display:"flex",alignItems:"center",gap:8,position:"sticky",left:0,zIndex:5,background:"var(--surface)",boxShadow:"6px 0 6px -6px rgba(0,0,0,0.15)"},weekDayHead:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:2},weekDayName:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekDayNum:{fontSize:12,fontWeight:600,color:"var(--text-2)",width:22,height:22,display:"grid",placeItems:"center",borderRadius:"50%"},weekDayToday:{background:"var(--accent-strong)",color:"#fff"},weekStreakCol:{width:64,flexShrink:0,textAlign:"center",fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekRow:{display:"flex",alignItems:"center",padding:"9px 0",borderBottom:"1px solid #F4F2EC",minWidth:480,position:"relative",zIndex:0},weekHabitName:{fontSize:13,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},weekCell:{flex:1,display:"grid",placeItems:"center"},typeBadge:{fontSize:10,color:"var(--text-3)",background:"var(--hover)",padding:"1px 6px",borderRadius:8,fontWeight:600},tick:{width:26,height:26,borderRadius:7,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",padding:0,position:"relative",zIndex:1},tickFuture:{opacity:.4,cursor:"not-allowed",borderStyle:"dashed"},streakPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:12,fontWeight:700,padding:"3px 9px",borderRadius:12},tinyBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:"2px 3px",display:"grid",placeItems:"center",borderRadius:4},statStrip:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(120px,1fr))",gap:10,marginBottom:18},stat:{borderRadius:10,padding:"13px 14px"},statLabel:{fontSize:11,fontWeight:600,color:"var(--text-2)",marginBottom:5},statValue:{fontSize:19,fontWeight:700,display:"flex",alignItems:"center",gap:5,fontFamily:"'Fraunces',Georgia,serif"},monthCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},monthTitle:{fontSize:14,fontWeight:700,marginBottom:12,fontFamily:"'Fraunces',Georgia,serif"},monthDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6,marginBottom:8},monthDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},monthGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6},monthDay:{aspectRatio:"1",border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",display:"grid",placeItems:"center"},monthDayFuture:{opacity:.4,cursor:"not-allowed",background:"var(--surface-2)"},monthDayOff:{background:"var(--surface-2)",borderStyle:"dashed",color:"var(--text-3)",opacity:.5,cursor:"default"},dayPick:{display:"flex",gap:4,flexWrap:"wrap"},dayChip:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",borderRadius:7,padding:"5px 7px",fontSize:11,fontWeight:700,cursor:"pointer",fontFamily:"inherit",minWidth:34},dayChipOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},pickHint:{fontSize:11,color:"var(--text-3)",fontWeight:600},offDay:{color:"var(--text-3)",opacity:.4,fontSize:18,lineHeight:1,userSelect:"none"},noteIndicator:{position:"absolute",top:3,right:3,width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},cellNoteBubble:{position:"absolute",top:2,right:"calc(50% - 16px)",width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},countBadge:{position:"absolute",bottom:2,right:2,minWidth:13,height:13,padding:"0 2px",borderRadius:7,color:"#fff",fontSize:9,fontWeight:700,display:"grid",placeItems:"center",lineHeight:1},counterBtn:{width:44,height:44,borderRadius:"50%",border:"1.5px solid var(--border)",background:"var(--surface)",color:"var(--text)",fontSize:24,fontWeight:700,cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit",lineHeight:1},inlineCounter:{display:"flex",alignItems:"center",gap:10,padding:"8px 12px",margin:"2px 0 8px",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,flexWrap:"wrap"},inlineCount:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1},inlineTarget:{fontSize:12,fontWeight:600,color:"var(--text-3)",marginLeft:1},inlinePlus:{width:30,height:30,borderRadius:8,border:"1.5px solid var(--border)",background:"var(--surface)",color:"var(--text)",fontSize:18,fontWeight:700,cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit",lineHeight:1,flexShrink:0},inlineSet:{height:30,padding:"0 12px",borderRadius:8,border:"1.5px solid var(--border)",background:"var(--surface)",color:"var(--text)",fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",flexShrink:0},inlineWait:{fontSize:12,fontWeight:700,color:"#C2773B"},inlineReady:{fontSize:12,fontWeight:700,color:"#4C9A6B"},inlineMore:{marginLeft:"auto",border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",fontSize:16,fontWeight:700,lineHeight:1},activeToggle:{position:"relative",width:38,height:22,borderRadius:11,border:"none",background:"var(--border)",cursor:"pointer",flexShrink:0,transition:"background 0.2s",padding:0},activeToggleOn:{background:"#4C9A6B"},activeKnob:{position:"absolute",top:3,left:3,width:16,height:16,borderRadius:"50%",background:"#fff",transition:"left 0.2s",boxShadow:"0 1px 2px rgba(0,0,0,0.3)"},activeKnobOn:{left:19},chainLine:{position:"absolute",top:"calc(50% - 3px)",left:0,right:0,height:6,zIndex:0,opacity:.9},chainBanner:{display:"flex",alignItems:"center",gap:8,borderRadius:10,padding:"10px 14px",marginBottom:14,fontSize:12.5,fontWeight:700,fontFamily:"'Inter',system-ui,sans-serif"},navBar:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:16},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},navLabel:{fontSize:13,fontWeight:700,color:"var(--text)",minWidth:180,textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},noteBox:{background:"var(--surface)",borderRadius:10,padding:14,marginTop:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},longPressMenu:{position:"absolute",top:"100%",left:0,zIndex:50,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 4px 16px rgba(0,0,0,0.12)",padding:"4px 0",minWidth:140},menuItem:{display:"flex",alignItems:"center",gap:8,width:"100%",border:"none",background:"none",padding:"8px 14px",fontSize:13,color:"var(--text)",cursor:"pointer",fontFamily:"inherit",textAlign:"left"},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",zIndex:100,display:"grid",placeItems:"center"},modal:{background:"var(--surface)",borderRadius:14,padding:24,width:320,maxWidth:"90vw",display:"flex",flexDirection:"column",gap:8},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",fontWeight:700,fontSize:16,fontFamily:"'Fraunces',Georgia,serif",marginBottom:6},modalLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.08em",marginTop:4}},Yd=[{id:1,label:"Rough",emoji:"😣",color:"#C2536B"},{id:2,label:"Low",emoji:"🙁",color:"#C2773B"},{id:3,label:"Okay",emoji:"😐",color:"#C9A227"},{id:4,label:"Good",emoji:"🙂",color:"#4C9A6B"},{id:5,label:"Great",emoji:"😄",color:"#3A7CA5"}],E0=e=>Yd.find(r=>r.id===e),Da=[{id:"wins",label:"Wins",hint:"What went well today?",icon:Pr,color:"#C9A227"},{id:"grateful",label:"Grateful for",hint:"1–3 things",icon:Fm,color:"#C2536B"},{id:"mattered",label:"What mattered",hint:"The point of today",icon:rg,color:"#3A7CA5"},{id:"letgo",label:"Letting go of",hint:"Offload what's draining",icon:Yy,color:"#8268B0"},{id:"tomorrow",label:"Tomorrow's one thing",hint:"A single priority",icon:Gm,color:"#4C9A6B"}],Zm=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,B0=()=>Zm(new Date),Aa=e=>new Date(e+"T00:00:00").toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long",year:"numeric"});function D0(){const e=B0(),[r,n]=[new Date().getFullYear(),new Date().getMonth()+1],[o,i]=c.useState(null),s=o||e,l=s===e,[d,a]=c.useState(null),[g,h]=c.useState({}),[x,f]=c.useState(Object.fromEntries(Da.map(w=>[w.id,""]))),E=c.useCallback(async w=>{const D=await _.getJournalEntry(w);a(D)},[]);c.useCallback(async()=>{const w=await _.getJournalHistory(r,n);h(w)},[r,n]);const z=c.useCallback(async()=>{const[w,D]=await Promise.all([_.getJournalEntry(s),_.getJournalHistory(r,n)]);a(w),h(D)},[s,r,n]);c.useEffect(()=>{z()},[z]);const k=async w=>{l&&(await _.updateJournalMood(s,w),z())},R=async w=>{if(!l)return;const D=x[w].trim();D&&(await _.addJournalBullet(s,w,D),f(ie=>({...ie,[w]:""})),E(s))},b=async w=>{await _.deleteJournalBullet(w),E(s)},p=w=>{i(w===e?null:w),f(Object.fromEntries(Da.map(D=>[D.id,""])))};if(!d)return t.jsx("div",{style:{padding:28,color:"var(--text-3)"},children:"Loading…"});const m=d.mood!==null,T=(()=>{let w=0;const D=new Date(e);if(g[e]||l&&m)w=1,D.setDate(D.getDate()-1);else return 0;for(;;){const B=Zm(D);if(g[B])w++,D.setDate(D.getDate()-1);else break}return w})(),j=Object.values(d.bullets||{}).reduce((w,D)=>w+D.length,0),C=new Date(r,n,0).getDate(),L=new Date(r,n-1,1).getDay(),M=L===0?6:L-1;return t.jsxs("div",{style:Ye.page,children:[t.jsxs("div",{style:Ye.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:Ye.eyebrow,children:"Anvil · Journal"}),!l&&t.jsxs("button",{style:Ye.backBtn,onClick:()=>i(null),children:[t.jsx(dn,{size:14})," Back to Today"]}),t.jsx("h1",{style:Ye.h1,children:l?"Today":Aa(s)}),l&&t.jsx("div",{style:Ye.date,children:Aa(e)})]}),t.jsxs("div",{style:Ye.streakBox,children:[t.jsx(Wn,{size:16,color:"#C2773B"}),t.jsx("span",{style:Ye.streakNum,children:T}),t.jsx("span",{style:Ye.streakLabel,children:"day streak"})]})]}),t.jsxs("div",{style:Ye.card,children:[t.jsxs("div",{style:Ye.cardTitle,children:["How ",l?"are":"were"," you?"]}),t.jsx("div",{style:Ye.moodRow,children:Yd.map(w=>{const D=d.mood===w.id;return t.jsxs("button",{onClick:()=>k(w.id),disabled:!l,style:{...Ye.moodBtn,cursor:l?"pointer":"default",...D?{background:w.color,borderColor:w.color,transform:"translateY(-2px)"}:{},...!l&&!D?{opacity:.55}:{}},children:[t.jsx("span",{style:Ye.moodEmoji,children:w.emoji}),t.jsx("span",{style:{...Ye.moodLabel,color:D?"#fff":"#6B675E"},children:w.label})]},w.id)})})]}),Da.map(w=>{var B;const D=w.icon,ie=((B=d.bullets)==null?void 0:B[w.id])||[];return t.jsxs("div",{style:Ye.card,children:[t.jsxs("div",{style:Ye.sectionHead,children:[t.jsx("span",{style:{...Ye.sectionIcon,background:`${w.color}1A`,color:w.color},children:t.jsx(D,{size:15})}),t.jsxs("div",{children:[t.jsx("div",{style:Ye.cardTitle,children:w.label}),t.jsx("div",{style:Ye.sectionHint,children:w.hint})]})]}),t.jsxs("ul",{style:Ye.bulletList,children:[ie.map(I=>t.jsxs("li",{style:Ye.bullet,children:[t.jsx("span",{style:{...Ye.bulletDot,background:w.color}}),t.jsx("span",{style:Ye.bulletText,children:I.text}),l&&t.jsx("button",{onClick:()=>b(I.id),style:Ye.bulletDel,children:t.jsx(Re,{size:13})})]},I.id)),!l&&ie.length===0&&t.jsx("li",{style:Ye.sectionHint,children:"Nothing written."})]}),l&&t.jsxs("div",{style:Ye.addRow,children:[t.jsx("input",{placeholder:"Add a point…",value:x[w.id],onChange:I=>f(Z=>({...Z,[w.id]:I.target.value})),onKeyDown:I=>I.key==="Enter"&&R(w.id),style:Ye.input}),t.jsx("button",{onClick:()=>R(w.id),style:{...Ye.addBtn,background:w.color},children:t.jsx(Ze,{size:16})})]})]},w.id)}),t.jsxs("div",{style:Ye.card,children:[t.jsxs("div",{style:Ye.cardTitle,children:[new Date(r,n-1).toLocaleDateString("en-US",{month:"long",year:"numeric"})," · Mood history",t.jsx("span",{style:{fontSize:11,color:"var(--text-3)",fontWeight:400,marginLeft:8},children:"tap a day to view"})]}),t.jsx("div",{style:Ye.calDow,children:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(w=>t.jsx("div",{style:Ye.calDowCell,children:w},w))}),t.jsxs("div",{style:Ye.calGrid,children:[Array.from({length:M}).map((w,D)=>t.jsx("div",{},`p${D}`)),Array.from({length:C},(w,D)=>D+1).map(w=>{const D=`${r}-${String(n).padStart(2,"0")}-${String(w).padStart(2,"0")}`,ie=D===e&&d.mood?d.mood:g[D],B=ie?E0(ie):null,I=D>e,Z=D===s;return t.jsx("button",{onClick:()=>!I&&p(D),disabled:I,style:{...Ye.calDay,background:B?B.color:I?"var(--surface-2)":"var(--surface)",borderColor:Z?"var(--accent-strong)":"var(--border)",borderWidth:Z?2:1,color:B?"#fff":"var(--text-3)",opacity:I?.5:1,cursor:I?"not-allowed":"pointer",outline:Z?"2px solid var(--accent-strong)":"none",outlineOffset:1},title:B?B.label:D,children:B?B.emoji:w},w)})]}),t.jsx("div",{style:Ye.legend,children:Yd.map(w=>t.jsxs("span",{style:Ye.legendItem,children:[t.jsx("span",{style:{...Ye.legendDot,background:w.color}})," ",w.label]},w.id))})]}),t.jsx("div",{style:Ye.footer,children:l?m?`Mood set · ${j} point${j===1?"":"s"} written today`:"Tap a mood to log today and keep your streak":`Viewing ${Aa(s)} · past entries are read-only`})]})}const Ye={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:22},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},backBtn:{display:"inline-flex",alignItems:"center",gap:4,border:"none",background:"none",color:"#3A7CA5",fontSize:12.5,fontWeight:600,cursor:"pointer",padding:"0 0 6px",fontFamily:"inherit"},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},date:{fontSize:13,color:"var(--text-3)",marginTop:4},streakBox:{display:"flex",alignItems:"center",gap:6,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"8px 14px"},streakNum:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"#C2773B"},streakLabel:{fontSize:11,color:"var(--text-3)",fontWeight:500},card:{background:"var(--surface)",borderRadius:12,padding:"18px 20px",marginBottom:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},cardTitle:{fontSize:14,fontWeight:700,marginBottom:12,color:"var(--text)"},moodRow:{display:"flex",gap:8,flexWrap:"wrap"},moodBtn:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,border:"2px solid var(--border)",background:"var(--surface)",borderRadius:10,padding:"10px 12px",cursor:"pointer",flex:"1 1 60px",transition:"transform 0.1s"},moodEmoji:{fontSize:22},moodLabel:{fontSize:11,fontWeight:600},sectionHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:10},sectionIcon:{width:32,height:32,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},sectionHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},bulletList:{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6,marginBottom:10},bullet:{display:"flex",alignItems:"center",gap:8,fontSize:13.5,lineHeight:1.4},bulletDot:{width:6,height:6,borderRadius:"50%",flexShrink:0},bulletText:{flex:1},bulletDel:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},addRow:{display:"flex",gap:8},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 12px",fontSize:13.5,fontFamily:"inherit",outline:"none"},addBtn:{width:36,height:36,border:"none",borderRadius:8,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:12},calDay:{aspectRatio:"1",border:"1px solid var(--border)",borderRadius:7,fontSize:13,display:"grid",placeItems:"center",fontWeight:500,fontFamily:"inherit"},legend:{display:"flex",gap:10,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)"},legendDot:{width:8,height:8,borderRadius:"50%",display:"inline-block"},footer:{fontSize:12.5,color:"var(--text-3)",textAlign:"center",marginTop:8,fontStyle:"italic"}};function A0(e=760){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const vr=[{id:"D",label:"Data",color:"#3A7CA5",soft:"rgba(58,124,165,0.10)",prompt:"What did you read/watch? Log the raw source and a quick note.",hint:"e.g. 'Atomic Habits ch.1 — habits are systems not goals'"},{id:"I",label:"Information",color:"#8268B0",soft:"rgba(130,104,176,0.10)",prompt:"What did you actually understand from it? In your own words.",hint:"e.g. 'Small 1% improvements compound into massive change over time'"},{id:"K",label:"Knowledge",color:"#C9A227",soft:"rgba(201,162,39,0.10)",prompt:"How will this specifically improve your life? Connect it to your goals.",hint:"e.g. 'I will improve my morning workout habit by 1% each week'"},{id:"W",label:"Wisdom",color:"#4C9A6B",soft:"rgba(76,154,107,0.10)",prompt:"How have you implemented it? What changed?",hint:"e.g. 'I've not missed a workout in 3 weeks using the 1% rule'"}],Mu=e=>vr.findIndex(r=>r.id===e),Qd=[{id:"book",label:"Book",icon:Vl},{id:"video",label:"Video",icon:Qy},{id:"article",label:"Article",icon:qc}],Wu=e=>Qd.find(r=>r.id===e)||Qd[0],Ra={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"};function R0(){var ce;const[e,r]=c.useState([]),[n,o]=c.useState(null),[i,s]=c.useState("ALL"),[l,d]=c.useState(!1),[a,g]=c.useState(null),[h,x]=c.useState({title:"",type:"book",pillar:"Academic",note:""}),[f,E]=c.useState({}),[z,k]=c.useState(null),[R,b]=c.useState(null),[p,m]=c.useState({}),[T,j]=c.useState({}),[C,L]=c.useState(null),M=A0(),w=c.useCallback(async()=>{try{const F=await _.getSkills();r(F);const y={};F.forEach(K=>{y[K.id]=Object.fromEntries(vr.map(me=>[me.id,""]))}),E(K=>{const me={...y};return F.forEach(O=>{K[O.id]&&(me[O.id]={...y[O.id],...K[O.id]})}),me})}catch(F){console.error(F)}},[]);c.useEffect(()=>{w()},[w]);const D=e.find(F=>F.id===n),ie=D?Mu(D.stage):-1,B=async(F,y)=>{var me;const K=(((me=f[F])==null?void 0:me[y])??"").trim();K&&(await _.addSkillNote(F,y,K),E(O=>({...O,[F]:{...O[F],[y]:""}})),w())},I=async F=>{await _.deleteSkillNote(F),w()},Z=F=>(F==null?void 0:F.source_type)==="book"?"Chapter":"Learning",be=()=>`g${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,ae=async F=>{const y=[...F.data_groups||[]];y.push({id:be(),label:`${Z(F)} ${y.length+1}`}),await _.setSkillGroups(F.id,y),j(K=>({...K,[y[y.length-1].id]:!0})),w()},ve=async(F,y,K)=>{const me=(F.data_groups||[]).map(O=>O.id===y?{...O,label:K}:O);await _.setSkillGroups(F.id,me),w()},G=async(F,y)=>{const K=(F.data_groups||[]).filter(me=>me.id!==y);await _.setSkillGroups(F.id,K),w()},V=async(F,y)=>{const K=(p[y]??"").trim();K&&(await _.addSkillNote(F.id,"D",K,y),m(me=>({...me,[y]:""})),w())},oe=async()=>{!D||!(R!=null&&R.trim())||(await _.updateSkill(D.id,{title:R.trim()}),b(null),w())},Q=async()=>{!z||!z.text.trim()||(await _.updateSkillNote(z.id,z.text.trim()),k(null),w())},ue=async F=>{await _.toggleSkillNote(F),w()},v=async(F,y)=>{e.find(me=>me.id===F)&&(y==="W"&&g(F),await _.completeSkillStage(F,y),w())},A=async()=>{if(!h.title.trim())return;const F=await _.createSkill({pillar:h.pillar,title:h.title.trim(),source_type:h.type,note_d:h.note.trim()});d(!1),x({title:"",type:"book",pillar:"Academic",note:""}),o(F.id),w()},{deleteItem:P,toasts:se,handleUndo:le,handleDismiss:De}=er(_.deleteSkill,_.restoreSkill,w),Y=(F,y="Skill")=>{n===F&&o(null),P(F,y)},ne=i==="ALL"?e:e.filter(F=>F.stage===i),W=e.filter(F=>F.stage==="W").length,U=!!D;return t.jsxs("div",{style:he.page,children:[a&&t.jsx("div",{style:he.celebOverlay,children:t.jsxs("div",{style:he.celebBox,children:[t.jsx("div",{style:he.celebEmoji,children:"🏆"}),t.jsx("div",{style:he.celebTitle,children:"Wisdom unlocked!"}),t.jsx("div",{style:he.celebSub,children:"You've implemented this knowledge — that's rare and real."}),t.jsx("button",{onClick:()=>g(null),style:he.celebBtn,children:"Continue"})]})}),t.jsxs("div",{style:he.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:he.eyebrow,children:"Anvil · Skills"}),t.jsx("h1",{style:he.h1,children:"DIKW Skills"}),t.jsx("div",{style:he.subhead,children:"Data → Information → Knowledge → Wisdom"})]}),t.jsxs("div",{style:he.headRight,children:[t.jsxs("div",{style:he.wisdomBadge,children:[t.jsx(Pr,{size:14,color:"#C9A227"})," ",W," Wisdom",W!==1?"s":""]}),t.jsxs("button",{onClick:()=>{d(!0),o(null)},style:he.addSkillBtn,children:[t.jsx(Ze,{size:15})," Add skill"]})]})]}),t.jsx("div",{style:he.filterBar,children:["ALL",...vr.map(F=>F.id)].map(F=>{const y=vr.find(me=>me.id===F),K=i===F;return t.jsx("button",{onClick:()=>s(F),style:{...he.filterBtn,...K?{background:y?y.color:"var(--accent-strong)",color:"#fff",borderColor:"transparent"}:{}},children:y?`${F} · ${y.label}`:"All"},F)})}),t.jsxs("div",{style:{...he.layout,gridTemplateColumns:!M&&U?"minmax(0,1fr) minmax(0,1fr)":"1fr"},children:[(!M||!D)&&t.jsxs("div",{style:{...he.cardList,gridTemplateColumns:M||U?"1fr":"repeat(3, minmax(0, 1fr))"},children:[l&&t.jsxs("div",{style:{...he.skillCard,border:"2px dashed #3A7CA5",gridColumn:"1 / -1"},children:[t.jsx("div",{style:he.cardTitle,children:"New skill"}),t.jsx("input",{placeholder:"Title (book / video / article name)",value:h.title,onChange:F=>x(y=>({...y,title:F.target.value})),onKeyDown:F=>F.key==="Enter"&&A(),style:he.input,autoFocus:!0}),t.jsxs("div",{style:he.addRow,children:[t.jsx("select",{value:h.type,onChange:F=>x(y=>({...y,type:F.target.value})),style:he.select,children:Qd.map(F=>t.jsx("option",{value:F.id,children:F.label},F.id))}),t.jsx("select",{value:h.pillar,onChange:F=>x(y=>({...y,pillar:F.target.value})),style:he.select,children:Object.keys(Ra).map(F=>t.jsx("option",{children:F},F))})]}),t.jsxs("div",{style:he.addRow,children:[t.jsxs("button",{onClick:A,style:he.saveBtn,children:[t.jsx(He,{size:14})," Save"]}),t.jsxs("button",{onClick:()=>d(!1),style:he.cancelBtn,children:[t.jsx(Re,{size:14})," Cancel"]})]})]}),ne.map(F=>{const y=Mu(F.stage),K=vr[y],me=Wu(F.source_type),O=F.stage==="W",Te=n===F.id;return t.jsxs("div",{onClick:()=>o(Te?null:F.id),style:{...he.skillCard,...Te?{borderColor:K.color,borderWidth:2}:{},...O?{background:"rgba(76,154,107,0.05)"}:{}},children:[t.jsxs("div",{style:he.skillCardTop,children:[t.jsxs("div",{style:he.skillMeta,children:[t.jsx("span",{style:{color:Ra[F.pillar]},children:t.jsx(me.icon,{size:13})}),t.jsx("span",{style:{...he.pillarDot,background:Ra[F.pillar]}}),t.jsxs("span",{style:he.srcLabel,children:[me.label," · ",F.pillar]})]}),t.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[O&&t.jsx(ro,{size:14,color:"#4C9A6B"}),t.jsx("button",{onClick:Be=>{Be.stopPropagation(),Y(F.id,F.title)},style:he.ghostBtn,children:t.jsx(Re,{size:13})})]})]}),t.jsx("div",{style:he.skillTitle,children:F.title}),t.jsxs("div",{style:he.track,children:[vr.map((Be,Ge)=>{var qe;const Ue=Ge<y,it=Ge===y,ft=(qe=F.completed_stages)==null?void 0:qe[Be.id];return t.jsxs("div",{style:{...he.trackItem,...Ge<vr.length-1?{flex:1}:{}},children:[t.jsxs("div",{style:{...he.trackDot,background:Ue||ft||it?Be.color:"var(--border)",boxShadow:it?`0 0 0 3px ${Be.color}33`:"none"},children:[(Ue||it&&ft)&&t.jsx(He,{size:9,color:"#fff",strokeWidth:3}),it&&!ft&&t.jsx("span",{style:he.trackCurrent,children:Be.id}),!Ue&&!it&&t.jsx(xu,{size:8,color:"#B5B1A7"})]}),Ge<vr.length-1&&t.jsx("div",{style:{...he.trackLine,background:Ue?vr[Ge+1].color:"var(--border)"}})]},Be.id)}),t.jsx("span",{style:{...he.stageTag,background:K.soft,color:K.color},children:K.label})]})]},F.id)}),ne.length===0&&!l&&t.jsx("div",{style:{...he.empty,gridColumn:"1 / -1"},children:"No skills at this stage yet."})]}),D&&t.jsxs("div",{style:he.detail,children:[t.jsxs("div",{style:he.detailHead,children:[M&&t.jsx("button",{onClick:()=>{o(null),b(null)},style:he.backBtn,title:"Back to skills",children:t.jsx(dn,{size:18})}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsxs("div",{style:he.eyebrow,children:[Wu(D.source_type).label," · ",D.pillar]}),R!==null?t.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",marginTop:4},children:[t.jsx("input",{autoFocus:!0,value:R,onChange:F=>b(F.target.value),onKeyDown:F=>{F.key==="Enter"&&oe(),F.key==="Escape"&&b(null)},style:{...he.input,fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:0,flex:1}}),t.jsx("button",{onClick:oe,style:{...he.noteAddBtn,background:"#4C9A6B",width:30,height:30},children:t.jsx(He,{size:13})}),t.jsx("button",{onClick:()=>b(null),style:{...he.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:30,height:30},children:t.jsx(Re,{size:13})})]}):t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[t.jsx("div",{style:he.detailTitle,children:D.title}),t.jsx("button",{onClick:()=>b(D.title),style:he.ghostBtn,title:"Edit name",children:t.jsx(ut,{size:13})})]})]}),t.jsx("button",{onClick:()=>{o(null),b(null)},style:he.closeBtn,children:t.jsx(Re,{size:16})})]}),vr.map((F,y)=>{var Ue,it,ft;const K=y<=ie,me=y===ie,O=y<ie||((Ue=D.completed_stages)==null?void 0:Ue[F.id]),Te=y>ie,Be=((it=D.notes)==null?void 0:it[F.id])||[],Ge=((ft=f[D.id])==null?void 0:ft[F.id])??"";return t.jsxs("div",{style:{...he.stageBlock,...K?{borderColor:F.color}:{},opacity:Te?.45:1},children:[t.jsxs("div",{style:he.stageBlockHead,children:[t.jsx("div",{style:{...he.stageLetter,background:K?F.color:"var(--border)",color:K?"#fff":"#9A968C"},children:O&&!me?t.jsx(He,{size:12,color:"#fff",strokeWidth:3}):Te?t.jsx(xu,{size:11,color:"#9A968C"}):F.id}),t.jsxs("div",{style:{flex:1},children:[t.jsx("div",{style:{...he.stageName,color:K?F.color:"#9A968C"},children:F.label}),K&&t.jsx("div",{style:he.stagePrompt,children:F.prompt})]}),O&&!me&&t.jsx("span",{style:{...he.doneBadge,color:F.color,background:F.soft},children:"Done"})]}),K&&(()=>{var Me,Pe;const qe=F.id==="W",Tt=F.id==="D",It=Be.length>0&&Be.every(Se=>Se.done),kt=qe?It:Be.length>0,pt=D.data_groups||[],wt=Be.filter(Se=>!Se.grp),u=Z(D),te=Se=>t.jsxs("li",{style:he.noteItem,children:[t.jsx("span",{style:{...he.noteDot,background:F.color}}),(z==null?void 0:z.id)===Se.id?t.jsxs("div",{style:{flex:1,display:"flex",gap:5},children:[t.jsx("input",{autoFocus:!0,value:z.text,onChange:Oe=>k(St=>({...St,text:Oe.target.value})),onKeyDown:Oe=>{Oe.key==="Enter"&&Q(),Oe.key==="Escape"&&k(null)},style:{...he.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}),t.jsx("button",{onClick:Q,style:{...he.noteAddBtn,background:F.color,width:28,height:28},children:t.jsx(He,{size:12})}),t.jsx("button",{onClick:()=>k(null),style:{...he.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:28,height:28},children:t.jsx(Re,{size:12})})]}):t.jsx("span",{style:he.noteText,children:Se.text}),(z==null?void 0:z.id)!==Se.id&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>k({id:Se.id,text:Se.text}),style:he.ghostBtn,children:t.jsx(ut,{size:12})}),t.jsx("button",{onClick:()=>I(Se.id),style:he.ghostBtn,children:t.jsx(Re,{size:12})})]})]},Se.id);return t.jsxs(t.Fragment,{children:[Tt?t.jsxs(t.Fragment,{children:[wt.length>0&&t.jsx("ul",{style:he.noteList,children:wt.map(te)}),pt.map(Se=>{const Oe=Be.filter(Rt=>Rt.grp===Se.id),St=T[Se.id]!==!1;return t.jsxs("div",{style:{...he.groupBox,borderColor:`${F.color}55`},children:[t.jsxs("div",{style:he.groupHead,children:[t.jsx("button",{onClick:()=>j(Rt=>({...Rt,[Se.id]:!St})),style:he.groupCaret,children:St?t.jsx(Zi,{size:15}):t.jsx(Nr,{size:15})}),D.source_type==="book"?t.jsx(Vl,{size:13,color:F.color}):t.jsx(wy,{size:13,color:F.color}),(C==null?void 0:C.id)===Se.id?t.jsx("input",{autoFocus:!0,value:C.label,onChange:Rt=>L(cn=>({...cn,label:Rt.target.value})),onKeyDown:Rt=>{Rt.key==="Enter"&&(ve(D,Se.id,C.label.trim()||Se.label),L(null)),Rt.key==="Escape"&&L(null)},onBlur:()=>{ve(D,Se.id,C.label.trim()||Se.label),L(null)},style:{...he.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}):t.jsx("span",{style:he.groupTitle,onClick:()=>L({id:Se.id,label:Se.label}),title:"Click to rename",children:Se.label}),t.jsx("span",{style:he.groupCount,children:Oe.length}),t.jsx("button",{onClick:()=>G(D,Se.id),style:he.ghostBtn,title:`Delete ${u.toLowerCase()}`,children:t.jsx(Re,{size:13})})]}),St&&t.jsxs("div",{style:he.groupBody,children:[Oe.length>0&&t.jsx("ul",{style:he.noteList,children:Oe.map(te)}),t.jsxs("div",{style:he.noteAddRow,children:[t.jsx("input",{placeholder:"Add a point…",value:p[Se.id]??"",onChange:Rt=>m(cn=>({...cn,[Se.id]:Rt.target.value})),onKeyDown:Rt=>Rt.key==="Enter"&&V(D,Se.id),style:he.noteInput}),t.jsx("button",{onClick:()=>V(D,Se.id),style:{...he.noteAddBtn,background:F.color},children:t.jsx(Ze,{size:14})})]})]})]},Se.id)}),pt.length===0&&wt.length===0&&t.jsxs("div",{style:he.noNotes,children:["No ",u.toLowerCase(),"s yet — add one to start logging points."]}),t.jsxs("button",{onClick:()=>ae(D),style:{...he.addGroupBtn,color:F.color,borderColor:`${F.color}80`},children:[t.jsx(Ze,{size:14})," Add ",u.toLowerCase()]})]}):t.jsxs(t.Fragment,{children:[Be.length>0&&t.jsx("ul",{style:he.noteList,children:Be.map(Se=>t.jsxs("li",{style:he.noteItem,children:[qe?t.jsx("button",{onClick:()=>ue(Se.id),style:{...he.checkBox,...Se.done?{background:F.color,borderColor:F.color}:{}},children:Se.done&&t.jsx(He,{size:11,color:"#fff",strokeWidth:3})}):t.jsx("span",{style:{...he.noteDot,background:F.color}}),(z==null?void 0:z.id)===Se.id?t.jsxs("div",{style:{flex:1,display:"flex",gap:5},children:[t.jsx("input",{autoFocus:!0,value:z.text,onChange:Oe=>k(St=>({...St,text:Oe.target.value})),onKeyDown:Oe=>{Oe.key==="Enter"&&Q(),Oe.key==="Escape"&&k(null)},style:{...he.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}),t.jsx("button",{onClick:Q,style:{...he.noteAddBtn,background:F.color,width:28,height:28},children:t.jsx(He,{size:12})}),t.jsx("button",{onClick:()=>k(null),style:{...he.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:28,height:28},children:t.jsx(Re,{size:12})})]}):t.jsx("span",{style:{...he.noteText,...qe&&Se.done?{textDecoration:"line-through",color:"var(--text-3)"}:{}},children:Se.text}),(z==null?void 0:z.id)!==Se.id&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>k({id:Se.id,text:Se.text}),style:he.ghostBtn,children:t.jsx(ut,{size:12})}),t.jsx("button",{onClick:()=>I(Se.id),style:he.ghostBtn,children:t.jsx(Re,{size:12})})]})]},Se.id))}),Be.length===0&&t.jsx("div",{style:he.noNotes,children:qe?"Add the steps to implement this — check each off as you do it.":`No notes yet — ${F.hint}`}),t.jsxs("div",{style:he.noteAddRow,children:[t.jsx("input",{placeholder:qe?"Add a step to implement…":`Add a ${F.label} note…`,value:Ge,onChange:Se=>E(Oe=>({...Oe,[D.id]:{...Oe[D.id],[F.id]:Se.target.value}})),onKeyDown:Se=>Se.key==="Enter"&&B(D.id,F.id),style:he.noteInput}),t.jsx("button",{onClick:()=>B(D.id,F.id),style:{...he.noteAddBtn,background:F.color},children:t.jsx(Ze,{size:14})})]})]}),me&&!((Me=D.completed_stages)!=null&&Me[F.id])&&t.jsxs(t.Fragment,{children:[qe&&Be.length>0&&!It&&t.jsxs("div",{style:he.checklistHint,children:[Be.filter(Se=>Se.done).length,"/",Be.length," done — check all steps to complete Wisdom"]}),t.jsxs("button",{onClick:()=>v(D.id,F.id),disabled:!kt,style:{...he.advanceBtn,background:kt?F.color:"#C3BFB5",marginTop:10,cursor:kt?"pointer":"not-allowed"},children:[t.jsx(He,{size:14}),qe?"Mark Wisdom complete":`Complete ${F.label} → ${(Pe=vr[y+1])==null?void 0:Pe.label}`]})]})]})})()]},F.id)}),D.stage==="W"&&((ce=D.completed_stages)==null?void 0:ce.W)&&t.jsxs("div",{style:he.wisdomDone,children:[t.jsx(Pr,{size:16,color:"#4C9A6B"})," Wisdom achieved — implemented in your life"]})]})]}),t.jsx(tr,{toasts:se,onUndo:le,onDismiss:De})]})}const he={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box",position:"relative"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},headRight:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},wisdomBadge:{display:"flex",alignItems:"center",gap:5,background:"rgba(201,162,39,0.12)",border:"1px solid rgba(201,162,39,0.3)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:700,color:"#8A6E1A"},addSkillBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},filterBar:{display:"flex",gap:6,flexWrap:"wrap",marginBottom:16},filterBtn:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},layout:{display:"grid",gap:12,alignItems:"start"},cardList:{display:"grid",gap:10,alignContent:"start"},skillCard:{background:"var(--surface)",borderRadius:12,padding:"16px",border:"1.5px solid var(--border)",cursor:"pointer",boxShadow:"0 1px 2px rgba(0,0,0,0.04)",minWidth:0,overflow:"hidden",boxSizing:"border-box"},skillCardTop:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:8,marginBottom:6},skillMeta:{display:"flex",alignItems:"center",gap:6,minWidth:0},pillarDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},srcLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},skillTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em",marginBottom:12,lineHeight:1.3,wordBreak:"break-word"},cardTitle:{fontSize:13,fontWeight:700,marginBottom:10},track:{display:"flex",alignItems:"center",minWidth:0},trackItem:{display:"flex",alignItems:"center",minWidth:0},trackDot:{width:22,height:22,borderRadius:"50%",display:"grid",placeItems:"center",flexShrink:0},trackCurrent:{fontSize:9,fontWeight:800,color:"#fff"},trackLine:{flex:1,minWidth:8,height:3,borderRadius:2,margin:"0 2px"},stageTag:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:12,marginLeft:8,flexShrink:0,whiteSpace:"nowrap"},detail:{background:"var(--surface)",borderRadius:14,padding:"18px 16px",boxShadow:"0 1px 4px rgba(0,0,0,0.07)",border:"1.5px solid var(--border)",alignSelf:"start"},detailHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16},detailTitle:{fontSize:18,fontWeight:700,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},backBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,marginRight:4},groupBox:{border:"1.5px solid var(--border)",borderRadius:9,marginBottom:8,overflow:"hidden",background:"var(--bg)"},groupHead:{display:"flex",alignItems:"center",gap:7,padding:"8px 10px"},groupCaret:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",display:"grid",placeItems:"center",padding:0,width:18,height:18,flexShrink:0},groupTitle:{flex:1,minWidth:0,fontSize:13,fontWeight:700,color:"var(--text)",cursor:"text",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},groupCount:{fontSize:10.5,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 7px",flexShrink:0},groupBody:{padding:"0 10px 10px 10px"},addGroupBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1.5px dashed",background:"none",padding:"9px 12px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:2},stageBlock:{border:"1.5px solid var(--border)",borderRadius:10,padding:"12px 13px",marginBottom:10},stageBlockHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:8},stageLetter:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",fontSize:13,fontWeight:800,flexShrink:0},stageName:{fontSize:13,fontWeight:700},stagePrompt:{fontSize:11.5,color:"var(--text-2)",marginTop:2,lineHeight:1.4},doneBadge:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10,marginLeft:"auto",flexShrink:0},noteList:{margin:"0 0 8px 0",padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6},noteItem:{display:"flex",alignItems:"flex-start",gap:8,fontSize:13,lineHeight:1.4},noteDot:{width:6,height:6,borderRadius:"50%",flexShrink:0,marginTop:5},checkBox:{width:18,height:18,borderRadius:5,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,marginTop:1,padding:0},checklistHint:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,marginTop:10,textAlign:"center"},noteText:{flex:1,color:"var(--text)"},noNotes:{fontSize:12,color:"var(--text-3)",fontStyle:"italic",marginBottom:8},noteAddRow:{display:"flex",gap:6},noteInput:{flex:1,border:"1px solid var(--border)",borderRadius:7,padding:"7px 10px",fontSize:13,fontFamily:"inherit",outline:"none"},noteAddBtn:{width:32,height:32,border:"none",borderRadius:7,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},advanceBtn:{display:"flex",alignItems:"center",gap:8,border:"none",color:"#fff",padding:"10px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit",width:"100%",justifyContent:"center"},wisdomDone:{display:"flex",alignItems:"center",gap:8,justifyContent:"center",fontSize:13.5,fontWeight:700,color:"#4C9A6B",padding:12,background:"rgba(76,154,107,0.08)",borderRadius:10,marginTop:4},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},input:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box",marginBottom:8},select:{border:"1px solid var(--border)",borderRadius:8,padding:"8px 10px",fontSize:12.5,fontFamily:"inherit",flex:1},addRow:{display:"flex",gap:8,marginBottom:8},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},empty:{fontSize:13,color:"var(--text-3)",padding:"32px 12px",textAlign:"center"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.55)",zIndex:50,display:"grid",placeItems:"center"},celebBox:{background:"var(--surface)",borderRadius:20,padding:"40px 32px",textAlign:"center",maxWidth:320,boxShadow:"0 8px 40px rgba(0,0,0,0.18)"},celebEmoji:{fontSize:52,marginBottom:12},celebTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:8},celebSub:{fontSize:13.5,color:"var(--text-2)",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:"#4C9A6B",color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},Ts=[{id:"aarti",title:"Aarti",html:`<h1>॥ गणपतीची आरती ॥</h1><br/>
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
      </div>`}];function F0(){const[e,r]=c.useState(()=>window.innerWidth<720);return c.useEffect(()=>{const n=()=>r(window.innerWidth<720);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}const M0=e=>new Promise((r,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:l,height:d}=i;l>d&&l>1400?(d=d*1400/l,l=1400):d>1400&&(l=l*1400/d,d=1400);const a=document.createElement("canvas");a.width=l,a.height=d,a.getContext("2d").drawImage(i,0,0,l,d),r(a.toDataURL("image/jpeg",.85))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(e)});function Lu({base:e,count:r,images:n}){const o=n&&n.length?n:null,i=o?o.length:r,[s,l]=c.useState(0);if(!i)return null;const d=s%i,a=o?o[d]:`${e}${d+1}.jpg`;return t.jsxs("div",{style:{maxWidth:560,margin:"0 auto"},children:[t.jsx("div",{style:_e.carouselFrame,children:t.jsx("img",{src:a,alt:`Page ${d+1}`,style:_e.carouselImg})}),t.jsxs("div",{style:_e.carouselNav,children:[t.jsxs("button",{onClick:()=>l(g=>(g-1+i)%i),style:_e.carouselBtn,children:[t.jsx(dn,{size:16})," Prev"]}),t.jsxs("span",{style:_e.carouselCount,children:[o?"":"Adhyay ",d+1," / ",i]}),t.jsxs("button",{onClick:()=>l(g=>(g+1)%i),style:_e.carouselBtn,children:["Next ",t.jsx(Nr,{size:16})]})]})]})}function W0(){const e=F0(),[r,n]=c.useState(!1),[o,i]=c.useState([]),[s,l]=c.useState("dss"),[d,a]=c.useState(!1),[g,h]=c.useState({title:"",type:"text",content:"",images:[]}),[x,f]=c.useState([]),[E,z]=c.useState(null),[k,R]=c.useState(!1),b=c.useRef(!1),p=c.useCallback(async()=>{try{const[V,oe,Q]=await Promise.all([_.getDecks(),_.getSetting("spiritual_order"),_.getSetting("spiritual_default")]);if(i(V),Array.isArray(oe==null?void 0:oe.value)&&f(oe.value),Q!=null&&Q.value&&z(Q.value),!b.current){b.current=!0;const ue=new Set([...Ts.map(v=>v.id),...V.map(v=>`deck-${v.id}`)]);Q!=null&&Q.value&&ue.has(Q.value)&&l(Q.value)}}catch{}},[]);c.useEffect(()=>{p()},[p]);const m=[...Ts.map(V=>({id:V.id,title:V.title})),...o.map(V=>({id:`deck-${V.id}`,title:V.title}))],T=(()=>{if(!x.length)return m;const V=new Map(m.map(Q=>[Q.id,Q])),oe=[];return x.forEach(Q=>{V.has(Q)&&(oe.push(V.get(Q)),V.delete(Q))}),V.forEach(Q=>oe.push(Q)),oe})(),j=(V,oe)=>{const Q=T.map(v=>v.id),ue=V+oe;ue<0||ue>=Q.length||([Q[V],Q[ue]]=[Q[ue],Q[V]],f(Q),_.setSetting("spiritual_order",Q).catch(()=>{}))},C=V=>{z(V),_.setSetting("spiritual_default",V).catch(()=>{})},L=s.startsWith("deck-")?Number(s.slice(5)):null,M=L!=null?o.find(V=>V.id===L):null,w=M?null:Ts.find(V=>V.id===s)||(L==null?Ts[0]:null),D=d?"New deck":M?M.title:(w==null?void 0:w.title)||"",ie=V=>{l(V),a(!1),e&&n(!1)},B=()=>{a(!0),h({title:"",type:"text",content:"",images:[]}),e&&n(!1)},I=async V=>{const oe=Array.from(V.target.files||[]),Q=[];for(const ue of oe)try{Q.push(await M0(ue))}catch{}h(ue=>({...ue,images:[...ue.images,...Q]})),V.target.value=""},Z=V=>h(oe=>({...oe,images:oe.images.filter((Q,ue)=>ue!==V)})),be=g.title.trim()&&(g.type==="text"?g.content.trim():g.images.length>0),ae=async()=>{if(!be)return;const V=await _.createDeck({title:g.title.trim(),type:g.type,content:g.type==="text"?g.content:"",images:g.type==="images"?g.images:[]});a(!1),await p(),l(`deck-${V.id}`)},ve=async V=>{await _.deleteDeck(V),s===`deck-${V}`&&l("dss"),p()},G={..._e.sidebar,...e?_e.sidebarOverlay:{},...e&&!r?_e.sidebarHidden:{}};return t.jsxs("div",{style:_e.shell,children:[t.jsx("style",{children:L0}),e&&r&&t.jsx("div",{style:_e.backdrop,onClick:()=>n(!1)}),t.jsxs("aside",{style:G,children:[t.jsxs("div",{style:_e.sideHead,children:[t.jsx("div",{style:_e.brand,children:"Anvil · Spiritual"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:2},children:[t.jsx("button",{onClick:()=>R(V=>!V),style:_e.iconBtn,title:"Rearrange & set default",children:k?t.jsx(He,{size:16}):t.jsx(ut,{size:15})}),e&&t.jsx("button",{onClick:()=>n(!1),style:_e.iconBtn,children:t.jsx(Re,{size:17})})]})]}),k&&t.jsxs("div",{style:_e.editHint,children:["Arrows reorder · ",t.jsx(Hi,{size:11,style:{verticalAlign:"-1px"}})," sets what opens by default"]}),t.jsxs("div",{style:_e.sideScroll,children:[T.map((V,oe)=>{const Q=V.id===s&&!d,ue=E===V.id;return t.jsxs("div",{style:_e.sideRow,children:[t.jsxs("button",{onClick:()=>ie(V.id),style:{..._e.sideItem,flex:1,...Q?_e.sideItemOn:{}},children:[V.title,ue&&t.jsx("span",{style:_e.defStar,title:"Opens by default",children:" ★"})]}),k&&t.jsxs("div",{style:_e.editControls,children:[t.jsx("button",{onClick:()=>C(V.id),title:"Set as default",style:{..._e.miniBtn,...ue?{color:"#8268B0"}:{}},children:t.jsx(Hi,{size:13})}),t.jsx("button",{onClick:()=>j(oe,-1),disabled:oe===0,style:{..._e.miniBtn,opacity:oe===0?.3:1},children:t.jsx(Dm,{size:13})}),t.jsx("button",{onClick:()=>j(oe,1),disabled:oe===T.length-1,style:{..._e.miniBtn,opacity:oe===T.length-1?.3:1},children:t.jsx(Zi,{size:13})})]})]},V.id)}),t.jsxs("button",{onClick:B,style:{..._e.newDeckBtn,...d?_e.sideItemOn:{}},children:[t.jsx(Ze,{size:14})," New deck"]})]})]}),t.jsxs("main",{style:_e.main,children:[e&&t.jsxs("button",{onClick:()=>n(!0),style:_e.hamburger,children:[t.jsx(Jc,{size:17}),t.jsx("span",{style:_e.hamburgerLabel,children:D})]}),d?t.jsxs("div",{style:_e.contentWrap,children:[t.jsx("div",{style:_e.formTitle,children:"Create a deck"}),t.jsx("input",{placeholder:"Deck title (e.g. Vishnu Sahasranamam)",value:g.title,onChange:V=>h({...g,title:V.target.value}),style:_e.input}),t.jsxs("div",{style:_e.typeRow,children:[t.jsxs("button",{onClick:()=>h({...g,type:"text"}),style:{..._e.typeBtn,...g.type==="text"?_e.typeOn:{}},children:[t.jsx(qc,{size:15})," Text"]}),t.jsxs("button",{onClick:()=>h({...g,type:"images"}),style:{..._e.typeBtn,...g.type==="images"?_e.typeOn:{}},children:[t.jsx(xy,{size:15})," Images"]})]}),g.type==="text"?t.jsx("textarea",{placeholder:"Paste or write the text (verses, chant, reflection)…",value:g.content,onChange:V=>h({...g,content:V.target.value}),style:_e.textarea}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:_e.imgGrid,children:[g.images.map((V,oe)=>t.jsxs("div",{style:_e.imgThumbWrap,children:[t.jsx("img",{src:V,alt:"",style:_e.imgThumb}),t.jsx("button",{onClick:()=>Z(oe),style:_e.imgDel,children:t.jsx(Re,{size:12})})]},oe)),t.jsxs("label",{style:_e.imgAdd,children:[t.jsx(Yl,{size:20}),t.jsx("span",{style:{fontSize:11},children:"Add images"}),t.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:I,style:{display:"none"}})]})]}),t.jsx("div",{style:_e.hint,children:"Images show as a swipeable carousel, in the order added."})]}),t.jsxs("div",{style:_e.formActions,children:[t.jsxs("button",{onClick:()=>a(!1),style:_e.cancelBtn,children:[t.jsx(Re,{size:14})," Cancel"]}),t.jsxs("button",{onClick:ae,disabled:!be,style:{..._e.saveBtn,...be?{}:_e.saveDisabled},children:[t.jsx(He,{size:15})," Create deck"]})]})]}):M?t.jsxs("div",{style:_e.contentWrap,children:[t.jsxs("div",{style:_e.deckHead,children:[t.jsx("h2",{style:_e.deckTitle,children:M.title}),t.jsx("button",{onClick:()=>ve(M.id),style:_e.deckDel,title:"Delete deck",children:t.jsx(Kl,{size:15})})]}),M.type==="images"?t.jsx(Lu,{images:M.images}):t.jsx("div",{style:_e.deckText,children:M.content})]}):t.jsxs("div",{style:_e.contentWrap,children:[(w==null?void 0:w.youtube)&&t.jsx("div",{style:_e.videoFrame,children:t.jsx("iframe",{src:`https://www.youtube.com/embed/${w.youtube}`,title:w.title,style:_e.video,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0},w.youtube)}),w!=null&&w.carousel?t.jsx(Lu,{base:w.imageBase,count:w.carousel}):t.jsx("div",{className:"spiritual-content",dangerouslySetInnerHTML:{__html:(w==null?void 0:w.html)||""}})]})]})]})}const L0=`
.spiritual-content { font-family: 'Inter', system-ui, sans-serif; color: var(--text); line-height: 1.9; font-size: 16px; text-align: center; }
.spiritual-content h1 { font-family: 'Fraunces', Georgia, serif; font-size: 24px; color: #8268B0; margin: 8px 0 18px; letter-spacing: -0.01em; }
.spiritual-content h2 { font-family: 'Fraunces', Georgia, serif; font-size: 18px; color: #7A5EA8; margin: 20px 0 8px; }
.spiritual-content h3 { font-size: 15px; color: var(--text-3); text-transform: uppercase; letter-spacing: 0.06em; margin: 18px 0 6px; }
.spiritual-content b { color: #8268B0; }
.spiritual-content div { text-align: center; }
`,_e={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:240,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.15)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.35)",zIndex:20},sideHead:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"18px 14px 12px"},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700},sideScroll:{flex:1,overflowY:"auto",padding:"0 8px 16px"},sideItem:{display:"block",width:"100%",border:"none",background:"none",padding:"10px 12px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13.5,fontWeight:500,color:"var(--text-2)",textAlign:"left",marginBottom:2},sideItemOn:{background:"rgba(130,104,176,0.12)",color:"#8268B0",fontWeight:700},sideRow:{display:"flex",alignItems:"center",gap:2},editControls:{display:"flex",alignItems:"center",gap:1,flexShrink:0},miniBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",borderRadius:5},defStar:{color:"#C9A227",fontWeight:700},editHint:{fontSize:10.5,color:"var(--text-3)",padding:"0 14px 8px",lineHeight:1.4},newDeckBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",padding:"9px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:600,color:"var(--text-2)",marginTop:6},main:{flex:1,padding:"26px 22px",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:220},contentWrap:{background:"var(--surface)",borderRadius:14,padding:"26px 28px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",maxWidth:760,margin:"0 auto"},videoFrame:{position:"relative",width:"100%",maxWidth:600,margin:"0 auto 22px",aspectRatio:"16 / 9",borderRadius:12,overflow:"hidden",background:"#000"},video:{position:"absolute",inset:0,width:"100%",height:"100%",border:"none"},carouselFrame:{background:"var(--surface-2)",borderRadius:12,padding:8,border:"1px solid var(--border)"},carouselImg:{width:"100%",borderRadius:8,display:"block"},carouselNav:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:14},carouselBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},carouselCount:{fontSize:13,fontWeight:700,color:"#8268B0",fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"none",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,color:"var(--text-2)"},deckHead:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,marginBottom:16,borderBottom:"1px solid var(--border)",paddingBottom:12},deckTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",margin:0,color:"#8268B0"},deckDel:{border:"1px solid var(--border)",background:"var(--surface)",color:"#C2536B",cursor:"pointer",display:"grid",placeItems:"center",padding:7,borderRadius:8,flexShrink:0},deckText:{fontSize:16,lineHeight:1.9,whiteSpace:"pre-wrap",color:"var(--text)",textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},formTitle:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:14},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none"},typeRow:{display:"flex",gap:8,marginTop:12},typeBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},typeOn:{background:"#8268B0",color:"#fff",borderColor:"#8268B0"},textarea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"12px",fontSize:15,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:200,resize:"vertical",lineHeight:1.7,marginTop:12},imgGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(90px, 1fr))",gap:8,marginTop:12},imgThumbWrap:{position:"relative",aspectRatio:"1",borderRadius:8,overflow:"hidden",border:"1px solid var(--border)"},imgThumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},imgDel:{position:"absolute",top:3,right:3,border:"none",background:"rgba(0,0,0,0.6)",color:"#fff",borderRadius:"50%",width:18,height:18,cursor:"pointer",display:"grid",placeItems:"center",padding:0},imgAdd:{aspectRatio:"1",border:"1px dashed var(--border)",borderRadius:8,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:4,cursor:"pointer",color:"var(--text-3)"},hint:{fontSize:11.5,color:"var(--text-3)",marginTop:8},formActions:{display:"flex",gap:8,marginTop:16},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:"#8268B0",color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"}},Gr={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},_u=Object.keys(Gr),_0=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],$0=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],P0=()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},N0=(e,r)=>`${$0[r-1]} ${e}`,O0=(e,r)=>{const n=new Date(e,r,0).getDate();return Array.from({length:n},(o,i)=>`${e}-${String(r).padStart(2,"0")}-${String(i+1).padStart(2,"0")}`)},H0=(e,r)=>{const n=new Date(e,r-1,1).getDay();return n===0?6:n-1};function G0(){const e=P0(),[r,n]=c.useState(new Date().getFullYear()),[o,i]=c.useState(new Date().getMonth()+1),[s,l]=c.useState([]),[d,a]=c.useState([]),[g,h]=c.useState({}),[x,f]=c.useState(null),[E,z]=c.useState(!1),[k,R]=c.useState(!1),[b,p]=c.useState({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:e}),[m,T]=c.useState(null),j=c.useCallback(async()=>{const[v,A,P]=await Promise.all([_.getTopics(),_.getDueToday(),_.getCalendar(r,o)]);l(v),a(A),h(P)},[r,o]);c.useEffect(()=>{j()},[j]);const C=async v=>{await _.toggleReviewDone(v),j()},L=async()=>{const v=b.intervals.split(",").map(A=>parseInt(A.trim(),10)).filter(A=>!isNaN(A));!b.topic.trim()||v.length===0||(await _.createTopic({pillar:b.pillar,topic:b.topic.trim(),intervals:v,learned_date:b.learned_date||e}),p({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:e}),R(!1),j())},{deleteItem:M,toasts:w,handleUndo:D,handleDismiss:ie}=er(_.deleteTopic,_.restoreTopic,j),B=(v,A)=>M(v,A),I=v=>T({id:v.id,topic:v.topic,pillar:v.pillar,intervals:(v.intervals||[]).join(", "),learned_date:v.learned_date}),Z=async()=>{if(!m)return;const v=m.intervals.split(",").map(A=>parseInt(A.trim(),10)).filter(A=>!isNaN(A)&&A>=0);!m.topic.trim()||v.length===0||(await _.updateTopic(m.id,{topic:m.topic.trim(),pillar:m.pillar,learned_date:m.learned_date,intervals:v}),T(null),j())},be=()=>{o===1?(n(v=>v-1),i(12)):i(v=>v-1),f(null)},ae=()=>{o===12?(n(v=>v+1),i(1)):i(v=>v+1),f(null)},ve=s.filter(v=>!v.cemented),G=s.filter(v=>v.cemented),V=O0(r,o),oe=H0(r,o),Q=c.useMemo(()=>{const v={};return s.forEach(A=>A.reviews.forEach(P=>{P.done||(v[P.due_date]=v[P.due_date]||[]).push({topic:A.topic,pillar:A.pillar,stage:P.stage})})),v},[s]),ue=x?s.flatMap(v=>v.reviews.filter(A=>A.due_date===x).map(A=>({...A,topic:v.topic,pillar:v.pillar,total:v.reviews.length}))):[];return t.jsxs("div",{style:Ie.page,children:[t.jsxs("div",{style:Ie.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:Ie.eyebrow,children:"Anvil · Revision"}),t.jsx("h1",{style:Ie.h1,children:"Spaced Repetition"})]}),t.jsxs("button",{onClick:()=>R(!0),style:Ie.addBtn,children:[t.jsx(Ze,{size:15})," Add topic"]})]}),k&&t.jsxs("div",{style:Ie.addBox,children:[t.jsx("input",{autoFocus:!0,placeholder:"What did you learn?",value:b.topic,onChange:v=>p(A=>({...A,topic:v.target.value})),onKeyDown:v=>v.key==="Enter"&&L(),style:Ie.input}),t.jsxs("div",{style:Ie.addRow,children:[t.jsx("select",{value:b.pillar,onChange:v=>p(A=>({...A,pillar:v.target.value})),style:Ie.select,children:_u.map(v=>t.jsx("option",{children:v},v))}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[t.jsx("label",{style:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},children:"Learned on"}),t.jsx("input",{type:"date",value:b.learned_date,onChange:v=>p(A=>({...A,learned_date:v.target.value})),style:{...Ie.select,fontSize:13}})]}),t.jsx("div",{style:{flex:1,minWidth:0},children:t.jsx("input",{value:b.intervals,onChange:v=>p(A=>({...A,intervals:v.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:Ie.input})})]}),t.jsxs("div",{style:Ie.addRow,children:[t.jsxs("button",{onClick:L,style:Ie.saveBtn,children:[t.jsx(He,{size:14})," Save"]}),t.jsxs("button",{onClick:()=>R(!1),style:Ie.cancelBtn,children:[t.jsx(Re,{size:14})," Cancel"]})]})]}),d.length>0&&t.jsxs("div",{style:Ie.section,children:[t.jsxs("div",{style:Ie.sectionTitle,children:[t.jsx(Pm,{size:15,color:"#C2536B"}),"Due Today",t.jsx("span",{style:Ie.badge,children:d.length})]}),d.map(v=>{var P,se;const A=((P=Gr[v.pillar])==null?void 0:P.dot)||"#9A968C";return t.jsxs("div",{style:{...Ie.reviewCard,borderLeft:`3px solid ${A}`,...v.is_missed?{opacity:.85}:{}},children:[t.jsx("button",{onClick:()=>C(v.review_id),style:{...Ie.checkbox,...v.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:v.done&&t.jsx(He,{size:12,color:"#fff",strokeWidth:3})}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:Ie.reviewTopic,children:v.topic}),t.jsxs("div",{style:Ie.reviewMeta,children:[t.jsxs("span",{style:{...Ie.stageTag,background:((se=Gr[v.pillar])==null?void 0:se.soft)||"rgba(0,0,0,0.05)",color:A},children:["Review ",v.stage,"/",v.total_stages]}),v.is_missed&&t.jsxs("span",{style:Ie.missedTag,children:["missed · ",v.due_date]})]})]})]},v.review_id)})]}),t.jsxs("div",{style:Ie.section,children:[t.jsxs("div",{style:Ie.sectionTitle,children:["Active Topics ",t.jsx("span",{style:Ie.badge,children:ve.length})]}),ve.length===0&&t.jsx("div",{style:Ie.empty,children:"No active topics. Add something you learned today."}),ve.map(v=>{var le,De;const A=((le=Gr[v.pillar])==null?void 0:le.dot)||"#9A968C",P=((De=Gr[v.pillar])==null?void 0:De.soft)||"rgba(0,0,0,0.05)",se=v.reviews.filter(Y=>Y.done).length;return(m==null?void 0:m.id)===v.id?t.jsxs("div",{style:Ie.addBox,children:[t.jsx("input",{autoFocus:!0,value:m.topic,onChange:Y=>T(ne=>({...ne,topic:Y.target.value})),onKeyDown:Y=>Y.key==="Enter"&&Z(),placeholder:"Topic",style:Ie.input}),t.jsxs("div",{style:Ie.addRow,children:[t.jsx("select",{value:m.pillar,onChange:Y=>T(ne=>({...ne,pillar:Y.target.value})),style:Ie.select,children:_u.map(Y=>t.jsx("option",{children:Y},Y))}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[t.jsx("label",{style:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},children:"Learned on"}),t.jsx("input",{type:"date",value:m.learned_date,onChange:Y=>T(ne=>({...ne,learned_date:Y.target.value})),style:{...Ie.select,fontSize:13}})]}),t.jsx("div",{style:{flex:1,minWidth:0},children:t.jsx("input",{value:m.intervals,onChange:Y=>T(ne=>({...ne,intervals:Y.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:Ie.input})})]}),t.jsx("div",{style:Ie.editHint,children:"Changing the date or intervals reschedules the reviews (completed steps are kept where they still apply)."}),t.jsxs("div",{style:Ie.addRow,children:[t.jsxs("button",{onClick:Z,style:Ie.saveBtn,children:[t.jsx(He,{size:14})," Save plan"]}),t.jsxs("button",{onClick:()=>T(null),style:Ie.cancelBtn,children:[t.jsx(Re,{size:14})," Cancel"]})]})]},v.id):t.jsxs("div",{style:Ie.topicCard,children:[t.jsxs("div",{style:Ie.topicHead,children:[t.jsx("span",{style:{...Ie.dot,background:A}}),t.jsx("span",{style:Ie.topicName,children:v.topic}),t.jsx("span",{style:Ie.topicPillar,children:v.pillar}),t.jsxs("span",{style:Ie.topicProgress,children:[se,"/",v.reviews.length," done"]}),t.jsx("button",{onClick:()=>I(v),style:Ie.ghostBtn,title:"Edit plan",children:t.jsx(ut,{size:12})}),t.jsx("button",{onClick:()=>B(v.id,v.topic),style:Ie.ghostBtn,title:"Delete",children:t.jsx(Re,{size:13})})]}),t.jsxs("div",{style:Ie.reviewDots,children:[v.reviews.map(Y=>{Y.due_date<e;const ne=Y.due_date===e;return t.jsx("button",{onClick:()=>C(Y.id),title:`Review ${Y.stage} · ${Y.due_date}${Y.done?" · Done":""}`,style:{...Ie.reviewDot,background:Y.done?A:ne?P:"var(--hover)",border:`2px solid ${Y.done||ne?A:"var(--border)"}`,color:Y.done?"#fff":A},children:Y.stage},Y.id)}),t.jsxs("span",{style:Ie.learnedDate,children:["Learned ",v.learned_date]})]})]},v.id)})]}),G.length>0&&t.jsxs("div",{style:Ie.section,children:[t.jsxs("button",{onClick:()=>z(v=>!v),style:Ie.cementedToggle,children:[E?t.jsx(Zi,{size:15}):t.jsx(Nr,{size:15}),t.jsx(Pr,{size:14,color:"#C9A227"}),"Cemented",t.jsx("span",{style:{...Ie.badge,background:"rgba(201,162,39,0.12)",color:"#8A6E1A"},children:G.length})]}),E&&G.map(v=>{var P;const A=((P=Gr[v.pillar])==null?void 0:P.dot)||"#9A968C";return t.jsx("div",{style:{...Ie.topicCard,opacity:.75},children:t.jsxs("div",{style:Ie.topicHead,children:[t.jsx("span",{style:{...Ie.dot,background:A}}),t.jsx("span",{style:Ie.topicName,children:v.topic}),t.jsx("span",{style:Ie.topicPillar,children:v.pillar}),t.jsx(Pr,{size:13,color:"#C9A227",style:{marginLeft:"auto"}})]})},v.id)})]}),t.jsxs("div",{style:Ie.calCard,children:[t.jsxs("div",{style:Ie.calHead,children:[t.jsx("button",{onClick:be,style:Ie.calNav,children:"‹"}),t.jsxs("div",{style:Ie.calTitle,children:[N0(r,o)," · Review Calendar"]}),t.jsx("button",{onClick:ae,style:Ie.calNav,children:"›"})]}),t.jsx("div",{style:Ie.calDow,children:_0.map(v=>t.jsx("div",{style:Ie.calDowCell,children:v},v))}),t.jsxs("div",{style:Ie.calGrid,children:[Array.from({length:oe}).map((v,A)=>t.jsx("div",{},`p${A}`)),V.map((v,A)=>{const P=Q[v]||[],se=v===e,le=v===x,De=v<e,Y=le?"#fff":se?"var(--text)":De?"var(--text-2)":"var(--text-3)";return t.jsxs("button",{onClick:()=>f(le?null:v),style:{...Ie.calDay,background:le?"var(--accent-strong)":se?"var(--hover)":"var(--surface)",borderColor:se||le?"var(--accent-strong)":"var(--border)"},children:[t.jsx("span",{style:{...Ie.calDayNum,color:Y,fontWeight:se||le?700:600},children:A+1}),P.slice(0,2).map((ne,W)=>{var U;return t.jsxs("span",{title:ne.topic,style:{...Ie.calItem,color:le?"#fff":((U=Gr[ne.pillar])==null?void 0:U.dot)||"var(--text-2)"},children:[W+1,". ",ne.topic]},W)}),P.length>2&&t.jsxs("span",{style:{...Ie.calMore,color:le?"#fff":"var(--text-3)"},children:["+",P.length-2," more"]})]},v)})]}),x&&t.jsxs("div",{style:Ie.dayDetail,children:[t.jsxs("div",{style:Ie.dayDetailTitle,children:["Reviews for ",x]}),ue.length===0?t.jsx("div",{style:Ie.empty,children:"No reviews scheduled for this day."}):ue.map((v,A)=>{var se,le;const P=((se=Gr[v.pillar])==null?void 0:se.dot)||"#9A968C";return t.jsxs("div",{style:{...Ie.reviewCard,borderLeft:`3px solid ${P}`},children:[t.jsx("button",{onClick:()=>C(v.id),style:{...Ie.checkbox,...v.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:v.done&&t.jsx(He,{size:12,color:"#fff",strokeWidth:3})}),t.jsxs("div",{children:[t.jsxs("div",{style:Ie.reviewTopic,children:[A+1,". ",v.topic]}),t.jsxs("span",{style:{...Ie.stageTag,background:((le=Gr[v.pillar])==null?void 0:le.soft)||"rgba(0,0,0,0.05)",color:P},children:["Review ",v.stage,"/",v.total]})]})]},v.id)})]})]}),t.jsx(tr,{toasts:w,onUndo:D,onDismiss:ie})]})}const Ie={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},addBox:{background:"var(--surface)",borderRadius:12,padding:16,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column",gap:10},addRow:{display:"flex",gap:8,alignItems:"center"},editHint:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.4},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",minWidth:0},select:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 10px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},section:{marginBottom:20},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10},badge:{fontSize:11,fontWeight:700,background:"var(--hover)",color:"var(--text-2)",borderRadius:10,padding:"1px 7px"},reviewCard:{display:"flex",alignItems:"center",gap:12,background:"var(--surface)",borderRadius:10,padding:"12px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},checkbox:{width:22,height:22,borderRadius:6,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,padding:0},reviewTopic:{fontSize:13.5,fontWeight:600,marginBottom:4},reviewMeta:{display:"flex",alignItems:"center",gap:8},stageTag:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10},missedTag:{fontSize:11,color:"#C2536B",fontWeight:600},topicCard:{background:"var(--surface)",borderRadius:12,padding:"13px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},topicHead:{display:"flex",alignItems:"center",gap:8,marginBottom:10},dot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},topicName:{fontSize:14,fontWeight:600,flex:1},topicPillar:{fontSize:11,color:"var(--text-3)",fontWeight:500},topicProgress:{fontSize:11,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",padding:"2px 7px",borderRadius:10},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},reviewDots:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"},reviewDot:{width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",fontSize:11,fontWeight:700,padding:0},learnedDate:{fontSize:11,color:"var(--text-3)",marginLeft:"auto"},cementedToggle:{display:"flex",alignItems:"center",gap:8,border:"none",background:"none",cursor:"pointer",fontSize:13,fontWeight:700,color:"var(--text-2)",padding:"4px 0",fontFamily:"inherit",marginBottom:8},empty:{fontSize:13,color:"var(--text-3)",padding:"16px 0",textAlign:"center"},calCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calNav:{border:"none",background:"none",fontSize:20,cursor:"pointer",color:"var(--text-2)",padding:"0 6px",lineHeight:1},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4},calDay:{minHeight:62,border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,cursor:"pointer",fontFamily:"inherit",display:"flex",flexDirection:"column",alignItems:"stretch",justifyContent:"flex-start",gap:1,position:"relative",padding:"3px 4px",overflow:"hidden",textAlign:"left"},calDayNum:{fontSize:11,lineHeight:1.1,marginBottom:1},calItem:{fontSize:8.5,fontWeight:700,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",lineHeight:1.3,textAlign:"left"},calMore:{fontSize:8,fontWeight:700,opacity:.85,lineHeight:1.2},dayDetail:{marginTop:16,paddingTop:16,borderTop:"1px solid var(--border)"},dayDetailTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10}},Is=[{id:1,title:"Regular Habits",cards:[{id:1,text:"1. I always do everything I need to do, when I need to do it. "},{id:2,text:"2. I never argue or let my emotions work against me. "},{id:3,text:"3. I have a good memory. I easily and automatically remember any name or anything that is important to me. "},{id:4,text:"4. I eat only what I should. "},{id:5,text:"5. I am a good listener. I hear everything that is said. I am attentive, interested, and aware of everything that is going on around me. "},{id:6,text:"6. I have the courage to state my opinions. I take responsibility for myself and everything I say and do."},{id:7,text:"7. I never spend more than I earn. I am financially responsible, both for my present and for my future."},{id:8,text:"8. I set goals and I follow them. I set my sights, take the appropriate action, and achieve my goals."},{id:9,text:"9. I spend time with my family and my loved ones. I enjoy sharing their lives with mine and my life with theirs."}]},{id:2,title:"Motivational",cards:[{id:1,text:"1. I can do anything I believe I can do. I’ve got it and every day I get more of it. I have talent, skills, and ability"},{id:2,text:"2. I set goals and I reach them. I know what I want out of life. I go after it and I get it. "},{id:3,text:"3. People like me, and I feel good about myself. I have a sense of pride in whoa am and I believe in myself. Nothing seems to stop me. I have a lot of determination. "},{id:4,text:"4. I turn problems into advantages. I find possibilities in things that other people never give a chance."},{id:5,text:"5. I have a lot of energy––I am very alive. I enjoy life and I can tell it and so can others"},{id:6,text:"6. I keep myself up, looking ahead, and liking it. I know that I can accomplish anything I choose, and I refuse to let anything negative hold me back or stand in my way. I am not afraid of anything or anyone. I have strength, power, conviction, and confidence. "},{id:7,text:"7. I like challenges and I meet them head on, face to face––today especially. I am on top of the world and I’m going for it. "},{id:8,text:"8. I have a clear picture in my mind of what I want. I can see it in front of me. "},{id:9,text:"9. I know what I want and I know how to get it. I know that it’s all up to me and I know I can do it. Roadblocks don’t bother me. They just mean that I am alive and running, and I’m not going to stand still for anything. "},{id:10,text:"10. I trust myself I’ve got what it takes––plenty of it––and I know how to use it. "},{id:11,text:"11. Today, more than ever. Today I am unstoppable. I’ve got myself together and I’m getting more together every day. And today––look out world, here I come. "},{id:12,text:"12. Limitations? I don’t even recognize them as limitations. There is no challenge I can’t conquer; there is no wall I can’t climb over. "},{id:13,text:"13. There is no problem I can’t defeat or turn around and make it work for me. I stand tall. I am honest and sincere. I like to deal with people and they like me. "},{id:14,text:"14. I think well; I think clearly. I am organized; I am in control of myself, and everything about me. I call my shots and no one has to call them for me. I never blame anyone else for the circumstances of my life. "},{id:15,text:"15. I accept my failings and move past them as easily as I accept the rewards for my victories. I never demand perfection of myself, but I expect the very best of what I have to give––and that’s what I get. I never give myself excuses. "},{id:16,text:"16. I get things done on time and in the right way. Today I have the inner strength to do more than ever. I am an exceptional human being. "},{id:17,text:"17. My goals and my incredible belief in myself turn my goals into reality. I have the power to live my dreams."},{id:18,text:"18.  I believe in them like I believe in myself. And that belief is so strong that there is nothing that diminishes my undefeatable spirit. "}]},{id:3,title:"Organized planning",cards:[{id:1,text:"1. I am organized and in control of my life. I am in control of myself, my thoughts, my time, my actions, and my future. "},{id:2,text:"2. I know what to do and when to do it, and I do everything I need to do, when I need to do it. "},{id:3,text:"3. I program my mind to make the maximum use of my time. I am in control of my time and how to use it. I like being organized, efficient, and on top of things."},{id:4,text:"4. Controlling my time keeps me that way. "},{id:5,text:"5. I never waste time––I always “plan” time. And because I plan my time, I always have time to do the things I choose to do. "},{id:6,text:"6. Each day I become more organized and in control of all areas of my life––at home, at work, in my mind and in my thoughts, in everything that I do. "},{id:7,text:"7. I am very well organized. Each night I make a list of things I need to do the next day. I set my priorities and I follow them. "},{id:8,text:"8. I am always on time. I am always right where I need to be, exactly when I need to be there. "},{id:9,text:"9. Being on time is easy for me and the more I control my time and the more organized I become, the easier it is. "},{id:10,text:"10. I am in control of my feelings, my emotions, my attitudes, and my needs. I control them; they do not control me. "},{id:11,text:"11. I have the winning vote in the outcome of my own actions. And I choose to live my life by choice, not chance. Therefore, I take the time to take control."},{id:12,text:"12. I have an organized and orderly mind. Because I think in an organized way, I conduct my life in an organized manner. "},{id:13,text:"13. I think in the most positive and productive way at all times and in all things. The way I think is the way I live––and I think “right.” "},{id:14,text:"14. I am the director of my destiny. I know where I am going and I know why I am going there. My earthly life is in my hands and in my control. "},{id:15,text:"15. I control my goals and the achievement of my goals. I organize my goals by writing each of them down, along with the steps I need to reach them. One of the reasons for my success is that my goals are clearly defined and organized."},{id:16,text:"16. I am in complete control of what I think and how I think. Therefore, I choose to think only those thoughts which help me and which are of genuine benefit to me."}]},{id:4,title:"Solving Problems",cards:[{id:1,text:"1. I’m good at solving problems. I like challenges and I meet them head on. "},{id:2,text:"2. Problems are my teachers. They help me to learn and grow. Without them, I would be going nowhere. With them, I am moving forward in the direction of my own goals. "},{id:3,text:"3. There is no problem which I cannot conquer. I am strong in mind, body, and spirit. My will, my strength, and my determination are always greater than any problem I face."},{id:4,text:"4. When I meet a new problem, I do not see the problem as my enemy. I know that finding the solution to the problem will move me forward in my own personal growth."},{id:5,text:"5. Because I know that problems are a key ingredient in my spiritual and mental education and preparation, I recognize that all problems are important to me. "},{id:6,text:"6. I do not fear problems, I solve them. I do not ignore problems, I confront them. I do not avoid problems, I conquer them. "},{id:7,text:"7. I know that every problem holds within itself the keys to its own solution. Therefore, the better I understand the problem, the clearer I am able to see its solution. "},{id:8,text:"8. Having problems is not a problem for me. I am confident, self-assured, positive, and determined. I always know that I am going to overcome any problem I encounter––and I always do. "},{id:9,text:"9. I am good at breaking large obstacles down into smaller pieces that are easier to handle. And I never make any problem appear to be larger than it actually is. "},{id:10,text:"10. I never worry. I turn “worry time” into positive, constructive, “solution time.” I keep my mind alert and open to all solutions—and solutions come quickly and easily to me. "},{id:11,text:"11. I have learned to recognize that many problems carry with them benefits and potential opportunities which would not have presented themselves had the problem not occurred in the first place. "},{id:12,text:"12. I do not seek to live a life which is free from all problems. Instead, I choose to live a life of finding solutions and enjoying the benefits which those solutions create."},{id:13,text:"13. Challenge, conquer, solution, and win are words which I live by daily. Challenges are opportunities. Conquering them is the inevitable outcome. "},{id:14,text:"14. “Solutions” are the stepping stones to my success, and “Winning” is my way of life."}]},{id:5,title:"Self Esteem",cards:[{id:1,text:"1. I really am very special. I like who I am and I feel good about myself. "},{id:2,text:"2. Although I always work to improve myself and I get better every day, I like who I am today. And tomorrow, when I’m even better, I’ll like myself then, too. "},{id:3,text:"3. It’s true that there really is no one else like me in the entire world. There never was another me before, and there will never be another me again. "},{id:4,text:"4. I am unique––from the top of my head to the bottom of my feet. In some ways I may look and act and sound like some others––but I am not them. I am me."},{id:5,text:"5. I wanted to be somebody––and now I know I am I would rather be me than anyone else in the world. "},{id:6,text:"6. I like how I feel and I like how I think and I like how I do things. I approve of me and I approve of who I am."},{id:7,text:"7. I have many beautiful qualities about me. I have talents and skills and abilities. I even have talents that I don’t even know about yet. And I am discovering new talents inside myself all the time. "},{id:8,text:"8. I am positive. I am confident. I radiate good things. If you look closely, you can even see a glow around me."},{id:9,text:"9. I am full of life. I like life and I’m glad to be alive. I am a very special person, living at a very special time. "},{id:10,text:"10. I am intelligent. My mind is quick and alert and clever and fun. I think good thoughts, and my mind makes things work right for me. "},{id:11,text:"11. I have a lot of energy and enthusiasm and vitality. I am exciting and I really enjoy being me. "},{id:12,text:"12. I like to be around other people and other people like to be around me. People like to hear what I have to say and know what I have to think. "},{id:13,text:"13. I smile a lot. I am happy on the inside and I am happy on the outside. "},{id:14,text:"14. I am interested in many things. I appreciate all the blessings I have, and the things that I learn, and all the things I will learn today and tomorrow and forever––just as long as I am. "},{id:15,text:"15. I am warm, sincere, honest, and genuine. I am all of these things and more. And all of these things are me. I like who I am, and I’m glad to be me."}]},{id:6,title:"Self-Responsibility",cards:[{id:1,text:"1. I take full responsibility for everything about me––even the thoughts that I think. I am in control of the vast resources of my own mind."},{id:2,text:"2. I alone am responsible for what I do and what I tell myself about me. No one can share this responsibility with me. "},{id:3,text:"3. I also allow others to accept their responsibilities far themselves and I do not try to accept their responsibilities for them. "},{id:4,text:"4. I enjoy being responsible. It puts me in charge of being me––and that’s a challenge I enjoy. "},{id:5,text:"5. I allow no one else, at any time, to assume control or responsibility over my life or over anything that I do. My responsibility to others is an extension of my own responsibility to myself. "},{id:6,text:"6. I choose to leave nothing about me up to chance. When it comes to me––and anything in my life––I choose to CHOOSE. "},{id:7,text:"7. My choices are mine alone to make for myself. I do not, at any time, allow anyone else to make my choices for me. And I accept full responsibility for every choice and decision I make. "},{id:8,text:"8. I always meet all of the obligations which I accept. And I accept no obligations which I will not meet. "},{id:9,text:"9. I am trustworthy. I can be counted on. I have accepted winning responsibility for myself––and I always live up to the responsibilities I accept. "},{id:10,text:"10. There is no they on whom I lay the blame, or with whom I share my own personal responsibilities. I have learned the great secret of mastering my own destiny. I have learned that “they” is “me.” "},{id:11,text:"11. I have no need to make excuses and no one needs to carry my responsibility for me. I gladly carry my own weight––and I carry it well. "},{id:12,text:"12. Each day I acknowledge and accept the responsibility––not only for my own actions––but also for my emotions, my thoughts, and my attitude. "},{id:13,text:"13. I accept the responsibility for living my life in a way which creates my strengths, my happiness, my positive, healthy beliefs, and for my past, my present, and my future."}]},{id:7,title:"Freedom from worry",cards:[{id:1,text:"1. I never worry. Instead of worrying, I find solutions and I act on them. "},{id:2,text:"2. My mind is constantly in tune with the positive. It is bright, cheerful, enthusiastic, and full of good, positive thoughts and ideas. "},{id:3,text:"3. I am able to relax easily and comfortably in my body and in my mind. I am calm, confident, and self-assured. "},{id:4,text:"4. My mind is orderly and well-organized. I consciously choose what I think and I always choose those thoughts which are the most positive and beneficial for me. "},{id:5,text:"5. All of my thoughts create healthiness within me. My mind dwells only on those thoughts which create more harmony, balance, and well-being within me and in the world around me. "},{id:6,text:"6. I automatically, and always, think in a decisive and determined way. "},{id:7,text:"7. I am full of resolution and the absolute assurance of the best possible outcome in everything that I do. "},{id:8,text:"8. I choose to look at the world around me in the bright, healthy light of optimism and self-assurance. "},{id:9,text:"9. I do only those things which are best for me. I create the best within myself, I attract the best in others, and I find the best in the world around me. "},{id:10,text:"10. I willingly, and without fail, take care of the duties and obligations which I have accepted for myself."},{id:11,text:"11. I commit only to those responsibilities which I know I can fulfill. "},{id:12,text:"12. I focus the attention of my mind only on those things that I can do something about. If I cannot affect it or direct it––I accept it. "},{id:13,text:"13. I keep my mind too busy thinking good, healthy, positive, constructive, and productive thoughts to ever have any time for worry. "},{id:14,text:"14. I control the thoughts I choose. No thought, at any time, can dwell in my mind without my approval or permission. I never worry."}]},{id:8,title:"Eating Habits",cards:[{id:1,text:"1. I am in control of myself in every way––at all times and in all situations. "},{id:2,text:"2. Each time I sit down to eat I reaffirm my determination to achieve my goal. By eating right, and never giving in, I am reaching the weight I want. "},{id:3,text:"3. Whether eating in or eating out, I really enjoy eating less. "},{id:4,text:"4. I never feel the need to finish the food in front of me. I eat only what I should––and never one bite more. "},{id:5,text:"5. One way to weight-loss that’s easy and works, is less food on my plate, and less on my fork. "},{id:6,text:'6. By ordering less when I eat out, and by serving myself smaller portions at home, I keep myself aware of the importance of staying with my goal––each and every day. “Less on my plate means less on my waist."'},{id:7,text:"7. When I sit down to eat, at no time do I allow anyone else to influence, tempt, or discourage me in any negative way."},{id:8,text:"8. What I eat, and the goals I reach, are up to me. And I give no one the right to hinder or control my success."},{id:9,text:"9. Although others may benefit from my success, I. am achieving my weight-loss goals for my own personal reasons––for myself, my life, my future, and my own personal well-being."},{id:10,text:"10. I am never, at any time, tempted to take one bite more than I should. I am strong, I am capable of reaching my goal, and I am doing it."},{id:11,text:"11. Being in situations which put a lot of food in front of me is not a problem to me now. I simply say “No” to the food and “Yes” to my success."},{id:12,text:"12. I enjoy sitting down to eat. Each time I do I conquer my past, and I create a trimmer, happier, more self-confident future in front of me. "},{id:13,text:"13. When I sit down to eat, I do not need someone else to remind me of my goal, or to keep me from eating something I should not. I take full responsibility for myself, and no one else has to do it for me. "},{id:14,text:"14. Controlling my weight, and my appetite, is easy for me now. I enjoy smaller portions, smaller bites, and a slower, healthier, more relaxed way of eating. "},{id:15,text:"15. I have set my goal and I am staying with it. I have turned mealtime into “achievement time.”"}]}],$u=["#3A7CA5","#4C9A6B","#C2773B","#8268B0","#C2536B","#C9A227","#3A7CA5","#4C9A6B"],Fa=e=>$u[e%$u.length],U0=e=>e+"1A",Jm="anvil_affirmation_favs",V0=()=>{try{return new Set(JSON.parse(localStorage.getItem(Jm)||"[]"))}catch{return new Set}};function Y0(){const[e,r]=c.useState(0),[n,o]=c.useState(0),[i,s]=c.useState(V0);c.useEffect(()=>{localStorage.setItem(Jm,JSON.stringify([...i]))},[i]);const l=(R,b)=>`${R}#${b.id}`,d=e==="FAV"?Is.flatMap((R,b)=>R.cards.filter(p=>i.has(l(R.title,p))).map(p=>({...p,color:Fa(b),title:R.title}))):Is[e].cards.map(R=>({...R,color:Fa(e),title:Is[e].title})),a=d.length,g=Math.min(n,Math.max(0,a-1)),h=d[g],x=R=>{r(R),o(0)},f=c.useCallback(()=>o(R=>Math.max(0,R-1)),[]),E=c.useCallback(()=>o(R=>Math.min(a-1,R+1)),[a]);c.useEffect(()=>{const R=b=>{b.key==="ArrowLeft"&&f(),b.key==="ArrowRight"&&E()};return window.addEventListener("keydown",R),()=>window.removeEventListener("keydown",R)},[f,E]);const z=R=>s(b=>{const p=new Set(b);return p.has(R)?p.delete(R):p.add(R),p}),k=h?h.color:"#8268B0";return t.jsxs("div",{style:st.page,children:[t.jsxs("div",{style:st.head,children:[t.jsx("div",{style:st.eyebrow,children:"Anvil · Affirmations"}),t.jsx("h1",{style:st.h1,children:"Affirmations"}),t.jsx("div",{style:st.subhead,children:"One at a time — read it, mean it."})]}),t.jsxs("div",{style:st.filterBar,children:[Is.map((R,b)=>{const p=e===b,m=Fa(b);return t.jsxs("button",{onClick:()=>x(b),style:{...st.chip,...p?{background:m,color:"#fff",borderColor:m}:{}},children:[t.jsx("span",{style:{...st.catDot,background:p?"#fff":m}})," ",R.title," ",t.jsx("span",{style:st.chipCount,children:R.cards.length})]},R.title)}),t.jsxs("button",{onClick:()=>x("FAV"),style:{...st.chip,...e==="FAV"?{background:"#C9A227",color:"#fff",borderColor:"#C9A227"}:{}},children:[t.jsx(wi,{size:12,fill:e==="FAV"?"#fff":"none"})," Favorites ",t.jsx("span",{style:st.chipCount,children:i.size})]})]}),a===0?t.jsxs("div",{style:st.empty,children:[t.jsx(wi,{size:22,color:"#C3BFB5"}),t.jsx("div",{children:"No favorites yet — tap the star on a card to save it here."})]}):t.jsxs("div",{style:st.viewer,children:[t.jsxs("div",{style:{...st.card,borderTop:`4px solid ${k}`},children:[t.jsx("div",{style:{...st.cardCat,color:k,background:U0(k)},children:h.title}),t.jsx("button",{onClick:()=>z(l(h.title,h)),style:{...st.favBtn,color:i.has(l(h.title,h))?"#C9A227":"#C3BFB5"},title:"Favorite",children:t.jsx(wi,{size:20,fill:i.has(l(h.title,h))?"#C9A227":"none"})}),t.jsx($d,{size:30,color:k,style:{opacity:.25}}),t.jsx("p",{style:st.cardText,children:h.text.trim()})]}),t.jsxs("div",{style:st.navRow,children:[t.jsxs("button",{onClick:f,disabled:g===0,style:{...st.navBtn,...g===0?st.navBtnDisabled:{}},children:[t.jsx(dn,{size:18})," Back"]}),t.jsxs("span",{style:{...st.counter,color:k},children:[g+1," ",t.jsxs("span",{style:st.counterTotal,children:["/ ",a]})]}),t.jsxs("button",{onClick:E,disabled:g===a-1,style:{...st.navBtn,...g===a-1?st.navBtnDisabled:{}},children:["Next ",t.jsx(Nr,{size:18})]})]}),t.jsx("div",{style:st.dots,children:d.map((R,b)=>t.jsx("button",{onClick:()=>o(b),style:{...st.dot,...b===g?{background:k,transform:"scale(1.5)"}:{}},title:`${b+1}`},b))})]})]})}const st={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},filterBar:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:22},chip:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipCount:{fontSize:11,fontWeight:700,opacity:.7},catDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},empty:{display:"flex",flexDirection:"column",alignItems:"center",gap:10,fontSize:13.5,color:"var(--text-3)",padding:"56px 12px",textAlign:"center",background:"var(--surface)",borderRadius:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},viewer:{display:"flex",flexDirection:"column",alignItems:"center"},card:{position:"relative",background:"var(--surface)",borderRadius:16,padding:"40px 32px 44px",boxShadow:"0 4px 20px rgba(0,0,0,0.07)",width:"100%",minHeight:240,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",boxSizing:"border-box"},cardCat:{position:"absolute",top:16,left:16,fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:12,textTransform:"uppercase",letterSpacing:"0.04em"},favBtn:{position:"absolute",top:14,right:14,border:"none",background:"none",cursor:"pointer",padding:4,display:"grid",placeItems:"center"},cardText:{fontSize:21,lineHeight:1.55,margin:"14px 0 0",fontWeight:500,color:"var(--text)",fontFamily:"'Fraunces',Georgia,serif",maxWidth:560},navRow:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",maxWidth:420,marginTop:22},navBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},counter:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},counterTotal:{fontSize:13,fontWeight:600,color:"var(--text-3)"},dots:{display:"flex",gap:6,flexWrap:"wrap",justifyContent:"center",marginTop:20,maxWidth:480},dot:{width:7,height:7,borderRadius:"50%",border:"none",background:"var(--border)",cursor:"pointer",padding:0,transition:"transform 0.12s"}},Q0=[{id:"day",label:"Day"},{id:"week",label:"Week"},{id:"month",label:"Month"},{id:"year",label:"Year"}],Qr=e=>e>=60?`${Math.floor(e/60)}h ${e%60}m`:`${e}m`,K0=e=>{const r=e<12?"am":"pm",n=e%12===0?12:e%12;return`${String(n).padStart(2,"0")} ${r}`};function X0(e){const r=e<=60?10:e<=120?20:e<=300?60:120,n=Math.max(60,Math.ceil((e||1)/r)*r),o=[];for(let i=0;i<=n;i+=r)o.push(i);return{max:n,ticks:o}}const eh=e=>{const r=new Date(e);return r.setHours(0,0,0,0),r},q0=e=>{const r=eh(e),n=(r.getDay()+6)%7;return r.setDate(r.getDate()-n),r},Z0=e=>new Date(e.getFullYear(),e.getMonth(),1),J0=e=>new Date(e.getFullYear(),0,1);function ev(e,r){if(e==="day"){const i=eh(r);return{start:i,end:new Date(+i+864e5),prev:new Date(+i-864e5),prev2:new Date(+i-2*864e5)}}if(e==="week"){const i=q0(r);return{start:i,end:new Date(+i+7*864e5),prev:new Date(+i-7*864e5),prev2:new Date(+i-14*864e5)}}if(e==="month"){const i=Z0(r),s=r.getFullYear(),l=r.getMonth();return{start:i,end:new Date(s,l+1,1),prev:new Date(s,l-1,1),prev2:new Date(s,l-2,1)}}const n=r.getFullYear();return{start:J0(r),end:new Date(n+1,0,1),prev:new Date(n-1,0,1),prev2:new Date(n-2,0,1)}}function tv({sessions:e=[],onBack:r}){const[n,o]=c.useState("day"),i=new Date,{start:s,end:l,prev:d,prev2:a}=ev(n,i),g=ae=>new Date(ae.started_at||ae.created_at),h=e.filter(ae=>ae.completed),x=(ae,ve,G)=>{const V=g(ae);return V>=ve&&V<G},f=(ae,ve)=>h.filter(G=>x(G,ae,ve)).reduce((G,V)=>G+(V.actual_min||0),0),E=h.filter(ae=>x(ae,s,l)),z=E.reduce((ae,ve)=>ae+(ve.actual_min||0),0),k=f(d,s),R=f(a,d),b=E.length,p=Array(24).fill(0);E.forEach(ae=>{p[g(ae).getHours()]+=ae.actual_min||0});const m=Math.max(...p,0),T=X0(m),j={};E.forEach(ae=>{const ve=Nt[ae.tree]?ae.tree:rn;j[ve]=(j[ve]||0)+(ae.actual_min||0)});const C=Object.entries(j).map(([ae,ve])=>({name:Nt[ae].label,min:ve,color:Nt[ae].leaf})).sort((ae,ve)=>ve.min-ae.min),L=k>0?Math.round((z-k)/k*100):z>0?100:0,M=L>0?ql:L<0?Xl:Wm,w=L>0?"#4C9A6B":L<0?"#C2536B":"#9A968C",D={day:"yesterday",week:"last week",month:"last month",year:"last year"}[n],ie={day:"2 days ago",week:"2 weeks ago",month:"2 months ago",year:"2 years ago"}[n],B=54,I=22,Z=2*Math.PI*B;let be=0;return t.jsxs("div",{style:Fe.page,children:[t.jsxs("div",{style:Fe.topbar,children:[t.jsxs("button",{onClick:r,style:Fe.back,children:[t.jsx(Im,{size:18})," Grove"]}),t.jsx("h1",{style:Fe.h1,children:"Insights"}),t.jsx("div",{style:{width:76}})]}),t.jsx("div",{style:Fe.rangeBar,children:Q0.map(ae=>t.jsx("button",{onClick:()=>o(ae.id),style:{...Fe.rangeBtn,...n===ae.id?Fe.rangeOn:{}},children:ae.label},ae.id))}),t.jsxs("div",{style:Fe.headline,children:[t.jsxs("div",{style:Fe.bigStat,children:[t.jsx("div",{style:Fe.bigVal,children:Qr(z)}),t.jsxs("div",{style:Fe.bigLbl,children:["Focused this ",n]})]}),t.jsxs("div",{style:Fe.bigStat,children:[t.jsx("div",{style:Fe.bigVal,children:b}),t.jsx("div",{style:Fe.bigLbl,children:"Trees"})]})]}),t.jsxs("div",{style:Fe.card,children:[t.jsxs("div",{style:Fe.cardHead,children:[t.jsxs("div",{style:Fe.cardTitle,children:["Your forest this ",n]}),t.jsx("div",{style:Fe.cardHint,children:"Each tree is a completed session — bigger means longer focus"})]}),t.jsx(ov,{sessions:E}),t.jsxs("div",{style:Fe.forestNumber,children:[b," ",b===1?"tree":"trees"," · ",Qr(z)," focused"]})]}),t.jsx(Ma,{title:"Focus distribution",hint:"Minutes focused at each time of day",children:m===0?t.jsx(Pu,{}):t.jsx(nv,{hours:p,axis:T})}),t.jsx(Ma,{title:"Pillar distribution",hint:"How your focus splits across the five trees",children:C.length===0?t.jsx(Pu,{}):t.jsxs("div",{style:Fe.donutWrap,children:[t.jsxs("svg",{viewBox:"0 0 140 140",width:"150",height:"150",style:{flexShrink:0},children:[C.map(ae=>{const ve=ae.min/(z||1)*Z,G=t.jsx("circle",{cx:"70",cy:"70",r:B,fill:"none",stroke:ae.color,strokeWidth:I,strokeDasharray:`${ve} ${Z-ve}`,strokeDashoffset:-be,transform:"rotate(-90 70 70)"},ae.name);return be+=ve,G}),t.jsx("text",{x:"70",y:"66",textAnchor:"middle",style:Fe.donutCenterTop,children:Qr(z)}),t.jsx("text",{x:"70",y:"82",textAnchor:"middle",style:Fe.donutCenterSub,children:"total"})]}),t.jsx("div",{style:Fe.legend,children:C.map(ae=>t.jsxs("div",{style:Fe.legendRow,children:[t.jsx("span",{style:{...Fe.legendDot,background:ae.color}}),t.jsx("span",{style:Fe.legendName,children:ae.name}),t.jsxs("span",{style:Fe.legendVal,children:[Qr(ae.min)," · ",Math.round(ae.min/(z||1)*100),"%"]})]},ae.name))})]})}),t.jsxs(Ma,{title:"Focus trend",hint:`This ${n} vs the previous two`,children:[t.jsxs("div",{style:Fe.trend3,children:[t.jsxs("div",{style:Fe.trendCol,children:[t.jsx("div",{style:Fe.trendVal,children:Qr(z)}),t.jsxs("div",{style:Fe.trendLbl,children:["This ",n]})]}),t.jsxs("div",{style:Fe.trendCol,children:[t.jsx("div",{style:{...Fe.trendVal,color:"var(--text-2)"},children:Qr(k)}),t.jsx("div",{style:Fe.trendLbl,children:D})]}),t.jsxs("div",{style:Fe.trendCol,children:[t.jsx("div",{style:{...Fe.trendVal,color:"var(--text-3)"},children:Qr(R)}),t.jsx("div",{style:Fe.trendLbl,children:ie})]})]}),t.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:14},children:t.jsxs("div",{style:{...Fe.trendBadge,color:w,background:w+"1A"},children:[t.jsx(M,{size:15})," ",L>0?"+":"",L,"% vs ",D]})}),t.jsx(iv,{items:[{label:`This ${n}`,value:z,color:"#4C9A6B"},{label:D,value:k,color:"var(--text-3)"},{label:ie,value:R,color:"var(--text-3)"}]})]})]})}const rv=e=>e===0?"12a":e<12?`${e}a`:e===12?"12p":`${e-12}p`;function nv({hours:e,axis:r}){return t.jsxs("div",{children:[t.jsxs("div",{style:Fe.vcPlot,children:[r.ticks.map(n=>t.jsxs("div",{style:{...Fe.vcGridRow,bottom:`${n/r.max*100}%`},children:[t.jsx("span",{style:Fe.vcYLabel,children:n}),t.jsx("div",{style:Fe.vcGridLine})]},n)),t.jsx("div",{style:Fe.vcBars,children:e.map((n,o)=>t.jsx("div",{style:Fe.vcCell,title:`${K0(o)} · ${n} min`,children:t.jsx("div",{style:{...Fe.vcBar,height:n>0?`max(3px, ${n/r.max*100}%)`:0}})},o))})]}),t.jsx("div",{style:Fe.vcXAxis,children:e.map((n,o)=>t.jsx("div",{style:Fe.vcXCell,children:o%3===0?rv(o):""},o))}),t.jsx("div",{style:Fe.vcYTitle,children:"minutes focused, by hour of day"})]})}function ov({sessions:e}){if(!e.length)return t.jsx("div",{style:Fe.sceneEmpty,children:"No trees yet this period. 🌱"});const n=e.slice(0,80),o=e.length-n.length,i=s=>Math.round(Math.max(40,Math.min(88,40+(s||0)*.6)));return t.jsxs("div",{children:[t.jsx("div",{style:Fe.scene,children:n.map(s=>t.jsx("div",{style:Fe.sceneTree,title:`${s.label||"Focus"} · ${Qr(s.actual_min||s.duration_min)}`,children:t.jsx(ig,{species:s.tree,progress:1,size:i(s.actual_min||s.duration_min)})},s.id))}),o>0&&t.jsxs("div",{style:Fe.overflow,children:["+",o," more trees"]})]})}function Ma({title:e,hint:r,children:n}){return t.jsxs("div",{style:Fe.card,children:[t.jsxs("div",{style:Fe.cardHead,children:[t.jsx("div",{style:Fe.cardTitle,children:e}),r&&t.jsx("div",{style:Fe.cardHint,children:r})]}),n]})}function Pu(){return t.jsx("div",{style:Fe.empty,children:"No focus sessions in this period yet. 🌱"})}function iv({items:e}){const r=Math.max(1,...e.map(n=>n.value));return t.jsx("div",{style:Fe.tbWrap,children:e.map(n=>t.jsxs("div",{style:Fe.tbRow,children:[t.jsx("div",{style:Fe.tbLbl,children:n.label}),t.jsx("div",{style:Fe.tbTrack,children:t.jsx("div",{style:{...Fe.tbBar,width:`${n.value/r*100}%`,background:n.color}})}),t.jsx("div",{style:Fe.tbVal,children:Qr(n.value)})]},n.label))})}const Fe={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"20px 16px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:720,margin:"0 auto"},topbar:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16},back:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},h1:{fontSize:20,fontWeight:700,margin:0,fontFamily:"'Fraunces',Georgia,serif"},rangeBar:{display:"flex",gap:6,background:"var(--surface)",padding:5,borderRadius:12,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},rangeBtn:{flex:1,border:"none",background:"none",padding:"9px 0",borderRadius:8,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},rangeOn:{background:"var(--accent-strong)",color:"#fff"},headline:{display:"flex",gap:12,marginBottom:16},bigStat:{flex:1,background:"var(--surface)",borderRadius:14,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},bigVal:{fontSize:26,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em"},bigLbl:{fontSize:12,color:"var(--text-3)",marginTop:3,fontWeight:500},card:{background:"var(--surface)",borderRadius:16,padding:"18px 18px 20px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:16},cardHead:{marginBottom:14},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardHint:{fontSize:12,color:"var(--text-3)",marginTop:2},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"24px 0"},scene:{display:"flex",flexWrap:"wrap",alignItems:"flex-end",justifyContent:"center",gap:"0 2px",padding:"14px 8px 6px",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,minHeight:110,border:"1px solid var(--border)"},sceneTree:{lineHeight:0},sceneEmpty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"34px 0",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,border:"1px solid var(--border)"},overflow:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",marginTop:6,fontWeight:600},forestNumber:{textAlign:"center",marginTop:12,fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},vcPlot:{position:"relative",height:180,paddingLeft:30},vcGridRow:{position:"absolute",left:0,right:0,display:"flex",alignItems:"center",height:0},vcYLabel:{width:26,marginRight:4,textAlign:"right",fontSize:9,color:"var(--text-3)",fontWeight:600,flexShrink:0},vcGridLine:{flex:1,height:1,background:"#EEEBE4"},vcBars:{position:"absolute",left:30,right:0,top:0,bottom:0,display:"flex",alignItems:"flex-end",gap:1},vcCell:{flex:1,height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"center"},vcBar:{width:"72%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",transition:"height 0.3s"},vcXAxis:{display:"flex",marginLeft:30,marginTop:4},vcXCell:{flex:1,textAlign:"center",fontSize:8.5,color:"var(--text-3)",fontWeight:600,overflow:"hidden"},vcYTitle:{textAlign:"center",fontSize:9.5,color:"var(--text-3)",marginTop:6,letterSpacing:"0.06em",textTransform:"uppercase",fontWeight:600},donutWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap",justifyContent:"center"},donutCenterTop:{fontSize:16,fontWeight:800,fill:"var(--text)",fontFamily:"'Fraunces',Georgia,serif"},donutCenterSub:{fontSize:9,fill:"#9A968C",textTransform:"uppercase",letterSpacing:"0.08em"},legend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8},legendDot:{width:11,height:11,borderRadius:3,flexShrink:0},legendName:{flex:1,fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},legendVal:{fontSize:12,color:"var(--text-3)",fontWeight:600,flexShrink:0},trend3:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12,gap:8},trendCol:{textAlign:"center",flex:1},trendVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},trendLbl:{fontSize:11,color:"var(--text-3)",marginTop:2},trendBadge:{display:"inline-flex",alignItems:"center",gap:4,fontSize:13,fontWeight:800,padding:"6px 12px",borderRadius:20,width:"fit-content"},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:78,fontSize:11,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},tbTrack:{flex:1,height:14,background:"#F2F0EA",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:56,fontSize:11,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"}},sv=[15,30,45,60,90],Wa="anvil_grove_active",Nu=e=>`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`,Il=e=>e>=60?`${Math.floor(e/60)}h ${e%60}m`:`${e}m`;function lv(){const[e,r]=c.useState("timer"),[n,o]=c.useState("idle"),[i,s]=c.useState(15),[l,d]=c.useState(!1),[a,g]=c.useState(""),[h,x]=c.useState(rn),[f,E]=c.useState(()=>localStorage.getItem("anvil_grove_deepfocus")!=="0"),[z,k]=c.useState(15*60),[R,b]=c.useState({sessions:[],stats:null}),p=c.useRef(null),m=c.useRef(null),T=c.useRef(!1),j=c.useCallback(async()=>{try{b(await _.getFocus())}catch{}},[]),C=c.useCallback(async(Q,ue)=>{if(!T.current){T.current=!0,localStorage.removeItem(Wa);try{await _.createFocus({label:a.trim()||null,tree:h,duration_min:i,actual_min:ue,completed:Q,started_at:m.current,ended_at:new Date().toISOString()})}catch{}j()}},[a,h,i,j]),L=c.useCallback(()=>{if(n!=="running")return;const Q=m.current?Math.round((Date.now()-new Date(m.current).getTime())/6e4):0;o("failed"),C(!1,Math.max(0,Math.min(i,Q)))},[n,i,C]),M=c.useCallback(()=>{o("done"),k(0),C(!0,i)},[i,C]);c.useEffect(()=>{j();const Q=JSON.parse(localStorage.getItem(Wa)||"null");if(Q&&Q.endTime){const ue=Math.round((Q.endTime-Date.now())/1e3);s(Q.duration),g(Q.label||""),x(Q.tree||"oak"),p.current=Q.endTime,m.current=Q.startedAt,ue>0?(k(ue),o("running")):(o("done"),T.current=!1,C(!0,Q.duration))}},[]),c.useEffect(()=>{if(n!=="running")return;const Q=()=>{const v=Math.round((p.current-Date.now())/1e3);if(v<=0){M();return}k(v)};Q();const ue=setInterval(Q,250);return()=>clearInterval(ue)},[n,M]),c.useEffect(()=>{if(n!=="running"||!f)return;const Q=()=>{document.hidden&&L()};return document.addEventListener("visibilitychange",Q),()=>document.removeEventListener("visibilitychange",Q)},[n,f,L]),c.useEffect(()=>{const Q=()=>{!document.hidden&&n!=="running"&&j()};window.addEventListener("focus",Q),document.addEventListener("visibilitychange",Q);const ue=setInterval(Q,6e4);return()=>{window.removeEventListener("focus",Q),document.removeEventListener("visibilitychange",Q),clearInterval(ue)}},[j,n]);const w=()=>E(Q=>{const ue=!Q;return localStorage.setItem("anvil_grove_deepfocus",ue?"1":"0"),ue}),D=()=>{T.current=!1,m.current=new Date().toISOString(),p.current=Date.now()+i*60*1e3,localStorage.setItem(Wa,JSON.stringify({endTime:p.current,duration:i,label:a,tree:h,startedAt:m.current})),k(i*60),o("running")},ie=()=>{o("idle"),k(i*60)},B=Q=>{d(!1),s(Q),k(Q*60)},I=()=>{l||(d(!0),s(5),k(5*60))},Z=Q=>{if(d(!0),Q===""){s(0),k(0);return}const ue=Math.max(1,Math.min(600,parseInt(Q,10)||0));s(ue),k(ue*60)},be=i*60,ae=n==="running"?1-z/be:n==="done"?1:0,ve=130,G=2*Math.PI*ve,V=G*(1-(n==="running"?ae:n==="done"?1:0)),oe=R.stats;return e==="stats"?t.jsx(tv,{sessions:R.sessions,onBack:()=>r("timer")}):t.jsxs("div",{style:$e.page,children:[t.jsxs("div",{style:$e.head,children:[t.jsx("div",{style:$e.eyebrow,children:"Anvil · Grove"}),t.jsx("h1",{style:$e.h1,children:"Grove"}),t.jsx("div",{style:$e.subhead,children:"Plant a tree, stay focused, grow your grove."}),t.jsxs("button",{onClick:()=>r("stats"),style:$e.insightsBtn,disabled:n==="running",children:[t.jsx(iy,{size:15})," Insights"]})]}),oe&&t.jsxs("div",{style:$e.statRow,children:[t.jsx(Es,{label:"Today",value:Il(oe.today_minutes)}),t.jsx(Es,{label:"Trees",value:oe.trees}),t.jsx(Es,{label:"Streak",value:`${oe.streak}d`}),t.jsx(Es,{label:"Success",value:`${oe.success_rate}%`})]}),t.jsxs("div",{style:$e.stage,children:[t.jsxs("div",{style:$e.ringWrap,children:[t.jsxs("svg",{width:"300",height:"300",viewBox:"0 0 300 300",style:{position:"absolute",inset:0},children:[t.jsx("circle",{cx:"150",cy:"150",r:ve,fill:"none",stroke:"var(--border)",strokeWidth:"10"}),t.jsx("circle",{cx:"150",cy:"150",r:ve,fill:"none",stroke:n==="failed"?"#C2536B":"#4C9A6B",strokeWidth:"10",strokeLinecap:"round",strokeDasharray:G,strokeDashoffset:V,transform:"rotate(-90 150 150)",style:{transition:"stroke-dashoffset 0.4s linear"}})]}),t.jsx("div",{style:$e.ringInner,children:t.jsx(ig,{species:h,progress:n==="idle"?0:ae,withered:n==="failed",size:170})})]}),n==="idle"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:$e.timeBig,children:Nu(i*60)}),t.jsxs("div",{style:$e.controls,children:[t.jsxs("div",{style:$e.chips,children:[sv.map(Q=>t.jsxs("button",{onClick:()=>B(Q),style:{...$e.chip,...!l&&i===Q?$e.chipOn:{}},children:[Q,"m"]},Q)),t.jsx("button",{onClick:I,style:{...$e.chip,...l?$e.chipOn:{}},children:"Custom"})]}),l&&t.jsxs("div",{style:$e.customRow,children:[t.jsx("input",{type:"number",min:"1",max:"600",inputMode:"numeric",autoFocus:!0,value:i||"",onChange:Q=>Z(Q.target.value),placeholder:"e.g. 50",style:$e.customInput}),t.jsx("span",{style:$e.customUnit,children:"minutes"})]}),t.jsx("input",{value:a,onChange:Q=>g(Q.target.value),placeholder:"What are you focusing on? (optional)",style:$e.input,maxLength:60}),t.jsx("div",{style:$e.treePick,children:Object.entries(Nt).map(([Q,ue])=>t.jsxs("button",{onClick:()=>x(Q),title:ue.label,style:{...$e.treeBtn,...h===Q?{borderColor:ue.leaf,background:ue.leaf+"1A"}:{}},children:[t.jsx("span",{style:{...$e.treeDot,background:ue.leaf}}),ue.label]},Q))}),t.jsxs("button",{onClick:w,style:$e.toggleRow,children:[t.jsxs("div",{style:{textAlign:"left"},children:[t.jsx("div",{style:$e.toggleTitle,children:"Deep Focus"}),t.jsx("div",{style:$e.toggleHint,children:f?"Leaving the app kills the tree":"Tree survives until you give up"})]}),t.jsx("div",{style:{...$e.switch,...f?$e.switchOn:{}},children:t.jsx("div",{style:{...$e.knob,...f?$e.knobOn:{}}})})]}),t.jsx("button",{onClick:D,disabled:i<1,style:{...$e.plantBtn,...i<1?{opacity:.5,cursor:"not-allowed"}:{}},children:"Plant tree"})]})]}),n==="running"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:$e.timeBig,children:Nu(z)}),t.jsx("div",{style:$e.focusLabel,children:a.trim()||"Focusing…"}),t.jsx("div",{style:f?$e.warn:$e.warnSoft,children:f?"⚠ Deep Focus on — leaving this app will kill your tree.":"🌿 Relaxed mode — only Give up ends this session."}),t.jsx("button",{onClick:L,style:$e.giveUp,children:"Give up"})]}),n==="done"&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:$e.resultTitle,children:["🌳 You grew a ",Nt[h].label," tree!"]}),t.jsxs("div",{style:$e.resultSub,children:[Il(i)," of focus added to your grove."]}),t.jsx("button",{onClick:ie,style:$e.plantBtn,children:"Plant another"})]}),n==="failed"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:{...$e.resultTitle,color:"#C2536B"},children:"Your tree withered."}),t.jsx("div",{style:$e.resultSub,children:"You left before the timer finished. Try again?"}),t.jsx("button",{onClick:ie,style:$e.plantBtn,children:"Try again"})]})]}),t.jsx(av,{sessions:R.sessions,onDelete:async Q=>{await _.deleteFocus(Q),j()}})]})}function Es({label:e,value:r}){return t.jsxs("div",{style:$e.stat,children:[t.jsx("div",{style:$e.statValue,children:r}),t.jsx("div",{style:$e.statLabel,children:e})]})}function av({sessions:e,onDelete:r}){const n=e.filter(l=>l.completed);if(n.length===0)return t.jsx("div",{style:$e.forestEmpty,children:"Your grove is empty. Plant your first tree above. 🌱"});const o={};for(const l of n){const d=(l.started_at||l.created_at||"").slice(0,10);(o[d]||(o[d]=[])).push(l)}const i=Object.keys(o).sort().reverse(),s=l=>{const d=new Date().toISOString().slice(0,10);return l===d?"Today":new Date(l+"T00:00").toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})};return t.jsxs("div",{style:$e.forest,children:[t.jsxs("div",{style:$e.forestHead,children:["Your Grove · ",n.length," trees"]}),i.map(l=>t.jsxs("div",{style:$e.daySection,children:[t.jsxs("div",{style:$e.dayLabel,children:[s(l)," · ",o[l].length]}),t.jsx("div",{style:$e.treeGrid,children:o[l].map(d=>t.jsxs("div",{style:$e.treeCard,title:`${d.label||"Focus"} · ${Il(d.actual_min)}`,onDoubleClick:()=>r(d.id),children:[t.jsx(Xy,{species:d.tree}),t.jsx("div",{style:$e.treeCardMin,children:Il(d.actual_min||d.duration_min)}),d.label&&t.jsx("div",{style:$e.treeCardLabel,children:d.label})]},d.id))})]},l)),t.jsx("div",{style:$e.forestHint,children:"Double-tap a tree to remove it."})]})}const $e={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:820,margin:"0 auto"},head:{marginBottom:16,textAlign:"center"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},insightsBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginTop:12},statRow:{display:"flex",gap:10,justifyContent:"center",marginBottom:18,flexWrap:"wrap"},stat:{background:"var(--surface)",borderRadius:12,padding:"10px 18px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",minWidth:78},statValue:{fontSize:19,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},statLabel:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},stage:{background:"var(--surface)",borderRadius:18,padding:"28px 24px 32px",boxShadow:"0 2px 12px rgba(0,0,0,0.06)",display:"flex",flexDirection:"column",alignItems:"center",marginBottom:26},ringWrap:{position:"relative",width:300,height:300,display:"grid",placeItems:"center"},ringInner:{position:"relative",zIndex:1,display:"grid",placeItems:"center"},timeBig:{fontSize:40,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:6},focusLabel:{fontSize:14,color:"var(--text-2)",marginTop:2,fontWeight:500},warn:{fontSize:12,color:"#C2773B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},warnSoft:{fontSize:12,color:"#4C9A6B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},toggleRow:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,border:"1px solid var(--border)",background:"var(--surface)",borderRadius:12,padding:"10px 14px",cursor:"pointer",fontFamily:"inherit",width:"100%"},toggleTitle:{fontSize:14,fontWeight:700,color:"var(--text)"},toggleHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},switch:{width:42,height:24,borderRadius:12,background:"var(--border)",flexShrink:0,padding:2,transition:"background 0.18s",boxSizing:"border-box"},switchOn:{background:"#4C9A6B"},knob:{width:20,height:20,borderRadius:"50%",background:"var(--surface)",boxShadow:"0 1px 2px rgba(0,0,0,0.2)",transform:"translateX(0)",transition:"transform 0.18s"},knobOn:{transform:"translateX(18px)"},controls:{width:"100%",maxWidth:380,display:"flex",flexDirection:"column",gap:14,marginTop:8},chips:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},chip:{border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 16px",borderRadius:20,fontSize:13.5,fontWeight:700,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipOn:{background:"#4C9A6B",color:"#fff",borderColor:"#4C9A6B"},customRow:{display:"flex",alignItems:"center",justifyContent:"center",gap:8},customInput:{border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",fontSize:15,fontWeight:700,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center",width:100},customUnit:{fontSize:13,color:"var(--text-3)",fontWeight:600},input:{border:"1px solid var(--border)",borderRadius:10,padding:"11px 13px",fontSize:14,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center"},treePick:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},treeBtn:{display:"flex",alignItems:"center",gap:6,border:"1.5px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},treeDot:{width:10,height:10,borderRadius:"50%"},plantBtn:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:4},giveUp:{border:"1px solid var(--border)",background:"var(--surface)",color:"#C2536B",padding:"11px 26px",borderRadius:11,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:18},resultTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginTop:14,textAlign:"center"},resultSub:{fontSize:13.5,color:"var(--text-3)",marginTop:6,marginBottom:18,textAlign:"center"},forest:{background:"var(--surface)",borderRadius:16,padding:"20px 22px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},forestHead:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:14},forestEmpty:{background:"var(--surface)",borderRadius:16,padding:"40px 20px",textAlign:"center",color:"var(--text-3)",fontSize:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},daySection:{marginBottom:16},dayLabel:{fontSize:12,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.04em",marginBottom:8},treeGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(80px,1fr))",gap:8},treeCard:{display:"flex",flexDirection:"column",alignItems:"center",padding:"8px 4px",borderRadius:10,cursor:"pointer",background:"var(--surface-2)"},treeCardMin:{fontSize:12,fontWeight:700,color:"#4C9A6B",marginTop:-4},treeCardLabel:{fontSize:10.5,color:"var(--text-3)",marginTop:2,textAlign:"center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:76},forestHint:{fontSize:11,color:"var(--text-3)",textAlign:"center",marginTop:6}},dv="grove_rates",cv="reward_rates",Bs=Object.keys(Nt),Ou=[{id:"kickstart",label:"Kickstart"},{id:"golden",label:"Golden Book"},{id:"habits",label:"Habits"},{id:"quadrant",label:"Quadrant"},{id:"goals",label:"Goals"},{id:"grove",label:"Grove"},{id:"journal",label:"Journal"},{id:"revision",label:"Revision"},{id:"affirmations",label:"Affirmations"},{id:"skills",label:"Skills"},{id:"spiritual",label:"Spiritual"},{id:"mindscape",label:"Mindscape"},{id:"vault",label:"Wallet"},{id:"expenses",label:"Expenses"},{id:"trading",label:"Trading Journal"},{id:"delight",label:"Delights"}],Hu=new Set(["worth","achievements"]),ao="#C9A227",ii="#3A7CA5",co="#C2536B",gv=e=>{const r=Math.floor(e/60),n=Math.round(e%60);return r&&n?`${r}h ${n}m`:r?`${r}h`:`${n}m`},uv=e=>{let r=Math.round((e||0)*60);const n=Math.floor(r/3600);r%=3600;const o=Math.floor(r/60);return r%=60,[n?`${n}h`:null,n||o?`${o}m`:null,`${r}s`].filter(Boolean).join(" ")},pv=()=>{const e=new Date,r=n=>String(n).padStart(2,"0");return`${e.getFullYear()}-${r(e.getMonth()+1)}-${r(e.getDate())}T${r(e.getHours())}:${r(e.getMinutes())}`},Gu=e=>{if(!e)return"";const r=new Date(e.includes("T")?e:e+"T00:00:00");return isNaN(r)?e:r.toLocaleDateString("en-US",e.includes("T")?{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}:{month:"short",day:"numeric",year:"numeric"})},cr=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,Uu=e=>{const r=new Date(e);return r.setHours(0,0,0,0),r.setDate(r.getDate()-(r.getDay()+6)%7),r},Ds=[{id:"today",label:"Today"},{id:"all",label:"All time"},{id:"tweek",label:"This week"},{id:"tmonth",label:"This month"},{id:"pweek",label:"Last week"},{id:"pmonth",label:"Last month"},{id:"tyear",label:"This year"}];function bv(e){const r=new Date;if(e==="today")return[cr(r),cr(r)];if(e==="tweek"){const n=Uu(r),o=new Date(n);return o.setDate(n.getDate()+6),[cr(n),cr(o)]}if(e==="pweek"){const n=Uu(r);n.setDate(n.getDate()-7);const o=new Date(n);return o.setDate(n.getDate()+6),[cr(n),cr(o)]}return e==="tmonth"?[cr(new Date(r.getFullYear(),r.getMonth(),1)),cr(new Date(r.getFullYear(),r.getMonth()+1,0))]:e==="pmonth"?[cr(new Date(r.getFullYear(),r.getMonth()-1,1)),cr(new Date(r.getFullYear(),r.getMonth(),0))]:e==="tyear"?[cr(new Date(r.getFullYear(),0,1)),cr(new Date(r.getFullYear(),11,31))]:["0000-01-01","9999-12-31"]}function mv(){const e=Ho(),r=u=>Yr(u,e.code),[n,o]=c.useState([]),[i,s]=c.useState([]),[l,d]=c.useState([]),[a,g]=c.useState([]),[h,x]=c.useState([]),[f,E]=c.useState({}),[z,k]=c.useState({}),[R,b]=c.useState(!1),[p,m]=c.useState({}),[T,j]=c.useState({}),[C,L]=c.useState(!1),[M,w]=c.useState(!1),[D,ie]=c.useState(null),[B,I]=c.useState(""),[Z,be]=c.useState(""),[ae,ve]=c.useState(!1),[G,V]=c.useState("today"),oe=()=>_.getPayouts().then(g).catch(()=>{}),Q=()=>_.getRewardRates().then(d).catch(()=>{});c.useEffect(()=>{(async()=>{try{const[u,te,Me,Pe,Se,Oe,St]=await Promise.all([_.getFocus(),_.getScreenTime(),_.getRewardRates(),_.getPayouts(),_.getAchievements(),_.getSetting(dv),_.getSetting(cv)]);o(u.sessions||[]),s(Array.isArray(te)?te:[]),d(Me||[]),g(Pe||[]),x(Array.isArray(Se)?Se:[]),E((Oe==null?void 0:Oe.value)||{}),k((St==null?void 0:St.value)||{})}catch{}b(!0)})()},[]);const ue={};l.forEach(u=>{var te;(ue[te=`${u.kind}:${u.rkey}`]||(ue[te]=[])).push({eff:u.eff_date,rate:u.rate})}),Object.values(ue).forEach(u=>u.sort((te,Me)=>te.eff.localeCompare(Me.eff)));const v=(u,te,Me)=>{const Pe=ue[`${u}:${te}`];if(Pe){let Se=null;for(const Oe of Pe)if(Oe.eff<=Me)Se=Oe.rate;else break;if(Se!==null)return Se}return(u==="focus"?f[te]:z[te])||0},A=(u,te)=>{const Me=ue[`${u}:${te}`];return Me&&Me.length?Me[Me.length-1].rate:(u==="focus"?f[te]:z[te])??""},[P,se]=bv(G);let le=0,De=0;n.filter(u=>u.completed).forEach(u=>{const te=(u.started_at||u.created_at||"").slice(0,10),Me=Nt[u.tree]?u.tree:rn;le+=(u.actual_min||0)/60*v("focus",Me,te)}),i.forEach(u=>{Hu.has(u.screen)||(De+=u.seconds/60*v("usage",u.screen,u.date))});const Y=h.reduce((u,te)=>u+(te.reward||0),0),ne=le+De+Y,W=a.reduce((u,te)=>u+te.amount,0),U=Math.max(0,ne-W),ce={};Bs.forEach(u=>ce[u]={minutes:0,earned:0}),n.filter(u=>u.completed).forEach(u=>{const te=(u.started_at||u.created_at||"").slice(0,10);if(te<P||te>se)return;const Me=Nt[u.tree]?u.tree:rn,Pe=u.actual_min||0;ce[Me].minutes+=Pe,ce[Me].earned+=Pe/60*v("focus",Me,te)});const F=Bs.reduce((u,te)=>u+ce[te].earned,0),y={};i.forEach(u=>{var Me;if(Hu.has(u.screen)||u.date<P||u.date>se)return;const te=y[Me=u.screen]||(y[Me]={seconds:0,earned:0});te.seconds+=u.seconds,te.earned+=u.seconds/60*v("usage",u.screen,u.date)});const K=Object.values(y).reduce((u,te)=>u+te.earned,0),me=h.filter(u=>u.date>=P&&u.date<=se&&(u.reward||0)>0),O=[...me].sort((u,te)=>te.date.localeCompare(u.date)||te.reward-u.reward),Te=me.reduce((u,te)=>u+(te.reward||0),0),Be=F+K+Te,Ge=Be>0?F/Be*100:0,Ue=Be>0?K/Be*100:0,it=Be>0?Te/Be*100:0,ft=Bs.map(u=>({p:u,...ce[u],...Nt[u]})).filter(u=>u.minutes>0).sort((u,te)=>te.earned-u.earned),qe=Ou.map(u=>({...u,...y[u.id]||{seconds:0,earned:0}})).filter(u=>u.seconds>0).sort((u,te)=>te.earned-u.earned),Tt=(u,te)=>{_.setRewardRate({kind:"focus",rkey:u,rate:Math.max(0,parseFloat(te)||0)}).then(Q).catch(()=>{})},It=(u,te)=>{_.setRewardRate({kind:"usage",rkey:u,rate:Math.max(0,parseFloat(te)||0)}).then(Q).catch(()=>{})},kt=u=>{U<=0||(ie(u),I(u==="all"?U.toFixed(2):""),be(""))},pt=async()=>{const u=Math.min(parseFloat(B)||0,U);u<=0||!Z.trim()||(await _.createPayout({amount:u,note:Z.trim(),date:pv()}),ie(null),I(""),be(""),await oe(),ve(!0))},wt=async u=>{await _.deletePayout(u),oe()};return t.jsxs("div",{style:re.page,children:[t.jsxs("div",{style:re.head,children:[t.jsx("div",{style:re.eyebrow,children:"Anvil · Rewards"}),t.jsx("h1",{style:re.h1,children:"Rewards"}),t.jsx("div",{style:re.subhead,children:"Your earned rewards from focus and app usage."})]}),t.jsxs("div",{style:re.hero,children:[t.jsx("button",{onClick:()=>ve(u=>!u),style:re.logIcon,title:"View reward log",children:t.jsx(Wy,{size:16})}),t.jsx("div",{style:re.heroLabel,children:"Final reward · pending"}),t.jsx("div",{style:re.heroVal,children:r(U)}),t.jsxs("div",{style:re.heroSub,children:["Earned ",r(ne)," · Taken ",r(W),Y>0?` · incl. ${r(Y)} achievement`:""]}),t.jsxs("div",{style:re.heroBtns,children:[t.jsx("button",{onClick:()=>kt("partial"),disabled:U<=0,style:{...re.heroBtnGhost,...U<=0?re.btnDisabled:{}},children:"Take partial"}),t.jsx("button",{onClick:()=>kt("all"),disabled:U<=0,style:{...re.heroBtnSolid,...U<=0?re.btnDisabled:{}},children:"Take all pending"})]})]}),t.jsxs("div",{style:re.statRow,children:[t.jsxs("div",{style:re.statCard,children:[t.jsx("div",{style:re.statVal,children:r(W)}),t.jsx("div",{style:re.statLbl,children:"Total taken"})]}),t.jsxs("div",{style:re.statCard,children:[t.jsx("div",{style:{...re.statVal,color:ao},children:r(U)}),t.jsx("div",{style:re.statLbl,children:"Total pending"})]})]}),t.jsx("div",{style:re.periodRow,children:Ds.map(u=>t.jsx("button",{onClick:()=>V(u.id),style:{...re.periodChip,...G===u.id?re.periodChipOn:{}},children:u.label},u.id))}),Be>0?t.jsxs("div",{style:re.card,children:[t.jsxs("div",{style:re.cardTitleRow,children:[t.jsx("span",{style:re.cardTitle,children:"Reward split"}),t.jsxs("span",{style:re.periodTotal,children:[r(Be)," · ",Ds.find(u=>u.id===G).label]})]}),t.jsxs("div",{style:re.splitTrack,children:[t.jsx("div",{style:{width:`${Ge}%`,background:ao,height:"100%"}}),t.jsx("div",{style:{width:`${Ue}%`,background:ii,height:"100%"}}),t.jsx("div",{style:{width:`${it}%`,background:co,height:"100%"}})]}),t.jsxs("div",{style:re.legendRow,children:[t.jsxs("span",{style:re.legendItem,children:[t.jsx("span",{style:{...re.legendDot,background:ao}})," Focus ",Math.round(Ge),"% · ",r(F)]}),t.jsxs("span",{style:re.legendItem,children:[t.jsx("span",{style:{...re.legendDot,background:ii}})," Usage ",Math.round(Ue),"% · ",r(K)]}),t.jsxs("span",{style:re.legendItem,children:[t.jsx("span",{style:{...re.legendDot,background:co}})," Achievement ",Math.round(it),"% · ",r(Te)]})]})]}):t.jsxs("div",{style:{...re.card,...re.muted},children:["No rewards earned in ",Ds.find(u=>u.id===G).label.toLowerCase(),"."]}),t.jsxs("div",{style:re.card,children:[t.jsxs("button",{onClick:()=>L(u=>!u),style:re.collapseBtn,children:[t.jsxs("span",{style:{...re.cardTitle,color:ao},children:["Focus Rewards · ",r(F)]}),t.jsx("span",{style:re.collapseHint,children:C?"Hide rates":"Set rates"})]}),C&&t.jsx("div",{style:{...re.rateGrid,marginTop:12},children:Bs.map(u=>t.jsxs("div",{style:re.rateRow,children:[t.jsx("span",{style:{...re.dot,background:Nt[u].leaf}}),t.jsx("span",{style:re.rateName,children:Nt[u].label}),t.jsxs("div",{style:re.rateInputWrap,children:[t.jsx("span",{style:re.unitSign,children:e.symbol}),t.jsx("input",{type:"number",min:"0",step:"0.5",inputMode:"decimal",placeholder:"0",value:p[u]!==void 0?p[u]:A("focus",u),onChange:te=>m(Me=>({...Me,[u]:te.target.value})),onBlur:te=>Tt(u,te.target.value),style:re.rateInput}),t.jsx("span",{style:re.unit,children:"/hr"})]})]},u))}),ft.length>0?t.jsx("div",{style:{...re.rows,marginTop:14},children:ft.map(u=>t.jsxs("div",{style:re.row,children:[t.jsx("span",{style:{...re.dot,background:u.leaf}}),t.jsx("span",{style:re.rowName,children:u.label}),t.jsx("span",{style:re.rowMeta,children:gv(Math.round(u.minutes))}),t.jsx("span",{style:re.rowAmt,children:r(u.earned)})]},u.p))}):t.jsx("div",{style:re.muted,children:"No focus sessions yet."})]}),t.jsxs("div",{style:re.card,children:[t.jsxs("button",{onClick:()=>w(u=>!u),style:re.collapseBtn,children:[t.jsxs("span",{style:{...re.cardTitle,color:ii},children:["Usage Rewards · ",r(K)]}),t.jsx("span",{style:re.collapseHint,children:M?"Hide rates":"Set rates"})]}),M&&t.jsx("div",{style:{...re.rateGrid,marginTop:12},children:Ou.map(u=>t.jsxs("div",{style:re.rateRow,children:[t.jsx("span",{style:re.rateName,children:u.label}),t.jsxs("div",{style:re.rateInputWrap,children:[t.jsx("span",{style:re.unitSign,children:e.symbol}),t.jsx("input",{type:"number",min:"0",step:"0.1",inputMode:"decimal",placeholder:"0",value:T[u.id]!==void 0?T[u.id]:A("usage",u.id),onChange:te=>j(Me=>({...Me,[u.id]:te.target.value})),onBlur:te=>It(u.id,te.target.value),style:re.rateInput}),t.jsx("span",{style:re.unit,children:"/min"})]})]},u.id))}),qe.length>0?t.jsx("div",{style:{...re.rows,marginTop:14},children:qe.map(u=>t.jsxs("div",{style:re.row,children:[t.jsx("span",{style:re.rowName,children:u.label}),t.jsx("span",{style:re.rowMeta,children:uv(u.seconds/60)}),t.jsx("span",{style:re.rowAmt,children:r(u.earned)})]},u.id))}):t.jsx("div",{style:re.muted,children:R?"No usage tracked yet.":"Loading…"})]}),t.jsxs("div",{style:re.card,children:[t.jsxs("div",{style:re.cardTitleRow,children:[t.jsxs("span",{style:{...re.cardTitle,color:co},children:["Achievement Rewards · ",r(Te)]}),t.jsx("span",{style:re.collapseHint,children:"Set in Achievements"})]}),O.length>0?t.jsx("div",{style:{...re.rows,marginTop:14},children:O.map(u=>t.jsxs("div",{style:re.row,children:[t.jsx("span",{style:{...re.dot,background:co}}),t.jsx("span",{style:re.rowName,children:u.title}),t.jsx("span",{style:re.rowMeta,children:Gu(u.date)}),t.jsx("span",{style:re.rowAmt,children:r(u.reward)})]},u.id))}):t.jsxs("div",{style:{...re.muted,marginTop:10},children:["No achievement rewards in ",Ds.find(u=>u.id===G).label.toLowerCase(),". Add a reward to a win in the Achievements section."]})]}),ae&&t.jsx("div",{style:re.modalOverlay,onClick:()=>ve(!1),children:t.jsxs("div",{style:re.logModal,onClick:u=>u.stopPropagation(),children:[t.jsxs("div",{style:re.logModalHead,children:[t.jsx("span",{style:re.modalTitle,children:"Reward log"}),t.jsx("button",{onClick:()=>ve(!1),style:re.logClose,title:"Close",children:t.jsx(Re,{size:16})})]}),a.length===0?t.jsx("div",{style:{...re.muted,padding:"24px 0",textAlign:"center"},children:"No rewards taken yet."}):t.jsxs(t.Fragment,{children:[t.jsx("div",{style:re.logScroll,children:a.map(u=>t.jsxs("div",{style:re.row,children:[t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:re.logNote,children:u.note||"Reward taken"}),t.jsx("div",{style:re.rowMeta,children:Gu(u.date)})]}),t.jsx("span",{style:re.rowAmt,children:r(u.amount)}),t.jsx("button",{onClick:()=>wt(u.id),style:re.del,children:"×"})]},u.id))}),t.jsxs("div",{style:re.totalRow,children:[t.jsx("span",{children:"Total taken"}),t.jsx("span",{style:re.totalVal,children:r(W)})]})]})]})}),Be>0&&t.jsxs("div",{style:re.card,children:[t.jsx("div",{style:re.cardTitle,children:"Reward breakdown"}),t.jsxs("div",{style:re.pieWrap,children:[t.jsxs("div",{style:re.pieChart,children:[t.jsx("div",{style:{...re.pieDisc,background:`conic-gradient(${ao} 0 ${Ge}%, ${ii} ${Ge}% ${Ge+Ue}%, ${co} ${Ge+Ue}% 100%)`}}),t.jsxs("div",{style:re.pieHole,children:[t.jsx("span",{style:re.pieHoleVal,children:r(Be)}),t.jsx("span",{style:re.pieHoleLbl,children:"total"})]})]}),t.jsxs("div",{style:re.pieLegend,children:[t.jsxs("div",{style:re.pieLegRow,children:[t.jsx("span",{style:{...re.legendDot,background:ao}}),t.jsx("span",{style:re.pieLegName,children:"Focus"}),t.jsxs("span",{style:re.pieLegPct,children:[Math.round(Ge),"%"]}),t.jsx("span",{style:re.pieLegMin,children:r(F)})]}),t.jsxs("div",{style:re.pieLegRow,children:[t.jsx("span",{style:{...re.legendDot,background:ii}}),t.jsx("span",{style:re.pieLegName,children:"Usage"}),t.jsxs("span",{style:re.pieLegPct,children:[Math.round(Ue),"%"]}),t.jsx("span",{style:re.pieLegMin,children:r(K)})]}),t.jsxs("div",{style:re.pieLegRow,children:[t.jsx("span",{style:{...re.legendDot,background:co}}),t.jsx("span",{style:re.pieLegName,children:"Achievement"}),t.jsxs("span",{style:re.pieLegPct,children:[Math.round(it),"%"]}),t.jsx("span",{style:re.pieLegMin,children:r(Te)})]})]})]})]}),D&&t.jsx("div",{style:re.modalOverlay,onClick:()=>ie(null),children:t.jsxs("div",{style:re.modalCard,onClick:u=>u.stopPropagation(),children:[t.jsx("div",{style:re.modalTitle,children:D==="all"?"Take all pending reward?":"Take partial reward"}),t.jsxs("div",{style:re.modalSub,children:["Pending: ",r(U)]}),t.jsxs("div",{style:re.modalInputWrap,children:[t.jsx("span",{style:re.modalSign,children:e.symbol}),t.jsx("input",{type:"number",min:"0",step:"0.01",autoFocus:!0,placeholder:U.toFixed(2),value:B,onChange:u=>I(u.target.value),style:re.modalAmt})]}),t.jsx("input",{placeholder:"What is this reward for? (required)",value:Z,onChange:u=>be(u.target.value),onKeyDown:u=>u.key==="Enter"&&pt(),style:re.modalReason}),(()=>{const u=parseFloat(B)>0&&!!Z.trim();return t.jsxs("div",{style:re.modalActions,children:[t.jsx("button",{onClick:()=>ie(null),style:re.modalCancel,children:"Cancel"}),t.jsxs("button",{onClick:pt,disabled:!u,style:{...re.modalConfirm,...u?{}:{opacity:.5,cursor:"not-allowed"}},children:["Confirm · ",r(Math.min(parseFloat(B)||0,U))]})]})})()]})}),t.jsx("div",{style:re.note,children:"Set rates only affect time from today onward — past time keeps the rate it was earned at."})]})}const re={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},hero:{position:"relative",background:"linear-gradient(135deg,var(--accent-strong),var(--accent-2))",borderRadius:16,padding:"22px 24px",color:"#fff",marginBottom:14,textAlign:"center"},logIcon:{position:"absolute",top:12,right:12,border:"1px solid rgba(255,255,255,0.5)",background:"rgba(255,255,255,0.12)",color:"#fff",width:32,height:32,borderRadius:9,cursor:"pointer",display:"grid",placeItems:"center"},logClose:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:28,height:28,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},logNote:{fontSize:13.5,fontWeight:600,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:200,display:"grid",placeItems:"center",padding:16},modalCard:{background:"var(--surface)",color:"var(--text)",borderRadius:16,padding:"22px 22px 18px",width:360,maxWidth:"100%",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)"},logModal:{background:"var(--surface)",color:"var(--text)",borderRadius:16,padding:"18px 18px 14px",width:440,maxWidth:"100%",maxHeight:"82vh",display:"flex",flexDirection:"column",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)",boxSizing:"border-box"},logModalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8,flexShrink:0},logScroll:{overflowY:"auto",display:"flex",flexDirection:"column",gap:2,paddingRight:2,minHeight:0},modalTitle:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:4},modalSub:{fontSize:12.5,color:"var(--text-3)",fontWeight:600,marginBottom:14},modalInputWrap:{display:"flex",alignItems:"center",gap:4,border:"1px solid var(--border)",borderRadius:10,padding:"8px 12px",background:"var(--surface-2)",marginBottom:8},modalSign:{fontSize:16,color:"var(--text-2)",fontWeight:700},modalAmt:{border:"none",background:"none",outline:"none",flex:1,fontSize:18,fontWeight:700,fontFamily:"inherit",color:"var(--text)"},modalReason:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"9px 12px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",marginBottom:14},modalActions:{display:"flex",gap:8},modalCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},modalConfirm:{flex:1,border:"none",background:"#C9A227",color:"#fff",padding:"10px 14px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},heroLabel:{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",opacity:.85},heroVal:{fontSize:44,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:2,lineHeight:1.05},heroSub:{fontSize:12.5,opacity:.9,marginTop:6},heroBtns:{display:"flex",gap:10,marginTop:16,justifyContent:"center"},heroBtnSolid:{border:"none",background:"#fff",color:"var(--accent-strong)",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},heroBtnGhost:{border:"1px solid rgba(255,255,255,0.6)",background:"transparent",color:"#fff",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},btnDisabled:{opacity:.45,cursor:"not-allowed"},statRow:{display:"flex",gap:10,marginBottom:14},statCard:{flex:1,background:"var(--surface)",borderRadius:12,padding:"12px 14px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},statVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},statLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},card:{background:"var(--surface)",borderRadius:16,padding:"18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:10,flexWrap:"wrap"},periodTotal:{fontSize:13,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text-2)"},periodRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},periodChip:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},periodChipOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},collapseBtn:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",border:"none",background:"none",cursor:"pointer",padding:0,fontFamily:"inherit"},collapseHint:{fontSize:12,fontWeight:700,color:"var(--accent)"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"12px 0"},splitTrack:{display:"flex",height:16,borderRadius:8,overflow:"hidden",marginTop:12,marginBottom:12,border:"1px solid var(--border)"},legendRow:{display:"flex",gap:16,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:600,color:"var(--text-2)"},legendDot:{width:10,height:10,borderRadius:3,flexShrink:0},pieWrap:{display:"flex",alignItems:"center",gap:20,flexWrap:"wrap",marginTop:6},pieChart:{position:"relative",width:130,height:130,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:78,height:78,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:14,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:10},pieLegRow:{display:"flex",alignItems:"center",gap:8},pieLegName:{flex:1,fontSize:13.5,fontWeight:600},pieLegPct:{fontSize:13,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",width:46,textAlign:"right"},pieLegMin:{fontSize:12,color:"var(--text-3)",fontWeight:600,minWidth:64,textAlign:"right"},rows:{display:"flex",flexDirection:"column",gap:2},row:{display:"flex",alignItems:"center",gap:8,padding:"7px 0",borderBottom:"1px solid var(--border)"},dot:{width:10,height:10,borderRadius:3,flexShrink:0},rowName:{flex:1,fontSize:13.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},rowMeta:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,flexShrink:0},rowAmt:{fontSize:13.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",flexShrink:0,minWidth:64,textAlign:"right"},del:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",fontSize:16,lineHeight:1,padding:"0 2px",flexShrink:0},totalRow:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:10,marginTop:4,fontSize:14,fontWeight:700},totalVal:{fontSize:16,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},rateGrid:{display:"flex",flexDirection:"column",gap:10},rateRow:{display:"flex",alignItems:"center",gap:8},rateName:{flex:1,fontSize:14,fontWeight:600},rateInputWrap:{display:"flex",alignItems:"center",gap:3,border:"1px solid var(--border)",borderRadius:9,padding:"4px 10px",background:"var(--surface-2)"},unitSign:{fontSize:14,color:"var(--text-2)",fontWeight:600},rateInput:{border:"none",background:"none",outline:"none",width:64,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},unit:{fontSize:12,color:"var(--text-3)",fontWeight:600},note:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",fontStyle:"italic",marginTop:4}};function hv(){return t.jsx("div",{style:un.page,children:t.jsxs("div",{style:un.card,children:[t.jsxs("div",{style:un.brand,children:[t.jsx("div",{style:un.logo,children:"B"}),t.jsx("span",{style:un.brandName,children:"Anvil"})]}),t.jsx("h1",{style:un.title,children:"Welcome to Anvil"}),t.jsx("p",{style:un.sub,children:"Sign in with Google to continue."}),t.jsxs("button",{onClick:()=>_.signInWithGoogle(),style:un.googleBtn,children:[t.jsx(fv,{}),"Sign in with Google"]})]})})}function fv(){return t.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[t.jsx("path",{fill:"#4285F4",d:"M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84c-.21 1.13-.85 2.09-1.81 2.73v2.27h2.92c1.71-1.57 2.69-3.88 2.69-6.64z"}),t.jsx("path",{fill:"#34A853",d:"M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.27c-.81.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.71H.96v2.34C2.44 15.98 5.48 18 9 18z"}),t.jsx("path",{fill:"#FBBC05",d:"M3.97 10.7c-.18-.54-.28-1.11-.28-1.7s.1-1.16.28-1.7V4.96H.96A8.997 8.997 0 0 0 0 9c0 1.45.35 2.83.96 4.04l3.01-2.34z"}),t.jsx("path",{fill:"#EA4335",d:"M9 3.58c1.32 0 2.51.45 3.44 1.35l2.59-2.59C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l3.01 2.34C4.68 5.16 6.66 3.58 9 3.58z"})]})}const un={page:{minHeight:"100vh",display:"grid",placeItems:"center",background:"var(--bg)",fontFamily:"'Inter',system-ui,sans-serif",padding:20},card:{width:"100%",maxWidth:380,background:"var(--surface)",borderRadius:16,padding:"32px 28px",boxShadow:"0 4px 24px rgba(0,0,0,0.08)",display:"flex",flexDirection:"column",textAlign:"center"},brand:{display:"flex",alignItems:"center",justifyContent:"center",gap:9,marginBottom:20},logo:{width:32,height:32,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},brandName:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},title:{fontSize:22,fontWeight:700,margin:"0 0 4px",fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},sub:{fontSize:13.5,color:"var(--text-3)",margin:"0 0 24px"},googleBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,border:"1px solid var(--border)",background:"#fff",color:"#26241F",padding:"12px",borderRadius:10,fontSize:14.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},Kd=1,th="anvil_month_start_day";function Xd(){try{return Number(localStorage.getItem(th))||Kd}catch{return Kd}}function Vu(e){const r=Math.min(28,Math.max(1,Number(e)||Kd));try{localStorage.setItem(th,String(r))}catch{}return window.dispatchEvent(new CustomEvent("anvil-month-start",{detail:r})),r}function rh(){const[e,r]=c.useState(Xd());return c.useEffect(()=>{const n=o=>r(o.detail||Xd());return window.addEventListener("anvil-month-start",n),()=>window.removeEventListener("anvil-month-start",n)},[]),e}const Yu=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`;function Kr(e,r,n=0){const o=e.getFullYear(),i=e.getMonth(),l=e.getDate()>=r?i:i-1,d=new Date(o,l+n,r),a=new Date(o,l+n+1,r-1);return[Yu(d),Yu(a)]}const Qu=["Salary","Stocks","Business","Interest","Rent","Gift","Other"],xv=["Bills","EMI","Rent","Food","Shopping","Transport","Health","Entertainment","Education","Other"],Ku=["Stocks","Mutual Fund","SIP","Fixed Deposit","Gold","Real Estate","PPF/EPF","Crypto","Other"],yv={Salary:"#4C9A6B",Stocks:"#3A7CA5",Business:"#C9A227",Interest:"#8268B0",Gift:"#C2773B",Bills:"#C2536B",EMI:"#A23E57",Food:"#E08E45",Shopping:"#8268B0",Transport:"#3A7CA5",Health:"#4C9A6B",Entertainment:"#C9A227",Education:"#5B7C99",Rent:"#5B8C5A",Other:"#9A968C"},lg=e=>yv[e]||"#9A968C",vv={Stocks:"#2F6B4F","Mutual Fund":"#3E9E6B",SIP:"#4FAE7E","Fixed Deposit":"#6BBE92",Gold:"#8ECDA8","Real Estate":"#1F5C3F","PPF/EPF":"#5BAE83",Crypto:"#7FC79E",Other:"#9AD4B3"},jv=e=>vv[e]||"#4C9A6B",Zr="#3E9E6B",ur="#D1556E",qr="#3A7CA5",La="#8268B0",nh=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,po=nh(new Date),kv=[{id:"month",label:"This month"},{id:"last",label:"Last month"},{id:"year",label:"This year"},{id:"all",label:"All time"}];function wv(e,r){const n=new Date;return e==="month"?Kr(n,r):e==="last"?Kr(n,r,-1):e==="year"?[nh(new Date(n.getFullYear(),0,1)),po]:["0000-01-01","9999-12-31"]}function Sv(){const e=Ho(),[r,n]=c.useState("overview"),[o,i]=c.useState([]),[s,l]=c.useState([]),[d,a]=c.useState([]),[g,h]=c.useState([]),[x,f]=c.useState([]),[E,z]=c.useState(!1),k=c.useCallback(()=>Promise.all([_.getTxns(),_.getExpenses(),_.getInvestments()]).then(([C,L,M])=>(i(C),l(L.categories),a(L.logs),h(M),_.getFixedItems())).then(f).then(()=>z(!0)).catch(()=>z(!0)),[]);c.useEffect(()=>{k()},[k]);const R=c.useMemo(()=>{const C={};return s.forEach(L=>C[L.id]=L),C},[s]),b=c.useMemo(()=>d.map(C=>{var L;return{id:`exp-${C.id}`,rawId:C.id,source:"expense",kind:"expense",category:((L=R[C.category_id])==null?void 0:L.name)||"Other",amount:C.amount,note:C.note,date:C.date}}),[d,R]),p=c.useMemo(()=>o.filter(C=>C.kind==="expense").map(C=>({...C,source:"legacy"})),[o]),m=c.useMemo(()=>o.filter(C=>C.kind==="income").map(C=>({...C,source:"legacy"})),[o]),T=c.useMemo(()=>[...m,...p,...b].sort((C,L)=>L.date.localeCompare(C.date)),[m,p,b]),j=C=>Gi(C,e.code);return t.jsxs("div",{style:S.page,children:[t.jsxs("div",{style:S.head,children:[t.jsx("div",{style:S.eyebrow,children:"Anvil · Wallet"}),t.jsx("h1",{style:S.h1,children:"Wallet"}),t.jsx("div",{style:S.subhead,children:"Your money — what comes in, what goes out, and where it's headed."})]}),t.jsx("div",{style:S.tabs,children:[["overview","Overview",Bm],["money","Money",Zl],["calc","Calculators",Jx]].map(([C,L,M])=>t.jsxs("button",{onClick:()=>n(C),style:{...S.tab,...r===C?S.tabOn:{}},children:[t.jsx(M,{size:15})," ",L]},C))}),r==="overview"&&t.jsx(Cv,{txns:T,investments:g,loaded:E,money:j,cur:e}),r==="money"&&t.jsx(Iv,{txns:T,expCats:s,investments:g,fixedItems:x,reload:k,money:j,cur:e}),r==="calc"&&t.jsx(Ev,{money:j,cur:e})]})}function Cv({txns:e,investments:r,loaded:n,money:o,cur:i}){const s=rh(),[l,d]=c.useState("month"),[a,g]=wv(l,s),h=c.useMemo(()=>e.filter(D=>D.date>=a&&D.date<=g),[e,a,g]),x=h.filter(D=>D.kind==="income"),f=h.filter(D=>D.kind==="expense"),E=x.reduce((D,ie)=>D+ie.amount,0),z=f.reduce((D,ie)=>D+ie.amount,0),k=c.useMemo(()=>r.filter(D=>D.date>=a&&D.date<=g),[r,a,g]),R=k.reduce((D,ie)=>D+ie.invested,0),b=z+R,p=E-b,m=r.reduce((D,ie)=>D+ie.invested,0),T=r.reduce((D,ie)=>D+ie.current_value,0),j=T-m,C=D=>{const ie={};return D.forEach(B=>{ie[B.category]=(ie[B.category]||0)+B.amount}),Object.entries(ie).map(([B,I])=>({category:B,amount:I,color:lg(B)})).sort((B,I)=>I.amount-B.amount)},L=C(f),M=c.useMemo(()=>{const D={};return k.forEach(ie=>{D[ie.kind]=(D[ie.kind]||0)+ie.invested}),Object.entries(D).map(([ie,B])=>({category:ie,amount:B,color:jv(ie)})).sort((ie,B)=>B.amount-ie.amount)},[k]),w=[...L,...M];return t.jsxs(t.Fragment,{children:[t.jsx("div",{style:S.presetRow,children:kv.map(D=>t.jsx("button",{onClick:()=>d(D.id),style:{...S.preset,...l===D.id?S.presetOn:{}},children:D.label},D.id))}),t.jsxs("div",{style:S.sumGrid,children:[t.jsx(_a,{icon:t.jsx(Gx,{size:16}),label:"Income",value:o(E),color:Zr}),t.jsx(_a,{icon:t.jsx(Em,{size:16}),label:"Expenses",value:o(b),color:ur}),t.jsx(_a,{icon:p>=0?t.jsx(ql,{size:16}):t.jsx(Xl,{size:16}),label:"Net savings",value:o(p),color:p>=0?Zr:ur})]}),R>0&&t.jsxs("div",{style:S.investNote,children:[t.jsx(zl,{size:13,color:qr})," Includes ",o(R)," invested this period — counted as outgoing and deducted from net savings."]}),r.length>0&&t.jsxs("div",{style:S.card,children:[t.jsxs("div",{style:S.cardTitleRow,children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(zl,{size:18,color:qr}),t.jsxs("div",{children:[t.jsx("div",{style:S.cardTitle,children:"Assets & investments"}),t.jsx("div",{style:S.cardSub,children:"Across all your holdings, all time"})]})]}),t.jsx("div",{style:{...S.cardTotal,color:qr},children:o(T)})]}),t.jsxs("div",{style:S.healthStats,children:[t.jsxs("div",{style:S.healthStat,children:[t.jsx("span",{style:S.healthStatV,children:o(m)}),t.jsx("span",{style:S.healthStatL,children:"Total invested"})]}),t.jsxs("div",{style:S.healthStat,children:[t.jsxs("span",{style:{...S.healthStatV,color:j>=0?Zr:ur},children:[j>=0?"+":"",o(j)]}),t.jsx("span",{style:S.healthStatL,children:"Unrealized gain"})]})]})]}),n?h.length===0&&k.length===0?t.jsx("div",{style:S.card,children:t.jsxs("div",{style:S.muted,children:["No transactions in this period. Add some under the ",t.jsx("b",{children:"Money"})," tab."]})}):t.jsxs(t.Fragment,{children:[t.jsx(Tv,{totalIn:E,totalOut:b}),t.jsxs("div",{style:S.twoCol,children:[t.jsx(Xu,{title:"Incoming",subtitle:"Where your money comes from",total:E,data:C(x),accent:Zr,cur:i}),t.jsx(Xu,{title:"Outgoing",subtitle:"Spending + money set aside in investments",total:b,data:w,accent:ur,cur:i})]})]}):t.jsx("div",{style:S.muted,children:"Loading…"})]})}function _a({icon:e,label:r,value:n,color:o}){return t.jsxs("div",{style:S.sumCard,children:[t.jsx("div",{style:{...S.sumIcon,color:o,background:o+"1A"},children:e}),t.jsx("div",{style:S.sumLabel,children:r}),t.jsx("div",{style:{...S.sumVal,color:o},children:n})]})}function Xu({title:e,subtitle:r,total:n,data:o,accent:i,cur:s}){const[l,d]=c.useState(null);let a=0;const g=o.map(f=>{const E=n>0?a/n*100:0;a+=f.amount;const z=n>0?a/n*100:0;return{...f,start:E,end:z,color:f.color||lg(f.category),pct:n>0?f.amount/n*100:0}}),h=l!=null?g[l]:null,x=g.length===1;return t.jsxs("div",{style:S.card,children:[t.jsxs("div",{style:S.cardTitleRow,children:[t.jsxs("div",{children:[t.jsx("div",{style:{...S.cardTitle,color:i},children:e}),t.jsx("div",{style:S.cardSub,children:r})]}),t.jsx("div",{style:{...S.cardTotal,color:i},children:Gi(n,s.code)})]}),o.length===0?t.jsx("div",{style:S.muted,children:"Nothing logged."}):t.jsxs("div",{style:S.pieWrap,children:[t.jsxs("div",{style:S.pieChart,onMouseLeave:()=>d(null),children:[t.jsx("svg",{viewBox:"0 0 120 120",style:S.pieSvg,children:g.map((f,E)=>t.jsx("path",{d:zv(f.start,f.end,E===l,x),fill:f.color,onMouseEnter:()=>d(E),style:{cursor:"pointer",transition:"transform 0.15s, filter 0.15s",filter:E===l?"brightness(1.08)":"none"}},f.category))}),t.jsx("div",{style:{...S.pieHole,...h?{transform:"translate(-50%,-50%) scale(1.06)",boxShadow:`0 0 0 4px ${h.color}33`}:{}},children:h?t.jsxs(t.Fragment,{children:[t.jsx("span",{style:{...S.pieHoleVal,color:h.color,fontSize:13},children:ju(h.amount,s.code)}),t.jsxs("span",{style:S.pieHoleLbl,children:[Math.round(h.pct),"% · ",h.category]})]}):t.jsxs(t.Fragment,{children:[t.jsx("span",{style:S.pieHoleVal,children:ju(n,s.code)}),t.jsx("span",{style:S.pieHoleLbl,children:"total"})]})})]}),t.jsx("div",{style:S.pieLegend,children:g.map((f,E)=>t.jsxs("div",{style:{...S.legendRow,...E===l?S.legendRowOn:{}},onMouseEnter:()=>d(E),onMouseLeave:()=>d(null),children:[t.jsx("span",{style:{...S.dot,background:f.color}}),t.jsx("span",{style:S.legendName,children:f.category}),t.jsxs("span",{style:S.legendPct,children:[Math.round(f.pct),"%"]}),t.jsx("span",{style:S.legendAmt,children:Gi(f.amount,s.code)})]},f.category))})]})]})}function zv(e,r,n,o){const a=n?6:0,g=(C,L,M=0,w=0)=>{const D=C/100*2*Math.PI-Math.PI/2;return[60+M+L*Math.cos(D),60+w+L*Math.sin(D)]},h=(e+r)/2/100*2*Math.PI-Math.PI/2,x=o?0:Math.cos(h)*a,f=o?0:Math.sin(h)*a;if(r-e>=99.999)return`M ${60+x} ${60+f-58} A 58 58 0 1 1 ${60+x-.01} ${60+f-58} L ${60+x-.01} ${60+f-35} A 35 35 0 1 0 ${60+x} ${60+f-35} Z`;const[E,z]=g(e,58,x,f),[k,R]=g(r,58,x,f),[b,p]=g(r,35,x,f),[m,T]=g(e,35,x,f),j=r-e>50?1:0;return`M ${E} ${z} A 58 58 0 ${j} 1 ${k} ${R} L ${b} ${p} A 35 35 0 ${j} 0 ${m} ${T} Z`}function Tv({totalIn:e,totalOut:r}){const n=e-r,o=e>0?n/e:0,i=e===0?0:Math.max(0,Math.min(100,Math.round(50+o*100)));let s,l,d;e===0?(s="No income logged",l="#9A968C",d="Add your income to see your financial health."):o>=.3?(s="Excellent",l="#3E9E6B",d="You're saving 30%+ of income — keep investing the surplus."):o>=.2?(s="Healthy",l="#4C9A6B",d="Solid savings rate. Consider automating a SIP with the surplus."):o>=.1?(s="Okay",l="#C9A227",d="Decent, but aim for 20%+. Trim your biggest expense category."):o>=0?(s="Tight",l="#C2773B",d="You're saving very little. Review recurring bills and EMIs."):(s="Overspending",l="#D1556E",d="You're spending more than you earn. Cut back to avoid debt.");const a=e>0?Math.min(100,Math.round(r/e*100)):0;return t.jsxs("div",{style:S.card,children:[t.jsxs("div",{style:S.cardTitleRow,children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(hy,{size:18,color:l}),t.jsxs("div",{children:[t.jsx("div",{style:S.cardTitle,children:"Financial health"}),t.jsx("div",{style:S.cardSub,children:"Based on your savings rate this period"})]})]}),t.jsxs("div",{style:{textAlign:"right"},children:[t.jsx("div",{style:{...S.healthScore,color:l},children:e===0?"—":i}),t.jsx("div",{style:{...S.healthStatus,color:l},children:s})]})]}),t.jsx("div",{style:S.gaugeTrack,children:t.jsx("div",{style:{...S.gaugeFill,width:`${e===0?0:i}%`,background:l}})}),t.jsxs("div",{style:S.healthStats,children:[t.jsxs("div",{style:S.healthStat,children:[t.jsxs("span",{style:S.healthStatV,children:[e>0?Math.round(o*100):0,"%"]}),t.jsx("span",{style:S.healthStatL,children:"Savings rate"})]}),t.jsxs("div",{style:S.healthStat,children:[t.jsxs("span",{style:S.healthStatV,children:[a,"%"]}),t.jsx("span",{style:S.healthStatL,children:"of income spent"})]})]}),t.jsx("div",{style:{...S.tip,borderColor:l+"55",background:l+"12",color:l},children:d})]})}function Iv({txns:e,expCats:r,investments:n,fixedItems:o,reload:i,money:s,cur:l}){const[d,a]=c.useState(""),[g,h]=c.useState("Salary"),[x,f]=c.useState(po),[E,z]=c.useState(""),[k,R]=c.useState(null),[b,p]=c.useState(null),[m,T]=c.useState(null),{deleteItem:j,toasts:C,handleUndo:L,handleDismiss:M}=er(_.deleteTxn,_.restoreTxn,i),{deleteItem:w,toasts:D,handleUndo:ie,handleDismiss:B}=er(_.deleteExpenseLog,_.restoreExpenseLog,i),{deleteItem:I,toasts:Z,handleUndo:be,handleDismiss:ae}=er(_.deleteInvestment,_.restoreInvestment,i),ve=()=>{var y;return T({id:null,kind:"expense",name:"",amount:"",category_id:((y=r[0])==null?void 0:y.id)||"",invest_kind:"Stocks",note:""})},G=y=>{var K;return T({id:y.id,kind:y.kind,name:y.name,amount:String(y.amount),category_id:y.category_id||((K=r[0])==null?void 0:K.id)||"",invest_kind:y.invest_kind||"Stocks",note:y.note||""})},V=async()=>{const y=m.name.trim(),K=parseFloat(m.amount)||0;if(!y||K<=0)return;const me={kind:m.kind,name:y,amount:K,note:m.note.trim(),...m.kind==="expense"?{category_id:Number(m.category_id)}:{invest_kind:m.invest_kind}};m.id?await _.updateFixedItem(m.id,me):await _.createFixedItem(me),T(null),i()},oe=async y=>{window.confirm(`Stop "${y.name}" from auto-posting each month? Past entries it already created will stay.`)&&(await _.deleteFixedItem(y.id),i())},Q=async y=>{await _.updateFixedItem(y.id,{active:!y.active}),i()},ue=()=>p({id:null,name:"",kind:"Stocks",invested:"",current_value:"",date:po,note:""}),v=y=>p({id:y.id,name:y.name,kind:y.kind,invested:String(y.invested),current_value:String(y.current_value),date:y.date,note:y.note||""}),A=async()=>{const y=b.name.trim(),K=parseFloat(b.invested)||0,me=parseFloat(b.current_value)||0;if(!y)return;const O={name:y,kind:b.kind,invested:K,current_value:me,note:b.note.trim(),date:b.date};b.id?await _.updateInvestment(b.id,O):await _.createInvestment(O),p(null),i()},P=n.reduce((y,K)=>y+K.invested,0),se=n.reduce((y,K)=>y+K.current_value,0),le=se-P,De=async()=>{const y=parseFloat(d);!y||y<=0||(await _.createTxn({kind:"income",category:g,amount:y,note:E.trim(),date:x}),a(""),z(""),i())},Y=y=>R({id:y.id,rawId:y.rawId,source:y.source,kind:y.kind,amount:String(y.amount),category:y.category,date:y.date,note:y.note||""}),ne=(k==null?void 0:k.source)==="expense"?r.map(y=>y.name):(k==null?void 0:k.kind)==="income"?Qu:xv,W=async()=>{const y=parseFloat(k.amount);if(!(!y||y<=0)){if(k.source==="expense"){const K=r.find(me=>me.name===k.category);await _.updateExpenseLog(k.rawId,{amount:y,note:k.note.trim(),date:k.date,...K?{category_id:K.id}:{}})}else await _.updateTxn(k.id,{kind:k.kind,category:k.category,amount:y,note:k.note.trim(),date:k.date});R(null),i()}},U=y=>{y.source==="expense"?w(y.rawId,y.category):j(y.id,y.category)},ce=c.useMemo(()=>{const y={};return e.forEach(K=>{(y[K.date]=y[K.date]||[]).push(K)}),Object.entries(y).sort((K,me)=>me[0].localeCompare(K[0]))},[e]),F=y=>new Date(y+"T00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"});return t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:S.card,children:[t.jsx("div",{style:S.cardTitle,children:"Add income"}),t.jsxs("div",{style:S.cardSub,children:["Expenses are added from the ",t.jsx("b",{children:"Expenses"})," section and show up here automatically."]}),t.jsxs("div",{style:S.formGrid,children:[t.jsx("input",{type:"number",inputMode:"decimal",placeholder:"Amount",value:d,onChange:y=>a(y.target.value),onKeyDown:y=>y.key==="Enter"&&De(),style:S.input,autoFocus:!0}),t.jsx("select",{value:g,onChange:y=>h(y.target.value),style:S.input,children:Qu.map(y=>t.jsx("option",{children:y},y))}),t.jsx("input",{type:"date",value:x,max:po,onChange:y=>f(y.target.value),style:S.input})]}),t.jsx("input",{placeholder:"Note (optional)",value:E,onChange:y=>z(y.target.value),onKeyDown:y=>y.key==="Enter"&&De(),style:{...S.input,marginTop:8}}),t.jsxs("button",{onClick:De,style:{...S.addBtn,background:Zr},children:[t.jsx(Ze,{size:15})," Add income"]})]}),t.jsxs("div",{style:S.card,children:[t.jsxs("div",{style:S.cardTitleRow,children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(My,{size:18,color:La}),t.jsxs("div",{children:[t.jsx("div",{style:S.cardTitle,children:"Fixed items"}),t.jsx("div",{style:S.cardSub,children:"EMI, rent, SIP… auto-posted at the start of every billing cycle"})]})]}),t.jsxs("button",{onClick:ve,style:{...S.invAddBtn,background:La},children:[t.jsx(Ze,{size:14})," Add"]})]}),o.length===0?t.jsx("div",{style:S.muted,children:"No fixed items yet — add an EMI or rent to auto-post it every cycle."}):t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:o.map(y=>{var me;const K=y.kind==="expense"?((me=r.find(O=>O.id===y.category_id))==null?void 0:me.name)||"Other":y.invest_kind||"Other";return t.jsxs("div",{style:{...S.invRow,opacity:y.active?1:.5},children:[t.jsx("span",{style:{...S.txnDot,background:y.kind==="expense"?ur:qr}}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:S.txnCat,children:y.name}),t.jsxs("div",{style:S.txnNote,children:[y.kind==="expense"?"Fixed expense":"Fixed investment"," · ",K]})]}),t.jsxs("span",{style:{...S.txnAmt,color:y.kind==="expense"?ur:qr},children:[s(y.amount),"/mo"]}),t.jsx("button",{onClick:()=>Q(y),style:S.delBtn,title:y.active?"Pause":"Resume",children:y.active?t.jsx(_m,{size:13}):t.jsx(tg,{size:13})}),t.jsx("button",{onClick:()=>G(y),style:S.delBtn,children:t.jsx(ut,{size:13})}),t.jsx("button",{onClick:()=>oe(y),style:S.delBtn,children:t.jsx(Re,{size:14})})]},y.id)})})]}),t.jsxs("div",{style:S.card,children:[t.jsxs("div",{style:S.cardTitleRow,children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(zl,{size:18,color:qr}),t.jsxs("div",{children:[t.jsx("div",{style:S.cardTitle,children:"Investments"}),t.jsx("div",{style:S.cardSub,children:"Asset generation — what you've put in vs. what it's worth now"})]})]}),t.jsxs("button",{onClick:ue,style:S.invAddBtn,children:[t.jsx(Ze,{size:14})," Add"]})]}),n.length===0?t.jsx("div",{style:S.muted,children:"No investments tracked yet."}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:S.healthStats,children:[t.jsxs("div",{style:S.healthStat,children:[t.jsx("span",{style:S.healthStatV,children:s(P)}),t.jsx("span",{style:S.healthStatL,children:"Invested"})]}),t.jsxs("div",{style:S.healthStat,children:[t.jsx("span",{style:S.healthStatV,children:s(se)}),t.jsx("span",{style:S.healthStatL,children:"Current value"})]}),t.jsxs("div",{style:S.healthStat,children:[t.jsxs("span",{style:{...S.healthStatV,color:le>=0?Zr:ur},children:[le>=0?"+":"",s(le)]}),t.jsx("span",{style:S.healthStatL,children:"Gain / loss"})]})]}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,marginTop:4},children:n.map(y=>{const K=y.current_value-y.invested,me=y.invested>0?K/y.invested*100:0;return t.jsxs("div",{style:S.invRow,children:[t.jsx("span",{style:{...S.txnDot,background:qr}}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:S.txnCat,children:y.name}),t.jsxs("div",{style:S.txnNote,children:[y.kind," · invested ",s(y.invested)]})]}),t.jsxs("div",{style:{textAlign:"right"},children:[t.jsx("div",{style:S.txnAmt,children:s(y.current_value)}),t.jsxs("div",{style:{...S.invPct,color:K>=0?Zr:ur},children:[K>=0?"+":"",Math.round(me),"%"]})]}),t.jsx("button",{onClick:()=>v(y),style:S.delBtn,children:t.jsx(ut,{size:13})}),t.jsx("button",{onClick:()=>I(y.id,y.name),style:S.delBtn,children:t.jsx(Re,{size:14})})]},y.id)})})]})]}),t.jsxs("div",{style:S.card,children:[t.jsx("div",{style:S.cardTitle,children:"History"}),ce.length===0?t.jsx("div",{style:S.muted,children:"No transactions yet."}):t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:ce.map(([y,K])=>t.jsxs("div",{children:[t.jsx("div",{style:S.dateHead,children:F(y)}),K.map(me=>(k==null?void 0:k.id)===me.id?t.jsxs("div",{style:S.editTxn,children:[t.jsxs("div",{style:S.formGrid,children:[t.jsx("input",{type:"number",inputMode:"decimal",value:k.amount,onChange:O=>R({...k,amount:O.target.value}),style:S.input}),t.jsx("select",{value:k.category,onChange:O=>R({...k,category:O.target.value}),style:S.input,children:ne.map(O=>t.jsx("option",{children:O},O))}),t.jsx("input",{type:"date",value:k.date,max:po,onChange:O=>R({...k,date:O.target.value}),style:S.input})]}),t.jsx("input",{placeholder:"Note (optional)",value:k.note,onChange:O=>R({...k,note:O.target.value}),onKeyDown:O=>O.key==="Enter"&&W(),style:{...S.input,marginTop:8}}),t.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[t.jsxs("button",{onClick:()=>R(null),style:S.editCancel,children:[t.jsx(Re,{size:14})," Cancel"]}),t.jsxs("button",{onClick:W,style:{...S.addBtn,marginTop:0,flex:1,background:k.kind==="income"?Zr:ur},children:[t.jsx(He,{size:15})," Save"]})]})]},me.id):t.jsxs("div",{style:S.txnRow,children:[t.jsx("span",{style:{...S.txnDot,background:lg(me.category)}}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:S.txnCat,children:me.category}),me.note&&t.jsx("div",{style:S.txnNote,children:me.note})]}),t.jsxs("span",{style:{...S.txnAmt,color:me.kind==="income"?Zr:ur},children:[me.kind==="income"?"+":"−",s(me.amount)]}),t.jsx("button",{onClick:()=>Y(me),style:S.delBtn,children:t.jsx(ut,{size:13})}),t.jsx("button",{onClick:()=>U(me),style:S.delBtn,children:t.jsx(Re,{size:14})})]},me.id))]},y))})]}),b&&t.jsx("div",{style:S.overlay,onClick:()=>p(null),children:t.jsxs("div",{style:S.modal,onClick:y=>y.stopPropagation(),children:[t.jsxs("div",{style:S.modalHead,children:[t.jsx("span",{style:S.modalTitle,children:b.id?"Edit investment":"New investment"}),t.jsx("button",{onClick:()=>p(null),style:S.iconBtnPlain,children:t.jsx(Re,{size:16})})]}),t.jsx("label",{style:S.label,children:"Name *"}),t.jsx("input",{autoFocus:!0,value:b.name,onChange:y=>p(K=>({...K,name:y.target.value})),placeholder:"e.g. Nifty Index Fund, HDFC FD…",style:S.input}),t.jsx("label",{style:S.label,children:"Type"}),t.jsx("select",{value:b.kind,onChange:y=>p(K=>({...K,kind:y.target.value})),style:S.input,children:Ku.map(y=>t.jsx("option",{children:y},y))}),t.jsxs("div",{style:S.formGrid,children:[t.jsxs("div",{children:[t.jsx("label",{style:S.label,children:"Invested"}),t.jsx("input",{type:"number",inputMode:"decimal",value:b.invested,onChange:y=>p(K=>({...K,invested:y.target.value})),placeholder:"0",style:S.input})]}),t.jsxs("div",{children:[t.jsx("label",{style:S.label,children:"Current value"}),t.jsx("input",{type:"number",inputMode:"decimal",value:b.current_value,onChange:y=>p(K=>({...K,current_value:y.target.value})),placeholder:"0",style:S.input})]}),t.jsxs("div",{children:[t.jsx("label",{style:S.label,children:"Date"}),t.jsx("input",{type:"date",value:b.date,max:po,onChange:y=>p(K=>({...K,date:y.target.value})),style:S.input})]})]}),t.jsx("label",{style:S.label,children:"Note (optional)"}),t.jsx("input",{value:b.note,onChange:y=>p(K=>({...K,note:y.target.value})),placeholder:"Folio no., broker, etc.",style:S.input}),t.jsxs("div",{style:S.modalActions,children:[t.jsx("button",{onClick:()=>p(null),style:S.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:A,disabled:!b.name.trim(),style:{...S.saveBtn,...b.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," ",b.id?"Save":"Add"]})]})]})}),m&&t.jsx("div",{style:S.overlay,onClick:()=>T(null),children:t.jsxs("div",{style:S.modal,onClick:y=>y.stopPropagation(),children:[t.jsxs("div",{style:S.modalHead,children:[t.jsx("span",{style:S.modalTitle,children:m.id?"Edit fixed item":"New fixed item"}),t.jsx("button",{onClick:()=>T(null),style:S.iconBtnPlain,children:t.jsx(Re,{size:16})})]}),t.jsxs("div",{style:S.kindToggle,children:[t.jsxs("button",{onClick:()=>T(y=>({...y,kind:"expense"})),style:{...S.kindBtn,...m.kind==="expense"?{background:ur,color:"#fff",borderColor:ur}:{}},children:[t.jsx(Em,{size:15})," Expense"]}),t.jsxs("button",{onClick:()=>T(y=>({...y,kind:"investment"})),style:{...S.kindBtn,...m.kind==="investment"?{background:qr,color:"#fff",borderColor:qr}:{}},children:[t.jsx(zl,{size:15})," Investment"]})]}),t.jsx("label",{style:S.label,children:"Name *"}),t.jsx("input",{autoFocus:!0,value:m.name,onChange:y=>T(K=>({...K,name:y.target.value})),placeholder:m.kind==="expense"?"e.g. Home loan EMI, Rent…":"e.g. Monthly SIP — Nifty Index",style:S.input}),t.jsxs("div",{style:S.formGrid,children:[t.jsxs("div",{children:[t.jsx("label",{style:S.label,children:"Amount / month"}),t.jsx("input",{type:"number",inputMode:"decimal",value:m.amount,onChange:y=>T(K=>({...K,amount:y.target.value})),placeholder:"0",style:S.input})]}),t.jsxs("div",{children:[t.jsx("label",{style:S.label,children:m.kind==="expense"?"Category":"Type"}),m.kind==="expense"?t.jsx("select",{value:m.category_id,onChange:y=>T(K=>({...K,category_id:y.target.value})),style:S.input,children:r.map(y=>t.jsx("option",{value:y.id,children:y.name},y.id))}):t.jsx("select",{value:m.invest_kind,onChange:y=>T(K=>({...K,invest_kind:y.target.value})),style:S.input,children:Ku.map(y=>t.jsx("option",{children:y},y))})]})]}),t.jsx("label",{style:S.label,children:"Note (optional)"}),t.jsx("input",{value:m.note,onChange:y=>T(K=>({...K,note:y.target.value})),placeholder:"Loan account no., etc.",style:S.input}),t.jsx("p",{style:S.fixedHint,children:"Posts automatically at the start of every billing cycle (set in Settings → Currency). This one posts immediately for the current cycle when you save."}),t.jsxs("div",{style:S.modalActions,children:[t.jsx("button",{onClick:()=>T(null),style:S.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:V,disabled:!m.name.trim()||!(parseFloat(m.amount)>0),style:{...S.saveBtn,background:La,...!m.name.trim()||!(parseFloat(m.amount)>0)?{opacity:.5,cursor:"not-allowed"}:{}},children:[t.jsx(He,{size:15})," ",m.id?"Save":"Add"]})]})]})}),t.jsx(tr,{toasts:C,onUndo:L,onDismiss:M}),t.jsx(tr,{toasts:D,onUndo:ie,onDismiss:B}),t.jsx(tr,{toasts:Z,onUndo:be,onDismiss:ae})]})}function Ev({money:e,cur:r}){return t.jsxs(t.Fragment,{children:[t.jsx(Bv,{money:e,cur:r}),t.jsx(Av,{money:e,cur:r})]})}function Vn({label:e,value:r,set:n,min:o,max:i,step:s,suffix:l}){return t.jsxs("div",{style:S.field,children:[t.jsxs("div",{style:S.fieldTop,children:[t.jsx("span",{style:S.fieldLabel,children:e}),t.jsxs("div",{style:S.fieldInputWrap,children:[t.jsx("input",{type:"number",value:r,onChange:d=>n(d.target.value),style:S.fieldInput}),l&&t.jsx("span",{style:S.fieldSuffix,children:l})]})]}),t.jsx("input",{type:"range",min:o,max:i,step:s,value:r,onChange:d=>n(d.target.value),style:S.range})]})}function Bv({money:e,cur:r}){const[n,o]=c.useState(3e4),[i,s]=c.useState(12),[l,d]=c.useState(15),{invested:a,futureValue:g,gains:h,yearly:x}=c.useMemo(()=>{const E=Math.max(0,parseFloat(n)||0),z=Math.max(0,parseFloat(i)||0),k=Math.max(0,Math.min(60,parseInt(l)||0)),R=z/12/100,b=j=>j<=0?0:R===0?E*j:E*((Math.pow(1+R,j)-1)/R)*(1+R),p=[];for(let j=1;j<=k;j++)p.push({year:j,invested:E*12*j,value:b(j*12)});const m=b(k*12),T=E*12*k;return{invested:T,futureValue:m,gains:m-T,yearly:p}},[n,i,l]),f=Math.max(1,...x.map(E=>E.value));return t.jsxs("div",{style:S.card,children:[t.jsx("div",{style:S.cardTitleRow,children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(Dy,{size:18,color:"#3A7CA5"}),t.jsxs("div",{children:[t.jsx("div",{style:S.cardTitle,children:"SIP projection"}),t.jsx("div",{style:S.cardSub,children:"Mutual fund / SIP future value"})]})]})}),t.jsx(Vn,{label:"Monthly investment",value:n,set:o,min:500,max:5e5,step:500,suffix:r.symbol}),t.jsx(Vn,{label:"Expected return (p.a.)",value:i,set:s,min:1,max:30,step:.5,suffix:"%"}),t.jsx(Vn,{label:"Time period",value:l,set:d,min:1,max:40,step:1,suffix:"yrs"}),t.jsxs("div",{style:S.resultHero,children:[t.jsx("div",{style:S.resultLabel,children:"Projected wealth"}),t.jsx("div",{style:{...S.resultVal,color:"#3A7CA5"},children:e(g)})]}),t.jsxs("div",{style:S.splitRow,children:[t.jsxs("div",{style:S.splitItem,children:[t.jsx("span",{style:S.splitV,children:e(a)}),t.jsx("span",{style:S.splitL,children:"Invested"})]}),t.jsxs("div",{style:S.splitItem,children:[t.jsx("span",{style:{...S.splitV,color:"#3E9E6B"},children:e(h)}),t.jsx("span",{style:S.splitL,children:"Est. returns"})]})]}),x.length>0&&t.jsxs("div",{style:S.chartWrap,children:[t.jsx("div",{style:S.chartBars,children:x.map(E=>t.jsx("div",{style:S.chartCol,title:`Year ${E.year}: ${e(E.value)}`,children:t.jsx("div",{style:{...S.chartStack,height:`${E.value/f*100}%`},children:t.jsx("div",{style:{...S.chartGain,height:`${(1-E.invested/E.value)*100}%`}})})},E.year))}),t.jsxs("div",{style:S.chartAxis,children:[t.jsx("span",{children:"Yr 1"}),t.jsxs("span",{style:{marginLeft:"auto"},children:["Yr ",x.length]})]}),t.jsxs("div",{style:S.legend,children:[t.jsxs("span",{style:S.legendItem,children:[t.jsx("span",{style:{...S.legendDot,background:"#9DBFD6"}})," Invested"]}),t.jsxs("span",{style:S.legendItem,children:[t.jsx("span",{style:{...S.legendDot,background:"#3E9E6B"}})," Returns"]})]})]})]})}function qu(e,r,n,o=0,i=0){let s=Math.max(0,e-i),l=0,d=0,a=i;const g=1200;for(;s>.01&&d<g;){const h=s*r;let x=n+o,f=x-h;if(f<=0)return{months:1/0,totalInterest:1/0,totalPaid:1/0};f>s&&(f=s,x=s+h),s-=f,l+=h,a+=x,d++}return{months:d,totalInterest:l,totalPaid:a}}const Zu=e=>{if(!isFinite(e))return"—";const r=Math.floor(e/12),n=e%12;return(r?`${r}y `:"")+`${n}m`},Dv=e=>{if(!isFinite(e))return"—";const r=new Date;return r.setMonth(r.getMonth()+e),r.toLocaleDateString("en-US",{month:"short",year:"numeric"})};function Av({money:e,cur:r}){const[n,o]=c.useState(2e6),[i,s]=c.useState(9),[l,d]=c.useState(20),[a,g]=c.useState(5e5),[h,x]=c.useState("once"),[f,E]=c.useState("tenure"),z=c.useMemo(()=>{const m=Math.max(0,parseFloat(n)||0),T=Math.max(0,parseFloat(i)||0)/12/100,j=Math.max(1,Math.round((parseFloat(l)||0)*12)),C=T===0?m/j:m*T*Math.pow(1+T,j)/(Math.pow(1+T,j)-1);return{P:m,i:T,n:j,emi:C,totalPay:C*j,totalInterest:C*j-m}},[n,i,l]),k=h==="monthly"?"tenure":f,R=c.useMemo(()=>{const{P:m,i:T,n:j,emi:C,totalInterest:L}=z,M=Math.max(0,parseFloat(a)||0);if(M<=0)return null;let w=C,D=j,ie=L,B=z.totalPay;if(h==="once"&&k==="emi"){const I=Math.max(0,m-M);w=T===0?I/j:I*T*Math.pow(1+T,j)/(Math.pow(1+T,j)-1),D=j,ie=w*j-I,B=M+w*j}else if(h==="once"){const I=qu(m,T,C,0,M);D=I.months,ie=I.totalInterest,B=I.totalPaid}else{const I=qu(m,T,C,M,0);D=I.months,ie=I.totalInterest,B=I.totalPaid}return{newEMI:w,newMonths:D,newInterest:ie,totalPaid:B,interestSaved:Math.max(0,L-ie),monthsSaved:Math.max(0,j-(isFinite(D)?D:j))}},[z,a,h,k]),b=z.totalPay>0?z.P/z.totalPay*100:0,p=h==="once"?Math.max(1e5,Math.round(z.P)):Math.max(5e4,Math.round(z.emi*3));return t.jsxs("div",{style:S.card,children:[t.jsx("div",{style:S.cardTitleRow,children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(vy,{size:18,color:"#C2536B"}),t.jsxs("div",{children:[t.jsx("div",{style:S.cardTitle,children:"EMI calculator"}),t.jsx("div",{style:S.cardSub,children:"Loan / mortgage monthly payment"})]})]})}),t.jsx(Vn,{label:"Loan amount",value:n,set:o,min:5e4,max:5e7,step:5e4,suffix:r.symbol}),t.jsx(Vn,{label:"Interest rate (p.a.)",value:i,set:s,min:1,max:24,step:.1,suffix:"%"}),t.jsx(Vn,{label:"Tenure",value:l,set:d,min:1,max:30,step:1,suffix:"yrs"}),t.jsxs("div",{style:S.resultHero,children:[t.jsx("div",{style:S.resultLabel,children:"Monthly EMI"}),t.jsx("div",{style:{...S.resultVal,color:"#C2536B"},children:e(z.emi)})]}),t.jsxs("div",{style:S.emiSplitTrack,children:[t.jsx("div",{style:{width:`${b}%`,background:"#5B7C99",height:"100%"}}),t.jsx("div",{style:{width:`${100-b}%`,background:"#C2536B",height:"100%"}})]}),t.jsxs("div",{style:S.splitRow,children:[t.jsxs("div",{style:S.splitItem,children:[t.jsx("span",{style:{...S.splitV,color:"#5B7C99"},children:e(z.P)}),t.jsx("span",{style:S.splitL,children:"Principal"})]}),t.jsxs("div",{style:S.splitItem,children:[t.jsx("span",{style:{...S.splitV,color:"#C2536B"},children:e(z.totalInterest)}),t.jsx("span",{style:S.splitL,children:"Total interest"})]}),t.jsxs("div",{style:S.splitItem,children:[t.jsx("span",{style:S.splitV,children:e(z.totalPay)}),t.jsx("span",{style:S.splitL,children:"Total payable"})]})]}),t.jsx("div",{style:S.subDivider}),t.jsx("div",{style:S.subTitle,children:"Prepayment planner"}),t.jsx("div",{style:S.cardSub,children:"See what an extra payment does to your loan."}),t.jsx("div",{style:{marginTop:14},children:t.jsx(Vn,{label:"Prepayment amount",value:a,set:g,min:0,max:p,step:h==="once"?25e3:1e3,suffix:r.symbol})}),t.jsxs("div",{style:S.segGroup,children:[t.jsx("span",{style:S.segLbl,children:"Type"}),t.jsxs("div",{style:S.segRow,children:[t.jsx(As,{label:"One-time",on:h==="once",onClick:()=>x("once")}),t.jsx(As,{label:"Every month",on:h==="monthly",onClick:()=>x("monthly")})]})]}),t.jsxs("div",{style:S.segGroup,children:[t.jsx("span",{style:S.segLbl,children:"Strategy"}),t.jsxs("div",{style:S.segRow,children:[t.jsx(As,{label:"Reduce tenure",on:k==="tenure",onClick:()=>E("tenure")}),t.jsx(As,{label:"Reduce EMI",on:k==="emi",disabled:h==="monthly",onClick:()=>E("emi")})]})]}),h==="monthly"&&t.jsx("div",{style:S.note,children:"An extra monthly payment always shortens the tenure. Switch to a one-time prepayment to reduce your EMI instead."}),R?t.jsxs("div",{style:S.cmpCard,children:[t.jsxs("div",{style:S.cmpRow,children:[t.jsx("span",{style:S.cmpLbl,children:"New EMI"}),t.jsxs("span",{style:S.cmpVal,children:[e(R.newEMI),R.newEMI<z.emi-1&&t.jsxs("span",{style:S.cmpWas,children:[" was ",e(z.emi)]})]})]}),t.jsxs("div",{style:S.cmpRow,children:[t.jsx("span",{style:S.cmpLbl,children:"New tenure"}),t.jsxs("span",{style:S.cmpVal,children:[Zu(R.newMonths)," ",t.jsxs("span",{style:S.cmpWas,children:["· paid off ",Dv(R.newMonths)]})]})]}),t.jsxs("div",{style:S.cmpRow,children:[t.jsx("span",{style:S.cmpLbl,children:"Total interest"}),t.jsx("span",{style:S.cmpVal,children:e(R.newInterest)})]}),t.jsxs("div",{style:S.cmpRow,children:[t.jsx("span",{style:S.cmpLbl,children:"Total payable"}),t.jsx("span",{style:S.cmpVal,children:e(R.totalPaid)})]}),t.jsxs("div",{style:S.saveRow,children:["You save ",e(R.interestSaved)," in interest",R.monthsSaved>0?` · ${Zu(R.monthsSaved)} sooner`:""]})]}):t.jsx("div",{style:S.muted,children:"Enter a prepayment amount to see the impact."})]})}function As({label:e,on:r,onClick:n,disabled:o}){return t.jsx("button",{onClick:o?void 0:n,disabled:o,style:{...S.seg,...r?S.segOn:{},...o?S.segDisabled:{}},children:e})}const S={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},tabs:{display:"flex",gap:7,marginBottom:18,flexWrap:"wrap"},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:10,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},presetRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},preset:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:18,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},presetOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},sumGrid:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:16},sumCard:{background:"var(--surface)",borderRadius:14,padding:"14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},sumIcon:{width:30,height:30,borderRadius:9,display:"grid",placeItems:"center",marginBottom:8},sumLabel:{fontSize:11.5,color:"var(--text-3)",fontWeight:600},sumVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:2,letterSpacing:"-0.01em",wordBreak:"break-word"},card:{background:"var(--surface)",borderRadius:16,padding:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)",marginBottom:16},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14,gap:10},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardSub:{fontSize:11.5,color:"var(--text-3)",marginTop:2},cardTotal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"14px 0"},twoCol:{display:"grid",gridTemplateColumns:"1fr",gap:0},dot:{width:10,height:10,borderRadius:3,flexShrink:0},pieWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap"},pieChart:{position:"relative",width:132,height:132,flexShrink:0,margin:"0 auto"},pieSvg:{position:"absolute",inset:0,width:"100%",height:"100%",overflow:"visible"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:80,height:80,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",transition:"transform 0.15s, box-shadow 0.15s",pointerEvents:"none",textAlign:"center",padding:4,boxSizing:"border-box"},pieHoleVal:{fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:160,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8,borderRadius:8,padding:"3px 5px",margin:"-3px -5px",cursor:"default",transition:"background 0.15s"},legendRowOn:{background:"var(--surface-2)"},legendName:{flex:1,fontSize:12.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},legendPct:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,width:34,textAlign:"right"},legendAmt:{fontSize:12.5,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:64,textAlign:"right"},investNote:{display:"flex",alignItems:"center",gap:6,fontSize:11.5,color:"var(--text-3)",marginBottom:14,marginTop:-4},healthScore:{fontSize:32,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1},healthStatus:{fontSize:12.5,fontWeight:700,marginTop:2},gaugeTrack:{height:10,background:"var(--surface-2)",borderRadius:6,overflow:"hidden",marginBottom:14},gaugeFill:{height:"100%",borderRadius:6,transition:"width 0.4s"},healthStats:{display:"flex",gap:24,marginBottom:12},healthStat:{display:"flex",flexDirection:"column"},healthStatV:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},healthStatL:{fontSize:11,color:"var(--text-3)",fontWeight:600},tip:{fontSize:12.5,lineHeight:1.5,padding:"10px 12px",borderRadius:10,border:"1px solid",fontWeight:500},kindToggle:{display:"flex",gap:8,marginBottom:12},kindBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},formGrid:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8},input:{border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},addBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",marginTop:10,border:"none",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},invAddBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"7px 13px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",flexShrink:0},invRow:{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid var(--border)"},invPct:{fontSize:11,fontWeight:700,marginTop:1},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtnPlain:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},fixedHint:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.5,marginTop:10,marginBottom:0},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},dateHead:{fontSize:11,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8},txnRow:{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid var(--border)"},txnDot:{width:9,height:9,borderRadius:"50%",flexShrink:0},txnCat:{fontSize:13.5,fontWeight:600},txnNote:{fontSize:11.5,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},txnAmt:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},delBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",flexShrink:0},editTxn:{background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:12,padding:12,margin:"6px 0"},editCancel:{display:"flex",alignItems:"center",justifyContent:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},field:{marginBottom:16},fieldTop:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},fieldLabel:{fontSize:13,fontWeight:600,color:"var(--text-2)"},fieldInputWrap:{display:"flex",alignItems:"center",gap:4,border:"1px solid var(--border)",borderRadius:8,padding:"5px 10px",background:"var(--surface-2)"},fieldInput:{border:"none",background:"none",outline:"none",width:90,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},fieldSuffix:{fontSize:12,color:"var(--text-3)",fontWeight:600},range:{width:"100%",accentColor:"var(--accent)",cursor:"pointer"},resultHero:{textAlign:"center",padding:"14px 0 6px"},resultLabel:{fontSize:12,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em"},resultVal:{fontSize:34,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:2,wordBreak:"break-word"},splitRow:{display:"flex",gap:10,marginTop:10},splitItem:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",background:"var(--surface-2)",borderRadius:10,padding:"10px 6px"},splitV:{fontSize:14.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",wordBreak:"break-word"},splitL:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginTop:2},chartWrap:{marginTop:18},chartBars:{display:"flex",alignItems:"flex-end",gap:3,height:90},chartCol:{flex:1,height:"100%",display:"flex",alignItems:"flex-end"},chartStack:{width:"100%",background:"#9DBFD6",borderRadius:"3px 3px 0 0",minHeight:2,position:"relative",display:"flex",flexDirection:"column",justifyContent:"flex-start"},chartGain:{width:"100%",background:"#3E9E6B",borderRadius:"3px 3px 0 0"},chartAxis:{display:"flex",fontSize:10,color:"var(--text-3)",fontWeight:600,marginTop:6},legend:{display:"flex",gap:16,justifyContent:"center",marginTop:10},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)",fontWeight:600},legendDot:{width:10,height:10,borderRadius:3},emiSplitTrack:{display:"flex",height:12,borderRadius:6,overflow:"hidden",marginTop:16,border:"1px solid var(--border)"},subDivider:{height:1,background:"var(--border)",margin:"20px 0 14px"},subTitle:{fontSize:15,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},segGroup:{marginBottom:12},segLbl:{fontSize:12,fontWeight:600,color:"var(--text-3)",display:"block",marginBottom:6},segRow:{display:"flex",gap:8},seg:{flex:1,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},segOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},segDisabled:{opacity:.4,cursor:"not-allowed"},note:{fontSize:12,lineHeight:1.5,color:"var(--text-3)",background:"var(--surface-2)",borderRadius:9,padding:"9px 11px",marginBottom:12},cmpCard:{background:"var(--surface-2)",borderRadius:12,padding:"12px 14px",marginTop:4},cmpRow:{display:"flex",justifyContent:"space-between",alignItems:"baseline",padding:"6px 0",borderBottom:"1px solid var(--border)",gap:10},cmpLbl:{fontSize:12.5,color:"var(--text-2)",fontWeight:600},cmpVal:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",textAlign:"right"},cmpWas:{fontSize:11,color:"var(--text-3)",fontWeight:500,fontFamily:"'Inter',system-ui,sans-serif"},saveRow:{marginTop:12,background:"rgba(62,158,107,0.12)",color:"#3E9E6B",borderRadius:9,padding:"10px 12px",fontSize:13,fontWeight:700,textAlign:"center"}},qd=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],$a={Monday:"Mon",Tuesday:"Tue",Wednesday:"Wed",Thursday:"Thu",Friday:"Fri",Saturday:"Sat",Sunday:"Sun"},ui=()=>qd[(new Date().getDay()+6)%7],Ur={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"},Ju=Object.keys(Ur),Pa=21,ep="kickstart_tags",Na=e=>{if(!e)return"";const r=e.trim();if(/^[A-Za-z0-9_-]{11}$/.test(r))return r;const n=r.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return n?n[1]:""},tp=e=>{if(!e||!String(e).trim())return null;const r=String(e).split(":").map(n=>parseInt(n.trim(),10));return r.some(n=>isNaN(n)||n<0)?null:r.reduce((n,o)=>n*60+o,0)},Rs=e=>{if(e==null)return"";const r=Math.max(0,e|0);return`${Math.floor(r/60)}:${String(r%60).padStart(2,"0")}`},Rv=e=>`https://www.youtube.com/embed/${e.youtube_id}?start=${e.start_sec||0}`+(e.end_sec?`&end=${e.end_sec}`:"")+"&autoplay=1&rel=0",Fv=()=>({id:null,url:"",title:"",start:"",end:"",days:[ui()],pillars:[],customs:[]});function Mv(){const[e,r]=c.useState([]),[n,o]=c.useState([]),[i,s]=c.useState(!1),[l,d]=c.useState({type:"day",value:ui()}),[a,g]=c.useState(null),[h,x]=c.useState(null),[f,E]=c.useState(""),z=c.useCallback(async()=>{try{const[I,Z]=await Promise.all([_.getKickstart(),_.getSetting(ep)]);r(I),o(Array.isArray(Z==null?void 0:Z.value)?Z.value:[])}catch{}s(!0)},[]);c.useEffect(()=>{z()},[z]);const{deleteItem:k,toasts:R,handleUndo:b,handleDismiss:p}=er(_.deleteKickstart,_.restoreKickstart,z);c.useEffect(()=>{if(!h)return;const I=e.find(G=>G.id===h);if(!I)return;const Z=I.end_sec?Math.max(1,I.end_sec-(I.start_sec||0)):1/0;let be=0;const ae=10,ve=setInterval(()=>{if(document.hidden)return;const G=Z-be;if(G<=0){clearInterval(ve);return}const V=Math.min(ae,G);be+=V,_.addScreenTime("kickstart",Math.round(V)).catch(()=>{})},ae*1e3);return()=>clearInterval(ve)},[h,e]);const m=I=>{o(I),_.setSetting(ep,I).catch(()=>{})},T=()=>{const I=f.trim();!I||n.length>=Pa||n.includes(I)||(m([...n,I]),g(Z=>Z&&!Z.customs.includes(I)?{...Z,customs:[...Z.customs,I]}:Z),E(""))},j=I=>m(n.filter(Z=>Z!==I)),C=(I,Z)=>g(be=>({...be,[I]:be[I].includes(Z)?be[I].filter(ae=>ae!==Z):[...be[I],Z]})),L=I=>g({id:I.id,url:`https://youtu.be/${I.youtube_id}`,title:I.title,start:Rs(I.start_sec),end:I.end_sec?Rs(I.end_sec):"",days:[...I.days],pillars:[...I.pillars],customs:[...I.customs]}),M=async()=>{const I=Na(a.url);if(!I||a.days.length===0||!a.title.trim())return;const Z={youtube_id:I,title:a.title.trim(),start_sec:tp(a.start)||0,end_sec:tp(a.end),days:a.days,pillars:a.pillars,customs:a.customs};a.id?await _.updateKickstart(a.id,Z):await _.createKickstart(Z),g(null),z()},w=c.useMemo(()=>e.filter(I=>l.type==="all"?!0:l.type==="day"?I.days.includes(l.value):l.type==="pillar"?I.pillars.includes(l.value):l.type==="custom"?I.customs.includes(l.value):!0),[e,l]),D=(I,Z)=>l.type===I&&l.value===Z,ie=a?[!Na(a.url)&&"a valid YouTube link",!a.title.trim()&&"a title",a.days.length===0&&"at least one day"].filter(Boolean):[],B=!!a&&ie.length===0;return t.jsxs("div",{style:we.page,children:[t.jsxs("div",{style:we.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:we.eyebrow,children:"Anvil · Kickstart"}),t.jsx("h1",{style:we.h1,children:"Kickstart"}),t.jsxs("div",{style:we.subhead,children:["Your motivation hub — the right push for ",ui(),"."]})]}),!a&&t.jsxs("button",{onClick:()=>g(Fv()),style:we.addBtn,children:[t.jsx(Ze,{size:15})," Add video"]})]}),a&&t.jsxs("div",{style:we.card,children:[t.jsx("div",{style:we.cardTitle,children:a.id?"Edit video":"Add video"}),t.jsx("input",{placeholder:"YouTube link (or video ID)",value:a.url,onChange:I=>g({...a,url:I.target.value}),style:we.input,autoFocus:!0}),a.url&&!Na(a.url)&&t.jsx("div",{style:we.warn,children:"Couldn't find a YouTube video ID in that link."}),t.jsx("input",{placeholder:"Title (required)",value:a.title,onChange:I=>g({...a,title:I.target.value}),style:{...we.input,marginTop:8}}),t.jsxs("div",{style:we.trimRow,children:[t.jsx(Nm,{size:15,color:"var(--text-3)"}),t.jsxs("label",{style:we.trimField,children:[t.jsx("span",{style:we.trimLbl,children:"Start"}),t.jsx("input",{placeholder:"0:30",value:a.start,onChange:I=>g({...a,start:I.target.value}),style:we.trimInput})]}),t.jsx("span",{style:we.trimArrow,children:"→"}),t.jsxs("label",{style:we.trimField,children:[t.jsx("span",{style:we.trimLbl,children:"End"}),t.jsx("input",{placeholder:"end (optional)",value:a.end,onChange:I=>g({...a,end:I.target.value}),style:we.trimInput})]})]}),t.jsx("div",{style:we.hint,children:"Only this trimmed part plays. Use m:ss (e.g. 1:30). Leave End blank to play to the end."}),t.jsxs("div",{style:we.tagBlock,children:[t.jsxs("div",{style:we.tagLabel,children:["Days ",t.jsx("span",{style:we.req,children:"required"})]}),t.jsx("div",{style:we.chipRow,children:qd.map(I=>t.jsx("button",{onClick:()=>C("days",I),style:{...we.chip,...a.days.includes(I)?we.chipOnDark:{}},children:$a[I]},I))})]}),t.jsxs("div",{style:we.tagBlock,children:[t.jsxs("div",{style:we.tagLabel,children:["Pillars ",t.jsx("span",{style:we.opt,children:"optional"})]}),t.jsx("div",{style:we.chipRow,children:Ju.map(I=>{const Z=a.pillars.includes(I);return t.jsxs("button",{onClick:()=>C("pillars",I),style:{...we.chip,...Z?{background:Ur[I],color:"#fff",borderColor:Ur[I]}:{}},children:[t.jsx("span",{style:{...we.dot,background:Z?"#fff":Ur[I]}}),I]},I)})})]}),t.jsxs("div",{style:we.tagBlock,children:[t.jsxs("div",{style:we.tagLabel,children:["Custom tags ",t.jsxs("span",{style:we.opt,children:["optional · ",n.length,"/",Pa]})]}),t.jsxs("div",{style:we.chipRow,children:[n.map(I=>t.jsxs("span",{style:{...we.chip,...a.customs.includes(I)?we.chipOnAccent:{},paddingRight:4},children:[t.jsx("button",{onClick:()=>C("customs",I),style:we.chipInner,children:I}),t.jsx("button",{onClick:()=>j(I),style:we.chipX,title:"Delete tag",children:t.jsx(Re,{size:11})})]},I)),n.length===0&&t.jsx("span",{style:we.muted,children:"No custom tags yet."})]}),n.length<Pa&&t.jsxs("div",{style:we.newTagRow,children:[t.jsx("input",{placeholder:"New custom tag…",value:f,onChange:I=>E(I.target.value),onKeyDown:I=>I.key==="Enter"&&T(),style:{...we.input,padding:"7px 10px"}}),t.jsx("button",{onClick:T,style:we.smallBtn,children:t.jsx(Ze,{size:14})})]})]}),!B&&t.jsxs("div",{style:we.warn,children:["Add ",ie.join(", ")," to save."]}),t.jsxs("div",{style:we.formActions,children:[t.jsxs("button",{onClick:()=>g(null),style:we.cancelBtn,children:[t.jsx(Re,{size:14})," Cancel"]}),t.jsxs("button",{onClick:M,disabled:!B,style:{...we.saveBtn,...B?{}:we.saveDisabled},children:[t.jsx(He,{size:15})," ",a.id?"Save":"Add video"]})]})]}),t.jsxs("div",{style:we.filterCard,children:[t.jsx("button",{onClick:()=>d({type:"all"}),style:{...we.fChip,...l.type==="all"?we.fChipOnDark:{}},children:"All"}),t.jsx("span",{style:we.fDivider}),qd.map(I=>t.jsxs("button",{onClick:()=>d({type:"day",value:I}),style:{...we.fChip,...D("day",I)?we.fChipOnDark:{},...I===ui()?we.fToday:{}},children:[$a[I],I===ui()?" ·":""]},I)),t.jsx("span",{style:we.fDivider}),Ju.map(I=>t.jsxs("button",{onClick:()=>d({type:"pillar",value:I}),style:{...we.fChip,...D("pillar",I)?{background:Ur[I],color:"#fff",borderColor:Ur[I]}:{}},children:[t.jsx("span",{style:{...we.dot,background:D("pillar",I)?"#fff":Ur[I]}}),I]},I)),n.length>0&&t.jsx("span",{style:we.fDivider}),n.map(I=>t.jsxs("button",{onClick:()=>d({type:"custom",value:I}),style:{...we.fChip,...D("custom",I)?we.fChipOnAccent:{}},children:[t.jsx(Nd,{size:11})," ",I]},I))]}),i?w.length===0?t.jsx("div",{style:we.empty,children:e.length===0?"No videos yet — add your first motivation clip.":"No videos for this tag."}):t.jsx("div",{style:we.grid,children:w.map(I=>t.jsxs("div",{style:we.videoCard,children:[t.jsx("div",{style:we.thumbWrap,children:h===I.id?t.jsx("iframe",{src:Rv(I),title:I.title||I.youtube_id,style:we.iframe,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):t.jsxs("button",{onClick:()=>x(I.id),style:we.thumbBtn,children:[t.jsx("img",{src:`https://img.youtube.com/vi/${I.youtube_id}/hqdefault.jpg`,alt:"",style:we.thumb}),t.jsx("span",{style:we.playOverlay,children:t.jsx(tg,{size:22,color:"#fff",fill:"#fff"})}),t.jsxs("span",{style:we.trimBadge,children:[Rs(I.start_sec),I.end_sec?` – ${Rs(I.end_sec)}`:"+"]})]})}),t.jsxs("div",{style:we.videoBody,children:[t.jsx("div",{style:we.videoTitle,children:I.title||"Untitled clip"}),t.jsxs("div",{style:we.tagWrap,children:[I.days.map(Z=>t.jsx("span",{style:we.dayTag,children:$a[Z]},Z)),I.pillars.map(Z=>t.jsx("span",{style:{...we.pillTag,color:Ur[Z]||"var(--text-2)",borderColor:Ur[Z]||"var(--border)"},children:Z},Z)),I.customs.map(Z=>t.jsx("span",{style:we.customTag,children:Z},Z))]}),t.jsxs("div",{style:we.cardActions,children:[t.jsx("button",{onClick:()=>L(I),style:we.iconBtn,title:"Edit",children:t.jsx(ut,{size:13})}),t.jsx("button",{onClick:()=>k(I.id,I.title||"video"),style:we.iconBtn,title:"Delete",children:t.jsx(Re,{size:14})})]})]})]},I.id))}):t.jsx("div",{style:we.muted,children:"Loading…"}),t.jsx(tr,{toasts:R,onUndo:b,onDismiss:p})]})}const we={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:1e3,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},input:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},warn:{fontSize:11.5,color:"#C2773B",marginTop:5,fontWeight:600},hint:{fontSize:11.5,color:"var(--text-3)",marginTop:6,lineHeight:1.4},trimRow:{display:"flex",alignItems:"flex-end",gap:10,marginTop:10},trimField:{display:"flex",flexDirection:"column",gap:4,flex:1},trimLbl:{fontSize:11,color:"var(--text-2)",fontWeight:600},trimInput:{border:"1px solid var(--border)",borderRadius:8,padding:"8px 10px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},trimArrow:{color:"var(--text-3)",paddingBottom:9},tagBlock:{marginTop:14},tagLabel:{fontSize:12,fontWeight:700,color:"var(--text-2)",marginBottom:7},req:{fontSize:10,fontWeight:700,color:"#C2536B",textTransform:"uppercase",marginLeft:6},opt:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",marginLeft:6},chipRow:{display:"flex",gap:6,flexWrap:"wrap"},chip:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},chipOnDark:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},chipOnAccent:{background:"var(--accent)",color:"#fff",borderColor:"var(--accent)"},chipInner:{border:"none",background:"none",color:"inherit",cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:600,padding:0},chipX:{border:"none",background:"rgba(0,0,0,0.12)",color:"inherit",cursor:"pointer",display:"grid",placeItems:"center",borderRadius:"50%",width:16,height:16,padding:0},newTagRow:{display:"flex",gap:6,marginTop:8,maxWidth:280},smallBtn:{border:"none",background:"var(--accent)",color:"#fff",width:34,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},dot:{width:8,height:8,borderRadius:"50%",flexShrink:0,display:"inline-block"},formActions:{display:"flex",gap:8,marginTop:16},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:"var(--accent)",color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"},filterCard:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:12,marginBottom:18},fChip:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},fChipOnDark:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},fChipOnAccent:{background:"var(--accent)",color:"#fff",borderColor:"var(--accent)"},fToday:{borderColor:"var(--accent)",borderWidth:2},fDivider:{width:1,alignSelf:"stretch",background:"var(--border)",margin:"0 2px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:14},videoCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},thumbWrap:{position:"relative",width:"100%",aspectRatio:"16 / 9",background:"#000"},thumbBtn:{border:"none",padding:0,margin:0,cursor:"pointer",width:"100%",height:"100%",position:"relative",display:"block",background:"#000"},thumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},playOverlay:{position:"absolute",inset:0,display:"grid",placeItems:"center",background:"rgba(0,0,0,0.28)"},trimBadge:{position:"absolute",bottom:8,right:8,background:"rgba(0,0,0,0.75)",color:"#fff",fontSize:11,fontWeight:700,padding:"2px 7px",borderRadius:6,fontFamily:"'Fraunces',Georgia,serif"},iframe:{width:"100%",height:"100%",border:"none",display:"block"},videoBody:{padding:"12px 13px",display:"flex",flexDirection:"column",gap:8},videoTitle:{fontSize:14,fontWeight:700},tagWrap:{display:"flex",gap:5,flexWrap:"wrap"},dayTag:{fontSize:10,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",padding:"2px 7px",borderRadius:8},pillTag:{fontSize:10,fontWeight:700,border:"1px solid",borderRadius:8,padding:"2px 7px"},customTag:{fontSize:10,fontWeight:700,color:"var(--accent)",background:"color-mix(in srgb, var(--accent) 14%, transparent)",padding:"2px 7px",borderRadius:8},cardActions:{display:"flex",gap:4,justifyContent:"flex-end"},iconBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"}},oh=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,rp=()=>oh(new Date),np=(e,r)=>{const n=new Date(e+"T00:00:00");return n.setDate(n.getDate()+r),oh(n)},op=e=>new Date(e+"T00:00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",year:"numeric"}),Wv=e=>{if(!e)return"";const r=e.trim();if(/^[A-Za-z0-9_-]{11}$/.test(r))return r;const n=r.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return n?n[1]:""},Lv=e=>new Promise((r,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:l,height:d}=i;l>d&&l>900?(d=d*900/l,l=900):d>900&&(l=l*900/d,d=900);const a=document.createElement("canvas");a.width=l,a.height=d,a.getContext("2d").drawImage(i,0,0,l,d),r(a.toDataURL("image/jpeg",.82))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(e)});function _v(){const[e,r]=c.useState([]),[n,o]=c.useState(!1),[i,s]=c.useState(null),[l,d]=c.useState(!1),[a,g]=c.useState({title:"",image:""}),[h,x]=c.useState(""),[f,E]=c.useState(!0),[z,k]=c.useState(null),R=c.useCallback(async()=>{try{r(await _.getGoldenGoals())}catch{}o(!0)},[]);c.useEffect(()=>{R()},[R]);const{deleteItem:b,toasts:p,handleUndo:m,handleDismiss:T}=er(_.deleteGolden,_.restoreGolden,R);c.useEffect(()=>{_.getSetting("golden_music").then(w=>x(Wv((w==null?void 0:w.value)||""))).catch(()=>{})},[]);const j=async()=>{if(!a.title.trim())return;const w=await _.createGolden({title:a.title.trim(),image:a.image});g({title:"",image:""}),d(!1),await R(),s(w.id)},C=async(w,D)=>{var B;const ie=(B=w.target.files)==null?void 0:B[0];if(ie)try{D(await Lv(ie))}catch{}},L=e.filter(w=>!w.achieved),M=e.filter(w=>w.achieved);return i?t.jsxs("div",{style:q.page,children:[t.jsx(Gv,{musicId:h,on:f}),t.jsx(Ov,{goalId:i,onBack:()=>s(null),onReload:R,onCelebrate:(w,D)=>k({title:w,days:D}),pickImage:C,musicId:h,musicOn:f,setMusicOn:E}),z&&t.jsx(Hv,{data:z,onClose:()=>k(null)})]}):t.jsxs("div",{style:q.page,children:[t.jsxs("div",{style:q.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:q.eyebrow,children:"Anvil · Golden Book"}),t.jsx("h1",{style:q.h1,children:"Golden Book"}),t.jsx("div",{style:q.subhead,children:"Write your dreams into being — a little every day."})]}),!l&&t.jsxs("button",{onClick:()=>d(!0),style:q.addBtn,children:[t.jsx(Ze,{size:15})," New dream"]})]}),l&&t.jsxs("div",{style:q.card,children:[t.jsx("div",{style:q.cardTitle,children:"Manifest a new dream"}),t.jsx("textarea",{autoFocus:!0,placeholder:"Write your dream as if it's already true…",value:a.title,onChange:w=>g({...a,title:w.target.value}),style:q.textarea}),t.jsxs("label",{style:q.photoPick,children:[a.image?t.jsx("img",{src:a.image,alt:"",style:q.photoPreview}):t.jsxs("span",{style:q.photoEmpty,children:[t.jsx(Yl,{size:18})," Add a photo"]}),t.jsx("input",{type:"file",accept:"image/*",onChange:w=>C(w,D=>g({...a,image:D})),style:{display:"none"}})]}),t.jsxs("div",{style:q.formActions,children:[t.jsxs("button",{onClick:()=>{d(!1),g({title:"",image:""})},style:q.cancelBtn,children:[t.jsx(Re,{size:14})," Cancel"]}),t.jsxs("button",{onClick:j,disabled:!a.title.trim(),style:{...q.saveBtn,...a.title.trim()?{}:q.saveDisabled},children:[t.jsx(He,{size:15})," Create"]})]})]}),n?t.jsxs(t.Fragment,{children:[L.length===0&&M.length===0&&!l&&t.jsx("div",{style:q.empty,children:"No dreams yet. Add your first one and revisit it daily."}),L.length>0&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:q.sectionTitle,children:[t.jsx(ro,{size:15,color:"#C9A227"})," Manifesting ",t.jsx("span",{style:q.badge,children:L.length})]}),t.jsx("div",{style:q.grid,children:L.map(w=>t.jsx(lp,{g:w,onOpen:()=>s(w.id),onDelete:()=>b(w.id,w.title)},w.id))})]}),M.length>0&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{...q.sectionTitle,marginTop:22},children:[t.jsx(Pr,{size:15,color:"#4C9A6B"})," Manifested ",t.jsx("span",{style:q.badge,children:M.length})]}),t.jsx("div",{style:q.grid,children:M.map(w=>t.jsx(lp,{g:w,onOpen:()=>s(w.id),onDelete:()=>b(w.id,w.title),achieved:!0},w.id))})]})]}):t.jsx("div",{style:q.muted,children:"Loading…"}),t.jsx(tr,{toasts:p,onUndo:m,onDismiss:T})]})}const Zd=[{key:"morning",label:"Morning",time:"6 AM – 12 PM",Icon:Gm,color:"#E0883B"},{key:"noon",label:"Noon",time:"12 – 6 PM",Icon:$y,color:"#C9A227"},{key:"night",label:"Night",time:"6 PM – 2 AM",Icon:Cy,color:"#6B6FB0"}],ip=e=>{if(e<31)return`${e} day${e===1?"":"s"}`;const r=Math.floor(e/365),n=Math.floor(e%365/30),o=e%365%30,i=[];return r&&i.push(`${r}y`),n&&i.push(`${n}mo`),o&&i.push(`${o}d`),i.join(" ")},sp="tesla369_reminders";function $v({g:e,onChanged:r,musicId:n,musicOn:o,setMusicOn:i}){const[s,l]=c.useState(""),[d,a]=c.useState(!1),[g,h]=c.useState(!1),[x,f]=c.useState(()=>localStorage.getItem(sp)==="1"),E=e.t369,z=(e.t369_affirmation||"").trim();if(Nv(x&&!!z,E,e.title),!E)return null;const{window:k,targets:R,counts:b,current_streak:p,best_streak:m,min_streak:T,min_reached:j,day_complete:C}=E,L=(b.morning||0)+(b.noon||0)+(b.night||0),M=R.morning+R.noon+R.night,w=async()=>{if(z&&s.trim()===z&&k){h(!0);try{r(await _.logTesla369(e.id)),l("")}catch(Z){alert(Z.message||"Could not log this write.")}finally{h(!1)}}},D=async()=>{h(!0);try{r(await _.undoTesla369(e.id))}catch{}finally{h(!1)}},ie=async()=>{if(!x&&!await Pv()){alert("Enable notifications in your browser to get 369 reminders.");return}const Z=!x;f(Z),localStorage.setItem(sp,Z?"1":"0")},B=s.trim()===z&&z!=="",I=k&&(b[k]||0)>=R[k];return t.jsxs("div",{style:q.tCard,children:[t.jsxs("div",{style:q.tHead,children:[t.jsxs("div",{style:q.tTitleWrap,children:[t.jsxs("span",{style:q.tBadge,children:[t.jsx(ng,{size:14})," 369"]}),t.jsxs("div",{children:[t.jsx("div",{style:q.tTitle,children:"369 Method"}),t.jsx("div",{style:q.tSub,children:"Write it 3× morning · 6× noon · 9× night."})]})]}),t.jsxs("div",{style:q.tHeadBtns,children:[n&&t.jsxs("button",{onClick:()=>i(Z=>!Z),style:{...q.tRemBtn,...o?q.tuneOn:{}},title:o?"Soft tunes on":"Play soft tunes",children:[o?t.jsx(eg,{size:14}):t.jsx(Ql,{size:14})," Soft tunes"]}),t.jsxs("button",{onClick:ie,style:{...q.tRemBtn,...x?q.tRemOn:{}},title:x?"Reminders on":"Turn on reminders",children:[x?t.jsx(Xc,{size:14}):t.jsx(Yx,{size:14})," ",x?"Reminders on":"Remind me"]})]})]}),t.jsxs("div",{style:q.tStreakRow,children:[t.jsxs("div",{style:q.tStreakBox,children:[t.jsxs("div",{style:q.tStreakLabel,children:[t.jsx(Wn,{size:13,color:"#C2773B"})," Current streak"]}),t.jsx("div",{style:q.tStreakVal,children:ip(p)}),j?t.jsxs("div",{style:{...q.tStreakHint,color:"#4C9A6B"},children:["✓ ",T,"-day minimum met — keep going until it manifests"]}):t.jsxs("div",{style:q.tStreakHint,children:["Day ",p," of ",T," minimum"]}),!j&&t.jsx("div",{style:q.tProgTrack,children:t.jsx("div",{style:{...q.tProgFill,width:`${Math.min(100,p/T*100)}%`}})})]}),t.jsxs("div",{style:q.tStreakBox,children:[t.jsxs("div",{style:q.tStreakLabel,children:[t.jsx(Pr,{size:13,color:"#C9A227"})," All-time best"]}),t.jsx("div",{style:q.tStreakVal,children:ip(m)}),t.jsxs("div",{style:q.tStreakHint,children:["Today: ",L,"/",M," written ",C?"✓":""]})]})]}),z?t.jsxs(t.Fragment,{children:[t.jsx("div",{style:q.tWindows,children:Zd.map(({key:Z,label:be,time:ae,Icon:ve,color:G})=>{const V=b[Z]||0,oe=R[Z],Q=k===Z,ue=V>=oe;return t.jsxs("div",{style:{...q.tWindow,...Q?{border:`1px solid ${G}`,boxShadow:`0 0 0 2px ${G}22`}:{}},children:[t.jsxs("div",{style:q.tWindowHead,children:[t.jsx(ve,{size:15,color:G}),t.jsx("span",{style:q.tWindowLabel,children:be}),Q&&t.jsx("span",{style:{...q.tNow,color:G},children:"now"})]}),t.jsx("div",{style:q.tWindowTime,children:ae}),t.jsx("div",{style:q.tDots,children:Array.from({length:oe}).map((v,A)=>t.jsx("span",{style:{...q.tDot,...A<V?{background:G,borderColor:G}:{}}},A))}),t.jsxs("div",{style:{...q.tCount,...ue?{color:G}:{}},children:[V,"/",oe,ue?" ✓":""]})]},Z)})}),t.jsx("div",{style:q.tWriteBox,children:k?I?t.jsxs("div",{style:q.tDoneMsg,children:["✓ ",Zd.find(Z=>Z.key===k).label," complete. ",C?"All 18 done today! 🔥":"Next window unlocks ahead."]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{style:q.tNote,children:"✍️ Type it out by hand — no copy-pasting. The act of writing is the point."}),t.jsx("textarea",{value:s,onChange:Z=>l(Z.target.value),onPaste:Z=>{Z.preventDefault(),a(!0),setTimeout(()=>a(!1),2500)},onDrop:Z=>Z.preventDefault(),placeholder:"Type your affirmation here…",style:{...q.writeArea,...B?{border:"1px solid #4C9A6B"}:{}}}),d&&t.jsx("div",{style:q.tPasteWarn,children:"Pasting is disabled — please type it."}),t.jsxs("div",{style:q.tWriteActions,children:[t.jsxs("button",{onClick:D,disabled:g||(b[k]||0)===0,style:q.tUndoBtn,title:"Undo last write",children:[t.jsx(Hy,{size:14})," Undo"]}),t.jsxs("button",{onClick:w,disabled:g||!B,style:{...q.writeSave,flex:1,...B?{}:q.saveDisabled},children:[t.jsx(He,{size:15})," ",B?"Log this write":"Type it to log"]})]})]}):t.jsx("div",{style:q.tClosed,children:"Writing windows: 6 AM–12 PM, 12–6 PM, 6 PM–2 AM. Come back during a window."})})]}):t.jsx("div",{style:q.tClosed,children:"Set a 369 affirmation above to start writing."})]})}async function Pv(){return"Notification"in window?Notification.permission==="granted"?!0:Notification.permission==="denied"?!1:await Notification.requestPermission()==="granted":!1}function Nv(e,r,n){const o=c.useRef({});c.useEffect(()=>{if(!e||!r)return;const i=()=>{var E;if(Notification.permission!=="granted")return;const l=r.window;if(!l)return;const d=r.counts||{},a=r.targets||{};if((d[l]||0)>=(a[l]||0))return;const g=r.today,h=`369-${n||""}-${g}-${l}`;if(o.current[h])return;o.current[h]=!0;const x=((E=Zd.find(z=>z.key===l))==null?void 0:E.label)||"",f=(a[l]||0)-(d[l]||0);try{new Notification("369 — time to write ✍️",{body:`${n?`"${n}" · `:""}${x} window: ${f} more to go. Type your affirmation.`,tag:h})}catch{}};i();const s=setInterval(i,60*1e3);return()=>clearInterval(s)},[e,r,n])}function lp({g:e,onOpen:r,onDelete:n,achieved:o}){return t.jsxs("div",{style:{...q.goalCard,...o?{opacity:.96}:{},position:"relative"},children:[t.jsxs("button",{onClick:r,style:q.goalCardBtn,children:[t.jsxs("div",{style:q.thumbWrap,children:[e.image?t.jsx("img",{src:e.image,alt:"",style:q.thumb}):t.jsx("div",{style:q.thumbEmpty,children:t.jsx(ro,{size:26,color:"var(--text-3)"})}),o&&t.jsx("span",{style:q.stamp,children:"✦ Manifested"})]}),t.jsxs("div",{style:q.goalBody,children:[t.jsx("div",{style:q.goalTitle,children:e.title}),t.jsxs("div",{style:q.goalMeta,children:[o?t.jsxs("span",{style:{...q.metaPill,color:"#4C9A6B",background:"rgba(76,154,107,0.12)"},children:[t.jsx(Pr,{size:12})," ",e.days_to_manifest!=null?`in ${e.days_to_manifest} day${e.days_to_manifest===1?"":"s"}`:"done"]}):t.jsxs("span",{style:{...q.metaPill,color:"#C2773B",background:"rgba(194,119,59,0.12)"},children:[t.jsx(Wn,{size:12})," ",e.streak," day streak"]}),t.jsxs("span",{style:q.metaDim,children:[e.total_days," entr",e.total_days===1?"y":"ies"]})]})]})]}),t.jsx("button",{onClick:i=>{i.stopPropagation(),window.confirm(`Delete "${e.title}"?`)&&n()},style:q.cardDelBtn,title:"Delete dream",children:t.jsx(Kl,{size:14})})]})}function Ov({goalId:e,onBack:r,onReload:n,onCelebrate:o,pickImage:i,musicId:s,musicOn:l,setMusicOn:d}){const[a,g]=c.useState(null),[h,x]=c.useState({}),[f,E]=c.useState(rp()),[z,k]=c.useState(""),[R,b]=c.useState(null),[p,m]=c.useState(null),T=rp(),j=c.useCallback(G=>{g(G);const V={};(G.entries||[]).forEach(oe=>{V[oe.date]=oe.text}),x(V),k(V[T]||"")},[T]),C=c.useCallback(async()=>{j(await _.getGoldenGoal(e))},[e,j]);if(c.useEffect(()=>{C()},[C]),c.useEffect(()=>{if(!(a!=null&&a.t369_enabled))return;const G=setInterval(()=>{_.getGoldenGoal(e).then(j).catch(()=>{})},60*1e3);return()=>clearInterval(G)},[a==null?void 0:a.t369_enabled,e,j]),!a)return t.jsx("div",{style:q.muted,children:"Loading…"});const L=f===T,M=f>a.created_date,w=f<T,D=async()=>{await _.upsertGoldenEntry(e,{date:T,text:z}),await C(),n()},ie=async()=>{const G=await _.achieveGolden(e);o(a.title,G.days_to_manifest),await C(),n()},B=async()=>{await _.unachieveGolden(e),await C(),n()},I=async()=>{R.trim()&&(await _.updateGolden(e,{title:R.trim()}),b(null),await C(),n())},Z=G=>_.updateGolden(e,{image:G}).then(()=>{C(),n()}),be=async()=>{await _.updateGolden(e,{t369_enabled:!a.t369_enabled}),await C(),n()},ae=async()=>{await _.updateGolden(e,{t369_affirmation:(p||"").trim()}),m(null),await C()},ve=async()=>{window.confirm(`Delete "${a.title}"? This cannot be undone from here.`)&&(await _.deleteGolden(e),n(),r())};return t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:q.detailTopRow,children:[t.jsxs("button",{onClick:r,style:q.backBtn,children:[t.jsx(Im,{size:16})," All dreams"]}),t.jsxs("button",{onClick:ve,style:q.deleteBtn,title:"Delete dream",children:[t.jsx(Kl,{size:14})," Delete"]})]}),t.jsxs("div",{style:q.detailHero,children:[t.jsxs("label",{style:q.heroPhoto,children:[a.image?t.jsx("img",{src:a.image,alt:"",style:q.heroImg}):t.jsxs("span",{style:q.photoEmpty,children:[t.jsx(Yl,{size:20})," Add a photo"]}),t.jsxs("span",{style:q.photoEdit,children:[t.jsx(ut,{size:12})," Edit photo"]}),t.jsx("input",{type:"file",accept:"image/*",onChange:G=>i(G,Z),style:{display:"none"}})]}),t.jsxs("div",{style:q.heroInfo,children:[a.achieved&&t.jsxs("span",{style:q.heroStamp,children:["✦ Manifested",a.days_to_manifest!=null?` in ${a.days_to_manifest} day${a.days_to_manifest===1?"":"s"}`:""]}),R!==null?t.jsxs("div",{style:{display:"flex",gap:6,width:"100%"},children:[t.jsx("textarea",{autoFocus:!0,value:R,onChange:G=>b(G.target.value),style:{...q.textarea,minHeight:60}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[t.jsx("button",{onClick:I,style:q.iconSave,children:t.jsx(He,{size:14})}),t.jsx("button",{onClick:()=>b(null),style:q.iconCancel,children:t.jsx(Re,{size:14})})]})]}):t.jsxs("div",{style:q.heroTitleRow,children:[t.jsx("div",{style:q.heroTitle,children:a.title}),t.jsx("button",{onClick:()=>b(a.title),style:q.ghostBtn,title:"Edit",children:t.jsx(ut,{size:13})})]}),t.jsxs("div",{style:q.heroStats,children:[t.jsxs("span",{style:{...q.metaPill,color:"#C2773B",background:"rgba(194,119,59,0.12)"},children:[t.jsx(Wn,{size:13})," ",a.streak," day streak"]}),t.jsxs("span",{style:q.metaDim,children:[a.total_days," entr",a.total_days===1?"y":"ies"]}),t.jsxs("span",{style:q.metaDim,children:["since ",op(a.created_date)]})]})]})]}),!a.achieved&&t.jsxs("div",{style:q.t369Row,children:[t.jsxs("div",{style:q.t369RowLeft,children:[t.jsxs("span",{style:{...q.tBadge,...a.t369_enabled?{}:q.tBadgeOff},children:[t.jsx(ng,{size:13})," 369"]}),t.jsxs("div",{children:[t.jsx("div",{style:q.t369RowTitle,children:"Tesla's 369 Method"}),t.jsx("div",{style:q.t369RowSub,children:a.t369_enabled?"On — write this dream 3×/6×/9× across the day.":"Off — using the simple daily entry."})]})]}),t.jsx("button",{onClick:be,style:{...q.switch,...a.t369_enabled?q.switchOn:{}},role:"switch","aria-checked":a.t369_enabled,title:"Toggle 369 method",children:t.jsx("span",{style:{...q.switchKnob,...a.t369_enabled?q.switchKnobOn:{}}})})]}),a.t369_enabled&&!a.achieved&&t.jsxs(t.Fragment,{children:[p!==null||!a.t369_affirmation?t.jsxs("div",{style:q.card,children:[t.jsx("div",{style:q.cardTitle,children:"Your 369 affirmation"}),t.jsx("textarea",{autoFocus:!0,value:p??a.t369_affirmation??"",onChange:G=>m(G.target.value),placeholder:"The exact line you'll write 18× a day, e.g. 'I am grateful for my dream home.'",style:q.textarea}),t.jsxs("div",{style:q.formActions,children:[a.t369_affirmation&&t.jsxs("button",{onClick:()=>m(null),style:q.cancelBtn,children:[t.jsx(Re,{size:14})," Cancel"]}),t.jsxs("button",{onClick:ae,disabled:!(p??"").trim()&&!a.t369_affirmation,style:{...q.saveBtn,...(p??a.t369_affirmation??"").trim()?{}:q.saveDisabled},children:[t.jsx(He,{size:15})," Save affirmation"]})]})]}):t.jsxs("div",{style:q.tAffShow,children:[t.jsx($d,{size:15,color:jr}),t.jsx("p",{style:q.tAffText,children:a.t369_affirmation}),t.jsx("button",{onClick:()=>m(a.t369_affirmation),style:q.ghostBtn,title:"Edit affirmation",children:t.jsx(ut,{size:13})})]}),t.jsx($v,{g:a,onChanged:j,musicId:s,musicOn:l,setMusicOn:d})]}),!a.t369_enabled&&t.jsxs("div",{style:q.writeCard,children:[t.jsx("div",{style:q.tuneRow,children:s?t.jsxs("button",{onClick:()=>d(G=>!G),style:{...q.tuneBtn,...l?q.tuneOn:{}},children:[l?t.jsx(eg,{size:14}):t.jsx(Ql,{size:14})," Soft tunes"]}):t.jsx("span",{style:q.tuneHint,children:"Add a track in Settings → Music"})}),t.jsxs("div",{style:q.writeNav,children:[t.jsx("button",{onClick:()=>E(G=>np(G,-1)),disabled:!M,style:{...q.navBtn,...M?{}:q.navDisabled},children:t.jsx(dn,{size:16})}),t.jsx("div",{style:q.writeDate,children:L?"Today":op(f)}),t.jsx("button",{onClick:()=>E(G=>np(G,1)),disabled:!w,style:{...q.navBtn,...w?{}:q.navDisabled},children:t.jsx(Nr,{size:16})})]}),L&&!a.achieved?t.jsxs(t.Fragment,{children:[t.jsx("textarea",{value:z,onChange:G=>k(G.target.value),placeholder:"Write it again today, as if it's already yours…",style:q.writeArea}),t.jsxs("button",{onClick:D,style:q.writeSave,children:[t.jsx(He,{size:15})," Save today's entry"]})]}):t.jsx("div",{style:q.readEntry,children:h[f]?t.jsxs(t.Fragment,{children:[t.jsx($d,{size:16,color:"var(--text-3)"}),t.jsx("p",{style:q.readText,children:h[f]})]}):t.jsx("div",{style:q.muted,children:"Nothing written on this day."})})]}),a.achieved?t.jsx("button",{onClick:B,style:q.unmanifestBtn,children:"Undo manifested"}):t.jsxs("button",{onClick:ie,style:q.manifestBtn,children:[t.jsx(ro,{size:16})," Mark as manifested"]})]})}function Hv({data:e,onClose:r}){return t.jsx("div",{style:q.celebOverlay,onClick:r,children:t.jsxs("div",{style:q.celebBox,onClick:n=>n.stopPropagation(),children:[t.jsx("div",{style:q.celebEmoji,children:"✨🌟✨"}),t.jsx("div",{style:q.celebTitle,children:"It's happening!"}),t.jsxs("div",{style:q.celebDream,children:['"',e.title,'"']}),t.jsxs("div",{style:q.celebSub,children:[e.days!=null?`Manifested in ${e.days} day${e.days===1?"":"s"}.`:"Manifested."," The universe delivered. 🙏"]}),t.jsx("button",{onClick:r,style:q.celebBtn,children:"Wonderful"})]})})}function Gv({musicId:e,on:r}){return!e||!r?null:t.jsx("iframe",{title:"golden-music",src:`https://www.youtube.com/embed/${e}?autoplay=1&loop=1&playlist=${e}&controls=0&modestbranding=1&playsinline=1`,allow:"autoplay; encrypted-media",style:{position:"fixed",left:-1e4,top:0,width:320,height:180,border:"none"}})}const jr="#C9A227",q={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:860,margin:"0 auto",position:"relative"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:jr,color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},textarea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"11px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:70,resize:"vertical",lineHeight:1.5},photoPick:{display:"block",marginTop:10,cursor:"pointer",borderRadius:12,overflow:"hidden",border:"1px dashed var(--border)"},photoPreview:{width:"100%",maxHeight:220,objectFit:"cover",display:"block"},photoEmpty:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"26px 0",color:"var(--text-3)",fontSize:13,fontWeight:600},formActions:{display:"flex",gap:8,marginTop:14},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:jr,color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:12},badge:{fontSize:11,fontWeight:700,background:"var(--hover)",color:"var(--text-2)",borderRadius:10,padding:"1px 7px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:14},goalCard:{textAlign:"left",border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},goalCardBtn:{textAlign:"left",border:"none",background:"none",cursor:"pointer",padding:0,fontFamily:"inherit",display:"flex",flexDirection:"column",width:"100%"},cardDelBtn:{position:"absolute",top:8,left:8,border:"none",background:"rgba(0,0,0,0.55)",color:"#fff",width:26,height:26,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",zIndex:2},thumbWrap:{position:"relative",width:"100%",aspectRatio:"16 / 10",background:"var(--surface-2)"},thumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},thumbEmpty:{width:"100%",height:"100%",display:"grid",placeItems:"center"},stamp:{position:"absolute",top:8,right:8,transform:"rotate(6deg)",background:"rgba(76,154,107,0.95)",color:"#fff",fontSize:11,fontWeight:800,letterSpacing:"0.04em",padding:"3px 9px",borderRadius:6,border:"1.5px solid #fff",textTransform:"uppercase"},goalBody:{padding:"11px 13px",display:"flex",flexDirection:"column",gap:8},goalTitle:{fontSize:14,fontWeight:600,lineHeight:1.35,display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"},goalMeta:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},metaPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11.5,fontWeight:700,padding:"2px 8px",borderRadius:10},metaDim:{fontSize:11,color:"var(--text-3)",fontWeight:500},detailTopRow:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16,gap:10},backBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},deleteBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid rgba(194,83,107,0.4)",background:"rgba(194,83,107,0.08)",color:"#C2536B",padding:"7px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},detailHero:{display:"flex",flexDirection:"column",gap:14,marginBottom:16},heroPhoto:{position:"relative",width:"100%",borderRadius:14,overflow:"hidden",border:"1px solid var(--border)",cursor:"pointer",background:"var(--surface-2)",display:"flex",alignItems:"center",justifyContent:"center",minHeight:120},heroImg:{width:"100%",maxHeight:"62vh",objectFit:"contain",display:"block"},photoEdit:{position:"absolute",bottom:8,right:8,display:"flex",alignItems:"center",gap:5,background:"rgba(0,0,0,0.6)",color:"#fff",fontSize:11,fontWeight:600,padding:"4px 8px",borderRadius:7},heroInfo:{display:"flex",flexDirection:"column",gap:10,alignItems:"center",textAlign:"center"},heroStamp:{alignSelf:"center",background:"rgba(76,154,107,0.14)",color:"#4C9A6B",fontSize:12,fontWeight:800,padding:"4px 10px",borderRadius:8,letterSpacing:"0.03em"},heroTitleRow:{display:"flex",alignItems:"flex-start",gap:8,justifyContent:"center"},heroTitle:{fontSize:23,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.35},heroStats:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap",justifyContent:"center"},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",flexShrink:0},iconSave:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},iconCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},writeCard:{background:"var(--surface)",borderRadius:14,padding:16,border:"1px solid var(--border)",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},tuneRow:{display:"flex",justifyContent:"flex-end",marginBottom:10},tuneBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 12px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tuneOn:{background:jr,color:"#fff",borderColor:jr},tuneHint:{fontSize:11,color:"var(--text-3)",fontWeight:500},writeNav:{display:"flex",alignItems:"center",justifyContent:"center",gap:14,marginBottom:12},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center"},navDisabled:{opacity:.35,cursor:"not-allowed"},writeDate:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:150,textAlign:"center"},writeArea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"12px",fontSize:15,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:120,resize:"vertical",lineHeight:1.6},writeSave:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",marginTop:10,border:"none",background:jr,color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},readEntry:{display:"flex",gap:8,padding:"6px 2px"},readText:{fontSize:15,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.6,margin:0,whiteSpace:"pre-wrap"},manifestBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,width:"100%",border:"none",background:"linear-gradient(135deg,#C9A227,#E0BD45)",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:800,cursor:"pointer",fontFamily:"inherit",boxShadow:"0 2px 10px rgba(201,162,39,0.35)"},unmanifestBtn:{display:"block",margin:"0 auto",border:"none",background:"none",color:"var(--text-3)",fontSize:12,fontWeight:600,cursor:"pointer",textDecoration:"underline",fontFamily:"inherit"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.6)",zIndex:200,display:"grid",placeItems:"center",padding:16},celebBox:{background:"var(--surface)",color:"var(--text)",borderRadius:20,padding:"36px 30px",textAlign:"center",maxWidth:360,boxShadow:"0 12px 48px rgba(0,0,0,0.3)"},celebEmoji:{fontSize:40,marginBottom:10},celebTitle:{fontSize:24,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginBottom:10,color:jr},celebDream:{fontSize:15,fontStyle:"italic",fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.5,marginBottom:10},celebSub:{fontSize:13.5,color:"var(--text-2)",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:jr,color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},t369Row:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:"12px 16px",marginBottom:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},t369RowLeft:{display:"flex",alignItems:"center",gap:11},t369RowTitle:{fontSize:14,fontWeight:700},t369RowSub:{fontSize:11.5,color:"var(--text-3)",marginTop:2},tBadgeOff:{background:"var(--border)",color:"var(--text-3)"},switch:{position:"relative",width:46,height:26,borderRadius:14,border:"none",background:"var(--border)",cursor:"pointer",flexShrink:0,transition:"background 0.2s",padding:0},switchOn:{background:jr},switchKnob:{position:"absolute",top:3,left:3,width:20,height:20,borderRadius:"50%",background:"#fff",transition:"left 0.2s",boxShadow:"0 1px 2px rgba(0,0,0,0.3)"},switchKnobOn:{left:23},tCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:16,padding:18,marginBottom:20,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},tHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:12,flexWrap:"wrap",marginBottom:14},tTitleWrap:{display:"flex",alignItems:"center",gap:11},tBadge:{display:"inline-flex",alignItems:"center",gap:4,background:"linear-gradient(135deg,#C9A227,#E0BD45)",color:"#fff",fontSize:14,fontWeight:800,padding:"6px 10px",borderRadius:10,letterSpacing:"0.02em",flexShrink:0},tTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},tSub:{fontSize:12,color:"var(--text-3)",marginTop:2},tHeadBtns:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",justifyContent:"flex-end"},tRemBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 12px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tRemOn:{background:jr,color:"#fff",borderColor:jr},tStreakRow:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:14},tStreakBox:{background:"var(--bg)",border:"1px solid var(--border)",borderRadius:12,padding:"12px 14px"},tStreakLabel:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,fontWeight:600,color:"var(--text-2)"},tStreakVal:{fontSize:21,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:4,lineHeight:1.1},tStreakHint:{fontSize:11,color:"var(--text-3)",marginTop:4,fontWeight:500},tProgTrack:{height:5,borderRadius:4,background:"var(--border)",marginTop:8,overflow:"hidden"},tProgFill:{height:"100%",background:"linear-gradient(90deg,#C2773B,#C9A227)",borderRadius:4,transition:"width 0.4s"},tAffShow:{display:"flex",alignItems:"flex-start",gap:9,background:"var(--bg)",border:"1px solid var(--border)",borderRadius:12,padding:"12px 14px",marginBottom:14},tAffText:{flex:1,fontSize:15,fontFamily:"'Fraunces',Georgia,serif",fontStyle:"italic",lineHeight:1.5,margin:0,whiteSpace:"pre-wrap"},tWindows:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:10,marginBottom:14},tWindow:{background:"var(--bg)",border:"1px solid var(--border)",borderRadius:12,padding:"11px 12px",transition:"box-shadow 0.2s, border-color 0.2s"},tWindowHead:{display:"flex",alignItems:"center",gap:6},tWindowLabel:{fontSize:13,fontWeight:700},tNow:{fontSize:10,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",marginLeft:"auto"},tWindowTime:{fontSize:10.5,color:"var(--text-3)",marginTop:2,marginBottom:8,fontWeight:500},tDots:{display:"flex",flexWrap:"wrap",gap:5,marginBottom:7},tDot:{width:11,height:11,borderRadius:"50%",border:"1.5px solid var(--border)",background:"transparent",transition:"background 0.2s"},tCount:{fontSize:12,fontWeight:700,color:"var(--text-2)"},tWriteBox:{borderTop:"1px solid var(--border)",paddingTop:14},tNote:{fontSize:12,fontWeight:600,color:"#C2773B",background:"rgba(194,119,59,0.10)",borderRadius:8,padding:"8px 11px",marginBottom:9},tPasteWarn:{fontSize:11.5,color:"#C2536B",fontWeight:600,marginTop:6},tWriteActions:{display:"flex",gap:8,marginTop:10},tUndoBtn:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"11px 14px",borderRadius:10,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tClosed:{fontSize:12.5,color:"var(--text-3)",textAlign:"center",padding:"10px 4px",lineHeight:1.5},tDoneMsg:{fontSize:13,fontWeight:700,color:"#4C9A6B",textAlign:"center",padding:"10px 4px"}},Oa=[{id:"meditation",label:"Meditation Hub",icon:Xx,color:"#8268B0"},{id:"visualization",label:"Visualization",icon:jl,color:"#3A7CA5"}],ap=e=>{if(!e)return"";const r=e.trim();if(/^[A-Za-z0-9_-]{11}$/.test(r))return r;const n=r.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return n?n[1]:""},Uv=e=>new Promise((r,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:l,height:d}=i;l>d&&l>1e3?(d=d*1e3/l,l=1e3):d>1e3&&(l=l*1e3/d,d=1e3);const a=document.createElement("canvas");a.width=l,a.height=d,a.getContext("2d").drawImage(i,0,0,l,d),r(a.toDataURL("image/jpeg",.82))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(e)}),Vv=e=>({id:null,kind:e,title:"",url:"",image:""});function Yv(){const[e,r]=c.useState("meditation"),[n,o]=c.useState([]),[i,s]=c.useState(!1),[l,d]=c.useState(null),[a,g]=c.useState(null),h=c.useCallback(async()=>{try{o(await _.getMedia())}catch{}s(!0)},[]);c.useEffect(()=>{h()},[h]);const{deleteItem:x,toasts:f,handleUndo:E,handleDismiss:z}=er(_.deleteMedia,_.restoreMedia,h);c.useEffect(()=>{if(!a)return;const C=10,L=setInterval(()=>{document.hidden||_.addScreenTime("mindscape",C).catch(()=>{})},C*1e3);return()=>clearInterval(L)},[a]);const k=Oa.find(C=>C.id===e),R=n.filter(C=>C.kind===e),b=C=>d({id:C.id,kind:C.kind,title:C.title,url:`https://youtu.be/${C.youtube_id}`,image:C.image}),p=async C=>{var M;const L=(M=C.target.files)==null?void 0:M[0];if(L){try{const w=await Uv(L);d(D=>({...D,image:w}))}catch{}C.target.value=""}},m=l?[!l.title.trim()&&"a title",!l.image&&"an image",!ap(l.url)&&"a valid YouTube link"].filter(Boolean):[],T=!!l&&m.length===0,j=async()=>{if(!T)return;const C={kind:l.kind,title:l.title.trim(),image:l.image,youtube_id:ap(l.url)};l.id?await _.updateMedia(l.id,C):await _.createMedia(C),d(null),h()};return t.jsxs("div",{style:Je.page,children:[a&&t.jsx("iframe",{title:"mindscape-audio",src:`https://www.youtube.com/embed/${a.youtube_id}?autoplay=1&controls=0&modestbranding=1&playsinline=1`,allow:"autoplay; encrypted-media",style:{position:"fixed",left:-1e4,top:0,width:320,height:180,border:"none"}}),t.jsxs("div",{style:Je.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:Je.eyebrow,children:"Anvil · Mindscape"}),t.jsx("h1",{style:Je.h1,children:"Mindscape"}),t.jsx("div",{style:Je.subhead,children:"Close your eyes and listen — guided meditation and visualization."})]}),!l&&t.jsxs("button",{onClick:()=>d(Vv(e)),style:{...Je.addBtn,background:k.color},children:[t.jsx(Ze,{size:15})," Add"]})]}),t.jsx("div",{style:Je.tabs,children:Oa.map(C=>{const L=C.icon,M=e===C.id;return t.jsxs("button",{onClick:()=>{r(C.id),d(null)},style:{...Je.tab,...M?{background:C.color,color:"#fff",borderColor:C.color}:{}},children:[t.jsx(L,{size:15})," ",C.label]},C.id)})}),l&&t.jsxs("div",{style:Je.card,children:[t.jsx("div",{style:Je.cardTitle,children:l.id?"Edit":`New ${Oa.find(C=>C.id===l.kind).label}`}),t.jsx("input",{placeholder:"YouTube link (plays as audio only)",value:l.url,onChange:C=>d({...l,url:C.target.value}),style:Je.input,autoFocus:!0}),t.jsx("input",{placeholder:"Title (required)",value:l.title,onChange:C=>d({...l,title:C.target.value}),style:{...Je.input,marginTop:8}}),t.jsxs("label",{style:Je.photoPick,children:[l.image?t.jsx("img",{src:l.image,alt:"",style:Je.photoPreview}):t.jsxs("span",{style:Je.photoEmpty,children:[t.jsx(Yl,{size:18})," Add cover image (required)"]}),t.jsx("input",{type:"file",accept:"image/*",onChange:p,style:{display:"none"}})]}),!T&&t.jsxs("div",{style:Je.warn,children:["Add ",m.join(", ")," to save."]}),t.jsxs("div",{style:Je.formActions,children:[t.jsxs("button",{onClick:()=>d(null),style:Je.cancelBtn,children:[t.jsx(Re,{size:14})," Cancel"]}),t.jsxs("button",{onClick:j,disabled:!T,style:{...Je.saveBtn,background:T?k.color:"var(--border)",color:T?"#fff":"var(--text-3)",cursor:T?"pointer":"not-allowed"},children:[t.jsx(He,{size:15})," ",l.id?"Save":"Add"]})]})]}),i?R.length===0?t.jsxs("div",{style:Je.empty,children:["Nothing here yet — add a ",k.label.toLowerCase()," track."]}):t.jsx("div",{style:Je.grid,children:R.map(C=>{const L=(a==null?void 0:a.id)===C.id;return t.jsxs("div",{style:Je.mediaCard,children:[t.jsxs("button",{onClick:()=>g(L?null:C),style:Je.coverBtn,title:L?"Pause":"Play",children:[t.jsx("img",{src:C.image,alt:"",style:Je.cover}),t.jsx("span",{style:{...Je.playOverlay,background:L?"rgba(0,0,0,0.45)":"rgba(0,0,0,0.28)"},children:t.jsx("span",{style:{...Je.playCircle,background:k.color},children:L?t.jsx(_m,{size:20,color:"#fff",fill:"#fff"}):t.jsx(tg,{size:20,color:"#fff",fill:"#fff"})})}),L&&t.jsxs("span",{style:Je.nowPlaying,children:[t.jsx(eg,{size:11})," Playing"]})]}),t.jsxs("div",{style:Je.mediaBody,children:[t.jsx("div",{style:Je.mediaTitle,children:C.title}),t.jsxs("div",{style:Je.cardActions,children:[t.jsx("button",{onClick:()=>b(C),style:Je.iconBtn,title:"Edit",children:t.jsx(ut,{size:13})}),t.jsx("button",{onClick:()=>{(a==null?void 0:a.id)===C.id&&g(null),x(C.id,C.title)},style:Je.iconBtn,title:"Delete",children:t.jsx(Re,{size:14})})]})]})]},C.id)})}):t.jsx("div",{style:Je.muted,children:"Loading…"}),t.jsx(tr,{toasts:f,onUndo:E,onDismiss:z})]})}const Je={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:900,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},tabs:{display:"flex",gap:8,marginBottom:18,flexWrap:"wrap"},tab:{display:"flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:20,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none"},photoPick:{display:"block",marginTop:10,cursor:"pointer",borderRadius:12,overflow:"hidden",border:"1px dashed var(--border)"},photoPreview:{width:"100%",maxHeight:200,objectFit:"cover",display:"block"},photoEmpty:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"26px 0",color:"var(--text-3)",fontSize:13,fontWeight:600},warn:{fontSize:12,color:"#C2773B",marginTop:8,fontWeight:600},formActions:{display:"flex",gap:8,marginTop:14},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,fontFamily:"inherit"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gap:16},mediaCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},coverBtn:{position:"relative",border:"none",padding:0,cursor:"pointer",display:"block",width:"100%",aspectRatio:"1",background:"var(--surface-2)"},cover:{width:"100%",height:"100%",objectFit:"cover",display:"block"},playOverlay:{position:"absolute",inset:0,display:"grid",placeItems:"center"},playCircle:{width:46,height:46,borderRadius:"50%",display:"grid",placeItems:"center",boxShadow:"0 2px 10px rgba(0,0,0,0.3)"},nowPlaying:{position:"absolute",bottom:8,left:8,display:"flex",alignItems:"center",gap:4,background:"rgba(0,0,0,0.65)",color:"#fff",fontSize:11,fontWeight:700,padding:"3px 8px",borderRadius:7},mediaBody:{padding:"12px 14px",display:"flex",alignItems:"flex-start",gap:8},mediaTitle:{flex:1,fontSize:14.5,fontWeight:600,lineHeight:1.4,minWidth:0,wordBreak:"break-word"},cardActions:{display:"flex",gap:2,flexShrink:0,marginTop:1},iconBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"}},ih={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"},Qv=Object.keys(ih),Kv="#9A7B4F";function Xv(e=760){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const qv=()=>{const e=new Date,r=n=>String(n).padStart(2,"0");return`${e.getFullYear()}-${r(e.getMonth()+1)}-${r(e.getDate())}`},Zv=e=>{if(!e)return"";const r=new Date(e+"T00:00:00");return isNaN(r)?e:r.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})},Ha=e=>(e||"").slice(0,4),Jv=e=>new Promise((r,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:l,height:d}=i;l>d&&l>1e3?(d=d*1e3/l,l=1e3):d>1e3&&(l=l*1e3/d,d=1e3);const a=document.createElement("canvas");a.width=l,a.height=d,a.getContext("2d").drawImage(i,0,0,l,d),r(a.toDataURL("image/jpeg",.82))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(e)}),e1={id:null,title:"",date:qv(),pillar:"",reward:"",image:"",note:""};function t1(){const e=Ho(),r=j=>Yr(j,e.code),n=Xv(),[o,i]=c.useState([]),[s,l]=c.useState(null),[d,a]=c.useState(!1),g=c.useRef(null),h=c.useCallback(()=>{_.getAchievements().then(i).catch(()=>{})},[]);c.useEffect(()=>{h()},[h]);const{deleteItem:x,toasts:f,handleUndo:E,handleDismiss:z}=er(_.deleteAchievement,_.restoreAchievement,h),k=()=>l({...e1}),R=j=>l({id:j.id,title:j.title,date:j.date,pillar:j.pillar||"",reward:j.reward?String(j.reward):"",image:j.image||"",note:j.note||""}),b=async j=>{var L;const C=(L=j.target.files)==null?void 0:L[0];if(C){try{const M=await Jv(C);l(w=>({...w,image:M}))}catch{}g.current&&(g.current.value="")}},p=s&&s.title.trim()&&s.date,m=async()=>{if(!p||d)return;a(!0);const j={title:s.title.trim(),date:s.date,pillar:s.pillar||null,reward:parseFloat(s.reward)||0,image:s.image||null,note:s.note.trim()};try{s.id?await _.updateAchievement(s.id,j):await _.createAchievement(j),l(null),h()}catch{}finally{a(!1)}},T=o.reduce((j,C)=>j+(C.reward||0),0);return t.jsxs("div",{style:Ne.page,children:[t.jsxs("div",{style:Ne.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:Ne.eyebrow,children:"Anvil · Achievements"}),t.jsx("h1",{style:Ne.h1,children:"Achievements"}),t.jsx("div",{style:Ne.subhead,children:"Your tree of wins — newest at the top, scroll down through the past."})]}),t.jsxs("div",{style:Ne.headRight,children:[T>0&&t.jsxs("div",{style:Ne.totalBadge,children:[t.jsx(kl,{size:14,color:"#C9A227"})," ",r(T)," earned"]}),t.jsxs("button",{onClick:k,style:Ne.addBtn,children:[t.jsx(Ze,{size:15})," Add achievement"]})]})]}),o.length===0?t.jsxs("div",{style:Ne.empty,children:[t.jsx(Pr,{size:30,color:"var(--text-3)"}),t.jsx("div",{style:{marginTop:10},children:"No achievements yet."}),t.jsx("div",{style:Ne.emptySub,children:"Plant your first win — it'll grow into a timeline you can look back on."})]}):t.jsxs("div",{style:{...Ne.timeline,paddingLeft:0},children:[t.jsx("div",{style:{...Ne.trunk,left:n?13:"50%"}}),o.map((j,C)=>{const L=ih[j.pillar]||Kv,M=!n&&C%2===1,w=o[C-1],D=!w||Ha(w.date)!==Ha(j.date);return t.jsxs("div",{children:[D&&t.jsx("div",{style:{...Ne.yearRow,justifyContent:n?"flex-start":"center",paddingLeft:n?36:0},children:t.jsx("span",{style:Ne.yearChip,children:Ha(j.date)})}),t.jsxs("div",{style:{...Ne.row,gridTemplateColumns:n?"28px 1fr":"1fr 44px 1fr"},children:[!n&&t.jsx("div",{style:{gridColumn:1,display:"flex",justifyContent:"flex-end"},children:M&&t.jsx(dp,{a:j,color:L,side:"left",money:r,onEdit:()=>R(j),onDelete:()=>x(j.id,j.title)})}),t.jsx("div",{style:{gridColumn:n?1:2,display:"flex",justifyContent:"center",position:"relative"},children:t.jsx("div",{style:{...Ne.node,borderColor:L,background:"var(--surface)"},children:t.jsx("div",{style:{...Ne.nodeDot,background:L}})})}),t.jsx("div",{style:{gridColumn:n?2:3,display:"flex",justifyContent:"flex-start"},children:(n||!M)&&t.jsx(dp,{a:j,color:L,side:n?"mobile":"right",money:r,onEdit:()=>R(j),onDelete:()=>x(j.id,j.title)})})]})]},j.id)})]}),s&&t.jsx("div",{style:Ne.overlay,onClick:()=>l(null),children:t.jsxs("div",{style:Ne.modal,onClick:j=>j.stopPropagation(),children:[t.jsxs("div",{style:Ne.modalHead,children:[t.jsx("div",{style:Ne.modalTitle,children:s.id?"Edit achievement":"New achievement"}),t.jsx("button",{onClick:()=>l(null),style:Ne.iconBtn,children:t.jsx(Re,{size:16})})]}),t.jsx("label",{style:Ne.label,children:"Title *"}),t.jsx("input",{autoFocus:!0,value:s.title,onChange:j=>l(C=>({...C,title:j.target.value})),placeholder:"What did you achieve?",style:Ne.input}),t.jsxs("div",{style:Ne.formRow,children:[t.jsxs("div",{style:{flex:1},children:[t.jsxs("label",{style:Ne.label,children:[t.jsx(ty,{size:12})," Date *"]}),t.jsx("input",{type:"date",value:s.date,onChange:j=>l(C=>({...C,date:j.target.value})),style:Ne.input})]}),t.jsxs("div",{style:{flex:1},children:[t.jsx("label",{style:Ne.label,children:"Pillar (optional)"}),t.jsxs("select",{value:s.pillar,onChange:j=>l(C=>({...C,pillar:j.target.value})),style:Ne.input,children:[t.jsx("option",{value:"",children:"— None —"}),Qv.map(j=>t.jsx("option",{value:j,children:j},j))]})]})]}),t.jsxs("label",{style:Ne.label,children:[t.jsx(kl,{size:12})," Reward (",e.code,") — optional gesture of appreciation"]}),t.jsx("input",{type:"number",min:"0",step:"any",value:s.reward,onChange:j=>l(C=>({...C,reward:j.target.value})),placeholder:"0",style:Ne.input}),t.jsx("label",{style:Ne.label,children:"Photo (optional)"}),s.image?t.jsxs("div",{style:Ne.imgWrap,children:[t.jsx("img",{src:s.image,alt:"",style:Ne.imgPreview}),t.jsx("button",{onClick:()=>l(j=>({...j,image:""})),style:Ne.imgRemove,children:t.jsx(Re,{size:14})})]}):t.jsxs("button",{onClick:()=>{var j;return(j=g.current)==null?void 0:j.click()},style:Ne.uploadBtn,children:[t.jsx(fy,{size:15})," Add a photo"]}),t.jsx("input",{ref:g,type:"file",accept:"image/*",onChange:b,style:{display:"none"}}),t.jsx("label",{style:Ne.label,children:"Note (optional)"}),t.jsx("textarea",{value:s.note,onChange:j=>l(C=>({...C,note:j.target.value})),placeholder:"The story behind it…",rows:3,style:{...Ne.input,resize:"vertical",fontFamily:"inherit"}}),t.jsxs("div",{style:Ne.modalActions,children:[t.jsx("button",{onClick:()=>l(null),style:Ne.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:m,disabled:!p||d,style:{...Ne.saveBtn,...!p||d?{opacity:.5,cursor:"not-allowed"}:{}},children:[t.jsx(He,{size:15})," ",s.id?"Save":"Add"]})]})]})}),t.jsx(tr,{toasts:f,onUndo:E,onDismiss:z})]})}function dp({a:e,color:r,side:n,money:o,onEdit:i,onDelete:s}){return t.jsxs("div",{style:{...Ne.card,borderTop:`3px solid ${r}`,textAlign:n==="left"?"right":"left"},children:[t.jsxs("div",{style:{...Ne.cardTop,flexDirection:n==="left"?"row-reverse":"row"},children:[t.jsx("span",{style:{...Ne.dateChip,background:`${r}1A`,color:r},children:Zv(e.date)}),t.jsxs("div",{style:{display:"flex",gap:2},children:[t.jsx("button",{onClick:i,style:Ne.ghostBtn,title:"Edit",children:t.jsx(ut,{size:13})}),t.jsx("button",{onClick:s,style:Ne.ghostBtn,title:"Delete",children:t.jsx(Re,{size:14})})]})]}),t.jsx("div",{style:Ne.cardTitle,children:e.title}),e.image&&t.jsx("img",{src:e.image,alt:"",style:Ne.cardImg}),e.note&&t.jsx("div",{style:Ne.cardNote,children:e.note}),e.reward>0&&t.jsxs("div",{style:{...Ne.rewardBadge,marginLeft:n==="left"?"auto":0},children:[t.jsx(kl,{size:13})," ",o(e.reward)]})]})}const Ne={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:22},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},headRight:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},totalBadge:{display:"flex",alignItems:"center",gap:5,background:"rgba(201,162,39,0.12)",border:"1px solid rgba(201,162,39,0.3)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:700,color:"#8A6E1A"},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},empty:{textAlign:"center",color:"var(--text-3)",padding:"60px 16px",fontSize:14,fontWeight:600},emptySub:{fontSize:12.5,fontWeight:400,marginTop:6,maxWidth:320,marginInline:"auto",lineHeight:1.5},timeline:{position:"relative",maxWidth:1e3,margin:"0 auto",paddingBottom:30},trunk:{position:"absolute",top:8,bottom:8,width:3,background:"linear-gradient(to bottom, var(--border), var(--border))",transform:"translateX(-1.5px)",borderRadius:2},yearRow:{display:"flex",margin:"6px 0 12px"},yearChip:{fontSize:11.5,fontWeight:800,letterSpacing:"0.06em",color:"var(--text-2)",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:"4px 12px",position:"relative",zIndex:2},row:{display:"grid",alignItems:"center",gap:8,marginBottom:16},node:{width:20,height:20,borderRadius:"50%",border:"3px solid",display:"grid",placeItems:"center",zIndex:2,boxShadow:"0 0 0 4px var(--bg)"},nodeDot:{width:7,height:7,borderRadius:"50%"},card:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:"12px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.06)",maxWidth:420,width:"100%",boxSizing:"border-box"},cardTop:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,marginBottom:7},dateChip:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:12,whiteSpace:"nowrap"},cardTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em",lineHeight:1.3,wordBreak:"break-word"},cardImg:{width:"100%",maxHeight:220,objectFit:"cover",borderRadius:9,marginTop:9,display:"block"},cardNote:{fontSize:12.5,color:"var(--text-2)",marginTop:7,lineHeight:1.5,whiteSpace:"pre-wrap",wordBreak:"break-word"},rewardBadge:{display:"inline-flex",alignItems:"center",gap:5,marginTop:9,background:"rgba(201,162,39,0.12)",color:"#8A6E1A",border:"1px solid rgba(201,162,39,0.3)",padding:"3px 10px",borderRadius:14,fontSize:12,fontWeight:700},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",borderRadius:6},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:60,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:460,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},label:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)"},formRow:{display:"flex",gap:10},uploadBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:7,width:"100%",border:"1.5px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"11px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},imgWrap:{position:"relative",borderRadius:10,overflow:"hidden"},imgPreview:{width:"100%",maxHeight:220,objectFit:"cover",display:"block",borderRadius:10},imgRemove:{position:"absolute",top:8,right:8,border:"none",background:"rgba(0,0,0,0.55)",color:"#fff",width:28,height:28,borderRadius:"50%",cursor:"pointer",display:"grid",placeItems:"center"},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}};function r1(e=760){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const Fs=()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},n1=e=>e?new Date(e+"T00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"",Fr="#C9772E",si=[{id:"todo",label:"Want to",color:"#3A7CA5"},{id:"doing",label:"Enjoying",color:"#C9772E"},{id:"done",label:"Satisfied",color:"#4C9A6B"}],o1=[{id:"text",label:"Text"},{id:"number",label:"Number"},{id:"link",label:"Link"}],Ga=e=>(e&&typeof e=="object"?e.type:"text")||"text",pn=e=>(e&&typeof e=="object"?e.name:e)||"";function i1(){const e=r1(),[r,n]=c.useState([]),[o,i]=c.useState(null),[s,l]=c.useState(!1),[d,a]=c.useState(null),[g,h]=c.useState(null),[x,f]=c.useState(null),[E,z]=c.useState(null),[k,R]=c.useState(null),[b,p]=c.useState([]),m=c.useRef({}),T=c.useCallback(()=>{_.getDelight().then(W=>{n(W),i(U=>{var ce;return U&&W.some(F=>F.id===U)?U:((ce=W[0])==null?void 0:ce.id)??null}),l(!0)}).catch(()=>l(!0))},[]);c.useEffect(()=>{T()},[T]),c.useEffect(()=>{p([])},[o]);const{deleteItem:j,toasts:C,handleUndo:L,handleDismiss:M}=er(_.deleteDelightItem,_.restoreDelightItem,T),w=r.find(W=>W.id===o)||null,D=c.useMemo(()=>{const W={todo:[],doing:[],done:[]};return((w==null?void 0:w.items)||[]).forEach(U=>{(W[U.status]||W.todo).push(U)}),Object.values(W).forEach(U=>U.sort((ce,F)=>ce.position-F.position||ce.id-F.id)),W},[w]),ie=W=>/^tags?$/i.test(pn(W).trim()),B=W=>((w==null?void 0:w.columns)||[]).filter(ie).flatMap(U=>(W.fields[pn(U)]||"").split(",").map(ce=>ce.trim()).filter(Boolean)),I=c.useMemo(()=>{const W=new Set;return((w==null?void 0:w.items)||[]).forEach(U=>(w.columns||[]).filter(ie).forEach(ce=>(U.fields[pn(ce)]||"").split(",").map(F=>F.trim()).filter(Boolean).forEach(F=>W.add(F)))),[...W].sort((U,ce)=>U.localeCompare(ce))},[w]),Z=c.useMemo(()=>{const W={};return((w==null?void 0:w.columns)||[]).forEach(U=>{const ce=pn(U);if(ie(U))return;const F=new Set;((w==null?void 0:w.items)||[]).forEach(y=>{const K=(y.fields[ce]||"").trim();K&&F.add(K)}),W[ce]=[...F].sort((y,K)=>y.localeCompare(K))}),W},[w]),be=W=>b.length===0||B(W).some(U=>b.includes(U)),ae=W=>p(U=>U.includes(W)?U.filter(ce=>ce!==W):[...U,W]),ve=(W,U,ce)=>{for(const F of si){const y=m.current[F.id];if(!y)continue;const K=y.getBoundingClientRect();if(W>=K.left&&W<=K.right&&U>=K.top&&U<=K.bottom){const me=[...y.querySelectorAll("[data-card]")].filter(Te=>Te.dataset.id!==String(ce));let O=me.length;for(let Te=0;Te<me.length;Te++){const Be=me[Te].getBoundingClientRect();if(U<Be.top+Be.height/2){O=Te;break}}return{status:F.id,index:O}}}return null},G=(W,U)=>{if(W.target.closest("button"))return;const ce=W.clientX,F=W.clientY,y=W.currentTarget;let K=!1,me=null,O=null;const Te=Ge=>{if(!K){if(Math.hypot(Ge.clientX-ce,Ge.clientY-F)<6)return;K=!0;const Ue=y.getBoundingClientRect();O={id:U.id,item:U,w:Ue.width,offX:ce-Ue.left,offY:F-Ue.top}}O={...O,x:Ge.clientX,y:Ge.clientY},z(O),me=ve(Ge.clientX,Ge.clientY,U.id)||me,R(me)},Be=()=>{window.removeEventListener("pointermove",Te),window.removeEventListener("pointerup",Be),K&&me&&V(U,me),z(null),R(null)};window.addEventListener("pointermove",Te),window.addEventListener("pointerup",Be)},V=(W,U)=>{const ce={};si.forEach(me=>{ce[me.id]=(D[me.id]||[]).filter(O=>O.id!==W.id)});const F=ce[U.status]||[];let y;if(b.length){const me=F.filter(be);y=U.index<me.length?F.indexOf(me[U.index]):F.length}else y=Math.max(0,Math.min(U.index,F.length));ce[U.status]=[...F.slice(0,y),{...W,status:U.status},...F.slice(y)];const K=[];si.forEach(me=>(ce[me.id]||[]).forEach((O,Te)=>K.push({id:O.id,status:me.id,position:Te}))),n(me=>me.map(O=>O.id===o?{...O,items:K.map(Te=>({...O.items.find(Be=>Be.id===Te.id),status:Te.status,position:Te.position}))}:O)),_.arrangeDelight(o,K).then(T).catch(T),U.status==="done"&&W.status!=="done"&&f({item:W,date:Fs(),note:""})},oe=async W=>{window.confirm(`Delete "${W.name}" and all its items?`)&&(await _.deleteCollection(W.id),T())},Q=()=>({name:"",type:"text"}),ue=()=>a({id:null,name:"",columns:[Q(),Q()]}),v=W=>a({id:W.id,name:W.name,columns:W.columns.length?W.columns.map(U=>({name:pn(U),type:Ga(U)})):[Q()]}),A=async()=>{const W=d.name.trim();if(!W)return;const U=d.columns.map(ce=>({name:ce.name.trim(),type:ce.type||"text"})).filter(ce=>ce.name);d.id?await _.updateCollection(d.id,{name:W,columns:U}):await _.createCollection({name:W,columns:U}),a(null),T()},P=(W="todo")=>h({id:null,name:"",fields:{},status:W}),se=W=>h({id:W.id,name:W.name,fields:{...W.fields},status:W.status}),le=async()=>{const W=g.name.trim();if(!W||!w)return;const U=g.id?(w.items||[]).find(K=>K.id===g.id):null,ce=(U==null?void 0:U.status)==="done",F={name:W,fields:g.fields,status:g.status};let y;if(g.id?y=await _.updateDelightItem(g.id,F):y=await _.createDelightItem(w.id,F),h(null),await T(),g.status==="done"&&!ce){const K=De(y,w.id,W);f({item:K||{id:g.id,name:W},date:Fs(),note:""})}},De=(W,U,ce)=>{const F=Array.isArray(W)?W.find(K=>K.id===U):null;if(!F)return null;const y=(F.items||[]).filter(K=>K.name===ce&&K.status==="done");return y.length?y[y.length-1]:null},Y=async()=>{var W;if(!((W=x==null?void 0:x.item)!=null&&W.id)){f(null);return}await _.updateDelightItem(x.item.id,{completed_date:x.date||Fs(),completion_note:x.note||""}),f(null),T()},ne=({it:W})=>{const U=w.columns.filter(F=>W.fields[pn(F)]&&!ie(F)),ce=B(W);return t.jsxs("div",{"data-card":!0,"data-id":W.id,onPointerDown:F=>G(F,W),style:fe.itemCard,children:[t.jsxs("div",{style:fe.itemCardTop,children:[t.jsx(wl,{size:13,style:{color:"var(--text-3)",flexShrink:0}}),t.jsx("span",{style:fe.itemName,children:W.name}),t.jsx("button",{onClick:()=>se(W),style:fe.ghostBtn,children:t.jsx(ut,{size:12})}),t.jsx("button",{onClick:()=>j(W.id,W.name),style:fe.ghostBtn,children:t.jsx(Re,{size:13})})]}),U.map(F=>{const y=pn(F),K=W.fields[y];return t.jsxs("div",{style:fe.itemField,children:[t.jsx("span",{style:fe.fieldLabel,children:y}),Ga(F)==="link"?t.jsx("a",{href:/^https?:\/\//i.test(K)?K:`https://${K}`,target:"_blank",rel:"noreferrer",style:{minWidth:0,wordBreak:"break-word",color:Fr},onClick:me=>me.stopPropagation(),children:K}):t.jsx("span",{style:{minWidth:0,wordBreak:"break-word"},children:K})]},y)}),ce.length>0&&t.jsx("div",{style:fe.tagWrap,children:ce.map((F,y)=>t.jsx("span",{style:fe.tag,children:F},y))}),W.status==="done"&&W.completed_date&&t.jsxs("div",{style:fe.doneMeta,children:[t.jsxs("span",{style:fe.doneDate,children:["✓ ",n1(W.completed_date)]}),W.completion_note&&t.jsx("span",{style:fe.doneNote,children:W.completion_note})]})]})};return t.jsxs("div",{style:fe.page,children:[t.jsxs("div",{style:fe.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:fe.eyebrow,children:"Anvil · Delights"}),t.jsx("h1",{style:fe.h1,children:"Delights"}),t.jsx("div",{style:fe.subhead,children:"Books, films, places, food — track what you want to enjoy and how you felt."})]}),t.jsxs("button",{onClick:ue,style:fe.addColBtn,children:[t.jsx(Ze,{size:15})," New list"]})]}),t.jsxs("div",{style:fe.tabs,children:[r.map(W=>t.jsxs("button",{onClick:()=>i(W.id),style:{...fe.tab,...W.id===o?fe.tabOn:{}},children:[W.name,t.jsx("span",{style:fe.tabCount,children:W.items.length})]},W.id)),t.jsx("button",{onClick:ue,style:fe.tabAdd,title:"New list",children:t.jsx(Ze,{size:15})})]}),s?w?t.jsxs("div",{children:[t.jsxs("div",{style:fe.colHead,children:[t.jsx("h2",{style:fe.colTitle,children:w.name}),t.jsxs("div",{style:fe.colActions,children:[t.jsxs("button",{onClick:()=>P(),style:fe.primaryBtn,children:[t.jsx(Ze,{size:14})," Add"]}),t.jsx("button",{onClick:()=>v(w),style:fe.ghostBtn,title:"Edit list & columns",children:t.jsx(cy,{size:15})}),t.jsx("button",{onClick:()=>oe(w),style:fe.ghostBtn,title:"Delete list",children:t.jsx(Re,{size:16})})]})]}),I.length>0&&t.jsxs("div",{style:fe.filterBar,children:[t.jsx("span",{style:fe.filterLabel,children:"Tags"}),t.jsx("button",{onClick:()=>p([]),style:{...fe.filterChip,...b.length===0?fe.filterChipOn:{}},children:"All"}),I.map(W=>t.jsx("button",{onClick:()=>ae(W),style:{...fe.filterChip,...b.includes(W)?fe.filterChipOn:{}},children:W},W))]}),t.jsx("div",{style:{...fe.board,gridTemplateColumns:e?"1fr":"repeat(3, 1fr)"},children:si.map(W=>{const U=(D[W.id]||[]).filter(be),ce=E?U.filter(y=>y.id!==E.id):U,F=k&&k.status===W.id;return t.jsxs("div",{ref:y=>m.current[W.id]=y,style:{...fe.lane,...F?{outline:`2px dashed ${W.color}`,outlineOffset:-2}:{}},children:[t.jsxs("div",{style:fe.laneHead,children:[t.jsx("span",{style:{...fe.laneDot,background:W.color}}),t.jsx("span",{style:fe.laneLabel,children:W.label}),t.jsx("span",{style:fe.laneCount,children:U.length}),t.jsx("button",{onClick:()=>P(W.id),style:fe.laneAdd,title:`Add to ${W.label}`,children:t.jsx(Ze,{size:13})})]}),t.jsxs("div",{style:fe.laneBody,children:[ce.map((y,K)=>t.jsxs("div",{children:[F&&k.index===K&&t.jsx("div",{style:{...fe.insertLine,background:W.color}}),t.jsx(ne,{it:y})]},y.id)),F&&k.index>=ce.length&&t.jsx("div",{style:{...fe.insertLine,background:W.color}}),ce.length===0&&!F&&t.jsx("div",{style:fe.laneEmpty,children:"Drop here"})]})]},W.id)})})]}):t.jsxs("div",{style:fe.empty,children:[t.jsx(Lm,{size:28,color:"var(--text-3)"}),t.jsx("div",{style:{marginTop:10},children:"No lists yet."}),t.jsxs("button",{onClick:ue,style:{...fe.addColBtn,marginTop:14},children:[t.jsx(Ze,{size:15})," Create your first list"]})]}):t.jsx("div",{style:fe.muted,children:"Loading…"}),E&&t.jsx("div",{style:{...fe.ghost,width:E.w,left:E.x-E.offX,top:E.y-E.offY},children:t.jsxs("div",{style:fe.itemCardTop,children:[t.jsx(wl,{size:13,style:{color:"var(--text-3)",flexShrink:0}}),t.jsx("span",{style:fe.itemName,children:E.item.name})]})}),d&&t.jsx("div",{style:fe.overlay,onClick:()=>a(null),children:t.jsxs("div",{style:fe.modal,onClick:W=>W.stopPropagation(),children:[t.jsxs("div",{style:fe.modalHead,children:[t.jsx("span",{style:fe.modalTitle,children:d.id?"Edit list":"New list"}),t.jsx("button",{onClick:()=>a(null),style:fe.iconBtn,children:t.jsx(Re,{size:16})})]}),t.jsx("label",{style:fe.label,children:"List name *"}),t.jsx("input",{autoFocus:!0,value:d.name,onChange:W=>a(U=>({...U,name:W.target.value})),placeholder:"e.g. Gardens, Cafés, Trips…",style:fe.input}),t.jsx("label",{style:fe.label,children:"Columns"}),t.jsx("div",{style:fe.muted2,children:"Name the details you want to track (e.g. Author, Distance, Tag)."}),d.columns.map((W,U)=>t.jsxs("div",{style:fe.colRow,children:[t.jsx("input",{value:W.name,placeholder:`Column ${U+1}`,onChange:ce=>a(F=>{const y=[...F.columns];return y[U]={...y[U],name:ce.target.value},{...F,columns:y}}),style:{...fe.input,marginBottom:0,flex:1}}),t.jsx("select",{value:W.type,onChange:ce=>a(F=>{const y=[...F.columns];return y[U]={...y[U],type:ce.target.value},{...F,columns:y}}),style:fe.colTypeSelect,children:o1.map(ce=>t.jsx("option",{value:ce.id,children:ce.label},ce.id))}),t.jsx("button",{onClick:()=>a(ce=>({...ce,columns:ce.columns.filter((F,y)=>y!==U)})),style:fe.iconBtn,children:t.jsx(Re,{size:14})})]},U)),d.columns.length<6&&t.jsxs("button",{onClick:()=>a(W=>({...W,columns:[...W.columns,Q()]})),style:fe.addColInline,children:[t.jsx(Ze,{size:13})," Add column"]}),t.jsxs("div",{style:fe.modalActions,children:[t.jsx("button",{onClick:()=>a(null),style:fe.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:A,disabled:!d.name.trim(),style:{...fe.saveBtn,...d.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," ",d.id?"Save":"Create"]})]})]})}),g&&w&&t.jsx("div",{style:fe.overlay,onClick:()=>h(null),children:t.jsxs("div",{style:fe.modal,onClick:W=>W.stopPropagation(),children:[t.jsxs("div",{style:fe.modalHead,children:[t.jsx("span",{style:fe.modalTitle,children:g.id?"Edit":`Add to ${w.name}`}),t.jsx("button",{onClick:()=>h(null),style:fe.iconBtn,children:t.jsx(Re,{size:16})})]}),t.jsx("label",{style:fe.label,children:"Name *"}),t.jsx("input",{autoFocus:!0,value:g.name,onChange:W=>h(U=>({...U,name:W.target.value})),onKeyDown:W=>W.key==="Enter"&&le(),placeholder:"Title / name",style:fe.input}),w.columns.map(W=>{const U=pn(W),ce=Ga(W),F=`dl-${w.id}-${U}`,y=Z[U]||[];return t.jsxs("div",{children:[t.jsx("label",{style:fe.label,children:U}),t.jsx("input",{value:g.fields[U]||"",type:ce==="number"?"number":ce==="link"?"url":"text",list:y.length?F:void 0,onChange:K=>h(me=>({...me,fields:{...me.fields,[U]:K.target.value}})),placeholder:ce==="link"?"https://…":U,style:fe.input}),y.length>0&&t.jsx("datalist",{id:F,children:y.map(K=>t.jsx("option",{value:K},K))})]},U)}),t.jsx("label",{style:fe.label,children:"Status"}),t.jsx("div",{style:fe.statusPick,children:si.map(W=>t.jsx("button",{type:"button",onClick:()=>h(U=>({...U,status:W.id})),style:{...fe.statusChip,...g.status===W.id?{background:W.color,color:"#fff",border:`1px solid ${W.color}`}:{}},children:W.label},W.id))}),t.jsxs("div",{style:fe.modalActions,children:[t.jsx("button",{onClick:()=>h(null),style:fe.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:le,disabled:!g.name.trim(),style:{...fe.saveBtn,...g.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," ",g.id?"Save":"Add"]})]})]})}),x&&t.jsx("div",{style:fe.overlay,onClick:()=>f(null),children:t.jsxs("div",{style:{...fe.modal,maxWidth:380},onClick:W=>W.stopPropagation(),children:[t.jsxs("div",{style:fe.modalHead,children:[t.jsx("span",{style:fe.modalTitle,children:"Satisfied! 🎉"}),t.jsx("button",{onClick:()=>f(null),style:fe.iconBtn,children:t.jsx(Re,{size:16})})]}),t.jsxs("div",{style:fe.muted2,children:['"',x.item.name,'" — when did you complete it?']}),t.jsx("label",{style:fe.label,children:"Completed on"}),t.jsx("input",{type:"date",value:x.date,max:Fs(),onChange:W=>f(U=>({...U,date:W.target.value})),style:fe.input}),t.jsx("label",{style:fe.label,children:"Comment (optional)"}),t.jsx("textarea",{value:x.note,onChange:W=>f(U=>({...U,note:W.target.value})),placeholder:"How was it?",style:{...fe.input,minHeight:64,resize:"vertical"}}),t.jsxs("div",{style:fe.modalActions,children:[t.jsx("button",{onClick:()=>f(null),style:fe.cancelBtn,children:"Skip"}),t.jsxs("button",{onClick:Y,style:fe.saveBtn,children:[t.jsx(He,{size:15})," Save"]})]})]})}),t.jsx(tr,{toasts:C,onUndo:L,onDismiss:M})]})}const fe={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},addColBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"none",background:Fr,color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tabs:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16,alignItems:"center"},tab:{display:"inline-flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},tabOn:{background:Fr,color:"#fff",borderColor:Fr},tabCount:{fontSize:10.5,fontWeight:700,background:"rgba(0,0,0,0.12)",borderRadius:9,padding:"1px 6px"},tabAdd:{border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",width:32,height:32,borderRadius:"50%",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},colHead:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:10,marginBottom:12,flexWrap:"wrap"},colTitle:{fontSize:18,fontWeight:700,margin:0,fontFamily:"'Fraunces',Georgia,serif"},colActions:{display:"flex",gap:6,alignItems:"center"},primaryBtn:{display:"inline-flex",alignItems:"center",gap:5,border:"none",background:Fr,color:"#fff",padding:"7px 13px",borderRadius:8,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",borderRadius:6,flexShrink:0},filterBar:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center",marginBottom:14},filterLabel:{fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--text-3)",marginRight:2},filterChip:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"5px 11px",borderRadius:16,fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},filterChipOn:{background:Fr,color:"#fff",borderColor:Fr},board:{display:"grid",gap:12,alignItems:"start"},lane:{background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:12,padding:"10px 10px 12px",minHeight:120,display:"flex",flexDirection:"column"},laneHead:{display:"flex",alignItems:"center",gap:7,padding:"2px 4px 10px"},laneDot:{width:9,height:9,borderRadius:"50%",flexShrink:0},laneLabel:{fontSize:12.5,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--text-2)"},laneCount:{fontSize:10.5,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 6px"},laneAdd:{marginLeft:"auto",border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center",padding:2,borderRadius:6},laneBody:{display:"flex",flexDirection:"column",gap:8,minHeight:40,flex:1},laneEmpty:{fontSize:12,color:"var(--text-3)",fontStyle:"italic",textAlign:"center",padding:"16px 0",border:"1px dashed var(--border)",borderRadius:8},insertLine:{height:3,borderRadius:2,margin:"1px 0"},itemCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"9px 10px",boxShadow:"0 1px 2px rgba(0,0,0,0.05)",cursor:"grab",touchAction:"none",userSelect:"none"},itemCardTop:{display:"flex",alignItems:"center",gap:6},itemName:{flex:1,minWidth:0,fontSize:13.5,fontWeight:700,wordBreak:"break-word"},itemField:{display:"flex",gap:8,fontSize:12,color:"var(--text-2)",marginTop:5,paddingLeft:19},fieldLabel:{fontWeight:700,color:"var(--text-3)",minWidth:64,flexShrink:0},tagWrap:{display:"flex",flexWrap:"wrap",gap:5,marginTop:8,paddingLeft:19},tag:{fontSize:10.5,fontWeight:700,color:Fr,background:"color-mix(in srgb, "+Fr+" 14%, transparent)",border:"1px solid color-mix(in srgb, "+Fr+" 30%, transparent)",borderRadius:12,padding:"2px 8px",whiteSpace:"nowrap"},doneMeta:{marginTop:8,paddingLeft:19,display:"flex",flexDirection:"column",gap:3},doneDate:{fontSize:11,fontWeight:700,color:"#4C9A6B"},doneNote:{fontSize:11.5,color:"var(--text-2)",fontStyle:"italic",wordBreak:"break-word"},ghost:{position:"fixed",zIndex:300,pointerEvents:"none",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"9px 10px",boxShadow:"0 8px 28px rgba(0,0,0,0.28)",opacity:.95,transform:"rotate(1.5deg)"},muted:{fontSize:13,color:"var(--text-3)"},muted2:{fontSize:11.5,color:"var(--text-3)",marginBottom:8},empty:{textAlign:"center",color:"var(--text-3)",padding:"50px 16px",fontSize:14,fontWeight:600,display:"flex",flexDirection:"column",alignItems:"center"},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)",marginBottom:8},colRow:{display:"flex",gap:6,alignItems:"center",marginBottom:8},colTypeSelect:{border:"1px solid var(--border)",borderRadius:9,padding:"9px 8px",fontSize:12.5,fontFamily:"inherit",outline:"none",background:"var(--bg)",color:"var(--text)",flexShrink:0},addColInline:{display:"inline-flex",alignItems:"center",gap:5,border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"7px 12px",borderRadius:8,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},statusPick:{display:"flex",gap:6,flexWrap:"wrap"},statusChip:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 13px",borderRadius:18,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},Sr="#C9772E",sh={Carrot:ny,ShoppingCart:_y,Clapperboard:sy,ShoppingBag:Hm,Fuel:by,Sparkles:ro,Shirt:Ly,WashingMachine:Uy,Zap:ng,Tv:Oy,Droplet:uy,Coffee:ay,Utensils:Gy,Bus:Zx,Train:Py,Plane:Ry,Home:Hi,Heart:Fm,Gift:kl,Book:Kx,Dumbbell:py,Pill:Ay,Phone:By,Wifi:Vy,Gamepad2:my,Music:Ql,Scissors:Nm,PawPrint:Ey,Baby:Vx,GraduationCap:Am,Briefcase:qx,Car:ry,Bike:Qx},bn=({name:e,...r})=>{const n=sh[e]||Hm;return t.jsx(n,{...r})},Ua=["#C9772E","#4C9A6B","#3A7CA5","#8268B0","#C2536B","#C9A227","#D1556E","#5B7C99","#A23E57","#3E9E6B"],Jd=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,cp=Jd(new Date);function s1(e=760){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}function l1(){const e=s1(),r=Ho(),n=rh(),[o,i]=c.useState([]),[s,l]=c.useState([]),[d,a]=c.useState(!1),[g,h]=c.useState(cp),[x,f]=c.useState(()=>{const u=new Date;return new Date(u.getFullYear(),u.getMonth(),1)}),[E,z]=c.useState(null),[k,R]=c.useState(null),[b,p]=c.useState(!1),[m,T]=c.useState("day"),[j,C]=c.useState(()=>Kr(new Date,n)[0]),[L,M]=c.useState("all"),w=c.useCallback(()=>{_.getExpenses().then(u=>{i(u.categories),l(u.logs),a(!0)}).catch(()=>a(!0))},[]);c.useEffect(()=>{w()},[w]);const{deleteItem:D,toasts:ie,handleUndo:B,handleDismiss:I}=er(_.deleteExpenseLog,_.restoreExpenseLog,w),Z=c.useMemo(()=>{const u={};return o.forEach(te=>u[te.id]=te),u},[o]),be=u=>Gi(u,r.code),ae=c.useMemo(()=>s.filter(u=>u.date===g),[s,g]),ve=ae.reduce((u,te)=>u+te.amount,0),G=c.useMemo(()=>{if(m==="day")return ae;if(m==="month"){const[u,te]=Kr(new Date(g+"T00:00"),n);return s.filter(Me=>Me.date>=u&&Me.date<=te)}if(m==="year"){const u=g.slice(0,4);return s.filter(te=>te.date.slice(0,4)===u)}return s},[s,ae,m,g,n]),V=G.reduce((u,te)=>u+te.amount,0),oe=c.useMemo(()=>{const u={};return G.forEach(te=>{u[te.category_id]=(u[te.category_id]||0)+te.amount}),Object.entries(u).map(([te,Me])=>({cat:Z[te],amount:Me})).filter(te=>te.cat).sort((te,Me)=>Me.amount-te.amount)},[G,Z]),Q=u=>Kr(new Date(u+"T00:00"),n)[0],ue=c.useMemo(()=>{const u=new Set(s.map(te=>Q(te.date)));return u.add(Kr(new Date,n)[0]),Array.from(u).sort().reverse().slice(0,12)},[s,n]),v=u=>new Date(u+"T00:00").toLocaleDateString("en-US",{month:"short",year:"numeric"}),A=(u,te)=>Kr(new Date(u+"T00:00"),n,-te)[0],P=u=>L==="all"||u.category_id===Number(L),se=[j,A(j,1),A(j,2)],le=se.map(u=>{const[te,Me]=Kr(new Date(u+"T00:00"),n);return s.filter(Pe=>Pe.date>=te&&Pe.date<=Me&&P(Pe)).reduce((Pe,Se)=>Pe+Se.amount,0)}),[De,Y,ne]=le,W=Y>0?Math.round((De-Y)/Y*100):De>0?100:0,U=W>0?ql:W<0?Xl:Wm,ce=W>0?"#C2536B":W<0?"#4C9A6B":"#9A968C",F=c.useMemo(()=>{const[u,te]=Kr(new Date(j+"T00:00"),n),Me={};return s.filter(Pe=>Pe.date>=u&&Pe.date<=te&&P(Pe)).forEach(Pe=>{Me[Pe.category_id]=(Me[Pe.category_id]||0)+Pe.amount}),Object.entries(Me).map(([Pe,Se])=>({cat:Z[Pe],amount:Se})).filter(Pe=>Pe.cat).sort((Pe,Se)=>Se.amount-Pe.amount)},[s,j,L,Z,n]);let y=0;const K=F.map(u=>{const te=De>0?y/De*100:0;y+=u.amount;const Me=De>0?y/De*100:0;return{...u,start:te,end:Me,pct:De>0?u.amount/De*100:0}}),me=K.length?`conic-gradient(${K.map(u=>`${u.cat.color} ${u.start}% ${u.end}%`).join(", ")})`:"var(--surface-2)",O=c.useMemo(()=>{const u=x,te=(u.getDay()+6)%7,Me=new Date(u.getFullYear(),u.getMonth()+1,0).getDate(),Pe={};s.forEach(Oe=>{Oe.date.slice(0,7)===Jd(u).slice(0,7)&&(Pe[Oe.date]=(Pe[Oe.date]||0)+Oe.amount)});const Se=[];for(let Oe=0;Oe<te;Oe++)Se.push(null);for(let Oe=1;Oe<=Me;Oe++){const St=Jd(new Date(u.getFullYear(),u.getMonth(),Oe));Se.push({date:St,day:Oe,total:Pe[St]||0})}return Se},[x,s]),Te=u=>f(te=>new Date(te.getFullYear(),te.getMonth()+u,1)),Be=x.toLocaleDateString("en-US",{month:"long",year:"numeric"}),Ge=u=>z({cat:u,amount:"",note:""}),Ue=async()=>{const u=parseFloat(E.amount);!u||u<=0||(await _.createExpenseLog({category_id:E.cat.id,amount:u,note:E.note.trim(),date:g}),z(null),w())},it=()=>R({id:null,name:"",icon:"ShoppingBag",color:Ua[o.length%Ua.length]}),ft=u=>R({id:u.id,name:u.name,icon:u.icon,color:u.color}),qe=async()=>{const u=k.name.trim();u&&(k.id?await _.updateExpenseCategory(k.id,{name:u,icon:k.icon,color:k.color}):await _.createExpenseCategory({name:u,icon:k.icon,color:k.color}),R(null),w())},Tt=async u=>{const te=s.filter(Pe=>Pe.category_id===u.id).length,Me=te>0?`Delete "${u.name}"? Its ${te} transaction${te===1?"":"s"} will be moved to "Other".`:`Delete "${u.name}"?`;window.confirm(Me)&&(await _.deleteExpenseCategory(u.id),w())},It=new Date(g+"T00:00").toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"});let kt=0;const pt=oe.map(u=>{const te=V>0?kt/V*100:0;kt+=u.amount;const Me=V>0?kt/V*100:0;return{...u,start:te,end:Me,pct:V>0?u.amount/V*100:0}}),wt=pt.length?`conic-gradient(${pt.map(u=>`${u.cat.color} ${u.start}% ${u.end}%`).join(", ")})`:"var(--surface-2)";return t.jsxs("div",{style:X.page,children:[t.jsx("div",{style:X.head,children:t.jsxs("div",{children:[t.jsx("div",{style:X.eyebrow,children:"Anvil · Expenses"}),t.jsx("h1",{style:X.h1,children:"Expenses"}),t.jsx("div",{style:X.subhead,children:"Log day-to-day spending by category and see where it goes."})]})}),t.jsxs("div",{style:X.totalCard,children:[t.jsxs("div",{style:X.totalLeft,children:[t.jsx(Cl,{size:20,color:Sr}),t.jsxs("div",{children:[t.jsxs("div",{style:X.totalLabel,children:["Total spent ",m==="day"?"today":m==="month"?"this month":m==="year"?"this year":"all time"]}),t.jsx("div",{style:X.totalVal,children:be(V)})]})]}),t.jsx("div",{style:X.scopeRow,children:[["day","Day"],["month","Month"],["year","Year"],["all","All"]].map(([u,te])=>t.jsx("button",{onClick:()=>T(u),style:{...X.scopeBtn,...m===u?X.scopeBtnOn:{}},children:te},u))})]}),t.jsxs("div",{style:{...X.cols,gridTemplateColumns:e?"1fr":"320px 1fr"},children:[t.jsxs("div",{style:X.card,children:[t.jsxs("div",{style:X.calHead,children:[t.jsx("button",{onClick:()=>Te(-1),style:X.calNav,children:t.jsx(dn,{size:16})}),t.jsx("span",{style:X.calTitle,children:Be}),t.jsx("button",{onClick:()=>Te(1),style:X.calNav,children:t.jsx(Nr,{size:16})})]}),t.jsxs("div",{style:X.calGrid,children:[["M","T","W","T","F","S","S"].map((u,te)=>t.jsx("div",{style:X.calDow,children:u},te)),O.map((u,te)=>u===null?t.jsx("div",{},te):t.jsxs("button",{onClick:()=>h(u.date),style:{...X.calCell,...u.date===g?X.calCellOn:{},...u.date===cp&&u.date!==g?X.calCellToday:{}},children:[t.jsx("span",{children:u.day}),u.total>0&&t.jsx("span",{style:{...X.calDot,background:u.date===g?"#fff":Sr}})]},u.date))]})]}),t.jsxs("div",{children:[t.jsxs("div",{style:X.card,children:[t.jsxs("div",{style:X.cardTitleRow,children:[t.jsxs("div",{children:[t.jsx("div",{style:X.cardTitle,children:It}),t.jsx("div",{style:X.cardSub,children:"Tap a category to log an expense for this day."})]}),t.jsx("div",{style:X.dayTotal,children:be(ve)})]}),t.jsxs("div",{style:X.iconGrid,children:[o.map(u=>t.jsxs("div",{style:X.iconCell,children:[t.jsx("button",{onClick:()=>Ge(u),style:{...X.iconBtn,background:u.color+"1A",color:u.color,borderColor:u.color+"44"},children:t.jsx(bn,{name:u.icon,size:22})}),t.jsx("span",{style:X.iconLabel,children:u.name})]},u.id)),t.jsxs("div",{style:X.iconCell,children:[t.jsx("button",{onClick:it,style:X.iconBtnAdd,children:t.jsx(Ze,{size:20})}),t.jsx("span",{style:X.iconLabel,children:"Add"})]})]}),t.jsxs("button",{onClick:()=>p(!0),style:X.manageLink,children:[t.jsx(ut,{size:11})," Customize categories"]}),ae.length>0&&t.jsx("div",{style:X.logList,children:ae.map(u=>{const te=Z[u.category_id];return t.jsxs("div",{style:X.logRow,children:[t.jsx("span",{style:{...X.logIcon,background:((te==null?void 0:te.color)||"#9A968C")+"1A",color:(te==null?void 0:te.color)||"#9A968C"},children:t.jsx(bn,{name:te==null?void 0:te.icon,size:14})}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:X.logCat,children:(te==null?void 0:te.name)||"Deleted category"}),u.note&&t.jsx("div",{style:X.logNote,children:u.note})]}),t.jsx("span",{style:X.logAmt,children:be(u.amount)}),t.jsx("button",{onClick:()=>D(u.id,(te==null?void 0:te.name)||"Expense"),style:X.delBtn,children:t.jsx(Re,{size:14})})]},u.id)})})]}),t.jsxs("div",{style:X.card,children:[t.jsx("div",{style:X.cardTitleRow,children:t.jsxs("div",{children:[t.jsx("div",{style:X.cardTitle,children:"Spending by category"}),t.jsxs("div",{style:X.cardSub,children:[m==="day"?"Today":m==="month"?"This month":m==="year"?"This year":"All time"," — percentage & amount"]})]})}),oe.length===0?t.jsx("div",{style:X.muted,children:"No expenses logged for this period yet."}):t.jsxs("div",{style:X.pieWrap,children:[t.jsxs("div",{style:X.pieChart,children:[t.jsx("div",{style:{...X.pieDisc,background:wt}}),t.jsxs("div",{style:X.pieHole,children:[t.jsx("span",{style:X.pieHoleVal,children:be(V)}),t.jsx("span",{style:X.pieHoleLbl,children:"total"})]})]}),t.jsx("div",{style:X.pieLegend,children:pt.map(u=>t.jsxs("div",{style:X.legendRow,children:[t.jsx("span",{style:{...X.dot,background:u.cat.color}}),t.jsx(bn,{name:u.cat.icon,size:13,style:{color:u.cat.color,flexShrink:0}}),t.jsx("span",{style:X.legendName,children:u.cat.name}),t.jsxs("span",{style:X.legendPct,children:[Math.round(u.pct),"%"]}),t.jsx("span",{style:X.legendAmt,children:be(u.amount)})]},u.cat.id))})]})]}),t.jsxs("div",{style:X.card,children:[t.jsx("div",{style:X.cardTitleRow,children:t.jsxs("div",{children:[t.jsx("div",{style:X.cardTitle,children:"Monthly trend"}),t.jsx("div",{style:X.cardSub,children:"Compare a month against the previous two"})]})}),t.jsx("div",{style:X.tagRow,children:ue.map(u=>t.jsxs("button",{onClick:()=>C(u),style:{...X.tagChip,...j===u?X.tagChipOn:{}},children:[t.jsx(Nd,{size:11})," ",v(u)]},u))}),t.jsxs("div",{style:{...X.tagRow,marginTop:8},children:[t.jsxs("button",{onClick:()=>M("all"),style:{...X.tagChip,...L==="all"?X.tagChipOn:{}},children:[t.jsx(Nd,{size:11})," All categories"]}),o.map(u=>t.jsxs("button",{onClick:()=>M(String(u.id)),style:{...X.tagChip,...L===String(u.id)?X.tagChipOn:{}},children:[t.jsx(bn,{name:u.icon,size:11})," ",u.name]},u.id))]}),t.jsxs("div",{style:{...X.trend3,marginTop:16},children:[t.jsxs("div",{style:X.trendCol,children:[t.jsx("div",{style:X.trendVal,children:be(De)}),t.jsx("div",{style:X.trendLbl,children:v(se[0])})]}),t.jsxs("div",{style:X.trendCol,children:[t.jsx("div",{style:{...X.trendVal,color:"var(--text-2)"},children:be(Y)}),t.jsx("div",{style:X.trendLbl,children:v(se[1])})]}),t.jsxs("div",{style:X.trendCol,children:[t.jsx("div",{style:{...X.trendVal,color:"var(--text-3)"},children:be(ne)}),t.jsx("div",{style:X.trendLbl,children:v(se[2])})]})]}),t.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:14},children:t.jsxs("div",{style:{...X.trendBadge,color:ce,background:ce+"1A"},children:[t.jsx(U,{size:15})," ",W>0?"+":"",W,"% vs ",v(se[1])]})}),t.jsx(a1,{items:[{label:v(se[0]),value:De,color:Sr},{label:v(se[1]),value:Y,color:"var(--text-3)"},{label:v(se[2]),value:ne,color:"var(--text-3)"}],money:be}),t.jsx("div",{style:X.trendDivider}),t.jsxs("div",{style:X.cardSub,children:["Category split for ",v(j)]}),F.length===0?t.jsx("div",{style:X.muted,children:"No expenses logged for this month yet."}):t.jsxs("div",{style:{...X.pieWrap,marginTop:10},children:[t.jsxs("div",{style:X.pieChart,children:[t.jsx("div",{style:{...X.pieDisc,background:me}}),t.jsxs("div",{style:X.pieHole,children:[t.jsx("span",{style:X.pieHoleVal,children:be(De)}),t.jsx("span",{style:X.pieHoleLbl,children:"total"})]})]}),t.jsx("div",{style:X.pieLegend,children:K.map(u=>t.jsxs("div",{style:X.legendRow,children:[t.jsx("span",{style:{...X.dot,background:u.cat.color}}),t.jsx(bn,{name:u.cat.icon,size:13,style:{color:u.cat.color,flexShrink:0}}),t.jsx("span",{style:X.legendName,children:u.cat.name}),t.jsxs("span",{style:X.legendPct,children:[Math.round(u.pct),"%"]}),t.jsx("span",{style:X.legendAmt,children:be(u.amount)})]},u.cat.id))})]})]})]})]}),E&&t.jsx("div",{style:X.overlay,onClick:()=>z(null),children:t.jsxs("div",{style:X.modal,onClick:u=>u.stopPropagation(),children:[t.jsxs("div",{style:X.modalHead,children:[t.jsxs("span",{style:{...X.modalTitle,display:"flex",alignItems:"center",gap:8},children:[t.jsx("span",{style:{...X.iconBadge,background:E.cat.color+"1A",color:E.cat.color},children:t.jsx(bn,{name:E.cat.icon,size:16})}),E.cat.name]}),t.jsx("button",{onClick:()=>z(null),style:X.iconBtnPlain,children:t.jsx(Re,{size:16})})]}),t.jsx("label",{style:X.label,children:"Amount *"}),t.jsx("input",{autoFocus:!0,type:"number",inputMode:"decimal",value:E.amount,onChange:u=>z(te=>({...te,amount:u.target.value})),onKeyDown:u=>u.key==="Enter"&&Ue(),placeholder:"0",style:X.input}),t.jsx("label",{style:X.label,children:"Note (optional)"}),t.jsx("input",{value:E.note,onChange:u=>z(te=>({...te,note:u.target.value})),onKeyDown:u=>u.key==="Enter"&&Ue(),placeholder:"What was it for?",style:X.input}),t.jsxs("div",{style:X.modalActions,children:[t.jsx("button",{onClick:()=>z(null),style:X.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:Ue,disabled:!E.amount,style:{...X.saveBtn,...E.amount?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," Add"]})]})]})}),b&&t.jsx("div",{style:X.overlay,onClick:()=>p(!1),children:t.jsxs("div",{style:X.modal,onClick:u=>u.stopPropagation(),children:[t.jsxs("div",{style:X.modalHead,children:[t.jsx("span",{style:X.modalTitle,children:"Customize categories"}),t.jsx("button",{onClick:()=>p(!1),style:X.iconBtnPlain,children:t.jsx(Re,{size:16})})]}),t.jsx("div",{style:X.manageList,children:o.map(u=>t.jsxs("div",{style:X.manageRow,children:[t.jsx("span",{style:{...X.iconBadge,background:u.color+"1A",color:u.color},children:t.jsx(bn,{name:u.icon,size:15})}),t.jsx("span",{style:{flex:1,fontSize:13.5,fontWeight:600},children:u.name}),t.jsx("button",{onClick:()=>ft(u),style:X.delBtn,children:t.jsx(ut,{size:13})}),t.jsx("button",{onClick:()=>Tt(u),style:X.delBtn,children:t.jsx(Re,{size:14})})]},u.id))}),t.jsxs("button",{onClick:it,style:X.addColInline,children:[t.jsx(Ze,{size:13})," Add category"]})]})}),k&&t.jsx("div",{style:X.overlay,onClick:()=>R(null),children:t.jsxs("div",{style:X.modal,onClick:u=>u.stopPropagation(),children:[t.jsxs("div",{style:X.modalHead,children:[t.jsx("span",{style:X.modalTitle,children:k.id?"Edit category":"New category"}),t.jsx("button",{onClick:()=>R(null),style:X.iconBtnPlain,children:t.jsx(Re,{size:16})})]}),t.jsx("label",{style:X.label,children:"Name *"}),t.jsx("input",{autoFocus:!0,value:k.name,onChange:u=>R(te=>({...te,name:u.target.value})),onKeyDown:u=>u.key==="Enter"&&qe(),placeholder:"e.g. Vegetables, Petrol…",style:X.input}),t.jsx("label",{style:X.label,children:"Color"}),t.jsx("div",{style:X.colorRow,children:Ua.map(u=>t.jsx("button",{onClick:()=>R(te=>({...te,color:u})),style:{...X.colorSwatch,background:u,...k.color===u?X.colorSwatchOn:{}}},u))}),t.jsx("label",{style:X.label,children:"Icon"}),t.jsx("div",{style:X.iconPickGrid,children:Object.keys(sh).map(u=>t.jsx("button",{onClick:()=>R(te=>({...te,icon:u})),style:{...X.iconPick,...k.icon===u?{background:k.color+"22",borderColor:k.color,color:k.color}:{}},children:t.jsx(bn,{name:u,size:17})},u))}),t.jsxs("div",{style:X.modalActions,children:[t.jsx("button",{onClick:()=>R(null),style:X.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:qe,disabled:!k.name.trim(),style:{...X.saveBtn,...k.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," ",k.id?"Save":"Create"]})]})]})}),!d&&t.jsx("div",{style:X.muted,children:"Loading…"}),t.jsx(tr,{toasts:ie,onUndo:B,onDismiss:I})]})}function a1({items:e,money:r}){const n=Math.max(1,...e.map(o=>o.value));return t.jsx("div",{style:X.tbWrap,children:e.map((o,i)=>t.jsxs("div",{style:X.tbRow,children:[t.jsx("div",{style:X.tbLbl,children:o.label}),t.jsx("div",{style:X.tbTrack,children:t.jsx("div",{style:{...X.tbBar,width:`${o.value/n*100}%`,background:o.color}})}),t.jsx("div",{style:X.tbVal,children:r(o.value)})]},i))})}const X={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},totalCard:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:14,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:16,padding:"16px 18px",marginBottom:16,flexWrap:"wrap"},totalLeft:{display:"flex",alignItems:"center",gap:12},totalLabel:{fontSize:12,color:"var(--text-3)",fontWeight:600},totalVal:{fontSize:24,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:2},scopeRow:{display:"flex",gap:6},scopeBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 13px",borderRadius:8,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},scopeBtnOn:{background:Sr,color:"#fff",borderColor:Sr},cols:{display:"grid",gap:16,alignItems:"start"},card:{background:"var(--surface)",borderRadius:16,padding:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)",marginBottom:16},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14,gap:10},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardSub:{fontSize:11.5,color:"var(--text-3)",marginTop:2},dayTotal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap",color:Sr},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"14px 0"},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},calNav:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4},calDow:{fontSize:10.5,fontWeight:700,color:"var(--text-3)",textAlign:"center",padding:"4px 0"},calCell:{position:"relative",border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",borderRadius:8,aspectRatio:"1",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},calCellOn:{background:Sr,color:"#fff",borderColor:Sr,fontWeight:700},calCellToday:{borderColor:Sr,fontWeight:700},calDot:{position:"absolute",bottom:3,width:4,height:4,borderRadius:"50%"},iconGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(64px, 1fr))",gap:10,marginTop:4},iconCell:{display:"flex",flexDirection:"column",alignItems:"center",gap:5},iconBtn:{width:52,height:52,borderRadius:14,border:"1px solid",display:"grid",placeItems:"center",cursor:"pointer"},iconBtnAdd:{width:52,height:52,borderRadius:14,border:"1px dashed var(--border)",background:"none",color:"var(--text-3)",display:"grid",placeItems:"center",cursor:"pointer"},iconLabel:{fontSize:10.5,fontWeight:600,color:"var(--text-2)",textAlign:"center",maxWidth:66,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},manageLink:{display:"inline-flex",alignItems:"center",gap:5,border:"none",background:"none",color:"var(--text-3)",fontSize:11.5,fontWeight:600,cursor:"pointer",marginTop:12,padding:0,fontFamily:"inherit"},logList:{marginTop:14,paddingTop:14,borderTop:"1px solid var(--border)",display:"flex",flexDirection:"column",gap:8},logRow:{display:"flex",alignItems:"center",gap:10},logIcon:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},logCat:{fontSize:13,fontWeight:600},logNote:{fontSize:11,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},logAmt:{fontSize:13.5,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},delBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",flexShrink:0},pieWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap"},pieChart:{position:"relative",width:132,height:132,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:80,height:80,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:14,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:7},dot:{width:9,height:9,borderRadius:3,flexShrink:0},legendName:{flex:1,fontSize:12.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},legendPct:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,width:34,textAlign:"right"},legendAmt:{fontSize:12.5,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:64,textAlign:"right"},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtnPlain:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},iconBadge:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)",marginBottom:8},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},manageList:{display:"flex",flexDirection:"column",gap:6,marginBottom:10,maxHeight:320,overflowY:"auto"},manageRow:{display:"flex",alignItems:"center",gap:10,padding:"6px 2px"},addColInline:{display:"inline-flex",alignItems:"center",gap:5,border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"9px 12px",borderRadius:8,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit",width:"100%",justifyContent:"center"},colorRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:4},colorSwatch:{width:26,height:26,borderRadius:"50%",border:"2px solid transparent",cursor:"pointer",padding:0},colorSwatchOn:{border:"2px solid var(--text)",boxShadow:"0 0 0 2px var(--surface)"},iconPickGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6,marginBottom:4},iconPick:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",borderRadius:9,height:36,display:"grid",placeItems:"center",cursor:"pointer"},tagRow:{display:"flex",gap:6,flexWrap:"wrap"},tagChip:{display:"inline-flex",alignItems:"center",gap:4,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:20,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tagChipOn:{background:Sr,color:"#fff",borderColor:Sr},trendDivider:{height:1,background:"var(--border)",margin:"16px 0 12px"},trend3:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12,gap:8},trendCol:{textAlign:"center",flex:1},trendVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},trendLbl:{fontSize:11,color:"var(--text-3)",marginTop:2},trendBadge:{display:"inline-flex",alignItems:"center",gap:4,fontSize:13,fontWeight:800,padding:"6px 12px",borderRadius:20,width:"fit-content"},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:78,fontSize:11,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},tbTrack:{flex:1,height:14,background:"#F2F0EA",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:64,fontSize:11,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"}},Xs="#3A7CA5",kr="#4C9A6B",Rr="#C2536B",El=[{id:"swing",label:"Swing",color:"#8268B0"},{id:"fno",label:"FnO",color:"#C9772E"},{id:"intraday",label:"Intraday",color:"#3A7CA5"}],d1=e=>El.find(r=>r.id===e)||El[0],lh=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,gp=lh(new Date),c1=e=>new Date(e+"T00:00").toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"});function g1(e=760){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const u1=e=>({id:null,date:e,kind:"swing",instrument:"",pl:"",sl:"",tgt:"",note:""});function p1(){const e=g1(),r=Ho(),n=v=>Gi(v,r.code),[o,i]=c.useState([]),[s,l]=c.useState({}),[d,a]=c.useState(0),[g,h]=c.useState(0),[x,f]=c.useState(0),[E,z]=c.useState(!1),[k,R]=c.useState(gp),[b,p]=c.useState(()=>{const v=new Date;return new Date(v.getFullYear(),v.getMonth(),1)}),[m,T]=c.useState(null),[j,C]=c.useState(""),L=c.useCallback(()=>{_.getTrades().then(v=>{i(v.entries),l(v.learnings||{}),a(v.capital||0),h(v.net_pl||0),f(v.current||0),z(!0)}).catch(()=>z(!0))},[]);c.useEffect(()=>{L()},[L]),c.useEffect(()=>{C(s[k]||"")},[k,s]);const M=c.useMemo(()=>{const v={};return o.forEach(A=>{v[A.date]=(v[A.date]||0)+(Number(A.pl)||0)}),v},[o]),w=o.filter(v=>v.date===k),D=M[k]||0,ie=D>0?"positive":D<0?"negative":"neutral",B=c.useMemo(()=>{const v=b,A=(v.getDay()+6)%7,P=new Date(v.getFullYear(),v.getMonth()+1,0).getDate(),se=[];for(let le=0;le<A;le++)se.push(null);for(let le=1;le<=P;le++){const De=lh(new Date(v.getFullYear(),v.getMonth(),le)),Y=M[De],ne=!!s[De];se.push({date:De,day:le,pl:Y,hasLearning:ne,has:Y!==void 0||ne})}return se},[b,M,s]),I=v=>p(A=>new Date(A.getFullYear(),A.getMonth()+v,1)),Z=b.toLocaleDateString("en-US",{month:"long",year:"numeric"}),be=(v="swing")=>T({...u1(k),kind:v}),ae=v=>T({...v,pl:String(v.pl)}),ve=async()=>{const v={date:m.date,kind:m.kind,instrument:m.instrument.trim(),pl:parseFloat(m.pl)||0,sl:m.sl.trim(),tgt:m.tgt.trim(),note:m.note.trim()};m.id?await _.updateTradeEntry(m.id,v):await _.createTradeEntry(v),T(null),L()},G=async v=>{window.confirm("Delete this trade?")&&(await _.deleteTradeEntry(v.id),L())},V=async()=>{await _.setTradeLearning(k,j),L()},oe=(s[k]||"")!==j,Q=x>=d,ue=g>0?kr:g<0?Rr:"var(--text)";return t.jsxs("div",{style:je.page,children:[t.jsx("div",{style:je.head,children:t.jsxs("div",{children:[t.jsx("div",{style:je.eyebrow,children:"Anvil · Trading Journal"}),t.jsx("h1",{style:je.h1,children:"Trading Journal"}),t.jsx("div",{style:je.subhead,children:"Log every trade and your daily learnings — review and improve."})]})}),t.jsxs("div",{style:je.capStrip,children:[t.jsxs("div",{style:je.capBox,children:[t.jsxs("div",{style:je.capLabel,children:[t.jsx(Zl,{size:13})," Starting capital"]}),t.jsx("div",{style:je.capVal,children:n(d)}),t.jsx("div",{style:je.capHint,children:"Set in Settings → Trading"})]}),t.jsxs("div",{style:je.capBox,children:[t.jsxs("div",{style:je.capLabel,children:[t.jsx(Bm,{size:13})," Net P/L (all-time)"]}),t.jsxs("div",{style:{...je.capVal,color:ue},children:[g>=0?"+":"",n(g)]}),t.jsxs("div",{style:je.capHint,children:[o.length," trade",o.length===1?"":"s"," logged"]})]}),t.jsxs("div",{style:{...je.capBox,...je.capBoxMain,borderColor:Q?kr:Rr},children:[t.jsxs("div",{style:je.capLabel,children:[Q?t.jsx(ql,{size:13,color:kr}):t.jsx(Xl,{size:13,color:Rr})," Current balance"]}),t.jsx("div",{style:{...je.capValBig,color:Q?kr:Rr},children:n(x)}),t.jsx("div",{style:je.capHint,children:Q?"Above starting capital":"Below starting capital"})]})]}),t.jsxs("div",{style:{...je.cols,gridTemplateColumns:e?"1fr":"320px 1fr"},children:[t.jsxs("div",{style:je.card,children:[t.jsxs("div",{style:je.calHead,children:[t.jsx("button",{onClick:()=>I(-1),style:je.calNav,children:t.jsx(dn,{size:16})}),t.jsx("span",{style:je.calTitle,children:Z}),t.jsx("button",{onClick:()=>I(1),style:je.calNav,children:t.jsx(Nr,{size:16})})]}),t.jsxs("div",{style:je.calGrid,children:[["M","T","W","T","F","S","S"].map((v,A)=>t.jsx("div",{style:je.calDow,children:v},A)),B.map((v,A)=>v===null?t.jsx("div",{},A):t.jsxs("button",{onClick:()=>R(v.date),style:{...je.calCell,...v.date===k?je.calCellOn:{},...v.date===gp&&v.date!==k?je.calCellToday:{}},children:[t.jsx("span",{children:v.day}),v.pl!==void 0&&v.pl!==0&&t.jsx("span",{style:{...je.calDot,background:v.date===k?"#fff":v.pl>0?kr:Rr}}),v.pl===void 0&&v.hasLearning&&t.jsx("span",{style:{...je.calDot,background:v.date===k?"#fff":"var(--text-3)"}})]},v.date))]}),t.jsxs("div",{style:je.calLegend,children:[t.jsxs("span",{children:[t.jsx("span",{style:{...je.legDot,background:kr}})," Profit"]}),t.jsxs("span",{children:[t.jsx("span",{style:{...je.legDot,background:Rr}})," Loss"]}),t.jsxs("span",{children:[t.jsx("span",{style:{...je.legDot,background:"var(--text-3)"}})," Learning only"]})]})]}),t.jsxs("div",{children:[t.jsxs("div",{style:je.card,children:[t.jsxs("div",{style:je.cardTitleRow,children:[t.jsxs("div",{children:[t.jsx("div",{style:je.cardTitle,children:c1(k)}),t.jsxs("div",{style:je.cardSub,children:[w.length," trade",w.length===1?"":"s"," this day"]})]}),t.jsxs("div",{style:je.dayPLWrap,children:[t.jsx("span",{style:{...je.sentiment,...ie==="positive"?{background:kr+"1A",color:kr}:ie==="negative"?{background:Rr+"1A",color:Rr}:{background:"var(--hover)",color:"var(--text-3)"}},children:ie==="positive"?"Positive day":ie==="negative"?"Negative day":"No trades"}),t.jsxs("span",{style:{...je.dayPL,color:D>0?kr:D<0?Rr:"var(--text-2)"},children:[D>=0?"+":"",n(D)]})]})]}),t.jsx("div",{style:je.addRow,children:El.map(v=>t.jsxs("button",{onClick:()=>be(v.id),style:{...je.addKindBtn,color:v.color,borderColor:v.color+"55",background:v.color+"12"},children:[t.jsx(Ze,{size:14})," ",v.label]},v.id))}),w.length>0?t.jsx("div",{style:je.tradeList,children:w.map(v=>{const A=d1(v.kind),P=(Number(v.pl)||0)>=0;return t.jsxs("div",{style:je.tradeRow,children:[t.jsx("span",{style:{...je.kindTag,background:A.color+"1A",color:A.color},children:A.label}),t.jsxs("div",{style:je.tradeBody,children:[t.jsxs("div",{style:je.tradeTop,children:[t.jsx("span",{style:je.tradeInstr,children:v.instrument||"—"}),t.jsxs("span",{style:{...je.tradePL,color:P?kr:Rr},children:[P?"+":"",n(Number(v.pl)||0)]})]}),(v.sl||v.tgt||v.note)&&t.jsxs("div",{style:je.tradeMeta,children:[v.sl&&t.jsxs("span",{style:je.metaPill,children:["SL ",v.sl]}),v.tgt&&t.jsxs("span",{style:je.metaPill,children:["TGT ",v.tgt]}),v.note&&t.jsx("span",{style:je.tradeNote,children:v.note})]})]}),t.jsx("button",{onClick:()=>ae(v),style:je.iconGhost,title:"Edit",children:t.jsx(ut,{size:13})}),t.jsx("button",{onClick:()=>G(v),style:je.iconGhost,title:"Delete",children:t.jsx(Kl,{size:13})})]},v.id)})}):t.jsx("div",{style:je.noTrades,children:"No trades logged — you can still record a learning below."})]}),t.jsxs("div",{style:je.card,children:[t.jsxs("div",{style:je.cardTitle,children:[t.jsx(Vl,{size:15,color:Xs})," Daily learning"]}),t.jsx("textarea",{value:j,onChange:v=>C(v.target.value),placeholder:"What did you learn today? Mistakes, what worked, discipline notes…",style:je.learnArea}),t.jsxs("button",{onClick:V,disabled:!oe,style:{...je.saveBtn,...oe?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:14})," Save learning"]})]})]})]}),m&&t.jsx("div",{style:je.overlay,onClick:()=>T(null),children:t.jsxs("div",{style:je.modal,onClick:v=>v.stopPropagation(),children:[t.jsxs("div",{style:je.modalHead,children:[t.jsx("span",{style:je.modalTitle,children:m.id?"Edit trade":"Add trade"}),t.jsx("button",{onClick:()=>T(null),style:je.iconBtnPlain,children:t.jsx(Re,{size:16})})]}),t.jsx("label",{style:je.label,children:"Type"}),t.jsx("div",{style:je.kindPick,children:El.map(v=>t.jsx("button",{type:"button",onClick:()=>T(A=>({...A,kind:v.id})),style:{...je.kindChip,...m.kind===v.id?{background:v.color,color:"#fff",borderColor:v.color}:{}},children:v.label},v.id))}),t.jsx("label",{style:je.label,children:"Instrument / what you traded"}),t.jsx("input",{autoFocus:!0,value:m.instrument,onChange:v=>T(A=>({...A,instrument:v.target.value})),placeholder:"e.g. NIFTY 22000 CE, RELIANCE",style:je.input}),t.jsx("label",{style:je.label,children:"P/L (profit + / loss −)"}),t.jsx("input",{type:"number",value:m.pl,onChange:v=>T(A=>({...A,pl:v.target.value})),placeholder:"e.g. 1200 or -300",style:je.input}),t.jsxs("div",{style:{display:"flex",gap:8},children:[t.jsxs("div",{style:{flex:1},children:[t.jsx("label",{style:je.label,children:"Stop loss (SL)"}),t.jsx("input",{value:m.sl,onChange:v=>T(A=>({...A,sl:v.target.value})),placeholder:"SL",style:je.input})]}),t.jsxs("div",{style:{flex:1},children:[t.jsx("label",{style:je.label,children:"Target (TGT)"}),t.jsx("input",{value:m.tgt,onChange:v=>T(A=>({...A,tgt:v.target.value})),placeholder:"TGT",style:je.input})]})]}),t.jsx("label",{style:je.label,children:"Note (optional)"}),t.jsx("input",{value:m.note,onChange:v=>T(A=>({...A,note:v.target.value})),placeholder:"reason, setup, emotion…",style:je.input}),t.jsxs("div",{style:je.modalActions,children:[t.jsx("button",{onClick:()=>T(null),style:je.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:ve,style:je.saveBtnGreen,children:[t.jsx(He,{size:15})," ",m.id?"Save":"Add"]})]})]})})]})}const je={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:1100,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},capStrip:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:12,marginBottom:18},capBox:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:"13px 16px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},capBoxMain:{borderWidth:2},capLabel:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,fontWeight:600,color:"var(--text-2)"},capVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:4,lineHeight:1.1},capValBig:{fontSize:26,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:4,lineHeight:1.1},capHint:{fontSize:10.5,color:"var(--text-3)",marginTop:4},cols:{display:"grid",gap:16,alignItems:"start"},card:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:16},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calNav:{width:30,height:30,borderRadius:8,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:4},calDow:{fontSize:10,fontWeight:700,color:"var(--text-3)",textAlign:"center",padding:"2px 0"},calCell:{position:"relative",aspectRatio:"1",border:"1px solid transparent",borderRadius:8,background:"var(--bg)",color:"var(--text-2)",fontSize:12.5,fontWeight:600,cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit"},calCellOn:{background:Xs,color:"#fff"},calCellToday:{borderColor:Xs},calDot:{position:"absolute",bottom:4,width:5,height:5,borderRadius:"50%"},calLegend:{display:"flex",gap:12,flexWrap:"wrap",marginTop:12,fontSize:10.5,color:"var(--text-3)",fontWeight:600},legDot:{display:"inline-block",width:7,height:7,borderRadius:"50%",marginRight:4},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:10,marginBottom:12,flexWrap:"wrap"},cardTitle:{display:"flex",alignItems:"center",gap:6,fontSize:15,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardSub:{fontSize:12,color:"var(--text-3)",marginTop:2},dayPLWrap:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:4},sentiment:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:10},dayPL:{fontSize:17,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},addRow:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:12},addKindBtn:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid",borderRadius:9,padding:"7px 12px",fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},tradeList:{display:"flex",flexDirection:"column",gap:8},tradeRow:{display:"flex",alignItems:"flex-start",gap:9,padding:"9px 10px",background:"var(--bg)",border:"1px solid var(--border)",borderRadius:10},kindTag:{fontSize:10.5,fontWeight:800,padding:"3px 8px",borderRadius:7,flexShrink:0,marginTop:1},tradeBody:{flex:1,minWidth:0},tradeTop:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"baseline"},tradeInstr:{fontSize:13.5,fontWeight:700,wordBreak:"break-word"},tradePL:{fontSize:13.5,fontWeight:800,flexShrink:0},tradeMeta:{display:"flex",gap:6,flexWrap:"wrap",marginTop:5,alignItems:"center"},metaPill:{fontSize:10.5,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",borderRadius:6,padding:"2px 7px"},tradeNote:{fontSize:11.5,color:"var(--text-3)",fontStyle:"italic"},iconGhost:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",flexShrink:0},noTrades:{fontSize:12.5,color:"var(--text-3)",fontStyle:"italic",textAlign:"center",padding:"16px 8px",border:"1px dashed var(--border)",borderRadius:8},learnArea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"11px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--bg)",outline:"none",minHeight:90,resize:"vertical",lineHeight:1.55,marginTop:8},saveBtn:{display:"inline-flex",alignItems:"center",gap:6,marginTop:10,border:"none",background:Xs,color:"#fff",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:420,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtnPlain:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)"},kindPick:{display:"flex",gap:6},kindChip:{flex:1,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 0",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtnGreen:{display:"flex",alignItems:"center",gap:6,border:"none",background:kr,color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},ec=[{id:"sandstone",name:"Sandstone",description:"Warm editorial light — the original Anvil look.",dark:!1,swatch:["#F7F6F3","#4C9A6B","#26241F"],vars:{"--bg":"#F7F6F3","--surface":"#FFFFFF","--surface-2":"#FAFAF8","--hover":"#F2F1EC","--border":"#ECEAE3","--text":"#26241F","--text-2":"#6B675E","--text-3":"#9A968C","--accent":"#4C9A6B","--accent-strong":"#26241F","--accent-2":"#3A352C"}},{id:"midnight",name:"Midnight",description:"Deep low-glare dark mode for night owls and focus.",dark:!0,swatch:["#161513","#6FB58C","#ECEAE3"],vars:{"--bg":"#161513","--surface":"#211F1C","--surface-2":"#1B1A17","--hover":"#2B2924","--border":"#34312B","--text":"#ECEAE3","--text-2":"#B6B1A6","--text-3":"#8A857A","--accent":"#6FB58C","--accent-strong":"#2E6F4B","--accent-2":"#245C3E"}},{id:"blossom",name:"Blossom",description:"Soft rose & blush — gentle, warm, and feminine.",dark:!1,swatch:["#FFF5F8","#E0608E","#B23A6B"],vars:{"--bg":"#FFF5F8","--surface":"#FFFFFF","--surface-2":"#FFF0F4","--hover":"#FDE7EE","--border":"#F6D9E2","--text":"#3D2230","--text-2":"#7A5466","--text-3":"#B08799","--accent":"#E0608E","--accent-strong":"#B23A6B","--accent-2":"#9C2F5C"}},{id:"tide",name:"Tide",description:"Calm professional blues — clean and focused.",dark:!1,swatch:["#F1F6FA","#2E86C1","#1C4E73"],vars:{"--bg":"#F1F6FA","--surface":"#FFFFFF","--surface-2":"#ECF3F9","--hover":"#E2EEF6","--border":"#D5E3EE","--text":"#13283A","--text-2":"#4A6275","--text-3":"#8AA0B0","--accent":"#2E86C1","--accent-strong":"#1C4E73","--accent-2":"#163E5C"}},{id:"velocity",name:"Velocity",description:"High-energy sport — crisp slate with electric orange.",dark:!1,swatch:["#F4F5F7","#F4511E","#1F2A37"],vars:{"--bg":"#F4F5F7","--surface":"#FFFFFF","--surface-2":"#EEF0F3","--hover":"#E7EAEE","--border":"#DCE0E6","--text":"#18202B","--text-2":"#515B68","--text-3":"#8B95A1","--accent":"#F4511E","--accent-strong":"#1F2A37","--accent-2":"#16202B"}},{id:"evergreen",name:"Evergreen",description:"Earthy forest greens — grounded and natural.",dark:!1,swatch:["#F2F6F1","#3E8E52","#2A4A30"],vars:{"--bg":"#F2F6F1","--surface":"#FFFFFF","--surface-2":"#ECF2EA","--hover":"#E4EEE2","--border":"#D7E4D3","--text":"#1E2B20","--text-2":"#4F6151","--text-3":"#8AA08C","--accent":"#3E8E52","--accent-strong":"#2A4A30","--accent-2":"#213B26"}},{id:"amethyst",name:"Amethyst",description:"Premium purple & plum — elegant and refined.",dark:!1,swatch:["#F6F4FB","#7A4FE0","#3A2D5C"],vars:{"--bg":"#F6F4FB","--surface":"#FFFFFF","--surface-2":"#F1EDF9","--hover":"#EAE3F6","--border":"#DFD6F0","--text":"#241B36","--text-2":"#5A4E72","--text-3":"#9588AE","--accent":"#7A4FE0","--accent-strong":"#3A2D5C","--accent-2":"#2E2349"}}],up="sandstone",ah="anvil_theme",b1=e=>ec.find(r=>r.id===e)||ec[0];function dh(){try{return localStorage.getItem(ah)||up}catch{return up}}function pi(e,r=!0){const n=b1(e),o=document.documentElement;Object.entries(n.vars).forEach(([s,l])=>o.style.setProperty(s,l)),o.style.colorScheme=n.dark?"dark":"light",o.setAttribute("data-theme",n.id);const i=document.querySelector('meta[name="theme-color"]');if(i&&i.setAttribute("content",n.vars["--surface"]),r)try{localStorage.setItem(ah,n.id)}catch{}return n.id}const m1=e=>e%10===1&&e!==11?"st":e%10===2&&e!==12?"nd":e%10===3&&e!==13?"rd":"th";function h1(e=560){const[r,n]=c.useState(()=>window.innerWidth<=e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<=e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}function f1({screens:e,order:r,hidden:n,themeId:o,currency:i,monthStartDay:s,ticker:l,defaultScreen:d,onSetDefault:a,onSaveSidebar:g,onPreviewTheme:h,onCommitTheme:x,onSelectCurrency:f,onSelectMonthStartDay:E,onSaveTicker:z,onClose:k}){const[R,b]=c.useState("sidebar"),[p,m]=c.useState(()=>r.map(O=>({id:O,hidden:n.includes(O)}))),[T,j]=c.useState(o),[C,L]=c.useState(""),[M,w]=c.useState(!1),[D,ie]=c.useState(""),[B,I]=c.useState(!1),Z=h1(),[be,ae]=c.useState(!!(l!=null&&l.enabled)),[ve,G]=c.useState(()=>{const O=Array.isArray(l==null?void 0:l.statements)?l.statements.slice(0,5):[];return O.length?O:[""]}),[V,oe]=c.useState((l==null?void 0:l.speed)??60),[Q,ue]=c.useState((l==null?void 0:l.delay)??3),[v,A]=c.useState(!1),P=(O,Te)=>G(Be=>Be.map((Ge,Ue)=>Ue===O?Te:Ge)),se=()=>G(O=>O.length<5?[...O,""]:O),le=O=>G(Te=>Te.length>1?Te.filter((Be,Ge)=>Ge!==O):Te),De=()=>{const O=ve.map(Te=>Te.trim()).filter(Boolean).slice(0,5);z({enabled:be,statements:O,speed:Number(V),delay:Number(Q)}),A(!0),setTimeout(()=>A(!1),1500)};c.useEffect(()=>{_.getSetting("golden_music").then(O=>L((O==null?void 0:O.value)||"")).catch(()=>{})},[]);const Y=()=>{_.setSetting("golden_music",C.trim()).then(()=>{w(!0),setTimeout(()=>w(!1),1500)}).catch(()=>{})};c.useEffect(()=>{_.getSetting("trading_capital").then(O=>ie((O==null?void 0:O.value)||"")).catch(()=>{})},[]);const ne=()=>{_.setSetting("trading_capital",String(parseFloat(D)||0)).then(()=>{I(!0),setTimeout(()=>I(!1),1500)}).catch(()=>{})},W=O=>{j(O),h(O)},U=p.filter(O=>!O.hidden).length,ce=(O,Te)=>{const Be=O+Te;if(Be<0||Be>=p.length)return;const Ge=[...p];[Ge[O],Ge[Be]]=[Ge[Be],Ge[O]],m(Ge)},F=O=>{const Te=p[O];if(!Te.hidden&&U<=1)return;const Be=[...p];Be[O]={...Te,hidden:!Te.hidden},m(Be)},y=()=>{g(p.map(O=>O.id),p.filter(O=>O.hidden).map(O=>O.id))},K=Z?{...ze.overlay,padding:0}:ze.overlay,me=Z?{...ze.modal,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"100%",borderRadius:0,border:"none"}:ze.modal;return t.jsx("div",{style:K,onClick:k,children:t.jsxs("div",{style:me,onClick:O=>O.stopPropagation(),children:[t.jsxs("div",{style:ze.head,children:[t.jsx("div",{style:ze.title,children:"Settings"}),t.jsx("button",{onClick:k,style:ze.closeBtn,children:t.jsx(Re,{size:18})})]}),t.jsxs("div",{style:ze.tabs,children:[t.jsxs("button",{onClick:()=>b("sidebar"),style:{...ze.tab,...R==="sidebar"?ze.tabOn:{}},children:[t.jsx(ky,{size:15})," Configure sidebar"]}),t.jsxs("button",{onClick:()=>b("themes"),style:{...ze.tab,...R==="themes"?ze.tabOn:{}},children:[t.jsx(zy,{size:15})," Themes"]}),t.jsxs("button",{onClick:()=>b("currency"),style:{...ze.tab,...R==="currency"?ze.tabOn:{}},children:[t.jsx(dy,{size:15})," Currency"]}),t.jsxs("button",{onClick:()=>b("music"),style:{...ze.tab,...R==="music"?ze.tabOn:{}},children:[t.jsx(Ql,{size:15})," Music"]}),t.jsxs("button",{onClick:()=>b("reminders"),style:{...ze.tab,...R==="reminders"?ze.tabOn:{}},children:[t.jsx(Mm,{size:15})," Reminders"]})]}),t.jsx("div",{style:ze.body,children:R==="sidebar"?t.jsxs(t.Fragment,{children:[t.jsxs("p",{style:ze.hint,children:["Reorder with the arrows, hide ones you don't use, and tap ",t.jsx(Hi,{size:11,style:{verticalAlign:"-1px"}})," to set the screen that opens on launch."]}),t.jsx("div",{style:ze.list,children:p.map((O,Te)=>{const Be=e[O.id],Ge=Be.icon,Ue=d===O.id;return t.jsxs("div",{style:{...ze.row,opacity:O.hidden?.5:1,...Ue?{borderColor:"var(--accent)"}:{}},children:[t.jsx("span",{style:ze.rowNum,children:Te+1}),t.jsx(Ge,{size:16}),t.jsxs("span",{style:ze.rowLabel,children:[Be.label,Ue&&t.jsx("span",{style:ze.defaultTag,children:"default"})]}),t.jsx("button",{onClick:()=>a(O.id),title:Ue?"Opens on launch":"Set as default",style:{...ze.iconBtn,...Ue?{color:"var(--accent)"}:{}},children:t.jsx(Hi,{size:15})}),t.jsx("button",{onClick:()=>F(Te),title:O.hidden?"Show":"Hide",style:{...ze.iconBtn,...O.hidden?{}:{color:"var(--accent)"}},children:O.hidden?t.jsx(_d,{size:15}):t.jsx(jl,{size:15})}),t.jsx("button",{onClick:()=>ce(Te,-1),disabled:Te===0,style:{...ze.iconBtn,opacity:Te===0?.3:1},children:t.jsx(Dm,{size:15})}),t.jsx("button",{onClick:()=>ce(Te,1),disabled:Te===p.length-1,style:{...ze.iconBtn,opacity:Te===p.length-1?.3:1},children:t.jsx(Zi,{size:15})})]},O.id)})}),t.jsxs("button",{onClick:y,style:ze.saveBtn,children:[t.jsx(He,{size:15})," Save sidebar"]})]}):R==="currency"?t.jsxs(t.Fragment,{children:[t.jsx("p",{style:ze.hint,children:"Choose the currency used across Wallet and Worth. Applies instantly."}),t.jsx("div",{style:ze.list,children:Gd.map(O=>{const Te=O.code===i;return t.jsxs("button",{onClick:()=>f(O.code),style:{...ze.row,cursor:"pointer",textAlign:"left",width:"100%",...Te?{borderColor:"var(--accent)"}:{}},children:[t.jsx("span",{style:ze.curSymbol,children:O.symbol}),t.jsxs("span",{style:ze.rowLabel,children:[O.label," ",t.jsx("span",{style:ze.curCode,children:O.code})]}),Te&&t.jsx("span",{style:ze.themeCheck,children:t.jsx(He,{size:13})})]},O.code)})}),t.jsx("div",{style:ze.subDivider}),t.jsx("div",{style:ze.fieldLbl,children:"Month starts on"}),t.jsx("p",{style:ze.hint,children:'If your salary lands on the 25th, set this to 25 — Wallet and Expenses will treat each "month" as running 25th to 24th instead of calendar month.'}),t.jsx("select",{value:s,onChange:O=>E(Number(O.target.value)),style:ze.musicInput,children:Array.from({length:28},(O,Te)=>Te+1).map(O=>t.jsx("option",{value:O,children:O===1?"1st (calendar month)":`${O}${m1(O)}`},O))}),t.jsx("div",{style:ze.subDivider}),t.jsx("div",{style:ze.fieldLbl,children:"Trading capital"}),t.jsxs("p",{style:ze.hint,children:["Your starting capital for the ",t.jsx("b",{children:"Trading Journal"}),". The page shows this plus your all-time net P/L — green when in profit, red when below."]}),t.jsx("input",{type:"number",value:D,onChange:O=>ie(O.target.value),placeholder:"e.g. 100000",style:ze.musicInput}),t.jsxs("button",{onClick:ne,style:ze.saveBtn,children:[t.jsx(He,{size:15})," ",B?"Saved":"Save capital"]})]}):R==="music"?t.jsxs(t.Fragment,{children:[t.jsxs("p",{style:ze.hint,children:["Paste a YouTube link to play softly while you write in the ",t.jsx("b",{children:"Golden Book"}),". It plays only on that screen (audio only)."]}),t.jsx("input",{value:C,onChange:O=>L(O.target.value),placeholder:"https://youtube.com/watch?v=…",style:ze.musicInput}),t.jsxs("button",{onClick:Y,style:ze.saveBtn,children:[t.jsx(He,{size:15})," ",M?"Saved":"Save music"]})]}):R==="reminders"?t.jsxs(t.Fragment,{children:[t.jsx("p",{style:ze.hint,children:"Up to 5 reminders scroll across the top of every screen — a gentle nudge toward your goals."}),t.jsxs("button",{onClick:()=>ae(O=>!O),style:{...ze.row,cursor:"pointer",width:"100%",justifyContent:"space-between",...be?{borderColor:"var(--accent)"}:{}},children:[t.jsx("span",{style:ze.rowLabel,children:"Show reminder banner"}),t.jsx("span",{style:{...ze.switch,...be?ze.switchOn:{}},children:be?"On":"Off"})]}),t.jsxs("div",{style:{marginTop:14},children:[t.jsxs("div",{style:ze.fieldLbl,children:["Reminders (",ve.filter(O=>O.trim()).length,"/5)"]}),ve.map((O,Te)=>t.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[t.jsx("input",{value:O,onChange:Be=>P(Te,Be.target.value),maxLength:120,placeholder:`Reminder ${Te+1}`,style:{...ze.musicInput,marginBottom:0}}),t.jsx("button",{onClick:()=>le(Te),style:ze.iconBtn,title:"Remove",children:t.jsx(Re,{size:15})})]},Te)),ve.length<5&&t.jsxs("button",{onClick:se,style:ze.addRowBtn,children:[t.jsx(Ze,{size:14})," Add reminder"]})]}),t.jsxs("div",{style:{marginTop:16},children:[t.jsxs("div",{style:ze.sliderHead,children:[t.jsx("span",{style:ze.fieldLbl,children:"Scroll speed"}),t.jsxs("span",{style:ze.sliderVal,children:[V," px/s"]})]}),t.jsx("input",{type:"range",min:20,max:200,step:5,value:V,onChange:O=>oe(O.target.value),style:ze.range})]}),t.jsxs("div",{style:{marginTop:12},children:[t.jsxs("div",{style:ze.sliderHead,children:[t.jsx("span",{style:ze.fieldLbl,children:"Delay between reminders"}),t.jsxs("span",{style:ze.sliderVal,children:[Q,"s"]})]}),t.jsx("input",{type:"range",min:0,max:15,step:1,value:Q,onChange:O=>ue(O.target.value),style:ze.range})]}),t.jsxs("button",{onClick:De,style:{...ze.saveBtn,marginTop:16},children:[t.jsx(He,{size:15})," ",v?"Saved":"Save reminders"]})]}):t.jsxs(t.Fragment,{children:[t.jsxs("p",{style:ze.hint,children:["Tap a theme to preview it live, then hit ",t.jsx("b",{children:"Apply theme"})," to keep it."]}),t.jsx("div",{style:ze.themeGrid,children:ec.map(O=>{const Te=O.id===T;return t.jsxs("button",{onClick:()=>W(O.id),style:{...ze.themeCard,...Te?ze.themeCardOn:{}},children:[t.jsxs("div",{style:ze.swatchRow,children:[O.swatch.map((Be,Ge)=>t.jsx("span",{style:{...ze.swatch,background:Be}},Ge)),Te&&t.jsx("span",{style:ze.themeCheck,children:t.jsx(He,{size:13})})]}),t.jsxs("div",{style:ze.themeName,children:[O.name,O.dark?t.jsx("span",{style:ze.darkTag,children:"Dark"}):null]}),t.jsx("div",{style:ze.themeDesc,children:O.description})]},O.id)})}),t.jsxs("button",{onClick:()=>x(T),disabled:T===o,style:{...ze.saveBtn,...T===o?ze.saveBtnDisabled:{}},children:[t.jsx(He,{size:15})," ",T===o?"Theme applied":"Apply theme"]})]})})]})})}const ze={overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",color:"var(--text)",borderRadius:16,width:460,maxWidth:"100%",maxHeight:"88vh",display:"flex",flexDirection:"column",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)",overflow:"hidden"},head:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 18px",borderBottom:"1px solid var(--border)",flexShrink:0},title:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},tabs:{display:"flex",flexWrap:"wrap",gap:6,padding:"12px 18px 0",flexShrink:0},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"transparent"},body:{padding:"16px 18px 20px",overflowY:"auto",overflowX:"hidden",flex:1,minHeight:0},hint:{fontSize:12.5,color:"var(--text-3)",lineHeight:1.5,margin:"0 0 14px"},list:{display:"flex",flexDirection:"column",gap:6},row:{display:"flex",alignItems:"center",gap:10,padding:"9px 11px",background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:9},rowNum:{fontSize:11,fontWeight:700,color:"var(--text-3)",width:16,textAlign:"center"},rowLabel:{flex:1,fontSize:13.5,fontWeight:500,display:"flex",alignItems:"center",gap:7},defaultTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--accent)",background:"color-mix(in srgb, var(--accent) 14%, transparent)",padding:"1px 6px",borderRadius:6},curSymbol:{width:22,textAlign:"center",fontSize:15,fontWeight:700,color:"var(--text)"},curCode:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginLeft:4},iconBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},saveBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:7,width:"100%",marginTop:16,border:"none",background:"var(--accent)",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer"},saveBtnDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"default"},musicInput:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",marginBottom:12},switch:{fontSize:12,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:20,padding:"3px 12px",minWidth:44,textAlign:"center"},switchOn:{background:"var(--accent)",color:"#fff"},fieldLbl:{fontSize:12,fontWeight:700,color:"var(--text-2)",marginBottom:7},subDivider:{height:1,background:"var(--border)",margin:"18px 0 14px"},addRowBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"9px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},sliderHead:{display:"flex",justifyContent:"space-between",alignItems:"baseline"},sliderVal:{fontSize:12,fontWeight:700,color:"var(--accent)"},range:{width:"100%",accentColor:"var(--accent)",cursor:"pointer"},themeGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},themeCard:{textAlign:"left",border:"2px solid var(--border)",background:"var(--surface-2)",borderRadius:12,padding:12,cursor:"pointer",display:"flex",flexDirection:"column",gap:6,outline:"none",WebkitTapHighlightColor:"transparent",transition:"border-color .15s ease, box-shadow .15s ease"},themeCardOn:{borderColor:"var(--accent)",boxShadow:"0 0 0 3px color-mix(in srgb, var(--accent) 25%, transparent)"},swatchRow:{display:"flex",alignItems:"center",gap:5,position:"relative"},swatch:{width:22,height:22,borderRadius:"50%",border:"1px solid rgba(0,0,0,0.08)"},themeCheck:{marginLeft:"auto",width:20,height:20,borderRadius:"50%",background:"var(--accent)",color:"#fff",display:"grid",placeItems:"center"},themeName:{fontSize:14,fontWeight:700,display:"flex",alignItems:"center",gap:6},darkTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",background:"var(--hover)",color:"var(--text-2)",padding:"1px 6px",borderRadius:6},themeDesc:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.4}},x1=`
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
`;function y1({statements:e,speed:r=60,delay:n=3}){const o=c.useMemo(()=>(e||[]).map(a=>(a||"").trim()).filter(Boolean).slice(0,5),[e]),[i,s]=c.useState(0),l=c.useRef(null),d=c.useRef(null);return c.useEffect(()=>{s(0)},[o]),c.useEffect(()=>{if(!o.length)return;const a=l.current,g=d.current;if(!a||!g)return;const h=a.offsetWidth,x=g.offsetWidth,f=Math.max(10,Number(r)||60),E=Math.max(2500,(h+x)/f*1e3),z=g.animate([{transform:`translateX(${h}px)`},{transform:`translateX(${-x}px)`}],{duration:E,easing:"linear",fill:"both"});let k;const R=()=>{k=setTimeout(()=>s(b=>(b+1)%o.length),Math.max(0,Number(n)||0)*1e3)};return z.addEventListener("finish",R),()=>{z.cancel(),z.removeEventListener("finish",R),clearTimeout(k)}},[i,o,r,n]),o.length?t.jsxs("div",{style:go.bar,"aria-label":"Reminders",children:[t.jsx("style",{children:x1}),t.jsx("div",{className:"anvil-tick-glow",style:go.icon,children:t.jsx("span",{className:"anvil-tick-pulse",style:{display:"grid",placeItems:"center"},children:t.jsx(Mm,{size:15})})}),t.jsxs("div",{ref:l,style:go.viewport,children:[t.jsx("span",{className:"anvil-tick-shimmer",style:go.shimmer}),t.jsx("div",{className:"anvil-tick-float",style:go.floatWrap,children:t.jsx("div",{ref:d,style:go.text,children:o[i%o.length]},i)})]})]}):null}const go={bar:{display:"flex",alignItems:"center",height:36,flexShrink:0,overflow:"hidden",borderBottom:"1px solid var(--border)",background:"color-mix(in srgb, var(--accent) 12%, var(--surface))"},icon:{display:"grid",placeItems:"center",width:42,height:"100%",flexShrink:0,color:"#fff",background:"var(--accent)",zIndex:2},viewport:{position:"relative",flex:1,height:"100%",overflow:"hidden",display:"flex",alignItems:"center"},shimmer:{position:"absolute",top:0,bottom:0,left:0,width:"22%",background:"linear-gradient(100deg, transparent, color-mix(in srgb, var(--accent) 22%, transparent), transparent)",pointerEvents:"none",zIndex:1},floatWrap:{display:"inline-flex",alignItems:"center",willChange:"transform"},text:{whiteSpace:"nowrap",fontSize:13.5,fontWeight:700,color:"var(--text)",letterSpacing:"0.01em",willChange:"transform",paddingLeft:4}};pi(dh(),!1);const tc="anvil_default_screen",pp=()=>{try{return localStorage.getItem(tc)}catch{return null}},On={dashboard:{label:"Dashboard",icon:jy,component:e0},kickstart:{label:"Kickstart",icon:$m,component:Mv},golden:{label:"Golden Book",icon:gy,component:_v},habits:{label:"Habits",icon:Pd,component:y0},quadrant:{label:"Quadrant",icon:Zc,component:i0},goals:{label:"Goals",icon:rg,component:p0},grove:{label:"Grove",icon:Od,component:lv},worth:{label:"Rewards",icon:yy,component:mv},vault:{label:"Wallet",icon:Zl,component:Sv},expenses:{label:"Expenses",icon:Cl,component:l1},trading:{label:"Trading Journal",icon:oy,component:p1},journal:{label:"Journal",icon:Vl,component:D0},revision:{label:"Revision",icon:Pm,component:G0},affirmations:{label:"Affirmations",icon:ro,component:Y0},skills:{label:"Skills",icon:Am,component:R0},spiritual:{label:"Spiritual",icon:wi,component:W0},mindscape:{label:"Mindscape",icon:Rm,component:Yv},achievements:{label:"Achievements",icon:Pr,component:t1},delight:{label:"Delights",icon:Lm,component:i1}},ch=["dashboard","kickstart","golden","habits","quadrant","goals","grove","journal","revision","affirmations","skills","spiritual","mindscape","achievements","delight","worth","vault","expenses","trading"];function Ms(e){const r=ch.filter(i=>On[i]),o=[...(Array.isArray(e)?e:[]).filter(i=>On[i])];return r.forEach(i=>{o.includes(i)||o.push(i)}),o}function v1(){const[e,r]=c.useState(()=>window.innerWidth<720);return c.useEffect(()=>{const n=()=>r(window.innerWidth<720);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}function j1(){const[e,r]=c.useState(()=>{const P=pp();return P&&On[P]?P:"habits"}),[n,o]=c.useState(()=>pp()||"habits"),[i,s]=c.useState(!1),[l,d]=c.useState(null),[a,g]=c.useState(!1),[h,x]=c.useState(!1),[f,E]=c.useState(dh()),[z,k]=c.useState($o()),[R,b]=c.useState(Xd()),[p,m]=c.useState({enabled:!1,statements:[],speed:60,delay:3}),[T,j]=c.useState(()=>Ms(ch)),[C,L]=c.useState([]),M=v1(),w=c.useRef(e);c.useEffect(()=>{w.current=e},[e]),c.useEffect(()=>{if(!l)return;const P=10,se=new Set(["kickstart","mindscape"]),le=setInterval(()=>{const De=w.current;!document.hidden&&De&&!se.has(De)&&_.addScreenTime(De,P).catch(()=>{})},P*1e3);return()=>clearInterval(le)},[l]),c.useEffect(()=>{let P=!1;const se=()=>{Hd(),d(null)};window.addEventListener("anvil-unauthorized",se);const le=new URLSearchParams(window.location.search).get("login");return le&&(Ky(le),window.history.replaceState({},"",window.location.pathname)),Um()?_.me().then(De=>{P||d(De)}).catch(()=>{}).finally(()=>{P||g(!0)}):g(!0),()=>{P=!0,window.removeEventListener("anvil-unauthorized",se)}},[]),c.useEffect(()=>{l&&(_.getSetting("theme").then(P=>{P!=null&&P.value&&E(pi(P.value))}).catch(()=>{}),_.getSetting("currency").then(P=>{P!=null&&P.value&&k(vu(P.value))}).catch(()=>{}),_.getSetting("month_start_day").then(P=>{P!=null&&P.value&&b(Vu(P.value))}).catch(()=>{}),_.getSetting("ticker").then(P=>{P!=null&&P.value&&m(se=>({...se,...P.value}))}).catch(()=>{}),_.getSetting("default_screen").then(P=>{if(P!=null&&P.value&&On[P.value]){o(P.value);try{localStorage.setItem(tc,P.value)}catch{}}}).catch(()=>{}),_.getSetting("sidebar_order").then(P=>{Array.isArray(P==null?void 0:P.value)&&j(Ms(P.value))}).catch(()=>{}),_.getSetting("sidebar_hidden").then(P=>{Array.isArray(P==null?void 0:P.value)&&L(P.value)}).catch(()=>{}))},[l]);function D(P){r(P),s(!1)}const ie=()=>{Hd(),d(null)},B=P=>{pi(P,!1)},I=P=>{E(pi(P)),_.setSetting("theme",P).catch(()=>{}),x(!1)},Z=()=>{pi(f,!1),x(!1)},be=P=>{k(vu(P)),_.setSetting("currency",P).catch(()=>{})},ae=P=>{b(Vu(P)),_.setSetting("month_start_day",Number(P)).catch(()=>{})},ve=P=>{m(P),_.setSetting("ticker",P).catch(()=>{})},G=P=>{o(P);try{localStorage.setItem(tc,P)}catch{}_.setSetting("default_screen",P).catch(()=>{})},V=(P,se)=>{if(j(Ms(P)),L(se),x(!1),_.setSetting("sidebar_order",P).catch(()=>{}),_.setSetting("sidebar_hidden",se).catch(()=>{}),se.includes(e)){const le=Ms(P).find(De=>!se.includes(De));le&&r(le)}},oe=T.filter(P=>!C.includes(P));if(!a)return t.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",fontFamily:"'Inter',system-ui,sans-serif",color:"var(--text-3)"},children:"Loading…"});if(!l)return t.jsx(hv,{});const Q=On[e],ue=Q.component,v=()=>t.jsx("div",{style:rt.navItems,children:oe.map(P=>{const se=On[P];if(!se)return null;const le=se.icon,De=e===P;return t.jsxs("button",{onClick:()=>D(P),title:se.label,style:{...rt.navItem,...De?rt.navItemOn:{}},children:[t.jsx(le,{size:18}),t.jsx("span",{style:rt.navLabel,children:se.label})]},P)})}),A=()=>t.jsxs("div",{style:rt.footerWrap,children:[t.jsxs("button",{onClick:()=>x(!0),style:rt.settingsBtn,title:"Settings",children:[t.jsx(Om,{size:17}),t.jsx("span",{children:"Settings"})]}),t.jsxs("div",{style:rt.userFooter,children:[t.jsxs("div",{style:rt.userInfo,children:[t.jsx("div",{style:rt.userAvatar,children:(l.name||l.email||"?").charAt(0).toUpperCase()}),t.jsxs("div",{style:{minWidth:0},children:[t.jsx("div",{style:rt.userName,children:l.name||"You"}),t.jsx("div",{style:rt.userEmail,children:l.email})]})]}),t.jsx("button",{onClick:ie,style:rt.logoutBtn,title:"Sign out",children:t.jsx(Sy,{size:16})})]})]});return t.jsxs("div",{style:rt.shell,children:[!M&&t.jsxs("nav",{style:rt.nav,children:[t.jsxs("div",{style:rt.brand,children:[t.jsx("div",{style:rt.brandLogo,children:"B"}),t.jsx("span",{style:rt.brandName,children:"Anvil"})]}),t.jsx(v,{}),t.jsx(A,{})]}),M&&i&&t.jsx("div",{style:rt.overlay,onClick:()=>s(!1),children:t.jsxs("nav",{style:rt.drawer,onClick:P=>P.stopPropagation(),children:[t.jsxs("div",{style:rt.drawerHeader,children:[t.jsxs("div",{style:rt.brand,children:[t.jsx("div",{style:rt.brandLogo,children:"B"}),t.jsx("span",{style:rt.brandName,children:"Anvil"})]}),t.jsx("button",{style:rt.closeBtn,onClick:()=>s(!1),children:t.jsx(Re,{size:20})})]}),t.jsx("div",{style:rt.drawerNav,children:t.jsx(v,{})}),t.jsx(A,{})]})}),t.jsxs("div",{style:rt.content,children:[M&&t.jsxs("div",{style:rt.topBar,children:[t.jsx("button",{style:rt.menuBtn,onClick:()=>s(!0),children:t.jsx(Jc,{size:22})}),t.jsx("span",{style:rt.topBarTitle,children:Q.label}),t.jsx("div",{style:{width:38}})]}),p.enabled&&t.jsx(y1,{statements:p.statements,speed:p.speed,delay:p.delay}),t.jsx("main",{style:rt.main,children:t.jsx(ue,{onNavigate:D})})]}),h&&t.jsx(f1,{screens:On,order:T,hidden:C,themeId:f,currency:z,monthStartDay:R,ticker:p,defaultScreen:n,onSetDefault:G,onSaveSidebar:V,onPreviewTheme:B,onCommitTheme:I,onSelectCurrency:be,onSelectMonthStartDay:ae,onSaveTicker:ve,onClose:Z})]})}const rt={shell:{display:"flex",height:"100vh",overflow:"hidden",fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)"},nav:{width:200,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column",padding:"20px 10px",gap:2,overflowY:"auto",overflowX:"hidden"},brand:{display:"flex",alignItems:"center",gap:9,padding:"6px 10px 20px",borderBottom:"1px solid var(--border)",marginBottom:8},brandLogo:{width:30,height:30,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:14,fontWeight:800,fontFamily:"'Fraunces', Georgia, serif",flexShrink:0},brandName:{fontSize:16,fontWeight:700,letterSpacing:"-0.01em",color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},navItems:{display:"flex",flexDirection:"column",gap:2},navItem:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},navItemOn:{background:"var(--hover)",color:"var(--text)",fontWeight:700},footerWrap:{marginTop:"auto",paddingTop:8,flexShrink:0},settingsBtn:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},userFooter:{marginTop:4,paddingTop:12,borderTop:"1px solid var(--border)",display:"flex",alignItems:"center",gap:8},userInfo:{display:"flex",alignItems:"center",gap:8,flex:1,minWidth:0},userAvatar:{width:30,height:30,borderRadius:"50%",background:"#8268B0",color:"#fff",display:"grid",placeItems:"center",fontSize:13,fontWeight:700,flexShrink:0},userName:{fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},userEmail:{fontSize:11,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},logoutBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",padding:7,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},navLabel:{flex:1},content:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},main:{flex:1,overflowY:"auto",overflowX:"hidden"},topBar:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",background:"var(--surface)",borderBottom:"1px solid var(--border)",flexShrink:0},topBarTitle:{fontSize:16,fontWeight:700,color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},menuBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text)",padding:8,borderRadius:8,display:"grid",placeItems:"center"},overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.35)",zIndex:100,display:"flex"},drawer:{width:220,background:"var(--surface)",height:"100%",display:"flex",flexDirection:"column",padding:"16px 10px",gap:2,boxShadow:"4px 0 24px rgba(0,0,0,0.12)",overflow:"hidden"},drawerNav:{flex:1,minHeight:0,overflowY:"auto",overflowX:"hidden"},drawerHeader:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:4,flexShrink:0},closeBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",padding:6,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0}};zm(document.getElementById("root")).render(t.jsx(c.StrictMode,{children:t.jsx(j1,{})}));
