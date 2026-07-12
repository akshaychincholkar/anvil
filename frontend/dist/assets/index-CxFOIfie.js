(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var qp={exports:{}},sl={},Zp={exports:{}},ct={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zs=Symbol.for("react.element"),of=Symbol.for("react.portal"),sf=Symbol.for("react.fragment"),af=Symbol.for("react.strict_mode"),lf=Symbol.for("react.profiler"),df=Symbol.for("react.provider"),cf=Symbol.for("react.context"),gf=Symbol.for("react.forward_ref"),uf=Symbol.for("react.suspense"),pf=Symbol.for("react.memo"),bf=Symbol.for("react.lazy"),_g=Symbol.iterator;function mf(e){return e===null||typeof e!="object"?null:(e=_g&&e[_g]||e["@@iterator"],typeof e=="function"?e:null)}var Jp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},eb=Object.assign,tb={};function yi(e,r,n){this.props=e,this.context=r,this.refs=tb,this.updater=n||Jp}yi.prototype.isReactComponent={};yi.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")};yi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function rb(){}rb.prototype=yi.prototype;function Ic(e,r,n){this.props=e,this.context=r,this.refs=tb,this.updater=n||Jp}var Bc=Ic.prototype=new rb;Bc.constructor=Ic;eb(Bc,yi.prototype);Bc.isPureReactComponent=!0;var $g=Array.isArray,nb=Object.prototype.hasOwnProperty,Rc={current:null},ob={key:!0,ref:!0,__self:!0,__source:!0};function ib(e,r,n){var o,i={},s=null,a=null;if(r!=null)for(o in r.ref!==void 0&&(a=r.ref),r.key!==void 0&&(s=""+r.key),r)nb.call(r,o)&&!ob.hasOwnProperty(o)&&(i[o]=r[o]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var d=Array(l),g=0;g<l;g++)d[g]=arguments[g+2];i.children=d}if(e&&e.defaultProps)for(o in l=e.defaultProps,l)i[o]===void 0&&(i[o]=l[o]);return{$$typeof:zs,type:e,key:s,ref:a,props:i,_owner:Rc.current}}function hf(e,r){return{$$typeof:zs,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function Dc(e){return typeof e=="object"&&e!==null&&e.$$typeof===zs}function ff(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return r[n]})}var Pg=/\/+/g;function zl(e,r){return typeof e=="object"&&e!==null&&e.key!=null?ff(""+e.key):r.toString(36)}function ba(e,r,n,o,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case zs:case of:a=!0}}if(a)return a=e,i=i(a),e=o===""?"."+zl(a,0):o,$g(i)?(n="",e!=null&&(n=e.replace(Pg,"$&/")+"/"),ba(i,r,n,"",function(g){return g})):i!=null&&(Dc(i)&&(i=hf(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Pg,"$&/")+"/")+e)),r.push(i)),1;if(a=0,o=o===""?".":o+":",$g(e))for(var l=0;l<e.length;l++){s=e[l];var d=o+zl(s,l);a+=ba(s,r,n,d,i)}else if(d=mf(e),typeof d=="function")for(e=d.call(e),l=0;!(s=e.next()).done;)s=s.value,d=o+zl(s,l++),a+=ba(s,r,n,d,i);else if(s==="object")throw r=String(e),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return a}function Es(e,r,n){if(e==null)return e;var o=[],i=0;return ba(e,o,"","",function(s){return r.call(n,s,i++)}),o}function xf(e){if(e._status===-1){var r=e._result;r=r(),r.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=r)}if(e._status===1)return e._result.default;throw e._result}var pr={current:null},ma={transition:null},yf={ReactCurrentDispatcher:pr,ReactCurrentBatchConfig:ma,ReactCurrentOwner:Rc};function sb(){throw Error("act(...) is not supported in production builds of React.")}ct.Children={map:Es,forEach:function(e,r,n){Es(e,function(){r.apply(this,arguments)},n)},count:function(e){var r=0;return Es(e,function(){r++}),r},toArray:function(e){return Es(e,function(r){return r})||[]},only:function(e){if(!Dc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ct.Component=yi;ct.Fragment=sf;ct.Profiler=lf;ct.PureComponent=Ic;ct.StrictMode=af;ct.Suspense=uf;ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yf;ct.act=sb;ct.cloneElement=function(e,r,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=eb({},e.props),i=e.key,s=e.ref,a=e._owner;if(r!=null){if(r.ref!==void 0&&(s=r.ref,a=Rc.current),r.key!==void 0&&(i=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in r)nb.call(r,d)&&!ob.hasOwnProperty(d)&&(o[d]=r[d]===void 0&&l!==void 0?l[d]:r[d])}var d=arguments.length-2;if(d===1)o.children=n;else if(1<d){l=Array(d);for(var g=0;g<d;g++)l[g]=arguments[g+2];o.children=l}return{$$typeof:zs,type:e.type,key:i,ref:s,props:o,_owner:a}};ct.createContext=function(e){return e={$$typeof:cf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:df,_context:e},e.Consumer=e};ct.createElement=ib;ct.createFactory=function(e){var r=ib.bind(null,e);return r.type=e,r};ct.createRef=function(){return{current:null}};ct.forwardRef=function(e){return{$$typeof:gf,render:e}};ct.isValidElement=Dc;ct.lazy=function(e){return{$$typeof:bf,_payload:{_status:-1,_result:e},_init:xf}};ct.memo=function(e,r){return{$$typeof:pf,type:e,compare:r===void 0?null:r}};ct.startTransition=function(e){var r=ma.transition;ma.transition={};try{e()}finally{ma.transition=r}};ct.unstable_act=sb;ct.useCallback=function(e,r){return pr.current.useCallback(e,r)};ct.useContext=function(e){return pr.current.useContext(e)};ct.useDebugValue=function(){};ct.useDeferredValue=function(e){return pr.current.useDeferredValue(e)};ct.useEffect=function(e,r){return pr.current.useEffect(e,r)};ct.useId=function(){return pr.current.useId()};ct.useImperativeHandle=function(e,r,n){return pr.current.useImperativeHandle(e,r,n)};ct.useInsertionEffect=function(e,r){return pr.current.useInsertionEffect(e,r)};ct.useLayoutEffect=function(e,r){return pr.current.useLayoutEffect(e,r)};ct.useMemo=function(e,r){return pr.current.useMemo(e,r)};ct.useReducer=function(e,r,n){return pr.current.useReducer(e,r,n)};ct.useRef=function(e){return pr.current.useRef(e)};ct.useState=function(e){return pr.current.useState(e)};ct.useSyncExternalStore=function(e,r,n){return pr.current.useSyncExternalStore(e,r,n)};ct.useTransition=function(){return pr.current.useTransition()};ct.version="18.3.1";Zp.exports=ct;var c=Zp.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vf=c,jf=Symbol.for("react.element"),kf=Symbol.for("react.fragment"),wf=Object.prototype.hasOwnProperty,Sf=vf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Cf={key:!0,ref:!0,__self:!0,__source:!0};function ab(e,r,n){var o,i={},s=null,a=null;n!==void 0&&(s=""+n),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(a=r.ref);for(o in r)wf.call(r,o)&&!Cf.hasOwnProperty(o)&&(i[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps,r)i[o]===void 0&&(i[o]=r[o]);return{$$typeof:jf,type:e,key:s,ref:a,props:i,_owner:Sf.current}}sl.Fragment=kf;sl.jsx=ab;sl.jsxs=ab;qp.exports=sl;var t=qp.exports,lb={exports:{}},Rr={},db={exports:{}},cb={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function r(X,Y){var ce=X.length;X.push(Y);e:for(;0<ce;){var J=ce-1>>>1,I=X[J];if(0<i(I,Y))X[J]=Y,X[ce]=I,ce=J;else break e}}function n(X){return X.length===0?null:X[0]}function o(X){if(X.length===0)return null;var Y=X[0],ce=X.pop();if(ce!==Y){X[0]=ce;e:for(var J=0,I=X.length,$=I>>>1;J<$;){var H=2*(J+1)-1,P=X[H],ae=H+1,me=X[ae];if(0>i(P,ce))ae<I&&0>i(me,P)?(X[J]=me,X[ae]=ce,J=ae):(X[J]=P,X[H]=ce,J=H);else if(ae<I&&0>i(me,ce))X[J]=me,X[ae]=ce,J=ae;else break e}}return Y}function i(X,Y){var ce=X.sortIndex-Y.sortIndex;return ce!==0?ce:X.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var d=[],g=[],m=1,f=null,h=3,R=!1,B=!1,T=!1,z=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function u(X){for(var Y=n(g);Y!==null;){if(Y.callback===null)o(g);else if(Y.startTime<=X)o(g),Y.sortIndex=Y.expirationTime,r(d,Y);else break;Y=n(g)}}function j(X){if(T=!1,u(X),!B)if(n(d)!==null)B=!0,oe(k);else{var Y=n(g);Y!==null&&ye(j,Y.startTime-X)}}function k(X,Y){B=!1,T&&(T=!1,b(x),x=-1),R=!0;var ce=h;try{for(u(Y),f=n(d);f!==null&&(!(f.expirationTime>Y)||X&&!Z());){var J=f.callback;if(typeof J=="function"){f.callback=null,h=f.priorityLevel;var I=J(f.expirationTime<=Y);Y=e.unstable_now(),typeof I=="function"?f.callback=I:f===n(d)&&o(d),u(Y)}else o(d);f=n(d)}if(f!==null)var $=!0;else{var H=n(g);H!==null&&ye(j,H.startTime-Y),$=!1}return $}finally{f=null,h=ce,R=!1}}var C=!1,D=null,x=-1,y=5,_=-1;function Z(){return!(e.unstable_now()-_<y)}function ne(){if(D!==null){var X=e.unstable_now();_=X;var Y=!0;try{Y=D(!0,X)}finally{Y?ue():(C=!1,D=null)}}else C=!1}var ue;if(typeof p=="function")ue=function(){p(ne)};else if(typeof MessageChannel<"u"){var A=new MessageChannel,K=A.port2;A.port1.onmessage=ne,ue=function(){K.postMessage(null)}}else ue=function(){z(ne,0)};function oe(X){D=X,C||(C=!0,ue())}function ye(X,Y){x=z(function(){X(e.unstable_now())},Y)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(X){X.callback=null},e.unstable_continueExecution=function(){B||R||(B=!0,oe(k))},e.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<X?Math.floor(1e3/X):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(X){switch(h){case 1:case 2:case 3:var Y=3;break;default:Y=h}var ce=h;h=Y;try{return X()}finally{h=ce}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(X,Y){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var ce=h;h=X;try{return Y()}finally{h=ce}},e.unstable_scheduleCallback=function(X,Y,ce){var J=e.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?J+ce:J):ce=J,X){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=ce+I,X={id:m++,callback:Y,priorityLevel:X,startTime:ce,expirationTime:I,sortIndex:-1},ce>J?(X.sortIndex=ce,r(g,X),n(d)===null&&X===n(g)&&(T?(b(x),x=-1):T=!0,ye(j,ce-J))):(X.sortIndex=I,r(d,X),B||R||(B=!0,oe(k))),X},e.unstable_shouldYield=Z,e.unstable_wrapCallback=function(X){var Y=h;return function(){var ce=h;h=Y;try{return X.apply(this,arguments)}finally{h=ce}}}})(cb);db.exports=cb;var zf=db.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tf=c,Br=zf;function ze(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gb=new Set,os={};function Do(e,r){di(e,r),di(e+"Capture",r)}function di(e,r){for(os[e]=r,e=0;e<r.length;e++)gb.add(r[e])}var zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jd=Object.prototype.hasOwnProperty,If=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ng={},Og={};function Bf(e){return jd.call(Og,e)?!0:jd.call(Ng,e)?!1:If.test(e)?Og[e]=!0:(Ng[e]=!0,!1)}function Rf(e,r,n,o){if(n!==null&&n.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Df(e,r,n,o){if(r===null||typeof r>"u"||Rf(e,r,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function br(e,r,n,o,i,s,a){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=o,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=r,this.sanitizeURL=s,this.removeEmptyString=a}var er={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){er[e]=new br(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];er[r]=new br(r,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){er[e]=new br(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){er[e]=new br(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){er[e]=new br(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){er[e]=new br(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){er[e]=new br(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){er[e]=new br(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){er[e]=new br(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ac=/[\-:]([a-z])/g;function Ec(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(Ac,Ec);er[r]=new br(r,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(Ac,Ec);er[r]=new br(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(Ac,Ec);er[r]=new br(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){er[e]=new br(e,1,!1,e.toLowerCase(),null,!1,!1)});er.xlinkHref=new br("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){er[e]=new br(e,1,!1,e.toLowerCase(),null,!0,!0)});function Fc(e,r,n,o){var i=er.hasOwnProperty(r)?er[r]:null;(i!==null?i.type!==0:o||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Df(r,n,i,o)&&(n=null),o||i===null?Bf(r)&&(n===null?e.removeAttribute(r):e.setAttribute(r,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(r=i.attributeName,o=i.attributeNamespace,n===null?e.removeAttribute(r):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,o?e.setAttributeNS(o,r,n):e.setAttribute(r,n))))}var Dn=Tf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fs=Symbol.for("react.element"),Ho=Symbol.for("react.portal"),Go=Symbol.for("react.fragment"),Wc=Symbol.for("react.strict_mode"),kd=Symbol.for("react.profiler"),ub=Symbol.for("react.provider"),pb=Symbol.for("react.context"),Mc=Symbol.for("react.forward_ref"),wd=Symbol.for("react.suspense"),Sd=Symbol.for("react.suspense_list"),Lc=Symbol.for("react.memo"),Pn=Symbol.for("react.lazy"),bb=Symbol.for("react.offscreen"),Hg=Symbol.iterator;function ki(e){return e===null||typeof e!="object"?null:(e=Hg&&e[Hg]||e["@@iterator"],typeof e=="function"?e:null)}var Mt=Object.assign,Tl;function Fi(e){if(Tl===void 0)try{throw Error()}catch(n){var r=n.stack.trim().match(/\n( *(at )?)/);Tl=r&&r[1]||""}return`
`+Tl+e}var Il=!1;function Bl(e,r){if(!e||Il)return"";Il=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(g){var o=g}Reflect.construct(e,[],r)}else{try{r.call()}catch(g){o=g}e.call(r.prototype)}else{try{throw Error()}catch(g){o=g}e()}}catch(g){if(g&&o&&typeof g.stack=="string"){for(var i=g.stack.split(`
`),s=o.stack.split(`
`),a=i.length-1,l=s.length-1;1<=a&&0<=l&&i[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==s[l]){var d=`
`+i[a].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=a&&0<=l);break}}}finally{Il=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Fi(e):""}function Af(e){switch(e.tag){case 5:return Fi(e.type);case 16:return Fi("Lazy");case 13:return Fi("Suspense");case 19:return Fi("SuspenseList");case 0:case 2:case 15:return e=Bl(e.type,!1),e;case 11:return e=Bl(e.type.render,!1),e;case 1:return e=Bl(e.type,!0),e;default:return""}}function Cd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Go:return"Fragment";case Ho:return"Portal";case kd:return"Profiler";case Wc:return"StrictMode";case wd:return"Suspense";case Sd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case pb:return(e.displayName||"Context")+".Consumer";case ub:return(e._context.displayName||"Context")+".Provider";case Mc:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Lc:return r=e.displayName||null,r!==null?r:Cd(e.type)||"Memo";case Pn:r=e._payload,e=e._init;try{return Cd(e(r))}catch{}}return null}function Ef(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Cd(r);case 8:return r===Wc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function oo(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mb(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ff(e){var r=mb(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),o=""+e[r];if(!e.hasOwnProperty(r)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return i.call(this)},set:function(a){o=""+a,s.call(this,a)}}),Object.defineProperty(e,r,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(a){o=""+a},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function Ws(e){e._valueTracker||(e._valueTracker=Ff(e))}function hb(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var n=r.getValue(),o="";return e&&(o=mb(e)?e.checked?"true":"false":e.value),e=o,e!==n?(r.setValue(e),!0):!1}function Ba(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function zd(e,r){var n=r.checked;return Mt({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Gg(e,r){var n=r.defaultValue==null?"":r.defaultValue,o=r.checked!=null?r.checked:r.defaultChecked;n=oo(r.value!=null?r.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function fb(e,r){r=r.checked,r!=null&&Fc(e,"checked",r,!1)}function Td(e,r){fb(e,r);var n=oo(r.value),o=r.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Id(e,r.type,n):r.hasOwnProperty("defaultValue")&&Id(e,r.type,oo(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function Ug(e,r,n){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var o=r.type;if(!(o!=="submit"&&o!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,n||r===e.value||(e.value=r),e.defaultValue=r}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Id(e,r,n){(r!=="number"||Ba(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Wi=Array.isArray;function ti(e,r,n,o){if(e=e.options,r){r={};for(var i=0;i<n.length;i++)r["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=r.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&o&&(e[n].defaultSelected=!0)}else{for(n=""+oo(n),r=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,o&&(e[i].defaultSelected=!0);return}r!==null||e[i].disabled||(r=e[i])}r!==null&&(r.selected=!0)}}function Bd(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(ze(91));return Mt({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vg(e,r){var n=r.value;if(n==null){if(n=r.children,r=r.defaultValue,n!=null){if(r!=null)throw Error(ze(92));if(Wi(n)){if(1<n.length)throw Error(ze(93));n=n[0]}r=n}r==null&&(r=""),n=r}e._wrapperState={initialValue:oo(n)}}function xb(e,r){var n=oo(r.value),o=oo(r.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),r.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function Yg(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function yb(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rd(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?yb(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ms,vb=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,n,o,i){MSApp.execUnsafeLocalFunction(function(){return e(r,n,o,i)})}:e}(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(Ms=Ms||document.createElement("div"),Ms.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ms.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function is(e,r){if(r){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=r;return}}e.textContent=r}var Hi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wf=["Webkit","ms","Moz","O"];Object.keys(Hi).forEach(function(e){Wf.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),Hi[r]=Hi[e]})});function jb(e,r,n){return r==null||typeof r=="boolean"||r===""?"":n||typeof r!="number"||r===0||Hi.hasOwnProperty(e)&&Hi[e]?(""+r).trim():r+"px"}function kb(e,r){e=e.style;for(var n in r)if(r.hasOwnProperty(n)){var o=n.indexOf("--")===0,i=jb(n,r[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,i):e[n]=i}}var Mf=Mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Dd(e,r){if(r){if(Mf[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(ze(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(ze(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(ze(61))}if(r.style!=null&&typeof r.style!="object")throw Error(ze(62))}}function Ad(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ed=null;function _c(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fd=null,ri=null,ni=null;function Kg(e){if(e=Bs(e)){if(typeof Fd!="function")throw Error(ze(280));var r=e.stateNode;r&&(r=gl(r),Fd(e.stateNode,e.type,r))}}function wb(e){ri?ni?ni.push(e):ni=[e]:ri=e}function Sb(){if(ri){var e=ri,r=ni;if(ni=ri=null,Kg(e),r)for(e=0;e<r.length;e++)Kg(r[e])}}function Cb(e,r){return e(r)}function zb(){}var Rl=!1;function Tb(e,r,n){if(Rl)return e(r,n);Rl=!0;try{return Cb(e,r,n)}finally{Rl=!1,(ri!==null||ni!==null)&&(zb(),Sb())}}function ss(e,r){var n=e.stateNode;if(n===null)return null;var o=gl(n);if(o===null)return null;n=o[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(ze(231,r,typeof n));return n}var Wd=!1;if(zn)try{var wi={};Object.defineProperty(wi,"passive",{get:function(){Wd=!0}}),window.addEventListener("test",wi,wi),window.removeEventListener("test",wi,wi)}catch{Wd=!1}function Lf(e,r,n,o,i,s,a,l,d){var g=Array.prototype.slice.call(arguments,3);try{r.apply(n,g)}catch(m){this.onError(m)}}var Gi=!1,Ra=null,Da=!1,Md=null,_f={onError:function(e){Gi=!0,Ra=e}};function $f(e,r,n,o,i,s,a,l,d){Gi=!1,Ra=null,Lf.apply(_f,arguments)}function Pf(e,r,n,o,i,s,a,l,d){if($f.apply(this,arguments),Gi){if(Gi){var g=Ra;Gi=!1,Ra=null}else throw Error(ze(198));Da||(Da=!0,Md=g)}}function Ao(e){var r=e,n=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,r.flags&4098&&(n=r.return),e=r.return;while(e)}return r.tag===3?n:null}function Ib(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function Qg(e){if(Ao(e)!==e)throw Error(ze(188))}function Nf(e){var r=e.alternate;if(!r){if(r=Ao(e),r===null)throw Error(ze(188));return r!==e?null:e}for(var n=e,o=r;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(o=i.return,o!==null){n=o;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Qg(i),e;if(s===o)return Qg(i),r;s=s.sibling}throw Error(ze(188))}if(n.return!==o.return)n=i,o=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,o=s;break}if(l===o){a=!0,o=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,o=i;break}if(l===o){a=!0,o=s,n=i;break}l=l.sibling}if(!a)throw Error(ze(189))}}if(n.alternate!==o)throw Error(ze(190))}if(n.tag!==3)throw Error(ze(188));return n.stateNode.current===n?e:r}function Bb(e){return e=Nf(e),e!==null?Rb(e):null}function Rb(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=Rb(e);if(r!==null)return r;e=e.sibling}return null}var Db=Br.unstable_scheduleCallback,Xg=Br.unstable_cancelCallback,Of=Br.unstable_shouldYield,Hf=Br.unstable_requestPaint,_t=Br.unstable_now,Gf=Br.unstable_getCurrentPriorityLevel,$c=Br.unstable_ImmediatePriority,Ab=Br.unstable_UserBlockingPriority,Aa=Br.unstable_NormalPriority,Uf=Br.unstable_LowPriority,Eb=Br.unstable_IdlePriority,al=null,ln=null;function Vf(e){if(ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(al,e,void 0,(e.current.flags&128)===128)}catch{}}var Xr=Math.clz32?Math.clz32:Qf,Yf=Math.log,Kf=Math.LN2;function Qf(e){return e>>>=0,e===0?32:31-(Yf(e)/Kf|0)|0}var Ls=64,_s=4194304;function Mi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ea(e,r){var n=e.pendingLanes;if(n===0)return 0;var o=0,i=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?o=Mi(l):(s&=a,s!==0&&(o=Mi(s)))}else a=n&~i,a!==0?o=Mi(a):s!==0&&(o=Mi(s));if(o===0)return 0;if(r!==0&&r!==o&&!(r&i)&&(i=o&-o,s=r&-r,i>=s||i===16&&(s&4194240)!==0))return r;if(o&4&&(o|=n&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=o;0<r;)n=31-Xr(r),i=1<<n,o|=e[n],r&=~i;return o}function Xf(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qf(e,r){for(var n=e.suspendedLanes,o=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-Xr(s),l=1<<a,d=i[a];d===-1?(!(l&n)||l&o)&&(i[a]=Xf(l,r)):d<=r&&(e.expiredLanes|=l),s&=~l}}function Ld(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Fb(){var e=Ls;return Ls<<=1,!(Ls&4194240)&&(Ls=64),e}function Dl(e){for(var r=[],n=0;31>n;n++)r.push(e);return r}function Ts(e,r,n){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Xr(r),e[r]=n}function Zf(e,r){var n=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Xr(n),s=1<<i;r[i]=0,o[i]=-1,e[i]=-1,n&=~s}}function Pc(e,r){var n=e.entangledLanes|=r;for(e=e.entanglements;n;){var o=31-Xr(n),i=1<<o;i&r|e[o]&r&&(e[o]|=r),n&=~i}}var St=0;function Wb(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Mb,Nc,Lb,_b,$b,_d=!1,$s=[],Kn=null,Qn=null,Xn=null,as=new Map,ls=new Map,Hn=[],Jf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qg(e,r){switch(e){case"focusin":case"focusout":Kn=null;break;case"dragenter":case"dragleave":Qn=null;break;case"mouseover":case"mouseout":Xn=null;break;case"pointerover":case"pointerout":as.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":ls.delete(r.pointerId)}}function Si(e,r,n,o,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:r,domEventName:n,eventSystemFlags:o,nativeEvent:s,targetContainers:[i]},r!==null&&(r=Bs(r),r!==null&&Nc(r)),e):(e.eventSystemFlags|=o,r=e.targetContainers,i!==null&&r.indexOf(i)===-1&&r.push(i),e)}function ex(e,r,n,o,i){switch(r){case"focusin":return Kn=Si(Kn,e,r,n,o,i),!0;case"dragenter":return Qn=Si(Qn,e,r,n,o,i),!0;case"mouseover":return Xn=Si(Xn,e,r,n,o,i),!0;case"pointerover":var s=i.pointerId;return as.set(s,Si(as.get(s)||null,e,r,n,o,i)),!0;case"gotpointercapture":return s=i.pointerId,ls.set(s,Si(ls.get(s)||null,e,r,n,o,i)),!0}return!1}function Pb(e){var r=vo(e.target);if(r!==null){var n=Ao(r);if(n!==null){if(r=n.tag,r===13){if(r=Ib(n),r!==null){e.blockedOn=r,$b(e.priority,function(){Lb(n)});return}}else if(r===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ha(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var n=$d(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);Ed=o,n.target.dispatchEvent(o),Ed=null}else return r=Bs(n),r!==null&&Nc(r),e.blockedOn=n,!1;r.shift()}return!0}function Zg(e,r,n){ha(e)&&n.delete(r)}function tx(){_d=!1,Kn!==null&&ha(Kn)&&(Kn=null),Qn!==null&&ha(Qn)&&(Qn=null),Xn!==null&&ha(Xn)&&(Xn=null),as.forEach(Zg),ls.forEach(Zg)}function Ci(e,r){e.blockedOn===r&&(e.blockedOn=null,_d||(_d=!0,Br.unstable_scheduleCallback(Br.unstable_NormalPriority,tx)))}function ds(e){function r(i){return Ci(i,e)}if(0<$s.length){Ci($s[0],e);for(var n=1;n<$s.length;n++){var o=$s[n];o.blockedOn===e&&(o.blockedOn=null)}}for(Kn!==null&&Ci(Kn,e),Qn!==null&&Ci(Qn,e),Xn!==null&&Ci(Xn,e),as.forEach(r),ls.forEach(r),n=0;n<Hn.length;n++)o=Hn[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<Hn.length&&(n=Hn[0],n.blockedOn===null);)Pb(n),n.blockedOn===null&&Hn.shift()}var oi=Dn.ReactCurrentBatchConfig,Fa=!0;function rx(e,r,n,o){var i=St,s=oi.transition;oi.transition=null;try{St=1,Oc(e,r,n,o)}finally{St=i,oi.transition=s}}function nx(e,r,n,o){var i=St,s=oi.transition;oi.transition=null;try{St=4,Oc(e,r,n,o)}finally{St=i,oi.transition=s}}function Oc(e,r,n,o){if(Fa){var i=$d(e,r,n,o);if(i===null)Nl(e,r,o,Wa,n),qg(e,o);else if(ex(i,e,r,n,o))o.stopPropagation();else if(qg(e,o),r&4&&-1<Jf.indexOf(e)){for(;i!==null;){var s=Bs(i);if(s!==null&&Mb(s),s=$d(e,r,n,o),s===null&&Nl(e,r,o,Wa,n),s===i)break;i=s}i!==null&&o.stopPropagation()}else Nl(e,r,o,null,n)}}var Wa=null;function $d(e,r,n,o){if(Wa=null,e=_c(o),e=vo(e),e!==null)if(r=Ao(e),r===null)e=null;else if(n=r.tag,n===13){if(e=Ib(r),e!==null)return e;e=null}else if(n===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return Wa=e,null}function Nb(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gf()){case $c:return 1;case Ab:return 4;case Aa:case Uf:return 16;case Eb:return 536870912;default:return 16}default:return 16}}var Vn=null,Hc=null,fa=null;function Ob(){if(fa)return fa;var e,r=Hc,n=r.length,o,i="value"in Vn?Vn.value:Vn.textContent,s=i.length;for(e=0;e<n&&r[e]===i[e];e++);var a=n-e;for(o=1;o<=a&&r[n-o]===i[s-o];o++);return fa=i.slice(e,1<o?1-o:void 0)}function xa(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function Ps(){return!0}function Jg(){return!1}function Dr(e){function r(n,o,i,s,a){this._reactName=n,this._targetInst=i,this.type=o,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ps:Jg,this.isPropagationStopped=Jg,this}return Mt(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ps)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ps)},persist:function(){},isPersistent:Ps}),r}var vi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gc=Dr(vi),Is=Mt({},vi,{view:0,detail:0}),ox=Dr(Is),Al,El,zi,ll=Mt({},Is,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zi&&(zi&&e.type==="mousemove"?(Al=e.screenX-zi.screenX,El=e.screenY-zi.screenY):El=Al=0,zi=e),Al)},movementY:function(e){return"movementY"in e?e.movementY:El}}),eu=Dr(ll),ix=Mt({},ll,{dataTransfer:0}),sx=Dr(ix),ax=Mt({},Is,{relatedTarget:0}),Fl=Dr(ax),lx=Mt({},vi,{animationName:0,elapsedTime:0,pseudoElement:0}),dx=Dr(lx),cx=Mt({},vi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gx=Dr(cx),ux=Mt({},vi,{data:0}),tu=Dr(ux),px={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hx(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=mx[e])?!!r[e]:!1}function Uc(){return hx}var fx=Mt({},Is,{key:function(e){if(e.key){var r=px[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=xa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uc,charCode:function(e){return e.type==="keypress"?xa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xx=Dr(fx),yx=Mt({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ru=Dr(yx),vx=Mt({},Is,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uc}),jx=Dr(vx),kx=Mt({},vi,{propertyName:0,elapsedTime:0,pseudoElement:0}),wx=Dr(kx),Sx=Mt({},ll,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cx=Dr(Sx),zx=[9,13,27,32],Vc=zn&&"CompositionEvent"in window,Ui=null;zn&&"documentMode"in document&&(Ui=document.documentMode);var Tx=zn&&"TextEvent"in window&&!Ui,Hb=zn&&(!Vc||Ui&&8<Ui&&11>=Ui),nu=" ",ou=!1;function Gb(e,r){switch(e){case"keyup":return zx.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ub(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Uo=!1;function Ix(e,r){switch(e){case"compositionend":return Ub(r);case"keypress":return r.which!==32?null:(ou=!0,nu);case"textInput":return e=r.data,e===nu&&ou?null:e;default:return null}}function Bx(e,r){if(Uo)return e==="compositionend"||!Vc&&Gb(e,r)?(e=Ob(),fa=Hc=Vn=null,Uo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Hb&&r.locale!=="ko"?null:r.data;default:return null}}var Rx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function iu(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!Rx[e.type]:r==="textarea"}function Vb(e,r,n,o){wb(o),r=Ma(r,"onChange"),0<r.length&&(n=new Gc("onChange","change",null,n,o),e.push({event:n,listeners:r}))}var Vi=null,cs=null;function Dx(e){nm(e,0)}function dl(e){var r=Ko(e);if(hb(r))return e}function Ax(e,r){if(e==="change")return r}var Yb=!1;if(zn){var Wl;if(zn){var Ml="oninput"in document;if(!Ml){var su=document.createElement("div");su.setAttribute("oninput","return;"),Ml=typeof su.oninput=="function"}Wl=Ml}else Wl=!1;Yb=Wl&&(!document.documentMode||9<document.documentMode)}function au(){Vi&&(Vi.detachEvent("onpropertychange",Kb),cs=Vi=null)}function Kb(e){if(e.propertyName==="value"&&dl(cs)){var r=[];Vb(r,cs,e,_c(e)),Tb(Dx,r)}}function Ex(e,r,n){e==="focusin"?(au(),Vi=r,cs=n,Vi.attachEvent("onpropertychange",Kb)):e==="focusout"&&au()}function Fx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return dl(cs)}function Wx(e,r){if(e==="click")return dl(r)}function Mx(e,r){if(e==="input"||e==="change")return dl(r)}function Lx(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Zr=typeof Object.is=="function"?Object.is:Lx;function gs(e,r){if(Zr(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var n=Object.keys(e),o=Object.keys(r);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var i=n[o];if(!jd.call(r,i)||!Zr(e[i],r[i]))return!1}return!0}function lu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function du(e,r){var n=lu(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=r&&o>=r)return{node:n,offset:r-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lu(n)}}function Qb(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?Qb(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function Xb(){for(var e=window,r=Ba();r instanceof e.HTMLIFrameElement;){try{var n=typeof r.contentWindow.location.href=="string"}catch{n=!1}if(n)e=r.contentWindow;else break;r=Ba(e.document)}return r}function Yc(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function _x(e){var r=Xb(),n=e.focusedElem,o=e.selectionRange;if(r!==n&&n&&n.ownerDocument&&Qb(n.ownerDocument.documentElement,n)){if(o!==null&&Yc(n)){if(r=o.start,e=o.end,e===void 0&&(e=r),"selectionStart"in n)n.selectionStart=r,n.selectionEnd=Math.min(e,n.value.length);else if(e=(r=n.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(o.start,i);o=o.end===void 0?s:Math.min(o.end,i),!e.extend&&s>o&&(i=o,o=s,s=i),i=du(n,s);var a=du(n,o);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(r=r.createRange(),r.setStart(i.node,i.offset),e.removeAllRanges(),s>o?(e.addRange(r),e.extend(a.node,a.offset)):(r.setEnd(a.node,a.offset),e.addRange(r)))}}for(r=[],e=n;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<r.length;n++)e=r[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $x=zn&&"documentMode"in document&&11>=document.documentMode,Vo=null,Pd=null,Yi=null,Nd=!1;function cu(e,r,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nd||Vo==null||Vo!==Ba(o)||(o=Vo,"selectionStart"in o&&Yc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Yi&&gs(Yi,o)||(Yi=o,o=Ma(Pd,"onSelect"),0<o.length&&(r=new Gc("onSelect","select",null,r,n),e.push({event:r,listeners:o}),r.target=Vo)))}function Ns(e,r){var n={};return n[e.toLowerCase()]=r.toLowerCase(),n["Webkit"+e]="webkit"+r,n["Moz"+e]="moz"+r,n}var Yo={animationend:Ns("Animation","AnimationEnd"),animationiteration:Ns("Animation","AnimationIteration"),animationstart:Ns("Animation","AnimationStart"),transitionend:Ns("Transition","TransitionEnd")},Ll={},qb={};zn&&(qb=document.createElement("div").style,"AnimationEvent"in window||(delete Yo.animationend.animation,delete Yo.animationiteration.animation,delete Yo.animationstart.animation),"TransitionEvent"in window||delete Yo.transitionend.transition);function cl(e){if(Ll[e])return Ll[e];if(!Yo[e])return e;var r=Yo[e],n;for(n in r)if(r.hasOwnProperty(n)&&n in qb)return Ll[e]=r[n];return e}var Zb=cl("animationend"),Jb=cl("animationiteration"),em=cl("animationstart"),tm=cl("transitionend"),rm=new Map,gu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ao(e,r){rm.set(e,r),Do(r,[e])}for(var _l=0;_l<gu.length;_l++){var $l=gu[_l],Px=$l.toLowerCase(),Nx=$l[0].toUpperCase()+$l.slice(1);ao(Px,"on"+Nx)}ao(Zb,"onAnimationEnd");ao(Jb,"onAnimationIteration");ao(em,"onAnimationStart");ao("dblclick","onDoubleClick");ao("focusin","onFocus");ao("focusout","onBlur");ao(tm,"onTransitionEnd");di("onMouseEnter",["mouseout","mouseover"]);di("onMouseLeave",["mouseout","mouseover"]);di("onPointerEnter",["pointerout","pointerover"]);di("onPointerLeave",["pointerout","pointerover"]);Do("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Do("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Do("onBeforeInput",["compositionend","keypress","textInput","paste"]);Do("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Do("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Do("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Li="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ox=new Set("cancel close invalid load scroll toggle".split(" ").concat(Li));function uu(e,r,n){var o=e.type||"unknown-event";e.currentTarget=n,Pf(o,r,void 0,e),e.currentTarget=null}function nm(e,r){r=(r&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],i=o.event;o=o.listeners;e:{var s=void 0;if(r)for(var a=o.length-1;0<=a;a--){var l=o[a],d=l.instance,g=l.currentTarget;if(l=l.listener,d!==s&&i.isPropagationStopped())break e;uu(i,l,g),s=d}else for(a=0;a<o.length;a++){if(l=o[a],d=l.instance,g=l.currentTarget,l=l.listener,d!==s&&i.isPropagationStopped())break e;uu(i,l,g),s=d}}}if(Da)throw e=Md,Da=!1,Md=null,e}function Tt(e,r){var n=r[Vd];n===void 0&&(n=r[Vd]=new Set);var o=e+"__bubble";n.has(o)||(om(r,e,2,!1),n.add(o))}function Pl(e,r,n){var o=0;r&&(o|=4),om(n,e,o,r)}var Os="_reactListening"+Math.random().toString(36).slice(2);function us(e){if(!e[Os]){e[Os]=!0,gb.forEach(function(n){n!=="selectionchange"&&(Ox.has(n)||Pl(n,!1,e),Pl(n,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Os]||(r[Os]=!0,Pl("selectionchange",!1,r))}}function om(e,r,n,o){switch(Nb(r)){case 1:var i=rx;break;case 4:i=nx;break;default:i=Oc}n=i.bind(null,r,n,e),i=void 0,!Wd||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(i=!0),o?i!==void 0?e.addEventListener(r,n,{capture:!0,passive:i}):e.addEventListener(r,n,!0):i!==void 0?e.addEventListener(r,n,{passive:i}):e.addEventListener(r,n,!1)}function Nl(e,r,n,o,i){var s=o;if(!(r&1)&&!(r&2)&&o!==null)e:for(;;){if(o===null)return;var a=o.tag;if(a===3||a===4){var l=o.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=o.return;a!==null;){var d=a.tag;if((d===3||d===4)&&(d=a.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;a=a.return}for(;l!==null;){if(a=vo(l),a===null)return;if(d=a.tag,d===5||d===6){o=s=a;continue e}l=l.parentNode}}o=o.return}Tb(function(){var g=s,m=_c(n),f=[];e:{var h=rm.get(e);if(h!==void 0){var R=Gc,B=e;switch(e){case"keypress":if(xa(n)===0)break e;case"keydown":case"keyup":R=xx;break;case"focusin":B="focus",R=Fl;break;case"focusout":B="blur",R=Fl;break;case"beforeblur":case"afterblur":R=Fl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=eu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=sx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=jx;break;case Zb:case Jb:case em:R=dx;break;case tm:R=wx;break;case"scroll":R=ox;break;case"wheel":R=Cx;break;case"copy":case"cut":case"paste":R=gx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=ru}var T=(r&4)!==0,z=!T&&e==="scroll",b=T?h!==null?h+"Capture":null:h;T=[];for(var p=g,u;p!==null;){u=p;var j=u.stateNode;if(u.tag===5&&j!==null&&(u=j,b!==null&&(j=ss(p,b),j!=null&&T.push(ps(p,j,u)))),z)break;p=p.return}0<T.length&&(h=new R(h,B,null,n,m),f.push({event:h,listeners:T}))}}if(!(r&7)){e:{if(h=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",h&&n!==Ed&&(B=n.relatedTarget||n.fromElement)&&(vo(B)||B[Tn]))break e;if((R||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,R?(B=n.relatedTarget||n.toElement,R=g,B=B?vo(B):null,B!==null&&(z=Ao(B),B!==z||B.tag!==5&&B.tag!==6)&&(B=null)):(R=null,B=g),R!==B)){if(T=eu,j="onMouseLeave",b="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(T=ru,j="onPointerLeave",b="onPointerEnter",p="pointer"),z=R==null?h:Ko(R),u=B==null?h:Ko(B),h=new T(j,p+"leave",R,n,m),h.target=z,h.relatedTarget=u,j=null,vo(m)===g&&(T=new T(b,p+"enter",B,n,m),T.target=u,T.relatedTarget=z,j=T),z=j,R&&B)t:{for(T=R,b=B,p=0,u=T;u;u=Fo(u))p++;for(u=0,j=b;j;j=Fo(j))u++;for(;0<p-u;)T=Fo(T),p--;for(;0<u-p;)b=Fo(b),u--;for(;p--;){if(T===b||b!==null&&T===b.alternate)break t;T=Fo(T),b=Fo(b)}T=null}else T=null;R!==null&&pu(f,h,R,T,!1),B!==null&&z!==null&&pu(f,z,B,T,!0)}}e:{if(h=g?Ko(g):window,R=h.nodeName&&h.nodeName.toLowerCase(),R==="select"||R==="input"&&h.type==="file")var k=Ax;else if(iu(h))if(Yb)k=Mx;else{k=Fx;var C=Ex}else(R=h.nodeName)&&R.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=Wx);if(k&&(k=k(e,g))){Vb(f,k,n,m);break e}C&&C(e,h,g),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Id(h,"number",h.value)}switch(C=g?Ko(g):window,e){case"focusin":(iu(C)||C.contentEditable==="true")&&(Vo=C,Pd=g,Yi=null);break;case"focusout":Yi=Pd=Vo=null;break;case"mousedown":Nd=!0;break;case"contextmenu":case"mouseup":case"dragend":Nd=!1,cu(f,n,m);break;case"selectionchange":if($x)break;case"keydown":case"keyup":cu(f,n,m)}var D;if(Vc)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Uo?Gb(e,n)&&(x="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(Hb&&n.locale!=="ko"&&(Uo||x!=="onCompositionStart"?x==="onCompositionEnd"&&Uo&&(D=Ob()):(Vn=m,Hc="value"in Vn?Vn.value:Vn.textContent,Uo=!0)),C=Ma(g,x),0<C.length&&(x=new tu(x,e,null,n,m),f.push({event:x,listeners:C}),D?x.data=D:(D=Ub(n),D!==null&&(x.data=D)))),(D=Tx?Ix(e,n):Bx(e,n))&&(g=Ma(g,"onBeforeInput"),0<g.length&&(m=new tu("onBeforeInput","beforeinput",null,n,m),f.push({event:m,listeners:g}),m.data=D))}nm(f,r)})}function ps(e,r,n){return{instance:e,listener:r,currentTarget:n}}function Ma(e,r){for(var n=r+"Capture",o=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ss(e,n),s!=null&&o.unshift(ps(e,s,i)),s=ss(e,r),s!=null&&o.push(ps(e,s,i))),e=e.return}return o}function Fo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function pu(e,r,n,o,i){for(var s=r._reactName,a=[];n!==null&&n!==o;){var l=n,d=l.alternate,g=l.stateNode;if(d!==null&&d===o)break;l.tag===5&&g!==null&&(l=g,i?(d=ss(n,s),d!=null&&a.unshift(ps(n,d,l))):i||(d=ss(n,s),d!=null&&a.push(ps(n,d,l)))),n=n.return}a.length!==0&&e.push({event:r,listeners:a})}var Hx=/\r\n?/g,Gx=/\u0000|\uFFFD/g;function bu(e){return(typeof e=="string"?e:""+e).replace(Hx,`
`).replace(Gx,"")}function Hs(e,r,n){if(r=bu(r),bu(e)!==r&&n)throw Error(ze(425))}function La(){}var Od=null,Hd=null;function Gd(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Ud=typeof setTimeout=="function"?setTimeout:void 0,Ux=typeof clearTimeout=="function"?clearTimeout:void 0,mu=typeof Promise=="function"?Promise:void 0,Vx=typeof queueMicrotask=="function"?queueMicrotask:typeof mu<"u"?function(e){return mu.resolve(null).then(e).catch(Yx)}:Ud;function Yx(e){setTimeout(function(){throw e})}function Ol(e,r){var n=r,o=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(o===0){e.removeChild(i),ds(r);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=i}while(n);ds(r)}function qn(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function hu(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(r===0)return e;r--}else n==="/$"&&r++}e=e.previousSibling}return null}var ji=Math.random().toString(36).slice(2),an="__reactFiber$"+ji,bs="__reactProps$"+ji,Tn="__reactContainer$"+ji,Vd="__reactEvents$"+ji,Kx="__reactListeners$"+ji,Qx="__reactHandles$"+ji;function vo(e){var r=e[an];if(r)return r;for(var n=e.parentNode;n;){if(r=n[Tn]||n[an]){if(n=r.alternate,r.child!==null||n!==null&&n.child!==null)for(e=hu(e);e!==null;){if(n=e[an])return n;e=hu(e)}return r}e=n,n=e.parentNode}return null}function Bs(e){return e=e[an]||e[Tn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ko(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(ze(33))}function gl(e){return e[bs]||null}var Yd=[],Qo=-1;function lo(e){return{current:e}}function It(e){0>Qo||(e.current=Yd[Qo],Yd[Qo]=null,Qo--)}function zt(e,r){Qo++,Yd[Qo]=e.current,e.current=r}var io={},ar=lo(io),yr=lo(!1),zo=io;function ci(e,r){var n=e.type.contextTypes;if(!n)return io;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===r)return o.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=r[s];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),i}function vr(e){return e=e.childContextTypes,e!=null}function _a(){It(yr),It(ar)}function fu(e,r,n){if(ar.current!==io)throw Error(ze(168));zt(ar,r),zt(yr,n)}function im(e,r,n){var o=e.stateNode;if(r=r.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var i in o)if(!(i in r))throw Error(ze(108,Ef(e)||"Unknown",i));return Mt({},n,o)}function $a(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||io,zo=ar.current,zt(ar,e),zt(yr,yr.current),!0}function xu(e,r,n){var o=e.stateNode;if(!o)throw Error(ze(169));n?(e=im(e,r,zo),o.__reactInternalMemoizedMergedChildContext=e,It(yr),It(ar),zt(ar,e)):It(yr),zt(yr,n)}var jn=null,ul=!1,Hl=!1;function sm(e){jn===null?jn=[e]:jn.push(e)}function Xx(e){ul=!0,sm(e)}function co(){if(!Hl&&jn!==null){Hl=!0;var e=0,r=St;try{var n=jn;for(St=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}jn=null,ul=!1}catch(i){throw jn!==null&&(jn=jn.slice(e+1)),Db($c,co),i}finally{St=r,Hl=!1}}return null}var Xo=[],qo=0,Pa=null,Na=0,Lr=[],_r=0,To=null,wn=1,Sn="";function ho(e,r){Xo[qo++]=Na,Xo[qo++]=Pa,Pa=e,Na=r}function am(e,r,n){Lr[_r++]=wn,Lr[_r++]=Sn,Lr[_r++]=To,To=e;var o=wn;e=Sn;var i=32-Xr(o)-1;o&=~(1<<i),n+=1;var s=32-Xr(r)+i;if(30<s){var a=i-i%5;s=(o&(1<<a)-1).toString(32),o>>=a,i-=a,wn=1<<32-Xr(r)+i|n<<i|o,Sn=s+e}else wn=1<<s|n<<i|o,Sn=e}function Kc(e){e.return!==null&&(ho(e,1),am(e,1,0))}function Qc(e){for(;e===Pa;)Pa=Xo[--qo],Xo[qo]=null,Na=Xo[--qo],Xo[qo]=null;for(;e===To;)To=Lr[--_r],Lr[_r]=null,Sn=Lr[--_r],Lr[_r]=null,wn=Lr[--_r],Lr[_r]=null}var Ir=null,Tr=null,At=!1,Qr=null;function lm(e,r){var n=$r(5,null,null,0);n.elementType="DELETED",n.stateNode=r,n.return=e,r=e.deletions,r===null?(e.deletions=[n],e.flags|=16):r.push(n)}function yu(e,r){switch(e.tag){case 5:var n=e.type;return r=r.nodeType!==1||n.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,Ir=e,Tr=qn(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,Ir=e,Tr=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(n=To!==null?{id:wn,overflow:Sn}:null,e.memoizedState={dehydrated:r,treeContext:n,retryLane:1073741824},n=$r(18,null,null,0),n.stateNode=r,n.return=e,e.child=n,Ir=e,Tr=null,!0):!1;default:return!1}}function Kd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Qd(e){if(At){var r=Tr;if(r){var n=r;if(!yu(e,r)){if(Kd(e))throw Error(ze(418));r=qn(n.nextSibling);var o=Ir;r&&yu(e,r)?lm(o,n):(e.flags=e.flags&-4097|2,At=!1,Ir=e)}}else{if(Kd(e))throw Error(ze(418));e.flags=e.flags&-4097|2,At=!1,Ir=e}}}function vu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ir=e}function Gs(e){if(e!==Ir)return!1;if(!At)return vu(e),At=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!Gd(e.type,e.memoizedProps)),r&&(r=Tr)){if(Kd(e))throw dm(),Error(ze(418));for(;r;)lm(e,r),r=qn(r.nextSibling)}if(vu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(ze(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(r===0){Tr=qn(e.nextSibling);break e}r--}else n!=="$"&&n!=="$!"&&n!=="$?"||r++}e=e.nextSibling}Tr=null}}else Tr=Ir?qn(e.stateNode.nextSibling):null;return!0}function dm(){for(var e=Tr;e;)e=qn(e.nextSibling)}function gi(){Tr=Ir=null,At=!1}function Xc(e){Qr===null?Qr=[e]:Qr.push(e)}var qx=Dn.ReactCurrentBatchConfig;function Ti(e,r,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ze(309));var o=n.stateNode}if(!o)throw Error(ze(147,e));var i=o,s=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===s?r.ref:(r=function(a){var l=i.refs;a===null?delete l[s]:l[s]=a},r._stringRef=s,r)}if(typeof e!="string")throw Error(ze(284));if(!n._owner)throw Error(ze(290,e))}return e}function Us(e,r){throw e=Object.prototype.toString.call(r),Error(ze(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function ju(e){var r=e._init;return r(e._payload)}function cm(e){function r(b,p){if(e){var u=b.deletions;u===null?(b.deletions=[p],b.flags|=16):u.push(p)}}function n(b,p){if(!e)return null;for(;p!==null;)r(b,p),p=p.sibling;return null}function o(b,p){for(b=new Map;p!==null;)p.key!==null?b.set(p.key,p):b.set(p.index,p),p=p.sibling;return b}function i(b,p){return b=to(b,p),b.index=0,b.sibling=null,b}function s(b,p,u){return b.index=u,e?(u=b.alternate,u!==null?(u=u.index,u<p?(b.flags|=2,p):u):(b.flags|=2,p)):(b.flags|=1048576,p)}function a(b){return e&&b.alternate===null&&(b.flags|=2),b}function l(b,p,u,j){return p===null||p.tag!==6?(p=Xl(u,b.mode,j),p.return=b,p):(p=i(p,u),p.return=b,p)}function d(b,p,u,j){var k=u.type;return k===Go?m(b,p,u.props.children,j,u.key):p!==null&&(p.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Pn&&ju(k)===p.type)?(j=i(p,u.props),j.ref=Ti(b,p,u),j.return=b,j):(j=Ca(u.type,u.key,u.props,null,b.mode,j),j.ref=Ti(b,p,u),j.return=b,j)}function g(b,p,u,j){return p===null||p.tag!==4||p.stateNode.containerInfo!==u.containerInfo||p.stateNode.implementation!==u.implementation?(p=ql(u,b.mode,j),p.return=b,p):(p=i(p,u.children||[]),p.return=b,p)}function m(b,p,u,j,k){return p===null||p.tag!==7?(p=Co(u,b.mode,j,k),p.return=b,p):(p=i(p,u),p.return=b,p)}function f(b,p,u){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Xl(""+p,b.mode,u),p.return=b,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Fs:return u=Ca(p.type,p.key,p.props,null,b.mode,u),u.ref=Ti(b,null,p),u.return=b,u;case Ho:return p=ql(p,b.mode,u),p.return=b,p;case Pn:var j=p._init;return f(b,j(p._payload),u)}if(Wi(p)||ki(p))return p=Co(p,b.mode,u,null),p.return=b,p;Us(b,p)}return null}function h(b,p,u,j){var k=p!==null?p.key:null;if(typeof u=="string"&&u!==""||typeof u=="number")return k!==null?null:l(b,p,""+u,j);if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Fs:return u.key===k?d(b,p,u,j):null;case Ho:return u.key===k?g(b,p,u,j):null;case Pn:return k=u._init,h(b,p,k(u._payload),j)}if(Wi(u)||ki(u))return k!==null?null:m(b,p,u,j,null);Us(b,u)}return null}function R(b,p,u,j,k){if(typeof j=="string"&&j!==""||typeof j=="number")return b=b.get(u)||null,l(p,b,""+j,k);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Fs:return b=b.get(j.key===null?u:j.key)||null,d(p,b,j,k);case Ho:return b=b.get(j.key===null?u:j.key)||null,g(p,b,j,k);case Pn:var C=j._init;return R(b,p,u,C(j._payload),k)}if(Wi(j)||ki(j))return b=b.get(u)||null,m(p,b,j,k,null);Us(p,j)}return null}function B(b,p,u,j){for(var k=null,C=null,D=p,x=p=0,y=null;D!==null&&x<u.length;x++){D.index>x?(y=D,D=null):y=D.sibling;var _=h(b,D,u[x],j);if(_===null){D===null&&(D=y);break}e&&D&&_.alternate===null&&r(b,D),p=s(_,p,x),C===null?k=_:C.sibling=_,C=_,D=y}if(x===u.length)return n(b,D),At&&ho(b,x),k;if(D===null){for(;x<u.length;x++)D=f(b,u[x],j),D!==null&&(p=s(D,p,x),C===null?k=D:C.sibling=D,C=D);return At&&ho(b,x),k}for(D=o(b,D);x<u.length;x++)y=R(D,b,x,u[x],j),y!==null&&(e&&y.alternate!==null&&D.delete(y.key===null?x:y.key),p=s(y,p,x),C===null?k=y:C.sibling=y,C=y);return e&&D.forEach(function(Z){return r(b,Z)}),At&&ho(b,x),k}function T(b,p,u,j){var k=ki(u);if(typeof k!="function")throw Error(ze(150));if(u=k.call(u),u==null)throw Error(ze(151));for(var C=k=null,D=p,x=p=0,y=null,_=u.next();D!==null&&!_.done;x++,_=u.next()){D.index>x?(y=D,D=null):y=D.sibling;var Z=h(b,D,_.value,j);if(Z===null){D===null&&(D=y);break}e&&D&&Z.alternate===null&&r(b,D),p=s(Z,p,x),C===null?k=Z:C.sibling=Z,C=Z,D=y}if(_.done)return n(b,D),At&&ho(b,x),k;if(D===null){for(;!_.done;x++,_=u.next())_=f(b,_.value,j),_!==null&&(p=s(_,p,x),C===null?k=_:C.sibling=_,C=_);return At&&ho(b,x),k}for(D=o(b,D);!_.done;x++,_=u.next())_=R(D,b,x,_.value,j),_!==null&&(e&&_.alternate!==null&&D.delete(_.key===null?x:_.key),p=s(_,p,x),C===null?k=_:C.sibling=_,C=_);return e&&D.forEach(function(ne){return r(b,ne)}),At&&ho(b,x),k}function z(b,p,u,j){if(typeof u=="object"&&u!==null&&u.type===Go&&u.key===null&&(u=u.props.children),typeof u=="object"&&u!==null){switch(u.$$typeof){case Fs:e:{for(var k=u.key,C=p;C!==null;){if(C.key===k){if(k=u.type,k===Go){if(C.tag===7){n(b,C.sibling),p=i(C,u.props.children),p.return=b,b=p;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Pn&&ju(k)===C.type){n(b,C.sibling),p=i(C,u.props),p.ref=Ti(b,C,u),p.return=b,b=p;break e}n(b,C);break}else r(b,C);C=C.sibling}u.type===Go?(p=Co(u.props.children,b.mode,j,u.key),p.return=b,b=p):(j=Ca(u.type,u.key,u.props,null,b.mode,j),j.ref=Ti(b,p,u),j.return=b,b=j)}return a(b);case Ho:e:{for(C=u.key;p!==null;){if(p.key===C)if(p.tag===4&&p.stateNode.containerInfo===u.containerInfo&&p.stateNode.implementation===u.implementation){n(b,p.sibling),p=i(p,u.children||[]),p.return=b,b=p;break e}else{n(b,p);break}else r(b,p);p=p.sibling}p=ql(u,b.mode,j),p.return=b,b=p}return a(b);case Pn:return C=u._init,z(b,p,C(u._payload),j)}if(Wi(u))return B(b,p,u,j);if(ki(u))return T(b,p,u,j);Us(b,u)}return typeof u=="string"&&u!==""||typeof u=="number"?(u=""+u,p!==null&&p.tag===6?(n(b,p.sibling),p=i(p,u),p.return=b,b=p):(n(b,p),p=Xl(u,b.mode,j),p.return=b,b=p),a(b)):n(b,p)}return z}var ui=cm(!0),gm=cm(!1),Oa=lo(null),Ha=null,Zo=null,qc=null;function Zc(){qc=Zo=Ha=null}function Jc(e){var r=Oa.current;It(Oa),e._currentValue=r}function Xd(e,r,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,o!==null&&(o.childLanes|=r)):o!==null&&(o.childLanes&r)!==r&&(o.childLanes|=r),e===n)break;e=e.return}}function ii(e,r){Ha=e,qc=Zo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&r&&(xr=!0),e.firstContext=null)}function Nr(e){var r=e._currentValue;if(qc!==e)if(e={context:e,memoizedValue:r,next:null},Zo===null){if(Ha===null)throw Error(ze(308));Zo=e,Ha.dependencies={lanes:0,firstContext:e}}else Zo=Zo.next=e;return r}var jo=null;function eg(e){jo===null?jo=[e]:jo.push(e)}function um(e,r,n,o){var i=r.interleaved;return i===null?(n.next=n,eg(r)):(n.next=i.next,i.next=n),r.interleaved=n,In(e,o)}function In(e,r){e.lanes|=r;var n=e.alternate;for(n!==null&&(n.lanes|=r),n=e,e=e.return;e!==null;)e.childLanes|=r,n=e.alternate,n!==null&&(n.childLanes|=r),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Nn=!1;function tg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pm(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Cn(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function Zn(e,r,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,ht&2){var i=o.pending;return i===null?r.next=r:(r.next=i.next,i.next=r),o.pending=r,In(e,n)}return i=o.interleaved,i===null?(r.next=r,eg(o)):(r.next=i.next,i.next=r),o.interleaved=r,In(e,n)}function ya(e,r,n){if(r=r.updateQueue,r!==null&&(r=r.shared,(n&4194240)!==0)){var o=r.lanes;o&=e.pendingLanes,n|=o,r.lanes=n,Pc(e,n)}}function ku(e,r){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=r:s=s.next=r}else i=s=r;n={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=r:e.next=r,n.lastBaseUpdate=r}function Ga(e,r,n,o){var i=e.updateQueue;Nn=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var d=l,g=d.next;d.next=null,a===null?s=g:a.next=g,a=d;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==a&&(l===null?m.firstBaseUpdate=g:l.next=g,m.lastBaseUpdate=d))}if(s!==null){var f=i.baseState;a=0,m=g=d=null,l=s;do{var h=l.lane,R=l.eventTime;if((o&h)===h){m!==null&&(m=m.next={eventTime:R,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var B=e,T=l;switch(h=r,R=n,T.tag){case 1:if(B=T.payload,typeof B=="function"){f=B.call(R,f,h);break e}f=B;break e;case 3:B.flags=B.flags&-65537|128;case 0:if(B=T.payload,h=typeof B=="function"?B.call(R,f,h):B,h==null)break e;f=Mt({},f,h);break e;case 2:Nn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else R={eventTime:R,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(g=m=R,d=f):m=m.next=R,a|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(m===null&&(d=f),i.baseState=d,i.firstBaseUpdate=g,i.lastBaseUpdate=m,r=i.shared.interleaved,r!==null){i=r;do a|=i.lane,i=i.next;while(i!==r)}else s===null&&(i.shared.lanes=0);Bo|=a,e.lanes=a,e.memoizedState=f}}function wu(e,r,n){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var o=e[r],i=o.callback;if(i!==null){if(o.callback=null,o=n,typeof i!="function")throw Error(ze(191,i));i.call(o)}}}var Rs={},dn=lo(Rs),ms=lo(Rs),hs=lo(Rs);function ko(e){if(e===Rs)throw Error(ze(174));return e}function rg(e,r){switch(zt(hs,r),zt(ms,e),zt(dn,Rs),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Rd(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=Rd(r,e)}It(dn),zt(dn,r)}function pi(){It(dn),It(ms),It(hs)}function bm(e){ko(hs.current);var r=ko(dn.current),n=Rd(r,e.type);r!==n&&(zt(ms,e),zt(dn,n))}function ng(e){ms.current===e&&(It(dn),It(ms))}var Ft=lo(0);function Ua(e){for(var r=e;r!==null;){if(r.tag===13){var n=r.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Gl=[];function og(){for(var e=0;e<Gl.length;e++)Gl[e]._workInProgressVersionPrimary=null;Gl.length=0}var va=Dn.ReactCurrentDispatcher,Ul=Dn.ReactCurrentBatchConfig,Io=0,Wt=null,Gt=null,Kt=null,Va=!1,Ki=!1,fs=0,Zx=0;function rr(){throw Error(ze(321))}function ig(e,r){if(r===null)return!1;for(var n=0;n<r.length&&n<e.length;n++)if(!Zr(e[n],r[n]))return!1;return!0}function sg(e,r,n,o,i,s){if(Io=s,Wt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,va.current=e===null||e.memoizedState===null?ry:ny,e=n(o,i),Ki){s=0;do{if(Ki=!1,fs=0,25<=s)throw Error(ze(301));s+=1,Kt=Gt=null,r.updateQueue=null,va.current=oy,e=n(o,i)}while(Ki)}if(va.current=Ya,r=Gt!==null&&Gt.next!==null,Io=0,Kt=Gt=Wt=null,Va=!1,r)throw Error(ze(300));return e}function ag(){var e=fs!==0;return fs=0,e}function nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Kt===null?Wt.memoizedState=Kt=e:Kt=Kt.next=e,Kt}function Or(){if(Gt===null){var e=Wt.alternate;e=e!==null?e.memoizedState:null}else e=Gt.next;var r=Kt===null?Wt.memoizedState:Kt.next;if(r!==null)Kt=r,Gt=e;else{if(e===null)throw Error(ze(310));Gt=e,e={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},Kt===null?Wt.memoizedState=Kt=e:Kt=Kt.next=e}return Kt}function xs(e,r){return typeof r=="function"?r(e):r}function Vl(e){var r=Or(),n=r.queue;if(n===null)throw Error(ze(311));n.lastRenderedReducer=e;var o=Gt,i=o.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}o.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,o=o.baseState;var l=a=null,d=null,g=s;do{var m=g.lane;if((Io&m)===m)d!==null&&(d=d.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),o=g.hasEagerState?g.eagerState:e(o,g.action);else{var f={lane:m,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};d===null?(l=d=f,a=o):d=d.next=f,Wt.lanes|=m,Bo|=m}g=g.next}while(g!==null&&g!==s);d===null?a=o:d.next=l,Zr(o,r.memoizedState)||(xr=!0),r.memoizedState=o,r.baseState=a,r.baseQueue=d,n.lastRenderedState=o}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Wt.lanes|=s,Bo|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[r.memoizedState,n.dispatch]}function Yl(e){var r=Or(),n=r.queue;if(n===null)throw Error(ze(311));n.lastRenderedReducer=e;var o=n.dispatch,i=n.pending,s=r.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=e(s,a.action),a=a.next;while(a!==i);Zr(s,r.memoizedState)||(xr=!0),r.memoizedState=s,r.baseQueue===null&&(r.baseState=s),n.lastRenderedState=s}return[s,o]}function mm(){}function hm(e,r){var n=Wt,o=Or(),i=r(),s=!Zr(o.memoizedState,i);if(s&&(o.memoizedState=i,xr=!0),o=o.queue,lg(ym.bind(null,n,o,e),[e]),o.getSnapshot!==r||s||Kt!==null&&Kt.memoizedState.tag&1){if(n.flags|=2048,ys(9,xm.bind(null,n,o,i,r),void 0,null),Qt===null)throw Error(ze(349));Io&30||fm(n,r,i)}return i}function fm(e,r,n){e.flags|=16384,e={getSnapshot:r,value:n},r=Wt.updateQueue,r===null?(r={lastEffect:null,stores:null},Wt.updateQueue=r,r.stores=[e]):(n=r.stores,n===null?r.stores=[e]:n.push(e))}function xm(e,r,n,o){r.value=n,r.getSnapshot=o,vm(r)&&jm(e)}function ym(e,r,n){return n(function(){vm(r)&&jm(e)})}function vm(e){var r=e.getSnapshot;e=e.value;try{var n=r();return!Zr(e,n)}catch{return!0}}function jm(e){var r=In(e,1);r!==null&&qr(r,e,1,-1)}function Su(e){var r=nn();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xs,lastRenderedState:e},r.queue=e,e=e.dispatch=ty.bind(null,Wt,e),[r.memoizedState,e]}function ys(e,r,n,o){return e={tag:e,create:r,destroy:n,deps:o,next:null},r=Wt.updateQueue,r===null?(r={lastEffect:null,stores:null},Wt.updateQueue=r,r.lastEffect=e.next=e):(n=r.lastEffect,n===null?r.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,r.lastEffect=e)),e}function km(){return Or().memoizedState}function ja(e,r,n,o){var i=nn();Wt.flags|=e,i.memoizedState=ys(1|r,n,void 0,o===void 0?null:o)}function pl(e,r,n,o){var i=Or();o=o===void 0?null:o;var s=void 0;if(Gt!==null){var a=Gt.memoizedState;if(s=a.destroy,o!==null&&ig(o,a.deps)){i.memoizedState=ys(r,n,s,o);return}}Wt.flags|=e,i.memoizedState=ys(1|r,n,s,o)}function Cu(e,r){return ja(8390656,8,e,r)}function lg(e,r){return pl(2048,8,e,r)}function wm(e,r){return pl(4,2,e,r)}function Sm(e,r){return pl(4,4,e,r)}function Cm(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function zm(e,r,n){return n=n!=null?n.concat([e]):null,pl(4,4,Cm.bind(null,r,e),n)}function dg(){}function Tm(e,r){var n=Or();r=r===void 0?null:r;var o=n.memoizedState;return o!==null&&r!==null&&ig(r,o[1])?o[0]:(n.memoizedState=[e,r],e)}function Im(e,r){var n=Or();r=r===void 0?null:r;var o=n.memoizedState;return o!==null&&r!==null&&ig(r,o[1])?o[0]:(e=e(),n.memoizedState=[e,r],e)}function Bm(e,r,n){return Io&21?(Zr(n,r)||(n=Fb(),Wt.lanes|=n,Bo|=n,e.baseState=!0),r):(e.baseState&&(e.baseState=!1,xr=!0),e.memoizedState=n)}function Jx(e,r){var n=St;St=n!==0&&4>n?n:4,e(!0);var o=Ul.transition;Ul.transition={};try{e(!1),r()}finally{St=n,Ul.transition=o}}function Rm(){return Or().memoizedState}function ey(e,r,n){var o=eo(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},Dm(e))Am(r,n);else if(n=um(e,r,n,o),n!==null){var i=ur();qr(n,e,o,i),Em(n,r,o)}}function ty(e,r,n){var o=eo(e),i={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(Dm(e))Am(r,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=r.lastRenderedReducer,s!==null))try{var a=r.lastRenderedState,l=s(a,n);if(i.hasEagerState=!0,i.eagerState=l,Zr(l,a)){var d=r.interleaved;d===null?(i.next=i,eg(r)):(i.next=d.next,d.next=i),r.interleaved=i;return}}catch{}finally{}n=um(e,r,i,o),n!==null&&(i=ur(),qr(n,e,o,i),Em(n,r,o))}}function Dm(e){var r=e.alternate;return e===Wt||r!==null&&r===Wt}function Am(e,r){Ki=Va=!0;var n=e.pending;n===null?r.next=r:(r.next=n.next,n.next=r),e.pending=r}function Em(e,r,n){if(n&4194240){var o=r.lanes;o&=e.pendingLanes,n|=o,r.lanes=n,Pc(e,n)}}var Ya={readContext:Nr,useCallback:rr,useContext:rr,useEffect:rr,useImperativeHandle:rr,useInsertionEffect:rr,useLayoutEffect:rr,useMemo:rr,useReducer:rr,useRef:rr,useState:rr,useDebugValue:rr,useDeferredValue:rr,useTransition:rr,useMutableSource:rr,useSyncExternalStore:rr,useId:rr,unstable_isNewReconciler:!1},ry={readContext:Nr,useCallback:function(e,r){return nn().memoizedState=[e,r===void 0?null:r],e},useContext:Nr,useEffect:Cu,useImperativeHandle:function(e,r,n){return n=n!=null?n.concat([e]):null,ja(4194308,4,Cm.bind(null,r,e),n)},useLayoutEffect:function(e,r){return ja(4194308,4,e,r)},useInsertionEffect:function(e,r){return ja(4,2,e,r)},useMemo:function(e,r){var n=nn();return r=r===void 0?null:r,e=e(),n.memoizedState=[e,r],e},useReducer:function(e,r,n){var o=nn();return r=n!==void 0?n(r):r,o.memoizedState=o.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},o.queue=e,e=e.dispatch=ey.bind(null,Wt,e),[o.memoizedState,e]},useRef:function(e){var r=nn();return e={current:e},r.memoizedState=e},useState:Su,useDebugValue:dg,useDeferredValue:function(e){return nn().memoizedState=e},useTransition:function(){var e=Su(!1),r=e[0];return e=Jx.bind(null,e[1]),nn().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,n){var o=Wt,i=nn();if(At){if(n===void 0)throw Error(ze(407));n=n()}else{if(n=r(),Qt===null)throw Error(ze(349));Io&30||fm(o,r,n)}i.memoizedState=n;var s={value:n,getSnapshot:r};return i.queue=s,Cu(ym.bind(null,o,s,e),[e]),o.flags|=2048,ys(9,xm.bind(null,o,s,n,r),void 0,null),n},useId:function(){var e=nn(),r=Qt.identifierPrefix;if(At){var n=Sn,o=wn;n=(o&~(1<<32-Xr(o)-1)).toString(32)+n,r=":"+r+"R"+n,n=fs++,0<n&&(r+="H"+n.toString(32)),r+=":"}else n=Zx++,r=":"+r+"r"+n.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},ny={readContext:Nr,useCallback:Tm,useContext:Nr,useEffect:lg,useImperativeHandle:zm,useInsertionEffect:wm,useLayoutEffect:Sm,useMemo:Im,useReducer:Vl,useRef:km,useState:function(){return Vl(xs)},useDebugValue:dg,useDeferredValue:function(e){var r=Or();return Bm(r,Gt.memoizedState,e)},useTransition:function(){var e=Vl(xs)[0],r=Or().memoizedState;return[e,r]},useMutableSource:mm,useSyncExternalStore:hm,useId:Rm,unstable_isNewReconciler:!1},oy={readContext:Nr,useCallback:Tm,useContext:Nr,useEffect:lg,useImperativeHandle:zm,useInsertionEffect:wm,useLayoutEffect:Sm,useMemo:Im,useReducer:Yl,useRef:km,useState:function(){return Yl(xs)},useDebugValue:dg,useDeferredValue:function(e){var r=Or();return Gt===null?r.memoizedState=e:Bm(r,Gt.memoizedState,e)},useTransition:function(){var e=Yl(xs)[0],r=Or().memoizedState;return[e,r]},useMutableSource:mm,useSyncExternalStore:hm,useId:Rm,unstable_isNewReconciler:!1};function Yr(e,r){if(e&&e.defaultProps){r=Mt({},r),e=e.defaultProps;for(var n in e)r[n]===void 0&&(r[n]=e[n]);return r}return r}function qd(e,r,n,o){r=e.memoizedState,n=n(o,r),n=n==null?r:Mt({},r,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var bl={isMounted:function(e){return(e=e._reactInternals)?Ao(e)===e:!1},enqueueSetState:function(e,r,n){e=e._reactInternals;var o=ur(),i=eo(e),s=Cn(o,i);s.payload=r,n!=null&&(s.callback=n),r=Zn(e,s,i),r!==null&&(qr(r,e,i,o),ya(r,e,i))},enqueueReplaceState:function(e,r,n){e=e._reactInternals;var o=ur(),i=eo(e),s=Cn(o,i);s.tag=1,s.payload=r,n!=null&&(s.callback=n),r=Zn(e,s,i),r!==null&&(qr(r,e,i,o),ya(r,e,i))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var n=ur(),o=eo(e),i=Cn(n,o);i.tag=2,r!=null&&(i.callback=r),r=Zn(e,i,o),r!==null&&(qr(r,e,o,n),ya(r,e,o))}};function zu(e,r,n,o,i,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,s,a):r.prototype&&r.prototype.isPureReactComponent?!gs(n,o)||!gs(i,s):!0}function Fm(e,r,n){var o=!1,i=io,s=r.contextType;return typeof s=="object"&&s!==null?s=Nr(s):(i=vr(r)?zo:ar.current,o=r.contextTypes,s=(o=o!=null)?ci(e,i):io),r=new r(n,s),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=bl,e.stateNode=r,r._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),r}function Tu(e,r,n,o){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(n,o),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(n,o),r.state!==e&&bl.enqueueReplaceState(r,r.state,null)}function Zd(e,r,n,o){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},tg(e);var s=r.contextType;typeof s=="object"&&s!==null?i.context=Nr(s):(s=vr(r)?zo:ar.current,i.context=ci(e,s)),i.state=e.memoizedState,s=r.getDerivedStateFromProps,typeof s=="function"&&(qd(e,r,s,n),i.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&bl.enqueueReplaceState(i,i.state,null),Ga(e,n,i,o),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function bi(e,r){try{var n="",o=r;do n+=Af(o),o=o.return;while(o);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:r,stack:i,digest:null}}function Kl(e,r,n){return{value:e,source:null,stack:n??null,digest:r??null}}function Jd(e,r){try{console.error(r.value)}catch(n){setTimeout(function(){throw n})}}var iy=typeof WeakMap=="function"?WeakMap:Map;function Wm(e,r,n){n=Cn(-1,n),n.tag=3,n.payload={element:null};var o=r.value;return n.callback=function(){Qa||(Qa=!0,dc=o),Jd(e,r)},n}function Mm(e,r,n){n=Cn(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var i=r.value;n.payload=function(){return o(i)},n.callback=function(){Jd(e,r)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Jd(e,r),typeof o!="function"&&(Jn===null?Jn=new Set([this]):Jn.add(this));var a=r.stack;this.componentDidCatch(r.value,{componentStack:a!==null?a:""})}),n}function Iu(e,r,n){var o=e.pingCache;if(o===null){o=e.pingCache=new iy;var i=new Set;o.set(r,i)}else i=o.get(r),i===void 0&&(i=new Set,o.set(r,i));i.has(n)||(i.add(n),e=yy.bind(null,e,r,n),r.then(e,e))}function Bu(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function Ru(e,r,n,o,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===r?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(r=Cn(-1,1),r.tag=2,Zn(n,r,1))),n.lanes|=1),e)}var sy=Dn.ReactCurrentOwner,xr=!1;function dr(e,r,n,o){r.child=e===null?gm(r,null,n,o):ui(r,e.child,n,o)}function Du(e,r,n,o,i){n=n.render;var s=r.ref;return ii(r,i),o=sg(e,r,n,o,s,i),n=ag(),e!==null&&!xr?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,Bn(e,r,i)):(At&&n&&Kc(r),r.flags|=1,dr(e,r,o,i),r.child)}function Au(e,r,n,o,i){if(e===null){var s=n.type;return typeof s=="function"&&!fg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(r.tag=15,r.type=s,Lm(e,r,s,o,i)):(e=Ca(n.type,null,o,r,r.mode,i),e.ref=r.ref,e.return=r,r.child=e)}if(s=e.child,!(e.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:gs,n(a,o)&&e.ref===r.ref)return Bn(e,r,i)}return r.flags|=1,e=to(s,o),e.ref=r.ref,e.return=r,r.child=e}function Lm(e,r,n,o,i){if(e!==null){var s=e.memoizedProps;if(gs(s,o)&&e.ref===r.ref)if(xr=!1,r.pendingProps=o=s,(e.lanes&i)!==0)e.flags&131072&&(xr=!0);else return r.lanes=e.lanes,Bn(e,r,i)}return ec(e,r,n,o,i)}function _m(e,r,n){var o=r.pendingProps,i=o.children,s=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},zt(ei,zr),zr|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,zt(ei,zr),zr|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=s!==null?s.baseLanes:n,zt(ei,zr),zr|=o}else s!==null?(o=s.baseLanes|n,r.memoizedState=null):o=n,zt(ei,zr),zr|=o;return dr(e,r,i,n),r.child}function $m(e,r){var n=r.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(r.flags|=512,r.flags|=2097152)}function ec(e,r,n,o,i){var s=vr(n)?zo:ar.current;return s=ci(r,s),ii(r,i),n=sg(e,r,n,o,s,i),o=ag(),e!==null&&!xr?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,Bn(e,r,i)):(At&&o&&Kc(r),r.flags|=1,dr(e,r,n,i),r.child)}function Eu(e,r,n,o,i){if(vr(n)){var s=!0;$a(r)}else s=!1;if(ii(r,i),r.stateNode===null)ka(e,r),Fm(r,n,o),Zd(r,n,o,i),o=!0;else if(e===null){var a=r.stateNode,l=r.memoizedProps;a.props=l;var d=a.context,g=n.contextType;typeof g=="object"&&g!==null?g=Nr(g):(g=vr(n)?zo:ar.current,g=ci(r,g));var m=n.getDerivedStateFromProps,f=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==o||d!==g)&&Tu(r,a,o,g),Nn=!1;var h=r.memoizedState;a.state=h,Ga(r,o,a,i),d=r.memoizedState,l!==o||h!==d||yr.current||Nn?(typeof m=="function"&&(qd(r,n,m,o),d=r.memoizedState),(l=Nn||zu(r,n,l,o,h,d,g))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(r.flags|=4194308)):(typeof a.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=o,r.memoizedState=d),a.props=o,a.state=d,a.context=g,o=l):(typeof a.componentDidMount=="function"&&(r.flags|=4194308),o=!1)}else{a=r.stateNode,pm(e,r),l=r.memoizedProps,g=r.type===r.elementType?l:Yr(r.type,l),a.props=g,f=r.pendingProps,h=a.context,d=n.contextType,typeof d=="object"&&d!==null?d=Nr(d):(d=vr(n)?zo:ar.current,d=ci(r,d));var R=n.getDerivedStateFromProps;(m=typeof R=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||h!==d)&&Tu(r,a,o,d),Nn=!1,h=r.memoizedState,a.state=h,Ga(r,o,a,i);var B=r.memoizedState;l!==f||h!==B||yr.current||Nn?(typeof R=="function"&&(qd(r,n,R,o),B=r.memoizedState),(g=Nn||zu(r,n,g,o,h,B,d)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(o,B,d),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(o,B,d)),typeof a.componentDidUpdate=="function"&&(r.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(r.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(r.flags|=1024),r.memoizedProps=o,r.memoizedState=B),a.props=o,a.state=B,a.context=d,o=g):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(r.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(r.flags|=1024),o=!1)}return tc(e,r,n,o,s,i)}function tc(e,r,n,o,i,s){$m(e,r);var a=(r.flags&128)!==0;if(!o&&!a)return i&&xu(r,n,!1),Bn(e,r,s);o=r.stateNode,sy.current=r;var l=a&&typeof n.getDerivedStateFromError!="function"?null:o.render();return r.flags|=1,e!==null&&a?(r.child=ui(r,e.child,null,s),r.child=ui(r,null,l,s)):dr(e,r,l,s),r.memoizedState=o.state,i&&xu(r,n,!0),r.child}function Pm(e){var r=e.stateNode;r.pendingContext?fu(e,r.pendingContext,r.pendingContext!==r.context):r.context&&fu(e,r.context,!1),rg(e,r.containerInfo)}function Fu(e,r,n,o,i){return gi(),Xc(i),r.flags|=256,dr(e,r,n,o),r.child}var rc={dehydrated:null,treeContext:null,retryLane:0};function nc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Nm(e,r,n){var o=r.pendingProps,i=Ft.current,s=!1,a=(r.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),zt(Ft,i&1),e===null)return Qd(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(r.mode&1?e.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(a=o.children,e=o.fallback,s?(o=r.mode,s=r.child,a={mode:"hidden",children:a},!(o&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=fl(a,o,0,null),e=Co(e,o,n,null),s.return=r,e.return=r,s.sibling=e,r.child=s,r.child.memoizedState=nc(n),r.memoizedState=rc,e):cg(r,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return ay(e,r,a,o,l,i,n);if(s){s=o.fallback,a=r.mode,i=e.child,l=i.sibling;var d={mode:"hidden",children:o.children};return!(a&1)&&r.child!==i?(o=r.child,o.childLanes=0,o.pendingProps=d,r.deletions=null):(o=to(i,d),o.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=to(l,s):(s=Co(s,a,n,null),s.flags|=2),s.return=r,o.return=r,o.sibling=s,r.child=o,o=s,s=r.child,a=e.child.memoizedState,a=a===null?nc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,r.memoizedState=rc,o}return s=e.child,e=s.sibling,o=to(s,{mode:"visible",children:o.children}),!(r.mode&1)&&(o.lanes=n),o.return=r,o.sibling=null,e!==null&&(n=r.deletions,n===null?(r.deletions=[e],r.flags|=16):n.push(e)),r.child=o,r.memoizedState=null,o}function cg(e,r){return r=fl({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function Vs(e,r,n,o){return o!==null&&Xc(o),ui(r,e.child,null,n),e=cg(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function ay(e,r,n,o,i,s,a){if(n)return r.flags&256?(r.flags&=-257,o=Kl(Error(ze(422))),Vs(e,r,a,o)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(s=o.fallback,i=r.mode,o=fl({mode:"visible",children:o.children},i,0,null),s=Co(s,i,a,null),s.flags|=2,o.return=r,s.return=r,o.sibling=s,r.child=o,r.mode&1&&ui(r,e.child,null,a),r.child.memoizedState=nc(a),r.memoizedState=rc,s);if(!(r.mode&1))return Vs(e,r,a,null);if(i.data==="$!"){if(o=i.nextSibling&&i.nextSibling.dataset,o)var l=o.dgst;return o=l,s=Error(ze(419)),o=Kl(s,o,void 0),Vs(e,r,a,o)}if(l=(a&e.childLanes)!==0,xr||l){if(o=Qt,o!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(o.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,In(e,i),qr(o,e,i,-1))}return hg(),o=Kl(Error(ze(421))),Vs(e,r,a,o)}return i.data==="$?"?(r.flags|=128,r.child=e.child,r=vy.bind(null,e),i._reactRetry=r,null):(e=s.treeContext,Tr=qn(i.nextSibling),Ir=r,At=!0,Qr=null,e!==null&&(Lr[_r++]=wn,Lr[_r++]=Sn,Lr[_r++]=To,wn=e.id,Sn=e.overflow,To=r),r=cg(r,o.children),r.flags|=4096,r)}function Wu(e,r,n){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r),Xd(e.return,r,n)}function Ql(e,r,n,o,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:i}:(s.isBackwards=r,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=n,s.tailMode=i)}function Om(e,r,n){var o=r.pendingProps,i=o.revealOrder,s=o.tail;if(dr(e,r,o.children,n),o=Ft.current,o&2)o=o&1|2,r.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wu(e,n,r);else if(e.tag===19)Wu(e,n,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(zt(Ft,o),!(r.mode&1))r.memoizedState=null;else switch(i){case"forwards":for(n=r.child,i=null;n!==null;)e=n.alternate,e!==null&&Ua(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=r.child,r.child=null):(i=n.sibling,n.sibling=null),Ql(r,!1,i,n,s);break;case"backwards":for(n=null,i=r.child,r.child=null;i!==null;){if(e=i.alternate,e!==null&&Ua(e)===null){r.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ql(r,!0,n,null,s);break;case"together":Ql(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ka(e,r){!(r.mode&1)&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function Bn(e,r,n){if(e!==null&&(r.dependencies=e.dependencies),Bo|=r.lanes,!(n&r.childLanes))return null;if(e!==null&&r.child!==e.child)throw Error(ze(153));if(r.child!==null){for(e=r.child,n=to(e,e.pendingProps),r.child=n,n.return=r;e.sibling!==null;)e=e.sibling,n=n.sibling=to(e,e.pendingProps),n.return=r;n.sibling=null}return r.child}function ly(e,r,n){switch(r.tag){case 3:Pm(r),gi();break;case 5:bm(r);break;case 1:vr(r.type)&&$a(r);break;case 4:rg(r,r.stateNode.containerInfo);break;case 10:var o=r.type._context,i=r.memoizedProps.value;zt(Oa,o._currentValue),o._currentValue=i;break;case 13:if(o=r.memoizedState,o!==null)return o.dehydrated!==null?(zt(Ft,Ft.current&1),r.flags|=128,null):n&r.child.childLanes?Nm(e,r,n):(zt(Ft,Ft.current&1),e=Bn(e,r,n),e!==null?e.sibling:null);zt(Ft,Ft.current&1);break;case 19:if(o=(n&r.childLanes)!==0,e.flags&128){if(o)return Om(e,r,n);r.flags|=128}if(i=r.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),zt(Ft,Ft.current),o)break;return null;case 22:case 23:return r.lanes=0,_m(e,r,n)}return Bn(e,r,n)}var Hm,oc,Gm,Um;Hm=function(e,r){for(var n=r.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};oc=function(){};Gm=function(e,r,n,o){var i=e.memoizedProps;if(i!==o){e=r.stateNode,ko(dn.current);var s=null;switch(n){case"input":i=zd(e,i),o=zd(e,o),s=[];break;case"select":i=Mt({},i,{value:void 0}),o=Mt({},o,{value:void 0}),s=[];break;case"textarea":i=Bd(e,i),o=Bd(e,o),s=[];break;default:typeof i.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=La)}Dd(n,o);var a;n=null;for(g in i)if(!o.hasOwnProperty(g)&&i.hasOwnProperty(g)&&i[g]!=null)if(g==="style"){var l=i[g];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(os.hasOwnProperty(g)?s||(s=[]):(s=s||[]).push(g,null));for(g in o){var d=o[g];if(l=i!=null?i[g]:void 0,o.hasOwnProperty(g)&&d!==l&&(d!=null||l!=null))if(g==="style")if(l){for(a in l)!l.hasOwnProperty(a)||d&&d.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in d)d.hasOwnProperty(a)&&l[a]!==d[a]&&(n||(n={}),n[a]=d[a])}else n||(s||(s=[]),s.push(g,n)),n=d;else g==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,l=l?l.__html:void 0,d!=null&&l!==d&&(s=s||[]).push(g,d)):g==="children"?typeof d!="string"&&typeof d!="number"||(s=s||[]).push(g,""+d):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(os.hasOwnProperty(g)?(d!=null&&g==="onScroll"&&Tt("scroll",e),s||l===d||(s=[])):(s=s||[]).push(g,d))}n&&(s=s||[]).push("style",n);var g=s;(r.updateQueue=g)&&(r.flags|=4)}};Um=function(e,r,n,o){n!==o&&(r.flags|=4)};function Ii(e,r){if(!At)switch(e.tailMode){case"hidden":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function nr(e){var r=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(r)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags&14680064,o|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=o,e.childLanes=n,r}function dy(e,r,n){var o=r.pendingProps;switch(Qc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nr(r),null;case 1:return vr(r.type)&&_a(),nr(r),null;case 3:return o=r.stateNode,pi(),It(yr),It(ar),og(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Gs(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Qr!==null&&(uc(Qr),Qr=null))),oc(e,r),nr(r),null;case 5:ng(r);var i=ko(hs.current);if(n=r.type,e!==null&&r.stateNode!=null)Gm(e,r,n,o,i),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!o){if(r.stateNode===null)throw Error(ze(166));return nr(r),null}if(e=ko(dn.current),Gs(r)){o=r.stateNode,n=r.type;var s=r.memoizedProps;switch(o[an]=r,o[bs]=s,e=(r.mode&1)!==0,n){case"dialog":Tt("cancel",o),Tt("close",o);break;case"iframe":case"object":case"embed":Tt("load",o);break;case"video":case"audio":for(i=0;i<Li.length;i++)Tt(Li[i],o);break;case"source":Tt("error",o);break;case"img":case"image":case"link":Tt("error",o),Tt("load",o);break;case"details":Tt("toggle",o);break;case"input":Gg(o,s),Tt("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!s.multiple},Tt("invalid",o);break;case"textarea":Vg(o,s),Tt("invalid",o)}Dd(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?o.textContent!==l&&(s.suppressHydrationWarning!==!0&&Hs(o.textContent,l,e),i=["children",l]):typeof l=="number"&&o.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Hs(o.textContent,l,e),i=["children",""+l]):os.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Tt("scroll",o)}switch(n){case"input":Ws(o),Ug(o,s,!0);break;case"textarea":Ws(o),Yg(o);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(o.onclick=La)}o=i,r.updateQueue=o,o!==null&&(r.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=yb(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=a.createElement(n,{is:o.is}):(e=a.createElement(n),n==="select"&&(a=e,o.multiple?a.multiple=!0:o.size&&(a.size=o.size))):e=a.createElementNS(e,n),e[an]=r,e[bs]=o,Hm(e,r,!1,!1),r.stateNode=e;e:{switch(a=Ad(n,o),n){case"dialog":Tt("cancel",e),Tt("close",e),i=o;break;case"iframe":case"object":case"embed":Tt("load",e),i=o;break;case"video":case"audio":for(i=0;i<Li.length;i++)Tt(Li[i],e);i=o;break;case"source":Tt("error",e),i=o;break;case"img":case"image":case"link":Tt("error",e),Tt("load",e),i=o;break;case"details":Tt("toggle",e),i=o;break;case"input":Gg(e,o),i=zd(e,o),Tt("invalid",e);break;case"option":i=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},i=Mt({},o,{value:void 0}),Tt("invalid",e);break;case"textarea":Vg(e,o),i=Bd(e,o),Tt("invalid",e);break;default:i=o}Dd(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var d=l[s];s==="style"?kb(e,d):s==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&vb(e,d)):s==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&is(e,d):typeof d=="number"&&is(e,""+d):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(os.hasOwnProperty(s)?d!=null&&s==="onScroll"&&Tt("scroll",e):d!=null&&Fc(e,s,d,a))}switch(n){case"input":Ws(e),Ug(e,o,!1);break;case"textarea":Ws(e),Yg(e);break;case"option":o.value!=null&&e.setAttribute("value",""+oo(o.value));break;case"select":e.multiple=!!o.multiple,s=o.value,s!=null?ti(e,!!o.multiple,s,!1):o.defaultValue!=null&&ti(e,!!o.multiple,o.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=La)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return nr(r),null;case 6:if(e&&r.stateNode!=null)Um(e,r,e.memoizedProps,o);else{if(typeof o!="string"&&r.stateNode===null)throw Error(ze(166));if(n=ko(hs.current),ko(dn.current),Gs(r)){if(o=r.stateNode,n=r.memoizedProps,o[an]=r,(s=o.nodeValue!==n)&&(e=Ir,e!==null))switch(e.tag){case 3:Hs(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Hs(o.nodeValue,n,(e.mode&1)!==0)}s&&(r.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[an]=r,r.stateNode=o}return nr(r),null;case 13:if(It(Ft),o=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(At&&Tr!==null&&r.mode&1&&!(r.flags&128))dm(),gi(),r.flags|=98560,s=!1;else if(s=Gs(r),o!==null&&o.dehydrated!==null){if(e===null){if(!s)throw Error(ze(318));if(s=r.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ze(317));s[an]=r}else gi(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;nr(r),s=!1}else Qr!==null&&(uc(Qr),Qr=null),s=!0;if(!s)return r.flags&65536?r:null}return r.flags&128?(r.lanes=n,r):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(r.child.flags|=8192,r.mode&1&&(e===null||Ft.current&1?Ut===0&&(Ut=3):hg())),r.updateQueue!==null&&(r.flags|=4),nr(r),null);case 4:return pi(),oc(e,r),e===null&&us(r.stateNode.containerInfo),nr(r),null;case 10:return Jc(r.type._context),nr(r),null;case 17:return vr(r.type)&&_a(),nr(r),null;case 19:if(It(Ft),s=r.memoizedState,s===null)return nr(r),null;if(o=(r.flags&128)!==0,a=s.rendering,a===null)if(o)Ii(s,!1);else{if(Ut!==0||e!==null&&e.flags&128)for(e=r.child;e!==null;){if(a=Ua(e),a!==null){for(r.flags|=128,Ii(s,!1),o=a.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),r.subtreeFlags=0,o=n,n=r.child;n!==null;)s=n,e=o,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return zt(Ft,Ft.current&1|2),r.child}e=e.sibling}s.tail!==null&&_t()>mi&&(r.flags|=128,o=!0,Ii(s,!1),r.lanes=4194304)}else{if(!o)if(e=Ua(a),e!==null){if(r.flags|=128,o=!0,n=e.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),Ii(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!At)return nr(r),null}else 2*_t()-s.renderingStartTime>mi&&n!==1073741824&&(r.flags|=128,o=!0,Ii(s,!1),r.lanes=4194304);s.isBackwards?(a.sibling=r.child,r.child=a):(n=s.last,n!==null?n.sibling=a:r.child=a,s.last=a)}return s.tail!==null?(r=s.tail,s.rendering=r,s.tail=r.sibling,s.renderingStartTime=_t(),r.sibling=null,n=Ft.current,zt(Ft,o?n&1|2:n&1),r):(nr(r),null);case 22:case 23:return mg(),o=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(r.flags|=8192),o&&r.mode&1?zr&1073741824&&(nr(r),r.subtreeFlags&6&&(r.flags|=8192)):nr(r),null;case 24:return null;case 25:return null}throw Error(ze(156,r.tag))}function cy(e,r){switch(Qc(r),r.tag){case 1:return vr(r.type)&&_a(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return pi(),It(yr),It(ar),og(),e=r.flags,e&65536&&!(e&128)?(r.flags=e&-65537|128,r):null;case 5:return ng(r),null;case 13:if(It(Ft),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(ze(340));gi()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return It(Ft),null;case 4:return pi(),null;case 10:return Jc(r.type._context),null;case 22:case 23:return mg(),null;case 24:return null;default:return null}}var Ys=!1,ir=!1,gy=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function Jo(e,r){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){Lt(e,r,o)}else n.current=null}function ic(e,r,n){try{n()}catch(o){Lt(e,r,o)}}var Mu=!1;function uy(e,r){if(Od=Fa,e=Xb(),Yc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var i=o.anchorOffset,s=o.focusNode;o=o.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,d=-1,g=0,m=0,f=e,h=null;t:for(;;){for(var R;f!==n||i!==0&&f.nodeType!==3||(l=a+i),f!==s||o!==0&&f.nodeType!==3||(d=a+o),f.nodeType===3&&(a+=f.nodeValue.length),(R=f.firstChild)!==null;)h=f,f=R;for(;;){if(f===e)break t;if(h===n&&++g===i&&(l=a),h===s&&++m===o&&(d=a),(R=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=R}n=l===-1||d===-1?null:{start:l,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hd={focusedElem:e,selectionRange:n},Fa=!1,Pe=r;Pe!==null;)if(r=Pe,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,Pe=e;else for(;Pe!==null;){r=Pe;try{var B=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(B!==null){var T=B.memoizedProps,z=B.memoizedState,b=r.stateNode,p=b.getSnapshotBeforeUpdate(r.elementType===r.type?T:Yr(r.type,T),z);b.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var u=r.stateNode.containerInfo;u.nodeType===1?u.textContent="":u.nodeType===9&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ze(163))}}catch(j){Lt(r,r.return,j)}if(e=r.sibling,e!==null){e.return=r.return,Pe=e;break}Pe=r.return}return B=Mu,Mu=!1,B}function Qi(e,r,n){var o=r.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var i=o=o.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&ic(r,n,s)}i=i.next}while(i!==o)}}function ml(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==r)}}function sc(e){var r=e.ref;if(r!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof r=="function"?r(e):r.current=e}}function Vm(e){var r=e.alternate;r!==null&&(e.alternate=null,Vm(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[an],delete r[bs],delete r[Vd],delete r[Kx],delete r[Qx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ym(e){return e.tag===5||e.tag===3||e.tag===4}function Lu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ym(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ac(e,r,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?n.nodeType===8?n.parentNode.insertBefore(e,r):n.insertBefore(e,r):(n.nodeType===8?(r=n.parentNode,r.insertBefore(e,n)):(r=n,r.appendChild(e)),n=n._reactRootContainer,n!=null||r.onclick!==null||(r.onclick=La));else if(o!==4&&(e=e.child,e!==null))for(ac(e,r,n),e=e.sibling;e!==null;)ac(e,r,n),e=e.sibling}function lc(e,r,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?n.insertBefore(e,r):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(lc(e,r,n),e=e.sibling;e!==null;)lc(e,r,n),e=e.sibling}var Zt=null,Kr=!1;function Wn(e,r,n){for(n=n.child;n!==null;)Km(e,r,n),n=n.sibling}function Km(e,r,n){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(al,n)}catch{}switch(n.tag){case 5:ir||Jo(n,r);case 6:var o=Zt,i=Kr;Zt=null,Wn(e,r,n),Zt=o,Kr=i,Zt!==null&&(Kr?(e=Zt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Zt.removeChild(n.stateNode));break;case 18:Zt!==null&&(Kr?(e=Zt,n=n.stateNode,e.nodeType===8?Ol(e.parentNode,n):e.nodeType===1&&Ol(e,n),ds(e)):Ol(Zt,n.stateNode));break;case 4:o=Zt,i=Kr,Zt=n.stateNode.containerInfo,Kr=!0,Wn(e,r,n),Zt=o,Kr=i;break;case 0:case 11:case 14:case 15:if(!ir&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){i=o=o.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&ic(n,r,a),i=i.next}while(i!==o)}Wn(e,r,n);break;case 1:if(!ir&&(Jo(n,r),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(l){Lt(n,r,l)}Wn(e,r,n);break;case 21:Wn(e,r,n);break;case 22:n.mode&1?(ir=(o=ir)||n.memoizedState!==null,Wn(e,r,n),ir=o):Wn(e,r,n);break;default:Wn(e,r,n)}}function _u(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gy),r.forEach(function(o){var i=jy.bind(null,e,o);n.has(o)||(n.add(o),o.then(i,i))})}}function Hr(e,r){var n=r.deletions;if(n!==null)for(var o=0;o<n.length;o++){var i=n[o];try{var s=e,a=r,l=a;e:for(;l!==null;){switch(l.tag){case 5:Zt=l.stateNode,Kr=!1;break e;case 3:Zt=l.stateNode.containerInfo,Kr=!0;break e;case 4:Zt=l.stateNode.containerInfo,Kr=!0;break e}l=l.return}if(Zt===null)throw Error(ze(160));Km(s,a,i),Zt=null,Kr=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(g){Lt(i,r,g)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Qm(r,e),r=r.sibling}function Qm(e,r){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Hr(r,e),tn(e),o&4){try{Qi(3,e,e.return),ml(3,e)}catch(T){Lt(e,e.return,T)}try{Qi(5,e,e.return)}catch(T){Lt(e,e.return,T)}}break;case 1:Hr(r,e),tn(e),o&512&&n!==null&&Jo(n,n.return);break;case 5:if(Hr(r,e),tn(e),o&512&&n!==null&&Jo(n,n.return),e.flags&32){var i=e.stateNode;try{is(i,"")}catch(T){Lt(e,e.return,T)}}if(o&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,l=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&fb(i,s),Ad(l,a);var g=Ad(l,s);for(a=0;a<d.length;a+=2){var m=d[a],f=d[a+1];m==="style"?kb(i,f):m==="dangerouslySetInnerHTML"?vb(i,f):m==="children"?is(i,f):Fc(i,m,f,g)}switch(l){case"input":Td(i,s);break;case"textarea":xb(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var R=s.value;R!=null?ti(i,!!s.multiple,R,!1):h!==!!s.multiple&&(s.defaultValue!=null?ti(i,!!s.multiple,s.defaultValue,!0):ti(i,!!s.multiple,s.multiple?[]:"",!1))}i[bs]=s}catch(T){Lt(e,e.return,T)}}break;case 6:if(Hr(r,e),tn(e),o&4){if(e.stateNode===null)throw Error(ze(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(T){Lt(e,e.return,T)}}break;case 3:if(Hr(r,e),tn(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{ds(r.containerInfo)}catch(T){Lt(e,e.return,T)}break;case 4:Hr(r,e),tn(e);break;case 13:Hr(r,e),tn(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(pg=_t())),o&4&&_u(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(ir=(g=ir)||m,Hr(r,e),ir=g):Hr(r,e),tn(e),o&8192){if(g=e.memoizedState!==null,(e.stateNode.isHidden=g)&&!m&&e.mode&1)for(Pe=e,m=e.child;m!==null;){for(f=Pe=m;Pe!==null;){switch(h=Pe,R=h.child,h.tag){case 0:case 11:case 14:case 15:Qi(4,h,h.return);break;case 1:Jo(h,h.return);var B=h.stateNode;if(typeof B.componentWillUnmount=="function"){o=h,n=h.return;try{r=o,B.props=r.memoizedProps,B.state=r.memoizedState,B.componentWillUnmount()}catch(T){Lt(o,n,T)}}break;case 5:Jo(h,h.return);break;case 22:if(h.memoizedState!==null){Pu(f);continue}}R!==null?(R.return=h,Pe=R):Pu(f)}m=m.sibling}e:for(m=null,f=e;;){if(f.tag===5){if(m===null){m=f;try{i=f.stateNode,g?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,d=f.memoizedProps.style,a=d!=null&&d.hasOwnProperty("display")?d.display:null,l.style.display=jb("display",a))}catch(T){Lt(e,e.return,T)}}}else if(f.tag===6){if(m===null)try{f.stateNode.nodeValue=g?"":f.memoizedProps}catch(T){Lt(e,e.return,T)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;m===f&&(m=null),f=f.return}m===f&&(m=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Hr(r,e),tn(e),o&4&&_u(e);break;case 21:break;default:Hr(r,e),tn(e)}}function tn(e){var r=e.flags;if(r&2){try{e:{for(var n=e.return;n!==null;){if(Ym(n)){var o=n;break e}n=n.return}throw Error(ze(160))}switch(o.tag){case 5:var i=o.stateNode;o.flags&32&&(is(i,""),o.flags&=-33);var s=Lu(e);lc(e,s,i);break;case 3:case 4:var a=o.stateNode.containerInfo,l=Lu(e);ac(e,l,a);break;default:throw Error(ze(161))}}catch(d){Lt(e,e.return,d)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function py(e,r,n){Pe=e,Xm(e)}function Xm(e,r,n){for(var o=(e.mode&1)!==0;Pe!==null;){var i=Pe,s=i.child;if(i.tag===22&&o){var a=i.memoizedState!==null||Ys;if(!a){var l=i.alternate,d=l!==null&&l.memoizedState!==null||ir;l=Ys;var g=ir;if(Ys=a,(ir=d)&&!g)for(Pe=i;Pe!==null;)a=Pe,d=a.child,a.tag===22&&a.memoizedState!==null?Nu(i):d!==null?(d.return=a,Pe=d):Nu(i);for(;s!==null;)Pe=s,Xm(s),s=s.sibling;Pe=i,Ys=l,ir=g}$u(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Pe=s):$u(e)}}function $u(e){for(;Pe!==null;){var r=Pe;if(r.flags&8772){var n=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:ir||ml(5,r);break;case 1:var o=r.stateNode;if(r.flags&4&&!ir)if(n===null)o.componentDidMount();else{var i=r.elementType===r.type?n.memoizedProps:Yr(r.type,n.memoizedProps);o.componentDidUpdate(i,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var s=r.updateQueue;s!==null&&wu(r,s,o);break;case 3:var a=r.updateQueue;if(a!==null){if(n=null,r.child!==null)switch(r.child.tag){case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}wu(r,a,n)}break;case 5:var l=r.stateNode;if(n===null&&r.flags&4){n=l;var d=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var g=r.alternate;if(g!==null){var m=g.memoizedState;if(m!==null){var f=m.dehydrated;f!==null&&ds(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ze(163))}ir||r.flags&512&&sc(r)}catch(h){Lt(r,r.return,h)}}if(r===e){Pe=null;break}if(n=r.sibling,n!==null){n.return=r.return,Pe=n;break}Pe=r.return}}function Pu(e){for(;Pe!==null;){var r=Pe;if(r===e){Pe=null;break}var n=r.sibling;if(n!==null){n.return=r.return,Pe=n;break}Pe=r.return}}function Nu(e){for(;Pe!==null;){var r=Pe;try{switch(r.tag){case 0:case 11:case 15:var n=r.return;try{ml(4,r)}catch(d){Lt(r,n,d)}break;case 1:var o=r.stateNode;if(typeof o.componentDidMount=="function"){var i=r.return;try{o.componentDidMount()}catch(d){Lt(r,i,d)}}var s=r.return;try{sc(r)}catch(d){Lt(r,s,d)}break;case 5:var a=r.return;try{sc(r)}catch(d){Lt(r,a,d)}}}catch(d){Lt(r,r.return,d)}if(r===e){Pe=null;break}var l=r.sibling;if(l!==null){l.return=r.return,Pe=l;break}Pe=r.return}}var by=Math.ceil,Ka=Dn.ReactCurrentDispatcher,gg=Dn.ReactCurrentOwner,Pr=Dn.ReactCurrentBatchConfig,ht=0,Qt=null,Pt=null,Jt=0,zr=0,ei=lo(0),Ut=0,vs=null,Bo=0,hl=0,ug=0,Xi=null,fr=null,pg=0,mi=1/0,xn=null,Qa=!1,dc=null,Jn=null,Ks=!1,Yn=null,Xa=0,qi=0,cc=null,wa=-1,Sa=0;function ur(){return ht&6?_t():wa!==-1?wa:wa=_t()}function eo(e){return e.mode&1?ht&2&&Jt!==0?Jt&-Jt:qx.transition!==null?(Sa===0&&(Sa=Fb()),Sa):(e=St,e!==0||(e=window.event,e=e===void 0?16:Nb(e.type)),e):1}function qr(e,r,n,o){if(50<qi)throw qi=0,cc=null,Error(ze(185));Ts(e,n,o),(!(ht&2)||e!==Qt)&&(e===Qt&&(!(ht&2)&&(hl|=n),Ut===4&&Gn(e,Jt)),jr(e,o),n===1&&ht===0&&!(r.mode&1)&&(mi=_t()+500,ul&&co()))}function jr(e,r){var n=e.callbackNode;qf(e,r);var o=Ea(e,e===Qt?Jt:0);if(o===0)n!==null&&Xg(n),e.callbackNode=null,e.callbackPriority=0;else if(r=o&-o,e.callbackPriority!==r){if(n!=null&&Xg(n),r===1)e.tag===0?Xx(Ou.bind(null,e)):sm(Ou.bind(null,e)),Vx(function(){!(ht&6)&&co()}),n=null;else{switch(Wb(o)){case 1:n=$c;break;case 4:n=Ab;break;case 16:n=Aa;break;case 536870912:n=Eb;break;default:n=Aa}n=oh(n,qm.bind(null,e))}e.callbackPriority=r,e.callbackNode=n}}function qm(e,r){if(wa=-1,Sa=0,ht&6)throw Error(ze(327));var n=e.callbackNode;if(si()&&e.callbackNode!==n)return null;var o=Ea(e,e===Qt?Jt:0);if(o===0)return null;if(o&30||o&e.expiredLanes||r)r=qa(e,o);else{r=o;var i=ht;ht|=2;var s=Jm();(Qt!==e||Jt!==r)&&(xn=null,mi=_t()+500,So(e,r));do try{fy();break}catch(l){Zm(e,l)}while(!0);Zc(),Ka.current=s,ht=i,Pt!==null?r=0:(Qt=null,Jt=0,r=Ut)}if(r!==0){if(r===2&&(i=Ld(e),i!==0&&(o=i,r=gc(e,i))),r===1)throw n=vs,So(e,0),Gn(e,o),jr(e,_t()),n;if(r===6)Gn(e,o);else{if(i=e.current.alternate,!(o&30)&&!my(i)&&(r=qa(e,o),r===2&&(s=Ld(e),s!==0&&(o=s,r=gc(e,s))),r===1))throw n=vs,So(e,0),Gn(e,o),jr(e,_t()),n;switch(e.finishedWork=i,e.finishedLanes=o,r){case 0:case 1:throw Error(ze(345));case 2:fo(e,fr,xn);break;case 3:if(Gn(e,o),(o&130023424)===o&&(r=pg+500-_t(),10<r)){if(Ea(e,0)!==0)break;if(i=e.suspendedLanes,(i&o)!==o){ur(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ud(fo.bind(null,e,fr,xn),r);break}fo(e,fr,xn);break;case 4:if(Gn(e,o),(o&4194240)===o)break;for(r=e.eventTimes,i=-1;0<o;){var a=31-Xr(o);s=1<<a,a=r[a],a>i&&(i=a),o&=~s}if(o=i,o=_t()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*by(o/1960))-o,10<o){e.timeoutHandle=Ud(fo.bind(null,e,fr,xn),o);break}fo(e,fr,xn);break;case 5:fo(e,fr,xn);break;default:throw Error(ze(329))}}}return jr(e,_t()),e.callbackNode===n?qm.bind(null,e):null}function gc(e,r){var n=Xi;return e.current.memoizedState.isDehydrated&&(So(e,r).flags|=256),e=qa(e,r),e!==2&&(r=fr,fr=n,r!==null&&uc(r)),e}function uc(e){fr===null?fr=e:fr.push.apply(fr,e)}function my(e){for(var r=e;;){if(r.flags&16384){var n=r.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var i=n[o],s=i.getSnapshot;i=i.value;try{if(!Zr(s(),i))return!1}catch{return!1}}}if(n=r.child,r.subtreeFlags&16384&&n!==null)n.return=r,r=n;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Gn(e,r){for(r&=~ug,r&=~hl,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var n=31-Xr(r),o=1<<n;e[n]=-1,r&=~o}}function Ou(e){if(ht&6)throw Error(ze(327));si();var r=Ea(e,0);if(!(r&1))return jr(e,_t()),null;var n=qa(e,r);if(e.tag!==0&&n===2){var o=Ld(e);o!==0&&(r=o,n=gc(e,o))}if(n===1)throw n=vs,So(e,0),Gn(e,r),jr(e,_t()),n;if(n===6)throw Error(ze(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,fo(e,fr,xn),jr(e,_t()),null}function bg(e,r){var n=ht;ht|=1;try{return e(r)}finally{ht=n,ht===0&&(mi=_t()+500,ul&&co())}}function Ro(e){Yn!==null&&Yn.tag===0&&!(ht&6)&&si();var r=ht;ht|=1;var n=Pr.transition,o=St;try{if(Pr.transition=null,St=1,e)return e()}finally{St=o,Pr.transition=n,ht=r,!(ht&6)&&co()}}function mg(){zr=ei.current,It(ei)}function So(e,r){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ux(n)),Pt!==null)for(n=Pt.return;n!==null;){var o=n;switch(Qc(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&_a();break;case 3:pi(),It(yr),It(ar),og();break;case 5:ng(o);break;case 4:pi();break;case 13:It(Ft);break;case 19:It(Ft);break;case 10:Jc(o.type._context);break;case 22:case 23:mg()}n=n.return}if(Qt=e,Pt=e=to(e.current,null),Jt=zr=r,Ut=0,vs=null,ug=hl=Bo=0,fr=Xi=null,jo!==null){for(r=0;r<jo.length;r++)if(n=jo[r],o=n.interleaved,o!==null){n.interleaved=null;var i=o.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,o.next=a}n.pending=o}jo=null}return e}function Zm(e,r){do{var n=Pt;try{if(Zc(),va.current=Ya,Va){for(var o=Wt.memoizedState;o!==null;){var i=o.queue;i!==null&&(i.pending=null),o=o.next}Va=!1}if(Io=0,Kt=Gt=Wt=null,Ki=!1,fs=0,gg.current=null,n===null||n.return===null){Ut=1,vs=r,Pt=null;break}e:{var s=e,a=n.return,l=n,d=r;if(r=Jt,l.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var g=d,m=l,f=m.tag;if(!(m.mode&1)&&(f===0||f===11||f===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var R=Bu(a);if(R!==null){R.flags&=-257,Ru(R,a,l,s,r),R.mode&1&&Iu(s,g,r),r=R,d=g;var B=r.updateQueue;if(B===null){var T=new Set;T.add(d),r.updateQueue=T}else B.add(d);break e}else{if(!(r&1)){Iu(s,g,r),hg();break e}d=Error(ze(426))}}else if(At&&l.mode&1){var z=Bu(a);if(z!==null){!(z.flags&65536)&&(z.flags|=256),Ru(z,a,l,s,r),Xc(bi(d,l));break e}}s=d=bi(d,l),Ut!==4&&(Ut=2),Xi===null?Xi=[s]:Xi.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,r&=-r,s.lanes|=r;var b=Wm(s,d,r);ku(s,b);break e;case 1:l=d;var p=s.type,u=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Jn===null||!Jn.has(u)))){s.flags|=65536,r&=-r,s.lanes|=r;var j=Mm(s,l,r);ku(s,j);break e}}s=s.return}while(s!==null)}th(n)}catch(k){r=k,Pt===n&&n!==null&&(Pt=n=n.return);continue}break}while(!0)}function Jm(){var e=Ka.current;return Ka.current=Ya,e===null?Ya:e}function hg(){(Ut===0||Ut===3||Ut===2)&&(Ut=4),Qt===null||!(Bo&268435455)&&!(hl&268435455)||Gn(Qt,Jt)}function qa(e,r){var n=ht;ht|=2;var o=Jm();(Qt!==e||Jt!==r)&&(xn=null,So(e,r));do try{hy();break}catch(i){Zm(e,i)}while(!0);if(Zc(),ht=n,Ka.current=o,Pt!==null)throw Error(ze(261));return Qt=null,Jt=0,Ut}function hy(){for(;Pt!==null;)eh(Pt)}function fy(){for(;Pt!==null&&!Of();)eh(Pt)}function eh(e){var r=nh(e.alternate,e,zr);e.memoizedProps=e.pendingProps,r===null?th(e):Pt=r,gg.current=null}function th(e){var r=e;do{var n=r.alternate;if(e=r.return,r.flags&32768){if(n=cy(n,r),n!==null){n.flags&=32767,Pt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ut=6,Pt=null;return}}else if(n=dy(n,r,zr),n!==null){Pt=n;return}if(r=r.sibling,r!==null){Pt=r;return}Pt=r=e}while(r!==null);Ut===0&&(Ut=5)}function fo(e,r,n){var o=St,i=Pr.transition;try{Pr.transition=null,St=1,xy(e,r,n,o)}finally{Pr.transition=i,St=o}return null}function xy(e,r,n,o){do si();while(Yn!==null);if(ht&6)throw Error(ze(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(ze(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Zf(e,s),e===Qt&&(Pt=Qt=null,Jt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ks||(Ks=!0,oh(Aa,function(){return si(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Pr.transition,Pr.transition=null;var a=St;St=1;var l=ht;ht|=4,gg.current=null,uy(e,n),Qm(n,e),_x(Hd),Fa=!!Od,Hd=Od=null,e.current=n,py(n),Hf(),ht=l,St=a,Pr.transition=s}else e.current=n;if(Ks&&(Ks=!1,Yn=e,Xa=i),s=e.pendingLanes,s===0&&(Jn=null),Vf(n.stateNode),jr(e,_t()),r!==null)for(o=e.onRecoverableError,n=0;n<r.length;n++)i=r[n],o(i.value,{componentStack:i.stack,digest:i.digest});if(Qa)throw Qa=!1,e=dc,dc=null,e;return Xa&1&&e.tag!==0&&si(),s=e.pendingLanes,s&1?e===cc?qi++:(qi=0,cc=e):qi=0,co(),null}function si(){if(Yn!==null){var e=Wb(Xa),r=Pr.transition,n=St;try{if(Pr.transition=null,St=16>e?16:e,Yn===null)var o=!1;else{if(e=Yn,Yn=null,Xa=0,ht&6)throw Error(ze(331));var i=ht;for(ht|=4,Pe=e.current;Pe!==null;){var s=Pe,a=s.child;if(Pe.flags&16){var l=s.deletions;if(l!==null){for(var d=0;d<l.length;d++){var g=l[d];for(Pe=g;Pe!==null;){var m=Pe;switch(m.tag){case 0:case 11:case 15:Qi(8,m,s)}var f=m.child;if(f!==null)f.return=m,Pe=f;else for(;Pe!==null;){m=Pe;var h=m.sibling,R=m.return;if(Vm(m),m===g){Pe=null;break}if(h!==null){h.return=R,Pe=h;break}Pe=R}}}var B=s.alternate;if(B!==null){var T=B.child;if(T!==null){B.child=null;do{var z=T.sibling;T.sibling=null,T=z}while(T!==null)}}Pe=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Pe=a;else e:for(;Pe!==null;){if(s=Pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Qi(9,s,s.return)}var b=s.sibling;if(b!==null){b.return=s.return,Pe=b;break e}Pe=s.return}}var p=e.current;for(Pe=p;Pe!==null;){a=Pe;var u=a.child;if(a.subtreeFlags&2064&&u!==null)u.return=a,Pe=u;else e:for(a=p;Pe!==null;){if(l=Pe,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ml(9,l)}}catch(k){Lt(l,l.return,k)}if(l===a){Pe=null;break e}var j=l.sibling;if(j!==null){j.return=l.return,Pe=j;break e}Pe=l.return}}if(ht=i,co(),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(al,e)}catch{}o=!0}return o}finally{St=n,Pr.transition=r}}return!1}function Hu(e,r,n){r=bi(n,r),r=Wm(e,r,1),e=Zn(e,r,1),r=ur(),e!==null&&(Ts(e,1,r),jr(e,r))}function Lt(e,r,n){if(e.tag===3)Hu(e,e,n);else for(;r!==null;){if(r.tag===3){Hu(r,e,n);break}else if(r.tag===1){var o=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Jn===null||!Jn.has(o))){e=bi(n,e),e=Mm(r,e,1),r=Zn(r,e,1),e=ur(),r!==null&&(Ts(r,1,e),jr(r,e));break}}r=r.return}}function yy(e,r,n){var o=e.pingCache;o!==null&&o.delete(r),r=ur(),e.pingedLanes|=e.suspendedLanes&n,Qt===e&&(Jt&n)===n&&(Ut===4||Ut===3&&(Jt&130023424)===Jt&&500>_t()-pg?So(e,0):ug|=n),jr(e,r)}function rh(e,r){r===0&&(e.mode&1?(r=_s,_s<<=1,!(_s&130023424)&&(_s=4194304)):r=1);var n=ur();e=In(e,r),e!==null&&(Ts(e,r,n),jr(e,n))}function vy(e){var r=e.memoizedState,n=0;r!==null&&(n=r.retryLane),rh(e,n)}function jy(e,r){var n=0;switch(e.tag){case 13:var o=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(ze(314))}o!==null&&o.delete(r),rh(e,n)}var nh;nh=function(e,r,n){if(e!==null)if(e.memoizedProps!==r.pendingProps||yr.current)xr=!0;else{if(!(e.lanes&n)&&!(r.flags&128))return xr=!1,ly(e,r,n);xr=!!(e.flags&131072)}else xr=!1,At&&r.flags&1048576&&am(r,Na,r.index);switch(r.lanes=0,r.tag){case 2:var o=r.type;ka(e,r),e=r.pendingProps;var i=ci(r,ar.current);ii(r,n),i=sg(null,r,o,e,i,n);var s=ag();return r.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,vr(o)?(s=!0,$a(r)):s=!1,r.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,tg(r),i.updater=bl,r.stateNode=i,i._reactInternals=r,Zd(r,o,e,n),r=tc(null,r,o,!0,s,n)):(r.tag=0,At&&s&&Kc(r),dr(null,r,i,n),r=r.child),r;case 16:o=r.elementType;e:{switch(ka(e,r),e=r.pendingProps,i=o._init,o=i(o._payload),r.type=o,i=r.tag=wy(o),e=Yr(o,e),i){case 0:r=ec(null,r,o,e,n);break e;case 1:r=Eu(null,r,o,e,n);break e;case 11:r=Du(null,r,o,e,n);break e;case 14:r=Au(null,r,o,Yr(o.type,e),n);break e}throw Error(ze(306,o,""))}return r;case 0:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Yr(o,i),ec(e,r,o,i,n);case 1:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Yr(o,i),Eu(e,r,o,i,n);case 3:e:{if(Pm(r),e===null)throw Error(ze(387));o=r.pendingProps,s=r.memoizedState,i=s.element,pm(e,r),Ga(r,o,null,n);var a=r.memoizedState;if(o=a.element,s.isDehydrated)if(s={element:o,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},r.updateQueue.baseState=s,r.memoizedState=s,r.flags&256){i=bi(Error(ze(423)),r),r=Fu(e,r,o,n,i);break e}else if(o!==i){i=bi(Error(ze(424)),r),r=Fu(e,r,o,n,i);break e}else for(Tr=qn(r.stateNode.containerInfo.firstChild),Ir=r,At=!0,Qr=null,n=gm(r,null,o,n),r.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gi(),o===i){r=Bn(e,r,n);break e}dr(e,r,o,n)}r=r.child}return r;case 5:return bm(r),e===null&&Qd(r),o=r.type,i=r.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,Gd(o,i)?a=null:s!==null&&Gd(o,s)&&(r.flags|=32),$m(e,r),dr(e,r,a,n),r.child;case 6:return e===null&&Qd(r),null;case 13:return Nm(e,r,n);case 4:return rg(r,r.stateNode.containerInfo),o=r.pendingProps,e===null?r.child=ui(r,null,o,n):dr(e,r,o,n),r.child;case 11:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Yr(o,i),Du(e,r,o,i,n);case 7:return dr(e,r,r.pendingProps,n),r.child;case 8:return dr(e,r,r.pendingProps.children,n),r.child;case 12:return dr(e,r,r.pendingProps.children,n),r.child;case 10:e:{if(o=r.type._context,i=r.pendingProps,s=r.memoizedProps,a=i.value,zt(Oa,o._currentValue),o._currentValue=a,s!==null)if(Zr(s.value,a)){if(s.children===i.children&&!yr.current){r=Bn(e,r,n);break e}}else for(s=r.child,s!==null&&(s.return=r);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var d=l.firstContext;d!==null;){if(d.context===o){if(s.tag===1){d=Cn(-1,n&-n),d.tag=2;var g=s.updateQueue;if(g!==null){g=g.shared;var m=g.pending;m===null?d.next=d:(d.next=m.next,m.next=d),g.pending=d}}s.lanes|=n,d=s.alternate,d!==null&&(d.lanes|=n),Xd(s.return,n,r),l.lanes|=n;break}d=d.next}}else if(s.tag===10)a=s.type===r.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ze(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Xd(a,n,r),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===r){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}dr(e,r,i.children,n),r=r.child}return r;case 9:return i=r.type,o=r.pendingProps.children,ii(r,n),i=Nr(i),o=o(i),r.flags|=1,dr(e,r,o,n),r.child;case 14:return o=r.type,i=Yr(o,r.pendingProps),i=Yr(o.type,i),Au(e,r,o,i,n);case 15:return Lm(e,r,r.type,r.pendingProps,n);case 17:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Yr(o,i),ka(e,r),r.tag=1,vr(o)?(e=!0,$a(r)):e=!1,ii(r,n),Fm(r,o,i),Zd(r,o,i,n),tc(null,r,o,!0,e,n);case 19:return Om(e,r,n);case 22:return _m(e,r,n)}throw Error(ze(156,r.tag))};function oh(e,r){return Db(e,r)}function ky(e,r,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $r(e,r,n,o){return new ky(e,r,n,o)}function fg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wy(e){if(typeof e=="function")return fg(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Mc)return 11;if(e===Lc)return 14}return 2}function to(e,r){var n=e.alternate;return n===null?(n=$r(e.tag,r,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=r,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,r=e.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ca(e,r,n,o,i,s){var a=2;if(o=e,typeof e=="function")fg(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Go:return Co(n.children,i,s,r);case Wc:a=8,i|=8;break;case kd:return e=$r(12,n,r,i|2),e.elementType=kd,e.lanes=s,e;case wd:return e=$r(13,n,r,i),e.elementType=wd,e.lanes=s,e;case Sd:return e=$r(19,n,r,i),e.elementType=Sd,e.lanes=s,e;case bb:return fl(n,i,s,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ub:a=10;break e;case pb:a=9;break e;case Mc:a=11;break e;case Lc:a=14;break e;case Pn:a=16,o=null;break e}throw Error(ze(130,e==null?e:typeof e,""))}return r=$r(a,n,r,i),r.elementType=e,r.type=o,r.lanes=s,r}function Co(e,r,n,o){return e=$r(7,e,o,r),e.lanes=n,e}function fl(e,r,n,o){return e=$r(22,e,o,r),e.elementType=bb,e.lanes=n,e.stateNode={isHidden:!1},e}function Xl(e,r,n){return e=$r(6,e,null,r),e.lanes=n,e}function ql(e,r,n){return r=$r(4,e.children!==null?e.children:[],e.key,r),r.lanes=n,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function Sy(e,r,n,o,i){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dl(0),this.expirationTimes=Dl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dl(0),this.identifierPrefix=o,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function xg(e,r,n,o,i,s,a,l,d){return e=new Sy(e,r,n,l,d),r===1?(r=1,s===!0&&(r|=8)):r=0,s=$r(3,null,null,r),e.current=s,s.stateNode=e,s.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},tg(s),e}function Cy(e,r,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ho,key:o==null?null:""+o,children:e,containerInfo:r,implementation:n}}function ih(e){if(!e)return io;e=e._reactInternals;e:{if(Ao(e)!==e||e.tag!==1)throw Error(ze(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(vr(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(ze(171))}if(e.tag===1){var n=e.type;if(vr(n))return im(e,n,r)}return r}function sh(e,r,n,o,i,s,a,l,d){return e=xg(n,o,!0,e,i,s,a,l,d),e.context=ih(null),n=e.current,o=ur(),i=eo(n),s=Cn(o,i),s.callback=r??null,Zn(n,s,i),e.current.lanes=i,Ts(e,i,o),jr(e,o),e}function xl(e,r,n,o){var i=r.current,s=ur(),a=eo(i);return n=ih(n),r.context===null?r.context=n:r.pendingContext=n,r=Cn(s,a),r.payload={element:e},o=o===void 0?null:o,o!==null&&(r.callback=o),e=Zn(i,r,a),e!==null&&(qr(e,i,a,s),ya(e,i,a)),a}function Za(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Gu(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<r?n:r}}function yg(e,r){Gu(e,r),(e=e.alternate)&&Gu(e,r)}function zy(){return null}var ah=typeof reportError=="function"?reportError:function(e){console.error(e)};function vg(e){this._internalRoot=e}yl.prototype.render=vg.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(ze(409));xl(e,r,null,null)};yl.prototype.unmount=vg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;Ro(function(){xl(null,e,null,null)}),r[Tn]=null}};function yl(e){this._internalRoot=e}yl.prototype.unstable_scheduleHydration=function(e){if(e){var r=_b();e={blockedOn:null,target:e,priority:r};for(var n=0;n<Hn.length&&r!==0&&r<Hn[n].priority;n++);Hn.splice(n,0,e),n===0&&Pb(e)}};function jg(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Uu(){}function Ty(e,r,n,o,i){if(i){if(typeof o=="function"){var s=o;o=function(){var g=Za(a);s.call(g)}}var a=sh(r,o,e,0,null,!1,!1,"",Uu);return e._reactRootContainer=a,e[Tn]=a.current,us(e.nodeType===8?e.parentNode:e),Ro(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof o=="function"){var l=o;o=function(){var g=Za(d);l.call(g)}}var d=xg(e,0,!1,null,null,!1,!1,"",Uu);return e._reactRootContainer=d,e[Tn]=d.current,us(e.nodeType===8?e.parentNode:e),Ro(function(){xl(r,d,n,o)}),d}function jl(e,r,n,o,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var l=i;i=function(){var d=Za(a);l.call(d)}}xl(r,a,e,i)}else a=Ty(n,r,e,i,o);return Za(a)}Mb=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var n=Mi(r.pendingLanes);n!==0&&(Pc(r,n|1),jr(r,_t()),!(ht&6)&&(mi=_t()+500,co()))}break;case 13:Ro(function(){var o=In(e,1);if(o!==null){var i=ur();qr(o,e,1,i)}}),yg(e,1)}};Nc=function(e){if(e.tag===13){var r=In(e,134217728);if(r!==null){var n=ur();qr(r,e,134217728,n)}yg(e,134217728)}};Lb=function(e){if(e.tag===13){var r=eo(e),n=In(e,r);if(n!==null){var o=ur();qr(n,e,r,o)}yg(e,r)}};_b=function(){return St};$b=function(e,r){var n=St;try{return St=e,r()}finally{St=n}};Fd=function(e,r,n){switch(r){case"input":if(Td(e,n),r=n.name,n.type==="radio"&&r!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<n.length;r++){var o=n[r];if(o!==e&&o.form===e.form){var i=gl(o);if(!i)throw Error(ze(90));hb(o),Td(o,i)}}}break;case"textarea":xb(e,n);break;case"select":r=n.value,r!=null&&ti(e,!!n.multiple,r,!1)}};Cb=bg;zb=Ro;var Iy={usingClientEntryPoint:!1,Events:[Bs,Ko,gl,wb,Sb,bg]},Bi={findFiberByHostInstance:vo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},By={bundleType:Bi.bundleType,version:Bi.version,rendererPackageName:Bi.rendererPackageName,rendererConfig:Bi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Bb(e),e===null?null:e.stateNode},findFiberByHostInstance:Bi.findFiberByHostInstance||zy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qs.isDisabled&&Qs.supportsFiber)try{al=Qs.inject(By),ln=Qs}catch{}}Rr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Iy;Rr.createPortal=function(e,r){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jg(r))throw Error(ze(200));return Cy(e,r,null,n)};Rr.createRoot=function(e,r){if(!jg(e))throw Error(ze(299));var n=!1,o="",i=ah;return r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),r=xg(e,1,!1,null,null,n,!1,o,i),e[Tn]=r.current,us(e.nodeType===8?e.parentNode:e),new vg(r)};Rr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(ze(188)):(e=Object.keys(e).join(","),Error(ze(268,e)));return e=Bb(r),e=e===null?null:e.stateNode,e};Rr.flushSync=function(e){return Ro(e)};Rr.hydrate=function(e,r,n){if(!vl(r))throw Error(ze(200));return jl(null,e,r,!0,n)};Rr.hydrateRoot=function(e,r,n){if(!jg(e))throw Error(ze(405));var o=n!=null&&n.hydratedSources||null,i=!1,s="",a=ah;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),r=sh(r,null,e,1,n??null,i,!1,s,a),e[Tn]=r.current,us(e),o)for(e=0;e<o.length;e++)n=o[e],i=n._getVersion,i=i(n._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[n,i]:r.mutableSourceEagerHydrationData.push(n,i);return new yl(r)};Rr.render=function(e,r,n){if(!vl(r))throw Error(ze(200));return jl(null,e,r,!1,n)};Rr.unmountComponentAtNode=function(e){if(!vl(e))throw Error(ze(40));return e._reactRootContainer?(Ro(function(){jl(null,null,e,!1,function(){e._reactRootContainer=null,e[Tn]=null})}),!0):!1};Rr.unstable_batchedUpdates=bg;Rr.unstable_renderSubtreeIntoContainer=function(e,r,n,o){if(!vl(n))throw Error(ze(200));if(e==null||e._reactInternals===void 0)throw Error(ze(38));return jl(e,r,n,!1,o)};Rr.version="18.3.1-next-f1338f8080-20240426";function lh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lh)}catch(e){console.error(e)}}lh(),lb.exports=Rr;var Ry=lb.exports,dh,Vu=Ry;dh=Vu.createRoot,Vu.hydrateRoot;/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ch=(...e)=>e.filter((r,n,o)=>!!r&&r.trim()!==""&&o.indexOf(r)===n).join(" ").trim();/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ay={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=c.forwardRef(({color:e="currentColor",size:r=24,strokeWidth:n=2,absoluteStrokeWidth:o,className:i="",children:s,iconNode:a,...l},d)=>c.createElement("svg",{ref:d,...Ay,width:r,height:r,stroke:e,strokeWidth:o?Number(n)*24/Number(r):n,className:ch("lucide",i),...l},[...a.map(([g,m])=>c.createElement(g,m)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=(e,r)=>{const n=c.forwardRef(({className:o,...i},s)=>c.createElement(Ey,{ref:s,iconNode:r,className:ch(`lucide-${Dy(e)}`,o),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=pe("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=pe("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=pe("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=pe("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=pe("Baby",[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=pe("BellOff",[["path",{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5",key:"o7mx20"}],["path",{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7",key:"16f1lm"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=pe("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=pe("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ds=pe("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=pe("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=pe("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=pe("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=pe("Bus",[["path",{d:"M8 6v6",key:"18i7km"}],["path",{d:"M15 6v6",key:"1sg6z9"}],["path",{d:"M2 12h19.6",key:"de5uta"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",key:"1wwztk"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M9 18h5",key:"lrx6i"}],["circle",{cx:"16",cy:"18",r:"2",key:"1v4tcr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=pe("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=pe("CalendarClock",[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M17.5 17.5 16 16.3V14",key:"akvzfd"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=pe("CalendarPlus",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=pe("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=pe("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=pe("Carrot",[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46",key:"rfqxbe"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z",key:"6b25w4"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z",key:"fn65lo"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=pe("ChartCandlestick",[["path",{d:"M9 5v4",key:"14uxtq"}],["rect",{width:"4",height:"6",x:"7",y:"9",rx:"1",key:"f4fvz0"}],["path",{d:"M9 15v2",key:"r5rk32"}],["path",{d:"M17 3v2",key:"1l2re6"}],["rect",{width:"4",height:"8",x:"15",y:"5",rx:"1",key:"z38je5"}],["path",{d:"M17 13v3",key:"5l0wba"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=pe("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=pe("ChartLine",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=pe("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=pe("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=pe("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=pe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=pe("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=pe("Clapperboard",[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",key:"1tn4o7"}],["path",{d:"m6.2 5.3 3.1 3.9",key:"iuk76l"}],["path",{d:"m12.4 3.4 3.1 4",key:"6hsd6n"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",key:"ltgou9"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=pe("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=pe("Coffee",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=pe("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=pe("Columns3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=pe("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=pe("Droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=pe("Dumbbell",[["path",{d:"M14.4 14.4 9.6 9.6",key:"ic80wn"}],["path",{d:"M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z",key:"nnl7wr"}],["path",{d:"m21.5 21.5-1.4-1.4",key:"1f1ice"}],["path",{d:"M3.9 3.9 2.5 2.5",key:"1evmna"}],["path",{d:"M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z",key:"yhosts"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=pe("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ja=pe("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const js=pe("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=pe("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=pe("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const so=pe("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=pe("Fuel",[["line",{x1:"3",x2:"15",y1:"22",y2:"22",key:"xegly4"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9",key:"xcnuvu"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",key:"16j0yd"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",key:"7cu91f"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=pe("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ks=pe("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=pe("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=pe("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=pe("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=pe("HeartPulse",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=pe("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws=pe("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=pe("ImagePlus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=pe("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=pe("Images",[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18",key:"nf6bnh"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2",key:"12espp"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=pe("IndianRupee",[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu=pe("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=pe("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=pe("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=pe("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=pe("LayoutList",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=pe("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ss=pe("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=pe("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=pe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=pe("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=pe("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=pe("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=pe("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=pe("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=pe("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=pe("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=pe("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=pe("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=pe("PanelLeftOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=pe("PartyPopper",[["path",{d:"M5.8 11.3 2 22l10.7-3.79",key:"gwxi1d"}],["path",{d:"M4 3h.01",key:"1vcuye"}],["path",{d:"M22 8h.01",key:"1mrtc2"}],["path",{d:"M15 2h.01",key:"1cjtqr"}],["path",{d:"M22 20h.01",key:"1mrys2"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",key:"hbicv8"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17",key:"1i94pl"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7",key:"1cofks"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",key:"4kbmks"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=pe("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=pe("PawPrint",[["circle",{cx:"11",cy:"4",r:"2",key:"vol9p0"}],["circle",{cx:"18",cy:"8",r:"2",key:"17gozi"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",key:"1ydw1z"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=pe("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=pe("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=pe("PiggyBank",[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z",key:"1ivx2i"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h.01",key:"xkw8gn"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=pe("Pill",[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=pe("Plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tl=pe("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=pe("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=pe("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=pe("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=pe("ReceiptText",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=pe("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=pe("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=pe("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=pe("Scissors",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=pe("ScrollText",[["path",{d:"M15 12h-5",key:"r7krc0"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=pe("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=pe("Shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=pe("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=pe("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=pe("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=pe("Sprout",[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=pe("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=pe("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=pe("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=pe("Sunrise",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=pe("Swords",[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5",key:"hbey2j"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18",key:"1hf58s"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20",key:"pidxm4"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21",key:"1pehsh"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const No=pe("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=pe("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=pe("TramFront",[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M12 3v8",key:"1h2ygw"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m18 22-2-3",key:"1p0ohu"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M16 15h.01",key:"rnfrdf"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=pe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=pe("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=pe("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=pe("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=pe("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jr=pe("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=pe("Tv",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=pe("Undo2",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=pe("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=pe("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=pe("WashingMachine",[["path",{d:"M3 6h3",key:"155dbl"}],["path",{d:"M17 6h.01",key:"e2y6kg"}],["rect",{width:"18",height:"20",x:"3",y:"2",rx:"2",key:"od3kk9"}],["circle",{cx:"12",cy:"13",r:"5",key:"nlbqau"}],["path",{d:"M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5",key:"17lach"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=pe("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=pe("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=pe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=pe("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=pe("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Dg="anvil_token",Wh=()=>localStorage.getItem(Dg),L0=e=>localStorage.setItem(Dg,e),mc=()=>localStorage.removeItem(Dg),te=async(e,r,n)=>{const o={};n!==void 0&&(o["Content-Type"]="application/json");const i=Wh();i&&(o.Authorization=`Bearer ${i}`);const s=await fetch(`/api${r}`,{method:e,headers:o,body:n!==void 0?JSON.stringify(n):void 0});if(s.status===401)throw mc(),window.dispatchEvent(new Event("anvil-unauthorized")),new Error("Not authenticated");if(s.status===204)return null;if(!s.ok){const a=await s.text();let l=a;try{l=JSON.parse(a).detail||a}catch{}throw new Error(l||`HTTP ${s.status}`)}return s.json()},M={me:()=>te("GET","/auth/me"),signInWithGoogle:()=>{window.location.href="/api/auth/google"},getPillars:()=>te("GET","/pillars"),getFocus:()=>te("GET","/focus"),createFocus:e=>te("POST","/focus",e),deleteFocus:e=>te("DELETE",`/focus/${e}`),addScreenTime:(e,r)=>te("POST","/screentime",{screen:e,seconds:r}),getScreenTime:()=>te("GET","/screentime"),getPayouts:()=>te("GET","/rewards/payouts"),createPayout:e=>te("POST","/rewards/payouts",e),deletePayout:e=>te("DELETE",`/rewards/payouts/${e}`),getRewardRates:()=>te("GET","/rewards/rates"),setRewardRate:e=>te("POST","/rewards/rates",e),getMedia:()=>te("GET","/media"),createMedia:e=>te("POST","/media",e),updateMedia:(e,r)=>te("PUT",`/media/${e}`,r),deleteMedia:e=>te("DELETE",`/media/${e}`),restoreMedia:e=>te("POST",`/media/${e}/restore`),getDecks:()=>te("GET","/spiritual/decks"),createDeck:e=>te("POST","/spiritual/decks",e),deleteDeck:e=>te("DELETE",`/spiritual/decks/${e}`),getGoldenGoals:()=>te("GET","/golden/goals"),getGoldenGoal:e=>te("GET",`/golden/goals/${e}`),createGolden:e=>te("POST","/golden/goals",e),updateGolden:(e,r)=>te("PUT",`/golden/goals/${e}`,r),achieveGolden:e=>te("POST",`/golden/goals/${e}/achieve`),unachieveGolden:e=>te("POST",`/golden/goals/${e}/unachieve`),upsertGoldenEntry:(e,r)=>te("PUT",`/golden/goals/${e}/entry`,r),deleteGolden:e=>te("DELETE",`/golden/goals/${e}`),restoreGolden:e=>te("POST",`/golden/goals/${e}/restore`),logTesla369:e=>te("POST",`/golden/goals/${e}/369/log`),undoTesla369:e=>te("DELETE",`/golden/goals/${e}/369/log`),getKickstart:()=>te("GET","/kickstart/videos"),createKickstart:e=>te("POST","/kickstart/videos",e),updateKickstart:(e,r)=>te("PUT",`/kickstart/videos/${e}`,r),deleteKickstart:e=>te("DELETE",`/kickstart/videos/${e}`),restoreKickstart:e=>te("POST",`/kickstart/videos/${e}/restore`),getTxns:()=>te("GET","/finance/txns"),createTxn:e=>te("POST","/finance/txns",e),updateTxn:(e,r)=>te("PUT",`/finance/txns/${e}`,r),deleteTxn:e=>te("DELETE",`/finance/txns/${e}`),restoreTxn:e=>te("POST",`/finance/txns/${e}/restore`),getInvestments:()=>te("GET","/finance/investments"),createInvestment:e=>te("POST","/finance/investments",e),updateInvestment:(e,r)=>te("PUT",`/finance/investments/${e}`,r),deleteInvestment:e=>te("DELETE",`/finance/investments/${e}`),restoreInvestment:e=>te("POST",`/finance/investments/${e}/restore`),getFixedItems:()=>te("GET","/finance/fixed-items"),createFixedItem:e=>te("POST","/finance/fixed-items",e),updateFixedItem:(e,r)=>te("PUT",`/finance/fixed-items/${e}`,r),deleteFixedItem:e=>te("DELETE",`/finance/fixed-items/${e}`),getExpenses:()=>te("GET","/expenses"),createExpenseCategory:e=>te("POST","/expenses/categories",e),updateExpenseCategory:(e,r)=>te("PUT",`/expenses/categories/${e}`,r),arrangeExpenseCategories:e=>te("PUT","/expenses/categories/arrange",{order:e}),deleteExpenseCategory:e=>te("DELETE",`/expenses/categories/${e}`),createExpenseLog:e=>te("POST","/expenses/logs",e),updateExpenseLog:(e,r)=>te("PUT",`/expenses/logs/${e}`,r),deleteExpenseLog:e=>te("DELETE",`/expenses/logs/${e}`),restoreExpenseLog:e=>te("POST",`/expenses/logs/${e}/restore`),getTrades:()=>te("GET","/trades"),createTradeEntry:e=>te("POST","/trades/entries",e),updateTradeEntry:(e,r)=>te("PUT",`/trades/entries/${e}`,r),bookTradeEntry:(e,r,n)=>te("POST",`/trades/entries/${e}/book`,{outcome:r,date:n}),reopenTradeEntry:e=>te("POST",`/trades/entries/${e}/reopen`),deleteTradeEntry:e=>te("DELETE",`/trades/entries/${e}`),setTradeLearning:(e,r)=>te("PUT","/trades/learning",{date:e,learning:r}),getSetting:e=>te("GET",`/settings/${e}`),setSetting:(e,r)=>te("PUT",`/settings/${e}`,{value:r}),getTasks:()=>te("GET","/tasks"),createTask:e=>te("POST","/tasks",e),updateTask:(e,r)=>te("PUT",`/tasks/${e}`,r),deleteTask:e=>te("DELETE",`/tasks/${e}`),restoreTask:e=>te("POST",`/tasks/${e}/restore`),scheduleTask:e=>te("PUT",`/tasks/${e}/schedule`),getGoals:e=>te("GET",`/goals${e?`?pillar=${encodeURIComponent(e)}`:""}`),createGoal:e=>te("POST","/goals",e),updateGoal:(e,r)=>te("PUT",`/goals/${e}`,r),deleteGoal:e=>te("DELETE",`/goals/${e}`),restoreGoal:e=>te("POST",`/goals/${e}/restore`),getHabits:()=>te("GET","/habits"),createHabit:e=>te("POST","/habits",e),updateHabit:(e,r)=>te("PUT",`/habits/${e}`,r),deleteHabit:e=>te("DELETE",`/habits/${e}`),restoreHabit:e=>te("POST",`/habits/${e}/restore`),toggleHabitLog:(e,r)=>te("POST",`/habits/${e}/log/${r}`),setHabitLogNote:(e,r,n)=>te("PUT",`/habits/${e}/log/${r}/note`,{note:n}),setHabitLogCount:(e,r,n,o)=>te("PUT",`/habits/${e}/log/${r}/count`,{count:n,note:o}),incrementHabitLog:(e,r)=>te("POST",`/habits/${e}/log/${r}/increment`),clearHabitLog:(e,r)=>te("DELETE",`/habits/${e}/log/${r}`),getHabitsYearly:e=>te("GET",`/habits/yearly/${e}`),getJournalEntry:e=>te("GET",`/journal/${e}`),getJournalHistory:(e,r)=>te("GET",`/journal/history/${e}/${r}`),updateJournalMood:(e,r)=>te("PUT",`/journal/${e}`,{mood:r}),addJournalBullet:(e,r,n)=>te("POST",`/journal/${e}/bullets`,{section:r,text:n}),deleteJournalBullet:e=>te("DELETE",`/journal/bullets/${e}`),getSkills:()=>te("GET","/skills"),createSkill:e=>te("POST","/skills",e),updateSkill:(e,r)=>te("PUT",`/skills/${e}`,r),deleteSkill:e=>te("DELETE",`/skills/${e}`),restoreSkill:e=>te("POST",`/skills/${e}/restore`),addSkillNote:(e,r,n,o=null)=>te("POST",`/skills/${e}/notes`,{stage:r,text:n,grp:o}),setSkillGroups:(e,r)=>te("PUT",`/skills/${e}/groups`,{groups:r}),deleteSkillNote:e=>te("DELETE",`/skill-notes/${e}`),updateSkillNote:(e,r)=>te("PUT",`/skill-notes/${e}`,{text:r}),toggleSkillNote:e=>te("PUT",`/skill-notes/${e}/toggle`),completeSkillStage:(e,r)=>te("POST",`/skills/${e}/complete-stage`,{stage:r}),getScriptures:()=>te("GET","/scriptures"),createScripture:e=>te("POST","/scriptures",e),deleteScripture:e=>te("DELETE",`/scriptures/${e}`),restoreScripture:e=>te("POST",`/scriptures/${e}/restore`),addChapter:(e,r)=>te("POST",`/scriptures/${e}/chapters`,r),updateChapter:(e,r)=>te("PUT",`/chapters/${e}`,r),deleteChapter:e=>te("DELETE",`/chapters/${e}`),restoreChapter:e=>te("POST",`/chapters/${e}/restore`),addInsight:(e,r)=>te("POST",`/chapters/${e}/insights`,{text:r}),deleteInsight:e=>te("DELETE",`/insights/${e}`),getTopics:()=>te("GET","/revision/topics"),createTopic:e=>te("POST","/revision/topics",e),updateTopic:(e,r)=>te("PUT",`/revision/topics/${e}`,r),deleteTopic:e=>te("DELETE",`/revision/topics/${e}`),restoreTopic:e=>te("POST",`/revision/topics/${e}/restore`),getDueToday:()=>te("GET","/revision/due-today"),getCalendar:(e,r)=>te("GET",`/revision/calendar/${e}/${r}`),toggleReviewDone:e=>te("PUT",`/revision/reviews/${e}/done`),getAffirmations:()=>te("GET","/affirmations"),createAffirmation:e=>te("POST","/affirmations",e),updateAffirmation:(e,r)=>te("PUT",`/affirmations/${e}`,r),deleteAffirmation:e=>te("DELETE",`/affirmations/${e}`),restoreAffirmation:e=>te("POST",`/affirmations/${e}/restore`),getBucket:()=>te("GET","/bucket"),createBucketWish:e=>te("POST","/bucket",e),updateBucketWish:(e,r)=>te("PUT",`/bucket/${e}`,r),fulfillBucketWish:e=>te("POST",`/bucket/${e}/fulfill`),arrangeBucket:e=>te("PUT","/bucket/arrange",{order:e}),deleteBucketWish:e=>te("DELETE",`/bucket/${e}`),restoreBucketWish:e=>te("POST",`/bucket/${e}/restore`),getChallenges:()=>te("GET","/challenges"),createChallenge:e=>te("POST","/challenges",e),updateChallenge:(e,r)=>te("PUT",`/challenges/${e}`,r),deleteChallenge:e=>te("DELETE",`/challenges/${e}`),restoreChallenge:e=>te("POST",`/challenges/${e}/restore`),getAchievements:()=>te("GET","/achievements"),createAchievement:e=>te("POST","/achievements",e),updateAchievement:(e,r)=>te("PUT",`/achievements/${e}`,r),deleteAchievement:e=>te("DELETE",`/achievements/${e}`),restoreAchievement:e=>te("POST",`/achievements/${e}/restore`),getDelight:()=>te("GET","/delight"),createCollection:e=>te("POST","/delight/collections",e),updateCollection:(e,r)=>te("PUT",`/delight/collections/${e}`,r),deleteCollection:e=>te("DELETE",`/delight/collections/${e}`),restoreCollection:e=>te("POST",`/delight/collections/${e}/restore`),createDelightItem:(e,r)=>te("POST",`/delight/collections/${e}/items`,r),updateDelightItem:(e,r)=>te("PUT",`/delight/items/${e}`,r),deleteDelightItem:e=>te("DELETE",`/delight/items/${e}`),restoreDelightItem:e=>te("POST",`/delight/items/${e}/restore`),arrangeDelight:(e,r)=>te("PUT",`/delight/collections/${e}/arrange`,{order:r})},hc=[{code:"INR",symbol:"₹",locale:"en-IN",label:"Indian Rupee"},{code:"USD",symbol:"$",locale:"en-US",label:"US Dollar"},{code:"EUR",symbol:"€",locale:"de-DE",label:"Euro"},{code:"GBP",symbol:"£",locale:"en-GB",label:"British Pound"},{code:"JPY",symbol:"¥",locale:"ja-JP",label:"Japanese Yen"},{code:"AED",symbol:"د.إ",locale:"en-AE",label:"UAE Dirham"},{code:"AUD",symbol:"A$",locale:"en-AU",label:"Australian Dollar"},{code:"CAD",symbol:"C$",locale:"en-CA",label:"Canadian Dollar"},{code:"SGD",symbol:"S$",locale:"en-SG",label:"Singapore Dollar"}],Qu="INR",Mh="anvil_currency",Cl=e=>hc.find(r=>r.code===e)||hc[0];function fi(){try{return localStorage.getItem(Mh)||Qu}catch{return Qu}}function Xu(e){try{localStorage.setItem(Mh,e)}catch{}return window.dispatchEvent(new CustomEvent("anvil-currency",{detail:e})),e}function Cs(e,r){const n=Cl(r||fi()),o=Math.round(Number(e)||0);return n.symbol+o.toLocaleString(n.locale)}function As(e,r){const n=Cl(r||fi()),o=Number(e)||0;return n.symbol+o.toLocaleString(n.locale,{minimumFractionDigits:2,maximumFractionDigits:2})}function fc(e,r){const n=Cl(r||fi()),o=Math.round(Number(e)||0),i=Math.abs(o);return n.code==="INR"?i>=1e7?n.symbol+(o/1e7).toFixed(i>=1e8?0:1)+"Cr":i>=1e5?n.symbol+(o/1e5).toFixed(i>=1e6?0:1)+"L":i>=1e3?n.symbol+(o/1e3).toFixed(i>=1e4?0:1)+"K":n.symbol+o:i>=1e9?n.symbol+(o/1e9).toFixed(1)+"B":i>=1e6?n.symbol+(o/1e6).toFixed(1)+"M":i>=1e3?n.symbol+(o/1e3).toFixed(1)+"K":n.symbol+o}function uo(){const[e,r]=c.useState(fi());return c.useEffect(()=>{const n=o=>r(o.detail||fi());return window.addEventListener("anvil-currency",n),()=>window.removeEventListener("anvil-currency",n)},[]),Cl(e)}const xc=1,Lh="anvil_month_start_day";function yc(){try{return Number(localStorage.getItem(Lh))||xc}catch{return xc}}function qu(e){const r=Math.min(28,Math.max(1,Number(e)||xc));try{localStorage.setItem(Lh,String(r))}catch{}return window.dispatchEvent(new CustomEvent("anvil-month-start",{detail:r})),r}function Ag(){const[e,r]=c.useState(yc());return c.useEffect(()=>{const n=o=>r(o.detail||yc());return window.addEventListener("anvil-month-start",n),()=>window.removeEventListener("anvil-month-start",n)},[]),e}const Zu=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`;function or(e,r,n=0){const o=e.getFullYear(),i=e.getMonth(),a=e.getDate()>=r?i:i-1,l=new Date(o,a+n,r),d=new Date(o,a+n+1,r-1);return[Zu(l),Zu(d)]}const cr={financial:{label:"Financial",leaf:"#C9A227",shape:"round"},academic:{label:"Academic",leaf:"#3A7CA5",shape:"pine"},relationship:{label:"Relationship",leaf:"#C2536B",shape:"round"},spiritual:{label:"Spiritual",leaf:"#8268B0",shape:"tall"},health:{label:"Health",leaf:"#4C9A6B",shape:"round"}},no="health";function Eg({species:e=no,progress:r=1,withered:n=!1,size:o=200}){const i=Math.max(0,Math.min(1,r)),s=cr[e]||cr[no],a=n?"#8A7B63":"#7A5A3C",l=n?"#A99C84":s.leaf,d=n?"#8F8268":l,g=14+i*46,m=112-g,f=i>.14,h=f?8+i*30:0;return t.jsxs("svg",{viewBox:"0 0 120 120",width:o,height:o,style:{display:"block"},children:[t.jsx("ellipse",{cx:"60",cy:"114",rx:20+i*14,ry:"5",fill:"rgba(38,36,31,0.08)"}),!f&&t.jsxs("g",{transform:`translate(60 ${112-i*40})`,children:[t.jsx("path",{d:"M0 8 C0 8 0 -2 0 -6",stroke:"#4C9A6B",strokeWidth:"2.5",fill:"none"}),t.jsx("ellipse",{cx:"-5",cy:"-4",rx:"6",ry:"3.5",fill:"#4C9A6B",transform:"rotate(-30 -5 -4)"}),t.jsx("ellipse",{cx:"5",cy:"-4",rx:"6",ry:"3.5",fill:"#5BB07E",transform:"rotate(30 5 -4)"})]}),f&&t.jsxs(t.Fragment,{children:[t.jsx("rect",{x:60-(2+i*2.5),y:m,width:(2+i*2.5)*2,height:g,rx:"2",fill:a}),s.shape==="pine"?t.jsxs(t.Fragment,{children:[t.jsx("polygon",{points:`60,${m-h*2.2} ${60-h},${m+4} ${60+h},${m+4}`,fill:l}),t.jsx("polygon",{points:`60,${m-h*3} ${60-h*.8},${m-h*.7} ${60+h*.8},${m-h*.7}`,fill:d})]}):s.shape==="tall"?t.jsxs(t.Fragment,{children:[t.jsx("ellipse",{cx:"60",cy:m-h*.3,rx:h*.78,ry:h*1.55,fill:l}),t.jsx("ellipse",{cx:"60",cy:m-h*.9,rx:h*.5,ry:h*1,fill:d,opacity:"0.9"})]}):t.jsxs(t.Fragment,{children:[t.jsx("circle",{cx:"60",cy:m,r:h,fill:l}),t.jsx("circle",{cx:60-h*.7,cy:m+h*.3,r:h*.78,fill:l}),t.jsx("circle",{cx:60+h*.7,cy:m+h*.3,r:h*.78,fill:d}),t.jsx("circle",{cx:"60",cy:m-h*.5,r:h*.8,fill:d,opacity:"0.92"})]})]})]})}function _0({species:e}){return t.jsx(Eg,{species:e,progress:1,size:56})}const Zl="#C9A227",Ju="#3A7CA5",ep="#C2536B",Jl="#4C9A6B",$0=new Set(["worth"]),Fg=e=>{const r=n=>String(n).padStart(2,"0");return`${e.getFullYear()}-${r(e.getMonth()+1)}-${r(e.getDate())}`},lr=Fg(new Date),tp=e=>{const r=new Date;return r.setDate(r.getDate()+e),Fg(r)},P0=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],rp=()=>P0[(new Date().getDay()+6)%7],N0={1:"😣 Rough",2:"🙁 Low",3:"😐 Okay",4:"🙂 Good",5:"😄 Great"},Xs=e=>{const r=Math.round(e||0),n=Math.floor(r/60),o=r%60;return n?`${n}h ${o}m`:`${o}m`},np=e=>{const r=new Date(e+"T00:00:00"),n=r.getDay(),o=new Date(r);return o.setDate(r.getDate()+(n===0?-6:1-n)),Array.from({length:7},(i,s)=>{const a=new Date(o);return a.setDate(o.getDate()+s),Fg(a)})};function O0({onNavigate:e}){var ee,Ie;const r=uo(),n=Ag(),o=v=>As(v,r.code),[i,s]=c.useState(!1),[a,l]=c.useState([]),[d,g]=c.useState({sessions:[],stats:{}}),[m,f]=c.useState([]),[h,R]=c.useState([]),[B,T]=c.useState([]),[z,b]=c.useState([]),[p,u]=c.useState({}),[j,k]=c.useState({}),[C,D]=c.useState([]),[x,y]=c.useState([]),[_,Z]=c.useState([]),[ne,ue]=c.useState([]),[A,K]=c.useState([]),[oe,ye]=c.useState([]),[X,Y]=c.useState([]),[ce,J]=c.useState(null),[I,$]=c.useState([]),H=c.useCallback(()=>{Promise.all([M.getHabits().catch(()=>[]),M.getFocus().catch(()=>({sessions:[],stats:{}})),M.getScreenTime().catch(()=>[]),M.getRewardRates().catch(()=>[]),M.getPayouts().catch(()=>[]),M.getAchievements().catch(()=>[]),M.getSetting("grove_rates").catch(()=>null),M.getSetting("reward_rates").catch(()=>null),M.getExpenses().catch(()=>({categories:[],logs:[]})),M.getDueToday().catch(()=>[]),M.getChallenges().catch(()=>[]),M.getGoldenGoals().catch(()=>[]),M.getScriptures().catch(()=>[]),M.getGoals().catch(()=>[]),M.getJournalEntry(lr).catch(()=>null),M.getKickstart().catch(()=>[])]).then(([v,be,Be,$e,Je,we,Et,pt,nt,un,En,Ve,Fn,en,nf,Lg])=>{l(v||[]),g(be||{sessions:[],stats:{}}),f(Array.isArray(Be)?Be:[]),R($e||[]),T(Je||[]),b(Array.isArray(we)?we:[]),u((Et==null?void 0:Et.value)||{}),k((pt==null?void 0:pt.value)||{}),D((nt==null?void 0:nt.categories)||[]),y((nt==null?void 0:nt.logs)||[]),Z(un||[]),ue(Array.isArray(En)?En:[]),K(Array.isArray(Ve)?Ve:[]),ye(Array.isArray(Fn)?Fn:[]),Y(Array.isArray(en)?en:[]),J(nf),$(Array.isArray(Lg)?Lg:[]),s(!0)}).catch(()=>s(!0))},[]);c.useEffect(()=>{H()},[H]);const P=c.useMemo(()=>a.filter(v=>v.active!==!1),[a]),ae=v=>new Set(v.logs||[]),me=(v,be)=>{var Be;if((v.type==="minimum"||v.type==="maximum")&&v.period==="day"){const $e=(Be=v.log_counts)==null?void 0:Be[be];return $e==null?!1:v.type==="minimum"?$e>=(v.target_count||0):$e>0&&$e<=(v.target_count||0)}return ae(v).has(be)},Ne=(v,be)=>v.type==="minimum"&&v.period==="week"&&be.filter(Be=>ae(v).has(Be)).length>=(v.target_count||0),Q=(v,be)=>v.type==="minimum"&&v.period==="month"&&(v.logs||[]).filter(Be=>Be.slice(0,7)===be).length>=(v.target_count||0),re=(v,be)=>v.type==="minimum"&&v.period==="year"&&(v.logs||[]).filter(Be=>Be.slice(0,4)===be).length>=(v.target_count||0),G=(v,be)=>v.type!=="minimum"?!1:v.period==="week"?Ne(v,np(be)):v.period==="month"?Q(v,be.slice(0,7)):v.period==="year"?re(v,be.slice(0,4)):!1,le=(v,be)=>me(v,be)||G(v,be),E=np(lr),S=P.filter(v=>le(v,lr)).length,ie=P.length?Math.round(S/P.length*100):0,fe=v=>{if(v.type==="minimum"&&v.period==="month"&&Q(v,E[0].slice(0,7))||v.type==="minimum"&&v.period==="year"&&re(v,E[0].slice(0,4))||v.type==="minimum"&&v.period==="week"&&Ne(v,E))return 1;if((v.type==="minimum"||v.type==="maximum")&&v.period==="day")return Math.min(1,E.filter(Je=>me(v,Je)).length/7);const be=ae(v),Be=E.filter(Je=>be.has(Je)).length,$e=v.type==="minimum"&&v.period==="week"?v.target_count||1:v.target_per_week||7;return $e>0?Math.min(1,Be/$e):0},U=P.length?Math.round(P.reduce((v,be)=>v+fe(be),0)/P.length*100):0,xe=lr.slice(0,7),ve=new Date(Number(lr.slice(0,4)),Number(lr.slice(5,7)),0).getDate(),Ae=v=>{if(v.type==="minimum"&&v.period==="month"&&Q(v,xe)||v.type==="minimum"&&v.period==="year"&&re(v,xe.slice(0,4)))return 1;if((v.type==="minimum"||v.type==="maximum")&&v.period==="day"){let $e=0;for(let Je=1;Je<=ve;Je++)me(v,`${xe}-${String(Je).padStart(2,"0")}`)&&$e++;return Math.min(1,$e/ve)}const be=(v.logs||[]).filter($e=>$e.slice(0,7)===xe).length;let Be;return v.type==="minimum"&&v.period==="week"?Be=(v.target_count||1)*(ve/7):v.type==="minimum"&&v.period==="month"?Be=v.target_count||1:v.type==="minimum"&&v.period==="year"?Be=(v.target_count||1)/12:Be=(v.target_per_week||7)*(ve/7),Be>0?Math.min(1,be/Be):0},tt=P.length?Math.round(P.reduce((v,be)=>v+Ae(be),0)/P.length*100):0,ft=[0,-1,-2].map((v,be)=>({label:be===0?"Today":be===1?"Yesterday":"Day before",value:P.filter(Be=>le(Be,tp(v))).length,color:be===0?"#4C9A6B":"var(--text-3)"})),_e=x.filter(v=>v.date===lr).reduce((v,be)=>v+be.amount,0),it=[0,-1,-2].map((v,be)=>({label:be===0?"Today":be===1?"Yesterday":"Day before",value:x.filter(Be=>Be.date===tp(v)).reduce((Be,$e)=>Be+$e.amount,0),color:be===0?"#C9772E":"var(--text-3)"})),Ze=c.useMemo(()=>Object.fromEntries(C.map(v=>[v.id,v])),[C]),st=c.useMemo(()=>{const[v,be]=or(new Date,n),Be={};x.forEach(pt=>{pt.date>=v&&pt.date<=be&&(Be[pt.category_id]=(Be[pt.category_id]||0)+pt.amount)});const $e=Object.entries(Be).map(([pt,nt])=>({cat:Ze[pt],amount:nt})).filter(pt=>pt.cat).sort((pt,nt)=>nt.amount-pt.amount),Je=$e.reduce((pt,nt)=>pt+nt.amount,0);let we=0;return{segs:$e.map(pt=>{const nt=Je>0?we/Je*100:0;return we+=pt.amount,{...pt,start:nt,end:Je>0?we/Je*100:0,pct:Je>0?pt.amount/Je*100:0}}),total:Je}},[x,Ze,n]),de=st.segs.length?`conic-gradient(${st.segs.map(v=>`${v.cat.color} ${v.start}% ${v.end}%`).join(", ")})`:"var(--surface-2)",Me={};h.forEach(v=>{var be;(Me[be=`${v.kind}:${v.rkey}`]||(Me[be]=[])).push({eff:v.eff_date,rate:v.rate})}),Object.values(Me).forEach(v=>v.sort((be,Be)=>be.eff.localeCompare(Be.eff)));const lt=(v,be,Be)=>{const $e=Me[`${v}:${be}`];if($e){let Je=null;for(const we of $e)if(we.eff<=Be)Je=we.rate;else break;if(Je!==null)return Je}return(v==="focus"?p[be]:j[be])||0};let dt=0,kt=0,Nt=0,Xt=0;(d.sessions||[]).filter(v=>v.completed).forEach(v=>{const be=(v.started_at||v.created_at||"").slice(0,10),Be=cr[v.tree]?v.tree:no,$e=(v.actual_min||0)/60*lt("focus",Be,be);Nt+=$e,be===lr&&(dt+=$e)}),m.forEach(v=>{if($0.has(v.screen))return;const be=v.seconds/60*lt("usage",v.screen,v.date);Xt+=be,v.date===lr&&(kt+=be)});const Bt=z.filter(v=>v.date===lr).reduce((v,be)=>v+(be.reward||0),0),Vt=z.reduce((v,be)=>v+(be.reward||0),0),Ot=ne.filter(v=>v.status==="done"),mr=Ot.filter(v=>!v.end_date||v.end_date===lr).reduce((v,be)=>v+(be.reward_earned||0),0),Ge=Ot.reduce((v,be)=>v+(be.reward_earned||0),0),ot=dt+kt+Bt+mr,xt=v=>ot>0?v/ot*100:0,ut=xt(dt),Rt=xt(kt),Ar=xt(Bt),yt=xt(mr),Er=B.reduce((v,be)=>v+be.amount,0),$t=Math.max(0,Nt+Xt+Vt+Ge-Er),gn=((ee=d.stats)==null?void 0:ee.today_minutes)||0,qt=((Ie=d.stats)==null?void 0:Ie.today_trees)||0,tr=c.useMemo(()=>oe.flatMap(v=>(v.chapters||[]).map(be=>({...be,scripture:v.name,color:v.color}))),[oe]),hr=tr.filter(v=>v.read_date===lr),W=I.filter(v=>(v.days||[]).includes(rp())),ge=v=>m.filter(be=>be.screen===v&&be.date===lr).reduce((be,Be)=>be+Be.seconds,0),We=ge("kickstart"),Ye=ge("affirmations"),wt=ge("mindscape"),Ue=A.filter(v=>!v.achieved),Ke=v=>{var be;return v.t369_enabled?!!((be=v.t369)!=null&&be.day_complete):!!v.today_done},Ct={active:ne.filter(v=>v.status==="active").length,done:Ot.length,failed:ne.filter(v=>v.status==="failed").length},Fr=ne.filter(v=>v.status==="active").slice(0,3),L=X.filter(v=>v.horizon==="Weekly"&&v.start_date<=lr&&v.end_date>=lr),Te=ce?Object.values(ce.bullets||{}).reduce((v,be)=>v+be.length,0):0,rt=!!(ce&&(ce.mood!=null||Te>0)),F=v=>e&&e(v);return i?t.jsxs("div",{style:De.page,children:[t.jsxs("div",{style:De.head,children:[t.jsx("div",{style:De.eyebrow,children:"Anvil · Today"}),t.jsx("h1",{style:De.h1,children:"Dashboard"}),t.jsx("div",{style:De.subhead,children:new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})})]}),t.jsxs("div",{style:De.statGrid,children:[t.jsx(qs,{icon:Rh,color:"#4C9A6B",label:"Habits done",value:`${S}/${P.length}`,onClick:()=>F("habits")}),t.jsx(qs,{icon:Ah,color:Zl,label:qt?`Grove · ${qt} tree${qt===1?"":"s"}`:"Grove today",value:Xs(gn),onClick:()=>F("grove")}),t.jsx(qs,{icon:Tg,color:"#C9772E",label:"Spent today",value:o(_e),onClick:()=>F("expenses")}),t.jsx(qs,{icon:yh,color:"#C9A227",label:"Rewards pending",value:o($t),onClick:()=>F("worth")})]}),t.jsx(pn,{title:"Habits",eyebrow:`${S}/${P.length} done today`,onClick:()=>F("habits"),children:P.length===0?t.jsx(Mn,{children:"No habits yet."}):t.jsxs(t.Fragment,{children:[t.jsx(op,{items:ft,fmt:v=>`${v}/${P.length}`,max:P.length}),t.jsxs("div",{style:De.ringRow,children:[t.jsx(ed,{pct:ie,label:"Today",sub:`${S}/${P.length} done`,color:"#4C9A6B"}),t.jsx(ed,{pct:U,label:"This week",sub:"of weekly targets",color:"#3A7CA5"}),t.jsx(ed,{pct:tt,label:"This month",sub:"of monthly targets",color:"#8268B0"})]})]})}),t.jsxs(pn,{title:"Expenses",eyebrow:`${o(_e)} today`,onClick:()=>F("expenses"),children:[t.jsx(op,{items:it,fmt:v=>o(v)}),st.segs.length>0&&t.jsxs("div",{style:{...De.pieWrap,marginTop:14},children:[t.jsxs("div",{style:De.pieChart,children:[t.jsx("div",{style:{...De.pieDisc,background:de}}),t.jsxs("div",{style:De.pieHole,children:[t.jsx("span",{style:De.pieHoleVal,children:o(st.total)}),t.jsx("span",{style:De.pieHoleLbl,children:"this month"})]})]}),t.jsx("div",{style:De.pieLegend,children:st.segs.slice(0,6).map(v=>t.jsx(Ri,{color:v.cat.color,label:v.cat.name,pct:v.pct,val:o(v.amount)},v.cat.id))})]})]}),t.jsx(pn,{title:"Rewards",eyebrow:`Pending ${o($t)}`,onClick:()=>F("worth"),children:ot>0?t.jsxs("div",{style:De.pieWrap,children:[t.jsxs("div",{style:De.pieChart,children:[t.jsx("div",{style:{...De.pieDisc,background:`conic-gradient(${Zl} 0 ${ut}%, ${Ju} ${ut}% ${ut+Rt}%, ${ep} ${ut+Rt}% ${ut+Rt+Ar}%, ${Jl} ${ut+Rt+Ar}% 100%)`}}),t.jsxs("div",{style:De.pieHole,children:[t.jsx("span",{style:De.pieHoleVal,children:o(ot)}),t.jsx("span",{style:De.pieHoleLbl,children:"today"})]})]}),t.jsxs("div",{style:De.pieLegend,children:[t.jsx(Ri,{color:Zl,label:"Focus",pct:ut,val:o(dt)}),t.jsx(Ri,{color:Ju,label:"Usage",pct:Rt,val:o(kt)}),t.jsx(Ri,{color:ep,label:"Achievement",pct:Ar,val:o(Bt)}),t.jsx(Ri,{color:Jl,label:"Challenges",pct:yt,val:o(mr)})]})]}):t.jsx(Mn,{children:"No rewards earned yet today."})}),t.jsx(pn,{title:"Revision",eyebrow:_.length?`${_.length} due`:"Nothing due",onClick:()=>F("revision"),children:_.length===0?t.jsx(Mn,{children:"No topics due for revision today. 🎉"}):t.jsx("div",{style:De.rows,children:_.slice(0,6).map(v=>t.jsxs("div",{style:De.row,children:[t.jsx("span",{style:{...De.dot,background:v.is_missed?"#C2536B":"#C9A227"}}),t.jsx("span",{style:De.rowName,children:v.topic}),t.jsxs("span",{style:De.rowMeta,children:["Stage ",v.stage,v.is_missed?" · missed":""]})]},v.review_id))})}),t.jsxs("div",{style:De.twoCol,children:[t.jsx(pn,{title:"Golden Book",eyebrow:Ue.length?`${Ue.filter(Ke).length}/${Ue.length} written`:null,onClick:()=>F("golden"),children:Ue.length===0?t.jsx(Mn,{children:"No active dreams."}):t.jsx("div",{style:De.rows,children:Ue.slice(0,5).map(v=>t.jsxs("div",{style:De.row,children:[t.jsx(mh,{size:13,color:"#C9A227",style:{flexShrink:0}}),t.jsx("span",{style:De.rowName,children:v.title}),t.jsx(H0,{done:Ke(v),doneText:v.t369_enabled?"369 done":"Written",pendingText:"Pending"})]},v.id))})}),t.jsx(pn,{title:"Challenges",eyebrow:`${Ct.active} active · ${Ct.done} done${Ct.failed?` · ${Ct.failed} missed`:""}`,onClick:()=>F("challenges"),children:ne.length===0?t.jsx(Mn,{children:"No challenges yet."}):Fr.length===0?t.jsx(Mn,{children:"No active challenges."}):t.jsx("div",{style:De.rows,children:Fr.map(v=>{const be=v.target>0?Math.min(100,Math.max(0,v.completed/v.target*100)):0,Be=(v.completed||0)<0;return t.jsxs("div",{style:{padding:"6px 0",borderBottom:"1px solid var(--border)"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:8},children:[t.jsx("span",{style:De.rowName,children:v.name}),t.jsxs("span",{style:{...De.rowMeta,color:Be?"#C2536B":"var(--text-3)"},children:[Be?"-":"",Math.round(Be?Math.abs(v.completed/(v.target||1)*100):be),"%"]})]}),t.jsx("div",{style:De.miniTrack,children:t.jsx("div",{style:{...De.miniBar,width:`${Be?Math.min(100,Math.abs(v.completed/(v.target||1)*100)):be}%`,background:Be?"#C2536B":Jl}})})]},v.id)})})}),t.jsx(pn,{title:"Goals this week",eyebrow:L.length?`${L.length}`:null,onClick:()=>F("goals"),children:L.length===0?t.jsx(Mn,{children:"No weekly goals running."}):t.jsx("div",{style:De.rows,children:L.slice(0,5).map(v=>t.jsxs("div",{style:De.row,children:[t.jsx(Sl,{size:13,color:"#3A7CA5",style:{flexShrink:0}}),t.jsx("span",{style:De.rowName,children:v.title}),t.jsx("span",{style:De.rowMeta,children:v.pillar})]},v.id))})}),t.jsx(pn,{title:"Journal",eyebrow:rt?"Done today":"Not yet",onClick:()=>F("journal"),children:t.jsxs("div",{style:De.journalRow,children:[t.jsx(Ds,{size:18,color:rt?"#4C9A6B":"var(--text-3)"}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:14,fontWeight:700,color:rt?"#4C9A6B":"var(--text-2)"},children:rt?"Journaled today":"Not journaled yet"}),t.jsxs("div",{style:De.rowMeta,children:[(ce==null?void 0:ce.mood)!=null?`Mood: ${N0[ce.mood]||ce.mood}`:"No mood set",Te>0?` · ${Te} bullet${Te===1?"":"s"}`:""]})]})]})})]}),t.jsx(pn,{title:"Spiritual",eyebrow:`${tr.length} chapter${tr.length===1?"":"s"} read overall`,onClick:()=>F("spiritual"),children:oe.length===0?t.jsx(Mn,{children:"No scriptures yet."}):t.jsxs(t.Fragment,{children:[hr.length>0&&t.jsx("div",{style:De.rows,children:hr.map(v=>t.jsxs("div",{style:De.row,children:[t.jsx("span",{style:{...De.dot,background:v.color||"#8268B0"}}),t.jsx("span",{style:De.rowName,children:v.title}),t.jsxs("span",{style:De.rowMeta,children:["read today · ",v.scripture]})]},v.id))}),t.jsx("div",{style:{...De.chipWrap,marginTop:hr.length?10:0},children:oe.map(v=>t.jsxs("span",{style:{...De.scripChip,borderColor:(v.color||"#8268B0")+"66",color:v.color||"#8268B0"},children:[v.name," · ",(v.chapters||[]).length]},v.id))}),hr.length===0&&t.jsx("div",{style:{...De.muted,paddingTop:8},children:"Nothing read today yet."})]})}),t.jsxs("div",{style:De.miniGrid,children:[t.jsx(Zs,{icon:zh,color:"#C9772E",label:"Kickstart",onClick:()=>F("kickstart"),main:We>0?`Watched ${Xs(We/60)}`:"Not watched yet",done:We>0,sub:`${W.length} video${W.length===1?"":"s"} lined up for ${rp()}`}),t.jsx(Zs,{icon:Eo,color:"#C9A227",label:"Affirmations",onClick:()=>F("affirmations"),main:Ye>0?`Read for ${Xs(Ye/60)}`:"Not read yet",done:Ye>0,sub:Ye>0?"Nice — keep affirming daily":"Open a card and read it aloud"}),t.jsx(Zs,{icon:fh,color:"#3A7CA5",label:"Meditation / Visualization",onClick:()=>F("mindscape"),main:wt>0?`Practiced ${Xs(wt/60)}`:"Not done yet",done:wt>0,sub:wt>0?"Session logged for today":"A few minutes still counts"}),t.jsx(Zs,{icon:Ig,color:"#8268B0",label:"Revision",onClick:()=>F("revision"),main:_.length?`${_.length} topic${_.length===1?"":"s"} due`:"All clear",done:_.length===0,sub:_.length?"Review them before the day ends":"No reviews pending today"})]})]}):t.jsx("div",{style:De.loading,children:"Loading…"})}function pn({title:e,eyebrow:r,onClick:n,children:o}){return t.jsxs("div",{style:De.card,children:[t.jsxs("div",{style:De.cardTitleRow,children:[t.jsxs("button",{onClick:n,style:De.cardTitleBtn,children:[e," ",t.jsx(Wy,{size:13})]}),r&&t.jsx("span",{style:De.cardEyebrow,children:r})]}),o]})}function Mn({children:e}){return t.jsx("div",{style:De.muted,children:e})}function op({items:e,fmt:r,max:n}){const o=Math.max(1,n||0,...e.map(i=>i.value));return t.jsx("div",{style:De.tbWrap,children:e.map((i,s)=>t.jsxs("div",{style:De.tbRow,children:[t.jsx("div",{style:De.tbLbl,children:i.label}),t.jsx("div",{style:De.tbTrack,children:t.jsx("div",{style:{...De.tbBar,width:`${i.value/o*100}%`,background:i.color}})}),t.jsx("div",{style:De.tbVal,children:r(i.value)})]},s))})}function ed({pct:e,label:r,sub:n,color:o}){const s=2*Math.PI*24,a=s*(1-Math.max(0,Math.min(100,e))/100);return t.jsxs("div",{style:De.ringStat,children:[t.jsxs("div",{style:De.ringBox,children:[t.jsxs("svg",{width:"64",height:"64",viewBox:"0 0 64 64",children:[t.jsx("circle",{cx:"32",cy:"32",r:24,fill:"none",stroke:"var(--border)",strokeWidth:"6"}),t.jsx("circle",{cx:"32",cy:"32",r:24,fill:"none",stroke:o,strokeWidth:"6",strokeLinecap:"round",strokeDasharray:s,strokeDashoffset:a,transform:"rotate(-90 32 32)",style:{transition:"stroke-dashoffset 0.5s ease"}})]}),t.jsxs("div",{style:{...De.ringPct,color:o},children:[e,"%"]})]}),t.jsxs("div",{children:[t.jsx("div",{style:De.ringLabel,children:r}),t.jsx("div",{style:De.ringSub,children:n})]})]})}function Ri({color:e,label:r,pct:n,val:o}){return t.jsxs("div",{style:De.pieLegRow,children:[t.jsx("span",{style:{...De.legendDot,background:e}}),t.jsx("span",{style:De.pieLegName,children:r}),t.jsxs("span",{style:De.pieLegPct,children:[Math.round(n),"%"]}),t.jsx("span",{style:De.pieLegMin,children:o})]})}function qs({icon:e,color:r,label:n,value:o,onClick:i}){return t.jsxs("button",{onClick:i,style:De.statTile,children:[t.jsx("div",{style:{...De.statIcon,background:`${r}1A`,color:r},children:t.jsx(e,{size:17})}),t.jsxs("div",{style:{minWidth:0},children:[t.jsx("div",{style:De.statVal,children:o}),t.jsx("div",{style:De.statLbl,children:n})]})]})}function H0({done:e,doneText:r="Done",pendingText:n="Pending"}){return t.jsx("span",{style:{...De.badge,color:e?"#4C9A6B":"#C2773B",background:e?"rgba(76,154,107,0.12)":"rgba(194,119,59,0.12)"},children:e?r:n})}function Zs({icon:e,color:r,label:n,main:o,sub:i,done:s,onClick:a}){return t.jsxs("button",{onClick:a,style:De.miniCard,children:[t.jsx("div",{style:{...De.statIcon,background:`${r}1A`,color:r},children:t.jsx(e,{size:16})}),t.jsx("div",{style:De.miniLabel,children:n}),t.jsx("div",{style:{...De.miniMain,color:s?"#4C9A6B":"var(--text-2)"},children:o}),t.jsx("div",{style:De.miniSub,children:i})]})}const De={loading:{padding:40,textAlign:"center",color:"var(--text-3)",fontFamily:"'Inter',system-ui,sans-serif"},page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:820,margin:"0 auto"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},statGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:10,marginBottom:14},statTile:{display:"flex",alignItems:"center",gap:10,border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,padding:"12px 14px",cursor:"pointer",fontFamily:"inherit",textAlign:"left",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},statIcon:{width:34,height:34,borderRadius:10,display:"grid",placeItems:"center",flexShrink:0},statVal:{fontSize:16,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},statLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginTop:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},card:{background:"var(--surface)",borderRadius:16,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:10,marginBottom:10,flexWrap:"wrap"},cardTitleBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"none",cursor:"pointer",padding:0,fontFamily:"'Fraunces',Georgia,serif",fontSize:16,fontWeight:700,color:"var(--text)"},cardEyebrow:{fontSize:12,fontWeight:700,color:"var(--text-3)"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"10px 0"},twoCol:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:14,marginBottom:0},rows:{display:"flex",flexDirection:"column",gap:2},row:{display:"flex",alignItems:"center",gap:8,padding:"7px 0",borderBottom:"1px solid var(--border)"},dot:{width:10,height:10,borderRadius:3,flexShrink:0},rowName:{flex:1,fontSize:13.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},rowMeta:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,flexShrink:0},badge:{fontSize:10.5,fontWeight:700,padding:"3px 9px",borderRadius:12,flexShrink:0,whiteSpace:"nowrap"},tbWrap:{display:"flex",flexDirection:"column",gap:7},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:78,fontSize:11.5,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap"},tbTrack:{flex:1,height:13,background:"var(--surface-2)",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:70,fontSize:11.5,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"},ringRow:{display:"flex",gap:14,flexWrap:"wrap",marginTop:14,paddingTop:12,borderTop:"1px solid var(--border)"},ringStat:{display:"flex",alignItems:"center",gap:10,flex:"1 1 150px"},ringBox:{position:"relative",width:64,height:64,display:"grid",placeItems:"center",flexShrink:0},ringPct:{position:"absolute",inset:0,display:"grid",placeItems:"center",fontSize:14,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},ringLabel:{fontSize:13,fontWeight:700,color:"var(--text)"},ringSub:{fontSize:11,color:"var(--text-3)",fontWeight:500,marginTop:1},pieWrap:{display:"flex",alignItems:"center",gap:20,flexWrap:"wrap"},pieChart:{position:"relative",width:110,height:110,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:66,height:66,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:12,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",maxWidth:62,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},pieHoleLbl:{fontSize:9.5,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:170,display:"flex",flexDirection:"column",gap:7},pieLegRow:{display:"flex",alignItems:"center",gap:8},legendDot:{width:10,height:10,borderRadius:3,flexShrink:0},pieLegName:{flex:1,fontSize:12.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},pieLegPct:{fontSize:12,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",width:38,textAlign:"right"},pieLegMin:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,minWidth:58,textAlign:"right"},miniTrack:{height:8,background:"var(--surface-2)",borderRadius:4,overflow:"hidden",marginTop:5},miniBar:{height:"100%",borderRadius:4,transition:"width 0.3s"},journalRow:{display:"flex",alignItems:"center",gap:12,padding:"4px 0"},chipWrap:{display:"flex",gap:7,flexWrap:"wrap"},scripChip:{border:"1px solid",borderRadius:14,padding:"4px 11px",fontSize:12,fontWeight:700,background:"var(--surface)"},miniGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(170px, 1fr))",gap:10,marginTop:14},miniCard:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:5,border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,padding:"12px 14px",cursor:"pointer",fontFamily:"inherit",textAlign:"left",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},miniLabel:{fontSize:12.5,fontWeight:700,color:"var(--text)"},miniMain:{fontSize:13,fontWeight:700},miniSub:{fontSize:11,color:"var(--text-3)",fontWeight:500,lineHeight:1.35}},G0=7e3;function kr(e,r,n){const[o,i]=c.useState([]),s=c.useRef({}),a=c.useCallback(async(g,m="Item")=>{await e(g),n();const f=`${g}-${Date.now()}`;i(h=>[...h,{id:f,itemId:g,label:m}]),s.current[f]=setTimeout(()=>{i(h=>h.filter(R=>R.id!==f)),delete s.current[f]},G0)},[e,n]),l=c.useCallback(async g=>{const m=o.find(f=>f.id===g);m&&(clearTimeout(s.current[g]),delete s.current[g],i(f=>f.filter(h=>h.id!==g)),await r(m.itemId),n())},[o,r,n]),d=c.useCallback(g=>{clearTimeout(s.current[g]),delete s.current[g],i(m=>m.filter(f=>f.id!==g))},[]);return{deleteItem:a,toasts:o,handleUndo:l,handleDismiss:d}}function wr({toasts:e,onUndo:r,onDismiss:n}){return t.jsx("div",{style:Oo.container,children:e.map(o=>t.jsx(U0,{toast:o,onUndo:r,onDismiss:n},o.id))})}function U0({toast:e,onUndo:r,onDismiss:n}){const[o,i]=c.useState(100);return c.useEffect(()=>{const s=Date.now(),a=7e3,l=setInterval(()=>{const d=Date.now()-s,g=Math.max(0,100-d/a*100);i(g),g===0&&clearInterval(l)},50);return()=>clearInterval(l)},[]),t.jsxs("div",{style:Oo.toast,children:[t.jsx("div",{style:{...Oo.bar,width:`${o}%`}}),t.jsxs("span",{style:Oo.msg,children:[e.label," deleted"]}),t.jsx("button",{style:Oo.undoBtn,onClick:()=>r(e.id),children:"Undo"}),t.jsx("button",{style:Oo.closeBtn,onClick:()=>n(e.id),children:"×"})]})}const Oo={container:{position:"fixed",bottom:24,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",gap:8,zIndex:999,pointerEvents:"none"},toast:{position:"relative",display:"flex",alignItems:"center",gap:12,background:"var(--accent-strong)",color:"#fff",borderRadius:10,padding:"12px 16px",fontSize:13.5,fontFamily:"'Inter', system-ui, sans-serif",boxShadow:"0 4px 20px rgba(0,0,0,0.25)",minWidth:260,overflow:"hidden",pointerEvents:"all"},bar:{position:"absolute",bottom:0,left:0,height:3,background:"#4C9A6B",transition:"width 0.05s linear",borderRadius:"0 0 0 10px"},msg:{flex:1,fontWeight:500},undoBtn:{border:"1px solid rgba(255,255,255,0.3)",background:"none",color:"#4C9A6B",fontWeight:700,fontSize:13,padding:"4px 10px",borderRadius:6,cursor:"pointer",fontFamily:"inherit"},closeBtn:{border:"none",background:"none",color:"rgba(255,255,255,0.5)",cursor:"pointer",fontSize:18,lineHeight:1,padding:"0 2px"}},bn={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},V0=[{id:"Q1",symbol:"™",title:"Do Now",sub:"Important · Urgent",accent:"#C2536B"},{id:"Q2",symbol:"©",title:"Schedule",sub:"Important · Not Urgent",accent:"#3A7CA5"},{id:"Q3",symbol:"®",title:"Delegate",sub:"Not Important · Urgent",accent:"#C9A227"},{id:"Q4",symbol:"•",title:"Drop",sub:"Not Important · Not Urgent",accent:"#8A8780"}];function _h(){return new Date().toLocaleDateString("en-CA",{timeZone:"Asia/Kolkata"})}function $h(){const e=new Date(new Date().toLocaleString("en-US",{timeZone:"Asia/Kolkata"})),n=e.getMinutes()<30?30:0,o=n===0?e.getHours()+1:e.getHours();return`${String(o%24).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function ip(e,r){const[n,o]=e.split(":").map(Number),i=n*60+o+r;return`${String(Math.floor(i/60)%24).padStart(2,"0")}:${String(i%60).padStart(2,"0")}`}function Y0(e){return e?new Date(e).toLocaleString("en-IN",{timeZone:"Asia/Kolkata",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit",hour12:!0}):""}const Js=()=>({title:"",pillar:"Financial",est:30,date:_h(),startTime:$h()});function K0(){const[e,r]=c.useState([]),[n,o]=c.useState([]),[i,s]=c.useState("All"),[a,l]=c.useState(null),[d,g]=c.useState(null),[m,f]=c.useState(Js()),[h,R]=c.useState(null),[B,T]=c.useState(Js()),z=c.useCallback(()=>M.getTasks().then(r).catch(console.error),[]);c.useEffect(()=>{z(),M.getGoals().then(H=>o(H.filter(P=>P.horizon==="Weekly"))).catch(()=>{})},[z]);const b=Object.keys(bn),p=n.filter(H=>i==="All"||H.pillar===i),u=n.find(H=>H.id===a)||null,j=e.filter(H=>a!=null?H.goal_id===a:i!=="All"?H.pillar===i:!0),k=H=>{s(H),l(null),g(null),f(P=>({...P,pillar:H==="All"?"Financial":H}))},C=H=>{l(H),g(null);const P=n.find(ae=>ae.id===H);P&&f(ae=>({...ae,pillar:P.pillar}))},{deleteItem:D,toasts:x,handleUndo:y,handleDismiss:_}=kr(M.deleteTask,M.restoreTask,z),Z=H=>j.filter(P=>P.quadrant===H),ne=H=>Z(H).reduce((P,ae)=>P+ae.time_estimate_min,0),ue=H=>H>=60?`${Math.floor(H/60)}h${H%60?` ${H%60}m`:""}`:`${H}m`,A=async H=>{if(!m.title.trim())return;const P=m.date&&m.startTime?`${m.date}T${m.startTime}:00`:null;await M.createTask({pillar:u?u.pillar:m.pillar,title:m.title,quadrant:H,time_estimate_min:Number(m.est)||30,start_datetime:P,goal_id:a??null}),f(Js()),g(null),z()},K=(H,P)=>D(H,P),oe=H=>{const P=H.start_datetime?H.start_datetime.split("T"):[];R(H.id),g(null),T({title:H.title,pillar:H.pillar,est:H.time_estimate_min,date:P[0]||_h(),startTime:(P[1]||"").slice(0,5)||$h()})},ye=async H=>{if(!B.title.trim())return;const P=B.date&&B.startTime?`${B.date}T${B.startTime}:00`:null;await M.updateTask(H.id,{title:B.title.trim(),pillar:B.pillar,time_estimate_min:Number(B.est)||30,start_datetime:P}),R(null),z()},X=c.useRef(null),Y=c.useRef(null),[ce,J]=c.useState(null),I=(H,P)=>{var me;const ae=document.elementFromPoint(H,P);return ae&&ae.closest&&((me=ae.closest("[data-quad]"))==null?void 0:me.getAttribute("data-quad"))||null};c.useEffect(()=>{const H=ae=>{const me=X.current;if(!me)return;const Ne=Math.hypot(ae.clientX-me.startX,ae.clientY-me.startY);if(!me.active){if(me.pointerType!=="mouse"){Ne>12&&(clearTimeout(Y.current),X.current=null);return}if(Ne<6)return;me.active=!0,document.body.style.userSelect="none"}ae.cancelable&&ae.preventDefault(),me.overQ=I(ae.clientX,ae.clientY),J({id:me.task.id,title:me.task.title,x:ae.clientX,y:ae.clientY,overQ:me.overQ})},P=()=>{clearTimeout(Y.current);const ae=X.current;X.current=null,document.body.style.userSelect="",document.body.style.touchAction="",J(null),ae&&ae.active&&ae.overQ&&ae.overQ!==ae.task.quadrant&&M.updateTask(ae.task.id,{quadrant:ae.overQ}).then(z).catch(()=>{})};return window.addEventListener("pointermove",H,{passive:!1}),window.addEventListener("pointerup",P),window.addEventListener("pointercancel",P),()=>{window.removeEventListener("pointermove",H),window.removeEventListener("pointerup",P),window.removeEventListener("pointercancel",P)}},[z]);const $=(H,P)=>{H.pointerType==="mouse"&&H.button!==0||(X.current={task:P,startX:H.clientX,startY:H.clientY,active:!1,pointerType:H.pointerType,overQ:null},H.pointerType!=="mouse"&&(Y.current=setTimeout(()=>{const ae=X.current;ae&&(ae.active=!0,document.body.style.touchAction="none",J({id:ae.task.id,title:ae.task.title,x:ae.startX,y:ae.startY,overQ:ae.task.quadrant}))},280)))};return t.jsxs("div",{style:Ee.page,children:[t.jsxs("div",{style:Ee.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:Ee.eyebrow,children:"Anvil · Weekly Routing"}),t.jsx("h1",{style:Ee.h1,children:"Weekly Routing"})]}),t.jsx("div",{style:Ee.headRight,children:t.jsx("div",{style:Ee.legend,children:Object.entries(bn).map(([H,P])=>t.jsxs("span",{style:Ee.legendItem,children:[t.jsx("span",{style:{...Ee.dot,background:P.dot}}),H]},H))})})]}),t.jsx("div",{style:Ee.filterBar,children:["All",...b].map(H=>{const P=i===H,ae=bn[H];return t.jsxs("button",{onClick:()=>k(H),style:{...Ee.pillChip,...P?ae?{background:ae.dot,color:"#fff",borderColor:ae.dot}:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"}:{}},children:[ae&&t.jsx("span",{style:{...Ee.dot,background:P?"#fff":ae.dot}}),H==="All"?"All":H]},H)})}),t.jsxs("div",{style:Ee.goalBar,children:[t.jsx("button",{onClick:()=>l(null),style:{...Ee.goalChip,...a==null?Ee.goalChipOn:{}},children:"All goals"}),p.map(H=>{var me;const P=((me=bn[H.pillar])==null?void 0:me.dot)||"#9A968C",ae=a===H.id;return t.jsxs("button",{onClick:()=>C(H.id),style:{...Ee.goalChip,...ae?{background:P,color:"#fff",borderColor:P}:{}},title:H.title,children:[t.jsx("span",{style:{...Ee.dot,background:ae?"#fff":P}}),t.jsx("span",{style:Ee.goalChipText,children:H.title})]},H.id)}),p.length===0&&t.jsxs("span",{style:Ee.goalEmpty,children:["No weekly goals",i!=="All"?` for ${i}`:""," — create them in Goals."]})]}),t.jsx("div",{style:Ee.grid,children:V0.map(H=>{var P,ae;return t.jsxs("section",{"data-quad":H.id,style:{...Ee.quad,borderTop:`3px solid ${H.accent}`,...ce&&ce.overQ===H.id&&ce.overQ!==((P=e.find(me=>me.id===ce.id))==null?void 0:P.quadrant)?{outline:`2px dashed ${H.accent}`,outlineOffset:2,background:"var(--hover)"}:{}},children:[t.jsxs("header",{style:Ee.quadHead,children:[t.jsxs("div",{style:Ee.quadTitleRow,children:[t.jsx("span",{style:{...Ee.symbol,color:H.accent},children:H.symbol}),t.jsxs("div",{children:[t.jsx("div",{style:Ee.quadTitle,children:H.title}),t.jsx("div",{style:Ee.quadSub,children:H.sub})]})]}),t.jsx("span",{style:Ee.quadTotal,children:ue(ne(H.id))})]}),t.jsxs("div",{style:Ee.list,children:[Z(H.id).map(me=>{const Ne=bn[me.pillar]||bn.Financial;return h===me.id?t.jsxs("div",{style:Ee.addBox,children:[t.jsx("input",{autoFocus:!0,placeholder:"Task title",value:B.title,onChange:Q=>T({...B,title:Q.target.value}),onKeyDown:Q=>Q.key==="Enter"&&ye(me),style:Ee.input}),t.jsxs("div",{style:Ee.dateTimeRow,children:[t.jsxs("div",{style:Ee.dateTimeGroup,children:[t.jsx("label",{style:Ee.dtLabel,children:"Date"}),t.jsx("input",{type:"date",value:B.date,onChange:Q=>T({...B,date:Q.target.value}),style:Ee.dtInput})]}),t.jsxs("div",{style:Ee.dateTimeGroup,children:[t.jsx("label",{style:Ee.dtLabel,children:"Start"}),t.jsx("input",{type:"time",value:B.startTime,onChange:Q=>T({...B,startTime:Q.target.value}),style:Ee.dtInput})]}),t.jsxs("div",{style:Ee.dateTimeGroup,children:[t.jsx("label",{style:Ee.dtLabel,children:"End"}),t.jsx("div",{style:Ee.dtEndValue,children:ip(B.startTime,Number(B.est)||30)})]})]}),t.jsxs("div",{style:Ee.addRow,children:[t.jsx("select",{value:B.pillar,onChange:Q=>T({...B,pillar:Q.target.value}),style:Ee.select,children:Object.keys(bn).map(Q=>t.jsx("option",{children:Q},Q))}),t.jsx("input",{type:"number",value:B.est,onChange:Q=>T({...B,est:Q.target.value}),style:{...Ee.input,width:60}}),t.jsx("span",{style:Ee.minLabel,children:"min"}),t.jsx("button",{onClick:()=>ye(me),style:Ee.saveBtn,children:t.jsx(He,{size:14})}),t.jsx("button",{onClick:()=>R(null),style:Ee.cancelBtn,children:t.jsx(Fe,{size:14})})]})]},me.id):t.jsxs("div",{onPointerDown:Q=>$(Q,me),style:{...Ee.card,background:Ne.soft,cursor:"grab",touchAction:"pan-y",...(ce==null?void 0:ce.id)===me.id?{opacity:.4}:{}},children:[t.jsx("span",{style:{...Ee.cardBar,background:Ne.dot}}),t.jsxs("div",{style:Ee.cardBody,children:[t.jsx("div",{style:Ee.cardTitle,children:me.title}),me.start_datetime&&t.jsxs("div",{style:Ee.eventTime,children:[t.jsx(Uy,{size:10}),Y0(me.start_datetime)]}),t.jsxs("div",{style:Ee.cardMeta,children:[t.jsxs("span",{style:Ee.metaPill,children:[t.jsx("span",{style:{...Ee.dot,background:Ne.dot,width:7,height:7}}),me.pillar]}),t.jsxs("span",{style:Ee.metaPill,children:[t.jsx(bh,{size:11})," ",ue(me.time_estimate_min)]})]})]}),t.jsxs("div",{style:Ee.cardActions,children:[t.jsx("button",{onClick:()=>oe(me),onPointerDown:Q=>Q.stopPropagation(),style:Ee.delBtn,title:"Edit",children:t.jsx(jt,{size:12})}),t.jsx("button",{onClick:()=>K(me.id,me.title),onPointerDown:Q=>Q.stopPropagation(),style:Ee.delBtn,children:t.jsx(Fe,{size:13})})]})]},me.id)}),d===H.id?t.jsxs("div",{style:Ee.addBox,children:[t.jsx("input",{autoFocus:!0,placeholder:"Task title",value:m.title,onChange:me=>f({...m,title:me.target.value}),onKeyDown:me=>me.key==="Enter"&&A(H.id),style:Ee.input}),t.jsxs("div",{style:Ee.dateTimeRow,children:[t.jsxs("div",{style:Ee.dateTimeGroup,children:[t.jsx("label",{style:Ee.dtLabel,children:"Date"}),t.jsx("input",{type:"date",value:m.date,onChange:me=>f({...m,date:me.target.value}),style:Ee.dtInput})]}),t.jsxs("div",{style:Ee.dateTimeGroup,children:[t.jsx("label",{style:Ee.dtLabel,children:"Start"}),t.jsx("input",{type:"time",value:m.startTime,onChange:me=>f({...m,startTime:me.target.value}),style:Ee.dtInput})]}),t.jsxs("div",{style:Ee.dateTimeGroup,children:[t.jsx("label",{style:Ee.dtLabel,children:"End"}),t.jsx("div",{style:Ee.dtEndValue,children:ip(m.startTime,Number(m.est)||30)})]})]}),t.jsxs("div",{style:Ee.addRow,children:[u?t.jsxs("span",{style:Ee.goalPillarTag,children:[t.jsx("span",{style:{...Ee.dot,background:(ae=bn[u.pillar])==null?void 0:ae.dot}})," ",u.pillar]}):t.jsx("select",{value:m.pillar,onChange:me=>f({...m,pillar:me.target.value}),style:Ee.select,children:Object.keys(bn).map(me=>t.jsx("option",{children:me},me))}),t.jsx("input",{type:"number",value:m.est,onChange:me=>f({...m,est:me.target.value}),style:{...Ee.input,width:60}}),t.jsx("span",{style:Ee.minLabel,children:"min"}),t.jsx("button",{onClick:()=>A(H.id),style:Ee.saveBtn,children:t.jsx(He,{size:14})}),t.jsx("button",{onClick:()=>{g(null),f(Js())},style:Ee.cancelBtn,children:t.jsx(Fe,{size:14})})]})]}):t.jsxs("button",{onClick:()=>g(H.id),style:Ee.addTrigger,children:[t.jsx(bt,{size:13})," Add task"]})]})]},H.id)})}),ce&&t.jsx("div",{style:{...Ee.dragClone,left:ce.x+12,top:ce.y+12},children:ce.title}),t.jsx(wr,{toasts:x,onUndo:y,onDismiss:_})]})}const Ee={page:{fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:16,marginBottom:22},headRight:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:10},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces', Georgia, serif"},legend:{display:"flex",gap:14,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"var(--text-2)",fontWeight:500},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},filterBar:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:10},pillChip:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},goalBar:{display:"flex",gap:7,flexWrap:"wrap",alignItems:"center",marginBottom:18,paddingBottom:14,borderBottom:"1px solid var(--border)"},goalChip:{display:"inline-flex",alignItems:"center",gap:6,maxWidth:220,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},goalChipOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},goalChipText:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},goalEmpty:{fontSize:12,color:"var(--text-3)",fontStyle:"italic"},goalPillarTag:{display:"inline-flex",alignItems:"center",gap:6,fontSize:12.5,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"7px 10px",borderRadius:6,flex:1},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:16},quad:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.06)"},quadHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14},quadTitleRow:{display:"flex",gap:10,alignItems:"center"},symbol:{fontSize:20,lineHeight:1},quadTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em"},quadSub:{fontSize:11,color:"var(--text-3)",marginTop:1,letterSpacing:"0.02em"},quadTotal:{fontSize:12,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"3px 9px",borderRadius:20},list:{display:"flex",flexDirection:"column",gap:8},card:{display:"flex",alignItems:"stretch",gap:10,borderRadius:9,padding:"10px 10px 10px 0",overflow:"hidden"},cardBar:{width:3,borderRadius:3,flexShrink:0},cardBody:{flex:1,minWidth:0},cardTitle:{fontSize:13.5,fontWeight:500,lineHeight:1.35,marginBottom:4},eventTime:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"#3A7CA5",fontWeight:500,marginBottom:5},cardMeta:{display:"flex",gap:8,flexWrap:"wrap"},metaPill:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"var(--text-2)",fontWeight:500},cardActions:{display:"flex",flexDirection:"column",gap:4,alignSelf:"center",flexShrink:0},delBtn:{width:30,height:30,borderRadius:8,border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center"},addTrigger:{display:"flex",alignItems:"center",gap:5,fontSize:12.5,color:"var(--text-3)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"8px 10px",cursor:"pointer",fontWeight:500,marginTop:2},addBox:{border:"1px solid var(--border)",borderRadius:9,padding:10,display:"flex",flexDirection:"column",gap:8},dateTimeRow:{display:"flex",gap:8,alignItems:"flex-end"},dateTimeGroup:{display:"flex",flexDirection:"column",gap:3,flex:1},dtLabel:{fontSize:10,fontWeight:600,color:"var(--text-3)",letterSpacing:"0.08em",textTransform:"uppercase"},dtInput:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},dtEndValue:{border:"1px solid var(--border)",borderRadius:6,padding:"6px 8px",fontSize:12.5,color:"var(--text-2)",background:"var(--bg)"},addRow:{display:"flex",alignItems:"center",gap:6},input:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",flex:1,minWidth:0},select:{border:"1px solid var(--border)",borderRadius:6,padding:"7px 8px",fontSize:12.5,fontFamily:"inherit",flex:1},minLabel:{fontSize:11,color:"var(--text-3)"},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center"},dragClone:{position:"fixed",zIndex:1e3,pointerEvents:"none",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:8,padding:"8px 12px",fontSize:13,fontWeight:600,color:"var(--text)",boxShadow:"0 8px 24px rgba(0,0,0,0.25)",maxWidth:220,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},Wr={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},Di=Object.keys(Wr),Ta=["Yearly","Quarterly","Monthly","Weekly"],on=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],sp=[{label:"Q1 · Jan–Mar",startMonth:0},{label:"Q2 · Apr–Jun",startMonth:3},{label:"Q3 · Jul–Sep",startMonth:6},{label:"Q4 · Oct–Dec",startMonth:9}],Ia=new Date().getFullYear(),Wo=Array.from({length:8},(e,r)=>Ia-1+r);function Q0(e=720){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const _i=864e5,Yt=30,es=190,Mo=e=>new Date(e+"T00:00:00"),ap=e=>e.toLocaleDateString("en-US",{month:"short",day:"numeric"}),X0=[{key:"yearly",label:"Yearly",horizons:["Yearly"]},{key:"quarterly",label:"Quarterly",horizons:["Quarterly"]},{key:"mw",label:"Monthly & Weekly",horizons:["Monthly","Weekly"]}],lp={Yearly:"Yr",Quarterly:"Q",Monthly:"Mo",Weekly:"Wk"},q0={Yearly:"Y",Quarterly:"Q",Monthly:"M",Weekly:"W"},dp={Yearly:0,Quarterly:1,Monthly:2,Weekly:3},td=e=>Ta[Math.min(Ta.indexOf(e)+1,Ta.length-1)],ea=e=>{if(!e||!e.start_date)return Array.from({length:12},(a,l)=>l);const r=new Date(e.start_date+"T00:00:00"),n=new Date(e.end_date+"T00:00:00"),o=r.getFullYear(),i=r.getMonth(),s=n.getFullYear()>o?11:n.getMonth();return Array.from({length:s-i+1},(a,l)=>i+l)},Ai=e=>new Date(e+"T00:00:00").getFullYear(),Ph=(e,r,n)=>{const o=(n-1)*7+1,i=Math.min(o+6,new Date(e,r+1,0).getDate()),s=String(r+1).padStart(2,"0");return{start_date:`${e}-${s}-${String(o).padStart(2,"0")}`,end_date:`${e}-${s}-${String(i).padStart(2,"0")}`}},cp=(e,r,n,o=1)=>{const i=r;switch(e){case"Yearly":return{start_date:`${i}-01-01`,end_date:`${i}-12-31`};case"Quarterly":{const s=Math.floor(n/3)*3,a=s+1,l=s+3,d=new Date(i,l,0).getDate();return{start_date:`${i}-${String(a).padStart(2,"0")}-01`,end_date:`${i}-${String(l).padStart(2,"0")}-${d}`}}case"Monthly":{const s=new Date(i,n+1,0).getDate();return{start_date:`${i}-${String(n+1).padStart(2,"0")}-01`,end_date:`${i}-${String(n+1).padStart(2,"0")}-${s}`}}case"Weekly":return Ph(i,n,o);default:return{start_date:`${i}-01-01`,end_date:`${i}-12-31`}}},ts=(e,r)=>{const n=new Date(e+"T00:00:00");return n.setDate(n.getDate()+r),`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`},rl=(e,r)=>Math.round((new Date(r+"T00:00:00")-new Date(e+"T00:00:00"))/_i)+1,Z0=(e,r,n)=>{if(!n||!n.start_date||!n.end_date)return{start_date:e,end_date:r,clamped:!1};const o=rl(e,r);let i=e,s=r,a=!1;return i<n.start_date&&(i=n.start_date,s=ts(i,o-1),a=!0),s>n.end_date&&(s=n.end_date,i=ts(s,-(o-1)),a=!0,i<n.start_date&&(i=n.start_date)),{start_date:i,end_date:s,clamped:a}},J0=(e,r)=>new Date(e,r+1,0).getDate(),vc=e=>{const r=new Date(e.start_date+"T00:00:00");if(e.horizon==="Monthly")return J0(r.getFullYear(),r.getMonth());if(e.horizon==="Weekly"){const n=Math.min(Math.max(Math.ceil(r.getDate()/7),1),4),o=Ph(r.getFullYear(),r.getMonth(),n);return rl(o.start_date,o.end_date)}return rl(e.start_date,e.end_date)},gp=e=>Math.round(vc(e)*1.5),ev=e=>e.horizon==="Monthly"||e.horizon==="Weekly",tv=e=>{if(!e.start_date)return"";const r=new Date(e.start_date+"T00:00:00"),n=r.getMonth();switch(e.horizon){case"Yearly":{const o=e.end_date?new Date(e.end_date+"T00:00:00").getFullYear():r.getFullYear();return o>r.getFullYear()?`${r.getFullYear()}–${o}`:`${r.getFullYear()}`}case"Quarterly":return`Q${Math.floor(n/3)+1} ${r.getFullYear()}`;case"Monthly":return`${on[n]} ${r.getFullYear()}`;case"Weekly":return`${on[n]} W${Math.ceil(r.getDate()/7)}`;default:return""}};function rv(){const[e,r]=c.useState([]),[n,o]=c.useState("All"),[i,s]=c.useState({}),[a,l]=c.useState({}),[d,g]=c.useState(null),[m,f]=c.useState(""),[h,R]=c.useState(0),[B,T]=c.useState(1),[z,b]=c.useState(Ia),[p,u]=c.useState(Ia),[j,k]=c.useState("Yearly"),[C,D]=c.useState(Di[0]),[x,y]=c.useState(null),_=Q0(),[Z,ne]=c.useState(!_),[ue,A]=c.useState("day"),[K,oe]=c.useState(null),ye=c.useRef(null);c.useEffect(()=>{ye.current=K},[K]);const X=c.useRef(e);c.useEffect(()=>{X.current=e},[e]);const[Y,ce]=c.useState(null),J=c.useRef(null);c.useEffect(()=>{J.current=Y},[Y]);const I=c.useRef(null),$=c.useRef(0),[H,P]=c.useState(null),ae=c.useRef(null),me=c.useCallback(F=>{P(F),clearTimeout(ae.current),ae.current=setTimeout(()=>P(null),2800)},[]),[Ne,Q]=c.useState(null),re=c.useRef(null),[G,le]=c.useState(null),[E,S]=c.useState(null),ie=(F,ee)=>{if(G===ee){le(null);return}const Ie=F.currentTarget.getBoundingClientRect(),v=Ie.bottom+220<window.innerHeight;S({right:Math.max(8,window.innerWidth-Ie.right),...v?{top:Ie.bottom+4}:{bottom:window.innerHeight-Ie.top+4}}),le(ee)},fe=F=>{clearTimeout(re.current),re.current=setTimeout(()=>Q(F),350)},U=()=>{clearTimeout(re.current),Q(null)},xe=c.useCallback(()=>{M.getGoals().then(r).catch(console.error)},[]);c.useEffect(()=>{xe()},[xe]);const{deleteItem:ve,toasts:Ae,handleUndo:tt,handleDismiss:ft}=kr(M.deleteGoal,M.restoreGoal,xe),_e=c.useCallback(async()=>{const F=ye.current;if(oe(null),!F)return;const ee=Math.round(F.dx/(F.pxPerDay||Yt));if(!ee)return;let Ie=ts(F.g.start_date,ee),v=ts(F.g.end_date,ee);if(F.g.parent_goal_id){const be=X.current.find($e=>$e.id===F.g.parent_goal_id),Be=Z0(Ie,v,be);Be.clamped&&me(`Can't move past "${(be==null?void 0:be.title)||"parent goal"}" — kept within its dates.`),Ie=Be.start_date,v=Be.end_date}(Ie!==F.g.start_date||v!==F.g.end_date)&&(await M.updateGoal(F.g.id,{pillar:F.g.pillar,start_date:Ie,end_date:v}),xe())},[xe,me]),it=!!K;c.useEffect(()=>{if(!it)return;const F=Be=>{$.current=Be.clientX,oe($e=>$e&&{...$e,dx:Be.clientX-$e.startX})},ee=()=>_e();window.addEventListener("pointermove",F),window.addEventListener("pointerup",ee);const Ie=44,v=16,be=setInterval(()=>{const Be=I.current;if(!Be)return;const $e=Be.getBoundingClientRect(),Je=$.current;let we=0;if(Je<$e.left+Ie?we=-1:Je>$e.right-Ie&&(we=1),!we)return;const Et=Be.scrollLeft;Be.scrollLeft=Math.max(0,Math.min(Et+we*v,Be.scrollWidth-Be.clientWidth));const pt=Be.scrollLeft-Et;pt&&oe(nt=>nt&&{...nt,startX:nt.startX-pt,dx:Je-(nt.startX-pt)})},16);return()=>{window.removeEventListener("pointermove",F),window.removeEventListener("pointerup",ee),clearInterval(be)}},[it,_e]);const Ze=c.useCallback(async()=>{const F=J.current;if(ce(null),!F)return;const ee=F.g,Ie=vc(ee),v=gp(ee),be=Math.max(Ie,Math.min(v,rl(ee.start_date,ee.end_date)+Math.round(F.dx/Yt)));let Be=ts(ee.start_date,be-1);if(ee.parent_goal_id){const $e=X.current.find(Je=>Je.id===ee.parent_goal_id);$e!=null&&$e.end_date&&Be>$e.end_date&&(Be=$e.end_date,me(`Can't extend past "${($e==null?void 0:$e.title)||"parent goal"}" — kept within its dates.`))}Be!==ee.end_date&&Be>=ee.start_date&&(await M.updateGoal(ee.id,{end_date:Be}),xe())},[xe,me]),st=!!Y;c.useEffect(()=>{if(!st)return;const F=Ie=>ce(v=>v&&{...v,dx:Ie.clientX-v.startX}),ee=()=>Ze();return window.addEventListener("pointermove",F),window.addEventListener("pointerup",ee),()=>{window.removeEventListener("pointermove",F),window.removeEventListener("pointerup",ee)}},[st,Ze]);const de=n==="All",Me=Wr[n]||{dot:"var(--text-3)"},lt=de?e:e.filter(F=>F.pillar===n),dt=lt.filter(F=>!F.parent_goal_id),kt=F=>lt.filter(ee=>ee.parent_goal_id===F),Nt=F=>l(ee=>({...ee,[F]:!ee[F]})),Xt=F=>F.horizon==="Monthly"||F.horizon==="Weekly",Bt=F=>i[F.id]!==void 0?i[F.id]:Xt(F),Vt=F=>s(ee=>({...ee,[F.id]:!Bt(F)})),Ot=(F,ee=null)=>{g(F),f(""),T(1);const Ie=ee?Ai(ee.start_date):Ia;b(Ie),u(Ie),F==="ROOT"&&D(de?Di[0]:n);const v=F==="ROOT"?"Yearly":td(ee==null?void 0:ee.horizon);k(v);const be=F==="ROOT"?Array.from({length:12},(Be,$e)=>$e):ea(ee);R(v==="Quarterly"?Math.floor(be[0]/3)*3:be[0]??0)},mr=async(F,ee)=>{if(!m.trim())return;const Ie=(ee==null?void 0:ee.horizon)??null,v=F==="ROOT"?j:td(Ie),be=F==="ROOT"?C:(ee==null?void 0:ee.pillar)||n;let Be,$e;if(v==="Yearly"){const Je=Number(z),we=Math.max(Je,Number(p)||Je);Be=`${Je}-01-01`,$e=`${we}-12-31`}else{const Je=ee?Ai(ee.start_date):Number(z);({start_date:Be,end_date:$e}=cp(v,Je,h,B))}await M.createGoal({pillar:be,title:m.trim(),horizon:v,parent_goal_id:F==="ROOT"?null:F,start_date:Be,end_date:$e}),F!=="ROOT"&&l(Je=>({...Je,[F]:!0})),g(null),f(""),xe()},Ge=F=>{const ee=F.start_date?new Date(F.start_date+"T00:00:00"):new Date,Ie=ee.getMonth(),v=Math.min(Math.max(Math.ceil(ee.getDate()/7),1),4);y({id:F.id,title:F.title,pillar:F.pillar,horizon:F.horizon,parentGoal:e.find(be=>be.id===F.parent_goal_id)||null,year:Ai(F.start_date),endYear:Ai(F.end_date),month:F.horizon==="Quarterly"?Math.floor(Ie/3)*3:Ie,week:v})},ot=async()=>{if(!x||!x.title.trim())return;let F,ee;if(x.horizon==="Yearly"){const Ie=Number(x.year),v=Math.max(Ie,Number(x.endYear)||Ie);F=`${Ie}-01-01`,ee=`${v}-12-31`}else{let Ie=x.month;x.horizon==="Weekly"&&x.parentGoal&&(Ie=ea(x.parentGoal)[0]);const v=x.parentGoal?Ai(x.parentGoal.start_date):Number(x.year);({start_date:F,end_date:ee}=cp(x.horizon,v,Ie,x.week))}await M.updateGoal(x.id,{title:x.title.trim(),pillar:x.pillar,start_date:F,end_date:ee}),y(null),xe()},xt=({parentId:F,parentGoal:ee,depth:Ie})=>{const v=F==="ROOT",be=v?j:td((ee==null?void 0:ee.horizon)??null),Be=v?Array.from({length:12},(we,Et)=>Et):ea(ee),$e=sp.filter(we=>Be.includes(we.startMonth)),Je=we=>{k(we),R(0),T(1),u(z)};return t.jsxs("div",{style:{...he.addBox,marginLeft:Ie*24},children:[t.jsx("input",{autoFocus:!0,placeholder:`New ${be.toLowerCase()} goal…`,value:m,onChange:we=>f(we.target.value),onKeyDown:we=>{we.key==="Enter"&&mr(F,ee),we.key==="Escape"&&g(null)},style:he.input}),v&&de&&t.jsx("select",{value:C,onChange:we=>D(we.target.value),style:he.monthSelect,title:"Pillar",children:Di.map(we=>t.jsx("option",{value:we,children:we},we))}),v&&t.jsx("select",{value:j,onChange:we=>Je(we.target.value),style:he.monthSelect,title:"Goal level",children:Ta.map(we=>t.jsx("option",{value:we,children:we},we))}),be==="Yearly"&&t.jsxs(t.Fragment,{children:[t.jsx("select",{value:z,onChange:we=>{const Et=Number(we.target.value);b(Et),p<Et&&u(Et)},style:he.monthSelect,title:"Start year",children:Wo.map(we=>t.jsx("option",{value:we,children:we},we))}),t.jsx("span",{style:he.toTag,children:"to"}),t.jsx("select",{value:p,onChange:we=>u(Number(we.target.value)),style:he.monthSelect,title:"End year (spans multiple years)",children:Wo.filter(we=>we>=z).map(we=>t.jsx("option",{value:we,children:we},we))})]}),be!=="Yearly"&&v&&t.jsx("select",{value:z,onChange:we=>b(Number(we.target.value)),style:he.monthSelect,title:"Year",children:Wo.map(we=>t.jsx("option",{value:we,children:we},we))}),be==="Quarterly"&&t.jsx("select",{value:h,onChange:we=>R(Number(we.target.value)),style:he.monthSelect,children:$e.map(we=>t.jsx("option",{value:we.startMonth,children:we.label},we.startMonth))}),be==="Monthly"&&t.jsx("select",{value:h,onChange:we=>R(Number(we.target.value)),style:he.monthSelect,children:Be.map(we=>t.jsx("option",{value:we,children:on[we]},we))}),be==="Weekly"&&t.jsxs(t.Fragment,{children:[v?t.jsx("select",{value:h,onChange:we=>R(Number(we.target.value)),style:he.monthSelect,children:Be.map(we=>t.jsx("option",{value:we,children:on[we]},we))}):t.jsx("span",{style:he.inheritTag,children:on[Be[0]]}),t.jsx("select",{value:B,onChange:we=>T(Number(we.target.value)),style:he.monthSelect,children:[1,2,3,4].map(we=>t.jsxs("option",{value:we,children:["Week ",we]},we))})]}),t.jsx("button",{onClick:()=>mr(F,ee),style:he.saveBtn,children:t.jsx(He,{size:14})}),t.jsx("button",{onClick:()=>g(null),style:he.cancelBtn,children:t.jsx(Fe,{size:14})})]})},ut=({goal:F,depth:ee})=>{var $e,Je,we,Et,pt;const Ie=kt(F.id),v=a[F.id],be=F.horizon!=="Weekly";if((x==null?void 0:x.id)===F.id){const nt=ea(x.parentGoal),un=sp.filter(Ve=>nt.includes(Ve.startMonth)),En=!x.parentGoal;return t.jsxs("div",{style:{...he.editBox,marginLeft:ee*24},children:[t.jsx("input",{autoFocus:!0,value:x.title,onChange:Ve=>y({...x,title:Ve.target.value}),onKeyDown:Ve=>Ve.key==="Enter"&&ot(),style:{...he.input,flex:1}}),t.jsx("select",{value:x.pillar,onChange:Ve=>y({...x,pillar:Ve.target.value}),style:he.monthSelect,children:Di.map(Ve=>t.jsx("option",{children:Ve},Ve))}),x.horizon==="Yearly"&&t.jsxs(t.Fragment,{children:[t.jsx("select",{value:x.year,onChange:Ve=>{const Fn=Number(Ve.target.value);y({...x,year:Fn,endYear:Math.max(Fn,x.endYear)})},style:he.monthSelect,title:"Start year",children:Wo.map(Ve=>t.jsx("option",{value:Ve,children:Ve},Ve))}),t.jsx("span",{style:he.toTag,children:"to"}),t.jsx("select",{value:x.endYear,onChange:Ve=>y({...x,endYear:Number(Ve.target.value)}),style:he.monthSelect,title:"End year (spans multiple years)",children:Wo.filter(Ve=>Ve>=x.year).map(Ve=>t.jsx("option",{value:Ve,children:Ve},Ve))})]}),x.horizon!=="Yearly"&&En&&t.jsx("select",{value:x.year,onChange:Ve=>y({...x,year:Number(Ve.target.value)}),style:he.monthSelect,title:"Year",children:Wo.map(Ve=>t.jsx("option",{value:Ve,children:Ve},Ve))}),x.horizon==="Quarterly"&&t.jsx("select",{value:x.month,onChange:Ve=>y({...x,month:Number(Ve.target.value)}),style:he.monthSelect,children:un.map(Ve=>t.jsx("option",{value:Ve.startMonth,children:Ve.label},Ve.startMonth))}),x.horizon==="Monthly"&&t.jsx("select",{value:x.month,onChange:Ve=>y({...x,month:Number(Ve.target.value)}),style:he.monthSelect,children:nt.map(Ve=>t.jsx("option",{value:Ve,children:on[Ve]},Ve))}),x.horizon==="Weekly"&&t.jsxs(t.Fragment,{children:[En?t.jsx("select",{value:x.month,onChange:Ve=>y({...x,month:Number(Ve.target.value)}),style:he.monthSelect,children:nt.map(Ve=>t.jsx("option",{value:Ve,children:on[Ve]},Ve))}):t.jsx("span",{style:he.inheritTag,children:on[nt[0]]}),t.jsx("select",{value:x.week,onChange:Ve=>y({...x,week:Number(Ve.target.value)}),style:he.monthSelect,children:[1,2,3,4].map(Ve=>t.jsxs("option",{value:Ve,children:["Week ",Ve]},Ve))})]}),t.jsx("button",{onClick:ot,style:he.saveBtn,children:t.jsx(He,{size:14})}),t.jsx("button",{onClick:()=>y(null),style:he.cancelBtn,children:t.jsx(Fe,{size:14})})]})}return t.jsxs("div",{children:[t.jsxs("div",{style:{...he.row,marginLeft:ee*24,background:ee===0&&(($e=Wr[F.pillar])==null?void 0:$e.soft)||"transparent"},children:[Ie.length>0?t.jsx("button",{onClick:()=>Nt(F.id),style:he.caret,children:v?t.jsx(go,{size:15}):t.jsx(cn,{size:15})}):t.jsx("span",{style:{...he.caret,opacity:.25},children:t.jsx(Sl,{size:12})}),t.jsx("span",{style:{...he.horizonTag,color:((Je=Wr[F.pillar])==null?void 0:Je.dot)||Me.dot,borderColor:((we=Wr[F.pillar])==null?void 0:we.dot)||Me.dot},title:F.horizon,children:_?q0[F.horizon]:F.horizon}),t.jsxs("div",{style:he.nameCol,children:[t.jsx("span",{style:{...he.title,...Ne===F.id?he.titleFull:{}},title:F.title,onPointerDown:()=>fe(F.id),onPointerUp:U,onPointerLeave:U,onPointerCancel:U,children:F.title}),t.jsx("span",{style:he.whenSub,children:tv(F)})]}),_?t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{position:"relative",flexShrink:0},children:[t.jsx("button",{onClick:nt=>ie(nt,F.id),style:he.rowAdd,title:"Options",children:t.jsx(Ih,{size:15})}),G===F.id&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:he.menuBackdrop,onClick:()=>le(null)}),t.jsxs("div",{style:{...he.goalMenu,...E},children:[t.jsxs("button",{style:he.menuItem,onClick:()=>{Ge(F),le(null)},children:[t.jsx(jt,{size:14})," Edit"]}),be&&t.jsxs("button",{style:he.menuItem,onClick:()=>{l(nt=>({...nt,[F.id]:!0})),Ot(F.id,F),le(null)},children:[t.jsx(bt,{size:14})," Add sub-goal"]}),t.jsxs("button",{style:{...he.menuItem,color:"#C2536B"},onClick:()=>{ve(F.id,F.title),le(null)},children:[t.jsx(Fe,{size:14})," Delete"]})]})]})]}),t.jsx("button",{onClick:()=>Vt(F),style:{...he.rowAdd,color:Bt(F)?((Et=Wr[F.pillar])==null?void 0:Et.dot)||Me.dot:"var(--text-3)"},title:Bt(F)?"Showing on timeline":"Hidden from timeline",children:Bt(F)?t.jsx(js,{size:14}):t.jsx(Ja,{size:14})})]}):t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>Vt(F),style:{...he.rowAdd,color:Bt(F)?((pt=Wr[F.pillar])==null?void 0:pt.dot)||Me.dot:"var(--text-3)"},title:Bt(F)?"Showing on timeline — click to hide":"Hidden from timeline — click to show",children:Bt(F)?t.jsx(js,{size:13}):t.jsx(Ja,{size:13})}),t.jsx("button",{onClick:()=>Ge(F),style:he.rowAdd,title:"Edit",children:t.jsx(jt,{size:12})}),be&&t.jsx("button",{onClick:()=>{l(nt=>({...nt,[F.id]:!0})),Ot(F.id,F)},style:he.rowAdd,title:"Add sub-goal",children:t.jsx(bt,{size:13})}),t.jsx("button",{onClick:()=>ve(F.id,F.title),style:{...he.rowAdd,color:"var(--text-3)"},title:"Delete",children:t.jsx(Fe,{size:13})})]})]}),v&&Ie.map(nt=>t.jsx(ut,{goal:nt,depth:ee+1},nt.id)),v&&d===F.id&&t.jsx(xt,{parentId:F.id,parentGoal:F,depth:ee+1})]})},Rt=e.filter(F=>Bt(F)&&F.start_date&&F.end_date),Ar=X0.map(F=>({...F,items:Rt.filter(ee=>F.horizons.includes(ee.horizon)).sort((ee,Ie)=>ee.pillar.localeCompare(Ie.pillar)||ee.start_date.localeCompare(Ie.start_date)||dp[ee.horizon]-dp[Ie.horizon]||ee.end_date.localeCompare(Ie.end_date))})).filter(F=>F.items.length>0),yt=(()=>{if(!Rt.length)return null;let F=Rt[0].start_date,ee=Rt[0].end_date;return Rt.forEach(Ie=>{Ie.start_date<F&&(F=Ie.start_date),Ie.end_date>ee&&(ee=Ie.end_date)}),{start:Mo(F),end:Mo(ee)}})(),Er=(()=>{if(!yt)return[];const F=[];for(let ee=yt.start.getTime();ee<=yt.end.getTime();ee+=_i)F.push(new Date(ee));return F})(),$t=Er.length,gn=(()=>{const F=[];return Er.forEach(ee=>{const Ie=`${ee.getFullYear()}-${ee.getMonth()}`,v=F[F.length-1];v&&v.key===Ie?v.days++:F.push({key:Ie,label:`${on[ee.getMonth()]} '${String(ee.getFullYear()).slice(2)}`,days:1})}),F})(),qt=new Date;qt.setHours(0,0,0,0);const tr=yt?Math.round((qt-yt.start)/_i):-1,hr=tr>=0&&tr<$t,W=F=>Math.round((Mo(F.end_date)-Mo(F.start_date))/_i)+1,ge=ue==="month",We=yt?yt.start.getFullYear():0,Ye=yt?yt.start.getMonth():0,wt=(()=>{if(!yt)return[];const F=[];let ee=We,Ie=Ye;const v=yt.end.getFullYear(),be=yt.end.getMonth();for(;ee<v||ee===v&&Ie<=be;)F.push({y:ee,m:Ie}),Ie++,Ie>11&&(Ie=0,ee++);return F})(),Ue=wt.length||1,Ke=(F,ee)=>{const Ie=Mo(F),v=(Ie.getFullYear()-We)*12+Ie.getMonth()-Ye,be=new Date(Ie.getFullYear(),Ie.getMonth()+1,0).getDate();return v+(Ie.getDate()-(ee?0:1))/be},Ct=(F,ee)=>Ke(F,ee)/Ue*100,Fr=`${qt.getFullYear()}-${String(qt.getMonth()+1).padStart(2,"0")}-${String(qt.getDate()).padStart(2,"0")}`,L=yt?Ct(Fr,!1):0,Te=(Z?es:0)+tr*Yt,rt=yt?`${yt.start.getTime()}-${yt.end.getTime()}`:"";return c.useEffect(()=>{if(ge||!hr)return;const F=I.current;F&&(F.scrollLeft=Math.max(0,Te-F.clientWidth/2+Yt/2))},[rt,tr,Z,hr,ge]),t.jsxs("div",{style:he.page,children:[t.jsxs("div",{style:he.head,children:[t.jsx("div",{style:he.eyebrow,children:"Anvil · Goals"}),t.jsx("h1",{style:he.h1,children:de?"All Goals":`${n} Goals`})]}),t.jsxs("div",{style:he.pillarPicker,children:[t.jsx("button",{onClick:()=>{o("All"),g(null),y(null)},style:{...he.pillarChip,...de?{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"}:{}},children:"All Goals"}),Di.map(F=>{const ee=F===n;return t.jsxs("button",{onClick:()=>{o(F),g(null),y(null)},style:{...he.pillarChip,...ee?{background:Wr[F].dot,color:"#fff",borderColor:Wr[F].dot}:{}},children:[t.jsx("span",{style:{...he.dot,background:ee?"#fff":Wr[F].dot}}),F]},F)})]}),t.jsxs("div",{style:he.list,children:[dt.map(F=>t.jsx(ut,{goal:F,depth:0},F.id)),dt.length===0&&t.jsxs("div",{style:he.ganttEmpty,children:["No goals yet",de?"":` for ${n}`,"."]}),d==="ROOT"&&t.jsx(xt,{parentId:"ROOT",parentGoal:null,depth:0}),d!=="ROOT"&&t.jsxs("button",{onClick:()=>Ot("ROOT",null),style:he.rootAdd,children:[t.jsx(bt,{size:14})," Add new goal"]})]}),t.jsxs("div",{style:he.ganttWrap,children:[t.jsxs("div",{style:he.ganttTop,children:[t.jsxs("div",{style:he.ganttTitle,children:[ge?"Monthly":"Daily"," Timeline",yt?` · ${ap(yt.start)} – ${ap(yt.end)}`:""]}),t.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[t.jsxs("div",{style:he.zoomToggle,children:[t.jsx("button",{onClick:()=>A("day"),style:{...he.zoomBtn,...ge?{}:he.zoomBtnOn},children:"Day"}),t.jsx("button",{onClick:()=>A("month"),style:{...he.zoomBtn,...ge?he.zoomBtnOn:{}},children:"Month"})]}),t.jsxs("button",{onClick:()=>ne(F=>!F),style:he.labelToggle,children:[Z?t.jsx(f0,{size:14}):t.jsx(x0,{size:14}),Z?"Hide names":"Show names"]})]})]}),yt?ge?t.jsxs("div",{style:{width:"100%",overflow:"hidden"},children:[t.jsxs("div",{style:he.gBandRow,children:[Z&&t.jsx("div",{style:{...he.gLabelHead,zIndex:4},children:"Goal"}),t.jsx("div",{style:{flex:1,display:"grid",gridTemplateColumns:`repeat(${Ue}, 1fr)`,minWidth:0},children:wt.map((F,ee)=>t.jsxs("div",{style:he.gMonthFluid,children:[on[F.m],F.m===0||ee===0?` '${String(F.y).slice(2)}`:""]},ee))})]}),Ar.map(F=>t.jsxs("div",{children:[t.jsxs("div",{style:he.gGroupRow,children:[Z?t.jsxs("div",{style:he.gGroupLabel,children:[F.label,t.jsx("span",{style:he.gGroupCount,children:F.items.length})]}):t.jsxs("div",{style:he.gGroupChip,children:[F.label," · ",F.items.length]}),t.jsx("div",{style:{flex:1}})]}),F.items.map(ee=>{var pt;const Ie=((pt=Wr[ee.pillar])==null?void 0:pt.dot)||"#9A968C",v=(K==null?void 0:K.id)===ee.id,be=v?K.dx:0,Be=Ct(ee.start_date,!1),$e=Math.max(2,Ct(ee.end_date,!0)-Be),Je=W(ee),we=$e>=14,Et=`${ee.title} · ${ee.start_date} → ${ee.end_date} · ${Je} day${Je>1?"s":""}`;return t.jsxs("div",{style:he.gRow,children:[Z&&t.jsxs("div",{style:{...he.gLabel,paddingLeft:12},children:[t.jsx("span",{style:{...he.ganttRowDot,background:Ie}}),t.jsx("span",{style:{...he.gHzTag,color:Ie,borderColor:Ie},children:lp[ee.horizon]}),t.jsx("span",{style:he.gLabelText,title:ee.title,children:ee.title}),t.jsxs("span",{style:he.gDurChip,children:[Je,"d"]})]}),t.jsxs("div",{style:{position:"relative",flex:1,minHeight:36,minWidth:0,backgroundImage:`repeating-linear-gradient(to right, var(--border) 0, var(--border) 1px, transparent 1px, transparent calc(100% / ${Ue}))`},children:[hr&&t.jsx("div",{style:{...he.gTodayLine,left:`${L}%`}}),t.jsxs("div",{onPointerDown:nt=>{nt.preventDefault(),$.current=nt.clientX;const un=nt.currentTarget.parentNode.offsetWidth;oe({id:ee.id,startX:nt.clientX,dx:0,g:ee,pxPerDay:un/$t})},style:{...he.gBar,left:`${Be}%`,width:`${$e}%`,background:Ie,cursor:v?"grabbing":"grab",transform:be?`translateX(${be}px)`:"none",zIndex:v?6:1,boxShadow:v?"0 4px 12px rgba(0,0,0,0.28)":"0 1px 2px rgba(0,0,0,0.15)",touchAction:"none"},title:Et,children:[t.jsx(el,{size:12,style:{opacity:.7,flexShrink:0,marginRight:2,color:"#fff"}}),we&&t.jsx("span",{style:he.gBarLabel,children:ee.title})]}),!we&&t.jsx("span",{style:{...he.gBarOutside,left:`calc(${Be+$e}% + 6px)`},title:Et,children:ee.title})]})]},ee.id)})]},F.key))]}):t.jsx("div",{style:he.ganttScroll,ref:I,children:t.jsxs("div",{style:{minWidth:(Z?es:0)+$t*Yt,position:"relative"},children:[hr&&t.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:Te,width:Yt,background:"color-mix(in srgb, var(--accent) 14%, transparent)",pointerEvents:"none",zIndex:3}}),t.jsxs("div",{style:he.gBandRow,children:[Z&&t.jsx("div",{style:{...he.gLabelHead,zIndex:4},children:"Goal"}),t.jsx("div",{style:{display:"flex"},children:gn.map((F,ee)=>t.jsx("div",{style:{...he.gMonthCell,width:F.days*Yt},children:F.label},ee))})]}),t.jsxs("div",{style:he.gBandRow,children:[Z&&t.jsx("div",{style:{...he.gLabelHead,zIndex:4,fontSize:10,color:"var(--text-3)",fontWeight:600},children:"days →"}),t.jsx("div",{style:{display:"flex"},children:Er.map((F,ee)=>{const Ie=F.getDay()===0||F.getDay()===6,v=ee===tr;return t.jsx("div",{style:{...he.gDayCell,...Ie?he.gWeekend:{},...v?he.gTodayCell:{}},children:F.getDate()},ee)})})]}),Ar.map(F=>t.jsxs("div",{children:[t.jsxs("div",{style:he.gGroupRow,children:[Z?t.jsxs("div",{style:he.gGroupLabel,children:[F.label,t.jsx("span",{style:he.gGroupCount,children:F.items.length})]}):t.jsxs("div",{style:he.gGroupChip,children:[F.label," · ",F.items.length]}),t.jsx("div",{style:{width:$t*Yt,flexShrink:0}})]}),F.items.map(ee=>{var Fn;const Ie=((Fn=Wr[ee.pillar])==null?void 0:Fn.dot)||"#9A968C",v=Math.round((Mo(ee.start_date)-yt.start)/_i),be=W(ee),Be=(K==null?void 0:K.id)===ee.id,$e=Be?K.dx:0,Je=ev(ee),we=(Y==null?void 0:Y.id)===ee.id,Et=Je?vc(ee):be,pt=Je?gp(ee):be,nt=we?Math.max(Et,Math.min(pt,be+Math.round(Y.dx/Yt))):be,un=nt*Yt-4,En=un>=54,Ve=`${ee.title} · ${ee.start_date} → ${ee.end_date} · ${nt} day${nt>1?"s":""}${Je?` (max ${pt})`:""}`;return t.jsxs("div",{style:he.gRow,children:[Z&&t.jsxs("div",{style:{...he.gLabel,paddingLeft:12},children:[t.jsx("span",{style:{...he.ganttRowDot,background:Ie}}),t.jsx("span",{style:{...he.gHzTag,color:Ie,borderColor:Ie},children:lp[ee.horizon]}),t.jsx("span",{style:he.gLabelText,title:ee.title,children:ee.title}),t.jsxs("span",{style:he.gDurChip,children:[nt,"d"]})]}),t.jsxs("div",{style:{...he.gTrack,width:$t*Yt},children:[hr&&t.jsx("div",{style:{...he.gTodayLine,left:tr*Yt}}),t.jsxs("div",{onPointerDown:en=>{en.preventDefault(),$.current=en.clientX,oe({id:ee.id,startX:en.clientX,dx:0,g:ee,pxPerDay:Yt})},style:{...he.gBar,left:v*Yt+2,width:un,background:Ie,cursor:Be?"grabbing":"grab",transform:$e?`translateX(${$e}px)`:"none",zIndex:Be||we?6:1,boxShadow:Be||we?"0 4px 12px rgba(0,0,0,0.28)":"0 1px 2px rgba(0,0,0,0.15)",touchAction:"none"},title:Ve,children:[Je&&nt>Et&&t.jsx("div",{style:{position:"absolute",left:Et*Yt,top:0,bottom:0,right:0,background:"#C2536B",borderRadius:"0 5px 5px 0"}}),t.jsx(el,{size:12,style:{opacity:.7,flexShrink:0,marginRight:2,color:"#fff",position:"relative",zIndex:1}}),En&&t.jsx("span",{style:{...he.gBarLabel,position:"relative",zIndex:1},children:ee.title}),Je&&t.jsx("div",{onPointerDown:en=>{en.preventDefault(),en.stopPropagation(),ce({id:ee.id,startX:en.clientX,dx:0,g:ee})},style:he.resizeHandle,title:`Drag to extend up to ${pt} days`,children:t.jsx("div",{style:he.resizeGrip})})]}),!En&&t.jsx("span",{style:{...he.gBarOutside,left:v*Yt+un+8+$e},title:Ve,children:ee.title})]})]},ee.id)})]},F.key))]})}):t.jsx("div",{style:he.ganttEmpty,children:"No goals on the timeline. Click the eye icon on a goal to show it here."}),yt&&t.jsxs("div",{style:he.gLegend,children:[t.jsxs("span",{style:he.gLegendItem,children:[t.jsx("span",{style:{...he.gLegendBar}})," bar length = number of days"]}),t.jsxs("span",{style:he.gLegendItem,children:[t.jsx("span",{style:he.gLegendToday})," today"]})]})]}),H&&t.jsxs("div",{style:he.warnToast,children:[t.jsx(D0,{size:15,style:{flexShrink:0}}),t.jsx("span",{children:H})]}),t.jsx(wr,{toasts:Ae,onUndo:tt,onDismiss:ft})]})}const he={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 26px",color:"var(--text)",boxSizing:"border-box",maxWidth:"100%",overflowX:"hidden"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},dot:{width:9,height:9,borderRadius:"50%",display:"inline-block",flexShrink:0},pillarPicker:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16},pillarChip:{display:"flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},list:{background:"var(--surface)",borderRadius:12,padding:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"hidden"},row:{display:"flex",alignItems:"center",gap:9,padding:"9px 10px",borderRadius:8,flexWrap:"nowrap"},caret:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",display:"grid",placeItems:"center",padding:0,width:18,height:18,flexShrink:0},horizonTag:{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",border:"1px solid",borderRadius:5,padding:"2px 6px",flexShrink:0},nameCol:{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:1},title:{fontSize:14,fontWeight:500,lineHeight:1.3,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",userSelect:"none",WebkitUserSelect:"none",cursor:"default"},titleFull:{whiteSpace:"normal",overflow:"visible",textOverflow:"clip",wordBreak:"break-word"},whenSub:{fontSize:11,fontStyle:"italic",color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},rowAdd:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,flexShrink:0},menuBackdrop:{position:"fixed",inset:0,zIndex:40},goalMenu:{position:"fixed",zIndex:41,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 6px 24px rgba(0,0,0,0.18)",padding:4,minWidth:180,display:"flex",flexDirection:"column"},menuItem:{display:"flex",alignItems:"center",gap:9,width:"100%",border:"none",background:"none",padding:"10px 12px",borderRadius:7,cursor:"pointer",fontFamily:"inherit",fontSize:13.5,fontWeight:500,color:"var(--text)",textAlign:"left"},rootAdd:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"var(--text-2)",background:"none",border:"1px dashed var(--border)",borderRadius:8,padding:"9px 12px",cursor:"pointer",fontWeight:600,fontFamily:"inherit",marginTop:6,width:"100%",justifyContent:"center"},addBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 0 6px 28px",flexWrap:"wrap"},editBox:{display:"flex",alignItems:"center",gap:6,padding:"6px 10px",flexWrap:"wrap",background:"var(--bg)",borderRadius:8,margin:"4px 0"},input:{border:"1px solid var(--border)",borderRadius:7,padding:"8px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",flex:1,minWidth:120},monthSelect:{border:"1px solid var(--border)",borderRadius:7,padding:"8px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},inheritTag:{fontSize:11.5,fontWeight:600,color:"var(--text-2)",background:"var(--hover)",padding:"6px 9px",borderRadius:7,flexShrink:0},toTag:{fontSize:11.5,fontWeight:600,color:"var(--text-3)",flexShrink:0},warnToast:{position:"fixed",top:18,left:"50%",transform:"translateX(-50%)",zIndex:300,display:"flex",alignItems:"center",gap:8,maxWidth:"90vw",background:"#C2536B",color:"#fff",padding:"10px 16px",borderRadius:10,fontSize:13,fontWeight:600,boxShadow:"0 6px 24px rgba(0,0,0,0.25)"},saveBtn:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},cancelBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:32,height:32,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},ganttWrap:{background:"var(--surface)",borderRadius:12,padding:"16px 14px",marginTop:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},ganttTop:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:10,marginBottom:14},ganttTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",fontFamily:"'Fraunces',Georgia,serif"},labelToggle:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"5px 10px",borderRadius:8,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},zoomToggle:{display:"inline-flex",border:"1px solid var(--border)",borderRadius:8,overflow:"hidden"},zoomBtn:{border:"none",background:"var(--surface)",color:"var(--text-2)",padding:"5px 12px",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},zoomBtnOn:{background:"var(--accent-strong)",color:"#fff"},gMonthFluid:{borderLeft:"1px solid var(--border)",fontSize:10,fontWeight:700,color:"var(--text-2)",textAlign:"center",padding:"5px 0",whiteSpace:"nowrap",overflow:"hidden"},gGroupChip:{position:"sticky",left:0,zIndex:3,background:"var(--surface-2)",padding:"5px 10px",fontSize:10,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-2)",whiteSpace:"nowrap",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center"},ganttEmpty:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},ganttScroll:{overflowX:"auto"},ganttRowDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},gBandRow:{display:"flex",alignItems:"stretch",borderBottom:"1px solid var(--border)"},gLabelHead:{width:es,flexShrink:0,position:"sticky",left:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center",padding:"6px 10px",fontSize:12,fontWeight:700,color:"var(--text-2)"},gMonthCell:{flexShrink:0,borderLeft:"1px solid var(--border)",fontSize:10.5,fontWeight:700,color:"var(--text-2)",textAlign:"center",padding:"5px 0",whiteSpace:"nowrap",overflow:"hidden"},gDayCell:{width:Yt,flexShrink:0,textAlign:"center",fontSize:10,color:"var(--text-3)",padding:"4px 0",borderLeft:"1px solid var(--border)",fontWeight:600},gWeekend:{background:"var(--surface-2)"},gTodayCell:{background:"var(--hover)",color:"var(--accent)",fontWeight:800},gGroupRow:{display:"flex",alignItems:"stretch",background:"var(--surface-2)",borderBottom:"1px solid var(--border)",borderTop:"1px solid var(--border)"},gGroupLabel:{width:es,flexShrink:0,position:"sticky",left:0,background:"var(--surface-2)",zIndex:3,padding:"6px 12px",fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-2)",borderRight:"1px solid var(--border)",display:"flex",alignItems:"center",gap:7},gGroupCount:{fontSize:10,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 6px"},gHzTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.04em",border:"1px solid",borderRadius:4,padding:"1px 4px",flexShrink:0},gRow:{display:"flex",alignItems:"stretch",minHeight:36,borderBottom:"1px solid var(--border)"},gLabel:{width:es,flexShrink:0,display:"flex",alignItems:"center",gap:7,position:"sticky",left:0,background:"var(--surface)",zIndex:2,borderRight:"1px solid var(--border)",paddingRight:8,overflow:"hidden"},gLabelText:{flex:1,minWidth:0,fontSize:12,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"var(--text)"},gDurChip:{fontSize:10,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",borderRadius:10,padding:"1px 6px",flexShrink:0,marginRight:6},gTrack:{position:"relative",flexShrink:0,minHeight:36,backgroundImage:`repeating-linear-gradient(to right, var(--border) 0, var(--border) 1px, transparent 1px, transparent ${Yt}px)`},gBar:{position:"absolute",top:9,height:18,borderRadius:5,display:"flex",alignItems:"center",padding:"0 7px",boxShadow:"0 1px 2px rgba(0,0,0,0.15)",overflow:"hidden",zIndex:1},gBarLabel:{fontSize:11,fontWeight:600,color:"#fff",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},gBarOutside:{position:"absolute",top:9,height:18,display:"flex",alignItems:"center",fontSize:11,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",pointerEvents:"none",zIndex:1},resizeHandle:{position:"absolute",right:0,top:0,bottom:0,width:12,cursor:"ew-resize",display:"grid",placeItems:"center",touchAction:"none",zIndex:2},resizeGrip:{width:2,height:11,background:"rgba(255,255,255,0.9)",borderRadius:1,boxShadow:"3px 0 0 rgba(255,255,255,0.6)"},gTodayLine:{position:"absolute",top:0,bottom:0,width:2,background:"#C2536B",zIndex:0,opacity:.6},gLegend:{display:"flex",gap:16,marginTop:12,fontSize:11,color:"var(--text-3)",flexWrap:"wrap"},gLegendItem:{display:"flex",alignItems:"center",gap:6,fontWeight:600},gLegendBar:{width:18,height:8,borderRadius:3,background:"var(--accent)",display:"inline-block"},gLegendToday:{width:2,height:12,background:"#C2536B",display:"inline-block"}},nv=`
@keyframes anvilDdPop { 0% { opacity: 0; transform: translateY(-4px) scale(0.98); } 100% { opacity: 1; transform: translateY(0) scale(1); } }
.anvil-dd-item:hover { background: var(--hover); }
`;function sr({value:e,options:r,onChange:n,style:o,placeholder:i="Select…"}){const[s,a]=c.useState(!1),l=c.useRef(null),d=(r||[]).map(m=>m!==null&&typeof m=="object"?m:{value:m,label:String(m)}),g=d.find(m=>String(m.value)===String(e));return c.useEffect(()=>{if(!s)return;const m=h=>{l.current&&!l.current.contains(h.target)&&a(!1)},f=h=>{h.key==="Escape"&&a(!1)};return document.addEventListener("mousedown",m),document.addEventListener("keydown",f),()=>{document.removeEventListener("mousedown",m),document.removeEventListener("keydown",f)}},[s]),t.jsxs("div",{ref:l,style:{...mn.wrap,...o},children:[t.jsxs("button",{type:"button",onClick:()=>a(m=>!m),style:{...mn.trigger,...s?mn.triggerOpen:{}},children:[t.jsx("span",{style:{...mn.triggerLbl,...g?{}:{color:"var(--text-3)"}},children:g?g.label:i}),t.jsx(go,{size:14,style:{...mn.chev,...s?{transform:"rotate(180deg)"}:{}}})]}),s&&t.jsxs("div",{style:mn.menu,children:[t.jsx("style",{children:nv}),d.map(m=>{const f=String(m.value)===String(e);return t.jsxs("button",{type:"button",className:"anvil-dd-item",onClick:()=>{n(m.value),a(!1)},style:{...mn.item,...f?mn.itemSel:{}},children:[t.jsx("span",{style:mn.itemLbl,children:m.label}),f&&t.jsx(He,{size:13,style:{flexShrink:0}})]},String(m.value))})]})]})}const mn={wrap:{position:"relative",minWidth:0},trigger:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,width:"100%",border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text)",borderRadius:9,padding:"8px 11px",fontSize:13,fontWeight:500,cursor:"pointer",fontFamily:"inherit",textAlign:"left",transition:"border-color 0.15s ease, box-shadow 0.15s ease"},triggerOpen:{borderColor:"var(--accent)",boxShadow:"0 0 0 3px color-mix(in srgb, var(--accent) 20%, transparent)"},triggerLbl:{flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},chev:{color:"var(--text-3)",flexShrink:0,transition:"transform 0.15s ease"},menu:{position:"absolute",top:"calc(100% + 4px)",left:0,right:0,zIndex:400,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 10px 32px rgba(0,0,0,0.16)",padding:4,maxHeight:240,overflowY:"auto",animation:"anvilDdPop 0.14s ease"},item:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,width:"100%",border:"none",background:"none",color:"var(--text)",borderRadius:7,padding:"8px 10px",fontSize:13,fontWeight:500,cursor:"pointer",fontFamily:"inherit",textAlign:"left"},itemSel:{background:"color-mix(in srgb, var(--accent) 12%, transparent)",color:"var(--accent)",fontWeight:700},itemLbl:{flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},Nh=[{value:"regular",label:"Regular (yes/no)"},{value:"weekly",label:"Weekly (specific days)"},{value:"minimum",label:"Minimum (at least N)"},{value:"maximum",label:"Maximum (no more than N)"}],Oh=["day","week","month","year"],Rn={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.12)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.12)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.12)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.12)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.12)"}},ai=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],ov=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],xi=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,Wg=()=>xi(new Date),iv=(e=0)=>{const r=new Date,n=r.getDay(),o=n===0?-6:1-n,i=new Date(r);return i.setDate(r.getDate()+o+e*7),Array.from({length:7},(s,a)=>{const l=new Date(i);return l.setDate(i.getDate()+a),xi(l)})},sv=(e=0)=>{const r=new Date,n=new Date(r.getFullYear(),r.getMonth()+e,1),o=n.getFullYear(),i=n.getMonth(),s=new Date(o,i+1,0).getDate(),a=n.getDay(),l=a===0?6:a-1,d=Array.from({length:s},(m,f)=>`${o}-${String(i+1).padStart(2,"0")}-${String(f+1).padStart(2,"0")}`),g=n.toLocaleDateString("en-US",{month:"long",year:"numeric"});return{dates:d,startOffset:l,label:g,year:o,month:i}},up=e=>new Date(e+"T00:00").toLocaleDateString("en-US",{month:"short",day:"numeric"}),av=(e,r)=>{var i;const n=Number(e==null?void 0:e.min_interval_min)||0;if(n<=0||r!==Wg())return 0;const o=(i=e.log_count_times)==null?void 0:i[r];return o?Math.max(0,new Date(o).getTime()+n*6e4-Date.now()):0},Hh=e=>{const r=Math.ceil(e/1e3);return`${Math.floor(r/60)}:${String(r%60).padStart(2,"0")}`},Un=Wg(),lv=new Date().getFullYear();function dv(){var me,Ne;const[e,r]=c.useState([]),[n,o]=c.useState("ALL"),[i,s]=c.useState(!1),[a,l]=c.useState(!1),[d,g]=c.useState(!1),[m,f]=c.useState(null),[h,R]=c.useState(null),[B,T]=c.useState(null),[z,b]=c.useState({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week",days:[],min_interval_min:0}),[p,u]=c.useState(!1),[j,k]=c.useState([]),C=c.useCallback(()=>M.getHabits().then(r).catch(console.error),[]);c.useEffect(()=>{C()},[C]);const D=c.useCallback(Q=>{Q&&Q.id!=null&&r(re=>re.map(G=>G.id===Q.id?Q:G))},[]);c.useEffect(()=>{M.getSetting("habit_order").then(Q=>{Array.isArray(Q==null?void 0:Q.value)&&k(Q.value)}).catch(()=>{})},[]);const x=c.useMemo(()=>j.length?[...e].sort((Q,re)=>{const G=j.indexOf(Q.id),le=j.indexOf(re.id);return G===-1&&le===-1?0:G===-1?1:le===-1?-1:G-le}):e,[e,j]),y=c.useMemo(()=>x.filter(Q=>Q.active!==!1),[x]);c.useEffect(()=>{n!=="ALL"&&e.some(Q=>Q.id===n&&Q.active===!1)&&o("ALL")},[e,n]);const _=async Q=>{k(Q),await M.setSetting("habit_order",Q),u(!1)},Z=async(Q,re)=>{D(await M.updateHabit(Q,{active:re}))};c.useEffect(()=>{const Q=()=>{const re=window.innerWidth<720;s(re),re||l(!1)};return Q(),window.addEventListener("resize",Q),()=>window.removeEventListener("resize",Q)},[]);const{deleteItem:ne,toasts:ue,handleUndo:A,handleDismiss:K}=kr(M.deleteHabit,M.restoreHabit,C),oe=Q=>{o(Q),i&&l(!1)},ye=(Q,re)=>{(Q.type==="minimum"||Q.type==="maximum")&&Q.period==="day"?!i&&av(Q,re)>0?T(G=>G&&G.habitId===Q.id&&G.date===re?null:{habitId:Q.id,date:re}):R({habit:Q,date:re}):X(Q.id,re)},X=async(Q,re)=>{D(await M.toggleHabitLog(Q,re))},Y=async(Q,re,G,le)=>{try{D(await M.setHabitLogCount(Q,re,G,le)),R(null)}catch(E){alert(E.message||"Could not save.")}},ce=async(Q,re)=>{D(await M.clearHabitLog(Q,re)),R(null)},J=Q=>{var re;return!B||B.habitId!==Q.id?null:t.jsx(uv,{habit:Q,date:B.date,onSave:async G=>{var le;try{await M.setHabitLogCount(Q.id,B.date,G,((le=Q.log_notes)==null?void 0:le[B.date])??"").then(D)}catch(E){alert(E.message||"Could not save.")}},onOpen:()=>{T(null),R({habit:Q,date:B.date})},onClose:()=>T(null)},B.date+":"+(((re=Q.log_count_times)==null?void 0:re[B.date])||""))},I=async()=>{if(!z.name.trim())return;const Q=z.type==="minimum"||z.type==="maximum",re=z.type==="weekly";if(re&&z.days.length===0)return;const G={name:z.name.trim(),pillar:z.pillar,target_per_week:Number(z.target_per_week)||7,type:z.type,target_count:Q?Number(z.target_count)||1:null,period:Q?z.period:null,days:re?z.days:null,min_interval_min:Q&&z.period==="day"&&Number(z.min_interval_min)||0};await M.createHabit(G),b({name:"",pillar:"Health",target_per_week:7,type:"regular",target_count:null,period:"week",days:[],min_interval_min:0}),g(!1),C()},$=async(Q,re)=>{n===Q&&o("ALL"),ne(Q,re)},H=e.find(Q=>Q.id===n),P=Q=>new Set(Q.logs||[]),ae={...V.sidebar,...i?V.sidebarOverlay:{},...i&&!a?V.sidebarHidden:{}};return t.jsxs("div",{style:V.shell,children:[i&&a&&t.jsx("div",{style:V.backdrop,onClick:()=>l(!1)}),t.jsxs("aside",{style:ae,children:[t.jsxs("div",{style:V.sideTop,children:[t.jsx("div",{style:V.brand,children:"Anvil · Habits"}),i&&t.jsx("button",{onClick:()=>l(!1),style:V.closeBtn,children:t.jsx(Fe,{size:18})})]}),t.jsxs("div",{style:{...V.sideItem,...n==="ALL"?V.sideItemOn:{},cursor:"default",padding:"2px 6px 2px 10px"},children:[t.jsxs("button",{onClick:()=>oe("ALL"),style:{display:"flex",alignItems:"center",gap:9,flex:1,border:"none",background:"none",cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:n==="ALL"?600:500,color:"var(--text-2)",padding:"7px 0"},children:[t.jsx(vh,{size:15}),t.jsx("span",{style:V.sideLabel,children:"All Habits"}),t.jsx("span",{style:V.sideCount,children:e.length})]}),t.jsx("button",{onClick:Q=>{Q.stopPropagation(),u(!0)},style:V.tinyBtn,title:"Reorder habits",children:t.jsx(jt,{size:12})})]}),t.jsx("div",{style:V.sideDivider}),y.map(Q=>{var le;const re=n===Q.id,G=((le=Rn[Q.pillar])==null?void 0:le.dot)||"#9A968C";return t.jsxs("button",{onClick:()=>oe(Q.id),style:{...V.sideItem,...re?V.sideItemOn:{}},children:[t.jsx("span",{style:{...V.sideDot,background:G}}),t.jsx("span",{style:V.sideLabel,children:Q.name}),t.jsxs("span",{style:V.sideStreak,children:[t.jsx(so,{size:11})," ",Q.streak]})]},Q.id)}),d?t.jsx(cv,{habit:z,onChange:b,onSave:I,onCancel:()=>g(!1)}):t.jsxs("button",{onClick:()=>g(!0),style:V.sideNewBtn,children:[t.jsx(bt,{size:13})," New habit"]})]}),t.jsxs("main",{style:V.main,children:[i&&t.jsxs("button",{onClick:()=>l(!0),style:V.hamburger,children:[t.jsx(Sg,{size:18}),t.jsx("span",{style:V.hamburgerLabel,children:n==="ALL"?"All Habits":H==null?void 0:H.name})]}),n==="ALL"?t.jsx(bv,{habits:y,dayAction:ye,logSet:P,onDelete:$,onEdit:Q=>f(Q),isMobile:i,onOpenHabit:oe,renderInline:J}):t.jsx(hv,{habit:H,dayAction:ye,logSet:P,onDelete:()=>$(H.id,H.name),onEdit:()=>f(H),onToggleActive:Z,renderInline:J,setNote:(Q,re)=>M.setHabitLogNote(H.id,Q,re).then(D)}),n==="ALL"&&t.jsx(yv,{year:lv})]}),p&&t.jsx(xv,{habits:x,onSave:_,onToggleActive:Z,onClose:()=>u(!1)}),m&&t.jsx(gv,{habit:m,onSave:async Q=>{await M.updateHabit(m.id,Q),f(null),C()},onClose:()=>f(null)}),h&&t.jsx(pv,{habit:h.habit,date:h.date,initialCount:((me=h.habit.log_counts)==null?void 0:me[h.date])??0,initialNote:((Ne=h.habit.log_notes)==null?void 0:Ne[h.date])??"",onSave:(Q,re)=>Y(h.habit.id,h.date,Q,re),onClear:()=>ce(h.habit.id,h.date),onClose:()=>R(null)},`${h.habit.id}:${h.date}`),t.jsx(wr,{toasts:ue,onUndo:A,onDismiss:K})]})}function Gh({days:e,onToggle:r}){return t.jsx("div",{style:V.dayPick,children:ai.map((n,o)=>t.jsx("button",{type:"button",onClick:()=>r(o),style:{...V.dayChip,...e.includes(o)?V.dayChipOn:{}},children:n},n))})}function cv({habit:e,onChange:r,onSave:n,onCancel:o}){const i=e.type==="minimum"||e.type==="maximum",s=e.type==="weekly",a=l=>r(d=>({...d,days:d.days.includes(l)?d.days.filter(g=>g!==l):[...d.days,l].sort((g,m)=>g-m)}));return t.jsxs("div",{style:V.addBox,children:[t.jsx("input",{autoFocus:!0,placeholder:"Habit name",value:e.name,onChange:l=>r(d=>({...d,name:l.target.value})),onKeyDown:l=>l.key==="Enter"&&n(),style:V.sideInput}),t.jsx(sr,{value:e.pillar,options:Object.keys(Rn),onChange:l=>r(d=>({...d,pillar:l}))}),t.jsx(sr,{value:e.type,options:Nh,onChange:l=>r(d=>({...d,type:l}))}),s&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:V.pickHint,children:"Do this on…"}),t.jsx(Gh,{days:e.days,onToggle:a})]}),i&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{display:"flex",gap:6},children:[t.jsx("input",{type:"number",min:1,placeholder:"N",value:e.target_count||"",onChange:l=>r(d=>({...d,target_count:l.target.value})),style:{...V.sideInput,width:60}}),t.jsx(sr,{value:e.period,options:Oh,style:{flex:1},onChange:l=>r(d=>({...d,period:l}))})]}),e.period==="day"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:V.pickHint,children:"Min gap between entries (minutes)"}),t.jsx("input",{type:"number",min:0,placeholder:"0",value:e.min_interval_min??0,onChange:l=>r(d=>({...d,min_interval_min:l.target.value})),style:V.sideInput})]})]}),t.jsxs("div",{style:{display:"flex",gap:6},children:[t.jsx("button",{onClick:n,style:V.sideAddBtn,children:t.jsx(He,{size:13})}),t.jsx("button",{onClick:o,style:V.sideCancelBtn,children:t.jsx(Fe,{size:13})})]})]})}function gv({habit:e,onSave:r,onClose:n}){const[o,i]=c.useState(e.name),[s,a]=c.useState(e.pillar||"Health"),[l,d]=c.useState(e.type||"regular"),[g,m]=c.useState(e.target_count||""),[f,h]=c.useState(e.period||"week"),[R,B]=c.useState(e.reminder_time||""),[T,z]=c.useState(e.days||[]),[b,p]=c.useState(e.min_interval_min??0),u=l==="minimum"||l==="maximum",j=l==="weekly",k=D=>z(x=>x.includes(D)?x.filter(y=>y!==D):[...x,D].sort((y,_)=>y-_)),C=()=>{j&&T.length===0||r({name:o.trim(),pillar:s,type:l,target_count:u?Number(g):null,period:u?f:null,days:j?T:[],reminder_time:R||null,min_interval_min:u&&f==="day"&&Number(b)||0})};return t.jsx("div",{style:V.modalOverlay,onClick:n,children:t.jsxs("div",{style:V.modal,onClick:D=>D.stopPropagation(),children:[t.jsxs("div",{style:V.modalHead,children:["Edit Habit",t.jsx("button",{onClick:n,style:V.closeBtn,children:t.jsx(Fe,{size:16})})]}),t.jsx("label",{style:V.modalLabel,children:"Name"}),t.jsx("input",{value:o,onChange:D=>i(D.target.value),style:V.sideInput}),t.jsx("label",{style:V.modalLabel,children:"Pillar"}),t.jsx(sr,{value:s,options:Object.keys(Rn),onChange:a}),t.jsx("label",{style:V.modalLabel,children:"Type"}),t.jsx(sr,{value:l,options:Nh,onChange:d}),j&&t.jsxs(t.Fragment,{children:[t.jsx("label",{style:V.modalLabel,children:"Days"}),t.jsx(Gh,{days:T,onToggle:k})]}),u&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[t.jsx("input",{type:"number",min:1,value:g,onChange:D=>m(D.target.value),style:{...V.sideInput,width:70}}),t.jsx(sr,{value:f,options:Oh,onChange:h,style:{flex:1}})]}),f==="day"&&t.jsxs(t.Fragment,{children:[t.jsx("label",{style:V.modalLabel,children:"Min gap between entries (minutes)"}),t.jsx("input",{type:"number",min:0,value:b,onChange:D=>p(D.target.value),style:V.sideInput})]})]}),t.jsx("label",{style:V.modalLabel,children:"Reminder time"}),t.jsx("input",{type:"time",value:R,onChange:D=>B(D.target.value),style:V.sideInput}),t.jsx("button",{onClick:C,style:{...V.sideAddBtn,width:"100%",marginTop:10,height:36},children:"Save"})]})})}function uv({habit:e,date:r,onSave:n,onOpen:o,onClose:i}){var j,k,C;const[s,a]=c.useState(Date.now()),l=((j=e.log_counts)==null?void 0:j[r])??0,[d,g]=c.useState(l),m=Number(e.min_interval_min)||0,f=e.target_count,h=(k=e.log_count_times)==null?void 0:k[r],R=h?new Date(h).getTime()+m*6e4:0,B=Math.max(0,R-s);c.useEffect(()=>{const D=window.setInterval(()=>a(Date.now()),1e3);return()=>window.clearInterval(D)},[]);const T=d>=l+1||B>0,z=d<=0,b=d!==l,p=((C=Rn[e.pillar])==null?void 0:C.dot)||"#9A968C",u=e.type==="minimum"?d>=f:d>0&&d<=f;return t.jsxs("div",{style:V.inlineCounter,children:[t.jsxs("span",{style:{...V.inlineCount,color:u?"#4C9A6B":p},children:[d,t.jsxs("span",{style:V.inlineTarget,children:["/",f]})]}),t.jsx("button",{onClick:()=>!z&&g(D=>Math.max(0,D-1)),disabled:z,style:{...V.inlinePlus,...z?{opacity:.45,cursor:"not-allowed"}:{}},children:"−"}),t.jsx("button",{onClick:()=>!T&&g(D=>D+1),disabled:T,style:{...V.inlinePlus,...T?{opacity:.45,cursor:"not-allowed"}:{background:p,borderColor:p,color:"#fff"}},title:B>0?"Wait for the interval":d>=l+1?"Press Set to confirm":"Stage an entry",children:"+"}),t.jsx("button",{onClick:()=>n(d),disabled:!b,style:{...V.inlineSet,...b?{background:p,borderColor:p,color:"#fff"}:{opacity:.5,cursor:"not-allowed"}},children:"Set"}),B>0?t.jsxs("span",{style:V.inlineWait,children:["Wait ",Hh(B)]}):t.jsx("span",{style:V.inlineReady,children:b?"Press Set to confirm":"Tap + to add"}),t.jsx("button",{onClick:o,style:V.inlineMore,title:"Open details",children:"⋯"}),t.jsx("button",{onClick:i,style:V.inlineMore,title:"Hide",children:t.jsx(Fe,{size:13})})]})}function pv({habit:e,date:r,initialCount:n,initialNote:o,onSave:i,onClear:s,onClose:a}){var ye;const l=n??0,[d,g]=c.useState(l),[m,f]=c.useState(o??""),[h,R]=c.useState(Date.now()),[B,T]=c.useState(!1),z=e.target_count,b=e.type==="minimum"?d>=z:d>0&&d<=z,p=e.type==="maximum"&&d>z,u=b?"#4C9A6B":p?"#C2536B":"#C2773B",j=b?"✓ Goal met":p?"Over the limit":"Not met yet",k=Number(e.min_interval_min)||0,C=r===Wg(),D=k>0&&C,x=(ye=e.log_count_times)==null?void 0:ye[r],y=D&&x?new Date(x).getTime()+k*6e4:0,_=Math.max(0,y-h);c.useEffect(()=>{if(!D||_<=0)return;const X=window.setInterval(()=>R(Date.now()),1e3);return()=>window.clearInterval(X)},[D,_]),c.useEffect(()=>{if(!B)return;const X=setTimeout(()=>T(!1),3200);return()=>clearTimeout(X)},[B]);const Z=d-l,ne=D&&(d>=l+1||_>0),ue=d<=0,A=()=>{k>0&&!C&&T(!0),ne||g(X=>X+1)},K=()=>{ue||g(X=>Math.max(0,X-1))},oe=d!==l||m!==(o??"");return t.jsx("div",{style:V.modalOverlay,onClick:a,children:t.jsxs("div",{style:{...V.modal,position:"relative"},onClick:X=>X.stopPropagation(),children:[B&&t.jsxs("div",{style:V.floatHint,children:["This ",k,"-minute gap only applies to today's entries — past days can be edited freely, with no wait."]}),t.jsxs("div",{style:V.modalHead,children:[e.name,t.jsx("button",{onClick:a,style:V.closeBtn,children:t.jsx(Fe,{size:16})})]}),t.jsxs("div",{style:{fontSize:12,color:"var(--text-3)",marginBottom:2},children:[r," · ",e.type==="minimum"?`at least ${z}`:`no more than ${z}`," / ",e.period,k>0&&t.jsxs(t.Fragment,{children:[" · ",k,"m between entries"]})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:20,margin:"14px 0 6px"},children:[t.jsx("button",{onClick:K,disabled:ue,style:{...V.counterBtn,...ue?{opacity:.45,cursor:"not-allowed"}:{}},children:"−"}),t.jsx("span",{style:{fontSize:38,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:52,textAlign:"center",color:u},children:d}),t.jsx("button",{onClick:A,disabled:ne,style:{...V.counterBtn,...ne?{opacity:.45,cursor:"not-allowed"}:{}},title:D&&_>0?"Wait for the interval before the next entry":D&&d>=l+1?"Press Set to confirm this entry":void 0,children:"+"})]}),D&&_>0&&t.jsxs("div",{style:{textAlign:"center",fontSize:12,fontWeight:700,color:"#C2773B",marginBottom:8},children:["Wait ",Hh(_)," before the next entry"]}),D&&_<=0&&t.jsx("div",{style:{textAlign:"center",fontSize:11.5,color:"var(--text-3)",marginBottom:8},children:Z>0?"Press Set to confirm this entry":`Tap + to add an entry (each at least ${k}m apart)`}),t.jsx("div",{style:{textAlign:"center",fontSize:12.5,fontWeight:700,color:u,marginBottom:12},children:j}),t.jsx("textarea",{value:m,onChange:X=>f(X.target.value),placeholder:"Add a comment (optional)…",style:{...V.sideInput,minHeight:56,resize:"vertical"}}),t.jsxs("div",{style:{display:"flex",gap:8,marginTop:10},children:[t.jsxs("button",{onClick:s,style:{...V.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[t.jsx(Fe,{size:14})," Delete"]}),t.jsxs("button",{onClick:()=>i(d,m),disabled:!oe,style:{...V.sideAddBtn,flex:1,justifyContent:"center",height:38,...oe?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:14})," Set"]})]})]})})}function rd({pct:e,label:r,sub:n,color:o}){const s=2*Math.PI*26,a=s*(1-Math.max(0,Math.min(100,e))/100);return t.jsxs("div",{style:V.ringStat,children:[t.jsxs("div",{style:V.ringBox,children:[t.jsxs("svg",{width:"70",height:"70",viewBox:"0 0 70 70",children:[t.jsx("circle",{cx:"35",cy:"35",r:26,fill:"none",stroke:"var(--border)",strokeWidth:"7"}),t.jsx("circle",{cx:"35",cy:"35",r:26,fill:"none",stroke:o,strokeWidth:"7",strokeLinecap:"round",strokeDasharray:s,strokeDashoffset:a,transform:"rotate(-90 35 35)",style:{transition:"stroke-dashoffset 0.5s ease"}})]}),t.jsxs("div",{style:{...V.ringPct,color:o},children:[e,"%"]})]}),t.jsxs("div",{children:[t.jsx("div",{style:V.ringLabel,children:r}),t.jsx("div",{style:V.ringSub,children:n})]})]})}function bv({habits:e,dayAction:r,logSet:n,onDelete:o,onEdit:i,renderInline:s,isMobile:a,onOpenHabit:l}){const[d,g]=c.useState(0),[m,f]=c.useState(null),[h,R]=c.useState(!1);c.useEffect(()=>{M.getSetting("habit_show_names").then(I=>{typeof(I==null?void 0:I.value)=="boolean"&&R(I.value)}).catch(()=>{})},[]);const B=()=>R(I=>{const $=!I;return M.setSetting("habit_show_names",$).catch(()=>{}),$&&f(null),$}),T=iv(d),z=`${up(T[0])} – ${up(T[6])}${d===0?" · This week":""}`,b=I=>{const $=new Date(I+"T00:00:00"),H=$.getDay(),P=new Date($);return P.setDate($.getDate()+(H===0?-6:1-H)),Array.from({length:7},(ae,me)=>{const Ne=new Date(P);return Ne.setDate(P.getDate()+me),xi(Ne)})},p=I=>I.logs||[],u=(I,$)=>I.type==="minimum"&&I.period==="week"&&$.filter(H=>n(I).has(H)).length>=(I.target_count||0),j=(I,$)=>I.type==="minimum"&&I.period==="month"&&p(I).filter(H=>H.slice(0,7)===$).length>=(I.target_count||0),k=(I,$)=>I.type==="minimum"&&I.period==="year"&&p(I).filter(H=>H.slice(0,4)===$).length>=(I.target_count||0),C=(I,$)=>{var H;if((I.type==="minimum"||I.type==="maximum")&&I.period==="day"){const P=(H=I.log_counts)==null?void 0:H[$];return P==null?!1:I.type==="minimum"?P>=(I.target_count||0):P>0&&P<=(I.target_count||0)}return n(I).has($)},D=(I,$)=>I.type!=="minimum"?!1:I.period==="week"?u(I,b($)):I.period==="month"?j(I,$.slice(0,7)):I.period==="year"?k(I,$.slice(0,4)):!1,x=(I,$)=>C(I,$)||D(I,$),y=e.filter(I=>x(I,Un)).length,_=e.length?Math.round(y/e.length*100):0,Z=I=>{if(I.type==="minimum"&&I.period==="month"&&(j(I,T[0].slice(0,7))||j(I,T[6].slice(0,7)))||I.type==="minimum"&&I.period==="year"&&(k(I,T[0].slice(0,4))||k(I,T[6].slice(0,4)))||I.type==="minimum"&&I.period==="week"&&u(I,T))return 1;if((I.type==="minimum"||I.type==="maximum")&&I.period==="day")return Math.min(1,T.filter(ae=>C(I,ae)).length/7);const $=n(I),H=T.filter(ae=>$.has(ae)).length,P=I.type==="minimum"&&I.period==="week"?I.target_count||1:I.target_per_week||7;return P>0?Math.min(1,H/P):0},ne=e.length?Math.round(e.reduce((I,$)=>I+Z($),0)/e.length*100):0,ue=new Date,A=`${ue.getFullYear()}-${String(ue.getMonth()+1).padStart(2,"0")}`,K=new Date(ue.getFullYear(),ue.getMonth()+1,0).getDate(),oe=K/7,ye=I=>{if(I.type==="minimum"&&I.period==="month"&&j(I,A)||I.type==="minimum"&&I.period==="year"&&k(I,A.slice(0,4)))return 1;if((I.type==="minimum"||I.type==="maximum")&&I.period==="day"){let P=0;for(let ae=1;ae<=K;ae++)C(I,`${A}-${String(ae).padStart(2,"0")}`)&&P++;return Math.min(1,P/K)}const $=p(I).filter(P=>P.slice(0,7)===A).length;let H;return I.type==="minimum"&&I.period==="week"?H=(I.target_count||1)*oe:I.type==="minimum"&&I.period==="month"?H=I.target_count||1:I.type==="minimum"&&I.period==="year"?H=(I.target_count||1)/12:H=(I.target_per_week||7)*oe,H>0?Math.min(1,$/H):0},X=e.length?Math.round(e.reduce((I,$)=>I+ye($),0)/e.length*100):0,Y=I=>{const $=new Date;return $.setDate($.getDate()+I),xi($)},ce=I=>e.filter($=>x($,I)).length,J=[{label:"Today",value:ce(Y(0)),color:"#4C9A6B"},{label:"Yesterday",value:ce(Y(-1)),color:"var(--text-3)"},{label:"Day before",value:ce(Y(-2)),color:"var(--text-3)"}];return t.jsxs("div",{children:[t.jsxs("div",{style:V.mainHead,children:[t.jsx("div",{style:V.eyebrow,children:"Weekly view"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,flexWrap:"wrap"},children:[t.jsx("h1",{style:V.h1,children:"All Habits"}),a&&e.length>0&&t.jsxs("button",{onClick:B,style:V.nameToggle,title:h?"Hide habit names — tap a circle to reveal one":"Show all habit names",children:[t.jsx("span",{style:{...V.nameToggleTrack,background:h?"#4C9A6B":"var(--border)"},children:t.jsx("span",{style:{...V.nameToggleKnob,left:h?19:3}})}),h?t.jsx(js,{size:13}):t.jsx(Ja,{size:13}),t.jsx("span",{children:"Names"})]})]})]}),t.jsxs("div",{style:V.navBar,children:[t.jsx("button",{onClick:()=>g(I=>I-1),style:V.navBtn,children:t.jsx(An,{size:16})}),t.jsx("span",{style:V.navLabel,children:z}),t.jsx("button",{onClick:()=>g(I=>Math.min(0,I+1)),disabled:d>=0,style:{...V.navBtn,...d>=0?V.navBtnDisabled:{}},children:t.jsx(cn,{size:16})})]}),t.jsxs("div",{style:{...V.weekCard,...a?V.weekCardMobile:{}},children:[t.jsxs("div",{style:{...V.weekHeadRow,...a?V.weekRowMobile:{}},children:[t.jsx("div",{style:{...V.weekNameCol,...a?V.weekNameColMobile:{}}}),ai.map((I,$)=>t.jsxs("div",{style:V.weekDayHead,children:[t.jsx("span",{style:V.weekDayName,children:I}),t.jsx("span",{style:{...V.weekDayNum,...T[$]===Un?V.weekDayToday:{}},children:new Date(T[$]+"T00:00").getDate()})]},I)),t.jsx("div",{style:{...V.weekStreakCol,...a?V.weekStreakColMobile:{}},children:a?t.jsx(so,{size:12}):"Streak"})]}),e.map(I=>{var tt,ft;const $=((tt=Rn[I.pillar])==null?void 0:tt.dot)||"#9A968C",H=((ft=Rn[I.pillar])==null?void 0:ft.soft)||"rgba(0,0,0,0.05)",P=n(I),ae=I.type==="weekly",me=new Set(I.days||[]),Ne=[0,1,2,3,4,5,6].filter(_e=>me.has(_e)),Q=ae&&Ne.length>0&&Ne.every(_e=>P.has(T[_e])),re=ae?Array(7).fill(Q):null,G=I.type==="minimum"&&["week","month","year"].includes(I.period),le=I.target_count||0,E=I.logs||[],S=_e=>E.filter(it=>it.slice(0,7)===_e).length,ie=_e=>E.filter(it=>it.slice(0,4)===_e).length,fe=T.filter(_e=>P.has(_e)).length,U=_e=>G?I.period==="week"?fe>=le:I.period==="month"?S(_e.slice(0,7))>=le:I.period==="year"?ie(_e.slice(0,4))>=le:!1:!1,xe=G&&T.some(U),ve=I.period==="week"?fe:I.period==="month"?S(T[0].slice(0,7)):I.period==="year"?ie(T[0].slice(0,4)):0,Ae=m===I.id;return t.jsxs(c.Fragment,{children:[a&&(Ae||h)&&t.jsxs("button",{onClick:()=>l&&l(I.id),style:{...V.mobileNameBanner,color:$},children:[t.jsx("span",{style:{...V.sideDot,background:$}}),t.jsx("span",{style:V.mobileNameText,children:I.name}),I.type==="weekly"?t.jsx("span",{style:V.typeBadge,children:(I.days||[]).map(_e=>ai[_e]).join("·")||"—"}):I.type!=="regular"?t.jsx("span",{style:V.typeBadge,children:I.type==="minimum"?`≥${I.target_count}/${I.period}`:`≤${I.target_count}/${I.period}`}):null]}),t.jsxs("div",{style:{...V.weekRow,...a?V.weekRowMobile:{}},children:[a?t.jsx("div",{style:{...V.weekNameCol,...V.weekNameColMobile},children:t.jsx("button",{onClick:()=>f(Ae?null:I.id),style:{...V.habitAvatar,background:$},title:I.name,children:(I.name||"?").trim().charAt(0).toUpperCase()})}):t.jsxs("div",{style:{...V.weekNameCol,flexDirection:"column",alignItems:"flex-start",gap:2},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[t.jsx("span",{style:{...V.sideDot,background:$}}),t.jsx("span",{style:V.weekHabitName,children:I.name})]}),I.type==="weekly"?t.jsx("span",{style:V.typeBadge,children:(I.days||[]).map(_e=>ai[_e]).join("·")||"—"}):I.type!=="regular"?t.jsx("span",{style:V.typeBadge,children:I.type==="minimum"?`≥${I.target_count}/${I.period}`:`≤${I.target_count}/${I.period}`}):null]}),T.map((_e,it)=>{var Vt,Ot;if(ae&&!me.has(it))return t.jsxs("div",{style:{...V.weekCell,position:"relative",zIndex:0},children:[re[it]&&t.jsx("span",{style:{...V.chainLine,background:$,left:re[it-1]?0:"50%",right:re[it+1]?0:"50%"}}),t.jsx("span",{style:{...V.offDay,position:"relative",zIndex:1},title:"Not scheduled",children:"·"})]},_e);const Ze=P.has(_e),st=_e>Un,de=(I.type==="minimum"||I.type==="maximum")&&I.period==="day",Me=(Vt=I.log_counts)==null?void 0:Vt[_e],lt=Me!=null,dt=!!((Ot=I.log_notes)!=null&&Ot[_e]),kt=U(_e),Nt=it>0&&U(T[it-1]),Xt=it<T.length-1&&U(T[it+1]),Bt=Ze||kt;return t.jsxs("div",{style:{...V.weekCell,position:"relative",zIndex:0},children:[kt&&t.jsx("span",{style:{...V.chainLine,background:$,left:Nt?0:"50%",right:Xt?0:"50%"}}),ae&&re[it]&&t.jsx("span",{style:{...V.chainLine,background:$,left:re[it-1]?0:"50%",right:re[it+1]?0:"50%"}}),t.jsx("button",{disabled:st,onClick:()=>r(I,_e),style:{...V.tick,...Bt?{background:$,borderColor:$,color:"#fff"}:{},...de&&lt&&!Ze?{borderColor:$,color:$}:{},...st&&!Bt?V.tickFuture:{}},children:de?lt?t.jsx("span",{style:{fontSize:12,fontWeight:700},children:Me}):null:Ze&&t.jsx(He,{size:14,color:"#fff",strokeWidth:3})}),dt&&t.jsx("span",{style:V.cellNoteBubble})]},_e)}),t.jsx("div",{style:{...V.weekStreakCol,...a?V.weekStreakColMobile:{}},children:Q?t.jsxs("span",{style:{...V.streakPill,...a?V.streakPillMobile:{},background:H,color:$},children:[t.jsx(Ss,{size:12})," ",a?Ne.length:`${Ne.length}/${Ne.length}`]}):xe?t.jsxs("span",{style:{...V.streakPill,...a?V.streakPillMobile:{},background:H,color:$},children:[t.jsx(Ss,{size:12})," ",a?ve:`${ve}/${le}`]}):t.jsxs("span",{style:{...V.streakPill,...a?V.streakPillMobile:{},background:H,color:$},children:[t.jsx(so,{size:12})," ",I.streak]})})]}),s&&s(I)]},I.id)}),e.length===0&&t.jsx("div",{style:{fontSize:13,color:"var(--text-3)",padding:"24px 12px",textAlign:"center"},children:"No habits yet — add one from the sidebar."})]}),e.length>0&&t.jsxs("div",{style:{...V.progressCard,marginTop:18,marginBottom:0},children:[t.jsx(rd,{pct:_,label:"Today",sub:`${y}/${e.length} done`,color:"#4C9A6B"}),t.jsx("div",{style:V.progressDivider}),t.jsx(rd,{pct:ne,label:"This week",sub:"of weekly targets",color:"#3A7CA5"}),t.jsx("div",{style:V.progressDivider}),t.jsx(rd,{pct:X,label:"This month",sub:"of monthly targets",color:"#8268B0"})]}),e.length>0&&t.jsxs("div",{style:{...V.progressCard,marginTop:14,marginBottom:0,flexDirection:"column",alignItems:"stretch",gap:12},children:[t.jsx("div",{style:V.threeDayTitle,children:"Last 3 days · habits completed"}),t.jsx(mv,{items:J,total:e.length})]})]})}function mv({items:e,total:r}){const n=Math.max(1,r,...e.map(o=>o.value));return t.jsx("div",{style:V.tbWrap,children:e.map((o,i)=>t.jsxs("div",{style:V.tbRow,children:[t.jsx("div",{style:V.tbLbl,children:o.label}),t.jsx("div",{style:V.tbTrack,children:t.jsx("div",{style:{...V.tbBar,width:`${o.value/n*100}%`,background:o.color}})}),t.jsxs("div",{style:V.tbVal,children:[o.value,"/",r]})]},i))})}function hv({habit:e,dayAction:r,logSet:n,onDelete:o,onEdit:i,setNote:s,onToggleActive:a,renderInline:l}){var Ne,Q;const[d,g]=c.useState(null),[m,f]=c.useState(""),[h,R]=c.useState(null),[B,T]=c.useState(0),z=c.useRef(null);if(!e)return null;const b=((Ne=Rn[e.pillar])==null?void 0:Ne.dot)||"#9A968C",p=((Q=Rn[e.pillar])==null?void 0:Q.soft)||"rgba(0,0,0,0.05)",u=n(e),j=e.type==="weekly",k=new Set(e.days||[]),C=re=>(new Date(re+"T00:00").getDay()+6)%7,D=re=>!j||k.has(C(re)),x=re=>{const G=new Date(re+"T00:00"),le=G.getDay(),E=new Date(G);E.setDate(G.getDate()+(le===0?-6:1-le));const S=Array.from({length:7},(U,xe)=>{const ve=new Date(E);return ve.setDate(E.getDate()+xe),xi(ve)}),ie=[0,1,2,3,4,5,6].filter(U=>k.has(U)),fe=ie.length>0&&ie.every(U=>u.has(S[U]));return Array(7).fill(fe)},{dates:y,startOffset:_,label:Z,year:ne}=sv(B),ue=y.filter(re=>re<=Un&&D(re)&&u.has(re)).length,A=y.filter(re=>re<=Un&&D(re)).length,K=A>0?Math.round(ue/A*100):0,oe=e.type==="minimum"&&(e.period==="month"||e.period==="year"),ye=e.period==="year"?(e.logs||[]).filter(re=>re.startsWith(`${ne}-`)).length:y.filter(re=>u.has(re)).length,X=oe&&ye>=(e.target_count||0),Y=e.type==="minimum"&&e.period==="week",ce=e.target_count||0,J=re=>{const G=new Date(re+"T00:00"),le=G.getDay(),E=new Date(G);E.setDate(G.getDate()+(le===0?-6:1-le));let S=0;for(let ie=0;ie<7;ie++){const fe=new Date(E);fe.setDate(E.getDate()+ie),u.has(xi(fe))&&S++}return S},I=re=>oe?X:Y?J(re)>=ce:!1,$=Y?J(Un):0,H=Y&&$>=ce,P=re=>{z.current=setTimeout(()=>g(re),500)},ae=()=>clearTimeout(z.current),me=re=>{var G;R(re),f(((G=e.log_notes)==null?void 0:G[re])||""),g(null)};return t.jsxs("div",{children:[t.jsxs("div",{style:V.mainHead,children:[t.jsxs("div",{children:[t.jsxs("div",{style:V.eyebrow,children:[t.jsx("span",{style:{...V.sideDot,background:b,marginRight:6}}),e.pillar," · Monthly view"]}),t.jsx("h1",{style:V.h1,children:e.name})]}),t.jsxs("div",{style:{display:"flex",gap:8,marginTop:8,flexWrap:"wrap"},children:[t.jsxs("button",{onClick:i,style:V.actionBtn,children:[t.jsx(jt,{size:14})," Edit"]}),t.jsx("button",{onClick:()=>a(e.id,e.active===!1),style:{...V.actionBtn,...e.active===!1?{color:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:e.active===!1?t.jsxs(t.Fragment,{children:[t.jsx(He,{size:14})," Enable"]}):t.jsxs(t.Fragment,{children:[t.jsx(w0,{size:14})," Disable"]})}),t.jsxs("button",{onClick:o,style:{...V.actionBtn,color:"#C2536B",borderColor:"#C2536B"},children:[t.jsx(Fe,{size:14})," Delete"]}),e.reminder_time&&t.jsxs("button",{style:V.actionBtn,children:[t.jsx(kg,{size:14})," ",e.reminder_time]})]})]}),t.jsxs("div",{style:V.statStrip,children:[t.jsx(po,{label:"Current streak",value:`${e.streak} days`,c:b,soft:p,flame:!0}),t.jsx(po,{label:"Best streak",value:`${e.max_streak??e.streak} days`,c:b,soft:p,flame:!0}),t.jsx(po,{label:"Done this month",value:`${ue}/${A}`,c:b,soft:p}),t.jsx(po,{label:"Completion",value:`${K}%`,c:b,soft:p}),e.type==="regular"?t.jsx(po,{label:"Weekly target",value:`${e.target_per_week}×`,c:b,soft:p}):e.type==="weekly"?t.jsx(po,{label:"Days",value:(e.days||[]).map(re=>ai[re]).join(", ")||"—",c:b,soft:p}):t.jsx(po,{label:e.type==="minimum"?"Min target":"Max allowed",value:`${e.target_count}/${e.period}`,c:b,soft:p})]}),l&&l(e),t.jsxs("div",{style:V.navBar,children:[t.jsx("button",{onClick:()=>T(re=>re-1),style:V.navBtn,children:t.jsx(An,{size:16})}),t.jsxs("span",{style:V.navLabel,children:[Z,B===0?" · This month":""]}),t.jsx("button",{onClick:()=>T(re=>Math.min(0,re+1)),disabled:B>=0,style:{...V.navBtn,...B>=0?V.navBtnDisabled:{}},children:t.jsx(cn,{size:16})})]}),oe&&t.jsxs("div",{style:{...V.chainBanner,background:X?p:"var(--bg)",color:X?b:"var(--text-3)"},children:[t.jsx(Ss,{size:15}),X?`${e.period==="year"?"Yearly":"Monthly"} chain complete — ${ye}/${e.target_count} connected`:`${ye}/${e.target_count} this ${e.period} · ${(e.target_count||0)-ye} more to connect the chain`]}),Y&&B===0&&t.jsxs("div",{style:{...V.chainBanner,background:H?p:"var(--bg)",color:H?b:"var(--text-3)"},children:[t.jsx(Ss,{size:15}),H?`This week's chain complete — ${$}/${ce} connected`:`${$}/${ce} this week · ${Math.max(0,ce-$)} more to connect the chain`]}),t.jsxs("div",{style:V.monthCard,children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[t.jsx("div",{style:V.monthTitle,children:Z}),t.jsx("span",{style:{fontSize:11,color:"var(--text-3)"},children:"Long-press a day for options"})]}),t.jsx("div",{style:V.monthDow,children:ai.map(re=>t.jsx("div",{style:V.monthDowCell,children:re},re))}),t.jsxs("div",{style:V.monthGrid,children:[Array.from({length:_}).map((re,G)=>t.jsx("div",{},`pad${G}`)),y.map((re,G)=>{var _e,it;const le=G+1;if(j&&!D(re)){const Ze=C(re),st=x(re),de=(_+G)%7;return t.jsxs("div",{style:{position:"relative"},children:[st[Ze]&&t.jsx("span",{style:{...V.chainLine,background:b,...de===0?{left:"50%"}:{left:st[Ze-1]?-6:"50%"},...de===6?{right:"50%"}:{right:st[Ze+1]?-6:"50%"}}}),t.jsx("div",{style:{...V.monthDay,...V.monthDayOff,width:"100%",position:"relative",zIndex:1},children:le})]},re)}const E=u.has(re),S=re>Un,ie=re===Un,fe=!!((_e=e.log_notes)!=null&&_e[re]),U=(e.type==="minimum"||e.type==="maximum")&&e.period==="day",xe=(it=e.log_counts)==null?void 0:it[re],ve=xe!=null,Ae=I(re),tt=Ae&&!E,ft=(_+G)%7;return t.jsxs("div",{style:{position:"relative"},children:[Ae&&t.jsx("span",{style:{...V.chainLine,background:b,...ft===0?{left:"50%"}:{left:-6},...ft===6?{right:"50%"}:{right:-6}}}),j&&(()=>{const Ze=C(re),st=x(re);return st[Ze]?t.jsx("span",{style:{...V.chainLine,background:b,...ft===0?{left:"50%"}:{left:st[Ze-1]?-6:"50%"},...ft===6?{right:"50%"}:{right:st[Ze+1]?-6:"50%"}}}):null})(),t.jsx("button",{disabled:S,onClick:()=>r(e,re),onMouseDown:()=>!U&&P(re),onMouseUp:ae,onTouchStart:()=>!U&&P(re),onTouchEnd:ae,style:{...V.monthDay,position:"relative",zIndex:1,...E?{background:b,borderColor:b,color:"#fff"}:{},...tt?{background:p,borderColor:b,color:b}:{},...U&&ve&&!E?{borderColor:b,color:b}:{},...S&&!E?V.monthDayFuture:{},...ie&&!E?{borderColor:b,borderWidth:2}:{},width:"100%"},children:le}),U&&ve&&t.jsx("span",{style:{...V.countBadge,background:E?"#4C9A6B":b},children:xe}),fe&&t.jsx("span",{style:V.noteIndicator}),d===re&&t.jsx(fv,{onEdit:i,onDelete:o,onAddNote:()=>me(re),onRemind:i,onClose:()=>g(null)})]},re)})]})]}),h&&t.jsxs("div",{style:V.noteBox,children:[t.jsxs("div",{style:{fontWeight:600,fontSize:13,marginBottom:6},children:["Note for ",h]}),t.jsx("textarea",{value:m,onChange:re=>f(re.target.value),placeholder:"Add a note for this day…",style:{...V.sideInput,minHeight:60,resize:"vertical"}}),t.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[t.jsxs("button",{onClick:()=>{s(h,m),R(null)},style:V.sideAddBtn,children:[t.jsx(He,{size:13})," Save"]}),t.jsx("button",{onClick:()=>R(null),style:V.sideCancelBtn,children:t.jsx(Fe,{size:13})})]})]})]})}function fv({onEdit:e,onDelete:r,onAddNote:n,onRemind:o,onClose:i}){return t.jsxs("div",{style:V.longPressMenu,children:[t.jsxs("button",{style:V.menuItem,onClick:()=>{e(),i()},children:[t.jsx(jt,{size:13})," Edit"]}),t.jsxs("button",{style:V.menuItem,onClick:()=>{n(),i()},children:[t.jsx(wg,{size:13})," Add note"]}),t.jsxs("button",{style:V.menuItem,onClick:()=>{o(),i()},children:[t.jsx(kg,{size:13})," Remind"]}),t.jsxs("button",{style:{...V.menuItem,color:"#C2536B"},onClick:()=>{r(),i()},children:[t.jsx(Fe,{size:13})," Delete"]})]})}function xv({habits:e,onSave:r,onToggleActive:n,onClose:o}){const[i,s]=c.useState(()=>e.map(g=>g.id)),a=c.useMemo(()=>{const g={};return e.forEach(m=>g[m.id]=m),g},[e]),l=i.map(g=>a[g]).filter(Boolean),d=(g,m)=>{const f=g+m;if(f<0||f>=i.length)return;const h=[...i];[h[g],h[f]]=[h[f],h[g]],s(h)};return t.jsx("div",{style:V.modalOverlay,onClick:o,children:t.jsxs("div",{style:{...V.modal,maxHeight:"80vh",overflow:"hidden"},onClick:g=>g.stopPropagation(),children:[t.jsxs("div",{style:{...V.modalHead,flexShrink:0},children:["Edit Habits",t.jsx("button",{onClick:o,style:V.closeBtn,children:t.jsx(Fe,{size:16})})]}),t.jsx("p",{style:{fontSize:12,color:"var(--text-3)",margin:"0 0 10px",flexShrink:0},children:"Reorder with the arrows. Toggle a habit off to hide it from your views (its history is kept)."}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6,overflowY:"auto",minHeight:0},children:l.map((g,m)=>{var R;const f=((R=Rn[g.pillar])==null?void 0:R.dot)||"#9A968C",h=g.active!==!1;return t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"9px 10px",background:"var(--bg)",borderRadius:9,border:"1px solid var(--border)",opacity:h?1:.5},children:[t.jsx("span",{style:{...V.sideDot,background:f}}),t.jsx("span",{style:{flex:1,fontSize:13,fontWeight:500,textDecoration:h?"none":"line-through"},children:g.name}),t.jsx("button",{onClick:()=>n(g.id,!h),title:h?"Disable (hide) habit":"Enable habit",style:{...V.activeToggle,...h?V.activeToggleOn:{}},role:"switch","aria-checked":h,children:t.jsx("span",{style:{...V.activeKnob,...h?V.activeKnobOn:{}}})}),t.jsx("button",{onClick:()=>d(m,-1),disabled:m===0,style:{...V.navBtn,width:28,height:28,opacity:m===0?.3:1,fontSize:14},children:"↑"}),t.jsx("button",{onClick:()=>d(m,1),disabled:m===l.length-1,style:{...V.navBtn,width:28,height:28,opacity:m===l.length-1?.3:1,fontSize:14},children:"↓"})]},g.id)})}),t.jsxs("button",{onClick:()=>r(i),style:{...V.sideAddBtn,width:"100%",marginTop:14,height:38,justifyContent:"center",flexShrink:0},children:[t.jsx(He,{size:14})," Save Order"]})]})})}function yv({year:e}){const[r,n]=c.useState([]);if(c.useEffect(()=>{M.getHabitsYearly(e).then(n).catch(console.error)},[e]),!r.length)return null;const o=Array.from({length:12},(s,a)=>{const l=r.reduce((g,m)=>{var f;return g+(((f=m.monthly[a+1])==null?void 0:f.done)||0)},0),d=r.reduce((g,m)=>{var f;return g+Math.floor((((f=m.monthly[a+1])==null?void 0:f.days)||30)/7*7)},0);return d>0?Math.round(l/d*100):0}),i=Math.max(...o,1);return t.jsxs("div",{style:{...V.monthCard,marginTop:18},children:[t.jsxs("div",{style:V.monthTitle,children:[e," Completion"]}),t.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:6,height:80,marginTop:12},children:o.map((s,a)=>t.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[t.jsx("div",{style:{width:"100%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",height:`${s/i*60}px`,minHeight:2,opacity:s>0?1:.15},title:`${s}%`}),t.jsx("span",{style:{fontSize:9,color:"var(--text-3)",fontWeight:600},children:ov[a]})]},a))})]})}function po({label:e,value:r,c:n,soft:o,flame:i}){return t.jsxs("div",{style:{...V.stat,background:o},children:[t.jsx("div",{style:V.statLabel,children:e}),t.jsxs("div",{style:{...V.statValue,color:n},children:[i&&t.jsx(so,{size:15})," ",r]})]})}const V={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:230,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",padding:"20px 12px",display:"flex",flexDirection:"column",gap:3,overflowY:"auto"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.18)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)",boxShadow:"none"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.38)",zIndex:20},sideTop:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 4px"},closeBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",marginBottom:8},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700,padding:"0 6px 14px"},sideItem:{display:"flex",alignItems:"center",gap:9,width:"100%",border:"none",background:"none",padding:"9px 10px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:500,color:"var(--text-2)",textAlign:"left"},sideItemOn:{background:"var(--hover)",fontWeight:600},sideLabel:{flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},sideCount:{fontSize:11,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:10,padding:"1px 7px"},sideStreak:{display:"flex",alignItems:"center",gap:3,fontSize:11,fontWeight:600,color:"#C2773B"},sideDot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},sideDivider:{height:1,background:"var(--border)",margin:"8px 6px"},addBox:{padding:"10px 6px",display:"flex",flexDirection:"column",gap:6},sideInput:{border:"1px solid var(--border)",borderRadius:7,padding:"7px 9px",fontSize:13,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box"},sideAddBtn:{border:"none",background:"#4C9A6B",color:"#fff",height:30,padding:"0 12px",borderRadius:7,cursor:"pointer",display:"flex",alignItems:"center",gap:5,fontSize:13,fontFamily:"inherit"},sideCancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:30,height:30,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},sideNewBtn:{display:"flex",alignItems:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",borderRadius:8,padding:"8px 10px",fontSize:12.5,color:"var(--text-3)",fontWeight:600,cursor:"pointer",fontFamily:"inherit",marginTop:6,justifyContent:"center"},main:{flex:1,padding:"26px",overflowX:"hidden",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:200},mainHead:{marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:5,display:"flex",alignItems:"center"},h1:{fontSize:27,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},actionBtn:{display:"flex",alignItems:"center",gap:5,fontSize:12,fontWeight:500,color:"var(--text-2)",border:"1px solid var(--border)",background:"var(--surface)",padding:"5px 10px",borderRadius:7,cursor:"pointer",fontFamily:"inherit"},progressCard:{background:"var(--surface)",borderRadius:12,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14,display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"},progressDivider:{width:1,alignSelf:"stretch",background:"var(--border)",minHeight:48},threeDayTitle:{fontSize:13,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:84,fontSize:11.5,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap"},tbTrack:{flex:1,height:14,background:"var(--surface-2)",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:52,fontSize:11.5,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"},ringStat:{display:"flex",alignItems:"center",gap:12,flex:"1 1 160px"},ringBox:{position:"relative",width:70,height:70,display:"grid",placeItems:"center",flexShrink:0},ringPct:{position:"absolute",inset:0,display:"grid",placeItems:"center",fontSize:16,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},ringLabel:{fontSize:14,fontWeight:700,color:"var(--text)"},ringSub:{fontSize:11.5,color:"var(--text-3)",fontWeight:500,marginTop:2},weekCard:{background:"var(--surface)",borderRadius:12,padding:"8px 14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",overflowX:"auto"},weekCardMobile:{padding:"8px 8px 12px",overflowX:"hidden"},weekHeadRow:{display:"flex",alignItems:"flex-end",padding:"10px 0",borderBottom:"1px solid var(--border)",minWidth:480,position:"relative",zIndex:0},weekRowMobile:{minWidth:0},weekNameCol:{width:160,flexShrink:0,alignSelf:"stretch",display:"flex",alignItems:"center",gap:8,position:"sticky",left:0,zIndex:5,background:"var(--surface)",boxShadow:"6px 0 6px -6px rgba(0,0,0,0.15)"},weekNameColMobile:{width:34,gap:0,boxShadow:"none",justifyContent:"center",position:"static"},weekStreakColMobile:{width:30},streakPillMobile:{padding:"3px 6px",gap:2},habitAvatar:{width:26,height:26,borderRadius:"50%",border:"none",color:"#fff",fontSize:12,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,lineHeight:1},mobileNameBanner:{display:"flex",alignItems:"center",gap:7,width:"100%",border:"none",background:"var(--hover)",borderRadius:8,padding:"6px 10px",margin:"4px 0 2px",cursor:"pointer",fontFamily:"inherit",textAlign:"left"},mobileNameText:{fontSize:13,fontWeight:700,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},nameToggle:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",borderRadius:20,padding:"5px 11px 5px 5px",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit",flexShrink:0},nameToggleTrack:{position:"relative",width:34,height:20,borderRadius:10,flexShrink:0,transition:"background 0.2s",display:"inline-block"},nameToggleKnob:{position:"absolute",top:3,width:14,height:14,borderRadius:"50%",background:"#fff",transition:"left 0.2s",boxShadow:"0 1px 2px rgba(0,0,0,0.3)"},weekDayHead:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:2},weekDayName:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekDayNum:{fontSize:12,fontWeight:600,color:"var(--text-2)",width:22,height:22,display:"grid",placeItems:"center",borderRadius:"50%"},weekDayToday:{background:"var(--accent-strong)",color:"#fff"},weekStreakCol:{width:64,flexShrink:0,textAlign:"center",fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},weekRow:{display:"flex",alignItems:"center",padding:"9px 0",borderBottom:"1px solid #F4F2EC",minWidth:480,position:"relative",zIndex:0},weekHabitName:{fontSize:13,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},weekCell:{flex:1,display:"grid",placeItems:"center"},typeBadge:{fontSize:10,color:"var(--text-3)",background:"var(--hover)",padding:"1px 6px",borderRadius:8,fontWeight:600},tick:{width:26,height:26,borderRadius:7,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",padding:0,position:"relative",zIndex:1},tickFuture:{opacity:.4,cursor:"not-allowed",borderStyle:"dashed"},streakPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:12,fontWeight:700,padding:"3px 9px",borderRadius:12},tinyBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:"2px 3px",display:"grid",placeItems:"center",borderRadius:4},statStrip:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(120px,1fr))",gap:10,marginBottom:18},stat:{borderRadius:10,padding:"13px 14px"},statLabel:{fontSize:11,fontWeight:600,color:"var(--text-2)",marginBottom:5},statValue:{fontSize:19,fontWeight:700,display:"flex",alignItems:"center",gap:5,fontFamily:"'Fraunces',Georgia,serif"},monthCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},monthTitle:{fontSize:14,fontWeight:700,marginBottom:12,fontFamily:"'Fraunces',Georgia,serif"},monthDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6,marginBottom:8},monthDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},monthGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6},monthDay:{aspectRatio:"1",border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",display:"grid",placeItems:"center"},monthDayFuture:{opacity:.4,cursor:"not-allowed",background:"var(--surface-2)"},monthDayOff:{background:"var(--surface-2)",borderStyle:"dashed",color:"var(--text-3)",opacity:.5,cursor:"default"},dayPick:{display:"flex",gap:4,flexWrap:"wrap"},dayChip:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",borderRadius:7,padding:"5px 7px",fontSize:11,fontWeight:700,cursor:"pointer",fontFamily:"inherit",minWidth:34},dayChipOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},pickHint:{fontSize:11,color:"var(--text-3)",fontWeight:600},offDay:{color:"var(--text-3)",opacity:.4,fontSize:18,lineHeight:1,userSelect:"none"},noteIndicator:{position:"absolute",top:3,right:3,width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},cellNoteBubble:{position:"absolute",top:2,right:"calc(50% - 16px)",width:5,height:5,borderRadius:"50%",background:"#3A7CA5"},countBadge:{position:"absolute",bottom:2,right:2,minWidth:13,height:13,padding:"0 2px",borderRadius:7,color:"#fff",fontSize:9,fontWeight:700,display:"grid",placeItems:"center",lineHeight:1},counterBtn:{width:44,height:44,borderRadius:"50%",border:"1.5px solid var(--border)",background:"var(--surface)",color:"var(--text)",fontSize:24,fontWeight:700,cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit",lineHeight:1},floatHint:{position:"absolute",left:"50%",bottom:"100%",transform:"translateX(-50%)",marginBottom:10,width:260,maxWidth:"80vw",textAlign:"center",fontSize:12,fontWeight:600,lineHeight:1.4,color:"#fff",background:"#26241F",borderRadius:10,padding:"9px 12px",boxShadow:"0 8px 24px rgba(0,0,0,0.28)",zIndex:10,pointerEvents:"none"},inlineCounter:{display:"flex",alignItems:"center",gap:10,padding:"8px 12px",margin:"2px 0 8px",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,flexWrap:"wrap"},inlineCount:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1},inlineTarget:{fontSize:12,fontWeight:600,color:"var(--text-3)",marginLeft:1},inlinePlus:{width:30,height:30,borderRadius:8,border:"1.5px solid var(--border)",background:"var(--surface)",color:"var(--text)",fontSize:18,fontWeight:700,cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit",lineHeight:1,flexShrink:0},inlineSet:{height:30,padding:"0 12px",borderRadius:8,border:"1.5px solid var(--border)",background:"var(--surface)",color:"var(--text)",fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",flexShrink:0},inlineWait:{fontSize:12,fontWeight:700,color:"#C2773B"},inlineReady:{fontSize:12,fontWeight:700,color:"#4C9A6B"},inlineMore:{marginLeft:"auto",border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",fontSize:16,fontWeight:700,lineHeight:1},activeToggle:{position:"relative",width:38,height:22,borderRadius:11,border:"none",background:"var(--border)",cursor:"pointer",flexShrink:0,transition:"background 0.2s",padding:0},activeToggleOn:{background:"#4C9A6B"},activeKnob:{position:"absolute",top:3,left:3,width:16,height:16,borderRadius:"50%",background:"#fff",transition:"left 0.2s",boxShadow:"0 1px 2px rgba(0,0,0,0.3)"},activeKnobOn:{left:19},chainLine:{position:"absolute",top:"calc(50% - 3px)",left:0,right:0,height:6,zIndex:0,opacity:.9},chainBanner:{display:"flex",alignItems:"center",gap:8,borderRadius:10,padding:"10px 14px",marginBottom:14,fontSize:12.5,fontWeight:700,fontFamily:"'Inter',system-ui,sans-serif"},navBar:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:16},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},navLabel:{fontSize:13,fontWeight:700,color:"var(--text)",minWidth:180,textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},noteBox:{background:"var(--surface)",borderRadius:10,padding:14,marginTop:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},longPressMenu:{position:"absolute",top:"100%",left:0,zIndex:50,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 4px 16px rgba(0,0,0,0.12)",padding:"4px 0",minWidth:140},menuItem:{display:"flex",alignItems:"center",gap:8,width:"100%",border:"none",background:"none",padding:"8px 14px",fontSize:13,color:"var(--text)",cursor:"pointer",fontFamily:"inherit",textAlign:"left"},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",zIndex:100,display:"grid",placeItems:"center"},modal:{background:"var(--surface)",borderRadius:14,padding:24,width:320,maxWidth:"90vw",display:"flex",flexDirection:"column",gap:8},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",fontWeight:700,fontSize:16,fontFamily:"'Fraunces',Georgia,serif",marginBottom:6},modalLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.08em",marginTop:4}},jc=[{id:1,label:"Rough",emoji:"😣",color:"#C2536B"},{id:2,label:"Low",emoji:"🙁",color:"#C2773B"},{id:3,label:"Okay",emoji:"😐",color:"#C9A227"},{id:4,label:"Good",emoji:"🙂",color:"#4C9A6B"},{id:5,label:"Great",emoji:"😄",color:"#3A7CA5"}],vv=e=>jc.find(r=>r.id===e),nd=[{id:"wins",label:"Wins",hint:"What went well today?",icon:Jr,color:"#C9A227"},{id:"grateful",label:"Grateful for",hint:"1–3 things",icon:xh,color:"#C2536B"},{id:"mattered",label:"What mattered",hint:"The point of today",icon:Sl,color:"#3A7CA5"},{id:"letgo",label:"Letting go of",hint:"Offload what's draining",icon:M0,color:"#8268B0"},{id:"tomorrow",label:"Tomorrow's one thing",hint:"A single priority",icon:Dh,color:"#4C9A6B"}],Uh=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,jv=()=>Uh(new Date),od=e=>new Date(e+"T00:00:00").toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long",year:"numeric"});function kv(){const e=jv(),[r,n]=[new Date().getFullYear(),new Date().getMonth()+1],[o,i]=c.useState(null),s=o||e,a=s===e,[l,d]=c.useState(null),[g,m]=c.useState({}),[f,h]=c.useState(Object.fromEntries(nd.map(y=>[y.id,""]))),R=c.useCallback(async y=>{const _=await M.getJournalEntry(y);d(_)},[]);c.useCallback(async()=>{const y=await M.getJournalHistory(r,n);m(y)},[r,n]);const B=c.useCallback(async()=>{const[y,_]=await Promise.all([M.getJournalEntry(s),M.getJournalHistory(r,n)]);d(y),m(_)},[s,r,n]);c.useEffect(()=>{B()},[B]);const T=async y=>{a&&(await M.updateJournalMood(s,y),B())},z=async y=>{if(!a)return;const _=f[y].trim();_&&(await M.addJournalBullet(s,y,_),h(Z=>({...Z,[y]:""})),R(s))},b=async y=>{await M.deleteJournalBullet(y),R(s)},p=y=>{i(y===e?null:y),h(Object.fromEntries(nd.map(_=>[_.id,""])))};if(!l)return t.jsx("div",{style:{padding:28,color:"var(--text-3)"},children:"Loading…"});const u=l.mood!==null,j=(()=>{let y=0;const _=new Date(e);if(g[e]||a&&u)y=1,_.setDate(_.getDate()-1);else return 0;for(;;){const ne=Uh(_);if(g[ne])y++,_.setDate(_.getDate()-1);else break}return y})(),k=Object.values(l.bullets||{}).reduce((y,_)=>y+_.length,0),C=new Date(r,n,0).getDate(),D=new Date(r,n-1,1).getDay(),x=D===0?6:D-1;return t.jsxs("div",{style:at.page,children:[t.jsxs("div",{style:at.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:at.eyebrow,children:"Anvil · Journal"}),!a&&t.jsxs("button",{style:at.backBtn,onClick:()=>i(null),children:[t.jsx(An,{size:14})," Back to Today"]}),t.jsx("h1",{style:at.h1,children:a?"Today":od(s)}),a&&t.jsx("div",{style:at.date,children:od(e)})]}),t.jsxs("div",{style:at.streakBox,children:[t.jsx(so,{size:16,color:"#C2773B"}),t.jsx("span",{style:at.streakNum,children:j}),t.jsx("span",{style:at.streakLabel,children:"day streak"})]})]}),t.jsxs("div",{style:at.card,children:[t.jsxs("div",{style:at.cardTitle,children:["How ",a?"are":"were"," you?"]}),t.jsx("div",{style:at.moodRow,children:jc.map(y=>{const _=l.mood===y.id;return t.jsxs("button",{onClick:()=>T(y.id),disabled:!a,style:{...at.moodBtn,cursor:a?"pointer":"default",..._?{background:y.color,borderColor:y.color,transform:"translateY(-2px)"}:{},...!a&&!_?{opacity:.55}:{}},children:[t.jsx("span",{style:at.moodEmoji,children:y.emoji}),t.jsx("span",{style:{...at.moodLabel,color:_?"#fff":"#6B675E"},children:y.label})]},y.id)})})]}),nd.map(y=>{var ne;const _=y.icon,Z=((ne=l.bullets)==null?void 0:ne[y.id])||[];return t.jsxs("div",{style:at.card,children:[t.jsxs("div",{style:at.sectionHead,children:[t.jsx("span",{style:{...at.sectionIcon,background:`${y.color}1A`,color:y.color},children:t.jsx(_,{size:15})}),t.jsxs("div",{children:[t.jsx("div",{style:at.cardTitle,children:y.label}),t.jsx("div",{style:at.sectionHint,children:y.hint})]})]}),t.jsxs("ul",{style:at.bulletList,children:[Z.map(ue=>t.jsxs("li",{style:at.bullet,children:[t.jsx("span",{style:{...at.bulletDot,background:y.color}}),t.jsx("span",{style:at.bulletText,children:ue.text}),a&&t.jsx("button",{onClick:()=>b(ue.id),style:at.bulletDel,children:t.jsx(Fe,{size:13})})]},ue.id)),!a&&Z.length===0&&t.jsx("li",{style:at.sectionHint,children:"Nothing written."})]}),a&&t.jsxs("div",{style:at.addRow,children:[t.jsx("input",{placeholder:"Add a point…",value:f[y.id],onChange:ue=>h(A=>({...A,[y.id]:ue.target.value})),onKeyDown:ue=>ue.key==="Enter"&&z(y.id),style:at.input}),t.jsx("button",{onClick:()=>z(y.id),style:{...at.addBtn,background:y.color},children:t.jsx(bt,{size:16})})]})]},y.id)}),t.jsxs("div",{style:at.card,children:[t.jsxs("div",{style:at.cardTitle,children:[new Date(r,n-1).toLocaleDateString("en-US",{month:"long",year:"numeric"})," · Mood history",t.jsx("span",{style:{fontSize:11,color:"var(--text-3)",fontWeight:400,marginLeft:8},children:"tap a day to view"})]}),t.jsx("div",{style:at.calDow,children:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(y=>t.jsx("div",{style:at.calDowCell,children:y},y))}),t.jsxs("div",{style:at.calGrid,children:[Array.from({length:x}).map((y,_)=>t.jsx("div",{},`p${_}`)),Array.from({length:C},(y,_)=>_+1).map(y=>{const _=`${r}-${String(n).padStart(2,"0")}-${String(y).padStart(2,"0")}`,Z=_===e&&l.mood?l.mood:g[_],ne=Z?vv(Z):null,ue=_>e,A=_===s;return t.jsx("button",{onClick:()=>!ue&&p(_),disabled:ue,style:{...at.calDay,background:ne?ne.color:ue?"var(--surface-2)":"var(--surface)",borderColor:A?"var(--accent-strong)":"var(--border)",borderWidth:A?2:1,color:ne?"#fff":"var(--text-3)",opacity:ue?.5:1,cursor:ue?"not-allowed":"pointer",outline:A?"2px solid var(--accent-strong)":"none",outlineOffset:1},title:ne?ne.label:_,children:ne?ne.emoji:y},y)})]}),t.jsx("div",{style:at.legend,children:jc.map(y=>t.jsxs("span",{style:at.legendItem,children:[t.jsx("span",{style:{...at.legendDot,background:y.color}})," ",y.label]},y.id))})]}),t.jsx("div",{style:at.footer,children:a?u?`Mood set · ${k} point${k===1?"":"s"} written today`:"Tap a mood to log today and keep your streak":`Viewing ${od(s)} · past entries are read-only`})]})}const at={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:22},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},backBtn:{display:"inline-flex",alignItems:"center",gap:4,border:"none",background:"none",color:"#3A7CA5",fontSize:12.5,fontWeight:600,cursor:"pointer",padding:"0 0 6px",fontFamily:"inherit"},h1:{fontSize:30,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},date:{fontSize:13,color:"var(--text-3)",marginTop:4},streakBox:{display:"flex",alignItems:"center",gap:6,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"8px 14px"},streakNum:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"#C2773B"},streakLabel:{fontSize:11,color:"var(--text-3)",fontWeight:500},card:{background:"var(--surface)",borderRadius:12,padding:"18px 20px",marginBottom:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},cardTitle:{fontSize:14,fontWeight:700,marginBottom:12,color:"var(--text)"},moodRow:{display:"flex",gap:8,flexWrap:"wrap"},moodBtn:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,border:"2px solid var(--border)",background:"var(--surface)",borderRadius:10,padding:"10px 12px",cursor:"pointer",flex:"1 1 60px",transition:"transform 0.1s"},moodEmoji:{fontSize:22},moodLabel:{fontSize:11,fontWeight:600},sectionHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:10},sectionIcon:{width:32,height:32,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},sectionHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},bulletList:{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6,marginBottom:10},bullet:{display:"flex",alignItems:"center",gap:8,fontSize:13.5,lineHeight:1.4},bulletDot:{width:6,height:6,borderRadius:"50%",flexShrink:0},bulletText:{flex:1},bulletDel:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},addRow:{display:"flex",gap:8},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 12px",fontSize:13.5,fontFamily:"inherit",outline:"none"},addBtn:{width:36,height:36,border:"none",borderRadius:8,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:12},calDay:{aspectRatio:"1",border:"1px solid var(--border)",borderRadius:7,fontSize:13,display:"grid",placeItems:"center",fontWeight:500,fontFamily:"inherit"},legend:{display:"flex",gap:10,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)"},legendDot:{width:8,height:8,borderRadius:"50%",display:"inline-block"},footer:{fontSize:12.5,color:"var(--text-3)",textAlign:"center",marginTop:8,fontStyle:"italic"}};function wv(e=760){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const Ur=[{id:"D",label:"Data",color:"#3A7CA5",soft:"rgba(58,124,165,0.10)",prompt:"What did you read/watch? Log the raw source and a quick note.",hint:"e.g. 'Atomic Habits ch.1 — habits are systems not goals'"},{id:"I",label:"Information",color:"#8268B0",soft:"rgba(130,104,176,0.10)",prompt:"What did you actually understand from it? In your own words.",hint:"e.g. 'Small 1% improvements compound into massive change over time'"},{id:"K",label:"Knowledge",color:"#C9A227",soft:"rgba(201,162,39,0.10)",prompt:"How will this specifically improve your life? Connect it to your goals.",hint:"e.g. 'I will improve my morning workout habit by 1% each week'"},{id:"W",label:"Wisdom",color:"#4C9A6B",soft:"rgba(76,154,107,0.10)",prompt:"How have you implemented it? What changed?",hint:"e.g. 'I've not missed a workout in 3 weeks using the 1% rule'"}],pp=e=>Ur.findIndex(r=>r.id===e),kc=[{id:"book",label:"Book",icon:Ds},{id:"video",label:"Video",icon:Fh},{id:"article",label:"Article",icon:wg}],ta=e=>kc.find(r=>r.id===e)||kc[0],id={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"};function Sv(){var fe;const[e,r]=c.useState([]),[n,o]=c.useState(null),[i,s]=c.useState("ALL"),[a,l]=c.useState(!1),[d,g]=c.useState(null),[m,f]=c.useState({title:"",type:"book",pillar:"Academic",note:"",link:""}),[h,R]=c.useState(null),[B,T]=c.useState({}),[z,b]=c.useState(null),[p,u]=c.useState(null),[j,k]=c.useState({}),[C,D]=c.useState({}),[x,y]=c.useState(null),_=wv(),Z=c.useCallback(async()=>{try{const U=await M.getSkills();r(U);const xe={};U.forEach(ve=>{xe[ve.id]=Object.fromEntries(Ur.map(Ae=>[Ae.id,""]))}),T(ve=>{const Ae={...xe};return U.forEach(tt=>{ve[tt.id]&&(Ae[tt.id]={...xe[tt.id],...ve[tt.id]})}),Ae})}catch(U){console.error(U)}},[]);c.useEffect(()=>{Z()},[Z]);const ne=e.find(U=>U.id===n),ue=ne?pp(ne.stage):-1,A=async(U,xe)=>{var Ae;const ve=(((Ae=B[U])==null?void 0:Ae[xe])??"").trim();ve&&(await M.addSkillNote(U,xe,ve),T(tt=>({...tt,[U]:{...tt[U],[xe]:""}})),Z())},K=async U=>{await M.deleteSkillNote(U),Z()},oe=U=>(U==null?void 0:U.source_type)==="book"?"Chapter":"Learning",ye=()=>`g${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,X=async U=>{const xe=[...U.data_groups||[]];xe.push({id:ye(),label:`${oe(U)} ${xe.length+1}`}),await M.setSkillGroups(U.id,xe),D(ve=>({...ve,[xe[xe.length-1].id]:!0})),Z()},Y=async(U,xe,ve)=>{const Ae=(U.data_groups||[]).map(tt=>tt.id===xe?{...tt,label:ve}:tt);await M.setSkillGroups(U.id,Ae),Z()},ce=async(U,xe)=>{const ve=(U.data_groups||[]).filter(Ae=>Ae.id!==xe);await M.setSkillGroups(U.id,ve),Z()},J=async(U,xe)=>{const ve=(j[xe]??"").trim();ve&&(await M.addSkillNote(U.id,"D",ve,xe),k(Ae=>({...Ae,[xe]:""})),Z())},I=async()=>{!ne||!(p!=null&&p.trim())||(await M.updateSkill(ne.id,{title:p.trim()}),u(null),Z())},$=async()=>{!z||!z.text.trim()||(await M.updateSkillNote(z.id,z.text.trim()),b(null),Z())},H=async U=>{await M.toggleSkillNote(U),Z()},P=async(U,xe)=>{e.find(Ae=>Ae.id===U)&&(xe==="W"&&g(U),await M.completeSkillStage(U,xe),Z())},ae=async()=>{if(!m.title.trim())return;const U=await M.createSkill({pillar:m.pillar,title:m.title.trim(),source_type:m.type,link:m.link.trim(),note_d:m.note.trim()});l(!1),f({title:"",type:"book",pillar:"Academic",note:"",link:""}),o(U.id),Z()},me=async()=>{ne&&(await M.updateSkill(ne.id,{link:(h||"").trim()}),R(null),Z())},{deleteItem:Ne,toasts:Q,handleUndo:re,handleDismiss:G}=kr(M.deleteSkill,M.restoreSkill,Z),le=(U,xe="Skill")=>{n===U&&o(null),Ne(U,xe)},E=i==="ALL"?e:e.filter(U=>U.stage===i),S=e.filter(U=>U.stage==="W").length,ie=!!ne;return t.jsxs("div",{style:je.page,children:[d&&t.jsx("div",{style:je.celebOverlay,children:t.jsxs("div",{style:je.celebBox,children:[t.jsx("div",{style:je.celebEmoji,children:"🏆"}),t.jsx("div",{style:je.celebTitle,children:"Wisdom unlocked!"}),t.jsx("div",{style:je.celebSub,children:"You've implemented this knowledge — that's rare and real."}),t.jsx("button",{onClick:()=>g(null),style:je.celebBtn,children:"Continue"})]})}),t.jsxs("div",{style:je.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:je.eyebrow,children:"Anvil · Skills"}),t.jsx("h1",{style:je.h1,children:"Skills"}),t.jsx("div",{style:je.subhead,children:"Data → Information → Knowledge → Wisdom"})]}),t.jsxs("div",{style:je.headRight,children:[t.jsxs("div",{style:je.wisdomBadge,children:[t.jsx(Jr,{size:14,color:"#C9A227"})," ",S," Wisdom",S!==1?"s":""]}),t.jsxs("button",{onClick:()=>{l(!0),o(null)},style:je.addSkillBtn,children:[t.jsx(bt,{size:15})," Add skill"]})]})]}),t.jsx("div",{style:je.filterBar,children:["ALL",...Ur.map(U=>U.id)].map(U=>{const xe=Ur.find(Ae=>Ae.id===U),ve=i===U;return t.jsx("button",{onClick:()=>s(U),style:{...je.filterBtn,...ve?{background:xe?xe.color:"var(--accent-strong)",color:"#fff",borderColor:"transparent"}:{}},children:xe?`${U} · ${xe.label}`:"All"},U)})}),t.jsxs("div",{style:{...je.layout,gridTemplateColumns:!_&&ie?"minmax(0,1fr) minmax(0,1fr)":"1fr"},children:[(!_||!ne)&&t.jsxs("div",{style:{...je.cardList,gridTemplateColumns:_||ie?"1fr":"repeat(3, minmax(0, 1fr))"},children:[a&&t.jsxs("div",{style:{...je.skillCard,border:"2px dashed #3A7CA5",gridColumn:"1 / -1"},children:[t.jsx("div",{style:je.cardTitle,children:"New skill"}),t.jsx("input",{placeholder:"Title (book / video / article name)",value:m.title,onChange:U=>f(xe=>({...xe,title:U.target.value})),onKeyDown:U=>U.key==="Enter"&&ae(),style:je.input,autoFocus:!0}),t.jsxs("div",{style:je.addRow,children:[t.jsx(sr,{value:m.type,options:kc.map(U=>({value:U.id,label:U.label})),onChange:U=>f(xe=>({...xe,type:U})),style:{flex:1}}),t.jsx(sr,{value:m.pillar,options:Object.keys(id),onChange:U=>f(xe=>({...xe,pillar:U})),style:{flex:1}})]}),t.jsx("input",{placeholder:m.type==="book"?"Link (optional)":`${ta(m.type).label} link (optional) — paste URL to route here`,value:m.link,onChange:U=>f(xe=>({...xe,link:U.target.value})),onKeyDown:U=>U.key==="Enter"&&ae(),style:je.input}),t.jsxs("div",{style:je.addRow,children:[t.jsxs("button",{onClick:ae,style:je.saveBtn,children:[t.jsx(He,{size:14})," Save"]}),t.jsxs("button",{onClick:()=>l(!1),style:je.cancelBtn,children:[t.jsx(Fe,{size:14})," Cancel"]})]})]}),E.map(U=>{const xe=pp(U.stage),ve=Ur[xe],Ae=ta(U.source_type),tt=U.stage==="W",ft=n===U.id;return t.jsxs("div",{onClick:()=>o(ft?null:U.id),style:{...je.skillCard,...ft?{borderColor:ve.color,borderWidth:2}:{},...tt?{background:"rgba(76,154,107,0.05)"}:{}},children:[t.jsxs("div",{style:je.skillCardTop,children:[t.jsxs("div",{style:je.skillMeta,children:[t.jsx("span",{style:{color:id[U.pillar]},children:t.jsx(Ae.icon,{size:13})}),t.jsx("span",{style:{...je.pillarDot,background:id[U.pillar]}}),t.jsxs("span",{style:je.srcLabel,children:[Ae.label," · ",U.pillar]})]}),t.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[tt&&t.jsx(Eo,{size:14,color:"#4C9A6B"}),U.link&&t.jsx("a",{href:U.link,target:"_blank",rel:"noreferrer",onClick:_e=>_e.stopPropagation(),style:je.ghostBtn,title:"Open source",children:t.jsx(pc,{size:13})}),t.jsx("button",{onClick:_e=>{_e.stopPropagation(),le(U.id,U.title)},style:je.ghostBtn,children:t.jsx(Fe,{size:13})})]})]}),t.jsx("div",{style:je.skillTitle,children:U.title}),t.jsxs("div",{style:je.track,children:[Ur.map((_e,it)=>{var Me;const Ze=it<xe,st=it===xe,de=(Me=U.completed_stages)==null?void 0:Me[_e.id];return t.jsxs("div",{style:{...je.trackItem,...it<Ur.length-1?{flex:1}:{}},children:[t.jsxs("div",{style:{...je.trackDot,background:Ze||de||st?_e.color:"var(--border)",boxShadow:st?`0 0 0 3px ${_e.color}33`:"none"},children:[(Ze||st&&de)&&t.jsx(He,{size:9,color:"#fff",strokeWidth:3}),st&&!de&&t.jsx("span",{style:je.trackCurrent,children:_e.id}),!Ze&&!st&&t.jsx(Ku,{size:8,color:"#B5B1A7"})]}),it<Ur.length-1&&t.jsx("div",{style:{...je.trackLine,background:Ze?Ur[it+1].color:"var(--border)"}})]},_e.id)}),t.jsx("span",{style:{...je.stageTag,background:ve.soft,color:ve.color},children:ve.label})]})]},U.id)}),E.length===0&&!a&&t.jsx("div",{style:{...je.empty,gridColumn:"1 / -1"},children:"No skills at this stage yet."})]}),ne&&t.jsxs("div",{style:je.detail,children:[t.jsxs("div",{style:je.detailHead,children:[_&&t.jsx("button",{onClick:()=>{o(null),u(null)},style:je.backBtn,title:"Back to skills",children:t.jsx(An,{size:18})}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsxs("div",{style:je.eyebrow,children:[ta(ne.source_type).label," · ",ne.pillar]}),p!==null?t.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",marginTop:4},children:[t.jsx("input",{autoFocus:!0,value:p,onChange:U=>u(U.target.value),onKeyDown:U=>{U.key==="Enter"&&I(),U.key==="Escape"&&u(null)},style:{...je.input,fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:0,flex:1}}),t.jsx("button",{onClick:I,style:{...je.noteAddBtn,background:"#4C9A6B",width:30,height:30},children:t.jsx(He,{size:13})}),t.jsx("button",{onClick:()=>u(null),style:{...je.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:30,height:30},children:t.jsx(Fe,{size:13})})]}):t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[t.jsx("div",{style:je.detailTitle,children:ne.title}),t.jsx("button",{onClick:()=>u(ne.title),style:je.ghostBtn,title:"Edit name",children:t.jsx(jt,{size:13})})]}),h!==null?t.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",marginTop:6},children:[t.jsx("input",{autoFocus:!0,value:h,placeholder:"Paste the video / article URL",onChange:U=>R(U.target.value),onKeyDown:U=>{U.key==="Enter"&&me(),U.key==="Escape"&&R(null)},style:{...je.input,marginBottom:0,flex:1}}),t.jsx("button",{onClick:me,style:{...je.noteAddBtn,background:"#4C9A6B",width:30,height:30},children:t.jsx(He,{size:13})}),t.jsx("button",{onClick:()=>R(null),style:{...je.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:30,height:30},children:t.jsx(Fe,{size:13})})]}):t.jsx("div",{style:{display:"flex",alignItems:"center",gap:8,marginTop:6,flexWrap:"wrap"},children:ne.link?t.jsxs(t.Fragment,{children:[t.jsxs("a",{href:ne.link,target:"_blank",rel:"noreferrer",style:je.openLinkBtn,children:[t.jsx(pc,{size:13})," Open ",ta(ne.source_type).label.toLowerCase()]}),t.jsx("button",{onClick:()=>R(ne.link),style:je.ghostBtn,title:"Edit link",children:t.jsx(jt,{size:12})})]}):t.jsxs("button",{onClick:()=>R(""),style:je.addLinkBtn,children:[t.jsx(Ss,{size:12})," Add link"]})})]}),t.jsx("button",{onClick:()=>{o(null),u(null)},style:je.closeBtn,children:t.jsx(Fe,{size:16})})]}),Ur.map((U,xe)=>{var Ze,st,de;const ve=xe<=ue,Ae=xe===ue,tt=xe<ue||((Ze=ne.completed_stages)==null?void 0:Ze[U.id]),ft=xe>ue,_e=((st=ne.notes)==null?void 0:st[U.id])||[],it=((de=B[ne.id])==null?void 0:de[U.id])??"";return t.jsxs("div",{style:{...je.stageBlock,...ve?{borderColor:U.color}:{},opacity:ft?.45:1},children:[t.jsxs("div",{style:je.stageBlockHead,children:[t.jsx("div",{style:{...je.stageLetter,background:ve?U.color:"var(--border)",color:ve?"#fff":"#9A968C"},children:tt&&!Ae?t.jsx(He,{size:12,color:"#fff",strokeWidth:3}):ft?t.jsx(Ku,{size:11,color:"#9A968C"}):U.id}),t.jsxs("div",{style:{flex:1},children:[t.jsx("div",{style:{...je.stageName,color:ve?U.color:"#9A968C"},children:U.label}),ve&&t.jsx("div",{style:je.stagePrompt,children:U.prompt})]}),tt&&!Ae&&t.jsx("span",{style:{...je.doneBadge,color:U.color,background:U.soft},children:"Done"})]}),ve&&(()=>{var Ot,mr;const Me=U.id==="W",lt=U.id==="D",dt=_e.length>0&&_e.every(Ge=>Ge.done),kt=Me?dt:_e.length>0,Nt=ne.data_groups||[],Xt=_e.filter(Ge=>!Ge.grp),Bt=oe(ne),Vt=Ge=>t.jsxs("li",{style:je.noteItem,children:[t.jsx("span",{style:{...je.noteDot,background:U.color}}),(z==null?void 0:z.id)===Ge.id?t.jsxs("div",{style:{flex:1,display:"flex",gap:5},children:[t.jsx("input",{autoFocus:!0,value:z.text,onChange:ot=>b(xt=>({...xt,text:ot.target.value})),onKeyDown:ot=>{ot.key==="Enter"&&$(),ot.key==="Escape"&&b(null)},style:{...je.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}),t.jsx("button",{onClick:$,style:{...je.noteAddBtn,background:U.color,width:28,height:28},children:t.jsx(He,{size:12})}),t.jsx("button",{onClick:()=>b(null),style:{...je.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:28,height:28},children:t.jsx(Fe,{size:12})})]}):t.jsx("span",{style:je.noteText,children:Ge.text}),(z==null?void 0:z.id)!==Ge.id&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>b({id:Ge.id,text:Ge.text}),style:je.ghostBtn,children:t.jsx(jt,{size:12})}),t.jsx("button",{onClick:()=>K(Ge.id),style:je.ghostBtn,children:t.jsx(Fe,{size:12})})]})]},Ge.id);return t.jsxs(t.Fragment,{children:[lt?t.jsxs(t.Fragment,{children:[Xt.length>0&&t.jsx("ul",{style:je.noteList,children:Xt.map(Vt)}),Nt.map(Ge=>{const ot=_e.filter(ut=>ut.grp===Ge.id),xt=C[Ge.id]!==!1;return t.jsxs("div",{style:{...je.groupBox,borderColor:`${U.color}55`},children:[t.jsxs("div",{style:je.groupHead,children:[t.jsx("button",{onClick:()=>D(ut=>({...ut,[Ge.id]:!xt})),style:je.groupCaret,children:xt?t.jsx(go,{size:15}):t.jsx(cn,{size:15})}),ne.source_type==="book"?t.jsx(Ds,{size:13,color:U.color}):t.jsx(u0,{size:13,color:U.color}),(x==null?void 0:x.id)===Ge.id?t.jsx("input",{autoFocus:!0,value:x.label,onChange:ut=>y(Rt=>({...Rt,label:ut.target.value})),onKeyDown:ut=>{ut.key==="Enter"&&(Y(ne,Ge.id,x.label.trim()||Ge.label),y(null)),ut.key==="Escape"&&y(null)},onBlur:()=>{Y(ne,Ge.id,x.label.trim()||Ge.label),y(null)},style:{...je.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}):t.jsx("span",{style:je.groupTitle,onClick:()=>y({id:Ge.id,label:Ge.label}),title:"Click to rename",children:Ge.label}),t.jsx("span",{style:je.groupCount,children:ot.length}),t.jsx("button",{onClick:()=>ce(ne,Ge.id),style:je.ghostBtn,title:`Delete ${Bt.toLowerCase()}`,children:t.jsx(Fe,{size:13})})]}),xt&&t.jsxs("div",{style:je.groupBody,children:[ot.length>0&&t.jsx("ul",{style:je.noteList,children:ot.map(Vt)}),t.jsxs("div",{style:je.noteAddRow,children:[t.jsx("input",{placeholder:"Add a point…",value:j[Ge.id]??"",onChange:ut=>k(Rt=>({...Rt,[Ge.id]:ut.target.value})),onKeyDown:ut=>ut.key==="Enter"&&J(ne,Ge.id),style:je.noteInput}),t.jsx("button",{onClick:()=>J(ne,Ge.id),style:{...je.noteAddBtn,background:U.color},children:t.jsx(bt,{size:14})})]})]})]},Ge.id)}),Nt.length===0&&Xt.length===0&&t.jsxs("div",{style:je.noNotes,children:["No ",Bt.toLowerCase(),"s yet — add one to start logging points."]}),t.jsxs("button",{onClick:()=>X(ne),style:{...je.addGroupBtn,color:U.color,borderColor:`${U.color}80`},children:[t.jsx(bt,{size:14})," Add ",Bt.toLowerCase()]})]}):t.jsxs(t.Fragment,{children:[_e.length>0&&t.jsx("ul",{style:je.noteList,children:_e.map(Ge=>t.jsxs("li",{style:je.noteItem,children:[Me?t.jsx("button",{onClick:()=>H(Ge.id),style:{...je.checkBox,...Ge.done?{background:U.color,borderColor:U.color}:{}},children:Ge.done&&t.jsx(He,{size:11,color:"#fff",strokeWidth:3})}):t.jsx("span",{style:{...je.noteDot,background:U.color}}),(z==null?void 0:z.id)===Ge.id?t.jsxs("div",{style:{flex:1,display:"flex",gap:5},children:[t.jsx("input",{autoFocus:!0,value:z.text,onChange:ot=>b(xt=>({...xt,text:ot.target.value})),onKeyDown:ot=>{ot.key==="Enter"&&$(),ot.key==="Escape"&&b(null)},style:{...je.noteInput,flex:1,padding:"4px 8px",fontSize:12.5}}),t.jsx("button",{onClick:$,style:{...je.noteAddBtn,background:U.color,width:28,height:28},children:t.jsx(He,{size:12})}),t.jsx("button",{onClick:()=>b(null),style:{...je.noteAddBtn,background:"var(--border)",color:"var(--text-2)",width:28,height:28},children:t.jsx(Fe,{size:12})})]}):t.jsx("span",{style:{...je.noteText,...Me&&Ge.done?{textDecoration:"line-through",color:"var(--text-3)"}:{}},children:Ge.text}),(z==null?void 0:z.id)!==Ge.id&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>b({id:Ge.id,text:Ge.text}),style:je.ghostBtn,children:t.jsx(jt,{size:12})}),t.jsx("button",{onClick:()=>K(Ge.id),style:je.ghostBtn,children:t.jsx(Fe,{size:12})})]})]},Ge.id))}),_e.length===0&&t.jsx("div",{style:je.noNotes,children:Me?"Add the steps to implement this — check each off as you do it.":`No notes yet — ${U.hint}`}),t.jsxs("div",{style:je.noteAddRow,children:[t.jsx("input",{placeholder:Me?"Add a step to implement…":`Add a ${U.label} note…`,value:it,onChange:Ge=>T(ot=>({...ot,[ne.id]:{...ot[ne.id],[U.id]:Ge.target.value}})),onKeyDown:Ge=>Ge.key==="Enter"&&A(ne.id,U.id),style:je.noteInput}),t.jsx("button",{onClick:()=>A(ne.id,U.id),style:{...je.noteAddBtn,background:U.color},children:t.jsx(bt,{size:14})})]})]}),Ae&&!((Ot=ne.completed_stages)!=null&&Ot[U.id])&&t.jsxs(t.Fragment,{children:[Me&&_e.length>0&&!dt&&t.jsxs("div",{style:je.checklistHint,children:[_e.filter(Ge=>Ge.done).length,"/",_e.length," done — check all steps to complete Wisdom"]}),t.jsxs("button",{onClick:()=>P(ne.id,U.id),disabled:!kt,style:{...je.advanceBtn,background:kt?U.color:"#C3BFB5",marginTop:10,cursor:kt?"pointer":"not-allowed"},children:[t.jsx(He,{size:14}),Me?"Mark Wisdom complete":`Complete ${U.label} → ${(mr=Ur[xe+1])==null?void 0:mr.label}`]})]})]})})()]},U.id)}),ne.stage==="W"&&((fe=ne.completed_stages)==null?void 0:fe.W)&&t.jsxs("div",{style:je.wisdomDone,children:[t.jsx(Jr,{size:16,color:"#4C9A6B"})," Wisdom achieved — implemented in your life"]})]})]}),t.jsx(wr,{toasts:Q,onUndo:re,onDismiss:G})]})}const je={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box",position:"relative"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},headRight:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},wisdomBadge:{display:"flex",alignItems:"center",gap:5,background:"rgba(201,162,39,0.12)",border:"1px solid rgba(201,162,39,0.3)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:700,color:"#8A6E1A"},addSkillBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},filterBar:{display:"flex",gap:6,flexWrap:"wrap",marginBottom:16},filterBtn:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},layout:{display:"grid",gap:12,alignItems:"start"},cardList:{display:"grid",gap:10,alignContent:"start"},skillCard:{background:"var(--surface)",borderRadius:12,padding:"16px",border:"1.5px solid var(--border)",cursor:"pointer",boxShadow:"0 1px 2px rgba(0,0,0,0.04)",minWidth:0,overflow:"hidden",boxSizing:"border-box"},skillCardTop:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:8,marginBottom:6},skillMeta:{display:"flex",alignItems:"center",gap:6,minWidth:0},pillarDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},srcLabel:{fontSize:11,fontWeight:600,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},skillTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em",marginBottom:12,lineHeight:1.3,wordBreak:"break-word"},cardTitle:{fontSize:13,fontWeight:700,marginBottom:10},track:{display:"flex",alignItems:"center",minWidth:0},trackItem:{display:"flex",alignItems:"center",minWidth:0},trackDot:{width:22,height:22,borderRadius:"50%",display:"grid",placeItems:"center",flexShrink:0},trackCurrent:{fontSize:9,fontWeight:800,color:"#fff"},trackLine:{flex:1,minWidth:8,height:3,borderRadius:2,margin:"0 2px"},stageTag:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:12,marginLeft:8,flexShrink:0,whiteSpace:"nowrap"},detail:{background:"var(--surface)",borderRadius:14,padding:"18px 16px",boxShadow:"0 1px 4px rgba(0,0,0,0.07)",border:"1.5px solid var(--border)",alignSelf:"start"},detailHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16},detailTitle:{fontSize:18,fontWeight:700,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},backBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,marginRight:4},groupBox:{border:"1.5px solid var(--border)",borderRadius:9,marginBottom:8,overflow:"hidden",background:"var(--bg)"},groupHead:{display:"flex",alignItems:"center",gap:7,padding:"8px 10px"},groupCaret:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",display:"grid",placeItems:"center",padding:0,width:18,height:18,flexShrink:0},groupTitle:{flex:1,minWidth:0,fontSize:13,fontWeight:700,color:"var(--text)",cursor:"text",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},groupCount:{fontSize:10.5,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 7px",flexShrink:0},groupBody:{padding:"0 10px 10px 10px"},addGroupBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1.5px dashed",background:"none",padding:"9px 12px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:2},stageBlock:{border:"1.5px solid var(--border)",borderRadius:10,padding:"12px 13px",marginBottom:10},stageBlockHead:{display:"flex",alignItems:"flex-start",gap:10,marginBottom:8},stageLetter:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",fontSize:13,fontWeight:800,flexShrink:0},stageName:{fontSize:13,fontWeight:700},stagePrompt:{fontSize:11.5,color:"var(--text-2)",marginTop:2,lineHeight:1.4},doneBadge:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10,marginLeft:"auto",flexShrink:0},noteList:{margin:"0 0 8px 0",padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6},noteItem:{display:"flex",alignItems:"flex-start",gap:8,fontSize:13,lineHeight:1.4},noteDot:{width:6,height:6,borderRadius:"50%",flexShrink:0,marginTop:5},checkBox:{width:18,height:18,borderRadius:5,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,marginTop:1,padding:0},checklistHint:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,marginTop:10,textAlign:"center"},noteText:{flex:1,color:"var(--text)"},noNotes:{fontSize:12,color:"var(--text-3)",fontStyle:"italic",marginBottom:8},noteAddRow:{display:"flex",gap:6},noteInput:{flex:1,border:"1px solid var(--border)",borderRadius:7,padding:"7px 10px",fontSize:13,fontFamily:"inherit",outline:"none"},noteAddBtn:{width:32,height:32,border:"none",borderRadius:7,color:"#fff",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},advanceBtn:{display:"flex",alignItems:"center",gap:8,border:"none",color:"#fff",padding:"10px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit",width:"100%",justifyContent:"center"},wisdomDone:{display:"flex",alignItems:"center",gap:8,justifyContent:"center",fontSize:13.5,fontWeight:700,color:"#4C9A6B",padding:12,background:"rgba(76,154,107,0.08)",borderRadius:10,marginTop:4},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},openLinkBtn:{display:"inline-flex",alignItems:"center",gap:5,textDecoration:"none",border:"1px solid #3A7CA5",background:"rgba(58,124,165,0.10)",color:"#3A7CA5",fontSize:12,fontWeight:700,padding:"5px 11px",borderRadius:8,fontFamily:"inherit",cursor:"pointer"},addLinkBtn:{display:"inline-flex",alignItems:"center",gap:5,border:"1px dashed var(--border)",background:"none",color:"var(--text-3)",fontSize:12,fontWeight:600,padding:"5px 11px",borderRadius:8,fontFamily:"inherit",cursor:"pointer"},input:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",width:"100%",boxSizing:"border-box",marginBottom:8},addRow:{display:"flex",gap:8,marginBottom:8},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},empty:{fontSize:13,color:"var(--text-3)",padding:"32px 12px",textAlign:"center"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.55)",zIndex:50,display:"grid",placeItems:"center"},celebBox:{background:"var(--surface)",borderRadius:20,padding:"40px 32px",textAlign:"center",maxWidth:320,boxShadow:"0 8px 40px rgba(0,0,0,0.18)"},celebEmoji:{fontSize:52,marginBottom:12},celebTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:8},celebSub:{fontSize:13.5,color:"var(--text-2)",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:"#4C9A6B",color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},ra=[{id:"aarti",title:"Aarti",html:`<h1>॥ गणपतीची आरती ॥</h1><br/>
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
      </div>`}];function Cv(){const[e,r]=c.useState(()=>window.innerWidth<720);return c.useEffect(()=>{const n=()=>r(window.innerWidth<720);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}const zv=e=>new Promise((r,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:a,height:l}=i;a>l&&a>1400?(l=l*1400/a,a=1400):l>1400&&(a=a*1400/l,l=1400);const d=document.createElement("canvas");d.width=a,d.height=l,d.getContext("2d").drawImage(i,0,0,a,l),r(d.toDataURL("image/jpeg",.85))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(e)});function bp({base:e,count:r,images:n}){const o=n&&n.length?n:null,i=o?o.length:r,[s,a]=c.useState(0);if(!i)return null;const l=s%i,d=o?o[l]:`${e}${l+1}.jpg`;return t.jsxs("div",{style:{maxWidth:560,margin:"0 auto"},children:[t.jsx("div",{style:Qe.carouselFrame,children:t.jsx("img",{src:d,alt:`Page ${l+1}`,style:Qe.carouselImg})}),t.jsxs("div",{style:Qe.carouselNav,children:[t.jsxs("button",{onClick:()=>a(g=>(g-1+i)%i),style:Qe.carouselBtn,children:[t.jsx(An,{size:16})," Prev"]}),t.jsxs("span",{style:Qe.carouselCount,children:[o?"":"Adhyay ",l+1," / ",i]}),t.jsxs("button",{onClick:()=>a(g=>(g+1)%i),style:Qe.carouselBtn,children:["Next ",t.jsx(cn,{size:16})]})]})]})}function Tv(){const e=Cv(),[r,n]=c.useState(!1),[o,i]=c.useState([]),[s,a]=c.useState("dss"),[l,d]=c.useState(!1),[g,m]=c.useState({title:"",type:"text",content:"",images:[]}),[f,h]=c.useState([]),[R,B]=c.useState(null),[T,z]=c.useState(!1),b=c.useRef(!1),p=c.useCallback(async()=>{try{const[Y,ce,J]=await Promise.all([M.getDecks(),M.getSetting("spiritual_order"),M.getSetting("spiritual_default")]);if(i(Y),Array.isArray(ce==null?void 0:ce.value)&&h(ce.value),J!=null&&J.value&&B(J.value),!b.current){b.current=!0;const I=new Set([...ra.map($=>$.id),...Y.map($=>`deck-${$.id}`)]);J!=null&&J.value&&I.has(J.value)&&a(J.value)}}catch{}},[]);c.useEffect(()=>{p()},[p]);const u=[...ra.map(Y=>({id:Y.id,title:Y.title})),...o.map(Y=>({id:`deck-${Y.id}`,title:Y.title}))],j=(()=>{if(!f.length)return u;const Y=new Map(u.map(J=>[J.id,J])),ce=[];return f.forEach(J=>{Y.has(J)&&(ce.push(Y.get(J)),Y.delete(J))}),Y.forEach(J=>ce.push(J)),ce})(),k=(Y,ce)=>{const J=j.map($=>$.id),I=Y+ce;I<0||I>=J.length||([J[Y],J[I]]=[J[I],J[Y]],h(J),M.setSetting("spiritual_order",J).catch(()=>{}))},C=Y=>{B(Y),M.setSetting("spiritual_default",Y).catch(()=>{})},D=s.startsWith("deck-")?Number(s.slice(5)):null,x=D!=null?o.find(Y=>Y.id===D):null,y=x?null:ra.find(Y=>Y.id===s)||(D==null?ra[0]:null),_=l?"New deck":x?x.title:(y==null?void 0:y.title)||"",Z=Y=>{a(Y),d(!1),e&&n(!1)},ne=()=>{d(!0),m({title:"",type:"text",content:"",images:[]}),e&&n(!1)},ue=async Y=>{const ce=Array.from(Y.target.files||[]),J=[];for(const I of ce)try{J.push(await zv(I))}catch{}m(I=>({...I,images:[...I.images,...J]})),Y.target.value=""},A=Y=>m(ce=>({...ce,images:ce.images.filter((J,I)=>I!==Y)})),K=g.title.trim()&&(g.type==="text"?g.content.trim():g.images.length>0),oe=async()=>{if(!K)return;const Y=await M.createDeck({title:g.title.trim(),type:g.type,content:g.type==="text"?g.content:"",images:g.type==="images"?g.images:[]});d(!1),await p(),a(`deck-${Y.id}`)},ye=async Y=>{await M.deleteDeck(Y),s===`deck-${Y}`&&a("dss"),p()},X={...Qe.sidebar,...e?Qe.sidebarOverlay:{},...e&&!r?Qe.sidebarHidden:{}};return t.jsxs("div",{style:Qe.shell,children:[t.jsx("style",{children:Iv}),e&&r&&t.jsx("div",{style:Qe.backdrop,onClick:()=>n(!1)}),t.jsxs("aside",{style:X,children:[t.jsxs("div",{style:Qe.sideHead,children:[t.jsx("div",{style:Qe.brand,children:"Anvil · Spiritual"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:2},children:[t.jsx("button",{onClick:()=>z(Y=>!Y),style:Qe.iconBtn,title:"Rearrange & set default",children:T?t.jsx(He,{size:16}):t.jsx(jt,{size:15})}),e&&t.jsx("button",{onClick:()=>n(!1),style:Qe.iconBtn,children:t.jsx(Fe,{size:17})})]})]}),T&&t.jsxs("div",{style:Qe.editHint,children:["Arrows reorder · ",t.jsx(ws,{size:11,style:{verticalAlign:"-1px"}})," sets what opens by default"]}),t.jsxs("div",{style:Qe.sideScroll,children:[j.map((Y,ce)=>{const J=Y.id===s&&!l,I=R===Y.id;return t.jsxs("div",{style:Qe.sideRow,children:[t.jsxs("button",{onClick:()=>Z(Y.id),style:{...Qe.sideItem,flex:1,...J?Qe.sideItemOn:{}},children:[Y.title,I&&t.jsx("span",{style:Qe.defStar,title:"Opens by default",children:" ★"})]}),T&&t.jsxs("div",{style:Qe.editControls,children:[t.jsx("button",{onClick:()=>C(Y.id),title:"Set as default",style:{...Qe.miniBtn,...I?{color:"#8268B0"}:{}},children:t.jsx(ws,{size:13})}),t.jsx("button",{onClick:()=>k(ce,-1),disabled:ce===0,style:{...Qe.miniBtn,opacity:ce===0?.3:1},children:t.jsx(kl,{size:13})}),t.jsx("button",{onClick:()=>k(ce,1),disabled:ce===j.length-1,style:{...Qe.miniBtn,opacity:ce===j.length-1?.3:1},children:t.jsx(go,{size:13})})]})]},Y.id)}),t.jsxs("button",{onClick:ne,style:{...Qe.newDeckBtn,...l?Qe.sideItemOn:{}},children:[t.jsx(bt,{size:14})," New deck"]})]})]}),t.jsxs("main",{style:Qe.main,children:[e&&t.jsxs("button",{onClick:()=>n(!0),style:Qe.hamburger,children:[t.jsx(Sg,{size:17}),t.jsx("span",{style:Qe.hamburgerLabel,children:_})]}),l?t.jsxs("div",{style:Qe.contentWrap,children:[t.jsx("div",{style:Qe.formTitle,children:"Create a deck"}),t.jsx("input",{placeholder:"Deck title (e.g. Vishnu Sahasranamam)",value:g.title,onChange:Y=>m({...g,title:Y.target.value}),style:Qe.input}),t.jsxs("div",{style:Qe.typeRow,children:[t.jsxs("button",{onClick:()=>m({...g,type:"text"}),style:{...Qe.typeBtn,...g.type==="text"?Qe.typeOn:{}},children:[t.jsx(wg,{size:15})," Text"]}),t.jsxs("button",{onClick:()=>m({...g,type:"images"}),style:{...Qe.typeBtn,...g.type==="images"?Qe.typeOn:{}},children:[t.jsx(l0,{size:15})," Images"]})]}),g.type==="text"?t.jsx("textarea",{placeholder:"Paste or write the text (verses, chant, reflection)…",value:g.content,onChange:Y=>m({...g,content:Y.target.value}),style:Qe.textarea}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:Qe.imgGrid,children:[g.images.map((Y,ce)=>t.jsxs("div",{style:Qe.imgThumbWrap,children:[t.jsx("img",{src:Y,alt:"",style:Qe.imgThumb}),t.jsx("button",{onClick:()=>A(ce),style:Qe.imgDel,children:t.jsx(Fe,{size:12})})]},ce)),t.jsxs("label",{style:Qe.imgAdd,children:[t.jsx(wl,{size:20}),t.jsx("span",{style:{fontSize:11},children:"Add images"}),t.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:ue,style:{display:"none"}})]})]}),t.jsx("div",{style:Qe.hint,children:"Images show as a swipeable carousel, in the order added."})]}),t.jsxs("div",{style:Qe.formActions,children:[t.jsxs("button",{onClick:()=>d(!1),style:Qe.cancelBtn,children:[t.jsx(Fe,{size:14})," Cancel"]}),t.jsxs("button",{onClick:oe,disabled:!K,style:{...Qe.saveBtn,...K?{}:Qe.saveDisabled},children:[t.jsx(He,{size:15})," Create deck"]})]})]}):x?t.jsxs("div",{style:Qe.contentWrap,children:[t.jsxs("div",{style:Qe.deckHead,children:[t.jsx("h2",{style:Qe.deckTitle,children:x.title}),t.jsx("button",{onClick:()=>ye(x.id),style:Qe.deckDel,title:"Delete deck",children:t.jsx(hi,{size:15})})]}),x.type==="images"?t.jsx(bp,{images:x.images}):t.jsx("div",{style:Qe.deckText,children:x.content})]}):t.jsxs("div",{style:Qe.contentWrap,children:[(y==null?void 0:y.youtube)&&t.jsx("div",{style:Qe.videoFrame,children:t.jsx("iframe",{src:`https://www.youtube.com/embed/${y.youtube}`,title:y.title,style:Qe.video,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0},y.youtube)}),y!=null&&y.carousel?t.jsx(bp,{base:y.imageBase,count:y.carousel}):t.jsx("div",{className:"spiritual-content",dangerouslySetInnerHTML:{__html:(y==null?void 0:y.html)||""}})]})]})]})}const Iv=`
.spiritual-content { font-family: 'Inter', system-ui, sans-serif; color: var(--text); line-height: 1.9; font-size: 16px; text-align: center; }
.spiritual-content h1 { font-family: 'Fraunces', Georgia, serif; font-size: 24px; color: #8268B0; margin: 8px 0 18px; letter-spacing: -0.01em; }
.spiritual-content h2 { font-family: 'Fraunces', Georgia, serif; font-size: 18px; color: #7A5EA8; margin: 20px 0 8px; }
.spiritual-content h3 { font-size: 15px; color: var(--text-3); text-transform: uppercase; letter-spacing: 0.06em; margin: 18px 0 6px; }
.spiritual-content b { color: #8268B0; }
.spiritual-content div { text-align: center; }
`,Qe={shell:{display:"flex",fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100vh",color:"var(--text)",position:"relative",overflow:"hidden"},sidebar:{width:240,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column"},sidebarOverlay:{position:"absolute",top:0,left:0,bottom:0,zIndex:30,boxShadow:"4px 0 24px rgba(0,0,0,0.15)",transition:"transform 0.22s ease",transform:"translateX(0)"},sidebarHidden:{transform:"translateX(-105%)"},backdrop:{position:"absolute",inset:0,background:"rgba(38,36,31,0.35)",zIndex:20},sideHead:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"18px 14px 12px"},brand:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:700},sideScroll:{flex:1,overflowY:"auto",padding:"0 8px 16px"},sideItem:{display:"block",width:"100%",border:"none",background:"none",padding:"10px 12px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13.5,fontWeight:500,color:"var(--text-2)",textAlign:"left",marginBottom:2},sideItemOn:{background:"rgba(130,104,176,0.12)",color:"#8268B0",fontWeight:700},sideRow:{display:"flex",alignItems:"center",gap:2},editControls:{display:"flex",alignItems:"center",gap:1,flexShrink:0},miniBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",borderRadius:5},defStar:{color:"#C9A227",fontWeight:700},editHint:{fontSize:10.5,color:"var(--text-3)",padding:"0 14px 8px",lineHeight:1.4},newDeckBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",padding:"9px",borderRadius:8,cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:600,color:"var(--text-2)",marginTop:6},main:{flex:1,padding:"26px 22px",overflowY:"auto",minWidth:0},hamburger:{display:"flex",alignItems:"center",gap:9,border:"1px solid var(--border)",background:"var(--surface)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginBottom:18},hamburgerLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:220},contentWrap:{background:"var(--surface)",borderRadius:14,padding:"26px 28px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",maxWidth:760,margin:"0 auto"},videoFrame:{position:"relative",width:"100%",maxWidth:600,margin:"0 auto 22px",aspectRatio:"16 / 9",borderRadius:12,overflow:"hidden",background:"#000"},video:{position:"absolute",inset:0,width:"100%",height:"100%",border:"none"},carouselFrame:{background:"var(--surface-2)",borderRadius:12,padding:8,border:"1px solid var(--border)"},carouselImg:{width:"100%",borderRadius:8,display:"block"},carouselNav:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:14},carouselBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},carouselCount:{fontSize:13,fontWeight:700,color:"#8268B0",fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"none",cursor:"pointer",display:"grid",placeItems:"center",padding:4,borderRadius:6,color:"var(--text-2)"},deckHead:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,marginBottom:16,borderBottom:"1px solid var(--border)",paddingBottom:12},deckTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",margin:0,color:"#8268B0"},deckDel:{border:"1px solid var(--border)",background:"var(--surface)",color:"#C2536B",cursor:"pointer",display:"grid",placeItems:"center",padding:7,borderRadius:8,flexShrink:0},deckText:{fontSize:16,lineHeight:1.9,whiteSpace:"pre-wrap",color:"var(--text)",textAlign:"center",fontFamily:"'Fraunces',Georgia,serif"},formTitle:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:14},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none"},typeRow:{display:"flex",gap:8,marginTop:12},typeBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},typeOn:{background:"#8268B0",color:"#fff",borderColor:"#8268B0"},textarea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"12px",fontSize:15,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:200,resize:"vertical",lineHeight:1.7,marginTop:12},imgGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(90px, 1fr))",gap:8,marginTop:12},imgThumbWrap:{position:"relative",aspectRatio:"1",borderRadius:8,overflow:"hidden",border:"1px solid var(--border)"},imgThumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},imgDel:{position:"absolute",top:3,right:3,border:"none",background:"rgba(0,0,0,0.6)",color:"#fff",borderRadius:"50%",width:18,height:18,cursor:"pointer",display:"grid",placeItems:"center",padding:0},imgAdd:{aspectRatio:"1",border:"1px dashed var(--border)",borderRadius:8,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:4,cursor:"pointer",color:"var(--text-3)"},hint:{fontSize:11.5,color:"var(--text-3)",marginTop:8},formActions:{display:"flex",gap:8,marginTop:16},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:"#8268B0",color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"}},hn={Financial:{dot:"#C9A227",soft:"rgba(201,162,39,0.10)"},Academic:{dot:"#3A7CA5",soft:"rgba(58,124,165,0.10)"},Relationship:{dot:"#C2536B",soft:"rgba(194,83,107,0.10)"},Health:{dot:"#4C9A6B",soft:"rgba(76,154,107,0.10)"},Spiritual:{dot:"#8268B0",soft:"rgba(130,104,176,0.10)"}},mp=Object.keys(hn),Bv=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Rv=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Dv=()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},Av=(e,r)=>`${Rv[r-1]} ${e}`,Ev=(e,r)=>{const n=new Date(e,r,0).getDate();return Array.from({length:n},(o,i)=>`${e}-${String(r).padStart(2,"0")}-${String(i+1).padStart(2,"0")}`)},Fv=(e,r)=>{const n=new Date(e,r-1,1).getDay();return n===0?6:n-1};function Wv(){const e=Dv(),[r,n]=c.useState(new Date().getFullYear()),[o,i]=c.useState(new Date().getMonth()+1),[s,a]=c.useState([]),[l,d]=c.useState([]),[g,m]=c.useState({}),[f,h]=c.useState(null),[R,B]=c.useState(!1),[T,z]=c.useState(!1),[b,p]=c.useState({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:e}),[u,j]=c.useState(null),k=c.useCallback(async()=>{const[$,H,P]=await Promise.all([M.getTopics(),M.getDueToday(),M.getCalendar(r,o)]);a($),d(H),m(P)},[r,o]);c.useEffect(()=>{k()},[k]);const C=async $=>{await M.toggleReviewDone($),k()},D=async()=>{const $=b.intervals.split(",").map(H=>parseInt(H.trim(),10)).filter(H=>!isNaN(H));!b.topic.trim()||$.length===0||(await M.createTopic({pillar:b.pillar,topic:b.topic.trim(),intervals:$,learned_date:b.learned_date||e}),p({topic:"",pillar:"Academic",intervals:"1,3,7,15,30",learned_date:e}),z(!1),k())},{deleteItem:x,toasts:y,handleUndo:_,handleDismiss:Z}=kr(M.deleteTopic,M.restoreTopic,k),ne=($,H)=>x($,H),ue=$=>j({id:$.id,topic:$.topic,pillar:$.pillar,intervals:($.intervals||[]).join(", "),learned_date:$.learned_date}),A=async()=>{if(!u)return;const $=u.intervals.split(",").map(H=>parseInt(H.trim(),10)).filter(H=>!isNaN(H)&&H>=0);!u.topic.trim()||$.length===0||(await M.updateTopic(u.id,{topic:u.topic.trim(),pillar:u.pillar,learned_date:u.learned_date,intervals:$}),j(null),k())},K=()=>{o===1?(n($=>$-1),i(12)):i($=>$-1),h(null)},oe=()=>{o===12?(n($=>$+1),i(1)):i($=>$+1),h(null)},ye=s.filter($=>!$.cemented),X=s.filter($=>$.cemented),Y=Ev(r,o),ce=Fv(r,o),J=c.useMemo(()=>{const $={};return s.forEach(H=>H.reviews.forEach(P=>{P.done||($[P.due_date]=$[P.due_date]||[]).push({topic:H.topic,pillar:H.pillar,stage:P.stage})})),$},[s]),I=f?s.flatMap($=>$.reviews.filter(H=>H.due_date===f).map(H=>({...H,topic:$.topic,pillar:$.pillar,total:$.reviews.length}))):[];return t.jsxs("div",{style:Le.page,children:[t.jsxs("div",{style:Le.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:Le.eyebrow,children:"Anvil · Revision"}),t.jsx("h1",{style:Le.h1,children:"Spaced Repetition"})]}),t.jsxs("button",{onClick:()=>z(!0),style:Le.addBtn,children:[t.jsx(bt,{size:15})," Add topic"]})]}),T&&t.jsxs("div",{style:Le.addBox,children:[t.jsx("input",{autoFocus:!0,placeholder:"What did you learn?",value:b.topic,onChange:$=>p(H=>({...H,topic:$.target.value})),onKeyDown:$=>$.key==="Enter"&&D(),style:Le.input}),t.jsxs("div",{style:Le.addRow,children:[t.jsx("select",{value:b.pillar,onChange:$=>p(H=>({...H,pillar:$.target.value})),style:Le.select,children:mp.map($=>t.jsx("option",{children:$},$))}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[t.jsx("label",{style:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},children:"Learned on"}),t.jsx("input",{type:"date",value:b.learned_date,onChange:$=>p(H=>({...H,learned_date:$.target.value})),style:{...Le.select,fontSize:13}})]}),t.jsx("div",{style:{flex:1,minWidth:0},children:t.jsx("input",{value:b.intervals,onChange:$=>p(H=>({...H,intervals:$.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:Le.input})})]}),t.jsxs("div",{style:Le.addRow,children:[t.jsxs("button",{onClick:D,style:Le.saveBtn,children:[t.jsx(He,{size:14})," Save"]}),t.jsxs("button",{onClick:()=>z(!1),style:Le.cancelBtn,children:[t.jsx(Fe,{size:14})," Cancel"]})]})]}),l.length>0&&t.jsxs("div",{style:Le.section,children:[t.jsxs("div",{style:Le.sectionTitle,children:[t.jsx(Ig,{size:15,color:"#C2536B"}),"Due Today",t.jsx("span",{style:Le.badge,children:l.length})]}),l.map($=>{var P,ae;const H=((P=hn[$.pillar])==null?void 0:P.dot)||"#9A968C";return t.jsxs("div",{style:{...Le.reviewCard,borderLeft:`3px solid ${H}`,...$.is_missed?{opacity:.85}:{}},children:[t.jsx("button",{onClick:()=>C($.review_id),style:{...Le.checkbox,...$.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:$.done&&t.jsx(He,{size:12,color:"#fff",strokeWidth:3})}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:Le.reviewTopic,children:$.topic}),t.jsxs("div",{style:Le.reviewMeta,children:[t.jsxs("span",{style:{...Le.stageTag,background:((ae=hn[$.pillar])==null?void 0:ae.soft)||"rgba(0,0,0,0.05)",color:H},children:["Review ",$.stage,"/",$.total_stages]}),$.is_missed&&t.jsxs("span",{style:Le.missedTag,children:["missed · ",$.due_date]})]})]})]},$.review_id)})]}),t.jsxs("div",{style:Le.section,children:[t.jsxs("div",{style:Le.sectionTitle,children:["Active Topics ",t.jsx("span",{style:Le.badge,children:ye.length})]}),ye.length===0&&t.jsx("div",{style:Le.empty,children:"No active topics. Add something you learned today."}),ye.map($=>{var me,Ne;const H=((me=hn[$.pillar])==null?void 0:me.dot)||"#9A968C",P=((Ne=hn[$.pillar])==null?void 0:Ne.soft)||"rgba(0,0,0,0.05)",ae=$.reviews.filter(Q=>Q.done).length;return(u==null?void 0:u.id)===$.id?t.jsxs("div",{style:Le.addBox,children:[t.jsx("input",{autoFocus:!0,value:u.topic,onChange:Q=>j(re=>({...re,topic:Q.target.value})),onKeyDown:Q=>Q.key==="Enter"&&A(),placeholder:"Topic",style:Le.input}),t.jsxs("div",{style:Le.addRow,children:[t.jsx("select",{value:u.pillar,onChange:Q=>j(re=>({...re,pillar:Q.target.value})),style:Le.select,children:mp.map(Q=>t.jsx("option",{children:Q},Q))}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[t.jsx("label",{style:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase"},children:"Learned on"}),t.jsx("input",{type:"date",value:u.learned_date,onChange:Q=>j(re=>({...re,learned_date:Q.target.value})),style:{...Le.select,fontSize:13}})]}),t.jsx("div",{style:{flex:1,minWidth:0},children:t.jsx("input",{value:u.intervals,onChange:Q=>j(re=>({...re,intervals:Q.target.value})),placeholder:"Intervals (days): 1,3,7,15,30",style:Le.input})})]}),t.jsx("div",{style:Le.editHint,children:"Changing the date or intervals reschedules the reviews (completed steps are kept where they still apply)."}),t.jsxs("div",{style:Le.addRow,children:[t.jsxs("button",{onClick:A,style:Le.saveBtn,children:[t.jsx(He,{size:14})," Save plan"]}),t.jsxs("button",{onClick:()=>j(null),style:Le.cancelBtn,children:[t.jsx(Fe,{size:14})," Cancel"]})]})]},$.id):t.jsxs("div",{style:Le.topicCard,children:[t.jsxs("div",{style:Le.topicHead,children:[t.jsx("span",{style:{...Le.dot,background:H}}),t.jsx("span",{style:Le.topicName,children:$.topic}),t.jsx("span",{style:Le.topicPillar,children:$.pillar}),t.jsxs("span",{style:Le.topicProgress,children:[ae,"/",$.reviews.length," done"]}),t.jsx("button",{onClick:()=>ue($),style:Le.ghostBtn,title:"Edit plan",children:t.jsx(jt,{size:12})}),t.jsx("button",{onClick:()=>ne($.id,$.topic),style:Le.ghostBtn,title:"Delete",children:t.jsx(Fe,{size:13})})]}),t.jsxs("div",{style:Le.reviewDots,children:[$.reviews.map(Q=>{Q.due_date<e;const re=Q.due_date===e;return t.jsx("button",{onClick:()=>C(Q.id),title:`Review ${Q.stage} · ${Q.due_date}${Q.done?" · Done":""}`,style:{...Le.reviewDot,background:Q.done?H:re?P:"var(--hover)",border:`2px solid ${Q.done||re?H:"var(--border)"}`,color:Q.done?"#fff":H},children:Q.stage},Q.id)}),t.jsxs("span",{style:Le.learnedDate,children:["Learned ",$.learned_date]})]})]},$.id)})]}),X.length>0&&t.jsxs("div",{style:Le.section,children:[t.jsxs("button",{onClick:()=>B($=>!$),style:Le.cementedToggle,children:[R?t.jsx(go,{size:15}):t.jsx(cn,{size:15}),t.jsx(Jr,{size:14,color:"#C9A227"}),"Cemented",t.jsx("span",{style:{...Le.badge,background:"rgba(201,162,39,0.12)",color:"#8A6E1A"},children:X.length})]}),R&&X.map($=>{var P;const H=((P=hn[$.pillar])==null?void 0:P.dot)||"#9A968C";return t.jsx("div",{style:{...Le.topicCard,opacity:.75},children:t.jsxs("div",{style:Le.topicHead,children:[t.jsx("span",{style:{...Le.dot,background:H}}),t.jsx("span",{style:Le.topicName,children:$.topic}),t.jsx("span",{style:Le.topicPillar,children:$.pillar}),t.jsx(Jr,{size:13,color:"#C9A227",style:{marginLeft:"auto"}})]})},$.id)})]}),t.jsxs("div",{style:Le.calCard,children:[t.jsxs("div",{style:Le.calHead,children:[t.jsx("button",{onClick:K,style:Le.calNav,children:"‹"}),t.jsxs("div",{style:Le.calTitle,children:[Av(r,o)," · Review Calendar"]}),t.jsx("button",{onClick:oe,style:Le.calNav,children:"›"})]}),t.jsx("div",{style:Le.calDow,children:Bv.map($=>t.jsx("div",{style:Le.calDowCell,children:$},$))}),t.jsxs("div",{style:Le.calGrid,children:[Array.from({length:ce}).map(($,H)=>t.jsx("div",{},`p${H}`)),Y.map(($,H)=>{const P=J[$]||[],ae=$===e,me=$===f,Ne=$<e,Q=me?"#fff":ae?"var(--text)":Ne?"var(--text-2)":"var(--text-3)";return t.jsxs("button",{onClick:()=>h(me?null:$),style:{...Le.calDay,background:me?"var(--accent-strong)":ae?"var(--hover)":"var(--surface)",borderColor:ae||me?"var(--accent-strong)":"var(--border)"},children:[t.jsx("span",{style:{...Le.calDayNum,color:Q,fontWeight:ae||me?700:600},children:H+1}),P.slice(0,2).map((re,G)=>{var le;return t.jsxs("span",{title:re.topic,style:{...Le.calItem,color:me?"#fff":((le=hn[re.pillar])==null?void 0:le.dot)||"var(--text-2)"},children:[G+1,". ",re.topic]},G)}),P.length>2&&t.jsxs("span",{style:{...Le.calMore,color:me?"#fff":"var(--text-3)"},children:["+",P.length-2," more"]})]},$)})]}),f&&t.jsxs("div",{style:Le.dayDetail,children:[t.jsxs("div",{style:Le.dayDetailTitle,children:["Reviews for ",f]}),I.length===0?t.jsx("div",{style:Le.empty,children:"No reviews scheduled for this day."}):I.map(($,H)=>{var ae,me;const P=((ae=hn[$.pillar])==null?void 0:ae.dot)||"#9A968C";return t.jsxs("div",{style:{...Le.reviewCard,borderLeft:`3px solid ${P}`},children:[t.jsx("button",{onClick:()=>C($.id),style:{...Le.checkbox,...$.done?{background:"#4C9A6B",borderColor:"#4C9A6B"}:{}},children:$.done&&t.jsx(He,{size:12,color:"#fff",strokeWidth:3})}),t.jsxs("div",{children:[t.jsxs("div",{style:Le.reviewTopic,children:[H+1,". ",$.topic]}),t.jsxs("span",{style:{...Le.stageTag,background:((me=hn[$.pillar])==null?void 0:me.soft)||"rgba(0,0,0,0.05)",color:P},children:["Review ",$.stage,"/",$.total]})]})]},$.id)})]})]}),t.jsx(wr,{toasts:y,onUndo:_,onDismiss:Z})]})}const Le={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:20},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},addBox:{background:"var(--surface)",borderRadius:12,padding:16,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column",gap:10},addRow:{display:"flex",gap:8,alignItems:"center"},editHint:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.4},input:{flex:1,border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",minWidth:0},select:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 10px",fontSize:12.5,fontFamily:"inherit",flexShrink:0},saveBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},section:{marginBottom:20},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10},badge:{fontSize:11,fontWeight:700,background:"var(--hover)",color:"var(--text-2)",borderRadius:10,padding:"1px 7px"},reviewCard:{display:"flex",alignItems:"center",gap:12,background:"var(--surface)",borderRadius:10,padding:"12px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},checkbox:{width:22,height:22,borderRadius:6,border:"2px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0,padding:0},reviewTopic:{fontSize:13.5,fontWeight:600,marginBottom:4},reviewMeta:{display:"flex",alignItems:"center",gap:8},stageTag:{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10},missedTag:{fontSize:11,color:"#C2536B",fontWeight:600},topicCard:{background:"var(--surface)",borderRadius:12,padding:"13px 14px",marginBottom:8,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},topicHead:{display:"flex",alignItems:"center",gap:8,marginBottom:10},dot:{width:9,height:9,borderRadius:"50%",flexShrink:0,display:"inline-block"},topicName:{fontSize:14,fontWeight:600,flex:1},topicPillar:{fontSize:11,color:"var(--text-3)",fontWeight:500},topicProgress:{fontSize:11,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",padding:"2px 7px",borderRadius:10},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:2,display:"grid",placeItems:"center"},reviewDots:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"},reviewDot:{width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",fontSize:11,fontWeight:700,padding:0},learnedDate:{fontSize:11,color:"var(--text-3)",marginLeft:"auto"},cementedToggle:{display:"flex",alignItems:"center",gap:8,border:"none",background:"none",cursor:"pointer",fontSize:13,fontWeight:700,color:"var(--text-2)",padding:"4px 0",fontFamily:"inherit",marginBottom:8},empty:{fontSize:13,color:"var(--text-3)",padding:"16px 0",textAlign:"center"},calCard:{background:"var(--surface)",borderRadius:12,padding:"16px 16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calNav:{border:"none",background:"none",fontSize:20,cursor:"pointer",color:"var(--text-2)",padding:"0 6px",lineHeight:1},calDow:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:6},calDowCell:{fontSize:10,fontWeight:600,color:"var(--text-3)",textAlign:"center",textTransform:"uppercase"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4},calDay:{minHeight:62,border:"1.5px solid var(--border)",background:"var(--surface)",borderRadius:8,cursor:"pointer",fontFamily:"inherit",display:"flex",flexDirection:"column",alignItems:"stretch",justifyContent:"flex-start",gap:1,position:"relative",padding:"3px 4px",overflow:"hidden",textAlign:"left"},calDayNum:{fontSize:11,lineHeight:1.1,marginBottom:1},calItem:{fontSize:8.5,fontWeight:700,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",lineHeight:1.3,textAlign:"left"},calMore:{fontSize:8,fontWeight:700,opacity:.85,lineHeight:1.2},dayDetail:{marginTop:16,paddingTop:16,borderTop:"1px solid var(--border)"},dayDetailTitle:{fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:10}},hp=[{id:1,title:"Regular Habits",cards:[{id:1,text:"1. I always do everything I need to do, when I need to do it. "},{id:2,text:"2. I never argue or let my emotions work against me. "},{id:3,text:"3. I have a good memory. I easily and automatically remember any name or anything that is important to me. "},{id:4,text:"4. I eat only what I should. "},{id:5,text:"5. I am a good listener. I hear everything that is said. I am attentive, interested, and aware of everything that is going on around me. "},{id:6,text:"6. I have the courage to state my opinions. I take responsibility for myself and everything I say and do."},{id:7,text:"7. I never spend more than I earn. I am financially responsible, both for my present and for my future."},{id:8,text:"8. I set goals and I follow them. I set my sights, take the appropriate action, and achieve my goals."},{id:9,text:"9. I spend time with my family and my loved ones. I enjoy sharing their lives with mine and my life with theirs."}]},{id:2,title:"Motivational",cards:[{id:1,text:"1. I can do anything I believe I can do. I’ve got it and every day I get more of it. I have talent, skills, and ability"},{id:2,text:"2. I set goals and I reach them. I know what I want out of life. I go after it and I get it. "},{id:3,text:"3. People like me, and I feel good about myself. I have a sense of pride in whoa am and I believe in myself. Nothing seems to stop me. I have a lot of determination. "},{id:4,text:"4. I turn problems into advantages. I find possibilities in things that other people never give a chance."},{id:5,text:"5. I have a lot of energy––I am very alive. I enjoy life and I can tell it and so can others"},{id:6,text:"6. I keep myself up, looking ahead, and liking it. I know that I can accomplish anything I choose, and I refuse to let anything negative hold me back or stand in my way. I am not afraid of anything or anyone. I have strength, power, conviction, and confidence. "},{id:7,text:"7. I like challenges and I meet them head on, face to face––today especially. I am on top of the world and I’m going for it. "},{id:8,text:"8. I have a clear picture in my mind of what I want. I can see it in front of me. "},{id:9,text:"9. I know what I want and I know how to get it. I know that it’s all up to me and I know I can do it. Roadblocks don’t bother me. They just mean that I am alive and running, and I’m not going to stand still for anything. "},{id:10,text:"10. I trust myself I’ve got what it takes––plenty of it––and I know how to use it. "},{id:11,text:"11. Today, more than ever. Today I am unstoppable. I’ve got myself together and I’m getting more together every day. And today––look out world, here I come. "},{id:12,text:"12. Limitations? I don’t even recognize them as limitations. There is no challenge I can’t conquer; there is no wall I can’t climb over. "},{id:13,text:"13. There is no problem I can’t defeat or turn around and make it work for me. I stand tall. I am honest and sincere. I like to deal with people and they like me. "},{id:14,text:"14. I think well; I think clearly. I am organized; I am in control of myself, and everything about me. I call my shots and no one has to call them for me. I never blame anyone else for the circumstances of my life. "},{id:15,text:"15. I accept my failings and move past them as easily as I accept the rewards for my victories. I never demand perfection of myself, but I expect the very best of what I have to give––and that’s what I get. I never give myself excuses. "},{id:16,text:"16. I get things done on time and in the right way. Today I have the inner strength to do more than ever. I am an exceptional human being. "},{id:17,text:"17. My goals and my incredible belief in myself turn my goals into reality. I have the power to live my dreams."},{id:18,text:"18.  I believe in them like I believe in myself. And that belief is so strong that there is nothing that diminishes my undefeatable spirit. "}]},{id:3,title:"Organized planning",cards:[{id:1,text:"1. I am organized and in control of my life. I am in control of myself, my thoughts, my time, my actions, and my future. "},{id:2,text:"2. I know what to do and when to do it, and I do everything I need to do, when I need to do it. "},{id:3,text:"3. I program my mind to make the maximum use of my time. I am in control of my time and how to use it. I like being organized, efficient, and on top of things."},{id:4,text:"4. Controlling my time keeps me that way. "},{id:5,text:"5. I never waste time––I always “plan” time. And because I plan my time, I always have time to do the things I choose to do. "},{id:6,text:"6. Each day I become more organized and in control of all areas of my life––at home, at work, in my mind and in my thoughts, in everything that I do. "},{id:7,text:"7. I am very well organized. Each night I make a list of things I need to do the next day. I set my priorities and I follow them. "},{id:8,text:"8. I am always on time. I am always right where I need to be, exactly when I need to be there. "},{id:9,text:"9. Being on time is easy for me and the more I control my time and the more organized I become, the easier it is. "},{id:10,text:"10. I am in control of my feelings, my emotions, my attitudes, and my needs. I control them; they do not control me. "},{id:11,text:"11. I have the winning vote in the outcome of my own actions. And I choose to live my life by choice, not chance. Therefore, I take the time to take control."},{id:12,text:"12. I have an organized and orderly mind. Because I think in an organized way, I conduct my life in an organized manner. "},{id:13,text:"13. I think in the most positive and productive way at all times and in all things. The way I think is the way I live––and I think “right.” "},{id:14,text:"14. I am the director of my destiny. I know where I am going and I know why I am going there. My earthly life is in my hands and in my control. "},{id:15,text:"15. I control my goals and the achievement of my goals. I organize my goals by writing each of them down, along with the steps I need to reach them. One of the reasons for my success is that my goals are clearly defined and organized."},{id:16,text:"16. I am in complete control of what I think and how I think. Therefore, I choose to think only those thoughts which help me and which are of genuine benefit to me."}]},{id:4,title:"Solving Problems",cards:[{id:1,text:"1. I’m good at solving problems. I like challenges and I meet them head on. "},{id:2,text:"2. Problems are my teachers. They help me to learn and grow. Without them, I would be going nowhere. With them, I am moving forward in the direction of my own goals. "},{id:3,text:"3. There is no problem which I cannot conquer. I am strong in mind, body, and spirit. My will, my strength, and my determination are always greater than any problem I face."},{id:4,text:"4. When I meet a new problem, I do not see the problem as my enemy. I know that finding the solution to the problem will move me forward in my own personal growth."},{id:5,text:"5. Because I know that problems are a key ingredient in my spiritual and mental education and preparation, I recognize that all problems are important to me. "},{id:6,text:"6. I do not fear problems, I solve them. I do not ignore problems, I confront them. I do not avoid problems, I conquer them. "},{id:7,text:"7. I know that every problem holds within itself the keys to its own solution. Therefore, the better I understand the problem, the clearer I am able to see its solution. "},{id:8,text:"8. Having problems is not a problem for me. I am confident, self-assured, positive, and determined. I always know that I am going to overcome any problem I encounter––and I always do. "},{id:9,text:"9. I am good at breaking large obstacles down into smaller pieces that are easier to handle. And I never make any problem appear to be larger than it actually is. "},{id:10,text:"10. I never worry. I turn “worry time” into positive, constructive, “solution time.” I keep my mind alert and open to all solutions—and solutions come quickly and easily to me. "},{id:11,text:"11. I have learned to recognize that many problems carry with them benefits and potential opportunities which would not have presented themselves had the problem not occurred in the first place. "},{id:12,text:"12. I do not seek to live a life which is free from all problems. Instead, I choose to live a life of finding solutions and enjoying the benefits which those solutions create."},{id:13,text:"13. Challenge, conquer, solution, and win are words which I live by daily. Challenges are opportunities. Conquering them is the inevitable outcome. "},{id:14,text:"14. “Solutions” are the stepping stones to my success, and “Winning” is my way of life."}]},{id:5,title:"Self Esteem",cards:[{id:1,text:"1. I really am very special. I like who I am and I feel good about myself. "},{id:2,text:"2. Although I always work to improve myself and I get better every day, I like who I am today. And tomorrow, when I’m even better, I’ll like myself then, too. "},{id:3,text:"3. It’s true that there really is no one else like me in the entire world. There never was another me before, and there will never be another me again. "},{id:4,text:"4. I am unique––from the top of my head to the bottom of my feet. In some ways I may look and act and sound like some others––but I am not them. I am me."},{id:5,text:"5. I wanted to be somebody––and now I know I am I would rather be me than anyone else in the world. "},{id:6,text:"6. I like how I feel and I like how I think and I like how I do things. I approve of me and I approve of who I am."},{id:7,text:"7. I have many beautiful qualities about me. I have talents and skills and abilities. I even have talents that I don’t even know about yet. And I am discovering new talents inside myself all the time. "},{id:8,text:"8. I am positive. I am confident. I radiate good things. If you look closely, you can even see a glow around me."},{id:9,text:"9. I am full of life. I like life and I’m glad to be alive. I am a very special person, living at a very special time. "},{id:10,text:"10. I am intelligent. My mind is quick and alert and clever and fun. I think good thoughts, and my mind makes things work right for me. "},{id:11,text:"11. I have a lot of energy and enthusiasm and vitality. I am exciting and I really enjoy being me. "},{id:12,text:"12. I like to be around other people and other people like to be around me. People like to hear what I have to say and know what I have to think. "},{id:13,text:"13. I smile a lot. I am happy on the inside and I am happy on the outside. "},{id:14,text:"14. I am interested in many things. I appreciate all the blessings I have, and the things that I learn, and all the things I will learn today and tomorrow and forever––just as long as I am. "},{id:15,text:"15. I am warm, sincere, honest, and genuine. I am all of these things and more. And all of these things are me. I like who I am, and I’m glad to be me."}]},{id:6,title:"Self-Responsibility",cards:[{id:1,text:"1. I take full responsibility for everything about me––even the thoughts that I think. I am in control of the vast resources of my own mind."},{id:2,text:"2. I alone am responsible for what I do and what I tell myself about me. No one can share this responsibility with me. "},{id:3,text:"3. I also allow others to accept their responsibilities far themselves and I do not try to accept their responsibilities for them. "},{id:4,text:"4. I enjoy being responsible. It puts me in charge of being me––and that’s a challenge I enjoy. "},{id:5,text:"5. I allow no one else, at any time, to assume control or responsibility over my life or over anything that I do. My responsibility to others is an extension of my own responsibility to myself. "},{id:6,text:"6. I choose to leave nothing about me up to chance. When it comes to me––and anything in my life––I choose to CHOOSE. "},{id:7,text:"7. My choices are mine alone to make for myself. I do not, at any time, allow anyone else to make my choices for me. And I accept full responsibility for every choice and decision I make. "},{id:8,text:"8. I always meet all of the obligations which I accept. And I accept no obligations which I will not meet. "},{id:9,text:"9. I am trustworthy. I can be counted on. I have accepted winning responsibility for myself––and I always live up to the responsibilities I accept. "},{id:10,text:"10. There is no they on whom I lay the blame, or with whom I share my own personal responsibilities. I have learned the great secret of mastering my own destiny. I have learned that “they” is “me.” "},{id:11,text:"11. I have no need to make excuses and no one needs to carry my responsibility for me. I gladly carry my own weight––and I carry it well. "},{id:12,text:"12. Each day I acknowledge and accept the responsibility––not only for my own actions––but also for my emotions, my thoughts, and my attitude. "},{id:13,text:"13. I accept the responsibility for living my life in a way which creates my strengths, my happiness, my positive, healthy beliefs, and for my past, my present, and my future."}]},{id:7,title:"Freedom from worry",cards:[{id:1,text:"1. I never worry. Instead of worrying, I find solutions and I act on them. "},{id:2,text:"2. My mind is constantly in tune with the positive. It is bright, cheerful, enthusiastic, and full of good, positive thoughts and ideas. "},{id:3,text:"3. I am able to relax easily and comfortably in my body and in my mind. I am calm, confident, and self-assured. "},{id:4,text:"4. My mind is orderly and well-organized. I consciously choose what I think and I always choose those thoughts which are the most positive and beneficial for me. "},{id:5,text:"5. All of my thoughts create healthiness within me. My mind dwells only on those thoughts which create more harmony, balance, and well-being within me and in the world around me. "},{id:6,text:"6. I automatically, and always, think in a decisive and determined way. "},{id:7,text:"7. I am full of resolution and the absolute assurance of the best possible outcome in everything that I do. "},{id:8,text:"8. I choose to look at the world around me in the bright, healthy light of optimism and self-assurance. "},{id:9,text:"9. I do only those things which are best for me. I create the best within myself, I attract the best in others, and I find the best in the world around me. "},{id:10,text:"10. I willingly, and without fail, take care of the duties and obligations which I have accepted for myself."},{id:11,text:"11. I commit only to those responsibilities which I know I can fulfill. "},{id:12,text:"12. I focus the attention of my mind only on those things that I can do something about. If I cannot affect it or direct it––I accept it. "},{id:13,text:"13. I keep my mind too busy thinking good, healthy, positive, constructive, and productive thoughts to ever have any time for worry. "},{id:14,text:"14. I control the thoughts I choose. No thought, at any time, can dwell in my mind without my approval or permission. I never worry."}]},{id:8,title:"Eating Habits",cards:[{id:1,text:"1. I am in control of myself in every way––at all times and in all situations. "},{id:2,text:"2. Each time I sit down to eat I reaffirm my determination to achieve my goal. By eating right, and never giving in, I am reaching the weight I want. "},{id:3,text:"3. Whether eating in or eating out, I really enjoy eating less. "},{id:4,text:"4. I never feel the need to finish the food in front of me. I eat only what I should––and never one bite more. "},{id:5,text:"5. One way to weight-loss that’s easy and works, is less food on my plate, and less on my fork. "},{id:6,text:'6. By ordering less when I eat out, and by serving myself smaller portions at home, I keep myself aware of the importance of staying with my goal––each and every day. “Less on my plate means less on my waist."'},{id:7,text:"7. When I sit down to eat, at no time do I allow anyone else to influence, tempt, or discourage me in any negative way."},{id:8,text:"8. What I eat, and the goals I reach, are up to me. And I give no one the right to hinder or control my success."},{id:9,text:"9. Although others may benefit from my success, I. am achieving my weight-loss goals for my own personal reasons––for myself, my life, my future, and my own personal well-being."},{id:10,text:"10. I am never, at any time, tempted to take one bite more than I should. I am strong, I am capable of reaching my goal, and I am doing it."},{id:11,text:"11. Being in situations which put a lot of food in front of me is not a problem to me now. I simply say “No” to the food and “Yes” to my success."},{id:12,text:"12. I enjoy sitting down to eat. Each time I do I conquer my past, and I create a trimmer, happier, more self-confident future in front of me. "},{id:13,text:"13. When I sit down to eat, I do not need someone else to remind me of my goal, or to keep me from eating something I should not. I take full responsibility for myself, and no one else has to do it for me. "},{id:14,text:"14. Controlling my weight, and my appetite, is easy for me now. I enjoy smaller portions, smaller bites, and a slower, healthier, more relaxed way of eating. "},{id:15,text:"15. I have set my goal and I am staying with it. I have turned mealtime into “achievement time.”"}]}],fp=["#3A7CA5","#4C9A6B","#C2773B","#8268B0","#C2536B","#C9A227","#3A7CA5","#4C9A6B"],sd=e=>fp[e%fp.length],Mv=e=>e+"1A",$i="affirmation_favs",Lv="anvil_affirmation_favs",xp=()=>{try{return JSON.parse(localStorage.getItem($i)||localStorage.getItem(Lv)||"[]")}catch{return[]}},na="__new__";function _v(){var ue;const[e,r]=c.useState(0),[n,o]=c.useState(0),[i,s]=c.useState(()=>new Set(xp())),[a,l]=c.useState([]),[d,g]=c.useState(!1),[m,f]=c.useState({text:"",category:((ue=hp[0])==null?void 0:ue.title)||"",newCat:""}),h=c.useRef(!1),R=c.useCallback(()=>{M.getAffirmations().then(A=>l(Array.isArray(A)?A:[])).catch(()=>{})},[]);c.useEffect(()=>{R()},[R]);const B=c.useMemo(()=>{const A=hp.map(K=>({title:K.title,cards:[...K.cards]}));return a.forEach(K=>{const oe={id:`u${K.id}`,text:K.text,user:!0,dbId:K.id},ye=A.find(X=>X.title.toLowerCase()===(K.category||"").toLowerCase());ye?ye.cards.push(oe):A.push({title:K.category||"My affirmations",cards:[oe]})}),A},[a]);c.useEffect(()=>{let A=!1;return M.getSetting($i).then(K=>{if(!A){if(Array.isArray(K==null?void 0:K.value))s(new Set(K.value));else{const oe=xp();oe.length&&M.setSetting($i,oe).catch(()=>{}),s(new Set(oe))}h.current=!0}}).catch(()=>{h.current=!0}),()=>{A=!0}},[]),c.useEffect(()=>{localStorage.setItem($i,JSON.stringify([...i])),h.current&&M.setSetting($i,[...i]).catch(()=>{})},[i]);const T=(A,K)=>`${A}#${K.id}`,z=e==="FAV"?"FAV":Math.min(e,B.length-1),b=z==="FAV"?B.flatMap((A,K)=>A.cards.filter(oe=>i.has(T(A.title,oe))).map(oe=>({...oe,color:sd(K),title:A.title}))):B[z].cards.map(A=>({...A,color:sd(z),title:B[z].title})),p=b.length,u=Math.min(n,Math.max(0,p-1)),j=b[u],k=A=>{r(A),o(0)},C=c.useCallback(()=>o(A=>Math.max(0,A-1)),[]),D=c.useCallback(()=>o(A=>Math.min(p-1,A+1)),[p]);c.useEffect(()=>{const A=K=>{K.key==="ArrowLeft"&&C(),K.key==="ArrowRight"&&D()};return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)},[C,D]);const x=A=>s(K=>{const oe=new Set(K);return oe.has(A)?oe.delete(A):oe.add(A),oe}),y=async()=>{const A=m.text.trim(),K=(m.category===na?m.newCat:m.category).trim();if(!A||!K)return;await M.createAffirmation({text:A,category:K}),g(!1),f({text:"",category:K,newCat:""}),R();const oe=B.findIndex(ye=>ye.title.toLowerCase()===K.toLowerCase());k(oe>=0?oe:B.length)},_=async A=>{window.confirm("Delete this affirmation?")&&(await M.deleteAffirmation(A.dbId),s(K=>{const oe=new Set(K);return oe.delete(T(A.title,A)),oe}),R())},Z=m.text.trim()&&(m.category===na?m.newCat.trim():m.category),ne=j?j.color:"#8268B0";return t.jsxs("div",{style:gt.page,children:[t.jsxs("div",{style:{...gt.head,display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:12,flexWrap:"wrap"},children:[t.jsxs("div",{children:[t.jsx("div",{style:gt.eyebrow,children:"Anvil · Affirmations"}),t.jsx("h1",{style:gt.h1,children:"Affirmations"}),t.jsx("div",{style:gt.subhead,children:"One at a time — read it, mean it."})]}),!d&&t.jsxs("button",{onClick:()=>g(!0),style:gt.addBtn,children:[t.jsx(bt,{size:15})," Add affirmation"]})]}),d&&t.jsxs("div",{style:gt.addCard,children:[t.jsx("div",{style:gt.addTitle,children:"New affirmation"}),t.jsx("textarea",{autoFocus:!0,value:m.text,onChange:A=>f(K=>({...K,text:A.target.value})),placeholder:"Write it in the present tense — e.g. 'I attract abundance effortlessly.'",style:gt.addArea}),t.jsxs("div",{style:gt.addRow,children:[t.jsx(sr,{value:m.category,options:[...B.map(A=>A.title),{value:na,label:"+ New category…"}],onChange:A=>f(K=>({...K,category:A})),style:{minWidth:180}}),m.category===na&&t.jsx("input",{value:m.newCat,onChange:A=>f(K=>({...K,newCat:A.target.value})),placeholder:"Category name",style:gt.addInput})]}),t.jsxs("div",{style:gt.addActions,children:[t.jsxs("button",{onClick:()=>g(!1),style:gt.cancelBtn,children:[t.jsx(Fe,{size:14})," Cancel"]}),t.jsxs("button",{onClick:y,disabled:!Z,style:{...gt.saveBtn,...Z?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," Save"]})]})]}),t.jsxs("div",{style:gt.filterBar,children:[B.map((A,K)=>{const oe=z===K,ye=sd(K);return t.jsxs("button",{onClick:()=>k(K),style:{...gt.chip,...oe?{background:ye,color:"#fff",borderColor:ye}:{}},children:[t.jsx("span",{style:{...gt.catDot,background:oe?"#fff":ye}})," ",A.title," ",t.jsx("span",{style:gt.chipCount,children:A.cards.length})]},A.title)}),t.jsxs("button",{onClick:()=>k("FAV"),style:{...gt.chip,...e==="FAV"?{background:"#C9A227",color:"#fff",borderColor:"#C9A227"}:{}},children:[t.jsx(za,{size:12,fill:e==="FAV"?"#fff":"none"})," Favorites ",t.jsx("span",{style:gt.chipCount,children:i.size})]})]}),p===0?t.jsxs("div",{style:gt.empty,children:[t.jsx(za,{size:22,color:"#C3BFB5"}),t.jsx("div",{children:"No favorites yet — tap the star on a card to save it here."})]}):t.jsxs("div",{style:gt.viewer,children:[t.jsxs("div",{style:{...gt.card,borderTop:`4px solid ${ne}`},children:[t.jsx("div",{style:{...gt.cardCat,color:ne,background:Mv(ne)},children:j.title}),t.jsx("button",{onClick:()=>x(T(j.title,j)),style:{...gt.favBtn,color:i.has(T(j.title,j))?"#C9A227":"#C3BFB5"},title:"Favorite",children:t.jsx(za,{size:20,fill:i.has(T(j.title,j))?"#C9A227":"none"})}),j.user&&t.jsx("button",{onClick:()=>_(j),style:gt.trashBtn,title:"Delete your affirmation",children:t.jsx(hi,{size:16})}),t.jsx(bc,{size:30,color:ne,style:{opacity:.25}}),t.jsx("p",{style:gt.cardText,children:j.text.trim()})]}),t.jsxs("div",{style:gt.navRow,children:[t.jsxs("button",{onClick:C,disabled:u===0,style:{...gt.navBtn,...u===0?gt.navBtnDisabled:{}},children:[t.jsx(An,{size:18})," Back"]}),t.jsxs("span",{style:{...gt.counter,color:ne},children:[u+1," ",t.jsxs("span",{style:gt.counterTotal,children:["/ ",p]})]}),t.jsxs("button",{onClick:D,disabled:u===p-1,style:{...gt.navBtn,...u===p-1?gt.navBtnDisabled:{}},children:["Next ",t.jsx(cn,{size:18})]})]}),t.jsx("div",{style:gt.dots,children:b.map((A,K)=>t.jsx("button",{onClick:()=>o(K),style:{...gt.dot,...K===u?{background:ne,transform:"scale(1.5)"}:{}},title:`${K+1}`},K))})]})]})}const gt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},addCard:{background:"var(--surface)",borderRadius:14,padding:16,marginBottom:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},addTitle:{fontSize:15,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:10},addArea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--bg)",outline:"none",minHeight:64,resize:"vertical",lineHeight:1.5},addRow:{display:"flex",gap:8,marginTop:10,flexWrap:"wrap"},addInput:{flex:1,minWidth:140,border:"1px solid var(--border)",borderRadius:9,padding:"8px 10px",fontSize:13,fontFamily:"inherit",color:"var(--text)",background:"var(--bg)",outline:"none"},addActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:12},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"8px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},trashBtn:{position:"absolute",top:14,right:46,border:"none",background:"none",cursor:"pointer",padding:4,display:"grid",placeItems:"center",color:"#C3BFB5"},filterBar:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:22},chip:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipCount:{fontSize:11,fontWeight:700,opacity:.7},catDot:{width:8,height:8,borderRadius:"50%",flexShrink:0},empty:{display:"flex",flexDirection:"column",alignItems:"center",gap:10,fontSize:13.5,color:"var(--text-3)",padding:"56px 12px",textAlign:"center",background:"var(--surface)",borderRadius:12,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},viewer:{display:"flex",flexDirection:"column",alignItems:"center"},card:{position:"relative",background:"var(--surface)",borderRadius:16,padding:"40px 32px 44px",boxShadow:"0 4px 20px rgba(0,0,0,0.07)",width:"100%",minHeight:240,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",boxSizing:"border-box"},cardCat:{position:"absolute",top:16,left:16,fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:12,textTransform:"uppercase",letterSpacing:"0.04em"},favBtn:{position:"absolute",top:14,right:14,border:"none",background:"none",cursor:"pointer",padding:4,display:"grid",placeItems:"center"},cardText:{fontSize:21,lineHeight:1.55,margin:"14px 0 0",fontWeight:500,color:"var(--text)",fontFamily:"'Fraunces',Georgia,serif",maxWidth:560},navRow:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",maxWidth:420,marginTop:22},navBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},navBtnDisabled:{opacity:.4,cursor:"not-allowed"},counter:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},counterTotal:{fontSize:13,fontWeight:600,color:"var(--text-3)"},dots:{display:"flex",gap:6,flexWrap:"wrap",justifyContent:"center",marginTop:20,maxWidth:480},dot:{width:7,height:7,borderRadius:"50%",border:"none",background:"var(--border)",cursor:"pointer",padding:0,transition:"transform 0.12s"}},$v=[{id:"day",label:"Day"},{id:"week",label:"Week"},{id:"month",label:"Month"},{id:"year",label:"Year"}],yn=e=>e>=60?`${Math.floor(e/60)}h ${e%60}m`:`${e}m`,Pv=e=>{const r=e<12?"am":"pm",n=e%12===0?12:e%12;return`${String(n).padStart(2,"0")} ${r}`};function Nv(e){const r=e<=60?10:e<=120?20:e<=300?60:120,n=Math.max(60,Math.ceil((e||1)/r)*r),o=[];for(let i=0;i<=n;i+=r)o.push(i);return{max:n,ticks:o}}const Vh=e=>{const r=new Date(e);return r.setHours(0,0,0,0),r},Ov=e=>{const r=Vh(e),n=(r.getDay()+6)%7;return r.setDate(r.getDate()-n),r},Hv=e=>new Date(e.getFullYear(),e.getMonth(),1),Gv=e=>new Date(e.getFullYear(),0,1);function Uv(e,r){if(e==="day"){const i=Vh(r);return{start:i,end:new Date(+i+864e5),prev:new Date(+i-864e5),prev2:new Date(+i-2*864e5)}}if(e==="week"){const i=Ov(r);return{start:i,end:new Date(+i+7*864e5),prev:new Date(+i-7*864e5),prev2:new Date(+i-14*864e5)}}if(e==="month"){const i=Hv(r),s=r.getFullYear(),a=r.getMonth();return{start:i,end:new Date(s,a+1,1),prev:new Date(s,a-1,1),prev2:new Date(s,a-2,1)}}const n=r.getFullYear();return{start:Gv(r),end:new Date(n+1,0,1),prev:new Date(n-1,0,1),prev2:new Date(n-2,0,1)}}function Vv({sessions:e=[],onBack:r}){const[n,o]=c.useState("day"),i=new Date,{start:s,end:a,prev:l,prev2:d}=Uv(n,i),g=oe=>new Date(oe.started_at||oe.created_at),m=e.filter(oe=>oe.completed),f=(oe,ye,X)=>{const Y=g(oe);return Y>=ye&&Y<X},h=(oe,ye)=>m.filter(X=>f(X,oe,ye)).reduce((X,Y)=>X+(Y.actual_min||0),0),R=m.filter(oe=>f(oe,s,a)),B=R.reduce((oe,ye)=>oe+(ye.actual_min||0),0),T=h(l,s),z=h(d,l),b=R.length,p=Array(24).fill(0);R.forEach(oe=>{p[g(oe).getHours()]+=oe.actual_min||0});const u=Math.max(...p,0),j=Nv(u),k={};R.forEach(oe=>{const ye=cr[oe.tree]?oe.tree:no;k[ye]=(k[ye]||0)+(oe.actual_min||0)});const C=Object.entries(k).map(([oe,ye])=>({name:cr[oe].label,min:ye,color:cr[oe].leaf})).sort((oe,ye)=>ye.min-oe.min),D=T>0?Math.round((B-T)/T*100):B>0?100:0,x=D>0?Ji:D<0?ro:kh,y=D>0?"#4C9A6B":D<0?"#C2536B":"#9A968C",_={day:"yesterday",week:"last week",month:"last month",year:"last year"}[n],Z={day:"2 days ago",week:"2 weeks ago",month:"2 months ago",year:"2 years ago"}[n],ne=54,ue=22,A=2*Math.PI*ne;let K=0;return t.jsxs("div",{style:Oe.page,children:[t.jsxs("div",{style:Oe.topbar,children:[t.jsxs("button",{onClick:r,style:Oe.back,children:[t.jsx(gh,{size:18})," Grove"]}),t.jsx("h1",{style:Oe.h1,children:"Insights"}),t.jsx("div",{style:{width:76}})]}),t.jsx("div",{style:Oe.rangeBar,children:$v.map(oe=>t.jsx("button",{onClick:()=>o(oe.id),style:{...Oe.rangeBtn,...n===oe.id?Oe.rangeOn:{}},children:oe.label},oe.id))}),t.jsxs("div",{style:Oe.headline,children:[t.jsxs("div",{style:Oe.bigStat,children:[t.jsx("div",{style:Oe.bigVal,children:yn(B)}),t.jsxs("div",{style:Oe.bigLbl,children:["Focused this ",n]})]}),t.jsxs("div",{style:Oe.bigStat,children:[t.jsx("div",{style:Oe.bigVal,children:b}),t.jsx("div",{style:Oe.bigLbl,children:"Trees"})]})]}),t.jsxs("div",{style:Oe.card,children:[t.jsxs("div",{style:Oe.cardHead,children:[t.jsxs("div",{style:Oe.cardTitle,children:["Your forest this ",n]}),t.jsx("div",{style:Oe.cardHint,children:"Each tree is a completed session — bigger means longer focus"})]}),t.jsx(Qv,{sessions:R}),t.jsxs("div",{style:Oe.forestNumber,children:[b," ",b===1?"tree":"trees"," · ",yn(B)," focused"]})]}),t.jsx(ad,{title:"Focus distribution",hint:"Minutes focused at each time of day",children:u===0?t.jsx(yp,{}):t.jsx(Kv,{hours:p,axis:j})}),t.jsx(ad,{title:"Pillar distribution",hint:"How your focus splits across the five trees",children:C.length===0?t.jsx(yp,{}):t.jsxs("div",{style:Oe.donutWrap,children:[t.jsxs("svg",{viewBox:"0 0 140 140",width:"150",height:"150",style:{flexShrink:0},children:[C.map(oe=>{const ye=oe.min/(B||1)*A,X=t.jsx("circle",{cx:"70",cy:"70",r:ne,fill:"none",stroke:oe.color,strokeWidth:ue,strokeDasharray:`${ye} ${A-ye}`,strokeDashoffset:-K,transform:"rotate(-90 70 70)"},oe.name);return K+=ye,X}),t.jsx("text",{x:"70",y:"66",textAnchor:"middle",style:Oe.donutCenterTop,children:yn(B)}),t.jsx("text",{x:"70",y:"82",textAnchor:"middle",style:Oe.donutCenterSub,children:"total"})]}),t.jsx("div",{style:Oe.legend,children:C.map(oe=>t.jsxs("div",{style:Oe.legendRow,children:[t.jsx("span",{style:{...Oe.legendDot,background:oe.color}}),t.jsx("span",{style:Oe.legendName,children:oe.name}),t.jsxs("span",{style:Oe.legendVal,children:[yn(oe.min)," · ",Math.round(oe.min/(B||1)*100),"%"]})]},oe.name))})]})}),t.jsxs(ad,{title:"Focus trend",hint:`This ${n} vs the previous two`,children:[t.jsxs("div",{style:Oe.trend3,children:[t.jsxs("div",{style:Oe.trendCol,children:[t.jsx("div",{style:Oe.trendVal,children:yn(B)}),t.jsxs("div",{style:Oe.trendLbl,children:["This ",n]})]}),t.jsxs("div",{style:Oe.trendCol,children:[t.jsx("div",{style:{...Oe.trendVal,color:"var(--text-2)"},children:yn(T)}),t.jsx("div",{style:Oe.trendLbl,children:_})]}),t.jsxs("div",{style:Oe.trendCol,children:[t.jsx("div",{style:{...Oe.trendVal,color:"var(--text-3)"},children:yn(z)}),t.jsx("div",{style:Oe.trendLbl,children:Z})]})]}),t.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:14},children:t.jsxs("div",{style:{...Oe.trendBadge,color:y,background:y+"1A"},children:[t.jsx(x,{size:15})," ",D>0?"+":"",D,"% vs ",_]})}),t.jsx(Xv,{items:[{label:`This ${n}`,value:B,color:"#4C9A6B"},{label:_,value:T,color:"var(--text-3)"},{label:Z,value:z,color:"var(--text-3)"}]})]})]})}const Yv=e=>e===0?"12a":e<12?`${e}a`:e===12?"12p":`${e-12}p`;function Kv({hours:e,axis:r}){return t.jsxs("div",{children:[t.jsxs("div",{style:Oe.vcPlot,children:[r.ticks.map(n=>t.jsxs("div",{style:{...Oe.vcGridRow,bottom:`${n/r.max*100}%`},children:[t.jsx("span",{style:Oe.vcYLabel,children:n}),t.jsx("div",{style:Oe.vcGridLine})]},n)),t.jsx("div",{style:Oe.vcBars,children:e.map((n,o)=>t.jsx("div",{style:Oe.vcCell,title:`${Pv(o)} · ${n} min`,children:t.jsx("div",{style:{...Oe.vcBar,height:n>0?`max(3px, ${n/r.max*100}%)`:0}})},o))})]}),t.jsx("div",{style:Oe.vcXAxis,children:e.map((n,o)=>t.jsx("div",{style:Oe.vcXCell,children:o%3===0?Yv(o):""},o))}),t.jsx("div",{style:Oe.vcYTitle,children:"minutes focused, by hour of day"})]})}function Qv({sessions:e}){if(!e.length)return t.jsx("div",{style:Oe.sceneEmpty,children:"No trees yet this period. 🌱"});const n=e.slice(0,80),o=e.length-n.length,i=s=>Math.round(Math.max(40,Math.min(88,40+(s||0)*.6)));return t.jsxs("div",{children:[t.jsx("div",{style:Oe.scene,children:n.map(s=>t.jsx("div",{style:Oe.sceneTree,title:`${s.label||"Focus"} · ${yn(s.actual_min||s.duration_min)}`,children:t.jsx(Eg,{species:s.tree,progress:1,size:i(s.actual_min||s.duration_min)})},s.id))}),o>0&&t.jsxs("div",{style:Oe.overflow,children:["+",o," more trees"]})]})}function ad({title:e,hint:r,children:n}){return t.jsxs("div",{style:Oe.card,children:[t.jsxs("div",{style:Oe.cardHead,children:[t.jsx("div",{style:Oe.cardTitle,children:e}),r&&t.jsx("div",{style:Oe.cardHint,children:r})]}),n]})}function yp(){return t.jsx("div",{style:Oe.empty,children:"No focus sessions in this period yet. 🌱"})}function Xv({items:e}){const r=Math.max(1,...e.map(n=>n.value));return t.jsx("div",{style:Oe.tbWrap,children:e.map(n=>t.jsxs("div",{style:Oe.tbRow,children:[t.jsx("div",{style:Oe.tbLbl,children:n.label}),t.jsx("div",{style:Oe.tbTrack,children:t.jsx("div",{style:{...Oe.tbBar,width:`${n.value/r*100}%`,background:n.color}})}),t.jsx("div",{style:Oe.tbVal,children:yn(n.value)})]},n.label))})}const Oe={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"20px 16px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:720,margin:"0 auto"},topbar:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16},back:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},h1:{fontSize:20,fontWeight:700,margin:0,fontFamily:"'Fraunces',Georgia,serif"},rangeBar:{display:"flex",gap:6,background:"var(--surface)",padding:5,borderRadius:12,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},rangeBtn:{flex:1,border:"none",background:"none",padding:"9px 0",borderRadius:8,fontSize:13.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},rangeOn:{background:"var(--accent-strong)",color:"#fff"},headline:{display:"flex",gap:12,marginBottom:16},bigStat:{flex:1,background:"var(--surface)",borderRadius:14,padding:"16px 18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},bigVal:{fontSize:26,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em"},bigLbl:{fontSize:12,color:"var(--text-3)",marginTop:3,fontWeight:500},card:{background:"var(--surface)",borderRadius:16,padding:"18px 18px 20px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:16},cardHead:{marginBottom:14},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardHint:{fontSize:12,color:"var(--text-3)",marginTop:2},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"24px 0"},scene:{display:"flex",flexWrap:"wrap",alignItems:"flex-end",justifyContent:"center",gap:"0 2px",padding:"14px 8px 6px",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,minHeight:110,border:"1px solid var(--border)"},sceneTree:{lineHeight:0},sceneEmpty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"34px 0",background:"linear-gradient(#FBFAF7 55%, #E9F1E5 100%)",borderRadius:12,border:"1px solid var(--border)"},overflow:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",marginTop:6,fontWeight:600},forestNumber:{textAlign:"center",marginTop:12,fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},vcPlot:{position:"relative",height:180,paddingLeft:30},vcGridRow:{position:"absolute",left:0,right:0,display:"flex",alignItems:"center",height:0},vcYLabel:{width:26,marginRight:4,textAlign:"right",fontSize:9,color:"var(--text-3)",fontWeight:600,flexShrink:0},vcGridLine:{flex:1,height:1,background:"#EEEBE4"},vcBars:{position:"absolute",left:30,right:0,top:0,bottom:0,display:"flex",alignItems:"flex-end",gap:1},vcCell:{flex:1,height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"center"},vcBar:{width:"72%",background:"#4C9A6B",borderRadius:"3px 3px 0 0",transition:"height 0.3s"},vcXAxis:{display:"flex",marginLeft:30,marginTop:4},vcXCell:{flex:1,textAlign:"center",fontSize:8.5,color:"var(--text-3)",fontWeight:600,overflow:"hidden"},vcYTitle:{textAlign:"center",fontSize:9.5,color:"var(--text-3)",marginTop:6,letterSpacing:"0.06em",textTransform:"uppercase",fontWeight:600},donutWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap",justifyContent:"center"},donutCenterTop:{fontSize:16,fontWeight:800,fill:"var(--text)",fontFamily:"'Fraunces',Georgia,serif"},donutCenterSub:{fontSize:9,fill:"#9A968C",textTransform:"uppercase",letterSpacing:"0.08em"},legend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8},legendDot:{width:11,height:11,borderRadius:3,flexShrink:0},legendName:{flex:1,fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},legendVal:{fontSize:12,color:"var(--text-3)",fontWeight:600,flexShrink:0},trend3:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12,gap:8},trendCol:{textAlign:"center",flex:1},trendVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},trendLbl:{fontSize:11,color:"var(--text-3)",marginTop:2},trendBadge:{display:"inline-flex",alignItems:"center",gap:4,fontSize:13,fontWeight:800,padding:"6px 12px",borderRadius:20,width:"fit-content"},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:78,fontSize:11,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},tbTrack:{flex:1,height:14,background:"#F2F0EA",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:56,fontSize:11,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"}},qv=[15,30,45,60,90],ld="anvil_grove_active",vp=e=>`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`,nl=e=>e>=60?`${Math.floor(e/60)}h ${e%60}m`:`${e}m`;function Zv(){const[e,r]=c.useState("timer"),[n,o]=c.useState("idle"),[i,s]=c.useState(15),[a,l]=c.useState(!1),[d,g]=c.useState(""),[m,f]=c.useState(no),[h,R]=c.useState(()=>localStorage.getItem("anvil_grove_deepfocus")!=="0"),[B,T]=c.useState(15*60),[z,b]=c.useState({sessions:[],stats:null}),p=c.useRef(null),u=c.useRef(null),j=c.useRef(!1),k=c.useCallback(async()=>{try{b(await M.getFocus())}catch{}},[]),C=c.useCallback(async(J,I)=>{if(!j.current){j.current=!0,localStorage.removeItem(ld);try{await M.createFocus({label:d.trim()||null,tree:m,duration_min:i,actual_min:I,completed:J,started_at:u.current,ended_at:new Date().toISOString()})}catch{}k()}},[d,m,i,k]),D=c.useCallback(()=>{if(n!=="running")return;const J=u.current?Math.round((Date.now()-new Date(u.current).getTime())/6e4):0;o("failed"),C(!1,Math.max(0,Math.min(i,J)))},[n,i,C]),x=c.useCallback(()=>{o("done"),T(0),C(!0,i)},[i,C]);c.useEffect(()=>{k();const J=JSON.parse(localStorage.getItem(ld)||"null");if(J&&J.endTime){const I=Math.round((J.endTime-Date.now())/1e3);s(J.duration),g(J.label||""),f(J.tree||"oak"),p.current=J.endTime,u.current=J.startedAt,I>0?(T(I),o("running")):(o("done"),j.current=!1,C(!0,J.duration))}},[]),c.useEffect(()=>{if(n!=="running")return;const J=()=>{const $=Math.round((p.current-Date.now())/1e3);if($<=0){x();return}T($)};J();const I=setInterval(J,250);return()=>clearInterval(I)},[n,x]),c.useEffect(()=>{if(n!=="running"||!h)return;const J=()=>{document.hidden&&D()};return document.addEventListener("visibilitychange",J),()=>document.removeEventListener("visibilitychange",J)},[n,h,D]),c.useEffect(()=>{const J=()=>{!document.hidden&&n!=="running"&&k()};window.addEventListener("focus",J),document.addEventListener("visibilitychange",J);const I=setInterval(J,6e4);return()=>{window.removeEventListener("focus",J),document.removeEventListener("visibilitychange",J),clearInterval(I)}},[k,n]);const y=()=>R(J=>{const I=!J;return localStorage.setItem("anvil_grove_deepfocus",I?"1":"0"),I}),_=()=>{j.current=!1,u.current=new Date().toISOString(),p.current=Date.now()+i*60*1e3,localStorage.setItem(ld,JSON.stringify({endTime:p.current,duration:i,label:d,tree:m,startedAt:u.current})),T(i*60),o("running")},Z=()=>{o("idle"),T(i*60)},ne=J=>{l(!1),s(J),T(J*60)},ue=()=>{a||(l(!0),s(5),T(5*60))},A=J=>{if(l(!0),J===""){s(0),T(0);return}const I=Math.max(1,Math.min(600,parseInt(J,10)||0));s(I),T(I*60)},K=i*60,oe=n==="running"?1-B/K:n==="done"?1:0,ye=130,X=2*Math.PI*ye,Y=X*(1-(n==="running"?oe:n==="done"?1:0)),ce=z.stats;return e==="stats"?t.jsx(Vv,{sessions:z.sessions,onBack:()=>r("timer")}):t.jsxs("div",{style:qe.page,children:[t.jsxs("div",{style:qe.head,children:[t.jsx("div",{style:qe.eyebrow,children:"Anvil · Grove"}),t.jsx("h1",{style:qe.h1,children:"Grove"}),t.jsx("div",{style:qe.subhead,children:"Plant a tree, stay focused, grow your grove."}),t.jsxs("button",{onClick:()=>r("stats"),style:qe.insightsBtn,disabled:n==="running",children:[t.jsx(Xy,{size:15})," Insights"]})]}),ce&&t.jsxs("div",{style:qe.statRow,children:[t.jsx(oa,{label:"Today",value:nl(ce.today_minutes)}),t.jsx(oa,{label:"Trees",value:ce.trees}),t.jsx(oa,{label:"Streak",value:`${ce.streak}d`}),t.jsx(oa,{label:"Success",value:`${ce.success_rate}%`})]}),t.jsxs("div",{style:qe.stage,children:[t.jsxs("div",{style:qe.ringWrap,children:[t.jsxs("svg",{width:"300",height:"300",viewBox:"0 0 300 300",style:{position:"absolute",inset:0},children:[t.jsx("circle",{cx:"150",cy:"150",r:ye,fill:"none",stroke:"var(--border)",strokeWidth:"10"}),t.jsx("circle",{cx:"150",cy:"150",r:ye,fill:"none",stroke:n==="failed"?"#C2536B":"#4C9A6B",strokeWidth:"10",strokeLinecap:"round",strokeDasharray:X,strokeDashoffset:Y,transform:"rotate(-90 150 150)",style:{transition:"stroke-dashoffset 0.4s linear"}})]}),t.jsx("div",{style:qe.ringInner,children:t.jsx(Eg,{species:m,progress:n==="idle"?0:oe,withered:n==="failed",size:170})})]}),n==="idle"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:qe.timeBig,children:vp(i*60)}),t.jsxs("div",{style:qe.controls,children:[t.jsxs("div",{style:qe.chips,children:[qv.map(J=>t.jsxs("button",{onClick:()=>ne(J),style:{...qe.chip,...!a&&i===J?qe.chipOn:{}},children:[J,"m"]},J)),t.jsx("button",{onClick:ue,style:{...qe.chip,...a?qe.chipOn:{}},children:"Custom"})]}),a&&t.jsxs("div",{style:qe.customRow,children:[t.jsx("input",{type:"number",min:"1",max:"600",inputMode:"numeric",autoFocus:!0,value:i||"",onChange:J=>A(J.target.value),placeholder:"e.g. 50",style:qe.customInput}),t.jsx("span",{style:qe.customUnit,children:"minutes"})]}),t.jsx("input",{value:d,onChange:J=>g(J.target.value),placeholder:"What are you focusing on? (optional)",style:qe.input,maxLength:60}),t.jsx("div",{style:qe.treePick,children:Object.entries(cr).map(([J,I])=>t.jsxs("button",{onClick:()=>f(J),title:I.label,style:{...qe.treeBtn,...m===J?{borderColor:I.leaf,background:I.leaf+"1A"}:{}},children:[t.jsx("span",{style:{...qe.treeDot,background:I.leaf}}),I.label]},J))}),t.jsxs("button",{onClick:y,style:qe.toggleRow,children:[t.jsxs("div",{style:{textAlign:"left"},children:[t.jsx("div",{style:qe.toggleTitle,children:"Deep Focus"}),t.jsx("div",{style:qe.toggleHint,children:h?"Leaving the app kills the tree":"Tree survives until you give up"})]}),t.jsx("div",{style:{...qe.switch,...h?qe.switchOn:{}},children:t.jsx("div",{style:{...qe.knob,...h?qe.knobOn:{}}})})]}),t.jsx("button",{onClick:_,disabled:i<1,style:{...qe.plantBtn,...i<1?{opacity:.5,cursor:"not-allowed"}:{}},children:"Plant tree"})]})]}),n==="running"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:qe.timeBig,children:vp(B)}),t.jsx("div",{style:qe.focusLabel,children:d.trim()||"Focusing…"}),t.jsx("div",{style:h?qe.warn:qe.warnSoft,children:h?"⚠ Deep Focus on — leaving this app will kill your tree.":"🌿 Relaxed mode — only Give up ends this session."}),t.jsx("button",{onClick:D,style:qe.giveUp,children:"Give up"})]}),n==="done"&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:qe.resultTitle,children:["🌳 You grew a ",cr[m].label," tree!"]}),t.jsxs("div",{style:qe.resultSub,children:[nl(i)," of focus added to your grove."]}),t.jsx("button",{onClick:Z,style:qe.plantBtn,children:"Plant another"})]}),n==="failed"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:{...qe.resultTitle,color:"#C2536B"},children:"Your tree withered."}),t.jsx("div",{style:qe.resultSub,children:"You left before the timer finished. Try again?"}),t.jsx("button",{onClick:Z,style:qe.plantBtn,children:"Try again"})]})]}),t.jsx(Jv,{sessions:z.sessions,onDelete:async J=>{await M.deleteFocus(J),k()}})]})}function oa({label:e,value:r}){return t.jsxs("div",{style:qe.stat,children:[t.jsx("div",{style:qe.statValue,children:r}),t.jsx("div",{style:qe.statLabel,children:e})]})}function Jv({sessions:e,onDelete:r}){const n=e.filter(a=>a.completed);if(n.length===0)return t.jsx("div",{style:qe.forestEmpty,children:"Your grove is empty. Plant your first tree above. 🌱"});const o={};for(const a of n){const l=(a.started_at||a.created_at||"").slice(0,10);(o[l]||(o[l]=[])).push(a)}const i=Object.keys(o).sort().reverse(),s=a=>{const l=new Date().toISOString().slice(0,10);return a===l?"Today":new Date(a+"T00:00").toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})};return t.jsxs("div",{style:qe.forest,children:[t.jsxs("div",{style:qe.forestHead,children:["Your Grove · ",n.length," trees"]}),i.map(a=>t.jsxs("div",{style:qe.daySection,children:[t.jsxs("div",{style:qe.dayLabel,children:[s(a)," · ",o[a].length]}),t.jsx("div",{style:qe.treeGrid,children:o[a].map(l=>t.jsxs("div",{style:qe.treeCard,title:`${l.label||"Focus"} · ${nl(l.actual_min)}`,onDoubleClick:()=>r(l.id),children:[t.jsx(_0,{species:l.tree}),t.jsx("div",{style:qe.treeCardMin,children:nl(l.actual_min||l.duration_min)}),l.label&&t.jsx("div",{style:qe.treeCardLabel,children:l.label})]},l.id))})]},a)),t.jsx("div",{style:qe.forestHint,children:"Double-tap a tree to remove it."})]})}const qe={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 24px",color:"var(--text)",boxSizing:"border-box",maxWidth:820,margin:"0 auto"},head:{marginBottom:16,textAlign:"center"},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},insightsBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit",marginTop:12},statRow:{display:"flex",gap:10,justifyContent:"center",marginBottom:18,flexWrap:"wrap"},stat:{background:"var(--surface)",borderRadius:12,padding:"10px 18px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",minWidth:78},statValue:{fontSize:19,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},statLabel:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},stage:{background:"var(--surface)",borderRadius:18,padding:"28px 24px 32px",boxShadow:"0 2px 12px rgba(0,0,0,0.06)",display:"flex",flexDirection:"column",alignItems:"center",marginBottom:26},ringWrap:{position:"relative",width:300,height:300,display:"grid",placeItems:"center"},ringInner:{position:"relative",zIndex:1,display:"grid",placeItems:"center"},timeBig:{fontSize:40,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:6},focusLabel:{fontSize:14,color:"var(--text-2)",marginTop:2,fontWeight:500},warn:{fontSize:12,color:"#C2773B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},warnSoft:{fontSize:12,color:"#4C9A6B",marginTop:12,fontWeight:600,textAlign:"center",maxWidth:320},toggleRow:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,border:"1px solid var(--border)",background:"var(--surface)",borderRadius:12,padding:"10px 14px",cursor:"pointer",fontFamily:"inherit",width:"100%"},toggleTitle:{fontSize:14,fontWeight:700,color:"var(--text)"},toggleHint:{fontSize:11.5,color:"var(--text-3)",marginTop:1},switch:{width:42,height:24,borderRadius:12,background:"var(--border)",flexShrink:0,padding:2,transition:"background 0.18s",boxSizing:"border-box"},switchOn:{background:"#4C9A6B"},knob:{width:20,height:20,borderRadius:"50%",background:"var(--surface)",boxShadow:"0 1px 2px rgba(0,0,0,0.2)",transform:"translateX(0)",transition:"transform 0.18s"},knobOn:{transform:"translateX(18px)"},controls:{width:"100%",maxWidth:380,display:"flex",flexDirection:"column",gap:14,marginTop:8},chips:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},chip:{border:"1px solid var(--border)",background:"var(--surface)",padding:"8px 16px",borderRadius:20,fontSize:13.5,fontWeight:700,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},chipOn:{background:"#4C9A6B",color:"#fff",borderColor:"#4C9A6B"},customRow:{display:"flex",alignItems:"center",justifyContent:"center",gap:8},customInput:{border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",fontSize:15,fontWeight:700,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center",width:100},customUnit:{fontSize:13,color:"var(--text-3)",fontWeight:600},input:{border:"1px solid var(--border)",borderRadius:10,padding:"11px 13px",fontSize:14,fontFamily:"inherit",outline:"none",color:"var(--text)",textAlign:"center"},treePick:{display:"flex",gap:7,justifyContent:"center",flexWrap:"wrap"},treeBtn:{display:"flex",alignItems:"center",gap:6,border:"1.5px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},treeDot:{width:10,height:10,borderRadius:"50%"},plantBtn:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:4},giveUp:{border:"1px solid var(--border)",background:"var(--surface)",color:"#C2536B",padding:"11px 26px",borderRadius:11,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:18},resultTitle:{fontSize:22,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginTop:14,textAlign:"center"},resultSub:{fontSize:13.5,color:"var(--text-3)",marginTop:6,marginBottom:18,textAlign:"center"},forest:{background:"var(--surface)",borderRadius:16,padding:"20px 22px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},forestHead:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:14},forestEmpty:{background:"var(--surface)",borderRadius:16,padding:"40px 20px",textAlign:"center",color:"var(--text-3)",fontSize:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},daySection:{marginBottom:16},dayLabel:{fontSize:12,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.04em",marginBottom:8},treeGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(80px,1fr))",gap:8},treeCard:{display:"flex",flexDirection:"column",alignItems:"center",padding:"8px 4px",borderRadius:10,cursor:"pointer",background:"var(--surface-2)"},treeCardMin:{fontSize:12,fontWeight:700,color:"#4C9A6B",marginTop:-4},treeCardLabel:{fontSize:10.5,color:"var(--text-3)",marginTop:2,textAlign:"center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:76},forestHint:{fontSize:11,color:"var(--text-3)",textAlign:"center",marginTop:6}},e1="grove_rates",t1="reward_rates",ia=Object.keys(cr),jp=[{id:"kickstart",label:"Kickstart"},{id:"golden",label:"Golden Book"},{id:"habits",label:"Habits"},{id:"quadrant",label:"Quadrant"},{id:"goals",label:"Goals"},{id:"grove",label:"Grove"},{id:"journal",label:"Journal"},{id:"revision",label:"Revision"},{id:"affirmations",label:"Affirmations"},{id:"skills",label:"Skills"},{id:"spiritual",label:"Spiritual"},{id:"mindscape",label:"Mindscape"},{id:"vault",label:"Wallet"},{id:"expenses",label:"Expenses"},{id:"trading",label:"Trading Journal"},{id:"delight",label:"Delights"},{id:"achievements",label:"Achievements"},{id:"challenges",label:"Challenges"},{id:"bucket",label:"Bucket List"}],dd=new Set(["worth"]),kp="reward_toggles",wp="bucket_take_enabled",Ln="#C9A227",Lo="#3A7CA5",bo="#C2536B",mo="#4C9A6B",Sp=["#3A7CA5","#4C9A6B","#C2773B","#8268B0","#C2536B","#C9A227","#5B9B9B","#B0654E","#6E7FC2","#A23E57","#3E9E6B","#9A7BB0","#C99B2E","#4E86B0","#B04E86","#6BA34C","#8A6D3B"],r1=e=>{const r=Math.floor(e/60),n=Math.round(e%60);return r&&n?`${r}h ${n}m`:r?`${r}h`:`${n}m`},cd=e=>{let r=Math.round((e||0)*60);const n=Math.floor(r/3600);r%=3600;const o=Math.floor(r/60);return r%=60,[n?`${n}h`:null,n||o?`${o}m`:null,`${r}s`].filter(Boolean).join(" ")},n1=()=>{const e=new Date,r=n=>String(n).padStart(2,"0");return`${e.getFullYear()}-${r(e.getMonth()+1)}-${r(e.getDate())}T${r(e.getHours())}:${r(e.getMinutes())}`},Cp=e=>{if(!e)return"";const r=new Date(e.includes("T")?e:e+"T00:00:00");return isNaN(r)?e:r.toLocaleDateString("en-US",e.includes("T")?{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}:{month:"short",day:"numeric",year:"numeric"})},Cr=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,zp=e=>{const r=new Date(e);return r.setHours(0,0,0,0),r.setDate(r.getDate()-(r.getDay()+6)%7),r},_o=[{id:"today",label:"Today"},{id:"all",label:"All time"},{id:"tweek",label:"This week"},{id:"tmonth",label:"This month"},{id:"pweek",label:"Last week"},{id:"pmonth",label:"Last month"},{id:"tyear",label:"This year"}];function o1(e){const r=new Date;if(e==="today")return[Cr(r),Cr(r)];if(e==="tweek"){const n=zp(r),o=new Date(n);return o.setDate(n.getDate()+6),[Cr(n),Cr(o)]}if(e==="pweek"){const n=zp(r);n.setDate(n.getDate()-7);const o=new Date(n);return o.setDate(n.getDate()+6),[Cr(n),Cr(o)]}return e==="tmonth"?[Cr(new Date(r.getFullYear(),r.getMonth(),1)),Cr(new Date(r.getFullYear(),r.getMonth()+1,0))]:e==="pmonth"?[Cr(new Date(r.getFullYear(),r.getMonth()-1,1)),Cr(new Date(r.getFullYear(),r.getMonth(),0))]:e==="tyear"?[Cr(new Date(r.getFullYear(),0,1)),Cr(new Date(r.getFullYear(),11,31))]:["0000-01-01","9999-12-31"]}function i1(){const e=uo(),r=L=>As(L,e.code),[n,o]=c.useState([]),[i,s]=c.useState([]),[a,l]=c.useState([]),[d,g]=c.useState([]),[m,f]=c.useState([]),[h,R]=c.useState([]),[B,T]=c.useState({}),[z,b]=c.useState({}),[p,u]=c.useState({focus:!0,usage:!0,achievement:!0,challenge:!0}),[j,k]=c.useState(!1),[C,D]=c.useState({}),[x,y]=c.useState({}),[_,Z]=c.useState(!1),[ne,ue]=c.useState(!1),[A,K]=c.useState(null),[oe,ye]=c.useState(""),[X,Y]=c.useState(""),[ce,J]=c.useState(!1),[I,$]=c.useState("today"),[H,P]=c.useState([]),[ae,me]=c.useState(!1),[Ne,Q]=c.useState(null),re=()=>M.getPayouts().then(g).catch(()=>{}),G=()=>M.getBucket().then(L=>P(Array.isArray(L)?L:[])).catch(()=>{}),le=()=>M.getRewardRates().then(l).catch(()=>{});c.useEffect(()=>{(async()=>{try{const[L,Te,rt,F,ee,Ie,v,be,Be,$e,Je]=await Promise.all([M.getFocus(),M.getScreenTime(),M.getRewardRates(),M.getPayouts(),M.getAchievements(),M.getChallenges(),M.getBucket(),M.getSetting(e1),M.getSetting(t1),M.getSetting(kp),M.getSetting(wp)]);o(L.sessions||[]),s(Array.isArray(Te)?Te:[]),l(rt||[]),g(F||[]),f(Array.isArray(ee)?ee:[]),R(Array.isArray(Ie)?Ie:[]),P(Array.isArray(v)?v:[]),T((be==null?void 0:be.value)||{}),b((Be==null?void 0:Be.value)||{}),$e!=null&&$e.value&&u(we=>({...we,...$e.value})),me(!!(Je!=null&&Je.value))}catch{}k(!0)})()},[]);const E={};a.forEach(L=>{var Te;(E[Te=`${L.kind}:${L.rkey}`]||(E[Te]=[])).push({eff:L.eff_date,rate:L.rate})}),Object.values(E).forEach(L=>L.sort((Te,rt)=>Te.eff.localeCompare(rt.eff)));const S=(L,Te,rt)=>{const F=E[`${L}:${Te}`];if(F){let ee=null;for(const Ie of F)if(Ie.eff<=rt)ee=Ie.rate;else break;if(ee!==null)return ee}return(L==="focus"?B[Te]:z[Te])||0},ie=(L,Te)=>{const rt=E[`${L}:${Te}`];return rt&&rt.length?rt[rt.length-1].rate:(L==="focus"?B[Te]:z[Te])??""},[fe,U]=o1(I);let xe=0,ve=0;n.filter(L=>L.completed).forEach(L=>{const Te=(L.started_at||L.created_at||"").slice(0,10),rt=cr[L.tree]?L.tree:no;xe+=(L.actual_min||0)/60*S("focus",rt,Te)}),i.forEach(L=>{dd.has(L.screen)||(ve+=L.seconds/60*S("usage",L.screen,L.date))});const Ae=m.reduce((L,Te)=>L+(Te.reward||0),0),tt=h.filter(L=>L.status==="done"),ft=tt.reduce((L,Te)=>L+(Te.reward_earned||0),0),_e=(p.focus?xe:0)+(p.usage?ve:0)+(p.achievement?Ae:0)+(p.challenge?ft:0),it=d.reduce((L,Te)=>L+Te.amount,0),Ze=Math.max(0,_e-it),st=L=>{let Te=0,rt=0;return p.focus&&n.filter(F=>F.completed).forEach(F=>{const ee=(F.started_at||F.created_at||"").slice(0,10);if(ee!==L)return;const Ie=cr[F.tree]?F.tree:no;Te+=(F.actual_min||0)/60*S("focus",Ie,ee)}),p.usage&&i.forEach(F=>{dd.has(F.screen)||F.date!==L||(rt+=F.seconds/60*S("usage",F.screen,F.date))}),Te+rt},de=L=>{const Te=new Date;return Te.setDate(Te.getDate()+L),Cr(Te)},Me=[{label:"Today",value:st(de(0)),color:Ln},{label:"Yesterday",value:st(de(-1)),color:"var(--text-3)"},{label:"Day before",value:st(de(-2)),color:"var(--text-3)"}],lt={};ia.forEach(L=>lt[L]={minutes:0,earned:0}),n.filter(L=>L.completed).forEach(L=>{const Te=(L.started_at||L.created_at||"").slice(0,10);if(Te<fe||Te>U)return;const rt=cr[L.tree]?L.tree:no,F=L.actual_min||0;lt[rt].minutes+=F,lt[rt].earned+=F/60*S("focus",rt,Te)});const dt=p.focus?ia.reduce((L,Te)=>L+lt[Te].earned,0):0,kt={};i.forEach(L=>{var rt;if(dd.has(L.screen)||L.date<fe||L.date>U)return;const Te=kt[rt=L.screen]||(kt[rt]={seconds:0,earned:0});Te.seconds+=L.seconds,Te.earned+=L.seconds/60*S("usage",L.screen,L.date)});const Nt=p.usage?Object.values(kt).reduce((L,Te)=>L+Te.earned,0):0,Xt=m.filter(L=>L.date>=fe&&L.date<=U&&(L.reward||0)>0),Bt=[...Xt].sort((L,Te)=>Te.date.localeCompare(L.date)||Te.reward-L.reward),Vt=p.achievement?Xt.reduce((L,Te)=>L+(Te.reward||0),0):0,Ot=tt.filter(L=>!L.end_date||L.end_date>=fe&&L.end_date<=U),mr=[...Ot].sort((L,Te)=>(Te.reward_earned||0)-(L.reward_earned||0)),Ge=p.challenge?Ot.reduce((L,Te)=>L+(Te.reward_earned||0),0):0,ot=dt+Nt+Vt+Ge,xt=ot>0?dt/ot*100:0,ut=ot>0?Nt/ot*100:0,Rt=ot>0?Vt/ot*100:0,Ar=ot>0?Ge/ot*100:0,yt=ia.map(L=>({p:L,...lt[L],...cr[L]})).filter(L=>L.minutes>0).sort((L,Te)=>Te.earned-L.earned),Er=jp.map(L=>({...L,...kt[L.id]||{seconds:0,earned:0}})).filter(L=>L.seconds>0).sort((L,Te)=>Te.earned-L.earned),$t=Er.reduce((L,Te)=>L+Te.seconds,0);let gn=0;const qt=Er.map((L,Te)=>{const rt=$t>0?gn/$t*100:0;gn+=L.seconds;const F=$t>0?gn/$t*100:0;return{...L,color:Sp[Te%Sp.length],start:rt,end:F,pct:$t>0?L.seconds/$t*100:0}}),tr=qt.length?`conic-gradient(${qt.map(L=>`${L.color} ${L.start}% ${L.end}%`).join(", ")})`:"var(--surface-2)",hr=async()=>{const L=Object.entries(C);for(const[Te,rt]of L)await M.setRewardRate({kind:"focus",rkey:Te,rate:Math.max(0,parseFloat(rt)||0)}).catch(()=>{});D({}),Z(!1),le()},W=()=>{D({}),Z(!1)},ge=async()=>{const L=Object.entries(x);for(const[Te,rt]of L)await M.setRewardRate({kind:"usage",rkey:Te,rate:Math.max(0,parseFloat(rt)||0)}).catch(()=>{});y({}),ue(!1),le()},We=()=>{y({}),ue(!1)},Ye=L=>{u(Te=>{const rt={...Te,[L]:!Te[L]};return M.setSetting(kp,rt).catch(()=>{}),rt})},wt=L=>{Ze<=0||(K(L),ye(L==="all"?Ze.toFixed(2):""),Y(""),Q(null))},Ue=async()=>{const L=Math.min(parseFloat(oe)||0,Ze);L<=0||!X.trim()||(await M.createPayout({amount:L,note:X.trim(),date:n1()}),K(null),ye(""),Y(""),await re(),J(!0))},Ke=async()=>{!Ne||(Ne.cost||0)>Ze||(await M.fulfillBucketWish(Ne.id).catch(()=>{}),K(null),Q(null),await Promise.all([re(),G()]),J(!0))},Ct=()=>{me(L=>{const Te=!L;return M.setSetting(wp,Te).catch(()=>{}),Te})},Fr=async L=>{await M.deletePayout(L),re()};return t.jsxs("div",{style:O.page,children:[t.jsxs("div",{style:O.head,children:[t.jsx("div",{style:O.eyebrow,children:"Anvil · Rewards"}),t.jsx("h1",{style:O.h1,children:"Rewards"}),t.jsx("div",{style:O.subhead,children:"Your earned rewards from focus and app usage."})]}),t.jsxs("div",{style:O.hero,children:[t.jsx("button",{onClick:()=>J(L=>!L),style:O.logIcon,title:"View reward log",children:t.jsx(C0,{size:16})}),t.jsx("div",{style:O.heroLabel,children:"Final reward · pending"}),t.jsx("div",{style:O.heroVal,children:r(Ze)}),t.jsxs("div",{style:O.heroSub,children:["Earned ",r(_e)," · Taken ",r(it),Ae>0?` · incl. ${r(Ae)} achievement`:"",ft>0?` · incl. ${r(ft)} challenge`:""]}),t.jsxs("div",{style:O.heroBtns,children:[t.jsx("button",{onClick:()=>wt("partial"),disabled:Ze<=0,style:{...O.heroBtnGhost,...Ze<=0?O.btnDisabled:{}},children:"Take partial"}),t.jsx("button",{onClick:()=>wt("all"),disabled:Ze<=0,style:{...O.heroBtnSolid,...Ze<=0?O.btnDisabled:{}},children:"Take all pending"})]}),t.jsxs("button",{onClick:Ct,style:O.bucketToggleRow,title:ae?"Taking will pick a bucket-list wish":"Taking uses a free amount",children:[t.jsx("span",{style:{...O.miniToggle,background:ae?"#fff":"rgba(255,255,255,0.3)",justifyContent:ae?"flex-end":"flex-start"},children:t.jsx("span",{style:{...O.miniKnob,background:ae?"var(--accent-strong)":"#fff"}})}),t.jsxs("span",{children:["Fulfil from bucket list",ae?" · on":" · off"]})]})]}),t.jsxs("div",{style:O.statRow,children:[t.jsxs("div",{style:O.statCard,children:[t.jsx("div",{style:O.statVal,children:r(it)}),t.jsx("div",{style:O.statLbl,children:"Total taken"})]}),t.jsxs("div",{style:O.statCard,children:[t.jsx("div",{style:{...O.statVal,color:Ln},children:r(Ze)}),t.jsx("div",{style:O.statLbl,children:"Total pending"})]})]}),t.jsxs("div",{style:O.card,children:[t.jsx("div",{style:O.threeDayTitle,children:"Earned · last 3 days"}),t.jsx(s1,{items:Me,reward:r})]}),t.jsx("div",{style:O.periodRow,children:_o.map(L=>t.jsx("button",{onClick:()=>$(L.id),style:{...O.periodChip,...I===L.id?O.periodChipOn:{}},children:L.label},L.id))}),ot>0?t.jsxs("div",{style:O.card,children:[t.jsxs("div",{style:O.cardTitleRow,children:[t.jsx("span",{style:O.cardTitle,children:"Reward split"}),t.jsxs("span",{style:O.periodTotal,children:[r(ot)," · ",_o.find(L=>L.id===I).label]})]}),t.jsxs("div",{style:O.splitTrack,children:[t.jsx("div",{style:{width:`${xt}%`,background:Ln,height:"100%"}}),t.jsx("div",{style:{width:`${ut}%`,background:Lo,height:"100%"}}),t.jsx("div",{style:{width:`${Rt}%`,background:bo,height:"100%"}}),t.jsx("div",{style:{width:`${Ar}%`,background:mo,height:"100%"}})]}),t.jsxs("div",{style:O.legendRow,children:[t.jsxs("span",{style:O.legendItem,children:[t.jsx("span",{style:{...O.legendDot,background:Ln}})," Focus ",Math.round(xt),"% · ",r(dt)]}),t.jsxs("span",{style:O.legendItem,children:[t.jsx("span",{style:{...O.legendDot,background:Lo}})," Usage ",Math.round(ut),"% · ",r(Nt)]}),t.jsxs("span",{style:O.legendItem,children:[t.jsx("span",{style:{...O.legendDot,background:bo}})," Achievement ",Math.round(Rt),"% · ",r(Vt)]}),t.jsxs("span",{style:O.legendItem,children:[t.jsx("span",{style:{...O.legendDot,background:mo}})," Challenges ",Math.round(Ar),"% · ",r(Ge)]})]})]}):t.jsxs("div",{style:{...O.card,...O.muted},children:["No rewards earned in ",_o.find(L=>L.id===I).label.toLowerCase(),"."]}),t.jsxs("div",{style:{...O.card,...p.focus?{}:O.cardOff},children:[t.jsxs("div",{style:O.sectionHead,children:[t.jsxs("span",{style:{...O.cardTitle,color:Ln},children:["Focus Rewards · ",r(dt)]}),t.jsxs("div",{style:O.sectionHeadRight,children:[p.focus&&t.jsx("button",{onClick:()=>_?W():Z(!0),style:O.collapseLink,children:_?"Hide rates":"Set rates"}),t.jsx(sa,{on:p.focus,onClick:()=>Ye("focus"),color:Ln})]})]}),p.focus&&_&&t.jsxs("div",{style:{marginTop:12},children:[t.jsx("div",{style:O.rateGrid,children:ia.map(L=>t.jsxs("div",{style:O.rateRow,children:[t.jsx("span",{style:{...O.dot,background:cr[L].leaf}}),t.jsx("span",{style:O.rateName,children:cr[L].label}),t.jsxs("div",{style:O.rateInputWrap,children:[t.jsx("span",{style:O.unitSign,children:e.symbol}),t.jsx("input",{type:"number",min:"0",step:"0.5",inputMode:"decimal",placeholder:"0",value:C[L]!==void 0?C[L]:ie("focus",L),onChange:Te=>D(rt=>({...rt,[L]:Te.target.value})),style:O.rateInput}),t.jsx("span",{style:O.unit,children:"/hr"})]})]},L))}),t.jsxs("div",{style:O.rateActions,children:[t.jsx("button",{onClick:W,style:O.rateCancel,children:"Cancel"}),t.jsx("button",{onClick:hr,style:O.rateSave,children:"Save"})]})]}),p.focus?yt.length>0?t.jsx("div",{style:{...O.rows,marginTop:14},children:yt.map(L=>t.jsxs("div",{style:O.row,children:[t.jsx("span",{style:{...O.dot,background:L.leaf}}),t.jsx("span",{style:O.rowName,children:L.label}),t.jsx("span",{style:O.rowMeta,children:r1(Math.round(L.minutes))}),t.jsx("span",{style:O.rowAmt,children:r(L.earned)})]},L.p))}):t.jsx("div",{style:O.muted,children:"No focus sessions yet."}):t.jsx("div",{style:O.muted,children:"Focus rewards are disabled — no reward is being calculated."})]}),t.jsxs("div",{style:{...O.card,...p.usage?{}:O.cardOff},children:[t.jsxs("div",{style:O.sectionHead,children:[t.jsxs("span",{style:{...O.cardTitle,color:Lo},children:["Usage Rewards · ",r(Nt)]}),t.jsxs("div",{style:O.sectionHeadRight,children:[p.usage&&t.jsx("button",{onClick:()=>ne?We():ue(!0),style:O.collapseLink,children:ne?"Hide rates":"Set rates"}),t.jsx(sa,{on:p.usage,onClick:()=>Ye("usage"),color:Lo})]})]}),p.usage&&ne&&t.jsxs("div",{style:{marginTop:12},children:[t.jsx("div",{style:O.rateGrid,children:jp.map(L=>t.jsxs("div",{style:O.rateRow,children:[t.jsx("span",{style:O.rateName,children:L.label}),t.jsxs("div",{style:O.rateInputWrap,children:[t.jsx("span",{style:O.unitSign,children:e.symbol}),t.jsx("input",{type:"number",min:"0",step:"0.1",inputMode:"decimal",placeholder:"0",value:x[L.id]!==void 0?x[L.id]:ie("usage",L.id),onChange:Te=>y(rt=>({...rt,[L.id]:Te.target.value})),style:O.rateInput}),t.jsx("span",{style:O.unit,children:"/min"})]})]},L.id))}),t.jsxs("div",{style:O.rateActions,children:[t.jsx("button",{onClick:We,style:O.rateCancel,children:"Cancel"}),t.jsx("button",{onClick:ge,style:O.rateSave,children:"Save"})]})]}),p.usage?Er.length>0?t.jsx("div",{style:{...O.rows,marginTop:14},children:Er.map(L=>t.jsxs("div",{style:O.row,children:[t.jsx("span",{style:O.rowName,children:L.label}),t.jsx("span",{style:O.rowMeta,children:cd(L.seconds/60)}),t.jsx("span",{style:O.rowAmt,children:r(L.earned)})]},L.id))}):t.jsx("div",{style:O.muted,children:j?"No usage tracked yet.":"Loading…"}):t.jsx("div",{style:O.muted,children:"Usage rewards are disabled — no reward is being calculated."}),p.usage&&$t>0&&t.jsxs("div",{style:O.usagePieBlock,children:[t.jsxs("div",{style:O.usagePieTitle,children:["Most-used screens · ",_o.find(L=>L.id===I).label]}),t.jsxs("div",{style:O.pieWrap,children:[t.jsxs("div",{style:O.pieChart,children:[t.jsx("div",{style:{...O.pieDisc,background:tr}}),t.jsxs("div",{style:O.pieHole,children:[t.jsx("span",{style:O.pieHoleVal,children:cd($t/60)}),t.jsx("span",{style:O.pieHoleLbl,children:"total time"})]})]}),t.jsx("div",{style:O.pieLegend,children:qt.map(L=>t.jsxs("div",{style:O.pieLegRow,children:[t.jsx("span",{style:{...O.legendDot,background:L.color}}),t.jsx("span",{style:O.pieLegName,children:L.label}),t.jsxs("span",{style:O.pieLegPct,children:[Math.round(L.pct),"%"]}),t.jsx("span",{style:O.pieLegMin,children:cd(L.seconds/60)})]},L.id))})]})]})]}),t.jsxs("div",{style:{...O.card,...p.achievement?{}:O.cardOff},children:[t.jsxs("div",{style:O.sectionHead,children:[t.jsxs("span",{style:{...O.cardTitle,color:bo},children:["Achievement Rewards · ",r(Vt)]}),t.jsxs("div",{style:O.sectionHeadRight,children:[p.achievement&&t.jsx("span",{style:O.collapseHint,children:"Set in Achievements"}),t.jsx(sa,{on:p.achievement,onClick:()=>Ye("achievement"),color:bo})]})]}),p.achievement?Bt.length>0?t.jsx("div",{style:{...O.rows,marginTop:14},children:Bt.map(L=>t.jsxs("div",{style:O.row,children:[t.jsx("span",{style:{...O.dot,background:bo}}),t.jsx("span",{style:O.rowName,children:L.title}),t.jsx("span",{style:O.rowMeta,children:Cp(L.date)}),t.jsx("span",{style:O.rowAmt,children:r(L.reward)})]},L.id))}):t.jsxs("div",{style:{...O.muted,marginTop:10},children:["No achievement rewards in ",_o.find(L=>L.id===I).label.toLowerCase(),". Add a reward to a win in the Achievements section."]}):t.jsx("div",{style:{...O.muted,marginTop:10},children:"Achievement rewards are disabled — no reward is being calculated."})]}),t.jsxs("div",{style:{...O.card,...p.challenge?{}:O.cardOff},children:[t.jsxs("div",{style:O.sectionHead,children:[t.jsxs("span",{style:{...O.cardTitle,color:mo},children:["Challenge Rewards · ",r(Ge)]}),t.jsxs("div",{style:O.sectionHeadRight,children:[p.challenge&&t.jsx("span",{style:O.collapseHint,children:"Set in Challenges"}),t.jsx(sa,{on:p.challenge,onClick:()=>Ye("challenge"),color:mo})]})]}),p.challenge?mr.length>0?t.jsx("div",{style:{...O.rows,marginTop:14},children:mr.map(L=>t.jsxs("div",{style:O.row,children:[t.jsx("span",{style:{...O.dot,background:mo}}),t.jsx("span",{style:O.rowName,children:L.name}),t.jsx("span",{style:O.rowMeta,children:L.reward||"Completed"}),t.jsx("span",{style:O.rowAmt,children:r(L.reward_earned)})]},L.id))}):t.jsxs("div",{style:{...O.muted,marginTop:10},children:["No completed challenges in ",_o.find(L=>L.id===I).label.toLowerCase(),". Finish a challenge in the Challenges section to bank its reward."]}):t.jsx("div",{style:{...O.muted,marginTop:10},children:"Challenge rewards are disabled — no reward is being calculated."})]}),ce&&t.jsx("div",{style:O.modalOverlay,onClick:()=>J(!1),children:t.jsxs("div",{style:O.logModal,onClick:L=>L.stopPropagation(),children:[t.jsxs("div",{style:O.logModalHead,children:[t.jsx("span",{style:O.modalTitle,children:"Reward log"}),t.jsx("button",{onClick:()=>J(!1),style:O.logClose,title:"Close",children:t.jsx(Fe,{size:16})})]}),d.length===0?t.jsx("div",{style:{...O.muted,padding:"24px 0",textAlign:"center"},children:"No rewards taken yet."}):t.jsxs(t.Fragment,{children:[t.jsx("div",{style:O.logScroll,children:d.map(L=>t.jsxs("div",{style:O.row,children:[t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:O.logNote,children:L.note||"Reward taken"}),t.jsx("div",{style:O.rowMeta,children:Cp(L.date)})]}),t.jsx("span",{style:O.rowAmt,children:r(L.amount)}),t.jsx("button",{onClick:()=>Fr(L.id),style:O.del,children:"×"})]},L.id))}),t.jsxs("div",{style:O.totalRow,children:[t.jsx("span",{children:"Total taken"}),t.jsx("span",{style:O.totalVal,children:r(it)})]})]})]})}),ot>0&&t.jsxs("div",{style:O.card,children:[t.jsx("div",{style:O.cardTitle,children:"Reward breakdown"}),t.jsxs("div",{style:O.pieWrap,children:[t.jsxs("div",{style:O.pieChart,children:[t.jsx("div",{style:{...O.pieDisc,background:`conic-gradient(${Ln} 0 ${xt}%, ${Lo} ${xt}% ${xt+ut}%, ${bo} ${xt+ut}% ${xt+ut+Rt}%, ${mo} ${xt+ut+Rt}% 100%)`}}),t.jsxs("div",{style:O.pieHole,children:[t.jsx("span",{style:O.pieHoleVal,children:r(ot)}),t.jsx("span",{style:O.pieHoleLbl,children:"total"})]})]}),t.jsxs("div",{style:O.pieLegend,children:[t.jsxs("div",{style:O.pieLegRow,children:[t.jsx("span",{style:{...O.legendDot,background:Ln}}),t.jsx("span",{style:O.pieLegName,children:"Focus"}),t.jsxs("span",{style:O.pieLegPct,children:[Math.round(xt),"%"]}),t.jsx("span",{style:O.pieLegMin,children:r(dt)})]}),t.jsxs("div",{style:O.pieLegRow,children:[t.jsx("span",{style:{...O.legendDot,background:Lo}}),t.jsx("span",{style:O.pieLegName,children:"Usage"}),t.jsxs("span",{style:O.pieLegPct,children:[Math.round(ut),"%"]}),t.jsx("span",{style:O.pieLegMin,children:r(Nt)})]}),t.jsxs("div",{style:O.pieLegRow,children:[t.jsx("span",{style:{...O.legendDot,background:bo}}),t.jsx("span",{style:O.pieLegName,children:"Achievement"}),t.jsxs("span",{style:O.pieLegPct,children:[Math.round(Rt),"%"]}),t.jsx("span",{style:O.pieLegMin,children:r(Vt)})]}),t.jsxs("div",{style:O.pieLegRow,children:[t.jsx("span",{style:{...O.legendDot,background:mo}}),t.jsx("span",{style:O.pieLegName,children:"Challenges"}),t.jsxs("span",{style:O.pieLegPct,children:[Math.round(Ar),"%"]}),t.jsx("span",{style:O.pieLegMin,children:r(Ge)})]})]})]})]}),A&&t.jsx("div",{style:O.modalOverlay,onClick:()=>K(null),children:t.jsxs("div",{style:O.modalCard,onClick:L=>L.stopPropagation(),children:[t.jsx("div",{style:O.modalTitle,children:A==="all"?"Take all pending reward?":"Take partial reward"}),t.jsxs("div",{style:O.modalSub,children:["Pending: ",r(Ze)]}),ae?(()=>{const L=H.filter(F=>!F.fulfilled),Te=Ne&&(Ne.cost||0)>Ze,rt=Ne&&!Te;return t.jsxs(t.Fragment,{children:[L.length===0?t.jsx("div",{style:O.wishEmpty,children:"No unfulfilled wishes. Add some in the Bucket List section."}):t.jsx("div",{style:O.wishList,children:L.map((F,ee)=>{const Ie=(F.cost||0)>Ze,v=(Ne==null?void 0:Ne.id)===F.id;return t.jsxs("button",{onClick:()=>!Ie&&Q(F),disabled:Ie,style:{...O.wishRow,...v?O.wishRowOn:{},...Ie?O.wishRowOver:{}},children:[t.jsx("span",{style:O.wishRank,children:ee+1}),t.jsx("span",{style:O.wishName,children:F.wish}),t.jsxs("span",{style:O.wishCost,children:[r(F.cost),Ie?" · too costly":""]})]},F.id)})}),t.jsxs("div",{style:O.modalActions,children:[t.jsx("button",{onClick:()=>K(null),style:O.modalCancel,children:"Cancel"}),t.jsx("button",{onClick:Ke,disabled:!rt,style:{...O.modalConfirm,...rt?{}:{opacity:.5,cursor:"not-allowed"}},children:Ne?`Fulfil · ${r(Ne.cost)}`:"Pick a wish"})]})]})})():t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:O.modalInputWrap,children:[t.jsx("span",{style:O.modalSign,children:e.symbol}),t.jsx("input",{type:"number",min:"0",step:"0.01",autoFocus:!0,placeholder:Ze.toFixed(2),value:oe,onChange:L=>ye(L.target.value),style:O.modalAmt})]}),t.jsx("input",{placeholder:"What is this reward for? (required)",value:X,onChange:L=>Y(L.target.value),onKeyDown:L=>L.key==="Enter"&&Ue(),style:O.modalReason}),(()=>{const L=parseFloat(oe)>0&&!!X.trim();return t.jsxs("div",{style:O.modalActions,children:[t.jsx("button",{onClick:()=>K(null),style:O.modalCancel,children:"Cancel"}),t.jsxs("button",{onClick:Ue,disabled:!L,style:{...O.modalConfirm,...L?{}:{opacity:.5,cursor:"not-allowed"}},children:["Confirm · ",r(Math.min(parseFloat(oe)||0,Ze))]})]})})()]})]})}),t.jsx("div",{style:O.note,children:"Set rates only affect time from today onward — past time keeps the rate it was earned at."})]})}function sa({on:e,onClick:r,color:n}){return t.jsx("button",{onClick:r,title:e?"Disable — stop calculating this reward":"Enable this reward",style:{...O.toggle,background:e?n:"var(--border)",justifyContent:e?"flex-end":"flex-start"},children:t.jsx("span",{style:O.toggleKnob})})}function s1({items:e,reward:r}){const n=Math.max(1,...e.map(o=>o.value));return t.jsx("div",{style:O.tbWrap,children:e.map((o,i)=>t.jsxs("div",{style:O.tbRow,children:[t.jsx("div",{style:O.tbLbl,children:o.label}),t.jsx("div",{style:O.tbTrack,children:t.jsx("div",{style:{...O.tbBar,width:`${o.value/n*100}%`,background:o.color}})}),t.jsx("div",{style:O.tbVal,children:r(o.value)})]},i))})}const O={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:680,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},hero:{position:"relative",background:"linear-gradient(135deg,var(--accent-strong),var(--accent-2))",borderRadius:16,padding:"22px 24px",color:"#fff",marginBottom:14,textAlign:"center"},logIcon:{position:"absolute",top:12,right:12,border:"1px solid rgba(255,255,255,0.5)",background:"rgba(255,255,255,0.12)",color:"#fff",width:32,height:32,borderRadius:9,cursor:"pointer",display:"grid",placeItems:"center"},logClose:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:28,height:28,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},logNote:{fontSize:13.5,fontWeight:600,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},modalOverlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:200,display:"grid",placeItems:"center",padding:16},modalCard:{background:"var(--surface)",color:"var(--text)",borderRadius:16,padding:"22px 22px 18px",width:360,maxWidth:"100%",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)"},logModal:{background:"var(--surface)",color:"var(--text)",borderRadius:16,padding:"18px 18px 14px",width:440,maxWidth:"100%",maxHeight:"82vh",display:"flex",flexDirection:"column",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)",boxSizing:"border-box"},logModalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8,flexShrink:0},logScroll:{overflowY:"auto",display:"flex",flexDirection:"column",gap:2,paddingRight:2,minHeight:0},modalTitle:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:4},modalSub:{fontSize:12.5,color:"var(--text-3)",fontWeight:600,marginBottom:14},modalInputWrap:{display:"flex",alignItems:"center",gap:4,border:"1px solid var(--border)",borderRadius:10,padding:"8px 12px",background:"var(--surface-2)",marginBottom:8},modalSign:{fontSize:16,color:"var(--text-2)",fontWeight:700},modalAmt:{border:"none",background:"none",outline:"none",flex:1,fontSize:18,fontWeight:700,fontFamily:"inherit",color:"var(--text)"},modalReason:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"9px 12px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",marginBottom:14},modalActions:{display:"flex",gap:8},modalCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},modalConfirm:{flex:1,border:"none",background:"#C9A227",color:"#fff",padding:"10px 14px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},bucketToggleRow:{display:"inline-flex",alignItems:"center",gap:8,margin:"12px auto 0",border:"none",background:"rgba(255,255,255,0.12)",color:"#fff",padding:"6px 12px",borderRadius:20,fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},miniToggle:{display:"flex",alignItems:"center",width:32,height:18,borderRadius:10,padding:2,flexShrink:0,transition:"background 0.15s"},miniKnob:{width:14,height:14,borderRadius:"50%",boxShadow:"0 1px 2px rgba(0,0,0,0.3)"},wishList:{display:"flex",flexDirection:"column",gap:6,maxHeight:300,overflowY:"auto",margin:"4px 0 4px"},wishRow:{display:"flex",alignItems:"center",gap:10,width:"100%",textAlign:"left",border:"1px solid var(--border)",background:"var(--surface)",borderRadius:10,padding:"10px 12px",cursor:"pointer",fontFamily:"inherit"},wishRowOn:{borderColor:"var(--accent-strong)",background:"var(--hover)",boxShadow:"0 0 0 1px var(--accent-strong)"},wishRowOver:{opacity:.5,cursor:"not-allowed"},wishRank:{fontSize:12,fontWeight:800,color:"var(--text-3)",fontFamily:"'Fraunces',Georgia,serif",flexShrink:0},wishName:{flex:1,fontSize:13.5,fontWeight:700,color:"var(--text)",minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},wishCost:{fontSize:13,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--accent-strong)",flexShrink:0},wishEmpty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"20px 0"},heroLabel:{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",opacity:.85},heroVal:{fontSize:44,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:2,lineHeight:1.05},heroSub:{fontSize:12.5,opacity:.9,marginTop:6},heroBtns:{display:"flex",gap:10,marginTop:16,justifyContent:"center"},heroBtnSolid:{border:"none",background:"#fff",color:"var(--accent-strong)",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},heroBtnGhost:{border:"1px solid rgba(255,255,255,0.6)",background:"transparent",color:"#fff",padding:"10px 18px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},btnDisabled:{opacity:.45,cursor:"not-allowed"},statRow:{display:"flex",gap:10,marginBottom:14},statCard:{flex:1,background:"var(--surface)",borderRadius:12,padding:"12px 14px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},threeDayTitle:{fontSize:13,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:84,fontSize:11.5,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap"},tbTrack:{flex:1,height:14,background:"var(--surface-2)",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:76,fontSize:11.5,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"},statVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},statLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},card:{background:"var(--surface)",borderRadius:16,padding:"18px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:10,flexWrap:"wrap"},periodTotal:{fontSize:13,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text-2)"},periodRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},periodChip:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:18,fontSize:12.5,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},periodChipOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},collapseHint:{fontSize:12,fontWeight:700,color:"var(--accent)"},sectionHead:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,flexWrap:"wrap"},sectionHeadRight:{display:"flex",alignItems:"center",gap:12},collapseLink:{border:"none",background:"none",cursor:"pointer",padding:0,fontFamily:"inherit",fontSize:12,fontWeight:700,color:"var(--accent)"},cardOff:{opacity:.62},toggle:{border:"none",cursor:"pointer",width:40,height:22,borderRadius:11,padding:2,display:"flex",alignItems:"center",transition:"background 0.15s",flexShrink:0},toggleKnob:{width:18,height:18,borderRadius:"50%",background:"#fff",boxShadow:"0 1px 2px rgba(0,0,0,0.3)"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"12px 0"},splitTrack:{display:"flex",height:16,borderRadius:8,overflow:"hidden",marginTop:12,marginBottom:12,border:"1px solid var(--border)"},legendRow:{display:"flex",gap:16,flexWrap:"wrap"},legendItem:{display:"flex",alignItems:"center",gap:6,fontSize:12,fontWeight:600,color:"var(--text-2)"},legendDot:{width:10,height:10,borderRadius:3,flexShrink:0},usagePieBlock:{marginTop:16,paddingTop:14,borderTop:"1px solid var(--border)"},usagePieTitle:{fontSize:12.5,fontWeight:700,color:"var(--text-2)",marginBottom:6},pieWrap:{display:"flex",alignItems:"center",gap:20,flexWrap:"wrap",marginTop:6},pieChart:{position:"relative",width:130,height:130,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:78,height:78,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:14,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:10},pieLegRow:{display:"flex",alignItems:"center",gap:8},pieLegName:{flex:1,fontSize:13.5,fontWeight:600},pieLegPct:{fontSize:13,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",width:46,textAlign:"right"},pieLegMin:{fontSize:12,color:"var(--text-3)",fontWeight:600,minWidth:64,textAlign:"right"},rows:{display:"flex",flexDirection:"column",gap:2},row:{display:"flex",alignItems:"center",gap:8,padding:"7px 0",borderBottom:"1px solid var(--border)"},dot:{width:10,height:10,borderRadius:3,flexShrink:0},rowName:{flex:1,fontSize:13.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},rowMeta:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,flexShrink:0},rowAmt:{fontSize:13.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",flexShrink:0,minWidth:64,textAlign:"right"},del:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",fontSize:16,lineHeight:1,padding:"0 2px",flexShrink:0},totalRow:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:10,marginTop:4,fontSize:14,fontWeight:700},totalVal:{fontSize:16,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},rateActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:14},rateCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},rateSave:{border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},rateGrid:{display:"flex",flexDirection:"column",gap:10},rateRow:{display:"flex",alignItems:"center",gap:8},rateName:{flex:1,fontSize:14,fontWeight:600},rateInputWrap:{display:"flex",alignItems:"center",gap:3,border:"1px solid var(--border)",borderRadius:9,padding:"4px 10px",background:"var(--surface-2)"},unitSign:{fontSize:14,color:"var(--text-2)",fontWeight:600},rateInput:{border:"none",background:"none",outline:"none",width:64,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},unit:{fontSize:12,color:"var(--text-3)",fontWeight:600},note:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",fontStyle:"italic",marginTop:4}};function a1(){return t.jsx("div",{style:_n.page,children:t.jsxs("div",{style:_n.card,children:[t.jsxs("div",{style:_n.brand,children:[t.jsx("div",{style:_n.logo,children:"B"}),t.jsx("span",{style:_n.brandName,children:"Anvil"})]}),t.jsx("h1",{style:_n.title,children:"Welcome to Anvil"}),t.jsx("p",{style:_n.sub,children:"Sign in with Google to continue."}),t.jsxs("button",{onClick:()=>M.signInWithGoogle(),style:_n.googleBtn,children:[t.jsx(l1,{}),"Sign in with Google"]})]})})}function l1(){return t.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[t.jsx("path",{fill:"#4285F4",d:"M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84c-.21 1.13-.85 2.09-1.81 2.73v2.27h2.92c1.71-1.57 2.69-3.88 2.69-6.64z"}),t.jsx("path",{fill:"#34A853",d:"M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.27c-.81.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.71H.96v2.34C2.44 15.98 5.48 18 9 18z"}),t.jsx("path",{fill:"#FBBC05",d:"M3.97 10.7c-.18-.54-.28-1.11-.28-1.7s.1-1.16.28-1.7V4.96H.96A8.997 8.997 0 0 0 0 9c0 1.45.35 2.83.96 4.04l3.01-2.34z"}),t.jsx("path",{fill:"#EA4335",d:"M9 3.58c1.32 0 2.51.45 3.44 1.35l2.59-2.59C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l3.01 2.34C4.68 5.16 6.66 3.58 9 3.58z"})]})}const _n={page:{minHeight:"100vh",display:"grid",placeItems:"center",background:"var(--bg)",fontFamily:"'Inter',system-ui,sans-serif",padding:20},card:{width:"100%",maxWidth:380,background:"var(--surface)",borderRadius:16,padding:"32px 28px",boxShadow:"0 4px 24px rgba(0,0,0,0.08)",display:"flex",flexDirection:"column",textAlign:"center"},brand:{display:"flex",alignItems:"center",justifyContent:"center",gap:9,marginBottom:20},logo:{width:32,height:32,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},brandName:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},title:{fontSize:22,fontWeight:700,margin:"0 0 4px",fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)"},sub:{fontSize:13.5,color:"var(--text-3)",margin:"0 0 24px"},googleBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,border:"1px solid var(--border)",background:"#fff",color:"#26241F",padding:"12px",borderRadius:10,fontSize:14.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}};function d1(e=600){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const Tp=["Salary","Stocks","Business","Interest","Rent","Gift","Other"],c1=["Bills","EMI","Rent","Food","Shopping","Transport","Health","Entertainment","Education","Other"],Ip=["Stocks","Mutual Fund","SIP","Fixed Deposit","Gold","Real Estate","PPF/EPF","Crypto","Other"],g1={Salary:"#4C9A6B",Stocks:"#3A7CA5",Business:"#C9A227",Interest:"#8268B0",Gift:"#C2773B",Bills:"#C2536B",EMI:"#A23E57",Food:"#E08E45",Shopping:"#8268B0",Transport:"#3A7CA5",Health:"#4C9A6B",Entertainment:"#C9A227",Education:"#5B7C99",Rent:"#5B8C5A",Other:"#9A968C"},Mg=e=>g1[e]||"#9A968C",u1={Stocks:"#2F6B4F","Mutual Fund":"#3E9E6B",SIP:"#4FAE7E","Fixed Deposit":"#6BBE92",Gold:"#8ECDA8","Real Estate":"#1F5C3F","PPF/EPF":"#5BAE83",Crypto:"#7FC79E",Other:"#9AD4B3"},p1=e=>u1[e]||"#4C9A6B",li="#3E9E6B",kn="#D1556E",sn="#3A7CA5",gd="#8268B0",Yh=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,yo=Yh(new Date),b1=[{id:"month",label:"This month"},{id:"last",label:"Last month"},{id:"year",label:"This year"},{id:"all",label:"All time"}];function m1(e,r){const n=new Date;return e==="month"?or(n,r):e==="last"?or(n,r,-1):e==="year"?[Yh(new Date(n.getFullYear(),0,1)),yo]:["0000-01-01","9999-12-31"]}function h1(){const e=uo(),[r,n]=c.useState("overview"),[o,i]=c.useState([]),[s,a]=c.useState([]),[l,d]=c.useState([]),[g,m]=c.useState([]),[f,h]=c.useState([]),[R,B]=c.useState(!1),T=c.useCallback(()=>Promise.all([M.getTxns(),M.getExpenses(),M.getInvestments()]).then(([C,D,x])=>(i(C),a(D.categories),d(D.logs),m(x),M.getFixedItems())).then(h).then(()=>B(!0)).catch(()=>B(!0)),[]);c.useEffect(()=>{T()},[T]);const z=c.useMemo(()=>{const C={};return s.forEach(D=>C[D.id]=D),C},[s]),b=c.useMemo(()=>l.map(C=>{var D;return{id:`exp-${C.id}`,rawId:C.id,source:"expense",kind:"expense",category:((D=z[C.category_id])==null?void 0:D.name)||"Other",amount:C.amount,note:C.note,date:C.date}}),[l,z]),p=c.useMemo(()=>o.filter(C=>C.kind==="expense").map(C=>({...C,source:"legacy"})),[o]),u=c.useMemo(()=>o.filter(C=>C.kind==="income").map(C=>({...C,source:"legacy"})),[o]),j=c.useMemo(()=>[...u,...p,...b].sort((C,D)=>D.date.localeCompare(C.date)),[u,p,b]),k=C=>Cs(C,e.code);return t.jsxs("div",{style:w.page,children:[t.jsxs("div",{style:w.head,children:[t.jsx("div",{style:w.eyebrow,children:"Anvil · Wallet"}),t.jsx("h1",{style:w.h1,children:"Wallet"}),t.jsx("div",{style:w.subhead,children:"Your money — what comes in, what goes out, and where it's headed."})]}),t.jsx("div",{style:w.tabs,children:[["overview","Overview",ph],["money","Money",Bg],["calc","Calculators",Hy]].map(([C,D,x])=>t.jsxs("button",{onClick:()=>n(C),style:{...w.tab,...r===C?w.tabOn:{}},children:[t.jsx(x,{size:15})," ",D]},C))}),r==="overview"&&t.jsx(f1,{txns:j,investments:g,loaded:R,money:k,cur:e}),r==="money"&&t.jsx(j1,{txns:j,expCats:s,investments:g,fixedItems:f,reload:T,money:k,cur:e}),r==="calc"&&t.jsx(k1,{money:k,cur:e})]})}function f1({txns:e,investments:r,loaded:n,money:o,cur:i}){const s=Ag(),a=d1(),[l,d]=c.useState("month"),[g,m]=m1(l,s),f=c.useMemo(()=>e.filter(_=>_.date>=g&&_.date<=m),[e,g,m]),h=f.filter(_=>_.kind==="income"),R=f.filter(_=>_.kind==="expense"),B=h.reduce((_,Z)=>_+Z.amount,0),T=R.reduce((_,Z)=>_+Z.amount,0),z=c.useMemo(()=>r.filter(_=>_.date>=g&&_.date<=m),[r,g,m]),b=z.reduce((_,Z)=>_+Z.invested,0),p=T+b,u=B-p,j=r.reduce((_,Z)=>_+Z.invested,0),k=c.useMemo(()=>{const[_,Z]=or(new Date,s),ne=X=>X.date>=_&&X.date<=Z,ue=e.filter(X=>X.kind==="income"&&ne(X)).reduce((X,Y)=>X+Y.amount,0),A=e.filter(X=>X.kind==="expense"&&ne(X)).reduce((X,Y)=>X+Y.amount,0),K=r.filter(X=>ne(X)).reduce((X,Y)=>X+Y.invested,0),oe=ue-A-K,ye=Math.max(1,Math.round((new Date(Z+"T00:00")-new Date(yo+"T00:00"))/864e5)+1);return{remaining:oe,daysLeft:ye,perDay:oe/ye}},[e,r,s]),C=_=>{const Z={};return _.forEach(ne=>{Z[ne.category]=(Z[ne.category]||0)+ne.amount}),Object.entries(Z).map(([ne,ue])=>({category:ne,amount:ue,color:Mg(ne)})).sort((ne,ue)=>ue.amount-ne.amount)},D=C(R),x=c.useMemo(()=>{const _={};return z.forEach(Z=>{_[Z.kind]=(_[Z.kind]||0)+Z.invested}),Object.entries(_).map(([Z,ne])=>({category:Z,amount:ne,color:p1(Z)})).sort((Z,ne)=>ne.amount-Z.amount)},[z]),y=[...D,...x];return t.jsxs(t.Fragment,{children:[t.jsx("div",{style:w.presetRow,children:b1.map(_=>t.jsx("button",{onClick:()=>d(_.id),style:{...w.preset,...l===_.id?w.presetOn:{}},children:_.label},_.id))}),t.jsxs("div",{style:{...w.sumGrid,gridTemplateColumns:a?"repeat(2,1fr)":"repeat(4,1fr)"},children:[t.jsx(aa,{icon:t.jsx(Fy,{size:16}),label:"Income",value:o(B),color:li}),t.jsx(aa,{icon:t.jsx(uh,{size:16}),label:"Expenses",value:o(T),color:kn}),t.jsx(aa,{icon:t.jsx(Zi,{size:16}),label:"Invested",value:o(b),color:sn}),t.jsx(aa,{icon:u>=0?t.jsx(Ch,{size:16}):t.jsx(ro,{size:16}),label:"Remaining",value:o(u),color:u>=0?li:kn,sub:k.perDay>=0?`≈ ${o(k.perDay)}/day · ${k.daysLeft}d left`:`overspent · ${k.daysLeft}d left`})]}),b>0&&t.jsxs("div",{style:w.investNote,children:[t.jsx(Zi,{size:13,color:sn})," ",o(b)," invested this period — counted as outgoing and deducted from what remains."]}),r.length>0&&t.jsxs("div",{style:w.card,children:[t.jsxs("div",{style:w.cardTitleRow,children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(Zi,{size:18,color:sn}),t.jsxs("div",{children:[t.jsx("div",{style:w.cardTitle,children:"Assets & investments"}),t.jsx("div",{style:w.cardSub,children:"Total invested across all your holdings, all time"})]})]}),t.jsx("div",{style:{...w.cardTotal,color:sn},children:o(j)})]}),t.jsx(x1,{invested:j,investments:r,money:o,cur:i})]}),n?f.length===0&&z.length===0?t.jsx("div",{style:w.card,children:t.jsxs("div",{style:w.muted,children:["No transactions in this period. Add some under the ",t.jsx("b",{children:"Money"})," tab."]})}):t.jsxs(t.Fragment,{children:[t.jsx(v1,{totalIn:B,totalOut:p}),t.jsxs("div",{style:w.twoCol,children:[t.jsx(Bp,{title:"Incoming",subtitle:"Where your money comes from",total:B,data:C(h),accent:li,cur:i}),t.jsx(Bp,{title:"Outgoing",subtitle:"Spending + money set aside in investments",total:p,data:y,accent:kn,cur:i})]})]}):t.jsx("div",{style:w.muted,children:"Loading…"})]})}function x1({invested:e,investments:r,money:n,cur:o}){const[i,s]=c.useState(10),[a,l]=c.useState(""),[d,g]=c.useState(5);c.useEffect(()=>{M.getSetting("invest_forecast_rate").then(x=>{const y=parseFloat(x==null?void 0:x.value);!isNaN(y)&&y>0&&s(y)}).catch(()=>{}),M.getSetting("invest_forecast_stepup").then(x=>{const y=parseFloat(x==null?void 0:x.value);!isNaN(y)&&y>=0&&g(y)}).catch(()=>{}),M.getSetting("invest_forecast_monthly").then(x=>{const y=parseFloat(x==null?void 0:x.value);if(!isNaN(y)&&y>=0){l(y);return}const _=new Set((r||[]).map(Z=>(Z.date||"").slice(0,7)).filter(Boolean));_.size>0&&l(Math.round(e/_.size/100)*100)}).catch(()=>{})},[]);const m=(x,y,_=0)=>{const Z=parseFloat(y);!isNaN(Z)&&Z>=_&&M.setSetting(x,Z).catch(()=>{})},f=x=>{s(x),m("invest_forecast_rate",x,.01)},h=x=>{l(x),m("invest_forecast_monthly",x)},R=x=>{g(x),m("invest_forecast_stepup",x)},B=parseFloat(i),T=!isNaN(B)&&B>0?B:10,z=Math.max(0,parseFloat(a)||0),b=Math.max(0,parseFloat(d)||0),p=T/100/12,u=x=>{let y=e,_=z,Z=e;for(let ne=1;ne<=x;ne++)y=(y+_)*(1+p),Z+=_,ne%12===0&&(_*=1+b/100);return{value:y,putIn:Z}},k=Array.from({length:20},(x,y)=>(y+1)*12).map(x=>({mo:x,...u(x)})),C=Math.max(...k.map(x=>x.value),1),D=k[k.length-1];return t.jsxs("div",{style:w.forecastWrap,children:[t.jsxs("div",{style:w.forecastHead,children:[t.jsxs("div",{children:[t.jsx("div",{style:w.forecastTitle,children:"Growth forecast"}),t.jsxs("div",{style:w.cardSub,children:[n(z),"/month",b>0?`, stepping up ${b}% yearly (${n(z*(1+b/100))}/mo from year 2)`:""]})]}),t.jsxs("div",{style:w.forecastInputs,children:[t.jsxs("label",{style:w.rateWrap,title:"How much you invest every month",children:[t.jsx("span",{style:w.rateUnit,children:o.symbol}),t.jsx("input",{type:"number",min:"0",step:"500",value:a,placeholder:"15000",onChange:x=>h(x.target.value),style:{...w.rateInput,width:76,textAlign:"left"}}),t.jsx("span",{style:w.rateUnit,children:"/ mo"})]}),t.jsxs("label",{style:w.rateWrap,title:"Yearly increase of the monthly amount",children:[t.jsx("span",{style:w.rateUnit,children:"+"}),t.jsx("input",{type:"number",min:"0",max:"100",step:"1",value:d,onChange:x=>R(x.target.value),style:{...w.rateInput,width:40}}),t.jsx("span",{style:w.rateUnit,children:"% / yr"})]}),t.jsxs("label",{style:w.rateWrap,title:"Expected annual return",children:[t.jsx("input",{type:"number",min:"1",max:"100",step:"0.5",value:i,onChange:x=>f(x.target.value),style:w.rateInput}),t.jsx("span",{style:w.rateUnit,children:"% / yr"})]})]})]}),t.jsx("div",{style:w.forecastBarsWrap,children:t.jsx("div",{style:w.forecastBars,children:k.map((x,y)=>t.jsxs("div",{style:w.fBarCol,children:[t.jsx("div",{style:w.fBarVal,children:fc(x.value,o.code)}),t.jsx("div",{style:w.fBarTrack,children:t.jsx("div",{style:{...w.fBar,height:`${Math.max(6,x.value/C*100)}%`,opacity:.4+.6*(y/(k.length-1))}})}),t.jsxs("div",{style:w.fBarLbl,children:[x.mo/12,"y"]})]},x.mo))})}),t.jsxs("div",{style:w.forecastNote,children:["In 20 years at ",T,"% p.a. → ",t.jsx("b",{children:n(D.value)})," (you'd put in ",n(D.putIn),", growth adds ",n(Math.max(0,D.value-D.putIn)),")"]})]})}function aa({icon:e,wideIcon:r,label:n,value:o,color:i,style:s,wide:a,sub:l}){return a?t.jsxs("div",{style:{...w.sumCard,...w.sumCardWide,...s},children:[t.jsx("div",{style:{...w.sumIconWide,color:i,background:i+"1A"},children:r||e}),t.jsxs("div",{style:w.sumWideText,children:[t.jsx("div",{style:w.sumLabel,children:n}),t.jsx("div",{style:{...w.sumVal,color:i,marginTop:0},children:o}),l&&t.jsx("div",{style:w.sumSub,children:l})]})]}):t.jsxs("div",{style:{...w.sumCard,...s},children:[t.jsx("div",{style:{...w.sumIcon,color:i,background:i+"1A"},children:e}),t.jsx("div",{style:w.sumLabel,children:n}),t.jsx("div",{style:{...w.sumVal,color:i},children:o}),l&&t.jsx("div",{style:w.sumSub,children:l})]})}function Bp({title:e,subtitle:r,total:n,data:o,accent:i,cur:s}){const[a,l]=c.useState(null);let d=0;const g=o.map(h=>{const R=n>0?d/n*100:0;d+=h.amount;const B=n>0?d/n*100:0;return{...h,start:R,end:B,color:h.color||Mg(h.category),pct:n>0?h.amount/n*100:0}}),m=a!=null?g[a]:null,f=g.length===1;return t.jsxs("div",{style:w.card,children:[t.jsxs("div",{style:w.cardTitleRow,children:[t.jsxs("div",{children:[t.jsx("div",{style:{...w.cardTitle,color:i},children:e}),t.jsx("div",{style:w.cardSub,children:r})]}),t.jsx("div",{style:{...w.cardTotal,color:i},children:Cs(n,s.code)})]}),o.length===0?t.jsx("div",{style:w.muted,children:"Nothing logged."}):t.jsxs("div",{style:w.pieWrap,children:[t.jsxs("div",{style:w.pieChart,onMouseLeave:()=>l(null),children:[t.jsx("svg",{viewBox:"0 0 120 120",style:w.pieSvg,children:g.map((h,R)=>t.jsx("path",{d:y1(h.start,h.end,R===a,f),fill:h.color,onMouseEnter:()=>l(R),style:{cursor:"pointer",transition:"transform 0.15s, filter 0.15s",filter:R===a?"brightness(1.08)":"none"}},h.category))}),t.jsx("div",{style:{...w.pieHole,...m?{transform:"translate(-50%,-50%) scale(1.06)",boxShadow:`0 0 0 4px ${m.color}33`}:{}},children:m?t.jsxs(t.Fragment,{children:[t.jsx("span",{style:{...w.pieHoleVal,color:m.color,fontSize:13},children:fc(m.amount,s.code)}),t.jsxs("span",{style:w.pieHoleLbl,children:[Math.round(m.pct),"% · ",m.category]})]}):t.jsxs(t.Fragment,{children:[t.jsx("span",{style:w.pieHoleVal,children:fc(n,s.code)}),t.jsx("span",{style:w.pieHoleLbl,children:"total"})]})})]}),t.jsx("div",{style:w.pieLegend,children:g.map((h,R)=>t.jsxs("div",{style:{...w.legendRow,...R===a?w.legendRowOn:{}},onMouseEnter:()=>l(R),onMouseLeave:()=>l(null),children:[t.jsx("span",{style:{...w.dot,background:h.color}}),t.jsx("span",{style:w.legendName,children:h.category}),t.jsxs("span",{style:w.legendPct,children:[Math.round(h.pct),"%"]}),t.jsx("span",{style:w.legendAmt,children:Cs(h.amount,s.code)})]},h.category))})]})]})}function y1(e,r,n,o){const d=n?6:0,g=(C,D,x=0,y=0)=>{const _=C/100*2*Math.PI-Math.PI/2;return[60+x+D*Math.cos(_),60+y+D*Math.sin(_)]},m=(e+r)/2/100*2*Math.PI-Math.PI/2,f=o?0:Math.cos(m)*d,h=o?0:Math.sin(m)*d;if(r-e>=99.999)return`M ${60+f} ${60+h-58} A 58 58 0 1 1 ${60+f-.01} ${60+h-58} L ${60+f-.01} ${60+h-35} A 35 35 0 1 0 ${60+f} ${60+h-35} Z`;const[R,B]=g(e,58,f,h),[T,z]=g(r,58,f,h),[b,p]=g(r,35,f,h),[u,j]=g(e,35,f,h),k=r-e>50?1:0;return`M ${R} ${B} A 58 58 0 ${k} 1 ${T} ${z} L ${b} ${p} A 35 35 0 ${k} 0 ${u} ${j} Z`}function v1({totalIn:e,totalOut:r}){const n=e-r,o=e>0?n/e:0,i=e===0?0:Math.max(0,Math.min(100,Math.round(50+o*100)));let s,a,l;e===0?(s="No income logged",a="#9A968C",l="Add your income to see your financial health."):o>=.3?(s="Excellent",a="#3E9E6B",l="You're saving 30%+ of income — keep investing the surplus."):o>=.2?(s="Healthy",a="#4C9A6B",l="Solid savings rate. Consider automating a SIP with the surplus."):o>=.1?(s="Okay",a="#C9A227",l="Decent, but aim for 20%+. Trim your biggest expense category."):o>=0?(s="Tight",a="#C2773B",l="You're saving very little. Review recurring bills and EMIs."):(s="Overspending",a="#D1556E",l="You're spending more than you earn. Cut back to avoid debt.");const d=e>0?Math.min(100,Math.round(r/e*100)):0;return t.jsxs("div",{style:w.card,children:[t.jsxs("div",{style:w.cardTitleRow,children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(s0,{size:18,color:a}),t.jsxs("div",{children:[t.jsx("div",{style:w.cardTitle,children:"Financial health"}),t.jsx("div",{style:w.cardSub,children:"Based on your savings rate this period"})]})]}),t.jsxs("div",{style:{textAlign:"right"},children:[t.jsx("div",{style:{...w.healthScore,color:a},children:e===0?"—":i}),t.jsx("div",{style:{...w.healthStatus,color:a},children:s})]})]}),t.jsx("div",{style:w.gaugeTrack,children:t.jsx("div",{style:{...w.gaugeFill,width:`${e===0?0:i}%`,background:a}})}),t.jsxs("div",{style:w.healthStats,children:[t.jsxs("div",{style:w.healthStat,children:[t.jsxs("span",{style:w.healthStatV,children:[e>0?Math.round(o*100):0,"%"]}),t.jsx("span",{style:w.healthStatL,children:"Savings rate"})]}),t.jsxs("div",{style:w.healthStat,children:[t.jsxs("span",{style:w.healthStatV,children:[d,"%"]}),t.jsx("span",{style:w.healthStatL,children:"of income spent"})]})]}),t.jsx("div",{style:{...w.tip,borderColor:a+"55",background:a+"12",color:a},children:l})]})}function j1({txns:e,expCats:r,investments:n,fixedItems:o,reload:i,money:s,cur:a}){const[l,d]=c.useState(""),[g,m]=c.useState("Salary"),[f,h]=c.useState(yo),[R,B]=c.useState(""),[T,z]=c.useState(null),[b,p]=c.useState(null),[u,j]=c.useState(null),{deleteItem:k,toasts:C,handleUndo:D,handleDismiss:x}=kr(M.deleteTxn,M.restoreTxn,i),{deleteItem:y,toasts:_,handleUndo:Z,handleDismiss:ne}=kr(M.deleteExpenseLog,M.restoreExpenseLog,i),{deleteItem:ue,toasts:A,handleUndo:K,handleDismiss:oe}=kr(M.deleteInvestment,M.restoreInvestment,i),ye=()=>{var E;return j({id:null,kind:"expense",name:"",amount:"",category_id:((E=r[0])==null?void 0:E.id)||"",invest_kind:"Stocks",note:""})},X=E=>{var S;return j({id:E.id,kind:E.kind,name:E.name,amount:String(E.amount),category_id:E.category_id||((S=r[0])==null?void 0:S.id)||"",invest_kind:E.invest_kind||"Stocks",note:E.note||""})},Y=async()=>{const E=u.name.trim(),S=parseFloat(u.amount)||0;if(!E||S<=0)return;const ie={kind:u.kind,name:E,amount:S,note:u.note.trim(),...u.kind==="expense"?{category_id:Number(u.category_id)}:{invest_kind:u.invest_kind}};u.id?await M.updateFixedItem(u.id,ie):await M.createFixedItem(ie),j(null),i()},ce=async E=>{window.confirm(`Stop "${E.name}" from auto-posting each month? Past entries it already created will stay.`)&&(await M.deleteFixedItem(E.id),i())},J=async E=>{await M.updateFixedItem(E.id,{active:!E.active}),i()},I=()=>p({id:null,name:"",kind:"Stocks",invested:"",current_value:"",date:yo,note:""}),$=E=>p({id:E.id,name:E.name,kind:E.kind,invested:String(E.invested),current_value:String(E.current_value),date:E.date,note:E.note||""}),H=async()=>{const E=b.name.trim(),S=parseFloat(b.invested)||0,ie=parseFloat(b.current_value)||0;if(!E)return;const fe={name:E,kind:b.kind,invested:S,current_value:ie,note:b.note.trim(),date:b.date};b.id?await M.updateInvestment(b.id,fe):await M.createInvestment(fe),p(null),i()},P=n.reduce((E,S)=>E+S.invested,0),ae=async()=>{const E=parseFloat(l);!E||E<=0||(await M.createTxn({kind:"income",category:g,amount:E,note:R.trim(),date:f}),d(""),B(""),i())},me=E=>z({id:E.id,rawId:E.rawId,source:E.source,kind:E.kind,amount:String(E.amount),category:E.category,date:E.date,note:E.note||""}),Ne=(T==null?void 0:T.source)==="expense"?r.map(E=>E.name):(T==null?void 0:T.kind)==="income"?Tp:c1,Q=async()=>{const E=parseFloat(T.amount);if(!(!E||E<=0)){if(T.source==="expense"){const S=r.find(ie=>ie.name===T.category);await M.updateExpenseLog(T.rawId,{amount:E,note:T.note.trim(),date:T.date,...S?{category_id:S.id}:{}})}else await M.updateTxn(T.id,{kind:T.kind,category:T.category,amount:E,note:T.note.trim(),date:T.date});z(null),i()}},re=E=>{E.source==="expense"?y(E.rawId,E.category):k(E.id,E.category)},G=c.useMemo(()=>{const E={};return e.forEach(S=>{(E[S.date]=E[S.date]||[]).push(S)}),Object.entries(E).sort((S,ie)=>ie[0].localeCompare(S[0]))},[e]),le=E=>new Date(E+"T00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"});return t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:w.card,children:[t.jsx("div",{style:w.cardTitle,children:"Add income"}),t.jsxs("div",{style:w.cardSub,children:["Expenses are added from the ",t.jsx("b",{children:"Expenses"})," section and show up here automatically."]}),t.jsxs("div",{style:w.formGrid,children:[t.jsx("input",{type:"number",inputMode:"decimal",placeholder:"Amount",value:l,onChange:E=>d(E.target.value),onKeyDown:E=>E.key==="Enter"&&ae(),style:w.input,autoFocus:!0}),t.jsx(sr,{value:g,options:Tp,onChange:m}),t.jsx("input",{type:"date",value:f,max:yo,onChange:E=>h(E.target.value),style:w.input})]}),t.jsx("input",{placeholder:"Note (optional)",value:R,onChange:E=>B(E.target.value),onKeyDown:E=>E.key==="Enter"&&ae(),style:{...w.input,marginTop:8}}),t.jsxs("button",{onClick:ae,style:{...w.addBtn,background:li},children:[t.jsx(bt,{size:15})," Add income"]})]}),t.jsxs("div",{style:w.card,children:[t.jsxs("div",{style:w.cardTitleRow,children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(S0,{size:18,color:gd}),t.jsxs("div",{children:[t.jsx("div",{style:w.cardTitle,children:"Fixed items"}),t.jsx("div",{style:w.cardSub,children:"EMI, rent, SIP… auto-posted at the start of every billing cycle"})]})]}),t.jsxs("button",{onClick:ye,style:{...w.invAddBtn,background:gd},children:[t.jsx(bt,{size:14})," Add"]})]}),o.length===0?t.jsx("div",{style:w.muted,children:"No fixed items yet — add an EMI or rent to auto-post it every cycle."}):t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:o.map(E=>{var ie;const S=E.kind==="expense"?((ie=r.find(fe=>fe.id===E.category_id))==null?void 0:ie.name)||"Other":E.invest_kind||"Other";return t.jsxs("div",{style:{...w.invRow,opacity:E.active?1:.5},children:[t.jsx("span",{style:{...w.txnDot,background:E.kind==="expense"?kn:sn}}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:w.txnCat,children:E.name}),t.jsxs("div",{style:w.txnNote,children:[E.kind==="expense"?"Fixed expense":"Fixed investment"," · ",S]})]}),t.jsxs("span",{style:{...w.txnAmt,color:E.kind==="expense"?kn:sn},children:[s(E.amount),"/mo"]}),t.jsx("button",{onClick:()=>J(E),style:w.delBtn,title:E.active?"Pause":"Resume",children:E.active?t.jsx(Sh,{size:13}):t.jsx(tl,{size:13})}),t.jsx("button",{onClick:()=>X(E),style:w.delBtn,children:t.jsx(jt,{size:13})}),t.jsx("button",{onClick:()=>ce(E),style:w.delBtn,children:t.jsx(Fe,{size:14})})]},E.id)})})]}),t.jsxs("div",{style:w.card,children:[t.jsxs("div",{style:w.cardTitleRow,children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(Zi,{size:18,color:sn}),t.jsxs("div",{children:[t.jsx("div",{style:w.cardTitle,children:"Investments"}),t.jsx("div",{style:w.cardSub,children:"Asset generation — money you've set aside"})]})]}),t.jsxs("button",{onClick:I,style:w.invAddBtn,children:[t.jsx(bt,{size:14})," Add"]})]}),n.length===0?t.jsx("div",{style:w.muted,children:"No investments tracked yet."}):t.jsxs(t.Fragment,{children:[t.jsx("div",{style:w.healthStats,children:t.jsxs("div",{style:w.healthStat,children:[t.jsx("span",{style:w.healthStatV,children:s(P)}),t.jsx("span",{style:w.healthStatL,children:"Total invested"})]})}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,marginTop:4},children:n.map(E=>t.jsxs("div",{style:w.invRow,children:[t.jsx("span",{style:{...w.txnDot,background:sn}}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:w.txnCat,children:E.name}),t.jsxs("div",{style:w.txnNote,children:[E.kind," · ",E.date]})]}),t.jsx("div",{style:w.txnAmt,children:s(E.invested)}),t.jsx("button",{onClick:()=>$(E),style:w.delBtn,children:t.jsx(jt,{size:13})}),t.jsx("button",{onClick:()=>ue(E.id,E.name),style:w.delBtn,children:t.jsx(Fe,{size:14})})]},E.id))})]})]}),t.jsxs("div",{style:w.card,children:[t.jsx("div",{style:w.cardTitle,children:"History"}),G.length===0?t.jsx("div",{style:w.muted,children:"No transactions yet."}):t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:G.map(([E,S])=>t.jsxs("div",{children:[t.jsx("div",{style:w.dateHead,children:le(E)}),S.map(ie=>(T==null?void 0:T.id)===ie.id?t.jsxs("div",{style:w.editTxn,children:[t.jsxs("div",{style:w.formGrid,children:[t.jsx("input",{type:"number",inputMode:"decimal",value:T.amount,onChange:fe=>z({...T,amount:fe.target.value}),style:w.input}),t.jsx(sr,{value:T.category,options:Ne,onChange:fe=>z({...T,category:fe})}),t.jsx("input",{type:"date",value:T.date,max:yo,onChange:fe=>z({...T,date:fe.target.value}),style:w.input})]}),t.jsx("input",{placeholder:"Note (optional)",value:T.note,onChange:fe=>z({...T,note:fe.target.value}),onKeyDown:fe=>fe.key==="Enter"&&Q(),style:{...w.input,marginTop:8}}),t.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[t.jsxs("button",{onClick:()=>z(null),style:w.editCancel,children:[t.jsx(Fe,{size:14})," Cancel"]}),t.jsxs("button",{onClick:Q,style:{...w.addBtn,marginTop:0,flex:1,background:T.kind==="income"?li:kn},children:[t.jsx(He,{size:15})," Save"]})]})]},ie.id):t.jsxs("div",{style:w.txnRow,children:[t.jsx("span",{style:{...w.txnDot,background:Mg(ie.category)}}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:w.txnCat,children:ie.category}),ie.note&&t.jsx("div",{style:w.txnNote,children:ie.note})]}),t.jsxs("span",{style:{...w.txnAmt,color:ie.kind==="income"?li:kn},children:[ie.kind==="income"?"+":"−",s(ie.amount)]}),t.jsx("button",{onClick:()=>me(ie),style:w.delBtn,children:t.jsx(jt,{size:13})}),t.jsx("button",{onClick:()=>re(ie),style:w.delBtn,children:t.jsx(Fe,{size:14})})]},ie.id))]},E))})]}),b&&t.jsx("div",{style:w.overlay,onClick:()=>p(null),children:t.jsxs("div",{style:w.modal,onClick:E=>E.stopPropagation(),children:[t.jsxs("div",{style:w.modalHead,children:[t.jsx("span",{style:w.modalTitle,children:b.id?"Edit investment":"New investment"}),t.jsx("button",{onClick:()=>p(null),style:w.iconBtnPlain,children:t.jsx(Fe,{size:16})})]}),t.jsx("label",{style:w.label,children:"Name *"}),t.jsx("input",{autoFocus:!0,value:b.name,onChange:E=>p(S=>({...S,name:E.target.value})),placeholder:"e.g. Nifty Index Fund, HDFC FD…",style:w.input}),t.jsx("label",{style:w.label,children:"Type"}),t.jsx(sr,{value:b.kind,options:Ip,onChange:E=>p(S=>({...S,kind:E}))}),t.jsxs("div",{style:w.formGrid,children:[t.jsxs("div",{children:[t.jsx("label",{style:w.label,children:"Invested"}),t.jsx("input",{type:"number",inputMode:"decimal",value:b.invested,onChange:E=>p(S=>({...S,invested:E.target.value})),placeholder:"0",style:w.input})]}),t.jsxs("div",{children:[t.jsx("label",{style:w.label,children:"Current value"}),t.jsx("input",{type:"number",inputMode:"decimal",value:b.current_value,onChange:E=>p(S=>({...S,current_value:E.target.value})),placeholder:"0",style:w.input})]}),t.jsxs("div",{children:[t.jsx("label",{style:w.label,children:"Date"}),t.jsx("input",{type:"date",value:b.date,max:yo,onChange:E=>p(S=>({...S,date:E.target.value})),style:w.input})]})]}),t.jsx("label",{style:w.label,children:"Note (optional)"}),t.jsx("input",{value:b.note,onChange:E=>p(S=>({...S,note:E.target.value})),placeholder:"Folio no., broker, etc.",style:w.input}),t.jsxs("div",{style:w.modalActions,children:[t.jsx("button",{onClick:()=>p(null),style:w.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:H,disabled:!b.name.trim(),style:{...w.saveBtn,...b.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," ",b.id?"Save":"Add"]})]})]})}),u&&t.jsx("div",{style:w.overlay,onClick:()=>j(null),children:t.jsxs("div",{style:w.modal,onClick:E=>E.stopPropagation(),children:[t.jsxs("div",{style:w.modalHead,children:[t.jsx("span",{style:w.modalTitle,children:u.id?"Edit fixed item":"New fixed item"}),t.jsx("button",{onClick:()=>j(null),style:w.iconBtnPlain,children:t.jsx(Fe,{size:16})})]}),t.jsxs("div",{style:w.kindToggle,children:[t.jsxs("button",{onClick:()=>j(E=>({...E,kind:"expense"})),style:{...w.kindBtn,...u.kind==="expense"?{background:kn,color:"#fff",borderColor:kn}:{}},children:[t.jsx(uh,{size:15})," Expense"]}),t.jsxs("button",{onClick:()=>j(E=>({...E,kind:"investment"})),style:{...w.kindBtn,...u.kind==="investment"?{background:sn,color:"#fff",borderColor:sn}:{}},children:[t.jsx(Zi,{size:15})," Investment"]})]}),t.jsx("label",{style:w.label,children:"Name *"}),t.jsx("input",{autoFocus:!0,value:u.name,onChange:E=>j(S=>({...S,name:E.target.value})),placeholder:u.kind==="expense"?"e.g. Home loan EMI, Rent…":"e.g. Monthly SIP — Nifty Index",style:w.input}),t.jsxs("div",{style:w.formGrid,children:[t.jsxs("div",{children:[t.jsx("label",{style:w.label,children:"Amount / month"}),t.jsx("input",{type:"number",inputMode:"decimal",value:u.amount,onChange:E=>j(S=>({...S,amount:E.target.value})),placeholder:"0",style:w.input})]}),t.jsxs("div",{children:[t.jsx("label",{style:w.label,children:u.kind==="expense"?"Category":"Type"}),u.kind==="expense"?t.jsx(sr,{value:u.category_id,options:r.map(E=>({value:E.id,label:E.name})),onChange:E=>j(S=>({...S,category_id:E}))}):t.jsx(sr,{value:u.invest_kind,options:Ip,onChange:E=>j(S=>({...S,invest_kind:E}))})]})]}),t.jsx("label",{style:w.label,children:"Note (optional)"}),t.jsx("input",{value:u.note,onChange:E=>j(S=>({...S,note:E.target.value})),placeholder:"Loan account no., etc.",style:w.input}),t.jsx("p",{style:w.fixedHint,children:"Posts automatically at the start of every billing cycle (set in Settings → Currency). This one posts immediately for the current cycle when you save."}),t.jsxs("div",{style:w.modalActions,children:[t.jsx("button",{onClick:()=>j(null),style:w.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:Y,disabled:!u.name.trim()||!(parseFloat(u.amount)>0),style:{...w.saveBtn,background:gd,...!u.name.trim()||!(parseFloat(u.amount)>0)?{opacity:.5,cursor:"not-allowed"}:{}},children:[t.jsx(He,{size:15})," ",u.id?"Save":"Add"]})]})]})}),t.jsx(wr,{toasts:C,onUndo:D,onDismiss:x}),t.jsx(wr,{toasts:_,onUndo:Z,onDismiss:ne}),t.jsx(wr,{toasts:A,onUndo:K,onDismiss:oe})]})}function k1({money:e,cur:r}){return t.jsxs(t.Fragment,{children:[t.jsx(w1,{money:e,cur:r}),t.jsx(C1,{money:e,cur:r})]})}function wo({label:e,value:r,set:n,min:o,max:i,step:s,suffix:a}){return t.jsxs("div",{style:w.field,children:[t.jsxs("div",{style:w.fieldTop,children:[t.jsx("span",{style:w.fieldLabel,children:e}),t.jsxs("div",{style:w.fieldInputWrap,children:[t.jsx("input",{type:"number",value:r,onChange:l=>n(l.target.value),style:w.fieldInput}),a&&t.jsx("span",{style:w.fieldSuffix,children:a})]})]}),t.jsx("input",{type:"range",min:o,max:i,step:s,value:r,onChange:l=>n(l.target.value),style:w.range})]})}function w1({money:e,cur:r}){const[n,o]=c.useState(3e4),[i,s]=c.useState(12),[a,l]=c.useState(15),{invested:d,futureValue:g,gains:m,yearly:f}=c.useMemo(()=>{const R=Math.max(0,parseFloat(n)||0),B=Math.max(0,parseFloat(i)||0),T=Math.max(0,Math.min(60,parseInt(a)||0)),z=B/12/100,b=k=>k<=0?0:z===0?R*k:R*((Math.pow(1+z,k)-1)/z)*(1+z),p=[];for(let k=1;k<=T;k++)p.push({year:k,invested:R*12*k,value:b(k*12)});const u=b(T*12),j=R*12*T;return{invested:j,futureValue:u,gains:u-j,yearly:p}},[n,i,a]),h=Math.max(1,...f.map(R=>R.value));return t.jsxs("div",{style:w.card,children:[t.jsx("div",{style:w.cardTitleRow,children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(Ch,{size:18,color:"#3A7CA5"}),t.jsxs("div",{children:[t.jsx("div",{style:w.cardTitle,children:"SIP projection"}),t.jsx("div",{style:w.cardSub,children:"Mutual fund / SIP future value"})]})]})}),t.jsx(wo,{label:"Monthly investment",value:n,set:o,min:500,max:5e5,step:500,suffix:r.symbol}),t.jsx(wo,{label:"Expected return (p.a.)",value:i,set:s,min:1,max:30,step:.5,suffix:"%"}),t.jsx(wo,{label:"Time period",value:a,set:l,min:1,max:40,step:1,suffix:"yrs"}),t.jsxs("div",{style:w.resultHero,children:[t.jsx("div",{style:w.resultLabel,children:"Projected wealth"}),t.jsx("div",{style:{...w.resultVal,color:"#3A7CA5"},children:e(g)})]}),t.jsxs("div",{style:w.splitRow,children:[t.jsxs("div",{style:w.splitItem,children:[t.jsx("span",{style:w.splitV,children:e(d)}),t.jsx("span",{style:w.splitL,children:"Invested"})]}),t.jsxs("div",{style:w.splitItem,children:[t.jsx("span",{style:{...w.splitV,color:"#3E9E6B"},children:e(m)}),t.jsx("span",{style:w.splitL,children:"Est. returns"})]})]}),f.length>0&&t.jsxs("div",{style:w.chartWrap,children:[t.jsx("div",{style:w.chartBars,children:f.map(R=>t.jsx("div",{style:w.chartCol,title:`Year ${R.year}: ${e(R.value)}`,children:t.jsx("div",{style:{...w.chartStack,height:`${R.value/h*100}%`},children:t.jsx("div",{style:{...w.chartGain,height:`${(1-R.invested/R.value)*100}%`}})})},R.year))}),t.jsxs("div",{style:w.chartAxis,children:[t.jsx("span",{children:"Yr 1"}),t.jsxs("span",{style:{marginLeft:"auto"},children:["Yr ",f.length]})]}),t.jsxs("div",{style:w.legend,children:[t.jsxs("span",{style:w.legendItem,children:[t.jsx("span",{style:{...w.legendDot,background:"#9DBFD6"}})," Invested"]}),t.jsxs("span",{style:w.legendItem,children:[t.jsx("span",{style:{...w.legendDot,background:"#3E9E6B"}})," Returns"]})]})]})]})}function Rp(e,r,n,o=0,i=0){let s=Math.max(0,e-i),a=0,l=0,d=i;const g=1200;for(;s>.01&&l<g;){const m=s*r;let f=n+o,h=f-m;if(h<=0)return{months:1/0,totalInterest:1/0,totalPaid:1/0};h>s&&(h=s,f=s+m),s-=h,a+=m,d+=f,l++}return{months:l,totalInterest:a,totalPaid:d}}const Dp=e=>{if(!isFinite(e))return"—";const r=Math.floor(e/12),n=e%12;return(r?`${r}y `:"")+`${n}m`},S1=e=>{if(!isFinite(e))return"—";const r=new Date;return r.setMonth(r.getMonth()+e),r.toLocaleDateString("en-US",{month:"short",year:"numeric"})};function C1({money:e,cur:r}){const[n,o]=c.useState(2e6),[i,s]=c.useState(9),[a,l]=c.useState(20),[d,g]=c.useState(5e5),[m,f]=c.useState("once"),[h,R]=c.useState("tenure"),B=c.useMemo(()=>{const u=Math.max(0,parseFloat(n)||0),j=Math.max(0,parseFloat(i)||0)/12/100,k=Math.max(1,Math.round((parseFloat(a)||0)*12)),C=j===0?u/k:u*j*Math.pow(1+j,k)/(Math.pow(1+j,k)-1);return{P:u,i:j,n:k,emi:C,totalPay:C*k,totalInterest:C*k-u}},[n,i,a]),T=m==="monthly"?"tenure":h,z=c.useMemo(()=>{const{P:u,i:j,n:k,emi:C,totalInterest:D}=B,x=Math.max(0,parseFloat(d)||0);if(x<=0)return null;let y=C,_=k,Z=D,ne=B.totalPay;if(m==="once"&&T==="emi"){const ue=Math.max(0,u-x);y=j===0?ue/k:ue*j*Math.pow(1+j,k)/(Math.pow(1+j,k)-1),_=k,Z=y*k-ue,ne=x+y*k}else if(m==="once"){const ue=Rp(u,j,C,0,x);_=ue.months,Z=ue.totalInterest,ne=ue.totalPaid}else{const ue=Rp(u,j,C,x,0);_=ue.months,Z=ue.totalInterest,ne=ue.totalPaid}return{newEMI:y,newMonths:_,newInterest:Z,totalPaid:ne,interestSaved:Math.max(0,D-Z),monthsSaved:Math.max(0,k-(isFinite(_)?_:k))}},[B,d,m,T]),b=B.totalPay>0?B.P/B.totalPay*100:0,p=m==="once"?Math.max(1e5,Math.round(B.P)):Math.max(5e4,Math.round(B.emi*3));return t.jsxs("div",{style:w.card,children:[t.jsx("div",{style:w.cardTitleRow,children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(d0,{size:18,color:"#C2536B"}),t.jsxs("div",{children:[t.jsx("div",{style:w.cardTitle,children:"EMI calculator"}),t.jsx("div",{style:w.cardSub,children:"Loan / mortgage monthly payment"})]})]})}),t.jsx(wo,{label:"Loan amount",value:n,set:o,min:5e4,max:5e7,step:5e4,suffix:r.symbol}),t.jsx(wo,{label:"Interest rate (p.a.)",value:i,set:s,min:1,max:24,step:.1,suffix:"%"}),t.jsx(wo,{label:"Tenure",value:a,set:l,min:1,max:30,step:1,suffix:"yrs"}),t.jsxs("div",{style:w.resultHero,children:[t.jsx("div",{style:w.resultLabel,children:"Monthly EMI"}),t.jsx("div",{style:{...w.resultVal,color:"#C2536B"},children:e(B.emi)})]}),t.jsxs("div",{style:w.emiSplitTrack,children:[t.jsx("div",{style:{width:`${b}%`,background:"#5B7C99",height:"100%"}}),t.jsx("div",{style:{width:`${100-b}%`,background:"#C2536B",height:"100%"}})]}),t.jsxs("div",{style:w.splitRow,children:[t.jsxs("div",{style:w.splitItem,children:[t.jsx("span",{style:{...w.splitV,color:"#5B7C99"},children:e(B.P)}),t.jsx("span",{style:w.splitL,children:"Principal"})]}),t.jsxs("div",{style:w.splitItem,children:[t.jsx("span",{style:{...w.splitV,color:"#C2536B"},children:e(B.totalInterest)}),t.jsx("span",{style:w.splitL,children:"Total interest"})]}),t.jsxs("div",{style:w.splitItem,children:[t.jsx("span",{style:w.splitV,children:e(B.totalPay)}),t.jsx("span",{style:w.splitL,children:"Total payable"})]})]}),t.jsx("div",{style:w.subDivider}),t.jsx("div",{style:w.subTitle,children:"Prepayment planner"}),t.jsx("div",{style:w.cardSub,children:"See what an extra payment does to your loan."}),t.jsx("div",{style:{marginTop:14},children:t.jsx(wo,{label:"Prepayment amount",value:d,set:g,min:0,max:p,step:m==="once"?25e3:1e3,suffix:r.symbol})}),t.jsxs("div",{style:w.segGroup,children:[t.jsx("span",{style:w.segLbl,children:"Type"}),t.jsxs("div",{style:w.segRow,children:[t.jsx(la,{label:"One-time",on:m==="once",onClick:()=>f("once")}),t.jsx(la,{label:"Every month",on:m==="monthly",onClick:()=>f("monthly")})]})]}),t.jsxs("div",{style:w.segGroup,children:[t.jsx("span",{style:w.segLbl,children:"Strategy"}),t.jsxs("div",{style:w.segRow,children:[t.jsx(la,{label:"Reduce tenure",on:T==="tenure",onClick:()=>R("tenure")}),t.jsx(la,{label:"Reduce EMI",on:T==="emi",disabled:m==="monthly",onClick:()=>R("emi")})]})]}),m==="monthly"&&t.jsx("div",{style:w.note,children:"An extra monthly payment always shortens the tenure. Switch to a one-time prepayment to reduce your EMI instead."}),z?t.jsxs("div",{style:w.cmpCard,children:[t.jsxs("div",{style:w.cmpRow,children:[t.jsx("span",{style:w.cmpLbl,children:"New EMI"}),t.jsxs("span",{style:w.cmpVal,children:[e(z.newEMI),z.newEMI<B.emi-1&&t.jsxs("span",{style:w.cmpWas,children:[" was ",e(B.emi)]})]})]}),t.jsxs("div",{style:w.cmpRow,children:[t.jsx("span",{style:w.cmpLbl,children:"New tenure"}),t.jsxs("span",{style:w.cmpVal,children:[Dp(z.newMonths)," ",t.jsxs("span",{style:w.cmpWas,children:["· paid off ",S1(z.newMonths)]})]})]}),t.jsxs("div",{style:w.cmpRow,children:[t.jsx("span",{style:w.cmpLbl,children:"Total interest"}),t.jsx("span",{style:w.cmpVal,children:e(z.newInterest)})]}),t.jsxs("div",{style:w.cmpRow,children:[t.jsx("span",{style:w.cmpLbl,children:"Total payable"}),t.jsx("span",{style:w.cmpVal,children:e(z.totalPaid)})]}),t.jsxs("div",{style:w.saveRow,children:["You save ",e(z.interestSaved)," in interest",z.monthsSaved>0?` · ${Dp(z.monthsSaved)} sooner`:""]})]}):t.jsx("div",{style:w.muted,children:"Enter a prepayment amount to see the impact."})]})}function la({label:e,on:r,onClick:n,disabled:o}){return t.jsx("button",{onClick:o?void 0:n,disabled:o,style:{...w.seg,...r?w.segOn:{},...o?w.segDisabled:{}},children:e})}const w={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:760,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},tabs:{display:"flex",gap:7,marginBottom:18,flexWrap:"wrap"},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 14px",borderRadius:10,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},presetRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:14},preset:{border:"1px solid var(--border)",background:"var(--surface)",padding:"6px 12px",borderRadius:18,fontSize:12,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},presetOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},sumGrid:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:16},sumCard:{background:"var(--surface)",borderRadius:14,padding:"14px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},sumCardWide:{display:"flex",alignItems:"center",justifyContent:"center",gap:14,padding:"16px 14px"},sumIcon:{width:30,height:30,borderRadius:9,display:"grid",placeItems:"center",marginBottom:8},sumIconWide:{width:48,height:48,borderRadius:12,display:"grid",placeItems:"center",flexShrink:0},sumWideText:{textAlign:"center"},sumLabel:{fontSize:11.5,color:"var(--text-3)",fontWeight:600},sumVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:2,letterSpacing:"-0.01em",wordBreak:"break-word"},sumSub:{fontSize:10.5,color:"var(--text-3)",fontWeight:600,marginTop:3},card:{background:"var(--surface)",borderRadius:16,padding:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)",marginBottom:16},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14,gap:10},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardSub:{fontSize:11.5,color:"var(--text-3)",marginTop:2},cardTotal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"14px 0"},twoCol:{display:"grid",gridTemplateColumns:"1fr",gap:0},dot:{width:10,height:10,borderRadius:3,flexShrink:0},pieWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap"},pieChart:{position:"relative",width:132,height:132,flexShrink:0,margin:"0 auto"},pieSvg:{position:"absolute",inset:0,width:"100%",height:"100%",overflow:"visible"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:80,height:80,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",transition:"transform 0.15s, box-shadow 0.15s",pointerEvents:"none",textAlign:"center",padding:4,boxSizing:"border-box"},pieHoleVal:{fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:160,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:8,borderRadius:8,padding:"3px 5px",margin:"-3px -5px",cursor:"default",transition:"background 0.15s"},legendRowOn:{background:"var(--surface-2)"},legendName:{flex:1,fontSize:12.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},legendPct:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,width:34,textAlign:"right"},legendAmt:{fontSize:12.5,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:64,textAlign:"right"},investNote:{display:"flex",alignItems:"center",gap:6,fontSize:11.5,color:"var(--text-3)",marginBottom:14,marginTop:-4},healthScore:{fontSize:32,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1},healthStatus:{fontSize:12.5,fontWeight:700,marginTop:2},gaugeTrack:{height:10,background:"var(--surface-2)",borderRadius:6,overflow:"hidden",marginBottom:14},gaugeFill:{height:"100%",borderRadius:6,transition:"width 0.4s"},healthStats:{display:"flex",gap:24,marginBottom:12},healthStat:{display:"flex",flexDirection:"column"},healthStatV:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},healthStatL:{fontSize:11,color:"var(--text-3)",fontWeight:600},forecastWrap:{marginTop:4,paddingTop:14,borderTop:"1px solid var(--border)"},forecastHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:10,flexWrap:"wrap",marginBottom:14},forecastInputs:{display:"flex",gap:8,flexWrap:"wrap"},forecastTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},rateWrap:{display:"inline-flex",alignItems:"center",gap:4,border:"1px solid var(--border)",borderRadius:9,padding:"5px 10px",background:"var(--surface-2)"},rateInput:{border:"none",background:"none",outline:"none",width:52,fontSize:14,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)",textAlign:"right"},rateUnit:{fontSize:11.5,color:"var(--text-3)",fontWeight:600},forecastBarsWrap:{overflowX:"auto",paddingBottom:4},forecastBars:{display:"flex",alignItems:"stretch",gap:8,minWidth:"min-content"},fBarCol:{flex:"0 0 40px",display:"flex",flexDirection:"column",alignItems:"center",gap:4,minWidth:0},fBarVal:{fontSize:10.5,fontWeight:700,color:"var(--text-2)",whiteSpace:"nowrap"},fBarTrack:{width:"100%",maxWidth:44,height:110,display:"flex",alignItems:"flex-end"},fBar:{width:"100%",background:"#3A7CA5",borderRadius:"6px 6px 2px 2px",transition:"height 0.35s ease"},fBarLbl:{fontSize:10.5,fontWeight:700,color:"var(--text-3)"},forecastNote:{fontSize:11.5,color:"var(--text-3)",marginTop:12,textAlign:"center"},tip:{fontSize:12.5,lineHeight:1.5,padding:"10px 12px",borderRadius:10,border:"1px solid",fontWeight:500},kindToggle:{display:"flex",gap:8,marginBottom:12},kindBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},formGrid:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8},input:{border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},addBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",marginTop:10,border:"none",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},invAddBtn:{display:"flex",alignItems:"center",gap:5,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"7px 13px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",flexShrink:0},invRow:{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid var(--border)"},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtnPlain:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},fixedHint:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.5,marginTop:10,marginBottom:0},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},dateHead:{fontSize:11,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8},txnRow:{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid var(--border)"},txnDot:{width:9,height:9,borderRadius:"50%",flexShrink:0},txnCat:{fontSize:13.5,fontWeight:600},txnNote:{fontSize:11.5,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},txnAmt:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap"},delBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",flexShrink:0},editTxn:{background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:12,padding:12,margin:"6px 0"},editCancel:{display:"flex",alignItems:"center",justifyContent:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},field:{marginBottom:16},fieldTop:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},fieldLabel:{fontSize:13,fontWeight:600,color:"var(--text-2)"},fieldInputWrap:{display:"flex",alignItems:"center",gap:4,border:"1px solid var(--border)",borderRadius:8,padding:"5px 10px",background:"var(--surface-2)"},fieldInput:{border:"none",background:"none",outline:"none",width:90,fontSize:14,fontWeight:700,fontFamily:"inherit",color:"var(--text)",textAlign:"right"},fieldSuffix:{fontSize:12,color:"var(--text-3)",fontWeight:600},range:{width:"100%",accentColor:"var(--accent)",cursor:"pointer"},resultHero:{textAlign:"center",padding:"14px 0 6px"},resultLabel:{fontSize:12,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em"},resultVal:{fontSize:34,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",letterSpacing:"-0.02em",marginTop:2,wordBreak:"break-word"},splitRow:{display:"flex",gap:10,marginTop:10},splitItem:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",background:"var(--surface-2)",borderRadius:10,padding:"10px 6px"},splitV:{fontSize:14.5,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",wordBreak:"break-word"},splitL:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginTop:2},chartWrap:{marginTop:18},chartBars:{display:"flex",alignItems:"flex-end",gap:3,height:90},chartCol:{flex:1,height:"100%",display:"flex",alignItems:"flex-end"},chartStack:{width:"100%",background:"#9DBFD6",borderRadius:"3px 3px 0 0",minHeight:2,position:"relative",display:"flex",flexDirection:"column",justifyContent:"flex-start"},chartGain:{width:"100%",background:"#3E9E6B",borderRadius:"3px 3px 0 0"},chartAxis:{display:"flex",fontSize:10,color:"var(--text-3)",fontWeight:600,marginTop:6},legend:{display:"flex",gap:16,justifyContent:"center",marginTop:10},legendItem:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)",fontWeight:600},legendDot:{width:10,height:10,borderRadius:3},emiSplitTrack:{display:"flex",height:12,borderRadius:6,overflow:"hidden",marginTop:16,border:"1px solid var(--border)"},subDivider:{height:1,background:"var(--border)",margin:"20px 0 14px"},subTitle:{fontSize:15,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},segGroup:{marginBottom:12},segLbl:{fontSize:12,fontWeight:600,color:"var(--text-3)",display:"block",marginBottom:6},segRow:{display:"flex",gap:8},seg:{flex:1,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},segOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},segDisabled:{opacity:.4,cursor:"not-allowed"},note:{fontSize:12,lineHeight:1.5,color:"var(--text-3)",background:"var(--surface-2)",borderRadius:9,padding:"9px 11px",marginBottom:12},cmpCard:{background:"var(--surface-2)",borderRadius:12,padding:"12px 14px",marginTop:4},cmpRow:{display:"flex",justifyContent:"space-between",alignItems:"baseline",padding:"6px 0",borderBottom:"1px solid var(--border)",gap:10},cmpLbl:{fontSize:12.5,color:"var(--text-2)",fontWeight:600},cmpVal:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",textAlign:"right"},cmpWas:{fontSize:11,color:"var(--text-3)",fontWeight:500,fontFamily:"'Inter',system-ui,sans-serif"},saveRow:{marginTop:12,background:"rgba(62,158,107,0.12)",color:"#3E9E6B",borderRadius:9,padding:"10px 12px",fontSize:13,fontWeight:700,textAlign:"center"}},wc=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],ud={Monday:"Mon",Tuesday:"Tue",Wednesday:"Wed",Thursday:"Thu",Friday:"Fri",Saturday:"Sat",Sunday:"Sun"},Pi=()=>wc[(new Date().getDay()+6)%7],fn={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"},Ap=Object.keys(fn),pd=21,Ep="kickstart_tags",z1=e=>{if(!e)return"";const r=e.trim();if(/^[A-Za-z0-9_-]{11}$/.test(r))return r;const n=r.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return n?n[1]:""},T1=e=>{if(!e)return"";const r=e.trim().match(/instagram\.com\/(?:reels?|p|tv)\/([A-Za-z0-9_-]+)/);return r?r[1]:""},Fp=e=>{const r=T1(e);if(r)return{platform:"instagram",id:r};const n=z1(e);return n?{platform:"youtube",id:n}:null},Wp=e=>{if(!e||!String(e).trim())return null;const r=String(e).split(":").map(n=>parseInt(n.trim(),10));return r.some(n=>isNaN(n)||n<0)?null:r.reduce((n,o)=>n*60+o,0)},da=e=>{if(e==null)return"";const r=Math.max(0,e|0);return`${Math.floor(r/60)}:${String(r%60).padStart(2,"0")}`},I1=e=>e.platform==="instagram"?`https://www.instagram.com/p/${e.youtube_id}/embed/`:`https://www.youtube.com/embed/${e.youtube_id}?start=${e.start_sec||0}`+(e.end_sec?`&end=${e.end_sec}`:"")+"&autoplay=1&rel=0",B1=()=>({id:null,url:"",title:"",start:"",end:"",days:[Pi()],pillars:[],customs:[]});function R1(){const[e,r]=c.useState([]),[n,o]=c.useState([]),[i,s]=c.useState(!1),[a,l]=c.useState({type:"day",value:Pi()}),[d,g]=c.useState(null),[m,f]=c.useState(null),[h,R]=c.useState(""),B=c.useCallback(async()=>{try{const[A,K]=await Promise.all([M.getKickstart(),M.getSetting(Ep)]);r(A),o(Array.isArray(K==null?void 0:K.value)?K.value:[])}catch{}s(!0)},[]);c.useEffect(()=>{B()},[B]);const{deleteItem:T,toasts:z,handleUndo:b,handleDismiss:p}=kr(M.deleteKickstart,M.restoreKickstart,B);c.useEffect(()=>{if(!m)return;const A=e.find(Y=>Y.id===m);if(!A)return;const K=A.end_sec?Math.max(1,A.end_sec-(A.start_sec||0)):1/0;let oe=0;const ye=10,X=setInterval(()=>{if(document.hidden)return;const Y=K-oe;if(Y<=0){clearInterval(X);return}const ce=Math.min(ye,Y);oe+=ce,M.addScreenTime("kickstart",Math.round(ce)).catch(()=>{})},ye*1e3);return()=>clearInterval(X)},[m,e]);const u=A=>{o(A),M.setSetting(Ep,A).catch(()=>{})},j=()=>{const A=h.trim();!A||n.length>=pd||n.includes(A)||(u([...n,A]),g(K=>K&&!K.customs.includes(A)?{...K,customs:[...K.customs,A]}:K),R(""))},k=A=>u(n.filter(K=>K!==A)),C=(A,K)=>g(oe=>({...oe,[A]:oe[A].includes(K)?oe[A].filter(ye=>ye!==K):[...oe[A],K]})),D=A=>g({id:A.id,url:A.platform==="instagram"?`https://www.instagram.com/reel/${A.youtube_id}/`:`https://youtu.be/${A.youtube_id}`,title:A.title,start:da(A.start_sec),end:A.end_sec?da(A.end_sec):"",days:[...A.days],pillars:[...A.pillars],customs:[...A.customs]}),x=async()=>{const A=Fp(d.url);if(!A||d.days.length===0||!d.title.trim())return;const K=A.platform==="instagram",oe={youtube_id:A.id,platform:A.platform,title:d.title.trim(),start_sec:K?0:Wp(d.start)||0,end_sec:K?null:Wp(d.end),days:d.days,pillars:d.pillars,customs:d.customs};d.id?await M.updateKickstart(d.id,oe):await M.createKickstart(oe),g(null),B()},y=c.useMemo(()=>e.filter(A=>a.type==="all"?!0:a.type==="day"?A.days.includes(a.value):a.type==="pillar"?A.pillars.includes(a.value):a.type==="custom"?A.customs.includes(a.value):!0),[e,a]),_=(A,K)=>a.type===A&&a.value===K,Z=d?Fp(d.url):null,ne=d?[!Z&&"a valid YouTube or Instagram link",!d.title.trim()&&"a title",d.days.length===0&&"at least one day"].filter(Boolean):[],ue=!!d&&ne.length===0;return t.jsxs("div",{style:Re.page,children:[t.jsxs("div",{style:Re.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:Re.eyebrow,children:"Anvil · Kickstart"}),t.jsx("h1",{style:Re.h1,children:"Kickstart"}),t.jsxs("div",{style:Re.subhead,children:["Your motivation hub — the right push for ",Pi(),"."]})]}),!d&&t.jsxs("button",{onClick:()=>g(B1()),style:Re.addBtn,children:[t.jsx(bt,{size:15})," Add video"]})]}),d&&t.jsxs("div",{style:Re.card,children:[t.jsx("div",{style:Re.cardTitle,children:d.id?"Edit video":"Add video"}),t.jsx("input",{placeholder:"YouTube or Instagram link",value:d.url,onChange:A=>g({...d,url:A.target.value}),style:Re.input,autoFocus:!0}),d.url&&!Z&&t.jsx("div",{style:Re.warn,children:"Couldn't find a YouTube or Instagram video in that link."}),Z&&t.jsx("div",{style:Re.platformRow,children:Z.platform==="instagram"?t.jsxs(t.Fragment,{children:[t.jsx(Yu,{size:13,color:"#C2536B"})," Instagram reel detected"]}):t.jsxs(t.Fragment,{children:[t.jsx(Fh,{size:13,color:"#C2536B"})," YouTube video detected"]})}),t.jsx("input",{placeholder:"Title (required)",value:d.title,onChange:A=>g({...d,title:A.target.value}),style:{...Re.input,marginTop:8}}),(Z==null?void 0:Z.platform)==="instagram"?t.jsx("div",{style:Re.hint,children:"Instagram clips always play in full — trimming isn't supported by Instagram embeds."}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:Re.trimRow,children:[t.jsx(Th,{size:15,color:"var(--text-3)"}),t.jsxs("label",{style:Re.trimField,children:[t.jsx("span",{style:Re.trimLbl,children:"Start"}),t.jsx("input",{placeholder:"0:30",value:d.start,onChange:A=>g({...d,start:A.target.value}),style:Re.trimInput})]}),t.jsx("span",{style:Re.trimArrow,children:"→"}),t.jsxs("label",{style:Re.trimField,children:[t.jsx("span",{style:Re.trimLbl,children:"End"}),t.jsx("input",{placeholder:"end (optional)",value:d.end,onChange:A=>g({...d,end:A.target.value}),style:Re.trimInput})]})]}),t.jsx("div",{style:Re.hint,children:"Only this trimmed part plays. Use m:ss (e.g. 1:30). Leave End blank to play to the end."})]}),t.jsxs("div",{style:Re.tagBlock,children:[t.jsxs("div",{style:Re.tagLabel,children:["Days ",t.jsx("span",{style:Re.req,children:"required"})]}),t.jsx("div",{style:Re.chipRow,children:wc.map(A=>t.jsx("button",{onClick:()=>C("days",A),style:{...Re.chip,...d.days.includes(A)?Re.chipOnDark:{}},children:ud[A]},A))})]}),t.jsxs("div",{style:Re.tagBlock,children:[t.jsxs("div",{style:Re.tagLabel,children:["Pillars ",t.jsx("span",{style:Re.opt,children:"optional"})]}),t.jsx("div",{style:Re.chipRow,children:Ap.map(A=>{const K=d.pillars.includes(A);return t.jsxs("button",{onClick:()=>C("pillars",A),style:{...Re.chip,...K?{background:fn[A],color:"#fff",borderColor:fn[A]}:{}},children:[t.jsx("span",{style:{...Re.dot,background:K?"#fff":fn[A]}}),A]},A)})})]}),t.jsxs("div",{style:Re.tagBlock,children:[t.jsxs("div",{style:Re.tagLabel,children:["Custom tags ",t.jsxs("span",{style:Re.opt,children:["optional · ",n.length,"/",pd]})]}),t.jsxs("div",{style:Re.chipRow,children:[n.map(A=>t.jsxs("span",{style:{...Re.chip,...d.customs.includes(A)?Re.chipOnAccent:{},paddingRight:4},children:[t.jsx("button",{onClick:()=>C("customs",A),style:Re.chipInner,children:A}),t.jsx("button",{onClick:()=>k(A),style:Re.chipX,title:"Delete tag",children:t.jsx(Fe,{size:11})})]},A)),n.length===0&&t.jsx("span",{style:Re.muted,children:"No custom tags yet."})]}),n.length<pd&&t.jsxs("div",{style:Re.newTagRow,children:[t.jsx("input",{placeholder:"New custom tag…",value:h,onChange:A=>R(A.target.value),onKeyDown:A=>A.key==="Enter"&&j(),style:{...Re.input,padding:"7px 10px"}}),t.jsx("button",{onClick:j,style:Re.smallBtn,children:t.jsx(bt,{size:14})})]})]}),!ue&&t.jsxs("div",{style:Re.warn,children:["Add ",ne.join(", ")," to save."]}),t.jsxs("div",{style:Re.formActions,children:[t.jsxs("button",{onClick:()=>g(null),style:Re.cancelBtn,children:[t.jsx(Fe,{size:14})," Cancel"]}),t.jsxs("button",{onClick:x,disabled:!ue,style:{...Re.saveBtn,...ue?{}:Re.saveDisabled},children:[t.jsx(He,{size:15})," ",d.id?"Save":"Add video"]})]})]}),t.jsxs("div",{style:Re.filterCard,children:[t.jsx("button",{onClick:()=>l({type:"all"}),style:{...Re.fChip,...a.type==="all"?Re.fChipOnDark:{}},children:"All"}),t.jsx("span",{style:Re.fDivider}),wc.map(A=>t.jsxs("button",{onClick:()=>l({type:"day",value:A}),style:{...Re.fChip,..._("day",A)?Re.fChipOnDark:{},...A===Pi()?Re.fToday:{}},children:[ud[A],A===Pi()?" ·":""]},A)),t.jsx("span",{style:Re.fDivider}),Ap.map(A=>t.jsxs("button",{onClick:()=>l({type:"pillar",value:A}),style:{...Re.fChip,..._("pillar",A)?{background:fn[A],color:"#fff",borderColor:fn[A]}:{}},children:[t.jsx("span",{style:{...Re.dot,background:_("pillar",A)?"#fff":fn[A]}}),A]},A)),n.length>0&&t.jsx("span",{style:Re.fDivider}),n.map(A=>t.jsxs("button",{onClick:()=>l({type:"custom",value:A}),style:{...Re.fChip,..._("custom",A)?Re.fChipOnAccent:{}},children:[t.jsx(No,{size:11})," ",A]},A))]}),i?y.length===0?t.jsx("div",{style:Re.empty,children:e.length===0?"No videos yet — add your first motivation clip.":"No videos for this tag."}):t.jsx("div",{style:Re.grid,children:y.map(A=>t.jsxs("div",{style:Re.videoCard,children:[t.jsx("div",{style:{...Re.thumbWrap,...A.platform==="instagram"&&m===A.id?Re.thumbWrapInsta:{}},children:m===A.id?t.jsx("iframe",{src:I1(A),title:A.title||A.youtube_id,style:Re.iframe,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):A.platform==="instagram"?t.jsxs("button",{onClick:()=>f(A.id),style:{...Re.thumbBtn,...Re.instaThumb},children:[t.jsx(Yu,{size:34,color:"#fff"}),t.jsx("span",{style:Re.instaLabel,children:"Instagram reel"}),t.jsx("span",{style:Re.playOverlay,children:t.jsx(tl,{size:22,color:"#fff",fill:"#fff"})})]}):t.jsxs("button",{onClick:()=>f(A.id),style:Re.thumbBtn,children:[t.jsx("img",{src:`https://img.youtube.com/vi/${A.youtube_id}/hqdefault.jpg`,alt:"",style:Re.thumb}),t.jsx("span",{style:Re.playOverlay,children:t.jsx(tl,{size:22,color:"#fff",fill:"#fff"})}),t.jsxs("span",{style:Re.trimBadge,children:[da(A.start_sec),A.end_sec?` – ${da(A.end_sec)}`:"+"]})]})}),t.jsxs("div",{style:Re.videoBody,children:[t.jsx("div",{style:Re.videoTitle,children:A.title||"Untitled clip"}),t.jsxs("div",{style:Re.tagWrap,children:[A.days.map(K=>t.jsx("span",{style:Re.dayTag,children:ud[K]},K)),A.pillars.map(K=>t.jsx("span",{style:{...Re.pillTag,color:fn[K]||"var(--text-2)",borderColor:fn[K]||"var(--border)"},children:K},K)),A.customs.map(K=>t.jsx("span",{style:Re.customTag,children:K},K))]}),t.jsxs("div",{style:Re.cardActions,children:[t.jsx("button",{onClick:()=>D(A),style:Re.iconBtn,title:"Edit",children:t.jsx(jt,{size:13})}),t.jsx("button",{onClick:()=>T(A.id,A.title||"video"),style:Re.iconBtn,title:"Delete",children:t.jsx(Fe,{size:14})})]})]})]},A.id))}):t.jsx("div",{style:Re.muted,children:"Loading…"}),t.jsx(wr,{toasts:z,onUndo:b,onDismiss:p})]})}const Re={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:1e3,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},input:{border:"1px solid var(--border)",borderRadius:8,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},warn:{fontSize:11.5,color:"#C2773B",marginTop:5,fontWeight:600},hint:{fontSize:11.5,color:"var(--text-3)",marginTop:6,lineHeight:1.4},platformRow:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,color:"var(--text-2)",fontWeight:600,marginTop:5},trimRow:{display:"flex",alignItems:"flex-end",gap:10,marginTop:10},trimField:{display:"flex",flexDirection:"column",gap:4,flex:1},trimLbl:{fontSize:11,color:"var(--text-2)",fontWeight:600},trimInput:{border:"1px solid var(--border)",borderRadius:8,padding:"8px 10px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",width:"100%",boxSizing:"border-box"},trimArrow:{color:"var(--text-3)",paddingBottom:9},tagBlock:{marginTop:14},tagLabel:{fontSize:12,fontWeight:700,color:"var(--text-2)",marginBottom:7},req:{fontSize:10,fontWeight:700,color:"#C2536B",textTransform:"uppercase",marginLeft:6},opt:{fontSize:10,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",marginLeft:6},chipRow:{display:"flex",gap:6,flexWrap:"wrap"},chip:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},chipOnDark:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},chipOnAccent:{background:"var(--accent)",color:"#fff",borderColor:"var(--accent)"},chipInner:{border:"none",background:"none",color:"inherit",cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:600,padding:0},chipX:{border:"none",background:"rgba(0,0,0,0.12)",color:"inherit",cursor:"pointer",display:"grid",placeItems:"center",borderRadius:"50%",width:16,height:16,padding:0},newTagRow:{display:"flex",gap:6,marginTop:8,maxWidth:280},smallBtn:{border:"none",background:"var(--accent)",color:"#fff",width:34,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},dot:{width:8,height:8,borderRadius:"50%",flexShrink:0,display:"inline-block"},formActions:{display:"flex",gap:8,marginTop:16},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:"var(--accent)",color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"},filterCard:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:12,marginBottom:18},fChip:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},fChipOnDark:{background:"var(--accent-strong)",color:"#fff",borderColor:"var(--accent-strong)"},fChipOnAccent:{background:"var(--accent)",color:"#fff",borderColor:"var(--accent)"},fToday:{borderColor:"var(--accent)",borderWidth:2},fDivider:{width:1,alignSelf:"stretch",background:"var(--border)",margin:"0 2px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:14},videoCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},thumbWrap:{position:"relative",width:"100%",aspectRatio:"16 / 9",background:"#000"},thumbWrapInsta:{aspectRatio:"9 / 14"},thumbBtn:{border:"none",padding:0,margin:0,cursor:"pointer",width:"100%",height:"100%",position:"relative",display:"block",background:"#000"},instaThumb:{background:"linear-gradient(135deg, #833AB4, #E1306C 55%, #F77737)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:6},instaLabel:{color:"rgba(255,255,255,0.9)",fontSize:12,fontWeight:700,letterSpacing:"0.04em"},thumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},playOverlay:{position:"absolute",inset:0,display:"grid",placeItems:"center",background:"rgba(0,0,0,0.28)"},trimBadge:{position:"absolute",bottom:8,right:8,background:"rgba(0,0,0,0.75)",color:"#fff",fontSize:11,fontWeight:700,padding:"2px 7px",borderRadius:6,fontFamily:"'Fraunces',Georgia,serif"},iframe:{width:"100%",height:"100%",border:"none",display:"block"},videoBody:{padding:"12px 13px",display:"flex",flexDirection:"column",gap:8},videoTitle:{fontSize:14,fontWeight:700},tagWrap:{display:"flex",gap:5,flexWrap:"wrap"},dayTag:{fontSize:10,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",padding:"2px 7px",borderRadius:8},pillTag:{fontSize:10,fontWeight:700,border:"1px solid",borderRadius:8,padding:"2px 7px"},customTag:{fontSize:10,fontWeight:700,color:"var(--accent)",background:"color-mix(in srgb, var(--accent) 14%, transparent)",padding:"2px 7px",borderRadius:8},cardActions:{display:"flex",gap:4,justifyContent:"flex-end"},iconBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"}},Kh=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,Mp=()=>Kh(new Date),Lp=(e,r)=>{const n=new Date(e+"T00:00:00");return n.setDate(n.getDate()+r),Kh(n)},_p=e=>new Date(e+"T00:00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",year:"numeric"}),D1=e=>{if(!e)return"";const r=e.trim();if(/^[A-Za-z0-9_-]{11}$/.test(r))return r;const n=r.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return n?n[1]:""},A1=e=>new Promise((r,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:a,height:l}=i;a>l&&a>900?(l=l*900/a,a=900):l>900&&(a=a*900/l,l=900);const d=document.createElement("canvas");d.width=a,d.height=l,d.getContext("2d").drawImage(i,0,0,a,l),r(d.toDataURL("image/jpeg",.82))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(e)});function E1(){const[e,r]=c.useState([]),[n,o]=c.useState(!1),[i,s]=c.useState(null),[a,l]=c.useState(!1),[d,g]=c.useState({title:"",image:""}),[m,f]=c.useState(""),[h,R]=c.useState(!1),[B,T]=c.useState(null),z=c.useCallback(async()=>{try{r(await M.getGoldenGoals())}catch{}o(!0)},[]);c.useEffect(()=>{z()},[z]);const{deleteItem:b,toasts:p,handleUndo:u,handleDismiss:j}=kr(M.deleteGolden,M.restoreGolden,z);c.useEffect(()=>{const y=()=>M.getSetting("golden_music").then(_=>f(D1((_==null?void 0:_.value)||""))).catch(()=>{});return y(),window.addEventListener("focus",y),()=>window.removeEventListener("focus",y)},[]);const k=async()=>{if(!d.title.trim())return;const y=await M.createGolden({title:d.title.trim(),image:d.image});g({title:"",image:""}),l(!1),await z(),s(y.id)},C=async(y,_)=>{var ne;const Z=(ne=y.target.files)==null?void 0:ne[0];if(Z)try{_(await A1(Z))}catch{}},D=e.filter(y=>!y.achieved),x=e.filter(y=>y.achieved);return i?t.jsxs("div",{style:se.page,children:[t.jsx($1,{musicId:m,on:h}),t.jsx(L1,{goalId:i,onBack:()=>s(null),onReload:z,onCelebrate:(y,_)=>T({title:y,days:_}),pickImage:C,musicId:m,setMusicId:f,musicOn:h,setMusicOn:R}),B&&t.jsx(_1,{data:B,onClose:()=>T(null)})]}):t.jsxs("div",{style:se.page,children:[t.jsxs("div",{style:se.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:se.eyebrow,children:"Anvil · Golden Book"}),t.jsx("h1",{style:se.h1,children:"Golden Book"}),t.jsx("div",{style:se.subhead,children:"Write your dreams into being — a little every day."})]}),!a&&t.jsxs("button",{onClick:()=>l(!0),style:se.addBtn,children:[t.jsx(bt,{size:15})," New dream"]})]}),a&&t.jsxs("div",{style:se.card,children:[t.jsx("div",{style:se.cardTitle,children:"Manifest a new dream"}),t.jsx("textarea",{autoFocus:!0,placeholder:"Write your dream as if it's already true…",value:d.title,onChange:y=>g({...d,title:y.target.value}),style:se.textarea}),t.jsxs("label",{style:se.photoPick,children:[d.image?t.jsx("img",{src:d.image,alt:"",style:se.photoPreview}):t.jsxs("span",{style:se.photoEmpty,children:[t.jsx(wl,{size:18})," Add a photo"]}),t.jsx("input",{type:"file",accept:"image/*",onChange:y=>C(y,_=>g({...d,image:_})),style:{display:"none"}})]}),t.jsxs("div",{style:se.formActions,children:[t.jsxs("button",{onClick:()=>{l(!1),g({title:"",image:""})},style:se.cancelBtn,children:[t.jsx(Fe,{size:14})," Cancel"]}),t.jsxs("button",{onClick:k,disabled:!d.title.trim(),style:{...se.saveBtn,...d.title.trim()?{}:se.saveDisabled},children:[t.jsx(He,{size:15})," Create"]})]})]}),n?t.jsxs(t.Fragment,{children:[D.length===0&&x.length===0&&!a&&t.jsx("div",{style:se.empty,children:"No dreams yet. Add your first one and revisit it daily."}),D.length>0&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:se.sectionTitle,children:[t.jsx(Eo,{size:15,color:"#C9A227"})," Manifesting ",t.jsx("span",{style:se.badge,children:D.length})]}),t.jsx("div",{style:se.grid,children:D.map(y=>t.jsx(Np,{g:y,onOpen:()=>s(y.id),onDelete:()=>b(y.id,y.title)},y.id))})]}),x.length>0&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{...se.sectionTitle,marginTop:22},children:[t.jsx(Jr,{size:15,color:"#4C9A6B"})," Manifested ",t.jsx("span",{style:se.badge,children:x.length})]}),t.jsx("div",{style:se.grid,children:x.map(y=>t.jsx(Np,{g:y,onOpen:()=>s(y.id),onDelete:()=>b(y.id,y.title),achieved:!0},y.id))})]})]}):t.jsx("div",{style:se.muted,children:"Loading…"}),t.jsx(wr,{toasts:p,onUndo:u,onDismiss:j})]})}const Sc=[{key:"morning",label:"Morning",time:"6 AM – 12 PM",Icon:Dh,color:"#E0883B"},{key:"noon",label:"Noon",time:"12 – 6 PM",Icon:I0,color:"#C9A227"},{key:"night",label:"Night",time:"6 PM – 2 AM",Icon:m0,color:"#6B6FB0"}],$p=e=>{if(e<31)return`${e} day${e===1?"":"s"}`;const r=Math.floor(e/365),n=Math.floor(e%365/30),o=e%365%30,i=[];return r&&i.push(`${r}y`),n&&i.push(`${n}mo`),o&&i.push(`${o}d`),i.join(" ")},Pp="tesla369_reminders";function F1({g:e,onChanged:r,musicId:n,setMusicId:o,musicOn:i,setMusicOn:s}){const[a,l]=c.useState(""),[d,g]=c.useState(!1),[m,f]=c.useState(!1),[h,R]=c.useState(()=>localStorage.getItem(Pp)==="1"),B=e.t369,T=(e.t369_affirmation||"").trim();if(M1(h&&!!T,B,e.title),!B)return null;const{window:z,targets:b,counts:p,current_streak:u,best_streak:j,min_streak:k,min_reached:C,day_complete:D}=B,x=(p.morning||0)+(p.noon||0)+(p.night||0),y=b.morning+b.noon+b.night,_=async()=>{if(T&&a.trim()===T&&z){f(!0);try{r(await M.logTesla369(e.id)),l("")}catch(K){alert(K.message||"Could not log this write.")}finally{f(!1)}}},Z=async()=>{f(!0);try{r(await M.undoTesla369(e.id))}catch{}finally{f(!1)}},ne=async()=>{if(!h&&!await W1()){alert("Enable notifications in your browser to get 369 reminders.");return}const K=!h;R(K),localStorage.setItem(Pp,K?"1":"0")},ue=a.trim()===T&&T!=="",A=z&&(p[z]||0)>=b[z];return t.jsxs("div",{style:se.tCard,children:[t.jsxs("div",{style:se.tHead,children:[t.jsxs("div",{style:se.tTitleWrap,children:[t.jsxs("span",{style:se.tBadge,children:[t.jsx(Rg,{size:14})," 369"]}),t.jsxs("div",{children:[t.jsx("div",{style:se.tTitle,children:"369 Method"}),t.jsx("div",{style:se.tSub,children:"Write it 3× morning · 6× noon · 9× night."})]})]}),t.jsxs("div",{style:se.tHeadBtns,children:[t.jsx(Qh,{musicId:n,musicOn:i,setMusicOn:s}),t.jsxs("button",{onClick:ne,style:{...se.tRemBtn,...h?se.tRemOn:{}},title:h?"Reminders on":"Turn on reminders",children:[h?t.jsx(kg,{size:14}):t.jsx(Ly,{size:14})," ",h?"Reminders on":"Remind me"]})]})]}),t.jsxs("div",{style:se.tStreakRow,children:[t.jsxs("div",{style:se.tStreakBox,children:[t.jsxs("div",{style:se.tStreakLabel,children:[t.jsx(so,{size:13,color:"#C2773B"})," Current streak"]}),t.jsx("div",{style:se.tStreakVal,children:$p(u)}),C?t.jsxs("div",{style:{...se.tStreakHint,color:"#4C9A6B"},children:["✓ ",k,"-day minimum met — keep going until it manifests"]}):t.jsxs("div",{style:se.tStreakHint,children:["Day ",u," of ",k," minimum"]}),!C&&t.jsx("div",{style:se.tProgTrack,children:t.jsx("div",{style:{...se.tProgFill,width:`${Math.min(100,u/k*100)}%`}})})]}),t.jsxs("div",{style:se.tStreakBox,children:[t.jsxs("div",{style:se.tStreakLabel,children:[t.jsx(Jr,{size:13,color:"#C9A227"})," All-time best"]}),t.jsx("div",{style:se.tStreakVal,children:$p(j)}),t.jsxs("div",{style:se.tStreakHint,children:["Today: ",x,"/",y," written ",D?"✓":""]})]})]}),T?t.jsxs(t.Fragment,{children:[t.jsx("div",{style:se.tWindows,children:Sc.map(({key:K,label:oe,time:ye,Icon:X,color:Y})=>{const ce=p[K]||0,J=b[K],I=z===K,$=ce>=J;return t.jsxs("div",{style:{...se.tWindow,...I?{border:`1px solid ${Y}`,boxShadow:`0 0 0 2px ${Y}22`}:{}},children:[t.jsxs("div",{style:se.tWindowHead,children:[t.jsx(X,{size:15,color:Y}),t.jsx("span",{style:se.tWindowLabel,children:oe}),I&&t.jsx("span",{style:{...se.tNow,color:Y},children:"now"})]}),t.jsx("div",{style:se.tWindowTime,children:ye}),t.jsx("div",{style:se.tDots,children:Array.from({length:J}).map((H,P)=>t.jsx("span",{style:{...se.tDot,...P<ce?{background:Y,borderColor:Y}:{}}},P))}),t.jsxs("div",{style:{...se.tCount,...$?{color:Y}:{}},children:[ce,"/",J,$?" ✓":""]})]},K)})}),t.jsx("div",{style:se.tWriteBox,children:z?A?t.jsxs("div",{style:se.tDoneMsg,children:["✓ ",Sc.find(K=>K.key===z).label," complete. ",D?"All 18 done today! 🔥":"Next window unlocks ahead."]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{style:se.tNote,children:"✍️ Type it out by hand — no copy-pasting. The act of writing is the point."}),t.jsx("textarea",{value:a,onChange:K=>l(K.target.value),onPaste:K=>{K.preventDefault(),g(!0),setTimeout(()=>g(!1),2500)},onDrop:K=>K.preventDefault(),placeholder:"Type your affirmation here…",style:{...se.writeArea,...ue?{border:"1px solid #4C9A6B"}:{}}}),d&&t.jsx("div",{style:se.tPasteWarn,children:"Pasting is disabled — please type it."}),t.jsxs("div",{style:se.tWriteActions,children:[t.jsxs("button",{onClick:Z,disabled:m||(p[z]||0)===0,style:se.tUndoBtn,title:"Undo last write",children:[t.jsx(Eh,{size:14})," Undo"]}),t.jsxs("button",{onClick:_,disabled:m||!ue,style:{...se.writeSave,flex:1,...ue?{}:se.saveDisabled},children:[t.jsx(He,{size:15})," ",ue?"Log this write":"Type it to log"]})]})]}):t.jsx("div",{style:se.tClosed,children:"Writing windows: 6 AM–12 PM, 12–6 PM, 6 PM–2 AM. Come back during a window."})})]}):t.jsx("div",{style:se.tClosed,children:"Set a 369 affirmation above to start writing."})]})}async function W1(){return"Notification"in window?Notification.permission==="granted"?!0:Notification.permission==="denied"?!1:await Notification.requestPermission()==="granted":!1}function M1(e,r,n){const o=c.useRef({});c.useEffect(()=>{if(!e||!r)return;const i=()=>{var R;if(Notification.permission!=="granted")return;const a=r.window;if(!a)return;const l=r.counts||{},d=r.targets||{};if((l[a]||0)>=(d[a]||0))return;const g=r.today,m=`369-${n||""}-${g}-${a}`;if(o.current[m])return;o.current[m]=!0;const f=((R=Sc.find(B=>B.key===a))==null?void 0:R.label)||"",h=(d[a]||0)-(l[a]||0);try{new Notification("369 — time to write ✍️",{body:`${n?`"${n}" · `:""}${f} window: ${h} more to go. Type your affirmation.`,tag:m})}catch{}};i();const s=setInterval(i,60*1e3);return()=>clearInterval(s)},[e,r,n])}function Np({g:e,onOpen:r,onDelete:n,achieved:o}){return t.jsxs("div",{style:{...se.goalCard,...o?{opacity:.96}:{},position:"relative"},children:[t.jsxs("button",{onClick:r,style:se.goalCardBtn,children:[t.jsxs("div",{style:se.thumbWrap,children:[e.image?t.jsx("img",{src:e.image,alt:"",style:se.thumb}):t.jsx("div",{style:se.thumbEmpty,children:t.jsx(Eo,{size:26,color:"var(--text-3)"})}),o&&t.jsx("span",{style:se.stamp,children:"✦ Manifested"})]}),t.jsxs("div",{style:se.goalBody,children:[t.jsx("div",{style:se.goalTitle,children:e.title}),t.jsxs("div",{style:se.goalMeta,children:[o?t.jsxs("span",{style:{...se.metaPill,color:"#4C9A6B",background:"rgba(76,154,107,0.12)"},children:[t.jsx(Jr,{size:12})," ",e.days_to_manifest!=null?`in ${e.days_to_manifest} day${e.days_to_manifest===1?"":"s"}`:"done"]}):t.jsxs("span",{style:{...se.metaPill,color:"#C2773B",background:"rgba(194,119,59,0.12)"},children:[t.jsx(so,{size:12})," ",e.streak," day streak"]}),t.jsxs("span",{style:se.metaDim,children:[e.total_days," entr",e.total_days===1?"y":"ies"]})]})]})]}),t.jsx("button",{onClick:i=>{i.stopPropagation(),window.confirm(`Delete "${e.title}"?`)&&n()},style:se.cardDelBtn,title:"Delete dream",children:t.jsx(hi,{size:14})})]})}function L1({goalId:e,onBack:r,onReload:n,onCelebrate:o,pickImage:i,musicId:s,setMusicId:a,musicOn:l,setMusicOn:d}){const[g,m]=c.useState(null),[f,h]=c.useState({}),[R,B]=c.useState(Mp()),[T,z]=c.useState(""),[b,p]=c.useState(null),[u,j]=c.useState(null),k=Mp(),C=c.useCallback(Y=>{m(Y);const ce={};(Y.entries||[]).forEach(J=>{ce[J.date]=J.text}),h(ce),z(ce[k]||"")},[k]),D=c.useCallback(async()=>{C(await M.getGoldenGoal(e))},[e,C]);if(c.useEffect(()=>{D()},[D]),c.useEffect(()=>{if(!(g!=null&&g.t369_enabled))return;const Y=setInterval(()=>{M.getGoldenGoal(e).then(C).catch(()=>{})},60*1e3);return()=>clearInterval(Y)},[g==null?void 0:g.t369_enabled,e,C]),!g)return t.jsx("div",{style:se.muted,children:"Loading…"});const x=R===k,y=R>g.created_date,_=R<k,Z=async()=>{await M.upsertGoldenEntry(e,{date:k,text:T}),await D(),n()},ne=async()=>{const Y=await M.achieveGolden(e);o(g.title,Y.days_to_manifest),await D(),n()},ue=async()=>{await M.unachieveGolden(e),await D(),n()},A=async()=>{b.trim()&&(await M.updateGolden(e,{title:b.trim()}),p(null),await D(),n())},K=Y=>M.updateGolden(e,{image:Y}).then(()=>{D(),n()}),oe=async()=>{await M.updateGolden(e,{t369_enabled:!g.t369_enabled}),await D(),n()},ye=async()=>{await M.updateGolden(e,{t369_affirmation:(u||"").trim()}),j(null),await D()},X=async()=>{window.confirm(`Delete "${g.title}"? This cannot be undone from here.`)&&(await M.deleteGolden(e),n(),r())};return t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:se.detailTopRow,children:[t.jsxs("button",{onClick:r,style:se.backBtn,children:[t.jsx(gh,{size:16})," All dreams"]}),t.jsxs("button",{onClick:X,style:se.deleteBtn,title:"Delete dream",children:[t.jsx(hi,{size:14})," Delete"]})]}),t.jsxs("div",{style:se.detailHero,children:[t.jsxs("label",{style:se.heroPhoto,children:[g.image?t.jsx("img",{src:g.image,alt:"",style:se.heroImg}):t.jsxs("span",{style:se.photoEmpty,children:[t.jsx(wl,{size:20})," Add a photo"]}),t.jsxs("span",{style:se.photoEdit,children:[t.jsx(jt,{size:12})," Edit photo"]}),t.jsx("input",{type:"file",accept:"image/*",onChange:Y=>i(Y,K),style:{display:"none"}})]}),t.jsxs("div",{style:se.heroInfo,children:[g.achieved&&t.jsxs("span",{style:se.heroStamp,children:["✦ Manifested",g.days_to_manifest!=null?` in ${g.days_to_manifest} day${g.days_to_manifest===1?"":"s"}`:""]}),b!==null?t.jsxs("div",{style:{display:"flex",gap:6,width:"100%"},children:[t.jsx("textarea",{autoFocus:!0,value:b,onChange:Y=>p(Y.target.value),style:{...se.textarea,minHeight:60}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[t.jsx("button",{onClick:A,style:se.iconSave,children:t.jsx(He,{size:14})}),t.jsx("button",{onClick:()=>p(null),style:se.iconCancel,children:t.jsx(Fe,{size:14})})]})]}):t.jsxs("div",{style:se.heroTitleRow,children:[t.jsx("div",{style:se.heroTitle,children:g.title}),t.jsx("button",{onClick:()=>p(g.title),style:se.ghostBtn,title:"Edit",children:t.jsx(jt,{size:13})})]}),t.jsxs("div",{style:se.heroStats,children:[t.jsxs("span",{style:{...se.metaPill,color:"#C2773B",background:"rgba(194,119,59,0.12)"},children:[t.jsx(so,{size:13})," ",g.streak," day streak"]}),t.jsxs("span",{style:se.metaDim,children:[g.total_days," entr",g.total_days===1?"y":"ies"]}),t.jsxs("span",{style:se.metaDim,children:["since ",_p(g.created_date)]})]})]})]}),!g.achieved&&t.jsxs("div",{style:se.t369Row,children:[t.jsxs("div",{style:se.t369RowLeft,children:[t.jsxs("span",{style:{...se.tBadge,...g.t369_enabled?{}:se.tBadgeOff},children:[t.jsx(Rg,{size:13})," 369"]}),t.jsxs("div",{children:[t.jsx("div",{style:se.t369RowTitle,children:"Tesla's 369 Method"}),t.jsx("div",{style:se.t369RowSub,children:g.t369_enabled?"On — write this dream 3×/6×/9× across the day.":"Off — using the simple daily entry."})]})]}),t.jsx("button",{onClick:oe,style:{...se.switch,...g.t369_enabled?se.switchOn:{}},role:"switch","aria-checked":g.t369_enabled,title:"Toggle 369 method",children:t.jsx("span",{style:{...se.switchKnob,...g.t369_enabled?se.switchKnobOn:{}}})})]}),g.t369_enabled&&!g.achieved&&t.jsxs(t.Fragment,{children:[u!==null||!g.t369_affirmation?t.jsxs("div",{style:se.card,children:[t.jsx("div",{style:se.cardTitle,children:"Your 369 affirmation"}),t.jsx("textarea",{autoFocus:!0,value:u??g.t369_affirmation??"",onChange:Y=>j(Y.target.value),placeholder:"The exact line you'll write 18× a day, e.g. 'I am grateful for my dream home.'",style:se.textarea}),t.jsxs("div",{style:se.formActions,children:[g.t369_affirmation&&t.jsxs("button",{onClick:()=>j(null),style:se.cancelBtn,children:[t.jsx(Fe,{size:14})," Cancel"]}),t.jsxs("button",{onClick:ye,disabled:!(u??"").trim()&&!g.t369_affirmation,style:{...se.saveBtn,...(u??g.t369_affirmation??"").trim()?{}:se.saveDisabled},children:[t.jsx(He,{size:15})," Save affirmation"]})]})]}):t.jsxs("div",{style:se.tAffShow,children:[t.jsx(bc,{size:15,color:Vr}),t.jsx("p",{style:se.tAffText,children:g.t369_affirmation}),t.jsx("button",{onClick:()=>j(g.t369_affirmation),style:se.ghostBtn,title:"Edit affirmation",children:t.jsx(jt,{size:13})})]}),t.jsx(F1,{g,onChanged:C,musicId:s,setMusicId:a,musicOn:l,setMusicOn:d})]}),!g.t369_enabled&&t.jsxs("div",{style:se.writeCard,children:[t.jsx("div",{style:se.tuneRow,children:t.jsx(Qh,{musicId:s,musicOn:l,setMusicOn:d})}),t.jsxs("div",{style:se.writeNav,children:[t.jsx("button",{onClick:()=>B(Y=>Lp(Y,-1)),disabled:!y,style:{...se.navBtn,...y?{}:se.navDisabled},children:t.jsx(An,{size:16})}),t.jsx("div",{style:se.writeDate,children:x?"Today":_p(R)}),t.jsx("button",{onClick:()=>B(Y=>Lp(Y,1)),disabled:!_,style:{...se.navBtn,..._?{}:se.navDisabled},children:t.jsx(cn,{size:16})})]}),x&&!g.achieved?t.jsxs(t.Fragment,{children:[t.jsx("textarea",{value:T,onChange:Y=>z(Y.target.value),placeholder:"Write it again today, as if it's already yours…",style:se.writeArea}),t.jsxs("button",{onClick:Z,style:se.writeSave,children:[t.jsx(He,{size:15})," Save today's entry"]})]}):t.jsx("div",{style:se.readEntry,children:f[R]?t.jsxs(t.Fragment,{children:[t.jsx(bc,{size:16,color:"var(--text-3)"}),t.jsx("p",{style:se.readText,children:f[R]})]}):t.jsx("div",{style:se.muted,children:"Nothing written on this day."})})]}),g.achieved?t.jsx("button",{onClick:ue,style:se.unmanifestBtn,children:"Undo manifested"}):t.jsxs("button",{onClick:ne,style:se.manifestBtn,children:[t.jsx(Eo,{size:16})," Mark as manifested"]})]})}function _1({data:e,onClose:r}){return t.jsx("div",{style:se.celebOverlay,onClick:r,children:t.jsxs("div",{style:se.celebBox,onClick:n=>n.stopPropagation(),children:[t.jsx("div",{style:se.celebEmoji,children:"✨🌟✨"}),t.jsx("div",{style:se.celebTitle,children:"It's happening!"}),t.jsxs("div",{style:se.celebDream,children:['"',e.title,'"']}),t.jsxs("div",{style:se.celebSub,children:[e.days!=null?`Manifested in ${e.days} day${e.days===1?"":"s"}.`:"Manifested."," The universe delivered. 🙏"]}),t.jsx("button",{onClick:r,style:se.celebBtn,children:"Wonderful"})]})})}function $1({musicId:e,on:r}){return!e||!r?null:t.jsx("iframe",{title:"golden-music",src:`https://www.youtube.com/embed/${e}?autoplay=1&loop=1&playlist=${e}&controls=0&modestbranding=1&playsinline=1`,allow:"autoplay; encrypted-media",style:{position:"fixed",left:-1e4,top:0,width:320,height:180,border:"none"}})}function Qh({musicId:e,musicOn:r,setMusicOn:n}){return e?t.jsxs("button",{onClick:()=>n(o=>!o),style:{...se.tRemBtn,...r?se.tuneOn:{}},title:r?"Soft tunes on":"Play soft tunes",children:[r?t.jsx(wh,{size:14}):t.jsx(Cg,{size:14})," Soft tunes"]}):t.jsx("span",{style:se.tuneHint,children:"Add a track in Settings → Music"})}const Vr="#C9A227",se={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:860,margin:"0 auto",position:"relative"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:18},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:Vr,color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},textarea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"11px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:70,resize:"vertical",lineHeight:1.5},photoPick:{display:"block",marginTop:10,cursor:"pointer",borderRadius:12,overflow:"hidden",border:"1px dashed var(--border)"},photoPreview:{width:"100%",maxHeight:220,objectFit:"cover",display:"block"},photoEmpty:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"26px 0",color:"var(--text-3)",fontSize:13,fontWeight:600},formActions:{display:"flex",gap:8,marginTop:14},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",background:Vr,color:"#fff",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"not-allowed"},sectionTitle:{display:"flex",alignItems:"center",gap:7,fontSize:13,fontWeight:700,color:"var(--text-2)",marginBottom:12},badge:{fontSize:11,fontWeight:700,background:"var(--hover)",color:"var(--text-2)",borderRadius:10,padding:"1px 7px"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:14},goalCard:{textAlign:"left",border:"1px solid var(--border)",background:"var(--surface)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},goalCardBtn:{textAlign:"left",border:"none",background:"none",cursor:"pointer",padding:0,fontFamily:"inherit",display:"flex",flexDirection:"column",width:"100%"},cardDelBtn:{position:"absolute",top:8,left:8,border:"none",background:"rgba(0,0,0,0.55)",color:"#fff",width:26,height:26,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center",zIndex:2},thumbWrap:{position:"relative",width:"100%",aspectRatio:"16 / 10",background:"var(--surface-2)"},thumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},thumbEmpty:{width:"100%",height:"100%",display:"grid",placeItems:"center"},stamp:{position:"absolute",top:8,right:8,transform:"rotate(6deg)",background:"rgba(76,154,107,0.95)",color:"#fff",fontSize:11,fontWeight:800,letterSpacing:"0.04em",padding:"3px 9px",borderRadius:6,border:"1.5px solid #fff",textTransform:"uppercase"},goalBody:{padding:"11px 13px",display:"flex",flexDirection:"column",gap:8},goalTitle:{fontSize:14,fontWeight:600,lineHeight:1.35,display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"},goalMeta:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},metaPill:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11.5,fontWeight:700,padding:"2px 8px",borderRadius:10},metaDim:{fontSize:11,color:"var(--text-3)",fontWeight:500},detailTopRow:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16,gap:10},backBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},deleteBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid rgba(194,83,107,0.4)",background:"rgba(194,83,107,0.08)",color:"#C2536B",padding:"7px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},detailHero:{display:"flex",flexDirection:"column",gap:14,marginBottom:16},heroPhoto:{position:"relative",width:"100%",borderRadius:14,overflow:"hidden",border:"1px solid var(--border)",cursor:"pointer",background:"var(--surface-2)",display:"flex",alignItems:"center",justifyContent:"center",minHeight:120},heroImg:{width:"100%",maxHeight:"62vh",objectFit:"contain",display:"block"},photoEdit:{position:"absolute",bottom:8,right:8,display:"flex",alignItems:"center",gap:5,background:"rgba(0,0,0,0.6)",color:"#fff",fontSize:11,fontWeight:600,padding:"4px 8px",borderRadius:7},heroInfo:{display:"flex",flexDirection:"column",gap:10,alignItems:"center",textAlign:"center"},heroStamp:{alignSelf:"center",background:"rgba(76,154,107,0.14)",color:"#4C9A6B",fontSize:12,fontWeight:800,padding:"4px 10px",borderRadius:8,letterSpacing:"0.03em"},heroTitleRow:{display:"flex",alignItems:"flex-start",gap:8,justifyContent:"center"},heroTitle:{fontSize:23,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.35},heroStats:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap",justifyContent:"center"},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",flexShrink:0},iconSave:{border:"none",background:"#4C9A6B",color:"#fff",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},iconCancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:32,height:32,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},writeCard:{background:"var(--surface)",borderRadius:14,padding:16,border:"1px solid var(--border)",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:14},tuneRow:{display:"flex",justifyContent:"flex-end",marginBottom:10},tuneOn:{background:Vr,color:"#fff",borderColor:Vr},tuneHint:{fontSize:11,color:"var(--text-3)",fontWeight:500},writeNav:{display:"flex",alignItems:"center",justifyContent:"center",gap:14,marginBottom:12},navBtn:{width:34,height:34,borderRadius:9,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center"},navDisabled:{opacity:.35,cursor:"not-allowed"},writeDate:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:150,textAlign:"center"},writeArea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"12px",fontSize:15,fontFamily:"'Fraunces',Georgia,serif",color:"var(--text)",background:"var(--surface)",outline:"none",minHeight:120,resize:"vertical",lineHeight:1.6},writeSave:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",marginTop:10,border:"none",background:Vr,color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},readEntry:{display:"flex",gap:8,padding:"6px 2px"},readText:{fontSize:15,fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.6,margin:0,whiteSpace:"pre-wrap"},manifestBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,width:"100%",border:"none",background:"linear-gradient(135deg,#C9A227,#E0BD45)",color:"#fff",padding:"13px",borderRadius:12,fontSize:15,fontWeight:800,cursor:"pointer",fontFamily:"inherit",boxShadow:"0 2px 10px rgba(201,162,39,0.35)"},unmanifestBtn:{display:"block",margin:"0 auto",border:"none",background:"none",color:"var(--text-3)",fontSize:12,fontWeight:600,cursor:"pointer",textDecoration:"underline",fontFamily:"inherit"},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"},celebOverlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.6)",zIndex:200,display:"grid",placeItems:"center",padding:16},celebBox:{background:"var(--surface)",color:"var(--text)",borderRadius:20,padding:"36px 30px",textAlign:"center",maxWidth:360,boxShadow:"0 12px 48px rgba(0,0,0,0.3)"},celebEmoji:{fontSize:40,marginBottom:10},celebTitle:{fontSize:24,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginBottom:10,color:Vr},celebDream:{fontSize:15,fontStyle:"italic",fontFamily:"'Fraunces',Georgia,serif",lineHeight:1.5,marginBottom:10},celebSub:{fontSize:13.5,color:"var(--text-2)",lineHeight:1.5,marginBottom:22},celebBtn:{border:"none",background:Vr,color:"#fff",padding:"11px 28px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},t369Row:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:"12px 16px",marginBottom:14,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},t369RowLeft:{display:"flex",alignItems:"center",gap:11},t369RowTitle:{fontSize:14,fontWeight:700},t369RowSub:{fontSize:11.5,color:"var(--text-3)",marginTop:2},tBadgeOff:{background:"var(--border)",color:"var(--text-3)"},switch:{position:"relative",width:46,height:26,borderRadius:14,border:"none",background:"var(--border)",cursor:"pointer",flexShrink:0,transition:"background 0.2s",padding:0},switchOn:{background:Vr},switchKnob:{position:"absolute",top:3,left:3,width:20,height:20,borderRadius:"50%",background:"#fff",transition:"left 0.2s",boxShadow:"0 1px 2px rgba(0,0,0,0.3)"},switchKnobOn:{left:23},tCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:16,padding:18,marginBottom:20,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},tHead:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:12,flexWrap:"wrap",marginBottom:14},tTitleWrap:{display:"flex",alignItems:"center",gap:11},tBadge:{display:"inline-flex",alignItems:"center",gap:4,background:"linear-gradient(135deg,#C9A227,#E0BD45)",color:"#fff",fontSize:14,fontWeight:800,padding:"6px 10px",borderRadius:10,letterSpacing:"0.02em",flexShrink:0},tTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},tSub:{fontSize:12,color:"var(--text-3)",marginTop:2},tHeadBtns:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",justifyContent:"flex-end"},tRemBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 12px",borderRadius:16,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tRemOn:{background:Vr,color:"#fff",borderColor:Vr},tStreakRow:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:14},tStreakBox:{background:"var(--bg)",border:"1px solid var(--border)",borderRadius:12,padding:"12px 14px"},tStreakLabel:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,fontWeight:600,color:"var(--text-2)"},tStreakVal:{fontSize:21,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:4,lineHeight:1.1},tStreakHint:{fontSize:11,color:"var(--text-3)",marginTop:4,fontWeight:500},tProgTrack:{height:5,borderRadius:4,background:"var(--border)",marginTop:8,overflow:"hidden"},tProgFill:{height:"100%",background:"linear-gradient(90deg,#C2773B,#C9A227)",borderRadius:4,transition:"width 0.4s"},tAffShow:{display:"flex",alignItems:"flex-start",gap:9,background:"var(--bg)",border:"1px solid var(--border)",borderRadius:12,padding:"12px 14px",marginBottom:14},tAffText:{flex:1,fontSize:15,fontFamily:"'Fraunces',Georgia,serif",fontStyle:"italic",lineHeight:1.5,margin:0,whiteSpace:"pre-wrap"},tWindows:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:10,marginBottom:14},tWindow:{background:"var(--bg)",border:"1px solid var(--border)",borderRadius:12,padding:"11px 12px",transition:"box-shadow 0.2s, border-color 0.2s"},tWindowHead:{display:"flex",alignItems:"center",gap:6},tWindowLabel:{fontSize:13,fontWeight:700},tNow:{fontSize:10,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",marginLeft:"auto"},tWindowTime:{fontSize:10.5,color:"var(--text-3)",marginTop:2,marginBottom:8,fontWeight:500},tDots:{display:"flex",flexWrap:"wrap",gap:5,marginBottom:7},tDot:{width:11,height:11,borderRadius:"50%",border:"1.5px solid var(--border)",background:"transparent",transition:"background 0.2s"},tCount:{fontSize:12,fontWeight:700,color:"var(--text-2)"},tWriteBox:{borderTop:"1px solid var(--border)",paddingTop:14},tNote:{fontSize:12,fontWeight:600,color:"#C2773B",background:"rgba(194,119,59,0.10)",borderRadius:8,padding:"8px 11px",marginBottom:9},tPasteWarn:{fontSize:11.5,color:"#C2536B",fontWeight:600,marginTop:6},tWriteActions:{display:"flex",gap:8,marginTop:10},tUndoBtn:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"11px 14px",borderRadius:10,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tClosed:{fontSize:12.5,color:"var(--text-3)",textAlign:"center",padding:"10px 4px",lineHeight:1.5},tDoneMsg:{fontSize:13,fontWeight:700,color:"#4C9A6B",textAlign:"center",padding:"10px 4px"}},bd=[{id:"meditation",label:"Meditation Hub",icon:Py,color:"#8268B0"},{id:"visualization",label:"Visualization",icon:js,color:"#3A7CA5"}],Op=e=>{if(!e)return"";const r=e.trim();if(/^[A-Za-z0-9_-]{11}$/.test(r))return r;const n=r.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);return n?n[1]:""},P1=e=>new Promise((r,n)=>{const o=new FileReader;o.onload=()=>{const i=new Image;i.onload=()=>{let{width:a,height:l}=i;a>l&&a>1e3?(l=l*1e3/a,a=1e3):l>1e3&&(a=a*1e3/l,l=1e3);const d=document.createElement("canvas");d.width=a,d.height=l,d.getContext("2d").drawImage(i,0,0,a,l),r(d.toDataURL("image/jpeg",.82))},i.onerror=n,i.src=o.result},o.onerror=n,o.readAsDataURL(e)}),N1=e=>({id:null,kind:e,title:"",url:"",image:""});function O1(){const[e,r]=c.useState("meditation"),[n,o]=c.useState([]),[i,s]=c.useState(!1),[a,l]=c.useState(null),[d,g]=c.useState(null),m=c.useCallback(async()=>{try{o(await M.getMedia())}catch{}s(!0)},[]);c.useEffect(()=>{m()},[m]);const{deleteItem:f,toasts:h,handleUndo:R,handleDismiss:B}=kr(M.deleteMedia,M.restoreMedia,m);c.useEffect(()=>{if(!d)return;const C=10,D=setInterval(()=>{document.hidden||M.addScreenTime("mindscape",C).catch(()=>{})},C*1e3);return()=>clearInterval(D)},[d]);const T=bd.find(C=>C.id===e),z=n.filter(C=>C.kind===e),b=C=>l({id:C.id,kind:C.kind,title:C.title,url:`https://youtu.be/${C.youtube_id}`,image:C.image}),p=async C=>{var x;const D=(x=C.target.files)==null?void 0:x[0];if(D){try{const y=await P1(D);l(_=>({..._,image:y}))}catch{}C.target.value=""}},u=a?[!a.title.trim()&&"a title",!a.image&&"an image",!Op(a.url)&&"a valid YouTube link"].filter(Boolean):[],j=!!a&&u.length===0,k=async()=>{if(!j)return;const C={kind:a.kind,title:a.title.trim(),image:a.image,youtube_id:Op(a.url)};a.id?await M.updateMedia(a.id,C):await M.createMedia(C),l(null),m()};return t.jsxs("div",{style:mt.page,children:[d&&t.jsx("iframe",{title:"mindscape-audio",src:`https://www.youtube.com/embed/${d.youtube_id}?autoplay=1&controls=0&modestbranding=1&playsinline=1`,allow:"autoplay; encrypted-media",style:{position:"fixed",left:-1e4,top:0,width:320,height:180,border:"none"}}),t.jsxs("div",{style:mt.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:mt.eyebrow,children:"Anvil · Mindscape"}),t.jsx("h1",{style:mt.h1,children:"Mindscape"}),t.jsx("div",{style:mt.subhead,children:"Close your eyes and listen — guided meditation and visualization."})]}),!a&&t.jsxs("button",{onClick:()=>l(N1(e)),style:{...mt.addBtn,background:T.color},children:[t.jsx(bt,{size:15})," Add"]})]}),t.jsx("div",{style:mt.tabs,children:bd.map(C=>{const D=C.icon,x=e===C.id;return t.jsxs("button",{onClick:()=>{r(C.id),l(null)},style:{...mt.tab,...x?{background:C.color,color:"#fff",borderColor:C.color}:{}},children:[t.jsx(D,{size:15})," ",C.label]},C.id)})}),a&&t.jsxs("div",{style:mt.card,children:[t.jsx("div",{style:mt.cardTitle,children:a.id?"Edit":`New ${bd.find(C=>C.id===a.kind).label}`}),t.jsx("input",{placeholder:"YouTube link (plays as audio only)",value:a.url,onChange:C=>l({...a,url:C.target.value}),style:mt.input,autoFocus:!0}),t.jsx("input",{placeholder:"Title (required)",value:a.title,onChange:C=>l({...a,title:C.target.value}),style:{...mt.input,marginTop:8}}),t.jsxs("label",{style:mt.photoPick,children:[a.image?t.jsx("img",{src:a.image,alt:"",style:mt.photoPreview}):t.jsxs("span",{style:mt.photoEmpty,children:[t.jsx(wl,{size:18})," Add cover image (required)"]}),t.jsx("input",{type:"file",accept:"image/*",onChange:p,style:{display:"none"}})]}),!j&&t.jsxs("div",{style:mt.warn,children:["Add ",u.join(", ")," to save."]}),t.jsxs("div",{style:mt.formActions,children:[t.jsxs("button",{onClick:()=>l(null),style:mt.cancelBtn,children:[t.jsx(Fe,{size:14})," Cancel"]}),t.jsxs("button",{onClick:k,disabled:!j,style:{...mt.saveBtn,background:j?T.color:"var(--border)",color:j?"#fff":"var(--text-3)",cursor:j?"pointer":"not-allowed"},children:[t.jsx(He,{size:15})," ",a.id?"Save":"Add"]})]})]}),i?z.length===0?t.jsxs("div",{style:mt.empty,children:["Nothing here yet — add a ",T.label.toLowerCase()," track."]}):t.jsx("div",{style:mt.grid,children:z.map(C=>{const D=(d==null?void 0:d.id)===C.id;return t.jsxs("div",{style:mt.mediaCard,children:[t.jsxs("button",{onClick:()=>g(D?null:C),style:mt.coverBtn,title:D?"Pause":"Play",children:[t.jsx("img",{src:C.image,alt:"",style:mt.cover}),t.jsx("span",{style:{...mt.playOverlay,background:D?"rgba(0,0,0,0.45)":"rgba(0,0,0,0.28)"},children:t.jsx("span",{style:{...mt.playCircle,background:T.color},children:D?t.jsx(Sh,{size:20,color:"#fff",fill:"#fff"}):t.jsx(tl,{size:20,color:"#fff",fill:"#fff"})})}),D&&t.jsxs("span",{style:mt.nowPlaying,children:[t.jsx(wh,{size:11})," Playing"]})]}),t.jsxs("div",{style:mt.mediaBody,children:[t.jsx("div",{style:mt.mediaTitle,children:C.title}),t.jsxs("div",{style:mt.cardActions,children:[t.jsx("button",{onClick:()=>b(C),style:mt.iconBtn,title:"Edit",children:t.jsx(jt,{size:13})}),t.jsx("button",{onClick:()=>{(d==null?void 0:d.id)===C.id&&g(null),f(C.id,C.title)},style:mt.iconBtn,title:"Delete",children:t.jsx(Fe,{size:14})})]})]})]},C.id)})}):t.jsx("div",{style:mt.muted,children:"Loading…"}),t.jsx(wr,{toasts:h,onUndo:R,onDismiss:B})]})}const mt={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:900,margin:"0 auto"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",color:"#fff",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},tabs:{display:"flex",gap:8,marginBottom:18,flexWrap:"wrap"},tab:{display:"flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:20,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},card:{background:"var(--surface)",borderRadius:14,padding:18,marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},input:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none"},photoPick:{display:"block",marginTop:10,cursor:"pointer",borderRadius:12,overflow:"hidden",border:"1px dashed var(--border)"},photoPreview:{width:"100%",maxHeight:200,objectFit:"cover",display:"block"},photoEmpty:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"26px 0",color:"var(--text-3)",fontSize:13,fontWeight:600},warn:{fontSize:12,color:"#C2773B",marginTop:8,fontWeight:600},formActions:{display:"flex",gap:8,marginTop:14},cancelBtn:{display:"flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"10px 14px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},saveBtn:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",padding:"10px 14px",borderRadius:9,fontSize:14,fontWeight:700,fontFamily:"inherit"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gap:16},mediaCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column"},coverBtn:{position:"relative",border:"none",padding:0,cursor:"pointer",display:"block",width:"100%",aspectRatio:"1",background:"var(--surface-2)"},cover:{width:"100%",height:"100%",objectFit:"cover",display:"block"},playOverlay:{position:"absolute",inset:0,display:"grid",placeItems:"center"},playCircle:{width:46,height:46,borderRadius:"50%",display:"grid",placeItems:"center",boxShadow:"0 2px 10px rgba(0,0,0,0.3)"},nowPlaying:{position:"absolute",bottom:8,left:8,display:"flex",alignItems:"center",gap:4,background:"rgba(0,0,0,0.65)",color:"#fff",fontSize:11,fontWeight:700,padding:"3px 8px",borderRadius:7},mediaBody:{padding:"12px 14px",display:"flex",alignItems:"flex-start",gap:8},mediaTitle:{flex:1,fontSize:14.5,fontWeight:600,lineHeight:1.4,minWidth:0,wordBreak:"break-word"},cardActions:{display:"flex",gap:2,flexShrink:0,marginTop:1},iconBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"16px 0"},empty:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"40px 12px"}},Xh={Financial:"#C9A227",Academic:"#3A7CA5",Relationship:"#C2536B",Health:"#4C9A6B",Spiritual:"#8268B0"},H1=Object.keys(Xh),G1="#9A7B4F";function U1(e=760){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const V1=()=>{const e=new Date,r=n=>String(n).padStart(2,"0");return`${e.getFullYear()}-${r(e.getMonth()+1)}-${r(e.getDate())}`},Y1=e=>{if(!e)return"";const r=new Date(e+"T00:00:00");return isNaN(r)?e:r.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})},md=e=>(e||"").slice(0,4),K1=e=>new Promise((r,n)=>{const o=new FileReader;o.onload=()=>r(o.result),o.onerror=n,o.readAsDataURL(e)}),Q1=(e,r=1e3)=>new Promise((n,o)=>{const i=new Image;i.onload=()=>{let{width:s,height:a}=i;s>a&&s>r?(a=a*r/s,s=r):a>r&&(s=s*r/a,a=r);const l=document.createElement("canvas");l.width=s,l.height=a,l.getContext("2d").drawImage(i,0,0,s,a),n(l.toDataURL("image/jpeg",.82))},i.onerror=o,i.src=e});function X1({src:e,onCancel:r,onCrop:n,onKeepOriginal:o}){const[a,l]=c.useState(null),[d,g]=c.useState(1),[m,f]=c.useState({x:0,y:0}),h=c.useRef(null);c.useEffect(()=>{const k=new Image;k.onload=()=>{l(k);const C=Math.max(300/k.width,300/k.height);g(1),k._base=C;const D=k.width*C,x=k.height*C;f({x:(300-D)/2,y:(300-x)/2})},k.src=e},[e]);const R=a?a._base*d:1,B=a?a.width*R:0,T=a?a.height*R:0,z=(k,C,D)=>({x:Math.min(0,Math.max(300-C,k.x)),y:Math.min(0,Math.max(300-D,k.y))});c.useEffect(()=>{a&&f(k=>z(k,B,T))},[d,a]);const b=k=>{const C=k.touches?k.touches[0]:k;h.current={sx:C.clientX,sy:C.clientY,ox:m.x,oy:m.y}},p=k=>{if(!h.current)return;const C=k.touches?k.touches[0]:k,D=h.current.ox+(C.clientX-h.current.sx),x=h.current.oy+(C.clientY-h.current.sy);f(z({x:D,y:x},B,T))},u=()=>{h.current=null},j=()=>{if(!a)return;const k=document.createElement("canvas");k.width=700,k.height=700;const C=k.getContext("2d"),D=700/300;C.drawImage(a,m.x*D,m.y*D,B*D,T*D),n(k.toDataURL("image/jpeg",.85))};return t.jsx("div",{style:Sr.overlay,onClick:r,children:t.jsxs("div",{style:Sr.box,onClick:k=>k.stopPropagation(),children:[t.jsxs("div",{style:Sr.head,children:["Crop to square",t.jsx("button",{onClick:r,style:Sr.close,children:t.jsx(Fe,{size:16})})]}),t.jsxs("div",{style:{...Sr.frame,width:300,height:300},onMouseDown:b,onMouseMove:p,onMouseUp:u,onMouseLeave:u,onTouchStart:b,onTouchMove:p,onTouchEnd:u,children:[a&&t.jsx("img",{src:e,alt:"",draggable:!1,style:{position:"absolute",left:m.x,top:m.y,width:B,height:T,userSelect:"none",pointerEvents:"none"}}),t.jsx("div",{style:Sr.grid})]}),t.jsxs("div",{style:Sr.zoomRow,children:[t.jsx("span",{style:Sr.zoomLbl,children:"Zoom"}),t.jsx("input",{type:"range",min:"1",max:"3",step:"0.01",value:d,onChange:k=>g(parseFloat(k.target.value)),style:{flex:1}})]}),t.jsx("div",{style:Sr.hint,children:"Drag to reposition · slide to zoom"}),t.jsxs("div",{style:Sr.actions,children:[t.jsx("button",{onClick:r,style:Sr.cancel,children:"Cancel"}),t.jsx("button",{onClick:o,style:Sr.keep,children:"Keep original"}),t.jsxs("button",{onClick:j,style:Sr.apply,children:[t.jsx(He,{size:15})," Square crop"]})]})]})})}const q1={id:null,title:"",date:V1(),pillar:"",reward:"",image:"",note:""};function Z1(){const e=uo(),r=x=>As(x,e.code),n=U1(),[o,i]=c.useState([]),[s,a]=c.useState(null),[l,d]=c.useState(!1),[g,m]=c.useState(null),f=c.useRef(null),h=c.useCallback(()=>{M.getAchievements().then(i).catch(()=>{})},[]);c.useEffect(()=>{h()},[h]);const{deleteItem:R,toasts:B,handleUndo:T,handleDismiss:z}=kr(M.deleteAchievement,M.restoreAchievement,h),b=()=>a({...q1}),p=x=>a({id:x.id,title:x.title,date:x.date,pillar:x.pillar||"",reward:x.reward?String(x.reward):"",image:x.image||"",note:x.note||""}),u=async x=>{var _;const y=(_=x.target.files)==null?void 0:_[0];if(y){try{const Z=await K1(y);m(Z)}catch{}f.current&&(f.current.value="")}},j=async()=>{let x=g;try{g&&(x=await Q1(g))}catch{}a(y=>({...y,image:x})),m(null)},k=s&&s.title.trim()&&s.date,C=async()=>{if(!k||l)return;d(!0);const x={title:s.title.trim(),date:s.date,pillar:s.pillar||null,reward:parseFloat(s.reward)||0,image:s.image||null,note:s.note.trim()};try{s.id?await M.updateAchievement(s.id,x):await M.createAchievement(x),a(null),h()}catch{}finally{d(!1)}},D=o.reduce((x,y)=>x+(y.reward||0),0);return t.jsxs("div",{style:et.page,children:[t.jsxs("div",{style:et.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:et.eyebrow,children:"Anvil · Achievements"}),t.jsx("h1",{style:et.h1,children:"Achievements"}),t.jsx("div",{style:et.subhead,children:"Your tree of wins — newest at the top, scroll down through the past."})]}),t.jsxs("div",{style:et.headRight,children:[D>0&&t.jsxs("div",{style:et.totalBadge,children:[t.jsx(ks,{size:14,color:"#C9A227"})," ",r(D)," earned"]}),t.jsxs("button",{onClick:b,style:et.addBtn,children:[t.jsx(bt,{size:15})," Add achievement"]})]})]}),o.length===0?t.jsxs("div",{style:et.empty,children:[t.jsx(Jr,{size:30,color:"var(--text-3)"}),t.jsx("div",{style:{marginTop:10},children:"No achievements yet."}),t.jsx("div",{style:et.emptySub,children:"Plant your first win — it'll grow into a timeline you can look back on."})]}):t.jsxs("div",{style:{...et.timeline,paddingLeft:0},children:[t.jsx("div",{style:{...et.trunk,left:n?13:"50%"}}),o.map((x,y)=>{const _=Xh[x.pillar]||G1,Z=!n&&y%2===1,ne=o[y-1],ue=!ne||md(ne.date)!==md(x.date);return t.jsxs("div",{children:[ue&&t.jsx("div",{style:{...et.yearRow,justifyContent:n?"flex-start":"center",paddingLeft:n?36:0},children:t.jsx("span",{style:et.yearChip,children:md(x.date)})}),t.jsxs("div",{style:{...et.row,gridTemplateColumns:n?"28px 1fr":"1fr 44px 1fr"},children:[!n&&t.jsx("div",{style:{gridColumn:1,display:"flex",justifyContent:"flex-end"},children:Z&&t.jsx(Hp,{a:x,color:_,side:"left",money:r,onEdit:()=>p(x),onDelete:()=>R(x.id,x.title)})}),t.jsx("div",{style:{gridColumn:n?1:2,display:"flex",justifyContent:"center",position:"relative"},children:t.jsx("div",{style:{...et.node,borderColor:_,background:"var(--surface)"},children:t.jsx("div",{style:{...et.nodeDot,background:_}})})}),t.jsx("div",{style:{gridColumn:n?2:3,display:"flex",justifyContent:"flex-start"},children:(n||!Z)&&t.jsx(Hp,{a:x,color:_,side:n?"mobile":"right",money:r,onEdit:()=>p(x),onDelete:()=>R(x.id,x.title)})})]})]},x.id)})]}),s&&t.jsx("div",{style:et.overlay,onClick:()=>a(null),children:t.jsxs("div",{style:et.modal,onClick:x=>x.stopPropagation(),children:[t.jsxs("div",{style:et.modalHead,children:[t.jsx("div",{style:et.modalTitle,children:s.id?"Edit achievement":"New achievement"}),t.jsx("button",{onClick:()=>a(null),style:et.iconBtn,children:t.jsx(Fe,{size:16})})]}),t.jsx("label",{style:et.label,children:"Title *"}),t.jsx("input",{autoFocus:!0,value:s.title,onChange:x=>a(y=>({...y,title:x.target.value})),placeholder:"What did you achieve?",style:et.input}),t.jsxs("div",{style:et.formRow,children:[t.jsxs("div",{style:{flex:1},children:[t.jsxs("label",{style:et.label,children:[t.jsx(Vy,{size:12})," Date *"]}),t.jsx("input",{type:"date",value:s.date,onChange:x=>a(y=>({...y,date:x.target.value})),style:et.input})]}),t.jsxs("div",{style:{flex:1},children:[t.jsx("label",{style:et.label,children:"Pillar (optional)"}),t.jsxs("select",{value:s.pillar,onChange:x=>a(y=>({...y,pillar:x.target.value})),style:et.input,children:[t.jsx("option",{value:"",children:"— None —"}),H1.map(x=>t.jsx("option",{value:x,children:x},x))]})]})]}),t.jsxs("label",{style:et.label,children:[t.jsx(ks,{size:12})," Reward (",e.code,") — optional gesture of appreciation"]}),t.jsx("input",{type:"number",min:"0",step:"any",value:s.reward,onChange:x=>a(y=>({...y,reward:x.target.value})),placeholder:"0",style:et.input}),t.jsx("label",{style:et.label,children:"Photo (optional)"}),s.image?t.jsxs("div",{style:et.imgWrap,children:[t.jsx("img",{src:s.image,alt:"",style:et.imgPreview}),t.jsx("button",{onClick:()=>a(x=>({...x,image:""})),style:et.imgRemove,children:t.jsx(Fe,{size:14})})]}):t.jsxs("button",{onClick:()=>{var x;return(x=f.current)==null?void 0:x.click()},style:et.uploadBtn,children:[t.jsx(a0,{size:15})," Add a photo"]}),t.jsx("input",{ref:f,type:"file",accept:"image/*",onChange:u,style:{display:"none"}}),t.jsx("label",{style:et.label,children:"Note (optional)"}),t.jsx("textarea",{value:s.note,onChange:x=>a(y=>({...y,note:x.target.value})),placeholder:"The story behind it…",rows:3,style:{...et.input,resize:"vertical",fontFamily:"inherit"}}),t.jsxs("div",{style:et.modalActions,children:[t.jsx("button",{onClick:()=>a(null),style:et.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:C,disabled:!k||l,style:{...et.saveBtn,...!k||l?{opacity:.5,cursor:"not-allowed"}:{}},children:[t.jsx(He,{size:15})," ",s.id?"Save":"Add"]})]})]})}),g&&t.jsx(X1,{src:g,onCancel:()=>m(null),onKeepOriginal:j,onCrop:x=>{a(y=>({...y,image:x})),m(null)}}),t.jsx(wr,{toasts:B,onUndo:T,onDismiss:z})]})}function Hp({a:e,color:r,side:n,money:o,onEdit:i,onDelete:s}){return t.jsxs("div",{style:{...et.card,borderTop:`3px solid ${r}`,textAlign:n==="left"?"right":"left"},children:[t.jsxs("div",{style:{...et.cardTop,flexDirection:n==="left"?"row-reverse":"row"},children:[t.jsx("span",{style:{...et.dateChip,background:`${r}1A`,color:r},children:Y1(e.date)}),t.jsxs("div",{style:{display:"flex",gap:2},children:[t.jsx("button",{onClick:i,style:et.ghostBtn,title:"Edit",children:t.jsx(jt,{size:13})}),t.jsx("button",{onClick:s,style:et.ghostBtn,title:"Delete",children:t.jsx(Fe,{size:14})})]})]}),t.jsx("div",{style:et.cardTitle,children:e.title}),e.image&&t.jsx("img",{src:e.image,alt:"",style:et.cardImg}),e.note&&t.jsx("div",{style:et.cardNote,children:e.note}),e.reward>0&&t.jsxs("div",{style:{...et.rewardBadge,marginLeft:n==="left"?"auto":0},children:[t.jsx(ks,{size:13})," ",o(e.reward)]})]})}const et={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:22},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},headRight:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},totalBadge:{display:"flex",alignItems:"center",gap:5,background:"rgba(201,162,39,0.12)",border:"1px solid rgba(201,162,39,0.3)",padding:"6px 12px",borderRadius:20,fontSize:12.5,fontWeight:700,color:"#8A6E1A"},addBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},empty:{textAlign:"center",color:"var(--text-3)",padding:"60px 16px",fontSize:14,fontWeight:600},emptySub:{fontSize:12.5,fontWeight:400,marginTop:6,maxWidth:320,marginInline:"auto",lineHeight:1.5},timeline:{position:"relative",maxWidth:1e3,margin:"0 auto",paddingBottom:30},trunk:{position:"absolute",top:8,bottom:8,width:3,background:"linear-gradient(to bottom, var(--border), var(--border))",transform:"translateX(-1.5px)",borderRadius:2},yearRow:{display:"flex",margin:"6px 0 12px"},yearChip:{fontSize:11.5,fontWeight:800,letterSpacing:"0.06em",color:"var(--text-2)",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:"4px 12px",position:"relative",zIndex:2},row:{display:"grid",alignItems:"center",gap:8,marginBottom:16},node:{width:20,height:20,borderRadius:"50%",border:"3px solid",display:"grid",placeItems:"center",zIndex:2,boxShadow:"0 0 0 4px var(--bg)"},nodeDot:{width:7,height:7,borderRadius:"50%"},card:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:"12px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.06)",maxWidth:420,width:"100%",boxSizing:"border-box"},cardTop:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,marginBottom:7},dateChip:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:12,whiteSpace:"nowrap"},cardTitle:{fontSize:15,fontWeight:700,letterSpacing:"-0.01em",lineHeight:1.3,wordBreak:"break-word"},cardImg:{width:"100%",maxHeight:220,objectFit:"cover",borderRadius:9,marginTop:9,display:"block"},cardNote:{fontSize:12.5,color:"var(--text-2)",marginTop:7,lineHeight:1.5,whiteSpace:"pre-wrap",wordBreak:"break-word"},rewardBadge:{display:"inline-flex",alignItems:"center",gap:5,marginTop:9,background:"rgba(201,162,39,0.12)",color:"#8A6E1A",border:"1px solid rgba(201,162,39,0.3)",padding:"3px 10px",borderRadius:14,fontSize:12,fontWeight:700},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",borderRadius:6},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:60,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:460,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},label:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)"},formRow:{display:"flex",gap:10},uploadBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:7,width:"100%",border:"1.5px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"11px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},imgWrap:{position:"relative",borderRadius:10,overflow:"hidden"},imgPreview:{width:"100%",maxHeight:220,objectFit:"cover",display:"block",borderRadius:10},imgRemove:{position:"absolute",top:8,right:8,border:"none",background:"rgba(0,0,0,0.55)",color:"#fff",width:28,height:28,borderRadius:"50%",cursor:"pointer",display:"grid",placeItems:"center"},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},Sr={overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.62)",zIndex:300,display:"grid",placeItems:"center",padding:16},box:{background:"var(--surface)",borderRadius:16,padding:"18px",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",maxWidth:"92vw"},head:{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:15,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},close:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},frame:{position:"relative",overflow:"hidden",borderRadius:12,background:"#000",cursor:"grab",touchAction:"none",margin:"0 auto",maxWidth:"84vw"},grid:{position:"absolute",inset:0,pointerEvents:"none",boxShadow:"inset 0 0 0 1px rgba(255,255,255,0.5)",backgroundImage:"linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)",backgroundSize:"33.33% 33.33%"},zoomRow:{display:"flex",alignItems:"center",gap:10,marginTop:14},zoomLbl:{fontSize:12,fontWeight:700,color:"var(--text-2)"},hint:{fontSize:11,color:"var(--text-3)",textAlign:"center",marginTop:8},actions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:14,flexWrap:"wrap"},cancel:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},keep:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},apply:{display:"flex",alignItems:"center",gap:6,border:"none",background:"var(--accent-strong)",color:"#fff",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}};function J1(e=760){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const ca=()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},e2=e=>e?new Date(e+"T00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"",rn="#C9772E",Ei=[{id:"todo",label:"Want to",color:"#3A7CA5"},{id:"doing",label:"Enjoying",color:"#C9772E"},{id:"done",label:"Satisfied",color:"#4C9A6B"}],t2=[{id:"text",label:"Text"},{id:"number",label:"Number"},{id:"link",label:"Link"}],hd=e=>(e&&typeof e=="object"?e.type:"text")||"text",$n=e=>(e&&typeof e=="object"?e.name:e)||"";function r2(){const e=J1(),[r,n]=c.useState([]),[o,i]=c.useState(null),[s,a]=c.useState(!1),[l,d]=c.useState(null),[g,m]=c.useState(null),[f,h]=c.useState(null),[R,B]=c.useState(null),[T,z]=c.useState(null),[b,p]=c.useState([]),u=c.useRef({}),j=c.useCallback(()=>{M.getDelight().then(G=>{n(G),i(le=>{var E;return le&&G.some(S=>S.id===le)?le:((E=G[0])==null?void 0:E.id)??null}),a(!0)}).catch(()=>a(!0))},[]);c.useEffect(()=>{j()},[j]),c.useEffect(()=>{p([])},[o]);const{deleteItem:k,toasts:C,handleUndo:D,handleDismiss:x}=kr(M.deleteDelightItem,M.restoreDelightItem,j),y=r.find(G=>G.id===o)||null,_=c.useMemo(()=>{const G={todo:[],doing:[],done:[]};return((y==null?void 0:y.items)||[]).forEach(le=>{(G[le.status]||G.todo).push(le)}),Object.values(G).forEach(le=>le.sort((E,S)=>E.position-S.position||E.id-S.id)),G},[y]),Z=G=>/^tags?$/i.test($n(G).trim()),ne=G=>((y==null?void 0:y.columns)||[]).filter(Z).flatMap(le=>(G.fields[$n(le)]||"").split(",").map(E=>E.trim()).filter(Boolean)),ue=c.useMemo(()=>{const G=new Set;return((y==null?void 0:y.items)||[]).forEach(le=>(y.columns||[]).filter(Z).forEach(E=>(le.fields[$n(E)]||"").split(",").map(S=>S.trim()).filter(Boolean).forEach(S=>G.add(S)))),[...G].sort((le,E)=>le.localeCompare(E))},[y]),A=c.useMemo(()=>{const G={};return((y==null?void 0:y.columns)||[]).forEach(le=>{const E=$n(le);if(Z(le))return;const S=new Set;((y==null?void 0:y.items)||[]).forEach(ie=>{const fe=(ie.fields[E]||"").trim();fe&&S.add(fe)}),G[E]=[...S].sort((ie,fe)=>ie.localeCompare(fe))}),G},[y]),K=G=>b.length===0||ne(G).some(le=>b.includes(le)),oe=G=>p(le=>le.includes(G)?le.filter(E=>E!==G):[...le,G]),ye=(G,le,E)=>{for(const S of Ei){const ie=u.current[S.id];if(!ie)continue;const fe=ie.getBoundingClientRect();if(G>=fe.left&&G<=fe.right&&le>=fe.top&&le<=fe.bottom){const U=[...ie.querySelectorAll("[data-card]")].filter(ve=>ve.dataset.id!==String(E));let xe=U.length;for(let ve=0;ve<U.length;ve++){const Ae=U[ve].getBoundingClientRect();if(le<Ae.top+Ae.height/2){xe=ve;break}}return{status:S.id,index:xe}}}return null},X=(G,le)=>{if(G.target.closest("button"))return;const E=G.clientX,S=G.clientY,ie=G.currentTarget;let fe=!1,U=null,xe=null;const ve=tt=>{if(!fe){if(Math.hypot(tt.clientX-E,tt.clientY-S)<6)return;fe=!0;const ft=ie.getBoundingClientRect();xe={id:le.id,item:le,w:ft.width,offX:E-ft.left,offY:S-ft.top}}xe={...xe,x:tt.clientX,y:tt.clientY},B(xe),U=ye(tt.clientX,tt.clientY,le.id)||U,z(U)},Ae=()=>{window.removeEventListener("pointermove",ve),window.removeEventListener("pointerup",Ae),fe&&U&&Y(le,U),B(null),z(null)};window.addEventListener("pointermove",ve),window.addEventListener("pointerup",Ae)},Y=(G,le)=>{const E={};Ei.forEach(U=>{E[U.id]=(_[U.id]||[]).filter(xe=>xe.id!==G.id)});const S=E[le.status]||[];let ie;if(b.length){const U=S.filter(K);ie=le.index<U.length?S.indexOf(U[le.index]):S.length}else ie=Math.max(0,Math.min(le.index,S.length));E[le.status]=[...S.slice(0,ie),{...G,status:le.status},...S.slice(ie)];const fe=[];Ei.forEach(U=>(E[U.id]||[]).forEach((xe,ve)=>fe.push({id:xe.id,status:U.id,position:ve}))),n(U=>U.map(xe=>xe.id===o?{...xe,items:fe.map(ve=>({...xe.items.find(Ae=>Ae.id===ve.id),status:ve.status,position:ve.position}))}:xe)),M.arrangeDelight(o,fe).then(j).catch(j),le.status==="done"&&G.status!=="done"&&h({item:G,date:ca(),note:""})},ce=async G=>{window.confirm(`Delete "${G.name}" and all its items?`)&&(await M.deleteCollection(G.id),j())},J=()=>({name:"",type:"text"}),I=()=>d({id:null,name:"",columns:[J(),J()]}),$=G=>d({id:G.id,name:G.name,columns:G.columns.length?G.columns.map(le=>({name:$n(le),type:hd(le)})):[J()]}),H=async()=>{const G=l.name.trim();if(!G)return;const le=l.columns.map(E=>({name:E.name.trim(),type:E.type||"text"})).filter(E=>E.name);l.id?await M.updateCollection(l.id,{name:G,columns:le}):await M.createCollection({name:G,columns:le}),d(null),j()},P=(G="todo")=>m({id:null,name:"",fields:{},status:G}),ae=G=>m({id:G.id,name:G.name,fields:{...G.fields},status:G.status}),me=async()=>{const G=g.name.trim();if(!G||!y)return;const le=g.id?(y.items||[]).find(fe=>fe.id===g.id):null,E=(le==null?void 0:le.status)==="done",S={name:G,fields:g.fields,status:g.status};let ie;if(g.id?ie=await M.updateDelightItem(g.id,S):ie=await M.createDelightItem(y.id,S),m(null),await j(),g.status==="done"&&!E){const fe=Ne(ie,y.id,G);h({item:fe||{id:g.id,name:G},date:ca(),note:""})}},Ne=(G,le,E)=>{const S=Array.isArray(G)?G.find(fe=>fe.id===le):null;if(!S)return null;const ie=(S.items||[]).filter(fe=>fe.name===E&&fe.status==="done");return ie.length?ie[ie.length-1]:null},Q=async()=>{var G;if(!((G=f==null?void 0:f.item)!=null&&G.id)){h(null);return}await M.updateDelightItem(f.item.id,{completed_date:f.date||ca(),completion_note:f.note||""}),h(null),j()},re=({it:G})=>{const le=y.columns.filter(S=>G.fields[$n(S)]&&!Z(S)),E=ne(G);return t.jsxs("div",{"data-card":!0,"data-id":G.id,onPointerDown:S=>X(S,G),style:ke.itemCard,children:[t.jsxs("div",{style:ke.itemCardTop,children:[t.jsx(el,{size:13,style:{color:"var(--text-3)",flexShrink:0}}),t.jsx("span",{style:ke.itemName,children:G.name}),t.jsx("button",{onClick:()=>ae(G),style:ke.ghostBtn,children:t.jsx(jt,{size:12})}),t.jsx("button",{onClick:()=>k(G.id,G.name),style:ke.ghostBtn,children:t.jsx(Fe,{size:13})})]}),le.map(S=>{const ie=$n(S),fe=G.fields[ie];return t.jsxs("div",{style:ke.itemField,children:[t.jsx("span",{style:ke.fieldLabel,children:ie}),hd(S)==="link"?t.jsx("a",{href:/^https?:\/\//i.test(fe)?fe:`https://${fe}`,target:"_blank",rel:"noreferrer",style:{minWidth:0,wordBreak:"break-word",color:rn},onClick:U=>U.stopPropagation(),children:fe}):t.jsx("span",{style:{minWidth:0,wordBreak:"break-word"},children:fe})]},ie)}),E.length>0&&t.jsx("div",{style:ke.tagWrap,children:E.map((S,ie)=>t.jsx("span",{style:ke.tag,children:S},ie))}),G.status==="done"&&G.completed_date&&t.jsxs("div",{style:ke.doneMeta,children:[t.jsxs("span",{style:ke.doneDate,children:["✓ ",e2(G.completed_date)]}),G.completion_note&&t.jsx("span",{style:ke.doneNote,children:G.completion_note})]})]})};return t.jsxs("div",{style:ke.page,children:[t.jsxs("div",{style:ke.head,children:[t.jsxs("div",{children:[t.jsx("div",{style:ke.eyebrow,children:"Anvil · Delights"}),t.jsx("h1",{style:ke.h1,children:"Delights"}),t.jsx("div",{style:ke.subhead,children:"Books, films, places, food — track what you want to enjoy and how you felt."})]}),t.jsxs("button",{onClick:I,style:ke.addColBtn,children:[t.jsx(bt,{size:15})," New list"]})]}),t.jsxs("div",{style:ke.tabs,children:[r.map(G=>t.jsxs("button",{onClick:()=>i(G.id),style:{...ke.tab,...G.id===o?ke.tabOn:{}},children:[G.name,t.jsx("span",{style:ke.tabCount,children:G.items.length})]},G.id)),t.jsx("button",{onClick:I,style:ke.tabAdd,title:"New list",children:t.jsx(bt,{size:15})})]}),s?y?t.jsxs("div",{children:[t.jsxs("div",{style:ke.colHead,children:[t.jsx("h2",{style:ke.colTitle,children:y.name}),t.jsxs("div",{style:ke.colActions,children:[t.jsxs("button",{onClick:()=>P(),style:ke.primaryBtn,children:[t.jsx(bt,{size:14})," Add"]}),t.jsx("button",{onClick:()=>$(y),style:ke.ghostBtn,title:"Edit list & columns",children:t.jsx(e0,{size:15})}),t.jsx("button",{onClick:()=>ce(y),style:ke.ghostBtn,title:"Delete list",children:t.jsx(Fe,{size:16})})]})]}),ue.length>0&&t.jsxs("div",{style:ke.filterBar,children:[t.jsx("span",{style:ke.filterLabel,children:"Tags"}),t.jsx("button",{onClick:()=>p([]),style:{...ke.filterChip,...b.length===0?ke.filterChipOn:{}},children:"All"}),ue.map(G=>t.jsx("button",{onClick:()=>oe(G),style:{...ke.filterChip,...b.includes(G)?ke.filterChipOn:{}},children:G},G))]}),t.jsx("div",{style:{...ke.board,gridTemplateColumns:e?"1fr":"repeat(3, 1fr)"},children:Ei.map(G=>{const le=(_[G.id]||[]).filter(K),E=R?le.filter(ie=>ie.id!==R.id):le,S=T&&T.status===G.id;return t.jsxs("div",{ref:ie=>u.current[G.id]=ie,style:{...ke.lane,...S?{outline:`2px dashed ${G.color}`,outlineOffset:-2}:{}},children:[t.jsxs("div",{style:ke.laneHead,children:[t.jsx("span",{style:{...ke.laneDot,background:G.color}}),t.jsx("span",{style:ke.laneLabel,children:G.label}),t.jsx("span",{style:ke.laneCount,children:le.length}),t.jsx("button",{onClick:()=>P(G.id),style:ke.laneAdd,title:`Add to ${G.label}`,children:t.jsx(bt,{size:13})})]}),t.jsxs("div",{style:ke.laneBody,children:[E.map((ie,fe)=>t.jsxs("div",{children:[S&&T.index===fe&&t.jsx("div",{style:{...ke.insertLine,background:G.color}}),t.jsx(re,{it:ie})]},ie.id)),S&&T.index>=E.length&&t.jsx("div",{style:{...ke.insertLine,background:G.color}}),E.length===0&&!S&&t.jsx("div",{style:ke.laneEmpty,children:"Drop here"})]})]},G.id)})})]}):t.jsxs("div",{style:ke.empty,children:[t.jsx(zg,{size:28,color:"var(--text-3)"}),t.jsx("div",{style:{marginTop:10},children:"No lists yet."}),t.jsxs("button",{onClick:I,style:{...ke.addColBtn,marginTop:14},children:[t.jsx(bt,{size:15})," Create your first list"]})]}):t.jsx("div",{style:ke.muted,children:"Loading…"}),R&&t.jsx("div",{style:{...ke.ghost,width:R.w,left:R.x-R.offX,top:R.y-R.offY},children:t.jsxs("div",{style:ke.itemCardTop,children:[t.jsx(el,{size:13,style:{color:"var(--text-3)",flexShrink:0}}),t.jsx("span",{style:ke.itemName,children:R.item.name})]})}),l&&t.jsx("div",{style:ke.overlay,onClick:()=>d(null),children:t.jsxs("div",{style:ke.modal,onClick:G=>G.stopPropagation(),children:[t.jsxs("div",{style:ke.modalHead,children:[t.jsx("span",{style:ke.modalTitle,children:l.id?"Edit list":"New list"}),t.jsx("button",{onClick:()=>d(null),style:ke.iconBtn,children:t.jsx(Fe,{size:16})})]}),t.jsx("label",{style:ke.label,children:"List name *"}),t.jsx("input",{autoFocus:!0,value:l.name,onChange:G=>d(le=>({...le,name:G.target.value})),placeholder:"e.g. Gardens, Cafés, Trips…",style:ke.input}),t.jsx("label",{style:ke.label,children:"Columns"}),t.jsx("div",{style:ke.muted2,children:"Name the details you want to track (e.g. Author, Distance, Tag)."}),l.columns.map((G,le)=>t.jsxs("div",{style:ke.colRow,children:[t.jsx("input",{value:G.name,placeholder:`Column ${le+1}`,onChange:E=>d(S=>{const ie=[...S.columns];return ie[le]={...ie[le],name:E.target.value},{...S,columns:ie}}),style:{...ke.input,marginBottom:0,flex:1}}),t.jsx("select",{value:G.type,onChange:E=>d(S=>{const ie=[...S.columns];return ie[le]={...ie[le],type:E.target.value},{...S,columns:ie}}),style:ke.colTypeSelect,children:t2.map(E=>t.jsx("option",{value:E.id,children:E.label},E.id))}),t.jsx("button",{onClick:()=>d(E=>({...E,columns:E.columns.filter((S,ie)=>ie!==le)})),style:ke.iconBtn,children:t.jsx(Fe,{size:14})})]},le)),l.columns.length<6&&t.jsxs("button",{onClick:()=>d(G=>({...G,columns:[...G.columns,J()]})),style:ke.addColInline,children:[t.jsx(bt,{size:13})," Add column"]}),t.jsxs("div",{style:ke.modalActions,children:[t.jsx("button",{onClick:()=>d(null),style:ke.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:H,disabled:!l.name.trim(),style:{...ke.saveBtn,...l.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," ",l.id?"Save":"Create"]})]})]})}),g&&y&&t.jsx("div",{style:ke.overlay,onClick:()=>m(null),children:t.jsxs("div",{style:ke.modal,onClick:G=>G.stopPropagation(),children:[t.jsxs("div",{style:ke.modalHead,children:[t.jsx("span",{style:ke.modalTitle,children:g.id?"Edit":`Add to ${y.name}`}),t.jsx("button",{onClick:()=>m(null),style:ke.iconBtn,children:t.jsx(Fe,{size:16})})]}),t.jsx("label",{style:ke.label,children:"Name *"}),t.jsx("input",{autoFocus:!0,value:g.name,onChange:G=>m(le=>({...le,name:G.target.value})),onKeyDown:G=>G.key==="Enter"&&me(),placeholder:"Title / name",style:ke.input}),y.columns.map(G=>{const le=$n(G),E=hd(G),S=`dl-${y.id}-${le}`,ie=A[le]||[];return t.jsxs("div",{children:[t.jsx("label",{style:ke.label,children:le}),t.jsx("input",{value:g.fields[le]||"",type:E==="number"?"number":E==="link"?"url":"text",list:ie.length?S:void 0,onChange:fe=>m(U=>({...U,fields:{...U.fields,[le]:fe.target.value}})),placeholder:E==="link"?"https://…":le,style:ke.input}),ie.length>0&&t.jsx("datalist",{id:S,children:ie.map(fe=>t.jsx("option",{value:fe},fe))})]},le)}),t.jsx("label",{style:ke.label,children:"Status"}),t.jsx("div",{style:ke.statusPick,children:Ei.map(G=>t.jsx("button",{type:"button",onClick:()=>m(le=>({...le,status:G.id})),style:{...ke.statusChip,...g.status===G.id?{background:G.color,color:"#fff",border:`1px solid ${G.color}`}:{}},children:G.label},G.id))}),t.jsxs("div",{style:ke.modalActions,children:[t.jsx("button",{onClick:()=>m(null),style:ke.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:me,disabled:!g.name.trim(),style:{...ke.saveBtn,...g.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," ",g.id?"Save":"Add"]})]})]})}),f&&t.jsx("div",{style:ke.overlay,onClick:()=>h(null),children:t.jsxs("div",{style:{...ke.modal,maxWidth:380},onClick:G=>G.stopPropagation(),children:[t.jsxs("div",{style:ke.modalHead,children:[t.jsx("span",{style:ke.modalTitle,children:"Satisfied! 🎉"}),t.jsx("button",{onClick:()=>h(null),style:ke.iconBtn,children:t.jsx(Fe,{size:16})})]}),t.jsxs("div",{style:ke.muted2,children:['"',f.item.name,'" — when did you complete it?']}),t.jsx("label",{style:ke.label,children:"Completed on"}),t.jsx("input",{type:"date",value:f.date,max:ca(),onChange:G=>h(le=>({...le,date:G.target.value})),style:ke.input}),t.jsx("label",{style:ke.label,children:"Comment (optional)"}),t.jsx("textarea",{value:f.note,onChange:G=>h(le=>({...le,note:G.target.value})),placeholder:"How was it?",style:{...ke.input,minHeight:64,resize:"vertical"}}),t.jsxs("div",{style:ke.modalActions,children:[t.jsx("button",{onClick:()=>h(null),style:ke.cancelBtn,children:"Skip"}),t.jsxs("button",{onClick:Q,style:ke.saveBtn,children:[t.jsx(He,{size:15})," Save"]})]})]})}),t.jsx(wr,{toasts:C,onUndo:D,onDismiss:x})]})}const ke={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box"},head:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},addColBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"none",background:rn,color:"#fff",padding:"8px 14px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tabs:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16,alignItems:"center"},tab:{display:"inline-flex",alignItems:"center",gap:7,border:"1px solid var(--border)",background:"var(--surface)",padding:"7px 13px",borderRadius:20,fontSize:13,fontWeight:600,color:"var(--text-2)",cursor:"pointer",fontFamily:"inherit"},tabOn:{background:rn,color:"#fff",borderColor:rn},tabCount:{fontSize:10.5,fontWeight:700,background:"rgba(0,0,0,0.12)",borderRadius:9,padding:"1px 6px"},tabAdd:{border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",width:32,height:32,borderRadius:"50%",cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},colHead:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:10,marginBottom:12,flexWrap:"wrap"},colTitle:{fontSize:18,fontWeight:700,margin:0,fontFamily:"'Fraunces',Georgia,serif"},colActions:{display:"flex",gap:6,alignItems:"center"},primaryBtn:{display:"inline-flex",alignItems:"center",gap:5,border:"none",background:rn,color:"#fff",padding:"7px 13px",borderRadius:8,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},ghostBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",borderRadius:6,flexShrink:0},filterBar:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center",marginBottom:14},filterLabel:{fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--text-3)",marginRight:2},filterChip:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"5px 11px",borderRadius:16,fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},filterChipOn:{background:rn,color:"#fff",borderColor:rn},board:{display:"grid",gap:12,alignItems:"start"},lane:{background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:12,padding:"10px 10px 12px",minHeight:120,display:"flex",flexDirection:"column"},laneHead:{display:"flex",alignItems:"center",gap:7,padding:"2px 4px 10px"},laneDot:{width:9,height:9,borderRadius:"50%",flexShrink:0},laneLabel:{fontSize:12.5,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--text-2)"},laneCount:{fontSize:10.5,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:9,padding:"1px 6px"},laneAdd:{marginLeft:"auto",border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",display:"grid",placeItems:"center",padding:2,borderRadius:6},laneBody:{display:"flex",flexDirection:"column",gap:8,minHeight:40,flex:1},laneEmpty:{fontSize:12,color:"var(--text-3)",fontStyle:"italic",textAlign:"center",padding:"16px 0",border:"1px dashed var(--border)",borderRadius:8},insertLine:{height:3,borderRadius:2,margin:"1px 0"},itemCard:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"9px 10px",boxShadow:"0 1px 2px rgba(0,0,0,0.05)",cursor:"grab",touchAction:"none",userSelect:"none"},itemCardTop:{display:"flex",alignItems:"center",gap:6},itemName:{flex:1,minWidth:0,fontSize:13.5,fontWeight:700,wordBreak:"break-word"},itemField:{display:"flex",gap:8,fontSize:12,color:"var(--text-2)",marginTop:5,paddingLeft:19},fieldLabel:{fontWeight:700,color:"var(--text-3)",minWidth:64,flexShrink:0},tagWrap:{display:"flex",flexWrap:"wrap",gap:5,marginTop:8,paddingLeft:19},tag:{fontSize:10.5,fontWeight:700,color:rn,background:"color-mix(in srgb, "+rn+" 14%, transparent)",border:"1px solid color-mix(in srgb, "+rn+" 30%, transparent)",borderRadius:12,padding:"2px 8px",whiteSpace:"nowrap"},doneMeta:{marginTop:8,paddingLeft:19,display:"flex",flexDirection:"column",gap:3},doneDate:{fontSize:11,fontWeight:700,color:"#4C9A6B"},doneNote:{fontSize:11.5,color:"var(--text-2)",fontStyle:"italic",wordBreak:"break-word"},ghost:{position:"fixed",zIndex:300,pointerEvents:"none",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"9px 10px",boxShadow:"0 8px 28px rgba(0,0,0,0.28)",opacity:.95,transform:"rotate(1.5deg)"},muted:{fontSize:13,color:"var(--text-3)"},muted2:{fontSize:11.5,color:"var(--text-3)",marginBottom:8},empty:{textAlign:"center",color:"var(--text-3)",padding:"50px 16px",fontSize:14,fontWeight:600,display:"flex",flexDirection:"column",alignItems:"center"},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)",marginBottom:8},colRow:{display:"flex",gap:6,alignItems:"center",marginBottom:8},colTypeSelect:{border:"1px solid var(--border)",borderRadius:9,padding:"9px 8px",fontSize:12.5,fontFamily:"inherit",outline:"none",background:"var(--bg)",color:"var(--text)",flexShrink:0},addColInline:{display:"inline-flex",alignItems:"center",gap:5,border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"7px 12px",borderRadius:8,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},statusPick:{display:"flex",gap:6,flexWrap:"wrap"},statusChip:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 13px",borderRadius:18,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},Mr="#C9772E",qh={Carrot:Ky,ShoppingCart:T0,Clapperboard:qy,ShoppingBag:Bh,Fuel:o0,Sparkles:Eo,Shirt:z0,WashingMachine:F0,Zap:Rg,Tv:A0,Droplet:t0,Coffee:Zy,Utensils:E0,Bus:Oy,Train:R0,Plane:k0,Home:ws,Heart:xh,Gift:ks,Book:$y,Dumbbell:r0,Pill:j0,Phone:v0,Wifi:W0,Gamepad2:i0,Music:Cg,Scissors:Th,PawPrint:y0,Baby:My,GraduationCap:hh,Briefcase:Ny,Car:Yy,Bike:_y},Gr=({name:e,...r})=>{const n=qh[e]||Bh;return t.jsx(n,{...r})},fd=["#C9772E","#4C9A6B","#3A7CA5","#8268B0","#C2536B","#C9A227","#D1556E","#5B7C99","#A23E57","#3E9E6B"],Cc=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,xd=Cc(new Date),$o=120;function n2(e=760){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}function o2(){const e=n2(),r=uo(),n=Ag(),[o,i]=c.useState([]),[s,a]=c.useState([]),[l,d]=c.useState([]),[g,m]=c.useState([]),[f,h]=c.useState(!1),[R,B]=c.useState(xd),[T,z]=c.useState(()=>new Date),[b,p]=c.useState(null),[u,j]=c.useState(null),[k,C]=c.useState(new Set),[D,x]=c.useState(!1),y=W=>C(ge=>{const We=new Set(ge);return We.has(W)?We.delete(W):We.add(W),We}),_=()=>{x(W=>!W),C(new Set)},Z=D||k.size>0,ne=()=>{x(!1),C(new Set)},[ue,A]=c.useState(null),[K,oe]=c.useState(!1),[ye,X]=c.useState("day"),[Y,ce]=c.useState(()=>or(new Date,n)[0]),[J,I]=c.useState(new Set),$=W=>I(ge=>{const We=new Set(ge);return We.has(W)?We.delete(W):We.add(W),We}),H=c.useCallback(()=>{Promise.all([M.getExpenses(),M.getTxns(),M.getInvestments()]).then(([W,ge,We])=>{i(W.categories),a(W.logs),d(Array.isArray(ge)?ge:[]),m(Array.isArray(We)?We:[]),h(!0)}).catch(()=>h(!0))},[]);c.useEffect(()=>{H()},[H]);const{deleteItem:P,toasts:ae,handleUndo:me,handleDismiss:Ne}=kr(M.deleteExpenseLog,M.restoreExpenseLog,H),Q=c.useMemo(()=>{const W={};return o.forEach(ge=>W[ge.id]=ge),W},[o]),re=W=>Cs(W,r.code),G=c.useMemo(()=>s.filter(W=>W.date===R),[s,R]),le=G.reduce((W,ge)=>W+ge.amount,0),E=c.useMemo(()=>{const[W,ge]=or(new Date,n),We=L=>L>=W&&L<=ge,Ye=l.filter(L=>L.kind==="income"&&We(L.date)).reduce((L,Te)=>L+Te.amount,0),wt=l.filter(L=>L.kind==="expense"&&We(L.date)).reduce((L,Te)=>L+Te.amount,0),Ue=s.filter(L=>We(L.date)).reduce((L,Te)=>L+Te.amount,0),Ke=g.filter(L=>We(L.date)).reduce((L,Te)=>L+Te.invested,0),Ct=Ye-wt-Ue-Ke,Fr=Math.max(1,Math.round((new Date(ge+"T00:00")-new Date(xd+"T00:00"))/864e5)+1);return{remaining:Ct,daysLeft:Fr,perDay:Ct/Fr}},[l,s,g,n]),S=c.useMemo(()=>{const W=We=>{const Ye=new Date;return Ye.setDate(Ye.getDate()+We),Cc(Ye)},ge=We=>s.filter(Ye=>Ye.date===We).reduce((Ye,wt)=>Ye+wt.amount,0);return[{label:"Today",value:ge(W(0)),color:Mr},{label:"Yesterday",value:ge(W(-1)),color:"var(--text-3)"},{label:"Day before",value:ge(W(-2)),color:"var(--text-3)"}]},[s]),ie=c.useMemo(()=>{if(ye==="day")return G;if(ye==="month"){const[W,ge]=or(new Date(R+"T00:00"),n);return s.filter(We=>We.date>=W&&We.date<=ge)}if(ye==="year"){const W=R.slice(0,4);return s.filter(ge=>ge.date.slice(0,4)===W)}return s},[s,G,ye,R,n]),fe=ie.reduce((W,ge)=>W+ge.amount,0),U=c.useMemo(()=>{const W={};return ie.forEach(ge=>{W[ge.category_id]=(W[ge.category_id]||0)+ge.amount}),Object.entries(W).map(([ge,We])=>({cat:Q[ge],amount:We})).filter(ge=>ge.cat).sort((ge,We)=>We.amount-ge.amount)},[ie,Q]),xe=W=>or(new Date(W+"T00:00"),n)[0],ve=c.useMemo(()=>{const W=new Set(s.map(ge=>xe(ge.date)));return W.add(or(new Date,n)[0]),Array.from(W).sort().reverse().slice(0,12)},[s,n]),Ae=W=>new Date(W+"T00:00").toLocaleDateString("en-US",{month:"short",year:"numeric"}),tt=(W,ge)=>or(new Date(W+"T00:00"),n,-ge)[0],ft=W=>J.size===0||J.has(W.category_id),_e=[Y,tt(Y,1),tt(Y,2)],it=_e.map(W=>{const[ge,We]=or(new Date(W+"T00:00"),n);return s.filter(Ye=>Ye.date>=ge&&Ye.date<=We&&ft(Ye)).reduce((Ye,wt)=>Ye+wt.amount,0)}),[Ze,st,de]=it,Me=st>0?Math.round((Ze-st)/st*100):Ze>0?100:0,lt=Me>0?Ji:Me<0?ro:kh,dt=Me>0?"#C2536B":Me<0?"#4C9A6B":"#9A968C",kt=c.useMemo(()=>{const[W,ge]=or(new Date(Y+"T00:00"),n),We={};return s.filter(Ye=>Ye.date>=W&&Ye.date<=ge&&ft(Ye)).forEach(Ye=>{We[Ye.category_id]=(We[Ye.category_id]||0)+Ye.amount}),Object.entries(We).map(([Ye,wt])=>({cat:Q[Ye],amount:wt})).filter(Ye=>Ye.cat).sort((Ye,wt)=>wt.amount-Ye.amount)},[s,Y,J,Q,n]);let Nt=0;const Xt=kt.map(W=>{const ge=Ze>0?Nt/Ze*100:0;Nt+=W.amount;const We=Ze>0?Nt/Ze*100:0;return{...W,start:ge,end:We,pct:Ze>0?W.amount/Ze*100:0}}),Bt=Xt.length?`conic-gradient(${Xt.map(W=>`${W.cat.color} ${W.start}% ${W.end}%`).join(", ")})`:"var(--surface-2)",Vt=c.useMemo(()=>{const[W,ge]=or(T,n),We=new Date(W+"T00:00"),Ye=new Date(ge+"T00:00"),wt=(We.getDay()+6)%7,Ue={};s.forEach(Ct=>{Ct.date>=W&&Ct.date<=ge&&(Ue[Ct.date]=(Ue[Ct.date]||0)+Ct.amount)});const Ke=[];for(let Ct=0;Ct<wt;Ct++)Ke.push(null);for(let Ct=new Date(We);Ct<=Ye;Ct.setDate(Ct.getDate()+1)){const Fr=Cc(Ct);Ke.push({date:Fr,day:Ct.getDate(),total:Ue[Fr]||0})}return Ke},[T,s,n]),Ot=W=>z(ge=>{const[We]=or(ge,n,W);return new Date(We+"T00:00")}),mr=c.useMemo(()=>{const[W,ge]=or(T,n);if(n===1)return new Date(W+"T00:00").toLocaleDateString("en-US",{month:"long",year:"numeric"});const We=Ye=>new Date(Ye+"T00:00").toLocaleDateString("en-US",{day:"numeric",month:"short"});return`${We(W)} – ${We(ge)}`},[T,n]),Ge=W=>p({cat:W,amount:"",note:""}),ot=async()=>{const W=parseFloat(b.amount);!W||W<=0||(await M.createExpenseLog({category_id:b.cat.id,amount:W,note:b.note.trim().slice(0,$o),date:R}),p(null),H())},xt=W=>j({id:W.id,category_id:W.category_id,amount:String(W.amount),note:W.note||"",date:W.date}),ut=async()=>{const W=parseFloat(u.amount);!W||W<=0||(await M.updateExpenseLog(u.id,{category_id:u.category_id,amount:W,note:u.note.trim().slice(0,$o),date:u.date}),j(null),H())},Rt=()=>A({id:null,name:"",icon:"ShoppingBag",color:fd[o.length%fd.length]}),Ar=W=>A({id:W.id,name:W.name,icon:W.icon,color:W.color}),yt=async()=>{const W=ue.name.trim();W&&(ue.id?await M.updateExpenseCategory(ue.id,{name:W,icon:ue.icon,color:ue.color}):await M.createExpenseCategory({name:W,icon:ue.icon,color:ue.color}),A(null),H())},Er=async W=>{const ge=s.filter(Ye=>Ye.category_id===W.id).length,We=ge>0?`Delete "${W.name}"? Its ${ge} transaction${ge===1?"":"s"} will be moved to "Other".`:`Delete "${W.name}"?`;window.confirm(We)&&(await M.deleteExpenseCategory(W.id),H())},$t=async(W,ge)=>{const We=W+ge;if(We<0||We>=o.length)return;const Ye=[...o];[Ye[W],Ye[We]]=[Ye[We],Ye[W]],i(Ye),await M.arrangeExpenseCategories(Ye.map(wt=>wt.id)).catch(()=>{}),H()},gn=new Date(R+"T00:00").toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"});let qt=0;const tr=U.map(W=>{const ge=fe>0?qt/fe*100:0;qt+=W.amount;const We=fe>0?qt/fe*100:0;return{...W,start:ge,end:We,pct:fe>0?W.amount/fe*100:0}}),hr=tr.length?`conic-gradient(${tr.map(W=>`${W.cat.color} ${W.start}% ${W.end}%`).join(", ")})`:"var(--surface-2)";return t.jsxs("div",{style:{...N.page,...e?{padding:"20px 14px"}:{}},children:[t.jsx("div",{style:N.head,children:t.jsxs("div",{children:[t.jsx("div",{style:N.eyebrow,children:"Anvil · Expenses"}),t.jsx("h1",{style:N.h1,children:"Expenses"}),t.jsx("div",{style:N.subhead,children:"Log day-to-day spending by category and see where it goes."})]})}),t.jsxs("div",{style:N.totalCard,children:[t.jsxs("div",{style:N.totalLeft,children:[t.jsx(Tg,{size:20,color:Mr}),t.jsxs("div",{children:[t.jsxs("div",{style:N.totalLabel,children:["Total spent ",ye==="day"?"today":ye==="month"?"this month":ye==="year"?"this year":"all time"]}),t.jsx("div",{style:N.totalVal,children:re(fe)}),t.jsx("div",{style:{...N.budgetLine,color:E.perDay>=0?"#4C9A6B":"#C2536B"},children:E.perDay>=0?t.jsxs(t.Fragment,{children:["You can spend ≈ ",t.jsxs("b",{children:[re(E.perDay),"/day"]})," · ",E.daysLeft," day",E.daysLeft===1?"":"s"," till next cycle"]}):t.jsxs(t.Fragment,{children:["Overspent this cycle by ",re(Math.abs(E.remaining))," · ",E.daysLeft," day",E.daysLeft===1?"":"s"," left"]})})]})]}),t.jsx("div",{style:N.scopeRow,children:[["day","Day"],["month","Month"],["year","Year"],["all","All"]].map(([W,ge])=>t.jsx("button",{onClick:()=>X(W),style:{...N.scopeBtn,...ye===W?N.scopeBtnOn:{}},children:ge},W))})]}),t.jsxs("div",{style:{...N.card,marginBottom:16},children:[t.jsx("div",{style:N.threeDayTitle,children:"Last 3 days"}),t.jsx(Gp,{items:S,money:re})]}),t.jsxs("div",{style:{...N.cols,gridTemplateColumns:e?"minmax(0,1fr)":"320px minmax(0,1fr)"},children:[t.jsxs("div",{style:{...N.card,minWidth:0,...e?{padding:12}:{}},children:[t.jsxs("div",{style:N.calHead,children:[t.jsx("button",{onClick:()=>Ot(-1),style:N.calNav,children:t.jsx(An,{size:16})}),t.jsx("span",{style:N.calTitle,children:mr}),t.jsx("button",{onClick:()=>Ot(1),style:N.calNav,children:t.jsx(cn,{size:16})})]}),t.jsxs("div",{style:N.calGrid,children:[["M","T","W","T","F","S","S"].map((W,ge)=>t.jsx("div",{style:N.calDow,children:W},ge)),Vt.map((W,ge)=>W===null?t.jsx("div",{},ge):t.jsxs("button",{onClick:()=>B(W.date),style:{...N.calCell,...W.date===R?N.calCellOn:{},...W.date===xd&&W.date!==R?N.calCellToday:{}},children:[t.jsx("span",{children:W.day}),W.total>0&&t.jsx("span",{style:{...N.calDot,background:W.date===R?"#fff":Mr}})]},W.date))]})]}),t.jsxs("div",{children:[t.jsxs("div",{style:N.card,children:[t.jsxs("div",{style:N.cardTitleRow,children:[t.jsxs("div",{children:[t.jsx("div",{style:N.cardTitle,children:gn}),t.jsx("div",{style:N.cardSub,children:"Tap a category to log an expense for this day."})]}),t.jsx("div",{style:N.dayTotal,children:re(le)})]}),t.jsxs("div",{style:N.iconGrid,children:[o.map(W=>t.jsxs("div",{style:N.iconCell,children:[t.jsx("button",{onClick:()=>Ge(W),style:{...N.iconBtn,background:W.color+"1A",color:W.color,borderColor:W.color+"44"},children:t.jsx(Gr,{name:W.icon,size:22})}),t.jsx("span",{style:N.iconLabel,children:W.name})]},W.id)),t.jsxs("div",{style:N.iconCell,children:[t.jsx("button",{onClick:Rt,style:N.iconBtnAdd,children:t.jsx(bt,{size:20})}),t.jsx("span",{style:N.iconLabel,children:"Add"})]})]}),t.jsxs("button",{onClick:()=>oe(!0),style:N.manageLink,children:[t.jsx(jt,{size:11})," Customize categories"]}),G.length>0&&t.jsx("div",{style:N.logList,children:G.map(W=>{const ge=Q[W.category_id];return t.jsxs("div",{style:N.logRow,children:[t.jsx("span",{style:{...N.logIcon,background:((ge==null?void 0:ge.color)||"#9A968C")+"1A",color:(ge==null?void 0:ge.color)||"#9A968C"},children:t.jsx(Gr,{name:ge==null?void 0:ge.icon,size:14})}),t.jsxs("button",{onClick:()=>xt(W),style:N.logInfoBtn,title:"Edit this expense",children:[t.jsx("div",{style:N.logCat,children:(ge==null?void 0:ge.name)||"Deleted category"}),W.note&&t.jsx("div",{style:N.logNote,children:W.note})]}),t.jsx("span",{style:N.logAmt,children:re(W.amount)}),t.jsx("button",{onClick:()=>xt(W),style:N.editBtn,title:"Edit",children:t.jsx(jt,{size:13})}),t.jsx("button",{onClick:()=>P(W.id,(ge==null?void 0:ge.name)||"Expense"),style:N.delBtn,children:t.jsx(Fe,{size:14})})]},W.id)})})]}),t.jsxs("div",{style:N.card,children:[t.jsx("div",{style:N.cardTitleRow,children:t.jsxs("div",{children:[t.jsx("div",{style:N.cardTitle,children:"Spending by category"}),t.jsxs("div",{style:N.cardSub,children:[ye==="day"?"Today":ye==="month"?"This month":ye==="year"?"This year":"All time"," — percentage & amount"]})]})}),U.length===0?t.jsx("div",{style:N.muted,children:"No expenses logged for this period yet."}):t.jsxs("div",{style:N.pieWrap,children:[t.jsxs("div",{style:N.pieChart,children:[t.jsx("div",{style:{...N.pieDisc,background:hr}}),t.jsxs("div",{style:N.pieHole,children:[t.jsx("span",{style:N.pieHoleVal,children:re(fe)}),t.jsx("span",{style:N.pieHoleLbl,children:"total"})]})]}),t.jsxs("div",{style:N.pieLegend,children:[tr.map(W=>{const ge=k.has(W.cat.id);return t.jsxs("button",{onClick:()=>{x(!1),y(W.cat.id)},title:"Show these expenses",style:{...N.legendRow,...N.legendRowBtn,...ge?{background:W.cat.color+"1A"}:{}},children:[t.jsx("span",{style:{...N.dot,background:W.cat.color}}),t.jsx(Gr,{name:W.cat.icon,size:13,style:{color:W.cat.color,flexShrink:0}}),t.jsx("span",{style:N.legendName,children:W.cat.name}),t.jsxs("span",{style:N.legendPct,children:[Math.round(W.pct),"%"]}),t.jsx("span",{style:N.legendAmt,children:re(W.amount)}),ge&&t.jsx(He,{size:13,style:{color:W.cat.color,flexShrink:0}})]},W.cat.id)}),t.jsxs("button",{onClick:_,title:"Show every transaction in this period",style:{...N.legendRow,...N.legendRowBtn,...D?{background:"var(--hover)"}:{}},children:[t.jsx(No,{size:13,style:{color:"var(--text-2)",flexShrink:0}}),t.jsx("span",{style:{...N.legendName,fontWeight:700},children:"All categories"}),t.jsx("span",{style:N.legendAmt,children:re(fe)})]})]})]}),Z&&(()=>{const W=ie.filter(Ue=>D||k.has(Ue.category_id)).slice().sort((Ue,Ke)=>Ke.date.localeCompare(Ue.date)||Ke.id-Ue.id),ge=W.reduce((Ue,Ke)=>Ue+Ke.amount,0),We=D?[]:[...k].map(Ue=>Q[Ue]).filter(Boolean),Ye=D?"All categories":We.map(Ue=>Ue.name).join(", ")||"Category",wt=D||We.length>1;return t.jsxs("div",{style:N.drillBox,children:[t.jsxs("div",{style:N.drillHead,children:[t.jsx("span",{style:{...N.iconBadge,background:(!D&&We.length===1?We[0].color:"#9A968C")+"1A",color:!D&&We.length===1?We[0].color:"#9A968C"},children:D||We.length!==1?t.jsx(No,{size:15}):t.jsx(Gr,{name:We[0].icon,size:15})}),t.jsxs("span",{style:N.drillTitle,children:[Ye," · ",W.length," transaction",W.length===1?"":"s"," · ",re(ge)]}),t.jsx("button",{onClick:ne,style:N.delBtn,title:"Close",children:t.jsx(Fe,{size:15})})]}),W.length===0?t.jsx("div",{style:N.muted,children:"No expenses in this period."}):t.jsx("div",{style:{...N.logList,...N.drillList},children:W.map(Ue=>{const Ke=Q[Ue.category_id];return t.jsxs("div",{style:N.logRow,children:[wt&&t.jsx("span",{style:{...N.logIcon,background:((Ke==null?void 0:Ke.color)||"#9A968C")+"1A",color:(Ke==null?void 0:Ke.color)||"#9A968C"},children:t.jsx(Gr,{name:Ke==null?void 0:Ke.icon,size:14})}),t.jsxs("button",{onClick:()=>xt(Ue),style:N.logInfoBtn,title:"Edit this expense",children:[t.jsxs("div",{style:N.logCat,children:[wt?`${(Ke==null?void 0:Ke.name)||"Other"} · `:"",new Date(Ue.date+"T00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",year:"numeric"})]}),Ue.note&&t.jsx("div",{style:N.logNote,children:Ue.note})]}),t.jsx("span",{style:N.logAmt,children:re(Ue.amount)}),t.jsx("button",{onClick:()=>xt(Ue),style:N.editBtn,title:"Edit",children:t.jsx(jt,{size:13})}),t.jsx("button",{onClick:()=>P(Ue.id,(Ke==null?void 0:Ke.name)||"Expense"),style:N.delBtn,children:t.jsx(Fe,{size:14})})]},Ue.id)})})]})})()]}),t.jsxs("div",{style:N.card,children:[t.jsx("div",{style:N.cardTitleRow,children:t.jsxs("div",{children:[t.jsx("div",{style:N.cardTitle,children:"Monthly trend"}),t.jsx("div",{style:N.cardSub,children:"Compare a month against the previous two"})]})}),t.jsx("div",{style:N.tagRow,children:ve.map(W=>t.jsxs("button",{onClick:()=>ce(W),style:{...N.tagChip,...Y===W?N.tagChipOn:{}},children:[t.jsx(No,{size:11})," ",Ae(W)]},W))}),t.jsxs("div",{style:{...N.tagRow,marginTop:8},children:[t.jsxs("button",{onClick:()=>I(new Set),style:{...N.tagChip,...J.size===0?N.tagChipOn:{}},children:[t.jsx(No,{size:11})," All categories"]}),o.map(W=>{const ge=J.has(W.id);return t.jsxs("button",{onClick:()=>$(W.id),style:{...N.tagChip,...ge?N.tagChipOn:{}},children:[t.jsx(Gr,{name:W.icon,size:11})," ",W.name,ge&&t.jsx(He,{size:11,style:{marginLeft:2}})]},W.id)})]}),t.jsxs("div",{style:{...N.trend3,marginTop:16},children:[t.jsxs("div",{style:N.trendCol,children:[t.jsx("div",{style:N.trendVal,children:re(Ze)}),t.jsx("div",{style:N.trendLbl,children:Ae(_e[0])})]}),t.jsxs("div",{style:N.trendCol,children:[t.jsx("div",{style:{...N.trendVal,color:"var(--text-2)"},children:re(st)}),t.jsx("div",{style:N.trendLbl,children:Ae(_e[1])})]}),t.jsxs("div",{style:N.trendCol,children:[t.jsx("div",{style:{...N.trendVal,color:"var(--text-3)"},children:re(de)}),t.jsx("div",{style:N.trendLbl,children:Ae(_e[2])})]})]}),t.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:14},children:t.jsxs("div",{style:{...N.trendBadge,color:dt,background:dt+"1A"},children:[t.jsx(lt,{size:15})," ",Me>0?"+":"",Me,"% vs ",Ae(_e[1])]})}),t.jsx(Gp,{items:[{label:Ae(_e[0]),value:Ze,color:Mr},{label:Ae(_e[1]),value:st,color:"var(--text-3)"},{label:Ae(_e[2]),value:de,color:"var(--text-3)"}],money:re}),t.jsx("div",{style:N.trendDivider}),t.jsxs("div",{style:N.cardSub,children:["Category split for ",Ae(Y)]}),kt.length===0?t.jsx("div",{style:N.muted,children:"No expenses logged for this month yet."}):t.jsxs("div",{style:{...N.pieWrap,marginTop:10},children:[t.jsxs("div",{style:N.pieChart,children:[t.jsx("div",{style:{...N.pieDisc,background:Bt}}),t.jsxs("div",{style:N.pieHole,children:[t.jsx("span",{style:N.pieHoleVal,children:re(Ze)}),t.jsx("span",{style:N.pieHoleLbl,children:"total"})]})]}),t.jsx("div",{style:N.pieLegend,children:Xt.map(W=>t.jsxs("div",{style:N.legendRow,children:[t.jsx("span",{style:{...N.dot,background:W.cat.color}}),t.jsx(Gr,{name:W.cat.icon,size:13,style:{color:W.cat.color,flexShrink:0}}),t.jsx("span",{style:N.legendName,children:W.cat.name}),t.jsxs("span",{style:N.legendPct,children:[Math.round(W.pct),"%"]}),t.jsx("span",{style:N.legendAmt,children:re(W.amount)})]},W.cat.id))})]}),(()=>{const[W,ge]=or(new Date(Y+"T00:00"),n),We=s.filter(Ue=>Ue.date>=W&&Ue.date<=ge&&ft(Ue)).slice().sort((Ue,Ke)=>Ke.date.localeCompare(Ue.date)||Ke.id-Ue.id);if(We.length===0)return null;const Ye=J.size===0?"All categories":[...J].map(Ue=>{var Ke;return(Ke=Q[Ue])==null?void 0:Ke.name}).filter(Boolean).join(", "),wt=We.reduce((Ue,Ke)=>Ue+Ke.amount,0);return t.jsxs("div",{style:N.drillBox,children:[t.jsxs("div",{style:N.drillHead,children:[t.jsx("span",{style:{...N.iconBadge,background:"#9A968C1A",color:"#9A968C"},children:t.jsx(No,{size:15})}),t.jsxs("span",{style:N.drillTitle,children:[Ye," · ",Ae(Y)," · ",We.length," transaction",We.length===1?"":"s"," · ",re(wt)]})]}),t.jsx("div",{style:{...N.logList,...N.drillList},children:We.map(Ue=>{const Ke=Q[Ue.category_id];return t.jsxs("div",{style:N.logRow,children:[t.jsx("span",{style:{...N.logIcon,background:((Ke==null?void 0:Ke.color)||"#9A968C")+"1A",color:(Ke==null?void 0:Ke.color)||"#9A968C"},children:t.jsx(Gr,{name:Ke==null?void 0:Ke.icon,size:14})}),t.jsxs("button",{onClick:()=>xt(Ue),style:N.logInfoBtn,title:"Edit this expense",children:[t.jsxs("div",{style:N.logCat,children:[(Ke==null?void 0:Ke.name)||"Other"," · ",new Date(Ue.date+"T00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",year:"numeric"})]}),Ue.note&&t.jsx("div",{style:N.logNote,children:Ue.note})]}),t.jsx("span",{style:N.logAmt,children:re(Ue.amount)}),t.jsx("button",{onClick:()=>xt(Ue),style:N.editBtn,title:"Edit",children:t.jsx(jt,{size:13})}),t.jsx("button",{onClick:()=>P(Ue.id,(Ke==null?void 0:Ke.name)||"Expense"),style:N.delBtn,children:t.jsx(Fe,{size:14})})]},Ue.id)})})]})})()]})]})]}),b&&t.jsx("div",{style:N.overlay,onClick:()=>p(null),children:t.jsxs("div",{style:N.modal,onClick:W=>W.stopPropagation(),children:[t.jsxs("div",{style:N.modalHead,children:[t.jsxs("span",{style:{...N.modalTitle,display:"flex",alignItems:"center",gap:8},children:[t.jsx("span",{style:{...N.iconBadge,background:b.cat.color+"1A",color:b.cat.color},children:t.jsx(Gr,{name:b.cat.icon,size:16})}),b.cat.name]}),t.jsx("button",{onClick:()=>p(null),style:N.iconBtnPlain,children:t.jsx(Fe,{size:16})})]}),t.jsx("label",{style:N.label,children:"Amount *"}),t.jsx("input",{autoFocus:!0,type:"number",inputMode:"decimal",value:b.amount,onChange:W=>p(ge=>({...ge,amount:W.target.value})),onKeyDown:W=>W.key==="Enter"&&ot(),placeholder:"0",style:N.input}),t.jsx("label",{style:N.label,children:"Note (optional)"}),t.jsx("input",{value:b.note,maxLength:$o,onChange:W=>p(ge=>({...ge,note:W.target.value})),onKeyDown:W=>W.key==="Enter"&&ot(),placeholder:"What was it for?",style:N.input}),t.jsxs("div",{style:N.noteCount,children:[b.note.length,"/",$o]}),t.jsxs("div",{style:N.modalActions,children:[t.jsx("button",{onClick:()=>p(null),style:N.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:ot,disabled:!b.amount,style:{...N.saveBtn,...b.amount?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," Add"]})]})]})}),u&&(Q[u.category_id],t.jsx("div",{style:N.overlay,onClick:()=>j(null),children:t.jsxs("div",{style:N.modal,onClick:W=>W.stopPropagation(),children:[t.jsxs("div",{style:N.modalHead,children:[t.jsx("span",{style:N.modalTitle,children:"Edit expense"}),t.jsx("button",{onClick:()=>j(null),style:N.iconBtnPlain,children:t.jsx(Fe,{size:16})})]}),t.jsx("label",{style:N.label,children:"Category"}),t.jsx(sr,{value:u.category_id,options:o.map(W=>({value:W.id,label:W.name})),onChange:W=>j(ge=>({...ge,category_id:Number(W)})),style:{marginBottom:8}}),t.jsx("label",{style:N.label,children:"Amount *"}),t.jsx("input",{autoFocus:!0,type:"number",inputMode:"decimal",value:u.amount,onChange:W=>j(ge=>({...ge,amount:W.target.value})),onKeyDown:W=>W.key==="Enter"&&ut(),placeholder:"0",style:N.input}),t.jsx("label",{style:N.label,children:"Date"}),t.jsx("input",{type:"date",value:u.date,onChange:W=>j(ge=>({...ge,date:W.target.value})),style:N.input}),t.jsx("label",{style:N.label,children:"Note (optional)"}),t.jsx("input",{value:u.note,maxLength:$o,onChange:W=>j(ge=>({...ge,note:W.target.value})),onKeyDown:W=>W.key==="Enter"&&ut(),placeholder:"What was it for?",style:N.input}),t.jsxs("div",{style:N.noteCount,children:[u.note.length,"/",$o]}),t.jsxs("div",{style:N.modalActions,children:[t.jsx("button",{onClick:()=>j(null),style:N.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:ut,disabled:!u.amount,style:{...N.saveBtn,...u.amount?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," Save"]})]})]})})),K&&t.jsx("div",{style:N.overlay,onClick:()=>oe(!1),children:t.jsxs("div",{style:N.modal,onClick:W=>W.stopPropagation(),children:[t.jsxs("div",{style:N.modalHead,children:[t.jsx("span",{style:N.modalTitle,children:"Customize categories"}),t.jsx("button",{onClick:()=>oe(!1),style:N.iconBtnPlain,children:t.jsx(Fe,{size:16})})]}),t.jsx("div",{style:N.manageHint,children:"Use the arrows to reorder how categories appear."}),t.jsx("div",{style:N.manageList,children:o.map((W,ge)=>t.jsxs("div",{style:N.manageRow,children:[t.jsxs("div",{style:N.reorderCol,children:[t.jsx("button",{onClick:()=>$t(ge,-1),disabled:ge===0,style:{...N.reorderBtn,...ge===0?N.reorderDisabled:{}},title:"Move up",children:t.jsx(kl,{size:13})}),t.jsx("button",{onClick:()=>$t(ge,1),disabled:ge===o.length-1,style:{...N.reorderBtn,...ge===o.length-1?N.reorderDisabled:{}},title:"Move down",children:t.jsx(go,{size:13})})]}),t.jsx("span",{style:{...N.iconBadge,background:W.color+"1A",color:W.color},children:t.jsx(Gr,{name:W.icon,size:15})}),t.jsx("span",{style:{flex:1,fontSize:13.5,fontWeight:600},children:W.name}),t.jsx("button",{onClick:()=>Ar(W),style:N.delBtn,children:t.jsx(jt,{size:13})}),t.jsx("button",{onClick:()=>Er(W),style:N.delBtn,children:t.jsx(Fe,{size:14})})]},W.id))}),t.jsxs("button",{onClick:Rt,style:N.addColInline,children:[t.jsx(bt,{size:13})," Add category"]})]})}),ue&&t.jsx("div",{style:N.overlay,onClick:()=>A(null),children:t.jsxs("div",{style:N.modal,onClick:W=>W.stopPropagation(),children:[t.jsxs("div",{style:N.modalHead,children:[t.jsx("span",{style:N.modalTitle,children:ue.id?"Edit category":"New category"}),t.jsx("button",{onClick:()=>A(null),style:N.iconBtnPlain,children:t.jsx(Fe,{size:16})})]}),t.jsx("label",{style:N.label,children:"Name *"}),t.jsx("input",{autoFocus:!0,value:ue.name,onChange:W=>A(ge=>({...ge,name:W.target.value})),onKeyDown:W=>W.key==="Enter"&&yt(),placeholder:"e.g. Vegetables, Petrol…",style:N.input}),t.jsx("label",{style:N.label,children:"Color"}),t.jsx("div",{style:N.colorRow,children:fd.map(W=>t.jsx("button",{onClick:()=>A(ge=>({...ge,color:W})),style:{...N.colorSwatch,background:W,...ue.color===W?N.colorSwatchOn:{}}},W))}),t.jsx("label",{style:N.label,children:"Icon"}),t.jsx("div",{style:N.iconPickGrid,children:Object.keys(qh).map(W=>t.jsx("button",{onClick:()=>A(ge=>({...ge,icon:W})),style:{...N.iconPick,...ue.icon===W?{background:ue.color+"22",borderColor:ue.color,color:ue.color}:{}},children:t.jsx(Gr,{name:W,size:17})},W))}),t.jsxs("div",{style:N.modalActions,children:[t.jsx("button",{onClick:()=>A(null),style:N.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:yt,disabled:!ue.name.trim(),style:{...N.saveBtn,...ue.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," ",ue.id?"Save":"Create"]})]})]})}),!f&&t.jsx("div",{style:N.muted,children:"Loading…"}),t.jsx(wr,{toasts:ae,onUndo:me,onDismiss:Ne})]})}function Gp({items:e,money:r}){const n=Math.max(1,...e.map(o=>o.value));return t.jsx("div",{style:N.tbWrap,children:e.map((o,i)=>t.jsxs("div",{style:N.tbRow,children:[t.jsx("div",{style:N.tbLbl,children:o.label}),t.jsx("div",{style:N.tbTrack,children:t.jsx("div",{style:{...N.tbBar,width:`${o.value/n*100}%`,background:o.color}})}),t.jsx("div",{style:N.tbVal,children:r(o.value)})]},i))})}const N={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px",color:"var(--text)",boxSizing:"border-box",maxWidth:"100%",overflowX:"hidden"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},totalCard:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:14,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:16,padding:"16px 18px",marginBottom:16,flexWrap:"wrap"},totalLeft:{display:"flex",alignItems:"center",gap:12},totalLabel:{fontSize:12,color:"var(--text-3)",fontWeight:600},totalVal:{fontSize:24,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:2},budgetLine:{fontSize:11.5,fontWeight:600,marginTop:4},scopeRow:{display:"flex",gap:6},scopeBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 13px",borderRadius:8,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},scopeBtnOn:{background:Mr,color:"#fff",borderColor:Mr},cols:{display:"grid",gap:16,alignItems:"start"},card:{background:"var(--surface)",borderRadius:16,padding:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)",marginBottom:16},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14,gap:10},cardTitle:{fontSize:16,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardSub:{fontSize:11.5,color:"var(--text-3)",marginTop:2},dayTotal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap",color:Mr},muted:{fontSize:13,color:"var(--text-3)",textAlign:"center",padding:"14px 0"},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},calNav:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7,minmax(0,1fr))",gap:4},calDow:{fontSize:10.5,fontWeight:700,color:"var(--text-3)",textAlign:"center",padding:"4px 0"},calCell:{position:"relative",border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",borderRadius:8,aspectRatio:"1",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},calCellOn:{background:Mr,color:"#fff",borderColor:Mr,fontWeight:700},calCellToday:{borderColor:Mr,fontWeight:700},calDot:{position:"absolute",bottom:3,width:4,height:4,borderRadius:"50%"},iconGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(64px, 1fr))",gap:10,marginTop:4},iconCell:{display:"flex",flexDirection:"column",alignItems:"center",gap:5},iconBtn:{width:52,height:52,borderRadius:14,border:"1px solid",display:"grid",placeItems:"center",cursor:"pointer"},iconBtnAdd:{width:52,height:52,borderRadius:14,border:"1px dashed var(--border)",background:"none",color:"var(--text-3)",display:"grid",placeItems:"center",cursor:"pointer"},iconLabel:{fontSize:10.5,fontWeight:600,color:"var(--text-2)",textAlign:"center",maxWidth:66,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},manageLink:{display:"inline-flex",alignItems:"center",gap:5,border:"none",background:"none",color:"var(--text-3)",fontSize:11.5,fontWeight:600,cursor:"pointer",marginTop:12,padding:0,fontFamily:"inherit"},logList:{marginTop:14,paddingTop:14,borderTop:"1px solid var(--border)",display:"flex",flexDirection:"column",gap:8},logRow:{display:"flex",alignItems:"center",gap:10,minWidth:0},logIcon:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},logInfoBtn:{flex:1,minWidth:0,border:"none",background:"none",padding:0,cursor:"pointer",textAlign:"left",fontFamily:"inherit",overflow:"hidden",color:"inherit"},logCat:{fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},logNote:{fontSize:11,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},logAmt:{fontSize:13.5,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",whiteSpace:"nowrap",flexShrink:0},editBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",flexShrink:0},delBtn:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",flexShrink:0},noteCount:{fontSize:10.5,color:"var(--text-3)",textAlign:"right",marginTop:3},pieWrap:{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap"},pieChart:{position:"relative",width:132,height:132,flexShrink:0,margin:"0 auto"},pieDisc:{width:"100%",height:"100%",borderRadius:"50%"},pieHole:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:80,height:80,borderRadius:"50%",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},pieHoleVal:{fontSize:14,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},pieHoleLbl:{fontSize:10,color:"var(--text-3)",fontWeight:600},pieLegend:{flex:1,minWidth:180,display:"flex",flexDirection:"column",gap:8},legendRow:{display:"flex",alignItems:"center",gap:7},legendRowBtn:{width:"100%",border:"none",background:"none",cursor:"pointer",fontFamily:"inherit",padding:"5px 7px",borderRadius:8,textAlign:"left",color:"var(--text)"},drillBox:{marginTop:14,paddingTop:12,borderTop:"1px solid var(--border)"},drillList:{maxHeight:320,overflowY:"auto",paddingRight:4},drillHead:{display:"flex",alignItems:"center",gap:9,marginBottom:4},drillTitle:{flex:1,fontSize:13,fontWeight:700,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},dot:{width:9,height:9,borderRadius:3,flexShrink:0},legendName:{flex:1,fontSize:12.5,fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},legendPct:{fontSize:11.5,color:"var(--text-3)",fontWeight:600,width:34,textAlign:"right"},legendAmt:{fontSize:12.5,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:64,textAlign:"right"},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtnPlain:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},iconBadge:{width:28,height:28,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)",marginBottom:8},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:"#4C9A6B",color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},manageHint:{fontSize:11.5,color:"var(--text-3)",marginBottom:8},manageList:{display:"flex",flexDirection:"column",gap:6,marginBottom:10,maxHeight:320,overflowY:"auto"},manageRow:{display:"flex",alignItems:"center",gap:10,padding:"6px 2px"},reorderCol:{display:"flex",flexDirection:"column",gap:1,flexShrink:0},reorderBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:22,height:17,borderRadius:5,cursor:"pointer",display:"grid",placeItems:"center",padding:0},reorderDisabled:{opacity:.35,cursor:"not-allowed"},addColInline:{display:"inline-flex",alignItems:"center",gap:5,border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"9px 12px",borderRadius:8,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:"inherit",width:"100%",justifyContent:"center"},colorRow:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:4},colorSwatch:{width:26,height:26,borderRadius:"50%",border:"2px solid transparent",cursor:"pointer",padding:0},colorSwatchOn:{border:"2px solid var(--text)",boxShadow:"0 0 0 2px var(--surface)"},iconPickGrid:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6,marginBottom:4},iconPick:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",borderRadius:9,height:36,display:"grid",placeItems:"center",cursor:"pointer"},tagRow:{display:"flex",gap:6,flexWrap:"wrap"},tagChip:{display:"inline-flex",alignItems:"center",gap:4,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"6px 11px",borderRadius:20,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},tagChipOn:{background:Mr,color:"#fff",borderColor:Mr},trendDivider:{height:1,background:"var(--border)",margin:"16px 0 12px"},trend3:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12,gap:8},trendCol:{textAlign:"center",flex:1},trendVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},trendLbl:{fontSize:11,color:"var(--text-3)",marginTop:2},trendBadge:{display:"inline-flex",alignItems:"center",gap:4,fontSize:13,fontWeight:800,padding:"6px 12px",borderRadius:20,width:"fit-content"},threeDayTitle:{fontSize:13,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",marginBottom:12},tbWrap:{display:"flex",flexDirection:"column",gap:8},tbRow:{display:"flex",alignItems:"center",gap:8},tbLbl:{width:78,fontSize:11,color:"var(--text-2)",fontWeight:600,flexShrink:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},tbTrack:{flex:1,height:14,background:"#F2F0EA",borderRadius:7,overflow:"hidden"},tbBar:{height:"100%",borderRadius:7,transition:"width 0.3s"},tbVal:{width:64,fontSize:11,color:"var(--text-2)",fontWeight:700,flexShrink:0,textAlign:"right"}},vn="#C9A227",xo="#C2536B",ol="#4C9A6B";new Date().toISOString().slice(0,10);const i2=e=>e?new Date(e+"T00:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"—";function s2(e=620){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const yd=e=>(Number(e)||0).toLocaleString(void 0,{maximumFractionDigits:2});function a2(e){const r=e.target||0,n=e.completed||0;return r<=0?{pct:0,negPct:0,negative:!1}:n<0?{pct:0,negPct:Math.min(100,Math.abs(n)/r*100),negative:!0}:{pct:Math.min(100,n/r*100),negPct:0,negative:!1}}const l2=()=>({id:null,name:"",completed:"",target:"",end_date:"",reward:"",reward_cost:"",comment:"",allow_negative:!1});function d2(){const e=uo(),r=u=>As(u,e.code),n=s2(),[o,i]=c.useState([]),[s,a]=c.useState(!1),[l,d]=c.useState(null),[g,m]=c.useState(null),f=c.useCallback(()=>{M.getChallenges().then(u=>{i(Array.isArray(u)?u:[]),a(!0)}).catch(()=>a(!0))},[]);c.useEffect(()=>{f()},[f]);const h=c.useMemo(()=>{const u=o.filter(k=>k.status==="done"),j=u.reduce((k,C)=>k+(C.reward_earned||0),0);return{total:o.length,done:u.length,active:o.filter(k=>k.status==="active").length,failed:o.filter(k=>k.status==="failed").length,earned:j}},[o]),R=()=>d(l2()),B=u=>d({id:u.id,name:u.name,completed:String(u.completed??""),target:String(u.target??""),end_date:u.end_date||"",reward:u.reward||"",reward_cost:String(u.reward_cost??""),comment:u.comment||"",allow_negative:!!u.allow_negative}),T=async()=>{const u=l.name.trim();if(!u)return;const j={name:u,completed:parseFloat(l.completed)||0,target:parseFloat(l.target)||0,end_date:l.end_date||null,reward:l.reward.trim(),reward_cost:parseFloat(l.reward_cost)||0,comment:l.comment.trim(),allow_negative:l.allow_negative};l.id?await M.updateChallenge(l.id,j):await M.createChallenge(j),d(null),f()},z=async u=>{window.confirm(`Delete challenge "${u.name}"?`)&&(await M.deleteChallenge(u.id),f())},b=u=>m({ch:u,amount:"",mode:"add"}),p=async()=>{const u=parseFloat(g.amount);if(isNaN(u))return;const j=g.mode==="set"?u:(g.ch.completed||0)+u;await M.updateChallenge(g.ch.id,{completed:j}),m(null),f()};return t.jsxs("div",{style:Ce.page,children:[t.jsxs("div",{style:Ce.head,children:[t.jsx("div",{style:Ce.eyebrow,children:"Anvil · Challenges"}),t.jsx("h1",{style:Ce.h1,children:"Challenges"}),t.jsx("div",{style:Ce.subhead,children:"Small steps toward success — track each toward its target and bank the reward on completion."})]}),t.jsxs("div",{style:Ce.statRow,children:[t.jsxs("div",{style:Ce.statCard,children:[t.jsx("div",{style:Ce.statVal,children:h.active}),t.jsx("div",{style:Ce.statLbl,children:"Active"})]}),t.jsxs("div",{style:Ce.statCard,children:[t.jsx("div",{style:{...Ce.statVal,color:ol},children:h.done}),t.jsx("div",{style:Ce.statLbl,children:"Completed"})]}),t.jsxs("div",{style:Ce.statCard,children:[t.jsx("div",{style:{...Ce.statVal,color:xo},children:h.failed}),t.jsx("div",{style:Ce.statLbl,children:"Missed"})]}),t.jsxs("div",{style:Ce.statCard,children:[t.jsx("div",{style:{...Ce.statVal,color:vn},children:r(h.earned)}),t.jsx("div",{style:Ce.statLbl,children:"Reward earned"})]})]}),t.jsxs("button",{onClick:R,style:Ce.addBtn,children:[t.jsx(bt,{size:16})," New challenge"]}),o.length===0?t.jsx("div",{style:Ce.empty,children:s?"No challenges yet. Create your first small step toward success.":"Loading…"}):t.jsx("div",{style:Ce.list,children:o.map((u,j)=>{const{pct:k,negPct:C,negative:D}=a2(u),x=D?xo:u.status==="done"?ol:vn;return t.jsxs("div",{style:{...Ce.card,...u.status==="failed"?Ce.cardFailed:{}},children:[t.jsxs("div",{style:{...Ce.cardTop,...n?{alignItems:"flex-start"}:{}},children:[t.jsxs("span",{style:{...Ce.num,...n?{marginTop:2}:{}},children:["#",j+1]}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:{...Ce.name,...n?Ce.nameMobile:{}},children:u.name}),u.comment&&t.jsx("div",{style:Ce.comment,children:u.comment}),n&&t.jsx("div",{style:Ce.badgeRow,children:t.jsx(Up,{status:u.status})})]}),!n&&t.jsx(Up,{status:u.status}),t.jsx("button",{onClick:()=>B(u),style:Ce.iconBtn,title:"Edit",children:t.jsx(jt,{size:13})}),t.jsx("button",{onClick:()=>z(u),style:Ce.iconBtn,title:"Delete",children:t.jsx(Fe,{size:14})})]}),t.jsxs("div",{style:Ce.barWrap,children:[t.jsx("div",{style:Ce.barTrack,children:D?t.jsx("div",{style:{...Ce.barFill,width:`${C}%`,background:xo,marginLeft:"auto"}}):t.jsx("div",{style:{...Ce.barFill,width:`${k}%`,background:x}})}),t.jsxs("div",{style:Ce.barMetaRow,children:[t.jsxs("span",{style:{...Ce.completed,color:(u.completed||0)<0?xo:"var(--text)"},children:[(u.completed||0)<0&&t.jsx(ro,{size:12,style:{marginRight:3,verticalAlign:"-1px"}}),yd(u.completed)]}),t.jsx("span",{style:Ce.barPct,children:D?`-${Math.round(C)}%`:`${Math.round(k)}%`}),t.jsxs("span",{style:Ce.target,children:["of ",yd(u.target)]})]})]}),t.jsxs("div",{style:Ce.chips,children:[t.jsxs("span",{style:Ce.chip,children:[t.jsx(n0,{size:12})," Remaining ",yd(u.remaining)]}),t.jsxs("span",{style:Ce.chip,children:[t.jsx(Gy,{size:12})," ",u.end_date?`Ends ${i2(u.end_date)}`:"No deadline"]}),u.reward&&t.jsxs("span",{style:Ce.chip,children:[t.jsx(ks,{size:12})," ",u.reward]}),u.reward_cost>0&&t.jsxs("span",{style:{...Ce.chip,...Ce.chipReward},children:[t.jsx(Jr,{size:12})," ",r(u.reward_cost),u.status==="done"?" earned":""]}),u.allow_negative&&t.jsx("span",{style:{...Ce.chip,color:xo,borderColor:xo+"55"},children:"± negative allowed"})]}),t.jsx("div",{style:Ce.actions,children:t.jsxs("button",{onClick:()=>b(u),style:Ce.progressBtn,children:[t.jsx(bt,{size:13})," Update progress"]})})]},u.id)})}),l&&t.jsx("div",{style:Ce.overlay,onClick:()=>d(null),children:t.jsxs("div",{style:Ce.modal,onClick:u=>u.stopPropagation(),children:[t.jsxs("div",{style:Ce.modalHead,children:[t.jsx("span",{style:Ce.modalTitle,children:l.id?"Edit challenge":"New challenge"}),t.jsx("button",{onClick:()=>d(null),style:Ce.iconBtnPlain,children:t.jsx(Fe,{size:16})})]}),t.jsx("label",{style:Ce.label,children:"Name *"}),t.jsx("input",{autoFocus:!0,value:l.name,onChange:u=>d(j=>({...j,name:u.target.value})),placeholder:"e.g. Earn ₹1,00,000 from trading",style:Ce.input}),t.jsxs("div",{style:Ce.grid2,children:[t.jsxs("div",{children:[t.jsx("label",{style:Ce.label,children:"Completed"}),t.jsx("input",{type:"number",inputMode:"decimal",value:l.completed,onChange:u=>d(j=>({...j,completed:u.target.value})),placeholder:"0",style:Ce.input})]}),t.jsxs("div",{children:[t.jsx("label",{style:Ce.label,children:"Target"}),t.jsx("input",{type:"number",inputMode:"decimal",value:l.target,onChange:u=>d(j=>({...j,target:u.target.value})),placeholder:"0",style:Ce.input})]})]}),t.jsx("label",{style:Ce.label,children:"End date (optional — past & incomplete marks it missed)"}),t.jsx("input",{type:"date",value:l.end_date,onChange:u=>d(j=>({...j,end_date:u.target.value})),style:Ce.input}),t.jsxs("div",{style:Ce.grid2,children:[t.jsxs("div",{children:[t.jsx("label",{style:Ce.label,children:"Reward"}),t.jsx("input",{value:l.reward,onChange:u=>d(j=>({...j,reward:u.target.value})),placeholder:"e.g. New headphones",style:Ce.input})]}),t.jsxs("div",{children:[t.jsx("label",{style:Ce.label,children:"Reward cost"}),t.jsx("input",{type:"number",inputMode:"decimal",value:l.reward_cost,onChange:u=>d(j=>({...j,reward_cost:u.target.value})),placeholder:"0",style:Ce.input})]})]}),t.jsx("label",{style:Ce.label,children:"Comment"}),t.jsx("input",{value:l.comment,onChange:u=>d(j=>({...j,comment:u.target.value})),placeholder:"Notes about this challenge",style:Ce.input}),t.jsxs("label",{style:Ce.toggleRow,children:[t.jsx("input",{type:"checkbox",checked:l.allow_negative,onChange:u=>d(j=>({...j,allow_negative:u.target.checked})),style:Ce.checkbox}),t.jsxs("span",{children:[t.jsx("span",{style:Ce.toggleLabel,children:"Allow negative progress"}),t.jsx("span",{style:Ce.toggleHint,children:"Let progress drop below zero (e.g. a running trading loss shown in red)."})]})]}),t.jsxs("div",{style:Ce.modalActions,children:[t.jsx("button",{onClick:()=>d(null),style:Ce.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:T,disabled:!l.name.trim(),style:{...Ce.saveBtn,...l.name.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," ",l.id?"Save":"Create"]})]})]})}),g&&t.jsx("div",{style:Ce.overlay,onClick:()=>m(null),children:t.jsxs("div",{style:Ce.modal,onClick:u=>u.stopPropagation(),children:[t.jsxs("div",{style:Ce.modalHead,children:[t.jsxs("span",{style:Ce.modalTitle,children:["Update · ",g.ch.name]}),t.jsx("button",{onClick:()=>m(null),style:Ce.iconBtnPlain,children:t.jsx(Fe,{size:16})})]}),t.jsxs("div",{style:Ce.progressCur,children:["Current: ",t.jsx("b",{children:r(g.ch.completed)})," of ",r(g.ch.target)]}),t.jsxs("div",{style:Ce.modeRow,children:[t.jsx("button",{onClick:()=>m(u=>({...u,mode:"add"})),style:{...Ce.modeBtn,...g.mode==="add"?Ce.modeBtnOn:{}},children:"Add / subtract"}),t.jsx("button",{onClick:()=>m(u=>({...u,mode:"set"})),style:{...Ce.modeBtn,...g.mode==="set"?Ce.modeBtnOn:{}},children:"Set total"})]}),t.jsx("label",{style:Ce.label,children:g.mode==="set"?"New completed total":"Amount to add (use a negative number to subtract)"}),t.jsx("input",{autoFocus:!0,type:"number",inputMode:"decimal",value:g.amount,onChange:u=>m(j=>({...j,amount:u.target.value})),onKeyDown:u=>u.key==="Enter"&&p(),placeholder:"0",style:Ce.input}),!g.ch.allow_negative&&t.jsx("div",{style:Ce.progressHint,children:"Negative totals are blocked for this challenge. Enable “Allow negative progress” to permit them."}),t.jsxs("div",{style:Ce.modalActions,children:[t.jsx("button",{onClick:()=>m(null),style:Ce.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:p,disabled:g.amount===""||isNaN(parseFloat(g.amount)),style:{...Ce.saveBtn,...g.amount===""||isNaN(parseFloat(g.amount))?{opacity:.5,cursor:"not-allowed"}:{}},children:[t.jsx(He,{size:15})," Save"]})]})]})})]})}function Up({status:e}){const r={done:{label:"Completed",color:ol},failed:{label:"Missed",color:xo},active:{label:"In progress",color:"#3A7CA5"}},n=r[e]||r.active;return t.jsx("span",{style:{...Ce.badge,color:n.color,background:n.color+"1A",borderColor:n.color+"44"},children:n.label})}const Ce={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:780,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},statRow:{display:"flex",gap:10,marginBottom:14,flexWrap:"wrap"},statCard:{flex:1,minWidth:120,background:"var(--surface)",borderRadius:12,padding:"12px 14px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},statVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},statLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},addBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"none",background:vn,color:"#fff",padding:"10px 16px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginBottom:16},empty:{fontSize:13.5,color:"var(--text-3)",textAlign:"center",padding:"40px 0",background:"var(--surface)",borderRadius:16,border:"1px dashed var(--border)"},list:{display:"flex",flexDirection:"column",gap:14},card:{background:"var(--surface)",borderRadius:16,padding:18,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardFailed:{opacity:.72},cardTop:{display:"flex",alignItems:"center",gap:10},num:{fontSize:12,fontWeight:800,color:"var(--text-3)",fontFamily:"'Fraunces',Georgia,serif",flexShrink:0},name:{fontSize:15.5,fontWeight:700,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},nameMobile:{whiteSpace:"normal",overflow:"visible",textOverflow:"clip",wordBreak:"break-word",lineHeight:1.25},badgeRow:{marginTop:6},comment:{fontSize:12,color:"var(--text-3)",marginTop:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},badge:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:20,border:"1px solid",flexShrink:0,whiteSpace:"nowrap"},iconBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:28,height:28,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},barWrap:{marginTop:14},barTrack:{height:14,background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:8,overflow:"hidden",display:"flex"},barFill:{height:"100%",borderRadius:7,transition:"width 0.3s"},barMetaRow:{display:"flex",alignItems:"baseline",gap:8,marginTop:6},completed:{fontSize:14,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},barPct:{fontSize:12,fontWeight:700,color:"var(--text-2)"},target:{fontSize:12,color:"var(--text-3)",marginLeft:"auto"},chips:{display:"flex",gap:7,flexWrap:"wrap",marginTop:12},chip:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11.5,fontWeight:600,color:"var(--text-2)",border:"1px solid var(--border)",borderRadius:20,padding:"4px 10px"},chipReward:{color:vn,borderColor:vn+"55",background:vn+"12"},actions:{marginTop:12},progressBtn:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"7px 14px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:460,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif",minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},iconBtnPlain:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)",marginBottom:4},grid2:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},toggleRow:{display:"flex",alignItems:"flex-start",gap:9,marginTop:14,cursor:"pointer"},checkbox:{width:17,height:17,marginTop:1,accentColor:vn,cursor:"pointer",flexShrink:0},toggleLabel:{display:"block",fontSize:13,fontWeight:700},toggleHint:{display:"block",fontSize:11.5,color:"var(--text-3)",marginTop:2},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:ol,color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},progressCur:{fontSize:13,color:"var(--text-2)",marginBottom:12},progressHint:{fontSize:11.5,color:"var(--text-3)",marginTop:6},modeRow:{display:"flex",gap:6,marginBottom:8},modeBtn:{flex:1,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 10px",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},modeBtnOn:{background:vn,color:"#fff",borderColor:vn}},Ni="#8268B0",rs="#4C9A6B",c2=e=>e?new Date(e+"T00:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"",g2=()=>({id:null,wish:"",cost:"",note:"",link:""});function u2(){const e=uo(),r=z=>As(z,e.code),[n,o]=c.useState([]),[i,s]=c.useState(!1),[a,l]=c.useState(null),d=c.useCallback(()=>{M.getBucket().then(z=>{o(Array.isArray(z)?z:[]),s(!0)}).catch(()=>s(!0))},[]);c.useEffect(()=>{d()},[d]);const g=c.useMemo(()=>{const z=n.filter(b=>!b.fulfilled);return{total:n.length,fulfilled:n.filter(b=>b.fulfilled).length,openCost:z.reduce((b,p)=>b+(p.cost||0),0)}},[n]),m=()=>l(g2()),f=z=>l({id:z.id,wish:z.wish,cost:String(z.cost??""),note:z.note||"",link:z.link||""}),h=async()=>{const z=a.wish.trim();if(!z)return;const b={wish:z,cost:parseFloat(a.cost)||0,note:a.note.trim(),link:a.link.trim()};a.id?await M.updateBucketWish(a.id,b):await M.createBucketWish(b),l(null),d()},R=async z=>{window.confirm(`Delete "${z.wish}" from your bucket list?`)&&(await M.deleteBucketWish(z.id),d())},B=async z=>{await M.updateBucketWish(z.id,{fulfilled:!z.fulfilled}),d()},T=async(z,b)=>{const p=z+b;if(p<0||p>=n.length)return;const u=[...n];[u[z],u[p]]=[u[p],u[z]],o(u),await M.arrangeBucket(u.map(j=>j.id)).catch(()=>{}),d()};return t.jsxs("div",{style:Xe.page,children:[t.jsxs("div",{style:Xe.head,children:[t.jsx("div",{style:Xe.eyebrow,children:"Anvil · Bucket List"}),t.jsx("h1",{style:Xe.h1,children:"Bucket List"}),t.jsx("div",{style:Xe.subhead,children:"The materialistic wishes you want to fulfil, big or small — ordered by what matters most."})]}),t.jsxs("div",{style:Xe.statRow,children:[t.jsxs("div",{style:Xe.statCard,children:[t.jsx("div",{style:Xe.statVal,children:g.total}),t.jsx("div",{style:Xe.statLbl,children:"Wishes"})]}),t.jsxs("div",{style:Xe.statCard,children:[t.jsx("div",{style:{...Xe.statVal,color:rs},children:g.fulfilled}),t.jsx("div",{style:Xe.statLbl,children:"Fulfilled"})]}),t.jsxs("div",{style:Xe.statCard,children:[t.jsx("div",{style:{...Xe.statVal,color:Ni},children:r(g.openCost)}),t.jsx("div",{style:Xe.statLbl,children:"Still wished"})]})]}),t.jsxs("button",{onClick:m,style:Xe.addBtn,children:[t.jsx(bt,{size:16})," New wish"]}),n.length===0?t.jsx("div",{style:Xe.empty,children:i?"No wishes yet. Add the first thing you'd love to have.":"Loading…"}):t.jsx("div",{style:Xe.list,children:n.map((z,b)=>t.jsxs("div",{style:{...Xe.card,...z.fulfilled?Xe.cardDone:{}},children:[t.jsxs("div",{style:Xe.reorderCol,children:[t.jsx("button",{onClick:()=>T(b,-1),disabled:b===0,style:{...Xe.reorderBtn,...b===0?Xe.reorderOff:{}},title:"Higher priority",children:t.jsx(kl,{size:14})}),t.jsx("span",{style:Xe.rank,children:b+1}),t.jsx("button",{onClick:()=>T(b,1),disabled:b===n.length-1,style:{...Xe.reorderBtn,...b===n.length-1?Xe.reorderOff:{}},title:"Lower priority",children:t.jsx(go,{size:14})})]}),t.jsxs("div",{style:Xe.body,children:[t.jsxs("div",{style:Xe.topRow,children:[t.jsx("span",{style:{...Xe.wishName,...z.fulfilled?Xe.wishNameDone:{}},children:z.wish}),t.jsx("span",{style:Xe.cost,children:r(z.cost)})]}),z.note&&t.jsx("div",{style:Xe.note,children:z.note}),t.jsxs("div",{style:Xe.metaRow,children:[z.fulfilled&&t.jsxs("span",{style:Xe.doneBadge,children:[t.jsx(zg,{size:11})," Fulfilled",z.fulfilled_date?` · ${c2(z.fulfilled_date)}`:""]}),z.link&&t.jsxs("a",{href:z.link,target:"_blank",rel:"noreferrer",style:Xe.link,children:[t.jsx(pc,{size:11})," Link"]})]})]}),t.jsxs("div",{style:Xe.actions,children:[t.jsxs("button",{onClick:()=>B(z),style:{...Xe.pill,...z.fulfilled?{}:{color:rs,borderColor:rs+"66"}},title:z.fulfilled?"Mark as not fulfilled":"Mark fulfilled",children:[t.jsx(He,{size:13})," ",z.fulfilled?"Undo":"Fulfilled"]}),t.jsx("button",{onClick:()=>f(z),style:Xe.iconBtn,title:"Edit",children:t.jsx(jt,{size:13})}),t.jsx("button",{onClick:()=>R(z),style:Xe.iconBtn,title:"Delete",children:t.jsx(Fe,{size:14})})]})]},z.id))}),t.jsx("div",{style:Xe.footNote,children:"Enable “Fulfil from bucket list” in the Rewards screen to spend your pending reward on these wishes."}),a&&t.jsx("div",{style:Xe.overlay,onClick:()=>l(null),children:t.jsxs("div",{style:Xe.modal,onClick:z=>z.stopPropagation(),children:[t.jsxs("div",{style:Xe.modalHead,children:[t.jsx("span",{style:Xe.modalTitle,children:a.id?"Edit wish":"New wish"}),t.jsx("button",{onClick:()=>l(null),style:Xe.iconBtnPlain,children:t.jsx(Fe,{size:16})})]}),t.jsx("label",{style:Xe.label,children:"Wish *"}),t.jsx("input",{autoFocus:!0,value:a.wish,onChange:z=>l(b=>({...b,wish:z.target.value})),placeholder:"e.g. PlayStation 5, trip to Japan",style:Xe.input}),t.jsx("label",{style:Xe.label,children:"Cost"}),t.jsx("input",{type:"number",inputMode:"decimal",value:a.cost,onChange:z=>l(b=>({...b,cost:z.target.value})),placeholder:"0",style:Xe.input}),t.jsx("label",{style:Xe.label,children:"Link (optional)"}),t.jsx("input",{value:a.link,onChange:z=>l(b=>({...b,link:z.target.value})),placeholder:"https://…",style:Xe.input}),t.jsx("label",{style:Xe.label,children:"Note (optional)"}),t.jsx("input",{value:a.note,onChange:z=>l(b=>({...b,note:z.target.value})),placeholder:"colour, model, why you want it…",style:Xe.input}),t.jsxs("div",{style:Xe.modalActions,children:[t.jsx("button",{onClick:()=>l(null),style:Xe.cancelBtn,children:"Cancel"}),t.jsxs("button",{onClick:h,disabled:!a.wish.trim(),style:{...Xe.saveBtn,...a.wish.trim()?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:15})," ",a.id?"Save":"Add wish"]})]})]})})]})}const Xe={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"28px 20px 40px",color:"var(--text)",boxSizing:"border-box",maxWidth:720,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:13,color:"var(--text-3)",marginTop:4},statRow:{display:"flex",gap:10,marginBottom:14,flexWrap:"wrap"},statCard:{flex:1,minWidth:110,background:"var(--surface)",borderRadius:12,padding:"12px 14px",textAlign:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},statVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},statLbl:{fontSize:11,color:"var(--text-3)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginTop:2},addBtn:{display:"inline-flex",alignItems:"center",gap:6,border:"none",background:Ni,color:"#fff",padding:"10px 16px",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginBottom:16},empty:{fontSize:13.5,color:"var(--text-3)",textAlign:"center",padding:"40px 0",background:"var(--surface)",borderRadius:16,border:"1px dashed var(--border)"},list:{display:"flex",flexDirection:"column",gap:10},card:{display:"flex",gap:12,alignItems:"stretch",background:"var(--surface)",borderRadius:14,padding:"12px 14px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",border:"1px solid var(--border)"},cardDone:{opacity:.7},reorderCol:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:2,flexShrink:0},reorderBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",width:24,height:20,borderRadius:6,cursor:"pointer",display:"grid",placeItems:"center",padding:0},reorderOff:{opacity:.3,cursor:"not-allowed"},rank:{fontSize:12,fontWeight:800,color:"var(--text-3)",fontFamily:"'Fraunces',Georgia,serif",padding:"1px 0"},body:{flex:1,minWidth:0},topRow:{display:"flex",justifyContent:"space-between",gap:10,alignItems:"baseline"},wishName:{fontSize:15,fontWeight:700,minWidth:0,wordBreak:"break-word"},wishNameDone:{textDecoration:"line-through",color:"var(--text-3)"},cost:{fontSize:15,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",color:Ni,flexShrink:0,whiteSpace:"nowrap"},note:{fontSize:12.5,color:"var(--text-3)",marginTop:3},metaRow:{display:"flex",gap:8,flexWrap:"wrap",marginTop:7,alignItems:"center"},doneBadge:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11,fontWeight:700,color:rs,background:rs+"1A",borderRadius:20,padding:"3px 9px"},link:{display:"inline-flex",alignItems:"center",gap:4,fontSize:11.5,fontWeight:700,color:Ni,textDecoration:"none"},actions:{display:"flex",flexDirection:"column",gap:6,alignItems:"flex-end",justifyContent:"center",flexShrink:0},pill:{display:"inline-flex",alignItems:"center",gap:4,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"5px 10px",borderRadius:8,fontSize:11.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",whiteSpace:"nowrap"},iconBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:26,height:26,borderRadius:7,cursor:"pointer",display:"grid",placeItems:"center"},footNote:{fontSize:11.5,color:"var(--text-3)",textAlign:"center",marginTop:18,fontStyle:"italic"},overlay:{position:"fixed",inset:0,background:"rgba(38,36,31,0.5)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",borderRadius:16,padding:"20px 20px 18px",width:"100%",maxWidth:440,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 12px 48px rgba(0,0,0,0.22)",boxSizing:"border-box"},modalHead:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},modalTitle:{fontSize:17,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},iconBtnPlain:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},label:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-2)",margin:"10px 0 5px",textTransform:"uppercase",letterSpacing:"0.04em"},input:{width:"100%",border:"1px solid var(--border)",borderRadius:9,padding:"9px 11px",fontSize:13.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)",marginBottom:4},modalActions:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18},cancelBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},saveBtn:{display:"flex",alignItems:"center",gap:6,border:"none",background:Ni,color:"#fff",padding:"9px 18px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},ns="#3A7CA5",Ht="#4C9A6B",Dt="#C2536B",il=[{id:"swing",label:"Swing",color:"#8268B0"},{id:"fno",label:"FnO",color:"#C9772E"},{id:"intraday",label:"Intraday",color:"#3A7CA5"}],ga=e=>il.find(r=>r.id===e)||il[0],p2=new Set(["fno","intraday"]),Vp=e=>p2.has(e),Zh=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,ua=Zh(new Date),b2=e=>new Date(e+"T00:00").toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"}),Yp=e=>e?new Date(e+"T00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"—",gr=e=>e===""||e===null||e===void 0||isNaN(parseFloat(e))?0:parseFloat(e),vd=(e,r)=>{const n=gr(e.qty);return r==="profit"?Math.abs(gr(e.tgt_price)-gr(e.entry_price))*n:-Math.abs(gr(e.sl_price)-gr(e.entry_price))*n};function m2(e,r,n,o){const i=gr(e.entry_price),s=gr(e.sl_price),a=gr(e.tgt_price),l=gr(e.qty),d=e.direction==="short";if(!e.instrument.trim())return"Enter the instrument.";if(i<=0||s<=0||a<=0||l<=0)return"Entry, SL, target and quantity must all be greater than zero.";if(d){if(s<=i)return"For a short, stop loss must be greater than the entry price (CMP).";if(a>=i)return"For a short, target must be less than the entry price (CMP)."}else{if(s>=i)return"Stop loss must be less than the entry price (CMP).";if(a<=i)return"Target must be greater than the entry price (CMP)."}const g=Math.abs(i-s),m=Math.abs(a-i),f=r.capital||0;if(r.rr>0&&m<r.rr*g-1e-9){const R=d?i-r.rr*g:i+r.rr*g;return`Risk:reward must be ≥ 1:${r.rr}. Target must be ${d?"at most":"at least"} ${R.toLocaleString()}.`}if(r.risk_pct>0&&f>0){const R=f*r.risk_pct/100,B=g*l;if(B>R+1e-9)return`This risks ${o(B)} — over your ${r.risk_pct}% limit of ${o(R)}. Reduce qty or tighten SL.`}const h=(r.diversification||{})[e.kind]||0;if(h>0){if(f>0){const R=f/h,B=i*l;if(B>R+1e-9)return`Position value ${o(B)} exceeds the diversification cap ${o(R)} (capital ÷ ${h}).`}if(n>=h)return`You already hold ${n} open ${e.kind} trade(s); diversification allows ${h}.`}return""}function h2(e=760){const[r,n]=c.useState(()=>window.innerWidth<e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}const f2=e=>({id:null,kind:"swing",direction:"long",instrument:"",purchase_date:e,entry_price:"",sl_price:"",tgt_price:"",qty:"",note:""});function x2(){const e=h2(),r=uo(),n=S=>Cs(S,r.code),[o,i]=c.useState([]),[s,a]=c.useState({}),[l,d]=c.useState(0),[g,m]=c.useState(0),[f,h]=c.useState(0),[R,B]=c.useState({capital:0,risk_pct:0,rr:0,diversification:{swing:0,fno:0,intraday:0}}),[T,z]=c.useState(!1),[b,p]=c.useState(ua),[u,j]=c.useState(()=>{const S=new Date;return new Date(S.getFullYear(),S.getMonth(),1)}),[k,C]=c.useState(null),[D,x]=c.useState(null),[y,_]=c.useState(""),Z=c.useCallback(()=>{M.getTrades().then(S=>{i(S.entries),a(S.learnings||{}),d(S.capital||0),m(S.net_pl||0),h(S.current||0),S.rules&&B(S.rules),z(!0)}).catch(()=>z(!0))},[]);c.useEffect(()=>{Z()},[Z]),c.useEffect(()=>{_(s[b]||"")},[b,s]);const ne=c.useMemo(()=>o.filter(S=>S.status==="open"),[o]),ue=c.useMemo(()=>o.filter(S=>S.status!=="open"),[o]),A=c.useMemo(()=>{if(!k)return"";const S=ne.filter(ie=>ie.kind===k.kind&&ie.id!==k.id).length;return m2(k,R,S,n)},[k,R,ne,r.code]),K=c.useMemo(()=>{const S={};return ue.forEach(ie=>{S[ie.date]=(S[ie.date]||0)+(Number(ie.pl)||0)}),S},[ue]),oe=ue.filter(S=>S.date===b),ye=K[b]||0,X=ye>0?"positive":ye<0?"negative":"neutral",Y=c.useMemo(()=>{const S=u,ie=(S.getDay()+6)%7,fe=new Date(S.getFullYear(),S.getMonth()+1,0).getDate(),U=[];for(let xe=0;xe<ie;xe++)U.push(null);for(let xe=1;xe<=fe;xe++){const ve=Zh(new Date(S.getFullYear(),S.getMonth(),xe)),Ae=K[ve],tt=!!s[ve];U.push({date:ve,day:xe,pl:Ae,hasLearning:tt,has:Ae!==void 0||tt})}return U},[u,K,s]),ce=S=>j(ie=>new Date(ie.getFullYear(),ie.getMonth()+S,1)),J=u.toLocaleDateString("en-US",{month:"long",year:"numeric"}),I=(S="swing")=>C({...f2(b),kind:S}),$=S=>C({id:S.id,kind:S.kind,direction:S.direction||"long",instrument:S.instrument,purchase_date:S.purchase_date||S.date,entry_price:S.entry_price??"",sl_price:S.sl_price??"",tgt_price:S.tgt_price??"",qty:S.qty??"",note:S.note||""}),H=S=>C(ie=>({...ie,kind:S,direction:Vp(S)?ie.direction:"long"})),P=async()=>{if(A)return;const S={kind:k.kind,direction:k.direction,instrument:k.instrument.trim(),purchase_date:k.purchase_date,entry_price:gr(k.entry_price),sl_price:gr(k.sl_price),tgt_price:gr(k.tgt_price),qty:gr(k.qty),note:k.note.trim()};try{k.id?await M.updateTradeEntry(k.id,S):await M.createTradeEntry(S),C(null),Z()}catch(ie){window.alert(ie.message||"Could not save this trade.")}},ae=async S=>{window.confirm("Delete this trade?")&&(await M.deleteTradeEntry(S.id),Z())},me=(S,ie)=>x({trade:S,outcome:ie,date:S.kind==="intraday"&&S.purchase_date||ua}),Ne=async()=>{try{await M.bookTradeEntry(D.trade.id,D.outcome,D.date),x(null),Z()}catch(S){window.alert(S.message||"Could not book this trade.")}},Q=async S=>{await M.reopenTradeEntry(S.id),Z()},re=async()=>{await M.setTradeLearning(b,y),Z()},G=(s[b]||"")!==y,le=f>=l,E=g>0?Ht:g<0?Dt:"var(--text)";return t.jsxs("div",{style:q.page,children:[t.jsx("div",{style:q.head,children:t.jsxs("div",{children:[t.jsx("div",{style:q.eyebrow,children:"Anvil · Trading Journal"}),t.jsx("h1",{style:q.h1,children:"Trading Journal"}),t.jsx("div",{style:q.subhead,children:"Open trades with your entry, SL & target — book profit/loss and P/L is calculated for you."})]})}),t.jsxs("div",{style:q.capStrip,children:[t.jsxs("div",{style:q.capBox,children:[t.jsxs("div",{style:q.capLabel,children:[t.jsx(Bg,{size:13})," Starting capital"]}),t.jsx("div",{style:q.capVal,children:n(l)}),t.jsx("div",{style:q.capHint,children:"Set in Settings → Trading"})]}),t.jsxs("div",{style:q.capBox,children:[t.jsxs("div",{style:q.capLabel,children:[t.jsx(ph,{size:13})," Net P/L (booked)"]}),t.jsxs("div",{style:{...q.capVal,color:E},children:[g>=0?"+":"",n(g)]}),t.jsxs("div",{style:q.capHint,children:[ue.length," booked · ",ne.length," open"]})]}),t.jsxs("div",{style:{...q.capBox,...q.capBoxMain,borderColor:le?Ht:Dt},children:[t.jsxs("div",{style:q.capLabel,children:[le?t.jsx(Ji,{size:13,color:Ht}):t.jsx(ro,{size:13,color:Dt})," Current balance"]}),t.jsx("div",{style:{...q.capValBig,color:le?Ht:Dt},children:n(f)}),t.jsx("div",{style:q.capHint,children:le?"Above starting capital":"Below starting capital"})]})]}),t.jsxs("div",{style:q.card,children:[t.jsxs("div",{style:q.cardTitleRow,children:[t.jsxs("div",{children:[t.jsxs("div",{style:q.cardTitle,children:[t.jsx(bh,{size:15,color:ns})," Open trades"]}),t.jsx("div",{style:q.cardSub,children:"Positions you haven't booked yet — mark profit or loss when you exit."})]}),t.jsx("div",{style:q.addRow,children:il.map(S=>t.jsxs("button",{onClick:()=>I(S.id),style:{...q.addKindBtn,color:S.color,borderColor:S.color+"55",background:S.color+"12"},children:[t.jsx(bt,{size:14})," ",S.label]},S.id))})]}),ne.length>0?t.jsx("div",{style:q.openScroll,children:ne.map(S=>{const ie=ga(S.kind);return t.jsxs("div",{style:q.openRow,children:[t.jsx("span",{style:{...q.kindTag,background:ie.color+"1A",color:ie.color},children:ie.label}),t.jsxs("div",{style:q.openBody,children:[t.jsxs("div",{style:q.openTop,children:[t.jsxs("span",{style:q.tradeInstr,children:[S.instrument||"—",t.jsx(Kp,{direction:S.direction})]}),t.jsx("span",{style:q.openQty,children:S.qty?`${S.qty} qty`:""})]}),t.jsxs("div",{style:q.openMeta,children:[t.jsxs("span",{style:q.metaPill,children:["Bought ",Yp(S.purchase_date)]}),S.entry_price?t.jsxs("span",{style:q.metaPill,children:["Entry ",S.entry_price]}):null,S.sl_price?t.jsxs("span",{style:{...q.metaPill,color:Dt},children:["SL ",S.sl_price]}):null,S.tgt_price?t.jsxs("span",{style:{...q.metaPill,color:Ht},children:["TGT ",S.tgt_price]}):null]})]}),t.jsxs("div",{style:q.bookBtns,children:[t.jsxs("button",{onClick:()=>me(S,"profit"),style:{...q.bookBtn,background:Ht},children:[t.jsx(Ji,{size:13})," Profit"]}),t.jsxs("button",{onClick:()=>me(S,"loss"),style:{...q.bookBtn,background:Dt},children:[t.jsx(ro,{size:13})," Loss"]}),t.jsx("button",{onClick:()=>$(S),style:q.iconGhost,title:"Edit",children:t.jsx(jt,{size:13})}),t.jsx("button",{onClick:()=>ae(S),style:q.iconGhost,title:"Delete",children:t.jsx(hi,{size:13})})]})]},S.id)})}):t.jsx("div",{style:q.noTrades,children:T?"No open trades. Add one with the buttons above.":"Loading…"})]}),t.jsxs("div",{style:{...q.cols,gridTemplateColumns:e?"1fr":"320px 1fr"},children:[t.jsxs("div",{style:q.card,children:[t.jsxs("div",{style:q.calHead,children:[t.jsx("button",{onClick:()=>ce(-1),style:q.calNav,children:t.jsx(An,{size:16})}),t.jsx("span",{style:q.calTitle,children:J}),t.jsx("button",{onClick:()=>ce(1),style:q.calNav,children:t.jsx(cn,{size:16})})]}),t.jsxs("div",{style:q.calGrid,children:[["M","T","W","T","F","S","S"].map((S,ie)=>t.jsx("div",{style:q.calDow,children:S},ie)),Y.map((S,ie)=>S===null?t.jsx("div",{},ie):t.jsxs("button",{onClick:()=>p(S.date),style:{...q.calCell,...S.date===b?q.calCellOn:{},...S.date===ua&&S.date!==b?q.calCellToday:{}},children:[t.jsx("span",{children:S.day}),S.pl!==void 0&&S.pl!==0&&t.jsx("span",{style:{...q.calDot,background:S.date===b?"#fff":S.pl>0?Ht:Dt}}),S.pl===void 0&&S.hasLearning&&t.jsx("span",{style:{...q.calDot,background:S.date===b?"#fff":"var(--text-3)"}})]},S.date))]}),t.jsxs("div",{style:q.calLegend,children:[t.jsxs("span",{children:[t.jsx("span",{style:{...q.legDot,background:Ht}})," Profit"]}),t.jsxs("span",{children:[t.jsx("span",{style:{...q.legDot,background:Dt}})," Loss"]}),t.jsxs("span",{children:[t.jsx("span",{style:{...q.legDot,background:"var(--text-3)"}})," Learning only"]})]})]}),t.jsxs("div",{children:[t.jsxs("div",{style:q.card,children:[t.jsxs("div",{style:q.cardTitleRow,children:[t.jsxs("div",{children:[t.jsx("div",{style:q.cardTitle,children:b2(b)}),t.jsxs("div",{style:q.cardSub,children:[oe.length," booked trade",oe.length===1?"":"s"," this day"]})]}),t.jsxs("div",{style:q.dayPLWrap,children:[t.jsx("span",{style:{...q.sentiment,...X==="positive"?{background:Ht+"1A",color:Ht}:X==="negative"?{background:Dt+"1A",color:Dt}:{background:"var(--hover)",color:"var(--text-3)"}},children:X==="positive"?"Positive day":X==="negative"?"Negative day":"No trades"}),t.jsxs("span",{style:{...q.dayPL,color:ye>0?Ht:ye<0?Dt:"var(--text-2)"},children:[ye>=0?"+":"",n(ye)]})]})]}),oe.length>0?t.jsx("div",{style:q.tradeList,children:oe.map(S=>{const ie=ga(S.kind),fe=(Number(S.pl)||0)>=0;return t.jsxs("div",{style:q.tradeRow,children:[t.jsx("span",{style:{...q.kindTag,background:ie.color+"1A",color:ie.color},children:ie.label}),t.jsxs("div",{style:q.tradeBody,children:[t.jsxs("div",{style:q.tradeTop,children:[t.jsxs("span",{style:q.tradeInstr,children:[S.instrument||"—",t.jsx(Kp,{direction:S.direction})]}),t.jsxs("span",{style:{...q.tradePL,color:fe?Ht:Dt},children:[fe?"+":"",n(Number(S.pl)||0)]})]}),t.jsxs("div",{style:q.tradeMeta,children:[S.entry_price?t.jsxs("span",{style:q.metaPill,children:["Entry ",S.entry_price]}):null,S.sl_price?t.jsxs("span",{style:q.metaPill,children:["SL ",S.sl_price]}):null,S.tgt_price?t.jsxs("span",{style:q.metaPill,children:["TGT ",S.tgt_price]}):null,S.qty?t.jsxs("span",{style:q.metaPill,children:[S.qty," qty"]}):null,S.purchase_date&&S.purchase_date!==S.date&&t.jsxs("span",{style:q.metaPill,children:["Bought ",Yp(S.purchase_date)]}),S.note&&t.jsx("span",{style:q.tradeNote,children:S.note})]})]}),t.jsx("button",{onClick:()=>Q(S),style:q.iconGhost,title:"Reopen",children:t.jsx(Eh,{size:13})}),t.jsx("button",{onClick:()=>ae(S),style:q.iconGhost,title:"Delete",children:t.jsx(hi,{size:13})})]},S.id)})}):t.jsx("div",{style:q.noTrades,children:"No trades booked on this day — you can still record a learning below."})]}),t.jsxs("div",{style:q.card,children:[t.jsxs("div",{style:q.cardTitle,children:[t.jsx(Ds,{size:15,color:ns})," Daily learning"]}),t.jsx("textarea",{value:y,onChange:S=>_(S.target.value),placeholder:"What did you learn today? Mistakes, what worked, discipline notes…",style:q.learnArea}),t.jsxs("button",{onClick:re,disabled:!G,style:{...q.saveBtn,...G?{}:{opacity:.5,cursor:"not-allowed"}},children:[t.jsx(He,{size:14})," Save learning"]})]})]})]}),k&&(()=>{const S=ga(k.kind),ie=k.direction==="short",fe=ie?Dt:Ht,U=vd(k,"profit"),xe=vd(k,"loss");return t.jsx("div",{style:q.overlay,onClick:()=>C(null),children:t.jsxs("div",{style:q.sheet,onClick:ve=>ve.stopPropagation(),children:[t.jsxs("div",{style:{...q.sheetHead,background:`linear-gradient(135deg, ${S.color}, ${fe})`},children:[t.jsxs("div",{style:q.sheetHeadRow,children:[t.jsx("span",{style:q.sheetKicker,children:k.id?"Edit position":"New position"}),t.jsx("button",{onClick:()=>C(null),style:q.sheetClose,children:t.jsx(Fe,{size:16})})]}),t.jsx("div",{style:q.sheetTitle,children:k.instrument||"Open trade"}),t.jsxs("div",{style:q.sheetChips,children:[t.jsx("span",{style:q.sheetChip,children:S.label}),t.jsx("span",{style:q.sheetChip,children:ie?"Short ▼":"Long ▲"}),gr(k.qty)>0&&t.jsxs("span",{style:q.sheetChip,children:[gr(k.qty)," qty"]})]})]}),t.jsxs("div",{style:q.sheetBody,children:[t.jsx("label",{style:q.fLabel,children:"Type"}),t.jsx("div",{style:q.seg,children:il.map(ve=>t.jsx("button",{type:"button",onClick:()=>H(ve.id),style:{...q.segBtn,...k.kind===ve.id?{...q.segBtnOn,background:ve.color}:{}},children:ve.label},ve.id))}),Vp(k.kind)&&t.jsxs(t.Fragment,{children:[t.jsx("label",{style:q.fLabel,children:"Direction"}),t.jsxs("div",{style:q.seg,children:[t.jsxs("button",{type:"button",onClick:()=>C(ve=>({...ve,direction:"long"})),style:{...q.segBtn,...ie?{}:{...q.segBtnOn,background:Ht}},children:[t.jsx(Ji,{size:14})," Long"]}),t.jsxs("button",{type:"button",onClick:()=>C(ve=>({...ve,direction:"short"})),style:{...q.segBtn,...ie?{...q.segBtnOn,background:Dt}:{}},children:[t.jsx(ro,{size:14})," Short"]})]}),t.jsx("div",{style:q.dirHint,children:ie?"Short — profit when price falls. SL sits above CMP, target below.":"Long — profit when price rises. SL sits below CMP, target above."})]}),t.jsx("label",{style:q.fLabel,children:"Instrument"}),t.jsx("input",{autoFocus:!0,value:k.instrument,onChange:ve=>C(Ae=>({...Ae,instrument:ve.target.value.toUpperCase()})),placeholder:"e.g. NIFTY 22000 CE, RELIANCE",style:{...q.field,textTransform:"uppercase"}}),t.jsxs("div",{style:q.grid2,children:[t.jsxs("div",{children:[t.jsx("label",{style:q.fLabel,children:"Entry (CMP)"}),t.jsx("input",{type:"number",inputMode:"decimal",value:k.entry_price,onChange:ve=>C(Ae=>({...Ae,entry_price:ve.target.value})),placeholder:"0",style:q.field})]}),t.jsxs("div",{children:[t.jsx("label",{style:q.fLabel,children:"Quantity"}),t.jsx("input",{type:"number",inputMode:"decimal",value:k.qty,onChange:ve=>C(Ae=>({...Ae,qty:ve.target.value})),placeholder:"0",style:q.field})]})]}),t.jsxs("div",{style:q.grid2,children:[t.jsxs("div",{children:[t.jsxs("label",{style:{...q.fLabel,color:Dt},children:["Stop loss",ie?" (above)":" (below)"]}),t.jsx("input",{type:"number",inputMode:"decimal",value:k.sl_price,onChange:ve=>C(Ae=>({...Ae,sl_price:ve.target.value})),placeholder:"0",style:{...q.field,borderColor:Dt+"55"}})]}),t.jsxs("div",{children:[t.jsxs("label",{style:{...q.fLabel,color:Ht},children:["Target",ie?" (below)":" (above)"]}),t.jsx("input",{type:"number",inputMode:"decimal",value:k.tgt_price,onChange:ve=>C(Ae=>({...Ae,tgt_price:ve.target.value})),placeholder:"0",style:{...q.field,borderColor:Ht+"55"}})]})]}),t.jsxs("div",{style:q.preview2,children:[t.jsxs("div",{style:{...q.previewCell,background:Ht+"12"},children:[t.jsx("span",{style:q.previewLbl,children:"If target hit"}),t.jsxs("span",{style:{...q.previewVal,color:Ht},children:["+",n(U)]})]}),t.jsxs("div",{style:{...q.previewCell,background:Dt+"12"},children:[t.jsx("span",{style:q.previewLbl,children:"If SL hit"}),t.jsx("span",{style:{...q.previewVal,color:Dt},children:n(xe)})]})]}),t.jsx("label",{style:q.fLabel,children:"Purchase date"}),t.jsx("input",{type:"date",value:k.purchase_date,onChange:ve=>C(Ae=>({...Ae,purchase_date:ve.target.value})),style:q.field}),t.jsx("label",{style:q.fLabel,children:"Note (optional)"}),t.jsx("input",{value:k.note,onChange:ve=>C(Ae=>({...Ae,note:ve.target.value})),placeholder:"reason, setup, emotion…",style:q.field}),A?t.jsx("div",{style:q.errBanner,children:A}):t.jsx(y2,{rules:R,kind:k.kind,money:n})]}),t.jsxs("div",{style:q.sheetFoot,children:[t.jsx("button",{onClick:()=>C(null),style:q.ghostBtn,children:"Cancel"}),t.jsxs("button",{onClick:P,disabled:!!A,style:{...q.primaryBtn,background:fe,...A?{opacity:.45,cursor:"not-allowed"}:{}},children:[t.jsx(He,{size:16})," ",k.id?"Save changes":"Open trade"]})]})]})})})(),D&&(()=>{const S=D.outcome==="profit",ie=S?Ht:Dt,fe=D.trade,U=(fe.direction||"long")==="short",xe=ga(fe.kind),ve=S?U?`(Entry ${fe.entry_price||0} − TGT ${fe.tgt_price||0}) × ${fe.qty||0}`:`(TGT ${fe.tgt_price||0} − Entry ${fe.entry_price||0}) × ${fe.qty||0}`:U?`(SL ${fe.sl_price||0} − Entry ${fe.entry_price||0}) × ${fe.qty||0}`:`(Entry ${fe.entry_price||0} − SL ${fe.sl_price||0}) × ${fe.qty||0}`;return t.jsx("div",{style:q.overlay,onClick:()=>x(null),children:t.jsxs("div",{style:q.sheet,onClick:Ae=>Ae.stopPropagation(),children:[t.jsxs("div",{style:{...q.sheetHead,background:`linear-gradient(135deg, ${ie}, ${ie}CC)`},children:[t.jsxs("div",{style:q.sheetHeadRow,children:[t.jsx("span",{style:q.sheetKicker,children:S?"Book profit":"Book loss"}),t.jsx("button",{onClick:()=>x(null),style:q.sheetClose,children:t.jsx(Fe,{size:16})})]}),t.jsx("div",{style:q.sheetTitle,children:fe.instrument||"—"}),t.jsxs("div",{style:q.sheetChips,children:[t.jsx("span",{style:q.sheetChip,children:xe.label}),t.jsx("span",{style:q.sheetChip,children:U?"Short":"Long"})]})]}),t.jsxs("div",{style:q.sheetBody,children:[t.jsxs("div",{style:q.bookHero,children:[t.jsx("span",{style:q.bookHeroLbl,children:S?"Realized profit":"Realized loss"}),t.jsxs("span",{style:{...q.bookHeroVal,color:ie},children:[S?"+":"",n(vd(fe,D.outcome))]}),t.jsx("span",{style:q.bookHeroMeta,children:ve})]}),fe.kind==="intraday"?t.jsxs(t.Fragment,{children:[t.jsx("label",{style:q.fLabel,children:"Outcome date · locked to purchase day"}),t.jsx("input",{type:"date",value:D.date,min:fe.purchase_date,max:fe.purchase_date,disabled:!0,style:{...q.field,opacity:.7,cursor:"not-allowed"}}),t.jsx("div",{style:q.dirHint,children:"Intraday trades are squared off the same day they're bought."})]}):t.jsxs(t.Fragment,{children:[t.jsx("label",{style:q.fLabel,children:"Outcome date · colours this day"}),t.jsx("input",{type:"date",value:D.date,onChange:Ae=>x(tt=>({...tt,date:Ae.target.value})),style:q.field})]})]}),t.jsxs("div",{style:q.sheetFoot,children:[t.jsx("button",{onClick:()=>x(null),style:q.ghostBtn,children:"Cancel"}),t.jsxs("button",{onClick:Ne,disabled:!D.date,style:{...q.primaryBtn,background:ie,...D.date?{}:{opacity:.45,cursor:"not-allowed"}},children:[t.jsx(He,{size:16})," Book ",D.outcome]})]})]})})})()]})}function Kp({direction:e}){return(e||"long")!=="short"?null:t.jsxs("span",{style:q.dirBadge,children:[t.jsx(ro,{size:10})," SHORT"]})}function y2({rules:e,kind:r,money:n}){const o=[],i=e.capital||0;e.rr>0&&o.push(`Min risk:reward 1:${e.rr}`),e.risk_pct>0&&i>0&&o.push(`Max risk ${n(i*e.risk_pct/100)} (${e.risk_pct}%)`);const s=(e.diversification||{})[r]||0;return s>0&&(i>0&&o.push(`Max position ${n(i/s)}`),o.push(`Max ${s} open ${r}`)),o.length?t.jsxs("div",{style:q.rulesHint,children:["Rules · ",o.join(" · ")]}):null}const q={page:{fontFamily:"'Inter',system-ui,sans-serif",background:"var(--bg)",minHeight:"100%",padding:"26px 22px 48px",color:"var(--text)",boxSizing:"border-box",maxWidth:1100,margin:"0 auto"},head:{marginBottom:16},eyebrow:{fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-3)",fontWeight:600,marginBottom:4},h1:{fontSize:28,fontWeight:700,margin:0,letterSpacing:"-0.02em",fontFamily:"'Fraunces',Georgia,serif"},subhead:{fontSize:12.5,color:"var(--text-3)",marginTop:3},capStrip:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:12,marginBottom:18},capBox:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:"13px 16px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},capBoxMain:{borderWidth:2},capLabel:{display:"flex",alignItems:"center",gap:5,fontSize:11.5,fontWeight:600,color:"var(--text-2)"},capVal:{fontSize:20,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:4,lineHeight:1.1},capValBig:{fontSize:26,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:4,lineHeight:1.1},capHint:{fontSize:10.5,color:"var(--text-3)",marginTop:4},cols:{display:"grid",gap:16,alignItems:"start"},card:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",marginBottom:16},calHead:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},calTitle:{fontSize:14,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},calNav:{width:30,height:30,borderRadius:8,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",display:"grid",placeItems:"center"},calGrid:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:4},calDow:{fontSize:10,fontWeight:700,color:"var(--text-3)",textAlign:"center",padding:"2px 0"},calCell:{position:"relative",aspectRatio:"1",border:"1px solid transparent",borderRadius:8,background:"var(--bg)",color:"var(--text-2)",fontSize:12.5,fontWeight:600,cursor:"pointer",display:"grid",placeItems:"center",fontFamily:"inherit"},calCellOn:{background:ns,color:"#fff"},calCellToday:{borderColor:ns},calDot:{position:"absolute",bottom:4,width:5,height:5,borderRadius:"50%"},calLegend:{display:"flex",gap:12,flexWrap:"wrap",marginTop:12,fontSize:10.5,color:"var(--text-3)",fontWeight:600},legDot:{display:"inline-block",width:7,height:7,borderRadius:"50%",marginRight:4},cardTitleRow:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:10,marginBottom:12,flexWrap:"wrap"},cardTitle:{display:"flex",alignItems:"center",gap:6,fontSize:15,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},cardSub:{fontSize:12,color:"var(--text-3)",marginTop:2},dayPLWrap:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:4},sentiment:{fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:10},dayPL:{fontSize:17,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},addRow:{display:"flex",gap:8,flexWrap:"wrap"},addKindBtn:{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid",borderRadius:9,padding:"7px 12px",fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},openScroll:{display:"flex",flexDirection:"column",gap:8,maxHeight:320,overflowY:"auto",paddingRight:2},openRow:{display:"flex",alignItems:"flex-start",gap:9,padding:"10px 11px",background:"var(--bg)",border:"1px solid var(--border)",borderRadius:10,flexWrap:"wrap"},openBody:{flex:1,minWidth:140},openTop:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"baseline"},openQty:{fontSize:11.5,fontWeight:700,color:"var(--text-3)",flexShrink:0},openMeta:{display:"flex",gap:6,flexWrap:"wrap",marginTop:5,alignItems:"center"},bookBtns:{display:"flex",gap:6,alignItems:"center",flexShrink:0},bookBtn:{display:"inline-flex",alignItems:"center",gap:4,border:"none",color:"#fff",padding:"6px 11px",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},tradeList:{display:"flex",flexDirection:"column",gap:8},tradeRow:{display:"flex",alignItems:"flex-start",gap:9,padding:"9px 10px",background:"var(--bg)",border:"1px solid var(--border)",borderRadius:10},kindTag:{fontSize:10.5,fontWeight:800,padding:"3px 8px",borderRadius:7,flexShrink:0,marginTop:1},tradeBody:{flex:1,minWidth:0},tradeTop:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"baseline"},tradeInstr:{fontSize:13.5,fontWeight:700,wordBreak:"break-word"},tradePL:{fontSize:13.5,fontWeight:800,flexShrink:0},tradeMeta:{display:"flex",gap:6,flexWrap:"wrap",marginTop:5,alignItems:"center"},metaPill:{fontSize:10.5,fontWeight:700,color:"var(--text-2)",background:"var(--hover)",borderRadius:6,padding:"2px 7px"},tradeNote:{fontSize:11.5,color:"var(--text-3)",fontStyle:"italic"},iconGhost:{border:"none",background:"none",color:"var(--text-3)",cursor:"pointer",padding:3,display:"grid",placeItems:"center",flexShrink:0},noTrades:{fontSize:12.5,color:"var(--text-3)",fontStyle:"italic",textAlign:"center",padding:"16px 8px",border:"1px dashed var(--border)",borderRadius:8},learnArea:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:10,padding:"11px 12px",fontSize:14,fontFamily:"inherit",color:"var(--text)",background:"var(--bg)",outline:"none",minHeight:90,resize:"vertical",lineHeight:1.55,marginTop:8},saveBtn:{display:"inline-flex",alignItems:"center",gap:6,marginTop:10,border:"none",background:ns,color:"#fff",padding:"9px 16px",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},dirBadge:{display:"inline-flex",alignItems:"center",gap:2,fontSize:9.5,fontWeight:800,letterSpacing:"0.03em",color:Dt,background:Dt+"1A",borderRadius:5,padding:"1px 5px",marginLeft:6,verticalAlign:"middle"},overlay:{position:"fixed",inset:0,background:"rgba(20,18,15,0.55)",backdropFilter:"blur(3px)",zIndex:200,display:"grid",placeItems:"center",padding:16},sheet:{background:"var(--surface)",borderRadius:20,width:"100%",maxWidth:460,maxHeight:"92vh",display:"flex",flexDirection:"column",overflow:"hidden",boxShadow:"0 24px 64px rgba(0,0,0,0.34)",boxSizing:"border-box"},sheetHead:{padding:"16px 18px 18px",color:"#fff"},sheetHeadRow:{display:"flex",justifyContent:"space-between",alignItems:"center"},sheetKicker:{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",opacity:.9},sheetClose:{border:"none",background:"rgba(255,255,255,0.2)",color:"#fff",width:30,height:30,borderRadius:9,cursor:"pointer",display:"grid",placeItems:"center",flexShrink:0},sheetTitle:{fontSize:22,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:8,wordBreak:"break-word",lineHeight:1.15},sheetChips:{display:"flex",gap:6,flexWrap:"wrap",marginTop:10},sheetChip:{fontSize:11,fontWeight:700,background:"rgba(255,255,255,0.22)",color:"#fff",borderRadius:20,padding:"3px 10px"},sheetBody:{padding:"16px 18px 6px",overflowY:"auto"},sheetFoot:{display:"flex",gap:10,padding:"14px 18px 16px",borderTop:"1px solid var(--border)",background:"var(--surface)"},fLabel:{display:"block",fontSize:11,fontWeight:700,color:"var(--text-2)",margin:"12px 0 5px",textTransform:"uppercase",letterSpacing:"0.05em"},field:{width:"100%",border:"1px solid var(--border)",borderRadius:10,padding:"10px 12px",fontSize:14,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--bg)",color:"var(--text)"},grid2:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},seg:{display:"flex",gap:4,background:"var(--bg)",border:"1px solid var(--border)",borderRadius:12,padding:4},segBtn:{flex:1,display:"inline-flex",alignItems:"center",justifyContent:"center",gap:5,border:"none",background:"none",color:"var(--text-2)",padding:"9px 0",borderRadius:9,fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",transition:"background 0.12s"},segBtnOn:{color:"#fff",boxShadow:"0 2px 8px rgba(0,0,0,0.18)"},dirHint:{fontSize:11.5,color:"var(--text-3)",marginTop:7,lineHeight:1.4},preview2:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginTop:14},previewCell:{display:"flex",flexDirection:"column",gap:2,borderRadius:12,padding:"11px 13px"},previewLbl:{fontSize:11,fontWeight:600,color:"var(--text-2)"},previewVal:{fontSize:18,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif"},bookHero:{textAlign:"center",padding:"14px 0 6px"},bookHeroLbl:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.06em"},bookHeroVal:{display:"block",fontSize:34,fontWeight:800,fontFamily:"'Fraunces',Georgia,serif",marginTop:4,lineHeight:1.05},bookHeroMeta:{display:"block",fontSize:11.5,color:"var(--text-3)",marginTop:6},errBanner:{marginTop:14,background:Dt+"18",border:`1px solid ${Dt}55`,color:Dt,borderRadius:10,padding:"10px 12px",fontSize:12.5,fontWeight:600,lineHeight:1.4},rulesHint:{marginTop:14,fontSize:11.5,color:"var(--text-3)",fontWeight:600,lineHeight:1.4},ghostBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"11px 18px",borderRadius:11,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},primaryBtn:{flex:1,display:"inline-flex",alignItems:"center",justifyContent:"center",gap:6,border:"none",color:"#fff",padding:"11px 18px",borderRadius:11,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}},zc=[{id:"sandstone",name:"Sandstone",description:"Warm editorial light — the original Anvil look.",dark:!1,swatch:["#F7F6F3","#4C9A6B","#26241F"],vars:{"--bg":"#F7F6F3","--surface":"#FFFFFF","--surface-2":"#FAFAF8","--hover":"#F2F1EC","--border":"#ECEAE3","--text":"#26241F","--text-2":"#6B675E","--text-3":"#9A968C","--accent":"#4C9A6B","--accent-strong":"#26241F","--accent-2":"#3A352C"}},{id:"midnight",name:"Midnight",description:"Deep low-glare dark mode for night owls and focus.",dark:!0,swatch:["#161513","#6FB58C","#ECEAE3"],vars:{"--bg":"#161513","--surface":"#211F1C","--surface-2":"#1B1A17","--hover":"#2B2924","--border":"#34312B","--text":"#ECEAE3","--text-2":"#B6B1A6","--text-3":"#8A857A","--accent":"#6FB58C","--accent-strong":"#2E6F4B","--accent-2":"#245C3E"}},{id:"blossom",name:"Blossom",description:"Soft rose & blush — gentle, warm, and feminine.",dark:!1,swatch:["#FFF5F8","#E0608E","#B23A6B"],vars:{"--bg":"#FFF5F8","--surface":"#FFFFFF","--surface-2":"#FFF0F4","--hover":"#FDE7EE","--border":"#F6D9E2","--text":"#3D2230","--text-2":"#7A5466","--text-3":"#B08799","--accent":"#E0608E","--accent-strong":"#B23A6B","--accent-2":"#9C2F5C"}},{id:"tide",name:"Tide",description:"Calm professional blues — clean and focused.",dark:!1,swatch:["#F1F6FA","#2E86C1","#1C4E73"],vars:{"--bg":"#F1F6FA","--surface":"#FFFFFF","--surface-2":"#ECF3F9","--hover":"#E2EEF6","--border":"#D5E3EE","--text":"#13283A","--text-2":"#4A6275","--text-3":"#8AA0B0","--accent":"#2E86C1","--accent-strong":"#1C4E73","--accent-2":"#163E5C"}},{id:"velocity",name:"Velocity",description:"High-energy sport — crisp slate with electric orange.",dark:!1,swatch:["#F4F5F7","#F4511E","#1F2A37"],vars:{"--bg":"#F4F5F7","--surface":"#FFFFFF","--surface-2":"#EEF0F3","--hover":"#E7EAEE","--border":"#DCE0E6","--text":"#18202B","--text-2":"#515B68","--text-3":"#8B95A1","--accent":"#F4511E","--accent-strong":"#1F2A37","--accent-2":"#16202B"}},{id:"evergreen",name:"Evergreen",description:"Earthy forest greens — grounded and natural.",dark:!1,swatch:["#F2F6F1","#3E8E52","#2A4A30"],vars:{"--bg":"#F2F6F1","--surface":"#FFFFFF","--surface-2":"#ECF2EA","--hover":"#E4EEE2","--border":"#D7E4D3","--text":"#1E2B20","--text-2":"#4F6151","--text-3":"#8AA08C","--accent":"#3E8E52","--accent-strong":"#2A4A30","--accent-2":"#213B26"}},{id:"amethyst",name:"Amethyst",description:"Premium purple & plum — elegant and refined.",dark:!1,swatch:["#F6F4FB","#7A4FE0","#3A2D5C"],vars:{"--bg":"#F6F4FB","--surface":"#FFFFFF","--surface-2":"#F1EDF9","--hover":"#EAE3F6","--border":"#DFD6F0","--text":"#241B36","--text-2":"#5A4E72","--text-3":"#9588AE","--accent":"#7A4FE0","--accent-strong":"#3A2D5C","--accent-2":"#2E2349"}}],Qp="sandstone",Jh="anvil_theme",v2=e=>zc.find(r=>r.id===e)||zc[0];function ef(){try{return localStorage.getItem(Jh)||Qp}catch{return Qp}}function Oi(e,r=!0){const n=v2(e),o=document.documentElement;Object.entries(n.vars).forEach(([s,a])=>o.style.setProperty(s,a)),o.style.colorScheme=n.dark?"dark":"light",o.setAttribute("data-theme",n.id);const i=document.querySelector('meta[name="theme-color"]');if(i&&i.setAttribute("content",n.vars["--surface"]),r)try{localStorage.setItem(Jh,n.id)}catch{}return n.id}const j2=e=>e%10===1&&e!==11?"st":e%10===2&&e!==12?"nd":e%10===3&&e!==13?"rd":"th";function k2(e=560){const[r,n]=c.useState(()=>window.innerWidth<=e);return c.useEffect(()=>{const o=()=>n(window.innerWidth<=e);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),r}function w2({screens:e,order:r,hidden:n,themeId:o,currency:i,monthStartDay:s,ticker:a,defaultScreen:l,onSetDefault:d,onSaveSidebar:g,onPreviewTheme:m,onCommitTheme:f,onSelectCurrency:h,onSelectMonthStartDay:R,onSaveTicker:B,onClose:T}){const[z,b]=c.useState("sidebar"),[p,u]=c.useState(()=>r.map(de=>({id:de,hidden:n.includes(de)}))),[j,k]=c.useState(o),[C,D]=c.useState(""),[x,y]=c.useState(!1),[_,Z]=c.useState(""),[ne,ue]=c.useState(!1),[A,K]=c.useState(""),[oe,ye]=c.useState(""),[X,Y]=c.useState({swing:"",fno:"",intraday:""}),[ce,J]=c.useState(!1),I=k2(),[$,H]=c.useState(!!(a!=null&&a.enabled)),[P,ae]=c.useState(()=>{const de=Array.isArray(a==null?void 0:a.statements)?a.statements.slice(0,5):[];return de.length?de:[""]}),[me,Ne]=c.useState((a==null?void 0:a.speed)??60),[Q,re]=c.useState((a==null?void 0:a.delay)??3),[G,le]=c.useState(!1),E=(de,Me)=>ae(lt=>lt.map((dt,kt)=>kt===de?Me:dt)),S=()=>ae(de=>de.length<5?[...de,""]:de),ie=de=>ae(Me=>Me.length>1?Me.filter((lt,dt)=>dt!==de):Me),fe=()=>{const de=P.map(Me=>Me.trim()).filter(Boolean).slice(0,5);B({enabled:$,statements:de,speed:Number(me),delay:Number(Q)}),le(!0),setTimeout(()=>le(!1),1500)};c.useEffect(()=>{M.getSetting("golden_music").then(de=>D((de==null?void 0:de.value)||"")).catch(()=>{})},[]);const U=()=>{M.setSetting("golden_music",C.trim()).then(()=>{y(!0),setTimeout(()=>y(!1),1500)}).catch(()=>{})};c.useEffect(()=>{M.getSetting("trading_capital").then(de=>Z((de==null?void 0:de.value)||"")).catch(()=>{})},[]);const xe=()=>{M.setSetting("trading_capital",String(parseFloat(_)||0)).then(()=>{ue(!0),setTimeout(()=>ue(!1),1500)}).catch(()=>{})};c.useEffect(()=>{M.getSetting("trading_risk_pct").then(de=>K((de==null?void 0:de.value)??"")).catch(()=>{}),M.getSetting("trading_rr").then(de=>ye((de==null?void 0:de.value)??"")).catch(()=>{}),M.getSetting("trading_diversification").then(de=>{const Me=(de==null?void 0:de.value)||{};Y({swing:Me.swing??"",fno:Me.fno??"",intraday:Me.intraday??""})}).catch(()=>{})},[]);const ve=()=>{const de={swing:parseInt(X.swing,10)||0,fno:parseInt(X.fno,10)||0,intraday:parseInt(X.intraday,10)||0};Promise.all([M.setSetting("trading_risk_pct",parseFloat(A)||0),M.setSetting("trading_rr",parseFloat(oe)||0),M.setSetting("trading_diversification",de)]).then(()=>{J(!0),setTimeout(()=>J(!1),1500)}).catch(()=>{})},Ae=de=>{k(de),m(de)},tt=p.filter(de=>!de.hidden).length,ft=(de,Me)=>{const lt=de+Me;if(lt<0||lt>=p.length)return;const dt=[...p];[dt[de],dt[lt]]=[dt[lt],dt[de]],u(dt)},_e=de=>{const Me=p[de];if(!Me.hidden&&tt<=1)return;const lt=[...p];lt[de]={...Me,hidden:!Me.hidden},u(lt)},it=()=>{g(p.map(de=>de.id),p.filter(de=>de.hidden).map(de=>de.id))},Ze=I?{...Se.overlay,padding:0}:Se.overlay,st=I?{...Se.modal,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"100%",borderRadius:0,border:"none"}:Se.modal;return t.jsx("div",{style:Ze,onClick:T,children:t.jsxs("div",{style:st,onClick:de=>de.stopPropagation(),children:[t.jsxs("div",{style:Se.head,children:[t.jsx("div",{style:Se.title,children:"Settings"}),t.jsx("button",{onClick:T,style:Se.closeBtn,children:t.jsx(Fe,{size:18})})]}),t.jsxs("div",{style:Se.tabs,children:[t.jsxs("button",{onClick:()=>b("sidebar"),style:{...Se.tab,...z==="sidebar"?Se.tabOn:{}},children:[t.jsx(g0,{size:15})," Configure sidebar"]}),t.jsxs("button",{onClick:()=>b("themes"),style:{...Se.tab,...z==="themes"?Se.tabOn:{}},children:[t.jsx(h0,{size:15})," Themes"]}),t.jsxs("button",{onClick:()=>b("currency"),style:{...Se.tab,...z==="currency"?Se.tabOn:{}},children:[t.jsx(Jy,{size:15})," Monetary"]}),t.jsxs("button",{onClick:()=>b("music"),style:{...Se.tab,...z==="music"?Se.tabOn:{}},children:[t.jsx(Cg,{size:15})," Music"]}),t.jsxs("button",{onClick:()=>b("reminders"),style:{...Se.tab,...z==="reminders"?Se.tabOn:{}},children:[t.jsx(jh,{size:15})," Reminders"]})]}),t.jsx("div",{style:Se.body,children:z==="sidebar"?t.jsxs(t.Fragment,{children:[t.jsxs("p",{style:Se.hint,children:["Reorder with the arrows, hide ones you don't use, and tap ",t.jsx(ws,{size:11,style:{verticalAlign:"-1px"}})," to set the screen that opens on launch."]}),t.jsx("div",{style:Se.list,children:p.map((de,Me)=>{const lt=e[de.id],dt=lt.icon,kt=l===de.id;return t.jsxs("div",{style:{...Se.row,opacity:de.hidden?.5:1,...kt?{borderColor:"var(--accent)"}:{}},children:[t.jsx("span",{style:Se.rowNum,children:Me+1}),t.jsx(dt,{size:16}),t.jsxs("span",{style:Se.rowLabel,children:[lt.label,kt&&t.jsx("span",{style:Se.defaultTag,children:"default"})]}),t.jsx("button",{onClick:()=>d(de.id),title:kt?"Opens on launch":"Set as default",style:{...Se.iconBtn,...kt?{color:"var(--accent)"}:{}},children:t.jsx(ws,{size:15})}),t.jsx("button",{onClick:()=>_e(Me),title:de.hidden?"Show":"Hide",style:{...Se.iconBtn,...de.hidden?{}:{color:"var(--accent)"}},children:de.hidden?t.jsx(Ja,{size:15}):t.jsx(js,{size:15})}),t.jsx("button",{onClick:()=>ft(Me,-1),disabled:Me===0,style:{...Se.iconBtn,opacity:Me===0?.3:1},children:t.jsx(kl,{size:15})}),t.jsx("button",{onClick:()=>ft(Me,1),disabled:Me===p.length-1,style:{...Se.iconBtn,opacity:Me===p.length-1?.3:1},children:t.jsx(go,{size:15})})]},de.id)})}),t.jsxs("button",{onClick:it,style:Se.saveBtn,children:[t.jsx(He,{size:15})," Save sidebar"]})]}):z==="currency"?t.jsxs(t.Fragment,{children:[t.jsx("p",{style:Se.hint,children:"Choose the currency used across Wallet and Worth. Applies instantly."}),t.jsx("div",{style:Se.list,children:hc.map(de=>{const Me=de.code===i;return t.jsxs("button",{onClick:()=>h(de.code),style:{...Se.row,cursor:"pointer",textAlign:"left",width:"100%",...Me?{borderColor:"var(--accent)"}:{}},children:[t.jsx("span",{style:Se.curSymbol,children:de.symbol}),t.jsxs("span",{style:Se.rowLabel,children:[de.label," ",t.jsx("span",{style:Se.curCode,children:de.code})]}),Me&&t.jsx("span",{style:Se.themeCheck,children:t.jsx(He,{size:13})})]},de.code)})}),t.jsx("div",{style:Se.subDivider}),t.jsx("div",{style:Se.fieldLbl,children:"Month starts on"}),t.jsx("p",{style:Se.hint,children:'If your salary lands on the 25th, set this to 25 — Wallet and Expenses will treat each "month" as running 25th to 24th instead of calendar month.'}),t.jsx(sr,{value:s,options:Array.from({length:28},(de,Me)=>Me+1).map(de=>({value:de,label:de===1?"1st (calendar month)":`${de}${j2(de)}`})),onChange:de=>R(Number(de)),style:{marginBottom:12}}),t.jsx("div",{style:Se.subDivider}),t.jsx("div",{style:Se.fieldLbl,children:"Trading capital"}),t.jsxs("p",{style:Se.hint,children:["Your starting capital for the ",t.jsx("b",{children:"Trading Journal"}),". The page shows this plus your all-time net P/L — green when in profit, red when below."]}),t.jsx("input",{type:"number",value:_,onChange:de=>Z(de.target.value),placeholder:"e.g. 100000",style:Se.musicInput}),t.jsxs("button",{onClick:xe,style:Se.saveBtn,children:[t.jsx(He,{size:15})," ",ne?"Saved":"Save capital"]}),t.jsx("div",{style:Se.subDivider}),t.jsx("div",{style:Se.fieldLbl,children:"Trading discipline rules"}),t.jsx("p",{style:Se.hint,children:"Guardrails enforced when opening a trade. A trade that breaks any rule can't be saved. Leave a field at 0 (or blank) to disable that rule."}),t.jsx("label",{style:Se.miniLbl,children:"Risk per trade (%)"}),t.jsx("p",{style:Se.hint,children:"Max loss on any single trade as a percent of capital. e.g. 2% of 100000 caps loss at 2000 — quantity or SL that risks more is blocked."}),t.jsx("input",{type:"number",step:"0.1",min:"0",value:A,onChange:de=>K(de.target.value),placeholder:"e.g. 2",style:Se.musicInput}),t.jsx("label",{style:Se.miniLbl,children:"Risk : Reward (1 : R)"}),t.jsx("p",{style:Se.hint,children:"Minimum reward multiple of risk. Enter 3 for 1:3 — if SL is 5 below entry, target must be at least 15 above entry."}),t.jsx("input",{type:"number",step:"0.5",min:"0",value:oe,onChange:de=>ye(de.target.value),placeholder:"e.g. 3",style:Se.musicInput}),t.jsx("label",{style:Se.miniLbl,children:"Diversification (max open trades per section)"}),t.jsx("p",{style:Se.hint,children:"Limits how many open trades you may hold per section, and caps each position's value at capital ÷ this number (e.g. 5 → max 20000 per trade on 100000 capital)."}),t.jsx("div",{style:Se.divGrid,children:[["swing","Swing"],["fno","FnO"],["intraday","Intraday"]].map(([de,Me])=>t.jsxs("div",{style:Se.divCell,children:[t.jsx("span",{style:Se.divLbl,children:Me}),t.jsx("input",{type:"number",min:"0",step:"1",value:X[de],onChange:lt=>Y(dt=>({...dt,[de]:lt.target.value})),placeholder:"0",style:Se.divInput})]},de))}),t.jsxs("button",{onClick:ve,style:Se.saveBtn,children:[t.jsx(He,{size:15})," ",ce?"Saved":"Save rules"]})]}):z==="music"?t.jsxs(t.Fragment,{children:[t.jsxs("p",{style:Se.hint,children:["Paste a YouTube link to play softly while you write in the ",t.jsx("b",{children:"Golden Book"}),". It plays only on that screen (audio only)."]}),t.jsx("input",{value:C,onChange:de=>D(de.target.value),placeholder:"https://youtube.com/watch?v=…",style:Se.musicInput}),t.jsxs("button",{onClick:U,style:Se.saveBtn,children:[t.jsx(He,{size:15})," ",x?"Saved":"Save music"]})]}):z==="reminders"?t.jsxs(t.Fragment,{children:[t.jsx("p",{style:Se.hint,children:"Up to 5 reminders scroll across the top of every screen — a gentle nudge toward your goals."}),t.jsxs("button",{onClick:()=>H(de=>!de),style:{...Se.row,cursor:"pointer",width:"100%",justifyContent:"space-between",...$?{borderColor:"var(--accent)"}:{}},children:[t.jsx("span",{style:Se.rowLabel,children:"Show reminder banner"}),t.jsx("span",{style:{...Se.switch,...$?Se.switchOn:{}},children:$?"On":"Off"})]}),t.jsxs("div",{style:{marginTop:14},children:[t.jsxs("div",{style:Se.fieldLbl,children:["Reminders (",P.filter(de=>de.trim()).length,"/5)"]}),P.map((de,Me)=>t.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[t.jsx("input",{value:de,onChange:lt=>E(Me,lt.target.value),maxLength:120,placeholder:`Reminder ${Me+1}`,style:{...Se.musicInput,marginBottom:0}}),t.jsx("button",{onClick:()=>ie(Me),style:Se.iconBtn,title:"Remove",children:t.jsx(Fe,{size:15})})]},Me)),P.length<5&&t.jsxs("button",{onClick:S,style:Se.addRowBtn,children:[t.jsx(bt,{size:14})," Add reminder"]})]}),t.jsxs("div",{style:{marginTop:16},children:[t.jsxs("div",{style:Se.sliderHead,children:[t.jsx("span",{style:Se.fieldLbl,children:"Scroll speed"}),t.jsxs("span",{style:Se.sliderVal,children:[me," px/s"]})]}),t.jsx("input",{type:"range",min:20,max:200,step:5,value:me,onChange:de=>Ne(de.target.value),style:Se.range})]}),t.jsxs("div",{style:{marginTop:12},children:[t.jsxs("div",{style:Se.sliderHead,children:[t.jsx("span",{style:Se.fieldLbl,children:"Delay between reminders"}),t.jsxs("span",{style:Se.sliderVal,children:[Q,"s"]})]}),t.jsx("input",{type:"range",min:0,max:15,step:1,value:Q,onChange:de=>re(de.target.value),style:Se.range})]}),t.jsxs("button",{onClick:fe,style:{...Se.saveBtn,marginTop:16},children:[t.jsx(He,{size:15})," ",G?"Saved":"Save reminders"]})]}):t.jsxs(t.Fragment,{children:[t.jsxs("p",{style:Se.hint,children:["Tap a theme to preview it live, then hit ",t.jsx("b",{children:"Apply theme"})," to keep it."]}),t.jsx("div",{style:Se.themeGrid,children:zc.map(de=>{const Me=de.id===j;return t.jsxs("button",{onClick:()=>Ae(de.id),style:{...Se.themeCard,...Me?Se.themeCardOn:{}},children:[t.jsxs("div",{style:Se.swatchRow,children:[de.swatch.map((lt,dt)=>t.jsx("span",{style:{...Se.swatch,background:lt}},dt)),Me&&t.jsx("span",{style:Se.themeCheck,children:t.jsx(He,{size:13})})]}),t.jsxs("div",{style:Se.themeName,children:[de.name,de.dark?t.jsx("span",{style:Se.darkTag,children:"Dark"}):null]}),t.jsx("div",{style:Se.themeDesc,children:de.description})]},de.id)})}),t.jsxs("button",{onClick:()=>f(j),disabled:j===o,style:{...Se.saveBtn,...j===o?Se.saveBtnDisabled:{}},children:[t.jsx(He,{size:15})," ",j===o?"Theme applied":"Apply theme"]})]})})]})})}const Se={overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:200,display:"grid",placeItems:"center",padding:16},modal:{background:"var(--surface)",color:"var(--text)",borderRadius:16,width:460,maxWidth:"100%",maxHeight:"88vh",display:"flex",flexDirection:"column",boxShadow:"0 12px 48px rgba(0,0,0,0.3)",border:"1px solid var(--border)",overflow:"hidden"},head:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 18px",borderBottom:"1px solid var(--border)",flexShrink:0},title:{fontSize:18,fontWeight:700,fontFamily:"'Fraunces',Georgia,serif"},closeBtn:{border:"none",background:"var(--hover)",color:"var(--text-2)",width:30,height:30,borderRadius:8,cursor:"pointer",display:"grid",placeItems:"center"},tabs:{display:"flex",flexWrap:"wrap",gap:6,padding:"12px 18px 0",flexShrink:0},tab:{display:"flex",alignItems:"center",gap:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",padding:"8px 12px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer"},tabOn:{background:"var(--accent-strong)",color:"#fff",borderColor:"transparent"},body:{padding:"16px 18px 20px",overflowY:"auto",overflowX:"hidden",flex:1,minHeight:0},hint:{fontSize:12.5,color:"var(--text-3)",lineHeight:1.5,margin:"0 0 14px"},list:{display:"flex",flexDirection:"column",gap:6},row:{display:"flex",alignItems:"center",gap:10,padding:"9px 11px",background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:9},rowNum:{fontSize:11,fontWeight:700,color:"var(--text-3)",width:16,textAlign:"center"},rowLabel:{flex:1,fontSize:13.5,fontWeight:500,display:"flex",alignItems:"center",gap:7},defaultTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--accent)",background:"color-mix(in srgb, var(--accent) 14%, transparent)",padding:"1px 6px",borderRadius:6},curSymbol:{width:22,textAlign:"center",fontSize:15,fontWeight:700,color:"var(--text)"},curCode:{fontSize:11,color:"var(--text-3)",fontWeight:600,marginLeft:4},iconBtn:{border:"none",background:"none",color:"var(--text-2)",cursor:"pointer",padding:4,display:"grid",placeItems:"center",borderRadius:6},saveBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:7,width:"100%",marginTop:16,border:"none",background:"var(--accent)",color:"#fff",padding:"11px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer"},saveBtnDisabled:{background:"var(--border)",color:"var(--text-3)",cursor:"default"},musicInput:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"10px 12px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none",marginBottom:12},switch:{fontSize:12,fontWeight:700,color:"var(--text-3)",background:"var(--hover)",borderRadius:20,padding:"3px 12px",minWidth:44,textAlign:"center"},switchOn:{background:"var(--accent)",color:"#fff"},fieldLbl:{fontSize:12,fontWeight:700,color:"var(--text-2)",marginBottom:7},miniLbl:{display:"block",fontSize:11.5,fontWeight:700,color:"var(--text)",margin:"12px 0 2px"},subDivider:{height:1,background:"var(--border)",margin:"18px 0 14px"},divGrid:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:8,marginBottom:12},divCell:{display:"flex",flexDirection:"column",gap:4},divLbl:{fontSize:11,fontWeight:700,color:"var(--text-3)"},divInput:{width:"100%",boxSizing:"border-box",border:"1px solid var(--border)",borderRadius:9,padding:"8px 10px",fontSize:13.5,fontFamily:"inherit",color:"var(--text)",background:"var(--surface)",outline:"none"},addRowBtn:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",border:"1px dashed var(--border)",background:"none",color:"var(--text-2)",padding:"9px",borderRadius:9,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"},sliderHead:{display:"flex",justifyContent:"space-between",alignItems:"baseline"},sliderVal:{fontSize:12,fontWeight:700,color:"var(--accent)"},range:{width:"100%",accentColor:"var(--accent)",cursor:"pointer"},themeGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},themeCard:{textAlign:"left",border:"2px solid var(--border)",background:"var(--surface-2)",borderRadius:12,padding:12,cursor:"pointer",display:"flex",flexDirection:"column",gap:6,outline:"none",WebkitTapHighlightColor:"transparent",transition:"border-color .15s ease, box-shadow .15s ease"},themeCardOn:{borderColor:"var(--accent)",boxShadow:"0 0 0 3px color-mix(in srgb, var(--accent) 25%, transparent)"},swatchRow:{display:"flex",alignItems:"center",gap:5,position:"relative"},swatch:{width:22,height:22,borderRadius:"50%",border:"1px solid rgba(0,0,0,0.08)"},themeCheck:{marginLeft:"auto",width:20,height:20,borderRadius:"50%",background:"var(--accent)",color:"#fff",display:"grid",placeItems:"center"},themeName:{fontSize:14,fontWeight:700,display:"flex",alignItems:"center",gap:6},darkTag:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",background:"var(--hover)",color:"var(--text-2)",padding:"1px 6px",borderRadius:6},themeDesc:{fontSize:11.5,color:"var(--text-3)",lineHeight:1.4}},S2=`
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
`;function C2({statements:e,speed:r=60,delay:n=3}){const o=c.useMemo(()=>(e||[]).map(d=>(d||"").trim()).filter(Boolean).slice(0,5),[e]),[i,s]=c.useState(0),a=c.useRef(null),l=c.useRef(null);return c.useEffect(()=>{s(0)},[o]),c.useEffect(()=>{if(!o.length)return;const d=a.current,g=l.current;if(!d||!g)return;const m=d.offsetWidth,f=g.offsetWidth,h=Math.max(10,Number(r)||60),R=Math.max(2500,(m+f)/h*1e3),B=g.animate([{transform:`translateX(${m}px)`},{transform:`translateX(${-f}px)`}],{duration:R,easing:"linear",fill:"both"});let T;const z=()=>{T=setTimeout(()=>s(b=>(b+1)%o.length),Math.max(0,Number(n)||0)*1e3)};return B.addEventListener("finish",z),()=>{B.cancel(),B.removeEventListener("finish",z),clearTimeout(T)}},[i,o,r,n]),o.length?t.jsxs("div",{style:Po.bar,"aria-label":"Reminders",children:[t.jsx("style",{children:S2}),t.jsx("div",{className:"anvil-tick-glow",style:Po.icon,children:t.jsx("span",{className:"anvil-tick-pulse",style:{display:"grid",placeItems:"center"},children:t.jsx(jh,{size:15})})}),t.jsxs("div",{ref:a,style:Po.viewport,children:[t.jsx("span",{className:"anvil-tick-shimmer",style:Po.shimmer}),t.jsx("div",{className:"anvil-tick-float",style:Po.floatWrap,children:t.jsx("div",{ref:l,style:Po.text,children:o[i%o.length]},i)})]})]}):null}const Po={bar:{display:"flex",alignItems:"center",height:36,flexShrink:0,overflow:"hidden",borderBottom:"1px solid var(--border)",background:"color-mix(in srgb, var(--accent) 12%, var(--surface))"},icon:{display:"grid",placeItems:"center",width:42,height:"100%",flexShrink:0,color:"#fff",background:"var(--accent)",zIndex:2},viewport:{position:"relative",flex:1,height:"100%",overflow:"hidden",display:"flex",alignItems:"center"},shimmer:{position:"absolute",top:0,bottom:0,left:0,width:"22%",background:"linear-gradient(100deg, transparent, color-mix(in srgb, var(--accent) 22%, transparent), transparent)",pointerEvents:"none",zIndex:1},floatWrap:{display:"inline-flex",alignItems:"center",willChange:"transform"},text:{whiteSpace:"nowrap",fontSize:13.5,fontWeight:700,color:"var(--text)",letterSpacing:"0.01em",willChange:"transform",paddingLeft:4}};Oi(ef(),!1);const Tc="anvil_default_screen",Xp=()=>{try{return localStorage.getItem(Tc)}catch{return null}},tf="anvil_last_screen",z2=()=>{try{return localStorage.getItem(tf)}catch{return null}},On={dashboard:{label:"Dashboard",icon:c0,component:O0},kickstart:{label:"Kickstart",icon:zh,component:R1},golden:{label:"Golden Book",icon:mh,component:E1},habits:{label:"Habits",icon:Rh,component:dv},quadrant:{label:"Quadrant",icon:vh,component:K0},goals:{label:"Goals",icon:Sl,component:rv},grove:{label:"Grove",icon:Ah,component:Zv},worth:{label:"Rewards",icon:yh,component:i1},vault:{label:"Wallet",icon:Bg,component:h1},expenses:{label:"Expenses",icon:Tg,component:o2},trading:{label:"Trading Journal",icon:Qy,component:x2},journal:{label:"Journal",icon:Ds,component:kv},revision:{label:"Revision",icon:Ig,component:Wv},affirmations:{label:"Affirmations",icon:Eo,component:_v},skills:{label:"Skills",icon:hh,component:Sv},spiritual:{label:"Spiritual",icon:za,component:Tv},mindscape:{label:"Mindscape",icon:fh,component:O1},achievements:{label:"Achievements",icon:Jr,component:Z1},challenges:{label:"Challenges",icon:B0,component:d2},bucket:{label:"Bucket List",icon:p0,component:u2},delight:{label:"Delights",icon:zg,component:r2}},rf=["dashboard","kickstart","golden","habits","quadrant","goals","grove","journal","revision","affirmations","skills","spiritual","mindscape","achievements","challenges","bucket","delight","worth","vault","expenses","trading"];function pa(e){const r=rf.filter(i=>On[i]),o=[...(Array.isArray(e)?e:[]).filter(i=>On[i])];return r.forEach(i=>{o.includes(i)||o.push(i)}),o}function T2(){const[e,r]=c.useState(()=>window.innerWidth<720);return c.useEffect(()=>{const n=()=>r(window.innerWidth<720);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}function I2(){const[e,r]=c.useState(()=>{const P=z2();if(P&&On[P])return P;const ae=Xp();return ae&&On[ae]?ae:"habits"}),[n,o]=c.useState(()=>Xp()||"habits"),[i,s]=c.useState(!1),[a,l]=c.useState(null),[d,g]=c.useState(!1),[m,f]=c.useState(!1),[h,R]=c.useState(ef()),[B,T]=c.useState(fi()),[z,b]=c.useState(yc()),[p,u]=c.useState({enabled:!1,statements:[],speed:60,delay:3}),[j,k]=c.useState(()=>pa(rf)),[C,D]=c.useState([]),x=T2(),y=c.useRef(e);c.useEffect(()=>{y.current=e},[e]),c.useEffect(()=>{if(!a)return;const P=10,ae=new Set(["kickstart","mindscape"]),me=setInterval(()=>{const Ne=y.current;!document.hidden&&Ne&&!ae.has(Ne)&&M.addScreenTime(Ne,P).catch(()=>{})},P*1e3);return()=>clearInterval(me)},[a]),c.useEffect(()=>{let P=!1;const ae=()=>{mc(),l(null)};window.addEventListener("anvil-unauthorized",ae);const me=new URLSearchParams(window.location.search).get("login");return me&&(L0(me),window.history.replaceState({},"",window.location.pathname)),Wh()?M.me().then(Ne=>{P||l(Ne)}).catch(()=>{}).finally(()=>{P||g(!0)}):g(!0),()=>{P=!0,window.removeEventListener("anvil-unauthorized",ae)}},[]),c.useEffect(()=>{a&&(M.getSetting("theme").then(P=>{P!=null&&P.value&&R(Oi(P.value))}).catch(()=>{}),M.getSetting("currency").then(P=>{P!=null&&P.value&&T(Xu(P.value))}).catch(()=>{}),M.getSetting("month_start_day").then(P=>{P!=null&&P.value&&b(qu(P.value))}).catch(()=>{}),M.getSetting("ticker").then(P=>{P!=null&&P.value&&u(ae=>({...ae,...P.value}))}).catch(()=>{}),M.getSetting("default_screen").then(P=>{if(P!=null&&P.value&&On[P.value]){o(P.value);try{localStorage.setItem(Tc,P.value)}catch{}}}).catch(()=>{}),M.getSetting("sidebar_order").then(P=>{Array.isArray(P==null?void 0:P.value)&&k(pa(P.value))}).catch(()=>{}),M.getSetting("sidebar_hidden").then(P=>{Array.isArray(P==null?void 0:P.value)&&D(P.value)}).catch(()=>{}))},[a]);function _(P){r(P),s(!1);try{localStorage.setItem(tf,P)}catch{}}const Z=()=>{mc(),l(null)},ne=P=>{Oi(P,!1)},ue=P=>{R(Oi(P)),M.setSetting("theme",P).catch(()=>{}),f(!1)},A=()=>{Oi(h,!1),f(!1)},K=P=>{T(Xu(P)),M.setSetting("currency",P).catch(()=>{})},oe=P=>{b(qu(P)),M.setSetting("month_start_day",Number(P)).catch(()=>{})},ye=P=>{u(P),M.setSetting("ticker",P).catch(()=>{})},X=P=>{o(P);try{localStorage.setItem(Tc,P)}catch{}M.setSetting("default_screen",P).catch(()=>{})},Y=(P,ae)=>{if(k(pa(P)),D(ae),f(!1),M.setSetting("sidebar_order",P).catch(()=>{}),M.setSetting("sidebar_hidden",ae).catch(()=>{}),ae.includes(e)){const me=pa(P).find(Ne=>!ae.includes(Ne));me&&r(me)}},ce=j.filter(P=>!C.includes(P));if(!d)return t.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",fontFamily:"'Inter',system-ui,sans-serif",color:"var(--text-3)"},children:"Loading…"});if(!a)return t.jsx(a1,{});const J=On[e],I=J.component,$=()=>t.jsx("div",{style:vt.navItems,children:ce.map(P=>{const ae=On[P];if(!ae)return null;const me=ae.icon,Ne=e===P;return t.jsxs("button",{onClick:()=>_(P),title:ae.label,style:{...vt.navItem,...Ne?vt.navItemOn:{}},children:[t.jsx(me,{size:18}),t.jsx("span",{style:vt.navLabel,children:ae.label})]},P)})}),H=()=>t.jsxs("div",{style:vt.footerWrap,children:[t.jsxs("button",{onClick:()=>f(!0),style:vt.settingsBtn,title:"Settings",children:[t.jsx(Ih,{size:17}),t.jsx("span",{children:"Settings"})]}),t.jsxs("div",{style:vt.userFooter,children:[t.jsxs("div",{style:vt.userInfo,children:[t.jsx("div",{style:vt.userAvatar,children:(a.name||a.email||"?").charAt(0).toUpperCase()}),t.jsxs("div",{style:{minWidth:0},children:[t.jsx("div",{style:vt.userName,children:a.name||"You"}),t.jsx("div",{style:vt.userEmail,children:a.email})]})]}),t.jsx("button",{onClick:Z,style:vt.logoutBtn,title:"Sign out",children:t.jsx(b0,{size:16})})]})]});return t.jsxs("div",{style:vt.shell,children:[!x&&t.jsxs("nav",{style:vt.nav,children:[t.jsxs("div",{style:vt.brand,children:[t.jsx("div",{style:vt.brandLogo,children:"B"}),t.jsx("span",{style:vt.brandName,children:"Anvil"})]}),t.jsx($,{}),t.jsx(H,{})]}),x&&i&&t.jsx("div",{style:vt.overlay,onClick:()=>s(!1),children:t.jsxs("nav",{style:vt.drawer,onClick:P=>P.stopPropagation(),children:[t.jsxs("div",{style:vt.drawerHeader,children:[t.jsxs("div",{style:vt.brand,children:[t.jsx("div",{style:vt.brandLogo,children:"B"}),t.jsx("span",{style:vt.brandName,children:"Anvil"})]}),t.jsx("button",{style:vt.closeBtn,onClick:()=>s(!1),children:t.jsx(Fe,{size:20})})]}),t.jsx("div",{style:vt.drawerNav,children:t.jsx($,{})}),t.jsx(H,{})]})}),t.jsxs("div",{style:vt.content,children:[x&&t.jsxs("div",{style:vt.topBar,children:[t.jsx("button",{style:vt.menuBtn,onClick:()=>s(!0),children:t.jsx(Sg,{size:22})}),t.jsx("span",{style:vt.topBarTitle,children:J.label}),t.jsx("div",{style:{width:38}})]}),p.enabled&&t.jsx(C2,{statements:p.statements,speed:p.speed,delay:p.delay}),t.jsx("main",{style:vt.main,children:t.jsx(I,{onNavigate:_})})]}),m&&t.jsx(w2,{screens:On,order:j,hidden:C,themeId:h,currency:B,monthStartDay:z,ticker:p,defaultScreen:n,onSetDefault:X,onSaveSidebar:Y,onPreviewTheme:ne,onCommitTheme:ue,onSelectCurrency:K,onSelectMonthStartDay:oe,onSaveTicker:ye,onClose:A})]})}const vt={shell:{display:"flex",height:"100vh",overflow:"hidden",fontFamily:"'Inter', system-ui, sans-serif",background:"var(--bg)"},nav:{width:200,flexShrink:0,background:"var(--surface)",borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column",padding:"20px 10px",gap:2,overflowY:"auto",overflowX:"hidden"},brand:{display:"flex",alignItems:"center",gap:9,padding:"6px 10px 20px",borderBottom:"1px solid var(--border)",marginBottom:8},brandLogo:{width:30,height:30,borderRadius:8,background:"var(--accent-strong)",color:"#fff",display:"grid",placeItems:"center",fontSize:14,fontWeight:800,fontFamily:"'Fraunces', Georgia, serif",flexShrink:0},brandName:{fontSize:16,fontWeight:700,letterSpacing:"-0.01em",color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},navItems:{display:"flex",flexDirection:"column",gap:2},navItem:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},navItemOn:{background:"var(--hover)",color:"var(--text)",fontWeight:700},footerWrap:{marginTop:"auto",paddingTop:8,flexShrink:0},settingsBtn:{display:"flex",alignItems:"center",gap:10,border:"none",background:"none",padding:"10px 12px",borderRadius:9,cursor:"pointer",color:"var(--text-2)",fontSize:13.5,fontWeight:500,width:"100%",textAlign:"left"},userFooter:{marginTop:4,paddingTop:12,borderTop:"1px solid var(--border)",display:"flex",alignItems:"center",gap:8},userInfo:{display:"flex",alignItems:"center",gap:8,flex:1,minWidth:0},userAvatar:{width:30,height:30,borderRadius:"50%",background:"#8268B0",color:"#fff",display:"grid",placeItems:"center",fontSize:13,fontWeight:700,flexShrink:0},userName:{fontSize:13,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},userEmail:{fontSize:11,color:"var(--text-3)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},logoutBtn:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-2)",cursor:"pointer",padding:7,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0},navLabel:{flex:1},content:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},main:{flex:1,overflowY:"auto",overflowX:"hidden"},topBar:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",background:"var(--surface)",borderBottom:"1px solid var(--border)",flexShrink:0},topBarTitle:{fontSize:16,fontWeight:700,color:"var(--text)",fontFamily:"'Fraunces', Georgia, serif"},menuBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text)",padding:8,borderRadius:8,display:"grid",placeItems:"center"},overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.35)",zIndex:100,display:"flex"},drawer:{width:220,background:"var(--surface)",height:"100%",display:"flex",flexDirection:"column",padding:"16px 10px",gap:2,boxShadow:"4px 0 24px rgba(0,0,0,0.12)",overflow:"hidden"},drawerNav:{flex:1,minHeight:0,overflowY:"auto",overflowX:"hidden"},drawerHeader:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:4,flexShrink:0},closeBtn:{border:"none",background:"none",cursor:"pointer",color:"var(--text-2)",padding:6,borderRadius:8,display:"grid",placeItems:"center",flexShrink:0}};dh(document.getElementById("root")).render(t.jsx(c.StrictMode,{children:t.jsx(I2,{})}));
