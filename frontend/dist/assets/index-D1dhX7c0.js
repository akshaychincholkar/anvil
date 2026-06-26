(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var np={exports:{}},zl={},op={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hi=Symbol.for("react.element"),th=Symbol.for("react.portal"),rh=Symbol.for("react.fragment"),nh=Symbol.for("react.strict_mode"),oh=Symbol.for("react.profiler"),ih=Symbol.for("react.provider"),sh=Symbol.for("react.context"),lh=Symbol.for("react.forward_ref"),ah=Symbol.for("react.suspense"),dh=Symbol.for("react.memo"),ch=Symbol.for("react.lazy"),eg=Symbol.iterator;function gh(e){return e===null||typeof e!="object"?null:(e=eg&&e[eg]||e["@@iterator"],typeof e=="function"?e:null)}var ip={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sp=Object.assign,lp={};function _o(e,t,n){this.props=e,this.context=t,this.refs=lp,this.updater=n||ip}_o.prototype.isReactComponent={};_o.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};_o.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ap(){}ap.prototype=_o.prototype;function Gd(e,t,n){this.props=e,this.context=t,this.refs=lp,this.updater=n||ip}var Ud=Gd.prototype=new ap;Ud.constructor=Gd;sp(Ud,_o.prototype);Ud.isPureReactComponent=!0;var tg=Array.isArray,dp=Object.prototype.hasOwnProperty,Vd={current:null},cp={key:!0,ref:!0,__self:!0,__source:!0};function gp(e,t,n){var o,i={},s=null,l=null;if(t!=null)for(o in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(s=""+t.key),t)dp.call(t,o)&&!cp.hasOwnProperty(o)&&(i[o]=t[o]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var d=Array(a),g=0;g<a;g++)d[g]=arguments[g+2];i.children=d}if(e&&e.defaultProps)for(o in a=e.defaultProps,a)i[o]===void 0&&(i[o]=a[o]);return{$$typeof:Hi,type:e,key:s,ref:l,props:i,_owner:Vd.current}}function uh(e,t){return{$$typeof:Hi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Yd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Hi}function ph(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var rg=/\/+/g;function Vl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ph(""+e.key):t.toString(36)}function Rs(e,t,n,o,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Hi:case th:l=!0}}if(l)return l=e,i=i(l),e=o===""?"."+Vl(l,0):o,tg(i)?(n="",e!=null&&(n=e.replace(rg,"$&/")+"/"),Rs(i,t,n,"",function(g){return g})):i!=null&&(Yd(i)&&(i=uh(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(rg,"$&/")+"/")+e)),t.push(i)),1;if(l=0,o=o===""?".":o+":",tg(e))for(var a=0;a<e.length;a++){s=e[a];var d=o+Vl(s,a);l+=Rs(s,t,n,d,i)}else if(d=gh(e),typeof d=="function")for(e=d.call(e),a=0;!(s=e.next()).done;)s=s.value,d=o+Vl(s,a++),l+=Rs(s,t,n,d,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Ji(e,t,n){if(e==null)return e;var o=[],i=0;return Rs(e,o,"","",function(s){return t.call(n,s,i++)}),o}function bh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Vt={current:null},Fs={transition:null},mh={ReactCurrentDispatcher:Vt,ReactCurrentBatchConfig:Fs,ReactCurrentOwner:Vd};function up(){throw Error("act(...) is not supported in production builds of React.")}Ve.Children={map:Ji,forEach:function(e,t,n){Ji(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ji(e,function(){t++}),t},toArray:function(e){return Ji(e,function(t){return t})||[]},only:function(e){if(!Yd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ve.Component=_o;Ve.Fragment=rh;Ve.Profiler=oh;Ve.PureComponent=Gd;Ve.StrictMode=nh;Ve.Suspense=ah;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mh;Ve.act=up;Ve.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=sp({},e.props),i=e.key,s=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,l=Vd.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(d in t)dp.call(t,d)&&!cp.hasOwnProperty(d)&&(o[d]=t[d]===void 0&&a!==void 0?a[d]:t[d])}var d=arguments.length-2;if(d===1)o.children=n;else if(1<d){a=Array(d);for(var g=0;g<d;g++)a[g]=arguments[g+2];o.children=a}return{$$typeof:Hi,type:e.type,key:i,ref:s,props:o,_owner:l}};Ve.createContext=function(e){return e={$$typeof:sh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ih,_context:e},e.Consumer=e};Ve.createElement=gp;Ve.createFactory=function(e){var t=gp.bind(null,e);return t.type=e,t};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(e){return{$$typeof:lh,render:e}};Ve.isValidElement=Yd;Ve.lazy=function(e){return{$$typeof:ch,_payload:{_status:-1,_result:e},_init:bh}};Ve.memo=function(e,t){return{$$typeof:dh,type:e,compare:t===void 0?null:t}};Ve.startTransition=function(e){var t=Fs.transition;Fs.transition={};try{e()}finally{Fs.transition=t}};Ve.unstable_act=up;Ve.useCallback=function(e,t){return Vt.current.useCallback(e,t)};Ve.useContext=function(e){return Vt.current.useContext(e)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(e){return Vt.current.useDeferredValue(e)};Ve.useEffect=function(e,t){return Vt.current.useEffect(e,t)};Ve.useId=function(){return Vt.current.useId()};Ve.useImperativeHandle=function(e,t,n){return Vt.current.useImperativeHandle(e,t,n)};Ve.useInsertionEffect=function(e,t){return Vt.current.useInsertionEffect(e,t)};Ve.useLayoutEffect=function(e,t){return Vt.current.useLayoutEffect(e,t)};Ve.useMemo=function(e,t){return Vt.current.useMemo(e,t)};Ve.useReducer=function(e,t,n){return Vt.current.useReducer(e,t,n)};Ve.useRef=function(e){return Vt.current.useRef(e)};Ve.useState=function(e){return Vt.current.useState(e)};Ve.useSyncExternalStore=function(e,t,n){return Vt.current.useSyncExternalStore(e,t,n)};Ve.useTransition=function(){return Vt.current.useTransition()};Ve.version="18.3.1";op.exports=Ve;var c=op.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hh=c,fh=Symbol.for("react.element"),xh=Symbol.for("react.fragment"),yh=Object.prototype.hasOwnProperty,vh=hh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kh={key:!0,ref:!0,__self:!0,__source:!0};function pp(e,t,n){var o,i={},s=null,l=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(l=t.ref);for(o in t)yh.call(t,o)&&!kh.hasOwnProperty(o)&&(i[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)i[o]===void 0&&(i[o]=t[o]);return{$$typeof:fh,type:e,key:s,ref:l,props:i,_owner:vh.current}}zl.Fragment=xh;zl.jsx=pp;zl.jsxs=pp;np.exports=zl;var r=np.exports,bp={exports:{}},lr={},mp={exports:{}},hp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(J,H){var se=J.length;J.push(H);e:for(;0<se;){var V=se-1>>>1,de=J[V];if(0<i(de,H))J[V]=H,J[se]=de,se=V;else break e}}function n(J){return J.length===0?null:J[0]}function o(J){if(J.length===0)return null;var H=J[0],se=J.pop();if(se!==H){J[0]=se;e:for(var V=0,de=J.length,I=de>>>1;V<I;){var ie=2*(V+1)-1,Ie=J[ie],Q=ie+1,y=J[Q];if(0>i(Ie,se))Q<de&&0>i(y,Ie)?(J[V]=y,J[Q]=se,V=Q):(J[V]=Ie,J[ie]=se,V=ie);else if(Q<de&&0>i(y,se))J[V]=y,J[Q]=se,V=Q;else break e}}return H}function i(J,H){var se=J.sortIndex-H.sortIndex;return se!==0?se:J.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var d=[],g=[],h=1,x=null,f=3,A=!1,S=!1,v=!1,R=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(J){for(var H=n(g);H!==null;){if(H.callback===null)o(g);else if(H.startTime<=J)o(g),H.sortIndex=H.expirationTime,t(d,H);else break;H=n(g)}}function B(J){if(v=!1,b(J),!S)if(n(d)!==null)S=!0,ge(C);else{var H=n(g);H!==null&&ye(B,H.startTime-J)}}function C(J,H){S=!1,v&&(v=!1,m(_),_=-1),A=!0;var se=f;try{for(b(H),x=n(d);x!==null&&(!(x.expirationTime>H)||J&&!w());){var V=x.callback;if(typeof V=="function"){x.callback=null,f=x.priorityLevel;var de=V(x.expirationTime<=H);H=e.unstable_now(),typeof de=="function"?x.callback=de:x===n(d)&&o(d),b(H)}else o(d);x=n(d)}if(x!==null)var I=!0;else{var ie=n(g);ie!==null&&ye(B,ie.startTime-H),I=!1}return I}finally{x=null,f=se,A=!1}}var T=!1,F=null,_=-1,D=5,W=-1;function w(){return!(e.unstable_now()-W<D)}function te(){if(F!==null){var J=e.unstable_now();W=J;var H=!0;try{H=F(!0,J)}finally{H?z():(T=!1,F=null)}}else T=!1}var z;if(typeof p=="function")z=function(){p(te)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,be=re.port2;re.port1.onmessage=te,z=function(){be.postMessage(null)}}else z=function(){R(te,0)};function ge(J){F=J,T||(T=!0,z())}function ye(J,H){_=R(function(){J(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(J){J.callback=null},e.unstable_continueExecution=function(){S||A||(S=!0,ge(C))},e.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<J?Math.floor(1e3/J):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(J){switch(f){case 1:case 2:case 3:var H=3;break;default:H=f}var se=f;f=H;try{return J()}finally{f=se}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(J,H){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var se=f;f=J;try{return H()}finally{f=se}},e.unstable_scheduleCallback=function(J,H,se){var V=e.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?V+se:V):se=V,J){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=se+de,J={id:h++,callback:H,priorityLevel:J,startTime:se,expirationTime:de,sortIndex:-1},se>V?(J.sortIndex=se,t(g,J),n(d)===null&&J===n(g)&&(v?(m(_),_=-1):v=!0,ye(B,se-V))):(J.sortIndex=de,t(d,J),S||A||(S=!0,ge(C))),J},e.unstable_shouldYield=w,e.unstable_wrapCallback=function(J){var H=f;return function(){var se=f;f=H;try{return J.apply(this,arguments)}finally{f=se}}}})(hp);mp.exports=hp;var jh=mp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wh=c,sr=jh;function ue(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fp=new Set,wi={};function qn(e,t){Bo(e,t),Bo(e+"Capture",t)}function Bo(e,t){for(wi[e]=t,e=0;e<t.length;e++)fp.add(t[e])}var Jr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wa=Object.prototype.hasOwnProperty,Sh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ng={},og={};function Ch(e){return Wa.call(og,e)?!0:Wa.call(ng,e)?!1:Sh.test(e)?og[e]=!0:(ng[e]=!0,!1)}function zh(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ih(e,t,n,o){if(t===null||typeof t>"u"||zh(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Yt(e,t,n,o,i,s,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=l}var Mt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Mt[e]=new Yt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Mt[t]=new Yt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Mt[e]=new Yt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Mt[e]=new Yt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Mt[e]=new Yt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Mt[e]=new Yt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Mt[e]=new Yt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Mt[e]=new Yt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Mt[e]=new Yt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Qd=/[\-:]([a-z])/g;function Kd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Qd,Kd);Mt[t]=new Yt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Qd,Kd);Mt[t]=new Yt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Qd,Kd);Mt[t]=new Yt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Mt[e]=new Yt(e,1,!1,e.toLowerCase(),null,!1,!1)});Mt.xlinkHref=new Yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Mt[e]=new Yt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xd(e,t,n,o){var i=Mt.hasOwnProperty(t)?Mt[t]:null;(i!==null?i.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ih(t,n,i,o)&&(n=null),o||i===null?Ch(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,o=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var on=wh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,es=Symbol.for("react.element"),uo=Symbol.for("react.portal"),po=Symbol.for("react.fragment"),qd=Symbol.for("react.strict_mode"),La=Symbol.for("react.profiler"),xp=Symbol.for("react.provider"),yp=Symbol.for("react.context"),Zd=Symbol.for("react.forward_ref"),_a=Symbol.for("react.suspense"),$a=Symbol.for("react.suspense_list"),Jd=Symbol.for("react.memo"),gn=Symbol.for("react.lazy"),vp=Symbol.for("react.offscreen"),ig=Symbol.iterator;function Vo(e){return e===null||typeof e!="object"?null:(e=ig&&e[ig]||e["@@iterator"],typeof e=="function"?e:null)}var ht=Object.assign,Yl;function oi(e){if(Yl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Yl=t&&t[1]||""}return`
`+Yl+e}var Ql=!1;function Kl(e,t){if(!e||Ql)return"";Ql=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(g){var o=g}Reflect.construct(e,[],t)}else{try{t.call()}catch(g){o=g}e.call(t.prototype)}else{try{throw Error()}catch(g){o=g}e()}}catch(g){if(g&&o&&typeof g.stack=="string"){for(var i=g.stack.split(`
`),s=o.stack.split(`
`),l=i.length-1,a=s.length-1;1<=l&&0<=a&&i[l]!==s[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==s[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==s[a]){var d=`
`+i[l].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=l&&0<=a);break}}}finally{Ql=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?oi(e):""}function Th(e){switch(e.tag){case 5:return oi(e.type);case 16:return oi("Lazy");case 13:return oi("Suspense");case 19:return oi("SuspenseList");case 0:case 2:case 15:return e=Kl(e.type,!1),e;case 11:return e=Kl(e.type.render,!1),e;case 1:return e=Kl(e.type,!0),e;default:return""}}function Pa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case po:return"Fragment";case uo:return"Portal";case La:return"Profiler";case qd:return"StrictMode";case _a:return"Suspense";case $a:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case yp:return(e.displayName||"Context")+".Consumer";case xp:return(e._context.displayName||"Context")+".Provider";case Zd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Jd:return t=e.displayName||null,t!==null?t:Pa(e.type)||"Memo";case gn:t=e._payload,e=e._init;try{return Pa(e(t))}catch{}}return null}function Eh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pa(t);case 8:return t===qd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function kp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Bh(e){var t=kp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){o=""+l,s.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(l){o=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ts(e){e._valueTracker||(e._valueTracker=Bh(e))}function jp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=kp(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function Ys(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Na(e,t){var n=t.checked;return ht({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function sg(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=zn(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function wp(e,t){t=t.checked,t!=null&&Xd(e,"checked",t,!1)}function Oa(e,t){wp(e,t);var n=zn(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ha(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ha(e,t.type,zn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function lg(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ha(e,t,n){(t!=="number"||Ys(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ii=Array.isArray;function So(e,t,n,o){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&o&&(e[n].defaultSelected=!0)}else{for(n=""+zn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,o&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ga(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(ue(91));return ht({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ag(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(ue(92));if(ii(n)){if(1<n.length)throw Error(ue(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:zn(n)}}function Sp(e,t){var n=zn(t.value),o=zn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function dg(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Cp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ua(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Cp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var rs,zp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(rs=rs||document.createElement("div"),rs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=rs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Si(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var gi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dh=["Webkit","ms","Moz","O"];Object.keys(gi).forEach(function(e){Dh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),gi[t]=gi[e]})});function Ip(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||gi.hasOwnProperty(e)&&gi[e]?(""+t).trim():t+"px"}function Tp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,i=Ip(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,i):e[n]=i}}var Ah=ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Va(e,t){if(t){if(Ah[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(ue(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(ue(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(ue(61))}if(t.style!=null&&typeof t.style!="object")throw Error(ue(62))}}function Ya(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qa=null;function ec(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ka=null,Co=null,zo=null;function cg(e){if(e=Vi(e)){if(typeof Ka!="function")throw Error(ue(280));var t=e.stateNode;t&&(t=Dl(t),Ka(e.stateNode,e.type,t))}}function Ep(e){Co?zo?zo.push(e):zo=[e]:Co=e}function Bp(){if(Co){var e=Co,t=zo;if(zo=Co=null,cg(e),t)for(e=0;e<t.length;e++)cg(t[e])}}function Dp(e,t){return e(t)}function Ap(){}var Xl=!1;function Rp(e,t,n){if(Xl)return e(t,n);Xl=!0;try{return Dp(e,t,n)}finally{Xl=!1,(Co!==null||zo!==null)&&(Ap(),Bp())}}function Ci(e,t){var n=e.stateNode;if(n===null)return null;var o=Dl(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(ue(231,t,typeof n));return n}var Xa=!1;if(Jr)try{var Yo={};Object.defineProperty(Yo,"passive",{get:function(){Xa=!0}}),window.addEventListener("test",Yo,Yo),window.removeEventListener("test",Yo,Yo)}catch{Xa=!1}function Rh(e,t,n,o,i,s,l,a,d){var g=Array.prototype.slice.call(arguments,3);try{t.apply(n,g)}catch(h){this.onError(h)}}var ui=!1,Qs=null,Ks=!1,qa=null,Fh={onError:function(e){ui=!0,Qs=e}};function Mh(e,t,n,o,i,s,l,a,d){ui=!1,Qs=null,Rh.apply(Fh,arguments)}function Wh(e,t,n,o,i,s,l,a,d){if(Mh.apply(this,arguments),ui){if(ui){var g=Qs;ui=!1,Qs=null}else throw Error(ue(198));Ks||(Ks=!0,qa=g)}}function Zn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Fp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function gg(e){if(Zn(e)!==e)throw Error(ue(188))}function Lh(e){var t=e.alternate;if(!t){if(t=Zn(e),t===null)throw Error(ue(188));return t!==e?null:e}for(var n=e,o=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(o=i.return,o!==null){n=o;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return gg(i),e;if(s===o)return gg(i),t;s=s.sibling}throw Error(ue(188))}if(n.return!==o.return)n=i,o=s;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,o=s;break}if(a===o){l=!0,o=i,n=s;break}a=a.sibling}if(!l){for(a=s.child;a;){if(a===n){l=!0,n=s,o=i;break}if(a===o){l=!0,o=s,n=i;break}a=a.sibling}if(!l)throw Error(ue(189))}}if(n.alternate!==o)throw Error(ue(190))}if(n.tag!==3)throw Error(ue(188));return n.stateNode.current===n?e:t}function Mp(e){return e=Lh(e),e!==null?Wp(e):null}function Wp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Wp(e);if(t!==null)return t;e=e.sibling}return null}var Lp=sr.unstable_scheduleCallback,ug=sr.unstable_cancelCallback,_h=sr.unstable_shouldYield,$h=sr.unstable_requestPaint,yt=sr.unstable_now,Ph=sr.unstable_getCurrentPriorityLevel,tc=sr.unstable_ImmediatePriority,_p=sr.unstable_UserBlockingPriority,Xs=sr.unstable_NormalPriority,Nh=sr.unstable_LowPriority,$p=sr.unstable_IdlePriority,Il=null,Wr=null;function Oh(e){if(Wr&&typeof Wr.onCommitFiberRoot=="function")try{Wr.onCommitFiberRoot(Il,e,void 0,(e.current.flags&128)===128)}catch{}}var Cr=Math.clz32?Math.clz32:Uh,Hh=Math.log,Gh=Math.LN2;function Uh(e){return e>>>=0,e===0?32:31-(Hh(e)/Gh|0)|0}var ns=64,os=4194304;function si(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qs(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,i=e.suspendedLanes,s=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?o=si(a):(s&=l,s!==0&&(o=si(s)))}else l=n&~i,l!==0?o=si(l):s!==0&&(o=si(s));if(o===0)return 0;if(t!==0&&t!==o&&!(t&i)&&(i=o&-o,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(o&4&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-Cr(t),i=1<<n,o|=e[n],t&=~i;return o}function Vh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yh(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var l=31-Cr(s),a=1<<l,d=i[l];d===-1?(!(a&n)||a&o)&&(i[l]=Vh(a,t)):d<=t&&(e.expiredLanes|=a),s&=~a}}function Za(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Pp(){var e=ns;return ns<<=1,!(ns&4194240)&&(ns=64),e}function ql(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Cr(t),e[t]=n}function Qh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Cr(n),s=1<<i;t[i]=0,o[i]=-1,e[i]=-1,n&=~s}}function rc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-Cr(n),i=1<<o;i&t|e[o]&t&&(e[o]|=t),n&=~i}}var et=0;function Np(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Op,nc,Hp,Gp,Up,Ja=!1,is=[],xn=null,yn=null,vn=null,zi=new Map,Ii=new Map,pn=[],Kh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pg(e,t){switch(e){case"focusin":case"focusout":xn=null;break;case"dragenter":case"dragleave":yn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":zi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ii.delete(t.pointerId)}}function Qo(e,t,n,o,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Vi(t),t!==null&&nc(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Xh(e,t,n,o,i){switch(t){case"focusin":return xn=Qo(xn,e,t,n,o,i),!0;case"dragenter":return yn=Qo(yn,e,t,n,o,i),!0;case"mouseover":return vn=Qo(vn,e,t,n,o,i),!0;case"pointerover":var s=i.pointerId;return zi.set(s,Qo(zi.get(s)||null,e,t,n,o,i)),!0;case"gotpointercapture":return s=i.pointerId,Ii.set(s,Qo(Ii.get(s)||null,e,t,n,o,i)),!0}return!1}function Vp(e){var t=$n(e.target);if(t!==null){var n=Zn(t);if(n!==null){if(t=n.tag,t===13){if(t=Fp(n),t!==null){e.blockedOn=t,Up(e.priority,function(){Hp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ms(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ed(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);Qa=o,n.target.dispatchEvent(o),Qa=null}else return t=Vi(n),t!==null&&nc(t),e.blockedOn=n,!1;t.shift()}return!0}function bg(e,t,n){Ms(e)&&n.delete(t)}function qh(){Ja=!1,xn!==null&&Ms(xn)&&(xn=null),yn!==null&&Ms(yn)&&(yn=null),vn!==null&&Ms(vn)&&(vn=null),zi.forEach(bg),Ii.forEach(bg)}function Ko(e,t){e.blockedOn===t&&(e.blockedOn=null,Ja||(Ja=!0,sr.unstable_scheduleCallback(sr.unstable_NormalPriority,qh)))}function Ti(e){function t(i){return Ko(i,e)}if(0<is.length){Ko(is[0],e);for(var n=1;n<is.length;n++){var o=is[n];o.blockedOn===e&&(o.blockedOn=null)}}for(xn!==null&&Ko(xn,e),yn!==null&&Ko(yn,e),vn!==null&&Ko(vn,e),zi.forEach(t),Ii.forEach(t),n=0;n<pn.length;n++)o=pn[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<pn.length&&(n=pn[0],n.blockedOn===null);)Vp(n),n.blockedOn===null&&pn.shift()}var Io=on.ReactCurrentBatchConfig,Zs=!0;function Zh(e,t,n,o){var i=et,s=Io.transition;Io.transition=null;try{et=1,oc(e,t,n,o)}finally{et=i,Io.transition=s}}function Jh(e,t,n,o){var i=et,s=Io.transition;Io.transition=null;try{et=4,oc(e,t,n,o)}finally{et=i,Io.transition=s}}function oc(e,t,n,o){if(Zs){var i=ed(e,t,n,o);if(i===null)la(e,t,o,Js,n),pg(e,o);else if(Xh(i,e,t,n,o))o.stopPropagation();else if(pg(e,o),t&4&&-1<Kh.indexOf(e)){for(;i!==null;){var s=Vi(i);if(s!==null&&Op(s),s=ed(e,t,n,o),s===null&&la(e,t,o,Js,n),s===i)break;i=s}i!==null&&o.stopPropagation()}else la(e,t,o,null,n)}}var Js=null;function ed(e,t,n,o){if(Js=null,e=ec(o),e=$n(e),e!==null)if(t=Zn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Fp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Js=e,null}function Yp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ph()){case tc:return 1;case _p:return 4;case Xs:case Nh:return 16;case $p:return 536870912;default:return 16}default:return 16}}var hn=null,ic=null,Ws=null;function Qp(){if(Ws)return Ws;var e,t=ic,n=t.length,o,i="value"in hn?hn.value:hn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(o=1;o<=l&&t[n-o]===i[s-o];o++);return Ws=i.slice(e,1<o?1-o:void 0)}function Ls(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ss(){return!0}function mg(){return!1}function ar(e){function t(n,o,i,s,l){this._reactName=n,this._targetInst=i,this.type=o,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ss:mg,this.isPropagationStopped=mg,this}return ht(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ss)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ss)},persist:function(){},isPersistent:ss}),t}var $o={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sc=ar($o),Ui=ht({},$o,{view:0,detail:0}),ef=ar(Ui),Zl,Jl,Xo,Tl=ht({},Ui,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xo&&(Xo&&e.type==="mousemove"?(Zl=e.screenX-Xo.screenX,Jl=e.screenY-Xo.screenY):Jl=Zl=0,Xo=e),Zl)},movementY:function(e){return"movementY"in e?e.movementY:Jl}}),hg=ar(Tl),tf=ht({},Tl,{dataTransfer:0}),rf=ar(tf),nf=ht({},Ui,{relatedTarget:0}),ea=ar(nf),of=ht({},$o,{animationName:0,elapsedTime:0,pseudoElement:0}),sf=ar(of),lf=ht({},$o,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),af=ar(lf),df=ht({},$o,{data:0}),fg=ar(df),cf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=uf[e])?!!t[e]:!1}function lc(){return pf}var bf=ht({},Ui,{key:function(e){if(e.key){var t=cf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ls(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lc,charCode:function(e){return e.type==="keypress"?Ls(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ls(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mf=ar(bf),hf=ht({},Tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xg=ar(hf),ff=ht({},Ui,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lc}),xf=ar(ff),yf=ht({},$o,{propertyName:0,elapsedTime:0,pseudoElement:0}),vf=ar(yf),kf=ht({},Tl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jf=ar(kf),wf=[9,13,27,32],ac=Jr&&"CompositionEvent"in window,pi=null;Jr&&"documentMode"in document&&(pi=document.documentMode);var Sf=Jr&&"TextEvent"in window&&!pi,Kp=Jr&&(!ac||pi&&8<pi&&11>=pi),yg=" ",vg=!1;function Xp(e,t){switch(e){case"keyup":return wf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bo=!1;function Cf(e,t){switch(e){case"compositionend":return qp(t);case"keypress":return t.which!==32?null:(vg=!0,yg);case"textInput":return e=t.data,e===yg&&vg?null:e;default:return null}}function zf(e,t){if(bo)return e==="compositionend"||!ac&&Xp(e,t)?(e=Qp(),Ws=ic=hn=null,bo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Kp&&t.locale!=="ko"?null:t.data;default:return null}}var If={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!If[e.type]:t==="textarea"}function Zp(e,t,n,o){Ep(o),t=el(t,"onChange"),0<t.length&&(n=new sc("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var bi=null,Ei=null;function Tf(e){db(e,0)}function El(e){var t=fo(e);if(jp(t))return e}function Ef(e,t){if(e==="change")return t}var Jp=!1;if(Jr){var ta;if(Jr){var ra="oninput"in document;if(!ra){var jg=document.createElement("div");jg.setAttribute("oninput","return;"),ra=typeof jg.oninput=="function"}ta=ra}else ta=!1;Jp=ta&&(!document.documentMode||9<document.documentMode)}function wg(){bi&&(bi.detachEvent("onpropertychange",eb),Ei=bi=null)}function eb(e){if(e.propertyName==="value"&&El(Ei)){var t=[];Zp(t,Ei,e,ec(e)),Rp(Tf,t)}}function Bf(e,t,n){e==="focusin"?(wg(),bi=t,Ei=n,bi.attachEvent("onpropertychange",eb)):e==="focusout"&&wg()}function Df(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return El(Ei)}function Af(e,t){if(e==="click")return El(t)}function Rf(e,t){if(e==="input"||e==="change")return El(t)}function Ff(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ir=typeof Object.is=="function"?Object.is:Ff;function Bi(e,t){if(Ir(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var i=n[o];if(!Wa.call(t,i)||!Ir(e[i],t[i]))return!1}return!0}function Sg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cg(e,t){var n=Sg(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sg(n)}}function tb(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?tb(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function rb(){for(var e=window,t=Ys();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ys(e.document)}return t}function dc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Mf(e){var t=rb(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&tb(n.ownerDocument.documentElement,n)){if(o!==null&&dc(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(o.start,i);o=o.end===void 0?s:Math.min(o.end,i),!e.extend&&s>o&&(i=o,o=s,s=i),i=Cg(n,s);var l=Cg(n,o);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>o?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Wf=Jr&&"documentMode"in document&&11>=document.documentMode,mo=null,td=null,mi=null,rd=!1;function zg(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rd||mo==null||mo!==Ys(o)||(o=mo,"selectionStart"in o&&dc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),mi&&Bi(mi,o)||(mi=o,o=el(td,"onSelect"),0<o.length&&(t=new sc("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=mo)))}function ls(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ho={animationend:ls("Animation","AnimationEnd"),animationiteration:ls("Animation","AnimationIteration"),animationstart:ls("Animation","AnimationStart"),transitionend:ls("Transition","TransitionEnd")},na={},nb={};Jr&&(nb=document.createElement("div").style,"AnimationEvent"in window||(delete ho.animationend.animation,delete ho.animationiteration.animation,delete ho.animationstart.animation),"TransitionEvent"in window||delete ho.transitionend.transition);function Bl(e){if(na[e])return na[e];if(!ho[e])return e;var t=ho[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in nb)return na[e]=t[n];return e}var ob=Bl("animationend"),ib=Bl("animationiteration"),sb=Bl("animationstart"),lb=Bl("transitionend"),ab=new Map,Ig="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tn(e,t){ab.set(e,t),qn(t,[e])}for(var oa=0;oa<Ig.length;oa++){var ia=Ig[oa],Lf=ia.toLowerCase(),_f=ia[0].toUpperCase()+ia.slice(1);Tn(Lf,"on"+_f)}Tn(ob,"onAnimationEnd");Tn(ib,"onAnimationIteration");Tn(sb,"onAnimationStart");Tn("dblclick","onDoubleClick");Tn("focusin","onFocus");Tn("focusout","onBlur");Tn(lb,"onTransitionEnd");Bo("onMouseEnter",["mouseout","mouseover"]);Bo("onMouseLeave",["mouseout","mouseover"]);Bo("onPointerEnter",["pointerout","pointerover"]);Bo("onPointerLeave",["pointerout","pointerover"]);qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qn("onBeforeInput",["compositionend","keypress","textInput","paste"]);qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var li="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$f=new Set("cancel close invalid load scroll toggle".split(" ").concat(li));function Tg(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,Wh(o,t,void 0,e),e.currentTarget=null}function db(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],i=o.event;o=o.listeners;e:{var s=void 0;if(t)for(var l=o.length-1;0<=l;l--){var a=o[l],d=a.instance,g=a.currentTarget;if(a=a.listener,d!==s&&i.isPropagationStopped())break e;Tg(i,a,g),s=d}else for(l=0;l<o.length;l++){if(a=o[l],d=a.instance,g=a.currentTarget,a=a.listener,d!==s&&i.isPropagationStopped())break e;Tg(i,a,g),s=d}}}if(Ks)throw e=qa,Ks=!1,qa=null,e}function at(e,t){var n=t[ld];n===void 0&&(n=t[ld]=new Set);var o=e+"__bubble";n.has(o)||(cb(t,e,2,!1),n.add(o))}function sa(e,t,n){var o=0;t&&(o|=4),cb(n,e,o,t)}var as="_reactListening"+Math.random().toString(36).slice(2);function Di(e){if(!e[as]){e[as]=!0,fp.forEach(function(n){n!=="selectionchange"&&($f.has(n)||sa(n,!1,e),sa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[as]||(t[as]=!0,sa("selectionchange",!1,t))}}function cb(e,t,n,o){switch(Yp(t)){case 1:var i=Zh;break;case 4:i=Jh;break;default:i=oc}n=i.bind(null,t,n,e),i=void 0,!Xa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),o?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function la(e,t,n,o,i){var s=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var a=o.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=o.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;l=l.return}for(;a!==null;){if(l=$n(a),l===null)return;if(d=l.tag,d===5||d===6){o=s=l;continue e}a=a.parentNode}}o=o.return}Rp(function(){var g=s,h=ec(n),x=[];e:{var f=ab.get(e);if(f!==void 0){var A=sc,S=e;switch(e){case"keypress":if(Ls(n)===0)break e;case"keydown":case"keyup":A=mf;break;case"focusin":S="focus",A=ea;break;case"focusout":S="blur",A=ea;break;case"beforeblur":case"afterblur":A=ea;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=hg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=rf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=xf;break;case ob:case ib:case sb:A=sf;break;case lb:A=vf;break;case"scroll":A=ef;break;case"wheel":A=jf;break;case"copy":case"cut":case"paste":A=af;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=xg}var v=(t&4)!==0,R=!v&&e==="scroll",m=v?f!==null?f+"Capture":null:f;v=[];for(var p=g,b;p!==null;){b=p;var B=b.stateNode;if(b.tag===5&&B!==null&&(b=B,m!==null&&(B=Ci(p,m),B!=null&&v.push(Ai(p,B,b)))),R)break;p=p.return}0<v.length&&(f=new A(f,S,null,n,h),x.push({event:f,listeners:v}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",f&&n!==Qa&&(S=n.relatedTarget||n.fromElement)&&($n(S)||S[en]))break e;if((A||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,A?(S=n.relatedTarget||n.toElement,A=g,S=S?$n(S):null,S!==null&&(R=Zn(S),S!==R||S.tag!==5&&S.tag!==6)&&(S=null)):(A=null,S=g),A!==S)){if(v=hg,B="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(v=xg,B="onPointerLeave",m="onPointerEnter",p="pointer"),R=A==null?f:fo(A),b=S==null?f:fo(S),f=new v(B,p+"leave",A,n,h),f.target=R,f.relatedTarget=b,B=null,$n(h)===g&&(v=new v(m,p+"enter",S,n,h),v.target=b,v.relatedTarget=R,B=v),R=B,A&&S)t:{for(v=A,m=S,p=0,b=v;b;b=ro(b))p++;for(b=0,B=m;B;B=ro(B))b++;for(;0<p-b;)v=ro(v),p--;for(;0<b-p;)m=ro(m),b--;for(;p--;){if(v===m||m!==null&&v===m.alternate)break t;v=ro(v),m=ro(m)}v=null}else v=null;A!==null&&Eg(x,f,A,v,!1),S!==null&&R!==null&&Eg(x,R,S,v,!0)}}e:{if(f=g?fo(g):window,A=f.nodeName&&f.nodeName.toLowerCase(),A==="select"||A==="input"&&f.type==="file")var C=Ef;else if(kg(f))if(Jp)C=Rf;else{C=Df;var T=Bf}else(A=f.nodeName)&&A.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=Af);if(C&&(C=C(e,g))){Zp(x,C,n,h);break e}T&&T(e,f,g),e==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&Ha(f,"number",f.value)}switch(T=g?fo(g):window,e){case"focusin":(kg(T)||T.contentEditable==="true")&&(mo=T,td=g,mi=null);break;case"focusout":mi=td=mo=null;break;case"mousedown":rd=!0;break;case"contextmenu":case"mouseup":case"dragend":rd=!1,zg(x,n,h);break;case"selectionchange":if(Wf)break;case"keydown":case"keyup":zg(x,n,h)}var F;if(ac)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else bo?Xp(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Kp&&n.locale!=="ko"&&(bo||_!=="onCompositionStart"?_==="onCompositionEnd"&&bo&&(F=Qp()):(hn=h,ic="value"in hn?hn.value:hn.textContent,bo=!0)),T=el(g,_),0<T.length&&(_=new fg(_,e,null,n,h),x.push({event:_,listeners:T}),F?_.data=F:(F=qp(n),F!==null&&(_.data=F)))),(F=Sf?Cf(e,n):zf(e,n))&&(g=el(g,"onBeforeInput"),0<g.length&&(h=new fg("onBeforeInput","beforeinput",null,n,h),x.push({event:h,listeners:g}),h.data=F))}db(x,t)})}function Ai(e,t,n){return{instance:e,listener:t,currentTarget:n}}function el(e,t){for(var n=t+"Capture",o=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ci(e,n),s!=null&&o.unshift(Ai(e,s,i)),s=Ci(e,t),s!=null&&o.push(Ai(e,s,i))),e=e.return}return o}function ro(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Eg(e,t,n,o,i){for(var s=t._reactName,l=[];n!==null&&n!==o;){var a=n,d=a.alternate,g=a.stateNode;if(d!==null&&d===o)break;a.tag===5&&g!==null&&(a=g,i?(d=Ci(n,s),d!=null&&l.unshift(Ai(n,d,a))):i||(d=Ci(n,s),d!=null&&l.push(Ai(n,d,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Pf=/\r\n?/g,Nf=/\u0000|\uFFFD/g;function Bg(e){return(typeof e=="string"?e:""+e).replace(Pf,`
`).replace(Nf,"")}function ds(e,t,n){if(t=Bg(t),Bg(e)!==t&&n)throw Error(ue(425))}function tl(){}var nd=null,od=null;function id(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var sd=typeof setTimeout=="function"?setTimeout:void 0,Of=typeof clearTimeout=="function"?clearTimeout:void 0,Dg=typeof Promise=="function"?Promise:void 0,Hf=typeof queueMicrotask=="function"?queueMicrotask:typeof Dg<"u"?function(e){return Dg.resolve(null).then(e).catch(Gf)}:sd;function Gf(e){setTimeout(function(){throw e})}function aa(e,t){var n=t,o=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(o===0){e.removeChild(i),Ti(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=i}while(n);Ti(t)}function kn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ag(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Po=Math.random().toString(36).slice(2),Mr="__reactFiber$"+Po,Ri="__reactProps$"+Po,en="__reactContainer$"+Po,ld="__reactEvents$"+Po,Uf="__reactListeners$"+Po,Vf="__reactHandles$"+Po;function $n(e){var t=e[Mr];if(t)return t;for(var n=e.parentNode;n;){if(t=n[en]||n[Mr]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ag(e);e!==null;){if(n=e[Mr])return n;e=Ag(e)}return t}e=n,n=e.parentNode}return null}function Vi(e){return e=e[Mr]||e[en],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function fo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(ue(33))}function Dl(e){return e[Ri]||null}var ad=[],xo=-1;function En(e){return{current:e}}function dt(e){0>xo||(e.current=ad[xo],ad[xo]=null,xo--)}function st(e,t){xo++,ad[xo]=e.current,e.current=t}var In={},Nt=En(In),qt=En(!1),Un=In;function Do(e,t){var n=e.type.contextTypes;if(!n)return In;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Zt(e){return e=e.childContextTypes,e!=null}function rl(){dt(qt),dt(Nt)}function Rg(e,t,n){if(Nt.current!==In)throw Error(ue(168));st(Nt,t),st(qt,n)}function gb(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var i in o)if(!(i in t))throw Error(ue(108,Eh(e)||"Unknown",i));return ht({},n,o)}function nl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||In,Un=Nt.current,st(Nt,e),st(qt,qt.current),!0}function Fg(e,t,n){var o=e.stateNode;if(!o)throw Error(ue(169));n?(e=gb(e,t,Un),o.__reactInternalMemoizedMergedChildContext=e,dt(qt),dt(Nt),st(Nt,e)):dt(qt),st(qt,n)}var Vr=null,Al=!1,da=!1;function ub(e){Vr===null?Vr=[e]:Vr.push(e)}function Yf(e){Al=!0,ub(e)}function Bn(){if(!da&&Vr!==null){da=!0;var e=0,t=et;try{var n=Vr;for(et=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}Vr=null,Al=!1}catch(i){throw Vr!==null&&(Vr=Vr.slice(e+1)),Lp(tc,Bn),i}finally{et=t,da=!1}}return null}var yo=[],vo=0,ol=null,il=0,pr=[],br=0,Vn=null,Kr=1,Xr="";function Wn(e,t){yo[vo++]=il,yo[vo++]=ol,ol=e,il=t}function pb(e,t,n){pr[br++]=Kr,pr[br++]=Xr,pr[br++]=Vn,Vn=e;var o=Kr;e=Xr;var i=32-Cr(o)-1;o&=~(1<<i),n+=1;var s=32-Cr(t)+i;if(30<s){var l=i-i%5;s=(o&(1<<l)-1).toString(32),o>>=l,i-=l,Kr=1<<32-Cr(t)+i|n<<i|o,Xr=s+e}else Kr=1<<s|n<<i|o,Xr=e}function cc(e){e.return!==null&&(Wn(e,1),pb(e,1,0))}function gc(e){for(;e===ol;)ol=yo[--vo],yo[vo]=null,il=yo[--vo],yo[vo]=null;for(;e===Vn;)Vn=pr[--br],pr[br]=null,Xr=pr[--br],pr[br]=null,Kr=pr[--br],pr[br]=null}var ir=null,or=null,gt=!1,Sr=null;function bb(e,t){var n=mr(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Mg(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ir=e,or=kn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ir=e,or=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Vn!==null?{id:Kr,overflow:Xr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=mr(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ir=e,or=null,!0):!1;default:return!1}}function dd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function cd(e){if(gt){var t=or;if(t){var n=t;if(!Mg(e,t)){if(dd(e))throw Error(ue(418));t=kn(n.nextSibling);var o=ir;t&&Mg(e,t)?bb(o,n):(e.flags=e.flags&-4097|2,gt=!1,ir=e)}}else{if(dd(e))throw Error(ue(418));e.flags=e.flags&-4097|2,gt=!1,ir=e}}}function Wg(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ir=e}function cs(e){if(e!==ir)return!1;if(!gt)return Wg(e),gt=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!id(e.type,e.memoizedProps)),t&&(t=or)){if(dd(e))throw mb(),Error(ue(418));for(;t;)bb(e,t),t=kn(t.nextSibling)}if(Wg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(ue(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){or=kn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}or=null}}else or=ir?kn(e.stateNode.nextSibling):null;return!0}function mb(){for(var e=or;e;)e=kn(e.nextSibling)}function Ao(){or=ir=null,gt=!1}function uc(e){Sr===null?Sr=[e]:Sr.push(e)}var Qf=on.ReactCurrentBatchConfig;function qo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ue(309));var o=n.stateNode}if(!o)throw Error(ue(147,e));var i=o,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(l){var a=i.refs;l===null?delete a[s]:a[s]=l},t._stringRef=s,t)}if(typeof e!="string")throw Error(ue(284));if(!n._owner)throw Error(ue(290,e))}return e}function gs(e,t){throw e=Object.prototype.toString.call(t),Error(ue(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Lg(e){var t=e._init;return t(e._payload)}function hb(e){function t(m,p){if(e){var b=m.deletions;b===null?(m.deletions=[p],m.flags|=16):b.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function o(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=Cn(m,p),m.index=0,m.sibling=null,m}function s(m,p,b){return m.index=b,e?(b=m.alternate,b!==null?(b=b.index,b<p?(m.flags|=2,p):b):(m.flags|=2,p)):(m.flags|=1048576,p)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,p,b,B){return p===null||p.tag!==6?(p=ha(b,m.mode,B),p.return=m,p):(p=i(p,b),p.return=m,p)}function d(m,p,b,B){var C=b.type;return C===po?h(m,p,b.props.children,B,b.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===gn&&Lg(C)===p.type)?(B=i(p,b.props),B.ref=qo(m,p,b),B.return=m,B):(B=Gs(b.type,b.key,b.props,null,m.mode,B),B.ref=qo(m,p,b),B.return=m,B)}function g(m,p,b,B){return p===null||p.tag!==4||p.stateNode.containerInfo!==b.containerInfo||p.stateNode.implementation!==b.implementation?(p=fa(b,m.mode,B),p.return=m,p):(p=i(p,b.children||[]),p.return=m,p)}function h(m,p,b,B,C){return p===null||p.tag!==7?(p=Gn(b,m.mode,B,C),p.return=m,p):(p=i(p,b),p.return=m,p)}function x(m,p,b){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ha(""+p,m.mode,b),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case es:return b=Gs(p.type,p.key,p.props,null,m.mode,b),b.ref=qo(m,null,p),b.return=m,b;case uo:return p=fa(p,m.mode,b),p.return=m,p;case gn:var B=p._init;return x(m,B(p._payload),b)}if(ii(p)||Vo(p))return p=Gn(p,m.mode,b,null),p.return=m,p;gs(m,p)}return null}function f(m,p,b,B){var C=p!==null?p.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return C!==null?null:a(m,p,""+b,B);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case es:return b.key===C?d(m,p,b,B):null;case uo:return b.key===C?g(m,p,b,B):null;case gn:return C=b._init,f(m,p,C(b._payload),B)}if(ii(b)||Vo(b))return C!==null?null:h(m,p,b,B,null);gs(m,b)}return null}function A(m,p,b,B,C){if(typeof B=="string"&&B!==""||typeof B=="number")return m=m.get(b)||null,a(p,m,""+B,C);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case es:return m=m.get(B.key===null?b:B.key)||null,d(p,m,B,C);case uo:return m=m.get(B.key===null?b:B.key)||null,g(p,m,B,C);case gn:var T=B._init;return A(m,p,b,T(B._payload),C)}if(ii(B)||Vo(B))return m=m.get(b)||null,h(p,m,B,C,null);gs(p,B)}return null}function S(m,p,b,B){for(var C=null,T=null,F=p,_=p=0,D=null;F!==null&&_<b.length;_++){F.index>_?(D=F,F=null):D=F.sibling;var W=f(m,F,b[_],B);if(W===null){F===null&&(F=D);break}e&&F&&W.alternate===null&&t(m,F),p=s(W,p,_),T===null?C=W:T.sibling=W,T=W,F=D}if(_===b.length)return n(m,F),gt&&Wn(m,_),C;if(F===null){for(;_<b.length;_++)F=x(m,b[_],B),F!==null&&(p=s(F,p,_),T===null?C=F:T.sibling=F,T=F);return gt&&Wn(m,_),C}for(F=o(m,F);_<b.length;_++)D=A(F,m,_,b[_],B),D!==null&&(e&&D.alternate!==null&&F.delete(D.key===null?_:D.key),p=s(D,p,_),T===null?C=D:T.sibling=D,T=D);return e&&F.forEach(function(w){return t(m,w)}),gt&&Wn(m,_),C}function v(m,p,b,B){var C=Vo(b);if(typeof C!="function")throw Error(ue(150));if(b=C.call(b),b==null)throw Error(ue(151));for(var T=C=null,F=p,_=p=0,D=null,W=b.next();F!==null&&!W.done;_++,W=b.next()){F.index>_?(D=F,F=null):D=F.sibling;var w=f(m,F,W.value,B);if(w===null){F===null&&(F=D);break}e&&F&&w.alternate===null&&t(m,F),p=s(w,p,_),T===null?C=w:T.sibling=w,T=w,F=D}if(W.done)return n(m,F),gt&&Wn(m,_),C;if(F===null){for(;!W.done;_++,W=b.next())W=x(m,W.value,B),W!==null&&(p=s(W,p,_),T===null?C=W:T.sibling=W,T=W);return gt&&Wn(m,_),C}for(F=o(m,F);!W.done;_++,W=b.next())W=A(F,m,_,W.value,B),W!==null&&(e&&W.alternate!==null&&F.delete(W.key===null?_:W.key),p=s(W,p,_),T===null?C=W:T.sibling=W,T=W);return e&&F.forEach(function(te){return t(m,te)}),gt&&Wn(m,_),C}function R(m,p,b,B){if(typeof b=="object"&&b!==null&&b.type===po&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case es:e:{for(var C=b.key,T=p;T!==null;){if(T.key===C){if(C=b.type,C===po){if(T.tag===7){n(m,T.sibling),p=i(T,b.props.children),p.return=m,m=p;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===gn&&Lg(C)===T.type){n(m,T.sibling),p=i(T,b.props),p.ref=qo(m,T,b),p.return=m,m=p;break e}n(m,T);break}else t(m,T);T=T.sibling}b.type===po?(p=Gn(b.props.children,m.mode,B,b.key),p.return=m,m=p):(B=Gs(b.type,b.key,b.props,null,m.mode,B),B.ref=qo(m,p,b),B.return=m,m=B)}return l(m);case uo:e:{for(T=b.key;p!==null;){if(p.key===T)if(p.tag===4&&p.stateNode.containerInfo===b.containerInfo&&p.stateNode.implementation===b.implementation){n(m,p.sibling),p=i(p,b.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=fa(b,m.mode,B),p.return=m,m=p}return l(m);case gn:return T=b._init,R(m,p,T(b._payload),B)}if(ii(b))return S(m,p,b,B);if(Vo(b))return v(m,p,b,B);gs(m,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,b),p.return=m,m=p):(n(m,p),p=ha(b,m.mode,B),p.return=m,m=p),l(m)):n(m,p)}return R}var Ro=hb(!0),fb=hb(!1),sl=En(null),ll=null,ko=null,pc=null;function bc(){pc=ko=ll=null}function mc(e){var t=sl.current;dt(sl),e._currentValue=t}function gd(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function To(e,t){ll=e,pc=ko=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Xt=!0),e.firstContext=null)}function fr(e){var t=e._currentValue;if(pc!==e)if(e={context:e,memoizedValue:t,next:null},ko===null){if(ll===null)throw Error(ue(308));ko=e,ll.dependencies={lanes:0,firstContext:e}}else ko=ko.next=e;return t}var Pn=null;function hc(e){Pn===null?Pn=[e]:Pn.push(e)}function xb(e,t,n,o){var i=t.interleaved;return i===null?(n.next=n,hc(t)):(n.next=i.next,i.next=n),t.interleaved=n,tn(e,o)}function tn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var un=!1;function fc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yb(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function jn(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,Ke&2){var i=o.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),o.pending=t,tn(e,n)}return i=o.interleaved,i===null?(t.next=t,hc(o)):(t.next=i.next,i.next=t),o.interleaved=t,tn(e,n)}function _s(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,rc(e,n)}}function _g(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=l:s=s.next=l,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function al(e,t,n,o){var i=e.updateQueue;un=!1;var s=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var d=a,g=d.next;d.next=null,l===null?s=g:l.next=g,l=d;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==l&&(a===null?h.firstBaseUpdate=g:a.next=g,h.lastBaseUpdate=d))}if(s!==null){var x=i.baseState;l=0,h=g=d=null,a=s;do{var f=a.lane,A=a.eventTime;if((o&f)===f){h!==null&&(h=h.next={eventTime:A,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=e,v=a;switch(f=t,A=n,v.tag){case 1:if(S=v.payload,typeof S=="function"){x=S.call(A,x,f);break e}x=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=v.payload,f=typeof S=="function"?S.call(A,x,f):S,f==null)break e;x=ht({},x,f);break e;case 2:un=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else A={eventTime:A,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(g=h=A,d=x):h=h.next=A,l|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(h===null&&(d=x),i.baseState=d,i.firstBaseUpdate=g,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Qn|=l,e.lanes=l,e.memoizedState=x}}function $g(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],i=o.callback;if(i!==null){if(o.callback=null,o=n,typeof i!="function")throw Error(ue(191,i));i.call(o)}}}var Yi={},Lr=En(Yi),Fi=En(Yi),Mi=En(Yi);function Nn(e){if(e===Yi)throw Error(ue(174));return e}function xc(e,t){switch(st(Mi,t),st(Fi,e),st(Lr,Yi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ua(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ua(t,e)}dt(Lr),st(Lr,t)}function Fo(){dt(Lr),dt(Fi),dt(Mi)}function vb(e){Nn(Mi.current);var t=Nn(Lr.current),n=Ua(t,e.type);t!==n&&(st(Fi,e),st(Lr,n))}function yc(e){Fi.current===e&&(dt(Lr),dt(Fi))}var bt=En(0);function dl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ca=[];function vc(){for(var e=0;e<ca.length;e++)ca[e]._workInProgressVersionPrimary=null;ca.length=0}var $s=on.ReactCurrentDispatcher,ga=on.ReactCurrentBatchConfig,Yn=0,mt=null,zt=null,Bt=null,cl=!1,hi=!1,Wi=0,Kf=0;function Wt(){throw Error(ue(321))}function kc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ir(e[n],t[n]))return!1;return!0}function jc(e,t,n,o,i,s){if(Yn=s,mt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$s.current=e===null||e.memoizedState===null?Jf:ex,e=n(o,i),hi){s=0;do{if(hi=!1,Wi=0,25<=s)throw Error(ue(301));s+=1,Bt=zt=null,t.updateQueue=null,$s.current=tx,e=n(o,i)}while(hi)}if($s.current=gl,t=zt!==null&&zt.next!==null,Yn=0,Bt=zt=mt=null,cl=!1,t)throw Error(ue(300));return e}function wc(){var e=Wi!==0;return Wi=0,e}function Rr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?mt.memoizedState=Bt=e:Bt=Bt.next=e,Bt}function xr(){if(zt===null){var e=mt.alternate;e=e!==null?e.memoizedState:null}else e=zt.next;var t=Bt===null?mt.memoizedState:Bt.next;if(t!==null)Bt=t,zt=e;else{if(e===null)throw Error(ue(310));zt=e,e={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},Bt===null?mt.memoizedState=Bt=e:Bt=Bt.next=e}return Bt}function Li(e,t){return typeof t=="function"?t(e):t}function ua(e){var t=xr(),n=t.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=e;var o=zt,i=o.baseQueue,s=n.pending;if(s!==null){if(i!==null){var l=i.next;i.next=s.next,s.next=l}o.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,o=o.baseState;var a=l=null,d=null,g=s;do{var h=g.lane;if((Yn&h)===h)d!==null&&(d=d.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),o=g.hasEagerState?g.eagerState:e(o,g.action);else{var x={lane:h,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};d===null?(a=d=x,l=o):d=d.next=x,mt.lanes|=h,Qn|=h}g=g.next}while(g!==null&&g!==s);d===null?l=o:d.next=a,Ir(o,t.memoizedState)||(Xt=!0),t.memoizedState=o,t.baseState=l,t.baseQueue=d,n.lastRenderedState=o}if(e=n.interleaved,e!==null){i=e;do s=i.lane,mt.lanes|=s,Qn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function pa(e){var t=xr(),n=t.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=e;var o=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do s=e(s,l.action),l=l.next;while(l!==i);Ir(s,t.memoizedState)||(Xt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,o]}function kb(){}function jb(e,t){var n=mt,o=xr(),i=t(),s=!Ir(o.memoizedState,i);if(s&&(o.memoizedState=i,Xt=!0),o=o.queue,Sc(Cb.bind(null,n,o,e),[e]),o.getSnapshot!==t||s||Bt!==null&&Bt.memoizedState.tag&1){if(n.flags|=2048,_i(9,Sb.bind(null,n,o,i,t),void 0,null),Dt===null)throw Error(ue(349));Yn&30||wb(n,t,i)}return i}function wb(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=mt.updateQueue,t===null?(t={lastEffect:null,stores:null},mt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Sb(e,t,n,o){t.value=n,t.getSnapshot=o,zb(t)&&Ib(e)}function Cb(e,t,n){return n(function(){zb(t)&&Ib(e)})}function zb(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ir(e,n)}catch{return!0}}function Ib(e){var t=tn(e,1);t!==null&&zr(t,e,1,-1)}function Pg(e){var t=Rr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:e},t.queue=e,e=e.dispatch=Zf.bind(null,mt,e),[t.memoizedState,e]}function _i(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=mt.updateQueue,t===null?(t={lastEffect:null,stores:null},mt.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function Tb(){return xr().memoizedState}function Ps(e,t,n,o){var i=Rr();mt.flags|=e,i.memoizedState=_i(1|t,n,void 0,o===void 0?null:o)}function Rl(e,t,n,o){var i=xr();o=o===void 0?null:o;var s=void 0;if(zt!==null){var l=zt.memoizedState;if(s=l.destroy,o!==null&&kc(o,l.deps)){i.memoizedState=_i(t,n,s,o);return}}mt.flags|=e,i.memoizedState=_i(1|t,n,s,o)}function Ng(e,t){return Ps(8390656,8,e,t)}function Sc(e,t){return Rl(2048,8,e,t)}function Eb(e,t){return Rl(4,2,e,t)}function Bb(e,t){return Rl(4,4,e,t)}function Db(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ab(e,t,n){return n=n!=null?n.concat([e]):null,Rl(4,4,Db.bind(null,t,e),n)}function Cc(){}function Rb(e,t){var n=xr();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&kc(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function Fb(e,t){var n=xr();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&kc(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function Mb(e,t,n){return Yn&21?(Ir(n,t)||(n=Pp(),mt.lanes|=n,Qn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Xt=!0),e.memoizedState=n)}function Xf(e,t){var n=et;et=n!==0&&4>n?n:4,e(!0);var o=ga.transition;ga.transition={};try{e(!1),t()}finally{et=n,ga.transition=o}}function Wb(){return xr().memoizedState}function qf(e,t,n){var o=Sn(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},Lb(e))_b(t,n);else if(n=xb(e,t,n,o),n!==null){var i=Ut();zr(n,e,o,i),$b(n,t,o)}}function Zf(e,t,n){var o=Sn(e),i={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lb(e))_b(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var l=t.lastRenderedState,a=s(l,n);if(i.hasEagerState=!0,i.eagerState=a,Ir(a,l)){var d=t.interleaved;d===null?(i.next=i,hc(t)):(i.next=d.next,d.next=i),t.interleaved=i;return}}catch{}finally{}n=xb(e,t,i,o),n!==null&&(i=Ut(),zr(n,e,o,i),$b(n,t,o))}}function Lb(e){var t=e.alternate;return e===mt||t!==null&&t===mt}function _b(e,t){hi=cl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function $b(e,t,n){if(n&4194240){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,rc(e,n)}}var gl={readContext:fr,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useInsertionEffect:Wt,useLayoutEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useMutableSource:Wt,useSyncExternalStore:Wt,useId:Wt,unstable_isNewReconciler:!1},Jf={readContext:fr,useCallback:function(e,t){return Rr().memoizedState=[e,t===void 0?null:t],e},useContext:fr,useEffect:Ng,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ps(4194308,4,Db.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ps(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ps(4,2,e,t)},useMemo:function(e,t){var n=Rr();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=Rr();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=qf.bind(null,mt,e),[o.memoizedState,e]},useRef:function(e){var t=Rr();return e={current:e},t.memoizedState=e},useState:Pg,useDebugValue:Cc,useDeferredValue:function(e){return Rr().memoizedState=e},useTransition:function(){var e=Pg(!1),t=e[0];return e=Xf.bind(null,e[1]),Rr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=mt,i=Rr();if(gt){if(n===void 0)throw Error(ue(407));n=n()}else{if(n=t(),Dt===null)throw Error(ue(349));Yn&30||wb(o,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Ng(Cb.bind(null,o,s,e),[e]),o.flags|=2048,_i(9,Sb.bind(null,o,s,n,t),void 0,null),n},useId:function(){var e=Rr(),t=Dt.identifierPrefix;if(gt){var n=Xr,o=Kr;n=(o&~(1<<32-Cr(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=Wi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Kf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ex={readContext:fr,useCallback:Rb,useContext:fr,useEffect:Sc,useImperativeHandle:Ab,useInsertionEffect:Eb,useLayoutEffect:Bb,useMemo:Fb,useReducer:ua,useRef:Tb,useState:function(){return ua(Li)},useDebugValue:Cc,useDeferredValue:function(e){var t=xr();return Mb(t,zt.memoizedState,e)},useTransition:function(){var e=ua(Li)[0],t=xr().memoizedState;return[e,t]},useMutableSource:kb,useSyncExternalStore:jb,useId:Wb,unstable_isNewReconciler:!1},tx={readContext:fr,useCallback:Rb,useContext:fr,useEffect:Sc,useImperativeHandle:Ab,useInsertionEffect:Eb,useLayoutEffect:Bb,useMemo:Fb,useReducer:pa,useRef:Tb,useState:function(){return pa(Li)},useDebugValue:Cc,useDeferredValue:function(e){var t=xr();return zt===null?t.memoizedState=e:Mb(t,zt.memoizedState,e)},useTransition:function(){var e=pa(Li)[0],t=xr().memoizedState;return[e,t]},useMutableSource:kb,useSyncExternalStore:jb,useId:Wb,unstable_isNewReconciler:!1};function kr(e,t){if(e&&e.defaultProps){t=ht({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ud(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:ht({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Fl={isMounted:function(e){return(e=e._reactInternals)?Zn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=Ut(),i=Sn(e),s=qr(o,i);s.payload=t,n!=null&&(s.callback=n),t=jn(e,s,i),t!==null&&(zr(t,e,i,o),_s(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=Ut(),i=Sn(e),s=qr(o,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=jn(e,s,i),t!==null&&(zr(t,e,i,o),_s(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ut(),o=Sn(e),i=qr(n,o);i.tag=2,t!=null&&(i.callback=t),t=jn(e,i,o),t!==null&&(zr(t,e,o,n),_s(t,e,o))}};function Og(e,t,n,o,i,s,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,s,l):t.prototype&&t.prototype.isPureReactComponent?!Bi(n,o)||!Bi(i,s):!0}function Pb(e,t,n){var o=!1,i=In,s=t.contextType;return typeof s=="object"&&s!==null?s=fr(s):(i=Zt(t)?Un:Nt.current,o=t.contextTypes,s=(o=o!=null)?Do(e,i):In),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Fl,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Hg(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&Fl.enqueueReplaceState(t,t.state,null)}function pd(e,t,n,o){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},fc(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=fr(s):(s=Zt(t)?Un:Nt.current,i.context=Do(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(ud(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Fl.enqueueReplaceState(i,i.state,null),al(e,n,i,o),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Mo(e,t){try{var n="",o=t;do n+=Th(o),o=o.return;while(o);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function ba(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function bd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var rx=typeof WeakMap=="function"?WeakMap:Map;function Nb(e,t,n){n=qr(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){pl||(pl=!0,Sd=o),bd(e,t)},n}function Ob(e,t,n){n=qr(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var i=t.value;n.payload=function(){return o(i)},n.callback=function(){bd(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){bd(e,t),typeof o!="function"&&(wn===null?wn=new Set([this]):wn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Gg(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new rx;var i=new Set;o.set(t,i)}else i=o.get(t),i===void 0&&(i=new Set,o.set(t,i));i.has(n)||(i.add(n),e=hx.bind(null,e,t,n),t.then(e,e))}function Ug(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Vg(e,t,n,o,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=qr(-1,1),t.tag=2,jn(n,t,1))),n.lanes|=1),e)}var nx=on.ReactCurrentOwner,Xt=!1;function Gt(e,t,n,o){t.child=e===null?fb(t,null,n,o):Ro(t,e.child,n,o)}function Yg(e,t,n,o,i){n=n.render;var s=t.ref;return To(t,i),o=jc(e,t,n,o,s,i),n=wc(),e!==null&&!Xt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rn(e,t,i)):(gt&&n&&cc(t),t.flags|=1,Gt(e,t,o,i),t.child)}function Qg(e,t,n,o,i){if(e===null){var s=n.type;return typeof s=="function"&&!Rc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Hb(e,t,s,o,i)):(e=Gs(n.type,null,o,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var l=s.memoizedProps;if(n=n.compare,n=n!==null?n:Bi,n(l,o)&&e.ref===t.ref)return rn(e,t,i)}return t.flags|=1,e=Cn(s,o),e.ref=t.ref,e.return=t,t.child=e}function Hb(e,t,n,o,i){if(e!==null){var s=e.memoizedProps;if(Bi(s,o)&&e.ref===t.ref)if(Xt=!1,t.pendingProps=o=s,(e.lanes&i)!==0)e.flags&131072&&(Xt=!0);else return t.lanes=e.lanes,rn(e,t,i)}return md(e,t,n,o,i)}function Gb(e,t,n){var o=t.pendingProps,i=o.children,s=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(wo,nr),nr|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,st(wo,nr),nr|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=s!==null?s.baseLanes:n,st(wo,nr),nr|=o}else s!==null?(o=s.baseLanes|n,t.memoizedState=null):o=n,st(wo,nr),nr|=o;return Gt(e,t,i,n),t.child}function Ub(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function md(e,t,n,o,i){var s=Zt(n)?Un:Nt.current;return s=Do(t,s),To(t,i),n=jc(e,t,n,o,s,i),o=wc(),e!==null&&!Xt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rn(e,t,i)):(gt&&o&&cc(t),t.flags|=1,Gt(e,t,n,i),t.child)}function Kg(e,t,n,o,i){if(Zt(n)){var s=!0;nl(t)}else s=!1;if(To(t,i),t.stateNode===null)Ns(e,t),Pb(t,n,o),pd(t,n,o,i),o=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var d=l.context,g=n.contextType;typeof g=="object"&&g!==null?g=fr(g):(g=Zt(n)?Un:Nt.current,g=Do(t,g));var h=n.getDerivedStateFromProps,x=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";x||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==o||d!==g)&&Hg(t,l,o,g),un=!1;var f=t.memoizedState;l.state=f,al(t,o,l,i),d=t.memoizedState,a!==o||f!==d||qt.current||un?(typeof h=="function"&&(ud(t,n,h,o),d=t.memoizedState),(a=un||Og(t,n,a,o,f,d,g))?(x||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=d),l.props=o,l.state=d,l.context=g,o=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{l=t.stateNode,yb(e,t),a=t.memoizedProps,g=t.type===t.elementType?a:kr(t.type,a),l.props=g,x=t.pendingProps,f=l.context,d=n.contextType,typeof d=="object"&&d!==null?d=fr(d):(d=Zt(n)?Un:Nt.current,d=Do(t,d));var A=n.getDerivedStateFromProps;(h=typeof A=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==x||f!==d)&&Hg(t,l,o,d),un=!1,f=t.memoizedState,l.state=f,al(t,o,l,i);var S=t.memoizedState;a!==x||f!==S||qt.current||un?(typeof A=="function"&&(ud(t,n,A,o),S=t.memoizedState),(g=un||Og(t,n,g,o,f,S,d)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(o,S,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(o,S,d)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=S),l.props=o,l.state=S,l.context=d,o=g):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),o=!1)}return hd(e,t,n,o,s,i)}function hd(e,t,n,o,i,s){Ub(e,t);var l=(t.flags&128)!==0;if(!o&&!l)return i&&Fg(t,n,!1),rn(e,t,s);o=t.stateNode,nx.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&l?(t.child=Ro(t,e.child,null,s),t.child=Ro(t,null,a,s)):Gt(e,t,a,s),t.memoizedState=o.state,i&&Fg(t,n,!0),t.child}function Vb(e){var t=e.stateNode;t.pendingContext?Rg(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Rg(e,t.context,!1),xc(e,t.containerInfo)}function Xg(e,t,n,o,i){return Ao(),uc(i),t.flags|=256,Gt(e,t,n,o),t.child}var fd={dehydrated:null,treeContext:null,retryLane:0};function xd(e){return{baseLanes:e,cachePool:null,transitions:null}}function Yb(e,t,n){var o=t.pendingProps,i=bt.current,s=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),st(bt,i&1),e===null)return cd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=o.children,e=o.fallback,s?(o=t.mode,s=t.child,l={mode:"hidden",children:l},!(o&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=Ll(l,o,0,null),e=Gn(e,o,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=xd(n),t.memoizedState=fd,e):zc(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return ox(e,t,l,o,a,i,n);if(s){s=o.fallback,l=t.mode,i=e.child,a=i.sibling;var d={mode:"hidden",children:o.children};return!(l&1)&&t.child!==i?(o=t.child,o.childLanes=0,o.pendingProps=d,t.deletions=null):(o=Cn(i,d),o.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Cn(a,s):(s=Gn(s,l,n,null),s.flags|=2),s.return=t,o.return=t,o.sibling=s,t.child=o,o=s,s=t.child,l=e.child.memoizedState,l=l===null?xd(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=fd,o}return s=e.child,e=s.sibling,o=Cn(s,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function zc(e,t){return t=Ll({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function us(e,t,n,o){return o!==null&&uc(o),Ro(t,e.child,null,n),e=zc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ox(e,t,n,o,i,s,l){if(n)return t.flags&256?(t.flags&=-257,o=ba(Error(ue(422))),us(e,t,l,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=o.fallback,i=t.mode,o=Ll({mode:"visible",children:o.children},i,0,null),s=Gn(s,i,l,null),s.flags|=2,o.return=t,s.return=t,o.sibling=s,t.child=o,t.mode&1&&Ro(t,e.child,null,l),t.child.memoizedState=xd(l),t.memoizedState=fd,s);if(!(t.mode&1))return us(e,t,l,null);if(i.data==="$!"){if(o=i.nextSibling&&i.nextSibling.dataset,o)var a=o.dgst;return o=a,s=Error(ue(419)),o=ba(s,o,void 0),us(e,t,l,o)}if(a=(l&e.childLanes)!==0,Xt||a){if(o=Dt,o!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(o.suspendedLanes|l)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,tn(e,i),zr(o,e,i,-1))}return Ac(),o=ba(Error(ue(421))),us(e,t,l,o)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=fx.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,or=kn(i.nextSibling),ir=t,gt=!0,Sr=null,e!==null&&(pr[br++]=Kr,pr[br++]=Xr,pr[br++]=Vn,Kr=e.id,Xr=e.overflow,Vn=t),t=zc(t,o.children),t.flags|=4096,t)}function qg(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),gd(e.return,t,n)}function ma(e,t,n,o,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=n,s.tailMode=i)}function Qb(e,t,n){var o=t.pendingProps,i=o.revealOrder,s=o.tail;if(Gt(e,t,o.children,n),o=bt.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qg(e,n,t);else if(e.tag===19)qg(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(st(bt,o),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&dl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ma(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&dl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ma(t,!0,n,null,s);break;case"together":ma(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ns(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function rn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Qn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(ue(153));if(t.child!==null){for(e=t.child,n=Cn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Cn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ix(e,t,n){switch(t.tag){case 3:Vb(t),Ao();break;case 5:vb(t);break;case 1:Zt(t.type)&&nl(t);break;case 4:xc(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,i=t.memoizedProps.value;st(sl,o._currentValue),o._currentValue=i;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(st(bt,bt.current&1),t.flags|=128,null):n&t.child.childLanes?Yb(e,t,n):(st(bt,bt.current&1),e=rn(e,t,n),e!==null?e.sibling:null);st(bt,bt.current&1);break;case 19:if(o=(n&t.childLanes)!==0,e.flags&128){if(o)return Qb(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),st(bt,bt.current),o)break;return null;case 22:case 23:return t.lanes=0,Gb(e,t,n)}return rn(e,t,n)}var Kb,yd,Xb,qb;Kb=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yd=function(){};Xb=function(e,t,n,o){var i=e.memoizedProps;if(i!==o){e=t.stateNode,Nn(Lr.current);var s=null;switch(n){case"input":i=Na(e,i),o=Na(e,o),s=[];break;case"select":i=ht({},i,{value:void 0}),o=ht({},o,{value:void 0}),s=[];break;case"textarea":i=Ga(e,i),o=Ga(e,o),s=[];break;default:typeof i.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=tl)}Va(n,o);var l;n=null;for(g in i)if(!o.hasOwnProperty(g)&&i.hasOwnProperty(g)&&i[g]!=null)if(g==="style"){var a=i[g];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(wi.hasOwnProperty(g)?s||(s=[]):(s=s||[]).push(g,null));for(g in o){var d=o[g];if(a=i!=null?i[g]:void 0,o.hasOwnProperty(g)&&d!==a&&(d!=null||a!=null))if(g==="style")if(a){for(l in a)!a.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in d)d.hasOwnProperty(l)&&a[l]!==d[l]&&(n||(n={}),n[l]=d[l])}else n||(s||(s=[]),s.push(g,n)),n=d;else g==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,a=a?a.__html:void 0,d!=null&&a!==d&&(s=s||[]).push(g,d)):g==="children"?typeof d!="string"&&typeof d!="number"||(s=s||[]).push(g,""+d):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(wi.hasOwnProperty(g)?(d!=null&&g==="onScroll"&&at("scroll",e),s||a===d||(s=[])):(s=s||[]).push(g,d))}n&&(s=s||[]).push("style",n);var g=s;(t.updateQueue=g)&&(t.flags|=4)}};qb=function(e,t,n,o){n!==o&&(t.flags|=4)};function Zo(e,t){if(!gt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Lt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags&14680064,o|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function sx(e,t,n){var o=t.pendingProps;switch(gc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(t),null;case 1:return Zt(t.type)&&rl(),Lt(t),null;case 3:return o=t.stateNode,Fo(),dt(qt),dt(Nt),vc(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(cs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Sr!==null&&(Id(Sr),Sr=null))),yd(e,t),Lt(t),null;case 5:yc(t);var i=Nn(Mi.current);if(n=t.type,e!==null&&t.stateNode!=null)Xb(e,t,n,o,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(ue(166));return Lt(t),null}if(e=Nn(Lr.current),cs(t)){o=t.stateNode,n=t.type;var s=t.memoizedProps;switch(o[Mr]=t,o[Ri]=s,e=(t.mode&1)!==0,n){case"dialog":at("cancel",o),at("close",o);break;case"iframe":case"object":case"embed":at("load",o);break;case"video":case"audio":for(i=0;i<li.length;i++)at(li[i],o);break;case"source":at("error",o);break;case"img":case"image":case"link":at("error",o),at("load",o);break;case"details":at("toggle",o);break;case"input":sg(o,s),at("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!s.multiple},at("invalid",o);break;case"textarea":ag(o,s),at("invalid",o)}Va(n,s),i=null;for(var l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="children"?typeof a=="string"?o.textContent!==a&&(s.suppressHydrationWarning!==!0&&ds(o.textContent,a,e),i=["children",a]):typeof a=="number"&&o.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ds(o.textContent,a,e),i=["children",""+a]):wi.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&at("scroll",o)}switch(n){case"input":ts(o),lg(o,s,!0);break;case"textarea":ts(o),dg(o);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(o.onclick=tl)}o=i,t.updateQueue=o,o!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Cp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=l.createElement(n,{is:o.is}):(e=l.createElement(n),n==="select"&&(l=e,o.multiple?l.multiple=!0:o.size&&(l.size=o.size))):e=l.createElementNS(e,n),e[Mr]=t,e[Ri]=o,Kb(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ya(n,o),n){case"dialog":at("cancel",e),at("close",e),i=o;break;case"iframe":case"object":case"embed":at("load",e),i=o;break;case"video":case"audio":for(i=0;i<li.length;i++)at(li[i],e);i=o;break;case"source":at("error",e),i=o;break;case"img":case"image":case"link":at("error",e),at("load",e),i=o;break;case"details":at("toggle",e),i=o;break;case"input":sg(e,o),i=Na(e,o),at("invalid",e);break;case"option":i=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},i=ht({},o,{value:void 0}),at("invalid",e);break;case"textarea":ag(e,o),i=Ga(e,o),at("invalid",e);break;default:i=o}Va(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var d=a[s];s==="style"?Tp(e,d):s==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&zp(e,d)):s==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&Si(e,d):typeof d=="number"&&Si(e,""+d):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(wi.hasOwnProperty(s)?d!=null&&s==="onScroll"&&at("scroll",e):d!=null&&Xd(e,s,d,l))}switch(n){case"input":ts(e),lg(e,o,!1);break;case"textarea":ts(e),dg(e);break;case"option":o.value!=null&&e.setAttribute("value",""+zn(o.value));break;case"select":e.multiple=!!o.multiple,s=o.value,s!=null?So(e,!!o.multiple,s,!1):o.defaultValue!=null&&So(e,!!o.multiple,o.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=tl)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Lt(t),null;case 6:if(e&&t.stateNode!=null)qb(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(ue(166));if(n=Nn(Mi.current),Nn(Lr.current),cs(t)){if(o=t.stateNode,n=t.memoizedProps,o[Mr]=t,(s=o.nodeValue!==n)&&(e=ir,e!==null))switch(e.tag){case 3:ds(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ds(o.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[Mr]=t,t.stateNode=o}return Lt(t),null;case 13:if(dt(bt),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(gt&&or!==null&&t.mode&1&&!(t.flags&128))mb(),Ao(),t.flags|=98560,s=!1;else if(s=cs(t),o!==null&&o.dehydrated!==null){if(e===null){if(!s)throw Error(ue(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ue(317));s[Mr]=t}else Ao(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Lt(t),s=!1}else Sr!==null&&(Id(Sr),Sr=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||bt.current&1?It===0&&(It=3):Ac())),t.updateQueue!==null&&(t.flags|=4),Lt(t),null);case 4:return Fo(),yd(e,t),e===null&&Di(t.stateNode.containerInfo),Lt(t),null;case 10:return mc(t.type._context),Lt(t),null;case 17:return Zt(t.type)&&rl(),Lt(t),null;case 19:if(dt(bt),s=t.memoizedState,s===null)return Lt(t),null;if(o=(t.flags&128)!==0,l=s.rendering,l===null)if(o)Zo(s,!1);else{if(It!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=dl(e),l!==null){for(t.flags|=128,Zo(s,!1),o=l.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)s=n,e=o,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return st(bt,bt.current&1|2),t.child}e=e.sibling}s.tail!==null&&yt()>Wo&&(t.flags|=128,o=!0,Zo(s,!1),t.lanes=4194304)}else{if(!o)if(e=dl(l),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Zo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!gt)return Lt(t),null}else 2*yt()-s.renderingStartTime>Wo&&n!==1073741824&&(t.flags|=128,o=!0,Zo(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(n=s.last,n!==null?n.sibling=l:t.child=l,s.last=l)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=yt(),t.sibling=null,n=bt.current,st(bt,o?n&1|2:n&1),t):(Lt(t),null);case 22:case 23:return Dc(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?nr&1073741824&&(Lt(t),t.subtreeFlags&6&&(t.flags|=8192)):Lt(t),null;case 24:return null;case 25:return null}throw Error(ue(156,t.tag))}function lx(e,t){switch(gc(t),t.tag){case 1:return Zt(t.type)&&rl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Fo(),dt(qt),dt(Nt),vc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return yc(t),null;case 13:if(dt(bt),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(ue(340));Ao()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return dt(bt),null;case 4:return Fo(),null;case 10:return mc(t.type._context),null;case 22:case 23:return Dc(),null;case 24:return null;default:return null}}var ps=!1,$t=!1,ax=typeof WeakSet=="function"?WeakSet:Set,Te=null;function jo(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){ft(e,t,o)}else n.current=null}function vd(e,t,n){try{n()}catch(o){ft(e,t,o)}}var Zg=!1;function dx(e,t){if(nd=Zs,e=rb(),dc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var i=o.anchorOffset,s=o.focusNode;o=o.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var l=0,a=-1,d=-1,g=0,h=0,x=e,f=null;t:for(;;){for(var A;x!==n||i!==0&&x.nodeType!==3||(a=l+i),x!==s||o!==0&&x.nodeType!==3||(d=l+o),x.nodeType===3&&(l+=x.nodeValue.length),(A=x.firstChild)!==null;)f=x,x=A;for(;;){if(x===e)break t;if(f===n&&++g===i&&(a=l),f===s&&++h===o&&(d=l),(A=x.nextSibling)!==null)break;x=f,f=x.parentNode}x=A}n=a===-1||d===-1?null:{start:a,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(od={focusedElem:e,selectionRange:n},Zs=!1,Te=t;Te!==null;)if(t=Te,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Te=e;else for(;Te!==null;){t=Te;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var v=S.memoizedProps,R=S.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?v:kr(t.type,v),R);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ue(163))}}catch(B){ft(t,t.return,B)}if(e=t.sibling,e!==null){e.return=t.return,Te=e;break}Te=t.return}return S=Zg,Zg=!1,S}function fi(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var i=o=o.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&vd(t,n,s)}i=i.next}while(i!==o)}}function Ml(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function kd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Zb(e){var t=e.alternate;t!==null&&(e.alternate=null,Zb(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Mr],delete t[Ri],delete t[ld],delete t[Uf],delete t[Vf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Jb(e){return e.tag===5||e.tag===3||e.tag===4}function Jg(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Jb(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function jd(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=tl));else if(o!==4&&(e=e.child,e!==null))for(jd(e,t,n),e=e.sibling;e!==null;)jd(e,t,n),e=e.sibling}function wd(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(wd(e,t,n),e=e.sibling;e!==null;)wd(e,t,n),e=e.sibling}var Rt=null,wr=!1;function an(e,t,n){for(n=n.child;n!==null;)em(e,t,n),n=n.sibling}function em(e,t,n){if(Wr&&typeof Wr.onCommitFiberUnmount=="function")try{Wr.onCommitFiberUnmount(Il,n)}catch{}switch(n.tag){case 5:$t||jo(n,t);case 6:var o=Rt,i=wr;Rt=null,an(e,t,n),Rt=o,wr=i,Rt!==null&&(wr?(e=Rt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Rt.removeChild(n.stateNode));break;case 18:Rt!==null&&(wr?(e=Rt,n=n.stateNode,e.nodeType===8?aa(e.parentNode,n):e.nodeType===1&&aa(e,n),Ti(e)):aa(Rt,n.stateNode));break;case 4:o=Rt,i=wr,Rt=n.stateNode.containerInfo,wr=!0,an(e,t,n),Rt=o,wr=i;break;case 0:case 11:case 14:case 15:if(!$t&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){i=o=o.next;do{var s=i,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&vd(n,t,l),i=i.next}while(i!==o)}an(e,t,n);break;case 1:if(!$t&&(jo(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(a){ft(n,t,a)}an(e,t,n);break;case 21:an(e,t,n);break;case 22:n.mode&1?($t=(o=$t)||n.memoizedState!==null,an(e,t,n),$t=o):an(e,t,n);break;default:an(e,t,n)}}function eu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ax),t.forEach(function(o){var i=xx.bind(null,e,o);n.has(o)||(n.add(o),o.then(i,i))})}}function yr(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var i=n[o];try{var s=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Rt=a.stateNode,wr=!1;break e;case 3:Rt=a.stateNode.containerInfo,wr=!0;break e;case 4:Rt=a.stateNode.containerInfo,wr=!0;break e}a=a.return}if(Rt===null)throw Error(ue(160));em(s,l,i),Rt=null,wr=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(g){ft(i,t,g)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)tm(t,e),t=t.sibling}function tm(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(yr(t,e),Dr(e),o&4){try{fi(3,e,e.return),Ml(3,e)}catch(v){ft(e,e.return,v)}try{fi(5,e,e.return)}catch(v){ft(e,e.return,v)}}break;case 1:yr(t,e),Dr(e),o&512&&n!==null&&jo(n,n.return);break;case 5:if(yr(t,e),Dr(e),o&512&&n!==null&&jo(n,n.return),e.flags&32){var i=e.stateNode;try{Si(i,"")}catch(v){ft(e,e.return,v)}}if(o&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,l=n!==null?n.memoizedProps:s,a=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&wp(i,s),Ya(a,l);var g=Ya(a,s);for(l=0;l<d.length;l+=2){var h=d[l],x=d[l+1];h==="style"?Tp(i,x):h==="dangerouslySetInnerHTML"?zp(i,x):h==="children"?Si(i,x):Xd(i,h,x,g)}switch(a){case"input":Oa(i,s);break;case"textarea":Sp(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var A=s.value;A!=null?So(i,!!s.multiple,A,!1):f!==!!s.multiple&&(s.defaultValue!=null?So(i,!!s.multiple,s.defaultValue,!0):So(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ri]=s}catch(v){ft(e,e.return,v)}}break;case 6:if(yr(t,e),Dr(e),o&4){if(e.stateNode===null)throw Error(ue(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(v){ft(e,e.return,v)}}break;case 3:if(yr(t,e),Dr(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{Ti(t.containerInfo)}catch(v){ft(e,e.return,v)}break;case 4:yr(t,e),Dr(e);break;case 13:yr(t,e),Dr(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ec=yt())),o&4&&eu(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?($t=(g=$t)||h,yr(t,e),$t=g):yr(t,e),Dr(e),o&8192){if(g=e.memoizedState!==null,(e.stateNode.isHidden=g)&&!h&&e.mode&1)for(Te=e,h=e.child;h!==null;){for(x=Te=h;Te!==null;){switch(f=Te,A=f.child,f.tag){case 0:case 11:case 14:case 15:fi(4,f,f.return);break;case 1:jo(f,f.return);var S=f.stateNode;if(typeof S.componentWillUnmount=="function"){o=f,n=f.return;try{t=o,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(v){ft(o,n,v)}}break;case 5:jo(f,f.return);break;case 22:if(f.memoizedState!==null){ru(x);continue}}A!==null?(A.return=f,Te=A):ru(x)}h=h.sibling}e:for(h=null,x=e;;){if(x.tag===5){if(h===null){h=x;try{i=x.stateNode,g?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=x.stateNode,d=x.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,a.style.display=Ip("display",l))}catch(v){ft(e,e.return,v)}}}else if(x.tag===6){if(h===null)try{x.stateNode.nodeValue=g?"":x.memoizedProps}catch(v){ft(e,e.return,v)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;h===x&&(h=null),x=x.return}h===x&&(h=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:yr(t,e),Dr(e),o&4&&eu(e);break;case 21:break;default:yr(t,e),Dr(e)}}function Dr(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Jb(n)){var o=n;break e}n=n.return}throw Error(ue(160))}switch(o.tag){case 5:var i=o.stateNode;o.flags&32&&(Si(i,""),o.flags&=-33);var s=Jg(e);wd(e,s,i);break;case 3:case 4:var l=o.stateNode.containerInfo,a=Jg(e);jd(e,a,l);break;default:throw Error(ue(161))}}catch(d){ft(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function cx(e,t,n){Te=e,rm(e)}function rm(e,t,n){for(var o=(e.mode&1)!==0;Te!==null;){var i=Te,s=i.child;if(i.tag===22&&o){var l=i.memoizedState!==null||ps;if(!l){var a=i.alternate,d=a!==null&&a.memoizedState!==null||$t;a=ps;var g=$t;if(ps=l,($t=d)&&!g)for(Te=i;Te!==null;)l=Te,d=l.child,l.tag===22&&l.memoizedState!==null?nu(i):d!==null?(d.return=l,Te=d):nu(i);for(;s!==null;)Te=s,rm(s),s=s.sibling;Te=i,ps=a,$t=g}tu(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Te=s):tu(e)}}function tu(e){for(;Te!==null;){var t=Te;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:$t||Ml(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!$t)if(n===null)o.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:kr(t.type,n.memoizedProps);o.componentDidUpdate(i,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&$g(t,s,o);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}$g(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var g=t.alternate;if(g!==null){var h=g.memoizedState;if(h!==null){var x=h.dehydrated;x!==null&&Ti(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ue(163))}$t||t.flags&512&&kd(t)}catch(f){ft(t,t.return,f)}}if(t===e){Te=null;break}if(n=t.sibling,n!==null){n.return=t.return,Te=n;break}Te=t.return}}function ru(e){for(;Te!==null;){var t=Te;if(t===e){Te=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Te=n;break}Te=t.return}}function nu(e){for(;Te!==null;){var t=Te;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ml(4,t)}catch(d){ft(t,n,d)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var i=t.return;try{o.componentDidMount()}catch(d){ft(t,i,d)}}var s=t.return;try{kd(t)}catch(d){ft(t,s,d)}break;case 5:var l=t.return;try{kd(t)}catch(d){ft(t,l,d)}}}catch(d){ft(t,t.return,d)}if(t===e){Te=null;break}var a=t.sibling;if(a!==null){a.return=t.return,Te=a;break}Te=t.return}}var gx=Math.ceil,ul=on.ReactCurrentDispatcher,Ic=on.ReactCurrentOwner,hr=on.ReactCurrentBatchConfig,Ke=0,Dt=null,jt=null,Ft=0,nr=0,wo=En(0),It=0,$i=null,Qn=0,Wl=0,Tc=0,xi=null,Kt=null,Ec=0,Wo=1/0,Or=null,pl=!1,Sd=null,wn=null,bs=!1,fn=null,bl=0,yi=0,Cd=null,Os=-1,Hs=0;function Ut(){return Ke&6?yt():Os!==-1?Os:Os=yt()}function Sn(e){return e.mode&1?Ke&2&&Ft!==0?Ft&-Ft:Qf.transition!==null?(Hs===0&&(Hs=Pp()),Hs):(e=et,e!==0||(e=window.event,e=e===void 0?16:Yp(e.type)),e):1}function zr(e,t,n,o){if(50<yi)throw yi=0,Cd=null,Error(ue(185));Gi(e,n,o),(!(Ke&2)||e!==Dt)&&(e===Dt&&(!(Ke&2)&&(Wl|=n),It===4&&bn(e,Ft)),Jt(e,o),n===1&&Ke===0&&!(t.mode&1)&&(Wo=yt()+500,Al&&Bn()))}function Jt(e,t){var n=e.callbackNode;Yh(e,t);var o=qs(e,e===Dt?Ft:0);if(o===0)n!==null&&ug(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&ug(n),t===1)e.tag===0?Yf(ou.bind(null,e)):ub(ou.bind(null,e)),Hf(function(){!(Ke&6)&&Bn()}),n=null;else{switch(Np(o)){case 1:n=tc;break;case 4:n=_p;break;case 16:n=Xs;break;case 536870912:n=$p;break;default:n=Xs}n=cm(n,nm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function nm(e,t){if(Os=-1,Hs=0,Ke&6)throw Error(ue(327));var n=e.callbackNode;if(Eo()&&e.callbackNode!==n)return null;var o=qs(e,e===Dt?Ft:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=ml(e,o);else{t=o;var i=Ke;Ke|=2;var s=im();(Dt!==e||Ft!==t)&&(Or=null,Wo=yt()+500,Hn(e,t));do try{bx();break}catch(a){om(e,a)}while(!0);bc(),ul.current=s,Ke=i,jt!==null?t=0:(Dt=null,Ft=0,t=It)}if(t!==0){if(t===2&&(i=Za(e),i!==0&&(o=i,t=zd(e,i))),t===1)throw n=$i,Hn(e,0),bn(e,o),Jt(e,yt()),n;if(t===6)bn(e,o);else{if(i=e.current.alternate,!(o&30)&&!ux(i)&&(t=ml(e,o),t===2&&(s=Za(e),s!==0&&(o=s,t=zd(e,s))),t===1))throw n=$i,Hn(e,0),bn(e,o),Jt(e,yt()),n;switch(e.finishedWork=i,e.finishedLanes=o,t){case 0:case 1:throw Error(ue(345));case 2:Ln(e,Kt,Or);break;case 3:if(bn(e,o),(o&130023424)===o&&(t=Ec+500-yt(),10<t)){if(qs(e,0)!==0)break;if(i=e.suspendedLanes,(i&o)!==o){Ut(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=sd(Ln.bind(null,e,Kt,Or),t);break}Ln(e,Kt,Or);break;case 4:if(bn(e,o),(o&4194240)===o)break;for(t=e.eventTimes,i=-1;0<o;){var l=31-Cr(o);s=1<<l,l=t[l],l>i&&(i=l),o&=~s}if(o=i,o=yt()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*gx(o/1960))-o,10<o){e.timeoutHandle=sd(Ln.bind(null,e,Kt,Or),o);break}Ln(e,Kt,Or);break;case 5:Ln(e,Kt,Or);break;default:throw Error(ue(329))}}}return Jt(e,yt()),e.callbackNode===n?nm.bind(null,e):null}function zd(e,t){var n=xi;return e.current.memoizedState.isDehydrated&&(Hn(e,t).flags|=256),e=ml(e,t),e!==2&&(t=Kt,Kt=n,t!==null&&Id(t)),e}function Id(e){Kt===null?Kt=e:Kt.push.apply(Kt,e)}function ux(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var i=n[o],s=i.getSnapshot;i=i.value;try{if(!Ir(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bn(e,t){for(t&=~Tc,t&=~Wl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Cr(t),o=1<<n;e[n]=-1,t&=~o}}function ou(e){if(Ke&6)throw Error(ue(327));Eo();var t=qs(e,0);if(!(t&1))return Jt(e,yt()),null;var n=ml(e,t);if(e.tag!==0&&n===2){var o=Za(e);o!==0&&(t=o,n=zd(e,o))}if(n===1)throw n=$i,Hn(e,0),bn(e,t),Jt(e,yt()),n;if(n===6)throw Error(ue(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ln(e,Kt,Or),Jt(e,yt()),null}function Bc(e,t){var n=Ke;Ke|=1;try{return e(t)}finally{Ke=n,Ke===0&&(Wo=yt()+500,Al&&Bn())}}function Kn(e){fn!==null&&fn.tag===0&&!(Ke&6)&&Eo();var t=Ke;Ke|=1;var n=hr.transition,o=et;try{if(hr.transition=null,et=1,e)return e()}finally{et=o,hr.transition=n,Ke=t,!(Ke&6)&&Bn()}}function Dc(){nr=wo.current,dt(wo)}function Hn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Of(n)),jt!==null)for(n=jt.return;n!==null;){var o=n;switch(gc(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&rl();break;case 3:Fo(),dt(qt),dt(Nt),vc();break;case 5:yc(o);break;case 4:Fo();break;case 13:dt(bt);break;case 19:dt(bt);break;case 10:mc(o.type._context);break;case 22:case 23:Dc()}n=n.return}if(Dt=e,jt=e=Cn(e.current,null),Ft=nr=t,It=0,$i=null,Tc=Wl=Qn=0,Kt=xi=null,Pn!==null){for(t=0;t<Pn.length;t++)if(n=Pn[t],o=n.interleaved,o!==null){n.interleaved=null;var i=o.next,s=n.pending;if(s!==null){var l=s.next;s.next=i,o.next=l}n.pending=o}Pn=null}return e}function om(e,t){do{var n=jt;try{if(bc(),$s.current=gl,cl){for(var o=mt.memoizedState;o!==null;){var i=o.queue;i!==null&&(i.pending=null),o=o.next}cl=!1}if(Yn=0,Bt=zt=mt=null,hi=!1,Wi=0,Ic.current=null,n===null||n.return===null){It=1,$i=t,jt=null;break}e:{var s=e,l=n.return,a=n,d=t;if(t=Ft,a.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var g=d,h=a,x=h.tag;if(!(h.mode&1)&&(x===0||x===11||x===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var A=Ug(l);if(A!==null){A.flags&=-257,Vg(A,l,a,s,t),A.mode&1&&Gg(s,g,t),t=A,d=g;var S=t.updateQueue;if(S===null){var v=new Set;v.add(d),t.updateQueue=v}else S.add(d);break e}else{if(!(t&1)){Gg(s,g,t),Ac();break e}d=Error(ue(426))}}else if(gt&&a.mode&1){var R=Ug(l);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Vg(R,l,a,s,t),uc(Mo(d,a));break e}}s=d=Mo(d,a),It!==4&&(It=2),xi===null?xi=[s]:xi.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var m=Nb(s,d,t);_g(s,m);break e;case 1:a=d;var p=s.type,b=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(wn===null||!wn.has(b)))){s.flags|=65536,t&=-t,s.lanes|=t;var B=Ob(s,a,t);_g(s,B);break e}}s=s.return}while(s!==null)}lm(n)}catch(C){t=C,jt===n&&n!==null&&(jt=n=n.return);continue}break}while(!0)}function im(){var e=ul.current;return ul.current=gl,e===null?gl:e}function Ac(){(It===0||It===3||It===2)&&(It=4),Dt===null||!(Qn&268435455)&&!(Wl&268435455)||bn(Dt,Ft)}function ml(e,t){var n=Ke;Ke|=2;var o=im();(Dt!==e||Ft!==t)&&(Or=null,Hn(e,t));do try{px();break}catch(i){om(e,i)}while(!0);if(bc(),Ke=n,ul.current=o,jt!==null)throw Error(ue(261));return Dt=null,Ft=0,It}function px(){for(;jt!==null;)sm(jt)}function bx(){for(;jt!==null&&!_h();)sm(jt)}function sm(e){var t=dm(e.alternate,e,nr);e.memoizedProps=e.pendingProps,t===null?lm(e):jt=t,Ic.current=null}function lm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=lx(n,t),n!==null){n.flags&=32767,jt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{It=6,jt=null;return}}else if(n=sx(n,t,nr),n!==null){jt=n;return}if(t=t.sibling,t!==null){jt=t;return}jt=t=e}while(t!==null);It===0&&(It=5)}function Ln(e,t,n){var o=et,i=hr.transition;try{hr.transition=null,et=1,mx(e,t,n,o)}finally{hr.transition=i,et=o}return null}function mx(e,t,n,o){do Eo();while(fn!==null);if(Ke&6)throw Error(ue(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(ue(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Qh(e,s),e===Dt&&(jt=Dt=null,Ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||bs||(bs=!0,cm(Xs,function(){return Eo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=hr.transition,hr.transition=null;var l=et;et=1;var a=Ke;Ke|=4,Ic.current=null,dx(e,n),tm(n,e),Mf(od),Zs=!!nd,od=nd=null,e.current=n,cx(n),$h(),Ke=a,et=l,hr.transition=s}else e.current=n;if(bs&&(bs=!1,fn=e,bl=i),s=e.pendingLanes,s===0&&(wn=null),Oh(n.stateNode),Jt(e,yt()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],o(i.value,{componentStack:i.stack,digest:i.digest});if(pl)throw pl=!1,e=Sd,Sd=null,e;return bl&1&&e.tag!==0&&Eo(),s=e.pendingLanes,s&1?e===Cd?yi++:(yi=0,Cd=e):yi=0,Bn(),null}function Eo(){if(fn!==null){var e=Np(bl),t=hr.transition,n=et;try{if(hr.transition=null,et=16>e?16:e,fn===null)var o=!1;else{if(e=fn,fn=null,bl=0,Ke&6)throw Error(ue(331));var i=Ke;for(Ke|=4,Te=e.current;Te!==null;){var s=Te,l=s.child;if(Te.flags&16){var a=s.deletions;if(a!==null){for(var d=0;d<a.length;d++){var g=a[d];for(Te=g;Te!==null;){var h=Te;switch(h.tag){case 0:case 11:case 15:fi(8,h,s)}var x=h.child;if(x!==null)x.return=h,Te=x;else for(;Te!==null;){h=Te;var f=h.sibling,A=h.return;if(Zb(h),h===g){Te=null;break}if(f!==null){f.return=A,Te=f;break}Te=A}}}var S=s.alternate;if(S!==null){var v=S.child;if(v!==null){S.child=null;do{var R=v.sibling;v.sibling=null,v=R}while(v!==null)}}Te=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,Te=l;else e:for(;Te!==null;){if(s=Te,s.flags&2048)switch(s.tag){case 0:case 11:case 15:fi(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,Te=m;break e}Te=s.return}}var p=e.current;for(Te=p;Te!==null;){l=Te;var b=l.child;if(l.subtreeFlags&2064&&b!==null)b.return=l,Te=b;else e:for(l=p;Te!==null;){if(a=Te,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ml(9,a)}}catch(C){ft(a,a.return,C)}if(a===l){Te=null;break e}var B=a.sibling;if(B!==null){B.return=a.return,Te=B;break e}Te=a.return}}if(Ke=i,Bn(),Wr&&typeof Wr.onPostCommitFiberRoot=="function")try{Wr.onPostCommitFiberRoot(Il,e)}catch{}o=!0}return o}finally{et=n,hr.transition=t}}return!1}function iu(e,t,n){t=Mo(n,t),t=Nb(e,t,1),e=jn(e,t,1),t=Ut(),e!==null&&(Gi(e,1,t),Jt(e,t))}function ft(e,t,n){if(e.tag===3)iu(e,e,n);else for(;t!==null;){if(t.tag===3){iu(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(wn===null||!wn.has(o))){e=Mo(n,e),e=Ob(t,e,1),t=jn(t,e,1),e=Ut(),t!==null&&(Gi(t,1,e),Jt(t,e));break}}t=t.return}}function hx(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=Ut(),e.pingedLanes|=e.suspendedLanes&n,Dt===e&&(Ft&n)===n&&(It===4||It===3&&(Ft&130023424)===Ft&&500>yt()-Ec?Hn(e,0):Tc|=n),Jt(e,t)}function am(e,t){t===0&&(e.mode&1?(t=os,os<<=1,!(os&130023424)&&(os=4194304)):t=1);var n=Ut();e=tn(e,t),e!==null&&(Gi(e,t,n),Jt(e,n))}function fx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),am(e,n)}function xx(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(ue(314))}o!==null&&o.delete(t),am(e,n)}var dm;dm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||qt.current)Xt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Xt=!1,ix(e,t,n);Xt=!!(e.flags&131072)}else Xt=!1,gt&&t.flags&1048576&&pb(t,il,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;Ns(e,t),e=t.pendingProps;var i=Do(t,Nt.current);To(t,n),i=jc(null,t,o,e,i,n);var s=wc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Zt(o)?(s=!0,nl(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,fc(t),i.updater=Fl,t.stateNode=i,i._reactInternals=t,pd(t,o,e,n),t=hd(null,t,o,!0,s,n)):(t.tag=0,gt&&s&&cc(t),Gt(null,t,i,n),t=t.child),t;case 16:o=t.elementType;e:{switch(Ns(e,t),e=t.pendingProps,i=o._init,o=i(o._payload),t.type=o,i=t.tag=vx(o),e=kr(o,e),i){case 0:t=md(null,t,o,e,n);break e;case 1:t=Kg(null,t,o,e,n);break e;case 11:t=Yg(null,t,o,e,n);break e;case 14:t=Qg(null,t,o,kr(o.type,e),n);break e}throw Error(ue(306,o,""))}return t;case 0:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:kr(o,i),md(e,t,o,i,n);case 1:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:kr(o,i),Kg(e,t,o,i,n);case 3:e:{if(Vb(t),e===null)throw Error(ue(387));o=t.pendingProps,s=t.memoizedState,i=s.element,yb(e,t),al(t,o,null,n);var l=t.memoizedState;if(o=l.element,s.isDehydrated)if(s={element:o,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Mo(Error(ue(423)),t),t=Xg(e,t,o,n,i);break e}else if(o!==i){i=Mo(Error(ue(424)),t),t=Xg(e,t,o,n,i);break e}else for(or=kn(t.stateNode.containerInfo.firstChild),ir=t,gt=!0,Sr=null,n=fb(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ao(),o===i){t=rn(e,t,n);break e}Gt(e,t,o,n)}t=t.child}return t;case 5:return vb(t),e===null&&cd(t),o=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,l=i.children,id(o,i)?l=null:s!==null&&id(o,s)&&(t.flags|=32),Ub(e,t),Gt(e,t,l,n),t.child;case 6:return e===null&&cd(t),null;case 13:return Yb(e,t,n);case 4:return xc(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Ro(t,null,o,n):Gt(e,t,o,n),t.child;case 11:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:kr(o,i),Yg(e,t,o,i,n);case 7:return Gt(e,t,t.pendingProps,n),t.child;case 8:return Gt(e,t,t.pendingProps.children,n),t.child;case 12:return Gt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,i=t.pendingProps,s=t.memoizedProps,l=i.value,st(sl,o._currentValue),o._currentValue=l,s!==null)if(Ir(s.value,l)){if(s.children===i.children&&!qt.current){t=rn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){l=s.child;for(var d=a.firstContext;d!==null;){if(d.context===o){if(s.tag===1){d=qr(-1,n&-n),d.tag=2;var g=s.updateQueue;if(g!==null){g=g.shared;var h=g.pending;h===null?d.next=d:(d.next=h.next,h.next=d),g.pending=d}}s.lanes|=n,d=s.alternate,d!==null&&(d.lanes|=n),gd(s.return,n,t),a.lanes|=n;break}d=d.next}}else if(s.tag===10)l=s.type===t.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(ue(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),gd(l,n,t),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===t){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}Gt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,o=t.pendingProps.children,To(t,n),i=fr(i),o=o(i),t.flags|=1,Gt(e,t,o,n),t.child;case 14:return o=t.type,i=kr(o,t.pendingProps),i=kr(o.type,i),Qg(e,t,o,i,n);case 15:return Hb(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:kr(o,i),Ns(e,t),t.tag=1,Zt(o)?(e=!0,nl(t)):e=!1,To(t,n),Pb(t,o,i),pd(t,o,i,n),hd(null,t,o,!0,e,n);case 19:return Qb(e,t,n);case 22:return Gb(e,t,n)}throw Error(ue(156,t.tag))};function cm(e,t){return Lp(e,t)}function yx(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mr(e,t,n,o){return new yx(e,t,n,o)}function Rc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vx(e){if(typeof e=="function")return Rc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Zd)return 11;if(e===Jd)return 14}return 2}function Cn(e,t){var n=e.alternate;return n===null?(n=mr(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Gs(e,t,n,o,i,s){var l=2;if(o=e,typeof e=="function")Rc(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case po:return Gn(n.children,i,s,t);case qd:l=8,i|=8;break;case La:return e=mr(12,n,t,i|2),e.elementType=La,e.lanes=s,e;case _a:return e=mr(13,n,t,i),e.elementType=_a,e.lanes=s,e;case $a:return e=mr(19,n,t,i),e.elementType=$a,e.lanes=s,e;case vp:return Ll(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xp:l=10;break e;case yp:l=9;break e;case Zd:l=11;break e;case Jd:l=14;break e;case gn:l=16,o=null;break e}throw Error(ue(130,e==null?e:typeof e,""))}return t=mr(l,n,t,i),t.elementType=e,t.type=o,t.lanes=s,t}function Gn(e,t,n,o){return e=mr(7,e,o,t),e.lanes=n,e}function Ll(e,t,n,o){return e=mr(22,e,o,t),e.elementType=vp,e.lanes=n,e.stateNode={isHidden:!1},e}function ha(e,t,n){return e=mr(6,e,null,t),e.lanes=n,e}function fa(e,t,n){return t=mr(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function kx(e,t,n,o,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ql(0),this.expirationTimes=ql(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ql(0),this.identifierPrefix=o,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fc(e,t,n,o,i,s,l,a,d){return e=new kx(e,t,n,a,d),t===1?(t=1,s===!0&&(t|=8)):t=0,s=mr(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fc(s),e}function jx(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:uo,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function gm(e){if(!e)return In;e=e._reactInternals;e:{if(Zn(e)!==e||e.tag!==1)throw Error(ue(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Zt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(ue(171))}if(e.tag===1){var n=e.type;if(Zt(n))return gb(e,n,t)}return t}function um(e,t,n,o,i,s,l,a,d){return e=Fc(n,o,!0,e,i,s,l,a,d),e.context=gm(null),n=e.current,o=Ut(),i=Sn(n),s=qr(o,i),s.callback=t??null,jn(n,s,i),e.current.lanes=i,Gi(e,i,o),Jt(e,o),e}function _l(e,t,n,o){var i=t.current,s=Ut(),l=Sn(i);return n=gm(n),t.context===null?t.context=n:t.pendingContext=n,t=qr(s,l),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=jn(i,t,l),e!==null&&(zr(e,i,l,s),_s(e,i,l)),l}function hl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function su(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Mc(e,t){su(e,t),(e=e.alternate)&&su(e,t)}function wx(){return null}var pm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Wc(e){this._internalRoot=e}$l.prototype.render=Wc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(ue(409));_l(e,t,null,null)};$l.prototype.unmount=Wc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kn(function(){_l(null,e,null,null)}),t[en]=null}};function $l(e){this._internalRoot=e}$l.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<pn.length&&t!==0&&t<pn[n].priority;n++);pn.splice(n,0,e),n===0&&Vp(e)}};function Lc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Pl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function lu(){}function Sx(e,t,n,o,i){if(i){if(typeof o=="function"){var s=o;o=function(){var g=hl(l);s.call(g)}}var l=um(t,o,e,0,null,!1,!1,"",lu);return e._reactRootContainer=l,e[en]=l.current,Di(e.nodeType===8?e.parentNode:e),Kn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof o=="function"){var a=o;o=function(){var g=hl(d);a.call(g)}}var d=Fc(e,0,!1,null,null,!1,!1,"",lu);return e._reactRootContainer=d,e[en]=d.current,Di(e.nodeType===8?e.parentNode:e),Kn(function(){_l(t,d,n,o)}),d}function Nl(e,t,n,o,i){var s=n._reactRootContainer;if(s){var l=s;if(typeof i=="function"){var a=i;i=function(){var d=hl(l);a.call(d)}}_l(t,l,e,i)}else l=Sx(n,t,e,i,o);return hl(l)}Op=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=si(t.pendingLanes);n!==0&&(rc(t,n|1),Jt(t,yt()),!(Ke&6)&&(Wo=yt()+500,Bn()))}break;case 13:Kn(function(){var o=tn(e,1);if(o!==null){var i=Ut();zr(o,e,1,i)}}),Mc(e,1)}};nc=function(e){if(e.tag===13){var t=tn(e,134217728);if(t!==null){var n=Ut();zr(t,e,134217728,n)}Mc(e,134217728)}};Hp=function(e){if(e.tag===13){var t=Sn(e),n=tn(e,t);if(n!==null){var o=Ut();zr(n,e,t,o)}Mc(e,t)}};Gp=function(){return et};Up=function(e,t){var n=et;try{return et=e,t()}finally{et=n}};Ka=function(e,t,n){switch(t){case"input":if(Oa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var i=Dl(o);if(!i)throw Error(ue(90));jp(o),Oa(o,i)}}}break;case"textarea":Sp(e,n);break;case"select":t=n.value,t!=null&&So(e,!!n.multiple,t,!1)}};Dp=Bc;Ap=Kn;var Cx={usingClientEntryPoint:!1,Events:[Vi,fo,Dl,Ep,Bp,Bc]},Jo={findFiberByHostInstance:$n,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zx={bundleType:Jo.bundleType,version:Jo.version,rendererPackageName:Jo.rendererPackageName,rendererConfig:Jo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:on.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Mp(e),e===null?null:e.stateNode},findFiberByHostInstance:Jo.findFiberByHostInstance||wx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ms=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ms.isDisabled&&ms.supportsFiber)try{Il=ms.inject(zx),Wr=ms}catch{}}lr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cx;lr.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lc(t))throw Error(ue(200));return jx(e,t,null,n)};lr.createRoot=function(e,t){if(!Lc(e))throw Error(ue(299));var n=!1,o="",i=pm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Fc(e,1,!1,null,null,n,!1,o,i),e[en]=t.current,Di(e.nodeType===8?e.parentNode:e),new Wc(t)};lr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(ue(188)):(e=Object.keys(e).join(","),Error(ue(268,e)));return e=Mp(t),e=e===null?null:e.stateNode,e};lr.flushSync=function(e){return Kn(e)};lr.hydrate=function(e,t,n){if(!Pl(t))throw Error(ue(200));return Nl(null,e,t,!0,n)};lr.hydrateRoot=function(e,t,n){if(!Lc(e))throw Error(ue(405));var o=n!=null&&n.hydratedSources||null,i=!1,s="",l=pm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=um(t,null,e,1,n??null,i,!1,s,l),e[en]=t.current,Di(e),o)for(e=0;e<o.length;e++)n=o[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new $l(t)};lr.render=function(e,t,n){if(!Pl(t))throw Error(ue(200));return Nl(null,e,t,!1,n)};lr.unmountComponentAtNode=function(e){if(!Pl(e))throw Error(ue(40));return e._reactRootContainer?(Kn(function(){Nl(null,null,e,!1,function(){e._reactRootContainer=null,e[en]=null})}),!0):!1};lr.unstable_batchedUpdates=Bc;lr.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!Pl(n))throw Error(ue(200));if(e==null||e._reactInternals===void 0)throw Error(ue(38));return Nl(e,t,n,!1,o)};lr.version="18.3.1-next-f1338f8080-20240426";function bm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bm)}catch(e){console.error(e)}}bm(),bp.exports=lr;var Ix=bp.exports,mm,au=Ix;mm=au.createRoot,au.hydrateRoot;/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),hm=(...e)=>e.filter((t,n,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ex={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=c.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:o,className:i="",children:s,iconNode:l,...a},d)=>c.createElement("svg",{ref:d,...Ex,width:t,height:t,stroke:e,strokeWidth:o?Number(n)*24/Number(t):n,className:hm("lucide",i),...a},[...l.map(([g,h])=>c.createElement(g,h)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=(e,t)=>{const n=c.forwardRef(({className:o,...i},s)=>c.createElement(Bx,{ref:s,iconNode:t,className:hm(`lucide-${Tx(e)}`,o),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=le("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=le("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=le("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=le("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=le("Baby",[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=le("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=le("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _c=le("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=le("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=le("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=le("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=le("Bus",[["path",{d:"M8 6v6",key:"18i7km"}],["path",{d:"M15 6v6",key:"1sg6z9"}],["path",{d:"M2 12h19.6",key:"de5uta"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",key:"1wwztk"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M9 18h5",key:"lrx6i"}],["circle",{cx:"16",cy:"18",r:"2",key:"1v4tcr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=le("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=le("CalendarPlus",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=le("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=le("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=le("Carrot",[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46",key:"rfqxbe"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z",key:"6b25w4"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z",key:"fn65lo"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=le("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=le("ChartLine",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=le("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=le("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn=le("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=le("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=le("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=le("Clapperboard",[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",key:"1tn4o7"}],["path",{d:"m6.2 5.3 3.1 3.9",key:"iuk76l"}],["path",{d:"m12.4 3.4 3.1 4",key:"6hsd6n"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",key:"ltgou9"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=le("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=le("Coffee",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=le("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=le("Columns3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=le("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=le("Droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=le("Dumbbell",[["path",{d:"M14.4 14.4 9.6 9.6",key:"ic80wn"}],["path",{d:"M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z",key:"nnl7wr"}],["path",{d:"m21.5 21.5-1.4-1.4",key:"1f1ice"}],["path",{d:"M3.9 3.9 2.5 2.5",key:"1evmna"}],["path",{d:"M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z",key:"yhosts"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=le("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fl=le("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $c=le("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=le("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=le("Fuel",[["line",{x1:"3",x2:"15",y1:"22",y2:"22",key:"xegly4"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9",key:"xcnuvu"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",key:"16j0yd"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",key:"7cu91f"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=le("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=le("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=le("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=le("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=le("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=le("HeartPulse",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=le("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pi=le("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ol=le("ImagePlus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=le("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=le("Images",[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18",key:"nf6bnh"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2",key:"12espp"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=le("IndianRupee",[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=le("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=le("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pc=le("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=le("LayoutList",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=le("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=le("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=le("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=le("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=le("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nc=le("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=le("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=le("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oc=le("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=le("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=le("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=le("PanelLeftOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=le("PartyPopper",[["path",{d:"M5.8 11.3 2 22l10.7-3.79",key:"gwxi1d"}],["path",{d:"M4 3h.01",key:"1vcuye"}],["path",{d:"M22 8h.01",key:"1mrtc2"}],["path",{d:"M15 2h.01",key:"1cjtqr"}],["path",{d:"M22 20h.01",key:"1mrys2"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",key:"hbicv8"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17",key:"1i94pl"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7",key:"1cofks"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",key:"4kbmks"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=le("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=le("PawPrint",[["circle",{cx:"11",cy:"4",r:"2",key:"vol9p0"}],["circle",{cx:"18",cy:"8",r:"2",key:"17gozi"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",key:"1ydw1z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xt=le("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=le("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=le("PiggyBank",[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z",key:"1ivx2i"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h.01",key:"xkw8gn"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=le("Pill",[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=le("Plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hc=le("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=le("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=le("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=le("ReceiptText",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=le("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=le("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=le("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=le("Scissors",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=le("ScrollText",[["path",{d:"M15 12h-5",key:"r7krc0"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=le("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=le("Shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=le("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=le("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=le("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=le("Sprout",[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=le("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=le("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=le("Sunrise",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=le("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gc=le("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=le("TramFront",[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M12 3v8",key:"1h2ygw"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m18 22-2-3",key:"1p0ohu"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M16 15h.01",key:"rnfrdf"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uc=le("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=le("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=le("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=le("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=le("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=le("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=le("Tv",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=le("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qc=le("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=le("WashingMachine",[["path",{d:"M3 6h3",key:"155dbl"}],["path",{d:"M17 6h.01",key:"e2y6kg"}],["rect",{width:"18",height:"20",x:"3",y:"2",rx:"2",key:"od3kk9"}],["circle",{cx:"12",cy:"13",r:"5",key:"nlbqau"}],["path",{d:"M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5",key:"17lach"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=le("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=le("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=le("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=le("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=le("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Kc="anvil_token",Xc=()=>localStorage.getItem(Kc),Ay=e=>localStorage.setItem(Kc,e),Ad=()=>localStorage.removeItem(Kc),X=async(e,t,n)=>{const o={};n!==void 0&&(o["Content-Type"]="application/json");const i=Xc();i&&(o.Authorization=`Bearer ${i}`);const s=await fetch(`/api${t}`,{method:e,headers:o,body:n!==void 0?JSON.stringify(n):void 0});if(s.status===401)throw Ad(),window.dispatchEvent(new Event("anvil-unauthorized")),new Error("Not authenticated");if(s.status===204)return null;if(!s.ok){const l=await s.text();let a=l;try{a=JSON.parse(l).detail||l}catch{}throw new Error(a||`HTTP ${s.status}`)}return s.json()},$={register:e=>X("POST","/auth/register",e),login:e=>X("POST","/auth/login",e),me:()=>X("GET","/auth/me"),forgotPassword:e=>X("POST","/auth/forgot",{email:e}),resetPassword:(e,t)=>X("POST","/auth/reset",{token:e,password:t}),getGcalStatus:()=>X("GET","/auth/google/status"),connectGoogle:()=>{window.location.href=`/api/auth/google?token=${encodeURIComponent(Xc()||"")}`},disconnectGoogle:()=>X("DELETE","/auth/google"),getPillars:()=>X("GET","/pillars"),getFocus:()=>X("GET","/focus"),createFocus:e=>X("POST","/focus",e),deleteFocus:e=>X("DELETE",`/focus/${e}`),addScreenTime:(e,t)=>X("POST","/screentime",{screen:e,seconds:t}),getScreenTime:()=>X("GET","/screentime"),getPayouts:()=>X("GET","/rewards/payouts"),createPayout:e=>X("POST","/rewards/payouts",e),deletePayout:e=>X("DELETE",`/rewards/payouts/${e}`),getRewardRates:()=>X("GET","/rewards/rates"),setRewardRate:e=>X("POST","/rewards/rates",e),getMedia:()=>X("GET","/media"),createMedia:e=>X("POST","/media",e),updateMedia:(e,t)=>X("PUT",`/media/${e}`,t),deleteMedia:e=>X("DELETE",`/media/${e}`),restoreMedia:e=>X("POST",`/media/${e}/restore`),getDecks:()=>X("GET","/spiritual/decks"),createDeck:e=>X("POST","/spiritual/decks",e),deleteDeck:e=>X("DELETE",`/spiritual/decks/${e}`),getGoldenGoals:()=>X("GET","/golden/goals"),getGoldenGoal:e=>X("GET",`/golden/goals/${e}`),createGolden:e=>X("POST","/golden/goals",e),updateGolden:(e,t)=>X("PUT",`/golden/goals/${e}`,t),achieveGolden:e=>X("POST",`/golden/goals/${e}/achieve`),unachieveGolden:e=>X("POST",`/golden/goals/${e}/unachieve`),upsertGoldenEntry:(e,t)=>X("PUT",`/golden/goals/${e}/entry`,t),deleteGolden:e=>X("DELETE",`/golden/goals/${e}`),restoreGolden:e=>X("POST",`/golden/goals/${e}/restore`),getKickstart:()=>X("GET","/kickstart/videos"),createKickstart:e=>X("POST","/kickstart/videos",e),updateKickstart:(e,t)=>X("PUT",`/kickstart/videos/${e}`,t),deleteKickstart:e=>X("DELETE",`/kickstart/videos/${e}`),restoreKickstart:e=>X("POST",`/kickstart/videos/${e}/restore`),getTxns:()=>X("GET","/finance/txns"),createTxn:e=>X("POST","/finance/txns",e),updateTxn:(e,t)=>X("PUT",`/finance/txns/${e}`,t),deleteTxn:e=>X("DELETE",`/finance/txns/${e}`),restoreTxn:e=>X("POST",`/finance/txns/${e}/restore`),getInvestments:()=>X("GET","/finance/investments"),createInvestment:e=>X("POST","/finance/investments",e),updateInvestment:(e,t)=>X("PUT",`/finance/investments/${e}`,t),deleteInvestment:e=>X("DELETE",`/finance/investments/${e}`),restoreInvestment:e=>X("POST",`/finance/investments/${e}/restore`),getFixedItems:()=>X("GET","/finance/fixed-items"),createFixedItem:e=>X("POST","/finance/fixed-items",e),updateFixedItem:(e,t)=>X("PUT",`/finance/fixed-items/${e}`,t),deleteFixedItem:e=>X("DELETE",`/finance/fixed-items/${e}`),getExpenses:()=>X("GET","/expenses"),createExpenseCategory:e=>X("POST","/expenses/categories",e),updateExpenseCategory:(e,t)=>X("PUT",`/expenses/categories/${e}`,t),deleteExpenseCategory:e=>X("DELETE",`/expenses/categories/${e}`),createExpenseLog:e=>X("POST","/expenses/logs",e),updateExpenseLog:(e,t)=>X("PUT",`/expenses/logs/${e}`,t),deleteExpenseLog:e=>X("DELETE",`/expenses/logs/${e}`),restoreExpenseLog:e=>X("POST",`/expenses/logs/${e}/restore`),getSetting:e=>X("GET",`/settings/${e}`),setSetting:(e,t)=>X("PUT",`/settings/${e}`,{value:t}),getTasks:()=>X("GET","/tasks"),createTask:e=>X("POST","/tasks",e),updateTask:(e,t)=>X("PUT",`/tasks/${e}`,t),deleteTask:e=>X("DELETE",`/tasks/${e}`),restoreTask:e=>X("POST",`/tasks/${e}/restore`),scheduleTask:e=>X("PUT",`/tasks/${e}/schedule`),getGoals:e=>X("GET",`/goals${e?`?pillar=${encodeURIComponent(e)}`:""}`),createGoal:e=>X("POST","/goals",e),updateGoal:(e,t)=>X("PUT",`/goals/${e}`,t),deleteGoal:e=>X("DELETE",`/goals/${e}`),restoreGoal:e=>X("POST",`/goals/${e}/restore`),getHabits:()=>X("GET","/habits"),createHabit:e=>X("POST","/habits",e),updateHabit:(e,t)=>X("PUT",`/habits/${e}`,t),deleteHabit:e=>X("DELETE",`/habits/${e}`),restoreHabit:e=>X("POST",`/habits/${e}/restore`),toggleHabitLog:(e,t)=>X("POST",`/habits/${e}/log/${t}`),setHabitLogNote:(e,t,n)=>X("PUT",`/habits/${e}/log/${t}/note`,{note:n}),setHabitLogCount:(e,t,n,o)=>X("PUT",`/habits/${e}/log/${t}/count`,{count:n,note:o}),clearHabitLog:(e,t)=>X("DELETE",`/habits/${e}/log/${t}`),getHabitsYearly:e=>X("GET",`/habits/yearly/${e}`),getJournalEntry:e=>X("GET",`/journal/${e}`),getJournalHistory:(e,t)=>X("GET",`/journal/history/${e}/${t}`),updateJournalMood:(e,t)=>X("PUT",`/journal/${e}`,{mood:t}),addJournalBullet:(e,t,n)=>X("POST",`/journal/${e}/bullets`,{section:t,text:n}),deleteJournalBullet:e=>X("DELETE",`/journal/bullets/${e}`),getSkills:()=>X("GET","/skills"),createSkill:e=>X("POST","/skills",e),updateSkill:(e,t)=>X("PUT",`/skills/${e}`,t),deleteSkill:e=>X("DELETE",`/skills/${e}`),restoreSkill:e=>X("POST",`/skills/${e}/restore`),addSkillNote:(e,t,n,o=null)=>X("POST",`/skills/${e}/notes`,{stage:t,text:n,grp:o}),setSkillGroups:(e,t)=>X("PUT",`/skills/${e}/groups`,{groups:t}),deleteSkillNote:e=>X("DELETE",`/skill-notes/${e}`),updateSkillNote:(e,t)=>X("PUT",`/skill-notes/${e}`,{text:t}),toggleSkillNote:e=>X("PUT",`/skill-notes/${e}/toggle`),completeSkillStage:(e,t)=>X("POST",`/skills/${e}/complete-stage`,{stage:t}),getScriptures:()=>X("GET","/scriptures"),createScripture:e=>X("POST","/scriptures",e),deleteScripture:e=>X("DELETE",`/scriptures/${e}`),restoreScripture:e=>X("POST",`/scriptures/${e}/restore`),addChapter:(e,t)=>X("POST",`/scriptures/${e}/chapters`,t),updateChapter:(e,t)=>X("PUT",`/chapters/${e}`,t),deleteChapter:e=>X("DELETE",`/chapters/${e}`),restoreChapter:e=>X("POST",`/chapters/${e}/restore`),addInsight:(e,t)=>X("POST",`/chapters/${e}/insights`,{text:t}),deleteInsight:e=>X("DELETE",`/insights/${e}`),getTopics:()=>X("GET","/revision/topics"),createTopic:e=>X("POST","/revision/topics",e),updateTopic:(e,t)=>X("PUT",`/revision/topics/${e}`,t),deleteTopic:e=>X("DELETE",`/revision/topics/${e}`),restoreTopic:e=>X("POST",`/revision/topics/${e}/restore`),getDueToday:()=>X("GET","/revision/due-today"),getCalendar:(e,t)=>X("GET",`/revision/calendar/${e}/${t}`),toggleReviewDone:e=>X("PUT",`/revision/reviews/${e}/done`),getAffirmations:()=>X("GET","/affirmations"),createAffirmation:e=>X("POST","/affirmations",e),updateAffirmation:(e,t)=>X("PUT",`/affirmations/${e}`,t),deleteAffirmation:e=>X("DELETE",`/affirmations/${e}`),restoreAffirmation:e=>X("POST",`/affirmations/${e}/restore`),getAchievements:()=>X("GET","/achievements"),createAchievement:e=>X("POST","/achievements",e),updateAchievement:(e,t)=>X("PUT",`/achievements/${e}`,t),deleteAchievement:e=>X("DELETE",`/achievements/${e}`),restoreAchievement:e=>X("POST",`/achievements/${e}/restore`),getDelight:()=>X("GET","/delight"),createCollection:e=>X("POST","/delight/collections",e),updateCollection:(e,t)=>X("PUT",`/delight/collections/${e}`,t),deleteCollection:e=>X("DELETE",`/delight/collections/${e}`),restoreCollection:e=>X("POST",`/delight/collections/${e}/restore`),createDelightItem:(e,t)=>X("POST",`/delight/collections/${e}/items`,t),updateDelightItem:(e,t)=>X("PUT",`/delight/items/${e}`,t),deleteDelightItem:e=>X("DELETE",`/delight/items/${e}`),restoreDelightItem:e=>X("POST",`/delight/items/${e}/restore`),arrangeDelight:(e,t)=>X("PUT",`/delight/collections/${e}/arrange`,{order:t})},Rd=[{code:"INR",symbol:"₹",locale:"en-IN",label:"Indian Rupee"},{code:"USD",symbol:"$",locale:"en-US",label:"US Dollar"},{code:"EUR",symbol:"€",locale:"de-DE",label:"Euro"},{code:"GBP",symbol:"£",locale:"en-GB",label:"British Pound"},{code:"JPY",symbol:"¥",locale:"ja-JP",label:"Japanese Yen"},{code:"AED",symbol:"د.إ",locale:"en-AE",label:"UAE Dirham"},{code:"AUD",symbol:"A$",locale:"en-AU",label:"Australian Dollar"},{code:"CAD",symbol:"C$",locale:"en-CA",label:"Canadian Dollar"},{code:"SGD",symbol:"S$",locale:"en-SG",label:"Singapore Dollar"}],cu="INR",Mm="anvil_currency",Hl=e=>Rd.find(t=>t.code===e)||Rd[0];function Lo(){try{return localStorage.getItem(Mm)||cu}catch{return cu}}function gu(e){try{localStorage.setItem(Mm,e)}catch{}return window.dispatchEvent(new CustomEvent("anvil-currency",{detail:e})),e}function wl(e,t){const n=Hl(t||Lo()),o=Math.round(Number(e)||0);return n.symbol+o.toLocaleString(n.locale)}function Hr(e,t){const n=Hl(t||Lo()),o=Number(e)||0;return n.symbol+o.toLocaleString(n.locale,{minimumFractionDigits:2,maximumFractionDigits:2})}function uu(e,t){const n=Hl(t||Lo()),o=Math.round(Number(e)||0),i=Math.abs(o);return n.code==="INR"?i>=1e7?n.symbol+(o/1e7).toFixed(i>=1e8?0:1)+"Cr":i>=1e5?n.symbol+(o/1e5).toFixed(i>=1e6?0:1)+"L":i>=1e3?n.symbol+(o/1e3).toFixed(i>=1e4?0:1)+"K":n.symbol+o:i>=1e9?n.symbol+(o/1e9).toFixed(1)+"B":i>=1e6?n.symbol+(o/1e6).toFixed(1)+"M":i>=1e3?n.symbol+(o/1e3).toFixed(1)+"K":n.symbol+o}function Ki(){const[e,t]=c.useState(Lo());return c.useEffect(()=>{const n=o=>t(o.detail||Lo());return window.addEventListener("anvil-currency",n),()=>window.removeEventListener("anvil-currency",n)},[]),Hl(e)}const Pt={financial:{label:"Financial",leaf:"#C9A227",shape:"round"},academic:{label:"Academic",leaf:"#3A7CA5",shape:"pine"},relationship:{label:"Relationship",leaf:"#C2536B",shape:"round"},spiritual:{label:"Spiritual",leaf:"#8268B0",shape:"tall"},health:{label:"Health",leaf:"#4C9A6B",shape:"round"}},Zr="health";function qc({species:e=Zr,progress:t=1,withered:n=!1,size:o=200}){const i=Math.max(0,Math.min(1,t)),s=Pt[e]||Pt[Zr],l=n?"#8A7B63":"#7A5A3C",a=n?"#A99C84":s.leaf,d=n?"#8F8268":a,g=14+i*46,h=112-g,x=i>.14,f=x?8+i*30:0;return r.jsxs("svg",{viewBox:"0 0 120 120",width:o,height:o,style:{display:"block"},children:[r.jsx("ellipse",{cx:"60",cy:"114",rx:20+i*14,ry:"5",fill:"rgba(38,36,31,0.08)"}),!x&&r.jsxs("g",{transform:`translate(60 ${112-i*40})`,children:[r.jsx("path",{d:"M0 8 C0 8 0 -2 0 -6",stroke:"#4C9A6B",strokeWidth:"2.5",fill:"none"}),r.jsx("ellipse",{cx:"-5",cy:"-4",rx:"6",ry:"3.5",fill:"#4C9A6B",transform:"rotate(-30 -5 -4)"}),r.jsx("ellipse",{cx:"5",cy:"-4",rx:"6",ry:"3.5",fill:"#5BB07E",transform:"rotate(30 5 -4)"})]}),x&&r.jsxs(r.Fragment,{children:[r.jsx("rect",{x:60-(2+i*2.5),y:h,width:(2+i*2.5)*2,height:g,rx:"2",fill:l}),s.shape==="pine"?r.jsxs(r.Fragment,{children:[r.jsx("polygon",{points:`60,${h-f*2.2} ${60-f},${h+4} ${60+f},${h+4}`,fill:a}),r.jsx("polygon",{points:`60,${h-f*3} ${60-f*.8},${h-f*.7} ${60+f*.8},${h-f*.7}`,fill:d})]}):s.shape==="tall"?r.jsxs(r.Fragment,{children:[r.jsx("ellipse",{cx:"60",cy:h-f*.3,rx:f*.78,ry:f*1.55,fill:a}),r.jsx("ellipse",{cx:"60",cy:h-f*.9,rx:f*.5,ry:f*1,fill:d,opacity:"0.9"})]}):r.jsxs(r.Fragment,{children:[r.jsx("circle",{cx:"60",cy:h,r:f,fill:a}),r.jsx("circle",{cx:60-f*.7,cy:h+f*.3,r:f*.78,fill:a}),r.jsx("circle",{cx:60+f*.7,cy:h+f*.3,r:f*.78,fill:d}),r.jsx("circle",{cx:"60",cy:h-f*.5,r:f*.8,fill:d,opacity:"0.92"})]})]})]})}function Ry({species:e}){return r.jsx(qc,{species:e,progress:1,size:56})}const fs="#C9A227",pu="#3A7CA5",bu="#C2536B",mu=new Set(["worth","achievements"]),Fy=()=>{const e=new Date,t=n=>String(n).padStart(2,"0");return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}`},_t=Fy(),My={kickstart:"Kickstart",golden:"Golden Book",habits:"Habits",quadrant:"Quadrant",goals:"Goals",grove:"Grove",worth:"Rewards",vault:"Wallet",expenses:"Expenses",journal:"Journal",revision:"Revision",affirmations:"Affirmations",skills:"Skills",spiritual:"Spiritual",mindscape:"Mindscape",achievements:"Achievements",delight:"Delights"},Fd=e=>{const t=Math.round(e||0),n=Math.floor(t/60),o=t%60;return n?`${n}h ${o}m`:`${o}m`},Wy=e=>Fd((e||0)/60),hu=[{id:"Q1",label:"Do Now"},{id:"Q2",label:"Schedule"},{id:"Q3",label:"Delegate"},{id:"Q4",label:"Drop"}],fu=["Financial","Academic","Relationship","Health","Spiritual"];function Ly({onNavigate:e}){var No,lt;const t=Ki(),n=N=>Hr(N,t.code),[o,i]=c.useState(!1),[s,l]=c.useState([]),[a,d]=c.useState([]),[g,h]=c.useState({sessions:[],stats:{}}),[x,f]=c.useState([]),[A,S]=c.useState([]),[v,R]=c.useState([]),[m,p]=c.useState([]),[b,B]=c.useState({}),[C,T]=c.useState({}),[F,_]=c.useState([]),[D,W]=c.useState([]),[w,te]=c.useState([]),[z,re]=c.useState([]),[be,ge]=c.useState([]),ye=c.useCallback(()=>{Promise.all([$.getHabits().catch(()=>[]),$.getTasks().catch(()=>[]),$.getFocus().catch(()=>({sessions:[],stats:{}})),$.getScreenTime().catch(()=>[]),$.getRewardRates().catch(()=>[]),$.getPayouts().catch(()=>[]),$.getAchievements().catch(()=>[]),$.getSetting("grove_rates").catch(()=>null),$.getSetting("reward_rates").catch(()=>null),$.getExpenses().catch(()=>({categories:[],logs:[]})),$.getInvestments().catch(()=>[]),$.getDueToday().catch(()=>[]),$.getSkills().catch(()=>[])]).then(([N,me,Ht,Qt,dr,Er,Oo,Br,to,_r,Zi,Ho,Gl])=>{l(N||[]),d(me||[]),h(Ht||{sessions:[],stats:{}}),f(Array.isArray(Qt)?Qt:[]),S(dr||[]),R(Er||[]),p(Array.isArray(Oo)?Oo:[]),B((Br==null?void 0:Br.value)||{}),T((to==null?void 0:to.value)||{}),_((_r==null?void 0:_r.categories)||[]),W((_r==null?void 0:_r.logs)||[]),te(Zi||[]),re(Ho||[]),ge(Gl||[]),i(!0)}).catch(()=>i(!0))},[]);c.useEffect(()=>{ye()},[ye]);const J=s.filter(N=>(N.logs||[]).includes(_t)).length;a.filter(N=>(N.start_datetime||"").slice(0,10)===_t);const H=c.useMemo(()=>{const N={Q1:0,Q2:0,Q3:0,Q4:0};return a.forEach(me=>{N[me.quadrant]!==void 0&&N[me.quadrant]++}),N},[a]),se=((No=g.stats)==null?void 0:No.today_minutes)||0,V=((lt=g.stats)==null?void 0:lt.today_trees)||0,de={};A.forEach(N=>{var me;(de[me=`${N.kind}:${N.rkey}`]||(de[me]=[])).push({eff:N.eff_date,rate:N.rate})}),Object.values(de).forEach(N=>N.sort((me,Ht)=>me.eff.localeCompare(Ht.eff)));const I=(N,me,Ht)=>{const Qt=de[`${N}:${me}`];if(Qt){let dr=null;for(const Er of Qt)if(Er.eff<=Ht)dr=Er.rate;else break;if(dr!==null)return dr}return(N==="focus"?b[me]:C[me])||0};let ie=0,Ie=0;(g.sessions||[]).filter(N=>N.completed).forEach(N=>{const me=(N.started_at||N.created_at||"").slice(0,10);if(me!==_t)return;const Ht=Pt[N.tree]?N.tree:Zr;ie+=(N.actual_min||0)/60*I("focus",Ht,me)}),x.forEach(N=>{!mu.has(N.screen)&&N.date===_t&&(Ie+=N.seconds/60*I("usage",N.screen,N.date))});const y=m.filter(N=>N.date===_t&&(N.reward||0)>0).reduce((N,me)=>N+(me.reward||0),0),E=ie+Ie+y,P=E>0?ie/E*100:0,G=E>0?Ie/E*100:0,oe=E>0?y/E*100:0;let pe=0,O=0;(g.sessions||[]).filter(N=>N.completed).forEach(N=>{const me=(N.started_at||N.created_at||"").slice(0,10),Ht=Pt[N.tree]?N.tree:Zr;pe+=(N.actual_min||0)/60*I("focus",Ht,me)}),x.forEach(N=>{mu.has(N.screen)||(O+=N.seconds/60*I("usage",N.screen,N.date))});const M=m.reduce((N,me)=>N+(me.reward||0),0),k=v.reduce((N,me)=>N+me.amount,0),ee=Math.max(0,pe+O+M-k),Ee=D.filter(N=>N.date===_t).reduce((N,me)=>N+me.amount,0);c.useMemo(()=>Object.fromEntries(F.map(N=>[N.id,N])),[F]);const Pe=w.filter(N=>N.date===_t||N.start_date===_t).reduce((N,me)=>N+(me.invested||0),0),nt=c.useMemo(()=>{const N={};return x.forEach(me=>{me.date===_t&&(N[me.screen]=(N[me.screen]||0)+me.seconds)}),Object.entries(N).filter(([,me])=>me>0).sort((me,Ht)=>Ht[1]-me[1])},[x]),qe=N=>x.some(me=>me.screen===N&&me.date===_t&&me.seconds>0),Xe=qe("spiritual"),ot=qe("affirmations"),tt=c.useMemo(()=>{const N=[];return be.forEach(me=>Object.values(me.notes||{}).forEach(Ht=>Ht.forEach(Qt=>{(Qt.created_at||"").slice(0,10)===_t&&N.push({...Qt,skill:me.title})}))),N},[be]),Tr=qe("kickstart"),Ot=qe("mindscape"),wt=m.filter(N=>N.date===_t),[pt,St]=c.useState(null),[u,q]=c.useState(null),[Ae,Le]=c.useState(null),[we,$e]=c.useState(null),Ct=N=>$.toggleHabitLog(N.id,_t).then(ye).catch(()=>{}),At=async()=>{const N=pt.title.trim();N&&(await $.createTask({pillar:pt.pillar,title:N,quadrant:pt.quadrant,time_estimate_min:Number(pt.time_estimate_min)||30,start_datetime:null,goal_id:null}),St(null),ye())},ln=async()=>{await $.createFocus({label:u.label.trim()||null,tree:u.tree,duration_min:Number(u.duration_min)||25}),q(null),ye()},Xi=async()=>{const N=parseFloat(Ae.amount)||0;N<=0||!Ae.category_id||(await $.createExpenseLog({category_id:Number(Ae.category_id),amount:N,note:Ae.note.trim(),date:_t}),Le(null),ye())},qi=async()=>{const N=we.name.trim(),me=parseFloat(we.invested)||0;!N||me<=0||(await $.createInvestment({name:N,kind:we.kind,invested:me,current_value:me,note:we.note.trim(),date:_t}),$e(null),ye())},vt=N=>e&&e(N);return o?r.jsxs("div",{style:ae.page,children:[r.jsxs("div",{style:ae.head,children:[r.jsx("div",{style:ae.eyebrow,children:"Anvil · Today"}),r.jsx("h1",{style:ae.h1,children:"Dashboard"}),r.jsx("div",{style:ae.subhead,children:new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})})]}),r.jsx(no,{title:"Used today",onClick:()=>{},children:nt.length===0?r.jsx(xs,{children:"Nothing opened yet today."}):r.jsx("div",{style:ae.chipWrap,children:nt.map(([N,me])=>r.jsxs("button",{onClick:()=>vt(N),style:ae.usedChip,children:[My[N]||N," ",r.jsx("span",{style:ae.usedChipTime,children:Wy(me)})]},N))})}),r.jsxs("div",{style:ae.statGrid,children:[r.jsx(ys,{icon:Ed,color:"#4C9A6B",label:"Habits done",value:`${J}/${s.length}`,onClick:()=>vt("habits")}),r.jsx(ys,{icon:Dd,color:fs,label:V?`Focus · ${V} tree${V===1?"":"s"}`:"Focus time",value:Fd(se),onClick:()=>vt("grove")}),r.jsx(ys,{icon:kl,color:"#C9772E",label:"Spent today",value:Hr(Ee,t.code),onClick:()=>vt("expenses")}),r.jsx(ys,{icon:Qc,color:"#8268B0",label:"Invested today",value:Hr(Pe,t.code),onClick:()=>vt("vault")})]}),r.jsx(no,{title:"Rewards",eyebrow:`Pending ${n(ee)}`,onClick:()=>vt("worth"),children:E>0?r.jsxs("div",{style:ae.pieWrap,children:[r.jsxs("div",{style:ae.pieChart,children:[r.jsx("div",{style:{...ae.pieDisc,background:`conic-gradient(${fs} 0 ${P}%, ${pu} ${P}% ${P+G}%, ${bu} ${P+G}% 100%)`}}),r.jsxs("div",{style:ae.pieHole,children:[r.jsx("span",{style:ae.pieHoleVal,children:n(E)}),r.jsx("span",{style:ae.pieHoleLbl,children:"today"})]})]}),r.jsxs("div",{style:ae.pieLegend,children:[r.jsx(xa,{color:fs,label:"Focus",pct:P,val:n(ie)}),r.jsx(xa,{color:pu,label:"Usage",pct:G,val:n(Ie)}),r.jsx(xa,{color:bu,label:"Achievement",pct:oe,val:n(y)})]})]}):r.jsx(xs,{children:"No rewards earned yet today."})}),z.length>0&&r.jsx(no,{title:"Revision due",eyebrow:`${z.length} pending`,onClick:()=>vt("revision"),children:r.jsx("div",{style:ae.rows,children:z.slice(0,5).map(N=>r.jsxs("div",{style:ae.row,children:[r.jsx("span",{style:{...ae.dot,background:N.is_missed?"#C2536B":"#C9A227"}}),r.jsx("span",{style:ae.rowName,children:N.topic}),r.jsxs("span",{style:ae.rowMeta,children:["Stage ",N.stage]})]},N.review_id))})}),r.jsxs("div",{style:ae.cardGrid,children:[r.jsx(vs,{icon:vi,color:"#8268B0",label:"Spiritual",done:Xe,doneText:"Read today",idleText:"Not opened yet",onClick:()=>vt("spiritual")}),r.jsx(vs,{icon:eo,color:"#C9A227",label:"Affirmations",done:ot,doneText:"Read today",idleText:"Not opened yet",onClick:()=>vt("affirmations")}),r.jsx(vs,{icon:Bm,color:"#C9772E",label:"Kickstart",done:Tr,doneText:"Watched today",idleText:"Not watched yet",onClick:()=>vt("kickstart")}),r.jsx(vs,{icon:jm,color:"#3A7CA5",label:"Mindscape",done:Ot,doneText:"Listened today",idleText:"Not listened yet",onClick:()=>vt("mindscape")})]}),r.jsx(no,{title:"Skills enhanced",eyebrow:tt.length?`${tt.length} note${tt.length===1?"":"s"}`:null,onClick:()=>vt("skills"),children:tt.length===0?r.jsx(xs,{children:"No skill notes added today."}):r.jsx("div",{style:ae.rows,children:tt.slice(0,5).map(N=>r.jsxs("div",{style:ae.row,children:[r.jsx("span",{style:{...ae.dot,background:"#4C9A6B"}}),r.jsx("span",{style:ae.rowName,children:N.text}),r.jsx("span",{style:ae.rowMeta,children:N.skill})]},N.id))})}),wt.length>0&&r.jsx(no,{title:"Achievements today",eyebrow:`${wt.length}`,onClick:()=>vt("achievements"),children:r.jsx("div",{style:ae.rows,children:wt.map(N=>r.jsxs("div",{style:ae.row,children:[r.jsx("span",{style:{...ae.dot,background:"#C2536B"}}),r.jsx("span",{style:ae.rowName,children:N.title}),N.reward>0&&r.jsx("span",{style:ae.rowAmt,children:n(N.reward)})]},N.id))})}),r.jsx(no,{title:"Wallet status",onClick:()=>vt("vault"),children:r.jsxs("div",{style:ae.walletRow,children:[r.jsxs("div",{style:ae.walletStat,children:[r.jsx("div",{style:{...ae.walletVal,color:"#C9772E"},children:Hr(Ee,t.code)}),r.jsx("div",{style:ae.walletLbl,children:"Spent today"})]}),r.jsxs("div",{style:ae.walletStat,children:[r.jsx("div",{style:{...ae.walletVal,color:"#8268B0"},children:Hr(Pe,t.code)}),r.jsx("div",{style:ae.walletLbl,children:"Invested today"})]}),r.jsxs("div",{style:ae.walletStat,children:[r.jsx("div",{style:ae.walletVal,children:Hr(ee,t.code)}),r.jsx("div",{style:ae.walletLbl,children:"Rewards pending"})]})]})}),r.jsx("div",{style:ae.quickHead,children:"Quick log"}),r.jsxs("div",{style:ae.cardGrid,children:[r.jsxs("div",{style:ae.quickCard,children:[r.jsxs("div",{style:ae.quickTitle,children:[r.jsx(Ed,{size:15,color:"#4C9A6B"})," Habits"]}),s.length===0?r.jsx(xs,{children:"No habits yet."}):r.jsx("div",{style:ae.habitList,children:s.slice(0,6).map(N=>{const me=(N.logs||[]).includes(_t);return r.jsxs("button",{onClick:()=>Ct(N),style:{...ae.habitChip,...me?ae.habitChipOn:{}},children:[me&&r.jsx(Jn,{size:12})," ",N.name]},N.id)})})]}),r.jsxs("div",{style:ae.quickCard,children:[r.jsxs("div",{style:ae.quickTitle,children:[r.jsx(Pc,{size:15,color:"#3A7CA5"})," Quadrant"]}),r.jsx("div",{style:ae.quadGrid,children:hu.map(N=>r.jsxs("div",{style:ae.quadCell,children:[r.jsx("span",{style:ae.quadLabel,children:N.label}),r.jsx("span",{style:ae.quadCount,children:H[N.id]})]},N.id))}),r.jsxs("button",{onClick:()=>St({title:"",pillar:fu[0],quadrant:"Q1",time_estimate_min:30}),style:ae.quickAddBtn,children:[r.jsx(Qe,{size:14})," Add task"]})]}),r.jsxs("div",{style:ae.quickCard,children:[r.jsxs("div",{style:ae.quickTitle,children:[r.jsx(Dd,{size:15,color:fs})," Grove focus"]}),r.jsxs("div",{style:ae.quickStat,children:[Fd(se)," today"]}),r.jsxs("button",{onClick:()=>q({label:"",tree:Zr,duration_min:25}),style:ae.quickAddBtn,children:[r.jsx(Qe,{size:14})," Start session"]})]}),r.jsxs("div",{style:ae.quickCard,children:[r.jsxs("div",{style:ae.quickTitle,children:[r.jsx(kl,{size:15,color:"#C9772E"})," Expense / Investment"]}),r.jsxs("div",{style:ae.quickStat,children:[Hr(Ee,t.code)," spent today"]}),r.jsxs("div",{style:{display:"flex",gap:8},children:[r.jsxs("button",{onClick:()=>{var N;return Le({category_id:((N=F[0])==null?void 0:N.id)||"",amount:"",note:""})},style:{...ae.quickAddBtn,flex:1},children:[r.jsx(Qe,{size:14})," Expense"]}),r.jsxs("button",{onClick:()=>$e({name:"",kind:"Stocks",invested:"",note:""}),style:{...ae.quickAddBtn,flex:1},children:[r.jsx(Qe,{size:14})," Invest"]})]})]})]}),pt&&r.jsxs(ks,{title:"Add task",onClose:()=>St(null),children:[r.jsx("input",{autoFocus:!0,placeholder:"Task title",value:pt.title,onChange:N=>St(me=>({...me,title:N.target.value})),style:ae.input}),r.jsx("select",{value:pt.pillar,onChange:N=>St(me=>({...me,pillar:N.target.value})),style:ae.input,children:fu.map(N=>r.jsx("option",{value:N,children:N},N))}),r.jsx("select",{value:pt.quadrant,onChange:N=>St(me=>({...me,quadrant:N.target.value})),style:ae.input,children:hu.map(N=>r.jsxs("option",{value:N.id,children:[N.id," · ",N.label]},N.id))}),r.jsx("input",{type:"number",min:"1",placeholder:"Estimate (min)",value:pt.time_estimate_min,onChange:N=>St(me=>({...me,time_estimate_min:N.target.value})),style:ae.input}),r.jsx(js,{onCancel:()=>St(null),onSave:At,disabled:!pt.title.trim()})]}),u&&r.jsxs(ks,{title:"Start focus session",onClose:()=>q(null),children:[r.jsx("input",{autoFocus:!0,placeholder:"Label (optional)",value:u.label,onChange:N=>q(me=>({...me,label:N.target.value})),style:ae.input}),r.jsx("select",{value:u.tree,onChange:N=>q(me=>({...me,tree:N.target.value})),style:ae.input,children:Object.entries(Pt).map(([N,me])=>r.jsx("option",{value:N,children:me.label},N))}),r.jsx("input",{type:"number",min:"1",placeholder:"Duration (min)",value:u.duration_min,onChange:N=>q(me=>({...me,duration_min:N.target.value})),style:ae.input}),r.jsx(js,{onCancel:()=>q(null),onSave:ln,disabled:!Number(u.duration_min)})]}),Ae&&r.jsxs(ks,{title:"Log expense",onClose:()=>Le(null),children:[r.jsx("select",{value:Ae.category_id,onChange:N=>Le(me=>({...me,category_id:N.target.value})),style:ae.input,children:F.map(N=>r.jsx("option",{value:N.id,children:N.name},N.id))}),r.jsx("input",{autoFocus:!0,type:"number",min:"0",step:"0.01",placeholder:`Amount (${t.symbol})`,value:Ae.amount,onChange:N=>Le(me=>({...me,amount:N.target.value})),style:ae.input}),r.jsx("input",{placeholder:"Note (optional)",value:Ae.note,onChange:N=>Le(me=>({...me,note:N.target.value})),style:ae.input}),r.jsx(js,{onCancel:()=>Le(null),onSave:Xi,disabled:!(parseFloat(Ae.amount)>0&&Ae.category_id)})]}),we&&r.jsxs(ks,{title:"Log investment",onClose:()=>$e(null),children:[r.jsx("input",{autoFocus:!0,placeholder:"Name",value:we.name,onChange:N=>$e(me=>({...me,name:N.target.value})),style:ae.input}),r.jsx("select",{value:we.kind,onChange:N=>$e(me=>({...me,kind:N.target.value})),style:ae.input,children:["Stocks","Mutual Fund","Gold","Real Estate","Fixed Deposit","Crypto","Other"].map(N=>r.jsx("option",{value:N,children:N},N))}),r.jsx("input",{type:"number",min:"0",step:"0.01",placeholder:`Invested (${t.symbol})`,value:we.invested,onChange:N=>$e(me=>({...me,invested:N.target.value})),style:ae.input}),r.jsx("input",{placeholder:"Note (optional)",value:we.note,onChange:N=>$e(me=>({...me,note:N.target.value})),style:ae.input}),r.jsx(js,{onCancel:()=>$e(null),onSave:qi,disabled:!(we.name.trim()&&parseFloat(we.invested)>0)})]})]}):r.jsx("div",{style:ae.loading,children:"Loading…"})}function no({title:e,eyebrow:t,onClick:n,children:o}){return r.jsxs("div",{style:ae.card,children:[r.jsxs("div",{style:ae.cardTitleRow,children:[r.jsxs("button",{onClick:n,style:ae.cardTitleBtn,children:[e," ",r.jsx(Ax,{size:13})]}),t&&r.jsx("span",{style:ae.cardEyebrow,children:t})]}),o]})}function xs({children:e}){return r.jsx("div",{style:ae.muted,children:e})}function xa({color:e,label:t,pct:n,val:o}){return r.jsxs("div",{style:ae.pieLegRow,children:[r.jsx("span",{style:{...ae.legendDot,background:e}}),r.jsx("span",{style:ae.pieLegName,children:t}),r.jsxs("span",{style:ae.pieLegPct,children:[Math.round(n),"%"]}),r.jsx("span",{style:ae.pieLegMin,children:o})]})}function ys({icon:e,color:t,label:n,value:o,sub:i,onClick:s}){return r.jsxs("button",{onClick:s,style:ae.statTile,children:[r.jsx("div",{style:{...ae.statIcon,background:`${t}1A`,color:t},children:r.jsx(e,{size:17})}),r.jsxs("div",{style:{minWidth:0},children:[r.jsx("div",{style:ae.statVal,children:o}),r.jsxs("div",{style:ae.statLbl,children:[n,i?` · ${i}`:""]})]})]})}function vs({icon:e,color:t,label:n,done:o,doneText:i,idleText:s,onClick:l}){return r.jsxs("button",{onClick:l,style:ae.miniCard,children:[r.jsx("div",{style:{...ae.statIcon,background:`${t}1A`,color:t},children:r.jsx(e,{size:16})}),r.jsx("div",{style:ae.miniLabel,children:n}),r.jsx("div",{style:{...ae.miniStatus,color:o?"#4C9A6B":"var(--text-3)"},children:o?i:s})]})}function ks({title:e,onClose:t,children:n}){return r.jsx("div",{style:ae.modalOverlay,onClick:t,children:r.jsxs("div",{style:ae.modalCard,onClick:o=>o.stopPropagation(),children:[r.jsx("div",{style:ae.modalTitle,children:e}),r.jsx("div",{style:ae.modalBody,children:n})]})})}function js({onCancel:e,onSave:t,disabled:n}){return r.jsxs("div",{style:ae.modalActions,children:[r.jsx("button",{onClick:e,style:ae.modalCancel,children:"Cancel"}),r.jsx("button",{onClick:t,disabled:n,style:{...ae.modalConfirm,...n?{opacity:.5,cursor:"not-allowed"}:{}},children:"Save"})]})}const ae={loading:{padding:40,textAlign:"center",color:"var(--text-3)",fontFamily:"'Inter',system-ui,sans-serif"},page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},chipWrap:{display:"flex",gap:8,flexWrap:"wrap"},usedChip:{border:"1px solid var(--border)",background:"var(--surface-2)",color:"var(--text-2)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit",display:"flex",alignItems:"center",gap:6},usedChipTime:{color:"var(--text-3)",fontWeight:600,fontSize:11.5},statGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:10,marginBottom:14},statTile:{display:"flex",alignItems:"center",gap:10,border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,padding:"12px 14px",cursor:"pointer",fontFamily:"inherit",textAlign:"left",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},statIcon:{width:34,height:34,borderRadius:10,display:"grid",placeItems:"center",flexShrink:0},statVal:{fontSize:16,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},statLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginTop:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},card:{background:"var(--surface)",borderRadius:16,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:10,marginBottom:10},cardTitleBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"none",cursor:"pointer",padding:0,fontFamily:"'Fraunces',Georgia,serif",fontSize:16,fontWeight:700,color:"var(--text)"},cardEyebrow:{fontSize:12,fontWeight:700,color:"var(--text-3)"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"10px 0"},rows:{display:"flex",flexDirection:"column",gap:2},row:{display:"flex",alignItems:"center",gap:8,padding:"7px 0",borderBottom:"1px solid var(--border)"},dot:{width:10,height:10,borderRadius:3,flexShrink:0},rowName:{flex:1,fontSize:13.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},rowMeta:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,flexShrink:0},rowAmt:{fontSize:13.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",flexShrink:0},pieWrap:{display:"flex",alignItems:"center",gap:20,flexWrap:"wrap"},pieChart:{position:"relative",width:110,height:110,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:66,height:66,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:12.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:9.5,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:160,display:"flex",flexDirection:"column",gap:8},pieLegRow:{display:"flex",alignItems:"center",gap:8},legendDot:{width:10,height:10,borderRadius:3,flexShrink:0},pieLegName:{flex:1,fontSize:13,fontWeight:600},pieLegPct:{fontSize:12.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",width:40,textAlign:"right"},pieLegMin:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,minWidth:58,textAlign:"right"},cardGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:10,marginBottom:14},miniCard:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:6,border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,padding:"12px 14px",cursor:"pointer",fontFamily:"inherit",textAlign:"left",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},miniLabel:{fontSize:13,fontWeight:700,color:"var(--text)"},miniStatus:{fontSize:11.5,fontWeight:600},walletRow:{display:"flex",gap:10},walletStat:{flex:1,textAlign:"center"},walletVal:{fontSize:17,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},walletLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginTop:2},quickHead:{fontSize:13,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.06em",margin:"6px 0 10px"},quickCard:{border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,padding:"14px 16px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column",gap:10},quickTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13.5,fontWeight:700,color:"var(--text)"},quickStat:{fontSize:13,color:"var(--text-2)",fontWeight:600},quickAddBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface-2)",color:"var(--text)",padding:"8px 10px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},habitList:{display:"flex",flexWrap:"wrap",gap:6},habitChip:{border:"1px solid var(--border)",background:"var(--surface-2)",color:"var(--text-2)",padding:"5px 10px",borderRadius:14,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit",display:"flex",alignItems:"center",gap:4},habitChipOn:{background:"#4C9A6B",color:"#fff",borderColor:"#4C9A6B"},quadGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6},quadCell:{display:"flex",justifyContent:"space-between",alignItems:"center",border:"1px solid var(--border)",borderRadius:8,padding:"5px 8px",fontSize:11.5},quadLabel:{color:"var(--text-3)",fontWeight:600},quadCount:{fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",fontSize:13},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:200,display:"grid",placeItems:"center",padding:16},modalCard:{background:"var(--surface)",color:"var(--text)",borderRadius:16,padding:"20px 20px 16px",width:340,maxWidth:"100%",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)"},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},modalBody:{display:"flex",flexDirection:"column",gap:8},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface-2)",outline:"none"},modalActions:{display:"flex",gap:8,marginTop:6},modalCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},modalConfirm:{flex:1,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},_y=7e3;function er(e,t,n){const[o,i]=c.useState([]),s=c.useRef({}),l=c.useCallback(async(g,h="Item")=>{await e(g),n();const x=`${g}-${Date.now()}`;i(f=>[...f,{id:x,itemId:g,label:h}]),s.current[x]=setTimeout(()=>{i(f=>f.filter(A=>A.id!==x)),delete s.current[x]},_y)},[e,n]),a=c.useCallback(async g=>{const h=o.find(x=>x.id===g);h&&(clearTimeout(s.current[g]),delete s.current[g],i(x=>x.filter(f=>f.id!==g)),await t(h.itemId),n())},[o,t,n]),d=c.useCallback(g=>{clearTimeout(s.current[g]),delete s.current[g],i(h=>h.filter(x=>x.id!==g))},[]);return{deleteItem:l,toasts:o,handleUndo:a,handleDismiss:d}}function tr({toasts:e,onUndo:t,onDismiss:n}){return r.jsx("div",{style:co.container,children:e.map(o=>r.jsx($y,{toast:o,onUndo:t,onDismiss:n},o.id))})}function $y({toast:e,onUndo:t,onDismiss:n}){const[o,i]=c.useState(100);return c.useEffect(()=>{const s=Date.now(),l=7e3,a=setInterval(()=>{const d=Date.now()-s,g=Math.max(0,100-d/l*100);i(g),g===0&&clearInterval(a)},50);return()=>clearInterval(a)},[]),r.jsxs("div",{style:co.toast,children:[r.jsx("div",{style:{...co.bar,width:`${o}%`}}),r.jsxs("span",{style:co.msg,children:[e.label," deleted"]}),r.jsx("button",{style:co.undoBtn,onClick:()=>t(e.id),children:"Undo"}),r.jsx("button",{style:co.closeBtn,onClick:()=>n(e.id),children:"×"})]})}const co={container:{position:"fixed",bottom:24,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",gap:8,zIndex:999,pointerEvents:"none"},toast:{position:"relative",display:"flex",alignItems:"center",gap:12,background:"var(--accent-strong)",color:"#fff",borderRadius:10,padding:"12px 16px",fontSize:13.5,fontFamily:"'Inter', system-ui, sans-serif",boxShadow:"0 4px 20px rgba(0,0,0,0.25)",minWidth:260,overflow:"hidden",pointerEvents:"all"},bar:{position:"absolute",bottom:0,left:0,height:3,background:"#4C9A6B",transition:"width 0.05s linear",borderRadius:"0 0 0 10px"},msg:{flex:1,fontWeight:500},undoBtn:{border:"1px solid rgba(255,255,255,0.3)",background:"none",color:"#4C9A6B",fontWeight:700,fontSize:13,padding:"4px 10px",borderRadius:6,cursor:"pointer",fontFamily:"inherit"},closeBtn:{border:"none",background:"none",color:"rgba(255,255,255,0.5)",cursor:"pointer",fontSize:18,lineHeight:1,padding:"0 2px"}},$r={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},xu=[{id:"Q1",symbol:"™",title:"Do Now",sub:"Important · Urgent",accent:"#C2536B"},{id:"Q2",symbol:"©",title:"Schedule",sub:"Important · Not Urgent",accent:"#3A7CA5"},{id:"Q3",symbol:"®",title:"Delegate",sub:"Not Important · Urgent",accent:"#C9A227"},{id:"Q4",symbol:"•",title:"Drop",sub:"Not Important · Not Urgent",accent:"#8A8780"}];function Wm(){return new Date().toLocaleDateString("en-CA",{timeZone:"Asia/Kolkata"})}function Lm(){const e=new Date(new Date().toLocaleString("en-US",{timeZone:"Asia/Kolkata"})),n=e.getMinutes()<30?30:0,o=n===0?e.getHours()+1:e.getHours();return`${String(o%24).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function yu(e,t){const[n,o]=e.split(":").map(Number),i=n*60+o+t;return`${String(Math.floor(i/60)%24).padStart(2,"0")}:${String(i%60).padStart(2,"0")}`}function Py(e){return e?new Date(e).toLocaleString("en-IN",{timeZone:"Asia/Kolkata",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit",hour12:!0}):""}const ws=()=>({title:"",pillar:"Financial",est:30,date:Wm(),startTime:Lm()});function Ny(){const[e,t]=c.useState([]),[n,o]=c.useState([]),[i,s]=c.useState("All"),[l,a]=c.useState(null),[d,g]=c.useState(null),[h,x]=c.useState(ws()),[f,A]=c.useState(null),[S,v]=c.useState(ws()),[R,m]=c.useState({connected:!1,configured:!1}),p=c.useCallback(()=>$.getTasks().then(t).catch(console.error),[]);c.useEffect(()=>{p(),$.getGcalStatus().then(m).catch(()=>{}),$.getGoals().then(y=>o(y.filter(E=>E.horizon==="Weekly"))).catch(()=>{})},[p]);const b=Object.keys($r),B=n.filter(y=>i==="All"||y.pillar===i),C=n.find(y=>y.id===l)||null,T=e.filter(y=>l!=null?y.goal_id===l:i!=="All"?y.pillar===i:!0),F=y=>{s(y),a(null),g(null),x(E=>({...E,pillar:y==="All"?"Financial":y}))},_=y=>{a(y),g(null);const E=n.find(P=>P.id===y);E&&x(P=>({...P,pillar:E.pillar}))},{deleteItem:D,toasts:W,handleUndo:w,handleDismiss:te}=er($.deleteTask,$.restoreTask,p),z=y=>T.filter(E=>E.quadrant===y),re=y=>z(y).reduce((E,P)=>E+P.time_estimate_min,0),be=y=>y>=60?`${Math.floor(y/60)}h${y%60?` ${y%60}m`:""}`:`${y}m`,ge=y=>{var P;return`${((P=xu.find(G=>G.id===y.quadrant))==null?void 0:P.symbol)??""} ${y.title}`},ye=async y=>{if(!h.title.trim())return;const E=h.date&&h.startTime?`${h.date}T${h.startTime}:00`:null;await $.createTask({pillar:C?C.pillar:h.pillar,title:h.title,quadrant:y,time_estimate_min:Number(h.est)||30,start_datetime:E,goal_id:l??null}),x(ws()),g(null),p()},J=(y,E)=>D(y,E),H=y=>{const E=y.start_datetime?y.start_datetime.split("T"):[];A(y.id),g(null),v({title:y.title,pillar:y.pillar,est:y.time_estimate_min,date:E[0]||Wm(),startTime:(E[1]||"").slice(0,5)||Lm()})},se=async y=>{if(!S.title.trim())return;const E=S.date&&S.startTime?`${S.date}T${S.startTime}:00`:null;await $.updateTask(y.id,{title:S.title.trim(),pillar:S.pillar,time_estimate_min:Number(S.est)||30,start_datetime:E}),A(null),p()},V=c.useRef(null),de=c.useRef(null),[I,ie]=c.useState(null),Ie=(y,E)=>{var G;const P=document.elementFromPoint(y,E);return P&&P.closest&&((G=P.closest("[data-quad]"))==null?void 0:G.getAttribute("data-quad"))||null};c.useEffect(()=>{const y=P=>{const G=V.current;if(!G)return;const oe=Math.hypot(P.clientX-G.startX,P.clientY-G.startY);if(!G.active){if(G.pointerType!=="mouse"){oe>12&&(clearTimeout(de.current),V.current=null);return}if(oe<6)return;G.active=!0,document.body.style.userSelect="none"}P.cancelable&&P.preventDefault(),G.overQ=Ie(P.clientX,P.clientY),ie({id:G.task.id,title:G.task.title,x:P.clientX,y:P.clientY,overQ:G.overQ})},E=()=>{clearTimeout(de.current);const P=V.current;V.current=null,document.body.style.userSelect="",document.body.style.touchAction="",ie(null),P&&P.active&&P.overQ&&P.overQ!==P.task.quadrant&&$.updateTask(P.task.id,{quadrant:P.overQ}).then(p).catch(()=>{})};return window.addEventListener("pointermove",y,{passive:!1}),window.addEventListener("pointerup",E),window.addEventListener("pointercancel",E),()=>{window.removeEventListener("pointermove",y),window.removeEventListener("pointerup",E),window.removeEventListener("pointercancel",E)}},[p]);const Q=(y,E)=>{y.pointerType==="mouse"&&y.button!==0||(V.current={task:E,startX:y.clientX,startY:y.clientY,active:!1,pointerType:y.pointerType,overQ:null},y.pointerType!=="mouse"&&(de.current=setTimeout(()=>{const P=V.current;P&&(P.active=!0,document.body.style.touchAction="none",ie({id:P.task.id,title:P.task.title,x:P.startX,y:P.startY,overQ:P.task.quadrant}))},280)))};return r.jsxs("div",{style:fe.page,children:[r.jsxs("div",{style:fe.head,children:[r.jsxs("div",{children:[r.jsx("div",{style:fe.eyebrow,children:"Anvil · Weekly Routing"}),r.jsx("h1",{style:fe.h1,children:"Weekly Routing"})]}),r.jsxs("div",{style:fe.headRight,children:[r.jsx("div",{style:fe.legend,children:Object.entries($r).map(([y,E])=>r.jsxs("span",{style:fe.legendItem,children:[r.jsx("span",{style:{...fe.dot,background:E.dot}}),y]},y))}),R.configured&&(R.connected?r.jsxs("button",{style:fe.gcalBadgeOn,title:"Disconnect Google Calendar",onClick:()=>$.disconnectGoogle().then(()=>m({...R,connected:!1})),children:[r.jsx(hs,{size:13})," Google Calendar connected"]}):r.jsxs("button",{style:fe.gcalBadgeOff,onClick:()=>$.connectGoogle(),children:[r.jsx(hs,{size:13})," Connect Google Calendar"]}))]})]}),r.jsx("div",{style:fe.filterBar,children:["All",...b].map(y=>{const E=i===y,P=$r[y];return r.jsxs("button",{onClick:()=>F(y),style:{...fe.pillChip,...E?P?{background:P.dot,color:"#fff",borderColor:P.dot}:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"}:{}},children:[P&&r.jsx("span",{style:{...fe.dot,background:E?"#fff":P.dot}}),y==="All"?"All":y]},y)})}),r.jsxs("div",{style:fe.goalBar,children:[r.jsx("button",{onClick:()=>a(null),style:{...fe.goalChip,...l==null?fe.goalChipOn:{}},children:"All goals"}),B.map(y=>{var G;const E=((G=$r[y.pillar])==null?void 0:G.dot)||"#9A968C",P=l===y.id;return r.jsxs("button",{onClick:()=>_(y.id),style:{...fe.goalChip,...P?{background:E,color:"#fff",borderColor:E}:{}},title:y.title,children:[r.jsx("span",{style:{...fe.dot,background:P?"#fff":E}}),r.jsx("span",{style:fe.goalChipText,children:y.title})]},y.id)}),B.length===0&&r.jsxs("span",{style:fe.goalEmpty,children:["No weekly goals",i!=="All"?` for ${i}`:""," — create them in Goals."]})]}),r.jsx("div",{style:fe.grid,children:xu.map(y=>{var E,P;return r.jsxs("section",{"data-quad":y.id,style:{...fe.quad,borderTop:`3px solid ${y.accent}`,...I&&I.overQ===y.id&&I.overQ!==((E=e.find(G=>G.id===I.id))==null?void 0:E.quadrant)?{outline:`2px dashed ${y.accent}`,outlineOffset:2,background:"var(--hover)"}:{}},children:[r.jsxs("header",{style:fe.quadHead,children:[r.jsxs("div",{style:fe.quadTitleRow,children:[r.jsx("span",{style:{...fe.symbol,color:y.accent},children:y.symbol}),r.jsxs("div",{children:[r.jsx("div",{style:fe.quadTitle,children:y.title}),r.jsx("div",{style:fe.quadSub,children:y.sub})]})]}),r.jsx("span",{style:fe.quadTotal,children:be(re(y.id))})]}),r.jsxs("div",{style:fe.list,children:[z(y.id).map(G=>{const oe=$r[G.pillar]||$r.Financial,pe=!!G.gcal_event_id;return f===G.id?r.jsxs("div",{style:fe.addBox,children:[r.jsx("input",{autoFocus:!0,placeholder:"Task title",value:S.title,onChange:O=>v({...S,title:O.target.value}),onKeyDown:O=>O.key==="Enter"&&se(G),style:fe.input}),r.jsxs("div",{style:fe.dateTimeRow,children:[r.jsxs("div",{style:fe.dateTimeGroup,children:[r.jsx("label",{style:fe.dtLabel,children:"Date"}),r.jsx("input",{type:"date",value:S.date,onChange:O=>v({...S,date:O.target.value}),style:fe.dtInput})]}),r.jsxs("div",{style:fe.dateTimeGroup,children:[r.jsx("label",{style:fe.dtLabel,children:"Start"}),r.jsx("input",{type:"time",value:S.startTime,onChange:O=>v({...S,startTime:O.target.value}),style:fe.dtInput})]}),r.jsxs("div",{style:fe.dateTimeGroup,children:[r.jsx("label",{style:fe.dtLabel,children:"End"}),r.jsx("div",{style:fe.dtEndValue,children:yu(S.startTime,Number(S.est)||30)})]})]}),r.jsxs("div",{style:fe.addRow,children:[r.jsx("select",{value:S.pillar,onChange:O=>v({...S,pillar:O.target.value}),style:fe.select,children:Object.keys($r).map(O=>r.jsx("option",{children:O},O))}),r.jsx("input",{type:"number",value:S.est,onChange:O=>v({...S,est:O.target.value}),style:{...fe.input,width:60}}),r.jsx("span",{style:fe.minLabel,children:"min"}),r.jsx("button",{onClick:()=>se(G),style:fe.saveBtn,children:r.jsx(Ne,{size:14})}),r.jsx("button",{onClick:()=>A(null),style:fe.cancelBtn,children:r.jsx(De,{size:14})})]})]},G.id):r.jsxs("div",{onPointerDown:O=>Q(O,G),style:{...fe.card,background:oe.soft,cursor:"grab",touchAction:"pan-y",...(I==null?void 0:I.id)===G.id?{opacity:.4}:{}},children:[r.jsx("span",{style:{...fe.cardBar,background:oe.dot}}),r.jsxs("div",{style:fe.cardBody,children:[r.jsx("div",{style:fe.cardTitle,children:G.title}),G.start_datetime&&r.jsxs("div",{style:fe.eventTime,children:[r.jsx(hs,{size:10}),Py(G.start_datetime),pe&&r.jsx("span",{style:fe.syncedDot,title:"Synced to Google Calendar"})]}),r.jsxs("div",{style:fe.cardMeta,children:[r.jsxs("span",{style:fe.metaPill,children:[r.jsx("span",{style:{...fe.dot,background:oe.dot,width:7,height:7}}),G.pillar]}),r.jsxs("span",{style:fe.metaPill,children:[r.jsx(Vx,{size:11})," ",be(G.time_estimate_min)]})]})]}),r.jsxs("div",{style:fe.cardActions,children:[pe&&r.jsx("span",{title:`On calendar as "${ge(G)}"`,style:fe.calDoneIcon,children:r.jsx(Ne,{size:14})}),r.jsx("button",{onClick:()=>H(G),onPointerDown:O=>O.stopPropagation(),style:fe.delBtn,title:"Edit",children:r.jsx(xt,{size:12})}),r.jsx("button",{onClick:()=>J(G.id,G.title),onPointerDown:O=>O.stopPropagation(),style:fe.delBtn,children:r.jsx(De,{size:13})})]})]},G.id)}),d===y.id?r.jsxs("div",{style:fe.addBox,children:[r.jsx("input",{autoFocus:!0,placeholder:"Task title",value:h.title,onChange:G=>x({...h,title:G.target.value}),onKeyDown:G=>G.key==="Enter"&&ye(y.id),style:fe.input}),r.jsxs("div",{style:fe.dateTimeRow,children:[r.jsxs("div",{style:fe.dateTimeGroup,children:[r.jsx("label",{style:fe.dtLabel,children:"Date"}),r.jsx("input",{type:"date",value:h.date,onChange:G=>x({...h,date:G.target.value}),style:fe.dtInput})]}),r.jsxs("div",{style:fe.dateTimeGroup,children:[r.jsx("label",{style:fe.dtLabel,children:"Start"}),r.jsx("input",{type:"time",value:h.startTime,onChange:G=>x({...h,startTime:G.target.value}),style:fe.dtInput})]}),r.jsxs("div",{style:fe.dateTimeGroup,children:[r.jsx("label",{style:fe.dtLabel,children:"End"}),r.jsx("div",{style:fe.dtEndValue,children:yu(h.startTime,Number(h.est)||30)})]})]}),r.jsxs("div",{style:fe.addRow,children:[C?r.jsxs("span",{style:fe.goalPillarTag,children:[r.jsx("span",{style:{...fe.dot,background:(P=$r[C.pillar])==null?void 0:P.dot}})," ",C.pillar]}):r.jsx("select",{value:h.pillar,onChange:G=>x({...h,pillar:G.target.value}),style:fe.select,children:Object.keys($r).map(G=>r.jsx("option",{children:G},G))}),r.jsx("input",{type:"number",value:h.est,onChange:G=>x({...h,est:G.target.value}),style:{...fe.input,width:60}}),r.jsx("span",{style:fe.minLabel,children:"min"}),R.connected&&r.jsx("span",{style:fe.gcalHint,title:"Will sync to Google Calendar",children:r.jsx(hs,{size:12})}),r.jsx("button",{onClick:()=>ye(y.id),style:fe.saveBtn,children:r.jsx(Ne,{size:14})}),r.jsx("button",{onClick:()=>{g(null),x(ws())},style:fe.cancelBtn,children:r.jsx(De,{size:14})})]})]}):r.jsxs("button",{onClick:()=>g(y.id),style:fe.addTrigger,children:[r.jsx(Qe,{size:13})," Add task"]})]})]},y.id)})}),I&&r.jsx("div",{style:{...fe.dragClone,left:I.x+12,top:I.y+12},children:I.title}),r.jsx(tr,{toasts:W,onUndo:w,onDismiss:te})]})}const fe={page:{fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:16,marginBottom:22},headRight:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:10},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces', Georgia, serif"},legend:{display:"flex",gap:14,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"var(--text-2)",fontWeight:500},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},gcalBadgeOn:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:500,color:"#4C9A6B",background:"rgba(76,154,107,0.10)",border:"1px solid rgba(76,154,107,0.3)",borderRadius:20,padding:"5px 12px",cursor:"pointer"},gcalBadgeOff:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:500,color:"var(--text-2)",background:"var(--surface)",border:"1px solid #DCDAD3",borderRadius:20,padding:"5px 12px",cursor:"pointer"},filterBar:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:10},pillChip:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},goalBar:{display:"flex",gap:7,flexWrap:"wrap",alignItems:"center",marginBottom:18,paddingBottom:14,borderBottom:"1px solid var(--border)"},goalChip:{display:"inline-flex",alignItems:"center",gap:6,maxWidth:220,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},goalChipOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},goalChipText:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},goalEmpty:{fontSize:12,color:"var(--text-3)",fontStyle:"italic"},goalPillarTag:{display:"inline-flex",alignItems:"center",gap:6,fontSize:12.5,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"7px 10px",borderRadius:6,flex:1},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:16},quad:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.06)"},quadHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14},quadTitleRow:{display:"flex",gap:10,alignItems:"center"},symbol:{fontSize:20,lineHeight:1},quadTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em"},quadSub:{fontSize:11,color:"var(--text-3)",marginTop:1,letterSpacing:"0.02em"},quadTotal:{fontSize:12,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"3px 9px",borderRadius:20},list:{display:"flex",flexDirection:"column",gap:8},card:{display:"flex",alignItems:"stretch",gap:10,borderRadius:9,padding:"10px 10px 10px 0",overflow:"hidden"},cardBar:{width:3,borderRadius:3,flexShrink:0},cardBody:{flex:1,minWidth:0},cardTitle:{fontSize:13.5,fontWeight:500,lineHeight:1.35,marginBottom:4},eventTime:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"#3A7CA5",fontWeight:500,marginBottom:5},syncedDot:{width:6,height:6,borderRadius:"50%",background:"#4C9A6B",display:"inline-block",marginLeft:2},cardMeta:{display:"flex",gap:8,flexWrap:"wrap"},metaPill:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"var(--text-2)",fontWeight:500},cardActions:{display:"flex",flexDirection:"column",gap:4,alignSelf:"center",flexShrink:0},calDoneIcon:{width:30,height:30,borderRadius:8,background:"#4C9A6B",color:"#fff",display:"grid",placeItems:"center"},delBtn:{width:30,height:30,borderRadius:8,border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center"},addTrigger:{display:"flex",alignItems:"center",gap:5,fontSize:12.5,color:"var(--text-3)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"8px 10px",cursor:"pointer",fontWeight:500,marginTop:2},addBox:{border:"1px solid var(--border)",borderRadius:9,padding:10,display:"flex",flexDirection:"column",gap:8},dateTimeRow:{display:"flex",gap:8,alignItems:"flex-end"},dateTimeGroup:{display:"flex",flexDirection:"column",gap:3,flex:1},dtLabel:{fontSize:10,fontWeight:600,color:"var(--text-3)",letterSpacing:"0.08em",textTransform:"uppercase"},dtInput:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},dtEndValue:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,color:"var(--text-2)",background:"var(--bg)"},addRow:{display:"flex",alignItems:"center",gap:6},input:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",flex:1,minWidth:0},select:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 8px",fontSize:12.5,fontFamily:"inherit",flex:1},minLabel:{fontSize:11,color:"var(--text-3)"},gcalHint:{color:"#3A7CA5",display:"grid",placeItems:"center"},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"},dragClone:{position:"fixed",zIndex:1e3,pointerEvents:"none",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:8,padding:"8px 12px",fontSize:13,fontWeight:600,color:"var(--text)",boxShadow:"0 8px 24px rgba(0,0,0,0.25)",maxWidth:220,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},gr={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},ei=Object.keys(gr),Us=["Yearly","Quarterly","Monthly","Weekly"],Fr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],vu=[{label:"Q1 · Jan–Mar",startMonth:0},{label:"Q2 · Apr–Jun",startMonth:3},{label:"Q3 · Jul–Sep",startMonth:6},{label:"Q4 · Oct–Dec",startMonth:9}],Vs=new Date().getFullYear(),oo=Array.from({length:8},(e,t)=>Vs-1+t);function Oy(e=720){const[t,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),t}const ai=864e5,Et=30,ki=190,io=e=>new Date(e+"T00:00:00"),ku=e=>e.toLocaleDateString("en-US",{month:"short",day:"numeric"}),Hy=[{key:"yearly",label:"Yearly",horizons:["Yearly"]},{key:"quarterly",label:"Quarterly",horizons:["Quarterly"]},{key:"mw",label:"Monthly & Weekly",horizons:["Monthly","Weekly"]}],ju={Yearly:"Yr",Quarterly:"Q",Monthly:"Mo",Weekly:"Wk"},Gy={Yearly:"Y",Quarterly:"Q",Monthly:"M",Weekly:"W"},wu={Yearly:0,Quarterly:1,Monthly:2,Weekly:3},ya=e=>Us[Math.min(Us.indexOf(e)+1,Us.length-1)],Ss=e=>{if(!e||!e.start_date)return Array.from({length:12},(l,a)=>a);const t=new Date(e.start_date+"T00:00:00"),n=new Date(e.end_date+"T00:00:00"),o=t.getFullYear(),i=t.getMonth(),s=n.getFullYear()>o?11:n.getMonth();return Array.from({length:s-i+1},(l,a)=>i+a)},ti=e=>new Date(e+"T00:00:00").getFullYear(),_m=(e,t,n)=>{const o=(n-1)*7+1,i=Math.min(o+6,new Date(e,t+1,0).getDate()),s=String(t+1).padStart(2,"0");return{start_date:`${e}-${s}-${String(o).padStart(2,"0")}`,end_date:`${e}-${s}-${String(i).padStart(2,"0")}`}},Su=(e,t,n,o=1)=>{const i=t;switch(e){case"Yearly":return{start_date:`${i}-01-01`,end_date:`${i}-12-31`};case"Quarterly":{const s=Math.floor(n/3)*3,l=s+1,a=s+3,d=new Date(i,a,0).getDate();return{start_date:`${i}-${String(l).padStart(2,"0")}-01`,end_date:`${i}-${String(a).padStart(2,"0")}-${d}`}}case"Monthly":{const s=new Date(i,n+1,0).getDate();return{start_date:`${i}-${String(n+1).padStart(2,"0")}-01`,end_date:`${i}-${String(n+1).padStart(2,"0")}-${s}`}}case"Weekly":return _m(i,n,o);default:return{start_date:`${i}-01-01`,end_date:`${i}-12-31`}}},ji=(e,t)=>{const n=new Date(e+"T00:00:00");return n.setDate(n.getDate()+t),`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`},Sl=(e,t)=>Math.round((new Date(t+"T00:00:00")-new Date(e+"T00:00:00"))/ai)+1,Uy=(e,t,n)=>{if(!n||!n.start_date||!n.end_date)return{start_date:e,end_date:t,clamped:!1};const o=Sl(e,t);let i=e,s=t,l=!1;return i<n.start_date&&(i=n.start_date,s=ji(i,o-1),l=!0),s>n.end_date&&(s=n.end_date,i=ji(s,-(o-1)),l=!0,i<n.start_date&&(i=n.start_date)),{start_date:i,end_date:s,clamped:l}},Vy=(e,t)=>new Date(e,t+1,0).getDate(),Md=e=>{const t=new Date(e.start_date+"T00:00:00");if(e.horizon==="Monthly")return Vy(t.getFullYear(),t.getMonth());if(e.horizon==="Weekly"){const n=Math.min(Math.max(Math.ceil(t.getDate()/7),1),4),o=_m(t.getFullYear(),t.getMonth(),n);return Sl(o.start_date,o.end_date)}return Sl(e.start_date,e.end_date)},Cu=e=>Math.round(Md(e)*1.5),Yy=e=>e.horizon==="Monthly"||e.horizon==="Weekly",Qy=e=>{if(!e.start_date)return"";const t=new Date(e.start_date+"T00:00:00"),n=t.getMonth();switch(e.horizon){case"Yearly":{const o=e.end_date?new Date(e.end_date+"T00:00:00").getFullYear():t.getFullYear();return o>t.getFullYear()?`${t.getFullYear()}–${o}`:`${t.getFullYear()}`}case"Quarterly":return`Q${Math.floor(n/3)+1} ${t.getFullYear()}`;case"Monthly":return`${Fr[n]} ${t.getFullYear()}`;case"Weekly":return`${Fr[n]} W${Math.ceil(t.getDate()/7)}`;default:return""}};function Ky(){const[e,t]=c.useState([]),[n,o]=c.useState("All"),[i,s]=c.useState({}),[l,a]=c.useState({}),[d,g]=c.useState(null),[h,x]=c.useState(""),[f,A]=c.useState(0),[S,v]=c.useState(1),[R,m]=c.useState(Vs),[p,b]=c.useState(Vs),[B,C]=c.useState("Yearly"),[T,F]=c.useState(ei[0]),[_,D]=c.useState(null),W=Oy(),[w,te]=c.useState(!W),[z,re]=c.useState("day"),[be,ge]=c.useState(null),ye=c.useRef(null);c.useEffect(()=>{ye.current=be},[be]);const J=c.useRef(e);c.useEffect(()=>{J.current=e},[e]);const[H,se]=c.useState(null),V=c.useRef(null);c.useEffect(()=>{V.current=H},[H]);const de=c.useRef(null),I=c.useRef(0),[ie,Ie]=c.useState(null),Q=c.useRef(null),y=c.useCallback(L=>{Ie(L),clearTimeout(Q.current),Q.current=setTimeout(()=>Ie(null),2800)},[]),[E,P]=c.useState(null),G=c.useRef(null),[oe,pe]=c.useState(null),[O,M]=c.useState(null),k=(L,K)=>{if(oe===K){pe(null);return}const ze=L.currentTarget.getBoundingClientRect(),Re=ze.bottom+220<window.innerHeight;M({right:Math.max(8,window.innerWidth-ze.right),...Re?{top:ze.bottom+4}:{bottom:window.innerHeight-ze.top+4}}),pe(K)},ee=L=>{clearTimeout(G.current),G.current=setTimeout(()=>P(L),350)},he=()=>{clearTimeout(G.current),P(null)},Ee=c.useCallback(()=>{$.getGoals().then(t).catch(console.error)},[]);c.useEffect(()=>{Ee()},[Ee]);const{deleteItem:ut,toasts:Pe,handleUndo:nt,handleDismiss:qe}=er($.deleteGoal,$.restoreGoal,Ee),Xe=c.useCallback(async()=>{const L=ye.current;if(ge(null),!L)return;const K=Math.round(L.dx/(L.pxPerDay||Et));if(!K)return;let ze=ji(L.g.start_date,K),Re=ji(L.g.end_date,K);if(L.g.parent_goal_id){const Ge=J.current.find(Ue=>Ue.id===L.g.parent_goal_id),Oe=Uy(ze,Re,Ge);Oe.clamped&&y(`Can't move past "${(Ge==null?void 0:Ge.title)||"parent goal"}" — kept within its dates.`),ze=Oe.start_date,Re=Oe.end_date}(ze!==L.g.start_date||Re!==L.g.end_date)&&(await $.updateGoal(L.g.id,{pillar:L.g.pillar,start_date:ze,end_date:Re}),Ee())},[Ee,y]),ot=!!be;c.useEffect(()=>{if(!ot)return;const L=Oe=>{I.current=Oe.clientX,ge(Ue=>Ue&&{...Ue,dx:Oe.clientX-Ue.startX})},K=()=>Xe();window.addEventListener("pointermove",L),window.addEventListener("pointerup",K);const ze=44,Re=16,Ge=setInterval(()=>{const Oe=de.current;if(!Oe)return;const Ue=Oe.getBoundingClientRect(),rt=I.current;let ve=0;if(rt<Ue.left+ze?ve=-1:rt>Ue.right-ze&&(ve=1),!ve)return;const Tt=Oe.scrollLeft;Oe.scrollLeft=Math.max(0,Math.min(Tt+ve*Re,Oe.scrollWidth-Oe.clientWidth));const rr=Oe.scrollLeft-Tt;rr&&ge(Ze=>Ze&&{...Ze,startX:Ze.startX-rr,dx:rt-(Ze.startX-rr)})},16);return()=>{window.removeEventListener("pointermove",L),window.removeEventListener("pointerup",K),clearInterval(Ge)}},[ot,Xe]);const tt=c.useCallback(async()=>{const L=V.current;if(se(null),!L)return;const K=L.g,ze=Md(K),Re=Cu(K),Ge=Math.max(ze,Math.min(Re,Sl(K.start_date,K.end_date)+Math.round(L.dx/Et)));let Oe=ji(K.start_date,Ge-1);if(K.parent_goal_id){const Ue=J.current.find(rt=>rt.id===K.parent_goal_id);Ue!=null&&Ue.end_date&&Oe>Ue.end_date&&(Oe=Ue.end_date,y(`Can't extend past "${(Ue==null?void 0:Ue.title)||"parent goal"}" — kept within its dates.`))}Oe!==K.end_date&&Oe>=K.start_date&&(await $.updateGoal(K.id,{end_date:Oe}),Ee())},[Ee,y]),Tr=!!H;c.useEffect(()=>{if(!Tr)return;const L=ze=>se(Re=>Re&&{...Re,dx:ze.clientX-Re.startX}),K=()=>tt();return window.addEventListener("pointermove",L),window.addEventListener("pointerup",K),()=>{window.removeEventListener("pointermove",L),window.removeEventListener("pointerup",K)}},[Tr,tt]);const Ot=n==="All",wt=gr[n]||{dot:"var(--text-3)"},pt=Ot?e:e.filter(L=>L.pillar===n),St=pt.filter(L=>!L.parent_goal_id),u=L=>pt.filter(K=>K.parent_goal_id===L),q=L=>a(K=>({...K,[L]:!K[L]})),Ae=L=>L.horizon==="Monthly"||L.horizon==="Weekly",Le=L=>i[L.id]!==void 0?i[L.id]:Ae(L),we=L=>s(K=>({...K,[L.id]:!Le(L)})),$e=(L,K=null)=>{g(L),x(""),v(1);const ze=K?ti(K.start_date):Vs;m(ze),b(ze),L==="ROOT"&&F(Ot?ei[0]:n);const Re=L==="ROOT"?"Yearly":ya(K==null?void 0:K.horizon);C(Re);const Ge=L==="ROOT"?Array.from({length:12},(Oe,Ue)=>Ue):Ss(K);A(Re==="Quarterly"?Math.floor(Ge[0]/3)*3:Ge[0]??0)},Ct=async(L,K)=>{if(!h.trim())return;const ze=(K==null?void 0:K.horizon)??null,Re=L==="ROOT"?B:ya(ze),Ge=L==="ROOT"?T:(K==null?void 0:K.pillar)||n;let Oe,Ue;if(Re==="Yearly"){const rt=Number(R),ve=Math.max(rt,Number(p)||rt);Oe=`${rt}-01-01`,Ue=`${ve}-12-31`}else{const rt=K?ti(K.start_date):Number(R);({start_date:Oe,end_date:Ue}=Su(Re,rt,f,S))}await $.createGoal({pillar:Ge,title:h.trim(),horizon:Re,parent_goal_id:L==="ROOT"?null:L,start_date:Oe,end_date:Ue}),L!=="ROOT"&&a(rt=>({...rt,[L]:!0})),g(null),x(""),Ee()},At=L=>{const K=L.start_date?new Date(L.start_date+"T00:00:00"):new Date,ze=K.getMonth(),Re=Math.min(Math.max(Math.ceil(K.getDate()/7),1),4);D({id:L.id,title:L.title,pillar:L.pillar,horizon:L.horizon,parentGoal:e.find(Ge=>Ge.id===L.parent_goal_id)||null,year:ti(L.start_date),endYear:ti(L.end_date),month:L.horizon==="Quarterly"?Math.floor(ze/3)*3:ze,week:Re})},ln=async()=>{if(!_||!_.title.trim())return;let L,K;if(_.horizon==="Yearly"){const ze=Number(_.year),Re=Math.max(ze,Number(_.endYear)||ze);L=`${ze}-01-01`,K=`${Re}-12-31`}else{let ze=_.month;_.horizon==="Weekly"&&_.parentGoal&&(ze=Ss(_.parentGoal)[0]);const Re=_.parentGoal?ti(_.parentGoal.start_date):Number(_.year);({start_date:L,end_date:K}=Su(_.horizon,Re,ze,_.week))}await $.updateGoal(_.id,{title:_.title.trim(),pillar:_.pillar,start_date:L,end_date:K}),D(null),Ee()},Xi=({parentId:L,parentGoal:K,depth:ze})=>{const Re=L==="ROOT",Ge=Re?B:ya((K==null?void 0:K.horizon)??null),Oe=Re?Array.from({length:12},(ve,Tt)=>Tt):Ss(K),Ue=vu.filter(ve=>Oe.includes(ve.startMonth)),rt=ve=>{C(ve),A(0),v(1),b(R)};return r.jsxs("div",{style:{...ne.addBox,marginLeft:ze*24},children:[r.jsx("input",{autoFocus:!0,placeholder:`New ${Ge.toLowerCase()} goal…`,value:h,onChange:ve=>x(ve.target.value),onKeyDown:ve=>{ve.key==="Enter"&&Ct(L,K),ve.key==="Escape"&&g(null)},style:ne.input}),Re&&Ot&&r.jsx("select",{value:T,onChange:ve=>F(ve.target.value),style:ne.monthSelect,title:"Pillar",children:ei.map(ve=>r.jsx("option",{value:ve,children:ve},ve))}),Re&&r.jsx("select",{value:B,onChange:ve=>rt(ve.target.value),style:ne.monthSelect,title:"Goal level",children:Us.map(ve=>r.jsx("option",{value:ve,children:ve},ve))}),Ge==="Yearly"&&r.jsxs(r.Fragment,{children:[r.jsx("select",{value:R,onChange:ve=>{const Tt=Number(ve.target.value);m(Tt),p<Tt&&b(Tt)},style:ne.monthSelect,title:"Start year",children:oo.map(ve=>r.jsx("option",{value:ve,children:ve},ve))}),r.jsx("span",{style:ne.toTag,children:"to"}),r.jsx("select",{value:p,onChange:ve=>b(Number(ve.target.value)),style:ne.monthSelect,title:"End year (spans multiple years)",children:oo.filter(ve=>ve>=R).map(ve=>r.jsx("option",{value:ve,children:ve},ve))})]}),Ge!=="Yearly"&&Re&&r.jsx("select",{value:R,onChange:ve=>m(Number(ve.target.value)),style:ne.monthSelect,title:"Year",children:oo.map(ve=>r.jsx("option",{value:ve,children:ve},ve))}),Ge==="Quarterly"&&r.jsx("select",{value:f,onChange:ve=>A(Number(ve.target.value)),style:ne.monthSelect,children:Ue.map(ve=>r.jsx("option",{value:ve.startMonth,children:ve.label},ve.startMonth))}),Ge==="Monthly"&&r.jsx("select",{value:f,onChange:ve=>A(Number(ve.target.value)),style:ne.monthSelect,children:Oe.map(ve=>r.jsx("option",{value:ve,children:Fr[ve]},ve))}),Ge==="Weekly"&&r.jsxs(r.Fragment,{children:[Re?r.jsx("select",{value:f,onChange:ve=>A(Number(ve.target.value)),style:ne.monthSelect,children:Oe.map(ve=>r.jsx("option",{value:ve,children:Fr[ve]},ve))}):r.jsx("span",{style:ne.inheritTag,children:Fr[Oe[0]]}),r.jsx("select",{value:S,onChange:ve=>v(Number(ve.target.value)),style:ne.monthSelect,children:[1,2,3,4].map(ve=>r.jsxs("option",{value:ve,children:["Week ",ve]},ve))})]}),r.jsx("button",{onClick:()=>Ct(L,K),style:ne.saveBtn,children:r.jsx(Ne,{size:14})}),r.jsx("button",{onClick:()=>g(null),style:ne.cancelBtn,children:r.jsx(De,{size:14})})]})},qi=({goal:L,depth:K})=>{var Ue,rt,ve,Tt,rr;const ze=u(L.id),Re=l[L.id],Ge=L.horizon!=="Weekly";if((_==null?void 0:_.id)===L.id){const Ze=Ss(_.parentGoal),An=vu.filter(Fe=>Ze.includes(Fe.startMonth)),Go=!_.parentGoal;return r.jsxs("div",{style:{...ne.editBox,marginLeft:K*24},children:[r.jsx("input",{autoFocus:!0,value:_.title,onChange:Fe=>D({..._,title:Fe.target.value}),onKeyDown:Fe=>Fe.key==="Enter"&&ln(),style:{...ne.input,flex:1}}),r.jsx("select",{value:_.pillar,onChange:Fe=>D({..._,pillar:Fe.target.value}),style:ne.monthSelect,children:ei.map(Fe=>r.jsx("option",{children:Fe},Fe))}),_.horizon==="Yearly"&&r.jsxs(r.Fragment,{children:[r.jsx("select",{value:_.year,onChange:Fe=>{const Uo=Number(Fe.target.value);D({..._,year:Uo,endYear:Math.max(Uo,_.endYear)})},style:ne.monthSelect,title:"Start year",children:oo.map(Fe=>r.jsx("option",{value:Fe,children:Fe},Fe))}),r.jsx("span",{style:ne.toTag,children:"to"}),r.jsx("select",{value:_.endYear,onChange:Fe=>D({..._,endYear:Number(Fe.target.value)}),style:ne.monthSelect,title:"End year (spans multiple years)",children:oo.filter(Fe=>Fe>=_.year).map(Fe=>r.jsx("option",{value:Fe,children:Fe},Fe))})]}),_.horizon!=="Yearly"&&Go&&r.jsx("select",{value:_.year,onChange:Fe=>D({..._,year:Number(Fe.target.value)}),style:ne.monthSelect,title:"Year",children:oo.map(Fe=>r.jsx("option",{value:Fe,children:Fe},Fe))}),_.horizon==="Quarterly"&&r.jsx("select",{value:_.month,onChange:Fe=>D({..._,month:Number(Fe.target.value)}),style:ne.monthSelect,children:An.map(Fe=>r.jsx("option",{value:Fe.startMonth,children:Fe.label},Fe.startMonth))}),_.horizon==="Monthly"&&r.jsx("select",{value:_.month,onChange:Fe=>D({..._,month:Number(Fe.target.value)}),style:ne.monthSelect,children:Ze.map(Fe=>r.jsx("option",{value:Fe,children:Fr[Fe]},Fe))}),_.horizon==="Weekly"&&r.jsxs(r.Fragment,{children:[Go?r.jsx("select",{value:_.month,onChange:Fe=>D({..._,month:Number(Fe.target.value)}),style:ne.monthSelect,children:Ze.map(Fe=>r.jsx("option",{value:Fe,children:Fr[Fe]},Fe))}):r.jsx("span",{style:ne.inheritTag,children:Fr[Ze[0]]}),r.jsx("select",{value:_.week,onChange:Fe=>D({..._,week:Number(Fe.target.value)}),style:ne.monthSelect,children:[1,2,3,4].map(Fe=>r.jsxs("option",{value:Fe,children:["Week ",Fe]},Fe))})]}),r.jsx("button",{onClick:ln,style:ne.saveBtn,children:r.jsx(Ne,{size:14})}),r.jsx("button",{onClick:()=>D(null),style:ne.cancelBtn,children:r.jsx(De,{size:14})})]})}return r.jsxs("div",{children:[r.jsxs("div",{style:{...ne.row,marginLeft:K*24,background:K===0&&((Ue=gr[L.pillar])==null?void 0:Ue.soft)||"transparent"},children:[ze.length>0?r.jsx("button",{onClick:()=>q(L.id),style:ne.caret,children:Re?r.jsx(Qi,{size:15}):r.jsx(sn,{size:15})}):r.jsx("span",{style:{...ne.caret,opacity:.25},children:r.jsx(Gc,{size:12})}),r.jsx("span",{style:{...ne.horizonTag,color:((rt=gr[L.pillar])==null?void 0:rt.dot)||wt.dot,borderColor:((ve=gr[L.pillar])==null?void 0:ve.dot)||wt.dot},title:L.horizon,children:W?Gy[L.horizon]:L.horizon}),r.jsxs("div",{style:ne.nameCol,children:[r.jsx("span",{style:{...ne.title,...E===L.id?ne.titleFull:{}},title:L.title,onPointerDown:()=>ee(L.id),onPointerUp:he,onPointerLeave:he,onPointerCancel:he,children:L.title}),r.jsx("span",{style:ne.whenSub,children:Qy(L)})]}),W?r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{position:"relative",flexShrink:0},children:[r.jsx("button",{onClick:Ze=>k(Ze,L.id),style:ne.rowAdd,title:"Options",children:r.jsx(Rm,{size:15})}),oe===L.id&&r.jsxs(r.Fragment,{children:[r.jsx("div",{style:ne.menuBackdrop,onClick:()=>pe(null)}),r.jsxs("div",{style:{...ne.goalMenu,...O},children:[r.jsxs("button",{style:ne.menuItem,onClick:()=>{At(L),pe(null)},children:[r.jsx(xt,{size:14})," Edit"]}),Ge&&r.jsxs("button",{style:ne.menuItem,onClick:()=>{a(Ze=>({...Ze,[L.id]:!0})),$e(L.id,L),pe(null)},children:[r.jsx(Qe,{size:14})," Add sub-goal"]}),r.jsxs("button",{style:{...ne.menuItem,color:"#C2536B"},onClick:()=>{ut(L.id,L.title),pe(null)},children:[r.jsx(De,{size:14})," Delete"]})]})]})]}),r.jsx("button",{onClick:()=>we(L),style:{...ne.rowAdd,color:Le(L)?((Tt=gr[L.pillar])==null?void 0:Tt.dot)||wt.dot:"var(--text-3)"},title:Le(L)?"Showing on timeline":"Hidden from timeline",children:Le(L)?r.jsx(fl,{size:14}):r.jsx(Td,{size:14})})]}):r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:()=>we(L),style:{...ne.rowAdd,color:Le(L)?((rr=gr[L.pillar])==null?void 0:rr.dot)||wt.dot:"var(--text-3)"},title:Le(L)?"Showing on timeline — click to hide":"Hidden from timeline — click to show",children:Le(L)?r.jsx(fl,{size:13}):r.jsx(Td,{size:13})}),r.jsx("button",{onClick:()=>At(L),style:ne.rowAdd,title:"Edit",children:r.jsx(xt,{size:12})}),Ge&&r.jsx("button",{onClick:()=>{a(Ze=>({...Ze,[L.id]:!0})),$e(L.id,L)},style:ne.rowAdd,title:"Add sub-goal",children:r.jsx(Qe,{size:13})}),r.jsx("button",{onClick:()=>ut(L.id,L.title),style:{...ne.rowAdd,color:"var(--text-3)"},title:"Delete",children:r.jsx(De,{size:13})})]})]}),Re&&ze.map(Ze=>r.jsx(qi,{goal:Ze,depth:K+1},Ze.id)),Re&&d===L.id&&r.jsx(Xi,{parentId:L.id,parentGoal:L,depth:K+1})]})},vt=e.filter(L=>Le(L)&&L.start_date&&L.end_date),No=Hy.map(L=>({...L,items:vt.filter(K=>L.horizons.includes(K.horizon)).sort((K,ze)=>K.pillar.localeCompare(ze.pillar)||K.start_date.localeCompare(ze.start_date)||wu[K.horizon]-wu[ze.horizon]||K.end_date.localeCompare(ze.end_date))})).filter(L=>L.items.length>0),lt=(()=>{if(!vt.length)return null;let L=vt[0].start_date,K=vt[0].end_date;return vt.forEach(ze=>{ze.start_date<L&&(L=ze.start_date),ze.end_date>K&&(K=ze.end_date)}),{start:io(L),end:io(K)}})(),N=(()=>{if(!lt)return[];const L=[];for(let K=lt.start.getTime();K<=lt.end.getTime();K+=ai)L.push(new Date(K));return L})(),me=N.length,Ht=(()=>{const L=[];return N.forEach(K=>{const ze=`${K.getFullYear()}-${K.getMonth()}`,Re=L[L.length-1];Re&&Re.key===ze?Re.days++:L.push({key:ze,label:`${Fr[K.getMonth()]} '${String(K.getFullYear()).slice(2)}`,days:1})}),L})(),Qt=new Date;Qt.setHours(0,0,0,0);const dr=lt?Math.round((Qt-lt.start)/ai):-1,Er=dr>=0&&dr<me,Oo=L=>Math.round((io(L.end_date)-io(L.start_date))/ai)+1,Br=z==="month",to=lt?lt.start.getFullYear():0,_r=lt?lt.start.getMonth():0,Zi=(()=>{if(!lt)return[];const L=[];let K=to,ze=_r;const Re=lt.end.getFullYear(),Ge=lt.end.getMonth();for(;K<Re||K===Re&&ze<=Ge;)L.push({y:K,m:ze}),ze++,ze>11&&(ze=0,K++);return L})(),Ho=Zi.length||1,Gl=(L,K)=>{const ze=io(L),Re=(ze.getFullYear()-to)*12+ze.getMonth()-_r,Ge=new Date(ze.getFullYear(),ze.getMonth()+1,0).getDate();return Re+(ze.getDate()-(K?0:1))/Ge},Ul=(L,K)=>Gl(L,K)/Ho*100,Zm=`${Qt.getFullYear()}-${String(Qt.getMonth()+1).padStart(2,"0")}-${String(Qt.getDate()).padStart(2,"0")}`,Jm=lt?Ul(Zm,!1):0,Jc=(w?ki:0)+dr*Et,eh=lt?`${lt.start.getTime()}-${lt.end.getTime()}`:"";return c.useEffect(()=>{if(Br||!Er)return;const L=de.current;L&&(L.scrollLeft=Math.max(0,Jc-L.clientWidth/2+Et/2))},[eh,dr,w,Er,Br]),r.jsxs("div",{style:ne.page,children:[r.jsxs("div",{style:ne.head,children:[r.jsx("div",{style:ne.eyebrow,children:"Anvil · Goals"}),r.jsx("h1",{style:ne.h1,children:Ot?"All Goals":`${n} Goals`})]}),r.jsxs("div",{style:ne.pillarPicker,children:[r.jsx("button",{onClick:()=>{o("All"),g(null),D(null)},style:{...ne.pillarChip,...Ot?{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"}:{}},children:"All Goals"}),ei.map(L=>{const K=L===n;return r.jsxs("button",{onClick:()=>{o(L),g(null),D(null)},style:{...ne.pillarChip,...K?{background:gr[L].dot,color:"#fff",borderColor:gr[L].dot}:{}},children:[r.jsx("span",{style:{...ne.dot,background:K?"#fff":gr[L].dot}}),L]},L)})]}),r.jsxs("div",{style:ne.list,children:[St.map(L=>r.jsx(qi,{goal:L,depth:0},L.id)),St.length===0&&r.jsxs("div",{style:ne.ganttEmpty,children:["No goals yet",Ot?"":` for ${n}`,"."]}),d==="ROOT"&&r.jsx(Xi,{parentId:"ROOT",parentGoal:null,depth:0}),d!=="ROOT"&&r.jsxs("button",{onClick:()=>$e("ROOT",null),style:ne.rootAdd,children:[r.jsx(Qe,{size:14})," Add new goal"]})]}),r.jsxs("div",{style:ne.ganttWrap,children:[r.jsxs("div",{style:ne.ganttTop,children:[r.jsxs("div",{style:ne.ganttTitle,children:[Br?"Monthly":"Daily"," Timeline",lt?` · ${ku(lt.start)} – ${ku(lt.end)}`:""]}),r.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[r.jsxs("div",{style:ne.zoomToggle,children:[r.jsx("button",{onClick:()=>re("day"),style:{...ne.zoomBtn,...Br?{}:ne.zoomBtnOn},children:"Day"}),r.jsx("button",{onClick:()=>re("month"),style:{...ne.zoomBtn,...Br?ne.zoomBtnOn:{}},children:"Month"})]}),r.jsxs("button",{onClick:()=>te(L=>!L),style:ne.labelToggle,children:[w?r.jsx(gy,{size:14}):r.jsx(uy,{size:14}),w?"Hide names":"Show names"]})]})]}),lt?Br?r.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[r.jsxs("div",{style:ne.gBandRow,children:[w&&r.jsx("div",{style:{...ne.gLabelHead,zIndex:4},children:"Goal"}),r.jsx("div",{style:{flex:1,display:"grid",gridTemplateColumns:`repeat(${Ho}, 1fr)`,minWidth:0},children:Zi.map((L,K)=>r.jsxs("div",{style:ne.gMonthFluid,children:[Fr[L.m],L.m===0||K===0?` '${String(L.y).slice(2)}`:""]},K))})]}),No.map(L=>r.jsxs("div",{children:[r.jsxs("div",{style:ne.gGroupRow,children:[w?r.jsxs("div",{style:ne.gGroupLabel,children:[L.label,r.jsx("span",{style:ne.gGroupCount,children:L.items.length})]}):r.jsxs("div",{style:ne.gGroupChip,children:[L.label," · ",L.items.length]}),r.jsx("div",{style:{flex:1}})]}),L.items.map(K=>{var rr;const ze=((rr=gr[K.pillar])==null?void 0:rr.dot)||"#9A968C",Re=(be==null?void 0:be.id)===K.id,Ge=Re?be.dx:0,Oe=Ul(K.start_date,!1),Ue=Math.max(2,Ul(K.end_date,!0)-Oe),rt=Oo(K),ve=Ue>=14,Tt=`${K.title} · ${K.start_date} → ${K.end_date} · ${rt} day${rt>1?"s":""}`;return r.jsxs("div",{style:ne.gRow,children:[w&&r.jsxs("div",{style:{...ne.gLabel,paddingLeft:12},children:[r.jsx("span",{style:{...ne.ganttRowDot,background:ze}}),r.jsx("span",{style:{...ne.gHzTag,color:ze,borderColor:ze},children:ju[K.horizon]}),r.jsx("span",{style:ne.gLabelText,title:K.title,children:K.title}),r.jsxs("span",{style:ne.gDurChip,children:[rt,"d"]})]}),r.jsxs("div",{style:{position:"relative",flex:1,minHeight:36,minWidth:0,backgroundImage:`repeating-linear-gradient(to right, var(--border) 0, var(--border) 1px, transparent 1px, transparent calc(100% / ${Ho}))`},children:[Er&&r.jsx("div",{style:{...ne.gTodayLine,left:`${Jm}%`}}),r.jsxs("div",{onPointerDown:Ze=>{Ze.preventDefault(),I.current=Ze.clientX;const An=Ze.currentTarget.parentNode.offsetWidth;ge({id:K.id,startX:Ze.clientX,dx:0,g:K,pxPerDay:An/me})},style:{...ne.gBar,left:`${Oe}%`,width:`${Ue}%`,background:ze,cursor:Re?"grabbing":"grab",transform:Ge?`translateX(${Ge}px)`:"none",zIndex:Re?6:1,boxShadow:Re?"0 4px 12px rgba(0,0,0,0.28)":"0 1px 2px rgba(0,0,0,0.15)",touchAction:"none"},title:Tt,children:[r.jsx(yl,{size:12,style:{opacity:.7,flexShrink:0,marginRight:2,color:"#fff"}}),ve&&r.jsx("span",{style:ne.gBarLabel,children:K.title})]}),!ve&&r.jsx("span",{style:{...ne.gBarOutside,left:`calc(${Oe+Ue}% + 6px)`},title:Tt,children:K.title})]})]},K.id)})]},L.key))]}):r.jsx("div",{style:ne.ganttScroll,ref:de,children:r.jsxs("div",{style:{minWidth:(w?ki:0)+me*Et,position:"relative"},children:[Er&&r.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:Jc,width:Et,background:"color-mix(in srgb, var(--accent) 14%, transparent)",pointerEvents:"none",zIndex:3}}),r.jsxs("div",{style:ne.gBandRow,children:[w&&r.jsx("div",{style:{...ne.gLabelHead,zIndex:4},children:"Goal"}),r.jsx("div",{style:{display:"flex"},children:Ht.map((L,K)=>r.jsx("div",{style:{...ne.gMonthCell,width:L.days*Et},children:L.label},K))})]}),r.jsxs("div",{style:ne.gBandRow,children:[w&&r.jsx("div",{style:{...ne.gLabelHead,zIndex:4,fontSize:10,color:"var(--text-3)",fontWeight:600},children:"days →"}),r.jsx("div",{style:{display:"flex"},children:N.map((L,K)=>{const ze=L.getDay()===0||L.getDay()===6,Re=K===dr;return r.jsx("div",{style:{...ne.gDayCell,...ze?ne.gWeekend:{},...Re?ne.gTodayCell:{}},children:L.getDate()},K)})})]}),No.map(L=>r.jsxs("div",{children:[r.jsxs("div",{style:ne.gGroupRow,children:[w?r.jsxs("div",{style:ne.gGroupLabel,children:[L.label,r.jsx("span",{style:ne.gGroupCount,children:L.items.length})]}):r.jsxs("div",{style:ne.gGroupChip,children:[L.label," · ",L.items.length]}),r.jsx("div",{style:{width:me*Et,flexShrink:0}})]}),L.items.map(K=>{var Uo;const ze=((Uo=gr[K.pillar])==null?void 0:Uo.dot)||"#9A968C",Re=Math.round((io(K.start_date)-lt.start)/ai),Ge=Oo(K),Oe=(be==null?void 0:be.id)===K.id,Ue=Oe?be.dx:0,rt=Yy(K),ve=(H==null?void 0:H.id)===K.id,Tt=rt?Md(K):Ge,rr=rt?Cu(K):Ge,Ze=ve?Math.max(Tt,Math.min(rr,Ge+Math.round(H.dx/Et))):Ge,An=Ze*Et-4,Go=An>=54,Fe=`${K.title} · ${K.start_date} → ${K.end_date} · ${Ze} day${Ze>1?"s":""}${rt?` (max ${rr})`:""}`;return r.jsxs("div",{style:ne.gRow,children:[w&&r.jsxs("div",{style:{...ne.gLabel,paddingLeft:12},children:[r.jsx("span",{style:{...ne.ganttRowDot,background:ze}}),r.jsx("span",{style:{...ne.gHzTag,color:ze,borderColor:ze},children:ju[K.horizon]}),r.jsx("span",{style:ne.gLabelText,title:K.title,children:K.title}),r.jsxs("span",{style:ne.gDurChip,children:[Ze,"d"]})]}),r.jsxs("div",{style:{...ne.gTrack,width:me*Et},children:[Er&&r.jsx("div",{style:{...ne.gTodayLine,left:dr*Et}}),r.jsxs("div",{onPointerDown:Rn=>{Rn.preventDefault(),I.current=Rn.clientX,ge({id:K.id,startX:Rn.clientX,dx:0,g:K,pxPerDay:Et})},style:{...ne.gBar,left:Re*Et+2,width:An,background:ze,cursor:Oe?"grabbing":"grab",transform:Ue?`translateX(${Ue}px)`:"none",zIndex:Oe||ve?6:1,boxShadow:Oe||ve?"0 4px 12px rgba(0,0,0,0.28)":"0 1px 2px rgba(0,0,0,0.15)",touchAction:"none"},title:Fe,children:[rt&&Ze>Tt&&r.jsx("div",{style:{position:"absolute",left:Tt*Et,top:0,bottom:0,right:0,background:"#C2536B",borderRadius:"0 5px 5px 0"}}),r.jsx(yl,{size:12,style:{opacity:.7,flexShrink:0,marginRight:2,color:"#fff",position:"relative",zIndex:1}}),Go&&r.jsx("span",{style:{...ne.gBarLabel,position:"relative",zIndex:1},children:K.title}),rt&&r.jsx("div",{onPointerDown:Rn=>{Rn.preventDefault(),Rn.stopPropagation(),se({id:K.id,startX:Rn.clientX,dx:0,g:K})},style:ne.resizeHandle,title:`Drag to extend up to ${rr} days`,children:r.jsx("div",{style:ne.resizeGrip})})]}),!Go&&r.jsx("span",{style:{...ne.gBarOutside,left:Re*Et+An+8+Ue},title:Fe,children:K.title})]})]},K.id)})]},L.key))]})}):r.jsx("div",{style:ne.ganttEmpty,children:"No goals on the timeline. Click the eye icon on a goal to show it here."}),lt&&r.jsxs("div",{style:ne.gLegend,children:[r.jsxs("span",{style:ne.gLegendItem,children:[r.jsx("span",{style:{...ne.gLegendBar}})," bar length = number of days"]}),r.jsxs("span",{style:ne.gLegendItem,children:[r.jsx("span",{style:ne.gLegendToday})," today"]})]})]}),ie&&r.jsxs("div",{style:ne.warnToast,children:[r.jsx(Sy,{size:15,style:{flexShrink:0}}),r.jsx("span",{children:ie})]}),r.jsx(tr,{toasts:Pe,onUndo:nt,onDismiss:qe})]})}const ne={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box",maxWidth:"100%",overflowX:"hidden"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},pillarPicker:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16},pillarChip:{display:"flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},list:{background:"var(--surface)",borderRadius:12,padding:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"hidden"},row:{display:"flex",alignItems:"center",gap:9,padding:"9px 10px",borderRadius:8,flexWrap:"nowrap"},caret:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",display:"grid",placeItems:"center",padding:0,width:18,height:18,flexShrink:0},horizonTag:{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",border:"1px solid",borderRadius:5,padding:"2px 6px",flexShrink:0},nameCol:{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:1},title:{fontSize:14,fontWeight:500,lineHeight:1.3,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",userSelect:"none",WebkitUserSelect:"none",cursor:"default"},titleFull:{whiteSpace:"normal",overflow:"visible",textOverflow:"clip",wordBreak:"break-word"},whenSub:{fontSize:11,fontStyle:"italic",color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},rowAdd:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,flexShrink:0},menuBackdrop:{position:"fixed",inset:0,zIndex:40},goalMenu:{position:"fixed",zIndex:41,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 6px 24px rgba(0,0,0,0.18)",padding:4,minWidth:180,display:"flex",flexDirection:"column"},menuItem:{display:"flex",alignItems:"center",gap:9,width:"100%",border:"none",background:"none",padding:"10px 12px",borderRadius:7,cursor:"pointer",fontFamily:"inherit",fontSize:13.5,fontWeight:500,color:"var(--text)",textAlign:"left"},rootAdd:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"var(--text-2)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"9px 12px",cursor:"pointer",fontWeight:600,fontFamily:"inherit",marginTop:6,width:"100%",justifyContent:"center"},addBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 0 6px 28px",flexWrap:"wrap"},editBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 10px",flexWrap:"wrap",background:"var(--bg)",borderRadius:8,margin:"4px 0"},input:{border:"1px solid var(--border)",borderRadius:7,padding:"8px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",flex:1,minWidth:120},monthSelect:{border:"1px solid var(--border)",borderRadius:7,padding:"8px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},inheritTag:{fontSize:11.5,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"6px 9px",borderRadius:7,flexShrink:0},toTag:{fontSize:11.5,fontWeight:600,color:"var(--text-3)",flexShrink:0},warnToast:{position:"fixed",top:18,left:"50%",transform:"translateX(-50%)",zIndex:300,display:"flex",alignItems:"center",gap:8,maxWidth:"90vw",background:"#C2536B",color:"#fff",padding:"10px 16px",borderRadius:10,fontSize:13,fontWeight:600,boxShadow:"0 6px 24px rgba(0,0,0,0.25)"},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},ganttWrap:{background:"var(--surface)",borderRadius:12,padding:"16px 14px",marginTop:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},ganttTop:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:10,marginBottom:14},ganttTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",fontFamily:"'Fraunces',Georgia,serif"},labelToggle:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"5px 10px",borderRadius:8,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},zoomToggle:{display:"inline-flex",border:"1px solid var(--border)",borderRadius:8,overflow:"hidden"},zoomBtn:{border:"none",background:"var(--surface)",color:"var(--text-2)",padding:"5px 12px",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},zoomBtnOn:{background:"var(--accent-strong)",color:"#fff"},gMonthFluid:{borderLeft:"1px solid var(--border)",fontSize:10,fontWeight:700,color:"var(--text-2)",textAlign:"center",padding:"5px 0",whiteSpace:"nowrap",overflow:"hidden"},gGroupChip:{position:"sticky",left:0,zIndex:3,background:"var(--surface-2)",padding:"5px 10px",fontSize:10,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-2)",whiteSpace:"nowrap",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center"},ganttEmpty:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},ganttScroll:{overflowX:"auto"},ganttRowDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},gBandRow:{display:"flex",alignItems:"stretch",borderBottom:"1px solid var(--border)"},gLabelHead:{width:ki,flexShrink:0,position:"sticky",left:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center",padding:"6px 10px",fontSize:12,fontWeight:700,color:"var(--text-2)"},gMonthCell:{flexShrink:0,borderLeft:"1px solid var(--border)",fontSize:10.5,fontWeight:700,color:"var(--text-2)",textAlign:"center",padding:"5px 0",whiteSpace:"nowrap",overflow:"hidden"},gDayCell:{width:Et,flexShrink:0,textAlign:"center",fontSize:10,color:"var(--text-3)",padding:"4px 0",borderLeft:"1px solid var(--border)",fontWeight:600},gWeekend:{background:"var(--surface-2)"},gTodayCell:{background:"var(--hover)",color:"var(--accent)",fontWeight:800},gGroupRow:{display:"flex",alignItems:"stretch",background:"var(--surface-2)",borderBottom:"1px solid var(--border)",borderTop:"1px solid var(--border)"},gGroupLabel:{width:ki,flexShrink:0,position:"sticky",left:0,background:"var(--surface-2)",zIndex:3,padding:"6px 12px",fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-2)",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center",gap:7},gGroupCount:{fontSize:10,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 6px"},gHzTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.04em",border:"1px solid",borderRadius:4,padding:"1px 4px",flexShrink:0},gRow:{display:"flex",alignItems:"stretch",minHeight:36,borderBottom:"1px solid var(--border)"},gLabel:{width:ki,flexShrink:0,display:"flex",alignItems:"center",gap:7,position:"sticky",left:0,background:"var(--surface)",zIndex:2,borderRight:"1px solid var(--border)",paddingRight:8,overflow:"hidden"},gLabelText:{flex:1,minWidth:0,fontSize:12,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"var(--text)"},gDurChip:{fontSize:10,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",borderRadius:10,padding:"1px 6px",flexShrink:0,marginRight:6},gTrack:{position:"relative",flexShrink:0,minHeight:36,backgroundImage:`repeating-linear-gradient(to right, var(--border) 0, var(--border) 1px, transparent 1px, transparent ${Et}px)`},gBar:{position:"absolute",top:9,height:18,borderRadius:5,display:"flex",alignItems:"center",padding:"0 7px",boxShadow:"0 1px 2px rgba(0,0,0,0.15)",overflow:"hidden",zIndex:1},gBarLabel:{fontSize:11,fontWeight:600,color:"#fff",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},gBarOutside:{position:"absolute",top:9,height:18,display:"flex",alignItems:"center",fontSize:11,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",pointerEvents:"none",zIndex:1},resizeHandle:{position:"absolute",right:0,top:0,bottom:0,width:12,cursor:"ew-resize",display:"grid",placeItems:"center",touchAction:"none",zIndex:2},resizeGrip:{width:2,height:11,background:"rgba(255,255,255,0.9)",borderRadius:1,boxShadow:"3px 0 0 rgba(255,255,255,0.6)"},gTodayLine:{position:"absolute",top:0,bottom:0,width:2,background:"#C2536B",zIndex:0,opacity:.6},gLegend:{display:"flex",gap:16,marginTop:12,fontSize:11,color:"var(--text-3)",flexWrap:"wrap"},gLegendItem:{display:"flex",alignItems:"center",gap:6,fontWeight:600},gLegendBar:{width:18,height:8,borderRadius:3,background:"var(--accent)",display:"inline-block"},gLegendToday:{width:2,height:12,background:"#C2536B",display:"inline-block"}},Xn={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.12)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.12)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.12)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.12)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.12)"}},Ni=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Xy=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Oi=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,qy=()=>Oi(new Date),Zy=(e=0)=>{const t=new Date,n=t.getDay(),o=n===0?-6:1-n,i=new Date(t);return i.setDate(t.getDate()+o+e*7),Array.from({length:7},(s,l)=>{const a=new Date(i);return a.setDate(i.getDate()+l),Oi(a)})},Jy=(e=0)=>{const t=new Date,n=new Date(t.getFullYear(),t.getMonth()+e,1),o=n.getFullYear(),i=n.getMonth(),s=new Date(o,i+1,0).getDate(),l=n.getDay(),a=l===0?6:l-1,d=Array.from({length:s},(h,x)=>`${o}-${String(i+1).padStart(2,"0")}-${String(x+1).padStart(2,"0")}`),g=n.toLocaleDateString("en-US",{month:"long",year:"numeric"});return{dates:d,startOffset:a,label:g,year:o,month:i}},zu=e=>new Date(e+"T00:00").toLocaleDateString("en-US",{month:"short",day:"numeric"}),mn=qy(),e0=new Date().getFullYear();function t0(){var V,de;const[e,t]=c.useState([]),[n,o]=c.useState("ALL"),[i,s]=c.useState(!1),[l,a]=c.useState(!1),[d,g]=c.useState(!1),[h,x]=c.useState(null),[f,A]=c.useState(null),[S,v]=c.useState({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week",days:[]}),[R,m]=c.useState(!1),[p,b]=c.useState([]),B=c.useCallback(()=>$.getHabits().then(t).catch(console.error),[]);c.useEffect(()=>{B()},[B]),c.useEffect(()=>{$.getSetting("habit_order").then(I=>{Array.isArray(I==null?void 0:I.value)&&b(I.value)}).catch(()=>{})},[]);const C=c.useMemo(()=>p.length?[...e].sort((I,ie)=>{const Ie=p.indexOf(I.id),Q=p.indexOf(ie.id);return Ie===-1&&Q===-1?0:Ie===-1?1:Q===-1?-1:Ie-Q}):e,[e,p]),T=async I=>{b(I),await $.setSetting("habit_order",I),m(!1)};c.useEffect(()=>{const I=()=>{const ie=window.innerWidth<720;s(ie),ie||a(!1)};return I(),window.addEventListener("resize",I),()=>window.removeEventListener("resize",I)},[]);const{deleteItem:F,toasts:_,handleUndo:D,handleDismiss:W}=er($.deleteHabit,$.restoreHabit,B),w=I=>{o(I),i&&a(!1)},te=(I,ie)=>{(I.type==="minimum"||I.type==="maximum")&&I.period==="day"?A({habit:I,date:ie}):z(I.id,ie)},z=async(I,ie)=>{await $.toggleHabitLog(I,ie),B()},re=async(I,ie,Ie,Q)=>{await $.setHabitLogCount(I,ie,Ie,Q),A(null),B()},be=async(I,ie)=>{await $.clearHabitLog(I,ie),A(null),B()},ge=async()=>{if(!S.name.trim())return;const I=S.type==="minimum"||S.type==="maximum",ie=S.type==="weekly";if(ie&&S.days.length===0)return;const Ie={name:S.name.trim(),pillar:S.pillar,target_per_week:Number(S.target_per_week)||7,type:S.type,target_count:I?Number(S.target_count)||1:null,period:I?S.period:null,days:ie?S.days:null};await $.createHabit(Ie),v({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week",days:[]}),g(!1),B()},ye=async(I,ie)=>{n===I&&o("ALL"),F(I,ie)},J=e.find(I=>I.id===n),H=I=>new Set(I.logs||[]),se={...U.sidebar,...i?U.sidebarOverlay:{},...i&&!l?U.sidebarHidden:{}};return r.jsxs("div",{style:U.shell,children:[i&&l&&r.jsx("div",{style:U.backdrop,onClick:()=>a(!1)}),r.jsxs("aside",{style:se,children:[r.jsxs("div",{style:U.sideTop,children:[r.jsx("div",{style:U.brand,children:"Anvil · Habits"}),i&&r.jsx("button",{onClick:()=>a(!1),style:U.closeBtn,children:r.jsx(De,{size:18})})]}),r.jsxs("div",{style:{...U.sideItem,...n==="ALL"?U.sideItemOn:{},cursor:"default",padding:"2px 6px 2px 10px"},children:[r.jsxs("button",{onClick:()=>w("ALL"),style:{display:"flex",alignItems:"center",gap:9,flex:1,border:"none",background:"none",cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:n==="ALL"?600:500,color:"var(--text-2)",padding:"7px 0"},children:[r.jsx(Pc,{size:15}),r.jsx("span",{style:U.sideLabel,children:"All Habits"}),r.jsx("span",{style:U.sideCount,children:e.length})]}),r.jsx("button",{onClick:I=>{I.stopPropagation(),m(!0)},style:U.tinyBtn,title:"Reorder habits",children:r.jsx(xt,{size:12})})]}),r.jsx("div",{style:U.sideDivider}),C.map(I=>{var Q;const ie=n===I.id,Ie=((Q=Xn[I.pillar])==null?void 0:Q.dot)||"#9A968C";return r.jsxs("button",{onClick:()=>w(I.id),style:{...U.sideItem,...ie?U.sideItemOn:{}},children:[r.jsx("span",{style:{...U.sideDot,background:Ie}}),r.jsx("span",{style:U.sideLabel,children:I.name}),r.jsxs("span",{style:U.sideStreak,children:[r.jsx(Jn,{size:11})," ",I.streak]})]},I.id)}),d?r.jsx(r0,{habit:S,onChange:v,onSave:ge,onCancel:()=>g(!1)}):r.jsxs("button",{onClick:()=>g(!0),style:U.sideNewBtn,children:[r.jsx(Qe,{size:13})," New habit"]})]}),r.jsxs("main",{style:U.main,children:[i&&r.jsxs("button",{onClick:()=>a(!0),style:U.hamburger,children:[r.jsx(Nc,{size:18}),r.jsx("span",{style:U.hamburgerLabel,children:n==="ALL"?"All Habits":J==null?void 0:J.name})]}),n==="ALL"?r.jsx(i0,{habits:C,dayAction:te,logSet:H,onDelete:ye,onEdit:I=>x(I)}):r.jsx(s0,{habit:J,dayAction:te,logSet:H,onDelete:()=>ye(J.id,J.name),onEdit:()=>x(J),setNote:(I,ie)=>$.setHabitLogNote(J.id,I,ie).then(B)}),n==="ALL"&&r.jsx(d0,{year:e0})]}),R&&r.jsx(a0,{habits:C,onSave:T,onClose:()=>m(!1)}),h&&r.jsx(n0,{habit:h,onSave:async I=>{await $.updateHabit(h.id,I),x(null),B()},onClose:()=>x(null)}),f&&r.jsx(o0,{habit:f.habit,date:f.date,initialCount:((V=f.habit.log_counts)==null?void 0:V[f.date])??0,initialNote:((de=f.habit.log_notes)==null?void 0:de[f.date])??"",onSave:(I,ie)=>re(f.habit.id,f.date,I,ie),onClear:()=>be(f.habit.id,f.date),onClose:()=>A(null)}),r.jsx(tr,{toasts:_,onUndo:D,onDismiss:W})]})}function $m({days:e,onToggle:t}){return r.jsx("div",{style:U.dayPick,children:Ni.map((n,o)=>r.jsx("button",{type:"button",onClick:()=>t(o),style:{...U.dayChip,...e.includes(o)?U.dayChipOn:{}},children:n},n))})}function r0({habit:e,onChange:t,onSave:n,onCancel:o}){const i=e.type==="minimum"||e.type==="maximum",s=e.type==="weekly",l=a=>t(d=>({...d,days:d.days.includes(a)?d.days.filter(g=>g!==a):[...d.days,a].sort((g,h)=>g-h)}));return r.jsxs("div",{style:U.addBox,children:[r.jsx("input",{autoFocus:!0,placeholder:"Habit name",value:e.name,onChange:a=>t(d=>({...d,name:a.target.value})),onKeyDown:a=>a.key==="Enter"&&n(),style:U.sideInput}),r.jsx("select",{value:e.pillar,onChange:a=>t(d=>({...d,pillar:a.target.value})),style:U.sideInput,children:Object.keys(Xn).map(a=>r.jsx("option",{children:a},a))}),r.jsxs("select",{value:e.type,onChange:a=>t(d=>({...d,type:a.target.value})),style:U.sideInput,children:[r.jsx("option",{value:"regular",children:"Regular (yes/no)"}),r.jsx("option",{value:"weekly",children:"Weekly (specific days)"}),r.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),r.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),s&&r.jsxs(r.Fragment,{children:[r.jsx("div",{style:U.pickHint,children:"Do this on…"}),r.jsx($m,{days:e.days,onToggle:l})]}),i&&r.jsxs("div",{style:{display:"flex",gap:6},children:[r.jsx("input",{type:"number",min:1,placeholder:"N",value:e.target_count||"",onChange:a=>t(d=>({...d,target_count:a.target.value})),style:{...U.sideInput,width:60}}),r.jsx("select",{value:e.period,onChange:a=>t(d=>({...d,period:a.target.value})),style:U.sideInput,children:["day","week","month","year"].map(a=>r.jsx("option",{children:a},a))})]}),r.jsxs("div",{style:{display:"flex",gap:6},children:[r.jsx("button",{onClick:n,style:U.sideAddBtn,children:r.jsx(Ne,{size:13})}),r.jsx("button",{onClick:o,style:U.sideCancelBtn,children:r.jsx(De,{size:13})})]})]})}function n0({habit:e,onSave:t,onClose:n}){const[o,i]=c.useState(e.name),[s,l]=c.useState(e.type||"regular"),[a,d]=c.useState(e.target_count||""),[g,h]=c.useState(e.period||"week"),[x,f]=c.useState(e.reminder_time||""),[A,S]=c.useState(e.days||[]),v=s==="minimum"||s==="maximum",R=s==="weekly",m=b=>S(B=>B.includes(b)?B.filter(C=>C!==b):[...B,b].sort((C,T)=>C-T)),p=()=>{R&&A.length===0||t({name:o.trim(),type:s,target_count:v?Number(a):null,period:v?g:null,days:R?A:[],reminder_time:x||null})};return r.jsx("div",{style:U.modalOverlay,onClick:n,children:r.jsxs("div",{style:U.modal,onClick:b=>b.stopPropagation(),children:[r.jsxs("div",{style:U.modalHead,children:["Edit Habit",r.jsx("button",{onClick:n,style:U.closeBtn,children:r.jsx(De,{size:16})})]}),r.jsx("label",{style:U.modalLabel,children:"Name"}),r.jsx("input",{value:o,onChange:b=>i(b.target.value),style:U.sideInput}),r.jsx("label",{style:U.modalLabel,children:"Type"}),r.jsxs("select",{value:s,onChange:b=>l(b.target.value),style:U.sideInput,children:[r.jsx("option",{value:"regular",children:"Regular (yes/no)"}),r.jsx("option",{value:"weekly",children:"Weekly (specific days)"}),r.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),r.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),R&&r.jsxs(r.Fragment,{children:[r.jsx("label",{style:U.modalLabel,children:"Days"}),r.jsx($m,{days:A,onToggle:m})]}),v&&r.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[r.jsx("input",{type:"number",min:1,value:a,onChange:b=>d(b.target.value),style:{...U.sideInput,width:70}}),r.jsx("select",{value:g,onChange:b=>h(b.target.value),style:U.sideInput,children:["day","week","month","year"].map(b=>r.jsx("option",{children:b},b))})]}),r.jsx("label",{style:U.modalLabel,children:"Reminder time"}),r.jsx("input",{type:"time",value:x,onChange:b=>f(b.target.value),style:U.sideInput}),r.jsx("button",{onClick:p,style:{...U.sideAddBtn,width:"100%",marginTop:10,height:36},children:"Save"})]})})}function o0({habit:e,date:t,initialCount:n,initialNote:o,onSave:i,onClear:s,onClose:l}){const[a,d]=c.useState(n??0),[g,h]=c.useState(o??""),x=e.target_count,f=e.type==="minimum"?a>=x:a>0&&a<=x,A=e.type==="maximum"&&a>x,S=f?"#4C9A6B":A?"#C2536B":"#C2773B",v=f?"✓ Goal met":A?"Over the limit":"Not met yet";return r.jsx("div",{style:U.modalOverlay,onClick:l,children:r.jsxs("div",{style:U.modal,onClick:R=>R.stopPropagation(),children:[r.jsxs("div",{style:U.modalHead,children:[e.name,r.jsx("button",{onClick:l,style:U.closeBtn,children:r.jsx(De,{size:16})})]}),r.jsxs("div",{style:{fontSize:12,color:"var(--text-3)",marginBottom:2},children:[t," · ",e.type==="minimum"?`at least ${x}`:`no more than ${x}`," / ",e.period]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:20,margin:"14px 0 6px"},children:[r.jsx("button",{onClick:()=>d(R=>Math.max(0,R-1)),style:U.counterBtn,children:"−"}),r.jsx("span",{style:{fontSize:38,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:52,textAlign:"center",color:S},children:a}),r.jsx("button",{onClick:()=>d(R=>R+1),style:U.counterBtn,children:"+"})]}),r.jsx("div",{style:{textAlign:"center",fontSize:12.5,fontWeight:700,color:S,marginBottom:12},children:v}),r.jsx("textarea",{value:g,onChange:R=>h(R.target.value),placeholder:"Add a comment (optional)…",style:{...U.sideInput,minHeight:56,resize:"vertical"}}),r.jsxs("div",{style:{display:"flex",gap:8,marginTop:10},children:[r.jsxs("button",{onClick:s,style:{...U.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[r.jsx(De,{size:14})," Delete"]}),r.jsxs("button",{onClick:()=>i(a,g),style:{...U.sideAddBtn,flex:1,justifyContent:"center",height:38},children:[r.jsx(Ne,{size:14})," Set"]})]})]})})}function va({pct:e,label:t,sub:n,color:o}){const s=2*Math.PI*26,l=s*(1-Math.max(0,Math.min(100,e))/100);return r.jsxs("div",{style:U.ringStat,children:[r.jsxs("div",{style:U.ringBox,children:[r.jsxs("svg",{width:"70",height:"70",viewBox:"0 0 70 70",children:[r.jsx("circle",{cx:"35",cy:"35",r:26,fill:"none",stroke:"var(--border)",strokeWidth:"7"}),r.jsx("circle",{cx:"35",cy:"35",r:26,fill:"none",stroke:o,strokeWidth:"7",strokeLinecap:"round",strokeDasharray:s,strokeDashoffset:l,transform:"rotate(-90 35 35)",style:{transition:"stroke-dashoffset 0.5s ease"}})]}),r.jsxs("div",{style:{...U.ringPct,color:o},children:[e,"%"]})]}),r.jsxs("div",{children:[r.jsx("div",{style:U.ringLabel,children:t}),r.jsx("div",{style:U.ringSub,children:n})]})]})}function i0({habits:e,dayAction:t,logSet:n,onDelete:o,onEdit:i}){const[s,l]=c.useState(0),a=Zy(s),d=`${zu(a[0])} – ${zu(a[6])}${s===0?" · This week":""}`,g=w=>{const te=new Date(w+"T00:00:00"),z=te.getDay(),re=new Date(te);return re.setDate(te.getDate()+(z===0?-6:1-z)),Array.from({length:7},(be,ge)=>{const ye=new Date(re);return ye.setDate(re.getDate()+ge),Oi(ye)})},h=w=>w.logs||[],x=(w,te)=>w.type==="minimum"&&w.period==="week"&&te.filter(z=>n(w).has(z)).length>=(w.target_count||0),f=(w,te)=>w.type==="minimum"&&w.period==="month"&&h(w).filter(z=>z.slice(0,7)===te).length>=(w.target_count||0),A=(w,te)=>w.type==="minimum"&&w.period==="year"&&h(w).filter(z=>z.slice(0,4)===te).length>=(w.target_count||0),S=(w,te)=>{var z;if((w.type==="minimum"||w.type==="maximum")&&w.period==="day"){const re=(z=w.log_counts)==null?void 0:z[te];return re==null?!1:w.type==="minimum"?re>=(w.target_count||0):re>0&&re<=(w.target_count||0)}return n(w).has(te)},v=(w,te)=>w.type!=="minimum"?!1:w.period==="week"?x(w,g(te)):w.period==="month"?f(w,te.slice(0,7)):w.period==="year"?A(w,te.slice(0,4)):!1,R=(w,te)=>S(w,te)||v(w,te),m=e.filter(w=>R(w,mn)).length,p=e.length?Math.round(m/e.length*100):0,b=w=>{if(w.type==="minimum"&&w.period==="month"&&(f(w,a[0].slice(0,7))||f(w,a[6].slice(0,7)))||w.type==="minimum"&&w.period==="year"&&(A(w,a[0].slice(0,4))||A(w,a[6].slice(0,4)))||w.type==="minimum"&&w.period==="week"&&x(w,a))return 1;if((w.type==="minimum"||w.type==="maximum")&&w.period==="day")return Math.min(1,a.filter(be=>S(w,be)).length/7);const te=n(w),z=a.filter(be=>te.has(be)).length,re=w.type==="minimum"&&w.period==="week"?w.target_count||1:w.target_per_week||7;return re>0?Math.min(1,z/re):0},B=e.length?Math.round(e.reduce((w,te)=>w+b(te),0)/e.length*100):0,C=new Date,T=`${C.getFullYear()}-${String(C.getMonth()+1).padStart(2,"0")}`,F=new Date(C.getFullYear(),C.getMonth()+1,0).getDate(),_=F/7,D=w=>{if(w.type==="minimum"&&w.period==="month"&&f(w,T)||w.type==="minimum"&&w.period==="year"&&A(w,T.slice(0,4)))return 1;if((w.type==="minimum"||w.type==="maximum")&&w.period==="day"){let re=0;for(let be=1;be<=F;be++)S(w,`${T}-${String(be).padStart(2,"0")}`)&&re++;return Math.min(1,re/F)}const te=h(w).filter(re=>re.slice(0,7)===T).length;let z;return w.type==="minimum"&&w.period==="week"?z=(w.target_count||1)*_:w.type==="minimum"&&w.period==="month"?z=w.target_count||1:w.type==="minimum"&&w.period==="year"?z=(w.target_count||1)/12:z=(w.target_per_week||7)*_,z>0?Math.min(1,te/z):0},W=e.length?Math.round(e.reduce((w,te)=>w+D(te),0)/e.length*100):0;return r.jsxs("div",{children:[r.jsxs("div",{style:U.mainHead,children:[r.jsx("div",{style:U.eyebrow,children:"Weekly view"}),r.jsx("h1",{style:U.h1,children:"All Habits"})]}),r.jsxs("div",{style:U.navBar,children:[r.jsx("button",{onClick:()=>l(w=>w-1),style:U.navBtn,children:r.jsx(Dn,{size:16})}),r.jsx("span",{style:U.navLabel,children:d}),r.jsx("button",{onClick:()=>l(w=>Math.min(0,w+1)),disabled:s>=0,style:{...U.navBtn,...s>=0?U.navBtnDisabled:{}},children:r.jsx(sn,{size:16})})]}),r.jsxs("div",{style:U.weekCard,children:[r.jsxs("div",{style:U.weekHeadRow,children:[r.jsx("div",{style:U.weekNameCol}),Ni.map((w,te)=>r.jsxs("div",{style:U.weekDayHead,children:[r.jsx("span",{style:U.weekDayName,children:w}),r.jsx("span",{style:{...U.weekDayNum,...a[te]===mn?U.weekDayToday:{}},children:new Date(a[te]+"T00:00").getDate()})]},w)),r.jsx("div",{style:U.weekStreakCol,children:"Streak"})]}),e.map(w=>{var P,G;const te=((P=Xn[w.pillar])==null?void 0:P.dot)||"#9A968C",z=((G=Xn[w.pillar])==null?void 0:G.soft)||"rgba(0,0,0,0.05)",re=n(w),be=w.type==="weekly",ge=new Set(w.days||[]),ye=[0,1,2,3,4,5,6].filter(oe=>ge.has(oe)),J=be&&ye.length>0&&ye.every(oe=>re.has(a[oe])),H=be?Array(7).fill(J):null,se=w.type==="minimum"&&["week","month","year"].includes(w.period),V=w.target_count||0,de=w.logs||[],I=oe=>de.filter(pe=>pe.slice(0,7)===oe).length,ie=oe=>de.filter(pe=>pe.slice(0,4)===oe).length,Ie=a.filter(oe=>re.has(oe)).length,Q=oe=>se?w.period==="week"?Ie>=V:w.period==="month"?I(oe.slice(0,7))>=V:w.period==="year"?ie(oe.slice(0,4))>=V:!1:!1,y=se&&a.some(Q),E=w.period==="week"?Ie:w.period==="month"?I(a[0].slice(0,7)):w.period==="year"?ie(a[0].slice(0,4)):0;return r.jsxs("div",{style:U.weekRow,children:[r.jsxs("div",{style:{...U.weekNameCol,flexDirection:"column",alignItems:"flex-start",gap:2},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx("span",{style:{...U.sideDot,background:te}}),r.jsx("span",{style:U.weekHabitName,children:w.name})]}),w.type==="weekly"?r.jsx("span",{style:U.typeBadge,children:(w.days||[]).map(oe=>Ni[oe]).join("·")||"—"}):w.type!=="regular"?r.jsx("span",{style:U.typeBadge,children:w.type==="minimum"?`≥${w.target_count}/${w.period}`:`≤${w.target_count}/${w.period}`}):null]}),a.map((oe,pe)=>{var Xe,ot;if(be&&!ge.has(pe))return r.jsxs("div",{style:{...U.weekCell,position:"relative",zIndex:0},children:[H[pe]&&r.jsx("span",{style:{...U.chainLine,background:te,left:H[pe-1]?0:"50%",right:H[pe+1]?0:"50%"}}),r.jsx("span",{style:{...U.offDay,position:"relative",zIndex:1},title:"Not scheduled",children:"·"})]},oe);const O=re.has(oe),M=oe>mn,k=(w.type==="minimum"||w.type==="maximum")&&w.period==="day",ee=(Xe=w.log_counts)==null?void 0:Xe[oe],he=ee!=null,Ee=!!((ot=w.log_notes)!=null&&ot[oe]),ut=Q(oe),Pe=pe>0&&Q(a[pe-1]),nt=pe<a.length-1&&Q(a[pe+1]),qe=O||ut;return r.jsxs("div",{style:{...U.weekCell,position:"relative",zIndex:0},children:[ut&&r.jsx("span",{style:{...U.chainLine,background:te,left:Pe?0:"50%",right:nt?0:"50%"}}),be&&H[pe]&&r.jsx("span",{style:{...U.chainLine,background:te,left:H[pe-1]?0:"50%",right:H[pe+1]?0:"50%"}}),r.jsx("button",{disabled:M,onClick:()=>t(w,oe),style:{...U.tick,...qe?{background:te,borderColor:te,color:"#fff"}:{},...k&&he&&!O?{borderColor:te,color:te}:{},...M&&!qe?U.tickFuture:{}},children:k?he?r.jsx("span",{style:{fontSize:12,fontWeight:700},children:ee}):null:O&&r.jsx(Ne,{size:14,color:"#fff",strokeWidth:3})}),Ee&&r.jsx("span",{style:U.cellNoteBubble})]},oe)}),r.jsx("div",{style:U.weekStreakCol,children:J?r.jsxs("span",{style:{...U.streakPill,background:z,color:te},children:[r.jsx(vl,{size:12})," ",ye.length,"/",ye.length]}):y?r.jsxs("span",{style:{...U.streakPill,background:z,color:te},children:[r.jsx(vl,{size:12})," ",E,"/",V]}):r.jsxs("span",{style:{...U.streakPill,background:z,color:te},children:[r.jsx(Jn,{size:12})," ",w.streak]})})]},w.id)}),e.length===0&&r.jsx("div",{style:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},children:"No habits yet — add one from the sidebar."})]}),e.length>0&&r.jsxs("div",{style:{...U.progressCard,marginTop:18,marginBottom:0},children:[r.jsx(va,{pct:p,label:"Today",sub:`${m}/${e.length} done`,color:"#4C9A6B"}),r.jsx("div",{style:U.progressDivider}),r.jsx(va,{pct:B,label:"This week",sub:"of weekly targets",color:"#3A7CA5"}),r.jsx("div",{style:U.progressDivider}),r.jsx(va,{pct:W,label:"This month",sub:"of monthly targets",color:"#8268B0"})]})]})}function s0({habit:e,dayAction:t,logSet:n,onDelete:o,onEdit:i,setNote:s}){var Q,y;const[l,a]=c.useState(null),[d,g]=c.useState(""),[h,x]=c.useState(null),[f,A]=c.useState(0),S=c.useRef(null);if(!e)return null;const v=((Q=Xn[e.pillar])==null?void 0:Q.dot)||"#9A968C",R=((y=Xn[e.pillar])==null?void 0:y.soft)||"rgba(0,0,0,0.05)",m=n(e),p=e.type==="weekly",b=new Set(e.days||[]),B=E=>(new Date(E+"T00:00").getDay()+6)%7,C=E=>!p||b.has(B(E)),T=E=>{const P=new Date(E+"T00:00"),G=P.getDay(),oe=new Date(P);oe.setDate(P.getDate()+(G===0?-6:1-G));const pe=Array.from({length:7},(k,ee)=>{const he=new Date(oe);return he.setDate(oe.getDate()+ee),Oi(he)}),O=[0,1,2,3,4,5,6].filter(k=>b.has(k)),M=O.length>0&&O.every(k=>m.has(pe[k]));return Array(7).fill(M)},{dates:F,startOffset:_,label:D,year:W}=Jy(f),w=F.filter(E=>E<=mn&&C(E)&&m.has(E)).length,te=F.filter(E=>E<=mn&&C(E)).length,z=te>0?Math.round(w/te*100):0,re=e.type==="minimum"&&(e.period==="month"||e.period==="year"),be=e.period==="year"?(e.logs||[]).filter(E=>E.startsWith(`${W}-`)).length:F.filter(E=>m.has(E)).length,ge=re&&be>=(e.target_count||0),ye=e.type==="minimum"&&e.period==="week",J=e.target_count||0,H=E=>{const P=new Date(E+"T00:00"),G=P.getDay(),oe=new Date(P);oe.setDate(P.getDate()+(G===0?-6:1-G));let pe=0;for(let O=0;O<7;O++){const M=new Date(oe);M.setDate(oe.getDate()+O),m.has(Oi(M))&&pe++}return pe},se=E=>re?ge:ye?H(E)>=J:!1,V=ye?H(mn):0,de=ye&&V>=J,I=E=>{S.current=setTimeout(()=>a(E),500)},ie=()=>clearTimeout(S.current),Ie=E=>{var P;x(E),g(((P=e.log_notes)==null?void 0:P[E])||""),a(null)};return r.jsxs("div",{children:[r.jsxs("div",{style:U.mainHead,children:[r.jsxs("div",{children:[r.jsxs("div",{style:U.eyebrow,children:[r.jsx("span",{style:{...U.sideDot,background:v,marginRight:6}}),e.pillar," · Monthly view"]}),r.jsx("h1",{style:U.h1,children:e.name})]}),r.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[r.jsxs("button",{onClick:i,style:U.actionBtn,children:[r.jsx(xt,{size:14})," Edit"]}),r.jsxs("button",{onClick:o,style:{...U.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[r.jsx(De,{size:14})," Delete"]}),e.reminder_time&&r.jsxs("button",{style:U.actionBtn,children:[r.jsx(ym,{size:14})," ",e.reminder_time]})]})]}),r.jsxs("div",{style:U.statStrip,children:[r.jsx(Fn,{label:"Current streak",value:`${e.streak} days`,c:v,soft:R,flame:!0}),r.jsx(Fn,{label:"Best streak",value:`${e.max_streak??e.streak} days`,c:v,soft:R,flame:!0}),r.jsx(Fn,{label:"Done this month",value:`${w}/${te}`,c:v,soft:R}),r.jsx(Fn,{label:"Completion",value:`${z}%`,c:v,soft:R}),e.type==="regular"?r.jsx(Fn,{label:"Weekly target",value:`${e.target_per_week}×`,c:v,soft:R}):e.type==="weekly"?r.jsx(Fn,{label:"Days",value:(e.days||[]).map(E=>Ni[E]).join(", ")||"—",c:v,soft:R}):r.jsx(Fn,{label:e.type==="minimum"?"Min target":"Max allowed",value:`${e.target_count}/${e.period}`,c:v,soft:R})]}),r.jsxs("div",{style:U.navBar,children:[r.jsx("button",{onClick:()=>A(E=>E-1),style:U.navBtn,children:r.jsx(Dn,{size:16})}),r.jsxs("span",{style:U.navLabel,children:[D,f===0?" · This month":""]}),r.jsx("button",{onClick:()=>A(E=>Math.min(0,E+1)),disabled:f>=0,style:{...U.navBtn,...f>=0?U.navBtnDisabled:{}},children:r.jsx(sn,{size:16})})]}),re&&r.jsxs("div",{style:{...U.chainBanner,background:ge?R:"var(--bg)",color:ge?v:"var(--text-3)"},children:[r.jsx(vl,{size:15}),ge?`${e.period==="year"?"Yearly":"Monthly"} chain complete — ${be}/${e.target_count} connected`:`${be}/${e.target_count} this ${e.period} · ${(e.target_count||0)-be} more to connect the chain`]}),ye&&f===0&&r.jsxs("div",{style:{...U.chainBanner,background:de?R:"var(--bg)",color:de?v:"var(--text-3)"},children:[r.jsx(vl,{size:15}),de?`This week's chain complete — ${V}/${J} connected`:`${V}/${J} this week · ${Math.max(0,J-V)} more to connect the chain`]}),r.jsxs("div",{style:U.monthCard,children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[r.jsx("div",{style:U.monthTitle,children:D}),r.jsx("span",{style:{fontSize:11,color:"var(--text-3)"},children:"Long-press a day for options"})]}),r.jsx("div",{style:U.monthDow,children:Ni.map(E=>r.jsx("div",{style:U.monthDowCell,children:E},E))}),r.jsxs("div",{style:U.monthGrid,children:[Array.from({length:_}).map((E,P)=>r.jsx("div",{},`pad${P}`)),F.map((E,P)=>{var nt,qe;const G=P+1;if(p&&!C(E)){const Xe=B(E),ot=T(E),tt=(_+P)%7;return r.jsxs("div",{style:{position:"relative"},children:[ot[Xe]&&r.jsx("span",{style:{...U.chainLine,background:v,...tt===0?{left:"50%"}:{left:ot[Xe-1]?-6:"50%"},...tt===6?{right:"50%"}:{right:ot[Xe+1]?-6:"50%"}}}),r.jsx("div",{style:{...U.monthDay,...U.monthDayOff,width:"100%",position:"relative",zIndex:1},children:G})]},E)}const oe=m.has(E),pe=E>mn,O=E===mn,M=!!((nt=e.log_notes)!=null&&nt[E]),k=(e.type==="minimum"||e.type==="maximum")&&e.period==="day",ee=(qe=e.log_counts)==null?void 0:qe[E],he=ee!=null,Ee=se(E),ut=Ee&&!oe,Pe=(_+P)%7;return r.jsxs("div",{style:{position:"relative"},children:[Ee&&r.jsx("span",{style:{...U.chainLine,background:v,...Pe===0?{left:"50%"}:{left:-6},...Pe===6?{right:"50%"}:{right:-6}}}),p&&(()=>{const Xe=B(E),ot=T(E);return ot[Xe]?r.jsx("span",{style:{...U.chainLine,background:v,...Pe===0?{left:"50%"}:{left:ot[Xe-1]?-6:"50%"},...Pe===6?{right:"50%"}:{right:ot[Xe+1]?-6:"50%"}}}):null})(),r.jsx("button",{disabled:pe,onClick:()=>t(e,E),onMouseDown:()=>!k&&I(E),onMouseUp:ie,onTouchStart:()=>!k&&I(E),onTouchEnd:ie,style:{...U.monthDay,position:"relative",zIndex:1,...oe?{background:v,borderColor:v,color:"#fff"}:{},...ut?{background:R,borderColor:v,color:v}:{},...k&&he&&!oe?{borderColor:v,color:v}:{},...pe&&!oe?U.monthDayFuture:{},...O&&!oe?{borderColor:v,borderWidth:2}:{},width:"100%"},children:G}),k&&he&&r.jsx("span",{style:{...U.countBadge,background:oe?"#4C9A6B":v},children:ee}),M&&r.jsx("span",{style:U.noteIndicator}),l===E&&r.jsx(l0,{onEdit:i,onDelete:o,onAddNote:()=>Ie(E),onRemind:i,onClose:()=>a(null)})]},E)})]})]}),h&&r.jsxs("div",{style:U.noteBox,children:[r.jsxs("div",{style:{fontWeight:600,fontSize:13,marginBottom:6},children:["Note for ",h]}),r.jsx("textarea",{value:d,onChange:E=>g(E.target.value),placeholder:"Add a note for this day…",style:{...U.sideInput,minHeight:60,resize:"vertical"}}),r.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[r.jsxs("button",{onClick:()=>{s(h,d),x(null)},style:U.sideAddBtn,children:[r.jsx(Ne,{size:13})," Save"]}),r.jsx("button",{onClick:()=>x(null),style:U.sideCancelBtn,children:r.jsx(De,{size:13})})]})]})]})}function l0({onEdit:e,onDelete:t,onAddNote:n,onRemind:o,onClose:i}){return r.jsxs("div",{style:U.longPressMenu,children:[r.jsxs("button",{style:U.menuItem,onClick:()=>{e(),i()},children:[r.jsx(xt,{size:13})," Edit"]}),r.jsxs("button",{style:U.menuItem,onClick:()=>{n(),i()},children:[r.jsx($c,{size:13})," Add note"]}),r.jsxs("button",{style:U.menuItem,onClick:()=>{o(),i()},children:[r.jsx(ym,{size:13})," Remind"]}),r.jsxs("button",{style:{...U.menuItem,color:"#C2536B"},onClick:()=>{t(),i()},children:[r.jsx(De,{size:13})," Delete"]})]})}function a0({habits:e,onSave:t,onClose:n}){const[o,i]=c.useState([...e]),s=(l,a)=>{const d=[...o],g=l+a;g<0||g>=d.length||([d[l],d[g]]=[d[g],d[l]],i(d))};return r.jsx("div",{style:U.modalOverlay,onClick:n,children:r.jsxs("div",{style:{...U.modal,maxHeight:"80vh",overflow:"hidden"},onClick:l=>l.stopPropagation(),children:[r.jsxs("div",{style:{...U.modalHead,flexShrink:0},children:["Reorder Habits",r.jsx("button",{onClick:n,style:U.closeBtn,children:r.jsx(De,{size:16})})]}),r.jsx("p",{style:{fontSize:12,color:"var(--text-3)",margin:"0 0 10px",flexShrink:0},children:"Use arrows to set the display order."}),r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6,overflowY:"auto",minHeight:0},children:o.map((l,a)=>{var g;const d=((g=Xn[l.pillar])==null?void 0:g.dot)||"#9A968C";return r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"9px 10px",background:"var(--bg)",borderRadius:9,border:"1px solid var(--border)"},children:[r.jsx("span",{style:{...U.sideDot,background:d}}),r.jsx("span",{style:{flex:1,fontSize:13,fontWeight:500},children:l.name}),r.jsx("button",{onClick:()=>s(a,-1),disabled:a===0,style:{...U.navBtn,width:28,height:28,opacity:a===0?.3:1,fontSize:14},children:"↑"}),r.jsx("button",{onClick:()=>s(a,1),disabled:a===o.length-1,style:{...U.navBtn,width:28,height:28,opacity:a===o.length-1?.3:1,fontSize:14},children:"↓"})]},l.id)})}),r.jsxs("button",{onClick:()=>t(o.map(l=>l.id)),style:{...U.sideAddBtn,width:"100%",marginTop:14,height:38,justifyContent:"center",flexShrink:0},children:[r.jsx(Ne,{size:14})," Save Order"]})]})})}function d0({year:e}){const[t,n]=c.useState([]);if(c.useEffect(()=>{$.getHabitsYearly(e).then(n).catch(console.error)},[e]),!t.length)return null;const o=Array.from({length:12},(s,l)=>{const a=t.reduce((g,h)=>{var x;return g+(((x=h.monthly[l+1])==null?void 0:x.done)||0)},0),d=t.reduce((g,h)=>{var x;return g+Math.floor((((x=h.monthly[l+1])==null?void 0:x.days)||30)/7*7)},0);return d>0?Math.round(a/d*100):0}),i=Math.max(...o,1);return r.jsxs("div",{style:{...U.monthCard,marginTop:18},children:[r.jsxs("div",{style:U.monthTitle,children:[e," Completion"]}),r.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:6,height:80,marginTop:12},children:o.map((s,l)=>r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[r.jsx("div",{style:{width:"100%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",height:`${s/i*60}px`,minHeight:2,opacity:s>0?1:.15},title:`${s}%`}),r.jsx("span",{style:{fontSize:9,color:"var(--text-3)",fontWeight:600},children:Xy[l]})]},l))})]})}function Fn({label:e,value:t,c:n,soft:o,flame:i}){return r.jsxs("div",{style:{...U.stat,background:o},children:[r.jsx("div",{style:U.statLabel,children:e}),r.jsxs("div",{style:{...U.statValue,color:n},children:[i&&r.jsx(Jn,{size:15})," ",t]})]})}const U={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:230,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",padding:"20px 12px",display:"flex",flexDirection:"column",gap:3,overflowY:"auto"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.18)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)",boxShadow:"none"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.38)",zIndex:20},sideTop:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 4px"},closeBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",marginBottom:8},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700,padding:"0 6px 14px"},sideItem:{display:"flex",alignItems:"center",gap:9,width:"100%",border:"none",background:"none",padding:"9px 10px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:500,color:"var(--text-2)",textAlign:"left"},sideItemOn:{background:"var(--hover)",fontWeight:600},sideLabel:{flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},sideCount:{fontSize:11,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:10,padding:"1px 7px"},sideStreak:{display:"flex",alignItems:"center",gap:3,fontSize:11,fontWeight:600,color:"#C2773B"},sideDot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},sideDivider:{height:1,background:"var(--border)",margin:"8px 6px"},addBox:{padding:"10px 6px",display:"flex",flexDirection:"column",gap:6},sideInput:{border:"1px solid var(--border)",borderRadius:7,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},sideAddBtn:{border:"none",background:"#4C9A6B",color:"#fff",height:30,padding:"0 12px",borderRadius:7,cursor:"pointer",display:"flex",alignItems:"center",gap:5,fontSize:13,fontFamily:"inherit"},sideCancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:30,height:30,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},sideNewBtn:{display:"flex",alignItems:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",borderRadius:8,padding:"8px 10px",fontSize:12.5,color:"var(--text-3)",fontWeight:600,cursor:"pointer",fontFamily:"inherit",marginTop:6,justifyContent:"center"},main:{flex:1,padding:"26px",overflowX:"hidden",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:200},mainHead:{marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:5,display:"flex",alignItems:"center"},h1:{fontSize:27,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},actionBtn:{display:"flex",alignItems:"center",gap:5,fontSize:12,fontWeight:500,color:"var(--text-2)",border:"1px solid var(--border)",background:"var(--surface)",padding:"5px 10px",borderRadius:7,cursor:"pointer",fontFamily:"inherit"},progressCard:{background:"var(--surface)",borderRadius:12,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14,display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"},progressDivider:{width:1,alignSelf:"stretch",background:"var(--border)",minHeight:48},ringStat:{display:"flex",alignItems:"center",gap:12,flex:"1 1 160px"},ringBox:{position:"relative",width:70,height:70,display:"grid",placeItems:"center",flexShrink:0},ringPct:{position:"absolute",inset:0,display:"grid",placeItems:"center",fontSize:16,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},ringLabel:{fontSize:14,fontWeight:700,color:"var(--text)"},ringSub:{fontSize:11.5,color:"var(--text-3)",fontWeight:500,marginTop:2},weekCard:{background:"var(--surface)",borderRadius:12,padding:"8px 14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"auto"},weekHeadRow:{display:"flex",alignItems:"flex-end",padding:"10px 0",borderBottom:"1px solid var(--border)",minWidth:480,position:"relative",zIndex:0},weekNameCol:{width:160,flexShrink:0,alignSelf:"stretch",display:"flex",alignItems:"center",gap:8,position:"sticky",left:0,zIndex:5,background:"var(--surface)",boxShadow:"6px 0 6px -6px rgba(0,0,0,0.15)"},weekDayHead:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:2},weekDayName:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekDayNum:{fontSize:12,fontWeight:600,color:"var(--text-2)",width:22,height:22,display:"grid",placeItems:"center",borderRadius:"50%"},weekDayToday:{background:"var(--accent-strong)",color:"#fff"},weekStreakCol:{width:64,flexShrink:0,textAlign:"center",fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekRow:{display:"flex",alignItems:"center",padding:"9px 0",borderBottom:"1px solid #F4F2EC",minWidth:480,position:"relative",zIndex:0},weekHabitName:{fontSize:13,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},weekCell:{flex:1,display:"grid",placeItems:"center"},typeBadge:{fontSize:10,color:"var(--text-3)",background:"var(--hover)",padding:"1px 6px",borderRadius:8,fontWeight:600},tick:{width:26,height:26,borderRadius:7,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",padding:0},tickFuture:{opacity:.4,cursor:"not-allowed",borderStyle:"dashed"},streakPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:12,fontWeight:700,padding:"3px 9px",borderRadius:12},tinyBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:"2px 3px",display:"grid",placeItems:"center",borderRadius:4},statStrip:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(120px,1fr))",gap:10,marginBottom:18},stat:{borderRadius:10,padding:"13px 14px"},statLabel:{fontSize:11,fontWeight:600,color:"var(--text-2)",marginBottom:5},statValue:{fontSize:19,fontWeight:700,display:"flex",alignItems:"center",gap:5,fontFamily:"'Fraunces',Georgia,serif"},monthCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},monthTitle:{fontSize:14,fontWeight:700,marginBottom:12,fontFamily:"'Fraunces',Georgia,serif"},monthDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6,marginBottom:8},monthDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},monthGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6},monthDay:{aspectRatio:"1",border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",display:"grid",placeItems:"center"},monthDayFuture:{opacity:.4,cursor:"not-allowed",background:"var(--surface-2)"},monthDayOff:{background:"var(--surface-2)",borderStyle:"dashed",color:"var(--text-3)",opacity:.5,cursor:"default"},dayPick:{display:"flex",gap:4,flexWrap:"wrap"},dayChip:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",borderRadius:7,padding:"5px 7px",fontSize:11,fontWeight:700,cursor:"pointer",fontFamily:"inherit",minWidth:34},dayChipOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},pickHint:{fontSize:11,color:"var(--text-3)",fontWeight:600},offDay:{color:"var(--text-3)",opacity:.4,fontSize:18,lineHeight:1,userSelect:"none"},noteIndicator:{position:"absolute",top:3,right:3,width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},cellNoteBubble:{position:"absolute",top:2,right:"calc(50% - 16px)",width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},countBadge:{position:"absolute",bottom:2,right:2,minWidth:13,height:13,padding:"0 2px",borderRadius:7,color:"#fff",fontSize:9,fontWeight:700,display:"grid",placeItems:"center",lineHeight:1},counterBtn:{width:44,height:44,borderRadius:"50%",border:"1.5px solid var(--border)",background:"var(--surface)",color:"var(--text)",fontSize:24,fontWeight:700,cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit",lineHeight:1},chainLine:{position:"absolute",top:"calc(50% - 3px)",left:0,right:0,height:6,zIndex:0,opacity:.9},chainBanner:{display:"flex",alignItems:"center",gap:8,borderRadius:10,padding:"10px 14px",marginBottom:14,fontSize:12.5,fontWeight:700,fontFamily:"'Inter',system-ui,sans-serif"},navBar:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:16},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},navLabel:{fontSize:13,fontWeight:700,color:"var(--text)",minWidth:180,textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},noteBox:{background:"var(--surface)",borderRadius:10,padding:14,marginTop:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},longPressMenu:{position:"absolute",top:"100%",left:0,zIndex:50,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 4px 16px rgba(0,0,0,0.12)",padding:"4px 0",minWidth:140},menuItem:{display:"flex",alignItems:"center",gap:8,width:"100%",border:"none",background:"none",padding:"8px 14px",fontSize:13,color:"var(--text)",cursor:"pointer",fontFamily:"inherit",textAlign:"left"},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",zIndex:100,display:"grid",placeItems:"center"},modal:{background:"var(--surface)",borderRadius:14,padding:24,width:320,maxWidth:"90vw",display:"flex",flexDirection:"column",gap:8},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",fontWeight:700,fontSize:16,fontFamily:"'Fraunces',Georgia,serif",marginBottom:6},modalLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.08em",marginTop:4}},Wd=[{id:1,label:"Rough",emoji:"😣",color:"#C2536B"},{id:2,label:"Low",emoji:"🙁",color:"#C2773B"},{id:3,label:"Okay",emoji:"😐",color:"#C9A227"},{id:4,label:"Good",emoji:"🙂",color:"#4C9A6B"},{id:5,label:"Great",emoji:"😄",color:"#3A7CA5"}],c0=e=>Wd.find(t=>t.id===e),ka=[{id:"wins",label:"Wins",hint:"What went well today?",icon:nn,color:"#C9A227"},{id:"grateful",label:"Grateful for",hint:"1–3 things",icon:wm,color:"#C2536B"},{id:"mattered",label:"What mattered",hint:"The point of today",icon:Gc,color:"#3A7CA5"},{id:"letgo",label:"Letting go of",hint:"Offload what's draining",icon:Ey,color:"#8268B0"},{id:"tomorrow",label:"Tomorrow's one thing",hint:"A single priority",icon:jy,color:"#4C9A6B"}],Pm=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,g0=()=>Pm(new Date),ja=e=>new Date(e+"T00:00:00").toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long",year:"numeric"});function u0(){const e=g0(),[t,n]=[new Date().getFullYear(),new Date().getMonth()+1],[o,i]=c.useState(null),s=o||e,l=s===e,[a,d]=c.useState(null),[g,h]=c.useState({}),[x,f]=c.useState(Object.fromEntries(ka.map(D=>[D.id,""]))),A=c.useCallback(async D=>{const W=await $.getJournalEntry(D);d(W)},[]);c.useCallback(async()=>{const D=await $.getJournalHistory(t,n);h(D)},[t,n]);const S=c.useCallback(async()=>{const[D,W]=await Promise.all([$.getJournalEntry(s),$.getJournalHistory(t,n)]);d(D),h(W)},[s,t,n]);c.useEffect(()=>{S()},[S]);const v=async D=>{l&&(await $.updateJournalMood(s,D),S())},R=async D=>{if(!l)return;const W=x[D].trim();W&&(await $.addJournalBullet(s,D,W),f(w=>({...w,[D]:""})),A(s))},m=async D=>{await $.deleteJournalBullet(D),A(s)},p=D=>{i(D===e?null:D),f(Object.fromEntries(ka.map(W=>[W.id,""])))};if(!a)return r.jsx("div",{style:{padding:28,color:"var(--text-3)"},children:"Loading…"});const b=a.mood!==null,B=(()=>{let D=0;const W=new Date(e);if(g[e]||l&&b)D=1,W.setDate(W.getDate()-1);else return 0;for(;;){const te=Pm(W);if(g[te])D++,W.setDate(W.getDate()-1);else break}return D})(),C=Object.values(a.bullets||{}).reduce((D,W)=>D+W.length,0),T=new Date(t,n,0).getDate(),F=new Date(t,n-1,1).getDay(),_=F===0?6:F-1;return r.jsxs("div",{style:He.page,children:[r.jsxs("div",{style:He.head,children:[r.jsxs("div",{children:[r.jsx("div",{style:He.eyebrow,children:"Anvil · Journal"}),!l&&r.jsxs("button",{style:He.backBtn,onClick:()=>i(null),children:[r.jsx(Dn,{size:14})," Back to Today"]}),r.jsx("h1",{style:He.h1,children:l?"Today":ja(s)}),l&&r.jsx("div",{style:He.date,children:ja(e)})]}),r.jsxs("div",{style:He.streakBox,children:[r.jsx(Jn,{size:16,color:"#C2773B"}),r.jsx("span",{style:He.streakNum,children:B}),r.jsx("span",{style:He.streakLabel,children:"day streak"})]})]}),r.jsxs("div",{style:He.card,children:[r.jsxs("div",{style:He.cardTitle,children:["How ",l?"are":"were"," you?"]}),r.jsx("div",{style:He.moodRow,children:Wd.map(D=>{const W=a.mood===D.id;return r.jsxs("button",{onClick:()=>v(D.id),disabled:!l,style:{...He.moodBtn,cursor:l?"pointer":"default",...W?{background:D.color,borderColor:D.color,transform:"translateY(-2px)"}:{},...!l&&!W?{opacity:.55}:{}},children:[r.jsx("span",{style:He.moodEmoji,children:D.emoji}),r.jsx("span",{style:{...He.moodLabel,color:W?"#fff":"#6B675E"},children:D.label})]},D.id)})})]}),ka.map(D=>{var te;const W=D.icon,w=((te=a.bullets)==null?void 0:te[D.id])||[];return r.jsxs("div",{style:He.card,children:[r.jsxs("div",{style:He.sectionHead,children:[r.jsx("span",{style:{...He.sectionIcon,background:`${D.color}1A`,color:D.color},children:r.jsx(W,{size:15})}),r.jsxs("div",{children:[r.jsx("div",{style:He.cardTitle,children:D.label}),r.jsx("div",{style:He.sectionHint,children:D.hint})]})]}),r.jsxs("ul",{style:He.bulletList,children:[w.map(z=>r.jsxs("li",{style:He.bullet,children:[r.jsx("span",{style:{...He.bulletDot,background:D.color}}),r.jsx("span",{style:He.bulletText,children:z.text}),l&&r.jsx("button",{onClick:()=>m(z.id),style:He.bulletDel,children:r.jsx(De,{size:13})})]},z.id)),!l&&w.length===0&&r.jsx("li",{style:He.sectionHint,children:"Nothing written."})]}),l&&r.jsxs("div",{style:He.addRow,children:[r.jsx("input",{placeholder:"Add a point…",value:x[D.id],onChange:z=>f(re=>({...re,[D.id]:z.target.value})),onKeyDown:z=>z.key==="Enter"&&R(D.id),style:He.input}),r.jsx("button",{onClick:()=>R(D.id),style:{...He.addBtn,background:D.color},children:r.jsx(Qe,{size:16})})]})]},D.id)}),r.jsxs("div",{style:He.card,children:[r.jsxs("div",{style:He.cardTitle,children:[new Date(t,n-1).toLocaleDateString("en-US",{month:"long",year:"numeric"})," · Mood history",r.jsx("span",{style:{fontSize:11,color:"var(--text-3)",fontWeight:400,marginLeft:8},children:"tap a day to view"})]}),r.jsx("div",{style:He.calDow,children:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(D=>r.jsx("div",{style:He.calDowCell,children:D},D))}),r.jsxs("div",{style:He.calGrid,children:[Array.from({length:_}).map((D,W)=>r.jsx("div",{},`p${W}`)),Array.from({length:T},(D,W)=>W+1).map(D=>{const W=`${t}-${String(n).padStart(2,"0")}-${String(D).padStart(2,"0")}`,w=W===e&&a.mood?a.mood:g[W],te=w?c0(w):null,z=W>e,re=W===s;return r.jsx("button",{onClick:()=>!z&&p(W),disabled:z,style:{...He.calDay,background:te?te.color:z?"var(--surface-2)":"var(--surface)",borderColor:re?"var(--accent-strong)":"var(--border)",borderWidth:re?2:1,color:te?"#fff":"var(--text-3)",opacity:z?.5:1,cursor:z?"not-allowed":"pointer",outline:re?"2px solid var(--accent-strong)":"none",outlineOffset:1},title:te?te.label:W,children:te?te.emoji:D},D)})]}),r.jsx("div",{style:He.legend,children:Wd.map(D=>r.jsxs("span",{style:He.legendItem,children:[r.jsx("span",{style:{...He.legendDot,background:D.color}})," ",D.label]},D.id))})]}),r.jsx("div",{style:He.footer,children:l?b?`Mood set · ${C} point${C===1?"":"s"} written today`:"Tap a mood to log today and keep your streak":`Viewing ${ja(s)} · past entries are read-only`})]})}const He={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:22},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},backBtn:{display:"inline-flex",alignItems:"center",gap:4,border:"none",background:"none",color:"#3A7CA5",fontSize:12.5,fontWeight:600,cursor:"pointer",padding:"0 0 6px",fontFamily:"inherit"},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},date:{fontSize:13,color:"var(--text-3)",marginTop:4},streakBox:{display:"flex",alignItems:"center",gap:6,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"8px 14px"},streakNum:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"#C2773B"},streakLabel:{fontSize:11,color:"var(--text-3)",fontWeight:500},card:{background:"var(--surface)",borderRadius:12,padding:"18px 20px",marginBottom:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},cardTitle:{fontSize:14,fontWeight:700,marginBottom:12,color:"var(--text)"},moodRow:{display:"flex",gap:8,flexWrap:"wrap"},moodBtn:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,border:"2px solid var(--border)",background:"var(--surface)",borderRadius:10,padding:"10px 12px",cursor:"pointer",flex:"1 1 60px",transition:"transform 0.1s"},moodEmoji:{fontSize:22},moodLabel:{fontSize:11,fontWeight:600},sectionHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:10},sectionIcon:{width:32,height:32,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},sectionHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},bulletList:{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6,marginBottom:10},bullet:{display:"flex",alignItems:"center",gap:8,fontSize:13.5,lineHeight:1.4},bulletDot:{width:6,height:6,borderRadius:"50%",flexShrink:0},bulletText:{flex:1},bulletDel:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},addRow:{display:"flex",gap:8},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 12px",fontSize:13.5,fontFamily:"inherit",outline:"none"},addBtn:{width:36,height:36,border:"none",borderRadius:8,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:12},calDay:{aspectRatio:"1",border:"1px solid var(--border)",borderRadius:7,fontSize:13,display:"grid",placeItems:"center",fontWeight:500,fontFamily:"inherit"},legend:{display:"flex",gap:10,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)"},legendDot:{width:8,height:8,borderRadius:"50%",display:"inline-block"},footer:{fontSize:12.5,color:"var(--text-3)",textAlign:"center",marginTop:8,fontStyle:"italic"}};function p0(e=760){const[t,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),t}const vr=[{id:"D",label:"Data",color:"#3A7CA5",soft:"rgba(58,124,165,0.10)",prompt:"What did you read/watch? Log the raw source and a quick note.",hint:"e.g. 'Atomic Habits ch.1 — habits are systems not goals'"},{id:"I",label:"Information",color:"#8268B0",soft:"rgba(130,104,176,0.10)",prompt:"What did you actually understand from it? In your own words.",hint:"e.g. 'Small 1% improvements compound into massive change over time'"},{id:"K",label:"Knowledge",color:"#C9A227",soft:"rgba(201,162,39,0.10)",prompt:"How will this specifically improve your life? Connect it to your goals.",hint:"e.g. 'I will improve my morning workout habit by 1% each week'"},{id:"W",label:"Wisdom",color:"#4C9A6B",soft:"rgba(76,154,107,0.10)",prompt:"How have you implemented it? What changed?",hint:"e.g. 'I've not missed a workout in 3 weeks using the 1% rule'"}],Iu=e=>vr.findIndex(t=>t.id===e),Ld=[{id:"book",label:"Book",icon:_c},{id:"video",label:"Video",icon:By},{id:"article",label:"Article",icon:$c}],Tu=e=>Ld.find(t=>t.id===e)||Ld[0],wa={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"};function b0(){var O;const[e,t]=c.useState([]),[n,o]=c.useState(null),[i,s]=c.useState("ALL"),[l,a]=c.useState(!1),[d,g]=c.useState(null),[h,x]=c.useState({title:"",type:"book",pillar:"Academic",note:""}),[f,A]=c.useState({}),[S,v]=c.useState(null),[R,m]=c.useState(null),[p,b]=c.useState({}),[B,C]=c.useState({}),[T,F]=c.useState(null),_=p0(),D=c.useCallback(async()=>{try{const M=await $.getSkills();t(M);const k={};M.forEach(ee=>{k[ee.id]=Object.fromEntries(vr.map(he=>[he.id,""]))}),A(ee=>{const he={...k};return M.forEach(Ee=>{ee[Ee.id]&&(he[Ee.id]={...k[Ee.id],...ee[Ee.id]})}),he})}catch(M){console.error(M)}},[]);c.useEffect(()=>{D()},[D]);const W=e.find(M=>M.id===n),w=W?Iu(W.stage):-1,te=async(M,k)=>{var he;const ee=(((he=f[M])==null?void 0:he[k])??"").trim();ee&&(await $.addSkillNote(M,k,ee),A(Ee=>({...Ee,[M]:{...Ee[M],[k]:""}})),D())},z=async M=>{await $.deleteSkillNote(M),D()},re=M=>(M==null?void 0:M.source_type)==="book"?"Chapter":"Learning",be=()=>`g${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,ge=async M=>{const k=[...M.data_groups||[]];k.push({id:be(),label:`${re(M)} ${k.length+1}`}),await $.setSkillGroups(M.id,k),C(ee=>({...ee,[k[k.length-1].id]:!0})),D()},ye=async(M,k,ee)=>{const he=(M.data_groups||[]).map(Ee=>Ee.id===k?{...Ee,label:ee}:Ee);await $.setSkillGroups(M.id,he),D()},J=async(M,k)=>{const ee=(M.data_groups||[]).filter(he=>he.id!==k);await $.setSkillGroups(M.id,ee),D()},H=async(M,k)=>{const ee=(p[k]??"").trim();ee&&(await $.addSkillNote(M.id,"D",ee,k),b(he=>({...he,[k]:""})),D())},se=async()=>{!W||!(R!=null&&R.trim())||(await $.updateSkill(W.id,{title:R.trim()}),m(null),D())},V=async()=>{!S||!S.text.trim()||(await $.updateSkillNote(S.id,S.text.trim()),v(null),D())},de=async M=>{await $.toggleSkillNote(M),D()},I=async(M,k)=>{e.find(he=>he.id===M)&&(k==="W"&&g(M),await $.completeSkillStage(M,k),D())},ie=async()=>{if(!h.title.trim())return;const M=await $.createSkill({pillar:h.pillar,title:h.title.trim(),source_type:h.type,note_d:h.note.trim()});a(!1),x({title:"",type:"book",pillar:"Academic",note:""}),o(M.id),D()},{deleteItem:Ie,toasts:Q,handleUndo:y,handleDismiss:E}=er($.deleteSkill,$.restoreSkill,D),P=(M,k="Skill")=>{n===M&&o(null),Ie(M,k)},G=i==="ALL"?e:e.filter(M=>M.stage===i),oe=e.filter(M=>M.stage==="W").length,pe=!!W;return r.jsxs("div",{style:ce.page,children:[d&&r.jsx("div",{style:ce.celebOverlay,children:r.jsxs("div",{style:ce.celebBox,children:[r.jsx("div",{style:ce.celebEmoji,children:"🏆"}),r.jsx("div",{style:ce.celebTitle,children:"Wisdom unlocked!"}),r.jsx("div",{style:ce.celebSub,children:"You've implemented this knowledge — that's rare and real."}),r.jsx("button",{onClick:()=>g(null),style:ce.celebBtn,children:"Continue"})]})}),r.jsxs("div",{style:ce.head,children:[r.jsxs("div",{children:[r.jsx("div",{style:ce.eyebrow,children:"Anvil · Skills"}),r.jsx("h1",{style:ce.h1,children:"DIKW Skills"}),r.jsx("div",{style:ce.subhead,children:"Data → Information → Knowledge → Wisdom"})]}),r.jsxs("div",{style:ce.headRight,children:[r.jsxs("div",{style:ce.wisdomBadge,children:[r.jsx(nn,{size:14,color:"#C9A227"})," ",oe," Wisdom",oe!==1?"s":""]}),r.jsxs("button",{onClick:()=>{a(!0),o(null)},style:ce.addSkillBtn,children:[r.jsx(Qe,{size:15})," Add skill"]})]})]}),r.jsx("div",{style:ce.filterBar,children:["ALL",...vr.map(M=>M.id)].map(M=>{const k=vr.find(he=>he.id===M),ee=i===M;return r.jsx("button",{onClick:()=>s(M),style:{...ce.filterBtn,...ee?{background:k?k.color:"var(--accent-strong)",color:"#fff",borderColor:"transparent"}:{}},children:k?`${M} · ${k.label}`:"All"},M)})}),r.jsxs("div",{style:{...ce.layout,gridTemplateColumns:!_&&pe?"minmax(0,1fr) minmax(0,1fr)":"1fr"},children:[(!_||!W)&&r.jsxs("div",{style:{...ce.cardList,gridTemplateColumns:_||pe?"1fr":"repeat(3, minmax(0, 1fr))"},children:[l&&r.jsxs("div",{style:{...ce.skillCard,border:"2px dashed #3A7CA5",gridColumn:"1 / -1"},children:[r.jsx("div",{style:ce.cardTitle,children:"New skill"}),r.jsx("input",{placeholder:"Title (book / video / article name)",value:h.title,onChange:M=>x(k=>({...k,title:M.target.value})),onKeyDown:M=>M.key==="Enter"&&ie(),style:ce.input,autoFocus:!0}),r.jsxs("div",{style:ce.addRow,children:[r.jsx("select",{value:h.type,onChange:M=>x(k=>({...k,type:M.target.value})),style:ce.select,children:Ld.map(M=>r.jsx("option",{value:M.id,children:M.label},M.id))}),r.jsx("select",{value:h.pillar,onChange:M=>x(k=>({...k,pillar:M.target.value})),style:ce.select,children:Object.keys(wa).map(M=>r.jsx("option",{children:M},M))})]}),r.jsxs("div",{style:ce.addRow,children:[r.jsxs("button",{onClick:ie,style:ce.saveBtn,children:[r.jsx(Ne,{size:14})," Save"]}),r.jsxs("button",{onClick:()=>a(!1),style:ce.cancelBtn,children:[r.jsx(De,{size:14})," Cancel"]})]})]}),G.map(M=>{const k=Iu(M.stage),ee=vr[k],he=Tu(M.source_type),Ee=M.stage==="W",ut=n===M.id;return r.jsxs("div",{onClick:()=>o(ut?null:M.id),style:{...ce.skillCard,...ut?{borderColor:ee.color,borderWidth:2}:{},...Ee?{background:"rgba(76,154,107,0.05)"}:{}},children:[r.jsxs("div",{style:ce.skillCardTop,children:[r.jsxs("div",{style:ce.skillMeta,children:[r.jsx("span",{style:{color:wa[M.pillar]},children:r.jsx(he.icon,{size:13})}),r.jsx("span",{style:{...ce.pillarDot,background:wa[M.pillar]}}),r.jsxs("span",{style:ce.srcLabel,children:[he.label," · ",M.pillar]})]}),r.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[Ee&&r.jsx(eo,{size:14,color:"#4C9A6B"}),r.jsx("button",{onClick:Pe=>{Pe.stopPropagation(),P(M.id,M.title)},style:ce.ghostBtn,children:r.jsx(De,{size:13})})]})]}),r.jsx("div",{style:ce.skillTitle,children:M.title}),r.jsxs("div",{style:ce.track,children:[vr.map((Pe,nt)=>{var tt;const qe=nt<k,Xe=nt===k,ot=(tt=M.completed_stages)==null?void 0:tt[Pe.id];return r.jsxs("div",{style:{...ce.trackItem,...nt<vr.length-1?{flex:1}:{}},children:[r.jsxs("div",{style:{...ce.trackDot,background:qe||ot||Xe?Pe.color:"var(--border)",boxShadow:Xe?`0 0 0 3px ${Pe.color}33`:"none"},children:[(qe||Xe&&ot)&&r.jsx(Ne,{size:9,color:"#fff",strokeWidth:3}),Xe&&!ot&&r.jsx("span",{style:ce.trackCurrent,children:Pe.id}),!qe&&!Xe&&r.jsx(du,{size:8,color:"#B5B1A7"})]}),nt<vr.length-1&&r.jsx("div",{style:{...ce.trackLine,background:qe?vr[nt+1].color:"var(--border)"}})]},Pe.id)}),r.jsx("span",{style:{...ce.stageTag,background:ee.soft,color:ee.color},children:ee.label})]})]},M.id)}),G.length===0&&!l&&r.jsx("div",{style:{...ce.empty,gridColumn:"1 / -1"},children:"No skills at this stage yet."})]}),W&&r.jsxs("div",{style:ce.detail,children:[r.jsxs("div",{style:ce.detailHead,children:[_&&r.jsx("button",{onClick:()=>{o(null),m(null)},style:ce.backBtn,title:"Back to skills",children:r.jsx(Dn,{size:18})}),r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsxs("div",{style:ce.eyebrow,children:[Tu(W.source_type).label," · ",W.pillar]}),R!==null?r.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",marginTop:4},children:[r.jsx("input",{autoFocus:!0,value:R,onChange:M=>m(M.target.value),onKeyDown:M=>{M.key==="Enter"&&se(),M.key==="Escape"&&m(null)},style:{...ce.input,fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:0,flex:1}}),r.jsx("button",{onClick:se,style:{...ce.noteAddBtn,background:"#4C9A6B",width:30,height:30},children:r.jsx(Ne,{size:13})}),r.jsx("button",{onClick:()=>m(null),style:{...ce.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:30,height:30},children:r.jsx(De,{size:13})})]}):r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx("div",{style:ce.detailTitle,children:W.title}),r.jsx("button",{onClick:()=>m(W.title),style:ce.ghostBtn,title:"Edit name",children:r.jsx(xt,{size:13})})]})]}),r.jsx("button",{onClick:()=>{o(null),m(null)},style:ce.closeBtn,children:r.jsx(De,{size:16})})]}),vr.map((M,k)=>{var qe,Xe,ot;const ee=k<=w,he=k===w,Ee=k<w||((qe=W.completed_stages)==null?void 0:qe[M.id]),ut=k>w,Pe=((Xe=W.notes)==null?void 0:Xe[M.id])||[],nt=((ot=f[W.id])==null?void 0:ot[M.id])??"";return r.jsxs("div",{style:{...ce.stageBlock,...ee?{borderColor:M.color}:{},opacity:ut?.45:1},children:[r.jsxs("div",{style:ce.stageBlockHead,children:[r.jsx("div",{style:{...ce.stageLetter,background:ee?M.color:"var(--border)",color:ee?"#fff":"#9A968C"},children:Ee&&!he?r.jsx(Ne,{size:12,color:"#fff",strokeWidth:3}):ut?r.jsx(du,{size:11,color:"#9A968C"}):M.id}),r.jsxs("div",{style:{flex:1},children:[r.jsx("div",{style:{...ce.stageName,color:ee?M.color:"#9A968C"},children:M.label}),ee&&r.jsx("div",{style:ce.stagePrompt,children:M.prompt})]}),Ee&&!he&&r.jsx("span",{style:{...ce.doneBadge,color:M.color,background:M.soft},children:"Done"})]}),ee&&(()=>{var Ae,Le;const tt=M.id==="W",Tr=M.id==="D",Ot=Pe.length>0&&Pe.every(we=>we.done),wt=tt?Ot:Pe.length>0,pt=W.data_groups||[],St=Pe.filter(we=>!we.grp),u=re(W),q=we=>r.jsxs("li",{style:ce.noteItem,children:[r.jsx("span",{style:{...ce.noteDot,background:M.color}}),(S==null?void 0:S.id)===we.id?r.jsxs("div",{style:{flex:1,display:"flex",gap:5},children:[r.jsx("input",{autoFocus:!0,value:S.text,onChange:$e=>v(Ct=>({...Ct,text:$e.target.value})),onKeyDown:$e=>{$e.key==="Enter"&&V(),$e.key==="Escape"&&v(null)},style:{...ce.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}),r.jsx("button",{onClick:V,style:{...ce.noteAddBtn,background:M.color,width:28,height:28},children:r.jsx(Ne,{size:12})}),r.jsx("button",{onClick:()=>v(null),style:{...ce.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:28,height:28},children:r.jsx(De,{size:12})})]}):r.jsx("span",{style:ce.noteText,children:we.text}),(S==null?void 0:S.id)!==we.id&&r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:()=>v({id:we.id,text:we.text}),style:ce.ghostBtn,children:r.jsx(xt,{size:12})}),r.jsx("button",{onClick:()=>z(we.id),style:ce.ghostBtn,children:r.jsx(De,{size:12})})]})]},we.id);return r.jsxs(r.Fragment,{children:[Tr?r.jsxs(r.Fragment,{children:[St.length>0&&r.jsx("ul",{style:ce.noteList,children:St.map(q)}),pt.map(we=>{const $e=Pe.filter(At=>At.grp===we.id),Ct=B[we.id]!==!1;return r.jsxs("div",{style:{...ce.groupBox,borderColor:`${M.color}55`},children:[r.jsxs("div",{style:ce.groupHead,children:[r.jsx("button",{onClick:()=>C(At=>({...At,[we.id]:!Ct})),style:ce.groupCaret,children:Ct?r.jsx(Qi,{size:15}):r.jsx(sn,{size:15})}),W.source_type==="book"?r.jsx(_c,{size:13,color:M.color}):r.jsx(ay,{size:13,color:M.color}),(T==null?void 0:T.id)===we.id?r.jsx("input",{autoFocus:!0,value:T.label,onChange:At=>F(ln=>({...ln,label:At.target.value})),onKeyDown:At=>{At.key==="Enter"&&(ye(W,we.id,T.label.trim()||we.label),F(null)),At.key==="Escape"&&F(null)},onBlur:()=>{ye(W,we.id,T.label.trim()||we.label),F(null)},style:{...ce.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}):r.jsx("span",{style:ce.groupTitle,onClick:()=>F({id:we.id,label:we.label}),title:"Click to rename",children:we.label}),r.jsx("span",{style:ce.groupCount,children:$e.length}),r.jsx("button",{onClick:()=>J(W,we.id),style:ce.ghostBtn,title:`Delete ${u.toLowerCase()}`,children:r.jsx(De,{size:13})})]}),Ct&&r.jsxs("div",{style:ce.groupBody,children:[$e.length>0&&r.jsx("ul",{style:ce.noteList,children:$e.map(q)}),r.jsxs("div",{style:ce.noteAddRow,children:[r.jsx("input",{placeholder:"Add a point…",value:p[we.id]??"",onChange:At=>b(ln=>({...ln,[we.id]:At.target.value})),onKeyDown:At=>At.key==="Enter"&&H(W,we.id),style:ce.noteInput}),r.jsx("button",{onClick:()=>H(W,we.id),style:{...ce.noteAddBtn,background:M.color},children:r.jsx(Qe,{size:14})})]})]})]},we.id)}),pt.length===0&&St.length===0&&r.jsxs("div",{style:ce.noNotes,children:["No ",u.toLowerCase(),"s yet — add one to start logging points."]}),r.jsxs("button",{onClick:()=>ge(W),style:{...ce.addGroupBtn,color:M.color,borderColor:`${M.color}80`},children:[r.jsx(Qe,{size:14})," Add ",u.toLowerCase()]})]}):r.jsxs(r.Fragment,{children:[Pe.length>0&&r.jsx("ul",{style:ce.noteList,children:Pe.map(we=>r.jsxs("li",{style:ce.noteItem,children:[tt?r.jsx("button",{onClick:()=>de(we.id),style:{...ce.checkBox,...we.done?{background:M.color,borderColor:M.color}:{}},children:we.done&&r.jsx(Ne,{size:11,color:"#fff",strokeWidth:3})}):r.jsx("span",{style:{...ce.noteDot,background:M.color}}),(S==null?void 0:S.id)===we.id?r.jsxs("div",{style:{flex:1,display:"flex",gap:5},children:[r.jsx("input",{autoFocus:!0,value:S.text,onChange:$e=>v(Ct=>({...Ct,text:$e.target.value})),onKeyDown:$e=>{$e.key==="Enter"&&V(),$e.key==="Escape"&&v(null)},style:{...ce.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}),r.jsx("button",{onClick:V,style:{...ce.noteAddBtn,background:M.color,width:28,height:28},children:r.jsx(Ne,{size:12})}),r.jsx("button",{onClick:()=>v(null),style:{...ce.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:28,height:28},children:r.jsx(De,{size:12})})]}):r.jsx("span",{style:{...ce.noteText,...tt&&we.done?{textDecoration:"line-through",color:"var(--text-3)"}:{}},children:we.text}),(S==null?void 0:S.id)!==we.id&&r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:()=>v({id:we.id,text:we.text}),style:ce.ghostBtn,children:r.jsx(xt,{size:12})}),r.jsx("button",{onClick:()=>z(we.id),style:ce.ghostBtn,children:r.jsx(De,{size:12})})]})]},we.id))}),Pe.length===0&&r.jsx("div",{style:ce.noNotes,children:tt?"Add the steps to implement this — check each off as you do it.":`No notes yet — ${M.hint}`}),r.jsxs("div",{style:ce.noteAddRow,children:[r.jsx("input",{placeholder:tt?"Add a step to implement…":`Add a ${M.label} note…`,value:nt,onChange:we=>A($e=>({...$e,[W.id]:{...$e[W.id],[M.id]:we.target.value}})),onKeyDown:we=>we.key==="Enter"&&te(W.id,M.id),style:ce.noteInput}),r.jsx("button",{onClick:()=>te(W.id,M.id),style:{...ce.noteAddBtn,background:M.color},children:r.jsx(Qe,{size:14})})]})]}),he&&!((Ae=W.completed_stages)!=null&&Ae[M.id])&&r.jsxs(r.Fragment,{children:[tt&&Pe.length>0&&!Ot&&r.jsxs("div",{style:ce.checklistHint,children:[Pe.filter(we=>we.done).length,"/",Pe.length," done — check all steps to complete Wisdom"]}),r.jsxs("button",{onClick:()=>I(W.id,M.id),disabled:!wt,style:{...ce.advanceBtn,background:wt?M.color:"#C3BFB5",marginTop:10,cursor:wt?"pointer":"not-allowed"},children:[r.jsx(Ne,{size:14}),tt?"Mark Wisdom complete":`Complete ${M.label} → ${(Le=vr[k+1])==null?void 0:Le.label}`]})]})]})})()]},M.id)}),W.stage==="W"&&((O=W.completed_stages)==null?void 0:O.W)&&r.jsxs("div",{style:ce.wisdomDone,children:[r.jsx(nn,{size:16,color:"#4C9A6B"})," Wisdom achieved — implemented in your life"]})]})]}),r.jsx(tr,{toasts:Q,onUndo:y,onDismiss:E})]})}const ce={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box",position:"relative"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},headRight:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},wisdomBadge:{display:"flex",alignItems:"center",gap:5,background:"rgba(201,162,39,0.12)",border:"1px solid rgba(201,162,39,0.3)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:700,color:"#8A6E1A"},addSkillBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},filterBar:{display:"flex",gap:6,flexWrap:"wrap",marginBottom:16},filterBtn:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},layout:{display:"grid",gap:12,alignItems:"start"},cardList:{display:"grid",gap:10,alignContent:"start"},skillCard:{background:"var(--surface)",borderRadius:12,padding:"16px",border:"1.5px solid var(--border)",cursor:"pointer",boxShadow:"0 1px 2px rgba(0,0,0,0.04)",minWidth:0,overflow:"hidden",boxSizing:"border-box"},skillCardTop:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:8,marginBottom:6},skillMeta:{display:"flex",alignItems:"center",gap:6,minWidth:0},pillarDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},srcLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},skillTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em",marginBottom:12,lineHeight:1.3,wordBreak:"break-word"},cardTitle:{fontSize:13,fontWeight:700,marginBottom:10},track:{display:"flex",alignItems:"center",minWidth:0},trackItem:{display:"flex",alignItems:"center",minWidth:0},trackDot:{width:22,height:22,borderRadius:"50%",display:"grid",placeItems:"center",flexShrink:0},trackCurrent:{fontSize:9,fontWeight:800,color:"#fff"},trackLine:{flex:1,minWidth:8,height:3,borderRadius:2,margin:"0 2px"},stageTag:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:12,marginLeft:8,flexShrink:0,whiteSpace:"nowrap"},detail:{background:"var(--surface)",borderRadius:14,padding:"18px 16px",boxShadow:"0 1px 4px rgba(0,0,0,0.07)",border:"1.5px solid var(--border)",alignSelf:"start"},detailHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16},detailTitle:{fontSize:18,fontWeight:700,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},backBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,marginRight:4},groupBox:{border:"1.5px solid var(--border)",borderRadius:9,marginBottom:8,overflow:"hidden",background:"var(--bg)"},groupHead:{display:"flex",alignItems:"center",gap:7,padding:"8px 10px"},groupCaret:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",display:"grid",placeItems:"center",padding:0,width:18,height:18,flexShrink:0},groupTitle:{flex:1,minWidth:0,fontSize:13,fontWeight:700,color:"var(--text)",cursor:"text",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},groupCount:{fontSize:10.5,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 7px",flexShrink:0},groupBody:{padding:"0 10px 10px 10px"},addGroupBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1.5px dashed",background:"none",padding:"9px 12px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:2},stageBlock:{border:"1.5px solid var(--border)",borderRadius:10,padding:"12px 13px",marginBottom:10},stageBlockHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:8},stageLetter:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",fontSize:13,fontWeight:800,flexShrink:0},stageName:{fontSize:13,fontWeight:700},stagePrompt:{fontSize:11.5,color:"var(--text-2)",marginTop:2,lineHeight:1.4},doneBadge:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10,marginLeft:"auto",flexShrink:0},noteList:{margin:"0 0 8px 0",padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6},noteItem:{display:"flex",alignItems:"flex-start",gap:8,fontSize:13,lineHeight:1.4},noteDot:{width:6,height:6,borderRadius:"50%",flexShrink:0,marginTop:5},checkBox:{width:18,height:18,borderRadius:5,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,marginTop:1,padding:0},checklistHint:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,marginTop:10,textAlign:"center"},noteText:{flex:1,color:"var(--text)"},noNotes:{fontSize:12,color:"var(--text-3)",fontStyle:"italic",marginBottom:8},noteAddRow:{display:"flex",gap:6},noteInput:{flex:1,border:"1px solid var(--border)",borderRadius:7,padding:"7px 10px",fontSize:13,fontFamily:"inherit",outline:"none"},noteAddBtn:{width:32,height:32,border:"none",borderRadius:7,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},advanceBtn:{display:"flex",alignItems:"center",gap:8,border:"none",color:"#fff",padding:"10px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit",width:"100%",justifyContent:"center"},wisdomDone:{display:"flex",alignItems:"center",gap:8,justifyContent:"center",fontSize:13.5,fontWeight:700,color:"#4C9A6B",padding:12,background:"rgba(76,154,107,0.08)",borderRadius:10,marginTop:4},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},input:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box",marginBottom:8},select:{border:"1px solid var(--border)",borderRadius:8,padding:"8px 10px",fontSize:12.5,fontFamily:"inherit",flex:1},addRow:{display:"flex",gap:8,marginBottom:8},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},empty:{fontSize:13,color:"var(--text-3)",padding:"32px 12px",textAlign:"center"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.55)",zIndex:50,display:"grid",placeItems:"center"},celebBox:{background:"var(--surface)",borderRadius:20,padding:"40px 32px",textAlign:"center",maxWidth:320,boxShadow:"0 8px 40px rgba(0,0,0,0.18)"},celebEmoji:{fontSize:52,marginBottom:12},celebTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:8},celebSub:{fontSize:13.5,color:"var(--text-2)",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:"#4C9A6B",color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},Cs=[{id:"aarti",title:"Aarti",html:`<h1>॥ गणपतीची आरती ॥</h1><br/>
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
      </div>`}];function m0(){const[e,t]=c.useState(()=>window.innerWidth<720);return c.useEffect(()=>{const n=()=>t(window.innerWidth<720);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}const h0=e=>new Promise((t,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:l,height:a}=i;l>a&&l>1400?(a=a*1400/l,l=1400):a>1400&&(l=l*1400/a,a=1400);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(i,0,0,l,a),t(d.toDataURL("image/jpeg",.85))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(e)});function Eu({base:e,count:t,images:n}){const o=n&&n.length?n:null,i=o?o.length:t,[s,l]=c.useState(0);if(!i)return null;const a=s%i,d=o?o[a]:`${e}${a+1}.jpg`;return r.jsxs("div",{style:{maxWidth:560,margin:"0 auto"},children:[r.jsx("div",{style:Me.carouselFrame,children:r.jsx("img",{src:d,alt:`Page ${a+1}`,style:Me.carouselImg})}),r.jsxs("div",{style:Me.carouselNav,children:[r.jsxs("button",{onClick:()=>l(g=>(g-1+i)%i),style:Me.carouselBtn,children:[r.jsx(Dn,{size:16})," Prev"]}),r.jsxs("span",{style:Me.carouselCount,children:[o?"":"Adhyay ",a+1," / ",i]}),r.jsxs("button",{onClick:()=>l(g=>(g+1)%i),style:Me.carouselBtn,children:["Next ",r.jsx(sn,{size:16})]})]})]})}function f0(){const e=m0(),[t,n]=c.useState(!1),[o,i]=c.useState([]),[s,l]=c.useState("dss"),[a,d]=c.useState(!1),[g,h]=c.useState({title:"",type:"text",content:"",images:[]}),[x,f]=c.useState([]),[A,S]=c.useState(null),[v,R]=c.useState(!1),m=c.useRef(!1),p=c.useCallback(async()=>{try{const[H,se,V]=await Promise.all([$.getDecks(),$.getSetting("spiritual_order"),$.getSetting("spiritual_default")]);if(i(H),Array.isArray(se==null?void 0:se.value)&&f(se.value),V!=null&&V.value&&S(V.value),!m.current){m.current=!0;const de=new Set([...Cs.map(I=>I.id),...H.map(I=>`deck-${I.id}`)]);V!=null&&V.value&&de.has(V.value)&&l(V.value)}}catch{}},[]);c.useEffect(()=>{p()},[p]);const b=[...Cs.map(H=>({id:H.id,title:H.title})),...o.map(H=>({id:`deck-${H.id}`,title:H.title}))],B=(()=>{if(!x.length)return b;const H=new Map(b.map(V=>[V.id,V])),se=[];return x.forEach(V=>{H.has(V)&&(se.push(H.get(V)),H.delete(V))}),H.forEach(V=>se.push(V)),se})(),C=(H,se)=>{const V=B.map(I=>I.id),de=H+se;de<0||de>=V.length||([V[H],V[de]]=[V[de],V[H]],f(V),$.setSetting("spiritual_order",V).catch(()=>{}))},T=H=>{S(H),$.setSetting("spiritual_default",H).catch(()=>{})},F=s.startsWith("deck-")?Number(s.slice(5)):null,_=F!=null?o.find(H=>H.id===F):null,D=_?null:Cs.find(H=>H.id===s)||(F==null?Cs[0]:null),W=a?"New deck":_?_.title:(D==null?void 0:D.title)||"",w=H=>{l(H),d(!1),e&&n(!1)},te=()=>{d(!0),h({title:"",type:"text",content:"",images:[]}),e&&n(!1)},z=async H=>{const se=Array.from(H.target.files||[]),V=[];for(const de of se)try{V.push(await h0(de))}catch{}h(de=>({...de,images:[...de.images,...V]})),H.target.value=""},re=H=>h(se=>({...se,images:se.images.filter((V,de)=>de!==H)})),be=g.title.trim()&&(g.type==="text"?g.content.trim():g.images.length>0),ge=async()=>{if(!be)return;const H=await $.createDeck({title:g.title.trim(),type:g.type,content:g.type==="text"?g.content:"",images:g.type==="images"?g.images:[]});d(!1),await p(),l(`deck-${H.id}`)},ye=async H=>{await $.deleteDeck(H),s===`deck-${H}`&&l("dss"),p()},J={...Me.sidebar,...e?Me.sidebarOverlay:{},...e&&!t?Me.sidebarHidden:{}};return r.jsxs("div",{style:Me.shell,children:[r.jsx("style",{children:x0}),e&&t&&r.jsx("div",{style:Me.backdrop,onClick:()=>n(!1)}),r.jsxs("aside",{style:J,children:[r.jsxs("div",{style:Me.sideHead,children:[r.jsx("div",{style:Me.brand,children:"Anvil · Spiritual"}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:2},children:[r.jsx("button",{onClick:()=>R(H=>!H),style:Me.iconBtn,title:"Rearrange & set default",children:v?r.jsx(Ne,{size:16}):r.jsx(xt,{size:15})}),e&&r.jsx("button",{onClick:()=>n(!1),style:Me.iconBtn,children:r.jsx(De,{size:17})})]})]}),v&&r.jsxs("div",{style:Me.editHint,children:["Arrows reorder · ",r.jsx(Pi,{size:11,style:{verticalAlign:"-1px"}})," sets what opens by default"]}),r.jsxs("div",{style:Me.sideScroll,children:[B.map((H,se)=>{const V=H.id===s&&!a,de=A===H.id;return r.jsxs("div",{style:Me.sideRow,children:[r.jsxs("button",{onClick:()=>w(H.id),style:{...Me.sideItem,flex:1,...V?Me.sideItemOn:{}},children:[H.title,de&&r.jsx("span",{style:Me.defStar,title:"Opens by default",children:" ★"})]}),v&&r.jsxs("div",{style:Me.editControls,children:[r.jsx("button",{onClick:()=>T(H.id),title:"Set as default",style:{...Me.miniBtn,...de?{color:"#8268B0"}:{}},children:r.jsx(Pi,{size:13})}),r.jsx("button",{onClick:()=>C(se,-1),disabled:se===0,style:{...Me.miniBtn,opacity:se===0?.3:1},children:r.jsx(vm,{size:13})}),r.jsx("button",{onClick:()=>C(se,1),disabled:se===B.length-1,style:{...Me.miniBtn,opacity:se===B.length-1?.3:1},children:r.jsx(Qi,{size:13})})]})]},H.id)}),r.jsxs("button",{onClick:te,style:{...Me.newDeckBtn,...a?Me.sideItemOn:{}},children:[r.jsx(Qe,{size:14})," New deck"]})]})]}),r.jsxs("main",{style:Me.main,children:[e&&r.jsxs("button",{onClick:()=>n(!0),style:Me.hamburger,children:[r.jsx(Nc,{size:17}),r.jsx("span",{style:Me.hamburgerLabel,children:W})]}),a?r.jsxs("div",{style:Me.contentWrap,children:[r.jsx("div",{style:Me.formTitle,children:"Create a deck"}),r.jsx("input",{placeholder:"Deck title (e.g. Vishnu Sahasranamam)",value:g.title,onChange:H=>h({...g,title:H.target.value}),style:Me.input}),r.jsxs("div",{style:Me.typeRow,children:[r.jsxs("button",{onClick:()=>h({...g,type:"text"}),style:{...Me.typeBtn,...g.type==="text"?Me.typeOn:{}},children:[r.jsx($c,{size:15})," Text"]}),r.jsxs("button",{onClick:()=>h({...g,type:"images"}),style:{...Me.typeBtn,...g.type==="images"?Me.typeOn:{}},children:[r.jsx(ny,{size:15})," Images"]})]}),g.type==="text"?r.jsx("textarea",{placeholder:"Paste or write the text (verses, chant, reflection)…",value:g.content,onChange:H=>h({...g,content:H.target.value}),style:Me.textarea}):r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:Me.imgGrid,children:[g.images.map((H,se)=>r.jsxs("div",{style:Me.imgThumbWrap,children:[r.jsx("img",{src:H,alt:"",style:Me.imgThumb}),r.jsx("button",{onClick:()=>re(se),style:Me.imgDel,children:r.jsx(De,{size:12})})]},se)),r.jsxs("label",{style:Me.imgAdd,children:[r.jsx(Ol,{size:20}),r.jsx("span",{style:{fontSize:11},children:"Add images"}),r.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:z,style:{display:"none"}})]})]}),r.jsx("div",{style:Me.hint,children:"Images show as a swipeable carousel, in the order added."})]}),r.jsxs("div",{style:Me.formActions,children:[r.jsxs("button",{onClick:()=>d(!1),style:Me.cancelBtn,children:[r.jsx(De,{size:14})," Cancel"]}),r.jsxs("button",{onClick:ge,disabled:!be,style:{...Me.saveBtn,...be?{}:Me.saveDisabled},children:[r.jsx(Ne,{size:15})," Create deck"]})]})]}):_?r.jsxs("div",{style:Me.contentWrap,children:[r.jsxs("div",{style:Me.deckHead,children:[r.jsx("h2",{style:Me.deckTitle,children:_.title}),r.jsx("button",{onClick:()=>ye(_.id),style:Me.deckDel,title:"Delete deck",children:r.jsx(Uc,{size:15})})]}),_.type==="images"?r.jsx(Eu,{images:_.images}):r.jsx("div",{style:Me.deckText,children:_.content})]}):r.jsxs("div",{style:Me.contentWrap,children:[(D==null?void 0:D.youtube)&&r.jsx("div",{style:Me.videoFrame,children:r.jsx("iframe",{src:`https://www.youtube.com/embed/${D.youtube}`,title:D.title,style:Me.video,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0},D.youtube)}),D!=null&&D.carousel?r.jsx(Eu,{base:D.imageBase,count:D.carousel}):r.jsx("div",{className:"spiritual-content",dangerouslySetInnerHTML:{__html:(D==null?void 0:D.html)||""}})]})]})]})}const x0=`
.spiritual-content { font-family: 'Inter', system-ui, sans-serif; color: var(--text); line-height: 1.9; font-size: 16px; text-align: center; }
.spiritual-content h1 { font-family: 'Fraunces', Georgia, serif; font-size: 24px; color: #8268B0; margin: 8px 0 18px; letter-spacing: -0.01em; }
.spiritual-content h2 { font-family: 'Fraunces', Georgia, serif; font-size: 18px; color: #7A5EA8; margin: 20px 0 8px; }
.spiritual-content h3 { font-size: 15px; color: var(--text-3); text-transform: uppercase; letter-spacing: 0.06em; margin: 18px 0 6px; }
.spiritual-content b { color: #8268B0; }
.spiritual-content div { text-align: center; }
`,Me={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:240,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.15)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.35)",zIndex:20},sideHead:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"18px 14px 12px"},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700},sideScroll:{flex:1,overflowY:"auto",padding:"0 8px 16px"},sideItem:{display:"block",width:"100%",border:"none",background:"none",padding:"10px 12px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13.5,fontWeight:500,color:"var(--text-2)",textAlign:"left",marginBottom:2},sideItemOn:{background:"rgba(130,104,176,0.12)",color:"#8268B0",fontWeight:700},sideRow:{display:"flex",alignItems:"center",gap:2},editControls:{display:"flex",alignItems:"center",gap:1,flexShrink:0},miniBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",borderRadius:5},defStar:{color:"#C9A227",fontWeight:700},editHint:{fontSize:10.5,color:"var(--text-3)",padding:"0 14px 8px",lineHeight:1.4},newDeckBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",padding:"9px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:600,color:"var(--text-2)",marginTop:6},main:{flex:1,padding:"26px 22px",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:220},contentWrap:{background:"var(--surface)",borderRadius:14,padding:"26px 28px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",maxWidth:760,margin:"0 auto"},videoFrame:{position:"relative",width:"100%",maxWidth:600,margin:"0 auto 22px",aspectRatio:"16 / 9",borderRadius:12,overflow:"hidden",background:"#000"},video:{position:"absolute",inset:0,width:"100%",height:"100%",border:"none"},carouselFrame:{background:"var(--surface-2)",borderRadius:12,padding:8,border:"1px solid var(--border)"},carouselImg:{width:"100%",borderRadius:8,display:"block"},carouselNav:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:14},carouselBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},carouselCount:{fontSize:13,fontWeight:700,color:"#8268B0",fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"none",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,color:"var(--text-2)"},deckHead:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,marginBottom:16,borderBottom:"1px solid var(--border)",paddingBottom:12},deckTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",margin:0,color:"#8268B0"},deckDel:{border:"1px solid var(--border)",background:"var(--surface)",color:"#C2536B",cursor:"pointer",display:"grid",placeItems:"center",padding:7,borderRadius:8,flexShrink:0},deckText:{fontSize:16,lineHeight:1.9,whiteSpace:"pre-wrap",color:"var(--text)",textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},formTitle:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:14},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none"},typeRow:{display:"flex",gap:8,marginTop:12},typeBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},typeOn:{background:"#8268B0",color:"#fff",borderColor:"#8268B0"},textarea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"12px",fontSize:15,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:200,resize:"vertical",lineHeight:1.7,marginTop:12},imgGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(90px, 1fr))",gap:8,marginTop:12},imgThumbWrap:{position:"relative",aspectRatio:"1",borderRadius:8,overflow:"hidden",border:"1px solid var(--border)"},imgThumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},imgDel:{position:"absolute",top:3,right:3,border:"none",background:"rgba(0,0,0,0.6)",color:"#fff",borderRadius:"50%",width:18,height:18,cursor:"pointer",display:"grid",placeItems:"center",padding:0},imgAdd:{aspectRatio:"1",border:"1px dashed var(--border)",borderRadius:8,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:4,cursor:"pointer",color:"var(--text-3)"},hint:{fontSize:11.5,color:"var(--text-3)",marginTop:8},formActions:{display:"flex",gap:8,marginTop:16},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:"#8268B0",color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"}},Pr={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},Bu=Object.keys(Pr),y0=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],v0=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],k0=()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},j0=(e,t)=>`${v0[t-1]} ${e}`,w0=(e,t)=>{const n=new Date(e,t,0).getDate();return Array.from({length:n},(o,i)=>`${e}-${String(t).padStart(2,"0")}-${String(i+1).padStart(2,"0")}`)},S0=(e,t)=>{const n=new Date(e,t-1,1).getDay();return n===0?6:n-1};function C0(){const e=k0(),[t,n]=c.useState(new Date().getFullYear()),[o,i]=c.useState(new Date().getMonth()+1),[s,l]=c.useState([]),[a,d]=c.useState([]),[g,h]=c.useState({}),[x,f]=c.useState(null),[A,S]=c.useState(!1),[v,R]=c.useState(!1),[m,p]=c.useState({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:e}),[b,B]=c.useState(null),C=c.useCallback(async()=>{const[I,ie,Ie]=await Promise.all([$.getTopics(),$.getDueToday(),$.getCalendar(t,o)]);l(I),d(ie),h(Ie)},[t,o]);c.useEffect(()=>{C()},[C]);const T=async I=>{await $.toggleReviewDone(I),C()},F=async()=>{const I=m.intervals.split(",").map(ie=>parseInt(ie.trim(),10)).filter(ie=>!isNaN(ie));!m.topic.trim()||I.length===0||(await $.createTopic({pillar:m.pillar,topic:m.topic.trim(),intervals:I,learned_date:m.learned_date||e}),p({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:e}),R(!1),C())},{deleteItem:_,toasts:D,handleUndo:W,handleDismiss:w}=er($.deleteTopic,$.restoreTopic,C),te=(I,ie)=>_(I,ie),z=I=>B({id:I.id,topic:I.topic,pillar:I.pillar,intervals:(I.intervals||[]).join(", "),learned_date:I.learned_date}),re=async()=>{if(!b)return;const I=b.intervals.split(",").map(ie=>parseInt(ie.trim(),10)).filter(ie=>!isNaN(ie)&&ie>=0);!b.topic.trim()||I.length===0||(await $.updateTopic(b.id,{topic:b.topic.trim(),pillar:b.pillar,learned_date:b.learned_date,intervals:I}),B(null),C())},be=()=>{o===1?(n(I=>I-1),i(12)):i(I=>I-1),f(null)},ge=()=>{o===12?(n(I=>I+1),i(1)):i(I=>I+1),f(null)},ye=s.filter(I=>!I.cemented),J=s.filter(I=>I.cemented),H=w0(t,o),se=S0(t,o),V=c.useMemo(()=>{const I={};return s.forEach(ie=>ie.reviews.forEach(Ie=>{Ie.done||(I[Ie.due_date]=I[Ie.due_date]||[]).push({topic:ie.topic,pillar:ie.pillar,stage:Ie.stage})})),I},[s]),de=x?s.flatMap(I=>I.reviews.filter(ie=>ie.due_date===x).map(ie=>({...ie,topic:I.topic,pillar:I.pillar,total:I.reviews.length}))):[];return r.jsxs("div",{style:Se.page,children:[r.jsxs("div",{style:Se.head,children:[r.jsxs("div",{children:[r.jsx("div",{style:Se.eyebrow,children:"Anvil · Revision"}),r.jsx("h1",{style:Se.h1,children:"Spaced Repetition"})]}),r.jsxs("button",{onClick:()=>R(!0),style:Se.addBtn,children:[r.jsx(Qe,{size:15})," Add topic"]})]}),v&&r.jsxs("div",{style:Se.addBox,children:[r.jsx("input",{autoFocus:!0,placeholder:"What did you learn?",value:m.topic,onChange:I=>p(ie=>({...ie,topic:I.target.value})),onKeyDown:I=>I.key==="Enter"&&F(),style:Se.input}),r.jsxs("div",{style:Se.addRow,children:[r.jsx("select",{value:m.pillar,onChange:I=>p(ie=>({...ie,pillar:I.target.value})),style:Se.select,children:Bu.map(I=>r.jsx("option",{children:I},I))}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[r.jsx("label",{style:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},children:"Learned on"}),r.jsx("input",{type:"date",value:m.learned_date,onChange:I=>p(ie=>({...ie,learned_date:I.target.value})),style:{...Se.select,fontSize:13}})]}),r.jsx("div",{style:{flex:1,minWidth:0},children:r.jsx("input",{value:m.intervals,onChange:I=>p(ie=>({...ie,intervals:I.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:Se.input})})]}),r.jsxs("div",{style:Se.addRow,children:[r.jsxs("button",{onClick:F,style:Se.saveBtn,children:[r.jsx(Ne,{size:14})," Save"]}),r.jsxs("button",{onClick:()=>R(!1),style:Se.cancelBtn,children:[r.jsx(De,{size:14})," Cancel"]})]})]}),a.length>0&&r.jsxs("div",{style:Se.section,children:[r.jsxs("div",{style:Se.sectionTitle,children:[r.jsx(Dm,{size:15,color:"#C2536B"}),"Due Today",r.jsx("span",{style:Se.badge,children:a.length})]}),a.map(I=>{var Ie,Q;const ie=((Ie=Pr[I.pillar])==null?void 0:Ie.dot)||"#9A968C";return r.jsxs("div",{style:{...Se.reviewCard,borderLeft:`3px solid ${ie}`,...I.is_missed?{opacity:.85}:{}},children:[r.jsx("button",{onClick:()=>T(I.review_id),style:{...Se.checkbox,...I.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:I.done&&r.jsx(Ne,{size:12,color:"#fff",strokeWidth:3})}),r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("div",{style:Se.reviewTopic,children:I.topic}),r.jsxs("div",{style:Se.reviewMeta,children:[r.jsxs("span",{style:{...Se.stageTag,background:((Q=Pr[I.pillar])==null?void 0:Q.soft)||"rgba(0,0,0,0.05)",color:ie},children:["Review ",I.stage,"/",I.total_stages]}),I.is_missed&&r.jsxs("span",{style:Se.missedTag,children:["missed · ",I.due_date]})]})]})]},I.review_id)})]}),r.jsxs("div",{style:Se.section,children:[r.jsxs("div",{style:Se.sectionTitle,children:["Active Topics ",r.jsx("span",{style:Se.badge,children:ye.length})]}),ye.length===0&&r.jsx("div",{style:Se.empty,children:"No active topics. Add something you learned today."}),ye.map(I=>{var y,E;const ie=((y=Pr[I.pillar])==null?void 0:y.dot)||"#9A968C",Ie=((E=Pr[I.pillar])==null?void 0:E.soft)||"rgba(0,0,0,0.05)",Q=I.reviews.filter(P=>P.done).length;return(b==null?void 0:b.id)===I.id?r.jsxs("div",{style:Se.addBox,children:[r.jsx("input",{autoFocus:!0,value:b.topic,onChange:P=>B(G=>({...G,topic:P.target.value})),onKeyDown:P=>P.key==="Enter"&&re(),placeholder:"Topic",style:Se.input}),r.jsxs("div",{style:Se.addRow,children:[r.jsx("select",{value:b.pillar,onChange:P=>B(G=>({...G,pillar:P.target.value})),style:Se.select,children:Bu.map(P=>r.jsx("option",{children:P},P))}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[r.jsx("label",{style:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},children:"Learned on"}),r.jsx("input",{type:"date",value:b.learned_date,onChange:P=>B(G=>({...G,learned_date:P.target.value})),style:{...Se.select,fontSize:13}})]}),r.jsx("div",{style:{flex:1,minWidth:0},children:r.jsx("input",{value:b.intervals,onChange:P=>B(G=>({...G,intervals:P.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:Se.input})})]}),r.jsx("div",{style:Se.editHint,children:"Changing the date or intervals reschedules the reviews (completed steps are kept where they still apply)."}),r.jsxs("div",{style:Se.addRow,children:[r.jsxs("button",{onClick:re,style:Se.saveBtn,children:[r.jsx(Ne,{size:14})," Save plan"]}),r.jsxs("button",{onClick:()=>B(null),style:Se.cancelBtn,children:[r.jsx(De,{size:14})," Cancel"]})]})]},I.id):r.jsxs("div",{style:Se.topicCard,children:[r.jsxs("div",{style:Se.topicHead,children:[r.jsx("span",{style:{...Se.dot,background:ie}}),r.jsx("span",{style:Se.topicName,children:I.topic}),r.jsx("span",{style:Se.topicPillar,children:I.pillar}),r.jsxs("span",{style:Se.topicProgress,children:[Q,"/",I.reviews.length," done"]}),r.jsx("button",{onClick:()=>z(I),style:Se.ghostBtn,title:"Edit plan",children:r.jsx(xt,{size:12})}),r.jsx("button",{onClick:()=>te(I.id,I.topic),style:Se.ghostBtn,title:"Delete",children:r.jsx(De,{size:13})})]}),r.jsxs("div",{style:Se.reviewDots,children:[I.reviews.map(P=>{P.due_date<e;const G=P.due_date===e;return r.jsx("button",{onClick:()=>T(P.id),title:`Review ${P.stage} · ${P.due_date}${P.done?" · Done":""}`,style:{...Se.reviewDot,background:P.done?ie:G?Ie:"var(--hover)",border:`2px solid ${P.done||G?ie:"var(--border)"}`,color:P.done?"#fff":ie},children:P.stage},P.id)}),r.jsxs("span",{style:Se.learnedDate,children:["Learned ",I.learned_date]})]})]},I.id)})]}),J.length>0&&r.jsxs("div",{style:Se.section,children:[r.jsxs("button",{onClick:()=>S(I=>!I),style:Se.cementedToggle,children:[A?r.jsx(Qi,{size:15}):r.jsx(sn,{size:15}),r.jsx(nn,{size:14,color:"#C9A227"}),"Cemented",r.jsx("span",{style:{...Se.badge,background:"rgba(201,162,39,0.12)",color:"#8A6E1A"},children:J.length})]}),A&&J.map(I=>{var Ie;const ie=((Ie=Pr[I.pillar])==null?void 0:Ie.dot)||"#9A968C";return r.jsx("div",{style:{...Se.topicCard,opacity:.75},children:r.jsxs("div",{style:Se.topicHead,children:[r.jsx("span",{style:{...Se.dot,background:ie}}),r.jsx("span",{style:Se.topicName,children:I.topic}),r.jsx("span",{style:Se.topicPillar,children:I.pillar}),r.jsx(nn,{size:13,color:"#C9A227",style:{marginLeft:"auto"}})]})},I.id)})]}),r.jsxs("div",{style:Se.calCard,children:[r.jsxs("div",{style:Se.calHead,children:[r.jsx("button",{onClick:be,style:Se.calNav,children:"‹"}),r.jsxs("div",{style:Se.calTitle,children:[j0(t,o)," · Review Calendar"]}),r.jsx("button",{onClick:ge,style:Se.calNav,children:"›"})]}),r.jsx("div",{style:Se.calDow,children:y0.map(I=>r.jsx("div",{style:Se.calDowCell,children:I},I))}),r.jsxs("div",{style:Se.calGrid,children:[Array.from({length:se}).map((I,ie)=>r.jsx("div",{},`p${ie}`)),H.map((I,ie)=>{const Ie=V[I]||[],Q=I===e,y=I===x,E=I<e,P=y?"#fff":Q?"var(--text)":E?"var(--text-2)":"var(--text-3)";return r.jsxs("button",{onClick:()=>f(y?null:I),style:{...Se.calDay,background:y?"var(--accent-strong)":Q?"var(--hover)":"var(--surface)",borderColor:Q||y?"var(--accent-strong)":"var(--border)"},children:[r.jsx("span",{style:{...Se.calDayNum,color:P,fontWeight:Q||y?700:600},children:ie+1}),Ie.slice(0,2).map((G,oe)=>{var pe;return r.jsxs("span",{title:G.topic,style:{...Se.calItem,color:y?"#fff":((pe=Pr[G.pillar])==null?void 0:pe.dot)||"var(--text-2)"},children:[oe+1,". ",G.topic]},oe)}),Ie.length>2&&r.jsxs("span",{style:{...Se.calMore,color:y?"#fff":"var(--text-3)"},children:["+",Ie.length-2," more"]})]},I)})]}),x&&r.jsxs("div",{style:Se.dayDetail,children:[r.jsxs("div",{style:Se.dayDetailTitle,children:["Reviews for ",x]}),de.length===0?r.jsx("div",{style:Se.empty,children:"No reviews scheduled for this day."}):de.map((I,ie)=>{var Q,y;const Ie=((Q=Pr[I.pillar])==null?void 0:Q.dot)||"#9A968C";return r.jsxs("div",{style:{...Se.reviewCard,borderLeft:`3px solid ${Ie}`},children:[r.jsx("button",{onClick:()=>T(I.id),style:{...Se.checkbox,...I.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:I.done&&r.jsx(Ne,{size:12,color:"#fff",strokeWidth:3})}),r.jsxs("div",{children:[r.jsxs("div",{style:Se.reviewTopic,children:[ie+1,". ",I.topic]}),r.jsxs("span",{style:{...Se.stageTag,background:((y=Pr[I.pillar])==null?void 0:y.soft)||"rgba(0,0,0,0.05)",color:Ie},children:["Review ",I.stage,"/",I.total]})]})]},I.id)})]})]}),r.jsx(tr,{toasts:D,onUndo:W,onDismiss:w})]})}const Se={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},addBox:{background:"var(--surface)",borderRadius:12,padding:16,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column",gap:10},addRow:{display:"flex",gap:8,alignItems:"center"},editHint:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.4},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",minWidth:0},select:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 10px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},section:{marginBottom:20},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10},badge:{fontSize:11,fontWeight:700,background:"var(--hover)",color:"var(--text-2)",borderRadius:10,padding:"1px 7px"},reviewCard:{display:"flex",alignItems:"center",gap:12,background:"var(--surface)",borderRadius:10,padding:"12px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},checkbox:{width:22,height:22,borderRadius:6,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,padding:0},reviewTopic:{fontSize:13.5,fontWeight:600,marginBottom:4},reviewMeta:{display:"flex",alignItems:"center",gap:8},stageTag:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10},missedTag:{fontSize:11,color:"#C2536B",fontWeight:600},topicCard:{background:"var(--surface)",borderRadius:12,padding:"13px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},topicHead:{display:"flex",alignItems:"center",gap:8,marginBottom:10},dot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},topicName:{fontSize:14,fontWeight:600,flex:1},topicPillar:{fontSize:11,color:"var(--text-3)",fontWeight:500},topicProgress:{fontSize:11,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",padding:"2px 7px",borderRadius:10},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},reviewDots:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"},reviewDot:{width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",fontSize:11,fontWeight:700,padding:0},learnedDate:{fontSize:11,color:"var(--text-3)",marginLeft:"auto"},cementedToggle:{display:"flex",alignItems:"center",gap:8,border:"none",background:"none",cursor:"pointer",fontSize:13,fontWeight:700,color:"var(--text-2)",padding:"4px 0",fontFamily:"inherit",marginBottom:8},empty:{fontSize:13,color:"var(--text-3)",padding:"16px 0",textAlign:"center"},calCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calNav:{border:"none",background:"none",fontSize:20,cursor:"pointer",color:"var(--text-2)",padding:"0 6px",lineHeight:1},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4},calDay:{minHeight:62,border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,cursor:"pointer",fontFamily:"inherit",display:"flex",flexDirection:"column",alignItems:"stretch",justifyContent:"flex-start",gap:1,position:"relative",padding:"3px 4px",overflow:"hidden",textAlign:"left"},calDayNum:{fontSize:11,lineHeight:1.1,marginBottom:1},calItem:{fontSize:8.5,fontWeight:700,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",lineHeight:1.3,textAlign:"left"},calMore:{fontSize:8,fontWeight:700,opacity:.85,lineHeight:1.2},dayDetail:{marginTop:16,paddingTop:16,borderTop:"1px solid var(--border)"},dayDetailTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10}},zs=[{id:1,title:"Regular Habits",cards:[{id:1,text:"1. I always do everything I need to do, when I need to do it. "},{id:2,text:"2. I never argue or let my emotions work against me. "},{id:3,text:"3. I have a good memory. I easily and automatically remember any name or anything that is important to me. "},{id:4,text:"4. I eat only what I should. "},{id:5,text:"5. I am a good listener. I hear everything that is said. I am attentive, interested, and aware of everything that is going on around me. "},{id:6,text:"6. I have the courage to state my opinions. I take responsibility for myself and everything I say and do."},{id:7,text:"7. I never spend more than I earn. I am financially responsible, both for my present and for my future."},{id:8,text:"8. I set goals and I follow them. I set my sights, take the appropriate action, and achieve my goals."},{id:9,text:"9. I spend time with my family and my loved ones. I enjoy sharing their lives with mine and my life with theirs."}]},{id:2,title:"Motivational",cards:[{id:1,text:"1. I can do anything I believe I can do. I’ve got it and every day I get more of it. I have talent, skills, and ability"},{id:2,text:"2. I set goals and I reach them. I know what I want out of life. I go after it and I get it. "},{id:3,text:"3. People like me, and I feel good about myself. I have a sense of pride in whoa am and I believe in myself. Nothing seems to stop me. I have a lot of determination. "},{id:4,text:"4. I turn problems into advantages. I find possibilities in things that other people never give a chance."},{id:5,text:"5. I have a lot of energy––I am very alive. I enjoy life and I can tell it and so can others"},{id:6,text:"6. I keep myself up, looking ahead, and liking it. I know that I can accomplish anything I choose, and I refuse to let anything negative hold me back or stand in my way. I am not afraid of anything or anyone. I have strength, power, conviction, and confidence. "},{id:7,text:"7. I like challenges and I meet them head on, face to face––today especially. I am on top of the world and I’m going for it. "},{id:8,text:"8. I have a clear picture in my mind of what I want. I can see it in front of me. "},{id:9,text:"9. I know what I want and I know how to get it. I know that it’s all up to me and I know I can do it. Roadblocks don’t bother me. They just mean that I am alive and running, and I’m not going to stand still for anything. "},{id:10,text:"10. I trust myself I’ve got what it takes––plenty of it––and I know how to use it. "},{id:11,text:"11. Today, more than ever. Today I am unstoppable. I’ve got myself together and I’m getting more together every day. And today––look out world, here I come. "},{id:12,text:"12. Limitations? I don’t even recognize them as limitations. There is no challenge I can’t conquer; there is no wall I can’t climb over. "},{id:13,text:"13. There is no problem I can’t defeat or turn around and make it work for me. I stand tall. I am honest and sincere. I like to deal with people and they like me. "},{id:14,text:"14. I think well; I think clearly. I am organized; I am in control of myself, and everything about me. I call my shots and no one has to call them for me. I never blame anyone else for the circumstances of my life. "},{id:15,text:"15. I accept my failings and move past them as easily as I accept the rewards for my victories. I never demand perfection of myself, but I expect the very best of what I have to give––and that’s what I get. I never give myself excuses. "},{id:16,text:"16. I get things done on time and in the right way. Today I have the inner strength to do more than ever. I am an exceptional human being. "},{id:17,text:"17. My goals and my incredible belief in myself turn my goals into reality. I have the power to live my dreams."},{id:18,text:"18.  I believe in them like I believe in myself. And that belief is so strong that there is nothing that diminishes my undefeatable spirit. "}]},{id:3,title:"Organized planning",cards:[{id:1,text:"1. I am organized and in control of my life. I am in control of myself, my thoughts, my time, my actions, and my future. "},{id:2,text:"2. I know what to do and when to do it, and I do everything I need to do, when I need to do it. "},{id:3,text:"3. I program my mind to make the maximum use of my time. I am in control of my time and how to use it. I like being organized, efficient, and on top of things."},{id:4,text:"4. Controlling my time keeps me that way. "},{id:5,text:"5. I never waste time––I always “plan” time. And because I plan my time, I always have time to do the things I choose to do. "},{id:6,text:"6. Each day I become more organized and in control of all areas of my life––at home, at work, in my mind and in my thoughts, in everything that I do. "},{id:7,text:"7. I am very well organized. Each night I make a list of things I need to do the next day. I set my priorities and I follow them. "},{id:8,text:"8. I am always on time. I am always right where I need to be, exactly when I need to be there. "},{id:9,text:"9. Being on time is easy for me and the more I control my time and the more organized I become, the easier it is. "},{id:10,text:"10. I am in control of my feelings, my emotions, my attitudes, and my needs. I control them; they do not control me. "},{id:11,text:"11. I have the winning vote in the outcome of my own actions. And I choose to live my life by choice, not chance. Therefore, I take the time to take control."},{id:12,text:"12. I have an organized and orderly mind. Because I think in an organized way, I conduct my life in an organized manner. "},{id:13,text:"13. I think in the most positive and productive way at all times and in all things. The way I think is the way I live––and I think “right.” "},{id:14,text:"14. I am the director of my destiny. I know where I am going and I know why I am going there. My earthly life is in my hands and in my control. "},{id:15,text:"15. I control my goals and the achievement of my goals. I organize my goals by writing each of them down, along with the steps I need to reach them. One of the reasons for my success is that my goals are clearly defined and organized."},{id:16,text:"16. I am in complete control of what I think and how I think. Therefore, I choose to think only those thoughts which help me and which are of genuine benefit to me."}]},{id:4,title:"Solving Problems",cards:[{id:1,text:"1. I’m good at solving problems. I like challenges and I meet them head on. "},{id:2,text:"2. Problems are my teachers. They help me to learn and grow. Without them, I would be going nowhere. With them, I am moving forward in the direction of my own goals. "},{id:3,text:"3. There is no problem which I cannot conquer. I am strong in mind, body, and spirit. My will, my strength, and my determination are always greater than any problem I face."},{id:4,text:"4. When I meet a new problem, I do not see the problem as my enemy. I know that finding the solution to the problem will move me forward in my own personal growth."},{id:5,text:"5. Because I know that problems are a key ingredient in my spiritual and mental education and preparation, I recognize that all problems are important to me. "},{id:6,text:"6. I do not fear problems, I solve them. I do not ignore problems, I confront them. I do not avoid problems, I conquer them. "},{id:7,text:"7. I know that every problem holds within itself the keys to its own solution. Therefore, the better I understand the problem, the clearer I am able to see its solution. "},{id:8,text:"8. Having problems is not a problem for me. I am confident, self-assured, positive, and determined. I always know that I am going to overcome any problem I encounter––and I always do. "},{id:9,text:"9. I am good at breaking large obstacles down into smaller pieces that are easier to handle. And I never make any problem appear to be larger than it actually is. "},{id:10,text:"10. I never worry. I turn “worry time” into positive, constructive, “solution time.” I keep my mind alert and open to all solutions—and solutions come quickly and easily to me. "},{id:11,text:"11. I have learned to recognize that many problems carry with them benefits and potential opportunities which would not have presented themselves had the problem not occurred in the first place. "},{id:12,text:"12. I do not seek to live a life which is free from all problems. Instead, I choose to live a life of finding solutions and enjoying the benefits which those solutions create."},{id:13,text:"13. Challenge, conquer, solution, and win are words which I live by daily. Challenges are opportunities. Conquering them is the inevitable outcome. "},{id:14,text:"14. “Solutions” are the stepping stones to my success, and “Winning” is my way of life."}]},{id:5,title:"Self Esteem",cards:[{id:1,text:"1. I really am very special. I like who I am and I feel good about myself. "},{id:2,text:"2. Although I always work to improve myself and I get better every day, I like who I am today. And tomorrow, when I’m even better, I’ll like myself then, too. "},{id:3,text:"3. It’s true that there really is no one else like me in the entire world. There never was another me before, and there will never be another me again. "},{id:4,text:"4. I am unique––from the top of my head to the bottom of my feet. In some ways I may look and act and sound like some others––but I am not them. I am me."},{id:5,text:"5. I wanted to be somebody––and now I know I am I would rather be me than anyone else in the world. "},{id:6,text:"6. I like how I feel and I like how I think and I like how I do things. I approve of me and I approve of who I am."},{id:7,text:"7. I have many beautiful qualities about me. I have talents and skills and abilities. I even have talents that I don’t even know about yet. And I am discovering new talents inside myself all the time. "},{id:8,text:"8. I am positive. I am confident. I radiate good things. If you look closely, you can even see a glow around me."},{id:9,text:"9. I am full of life. I like life and I’m glad to be alive. I am a very special person, living at a very special time. "},{id:10,text:"10. I am intelligent. My mind is quick and alert and clever and fun. I think good thoughts, and my mind makes things work right for me. "},{id:11,text:"11. I have a lot of energy and enthusiasm and vitality. I am exciting and I really enjoy being me. "},{id:12,text:"12. I like to be around other people and other people like to be around me. People like to hear what I have to say and know what I have to think. "},{id:13,text:"13. I smile a lot. I am happy on the inside and I am happy on the outside. "},{id:14,text:"14. I am interested in many things. I appreciate all the blessings I have, and the things that I learn, and all the things I will learn today and tomorrow and forever––just as long as I am. "},{id:15,text:"15. I am warm, sincere, honest, and genuine. I am all of these things and more. And all of these things are me. I like who I am, and I’m glad to be me."}]},{id:6,title:"Self-Responsibility",cards:[{id:1,text:"1. I take full responsibility for everything about me––even the thoughts that I think. I am in control of the vast resources of my own mind."},{id:2,text:"2. I alone am responsible for what I do and what I tell myself about me. No one can share this responsibility with me. "},{id:3,text:"3. I also allow others to accept their responsibilities far themselves and I do not try to accept their responsibilities for them. "},{id:4,text:"4. I enjoy being responsible. It puts me in charge of being me––and that’s a challenge I enjoy. "},{id:5,text:"5. I allow no one else, at any time, to assume control or responsibility over my life or over anything that I do. My responsibility to others is an extension of my own responsibility to myself. "},{id:6,text:"6. I choose to leave nothing about me up to chance. When it comes to me––and anything in my life––I choose to CHOOSE. "},{id:7,text:"7. My choices are mine alone to make for myself. I do not, at any time, allow anyone else to make my choices for me. And I accept full responsibility for every choice and decision I make. "},{id:8,text:"8. I always meet all of the obligations which I accept. And I accept no obligations which I will not meet. "},{id:9,text:"9. I am trustworthy. I can be counted on. I have accepted winning responsibility for myself––and I always live up to the responsibilities I accept. "},{id:10,text:"10. There is no they on whom I lay the blame, or with whom I share my own personal responsibilities. I have learned the great secret of mastering my own destiny. I have learned that “they” is “me.” "},{id:11,text:"11. I have no need to make excuses and no one needs to carry my responsibility for me. I gladly carry my own weight––and I carry it well. "},{id:12,text:"12. Each day I acknowledge and accept the responsibility––not only for my own actions––but also for my emotions, my thoughts, and my attitude. "},{id:13,text:"13. I accept the responsibility for living my life in a way which creates my strengths, my happiness, my positive, healthy beliefs, and for my past, my present, and my future."}]},{id:7,title:"Freedom from worry",cards:[{id:1,text:"1. I never worry. Instead of worrying, I find solutions and I act on them. "},{id:2,text:"2. My mind is constantly in tune with the positive. It is bright, cheerful, enthusiastic, and full of good, positive thoughts and ideas. "},{id:3,text:"3. I am able to relax easily and comfortably in my body and in my mind. I am calm, confident, and self-assured. "},{id:4,text:"4. My mind is orderly and well-organized. I consciously choose what I think and I always choose those thoughts which are the most positive and beneficial for me. "},{id:5,text:"5. All of my thoughts create healthiness within me. My mind dwells only on those thoughts which create more harmony, balance, and well-being within me and in the world around me. "},{id:6,text:"6. I automatically, and always, think in a decisive and determined way. "},{id:7,text:"7. I am full of resolution and the absolute assurance of the best possible outcome in everything that I do. "},{id:8,text:"8. I choose to look at the world around me in the bright, healthy light of optimism and self-assurance. "},{id:9,text:"9. I do only those things which are best for me. I create the best within myself, I attract the best in others, and I find the best in the world around me. "},{id:10,text:"10. I willingly, and without fail, take care of the duties and obligations which I have accepted for myself."},{id:11,text:"11. I commit only to those responsibilities which I know I can fulfill. "},{id:12,text:"12. I focus the attention of my mind only on those things that I can do something about. If I cannot affect it or direct it––I accept it. "},{id:13,text:"13. I keep my mind too busy thinking good, healthy, positive, constructive, and productive thoughts to ever have any time for worry. "},{id:14,text:"14. I control the thoughts I choose. No thought, at any time, can dwell in my mind without my approval or permission. I never worry."}]},{id:8,title:"Eating Habits",cards:[{id:1,text:"1. I am in control of myself in every way––at all times and in all situations. "},{id:2,text:"2. Each time I sit down to eat I reaffirm my determination to achieve my goal. By eating right, and never giving in, I am reaching the weight I want. "},{id:3,text:"3. Whether eating in or eating out, I really enjoy eating less. "},{id:4,text:"4. I never feel the need to finish the food in front of me. I eat only what I should––and never one bite more. "},{id:5,text:"5. One way to weight-loss that’s easy and works, is less food on my plate, and less on my fork. "},{id:6,text:'6. By ordering less when I eat out, and by serving myself smaller portions at home, I keep myself aware of the importance of staying with my goal––each and every day. “Less on my plate means less on my waist."'},{id:7,text:"7. When I sit down to eat, at no time do I allow anyone else to influence, tempt, or discourage me in any negative way."},{id:8,text:"8. What I eat, and the goals I reach, are up to me. And I give no one the right to hinder or control my success."},{id:9,text:"9. Although others may benefit from my success, I. am achieving my weight-loss goals for my own personal reasons––for myself, my life, my future, and my own personal well-being."},{id:10,text:"10. I am never, at any time, tempted to take one bite more than I should. I am strong, I am capable of reaching my goal, and I am doing it."},{id:11,text:"11. Being in situations which put a lot of food in front of me is not a problem to me now. I simply say “No” to the food and “Yes” to my success."},{id:12,text:"12. I enjoy sitting down to eat. Each time I do I conquer my past, and I create a trimmer, happier, more self-confident future in front of me. "},{id:13,text:"13. When I sit down to eat, I do not need someone else to remind me of my goal, or to keep me from eating something I should not. I take full responsibility for myself, and no one else has to do it for me. "},{id:14,text:"14. Controlling my weight, and my appetite, is easy for me now. I enjoy smaller portions, smaller bites, and a slower, healthier, more relaxed way of eating. "},{id:15,text:"15. I have set my goal and I am staying with it. I have turned mealtime into “achievement time.”"}]}],Du=["#3A7CA5","#4C9A6B","#C2773B","#8268B0","#C2536B","#C9A227","#3A7CA5","#4C9A6B"],Sa=e=>Du[e%Du.length],z0=e=>e+"1A",Nm="anvil_affirmation_favs",I0=()=>{try{return new Set(JSON.parse(localStorage.getItem(Nm)||"[]"))}catch{return new Set}};function T0(){const[e,t]=c.useState(0),[n,o]=c.useState(0),[i,s]=c.useState(I0);c.useEffect(()=>{localStorage.setItem(Nm,JSON.stringify([...i]))},[i]);const l=(R,m)=>`${R}#${m.id}`,a=e==="FAV"?zs.flatMap((R,m)=>R.cards.filter(p=>i.has(l(R.title,p))).map(p=>({...p,color:Sa(m),title:R.title}))):zs[e].cards.map(R=>({...R,color:Sa(e),title:zs[e].title})),d=a.length,g=Math.min(n,Math.max(0,d-1)),h=a[g],x=R=>{t(R),o(0)},f=c.useCallback(()=>o(R=>Math.max(0,R-1)),[]),A=c.useCallback(()=>o(R=>Math.min(d-1,R+1)),[d]);c.useEffect(()=>{const R=m=>{m.key==="ArrowLeft"&&f(),m.key==="ArrowRight"&&A()};return window.addEventListener("keydown",R),()=>window.removeEventListener("keydown",R)},[f,A]);const S=R=>s(m=>{const p=new Set(m);return p.has(R)?p.delete(R):p.add(R),p}),v=h?h.color:"#8268B0";return r.jsxs("div",{style:it.page,children:[r.jsxs("div",{style:it.head,children:[r.jsx("div",{style:it.eyebrow,children:"Anvil · Affirmations"}),r.jsx("h1",{style:it.h1,children:"Affirmations"}),r.jsx("div",{style:it.subhead,children:"One at a time — read it, mean it."})]}),r.jsxs("div",{style:it.filterBar,children:[zs.map((R,m)=>{const p=e===m,b=Sa(m);return r.jsxs("button",{onClick:()=>x(m),style:{...it.chip,...p?{background:b,color:"#fff",borderColor:b}:{}},children:[r.jsx("span",{style:{...it.catDot,background:p?"#fff":b}})," ",R.title," ",r.jsx("span",{style:it.chipCount,children:R.cards.length})]},R.title)}),r.jsxs("button",{onClick:()=>x("FAV"),style:{...it.chip,...e==="FAV"?{background:"#C9A227",color:"#fff",borderColor:"#C9A227"}:{}},children:[r.jsx(vi,{size:12,fill:e==="FAV"?"#fff":"none"})," Favorites ",r.jsx("span",{style:it.chipCount,children:i.size})]})]}),d===0?r.jsxs("div",{style:it.empty,children:[r.jsx(vi,{size:22,color:"#C3BFB5"}),r.jsx("div",{children:"No favorites yet — tap the star on a card to save it here."})]}):r.jsxs("div",{style:it.viewer,children:[r.jsxs("div",{style:{...it.card,borderTop:`4px solid ${v}`},children:[r.jsx("div",{style:{...it.cardCat,color:v,background:z0(v)},children:h.title}),r.jsx("button",{onClick:()=>S(l(h.title,h)),style:{...it.favBtn,color:i.has(l(h.title,h))?"#C9A227":"#C3BFB5"},title:"Favorite",children:r.jsx(vi,{size:20,fill:i.has(l(h.title,h))?"#C9A227":"none"})}),r.jsx(Em,{size:30,color:v,style:{opacity:.25}}),r.jsx("p",{style:it.cardText,children:h.text.trim()})]}),r.jsxs("div",{style:it.navRow,children:[r.jsxs("button",{onClick:f,disabled:g===0,style:{...it.navBtn,...g===0?it.navBtnDisabled:{}},children:[r.jsx(Dn,{size:18})," Back"]}),r.jsxs("span",{style:{...it.counter,color:v},children:[g+1," ",r.jsxs("span",{style:it.counterTotal,children:["/ ",d]})]}),r.jsxs("button",{onClick:A,disabled:g===d-1,style:{...it.navBtn,...g===d-1?it.navBtnDisabled:{}},children:["Next ",r.jsx(sn,{size:18})]})]}),r.jsx("div",{style:it.dots,children:a.map((R,m)=>r.jsx("button",{onClick:()=>o(m),style:{...it.dot,...m===g?{background:v,transform:"scale(1.5)"}:{}},title:`${m+1}`},m))})]})]})}const it={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},filterBar:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:22},chip:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipCount:{fontSize:11,fontWeight:700,opacity:.7},catDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},empty:{display:"flex",flexDirection:"column",alignItems:"center",gap:10,fontSize:13.5,color:"var(--text-3)",padding:"56px 12px",textAlign:"center",background:"var(--surface)",borderRadius:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},viewer:{display:"flex",flexDirection:"column",alignItems:"center"},card:{position:"relative",background:"var(--surface)",borderRadius:16,padding:"40px 32px 44px",boxShadow:"0 4px 20px rgba(0,0,0,0.07)",width:"100%",minHeight:240,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",boxSizing:"border-box"},cardCat:{position:"absolute",top:16,left:16,fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:12,textTransform:"uppercase",letterSpacing:"0.04em"},favBtn:{position:"absolute",top:14,right:14,border:"none",background:"none",cursor:"pointer",padding:4,display:"grid",placeItems:"center"},cardText:{fontSize:21,lineHeight:1.55,margin:"14px 0 0",fontWeight:500,color:"var(--text)",fontFamily:"'Fraunces',Georgia,serif",maxWidth:560},navRow:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",maxWidth:420,marginTop:22},navBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},counter:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},counterTotal:{fontSize:13,fontWeight:600,color:"var(--text-3)"},dots:{display:"flex",gap:6,flexWrap:"wrap",justifyContent:"center",marginTop:20,maxWidth:480},dot:{width:7,height:7,borderRadius:"50%",border:"none",background:"var(--border)",cursor:"pointer",padding:0,transition:"transform 0.12s"}},E0=[{id:"day",label:"Day"},{id:"week",label:"Week"},{id:"month",label:"Month"},{id:"year",label:"Year"}],Gr=e=>e>=60?`${Math.floor(e/60)}h ${e%60}m`:`${e}m`,B0=e=>{const t=e<12?"am":"pm",n=e%12===0?12:e%12;return`${String(n).padStart(2,"0")} ${t}`};function D0(e){const t=e<=60?10:e<=120?20:e<=300?60:120,n=Math.max(60,Math.ceil((e||1)/t)*t),o=[];for(let i=0;i<=n;i+=t)o.push(i);return{max:n,ticks:o}}const Om=e=>{const t=new Date(e);return t.setHours(0,0,0,0),t},A0=e=>{const t=Om(e),n=(t.getDay()+6)%7;return t.setDate(t.getDate()-n),t},R0=e=>new Date(e.getFullYear(),e.getMonth(),1),F0=e=>new Date(e.getFullYear(),0,1);function M0(e,t){if(e==="day"){const i=Om(t);return{start:i,end:new Date(+i+864e5),prev:new Date(+i-864e5),prev2:new Date(+i-2*864e5)}}if(e==="week"){const i=A0(t);return{start:i,end:new Date(+i+7*864e5),prev:new Date(+i-7*864e5),prev2:new Date(+i-14*864e5)}}if(e==="month"){const i=R0(t),s=t.getFullYear(),l=t.getMonth();return{start:i,end:new Date(s,l+1,1),prev:new Date(s,l-1,1),prev2:new Date(s,l-2,1)}}const n=t.getFullYear();return{start:F0(t),end:new Date(n+1,0,1),prev:new Date(n-1,0,1),prev2:new Date(n-2,0,1)}}function W0({sessions:e=[],onBack:t}){const[n,o]=c.useState("day"),i=new Date,{start:s,end:l,prev:a,prev2:d}=M0(n,i),g=ge=>new Date(ge.started_at||ge.created_at),h=e.filter(ge=>ge.completed),x=(ge,ye,J)=>{const H=g(ge);return H>=ye&&H<J},f=(ge,ye)=>h.filter(J=>x(J,ge,ye)).reduce((J,H)=>J+(H.actual_min||0),0),A=h.filter(ge=>x(ge,s,l)),S=A.reduce((ge,ye)=>ge+(ye.actual_min||0),0),v=f(a,s),R=f(d,a),m=A.length,p=Array(24).fill(0);A.forEach(ge=>{p[g(ge).getHours()]+=ge.actual_min||0});const b=Math.max(...p,0),B=D0(b),C={};A.forEach(ge=>{const ye=Pt[ge.tree]?ge.tree:Zr;C[ye]=(C[ye]||0)+(ge.actual_min||0)});const T=Object.entries(C).map(([ge,ye])=>({name:Pt[ge].label,min:ye,color:Pt[ge].leaf})).sort((ge,ye)=>ye.min-ge.min),F=v>0?Math.round((S-v)/v*100):S>0?100:0,_=F>0?Yc:F<0?Vc:Cm,D=F>0?"#4C9A6B":F<0?"#C2536B":"#9A968C",W={day:"yesterday",week:"last week",month:"last month",year:"last year"}[n],w={day:"2 days ago",week:"2 weeks ago",month:"2 months ago",year:"2 years ago"}[n],te=54,z=22,re=2*Math.PI*te;let be=0;return r.jsxs("div",{style:Be.page,children:[r.jsxs("div",{style:Be.topbar,children:[r.jsxs("button",{onClick:t,style:Be.back,children:[r.jsx(fm,{size:18})," Grove"]}),r.jsx("h1",{style:Be.h1,children:"Insights"}),r.jsx("div",{style:{width:76}})]}),r.jsx("div",{style:Be.rangeBar,children:E0.map(ge=>r.jsx("button",{onClick:()=>o(ge.id),style:{...Be.rangeBtn,...n===ge.id?Be.rangeOn:{}},children:ge.label},ge.id))}),r.jsxs("div",{style:Be.headline,children:[r.jsxs("div",{style:Be.bigStat,children:[r.jsx("div",{style:Be.bigVal,children:Gr(S)}),r.jsxs("div",{style:Be.bigLbl,children:["Focused this ",n]})]}),r.jsxs("div",{style:Be.bigStat,children:[r.jsx("div",{style:Be.bigVal,children:m}),r.jsx("div",{style:Be.bigLbl,children:"Trees"})]})]}),r.jsxs("div",{style:Be.card,children:[r.jsxs("div",{style:Be.cardHead,children:[r.jsxs("div",{style:Be.cardTitle,children:["Your forest this ",n]}),r.jsx("div",{style:Be.cardHint,children:"Each tree is a completed session — bigger means longer focus"})]}),r.jsx($0,{sessions:A}),r.jsxs("div",{style:Be.forestNumber,children:[m," ",m===1?"tree":"trees"," · ",Gr(S)," focused"]})]}),r.jsx(Ca,{title:"Focus distribution",hint:"Minutes focused at each time of day",children:b===0?r.jsx(Au,{}):r.jsx(_0,{hours:p,axis:B})}),r.jsx(Ca,{title:"Pillar distribution",hint:"How your focus splits across the five trees",children:T.length===0?r.jsx(Au,{}):r.jsxs("div",{style:Be.donutWrap,children:[r.jsxs("svg",{viewBox:"0 0 140 140",width:"150",height:"150",style:{flexShrink:0},children:[T.map(ge=>{const ye=ge.min/(S||1)*re,J=r.jsx("circle",{cx:"70",cy:"70",r:te,fill:"none",stroke:ge.color,strokeWidth:z,strokeDasharray:`${ye} ${re-ye}`,strokeDashoffset:-be,transform:"rotate(-90 70 70)"},ge.name);return be+=ye,J}),r.jsx("text",{x:"70",y:"66",textAnchor:"middle",style:Be.donutCenterTop,children:Gr(S)}),r.jsx("text",{x:"70",y:"82",textAnchor:"middle",style:Be.donutCenterSub,children:"total"})]}),r.jsx("div",{style:Be.legend,children:T.map(ge=>r.jsxs("div",{style:Be.legendRow,children:[r.jsx("span",{style:{...Be.legendDot,background:ge.color}}),r.jsx("span",{style:Be.legendName,children:ge.name}),r.jsxs("span",{style:Be.legendVal,children:[Gr(ge.min)," · ",Math.round(ge.min/(S||1)*100),"%"]})]},ge.name))})]})}),r.jsxs(Ca,{title:"Focus trend",hint:`This ${n} vs the previous two`,children:[r.jsxs("div",{style:Be.trend3,children:[r.jsxs("div",{style:Be.trendCol,children:[r.jsx("div",{style:Be.trendVal,children:Gr(S)}),r.jsxs("div",{style:Be.trendLbl,children:["This ",n]})]}),r.jsxs("div",{style:Be.trendCol,children:[r.jsx("div",{style:{...Be.trendVal,color:"var(--text-2)"},children:Gr(v)}),r.jsx("div",{style:Be.trendLbl,children:W})]}),r.jsxs("div",{style:Be.trendCol,children:[r.jsx("div",{style:{...Be.trendVal,color:"var(--text-3)"},children:Gr(R)}),r.jsx("div",{style:Be.trendLbl,children:w})]})]}),r.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:14},children:r.jsxs("div",{style:{...Be.trendBadge,color:D,background:D+"1A"},children:[r.jsx(_,{size:15})," ",F>0?"+":"",F,"% vs ",W]})}),r.jsx(P0,{items:[{label:`This ${n}`,value:S,color:"#4C9A6B"},{label:W,value:v,color:"var(--text-3)"},{label:w,value:R,color:"var(--text-3)"}]})]})]})}const L0=e=>e===0?"12a":e<12?`${e}a`:e===12?"12p":`${e-12}p`;function _0({hours:e,axis:t}){return r.jsxs("div",{children:[r.jsxs("div",{style:Be.vcPlot,children:[t.ticks.map(n=>r.jsxs("div",{style:{...Be.vcGridRow,bottom:`${n/t.max*100}%`},children:[r.jsx("span",{style:Be.vcYLabel,children:n}),r.jsx("div",{style:Be.vcGridLine})]},n)),r.jsx("div",{style:Be.vcBars,children:e.map((n,o)=>r.jsx("div",{style:Be.vcCell,title:`${B0(o)} · ${n} min`,children:r.jsx("div",{style:{...Be.vcBar,height:n>0?`max(3px, ${n/t.max*100}%)`:0}})},o))})]}),r.jsx("div",{style:Be.vcXAxis,children:e.map((n,o)=>r.jsx("div",{style:Be.vcXCell,children:o%3===0?L0(o):""},o))}),r.jsx("div",{style:Be.vcYTitle,children:"minutes focused, by hour of day"})]})}function $0({sessions:e}){if(!e.length)return r.jsx("div",{style:Be.sceneEmpty,children:"No trees yet this period. 🌱"});const n=e.slice(0,80),o=e.length-n.length,i=s=>Math.round(Math.max(40,Math.min(88,40+(s||0)*.6)));return r.jsxs("div",{children:[r.jsx("div",{style:Be.scene,children:n.map(s=>r.jsx("div",{style:Be.sceneTree,title:`${s.label||"Focus"} · ${Gr(s.actual_min||s.duration_min)}`,children:r.jsx(qc,{species:s.tree,progress:1,size:i(s.actual_min||s.duration_min)})},s.id))}),o>0&&r.jsxs("div",{style:Be.overflow,children:["+",o," more trees"]})]})}function Ca({title:e,hint:t,children:n}){return r.jsxs("div",{style:Be.card,children:[r.jsxs("div",{style:Be.cardHead,children:[r.jsx("div",{style:Be.cardTitle,children:e}),t&&r.jsx("div",{style:Be.cardHint,children:t})]}),n]})}function Au(){return r.jsx("div",{style:Be.empty,children:"No focus sessions in this period yet. 🌱"})}function P0({items:e}){const t=Math.max(1,...e.map(n=>n.value));return r.jsx("div",{style:Be.tbWrap,children:e.map(n=>r.jsxs("div",{style:Be.tbRow,children:[r.jsx("div",{style:Be.tbLbl,children:n.label}),r.jsx("div",{style:Be.tbTrack,children:r.jsx("div",{style:{...Be.tbBar,width:`${n.value/t*100}%`,background:n.color}})}),r.jsx("div",{style:Be.tbVal,children:Gr(n.value)})]},n.label))})}const Be={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"20px 16px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:720,margin:"0 auto"},topbar:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16},back:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},h1:{fontSize:20,fontWeight:700,margin:0,fontFamily:"'Fraunces',Georgia,serif"},rangeBar:{display:"flex",gap:6,background:"var(--surface)",padding:5,borderRadius:12,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},rangeBtn:{flex:1,border:"none",background:"none",padding:"9px 0",borderRadius:8,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},rangeOn:{background:"var(--accent-strong)",color:"#fff"},headline:{display:"flex",gap:12,marginBottom:16},bigStat:{flex:1,background:"var(--surface)",borderRadius:14,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},bigVal:{fontSize:26,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em"},bigLbl:{fontSize:12,color:"var(--text-3)",marginTop:3,fontWeight:500},card:{background:"var(--surface)",borderRadius:16,padding:"18px 18px 20px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:16},cardHead:{marginBottom:14},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardHint:{fontSize:12,color:"var(--text-3)",marginTop:2},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"24px 0"},scene:{display:"flex",flexWrap:"wrap",alignItems:"flex-end",justifyContent:"center",gap:"0 2px",padding:"14px 8px 6px",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,minHeight:110,border:"1px solid var(--border)"},sceneTree:{lineHeight:0},sceneEmpty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"34px 0",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,border:"1px solid var(--border)"},overflow:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",marginTop:6,fontWeight:600},forestNumber:{textAlign:"center",marginTop:12,fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},vcPlot:{position:"relative",height:180,paddingLeft:30},vcGridRow:{position:"absolute",left:0,right:0,display:"flex",alignItems:"center",height:0},vcYLabel:{width:26,marginRight:4,textAlign:"right",fontSize:9,color:"var(--text-3)",fontWeight:600,flexShrink:0},vcGridLine:{flex:1,height:1,background:"#EEEBE4"},vcBars:{position:"absolute",left:30,right:0,top:0,bottom:0,display:"flex",alignItems:"flex-end",gap:1},vcCell:{flex:1,height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"center"},vcBar:{width:"72%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",transition:"height 0.3s"},vcXAxis:{display:"flex",marginLeft:30,marginTop:4},vcXCell:{flex:1,textAlign:"center",fontSize:8.5,color:"var(--text-3)",fontWeight:600,overflow:"hidden"},vcYTitle:{textAlign:"center",fontSize:9.5,color:"var(--text-3)",marginTop:6,letterSpacing:"0.06em",textTransform:"uppercase",fontWeight:600},donutWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap",justifyContent:"center"},donutCenterTop:{fontSize:16,fontWeight:800,fill:"var(--text)",fontFamily:"'Fraunces',Georgia,serif"},donutCenterSub:{fontSize:9,fill:"#9A968C",textTransform:"uppercase",letterSpacing:"0.08em"},legend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8},legendDot:{width:11,height:11,borderRadius:3,flexShrink:0},legendName:{flex:1,fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},legendVal:{fontSize:12,color:"var(--text-3)",fontWeight:600,flexShrink:0},trend3:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12,gap:8},trendCol:{textAlign:"center",flex:1},trendVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},trendLbl:{fontSize:11,color:"var(--text-3)",marginTop:2},trendBadge:{display:"inline-flex",alignItems:"center",gap:4,fontSize:13,fontWeight:800,padding:"6px 12px",borderRadius:20,width:"fit-content"},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:78,fontSize:11,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},tbTrack:{flex:1,height:14,background:"#F2F0EA",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:56,fontSize:11,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"}},N0=[15,30,45,60,90],za="anvil_grove_active",Ru=e=>`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`,Cl=e=>e>=60?`${Math.floor(e/60)}h ${e%60}m`:`${e}m`;function O0(){const[e,t]=c.useState("timer"),[n,o]=c.useState("idle"),[i,s]=c.useState(15),[l,a]=c.useState(!1),[d,g]=c.useState(""),[h,x]=c.useState(Zr),[f,A]=c.useState(()=>localStorage.getItem("anvil_grove_deepfocus")!=="0"),[S,v]=c.useState(15*60),[R,m]=c.useState({sessions:[],stats:null}),p=c.useRef(null),b=c.useRef(null),B=c.useRef(!1),C=c.useCallback(async()=>{try{m(await $.getFocus())}catch{}},[]),T=c.useCallback(async(V,de)=>{if(!B.current){B.current=!0,localStorage.removeItem(za);try{await $.createFocus({label:d.trim()||null,tree:h,duration_min:i,actual_min:de,completed:V,started_at:b.current,ended_at:new Date().toISOString()})}catch{}C()}},[d,h,i,C]),F=c.useCallback(()=>{if(n!=="running")return;const V=b.current?Math.round((Date.now()-new Date(b.current).getTime())/6e4):0;o("failed"),T(!1,Math.max(0,Math.min(i,V)))},[n,i,T]),_=c.useCallback(()=>{o("done"),v(0),T(!0,i)},[i,T]);c.useEffect(()=>{C();const V=JSON.parse(localStorage.getItem(za)||"null");if(V&&V.endTime){const de=Math.round((V.endTime-Date.now())/1e3);s(V.duration),g(V.label||""),x(V.tree||"oak"),p.current=V.endTime,b.current=V.startedAt,de>0?(v(de),o("running")):(o("done"),B.current=!1,T(!0,V.duration))}},[]),c.useEffect(()=>{if(n!=="running")return;const V=()=>{const I=Math.round((p.current-Date.now())/1e3);if(I<=0){_();return}v(I)};V();const de=setInterval(V,250);return()=>clearInterval(de)},[n,_]),c.useEffect(()=>{if(n!=="running"||!f)return;const V=()=>{document.hidden&&F()};return document.addEventListener("visibilitychange",V),()=>document.removeEventListener("visibilitychange",V)},[n,f,F]),c.useEffect(()=>{const V=()=>{!document.hidden&&n!=="running"&&C()};window.addEventListener("focus",V),document.addEventListener("visibilitychange",V);const de=setInterval(V,6e4);return()=>{window.removeEventListener("focus",V),document.removeEventListener("visibilitychange",V),clearInterval(de)}},[C,n]);const D=()=>A(V=>{const de=!V;return localStorage.setItem("anvil_grove_deepfocus",de?"1":"0"),de}),W=()=>{B.current=!1,b.current=new Date().toISOString(),p.current=Date.now()+i*60*1e3,localStorage.setItem(za,JSON.stringify({endTime:p.current,duration:i,label:d,tree:h,startedAt:b.current})),v(i*60),o("running")},w=()=>{o("idle"),v(i*60)},te=V=>{a(!1),s(V),v(V*60)},z=()=>{l||(a(!0),s(5),v(5*60))},re=V=>{if(a(!0),V===""){s(0),v(0);return}const de=Math.max(1,Math.min(600,parseInt(V,10)||0));s(de),v(de*60)},be=i*60,ge=n==="running"?1-S/be:n==="done"?1:0,ye=130,J=2*Math.PI*ye,H=J*(1-(n==="running"?ge:n==="done"?1:0)),se=R.stats;return e==="stats"?r.jsx(W0,{sessions:R.sessions,onBack:()=>t("timer")}):r.jsxs("div",{style:We.page,children:[r.jsxs("div",{style:We.head,children:[r.jsx("div",{style:We.eyebrow,children:"Anvil · Grove"}),r.jsx("h1",{style:We.h1,children:"Grove"}),r.jsx("div",{style:We.subhead,children:"Plant a tree, stay focused, grow your grove."}),r.jsxs("button",{onClick:()=>t("stats"),style:We.insightsBtn,disabled:n==="running",children:[r.jsx(Hx,{size:15})," Insights"]})]}),se&&r.jsxs("div",{style:We.statRow,children:[r.jsx(Is,{label:"Today",value:Cl(se.today_minutes)}),r.jsx(Is,{label:"Trees",value:se.trees}),r.jsx(Is,{label:"Streak",value:`${se.streak}d`}),r.jsx(Is,{label:"Success",value:`${se.success_rate}%`})]}),r.jsxs("div",{style:We.stage,children:[r.jsxs("div",{style:We.ringWrap,children:[r.jsxs("svg",{width:"300",height:"300",viewBox:"0 0 300 300",style:{position:"absolute",inset:0},children:[r.jsx("circle",{cx:"150",cy:"150",r:ye,fill:"none",stroke:"var(--border)",strokeWidth:"10"}),r.jsx("circle",{cx:"150",cy:"150",r:ye,fill:"none",stroke:n==="failed"?"#C2536B":"#4C9A6B",strokeWidth:"10",strokeLinecap:"round",strokeDasharray:J,strokeDashoffset:H,transform:"rotate(-90 150 150)",style:{transition:"stroke-dashoffset 0.4s linear"}})]}),r.jsx("div",{style:We.ringInner,children:r.jsx(qc,{species:h,progress:n==="idle"?0:ge,withered:n==="failed",size:170})})]}),n==="idle"&&r.jsxs(r.Fragment,{children:[r.jsx("div",{style:We.timeBig,children:Ru(i*60)}),r.jsxs("div",{style:We.controls,children:[r.jsxs("div",{style:We.chips,children:[N0.map(V=>r.jsxs("button",{onClick:()=>te(V),style:{...We.chip,...!l&&i===V?We.chipOn:{}},children:[V,"m"]},V)),r.jsx("button",{onClick:z,style:{...We.chip,...l?We.chipOn:{}},children:"Custom"})]}),l&&r.jsxs("div",{style:We.customRow,children:[r.jsx("input",{type:"number",min:"1",max:"600",inputMode:"numeric",autoFocus:!0,value:i||"",onChange:V=>re(V.target.value),placeholder:"e.g. 50",style:We.customInput}),r.jsx("span",{style:We.customUnit,children:"minutes"})]}),r.jsx("input",{value:d,onChange:V=>g(V.target.value),placeholder:"What are you focusing on? (optional)",style:We.input,maxLength:60}),r.jsx("div",{style:We.treePick,children:Object.entries(Pt).map(([V,de])=>r.jsxs("button",{onClick:()=>x(V),title:de.label,style:{...We.treeBtn,...h===V?{borderColor:de.leaf,background:de.leaf+"1A"}:{}},children:[r.jsx("span",{style:{...We.treeDot,background:de.leaf}}),de.label]},V))}),r.jsxs("button",{onClick:D,style:We.toggleRow,children:[r.jsxs("div",{style:{textAlign:"left"},children:[r.jsx("div",{style:We.toggleTitle,children:"Deep Focus"}),r.jsx("div",{style:We.toggleHint,children:f?"Leaving the app kills the tree":"Tree survives until you give up"})]}),r.jsx("div",{style:{...We.switch,...f?We.switchOn:{}},children:r.jsx("div",{style:{...We.knob,...f?We.knobOn:{}}})})]}),r.jsx("button",{onClick:W,disabled:i<1,style:{...We.plantBtn,...i<1?{opacity:.5,cursor:"not-allowed"}:{}},children:"Plant tree"})]})]}),n==="running"&&r.jsxs(r.Fragment,{children:[r.jsx("div",{style:We.timeBig,children:Ru(S)}),r.jsx("div",{style:We.focusLabel,children:d.trim()||"Focusing…"}),r.jsx("div",{style:f?We.warn:We.warnSoft,children:f?"⚠ Deep Focus on — leaving this app will kill your tree.":"🌿 Relaxed mode — only Give up ends this session."}),r.jsx("button",{onClick:F,style:We.giveUp,children:"Give up"})]}),n==="done"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:We.resultTitle,children:["🌳 You grew a ",Pt[h].label," tree!"]}),r.jsxs("div",{style:We.resultSub,children:[Cl(i)," of focus added to your grove."]}),r.jsx("button",{onClick:w,style:We.plantBtn,children:"Plant another"})]}),n==="failed"&&r.jsxs(r.Fragment,{children:[r.jsx("div",{style:{...We.resultTitle,color:"#C2536B"},children:"Your tree withered."}),r.jsx("div",{style:We.resultSub,children:"You left before the timer finished. Try again?"}),r.jsx("button",{onClick:w,style:We.plantBtn,children:"Try again"})]})]}),r.jsx(H0,{sessions:R.sessions,onDelete:async V=>{await $.deleteFocus(V),C()}})]})}function Is({label:e,value:t}){return r.jsxs("div",{style:We.stat,children:[r.jsx("div",{style:We.statValue,children:t}),r.jsx("div",{style:We.statLabel,children:e})]})}function H0({sessions:e,onDelete:t}){const n=e.filter(l=>l.completed);if(n.length===0)return r.jsx("div",{style:We.forestEmpty,children:"Your grove is empty. Plant your first tree above. 🌱"});const o={};for(const l of n){const a=(l.started_at||l.created_at||"").slice(0,10);(o[a]||(o[a]=[])).push(l)}const i=Object.keys(o).sort().reverse(),s=l=>{const a=new Date().toISOString().slice(0,10);return l===a?"Today":new Date(l+"T00:00").toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})};return r.jsxs("div",{style:We.forest,children:[r.jsxs("div",{style:We.forestHead,children:["Your Grove · ",n.length," trees"]}),i.map(l=>r.jsxs("div",{style:We.daySection,children:[r.jsxs("div",{style:We.dayLabel,children:[s(l)," · ",o[l].length]}),r.jsx("div",{style:We.treeGrid,children:o[l].map(a=>r.jsxs("div",{style:We.treeCard,title:`${a.label||"Focus"} · ${Cl(a.actual_min)}`,onDoubleClick:()=>t(a.id),children:[r.jsx(Ry,{species:a.tree}),r.jsx("div",{style:We.treeCardMin,children:Cl(a.actual_min||a.duration_min)}),a.label&&r.jsx("div",{style:We.treeCardLabel,children:a.label})]},a.id))})]},l)),r.jsx("div",{style:We.forestHint,children:"Double-tap a tree to remove it."})]})}const We={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:820,margin:"0 auto"},head:{marginBottom:16,textAlign:"center"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},insightsBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginTop:12},statRow:{display:"flex",gap:10,justifyContent:"center",marginBottom:18,flexWrap:"wrap"},stat:{background:"var(--surface)",borderRadius:12,padding:"10px 18px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",minWidth:78},statValue:{fontSize:19,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},statLabel:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},stage:{background:"var(--surface)",borderRadius:18,padding:"28px 24px 32px",boxShadow:"0 2px 12px rgba(0,0,0,0.06)",display:"flex",flexDirection:"column",alignItems:"center",marginBottom:26},ringWrap:{position:"relative",width:300,height:300,display:"grid",placeItems:"center"},ringInner:{position:"relative",zIndex:1,display:"grid",placeItems:"center"},timeBig:{fontSize:40,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:6},focusLabel:{fontSize:14,color:"var(--text-2)",marginTop:2,fontWeight:500},warn:{fontSize:12,color:"#C2773B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},warnSoft:{fontSize:12,color:"#4C9A6B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},toggleRow:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,border:"1px solid var(--border)",background:"var(--surface)",borderRadius:12,padding:"10px 14px",cursor:"pointer",fontFamily:"inherit",width:"100%"},toggleTitle:{fontSize:14,fontWeight:700,color:"var(--text)"},toggleHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},switch:{width:42,height:24,borderRadius:12,background:"var(--border)",flexShrink:0,padding:2,transition:"background 0.18s",boxSizing:"border-box"},switchOn:{background:"#4C9A6B"},knob:{width:20,height:20,borderRadius:"50%",background:"var(--surface)",boxShadow:"0 1px 2px rgba(0,0,0,0.2)",transform:"translateX(0)",transition:"transform 0.18s"},knobOn:{transform:"translateX(18px)"},controls:{width:"100%",maxWidth:380,display:"flex",flexDirection:"column",gap:14,marginTop:8},chips:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},chip:{border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 16px",borderRadius:20,fontSize:13.5,fontWeight:700,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipOn:{background:"#4C9A6B",color:"#fff",borderColor:"#4C9A6B"},customRow:{display:"flex",alignItems:"center",justifyContent:"center",gap:8},customInput:{border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",fontSize:15,fontWeight:700,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center",width:100},customUnit:{fontSize:13,color:"var(--text-3)",fontWeight:600},input:{border:"1px solid var(--border)",borderRadius:10,padding:"11px 13px",fontSize:14,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center"},treePick:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},treeBtn:{display:"flex",alignItems:"center",gap:6,border:"1.5px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},treeDot:{width:10,height:10,borderRadius:"50%"},plantBtn:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:4},giveUp:{border:"1px solid var(--border)",background:"var(--surface)",color:"#C2536B",padding:"11px 26px",borderRadius:11,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:18},resultTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginTop:14,textAlign:"center"},resultSub:{fontSize:13.5,color:"var(--text-3)",marginTop:6,marginBottom:18,textAlign:"center"},forest:{background:"var(--surface)",borderRadius:16,padding:"20px 22px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},forestHead:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:14},forestEmpty:{background:"var(--surface)",borderRadius:16,padding:"40px 20px",textAlign:"center",color:"var(--text-3)",fontSize:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},daySection:{marginBottom:16},dayLabel:{fontSize:12,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.04em",marginBottom:8},treeGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(80px,1fr))",gap:8},treeCard:{display:"flex",flexDirection:"column",alignItems:"center",padding:"8px 4px",borderRadius:10,cursor:"pointer",background:"var(--surface-2)"},treeCardMin:{fontSize:12,fontWeight:700,color:"#4C9A6B",marginTop:-4},treeCardLabel:{fontSize:10.5,color:"var(--text-3)",marginTop:2,textAlign:"center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:76},forestHint:{fontSize:11,color:"var(--text-3)",textAlign:"center",marginTop:6}},G0="grove_rates",U0="reward_rates",Ts=Object.keys(Pt),Fu=[{id:"kickstart",label:"Kickstart"},{id:"golden",label:"Golden Book"},{id:"habits",label:"Habits"},{id:"quadrant",label:"Quadrant"},{id:"goals",label:"Goals"},{id:"grove",label:"Grove"},{id:"journal",label:"Journal"},{id:"revision",label:"Revision"},{id:"affirmations",label:"Affirmations"},{id:"skills",label:"Skills"},{id:"spiritual",label:"Spiritual"},{id:"mindscape",label:"Mindscape"},{id:"vault",label:"Wallet"},{id:"expenses",label:"Expenses"},{id:"delight",label:"Delights"}],Mu=new Set(["worth","achievements"]),so="#C9A227",ri="#3A7CA5",lo="#C2536B",V0=e=>{const t=Math.floor(e/60),n=Math.round(e%60);return t&&n?`${t}h ${n}m`:t?`${t}h`:`${n}m`},Y0=e=>{let t=Math.round((e||0)*60);const n=Math.floor(t/3600);t%=3600;const o=Math.floor(t/60);return t%=60,[n?`${n}h`:null,n||o?`${o}m`:null,`${t}s`].filter(Boolean).join(" ")},Q0=()=>{const e=new Date,t=n=>String(n).padStart(2,"0");return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}T${t(e.getHours())}:${t(e.getMinutes())}`},Wu=e=>{if(!e)return"";const t=new Date(e.includes("T")?e:e+"T00:00:00");return isNaN(t)?e:t.toLocaleDateString("en-US",e.includes("T")?{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}:{month:"short",day:"numeric",year:"numeric"})},cr=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,Lu=e=>{const t=new Date(e);return t.setHours(0,0,0,0),t.setDate(t.getDate()-(t.getDay()+6)%7),t},Es=[{id:"today",label:"Today"},{id:"all",label:"All time"},{id:"tweek",label:"This week"},{id:"tmonth",label:"This month"},{id:"pweek",label:"Last week"},{id:"pmonth",label:"Last month"},{id:"tyear",label:"This year"}];function K0(e){const t=new Date;if(e==="today")return[cr(t),cr(t)];if(e==="tweek"){const n=Lu(t),o=new Date(n);return o.setDate(n.getDate()+6),[cr(n),cr(o)]}if(e==="pweek"){const n=Lu(t);n.setDate(n.getDate()-7);const o=new Date(n);return o.setDate(n.getDate()+6),[cr(n),cr(o)]}return e==="tmonth"?[cr(new Date(t.getFullYear(),t.getMonth(),1)),cr(new Date(t.getFullYear(),t.getMonth()+1,0))]:e==="pmonth"?[cr(new Date(t.getFullYear(),t.getMonth()-1,1)),cr(new Date(t.getFullYear(),t.getMonth(),0))]:e==="tyear"?[cr(new Date(t.getFullYear(),0,1)),cr(new Date(t.getFullYear(),11,31))]:["0000-01-01","9999-12-31"]}function X0(){const e=Ki(),t=u=>Hr(u,e.code),[n,o]=c.useState([]),[i,s]=c.useState([]),[l,a]=c.useState([]),[d,g]=c.useState([]),[h,x]=c.useState([]),[f,A]=c.useState({}),[S,v]=c.useState({}),[R,m]=c.useState(!1),[p,b]=c.useState({}),[B,C]=c.useState({}),[T,F]=c.useState(!1),[_,D]=c.useState(!1),[W,w]=c.useState(null),[te,z]=c.useState(""),[re,be]=c.useState(""),[ge,ye]=c.useState(!1),[J,H]=c.useState("today"),se=()=>$.getPayouts().then(g).catch(()=>{}),V=()=>$.getRewardRates().then(a).catch(()=>{});c.useEffect(()=>{(async()=>{try{const[u,q,Ae,Le,we,$e,Ct]=await Promise.all([$.getFocus(),$.getScreenTime(),$.getRewardRates(),$.getPayouts(),$.getAchievements(),$.getSetting(G0),$.getSetting(U0)]);o(u.sessions||[]),s(Array.isArray(q)?q:[]),a(Ae||[]),g(Le||[]),x(Array.isArray(we)?we:[]),A(($e==null?void 0:$e.value)||{}),v((Ct==null?void 0:Ct.value)||{})}catch{}m(!0)})()},[]);const de={};l.forEach(u=>{var q;(de[q=`${u.kind}:${u.rkey}`]||(de[q]=[])).push({eff:u.eff_date,rate:u.rate})}),Object.values(de).forEach(u=>u.sort((q,Ae)=>q.eff.localeCompare(Ae.eff)));const I=(u,q,Ae)=>{const Le=de[`${u}:${q}`];if(Le){let we=null;for(const $e of Le)if($e.eff<=Ae)we=$e.rate;else break;if(we!==null)return we}return(u==="focus"?f[q]:S[q])||0},ie=(u,q)=>{const Ae=de[`${u}:${q}`];return Ae&&Ae.length?Ae[Ae.length-1].rate:(u==="focus"?f[q]:S[q])??""},[Ie,Q]=K0(J);let y=0,E=0;n.filter(u=>u.completed).forEach(u=>{const q=(u.started_at||u.created_at||"").slice(0,10),Ae=Pt[u.tree]?u.tree:Zr;y+=(u.actual_min||0)/60*I("focus",Ae,q)}),i.forEach(u=>{Mu.has(u.screen)||(E+=u.seconds/60*I("usage",u.screen,u.date))});const P=h.reduce((u,q)=>u+(q.reward||0),0),G=y+E+P,oe=d.reduce((u,q)=>u+q.amount,0),pe=Math.max(0,G-oe),O={};Ts.forEach(u=>O[u]={minutes:0,earned:0}),n.filter(u=>u.completed).forEach(u=>{const q=(u.started_at||u.created_at||"").slice(0,10);if(q<Ie||q>Q)return;const Ae=Pt[u.tree]?u.tree:Zr,Le=u.actual_min||0;O[Ae].minutes+=Le,O[Ae].earned+=Le/60*I("focus",Ae,q)});const M=Ts.reduce((u,q)=>u+O[q].earned,0),k={};i.forEach(u=>{var Ae;if(Mu.has(u.screen)||u.date<Ie||u.date>Q)return;const q=k[Ae=u.screen]||(k[Ae]={seconds:0,earned:0});q.seconds+=u.seconds,q.earned+=u.seconds/60*I("usage",u.screen,u.date)});const ee=Object.values(k).reduce((u,q)=>u+q.earned,0),he=h.filter(u=>u.date>=Ie&&u.date<=Q&&(u.reward||0)>0),Ee=[...he].sort((u,q)=>q.date.localeCompare(u.date)||q.reward-u.reward),ut=he.reduce((u,q)=>u+(q.reward||0),0),Pe=M+ee+ut,nt=Pe>0?M/Pe*100:0,qe=Pe>0?ee/Pe*100:0,Xe=Pe>0?ut/Pe*100:0,ot=Ts.map(u=>({p:u,...O[u],...Pt[u]})).filter(u=>u.minutes>0).sort((u,q)=>q.earned-u.earned),tt=Fu.map(u=>({...u,...k[u.id]||{seconds:0,earned:0}})).filter(u=>u.seconds>0).sort((u,q)=>q.earned-u.earned),Tr=(u,q)=>{$.setRewardRate({kind:"focus",rkey:u,rate:Math.max(0,parseFloat(q)||0)}).then(V).catch(()=>{})},Ot=(u,q)=>{$.setRewardRate({kind:"usage",rkey:u,rate:Math.max(0,parseFloat(q)||0)}).then(V).catch(()=>{})},wt=u=>{pe<=0||(w(u),z(u==="all"?pe.toFixed(2):""),be(""))},pt=async()=>{const u=Math.min(parseFloat(te)||0,pe);u<=0||!re.trim()||(await $.createPayout({amount:u,note:re.trim(),date:Q0()}),w(null),z(""),be(""),await se(),ye(!0))},St=async u=>{await $.deletePayout(u),se()};return r.jsxs("div",{style:Z.page,children:[r.jsxs("div",{style:Z.head,children:[r.jsx("div",{style:Z.eyebrow,children:"Anvil · Rewards"}),r.jsx("h1",{style:Z.h1,children:"Rewards"}),r.jsx("div",{style:Z.subhead,children:"Your earned rewards from focus and app usage."})]}),r.jsxs("div",{style:Z.hero,children:[r.jsx("button",{onClick:()=>ye(u=>!u),style:Z.logIcon,title:"View reward log",children:r.jsx(yy,{size:16})}),r.jsx("div",{style:Z.heroLabel,children:"Final reward · pending"}),r.jsx("div",{style:Z.heroVal,children:t(pe)}),r.jsxs("div",{style:Z.heroSub,children:["Earned ",t(G)," · Taken ",t(oe),P>0?` · incl. ${t(P)} achievement`:""]}),r.jsxs("div",{style:Z.heroBtns,children:[r.jsx("button",{onClick:()=>wt("partial"),disabled:pe<=0,style:{...Z.heroBtnGhost,...pe<=0?Z.btnDisabled:{}},children:"Take partial"}),r.jsx("button",{onClick:()=>wt("all"),disabled:pe<=0,style:{...Z.heroBtnSolid,...pe<=0?Z.btnDisabled:{}},children:"Take all pending"})]})]}),r.jsxs("div",{style:Z.statRow,children:[r.jsxs("div",{style:Z.statCard,children:[r.jsx("div",{style:Z.statVal,children:t(oe)}),r.jsx("div",{style:Z.statLbl,children:"Total taken"})]}),r.jsxs("div",{style:Z.statCard,children:[r.jsx("div",{style:{...Z.statVal,color:so},children:t(pe)}),r.jsx("div",{style:Z.statLbl,children:"Total pending"})]})]}),r.jsx("div",{style:Z.periodRow,children:Es.map(u=>r.jsx("button",{onClick:()=>H(u.id),style:{...Z.periodChip,...J===u.id?Z.periodChipOn:{}},children:u.label},u.id))}),Pe>0?r.jsxs("div",{style:Z.card,children:[r.jsxs("div",{style:Z.cardTitleRow,children:[r.jsx("span",{style:Z.cardTitle,children:"Reward split"}),r.jsxs("span",{style:Z.periodTotal,children:[t(Pe)," · ",Es.find(u=>u.id===J).label]})]}),r.jsxs("div",{style:Z.splitTrack,children:[r.jsx("div",{style:{width:`${nt}%`,background:so,height:"100%"}}),r.jsx("div",{style:{width:`${qe}%`,background:ri,height:"100%"}}),r.jsx("div",{style:{width:`${Xe}%`,background:lo,height:"100%"}})]}),r.jsxs("div",{style:Z.legendRow,children:[r.jsxs("span",{style:Z.legendItem,children:[r.jsx("span",{style:{...Z.legendDot,background:so}})," Focus ",Math.round(nt),"% · ",t(M)]}),r.jsxs("span",{style:Z.legendItem,children:[r.jsx("span",{style:{...Z.legendDot,background:ri}})," Usage ",Math.round(qe),"% · ",t(ee)]}),r.jsxs("span",{style:Z.legendItem,children:[r.jsx("span",{style:{...Z.legendDot,background:lo}})," Achievement ",Math.round(Xe),"% · ",t(ut)]})]})]}):r.jsxs("div",{style:{...Z.card,...Z.muted},children:["No rewards earned in ",Es.find(u=>u.id===J).label.toLowerCase(),"."]}),r.jsxs("div",{style:Z.card,children:[r.jsxs("button",{onClick:()=>F(u=>!u),style:Z.collapseBtn,children:[r.jsxs("span",{style:{...Z.cardTitle,color:so},children:["Focus Rewards · ",t(M)]}),r.jsx("span",{style:Z.collapseHint,children:T?"Hide rates":"Set rates"})]}),T&&r.jsx("div",{style:{...Z.rateGrid,marginTop:12},children:Ts.map(u=>r.jsxs("div",{style:Z.rateRow,children:[r.jsx("span",{style:{...Z.dot,background:Pt[u].leaf}}),r.jsx("span",{style:Z.rateName,children:Pt[u].label}),r.jsxs("div",{style:Z.rateInputWrap,children:[r.jsx("span",{style:Z.unitSign,children:e.symbol}),r.jsx("input",{type:"number",min:"0",step:"0.5",inputMode:"decimal",placeholder:"0",value:p[u]!==void 0?p[u]:ie("focus",u),onChange:q=>b(Ae=>({...Ae,[u]:q.target.value})),onBlur:q=>Tr(u,q.target.value),style:Z.rateInput}),r.jsx("span",{style:Z.unit,children:"/hr"})]})]},u))}),ot.length>0?r.jsx("div",{style:{...Z.rows,marginTop:14},children:ot.map(u=>r.jsxs("div",{style:Z.row,children:[r.jsx("span",{style:{...Z.dot,background:u.leaf}}),r.jsx("span",{style:Z.rowName,children:u.label}),r.jsx("span",{style:Z.rowMeta,children:V0(Math.round(u.minutes))}),r.jsx("span",{style:Z.rowAmt,children:t(u.earned)})]},u.p))}):r.jsx("div",{style:Z.muted,children:"No focus sessions yet."})]}),r.jsxs("div",{style:Z.card,children:[r.jsxs("button",{onClick:()=>D(u=>!u),style:Z.collapseBtn,children:[r.jsxs("span",{style:{...Z.cardTitle,color:ri},children:["Usage Rewards · ",t(ee)]}),r.jsx("span",{style:Z.collapseHint,children:_?"Hide rates":"Set rates"})]}),_&&r.jsx("div",{style:{...Z.rateGrid,marginTop:12},children:Fu.map(u=>r.jsxs("div",{style:Z.rateRow,children:[r.jsx("span",{style:Z.rateName,children:u.label}),r.jsxs("div",{style:Z.rateInputWrap,children:[r.jsx("span",{style:Z.unitSign,children:e.symbol}),r.jsx("input",{type:"number",min:"0",step:"0.1",inputMode:"decimal",placeholder:"0",value:B[u.id]!==void 0?B[u.id]:ie("usage",u.id),onChange:q=>C(Ae=>({...Ae,[u.id]:q.target.value})),onBlur:q=>Ot(u.id,q.target.value),style:Z.rateInput}),r.jsx("span",{style:Z.unit,children:"/min"})]})]},u.id))}),tt.length>0?r.jsx("div",{style:{...Z.rows,marginTop:14},children:tt.map(u=>r.jsxs("div",{style:Z.row,children:[r.jsx("span",{style:Z.rowName,children:u.label}),r.jsx("span",{style:Z.rowMeta,children:Y0(u.seconds/60)}),r.jsx("span",{style:Z.rowAmt,children:t(u.earned)})]},u.id))}):r.jsx("div",{style:Z.muted,children:R?"No usage tracked yet.":"Loading…"})]}),r.jsxs("div",{style:Z.card,children:[r.jsxs("div",{style:Z.cardTitleRow,children:[r.jsxs("span",{style:{...Z.cardTitle,color:lo},children:["Achievement Rewards · ",t(ut)]}),r.jsx("span",{style:Z.collapseHint,children:"Set in Achievements"})]}),Ee.length>0?r.jsx("div",{style:{...Z.rows,marginTop:14},children:Ee.map(u=>r.jsxs("div",{style:Z.row,children:[r.jsx("span",{style:{...Z.dot,background:lo}}),r.jsx("span",{style:Z.rowName,children:u.title}),r.jsx("span",{style:Z.rowMeta,children:Wu(u.date)}),r.jsx("span",{style:Z.rowAmt,children:t(u.reward)})]},u.id))}):r.jsxs("div",{style:{...Z.muted,marginTop:10},children:["No achievement rewards in ",Es.find(u=>u.id===J).label.toLowerCase(),". Add a reward to a win in the Achievements section."]})]}),ge&&r.jsx("div",{style:Z.modalOverlay,onClick:()=>ye(!1),children:r.jsxs("div",{style:Z.logModal,onClick:u=>u.stopPropagation(),children:[r.jsxs("div",{style:Z.logModalHead,children:[r.jsx("span",{style:Z.modalTitle,children:"Reward log"}),r.jsx("button",{onClick:()=>ye(!1),style:Z.logClose,title:"Close",children:r.jsx(De,{size:16})})]}),d.length===0?r.jsx("div",{style:{...Z.muted,padding:"24px 0",textAlign:"center"},children:"No rewards taken yet."}):r.jsxs(r.Fragment,{children:[r.jsx("div",{style:Z.logScroll,children:d.map(u=>r.jsxs("div",{style:Z.row,children:[r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("div",{style:Z.logNote,children:u.note||"Reward taken"}),r.jsx("div",{style:Z.rowMeta,children:Wu(u.date)})]}),r.jsx("span",{style:Z.rowAmt,children:t(u.amount)}),r.jsx("button",{onClick:()=>St(u.id),style:Z.del,children:"×"})]},u.id))}),r.jsxs("div",{style:Z.totalRow,children:[r.jsx("span",{children:"Total taken"}),r.jsx("span",{style:Z.totalVal,children:t(oe)})]})]})]})}),Pe>0&&r.jsxs("div",{style:Z.card,children:[r.jsx("div",{style:Z.cardTitle,children:"Reward breakdown"}),r.jsxs("div",{style:Z.pieWrap,children:[r.jsxs("div",{style:Z.pieChart,children:[r.jsx("div",{style:{...Z.pieDisc,background:`conic-gradient(${so} 0 ${nt}%, ${ri} ${nt}% ${nt+qe}%, ${lo} ${nt+qe}% 100%)`}}),r.jsxs("div",{style:Z.pieHole,children:[r.jsx("span",{style:Z.pieHoleVal,children:t(Pe)}),r.jsx("span",{style:Z.pieHoleLbl,children:"total"})]})]}),r.jsxs("div",{style:Z.pieLegend,children:[r.jsxs("div",{style:Z.pieLegRow,children:[r.jsx("span",{style:{...Z.legendDot,background:so}}),r.jsx("span",{style:Z.pieLegName,children:"Focus"}),r.jsxs("span",{style:Z.pieLegPct,children:[Math.round(nt),"%"]}),r.jsx("span",{style:Z.pieLegMin,children:t(M)})]}),r.jsxs("div",{style:Z.pieLegRow,children:[r.jsx("span",{style:{...Z.legendDot,background:ri}}),r.jsx("span",{style:Z.pieLegName,children:"Usage"}),r.jsxs("span",{style:Z.pieLegPct,children:[Math.round(qe),"%"]}),r.jsx("span",{style:Z.pieLegMin,children:t(ee)})]}),r.jsxs("div",{style:Z.pieLegRow,children:[r.jsx("span",{style:{...Z.legendDot,background:lo}}),r.jsx("span",{style:Z.pieLegName,children:"Achievement"}),r.jsxs("span",{style:Z.pieLegPct,children:[Math.round(Xe),"%"]}),r.jsx("span",{style:Z.pieLegMin,children:t(ut)})]})]})]})]}),W&&r.jsx("div",{style:Z.modalOverlay,onClick:()=>w(null),children:r.jsxs("div",{style:Z.modalCard,onClick:u=>u.stopPropagation(),children:[r.jsx("div",{style:Z.modalTitle,children:W==="all"?"Take all pending reward?":"Take partial reward"}),r.jsxs("div",{style:Z.modalSub,children:["Pending: ",t(pe)]}),r.jsxs("div",{style:Z.modalInputWrap,children:[r.jsx("span",{style:Z.modalSign,children:e.symbol}),r.jsx("input",{type:"number",min:"0",step:"0.01",autoFocus:!0,placeholder:pe.toFixed(2),value:te,onChange:u=>z(u.target.value),style:Z.modalAmt})]}),r.jsx("input",{placeholder:"What is this reward for? (required)",value:re,onChange:u=>be(u.target.value),onKeyDown:u=>u.key==="Enter"&&pt(),style:Z.modalReason}),(()=>{const u=parseFloat(te)>0&&!!re.trim();return r.jsxs("div",{style:Z.modalActions,children:[r.jsx("button",{onClick:()=>w(null),style:Z.modalCancel,children:"Cancel"}),r.jsxs("button",{onClick:pt,disabled:!u,style:{...Z.modalConfirm,...u?{}:{opacity:.5,cursor:"not-allowed"}},children:["Confirm · ",t(Math.min(parseFloat(te)||0,pe))]})]})})()]})}),r.jsx("div",{style:Z.note,children:"Set rates only affect time from today onward — past time keeps the rate it was earned at."})]})}const Z={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},hero:{position:"relative",background:"linear-gradient(135deg,var(--accent-strong),var(--accent-2))",borderRadius:16,padding:"22px 24px",color:"#fff",marginBottom:14,textAlign:"center"},logIcon:{position:"absolute",top:12,right:12,border:"1px solid rgba(255,255,255,0.5)",background:"rgba(255,255,255,0.12)",color:"#fff",width:32,height:32,borderRadius:9,cursor:"pointer",display:"grid",placeItems:"center"},logClose:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:28,height:28,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},logNote:{fontSize:13.5,fontWeight:600,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:200,display:"grid",placeItems:"center",padding:16},modalCard:{background:"var(--surface)",color:"var(--text)",borderRadius:16,padding:"22px 22px 18px",width:360,maxWidth:"100%",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)"},logModal:{background:"var(--surface)",color:"var(--text)",borderRadius:16,padding:"18px 18px 14px",width:440,maxWidth:"100%",maxHeight:"82vh",display:"flex",flexDirection:"column",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)",boxSizing:"border-box"},logModalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8,flexShrink:0},logScroll:{overflowY:"auto",display:"flex",flexDirection:"column",gap:2,paddingRight:2,minHeight:0},modalTitle:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:4},modalSub:{fontSize:12.5,color:"var(--text-3)",fontWeight:600,marginBottom:14},modalInputWrap:{display:"flex",alignItems:"center",gap:4,border:"1px solid var(--border)",borderRadius:10,padding:"8px 12px",background:"var(--surface-2)",marginBottom:8},modalSign:{fontSize:16,color:"var(--text-2)",fontWeight:700},modalAmt:{border:"none",background:"none",outline:"none",flex:1,fontSize:18,fontWeight:700,fontFamily:"inherit",color:"var(--text)"},modalReason:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"9px 12px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",marginBottom:14},modalActions:{display:"flex",gap:8},modalCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},modalConfirm:{flex:1,border:"none",background:"#C9A227",color:"#fff",padding:"10px 14px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},heroLabel:{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",opacity:.85},heroVal:{fontSize:44,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:2,lineHeight:1.05},heroSub:{fontSize:12.5,opacity:.9,marginTop:6},heroBtns:{display:"flex",gap:10,marginTop:16,justifyContent:"center"},heroBtnSolid:{border:"none",background:"#fff",color:"var(--accent-strong)",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},heroBtnGhost:{border:"1px solid rgba(255,255,255,0.6)",background:"transparent",color:"#fff",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},btnDisabled:{opacity:.45,cursor:"not-allowed"},statRow:{display:"flex",gap:10,marginBottom:14},statCard:{flex:1,background:"var(--surface)",borderRadius:12,padding:"12px 14px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},statVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},statLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},card:{background:"var(--surface)",borderRadius:16,padding:"18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:10,flexWrap:"wrap"},periodTotal:{fontSize:13,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text-2)"},periodRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},periodChip:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},periodChipOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},collapseBtn:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",border:"none",background:"none",cursor:"pointer",padding:0,fontFamily:"inherit"},collapseHint:{fontSize:12,fontWeight:700,color:"var(--accent)"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"12px 0"},splitTrack:{display:"flex",height:16,borderRadius:8,overflow:"hidden",marginTop:12,marginBottom:12,border:"1px solid var(--border)"},legendRow:{display:"flex",gap:16,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:600,color:"var(--text-2)"},legendDot:{width:10,height:10,borderRadius:3,flexShrink:0},pieWrap:{display:"flex",alignItems:"center",gap:20,flexWrap:"wrap",marginTop:6},pieChart:{position:"relative",width:130,height:130,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:78,height:78,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:14,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:10},pieLegRow:{display:"flex",alignItems:"center",gap:8},pieLegName:{flex:1,fontSize:13.5,fontWeight:600},pieLegPct:{fontSize:13,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",width:46,textAlign:"right"},pieLegMin:{fontSize:12,color:"var(--text-3)",fontWeight:600,minWidth:64,textAlign:"right"},rows:{display:"flex",flexDirection:"column",gap:2},row:{display:"flex",alignItems:"center",gap:8,padding:"7px 0",borderBottom:"1px solid var(--border)"},dot:{width:10,height:10,borderRadius:3,flexShrink:0},rowName:{flex:1,fontSize:13.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},rowMeta:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,flexShrink:0},rowAmt:{fontSize:13.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",flexShrink:0,minWidth:64,textAlign:"right"},del:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",fontSize:16,lineHeight:1,padding:"0 2px",flexShrink:0},totalRow:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:10,marginTop:4,fontSize:14,fontWeight:700},totalVal:{fontSize:16,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},rateGrid:{display:"flex",flexDirection:"column",gap:10},rateRow:{display:"flex",alignItems:"center",gap:8},rateName:{flex:1,fontSize:14,fontWeight:600},rateInputWrap:{display:"flex",alignItems:"center",gap:3,border:"1px solid var(--border)",borderRadius:9,padding:"4px 10px",background:"var(--surface-2)"},unitSign:{fontSize:14,color:"var(--text-2)",fontWeight:600},rateInput:{border:"none",background:"none",outline:"none",width:64,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},unit:{fontSize:12,color:"var(--text-3)",fontWeight:600},note:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",fontStyle:"italic",marginTop:4}};function q0({onAuthed:e}){const[t,n]=c.useState("login"),[o,i]=c.useState(""),[s,l]=c.useState(""),[a,d]=c.useState(""),[g,h]=c.useState(""),[x,f]=c.useState(!1),[A,S]=c.useState(!1),v=t==="register",R=t==="forgot",m=b=>{n(b),h(""),S(!1)},p=async b=>{if(b.preventDefault(),h(""),R){if(!s.trim()){h("Enter your email.");return}f(!0);try{await $.forgotPassword(s),S(!0)}catch(B){h(B.message||"Something went wrong.")}finally{f(!1)}return}if(!s.trim()||!a){h("Email and password are required.");return}if(v&&a.length<6){h("Password must be at least 6 characters.");return}f(!0);try{const B=v?await $.register({name:o,email:s,password:a}):await $.login({email:s,password:a});Ay(B.token),e(B.user)}catch(B){h(B.message||"Something went wrong.")}finally{f(!1)}};return r.jsx("div",{style:ct.page,children:r.jsxs("form",{style:ct.card,onSubmit:p,children:[r.jsxs("div",{style:ct.brand,children:[r.jsx("div",{style:ct.logo,children:"B"}),r.jsx("span",{style:ct.brandName,children:"Anvil"})]}),r.jsx("h1",{style:ct.title,children:R?"Reset your password":v?"Create your account":"Welcome back"}),r.jsx("p",{style:ct.sub,children:R?"We'll email you a link to set a new password.":v?"Start forging your days.":"Sign in to continue."}),R&&A?r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:ct.notice,children:["If an account exists for ",r.jsx("strong",{children:s.trim()}),", a reset link is on its way. The link expires in 1 hour."]}),r.jsx("button",{type:"button",onClick:()=>m("login"),style:{...ct.submit,marginTop:4},children:"Back to sign in"})]}):r.jsxs(r.Fragment,{children:[v&&r.jsxs("label",{style:ct.field,children:[r.jsx("span",{style:ct.label,children:"Name"}),r.jsx("input",{value:o,onChange:b=>i(b.target.value),placeholder:"Your name",style:ct.input,autoFocus:!0})]}),r.jsxs("label",{style:ct.field,children:[r.jsx("span",{style:ct.label,children:"Email"}),r.jsx("input",{type:"email",value:s,onChange:b=>l(b.target.value),placeholder:"you@example.com",style:ct.input,autoFocus:!v})]}),!R&&r.jsxs("label",{style:ct.field,children:[r.jsx("span",{style:ct.label,children:"Password"}),r.jsx("input",{type:"password",value:a,onChange:b=>d(b.target.value),placeholder:"••••••••",style:ct.input})]}),t==="login"&&r.jsx("div",{style:{textAlign:"right",marginTop:-6,marginBottom:14},children:r.jsx("button",{type:"button",onClick:()=>m("forgot"),style:ct.link,children:"Forgot password?"})}),g&&r.jsx("div",{style:ct.error,children:g}),r.jsx("button",{type:"submit",disabled:x,style:{...ct.submit,...x?{opacity:.6}:{}},children:x?"Please wait…":R?"Send reset link":v?"Create account":"Sign in"}),r.jsx("div",{style:ct.switch,children:R?r.jsxs(r.Fragment,{children:["Remembered it?"," ",r.jsx("button",{type:"button",onClick:()=>m("login"),style:ct.link,children:"Back to sign in"})]}):r.jsxs(r.Fragment,{children:[v?"Already have an account?":"New here?"," ",r.jsx("button",{type:"button",onClick:()=>m(v?"login":"register"),style:ct.link,children:v?"Sign in":"Create one"})]})})]})]})})}const ct={page:{minHeight:"100vh",display:"grid",placeItems:"center",background:"var(--bg)",fontFamily:"'Inter',system-ui,sans-serif",padding:20},card:{width:"100%",maxWidth:380,background:"var(--surface)",borderRadius:16,padding:"32px 28px",boxShadow:"0 4px 24px rgba(0,0,0,0.08)",display:"flex",flexDirection:"column"},brand:{display:"flex",alignItems:"center",gap:9,marginBottom:20},logo:{width:32,height:32,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},brandName:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},title:{fontSize:22,fontWeight:700,margin:"0 0 4px",fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},sub:{fontSize:13.5,color:"var(--text-3)",margin:"0 0 22px"},field:{display:"flex",flexDirection:"column",gap:5,marginBottom:14},label:{fontSize:12,fontWeight:600,color:"var(--text-2)"},input:{border:"1px solid var(--border)",borderRadius:9,padding:"11px 12px",fontSize:14,fontFamily:"inherit",outline:"none",color:"var(--text)"},error:{background:"rgba(194,83,107,0.10)",color:"#C2536B",fontSize:13,padding:"9px 12px",borderRadius:8,marginBottom:14,fontWeight:500},notice:{background:"rgba(76,154,107,0.10)",color:"#3B7A54",fontSize:13,padding:"11px 13px",borderRadius:8,marginBottom:14,fontWeight:500,lineHeight:1.5},submit:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"12px",borderRadius:10,fontSize:14.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:4},switch:{fontSize:13,color:"var(--text-2)",textAlign:"center",marginTop:18},link:{border:"none",background:"none",color:"#3A7CA5",fontWeight:700,cursor:"pointer",fontFamily:"inherit",fontSize:13,padding:0}};function Z0({token:e,onDone:t}){const[n,o]=c.useState(""),[i,s]=c.useState(""),[l,a]=c.useState(""),[d,g]=c.useState(!1),[h,x]=c.useState(!1),f=async A=>{if(A.preventDefault(),a(""),n.length<6){a("Password must be at least 6 characters.");return}if(n!==i){a("The two passwords don't match.");return}g(!0);try{await $.resetPassword(e,n),x(!0)}catch(S){a(S.message||"This reset link is invalid or has expired.")}finally{g(!1)}};return r.jsx("div",{style:kt.page,children:r.jsxs("form",{style:kt.card,onSubmit:f,children:[r.jsxs("div",{style:kt.brand,children:[r.jsx("div",{style:kt.logo,children:"B"}),r.jsx("span",{style:kt.brandName,children:"Anvil"})]}),h?r.jsxs(r.Fragment,{children:[r.jsx("h1",{style:kt.title,children:"Password updated"}),r.jsx("p",{style:kt.sub,children:"You can now sign in with your new password."}),r.jsx("button",{type:"button",onClick:t,style:kt.submit,children:"Go to sign in"})]}):r.jsxs(r.Fragment,{children:[r.jsx("h1",{style:kt.title,children:"Set a new password"}),r.jsx("p",{style:kt.sub,children:"Enter your new password twice to confirm."}),r.jsxs("label",{style:kt.field,children:[r.jsx("span",{style:kt.label,children:"New password"}),r.jsx("input",{type:"password",value:n,onChange:A=>o(A.target.value),placeholder:"••••••••",style:kt.input,autoFocus:!0})]}),r.jsxs("label",{style:kt.field,children:[r.jsx("span",{style:kt.label,children:"Confirm new password"}),r.jsx("input",{type:"password",value:i,onChange:A=>s(A.target.value),placeholder:"••••••••",style:kt.input})]}),l&&r.jsx("div",{style:kt.error,children:l}),r.jsx("button",{type:"submit",disabled:d,style:{...kt.submit,...d?{opacity:.6}:{}},children:d?"Please wait…":"Reset password"}),r.jsx("div",{style:kt.switch,children:r.jsx("button",{type:"button",onClick:t,style:kt.link,children:"Back to sign in"})})]})]})})}const kt={page:{minHeight:"100vh",display:"grid",placeItems:"center",background:"var(--bg)",fontFamily:"'Inter',system-ui,sans-serif",padding:20},card:{width:"100%",maxWidth:380,background:"var(--surface)",borderRadius:16,padding:"32px 28px",boxShadow:"0 4px 24px rgba(0,0,0,0.08)",display:"flex",flexDirection:"column"},brand:{display:"flex",alignItems:"center",gap:9,marginBottom:20},logo:{width:32,height:32,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},brandName:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},title:{fontSize:22,fontWeight:700,margin:"0 0 4px",fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},sub:{fontSize:13.5,color:"var(--text-3)",margin:"0 0 22px"},field:{display:"flex",flexDirection:"column",gap:5,marginBottom:14},label:{fontSize:12,fontWeight:600,color:"var(--text-2)"},input:{border:"1px solid var(--border)",borderRadius:9,padding:"11px 12px",fontSize:14,fontFamily:"inherit",outline:"none",color:"var(--text)"},error:{background:"rgba(194,83,107,0.10)",color:"#C2536B",fontSize:13,padding:"9px 12px",borderRadius:8,marginBottom:14,fontWeight:500},submit:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"12px",borderRadius:10,fontSize:14.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:4},switch:{fontSize:13,color:"var(--text-2)",textAlign:"center",marginTop:18},link:{border:"none",background:"none",color:"#3A7CA5",fontWeight:700,cursor:"pointer",fontFamily:"inherit",fontSize:13,padding:0}},_d=1,Hm="anvil_month_start_day";function $d(){try{return Number(localStorage.getItem(Hm))||_d}catch{return _d}}function _u(e){const t=Math.min(28,Math.max(1,Number(e)||_d));try{localStorage.setItem(Hm,String(t))}catch{}return window.dispatchEvent(new CustomEvent("anvil-month-start",{detail:t})),t}function Gm(){const[e,t]=c.useState($d());return c.useEffect(()=>{const n=o=>t(o.detail||$d());return window.addEventListener("anvil-month-start",n),()=>window.removeEventListener("anvil-month-start",n)},[]),e}const $u=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`;function Ur(e,t,n=0){const o=e.getFullYear(),i=e.getMonth(),l=e.getDate()>=t?i:i-1,a=new Date(o,l+n,t),d=new Date(o,l+n+1,t-1);return[$u(a),$u(d)]}const Pu=["Salary","Stocks","Business","Interest","Rent","Gift","Other"],J0=["Bills","EMI","Rent","Food","Shopping","Transport","Health","Entertainment","Education","Other"],Nu=["Stocks","Mutual Fund","SIP","Fixed Deposit","Gold","Real Estate","PPF/EPF","Crypto","Other"],ev={Salary:"#4C9A6B",Stocks:"#3A7CA5",Business:"#C9A227",Interest:"#8268B0",Gift:"#C2773B",Bills:"#C2536B",EMI:"#A23E57",Food:"#E08E45",Shopping:"#8268B0",Transport:"#3A7CA5",Health:"#4C9A6B",Entertainment:"#C9A227",Education:"#5B7C99",Rent:"#5B8C5A",Other:"#9A968C"},Zc=e=>ev[e]||"#9A968C",tv={Stocks:"#2F6B4F","Mutual Fund":"#3E9E6B",SIP:"#4FAE7E","Fixed Deposit":"#6BBE92",Gold:"#8ECDA8","Real Estate":"#1F5C3F","PPF/EPF":"#5BAE83",Crypto:"#7FC79E",Other:"#9AD4B3"},rv=e=>tv[e]||"#4C9A6B",Qr="#3E9E6B",ur="#D1556E",Yr="#3A7CA5",Ia="#8268B0",Um=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,go=Um(new Date),nv=[{id:"month",label:"This month"},{id:"last",label:"Last month"},{id:"year",label:"This year"},{id:"all",label:"All time"}];function ov(e,t){const n=new Date;return e==="month"?Ur(n,t):e==="last"?Ur(n,t,-1):e==="year"?[Um(new Date(n.getFullYear(),0,1)),go]:["0000-01-01","9999-12-31"]}function iv(){const e=Ki(),[t,n]=c.useState("overview"),[o,i]=c.useState([]),[s,l]=c.useState([]),[a,d]=c.useState([]),[g,h]=c.useState([]),[x,f]=c.useState([]),[A,S]=c.useState(!1),v=c.useCallback(()=>Promise.all([$.getTxns(),$.getExpenses(),$.getInvestments()]).then(([T,F,_])=>(i(T),l(F.categories),d(F.logs),h(_),$.getFixedItems())).then(f).then(()=>S(!0)).catch(()=>S(!0)),[]);c.useEffect(()=>{v()},[v]);const R=c.useMemo(()=>{const T={};return s.forEach(F=>T[F.id]=F),T},[s]),m=c.useMemo(()=>a.map(T=>{var F;return{id:`exp-${T.id}`,rawId:T.id,source:"expense",kind:"expense",category:((F=R[T.category_id])==null?void 0:F.name)||"Other",amount:T.amount,note:T.note,date:T.date}}),[a,R]),p=c.useMemo(()=>o.filter(T=>T.kind==="expense").map(T=>({...T,source:"legacy"})),[o]),b=c.useMemo(()=>o.filter(T=>T.kind==="income").map(T=>({...T,source:"legacy"})),[o]),B=c.useMemo(()=>[...b,...p,...m].sort((T,F)=>F.date.localeCompare(T.date)),[b,p,m]),C=T=>wl(T,e.code);return r.jsxs("div",{style:j.page,children:[r.jsxs("div",{style:j.head,children:[r.jsx("div",{style:j.eyebrow,children:"Anvil · Wallet"}),r.jsx("h1",{style:j.h1,children:"Wallet"}),r.jsx("div",{style:j.subhead,children:"Your money — what comes in, what goes out, and where it's headed."})]}),r.jsx("div",{style:j.tabs,children:[["overview","Overview",Gx],["money","Money",Qc],["calc","Calculators",$x]].map(([T,F,_])=>r.jsxs("button",{onClick:()=>n(T),style:{...j.tab,...t===T?j.tabOn:{}},children:[r.jsx(_,{size:15})," ",F]},T))}),t==="overview"&&r.jsx(sv,{txns:B,investments:g,loaded:A,money:C,cur:e}),t==="money"&&r.jsx(dv,{txns:B,expCats:s,investments:g,fixedItems:x,reload:v,money:C,cur:e}),t==="calc"&&r.jsx(cv,{money:C,cur:e})]})}function sv({txns:e,investments:t,loaded:n,money:o,cur:i}){const s=Gm(),[l,a]=c.useState("month"),[d,g]=ov(l,s),h=c.useMemo(()=>e.filter(W=>W.date>=d&&W.date<=g),[e,d,g]),x=h.filter(W=>W.kind==="income"),f=h.filter(W=>W.kind==="expense"),A=x.reduce((W,w)=>W+w.amount,0),S=f.reduce((W,w)=>W+w.amount,0),v=c.useMemo(()=>t.filter(W=>W.date>=d&&W.date<=g),[t,d,g]),R=v.reduce((W,w)=>W+w.invested,0),m=S+R,p=A-m,b=t.reduce((W,w)=>W+w.invested,0),B=t.reduce((W,w)=>W+w.current_value,0),C=B-b,T=W=>{const w={};return W.forEach(te=>{w[te.category]=(w[te.category]||0)+te.amount}),Object.entries(w).map(([te,z])=>({category:te,amount:z,color:Zc(te)})).sort((te,z)=>z.amount-te.amount)},F=T(f),_=c.useMemo(()=>{const W={};return v.forEach(w=>{W[w.kind]=(W[w.kind]||0)+w.invested}),Object.entries(W).map(([w,te])=>({category:w,amount:te,color:rv(w)})).sort((w,te)=>te.amount-w.amount)},[v]),D=[...F,..._];return r.jsxs(r.Fragment,{children:[r.jsx("div",{style:j.presetRow,children:nv.map(W=>r.jsx("button",{onClick:()=>a(W.id),style:{...j.preset,...l===W.id?j.presetOn:{}},children:W.label},W.id))}),r.jsxs("div",{style:j.sumGrid,children:[r.jsx(Ta,{icon:r.jsx(Dx,{size:16}),label:"Income",value:o(A),color:Qr}),r.jsx(Ta,{icon:r.jsx(xm,{size:16}),label:"Expenses",value:o(m),color:ur}),r.jsx(Ta,{icon:p>=0?r.jsx(Yc,{size:16}):r.jsx(Vc,{size:16}),label:"Net savings",value:o(p),color:p>=0?Qr:ur})]}),R>0&&r.jsxs("div",{style:j.investNote,children:[r.jsx(jl,{size:13,color:Yr})," Includes ",o(R)," invested this period — counted as outgoing and deducted from net savings."]}),t.length>0&&r.jsxs("div",{style:j.card,children:[r.jsxs("div",{style:j.cardTitleRow,children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx(jl,{size:18,color:Yr}),r.jsxs("div",{children:[r.jsx("div",{style:j.cardTitle,children:"Assets & investments"}),r.jsx("div",{style:j.cardSub,children:"Across all your holdings, all time"})]})]}),r.jsx("div",{style:{...j.cardTotal,color:Yr},children:o(B)})]}),r.jsxs("div",{style:j.healthStats,children:[r.jsxs("div",{style:j.healthStat,children:[r.jsx("span",{style:j.healthStatV,children:o(b)}),r.jsx("span",{style:j.healthStatL,children:"Total invested"})]}),r.jsxs("div",{style:j.healthStat,children:[r.jsxs("span",{style:{...j.healthStatV,color:C>=0?Qr:ur},children:[C>=0?"+":"",o(C)]}),r.jsx("span",{style:j.healthStatL,children:"Unrealized gain"})]})]})]}),n?h.length===0&&v.length===0?r.jsx("div",{style:j.card,children:r.jsxs("div",{style:j.muted,children:["No transactions in this period. Add some under the ",r.jsx("b",{children:"Money"})," tab."]})}):r.jsxs(r.Fragment,{children:[r.jsx(av,{totalIn:A,totalOut:m}),r.jsxs("div",{style:j.twoCol,children:[r.jsx(Ou,{title:"Incoming",subtitle:"Where your money comes from",total:A,data:T(x),accent:Qr,cur:i}),r.jsx(Ou,{title:"Outgoing",subtitle:"Spending + money set aside in investments",total:m,data:D,accent:ur,cur:i})]})]}):r.jsx("div",{style:j.muted,children:"Loading…"})]})}function Ta({icon:e,label:t,value:n,color:o}){return r.jsxs("div",{style:j.sumCard,children:[r.jsx("div",{style:{...j.sumIcon,color:o,background:o+"1A"},children:e}),r.jsx("div",{style:j.sumLabel,children:t}),r.jsx("div",{style:{...j.sumVal,color:o},children:n})]})}function Ou({title:e,subtitle:t,total:n,data:o,accent:i,cur:s}){const[l,a]=c.useState(null);let d=0;const g=o.map(f=>{const A=n>0?d/n*100:0;d+=f.amount;const S=n>0?d/n*100:0;return{...f,start:A,end:S,color:f.color||Zc(f.category),pct:n>0?f.amount/n*100:0}}),h=l!=null?g[l]:null,x=g.length===1;return r.jsxs("div",{style:j.card,children:[r.jsxs("div",{style:j.cardTitleRow,children:[r.jsxs("div",{children:[r.jsx("div",{style:{...j.cardTitle,color:i},children:e}),r.jsx("div",{style:j.cardSub,children:t})]}),r.jsx("div",{style:{...j.cardTotal,color:i},children:wl(n,s.code)})]}),o.length===0?r.jsx("div",{style:j.muted,children:"Nothing logged."}):r.jsxs("div",{style:j.pieWrap,children:[r.jsxs("div",{style:j.pieChart,onMouseLeave:()=>a(null),children:[r.jsx("svg",{viewBox:"0 0 120 120",style:j.pieSvg,children:g.map((f,A)=>r.jsx("path",{d:lv(f.start,f.end,A===l,x),fill:f.color,onMouseEnter:()=>a(A),style:{cursor:"pointer",transition:"transform 0.15s, filter 0.15s",filter:A===l?"brightness(1.08)":"none"}},f.category))}),r.jsx("div",{style:{...j.pieHole,...h?{transform:"translate(-50%,-50%) scale(1.06)",boxShadow:`0 0 0 4px ${h.color}33`}:{}},children:h?r.jsxs(r.Fragment,{children:[r.jsx("span",{style:{...j.pieHoleVal,color:h.color,fontSize:13},children:uu(h.amount,s.code)}),r.jsxs("span",{style:j.pieHoleLbl,children:[Math.round(h.pct),"% · ",h.category]})]}):r.jsxs(r.Fragment,{children:[r.jsx("span",{style:j.pieHoleVal,children:uu(n,s.code)}),r.jsx("span",{style:j.pieHoleLbl,children:"total"})]})})]}),r.jsx("div",{style:j.pieLegend,children:g.map((f,A)=>r.jsxs("div",{style:{...j.legendRow,...A===l?j.legendRowOn:{}},onMouseEnter:()=>a(A),onMouseLeave:()=>a(null),children:[r.jsx("span",{style:{...j.dot,background:f.color}}),r.jsx("span",{style:j.legendName,children:f.category}),r.jsxs("span",{style:j.legendPct,children:[Math.round(f.pct),"%"]}),r.jsx("span",{style:j.legendAmt,children:wl(f.amount,s.code)})]},f.category))})]})]})}function lv(e,t,n,o){const d=n?6:0,g=(T,F,_=0,D=0)=>{const W=T/100*2*Math.PI-Math.PI/2;return[60+_+F*Math.cos(W),60+D+F*Math.sin(W)]},h=(e+t)/2/100*2*Math.PI-Math.PI/2,x=o?0:Math.cos(h)*d,f=o?0:Math.sin(h)*d;if(t-e>=99.999)return`M ${60+x} ${60+f-58} A 58 58 0 1 1 ${60+x-.01} ${60+f-58} L ${60+x-.01} ${60+f-35} A 35 35 0 1 0 ${60+x} ${60+f-35} Z`;const[A,S]=g(e,58,x,f),[v,R]=g(t,58,x,f),[m,p]=g(t,35,x,f),[b,B]=g(e,35,x,f),C=t-e>50?1:0;return`M ${A} ${S} A 58 58 0 ${C} 1 ${v} ${R} L ${m} ${p} A 35 35 0 ${C} 0 ${b} ${B} Z`}function av({totalIn:e,totalOut:t}){const n=e-t,o=e>0?n/e:0,i=e===0?0:Math.max(0,Math.min(100,Math.round(50+o*100)));let s,l,a;e===0?(s="No income logged",l="#9A968C",a="Add your income to see your financial health."):o>=.3?(s="Excellent",l="#3E9E6B",a="You're saving 30%+ of income — keep investing the surplus."):o>=.2?(s="Healthy",l="#4C9A6B",a="Solid savings rate. Consider automating a SIP with the surplus."):o>=.1?(s="Okay",l="#C9A227",a="Decent, but aim for 20%+. Trim your biggest expense category."):o>=0?(s="Tight",l="#C2773B",a="You're saving very little. Review recurring bills and EMIs."):(s="Overspending",l="#D1556E",a="You're spending more than you earn. Cut back to avoid debt.");const d=e>0?Math.min(100,Math.round(t/e*100)):0;return r.jsxs("div",{style:j.card,children:[r.jsxs("div",{style:j.cardTitleRow,children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx(ty,{size:18,color:l}),r.jsxs("div",{children:[r.jsx("div",{style:j.cardTitle,children:"Financial health"}),r.jsx("div",{style:j.cardSub,children:"Based on your savings rate this period"})]})]}),r.jsxs("div",{style:{textAlign:"right"},children:[r.jsx("div",{style:{...j.healthScore,color:l},children:e===0?"—":i}),r.jsx("div",{style:{...j.healthStatus,color:l},children:s})]})]}),r.jsx("div",{style:j.gaugeTrack,children:r.jsx("div",{style:{...j.gaugeFill,width:`${e===0?0:i}%`,background:l}})}),r.jsxs("div",{style:j.healthStats,children:[r.jsxs("div",{style:j.healthStat,children:[r.jsxs("span",{style:j.healthStatV,children:[e>0?Math.round(o*100):0,"%"]}),r.jsx("span",{style:j.healthStatL,children:"Savings rate"})]}),r.jsxs("div",{style:j.healthStat,children:[r.jsxs("span",{style:j.healthStatV,children:[d,"%"]}),r.jsx("span",{style:j.healthStatL,children:"of income spent"})]})]}),r.jsx("div",{style:{...j.tip,borderColor:l+"55",background:l+"12",color:l},children:a})]})}function dv({txns:e,expCats:t,investments:n,fixedItems:o,reload:i,money:s,cur:l}){const[a,d]=c.useState(""),[g,h]=c.useState("Salary"),[x,f]=c.useState(go),[A,S]=c.useState(""),[v,R]=c.useState(null),[m,p]=c.useState(null),[b,B]=c.useState(null),{deleteItem:C,toasts:T,handleUndo:F,handleDismiss:_}=er($.deleteTxn,$.restoreTxn,i),{deleteItem:D,toasts:W,handleUndo:w,handleDismiss:te}=er($.deleteExpenseLog,$.restoreExpenseLog,i),{deleteItem:z,toasts:re,handleUndo:be,handleDismiss:ge}=er($.deleteInvestment,$.restoreInvestment,i),ye=()=>{var k;return B({id:null,kind:"expense",name:"",amount:"",category_id:((k=t[0])==null?void 0:k.id)||"",invest_kind:"Stocks",note:""})},J=k=>{var ee;return B({id:k.id,kind:k.kind,name:k.name,amount:String(k.amount),category_id:k.category_id||((ee=t[0])==null?void 0:ee.id)||"",invest_kind:k.invest_kind||"Stocks",note:k.note||""})},H=async()=>{const k=b.name.trim(),ee=parseFloat(b.amount)||0;if(!k||ee<=0)return;const he={kind:b.kind,name:k,amount:ee,note:b.note.trim(),...b.kind==="expense"?{category_id:Number(b.category_id)}:{invest_kind:b.invest_kind}};b.id?await $.updateFixedItem(b.id,he):await $.createFixedItem(he),B(null),i()},se=async k=>{window.confirm(`Stop "${k.name}" from auto-posting each month? Past entries it already created will stay.`)&&(await $.deleteFixedItem(k.id),i())},V=async k=>{await $.updateFixedItem(k.id,{active:!k.active}),i()},de=()=>p({id:null,name:"",kind:"Stocks",invested:"",current_value:"",date:go,note:""}),I=k=>p({id:k.id,name:k.name,kind:k.kind,invested:String(k.invested),current_value:String(k.current_value),date:k.date,note:k.note||""}),ie=async()=>{const k=m.name.trim(),ee=parseFloat(m.invested)||0,he=parseFloat(m.current_value)||0;if(!k)return;const Ee={name:k,kind:m.kind,invested:ee,current_value:he,note:m.note.trim(),date:m.date};m.id?await $.updateInvestment(m.id,Ee):await $.createInvestment(Ee),p(null),i()},Ie=n.reduce((k,ee)=>k+ee.invested,0),Q=n.reduce((k,ee)=>k+ee.current_value,0),y=Q-Ie,E=async()=>{const k=parseFloat(a);!k||k<=0||(await $.createTxn({kind:"income",category:g,amount:k,note:A.trim(),date:x}),d(""),S(""),i())},P=k=>R({id:k.id,rawId:k.rawId,source:k.source,kind:k.kind,amount:String(k.amount),category:k.category,date:k.date,note:k.note||""}),G=(v==null?void 0:v.source)==="expense"?t.map(k=>k.name):(v==null?void 0:v.kind)==="income"?Pu:J0,oe=async()=>{const k=parseFloat(v.amount);if(!(!k||k<=0)){if(v.source==="expense"){const ee=t.find(he=>he.name===v.category);await $.updateExpenseLog(v.rawId,{amount:k,note:v.note.trim(),date:v.date,...ee?{category_id:ee.id}:{}})}else await $.updateTxn(v.id,{kind:v.kind,category:v.category,amount:k,note:v.note.trim(),date:v.date});R(null),i()}},pe=k=>{k.source==="expense"?D(k.rawId,k.category):C(k.id,k.category)},O=c.useMemo(()=>{const k={};return e.forEach(ee=>{(k[ee.date]=k[ee.date]||[]).push(ee)}),Object.entries(k).sort((ee,he)=>he[0].localeCompare(ee[0]))},[e]),M=k=>new Date(k+"T00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"});return r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:j.card,children:[r.jsx("div",{style:j.cardTitle,children:"Add income"}),r.jsxs("div",{style:j.cardSub,children:["Expenses are added from the ",r.jsx("b",{children:"Expenses"})," section and show up here automatically."]}),r.jsxs("div",{style:j.formGrid,children:[r.jsx("input",{type:"number",inputMode:"decimal",placeholder:"Amount",value:a,onChange:k=>d(k.target.value),onKeyDown:k=>k.key==="Enter"&&E(),style:j.input,autoFocus:!0}),r.jsx("select",{value:g,onChange:k=>h(k.target.value),style:j.input,children:Pu.map(k=>r.jsx("option",{children:k},k))}),r.jsx("input",{type:"date",value:x,max:go,onChange:k=>f(k.target.value),style:j.input})]}),r.jsx("input",{placeholder:"Note (optional)",value:A,onChange:k=>S(k.target.value),onKeyDown:k=>k.key==="Enter"&&E(),style:{...j.input,marginTop:8}}),r.jsxs("button",{onClick:E,style:{...j.addBtn,background:Qr},children:[r.jsx(Qe,{size:15})," Add income"]})]}),r.jsxs("div",{style:j.card,children:[r.jsxs("div",{style:j.cardTitleRow,children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx(xy,{size:18,color:Ia}),r.jsxs("div",{children:[r.jsx("div",{style:j.cardTitle,children:"Fixed items"}),r.jsx("div",{style:j.cardSub,children:"EMI, rent, SIP… auto-posted at the start of every billing cycle"})]})]}),r.jsxs("button",{onClick:ye,style:{...j.invAddBtn,background:Ia},children:[r.jsx(Qe,{size:14})," Add"]})]}),o.length===0?r.jsx("div",{style:j.muted,children:"No fixed items yet — add an EMI or rent to auto-post it every cycle."}):r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:o.map(k=>{var he;const ee=k.kind==="expense"?((he=t.find(Ee=>Ee.id===k.category_id))==null?void 0:he.name)||"Other":k.invest_kind||"Other";return r.jsxs("div",{style:{...j.invRow,opacity:k.active?1:.5},children:[r.jsx("span",{style:{...j.txnDot,background:k.kind==="expense"?ur:Yr}}),r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("div",{style:j.txnCat,children:k.name}),r.jsxs("div",{style:j.txnNote,children:[k.kind==="expense"?"Fixed expense":"Fixed investment"," · ",ee]})]}),r.jsxs("span",{style:{...j.txnAmt,color:k.kind==="expense"?ur:Yr},children:[s(k.amount),"/mo"]}),r.jsx("button",{onClick:()=>V(k),style:j.delBtn,title:k.active?"Pause":"Resume",children:k.active?r.jsx(Tm,{size:13}):r.jsx(Hc,{size:13})}),r.jsx("button",{onClick:()=>J(k),style:j.delBtn,children:r.jsx(xt,{size:13})}),r.jsx("button",{onClick:()=>se(k),style:j.delBtn,children:r.jsx(De,{size:14})})]},k.id)})})]}),r.jsxs("div",{style:j.card,children:[r.jsxs("div",{style:j.cardTitleRow,children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx(jl,{size:18,color:Yr}),r.jsxs("div",{children:[r.jsx("div",{style:j.cardTitle,children:"Investments"}),r.jsx("div",{style:j.cardSub,children:"Asset generation — what you've put in vs. what it's worth now"})]})]}),r.jsxs("button",{onClick:de,style:j.invAddBtn,children:[r.jsx(Qe,{size:14})," Add"]})]}),n.length===0?r.jsx("div",{style:j.muted,children:"No investments tracked yet."}):r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:j.healthStats,children:[r.jsxs("div",{style:j.healthStat,children:[r.jsx("span",{style:j.healthStatV,children:s(Ie)}),r.jsx("span",{style:j.healthStatL,children:"Invested"})]}),r.jsxs("div",{style:j.healthStat,children:[r.jsx("span",{style:j.healthStatV,children:s(Q)}),r.jsx("span",{style:j.healthStatL,children:"Current value"})]}),r.jsxs("div",{style:j.healthStat,children:[r.jsxs("span",{style:{...j.healthStatV,color:y>=0?Qr:ur},children:[y>=0?"+":"",s(y)]}),r.jsx("span",{style:j.healthStatL,children:"Gain / loss"})]})]}),r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,marginTop:4},children:n.map(k=>{const ee=k.current_value-k.invested,he=k.invested>0?ee/k.invested*100:0;return r.jsxs("div",{style:j.invRow,children:[r.jsx("span",{style:{...j.txnDot,background:Yr}}),r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("div",{style:j.txnCat,children:k.name}),r.jsxs("div",{style:j.txnNote,children:[k.kind," · invested ",s(k.invested)]})]}),r.jsxs("div",{style:{textAlign:"right"},children:[r.jsx("div",{style:j.txnAmt,children:s(k.current_value)}),r.jsxs("div",{style:{...j.invPct,color:ee>=0?Qr:ur},children:[ee>=0?"+":"",Math.round(he),"%"]})]}),r.jsx("button",{onClick:()=>I(k),style:j.delBtn,children:r.jsx(xt,{size:13})}),r.jsx("button",{onClick:()=>z(k.id,k.name),style:j.delBtn,children:r.jsx(De,{size:14})})]},k.id)})})]})]}),r.jsxs("div",{style:j.card,children:[r.jsx("div",{style:j.cardTitle,children:"History"}),O.length===0?r.jsx("div",{style:j.muted,children:"No transactions yet."}):r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:O.map(([k,ee])=>r.jsxs("div",{children:[r.jsx("div",{style:j.dateHead,children:M(k)}),ee.map(he=>(v==null?void 0:v.id)===he.id?r.jsxs("div",{style:j.editTxn,children:[r.jsxs("div",{style:j.formGrid,children:[r.jsx("input",{type:"number",inputMode:"decimal",value:v.amount,onChange:Ee=>R({...v,amount:Ee.target.value}),style:j.input}),r.jsx("select",{value:v.category,onChange:Ee=>R({...v,category:Ee.target.value}),style:j.input,children:G.map(Ee=>r.jsx("option",{children:Ee},Ee))}),r.jsx("input",{type:"date",value:v.date,max:go,onChange:Ee=>R({...v,date:Ee.target.value}),style:j.input})]}),r.jsx("input",{placeholder:"Note (optional)",value:v.note,onChange:Ee=>R({...v,note:Ee.target.value}),onKeyDown:Ee=>Ee.key==="Enter"&&oe(),style:{...j.input,marginTop:8}}),r.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[r.jsxs("button",{onClick:()=>R(null),style:j.editCancel,children:[r.jsx(De,{size:14})," Cancel"]}),r.jsxs("button",{onClick:oe,style:{...j.addBtn,marginTop:0,flex:1,background:v.kind==="income"?Qr:ur},children:[r.jsx(Ne,{size:15})," Save"]})]})]},he.id):r.jsxs("div",{style:j.txnRow,children:[r.jsx("span",{style:{...j.txnDot,background:Zc(he.category)}}),r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("div",{style:j.txnCat,children:he.category}),he.note&&r.jsx("div",{style:j.txnNote,children:he.note})]}),r.jsxs("span",{style:{...j.txnAmt,color:he.kind==="income"?Qr:ur},children:[he.kind==="income"?"+":"−",s(he.amount)]}),r.jsx("button",{onClick:()=>P(he),style:j.delBtn,children:r.jsx(xt,{size:13})}),r.jsx("button",{onClick:()=>pe(he),style:j.delBtn,children:r.jsx(De,{size:14})})]},he.id))]},k))})]}),m&&r.jsx("div",{style:j.overlay,onClick:()=>p(null),children:r.jsxs("div",{style:j.modal,onClick:k=>k.stopPropagation(),children:[r.jsxs("div",{style:j.modalHead,children:[r.jsx("span",{style:j.modalTitle,children:m.id?"Edit investment":"New investment"}),r.jsx("button",{onClick:()=>p(null),style:j.iconBtnPlain,children:r.jsx(De,{size:16})})]}),r.jsx("label",{style:j.label,children:"Name *"}),r.jsx("input",{autoFocus:!0,value:m.name,onChange:k=>p(ee=>({...ee,name:k.target.value})),placeholder:"e.g. Nifty Index Fund, HDFC FD…",style:j.input}),r.jsx("label",{style:j.label,children:"Type"}),r.jsx("select",{value:m.kind,onChange:k=>p(ee=>({...ee,kind:k.target.value})),style:j.input,children:Nu.map(k=>r.jsx("option",{children:k},k))}),r.jsxs("div",{style:j.formGrid,children:[r.jsxs("div",{children:[r.jsx("label",{style:j.label,children:"Invested"}),r.jsx("input",{type:"number",inputMode:"decimal",value:m.invested,onChange:k=>p(ee=>({...ee,invested:k.target.value})),placeholder:"0",style:j.input})]}),r.jsxs("div",{children:[r.jsx("label",{style:j.label,children:"Current value"}),r.jsx("input",{type:"number",inputMode:"decimal",value:m.current_value,onChange:k=>p(ee=>({...ee,current_value:k.target.value})),placeholder:"0",style:j.input})]}),r.jsxs("div",{children:[r.jsx("label",{style:j.label,children:"Date"}),r.jsx("input",{type:"date",value:m.date,max:go,onChange:k=>p(ee=>({...ee,date:k.target.value})),style:j.input})]})]}),r.jsx("label",{style:j.label,children:"Note (optional)"}),r.jsx("input",{value:m.note,onChange:k=>p(ee=>({...ee,note:k.target.value})),placeholder:"Folio no., broker, etc.",style:j.input}),r.jsxs("div",{style:j.modalActions,children:[r.jsx("button",{onClick:()=>p(null),style:j.cancelBtn,children:"Cancel"}),r.jsxs("button",{onClick:ie,disabled:!m.name.trim(),style:{...j.saveBtn,...m.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[r.jsx(Ne,{size:15})," ",m.id?"Save":"Add"]})]})]})}),b&&r.jsx("div",{style:j.overlay,onClick:()=>B(null),children:r.jsxs("div",{style:j.modal,onClick:k=>k.stopPropagation(),children:[r.jsxs("div",{style:j.modalHead,children:[r.jsx("span",{style:j.modalTitle,children:b.id?"Edit fixed item":"New fixed item"}),r.jsx("button",{onClick:()=>B(null),style:j.iconBtnPlain,children:r.jsx(De,{size:16})})]}),r.jsxs("div",{style:j.kindToggle,children:[r.jsxs("button",{onClick:()=>B(k=>({...k,kind:"expense"})),style:{...j.kindBtn,...b.kind==="expense"?{background:ur,color:"#fff",borderColor:ur}:{}},children:[r.jsx(xm,{size:15})," Expense"]}),r.jsxs("button",{onClick:()=>B(k=>({...k,kind:"investment"})),style:{...j.kindBtn,...b.kind==="investment"?{background:Yr,color:"#fff",borderColor:Yr}:{}},children:[r.jsx(jl,{size:15})," Investment"]})]}),r.jsx("label",{style:j.label,children:"Name *"}),r.jsx("input",{autoFocus:!0,value:b.name,onChange:k=>B(ee=>({...ee,name:k.target.value})),placeholder:b.kind==="expense"?"e.g. Home loan EMI, Rent…":"e.g. Monthly SIP — Nifty Index",style:j.input}),r.jsxs("div",{style:j.formGrid,children:[r.jsxs("div",{children:[r.jsx("label",{style:j.label,children:"Amount / month"}),r.jsx("input",{type:"number",inputMode:"decimal",value:b.amount,onChange:k=>B(ee=>({...ee,amount:k.target.value})),placeholder:"0",style:j.input})]}),r.jsxs("div",{children:[r.jsx("label",{style:j.label,children:b.kind==="expense"?"Category":"Type"}),b.kind==="expense"?r.jsx("select",{value:b.category_id,onChange:k=>B(ee=>({...ee,category_id:k.target.value})),style:j.input,children:t.map(k=>r.jsx("option",{value:k.id,children:k.name},k.id))}):r.jsx("select",{value:b.invest_kind,onChange:k=>B(ee=>({...ee,invest_kind:k.target.value})),style:j.input,children:Nu.map(k=>r.jsx("option",{children:k},k))})]})]}),r.jsx("label",{style:j.label,children:"Note (optional)"}),r.jsx("input",{value:b.note,onChange:k=>B(ee=>({...ee,note:k.target.value})),placeholder:"Loan account no., etc.",style:j.input}),r.jsx("p",{style:j.fixedHint,children:"Posts automatically at the start of every billing cycle (set in Settings → Currency). This one posts immediately for the current cycle when you save."}),r.jsxs("div",{style:j.modalActions,children:[r.jsx("button",{onClick:()=>B(null),style:j.cancelBtn,children:"Cancel"}),r.jsxs("button",{onClick:H,disabled:!b.name.trim()||!(parseFloat(b.amount)>0),style:{...j.saveBtn,background:Ia,...!b.name.trim()||!(parseFloat(b.amount)>0)?{opacity:.5,cursor:"not-allowed"}:{}},children:[r.jsx(Ne,{size:15})," ",b.id?"Save":"Add"]})]})]})}),r.jsx(tr,{toasts:T,onUndo:F,onDismiss:_}),r.jsx(tr,{toasts:W,onUndo:w,onDismiss:te}),r.jsx(tr,{toasts:re,onUndo:be,onDismiss:ge})]})}function cv({money:e,cur:t}){return r.jsxs(r.Fragment,{children:[r.jsx(gv,{money:e,cur:t}),r.jsx(pv,{money:e,cur:t})]})}function On({label:e,value:t,set:n,min:o,max:i,step:s,suffix:l}){return r.jsxs("div",{style:j.field,children:[r.jsxs("div",{style:j.fieldTop,children:[r.jsx("span",{style:j.fieldLabel,children:e}),r.jsxs("div",{style:j.fieldInputWrap,children:[r.jsx("input",{type:"number",value:t,onChange:a=>n(a.target.value),style:j.fieldInput}),l&&r.jsx("span",{style:j.fieldSuffix,children:l})]})]}),r.jsx("input",{type:"range",min:o,max:i,step:s,value:t,onChange:a=>n(a.target.value),style:j.range})]})}function gv({money:e,cur:t}){const[n,o]=c.useState(3e4),[i,s]=c.useState(12),[l,a]=c.useState(15),{invested:d,futureValue:g,gains:h,yearly:x}=c.useMemo(()=>{const A=Math.max(0,parseFloat(n)||0),S=Math.max(0,parseFloat(i)||0),v=Math.max(0,Math.min(60,parseInt(l)||0)),R=S/12/100,m=C=>C<=0?0:R===0?A*C:A*((Math.pow(1+R,C)-1)/R)*(1+R),p=[];for(let C=1;C<=v;C++)p.push({year:C,invested:A*12*C,value:m(C*12)});const b=m(v*12),B=A*12*v;return{invested:B,futureValue:b,gains:b-B,yearly:p}},[n,i,l]),f=Math.max(1,...x.map(A=>A.value));return r.jsxs("div",{style:j.card,children:[r.jsx("div",{style:j.cardTitleRow,children:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx(my,{size:18,color:"#3A7CA5"}),r.jsxs("div",{children:[r.jsx("div",{style:j.cardTitle,children:"SIP projection"}),r.jsx("div",{style:j.cardSub,children:"Mutual fund / SIP future value"})]})]})}),r.jsx(On,{label:"Monthly investment",value:n,set:o,min:500,max:5e5,step:500,suffix:t.symbol}),r.jsx(On,{label:"Expected return (p.a.)",value:i,set:s,min:1,max:30,step:.5,suffix:"%"}),r.jsx(On,{label:"Time period",value:l,set:a,min:1,max:40,step:1,suffix:"yrs"}),r.jsxs("div",{style:j.resultHero,children:[r.jsx("div",{style:j.resultLabel,children:"Projected wealth"}),r.jsx("div",{style:{...j.resultVal,color:"#3A7CA5"},children:e(g)})]}),r.jsxs("div",{style:j.splitRow,children:[r.jsxs("div",{style:j.splitItem,children:[r.jsx("span",{style:j.splitV,children:e(d)}),r.jsx("span",{style:j.splitL,children:"Invested"})]}),r.jsxs("div",{style:j.splitItem,children:[r.jsx("span",{style:{...j.splitV,color:"#3E9E6B"},children:e(h)}),r.jsx("span",{style:j.splitL,children:"Est. returns"})]})]}),x.length>0&&r.jsxs("div",{style:j.chartWrap,children:[r.jsx("div",{style:j.chartBars,children:x.map(A=>r.jsx("div",{style:j.chartCol,title:`Year ${A.year}: ${e(A.value)}`,children:r.jsx("div",{style:{...j.chartStack,height:`${A.value/f*100}%`},children:r.jsx("div",{style:{...j.chartGain,height:`${(1-A.invested/A.value)*100}%`}})})},A.year))}),r.jsxs("div",{style:j.chartAxis,children:[r.jsx("span",{children:"Yr 1"}),r.jsxs("span",{style:{marginLeft:"auto"},children:["Yr ",x.length]})]}),r.jsxs("div",{style:j.legend,children:[r.jsxs("span",{style:j.legendItem,children:[r.jsx("span",{style:{...j.legendDot,background:"#9DBFD6"}})," Invested"]}),r.jsxs("span",{style:j.legendItem,children:[r.jsx("span",{style:{...j.legendDot,background:"#3E9E6B"}})," Returns"]})]})]})]})}function Hu(e,t,n,o=0,i=0){let s=Math.max(0,e-i),l=0,a=0,d=i;const g=1200;for(;s>.01&&a<g;){const h=s*t;let x=n+o,f=x-h;if(f<=0)return{months:1/0,totalInterest:1/0,totalPaid:1/0};f>s&&(f=s,x=s+h),s-=f,l+=h,d+=x,a++}return{months:a,totalInterest:l,totalPaid:d}}const Gu=e=>{if(!isFinite(e))return"—";const t=Math.floor(e/12),n=e%12;return(t?`${t}y `:"")+`${n}m`},uv=e=>{if(!isFinite(e))return"—";const t=new Date;return t.setMonth(t.getMonth()+e),t.toLocaleDateString("en-US",{month:"short",year:"numeric"})};function pv({money:e,cur:t}){const[n,o]=c.useState(2e6),[i,s]=c.useState(9),[l,a]=c.useState(20),[d,g]=c.useState(5e5),[h,x]=c.useState("once"),[f,A]=c.useState("tenure"),S=c.useMemo(()=>{const b=Math.max(0,parseFloat(n)||0),B=Math.max(0,parseFloat(i)||0)/12/100,C=Math.max(1,Math.round((parseFloat(l)||0)*12)),T=B===0?b/C:b*B*Math.pow(1+B,C)/(Math.pow(1+B,C)-1);return{P:b,i:B,n:C,emi:T,totalPay:T*C,totalInterest:T*C-b}},[n,i,l]),v=h==="monthly"?"tenure":f,R=c.useMemo(()=>{const{P:b,i:B,n:C,emi:T,totalInterest:F}=S,_=Math.max(0,parseFloat(d)||0);if(_<=0)return null;let D=T,W=C,w=F,te=S.totalPay;if(h==="once"&&v==="emi"){const z=Math.max(0,b-_);D=B===0?z/C:z*B*Math.pow(1+B,C)/(Math.pow(1+B,C)-1),W=C,w=D*C-z,te=_+D*C}else if(h==="once"){const z=Hu(b,B,T,0,_);W=z.months,w=z.totalInterest,te=z.totalPaid}else{const z=Hu(b,B,T,_,0);W=z.months,w=z.totalInterest,te=z.totalPaid}return{newEMI:D,newMonths:W,newInterest:w,totalPaid:te,interestSaved:Math.max(0,F-w),monthsSaved:Math.max(0,C-(isFinite(W)?W:C))}},[S,d,h,v]),m=S.totalPay>0?S.P/S.totalPay*100:0,p=h==="once"?Math.max(1e5,Math.round(S.P)):Math.max(5e4,Math.round(S.emi*3));return r.jsxs("div",{style:j.card,children:[r.jsx("div",{style:j.cardTitleRow,children:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx(iy,{size:18,color:"#C2536B"}),r.jsxs("div",{children:[r.jsx("div",{style:j.cardTitle,children:"EMI calculator"}),r.jsx("div",{style:j.cardSub,children:"Loan / mortgage monthly payment"})]})]})}),r.jsx(On,{label:"Loan amount",value:n,set:o,min:5e4,max:5e7,step:5e4,suffix:t.symbol}),r.jsx(On,{label:"Interest rate (p.a.)",value:i,set:s,min:1,max:24,step:.1,suffix:"%"}),r.jsx(On,{label:"Tenure",value:l,set:a,min:1,max:30,step:1,suffix:"yrs"}),r.jsxs("div",{style:j.resultHero,children:[r.jsx("div",{style:j.resultLabel,children:"Monthly EMI"}),r.jsx("div",{style:{...j.resultVal,color:"#C2536B"},children:e(S.emi)})]}),r.jsxs("div",{style:j.emiSplitTrack,children:[r.jsx("div",{style:{width:`${m}%`,background:"#5B7C99",height:"100%"}}),r.jsx("div",{style:{width:`${100-m}%`,background:"#C2536B",height:"100%"}})]}),r.jsxs("div",{style:j.splitRow,children:[r.jsxs("div",{style:j.splitItem,children:[r.jsx("span",{style:{...j.splitV,color:"#5B7C99"},children:e(S.P)}),r.jsx("span",{style:j.splitL,children:"Principal"})]}),r.jsxs("div",{style:j.splitItem,children:[r.jsx("span",{style:{...j.splitV,color:"#C2536B"},children:e(S.totalInterest)}),r.jsx("span",{style:j.splitL,children:"Total interest"})]}),r.jsxs("div",{style:j.splitItem,children:[r.jsx("span",{style:j.splitV,children:e(S.totalPay)}),r.jsx("span",{style:j.splitL,children:"Total payable"})]})]}),r.jsx("div",{style:j.subDivider}),r.jsx("div",{style:j.subTitle,children:"Prepayment planner"}),r.jsx("div",{style:j.cardSub,children:"See what an extra payment does to your loan."}),r.jsx("div",{style:{marginTop:14},children:r.jsx(On,{label:"Prepayment amount",value:d,set:g,min:0,max:p,step:h==="once"?25e3:1e3,suffix:t.symbol})}),r.jsxs("div",{style:j.segGroup,children:[r.jsx("span",{style:j.segLbl,children:"Type"}),r.jsxs("div",{style:j.segRow,children:[r.jsx(Bs,{label:"One-time",on:h==="once",onClick:()=>x("once")}),r.jsx(Bs,{label:"Every month",on:h==="monthly",onClick:()=>x("monthly")})]})]}),r.jsxs("div",{style:j.segGroup,children:[r.jsx("span",{style:j.segLbl,children:"Strategy"}),r.jsxs("div",{style:j.segRow,children:[r.jsx(Bs,{label:"Reduce tenure",on:v==="tenure",onClick:()=>A("tenure")}),r.jsx(Bs,{label:"Reduce EMI",on:v==="emi",disabled:h==="monthly",onClick:()=>A("emi")})]})]}),h==="monthly"&&r.jsx("div",{style:j.note,children:"An extra monthly payment always shortens the tenure. Switch to a one-time prepayment to reduce your EMI instead."}),R?r.jsxs("div",{style:j.cmpCard,children:[r.jsxs("div",{style:j.cmpRow,children:[r.jsx("span",{style:j.cmpLbl,children:"New EMI"}),r.jsxs("span",{style:j.cmpVal,children:[e(R.newEMI),R.newEMI<S.emi-1&&r.jsxs("span",{style:j.cmpWas,children:[" was ",e(S.emi)]})]})]}),r.jsxs("div",{style:j.cmpRow,children:[r.jsx("span",{style:j.cmpLbl,children:"New tenure"}),r.jsxs("span",{style:j.cmpVal,children:[Gu(R.newMonths)," ",r.jsxs("span",{style:j.cmpWas,children:["· paid off ",uv(R.newMonths)]})]})]}),r.jsxs("div",{style:j.cmpRow,children:[r.jsx("span",{style:j.cmpLbl,children:"Total interest"}),r.jsx("span",{style:j.cmpVal,children:e(R.newInterest)})]}),r.jsxs("div",{style:j.cmpRow,children:[r.jsx("span",{style:j.cmpLbl,children:"Total payable"}),r.jsx("span",{style:j.cmpVal,children:e(R.totalPaid)})]}),r.jsxs("div",{style:j.saveRow,children:["You save ",e(R.interestSaved)," in interest",R.monthsSaved>0?` · ${Gu(R.monthsSaved)} sooner`:""]})]}):r.jsx("div",{style:j.muted,children:"Enter a prepayment amount to see the impact."})]})}function Bs({label:e,on:t,onClick:n,disabled:o}){return r.jsx("button",{onClick:o?void 0:n,disabled:o,style:{...j.seg,...t?j.segOn:{},...o?j.segDisabled:{}},children:e})}const j={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},tabs:{display:"flex",gap:7,marginBottom:18,flexWrap:"wrap"},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:10,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},presetRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},preset:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:18,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},presetOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},sumGrid:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:16},sumCard:{background:"var(--surface)",borderRadius:14,padding:"14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},sumIcon:{width:30,height:30,borderRadius:9,display:"grid",placeItems:"center",marginBottom:8},sumLabel:{fontSize:11.5,color:"var(--text-3)",fontWeight:600},sumVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:2,letterSpacing:"-0.01em",wordBreak:"break-word"},card:{background:"var(--surface)",borderRadius:16,padding:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)",marginBottom:16},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14,gap:10},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardSub:{fontSize:11.5,color:"var(--text-3)",marginTop:2},cardTotal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"14px 0"},twoCol:{display:"grid",gridTemplateColumns:"1fr",gap:0},dot:{width:10,height:10,borderRadius:3,flexShrink:0},pieWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap"},pieChart:{position:"relative",width:132,height:132,flexShrink:0,margin:"0 auto"},pieSvg:{position:"absolute",inset:0,width:"100%",height:"100%",overflow:"visible"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:80,height:80,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",transition:"transform 0.15s, box-shadow 0.15s",pointerEvents:"none",textAlign:"center",padding:4,boxSizing:"border-box"},pieHoleVal:{fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:160,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8,borderRadius:8,padding:"3px 5px",margin:"-3px -5px",cursor:"default",transition:"background 0.15s"},legendRowOn:{background:"var(--surface-2)"},legendName:{flex:1,fontSize:12.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},legendPct:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,width:34,textAlign:"right"},legendAmt:{fontSize:12.5,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:64,textAlign:"right"},investNote:{display:"flex",alignItems:"center",gap:6,fontSize:11.5,color:"var(--text-3)",marginBottom:14,marginTop:-4},healthScore:{fontSize:32,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1},healthStatus:{fontSize:12.5,fontWeight:700,marginTop:2},gaugeTrack:{height:10,background:"var(--surface-2)",borderRadius:6,overflow:"hidden",marginBottom:14},gaugeFill:{height:"100%",borderRadius:6,transition:"width 0.4s"},healthStats:{display:"flex",gap:24,marginBottom:12},healthStat:{display:"flex",flexDirection:"column"},healthStatV:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},healthStatL:{fontSize:11,color:"var(--text-3)",fontWeight:600},tip:{fontSize:12.5,lineHeight:1.5,padding:"10px 12px",borderRadius:10,border:"1px solid",fontWeight:500},kindToggle:{display:"flex",gap:8,marginBottom:12},kindBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},formGrid:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8},input:{border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},addBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",marginTop:10,border:"none",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},invAddBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"7px 13px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",flexShrink:0},invRow:{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid var(--border)"},invPct:{fontSize:11,fontWeight:700,marginTop:1},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtnPlain:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},fixedHint:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.5,marginTop:10,marginBottom:0},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},dateHead:{fontSize:11,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8},txnRow:{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid var(--border)"},txnDot:{width:9,height:9,borderRadius:"50%",flexShrink:0},txnCat:{fontSize:13.5,fontWeight:600},txnNote:{fontSize:11.5,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},txnAmt:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},delBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",flexShrink:0},editTxn:{background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:12,padding:12,margin:"6px 0"},editCancel:{display:"flex",alignItems:"center",justifyContent:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},field:{marginBottom:16},fieldTop:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},fieldLabel:{fontSize:13,fontWeight:600,color:"var(--text-2)"},fieldInputWrap:{display:"flex",alignItems:"center",gap:4,border:"1px solid var(--border)",borderRadius:8,padding:"5px 10px",background:"var(--surface-2)"},fieldInput:{border:"none",background:"none",outline:"none",width:90,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},fieldSuffix:{fontSize:12,color:"var(--text-3)",fontWeight:600},range:{width:"100%",accentColor:"var(--accent)",cursor:"pointer"},resultHero:{textAlign:"center",padding:"14px 0 6px"},resultLabel:{fontSize:12,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em"},resultVal:{fontSize:34,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:2,wordBreak:"break-word"},splitRow:{display:"flex",gap:10,marginTop:10},splitItem:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",background:"var(--surface-2)",borderRadius:10,padding:"10px 6px"},splitV:{fontSize:14.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",wordBreak:"break-word"},splitL:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginTop:2},chartWrap:{marginTop:18},chartBars:{display:"flex",alignItems:"flex-end",gap:3,height:90},chartCol:{flex:1,height:"100%",display:"flex",alignItems:"flex-end"},chartStack:{width:"100%",background:"#9DBFD6",borderRadius:"3px 3px 0 0",minHeight:2,position:"relative",display:"flex",flexDirection:"column",justifyContent:"flex-start"},chartGain:{width:"100%",background:"#3E9E6B",borderRadius:"3px 3px 0 0"},chartAxis:{display:"flex",fontSize:10,color:"var(--text-3)",fontWeight:600,marginTop:6},legend:{display:"flex",gap:16,justifyContent:"center",marginTop:10},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)",fontWeight:600},legendDot:{width:10,height:10,borderRadius:3},emiSplitTrack:{display:"flex",height:12,borderRadius:6,overflow:"hidden",marginTop:16,border:"1px solid var(--border)"},subDivider:{height:1,background:"var(--border)",margin:"20px 0 14px"},subTitle:{fontSize:15,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},segGroup:{marginBottom:12},segLbl:{fontSize:12,fontWeight:600,color:"var(--text-3)",display:"block",marginBottom:6},segRow:{display:"flex",gap:8},seg:{flex:1,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},segOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},segDisabled:{opacity:.4,cursor:"not-allowed"},note:{fontSize:12,lineHeight:1.5,color:"var(--text-3)",background:"var(--surface-2)",borderRadius:9,padding:"9px 11px",marginBottom:12},cmpCard:{background:"var(--surface-2)",borderRadius:12,padding:"12px 14px",marginTop:4},cmpRow:{display:"flex",justifyContent:"space-between",alignItems:"baseline",padding:"6px 0",borderBottom:"1px solid var(--border)",gap:10},cmpLbl:{fontSize:12.5,color:"var(--text-2)",fontWeight:600},cmpVal:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",textAlign:"right"},cmpWas:{fontSize:11,color:"var(--text-3)",fontWeight:500,fontFamily:"'Inter',system-ui,sans-serif"},saveRow:{marginTop:12,background:"rgba(62,158,107,0.12)",color:"#3E9E6B",borderRadius:9,padding:"10px 12px",fontSize:13,fontWeight:700,textAlign:"center"}},Pd=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Ea={Monday:"Mon",Tuesday:"Tue",Wednesday:"Wed",Thursday:"Thu",Friday:"Fri",Saturday:"Sat",Sunday:"Sun"},di=()=>Pd[(new Date().getDay()+6)%7],Nr={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"},Uu=Object.keys(Nr),Ba=21,Vu="kickstart_tags",Da=e=>{if(!e)return"";const t=e.trim();if(/^[A-Za-z0-9_-]{11}$/.test(t))return t;const n=t.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return n?n[1]:""},Yu=e=>{if(!e||!String(e).trim())return null;const t=String(e).split(":").map(n=>parseInt(n.trim(),10));return t.some(n=>isNaN(n)||n<0)?null:t.reduce((n,o)=>n*60+o,0)},Ds=e=>{if(e==null)return"";const t=Math.max(0,e|0);return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`},bv=e=>`https://www.youtube.com/embed/${e.youtube_id}?start=${e.start_sec||0}`+(e.end_sec?`&end=${e.end_sec}`:"")+"&autoplay=1&rel=0",mv=()=>({id:null,url:"",title:"",start:"",end:"",days:[di()],pillars:[],customs:[]});function hv(){const[e,t]=c.useState([]),[n,o]=c.useState([]),[i,s]=c.useState(!1),[l,a]=c.useState({type:"day",value:di()}),[d,g]=c.useState(null),[h,x]=c.useState(null),[f,A]=c.useState(""),S=c.useCallback(async()=>{try{const[z,re]=await Promise.all([$.getKickstart(),$.getSetting(Vu)]);t(z),o(Array.isArray(re==null?void 0:re.value)?re.value:[])}catch{}s(!0)},[]);c.useEffect(()=>{S()},[S]);const{deleteItem:v,toasts:R,handleUndo:m,handleDismiss:p}=er($.deleteKickstart,$.restoreKickstart,S);c.useEffect(()=>{if(!h)return;const z=e.find(J=>J.id===h);if(!z)return;const re=z.end_sec?Math.max(1,z.end_sec-(z.start_sec||0)):1/0;let be=0;const ge=10,ye=setInterval(()=>{if(document.hidden)return;const J=re-be;if(J<=0){clearInterval(ye);return}const H=Math.min(ge,J);be+=H,$.addScreenTime("kickstart",Math.round(H)).catch(()=>{})},ge*1e3);return()=>clearInterval(ye)},[h,e]);const b=z=>{o(z),$.setSetting(Vu,z).catch(()=>{})},B=()=>{const z=f.trim();!z||n.length>=Ba||n.includes(z)||(b([...n,z]),g(re=>re&&!re.customs.includes(z)?{...re,customs:[...re.customs,z]}:re),A(""))},C=z=>b(n.filter(re=>re!==z)),T=(z,re)=>g(be=>({...be,[z]:be[z].includes(re)?be[z].filter(ge=>ge!==re):[...be[z],re]})),F=z=>g({id:z.id,url:`https://youtu.be/${z.youtube_id}`,title:z.title,start:Ds(z.start_sec),end:z.end_sec?Ds(z.end_sec):"",days:[...z.days],pillars:[...z.pillars],customs:[...z.customs]}),_=async()=>{const z=Da(d.url);if(!z||d.days.length===0||!d.title.trim())return;const re={youtube_id:z,title:d.title.trim(),start_sec:Yu(d.start)||0,end_sec:Yu(d.end),days:d.days,pillars:d.pillars,customs:d.customs};d.id?await $.updateKickstart(d.id,re):await $.createKickstart(re),g(null),S()},D=c.useMemo(()=>e.filter(z=>l.type==="all"?!0:l.type==="day"?z.days.includes(l.value):l.type==="pillar"?z.pillars.includes(l.value):l.type==="custom"?z.customs.includes(l.value):!0),[e,l]),W=(z,re)=>l.type===z&&l.value===re,w=d?[!Da(d.url)&&"a valid YouTube link",!d.title.trim()&&"a title",d.days.length===0&&"at least one day"].filter(Boolean):[],te=!!d&&w.length===0;return r.jsxs("div",{style:ke.page,children:[r.jsxs("div",{style:ke.head,children:[r.jsxs("div",{children:[r.jsx("div",{style:ke.eyebrow,children:"Anvil · Kickstart"}),r.jsx("h1",{style:ke.h1,children:"Kickstart"}),r.jsxs("div",{style:ke.subhead,children:["Your motivation hub — the right push for ",di(),"."]})]}),!d&&r.jsxs("button",{onClick:()=>g(mv()),style:ke.addBtn,children:[r.jsx(Qe,{size:15})," Add video"]})]}),d&&r.jsxs("div",{style:ke.card,children:[r.jsx("div",{style:ke.cardTitle,children:d.id?"Edit video":"Add video"}),r.jsx("input",{placeholder:"YouTube link (or video ID)",value:d.url,onChange:z=>g({...d,url:z.target.value}),style:ke.input,autoFocus:!0}),d.url&&!Da(d.url)&&r.jsx("div",{style:ke.warn,children:"Couldn't find a YouTube video ID in that link."}),r.jsx("input",{placeholder:"Title (required)",value:d.title,onChange:z=>g({...d,title:z.target.value}),style:{...ke.input,marginTop:8}}),r.jsxs("div",{style:ke.trimRow,children:[r.jsx(Am,{size:15,color:"var(--text-3)"}),r.jsxs("label",{style:ke.trimField,children:[r.jsx("span",{style:ke.trimLbl,children:"Start"}),r.jsx("input",{placeholder:"0:30",value:d.start,onChange:z=>g({...d,start:z.target.value}),style:ke.trimInput})]}),r.jsx("span",{style:ke.trimArrow,children:"→"}),r.jsxs("label",{style:ke.trimField,children:[r.jsx("span",{style:ke.trimLbl,children:"End"}),r.jsx("input",{placeholder:"end (optional)",value:d.end,onChange:z=>g({...d,end:z.target.value}),style:ke.trimInput})]})]}),r.jsx("div",{style:ke.hint,children:"Only this trimmed part plays. Use m:ss (e.g. 1:30). Leave End blank to play to the end."}),r.jsxs("div",{style:ke.tagBlock,children:[r.jsxs("div",{style:ke.tagLabel,children:["Days ",r.jsx("span",{style:ke.req,children:"required"})]}),r.jsx("div",{style:ke.chipRow,children:Pd.map(z=>r.jsx("button",{onClick:()=>T("days",z),style:{...ke.chip,...d.days.includes(z)?ke.chipOnDark:{}},children:Ea[z]},z))})]}),r.jsxs("div",{style:ke.tagBlock,children:[r.jsxs("div",{style:ke.tagLabel,children:["Pillars ",r.jsx("span",{style:ke.opt,children:"optional"})]}),r.jsx("div",{style:ke.chipRow,children:Uu.map(z=>{const re=d.pillars.includes(z);return r.jsxs("button",{onClick:()=>T("pillars",z),style:{...ke.chip,...re?{background:Nr[z],color:"#fff",borderColor:Nr[z]}:{}},children:[r.jsx("span",{style:{...ke.dot,background:re?"#fff":Nr[z]}}),z]},z)})})]}),r.jsxs("div",{style:ke.tagBlock,children:[r.jsxs("div",{style:ke.tagLabel,children:["Custom tags ",r.jsxs("span",{style:ke.opt,children:["optional · ",n.length,"/",Ba]})]}),r.jsxs("div",{style:ke.chipRow,children:[n.map(z=>r.jsxs("span",{style:{...ke.chip,...d.customs.includes(z)?ke.chipOnAccent:{},paddingRight:4},children:[r.jsx("button",{onClick:()=>T("customs",z),style:ke.chipInner,children:z}),r.jsx("button",{onClick:()=>C(z),style:ke.chipX,title:"Delete tag",children:r.jsx(De,{size:11})})]},z)),n.length===0&&r.jsx("span",{style:ke.muted,children:"No custom tags yet."})]}),n.length<Ba&&r.jsxs("div",{style:ke.newTagRow,children:[r.jsx("input",{placeholder:"New custom tag…",value:f,onChange:z=>A(z.target.value),onKeyDown:z=>z.key==="Enter"&&B(),style:{...ke.input,padding:"7px 10px"}}),r.jsx("button",{onClick:B,style:ke.smallBtn,children:r.jsx(Qe,{size:14})})]})]}),!te&&r.jsxs("div",{style:ke.warn,children:["Add ",w.join(", ")," to save."]}),r.jsxs("div",{style:ke.formActions,children:[r.jsxs("button",{onClick:()=>g(null),style:ke.cancelBtn,children:[r.jsx(De,{size:14})," Cancel"]}),r.jsxs("button",{onClick:_,disabled:!te,style:{...ke.saveBtn,...te?{}:ke.saveDisabled},children:[r.jsx(Ne,{size:15})," ",d.id?"Save":"Add video"]})]})]}),r.jsxs("div",{style:ke.filterCard,children:[r.jsx("button",{onClick:()=>a({type:"all"}),style:{...ke.fChip,...l.type==="all"?ke.fChipOnDark:{}},children:"All"}),r.jsx("span",{style:ke.fDivider}),Pd.map(z=>r.jsxs("button",{onClick:()=>a({type:"day",value:z}),style:{...ke.fChip,...W("day",z)?ke.fChipOnDark:{},...z===di()?ke.fToday:{}},children:[Ea[z],z===di()?" ·":""]},z)),r.jsx("span",{style:ke.fDivider}),Uu.map(z=>r.jsxs("button",{onClick:()=>a({type:"pillar",value:z}),style:{...ke.fChip,...W("pillar",z)?{background:Nr[z],color:"#fff",borderColor:Nr[z]}:{}},children:[r.jsx("span",{style:{...ke.dot,background:W("pillar",z)?"#fff":Nr[z]}}),z]},z)),n.length>0&&r.jsx("span",{style:ke.fDivider}),n.map(z=>r.jsxs("button",{onClick:()=>a({type:"custom",value:z}),style:{...ke.fChip,...W("custom",z)?ke.fChipOnAccent:{}},children:[r.jsx(Bd,{size:11})," ",z]},z))]}),i?D.length===0?r.jsx("div",{style:ke.empty,children:e.length===0?"No videos yet — add your first motivation clip.":"No videos for this tag."}):r.jsx("div",{style:ke.grid,children:D.map(z=>r.jsxs("div",{style:ke.videoCard,children:[r.jsx("div",{style:ke.thumbWrap,children:h===z.id?r.jsx("iframe",{src:bv(z),title:z.title||z.youtube_id,style:ke.iframe,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):r.jsxs("button",{onClick:()=>x(z.id),style:ke.thumbBtn,children:[r.jsx("img",{src:`https://img.youtube.com/vi/${z.youtube_id}/hqdefault.jpg`,alt:"",style:ke.thumb}),r.jsx("span",{style:ke.playOverlay,children:r.jsx(Hc,{size:22,color:"#fff",fill:"#fff"})}),r.jsxs("span",{style:ke.trimBadge,children:[Ds(z.start_sec),z.end_sec?` – ${Ds(z.end_sec)}`:"+"]})]})}),r.jsxs("div",{style:ke.videoBody,children:[r.jsx("div",{style:ke.videoTitle,children:z.title||"Untitled clip"}),r.jsxs("div",{style:ke.tagWrap,children:[z.days.map(re=>r.jsx("span",{style:ke.dayTag,children:Ea[re]},re)),z.pillars.map(re=>r.jsx("span",{style:{...ke.pillTag,color:Nr[re]||"var(--text-2)",borderColor:Nr[re]||"var(--border)"},children:re},re)),z.customs.map(re=>r.jsx("span",{style:ke.customTag,children:re},re))]}),r.jsxs("div",{style:ke.cardActions,children:[r.jsx("button",{onClick:()=>F(z),style:ke.iconBtn,title:"Edit",children:r.jsx(xt,{size:13})}),r.jsx("button",{onClick:()=>v(z.id,z.title||"video"),style:ke.iconBtn,title:"Delete",children:r.jsx(De,{size:14})})]})]})]},z.id))}):r.jsx("div",{style:ke.muted,children:"Loading…"}),r.jsx(tr,{toasts:R,onUndo:m,onDismiss:p})]})}const ke={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:1e3,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},input:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},warn:{fontSize:11.5,color:"#C2773B",marginTop:5,fontWeight:600},hint:{fontSize:11.5,color:"var(--text-3)",marginTop:6,lineHeight:1.4},trimRow:{display:"flex",alignItems:"flex-end",gap:10,marginTop:10},trimField:{display:"flex",flexDirection:"column",gap:4,flex:1},trimLbl:{fontSize:11,color:"var(--text-2)",fontWeight:600},trimInput:{border:"1px solid var(--border)",borderRadius:8,padding:"8px 10px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},trimArrow:{color:"var(--text-3)",paddingBottom:9},tagBlock:{marginTop:14},tagLabel:{fontSize:12,fontWeight:700,color:"var(--text-2)",marginBottom:7},req:{fontSize:10,fontWeight:700,color:"#C2536B",textTransform:"uppercase",marginLeft:6},opt:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",marginLeft:6},chipRow:{display:"flex",gap:6,flexWrap:"wrap"},chip:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},chipOnDark:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},chipOnAccent:{background:"var(--accent)",color:"#fff",borderColor:"var(--accent)"},chipInner:{border:"none",background:"none",color:"inherit",cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:600,padding:0},chipX:{border:"none",background:"rgba(0,0,0,0.12)",color:"inherit",cursor:"pointer",display:"grid",placeItems:"center",borderRadius:"50%",width:16,height:16,padding:0},newTagRow:{display:"flex",gap:6,marginTop:8,maxWidth:280},smallBtn:{border:"none",background:"var(--accent)",color:"#fff",width:34,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},dot:{width:8,height:8,borderRadius:"50%",flexShrink:0,display:"inline-block"},formActions:{display:"flex",gap:8,marginTop:16},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:"var(--accent)",color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"},filterCard:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:12,marginBottom:18},fChip:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},fChipOnDark:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},fChipOnAccent:{background:"var(--accent)",color:"#fff",borderColor:"var(--accent)"},fToday:{borderColor:"var(--accent)",borderWidth:2},fDivider:{width:1,alignSelf:"stretch",background:"var(--border)",margin:"0 2px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:14},videoCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},thumbWrap:{position:"relative",width:"100%",aspectRatio:"16 / 9",background:"#000"},thumbBtn:{border:"none",padding:0,margin:0,cursor:"pointer",width:"100%",height:"100%",position:"relative",display:"block",background:"#000"},thumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},playOverlay:{position:"absolute",inset:0,display:"grid",placeItems:"center",background:"rgba(0,0,0,0.28)"},trimBadge:{position:"absolute",bottom:8,right:8,background:"rgba(0,0,0,0.75)",color:"#fff",fontSize:11,fontWeight:700,padding:"2px 7px",borderRadius:6,fontFamily:"'Fraunces',Georgia,serif"},iframe:{width:"100%",height:"100%",border:"none",display:"block"},videoBody:{padding:"12px 13px",display:"flex",flexDirection:"column",gap:8},videoTitle:{fontSize:14,fontWeight:700},tagWrap:{display:"flex",gap:5,flexWrap:"wrap"},dayTag:{fontSize:10,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",padding:"2px 7px",borderRadius:8},pillTag:{fontSize:10,fontWeight:700,border:"1px solid",borderRadius:8,padding:"2px 7px"},customTag:{fontSize:10,fontWeight:700,color:"var(--accent)",background:"color-mix(in srgb, var(--accent) 14%, transparent)",padding:"2px 7px",borderRadius:8},cardActions:{display:"flex",gap:4,justifyContent:"flex-end"},iconBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"}},Vm=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,Qu=()=>Vm(new Date),Ku=(e,t)=>{const n=new Date(e+"T00:00:00");return n.setDate(n.getDate()+t),Vm(n)},Xu=e=>new Date(e+"T00:00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",year:"numeric"}),fv=e=>{if(!e)return"";const t=e.trim();if(/^[A-Za-z0-9_-]{11}$/.test(t))return t;const n=t.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return n?n[1]:""},xv=e=>new Promise((t,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:l,height:a}=i;l>a&&l>900?(a=a*900/l,l=900):a>900&&(l=l*900/a,a=900);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(i,0,0,l,a),t(d.toDataURL("image/jpeg",.82))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(e)});function yv(){const[e,t]=c.useState([]),[n,o]=c.useState(!1),[i,s]=c.useState(null),[l,a]=c.useState(!1),[d,g]=c.useState({title:"",image:""}),[h,x]=c.useState(""),[f,A]=c.useState(!0),[S,v]=c.useState(null),R=c.useCallback(async()=>{try{t(await $.getGoldenGoals())}catch{}o(!0)},[]);c.useEffect(()=>{R()},[R]);const{deleteItem:m,toasts:p,handleUndo:b,handleDismiss:B}=er($.deleteGolden,$.restoreGolden,R);c.useEffect(()=>{$.getSetting("golden_music").then(D=>x(fv((D==null?void 0:D.value)||""))).catch(()=>{})},[]);const C=async()=>{if(!d.title.trim())return;const D=await $.createGolden({title:d.title.trim(),image:d.image});g({title:"",image:""}),a(!1),await R(),s(D.id)},T=async(D,W)=>{var te;const w=(te=D.target.files)==null?void 0:te[0];if(w)try{W(await xv(w))}catch{}},F=e.filter(D=>!D.achieved),_=e.filter(D=>D.achieved);return i?r.jsxs("div",{style:xe.page,children:[r.jsx(jv,{musicId:h,on:f}),r.jsx(vv,{goalId:i,onBack:()=>s(null),onReload:R,onCelebrate:(D,W)=>v({title:D,days:W}),pickImage:T,musicId:h,musicOn:f,setMusicOn:A}),S&&r.jsx(kv,{data:S,onClose:()=>v(null)})]}):r.jsxs("div",{style:xe.page,children:[r.jsxs("div",{style:xe.head,children:[r.jsxs("div",{children:[r.jsx("div",{style:xe.eyebrow,children:"Anvil · Golden Book"}),r.jsx("h1",{style:xe.h1,children:"Golden Book"}),r.jsx("div",{style:xe.subhead,children:"Write your dreams into being — a little every day."})]}),!l&&r.jsxs("button",{onClick:()=>a(!0),style:xe.addBtn,children:[r.jsx(Qe,{size:15})," New dream"]})]}),l&&r.jsxs("div",{style:xe.card,children:[r.jsx("div",{style:xe.cardTitle,children:"Manifest a new dream"}),r.jsx("textarea",{autoFocus:!0,placeholder:"Write your dream as if it's already true…",value:d.title,onChange:D=>g({...d,title:D.target.value}),style:xe.textarea}),r.jsxs("label",{style:xe.photoPick,children:[d.image?r.jsx("img",{src:d.image,alt:"",style:xe.photoPreview}):r.jsxs("span",{style:xe.photoEmpty,children:[r.jsx(Ol,{size:18})," Add a photo"]}),r.jsx("input",{type:"file",accept:"image/*",onChange:D=>T(D,W=>g({...d,image:W})),style:{display:"none"}})]}),r.jsxs("div",{style:xe.formActions,children:[r.jsxs("button",{onClick:()=>{a(!1),g({title:"",image:""})},style:xe.cancelBtn,children:[r.jsx(De,{size:14})," Cancel"]}),r.jsxs("button",{onClick:C,disabled:!d.title.trim(),style:{...xe.saveBtn,...d.title.trim()?{}:xe.saveDisabled},children:[r.jsx(Ne,{size:15})," Create"]})]})]}),n?r.jsxs(r.Fragment,{children:[F.length===0&&_.length===0&&!l&&r.jsx("div",{style:xe.empty,children:"No dreams yet. Add your first one and revisit it daily."}),F.length>0&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:xe.sectionTitle,children:[r.jsx(eo,{size:15,color:"#C9A227"})," Manifesting ",r.jsx("span",{style:xe.badge,children:F.length})]}),r.jsx("div",{style:xe.grid,children:F.map(D=>r.jsx(qu,{g:D,onOpen:()=>s(D.id),onDelete:()=>m(D.id,D.title)},D.id))})]}),_.length>0&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{...xe.sectionTitle,marginTop:22},children:[r.jsx(nn,{size:15,color:"#4C9A6B"})," Manifested ",r.jsx("span",{style:xe.badge,children:_.length})]}),r.jsx("div",{style:xe.grid,children:_.map(D=>r.jsx(qu,{g:D,onOpen:()=>s(D.id),onDelete:()=>m(D.id,D.title),achieved:!0},D.id))})]})]}):r.jsx("div",{style:xe.muted,children:"Loading…"}),r.jsx(tr,{toasts:p,onUndo:b,onDismiss:B})]})}function qu({g:e,onOpen:t,onDelete:n,achieved:o}){return r.jsxs("div",{style:{...xe.goalCard,...o?{opacity:.96}:{},position:"relative"},children:[r.jsxs("button",{onClick:t,style:xe.goalCardBtn,children:[r.jsxs("div",{style:xe.thumbWrap,children:[e.image?r.jsx("img",{src:e.image,alt:"",style:xe.thumb}):r.jsx("div",{style:xe.thumbEmpty,children:r.jsx(eo,{size:26,color:"var(--text-3)"})}),o&&r.jsx("span",{style:xe.stamp,children:"✦ Manifested"})]}),r.jsxs("div",{style:xe.goalBody,children:[r.jsx("div",{style:xe.goalTitle,children:e.title}),r.jsxs("div",{style:xe.goalMeta,children:[o?r.jsxs("span",{style:{...xe.metaPill,color:"#4C9A6B",background:"rgba(76,154,107,0.12)"},children:[r.jsx(nn,{size:12})," ",e.days_to_manifest!=null?`in ${e.days_to_manifest} day${e.days_to_manifest===1?"":"s"}`:"done"]}):r.jsxs("span",{style:{...xe.metaPill,color:"#C2773B",background:"rgba(194,119,59,0.12)"},children:[r.jsx(Jn,{size:12})," ",e.streak," day streak"]}),r.jsxs("span",{style:xe.metaDim,children:[e.total_days," entr",e.total_days===1?"y":"ies"]})]})]})]}),r.jsx("button",{onClick:i=>{i.stopPropagation(),window.confirm(`Delete "${e.title}"?`)&&n()},style:xe.cardDelBtn,title:"Delete dream",children:r.jsx(Uc,{size:14})})]})}function vv({goalId:e,onBack:t,onReload:n,onCelebrate:o,pickImage:i,musicId:s,musicOn:l,setMusicOn:a}){const[d,g]=c.useState(null),[h,x]=c.useState({}),[f,A]=c.useState(Qu()),[S,v]=c.useState(""),[R,m]=c.useState(null),p=Qu(),b=c.useCallback(async()=>{const z=await $.getGoldenGoal(e);g(z);const re={};z.entries.forEach(be=>{re[be.date]=be.text}),x(re),v(re[p]||"")},[e,p]);if(c.useEffect(()=>{b()},[b]),!d)return r.jsx("div",{style:xe.muted,children:"Loading…"});const B=f===p,C=f>d.created_date,T=f<p,F=async()=>{await $.upsertGoldenEntry(e,{date:p,text:S}),await b(),n()},_=async()=>{const z=await $.achieveGolden(e);o(d.title,z.days_to_manifest),await b(),n()},D=async()=>{await $.unachieveGolden(e),await b(),n()},W=async()=>{R.trim()&&(await $.updateGolden(e,{title:R.trim()}),m(null),await b(),n())},w=z=>$.updateGolden(e,{image:z}).then(()=>{b(),n()}),te=async()=>{window.confirm(`Delete "${d.title}"? This cannot be undone from here.`)&&(await $.deleteGolden(e),n(),t())};return r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:xe.detailTopRow,children:[r.jsxs("button",{onClick:t,style:xe.backBtn,children:[r.jsx(fm,{size:16})," All dreams"]}),r.jsxs("button",{onClick:te,style:xe.deleteBtn,title:"Delete dream",children:[r.jsx(Uc,{size:14})," Delete"]})]}),r.jsxs("div",{style:xe.detailHero,children:[r.jsxs("label",{style:xe.heroPhoto,children:[d.image?r.jsx("img",{src:d.image,alt:"",style:xe.heroImg}):r.jsxs("span",{style:xe.photoEmpty,children:[r.jsx(Ol,{size:20})," Add a photo"]}),r.jsxs("span",{style:xe.photoEdit,children:[r.jsx(xt,{size:12})," Edit photo"]}),r.jsx("input",{type:"file",accept:"image/*",onChange:z=>i(z,w),style:{display:"none"}})]}),r.jsxs("div",{style:xe.heroInfo,children:[d.achieved&&r.jsxs("span",{style:xe.heroStamp,children:["✦ Manifested",d.days_to_manifest!=null?` in ${d.days_to_manifest} day${d.days_to_manifest===1?"":"s"}`:""]}),R!==null?r.jsxs("div",{style:{display:"flex",gap:6,width:"100%"},children:[r.jsx("textarea",{autoFocus:!0,value:R,onChange:z=>m(z.target.value),style:{...xe.textarea,minHeight:60}}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[r.jsx("button",{onClick:W,style:xe.iconSave,children:r.jsx(Ne,{size:14})}),r.jsx("button",{onClick:()=>m(null),style:xe.iconCancel,children:r.jsx(De,{size:14})})]})]}):r.jsxs("div",{style:xe.heroTitleRow,children:[r.jsx("div",{style:xe.heroTitle,children:d.title}),r.jsx("button",{onClick:()=>m(d.title),style:xe.ghostBtn,title:"Edit",children:r.jsx(xt,{size:13})})]}),r.jsxs("div",{style:xe.heroStats,children:[r.jsxs("span",{style:{...xe.metaPill,color:"#C2773B",background:"rgba(194,119,59,0.12)"},children:[r.jsx(Jn,{size:13})," ",d.streak," day streak"]}),r.jsxs("span",{style:xe.metaDim,children:[d.total_days," entr",d.total_days===1?"y":"ies"]}),r.jsxs("span",{style:xe.metaDim,children:["since ",Xu(d.created_date)]})]})]})]}),r.jsxs("div",{style:xe.writeCard,children:[r.jsx("div",{style:xe.tuneRow,children:s?r.jsxs("button",{onClick:()=>a(z=>!z),style:{...xe.tuneBtn,...l?xe.tuneOn:{}},children:[l?r.jsx(zm,{size:14}):r.jsx(Oc,{size:14})," Soft tunes"]}):r.jsx("span",{style:xe.tuneHint,children:"Add a track in Settings → Music"})}),r.jsxs("div",{style:xe.writeNav,children:[r.jsx("button",{onClick:()=>A(z=>Ku(z,-1)),disabled:!C,style:{...xe.navBtn,...C?{}:xe.navDisabled},children:r.jsx(Dn,{size:16})}),r.jsx("div",{style:xe.writeDate,children:B?"Today":Xu(f)}),r.jsx("button",{onClick:()=>A(z=>Ku(z,1)),disabled:!T,style:{...xe.navBtn,...T?{}:xe.navDisabled},children:r.jsx(sn,{size:16})})]}),B&&!d.achieved?r.jsxs(r.Fragment,{children:[r.jsx("textarea",{value:S,onChange:z=>v(z.target.value),placeholder:"Write it again today, as if it's already yours…",style:xe.writeArea}),r.jsxs("button",{onClick:F,style:xe.writeSave,children:[r.jsx(Ne,{size:15})," Save today's entry"]})]}):r.jsx("div",{style:xe.readEntry,children:h[f]?r.jsxs(r.Fragment,{children:[r.jsx(Em,{size:16,color:"var(--text-3)"}),r.jsx("p",{style:xe.readText,children:h[f]})]}):r.jsx("div",{style:xe.muted,children:"Nothing written on this day."})})]}),d.achieved?r.jsx("button",{onClick:D,style:xe.unmanifestBtn,children:"Undo manifested"}):r.jsxs("button",{onClick:_,style:xe.manifestBtn,children:[r.jsx(eo,{size:16})," Mark as manifested"]})]})}function kv({data:e,onClose:t}){return r.jsx("div",{style:xe.celebOverlay,onClick:t,children:r.jsxs("div",{style:xe.celebBox,onClick:n=>n.stopPropagation(),children:[r.jsx("div",{style:xe.celebEmoji,children:"✨🌟✨"}),r.jsx("div",{style:xe.celebTitle,children:"It's happening!"}),r.jsxs("div",{style:xe.celebDream,children:['"',e.title,'"']}),r.jsxs("div",{style:xe.celebSub,children:[e.days!=null?`Manifested in ${e.days} day${e.days===1?"":"s"}.`:"Manifested."," The universe delivered. 🙏"]}),r.jsx("button",{onClick:t,style:xe.celebBtn,children:"Wonderful"})]})})}function jv({musicId:e,on:t}){return!e||!t?null:r.jsx("iframe",{title:"golden-music",src:`https://www.youtube.com/embed/${e}?autoplay=1&loop=1&playlist=${e}&controls=0&modestbranding=1&playsinline=1`,allow:"autoplay; encrypted-media",style:{position:"fixed",left:-1e4,top:0,width:320,height:180,border:"none"}})}const Mn="#C9A227",xe={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:860,margin:"0 auto",position:"relative"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:Mn,color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},textarea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"11px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:70,resize:"vertical",lineHeight:1.5},photoPick:{display:"block",marginTop:10,cursor:"pointer",borderRadius:12,overflow:"hidden",border:"1px dashed var(--border)"},photoPreview:{width:"100%",maxHeight:220,objectFit:"cover",display:"block"},photoEmpty:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"26px 0",color:"var(--text-3)",fontSize:13,fontWeight:600},formActions:{display:"flex",gap:8,marginTop:14},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:Mn,color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:12},badge:{fontSize:11,fontWeight:700,background:"var(--hover)",color:"var(--text-2)",borderRadius:10,padding:"1px 7px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:14},goalCard:{textAlign:"left",border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},goalCardBtn:{textAlign:"left",border:"none",background:"none",cursor:"pointer",padding:0,fontFamily:"inherit",display:"flex",flexDirection:"column",width:"100%"},cardDelBtn:{position:"absolute",top:8,left:8,border:"none",background:"rgba(0,0,0,0.55)",color:"#fff",width:26,height:26,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",zIndex:2},thumbWrap:{position:"relative",width:"100%",aspectRatio:"16 / 10",background:"var(--surface-2)"},thumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},thumbEmpty:{width:"100%",height:"100%",display:"grid",placeItems:"center"},stamp:{position:"absolute",top:8,right:8,transform:"rotate(6deg)",background:"rgba(76,154,107,0.95)",color:"#fff",fontSize:11,fontWeight:800,letterSpacing:"0.04em",padding:"3px 9px",borderRadius:6,border:"1.5px solid #fff",textTransform:"uppercase"},goalBody:{padding:"11px 13px",display:"flex",flexDirection:"column",gap:8},goalTitle:{fontSize:14,fontWeight:600,lineHeight:1.35,display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"},goalMeta:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},metaPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11.5,fontWeight:700,padding:"2px 8px",borderRadius:10},metaDim:{fontSize:11,color:"var(--text-3)",fontWeight:500},detailTopRow:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16,gap:10},backBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},deleteBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid rgba(194,83,107,0.4)",background:"rgba(194,83,107,0.08)",color:"#C2536B",padding:"7px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},detailHero:{display:"flex",flexDirection:"column",gap:14,marginBottom:16},heroPhoto:{position:"relative",width:"100%",borderRadius:14,overflow:"hidden",border:"1px solid var(--border)",cursor:"pointer",background:"var(--surface-2)",display:"flex",alignItems:"center",justifyContent:"center",minHeight:120},heroImg:{width:"100%",maxHeight:"62vh",objectFit:"contain",display:"block"},photoEdit:{position:"absolute",bottom:8,right:8,display:"flex",alignItems:"center",gap:5,background:"rgba(0,0,0,0.6)",color:"#fff",fontSize:11,fontWeight:600,padding:"4px 8px",borderRadius:7},heroInfo:{display:"flex",flexDirection:"column",gap:10,alignItems:"center",textAlign:"center"},heroStamp:{alignSelf:"center",background:"rgba(76,154,107,0.14)",color:"#4C9A6B",fontSize:12,fontWeight:800,padding:"4px 10px",borderRadius:8,letterSpacing:"0.03em"},heroTitleRow:{display:"flex",alignItems:"flex-start",gap:8,justifyContent:"center"},heroTitle:{fontSize:23,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.35},heroStats:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap",justifyContent:"center"},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",flexShrink:0},iconSave:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},iconCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},writeCard:{background:"var(--surface)",borderRadius:14,padding:16,border:"1px solid var(--border)",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},tuneRow:{display:"flex",justifyContent:"flex-end",marginBottom:10},tuneBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 12px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tuneOn:{background:Mn,color:"#fff",borderColor:Mn},tuneHint:{fontSize:11,color:"var(--text-3)",fontWeight:500},writeNav:{display:"flex",alignItems:"center",justifyContent:"center",gap:14,marginBottom:12},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center"},navDisabled:{opacity:.35,cursor:"not-allowed"},writeDate:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:150,textAlign:"center"},writeArea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"12px",fontSize:15,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:120,resize:"vertical",lineHeight:1.6},writeSave:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",marginTop:10,border:"none",background:Mn,color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},readEntry:{display:"flex",gap:8,padding:"6px 2px"},readText:{fontSize:15,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.6,margin:0,whiteSpace:"pre-wrap"},manifestBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,width:"100%",border:"none",background:"linear-gradient(135deg,#C9A227,#E0BD45)",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:800,cursor:"pointer",fontFamily:"inherit",boxShadow:"0 2px 10px rgba(201,162,39,0.35)"},unmanifestBtn:{display:"block",margin:"0 auto",border:"none",background:"none",color:"var(--text-3)",fontSize:12,fontWeight:600,cursor:"pointer",textDecoration:"underline",fontFamily:"inherit"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.6)",zIndex:200,display:"grid",placeItems:"center",padding:16},celebBox:{background:"var(--surface)",color:"var(--text)",borderRadius:20,padding:"36px 30px",textAlign:"center",maxWidth:360,boxShadow:"0 12px 48px rgba(0,0,0,0.3)"},celebEmoji:{fontSize:40,marginBottom:10},celebTitle:{fontSize:24,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginBottom:10,color:Mn},celebDream:{fontSize:15,fontStyle:"italic",fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.5,marginBottom:10},celebSub:{fontSize:13.5,color:"var(--text-2)",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:Mn,color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},Aa=[{id:"meditation",label:"Meditation Hub",icon:Wx,color:"#8268B0"},{id:"visualization",label:"Visualization",icon:fl,color:"#3A7CA5"}],Zu=e=>{if(!e)return"";const t=e.trim();if(/^[A-Za-z0-9_-]{11}$/.test(t))return t;const n=t.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return n?n[1]:""},wv=e=>new Promise((t,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:l,height:a}=i;l>a&&l>1e3?(a=a*1e3/l,l=1e3):a>1e3&&(l=l*1e3/a,a=1e3);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(i,0,0,l,a),t(d.toDataURL("image/jpeg",.82))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(e)}),Sv=e=>({id:null,kind:e,title:"",url:"",image:""});function Cv(){const[e,t]=c.useState("meditation"),[n,o]=c.useState([]),[i,s]=c.useState(!1),[l,a]=c.useState(null),[d,g]=c.useState(null),h=c.useCallback(async()=>{try{o(await $.getMedia())}catch{}s(!0)},[]);c.useEffect(()=>{h()},[h]);const{deleteItem:x,toasts:f,handleUndo:A,handleDismiss:S}=er($.deleteMedia,$.restoreMedia,h);c.useEffect(()=>{if(!d)return;const T=10,F=setInterval(()=>{document.hidden||$.addScreenTime("mindscape",T).catch(()=>{})},T*1e3);return()=>clearInterval(F)},[d]);const v=Aa.find(T=>T.id===e),R=n.filter(T=>T.kind===e),m=T=>a({id:T.id,kind:T.kind,title:T.title,url:`https://youtu.be/${T.youtube_id}`,image:T.image}),p=async T=>{var _;const F=(_=T.target.files)==null?void 0:_[0];if(F){try{const D=await wv(F);a(W=>({...W,image:D}))}catch{}T.target.value=""}},b=l?[!l.title.trim()&&"a title",!l.image&&"an image",!Zu(l.url)&&"a valid YouTube link"].filter(Boolean):[],B=!!l&&b.length===0,C=async()=>{if(!B)return;const T={kind:l.kind,title:l.title.trim(),image:l.image,youtube_id:Zu(l.url)};l.id?await $.updateMedia(l.id,T):await $.createMedia(T),a(null),h()};return r.jsxs("div",{style:Ye.page,children:[d&&r.jsx("iframe",{title:"mindscape-audio",src:`https://www.youtube.com/embed/${d.youtube_id}?autoplay=1&controls=0&modestbranding=1&playsinline=1`,allow:"autoplay; encrypted-media",style:{position:"fixed",left:-1e4,top:0,width:320,height:180,border:"none"}}),r.jsxs("div",{style:Ye.head,children:[r.jsxs("div",{children:[r.jsx("div",{style:Ye.eyebrow,children:"Anvil · Mindscape"}),r.jsx("h1",{style:Ye.h1,children:"Mindscape"}),r.jsx("div",{style:Ye.subhead,children:"Close your eyes and listen — guided meditation and visualization."})]}),!l&&r.jsxs("button",{onClick:()=>a(Sv(e)),style:{...Ye.addBtn,background:v.color},children:[r.jsx(Qe,{size:15})," Add"]})]}),r.jsx("div",{style:Ye.tabs,children:Aa.map(T=>{const F=T.icon,_=e===T.id;return r.jsxs("button",{onClick:()=>{t(T.id),a(null)},style:{...Ye.tab,..._?{background:T.color,color:"#fff",borderColor:T.color}:{}},children:[r.jsx(F,{size:15})," ",T.label]},T.id)})}),l&&r.jsxs("div",{style:Ye.card,children:[r.jsx("div",{style:Ye.cardTitle,children:l.id?"Edit":`New ${Aa.find(T=>T.id===l.kind).label}`}),r.jsx("input",{placeholder:"YouTube link (plays as audio only)",value:l.url,onChange:T=>a({...l,url:T.target.value}),style:Ye.input,autoFocus:!0}),r.jsx("input",{placeholder:"Title (required)",value:l.title,onChange:T=>a({...l,title:T.target.value}),style:{...Ye.input,marginTop:8}}),r.jsxs("label",{style:Ye.photoPick,children:[l.image?r.jsx("img",{src:l.image,alt:"",style:Ye.photoPreview}):r.jsxs("span",{style:Ye.photoEmpty,children:[r.jsx(Ol,{size:18})," Add cover image (required)"]}),r.jsx("input",{type:"file",accept:"image/*",onChange:p,style:{display:"none"}})]}),!B&&r.jsxs("div",{style:Ye.warn,children:["Add ",b.join(", ")," to save."]}),r.jsxs("div",{style:Ye.formActions,children:[r.jsxs("button",{onClick:()=>a(null),style:Ye.cancelBtn,children:[r.jsx(De,{size:14})," Cancel"]}),r.jsxs("button",{onClick:C,disabled:!B,style:{...Ye.saveBtn,background:B?v.color:"var(--border)",color:B?"#fff":"var(--text-3)",cursor:B?"pointer":"not-allowed"},children:[r.jsx(Ne,{size:15})," ",l.id?"Save":"Add"]})]})]}),i?R.length===0?r.jsxs("div",{style:Ye.empty,children:["Nothing here yet — add a ",v.label.toLowerCase()," track."]}):r.jsx("div",{style:Ye.grid,children:R.map(T=>{const F=(d==null?void 0:d.id)===T.id;return r.jsxs("div",{style:Ye.mediaCard,children:[r.jsxs("button",{onClick:()=>g(F?null:T),style:Ye.coverBtn,title:F?"Pause":"Play",children:[r.jsx("img",{src:T.image,alt:"",style:Ye.cover}),r.jsx("span",{style:{...Ye.playOverlay,background:F?"rgba(0,0,0,0.45)":"rgba(0,0,0,0.28)"},children:r.jsx("span",{style:{...Ye.playCircle,background:v.color},children:F?r.jsx(Tm,{size:20,color:"#fff",fill:"#fff"}):r.jsx(Hc,{size:20,color:"#fff",fill:"#fff"})})}),F&&r.jsxs("span",{style:Ye.nowPlaying,children:[r.jsx(zm,{size:11})," Playing"]})]}),r.jsxs("div",{style:Ye.mediaBody,children:[r.jsx("div",{style:Ye.mediaTitle,children:T.title}),r.jsxs("div",{style:Ye.cardActions,children:[r.jsx("button",{onClick:()=>m(T),style:Ye.iconBtn,title:"Edit",children:r.jsx(xt,{size:13})}),r.jsx("button",{onClick:()=>{(d==null?void 0:d.id)===T.id&&g(null),x(T.id,T.title)},style:Ye.iconBtn,title:"Delete",children:r.jsx(De,{size:14})})]})]})]},T.id)})}):r.jsx("div",{style:Ye.muted,children:"Loading…"}),r.jsx(tr,{toasts:f,onUndo:A,onDismiss:S})]})}const Ye={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:900,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},tabs:{display:"flex",gap:8,marginBottom:18,flexWrap:"wrap"},tab:{display:"flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:20,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none"},photoPick:{display:"block",marginTop:10,cursor:"pointer",borderRadius:12,overflow:"hidden",border:"1px dashed var(--border)"},photoPreview:{width:"100%",maxHeight:200,objectFit:"cover",display:"block"},photoEmpty:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"26px 0",color:"var(--text-3)",fontSize:13,fontWeight:600},warn:{fontSize:12,color:"#C2773B",marginTop:8,fontWeight:600},formActions:{display:"flex",gap:8,marginTop:14},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,fontFamily:"inherit"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gap:16},mediaCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},coverBtn:{position:"relative",border:"none",padding:0,cursor:"pointer",display:"block",width:"100%",aspectRatio:"1",background:"var(--surface-2)"},cover:{width:"100%",height:"100%",objectFit:"cover",display:"block"},playOverlay:{position:"absolute",inset:0,display:"grid",placeItems:"center"},playCircle:{width:46,height:46,borderRadius:"50%",display:"grid",placeItems:"center",boxShadow:"0 2px 10px rgba(0,0,0,0.3)"},nowPlaying:{position:"absolute",bottom:8,left:8,display:"flex",alignItems:"center",gap:4,background:"rgba(0,0,0,0.65)",color:"#fff",fontSize:11,fontWeight:700,padding:"3px 8px",borderRadius:7},mediaBody:{padding:"12px 14px",display:"flex",alignItems:"flex-start",gap:8},mediaTitle:{flex:1,fontSize:14.5,fontWeight:600,lineHeight:1.4,minWidth:0,wordBreak:"break-word"},cardActions:{display:"flex",gap:2,flexShrink:0,marginTop:1},iconBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"}},Ym={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"},zv=Object.keys(Ym),Iv="#9A7B4F";function Tv(e=760){const[t,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),t}const Ev=()=>{const e=new Date,t=n=>String(n).padStart(2,"0");return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}`},Bv=e=>{if(!e)return"";const t=new Date(e+"T00:00:00");return isNaN(t)?e:t.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})},Ra=e=>(e||"").slice(0,4),Dv=e=>new Promise((t,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:l,height:a}=i;l>a&&l>1e3?(a=a*1e3/l,l=1e3):a>1e3&&(l=l*1e3/a,a=1e3);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(i,0,0,l,a),t(d.toDataURL("image/jpeg",.82))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(e)}),Av={id:null,title:"",date:Ev(),pillar:"",reward:"",image:"",note:""};function Rv(){const e=Ki(),t=C=>Hr(C,e.code),n=Tv(),[o,i]=c.useState([]),[s,l]=c.useState(null),[a,d]=c.useState(!1),g=c.useRef(null),h=c.useCallback(()=>{$.getAchievements().then(i).catch(()=>{})},[]);c.useEffect(()=>{h()},[h]);const{deleteItem:x,toasts:f,handleUndo:A,handleDismiss:S}=er($.deleteAchievement,$.restoreAchievement,h),v=()=>l({...Av}),R=C=>l({id:C.id,title:C.title,date:C.date,pillar:C.pillar||"",reward:C.reward?String(C.reward):"",image:C.image||"",note:C.note||""}),m=async C=>{var F;const T=(F=C.target.files)==null?void 0:F[0];if(T){try{const _=await Dv(T);l(D=>({...D,image:_}))}catch{}g.current&&(g.current.value="")}},p=s&&s.title.trim()&&s.date,b=async()=>{if(!p||a)return;d(!0);const C={title:s.title.trim(),date:s.date,pillar:s.pillar||null,reward:parseFloat(s.reward)||0,image:s.image||null,note:s.note.trim()};try{s.id?await $.updateAchievement(s.id,C):await $.createAchievement(C),l(null),h()}catch{}finally{d(!1)}},B=o.reduce((C,T)=>C+(T.reward||0),0);return r.jsxs("div",{style:_e.page,children:[r.jsxs("div",{style:_e.head,children:[r.jsxs("div",{children:[r.jsx("div",{style:_e.eyebrow,children:"Anvil · Achievements"}),r.jsx("h1",{style:_e.h1,children:"Achievements"}),r.jsx("div",{style:_e.subhead,children:"Your tree of wins — newest at the top, scroll down through the past."})]}),r.jsxs("div",{style:_e.headRight,children:[B>0&&r.jsxs("div",{style:_e.totalBadge,children:[r.jsx(xl,{size:14,color:"#C9A227"})," ",t(B)," earned"]}),r.jsxs("button",{onClick:v,style:_e.addBtn,children:[r.jsx(Qe,{size:15})," Add achievement"]})]})]}),o.length===0?r.jsxs("div",{style:_e.empty,children:[r.jsx(nn,{size:30,color:"var(--text-3)"}),r.jsx("div",{style:{marginTop:10},children:"No achievements yet."}),r.jsx("div",{style:_e.emptySub,children:"Plant your first win — it'll grow into a timeline you can look back on."})]}):r.jsxs("div",{style:{..._e.timeline,paddingLeft:0},children:[r.jsx("div",{style:{..._e.trunk,left:n?13:"50%"}}),o.map((C,T)=>{const F=Ym[C.pillar]||Iv,_=!n&&T%2===1,D=o[T-1],W=!D||Ra(D.date)!==Ra(C.date);return r.jsxs("div",{children:[W&&r.jsx("div",{style:{..._e.yearRow,justifyContent:n?"flex-start":"center",paddingLeft:n?36:0},children:r.jsx("span",{style:_e.yearChip,children:Ra(C.date)})}),r.jsxs("div",{style:{..._e.row,gridTemplateColumns:n?"28px 1fr":"1fr 44px 1fr"},children:[!n&&r.jsx("div",{style:{gridColumn:1,display:"flex",justifyContent:"flex-end"},children:_&&r.jsx(Ju,{a:C,color:F,side:"left",money:t,onEdit:()=>R(C),onDelete:()=>x(C.id,C.title)})}),r.jsx("div",{style:{gridColumn:n?1:2,display:"flex",justifyContent:"center",position:"relative"},children:r.jsx("div",{style:{..._e.node,borderColor:F,background:"var(--surface)"},children:r.jsx("div",{style:{..._e.nodeDot,background:F}})})}),r.jsx("div",{style:{gridColumn:n?2:3,display:"flex",justifyContent:"flex-start"},children:(n||!_)&&r.jsx(Ju,{a:C,color:F,side:n?"mobile":"right",money:t,onEdit:()=>R(C),onDelete:()=>x(C.id,C.title)})})]})]},C.id)})]}),s&&r.jsx("div",{style:_e.overlay,onClick:()=>l(null),children:r.jsxs("div",{style:_e.modal,onClick:C=>C.stopPropagation(),children:[r.jsxs("div",{style:_e.modalHead,children:[r.jsx("div",{style:_e.modalTitle,children:s.id?"Edit achievement":"New achievement"}),r.jsx("button",{onClick:()=>l(null),style:_e.iconBtn,children:r.jsx(De,{size:16})})]}),r.jsx("label",{style:_e.label,children:"Title *"}),r.jsx("input",{autoFocus:!0,value:s.title,onChange:C=>l(T=>({...T,title:C.target.value})),placeholder:"What did you achieve?",style:_e.input}),r.jsxs("div",{style:_e.formRow,children:[r.jsxs("div",{style:{flex:1},children:[r.jsxs("label",{style:_e.label,children:[r.jsx(Px,{size:12})," Date *"]}),r.jsx("input",{type:"date",value:s.date,onChange:C=>l(T=>({...T,date:C.target.value})),style:_e.input})]}),r.jsxs("div",{style:{flex:1},children:[r.jsx("label",{style:_e.label,children:"Pillar (optional)"}),r.jsxs("select",{value:s.pillar,onChange:C=>l(T=>({...T,pillar:C.target.value})),style:_e.input,children:[r.jsx("option",{value:"",children:"— None —"}),zv.map(C=>r.jsx("option",{value:C,children:C},C))]})]})]}),r.jsxs("label",{style:_e.label,children:[r.jsx(xl,{size:12})," Reward (",e.code,") — optional gesture of appreciation"]}),r.jsx("input",{type:"number",min:"0",step:"any",value:s.reward,onChange:C=>l(T=>({...T,reward:C.target.value})),placeholder:"0",style:_e.input}),r.jsx("label",{style:_e.label,children:"Photo (optional)"}),s.image?r.jsxs("div",{style:_e.imgWrap,children:[r.jsx("img",{src:s.image,alt:"",style:_e.imgPreview}),r.jsx("button",{onClick:()=>l(C=>({...C,image:""})),style:_e.imgRemove,children:r.jsx(De,{size:14})})]}):r.jsxs("button",{onClick:()=>{var C;return(C=g.current)==null?void 0:C.click()},style:_e.uploadBtn,children:[r.jsx(ry,{size:15})," Add a photo"]}),r.jsx("input",{ref:g,type:"file",accept:"image/*",onChange:m,style:{display:"none"}}),r.jsx("label",{style:_e.label,children:"Note (optional)"}),r.jsx("textarea",{value:s.note,onChange:C=>l(T=>({...T,note:C.target.value})),placeholder:"The story behind it…",rows:3,style:{..._e.input,resize:"vertical",fontFamily:"inherit"}}),r.jsxs("div",{style:_e.modalActions,children:[r.jsx("button",{onClick:()=>l(null),style:_e.cancelBtn,children:"Cancel"}),r.jsxs("button",{onClick:b,disabled:!p||a,style:{..._e.saveBtn,...!p||a?{opacity:.5,cursor:"not-allowed"}:{}},children:[r.jsx(Ne,{size:15})," ",s.id?"Save":"Add"]})]})]})}),r.jsx(tr,{toasts:f,onUndo:A,onDismiss:S})]})}function Ju({a:e,color:t,side:n,money:o,onEdit:i,onDelete:s}){return r.jsxs("div",{style:{..._e.card,borderTop:`3px solid ${t}`,textAlign:n==="left"?"right":"left"},children:[r.jsxs("div",{style:{..._e.cardTop,flexDirection:n==="left"?"row-reverse":"row"},children:[r.jsx("span",{style:{..._e.dateChip,background:`${t}1A`,color:t},children:Bv(e.date)}),r.jsxs("div",{style:{display:"flex",gap:2},children:[r.jsx("button",{onClick:i,style:_e.ghostBtn,title:"Edit",children:r.jsx(xt,{size:13})}),r.jsx("button",{onClick:s,style:_e.ghostBtn,title:"Delete",children:r.jsx(De,{size:14})})]})]}),r.jsx("div",{style:_e.cardTitle,children:e.title}),e.image&&r.jsx("img",{src:e.image,alt:"",style:_e.cardImg}),e.note&&r.jsx("div",{style:_e.cardNote,children:e.note}),e.reward>0&&r.jsxs("div",{style:{..._e.rewardBadge,marginLeft:n==="left"?"auto":0},children:[r.jsx(xl,{size:13})," ",o(e.reward)]})]})}const _e={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:22},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},headRight:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},totalBadge:{display:"flex",alignItems:"center",gap:5,background:"rgba(201,162,39,0.12)",border:"1px solid rgba(201,162,39,0.3)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:700,color:"#8A6E1A"},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},empty:{textAlign:"center",color:"var(--text-3)",padding:"60px 16px",fontSize:14,fontWeight:600},emptySub:{fontSize:12.5,fontWeight:400,marginTop:6,maxWidth:320,marginInline:"auto",lineHeight:1.5},timeline:{position:"relative",maxWidth:1e3,margin:"0 auto",paddingBottom:30},trunk:{position:"absolute",top:8,bottom:8,width:3,background:"linear-gradient(to bottom, var(--border), var(--border))",transform:"translateX(-1.5px)",borderRadius:2},yearRow:{display:"flex",margin:"6px 0 12px"},yearChip:{fontSize:11.5,fontWeight:800,letterSpacing:"0.06em",color:"var(--text-2)",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:"4px 12px",position:"relative",zIndex:2},row:{display:"grid",alignItems:"center",gap:8,marginBottom:16},node:{width:20,height:20,borderRadius:"50%",border:"3px solid",display:"grid",placeItems:"center",zIndex:2,boxShadow:"0 0 0 4px var(--bg)"},nodeDot:{width:7,height:7,borderRadius:"50%"},card:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:"12px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.06)",maxWidth:420,width:"100%",boxSizing:"border-box"},cardTop:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,marginBottom:7},dateChip:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:12,whiteSpace:"nowrap"},cardTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em",lineHeight:1.3,wordBreak:"break-word"},cardImg:{width:"100%",maxHeight:220,objectFit:"cover",borderRadius:9,marginTop:9,display:"block"},cardNote:{fontSize:12.5,color:"var(--text-2)",marginTop:7,lineHeight:1.5,whiteSpace:"pre-wrap",wordBreak:"break-word"},rewardBadge:{display:"inline-flex",alignItems:"center",gap:5,marginTop:9,background:"rgba(201,162,39,0.12)",color:"#8A6E1A",border:"1px solid rgba(201,162,39,0.3)",padding:"3px 10px",borderRadius:14,fontSize:12,fontWeight:700},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",borderRadius:6},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:60,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:460,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},label:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)"},formRow:{display:"flex",gap:10},uploadBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:7,width:"100%",border:"1.5px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"11px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},imgWrap:{position:"relative",borderRadius:10,overflow:"hidden"},imgPreview:{width:"100%",maxHeight:220,objectFit:"cover",display:"block",borderRadius:10},imgRemove:{position:"absolute",top:8,right:8,border:"none",background:"rgba(0,0,0,0.55)",color:"#fff",width:28,height:28,borderRadius:"50%",cursor:"pointer",display:"grid",placeItems:"center"},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}};function Fv(e=760){const[t,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),t}const Ar="#C9772E",ni=[{id:"todo",label:"Want to",color:"#3A7CA5"},{id:"doing",label:"Enjoying",color:"#C9772E"},{id:"done",label:"Satisfied",color:"#4C9A6B"}],Mv=[{id:"text",label:"Text"},{id:"number",label:"Number"},{id:"link",label:"Link"}],Fa=e=>(e&&typeof e=="object"?e.type:"text")||"text",dn=e=>(e&&typeof e=="object"?e.name:e)||"";function Wv(){const e=Fv(),[t,n]=c.useState([]),[o,i]=c.useState(null),[s,l]=c.useState(!1),[a,d]=c.useState(null),[g,h]=c.useState(null),[x,f]=c.useState(null),[A,S]=c.useState(null),[v,R]=c.useState([]),m=c.useRef({}),p=c.useCallback(()=>{$.getDelight().then(y=>{n(y),i(E=>{var P;return E&&y.some(G=>G.id===E)?E:((P=y[0])==null?void 0:P.id)??null}),l(!0)}).catch(()=>l(!0))},[]);c.useEffect(()=>{p()},[p]),c.useEffect(()=>{R([])},[o]);const{deleteItem:b,toasts:B,handleUndo:C,handleDismiss:T}=er($.deleteDelightItem,$.restoreDelightItem,p),F=t.find(y=>y.id===o)||null,_=c.useMemo(()=>{const y={todo:[],doing:[],done:[]};return((F==null?void 0:F.items)||[]).forEach(E=>{(y[E.status]||y.todo).push(E)}),Object.values(y).forEach(E=>E.sort((P,G)=>P.position-G.position||P.id-G.id)),y},[F]),D=y=>/^tags?$/i.test(dn(y).trim()),W=y=>((F==null?void 0:F.columns)||[]).filter(D).flatMap(E=>(y.fields[dn(E)]||"").split(",").map(P=>P.trim()).filter(Boolean)),w=c.useMemo(()=>{const y=new Set;return((F==null?void 0:F.items)||[]).forEach(E=>(F.columns||[]).filter(D).forEach(P=>(E.fields[dn(P)]||"").split(",").map(G=>G.trim()).filter(Boolean).forEach(G=>y.add(G)))),[...y].sort((E,P)=>E.localeCompare(P))},[F]),te=c.useMemo(()=>{const y={};return((F==null?void 0:F.columns)||[]).forEach(E=>{const P=dn(E);if(D(E))return;const G=new Set;((F==null?void 0:F.items)||[]).forEach(oe=>{const pe=(oe.fields[P]||"").trim();pe&&G.add(pe)}),y[P]=[...G].sort((oe,pe)=>oe.localeCompare(pe))}),y},[F]),z=y=>v.length===0||W(y).some(E=>v.includes(E)),re=y=>R(E=>E.includes(y)?E.filter(P=>P!==y):[...E,y]),be=(y,E,P)=>{for(const G of ni){const oe=m.current[G.id];if(!oe)continue;const pe=oe.getBoundingClientRect();if(y>=pe.left&&y<=pe.right&&E>=pe.top&&E<=pe.bottom){const O=[...oe.querySelectorAll("[data-card]")].filter(k=>k.dataset.id!==String(P));let M=O.length;for(let k=0;k<O.length;k++){const ee=O[k].getBoundingClientRect();if(E<ee.top+ee.height/2){M=k;break}}return{status:G.id,index:M}}}return null},ge=(y,E)=>{if(y.target.closest("button"))return;const P=y.clientX,G=y.clientY,oe=y.currentTarget;let pe=!1,O=null,M=null;const k=he=>{if(!pe){if(Math.hypot(he.clientX-P,he.clientY-G)<6)return;pe=!0;const Ee=oe.getBoundingClientRect();M={id:E.id,item:E,w:Ee.width,offX:P-Ee.left,offY:G-Ee.top}}M={...M,x:he.clientX,y:he.clientY},f(M),O=be(he.clientX,he.clientY,E.id)||O,S(O)},ee=()=>{window.removeEventListener("pointermove",k),window.removeEventListener("pointerup",ee),pe&&O&&ye(E,O),f(null),S(null)};window.addEventListener("pointermove",k),window.addEventListener("pointerup",ee)},ye=(y,E)=>{const P={};ni.forEach(O=>{P[O.id]=(_[O.id]||[]).filter(M=>M.id!==y.id)});const G=P[E.status]||[];let oe;if(v.length){const O=G.filter(z);oe=E.index<O.length?G.indexOf(O[E.index]):G.length}else oe=Math.max(0,Math.min(E.index,G.length));P[E.status]=[...G.slice(0,oe),{...y,status:E.status},...G.slice(oe)];const pe=[];ni.forEach(O=>(P[O.id]||[]).forEach((M,k)=>pe.push({id:M.id,status:O.id,position:k}))),n(O=>O.map(M=>M.id===o?{...M,items:pe.map(k=>({...M.items.find(ee=>ee.id===k.id),status:k.status,position:k.position}))}:M)),$.arrangeDelight(o,pe).then(p).catch(p)},J=async y=>{window.confirm(`Delete "${y.name}" and all its items?`)&&(await $.deleteCollection(y.id),p())},H=()=>({name:"",type:"text"}),se=()=>d({id:null,name:"",columns:[H(),H()]}),V=y=>d({id:y.id,name:y.name,columns:y.columns.length?y.columns.map(E=>({name:dn(E),type:Fa(E)})):[H()]}),de=async()=>{const y=a.name.trim();if(!y)return;const E=a.columns.map(P=>({name:P.name.trim(),type:P.type||"text"})).filter(P=>P.name);a.id?await $.updateCollection(a.id,{name:y,columns:E}):await $.createCollection({name:y,columns:E}),d(null),p()},I=(y="todo")=>h({id:null,name:"",fields:{},status:y}),ie=y=>h({id:y.id,name:y.name,fields:{...y.fields},status:y.status}),Ie=async()=>{const y=g.name.trim();if(!y||!F)return;const E={name:y,fields:g.fields,status:g.status};g.id?await $.updateDelightItem(g.id,E):await $.createDelightItem(F.id,E),h(null),p()},Q=({it:y})=>{const E=F.columns.filter(G=>y.fields[dn(G)]&&!D(G)),P=W(y);return r.jsxs("div",{"data-card":!0,"data-id":y.id,onPointerDown:G=>ge(G,y),style:je.itemCard,children:[r.jsxs("div",{style:je.itemCardTop,children:[r.jsx(yl,{size:13,style:{color:"var(--text-3)",flexShrink:0}}),r.jsx("span",{style:je.itemName,children:y.name}),r.jsx("button",{onClick:()=>ie(y),style:je.ghostBtn,children:r.jsx(xt,{size:12})}),r.jsx("button",{onClick:()=>b(y.id,y.name),style:je.ghostBtn,children:r.jsx(De,{size:13})})]}),E.map(G=>{const oe=dn(G),pe=y.fields[oe];return r.jsxs("div",{style:je.itemField,children:[r.jsx("span",{style:je.fieldLabel,children:oe}),Fa(G)==="link"?r.jsx("a",{href:/^https?:\/\//i.test(pe)?pe:`https://${pe}`,target:"_blank",rel:"noreferrer",style:{minWidth:0,wordBreak:"break-word",color:Ar},onClick:O=>O.stopPropagation(),children:pe}):r.jsx("span",{style:{minWidth:0,wordBreak:"break-word"},children:pe})]},oe)}),P.length>0&&r.jsx("div",{style:je.tagWrap,children:P.map((G,oe)=>r.jsx("span",{style:je.tag,children:G},oe))})]})};return r.jsxs("div",{style:je.page,children:[r.jsxs("div",{style:je.head,children:[r.jsxs("div",{children:[r.jsx("div",{style:je.eyebrow,children:"Anvil · Delights"}),r.jsx("h1",{style:je.h1,children:"Delights"}),r.jsx("div",{style:je.subhead,children:"Books, films, places, food — track what you want to enjoy and how you felt."})]}),r.jsxs("button",{onClick:se,style:je.addColBtn,children:[r.jsx(Qe,{size:15})," New list"]})]}),r.jsxs("div",{style:je.tabs,children:[t.map(y=>r.jsxs("button",{onClick:()=>i(y.id),style:{...je.tab,...y.id===o?je.tabOn:{}},children:[y.name,r.jsx("span",{style:je.tabCount,children:y.items.length})]},y.id)),r.jsx("button",{onClick:se,style:je.tabAdd,title:"New list",children:r.jsx(Qe,{size:15})})]}),s?F?r.jsxs("div",{children:[r.jsxs("div",{style:je.colHead,children:[r.jsx("h2",{style:je.colTitle,children:F.name}),r.jsxs("div",{style:je.colActions,children:[r.jsxs("button",{onClick:()=>I(),style:je.primaryBtn,children:[r.jsx(Qe,{size:14})," Add"]}),r.jsx("button",{onClick:()=>V(F),style:je.ghostBtn,title:"Edit list & columns",children:r.jsx(Kx,{size:15})}),r.jsx("button",{onClick:()=>J(F),style:je.ghostBtn,title:"Delete list",children:r.jsx(De,{size:16})})]})]}),w.length>0&&r.jsxs("div",{style:je.filterBar,children:[r.jsx("span",{style:je.filterLabel,children:"Tags"}),r.jsx("button",{onClick:()=>R([]),style:{...je.filterChip,...v.length===0?je.filterChipOn:{}},children:"All"}),w.map(y=>r.jsx("button",{onClick:()=>re(y),style:{...je.filterChip,...v.includes(y)?je.filterChipOn:{}},children:y},y))]}),r.jsx("div",{style:{...je.board,gridTemplateColumns:e?"1fr":"repeat(3, 1fr)"},children:ni.map(y=>{const E=(_[y.id]||[]).filter(z),P=x?E.filter(oe=>oe.id!==x.id):E,G=A&&A.status===y.id;return r.jsxs("div",{ref:oe=>m.current[y.id]=oe,style:{...je.lane,...G?{outline:`2px dashed ${y.color}`,outlineOffset:-2}:{}},children:[r.jsxs("div",{style:je.laneHead,children:[r.jsx("span",{style:{...je.laneDot,background:y.color}}),r.jsx("span",{style:je.laneLabel,children:y.label}),r.jsx("span",{style:je.laneCount,children:E.length}),r.jsx("button",{onClick:()=>I(y.id),style:je.laneAdd,title:`Add to ${y.label}`,children:r.jsx(Qe,{size:13})})]}),r.jsxs("div",{style:je.laneBody,children:[P.map((oe,pe)=>r.jsxs("div",{children:[G&&A.index===pe&&r.jsx("div",{style:{...je.insertLine,background:y.color}}),r.jsx(Q,{it:oe})]},oe.id)),G&&A.index>=P.length&&r.jsx("div",{style:{...je.insertLine,background:y.color}}),P.length===0&&!G&&r.jsx("div",{style:je.laneEmpty,children:"Drop here"})]})]},y.id)})})]}):r.jsxs("div",{style:je.empty,children:[r.jsx(Im,{size:28,color:"var(--text-3)"}),r.jsx("div",{style:{marginTop:10},children:"No lists yet."}),r.jsxs("button",{onClick:se,style:{...je.addColBtn,marginTop:14},children:[r.jsx(Qe,{size:15})," Create your first list"]})]}):r.jsx("div",{style:je.muted,children:"Loading…"}),x&&r.jsx("div",{style:{...je.ghost,width:x.w,left:x.x-x.offX,top:x.y-x.offY},children:r.jsxs("div",{style:je.itemCardTop,children:[r.jsx(yl,{size:13,style:{color:"var(--text-3)",flexShrink:0}}),r.jsx("span",{style:je.itemName,children:x.item.name})]})}),a&&r.jsx("div",{style:je.overlay,onClick:()=>d(null),children:r.jsxs("div",{style:je.modal,onClick:y=>y.stopPropagation(),children:[r.jsxs("div",{style:je.modalHead,children:[r.jsx("span",{style:je.modalTitle,children:a.id?"Edit list":"New list"}),r.jsx("button",{onClick:()=>d(null),style:je.iconBtn,children:r.jsx(De,{size:16})})]}),r.jsx("label",{style:je.label,children:"List name *"}),r.jsx("input",{autoFocus:!0,value:a.name,onChange:y=>d(E=>({...E,name:y.target.value})),placeholder:"e.g. Gardens, Cafés, Trips…",style:je.input}),r.jsx("label",{style:je.label,children:"Columns"}),r.jsx("div",{style:je.muted2,children:"Name the details you want to track (e.g. Author, Distance, Tag)."}),a.columns.map((y,E)=>r.jsxs("div",{style:je.colRow,children:[r.jsx("input",{value:y.name,placeholder:`Column ${E+1}`,onChange:P=>d(G=>{const oe=[...G.columns];return oe[E]={...oe[E],name:P.target.value},{...G,columns:oe}}),style:{...je.input,marginBottom:0,flex:1}}),r.jsx("select",{value:y.type,onChange:P=>d(G=>{const oe=[...G.columns];return oe[E]={...oe[E],type:P.target.value},{...G,columns:oe}}),style:je.colTypeSelect,children:Mv.map(P=>r.jsx("option",{value:P.id,children:P.label},P.id))}),r.jsx("button",{onClick:()=>d(P=>({...P,columns:P.columns.filter((G,oe)=>oe!==E)})),style:je.iconBtn,children:r.jsx(De,{size:14})})]},E)),a.columns.length<6&&r.jsxs("button",{onClick:()=>d(y=>({...y,columns:[...y.columns,H()]})),style:je.addColInline,children:[r.jsx(Qe,{size:13})," Add column"]}),r.jsxs("div",{style:je.modalActions,children:[r.jsx("button",{onClick:()=>d(null),style:je.cancelBtn,children:"Cancel"}),r.jsxs("button",{onClick:de,disabled:!a.name.trim(),style:{...je.saveBtn,...a.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[r.jsx(Ne,{size:15})," ",a.id?"Save":"Create"]})]})]})}),g&&F&&r.jsx("div",{style:je.overlay,onClick:()=>h(null),children:r.jsxs("div",{style:je.modal,onClick:y=>y.stopPropagation(),children:[r.jsxs("div",{style:je.modalHead,children:[r.jsx("span",{style:je.modalTitle,children:g.id?"Edit":`Add to ${F.name}`}),r.jsx("button",{onClick:()=>h(null),style:je.iconBtn,children:r.jsx(De,{size:16})})]}),r.jsx("label",{style:je.label,children:"Name *"}),r.jsx("input",{autoFocus:!0,value:g.name,onChange:y=>h(E=>({...E,name:y.target.value})),onKeyDown:y=>y.key==="Enter"&&Ie(),placeholder:"Title / name",style:je.input}),F.columns.map(y=>{const E=dn(y),P=Fa(y),G=`dl-${F.id}-${E}`,oe=te[E]||[];return r.jsxs("div",{children:[r.jsx("label",{style:je.label,children:E}),r.jsx("input",{value:g.fields[E]||"",type:P==="number"?"number":P==="link"?"url":"text",list:oe.length?G:void 0,onChange:pe=>h(O=>({...O,fields:{...O.fields,[E]:pe.target.value}})),placeholder:P==="link"?"https://…":E,style:je.input}),oe.length>0&&r.jsx("datalist",{id:G,children:oe.map(pe=>r.jsx("option",{value:pe},pe))})]},E)}),r.jsx("label",{style:je.label,children:"Status"}),r.jsx("div",{style:je.statusPick,children:ni.map(y=>r.jsx("button",{type:"button",onClick:()=>h(E=>({...E,status:y.id})),style:{...je.statusChip,...g.status===y.id?{background:y.color,color:"#fff",borderColor:y.color}:{}},children:y.label},y.id))}),r.jsxs("div",{style:je.modalActions,children:[r.jsx("button",{onClick:()=>h(null),style:je.cancelBtn,children:"Cancel"}),r.jsxs("button",{onClick:Ie,disabled:!g.name.trim(),style:{...je.saveBtn,...g.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[r.jsx(Ne,{size:15})," ",g.id?"Save":"Add"]})]})]})}),r.jsx(tr,{toasts:B,onUndo:C,onDismiss:T})]})}const je={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},addColBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"none",background:Ar,color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tabs:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16,alignItems:"center"},tab:{display:"inline-flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},tabOn:{background:Ar,color:"#fff",borderColor:Ar},tabCount:{fontSize:10.5,fontWeight:700,background:"rgba(0,0,0,0.12)",borderRadius:9,padding:"1px 6px"},tabAdd:{border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",width:32,height:32,borderRadius:"50%",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},colHead:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:10,marginBottom:12,flexWrap:"wrap"},colTitle:{fontSize:18,fontWeight:700,margin:0,fontFamily:"'Fraunces',Georgia,serif"},colActions:{display:"flex",gap:6,alignItems:"center"},primaryBtn:{display:"inline-flex",alignItems:"center",gap:5,border:"none",background:Ar,color:"#fff",padding:"7px 13px",borderRadius:8,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",borderRadius:6,flexShrink:0},filterBar:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center",marginBottom:14},filterLabel:{fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--text-3)",marginRight:2},filterChip:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"5px 11px",borderRadius:16,fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},filterChipOn:{background:Ar,color:"#fff",borderColor:Ar},board:{display:"grid",gap:12,alignItems:"start"},lane:{background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:12,padding:"10px 10px 12px",minHeight:120,display:"flex",flexDirection:"column"},laneHead:{display:"flex",alignItems:"center",gap:7,padding:"2px 4px 10px"},laneDot:{width:9,height:9,borderRadius:"50%",flexShrink:0},laneLabel:{fontSize:12.5,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--text-2)"},laneCount:{fontSize:10.5,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 6px"},laneAdd:{marginLeft:"auto",border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center",padding:2,borderRadius:6},laneBody:{display:"flex",flexDirection:"column",gap:8,minHeight:40,flex:1},laneEmpty:{fontSize:12,color:"var(--text-3)",fontStyle:"italic",textAlign:"center",padding:"16px 0",border:"1px dashed var(--border)",borderRadius:8},insertLine:{height:3,borderRadius:2,margin:"1px 0"},itemCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"9px 10px",boxShadow:"0 1px 2px rgba(0,0,0,0.05)",cursor:"grab",touchAction:"none",userSelect:"none"},itemCardTop:{display:"flex",alignItems:"center",gap:6},itemName:{flex:1,minWidth:0,fontSize:13.5,fontWeight:700,wordBreak:"break-word"},itemField:{display:"flex",gap:8,fontSize:12,color:"var(--text-2)",marginTop:5,paddingLeft:19},fieldLabel:{fontWeight:700,color:"var(--text-3)",minWidth:64,flexShrink:0},tagWrap:{display:"flex",flexWrap:"wrap",gap:5,marginTop:8,paddingLeft:19},tag:{fontSize:10.5,fontWeight:700,color:Ar,background:"color-mix(in srgb, "+Ar+" 14%, transparent)",border:"1px solid color-mix(in srgb, "+Ar+" 30%, transparent)",borderRadius:12,padding:"2px 8px",whiteSpace:"nowrap"},ghost:{position:"fixed",zIndex:300,pointerEvents:"none",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"9px 10px",boxShadow:"0 8px 28px rgba(0,0,0,0.28)",opacity:.95,transform:"rotate(1.5deg)"},muted:{fontSize:13,color:"var(--text-3)"},muted2:{fontSize:11.5,color:"var(--text-3)",marginBottom:8},empty:{textAlign:"center",color:"var(--text-3)",padding:"50px 16px",fontSize:14,fontWeight:600,display:"flex",flexDirection:"column",alignItems:"center"},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)",marginBottom:8},colRow:{display:"flex",gap:6,alignItems:"center",marginBottom:8},colTypeSelect:{border:"1px solid var(--border)",borderRadius:9,padding:"9px 8px",fontSize:12.5,fontFamily:"inherit",outline:"none",background:"var(--bg)",color:"var(--text)",flexShrink:0},addColInline:{display:"inline-flex",alignItems:"center",gap:5,border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"7px 12px",borderRadius:8,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},statusPick:{display:"flex",gap:6,flexWrap:"wrap"},statusChip:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 13px",borderRadius:18,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},jr="#C9772E",Qm={Carrot:Ox,ShoppingCart:ky,Clapperboard:Ux,ShoppingBag:Fm,Fuel:Jx,Sparkles:eo,Shirt:vy,WashingMachine:Iy,Zap:Dy,Tv:Cy,Droplet:qx,Coffee:Yx,Utensils:zy,Bus:_x,Train:wy,Plane:fy,Home:Pi,Heart:wm,Gift:xl,Book:Mx,Dumbbell:Zx,Pill:hy,Phone:by,Wifi:Ty,Gamepad2:ey,Music:Oc,Scissors:Am,PawPrint:py,Baby:Rx,GraduationCap:km,Briefcase:Lx,Car:Nx,Bike:Fx},cn=({name:e,...t})=>{const n=Qm[e]||Fm;return r.jsx(n,{...t})},Ma=["#C9772E","#4C9A6B","#3A7CA5","#8268B0","#C2536B","#C9A227","#D1556E","#5B7C99","#A23E57","#3E9E6B"],Nd=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,ep=Nd(new Date);function Lv(e=760){const[t,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),t}function _v(){const e=Lv(),t=Ki(),n=Gm(),[o,i]=c.useState([]),[s,l]=c.useState([]),[a,d]=c.useState(!1),[g,h]=c.useState(ep),[x,f]=c.useState(()=>{const u=new Date;return new Date(u.getFullYear(),u.getMonth(),1)}),[A,S]=c.useState(null),[v,R]=c.useState(null),[m,p]=c.useState(!1),[b,B]=c.useState("day"),[C,T]=c.useState(()=>Ur(new Date,n)[0]),[F,_]=c.useState("all"),D=c.useCallback(()=>{$.getExpenses().then(u=>{i(u.categories),l(u.logs),d(!0)}).catch(()=>d(!0))},[]);c.useEffect(()=>{D()},[D]);const{deleteItem:W,toasts:w,handleUndo:te,handleDismiss:z}=er($.deleteExpenseLog,$.restoreExpenseLog,D),re=c.useMemo(()=>{const u={};return o.forEach(q=>u[q.id]=q),u},[o]),be=u=>wl(u,t.code),ge=c.useMemo(()=>s.filter(u=>u.date===g),[s,g]),ye=ge.reduce((u,q)=>u+q.amount,0),J=c.useMemo(()=>{if(b==="day")return ge;if(b==="month"){const[u,q]=Ur(new Date(g+"T00:00"),n);return s.filter(Ae=>Ae.date>=u&&Ae.date<=q)}if(b==="year"){const u=g.slice(0,4);return s.filter(q=>q.date.slice(0,4)===u)}return s},[s,ge,b,g,n]),H=J.reduce((u,q)=>u+q.amount,0),se=c.useMemo(()=>{const u={};return J.forEach(q=>{u[q.category_id]=(u[q.category_id]||0)+q.amount}),Object.entries(u).map(([q,Ae])=>({cat:re[q],amount:Ae})).filter(q=>q.cat).sort((q,Ae)=>Ae.amount-q.amount)},[J,re]),V=u=>Ur(new Date(u+"T00:00"),n)[0],de=c.useMemo(()=>{const u=new Set(s.map(q=>V(q.date)));return u.add(Ur(new Date,n)[0]),Array.from(u).sort().reverse().slice(0,12)},[s,n]),I=u=>new Date(u+"T00:00").toLocaleDateString("en-US",{month:"short",year:"numeric"}),ie=(u,q)=>Ur(new Date(u+"T00:00"),n,-q)[0],Ie=u=>F==="all"||u.category_id===Number(F),Q=[C,ie(C,1),ie(C,2)],y=Q.map(u=>{const[q,Ae]=Ur(new Date(u+"T00:00"),n);return s.filter(Le=>Le.date>=q&&Le.date<=Ae&&Ie(Le)).reduce((Le,we)=>Le+we.amount,0)}),[E,P,G]=y,oe=P>0?Math.round((E-P)/P*100):E>0?100:0,pe=oe>0?Yc:oe<0?Vc:Cm,O=oe>0?"#C2536B":oe<0?"#4C9A6B":"#9A968C",M=c.useMemo(()=>{const[u,q]=Ur(new Date(C+"T00:00"),n),Ae={};return s.filter(Le=>Le.date>=u&&Le.date<=q&&Ie(Le)).forEach(Le=>{Ae[Le.category_id]=(Ae[Le.category_id]||0)+Le.amount}),Object.entries(Ae).map(([Le,we])=>({cat:re[Le],amount:we})).filter(Le=>Le.cat).sort((Le,we)=>we.amount-Le.amount)},[s,C,F,re,n]);let k=0;const ee=M.map(u=>{const q=E>0?k/E*100:0;k+=u.amount;const Ae=E>0?k/E*100:0;return{...u,start:q,end:Ae,pct:E>0?u.amount/E*100:0}}),he=ee.length?`conic-gradient(${ee.map(u=>`${u.cat.color} ${u.start}% ${u.end}%`).join(", ")})`:"var(--surface-2)",Ee=c.useMemo(()=>{const u=x,q=(u.getDay()+6)%7,Ae=new Date(u.getFullYear(),u.getMonth()+1,0).getDate(),Le={};s.forEach($e=>{$e.date.slice(0,7)===Nd(u).slice(0,7)&&(Le[$e.date]=(Le[$e.date]||0)+$e.amount)});const we=[];for(let $e=0;$e<q;$e++)we.push(null);for(let $e=1;$e<=Ae;$e++){const Ct=Nd(new Date(u.getFullYear(),u.getMonth(),$e));we.push({date:Ct,day:$e,total:Le[Ct]||0})}return we},[x,s]),ut=u=>f(q=>new Date(q.getFullYear(),q.getMonth()+u,1)),Pe=x.toLocaleDateString("en-US",{month:"long",year:"numeric"}),nt=u=>S({cat:u,amount:"",note:""}),qe=async()=>{const u=parseFloat(A.amount);!u||u<=0||(await $.createExpenseLog({category_id:A.cat.id,amount:u,note:A.note.trim(),date:g}),S(null),D())},Xe=()=>R({id:null,name:"",icon:"ShoppingBag",color:Ma[o.length%Ma.length]}),ot=u=>R({id:u.id,name:u.name,icon:u.icon,color:u.color}),tt=async()=>{const u=v.name.trim();u&&(v.id?await $.updateExpenseCategory(v.id,{name:u,icon:v.icon,color:v.color}):await $.createExpenseCategory({name:u,icon:v.icon,color:v.color}),R(null),D())},Tr=async u=>{window.confirm(`Delete "${u.name}"? Its logged expenses will stay, but you won't be able to add new ones to it.`)&&(await $.deleteExpenseCategory(u.id),D())},Ot=new Date(g+"T00:00").toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"});let wt=0;const pt=se.map(u=>{const q=H>0?wt/H*100:0;wt+=u.amount;const Ae=H>0?wt/H*100:0;return{...u,start:q,end:Ae,pct:H>0?u.amount/H*100:0}}),St=pt.length?`conic-gradient(${pt.map(u=>`${u.cat.color} ${u.start}% ${u.end}%`).join(", ")})`:"var(--surface-2)";return r.jsxs("div",{style:Y.page,children:[r.jsx("div",{style:Y.head,children:r.jsxs("div",{children:[r.jsx("div",{style:Y.eyebrow,children:"Anvil · Expenses"}),r.jsx("h1",{style:Y.h1,children:"Expenses"}),r.jsx("div",{style:Y.subhead,children:"Log day-to-day spending by category and see where it goes."})]})}),r.jsxs("div",{style:Y.totalCard,children:[r.jsxs("div",{style:Y.totalLeft,children:[r.jsx(kl,{size:20,color:jr}),r.jsxs("div",{children:[r.jsxs("div",{style:Y.totalLabel,children:["Total spent ",b==="day"?"today":b==="month"?"this month":b==="year"?"this year":"all time"]}),r.jsx("div",{style:Y.totalVal,children:be(H)})]})]}),r.jsx("div",{style:Y.scopeRow,children:[["day","Day"],["month","Month"],["year","Year"],["all","All"]].map(([u,q])=>r.jsx("button",{onClick:()=>B(u),style:{...Y.scopeBtn,...b===u?Y.scopeBtnOn:{}},children:q},u))})]}),r.jsxs("div",{style:{...Y.cols,gridTemplateColumns:e?"1fr":"320px 1fr"},children:[r.jsxs("div",{style:Y.card,children:[r.jsxs("div",{style:Y.calHead,children:[r.jsx("button",{onClick:()=>ut(-1),style:Y.calNav,children:r.jsx(Dn,{size:16})}),r.jsx("span",{style:Y.calTitle,children:Pe}),r.jsx("button",{onClick:()=>ut(1),style:Y.calNav,children:r.jsx(sn,{size:16})})]}),r.jsxs("div",{style:Y.calGrid,children:[["M","T","W","T","F","S","S"].map((u,q)=>r.jsx("div",{style:Y.calDow,children:u},q)),Ee.map((u,q)=>u===null?r.jsx("div",{},q):r.jsxs("button",{onClick:()=>h(u.date),style:{...Y.calCell,...u.date===g?Y.calCellOn:{},...u.date===ep&&u.date!==g?Y.calCellToday:{}},children:[r.jsx("span",{children:u.day}),u.total>0&&r.jsx("span",{style:{...Y.calDot,background:u.date===g?"#fff":jr}})]},u.date))]})]}),r.jsxs("div",{children:[r.jsxs("div",{style:Y.card,children:[r.jsxs("div",{style:Y.cardTitleRow,children:[r.jsxs("div",{children:[r.jsx("div",{style:Y.cardTitle,children:Ot}),r.jsx("div",{style:Y.cardSub,children:"Tap a category to log an expense for this day."})]}),r.jsx("div",{style:Y.dayTotal,children:be(ye)})]}),r.jsxs("div",{style:Y.iconGrid,children:[o.map(u=>r.jsxs("div",{style:Y.iconCell,children:[r.jsx("button",{onClick:()=>nt(u),style:{...Y.iconBtn,background:u.color+"1A",color:u.color,borderColor:u.color+"44"},children:r.jsx(cn,{name:u.icon,size:22})}),r.jsx("span",{style:Y.iconLabel,children:u.name})]},u.id)),r.jsxs("div",{style:Y.iconCell,children:[r.jsx("button",{onClick:Xe,style:Y.iconBtnAdd,children:r.jsx(Qe,{size:20})}),r.jsx("span",{style:Y.iconLabel,children:"Add"})]})]}),r.jsxs("button",{onClick:()=>p(!0),style:Y.manageLink,children:[r.jsx(xt,{size:11})," Customize categories"]}),ge.length>0&&r.jsx("div",{style:Y.logList,children:ge.map(u=>{const q=re[u.category_id];return r.jsxs("div",{style:Y.logRow,children:[r.jsx("span",{style:{...Y.logIcon,background:((q==null?void 0:q.color)||"#9A968C")+"1A",color:(q==null?void 0:q.color)||"#9A968C"},children:r.jsx(cn,{name:q==null?void 0:q.icon,size:14})}),r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("div",{style:Y.logCat,children:(q==null?void 0:q.name)||"Deleted category"}),u.note&&r.jsx("div",{style:Y.logNote,children:u.note})]}),r.jsx("span",{style:Y.logAmt,children:be(u.amount)}),r.jsx("button",{onClick:()=>W(u.id,(q==null?void 0:q.name)||"Expense"),style:Y.delBtn,children:r.jsx(De,{size:14})})]},u.id)})})]}),r.jsxs("div",{style:Y.card,children:[r.jsx("div",{style:Y.cardTitleRow,children:r.jsxs("div",{children:[r.jsx("div",{style:Y.cardTitle,children:"Spending by category"}),r.jsxs("div",{style:Y.cardSub,children:[b==="day"?"Today":b==="month"?"This month":b==="year"?"This year":"All time"," — percentage & amount"]})]})}),se.length===0?r.jsx("div",{style:Y.muted,children:"No expenses logged for this period yet."}):r.jsxs("div",{style:Y.pieWrap,children:[r.jsxs("div",{style:Y.pieChart,children:[r.jsx("div",{style:{...Y.pieDisc,background:St}}),r.jsxs("div",{style:Y.pieHole,children:[r.jsx("span",{style:Y.pieHoleVal,children:be(H)}),r.jsx("span",{style:Y.pieHoleLbl,children:"total"})]})]}),r.jsx("div",{style:Y.pieLegend,children:pt.map(u=>r.jsxs("div",{style:Y.legendRow,children:[r.jsx("span",{style:{...Y.dot,background:u.cat.color}}),r.jsx(cn,{name:u.cat.icon,size:13,style:{color:u.cat.color,flexShrink:0}}),r.jsx("span",{style:Y.legendName,children:u.cat.name}),r.jsxs("span",{style:Y.legendPct,children:[Math.round(u.pct),"%"]}),r.jsx("span",{style:Y.legendAmt,children:be(u.amount)})]},u.cat.id))})]})]}),r.jsxs("div",{style:Y.card,children:[r.jsx("div",{style:Y.cardTitleRow,children:r.jsxs("div",{children:[r.jsx("div",{style:Y.cardTitle,children:"Monthly trend"}),r.jsx("div",{style:Y.cardSub,children:"Compare a month against the previous two"})]})}),r.jsx("div",{style:Y.tagRow,children:de.map(u=>r.jsxs("button",{onClick:()=>T(u),style:{...Y.tagChip,...C===u?Y.tagChipOn:{}},children:[r.jsx(Bd,{size:11})," ",I(u)]},u))}),r.jsxs("div",{style:{...Y.tagRow,marginTop:8},children:[r.jsxs("button",{onClick:()=>_("all"),style:{...Y.tagChip,...F==="all"?Y.tagChipOn:{}},children:[r.jsx(Bd,{size:11})," All categories"]}),o.map(u=>r.jsxs("button",{onClick:()=>_(String(u.id)),style:{...Y.tagChip,...F===String(u.id)?Y.tagChipOn:{}},children:[r.jsx(cn,{name:u.icon,size:11})," ",u.name]},u.id))]}),r.jsxs("div",{style:{...Y.trend3,marginTop:16},children:[r.jsxs("div",{style:Y.trendCol,children:[r.jsx("div",{style:Y.trendVal,children:be(E)}),r.jsx("div",{style:Y.trendLbl,children:I(Q[0])})]}),r.jsxs("div",{style:Y.trendCol,children:[r.jsx("div",{style:{...Y.trendVal,color:"var(--text-2)"},children:be(P)}),r.jsx("div",{style:Y.trendLbl,children:I(Q[1])})]}),r.jsxs("div",{style:Y.trendCol,children:[r.jsx("div",{style:{...Y.trendVal,color:"var(--text-3)"},children:be(G)}),r.jsx("div",{style:Y.trendLbl,children:I(Q[2])})]})]}),r.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:14},children:r.jsxs("div",{style:{...Y.trendBadge,color:O,background:O+"1A"},children:[r.jsx(pe,{size:15})," ",oe>0?"+":"",oe,"% vs ",I(Q[1])]})}),r.jsx($v,{items:[{label:I(Q[0]),value:E,color:jr},{label:I(Q[1]),value:P,color:"var(--text-3)"},{label:I(Q[2]),value:G,color:"var(--text-3)"}],money:be}),r.jsx("div",{style:Y.trendDivider}),r.jsxs("div",{style:Y.cardSub,children:["Category split for ",I(C)]}),M.length===0?r.jsx("div",{style:Y.muted,children:"No expenses logged for this month yet."}):r.jsxs("div",{style:{...Y.pieWrap,marginTop:10},children:[r.jsxs("div",{style:Y.pieChart,children:[r.jsx("div",{style:{...Y.pieDisc,background:he}}),r.jsxs("div",{style:Y.pieHole,children:[r.jsx("span",{style:Y.pieHoleVal,children:be(E)}),r.jsx("span",{style:Y.pieHoleLbl,children:"total"})]})]}),r.jsx("div",{style:Y.pieLegend,children:ee.map(u=>r.jsxs("div",{style:Y.legendRow,children:[r.jsx("span",{style:{...Y.dot,background:u.cat.color}}),r.jsx(cn,{name:u.cat.icon,size:13,style:{color:u.cat.color,flexShrink:0}}),r.jsx("span",{style:Y.legendName,children:u.cat.name}),r.jsxs("span",{style:Y.legendPct,children:[Math.round(u.pct),"%"]}),r.jsx("span",{style:Y.legendAmt,children:be(u.amount)})]},u.cat.id))})]})]})]})]}),A&&r.jsx("div",{style:Y.overlay,onClick:()=>S(null),children:r.jsxs("div",{style:Y.modal,onClick:u=>u.stopPropagation(),children:[r.jsxs("div",{style:Y.modalHead,children:[r.jsxs("span",{style:{...Y.modalTitle,display:"flex",alignItems:"center",gap:8},children:[r.jsx("span",{style:{...Y.iconBadge,background:A.cat.color+"1A",color:A.cat.color},children:r.jsx(cn,{name:A.cat.icon,size:16})}),A.cat.name]}),r.jsx("button",{onClick:()=>S(null),style:Y.iconBtnPlain,children:r.jsx(De,{size:16})})]}),r.jsx("label",{style:Y.label,children:"Amount *"}),r.jsx("input",{autoFocus:!0,type:"number",inputMode:"decimal",value:A.amount,onChange:u=>S(q=>({...q,amount:u.target.value})),onKeyDown:u=>u.key==="Enter"&&qe(),placeholder:"0",style:Y.input}),r.jsx("label",{style:Y.label,children:"Note (optional)"}),r.jsx("input",{value:A.note,onChange:u=>S(q=>({...q,note:u.target.value})),onKeyDown:u=>u.key==="Enter"&&qe(),placeholder:"What was it for?",style:Y.input}),r.jsxs("div",{style:Y.modalActions,children:[r.jsx("button",{onClick:()=>S(null),style:Y.cancelBtn,children:"Cancel"}),r.jsxs("button",{onClick:qe,disabled:!A.amount,style:{...Y.saveBtn,...A.amount?{}:{opacity:.5,cursor:"not-allowed"}},children:[r.jsx(Ne,{size:15})," Add"]})]})]})}),m&&r.jsx("div",{style:Y.overlay,onClick:()=>p(!1),children:r.jsxs("div",{style:Y.modal,onClick:u=>u.stopPropagation(),children:[r.jsxs("div",{style:Y.modalHead,children:[r.jsx("span",{style:Y.modalTitle,children:"Customize categories"}),r.jsx("button",{onClick:()=>p(!1),style:Y.iconBtnPlain,children:r.jsx(De,{size:16})})]}),r.jsx("div",{style:Y.manageList,children:o.map(u=>r.jsxs("div",{style:Y.manageRow,children:[r.jsx("span",{style:{...Y.iconBadge,background:u.color+"1A",color:u.color},children:r.jsx(cn,{name:u.icon,size:15})}),r.jsx("span",{style:{flex:1,fontSize:13.5,fontWeight:600},children:u.name}),r.jsx("button",{onClick:()=>ot(u),style:Y.delBtn,children:r.jsx(xt,{size:13})}),r.jsx("button",{onClick:()=>Tr(u),style:Y.delBtn,children:r.jsx(De,{size:14})})]},u.id))}),r.jsxs("button",{onClick:Xe,style:Y.addColInline,children:[r.jsx(Qe,{size:13})," Add category"]})]})}),v&&r.jsx("div",{style:Y.overlay,onClick:()=>R(null),children:r.jsxs("div",{style:Y.modal,onClick:u=>u.stopPropagation(),children:[r.jsxs("div",{style:Y.modalHead,children:[r.jsx("span",{style:Y.modalTitle,children:v.id?"Edit category":"New category"}),r.jsx("button",{onClick:()=>R(null),style:Y.iconBtnPlain,children:r.jsx(De,{size:16})})]}),r.jsx("label",{style:Y.label,children:"Name *"}),r.jsx("input",{autoFocus:!0,value:v.name,onChange:u=>R(q=>({...q,name:u.target.value})),onKeyDown:u=>u.key==="Enter"&&tt(),placeholder:"e.g. Vegetables, Petrol…",style:Y.input}),r.jsx("label",{style:Y.label,children:"Color"}),r.jsx("div",{style:Y.colorRow,children:Ma.map(u=>r.jsx("button",{onClick:()=>R(q=>({...q,color:u})),style:{...Y.colorSwatch,background:u,...v.color===u?Y.colorSwatchOn:{}}},u))}),r.jsx("label",{style:Y.label,children:"Icon"}),r.jsx("div",{style:Y.iconPickGrid,children:Object.keys(Qm).map(u=>r.jsx("button",{onClick:()=>R(q=>({...q,icon:u})),style:{...Y.iconPick,...v.icon===u?{background:v.color+"22",borderColor:v.color,color:v.color}:{}},children:r.jsx(cn,{name:u,size:17})},u))}),r.jsxs("div",{style:Y.modalActions,children:[r.jsx("button",{onClick:()=>R(null),style:Y.cancelBtn,children:"Cancel"}),r.jsxs("button",{onClick:tt,disabled:!v.name.trim(),style:{...Y.saveBtn,...v.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[r.jsx(Ne,{size:15})," ",v.id?"Save":"Create"]})]})]})}),!a&&r.jsx("div",{style:Y.muted,children:"Loading…"}),r.jsx(tr,{toasts:w,onUndo:te,onDismiss:z})]})}function $v({items:e,money:t}){const n=Math.max(1,...e.map(o=>o.value));return r.jsx("div",{style:Y.tbWrap,children:e.map((o,i)=>r.jsxs("div",{style:Y.tbRow,children:[r.jsx("div",{style:Y.tbLbl,children:o.label}),r.jsx("div",{style:Y.tbTrack,children:r.jsx("div",{style:{...Y.tbBar,width:`${o.value/n*100}%`,background:o.color}})}),r.jsx("div",{style:Y.tbVal,children:t(o.value)})]},i))})}const Y={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},totalCard:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:14,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:16,padding:"16px 18px",marginBottom:16,flexWrap:"wrap"},totalLeft:{display:"flex",alignItems:"center",gap:12},totalLabel:{fontSize:12,color:"var(--text-3)",fontWeight:600},totalVal:{fontSize:24,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:2},scopeRow:{display:"flex",gap:6},scopeBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 13px",borderRadius:8,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},scopeBtnOn:{background:jr,color:"#fff",borderColor:jr},cols:{display:"grid",gap:16,alignItems:"start"},card:{background:"var(--surface)",borderRadius:16,padding:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)",marginBottom:16},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14,gap:10},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardSub:{fontSize:11.5,color:"var(--text-3)",marginTop:2},dayTotal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap",color:jr},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"14px 0"},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},calNav:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4},calDow:{fontSize:10.5,fontWeight:700,color:"var(--text-3)",textAlign:"center",padding:"4px 0"},calCell:{position:"relative",border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",borderRadius:8,aspectRatio:"1",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},calCellOn:{background:jr,color:"#fff",borderColor:jr,fontWeight:700},calCellToday:{borderColor:jr,fontWeight:700},calDot:{position:"absolute",bottom:3,width:4,height:4,borderRadius:"50%"},iconGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(64px, 1fr))",gap:10,marginTop:4},iconCell:{display:"flex",flexDirection:"column",alignItems:"center",gap:5},iconBtn:{width:52,height:52,borderRadius:14,border:"1px solid",display:"grid",placeItems:"center",cursor:"pointer"},iconBtnAdd:{width:52,height:52,borderRadius:14,border:"1px dashed var(--border)",background:"none",color:"var(--text-3)",display:"grid",placeItems:"center",cursor:"pointer"},iconLabel:{fontSize:10.5,fontWeight:600,color:"var(--text-2)",textAlign:"center",maxWidth:66,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},manageLink:{display:"inline-flex",alignItems:"center",gap:5,border:"none",background:"none",color:"var(--text-3)",fontSize:11.5,fontWeight:600,cursor:"pointer",marginTop:12,padding:0,fontFamily:"inherit"},logList:{marginTop:14,paddingTop:14,borderTop:"1px solid var(--border)",display:"flex",flexDirection:"column",gap:8},logRow:{display:"flex",alignItems:"center",gap:10},logIcon:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},logCat:{fontSize:13,fontWeight:600},logNote:{fontSize:11,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},logAmt:{fontSize:13.5,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},delBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",flexShrink:0},pieWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap"},pieChart:{position:"relative",width:132,height:132,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:80,height:80,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:14,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:7},dot:{width:9,height:9,borderRadius:3,flexShrink:0},legendName:{flex:1,fontSize:12.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},legendPct:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,width:34,textAlign:"right"},legendAmt:{fontSize:12.5,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:64,textAlign:"right"},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtnPlain:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},iconBadge:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)",marginBottom:8},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},manageList:{display:"flex",flexDirection:"column",gap:6,marginBottom:10,maxHeight:320,overflowY:"auto"},manageRow:{display:"flex",alignItems:"center",gap:10,padding:"6px 2px"},addColInline:{display:"inline-flex",alignItems:"center",gap:5,border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"9px 12px",borderRadius:8,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit",width:"100%",justifyContent:"center"},colorRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:4},colorSwatch:{width:26,height:26,borderRadius:"50%",border:"2px solid transparent",cursor:"pointer",padding:0},colorSwatchOn:{border:"2px solid var(--text)",boxShadow:"0 0 0 2px var(--surface)"},iconPickGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6,marginBottom:4},iconPick:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",borderRadius:9,height:36,display:"grid",placeItems:"center",cursor:"pointer"},tagRow:{display:"flex",gap:6,flexWrap:"wrap"},tagChip:{display:"inline-flex",alignItems:"center",gap:4,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:20,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tagChipOn:{background:jr,color:"#fff",borderColor:jr},trendDivider:{height:1,background:"var(--border)",margin:"16px 0 12px"},trend3:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12,gap:8},trendCol:{textAlign:"center",flex:1},trendVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},trendLbl:{fontSize:11,color:"var(--text-3)",marginTop:2},trendBadge:{display:"inline-flex",alignItems:"center",gap:4,fontSize:13,fontWeight:800,padding:"6px 12px",borderRadius:20,width:"fit-content"},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:78,fontSize:11,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},tbTrack:{flex:1,height:14,background:"#F2F0EA",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:64,fontSize:11,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"}},Od=[{id:"sandstone",name:"Sandstone",description:"Warm editorial light — the original Anvil look.",dark:!1,swatch:["#F7F6F3","#4C9A6B","#26241F"],vars:{"--bg":"#F7F6F3","--surface":"#FFFFFF","--surface-2":"#FAFAF8","--hover":"#F2F1EC","--border":"#ECEAE3","--text":"#26241F","--text-2":"#6B675E","--text-3":"#9A968C","--accent":"#4C9A6B","--accent-strong":"#26241F","--accent-2":"#3A352C"}},{id:"midnight",name:"Midnight",description:"Deep low-glare dark mode for night owls and focus.",dark:!0,swatch:["#161513","#6FB58C","#ECEAE3"],vars:{"--bg":"#161513","--surface":"#211F1C","--surface-2":"#1B1A17","--hover":"#2B2924","--border":"#34312B","--text":"#ECEAE3","--text-2":"#B6B1A6","--text-3":"#8A857A","--accent":"#6FB58C","--accent-strong":"#2E6F4B","--accent-2":"#245C3E"}},{id:"blossom",name:"Blossom",description:"Soft rose & blush — gentle, warm, and feminine.",dark:!1,swatch:["#FFF5F8","#E0608E","#B23A6B"],vars:{"--bg":"#FFF5F8","--surface":"#FFFFFF","--surface-2":"#FFF0F4","--hover":"#FDE7EE","--border":"#F6D9E2","--text":"#3D2230","--text-2":"#7A5466","--text-3":"#B08799","--accent":"#E0608E","--accent-strong":"#B23A6B","--accent-2":"#9C2F5C"}},{id:"tide",name:"Tide",description:"Calm professional blues — clean and focused.",dark:!1,swatch:["#F1F6FA","#2E86C1","#1C4E73"],vars:{"--bg":"#F1F6FA","--surface":"#FFFFFF","--surface-2":"#ECF3F9","--hover":"#E2EEF6","--border":"#D5E3EE","--text":"#13283A","--text-2":"#4A6275","--text-3":"#8AA0B0","--accent":"#2E86C1","--accent-strong":"#1C4E73","--accent-2":"#163E5C"}},{id:"velocity",name:"Velocity",description:"High-energy sport — crisp slate with electric orange.",dark:!1,swatch:["#F4F5F7","#F4511E","#1F2A37"],vars:{"--bg":"#F4F5F7","--surface":"#FFFFFF","--surface-2":"#EEF0F3","--hover":"#E7EAEE","--border":"#DCE0E6","--text":"#18202B","--text-2":"#515B68","--text-3":"#8B95A1","--accent":"#F4511E","--accent-strong":"#1F2A37","--accent-2":"#16202B"}},{id:"evergreen",name:"Evergreen",description:"Earthy forest greens — grounded and natural.",dark:!1,swatch:["#F2F6F1","#3E8E52","#2A4A30"],vars:{"--bg":"#F2F6F1","--surface":"#FFFFFF","--surface-2":"#ECF2EA","--hover":"#E4EEE2","--border":"#D7E4D3","--text":"#1E2B20","--text-2":"#4F6151","--text-3":"#8AA08C","--accent":"#3E8E52","--accent-strong":"#2A4A30","--accent-2":"#213B26"}},{id:"amethyst",name:"Amethyst",description:"Premium purple & plum — elegant and refined.",dark:!1,swatch:["#F6F4FB","#7A4FE0","#3A2D5C"],vars:{"--bg":"#F6F4FB","--surface":"#FFFFFF","--surface-2":"#F1EDF9","--hover":"#EAE3F6","--border":"#DFD6F0","--text":"#241B36","--text-2":"#5A4E72","--text-3":"#9588AE","--accent":"#7A4FE0","--accent-strong":"#3A2D5C","--accent-2":"#2E2349"}}],tp="sandstone",Km="anvil_theme",Pv=e=>Od.find(t=>t.id===e)||Od[0];function Xm(){try{return localStorage.getItem(Km)||tp}catch{return tp}}function ci(e,t=!0){const n=Pv(e),o=document.documentElement;Object.entries(n.vars).forEach(([s,l])=>o.style.setProperty(s,l)),o.style.colorScheme=n.dark?"dark":"light",o.setAttribute("data-theme",n.id);const i=document.querySelector('meta[name="theme-color"]');if(i&&i.setAttribute("content",n.vars["--surface"]),t)try{localStorage.setItem(Km,n.id)}catch{}return n.id}const Nv=e=>e%10===1&&e!==11?"st":e%10===2&&e!==12?"nd":e%10===3&&e!==13?"rd":"th";function Ov(e=560){const[t,n]=c.useState(()=>window.innerWidth<=e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<=e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),t}function Hv({screens:e,order:t,hidden:n,themeId:o,currency:i,monthStartDay:s,ticker:l,defaultScreen:a,onSetDefault:d,onSaveSidebar:g,onPreviewTheme:h,onCommitTheme:x,onSelectCurrency:f,onSelectMonthStartDay:A,onSaveTicker:S,onClose:v}){const[R,m]=c.useState("sidebar"),[p,b]=c.useState(()=>t.map(O=>({id:O,hidden:n.includes(O)}))),[B,C]=c.useState(o),[T,F]=c.useState(""),[_,D]=c.useState(!1),W=Ov(),[w,te]=c.useState(!!(l!=null&&l.enabled)),[z,re]=c.useState(()=>{const O=Array.isArray(l==null?void 0:l.statements)?l.statements.slice(0,5):[];return O.length?O:[""]}),[be,ge]=c.useState((l==null?void 0:l.speed)??60),[ye,J]=c.useState((l==null?void 0:l.delay)??3),[H,se]=c.useState(!1),V=(O,M)=>re(k=>k.map((ee,he)=>he===O?M:ee)),de=()=>re(O=>O.length<5?[...O,""]:O),I=O=>re(M=>M.length>1?M.filter((k,ee)=>ee!==O):M),ie=()=>{const O=z.map(M=>M.trim()).filter(Boolean).slice(0,5);S({enabled:w,statements:O,speed:Number(be),delay:Number(ye)}),se(!0),setTimeout(()=>se(!1),1500)};c.useEffect(()=>{$.getSetting("golden_music").then(O=>F((O==null?void 0:O.value)||"")).catch(()=>{})},[]);const Ie=()=>{$.setSetting("golden_music",T.trim()).then(()=>{D(!0),setTimeout(()=>D(!1),1500)}).catch(()=>{})},Q=O=>{C(O),h(O)},y=p.filter(O=>!O.hidden).length,E=(O,M)=>{const k=O+M;if(k<0||k>=p.length)return;const ee=[...p];[ee[O],ee[k]]=[ee[k],ee[O]],b(ee)},P=O=>{const M=p[O];if(!M.hidden&&y<=1)return;const k=[...p];k[O]={...M,hidden:!M.hidden},b(k)},G=()=>{g(p.map(O=>O.id),p.filter(O=>O.hidden).map(O=>O.id))},oe=W?{...Ce.overlay,padding:0}:Ce.overlay,pe=W?{...Ce.modal,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"100%",borderRadius:0,border:"none"}:Ce.modal;return r.jsx("div",{style:oe,onClick:v,children:r.jsxs("div",{style:pe,onClick:O=>O.stopPropagation(),children:[r.jsxs("div",{style:Ce.head,children:[r.jsx("div",{style:Ce.title,children:"Settings"}),r.jsx("button",{onClick:v,style:Ce.closeBtn,children:r.jsx(De,{size:18})})]}),r.jsxs("div",{style:Ce.tabs,children:[r.jsxs("button",{onClick:()=>m("sidebar"),style:{...Ce.tab,...R==="sidebar"?Ce.tabOn:{}},children:[r.jsx(ly,{size:15})," Configure sidebar"]}),r.jsxs("button",{onClick:()=>m("themes"),style:{...Ce.tab,...R==="themes"?Ce.tabOn:{}},children:[r.jsx(cy,{size:15})," Themes"]}),r.jsxs("button",{onClick:()=>m("currency"),style:{...Ce.tab,...R==="currency"?Ce.tabOn:{}},children:[r.jsx(Qx,{size:15})," Currency"]}),r.jsxs("button",{onClick:()=>m("music"),style:{...Ce.tab,...R==="music"?Ce.tabOn:{}},children:[r.jsx(Oc,{size:15})," Music"]}),r.jsxs("button",{onClick:()=>m("reminders"),style:{...Ce.tab,...R==="reminders"?Ce.tabOn:{}},children:[r.jsx(Sm,{size:15})," Reminders"]})]}),r.jsx("div",{style:Ce.body,children:R==="sidebar"?r.jsxs(r.Fragment,{children:[r.jsxs("p",{style:Ce.hint,children:["Reorder with the arrows, hide ones you don't use, and tap ",r.jsx(Pi,{size:11,style:{verticalAlign:"-1px"}})," to set the screen that opens on launch."]}),r.jsx("div",{style:Ce.list,children:p.map((O,M)=>{const k=e[O.id],ee=k.icon,he=a===O.id;return r.jsxs("div",{style:{...Ce.row,opacity:O.hidden?.5:1,...he?{borderColor:"var(--accent)"}:{}},children:[r.jsx("span",{style:Ce.rowNum,children:M+1}),r.jsx(ee,{size:16}),r.jsxs("span",{style:Ce.rowLabel,children:[k.label,he&&r.jsx("span",{style:Ce.defaultTag,children:"default"})]}),r.jsx("button",{onClick:()=>d(O.id),title:he?"Opens on launch":"Set as default",style:{...Ce.iconBtn,...he?{color:"var(--accent)"}:{}},children:r.jsx(Pi,{size:15})}),r.jsx("button",{onClick:()=>P(M),title:O.hidden?"Show":"Hide",style:{...Ce.iconBtn,...O.hidden?{}:{color:"var(--accent)"}},children:O.hidden?r.jsx(Td,{size:15}):r.jsx(fl,{size:15})}),r.jsx("button",{onClick:()=>E(M,-1),disabled:M===0,style:{...Ce.iconBtn,opacity:M===0?.3:1},children:r.jsx(vm,{size:15})}),r.jsx("button",{onClick:()=>E(M,1),disabled:M===p.length-1,style:{...Ce.iconBtn,opacity:M===p.length-1?.3:1},children:r.jsx(Qi,{size:15})})]},O.id)})}),r.jsxs("button",{onClick:G,style:Ce.saveBtn,children:[r.jsx(Ne,{size:15})," Save sidebar"]})]}):R==="currency"?r.jsxs(r.Fragment,{children:[r.jsx("p",{style:Ce.hint,children:"Choose the currency used across Wallet and Worth. Applies instantly."}),r.jsx("div",{style:Ce.list,children:Rd.map(O=>{const M=O.code===i;return r.jsxs("button",{onClick:()=>f(O.code),style:{...Ce.row,cursor:"pointer",textAlign:"left",width:"100%",...M?{borderColor:"var(--accent)"}:{}},children:[r.jsx("span",{style:Ce.curSymbol,children:O.symbol}),r.jsxs("span",{style:Ce.rowLabel,children:[O.label," ",r.jsx("span",{style:Ce.curCode,children:O.code})]}),M&&r.jsx("span",{style:Ce.themeCheck,children:r.jsx(Ne,{size:13})})]},O.code)})}),r.jsx("div",{style:Ce.subDivider}),r.jsx("div",{style:Ce.fieldLbl,children:"Month starts on"}),r.jsx("p",{style:Ce.hint,children:'If your salary lands on the 25th, set this to 25 — Wallet and Expenses will treat each "month" as running 25th to 24th instead of calendar month.'}),r.jsx("select",{value:s,onChange:O=>A(Number(O.target.value)),style:Ce.musicInput,children:Array.from({length:28},(O,M)=>M+1).map(O=>r.jsx("option",{value:O,children:O===1?"1st (calendar month)":`${O}${Nv(O)}`},O))})]}):R==="music"?r.jsxs(r.Fragment,{children:[r.jsxs("p",{style:Ce.hint,children:["Paste a YouTube link to play softly while you write in the ",r.jsx("b",{children:"Golden Book"}),". It plays only on that screen (audio only)."]}),r.jsx("input",{value:T,onChange:O=>F(O.target.value),placeholder:"https://youtube.com/watch?v=…",style:Ce.musicInput}),r.jsxs("button",{onClick:Ie,style:Ce.saveBtn,children:[r.jsx(Ne,{size:15})," ",_?"Saved":"Save music"]})]}):R==="reminders"?r.jsxs(r.Fragment,{children:[r.jsx("p",{style:Ce.hint,children:"Up to 5 reminders scroll across the top of every screen — a gentle nudge toward your goals."}),r.jsxs("button",{onClick:()=>te(O=>!O),style:{...Ce.row,cursor:"pointer",width:"100%",justifyContent:"space-between",...w?{borderColor:"var(--accent)"}:{}},children:[r.jsx("span",{style:Ce.rowLabel,children:"Show reminder banner"}),r.jsx("span",{style:{...Ce.switch,...w?Ce.switchOn:{}},children:w?"On":"Off"})]}),r.jsxs("div",{style:{marginTop:14},children:[r.jsxs("div",{style:Ce.fieldLbl,children:["Reminders (",z.filter(O=>O.trim()).length,"/5)"]}),z.map((O,M)=>r.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[r.jsx("input",{value:O,onChange:k=>V(M,k.target.value),maxLength:120,placeholder:`Reminder ${M+1}`,style:{...Ce.musicInput,marginBottom:0}}),r.jsx("button",{onClick:()=>I(M),style:Ce.iconBtn,title:"Remove",children:r.jsx(De,{size:15})})]},M)),z.length<5&&r.jsxs("button",{onClick:de,style:Ce.addRowBtn,children:[r.jsx(Qe,{size:14})," Add reminder"]})]}),r.jsxs("div",{style:{marginTop:16},children:[r.jsxs("div",{style:Ce.sliderHead,children:[r.jsx("span",{style:Ce.fieldLbl,children:"Scroll speed"}),r.jsxs("span",{style:Ce.sliderVal,children:[be," px/s"]})]}),r.jsx("input",{type:"range",min:20,max:200,step:5,value:be,onChange:O=>ge(O.target.value),style:Ce.range})]}),r.jsxs("div",{style:{marginTop:12},children:[r.jsxs("div",{style:Ce.sliderHead,children:[r.jsx("span",{style:Ce.fieldLbl,children:"Delay between reminders"}),r.jsxs("span",{style:Ce.sliderVal,children:[ye,"s"]})]}),r.jsx("input",{type:"range",min:0,max:15,step:1,value:ye,onChange:O=>J(O.target.value),style:Ce.range})]}),r.jsxs("button",{onClick:ie,style:{...Ce.saveBtn,marginTop:16},children:[r.jsx(Ne,{size:15})," ",H?"Saved":"Save reminders"]})]}):r.jsxs(r.Fragment,{children:[r.jsxs("p",{style:Ce.hint,children:["Tap a theme to preview it live, then hit ",r.jsx("b",{children:"Apply theme"})," to keep it."]}),r.jsx("div",{style:Ce.themeGrid,children:Od.map(O=>{const M=O.id===B;return r.jsxs("button",{onClick:()=>Q(O.id),style:{...Ce.themeCard,...M?Ce.themeCardOn:{}},children:[r.jsxs("div",{style:Ce.swatchRow,children:[O.swatch.map((k,ee)=>r.jsx("span",{style:{...Ce.swatch,background:k}},ee)),M&&r.jsx("span",{style:Ce.themeCheck,children:r.jsx(Ne,{size:13})})]}),r.jsxs("div",{style:Ce.themeName,children:[O.name,O.dark?r.jsx("span",{style:Ce.darkTag,children:"Dark"}):null]}),r.jsx("div",{style:Ce.themeDesc,children:O.description})]},O.id)})}),r.jsxs("button",{onClick:()=>x(B),disabled:B===o,style:{...Ce.saveBtn,...B===o?Ce.saveBtnDisabled:{}},children:[r.jsx(Ne,{size:15})," ",B===o?"Theme applied":"Apply theme"]})]})})]})})}const Ce={overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",color:"var(--text)",borderRadius:16,width:460,maxWidth:"100%",maxHeight:"88vh",display:"flex",flexDirection:"column",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)",overflow:"hidden"},head:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 18px",borderBottom:"1px solid var(--border)",flexShrink:0},title:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},tabs:{display:"flex",flexWrap:"wrap",gap:6,padding:"12px 18px 0",flexShrink:0},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"transparent"},body:{padding:"16px 18px 20px",overflowY:"auto",overflowX:"hidden",flex:1,minHeight:0},hint:{fontSize:12.5,color:"var(--text-3)",lineHeight:1.5,margin:"0 0 14px"},list:{display:"flex",flexDirection:"column",gap:6},row:{display:"flex",alignItems:"center",gap:10,padding:"9px 11px",background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:9},rowNum:{fontSize:11,fontWeight:700,color:"var(--text-3)",width:16,textAlign:"center"},rowLabel:{flex:1,fontSize:13.5,fontWeight:500,display:"flex",alignItems:"center",gap:7},defaultTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--accent)",background:"color-mix(in srgb, var(--accent) 14%, transparent)",padding:"1px 6px",borderRadius:6},curSymbol:{width:22,textAlign:"center",fontSize:15,fontWeight:700,color:"var(--text)"},curCode:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginLeft:4},iconBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},saveBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:7,width:"100%",marginTop:16,border:"none",background:"var(--accent)",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer"},saveBtnDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"default"},musicInput:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",marginBottom:12},switch:{fontSize:12,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:20,padding:"3px 12px",minWidth:44,textAlign:"center"},switchOn:{background:"var(--accent)",color:"#fff"},fieldLbl:{fontSize:12,fontWeight:700,color:"var(--text-2)",marginBottom:7},subDivider:{height:1,background:"var(--border)",margin:"18px 0 14px"},addRowBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"9px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},sliderHead:{display:"flex",justifyContent:"space-between",alignItems:"baseline"},sliderVal:{fontSize:12,fontWeight:700,color:"var(--accent)"},range:{width:"100%",accentColor:"var(--accent)",cursor:"pointer"},themeGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},themeCard:{textAlign:"left",border:"2px solid var(--border)",background:"var(--surface-2)",borderRadius:12,padding:12,cursor:"pointer",display:"flex",flexDirection:"column",gap:6,outline:"none",WebkitTapHighlightColor:"transparent",transition:"border-color .15s ease, box-shadow .15s ease"},themeCardOn:{borderColor:"var(--accent)",boxShadow:"0 0 0 3px color-mix(in srgb, var(--accent) 25%, transparent)"},swatchRow:{display:"flex",alignItems:"center",gap:5,position:"relative"},swatch:{width:22,height:22,borderRadius:"50%",border:"1px solid rgba(0,0,0,0.08)"},themeCheck:{marginLeft:"auto",width:20,height:20,borderRadius:"50%",background:"var(--accent)",color:"#fff",display:"grid",placeItems:"center"},themeName:{fontSize:14,fontWeight:700,display:"flex",alignItems:"center",gap:6},darkTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",background:"var(--hover)",color:"var(--text-2)",padding:"1px 6px",borderRadius:6},themeDesc:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.4}},Gv=`
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
`;function Uv({statements:e,speed:t=60,delay:n=3}){const o=c.useMemo(()=>(e||[]).map(d=>(d||"").trim()).filter(Boolean).slice(0,5),[e]),[i,s]=c.useState(0),l=c.useRef(null),a=c.useRef(null);return c.useEffect(()=>{s(0)},[o]),c.useEffect(()=>{if(!o.length)return;const d=l.current,g=a.current;if(!d||!g)return;const h=d.offsetWidth,x=g.offsetWidth,f=Math.max(10,Number(t)||60),A=Math.max(2500,(h+x)/f*1e3),S=g.animate([{transform:`translateX(${h}px)`},{transform:`translateX(${-x}px)`}],{duration:A,easing:"linear",fill:"both"});let v;const R=()=>{v=setTimeout(()=>s(m=>(m+1)%o.length),Math.max(0,Number(n)||0)*1e3)};return S.addEventListener("finish",R),()=>{S.cancel(),S.removeEventListener("finish",R),clearTimeout(v)}},[i,o,t,n]),o.length?r.jsxs("div",{style:ao.bar,"aria-label":"Reminders",children:[r.jsx("style",{children:Gv}),r.jsx("div",{className:"anvil-tick-glow",style:ao.icon,children:r.jsx("span",{className:"anvil-tick-pulse",style:{display:"grid",placeItems:"center"},children:r.jsx(Sm,{size:15})})}),r.jsxs("div",{ref:l,style:ao.viewport,children:[r.jsx("span",{className:"anvil-tick-shimmer",style:ao.shimmer}),r.jsx("div",{className:"anvil-tick-float",style:ao.floatWrap,children:r.jsx("div",{ref:a,style:ao.text,children:o[i%o.length]},i)})]})]}):null}const ao={bar:{display:"flex",alignItems:"center",height:36,flexShrink:0,overflow:"hidden",borderBottom:"1px solid var(--border)",background:"color-mix(in srgb, var(--accent) 12%, var(--surface))"},icon:{display:"grid",placeItems:"center",width:42,height:"100%",flexShrink:0,color:"#fff",background:"var(--accent)",zIndex:2},viewport:{position:"relative",flex:1,height:"100%",overflow:"hidden",display:"flex",alignItems:"center"},shimmer:{position:"absolute",top:0,bottom:0,left:0,width:"22%",background:"linear-gradient(100deg, transparent, color-mix(in srgb, var(--accent) 22%, transparent), transparent)",pointerEvents:"none",zIndex:1},floatWrap:{display:"inline-flex",alignItems:"center",willChange:"transform"},text:{whiteSpace:"nowrap",fontSize:13.5,fontWeight:700,color:"var(--text)",letterSpacing:"0.01em",willChange:"transform",paddingLeft:4}};ci(Xm(),!1);const Hd="anvil_default_screen",rp=()=>{try{return localStorage.getItem(Hd)}catch{return null}},_n={dashboard:{label:"Dashboard",icon:sy,component:Ly},kickstart:{label:"Kickstart",icon:Bm,component:hv},golden:{label:"Golden Book",icon:Xx,component:yv},habits:{label:"Habits",icon:Ed,component:t0},quadrant:{label:"Quadrant",icon:Pc,component:Ny},goals:{label:"Goals",icon:Gc,component:Ky},grove:{label:"Grove",icon:Dd,component:O0},worth:{label:"Rewards",icon:oy,component:X0},vault:{label:"Wallet",icon:Qc,component:iv},expenses:{label:"Expenses",icon:kl,component:_v},journal:{label:"Journal",icon:_c,component:u0},revision:{label:"Revision",icon:Dm,component:C0},affirmations:{label:"Affirmations",icon:eo,component:T0},skills:{label:"Skills",icon:km,component:b0},spiritual:{label:"Spiritual",icon:vi,component:f0},mindscape:{label:"Mindscape",icon:jm,component:Cv},achievements:{label:"Achievements",icon:nn,component:Rv},delight:{label:"Delights",icon:Im,component:Wv}},qm=["dashboard","kickstart","golden","habits","quadrant","goals","grove","journal","revision","affirmations","skills","spiritual","mindscape","achievements","delight","worth","vault","expenses"];function As(e){const t=qm.filter(i=>_n[i]),o=[...(Array.isArray(e)?e:[]).filter(i=>_n[i])];return t.forEach(i=>{o.includes(i)||o.push(i)}),o}function Vv(){const[e,t]=c.useState(()=>window.innerWidth<720);return c.useEffect(()=>{const n=()=>t(window.innerWidth<720);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}function Yv(){const[e,t]=c.useState(()=>{const Q=rp();return Q&&_n[Q]?Q:"habits"}),[n,o]=c.useState(()=>rp()||"habits"),[i,s]=c.useState(!1),[l,a]=c.useState(null),[d,g]=c.useState(!1),[h,x]=c.useState(!1),[f,A]=c.useState(Xm()),[S,v]=c.useState(Lo()),[R,m]=c.useState($d()),[p,b]=c.useState({enabled:!1,statements:[],speed:60,delay:3}),[B,C]=c.useState(()=>As(qm)),[T,F]=c.useState([]),[_]=c.useState(()=>new URLSearchParams(window.location.search).get("reset")),D=Vv(),W=c.useRef(e);c.useEffect(()=>{W.current=e},[e]),c.useEffect(()=>{if(!l)return;const Q=10,y=new Set(["kickstart","mindscape"]),E=setInterval(()=>{const P=W.current;!document.hidden&&P&&!y.has(P)&&$.addScreenTime(P,Q).catch(()=>{})},Q*1e3);return()=>clearInterval(E)},[l]),c.useEffect(()=>{let Q=!1;const y=()=>{Ad(),a(null)};return window.addEventListener("anvil-unauthorized",y),Xc()?$.me().then(E=>{Q||a(E)}).catch(()=>{}).finally(()=>{Q||g(!0)}):g(!0),()=>{Q=!0,window.removeEventListener("anvil-unauthorized",y)}},[]),c.useEffect(()=>{l&&($.getSetting("theme").then(Q=>{Q!=null&&Q.value&&A(ci(Q.value))}).catch(()=>{}),$.getSetting("currency").then(Q=>{Q!=null&&Q.value&&v(gu(Q.value))}).catch(()=>{}),$.getSetting("month_start_day").then(Q=>{Q!=null&&Q.value&&m(_u(Q.value))}).catch(()=>{}),$.getSetting("ticker").then(Q=>{Q!=null&&Q.value&&b(y=>({...y,...Q.value}))}).catch(()=>{}),$.getSetting("default_screen").then(Q=>{if(Q!=null&&Q.value&&_n[Q.value]){o(Q.value);try{localStorage.setItem(Hd,Q.value)}catch{}}}).catch(()=>{}),$.getSetting("sidebar_order").then(Q=>{Array.isArray(Q==null?void 0:Q.value)&&C(As(Q.value))}).catch(()=>{}),$.getSetting("sidebar_hidden").then(Q=>{Array.isArray(Q==null?void 0:Q.value)&&F(Q.value)}).catch(()=>{}))},[l]);function w(Q){t(Q),s(!1)}const te=()=>{Ad(),a(null)},z=Q=>{ci(Q,!1)},re=Q=>{A(ci(Q)),$.setSetting("theme",Q).catch(()=>{}),x(!1)},be=()=>{ci(f,!1),x(!1)},ge=Q=>{v(gu(Q)),$.setSetting("currency",Q).catch(()=>{})},ye=Q=>{m(_u(Q)),$.setSetting("month_start_day",Number(Q)).catch(()=>{})},J=Q=>{b(Q),$.setSetting("ticker",Q).catch(()=>{})},H=Q=>{o(Q);try{localStorage.setItem(Hd,Q)}catch{}$.setSetting("default_screen",Q).catch(()=>{})},se=(Q,y)=>{if(C(As(Q)),F(y),x(!1),$.setSetting("sidebar_order",Q).catch(()=>{}),$.setSetting("sidebar_hidden",y).catch(()=>{}),y.includes(e)){const E=As(Q).find(P=>!y.includes(P));E&&t(E)}},V=B.filter(Q=>!T.includes(Q));if(_)return r.jsx(Z0,{token:_,onDone:()=>{window.history.replaceState({},"",window.location.pathname),window.location.reload()}});if(!d)return r.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",fontFamily:"'Inter',system-ui,sans-serif",color:"var(--text-3)"},children:"Loading…"});if(!l)return r.jsx(q0,{onAuthed:a});const de=_n[e],I=de.component,ie=()=>r.jsx("div",{style:Je.navItems,children:V.map(Q=>{const y=_n[Q];if(!y)return null;const E=y.icon,P=e===Q;return r.jsxs("button",{onClick:()=>w(Q),title:y.label,style:{...Je.navItem,...P?Je.navItemOn:{}},children:[r.jsx(E,{size:18}),r.jsx("span",{style:Je.navLabel,children:y.label})]},Q)})}),Ie=()=>r.jsxs("div",{style:Je.footerWrap,children:[r.jsxs("button",{onClick:()=>x(!0),style:Je.settingsBtn,title:"Settings",children:[r.jsx(Rm,{size:17}),r.jsx("span",{children:"Settings"})]}),r.jsxs("div",{style:Je.userFooter,children:[r.jsxs("div",{style:Je.userInfo,children:[r.jsx("div",{style:Je.userAvatar,children:(l.name||l.email||"?").charAt(0).toUpperCase()}),r.jsxs("div",{style:{minWidth:0},children:[r.jsx("div",{style:Je.userName,children:l.name||"You"}),r.jsx("div",{style:Je.userEmail,children:l.email})]})]}),r.jsx("button",{onClick:te,style:Je.logoutBtn,title:"Sign out",children:r.jsx(dy,{size:16})})]})]});return r.jsxs("div",{style:Je.shell,children:[!D&&r.jsxs("nav",{style:Je.nav,children:[r.jsxs("div",{style:Je.brand,children:[r.jsx("div",{style:Je.brandLogo,children:"B"}),r.jsx("span",{style:Je.brandName,children:"Anvil"})]}),r.jsx(ie,{}),r.jsx(Ie,{})]}),D&&i&&r.jsx("div",{style:Je.overlay,onClick:()=>s(!1),children:r.jsxs("nav",{style:Je.drawer,onClick:Q=>Q.stopPropagation(),children:[r.jsxs("div",{style:Je.drawerHeader,children:[r.jsxs("div",{style:Je.brand,children:[r.jsx("div",{style:Je.brandLogo,children:"B"}),r.jsx("span",{style:Je.brandName,children:"Anvil"})]}),r.jsx("button",{style:Je.closeBtn,onClick:()=>s(!1),children:r.jsx(De,{size:20})})]}),r.jsx("div",{style:Je.drawerNav,children:r.jsx(ie,{})}),r.jsx(Ie,{})]})}),r.jsxs("div",{style:Je.content,children:[D&&r.jsxs("div",{style:Je.topBar,children:[r.jsx("button",{style:Je.menuBtn,onClick:()=>s(!0),children:r.jsx(Nc,{size:22})}),r.jsx("span",{style:Je.topBarTitle,children:de.label}),r.jsx("div",{style:{width:38}})]}),p.enabled&&r.jsx(Uv,{statements:p.statements,speed:p.speed,delay:p.delay}),r.jsx("main",{style:Je.main,children:r.jsx(I,{onNavigate:w})})]}),h&&r.jsx(Hv,{screens:_n,order:B,hidden:T,themeId:f,currency:S,monthStartDay:R,ticker:p,defaultScreen:n,onSetDefault:H,onSaveSidebar:se,onPreviewTheme:z,onCommitTheme:re,onSelectCurrency:ge,onSelectMonthStartDay:ye,onSaveTicker:J,onClose:be})]})}const Je={shell:{display:"flex",height:"100vh",overflow:"hidden",fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)"},nav:{width:200,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column",padding:"20px 10px",gap:2,overflowY:"auto",overflowX:"hidden"},brand:{display:"flex",alignItems:"center",gap:9,padding:"6px 10px 20px",borderBottom:"1px solid var(--border)",marginBottom:8},brandLogo:{width:30,height:30,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:14,fontWeight:800,fontFamily:"'Fraunces', Georgia, serif",flexShrink:0},brandName:{fontSize:16,fontWeight:700,letterSpacing:"-0.01em",color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},navItems:{display:"flex",flexDirection:"column",gap:2},navItem:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},navItemOn:{background:"var(--hover)",color:"var(--text)",fontWeight:700},footerWrap:{marginTop:"auto",paddingTop:8,flexShrink:0},settingsBtn:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},userFooter:{marginTop:4,paddingTop:12,borderTop:"1px solid var(--border)",display:"flex",alignItems:"center",gap:8},userInfo:{display:"flex",alignItems:"center",gap:8,flex:1,minWidth:0},userAvatar:{width:30,height:30,borderRadius:"50%",background:"#8268B0",color:"#fff",display:"grid",placeItems:"center",fontSize:13,fontWeight:700,flexShrink:0},userName:{fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},userEmail:{fontSize:11,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},logoutBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",padding:7,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},navLabel:{flex:1},content:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},main:{flex:1,overflowY:"auto",overflowX:"hidden"},topBar:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",background:"var(--surface)",borderBottom:"1px solid var(--border)",flexShrink:0},topBarTitle:{fontSize:16,fontWeight:700,color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},menuBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text)",padding:8,borderRadius:8,display:"grid",placeItems:"center"},overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.35)",zIndex:100,display:"flex"},drawer:{width:220,background:"var(--surface)",height:"100%",display:"flex",flexDirection:"column",padding:"16px 10px",gap:2,boxShadow:"4px 0 24px rgba(0,0,0,0.12)",overflow:"hidden"},drawerNav:{flex:1,minHeight:0,overflowY:"auto",overflowX:"hidden"},drawerHeader:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:4,flexShrink:0},closeBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",padding:6,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0}};mm(document.getElementById("root")).render(r.jsx(c.StrictMode,{children:r.jsx(Yv,{})}));
