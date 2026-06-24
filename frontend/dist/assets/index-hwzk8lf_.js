(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var tu={exports:{}},Ps={},eu={exports:{}},Dt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bi=Symbol.for("react.element"),Kb=Symbol.for("react.portal"),Xb=Symbol.for("react.fragment"),qb=Symbol.for("react.strict_mode"),Jb=Symbol.for("react.profiler"),Zb=Symbol.for("react.provider"),tm=Symbol.for("react.context"),em=Symbol.for("react.forward_ref"),rm=Symbol.for("react.suspense"),nm=Symbol.for("react.memo"),om=Symbol.for("react.lazy"),sc=Symbol.iterator;function im(t){return t===null||typeof t!="object"?null:(t=sc&&t[sc]||t["@@iterator"],typeof t=="function"?t:null)}var ru={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nu=Object.assign,ou={};function go(t,e,n){this.props=t,this.context=e,this.refs=ou,this.updater=n||ru}go.prototype.isReactComponent={};go.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};go.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function iu(){}iu.prototype=go.prototype;function Ja(t,e,n){this.props=t,this.context=e,this.refs=ou,this.updater=n||ru}var Za=Ja.prototype=new iu;Za.constructor=Ja;nu(Za,go.prototype);Za.isPureReactComponent=!0;var lc=Array.isArray,su=Object.prototype.hasOwnProperty,td={current:null},lu={key:!0,ref:!0,__self:!0,__source:!0};function au(t,e,n){var o,i={},s=null,l=null;if(e!=null)for(o in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(s=""+e.key),e)su.call(e,o)&&!lu.hasOwnProperty(o)&&(i[o]=e[o]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var d=Array(a),c=0;c<a;c++)d[c]=arguments[c+2];i.children=d}if(t&&t.defaultProps)for(o in a=t.defaultProps,a)i[o]===void 0&&(i[o]=a[o]);return{$$typeof:bi,type:t,key:s,ref:l,props:i,_owner:td.current}}function sm(t,e){return{$$typeof:bi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ed(t){return typeof t=="object"&&t!==null&&t.$$typeof===bi}function lm(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ac=/\/+/g;function il(t,e){return typeof t=="object"&&t!==null&&t.key!=null?lm(""+t.key):e.toString(36)}function qi(t,e,n,o,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case bi:case Kb:l=!0}}if(l)return l=t,i=i(l),t=o===""?"."+il(l,0):o,lc(i)?(n="",t!=null&&(n=t.replace(ac,"$&/")+"/"),qi(i,e,n,"",function(c){return c})):i!=null&&(ed(i)&&(i=sm(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(ac,"$&/")+"/")+t)),e.push(i)),1;if(l=0,o=o===""?".":o+":",lc(t))for(var a=0;a<t.length;a++){s=t[a];var d=o+il(s,a);l+=qi(s,e,n,d,i)}else if(d=im(t),typeof d=="function")for(t=d.call(t),a=0;!(s=t.next()).done;)s=s.value,d=o+il(s,a++),l+=qi(s,e,n,d,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function ji(t,e,n){if(t==null)return t;var o=[],i=0;return qi(t,o,"","",function(s){return e.call(n,s,i++)}),o}function am(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ee={current:null},Ji={transition:null},dm={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:Ji,ReactCurrentOwner:td};function du(){throw Error("act(...) is not supported in production builds of React.")}Dt.Children={map:ji,forEach:function(t,e,n){ji(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ji(t,function(){e++}),e},toArray:function(t){return ji(t,function(e){return e})||[]},only:function(t){if(!ed(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Dt.Component=go;Dt.Fragment=Xb;Dt.Profiler=Jb;Dt.PureComponent=Ja;Dt.StrictMode=qb;Dt.Suspense=rm;Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dm;Dt.act=du;Dt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var o=nu({},t.props),i=t.key,s=t.ref,l=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,l=td.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(d in e)su.call(e,d)&&!lu.hasOwnProperty(d)&&(o[d]=e[d]===void 0&&a!==void 0?a[d]:e[d])}var d=arguments.length-2;if(d===1)o.children=n;else if(1<d){a=Array(d);for(var c=0;c<d;c++)a[c]=arguments[c+2];o.children=a}return{$$typeof:bi,type:t.type,key:i,ref:s,props:o,_owner:l}};Dt.createContext=function(t){return t={$$typeof:tm,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Zb,_context:t},t.Consumer=t};Dt.createElement=au;Dt.createFactory=function(t){var e=au.bind(null,t);return e.type=t,e};Dt.createRef=function(){return{current:null}};Dt.forwardRef=function(t){return{$$typeof:em,render:t}};Dt.isValidElement=ed;Dt.lazy=function(t){return{$$typeof:om,_payload:{_status:-1,_result:t},_init:am}};Dt.memo=function(t,e){return{$$typeof:nm,type:t,compare:e===void 0?null:e}};Dt.startTransition=function(t){var e=Ji.transition;Ji.transition={};try{t()}finally{Ji.transition=e}};Dt.unstable_act=du;Dt.useCallback=function(t,e){return Ee.current.useCallback(t,e)};Dt.useContext=function(t){return Ee.current.useContext(t)};Dt.useDebugValue=function(){};Dt.useDeferredValue=function(t){return Ee.current.useDeferredValue(t)};Dt.useEffect=function(t,e){return Ee.current.useEffect(t,e)};Dt.useId=function(){return Ee.current.useId()};Dt.useImperativeHandle=function(t,e,n){return Ee.current.useImperativeHandle(t,e,n)};Dt.useInsertionEffect=function(t,e){return Ee.current.useInsertionEffect(t,e)};Dt.useLayoutEffect=function(t,e){return Ee.current.useLayoutEffect(t,e)};Dt.useMemo=function(t,e){return Ee.current.useMemo(t,e)};Dt.useReducer=function(t,e,n){return Ee.current.useReducer(t,e,n)};Dt.useRef=function(t){return Ee.current.useRef(t)};Dt.useState=function(t){return Ee.current.useState(t)};Dt.useSyncExternalStore=function(t,e,n){return Ee.current.useSyncExternalStore(t,e,n)};Dt.useTransition=function(){return Ee.current.useTransition()};Dt.version="18.3.1";eu.exports=Dt;var g=eu.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cm=g,gm=Symbol.for("react.element"),um=Symbol.for("react.fragment"),pm=Object.prototype.hasOwnProperty,bm=cm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mm={key:!0,ref:!0,__self:!0,__source:!0};function cu(t,e,n){var o,i={},s=null,l=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(l=e.ref);for(o in e)pm.call(e,o)&&!mm.hasOwnProperty(o)&&(i[o]=e[o]);if(t&&t.defaultProps)for(o in e=t.defaultProps,e)i[o]===void 0&&(i[o]=e[o]);return{$$typeof:gm,type:t,key:s,ref:l,props:i,_owner:bm.current}}Ps.Fragment=um;Ps.jsx=cu;Ps.jsxs=cu;tu.exports=Ps;var r=tu.exports,gu={exports:{}},He={},uu={exports:{}},pu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,H){var J=U.length;U.push(H);t:for(;0<J;){var P=J-1>>>1,F=U[P];if(0<i(F,H))U[P]=H,U[J]=F,J=P;else break t}}function n(U){return U.length===0?null:U[0]}function o(U){if(U.length===0)return null;var H=U[0],J=U.pop();if(J!==H){U[0]=J;t:for(var P=0,F=U.length,f=F>>>1;P<f;){var V=2*(P+1)-1,xt=U[V],at=V+1,G=U[at];if(0>i(xt,J))at<F&&0>i(G,xt)?(U[P]=G,U[at]=J,P=at):(U[P]=xt,U[V]=J,P=V);else if(at<F&&0>i(G,J))U[P]=G,U[at]=J,P=at;else break t}}return H}function i(U,H){var J=U.sortIndex-H.sortIndex;return J!==0?J:U.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var l=Date,a=l.now();t.unstable_now=function(){return l.now()-a}}var d=[],c=[],p=1,y=null,m=3,j=!1,x=!1,k=!1,T=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(U){for(var H=n(c);H!==null;){if(H.callback===null)o(c);else if(H.startTime<=U)o(c),H.sortIndex=H.expirationTime,e(d,H);else break;H=n(c)}}function I(U){if(k=!1,h(U),!x)if(n(d)!==null)x=!0,rt(v);else{var H=n(c);H!==null&&ht(I,H.startTime-U)}}function v(U,H){x=!1,k&&(k=!1,b(A),A=-1),j=!0;var J=m;try{for(h(H),y=n(d);y!==null&&(!(y.expirationTime>H)||U&&!S());){var P=y.callback;if(typeof P=="function"){y.callback=null,m=y.priorityLevel;var F=P(y.expirationTime<=H);H=t.unstable_now(),typeof F=="function"?y.callback=F:y===n(d)&&o(d),h(H)}else o(d);y=n(d)}if(y!==null)var f=!0;else{var V=n(c);V!==null&&ht(I,V.startTime-H),f=!1}return f}finally{y=null,m=J,j=!1}}var C=!1,L=null,A=-1,E=5,M=-1;function S(){return!(t.unstable_now()-M<E)}function D(){if(L!==null){var U=t.unstable_now();M=U;var H=!0;try{H=L(!0,U)}finally{H?w():(C=!1,L=null)}}else C=!1}var w;if(typeof u=="function")w=function(){u(D)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,lt=Y.port2;Y.port1.onmessage=D,w=function(){lt.postMessage(null)}}else w=function(){T(D,0)};function rt(U){L=U,C||(C=!0,w())}function ht(U,H){A=T(function(){U(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){x||j||(x=!0,rt(v))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(d)},t.unstable_next=function(U){switch(m){case 1:case 2:case 3:var H=3;break;default:H=m}var J=m;m=H;try{return U()}finally{m=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,H){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var J=m;m=U;try{return H()}finally{m=J}},t.unstable_scheduleCallback=function(U,H,J){var P=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?P+J:P):J=P,U){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=J+F,U={id:p++,callback:H,priorityLevel:U,startTime:J,expirationTime:F,sortIndex:-1},J>P?(U.sortIndex=J,e(c,U),n(d)===null&&U===n(c)&&(k?(b(A),A=-1):k=!0,ht(I,J-P))):(U.sortIndex=F,e(d,U),x||j||(x=!0,rt(v))),U},t.unstable_shouldYield=S,t.unstable_wrapCallback=function(U){var H=m;return function(){var J=m;m=H;try{return U.apply(this,arguments)}finally{m=J}}}})(pu);uu.exports=pu;var fm=uu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hm=g,Oe=fm;function tt(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bu=new Set,Xo={};function jn(t,e){eo(t,e),eo(t+"Capture",e)}function eo(t,e){for(Xo[t]=e,t=0;t<e.length;t++)bu.add(e[t])}var zr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ul=Object.prototype.hasOwnProperty,ym=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dc={},cc={};function xm(t){return Ul.call(cc,t)?!0:Ul.call(dc,t)?!1:ym.test(t)?cc[t]=!0:(dc[t]=!0,!1)}function vm(t,e,n,o){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function wm(t,e,n,o){if(e===null||typeof e>"u"||vm(t,e,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Be(t,e,n,o,i,s,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=o,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=l}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ye[t]=new Be(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ye[e]=new Be(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ye[t]=new Be(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ye[t]=new Be(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ye[t]=new Be(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ye[t]=new Be(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ye[t]=new Be(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ye[t]=new Be(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ye[t]=new Be(t,5,!1,t.toLowerCase(),null,!1,!1)});var rd=/[\-:]([a-z])/g;function nd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(rd,nd);ye[e]=new Be(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(rd,nd);ye[e]=new Be(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(rd,nd);ye[e]=new Be(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ye[t]=new Be(t,1,!1,t.toLowerCase(),null,!1,!1)});ye.xlinkHref=new Be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ye[t]=new Be(t,1,!1,t.toLowerCase(),null,!0,!0)});function od(t,e,n,o){var i=ye.hasOwnProperty(e)?ye[e]:null;(i!==null?i.type!==0:o||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(wm(e,n,i,o)&&(n=null),o||i===null?xm(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,o=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,o?t.setAttributeNS(o,e,n):t.setAttribute(e,n))))}var Dr=hm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Si=Symbol.for("react.element"),Ln=Symbol.for("react.portal"),_n=Symbol.for("react.fragment"),id=Symbol.for("react.strict_mode"),Yl=Symbol.for("react.profiler"),mu=Symbol.for("react.provider"),fu=Symbol.for("react.context"),sd=Symbol.for("react.forward_ref"),Vl=Symbol.for("react.suspense"),Ql=Symbol.for("react.suspense_list"),ld=Symbol.for("react.memo"),Lr=Symbol.for("react.lazy"),hu=Symbol.for("react.offscreen"),gc=Symbol.iterator;function xo(t){return t===null||typeof t!="object"?null:(t=gc&&t[gc]||t["@@iterator"],typeof t=="function"?t:null)}var qt=Object.assign,sl;function Ro(t){if(sl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);sl=e&&e[1]||""}return`
`+sl+t}var ll=!1;function al(t,e){if(!t||ll)return"";ll=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var o=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){o=c}t.call(e.prototype)}else{try{throw Error()}catch(c){o=c}t()}}catch(c){if(c&&o&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=o.stack.split(`
`),l=i.length-1,a=s.length-1;1<=l&&0<=a&&i[l]!==s[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==s[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==s[a]){var d=`
`+i[l].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=l&&0<=a);break}}}finally{ll=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ro(t):""}function km(t){switch(t.tag){case 5:return Ro(t.type);case 16:return Ro("Lazy");case 13:return Ro("Suspense");case 19:return Ro("SuspenseList");case 0:case 2:case 15:return t=al(t.type,!1),t;case 11:return t=al(t.type.render,!1),t;case 1:return t=al(t.type,!0),t;default:return""}}function Kl(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _n:return"Fragment";case Ln:return"Portal";case Yl:return"Profiler";case id:return"StrictMode";case Vl:return"Suspense";case Ql:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case fu:return(t.displayName||"Context")+".Consumer";case mu:return(t._context.displayName||"Context")+".Provider";case sd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ld:return e=t.displayName||null,e!==null?e:Kl(t.type)||"Memo";case Lr:e=t._payload,t=t._init;try{return Kl(t(e))}catch{}}return null}function jm(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Kl(e);case 8:return e===id?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Jr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function yu(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Sm(t){var e=yu(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),o=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(l){o=""+l,s.call(this,l)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(l){o=""+l},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ci(t){t._valueTracker||(t._valueTracker=Sm(t))}function xu(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),o="";return t&&(o=yu(t)?t.checked?"true":"false":t.value),t=o,t!==n?(e.setValue(t),!0):!1}function us(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xl(t,e){var n=e.checked;return qt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function uc(t,e){var n=e.defaultValue==null?"":e.defaultValue,o=e.checked!=null?e.checked:e.defaultChecked;n=Jr(e.value!=null?e.value:n),t._wrapperState={initialChecked:o,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function vu(t,e){e=e.checked,e!=null&&od(t,"checked",e,!1)}function ql(t,e){vu(t,e);var n=Jr(e.value),o=e.type;if(n!=null)o==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(o==="submit"||o==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Jl(t,e.type,n):e.hasOwnProperty("defaultValue")&&Jl(t,e.type,Jr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function pc(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var o=e.type;if(!(o!=="submit"&&o!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Jl(t,e,n){(e!=="number"||us(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Do=Array.isArray;function Kn(t,e,n,o){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&o&&(t[n].defaultSelected=!0)}else{for(n=""+Jr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,o&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Zl(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(tt(91));return qt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function bc(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(tt(92));if(Do(n)){if(1<n.length)throw Error(tt(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Jr(n)}}function wu(t,e){var n=Jr(e.value),o=Jr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),o!=null&&(t.defaultValue=""+o)}function mc(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ku(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ta(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ku(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ii,ju=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,o,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,o,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ii=Ii||document.createElement("div"),Ii.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ii.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function qo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Po={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Cm=["Webkit","ms","Moz","O"];Object.keys(Po).forEach(function(t){Cm.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Po[e]=Po[t]})});function Su(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Po.hasOwnProperty(t)&&Po[t]?(""+e).trim():e+"px"}function Cu(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var o=n.indexOf("--")===0,i=Su(n,e[n],o);n==="float"&&(n="cssFloat"),o?t.setProperty(n,i):t[n]=i}}var Im=qt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ea(t,e){if(e){if(Im[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(tt(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(tt(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(tt(61))}if(e.style!=null&&typeof e.style!="object")throw Error(tt(62))}}function ra(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var na=null;function ad(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var oa=null,Xn=null,qn=null;function fc(t){if(t=hi(t)){if(typeof oa!="function")throw Error(tt(280));var e=t.stateNode;e&&(e=Gs(e),oa(t.stateNode,t.type,e))}}function Iu(t){Xn?qn?qn.push(t):qn=[t]:Xn=t}function zu(){if(Xn){var t=Xn,e=qn;if(qn=Xn=null,fc(t),e)for(t=0;t<e.length;t++)fc(e[t])}}function Tu(t,e){return t(e)}function Eu(){}var dl=!1;function Bu(t,e,n){if(dl)return t(e,n);dl=!0;try{return Tu(t,e,n)}finally{dl=!1,(Xn!==null||qn!==null)&&(Eu(),zu())}}function Jo(t,e){var n=t.stateNode;if(n===null)return null;var o=Gs(n);if(o===null)return null;n=o[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(tt(231,e,typeof n));return n}var ia=!1;if(zr)try{var vo={};Object.defineProperty(vo,"passive",{get:function(){ia=!0}}),window.addEventListener("test",vo,vo),window.removeEventListener("test",vo,vo)}catch{ia=!1}function zm(t,e,n,o,i,s,l,a,d){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(p){this.onError(p)}}var $o=!1,ps=null,bs=!1,sa=null,Tm={onError:function(t){$o=!0,ps=t}};function Em(t,e,n,o,i,s,l,a,d){$o=!1,ps=null,zm.apply(Tm,arguments)}function Bm(t,e,n,o,i,s,l,a,d){if(Em.apply(this,arguments),$o){if($o){var c=ps;$o=!1,ps=null}else throw Error(tt(198));bs||(bs=!0,sa=c)}}function Sn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ru(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function hc(t){if(Sn(t)!==t)throw Error(tt(188))}function Rm(t){var e=t.alternate;if(!e){if(e=Sn(t),e===null)throw Error(tt(188));return e!==t?null:t}for(var n=t,o=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(o=i.return,o!==null){n=o;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return hc(i),t;if(s===o)return hc(i),e;s=s.sibling}throw Error(tt(188))}if(n.return!==o.return)n=i,o=s;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,o=s;break}if(a===o){l=!0,o=i,n=s;break}a=a.sibling}if(!l){for(a=s.child;a;){if(a===n){l=!0,n=s,o=i;break}if(a===o){l=!0,o=s,n=i;break}a=a.sibling}if(!l)throw Error(tt(189))}}if(n.alternate!==o)throw Error(tt(190))}if(n.tag!==3)throw Error(tt(188));return n.stateNode.current===n?t:e}function Du(t){return t=Rm(t),t!==null?Au(t):null}function Au(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Au(t);if(e!==null)return e;t=t.sibling}return null}var Fu=Oe.unstable_scheduleCallback,yc=Oe.unstable_cancelCallback,Dm=Oe.unstable_shouldYield,Am=Oe.unstable_requestPaint,ne=Oe.unstable_now,Fm=Oe.unstable_getCurrentPriorityLevel,dd=Oe.unstable_ImmediatePriority,Mu=Oe.unstable_UserBlockingPriority,ms=Oe.unstable_NormalPriority,Mm=Oe.unstable_LowPriority,Wu=Oe.unstable_IdlePriority,$s=null,pr=null;function Wm(t){if(pr&&typeof pr.onCommitFiberRoot=="function")try{pr.onCommitFiberRoot($s,t,void 0,(t.current.flags&128)===128)}catch{}}var ir=Math.clz32?Math.clz32:Pm,Lm=Math.log,_m=Math.LN2;function Pm(t){return t>>>=0,t===0?32:31-(Lm(t)/_m|0)|0}var zi=64,Ti=4194304;function Ao(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function fs(t,e){var n=t.pendingLanes;if(n===0)return 0;var o=0,i=t.suspendedLanes,s=t.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?o=Ao(a):(s&=l,s!==0&&(o=Ao(s)))}else l=n&~i,l!==0?o=Ao(l):s!==0&&(o=Ao(s));if(o===0)return 0;if(e!==0&&e!==o&&!(e&i)&&(i=o&-o,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(o&4&&(o|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=o;0<e;)n=31-ir(e),i=1<<n,o|=t[n],e&=~i;return o}function $m(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nm(t,e){for(var n=t.suspendedLanes,o=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var l=31-ir(s),a=1<<l,d=i[l];d===-1?(!(a&n)||a&o)&&(i[l]=$m(a,e)):d<=e&&(t.expiredLanes|=a),s&=~a}}function la(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Lu(){var t=zi;return zi<<=1,!(zi&4194240)&&(zi=64),t}function cl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function mi(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ir(e),t[e]=n}function Om(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var o=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ir(n),s=1<<i;e[i]=0,o[i]=-1,t[i]=-1,n&=~s}}function cd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var o=31-ir(n),i=1<<o;i&e|t[o]&e&&(t[o]|=e),n&=~i}}var Ot=0;function _u(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Pu,gd,$u,Nu,Ou,aa=!1,Ei=[],Gr=null,Ur=null,Yr=null,Zo=new Map,ti=new Map,Pr=[],Hm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xc(t,e){switch(t){case"focusin":case"focusout":Gr=null;break;case"dragenter":case"dragleave":Ur=null;break;case"mouseover":case"mouseout":Yr=null;break;case"pointerover":case"pointerout":Zo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ti.delete(e.pointerId)}}function wo(t,e,n,o,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:o,nativeEvent:s,targetContainers:[i]},e!==null&&(e=hi(e),e!==null&&gd(e)),t):(t.eventSystemFlags|=o,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Gm(t,e,n,o,i){switch(e){case"focusin":return Gr=wo(Gr,t,e,n,o,i),!0;case"dragenter":return Ur=wo(Ur,t,e,n,o,i),!0;case"mouseover":return Yr=wo(Yr,t,e,n,o,i),!0;case"pointerover":var s=i.pointerId;return Zo.set(s,wo(Zo.get(s)||null,t,e,n,o,i)),!0;case"gotpointercapture":return s=i.pointerId,ti.set(s,wo(ti.get(s)||null,t,e,n,o,i)),!0}return!1}function Hu(t){var e=gn(t.target);if(e!==null){var n=Sn(e);if(n!==null){if(e=n.tag,e===13){if(e=Ru(n),e!==null){t.blockedOn=e,Ou(t.priority,function(){$u(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zi(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=da(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var o=new n.constructor(n.type,n);na=o,n.target.dispatchEvent(o),na=null}else return e=hi(n),e!==null&&gd(e),t.blockedOn=n,!1;e.shift()}return!0}function vc(t,e,n){Zi(t)&&n.delete(e)}function Um(){aa=!1,Gr!==null&&Zi(Gr)&&(Gr=null),Ur!==null&&Zi(Ur)&&(Ur=null),Yr!==null&&Zi(Yr)&&(Yr=null),Zo.forEach(vc),ti.forEach(vc)}function ko(t,e){t.blockedOn===e&&(t.blockedOn=null,aa||(aa=!0,Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority,Um)))}function ei(t){function e(i){return ko(i,t)}if(0<Ei.length){ko(Ei[0],t);for(var n=1;n<Ei.length;n++){var o=Ei[n];o.blockedOn===t&&(o.blockedOn=null)}}for(Gr!==null&&ko(Gr,t),Ur!==null&&ko(Ur,t),Yr!==null&&ko(Yr,t),Zo.forEach(e),ti.forEach(e),n=0;n<Pr.length;n++)o=Pr[n],o.blockedOn===t&&(o.blockedOn=null);for(;0<Pr.length&&(n=Pr[0],n.blockedOn===null);)Hu(n),n.blockedOn===null&&Pr.shift()}var Jn=Dr.ReactCurrentBatchConfig,hs=!0;function Ym(t,e,n,o){var i=Ot,s=Jn.transition;Jn.transition=null;try{Ot=1,ud(t,e,n,o)}finally{Ot=i,Jn.transition=s}}function Vm(t,e,n,o){var i=Ot,s=Jn.transition;Jn.transition=null;try{Ot=4,ud(t,e,n,o)}finally{Ot=i,Jn.transition=s}}function ud(t,e,n,o){if(hs){var i=da(t,e,n,o);if(i===null)vl(t,e,o,ys,n),xc(t,o);else if(Gm(i,t,e,n,o))o.stopPropagation();else if(xc(t,o),e&4&&-1<Hm.indexOf(t)){for(;i!==null;){var s=hi(i);if(s!==null&&Pu(s),s=da(t,e,n,o),s===null&&vl(t,e,o,ys,n),s===i)break;i=s}i!==null&&o.stopPropagation()}else vl(t,e,o,null,n)}}var ys=null;function da(t,e,n,o){if(ys=null,t=ad(o),t=gn(t),t!==null)if(e=Sn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ru(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ys=t,null}function Gu(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fm()){case dd:return 1;case Mu:return 4;case ms:case Mm:return 16;case Wu:return 536870912;default:return 16}default:return 16}}var Or=null,pd=null,ts=null;function Uu(){if(ts)return ts;var t,e=pd,n=e.length,o,i="value"in Or?Or.value:Or.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var l=n-t;for(o=1;o<=l&&e[n-o]===i[s-o];o++);return ts=i.slice(t,1<o?1-o:void 0)}function es(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Bi(){return!0}function wc(){return!1}function Ge(t){function e(n,o,i,s,l){this._reactName=n,this._targetInst=i,this.type=o,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Bi:wc,this.isPropagationStopped=wc,this}return qt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bi)},persist:function(){},isPersistent:Bi}),e}var uo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bd=Ge(uo),fi=qt({},uo,{view:0,detail:0}),Qm=Ge(fi),gl,ul,jo,Ns=qt({},fi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:md,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==jo&&(jo&&t.type==="mousemove"?(gl=t.screenX-jo.screenX,ul=t.screenY-jo.screenY):ul=gl=0,jo=t),gl)},movementY:function(t){return"movementY"in t?t.movementY:ul}}),kc=Ge(Ns),Km=qt({},Ns,{dataTransfer:0}),Xm=Ge(Km),qm=qt({},fi,{relatedTarget:0}),pl=Ge(qm),Jm=qt({},uo,{animationName:0,elapsedTime:0,pseudoElement:0}),Zm=Ge(Jm),tf=qt({},uo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ef=Ge(tf),rf=qt({},uo,{data:0}),jc=Ge(rf),nf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},of={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lf(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=sf[t])?!!e[t]:!1}function md(){return lf}var af=qt({},fi,{key:function(t){if(t.key){var e=nf[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=es(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?of[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:md,charCode:function(t){return t.type==="keypress"?es(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?es(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),df=Ge(af),cf=qt({},Ns,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sc=Ge(cf),gf=qt({},fi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:md}),uf=Ge(gf),pf=qt({},uo,{propertyName:0,elapsedTime:0,pseudoElement:0}),bf=Ge(pf),mf=qt({},Ns,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ff=Ge(mf),hf=[9,13,27,32],fd=zr&&"CompositionEvent"in window,No=null;zr&&"documentMode"in document&&(No=document.documentMode);var yf=zr&&"TextEvent"in window&&!No,Yu=zr&&(!fd||No&&8<No&&11>=No),Cc=" ",Ic=!1;function Vu(t,e){switch(t){case"keyup":return hf.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qu(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pn=!1;function xf(t,e){switch(t){case"compositionend":return Qu(e);case"keypress":return e.which!==32?null:(Ic=!0,Cc);case"textInput":return t=e.data,t===Cc&&Ic?null:t;default:return null}}function vf(t,e){if(Pn)return t==="compositionend"||!fd&&Vu(t,e)?(t=Uu(),ts=pd=Or=null,Pn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Yu&&e.locale!=="ko"?null:e.data;default:return null}}var wf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!wf[t.type]:e==="textarea"}function Ku(t,e,n,o){Iu(o),e=xs(e,"onChange"),0<e.length&&(n=new bd("onChange","change",null,n,o),t.push({event:n,listeners:e}))}var Oo=null,ri=null;function kf(t){sp(t,0)}function Os(t){var e=On(t);if(xu(e))return t}function jf(t,e){if(t==="change")return e}var Xu=!1;if(zr){var bl;if(zr){var ml="oninput"in document;if(!ml){var Tc=document.createElement("div");Tc.setAttribute("oninput","return;"),ml=typeof Tc.oninput=="function"}bl=ml}else bl=!1;Xu=bl&&(!document.documentMode||9<document.documentMode)}function Ec(){Oo&&(Oo.detachEvent("onpropertychange",qu),ri=Oo=null)}function qu(t){if(t.propertyName==="value"&&Os(ri)){var e=[];Ku(e,ri,t,ad(t)),Bu(kf,e)}}function Sf(t,e,n){t==="focusin"?(Ec(),Oo=e,ri=n,Oo.attachEvent("onpropertychange",qu)):t==="focusout"&&Ec()}function Cf(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Os(ri)}function If(t,e){if(t==="click")return Os(e)}function zf(t,e){if(t==="input"||t==="change")return Os(e)}function Tf(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var lr=typeof Object.is=="function"?Object.is:Tf;function ni(t,e){if(lr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),o=Object.keys(e);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var i=n[o];if(!Ul.call(e,i)||!lr(t[i],e[i]))return!1}return!0}function Bc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rc(t,e){var n=Bc(t);t=0;for(var o;n;){if(n.nodeType===3){if(o=t+n.textContent.length,t<=e&&o>=e)return{node:n,offset:e-t};t=o}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Bc(n)}}function Ju(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ju(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Zu(){for(var t=window,e=us();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=us(t.document)}return e}function hd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ef(t){var e=Zu(),n=t.focusedElem,o=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ju(n.ownerDocument.documentElement,n)){if(o!==null&&hd(n)){if(e=o.start,t=o.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(o.start,i);o=o.end===void 0?s:Math.min(o.end,i),!t.extend&&s>o&&(i=o,o=s,s=i),i=Rc(n,s);var l=Rc(n,o);i&&l&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>o?(t.addRange(e),t.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Bf=zr&&"documentMode"in document&&11>=document.documentMode,$n=null,ca=null,Ho=null,ga=!1;function Dc(t,e,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ga||$n==null||$n!==us(o)||(o=$n,"selectionStart"in o&&hd(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ho&&ni(Ho,o)||(Ho=o,o=xs(ca,"onSelect"),0<o.length&&(e=new bd("onSelect","select",null,e,n),t.push({event:e,listeners:o}),e.target=$n)))}function Ri(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Nn={animationend:Ri("Animation","AnimationEnd"),animationiteration:Ri("Animation","AnimationIteration"),animationstart:Ri("Animation","AnimationStart"),transitionend:Ri("Transition","TransitionEnd")},fl={},tp={};zr&&(tp=document.createElement("div").style,"AnimationEvent"in window||(delete Nn.animationend.animation,delete Nn.animationiteration.animation,delete Nn.animationstart.animation),"TransitionEvent"in window||delete Nn.transitionend.transition);function Hs(t){if(fl[t])return fl[t];if(!Nn[t])return t;var e=Nn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in tp)return fl[t]=e[n];return t}var ep=Hs("animationend"),rp=Hs("animationiteration"),np=Hs("animationstart"),op=Hs("transitionend"),ip=new Map,Ac="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tn(t,e){ip.set(t,e),jn(e,[t])}for(var hl=0;hl<Ac.length;hl++){var yl=Ac[hl],Rf=yl.toLowerCase(),Df=yl[0].toUpperCase()+yl.slice(1);tn(Rf,"on"+Df)}tn(ep,"onAnimationEnd");tn(rp,"onAnimationIteration");tn(np,"onAnimationStart");tn("dblclick","onDoubleClick");tn("focusin","onFocus");tn("focusout","onBlur");tn(op,"onTransitionEnd");eo("onMouseEnter",["mouseout","mouseover"]);eo("onMouseLeave",["mouseout","mouseover"]);eo("onPointerEnter",["pointerout","pointerover"]);eo("onPointerLeave",["pointerout","pointerover"]);jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jn("onBeforeInput",["compositionend","keypress","textInput","paste"]);jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Af=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fo));function Fc(t,e,n){var o=t.type||"unknown-event";t.currentTarget=n,Bm(o,e,void 0,t),t.currentTarget=null}function sp(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var o=t[n],i=o.event;o=o.listeners;t:{var s=void 0;if(e)for(var l=o.length-1;0<=l;l--){var a=o[l],d=a.instance,c=a.currentTarget;if(a=a.listener,d!==s&&i.isPropagationStopped())break t;Fc(i,a,c),s=d}else for(l=0;l<o.length;l++){if(a=o[l],d=a.instance,c=a.currentTarget,a=a.listener,d!==s&&i.isPropagationStopped())break t;Fc(i,a,c),s=d}}}if(bs)throw t=sa,bs=!1,sa=null,t}function Yt(t,e){var n=e[fa];n===void 0&&(n=e[fa]=new Set);var o=t+"__bubble";n.has(o)||(lp(e,t,2,!1),n.add(o))}function xl(t,e,n){var o=0;e&&(o|=4),lp(n,t,o,e)}var Di="_reactListening"+Math.random().toString(36).slice(2);function oi(t){if(!t[Di]){t[Di]=!0,bu.forEach(function(n){n!=="selectionchange"&&(Af.has(n)||xl(n,!1,t),xl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Di]||(e[Di]=!0,xl("selectionchange",!1,e))}}function lp(t,e,n,o){switch(Gu(e)){case 1:var i=Ym;break;case 4:i=Vm;break;default:i=ud}n=i.bind(null,e,n,t),i=void 0,!ia||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),o?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function vl(t,e,n,o,i){var s=o;if(!(e&1)&&!(e&2)&&o!==null)t:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var a=o.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=o.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;l=l.return}for(;a!==null;){if(l=gn(a),l===null)return;if(d=l.tag,d===5||d===6){o=s=l;continue t}a=a.parentNode}}o=o.return}Bu(function(){var c=s,p=ad(n),y=[];t:{var m=ip.get(t);if(m!==void 0){var j=bd,x=t;switch(t){case"keypress":if(es(n)===0)break t;case"keydown":case"keyup":j=df;break;case"focusin":x="focus",j=pl;break;case"focusout":x="blur",j=pl;break;case"beforeblur":case"afterblur":j=pl;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=kc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Xm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=uf;break;case ep:case rp:case np:j=Zm;break;case op:j=bf;break;case"scroll":j=Qm;break;case"wheel":j=ff;break;case"copy":case"cut":case"paste":j=ef;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Sc}var k=(e&4)!==0,T=!k&&t==="scroll",b=k?m!==null?m+"Capture":null:m;k=[];for(var u=c,h;u!==null;){h=u;var I=h.stateNode;if(h.tag===5&&I!==null&&(h=I,b!==null&&(I=Jo(u,b),I!=null&&k.push(ii(u,I,h)))),T)break;u=u.return}0<k.length&&(m=new j(m,x,null,n,p),y.push({event:m,listeners:k}))}}if(!(e&7)){t:{if(m=t==="mouseover"||t==="pointerover",j=t==="mouseout"||t==="pointerout",m&&n!==na&&(x=n.relatedTarget||n.fromElement)&&(gn(x)||x[Tr]))break t;if((j||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,j?(x=n.relatedTarget||n.toElement,j=c,x=x?gn(x):null,x!==null&&(T=Sn(x),x!==T||x.tag!==5&&x.tag!==6)&&(x=null)):(j=null,x=c),j!==x)){if(k=kc,I="onMouseLeave",b="onMouseEnter",u="mouse",(t==="pointerout"||t==="pointerover")&&(k=Sc,I="onPointerLeave",b="onPointerEnter",u="pointer"),T=j==null?m:On(j),h=x==null?m:On(x),m=new k(I,u+"leave",j,n,p),m.target=T,m.relatedTarget=h,I=null,gn(p)===c&&(k=new k(b,u+"enter",x,n,p),k.target=h,k.relatedTarget=T,I=k),T=I,j&&x)e:{for(k=j,b=x,u=0,h=k;h;h=Bn(h))u++;for(h=0,I=b;I;I=Bn(I))h++;for(;0<u-h;)k=Bn(k),u--;for(;0<h-u;)b=Bn(b),h--;for(;u--;){if(k===b||b!==null&&k===b.alternate)break e;k=Bn(k),b=Bn(b)}k=null}else k=null;j!==null&&Mc(y,m,j,k,!1),x!==null&&T!==null&&Mc(y,T,x,k,!0)}}t:{if(m=c?On(c):window,j=m.nodeName&&m.nodeName.toLowerCase(),j==="select"||j==="input"&&m.type==="file")var v=jf;else if(zc(m))if(Xu)v=zf;else{v=Cf;var C=Sf}else(j=m.nodeName)&&j.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(v=If);if(v&&(v=v(t,c))){Ku(y,v,n,p);break t}C&&C(t,m,c),t==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&Jl(m,"number",m.value)}switch(C=c?On(c):window,t){case"focusin":(zc(C)||C.contentEditable==="true")&&($n=C,ca=c,Ho=null);break;case"focusout":Ho=ca=$n=null;break;case"mousedown":ga=!0;break;case"contextmenu":case"mouseup":case"dragend":ga=!1,Dc(y,n,p);break;case"selectionchange":if(Bf)break;case"keydown":case"keyup":Dc(y,n,p)}var L;if(fd)t:{switch(t){case"compositionstart":var A="onCompositionStart";break t;case"compositionend":A="onCompositionEnd";break t;case"compositionupdate":A="onCompositionUpdate";break t}A=void 0}else Pn?Vu(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Yu&&n.locale!=="ko"&&(Pn||A!=="onCompositionStart"?A==="onCompositionEnd"&&Pn&&(L=Uu()):(Or=p,pd="value"in Or?Or.value:Or.textContent,Pn=!0)),C=xs(c,A),0<C.length&&(A=new jc(A,t,null,n,p),y.push({event:A,listeners:C}),L?A.data=L:(L=Qu(n),L!==null&&(A.data=L)))),(L=yf?xf(t,n):vf(t,n))&&(c=xs(c,"onBeforeInput"),0<c.length&&(p=new jc("onBeforeInput","beforeinput",null,n,p),y.push({event:p,listeners:c}),p.data=L))}sp(y,e)})}function ii(t,e,n){return{instance:t,listener:e,currentTarget:n}}function xs(t,e){for(var n=e+"Capture",o=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Jo(t,n),s!=null&&o.unshift(ii(t,s,i)),s=Jo(t,e),s!=null&&o.push(ii(t,s,i))),t=t.return}return o}function Bn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Mc(t,e,n,o,i){for(var s=e._reactName,l=[];n!==null&&n!==o;){var a=n,d=a.alternate,c=a.stateNode;if(d!==null&&d===o)break;a.tag===5&&c!==null&&(a=c,i?(d=Jo(n,s),d!=null&&l.unshift(ii(n,d,a))):i||(d=Jo(n,s),d!=null&&l.push(ii(n,d,a)))),n=n.return}l.length!==0&&t.push({event:e,listeners:l})}var Ff=/\r\n?/g,Mf=/\u0000|\uFFFD/g;function Wc(t){return(typeof t=="string"?t:""+t).replace(Ff,`
`).replace(Mf,"")}function Ai(t,e,n){if(e=Wc(e),Wc(t)!==e&&n)throw Error(tt(425))}function vs(){}var ua=null,pa=null;function ba(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ma=typeof setTimeout=="function"?setTimeout:void 0,Wf=typeof clearTimeout=="function"?clearTimeout:void 0,Lc=typeof Promise=="function"?Promise:void 0,Lf=typeof queueMicrotask=="function"?queueMicrotask:typeof Lc<"u"?function(t){return Lc.resolve(null).then(t).catch(_f)}:ma;function _f(t){setTimeout(function(){throw t})}function wl(t,e){var n=e,o=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(o===0){t.removeChild(i),ei(e);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=i}while(n);ei(e)}function Vr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function _c(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var po=Math.random().toString(36).slice(2),ur="__reactFiber$"+po,si="__reactProps$"+po,Tr="__reactContainer$"+po,fa="__reactEvents$"+po,Pf="__reactListeners$"+po,$f="__reactHandles$"+po;function gn(t){var e=t[ur];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Tr]||n[ur]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=_c(t);t!==null;){if(n=t[ur])return n;t=_c(t)}return e}t=n,n=t.parentNode}return null}function hi(t){return t=t[ur]||t[Tr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function On(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(tt(33))}function Gs(t){return t[si]||null}var ha=[],Hn=-1;function en(t){return{current:t}}function Vt(t){0>Hn||(t.current=ha[Hn],ha[Hn]=null,Hn--)}function Ut(t,e){Hn++,ha[Hn]=t.current,t.current=e}var Zr={},ke=en(Zr),Me=en(!1),hn=Zr;function ro(t,e){var n=t.type.contextTypes;if(!n)return Zr;var o=t.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===e)return o.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return o&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function We(t){return t=t.childContextTypes,t!=null}function ws(){Vt(Me),Vt(ke)}function Pc(t,e,n){if(ke.current!==Zr)throw Error(tt(168));Ut(ke,e),Ut(Me,n)}function ap(t,e,n){var o=t.stateNode;if(e=e.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var i in o)if(!(i in e))throw Error(tt(108,jm(t)||"Unknown",i));return qt({},n,o)}function ks(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zr,hn=ke.current,Ut(ke,t),Ut(Me,Me.current),!0}function $c(t,e,n){var o=t.stateNode;if(!o)throw Error(tt(169));n?(t=ap(t,e,hn),o.__reactInternalMemoizedMergedChildContext=t,Vt(Me),Vt(ke),Ut(ke,t)):Vt(Me),Ut(Me,n)}var jr=null,Us=!1,kl=!1;function dp(t){jr===null?jr=[t]:jr.push(t)}function Nf(t){Us=!0,dp(t)}function rn(){if(!kl&&jr!==null){kl=!0;var t=0,e=Ot;try{var n=jr;for(Ot=1;t<n.length;t++){var o=n[t];do o=o(!0);while(o!==null)}jr=null,Us=!1}catch(i){throw jr!==null&&(jr=jr.slice(t+1)),Fu(dd,rn),i}finally{Ot=e,kl=!1}}return null}var Gn=[],Un=0,js=null,Ss=0,Qe=[],Ke=0,yn=null,Sr=1,Cr="";function an(t,e){Gn[Un++]=Ss,Gn[Un++]=js,js=t,Ss=e}function cp(t,e,n){Qe[Ke++]=Sr,Qe[Ke++]=Cr,Qe[Ke++]=yn,yn=t;var o=Sr;t=Cr;var i=32-ir(o)-1;o&=~(1<<i),n+=1;var s=32-ir(e)+i;if(30<s){var l=i-i%5;s=(o&(1<<l)-1).toString(32),o>>=l,i-=l,Sr=1<<32-ir(e)+i|n<<i|o,Cr=s+t}else Sr=1<<s|n<<i|o,Cr=t}function yd(t){t.return!==null&&(an(t,1),cp(t,1,0))}function xd(t){for(;t===js;)js=Gn[--Un],Gn[Un]=null,Ss=Gn[--Un],Gn[Un]=null;for(;t===yn;)yn=Qe[--Ke],Qe[Ke]=null,Cr=Qe[--Ke],Qe[Ke]=null,Sr=Qe[--Ke],Qe[Ke]=null}var Ne=null,$e=null,Qt=!1,or=null;function gp(t,e){var n=Xe(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Nc(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ne=t,$e=Vr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ne=t,$e=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=yn!==null?{id:Sr,overflow:Cr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xe(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ne=t,$e=null,!0):!1;default:return!1}}function ya(t){return(t.mode&1)!==0&&(t.flags&128)===0}function xa(t){if(Qt){var e=$e;if(e){var n=e;if(!Nc(t,e)){if(ya(t))throw Error(tt(418));e=Vr(n.nextSibling);var o=Ne;e&&Nc(t,e)?gp(o,n):(t.flags=t.flags&-4097|2,Qt=!1,Ne=t)}}else{if(ya(t))throw Error(tt(418));t.flags=t.flags&-4097|2,Qt=!1,Ne=t}}}function Oc(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ne=t}function Fi(t){if(t!==Ne)return!1;if(!Qt)return Oc(t),Qt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ba(t.type,t.memoizedProps)),e&&(e=$e)){if(ya(t))throw up(),Error(tt(418));for(;e;)gp(t,e),e=Vr(e.nextSibling)}if(Oc(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(tt(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){$e=Vr(t.nextSibling);break t}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}$e=null}}else $e=Ne?Vr(t.stateNode.nextSibling):null;return!0}function up(){for(var t=$e;t;)t=Vr(t.nextSibling)}function no(){$e=Ne=null,Qt=!1}function vd(t){or===null?or=[t]:or.push(t)}var Of=Dr.ReactCurrentBatchConfig;function So(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(tt(309));var o=n.stateNode}if(!o)throw Error(tt(147,t));var i=o,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(l){var a=i.refs;l===null?delete a[s]:a[s]=l},e._stringRef=s,e)}if(typeof t!="string")throw Error(tt(284));if(!n._owner)throw Error(tt(290,t))}return t}function Mi(t,e){throw t=Object.prototype.toString.call(e),Error(tt(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Hc(t){var e=t._init;return e(t._payload)}function pp(t){function e(b,u){if(t){var h=b.deletions;h===null?(b.deletions=[u],b.flags|=16):h.push(u)}}function n(b,u){if(!t)return null;for(;u!==null;)e(b,u),u=u.sibling;return null}function o(b,u){for(b=new Map;u!==null;)u.key!==null?b.set(u.key,u):b.set(u.index,u),u=u.sibling;return b}function i(b,u){return b=qr(b,u),b.index=0,b.sibling=null,b}function s(b,u,h){return b.index=h,t?(h=b.alternate,h!==null?(h=h.index,h<u?(b.flags|=2,u):h):(b.flags|=2,u)):(b.flags|=1048576,u)}function l(b){return t&&b.alternate===null&&(b.flags|=2),b}function a(b,u,h,I){return u===null||u.tag!==6?(u=El(h,b.mode,I),u.return=b,u):(u=i(u,h),u.return=b,u)}function d(b,u,h,I){var v=h.type;return v===_n?p(b,u,h.props.children,I,h.key):u!==null&&(u.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===Lr&&Hc(v)===u.type)?(I=i(u,h.props),I.ref=So(b,u,h),I.return=b,I):(I=as(h.type,h.key,h.props,null,b.mode,I),I.ref=So(b,u,h),I.return=b,I)}function c(b,u,h,I){return u===null||u.tag!==4||u.stateNode.containerInfo!==h.containerInfo||u.stateNode.implementation!==h.implementation?(u=Bl(h,b.mode,I),u.return=b,u):(u=i(u,h.children||[]),u.return=b,u)}function p(b,u,h,I,v){return u===null||u.tag!==7?(u=fn(h,b.mode,I,v),u.return=b,u):(u=i(u,h),u.return=b,u)}function y(b,u,h){if(typeof u=="string"&&u!==""||typeof u=="number")return u=El(""+u,b.mode,h),u.return=b,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Si:return h=as(u.type,u.key,u.props,null,b.mode,h),h.ref=So(b,null,u),h.return=b,h;case Ln:return u=Bl(u,b.mode,h),u.return=b,u;case Lr:var I=u._init;return y(b,I(u._payload),h)}if(Do(u)||xo(u))return u=fn(u,b.mode,h,null),u.return=b,u;Mi(b,u)}return null}function m(b,u,h,I){var v=u!==null?u.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return v!==null?null:a(b,u,""+h,I);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Si:return h.key===v?d(b,u,h,I):null;case Ln:return h.key===v?c(b,u,h,I):null;case Lr:return v=h._init,m(b,u,v(h._payload),I)}if(Do(h)||xo(h))return v!==null?null:p(b,u,h,I,null);Mi(b,h)}return null}function j(b,u,h,I,v){if(typeof I=="string"&&I!==""||typeof I=="number")return b=b.get(h)||null,a(u,b,""+I,v);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Si:return b=b.get(I.key===null?h:I.key)||null,d(u,b,I,v);case Ln:return b=b.get(I.key===null?h:I.key)||null,c(u,b,I,v);case Lr:var C=I._init;return j(b,u,h,C(I._payload),v)}if(Do(I)||xo(I))return b=b.get(h)||null,p(u,b,I,v,null);Mi(u,I)}return null}function x(b,u,h,I){for(var v=null,C=null,L=u,A=u=0,E=null;L!==null&&A<h.length;A++){L.index>A?(E=L,L=null):E=L.sibling;var M=m(b,L,h[A],I);if(M===null){L===null&&(L=E);break}t&&L&&M.alternate===null&&e(b,L),u=s(M,u,A),C===null?v=M:C.sibling=M,C=M,L=E}if(A===h.length)return n(b,L),Qt&&an(b,A),v;if(L===null){for(;A<h.length;A++)L=y(b,h[A],I),L!==null&&(u=s(L,u,A),C===null?v=L:C.sibling=L,C=L);return Qt&&an(b,A),v}for(L=o(b,L);A<h.length;A++)E=j(L,b,A,h[A],I),E!==null&&(t&&E.alternate!==null&&L.delete(E.key===null?A:E.key),u=s(E,u,A),C===null?v=E:C.sibling=E,C=E);return t&&L.forEach(function(S){return e(b,S)}),Qt&&an(b,A),v}function k(b,u,h,I){var v=xo(h);if(typeof v!="function")throw Error(tt(150));if(h=v.call(h),h==null)throw Error(tt(151));for(var C=v=null,L=u,A=u=0,E=null,M=h.next();L!==null&&!M.done;A++,M=h.next()){L.index>A?(E=L,L=null):E=L.sibling;var S=m(b,L,M.value,I);if(S===null){L===null&&(L=E);break}t&&L&&S.alternate===null&&e(b,L),u=s(S,u,A),C===null?v=S:C.sibling=S,C=S,L=E}if(M.done)return n(b,L),Qt&&an(b,A),v;if(L===null){for(;!M.done;A++,M=h.next())M=y(b,M.value,I),M!==null&&(u=s(M,u,A),C===null?v=M:C.sibling=M,C=M);return Qt&&an(b,A),v}for(L=o(b,L);!M.done;A++,M=h.next())M=j(L,b,A,M.value,I),M!==null&&(t&&M.alternate!==null&&L.delete(M.key===null?A:M.key),u=s(M,u,A),C===null?v=M:C.sibling=M,C=M);return t&&L.forEach(function(D){return e(b,D)}),Qt&&an(b,A),v}function T(b,u,h,I){if(typeof h=="object"&&h!==null&&h.type===_n&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Si:t:{for(var v=h.key,C=u;C!==null;){if(C.key===v){if(v=h.type,v===_n){if(C.tag===7){n(b,C.sibling),u=i(C,h.props.children),u.return=b,b=u;break t}}else if(C.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===Lr&&Hc(v)===C.type){n(b,C.sibling),u=i(C,h.props),u.ref=So(b,C,h),u.return=b,b=u;break t}n(b,C);break}else e(b,C);C=C.sibling}h.type===_n?(u=fn(h.props.children,b.mode,I,h.key),u.return=b,b=u):(I=as(h.type,h.key,h.props,null,b.mode,I),I.ref=So(b,u,h),I.return=b,b=I)}return l(b);case Ln:t:{for(C=h.key;u!==null;){if(u.key===C)if(u.tag===4&&u.stateNode.containerInfo===h.containerInfo&&u.stateNode.implementation===h.implementation){n(b,u.sibling),u=i(u,h.children||[]),u.return=b,b=u;break t}else{n(b,u);break}else e(b,u);u=u.sibling}u=Bl(h,b.mode,I),u.return=b,b=u}return l(b);case Lr:return C=h._init,T(b,u,C(h._payload),I)}if(Do(h))return x(b,u,h,I);if(xo(h))return k(b,u,h,I);Mi(b,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,u!==null&&u.tag===6?(n(b,u.sibling),u=i(u,h),u.return=b,b=u):(n(b,u),u=El(h,b.mode,I),u.return=b,b=u),l(b)):n(b,u)}return T}var oo=pp(!0),bp=pp(!1),Cs=en(null),Is=null,Yn=null,wd=null;function kd(){wd=Yn=Is=null}function jd(t){var e=Cs.current;Vt(Cs),t._currentValue=e}function va(t,e,n){for(;t!==null;){var o=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,o!==null&&(o.childLanes|=e)):o!==null&&(o.childLanes&e)!==e&&(o.childLanes|=e),t===n)break;t=t.return}}function Zn(t,e){Is=t,wd=Yn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Fe=!0),t.firstContext=null)}function Je(t){var e=t._currentValue;if(wd!==t)if(t={context:t,memoizedValue:e,next:null},Yn===null){if(Is===null)throw Error(tt(308));Yn=t,Is.dependencies={lanes:0,firstContext:t}}else Yn=Yn.next=t;return e}var un=null;function Sd(t){un===null?un=[t]:un.push(t)}function mp(t,e,n,o){var i=e.interleaved;return i===null?(n.next=n,Sd(e)):(n.next=i.next,i.next=n),e.interleaved=n,Er(t,o)}function Er(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var _r=!1;function Cd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fp(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ir(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Qr(t,e,n){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,Lt&2){var i=o.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),o.pending=e,Er(t,n)}return i=o.interleaved,i===null?(e.next=e,Sd(o)):(e.next=i.next,i.next=e),o.interleaved=e,Er(t,n)}function rs(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var o=e.lanes;o&=t.pendingLanes,n|=o,e.lanes=n,cd(t,n)}}function Gc(t,e){var n=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=l:s=s.next=l,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:o.shared,effects:o.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function zs(t,e,n,o){var i=t.updateQueue;_r=!1;var s=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var d=a,c=d.next;d.next=null,l===null?s=c:l.next=c,l=d;var p=t.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==l&&(a===null?p.firstBaseUpdate=c:a.next=c,p.lastBaseUpdate=d))}if(s!==null){var y=i.baseState;l=0,p=c=d=null,a=s;do{var m=a.lane,j=a.eventTime;if((o&m)===m){p!==null&&(p=p.next={eventTime:j,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});t:{var x=t,k=a;switch(m=e,j=n,k.tag){case 1:if(x=k.payload,typeof x=="function"){y=x.call(j,y,m);break t}y=x;break t;case 3:x.flags=x.flags&-65537|128;case 0:if(x=k.payload,m=typeof x=="function"?x.call(j,y,m):x,m==null)break t;y=qt({},y,m);break t;case 2:_r=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else j={eventTime:j,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(c=p=j,d=y):p=p.next=j,l|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(p===null&&(d=y),i.baseState=d,i.firstBaseUpdate=c,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do l|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);vn|=l,t.lanes=l,t.memoizedState=y}}function Uc(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var o=t[e],i=o.callback;if(i!==null){if(o.callback=null,o=n,typeof i!="function")throw Error(tt(191,i));i.call(o)}}}var yi={},br=en(yi),li=en(yi),ai=en(yi);function pn(t){if(t===yi)throw Error(tt(174));return t}function Id(t,e){switch(Ut(ai,e),Ut(li,t),Ut(br,yi),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ta(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ta(e,t)}Vt(br),Ut(br,e)}function io(){Vt(br),Vt(li),Vt(ai)}function hp(t){pn(ai.current);var e=pn(br.current),n=ta(e,t.type);e!==n&&(Ut(li,t),Ut(br,n))}function zd(t){li.current===t&&(Vt(br),Vt(li))}var Kt=en(0);function Ts(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jl=[];function Td(){for(var t=0;t<jl.length;t++)jl[t]._workInProgressVersionPrimary=null;jl.length=0}var ns=Dr.ReactCurrentDispatcher,Sl=Dr.ReactCurrentBatchConfig,xn=0,Xt=null,se=null,ue=null,Es=!1,Go=!1,di=0,Hf=0;function xe(){throw Error(tt(321))}function Ed(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!lr(t[n],e[n]))return!1;return!0}function Bd(t,e,n,o,i,s){if(xn=s,Xt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ns.current=t===null||t.memoizedState===null?Vf:Qf,t=n(o,i),Go){s=0;do{if(Go=!1,di=0,25<=s)throw Error(tt(301));s+=1,ue=se=null,e.updateQueue=null,ns.current=Kf,t=n(o,i)}while(Go)}if(ns.current=Bs,e=se!==null&&se.next!==null,xn=0,ue=se=Xt=null,Es=!1,e)throw Error(tt(300));return t}function Rd(){var t=di!==0;return di=0,t}function dr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?Xt.memoizedState=ue=t:ue=ue.next=t,ue}function Ze(){if(se===null){var t=Xt.alternate;t=t!==null?t.memoizedState:null}else t=se.next;var e=ue===null?Xt.memoizedState:ue.next;if(e!==null)ue=e,se=t;else{if(t===null)throw Error(tt(310));se=t,t={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},ue===null?Xt.memoizedState=ue=t:ue=ue.next=t}return ue}function ci(t,e){return typeof e=="function"?e(t):e}function Cl(t){var e=Ze(),n=e.queue;if(n===null)throw Error(tt(311));n.lastRenderedReducer=t;var o=se,i=o.baseQueue,s=n.pending;if(s!==null){if(i!==null){var l=i.next;i.next=s.next,s.next=l}o.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,o=o.baseState;var a=l=null,d=null,c=s;do{var p=c.lane;if((xn&p)===p)d!==null&&(d=d.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),o=c.hasEagerState?c.eagerState:t(o,c.action);else{var y={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};d===null?(a=d=y,l=o):d=d.next=y,Xt.lanes|=p,vn|=p}c=c.next}while(c!==null&&c!==s);d===null?l=o:d.next=a,lr(o,e.memoizedState)||(Fe=!0),e.memoizedState=o,e.baseState=l,e.baseQueue=d,n.lastRenderedState=o}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Xt.lanes|=s,vn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Il(t){var e=Ze(),n=e.queue;if(n===null)throw Error(tt(311));n.lastRenderedReducer=t;var o=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do s=t(s,l.action),l=l.next;while(l!==i);lr(s,e.memoizedState)||(Fe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,o]}function yp(){}function xp(t,e){var n=Xt,o=Ze(),i=e(),s=!lr(o.memoizedState,i);if(s&&(o.memoizedState=i,Fe=!0),o=o.queue,Dd(kp.bind(null,n,o,t),[t]),o.getSnapshot!==e||s||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,gi(9,wp.bind(null,n,o,i,e),void 0,null),pe===null)throw Error(tt(349));xn&30||vp(n,e,i)}return i}function vp(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Xt.updateQueue,e===null?(e={lastEffect:null,stores:null},Xt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function wp(t,e,n,o){e.value=n,e.getSnapshot=o,jp(e)&&Sp(t)}function kp(t,e,n){return n(function(){jp(e)&&Sp(t)})}function jp(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!lr(t,n)}catch{return!0}}function Sp(t){var e=Er(t,1);e!==null&&sr(e,t,1,-1)}function Yc(t){var e=dr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ci,lastRenderedState:t},e.queue=t,t=t.dispatch=Yf.bind(null,Xt,t),[e.memoizedState,t]}function gi(t,e,n,o){return t={tag:t,create:e,destroy:n,deps:o,next:null},e=Xt.updateQueue,e===null?(e={lastEffect:null,stores:null},Xt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(o=n.next,n.next=t,t.next=o,e.lastEffect=t)),t}function Cp(){return Ze().memoizedState}function os(t,e,n,o){var i=dr();Xt.flags|=t,i.memoizedState=gi(1|e,n,void 0,o===void 0?null:o)}function Ys(t,e,n,o){var i=Ze();o=o===void 0?null:o;var s=void 0;if(se!==null){var l=se.memoizedState;if(s=l.destroy,o!==null&&Ed(o,l.deps)){i.memoizedState=gi(e,n,s,o);return}}Xt.flags|=t,i.memoizedState=gi(1|e,n,s,o)}function Vc(t,e){return os(8390656,8,t,e)}function Dd(t,e){return Ys(2048,8,t,e)}function Ip(t,e){return Ys(4,2,t,e)}function zp(t,e){return Ys(4,4,t,e)}function Tp(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ep(t,e,n){return n=n!=null?n.concat([t]):null,Ys(4,4,Tp.bind(null,e,t),n)}function Ad(){}function Bp(t,e){var n=Ze();e=e===void 0?null:e;var o=n.memoizedState;return o!==null&&e!==null&&Ed(e,o[1])?o[0]:(n.memoizedState=[t,e],t)}function Rp(t,e){var n=Ze();e=e===void 0?null:e;var o=n.memoizedState;return o!==null&&e!==null&&Ed(e,o[1])?o[0]:(t=t(),n.memoizedState=[t,e],t)}function Dp(t,e,n){return xn&21?(lr(n,e)||(n=Lu(),Xt.lanes|=n,vn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Fe=!0),t.memoizedState=n)}function Gf(t,e){var n=Ot;Ot=n!==0&&4>n?n:4,t(!0);var o=Sl.transition;Sl.transition={};try{t(!1),e()}finally{Ot=n,Sl.transition=o}}function Ap(){return Ze().memoizedState}function Uf(t,e,n){var o=Xr(t);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},Fp(t))Mp(e,n);else if(n=mp(t,e,n,o),n!==null){var i=Te();sr(n,t,o,i),Wp(n,e,o)}}function Yf(t,e,n){var o=Xr(t),i={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fp(t))Mp(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var l=e.lastRenderedState,a=s(l,n);if(i.hasEagerState=!0,i.eagerState=a,lr(a,l)){var d=e.interleaved;d===null?(i.next=i,Sd(e)):(i.next=d.next,d.next=i),e.interleaved=i;return}}catch{}finally{}n=mp(t,e,i,o),n!==null&&(i=Te(),sr(n,t,o,i),Wp(n,e,o))}}function Fp(t){var e=t.alternate;return t===Xt||e!==null&&e===Xt}function Mp(t,e){Go=Es=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Wp(t,e,n){if(n&4194240){var o=e.lanes;o&=t.pendingLanes,n|=o,e.lanes=n,cd(t,n)}}var Bs={readContext:Je,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},Vf={readContext:Je,useCallback:function(t,e){return dr().memoizedState=[t,e===void 0?null:e],t},useContext:Je,useEffect:Vc,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,os(4194308,4,Tp.bind(null,e,t),n)},useLayoutEffect:function(t,e){return os(4194308,4,t,e)},useInsertionEffect:function(t,e){return os(4,2,t,e)},useMemo:function(t,e){var n=dr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var o=dr();return e=n!==void 0?n(e):e,o.memoizedState=o.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},o.queue=t,t=t.dispatch=Uf.bind(null,Xt,t),[o.memoizedState,t]},useRef:function(t){var e=dr();return t={current:t},e.memoizedState=t},useState:Yc,useDebugValue:Ad,useDeferredValue:function(t){return dr().memoizedState=t},useTransition:function(){var t=Yc(!1),e=t[0];return t=Gf.bind(null,t[1]),dr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var o=Xt,i=dr();if(Qt){if(n===void 0)throw Error(tt(407));n=n()}else{if(n=e(),pe===null)throw Error(tt(349));xn&30||vp(o,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Vc(kp.bind(null,o,s,t),[t]),o.flags|=2048,gi(9,wp.bind(null,o,s,n,e),void 0,null),n},useId:function(){var t=dr(),e=pe.identifierPrefix;if(Qt){var n=Cr,o=Sr;n=(o&~(1<<32-ir(o)-1)).toString(32)+n,e=":"+e+"R"+n,n=di++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Hf++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Qf={readContext:Je,useCallback:Bp,useContext:Je,useEffect:Dd,useImperativeHandle:Ep,useInsertionEffect:Ip,useLayoutEffect:zp,useMemo:Rp,useReducer:Cl,useRef:Cp,useState:function(){return Cl(ci)},useDebugValue:Ad,useDeferredValue:function(t){var e=Ze();return Dp(e,se.memoizedState,t)},useTransition:function(){var t=Cl(ci)[0],e=Ze().memoizedState;return[t,e]},useMutableSource:yp,useSyncExternalStore:xp,useId:Ap,unstable_isNewReconciler:!1},Kf={readContext:Je,useCallback:Bp,useContext:Je,useEffect:Dd,useImperativeHandle:Ep,useInsertionEffect:Ip,useLayoutEffect:zp,useMemo:Rp,useReducer:Il,useRef:Cp,useState:function(){return Il(ci)},useDebugValue:Ad,useDeferredValue:function(t){var e=Ze();return se===null?e.memoizedState=t:Dp(e,se.memoizedState,t)},useTransition:function(){var t=Il(ci)[0],e=Ze().memoizedState;return[t,e]},useMutableSource:yp,useSyncExternalStore:xp,useId:Ap,unstable_isNewReconciler:!1};function rr(t,e){if(t&&t.defaultProps){e=qt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function wa(t,e,n,o){e=t.memoizedState,n=n(o,e),n=n==null?e:qt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Vs={isMounted:function(t){return(t=t._reactInternals)?Sn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var o=Te(),i=Xr(t),s=Ir(o,i);s.payload=e,n!=null&&(s.callback=n),e=Qr(t,s,i),e!==null&&(sr(e,t,i,o),rs(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var o=Te(),i=Xr(t),s=Ir(o,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Qr(t,s,i),e!==null&&(sr(e,t,i,o),rs(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Te(),o=Xr(t),i=Ir(n,o);i.tag=2,e!=null&&(i.callback=e),e=Qr(t,i,o),e!==null&&(sr(e,t,o,n),rs(e,t,o))}};function Qc(t,e,n,o,i,s,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,s,l):e.prototype&&e.prototype.isPureReactComponent?!ni(n,o)||!ni(i,s):!0}function Lp(t,e,n){var o=!1,i=Zr,s=e.contextType;return typeof s=="object"&&s!==null?s=Je(s):(i=We(e)?hn:ke.current,o=e.contextTypes,s=(o=o!=null)?ro(t,i):Zr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Vs,t.stateNode=e,e._reactInternals=t,o&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Kc(t,e,n,o){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,o),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,o),e.state!==t&&Vs.enqueueReplaceState(e,e.state,null)}function ka(t,e,n,o){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Cd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Je(s):(s=We(e)?hn:ke.current,i.context=ro(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(wa(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Vs.enqueueReplaceState(i,i.state,null),zs(t,n,i,o),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function so(t,e){try{var n="",o=e;do n+=km(o),o=o.return;while(o);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function zl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ja(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Xf=typeof WeakMap=="function"?WeakMap:Map;function _p(t,e,n){n=Ir(-1,n),n.tag=3,n.payload={element:null};var o=e.value;return n.callback=function(){Ds||(Ds=!0,Aa=o),ja(t,e)},n}function Pp(t,e,n){n=Ir(-1,n),n.tag=3;var o=t.type.getDerivedStateFromError;if(typeof o=="function"){var i=e.value;n.payload=function(){return o(i)},n.callback=function(){ja(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ja(t,e),typeof o!="function"&&(Kr===null?Kr=new Set([this]):Kr.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),n}function Xc(t,e,n){var o=t.pingCache;if(o===null){o=t.pingCache=new Xf;var i=new Set;o.set(e,i)}else i=o.get(e),i===void 0&&(i=new Set,o.set(e,i));i.has(n)||(i.add(n),t=ch.bind(null,t,e,n),e.then(t,t))}function qc(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Jc(t,e,n,o,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ir(-1,1),e.tag=2,Qr(n,e,1))),n.lanes|=1),t)}var qf=Dr.ReactCurrentOwner,Fe=!1;function ze(t,e,n,o){e.child=t===null?bp(e,null,n,o):oo(e,t.child,n,o)}function Zc(t,e,n,o,i){n=n.render;var s=e.ref;return Zn(e,i),o=Bd(t,e,n,o,s,i),n=Rd(),t!==null&&!Fe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Br(t,e,i)):(Qt&&n&&yd(e),e.flags|=1,ze(t,e,o,i),e.child)}function tg(t,e,n,o,i){if(t===null){var s=n.type;return typeof s=="function"&&!Nd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,$p(t,e,s,o,i)):(t=as(n.type,null,o,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var l=s.memoizedProps;if(n=n.compare,n=n!==null?n:ni,n(l,o)&&t.ref===e.ref)return Br(t,e,i)}return e.flags|=1,t=qr(s,o),t.ref=e.ref,t.return=e,e.child=t}function $p(t,e,n,o,i){if(t!==null){var s=t.memoizedProps;if(ni(s,o)&&t.ref===e.ref)if(Fe=!1,e.pendingProps=o=s,(t.lanes&i)!==0)t.flags&131072&&(Fe=!0);else return e.lanes=t.lanes,Br(t,e,i)}return Sa(t,e,n,o,i)}function Np(t,e,n){var o=e.pendingProps,i=o.children,s=t!==null?t.memoizedState:null;if(o.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ut(Qn,_e),_e|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ut(Qn,_e),_e|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=s!==null?s.baseLanes:n,Ut(Qn,_e),_e|=o}else s!==null?(o=s.baseLanes|n,e.memoizedState=null):o=n,Ut(Qn,_e),_e|=o;return ze(t,e,i,n),e.child}function Op(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Sa(t,e,n,o,i){var s=We(n)?hn:ke.current;return s=ro(e,s),Zn(e,i),n=Bd(t,e,n,o,s,i),o=Rd(),t!==null&&!Fe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Br(t,e,i)):(Qt&&o&&yd(e),e.flags|=1,ze(t,e,n,i),e.child)}function eg(t,e,n,o,i){if(We(n)){var s=!0;ks(e)}else s=!1;if(Zn(e,i),e.stateNode===null)is(t,e),Lp(e,n,o),ka(e,n,o,i),o=!0;else if(t===null){var l=e.stateNode,a=e.memoizedProps;l.props=a;var d=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Je(c):(c=We(n)?hn:ke.current,c=ro(e,c));var p=n.getDerivedStateFromProps,y=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";y||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==o||d!==c)&&Kc(e,l,o,c),_r=!1;var m=e.memoizedState;l.state=m,zs(e,o,l,i),d=e.memoizedState,a!==o||m!==d||Me.current||_r?(typeof p=="function"&&(wa(e,n,p,o),d=e.memoizedState),(a=_r||Qc(e,n,a,o,m,d,c))?(y||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=o,e.memoizedState=d),l.props=o,l.state=d,l.context=c,o=a):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),o=!1)}else{l=e.stateNode,fp(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:rr(e.type,a),l.props=c,y=e.pendingProps,m=l.context,d=n.contextType,typeof d=="object"&&d!==null?d=Je(d):(d=We(n)?hn:ke.current,d=ro(e,d));var j=n.getDerivedStateFromProps;(p=typeof j=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==y||m!==d)&&Kc(e,l,o,d),_r=!1,m=e.memoizedState,l.state=m,zs(e,o,l,i);var x=e.memoizedState;a!==y||m!==x||Me.current||_r?(typeof j=="function"&&(wa(e,n,j,o),x=e.memoizedState),(c=_r||Qc(e,n,c,o,m,x,d)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(o,x,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(o,x,d)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=o,e.memoizedState=x),l.props=o,l.state=x,l.context=d,o=c):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),o=!1)}return Ca(t,e,n,o,s,i)}function Ca(t,e,n,o,i,s){Op(t,e);var l=(e.flags&128)!==0;if(!o&&!l)return i&&$c(e,n,!1),Br(t,e,s);o=e.stateNode,qf.current=e;var a=l&&typeof n.getDerivedStateFromError!="function"?null:o.render();return e.flags|=1,t!==null&&l?(e.child=oo(e,t.child,null,s),e.child=oo(e,null,a,s)):ze(t,e,a,s),e.memoizedState=o.state,i&&$c(e,n,!0),e.child}function Hp(t){var e=t.stateNode;e.pendingContext?Pc(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Pc(t,e.context,!1),Id(t,e.containerInfo)}function rg(t,e,n,o,i){return no(),vd(i),e.flags|=256,ze(t,e,n,o),e.child}var Ia={dehydrated:null,treeContext:null,retryLane:0};function za(t){return{baseLanes:t,cachePool:null,transitions:null}}function Gp(t,e,n){var o=e.pendingProps,i=Kt.current,s=!1,l=(e.flags&128)!==0,a;if((a=l)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ut(Kt,i&1),t===null)return xa(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=o.children,t=o.fallback,s?(o=e.mode,s=e.child,l={mode:"hidden",children:l},!(o&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=Xs(l,o,0,null),t=fn(t,o,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=za(n),e.memoizedState=Ia,t):Fd(e,l));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Jf(t,e,l,o,a,i,n);if(s){s=o.fallback,l=e.mode,i=t.child,a=i.sibling;var d={mode:"hidden",children:o.children};return!(l&1)&&e.child!==i?(o=e.child,o.childLanes=0,o.pendingProps=d,e.deletions=null):(o=qr(i,d),o.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=qr(a,s):(s=fn(s,l,n,null),s.flags|=2),s.return=e,o.return=e,o.sibling=s,e.child=o,o=s,s=e.child,l=t.child.memoizedState,l=l===null?za(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=t.childLanes&~n,e.memoizedState=Ia,o}return s=t.child,t=s.sibling,o=qr(s,{mode:"visible",children:o.children}),!(e.mode&1)&&(o.lanes=n),o.return=e,o.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=o,e.memoizedState=null,o}function Fd(t,e){return e=Xs({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Wi(t,e,n,o){return o!==null&&vd(o),oo(e,t.child,null,n),t=Fd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Jf(t,e,n,o,i,s,l){if(n)return e.flags&256?(e.flags&=-257,o=zl(Error(tt(422))),Wi(t,e,l,o)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=o.fallback,i=e.mode,o=Xs({mode:"visible",children:o.children},i,0,null),s=fn(s,i,l,null),s.flags|=2,o.return=e,s.return=e,o.sibling=s,e.child=o,e.mode&1&&oo(e,t.child,null,l),e.child.memoizedState=za(l),e.memoizedState=Ia,s);if(!(e.mode&1))return Wi(t,e,l,null);if(i.data==="$!"){if(o=i.nextSibling&&i.nextSibling.dataset,o)var a=o.dgst;return o=a,s=Error(tt(419)),o=zl(s,o,void 0),Wi(t,e,l,o)}if(a=(l&t.childLanes)!==0,Fe||a){if(o=pe,o!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(o.suspendedLanes|l)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Er(t,i),sr(o,t,i,-1))}return $d(),o=zl(Error(tt(421))),Wi(t,e,l,o)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=gh.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,$e=Vr(i.nextSibling),Ne=e,Qt=!0,or=null,t!==null&&(Qe[Ke++]=Sr,Qe[Ke++]=Cr,Qe[Ke++]=yn,Sr=t.id,Cr=t.overflow,yn=e),e=Fd(e,o.children),e.flags|=4096,e)}function ng(t,e,n){t.lanes|=e;var o=t.alternate;o!==null&&(o.lanes|=e),va(t.return,e,n)}function Tl(t,e,n,o,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=n,s.tailMode=i)}function Up(t,e,n){var o=e.pendingProps,i=o.revealOrder,s=o.tail;if(ze(t,e,o.children,n),o=Kt.current,o&2)o=o&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ng(t,n,e);else if(t.tag===19)ng(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}if(Ut(Kt,o),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ts(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Tl(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ts(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Tl(e,!0,n,null,s);break;case"together":Tl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function is(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Br(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),vn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(tt(153));if(e.child!==null){for(t=e.child,n=qr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=qr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Zf(t,e,n){switch(e.tag){case 3:Hp(e),no();break;case 5:hp(e);break;case 1:We(e.type)&&ks(e);break;case 4:Id(e,e.stateNode.containerInfo);break;case 10:var o=e.type._context,i=e.memoizedProps.value;Ut(Cs,o._currentValue),o._currentValue=i;break;case 13:if(o=e.memoizedState,o!==null)return o.dehydrated!==null?(Ut(Kt,Kt.current&1),e.flags|=128,null):n&e.child.childLanes?Gp(t,e,n):(Ut(Kt,Kt.current&1),t=Br(t,e,n),t!==null?t.sibling:null);Ut(Kt,Kt.current&1);break;case 19:if(o=(n&e.childLanes)!==0,t.flags&128){if(o)return Up(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ut(Kt,Kt.current),o)break;return null;case 22:case 23:return e.lanes=0,Np(t,e,n)}return Br(t,e,n)}var Yp,Ta,Vp,Qp;Yp=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ta=function(){};Vp=function(t,e,n,o){var i=t.memoizedProps;if(i!==o){t=e.stateNode,pn(br.current);var s=null;switch(n){case"input":i=Xl(t,i),o=Xl(t,o),s=[];break;case"select":i=qt({},i,{value:void 0}),o=qt({},o,{value:void 0}),s=[];break;case"textarea":i=Zl(t,i),o=Zl(t,o),s=[];break;default:typeof i.onClick!="function"&&typeof o.onClick=="function"&&(t.onclick=vs)}ea(n,o);var l;n=null;for(c in i)if(!o.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Xo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in o){var d=o[c];if(a=i!=null?i[c]:void 0,o.hasOwnProperty(c)&&d!==a&&(d!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in d)d.hasOwnProperty(l)&&a[l]!==d[l]&&(n||(n={}),n[l]=d[l])}else n||(s||(s=[]),s.push(c,n)),n=d;else c==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,a=a?a.__html:void 0,d!=null&&a!==d&&(s=s||[]).push(c,d)):c==="children"?typeof d!="string"&&typeof d!="number"||(s=s||[]).push(c,""+d):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Xo.hasOwnProperty(c)?(d!=null&&c==="onScroll"&&Yt("scroll",t),s||a===d||(s=[])):(s=s||[]).push(c,d))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Qp=function(t,e,n,o){n!==o&&(e.flags|=4)};function Co(t,e){if(!Qt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function ve(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,o=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags&14680064,o|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=o,t.childLanes=n,e}function th(t,e,n){var o=e.pendingProps;switch(xd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(e),null;case 1:return We(e.type)&&ws(),ve(e),null;case 3:return o=e.stateNode,io(),Vt(Me),Vt(ke),Td(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(t===null||t.child===null)&&(Fi(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,or!==null&&(Wa(or),or=null))),Ta(t,e),ve(e),null;case 5:zd(e);var i=pn(ai.current);if(n=e.type,t!==null&&e.stateNode!=null)Vp(t,e,n,o,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!o){if(e.stateNode===null)throw Error(tt(166));return ve(e),null}if(t=pn(br.current),Fi(e)){o=e.stateNode,n=e.type;var s=e.memoizedProps;switch(o[ur]=e,o[si]=s,t=(e.mode&1)!==0,n){case"dialog":Yt("cancel",o),Yt("close",o);break;case"iframe":case"object":case"embed":Yt("load",o);break;case"video":case"audio":for(i=0;i<Fo.length;i++)Yt(Fo[i],o);break;case"source":Yt("error",o);break;case"img":case"image":case"link":Yt("error",o),Yt("load",o);break;case"details":Yt("toggle",o);break;case"input":uc(o,s),Yt("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!s.multiple},Yt("invalid",o);break;case"textarea":bc(o,s),Yt("invalid",o)}ea(n,s),i=null;for(var l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="children"?typeof a=="string"?o.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ai(o.textContent,a,t),i=["children",a]):typeof a=="number"&&o.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ai(o.textContent,a,t),i=["children",""+a]):Xo.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&Yt("scroll",o)}switch(n){case"input":Ci(o),pc(o,s,!0);break;case"textarea":Ci(o),mc(o);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(o.onclick=vs)}o=i,e.updateQueue=o,o!==null&&(e.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ku(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof o.is=="string"?t=l.createElement(n,{is:o.is}):(t=l.createElement(n),n==="select"&&(l=t,o.multiple?l.multiple=!0:o.size&&(l.size=o.size))):t=l.createElementNS(t,n),t[ur]=e,t[si]=o,Yp(t,e,!1,!1),e.stateNode=t;t:{switch(l=ra(n,o),n){case"dialog":Yt("cancel",t),Yt("close",t),i=o;break;case"iframe":case"object":case"embed":Yt("load",t),i=o;break;case"video":case"audio":for(i=0;i<Fo.length;i++)Yt(Fo[i],t);i=o;break;case"source":Yt("error",t),i=o;break;case"img":case"image":case"link":Yt("error",t),Yt("load",t),i=o;break;case"details":Yt("toggle",t),i=o;break;case"input":uc(t,o),i=Xl(t,o),Yt("invalid",t);break;case"option":i=o;break;case"select":t._wrapperState={wasMultiple:!!o.multiple},i=qt({},o,{value:void 0}),Yt("invalid",t);break;case"textarea":bc(t,o),i=Zl(t,o),Yt("invalid",t);break;default:i=o}ea(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var d=a[s];s==="style"?Cu(t,d):s==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&ju(t,d)):s==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&qo(t,d):typeof d=="number"&&qo(t,""+d):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xo.hasOwnProperty(s)?d!=null&&s==="onScroll"&&Yt("scroll",t):d!=null&&od(t,s,d,l))}switch(n){case"input":Ci(t),pc(t,o,!1);break;case"textarea":Ci(t),mc(t);break;case"option":o.value!=null&&t.setAttribute("value",""+Jr(o.value));break;case"select":t.multiple=!!o.multiple,s=o.value,s!=null?Kn(t,!!o.multiple,s,!1):o.defaultValue!=null&&Kn(t,!!o.multiple,o.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=vs)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}}o&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ve(e),null;case 6:if(t&&e.stateNode!=null)Qp(t,e,t.memoizedProps,o);else{if(typeof o!="string"&&e.stateNode===null)throw Error(tt(166));if(n=pn(ai.current),pn(br.current),Fi(e)){if(o=e.stateNode,n=e.memoizedProps,o[ur]=e,(s=o.nodeValue!==n)&&(t=Ne,t!==null))switch(t.tag){case 3:Ai(o.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ai(o.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[ur]=e,e.stateNode=o}return ve(e),null;case 13:if(Vt(Kt),o=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Qt&&$e!==null&&e.mode&1&&!(e.flags&128))up(),no(),e.flags|=98560,s=!1;else if(s=Fi(e),o!==null&&o.dehydrated!==null){if(t===null){if(!s)throw Error(tt(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(tt(317));s[ur]=e}else no(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ve(e),s=!1}else or!==null&&(Wa(or),or=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(o=o!==null,o!==(t!==null&&t.memoizedState!==null)&&o&&(e.child.flags|=8192,e.mode&1&&(t===null||Kt.current&1?le===0&&(le=3):$d())),e.updateQueue!==null&&(e.flags|=4),ve(e),null);case 4:return io(),Ta(t,e),t===null&&oi(e.stateNode.containerInfo),ve(e),null;case 10:return jd(e.type._context),ve(e),null;case 17:return We(e.type)&&ws(),ve(e),null;case 19:if(Vt(Kt),s=e.memoizedState,s===null)return ve(e),null;if(o=(e.flags&128)!==0,l=s.rendering,l===null)if(o)Co(s,!1);else{if(le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(l=Ts(t),l!==null){for(e.flags|=128,Co(s,!1),o=l.updateQueue,o!==null&&(e.updateQueue=o,e.flags|=4),e.subtreeFlags=0,o=n,n=e.child;n!==null;)s=n,t=o,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,t=l.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ut(Kt,Kt.current&1|2),e.child}t=t.sibling}s.tail!==null&&ne()>lo&&(e.flags|=128,o=!0,Co(s,!1),e.lanes=4194304)}else{if(!o)if(t=Ts(l),t!==null){if(e.flags|=128,o=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Co(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!Qt)return ve(e),null}else 2*ne()-s.renderingStartTime>lo&&n!==1073741824&&(e.flags|=128,o=!0,Co(s,!1),e.lanes=4194304);s.isBackwards?(l.sibling=e.child,e.child=l):(n=s.last,n!==null?n.sibling=l:e.child=l,s.last=l)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ne(),e.sibling=null,n=Kt.current,Ut(Kt,o?n&1|2:n&1),e):(ve(e),null);case 22:case 23:return Pd(),o=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==o&&(e.flags|=8192),o&&e.mode&1?_e&1073741824&&(ve(e),e.subtreeFlags&6&&(e.flags|=8192)):ve(e),null;case 24:return null;case 25:return null}throw Error(tt(156,e.tag))}function eh(t,e){switch(xd(e),e.tag){case 1:return We(e.type)&&ws(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return io(),Vt(Me),Vt(ke),Td(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return zd(e),null;case 13:if(Vt(Kt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(tt(340));no()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Vt(Kt),null;case 4:return io(),null;case 10:return jd(e.type._context),null;case 22:case 23:return Pd(),null;case 24:return null;default:return null}}var Li=!1,we=!1,rh=typeof WeakSet=="function"?WeakSet:Set,mt=null;function Vn(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){re(t,e,o)}else n.current=null}function Ea(t,e,n){try{n()}catch(o){re(t,e,o)}}var og=!1;function nh(t,e){if(ua=hs,t=Zu(),hd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var i=o.anchorOffset,s=o.focusNode;o=o.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break t}var l=0,a=-1,d=-1,c=0,p=0,y=t,m=null;e:for(;;){for(var j;y!==n||i!==0&&y.nodeType!==3||(a=l+i),y!==s||o!==0&&y.nodeType!==3||(d=l+o),y.nodeType===3&&(l+=y.nodeValue.length),(j=y.firstChild)!==null;)m=y,y=j;for(;;){if(y===t)break e;if(m===n&&++c===i&&(a=l),m===s&&++p===o&&(d=l),(j=y.nextSibling)!==null)break;y=m,m=y.parentNode}y=j}n=a===-1||d===-1?null:{start:a,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(pa={focusedElem:t,selectionRange:n},hs=!1,mt=e;mt!==null;)if(e=mt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,mt=t;else for(;mt!==null;){e=mt;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var k=x.memoizedProps,T=x.memoizedState,b=e.stateNode,u=b.getSnapshotBeforeUpdate(e.elementType===e.type?k:rr(e.type,k),T);b.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var h=e.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(tt(163))}}catch(I){re(e,e.return,I)}if(t=e.sibling,t!==null){t.return=e.return,mt=t;break}mt=e.return}return x=og,og=!1,x}function Uo(t,e,n){var o=e.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var i=o=o.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ea(e,n,s)}i=i.next}while(i!==o)}}function Qs(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var o=n.create;n.destroy=o()}n=n.next}while(n!==e)}}function Ba(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Kp(t){var e=t.alternate;e!==null&&(t.alternate=null,Kp(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ur],delete e[si],delete e[fa],delete e[Pf],delete e[$f])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Xp(t){return t.tag===5||t.tag===3||t.tag===4}function ig(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Xp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ra(t,e,n){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=vs));else if(o!==4&&(t=t.child,t!==null))for(Ra(t,e,n),t=t.sibling;t!==null;)Ra(t,e,n),t=t.sibling}function Da(t,e,n){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(o!==4&&(t=t.child,t!==null))for(Da(t,e,n),t=t.sibling;t!==null;)Da(t,e,n),t=t.sibling}var me=null,nr=!1;function Wr(t,e,n){for(n=n.child;n!==null;)qp(t,e,n),n=n.sibling}function qp(t,e,n){if(pr&&typeof pr.onCommitFiberUnmount=="function")try{pr.onCommitFiberUnmount($s,n)}catch{}switch(n.tag){case 5:we||Vn(n,e);case 6:var o=me,i=nr;me=null,Wr(t,e,n),me=o,nr=i,me!==null&&(nr?(t=me,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):me.removeChild(n.stateNode));break;case 18:me!==null&&(nr?(t=me,n=n.stateNode,t.nodeType===8?wl(t.parentNode,n):t.nodeType===1&&wl(t,n),ei(t)):wl(me,n.stateNode));break;case 4:o=me,i=nr,me=n.stateNode.containerInfo,nr=!0,Wr(t,e,n),me=o,nr=i;break;case 0:case 11:case 14:case 15:if(!we&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){i=o=o.next;do{var s=i,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&Ea(n,e,l),i=i.next}while(i!==o)}Wr(t,e,n);break;case 1:if(!we&&(Vn(n,e),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(a){re(n,e,a)}Wr(t,e,n);break;case 21:Wr(t,e,n);break;case 22:n.mode&1?(we=(o=we)||n.memoizedState!==null,Wr(t,e,n),we=o):Wr(t,e,n);break;default:Wr(t,e,n)}}function sg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new rh),e.forEach(function(o){var i=uh.bind(null,t,o);n.has(o)||(n.add(o),o.then(i,i))})}}function tr(t,e){var n=e.deletions;if(n!==null)for(var o=0;o<n.length;o++){var i=n[o];try{var s=t,l=e,a=l;t:for(;a!==null;){switch(a.tag){case 5:me=a.stateNode,nr=!1;break t;case 3:me=a.stateNode.containerInfo,nr=!0;break t;case 4:me=a.stateNode.containerInfo,nr=!0;break t}a=a.return}if(me===null)throw Error(tt(160));qp(s,l,i),me=null,nr=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(c){re(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Jp(e,t),e=e.sibling}function Jp(t,e){var n=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(tr(e,t),ar(t),o&4){try{Uo(3,t,t.return),Qs(3,t)}catch(k){re(t,t.return,k)}try{Uo(5,t,t.return)}catch(k){re(t,t.return,k)}}break;case 1:tr(e,t),ar(t),o&512&&n!==null&&Vn(n,n.return);break;case 5:if(tr(e,t),ar(t),o&512&&n!==null&&Vn(n,n.return),t.flags&32){var i=t.stateNode;try{qo(i,"")}catch(k){re(t,t.return,k)}}if(o&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,l=n!==null?n.memoizedProps:s,a=t.type,d=t.updateQueue;if(t.updateQueue=null,d!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&vu(i,s),ra(a,l);var c=ra(a,s);for(l=0;l<d.length;l+=2){var p=d[l],y=d[l+1];p==="style"?Cu(i,y):p==="dangerouslySetInnerHTML"?ju(i,y):p==="children"?qo(i,y):od(i,p,y,c)}switch(a){case"input":ql(i,s);break;case"textarea":wu(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var j=s.value;j!=null?Kn(i,!!s.multiple,j,!1):m!==!!s.multiple&&(s.defaultValue!=null?Kn(i,!!s.multiple,s.defaultValue,!0):Kn(i,!!s.multiple,s.multiple?[]:"",!1))}i[si]=s}catch(k){re(t,t.return,k)}}break;case 6:if(tr(e,t),ar(t),o&4){if(t.stateNode===null)throw Error(tt(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){re(t,t.return,k)}}break;case 3:if(tr(e,t),ar(t),o&4&&n!==null&&n.memoizedState.isDehydrated)try{ei(e.containerInfo)}catch(k){re(t,t.return,k)}break;case 4:tr(e,t),ar(t);break;case 13:tr(e,t),ar(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ld=ne())),o&4&&sg(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(we=(c=we)||p,tr(e,t),we=c):tr(e,t),ar(t),o&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!p&&t.mode&1)for(mt=t,p=t.child;p!==null;){for(y=mt=p;mt!==null;){switch(m=mt,j=m.child,m.tag){case 0:case 11:case 14:case 15:Uo(4,m,m.return);break;case 1:Vn(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){o=m,n=m.return;try{e=o,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(k){re(o,n,k)}}break;case 5:Vn(m,m.return);break;case 22:if(m.memoizedState!==null){ag(y);continue}}j!==null?(j.return=m,mt=j):ag(y)}p=p.sibling}t:for(p=null,y=t;;){if(y.tag===5){if(p===null){p=y;try{i=y.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=y.stateNode,d=y.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,a.style.display=Su("display",l))}catch(k){re(t,t.return,k)}}}else if(y.tag===6){if(p===null)try{y.stateNode.nodeValue=c?"":y.memoizedProps}catch(k){re(t,t.return,k)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===t)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===t)break t;for(;y.sibling===null;){if(y.return===null||y.return===t)break t;p===y&&(p=null),y=y.return}p===y&&(p=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:tr(e,t),ar(t),o&4&&sg(t);break;case 21:break;default:tr(e,t),ar(t)}}function ar(t){var e=t.flags;if(e&2){try{t:{for(var n=t.return;n!==null;){if(Xp(n)){var o=n;break t}n=n.return}throw Error(tt(160))}switch(o.tag){case 5:var i=o.stateNode;o.flags&32&&(qo(i,""),o.flags&=-33);var s=ig(t);Da(t,s,i);break;case 3:case 4:var l=o.stateNode.containerInfo,a=ig(t);Ra(t,a,l);break;default:throw Error(tt(161))}}catch(d){re(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function oh(t,e,n){mt=t,Zp(t)}function Zp(t,e,n){for(var o=(t.mode&1)!==0;mt!==null;){var i=mt,s=i.child;if(i.tag===22&&o){var l=i.memoizedState!==null||Li;if(!l){var a=i.alternate,d=a!==null&&a.memoizedState!==null||we;a=Li;var c=we;if(Li=l,(we=d)&&!c)for(mt=i;mt!==null;)l=mt,d=l.child,l.tag===22&&l.memoizedState!==null?dg(i):d!==null?(d.return=l,mt=d):dg(i);for(;s!==null;)mt=s,Zp(s),s=s.sibling;mt=i,Li=a,we=c}lg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,mt=s):lg(t)}}function lg(t){for(;mt!==null;){var e=mt;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:we||Qs(5,e);break;case 1:var o=e.stateNode;if(e.flags&4&&!we)if(n===null)o.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:rr(e.type,n.memoizedProps);o.componentDidUpdate(i,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Uc(e,s,o);break;case 3:var l=e.updateQueue;if(l!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Uc(e,l,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var d=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var y=p.dehydrated;y!==null&&ei(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(tt(163))}we||e.flags&512&&Ba(e)}catch(m){re(e,e.return,m)}}if(e===t){mt=null;break}if(n=e.sibling,n!==null){n.return=e.return,mt=n;break}mt=e.return}}function ag(t){for(;mt!==null;){var e=mt;if(e===t){mt=null;break}var n=e.sibling;if(n!==null){n.return=e.return,mt=n;break}mt=e.return}}function dg(t){for(;mt!==null;){var e=mt;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Qs(4,e)}catch(d){re(e,n,d)}break;case 1:var o=e.stateNode;if(typeof o.componentDidMount=="function"){var i=e.return;try{o.componentDidMount()}catch(d){re(e,i,d)}}var s=e.return;try{Ba(e)}catch(d){re(e,s,d)}break;case 5:var l=e.return;try{Ba(e)}catch(d){re(e,l,d)}}}catch(d){re(e,e.return,d)}if(e===t){mt=null;break}var a=e.sibling;if(a!==null){a.return=e.return,mt=a;break}mt=e.return}}var ih=Math.ceil,Rs=Dr.ReactCurrentDispatcher,Md=Dr.ReactCurrentOwner,qe=Dr.ReactCurrentBatchConfig,Lt=0,pe=null,ie=null,fe=0,_e=0,Qn=en(0),le=0,ui=null,vn=0,Ks=0,Wd=0,Yo=null,Ae=null,Ld=0,lo=1/0,vr=null,Ds=!1,Aa=null,Kr=null,_i=!1,Hr=null,As=0,Vo=0,Fa=null,ss=-1,ls=0;function Te(){return Lt&6?ne():ss!==-1?ss:ss=ne()}function Xr(t){return t.mode&1?Lt&2&&fe!==0?fe&-fe:Of.transition!==null?(ls===0&&(ls=Lu()),ls):(t=Ot,t!==0||(t=window.event,t=t===void 0?16:Gu(t.type)),t):1}function sr(t,e,n,o){if(50<Vo)throw Vo=0,Fa=null,Error(tt(185));mi(t,n,o),(!(Lt&2)||t!==pe)&&(t===pe&&(!(Lt&2)&&(Ks|=n),le===4&&$r(t,fe)),Le(t,o),n===1&&Lt===0&&!(e.mode&1)&&(lo=ne()+500,Us&&rn()))}function Le(t,e){var n=t.callbackNode;Nm(t,e);var o=fs(t,t===pe?fe:0);if(o===0)n!==null&&yc(n),t.callbackNode=null,t.callbackPriority=0;else if(e=o&-o,t.callbackPriority!==e){if(n!=null&&yc(n),e===1)t.tag===0?Nf(cg.bind(null,t)):dp(cg.bind(null,t)),Lf(function(){!(Lt&6)&&rn()}),n=null;else{switch(_u(o)){case 1:n=dd;break;case 4:n=Mu;break;case 16:n=ms;break;case 536870912:n=Wu;break;default:n=ms}n=lb(n,tb.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function tb(t,e){if(ss=-1,ls=0,Lt&6)throw Error(tt(327));var n=t.callbackNode;if(to()&&t.callbackNode!==n)return null;var o=fs(t,t===pe?fe:0);if(o===0)return null;if(o&30||o&t.expiredLanes||e)e=Fs(t,o);else{e=o;var i=Lt;Lt|=2;var s=rb();(pe!==t||fe!==e)&&(vr=null,lo=ne()+500,mn(t,e));do try{ah();break}catch(a){eb(t,a)}while(!0);kd(),Rs.current=s,Lt=i,ie!==null?e=0:(pe=null,fe=0,e=le)}if(e!==0){if(e===2&&(i=la(t),i!==0&&(o=i,e=Ma(t,i))),e===1)throw n=ui,mn(t,0),$r(t,o),Le(t,ne()),n;if(e===6)$r(t,o);else{if(i=t.current.alternate,!(o&30)&&!sh(i)&&(e=Fs(t,o),e===2&&(s=la(t),s!==0&&(o=s,e=Ma(t,s))),e===1))throw n=ui,mn(t,0),$r(t,o),Le(t,ne()),n;switch(t.finishedWork=i,t.finishedLanes=o,e){case 0:case 1:throw Error(tt(345));case 2:dn(t,Ae,vr);break;case 3:if($r(t,o),(o&130023424)===o&&(e=Ld+500-ne(),10<e)){if(fs(t,0)!==0)break;if(i=t.suspendedLanes,(i&o)!==o){Te(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ma(dn.bind(null,t,Ae,vr),e);break}dn(t,Ae,vr);break;case 4:if($r(t,o),(o&4194240)===o)break;for(e=t.eventTimes,i=-1;0<o;){var l=31-ir(o);s=1<<l,l=e[l],l>i&&(i=l),o&=~s}if(o=i,o=ne()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*ih(o/1960))-o,10<o){t.timeoutHandle=ma(dn.bind(null,t,Ae,vr),o);break}dn(t,Ae,vr);break;case 5:dn(t,Ae,vr);break;default:throw Error(tt(329))}}}return Le(t,ne()),t.callbackNode===n?tb.bind(null,t):null}function Ma(t,e){var n=Yo;return t.current.memoizedState.isDehydrated&&(mn(t,e).flags|=256),t=Fs(t,e),t!==2&&(e=Ae,Ae=n,e!==null&&Wa(e)),t}function Wa(t){Ae===null?Ae=t:Ae.push.apply(Ae,t)}function sh(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var i=n[o],s=i.getSnapshot;i=i.value;try{if(!lr(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $r(t,e){for(e&=~Wd,e&=~Ks,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ir(e),o=1<<n;t[n]=-1,e&=~o}}function cg(t){if(Lt&6)throw Error(tt(327));to();var e=fs(t,0);if(!(e&1))return Le(t,ne()),null;var n=Fs(t,e);if(t.tag!==0&&n===2){var o=la(t);o!==0&&(e=o,n=Ma(t,o))}if(n===1)throw n=ui,mn(t,0),$r(t,e),Le(t,ne()),n;if(n===6)throw Error(tt(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,dn(t,Ae,vr),Le(t,ne()),null}function _d(t,e){var n=Lt;Lt|=1;try{return t(e)}finally{Lt=n,Lt===0&&(lo=ne()+500,Us&&rn())}}function wn(t){Hr!==null&&Hr.tag===0&&!(Lt&6)&&to();var e=Lt;Lt|=1;var n=qe.transition,o=Ot;try{if(qe.transition=null,Ot=1,t)return t()}finally{Ot=o,qe.transition=n,Lt=e,!(Lt&6)&&rn()}}function Pd(){_e=Qn.current,Vt(Qn)}function mn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Wf(n)),ie!==null)for(n=ie.return;n!==null;){var o=n;switch(xd(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&ws();break;case 3:io(),Vt(Me),Vt(ke),Td();break;case 5:zd(o);break;case 4:io();break;case 13:Vt(Kt);break;case 19:Vt(Kt);break;case 10:jd(o.type._context);break;case 22:case 23:Pd()}n=n.return}if(pe=t,ie=t=qr(t.current,null),fe=_e=e,le=0,ui=null,Wd=Ks=vn=0,Ae=Yo=null,un!==null){for(e=0;e<un.length;e++)if(n=un[e],o=n.interleaved,o!==null){n.interleaved=null;var i=o.next,s=n.pending;if(s!==null){var l=s.next;s.next=i,o.next=l}n.pending=o}un=null}return t}function eb(t,e){do{var n=ie;try{if(kd(),ns.current=Bs,Es){for(var o=Xt.memoizedState;o!==null;){var i=o.queue;i!==null&&(i.pending=null),o=o.next}Es=!1}if(xn=0,ue=se=Xt=null,Go=!1,di=0,Md.current=null,n===null||n.return===null){le=1,ui=e,ie=null;break}t:{var s=t,l=n.return,a=n,d=e;if(e=fe,a.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var c=d,p=a,y=p.tag;if(!(p.mode&1)&&(y===0||y===11||y===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var j=qc(l);if(j!==null){j.flags&=-257,Jc(j,l,a,s,e),j.mode&1&&Xc(s,c,e),e=j,d=c;var x=e.updateQueue;if(x===null){var k=new Set;k.add(d),e.updateQueue=k}else x.add(d);break t}else{if(!(e&1)){Xc(s,c,e),$d();break t}d=Error(tt(426))}}else if(Qt&&a.mode&1){var T=qc(l);if(T!==null){!(T.flags&65536)&&(T.flags|=256),Jc(T,l,a,s,e),vd(so(d,a));break t}}s=d=so(d,a),le!==4&&(le=2),Yo===null?Yo=[s]:Yo.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var b=_p(s,d,e);Gc(s,b);break t;case 1:a=d;var u=s.type,h=s.stateNode;if(!(s.flags&128)&&(typeof u.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Kr===null||!Kr.has(h)))){s.flags|=65536,e&=-e,s.lanes|=e;var I=Pp(s,a,e);Gc(s,I);break t}}s=s.return}while(s!==null)}ob(n)}catch(v){e=v,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(!0)}function rb(){var t=Rs.current;return Rs.current=Bs,t===null?Bs:t}function $d(){(le===0||le===3||le===2)&&(le=4),pe===null||!(vn&268435455)&&!(Ks&268435455)||$r(pe,fe)}function Fs(t,e){var n=Lt;Lt|=2;var o=rb();(pe!==t||fe!==e)&&(vr=null,mn(t,e));do try{lh();break}catch(i){eb(t,i)}while(!0);if(kd(),Lt=n,Rs.current=o,ie!==null)throw Error(tt(261));return pe=null,fe=0,le}function lh(){for(;ie!==null;)nb(ie)}function ah(){for(;ie!==null&&!Dm();)nb(ie)}function nb(t){var e=sb(t.alternate,t,_e);t.memoizedProps=t.pendingProps,e===null?ob(t):ie=e,Md.current=null}function ob(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=eh(n,e),n!==null){n.flags&=32767,ie=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{le=6,ie=null;return}}else if(n=th(n,e,_e),n!==null){ie=n;return}if(e=e.sibling,e!==null){ie=e;return}ie=e=t}while(e!==null);le===0&&(le=5)}function dn(t,e,n){var o=Ot,i=qe.transition;try{qe.transition=null,Ot=1,dh(t,e,n,o)}finally{qe.transition=i,Ot=o}return null}function dh(t,e,n,o){do to();while(Hr!==null);if(Lt&6)throw Error(tt(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(tt(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Om(t,s),t===pe&&(ie=pe=null,fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_i||(_i=!0,lb(ms,function(){return to(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=qe.transition,qe.transition=null;var l=Ot;Ot=1;var a=Lt;Lt|=4,Md.current=null,nh(t,n),Jp(n,t),Ef(pa),hs=!!ua,pa=ua=null,t.current=n,oh(n),Am(),Lt=a,Ot=l,qe.transition=s}else t.current=n;if(_i&&(_i=!1,Hr=t,As=i),s=t.pendingLanes,s===0&&(Kr=null),Wm(n.stateNode),Le(t,ne()),e!==null)for(o=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],o(i.value,{componentStack:i.stack,digest:i.digest});if(Ds)throw Ds=!1,t=Aa,Aa=null,t;return As&1&&t.tag!==0&&to(),s=t.pendingLanes,s&1?t===Fa?Vo++:(Vo=0,Fa=t):Vo=0,rn(),null}function to(){if(Hr!==null){var t=_u(As),e=qe.transition,n=Ot;try{if(qe.transition=null,Ot=16>t?16:t,Hr===null)var o=!1;else{if(t=Hr,Hr=null,As=0,Lt&6)throw Error(tt(331));var i=Lt;for(Lt|=4,mt=t.current;mt!==null;){var s=mt,l=s.child;if(mt.flags&16){var a=s.deletions;if(a!==null){for(var d=0;d<a.length;d++){var c=a[d];for(mt=c;mt!==null;){var p=mt;switch(p.tag){case 0:case 11:case 15:Uo(8,p,s)}var y=p.child;if(y!==null)y.return=p,mt=y;else for(;mt!==null;){p=mt;var m=p.sibling,j=p.return;if(Kp(p),p===c){mt=null;break}if(m!==null){m.return=j,mt=m;break}mt=j}}}var x=s.alternate;if(x!==null){var k=x.child;if(k!==null){x.child=null;do{var T=k.sibling;k.sibling=null,k=T}while(k!==null)}}mt=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,mt=l;else t:for(;mt!==null;){if(s=mt,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Uo(9,s,s.return)}var b=s.sibling;if(b!==null){b.return=s.return,mt=b;break t}mt=s.return}}var u=t.current;for(mt=u;mt!==null;){l=mt;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,mt=h;else t:for(l=u;mt!==null;){if(a=mt,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Qs(9,a)}}catch(v){re(a,a.return,v)}if(a===l){mt=null;break t}var I=a.sibling;if(I!==null){I.return=a.return,mt=I;break t}mt=a.return}}if(Lt=i,rn(),pr&&typeof pr.onPostCommitFiberRoot=="function")try{pr.onPostCommitFiberRoot($s,t)}catch{}o=!0}return o}finally{Ot=n,qe.transition=e}}return!1}function gg(t,e,n){e=so(n,e),e=_p(t,e,1),t=Qr(t,e,1),e=Te(),t!==null&&(mi(t,1,e),Le(t,e))}function re(t,e,n){if(t.tag===3)gg(t,t,n);else for(;e!==null;){if(e.tag===3){gg(e,t,n);break}else if(e.tag===1){var o=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Kr===null||!Kr.has(o))){t=so(n,t),t=Pp(e,t,1),e=Qr(e,t,1),t=Te(),e!==null&&(mi(e,1,t),Le(e,t));break}}e=e.return}}function ch(t,e,n){var o=t.pingCache;o!==null&&o.delete(e),e=Te(),t.pingedLanes|=t.suspendedLanes&n,pe===t&&(fe&n)===n&&(le===4||le===3&&(fe&130023424)===fe&&500>ne()-Ld?mn(t,0):Wd|=n),Le(t,e)}function ib(t,e){e===0&&(t.mode&1?(e=Ti,Ti<<=1,!(Ti&130023424)&&(Ti=4194304)):e=1);var n=Te();t=Er(t,e),t!==null&&(mi(t,e,n),Le(t,n))}function gh(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ib(t,n)}function uh(t,e){var n=0;switch(t.tag){case 13:var o=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:o=t.stateNode;break;default:throw Error(tt(314))}o!==null&&o.delete(e),ib(t,n)}var sb;sb=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Me.current)Fe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Fe=!1,Zf(t,e,n);Fe=!!(t.flags&131072)}else Fe=!1,Qt&&e.flags&1048576&&cp(e,Ss,e.index);switch(e.lanes=0,e.tag){case 2:var o=e.type;is(t,e),t=e.pendingProps;var i=ro(e,ke.current);Zn(e,n),i=Bd(null,e,o,t,i,n);var s=Rd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,We(o)?(s=!0,ks(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Cd(e),i.updater=Vs,e.stateNode=i,i._reactInternals=e,ka(e,o,t,n),e=Ca(null,e,o,!0,s,n)):(e.tag=0,Qt&&s&&yd(e),ze(null,e,i,n),e=e.child),e;case 16:o=e.elementType;t:{switch(is(t,e),t=e.pendingProps,i=o._init,o=i(o._payload),e.type=o,i=e.tag=bh(o),t=rr(o,t),i){case 0:e=Sa(null,e,o,t,n);break t;case 1:e=eg(null,e,o,t,n);break t;case 11:e=Zc(null,e,o,t,n);break t;case 14:e=tg(null,e,o,rr(o.type,t),n);break t}throw Error(tt(306,o,""))}return e;case 0:return o=e.type,i=e.pendingProps,i=e.elementType===o?i:rr(o,i),Sa(t,e,o,i,n);case 1:return o=e.type,i=e.pendingProps,i=e.elementType===o?i:rr(o,i),eg(t,e,o,i,n);case 3:t:{if(Hp(e),t===null)throw Error(tt(387));o=e.pendingProps,s=e.memoizedState,i=s.element,fp(t,e),zs(e,o,null,n);var l=e.memoizedState;if(o=l.element,s.isDehydrated)if(s={element:o,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=so(Error(tt(423)),e),e=rg(t,e,o,n,i);break t}else if(o!==i){i=so(Error(tt(424)),e),e=rg(t,e,o,n,i);break t}else for($e=Vr(e.stateNode.containerInfo.firstChild),Ne=e,Qt=!0,or=null,n=bp(e,null,o,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(no(),o===i){e=Br(t,e,n);break t}ze(t,e,o,n)}e=e.child}return e;case 5:return hp(e),t===null&&xa(e),o=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,l=i.children,ba(o,i)?l=null:s!==null&&ba(o,s)&&(e.flags|=32),Op(t,e),ze(t,e,l,n),e.child;case 6:return t===null&&xa(e),null;case 13:return Gp(t,e,n);case 4:return Id(e,e.stateNode.containerInfo),o=e.pendingProps,t===null?e.child=oo(e,null,o,n):ze(t,e,o,n),e.child;case 11:return o=e.type,i=e.pendingProps,i=e.elementType===o?i:rr(o,i),Zc(t,e,o,i,n);case 7:return ze(t,e,e.pendingProps,n),e.child;case 8:return ze(t,e,e.pendingProps.children,n),e.child;case 12:return ze(t,e,e.pendingProps.children,n),e.child;case 10:t:{if(o=e.type._context,i=e.pendingProps,s=e.memoizedProps,l=i.value,Ut(Cs,o._currentValue),o._currentValue=l,s!==null)if(lr(s.value,l)){if(s.children===i.children&&!Me.current){e=Br(t,e,n);break t}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){l=s.child;for(var d=a.firstContext;d!==null;){if(d.context===o){if(s.tag===1){d=Ir(-1,n&-n),d.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?d.next=d:(d.next=p.next,p.next=d),c.pending=d}}s.lanes|=n,d=s.alternate,d!==null&&(d.lanes|=n),va(s.return,n,e),a.lanes|=n;break}d=d.next}}else if(s.tag===10)l=s.type===e.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(tt(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),va(l,n,e),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===e){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}ze(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,o=e.pendingProps.children,Zn(e,n),i=Je(i),o=o(i),e.flags|=1,ze(t,e,o,n),e.child;case 14:return o=e.type,i=rr(o,e.pendingProps),i=rr(o.type,i),tg(t,e,o,i,n);case 15:return $p(t,e,e.type,e.pendingProps,n);case 17:return o=e.type,i=e.pendingProps,i=e.elementType===o?i:rr(o,i),is(t,e),e.tag=1,We(o)?(t=!0,ks(e)):t=!1,Zn(e,n),Lp(e,o,i),ka(e,o,i,n),Ca(null,e,o,!0,t,n);case 19:return Up(t,e,n);case 22:return Np(t,e,n)}throw Error(tt(156,e.tag))};function lb(t,e){return Fu(t,e)}function ph(t,e,n,o){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xe(t,e,n,o){return new ph(t,e,n,o)}function Nd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function bh(t){if(typeof t=="function")return Nd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sd)return 11;if(t===ld)return 14}return 2}function qr(t,e){var n=t.alternate;return n===null?(n=Xe(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function as(t,e,n,o,i,s){var l=2;if(o=t,typeof t=="function")Nd(t)&&(l=1);else if(typeof t=="string")l=5;else t:switch(t){case _n:return fn(n.children,i,s,e);case id:l=8,i|=8;break;case Yl:return t=Xe(12,n,e,i|2),t.elementType=Yl,t.lanes=s,t;case Vl:return t=Xe(13,n,e,i),t.elementType=Vl,t.lanes=s,t;case Ql:return t=Xe(19,n,e,i),t.elementType=Ql,t.lanes=s,t;case hu:return Xs(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case mu:l=10;break t;case fu:l=9;break t;case sd:l=11;break t;case ld:l=14;break t;case Lr:l=16,o=null;break t}throw Error(tt(130,t==null?t:typeof t,""))}return e=Xe(l,n,e,i),e.elementType=t,e.type=o,e.lanes=s,e}function fn(t,e,n,o){return t=Xe(7,t,o,e),t.lanes=n,t}function Xs(t,e,n,o){return t=Xe(22,t,o,e),t.elementType=hu,t.lanes=n,t.stateNode={isHidden:!1},t}function El(t,e,n){return t=Xe(6,t,null,e),t.lanes=n,t}function Bl(t,e,n){return e=Xe(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function mh(t,e,n,o,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cl(0),this.expirationTimes=cl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cl(0),this.identifierPrefix=o,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Od(t,e,n,o,i,s,l,a,d){return t=new mh(t,e,n,a,d),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xe(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cd(s),t}function fh(t,e,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ln,key:o==null?null:""+o,children:t,containerInfo:e,implementation:n}}function ab(t){if(!t)return Zr;t=t._reactInternals;t:{if(Sn(t)!==t||t.tag!==1)throw Error(tt(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break t;case 1:if(We(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break t}}e=e.return}while(e!==null);throw Error(tt(171))}if(t.tag===1){var n=t.type;if(We(n))return ap(t,n,e)}return e}function db(t,e,n,o,i,s,l,a,d){return t=Od(n,o,!0,t,i,s,l,a,d),t.context=ab(null),n=t.current,o=Te(),i=Xr(n),s=Ir(o,i),s.callback=e??null,Qr(n,s,i),t.current.lanes=i,mi(t,i,o),Le(t,o),t}function qs(t,e,n,o){var i=e.current,s=Te(),l=Xr(i);return n=ab(n),e.context===null?e.context=n:e.pendingContext=n,e=Ir(s,l),e.payload={element:t},o=o===void 0?null:o,o!==null&&(e.callback=o),t=Qr(i,e,l),t!==null&&(sr(t,i,l,s),rs(t,i,l)),l}function Ms(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ug(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Hd(t,e){ug(t,e),(t=t.alternate)&&ug(t,e)}function hh(){return null}var cb=typeof reportError=="function"?reportError:function(t){console.error(t)};function Gd(t){this._internalRoot=t}Js.prototype.render=Gd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(tt(409));qs(t,e,null,null)};Js.prototype.unmount=Gd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;wn(function(){qs(null,t,null,null)}),e[Tr]=null}};function Js(t){this._internalRoot=t}Js.prototype.unstable_scheduleHydration=function(t){if(t){var e=Nu();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Pr.length&&e!==0&&e<Pr[n].priority;n++);Pr.splice(n,0,t),n===0&&Hu(t)}};function Ud(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zs(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function pg(){}function yh(t,e,n,o,i){if(i){if(typeof o=="function"){var s=o;o=function(){var c=Ms(l);s.call(c)}}var l=db(e,o,t,0,null,!1,!1,"",pg);return t._reactRootContainer=l,t[Tr]=l.current,oi(t.nodeType===8?t.parentNode:t),wn(),l}for(;i=t.lastChild;)t.removeChild(i);if(typeof o=="function"){var a=o;o=function(){var c=Ms(d);a.call(c)}}var d=Od(t,0,!1,null,null,!1,!1,"",pg);return t._reactRootContainer=d,t[Tr]=d.current,oi(t.nodeType===8?t.parentNode:t),wn(function(){qs(e,d,n,o)}),d}function tl(t,e,n,o,i){var s=n._reactRootContainer;if(s){var l=s;if(typeof i=="function"){var a=i;i=function(){var d=Ms(l);a.call(d)}}qs(e,l,t,i)}else l=yh(n,e,t,i,o);return Ms(l)}Pu=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ao(e.pendingLanes);n!==0&&(cd(e,n|1),Le(e,ne()),!(Lt&6)&&(lo=ne()+500,rn()))}break;case 13:wn(function(){var o=Er(t,1);if(o!==null){var i=Te();sr(o,t,1,i)}}),Hd(t,1)}};gd=function(t){if(t.tag===13){var e=Er(t,134217728);if(e!==null){var n=Te();sr(e,t,134217728,n)}Hd(t,134217728)}};$u=function(t){if(t.tag===13){var e=Xr(t),n=Er(t,e);if(n!==null){var o=Te();sr(n,t,e,o)}Hd(t,e)}};Nu=function(){return Ot};Ou=function(t,e){var n=Ot;try{return Ot=t,e()}finally{Ot=n}};oa=function(t,e,n){switch(e){case"input":if(ql(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var o=n[e];if(o!==t&&o.form===t.form){var i=Gs(o);if(!i)throw Error(tt(90));xu(o),ql(o,i)}}}break;case"textarea":wu(t,n);break;case"select":e=n.value,e!=null&&Kn(t,!!n.multiple,e,!1)}};Tu=_d;Eu=wn;var xh={usingClientEntryPoint:!1,Events:[hi,On,Gs,Iu,zu,_d]},Io={findFiberByHostInstance:gn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vh={bundleType:Io.bundleType,version:Io.version,rendererPackageName:Io.rendererPackageName,rendererConfig:Io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Du(t),t===null?null:t.stateNode},findFiberByHostInstance:Io.findFiberByHostInstance||hh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pi.isDisabled&&Pi.supportsFiber)try{$s=Pi.inject(vh),pr=Pi}catch{}}He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xh;He.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ud(e))throw Error(tt(200));return fh(t,e,null,n)};He.createRoot=function(t,e){if(!Ud(t))throw Error(tt(299));var n=!1,o="",i=cb;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Od(t,1,!1,null,null,n,!1,o,i),t[Tr]=e.current,oi(t.nodeType===8?t.parentNode:t),new Gd(e)};He.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(tt(188)):(t=Object.keys(t).join(","),Error(tt(268,t)));return t=Du(e),t=t===null?null:t.stateNode,t};He.flushSync=function(t){return wn(t)};He.hydrate=function(t,e,n){if(!Zs(e))throw Error(tt(200));return tl(null,t,e,!0,n)};He.hydrateRoot=function(t,e,n){if(!Ud(t))throw Error(tt(405));var o=n!=null&&n.hydratedSources||null,i=!1,s="",l=cb;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),e=db(e,null,t,1,n??null,i,!1,s,l),t[Tr]=e.current,oi(t),o)for(t=0;t<o.length;t++)n=o[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Js(e)};He.render=function(t,e,n){if(!Zs(e))throw Error(tt(200));return tl(null,t,e,!1,n)};He.unmountComponentAtNode=function(t){if(!Zs(t))throw Error(tt(40));return t._reactRootContainer?(wn(function(){tl(null,null,t,!1,function(){t._reactRootContainer=null,t[Tr]=null})}),!0):!1};He.unstable_batchedUpdates=_d;He.unstable_renderSubtreeIntoContainer=function(t,e,n,o){if(!Zs(n))throw Error(tt(200));if(t==null||t._reactInternals===void 0)throw Error(tt(38));return tl(t,e,n,!1,o)};He.version="18.3.1-next-f1338f8080-20240426";function gb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gb)}catch(t){console.error(t)}}gb(),gu.exports=He;var wh=gu.exports,ub,bg=wh;ub=bg.createRoot,bg.hydrateRoot;/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),pb=(...t)=>t.filter((e,n,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=g.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:o,className:i="",children:s,iconNode:l,...a},d)=>g.createElement("svg",{ref:d,...jh,width:e,height:e,stroke:t,strokeWidth:o?Number(n)*24/Number(e):n,className:pb("lucide",i),...a},[...l.map(([c,p])=>g.createElement(c,p)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=(t,e)=>{const n=g.forwardRef(({className:o,...i},s)=>g.createElement(Sh,{ref:s,iconNode:e,className:pb(`lucide-${kh(t)}`,o),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=ct("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=ct("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=ct("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=ct("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=ct("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=ct("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=ct("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=ct("CalendarPlus",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=ct("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=ct("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=ct("ChartLine",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=ct("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xi=ct("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=ct("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=ct("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=ct("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=ct("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=ct("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=ct("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pa=ct("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ws=ct("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=ct("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=ct("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=ct("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=ct("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=ct("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=ct("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=ct("HeartPulse",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=ct("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ls=ct("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=ct("ImagePlus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=ct("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=ct("Images",[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18",key:"nf6bnh"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2",key:"12espp"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=ct("IndianRupee",[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=ct("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=ct("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=ct("LayoutList",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=ct("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=ct("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=ct("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=ct("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=ct("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=ct("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=ct("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=ct("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=ct("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=ct("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=ct("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=ct("PanelLeftOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=ct("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=ct("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=ct("PiggyBank",[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z",key:"1ivx2i"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h.01",key:"xkw8gn"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=ct("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=ct("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=ct("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=ct("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=ct("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=ct("Scissors",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=ct("ScrollText",[["path",{d:"M15 12h-5",key:"r7krc0"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cb=ct("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=ct("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=ct("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=ct("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=ct("Sunrise",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=ct("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=ct("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=ct("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=ct("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=ct("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=ct("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=ct("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=ct("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=ct("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=ct("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=ct("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),Xd="anvil_token",qd=()=>localStorage.getItem(Xd),sy=t=>localStorage.setItem(Xd,t),Oa=()=>localStorage.removeItem(Xd),K=async(t,e,n)=>{const o={};n!==void 0&&(o["Content-Type"]="application/json");const i=qd();i&&(o.Authorization=`Bearer ${i}`);const s=await fetch(`/api${e}`,{method:t,headers:o,body:n!==void 0?JSON.stringify(n):void 0});if(s.status===401)throw Oa(),window.dispatchEvent(new Event("anvil-unauthorized")),new Error("Not authenticated");if(s.status===204)return null;if(!s.ok){const l=await s.text();let a=l;try{a=JSON.parse(l).detail||l}catch{}throw new Error(a||`HTTP ${s.status}`)}return s.json()},O={register:t=>K("POST","/auth/register",t),login:t=>K("POST","/auth/login",t),me:()=>K("GET","/auth/me"),getGcalStatus:()=>K("GET","/auth/google/status"),connectGoogle:()=>{window.location.href=`/api/auth/google?token=${encodeURIComponent(qd()||"")}`},disconnectGoogle:()=>K("DELETE","/auth/google"),getPillars:()=>K("GET","/pillars"),getFocus:()=>K("GET","/focus"),createFocus:t=>K("POST","/focus",t),deleteFocus:t=>K("DELETE",`/focus/${t}`),addScreenTime:(t,e)=>K("POST","/screentime",{screen:t,seconds:e}),getScreenTime:()=>K("GET","/screentime"),getPayouts:()=>K("GET","/rewards/payouts"),createPayout:t=>K("POST","/rewards/payouts",t),deletePayout:t=>K("DELETE",`/rewards/payouts/${t}`),getRewardRates:()=>K("GET","/rewards/rates"),setRewardRate:t=>K("POST","/rewards/rates",t),getMedia:()=>K("GET","/media"),createMedia:t=>K("POST","/media",t),updateMedia:(t,e)=>K("PUT",`/media/${t}`,e),deleteMedia:t=>K("DELETE",`/media/${t}`),restoreMedia:t=>K("POST",`/media/${t}/restore`),getDecks:()=>K("GET","/spiritual/decks"),createDeck:t=>K("POST","/spiritual/decks",t),deleteDeck:t=>K("DELETE",`/spiritual/decks/${t}`),getGoldenGoals:()=>K("GET","/golden/goals"),getGoldenGoal:t=>K("GET",`/golden/goals/${t}`),createGolden:t=>K("POST","/golden/goals",t),updateGolden:(t,e)=>K("PUT",`/golden/goals/${t}`,e),achieveGolden:t=>K("POST",`/golden/goals/${t}/achieve`),unachieveGolden:t=>K("POST",`/golden/goals/${t}/unachieve`),upsertGoldenEntry:(t,e)=>K("PUT",`/golden/goals/${t}/entry`,e),deleteGolden:t=>K("DELETE",`/golden/goals/${t}`),restoreGolden:t=>K("POST",`/golden/goals/${t}/restore`),getKickstart:()=>K("GET","/kickstart/videos"),createKickstart:t=>K("POST","/kickstart/videos",t),updateKickstart:(t,e)=>K("PUT",`/kickstart/videos/${t}`,e),deleteKickstart:t=>K("DELETE",`/kickstart/videos/${t}`),restoreKickstart:t=>K("POST",`/kickstart/videos/${t}/restore`),getTxns:()=>K("GET","/finance/txns"),createTxn:t=>K("POST","/finance/txns",t),updateTxn:(t,e)=>K("PUT",`/finance/txns/${t}`,e),deleteTxn:t=>K("DELETE",`/finance/txns/${t}`),restoreTxn:t=>K("POST",`/finance/txns/${t}/restore`),getSetting:t=>K("GET",`/settings/${t}`),setSetting:(t,e)=>K("PUT",`/settings/${t}`,{value:e}),getTasks:()=>K("GET","/tasks"),createTask:t=>K("POST","/tasks",t),updateTask:(t,e)=>K("PUT",`/tasks/${t}`,e),deleteTask:t=>K("DELETE",`/tasks/${t}`),restoreTask:t=>K("POST",`/tasks/${t}/restore`),scheduleTask:t=>K("PUT",`/tasks/${t}/schedule`),getGoals:t=>K("GET",`/goals${t?`?pillar=${encodeURIComponent(t)}`:""}`),createGoal:t=>K("POST","/goals",t),updateGoal:(t,e)=>K("PUT",`/goals/${t}`,e),deleteGoal:t=>K("DELETE",`/goals/${t}`),restoreGoal:t=>K("POST",`/goals/${t}/restore`),getHabits:()=>K("GET","/habits"),createHabit:t=>K("POST","/habits",t),updateHabit:(t,e)=>K("PUT",`/habits/${t}`,e),deleteHabit:t=>K("DELETE",`/habits/${t}`),restoreHabit:t=>K("POST",`/habits/${t}/restore`),toggleHabitLog:(t,e)=>K("POST",`/habits/${t}/log/${e}`),setHabitLogNote:(t,e,n)=>K("PUT",`/habits/${t}/log/${e}/note`,{note:n}),setHabitLogCount:(t,e,n,o)=>K("PUT",`/habits/${t}/log/${e}/count`,{count:n,note:o}),clearHabitLog:(t,e)=>K("DELETE",`/habits/${t}/log/${e}`),getHabitsYearly:t=>K("GET",`/habits/yearly/${t}`),getJournalEntry:t=>K("GET",`/journal/${t}`),getJournalHistory:(t,e)=>K("GET",`/journal/history/${t}/${e}`),updateJournalMood:(t,e)=>K("PUT",`/journal/${t}`,{mood:e}),addJournalBullet:(t,e,n)=>K("POST",`/journal/${t}/bullets`,{section:e,text:n}),deleteJournalBullet:t=>K("DELETE",`/journal/bullets/${t}`),getSkills:()=>K("GET","/skills"),createSkill:t=>K("POST","/skills",t),updateSkill:(t,e)=>K("PUT",`/skills/${t}`,e),deleteSkill:t=>K("DELETE",`/skills/${t}`),restoreSkill:t=>K("POST",`/skills/${t}/restore`),addSkillNote:(t,e,n,o=null)=>K("POST",`/skills/${t}/notes`,{stage:e,text:n,grp:o}),setSkillGroups:(t,e)=>K("PUT",`/skills/${t}/groups`,{groups:e}),deleteSkillNote:t=>K("DELETE",`/skill-notes/${t}`),updateSkillNote:(t,e)=>K("PUT",`/skill-notes/${t}`,{text:e}),toggleSkillNote:t=>K("PUT",`/skill-notes/${t}/toggle`),completeSkillStage:(t,e)=>K("POST",`/skills/${t}/complete-stage`,{stage:e}),getScriptures:()=>K("GET","/scriptures"),createScripture:t=>K("POST","/scriptures",t),deleteScripture:t=>K("DELETE",`/scriptures/${t}`),restoreScripture:t=>K("POST",`/scriptures/${t}/restore`),addChapter:(t,e)=>K("POST",`/scriptures/${t}/chapters`,e),updateChapter:(t,e)=>K("PUT",`/chapters/${t}`,e),deleteChapter:t=>K("DELETE",`/chapters/${t}`),restoreChapter:t=>K("POST",`/chapters/${t}/restore`),addInsight:(t,e)=>K("POST",`/chapters/${t}/insights`,{text:e}),deleteInsight:t=>K("DELETE",`/insights/${t}`),getTopics:()=>K("GET","/revision/topics"),createTopic:t=>K("POST","/revision/topics",t),updateTopic:(t,e)=>K("PUT",`/revision/topics/${t}`,e),deleteTopic:t=>K("DELETE",`/revision/topics/${t}`),restoreTopic:t=>K("POST",`/revision/topics/${t}/restore`),getDueToday:()=>K("GET","/revision/due-today"),getCalendar:(t,e)=>K("GET",`/revision/calendar/${t}/${e}`),toggleReviewDone:t=>K("PUT",`/revision/reviews/${t}/done`),getAffirmations:()=>K("GET","/affirmations"),createAffirmation:t=>K("POST","/affirmations",t),updateAffirmation:(t,e)=>K("PUT",`/affirmations/${t}`,e),deleteAffirmation:t=>K("DELETE",`/affirmations/${t}`),restoreAffirmation:t=>K("POST",`/affirmations/${t}/restore`),getAchievements:()=>K("GET","/achievements"),createAchievement:t=>K("POST","/achievements",t),updateAchievement:(t,e)=>K("PUT",`/achievements/${t}`,e),deleteAchievement:t=>K("DELETE",`/achievements/${t}`),restoreAchievement:t=>K("POST",`/achievements/${t}/restore`)},ly=7e3;function Ar(t,e,n){const[o,i]=g.useState([]),s=g.useRef({}),l=g.useCallback(async(c,p="Item")=>{await t(c),n();const y=`${c}-${Date.now()}`;i(m=>[...m,{id:y,itemId:c,label:p}]),s.current[y]=setTimeout(()=>{i(m=>m.filter(j=>j.id!==y)),delete s.current[y]},ly)},[t,n]),a=g.useCallback(async c=>{const p=o.find(y=>y.id===c);p&&(clearTimeout(s.current[c]),delete s.current[c],i(y=>y.filter(m=>m.id!==c)),await e(p.itemId),n())},[o,e,n]),d=g.useCallback(c=>{clearTimeout(s.current[c]),delete s.current[c],i(p=>p.filter(y=>y.id!==c))},[]);return{deleteItem:l,toasts:o,handleUndo:a,handleDismiss:d}}function Fr({toasts:t,onUndo:e,onDismiss:n}){return r.jsx("div",{style:Wn.container,children:t.map(o=>r.jsx(ay,{toast:o,onUndo:e,onDismiss:n},o.id))})}function ay({toast:t,onUndo:e,onDismiss:n}){const[o,i]=g.useState(100);return g.useEffect(()=>{const s=Date.now(),l=7e3,a=setInterval(()=>{const d=Date.now()-s,c=Math.max(0,100-d/l*100);i(c),c===0&&clearInterval(a)},50);return()=>clearInterval(a)},[]),r.jsxs("div",{style:Wn.toast,children:[r.jsx("div",{style:{...Wn.bar,width:`${o}%`}}),r.jsxs("span",{style:Wn.msg,children:[t.label," deleted"]}),r.jsx("button",{style:Wn.undoBtn,onClick:()=>e(t.id),children:"Undo"}),r.jsx("button",{style:Wn.closeBtn,onClick:()=>n(t.id),children:"×"})]})}const Wn={container:{position:"fixed",bottom:24,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",gap:8,zIndex:999,pointerEvents:"none"},toast:{position:"relative",display:"flex",alignItems:"center",gap:12,background:"var(--accent-strong)",color:"#fff",borderRadius:10,padding:"12px 16px",fontSize:13.5,fontFamily:"'Inter', system-ui, sans-serif",boxShadow:"0 4px 20px rgba(0,0,0,0.25)",minWidth:260,overflow:"hidden",pointerEvents:"all"},bar:{position:"absolute",bottom:0,left:0,height:3,background:"#4C9A6B",transition:"width 0.05s linear",borderRadius:"0 0 0 10px"},msg:{flex:1,fontWeight:500},undoBtn:{border:"1px solid rgba(255,255,255,0.3)",background:"none",color:"#4C9A6B",fontWeight:700,fontSize:13,padding:"4px 10px",borderRadius:6,cursor:"pointer",fontFamily:"inherit"},closeBtn:{border:"none",background:"none",color:"rgba(255,255,255,0.5)",cursor:"pointer",fontSize:18,lineHeight:1,padding:"0 2px"}},hr={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},hg=[{id:"Q1",symbol:"™",title:"Do Now",sub:"Important · Urgent",accent:"#C2536B"},{id:"Q2",symbol:"©",title:"Schedule",sub:"Important · Not Urgent",accent:"#3A7CA5"},{id:"Q3",symbol:"®",title:"Delegate",sub:"Not Important · Urgent",accent:"#C9A227"},{id:"Q4",symbol:"•",title:"Drop",sub:"Not Important · Not Urgent",accent:"#8A8780"}];function Tb(){return new Date().toLocaleDateString("en-CA",{timeZone:"Asia/Kolkata"})}function Eb(){const t=new Date(new Date().toLocaleString("en-US",{timeZone:"Asia/Kolkata"})),n=t.getMinutes()<30?30:0,o=n===0?t.getHours()+1:t.getHours();return`${String(o%24).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function yg(t,e){const[n,o]=t.split(":").map(Number),i=n*60+o+e;return`${String(Math.floor(i/60)%24).padStart(2,"0")}:${String(i%60).padStart(2,"0")}`}function dy(t){return t?new Date(t).toLocaleString("en-IN",{timeZone:"Asia/Kolkata",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit",hour12:!0}):""}const Ni=()=>({title:"",pillar:"Financial",est:30,date:Tb(),startTime:Eb()});function cy(){const[t,e]=g.useState([]),[n,o]=g.useState([]),[i,s]=g.useState("All"),[l,a]=g.useState(null),[d,c]=g.useState(null),[p,y]=g.useState(Ni()),[m,j]=g.useState(null),[x,k]=g.useState(Ni()),[T,b]=g.useState({connected:!1,configured:!1}),u=g.useCallback(()=>O.getTasks().then(e).catch(console.error),[]);g.useEffect(()=>{u(),O.getGcalStatus().then(b).catch(()=>{}),O.getGoals().then(G=>o(G.filter(ft=>ft.horizon==="Weekly"))).catch(()=>{})},[u]);const h=Object.keys(hr),I=n.filter(G=>i==="All"||G.pillar===i),v=n.find(G=>G.id===l)||null,C=t.filter(G=>l!=null?G.goal_id===l:i!=="All"?G.pillar===i:!0),L=G=>{s(G),a(null),c(null),y(ft=>({...ft,pillar:G==="All"?"Financial":G}))},A=G=>{a(G),c(null);const ft=n.find(Z=>Z.id===G);ft&&y(Z=>({...Z,pillar:ft.pillar}))},{deleteItem:E,toasts:M,handleUndo:S,handleDismiss:D}=Ar(O.deleteTask,O.restoreTask,u),w=G=>C.filter(ft=>ft.quadrant===G),Y=G=>w(G).reduce((ft,Z)=>ft+Z.time_estimate_min,0),lt=G=>G>=60?`${Math.floor(G/60)}h${G%60?` ${G%60}m`:""}`:`${G}m`,rt=G=>{var Z;return`${((Z=hg.find(et=>et.id===G.quadrant))==null?void 0:Z.symbol)??""} ${G.title}`},ht=async G=>{if(!p.title.trim())return;const ft=p.date&&p.startTime?`${p.date}T${p.startTime}:00`:null;await O.createTask({pillar:v?v.pillar:p.pillar,title:p.title,quadrant:G,time_estimate_min:Number(p.est)||30,start_datetime:ft,goal_id:l??null}),y(Ni()),c(null),u()},U=(G,ft)=>E(G,ft),H=G=>{const ft=G.start_datetime?G.start_datetime.split("T"):[];j(G.id),c(null),k({title:G.title,pillar:G.pillar,est:G.time_estimate_min,date:ft[0]||Tb(),startTime:(ft[1]||"").slice(0,5)||Eb()})},J=async G=>{if(!x.title.trim())return;const ft=x.date&&x.startTime?`${x.date}T${x.startTime}:00`:null;await O.updateTask(G.id,{title:x.title.trim(),pillar:x.pillar,time_estimate_min:Number(x.est)||30,start_datetime:ft}),j(null),u()},P=g.useRef(null),F=g.useRef(null),[f,V]=g.useState(null),xt=(G,ft)=>{var et;const Z=document.elementFromPoint(G,ft);return Z&&Z.closest&&((et=Z.closest("[data-quad]"))==null?void 0:et.getAttribute("data-quad"))||null};g.useEffect(()=>{const G=Z=>{const et=P.current;if(!et)return;const X=Math.hypot(Z.clientX-et.startX,Z.clientY-et.startY);if(!et.active){if(et.pointerType!=="mouse"){X>12&&(clearTimeout(F.current),P.current=null);return}if(X<6)return;et.active=!0,document.body.style.userSelect="none"}Z.cancelable&&Z.preventDefault(),et.overQ=xt(Z.clientX,Z.clientY),V({id:et.task.id,title:et.task.title,x:Z.clientX,y:Z.clientY,overQ:et.overQ})},ft=()=>{clearTimeout(F.current);const Z=P.current;P.current=null,document.body.style.userSelect="",document.body.style.touchAction="",V(null),Z&&Z.active&&Z.overQ&&Z.overQ!==Z.task.quadrant&&O.updateTask(Z.task.id,{quadrant:Z.overQ}).then(u).catch(()=>{})};return window.addEventListener("pointermove",G,{passive:!1}),window.addEventListener("pointerup",ft),window.addEventListener("pointercancel",ft),()=>{window.removeEventListener("pointermove",G),window.removeEventListener("pointerup",ft),window.removeEventListener("pointercancel",ft)}},[u]);const at=(G,ft)=>{G.pointerType==="mouse"&&G.button!==0||(P.current={task:ft,startX:G.clientX,startY:G.clientY,active:!1,pointerType:G.pointerType,overQ:null},G.pointerType!=="mouse"&&(F.current=setTimeout(()=>{const Z=P.current;Z&&(Z.active=!0,document.body.style.touchAction="none",V({id:Z.task.id,title:Z.task.title,x:Z.startX,y:Z.startY,overQ:Z.task.quadrant}))},280)))};return r.jsxs("div",{style:nt.page,children:[r.jsxs("div",{style:nt.head,children:[r.jsxs("div",{children:[r.jsx("div",{style:nt.eyebrow,children:"Anvil · Weekly Routing"}),r.jsx("h1",{style:nt.h1,children:"Weekly Routing"})]}),r.jsxs("div",{style:nt.headRight,children:[r.jsx("div",{style:nt.legend,children:Object.entries(hr).map(([G,ft])=>r.jsxs("span",{style:nt.legendItem,children:[r.jsx("span",{style:{...nt.dot,background:ft.dot}}),G]},G))}),T.configured&&(T.connected?r.jsxs("button",{style:nt.gcalBadgeOn,title:"Disconnect Google Calendar",onClick:()=>O.disconnectGoogle().then(()=>b({...T,connected:!1})),children:[r.jsx($i,{size:13})," Google Calendar connected"]}):r.jsxs("button",{style:nt.gcalBadgeOff,onClick:()=>O.connectGoogle(),children:[r.jsx($i,{size:13})," Connect Google Calendar"]}))]})]}),r.jsx("div",{style:nt.filterBar,children:["All",...h].map(G=>{const ft=i===G,Z=hr[G];return r.jsxs("button",{onClick:()=>L(G),style:{...nt.pillChip,...ft?Z?{background:Z.dot,color:"#fff",borderColor:Z.dot}:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"}:{}},children:[Z&&r.jsx("span",{style:{...nt.dot,background:ft?"#fff":Z.dot}}),G==="All"?"All":G]},G)})}),r.jsxs("div",{style:nt.goalBar,children:[r.jsx("button",{onClick:()=>a(null),style:{...nt.goalChip,...l==null?nt.goalChipOn:{}},children:"All goals"}),I.map(G=>{var et;const ft=((et=hr[G.pillar])==null?void 0:et.dot)||"#9A968C",Z=l===G.id;return r.jsxs("button",{onClick:()=>A(G.id),style:{...nt.goalChip,...Z?{background:ft,color:"#fff",borderColor:ft}:{}},title:G.title,children:[r.jsx("span",{style:{...nt.dot,background:Z?"#fff":ft}}),r.jsx("span",{style:nt.goalChipText,children:G.title})]},G.id)}),I.length===0&&r.jsxs("span",{style:nt.goalEmpty,children:["No weekly goals",i!=="All"?` for ${i}`:""," — create them in Goals."]})]}),r.jsx("div",{style:nt.grid,children:hg.map(G=>{var ft,Z;return r.jsxs("section",{"data-quad":G.id,style:{...nt.quad,borderTop:`3px solid ${G.accent}`,...f&&f.overQ===G.id&&f.overQ!==((ft=t.find(et=>et.id===f.id))==null?void 0:ft.quadrant)?{outline:`2px dashed ${G.accent}`,outlineOffset:2,background:"var(--hover)"}:{}},children:[r.jsxs("header",{style:nt.quadHead,children:[r.jsxs("div",{style:nt.quadTitleRow,children:[r.jsx("span",{style:{...nt.symbol,color:G.accent},children:G.symbol}),r.jsxs("div",{children:[r.jsx("div",{style:nt.quadTitle,children:G.title}),r.jsx("div",{style:nt.quadSub,children:G.sub})]})]}),r.jsx("span",{style:nt.quadTotal,children:lt(Y(G.id))})]}),r.jsxs("div",{style:nt.list,children:[w(G.id).map(et=>{const X=hr[et.pillar]||hr.Financial,gt=!!et.gcal_event_id;return m===et.id?r.jsxs("div",{style:nt.addBox,children:[r.jsx("input",{autoFocus:!0,placeholder:"Task title",value:x.title,onChange:Ct=>k({...x,title:Ct.target.value}),onKeyDown:Ct=>Ct.key==="Enter"&&J(et),style:nt.input}),r.jsxs("div",{style:nt.dateTimeRow,children:[r.jsxs("div",{style:nt.dateTimeGroup,children:[r.jsx("label",{style:nt.dtLabel,children:"Date"}),r.jsx("input",{type:"date",value:x.date,onChange:Ct=>k({...x,date:Ct.target.value}),style:nt.dtInput})]}),r.jsxs("div",{style:nt.dateTimeGroup,children:[r.jsx("label",{style:nt.dtLabel,children:"Start"}),r.jsx("input",{type:"time",value:x.startTime,onChange:Ct=>k({...x,startTime:Ct.target.value}),style:nt.dtInput})]}),r.jsxs("div",{style:nt.dateTimeGroup,children:[r.jsx("label",{style:nt.dtLabel,children:"End"}),r.jsx("div",{style:nt.dtEndValue,children:yg(x.startTime,Number(x.est)||30)})]})]}),r.jsxs("div",{style:nt.addRow,children:[r.jsx("select",{value:x.pillar,onChange:Ct=>k({...x,pillar:Ct.target.value}),style:nt.select,children:Object.keys(hr).map(Ct=>r.jsx("option",{children:Ct},Ct))}),r.jsx("input",{type:"number",value:x.est,onChange:Ct=>k({...x,est:Ct.target.value}),style:{...nt.input,width:60}}),r.jsx("span",{style:nt.minLabel,children:"min"}),r.jsx("button",{onClick:()=>J(et),style:nt.saveBtn,children:r.jsx(Rt,{size:14})}),r.jsx("button",{onClick:()=>j(null),style:nt.cancelBtn,children:r.jsx(zt,{size:14})})]})]},et.id):r.jsxs("div",{onPointerDown:Ct=>at(Ct,et),style:{...nt.card,background:X.soft,cursor:"grab",touchAction:"pan-y",...(f==null?void 0:f.id)===et.id?{opacity:.4}:{}},children:[r.jsx("span",{style:{...nt.cardBar,background:X.dot}}),r.jsxs("div",{style:nt.cardBody,children:[r.jsx("div",{style:nt.cardTitle,children:et.title}),et.start_datetime&&r.jsxs("div",{style:nt.eventTime,children:[r.jsx($i,{size:10}),dy(et.start_datetime),gt&&r.jsx("span",{style:nt.syncedDot,title:"Synced to Google Calendar"})]}),r.jsxs("div",{style:nt.cardMeta,children:[r.jsxs("span",{style:nt.metaPill,children:[r.jsx("span",{style:{...nt.dot,background:X.dot,width:7,height:7}}),et.pillar]}),r.jsxs("span",{style:nt.metaPill,children:[r.jsx(Bh,{size:11})," ",lt(et.time_estimate_min)]})]})]}),r.jsxs("div",{style:nt.cardActions,children:[gt&&r.jsx("span",{title:`On calendar as "${rt(et)}"`,style:nt.calDoneIcon,children:r.jsx(Rt,{size:14})}),r.jsx("button",{onClick:()=>H(et),onPointerDown:Ct=>Ct.stopPropagation(),style:nt.delBtn,title:"Edit",children:r.jsx(he,{size:12})}),r.jsx("button",{onClick:()=>U(et.id,et.title),onPointerDown:Ct=>Ct.stopPropagation(),style:nt.delBtn,children:r.jsx(zt,{size:13})})]})]},et.id)}),d===G.id?r.jsxs("div",{style:nt.addBox,children:[r.jsx("input",{autoFocus:!0,placeholder:"Task title",value:p.title,onChange:et=>y({...p,title:et.target.value}),onKeyDown:et=>et.key==="Enter"&&ht(G.id),style:nt.input}),r.jsxs("div",{style:nt.dateTimeRow,children:[r.jsxs("div",{style:nt.dateTimeGroup,children:[r.jsx("label",{style:nt.dtLabel,children:"Date"}),r.jsx("input",{type:"date",value:p.date,onChange:et=>y({...p,date:et.target.value}),style:nt.dtInput})]}),r.jsxs("div",{style:nt.dateTimeGroup,children:[r.jsx("label",{style:nt.dtLabel,children:"Start"}),r.jsx("input",{type:"time",value:p.startTime,onChange:et=>y({...p,startTime:et.target.value}),style:nt.dtInput})]}),r.jsxs("div",{style:nt.dateTimeGroup,children:[r.jsx("label",{style:nt.dtLabel,children:"End"}),r.jsx("div",{style:nt.dtEndValue,children:yg(p.startTime,Number(p.est)||30)})]})]}),r.jsxs("div",{style:nt.addRow,children:[v?r.jsxs("span",{style:nt.goalPillarTag,children:[r.jsx("span",{style:{...nt.dot,background:(Z=hr[v.pillar])==null?void 0:Z.dot}})," ",v.pillar]}):r.jsx("select",{value:p.pillar,onChange:et=>y({...p,pillar:et.target.value}),style:nt.select,children:Object.keys(hr).map(et=>r.jsx("option",{children:et},et))}),r.jsx("input",{type:"number",value:p.est,onChange:et=>y({...p,est:et.target.value}),style:{...nt.input,width:60}}),r.jsx("span",{style:nt.minLabel,children:"min"}),T.connected&&r.jsx("span",{style:nt.gcalHint,title:"Will sync to Google Calendar",children:r.jsx($i,{size:12})}),r.jsx("button",{onClick:()=>ht(G.id),style:nt.saveBtn,children:r.jsx(Rt,{size:14})}),r.jsx("button",{onClick:()=>{c(null),y(Ni())},style:nt.cancelBtn,children:r.jsx(zt,{size:14})})]})]}):r.jsxs("button",{onClick:()=>c(G.id),style:nt.addTrigger,children:[r.jsx(ae,{size:13})," Add task"]})]})]},G.id)})}),f&&r.jsx("div",{style:{...nt.dragClone,left:f.x+12,top:f.y+12},children:f.title}),r.jsx(Fr,{toasts:M,onUndo:S,onDismiss:D})]})}const nt={page:{fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:16,marginBottom:22},headRight:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:10},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces', Georgia, serif"},legend:{display:"flex",gap:14,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"var(--text-2)",fontWeight:500},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},gcalBadgeOn:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:500,color:"#4C9A6B",background:"rgba(76,154,107,0.10)",border:"1px solid rgba(76,154,107,0.3)",borderRadius:20,padding:"5px 12px",cursor:"pointer"},gcalBadgeOff:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:500,color:"var(--text-2)",background:"var(--surface)",border:"1px solid #DCDAD3",borderRadius:20,padding:"5px 12px",cursor:"pointer"},filterBar:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:10},pillChip:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},goalBar:{display:"flex",gap:7,flexWrap:"wrap",alignItems:"center",marginBottom:18,paddingBottom:14,borderBottom:"1px solid var(--border)"},goalChip:{display:"inline-flex",alignItems:"center",gap:6,maxWidth:220,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},goalChipOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},goalChipText:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},goalEmpty:{fontSize:12,color:"var(--text-3)",fontStyle:"italic"},goalPillarTag:{display:"inline-flex",alignItems:"center",gap:6,fontSize:12.5,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"7px 10px",borderRadius:6,flex:1},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:16},quad:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.06)"},quadHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14},quadTitleRow:{display:"flex",gap:10,alignItems:"center"},symbol:{fontSize:20,lineHeight:1},quadTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em"},quadSub:{fontSize:11,color:"var(--text-3)",marginTop:1,letterSpacing:"0.02em"},quadTotal:{fontSize:12,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"3px 9px",borderRadius:20},list:{display:"flex",flexDirection:"column",gap:8},card:{display:"flex",alignItems:"stretch",gap:10,borderRadius:9,padding:"10px 10px 10px 0",overflow:"hidden"},cardBar:{width:3,borderRadius:3,flexShrink:0},cardBody:{flex:1,minWidth:0},cardTitle:{fontSize:13.5,fontWeight:500,lineHeight:1.35,marginBottom:4},eventTime:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"#3A7CA5",fontWeight:500,marginBottom:5},syncedDot:{width:6,height:6,borderRadius:"50%",background:"#4C9A6B",display:"inline-block",marginLeft:2},cardMeta:{display:"flex",gap:8,flexWrap:"wrap"},metaPill:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"var(--text-2)",fontWeight:500},cardActions:{display:"flex",flexDirection:"column",gap:4,alignSelf:"center",flexShrink:0},calDoneIcon:{width:30,height:30,borderRadius:8,background:"#4C9A6B",color:"#fff",display:"grid",placeItems:"center"},delBtn:{width:30,height:30,borderRadius:8,border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center"},addTrigger:{display:"flex",alignItems:"center",gap:5,fontSize:12.5,color:"var(--text-3)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"8px 10px",cursor:"pointer",fontWeight:500,marginTop:2},addBox:{border:"1px solid var(--border)",borderRadius:9,padding:10,display:"flex",flexDirection:"column",gap:8},dateTimeRow:{display:"flex",gap:8,alignItems:"flex-end"},dateTimeGroup:{display:"flex",flexDirection:"column",gap:3,flex:1},dtLabel:{fontSize:10,fontWeight:600,color:"var(--text-3)",letterSpacing:"0.08em",textTransform:"uppercase"},dtInput:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},dtEndValue:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,color:"var(--text-2)",background:"var(--bg)"},addRow:{display:"flex",alignItems:"center",gap:6},input:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",flex:1,minWidth:0},select:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 8px",fontSize:12.5,fontFamily:"inherit",flex:1},minLabel:{fontSize:11,color:"var(--text-3)"},gcalHint:{color:"#3A7CA5",display:"grid",placeItems:"center"},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"},dragClone:{position:"fixed",zIndex:1e3,pointerEvents:"none",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:8,padding:"8px 12px",fontSize:13,fontWeight:600,color:"var(--text)",boxShadow:"0 8px 24px rgba(0,0,0,0.25)",maxWidth:220,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},Ve={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},zo=Object.keys(Ve),cs=["Yearly","Quarterly","Monthly","Weekly"],wr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],xg=[{label:"Q1 · Jan–Mar",startMonth:0},{label:"Q2 · Apr–Jun",startMonth:3},{label:"Q3 · Jul–Sep",startMonth:6},{label:"Q4 · Oct–Dec",startMonth:9}],gs=new Date().getFullYear(),To=Array.from({length:8},(t,e)=>gs-1+e);function gy(t=720){const[e,n]=g.useState(()=>window.innerWidth<t);return g.useEffect(()=>{const o=()=>n(window.innerWidth<t);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[t]),e}const Mo=864e5,ge=30,Qo=190,Rn=t=>new Date(t+"T00:00:00"),vg=t=>t.toLocaleDateString("en-US",{month:"short",day:"numeric"}),uy=[{key:"yearly",label:"Yearly",horizons:["Yearly"]},{key:"quarterly",label:"Quarterly",horizons:["Quarterly"]},{key:"mw",label:"Monthly & Weekly",horizons:["Monthly","Weekly"]}],wg={Yearly:"Yr",Quarterly:"Q",Monthly:"Mo",Weekly:"Wk"},py={Yearly:"Y",Quarterly:"Q",Monthly:"M",Weekly:"W"},kg={Yearly:0,Quarterly:1,Monthly:2,Weekly:3},Rl=t=>cs[Math.min(cs.indexOf(t)+1,cs.length-1)],Oi=t=>{if(!t||!t.start_date)return Array.from({length:12},(l,a)=>a);const e=new Date(t.start_date+"T00:00:00"),n=new Date(t.end_date+"T00:00:00"),o=e.getFullYear(),i=e.getMonth(),s=n.getFullYear()>o?11:n.getMonth();return Array.from({length:s-i+1},(l,a)=>i+a)},Eo=t=>new Date(t+"T00:00:00").getFullYear(),Bb=(t,e,n)=>{const o=(n-1)*7+1,i=Math.min(o+6,new Date(t,e+1,0).getDate()),s=String(e+1).padStart(2,"0");return{start_date:`${t}-${s}-${String(o).padStart(2,"0")}`,end_date:`${t}-${s}-${String(i).padStart(2,"0")}`}},pi=(t,e,n,o=1)=>{const i=e;switch(t){case"Yearly":return{start_date:`${i}-01-01`,end_date:`${i}-12-31`};case"Quarterly":{const s=Math.floor(n/3)*3,l=s+1,a=s+3,d=new Date(i,a,0).getDate();return{start_date:`${i}-${String(l).padStart(2,"0")}-01`,end_date:`${i}-${String(a).padStart(2,"0")}-${d}`}}case"Monthly":{const s=new Date(i,n+1,0).getDate();return{start_date:`${i}-${String(n+1).padStart(2,"0")}-01`,end_date:`${i}-${String(n+1).padStart(2,"0")}-${s}`}}case"Weekly":return Bb(i,n,o);default:return{start_date:`${i}-01-01`,end_date:`${i}-12-31`}}},Rb=(t,e)=>{const n=new Date(t+"T00:00:00");return n.setDate(n.getDate()+e),`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`},Ha=(t,e)=>Math.round((new Date(e+"T00:00:00")-new Date(t+"T00:00:00"))/Mo)+1,by=(t,e)=>new Date(t,e+1,0).getDate(),Ga=t=>{const e=new Date(t.start_date+"T00:00:00");if(t.horizon==="Monthly")return by(e.getFullYear(),e.getMonth());if(t.horizon==="Weekly"){const n=Math.min(Math.max(Math.ceil(e.getDate()/7),1),4),o=Bb(e.getFullYear(),e.getMonth(),n);return Ha(o.start_date,o.end_date)}return Ha(t.start_date,t.end_date)},jg=t=>Math.round(Ga(t)*1.5),my=t=>t.horizon==="Monthly"||t.horizon==="Weekly",fy=(t,e)=>{const n=e.getFullYear(),o=e.getMonth();return pi("Weekly",n,o,Math.min(Math.max(Math.ceil(e.getDate()/7),1),4))},hy=(t,e)=>{const n=new Date(t.start_date+"T00:00:00");if(t.horizon==="Yearly"){const o=new Date(t.end_date+"T00:00:00").getFullYear();return{start_date:`${n.getFullYear()+e}-01-01`,end_date:`${o+e}-12-31`}}if(t.horizon==="Quarterly"){const o=n.getFullYear()*12+Math.floor(n.getMonth()/3)*3+e*3;return pi("Quarterly",Math.floor(o/12),(o%12+12)%12)}if(t.horizon==="Monthly"){const o=n.getFullYear()*12+n.getMonth()+e;return pi("Monthly",Math.floor(o/12),(o%12+12)%12)}return fy("Weekly",new Date(Rb(t.start_date,e*7)+"T00:00:00"))},yy=t=>{if(!t.start_date)return"";const e=new Date(t.start_date+"T00:00:00"),n=e.getMonth();switch(t.horizon){case"Yearly":{const o=t.end_date?new Date(t.end_date+"T00:00:00").getFullYear():e.getFullYear();return o>e.getFullYear()?`${e.getFullYear()}–${o}`:`${e.getFullYear()}`}case"Quarterly":return`Q${Math.floor(n/3)+1} ${e.getFullYear()}`;case"Monthly":return`${wr[n]} ${e.getFullYear()}`;case"Weekly":return`${wr[n]} W${Math.ceil(e.getDate()/7)}`;default:return""}};function xy(){const[t,e]=g.useState([]),[n,o]=g.useState("All"),[i,s]=g.useState({}),[l,a]=g.useState({}),[d,c]=g.useState(null),[p,y]=g.useState(""),[m,j]=g.useState(0),[x,k]=g.useState(1),[T,b]=g.useState(gs),[u,h]=g.useState(gs),[I,v]=g.useState("Yearly"),[C,L]=g.useState(zo[0]),[A,E]=g.useState(null),M=gy(),[S,D]=g.useState(!M),[w,Y]=g.useState("day"),[lt,rt]=g.useState(null),ht=g.useRef(null);g.useEffect(()=>{ht.current=lt},[lt]);const[U,H]=g.useState(null),J=g.useRef(null);g.useEffect(()=>{J.current=U},[U]);const P=g.useRef(null),[F,f]=g.useState(null),V=g.useRef(null),[xt,at]=g.useState(null),[G,ft]=g.useState(null),Z=(z,_)=>{if(xt===_){at(null);return}const ut=z.currentTarget.getBoundingClientRect(),jt=ut.bottom+220<window.innerHeight;ft({right:Math.max(8,window.innerWidth-ut.right),...jt?{top:ut.bottom+4}:{bottom:window.innerHeight-ut.top+4}}),at(_)},et=z=>{clearTimeout(V.current),V.current=setTimeout(()=>f(z),350)},X=()=>{clearTimeout(V.current),f(null)},gt=g.useCallback(()=>{O.getGoals().then(e).catch(console.error)},[]);g.useEffect(()=>{gt()},[gt]);const{deleteItem:Ct,toasts:W,handleUndo:bt,handleDismiss:Et}=Ar(O.deleteGoal,O.restoreGoal,gt),At=g.useCallback(async()=>{const z=ht.current;if(rt(null),!z)return;const _=Math.round(z.dx/(z.stepPx||ge*3));if(!_)return;const ut=hy(z.g,_);ut.start_date!==z.g.start_date&&(await O.updateGoal(z.g.id,{pillar:z.g.pillar,start_date:ut.start_date,end_date:ut.end_date}),gt())},[gt]),Ht=!!lt;g.useEffect(()=>{if(!Ht)return;const z=ut=>rt(jt=>jt&&{...jt,dx:ut.clientX-jt.startX}),_=()=>At();return window.addEventListener("pointermove",z),window.addEventListener("pointerup",_),()=>{window.removeEventListener("pointermove",z),window.removeEventListener("pointerup",_)}},[Ht,At]);const be=g.useCallback(async()=>{const z=J.current;if(H(null),!z)return;const _=z.g,ut=Ga(_),jt=jg(_),_t=Math.max(ut,Math.min(jt,Ha(_.start_date,_.end_date)+Math.round(z.dx/ge))),Zt=Rb(_.start_date,_t-1);Zt!==_.end_date&&(await O.updateGoal(_.id,{end_date:Zt}),gt())},[gt]),Mt=!!U;g.useEffect(()=>{if(!Mt)return;const z=ut=>H(jt=>jt&&{...jt,dx:ut.clientX-jt.startX}),_=()=>be();return window.addEventListener("pointermove",z),window.addEventListener("pointerup",_),()=>{window.removeEventListener("pointermove",z),window.removeEventListener("pointerup",_)}},[Mt,be]);const Jt=n==="All",de=Ve[n]||{dot:"var(--text-3)"},je=Jt?t:t.filter(z=>z.pillar===n),Ue=je.filter(z=>!z.parent_goal_id),Se=z=>je.filter(_=>_.parent_goal_id===z),mo=z=>a(_=>({..._,[z]:!_[z]})),In=z=>z.horizon==="Monthly"||z.horizon==="Weekly",Ce=z=>i[z.id]!==void 0?i[z.id]:In(z),Mr=z=>s(_=>({..._,[z.id]:!Ce(z)})),mr=(z,_=null)=>{c(z),y(""),k(1);const ut=_?Eo(_.start_date):gs;b(ut),h(ut),z==="ROOT"&&L(Jt?zo[0]:n);const jt=z==="ROOT"?"Yearly":Rl(_==null?void 0:_.horizon);v(jt);const _t=z==="ROOT"?Array.from({length:12},(Zt,ce)=>ce):Oi(_);j(jt==="Quarterly"?Math.floor(_t[0]/3)*3:_t[0]??0)},B=async(z,_)=>{if(!p.trim())return;const ut=(_==null?void 0:_.horizon)??null,jt=z==="ROOT"?I:Rl(ut),_t=z==="ROOT"?C:(_==null?void 0:_.pillar)||n;let Zt,ce;if(jt==="Yearly"){const te=Number(T),st=Math.max(te,Number(u)||te);Zt=`${te}-01-01`,ce=`${st}-12-31`}else{const te=_?Eo(_.start_date):Number(T);({start_date:Zt,end_date:ce}=pi(jt,te,m,x))}await O.createGoal({pillar:_t,title:p.trim(),horizon:jt,parent_goal_id:z==="ROOT"?null:z,start_date:Zt,end_date:ce}),z!=="ROOT"&&a(te=>({...te,[z]:!0})),c(null),y(""),gt()},vt=z=>{const _=z.start_date?new Date(z.start_date+"T00:00:00"):new Date,ut=_.getMonth(),jt=Math.min(Math.max(Math.ceil(_.getDate()/7),1),4);E({id:z.id,title:z.title,pillar:z.pillar,horizon:z.horizon,parentGoal:t.find(_t=>_t.id===z.parent_goal_id)||null,year:Eo(z.start_date),endYear:Eo(z.end_date),month:z.horizon==="Quarterly"?Math.floor(ut/3)*3:ut,week:jt})},Pt=async()=>{if(!A||!A.title.trim())return;let z,_;if(A.horizon==="Yearly"){const ut=Number(A.year),jt=Math.max(ut,Number(A.endYear)||ut);z=`${ut}-01-01`,_=`${jt}-12-31`}else{let ut=A.month;A.horizon==="Weekly"&&(ut=Oi(A.parentGoal)[0]);const jt=A.parentGoal?Eo(A.parentGoal.start_date):Number(A.year);({start_date:z,end_date:_}=pi(A.horizon,jt,ut,A.week))}await O.updateGoal(A.id,{title:A.title.trim(),pillar:A.pillar,start_date:z,end_date:_}),E(null),gt()},Re=({parentId:z,parentGoal:_,depth:ut})=>{const jt=z==="ROOT",_t=jt?I:Rl((_==null?void 0:_.horizon)??null),Zt=jt?Array.from({length:12},(st,Ie)=>Ie):Oi(_),ce=xg.filter(st=>Zt.includes(st.startMonth)),te=st=>{v(st),j(0),k(1),h(T)};return r.jsxs("div",{style:{...Q.addBox,marginLeft:ut*24},children:[r.jsx("input",{autoFocus:!0,placeholder:`New ${_t.toLowerCase()} goal…`,value:p,onChange:st=>y(st.target.value),onKeyDown:st=>{st.key==="Enter"&&B(z,_),st.key==="Escape"&&c(null)},style:Q.input}),jt&&Jt&&r.jsx("select",{value:C,onChange:st=>L(st.target.value),style:Q.monthSelect,title:"Pillar",children:zo.map(st=>r.jsx("option",{value:st,children:st},st))}),jt&&r.jsx("select",{value:I,onChange:st=>te(st.target.value),style:Q.monthSelect,title:"Goal level",children:cs.map(st=>r.jsx("option",{value:st,children:st},st))}),_t==="Yearly"&&r.jsxs(r.Fragment,{children:[r.jsx("select",{value:T,onChange:st=>{const Ie=Number(st.target.value);b(Ie),u<Ie&&h(Ie)},style:Q.monthSelect,title:"Start year",children:To.map(st=>r.jsx("option",{value:st,children:st},st))}),r.jsx("span",{style:Q.toTag,children:"to"}),r.jsx("select",{value:u,onChange:st=>h(Number(st.target.value)),style:Q.monthSelect,title:"End year (spans multiple years)",children:To.filter(st=>st>=T).map(st=>r.jsx("option",{value:st,children:st},st))})]}),_t!=="Yearly"&&jt&&r.jsx("select",{value:T,onChange:st=>b(Number(st.target.value)),style:Q.monthSelect,title:"Year",children:To.map(st=>r.jsx("option",{value:st,children:st},st))}),_t==="Quarterly"&&r.jsx("select",{value:m,onChange:st=>j(Number(st.target.value)),style:Q.monthSelect,children:ce.map(st=>r.jsx("option",{value:st.startMonth,children:st.label},st.startMonth))}),_t==="Monthly"&&r.jsx("select",{value:m,onChange:st=>j(Number(st.target.value)),style:Q.monthSelect,children:Zt.map(st=>r.jsx("option",{value:st,children:wr[st]},st))}),_t==="Weekly"&&r.jsxs(r.Fragment,{children:[jt?r.jsx("select",{value:m,onChange:st=>j(Number(st.target.value)),style:Q.monthSelect,children:Zt.map(st=>r.jsx("option",{value:st,children:wr[st]},st))}):r.jsx("span",{style:Q.inheritTag,children:wr[Zt[0]]}),r.jsx("select",{value:x,onChange:st=>k(Number(st.target.value)),style:Q.monthSelect,children:[1,2,3,4].map(st=>r.jsxs("option",{value:st,children:["Week ",st]},st))})]}),r.jsx("button",{onClick:()=>B(z,_),style:Q.saveBtn,children:r.jsx(Rt,{size:14})}),r.jsx("button",{onClick:()=>c(null),style:Q.cancelBtn,children:r.jsx(zt,{size:14})})]})},wt=({goal:z,depth:_})=>{var ce,te,st,Ie,fr;const ut=Se(z.id),jt=l[z.id],_t=z.horizon!=="Weekly";if((A==null?void 0:A.id)===z.id){const ee=Oi(A.parentGoal),sn=xg.filter(Tt=>ee.includes(Tt.startMonth));return r.jsxs("div",{style:{...Q.editBox,marginLeft:_*24},children:[r.jsx("input",{autoFocus:!0,value:A.title,onChange:Tt=>E({...A,title:Tt.target.value}),onKeyDown:Tt=>Tt.key==="Enter"&&Pt(),style:{...Q.input,flex:1}}),r.jsx("select",{value:A.pillar,onChange:Tt=>E({...A,pillar:Tt.target.value}),style:Q.monthSelect,children:zo.map(Tt=>r.jsx("option",{children:Tt},Tt))}),A.horizon==="Yearly"&&r.jsxs(r.Fragment,{children:[r.jsx("select",{value:A.year,onChange:Tt=>{const yo=Number(Tt.target.value);E({...A,year:yo,endYear:Math.max(yo,A.endYear)})},style:Q.monthSelect,title:"Start year",children:To.map(Tt=>r.jsx("option",{value:Tt,children:Tt},Tt))}),r.jsx("span",{style:Q.toTag,children:"to"}),r.jsx("select",{value:A.endYear,onChange:Tt=>E({...A,endYear:Number(Tt.target.value)}),style:Q.monthSelect,title:"End year (spans multiple years)",children:To.filter(Tt=>Tt>=A.year).map(Tt=>r.jsx("option",{value:Tt,children:Tt},Tt))})]}),A.horizon==="Quarterly"&&r.jsx("select",{value:A.month,onChange:Tt=>E({...A,month:Number(Tt.target.value)}),style:Q.monthSelect,children:sn.map(Tt=>r.jsx("option",{value:Tt.startMonth,children:Tt.label},Tt.startMonth))}),A.horizon==="Monthly"&&r.jsx("select",{value:A.month,onChange:Tt=>E({...A,month:Number(Tt.target.value)}),style:Q.monthSelect,children:ee.map(Tt=>r.jsx("option",{value:Tt,children:wr[Tt]},Tt))}),A.horizon==="Weekly"&&r.jsxs(r.Fragment,{children:[r.jsx("span",{style:Q.inheritTag,children:wr[ee[0]]}),r.jsx("select",{value:A.week,onChange:Tt=>E({...A,week:Number(Tt.target.value)}),style:Q.monthSelect,children:[1,2,3,4].map(Tt=>r.jsxs("option",{value:Tt,children:["Week ",Tt]},Tt))})]}),r.jsx("button",{onClick:Pt,style:Q.saveBtn,children:r.jsx(Rt,{size:14})}),r.jsx("button",{onClick:()=>E(null),style:Q.cancelBtn,children:r.jsx(zt,{size:14})})]})}return r.jsxs("div",{children:[r.jsxs("div",{style:{...Q.row,marginLeft:_*24,background:_===0&&((ce=Ve[z.pillar])==null?void 0:ce.soft)||"transparent"},children:[ut.length>0?r.jsx("button",{onClick:()=>mo(z.id),style:Q.caret,children:jt?r.jsx(xi,{size:15}):r.jsx(nn,{size:15})}):r.jsx("span",{style:{...Q.caret,opacity:.25},children:r.jsx(Kd,{size:12})}),r.jsx("span",{style:{...Q.horizonTag,color:((te=Ve[z.pillar])==null?void 0:te.dot)||de.dot,borderColor:((st=Ve[z.pillar])==null?void 0:st.dot)||de.dot},title:z.horizon,children:M?py[z.horizon]:z.horizon}),r.jsxs("div",{style:Q.nameCol,children:[r.jsx("span",{style:{...Q.title,...F===z.id?Q.titleFull:{}},title:z.title,onPointerDown:()=>et(z.id),onPointerUp:X,onPointerLeave:X,onPointerCancel:X,children:z.title}),r.jsx("span",{style:Q.whenSub,children:yy(z)})]}),M?r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{position:"relative",flexShrink:0},children:[r.jsx("button",{onClick:ee=>Z(ee,z.id),style:Q.rowAdd,title:"Options",children:r.jsx(Cb,{size:15})}),xt===z.id&&r.jsxs(r.Fragment,{children:[r.jsx("div",{style:Q.menuBackdrop,onClick:()=>at(null)}),r.jsxs("div",{style:{...Q.goalMenu,...G},children:[r.jsxs("button",{style:Q.menuItem,onClick:()=>{vt(z),at(null)},children:[r.jsx(he,{size:14})," Edit"]}),_t&&r.jsxs("button",{style:Q.menuItem,onClick:()=>{a(ee=>({...ee,[z.id]:!0})),mr(z.id,z),at(null)},children:[r.jsx(ae,{size:14})," Add sub-goal"]}),r.jsxs("button",{style:{...Q.menuItem,color:"#C2536B"},onClick:()=>{Ct(z.id,z.title),at(null)},children:[r.jsx(zt,{size:14})," Delete"]})]})]})]}),r.jsx("button",{onClick:()=>Mr(z),style:{...Q.rowAdd,color:Ce(z)?((Ie=Ve[z.pillar])==null?void 0:Ie.dot)||de.dot:"var(--text-3)"},title:Ce(z)?"Showing on timeline":"Hidden from timeline",children:Ce(z)?r.jsx(Ws,{size:14}):r.jsx(Pa,{size:14})})]}):r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:()=>Mr(z),style:{...Q.rowAdd,color:Ce(z)?((fr=Ve[z.pillar])==null?void 0:fr.dot)||de.dot:"var(--text-3)"},title:Ce(z)?"Showing on timeline — click to hide":"Hidden from timeline — click to show",children:Ce(z)?r.jsx(Ws,{size:13}):r.jsx(Pa,{size:13})}),r.jsx("button",{onClick:()=>vt(z),style:Q.rowAdd,title:"Edit",children:r.jsx(he,{size:12})}),_t&&r.jsx("button",{onClick:()=>{a(ee=>({...ee,[z.id]:!0})),mr(z.id,z)},style:Q.rowAdd,title:"Add sub-goal",children:r.jsx(ae,{size:13})}),r.jsx("button",{onClick:()=>Ct(z.id,z.title),style:{...Q.rowAdd,color:"var(--text-3)"},title:"Delete",children:r.jsx(zt,{size:13})})]})]}),jt&&ut.map(ee=>r.jsx(wt,{goal:ee,depth:_+1},ee.id)),jt&&d===z.id&&r.jsx(Re,{parentId:z.id,parentGoal:z,depth:_+1})]})},$t=t.filter(z=>Ce(z)&&z.start_date&&z.end_date),De=uy.map(z=>({...z,items:$t.filter(_=>z.horizons.includes(_.horizon)).sort((_,ut)=>_.pillar.localeCompare(ut.pillar)||_.start_date.localeCompare(ut.start_date)||kg[_.horizon]-kg[ut.horizon]||_.end_date.localeCompare(ut.end_date))})).filter(z=>z.items.length>0),Ft=(()=>{if(!$t.length)return null;let z=$t[0].start_date,_=$t[0].end_date;return $t.forEach(ut=>{ut.start_date<z&&(z=ut.start_date),ut.end_date>_&&(_=ut.end_date)}),{start:Rn(z),end:Rn(_)}})(),on=(()=>{if(!Ft)return[];const z=[];for(let _=Ft.start.getTime();_<=Ft.end.getTime();_+=Mo)z.push(new Date(_));return z})(),wi=on.length,Gb=(()=>{const z=[];return on.forEach(_=>{const ut=`${_.getFullYear()}-${_.getMonth()}`,jt=z[z.length-1];jt&&jt.key===ut?jt.days++:z.push({key:ut,label:`${wr[_.getMonth()]} '${String(_.getFullYear()).slice(2)}`,days:1})}),z})(),fo=new Date;fo.setHours(0,0,0,0);const zn=Ft?Math.round((fo-Ft.start)/Mo):-1,ho=zn>=0&&zn<wi,tc=z=>Math.round((Rn(z.end_date)-Rn(z.start_date))/Mo)+1,Tn=w==="month",ec=Ft?Ft.start.getFullYear():0,rc=Ft?Ft.start.getMonth():0,nc=(()=>{if(!Ft)return[];const z=[];let _=ec,ut=rc;const jt=Ft.end.getFullYear(),_t=Ft.end.getMonth();for(;_<jt||_===jt&&ut<=_t;)z.push({y:_,m:ut}),ut++,ut>11&&(ut=0,_++);return z})(),ki=nc.length||1,Ub=(z,_)=>{const ut=Rn(z),jt=(ut.getFullYear()-ec)*12+ut.getMonth()-rc,_t=new Date(ut.getFullYear(),ut.getMonth()+1,0).getDate();return jt+(ut.getDate()-(_?0:1))/_t},ol=(z,_)=>Ub(z,_)/ki*100,Yb=`${fo.getFullYear()}-${String(fo.getMonth()+1).padStart(2,"0")}-${String(fo.getDate()).padStart(2,"0")}`,Vb=Ft?ol(Yb,!1):0,oc=(S?Qo:0)+zn*ge,Qb=Ft?`${Ft.start.getTime()}-${Ft.end.getTime()}`:"";return g.useEffect(()=>{if(Tn||!ho)return;const z=P.current;z&&(z.scrollLeft=Math.max(0,oc-z.clientWidth/2+ge/2))},[Qb,zn,S,ho,Tn]),r.jsxs("div",{style:Q.page,children:[r.jsxs("div",{style:Q.head,children:[r.jsx("div",{style:Q.eyebrow,children:"Anvil · Goals"}),r.jsx("h1",{style:Q.h1,children:Jt?"All Goals":`${n} Goals`})]}),r.jsxs("div",{style:Q.pillarPicker,children:[r.jsx("button",{onClick:()=>{o("All"),c(null),E(null)},style:{...Q.pillarChip,...Jt?{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"}:{}},children:"All Goals"}),zo.map(z=>{const _=z===n;return r.jsxs("button",{onClick:()=>{o(z),c(null),E(null)},style:{...Q.pillarChip,..._?{background:Ve[z].dot,color:"#fff",borderColor:Ve[z].dot}:{}},children:[r.jsx("span",{style:{...Q.dot,background:_?"#fff":Ve[z].dot}}),z]},z)})]}),r.jsxs("div",{style:Q.list,children:[Ue.map(z=>r.jsx(wt,{goal:z,depth:0},z.id)),Ue.length===0&&r.jsxs("div",{style:Q.ganttEmpty,children:["No goals yet",Jt?"":` for ${n}`,"."]}),d==="ROOT"&&r.jsx(Re,{parentId:"ROOT",parentGoal:null,depth:0}),d!=="ROOT"&&r.jsxs("button",{onClick:()=>mr("ROOT",null),style:Q.rootAdd,children:[r.jsx(ae,{size:14})," Add new goal"]})]}),r.jsxs("div",{style:Q.ganttWrap,children:[r.jsxs("div",{style:Q.ganttTop,children:[r.jsxs("div",{style:Q.ganttTitle,children:[Tn?"Monthly":"Daily"," Timeline",Ft?` · ${vg(Ft.start)} – ${vg(Ft.end)}`:""]}),r.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[r.jsxs("div",{style:Q.zoomToggle,children:[r.jsx("button",{onClick:()=>Y("day"),style:{...Q.zoomBtn,...Tn?{}:Q.zoomBtnOn},children:"Day"}),r.jsx("button",{onClick:()=>Y("month"),style:{...Q.zoomBtn,...Tn?Q.zoomBtnOn:{}},children:"Month"})]}),r.jsxs("button",{onClick:()=>D(z=>!z),style:Q.labelToggle,children:[S?r.jsx(Uh,{size:14}):r.jsx(Yh,{size:14}),S?"Hide names":"Show names"]})]})]}),Ft?Tn?r.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[r.jsxs("div",{style:Q.gBandRow,children:[S&&r.jsx("div",{style:{...Q.gLabelHead,zIndex:4},children:"Goal"}),r.jsx("div",{style:{flex:1,display:"grid",gridTemplateColumns:`repeat(${ki}, 1fr)`,minWidth:0},children:nc.map((z,_)=>r.jsxs("div",{style:Q.gMonthFluid,children:[wr[z.m],z.m===0||_===0?` '${String(z.y).slice(2)}`:""]},_))})]}),De.map(z=>r.jsxs("div",{children:[r.jsxs("div",{style:Q.gGroupRow,children:[S?r.jsxs("div",{style:Q.gGroupLabel,children:[z.label,r.jsx("span",{style:Q.gGroupCount,children:z.items.length})]}):r.jsxs("div",{style:Q.gGroupChip,children:[z.label," · ",z.items.length]}),r.jsx("div",{style:{flex:1}})]}),z.items.map(_=>{var fr;const ut=((fr=Ve[_.pillar])==null?void 0:fr.dot)||"#9A968C",jt=(lt==null?void 0:lt.id)===_.id,_t=jt?lt.dx:0,Zt=ol(_.start_date,!1),ce=Math.max(2,ol(_.end_date,!0)-Zt),te=tc(_),st=ce>=14,Ie=`${_.title} · ${_.start_date} → ${_.end_date} · ${te} day${te>1?"s":""}`;return r.jsxs("div",{style:Q.gRow,children:[S&&r.jsxs("div",{style:{...Q.gLabel,paddingLeft:12},children:[r.jsx("span",{style:{...Q.ganttRowDot,background:ut}}),r.jsx("span",{style:{...Q.gHzTag,color:ut,borderColor:ut},children:wg[_.horizon]}),r.jsx("span",{style:Q.gLabelText,title:_.title,children:_.title}),r.jsxs("span",{style:Q.gDurChip,children:[te,"d"]})]}),r.jsxs("div",{style:{position:"relative",flex:1,minHeight:36,minWidth:0,backgroundImage:`repeating-linear-gradient(to right, var(--border) 0, var(--border) 1px, transparent 1px, transparent calc(100% / ${ki}))`},children:[ho&&r.jsx("div",{style:{...Q.gTodayLine,left:`${Vb}%`}}),r.jsxs("div",{onPointerDown:ee=>{ee.preventDefault();const sn=ee.currentTarget.parentNode.offsetWidth;rt({id:_.id,startX:ee.clientX,dx:0,g:_,stepPx:Math.max(8,sn/ki/2)})},style:{...Q.gBar,left:`${Zt}%`,width:`${ce}%`,background:ut,cursor:jt?"grabbing":"grab",transform:_t?`translateX(${_t}px)`:"none",zIndex:jt?6:1,boxShadow:jt?"0 4px 12px rgba(0,0,0,0.28)":"0 1px 2px rgba(0,0,0,0.15)",touchAction:"none"},title:Ie,children:[r.jsx(mg,{size:12,style:{opacity:.7,flexShrink:0,marginRight:2,color:"#fff"}}),st&&r.jsx("span",{style:Q.gBarLabel,children:_.title})]}),!st&&r.jsx("span",{style:{...Q.gBarOutside,left:`calc(${Zt+ce}% + 6px)`},title:Ie,children:_.title})]})]},_.id)})]},z.key))]}):r.jsx("div",{style:Q.ganttScroll,ref:P,children:r.jsxs("div",{style:{minWidth:(S?Qo:0)+wi*ge,position:"relative"},children:[ho&&r.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:oc,width:ge,background:"color-mix(in srgb, var(--accent) 14%, transparent)",pointerEvents:"none",zIndex:3}}),r.jsxs("div",{style:Q.gBandRow,children:[S&&r.jsx("div",{style:{...Q.gLabelHead,zIndex:4},children:"Goal"}),r.jsx("div",{style:{display:"flex"},children:Gb.map((z,_)=>r.jsx("div",{style:{...Q.gMonthCell,width:z.days*ge},children:z.label},_))})]}),r.jsxs("div",{style:Q.gBandRow,children:[S&&r.jsx("div",{style:{...Q.gLabelHead,zIndex:4,fontSize:10,color:"var(--text-3)",fontWeight:600},children:"days →"}),r.jsx("div",{style:{display:"flex"},children:on.map((z,_)=>{const ut=z.getDay()===0||z.getDay()===6,jt=_===zn;return r.jsx("div",{style:{...Q.gDayCell,...ut?Q.gWeekend:{},...jt?Q.gTodayCell:{}},children:z.getDate()},_)})})]}),De.map(z=>r.jsxs("div",{children:[r.jsxs("div",{style:Q.gGroupRow,children:[S?r.jsxs("div",{style:Q.gGroupLabel,children:[z.label,r.jsx("span",{style:Q.gGroupCount,children:z.items.length})]}):r.jsxs("div",{style:Q.gGroupChip,children:[z.label," · ",z.items.length]}),r.jsx("div",{style:{width:wi*ge,flexShrink:0}})]}),z.items.map(_=>{var ic;const ut=((ic=Ve[_.pillar])==null?void 0:ic.dot)||"#9A968C",jt=Math.round((Rn(_.start_date)-Ft.start)/Mo),_t=tc(_),Zt=(lt==null?void 0:lt.id)===_.id,ce=Zt?lt.dx:0,te=my(_),st=(U==null?void 0:U.id)===_.id,Ie=te?Ga(_):_t,fr=te?jg(_):_t,ee=st?Math.max(Ie,Math.min(fr,_t+Math.round(U.dx/ge))):_t,sn=ee*ge-4,Tt=sn>=54,yo=`${_.title} · ${_.start_date} → ${_.end_date} · ${ee} day${ee>1?"s":""}${te?` (max ${fr})`:""}`;return r.jsxs("div",{style:Q.gRow,children:[S&&r.jsxs("div",{style:{...Q.gLabel,paddingLeft:12},children:[r.jsx("span",{style:{...Q.ganttRowDot,background:ut}}),r.jsx("span",{style:{...Q.gHzTag,color:ut,borderColor:ut},children:wg[_.horizon]}),r.jsx("span",{style:Q.gLabelText,title:_.title,children:_.title}),r.jsxs("span",{style:Q.gDurChip,children:[ee,"d"]})]}),r.jsxs("div",{style:{...Q.gTrack,width:wi*ge},children:[ho&&r.jsx("div",{style:{...Q.gTodayLine,left:zn*ge}}),r.jsxs("div",{onPointerDown:En=>{En.preventDefault(),rt({id:_.id,startX:En.clientX,dx:0,g:_,stepPx:ge*3})},style:{...Q.gBar,left:jt*ge+2,width:sn,background:ut,cursor:Zt?"grabbing":"grab",transform:ce?`translateX(${ce}px)`:"none",zIndex:Zt||st?6:1,boxShadow:Zt||st?"0 4px 12px rgba(0,0,0,0.28)":"0 1px 2px rgba(0,0,0,0.15)",touchAction:"none"},title:yo,children:[te&&ee>Ie&&r.jsx("div",{style:{position:"absolute",left:Ie*ge,top:0,bottom:0,right:0,background:"#C2536B",borderRadius:"0 5px 5px 0"}}),r.jsx(mg,{size:12,style:{opacity:.7,flexShrink:0,marginRight:2,color:"#fff",position:"relative",zIndex:1}}),Tt&&r.jsx("span",{style:{...Q.gBarLabel,position:"relative",zIndex:1},children:_.title}),te&&r.jsx("div",{onPointerDown:En=>{En.preventDefault(),En.stopPropagation(),H({id:_.id,startX:En.clientX,dx:0,g:_})},style:Q.resizeHandle,title:`Drag to extend up to ${fr} days`,children:r.jsx("div",{style:Q.resizeGrip})})]}),!Tt&&r.jsx("span",{style:{...Q.gBarOutside,left:jt*ge+sn+8+ce},title:yo,children:_.title})]})]},_.id)})]},z.key))]})}):r.jsx("div",{style:Q.ganttEmpty,children:"No goals on the timeline. Click the eye icon on a goal to show it here."}),Ft&&r.jsxs("div",{style:Q.gLegend,children:[r.jsxs("span",{style:Q.gLegendItem,children:[r.jsx("span",{style:{...Q.gLegendBar}})," bar length = number of days"]}),r.jsxs("span",{style:Q.gLegendItem,children:[r.jsx("span",{style:Q.gLegendToday})," today"]})]})]}),r.jsx(Fr,{toasts:W,onUndo:bt,onDismiss:Et})]})}const Q={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box",maxWidth:"100%",overflowX:"hidden"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},pillarPicker:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16},pillarChip:{display:"flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},list:{background:"var(--surface)",borderRadius:12,padding:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"hidden"},row:{display:"flex",alignItems:"center",gap:9,padding:"9px 10px",borderRadius:8,flexWrap:"nowrap"},caret:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",display:"grid",placeItems:"center",padding:0,width:18,height:18,flexShrink:0},horizonTag:{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",border:"1px solid",borderRadius:5,padding:"2px 6px",flexShrink:0},nameCol:{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:1},title:{fontSize:14,fontWeight:500,lineHeight:1.3,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",userSelect:"none",WebkitUserSelect:"none",cursor:"default"},titleFull:{whiteSpace:"normal",overflow:"visible",textOverflow:"clip",wordBreak:"break-word"},whenSub:{fontSize:11,fontStyle:"italic",color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},rowAdd:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,flexShrink:0},menuBackdrop:{position:"fixed",inset:0,zIndex:40},goalMenu:{position:"fixed",zIndex:41,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 6px 24px rgba(0,0,0,0.18)",padding:4,minWidth:180,display:"flex",flexDirection:"column"},menuItem:{display:"flex",alignItems:"center",gap:9,width:"100%",border:"none",background:"none",padding:"10px 12px",borderRadius:7,cursor:"pointer",fontFamily:"inherit",fontSize:13.5,fontWeight:500,color:"var(--text)",textAlign:"left"},rootAdd:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"var(--text-2)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"9px 12px",cursor:"pointer",fontWeight:600,fontFamily:"inherit",marginTop:6,width:"100%",justifyContent:"center"},addBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 0 6px 28px",flexWrap:"wrap"},editBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 10px",flexWrap:"wrap",background:"var(--bg)",borderRadius:8,margin:"4px 0"},input:{border:"1px solid var(--border)",borderRadius:7,padding:"8px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",flex:1,minWidth:120},monthSelect:{border:"1px solid var(--border)",borderRadius:7,padding:"8px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},inheritTag:{fontSize:11.5,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"6px 9px",borderRadius:7,flexShrink:0},toTag:{fontSize:11.5,fontWeight:600,color:"var(--text-3)",flexShrink:0},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},ganttWrap:{background:"var(--surface)",borderRadius:12,padding:"16px 14px",marginTop:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},ganttTop:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:10,marginBottom:14},ganttTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",fontFamily:"'Fraunces',Georgia,serif"},labelToggle:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"5px 10px",borderRadius:8,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},zoomToggle:{display:"inline-flex",border:"1px solid var(--border)",borderRadius:8,overflow:"hidden"},zoomBtn:{border:"none",background:"var(--surface)",color:"var(--text-2)",padding:"5px 12px",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},zoomBtnOn:{background:"var(--accent-strong)",color:"#fff"},gMonthFluid:{borderLeft:"1px solid var(--border)",fontSize:10,fontWeight:700,color:"var(--text-2)",textAlign:"center",padding:"5px 0",whiteSpace:"nowrap",overflow:"hidden"},gGroupChip:{position:"sticky",left:0,zIndex:3,background:"var(--surface-2)",padding:"5px 10px",fontSize:10,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-2)",whiteSpace:"nowrap",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center"},ganttEmpty:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},ganttScroll:{overflowX:"auto"},ganttRowDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},gBandRow:{display:"flex",alignItems:"stretch",borderBottom:"1px solid var(--border)"},gLabelHead:{width:Qo,flexShrink:0,position:"sticky",left:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center",padding:"6px 10px",fontSize:12,fontWeight:700,color:"var(--text-2)"},gMonthCell:{flexShrink:0,borderLeft:"1px solid var(--border)",fontSize:10.5,fontWeight:700,color:"var(--text-2)",textAlign:"center",padding:"5px 0",whiteSpace:"nowrap",overflow:"hidden"},gDayCell:{width:ge,flexShrink:0,textAlign:"center",fontSize:10,color:"var(--text-3)",padding:"4px 0",borderLeft:"1px solid var(--border)",fontWeight:600},gWeekend:{background:"var(--surface-2)"},gTodayCell:{background:"var(--hover)",color:"var(--accent)",fontWeight:800},gGroupRow:{display:"flex",alignItems:"stretch",background:"var(--surface-2)",borderBottom:"1px solid var(--border)",borderTop:"1px solid var(--border)"},gGroupLabel:{width:Qo,flexShrink:0,position:"sticky",left:0,background:"var(--surface-2)",zIndex:3,padding:"6px 12px",fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-2)",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center",gap:7},gGroupCount:{fontSize:10,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 6px"},gHzTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.04em",border:"1px solid",borderRadius:4,padding:"1px 4px",flexShrink:0},gRow:{display:"flex",alignItems:"stretch",minHeight:36,borderBottom:"1px solid var(--border)"},gLabel:{width:Qo,flexShrink:0,display:"flex",alignItems:"center",gap:7,position:"sticky",left:0,background:"var(--surface)",zIndex:2,borderRight:"1px solid var(--border)",paddingRight:8,overflow:"hidden"},gLabelText:{flex:1,minWidth:0,fontSize:12,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"var(--text)"},gDurChip:{fontSize:10,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",borderRadius:10,padding:"1px 6px",flexShrink:0,marginRight:6},gTrack:{position:"relative",flexShrink:0,minHeight:36,backgroundImage:`repeating-linear-gradient(to right, var(--border) 0, var(--border) 1px, transparent 1px, transparent ${ge}px)`},gBar:{position:"absolute",top:9,height:18,borderRadius:5,display:"flex",alignItems:"center",padding:"0 7px",boxShadow:"0 1px 2px rgba(0,0,0,0.15)",overflow:"hidden",zIndex:1},gBarLabel:{fontSize:11,fontWeight:600,color:"#fff",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},gBarOutside:{position:"absolute",top:9,height:18,display:"flex",alignItems:"center",fontSize:11,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",pointerEvents:"none",zIndex:1},resizeHandle:{position:"absolute",right:0,top:0,bottom:0,width:12,cursor:"ew-resize",display:"grid",placeItems:"center",touchAction:"none",zIndex:2},resizeGrip:{width:2,height:11,background:"rgba(255,255,255,0.9)",borderRadius:1,boxShadow:"3px 0 0 rgba(255,255,255,0.6)"},gTodayLine:{position:"absolute",top:0,bottom:0,width:2,background:"#C2536B",zIndex:0,opacity:.6},gLegend:{display:"flex",gap:16,marginTop:12,fontSize:11,color:"var(--text-3)",flexWrap:"wrap"},gLegendItem:{display:"flex",alignItems:"center",gap:6,fontWeight:600},gLegendBar:{width:18,height:8,borderRadius:3,background:"var(--accent)",display:"inline-block"},gLegendToday:{width:2,height:12,background:"#C2536B",display:"inline-block"}},kn={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.12)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.12)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.12)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.12)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.12)"}},Db=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],vy=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],rl=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,wy=()=>rl(new Date),ky=(t=0)=>{const e=new Date,n=e.getDay(),o=n===0?-6:1-n,i=new Date(e);return i.setDate(e.getDate()+o+t*7),Array.from({length:7},(s,l)=>{const a=new Date(i);return a.setDate(i.getDate()+l),rl(a)})},jy=(t=0)=>{const e=new Date,n=new Date(e.getFullYear(),e.getMonth()+t,1),o=n.getFullYear(),i=n.getMonth(),s=new Date(o,i+1,0).getDate(),l=n.getDay(),a=l===0?6:l-1,d=Array.from({length:s},(p,y)=>`${o}-${String(i+1).padStart(2,"0")}-${String(y+1).padStart(2,"0")}`),c=n.toLocaleDateString("en-US",{month:"long",year:"numeric"});return{dates:d,startOffset:a,label:c,year:o,month:i}},Sg=t=>new Date(t+"T00:00").toLocaleDateString("en-US",{month:"short",day:"numeric"}),Nr=wy(),Sy=new Date().getFullYear();function Cy(){var P,F;const[t,e]=g.useState([]),[n,o]=g.useState("ALL"),[i,s]=g.useState(!1),[l,a]=g.useState(!1),[d,c]=g.useState(!1),[p,y]=g.useState(null),[m,j]=g.useState(null),[x,k]=g.useState({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week"}),[T,b]=g.useState(!1),[u,h]=g.useState([]),I=g.useCallback(()=>O.getHabits().then(e).catch(console.error),[]);g.useEffect(()=>{I()},[I]),g.useEffect(()=>{O.getSetting("habit_order").then(f=>{Array.isArray(f==null?void 0:f.value)&&h(f.value)}).catch(()=>{})},[]);const v=g.useMemo(()=>u.length?[...t].sort((f,V)=>{const xt=u.indexOf(f.id),at=u.indexOf(V.id);return xt===-1&&at===-1?0:xt===-1?1:at===-1?-1:xt-at}):t,[t,u]),C=async f=>{h(f),await O.setSetting("habit_order",f),b(!1)};g.useEffect(()=>{const f=()=>{const V=window.innerWidth<720;s(V),V||a(!1)};return f(),window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[]);const{deleteItem:L,toasts:A,handleUndo:E,handleDismiss:M}=Ar(O.deleteHabit,O.restoreHabit,I),S=f=>{o(f),i&&a(!1)},D=(f,V)=>{(f.type==="minimum"||f.type==="maximum")&&f.period==="day"?j({habit:f,date:V}):w(f.id,V)},w=async(f,V)=>{await O.toggleHabitLog(f,V),I()},Y=async(f,V,xt,at)=>{await O.setHabitLogCount(f,V,xt,at),j(null),I()},lt=async(f,V)=>{await O.clearHabitLog(f,V),j(null),I()},rt=async()=>{if(!x.name.trim())return;const f={name:x.name.trim(),pillar:x.pillar,target_per_week:Number(x.target_per_week)||7,type:x.type,target_count:x.type!=="regular"?Number(x.target_count)||1:null,period:x.type!=="regular"?x.period:null};await O.createHabit(f),k({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week"}),c(!1),I()},ht=async(f,V)=>{n===f&&o("ALL"),L(f,V)},U=t.find(f=>f.id===n),H=f=>new Set(f.logs||[]),J={...$.sidebar,...i?$.sidebarOverlay:{},...i&&!l?$.sidebarHidden:{}};return r.jsxs("div",{style:$.shell,children:[i&&l&&r.jsx("div",{style:$.backdrop,onClick:()=>a(!1)}),r.jsxs("aside",{style:J,children:[r.jsxs("div",{style:$.sideTop,children:[r.jsx("div",{style:$.brand,children:"Anvil · Habits"}),i&&r.jsx("button",{onClick:()=>a(!1),style:$.closeBtn,children:r.jsx(zt,{size:18})})]}),r.jsxs("div",{style:{...$.sideItem,...n==="ALL"?$.sideItemOn:{},cursor:"default",padding:"2px 6px 2px 10px"},children:[r.jsxs("button",{onClick:()=>S("ALL"),style:{display:"flex",alignItems:"center",gap:9,flex:1,border:"none",background:"none",cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:n==="ALL"?600:500,color:"var(--text-2)",padding:"7px 0"},children:[r.jsx(yb,{size:15}),r.jsx("span",{style:$.sideLabel,children:"All Habits"}),r.jsx("span",{style:$.sideCount,children:t.length})]}),r.jsx("button",{onClick:f=>{f.stopPropagation(),b(!0)},style:$.tinyBtn,title:"Reorder habits",children:r.jsx(he,{size:12})})]}),r.jsx("div",{style:$.sideDivider}),v.map(f=>{var at;const V=n===f.id,xt=((at=kn[f.pillar])==null?void 0:at.dot)||"#9A968C";return r.jsxs("button",{onClick:()=>S(f.id),style:{...$.sideItem,...V?$.sideItemOn:{}},children:[r.jsx("span",{style:{...$.sideDot,background:xt}}),r.jsx("span",{style:$.sideLabel,children:f.name}),r.jsxs("span",{style:$.sideStreak,children:[r.jsx(bo,{size:11})," ",f.streak]})]},f.id)}),d?r.jsx(Iy,{habit:x,onChange:k,onSave:rt,onCancel:()=>c(!1)}):r.jsxs("button",{onClick:()=>c(!0),style:$.sideNewBtn,children:[r.jsx(ae,{size:13})," New habit"]})]}),r.jsxs("main",{style:$.main,children:[i&&r.jsxs("button",{onClick:()=>a(!0),style:$.hamburger,children:[r.jsx(Qd,{size:18}),r.jsx("span",{style:$.hamburgerLabel,children:n==="ALL"?"All Habits":U==null?void 0:U.name})]}),n==="ALL"?r.jsx(Ey,{habits:v,dayAction:D,logSet:H,onDelete:ht,onEdit:f=>y(f)}):r.jsx(By,{habit:U,dayAction:D,logSet:H,onDelete:()=>ht(U.id,U.name),onEdit:()=>y(U),setNote:(f,V)=>O.setHabitLogNote(U.id,f,V).then(I)}),n==="ALL"&&r.jsx(Ay,{year:Sy})]}),T&&r.jsx(Dy,{habits:v,onSave:C,onClose:()=>b(!1)}),p&&r.jsx(zy,{habit:p,onSave:async f=>{await O.updateHabit(p.id,f),y(null),I()},onClose:()=>y(null)}),m&&r.jsx(Ty,{habit:m.habit,date:m.date,initialCount:((P=m.habit.log_counts)==null?void 0:P[m.date])??0,initialNote:((F=m.habit.log_notes)==null?void 0:F[m.date])??"",onSave:(f,V)=>Y(m.habit.id,m.date,f,V),onClear:()=>lt(m.habit.id,m.date),onClose:()=>j(null)}),r.jsx(Fr,{toasts:A,onUndo:E,onDismiss:M})]})}function Iy({habit:t,onChange:e,onSave:n,onCancel:o}){const i=t.type!=="regular";return r.jsxs("div",{style:$.addBox,children:[r.jsx("input",{autoFocus:!0,placeholder:"Habit name",value:t.name,onChange:s=>e(l=>({...l,name:s.target.value})),onKeyDown:s=>s.key==="Enter"&&n(),style:$.sideInput}),r.jsx("select",{value:t.pillar,onChange:s=>e(l=>({...l,pillar:s.target.value})),style:$.sideInput,children:Object.keys(kn).map(s=>r.jsx("option",{children:s},s))}),r.jsxs("select",{value:t.type,onChange:s=>e(l=>({...l,type:s.target.value})),style:$.sideInput,children:[r.jsx("option",{value:"regular",children:"Regular (yes/no)"}),r.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),r.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),i&&r.jsxs("div",{style:{display:"flex",gap:6},children:[r.jsx("input",{type:"number",min:1,placeholder:"N",value:t.target_count||"",onChange:s=>e(l=>({...l,target_count:s.target.value})),style:{...$.sideInput,width:60}}),r.jsx("select",{value:t.period,onChange:s=>e(l=>({...l,period:s.target.value})),style:$.sideInput,children:["day","week","month","year"].map(s=>r.jsx("option",{children:s},s))})]}),r.jsxs("div",{style:{display:"flex",gap:6},children:[r.jsx("button",{onClick:n,style:$.sideAddBtn,children:r.jsx(Rt,{size:13})}),r.jsx("button",{onClick:o,style:$.sideCancelBtn,children:r.jsx(zt,{size:13})})]})]})}function zy({habit:t,onSave:e,onClose:n}){const[o,i]=g.useState(t.name),[s,l]=g.useState(t.type||"regular"),[a,d]=g.useState(t.target_count||""),[c,p]=g.useState(t.period||"week"),[y,m]=g.useState(t.reminder_time||""),j=()=>e({name:o.trim(),type:s,target_count:s!=="regular"?Number(a):null,period:s!=="regular"?c:null,reminder_time:y||null});return r.jsx("div",{style:$.modalOverlay,onClick:n,children:r.jsxs("div",{style:$.modal,onClick:x=>x.stopPropagation(),children:[r.jsxs("div",{style:$.modalHead,children:["Edit Habit",r.jsx("button",{onClick:n,style:$.closeBtn,children:r.jsx(zt,{size:16})})]}),r.jsx("label",{style:$.modalLabel,children:"Name"}),r.jsx("input",{value:o,onChange:x=>i(x.target.value),style:$.sideInput}),r.jsx("label",{style:$.modalLabel,children:"Type"}),r.jsxs("select",{value:s,onChange:x=>l(x.target.value),style:$.sideInput,children:[r.jsx("option",{value:"regular",children:"Regular (yes/no)"}),r.jsx("option",{value:"minimum",children:"Minimum (at least N)"}),r.jsx("option",{value:"maximum",children:"Maximum (no more than N)"})]}),s!=="regular"&&r.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[r.jsx("input",{type:"number",min:1,value:a,onChange:x=>d(x.target.value),style:{...$.sideInput,width:70}}),r.jsx("select",{value:c,onChange:x=>p(x.target.value),style:$.sideInput,children:["day","week","month","year"].map(x=>r.jsx("option",{children:x},x))})]}),r.jsx("label",{style:$.modalLabel,children:"Reminder time"}),r.jsx("input",{type:"time",value:y,onChange:x=>m(x.target.value),style:$.sideInput}),r.jsx("button",{onClick:j,style:{...$.sideAddBtn,width:"100%",marginTop:10,height:36},children:"Save"})]})})}function Ty({habit:t,date:e,initialCount:n,initialNote:o,onSave:i,onClear:s,onClose:l}){const[a,d]=g.useState(n??0),[c,p]=g.useState(o??""),y=t.target_count,m=t.type==="minimum"?a>=y:a>0&&a<=y,j=t.type==="maximum"&&a>y,x=m?"#4C9A6B":j?"#C2536B":"#C2773B",k=m?"✓ Goal met":j?"Over the limit":"Not met yet";return r.jsx("div",{style:$.modalOverlay,onClick:l,children:r.jsxs("div",{style:$.modal,onClick:T=>T.stopPropagation(),children:[r.jsxs("div",{style:$.modalHead,children:[t.name,r.jsx("button",{onClick:l,style:$.closeBtn,children:r.jsx(zt,{size:16})})]}),r.jsxs("div",{style:{fontSize:12,color:"var(--text-3)",marginBottom:2},children:[e," · ",t.type==="minimum"?`at least ${y}`:`no more than ${y}`," / ",t.period]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:20,margin:"14px 0 6px"},children:[r.jsx("button",{onClick:()=>d(T=>Math.max(0,T-1)),style:$.counterBtn,children:"−"}),r.jsx("span",{style:{fontSize:38,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:52,textAlign:"center",color:x},children:a}),r.jsx("button",{onClick:()=>d(T=>T+1),style:$.counterBtn,children:"+"})]}),r.jsx("div",{style:{textAlign:"center",fontSize:12.5,fontWeight:700,color:x,marginBottom:12},children:k}),r.jsx("textarea",{value:c,onChange:T=>p(T.target.value),placeholder:"Add a comment (optional)…",style:{...$.sideInput,minHeight:56,resize:"vertical"}}),r.jsxs("div",{style:{display:"flex",gap:8,marginTop:10},children:[r.jsxs("button",{onClick:s,style:{...$.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[r.jsx(zt,{size:14})," Delete"]}),r.jsxs("button",{onClick:()=>i(a,c),style:{...$.sideAddBtn,flex:1,justifyContent:"center",height:38},children:[r.jsx(Rt,{size:14})," Set"]})]})]})})}function Dl({pct:t,label:e,sub:n,color:o}){const s=2*Math.PI*26,l=s*(1-Math.max(0,Math.min(100,t))/100);return r.jsxs("div",{style:$.ringStat,children:[r.jsxs("div",{style:$.ringBox,children:[r.jsxs("svg",{width:"70",height:"70",viewBox:"0 0 70 70",children:[r.jsx("circle",{cx:"35",cy:"35",r:26,fill:"none",stroke:"var(--border)",strokeWidth:"7"}),r.jsx("circle",{cx:"35",cy:"35",r:26,fill:"none",stroke:o,strokeWidth:"7",strokeLinecap:"round",strokeDasharray:s,strokeDashoffset:l,transform:"rotate(-90 35 35)",style:{transition:"stroke-dashoffset 0.5s ease"}})]}),r.jsxs("div",{style:{...$.ringPct,color:o},children:[t,"%"]})]}),r.jsxs("div",{children:[r.jsx("div",{style:$.ringLabel,children:e}),r.jsx("div",{style:$.ringSub,children:n})]})]})}function Ey({habits:t,dayAction:e,logSet:n,onDelete:o,onEdit:i}){const[s,l]=g.useState(0),a=ky(s),d=`${Sg(a[0])} – ${Sg(a[6])}${s===0?" · This week":""}`,c=S=>{const D=new Date(S+"T00:00:00"),w=D.getDay(),Y=new Date(D);return Y.setDate(D.getDate()+(w===0?-6:1-w)),Array.from({length:7},(lt,rt)=>{const ht=new Date(Y);return ht.setDate(Y.getDate()+rt),rl(ht)})},p=S=>S.logs||[],y=(S,D)=>S.type==="minimum"&&S.period==="week"&&D.filter(w=>n(S).has(w)).length>=(S.target_count||0),m=(S,D)=>S.type==="minimum"&&S.period==="month"&&p(S).filter(w=>w.slice(0,7)===D).length>=(S.target_count||0),j=(S,D)=>S.type==="minimum"&&S.period==="year"&&p(S).filter(w=>w.slice(0,4)===D).length>=(S.target_count||0),x=(S,D)=>{var w;if((S.type==="minimum"||S.type==="maximum")&&S.period==="day"){const Y=(w=S.log_counts)==null?void 0:w[D];return Y==null?!1:S.type==="minimum"?Y>=(S.target_count||0):Y>0&&Y<=(S.target_count||0)}return n(S).has(D)},k=(S,D)=>S.type!=="minimum"?!1:S.period==="week"?y(S,c(D)):S.period==="month"?m(S,D.slice(0,7)):S.period==="year"?j(S,D.slice(0,4)):!1,T=(S,D)=>x(S,D)||k(S,D),b=t.filter(S=>T(S,Nr)).length,u=t.length?Math.round(b/t.length*100):0,h=S=>{if(S.type==="minimum"&&S.period==="month"&&(m(S,a[0].slice(0,7))||m(S,a[6].slice(0,7)))||S.type==="minimum"&&S.period==="year"&&(j(S,a[0].slice(0,4))||j(S,a[6].slice(0,4)))||S.type==="minimum"&&S.period==="week"&&y(S,a))return 1;if((S.type==="minimum"||S.type==="maximum")&&S.period==="day")return Math.min(1,a.filter(lt=>x(S,lt)).length/7);const D=n(S),w=a.filter(lt=>D.has(lt)).length,Y=S.type==="minimum"&&S.period==="week"?S.target_count||1:S.target_per_week||7;return Y>0?Math.min(1,w/Y):0},I=t.length?Math.round(t.reduce((S,D)=>S+h(D),0)/t.length*100):0,v=new Date,C=`${v.getFullYear()}-${String(v.getMonth()+1).padStart(2,"0")}`,L=new Date(v.getFullYear(),v.getMonth()+1,0).getDate(),A=L/7,E=S=>{if(S.type==="minimum"&&S.period==="month"&&m(S,C)||S.type==="minimum"&&S.period==="year"&&j(S,C.slice(0,4)))return 1;if((S.type==="minimum"||S.type==="maximum")&&S.period==="day"){let Y=0;for(let lt=1;lt<=L;lt++)x(S,`${C}-${String(lt).padStart(2,"0")}`)&&Y++;return Math.min(1,Y/L)}const D=p(S).filter(Y=>Y.slice(0,7)===C).length;let w;return S.type==="minimum"&&S.period==="week"?w=(S.target_count||1)*A:S.type==="minimum"&&S.period==="month"?w=S.target_count||1:S.type==="minimum"&&S.period==="year"?w=(S.target_count||1)/12:w=(S.target_per_week||7)*A,w>0?Math.min(1,D/w):0},M=t.length?Math.round(t.reduce((S,D)=>S+E(D),0)/t.length*100):0;return r.jsxs("div",{children:[r.jsxs("div",{style:$.mainHead,children:[r.jsx("div",{style:$.eyebrow,children:"Weekly view"}),r.jsx("h1",{style:$.h1,children:"All Habits"})]}),r.jsxs("div",{style:$.navBar,children:[r.jsx("button",{onClick:()=>l(S=>S-1),style:$.navBtn,children:r.jsx(Cn,{size:16})}),r.jsx("span",{style:$.navLabel,children:d}),r.jsx("button",{onClick:()=>l(S=>Math.min(0,S+1)),disabled:s>=0,style:{...$.navBtn,...s>=0?$.navBtnDisabled:{}},children:r.jsx(nn,{size:16})})]}),r.jsxs("div",{style:$.weekCard,children:[r.jsxs("div",{style:$.weekHeadRow,children:[r.jsx("div",{style:$.weekNameCol}),Db.map((S,D)=>r.jsxs("div",{style:$.weekDayHead,children:[r.jsx("span",{style:$.weekDayName,children:S}),r.jsx("span",{style:{...$.weekDayNum,...a[D]===Nr?$.weekDayToday:{}},children:new Date(a[D]+"T00:00").getDate()})]},S)),r.jsx("div",{style:$.weekStreakCol,children:"Streak"})]}),t.map(S=>{var V,xt;const D=((V=kn[S.pillar])==null?void 0:V.dot)||"#9A968C",w=((xt=kn[S.pillar])==null?void 0:xt.soft)||"rgba(0,0,0,0.05)",Y=n(S),lt=S.type==="minimum"&&["week","month","year"].includes(S.period),rt=S.target_count||0,ht=S.logs||[],U=at=>ht.filter(G=>G.slice(0,7)===at).length,H=at=>ht.filter(G=>G.slice(0,4)===at).length,J=a.filter(at=>Y.has(at)).length,P=at=>lt?S.period==="week"?J>=rt:S.period==="month"?U(at.slice(0,7))>=rt:S.period==="year"?H(at.slice(0,4))>=rt:!1:!1,F=lt&&a.some(P),f=S.period==="week"?J:S.period==="month"?U(a[0].slice(0,7)):S.period==="year"?H(a[0].slice(0,4)):0;return r.jsxs("div",{style:$.weekRow,children:[r.jsxs("div",{style:{...$.weekNameCol,flexDirection:"column",alignItems:"flex-start",gap:2},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx("span",{style:{...$.sideDot,background:D}}),r.jsx("span",{style:$.weekHabitName,children:S.name})]}),S.type!=="regular"&&r.jsx("span",{style:$.typeBadge,children:S.type==="minimum"?`≥${S.target_count}/${S.period}`:`≤${S.target_count}/${S.period}`})]}),a.map((at,G)=>{var Ht,be;const ft=Y.has(at),Z=at>Nr,et=(S.type==="minimum"||S.type==="maximum")&&S.period==="day",X=(Ht=S.log_counts)==null?void 0:Ht[at],gt=X!=null,Ct=!!((be=S.log_notes)!=null&&be[at]),W=P(at),bt=G>0&&P(a[G-1]),Et=G<a.length-1&&P(a[G+1]),At=ft||W;return r.jsxs("div",{style:{...$.weekCell,position:"relative"},children:[W&&r.jsx("span",{style:{...$.chainLine,background:D,left:bt?0:"50%",right:Et?0:"50%"}}),r.jsx("button",{disabled:Z,onClick:()=>e(S,at),style:{...$.tick,position:"relative",zIndex:1,...At?{background:D,borderColor:D,color:"#fff"}:{},...et&&gt&&!ft?{borderColor:D,color:D}:{},...Z&&!At?$.tickFuture:{}},children:et?gt?r.jsx("span",{style:{fontSize:12,fontWeight:700},children:X}):null:ft&&r.jsx(Rt,{size:14,color:"#fff",strokeWidth:3})}),Ct&&r.jsx("span",{style:$.cellNoteBubble})]},at)}),r.jsx("div",{style:$.weekStreakCol,children:F?r.jsxs("span",{style:{...$.streakPill,background:w,color:D},children:[r.jsx(Na,{size:12})," ",f,"/",rt]}):r.jsxs("span",{style:{...$.streakPill,background:w,color:D},children:[r.jsx(bo,{size:12})," ",S.streak]})})]},S.id)}),t.length===0&&r.jsx("div",{style:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},children:"No habits yet — add one from the sidebar."})]}),t.length>0&&r.jsxs("div",{style:{...$.progressCard,marginTop:18,marginBottom:0},children:[r.jsx(Dl,{pct:u,label:"Today",sub:`${b}/${t.length} done`,color:"#4C9A6B"}),r.jsx("div",{style:$.progressDivider}),r.jsx(Dl,{pct:I,label:"This week",sub:"of weekly targets",color:"#3A7CA5"}),r.jsx("div",{style:$.progressDivider}),r.jsx(Dl,{pct:M,label:"This month",sub:"of monthly targets",color:"#8268B0"})]})]})}function By({habit:t,dayAction:e,logSet:n,onDelete:o,onEdit:i,setNote:s}){var P,F;const[l,a]=g.useState(null),[d,c]=g.useState(""),[p,y]=g.useState(null),[m,j]=g.useState(0),x=g.useRef(null);if(!t)return null;const k=((P=kn[t.pillar])==null?void 0:P.dot)||"#9A968C",T=((F=kn[t.pillar])==null?void 0:F.soft)||"rgba(0,0,0,0.05)",b=n(t),{dates:u,startOffset:h,label:I,year:v}=jy(m),C=u.filter(f=>f<=Nr&&b.has(f)).length,L=u.filter(f=>f<=Nr).length,A=L>0?Math.round(C/L*100):0,E=t.type==="minimum"&&(t.period==="month"||t.period==="year"),M=t.period==="year"?(t.logs||[]).filter(f=>f.startsWith(`${v}-`)).length:u.filter(f=>b.has(f)).length,S=E&&M>=(t.target_count||0),D=t.type==="minimum"&&t.period==="week",w=t.target_count||0,Y=f=>{const V=new Date(f+"T00:00"),xt=V.getDay(),at=new Date(V);at.setDate(V.getDate()+(xt===0?-6:1-xt));let G=0;for(let ft=0;ft<7;ft++){const Z=new Date(at);Z.setDate(at.getDate()+ft),b.has(rl(Z))&&G++}return G},lt=f=>E?S:D?Y(f)>=w:!1,rt=D?Y(Nr):0,ht=D&&rt>=w,U=f=>{x.current=setTimeout(()=>a(f),500)},H=()=>clearTimeout(x.current),J=f=>{var V;y(f),c(((V=t.log_notes)==null?void 0:V[f])||""),a(null)};return r.jsxs("div",{children:[r.jsxs("div",{style:$.mainHead,children:[r.jsxs("div",{children:[r.jsxs("div",{style:$.eyebrow,children:[r.jsx("span",{style:{...$.sideDot,background:k,marginRight:6}}),t.pillar," · Monthly view"]}),r.jsx("h1",{style:$.h1,children:t.name})]}),r.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[r.jsxs("button",{onClick:i,style:$.actionBtn,children:[r.jsx(he,{size:14})," Edit"]}),r.jsxs("button",{onClick:o,style:{...$.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[r.jsx(zt,{size:14})," Delete"]}),t.reminder_time&&r.jsxs("button",{style:$.actionBtn,children:[r.jsx(mb,{size:14})," ",t.reminder_time]})]})]}),r.jsxs("div",{style:$.statStrip,children:[r.jsx(Dn,{label:"Current streak",value:`${t.streak} days`,c:k,soft:T,flame:!0}),r.jsx(Dn,{label:"Best streak",value:`${t.max_streak??t.streak} days`,c:k,soft:T,flame:!0}),r.jsx(Dn,{label:"Done this month",value:`${C}/${L}`,c:k,soft:T}),r.jsx(Dn,{label:"Completion",value:`${A}%`,c:k,soft:T}),t.type==="regular"?r.jsx(Dn,{label:"Weekly target",value:`${t.target_per_week}×`,c:k,soft:T}):r.jsx(Dn,{label:t.type==="minimum"?"Min target":"Max allowed",value:`${t.target_count}/${t.period}`,c:k,soft:T})]}),r.jsxs("div",{style:$.navBar,children:[r.jsx("button",{onClick:()=>j(f=>f-1),style:$.navBtn,children:r.jsx(Cn,{size:16})}),r.jsxs("span",{style:$.navLabel,children:[I,m===0?" · This month":""]}),r.jsx("button",{onClick:()=>j(f=>Math.min(0,f+1)),disabled:m>=0,style:{...$.navBtn,...m>=0?$.navBtnDisabled:{}},children:r.jsx(nn,{size:16})})]}),E&&r.jsxs("div",{style:{...$.chainBanner,background:S?T:"var(--bg)",color:S?k:"var(--text-3)"},children:[r.jsx(Na,{size:15}),S?`${t.period==="year"?"Yearly":"Monthly"} chain complete — ${M}/${t.target_count} connected`:`${M}/${t.target_count} this ${t.period} · ${(t.target_count||0)-M} more to connect the chain`]}),D&&m===0&&r.jsxs("div",{style:{...$.chainBanner,background:ht?T:"var(--bg)",color:ht?k:"var(--text-3)"},children:[r.jsx(Na,{size:15}),ht?`This week's chain complete — ${rt}/${w} connected`:`${rt}/${w} this week · ${Math.max(0,w-rt)} more to connect the chain`]}),r.jsxs("div",{style:$.monthCard,children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[r.jsx("div",{style:$.monthTitle,children:I}),r.jsx("span",{style:{fontSize:11,color:"var(--text-3)"},children:"Long-press a day for options"})]}),r.jsx("div",{style:$.monthDow,children:Db.map(f=>r.jsx("div",{style:$.monthDowCell,children:f},f))}),r.jsxs("div",{style:$.monthGrid,children:[Array.from({length:h}).map((f,V)=>r.jsx("div",{},`pad${V}`)),u.map((f,V)=>{var Et,At;const xt=V+1,at=b.has(f),G=f>Nr,ft=f===Nr,Z=!!((Et=t.log_notes)!=null&&Et[f]),et=(t.type==="minimum"||t.type==="maximum")&&t.period==="day",X=(At=t.log_counts)==null?void 0:At[f],gt=X!=null,Ct=lt(f),W=Ct&&!at,bt=(h+V)%7;return r.jsxs("div",{style:{position:"relative"},children:[Ct&&r.jsx("span",{style:{...$.chainLine,background:k,...bt===0?{left:"50%"}:{left:-6},...bt===6?{right:"50%"}:{right:-6}}}),r.jsx("button",{disabled:G,onClick:()=>e(t,f),onMouseDown:()=>!et&&U(f),onMouseUp:H,onTouchStart:()=>!et&&U(f),onTouchEnd:H,style:{...$.monthDay,position:"relative",zIndex:1,...at?{background:k,borderColor:k,color:"#fff"}:{},...W?{background:T,borderColor:k,color:k}:{},...et&&gt&&!at?{borderColor:k,color:k}:{},...G&&!at?$.monthDayFuture:{},...ft&&!at?{borderColor:k,borderWidth:2}:{},width:"100%"},children:xt}),et&&gt&&r.jsx("span",{style:{...$.countBadge,background:at?"#4C9A6B":k},children:X}),Z&&r.jsx("span",{style:$.noteIndicator}),l===f&&r.jsx(Ry,{onEdit:i,onDelete:o,onAddNote:()=>J(f),onRemind:i,onClose:()=>a(null)})]},f)})]})]}),p&&r.jsxs("div",{style:$.noteBox,children:[r.jsxs("div",{style:{fontWeight:600,fontSize:13,marginBottom:6},children:["Note for ",p]}),r.jsx("textarea",{value:d,onChange:f=>c(f.target.value),placeholder:"Add a note for this day…",style:{...$.sideInput,minHeight:60,resize:"vertical"}}),r.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[r.jsxs("button",{onClick:()=>{s(p,d),y(null)},style:$.sideAddBtn,children:[r.jsx(Rt,{size:13})," Save"]}),r.jsx("button",{onClick:()=>y(null),style:$.sideCancelBtn,children:r.jsx(zt,{size:13})})]})]})]})}function Ry({onEdit:t,onDelete:e,onAddNote:n,onRemind:o,onClose:i}){return r.jsxs("div",{style:$.longPressMenu,children:[r.jsxs("button",{style:$.menuItem,onClick:()=>{t(),i()},children:[r.jsx(he,{size:13})," Edit"]}),r.jsxs("button",{style:$.menuItem,onClick:()=>{n(),i()},children:[r.jsx(Vd,{size:13})," Add note"]}),r.jsxs("button",{style:$.menuItem,onClick:()=>{o(),i()},children:[r.jsx(mb,{size:13})," Remind"]}),r.jsxs("button",{style:{...$.menuItem,color:"#C2536B"},onClick:()=>{e(),i()},children:[r.jsx(zt,{size:13})," Delete"]})]})}function Dy({habits:t,onSave:e,onClose:n}){const[o,i]=g.useState([...t]),s=(l,a)=>{const d=[...o],c=l+a;c<0||c>=d.length||([d[l],d[c]]=[d[c],d[l]],i(d))};return r.jsx("div",{style:$.modalOverlay,onClick:n,children:r.jsxs("div",{style:{...$.modal,maxHeight:"80vh",overflowY:"auto"},onClick:l=>l.stopPropagation(),children:[r.jsxs("div",{style:$.modalHead,children:["Reorder Habits",r.jsx("button",{onClick:n,style:$.closeBtn,children:r.jsx(zt,{size:16})})]}),r.jsx("p",{style:{fontSize:12,color:"var(--text-3)",margin:"0 0 10px"},children:"Use arrows to set the display order."}),r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:o.map((l,a)=>{var c;const d=((c=kn[l.pillar])==null?void 0:c.dot)||"#9A968C";return r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"9px 10px",background:"var(--bg)",borderRadius:9,border:"1px solid var(--border)"},children:[r.jsx("span",{style:{...$.sideDot,background:d}}),r.jsx("span",{style:{flex:1,fontSize:13,fontWeight:500},children:l.name}),r.jsx("button",{onClick:()=>s(a,-1),disabled:a===0,style:{...$.navBtn,width:28,height:28,opacity:a===0?.3:1,fontSize:14},children:"↑"}),r.jsx("button",{onClick:()=>s(a,1),disabled:a===o.length-1,style:{...$.navBtn,width:28,height:28,opacity:a===o.length-1?.3:1,fontSize:14},children:"↓"})]},l.id)})}),r.jsxs("button",{onClick:()=>e(o.map(l=>l.id)),style:{...$.sideAddBtn,width:"100%",marginTop:14,height:38,justifyContent:"center"},children:[r.jsx(Rt,{size:14})," Save Order"]})]})})}function Ay({year:t}){const[e,n]=g.useState([]);if(g.useEffect(()=>{O.getHabitsYearly(t).then(n).catch(console.error)},[t]),!e.length)return null;const o=Array.from({length:12},(s,l)=>{const a=e.reduce((c,p)=>{var y;return c+(((y=p.monthly[l+1])==null?void 0:y.done)||0)},0),d=e.reduce((c,p)=>{var y;return c+Math.floor((((y=p.monthly[l+1])==null?void 0:y.days)||30)/7*7)},0);return d>0?Math.round(a/d*100):0}),i=Math.max(...o,1);return r.jsxs("div",{style:{...$.monthCard,marginTop:18},children:[r.jsxs("div",{style:$.monthTitle,children:[t," Completion"]}),r.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:6,height:80,marginTop:12},children:o.map((s,l)=>r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[r.jsx("div",{style:{width:"100%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",height:`${s/i*60}px`,minHeight:2,opacity:s>0?1:.15},title:`${s}%`}),r.jsx("span",{style:{fontSize:9,color:"var(--text-3)",fontWeight:600},children:vy[l]})]},l))})]})}function Dn({label:t,value:e,c:n,soft:o,flame:i}){return r.jsxs("div",{style:{...$.stat,background:o},children:[r.jsx("div",{style:$.statLabel,children:t}),r.jsxs("div",{style:{...$.statValue,color:n},children:[i&&r.jsx(bo,{size:15})," ",e]})]})}const $={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:230,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",padding:"20px 12px",display:"flex",flexDirection:"column",gap:3,overflowY:"auto"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.18)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)",boxShadow:"none"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.38)",zIndex:20},sideTop:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 4px"},closeBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",marginBottom:8},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700,padding:"0 6px 14px"},sideItem:{display:"flex",alignItems:"center",gap:9,width:"100%",border:"none",background:"none",padding:"9px 10px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:500,color:"var(--text-2)",textAlign:"left"},sideItemOn:{background:"var(--hover)",fontWeight:600},sideLabel:{flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},sideCount:{fontSize:11,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:10,padding:"1px 7px"},sideStreak:{display:"flex",alignItems:"center",gap:3,fontSize:11,fontWeight:600,color:"#C2773B"},sideDot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},sideDivider:{height:1,background:"var(--border)",margin:"8px 6px"},addBox:{padding:"10px 6px",display:"flex",flexDirection:"column",gap:6},sideInput:{border:"1px solid var(--border)",borderRadius:7,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},sideAddBtn:{border:"none",background:"#4C9A6B",color:"#fff",height:30,padding:"0 12px",borderRadius:7,cursor:"pointer",display:"flex",alignItems:"center",gap:5,fontSize:13,fontFamily:"inherit"},sideCancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:30,height:30,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},sideNewBtn:{display:"flex",alignItems:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",borderRadius:8,padding:"8px 10px",fontSize:12.5,color:"var(--text-3)",fontWeight:600,cursor:"pointer",fontFamily:"inherit",marginTop:6,justifyContent:"center"},main:{flex:1,padding:"26px",overflowX:"hidden",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:200},mainHead:{marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:5,display:"flex",alignItems:"center"},h1:{fontSize:27,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},actionBtn:{display:"flex",alignItems:"center",gap:5,fontSize:12,fontWeight:500,color:"var(--text-2)",border:"1px solid var(--border)",background:"var(--surface)",padding:"5px 10px",borderRadius:7,cursor:"pointer",fontFamily:"inherit"},progressCard:{background:"var(--surface)",borderRadius:12,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14,display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"},progressDivider:{width:1,alignSelf:"stretch",background:"var(--border)",minHeight:48},ringStat:{display:"flex",alignItems:"center",gap:12,flex:"1 1 160px"},ringBox:{position:"relative",width:70,height:70,display:"grid",placeItems:"center",flexShrink:0},ringPct:{position:"absolute",inset:0,display:"grid",placeItems:"center",fontSize:16,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},ringLabel:{fontSize:14,fontWeight:700,color:"var(--text)"},ringSub:{fontSize:11.5,color:"var(--text-3)",fontWeight:500,marginTop:2},weekCard:{background:"var(--surface)",borderRadius:12,padding:"8px 14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"auto"},weekHeadRow:{display:"flex",alignItems:"flex-end",padding:"10px 0",borderBottom:"1px solid var(--border)",minWidth:480},weekNameCol:{width:160,flexShrink:0,display:"flex",alignItems:"center",gap:8},weekDayHead:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:2},weekDayName:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekDayNum:{fontSize:12,fontWeight:600,color:"var(--text-2)",width:22,height:22,display:"grid",placeItems:"center",borderRadius:"50%"},weekDayToday:{background:"var(--accent-strong)",color:"#fff"},weekStreakCol:{width:64,flexShrink:0,textAlign:"center",fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekRow:{display:"flex",alignItems:"center",padding:"9px 0",borderBottom:"1px solid #F4F2EC",minWidth:480},weekHabitName:{fontSize:13,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},weekCell:{flex:1,display:"grid",placeItems:"center"},typeBadge:{fontSize:10,color:"var(--text-3)",background:"var(--hover)",padding:"1px 6px",borderRadius:8,fontWeight:600},tick:{width:26,height:26,borderRadius:7,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",padding:0},tickFuture:{opacity:.4,cursor:"not-allowed",borderStyle:"dashed"},streakPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:12,fontWeight:700,padding:"3px 9px",borderRadius:12},tinyBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:"2px 3px",display:"grid",placeItems:"center",borderRadius:4},statStrip:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(120px,1fr))",gap:10,marginBottom:18},stat:{borderRadius:10,padding:"13px 14px"},statLabel:{fontSize:11,fontWeight:600,color:"var(--text-2)",marginBottom:5},statValue:{fontSize:19,fontWeight:700,display:"flex",alignItems:"center",gap:5,fontFamily:"'Fraunces',Georgia,serif"},monthCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},monthTitle:{fontSize:14,fontWeight:700,marginBottom:12,fontFamily:"'Fraunces',Georgia,serif"},monthDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6,marginBottom:8},monthDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},monthGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6},monthDay:{aspectRatio:"1",border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",display:"grid",placeItems:"center"},monthDayFuture:{opacity:.4,cursor:"not-allowed",background:"var(--surface-2)"},noteIndicator:{position:"absolute",top:3,right:3,width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},cellNoteBubble:{position:"absolute",top:2,right:"calc(50% - 16px)",width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},countBadge:{position:"absolute",bottom:2,right:2,minWidth:13,height:13,padding:"0 2px",borderRadius:7,color:"#fff",fontSize:9,fontWeight:700,display:"grid",placeItems:"center",lineHeight:1},counterBtn:{width:44,height:44,borderRadius:"50%",border:"1.5px solid var(--border)",background:"var(--surface)",color:"var(--text)",fontSize:24,fontWeight:700,cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit",lineHeight:1},chainLine:{position:"absolute",top:"calc(50% - 3px)",left:0,right:0,height:6,zIndex:0,opacity:.9},chainBanner:{display:"flex",alignItems:"center",gap:8,borderRadius:10,padding:"10px 14px",marginBottom:14,fontSize:12.5,fontWeight:700,fontFamily:"'Inter',system-ui,sans-serif"},navBar:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:16},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},navLabel:{fontSize:13,fontWeight:700,color:"var(--text)",minWidth:180,textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},noteBox:{background:"var(--surface)",borderRadius:10,padding:14,marginTop:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},longPressMenu:{position:"absolute",top:"100%",left:0,zIndex:50,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 4px 16px rgba(0,0,0,0.12)",padding:"4px 0",minWidth:140},menuItem:{display:"flex",alignItems:"center",gap:8,width:"100%",border:"none",background:"none",padding:"8px 14px",fontSize:13,color:"var(--text)",cursor:"pointer",fontFamily:"inherit",textAlign:"left"},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",zIndex:100,display:"grid",placeItems:"center"},modal:{background:"var(--surface)",borderRadius:14,padding:24,width:320,maxWidth:"90vw",display:"flex",flexDirection:"column",gap:8},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",fontWeight:700,fontSize:16,fontFamily:"'Fraunces',Georgia,serif",marginBottom:6},modalLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.08em",marginTop:4}},Ua=[{id:1,label:"Rough",emoji:"😣",color:"#C2536B"},{id:2,label:"Low",emoji:"🙁",color:"#C2773B"},{id:3,label:"Okay",emoji:"😐",color:"#C9A227"},{id:4,label:"Good",emoji:"🙂",color:"#4C9A6B"},{id:5,label:"Great",emoji:"😄",color:"#3A7CA5"}],Fy=t=>Ua.find(e=>e.id===t),Al=[{id:"wins",label:"Wins",hint:"What went well today?",icon:Rr,color:"#C9A227"},{id:"grateful",label:"Grateful for",hint:"1–3 things",icon:Wh,color:"#C2536B"},{id:"mattered",label:"What mattered",hint:"The point of today",icon:Kd,color:"#3A7CA5"},{id:"letgo",label:"Letting go of",hint:"Offload what's draining",icon:oy,color:"#8268B0"},{id:"tomorrow",label:"Tomorrow's one thing",hint:"A single priority",icon:Zh,color:"#4C9A6B"}],Ab=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,My=()=>Ab(new Date),Fl=t=>new Date(t+"T00:00:00").toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long",year:"numeric"});function Wy(){const t=My(),[e,n]=[new Date().getFullYear(),new Date().getMonth()+1],[o,i]=g.useState(null),s=o||t,l=s===t,[a,d]=g.useState(null),[c,p]=g.useState({}),[y,m]=g.useState(Object.fromEntries(Al.map(E=>[E.id,""]))),j=g.useCallback(async E=>{const M=await O.getJournalEntry(E);d(M)},[]);g.useCallback(async()=>{const E=await O.getJournalHistory(e,n);p(E)},[e,n]);const x=g.useCallback(async()=>{const[E,M]=await Promise.all([O.getJournalEntry(s),O.getJournalHistory(e,n)]);d(E),p(M)},[s,e,n]);g.useEffect(()=>{x()},[x]);const k=async E=>{l&&(await O.updateJournalMood(s,E),x())},T=async E=>{if(!l)return;const M=y[E].trim();M&&(await O.addJournalBullet(s,E,M),m(S=>({...S,[E]:""})),j(s))},b=async E=>{await O.deleteJournalBullet(E),j(s)},u=E=>{i(E===t?null:E),m(Object.fromEntries(Al.map(M=>[M.id,""])))};if(!a)return r.jsx("div",{style:{padding:28,color:"var(--text-3)"},children:"Loading…"});const h=a.mood!==null,I=(()=>{let E=0;const M=new Date(t);if(c[t]||l&&h)E=1,M.setDate(M.getDate()-1);else return 0;for(;;){const D=Ab(M);if(c[D])E++,M.setDate(M.getDate()-1);else break}return E})(),v=Object.values(a.bullets||{}).reduce((E,M)=>E+M.length,0),C=new Date(e,n,0).getDate(),L=new Date(e,n-1,1).getDay(),A=L===0?6:L-1;return r.jsxs("div",{style:Bt.page,children:[r.jsxs("div",{style:Bt.head,children:[r.jsxs("div",{children:[r.jsx("div",{style:Bt.eyebrow,children:"Anvil · Journal"}),!l&&r.jsxs("button",{style:Bt.backBtn,onClick:()=>i(null),children:[r.jsx(Cn,{size:14})," Back to Today"]}),r.jsx("h1",{style:Bt.h1,children:l?"Today":Fl(s)}),l&&r.jsx("div",{style:Bt.date,children:Fl(t)})]}),r.jsxs("div",{style:Bt.streakBox,children:[r.jsx(bo,{size:16,color:"#C2773B"}),r.jsx("span",{style:Bt.streakNum,children:I}),r.jsx("span",{style:Bt.streakLabel,children:"day streak"})]})]}),r.jsxs("div",{style:Bt.card,children:[r.jsxs("div",{style:Bt.cardTitle,children:["How ",l?"are":"were"," you?"]}),r.jsx("div",{style:Bt.moodRow,children:Ua.map(E=>{const M=a.mood===E.id;return r.jsxs("button",{onClick:()=>k(E.id),disabled:!l,style:{...Bt.moodBtn,cursor:l?"pointer":"default",...M?{background:E.color,borderColor:E.color,transform:"translateY(-2px)"}:{},...!l&&!M?{opacity:.55}:{}},children:[r.jsx("span",{style:Bt.moodEmoji,children:E.emoji}),r.jsx("span",{style:{...Bt.moodLabel,color:M?"#fff":"#6B675E"},children:E.label})]},E.id)})})]}),Al.map(E=>{var D;const M=E.icon,S=((D=a.bullets)==null?void 0:D[E.id])||[];return r.jsxs("div",{style:Bt.card,children:[r.jsxs("div",{style:Bt.sectionHead,children:[r.jsx("span",{style:{...Bt.sectionIcon,background:`${E.color}1A`,color:E.color},children:r.jsx(M,{size:15})}),r.jsxs("div",{children:[r.jsx("div",{style:Bt.cardTitle,children:E.label}),r.jsx("div",{style:Bt.sectionHint,children:E.hint})]})]}),r.jsxs("ul",{style:Bt.bulletList,children:[S.map(w=>r.jsxs("li",{style:Bt.bullet,children:[r.jsx("span",{style:{...Bt.bulletDot,background:E.color}}),r.jsx("span",{style:Bt.bulletText,children:w.text}),l&&r.jsx("button",{onClick:()=>b(w.id),style:Bt.bulletDel,children:r.jsx(zt,{size:13})})]},w.id)),!l&&S.length===0&&r.jsx("li",{style:Bt.sectionHint,children:"Nothing written."})]}),l&&r.jsxs("div",{style:Bt.addRow,children:[r.jsx("input",{placeholder:"Add a point…",value:y[E.id],onChange:w=>m(Y=>({...Y,[E.id]:w.target.value})),onKeyDown:w=>w.key==="Enter"&&T(E.id),style:Bt.input}),r.jsx("button",{onClick:()=>T(E.id),style:{...Bt.addBtn,background:E.color},children:r.jsx(ae,{size:16})})]})]},E.id)}),r.jsxs("div",{style:Bt.card,children:[r.jsxs("div",{style:Bt.cardTitle,children:[new Date(e,n-1).toLocaleDateString("en-US",{month:"long",year:"numeric"})," · Mood history",r.jsx("span",{style:{fontSize:11,color:"var(--text-3)",fontWeight:400,marginLeft:8},children:"tap a day to view"})]}),r.jsx("div",{style:Bt.calDow,children:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(E=>r.jsx("div",{style:Bt.calDowCell,children:E},E))}),r.jsxs("div",{style:Bt.calGrid,children:[Array.from({length:A}).map((E,M)=>r.jsx("div",{},`p${M}`)),Array.from({length:C},(E,M)=>M+1).map(E=>{const M=`${e}-${String(n).padStart(2,"0")}-${String(E).padStart(2,"0")}`,S=M===t&&a.mood?a.mood:c[M],D=S?Fy(S):null,w=M>t,Y=M===s;return r.jsx("button",{onClick:()=>!w&&u(M),disabled:w,style:{...Bt.calDay,background:D?D.color:w?"var(--surface-2)":"var(--surface)",borderColor:Y?"var(--accent-strong)":"var(--border)",borderWidth:Y?2:1,color:D?"#fff":"var(--text-3)",opacity:w?.5:1,cursor:w?"not-allowed":"pointer",outline:Y?"2px solid var(--accent-strong)":"none",outlineOffset:1},title:D?D.label:M,children:D?D.emoji:E},E)})]}),r.jsx("div",{style:Bt.legend,children:Ua.map(E=>r.jsxs("span",{style:Bt.legendItem,children:[r.jsx("span",{style:{...Bt.legendDot,background:E.color}})," ",E.label]},E.id))})]}),r.jsx("div",{style:Bt.footer,children:l?h?`Mood set · ${v} point${v===1?"":"s"} written today`:"Tap a mood to log today and keep your streak":`Viewing ${Fl(s)} · past entries are read-only`})]})}const Bt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:22},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},backBtn:{display:"inline-flex",alignItems:"center",gap:4,border:"none",background:"none",color:"#3A7CA5",fontSize:12.5,fontWeight:600,cursor:"pointer",padding:"0 0 6px",fontFamily:"inherit"},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},date:{fontSize:13,color:"var(--text-3)",marginTop:4},streakBox:{display:"flex",alignItems:"center",gap:6,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"8px 14px"},streakNum:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"#C2773B"},streakLabel:{fontSize:11,color:"var(--text-3)",fontWeight:500},card:{background:"var(--surface)",borderRadius:12,padding:"18px 20px",marginBottom:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},cardTitle:{fontSize:14,fontWeight:700,marginBottom:12,color:"var(--text)"},moodRow:{display:"flex",gap:8,flexWrap:"wrap"},moodBtn:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,border:"2px solid var(--border)",background:"var(--surface)",borderRadius:10,padding:"10px 12px",cursor:"pointer",flex:"1 1 60px",transition:"transform 0.1s"},moodEmoji:{fontSize:22},moodLabel:{fontSize:11,fontWeight:600},sectionHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:10},sectionIcon:{width:32,height:32,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},sectionHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},bulletList:{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6,marginBottom:10},bullet:{display:"flex",alignItems:"center",gap:8,fontSize:13.5,lineHeight:1.4},bulletDot:{width:6,height:6,borderRadius:"50%",flexShrink:0},bulletText:{flex:1},bulletDel:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},addRow:{display:"flex",gap:8},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 12px",fontSize:13.5,fontFamily:"inherit",outline:"none"},addBtn:{width:36,height:36,border:"none",borderRadius:8,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:12},calDay:{aspectRatio:"1",border:"1px solid var(--border)",borderRadius:7,fontSize:13,display:"grid",placeItems:"center",fontWeight:500,fontFamily:"inherit"},legend:{display:"flex",gap:10,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)"},legendDot:{width:8,height:8,borderRadius:"50%",display:"inline-block"},footer:{fontSize:12.5,color:"var(--text-3)",textAlign:"center",marginTop:8,fontStyle:"italic"}};function Ly(t=760){const[e,n]=g.useState(()=>window.innerWidth<t);return g.useEffect(()=>{const o=()=>n(window.innerWidth<t);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[t]),e}const er=[{id:"D",label:"Data",color:"#3A7CA5",soft:"rgba(58,124,165,0.10)",prompt:"What did you read/watch? Log the raw source and a quick note.",hint:"e.g. 'Atomic Habits ch.1 — habits are systems not goals'"},{id:"I",label:"Information",color:"#8268B0",soft:"rgba(130,104,176,0.10)",prompt:"What did you actually understand from it? In your own words.",hint:"e.g. 'Small 1% improvements compound into massive change over time'"},{id:"K",label:"Knowledge",color:"#C9A227",soft:"rgba(201,162,39,0.10)",prompt:"How will this specifically improve your life? Connect it to your goals.",hint:"e.g. 'I will improve my morning workout habit by 1% each week'"},{id:"W",label:"Wisdom",color:"#4C9A6B",soft:"rgba(76,154,107,0.10)",prompt:"How have you implemented it? What changed?",hint:"e.g. 'I've not missed a workout in 3 weeks using the 1% rule'"}],Cg=t=>er.findIndex(e=>e.id===t),Ya=[{id:"book",label:"Book",icon:Yd},{id:"video",label:"Video",icon:iy},{id:"article",label:"Article",icon:Vd}],Ig=t=>Ya.find(e=>e.id===t)||Ya[0],Ml={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"};function _y(){var Ct;const[t,e]=g.useState([]),[n,o]=g.useState(null),[i,s]=g.useState("ALL"),[l,a]=g.useState(!1),[d,c]=g.useState(null),[p,y]=g.useState({title:"",type:"book",pillar:"Academic",note:""}),[m,j]=g.useState({}),[x,k]=g.useState(null),[T,b]=g.useState(null),[u,h]=g.useState({}),[I,v]=g.useState({}),[C,L]=g.useState(null),A=Ly(),E=g.useCallback(async()=>{try{const W=await O.getSkills();e(W);const bt={};W.forEach(Et=>{bt[Et.id]=Object.fromEntries(er.map(At=>[At.id,""]))}),j(Et=>{const At={...bt};return W.forEach(Ht=>{Et[Ht.id]&&(At[Ht.id]={...bt[Ht.id],...Et[Ht.id]})}),At})}catch(W){console.error(W)}},[]);g.useEffect(()=>{E()},[E]);const M=t.find(W=>W.id===n),S=M?Cg(M.stage):-1,D=async(W,bt)=>{var At;const Et=(((At=m[W])==null?void 0:At[bt])??"").trim();Et&&(await O.addSkillNote(W,bt,Et),j(Ht=>({...Ht,[W]:{...Ht[W],[bt]:""}})),E())},w=async W=>{await O.deleteSkillNote(W),E()},Y=W=>(W==null?void 0:W.source_type)==="book"?"Chapter":"Learning",lt=()=>`g${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,rt=async W=>{const bt=[...W.data_groups||[]];bt.push({id:lt(),label:`${Y(W)} ${bt.length+1}`}),await O.setSkillGroups(W.id,bt),v(Et=>({...Et,[bt[bt.length-1].id]:!0})),E()},ht=async(W,bt,Et)=>{const At=(W.data_groups||[]).map(Ht=>Ht.id===bt?{...Ht,label:Et}:Ht);await O.setSkillGroups(W.id,At),E()},U=async(W,bt)=>{const Et=(W.data_groups||[]).filter(At=>At.id!==bt);await O.setSkillGroups(W.id,Et),E()},H=async(W,bt)=>{const Et=(u[bt]??"").trim();Et&&(await O.addSkillNote(W.id,"D",Et,bt),h(At=>({...At,[bt]:""})),E())},J=async()=>{!M||!(T!=null&&T.trim())||(await O.updateSkill(M.id,{title:T.trim()}),b(null),E())},P=async()=>{!x||!x.text.trim()||(await O.updateSkillNote(x.id,x.text.trim()),k(null),E())},F=async W=>{await O.toggleSkillNote(W),E()},f=async(W,bt)=>{t.find(At=>At.id===W)&&(bt==="W"&&c(W),await O.completeSkillStage(W,bt),E())},V=async()=>{if(!p.title.trim())return;const W=await O.createSkill({pillar:p.pillar,title:p.title.trim(),source_type:p.type,note_d:p.note.trim()});a(!1),y({title:"",type:"book",pillar:"Academic",note:""}),o(W.id),E()},{deleteItem:xt,toasts:at,handleUndo:G,handleDismiss:ft}=Ar(O.deleteSkill,O.restoreSkill,E),Z=(W,bt="Skill")=>{n===W&&o(null),xt(W,bt)},et=i==="ALL"?t:t.filter(W=>W.stage===i),X=t.filter(W=>W.stage==="W").length,gt=!!M;return r.jsxs("div",{style:q.page,children:[d&&r.jsx("div",{style:q.celebOverlay,children:r.jsxs("div",{style:q.celebBox,children:[r.jsx("div",{style:q.celebEmoji,children:"🏆"}),r.jsx("div",{style:q.celebTitle,children:"Wisdom unlocked!"}),r.jsx("div",{style:q.celebSub,children:"You've implemented this knowledge — that's rare and real."}),r.jsx("button",{onClick:()=>c(null),style:q.celebBtn,children:"Continue"})]})}),r.jsxs("div",{style:q.head,children:[r.jsxs("div",{children:[r.jsx("div",{style:q.eyebrow,children:"Anvil · Skills"}),r.jsx("h1",{style:q.h1,children:"DIKW Skills"}),r.jsx("div",{style:q.subhead,children:"Data → Information → Knowledge → Wisdom"})]}),r.jsxs("div",{style:q.headRight,children:[r.jsxs("div",{style:q.wisdomBadge,children:[r.jsx(Rr,{size:14,color:"#C9A227"})," ",X," Wisdom",X!==1?"s":""]}),r.jsxs("button",{onClick:()=>{a(!0),o(null)},style:q.addSkillBtn,children:[r.jsx(ae,{size:15})," Add skill"]})]})]}),r.jsx("div",{style:q.filterBar,children:["ALL",...er.map(W=>W.id)].map(W=>{const bt=er.find(At=>At.id===W),Et=i===W;return r.jsx("button",{onClick:()=>s(W),style:{...q.filterBtn,...Et?{background:bt?bt.color:"var(--accent-strong)",color:"#fff",borderColor:"transparent"}:{}},children:bt?`${W} · ${bt.label}`:"All"},W)})}),r.jsxs("div",{style:{...q.layout,gridTemplateColumns:!A&&gt?"minmax(0,1fr) minmax(0,1fr)":"1fr"},children:[(!A||!M)&&r.jsxs("div",{style:{...q.cardList,gridTemplateColumns:A||gt?"1fr":"repeat(3, minmax(0, 1fr))"},children:[l&&r.jsxs("div",{style:{...q.skillCard,border:"2px dashed #3A7CA5",gridColumn:"1 / -1"},children:[r.jsx("div",{style:q.cardTitle,children:"New skill"}),r.jsx("input",{placeholder:"Title (book / video / article name)",value:p.title,onChange:W=>y(bt=>({...bt,title:W.target.value})),onKeyDown:W=>W.key==="Enter"&&V(),style:q.input,autoFocus:!0}),r.jsxs("div",{style:q.addRow,children:[r.jsx("select",{value:p.type,onChange:W=>y(bt=>({...bt,type:W.target.value})),style:q.select,children:Ya.map(W=>r.jsx("option",{value:W.id,children:W.label},W.id))}),r.jsx("select",{value:p.pillar,onChange:W=>y(bt=>({...bt,pillar:W.target.value})),style:q.select,children:Object.keys(Ml).map(W=>r.jsx("option",{children:W},W))})]}),r.jsxs("div",{style:q.addRow,children:[r.jsxs("button",{onClick:V,style:q.saveBtn,children:[r.jsx(Rt,{size:14})," Save"]}),r.jsxs("button",{onClick:()=>a(!1),style:q.cancelBtn,children:[r.jsx(zt,{size:14})," Cancel"]})]})]}),et.map(W=>{const bt=Cg(W.stage),Et=er[bt],At=Ig(W.source_type),Ht=W.stage==="W",be=n===W.id;return r.jsxs("div",{onClick:()=>o(be?null:W.id),style:{...q.skillCard,...be?{borderColor:Et.color,borderWidth:2}:{},...Ht?{background:"rgba(76,154,107,0.05)"}:{}},children:[r.jsxs("div",{style:q.skillCardTop,children:[r.jsxs("div",{style:q.skillMeta,children:[r.jsx("span",{style:{color:Ml[W.pillar]},children:r.jsx(At.icon,{size:13})}),r.jsx("span",{style:{...q.pillarDot,background:Ml[W.pillar]}}),r.jsxs("span",{style:q.srcLabel,children:[At.label," · ",W.pillar]})]}),r.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[Ht&&r.jsx(vi,{size:14,color:"#4C9A6B"}),r.jsx("button",{onClick:Mt=>{Mt.stopPropagation(),Z(W.id,W.title)},style:q.ghostBtn,children:r.jsx(zt,{size:13})})]})]}),r.jsx("div",{style:q.skillTitle,children:W.title}),r.jsxs("div",{style:q.track,children:[er.map((Mt,Jt)=>{var Se;const de=Jt<bt,je=Jt===bt,Ue=(Se=W.completed_stages)==null?void 0:Se[Mt.id];return r.jsxs("div",{style:{...q.trackItem,...Jt<er.length-1?{flex:1}:{}},children:[r.jsxs("div",{style:{...q.trackDot,background:de||Ue||je?Mt.color:"var(--border)",boxShadow:je?`0 0 0 3px ${Mt.color}33`:"none"},children:[(de||je&&Ue)&&r.jsx(Rt,{size:9,color:"#fff",strokeWidth:3}),je&&!Ue&&r.jsx("span",{style:q.trackCurrent,children:Mt.id}),!de&&!je&&r.jsx(fg,{size:8,color:"#B5B1A7"})]}),Jt<er.length-1&&r.jsx("div",{style:{...q.trackLine,background:de?er[Jt+1].color:"var(--border)"}})]},Mt.id)}),r.jsx("span",{style:{...q.stageTag,background:Et.soft,color:Et.color},children:Et.label})]})]},W.id)}),et.length===0&&!l&&r.jsx("div",{style:{...q.empty,gridColumn:"1 / -1"},children:"No skills at this stage yet."})]}),M&&r.jsxs("div",{style:q.detail,children:[r.jsxs("div",{style:q.detailHead,children:[A&&r.jsx("button",{onClick:()=>{o(null),b(null)},style:q.backBtn,title:"Back to skills",children:r.jsx(Cn,{size:18})}),r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsxs("div",{style:q.eyebrow,children:[Ig(M.source_type).label," · ",M.pillar]}),T!==null?r.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",marginTop:4},children:[r.jsx("input",{autoFocus:!0,value:T,onChange:W=>b(W.target.value),onKeyDown:W=>{W.key==="Enter"&&J(),W.key==="Escape"&&b(null)},style:{...q.input,fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:0,flex:1}}),r.jsx("button",{onClick:J,style:{...q.noteAddBtn,background:"#4C9A6B",width:30,height:30},children:r.jsx(Rt,{size:13})}),r.jsx("button",{onClick:()=>b(null),style:{...q.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:30,height:30},children:r.jsx(zt,{size:13})})]}):r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx("div",{style:q.detailTitle,children:M.title}),r.jsx("button",{onClick:()=>b(M.title),style:q.ghostBtn,title:"Edit name",children:r.jsx(he,{size:13})})]})]}),r.jsx("button",{onClick:()=>{o(null),b(null)},style:q.closeBtn,children:r.jsx(zt,{size:16})})]}),er.map((W,bt)=>{var de,je,Ue;const Et=bt<=S,At=bt===S,Ht=bt<S||((de=M.completed_stages)==null?void 0:de[W.id]),be=bt>S,Mt=((je=M.notes)==null?void 0:je[W.id])||[],Jt=((Ue=m[M.id])==null?void 0:Ue[W.id])??"";return r.jsxs("div",{style:{...q.stageBlock,...Et?{borderColor:W.color}:{},opacity:be?.45:1},children:[r.jsxs("div",{style:q.stageBlockHead,children:[r.jsx("div",{style:{...q.stageLetter,background:Et?W.color:"var(--border)",color:Et?"#fff":"#9A968C"},children:Ht&&!At?r.jsx(Rt,{size:12,color:"#fff",strokeWidth:3}):be?r.jsx(fg,{size:11,color:"#9A968C"}):W.id}),r.jsxs("div",{style:{flex:1},children:[r.jsx("div",{style:{...q.stageName,color:Et?W.color:"#9A968C"},children:W.label}),Et&&r.jsx("div",{style:q.stagePrompt,children:W.prompt})]}),Ht&&!At&&r.jsx("span",{style:{...q.doneBadge,color:W.color,background:W.soft},children:"Done"})]}),Et&&(()=>{var Pt,Re;const Se=W.id==="W",mo=W.id==="D",In=Mt.length>0&&Mt.every(wt=>wt.done),Ce=Se?In:Mt.length>0,Mr=M.data_groups||[],mr=Mt.filter(wt=>!wt.grp),B=Y(M),vt=wt=>r.jsxs("li",{style:q.noteItem,children:[r.jsx("span",{style:{...q.noteDot,background:W.color}}),(x==null?void 0:x.id)===wt.id?r.jsxs("div",{style:{flex:1,display:"flex",gap:5},children:[r.jsx("input",{autoFocus:!0,value:x.text,onChange:$t=>k(De=>({...De,text:$t.target.value})),onKeyDown:$t=>{$t.key==="Enter"&&P(),$t.key==="Escape"&&k(null)},style:{...q.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}),r.jsx("button",{onClick:P,style:{...q.noteAddBtn,background:W.color,width:28,height:28},children:r.jsx(Rt,{size:12})}),r.jsx("button",{onClick:()=>k(null),style:{...q.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:28,height:28},children:r.jsx(zt,{size:12})})]}):r.jsx("span",{style:q.noteText,children:wt.text}),(x==null?void 0:x.id)!==wt.id&&r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:()=>k({id:wt.id,text:wt.text}),style:q.ghostBtn,children:r.jsx(he,{size:12})}),r.jsx("button",{onClick:()=>w(wt.id),style:q.ghostBtn,children:r.jsx(zt,{size:12})})]})]},wt.id);return r.jsxs(r.Fragment,{children:[mo?r.jsxs(r.Fragment,{children:[mr.length>0&&r.jsx("ul",{style:q.noteList,children:mr.map(vt)}),Mr.map(wt=>{const $t=Mt.filter(Ft=>Ft.grp===wt.id),De=I[wt.id]!==!1;return r.jsxs("div",{style:{...q.groupBox,borderColor:`${W.color}55`},children:[r.jsxs("div",{style:q.groupHead,children:[r.jsx("button",{onClick:()=>v(Ft=>({...Ft,[wt.id]:!De})),style:q.groupCaret,children:De?r.jsx(xi,{size:15}):r.jsx(nn,{size:15})}),M.source_type==="book"?r.jsx(Yd,{size:13,color:W.color}):r.jsx(Nh,{size:13,color:W.color}),(C==null?void 0:C.id)===wt.id?r.jsx("input",{autoFocus:!0,value:C.label,onChange:Ft=>L(on=>({...on,label:Ft.target.value})),onKeyDown:Ft=>{Ft.key==="Enter"&&(ht(M,wt.id,C.label.trim()||wt.label),L(null)),Ft.key==="Escape"&&L(null)},onBlur:()=>{ht(M,wt.id,C.label.trim()||wt.label),L(null)},style:{...q.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}):r.jsx("span",{style:q.groupTitle,onClick:()=>L({id:wt.id,label:wt.label}),title:"Click to rename",children:wt.label}),r.jsx("span",{style:q.groupCount,children:$t.length}),r.jsx("button",{onClick:()=>U(M,wt.id),style:q.ghostBtn,title:`Delete ${B.toLowerCase()}`,children:r.jsx(zt,{size:13})})]}),De&&r.jsxs("div",{style:q.groupBody,children:[$t.length>0&&r.jsx("ul",{style:q.noteList,children:$t.map(vt)}),r.jsxs("div",{style:q.noteAddRow,children:[r.jsx("input",{placeholder:"Add a point…",value:u[wt.id]??"",onChange:Ft=>h(on=>({...on,[wt.id]:Ft.target.value})),onKeyDown:Ft=>Ft.key==="Enter"&&H(M,wt.id),style:q.noteInput}),r.jsx("button",{onClick:()=>H(M,wt.id),style:{...q.noteAddBtn,background:W.color},children:r.jsx(ae,{size:14})})]})]})]},wt.id)}),Mr.length===0&&mr.length===0&&r.jsxs("div",{style:q.noNotes,children:["No ",B.toLowerCase(),"s yet — add one to start logging points."]}),r.jsxs("button",{onClick:()=>rt(M),style:{...q.addGroupBtn,color:W.color,borderColor:`${W.color}80`},children:[r.jsx(ae,{size:14})," Add ",B.toLowerCase()]})]}):r.jsxs(r.Fragment,{children:[Mt.length>0&&r.jsx("ul",{style:q.noteList,children:Mt.map(wt=>r.jsxs("li",{style:q.noteItem,children:[Se?r.jsx("button",{onClick:()=>F(wt.id),style:{...q.checkBox,...wt.done?{background:W.color,borderColor:W.color}:{}},children:wt.done&&r.jsx(Rt,{size:11,color:"#fff",strokeWidth:3})}):r.jsx("span",{style:{...q.noteDot,background:W.color}}),(x==null?void 0:x.id)===wt.id?r.jsxs("div",{style:{flex:1,display:"flex",gap:5},children:[r.jsx("input",{autoFocus:!0,value:x.text,onChange:$t=>k(De=>({...De,text:$t.target.value})),onKeyDown:$t=>{$t.key==="Enter"&&P(),$t.key==="Escape"&&k(null)},style:{...q.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}),r.jsx("button",{onClick:P,style:{...q.noteAddBtn,background:W.color,width:28,height:28},children:r.jsx(Rt,{size:12})}),r.jsx("button",{onClick:()=>k(null),style:{...q.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:28,height:28},children:r.jsx(zt,{size:12})})]}):r.jsx("span",{style:{...q.noteText,...Se&&wt.done?{textDecoration:"line-through",color:"var(--text-3)"}:{}},children:wt.text}),(x==null?void 0:x.id)!==wt.id&&r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:()=>k({id:wt.id,text:wt.text}),style:q.ghostBtn,children:r.jsx(he,{size:12})}),r.jsx("button",{onClick:()=>w(wt.id),style:q.ghostBtn,children:r.jsx(zt,{size:12})})]})]},wt.id))}),Mt.length===0&&r.jsx("div",{style:q.noNotes,children:Se?"Add the steps to implement this — check each off as you do it.":`No notes yet — ${W.hint}`}),r.jsxs("div",{style:q.noteAddRow,children:[r.jsx("input",{placeholder:Se?"Add a step to implement…":`Add a ${W.label} note…`,value:Jt,onChange:wt=>j($t=>({...$t,[M.id]:{...$t[M.id],[W.id]:wt.target.value}})),onKeyDown:wt=>wt.key==="Enter"&&D(M.id,W.id),style:q.noteInput}),r.jsx("button",{onClick:()=>D(M.id,W.id),style:{...q.noteAddBtn,background:W.color},children:r.jsx(ae,{size:14})})]})]}),At&&!((Pt=M.completed_stages)!=null&&Pt[W.id])&&r.jsxs(r.Fragment,{children:[Se&&Mt.length>0&&!In&&r.jsxs("div",{style:q.checklistHint,children:[Mt.filter(wt=>wt.done).length,"/",Mt.length," done — check all steps to complete Wisdom"]}),r.jsxs("button",{onClick:()=>f(M.id,W.id),disabled:!Ce,style:{...q.advanceBtn,background:Ce?W.color:"#C3BFB5",marginTop:10,cursor:Ce?"pointer":"not-allowed"},children:[r.jsx(Rt,{size:14}),Se?"Mark Wisdom complete":`Complete ${W.label} → ${(Re=er[bt+1])==null?void 0:Re.label}`]})]})]})})()]},W.id)}),M.stage==="W"&&((Ct=M.completed_stages)==null?void 0:Ct.W)&&r.jsxs("div",{style:q.wisdomDone,children:[r.jsx(Rr,{size:16,color:"#4C9A6B"})," Wisdom achieved — implemented in your life"]})]})]}),r.jsx(Fr,{toasts:at,onUndo:G,onDismiss:ft})]})}const q={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box",position:"relative"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},headRight:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},wisdomBadge:{display:"flex",alignItems:"center",gap:5,background:"rgba(201,162,39,0.12)",border:"1px solid rgba(201,162,39,0.3)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:700,color:"#8A6E1A"},addSkillBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},filterBar:{display:"flex",gap:6,flexWrap:"wrap",marginBottom:16},filterBtn:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},layout:{display:"grid",gap:12,alignItems:"start"},cardList:{display:"grid",gap:10,alignContent:"start"},skillCard:{background:"var(--surface)",borderRadius:12,padding:"16px",border:"1.5px solid var(--border)",cursor:"pointer",boxShadow:"0 1px 2px rgba(0,0,0,0.04)",minWidth:0,overflow:"hidden",boxSizing:"border-box"},skillCardTop:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:8,marginBottom:6},skillMeta:{display:"flex",alignItems:"center",gap:6,minWidth:0},pillarDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},srcLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},skillTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em",marginBottom:12,lineHeight:1.3,wordBreak:"break-word"},cardTitle:{fontSize:13,fontWeight:700,marginBottom:10},track:{display:"flex",alignItems:"center",minWidth:0},trackItem:{display:"flex",alignItems:"center",minWidth:0},trackDot:{width:22,height:22,borderRadius:"50%",display:"grid",placeItems:"center",flexShrink:0},trackCurrent:{fontSize:9,fontWeight:800,color:"#fff"},trackLine:{flex:1,minWidth:8,height:3,borderRadius:2,margin:"0 2px"},stageTag:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:12,marginLeft:8,flexShrink:0,whiteSpace:"nowrap"},detail:{background:"var(--surface)",borderRadius:14,padding:"18px 16px",boxShadow:"0 1px 4px rgba(0,0,0,0.07)",border:"1.5px solid var(--border)",alignSelf:"start"},detailHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16},detailTitle:{fontSize:18,fontWeight:700,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},backBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,marginRight:4},groupBox:{border:"1.5px solid var(--border)",borderRadius:9,marginBottom:8,overflow:"hidden",background:"var(--bg)"},groupHead:{display:"flex",alignItems:"center",gap:7,padding:"8px 10px"},groupCaret:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",display:"grid",placeItems:"center",padding:0,width:18,height:18,flexShrink:0},groupTitle:{flex:1,minWidth:0,fontSize:13,fontWeight:700,color:"var(--text)",cursor:"text",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},groupCount:{fontSize:10.5,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 7px",flexShrink:0},groupBody:{padding:"0 10px 10px 10px"},addGroupBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1.5px dashed",background:"none",padding:"9px 12px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:2},stageBlock:{border:"1.5px solid var(--border)",borderRadius:10,padding:"12px 13px",marginBottom:10},stageBlockHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:8},stageLetter:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",fontSize:13,fontWeight:800,flexShrink:0},stageName:{fontSize:13,fontWeight:700},stagePrompt:{fontSize:11.5,color:"var(--text-2)",marginTop:2,lineHeight:1.4},doneBadge:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10,marginLeft:"auto",flexShrink:0},noteList:{margin:"0 0 8px 0",padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6},noteItem:{display:"flex",alignItems:"flex-start",gap:8,fontSize:13,lineHeight:1.4},noteDot:{width:6,height:6,borderRadius:"50%",flexShrink:0,marginTop:5},checkBox:{width:18,height:18,borderRadius:5,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,marginTop:1,padding:0},checklistHint:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,marginTop:10,textAlign:"center"},noteText:{flex:1,color:"var(--text)"},noNotes:{fontSize:12,color:"var(--text-3)",fontStyle:"italic",marginBottom:8},noteAddRow:{display:"flex",gap:6},noteInput:{flex:1,border:"1px solid var(--border)",borderRadius:7,padding:"7px 10px",fontSize:13,fontFamily:"inherit",outline:"none"},noteAddBtn:{width:32,height:32,border:"none",borderRadius:7,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},advanceBtn:{display:"flex",alignItems:"center",gap:8,border:"none",color:"#fff",padding:"10px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit",width:"100%",justifyContent:"center"},wisdomDone:{display:"flex",alignItems:"center",gap:8,justifyContent:"center",fontSize:13.5,fontWeight:700,color:"#4C9A6B",padding:12,background:"rgba(76,154,107,0.08)",borderRadius:10,marginTop:4},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},input:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box",marginBottom:8},select:{border:"1px solid var(--border)",borderRadius:8,padding:"8px 10px",fontSize:12.5,fontFamily:"inherit",flex:1},addRow:{display:"flex",gap:8,marginBottom:8},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},empty:{fontSize:13,color:"var(--text-3)",padding:"32px 12px",textAlign:"center"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.55)",zIndex:50,display:"grid",placeItems:"center"},celebBox:{background:"var(--surface)",borderRadius:20,padding:"40px 32px",textAlign:"center",maxWidth:320,boxShadow:"0 8px 40px rgba(0,0,0,0.18)"},celebEmoji:{fontSize:52,marginBottom:12},celebTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:8},celebSub:{fontSize:13.5,color:"var(--text-2)",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:"#4C9A6B",color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},Hi=[{id:"aarti",title:"Aarti",html:`<h1>॥ गणपतीची आरती ॥</h1><br/>
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
      </div>`}];function Py(){const[t,e]=g.useState(()=>window.innerWidth<720);return g.useEffect(()=>{const n=()=>e(window.innerWidth<720);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),t}const $y=t=>new Promise((e,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:l,height:a}=i;l>a&&l>1400?(a=a*1400/l,l=1400):a>1400&&(l=l*1400/a,a=1400);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(i,0,0,l,a),e(d.toDataURL("image/jpeg",.85))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(t)});function zg({base:t,count:e,images:n}){const o=n&&n.length?n:null,i=o?o.length:e,[s,l]=g.useState(0);if(!i)return null;const a=s%i,d=o?o[a]:`${t}${a+1}.jpg`;return r.jsxs("div",{style:{maxWidth:560,margin:"0 auto"},children:[r.jsx("div",{style:kt.carouselFrame,children:r.jsx("img",{src:d,alt:`Page ${a+1}`,style:kt.carouselImg})}),r.jsxs("div",{style:kt.carouselNav,children:[r.jsxs("button",{onClick:()=>l(c=>(c-1+i)%i),style:kt.carouselBtn,children:[r.jsx(Cn,{size:16})," Prev"]}),r.jsxs("span",{style:kt.carouselCount,children:[o?"":"Adhyay ",a+1," / ",i]}),r.jsxs("button",{onClick:()=>l(c=>(c+1)%i),style:kt.carouselBtn,children:["Next ",r.jsx(nn,{size:16})]})]})]})}function Ny(){const t=Py(),[e,n]=g.useState(!1),[o,i]=g.useState([]),[s,l]=g.useState("dss"),[a,d]=g.useState(!1),[c,p]=g.useState({title:"",type:"text",content:"",images:[]}),[y,m]=g.useState([]),[j,x]=g.useState(null),[k,T]=g.useState(!1),b=g.useRef(!1),u=g.useCallback(async()=>{try{const[H,J,P]=await Promise.all([O.getDecks(),O.getSetting("spiritual_order"),O.getSetting("spiritual_default")]);if(i(H),Array.isArray(J==null?void 0:J.value)&&m(J.value),P!=null&&P.value&&x(P.value),!b.current){b.current=!0;const F=new Set([...Hi.map(f=>f.id),...H.map(f=>`deck-${f.id}`)]);P!=null&&P.value&&F.has(P.value)&&l(P.value)}}catch{}},[]);g.useEffect(()=>{u()},[u]);const h=[...Hi.map(H=>({id:H.id,title:H.title})),...o.map(H=>({id:`deck-${H.id}`,title:H.title}))],I=(()=>{if(!y.length)return h;const H=new Map(h.map(P=>[P.id,P])),J=[];return y.forEach(P=>{H.has(P)&&(J.push(H.get(P)),H.delete(P))}),H.forEach(P=>J.push(P)),J})(),v=(H,J)=>{const P=I.map(f=>f.id),F=H+J;F<0||F>=P.length||([P[H],P[F]]=[P[F],P[H]],m(P),O.setSetting("spiritual_order",P).catch(()=>{}))},C=H=>{x(H),O.setSetting("spiritual_default",H).catch(()=>{})},L=s.startsWith("deck-")?Number(s.slice(5)):null,A=L!=null?o.find(H=>H.id===L):null,E=A?null:Hi.find(H=>H.id===s)||(L==null?Hi[0]:null),M=a?"New deck":A?A.title:(E==null?void 0:E.title)||"",S=H=>{l(H),d(!1),t&&n(!1)},D=()=>{d(!0),p({title:"",type:"text",content:"",images:[]}),t&&n(!1)},w=async H=>{const J=Array.from(H.target.files||[]),P=[];for(const F of J)try{P.push(await $y(F))}catch{}p(F=>({...F,images:[...F.images,...P]})),H.target.value=""},Y=H=>p(J=>({...J,images:J.images.filter((P,F)=>F!==H)})),lt=c.title.trim()&&(c.type==="text"?c.content.trim():c.images.length>0),rt=async()=>{if(!lt)return;const H=await O.createDeck({title:c.title.trim(),type:c.type,content:c.type==="text"?c.content:"",images:c.type==="images"?c.images:[]});d(!1),await u(),l(`deck-${H.id}`)},ht=async H=>{await O.deleteDeck(H),s===`deck-${H}`&&l("dss"),u()},U={...kt.sidebar,...t?kt.sidebarOverlay:{},...t&&!e?kt.sidebarHidden:{}};return r.jsxs("div",{style:kt.shell,children:[r.jsx("style",{children:Oy}),t&&e&&r.jsx("div",{style:kt.backdrop,onClick:()=>n(!1)}),r.jsxs("aside",{style:U,children:[r.jsxs("div",{style:kt.sideHead,children:[r.jsx("div",{style:kt.brand,children:"Anvil · Spiritual"}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:2},children:[r.jsx("button",{onClick:()=>T(H=>!H),style:kt.iconBtn,title:"Rearrange & set default",children:k?r.jsx(Rt,{size:16}):r.jsx(he,{size:15})}),t&&r.jsx("button",{onClick:()=>n(!1),style:kt.iconBtn,children:r.jsx(zt,{size:17})})]})]}),k&&r.jsxs("div",{style:kt.editHint,children:["Arrows reorder · ",r.jsx(Ls,{size:11,style:{verticalAlign:"-1px"}})," sets what opens by default"]}),r.jsxs("div",{style:kt.sideScroll,children:[I.map((H,J)=>{const P=H.id===s&&!a,F=j===H.id;return r.jsxs("div",{style:kt.sideRow,children:[r.jsxs("button",{onClick:()=>S(H.id),style:{...kt.sideItem,flex:1,...P?kt.sideItemOn:{}},children:[H.title,F&&r.jsx("span",{style:kt.defStar,title:"Opens by default",children:" ★"})]}),k&&r.jsxs("div",{style:kt.editControls,children:[r.jsx("button",{onClick:()=>C(H.id),title:"Set as default",style:{...kt.miniBtn,...F?{color:"#8268B0"}:{}},children:r.jsx(Ls,{size:13})}),r.jsx("button",{onClick:()=>v(J,-1),disabled:J===0,style:{...kt.miniBtn,opacity:J===0?.3:1},children:r.jsx(fb,{size:13})}),r.jsx("button",{onClick:()=>v(J,1),disabled:J===I.length-1,style:{...kt.miniBtn,opacity:J===I.length-1?.3:1},children:r.jsx(xi,{size:13})})]})]},H.id)}),r.jsxs("button",{onClick:D,style:{...kt.newDeckBtn,...a?kt.sideItemOn:{}},children:[r.jsx(ae,{size:14})," New deck"]})]})]}),r.jsxs("main",{style:kt.main,children:[t&&r.jsxs("button",{onClick:()=>n(!0),style:kt.hamburger,children:[r.jsx(Qd,{size:17}),r.jsx("span",{style:kt.hamburgerLabel,children:M})]}),a?r.jsxs("div",{style:kt.contentWrap,children:[r.jsx("div",{style:kt.formTitle,children:"Create a deck"}),r.jsx("input",{placeholder:"Deck title (e.g. Vishnu Sahasranamam)",value:c.title,onChange:H=>p({...c,title:H.target.value}),style:kt.input}),r.jsxs("div",{style:kt.typeRow,children:[r.jsxs("button",{onClick:()=>p({...c,type:"text"}),style:{...kt.typeBtn,...c.type==="text"?kt.typeOn:{}},children:[r.jsx(Vd,{size:15})," Text"]}),r.jsxs("button",{onClick:()=>p({...c,type:"images"}),style:{...kt.typeBtn,...c.type==="images"?kt.typeOn:{}},children:[r.jsx(_h,{size:15})," Images"]})]}),c.type==="text"?r.jsx("textarea",{placeholder:"Paste or write the text (verses, chant, reflection)…",value:c.content,onChange:H=>p({...c,content:H.target.value}),style:kt.textarea}):r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:kt.imgGrid,children:[c.images.map((H,J)=>r.jsxs("div",{style:kt.imgThumbWrap,children:[r.jsx("img",{src:H,alt:"",style:kt.imgThumb}),r.jsx("button",{onClick:()=>Y(J),style:kt.imgDel,children:r.jsx(zt,{size:12})})]},J)),r.jsxs("label",{style:kt.imgAdd,children:[r.jsx(el,{size:20}),r.jsx("span",{style:{fontSize:11},children:"Add images"}),r.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:w,style:{display:"none"}})]})]}),r.jsx("div",{style:kt.hint,children:"Images show as a swipeable carousel, in the order added."})]}),r.jsxs("div",{style:kt.formActions,children:[r.jsxs("button",{onClick:()=>d(!1),style:kt.cancelBtn,children:[r.jsx(zt,{size:14})," Cancel"]}),r.jsxs("button",{onClick:rt,disabled:!lt,style:{...kt.saveBtn,...lt?{}:kt.saveDisabled},children:[r.jsx(Rt,{size:15})," Create deck"]})]})]}):A?r.jsxs("div",{style:kt.contentWrap,children:[r.jsxs("div",{style:kt.deckHead,children:[r.jsx("h2",{style:kt.deckTitle,children:A.title}),r.jsx("button",{onClick:()=>ht(A.id),style:kt.deckDel,title:"Delete deck",children:r.jsx(ey,{size:15})})]}),A.type==="images"?r.jsx(zg,{images:A.images}):r.jsx("div",{style:kt.deckText,children:A.content})]}):r.jsxs("div",{style:kt.contentWrap,children:[(E==null?void 0:E.youtube)&&r.jsx("div",{style:kt.videoFrame,children:r.jsx("iframe",{src:`https://www.youtube.com/embed/${E.youtube}`,title:E.title,style:kt.video,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0},E.youtube)}),E!=null&&E.carousel?r.jsx(zg,{base:E.imageBase,count:E.carousel}):r.jsx("div",{className:"spiritual-content",dangerouslySetInnerHTML:{__html:(E==null?void 0:E.html)||""}})]})]})]})}const Oy=`
.spiritual-content { font-family: 'Inter', system-ui, sans-serif; color: var(--text); line-height: 1.9; font-size: 16px; text-align: center; }
.spiritual-content h1 { font-family: 'Fraunces', Georgia, serif; font-size: 24px; color: #8268B0; margin: 8px 0 18px; letter-spacing: -0.01em; }
.spiritual-content h2 { font-family: 'Fraunces', Georgia, serif; font-size: 18px; color: #7A5EA8; margin: 20px 0 8px; }
.spiritual-content h3 { font-size: 15px; color: var(--text-3); text-transform: uppercase; letter-spacing: 0.06em; margin: 18px 0 6px; }
.spiritual-content b { color: #8268B0; }
.spiritual-content div { text-align: center; }
`,kt={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:240,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.15)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.35)",zIndex:20},sideHead:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"18px 14px 12px"},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700},sideScroll:{flex:1,overflowY:"auto",padding:"0 8px 16px"},sideItem:{display:"block",width:"100%",border:"none",background:"none",padding:"10px 12px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13.5,fontWeight:500,color:"var(--text-2)",textAlign:"left",marginBottom:2},sideItemOn:{background:"rgba(130,104,176,0.12)",color:"#8268B0",fontWeight:700},sideRow:{display:"flex",alignItems:"center",gap:2},editControls:{display:"flex",alignItems:"center",gap:1,flexShrink:0},miniBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",borderRadius:5},defStar:{color:"#C9A227",fontWeight:700},editHint:{fontSize:10.5,color:"var(--text-3)",padding:"0 14px 8px",lineHeight:1.4},newDeckBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",padding:"9px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:600,color:"var(--text-2)",marginTop:6},main:{flex:1,padding:"26px 22px",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:220},contentWrap:{background:"var(--surface)",borderRadius:14,padding:"26px 28px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",maxWidth:760,margin:"0 auto"},videoFrame:{position:"relative",width:"100%",maxWidth:600,margin:"0 auto 22px",aspectRatio:"16 / 9",borderRadius:12,overflow:"hidden",background:"#000"},video:{position:"absolute",inset:0,width:"100%",height:"100%",border:"none"},carouselFrame:{background:"var(--surface-2)",borderRadius:12,padding:8,border:"1px solid var(--border)"},carouselImg:{width:"100%",borderRadius:8,display:"block"},carouselNav:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:14},carouselBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},carouselCount:{fontSize:13,fontWeight:700,color:"#8268B0",fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"none",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,color:"var(--text-2)"},deckHead:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,marginBottom:16,borderBottom:"1px solid var(--border)",paddingBottom:12},deckTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",margin:0,color:"#8268B0"},deckDel:{border:"1px solid var(--border)",background:"var(--surface)",color:"#C2536B",cursor:"pointer",display:"grid",placeItems:"center",padding:7,borderRadius:8,flexShrink:0},deckText:{fontSize:16,lineHeight:1.9,whiteSpace:"pre-wrap",color:"var(--text)",textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},formTitle:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:14},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none"},typeRow:{display:"flex",gap:8,marginTop:12},typeBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},typeOn:{background:"#8268B0",color:"#fff",borderColor:"#8268B0"},textarea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"12px",fontSize:15,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:200,resize:"vertical",lineHeight:1.7,marginTop:12},imgGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(90px, 1fr))",gap:8,marginTop:12},imgThumbWrap:{position:"relative",aspectRatio:"1",borderRadius:8,overflow:"hidden",border:"1px solid var(--border)"},imgThumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},imgDel:{position:"absolute",top:3,right:3,border:"none",background:"rgba(0,0,0,0.6)",color:"#fff",borderRadius:"50%",width:18,height:18,cursor:"pointer",display:"grid",placeItems:"center",padding:0},imgAdd:{aspectRatio:"1",border:"1px dashed var(--border)",borderRadius:8,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:4,cursor:"pointer",color:"var(--text-3)"},hint:{fontSize:11.5,color:"var(--text-3)",marginTop:8},formActions:{display:"flex",gap:8,marginTop:16},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:"#8268B0",color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"}},yr={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},Tg=Object.keys(yr),Hy=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Gy=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Uy=()=>{const t=new Date;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`},Yy=(t,e)=>`${Gy[e-1]} ${t}`,Vy=(t,e)=>{const n=new Date(t,e,0).getDate();return Array.from({length:n},(o,i)=>`${t}-${String(e).padStart(2,"0")}-${String(i+1).padStart(2,"0")}`)},Qy=(t,e)=>{const n=new Date(t,e-1,1).getDay();return n===0?6:n-1};function Ky(){const t=Uy(),[e,n]=g.useState(new Date().getFullYear()),[o,i]=g.useState(new Date().getMonth()+1),[s,l]=g.useState([]),[a,d]=g.useState([]),[c,p]=g.useState({}),[y,m]=g.useState(null),[j,x]=g.useState(!1),[k,T]=g.useState(!1),[b,u]=g.useState({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:t}),[h,I]=g.useState(null),v=g.useCallback(async()=>{const[f,V,xt]=await Promise.all([O.getTopics(),O.getDueToday(),O.getCalendar(e,o)]);l(f),d(V),p(xt)},[e,o]);g.useEffect(()=>{v()},[v]);const C=async f=>{await O.toggleReviewDone(f),v()},L=async()=>{const f=b.intervals.split(",").map(V=>parseInt(V.trim(),10)).filter(V=>!isNaN(V));!b.topic.trim()||f.length===0||(await O.createTopic({pillar:b.pillar,topic:b.topic.trim(),intervals:f,learned_date:b.learned_date||t}),u({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:t}),T(!1),v())},{deleteItem:A,toasts:E,handleUndo:M,handleDismiss:S}=Ar(O.deleteTopic,O.restoreTopic,v),D=(f,V)=>A(f,V),w=f=>I({id:f.id,topic:f.topic,pillar:f.pillar,intervals:(f.intervals||[]).join(", "),learned_date:f.learned_date}),Y=async()=>{if(!h)return;const f=h.intervals.split(",").map(V=>parseInt(V.trim(),10)).filter(V=>!isNaN(V)&&V>=0);!h.topic.trim()||f.length===0||(await O.updateTopic(h.id,{topic:h.topic.trim(),pillar:h.pillar,learned_date:h.learned_date,intervals:f}),I(null),v())},lt=()=>{o===1?(n(f=>f-1),i(12)):i(f=>f-1),m(null)},rt=()=>{o===12?(n(f=>f+1),i(1)):i(f=>f+1),m(null)},ht=s.filter(f=>!f.cemented),U=s.filter(f=>f.cemented),H=Vy(e,o),J=Qy(e,o),P=g.useMemo(()=>{const f={};return s.forEach(V=>V.reviews.forEach(xt=>{xt.done||(f[xt.due_date]=f[xt.due_date]||[]).push({topic:V.topic,pillar:V.pillar,stage:xt.stage})})),f},[s]),F=y?s.flatMap(f=>f.reviews.filter(V=>V.due_date===y).map(V=>({...V,topic:f.topic,pillar:f.pillar,total:f.reviews.length}))):[];return r.jsxs("div",{style:dt.page,children:[r.jsxs("div",{style:dt.head,children:[r.jsxs("div",{children:[r.jsx("div",{style:dt.eyebrow,children:"Anvil · Revision"}),r.jsx("h1",{style:dt.h1,children:"Spaced Repetition"})]}),r.jsxs("button",{onClick:()=>T(!0),style:dt.addBtn,children:[r.jsx(ae,{size:15})," Add topic"]})]}),k&&r.jsxs("div",{style:dt.addBox,children:[r.jsx("input",{autoFocus:!0,placeholder:"What did you learn?",value:b.topic,onChange:f=>u(V=>({...V,topic:f.target.value})),onKeyDown:f=>f.key==="Enter"&&L(),style:dt.input}),r.jsxs("div",{style:dt.addRow,children:[r.jsx("select",{value:b.pillar,onChange:f=>u(V=>({...V,pillar:f.target.value})),style:dt.select,children:Tg.map(f=>r.jsx("option",{children:f},f))}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[r.jsx("label",{style:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},children:"Learned on"}),r.jsx("input",{type:"date",value:b.learned_date,onChange:f=>u(V=>({...V,learned_date:f.target.value})),style:{...dt.select,fontSize:13}})]}),r.jsx("div",{style:{flex:1,minWidth:0},children:r.jsx("input",{value:b.intervals,onChange:f=>u(V=>({...V,intervals:f.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:dt.input})})]}),r.jsxs("div",{style:dt.addRow,children:[r.jsxs("button",{onClick:L,style:dt.saveBtn,children:[r.jsx(Rt,{size:14})," Save"]}),r.jsxs("button",{onClick:()=>T(!1),style:dt.cancelBtn,children:[r.jsx(zt,{size:14})," Cancel"]})]})]}),a.length>0&&r.jsxs("div",{style:dt.section,children:[r.jsxs("div",{style:dt.sectionTitle,children:[r.jsx(Sb,{size:15,color:"#C2536B"}),"Due Today",r.jsx("span",{style:dt.badge,children:a.length})]}),a.map(f=>{var xt,at;const V=((xt=yr[f.pillar])==null?void 0:xt.dot)||"#9A968C";return r.jsxs("div",{style:{...dt.reviewCard,borderLeft:`3px solid ${V}`,...f.is_missed?{opacity:.85}:{}},children:[r.jsx("button",{onClick:()=>C(f.review_id),style:{...dt.checkbox,...f.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:f.done&&r.jsx(Rt,{size:12,color:"#fff",strokeWidth:3})}),r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("div",{style:dt.reviewTopic,children:f.topic}),r.jsxs("div",{style:dt.reviewMeta,children:[r.jsxs("span",{style:{...dt.stageTag,background:((at=yr[f.pillar])==null?void 0:at.soft)||"rgba(0,0,0,0.05)",color:V},children:["Review ",f.stage,"/",f.total_stages]}),f.is_missed&&r.jsxs("span",{style:dt.missedTag,children:["missed · ",f.due_date]})]})]})]},f.review_id)})]}),r.jsxs("div",{style:dt.section,children:[r.jsxs("div",{style:dt.sectionTitle,children:["Active Topics ",r.jsx("span",{style:dt.badge,children:ht.length})]}),ht.length===0&&r.jsx("div",{style:dt.empty,children:"No active topics. Add something you learned today."}),ht.map(f=>{var G,ft;const V=((G=yr[f.pillar])==null?void 0:G.dot)||"#9A968C",xt=((ft=yr[f.pillar])==null?void 0:ft.soft)||"rgba(0,0,0,0.05)",at=f.reviews.filter(Z=>Z.done).length;return(h==null?void 0:h.id)===f.id?r.jsxs("div",{style:dt.addBox,children:[r.jsx("input",{autoFocus:!0,value:h.topic,onChange:Z=>I(et=>({...et,topic:Z.target.value})),onKeyDown:Z=>Z.key==="Enter"&&Y(),placeholder:"Topic",style:dt.input}),r.jsxs("div",{style:dt.addRow,children:[r.jsx("select",{value:h.pillar,onChange:Z=>I(et=>({...et,pillar:Z.target.value})),style:dt.select,children:Tg.map(Z=>r.jsx("option",{children:Z},Z))}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[r.jsx("label",{style:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},children:"Learned on"}),r.jsx("input",{type:"date",value:h.learned_date,onChange:Z=>I(et=>({...et,learned_date:Z.target.value})),style:{...dt.select,fontSize:13}})]}),r.jsx("div",{style:{flex:1,minWidth:0},children:r.jsx("input",{value:h.intervals,onChange:Z=>I(et=>({...et,intervals:Z.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:dt.input})})]}),r.jsx("div",{style:dt.editHint,children:"Changing the date or intervals reschedules the reviews (completed steps are kept where they still apply)."}),r.jsxs("div",{style:dt.addRow,children:[r.jsxs("button",{onClick:Y,style:dt.saveBtn,children:[r.jsx(Rt,{size:14})," Save plan"]}),r.jsxs("button",{onClick:()=>I(null),style:dt.cancelBtn,children:[r.jsx(zt,{size:14})," Cancel"]})]})]},f.id):r.jsxs("div",{style:dt.topicCard,children:[r.jsxs("div",{style:dt.topicHead,children:[r.jsx("span",{style:{...dt.dot,background:V}}),r.jsx("span",{style:dt.topicName,children:f.topic}),r.jsx("span",{style:dt.topicPillar,children:f.pillar}),r.jsxs("span",{style:dt.topicProgress,children:[at,"/",f.reviews.length," done"]}),r.jsx("button",{onClick:()=>w(f),style:dt.ghostBtn,title:"Edit plan",children:r.jsx(he,{size:12})}),r.jsx("button",{onClick:()=>D(f.id,f.topic),style:dt.ghostBtn,title:"Delete",children:r.jsx(zt,{size:13})})]}),r.jsxs("div",{style:dt.reviewDots,children:[f.reviews.map(Z=>{Z.due_date<t;const et=Z.due_date===t;return r.jsx("button",{onClick:()=>C(Z.id),title:`Review ${Z.stage} · ${Z.due_date}${Z.done?" · Done":""}`,style:{...dt.reviewDot,background:Z.done?V:et?xt:"var(--hover)",border:`2px solid ${Z.done||et?V:"var(--border)"}`,color:Z.done?"#fff":V},children:Z.stage},Z.id)}),r.jsxs("span",{style:dt.learnedDate,children:["Learned ",f.learned_date]})]})]},f.id)})]}),U.length>0&&r.jsxs("div",{style:dt.section,children:[r.jsxs("button",{onClick:()=>x(f=>!f),style:dt.cementedToggle,children:[j?r.jsx(xi,{size:15}):r.jsx(nn,{size:15}),r.jsx(Rr,{size:14,color:"#C9A227"}),"Cemented",r.jsx("span",{style:{...dt.badge,background:"rgba(201,162,39,0.12)",color:"#8A6E1A"},children:U.length})]}),j&&U.map(f=>{var xt;const V=((xt=yr[f.pillar])==null?void 0:xt.dot)||"#9A968C";return r.jsx("div",{style:{...dt.topicCard,opacity:.75},children:r.jsxs("div",{style:dt.topicHead,children:[r.jsx("span",{style:{...dt.dot,background:V}}),r.jsx("span",{style:dt.topicName,children:f.topic}),r.jsx("span",{style:dt.topicPillar,children:f.pillar}),r.jsx(Rr,{size:13,color:"#C9A227",style:{marginLeft:"auto"}})]})},f.id)})]}),r.jsxs("div",{style:dt.calCard,children:[r.jsxs("div",{style:dt.calHead,children:[r.jsx("button",{onClick:lt,style:dt.calNav,children:"‹"}),r.jsxs("div",{style:dt.calTitle,children:[Yy(e,o)," · Review Calendar"]}),r.jsx("button",{onClick:rt,style:dt.calNav,children:"›"})]}),r.jsx("div",{style:dt.calDow,children:Hy.map(f=>r.jsx("div",{style:dt.calDowCell,children:f},f))}),r.jsxs("div",{style:dt.calGrid,children:[Array.from({length:J}).map((f,V)=>r.jsx("div",{},`p${V}`)),H.map((f,V)=>{const xt=P[f]||[],at=f===t,G=f===y,ft=f<t,Z=G?"#fff":at?"var(--text)":ft?"var(--text-2)":"var(--text-3)";return r.jsxs("button",{onClick:()=>m(G?null:f),style:{...dt.calDay,background:G?"var(--accent-strong)":at?"var(--hover)":"var(--surface)",borderColor:at||G?"var(--accent-strong)":"var(--border)"},children:[r.jsx("span",{style:{...dt.calDayNum,color:Z,fontWeight:at||G?700:600},children:V+1}),xt.slice(0,2).map((et,X)=>{var gt;return r.jsxs("span",{title:et.topic,style:{...dt.calItem,color:G?"#fff":((gt=yr[et.pillar])==null?void 0:gt.dot)||"var(--text-2)"},children:[X+1,". ",et.topic]},X)}),xt.length>2&&r.jsxs("span",{style:{...dt.calMore,color:G?"#fff":"var(--text-3)"},children:["+",xt.length-2," more"]})]},f)})]}),y&&r.jsxs("div",{style:dt.dayDetail,children:[r.jsxs("div",{style:dt.dayDetailTitle,children:["Reviews for ",y]}),F.length===0?r.jsx("div",{style:dt.empty,children:"No reviews scheduled for this day."}):F.map((f,V)=>{var at,G;const xt=((at=yr[f.pillar])==null?void 0:at.dot)||"#9A968C";return r.jsxs("div",{style:{...dt.reviewCard,borderLeft:`3px solid ${xt}`},children:[r.jsx("button",{onClick:()=>C(f.id),style:{...dt.checkbox,...f.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:f.done&&r.jsx(Rt,{size:12,color:"#fff",strokeWidth:3})}),r.jsxs("div",{children:[r.jsxs("div",{style:dt.reviewTopic,children:[V+1,". ",f.topic]}),r.jsxs("span",{style:{...dt.stageTag,background:((G=yr[f.pillar])==null?void 0:G.soft)||"rgba(0,0,0,0.05)",color:xt},children:["Review ",f.stage,"/",f.total]})]})]},f.id)})]})]}),r.jsx(Fr,{toasts:E,onUndo:M,onDismiss:S})]})}const dt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},addBox:{background:"var(--surface)",borderRadius:12,padding:16,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column",gap:10},addRow:{display:"flex",gap:8,alignItems:"center"},editHint:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.4},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",minWidth:0},select:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 10px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},section:{marginBottom:20},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10},badge:{fontSize:11,fontWeight:700,background:"var(--hover)",color:"var(--text-2)",borderRadius:10,padding:"1px 7px"},reviewCard:{display:"flex",alignItems:"center",gap:12,background:"var(--surface)",borderRadius:10,padding:"12px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},checkbox:{width:22,height:22,borderRadius:6,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,padding:0},reviewTopic:{fontSize:13.5,fontWeight:600,marginBottom:4},reviewMeta:{display:"flex",alignItems:"center",gap:8},stageTag:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10},missedTag:{fontSize:11,color:"#C2536B",fontWeight:600},topicCard:{background:"var(--surface)",borderRadius:12,padding:"13px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},topicHead:{display:"flex",alignItems:"center",gap:8,marginBottom:10},dot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},topicName:{fontSize:14,fontWeight:600,flex:1},topicPillar:{fontSize:11,color:"var(--text-3)",fontWeight:500},topicProgress:{fontSize:11,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",padding:"2px 7px",borderRadius:10},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},reviewDots:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"},reviewDot:{width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",fontSize:11,fontWeight:700,padding:0},learnedDate:{fontSize:11,color:"var(--text-3)",marginLeft:"auto"},cementedToggle:{display:"flex",alignItems:"center",gap:8,border:"none",background:"none",cursor:"pointer",fontSize:13,fontWeight:700,color:"var(--text-2)",padding:"4px 0",fontFamily:"inherit",marginBottom:8},empty:{fontSize:13,color:"var(--text-3)",padding:"16px 0",textAlign:"center"},calCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calNav:{border:"none",background:"none",fontSize:20,cursor:"pointer",color:"var(--text-2)",padding:"0 6px",lineHeight:1},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4},calDay:{minHeight:62,border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,cursor:"pointer",fontFamily:"inherit",display:"flex",flexDirection:"column",alignItems:"stretch",justifyContent:"flex-start",gap:1,position:"relative",padding:"3px 4px",overflow:"hidden",textAlign:"left"},calDayNum:{fontSize:11,lineHeight:1.1,marginBottom:1},calItem:{fontSize:8.5,fontWeight:700,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",lineHeight:1.3,textAlign:"left"},calMore:{fontSize:8,fontWeight:700,opacity:.85,lineHeight:1.2},dayDetail:{marginTop:16,paddingTop:16,borderTop:"1px solid var(--border)"},dayDetailTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10}},Gi=[{id:1,title:"Regular Habits",cards:[{id:1,text:"1. I always do everything I need to do, when I need to do it. "},{id:2,text:"2. I never argue or let my emotions work against me. "},{id:3,text:"3. I have a good memory. I easily and automatically remember any name or anything that is important to me. "},{id:4,text:"4. I eat only what I should. "},{id:5,text:"5. I am a good listener. I hear everything that is said. I am attentive, interested, and aware of everything that is going on around me. "},{id:6,text:"6. I have the courage to state my opinions. I take responsibility for myself and everything I say and do."},{id:7,text:"7. I never spend more than I earn. I am financially responsible, both for my present and for my future."},{id:8,text:"8. I set goals and I follow them. I set my sights, take the appropriate action, and achieve my goals."},{id:9,text:"9. I spend time with my family and my loved ones. I enjoy sharing their lives with mine and my life with theirs."}]},{id:2,title:"Motivational",cards:[{id:1,text:"1. I can do anything I believe I can do. I’ve got it and every day I get more of it. I have talent, skills, and ability"},{id:2,text:"2. I set goals and I reach them. I know what I want out of life. I go after it and I get it. "},{id:3,text:"3. People like me, and I feel good about myself. I have a sense of pride in whoa am and I believe in myself. Nothing seems to stop me. I have a lot of determination. "},{id:4,text:"4. I turn problems into advantages. I find possibilities in things that other people never give a chance."},{id:5,text:"5. I have a lot of energy––I am very alive. I enjoy life and I can tell it and so can others"},{id:6,text:"6. I keep myself up, looking ahead, and liking it. I know that I can accomplish anything I choose, and I refuse to let anything negative hold me back or stand in my way. I am not afraid of anything or anyone. I have strength, power, conviction, and confidence. "},{id:7,text:"7. I like challenges and I meet them head on, face to face––today especially. I am on top of the world and I’m going for it. "},{id:8,text:"8. I have a clear picture in my mind of what I want. I can see it in front of me. "},{id:9,text:"9. I know what I want and I know how to get it. I know that it’s all up to me and I know I can do it. Roadblocks don’t bother me. They just mean that I am alive and running, and I’m not going to stand still for anything. "},{id:10,text:"10. I trust myself I’ve got what it takes––plenty of it––and I know how to use it. "},{id:11,text:"11. Today, more than ever. Today I am unstoppable. I’ve got myself together and I’m getting more together every day. And today––look out world, here I come. "},{id:12,text:"12. Limitations? I don’t even recognize them as limitations. There is no challenge I can’t conquer; there is no wall I can’t climb over. "},{id:13,text:"13. There is no problem I can’t defeat or turn around and make it work for me. I stand tall. I am honest and sincere. I like to deal with people and they like me. "},{id:14,text:"14. I think well; I think clearly. I am organized; I am in control of myself, and everything about me. I call my shots and no one has to call them for me. I never blame anyone else for the circumstances of my life. "},{id:15,text:"15. I accept my failings and move past them as easily as I accept the rewards for my victories. I never demand perfection of myself, but I expect the very best of what I have to give––and that’s what I get. I never give myself excuses. "},{id:16,text:"16. I get things done on time and in the right way. Today I have the inner strength to do more than ever. I am an exceptional human being. "},{id:17,text:"17. My goals and my incredible belief in myself turn my goals into reality. I have the power to live my dreams."},{id:18,text:"18.  I believe in them like I believe in myself. And that belief is so strong that there is nothing that diminishes my undefeatable spirit. "}]},{id:3,title:"Organized planning",cards:[{id:1,text:"1. I am organized and in control of my life. I am in control of myself, my thoughts, my time, my actions, and my future. "},{id:2,text:"2. I know what to do and when to do it, and I do everything I need to do, when I need to do it. "},{id:3,text:"3. I program my mind to make the maximum use of my time. I am in control of my time and how to use it. I like being organized, efficient, and on top of things."},{id:4,text:"4. Controlling my time keeps me that way. "},{id:5,text:"5. I never waste time––I always “plan” time. And because I plan my time, I always have time to do the things I choose to do. "},{id:6,text:"6. Each day I become more organized and in control of all areas of my life––at home, at work, in my mind and in my thoughts, in everything that I do. "},{id:7,text:"7. I am very well organized. Each night I make a list of things I need to do the next day. I set my priorities and I follow them. "},{id:8,text:"8. I am always on time. I am always right where I need to be, exactly when I need to be there. "},{id:9,text:"9. Being on time is easy for me and the more I control my time and the more organized I become, the easier it is. "},{id:10,text:"10. I am in control of my feelings, my emotions, my attitudes, and my needs. I control them; they do not control me. "},{id:11,text:"11. I have the winning vote in the outcome of my own actions. And I choose to live my life by choice, not chance. Therefore, I take the time to take control."},{id:12,text:"12. I have an organized and orderly mind. Because I think in an organized way, I conduct my life in an organized manner. "},{id:13,text:"13. I think in the most positive and productive way at all times and in all things. The way I think is the way I live––and I think “right.” "},{id:14,text:"14. I am the director of my destiny. I know where I am going and I know why I am going there. My earthly life is in my hands and in my control. "},{id:15,text:"15. I control my goals and the achievement of my goals. I organize my goals by writing each of them down, along with the steps I need to reach them. One of the reasons for my success is that my goals are clearly defined and organized."},{id:16,text:"16. I am in complete control of what I think and how I think. Therefore, I choose to think only those thoughts which help me and which are of genuine benefit to me."}]},{id:4,title:"Solving Problems",cards:[{id:1,text:"1. I’m good at solving problems. I like challenges and I meet them head on. "},{id:2,text:"2. Problems are my teachers. They help me to learn and grow. Without them, I would be going nowhere. With them, I am moving forward in the direction of my own goals. "},{id:3,text:"3. There is no problem which I cannot conquer. I am strong in mind, body, and spirit. My will, my strength, and my determination are always greater than any problem I face."},{id:4,text:"4. When I meet a new problem, I do not see the problem as my enemy. I know that finding the solution to the problem will move me forward in my own personal growth."},{id:5,text:"5. Because I know that problems are a key ingredient in my spiritual and mental education and preparation, I recognize that all problems are important to me. "},{id:6,text:"6. I do not fear problems, I solve them. I do not ignore problems, I confront them. I do not avoid problems, I conquer them. "},{id:7,text:"7. I know that every problem holds within itself the keys to its own solution. Therefore, the better I understand the problem, the clearer I am able to see its solution. "},{id:8,text:"8. Having problems is not a problem for me. I am confident, self-assured, positive, and determined. I always know that I am going to overcome any problem I encounter––and I always do. "},{id:9,text:"9. I am good at breaking large obstacles down into smaller pieces that are easier to handle. And I never make any problem appear to be larger than it actually is. "},{id:10,text:"10. I never worry. I turn “worry time” into positive, constructive, “solution time.” I keep my mind alert and open to all solutions—and solutions come quickly and easily to me. "},{id:11,text:"11. I have learned to recognize that many problems carry with them benefits and potential opportunities which would not have presented themselves had the problem not occurred in the first place. "},{id:12,text:"12. I do not seek to live a life which is free from all problems. Instead, I choose to live a life of finding solutions and enjoying the benefits which those solutions create."},{id:13,text:"13. Challenge, conquer, solution, and win are words which I live by daily. Challenges are opportunities. Conquering them is the inevitable outcome. "},{id:14,text:"14. “Solutions” are the stepping stones to my success, and “Winning” is my way of life."}]},{id:5,title:"Self Esteem",cards:[{id:1,text:"1. I really am very special. I like who I am and I feel good about myself. "},{id:2,text:"2. Although I always work to improve myself and I get better every day, I like who I am today. And tomorrow, when I’m even better, I’ll like myself then, too. "},{id:3,text:"3. It’s true that there really is no one else like me in the entire world. There never was another me before, and there will never be another me again. "},{id:4,text:"4. I am unique––from the top of my head to the bottom of my feet. In some ways I may look and act and sound like some others––but I am not them. I am me."},{id:5,text:"5. I wanted to be somebody––and now I know I am I would rather be me than anyone else in the world. "},{id:6,text:"6. I like how I feel and I like how I think and I like how I do things. I approve of me and I approve of who I am."},{id:7,text:"7. I have many beautiful qualities about me. I have talents and skills and abilities. I even have talents that I don’t even know about yet. And I am discovering new talents inside myself all the time. "},{id:8,text:"8. I am positive. I am confident. I radiate good things. If you look closely, you can even see a glow around me."},{id:9,text:"9. I am full of life. I like life and I’m glad to be alive. I am a very special person, living at a very special time. "},{id:10,text:"10. I am intelligent. My mind is quick and alert and clever and fun. I think good thoughts, and my mind makes things work right for me. "},{id:11,text:"11. I have a lot of energy and enthusiasm and vitality. I am exciting and I really enjoy being me. "},{id:12,text:"12. I like to be around other people and other people like to be around me. People like to hear what I have to say and know what I have to think. "},{id:13,text:"13. I smile a lot. I am happy on the inside and I am happy on the outside. "},{id:14,text:"14. I am interested in many things. I appreciate all the blessings I have, and the things that I learn, and all the things I will learn today and tomorrow and forever––just as long as I am. "},{id:15,text:"15. I am warm, sincere, honest, and genuine. I am all of these things and more. And all of these things are me. I like who I am, and I’m glad to be me."}]},{id:6,title:"Self-Responsibility",cards:[{id:1,text:"1. I take full responsibility for everything about me––even the thoughts that I think. I am in control of the vast resources of my own mind."},{id:2,text:"2. I alone am responsible for what I do and what I tell myself about me. No one can share this responsibility with me. "},{id:3,text:"3. I also allow others to accept their responsibilities far themselves and I do not try to accept their responsibilities for them. "},{id:4,text:"4. I enjoy being responsible. It puts me in charge of being me––and that’s a challenge I enjoy. "},{id:5,text:"5. I allow no one else, at any time, to assume control or responsibility over my life or over anything that I do. My responsibility to others is an extension of my own responsibility to myself. "},{id:6,text:"6. I choose to leave nothing about me up to chance. When it comes to me––and anything in my life––I choose to CHOOSE. "},{id:7,text:"7. My choices are mine alone to make for myself. I do not, at any time, allow anyone else to make my choices for me. And I accept full responsibility for every choice and decision I make. "},{id:8,text:"8. I always meet all of the obligations which I accept. And I accept no obligations which I will not meet. "},{id:9,text:"9. I am trustworthy. I can be counted on. I have accepted winning responsibility for myself––and I always live up to the responsibilities I accept. "},{id:10,text:"10. There is no they on whom I lay the blame, or with whom I share my own personal responsibilities. I have learned the great secret of mastering my own destiny. I have learned that “they” is “me.” "},{id:11,text:"11. I have no need to make excuses and no one needs to carry my responsibility for me. I gladly carry my own weight––and I carry it well. "},{id:12,text:"12. Each day I acknowledge and accept the responsibility––not only for my own actions––but also for my emotions, my thoughts, and my attitude. "},{id:13,text:"13. I accept the responsibility for living my life in a way which creates my strengths, my happiness, my positive, healthy beliefs, and for my past, my present, and my future."}]},{id:7,title:"Freedom from worry",cards:[{id:1,text:"1. I never worry. Instead of worrying, I find solutions and I act on them. "},{id:2,text:"2. My mind is constantly in tune with the positive. It is bright, cheerful, enthusiastic, and full of good, positive thoughts and ideas. "},{id:3,text:"3. I am able to relax easily and comfortably in my body and in my mind. I am calm, confident, and self-assured. "},{id:4,text:"4. My mind is orderly and well-organized. I consciously choose what I think and I always choose those thoughts which are the most positive and beneficial for me. "},{id:5,text:"5. All of my thoughts create healthiness within me. My mind dwells only on those thoughts which create more harmony, balance, and well-being within me and in the world around me. "},{id:6,text:"6. I automatically, and always, think in a decisive and determined way. "},{id:7,text:"7. I am full of resolution and the absolute assurance of the best possible outcome in everything that I do. "},{id:8,text:"8. I choose to look at the world around me in the bright, healthy light of optimism and self-assurance. "},{id:9,text:"9. I do only those things which are best for me. I create the best within myself, I attract the best in others, and I find the best in the world around me. "},{id:10,text:"10. I willingly, and without fail, take care of the duties and obligations which I have accepted for myself."},{id:11,text:"11. I commit only to those responsibilities which I know I can fulfill. "},{id:12,text:"12. I focus the attention of my mind only on those things that I can do something about. If I cannot affect it or direct it––I accept it. "},{id:13,text:"13. I keep my mind too busy thinking good, healthy, positive, constructive, and productive thoughts to ever have any time for worry. "},{id:14,text:"14. I control the thoughts I choose. No thought, at any time, can dwell in my mind without my approval or permission. I never worry."}]},{id:8,title:"Eating Habits",cards:[{id:1,text:"1. I am in control of myself in every way––at all times and in all situations. "},{id:2,text:"2. Each time I sit down to eat I reaffirm my determination to achieve my goal. By eating right, and never giving in, I am reaching the weight I want. "},{id:3,text:"3. Whether eating in or eating out, I really enjoy eating less. "},{id:4,text:"4. I never feel the need to finish the food in front of me. I eat only what I should––and never one bite more. "},{id:5,text:"5. One way to weight-loss that’s easy and works, is less food on my plate, and less on my fork. "},{id:6,text:'6. By ordering less when I eat out, and by serving myself smaller portions at home, I keep myself aware of the importance of staying with my goal––each and every day. “Less on my plate means less on my waist."'},{id:7,text:"7. When I sit down to eat, at no time do I allow anyone else to influence, tempt, or discourage me in any negative way."},{id:8,text:"8. What I eat, and the goals I reach, are up to me. And I give no one the right to hinder or control my success."},{id:9,text:"9. Although others may benefit from my success, I. am achieving my weight-loss goals for my own personal reasons––for myself, my life, my future, and my own personal well-being."},{id:10,text:"10. I am never, at any time, tempted to take one bite more than I should. I am strong, I am capable of reaching my goal, and I am doing it."},{id:11,text:"11. Being in situations which put a lot of food in front of me is not a problem to me now. I simply say “No” to the food and “Yes” to my success."},{id:12,text:"12. I enjoy sitting down to eat. Each time I do I conquer my past, and I create a trimmer, happier, more self-confident future in front of me. "},{id:13,text:"13. When I sit down to eat, I do not need someone else to remind me of my goal, or to keep me from eating something I should not. I take full responsibility for myself, and no one else has to do it for me. "},{id:14,text:"14. Controlling my weight, and my appetite, is easy for me now. I enjoy smaller portions, smaller bites, and a slower, healthier, more relaxed way of eating. "},{id:15,text:"15. I have set my goal and I am staying with it. I have turned mealtime into “achievement time.”"}]}],Eg=["#3A7CA5","#4C9A6B","#C2773B","#8268B0","#C2536B","#C9A227","#3A7CA5","#4C9A6B"],Wl=t=>Eg[t%Eg.length],Xy=t=>t+"1A",Fb="anvil_affirmation_favs",qy=()=>{try{return new Set(JSON.parse(localStorage.getItem(Fb)||"[]"))}catch{return new Set}};function Jy(){const[t,e]=g.useState(0),[n,o]=g.useState(0),[i,s]=g.useState(qy);g.useEffect(()=>{localStorage.setItem(Fb,JSON.stringify([...i]))},[i]);const l=(T,b)=>`${T}#${b.id}`,a=t==="FAV"?Gi.flatMap((T,b)=>T.cards.filter(u=>i.has(l(T.title,u))).map(u=>({...u,color:Wl(b),title:T.title}))):Gi[t].cards.map(T=>({...T,color:Wl(t),title:Gi[t].title})),d=a.length,c=Math.min(n,Math.max(0,d-1)),p=a[c],y=T=>{e(T),o(0)},m=g.useCallback(()=>o(T=>Math.max(0,T-1)),[]),j=g.useCallback(()=>o(T=>Math.min(d-1,T+1)),[d]);g.useEffect(()=>{const T=b=>{b.key==="ArrowLeft"&&m(),b.key==="ArrowRight"&&j()};return window.addEventListener("keydown",T),()=>window.removeEventListener("keydown",T)},[m,j]);const x=T=>s(b=>{const u=new Set(b);return u.has(T)?u.delete(T):u.add(T),u}),k=p?p.color:"#8268B0";return r.jsxs("div",{style:Gt.page,children:[r.jsxs("div",{style:Gt.head,children:[r.jsx("div",{style:Gt.eyebrow,children:"Anvil · Affirmations"}),r.jsx("h1",{style:Gt.h1,children:"Affirmations"}),r.jsx("div",{style:Gt.subhead,children:"One at a time — read it, mean it."})]}),r.jsxs("div",{style:Gt.filterBar,children:[Gi.map((T,b)=>{const u=t===b,h=Wl(b);return r.jsxs("button",{onClick:()=>y(b),style:{...Gt.chip,...u?{background:h,color:"#fff",borderColor:h}:{}},children:[r.jsx("span",{style:{...Gt.catDot,background:u?"#fff":h}})," ",T.title," ",r.jsx("span",{style:Gt.chipCount,children:T.cards.length})]},T.title)}),r.jsxs("button",{onClick:()=>y("FAV"),style:{...Gt.chip,...t==="FAV"?{background:"#C9A227",color:"#fff",borderColor:"#C9A227"}:{}},children:[r.jsx(ds,{size:12,fill:t==="FAV"?"#fff":"none"})," Favorites ",r.jsx("span",{style:Gt.chipCount,children:i.size})]})]}),d===0?r.jsxs("div",{style:Gt.empty,children:[r.jsx(ds,{size:22,color:"#C3BFB5"}),r.jsx("div",{children:"No favorites yet — tap the star on a card to save it here."})]}):r.jsxs("div",{style:Gt.viewer,children:[r.jsxs("div",{style:{...Gt.card,borderTop:`4px solid ${k}`},children:[r.jsx("div",{style:{...Gt.cardCat,color:k,background:Xy(k)},children:p.title}),r.jsx("button",{onClick:()=>x(l(p.title,p)),style:{...Gt.favBtn,color:i.has(l(p.title,p))?"#C9A227":"#C3BFB5"},title:"Favorite",children:r.jsx(ds,{size:20,fill:i.has(l(p.title,p))?"#C9A227":"none"})}),r.jsx(jb,{size:30,color:k,style:{opacity:.25}}),r.jsx("p",{style:Gt.cardText,children:p.text.trim()})]}),r.jsxs("div",{style:Gt.navRow,children:[r.jsxs("button",{onClick:m,disabled:c===0,style:{...Gt.navBtn,...c===0?Gt.navBtnDisabled:{}},children:[r.jsx(Cn,{size:18})," Back"]}),r.jsxs("span",{style:{...Gt.counter,color:k},children:[c+1," ",r.jsxs("span",{style:Gt.counterTotal,children:["/ ",d]})]}),r.jsxs("button",{onClick:j,disabled:c===d-1,style:{...Gt.navBtn,...c===d-1?Gt.navBtnDisabled:{}},children:["Next ",r.jsx(nn,{size:18})]})]}),r.jsx("div",{style:Gt.dots,children:a.map((T,b)=>r.jsx("button",{onClick:()=>o(b),style:{...Gt.dot,...b===c?{background:k,transform:"scale(1.5)"}:{}},title:`${b+1}`},b))})]})]})}const Gt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},filterBar:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:22},chip:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipCount:{fontSize:11,fontWeight:700,opacity:.7},catDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},empty:{display:"flex",flexDirection:"column",alignItems:"center",gap:10,fontSize:13.5,color:"var(--text-3)",padding:"56px 12px",textAlign:"center",background:"var(--surface)",borderRadius:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},viewer:{display:"flex",flexDirection:"column",alignItems:"center"},card:{position:"relative",background:"var(--surface)",borderRadius:16,padding:"40px 32px 44px",boxShadow:"0 4px 20px rgba(0,0,0,0.07)",width:"100%",minHeight:240,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",boxSizing:"border-box"},cardCat:{position:"absolute",top:16,left:16,fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:12,textTransform:"uppercase",letterSpacing:"0.04em"},favBtn:{position:"absolute",top:14,right:14,border:"none",background:"none",cursor:"pointer",padding:4,display:"grid",placeItems:"center"},cardText:{fontSize:21,lineHeight:1.55,margin:"14px 0 0",fontWeight:500,color:"var(--text)",fontFamily:"'Fraunces',Georgia,serif",maxWidth:560},navRow:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",maxWidth:420,marginTop:22},navBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},counter:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},counterTotal:{fontSize:13,fontWeight:600,color:"var(--text-3)"},dots:{display:"flex",gap:6,flexWrap:"wrap",justifyContent:"center",marginTop:20,maxWidth:480},dot:{width:7,height:7,borderRadius:"50%",border:"none",background:"var(--border)",cursor:"pointer",padding:0,transition:"transform 0.12s"}},Pe={financial:{label:"Financial",leaf:"#C9A227",shape:"round"},academic:{label:"Academic",leaf:"#3A7CA5",shape:"pine"},relationship:{label:"Relationship",leaf:"#C2536B",shape:"round"},spiritual:{label:"Spiritual",leaf:"#8268B0",shape:"tall"},health:{label:"Health",leaf:"#4C9A6B",shape:"round"}},ao="health";function Jd({species:t=ao,progress:e=1,withered:n=!1,size:o=200}){const i=Math.max(0,Math.min(1,e)),s=Pe[t]||Pe[ao],l=n?"#8A7B63":"#7A5A3C",a=n?"#A99C84":s.leaf,d=n?"#8F8268":a,c=14+i*46,p=112-c,y=i>.14,m=y?8+i*30:0;return r.jsxs("svg",{viewBox:"0 0 120 120",width:o,height:o,style:{display:"block"},children:[r.jsx("ellipse",{cx:"60",cy:"114",rx:20+i*14,ry:"5",fill:"rgba(38,36,31,0.08)"}),!y&&r.jsxs("g",{transform:`translate(60 ${112-i*40})`,children:[r.jsx("path",{d:"M0 8 C0 8 0 -2 0 -6",stroke:"#4C9A6B",strokeWidth:"2.5",fill:"none"}),r.jsx("ellipse",{cx:"-5",cy:"-4",rx:"6",ry:"3.5",fill:"#4C9A6B",transform:"rotate(-30 -5 -4)"}),r.jsx("ellipse",{cx:"5",cy:"-4",rx:"6",ry:"3.5",fill:"#5BB07E",transform:"rotate(30 5 -4)"})]}),y&&r.jsxs(r.Fragment,{children:[r.jsx("rect",{x:60-(2+i*2.5),y:p,width:(2+i*2.5)*2,height:c,rx:"2",fill:l}),s.shape==="pine"?r.jsxs(r.Fragment,{children:[r.jsx("polygon",{points:`60,${p-m*2.2} ${60-m},${p+4} ${60+m},${p+4}`,fill:a}),r.jsx("polygon",{points:`60,${p-m*3} ${60-m*.8},${p-m*.7} ${60+m*.8},${p-m*.7}`,fill:d})]}):s.shape==="tall"?r.jsxs(r.Fragment,{children:[r.jsx("ellipse",{cx:"60",cy:p-m*.3,rx:m*.78,ry:m*1.55,fill:a}),r.jsx("ellipse",{cx:"60",cy:p-m*.9,rx:m*.5,ry:m*1,fill:d,opacity:"0.9"})]}):r.jsxs(r.Fragment,{children:[r.jsx("circle",{cx:"60",cy:p,r:m,fill:a}),r.jsx("circle",{cx:60-m*.7,cy:p+m*.3,r:m*.78,fill:a}),r.jsx("circle",{cx:60+m*.7,cy:p+m*.3,r:m*.78,fill:d}),r.jsx("circle",{cx:"60",cy:p-m*.5,r:m*.8,fill:d,opacity:"0.92"})]})]})]})}function Zy({species:t}){return r.jsx(Jd,{species:t,progress:1,size:56})}const t0=[{id:"day",label:"Day"},{id:"week",label:"Week"},{id:"month",label:"Month"},{id:"year",label:"Year"}],kr=t=>t>=60?`${Math.floor(t/60)}h ${t%60}m`:`${t}m`,e0=t=>{const e=t<12?"am":"pm",n=t%12===0?12:t%12;return`${String(n).padStart(2,"0")} ${e}`};function r0(t){const e=t<=60?10:t<=120?20:t<=300?60:120,n=Math.max(60,Math.ceil((t||1)/e)*e),o=[];for(let i=0;i<=n;i+=e)o.push(i);return{max:n,ticks:o}}const Mb=t=>{const e=new Date(t);return e.setHours(0,0,0,0),e},n0=t=>{const e=Mb(t),n=(e.getDay()+6)%7;return e.setDate(e.getDate()-n),e},o0=t=>new Date(t.getFullYear(),t.getMonth(),1),i0=t=>new Date(t.getFullYear(),0,1);function s0(t,e){if(t==="day"){const i=Mb(e);return{start:i,end:new Date(+i+864e5),prev:new Date(+i-864e5),prev2:new Date(+i-2*864e5)}}if(t==="week"){const i=n0(e);return{start:i,end:new Date(+i+7*864e5),prev:new Date(+i-7*864e5),prev2:new Date(+i-14*864e5)}}if(t==="month"){const i=o0(e),s=e.getFullYear(),l=e.getMonth();return{start:i,end:new Date(s,l+1,1),prev:new Date(s,l-1,1),prev2:new Date(s,l-2,1)}}const n=e.getFullYear();return{start:i0(e),end:new Date(n+1,0,1),prev:new Date(n-1,0,1),prev2:new Date(n-2,0,1)}}function l0({sessions:t=[],onBack:e}){const[n,o]=g.useState("day"),i=new Date,{start:s,end:l,prev:a,prev2:d}=s0(n,i),c=rt=>new Date(rt.started_at||rt.created_at),p=t.filter(rt=>rt.completed),y=(rt,ht,U)=>{const H=c(rt);return H>=ht&&H<U},m=(rt,ht)=>p.filter(U=>y(U,rt,ht)).reduce((U,H)=>U+(H.actual_min||0),0),j=p.filter(rt=>y(rt,s,l)),x=j.reduce((rt,ht)=>rt+(ht.actual_min||0),0),k=m(a,s),T=m(d,a),b=j.length,u=Array(24).fill(0);j.forEach(rt=>{u[c(rt).getHours()]+=rt.actual_min||0});const h=Math.max(...u,0),I=r0(h),v={};j.forEach(rt=>{const ht=Pe[rt.tree]?rt.tree:ao;v[ht]=(v[ht]||0)+(rt.actual_min||0)});const C=Object.entries(v).map(([rt,ht])=>({name:Pe[rt].label,min:ht,color:Pe[rt].leaf})).sort((rt,ht)=>ht.min-rt.min),L=k>0?Math.round((x-k)/k*100):x>0?100:0,A=L>0?zb:L<0?Ib:Hh,E=L>0?"#4C9A6B":L<0?"#C2536B":"#9A968C",M={day:"yesterday",week:"last week",month:"last month",year:"last year"}[n],S={day:"2 days ago",week:"2 weeks ago",month:"2 months ago",year:"2 years ago"}[n],D=54,w=22,Y=2*Math.PI*D;let lt=0;return r.jsxs("div",{style:yt.page,children:[r.jsxs("div",{style:yt.topbar,children:[r.jsxs("button",{onClick:e,style:yt.back,children:[r.jsx(bb,{size:18})," Grove"]}),r.jsx("h1",{style:yt.h1,children:"Insights"}),r.jsx("div",{style:{width:76}})]}),r.jsx("div",{style:yt.rangeBar,children:t0.map(rt=>r.jsx("button",{onClick:()=>o(rt.id),style:{...yt.rangeBtn,...n===rt.id?yt.rangeOn:{}},children:rt.label},rt.id))}),r.jsxs("div",{style:yt.headline,children:[r.jsxs("div",{style:yt.bigStat,children:[r.jsx("div",{style:yt.bigVal,children:kr(x)}),r.jsxs("div",{style:yt.bigLbl,children:["Focused this ",n]})]}),r.jsxs("div",{style:yt.bigStat,children:[r.jsx("div",{style:yt.bigVal,children:b}),r.jsx("div",{style:yt.bigLbl,children:"Trees"})]})]}),r.jsxs("div",{style:yt.card,children:[r.jsxs("div",{style:yt.cardHead,children:[r.jsxs("div",{style:yt.cardTitle,children:["Your forest this ",n]}),r.jsx("div",{style:yt.cardHint,children:"Each tree is a completed session — bigger means longer focus"})]}),r.jsx(c0,{sessions:j}),r.jsxs("div",{style:yt.forestNumber,children:[b," ",b===1?"tree":"trees"," · ",kr(x)," focused"]})]}),r.jsx(Ll,{title:"Focus distribution",hint:"Minutes focused at each time of day",children:h===0?r.jsx(Bg,{}):r.jsx(d0,{hours:u,axis:I})}),r.jsx(Ll,{title:"Pillar distribution",hint:"How your focus splits across the five trees",children:C.length===0?r.jsx(Bg,{}):r.jsxs("div",{style:yt.donutWrap,children:[r.jsxs("svg",{viewBox:"0 0 140 140",width:"150",height:"150",style:{flexShrink:0},children:[C.map(rt=>{const ht=rt.min/(x||1)*Y,U=r.jsx("circle",{cx:"70",cy:"70",r:D,fill:"none",stroke:rt.color,strokeWidth:w,strokeDasharray:`${ht} ${Y-ht}`,strokeDashoffset:-lt,transform:"rotate(-90 70 70)"},rt.name);return lt+=ht,U}),r.jsx("text",{x:"70",y:"66",textAnchor:"middle",style:yt.donutCenterTop,children:kr(x)}),r.jsx("text",{x:"70",y:"82",textAnchor:"middle",style:yt.donutCenterSub,children:"total"})]}),r.jsx("div",{style:yt.legend,children:C.map(rt=>r.jsxs("div",{style:yt.legendRow,children:[r.jsx("span",{style:{...yt.legendDot,background:rt.color}}),r.jsx("span",{style:yt.legendName,children:rt.name}),r.jsxs("span",{style:yt.legendVal,children:[kr(rt.min)," · ",Math.round(rt.min/(x||1)*100),"%"]})]},rt.name))})]})}),r.jsxs(Ll,{title:"Focus trend",hint:`This ${n} vs the previous two`,children:[r.jsxs("div",{style:yt.trend3,children:[r.jsxs("div",{style:yt.trendCol,children:[r.jsx("div",{style:yt.trendVal,children:kr(x)}),r.jsxs("div",{style:yt.trendLbl,children:["This ",n]})]}),r.jsxs("div",{style:yt.trendCol,children:[r.jsx("div",{style:{...yt.trendVal,color:"var(--text-2)"},children:kr(k)}),r.jsx("div",{style:yt.trendLbl,children:M})]}),r.jsxs("div",{style:yt.trendCol,children:[r.jsx("div",{style:{...yt.trendVal,color:"var(--text-3)"},children:kr(T)}),r.jsx("div",{style:yt.trendLbl,children:S})]})]}),r.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:14},children:r.jsxs("div",{style:{...yt.trendBadge,color:E,background:E+"1A"},children:[r.jsx(A,{size:15})," ",L>0?"+":"",L,"% vs ",M]})}),r.jsx(g0,{items:[{label:`This ${n}`,value:x,color:"#4C9A6B"},{label:M,value:k,color:"var(--text-3)"},{label:S,value:T,color:"var(--text-3)"}]})]})]})}const a0=t=>t===0?"12a":t<12?`${t}a`:t===12?"12p":`${t-12}p`;function d0({hours:t,axis:e}){return r.jsxs("div",{children:[r.jsxs("div",{style:yt.vcPlot,children:[e.ticks.map(n=>r.jsxs("div",{style:{...yt.vcGridRow,bottom:`${n/e.max*100}%`},children:[r.jsx("span",{style:yt.vcYLabel,children:n}),r.jsx("div",{style:yt.vcGridLine})]},n)),r.jsx("div",{style:yt.vcBars,children:t.map((n,o)=>r.jsx("div",{style:yt.vcCell,title:`${e0(o)} · ${n} min`,children:r.jsx("div",{style:{...yt.vcBar,height:n>0?`max(3px, ${n/e.max*100}%)`:0}})},o))})]}),r.jsx("div",{style:yt.vcXAxis,children:t.map((n,o)=>r.jsx("div",{style:yt.vcXCell,children:o%3===0?a0(o):""},o))}),r.jsx("div",{style:yt.vcYTitle,children:"minutes focused, by hour of day"})]})}function c0({sessions:t}){if(!t.length)return r.jsx("div",{style:yt.sceneEmpty,children:"No trees yet this period. 🌱"});const n=t.slice(0,80),o=t.length-n.length,i=s=>Math.round(Math.max(40,Math.min(88,40+(s||0)*.6)));return r.jsxs("div",{children:[r.jsx("div",{style:yt.scene,children:n.map(s=>r.jsx("div",{style:yt.sceneTree,title:`${s.label||"Focus"} · ${kr(s.actual_min||s.duration_min)}`,children:r.jsx(Jd,{species:s.tree,progress:1,size:i(s.actual_min||s.duration_min)})},s.id))}),o>0&&r.jsxs("div",{style:yt.overflow,children:["+",o," more trees"]})]})}function Ll({title:t,hint:e,children:n}){return r.jsxs("div",{style:yt.card,children:[r.jsxs("div",{style:yt.cardHead,children:[r.jsx("div",{style:yt.cardTitle,children:t}),e&&r.jsx("div",{style:yt.cardHint,children:e})]}),n]})}function Bg(){return r.jsx("div",{style:yt.empty,children:"No focus sessions in this period yet. 🌱"})}function g0({items:t}){const e=Math.max(1,...t.map(n=>n.value));return r.jsx("div",{style:yt.tbWrap,children:t.map(n=>r.jsxs("div",{style:yt.tbRow,children:[r.jsx("div",{style:yt.tbLbl,children:n.label}),r.jsx("div",{style:yt.tbTrack,children:r.jsx("div",{style:{...yt.tbBar,width:`${n.value/e*100}%`,background:n.color}})}),r.jsx("div",{style:yt.tbVal,children:kr(n.value)})]},n.label))})}const yt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"20px 16px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:720,margin:"0 auto"},topbar:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16},back:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},h1:{fontSize:20,fontWeight:700,margin:0,fontFamily:"'Fraunces',Georgia,serif"},rangeBar:{display:"flex",gap:6,background:"var(--surface)",padding:5,borderRadius:12,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},rangeBtn:{flex:1,border:"none",background:"none",padding:"9px 0",borderRadius:8,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},rangeOn:{background:"var(--accent-strong)",color:"#fff"},headline:{display:"flex",gap:12,marginBottom:16},bigStat:{flex:1,background:"var(--surface)",borderRadius:14,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},bigVal:{fontSize:26,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em"},bigLbl:{fontSize:12,color:"var(--text-3)",marginTop:3,fontWeight:500},card:{background:"var(--surface)",borderRadius:16,padding:"18px 18px 20px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:16},cardHead:{marginBottom:14},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardHint:{fontSize:12,color:"var(--text-3)",marginTop:2},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"24px 0"},scene:{display:"flex",flexWrap:"wrap",alignItems:"flex-end",justifyContent:"center",gap:"0 2px",padding:"14px 8px 6px",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,minHeight:110,border:"1px solid var(--border)"},sceneTree:{lineHeight:0},sceneEmpty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"34px 0",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,border:"1px solid var(--border)"},overflow:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",marginTop:6,fontWeight:600},forestNumber:{textAlign:"center",marginTop:12,fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},vcPlot:{position:"relative",height:180,paddingLeft:30},vcGridRow:{position:"absolute",left:0,right:0,display:"flex",alignItems:"center",height:0},vcYLabel:{width:26,marginRight:4,textAlign:"right",fontSize:9,color:"var(--text-3)",fontWeight:600,flexShrink:0},vcGridLine:{flex:1,height:1,background:"#EEEBE4"},vcBars:{position:"absolute",left:30,right:0,top:0,bottom:0,display:"flex",alignItems:"flex-end",gap:1},vcCell:{flex:1,height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"center"},vcBar:{width:"72%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",transition:"height 0.3s"},vcXAxis:{display:"flex",marginLeft:30,marginTop:4},vcXCell:{flex:1,textAlign:"center",fontSize:8.5,color:"var(--text-3)",fontWeight:600,overflow:"hidden"},vcYTitle:{textAlign:"center",fontSize:9.5,color:"var(--text-3)",marginTop:6,letterSpacing:"0.06em",textTransform:"uppercase",fontWeight:600},donutWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap",justifyContent:"center"},donutCenterTop:{fontSize:16,fontWeight:800,fill:"var(--text)",fontFamily:"'Fraunces',Georgia,serif"},donutCenterSub:{fontSize:9,fill:"#9A968C",textTransform:"uppercase",letterSpacing:"0.08em"},legend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8},legendDot:{width:11,height:11,borderRadius:3,flexShrink:0},legendName:{flex:1,fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},legendVal:{fontSize:12,color:"var(--text-3)",fontWeight:600,flexShrink:0},trend3:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12,gap:8},trendCol:{textAlign:"center",flex:1},trendVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},trendLbl:{fontSize:11,color:"var(--text-3)",marginTop:2},trendBadge:{display:"inline-flex",alignItems:"center",gap:4,fontSize:13,fontWeight:800,padding:"6px 12px",borderRadius:20,width:"fit-content"},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:78,fontSize:11,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},tbTrack:{flex:1,height:14,background:"#F2F0EA",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:56,fontSize:11,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"}},u0=[15,30,45,60,90],_l="anvil_grove_active",Rg=t=>`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`,_s=t=>t>=60?`${Math.floor(t/60)}h ${t%60}m`:`${t}m`;function p0(){const[t,e]=g.useState("timer"),[n,o]=g.useState("idle"),[i,s]=g.useState(15),[l,a]=g.useState(!1),[d,c]=g.useState(""),[p,y]=g.useState(ao),[m,j]=g.useState(()=>localStorage.getItem("anvil_grove_deepfocus")!=="0"),[x,k]=g.useState(15*60),[T,b]=g.useState({sessions:[],stats:null}),u=g.useRef(null),h=g.useRef(null),I=g.useRef(!1),v=g.useCallback(async()=>{try{b(await O.getFocus())}catch{}},[]),C=g.useCallback(async(P,F)=>{if(!I.current){I.current=!0,localStorage.removeItem(_l);try{await O.createFocus({label:d.trim()||null,tree:p,duration_min:i,actual_min:F,completed:P,started_at:h.current,ended_at:new Date().toISOString()})}catch{}v()}},[d,p,i,v]),L=g.useCallback(()=>{if(n!=="running")return;const P=h.current?Math.round((Date.now()-new Date(h.current).getTime())/6e4):0;o("failed"),C(!1,Math.max(0,Math.min(i,P)))},[n,i,C]),A=g.useCallback(()=>{o("done"),k(0),C(!0,i)},[i,C]);g.useEffect(()=>{v();const P=JSON.parse(localStorage.getItem(_l)||"null");if(P&&P.endTime){const F=Math.round((P.endTime-Date.now())/1e3);s(P.duration),c(P.label||""),y(P.tree||"oak"),u.current=P.endTime,h.current=P.startedAt,F>0?(k(F),o("running")):(o("done"),I.current=!1,C(!0,P.duration))}},[]),g.useEffect(()=>{if(n!=="running")return;const P=()=>{const f=Math.round((u.current-Date.now())/1e3);if(f<=0){A();return}k(f)};P();const F=setInterval(P,250);return()=>clearInterval(F)},[n,A]),g.useEffect(()=>{if(n!=="running"||!m)return;const P=()=>{document.hidden&&L()};return document.addEventListener("visibilitychange",P),()=>document.removeEventListener("visibilitychange",P)},[n,m,L]),g.useEffect(()=>{const P=()=>{!document.hidden&&n!=="running"&&v()};window.addEventListener("focus",P),document.addEventListener("visibilitychange",P);const F=setInterval(P,6e4);return()=>{window.removeEventListener("focus",P),document.removeEventListener("visibilitychange",P),clearInterval(F)}},[v,n]);const E=()=>j(P=>{const F=!P;return localStorage.setItem("anvil_grove_deepfocus",F?"1":"0"),F}),M=()=>{I.current=!1,h.current=new Date().toISOString(),u.current=Date.now()+i*60*1e3,localStorage.setItem(_l,JSON.stringify({endTime:u.current,duration:i,label:d,tree:p,startedAt:h.current})),k(i*60),o("running")},S=()=>{o("idle"),k(i*60)},D=P=>{a(!1),s(P),k(P*60)},w=()=>{l||(a(!0),s(5),k(5*60))},Y=P=>{if(a(!0),P===""){s(0),k(0);return}const F=Math.max(1,Math.min(600,parseInt(P,10)||0));s(F),k(F*60)},lt=i*60,rt=n==="running"?1-x/lt:n==="done"?1:0,ht=130,U=2*Math.PI*ht,H=U*(1-(n==="running"?rt:n==="done"?1:0)),J=T.stats;return t==="stats"?r.jsx(l0,{sessions:T.sessions,onBack:()=>e("timer")}):r.jsxs("div",{style:St.page,children:[r.jsxs("div",{style:St.head,children:[r.jsx("div",{style:St.eyebrow,children:"Anvil · Grove"}),r.jsx("h1",{style:St.h1,children:"Grove"}),r.jsx("div",{style:St.subhead,children:"Plant a tree, stay focused, grow your grove."}),r.jsxs("button",{onClick:()=>e("stats"),style:St.insightsBtn,disabled:n==="running",children:[r.jsx(Th,{size:15})," Insights"]})]}),J&&r.jsxs("div",{style:St.statRow,children:[r.jsx(Ui,{label:"Today",value:_s(J.today_minutes)}),r.jsx(Ui,{label:"Trees",value:J.trees}),r.jsx(Ui,{label:"Streak",value:`${J.streak}d`}),r.jsx(Ui,{label:"Success",value:`${J.success_rate}%`})]}),r.jsxs("div",{style:St.stage,children:[r.jsxs("div",{style:St.ringWrap,children:[r.jsxs("svg",{width:"300",height:"300",viewBox:"0 0 300 300",style:{position:"absolute",inset:0},children:[r.jsx("circle",{cx:"150",cy:"150",r:ht,fill:"none",stroke:"var(--border)",strokeWidth:"10"}),r.jsx("circle",{cx:"150",cy:"150",r:ht,fill:"none",stroke:n==="failed"?"#C2536B":"#4C9A6B",strokeWidth:"10",strokeLinecap:"round",strokeDasharray:U,strokeDashoffset:H,transform:"rotate(-90 150 150)",style:{transition:"stroke-dashoffset 0.4s linear"}})]}),r.jsx("div",{style:St.ringInner,children:r.jsx(Jd,{species:p,progress:n==="idle"?0:rt,withered:n==="failed",size:170})})]}),n==="idle"&&r.jsxs(r.Fragment,{children:[r.jsx("div",{style:St.timeBig,children:Rg(i*60)}),r.jsxs("div",{style:St.controls,children:[r.jsxs("div",{style:St.chips,children:[u0.map(P=>r.jsxs("button",{onClick:()=>D(P),style:{...St.chip,...!l&&i===P?St.chipOn:{}},children:[P,"m"]},P)),r.jsx("button",{onClick:w,style:{...St.chip,...l?St.chipOn:{}},children:"Custom"})]}),l&&r.jsxs("div",{style:St.customRow,children:[r.jsx("input",{type:"number",min:"1",max:"600",inputMode:"numeric",autoFocus:!0,value:i||"",onChange:P=>Y(P.target.value),placeholder:"e.g. 50",style:St.customInput}),r.jsx("span",{style:St.customUnit,children:"minutes"})]}),r.jsx("input",{value:d,onChange:P=>c(P.target.value),placeholder:"What are you focusing on? (optional)",style:St.input,maxLength:60}),r.jsx("div",{style:St.treePick,children:Object.entries(Pe).map(([P,F])=>r.jsxs("button",{onClick:()=>y(P),title:F.label,style:{...St.treeBtn,...p===P?{borderColor:F.leaf,background:F.leaf+"1A"}:{}},children:[r.jsx("span",{style:{...St.treeDot,background:F.leaf}}),F.label]},P))}),r.jsxs("button",{onClick:E,style:St.toggleRow,children:[r.jsxs("div",{style:{textAlign:"left"},children:[r.jsx("div",{style:St.toggleTitle,children:"Deep Focus"}),r.jsx("div",{style:St.toggleHint,children:m?"Leaving the app kills the tree":"Tree survives until you give up"})]}),r.jsx("div",{style:{...St.switch,...m?St.switchOn:{}},children:r.jsx("div",{style:{...St.knob,...m?St.knobOn:{}}})})]}),r.jsx("button",{onClick:M,disabled:i<1,style:{...St.plantBtn,...i<1?{opacity:.5,cursor:"not-allowed"}:{}},children:"Plant tree"})]})]}),n==="running"&&r.jsxs(r.Fragment,{children:[r.jsx("div",{style:St.timeBig,children:Rg(x)}),r.jsx("div",{style:St.focusLabel,children:d.trim()||"Focusing…"}),r.jsx("div",{style:m?St.warn:St.warnSoft,children:m?"⚠ Deep Focus on — leaving this app will kill your tree.":"🌿 Relaxed mode — only Give up ends this session."}),r.jsx("button",{onClick:L,style:St.giveUp,children:"Give up"})]}),n==="done"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:St.resultTitle,children:["🌳 You grew a ",Pe[p].label," tree!"]}),r.jsxs("div",{style:St.resultSub,children:[_s(i)," of focus added to your grove."]}),r.jsx("button",{onClick:S,style:St.plantBtn,children:"Plant another"})]}),n==="failed"&&r.jsxs(r.Fragment,{children:[r.jsx("div",{style:{...St.resultTitle,color:"#C2536B"},children:"Your tree withered."}),r.jsx("div",{style:St.resultSub,children:"You left before the timer finished. Try again?"}),r.jsx("button",{onClick:S,style:St.plantBtn,children:"Try again"})]})]}),r.jsx(b0,{sessions:T.sessions,onDelete:async P=>{await O.deleteFocus(P),v()}})]})}function Ui({label:t,value:e}){return r.jsxs("div",{style:St.stat,children:[r.jsx("div",{style:St.statValue,children:e}),r.jsx("div",{style:St.statLabel,children:t})]})}function b0({sessions:t,onDelete:e}){const n=t.filter(l=>l.completed);if(n.length===0)return r.jsx("div",{style:St.forestEmpty,children:"Your grove is empty. Plant your first tree above. 🌱"});const o={};for(const l of n){const a=(l.started_at||l.created_at||"").slice(0,10);(o[a]||(o[a]=[])).push(l)}const i=Object.keys(o).sort().reverse(),s=l=>{const a=new Date().toISOString().slice(0,10);return l===a?"Today":new Date(l+"T00:00").toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})};return r.jsxs("div",{style:St.forest,children:[r.jsxs("div",{style:St.forestHead,children:["Your Grove · ",n.length," trees"]}),i.map(l=>r.jsxs("div",{style:St.daySection,children:[r.jsxs("div",{style:St.dayLabel,children:[s(l)," · ",o[l].length]}),r.jsx("div",{style:St.treeGrid,children:o[l].map(a=>r.jsxs("div",{style:St.treeCard,title:`${a.label||"Focus"} · ${_s(a.actual_min)}`,onDoubleClick:()=>e(a.id),children:[r.jsx(Zy,{species:a.tree}),r.jsx("div",{style:St.treeCardMin,children:_s(a.actual_min||a.duration_min)}),a.label&&r.jsx("div",{style:St.treeCardLabel,children:a.label})]},a.id))})]},l)),r.jsx("div",{style:St.forestHint,children:"Double-tap a tree to remove it."})]})}const St={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:820,margin:"0 auto"},head:{marginBottom:16,textAlign:"center"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},insightsBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginTop:12},statRow:{display:"flex",gap:10,justifyContent:"center",marginBottom:18,flexWrap:"wrap"},stat:{background:"var(--surface)",borderRadius:12,padding:"10px 18px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",minWidth:78},statValue:{fontSize:19,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},statLabel:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},stage:{background:"var(--surface)",borderRadius:18,padding:"28px 24px 32px",boxShadow:"0 2px 12px rgba(0,0,0,0.06)",display:"flex",flexDirection:"column",alignItems:"center",marginBottom:26},ringWrap:{position:"relative",width:300,height:300,display:"grid",placeItems:"center"},ringInner:{position:"relative",zIndex:1,display:"grid",placeItems:"center"},timeBig:{fontSize:40,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:6},focusLabel:{fontSize:14,color:"var(--text-2)",marginTop:2,fontWeight:500},warn:{fontSize:12,color:"#C2773B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},warnSoft:{fontSize:12,color:"#4C9A6B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},toggleRow:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,border:"1px solid var(--border)",background:"var(--surface)",borderRadius:12,padding:"10px 14px",cursor:"pointer",fontFamily:"inherit",width:"100%"},toggleTitle:{fontSize:14,fontWeight:700,color:"var(--text)"},toggleHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},switch:{width:42,height:24,borderRadius:12,background:"var(--border)",flexShrink:0,padding:2,transition:"background 0.18s",boxSizing:"border-box"},switchOn:{background:"#4C9A6B"},knob:{width:20,height:20,borderRadius:"50%",background:"var(--surface)",boxShadow:"0 1px 2px rgba(0,0,0,0.2)",transform:"translateX(0)",transition:"transform 0.18s"},knobOn:{transform:"translateX(18px)"},controls:{width:"100%",maxWidth:380,display:"flex",flexDirection:"column",gap:14,marginTop:8},chips:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},chip:{border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 16px",borderRadius:20,fontSize:13.5,fontWeight:700,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipOn:{background:"#4C9A6B",color:"#fff",borderColor:"#4C9A6B"},customRow:{display:"flex",alignItems:"center",justifyContent:"center",gap:8},customInput:{border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",fontSize:15,fontWeight:700,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center",width:100},customUnit:{fontSize:13,color:"var(--text-3)",fontWeight:600},input:{border:"1px solid var(--border)",borderRadius:10,padding:"11px 13px",fontSize:14,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center"},treePick:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},treeBtn:{display:"flex",alignItems:"center",gap:6,border:"1.5px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},treeDot:{width:10,height:10,borderRadius:"50%"},plantBtn:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:4},giveUp:{border:"1px solid var(--border)",background:"var(--surface)",color:"#C2536B",padding:"11px 26px",borderRadius:11,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:18},resultTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginTop:14,textAlign:"center"},resultSub:{fontSize:13.5,color:"var(--text-3)",marginTop:6,marginBottom:18,textAlign:"center"},forest:{background:"var(--surface)",borderRadius:16,padding:"20px 22px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},forestHead:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:14},forestEmpty:{background:"var(--surface)",borderRadius:16,padding:"40px 20px",textAlign:"center",color:"var(--text-3)",fontSize:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},daySection:{marginBottom:16},dayLabel:{fontSize:12,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.04em",marginBottom:8},treeGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(80px,1fr))",gap:8},treeCard:{display:"flex",flexDirection:"column",alignItems:"center",padding:"8px 4px",borderRadius:10,cursor:"pointer",background:"var(--surface-2)"},treeCardMin:{fontSize:12,fontWeight:700,color:"#4C9A6B",marginTop:-4},treeCardLabel:{fontSize:10.5,color:"var(--text-3)",marginTop:2,textAlign:"center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:76},forestHint:{fontSize:11,color:"var(--text-3)",textAlign:"center",marginTop:6}},Va=[{code:"INR",symbol:"₹",locale:"en-IN",label:"Indian Rupee"},{code:"USD",symbol:"$",locale:"en-US",label:"US Dollar"},{code:"EUR",symbol:"€",locale:"de-DE",label:"Euro"},{code:"GBP",symbol:"£",locale:"en-GB",label:"British Pound"},{code:"JPY",symbol:"¥",locale:"ja-JP",label:"Japanese Yen"},{code:"AED",symbol:"د.إ",locale:"en-AE",label:"UAE Dirham"},{code:"AUD",symbol:"A$",locale:"en-AU",label:"Australian Dollar"},{code:"CAD",symbol:"C$",locale:"en-CA",label:"Canadian Dollar"},{code:"SGD",symbol:"S$",locale:"en-SG",label:"Singapore Dollar"}],Dg="INR",Wb="anvil_currency",nl=t=>Va.find(e=>e.code===t)||Va[0];function co(){try{return localStorage.getItem(Wb)||Dg}catch{return Dg}}function Ag(t){try{localStorage.setItem(Wb,t)}catch{}return window.dispatchEvent(new CustomEvent("anvil-currency",{detail:t})),t}function Qa(t,e){const n=nl(e||co()),o=Math.round(Number(t)||0);return n.symbol+o.toLocaleString(n.locale)}function Lb(t,e){const n=nl(e||co()),o=Number(t)||0;return n.symbol+o.toLocaleString(n.locale,{minimumFractionDigits:2,maximumFractionDigits:2})}function m0(t,e){const n=nl(e||co()),o=Math.round(Number(t)||0),i=Math.abs(o);return n.code==="INR"?i>=1e7?n.symbol+(o/1e7).toFixed(i>=1e8?0:1)+"Cr":i>=1e5?n.symbol+(o/1e5).toFixed(i>=1e6?0:1)+"L":i>=1e3?n.symbol+(o/1e3).toFixed(i>=1e4?0:1)+"K":n.symbol+o:i>=1e9?n.symbol+(o/1e9).toFixed(1)+"B":i>=1e6?n.symbol+(o/1e6).toFixed(1)+"M":i>=1e3?n.symbol+(o/1e3).toFixed(1)+"K":n.symbol+o}function Zd(){const[t,e]=g.useState(co());return g.useEffect(()=>{const n=o=>e(o.detail||co());return window.addEventListener("anvil-currency",n),()=>window.removeEventListener("anvil-currency",n)},[]),nl(t)}const f0="grove_rates",h0="reward_rates",Yi=Object.keys(Pe),Fg=[{id:"kickstart",label:"Kickstart"},{id:"golden",label:"Golden Book"},{id:"habits",label:"Habits"},{id:"quadrant",label:"Quadrant"},{id:"goals",label:"Goals"},{id:"grove",label:"Grove"},{id:"journal",label:"Journal"},{id:"revision",label:"Revision"},{id:"affirmations",label:"Affirmations"},{id:"skills",label:"Skills"},{id:"spiritual",label:"Spiritual"},{id:"mindscape",label:"Mindscape"},{id:"vault",label:"Vault"}],Mg=new Set(["worth","achievements"]),An="#C9A227",Bo="#3A7CA5",Fn="#C2536B",y0=t=>{const e=Math.floor(t/60),n=Math.round(t%60);return e&&n?`${e}h ${n}m`:e?`${e}h`:`${n}m`},x0=t=>{let e=Math.round((t||0)*60);const n=Math.floor(e/3600);e%=3600;const o=Math.floor(e/60);return e%=60,[n?`${n}h`:null,n||o?`${o}m`:null,`${e}s`].filter(Boolean).join(" ")},v0=()=>{const t=new Date,e=n=>String(n).padStart(2,"0");return`${t.getFullYear()}-${e(t.getMonth()+1)}-${e(t.getDate())}T${e(t.getHours())}:${e(t.getMinutes())}`},Wg=t=>{if(!t)return"";const e=new Date(t.includes("T")?t:t+"T00:00:00");return isNaN(e)?t:e.toLocaleDateString("en-US",t.includes("T")?{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}:{month:"short",day:"numeric",year:"numeric"})},Ye=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,Lg=t=>{const e=new Date(t);return e.setHours(0,0,0,0),e.setDate(e.getDate()-(e.getDay()+6)%7),e},Vi=[{id:"today",label:"Today"},{id:"all",label:"All time"},{id:"tweek",label:"This week"},{id:"tmonth",label:"This month"},{id:"pweek",label:"Last week"},{id:"pmonth",label:"Last month"},{id:"tyear",label:"This year"}];function w0(t){const e=new Date;if(t==="today")return[Ye(e),Ye(e)];if(t==="tweek"){const n=Lg(e),o=new Date(n);return o.setDate(n.getDate()+6),[Ye(n),Ye(o)]}if(t==="pweek"){const n=Lg(e);n.setDate(n.getDate()-7);const o=new Date(n);return o.setDate(n.getDate()+6),[Ye(n),Ye(o)]}return t==="tmonth"?[Ye(new Date(e.getFullYear(),e.getMonth(),1)),Ye(new Date(e.getFullYear(),e.getMonth()+1,0))]:t==="pmonth"?[Ye(new Date(e.getFullYear(),e.getMonth()-1,1)),Ye(new Date(e.getFullYear(),e.getMonth(),0))]:t==="tyear"?[Ye(new Date(e.getFullYear(),0,1)),Ye(new Date(e.getFullYear(),11,31))]:["0000-01-01","9999-12-31"]}function k0(){const t=Zd(),e=B=>Lb(B,t.code),[n,o]=g.useState([]),[i,s]=g.useState([]),[l,a]=g.useState([]),[d,c]=g.useState([]),[p,y]=g.useState([]),[m,j]=g.useState({}),[x,k]=g.useState({}),[T,b]=g.useState(!1),[u,h]=g.useState({}),[I,v]=g.useState({}),[C,L]=g.useState(!1),[A,E]=g.useState(!1),[M,S]=g.useState(null),[D,w]=g.useState(""),[Y,lt]=g.useState(""),[rt,ht]=g.useState(!1),[U,H]=g.useState("today"),J=()=>O.getPayouts().then(c).catch(()=>{}),P=()=>O.getRewardRates().then(a).catch(()=>{});g.useEffect(()=>{(async()=>{try{const[B,vt,Pt,Re,wt,$t,De]=await Promise.all([O.getFocus(),O.getScreenTime(),O.getRewardRates(),O.getPayouts(),O.getAchievements(),O.getSetting(f0),O.getSetting(h0)]);o(B.sessions||[]),s(Array.isArray(vt)?vt:[]),a(Pt||[]),c(Re||[]),y(Array.isArray(wt)?wt:[]),j(($t==null?void 0:$t.value)||{}),k((De==null?void 0:De.value)||{})}catch{}b(!0)})()},[]);const F={};l.forEach(B=>{var vt;(F[vt=`${B.kind}:${B.rkey}`]||(F[vt]=[])).push({eff:B.eff_date,rate:B.rate})}),Object.values(F).forEach(B=>B.sort((vt,Pt)=>vt.eff.localeCompare(Pt.eff)));const f=(B,vt,Pt)=>{const Re=F[`${B}:${vt}`];if(Re){let wt=null;for(const $t of Re)if($t.eff<=Pt)wt=$t.rate;else break;if(wt!==null)return wt}return(B==="focus"?m[vt]:x[vt])||0},V=(B,vt)=>{const Pt=F[`${B}:${vt}`];return Pt&&Pt.length?Pt[Pt.length-1].rate:(B==="focus"?m[vt]:x[vt])??""},[xt,at]=w0(U);let G=0,ft=0;n.filter(B=>B.completed).forEach(B=>{const vt=(B.started_at||B.created_at||"").slice(0,10),Pt=Pe[B.tree]?B.tree:ao;G+=(B.actual_min||0)/60*f("focus",Pt,vt)}),i.forEach(B=>{Mg.has(B.screen)||(ft+=B.seconds/60*f("usage",B.screen,B.date))});const Z=p.reduce((B,vt)=>B+(vt.reward||0),0),et=G+ft+Z,X=d.reduce((B,vt)=>B+vt.amount,0),gt=Math.max(0,et-X),Ct={};Yi.forEach(B=>Ct[B]={minutes:0,earned:0}),n.filter(B=>B.completed).forEach(B=>{const vt=(B.started_at||B.created_at||"").slice(0,10);if(vt<xt||vt>at)return;const Pt=Pe[B.tree]?B.tree:ao,Re=B.actual_min||0;Ct[Pt].minutes+=Re,Ct[Pt].earned+=Re/60*f("focus",Pt,vt)});const W=Yi.reduce((B,vt)=>B+Ct[vt].earned,0),bt={};i.forEach(B=>{var Pt;if(Mg.has(B.screen)||B.date<xt||B.date>at)return;const vt=bt[Pt=B.screen]||(bt[Pt]={seconds:0,earned:0});vt.seconds+=B.seconds,vt.earned+=B.seconds/60*f("usage",B.screen,B.date)});const Et=Object.values(bt).reduce((B,vt)=>B+vt.earned,0),At=p.filter(B=>B.date>=xt&&B.date<=at&&(B.reward||0)>0),Ht=[...At].sort((B,vt)=>vt.date.localeCompare(B.date)||vt.reward-B.reward),be=At.reduce((B,vt)=>B+(vt.reward||0),0),Mt=W+Et+be,Jt=Mt>0?W/Mt*100:0,de=Mt>0?Et/Mt*100:0,je=Mt>0?be/Mt*100:0,Ue=Yi.map(B=>({p:B,...Ct[B],...Pe[B]})).filter(B=>B.minutes>0).sort((B,vt)=>vt.earned-B.earned),Se=Fg.map(B=>({...B,...bt[B.id]||{seconds:0,earned:0}})).filter(B=>B.seconds>0).sort((B,vt)=>vt.earned-B.earned),mo=(B,vt)=>{O.setRewardRate({kind:"focus",rkey:B,rate:Math.max(0,parseFloat(vt)||0)}).then(P).catch(()=>{})},In=(B,vt)=>{O.setRewardRate({kind:"usage",rkey:B,rate:Math.max(0,parseFloat(vt)||0)}).then(P).catch(()=>{})},Ce=B=>{gt<=0||(S(B),w(B==="all"?gt.toFixed(2):""),lt(""))},Mr=async()=>{const B=Math.min(parseFloat(D)||0,gt);B<=0||!Y.trim()||(await O.createPayout({amount:B,note:Y.trim(),date:v0()}),S(null),w(""),lt(""),await J(),ht(!0))},mr=async B=>{await O.deletePayout(B),J()};return r.jsxs("div",{style:N.page,children:[r.jsxs("div",{style:N.head,children:[r.jsx("div",{style:N.eyebrow,children:"Anvil · Rewards"}),r.jsx("h1",{style:N.h1,children:"Rewards"}),r.jsx("div",{style:N.subhead,children:"Your earned rewards from focus and app usage."})]}),r.jsxs("div",{style:N.hero,children:[r.jsx("button",{onClick:()=>ht(B=>!B),style:N.logIcon,title:"View reward log",children:r.jsx(qh,{size:16})}),r.jsx("div",{style:N.heroLabel,children:"Final reward · pending"}),r.jsx("div",{style:N.heroVal,children:e(gt)}),r.jsxs("div",{style:N.heroSub,children:["Earned ",e(et)," · Taken ",e(X),Z>0?` · incl. ${e(Z)} achievement`:""]}),r.jsxs("div",{style:N.heroBtns,children:[r.jsx("button",{onClick:()=>Ce("partial"),disabled:gt<=0,style:{...N.heroBtnGhost,...gt<=0?N.btnDisabled:{}},children:"Take partial"}),r.jsx("button",{onClick:()=>Ce("all"),disabled:gt<=0,style:{...N.heroBtnSolid,...gt<=0?N.btnDisabled:{}},children:"Take all pending"})]})]}),r.jsxs("div",{style:N.statRow,children:[r.jsxs("div",{style:N.statCard,children:[r.jsx("div",{style:N.statVal,children:e(X)}),r.jsx("div",{style:N.statLbl,children:"Total taken"})]}),r.jsxs("div",{style:N.statCard,children:[r.jsx("div",{style:{...N.statVal,color:An},children:e(gt)}),r.jsx("div",{style:N.statLbl,children:"Total pending"})]})]}),r.jsx("div",{style:N.periodRow,children:Vi.map(B=>r.jsx("button",{onClick:()=>H(B.id),style:{...N.periodChip,...U===B.id?N.periodChipOn:{}},children:B.label},B.id))}),Mt>0?r.jsxs("div",{style:N.card,children:[r.jsxs("div",{style:N.cardTitleRow,children:[r.jsx("span",{style:N.cardTitle,children:"Reward split"}),r.jsxs("span",{style:N.periodTotal,children:[e(Mt)," · ",Vi.find(B=>B.id===U).label]})]}),r.jsxs("div",{style:N.splitTrack,children:[r.jsx("div",{style:{width:`${Jt}%`,background:An,height:"100%"}}),r.jsx("div",{style:{width:`${de}%`,background:Bo,height:"100%"}}),r.jsx("div",{style:{width:`${je}%`,background:Fn,height:"100%"}})]}),r.jsxs("div",{style:N.legendRow,children:[r.jsxs("span",{style:N.legendItem,children:[r.jsx("span",{style:{...N.legendDot,background:An}})," Focus ",Math.round(Jt),"% · ",e(W)]}),r.jsxs("span",{style:N.legendItem,children:[r.jsx("span",{style:{...N.legendDot,background:Bo}})," Usage ",Math.round(de),"% · ",e(Et)]}),r.jsxs("span",{style:N.legendItem,children:[r.jsx("span",{style:{...N.legendDot,background:Fn}})," Achievement ",Math.round(je),"% · ",e(be)]})]})]}):r.jsxs("div",{style:{...N.card,...N.muted},children:["No rewards earned in ",Vi.find(B=>B.id===U).label.toLowerCase(),"."]}),r.jsxs("div",{style:N.card,children:[r.jsxs("button",{onClick:()=>L(B=>!B),style:N.collapseBtn,children:[r.jsxs("span",{style:{...N.cardTitle,color:An},children:["Focus Rewards · ",e(W)]}),r.jsx("span",{style:N.collapseHint,children:C?"Hide rates":"Set rates"})]}),C&&r.jsx("div",{style:{...N.rateGrid,marginTop:12},children:Yi.map(B=>r.jsxs("div",{style:N.rateRow,children:[r.jsx("span",{style:{...N.dot,background:Pe[B].leaf}}),r.jsx("span",{style:N.rateName,children:Pe[B].label}),r.jsxs("div",{style:N.rateInputWrap,children:[r.jsx("span",{style:N.unitSign,children:t.symbol}),r.jsx("input",{type:"number",min:"0",step:"0.5",inputMode:"decimal",placeholder:"0",value:u[B]!==void 0?u[B]:V("focus",B),onChange:vt=>h(Pt=>({...Pt,[B]:vt.target.value})),onBlur:vt=>mo(B,vt.target.value),style:N.rateInput}),r.jsx("span",{style:N.unit,children:"/hr"})]})]},B))}),Ue.length>0?r.jsx("div",{style:{...N.rows,marginTop:14},children:Ue.map(B=>r.jsxs("div",{style:N.row,children:[r.jsx("span",{style:{...N.dot,background:B.leaf}}),r.jsx("span",{style:N.rowName,children:B.label}),r.jsx("span",{style:N.rowMeta,children:y0(Math.round(B.minutes))}),r.jsx("span",{style:N.rowAmt,children:e(B.earned)})]},B.p))}):r.jsx("div",{style:N.muted,children:"No focus sessions yet."})]}),r.jsxs("div",{style:N.card,children:[r.jsxs("button",{onClick:()=>E(B=>!B),style:N.collapseBtn,children:[r.jsxs("span",{style:{...N.cardTitle,color:Bo},children:["Usage Rewards · ",e(Et)]}),r.jsx("span",{style:N.collapseHint,children:A?"Hide rates":"Set rates"})]}),A&&r.jsx("div",{style:{...N.rateGrid,marginTop:12},children:Fg.map(B=>r.jsxs("div",{style:N.rateRow,children:[r.jsx("span",{style:N.rateName,children:B.label}),r.jsxs("div",{style:N.rateInputWrap,children:[r.jsx("span",{style:N.unitSign,children:t.symbol}),r.jsx("input",{type:"number",min:"0",step:"0.1",inputMode:"decimal",placeholder:"0",value:I[B.id]!==void 0?I[B.id]:V("usage",B.id),onChange:vt=>v(Pt=>({...Pt,[B.id]:vt.target.value})),onBlur:vt=>In(B.id,vt.target.value),style:N.rateInput}),r.jsx("span",{style:N.unit,children:"/min"})]})]},B.id))}),Se.length>0?r.jsx("div",{style:{...N.rows,marginTop:14},children:Se.map(B=>r.jsxs("div",{style:N.row,children:[r.jsx("span",{style:N.rowName,children:B.label}),r.jsx("span",{style:N.rowMeta,children:x0(B.seconds/60)}),r.jsx("span",{style:N.rowAmt,children:e(B.earned)})]},B.id))}):r.jsx("div",{style:N.muted,children:T?"No usage tracked yet.":"Loading…"})]}),r.jsxs("div",{style:N.card,children:[r.jsxs("div",{style:N.cardTitleRow,children:[r.jsxs("span",{style:{...N.cardTitle,color:Fn},children:["Achievement Rewards · ",e(be)]}),r.jsx("span",{style:N.collapseHint,children:"Set in Achievements"})]}),Ht.length>0?r.jsx("div",{style:{...N.rows,marginTop:14},children:Ht.map(B=>r.jsxs("div",{style:N.row,children:[r.jsx("span",{style:{...N.dot,background:Fn}}),r.jsx("span",{style:N.rowName,children:B.title}),r.jsx("span",{style:N.rowMeta,children:Wg(B.date)}),r.jsx("span",{style:N.rowAmt,children:e(B.reward)})]},B.id))}):r.jsxs("div",{style:{...N.muted,marginTop:10},children:["No achievement rewards in ",Vi.find(B=>B.id===U).label.toLowerCase(),". Add a reward to a win in the Achievements section."]})]}),rt&&r.jsx("div",{style:N.modalOverlay,onClick:()=>ht(!1),children:r.jsxs("div",{style:N.logModal,onClick:B=>B.stopPropagation(),children:[r.jsxs("div",{style:N.logModalHead,children:[r.jsx("span",{style:N.modalTitle,children:"Reward log"}),r.jsx("button",{onClick:()=>ht(!1),style:N.logClose,title:"Close",children:r.jsx(zt,{size:16})})]}),d.length===0?r.jsx("div",{style:{...N.muted,padding:"24px 0",textAlign:"center"},children:"No rewards taken yet."}):r.jsxs(r.Fragment,{children:[r.jsx("div",{style:N.logScroll,children:d.map(B=>r.jsxs("div",{style:N.row,children:[r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("div",{style:N.logNote,children:B.note||"Reward taken"}),r.jsx("div",{style:N.rowMeta,children:Wg(B.date)})]}),r.jsx("span",{style:N.rowAmt,children:e(B.amount)}),r.jsx("button",{onClick:()=>mr(B.id),style:N.del,children:"×"})]},B.id))}),r.jsxs("div",{style:N.totalRow,children:[r.jsx("span",{children:"Total taken"}),r.jsx("span",{style:N.totalVal,children:e(X)})]})]})]})}),Mt>0&&r.jsxs("div",{style:N.card,children:[r.jsx("div",{style:N.cardTitle,children:"Reward breakdown"}),r.jsxs("div",{style:N.pieWrap,children:[r.jsxs("div",{style:N.pieChart,children:[r.jsx("div",{style:{...N.pieDisc,background:`conic-gradient(${An} 0 ${Jt}%, ${Bo} ${Jt}% ${Jt+de}%, ${Fn} ${Jt+de}% 100%)`}}),r.jsxs("div",{style:N.pieHole,children:[r.jsx("span",{style:N.pieHoleVal,children:e(Mt)}),r.jsx("span",{style:N.pieHoleLbl,children:"total"})]})]}),r.jsxs("div",{style:N.pieLegend,children:[r.jsxs("div",{style:N.pieLegRow,children:[r.jsx("span",{style:{...N.legendDot,background:An}}),r.jsx("span",{style:N.pieLegName,children:"Focus"}),r.jsxs("span",{style:N.pieLegPct,children:[Math.round(Jt),"%"]}),r.jsx("span",{style:N.pieLegMin,children:e(W)})]}),r.jsxs("div",{style:N.pieLegRow,children:[r.jsx("span",{style:{...N.legendDot,background:Bo}}),r.jsx("span",{style:N.pieLegName,children:"Usage"}),r.jsxs("span",{style:N.pieLegPct,children:[Math.round(de),"%"]}),r.jsx("span",{style:N.pieLegMin,children:e(Et)})]}),r.jsxs("div",{style:N.pieLegRow,children:[r.jsx("span",{style:{...N.legendDot,background:Fn}}),r.jsx("span",{style:N.pieLegName,children:"Achievement"}),r.jsxs("span",{style:N.pieLegPct,children:[Math.round(je),"%"]}),r.jsx("span",{style:N.pieLegMin,children:e(be)})]})]})]})]}),M&&r.jsx("div",{style:N.modalOverlay,onClick:()=>S(null),children:r.jsxs("div",{style:N.modalCard,onClick:B=>B.stopPropagation(),children:[r.jsx("div",{style:N.modalTitle,children:M==="all"?"Take all pending reward?":"Take partial reward"}),r.jsxs("div",{style:N.modalSub,children:["Pending: ",e(gt)]}),r.jsxs("div",{style:N.modalInputWrap,children:[r.jsx("span",{style:N.modalSign,children:t.symbol}),r.jsx("input",{type:"number",min:"0",step:"0.01",autoFocus:!0,placeholder:gt.toFixed(2),value:D,onChange:B=>w(B.target.value),style:N.modalAmt})]}),r.jsx("input",{placeholder:"What is this reward for? (required)",value:Y,onChange:B=>lt(B.target.value),onKeyDown:B=>B.key==="Enter"&&Mr(),style:N.modalReason}),(()=>{const B=parseFloat(D)>0&&!!Y.trim();return r.jsxs("div",{style:N.modalActions,children:[r.jsx("button",{onClick:()=>S(null),style:N.modalCancel,children:"Cancel"}),r.jsxs("button",{onClick:Mr,disabled:!B,style:{...N.modalConfirm,...B?{}:{opacity:.5,cursor:"not-allowed"}},children:["Confirm · ",e(Math.min(parseFloat(D)||0,gt))]})]})})()]})}),r.jsx("div",{style:N.note,children:"Set rates only affect time from today onward — past time keeps the rate it was earned at."})]})}const N={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},hero:{position:"relative",background:"linear-gradient(135deg,var(--accent-strong),var(--accent-2))",borderRadius:16,padding:"22px 24px",color:"#fff",marginBottom:14,textAlign:"center"},logIcon:{position:"absolute",top:12,right:12,border:"1px solid rgba(255,255,255,0.5)",background:"rgba(255,255,255,0.12)",color:"#fff",width:32,height:32,borderRadius:9,cursor:"pointer",display:"grid",placeItems:"center"},logClose:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:28,height:28,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},logNote:{fontSize:13.5,fontWeight:600,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:200,display:"grid",placeItems:"center",padding:16},modalCard:{background:"var(--surface)",color:"var(--text)",borderRadius:16,padding:"22px 22px 18px",width:360,maxWidth:"100%",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)"},logModal:{background:"var(--surface)",color:"var(--text)",borderRadius:16,padding:"18px 18px 14px",width:440,maxWidth:"100%",maxHeight:"82vh",display:"flex",flexDirection:"column",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)",boxSizing:"border-box"},logModalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8,flexShrink:0},logScroll:{overflowY:"auto",display:"flex",flexDirection:"column",gap:2,paddingRight:2,minHeight:0},modalTitle:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:4},modalSub:{fontSize:12.5,color:"var(--text-3)",fontWeight:600,marginBottom:14},modalInputWrap:{display:"flex",alignItems:"center",gap:4,border:"1px solid var(--border)",borderRadius:10,padding:"8px 12px",background:"var(--surface-2)",marginBottom:8},modalSign:{fontSize:16,color:"var(--text-2)",fontWeight:700},modalAmt:{border:"none",background:"none",outline:"none",flex:1,fontSize:18,fontWeight:700,fontFamily:"inherit",color:"var(--text)"},modalReason:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"9px 12px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",marginBottom:14},modalActions:{display:"flex",gap:8},modalCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},modalConfirm:{flex:1,border:"none",background:"#C9A227",color:"#fff",padding:"10px 14px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},heroLabel:{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",opacity:.85},heroVal:{fontSize:44,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:2,lineHeight:1.05},heroSub:{fontSize:12.5,opacity:.9,marginTop:6},heroBtns:{display:"flex",gap:10,marginTop:16,justifyContent:"center"},heroBtnSolid:{border:"none",background:"#fff",color:"var(--accent-strong)",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},heroBtnGhost:{border:"1px solid rgba(255,255,255,0.6)",background:"transparent",color:"#fff",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},btnDisabled:{opacity:.45,cursor:"not-allowed"},statRow:{display:"flex",gap:10,marginBottom:14},statCard:{flex:1,background:"var(--surface)",borderRadius:12,padding:"12px 14px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},statVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},statLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},card:{background:"var(--surface)",borderRadius:16,padding:"18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:10,flexWrap:"wrap"},periodTotal:{fontSize:13,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text-2)"},periodRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},periodChip:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},periodChipOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},collapseBtn:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",border:"none",background:"none",cursor:"pointer",padding:0,fontFamily:"inherit"},collapseHint:{fontSize:12,fontWeight:700,color:"var(--accent)"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"12px 0"},splitTrack:{display:"flex",height:16,borderRadius:8,overflow:"hidden",marginTop:12,marginBottom:12,border:"1px solid var(--border)"},legendRow:{display:"flex",gap:16,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:600,color:"var(--text-2)"},legendDot:{width:10,height:10,borderRadius:3,flexShrink:0},pieWrap:{display:"flex",alignItems:"center",gap:20,flexWrap:"wrap",marginTop:6},pieChart:{position:"relative",width:130,height:130,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:78,height:78,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:14,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:10},pieLegRow:{display:"flex",alignItems:"center",gap:8},pieLegName:{flex:1,fontSize:13.5,fontWeight:600},pieLegPct:{fontSize:13,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",width:46,textAlign:"right"},pieLegMin:{fontSize:12,color:"var(--text-3)",fontWeight:600,minWidth:64,textAlign:"right"},rows:{display:"flex",flexDirection:"column",gap:2},row:{display:"flex",alignItems:"center",gap:8,padding:"7px 0",borderBottom:"1px solid var(--border)"},dot:{width:10,height:10,borderRadius:3,flexShrink:0},rowName:{flex:1,fontSize:13.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},rowMeta:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,flexShrink:0},rowAmt:{fontSize:13.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",flexShrink:0,minWidth:64,textAlign:"right"},del:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",fontSize:16,lineHeight:1,padding:"0 2px",flexShrink:0},totalRow:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:10,marginTop:4,fontSize:14,fontWeight:700},totalVal:{fontSize:16,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},rateGrid:{display:"flex",flexDirection:"column",gap:10},rateRow:{display:"flex",alignItems:"center",gap:8},rateName:{flex:1,fontSize:14,fontWeight:600},rateInputWrap:{display:"flex",alignItems:"center",gap:3,border:"1px solid var(--border)",borderRadius:9,padding:"4px 10px",background:"var(--surface-2)"},unitSign:{fontSize:14,color:"var(--text-2)",fontWeight:600},rateInput:{border:"none",background:"none",outline:"none",width:64,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},unit:{fontSize:12,color:"var(--text-3)",fontWeight:600},note:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",fontStyle:"italic",marginTop:4}};function j0({onAuthed:t}){const[e,n]=g.useState("login"),[o,i]=g.useState(""),[s,l]=g.useState(""),[a,d]=g.useState(""),[c,p]=g.useState(""),[y,m]=g.useState(!1),j=e==="register",x=async k=>{if(k.preventDefault(),p(""),!s.trim()||!a){p("Email and password are required.");return}if(j&&a.length<6){p("Password must be at least 6 characters.");return}m(!0);try{const T=j?await O.register({name:o,email:s,password:a}):await O.login({email:s,password:a});sy(T.token),t(T.user)}catch(T){p(T.message||"Something went wrong.")}finally{m(!1)}};return r.jsx("div",{style:oe.page,children:r.jsxs("form",{style:oe.card,onSubmit:x,children:[r.jsxs("div",{style:oe.brand,children:[r.jsx("div",{style:oe.logo,children:"B"}),r.jsx("span",{style:oe.brandName,children:"Anvil"})]}),r.jsx("h1",{style:oe.title,children:j?"Create your account":"Welcome back"}),r.jsx("p",{style:oe.sub,children:j?"Start forging your days.":"Sign in to continue."}),j&&r.jsxs("label",{style:oe.field,children:[r.jsx("span",{style:oe.label,children:"Name"}),r.jsx("input",{value:o,onChange:k=>i(k.target.value),placeholder:"Your name",style:oe.input,autoFocus:!0})]}),r.jsxs("label",{style:oe.field,children:[r.jsx("span",{style:oe.label,children:"Email"}),r.jsx("input",{type:"email",value:s,onChange:k=>l(k.target.value),placeholder:"you@example.com",style:oe.input,autoFocus:!j})]}),r.jsxs("label",{style:oe.field,children:[r.jsx("span",{style:oe.label,children:"Password"}),r.jsx("input",{type:"password",value:a,onChange:k=>d(k.target.value),placeholder:"••••••••",style:oe.input})]}),c&&r.jsx("div",{style:oe.error,children:c}),r.jsx("button",{type:"submit",disabled:y,style:{...oe.submit,...y?{opacity:.6}:{}},children:y?"Please wait…":j?"Create account":"Sign in"}),r.jsxs("div",{style:oe.switch,children:[j?"Already have an account?":"New here?"," ",r.jsx("button",{type:"button",onClick:()=>{n(j?"login":"register"),p("")},style:oe.link,children:j?"Sign in":"Create one"})]})]})})}const oe={page:{minHeight:"100vh",display:"grid",placeItems:"center",background:"var(--bg)",fontFamily:"'Inter',system-ui,sans-serif",padding:20},card:{width:"100%",maxWidth:380,background:"var(--surface)",borderRadius:16,padding:"32px 28px",boxShadow:"0 4px 24px rgba(0,0,0,0.08)",display:"flex",flexDirection:"column"},brand:{display:"flex",alignItems:"center",gap:9,marginBottom:20},logo:{width:32,height:32,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},brandName:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},title:{fontSize:22,fontWeight:700,margin:"0 0 4px",fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},sub:{fontSize:13.5,color:"var(--text-3)",margin:"0 0 22px"},field:{display:"flex",flexDirection:"column",gap:5,marginBottom:14},label:{fontSize:12,fontWeight:600,color:"var(--text-2)"},input:{border:"1px solid var(--border)",borderRadius:9,padding:"11px 12px",fontSize:14,fontFamily:"inherit",outline:"none",color:"var(--text)"},error:{background:"rgba(194,83,107,0.10)",color:"#C2536B",fontSize:13,padding:"9px 12px",borderRadius:8,marginBottom:14,fontWeight:500},submit:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"12px",borderRadius:10,fontSize:14.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:4},switch:{fontSize:13,color:"var(--text-2)",textAlign:"center",marginTop:18},link:{border:"none",background:"none",color:"#3A7CA5",fontWeight:700,cursor:"pointer",fontFamily:"inherit",fontSize:13,padding:0}},_g=["Salary","Stocks","Business","Interest","Rent","Gift","Other"],Pg=["Bills","EMI","Rent","Food","Shopping","Transport","Health","Entertainment","Education","Other"],S0={Salary:"#4C9A6B",Stocks:"#3A7CA5",Business:"#C9A227",Interest:"#8268B0",Gift:"#C2773B",Bills:"#C2536B",EMI:"#A23E57",Food:"#E08E45",Shopping:"#8268B0",Transport:"#3A7CA5",Health:"#4C9A6B",Entertainment:"#C9A227",Education:"#5B7C99",Rent:"#5B8C5A",Other:"#9A968C"},_b=t=>S0[t]||"#9A968C",cr="#3E9E6B",gr="#D1556E",Wo=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,Ko=Wo(new Date),C0=[{id:"month",label:"This month"},{id:"last",label:"Last month"},{id:"year",label:"This year"},{id:"all",label:"All time"}];function I0(t){const e=new Date;return t==="month"?[Wo(new Date(e.getFullYear(),e.getMonth(),1)),Ko]:t==="last"?[Wo(new Date(e.getFullYear(),e.getMonth()-1,1)),Wo(new Date(e.getFullYear(),e.getMonth(),0))]:t==="year"?[Wo(new Date(e.getFullYear(),0,1)),Ko]:["0000-01-01","9999-12-31"]}function z0(){const t=Zd(),[e,n]=g.useState("overview"),[o,i]=g.useState([]),[s,l]=g.useState(!1),a=g.useCallback(()=>O.getTxns().then(c=>{i(c),l(!0)}).catch(()=>l(!0)),[]);g.useEffect(()=>{a()},[a]);const d=c=>Qa(c,t.code);return r.jsxs("div",{style:R.page,children:[r.jsxs("div",{style:R.head,children:[r.jsx("div",{style:R.eyebrow,children:"Anvil · Vault"}),r.jsx("h1",{style:R.h1,children:"Vault"}),r.jsx("div",{style:R.subhead,children:"Your money — what comes in, what goes out, and where it's headed."})]}),r.jsx("div",{style:R.tabs,children:[["overview","Overview",Eh],["money","Money",ny],["calc","Calculators",Ih]].map(([c,p,y])=>r.jsxs("button",{onClick:()=>n(c),style:{...R.tab,...e===c?R.tabOn:{}},children:[r.jsx(y,{size:15})," ",p]},c))}),e==="overview"&&r.jsx(T0,{txns:o,loaded:s,money:d,cur:t}),e==="money"&&r.jsx(B0,{txns:o,reload:a,money:d}),e==="calc"&&r.jsx(R0,{money:d,cur:t})]})}function T0({txns:t,loaded:e,money:n,cur:o}){const[i,s]=g.useState("month"),[l,a]=I0(i),d=g.useMemo(()=>t.filter(k=>k.date>=l&&k.date<=a),[t,l,a]),c=d.filter(k=>k.kind==="income"),p=d.filter(k=>k.kind==="expense"),y=c.reduce((k,T)=>k+T.amount,0),m=p.reduce((k,T)=>k+T.amount,0),j=y-m,x=k=>{const T={};return k.forEach(b=>{T[b.category]=(T[b.category]||0)+b.amount}),Object.entries(T).map(([b,u])=>({category:b,amount:u})).sort((b,u)=>u.amount-b.amount)};return r.jsxs(r.Fragment,{children:[r.jsx("div",{style:R.presetRow,children:C0.map(k=>r.jsx("button",{onClick:()=>s(k.id),style:{...R.preset,...i===k.id?R.presetOn:{}},children:k.label},k.id))}),r.jsxs("div",{style:R.sumGrid,children:[r.jsx(Pl,{icon:r.jsx(La,{size:16}),label:"Income",value:n(y),color:cr}),r.jsx(Pl,{icon:r.jsx(_a,{size:16}),label:"Expenses",value:n(m),color:gr}),r.jsx(Pl,{icon:j>=0?r.jsx(zb,{size:16}):r.jsx(Ib,{size:16}),label:"Net savings",value:n(j),color:j>=0?cr:gr})]}),e?d.length===0?r.jsx("div",{style:R.card,children:r.jsxs("div",{style:R.muted,children:["No transactions in this period. Add some under the ",r.jsx("b",{children:"Money"})," tab."]})}):r.jsxs(r.Fragment,{children:[r.jsx(E0,{totalIn:y,totalOut:m}),r.jsxs("div",{style:R.twoCol,children:[r.jsx($g,{title:"Incoming",subtitle:"Where your money comes from",total:y,data:x(c),accent:cr,cur:o}),r.jsx($g,{title:"Outgoing",subtitle:"Where your money goes",total:m,data:x(p),accent:gr,cur:o})]})]}):r.jsx("div",{style:R.muted,children:"Loading…"})]})}function Pl({icon:t,label:e,value:n,color:o}){return r.jsxs("div",{style:R.sumCard,children:[r.jsx("div",{style:{...R.sumIcon,color:o,background:o+"1A"},children:t}),r.jsx("div",{style:R.sumLabel,children:e}),r.jsx("div",{style:{...R.sumVal,color:o},children:n})]})}function $g({title:t,subtitle:e,total:n,data:o,accent:i,cur:s}){let l=0;const a=o.map(c=>{const p=n>0?l/n*100:0;l+=c.amount;const y=n>0?l/n*100:0;return{...c,start:p,end:y,color:_b(c.category),pct:n>0?c.amount/n*100:0}}),d=a.length?`conic-gradient(${a.map(c=>`${c.color} ${c.start}% ${c.end}%`).join(", ")})`:"var(--surface-2)";return r.jsxs("div",{style:R.card,children:[r.jsxs("div",{style:R.cardTitleRow,children:[r.jsxs("div",{children:[r.jsx("div",{style:{...R.cardTitle,color:i},children:t}),r.jsx("div",{style:R.cardSub,children:e})]}),r.jsx("div",{style:{...R.cardTotal,color:i},children:Qa(n,s.code)})]}),o.length===0?r.jsx("div",{style:R.muted,children:"Nothing logged."}):r.jsxs("div",{style:R.pieWrap,children:[r.jsxs("div",{style:R.pieChart,children:[r.jsx("div",{style:{...R.pieDisc,background:d}}),r.jsxs("div",{style:R.pieHole,children:[r.jsx("span",{style:R.pieHoleVal,children:m0(n,s.code)}),r.jsx("span",{style:R.pieHoleLbl,children:"total"})]})]}),r.jsx("div",{style:R.pieLegend,children:a.map(c=>r.jsxs("div",{style:R.legendRow,children:[r.jsx("span",{style:{...R.dot,background:c.color}}),r.jsx("span",{style:R.legendName,children:c.category}),r.jsxs("span",{style:R.legendPct,children:[Math.round(c.pct),"%"]}),r.jsx("span",{style:R.legendAmt,children:Qa(c.amount,s.code)})]},c.category))})]})]})}function E0({totalIn:t,totalOut:e}){const n=t-e,o=t>0?n/t:0,i=t===0?0:Math.max(0,Math.min(100,Math.round(50+o*100)));let s,l,a;t===0?(s="No income logged",l="#9A968C",a="Add your income to see your financial health."):o>=.3?(s="Excellent",l="#3E9E6B",a="You're saving 30%+ of income — keep investing the surplus."):o>=.2?(s="Healthy",l="#4C9A6B",a="Solid savings rate. Consider automating a SIP with the surplus."):o>=.1?(s="Okay",l="#C9A227",a="Decent, but aim for 20%+. Trim your biggest expense category."):o>=0?(s="Tight",l="#C2773B",a="You're saving very little. Review recurring bills and EMIs."):(s="Overspending",l="#D1556E",a="You're spending more than you earn. Cut back to avoid debt.");const d=t>0?Math.min(100,Math.round(e/t*100)):0;return r.jsxs("div",{style:R.card,children:[r.jsxs("div",{style:R.cardTitleRow,children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx(Mh,{size:18,color:l}),r.jsxs("div",{children:[r.jsx("div",{style:R.cardTitle,children:"Financial health"}),r.jsx("div",{style:R.cardSub,children:"Based on your savings rate this period"})]})]}),r.jsxs("div",{style:{textAlign:"right"},children:[r.jsx("div",{style:{...R.healthScore,color:l},children:t===0?"—":i}),r.jsx("div",{style:{...R.healthStatus,color:l},children:s})]})]}),r.jsx("div",{style:R.gaugeTrack,children:r.jsx("div",{style:{...R.gaugeFill,width:`${t===0?0:i}%`,background:l}})}),r.jsxs("div",{style:R.healthStats,children:[r.jsxs("div",{style:R.healthStat,children:[r.jsxs("span",{style:R.healthStatV,children:[t>0?Math.round(o*100):0,"%"]}),r.jsx("span",{style:R.healthStatL,children:"Savings rate"})]}),r.jsxs("div",{style:R.healthStat,children:[r.jsxs("span",{style:R.healthStatV,children:[d,"%"]}),r.jsx("span",{style:R.healthStatL,children:"of income spent"})]})]}),r.jsx("div",{style:{...R.tip,borderColor:l+"55",background:l+"12",color:l},children:a})]})}function B0({txns:t,reload:e,money:n}){const[o,i]=g.useState("expense"),[s,l]=g.useState(""),[a,d]=g.useState("Bills"),[c,p]=g.useState(Ko),[y,m]=g.useState(""),[j,x]=g.useState(null),{deleteItem:k,toasts:T,handleUndo:b,handleDismiss:u}=Ar(O.deleteTxn,O.restoreTxn,e),h=o==="income"?_g:Pg,I=D=>{i(D),d(D==="income"?"Salary":"Bills")},v=async()=>{const D=parseFloat(s);!D||D<=0||(await O.createTxn({kind:o,category:a,amount:D,note:y.trim(),date:c}),l(""),m(""),e())},C=D=>x({id:D.id,kind:D.kind,amount:String(D.amount),category:D.category,date:D.date,note:D.note||""}),L=(j==null?void 0:j.kind)==="income"?_g:Pg,A=D=>x(w=>({...w,kind:D,category:L.includes(w.category)?w.category:D==="income"?"Salary":"Bills"})),E=async()=>{const D=parseFloat(j.amount);!D||D<=0||(await O.updateTxn(j.id,{kind:j.kind,category:j.category,amount:D,note:j.note.trim(),date:j.date}),x(null),e())},M=g.useMemo(()=>{const D={};return t.forEach(w=>{(D[w.date]=D[w.date]||[]).push(w)}),Object.entries(D).sort((w,Y)=>Y[0].localeCompare(w[0]))},[t]),S=D=>new Date(D+"T00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"});return r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:R.card,children:[r.jsx("div",{style:R.cardTitle,children:"Add transaction"}),r.jsxs("div",{style:R.kindToggle,children:[r.jsxs("button",{onClick:()=>I("expense"),style:{...R.kindBtn,...o==="expense"?{background:gr,color:"#fff",borderColor:gr}:{}},children:[r.jsx(_a,{size:15})," Expense"]}),r.jsxs("button",{onClick:()=>I("income"),style:{...R.kindBtn,...o==="income"?{background:cr,color:"#fff",borderColor:cr}:{}},children:[r.jsx(La,{size:15})," Income"]})]}),r.jsxs("div",{style:R.formGrid,children:[r.jsx("input",{type:"number",inputMode:"decimal",placeholder:"Amount",value:s,onChange:D=>l(D.target.value),onKeyDown:D=>D.key==="Enter"&&v(),style:R.input,autoFocus:!0}),r.jsx("select",{value:a,onChange:D=>d(D.target.value),style:R.input,children:h.map(D=>r.jsx("option",{children:D},D))}),r.jsx("input",{type:"date",value:c,max:Ko,onChange:D=>p(D.target.value),style:R.input})]}),r.jsx("input",{placeholder:"Note (optional)",value:y,onChange:D=>m(D.target.value),onKeyDown:D=>D.key==="Enter"&&v(),style:{...R.input,marginTop:8}}),r.jsxs("button",{onClick:v,style:{...R.addBtn,background:o==="income"?cr:gr},children:[r.jsx(ae,{size:15})," Add ",o]})]}),r.jsxs("div",{style:R.card,children:[r.jsx("div",{style:R.cardTitle,children:"History"}),M.length===0?r.jsx("div",{style:R.muted,children:"No transactions yet."}):r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:M.map(([D,w])=>r.jsxs("div",{children:[r.jsx("div",{style:R.dateHead,children:S(D)}),w.map(Y=>(j==null?void 0:j.id)===Y.id?r.jsxs("div",{style:R.editTxn,children:[r.jsxs("div",{style:R.kindToggle,children:[r.jsxs("button",{onClick:()=>A("expense"),style:{...R.kindBtn,...j.kind==="expense"?{background:gr,color:"#fff",borderColor:gr}:{}},children:[r.jsx(_a,{size:14})," Expense"]}),r.jsxs("button",{onClick:()=>A("income"),style:{...R.kindBtn,...j.kind==="income"?{background:cr,color:"#fff",borderColor:cr}:{}},children:[r.jsx(La,{size:14})," Income"]})]}),r.jsxs("div",{style:R.formGrid,children:[r.jsx("input",{type:"number",inputMode:"decimal",value:j.amount,onChange:lt=>x({...j,amount:lt.target.value}),style:R.input}),r.jsx("select",{value:j.category,onChange:lt=>x({...j,category:lt.target.value}),style:R.input,children:L.map(lt=>r.jsx("option",{children:lt},lt))}),r.jsx("input",{type:"date",value:j.date,max:Ko,onChange:lt=>x({...j,date:lt.target.value}),style:R.input})]}),r.jsx("input",{placeholder:"Note (optional)",value:j.note,onChange:lt=>x({...j,note:lt.target.value}),onKeyDown:lt=>lt.key==="Enter"&&E(),style:{...R.input,marginTop:8}}),r.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[r.jsxs("button",{onClick:()=>x(null),style:R.editCancel,children:[r.jsx(zt,{size:14})," Cancel"]}),r.jsxs("button",{onClick:E,style:{...R.addBtn,marginTop:0,flex:1,background:j.kind==="income"?cr:gr},children:[r.jsx(Rt,{size:15})," Save"]})]})]},Y.id):r.jsxs("div",{style:R.txnRow,children:[r.jsx("span",{style:{...R.txnDot,background:_b(Y.category)}}),r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("div",{style:R.txnCat,children:Y.category}),Y.note&&r.jsx("div",{style:R.txnNote,children:Y.note})]}),r.jsxs("span",{style:{...R.txnAmt,color:Y.kind==="income"?cr:gr},children:[Y.kind==="income"?"+":"−",n(Y.amount)]}),r.jsx("button",{onClick:()=>C(Y),style:R.delBtn,children:r.jsx(he,{size:13})}),r.jsx("button",{onClick:()=>k(Y.id,Y.category),style:R.delBtn,children:r.jsx(zt,{size:14})})]},Y.id))]},D))})]}),r.jsx(Fr,{toasts:T,onUndo:b,onDismiss:u})]})}function R0({money:t,cur:e}){return r.jsxs(r.Fragment,{children:[r.jsx(D0,{money:t,cur:e}),r.jsx(F0,{money:t,cur:e})]})}function bn({label:t,value:e,set:n,min:o,max:i,step:s,suffix:l}){return r.jsxs("div",{style:R.field,children:[r.jsxs("div",{style:R.fieldTop,children:[r.jsx("span",{style:R.fieldLabel,children:t}),r.jsxs("div",{style:R.fieldInputWrap,children:[r.jsx("input",{type:"number",value:e,onChange:a=>n(a.target.value),style:R.fieldInput}),l&&r.jsx("span",{style:R.fieldSuffix,children:l})]})]}),r.jsx("input",{type:"range",min:o,max:i,step:s,value:e,onChange:a=>n(a.target.value),style:R.range})]})}function D0({money:t,cur:e}){const[n,o]=g.useState(3e4),[i,s]=g.useState(12),[l,a]=g.useState(15),{invested:d,futureValue:c,gains:p,yearly:y}=g.useMemo(()=>{const j=Math.max(0,parseFloat(n)||0),x=Math.max(0,parseFloat(i)||0),k=Math.max(0,Math.min(60,parseInt(l)||0)),T=x/12/100,b=v=>v<=0?0:T===0?j*v:j*((Math.pow(1+T,v)-1)/T)*(1+T),u=[];for(let v=1;v<=k;v++)u.push({year:v,invested:j*12*v,value:b(v*12)});const h=b(k*12),I=j*12*k;return{invested:I,futureValue:h,gains:h-I,yearly:u}},[n,i,l]),m=Math.max(1,...y.map(j=>j.value));return r.jsxs("div",{style:R.card,children:[r.jsx("div",{style:R.cardTitleRow,children:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx(Qh,{size:18,color:"#3A7CA5"}),r.jsxs("div",{children:[r.jsx("div",{style:R.cardTitle,children:"SIP projection"}),r.jsx("div",{style:R.cardSub,children:"Mutual fund / SIP future value"})]})]})}),r.jsx(bn,{label:"Monthly investment",value:n,set:o,min:500,max:5e5,step:500,suffix:e.symbol}),r.jsx(bn,{label:"Expected return (p.a.)",value:i,set:s,min:1,max:30,step:.5,suffix:"%"}),r.jsx(bn,{label:"Time period",value:l,set:a,min:1,max:40,step:1,suffix:"yrs"}),r.jsxs("div",{style:R.resultHero,children:[r.jsx("div",{style:R.resultLabel,children:"Projected wealth"}),r.jsx("div",{style:{...R.resultVal,color:"#3A7CA5"},children:t(c)})]}),r.jsxs("div",{style:R.splitRow,children:[r.jsxs("div",{style:R.splitItem,children:[r.jsx("span",{style:R.splitV,children:t(d)}),r.jsx("span",{style:R.splitL,children:"Invested"})]}),r.jsxs("div",{style:R.splitItem,children:[r.jsx("span",{style:{...R.splitV,color:"#3E9E6B"},children:t(p)}),r.jsx("span",{style:R.splitL,children:"Est. returns"})]})]}),y.length>0&&r.jsxs("div",{style:R.chartWrap,children:[r.jsx("div",{style:R.chartBars,children:y.map(j=>r.jsx("div",{style:R.chartCol,title:`Year ${j.year}: ${t(j.value)}`,children:r.jsx("div",{style:{...R.chartStack,height:`${j.value/m*100}%`},children:r.jsx("div",{style:{...R.chartGain,height:`${(1-j.invested/j.value)*100}%`}})})},j.year))}),r.jsxs("div",{style:R.chartAxis,children:[r.jsx("span",{children:"Yr 1"}),r.jsxs("span",{style:{marginLeft:"auto"},children:["Yr ",y.length]})]}),r.jsxs("div",{style:R.legend,children:[r.jsxs("span",{style:R.legendItem,children:[r.jsx("span",{style:{...R.legendDot,background:"#9DBFD6"}})," Invested"]}),r.jsxs("span",{style:R.legendItem,children:[r.jsx("span",{style:{...R.legendDot,background:"#3E9E6B"}})," Returns"]})]})]})]})}function Ng(t,e,n,o=0,i=0){let s=Math.max(0,t-i),l=0,a=0,d=i;const c=1200;for(;s>.01&&a<c;){const p=s*e;let y=n+o,m=y-p;if(m<=0)return{months:1/0,totalInterest:1/0,totalPaid:1/0};m>s&&(m=s,y=s+p),s-=m,l+=p,d+=y,a++}return{months:a,totalInterest:l,totalPaid:d}}const Og=t=>{if(!isFinite(t))return"—";const e=Math.floor(t/12),n=t%12;return(e?`${e}y `:"")+`${n}m`},A0=t=>{if(!isFinite(t))return"—";const e=new Date;return e.setMonth(e.getMonth()+t),e.toLocaleDateString("en-US",{month:"short",year:"numeric"})};function F0({money:t,cur:e}){const[n,o]=g.useState(2e6),[i,s]=g.useState(9),[l,a]=g.useState(20),[d,c]=g.useState(5e5),[p,y]=g.useState("once"),[m,j]=g.useState("tenure"),x=g.useMemo(()=>{const h=Math.max(0,parseFloat(n)||0),I=Math.max(0,parseFloat(i)||0)/12/100,v=Math.max(1,Math.round((parseFloat(l)||0)*12)),C=I===0?h/v:h*I*Math.pow(1+I,v)/(Math.pow(1+I,v)-1);return{P:h,i:I,n:v,emi:C,totalPay:C*v,totalInterest:C*v-h}},[n,i,l]),k=p==="monthly"?"tenure":m,T=g.useMemo(()=>{const{P:h,i:I,n:v,emi:C,totalInterest:L}=x,A=Math.max(0,parseFloat(d)||0);if(A<=0)return null;let E=C,M=v,S=L,D=x.totalPay;if(p==="once"&&k==="emi"){const w=Math.max(0,h-A);E=I===0?w/v:w*I*Math.pow(1+I,v)/(Math.pow(1+I,v)-1),M=v,S=E*v-w,D=A+E*v}else if(p==="once"){const w=Ng(h,I,C,0,A);M=w.months,S=w.totalInterest,D=w.totalPaid}else{const w=Ng(h,I,C,A,0);M=w.months,S=w.totalInterest,D=w.totalPaid}return{newEMI:E,newMonths:M,newInterest:S,totalPaid:D,interestSaved:Math.max(0,L-S),monthsSaved:Math.max(0,v-(isFinite(M)?M:v))}},[x,d,p,k]),b=x.totalPay>0?x.P/x.totalPay*100:0,u=p==="once"?Math.max(1e5,Math.round(x.P)):Math.max(5e4,Math.round(x.emi*3));return r.jsxs("div",{style:R.card,children:[r.jsx("div",{style:R.cardTitleRow,children:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx(hb,{size:18,color:"#C2536B"}),r.jsxs("div",{children:[r.jsx("div",{style:R.cardTitle,children:"EMI calculator"}),r.jsx("div",{style:R.cardSub,children:"Loan / mortgage monthly payment"})]})]})}),r.jsx(bn,{label:"Loan amount",value:n,set:o,min:5e4,max:5e7,step:5e4,suffix:e.symbol}),r.jsx(bn,{label:"Interest rate (p.a.)",value:i,set:s,min:1,max:24,step:.1,suffix:"%"}),r.jsx(bn,{label:"Tenure",value:l,set:a,min:1,max:30,step:1,suffix:"yrs"}),r.jsxs("div",{style:R.resultHero,children:[r.jsx("div",{style:R.resultLabel,children:"Monthly EMI"}),r.jsx("div",{style:{...R.resultVal,color:"#C2536B"},children:t(x.emi)})]}),r.jsxs("div",{style:R.emiSplitTrack,children:[r.jsx("div",{style:{width:`${b}%`,background:"#5B7C99",height:"100%"}}),r.jsx("div",{style:{width:`${100-b}%`,background:"#C2536B",height:"100%"}})]}),r.jsxs("div",{style:R.splitRow,children:[r.jsxs("div",{style:R.splitItem,children:[r.jsx("span",{style:{...R.splitV,color:"#5B7C99"},children:t(x.P)}),r.jsx("span",{style:R.splitL,children:"Principal"})]}),r.jsxs("div",{style:R.splitItem,children:[r.jsx("span",{style:{...R.splitV,color:"#C2536B"},children:t(x.totalInterest)}),r.jsx("span",{style:R.splitL,children:"Total interest"})]}),r.jsxs("div",{style:R.splitItem,children:[r.jsx("span",{style:R.splitV,children:t(x.totalPay)}),r.jsx("span",{style:R.splitL,children:"Total payable"})]})]}),r.jsx("div",{style:R.subDivider}),r.jsx("div",{style:R.subTitle,children:"Prepayment planner"}),r.jsx("div",{style:R.cardSub,children:"See what an extra payment does to your loan."}),r.jsx("div",{style:{marginTop:14},children:r.jsx(bn,{label:"Prepayment amount",value:d,set:c,min:0,max:u,step:p==="once"?25e3:1e3,suffix:e.symbol})}),r.jsxs("div",{style:R.segGroup,children:[r.jsx("span",{style:R.segLbl,children:"Type"}),r.jsxs("div",{style:R.segRow,children:[r.jsx(Qi,{label:"One-time",on:p==="once",onClick:()=>y("once")}),r.jsx(Qi,{label:"Every month",on:p==="monthly",onClick:()=>y("monthly")})]})]}),r.jsxs("div",{style:R.segGroup,children:[r.jsx("span",{style:R.segLbl,children:"Strategy"}),r.jsxs("div",{style:R.segRow,children:[r.jsx(Qi,{label:"Reduce tenure",on:k==="tenure",onClick:()=>j("tenure")}),r.jsx(Qi,{label:"Reduce EMI",on:k==="emi",disabled:p==="monthly",onClick:()=>j("emi")})]})]}),p==="monthly"&&r.jsx("div",{style:R.note,children:"An extra monthly payment always shortens the tenure. Switch to a one-time prepayment to reduce your EMI instead."}),T?r.jsxs("div",{style:R.cmpCard,children:[r.jsxs("div",{style:R.cmpRow,children:[r.jsx("span",{style:R.cmpLbl,children:"New EMI"}),r.jsxs("span",{style:R.cmpVal,children:[t(T.newEMI),T.newEMI<x.emi-1&&r.jsxs("span",{style:R.cmpWas,children:[" was ",t(x.emi)]})]})]}),r.jsxs("div",{style:R.cmpRow,children:[r.jsx("span",{style:R.cmpLbl,children:"New tenure"}),r.jsxs("span",{style:R.cmpVal,children:[Og(T.newMonths)," ",r.jsxs("span",{style:R.cmpWas,children:["· paid off ",A0(T.newMonths)]})]})]}),r.jsxs("div",{style:R.cmpRow,children:[r.jsx("span",{style:R.cmpLbl,children:"Total interest"}),r.jsx("span",{style:R.cmpVal,children:t(T.newInterest)})]}),r.jsxs("div",{style:R.cmpRow,children:[r.jsx("span",{style:R.cmpLbl,children:"Total payable"}),r.jsx("span",{style:R.cmpVal,children:t(T.totalPaid)})]}),r.jsxs("div",{style:R.saveRow,children:["You save ",t(T.interestSaved)," in interest",T.monthsSaved>0?` · ${Og(T.monthsSaved)} sooner`:""]})]}):r.jsx("div",{style:R.muted,children:"Enter a prepayment amount to see the impact."})]})}function Qi({label:t,on:e,onClick:n,disabled:o}){return r.jsx("button",{onClick:o?void 0:n,disabled:o,style:{...R.seg,...e?R.segOn:{},...o?R.segDisabled:{}},children:t})}const R={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},tabs:{display:"flex",gap:7,marginBottom:18,flexWrap:"wrap"},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:10,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},presetRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},preset:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:18,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},presetOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},sumGrid:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:16},sumCard:{background:"var(--surface)",borderRadius:14,padding:"14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},sumIcon:{width:30,height:30,borderRadius:9,display:"grid",placeItems:"center",marginBottom:8},sumLabel:{fontSize:11.5,color:"var(--text-3)",fontWeight:600},sumVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:2,letterSpacing:"-0.01em",wordBreak:"break-word"},card:{background:"var(--surface)",borderRadius:16,padding:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)",marginBottom:16},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14,gap:10},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardSub:{fontSize:11.5,color:"var(--text-3)",marginTop:2},cardTotal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"14px 0"},twoCol:{display:"grid",gridTemplateColumns:"1fr",gap:0},dot:{width:10,height:10,borderRadius:3,flexShrink:0},pieWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap"},pieChart:{position:"relative",width:132,height:132,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:80,height:80,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:160,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8},legendName:{flex:1,fontSize:12.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},legendPct:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,width:34,textAlign:"right"},legendAmt:{fontSize:12.5,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:64,textAlign:"right"},healthScore:{fontSize:32,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1},healthStatus:{fontSize:12.5,fontWeight:700,marginTop:2},gaugeTrack:{height:10,background:"var(--surface-2)",borderRadius:6,overflow:"hidden",marginBottom:14},gaugeFill:{height:"100%",borderRadius:6,transition:"width 0.4s"},healthStats:{display:"flex",gap:24,marginBottom:12},healthStat:{display:"flex",flexDirection:"column"},healthStatV:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},healthStatL:{fontSize:11,color:"var(--text-3)",fontWeight:600},tip:{fontSize:12.5,lineHeight:1.5,padding:"10px 12px",borderRadius:10,border:"1px solid",fontWeight:500},kindToggle:{display:"flex",gap:8,marginBottom:12},kindBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},formGrid:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8},input:{border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},addBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",marginTop:10,border:"none",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},dateHead:{fontSize:11,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8},txnRow:{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid var(--border)"},txnDot:{width:9,height:9,borderRadius:"50%",flexShrink:0},txnCat:{fontSize:13.5,fontWeight:600},txnNote:{fontSize:11.5,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},txnAmt:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},delBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",flexShrink:0},editTxn:{background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:12,padding:12,margin:"6px 0"},editCancel:{display:"flex",alignItems:"center",justifyContent:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},field:{marginBottom:16},fieldTop:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},fieldLabel:{fontSize:13,fontWeight:600,color:"var(--text-2)"},fieldInputWrap:{display:"flex",alignItems:"center",gap:4,border:"1px solid var(--border)",borderRadius:8,padding:"5px 10px",background:"var(--surface-2)"},fieldInput:{border:"none",background:"none",outline:"none",width:90,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},fieldSuffix:{fontSize:12,color:"var(--text-3)",fontWeight:600},range:{width:"100%",accentColor:"var(--accent)",cursor:"pointer"},resultHero:{textAlign:"center",padding:"14px 0 6px"},resultLabel:{fontSize:12,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em"},resultVal:{fontSize:34,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:2,wordBreak:"break-word"},splitRow:{display:"flex",gap:10,marginTop:10},splitItem:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",background:"var(--surface-2)",borderRadius:10,padding:"10px 6px"},splitV:{fontSize:14.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",wordBreak:"break-word"},splitL:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginTop:2},chartWrap:{marginTop:18},chartBars:{display:"flex",alignItems:"flex-end",gap:3,height:90},chartCol:{flex:1,height:"100%",display:"flex",alignItems:"flex-end"},chartStack:{width:"100%",background:"#9DBFD6",borderRadius:"3px 3px 0 0",minHeight:2,position:"relative",display:"flex",flexDirection:"column",justifyContent:"flex-start"},chartGain:{width:"100%",background:"#3E9E6B",borderRadius:"3px 3px 0 0"},chartAxis:{display:"flex",fontSize:10,color:"var(--text-3)",fontWeight:600,marginTop:6},legend:{display:"flex",gap:16,justifyContent:"center",marginTop:10},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)",fontWeight:600},legendDot:{width:10,height:10,borderRadius:3},emiSplitTrack:{display:"flex",height:12,borderRadius:6,overflow:"hidden",marginTop:16,border:"1px solid var(--border)"},subDivider:{height:1,background:"var(--border)",margin:"20px 0 14px"},subTitle:{fontSize:15,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},segGroup:{marginBottom:12},segLbl:{fontSize:12,fontWeight:600,color:"var(--text-3)",display:"block",marginBottom:6},segRow:{display:"flex",gap:8},seg:{flex:1,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},segOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},segDisabled:{opacity:.4,cursor:"not-allowed"},note:{fontSize:12,lineHeight:1.5,color:"var(--text-3)",background:"var(--surface-2)",borderRadius:9,padding:"9px 11px",marginBottom:12},cmpCard:{background:"var(--surface-2)",borderRadius:12,padding:"12px 14px",marginTop:4},cmpRow:{display:"flex",justifyContent:"space-between",alignItems:"baseline",padding:"6px 0",borderBottom:"1px solid var(--border)",gap:10},cmpLbl:{fontSize:12.5,color:"var(--text-2)",fontWeight:600},cmpVal:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",textAlign:"right"},cmpWas:{fontSize:11,color:"var(--text-3)",fontWeight:500,fontFamily:"'Inter',system-ui,sans-serif"},saveRow:{marginTop:12,background:"rgba(62,158,107,0.12)",color:"#3E9E6B",borderRadius:9,padding:"10px 12px",fontSize:13,fontWeight:700,textAlign:"center"}},Ka=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],$l={Monday:"Mon",Tuesday:"Tue",Wednesday:"Wed",Thursday:"Thu",Friday:"Fri",Saturday:"Sat",Sunday:"Sun"},Lo=()=>Ka[(new Date().getDay()+6)%7],xr={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"},Hg=Object.keys(xr),Nl=21,Gg="kickstart_tags",Ol=t=>{if(!t)return"";const e=t.trim();if(/^[A-Za-z0-9_-]{11}$/.test(e))return e;const n=e.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return n?n[1]:""},Ug=t=>{if(!t||!String(t).trim())return null;const e=String(t).split(":").map(n=>parseInt(n.trim(),10));return e.some(n=>isNaN(n)||n<0)?null:e.reduce((n,o)=>n*60+o,0)},Ki=t=>{if(t==null)return"";const e=Math.max(0,t|0);return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`},M0=t=>`https://www.youtube.com/embed/${t.youtube_id}?start=${t.start_sec||0}`+(t.end_sec?`&end=${t.end_sec}`:"")+"&autoplay=1&rel=0",W0=()=>({id:null,url:"",title:"",start:"",end:"",days:[Lo()],pillars:[],customs:[]});function L0(){const[t,e]=g.useState([]),[n,o]=g.useState([]),[i,s]=g.useState(!1),[l,a]=g.useState({type:"day",value:Lo()}),[d,c]=g.useState(null),[p,y]=g.useState(null),[m,j]=g.useState(""),x=g.useCallback(async()=>{try{const[w,Y]=await Promise.all([O.getKickstart(),O.getSetting(Gg)]);e(w),o(Array.isArray(Y==null?void 0:Y.value)?Y.value:[])}catch{}s(!0)},[]);g.useEffect(()=>{x()},[x]);const{deleteItem:k,toasts:T,handleUndo:b,handleDismiss:u}=Ar(O.deleteKickstart,O.restoreKickstart,x);g.useEffect(()=>{if(!p)return;const w=t.find(U=>U.id===p);if(!w)return;const Y=w.end_sec?Math.max(1,w.end_sec-(w.start_sec||0)):1/0;let lt=0;const rt=10,ht=setInterval(()=>{if(document.hidden)return;const U=Y-lt;if(U<=0){clearInterval(ht);return}const H=Math.min(rt,U);lt+=H,O.addScreenTime("kickstart",Math.round(H)).catch(()=>{})},rt*1e3);return()=>clearInterval(ht)},[p,t]);const h=w=>{o(w),O.setSetting(Gg,w).catch(()=>{})},I=()=>{const w=m.trim();!w||n.length>=Nl||n.includes(w)||(h([...n,w]),c(Y=>Y&&!Y.customs.includes(w)?{...Y,customs:[...Y.customs,w]}:Y),j(""))},v=w=>h(n.filter(Y=>Y!==w)),C=(w,Y)=>c(lt=>({...lt,[w]:lt[w].includes(Y)?lt[w].filter(rt=>rt!==Y):[...lt[w],Y]})),L=w=>c({id:w.id,url:`https://youtu.be/${w.youtube_id}`,title:w.title,start:Ki(w.start_sec),end:w.end_sec?Ki(w.end_sec):"",days:[...w.days],pillars:[...w.pillars],customs:[...w.customs]}),A=async()=>{const w=Ol(d.url);if(!w||d.days.length===0||!d.title.trim())return;const Y={youtube_id:w,title:d.title.trim(),start_sec:Ug(d.start)||0,end_sec:Ug(d.end),days:d.days,pillars:d.pillars,customs:d.customs};d.id?await O.updateKickstart(d.id,Y):await O.createKickstart(Y),c(null),x()},E=g.useMemo(()=>t.filter(w=>l.type==="all"?!0:l.type==="day"?w.days.includes(l.value):l.type==="pillar"?w.pillars.includes(l.value):l.type==="custom"?w.customs.includes(l.value):!0),[t,l]),M=(w,Y)=>l.type===w&&l.value===Y,S=d?[!Ol(d.url)&&"a valid YouTube link",!d.title.trim()&&"a title",d.days.length===0&&"at least one day"].filter(Boolean):[],D=!!d&&S.length===0;return r.jsxs("div",{style:ot.page,children:[r.jsxs("div",{style:ot.head,children:[r.jsxs("div",{children:[r.jsx("div",{style:ot.eyebrow,children:"Anvil · Kickstart"}),r.jsx("h1",{style:ot.h1,children:"Kickstart"}),r.jsxs("div",{style:ot.subhead,children:["Your motivation hub — the right push for ",Lo(),"."]})]}),!d&&r.jsxs("button",{onClick:()=>c(W0()),style:ot.addBtn,children:[r.jsx(ae,{size:15})," Add video"]})]}),d&&r.jsxs("div",{style:ot.card,children:[r.jsx("div",{style:ot.cardTitle,children:d.id?"Edit video":"Add video"}),r.jsx("input",{placeholder:"YouTube link (or video ID)",value:d.url,onChange:w=>c({...d,url:w.target.value}),style:ot.input,autoFocus:!0}),d.url&&!Ol(d.url)&&r.jsx("div",{style:ot.warn,children:"Couldn't find a YouTube video ID in that link."}),r.jsx("input",{placeholder:"Title (required)",value:d.title,onChange:w=>c({...d,title:w.target.value}),style:{...ot.input,marginTop:8}}),r.jsxs("div",{style:ot.trimRow,children:[r.jsx(Xh,{size:15,color:"var(--text-3)"}),r.jsxs("label",{style:ot.trimField,children:[r.jsx("span",{style:ot.trimLbl,children:"Start"}),r.jsx("input",{placeholder:"0:30",value:d.start,onChange:w=>c({...d,start:w.target.value}),style:ot.trimInput})]}),r.jsx("span",{style:ot.trimArrow,children:"→"}),r.jsxs("label",{style:ot.trimField,children:[r.jsx("span",{style:ot.trimLbl,children:"End"}),r.jsx("input",{placeholder:"end (optional)",value:d.end,onChange:w=>c({...d,end:w.target.value}),style:ot.trimInput})]})]}),r.jsx("div",{style:ot.hint,children:"Only this trimmed part plays. Use m:ss (e.g. 1:30). Leave End blank to play to the end."}),r.jsxs("div",{style:ot.tagBlock,children:[r.jsxs("div",{style:ot.tagLabel,children:["Days ",r.jsx("span",{style:ot.req,children:"required"})]}),r.jsx("div",{style:ot.chipRow,children:Ka.map(w=>r.jsx("button",{onClick:()=>C("days",w),style:{...ot.chip,...d.days.includes(w)?ot.chipOnDark:{}},children:$l[w]},w))})]}),r.jsxs("div",{style:ot.tagBlock,children:[r.jsxs("div",{style:ot.tagLabel,children:["Pillars ",r.jsx("span",{style:ot.opt,children:"optional"})]}),r.jsx("div",{style:ot.chipRow,children:Hg.map(w=>{const Y=d.pillars.includes(w);return r.jsxs("button",{onClick:()=>C("pillars",w),style:{...ot.chip,...Y?{background:xr[w],color:"#fff",borderColor:xr[w]}:{}},children:[r.jsx("span",{style:{...ot.dot,background:Y?"#fff":xr[w]}}),w]},w)})})]}),r.jsxs("div",{style:ot.tagBlock,children:[r.jsxs("div",{style:ot.tagLabel,children:["Custom tags ",r.jsxs("span",{style:ot.opt,children:["optional · ",n.length,"/",Nl]})]}),r.jsxs("div",{style:ot.chipRow,children:[n.map(w=>r.jsxs("span",{style:{...ot.chip,...d.customs.includes(w)?ot.chipOnAccent:{},paddingRight:4},children:[r.jsx("button",{onClick:()=>C("customs",w),style:ot.chipInner,children:w}),r.jsx("button",{onClick:()=>v(w),style:ot.chipX,title:"Delete tag",children:r.jsx(zt,{size:11})})]},w)),n.length===0&&r.jsx("span",{style:ot.muted,children:"No custom tags yet."})]}),n.length<Nl&&r.jsxs("div",{style:ot.newTagRow,children:[r.jsx("input",{placeholder:"New custom tag…",value:m,onChange:w=>j(w.target.value),onKeyDown:w=>w.key==="Enter"&&I(),style:{...ot.input,padding:"7px 10px"}}),r.jsx("button",{onClick:I,style:ot.smallBtn,children:r.jsx(ae,{size:14})})]})]}),!D&&r.jsxs("div",{style:ot.warn,children:["Add ",S.join(", ")," to save."]}),r.jsxs("div",{style:ot.formActions,children:[r.jsxs("button",{onClick:()=>c(null),style:ot.cancelBtn,children:[r.jsx(zt,{size:14})," Cancel"]}),r.jsxs("button",{onClick:A,disabled:!D,style:{...ot.saveBtn,...D?{}:ot.saveDisabled},children:[r.jsx(Rt,{size:15})," ",d.id?"Save":"Add video"]})]})]}),r.jsxs("div",{style:ot.filterCard,children:[r.jsx("button",{onClick:()=>a({type:"all"}),style:{...ot.fChip,...l.type==="all"?ot.fChipOnDark:{}},children:"All"}),r.jsx("span",{style:ot.fDivider}),Ka.map(w=>r.jsxs("button",{onClick:()=>a({type:"day",value:w}),style:{...ot.fChip,...M("day",w)?ot.fChipOnDark:{},...w===Lo()?ot.fToday:{}},children:[$l[w],w===Lo()?" ·":""]},w)),r.jsx("span",{style:ot.fDivider}),Hg.map(w=>r.jsxs("button",{onClick:()=>a({type:"pillar",value:w}),style:{...ot.fChip,...M("pillar",w)?{background:xr[w],color:"#fff",borderColor:xr[w]}:{}},children:[r.jsx("span",{style:{...ot.dot,background:M("pillar",w)?"#fff":xr[w]}}),w]},w)),n.length>0&&r.jsx("span",{style:ot.fDivider}),n.map(w=>r.jsxs("button",{onClick:()=>a({type:"custom",value:w}),style:{...ot.fChip,...M("custom",w)?ot.fChipOnAccent:{}},children:[r.jsx(ty,{size:11})," ",w]},w))]}),i?E.length===0?r.jsx("div",{style:ot.empty,children:t.length===0?"No videos yet — add your first motivation clip.":"No videos for this tag."}):r.jsx("div",{style:ot.grid,children:E.map(w=>r.jsxs("div",{style:ot.videoCard,children:[r.jsx("div",{style:ot.thumbWrap,children:p===w.id?r.jsx("iframe",{src:M0(w),title:w.title||w.youtube_id,style:ot.iframe,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):r.jsxs("button",{onClick:()=>y(w.id),style:ot.thumbBtn,children:[r.jsx("img",{src:`https://img.youtube.com/vi/${w.youtube_id}/hqdefault.jpg`,alt:"",style:ot.thumb}),r.jsx("span",{style:ot.playOverlay,children:r.jsx(kb,{size:22,color:"#fff",fill:"#fff"})}),r.jsxs("span",{style:ot.trimBadge,children:[Ki(w.start_sec),w.end_sec?` – ${Ki(w.end_sec)}`:"+"]})]})}),r.jsxs("div",{style:ot.videoBody,children:[r.jsx("div",{style:ot.videoTitle,children:w.title||"Untitled clip"}),r.jsxs("div",{style:ot.tagWrap,children:[w.days.map(Y=>r.jsx("span",{style:ot.dayTag,children:$l[Y]},Y)),w.pillars.map(Y=>r.jsx("span",{style:{...ot.pillTag,color:xr[Y]||"var(--text-2)",borderColor:xr[Y]||"var(--border)"},children:Y},Y)),w.customs.map(Y=>r.jsx("span",{style:ot.customTag,children:Y},Y))]}),r.jsxs("div",{style:ot.cardActions,children:[r.jsx("button",{onClick:()=>L(w),style:ot.iconBtn,title:"Edit",children:r.jsx(he,{size:13})}),r.jsx("button",{onClick:()=>k(w.id,w.title||"video"),style:ot.iconBtn,title:"Delete",children:r.jsx(zt,{size:14})})]})]})]},w.id))}):r.jsx("div",{style:ot.muted,children:"Loading…"}),r.jsx(Fr,{toasts:T,onUndo:b,onDismiss:u})]})}const ot={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:1e3,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},input:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},warn:{fontSize:11.5,color:"#C2773B",marginTop:5,fontWeight:600},hint:{fontSize:11.5,color:"var(--text-3)",marginTop:6,lineHeight:1.4},trimRow:{display:"flex",alignItems:"flex-end",gap:10,marginTop:10},trimField:{display:"flex",flexDirection:"column",gap:4,flex:1},trimLbl:{fontSize:11,color:"var(--text-2)",fontWeight:600},trimInput:{border:"1px solid var(--border)",borderRadius:8,padding:"8px 10px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},trimArrow:{color:"var(--text-3)",paddingBottom:9},tagBlock:{marginTop:14},tagLabel:{fontSize:12,fontWeight:700,color:"var(--text-2)",marginBottom:7},req:{fontSize:10,fontWeight:700,color:"#C2536B",textTransform:"uppercase",marginLeft:6},opt:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",marginLeft:6},chipRow:{display:"flex",gap:6,flexWrap:"wrap"},chip:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},chipOnDark:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},chipOnAccent:{background:"var(--accent)",color:"#fff",borderColor:"var(--accent)"},chipInner:{border:"none",background:"none",color:"inherit",cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:600,padding:0},chipX:{border:"none",background:"rgba(0,0,0,0.12)",color:"inherit",cursor:"pointer",display:"grid",placeItems:"center",borderRadius:"50%",width:16,height:16,padding:0},newTagRow:{display:"flex",gap:6,marginTop:8,maxWidth:280},smallBtn:{border:"none",background:"var(--accent)",color:"#fff",width:34,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},dot:{width:8,height:8,borderRadius:"50%",flexShrink:0,display:"inline-block"},formActions:{display:"flex",gap:8,marginTop:16},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:"var(--accent)",color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"},filterCard:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:12,marginBottom:18},fChip:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},fChipOnDark:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},fChipOnAccent:{background:"var(--accent)",color:"#fff",borderColor:"var(--accent)"},fToday:{borderColor:"var(--accent)",borderWidth:2},fDivider:{width:1,alignSelf:"stretch",background:"var(--border)",margin:"0 2px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:14},videoCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},thumbWrap:{position:"relative",width:"100%",aspectRatio:"16 / 9",background:"#000"},thumbBtn:{border:"none",padding:0,margin:0,cursor:"pointer",width:"100%",height:"100%",position:"relative",display:"block",background:"#000"},thumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},playOverlay:{position:"absolute",inset:0,display:"grid",placeItems:"center",background:"rgba(0,0,0,0.28)"},trimBadge:{position:"absolute",bottom:8,right:8,background:"rgba(0,0,0,0.75)",color:"#fff",fontSize:11,fontWeight:700,padding:"2px 7px",borderRadius:6,fontFamily:"'Fraunces',Georgia,serif"},iframe:{width:"100%",height:"100%",border:"none",display:"block"},videoBody:{padding:"12px 13px",display:"flex",flexDirection:"column",gap:8},videoTitle:{fontSize:14,fontWeight:700},tagWrap:{display:"flex",gap:5,flexWrap:"wrap"},dayTag:{fontSize:10,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",padding:"2px 7px",borderRadius:8},pillTag:{fontSize:10,fontWeight:700,border:"1px solid",borderRadius:8,padding:"2px 7px"},customTag:{fontSize:10,fontWeight:700,color:"var(--accent)",background:"color-mix(in srgb, var(--accent) 14%, transparent)",padding:"2px 7px",borderRadius:8},cardActions:{display:"flex",gap:4,justifyContent:"flex-end"},iconBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"}},Pb=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,Yg=()=>Pb(new Date),Vg=(t,e)=>{const n=new Date(t+"T00:00:00");return n.setDate(n.getDate()+e),Pb(n)},Qg=t=>new Date(t+"T00:00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",year:"numeric"}),_0=t=>{if(!t)return"";const e=t.trim();if(/^[A-Za-z0-9_-]{11}$/.test(e))return e;const n=e.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return n?n[1]:""},P0=t=>new Promise((e,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:l,height:a}=i;l>a&&l>900?(a=a*900/l,l=900):a>900&&(l=l*900/a,a=900);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(i,0,0,l,a),e(d.toDataURL("image/jpeg",.82))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(t)});function $0(){const[t,e]=g.useState([]),[n,o]=g.useState(!1),[i,s]=g.useState(null),[l,a]=g.useState(!1),[d,c]=g.useState({title:"",image:""}),[p,y]=g.useState(""),[m,j]=g.useState(!0),[x,k]=g.useState(null),T=g.useCallback(async()=>{try{e(await O.getGoldenGoals())}catch{}o(!0)},[]);g.useEffect(()=>{T()},[T]),g.useEffect(()=>{O.getSetting("golden_music").then(v=>y(_0((v==null?void 0:v.value)||""))).catch(()=>{})},[]);const b=async()=>{if(!d.title.trim())return;const v=await O.createGolden({title:d.title.trim(),image:d.image});c({title:"",image:""}),a(!1),await T(),s(v.id)},u=async(v,C)=>{var A;const L=(A=v.target.files)==null?void 0:A[0];if(L)try{C(await P0(L))}catch{}},h=t.filter(v=>!v.achieved),I=t.filter(v=>v.achieved);return i?r.jsxs("div",{style:it.page,children:[r.jsx(H0,{musicId:p,on:m}),r.jsx(N0,{goalId:i,onBack:()=>s(null),onReload:T,onCelebrate:(v,C)=>k({title:v,days:C}),pickImage:u,musicId:p,musicOn:m,setMusicOn:j}),x&&r.jsx(O0,{data:x,onClose:()=>k(null)})]}):r.jsxs("div",{style:it.page,children:[r.jsxs("div",{style:it.head,children:[r.jsxs("div",{children:[r.jsx("div",{style:it.eyebrow,children:"Anvil · Golden Book"}),r.jsx("h1",{style:it.h1,children:"Golden Book"}),r.jsx("div",{style:it.subhead,children:"Write your dreams into being — a little every day."})]}),!l&&r.jsxs("button",{onClick:()=>a(!0),style:it.addBtn,children:[r.jsx(ae,{size:15})," New dream"]})]}),l&&r.jsxs("div",{style:it.card,children:[r.jsx("div",{style:it.cardTitle,children:"Manifest a new dream"}),r.jsx("textarea",{autoFocus:!0,placeholder:"Write your dream as if it's already true…",value:d.title,onChange:v=>c({...d,title:v.target.value}),style:it.textarea}),r.jsxs("label",{style:it.photoPick,children:[d.image?r.jsx("img",{src:d.image,alt:"",style:it.photoPreview}):r.jsxs("span",{style:it.photoEmpty,children:[r.jsx(el,{size:18})," Add a photo"]}),r.jsx("input",{type:"file",accept:"image/*",onChange:v=>u(v,C=>c({...d,image:C})),style:{display:"none"}})]}),r.jsxs("div",{style:it.formActions,children:[r.jsxs("button",{onClick:()=>{a(!1),c({title:"",image:""})},style:it.cancelBtn,children:[r.jsx(zt,{size:14})," Cancel"]}),r.jsxs("button",{onClick:b,disabled:!d.title.trim(),style:{...it.saveBtn,...d.title.trim()?{}:it.saveDisabled},children:[r.jsx(Rt,{size:15})," Create"]})]})]}),n?r.jsxs(r.Fragment,{children:[h.length===0&&I.length===0&&!l&&r.jsx("div",{style:it.empty,children:"No dreams yet. Add your first one and revisit it daily."}),h.length>0&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:it.sectionTitle,children:[r.jsx(vi,{size:15,color:"#C9A227"})," Manifesting ",r.jsx("span",{style:it.badge,children:h.length})]}),r.jsx("div",{style:it.grid,children:h.map(v=>r.jsx(Kg,{g:v,onOpen:()=>s(v.id)},v.id))})]}),I.length>0&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{...it.sectionTitle,marginTop:22},children:[r.jsx(Rr,{size:15,color:"#4C9A6B"})," Manifested ",r.jsx("span",{style:it.badge,children:I.length})]}),r.jsx("div",{style:it.grid,children:I.map(v=>r.jsx(Kg,{g:v,onOpen:()=>s(v.id),achieved:!0},v.id))})]})]}):r.jsx("div",{style:it.muted,children:"Loading…"})]})}function Kg({g:t,onOpen:e,achieved:n}){return r.jsxs("button",{onClick:e,style:{...it.goalCard,...n?{opacity:.96}:{}},children:[r.jsxs("div",{style:it.thumbWrap,children:[t.image?r.jsx("img",{src:t.image,alt:"",style:it.thumb}):r.jsx("div",{style:it.thumbEmpty,children:r.jsx(vi,{size:26,color:"var(--text-3)"})}),n&&r.jsx("span",{style:it.stamp,children:"✦ Manifested"})]}),r.jsxs("div",{style:it.goalBody,children:[r.jsx("div",{style:it.goalTitle,children:t.title}),r.jsxs("div",{style:it.goalMeta,children:[n?r.jsxs("span",{style:{...it.metaPill,color:"#4C9A6B",background:"rgba(76,154,107,0.12)"},children:[r.jsx(Rr,{size:12})," ",t.days_to_manifest!=null?`in ${t.days_to_manifest} day${t.days_to_manifest===1?"":"s"}`:"done"]}):r.jsxs("span",{style:{...it.metaPill,color:"#C2773B",background:"rgba(194,119,59,0.12)"},children:[r.jsx(bo,{size:12})," ",t.streak," day streak"]}),r.jsxs("span",{style:it.metaDim,children:[t.total_days," entr",t.total_days===1?"y":"ies"]})]})]})]})}function N0({goalId:t,onBack:e,onReload:n,onCelebrate:o,pickImage:i,musicId:s,musicOn:l,setMusicOn:a}){const[d,c]=g.useState(null),[p,y]=g.useState({}),[m,j]=g.useState(Yg()),[x,k]=g.useState(""),[T,b]=g.useState(null),u=Yg(),h=g.useCallback(async()=>{const D=await O.getGoldenGoal(t);c(D);const w={};D.entries.forEach(Y=>{w[Y.date]=Y.text}),y(w),k(w[u]||"")},[t,u]);if(g.useEffect(()=>{h()},[h]),!d)return r.jsx("div",{style:it.muted,children:"Loading…"});const I=m===u,v=m>d.created_date,C=m<u,L=async()=>{await O.upsertGoldenEntry(t,{date:u,text:x}),await h(),n()},A=async()=>{const D=await O.achieveGolden(t);o(d.title,D.days_to_manifest),await h(),n()},E=async()=>{await O.unachieveGolden(t),await h(),n()},M=async()=>{T.trim()&&(await O.updateGolden(t,{title:T.trim()}),b(null),await h(),n())},S=D=>O.updateGolden(t,{image:D}).then(()=>{h(),n()});return r.jsxs(r.Fragment,{children:[r.jsxs("button",{onClick:e,style:it.backBtn,children:[r.jsx(bb,{size:16})," All dreams"]}),r.jsxs("div",{style:it.detailHero,children:[r.jsxs("label",{style:it.heroPhoto,children:[d.image?r.jsx("img",{src:d.image,alt:"",style:it.heroImg}):r.jsxs("span",{style:it.photoEmpty,children:[r.jsx(el,{size:20})," Add a photo"]}),r.jsxs("span",{style:it.photoEdit,children:[r.jsx(he,{size:12})," Edit photo"]}),r.jsx("input",{type:"file",accept:"image/*",onChange:D=>i(D,S),style:{display:"none"}})]}),r.jsxs("div",{style:it.heroInfo,children:[d.achieved&&r.jsxs("span",{style:it.heroStamp,children:["✦ Manifested",d.days_to_manifest!=null?` in ${d.days_to_manifest} day${d.days_to_manifest===1?"":"s"}`:""]}),T!==null?r.jsxs("div",{style:{display:"flex",gap:6,width:"100%"},children:[r.jsx("textarea",{autoFocus:!0,value:T,onChange:D=>b(D.target.value),style:{...it.textarea,minHeight:60}}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[r.jsx("button",{onClick:M,style:it.iconSave,children:r.jsx(Rt,{size:14})}),r.jsx("button",{onClick:()=>b(null),style:it.iconCancel,children:r.jsx(zt,{size:14})})]})]}):r.jsxs("div",{style:it.heroTitleRow,children:[r.jsx("div",{style:it.heroTitle,children:d.title}),r.jsx("button",{onClick:()=>b(d.title),style:it.ghostBtn,title:"Edit",children:r.jsx(he,{size:13})})]}),r.jsxs("div",{style:it.heroStats,children:[r.jsxs("span",{style:{...it.metaPill,color:"#C2773B",background:"rgba(194,119,59,0.12)"},children:[r.jsx(bo,{size:13})," ",d.streak," day streak"]}),r.jsxs("span",{style:it.metaDim,children:[d.total_days," entr",d.total_days===1?"y":"ies"]}),r.jsxs("span",{style:it.metaDim,children:["since ",Qg(d.created_date)]})]})]})]}),r.jsxs("div",{style:it.writeCard,children:[r.jsx("div",{style:it.tuneRow,children:s?r.jsxs("button",{onClick:()=>a(D=>!D),style:{...it.tuneBtn,...l?it.tuneOn:{}},children:[l?r.jsx(vb,{size:14}):r.jsx(wb,{size:14})," Soft tunes"]}):r.jsx("span",{style:it.tuneHint,children:"Add a track in Settings → Music"})}),r.jsxs("div",{style:it.writeNav,children:[r.jsx("button",{onClick:()=>j(D=>Vg(D,-1)),disabled:!v,style:{...it.navBtn,...v?{}:it.navDisabled},children:r.jsx(Cn,{size:16})}),r.jsx("div",{style:it.writeDate,children:I?"Today":Qg(m)}),r.jsx("button",{onClick:()=>j(D=>Vg(D,1)),disabled:!C,style:{...it.navBtn,...C?{}:it.navDisabled},children:r.jsx(nn,{size:16})})]}),I&&!d.achieved?r.jsxs(r.Fragment,{children:[r.jsx("textarea",{value:x,onChange:D=>k(D.target.value),placeholder:"Write it again today, as if it's already yours…",style:it.writeArea}),r.jsxs("button",{onClick:L,style:it.writeSave,children:[r.jsx(Rt,{size:15})," Save today's entry"]})]}):r.jsx("div",{style:it.readEntry,children:p[m]?r.jsxs(r.Fragment,{children:[r.jsx(jb,{size:16,color:"var(--text-3)"}),r.jsx("p",{style:it.readText,children:p[m]})]}):r.jsx("div",{style:it.muted,children:"Nothing written on this day."})})]}),d.achieved?r.jsx("button",{onClick:E,style:it.unmanifestBtn,children:"Undo manifested"}):r.jsxs("button",{onClick:A,style:it.manifestBtn,children:[r.jsx(vi,{size:16})," Mark as manifested"]})]})}function O0({data:t,onClose:e}){return r.jsx("div",{style:it.celebOverlay,onClick:e,children:r.jsxs("div",{style:it.celebBox,onClick:n=>n.stopPropagation(),children:[r.jsx("div",{style:it.celebEmoji,children:"✨🌟✨"}),r.jsx("div",{style:it.celebTitle,children:"It's happening!"}),r.jsxs("div",{style:it.celebDream,children:['"',t.title,'"']}),r.jsxs("div",{style:it.celebSub,children:[t.days!=null?`Manifested in ${t.days} day${t.days===1?"":"s"}.`:"Manifested."," The universe delivered. 🙏"]}),r.jsx("button",{onClick:e,style:it.celebBtn,children:"Wonderful"})]})})}function H0({musicId:t,on:e}){return!t||!e?null:r.jsx("iframe",{title:"golden-music",src:`https://www.youtube.com/embed/${t}?autoplay=1&loop=1&playlist=${t}&controls=0&modestbranding=1&playsinline=1`,allow:"autoplay; encrypted-media",style:{position:"fixed",left:-1e4,top:0,width:320,height:180,border:"none"}})}const ln="#C9A227",it={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:860,margin:"0 auto",position:"relative"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:ln,color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},textarea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"11px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:70,resize:"vertical",lineHeight:1.5},photoPick:{display:"block",marginTop:10,cursor:"pointer",borderRadius:12,overflow:"hidden",border:"1px dashed var(--border)"},photoPreview:{width:"100%",maxHeight:220,objectFit:"cover",display:"block"},photoEmpty:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"26px 0",color:"var(--text-3)",fontSize:13,fontWeight:600},formActions:{display:"flex",gap:8,marginTop:14},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:ln,color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:12},badge:{fontSize:11,fontWeight:700,background:"var(--hover)",color:"var(--text-2)",borderRadius:10,padding:"1px 7px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:14},goalCard:{textAlign:"left",border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,overflow:"hidden",cursor:"pointer",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",padding:0,fontFamily:"inherit",display:"flex",flexDirection:"column"},thumbWrap:{position:"relative",width:"100%",aspectRatio:"16 / 10",background:"var(--surface-2)"},thumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},thumbEmpty:{width:"100%",height:"100%",display:"grid",placeItems:"center"},stamp:{position:"absolute",top:8,right:8,transform:"rotate(6deg)",background:"rgba(76,154,107,0.95)",color:"#fff",fontSize:11,fontWeight:800,letterSpacing:"0.04em",padding:"3px 9px",borderRadius:6,border:"1.5px solid #fff",textTransform:"uppercase"},goalBody:{padding:"11px 13px",display:"flex",flexDirection:"column",gap:8},goalTitle:{fontSize:14,fontWeight:600,lineHeight:1.35,display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"},goalMeta:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},metaPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11.5,fontWeight:700,padding:"2px 8px",borderRadius:10},metaDim:{fontSize:11,color:"var(--text-3)",fontWeight:500},backBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit",marginBottom:16},detailHero:{display:"flex",flexDirection:"column",gap:14,marginBottom:16},heroPhoto:{position:"relative",width:"100%",borderRadius:14,overflow:"hidden",border:"1px solid var(--border)",cursor:"pointer",background:"var(--surface-2)",display:"flex",alignItems:"center",justifyContent:"center",minHeight:120},heroImg:{width:"100%",maxHeight:"62vh",objectFit:"contain",display:"block"},photoEdit:{position:"absolute",bottom:8,right:8,display:"flex",alignItems:"center",gap:5,background:"rgba(0,0,0,0.6)",color:"#fff",fontSize:11,fontWeight:600,padding:"4px 8px",borderRadius:7},heroInfo:{display:"flex",flexDirection:"column",gap:10,alignItems:"center",textAlign:"center"},heroStamp:{alignSelf:"center",background:"rgba(76,154,107,0.14)",color:"#4C9A6B",fontSize:12,fontWeight:800,padding:"4px 10px",borderRadius:8,letterSpacing:"0.03em"},heroTitleRow:{display:"flex",alignItems:"flex-start",gap:8,justifyContent:"center"},heroTitle:{fontSize:23,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.35},heroStats:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap",justifyContent:"center"},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",flexShrink:0},iconSave:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},iconCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},writeCard:{background:"var(--surface)",borderRadius:14,padding:16,border:"1px solid var(--border)",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},tuneRow:{display:"flex",justifyContent:"flex-end",marginBottom:10},tuneBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 12px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tuneOn:{background:ln,color:"#fff",borderColor:ln},tuneHint:{fontSize:11,color:"var(--text-3)",fontWeight:500},writeNav:{display:"flex",alignItems:"center",justifyContent:"center",gap:14,marginBottom:12},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center"},navDisabled:{opacity:.35,cursor:"not-allowed"},writeDate:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:150,textAlign:"center"},writeArea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"12px",fontSize:15,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:120,resize:"vertical",lineHeight:1.6},writeSave:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",marginTop:10,border:"none",background:ln,color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},readEntry:{display:"flex",gap:8,padding:"6px 2px"},readText:{fontSize:15,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.6,margin:0,whiteSpace:"pre-wrap"},manifestBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,width:"100%",border:"none",background:"linear-gradient(135deg,#C9A227,#E0BD45)",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:800,cursor:"pointer",fontFamily:"inherit",boxShadow:"0 2px 10px rgba(201,162,39,0.35)"},unmanifestBtn:{display:"block",margin:"0 auto",border:"none",background:"none",color:"var(--text-3)",fontSize:12,fontWeight:600,cursor:"pointer",textDecoration:"underline",fontFamily:"inherit"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.6)",zIndex:200,display:"grid",placeItems:"center",padding:16},celebBox:{background:"var(--surface)",color:"var(--text)",borderRadius:20,padding:"36px 30px",textAlign:"center",maxWidth:360,boxShadow:"0 12px 48px rgba(0,0,0,0.3)"},celebEmoji:{fontSize:40,marginBottom:10},celebTitle:{fontSize:24,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginBottom:10,color:ln},celebDream:{fontSize:15,fontStyle:"italic",fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.5,marginBottom:10},celebSub:{fontSize:13.5,color:"var(--text-2)",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:ln,color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},Hl=[{id:"meditation",label:"Meditation Hub",icon:Ch,color:"#8268B0"},{id:"visualization",label:"Visualization",icon:Ws,color:"#3A7CA5"}],Xg=t=>{if(!t)return"";const e=t.trim();if(/^[A-Za-z0-9_-]{11}$/.test(e))return e;const n=e.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return n?n[1]:""},G0=t=>new Promise((e,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:l,height:a}=i;l>a&&l>1e3?(a=a*1e3/l,l=1e3):a>1e3&&(l=l*1e3/a,a=1e3);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(i,0,0,l,a),e(d.toDataURL("image/jpeg",.82))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(t)}),U0=t=>({id:null,kind:t,title:"",url:"",image:""});function Y0(){const[t,e]=g.useState("meditation"),[n,o]=g.useState([]),[i,s]=g.useState(!1),[l,a]=g.useState(null),[d,c]=g.useState(null),p=g.useCallback(async()=>{try{o(await O.getMedia())}catch{}s(!0)},[]);g.useEffect(()=>{p()},[p]);const{deleteItem:y,toasts:m,handleUndo:j,handleDismiss:x}=Ar(O.deleteMedia,O.restoreMedia,p);g.useEffect(()=>{if(!d)return;const C=10,L=setInterval(()=>{document.hidden||O.addScreenTime("mindscape",C).catch(()=>{})},C*1e3);return()=>clearInterval(L)},[d]);const k=Hl.find(C=>C.id===t),T=n.filter(C=>C.kind===t),b=C=>a({id:C.id,kind:C.kind,title:C.title,url:`https://youtu.be/${C.youtube_id}`,image:C.image}),u=async C=>{var A;const L=(A=C.target.files)==null?void 0:A[0];if(L){try{const E=await G0(L);a(M=>({...M,image:E}))}catch{}C.target.value=""}},h=l?[!l.title.trim()&&"a title",!l.image&&"an image",!Xg(l.url)&&"a valid YouTube link"].filter(Boolean):[],I=!!l&&h.length===0,v=async()=>{if(!I)return;const C={kind:l.kind,title:l.title.trim(),image:l.image,youtube_id:Xg(l.url)};l.id?await O.updateMedia(l.id,C):await O.createMedia(C),a(null),p()};return r.jsxs("div",{style:Wt.page,children:[d&&r.jsx("iframe",{title:"mindscape-audio",src:`https://www.youtube.com/embed/${d.youtube_id}?autoplay=1&controls=0&modestbranding=1&playsinline=1`,allow:"autoplay; encrypted-media",style:{position:"fixed",left:-1e4,top:0,width:320,height:180,border:"none"}}),r.jsxs("div",{style:Wt.head,children:[r.jsxs("div",{children:[r.jsx("div",{style:Wt.eyebrow,children:"Anvil · Mindscape"}),r.jsx("h1",{style:Wt.h1,children:"Mindscape"}),r.jsx("div",{style:Wt.subhead,children:"Close your eyes and listen — guided meditation and visualization."})]}),!l&&r.jsxs("button",{onClick:()=>a(U0(t)),style:{...Wt.addBtn,background:k.color},children:[r.jsx(ae,{size:15})," Add"]})]}),r.jsx("div",{style:Wt.tabs,children:Hl.map(C=>{const L=C.icon,A=t===C.id;return r.jsxs("button",{onClick:()=>{e(C.id),a(null)},style:{...Wt.tab,...A?{background:C.color,color:"#fff",borderColor:C.color}:{}},children:[r.jsx(L,{size:15})," ",C.label]},C.id)})}),l&&r.jsxs("div",{style:Wt.card,children:[r.jsx("div",{style:Wt.cardTitle,children:l.id?"Edit":`New ${Hl.find(C=>C.id===l.kind).label}`}),r.jsx("input",{placeholder:"YouTube link (plays as audio only)",value:l.url,onChange:C=>a({...l,url:C.target.value}),style:Wt.input,autoFocus:!0}),r.jsx("input",{placeholder:"Title (required)",value:l.title,onChange:C=>a({...l,title:C.target.value}),style:{...Wt.input,marginTop:8}}),r.jsxs("label",{style:Wt.photoPick,children:[l.image?r.jsx("img",{src:l.image,alt:"",style:Wt.photoPreview}):r.jsxs("span",{style:Wt.photoEmpty,children:[r.jsx(el,{size:18})," Add cover image (required)"]}),r.jsx("input",{type:"file",accept:"image/*",onChange:u,style:{display:"none"}})]}),!I&&r.jsxs("div",{style:Wt.warn,children:["Add ",h.join(", ")," to save."]}),r.jsxs("div",{style:Wt.formActions,children:[r.jsxs("button",{onClick:()=>a(null),style:Wt.cancelBtn,children:[r.jsx(zt,{size:14})," Cancel"]}),r.jsxs("button",{onClick:v,disabled:!I,style:{...Wt.saveBtn,background:I?k.color:"var(--border)",color:I?"#fff":"var(--text-3)",cursor:I?"pointer":"not-allowed"},children:[r.jsx(Rt,{size:15})," ",l.id?"Save":"Add"]})]})]}),i?T.length===0?r.jsxs("div",{style:Wt.empty,children:["Nothing here yet — add a ",k.label.toLowerCase()," track."]}):r.jsx("div",{style:Wt.grid,children:T.map(C=>{const L=(d==null?void 0:d.id)===C.id;return r.jsxs("div",{style:Wt.mediaCard,children:[r.jsxs("button",{onClick:()=>c(L?null:C),style:Wt.coverBtn,title:L?"Pause":"Play",children:[r.jsx("img",{src:C.image,alt:"",style:Wt.cover}),r.jsx("span",{style:{...Wt.playOverlay,background:L?"rgba(0,0,0,0.45)":"rgba(0,0,0,0.28)"},children:r.jsx("span",{style:{...Wt.playCircle,background:k.color},children:L?r.jsx(Vh,{size:20,color:"#fff",fill:"#fff"}):r.jsx(kb,{size:20,color:"#fff",fill:"#fff"})})}),L&&r.jsxs("span",{style:Wt.nowPlaying,children:[r.jsx(vb,{size:11})," Playing"]})]}),r.jsxs("div",{style:Wt.mediaBody,children:[r.jsx("div",{style:Wt.mediaTitle,children:C.title}),r.jsxs("div",{style:Wt.cardActions,children:[r.jsx("button",{onClick:()=>b(C),style:Wt.iconBtn,title:"Edit",children:r.jsx(he,{size:13})}),r.jsx("button",{onClick:()=>{(d==null?void 0:d.id)===C.id&&c(null),y(C.id,C.title)},style:Wt.iconBtn,title:"Delete",children:r.jsx(zt,{size:14})})]})]})]},C.id)})}):r.jsx("div",{style:Wt.muted,children:"Loading…"}),r.jsx(Fr,{toasts:m,onUndo:j,onDismiss:x})]})}const Wt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:900,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},tabs:{display:"flex",gap:8,marginBottom:18,flexWrap:"wrap"},tab:{display:"flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:20,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none"},photoPick:{display:"block",marginTop:10,cursor:"pointer",borderRadius:12,overflow:"hidden",border:"1px dashed var(--border)"},photoPreview:{width:"100%",maxHeight:200,objectFit:"cover",display:"block"},photoEmpty:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"26px 0",color:"var(--text-3)",fontSize:13,fontWeight:600},warn:{fontSize:12,color:"#C2773B",marginTop:8,fontWeight:600},formActions:{display:"flex",gap:8,marginTop:14},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,fontFamily:"inherit"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gap:16},mediaCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},coverBtn:{position:"relative",border:"none",padding:0,cursor:"pointer",display:"block",width:"100%",aspectRatio:"1",background:"var(--surface-2)"},cover:{width:"100%",height:"100%",objectFit:"cover",display:"block"},playOverlay:{position:"absolute",inset:0,display:"grid",placeItems:"center"},playCircle:{width:46,height:46,borderRadius:"50%",display:"grid",placeItems:"center",boxShadow:"0 2px 10px rgba(0,0,0,0.3)"},nowPlaying:{position:"absolute",bottom:8,left:8,display:"flex",alignItems:"center",gap:4,background:"rgba(0,0,0,0.65)",color:"#fff",fontSize:11,fontWeight:700,padding:"3px 8px",borderRadius:7},mediaBody:{padding:"12px 14px",display:"flex",alignItems:"flex-start",gap:8},mediaTitle:{flex:1,fontSize:14.5,fontWeight:600,lineHeight:1.4,minWidth:0,wordBreak:"break-word"},cardActions:{display:"flex",gap:2,flexShrink:0,marginTop:1},iconBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"}},$b={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"},V0=Object.keys($b),Q0="#9A7B4F";function K0(t=760){const[e,n]=g.useState(()=>window.innerWidth<t);return g.useEffect(()=>{const o=()=>n(window.innerWidth<t);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[t]),e}const X0=()=>{const t=new Date,e=n=>String(n).padStart(2,"0");return`${t.getFullYear()}-${e(t.getMonth()+1)}-${e(t.getDate())}`},q0=t=>{if(!t)return"";const e=new Date(t+"T00:00:00");return isNaN(e)?t:e.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})},Gl=t=>(t||"").slice(0,4),J0=t=>new Promise((e,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:l,height:a}=i;l>a&&l>1e3?(a=a*1e3/l,l=1e3):a>1e3&&(l=l*1e3/a,a=1e3);const d=document.createElement("canvas");d.width=l,d.height=a,d.getContext("2d").drawImage(i,0,0,l,a),e(d.toDataURL("image/jpeg",.82))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(t)}),Z0={id:null,title:"",date:X0(),pillar:"",reward:"",image:"",note:""};function tx(){const t=Zd(),e=v=>Lb(v,t.code),n=K0(),[o,i]=g.useState([]),[s,l]=g.useState(null),[a,d]=g.useState(!1),c=g.useRef(null),p=g.useCallback(()=>{O.getAchievements().then(i).catch(()=>{})},[]);g.useEffect(()=>{p()},[p]);const{deleteItem:y,toasts:m,handleUndo:j,handleDismiss:x}=Ar(O.deleteAchievement,O.restoreAchievement,p),k=()=>l({...Z0}),T=v=>l({id:v.id,title:v.title,date:v.date,pillar:v.pillar||"",reward:v.reward?String(v.reward):"",image:v.image||"",note:v.note||""}),b=async v=>{var L;const C=(L=v.target.files)==null?void 0:L[0];if(C){try{const A=await J0(C);l(E=>({...E,image:A}))}catch{}c.current&&(c.current.value="")}},u=s&&s.title.trim()&&s.date,h=async()=>{if(!u||a)return;d(!0);const v={title:s.title.trim(),date:s.date,pillar:s.pillar||null,reward:parseFloat(s.reward)||0,image:s.image||null,note:s.note.trim()};try{s.id?await O.updateAchievement(s.id,v):await O.createAchievement(v),l(null),p()}catch{}finally{d(!1)}},I=o.reduce((v,C)=>v+(C.reward||0),0);return r.jsxs("div",{style:It.page,children:[r.jsxs("div",{style:It.head,children:[r.jsxs("div",{children:[r.jsx("div",{style:It.eyebrow,children:"Anvil · Achievements"}),r.jsx("h1",{style:It.h1,children:"Achievements"}),r.jsx("div",{style:It.subhead,children:"Your tree of wins — newest at the top, scroll down through the past."})]}),r.jsxs("div",{style:It.headRight,children:[I>0&&r.jsxs("div",{style:It.totalBadge,children:[r.jsx($a,{size:14,color:"#C9A227"})," ",e(I)," earned"]}),r.jsxs("button",{onClick:k,style:It.addBtn,children:[r.jsx(ae,{size:15})," Add achievement"]})]})]}),o.length===0?r.jsxs("div",{style:It.empty,children:[r.jsx(Rr,{size:30,color:"var(--text-3)"}),r.jsx("div",{style:{marginTop:10},children:"No achievements yet."}),r.jsx("div",{style:It.emptySub,children:"Plant your first win — it'll grow into a timeline you can look back on."})]}):r.jsxs("div",{style:{...It.timeline,paddingLeft:0},children:[r.jsx("div",{style:{...It.trunk,left:n?13:"50%"}}),o.map((v,C)=>{const L=$b[v.pillar]||Q0,A=!n&&C%2===1,E=o[C-1],M=!E||Gl(E.date)!==Gl(v.date);return r.jsxs("div",{children:[M&&r.jsx("div",{style:{...It.yearRow,justifyContent:n?"flex-start":"center",paddingLeft:n?36:0},children:r.jsx("span",{style:It.yearChip,children:Gl(v.date)})}),r.jsxs("div",{style:{...It.row,gridTemplateColumns:n?"28px 1fr":"1fr 44px 1fr"},children:[!n&&r.jsx("div",{style:{gridColumn:1,display:"flex",justifyContent:"flex-end"},children:A&&r.jsx(qg,{a:v,color:L,side:"left",money:e,onEdit:()=>T(v),onDelete:()=>y(v.id,v.title)})}),r.jsx("div",{style:{gridColumn:n?1:2,display:"flex",justifyContent:"center",position:"relative"},children:r.jsx("div",{style:{...It.node,borderColor:L,background:"var(--surface)"},children:r.jsx("div",{style:{...It.nodeDot,background:L}})})}),r.jsx("div",{style:{gridColumn:n?2:3,display:"flex",justifyContent:"flex-start"},children:(n||!A)&&r.jsx(qg,{a:v,color:L,side:n?"mobile":"right",money:e,onEdit:()=>T(v),onDelete:()=>y(v.id,v.title)})})]})]},v.id)})]}),s&&r.jsx("div",{style:It.overlay,onClick:()=>l(null),children:r.jsxs("div",{style:It.modal,onClick:v=>v.stopPropagation(),children:[r.jsxs("div",{style:It.modalHead,children:[r.jsx("div",{style:It.modalTitle,children:s.id?"Edit achievement":"New achievement"}),r.jsx("button",{onClick:()=>l(null),style:It.iconBtn,children:r.jsx(zt,{size:16})})]}),r.jsx("label",{style:It.label,children:"Title *"}),r.jsx("input",{autoFocus:!0,value:s.title,onChange:v=>l(C=>({...C,title:v.target.value})),placeholder:"What did you achieve?",style:It.input}),r.jsxs("div",{style:It.formRow,children:[r.jsxs("div",{style:{flex:1},children:[r.jsxs("label",{style:It.label,children:[r.jsx(zh,{size:12})," Date *"]}),r.jsx("input",{type:"date",value:s.date,onChange:v=>l(C=>({...C,date:v.target.value})),style:It.input})]}),r.jsxs("div",{style:{flex:1},children:[r.jsx("label",{style:It.label,children:"Pillar (optional)"}),r.jsxs("select",{value:s.pillar,onChange:v=>l(C=>({...C,pillar:v.target.value})),style:It.input,children:[r.jsx("option",{value:"",children:"— None —"}),V0.map(v=>r.jsx("option",{value:v,children:v},v))]})]})]}),r.jsxs("label",{style:It.label,children:[r.jsx($a,{size:12})," Reward (",t.code,") — optional gesture of appreciation"]}),r.jsx("input",{type:"number",min:"0",step:"any",value:s.reward,onChange:v=>l(C=>({...C,reward:v.target.value})),placeholder:"0",style:It.input}),r.jsx("label",{style:It.label,children:"Photo (optional)"}),s.image?r.jsxs("div",{style:It.imgWrap,children:[r.jsx("img",{src:s.image,alt:"",style:It.imgPreview}),r.jsx("button",{onClick:()=>l(v=>({...v,image:""})),style:It.imgRemove,children:r.jsx(zt,{size:14})})]}):r.jsxs("button",{onClick:()=>{var v;return(v=c.current)==null?void 0:v.click()},style:It.uploadBtn,children:[r.jsx(Lh,{size:15})," Add a photo"]}),r.jsx("input",{ref:c,type:"file",accept:"image/*",onChange:b,style:{display:"none"}}),r.jsx("label",{style:It.label,children:"Note (optional)"}),r.jsx("textarea",{value:s.note,onChange:v=>l(C=>({...C,note:v.target.value})),placeholder:"The story behind it…",rows:3,style:{...It.input,resize:"vertical",fontFamily:"inherit"}}),r.jsxs("div",{style:It.modalActions,children:[r.jsx("button",{onClick:()=>l(null),style:It.cancelBtn,children:"Cancel"}),r.jsxs("button",{onClick:h,disabled:!u||a,style:{...It.saveBtn,...!u||a?{opacity:.5,cursor:"not-allowed"}:{}},children:[r.jsx(Rt,{size:15})," ",s.id?"Save":"Add"]})]})]})}),r.jsx(Fr,{toasts:m,onUndo:j,onDismiss:x})]})}function qg({a:t,color:e,side:n,money:o,onEdit:i,onDelete:s}){return r.jsxs("div",{style:{...It.card,borderTop:`3px solid ${e}`,textAlign:n==="left"?"right":"left"},children:[r.jsxs("div",{style:{...It.cardTop,flexDirection:n==="left"?"row-reverse":"row"},children:[r.jsx("span",{style:{...It.dateChip,background:`${e}1A`,color:e},children:q0(t.date)}),r.jsxs("div",{style:{display:"flex",gap:2},children:[r.jsx("button",{onClick:i,style:It.ghostBtn,title:"Edit",children:r.jsx(he,{size:13})}),r.jsx("button",{onClick:s,style:It.ghostBtn,title:"Delete",children:r.jsx(zt,{size:14})})]})]}),r.jsx("div",{style:It.cardTitle,children:t.title}),t.image&&r.jsx("img",{src:t.image,alt:"",style:It.cardImg}),t.note&&r.jsx("div",{style:It.cardNote,children:t.note}),t.reward>0&&r.jsxs("div",{style:{...It.rewardBadge,marginLeft:n==="left"?"auto":0},children:[r.jsx($a,{size:13})," ",o(t.reward)]})]})}const It={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:22},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},headRight:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},totalBadge:{display:"flex",alignItems:"center",gap:5,background:"rgba(201,162,39,0.12)",border:"1px solid rgba(201,162,39,0.3)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:700,color:"#8A6E1A"},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},empty:{textAlign:"center",color:"var(--text-3)",padding:"60px 16px",fontSize:14,fontWeight:600},emptySub:{fontSize:12.5,fontWeight:400,marginTop:6,maxWidth:320,marginInline:"auto",lineHeight:1.5},timeline:{position:"relative",maxWidth:1e3,margin:"0 auto",paddingBottom:30},trunk:{position:"absolute",top:8,bottom:8,width:3,background:"linear-gradient(to bottom, var(--border), var(--border))",transform:"translateX(-1.5px)",borderRadius:2},yearRow:{display:"flex",margin:"6px 0 12px"},yearChip:{fontSize:11.5,fontWeight:800,letterSpacing:"0.06em",color:"var(--text-2)",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:"4px 12px",position:"relative",zIndex:2},row:{display:"grid",alignItems:"center",gap:8,marginBottom:16},node:{width:20,height:20,borderRadius:"50%",border:"3px solid",display:"grid",placeItems:"center",zIndex:2,boxShadow:"0 0 0 4px var(--bg)"},nodeDot:{width:7,height:7,borderRadius:"50%"},card:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:"12px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.06)",maxWidth:420,width:"100%",boxSizing:"border-box"},cardTop:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,marginBottom:7},dateChip:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:12,whiteSpace:"nowrap"},cardTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em",lineHeight:1.3,wordBreak:"break-word"},cardImg:{width:"100%",maxHeight:220,objectFit:"cover",borderRadius:9,marginTop:9,display:"block"},cardNote:{fontSize:12.5,color:"var(--text-2)",marginTop:7,lineHeight:1.5,whiteSpace:"pre-wrap",wordBreak:"break-word"},rewardBadge:{display:"inline-flex",alignItems:"center",gap:5,marginTop:9,background:"rgba(201,162,39,0.12)",color:"#8A6E1A",border:"1px solid rgba(201,162,39,0.3)",padding:"3px 10px",borderRadius:14,fontSize:12,fontWeight:700},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",borderRadius:6},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:60,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:460,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},label:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)"},formRow:{display:"flex",gap:10},uploadBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:7,width:"100%",border:"1.5px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"11px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},imgWrap:{position:"relative",borderRadius:10,overflow:"hidden"},imgPreview:{width:"100%",maxHeight:220,objectFit:"cover",display:"block",borderRadius:10},imgRemove:{position:"absolute",top:8,right:8,border:"none",background:"rgba(0,0,0,0.55)",color:"#fff",width:28,height:28,borderRadius:"50%",cursor:"pointer",display:"grid",placeItems:"center"},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},Xa=[{id:"sandstone",name:"Sandstone",description:"Warm editorial light — the original Anvil look.",dark:!1,swatch:["#F7F6F3","#4C9A6B","#26241F"],vars:{"--bg":"#F7F6F3","--surface":"#FFFFFF","--surface-2":"#FAFAF8","--hover":"#F2F1EC","--border":"#ECEAE3","--text":"#26241F","--text-2":"#6B675E","--text-3":"#9A968C","--accent":"#4C9A6B","--accent-strong":"#26241F","--accent-2":"#3A352C"}},{id:"midnight",name:"Midnight",description:"Deep low-glare dark mode for night owls and focus.",dark:!0,swatch:["#161513","#6FB58C","#ECEAE3"],vars:{"--bg":"#161513","--surface":"#211F1C","--surface-2":"#1B1A17","--hover":"#2B2924","--border":"#34312B","--text":"#ECEAE3","--text-2":"#B6B1A6","--text-3":"#8A857A","--accent":"#6FB58C","--accent-strong":"#2E6F4B","--accent-2":"#245C3E"}},{id:"blossom",name:"Blossom",description:"Soft rose & blush — gentle, warm, and feminine.",dark:!1,swatch:["#FFF5F8","#E0608E","#B23A6B"],vars:{"--bg":"#FFF5F8","--surface":"#FFFFFF","--surface-2":"#FFF0F4","--hover":"#FDE7EE","--border":"#F6D9E2","--text":"#3D2230","--text-2":"#7A5466","--text-3":"#B08799","--accent":"#E0608E","--accent-strong":"#B23A6B","--accent-2":"#9C2F5C"}},{id:"tide",name:"Tide",description:"Calm professional blues — clean and focused.",dark:!1,swatch:["#F1F6FA","#2E86C1","#1C4E73"],vars:{"--bg":"#F1F6FA","--surface":"#FFFFFF","--surface-2":"#ECF3F9","--hover":"#E2EEF6","--border":"#D5E3EE","--text":"#13283A","--text-2":"#4A6275","--text-3":"#8AA0B0","--accent":"#2E86C1","--accent-strong":"#1C4E73","--accent-2":"#163E5C"}},{id:"velocity",name:"Velocity",description:"High-energy sport — crisp slate with electric orange.",dark:!1,swatch:["#F4F5F7","#F4511E","#1F2A37"],vars:{"--bg":"#F4F5F7","--surface":"#FFFFFF","--surface-2":"#EEF0F3","--hover":"#E7EAEE","--border":"#DCE0E6","--text":"#18202B","--text-2":"#515B68","--text-3":"#8B95A1","--accent":"#F4511E","--accent-strong":"#1F2A37","--accent-2":"#16202B"}},{id:"evergreen",name:"Evergreen",description:"Earthy forest greens — grounded and natural.",dark:!1,swatch:["#F2F6F1","#3E8E52","#2A4A30"],vars:{"--bg":"#F2F6F1","--surface":"#FFFFFF","--surface-2":"#ECF2EA","--hover":"#E4EEE2","--border":"#D7E4D3","--text":"#1E2B20","--text-2":"#4F6151","--text-3":"#8AA08C","--accent":"#3E8E52","--accent-strong":"#2A4A30","--accent-2":"#213B26"}},{id:"amethyst",name:"Amethyst",description:"Premium purple & plum — elegant and refined.",dark:!1,swatch:["#F6F4FB","#7A4FE0","#3A2D5C"],vars:{"--bg":"#F6F4FB","--surface":"#FFFFFF","--surface-2":"#F1EDF9","--hover":"#EAE3F6","--border":"#DFD6F0","--text":"#241B36","--text-2":"#5A4E72","--text-3":"#9588AE","--accent":"#7A4FE0","--accent-strong":"#3A2D5C","--accent-2":"#2E2349"}}],Jg="sandstone",Nb="anvil_theme",ex=t=>Xa.find(e=>e.id===t)||Xa[0];function Ob(){try{return localStorage.getItem(Nb)||Jg}catch{return Jg}}function _o(t,e=!0){const n=ex(t),o=document.documentElement;Object.entries(n.vars).forEach(([s,l])=>o.style.setProperty(s,l)),o.style.colorScheme=n.dark?"dark":"light",o.setAttribute("data-theme",n.id);const i=document.querySelector('meta[name="theme-color"]');if(i&&i.setAttribute("content",n.vars["--surface"]),e)try{localStorage.setItem(Nb,n.id)}catch{}return n.id}function rx(t=560){const[e,n]=g.useState(()=>window.innerWidth<=t);return g.useEffect(()=>{const o=()=>n(window.innerWidth<=t);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[t]),e}function nx({screens:t,order:e,hidden:n,themeId:o,currency:i,ticker:s,defaultScreen:l,onSetDefault:a,onSaveSidebar:d,onPreviewTheme:c,onCommitTheme:p,onSelectCurrency:y,onSaveTicker:m,onClose:j}){const[x,k]=g.useState("sidebar"),[T,b]=g.useState(()=>e.map(X=>({id:X,hidden:n.includes(X)}))),[u,h]=g.useState(o),[I,v]=g.useState(""),[C,L]=g.useState(!1),A=rx(),[E,M]=g.useState(!!(s!=null&&s.enabled)),[S,D]=g.useState(()=>{const X=Array.isArray(s==null?void 0:s.statements)?s.statements.slice(0,5):[];return X.length?X:[""]}),[w,Y]=g.useState((s==null?void 0:s.speed)??60),[lt,rt]=g.useState((s==null?void 0:s.delay)??3),[ht,U]=g.useState(!1),H=(X,gt)=>D(Ct=>Ct.map((W,bt)=>bt===X?gt:W)),J=()=>D(X=>X.length<5?[...X,""]:X),P=X=>D(gt=>gt.length>1?gt.filter((Ct,W)=>W!==X):gt),F=()=>{const X=S.map(gt=>gt.trim()).filter(Boolean).slice(0,5);m({enabled:E,statements:X,speed:Number(w),delay:Number(lt)}),U(!0),setTimeout(()=>U(!1),1500)};g.useEffect(()=>{O.getSetting("golden_music").then(X=>v((X==null?void 0:X.value)||"")).catch(()=>{})},[]);const f=()=>{O.setSetting("golden_music",I.trim()).then(()=>{L(!0),setTimeout(()=>L(!1),1500)}).catch(()=>{})},V=X=>{h(X),c(X)},xt=T.filter(X=>!X.hidden).length,at=(X,gt)=>{const Ct=X+gt;if(Ct<0||Ct>=T.length)return;const W=[...T];[W[X],W[Ct]]=[W[Ct],W[X]],b(W)},G=X=>{const gt=T[X];if(!gt.hidden&&xt<=1)return;const Ct=[...T];Ct[X]={...gt,hidden:!gt.hidden},b(Ct)},ft=()=>{d(T.map(X=>X.id),T.filter(X=>X.hidden).map(X=>X.id))},Z=A?{...pt.overlay,padding:0}:pt.overlay,et=A?{...pt.modal,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"100%",borderRadius:0,border:"none"}:pt.modal;return r.jsx("div",{style:Z,onClick:j,children:r.jsxs("div",{style:et,onClick:X=>X.stopPropagation(),children:[r.jsxs("div",{style:pt.head,children:[r.jsx("div",{style:pt.title,children:"Settings"}),r.jsx("button",{onClick:j,style:pt.closeBtn,children:r.jsx(zt,{size:18})})]}),r.jsxs("div",{style:pt.tabs,children:[r.jsxs("button",{onClick:()=>k("sidebar"),style:{...pt.tab,...x==="sidebar"?pt.tabOn:{}},children:[r.jsx($h,{size:15})," Configure sidebar"]}),r.jsxs("button",{onClick:()=>k("themes"),style:{...pt.tab,...x==="themes"?pt.tabOn:{}},children:[r.jsx(Gh,{size:15})," Themes"]}),r.jsxs("button",{onClick:()=>k("currency"),style:{...pt.tab,...x==="currency"?pt.tabOn:{}},children:[r.jsx(Rh,{size:15})," Currency"]}),r.jsxs("button",{onClick:()=>k("music"),style:{...pt.tab,...x==="music"?pt.tabOn:{}},children:[r.jsx(wb,{size:15})," Music"]}),r.jsxs("button",{onClick:()=>k("reminders"),style:{...pt.tab,...x==="reminders"?pt.tabOn:{}},children:[r.jsx(xb,{size:15})," Reminders"]})]}),r.jsx("div",{style:pt.body,children:x==="sidebar"?r.jsxs(r.Fragment,{children:[r.jsxs("p",{style:pt.hint,children:["Reorder with the arrows, hide ones you don't use, and tap ",r.jsx(Ls,{size:11,style:{verticalAlign:"-1px"}})," to set the screen that opens on launch."]}),r.jsx("div",{style:pt.list,children:T.map((X,gt)=>{const Ct=t[X.id],W=Ct.icon,bt=l===X.id;return r.jsxs("div",{style:{...pt.row,opacity:X.hidden?.5:1,...bt?{borderColor:"var(--accent)"}:{}},children:[r.jsx("span",{style:pt.rowNum,children:gt+1}),r.jsx(W,{size:16}),r.jsxs("span",{style:pt.rowLabel,children:[Ct.label,bt&&r.jsx("span",{style:pt.defaultTag,children:"default"})]}),r.jsx("button",{onClick:()=>a(X.id),title:bt?"Opens on launch":"Set as default",style:{...pt.iconBtn,...bt?{color:"var(--accent)"}:{}},children:r.jsx(Ls,{size:15})}),r.jsx("button",{onClick:()=>G(gt),title:X.hidden?"Show":"Hide",style:{...pt.iconBtn,...X.hidden?{}:{color:"var(--accent)"}},children:X.hidden?r.jsx(Pa,{size:15}):r.jsx(Ws,{size:15})}),r.jsx("button",{onClick:()=>at(gt,-1),disabled:gt===0,style:{...pt.iconBtn,opacity:gt===0?.3:1},children:r.jsx(fb,{size:15})}),r.jsx("button",{onClick:()=>at(gt,1),disabled:gt===T.length-1,style:{...pt.iconBtn,opacity:gt===T.length-1?.3:1},children:r.jsx(xi,{size:15})})]},X.id)})}),r.jsxs("button",{onClick:ft,style:pt.saveBtn,children:[r.jsx(Rt,{size:15})," Save sidebar"]})]}):x==="currency"?r.jsxs(r.Fragment,{children:[r.jsx("p",{style:pt.hint,children:"Choose the currency used across Vault and Worth. Applies instantly."}),r.jsx("div",{style:pt.list,children:Va.map(X=>{const gt=X.code===i;return r.jsxs("button",{onClick:()=>y(X.code),style:{...pt.row,cursor:"pointer",textAlign:"left",width:"100%",...gt?{borderColor:"var(--accent)"}:{}},children:[r.jsx("span",{style:pt.curSymbol,children:X.symbol}),r.jsxs("span",{style:pt.rowLabel,children:[X.label," ",r.jsx("span",{style:pt.curCode,children:X.code})]}),gt&&r.jsx("span",{style:pt.themeCheck,children:r.jsx(Rt,{size:13})})]},X.code)})})]}):x==="music"?r.jsxs(r.Fragment,{children:[r.jsxs("p",{style:pt.hint,children:["Paste a YouTube link to play softly while you write in the ",r.jsx("b",{children:"Golden Book"}),". It plays only on that screen (audio only)."]}),r.jsx("input",{value:I,onChange:X=>v(X.target.value),placeholder:"https://youtube.com/watch?v=…",style:pt.musicInput}),r.jsxs("button",{onClick:f,style:pt.saveBtn,children:[r.jsx(Rt,{size:15})," ",C?"Saved":"Save music"]})]}):x==="reminders"?r.jsxs(r.Fragment,{children:[r.jsx("p",{style:pt.hint,children:"Up to 5 reminders scroll across the top of every screen — a gentle nudge toward your goals."}),r.jsxs("button",{onClick:()=>M(X=>!X),style:{...pt.row,cursor:"pointer",width:"100%",justifyContent:"space-between",...E?{borderColor:"var(--accent)"}:{}},children:[r.jsx("span",{style:pt.rowLabel,children:"Show reminder banner"}),r.jsx("span",{style:{...pt.switch,...E?pt.switchOn:{}},children:E?"On":"Off"})]}),r.jsxs("div",{style:{marginTop:14},children:[r.jsxs("div",{style:pt.fieldLbl,children:["Reminders (",S.filter(X=>X.trim()).length,"/5)"]}),S.map((X,gt)=>r.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[r.jsx("input",{value:X,onChange:Ct=>H(gt,Ct.target.value),maxLength:120,placeholder:`Reminder ${gt+1}`,style:{...pt.musicInput,marginBottom:0}}),r.jsx("button",{onClick:()=>P(gt),style:pt.iconBtn,title:"Remove",children:r.jsx(zt,{size:15})})]},gt)),S.length<5&&r.jsxs("button",{onClick:J,style:pt.addRowBtn,children:[r.jsx(ae,{size:14})," Add reminder"]})]}),r.jsxs("div",{style:{marginTop:16},children:[r.jsxs("div",{style:pt.sliderHead,children:[r.jsx("span",{style:pt.fieldLbl,children:"Scroll speed"}),r.jsxs("span",{style:pt.sliderVal,children:[w," px/s"]})]}),r.jsx("input",{type:"range",min:20,max:200,step:5,value:w,onChange:X=>Y(X.target.value),style:pt.range})]}),r.jsxs("div",{style:{marginTop:12},children:[r.jsxs("div",{style:pt.sliderHead,children:[r.jsx("span",{style:pt.fieldLbl,children:"Delay between reminders"}),r.jsxs("span",{style:pt.sliderVal,children:[lt,"s"]})]}),r.jsx("input",{type:"range",min:0,max:15,step:1,value:lt,onChange:X=>rt(X.target.value),style:pt.range})]}),r.jsxs("button",{onClick:F,style:{...pt.saveBtn,marginTop:16},children:[r.jsx(Rt,{size:15})," ",ht?"Saved":"Save reminders"]})]}):r.jsxs(r.Fragment,{children:[r.jsxs("p",{style:pt.hint,children:["Tap a theme to preview it live, then hit ",r.jsx("b",{children:"Apply theme"})," to keep it."]}),r.jsx("div",{style:pt.themeGrid,children:Xa.map(X=>{const gt=X.id===u;return r.jsxs("button",{onClick:()=>V(X.id),style:{...pt.themeCard,...gt?pt.themeCardOn:{}},children:[r.jsxs("div",{style:pt.swatchRow,children:[X.swatch.map((Ct,W)=>r.jsx("span",{style:{...pt.swatch,background:Ct}},W)),gt&&r.jsx("span",{style:pt.themeCheck,children:r.jsx(Rt,{size:13})})]}),r.jsxs("div",{style:pt.themeName,children:[X.name,X.dark?r.jsx("span",{style:pt.darkTag,children:"Dark"}):null]}),r.jsx("div",{style:pt.themeDesc,children:X.description})]},X.id)})}),r.jsxs("button",{onClick:()=>p(u),disabled:u===o,style:{...pt.saveBtn,...u===o?pt.saveBtnDisabled:{}},children:[r.jsx(Rt,{size:15})," ",u===o?"Theme applied":"Apply theme"]})]})})]})})}const pt={overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",color:"var(--text)",borderRadius:16,width:460,maxWidth:"100%",maxHeight:"88vh",display:"flex",flexDirection:"column",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)",overflow:"hidden"},head:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 18px",borderBottom:"1px solid var(--border)",flexShrink:0},title:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},tabs:{display:"flex",flexWrap:"wrap",gap:6,padding:"12px 18px 0",flexShrink:0},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"transparent"},body:{padding:"16px 18px 20px",overflowY:"auto",overflowX:"hidden",flex:1,minHeight:0},hint:{fontSize:12.5,color:"var(--text-3)",lineHeight:1.5,margin:"0 0 14px"},list:{display:"flex",flexDirection:"column",gap:6},row:{display:"flex",alignItems:"center",gap:10,padding:"9px 11px",background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:9},rowNum:{fontSize:11,fontWeight:700,color:"var(--text-3)",width:16,textAlign:"center"},rowLabel:{flex:1,fontSize:13.5,fontWeight:500,display:"flex",alignItems:"center",gap:7},defaultTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--accent)",background:"color-mix(in srgb, var(--accent) 14%, transparent)",padding:"1px 6px",borderRadius:6},curSymbol:{width:22,textAlign:"center",fontSize:15,fontWeight:700,color:"var(--text)"},curCode:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginLeft:4},iconBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},saveBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:7,width:"100%",marginTop:16,border:"none",background:"var(--accent)",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer"},saveBtnDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"default"},musicInput:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",marginBottom:12},switch:{fontSize:12,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:20,padding:"3px 12px",minWidth:44,textAlign:"center"},switchOn:{background:"var(--accent)",color:"#fff"},fieldLbl:{fontSize:12,fontWeight:700,color:"var(--text-2)",marginBottom:7},addRowBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"9px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},sliderHead:{display:"flex",justifyContent:"space-between",alignItems:"baseline"},sliderVal:{fontSize:12,fontWeight:700,color:"var(--accent)"},range:{width:"100%",accentColor:"var(--accent)",cursor:"pointer"},themeGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},themeCard:{textAlign:"left",border:"2px solid var(--border)",background:"var(--surface-2)",borderRadius:12,padding:12,cursor:"pointer",display:"flex",flexDirection:"column",gap:6,outline:"none",WebkitTapHighlightColor:"transparent",transition:"border-color .15s ease, box-shadow .15s ease"},themeCardOn:{borderColor:"var(--accent)",boxShadow:"0 0 0 3px color-mix(in srgb, var(--accent) 25%, transparent)"},swatchRow:{display:"flex",alignItems:"center",gap:5,position:"relative"},swatch:{width:22,height:22,borderRadius:"50%",border:"1px solid rgba(0,0,0,0.08)"},themeCheck:{marginLeft:"auto",width:20,height:20,borderRadius:"50%",background:"var(--accent)",color:"#fff",display:"grid",placeItems:"center"},themeName:{fontSize:14,fontWeight:700,display:"flex",alignItems:"center",gap:6},darkTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",background:"var(--hover)",color:"var(--text-2)",padding:"1px 6px",borderRadius:6},themeDesc:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.4}},ox=`
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
`;function ix({statements:t,speed:e=60,delay:n=3}){const o=g.useMemo(()=>(t||[]).map(d=>(d||"").trim()).filter(Boolean).slice(0,5),[t]),[i,s]=g.useState(0),l=g.useRef(null),a=g.useRef(null);return g.useEffect(()=>{s(0)},[o]),g.useEffect(()=>{if(!o.length)return;const d=l.current,c=a.current;if(!d||!c)return;const p=d.offsetWidth,y=c.offsetWidth,m=Math.max(10,Number(e)||60),j=Math.max(2500,(p+y)/m*1e3),x=c.animate([{transform:`translateX(${p}px)`},{transform:`translateX(${-y}px)`}],{duration:j,easing:"linear",fill:"both"});let k;const T=()=>{k=setTimeout(()=>s(b=>(b+1)%o.length),Math.max(0,Number(n)||0)*1e3)};return x.addEventListener("finish",T),()=>{x.cancel(),x.removeEventListener("finish",T),clearTimeout(k)}},[i,o,e,n]),o.length?r.jsxs("div",{style:Mn.bar,"aria-label":"Reminders",children:[r.jsx("style",{children:ox}),r.jsx("div",{className:"anvil-tick-glow",style:Mn.icon,children:r.jsx("span",{className:"anvil-tick-pulse",style:{display:"grid",placeItems:"center"},children:r.jsx(xb,{size:15})})}),r.jsxs("div",{ref:l,style:Mn.viewport,children:[r.jsx("span",{className:"anvil-tick-shimmer",style:Mn.shimmer}),r.jsx("div",{className:"anvil-tick-float",style:Mn.floatWrap,children:r.jsx("div",{ref:a,style:Mn.text,children:o[i%o.length]},i)})]})]}):null}const Mn={bar:{display:"flex",alignItems:"center",height:36,flexShrink:0,overflow:"hidden",borderBottom:"1px solid var(--border)",background:"color-mix(in srgb, var(--accent) 12%, var(--surface))"},icon:{display:"grid",placeItems:"center",width:42,height:"100%",flexShrink:0,color:"#fff",background:"var(--accent)",zIndex:2},viewport:{position:"relative",flex:1,height:"100%",overflow:"hidden",display:"flex",alignItems:"center"},shimmer:{position:"absolute",top:0,bottom:0,left:0,width:"22%",background:"linear-gradient(100deg, transparent, color-mix(in srgb, var(--accent) 22%, transparent), transparent)",pointerEvents:"none",zIndex:1},floatWrap:{display:"inline-flex",alignItems:"center",willChange:"transform"},text:{whiteSpace:"nowrap",fontSize:13.5,fontWeight:700,color:"var(--text)",letterSpacing:"0.01em",willChange:"transform",paddingLeft:4}};_o(Ob(),!1);const qa="anvil_default_screen",Zg=()=>{try{return localStorage.getItem(qa)}catch{return null}},cn={kickstart:{label:"Kickstart",icon:Kh,component:L0},golden:{label:"Golden Book",icon:Dh,component:$0},habits:{label:"Habits",icon:Jh,component:Cy},quadrant:{label:"Quadrant",icon:yb,component:cy},goals:{label:"Goals",icon:Kd,component:xy},grove:{label:"Grove",icon:ry,component:p0},worth:{label:"Rewards",icon:Ph,component:k0},vault:{label:"Vault",icon:hb,component:z0},journal:{label:"Journal",icon:Yd,component:Wy},revision:{label:"Revision",icon:Sb,component:Ky},affirmations:{label:"Affirmations",icon:vi,component:Jy},skills:{label:"Skills",icon:Ah,component:_y},spiritual:{label:"Spiritual",icon:ds,component:Ny},mindscape:{label:"Mindscape",icon:Fh,component:Y0},achievements:{label:"Achievements",icon:Rr,component:tx}},Hb=["kickstart","golden","habits","quadrant","goals","grove","journal","revision","affirmations","skills","spiritual","mindscape","achievements","worth","vault"];function Xi(t){const e=Hb.filter(i=>cn[i]),o=[...(Array.isArray(t)?t:[]).filter(i=>cn[i])];return e.forEach(i=>{o.includes(i)||o.push(i)}),o}function sx(){const[t,e]=g.useState(()=>window.innerWidth<720);return g.useEffect(()=>{const n=()=>e(window.innerWidth<720);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),t}function lx(){const[t,e]=g.useState(()=>{const F=Zg();return F&&cn[F]?F:"habits"}),[n,o]=g.useState(()=>Zg()||"habits"),[i,s]=g.useState(!1),[l,a]=g.useState(null),[d,c]=g.useState(!1),[p,y]=g.useState(!1),[m,j]=g.useState(Ob()),[x,k]=g.useState(co()),[T,b]=g.useState({enabled:!1,statements:[],speed:60,delay:3}),[u,h]=g.useState(()=>Xi(Hb)),[I,v]=g.useState([]),C=sx(),L=g.useRef(t);g.useEffect(()=>{L.current=t},[t]),g.useEffect(()=>{if(!l)return;const F=10,f=new Set(["kickstart","mindscape"]),V=setInterval(()=>{const xt=L.current;!document.hidden&&xt&&!f.has(xt)&&O.addScreenTime(xt,F).catch(()=>{})},F*1e3);return()=>clearInterval(V)},[l]),g.useEffect(()=>{let F=!1;const f=()=>{Oa(),a(null)};return window.addEventListener("anvil-unauthorized",f),qd()?O.me().then(V=>{F||a(V)}).catch(()=>{}).finally(()=>{F||c(!0)}):c(!0),()=>{F=!0,window.removeEventListener("anvil-unauthorized",f)}},[]),g.useEffect(()=>{l&&(O.getSetting("theme").then(F=>{F!=null&&F.value&&j(_o(F.value))}).catch(()=>{}),O.getSetting("currency").then(F=>{F!=null&&F.value&&k(Ag(F.value))}).catch(()=>{}),O.getSetting("ticker").then(F=>{F!=null&&F.value&&b(f=>({...f,...F.value}))}).catch(()=>{}),O.getSetting("default_screen").then(F=>{if(F!=null&&F.value&&cn[F.value]){o(F.value);try{localStorage.setItem(qa,F.value)}catch{}}}).catch(()=>{}),O.getSetting("sidebar_order").then(F=>{Array.isArray(F==null?void 0:F.value)&&h(Xi(F.value))}).catch(()=>{}),O.getSetting("sidebar_hidden").then(F=>{Array.isArray(F==null?void 0:F.value)&&v(F.value)}).catch(()=>{}))},[l]);function A(F){e(F),s(!1)}const E=()=>{Oa(),a(null)},M=F=>{_o(F,!1)},S=F=>{j(_o(F)),O.setSetting("theme",F).catch(()=>{}),y(!1)},D=()=>{_o(m,!1),y(!1)},w=F=>{k(Ag(F)),O.setSetting("currency",F).catch(()=>{})},Y=F=>{b(F),O.setSetting("ticker",F).catch(()=>{})},lt=F=>{o(F);try{localStorage.setItem(qa,F)}catch{}O.setSetting("default_screen",F).catch(()=>{})},rt=(F,f)=>{if(h(Xi(F)),v(f),y(!1),O.setSetting("sidebar_order",F).catch(()=>{}),O.setSetting("sidebar_hidden",f).catch(()=>{}),f.includes(t)){const V=Xi(F).find(xt=>!f.includes(xt));V&&e(V)}},ht=u.filter(F=>!I.includes(F));if(!d)return r.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",fontFamily:"'Inter',system-ui,sans-serif",color:"var(--text-3)"},children:"Loading…"});if(!l)return r.jsx(j0,{onAuthed:a});const U=cn[t],H=U.component,J=()=>r.jsx("div",{style:Nt.navItems,children:ht.map(F=>{const f=cn[F];if(!f)return null;const V=f.icon,xt=t===F;return r.jsxs("button",{onClick:()=>A(F),title:f.label,style:{...Nt.navItem,...xt?Nt.navItemOn:{}},children:[r.jsx(V,{size:18}),r.jsx("span",{style:Nt.navLabel,children:f.label})]},F)})}),P=()=>r.jsxs("div",{style:Nt.footerWrap,children:[r.jsxs("button",{onClick:()=>y(!0),style:Nt.settingsBtn,title:"Settings",children:[r.jsx(Cb,{size:17}),r.jsx("span",{children:"Settings"})]}),r.jsxs("div",{style:Nt.userFooter,children:[r.jsxs("div",{style:Nt.userInfo,children:[r.jsx("div",{style:Nt.userAvatar,children:(l.name||l.email||"?").charAt(0).toUpperCase()}),r.jsxs("div",{style:{minWidth:0},children:[r.jsx("div",{style:Nt.userName,children:l.name||"You"}),r.jsx("div",{style:Nt.userEmail,children:l.email})]})]}),r.jsx("button",{onClick:E,style:Nt.logoutBtn,title:"Sign out",children:r.jsx(Oh,{size:16})})]})]});return r.jsxs("div",{style:Nt.shell,children:[!C&&r.jsxs("nav",{style:Nt.nav,children:[r.jsxs("div",{style:Nt.brand,children:[r.jsx("div",{style:Nt.brandLogo,children:"B"}),r.jsx("span",{style:Nt.brandName,children:"Anvil"})]}),r.jsx(J,{}),r.jsx(P,{})]}),C&&i&&r.jsx("div",{style:Nt.overlay,onClick:()=>s(!1),children:r.jsxs("nav",{style:Nt.drawer,onClick:F=>F.stopPropagation(),children:[r.jsxs("div",{style:Nt.drawerHeader,children:[r.jsxs("div",{style:Nt.brand,children:[r.jsx("div",{style:Nt.brandLogo,children:"B"}),r.jsx("span",{style:Nt.brandName,children:"Anvil"})]}),r.jsx("button",{style:Nt.closeBtn,onClick:()=>s(!1),children:r.jsx(zt,{size:20})})]}),r.jsx(J,{}),r.jsx(P,{})]})}),r.jsxs("div",{style:Nt.content,children:[C&&r.jsxs("div",{style:Nt.topBar,children:[r.jsx("button",{style:Nt.menuBtn,onClick:()=>s(!0),children:r.jsx(Qd,{size:22})}),r.jsx("span",{style:Nt.topBarTitle,children:U.label}),r.jsx("div",{style:{width:38}})]}),T.enabled&&r.jsx(ix,{statements:T.statements,speed:T.speed,delay:T.delay}),r.jsx("main",{style:Nt.main,children:r.jsx(H,{})})]}),p&&r.jsx(nx,{screens:cn,order:u,hidden:I,themeId:m,currency:x,ticker:T,defaultScreen:n,onSetDefault:lt,onSaveSidebar:rt,onPreviewTheme:M,onCommitTheme:S,onSelectCurrency:w,onSaveTicker:Y,onClose:D})]})}const Nt={shell:{display:"flex",height:"100vh",overflow:"hidden",fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)"},nav:{width:200,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column",padding:"20px 10px",gap:2,overflowY:"auto",overflowX:"hidden"},brand:{display:"flex",alignItems:"center",gap:9,padding:"6px 10px 20px",borderBottom:"1px solid var(--border)",marginBottom:8},brandLogo:{width:30,height:30,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:14,fontWeight:800,fontFamily:"'Fraunces', Georgia, serif",flexShrink:0},brandName:{fontSize:16,fontWeight:700,letterSpacing:"-0.01em",color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},navItems:{display:"flex",flexDirection:"column",gap:2},navItem:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},navItemOn:{background:"var(--hover)",color:"var(--text)",fontWeight:700},footerWrap:{marginTop:"auto",paddingTop:8},settingsBtn:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},userFooter:{marginTop:4,paddingTop:12,borderTop:"1px solid var(--border)",display:"flex",alignItems:"center",gap:8},userInfo:{display:"flex",alignItems:"center",gap:8,flex:1,minWidth:0},userAvatar:{width:30,height:30,borderRadius:"50%",background:"#8268B0",color:"#fff",display:"grid",placeItems:"center",fontSize:13,fontWeight:700,flexShrink:0},userName:{fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},userEmail:{fontSize:11,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},logoutBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",padding:7,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},navLabel:{flex:1},content:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},main:{flex:1,overflowY:"auto",overflowX:"hidden"},topBar:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",background:"var(--surface)",borderBottom:"1px solid var(--border)",flexShrink:0},topBarTitle:{fontSize:16,fontWeight:700,color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},menuBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text)",padding:8,borderRadius:8,display:"grid",placeItems:"center"},overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.35)",zIndex:100,display:"flex"},drawer:{width:220,background:"var(--surface)",height:"100%",display:"flex",flexDirection:"column",padding:"16px 10px",gap:2,boxShadow:"4px 0 24px rgba(0,0,0,0.12)"},drawerHeader:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:4},closeBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",padding:6,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0}};ub(document.getElementById("root")).render(r.jsx(g.StrictMode,{children:r.jsx(lx,{})}));
