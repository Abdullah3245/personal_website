(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Wf={exports:{}},Ao={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d0;function pS(){if(d0)return Ao;d0=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var p in l)p!=="key"&&(u[p]=l[p])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Ao.Fragment=e,Ao.jsx=i,Ao.jsxs=i,Ao}var h0;function mS(){return h0||(h0=1,Wf.exports=pS()),Wf.exports}var j=mS(),qf={exports:{}},mt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p0;function gS(){if(p0)return mt;p0=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),y=Symbol.iterator;function g(U){return U===null||typeof U!="object"?null:(U=y&&U[y]||U["@@iterator"],typeof U=="function"?U:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,D={};function S(U,K,ue){this.props=U,this.context=K,this.refs=D,this.updater=ue||b}S.prototype.isReactComponent={},S.prototype.setState=function(U,K){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,K,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function v(){}v.prototype=S.prototype;function w(U,K,ue){this.props=U,this.context=K,this.refs=D,this.updater=ue||b}var O=w.prototype=new v;O.constructor=w,E(O,S.prototype),O.isPureReactComponent=!0;var P=Array.isArray,z={H:null,A:null,T:null,S:null,V:null},L=Object.prototype.hasOwnProperty;function G(U,K,ue,ye,Ne,Pe){return ue=Pe.ref,{$$typeof:s,type:U,key:K,ref:ue!==void 0?ue:null,props:Pe}}function T(U,K){return G(U.type,K,void 0,void 0,void 0,U.props)}function I(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function Q(U){var K={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(ue){return K[ue]})}var H=/\/+/g;function J(U,K){return typeof U=="object"&&U!==null&&U.key!=null?Q(""+U.key):K.toString(36)}function de(){}function he(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(de,de):(U.status="pending",U.then(function(K){U.status==="pending"&&(U.status="fulfilled",U.value=K)},function(K){U.status==="pending"&&(U.status="rejected",U.reason=K)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function q(U,K,ue,ye,Ne){var Pe=typeof U;(Pe==="undefined"||Pe==="boolean")&&(U=null);var te=!1;if(U===null)te=!0;else switch(Pe){case"bigint":case"string":case"number":te=!0;break;case"object":switch(U.$$typeof){case s:case e:te=!0;break;case _:return te=U._init,q(te(U._payload),K,ue,ye,Ne)}}if(te)return Ne=Ne(U),te=ye===""?"."+J(U,0):ye,P(Ne)?(ue="",te!=null&&(ue=te.replace(H,"$&/")+"/"),q(Ne,K,ue,"",function(qe){return qe})):Ne!=null&&(I(Ne)&&(Ne=T(Ne,ue+(Ne.key==null||U&&U.key===Ne.key?"":(""+Ne.key).replace(H,"$&/")+"/")+te)),K.push(Ne)),1;te=0;var Ee=ye===""?".":ye+":";if(P(U))for(var Se=0;Se<U.length;Se++)ye=U[Se],Pe=Ee+J(ye,Se),te+=q(ye,K,ue,Pe,Ne);else if(Se=g(U),typeof Se=="function")for(U=Se.call(U),Se=0;!(ye=U.next()).done;)ye=ye.value,Pe=Ee+J(ye,Se++),te+=q(ye,K,ue,Pe,Ne);else if(Pe==="object"){if(typeof U.then=="function")return q(he(U),K,ue,ye,Ne);throw K=String(U),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return te}function N(U,K,ue){if(U==null)return U;var ye=[],Ne=0;return q(U,ye,"","",function(Pe){return K.call(ue,Pe,Ne++)}),ye}function B(U){if(U._status===-1){var K=U._result;K=K(),K.then(function(ue){(U._status===0||U._status===-1)&&(U._status=1,U._result=ue)},function(ue){(U._status===0||U._status===-1)&&(U._status=2,U._result=ue)}),U._status===-1&&(U._status=0,U._result=K)}if(U._status===1)return U._result.default;throw U._result}var se=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function ge(){}return mt.Children={map:N,forEach:function(U,K,ue){N(U,function(){K.apply(this,arguments)},ue)},count:function(U){var K=0;return N(U,function(){K++}),K},toArray:function(U){return N(U,function(K){return K})||[]},only:function(U){if(!I(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},mt.Component=S,mt.Fragment=i,mt.Profiler=l,mt.PureComponent=w,mt.StrictMode=r,mt.Suspense=m,mt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,mt.__COMPILER_RUNTIME={__proto__:null,c:function(U){return z.H.useMemoCache(U)}},mt.cache=function(U){return function(){return U.apply(null,arguments)}},mt.cloneElement=function(U,K,ue){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var ye=E({},U.props),Ne=U.key,Pe=void 0;if(K!=null)for(te in K.ref!==void 0&&(Pe=void 0),K.key!==void 0&&(Ne=""+K.key),K)!L.call(K,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&K.ref===void 0||(ye[te]=K[te]);var te=arguments.length-2;if(te===1)ye.children=ue;else if(1<te){for(var Ee=Array(te),Se=0;Se<te;Se++)Ee[Se]=arguments[Se+2];ye.children=Ee}return G(U.type,Ne,void 0,void 0,Pe,ye)},mt.createContext=function(U){return U={$$typeof:d,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},mt.createElement=function(U,K,ue){var ye,Ne={},Pe=null;if(K!=null)for(ye in K.key!==void 0&&(Pe=""+K.key),K)L.call(K,ye)&&ye!=="key"&&ye!=="__self"&&ye!=="__source"&&(Ne[ye]=K[ye]);var te=arguments.length-2;if(te===1)Ne.children=ue;else if(1<te){for(var Ee=Array(te),Se=0;Se<te;Se++)Ee[Se]=arguments[Se+2];Ne.children=Ee}if(U&&U.defaultProps)for(ye in te=U.defaultProps,te)Ne[ye]===void 0&&(Ne[ye]=te[ye]);return G(U,Pe,void 0,void 0,null,Ne)},mt.createRef=function(){return{current:null}},mt.forwardRef=function(U){return{$$typeof:p,render:U}},mt.isValidElement=I,mt.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:B}},mt.memo=function(U,K){return{$$typeof:h,type:U,compare:K===void 0?null:K}},mt.startTransition=function(U){var K=z.T,ue={};z.T=ue;try{var ye=U(),Ne=z.S;Ne!==null&&Ne(ue,ye),typeof ye=="object"&&ye!==null&&typeof ye.then=="function"&&ye.then(ge,se)}catch(Pe){se(Pe)}finally{z.T=K}},mt.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},mt.use=function(U){return z.H.use(U)},mt.useActionState=function(U,K,ue){return z.H.useActionState(U,K,ue)},mt.useCallback=function(U,K){return z.H.useCallback(U,K)},mt.useContext=function(U){return z.H.useContext(U)},mt.useDebugValue=function(){},mt.useDeferredValue=function(U,K){return z.H.useDeferredValue(U,K)},mt.useEffect=function(U,K,ue){var ye=z.H;if(typeof ue=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ye.useEffect(U,K)},mt.useId=function(){return z.H.useId()},mt.useImperativeHandle=function(U,K,ue){return z.H.useImperativeHandle(U,K,ue)},mt.useInsertionEffect=function(U,K){return z.H.useInsertionEffect(U,K)},mt.useLayoutEffect=function(U,K){return z.H.useLayoutEffect(U,K)},mt.useMemo=function(U,K){return z.H.useMemo(U,K)},mt.useOptimistic=function(U,K){return z.H.useOptimistic(U,K)},mt.useReducer=function(U,K,ue){return z.H.useReducer(U,K,ue)},mt.useRef=function(U){return z.H.useRef(U)},mt.useState=function(U){return z.H.useState(U)},mt.useSyncExternalStore=function(U,K,ue){return z.H.useSyncExternalStore(U,K,ue)},mt.useTransition=function(){return z.H.useTransition()},mt.version="19.1.0",mt}var m0;function bh(){return m0||(m0=1,qf.exports=gS()),qf.exports}var yt=bh(),Yf={exports:{}},Ro={},jf={exports:{}},Zf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g0;function _S(){return g0||(g0=1,function(s){function e(N,B){var se=N.length;N.push(B);e:for(;0<se;){var ge=se-1>>>1,U=N[ge];if(0<l(U,B))N[ge]=B,N[se]=U,se=ge;else break e}}function i(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var B=N[0],se=N.pop();if(se!==B){N[0]=se;e:for(var ge=0,U=N.length,K=U>>>1;ge<K;){var ue=2*(ge+1)-1,ye=N[ue],Ne=ue+1,Pe=N[Ne];if(0>l(ye,se))Ne<U&&0>l(Pe,ye)?(N[ge]=Pe,N[Ne]=se,ge=Ne):(N[ge]=ye,N[ue]=se,ge=ue);else if(Ne<U&&0>l(Pe,se))N[ge]=Pe,N[Ne]=se,ge=Ne;else break e}}return B}function l(N,B){var se=N.sortIndex-B.sortIndex;return se!==0?se:N.id-B.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var d=Date,p=d.now();s.unstable_now=function(){return d.now()-p}}var m=[],h=[],_=1,y=null,g=3,b=!1,E=!1,D=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function P(N){for(var B=i(h);B!==null;){if(B.callback===null)r(h);else if(B.startTime<=N)r(h),B.sortIndex=B.expirationTime,e(m,B);else break;B=i(h)}}function z(N){if(D=!1,P(N),!E)if(i(m)!==null)E=!0,L||(L=!0,J());else{var B=i(h);B!==null&&q(z,B.startTime-N)}}var L=!1,G=-1,T=5,I=-1;function Q(){return S?!0:!(s.unstable_now()-I<T)}function H(){if(S=!1,L){var N=s.unstable_now();I=N;var B=!0;try{e:{E=!1,D&&(D=!1,w(G),G=-1),b=!0;var se=g;try{t:{for(P(N),y=i(m);y!==null&&!(y.expirationTime>N&&Q());){var ge=y.callback;if(typeof ge=="function"){y.callback=null,g=y.priorityLevel;var U=ge(y.expirationTime<=N);if(N=s.unstable_now(),typeof U=="function"){y.callback=U,P(N),B=!0;break t}y===i(m)&&r(m),P(N)}else r(m);y=i(m)}if(y!==null)B=!0;else{var K=i(h);K!==null&&q(z,K.startTime-N),B=!1}}break e}finally{y=null,g=se,b=!1}B=void 0}}finally{B?J():L=!1}}}var J;if(typeof O=="function")J=function(){O(H)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,he=de.port2;de.port1.onmessage=H,J=function(){he.postMessage(null)}}else J=function(){v(H,0)};function q(N,B){G=v(function(){N(s.unstable_now())},B)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(N){N.callback=null},s.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<N?Math.floor(1e3/N):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_next=function(N){switch(g){case 1:case 2:case 3:var B=3;break;default:B=g}var se=g;g=B;try{return N()}finally{g=se}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(N,B){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var se=g;g=N;try{return B()}finally{g=se}},s.unstable_scheduleCallback=function(N,B,se){var ge=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?ge+se:ge):se=ge,N){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=se+U,N={id:_++,callback:B,priorityLevel:N,startTime:se,expirationTime:U,sortIndex:-1},se>ge?(N.sortIndex=se,e(h,N),i(m)===null&&N===i(h)&&(D?(w(G),G=-1):D=!0,q(z,se-ge))):(N.sortIndex=U,e(m,N),E||b||(E=!0,L||(L=!0,J()))),N},s.unstable_shouldYield=Q,s.unstable_wrapCallback=function(N){var B=g;return function(){var se=g;g=B;try{return N.apply(this,arguments)}finally{g=se}}}}(Zf)),Zf}var _0;function vS(){return _0||(_0=1,jf.exports=_S()),jf.exports}var Kf={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v0;function xS(){if(v0)return Dn;v0=1;var s=bh();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)h+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,h,_){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:""+y,children:m,containerInfo:h,implementation:_}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Dn.createPortal=function(m,h){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return u(m,h,null,_)},Dn.flushSync=function(m){var h=d.T,_=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=h,r.p=_,r.d.f()}},Dn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(m,h))},Dn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Dn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var _=h.as,y=p(_,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,b=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;_==="style"?r.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:y,integrity:g,fetchPriority:b}):_==="script"&&r.d.X(m,{crossOrigin:y,integrity:g,fetchPriority:b,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Dn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var _=p(h.as,h.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(m)},Dn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var _=h.as,y=p(_,h.crossOrigin);r.d.L(m,_,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Dn.preloadModule=function(m,h){if(typeof m=="string")if(h){var _=p(h.as,h.crossOrigin);r.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(m)},Dn.requestFormReset=function(m){r.d.r(m)},Dn.unstable_batchedUpdates=function(m,h){return m(h)},Dn.useFormState=function(m,h,_){return d.H.useFormState(m,h,_)},Dn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Dn.version="19.1.0",Dn}var x0;function SS(){if(x0)return Kf.exports;x0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Kf.exports=xS(),Kf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S0;function yS(){if(S0)return Ro;S0=1;var s=vS(),e=bh(),i=SS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(u(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return p(c),t;if(f===o)return p(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=f;else{for(var x=!1,R=c.child;R;){if(R===a){x=!0,a=c,o=f;break}if(R===o){x=!0,o=c,a=f;break}R=R.sibling}if(!x){for(R=f.child;R;){if(R===a){x=!0,a=f,o=c;break}if(R===o){x=!0,o=f,a=c;break}R=R.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function h(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=h(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,y=Symbol.for("react.element"),g=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),w=Symbol.for("react.consumer"),O=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),Q=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var de=Symbol.for("react.client.reference");function he(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===de?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case S:return"Profiler";case D:return"StrictMode";case z:return"Suspense";case L:return"SuspenseList";case I:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case O:return(t.displayName||"Context")+".Provider";case w:return(t._context.displayName||"Context")+".Consumer";case P:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case G:return n=t.displayName||null,n!==null?n:he(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return he(t(n))}catch{}}return null}var q=Array.isArray,N=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se={pending:!1,data:null,method:null,action:null},ge=[],U=-1;function K(t){return{current:t}}function ue(t){0>U||(t.current=ge[U],ge[U]=null,U--)}function ye(t,n){U++,ge[U]=t.current,t.current=n}var Ne=K(null),Pe=K(null),te=K(null),Ee=K(null);function Se(t,n){switch(ye(te,n),ye(Pe,t),ye(Ne,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Hg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Hg(n),t=Gg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ue(Ne),ye(Ne,t)}function qe(){ue(Ne),ue(Pe),ue(te)}function et(t){t.memoizedState!==null&&ye(Ee,t);var n=Ne.current,a=Gg(n,t.type);n!==a&&(ye(Pe,t),ye(Ne,a))}function Ze(t){Pe.current===t&&(ue(Ne),ue(Pe)),Ee.current===t&&(ue(Ee),yo._currentValue=se)}var Ft=Object.prototype.hasOwnProperty,lt=s.unstable_scheduleCallback,At=s.unstable_cancelCallback,Pt=s.unstable_shouldYield,dt=s.unstable_requestPaint,ke=s.unstable_now,Qe=s.unstable_getCurrentPriorityLevel,ht=s.unstable_ImmediatePriority,V=s.unstable_UserBlockingPriority,wt=s.unstable_NormalPriority,nt=s.unstable_LowPriority,ut=s.unstable_IdlePriority,Re=s.log,Tt=s.unstable_setDisableYieldValue,C=null,M=null;function X(t){if(typeof Re=="function"&&Tt(t),M&&typeof M.setStrictMode=="function")try{M.setStrictMode(C,t)}catch{}}var ce=Math.clz32?Math.clz32:Ue,Me=Math.log,Ce=Math.LN2;function Ue(t){return t>>>=0,t===0?32:31-(Me(t)/Ce|0)|0}var fe=256,_e=4194304;function Le(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Be(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var c=0,f=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?c=Le(o):(x&=R,x!==0?c=Le(x):a||(a=R&~t,a!==0&&(c=Le(a))))):(R=o&~f,R!==0?c=Le(R):x!==0?c=Le(x):a||(a=o&~t,a!==0&&(c=Le(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Te(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function we(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Je(){var t=fe;return fe<<=1,(fe&4194048)===0&&(fe=256),t}function it(){var t=_e;return _e<<=1,(_e&62914560)===0&&(_e=4194304),t}function xt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function k(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ae(t,n,a,o,c,f){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,F=t.expirationTimes,ne=t.hiddenUpdates;for(a=x&~a;0<a;){var me=31-ce(a),xe=1<<me;R[me]=0,F[me]=-1;var ae=ne[me];if(ae!==null)for(ne[me]=null,me=0;me<ae.length;me++){var le=ae[me];le!==null&&(le.lane&=-536870913)}a&=~xe}o!==0&&pe(t,o,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(x&~n))}function pe(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-ce(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&4194090}function ze(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-ce(a),c=1<<o;c&n|t[o]&n&&(t[o]|=n),a&=~c}}function De(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function be(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ye(){var t=B.p;return t!==0?t:(t=window.event,t===void 0?32:s0(t.type))}function ct(t,n){var a=B.p;try{return B.p=t,n()}finally{B.p=a}}var Bt=Math.random().toString(36).slice(2),st="__reactFiber$"+Bt,Qt="__reactProps$"+Bt,bn="__reactContainer$"+Bt,Ja="__reactEvents$"+Bt,Vc="__reactListeners$"+Bt,Xo="__reactHandles$"+Bt,Ds="__reactResources$"+Bt,Yn="__reactMarker$"+Bt;function $a(t){delete t[st],delete t[Qt],delete t[Ja],delete t[Vc],delete t[Xo]}function Vi(t){var n=t[st];if(n)return n;for(var a=t.parentNode;a;){if(n=a[bn]||a[st]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Wg(t);t!==null;){if(a=t[st])return a;t=Wg(t)}return n}t=a,a=t.parentNode}return null}function ki(t){if(t=t[st]||t[bn]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Ai(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Xi(t){var n=t[Ds];return n||(n=t[Ds]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function tn(t){t[Yn]=!0}var Us=new Set,Ns={};function Wi(t,n){xa(t,n),xa(t+"Capture",n)}function xa(t,n){for(Ns[t]=n,t=0;t<n.length;t++)Us.add(n[t])}var kc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Wo={},qo={};function Xc(t){return Ft.call(qo,t)?!0:Ft.call(Wo,t)?!1:kc.test(t)?qo[t]=!0:(Wo[t]=!0,!1)}function wr(t,n,a){if(Xc(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function A(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Y(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}var oe,ie;function ee(t){if(oe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);oe=n&&n[1]||"",ie=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+oe+t+ie}var Oe=!1;function He(t,n){if(!t||Oe)return"";Oe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(le){var ae=le}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(le){ae=le}t.call(xe.prototype)}}else{try{throw Error()}catch(le){ae=le}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(le){if(le&&ae&&typeof le.stack=="string")return[le.stack,ae.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),x=f[0],R=f[1];if(x&&R){var F=x.split(`
`),ne=R.split(`
`);for(c=o=0;o<F.length&&!F[o].includes("DetermineComponentFrameRoot");)o++;for(;c<ne.length&&!ne[c].includes("DetermineComponentFrameRoot");)c++;if(o===F.length||c===ne.length)for(o=F.length-1,c=ne.length-1;1<=o&&0<=c&&F[o]!==ne[c];)c--;for(;1<=o&&0<=c;o--,c--)if(F[o]!==ne[c]){if(o!==1||c!==1)do if(o--,c--,0>c||F[o]!==ne[c]){var me=`
`+F[o].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=o&&0<=c);break}}}finally{Oe=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ee(a):""}function Ie(t){switch(t.tag){case 26:case 27:case 5:return ee(t.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 15:return He(t.type,!1);case 11:return He(t.type.render,!1);case 1:return He(t.type,!0);case 31:return ee("Activity");default:return""}}function We(t){try{var n="";do n+=Ie(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Ge(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ot(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function pt(t){var n=ot(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){o=""+x,f.call(this,x)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(x){o=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function je(t){t._valueTracker||(t._valueTracker=pt(t))}function Ot(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=ot(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Zt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Jt=/[\n"\\]/g;function gt(t){return t.replace(Jt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function cn(t,n,a,o,c,f,x,R){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Ge(n)):t.value!==""+Ge(n)&&(t.value=""+Ge(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?En(t,x,Ge(n)):a!=null?En(t,x,Ge(a)):o!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+Ge(R):t.removeAttribute("name")}function Ve(t,n,a,o,c,f,x,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+Ge(a):"",n=n!=null?""+Ge(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x)}function En(t,n,a){n==="number"&&Zt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function _t(t,n,a,o){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Ge(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function On(t,n,a){if(n!=null&&(n=""+Ge(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Ge(a):""}function jn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(q(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Ge(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o)}function In(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Sa=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function zt(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Sa.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function $t(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&zt(t,c,o)}else for(var f in n)n.hasOwnProperty(f)&&zt(t,f,n[f])}function ai(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ri=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gi(t){return Ri.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Dr=null;function Wc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ur=null,Nr=null;function Vh(t){var n=ki(t);if(n&&(t=n.stateNode)){var a=t[Qt]||null;e:switch(t=n.stateNode,n.type){case"input":if(cn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+gt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var c=o[Qt]||null;if(!c)throw Error(r(90));cn(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Ot(o)}break e;case"textarea":On(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&_t(t,!!a.multiple,n,!1)}}}var qc=!1;function kh(t,n,a){if(qc)return t(n,a);qc=!0;try{var o=t(n);return o}finally{if(qc=!1,(Ur!==null||Nr!==null)&&(Ul(),Ur&&(n=Ur,t=Nr,Nr=Ur=null,Vh(n),t)))for(n=0;n<t.length;n++)Vh(t[n])}}function Ls(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Qt]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yc=!1;if(qi)try{var Ps={};Object.defineProperty(Ps,"passive",{get:function(){Yc=!0}}),window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,Ps)}catch{Yc=!1}var ya=null,jc=null,Yo=null;function Xh(){if(Yo)return Yo;var t,n=jc,a=n.length,o,c="value"in ya?ya.value:ya.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var x=a-t;for(o=1;o<=x&&n[a-o]===c[f-o];o++);return Yo=c.slice(t,1<o?1-o:void 0)}function jo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Zo(){return!0}function Wh(){return!1}function zn(t){function n(a,o,c,f,x){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Zo:Wh,this.isPropagationStopped=Wh,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zo)},persist:function(){},isPersistent:Zo}),n}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ko=zn(er),Os=_({},er,{view:0,detail:0}),pv=zn(Os),Zc,Kc,Is,Qo=_({},Os,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Is&&(Is&&t.type==="mousemove"?(Zc=t.screenX-Is.screenX,Kc=t.screenY-Is.screenY):Kc=Zc=0,Is=t),Zc)},movementY:function(t){return"movementY"in t?t.movementY:Kc}}),qh=zn(Qo),mv=_({},Qo,{dataTransfer:0}),gv=zn(mv),_v=_({},Os,{relatedTarget:0}),Qc=zn(_v),vv=_({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),xv=zn(vv),Sv=_({},er,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),yv=zn(Sv),Mv=_({},er,{data:0}),Yh=zn(Mv),bv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ev={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Av(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Tv[t])?!!n[t]:!1}function Jc(){return Av}var Rv=_({},Os,{key:function(t){if(t.key){var n=bv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=jo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ev[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jc,charCode:function(t){return t.type==="keypress"?jo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?jo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Cv=zn(Rv),wv=_({},Qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jh=zn(wv),Dv=_({},Os,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jc}),Uv=zn(Dv),Nv=_({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lv=zn(Nv),Pv=_({},Qo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ov=zn(Pv),Iv=_({},er,{newState:0,oldState:0}),Fv=zn(Iv),Bv=[9,13,27,32],$c=qi&&"CompositionEvent"in window,Fs=null;qi&&"documentMode"in document&&(Fs=document.documentMode);var zv=qi&&"TextEvent"in window&&!Fs,Zh=qi&&(!$c||Fs&&8<Fs&&11>=Fs),Kh=" ",Qh=!1;function Jh(t,n){switch(t){case"keyup":return Bv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $h(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Lr=!1;function Hv(t,n){switch(t){case"compositionend":return $h(n);case"keypress":return n.which!==32?null:(Qh=!0,Kh);case"textInput":return t=n.data,t===Kh&&Qh?null:t;default:return null}}function Gv(t,n){if(Lr)return t==="compositionend"||!$c&&Jh(t,n)?(t=Xh(),Yo=jc=ya=null,Lr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Zh&&n.locale!=="ko"?null:n.data;default:return null}}var Vv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ep(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Vv[t.type]:n==="textarea"}function tp(t,n,a,o){Ur?Nr?Nr.push(o):Nr=[o]:Ur=o,n=Fl(n,"onChange"),0<n.length&&(a=new Ko("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Bs=null,zs=null;function kv(t){Og(t,0)}function Jo(t){var n=Ai(t);if(Ot(n))return t}function np(t,n){if(t==="change")return n}var ip=!1;if(qi){var eu;if(qi){var tu="oninput"in document;if(!tu){var ap=document.createElement("div");ap.setAttribute("oninput","return;"),tu=typeof ap.oninput=="function"}eu=tu}else eu=!1;ip=eu&&(!document.documentMode||9<document.documentMode)}function rp(){Bs&&(Bs.detachEvent("onpropertychange",sp),zs=Bs=null)}function sp(t){if(t.propertyName==="value"&&Jo(zs)){var n=[];tp(n,zs,t,Wc(t)),kh(kv,n)}}function Xv(t,n,a){t==="focusin"?(rp(),Bs=n,zs=a,Bs.attachEvent("onpropertychange",sp)):t==="focusout"&&rp()}function Wv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jo(zs)}function qv(t,n){if(t==="click")return Jo(n)}function Yv(t,n){if(t==="input"||t==="change")return Jo(n)}function jv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Zn=typeof Object.is=="function"?Object.is:jv;function Hs(t,n){if(Zn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!Ft.call(n,c)||!Zn(t[c],n[c]))return!1}return!0}function op(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lp(t,n){var a=op(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=op(a)}}function cp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?cp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function up(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Zt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Zt(t.document)}return n}function nu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Zv=qi&&"documentMode"in document&&11>=document.documentMode,Pr=null,iu=null,Gs=null,au=!1;function fp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;au||Pr==null||Pr!==Zt(o)||(o=Pr,"selectionStart"in o&&nu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Gs&&Hs(Gs,o)||(Gs=o,o=Fl(iu,"onSelect"),0<o.length&&(n=new Ko("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Pr)))}function tr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Or={animationend:tr("Animation","AnimationEnd"),animationiteration:tr("Animation","AnimationIteration"),animationstart:tr("Animation","AnimationStart"),transitionrun:tr("Transition","TransitionRun"),transitionstart:tr("Transition","TransitionStart"),transitioncancel:tr("Transition","TransitionCancel"),transitionend:tr("Transition","TransitionEnd")},ru={},dp={};qi&&(dp=document.createElement("div").style,"AnimationEvent"in window||(delete Or.animationend.animation,delete Or.animationiteration.animation,delete Or.animationstart.animation),"TransitionEvent"in window||delete Or.transitionend.transition);function nr(t){if(ru[t])return ru[t];if(!Or[t])return t;var n=Or[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in dp)return ru[t]=n[a];return t}var hp=nr("animationend"),pp=nr("animationiteration"),mp=nr("animationstart"),Kv=nr("transitionrun"),Qv=nr("transitionstart"),Jv=nr("transitioncancel"),gp=nr("transitionend"),_p=new Map,su="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");su.push("scrollEnd");function _i(t,n){_p.set(t,n),Wi(n,[t])}var vp=new WeakMap;function ri(t,n){if(typeof t=="object"&&t!==null){var a=vp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:We(n)},vp.set(t,n),n)}return{value:t,source:n,stack:We(n)}}var si=[],Ir=0,ou=0;function $o(){for(var t=Ir,n=ou=Ir=0;n<t;){var a=si[n];si[n++]=null;var o=si[n];si[n++]=null;var c=si[n];si[n++]=null;var f=si[n];if(si[n++]=null,o!==null&&c!==null){var x=o.pending;x===null?c.next=c:(c.next=x.next,x.next=c),o.pending=c}f!==0&&xp(a,c,f)}}function el(t,n,a,o){si[Ir++]=t,si[Ir++]=n,si[Ir++]=a,si[Ir++]=o,ou|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function lu(t,n,a,o){return el(t,n,a,o),tl(t)}function Fr(t,n){return el(t,null,null,n),tl(t)}function xp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-ce(a),t=f.hiddenUpdates,o=t[c],o===null?t[c]=[n]:o.push(n),n.lane=a|536870912),f):null}function tl(t){if(50<ho)throw ho=0,mf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Br={};function $v(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,n,a,o){return new $v(t,n,a,o)}function cu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Yi(t,n){var a=t.alternate;return a===null?(a=Kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Sp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function nl(t,n,a,o,c,f){var x=0;if(o=t,typeof t=="function")cu(t)&&(x=1);else if(typeof t=="string")x=tS(t,a,Ne.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case I:return t=Kn(31,a,n,c),t.elementType=I,t.lanes=f,t;case E:return ir(a.children,c,f,n);case D:x=8,c|=24;break;case S:return t=Kn(12,a,n,c|2),t.elementType=S,t.lanes=f,t;case z:return t=Kn(13,a,n,c),t.elementType=z,t.lanes=f,t;case L:return t=Kn(19,a,n,c),t.elementType=L,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case v:case O:x=10;break e;case w:x=9;break e;case P:x=11;break e;case G:x=14;break e;case T:x=16,o=null;break e}x=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=Kn(x,a,n,c),n.elementType=t,n.type=o,n.lanes=f,n}function ir(t,n,a,o){return t=Kn(7,t,o,n),t.lanes=a,t}function uu(t,n,a){return t=Kn(6,t,null,n),t.lanes=a,t}function fu(t,n,a){return n=Kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var zr=[],Hr=0,il=null,al=0,oi=[],li=0,ar=null,ji=1,Zi="";function rr(t,n){zr[Hr++]=al,zr[Hr++]=il,il=t,al=n}function yp(t,n,a){oi[li++]=ji,oi[li++]=Zi,oi[li++]=ar,ar=t;var o=ji;t=Zi;var c=32-ce(o)-1;o&=~(1<<c),a+=1;var f=32-ce(n)+c;if(30<f){var x=c-c%5;f=(o&(1<<x)-1).toString(32),o>>=x,c-=x,ji=1<<32-ce(n)+c|a<<c|o,Zi=f+t}else ji=1<<f|a<<c|o,Zi=t}function du(t){t.return!==null&&(rr(t,1),yp(t,1,0))}function hu(t){for(;t===il;)il=zr[--Hr],zr[Hr]=null,al=zr[--Hr],zr[Hr]=null;for(;t===ar;)ar=oi[--li],oi[li]=null,Zi=oi[--li],oi[li]=null,ji=oi[--li],oi[li]=null}var Fn=null,an=null,It=!1,sr=null,Ci=!1,pu=Error(r(519));function or(t){var n=Error(r(418,""));throw Xs(ri(n,t)),pu}function Mp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[st]=t,n[Qt]=o,a){case"dialog":Et("cancel",n),Et("close",n);break;case"iframe":case"object":case"embed":Et("load",n);break;case"video":case"audio":for(a=0;a<mo.length;a++)Et(mo[a],n);break;case"source":Et("error",n);break;case"img":case"image":case"link":Et("error",n),Et("load",n);break;case"details":Et("toggle",n);break;case"input":Et("invalid",n),Ve(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),je(n);break;case"select":Et("invalid",n);break;case"textarea":Et("invalid",n),jn(n,o.value,o.defaultValue,o.children),je(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||zg(n.textContent,a)?(o.popover!=null&&(Et("beforetoggle",n),Et("toggle",n)),o.onScroll!=null&&Et("scroll",n),o.onScrollEnd!=null&&Et("scrollend",n),o.onClick!=null&&(n.onclick=Bl),n=!0):n=!1,n||or(t)}function bp(t){for(Fn=t.return;Fn;)switch(Fn.tag){case 5:case 13:Ci=!1;return;case 27:case 3:Ci=!0;return;default:Fn=Fn.return}}function Vs(t){if(t!==Fn)return!1;if(!It)return bp(t),It=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Uf(t.type,t.memoizedProps)),a=!a),a&&an&&or(t),bp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){an=xi(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}an=null}}else n===27?(n=an,Fa(t.type)?(t=Of,Of=null,an=t):an=n):an=Fn?xi(t.stateNode.nextSibling):null;return!0}function ks(){an=Fn=null,It=!1}function Ep(){var t=sr;return t!==null&&(Vn===null?Vn=t:Vn.push.apply(Vn,t),sr=null),t}function Xs(t){sr===null?sr=[t]:sr.push(t)}var mu=K(null),lr=null,Ki=null;function Ma(t,n,a){ye(mu,n._currentValue),n._currentValue=a}function Qi(t){t._currentValue=mu.current,ue(mu)}function gu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function _u(t,n,a,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=c;for(var F=0;F<n.length;F++)if(R.context===n[F]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),gu(f.return,a,t),o||(x=null);break e}f=R.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(r(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),gu(x,a,t),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===t){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function Ws(t,n,a,o){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var R=c.type;Zn(c.pendingProps.value,x.value)||(t!==null?t.push(R):t=[R])}}else if(c===Ee.current){if(x=c.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(yo):t=[yo])}c=c.return}t!==null&&_u(n,t,a,o),n.flags|=262144}function rl(t){for(t=t.firstContext;t!==null;){if(!Zn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function cr(t){lr=t,Ki=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wn(t){return Tp(lr,t)}function sl(t,n){return lr===null&&cr(t),Tp(t,n)}function Tp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ki===null){if(t===null)throw Error(r(308));Ki=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ki=Ki.next=n;return a}var ex=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},tx=s.unstable_scheduleCallback,nx=s.unstable_NormalPriority,mn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vu(){return{controller:new ex,data:new Map,refCount:0}}function qs(t){t.refCount--,t.refCount===0&&tx(nx,function(){t.controller.abort()})}var Ys=null,xu=0,Gr=0,Vr=null;function ix(t,n){if(Ys===null){var a=Ys=[];xu=0,Gr=Mf(),Vr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return xu++,n.then(Ap,Ap),n}function Ap(){if(--xu===0&&Ys!==null){Vr!==null&&(Vr.status="fulfilled");var t=Ys;Ys=null,Gr=0,Vr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function ax(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var Rp=N.S;N.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&ix(t,n),Rp!==null&&Rp(t,n)};var ur=K(null);function Su(){var t=ur.current;return t!==null?t:Kt.pooledCache}function ol(t,n){n===null?ye(ur,ur.current):ye(ur,n.pool)}function Cp(){var t=Su();return t===null?null:{parent:mn._currentValue,pool:t}}var js=Error(r(460)),wp=Error(r(474)),ll=Error(r(542)),yu={then:function(){}};function Dp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function cl(){}function Up(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(cl,cl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Lp(t),t;default:if(typeof n.status=="string")n.then(cl,cl);else{if(t=Kt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Lp(t),t}throw Zs=n,js}}var Zs=null;function Np(){if(Zs===null)throw Error(r(459));var t=Zs;return Zs=null,t}function Lp(t){if(t===js||t===ll)throw Error(r(483))}var ba=!1;function Mu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function bu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ea(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ta(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ht&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=tl(t),xp(t,null,a),n}return el(t,o,n,a),tl(t)}function Ks(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ze(t,a)}}function Eu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Tu=!1;function Qs(){if(Tu){var t=Vr;if(t!==null)throw t}}function Js(t,n,a,o){Tu=!1;var c=t.updateQueue;ba=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,R=c.shared.pending;if(R!==null){c.shared.pending=null;var F=R,ne=F.next;F.next=null,x===null?f=ne:x.next=ne,x=F;var me=t.alternate;me!==null&&(me=me.updateQueue,R=me.lastBaseUpdate,R!==x&&(R===null?me.firstBaseUpdate=ne:R.next=ne,me.lastBaseUpdate=F))}if(f!==null){var xe=c.baseState;x=0,me=ne=F=null,R=f;do{var ae=R.lane&-536870913,le=ae!==R.lane;if(le?(Dt&ae)===ae:(o&ae)===ae){ae!==0&&ae===Gr&&(Tu=!0),me!==null&&(me=me.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var at=t,$e=R;ae=n;var qt=a;switch($e.tag){case 1:if(at=$e.payload,typeof at=="function"){xe=at.call(qt,xe,ae);break e}xe=at;break e;case 3:at.flags=at.flags&-65537|128;case 0:if(at=$e.payload,ae=typeof at=="function"?at.call(qt,xe,ae):at,ae==null)break e;xe=_({},xe,ae);break e;case 2:ba=!0}}ae=R.callback,ae!==null&&(t.flags|=64,le&&(t.flags|=8192),le=c.callbacks,le===null?c.callbacks=[ae]:le.push(ae))}else le={lane:ae,tag:R.tag,payload:R.payload,callback:R.callback,next:null},me===null?(ne=me=le,F=xe):me=me.next=le,x|=ae;if(R=R.next,R===null){if(R=c.shared.pending,R===null)break;le=R,R=le.next,le.next=null,c.lastBaseUpdate=le,c.shared.pending=null}}while(!0);me===null&&(F=xe),c.baseState=F,c.firstBaseUpdate=ne,c.lastBaseUpdate=me,f===null&&(c.shared.lanes=0),La|=x,t.lanes=x,t.memoizedState=xe}}function Pp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Op(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Pp(a[t],n)}var kr=K(null),ul=K(0);function Ip(t,n){t=aa,ye(ul,t),ye(kr,n),aa=t|n.baseLanes}function Au(){ye(ul,aa),ye(kr,kr.current)}function Ru(){aa=ul.current,ue(kr),ue(ul)}var Aa=0,St=null,Xt=null,un=null,fl=!1,Xr=!1,fr=!1,dl=0,$s=0,Wr=null,rx=0;function sn(){throw Error(r(321))}function Cu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Zn(t[a],n[a]))return!1;return!0}function wu(t,n,a,o,c,f){return Aa=f,St=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=t===null||t.memoizedState===null?xm:Sm,fr=!1,f=a(o,c),fr=!1,Xr&&(f=Bp(n,a,o,c)),Fp(t),f}function Fp(t){N.H=vl;var n=Xt!==null&&Xt.next!==null;if(Aa=0,un=Xt=St=null,fl=!1,$s=0,Wr=null,n)throw Error(r(300));t===null||xn||(t=t.dependencies,t!==null&&rl(t)&&(xn=!0))}function Bp(t,n,a,o){St=t;var c=0;do{if(Xr&&(Wr=null),$s=0,Xr=!1,25<=c)throw Error(r(301));if(c+=1,un=Xt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=dx,f=n(a,o)}while(Xr);return f}function sx(){var t=N.H,n=t.useState()[0];return n=typeof n.then=="function"?eo(n):n,t=t.useState()[0],(Xt!==null?Xt.memoizedState:null)!==t&&(St.flags|=1024),n}function Du(){var t=dl!==0;return dl=0,t}function Uu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Nu(t){if(fl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}fl=!1}Aa=0,un=Xt=St=null,Xr=!1,$s=dl=0,Wr=null}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?St.memoizedState=un=t:un=un.next=t,un}function fn(){if(Xt===null){var t=St.alternate;t=t!==null?t.memoizedState:null}else t=Xt.next;var n=un===null?St.memoizedState:un.next;if(n!==null)un=n,Xt=t;else{if(t===null)throw St.alternate===null?Error(r(467)):Error(r(310));Xt=t,t={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},un===null?St.memoizedState=un=t:un=un.next=t}return un}function Lu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function eo(t){var n=$s;return $s+=1,Wr===null&&(Wr=[]),t=Up(Wr,t,n),n=St,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?xm:Sm),t}function hl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return eo(t);if(t.$$typeof===O)return wn(t)}throw Error(r(438,String(t)))}function Pu(t){var n=null,a=St.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=St.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Lu(),St.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=Q;return n.index++,a}function Ji(t,n){return typeof n=="function"?n(t):n}function pl(t){var n=fn();return Ou(n,Xt,t)}function Ou(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=t.baseQueue,f=o.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,o.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var R=x=null,F=null,ne=n,me=!1;do{var xe=ne.lane&-536870913;if(xe!==ne.lane?(Dt&xe)===xe:(Aa&xe)===xe){var ae=ne.revertLane;if(ae===0)F!==null&&(F=F.next={lane:0,revertLane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),xe===Gr&&(me=!0);else if((Aa&ae)===ae){ne=ne.next,ae===Gr&&(me=!0);continue}else xe={lane:0,revertLane:ne.revertLane,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},F===null?(R=F=xe,x=f):F=F.next=xe,St.lanes|=ae,La|=ae;xe=ne.action,fr&&a(f,xe),f=ne.hasEagerState?ne.eagerState:a(f,xe)}else ae={lane:xe,revertLane:ne.revertLane,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},F===null?(R=F=ae,x=f):F=F.next=ae,St.lanes|=xe,La|=xe;ne=ne.next}while(ne!==null&&ne!==n);if(F===null?x=f:F.next=R,!Zn(f,t.memoizedState)&&(xn=!0,me&&(a=Vr,a!==null)))throw a;t.memoizedState=f,t.baseState=x,t.baseQueue=F,o.lastRenderedState=f}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Iu(t){var n=fn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do f=t(f,x.action),x=x.next;while(x!==c);Zn(f,n.memoizedState)||(xn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function zp(t,n,a){var o=St,c=fn(),f=It;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!Zn((Xt||c).memoizedState,a);x&&(c.memoizedState=a,xn=!0),c=c.queue;var R=Vp.bind(null,o,c,t);if(to(2048,8,R,[t]),c.getSnapshot!==n||x||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,qr(9,ml(),Gp.bind(null,o,c,a,n),null),Kt===null)throw Error(r(349));f||(Aa&124)!==0||Hp(o,n,a)}return a}function Hp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=St.updateQueue,n===null?(n=Lu(),St.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Gp(t,n,a,o){n.value=a,n.getSnapshot=o,kp(n)&&Xp(t)}function Vp(t,n,a){return a(function(){kp(n)&&Xp(t)})}function kp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Zn(t,a)}catch{return!0}}function Xp(t){var n=Fr(t,2);n!==null&&ti(n,t,2)}function Fu(t){var n=Hn();if(typeof t=="function"){var a=t;if(t=a(),fr){X(!0);try{a()}finally{X(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:t},n}function Wp(t,n,a,o){return t.baseState=a,Ou(t,Xt,typeof o=="function"?o:Ji)}function ox(t,n,a,o,c){if(_l(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};N.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,qp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function qp(t,n){var a=n.action,o=n.payload,c=t.state;if(n.isTransition){var f=N.T,x={};N.T=x;try{var R=a(c,o),F=N.S;F!==null&&F(x,R),Yp(t,n,R)}catch(ne){Bu(t,n,ne)}finally{N.T=f}}else try{f=a(c,o),Yp(t,n,f)}catch(ne){Bu(t,n,ne)}}function Yp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){jp(t,n,o)},function(o){return Bu(t,n,o)}):jp(t,n,a)}function jp(t,n,a){n.status="fulfilled",n.value=a,Zp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,qp(t,a)))}function Bu(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Zp(n),n=n.next;while(n!==o)}t.action=null}function Zp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Kp(t,n){return n}function Qp(t,n){if(It){var a=Kt.formState;if(a!==null){e:{var o=St;if(It){if(an){t:{for(var c=an,f=Ci;c.nodeType!==8;){if(!f){c=null;break t}if(c=xi(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){an=xi(c.nextSibling),o=c.data==="F!";break e}}or(o)}o=!1}o&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kp,lastRenderedState:n},a.queue=o,a=gm.bind(null,St,o),o.dispatch=a,o=Fu(!1),f=ku.bind(null,St,!1,o.queue),o=Hn(),c={state:n,dispatch:null,action:t,pending:null},o.queue=c,a=ox.bind(null,St,c,f,a),c.dispatch=a,o.memoizedState=t,[n,a,!1]}function Jp(t){var n=fn();return $p(n,Xt,t)}function $p(t,n,a){if(n=Ou(t,n,Kp)[0],t=pl(Ji)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=eo(n)}catch(x){throw x===js?ll:x}else o=n;n=fn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(St.flags|=2048,qr(9,ml(),lx.bind(null,c,a),null)),[o,f,t]}function lx(t,n){t.action=n}function em(t){var n=fn(),a=Xt;if(a!==null)return $p(n,a,t);fn(),n=n.memoizedState,a=fn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function qr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=St.updateQueue,n===null&&(n=Lu(),St.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function ml(){return{destroy:void 0,resource:void 0}}function tm(){return fn().memoizedState}function gl(t,n,a,o){var c=Hn();o=o===void 0?null:o,St.flags|=t,c.memoizedState=qr(1|n,ml(),a,o)}function to(t,n,a,o){var c=fn();o=o===void 0?null:o;var f=c.memoizedState.inst;Xt!==null&&o!==null&&Cu(o,Xt.memoizedState.deps)?c.memoizedState=qr(n,f,a,o):(St.flags|=t,c.memoizedState=qr(1|n,f,a,o))}function nm(t,n){gl(8390656,8,t,n)}function im(t,n){to(2048,8,t,n)}function am(t,n){return to(4,2,t,n)}function rm(t,n){return to(4,4,t,n)}function sm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function om(t,n,a){a=a!=null?a.concat([t]):null,to(4,4,sm.bind(null,n,t),a)}function zu(){}function lm(t,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Cu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function cm(t,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Cu(n,o[1]))return o[0];if(o=t(),fr){X(!0);try{t()}finally{X(!1)}}return a.memoizedState=[o,n],o}function Hu(t,n,a){return a===void 0||(Aa&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=dg(),St.lanes|=t,La|=t,a)}function um(t,n,a,o){return Zn(a,n)?a:kr.current!==null?(t=Hu(t,a,o),Zn(t,n)||(xn=!0),t):(Aa&42)===0?(xn=!0,t.memoizedState=a):(t=dg(),St.lanes|=t,La|=t,n)}function fm(t,n,a,o,c){var f=B.p;B.p=f!==0&&8>f?f:8;var x=N.T,R={};N.T=R,ku(t,!1,n,a);try{var F=c(),ne=N.S;if(ne!==null&&ne(R,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var me=ax(F,o);no(t,n,me,ei(t))}else no(t,n,o,ei(t))}catch(xe){no(t,n,{then:function(){},status:"rejected",reason:xe},ei())}finally{B.p=f,N.T=x}}function cx(){}function Gu(t,n,a,o){if(t.tag!==5)throw Error(r(476));var c=dm(t).queue;fm(t,c,n,se,a===null?cx:function(){return hm(t),a(o)})}function dm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:se,baseState:se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:se},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function hm(t){var n=dm(t).next.queue;no(t,n,{},ei())}function Vu(){return wn(yo)}function pm(){return fn().memoizedState}function mm(){return fn().memoizedState}function ux(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ei();t=Ea(a);var o=Ta(n,t,a);o!==null&&(ti(o,n,a),Ks(o,n,a)),n={cache:vu()},t.payload=n;return}n=n.return}}function fx(t,n,a){var o=ei();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},_l(t)?_m(n,a):(a=lu(t,n,a,o),a!==null&&(ti(a,t,o),vm(a,n,o)))}function gm(t,n,a){var o=ei();no(t,n,a,o)}function no(t,n,a,o){var c={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(_l(t))_m(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,R=f(x,a);if(c.hasEagerState=!0,c.eagerState=R,Zn(R,x))return el(t,n,c,0),Kt===null&&$o(),!1}catch{}finally{}if(a=lu(t,n,c,o),a!==null)return ti(a,t,o),vm(a,n,o),!0}return!1}function ku(t,n,a,o){if(o={lane:2,revertLane:Mf(),action:o,hasEagerState:!1,eagerState:null,next:null},_l(t)){if(n)throw Error(r(479))}else n=lu(t,a,o,2),n!==null&&ti(n,t,2)}function _l(t){var n=t.alternate;return t===St||n!==null&&n===St}function _m(t,n){Xr=fl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function vm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ze(t,a)}}var vl={readContext:wn,use:hl,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn},xm={readContext:wn,use:hl,useCallback:function(t,n){return Hn().memoizedState=[t,n===void 0?null:n],t},useContext:wn,useEffect:nm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,gl(4194308,4,sm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return gl(4194308,4,t,n)},useInsertionEffect:function(t,n){gl(4,2,t,n)},useMemo:function(t,n){var a=Hn();n=n===void 0?null:n;var o=t();if(fr){X(!0);try{t()}finally{X(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Hn();if(a!==void 0){var c=a(n);if(fr){X(!0);try{a(n)}finally{X(!1)}}}else c=n;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=fx.bind(null,St,t),[o.memoizedState,t]},useRef:function(t){var n=Hn();return t={current:t},n.memoizedState=t},useState:function(t){t=Fu(t);var n=t.queue,a=gm.bind(null,St,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:zu,useDeferredValue:function(t,n){var a=Hn();return Hu(a,t,n)},useTransition:function(){var t=Fu(!1);return t=fm.bind(null,St,t.queue,!0,!1),Hn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=St,c=Hn();if(It){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Kt===null)throw Error(r(349));(Dt&124)!==0||Hp(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,nm(Vp.bind(null,o,f,t),[t]),o.flags|=2048,qr(9,ml(),Gp.bind(null,o,f,a,n),null),a},useId:function(){var t=Hn(),n=Kt.identifierPrefix;if(It){var a=Zi,o=ji;a=(o&~(1<<32-ce(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=dl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=rx++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:Vu,useFormState:Qp,useActionState:Qp,useOptimistic:function(t){var n=Hn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ku.bind(null,St,!0,a),a.dispatch=n,[t,n]},useMemoCache:Pu,useCacheRefresh:function(){return Hn().memoizedState=ux.bind(null,St)}},Sm={readContext:wn,use:hl,useCallback:lm,useContext:wn,useEffect:im,useImperativeHandle:om,useInsertionEffect:am,useLayoutEffect:rm,useMemo:cm,useReducer:pl,useRef:tm,useState:function(){return pl(Ji)},useDebugValue:zu,useDeferredValue:function(t,n){var a=fn();return um(a,Xt.memoizedState,t,n)},useTransition:function(){var t=pl(Ji)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:eo(t),n]},useSyncExternalStore:zp,useId:pm,useHostTransitionStatus:Vu,useFormState:Jp,useActionState:Jp,useOptimistic:function(t,n){var a=fn();return Wp(a,Xt,t,n)},useMemoCache:Pu,useCacheRefresh:mm},dx={readContext:wn,use:hl,useCallback:lm,useContext:wn,useEffect:im,useImperativeHandle:om,useInsertionEffect:am,useLayoutEffect:rm,useMemo:cm,useReducer:Iu,useRef:tm,useState:function(){return Iu(Ji)},useDebugValue:zu,useDeferredValue:function(t,n){var a=fn();return Xt===null?Hu(a,t,n):um(a,Xt.memoizedState,t,n)},useTransition:function(){var t=Iu(Ji)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:eo(t),n]},useSyncExternalStore:zp,useId:pm,useHostTransitionStatus:Vu,useFormState:em,useActionState:em,useOptimistic:function(t,n){var a=fn();return Xt!==null?Wp(a,Xt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Pu,useCacheRefresh:mm},Yr=null,io=0;function xl(t){var n=io;return io+=1,Yr===null&&(Yr=[]),Up(Yr,t,n)}function ao(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Sl(t,n){throw n.$$typeof===y?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function ym(t){var n=t._init;return n(t._payload)}function Mm(t){function n(Z,W){if(t){var $=Z.deletions;$===null?(Z.deletions=[W],Z.flags|=16):$.push(W)}}function a(Z,W){if(!t)return null;for(;W!==null;)n(Z,W),W=W.sibling;return null}function o(Z){for(var W=new Map;Z!==null;)Z.key!==null?W.set(Z.key,Z):W.set(Z.index,Z),Z=Z.sibling;return W}function c(Z,W){return Z=Yi(Z,W),Z.index=0,Z.sibling=null,Z}function f(Z,W,$){return Z.index=$,t?($=Z.alternate,$!==null?($=$.index,$<W?(Z.flags|=67108866,W):$):(Z.flags|=67108866,W)):(Z.flags|=1048576,W)}function x(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function R(Z,W,$,ve){return W===null||W.tag!==6?(W=uu($,Z.mode,ve),W.return=Z,W):(W=c(W,$),W.return=Z,W)}function F(Z,W,$,ve){var Xe=$.type;return Xe===E?me(Z,W,$.props.children,ve,$.key):W!==null&&(W.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===T&&ym(Xe)===W.type)?(W=c(W,$.props),ao(W,$),W.return=Z,W):(W=nl($.type,$.key,$.props,null,Z.mode,ve),ao(W,$),W.return=Z,W)}function ne(Z,W,$,ve){return W===null||W.tag!==4||W.stateNode.containerInfo!==$.containerInfo||W.stateNode.implementation!==$.implementation?(W=fu($,Z.mode,ve),W.return=Z,W):(W=c(W,$.children||[]),W.return=Z,W)}function me(Z,W,$,ve,Xe){return W===null||W.tag!==7?(W=ir($,Z.mode,ve,Xe),W.return=Z,W):(W=c(W,$),W.return=Z,W)}function xe(Z,W,$){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=uu(""+W,Z.mode,$),W.return=Z,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case g:return $=nl(W.type,W.key,W.props,null,Z.mode,$),ao($,W),$.return=Z,$;case b:return W=fu(W,Z.mode,$),W.return=Z,W;case T:var ve=W._init;return W=ve(W._payload),xe(Z,W,$)}if(q(W)||J(W))return W=ir(W,Z.mode,$,null),W.return=Z,W;if(typeof W.then=="function")return xe(Z,xl(W),$);if(W.$$typeof===O)return xe(Z,sl(Z,W),$);Sl(Z,W)}return null}function ae(Z,W,$,ve){var Xe=W!==null?W.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Xe!==null?null:R(Z,W,""+$,ve);if(typeof $=="object"&&$!==null){switch($.$$typeof){case g:return $.key===Xe?F(Z,W,$,ve):null;case b:return $.key===Xe?ne(Z,W,$,ve):null;case T:return Xe=$._init,$=Xe($._payload),ae(Z,W,$,ve)}if(q($)||J($))return Xe!==null?null:me(Z,W,$,ve,null);if(typeof $.then=="function")return ae(Z,W,xl($),ve);if($.$$typeof===O)return ae(Z,W,sl(Z,$),ve);Sl(Z,$)}return null}function le(Z,W,$,ve,Xe){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return Z=Z.get($)||null,R(W,Z,""+ve,Xe);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case g:return Z=Z.get(ve.key===null?$:ve.key)||null,F(W,Z,ve,Xe);case b:return Z=Z.get(ve.key===null?$:ve.key)||null,ne(W,Z,ve,Xe);case T:var Mt=ve._init;return ve=Mt(ve._payload),le(Z,W,$,ve,Xe)}if(q(ve)||J(ve))return Z=Z.get($)||null,me(W,Z,ve,Xe,null);if(typeof ve.then=="function")return le(Z,W,$,xl(ve),Xe);if(ve.$$typeof===O)return le(Z,W,$,sl(W,ve),Xe);Sl(W,ve)}return null}function at(Z,W,$,ve){for(var Xe=null,Mt=null,Ke=W,tt=W=0,yn=null;Ke!==null&&tt<$.length;tt++){Ke.index>tt?(yn=Ke,Ke=null):yn=Ke.sibling;var Nt=ae(Z,Ke,$[tt],ve);if(Nt===null){Ke===null&&(Ke=yn);break}t&&Ke&&Nt.alternate===null&&n(Z,Ke),W=f(Nt,W,tt),Mt===null?Xe=Nt:Mt.sibling=Nt,Mt=Nt,Ke=yn}if(tt===$.length)return a(Z,Ke),It&&rr(Z,tt),Xe;if(Ke===null){for(;tt<$.length;tt++)Ke=xe(Z,$[tt],ve),Ke!==null&&(W=f(Ke,W,tt),Mt===null?Xe=Ke:Mt.sibling=Ke,Mt=Ke);return It&&rr(Z,tt),Xe}for(Ke=o(Ke);tt<$.length;tt++)yn=le(Ke,Z,tt,$[tt],ve),yn!==null&&(t&&yn.alternate!==null&&Ke.delete(yn.key===null?tt:yn.key),W=f(yn,W,tt),Mt===null?Xe=yn:Mt.sibling=yn,Mt=yn);return t&&Ke.forEach(function(Va){return n(Z,Va)}),It&&rr(Z,tt),Xe}function $e(Z,W,$,ve){if($==null)throw Error(r(151));for(var Xe=null,Mt=null,Ke=W,tt=W=0,yn=null,Nt=$.next();Ke!==null&&!Nt.done;tt++,Nt=$.next()){Ke.index>tt?(yn=Ke,Ke=null):yn=Ke.sibling;var Va=ae(Z,Ke,Nt.value,ve);if(Va===null){Ke===null&&(Ke=yn);break}t&&Ke&&Va.alternate===null&&n(Z,Ke),W=f(Va,W,tt),Mt===null?Xe=Va:Mt.sibling=Va,Mt=Va,Ke=yn}if(Nt.done)return a(Z,Ke),It&&rr(Z,tt),Xe;if(Ke===null){for(;!Nt.done;tt++,Nt=$.next())Nt=xe(Z,Nt.value,ve),Nt!==null&&(W=f(Nt,W,tt),Mt===null?Xe=Nt:Mt.sibling=Nt,Mt=Nt);return It&&rr(Z,tt),Xe}for(Ke=o(Ke);!Nt.done;tt++,Nt=$.next())Nt=le(Ke,Z,tt,Nt.value,ve),Nt!==null&&(t&&Nt.alternate!==null&&Ke.delete(Nt.key===null?tt:Nt.key),W=f(Nt,W,tt),Mt===null?Xe=Nt:Mt.sibling=Nt,Mt=Nt);return t&&Ke.forEach(function(hS){return n(Z,hS)}),It&&rr(Z,tt),Xe}function qt(Z,W,$,ve){if(typeof $=="object"&&$!==null&&$.type===E&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case g:e:{for(var Xe=$.key;W!==null;){if(W.key===Xe){if(Xe=$.type,Xe===E){if(W.tag===7){a(Z,W.sibling),ve=c(W,$.props.children),ve.return=Z,Z=ve;break e}}else if(W.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===T&&ym(Xe)===W.type){a(Z,W.sibling),ve=c(W,$.props),ao(ve,$),ve.return=Z,Z=ve;break e}a(Z,W);break}else n(Z,W);W=W.sibling}$.type===E?(ve=ir($.props.children,Z.mode,ve,$.key),ve.return=Z,Z=ve):(ve=nl($.type,$.key,$.props,null,Z.mode,ve),ao(ve,$),ve.return=Z,Z=ve)}return x(Z);case b:e:{for(Xe=$.key;W!==null;){if(W.key===Xe)if(W.tag===4&&W.stateNode.containerInfo===$.containerInfo&&W.stateNode.implementation===$.implementation){a(Z,W.sibling),ve=c(W,$.children||[]),ve.return=Z,Z=ve;break e}else{a(Z,W);break}else n(Z,W);W=W.sibling}ve=fu($,Z.mode,ve),ve.return=Z,Z=ve}return x(Z);case T:return Xe=$._init,$=Xe($._payload),qt(Z,W,$,ve)}if(q($))return at(Z,W,$,ve);if(J($)){if(Xe=J($),typeof Xe!="function")throw Error(r(150));return $=Xe.call($),$e(Z,W,$,ve)}if(typeof $.then=="function")return qt(Z,W,xl($),ve);if($.$$typeof===O)return qt(Z,W,sl(Z,$),ve);Sl(Z,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,W!==null&&W.tag===6?(a(Z,W.sibling),ve=c(W,$),ve.return=Z,Z=ve):(a(Z,W),ve=uu($,Z.mode,ve),ve.return=Z,Z=ve),x(Z)):a(Z,W)}return function(Z,W,$,ve){try{io=0;var Xe=qt(Z,W,$,ve);return Yr=null,Xe}catch(Ke){if(Ke===js||Ke===ll)throw Ke;var Mt=Kn(29,Ke,null,Z.mode);return Mt.lanes=ve,Mt.return=Z,Mt}finally{}}}var jr=Mm(!0),bm=Mm(!1),ci=K(null),wi=null;function Ra(t){var n=t.alternate;ye(gn,gn.current&1),ye(ci,t),wi===null&&(n===null||kr.current!==null||n.memoizedState!==null)&&(wi=t)}function Em(t){if(t.tag===22){if(ye(gn,gn.current),ye(ci,t),wi===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(wi=t)}}else Ca()}function Ca(){ye(gn,gn.current),ye(ci,ci.current)}function $i(t){ue(ci),wi===t&&(wi=null),ue(gn)}var gn=K(0);function yl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Pf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Xu(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Wu={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ei(),c=Ea(o);c.payload=n,a!=null&&(c.callback=a),n=Ta(t,c,o),n!==null&&(ti(n,t,o),Ks(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ei(),c=Ea(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ta(t,c,o),n!==null&&(ti(n,t,o),Ks(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ei(),o=Ea(a);o.tag=2,n!=null&&(o.callback=n),n=Ta(t,o,a),n!==null&&(ti(n,t,a),Ks(n,t,a))}};function Tm(t,n,a,o,c,f,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,x):n.prototype&&n.prototype.isPureReactComponent?!Hs(a,o)||!Hs(c,f):!0}function Am(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Wu.enqueueReplaceState(n,n.state,null)}function dr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var Ml=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Rm(t){Ml(t)}function Cm(t){console.error(t)}function wm(t){Ml(t)}function bl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Dm(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function qu(t,n,a){return a=Ea(a),a.tag=3,a.payload={element:null},a.callback=function(){bl(t,n)},a}function Um(t){return t=Ea(t),t.tag=3,t}function Nm(t,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;t.payload=function(){return c(f)},t.callback=function(){Dm(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){Dm(n,a,o),typeof c!="function"&&(Pa===null?Pa=new Set([this]):Pa.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function hx(t,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Ws(n,a,c,!0),a=ci.current,a!==null){switch(a.tag){case 13:return wi===null?_f():a.alternate===null&&rn===0&&(rn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===yu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),xf(t,o,c)),!1;case 22:return a.flags|=65536,o===yu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),xf(t,o,c)),!1}throw Error(r(435,a.tag))}return xf(t,o,c),_f(),!1}if(It)return n=ci.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==pu&&(t=Error(r(422),{cause:o}),Xs(ri(t,a)))):(o!==pu&&(n=Error(r(423),{cause:o}),Xs(ri(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=ri(o,a),c=qu(t.stateNode,o,c),Eu(t,c),rn!==4&&(rn=2)),!1;var f=Error(r(520),{cause:o});if(f=ri(f,a),fo===null?fo=[f]:fo.push(f),rn!==4&&(rn=2),n===null)return!0;o=ri(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=qu(a.stateNode,o,t),Eu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Pa===null||!Pa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Um(c),Nm(c,t,a,o),Eu(a,c),!1}a=a.return}while(a!==null);return!1}var Lm=Error(r(461)),xn=!1;function Tn(t,n,a,o){n.child=t===null?bm(n,null,a,o):jr(n,t.child,a,o)}function Pm(t,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var x={};for(var R in o)R!=="ref"&&(x[R]=o[R])}else x=o;return cr(n),o=wu(t,n,a,x,f,c),R=Du(),t!==null&&!xn?(Uu(t,n,c),ea(t,n,c)):(It&&R&&du(n),n.flags|=1,Tn(t,n,o,c),n.child)}function Om(t,n,a,o,c){if(t===null){var f=a.type;return typeof f=="function"&&!cu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Im(t,n,f,o,c)):(t=nl(a.type,null,o,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!ef(t,c)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:Hs,a(x,o)&&t.ref===n.ref)return ea(t,n,c)}return n.flags|=1,t=Yi(f,o),t.ref=n.ref,t.return=n,n.child=t}function Im(t,n,a,o,c){if(t!==null){var f=t.memoizedProps;if(Hs(f,o)&&t.ref===n.ref)if(xn=!1,n.pendingProps=o=f,ef(t,c))(t.flags&131072)!==0&&(xn=!0);else return n.lanes=t.lanes,ea(t,n,c)}return Yu(t,n,a,o,c)}function Fm(t,n,a){var o=n.pendingProps,c=o.children,f=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return Bm(t,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&ol(n,f!==null?f.cachePool:null),f!==null?Ip(n,f):Au(),Em(n);else return n.lanes=n.childLanes=536870912,Bm(t,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(ol(n,f.cachePool),Ip(n,f),Ca(),n.memoizedState=null):(t!==null&&ol(n,null),Au(),Ca());return Tn(t,n,c,a),n.child}function Bm(t,n,a,o){var c=Su();return c=c===null?null:{parent:mn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&ol(n,null),Au(),Em(n),t!==null&&Ws(t,n,o,!0),null}function El(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Yu(t,n,a,o,c){return cr(n),a=wu(t,n,a,o,void 0,c),o=Du(),t!==null&&!xn?(Uu(t,n,c),ea(t,n,c)):(It&&o&&du(n),n.flags|=1,Tn(t,n,a,c),n.child)}function zm(t,n,a,o,c,f){return cr(n),n.updateQueue=null,a=Bp(n,o,a,c),Fp(t),o=Du(),t!==null&&!xn?(Uu(t,n,f),ea(t,n,f)):(It&&o&&du(n),n.flags|=1,Tn(t,n,a,f),n.child)}function Hm(t,n,a,o,c){if(cr(n),n.stateNode===null){var f=Br,x=a.contextType;typeof x=="object"&&x!==null&&(f=wn(x)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Wu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Mu(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?wn(x):Br,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Xu(n,a,x,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Wu.enqueueReplaceState(f,f.state,null),Js(n,o,f,c),Qs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var R=n.memoizedProps,F=dr(a,R);f.props=F;var ne=f.context,me=a.contextType;x=Br,typeof me=="object"&&me!==null&&(x=wn(me));var xe=a.getDerivedStateFromProps;me=typeof xe=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,me||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||ne!==x)&&Am(n,f,o,x),ba=!1;var ae=n.memoizedState;f.state=ae,Js(n,o,f,c),Qs(),ne=n.memoizedState,R||ae!==ne||ba?(typeof xe=="function"&&(Xu(n,a,xe,o),ne=n.memoizedState),(F=ba||Tm(n,a,F,o,ae,ne,x))?(me||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ne),f.props=o,f.state=ne,f.context=x,o=F):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,bu(t,n),x=n.memoizedProps,me=dr(a,x),f.props=me,xe=n.pendingProps,ae=f.context,ne=a.contextType,F=Br,typeof ne=="object"&&ne!==null&&(F=wn(ne)),R=a.getDerivedStateFromProps,(ne=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==xe||ae!==F)&&Am(n,f,o,F),ba=!1,ae=n.memoizedState,f.state=ae,Js(n,o,f,c),Qs();var le=n.memoizedState;x!==xe||ae!==le||ba||t!==null&&t.dependencies!==null&&rl(t.dependencies)?(typeof R=="function"&&(Xu(n,a,R,o),le=n.memoizedState),(me=ba||Tm(n,a,me,o,ae,le,F)||t!==null&&t.dependencies!==null&&rl(t.dependencies))?(ne||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,le,F),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,le,F)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&ae===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&ae===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=le),f.props=o,f.state=le,f.context=F,o=me):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&ae===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&ae===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,El(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=jr(n,t.child,null,c),n.child=jr(n,null,a,c)):Tn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=ea(t,n,c),t}function Gm(t,n,a,o){return ks(),n.flags|=256,Tn(t,n,a,o),n.child}var ju={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zu(t){return{baseLanes:t,cachePool:Cp()}}function Ku(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ui),t}function Vm(t,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=t!==null&&t.memoizedState===null?!1:(gn.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(It){if(c?Ra(n):Ca(),It){var R=an,F;if(F=R){e:{for(F=R,R=Ci;F.nodeType!==8;){if(!R){R=null;break e}if(F=xi(F.nextSibling),F===null){R=null;break e}}R=F}R!==null?(n.memoizedState={dehydrated:R,treeContext:ar!==null?{id:ji,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},F=Kn(18,null,null,0),F.stateNode=R,F.return=n,n.child=F,Fn=n,an=null,F=!0):F=!1}F||or(n)}if(R=n.memoizedState,R!==null&&(R=R.dehydrated,R!==null))return Pf(R)?n.lanes=32:n.lanes=536870912,null;$i(n)}return R=o.children,o=o.fallback,c?(Ca(),c=n.mode,R=Tl({mode:"hidden",children:R},c),o=ir(o,c,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,c=n.child,c.memoizedState=Zu(a),c.childLanes=Ku(t,x,a),n.memoizedState=ju,o):(Ra(n),Qu(n,R))}if(F=t.memoizedState,F!==null&&(R=F.dehydrated,R!==null)){if(f)n.flags&256?(Ra(n),n.flags&=-257,n=Ju(t,n,a)):n.memoizedState!==null?(Ca(),n.child=t.child,n.flags|=128,n=null):(Ca(),c=o.fallback,R=n.mode,o=Tl({mode:"visible",children:o.children},R),c=ir(c,R,a,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,jr(n,t.child,null,a),o=n.child,o.memoizedState=Zu(a),o.childLanes=Ku(t,x,a),n.memoizedState=ju,n=c);else if(Ra(n),Pf(R)){if(x=R.nextSibling&&R.nextSibling.dataset,x)var ne=x.dgst;x=ne,o=Error(r(419)),o.stack="",o.digest=x,Xs({value:o,source:null,stack:null}),n=Ju(t,n,a)}else if(xn||Ws(t,n,a,!1),x=(a&t.childLanes)!==0,xn||x){if(x=Kt,x!==null&&(o=a&-a,o=(o&42)!==0?1:De(o),o=(o&(x.suspendedLanes|a))!==0?0:o,o!==0&&o!==F.retryLane))throw F.retryLane=o,Fr(t,o),ti(x,t,o),Lm;R.data==="$?"||_f(),n=Ju(t,n,a)}else R.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=F.treeContext,an=xi(R.nextSibling),Fn=n,It=!0,sr=null,Ci=!1,t!==null&&(oi[li++]=ji,oi[li++]=Zi,oi[li++]=ar,ji=t.id,Zi=t.overflow,ar=n),n=Qu(n,o.children),n.flags|=4096);return n}return c?(Ca(),c=o.fallback,R=n.mode,F=t.child,ne=F.sibling,o=Yi(F,{mode:"hidden",children:o.children}),o.subtreeFlags=F.subtreeFlags&65011712,ne!==null?c=Yi(ne,c):(c=ir(c,R,a,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,R=t.child.memoizedState,R===null?R=Zu(a):(F=R.cachePool,F!==null?(ne=mn._currentValue,F=F.parent!==ne?{parent:ne,pool:ne}:F):F=Cp(),R={baseLanes:R.baseLanes|a,cachePool:F}),c.memoizedState=R,c.childLanes=Ku(t,x,a),n.memoizedState=ju,o):(Ra(n),a=t.child,t=a.sibling,a=Yi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function Qu(t,n){return n=Tl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Tl(t,n){return t=Kn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Ju(t,n,a){return jr(n,t.child,null,a),t=Qu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function km(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),gu(t.return,n,a)}function $u(t,n,a,o,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=c)}function Xm(t,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;if(Tn(t,n,o.children,a),o=gn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&km(t,a,n);else if(t.tag===19)km(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(ye(gn,o),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&yl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),$u(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&yl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}$u(n,!0,a,null,f);break;case"together":$u(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ea(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),La|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ws(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Yi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Yi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function ef(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&rl(t)))}function px(t,n,a){switch(n.tag){case 3:Se(n,n.stateNode.containerInfo),Ma(n,mn,t.memoizedState.cache),ks();break;case 27:case 5:et(n);break;case 4:Se(n,n.stateNode.containerInfo);break;case 10:Ma(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ra(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Vm(t,n,a):(Ra(n),t=ea(t,n,a),t!==null?t.sibling:null);Ra(n);break;case 19:var c=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Ws(t,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return Xm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ye(gn,gn.current),o)break;return null;case 22:case 23:return n.lanes=0,Fm(t,n,a);case 24:Ma(n,mn,t.memoizedState.cache)}return ea(t,n,a)}function Wm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)xn=!0;else{if(!ef(t,a)&&(n.flags&128)===0)return xn=!1,px(t,n,a);xn=(t.flags&131072)!==0}else xn=!1,It&&(n.flags&1048576)!==0&&yp(n,al,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")cu(o)?(t=dr(o,t),n.tag=1,n=Hm(null,n,o,t,a)):(n.tag=0,n=Yu(null,n,o,t,a));else{if(o!=null){if(c=o.$$typeof,c===P){n.tag=11,n=Pm(null,n,o,t,a);break e}else if(c===G){n.tag=14,n=Om(null,n,o,t,a);break e}}throw n=he(o)||o,Error(r(306,n,""))}}return n;case 0:return Yu(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=dr(o,n.pendingProps),Hm(t,n,o,c,a);case 3:e:{if(Se(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,bu(t,n),Js(n,o,null,a);var x=n.memoizedState;if(o=x.cache,Ma(n,mn,o),o!==f.cache&&_u(n,[mn],a,!0),Qs(),o=x.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Gm(t,n,o,a);break e}else if(o!==c){c=ri(Error(r(424)),n),Xs(c),n=Gm(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(an=xi(t.firstChild),Fn=n,It=!0,sr=null,Ci=!0,a=bm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ks(),o===c){n=ea(t,n,a);break e}Tn(t,n,o,a)}n=n.child}return n;case 26:return El(t,n),t===null?(a=Zg(n.type,null,n.pendingProps,null))?n.memoizedState=a:It||(a=n.type,t=n.pendingProps,o=zl(te.current).createElement(a),o[st]=n,o[Qt]=t,Rn(o,a,t),tn(o),n.stateNode=o):n.memoizedState=Zg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return et(n),t===null&&It&&(o=n.stateNode=qg(n.type,n.pendingProps,te.current),Fn=n,Ci=!0,c=an,Fa(n.type)?(Of=c,an=xi(o.firstChild)):an=c),Tn(t,n,n.pendingProps.children,a),El(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&It&&((c=o=an)&&(o=Vx(o,n.type,n.pendingProps,Ci),o!==null?(n.stateNode=o,Fn=n,an=xi(o.firstChild),Ci=!1,c=!0):c=!1),c||or(n)),et(n),c=n.type,f=n.pendingProps,x=t!==null?t.memoizedProps:null,o=f.children,Uf(c,f)?o=null:x!==null&&Uf(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=wu(t,n,sx,null,null,a),yo._currentValue=c),El(t,n),Tn(t,n,o,a),n.child;case 6:return t===null&&It&&((t=a=an)&&(a=kx(a,n.pendingProps,Ci),a!==null?(n.stateNode=a,Fn=n,an=null,t=!0):t=!1),t||or(n)),null;case 13:return Vm(t,n,a);case 4:return Se(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=jr(n,null,o,a):Tn(t,n,o,a),n.child;case 11:return Pm(t,n,n.type,n.pendingProps,a);case 7:return Tn(t,n,n.pendingProps,a),n.child;case 8:return Tn(t,n,n.pendingProps.children,a),n.child;case 12:return Tn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ma(n,n.type,o.value),Tn(t,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,cr(n),c=wn(c),o=o(c),n.flags|=1,Tn(t,n,o,a),n.child;case 14:return Om(t,n,n.type,n.pendingProps,a);case 15:return Im(t,n,n.type,n.pendingProps,a);case 19:return Xm(t,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},t===null?(a=Tl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Yi(t.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Fm(t,n,a);case 24:return cr(n),o=wn(mn),t===null?(c=Su(),c===null&&(c=Kt,f=vu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},Mu(n),Ma(n,mn,c)):((t.lanes&a)!==0&&(bu(t,n),Js(n,null,null,a),Qs()),c=t.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ma(n,mn,o)):(o=f.cache,Ma(n,mn,o),o!==c.cache&&_u(n,[mn],a,!0))),Tn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ta(t){t.flags|=4}function qm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!e0(n)){if(n=ci.current,n!==null&&((Dt&4194048)===Dt?wi!==null:(Dt&62914560)!==Dt&&(Dt&536870912)===0||n!==wi))throw Zs=yu,wp;t.flags|=8192}}function Al(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?it():536870912,t.lanes|=n,Jr|=n)}function ro(t,n){if(!It)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function nn(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function mx(t,n,a){var o=n.pendingProps;switch(hu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(n),null;case 1:return nn(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Qi(mn),qe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Vs(n)?ta(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ep())),nn(n),null;case 26:return a=n.memoizedState,t===null?(ta(n),a!==null?(nn(n),qm(n,a)):(nn(n),n.flags&=-16777217)):a?a!==t.memoizedState?(ta(n),nn(n),qm(n,a)):(nn(n),n.flags&=-16777217):(t.memoizedProps!==o&&ta(n),nn(n),n.flags&=-16777217),null;case 27:Ze(n),a=te.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ta(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return nn(n),null}t=Ne.current,Vs(n)?Mp(n):(t=qg(c,o,a),n.stateNode=t,ta(n))}return nn(n),null;case 5:if(Ze(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ta(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return nn(n),null}if(t=Ne.current,Vs(n))Mp(n);else{switch(c=zl(te.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?c.createElement(a,{is:o.is}):c.createElement(a)}}t[st]=n,t[Qt]=o;e:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break e;for(;c.sibling===null;){if(c.return===null||c.return===n)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;e:switch(Rn(t,a,o),a){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&ta(n)}}return nn(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ta(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=te.current,Vs(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,c=Fn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[st]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||zg(t.nodeValue,a)),t||or(n)}else t=zl(t).createTextNode(o),t[st]=n,n.stateNode=t}return nn(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Vs(n),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[st]=n}else ks(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;nn(n),c=!1}else c=Ep(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?($i(n),n):($i(n),null)}if($i(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,t=t!==null&&t.memoizedState!==null,a){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Al(n,n.updateQueue),nn(n),null;case 4:return qe(),t===null&&Af(n.stateNode.containerInfo),nn(n),null;case 10:return Qi(n.type),nn(n),null;case 19:if(ue(gn),c=n.memoizedState,c===null)return nn(n),null;if(o=(n.flags&128)!==0,f=c.rendering,f===null)if(o)ro(c,!1);else{if(rn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=yl(t),f!==null){for(n.flags|=128,ro(c,!1),t=f.updateQueue,n.updateQueue=t,Al(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Sp(a,t),a=a.sibling;return ye(gn,gn.current&1|2),n.child}t=t.sibling}c.tail!==null&&ke()>wl&&(n.flags|=128,o=!0,ro(c,!1),n.lanes=4194304)}else{if(!o)if(t=yl(f),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,Al(n,t),ro(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!It)return nn(n),null}else 2*ke()-c.renderingStartTime>wl&&a!==536870912&&(n.flags|=128,o=!0,ro(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=ke(),n.sibling=null,t=gn.current,ye(gn,o?t&1|2:t&1),n):(nn(n),null);case 22:case 23:return $i(n),Ru(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(nn(n),n.subtreeFlags&6&&(n.flags|=8192)):nn(n),a=n.updateQueue,a!==null&&Al(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&ue(ur),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Qi(mn),nn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function gx(t,n){switch(hu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Qi(mn),qe(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ze(n),null;case 13:if($i(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ks()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ue(gn),null;case 4:return qe(),null;case 10:return Qi(n.type),null;case 22:case 23:return $i(n),Ru(),t!==null&&ue(ur),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Qi(mn),null;case 25:return null;default:return null}}function Ym(t,n){switch(hu(n),n.tag){case 3:Qi(mn),qe();break;case 26:case 27:case 5:Ze(n);break;case 4:qe();break;case 13:$i(n);break;case 19:ue(gn);break;case 10:Qi(n.type);break;case 22:case 23:$i(n),Ru(),t!==null&&ue(ur);break;case 24:Qi(mn)}}function so(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&t)===t){o=void 0;var f=a.create,x=a.inst;o=f(),x.destroy=o}a=a.next}while(a!==c)}}catch(R){jt(n,n.return,R)}}function wa(t,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&t)===t){var x=o.inst,R=x.destroy;if(R!==void 0){x.destroy=void 0,c=n;var F=a,ne=R;try{ne()}catch(me){jt(c,F,me)}}}o=o.next}while(o!==f)}}catch(me){jt(n,n.return,me)}}function jm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Op(n,a)}catch(o){jt(t,t.return,o)}}}function Zm(t,n,a){a.props=dr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){jt(t,n,o)}}function oo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(c){jt(t,n,c)}}function Di(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){jt(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){jt(t,n,c)}else a.current=null}function Km(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){jt(t,t.return,c)}}function tf(t,n,a){try{var o=t.stateNode;Fx(o,t.type,a,n),o[Qt]=n}catch(c){jt(t,t.return,c)}}function Qm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Fa(t.type)||t.tag===4}function nf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Qm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Fa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function af(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Bl));else if(o!==4&&(o===27&&Fa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(af(t,n,a),t=t.sibling;t!==null;)af(t,n,a),t=t.sibling}function Rl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Fa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Rl(t,n,a),t=t.sibling;t!==null;)Rl(t,n,a),t=t.sibling}function Jm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Rn(n,o,a),n[st]=t,n[Qt]=a}catch(f){jt(t,t.return,f)}}var na=!1,on=!1,rf=!1,$m=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function _x(t,n){if(t=t.containerInfo,wf=Wl,t=up(t),nu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var x=0,R=-1,F=-1,ne=0,me=0,xe=t,ae=null;t:for(;;){for(var le;xe!==a||c!==0&&xe.nodeType!==3||(R=x+c),xe!==f||o!==0&&xe.nodeType!==3||(F=x+o),xe.nodeType===3&&(x+=xe.nodeValue.length),(le=xe.firstChild)!==null;)ae=xe,xe=le;for(;;){if(xe===t)break t;if(ae===a&&++ne===c&&(R=x),ae===f&&++me===o&&(F=x),(le=xe.nextSibling)!==null)break;xe=ae,ae=xe.parentNode}xe=le}a=R===-1||F===-1?null:{start:R,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(Df={focusedElem:t,selectionRange:a},Wl=!1,Sn=n;Sn!==null;)if(n=Sn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,Sn=t;else for(;Sn!==null;){switch(n=Sn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var at=dr(a.type,c,a.elementType===a.type);t=o.getSnapshotBeforeUpdate(at,f),o.__reactInternalSnapshotBeforeUpdate=t}catch($e){jt(a,a.return,$e)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Lf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Lf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Sn=t;break}Sn=n.return}}function eg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Da(t,a),o&4&&so(5,a);break;case 1:if(Da(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){jt(a,a.return,x)}else{var c=dr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){jt(a,a.return,x)}}o&64&&jm(a),o&512&&oo(a,a.return);break;case 3:if(Da(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Op(t,n)}catch(x){jt(a,a.return,x)}}break;case 27:n===null&&o&4&&Jm(a);case 26:case 5:Da(t,a),n===null&&o&4&&Km(a),o&512&&oo(a,a.return);break;case 12:Da(t,a);break;case 13:Da(t,a),o&4&&ig(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Ax.bind(null,a),Xx(t,a))));break;case 22:if(o=a.memoizedState!==null||na,!o){n=n!==null&&n.memoizedState!==null||on,c=na;var f=on;na=o,(on=n)&&!f?Ua(t,a,(a.subtreeFlags&8772)!==0):Da(t,a),na=c,on=f}break;case 30:break;default:Da(t,a)}}function tg(t){var n=t.alternate;n!==null&&(t.alternate=null,tg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&$a(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var en=null,Gn=!1;function ia(t,n,a){for(a=a.child;a!==null;)ng(t,n,a),a=a.sibling}function ng(t,n,a){if(M&&typeof M.onCommitFiberUnmount=="function")try{M.onCommitFiberUnmount(C,a)}catch{}switch(a.tag){case 26:on||Di(a,n),ia(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:on||Di(a,n);var o=en,c=Gn;Fa(a.type)&&(en=a.stateNode,Gn=!1),ia(t,n,a),_o(a.stateNode),en=o,Gn=c;break;case 5:on||Di(a,n);case 6:if(o=en,c=Gn,en=null,ia(t,n,a),en=o,Gn=c,en!==null)if(Gn)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(a.stateNode)}catch(f){jt(a,n,f)}else try{en.removeChild(a.stateNode)}catch(f){jt(a,n,f)}break;case 18:en!==null&&(Gn?(t=en,Xg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),To(t)):Xg(en,a.stateNode));break;case 4:o=en,c=Gn,en=a.stateNode.containerInfo,Gn=!0,ia(t,n,a),en=o,Gn=c;break;case 0:case 11:case 14:case 15:on||wa(2,a,n),on||wa(4,a,n),ia(t,n,a);break;case 1:on||(Di(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Zm(a,n,o)),ia(t,n,a);break;case 21:ia(t,n,a);break;case 22:on=(o=on)||a.memoizedState!==null,ia(t,n,a),on=o;break;default:ia(t,n,a)}}function ig(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{To(t)}catch(a){jt(n,n.return,a)}}function vx(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new $m),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new $m),n;default:throw Error(r(435,t.tag))}}function sf(t,n){var a=vx(t);n.forEach(function(o){var c=Rx.bind(null,t,o);a.has(o)||(a.add(o),o.then(c,c))})}function Qn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=t,x=n,R=x;e:for(;R!==null;){switch(R.tag){case 27:if(Fa(R.type)){en=R.stateNode,Gn=!1;break e}break;case 5:en=R.stateNode,Gn=!1;break e;case 3:case 4:en=R.stateNode.containerInfo,Gn=!0;break e}R=R.return}if(en===null)throw Error(r(160));ng(f,x,c),en=null,Gn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)ag(n,t),n=n.sibling}var vi=null;function ag(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Qn(n,t),Jn(t),o&4&&(wa(3,t,t.return),so(3,t),wa(5,t,t.return));break;case 1:Qn(n,t),Jn(t),o&512&&(on||a===null||Di(a,a.return)),o&64&&na&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=vi;if(Qn(n,t),Jn(t),o&512&&(on||a===null||Di(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Yn]||f[st]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),Rn(f,o,a),f[st]=t,tn(f),o=f;break e;case"link":var x=Jg("link","href",c).get(o+(a.href||""));if(x){for(var R=0;R<x.length;R++)if(f=x[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(R,1);break t}}f=c.createElement(o),Rn(f,o,a),c.head.appendChild(f);break;case"meta":if(x=Jg("meta","content",c).get(o+(a.content||""))){for(R=0;R<x.length;R++)if(f=x[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(R,1);break t}}f=c.createElement(o),Rn(f,o,a),c.head.appendChild(f);break;default:throw Error(r(468,o))}f[st]=t,tn(f),o=f}t.stateNode=o}else $g(c,t.type,t.stateNode);else t.stateNode=Qg(c,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?$g(c,t.type,t.stateNode):Qg(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&tf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Qn(n,t),Jn(t),o&512&&(on||a===null||Di(a,a.return)),a!==null&&o&4&&tf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Qn(n,t),Jn(t),o&512&&(on||a===null||Di(a,a.return)),t.flags&32){c=t.stateNode;try{In(c,"")}catch(le){jt(t,t.return,le)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,tf(t,c,a!==null?a.memoizedProps:c)),o&1024&&(rf=!0);break;case 6:if(Qn(n,t),Jn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(le){jt(t,t.return,le)}}break;case 3:if(Vl=null,c=vi,vi=Hl(n.containerInfo),Qn(n,t),vi=c,Jn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{To(n.containerInfo)}catch(le){jt(t,t.return,le)}rf&&(rf=!1,rg(t));break;case 4:o=vi,vi=Hl(t.stateNode.containerInfo),Qn(n,t),Jn(t),vi=o;break;case 12:Qn(n,t),Jn(t);break;case 13:Qn(n,t),Jn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(df=ke()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,sf(t,o)));break;case 22:c=t.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,ne=na,me=on;if(na=ne||c,on=me||F,Qn(n,t),on=me,na=ne,Jn(t),o&8192)e:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||F||na||on||hr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(f=F.stateNode,c)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{R=F.stateNode;var xe=F.memoizedProps.style,ae=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;R.style.display=ae==null||typeof ae=="boolean"?"":(""+ae).trim()}}catch(le){jt(F,F.return,le)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=c?"":F.memoizedProps}catch(le){jt(F,F.return,le)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,sf(t,a))));break;case 19:Qn(n,t),Jn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,sf(t,o)));break;case 30:break;case 21:break;default:Qn(n,t),Jn(t)}}function Jn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Qm(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=nf(t);Rl(t,f,c);break;case 5:var x=a.stateNode;a.flags&32&&(In(x,""),a.flags&=-33);var R=nf(t);Rl(t,R,x);break;case 3:case 4:var F=a.stateNode.containerInfo,ne=nf(t);af(t,ne,F);break;default:throw Error(r(161))}}catch(me){jt(t,t.return,me)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function rg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;rg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Da(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)eg(t,n.alternate,n),n=n.sibling}function hr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:wa(4,n,n.return),hr(n);break;case 1:Di(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Zm(n,n.return,a),hr(n);break;case 27:_o(n.stateNode);case 26:case 5:Di(n,n.return),hr(n);break;case 22:n.memoizedState===null&&hr(n);break;case 30:hr(n);break;default:hr(n)}t=t.sibling}}function Ua(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=t,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:Ua(c,f,a),so(4,f);break;case 1:if(Ua(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(ne){jt(o,o.return,ne)}if(o=f,c=o.updateQueue,c!==null){var R=o.stateNode;try{var F=c.shared.hiddenCallbacks;if(F!==null)for(c.shared.hiddenCallbacks=null,c=0;c<F.length;c++)Pp(F[c],R)}catch(ne){jt(o,o.return,ne)}}a&&x&64&&jm(f),oo(f,f.return);break;case 27:Jm(f);case 26:case 5:Ua(c,f,a),a&&o===null&&x&4&&Km(f),oo(f,f.return);break;case 12:Ua(c,f,a);break;case 13:Ua(c,f,a),a&&x&4&&ig(c,f);break;case 22:f.memoizedState===null&&Ua(c,f,a),oo(f,f.return);break;case 30:break;default:Ua(c,f,a)}n=n.sibling}}function of(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&qs(a))}function lf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&qs(t))}function Ui(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)sg(t,n,a,o),n=n.sibling}function sg(t,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ui(t,n,a,o),c&2048&&so(9,n);break;case 1:Ui(t,n,a,o);break;case 3:Ui(t,n,a,o),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&qs(t)));break;case 12:if(c&2048){Ui(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,x=f.id,R=f.onPostCommit;typeof R=="function"&&R(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(F){jt(n,n.return,F)}}else Ui(t,n,a,o);break;case 13:Ui(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?Ui(t,n,a,o):lo(t,n):f._visibility&2?Ui(t,n,a,o):(f._visibility|=2,Zr(t,n,a,o,(n.subtreeFlags&10256)!==0)),c&2048&&of(x,n);break;case 24:Ui(t,n,a,o),c&2048&&lf(n.alternate,n);break;default:Ui(t,n,a,o)}}function Zr(t,n,a,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,x=n,R=a,F=o,ne=x.flags;switch(x.tag){case 0:case 11:case 15:Zr(f,x,R,F,c),so(8,x);break;case 23:break;case 22:var me=x.stateNode;x.memoizedState!==null?me._visibility&2?Zr(f,x,R,F,c):lo(f,x):(me._visibility|=2,Zr(f,x,R,F,c)),c&&ne&2048&&of(x.alternate,x);break;case 24:Zr(f,x,R,F,c),c&&ne&2048&&lf(x.alternate,x);break;default:Zr(f,x,R,F,c)}n=n.sibling}}function lo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,c=o.flags;switch(o.tag){case 22:lo(a,o),c&2048&&of(o.alternate,o);break;case 24:lo(a,o),c&2048&&lf(o.alternate,o);break;default:lo(a,o)}n=n.sibling}}var co=8192;function Kr(t){if(t.subtreeFlags&co)for(t=t.child;t!==null;)og(t),t=t.sibling}function og(t){switch(t.tag){case 26:Kr(t),t.flags&co&&t.memoizedState!==null&&iS(vi,t.memoizedState,t.memoizedProps);break;case 5:Kr(t);break;case 3:case 4:var n=vi;vi=Hl(t.stateNode.containerInfo),Kr(t),vi=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=co,co=16777216,Kr(t),co=n):Kr(t));break;default:Kr(t)}}function lg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function uo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,ug(o,t)}lg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)cg(t),t=t.sibling}function cg(t){switch(t.tag){case 0:case 11:case 15:uo(t),t.flags&2048&&wa(9,t,t.return);break;case 3:uo(t);break;case 12:uo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Cl(t)):uo(t);break;default:uo(t)}}function Cl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,ug(o,t)}lg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:wa(8,n,n.return),Cl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Cl(n));break;default:Cl(n)}t=t.sibling}}function ug(t,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:wa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:qs(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Sn=o;else e:for(a=t;Sn!==null;){o=Sn;var c=o.sibling,f=o.return;if(tg(o),o===a){Sn=null;break e}if(c!==null){c.return=f,Sn=c;break e}Sn=f}}}var xx={getCacheForType:function(t){var n=wn(mn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},Sx=typeof WeakMap=="function"?WeakMap:Map,Ht=0,Kt=null,bt=null,Dt=0,Gt=0,$n=null,Na=!1,Qr=!1,cf=!1,aa=0,rn=0,La=0,pr=0,uf=0,ui=0,Jr=0,fo=null,Vn=null,ff=!1,df=0,wl=1/0,Dl=null,Pa=null,An=0,Oa=null,$r=null,es=0,hf=0,pf=null,fg=null,ho=0,mf=null;function ei(){if((Ht&2)!==0&&Dt!==0)return Dt&-Dt;if(N.T!==null){var t=Gr;return t!==0?t:Mf()}return Ye()}function dg(){ui===0&&(ui=(Dt&536870912)===0||It?Je():536870912);var t=ci.current;return t!==null&&(t.flags|=32),ui}function ti(t,n,a){(t===Kt&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)&&(ts(t,0),Ia(t,Dt,ui,!1)),k(t,a),((Ht&2)===0||t!==Kt)&&(t===Kt&&((Ht&2)===0&&(pr|=a),rn===4&&Ia(t,Dt,ui,!1)),Ni(t))}function hg(t,n,a){if((Ht&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&t.expiredLanes)===0||Te(t,n),c=o?bx(t,n):vf(t,n,!0),f=o;do{if(c===0){Qr&&!o&&Ia(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!yx(a)){c=vf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var R=t;c=fo;var F=R.current.memoizedState.isDehydrated;if(F&&(ts(R,x).flags|=256),x=vf(R,x,!1),x!==2){if(cf&&!F){R.errorRecoveryDisabledLanes|=f,pr|=f,c=4;break e}f=Vn,Vn=c,f!==null&&(Vn===null?Vn=f:Vn.push.apply(Vn,f))}c=x}if(f=!1,c!==2)continue}}if(c===1){ts(t,0),Ia(t,n,0,!0);break}e:{switch(o=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ia(o,n,ui,!Na);break e;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=df+300-ke(),10<c)){if(Ia(o,n,ui,!Na),Be(o,0,!0)!==0)break e;o.timeoutHandle=Vg(pg.bind(null,o,a,Vn,Dl,ff,n,ui,pr,Jr,Na,f,2,-0,0),c);break e}pg(o,a,Vn,Dl,ff,n,ui,pr,Jr,Na,f,0,-0,0)}}break}while(!0);Ni(t)}function pg(t,n,a,o,c,f,x,R,F,ne,me,xe,ae,le){if(t.timeoutHandle=-1,xe=n.subtreeFlags,(xe&8192||(xe&16785408)===16785408)&&(So={stylesheets:null,count:0,unsuspend:nS},og(n),xe=aS(),xe!==null)){t.cancelPendingCommit=xe(yg.bind(null,t,n,f,a,o,c,x,R,F,me,1,ae,le)),Ia(t,f,x,!ne);return}yg(t,n,f,a,o,c,x,R,F)}function yx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!Zn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ia(t,n,a,o){n&=~uf,n&=~pr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var c=n;0<c;){var f=31-ce(c),x=1<<f;o[f]=-1,c&=~x}a!==0&&pe(t,a,n)}function Ul(){return(Ht&6)===0?(po(0),!1):!0}function gf(){if(bt!==null){if(Gt===0)var t=bt.return;else t=bt,Ki=lr=null,Nu(t),Yr=null,io=0,t=bt;for(;t!==null;)Ym(t.alternate,t),t=t.return;bt=null}}function ts(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,zx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),gf(),Kt=t,bt=a=Yi(t.current,null),Dt=n,Gt=0,$n=null,Na=!1,Qr=Te(t,n),cf=!1,Jr=ui=uf=pr=La=rn=0,Vn=fo=null,ff=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var c=31-ce(o),f=1<<c;n|=t[c],o&=~f}return aa=n,$o(),a}function mg(t,n){St=null,N.H=vl,n===js||n===ll?(n=Np(),Gt=3):n===wp?(n=Np(),Gt=4):Gt=n===Lm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,$n=n,bt===null&&(rn=1,bl(t,ri(n,t.current)))}function gg(){var t=N.H;return N.H=vl,t===null?vl:t}function _g(){var t=N.A;return N.A=xx,t}function _f(){rn=4,Na||(Dt&4194048)!==Dt&&ci.current!==null||(Qr=!0),(La&134217727)===0&&(pr&134217727)===0||Kt===null||Ia(Kt,Dt,ui,!1)}function vf(t,n,a){var o=Ht;Ht|=2;var c=gg(),f=_g();(Kt!==t||Dt!==n)&&(Dl=null,ts(t,n)),n=!1;var x=rn;e:do try{if(Gt!==0&&bt!==null){var R=bt,F=$n;switch(Gt){case 8:gf(),x=6;break e;case 3:case 2:case 9:case 6:ci.current===null&&(n=!0);var ne=Gt;if(Gt=0,$n=null,ns(t,R,F,ne),a&&Qr){x=0;break e}break;default:ne=Gt,Gt=0,$n=null,ns(t,R,F,ne)}}Mx(),x=rn;break}catch(me){mg(t,me)}while(!0);return n&&t.shellSuspendCounter++,Ki=lr=null,Ht=o,N.H=c,N.A=f,bt===null&&(Kt=null,Dt=0,$o()),x}function Mx(){for(;bt!==null;)vg(bt)}function bx(t,n){var a=Ht;Ht|=2;var o=gg(),c=_g();Kt!==t||Dt!==n?(Dl=null,wl=ke()+500,ts(t,n)):Qr=Te(t,n);e:do try{if(Gt!==0&&bt!==null){n=bt;var f=$n;t:switch(Gt){case 1:Gt=0,$n=null,ns(t,n,f,1);break;case 2:case 9:if(Dp(f)){Gt=0,$n=null,xg(n);break}n=function(){Gt!==2&&Gt!==9||Kt!==t||(Gt=7),Ni(t)},f.then(n,n);break e;case 3:Gt=7;break e;case 4:Gt=5;break e;case 7:Dp(f)?(Gt=0,$n=null,xg(n)):(Gt=0,$n=null,ns(t,n,f,7));break;case 5:var x=null;switch(bt.tag){case 26:x=bt.memoizedState;case 5:case 27:var R=bt;if(!x||e0(x)){Gt=0,$n=null;var F=R.sibling;if(F!==null)bt=F;else{var ne=R.return;ne!==null?(bt=ne,Nl(ne)):bt=null}break t}}Gt=0,$n=null,ns(t,n,f,5);break;case 6:Gt=0,$n=null,ns(t,n,f,6);break;case 8:gf(),rn=6;break e;default:throw Error(r(462))}}Ex();break}catch(me){mg(t,me)}while(!0);return Ki=lr=null,N.H=o,N.A=c,Ht=a,bt!==null?0:(Kt=null,Dt=0,$o(),rn)}function Ex(){for(;bt!==null&&!Pt();)vg(bt)}function vg(t){var n=Wm(t.alternate,t,aa);t.memoizedProps=t.pendingProps,n===null?Nl(t):bt=n}function xg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=zm(a,n,n.pendingProps,n.type,void 0,Dt);break;case 11:n=zm(a,n,n.pendingProps,n.type.render,n.ref,Dt);break;case 5:Nu(n);default:Ym(a,n),n=bt=Sp(n,aa),n=Wm(a,n,aa)}t.memoizedProps=t.pendingProps,n===null?Nl(t):bt=n}function ns(t,n,a,o){Ki=lr=null,Nu(n),Yr=null,io=0;var c=n.return;try{if(hx(t,c,n,a,Dt)){rn=1,bl(t,ri(a,t.current)),bt=null;return}}catch(f){if(c!==null)throw bt=c,f;rn=1,bl(t,ri(a,t.current)),bt=null;return}n.flags&32768?(It||o===1?t=!0:Qr||(Dt&536870912)!==0?t=!1:(Na=t=!0,(o===2||o===9||o===3||o===6)&&(o=ci.current,o!==null&&o.tag===13&&(o.flags|=16384))),Sg(n,t)):Nl(n)}function Nl(t){var n=t;do{if((n.flags&32768)!==0){Sg(n,Na);return}t=n.return;var a=mx(n.alternate,n,aa);if(a!==null){bt=a;return}if(n=n.sibling,n!==null){bt=n;return}bt=n=t}while(n!==null);rn===0&&(rn=5)}function Sg(t,n){do{var a=gx(t.alternate,t);if(a!==null){a.flags&=32767,bt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){bt=t;return}bt=t=a}while(t!==null);rn=6,bt=null}function yg(t,n,a,o,c,f,x,R,F){t.cancelPendingCommit=null;do Ll();while(An!==0);if((Ht&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=ou,Ae(t,a,f,x,R,F),t===Kt&&(bt=Kt=null,Dt=0),$r=n,Oa=t,es=a,hf=f,pf=c,fg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Cx(wt,function(){return Ag(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=N.T,N.T=null,c=B.p,B.p=2,x=Ht,Ht|=4;try{_x(t,n,a)}finally{Ht=x,B.p=c,N.T=o}}An=1,Mg(),bg(),Eg()}}function Mg(){if(An===1){An=0;var t=Oa,n=$r,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var o=B.p;B.p=2;var c=Ht;Ht|=4;try{ag(n,t);var f=Df,x=up(t.containerInfo),R=f.focusedElem,F=f.selectionRange;if(x!==R&&R&&R.ownerDocument&&cp(R.ownerDocument.documentElement,R)){if(F!==null&&nu(R)){var ne=F.start,me=F.end;if(me===void 0&&(me=ne),"selectionStart"in R)R.selectionStart=ne,R.selectionEnd=Math.min(me,R.value.length);else{var xe=R.ownerDocument||document,ae=xe&&xe.defaultView||window;if(ae.getSelection){var le=ae.getSelection(),at=R.textContent.length,$e=Math.min(F.start,at),qt=F.end===void 0?$e:Math.min(F.end,at);!le.extend&&$e>qt&&(x=qt,qt=$e,$e=x);var Z=lp(R,$e),W=lp(R,qt);if(Z&&W&&(le.rangeCount!==1||le.anchorNode!==Z.node||le.anchorOffset!==Z.offset||le.focusNode!==W.node||le.focusOffset!==W.offset)){var $=xe.createRange();$.setStart(Z.node,Z.offset),le.removeAllRanges(),$e>qt?(le.addRange($),le.extend(W.node,W.offset)):($.setEnd(W.node,W.offset),le.addRange($))}}}}for(xe=[],le=R;le=le.parentNode;)le.nodeType===1&&xe.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<xe.length;R++){var ve=xe[R];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}Wl=!!wf,Df=wf=null}finally{Ht=c,B.p=o,N.T=a}}t.current=n,An=2}}function bg(){if(An===2){An=0;var t=Oa,n=$r,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var o=B.p;B.p=2;var c=Ht;Ht|=4;try{eg(t,n.alternate,n)}finally{Ht=c,B.p=o,N.T=a}}An=3}}function Eg(){if(An===4||An===3){An=0,dt();var t=Oa,n=$r,a=es,o=fg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?An=5:(An=0,$r=Oa=null,Tg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Pa=null),be(a),n=n.stateNode,M&&typeof M.onCommitFiberRoot=="function")try{M.onCommitFiberRoot(C,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=N.T,c=B.p,B.p=2,N.T=null;try{for(var f=t.onRecoverableError,x=0;x<o.length;x++){var R=o[x];f(R.value,{componentStack:R.stack})}}finally{N.T=n,B.p=c}}(es&3)!==0&&Ll(),Ni(t),c=t.pendingLanes,(a&4194090)!==0&&(c&42)!==0?t===mf?ho++:(ho=0,mf=t):ho=0,po(0)}}function Tg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,qs(n)))}function Ll(t){return Mg(),bg(),Eg(),Ag()}function Ag(){if(An!==5)return!1;var t=Oa,n=hf;hf=0;var a=be(es),o=N.T,c=B.p;try{B.p=32>a?32:a,N.T=null,a=pf,pf=null;var f=Oa,x=es;if(An=0,$r=Oa=null,es=0,(Ht&6)!==0)throw Error(r(331));var R=Ht;if(Ht|=4,cg(f.current),sg(f,f.current,x,a),Ht=R,po(0,!1),M&&typeof M.onPostCommitFiberRoot=="function")try{M.onPostCommitFiberRoot(C,f)}catch{}return!0}finally{B.p=c,N.T=o,Tg(t,n)}}function Rg(t,n,a){n=ri(a,n),n=qu(t.stateNode,n,2),t=Ta(t,n,2),t!==null&&(k(t,2),Ni(t))}function jt(t,n,a){if(t.tag===3)Rg(t,t,a);else for(;n!==null;){if(n.tag===3){Rg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Pa===null||!Pa.has(o))){t=ri(a,t),a=Um(2),o=Ta(n,a,2),o!==null&&(Nm(a,o,n,t),k(o,2),Ni(o));break}}n=n.return}}function xf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Sx;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(cf=!0,c.add(a),t=Tx.bind(null,t,n,a),n.then(t,t))}function Tx(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Kt===t&&(Dt&a)===a&&(rn===4||rn===3&&(Dt&62914560)===Dt&&300>ke()-df?(Ht&2)===0&&ts(t,0):uf|=a,Jr===Dt&&(Jr=0)),Ni(t)}function Cg(t,n){n===0&&(n=it()),t=Fr(t,n),t!==null&&(k(t,n),Ni(t))}function Ax(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Cg(t,a)}function Rx(t,n){var a=0;switch(t.tag){case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Cg(t,a)}function Cx(t,n){return lt(t,n)}var Pl=null,is=null,Sf=!1,Ol=!1,yf=!1,mr=0;function Ni(t){t!==is&&t.next===null&&(is===null?Pl=is=t:is=is.next=t),Ol=!0,Sf||(Sf=!0,Dx())}function po(t,n){if(!yf&&Ol){yf=!0;do for(var a=!1,o=Pl;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var x=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-ce(42|t)+1)-1,f&=c&~(x&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Ng(o,f))}else f=Dt,f=Be(o,o===Kt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Te(o,f)||(a=!0,Ng(o,f));o=o.next}while(a);yf=!1}}function wx(){wg()}function wg(){Ol=Sf=!1;var t=0;mr!==0&&(Bx()&&(t=mr),mr=0);for(var n=ke(),a=null,o=Pl;o!==null;){var c=o.next,f=Dg(o,n);f===0?(o.next=null,a===null?Pl=c:a.next=c,c===null&&(is=a)):(a=o,(t!==0||(f&3)!==0)&&(Ol=!0)),o=c}po(t)}function Dg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var x=31-ce(f),R=1<<x,F=c[x];F===-1?((R&a)===0||(R&o)!==0)&&(c[x]=we(R,n)):F<=n&&(t.expiredLanes|=R),f&=~R}if(n=Kt,a=Dt,a=Be(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&At(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Te(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&At(o),be(a)){case 2:case 8:a=V;break;case 32:a=wt;break;case 268435456:a=ut;break;default:a=wt}return o=Ug.bind(null,t),a=lt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&At(o),t.callbackPriority=2,t.callbackNode=null,2}function Ug(t,n){if(An!==0&&An!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ll()&&t.callbackNode!==a)return null;var o=Dt;return o=Be(t,t===Kt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(hg(t,o,n),Dg(t,ke()),t.callbackNode!=null&&t.callbackNode===a?Ug.bind(null,t):null)}function Ng(t,n){if(Ll())return null;hg(t,n,!0)}function Dx(){Hx(function(){(Ht&6)!==0?lt(ht,wx):wg()})}function Mf(){return mr===0&&(mr=Je()),mr}function Lg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:gi(""+t)}function Pg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Ux(t,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=Lg((c[Qt]||null).action),x=o.submitter;x&&(n=(n=x[Qt]||null)?Lg(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var R=new Ko("action","action",null,o,c);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(mr!==0){var F=x?Pg(c,x):new FormData(c);Gu(a,{pending:!0,data:F,method:c.method,action:f},null,F)}}else typeof f=="function"&&(R.preventDefault(),F=x?Pg(c,x):new FormData(c),Gu(a,{pending:!0,data:F,method:c.method,action:f},f,F))},currentTarget:c}]})}}for(var bf=0;bf<su.length;bf++){var Ef=su[bf],Nx=Ef.toLowerCase(),Lx=Ef[0].toUpperCase()+Ef.slice(1);_i(Nx,"on"+Lx)}_i(hp,"onAnimationEnd"),_i(pp,"onAnimationIteration"),_i(mp,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(Kv,"onTransitionRun"),_i(Qv,"onTransitionStart"),_i(Jv,"onTransitionCancel"),_i(gp,"onTransitionEnd"),xa("onMouseEnter",["mouseout","mouseover"]),xa("onMouseLeave",["mouseout","mouseover"]),xa("onPointerEnter",["pointerout","pointerover"]),xa("onPointerLeave",["pointerout","pointerover"]),Wi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Wi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Wi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Wi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Wi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Wi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Px=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mo));function Og(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],c=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var x=o.length-1;0<=x;x--){var R=o[x],F=R.instance,ne=R.currentTarget;if(R=R.listener,F!==f&&c.isPropagationStopped())break e;f=R,c.currentTarget=ne;try{f(c)}catch(me){Ml(me)}c.currentTarget=null,f=F}else for(x=0;x<o.length;x++){if(R=o[x],F=R.instance,ne=R.currentTarget,R=R.listener,F!==f&&c.isPropagationStopped())break e;f=R,c.currentTarget=ne;try{f(c)}catch(me){Ml(me)}c.currentTarget=null,f=F}}}}function Et(t,n){var a=n[Ja];a===void 0&&(a=n[Ja]=new Set);var o=t+"__bubble";a.has(o)||(Ig(n,t,2,!1),a.add(o))}function Tf(t,n,a){var o=0;n&&(o|=4),Ig(a,t,o,n)}var Il="_reactListening"+Math.random().toString(36).slice(2);function Af(t){if(!t[Il]){t[Il]=!0,Us.forEach(function(a){a!=="selectionchange"&&(Px.has(a)||Tf(a,!1,t),Tf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Il]||(n[Il]=!0,Tf("selectionchange",!1,n))}}function Ig(t,n,a,o){switch(s0(n)){case 2:var c=oS;break;case 8:c=lS;break;default:c=Hf}a=c.bind(null,n,a,t),c=void 0,!Yc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Rf(t,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var R=o.stateNode.containerInfo;if(R===c)break;if(x===4)for(x=o.return;x!==null;){var F=x.tag;if((F===3||F===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;R!==null;){if(x=Vi(R),x===null)return;if(F=x.tag,F===5||F===6||F===26||F===27){o=f=x;continue e}R=R.parentNode}}o=o.return}kh(function(){var ne=f,me=Wc(a),xe=[];e:{var ae=_p.get(t);if(ae!==void 0){var le=Ko,at=t;switch(t){case"keypress":if(jo(a)===0)break e;case"keydown":case"keyup":le=Cv;break;case"focusin":at="focus",le=Qc;break;case"focusout":at="blur",le=Qc;break;case"beforeblur":case"afterblur":le=Qc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=qh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=gv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=Uv;break;case hp:case pp:case mp:le=xv;break;case gp:le=Lv;break;case"scroll":case"scrollend":le=pv;break;case"wheel":le=Ov;break;case"copy":case"cut":case"paste":le=yv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=jh;break;case"toggle":case"beforetoggle":le=Fv}var $e=(n&4)!==0,qt=!$e&&(t==="scroll"||t==="scrollend"),Z=$e?ae!==null?ae+"Capture":null:ae;$e=[];for(var W=ne,$;W!==null;){var ve=W;if($=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||$===null||Z===null||(ve=Ls(W,Z),ve!=null&&$e.push(go(W,ve,$))),qt)break;W=W.return}0<$e.length&&(ae=new le(ae,at,null,a,me),xe.push({event:ae,listeners:$e}))}}if((n&7)===0){e:{if(ae=t==="mouseover"||t==="pointerover",le=t==="mouseout"||t==="pointerout",ae&&a!==Dr&&(at=a.relatedTarget||a.fromElement)&&(Vi(at)||at[bn]))break e;if((le||ae)&&(ae=me.window===me?me:(ae=me.ownerDocument)?ae.defaultView||ae.parentWindow:window,le?(at=a.relatedTarget||a.toElement,le=ne,at=at?Vi(at):null,at!==null&&(qt=u(at),$e=at.tag,at!==qt||$e!==5&&$e!==27&&$e!==6)&&(at=null)):(le=null,at=ne),le!==at)){if($e=qh,ve="onMouseLeave",Z="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&($e=jh,ve="onPointerLeave",Z="onPointerEnter",W="pointer"),qt=le==null?ae:Ai(le),$=at==null?ae:Ai(at),ae=new $e(ve,W+"leave",le,a,me),ae.target=qt,ae.relatedTarget=$,ve=null,Vi(me)===ne&&($e=new $e(Z,W+"enter",at,a,me),$e.target=$,$e.relatedTarget=qt,ve=$e),qt=ve,le&&at)t:{for($e=le,Z=at,W=0,$=$e;$;$=as($))W++;for($=0,ve=Z;ve;ve=as(ve))$++;for(;0<W-$;)$e=as($e),W--;for(;0<$-W;)Z=as(Z),$--;for(;W--;){if($e===Z||Z!==null&&$e===Z.alternate)break t;$e=as($e),Z=as(Z)}$e=null}else $e=null;le!==null&&Fg(xe,ae,le,$e,!1),at!==null&&qt!==null&&Fg(xe,qt,at,$e,!0)}}e:{if(ae=ne?Ai(ne):window,le=ae.nodeName&&ae.nodeName.toLowerCase(),le==="select"||le==="input"&&ae.type==="file")var Xe=np;else if(ep(ae))if(ip)Xe=Yv;else{Xe=Wv;var Mt=Xv}else le=ae.nodeName,!le||le.toLowerCase()!=="input"||ae.type!=="checkbox"&&ae.type!=="radio"?ne&&ai(ne.elementType)&&(Xe=np):Xe=qv;if(Xe&&(Xe=Xe(t,ne))){tp(xe,Xe,a,me);break e}Mt&&Mt(t,ae,ne),t==="focusout"&&ne&&ae.type==="number"&&ne.memoizedProps.value!=null&&En(ae,"number",ae.value)}switch(Mt=ne?Ai(ne):window,t){case"focusin":(ep(Mt)||Mt.contentEditable==="true")&&(Pr=Mt,iu=ne,Gs=null);break;case"focusout":Gs=iu=Pr=null;break;case"mousedown":au=!0;break;case"contextmenu":case"mouseup":case"dragend":au=!1,fp(xe,a,me);break;case"selectionchange":if(Zv)break;case"keydown":case"keyup":fp(xe,a,me)}var Ke;if($c)e:{switch(t){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else Lr?Jh(t,a)&&(tt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(tt="onCompositionStart");tt&&(Zh&&a.locale!=="ko"&&(Lr||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&Lr&&(Ke=Xh()):(ya=me,jc="value"in ya?ya.value:ya.textContent,Lr=!0)),Mt=Fl(ne,tt),0<Mt.length&&(tt=new Yh(tt,t,null,a,me),xe.push({event:tt,listeners:Mt}),Ke?tt.data=Ke:(Ke=$h(a),Ke!==null&&(tt.data=Ke)))),(Ke=zv?Hv(t,a):Gv(t,a))&&(tt=Fl(ne,"onBeforeInput"),0<tt.length&&(Mt=new Yh("onBeforeInput","beforeinput",null,a,me),xe.push({event:Mt,listeners:tt}),Mt.data=Ke)),Ux(xe,t,ne,a,me)}Og(xe,n)})}function go(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Fl(t,n){for(var a=n+"Capture",o=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ls(t,a),c!=null&&o.unshift(go(t,c,f)),c=Ls(t,n),c!=null&&o.push(go(t,c,f))),t.tag===3)return o;t=t.return}return[]}function as(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Fg(t,n,a,o,c){for(var f=n._reactName,x=[];a!==null&&a!==o;){var R=a,F=R.alternate,ne=R.stateNode;if(R=R.tag,F!==null&&F===o)break;R!==5&&R!==26&&R!==27||ne===null||(F=ne,c?(ne=Ls(a,f),ne!=null&&x.unshift(go(a,ne,F))):c||(ne=Ls(a,f),ne!=null&&x.push(go(a,ne,F)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var Ox=/\r\n?/g,Ix=/\u0000|\uFFFD/g;function Bg(t){return(typeof t=="string"?t:""+t).replace(Ox,`
`).replace(Ix,"")}function zg(t,n){return n=Bg(n),Bg(t)===n}function Bl(){}function Wt(t,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||In(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&In(t,""+o);break;case"className":A(t,"class",o);break;case"tabIndex":A(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":A(t,a,o);break;case"style":$t(t,o,f);break;case"data":if(n!=="object"){A(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=gi(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Wt(t,n,"name",c.name,c,null),Wt(t,n,"formEncType",c.formEncType,c,null),Wt(t,n,"formMethod",c.formMethod,c,null),Wt(t,n,"formTarget",c.formTarget,c,null)):(Wt(t,n,"encType",c.encType,c,null),Wt(t,n,"method",c.method,c,null),Wt(t,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=gi(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Bl);break;case"onScroll":o!=null&&Et("scroll",t);break;case"onScrollEnd":o!=null&&Et("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=gi(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Et("beforetoggle",t),Et("toggle",t),wr(t,"popover",o);break;case"xlinkActuate":Y(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Y(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Y(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Y(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Y(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Y(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Y(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Y(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Y(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":wr(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=kt.get(a)||a,wr(t,a,o))}}function Cf(t,n,a,o,c,f){switch(a){case"style":$t(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?In(t,o):(typeof o=="number"||typeof o=="bigint")&&In(t,""+o);break;case"onScroll":o!=null&&Et("scroll",t);break;case"onScrollEnd":o!=null&&Et("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Bl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ns.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[Qt]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,c);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):wr(t,a,o)}}}function Rn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Et("error",t),Et("load",t);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Wt(t,n,f,x,a,null)}}c&&Wt(t,n,"srcSet",a.srcSet,a,null),o&&Wt(t,n,"src",a.src,a,null);return;case"input":Et("invalid",t);var R=f=x=c=null,F=null,ne=null;for(o in a)if(a.hasOwnProperty(o)){var me=a[o];if(me!=null)switch(o){case"name":c=me;break;case"type":x=me;break;case"checked":F=me;break;case"defaultChecked":ne=me;break;case"value":f=me;break;case"defaultValue":R=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(r(137,n));break;default:Wt(t,n,o,me,a,null)}}Ve(t,f,R,F,ne,x,c,!1),je(t);return;case"select":Et("invalid",t),o=x=f=null;for(c in a)if(a.hasOwnProperty(c)&&(R=a[c],R!=null))switch(c){case"value":f=R;break;case"defaultValue":x=R;break;case"multiple":o=R;default:Wt(t,n,c,R,a,null)}n=f,a=x,t.multiple=!!o,n!=null?_t(t,!!o,n,!1):a!=null&&_t(t,!!o,a,!0);return;case"textarea":Et("invalid",t),f=c=o=null;for(x in a)if(a.hasOwnProperty(x)&&(R=a[x],R!=null))switch(x){case"value":o=R;break;case"defaultValue":c=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Wt(t,n,x,R,a,null)}jn(t,o,c,f),je(t);return;case"option":for(F in a)if(a.hasOwnProperty(F)&&(o=a[F],o!=null))switch(F){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Wt(t,n,F,o,a,null)}return;case"dialog":Et("beforetoggle",t),Et("toggle",t),Et("cancel",t),Et("close",t);break;case"iframe":case"object":Et("load",t);break;case"video":case"audio":for(o=0;o<mo.length;o++)Et(mo[o],t);break;case"image":Et("error",t),Et("load",t);break;case"details":Et("toggle",t);break;case"embed":case"source":case"link":Et("error",t),Et("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in a)if(a.hasOwnProperty(ne)&&(o=a[ne],o!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Wt(t,n,ne,o,a,null)}return;default:if(ai(n)){for(me in a)a.hasOwnProperty(me)&&(o=a[me],o!==void 0&&Cf(t,n,me,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Wt(t,n,R,o,a,null))}function Fx(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,R=null,F=null,ne=null,me=null;for(le in a){var xe=a[le];if(a.hasOwnProperty(le)&&xe!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":F=xe;default:o.hasOwnProperty(le)||Wt(t,n,le,null,o,xe)}}for(var ae in o){var le=o[ae];if(xe=a[ae],o.hasOwnProperty(ae)&&(le!=null||xe!=null))switch(ae){case"type":f=le;break;case"name":c=le;break;case"checked":ne=le;break;case"defaultChecked":me=le;break;case"value":x=le;break;case"defaultValue":R=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:le!==xe&&Wt(t,n,ae,le,o,xe)}}cn(t,x,R,F,ne,me,f,c);return;case"select":le=x=R=ae=null;for(f in a)if(F=a[f],a.hasOwnProperty(f)&&F!=null)switch(f){case"value":break;case"multiple":le=F;default:o.hasOwnProperty(f)||Wt(t,n,f,null,o,F)}for(c in o)if(f=o[c],F=a[c],o.hasOwnProperty(c)&&(f!=null||F!=null))switch(c){case"value":ae=f;break;case"defaultValue":R=f;break;case"multiple":x=f;default:f!==F&&Wt(t,n,c,f,o,F)}n=R,a=x,o=le,ae!=null?_t(t,!!a,ae,!1):!!o!=!!a&&(n!=null?_t(t,!!a,n,!0):_t(t,!!a,a?[]:"",!1));return;case"textarea":le=ae=null;for(R in a)if(c=a[R],a.hasOwnProperty(R)&&c!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Wt(t,n,R,null,o,c)}for(x in o)if(c=o[x],f=a[x],o.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":ae=c;break;case"defaultValue":le=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Wt(t,n,x,c,o,f)}On(t,ae,le);return;case"option":for(var at in a)if(ae=a[at],a.hasOwnProperty(at)&&ae!=null&&!o.hasOwnProperty(at))switch(at){case"selected":t.selected=!1;break;default:Wt(t,n,at,null,o,ae)}for(F in o)if(ae=o[F],le=a[F],o.hasOwnProperty(F)&&ae!==le&&(ae!=null||le!=null))switch(F){case"selected":t.selected=ae&&typeof ae!="function"&&typeof ae!="symbol";break;default:Wt(t,n,F,ae,o,le)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $e in a)ae=a[$e],a.hasOwnProperty($e)&&ae!=null&&!o.hasOwnProperty($e)&&Wt(t,n,$e,null,o,ae);for(ne in o)if(ae=o[ne],le=a[ne],o.hasOwnProperty(ne)&&ae!==le&&(ae!=null||le!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(r(137,n));break;default:Wt(t,n,ne,ae,o,le)}return;default:if(ai(n)){for(var qt in a)ae=a[qt],a.hasOwnProperty(qt)&&ae!==void 0&&!o.hasOwnProperty(qt)&&Cf(t,n,qt,void 0,o,ae);for(me in o)ae=o[me],le=a[me],!o.hasOwnProperty(me)||ae===le||ae===void 0&&le===void 0||Cf(t,n,me,ae,o,le);return}}for(var Z in a)ae=a[Z],a.hasOwnProperty(Z)&&ae!=null&&!o.hasOwnProperty(Z)&&Wt(t,n,Z,null,o,ae);for(xe in o)ae=o[xe],le=a[xe],!o.hasOwnProperty(xe)||ae===le||ae==null&&le==null||Wt(t,n,xe,ae,o,le)}var wf=null,Df=null;function zl(t){return t.nodeType===9?t:t.ownerDocument}function Hg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Uf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Nf=null;function Bx(){var t=window.event;return t&&t.type==="popstate"?t===Nf?!1:(Nf=t,!0):(Nf=null,!1)}var Vg=typeof setTimeout=="function"?setTimeout:void 0,zx=typeof clearTimeout=="function"?clearTimeout:void 0,kg=typeof Promise=="function"?Promise:void 0,Hx=typeof queueMicrotask=="function"?queueMicrotask:typeof kg<"u"?function(t){return kg.resolve(null).then(t).catch(Gx)}:Vg;function Gx(t){setTimeout(function(){throw t})}function Fa(t){return t==="head"}function Xg(t,n){var a=n,o=0,c=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var x=t.ownerDocument;if(a&1&&_o(x.documentElement),a&2&&_o(x.body),a&4)for(a=x.head,_o(a),x=a.firstChild;x;){var R=x.nextSibling,F=x.nodeName;x[Yn]||F==="SCRIPT"||F==="STYLE"||F==="LINK"&&x.rel.toLowerCase()==="stylesheet"||a.removeChild(x),x=R}}if(c===0){t.removeChild(f),To(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);To(n)}function Lf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Lf(a),$a(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Vx(t,n,a,o){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Yn])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=xi(t.nextSibling),t===null)break}return null}function kx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=xi(t.nextSibling),t===null))return null;return t}function Pf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Xx(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function xi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var Of=null;function Wg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function qg(t,n,a){switch(n=zl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function _o(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);$a(t)}var fi=new Map,Yg=new Set;function Hl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ra=B.d;B.d={f:Wx,r:qx,D:Yx,C:jx,L:Zx,m:Kx,X:Jx,S:Qx,M:$x};function Wx(){var t=ra.f(),n=Ul();return t||n}function qx(t){var n=ki(t);n!==null&&n.tag===5&&n.type==="form"?hm(n):ra.r(t)}var rs=typeof document>"u"?null:document;function jg(t,n,a){var o=rs;if(o&&typeof n=="string"&&n){var c=gt(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Yg.has(c)||(Yg.add(c),t={rel:t,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Rn(n,"link",t),tn(n),o.head.appendChild(n)))}}function Yx(t){ra.D(t),jg("dns-prefetch",t,null)}function jx(t,n){ra.C(t,n),jg("preconnect",t,n)}function Zx(t,n,a){ra.L(t,n,a);var o=rs;if(o&&t&&n){var c='link[rel="preload"][as="'+gt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+gt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+gt(a.imageSizes)+'"]')):c+='[href="'+gt(t)+'"]';var f=c;switch(n){case"style":f=ss(t);break;case"script":f=os(t)}fi.has(f)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),fi.set(f,t),o.querySelector(c)!==null||n==="style"&&o.querySelector(vo(f))||n==="script"&&o.querySelector(xo(f))||(n=o.createElement("link"),Rn(n,"link",t),tn(n),o.head.appendChild(n)))}}function Kx(t,n){ra.m(t,n);var a=rs;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+gt(o)+'"][href="'+gt(t)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=os(t)}if(!fi.has(f)&&(t=_({rel:"modulepreload",href:t},n),fi.set(f,t),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(xo(f)))return}o=a.createElement("link"),Rn(o,"link",t),tn(o),a.head.appendChild(o)}}}function Qx(t,n,a){ra.S(t,n,a);var o=rs;if(o&&t){var c=Xi(o).hoistableStyles,f=ss(t);n=n||"default";var x=c.get(f);if(!x){var R={loading:0,preload:null};if(x=o.querySelector(vo(f)))R.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=fi.get(f))&&If(t,a);var F=x=o.createElement("link");tn(F),Rn(F,"link",t),F._p=new Promise(function(ne,me){F.onload=ne,F.onerror=me}),F.addEventListener("load",function(){R.loading|=1}),F.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Gl(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:R},c.set(f,x)}}}function Jx(t,n){ra.X(t,n);var a=rs;if(a&&t){var o=Xi(a).hoistableScripts,c=os(t),f=o.get(c);f||(f=a.querySelector(xo(c)),f||(t=_({src:t,async:!0},n),(n=fi.get(c))&&Ff(t,n),f=a.createElement("script"),tn(f),Rn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function $x(t,n){ra.M(t,n);var a=rs;if(a&&t){var o=Xi(a).hoistableScripts,c=os(t),f=o.get(c);f||(f=a.querySelector(xo(c)),f||(t=_({src:t,async:!0,type:"module"},n),(n=fi.get(c))&&Ff(t,n),f=a.createElement("script"),tn(f),Rn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function Zg(t,n,a,o){var c=(c=te.current)?Hl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ss(a.href),a=Xi(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ss(a.href);var f=Xi(c).hoistableStyles,x=f.get(t);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,x),(f=c.querySelector(vo(t)))&&!f._p&&(x.instance=f,x.state.loading=5),fi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(t,a),f||eS(c,t,a,x.state))),n&&o===null)throw Error(r(528,""));return x}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=os(a),a=Xi(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function ss(t){return'href="'+gt(t)+'"'}function vo(t){return'link[rel="stylesheet"]['+t+"]"}function Kg(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function eS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Rn(n,"link",a),tn(n),t.head.appendChild(n))}function os(t){return'[src="'+gt(t)+'"]'}function xo(t){return"script[async]"+t}function Qg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+gt(a.href)+'"]');if(o)return n.instance=o,tn(o),o;var c=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),tn(o),Rn(o,"style",c),Gl(o,a.precedence,t),n.instance=o;case"stylesheet":c=ss(a.href);var f=t.querySelector(vo(c));if(f)return n.state.loading|=4,n.instance=f,tn(f),f;o=Kg(a),(c=fi.get(c))&&If(o,c),f=(t.ownerDocument||t).createElement("link"),tn(f);var x=f;return x._p=new Promise(function(R,F){x.onload=R,x.onerror=F}),Rn(f,"link",o),n.state.loading|=4,Gl(f,a.precedence,t),n.instance=f;case"script":return f=os(a.src),(c=t.querySelector(xo(f)))?(n.instance=c,tn(c),c):(o=a,(c=fi.get(f))&&(o=_({},a),Ff(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),tn(c),Rn(c,"link",o),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Gl(o,a.precedence,t));return n.instance}function Gl(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,x=0;x<o.length;x++){var R=o[x];if(R.dataset.precedence===n)f=R;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function If(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Ff(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Vl=null;function Jg(t,n,a){if(Vl===null){var o=new Map,c=Vl=new Map;c.set(a,o)}else c=Vl,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Yn]||f[st]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=t+x;var R=o.get(x);R?R.push(f):o.set(x,[f])}}return o}function $g(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function tS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function e0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var So=null;function nS(){}function iS(t,n,a){if(So===null)throw Error(r(475));var o=So;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=ss(a.href),f=t.querySelector(vo(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=kl.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=f,tn(f);return}f=t.ownerDocument||t,a=Kg(a),(c=fi.get(c))&&If(a,c),f=f.createElement("link"),tn(f);var x=f;x._p=new Promise(function(R,F){x.onload=R,x.onerror=F}),Rn(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=kl.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function aS(){if(So===null)throw Error(r(475));var t=So;return t.stylesheets&&t.count===0&&Bf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&Bf(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function kl(){if(this.count--,this.count===0){if(this.stylesheets)Bf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Xl=null;function Bf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Xl=new Map,n.forEach(rS,t),Xl=null,kl.call(t))}function rS(t,n){if(!(n.state.loading&4)){var a=Xl.get(t);if(a)var o=a.get(null);else{a=new Map,Xl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}c=n.instance,x=c.getAttribute("data-precedence"),f=a.get(x)||o,f===o&&a.set(null,c),a.set(x,c),this.count++,o=kl.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var yo={$$typeof:O,Provider:null,Consumer:null,_currentValue:se,_currentValue2:se,_threadCount:0};function sS(t,n,a,o,c,f,x,R){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=xt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xt(0),this.hiddenUpdates=xt(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function t0(t,n,a,o,c,f,x,R,F,ne,me,xe){return t=new sS(t,n,a,x,R,F,ne,xe),n=1,f===!0&&(n|=24),f=Kn(3,null,null,n),t.current=f,f.stateNode=t,n=vu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Mu(f),t}function n0(t){return t?(t=Br,t):Br}function i0(t,n,a,o,c,f){c=n0(c),o.context===null?o.context=c:o.pendingContext=c,o=Ea(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ta(t,o,n),a!==null&&(ti(a,t,n),Ks(a,t,n))}function a0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function zf(t,n){a0(t,n),(t=t.alternate)&&a0(t,n)}function r0(t){if(t.tag===13){var n=Fr(t,67108864);n!==null&&ti(n,t,67108864),zf(t,67108864)}}var Wl=!0;function oS(t,n,a,o){var c=N.T;N.T=null;var f=B.p;try{B.p=2,Hf(t,n,a,o)}finally{B.p=f,N.T=c}}function lS(t,n,a,o){var c=N.T;N.T=null;var f=B.p;try{B.p=8,Hf(t,n,a,o)}finally{B.p=f,N.T=c}}function Hf(t,n,a,o){if(Wl){var c=Gf(o);if(c===null)Rf(t,n,o,ql,a),o0(t,o);else if(uS(c,t,n,a,o))o.stopPropagation();else if(o0(t,o),n&4&&-1<cS.indexOf(t)){for(;c!==null;){var f=ki(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Le(f.pendingLanes);if(x!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;x;){var F=1<<31-ce(x);R.entanglements[1]|=F,x&=~F}Ni(f),(Ht&6)===0&&(wl=ke()+500,po(0))}}break;case 13:R=Fr(f,2),R!==null&&ti(R,f,2),Ul(),zf(f,2)}if(f=Gf(o),f===null&&Rf(t,n,o,ql,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else Rf(t,n,o,null,a)}}function Gf(t){return t=Wc(t),Vf(t)}var ql=null;function Vf(t){if(ql=null,t=Vi(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ql=t,null}function s0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Qe()){case ht:return 2;case V:return 8;case wt:case nt:return 32;case ut:return 268435456;default:return 32}default:return 32}}var kf=!1,Ba=null,za=null,Ha=null,Mo=new Map,bo=new Map,Ga=[],cS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function o0(t,n){switch(t){case"focusin":case"focusout":Ba=null;break;case"dragenter":case"dragleave":za=null;break;case"mouseover":case"mouseout":Ha=null;break;case"pointerover":case"pointerout":Mo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(n.pointerId)}}function Eo(t,n,a,o,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=ki(n),n!==null&&r0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function uS(t,n,a,o,c){switch(n){case"focusin":return Ba=Eo(Ba,t,n,a,o,c),!0;case"dragenter":return za=Eo(za,t,n,a,o,c),!0;case"mouseover":return Ha=Eo(Ha,t,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return Mo.set(f,Eo(Mo.get(f)||null,t,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,bo.set(f,Eo(bo.get(f)||null,t,n,a,o,c)),!0}return!1}function l0(t){var n=Vi(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,ct(t.priority,function(){if(a.tag===13){var o=ei();o=De(o);var c=Fr(a,o);c!==null&&ti(c,a,o),zf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Gf(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Dr=o,a.target.dispatchEvent(o),Dr=null}else return n=ki(a),n!==null&&r0(n),t.blockedOn=a,!1;n.shift()}return!0}function c0(t,n,a){Yl(t)&&a.delete(n)}function fS(){kf=!1,Ba!==null&&Yl(Ba)&&(Ba=null),za!==null&&Yl(za)&&(za=null),Ha!==null&&Yl(Ha)&&(Ha=null),Mo.forEach(c0),bo.forEach(c0)}function jl(t,n){t.blockedOn===n&&(t.blockedOn=null,kf||(kf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,fS)))}var Zl=null;function u0(t){Zl!==t&&(Zl=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Zl===t&&(Zl=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],c=t[n+2];if(typeof o!="function"){if(Vf(o||a)===null)continue;break}var f=ki(a);f!==null&&(t.splice(n,3),n-=3,Gu(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function To(t){function n(F){return jl(F,t)}Ba!==null&&jl(Ba,t),za!==null&&jl(za,t),Ha!==null&&jl(Ha,t),Mo.forEach(n),bo.forEach(n);for(var a=0;a<Ga.length;a++){var o=Ga[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ga.length&&(a=Ga[0],a.blockedOn===null);)l0(a),a.blockedOn===null&&Ga.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],x=c[Qt]||null;if(typeof f=="function")x||u0(a);else if(x){var R=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[Qt]||null)R=x.formAction;else if(Vf(c)!==null)continue}else R=x.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),u0(a)}}}function Xf(t){this._internalRoot=t}Kl.prototype.render=Xf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ei();i0(a,o,t,n,null,null)},Kl.prototype.unmount=Xf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;i0(t.current,2,null,t,null,null),Ul(),n[bn]=null}};function Kl(t){this._internalRoot=t}Kl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ye();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ga.length&&n!==0&&n<Ga[a].priority;a++);Ga.splice(a,0,t),a===0&&l0(t)}};var f0=e.version;if(f0!=="19.1.0")throw Error(r(527,f0,"19.1.0"));B.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?h(t):null,t=t===null?null:t.stateNode,t};var dS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{C=Ql.inject(dS),M=Ql}catch{}}return Ro.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",c=Rm,f=Cm,x=wm,R=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(R=n.unstable_transitionCallbacks)),n=t0(t,1,!1,null,null,a,o,c,f,x,R,null),t[bn]=n.current,Af(t),new Xf(n)},Ro.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,c="",f=Rm,x=Cm,R=wm,F=null,ne=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(F=a.unstable_transitionCallbacks),a.formState!==void 0&&(ne=a.formState)),n=t0(t,1,!0,n,a??null,o,c,f,x,R,F,ne),n.context=n0(null),a=n.current,o=ei(),o=De(o),c=Ea(o),c.callback=null,Ta(a,c,o),a=o,n.current.lanes=a,k(n,a),Ni(n),t[bn]=n.current,Af(t),new Kl(n)},Ro.version="19.1.0",Ro}var y0;function MS(){if(y0)return Yf.exports;y0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Yf.exports=yS(),Yf.exports}var bS=MS();/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),TS=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,r)=>r?r.toUpperCase():i.toLowerCase()),M0=s=>{const e=TS(s);return e.charAt(0).toUpperCase()+e.slice(1)},A_=(...s)=>s.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim(),AS=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var RS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=yt.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:u,iconNode:d,...p},m)=>yt.createElement("svg",{ref:m,...RS,width:e,height:e,stroke:s,strokeWidth:r?Number(i)*24/Number(e):i,className:A_("lucide",l),...!u&&!AS(p)&&{"aria-hidden":"true"},...p},[...d.map(([h,_])=>yt.createElement(h,_)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=(s,e)=>{const i=yt.forwardRef(({className:r,...l},u)=>yt.createElement(CS,{ref:u,iconNode:e,className:A_(`lucide-${ES(M0(s))}`,`lucide-${s}`,r),...l}));return i.displayName=M0(s),i};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],R_=pn("arrow-up-right",wS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]],US=pn("brain",DS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],LS=pn("briefcase",NS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],OS=pn("calendar",PS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],FS=pn("code-xml",IS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],zS=pn("code",BS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],GS=pn("cpu",HS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],b0=pn("database",VS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],C_=pn("external-link",kS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],WS=pn("flask-conical",XS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Ic=pn("github",qS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],Eh=pn("linkedin",YS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Th=pn("mail",jS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],w_=pn("map-pin",ZS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],QS=pn("menu",KS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],$S=pn("palette",JS);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],ty=pn("phone",ey);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],iy=pn("x",ny);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]],ry=pn("wrench",ay);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],oy=pn("zap",sy),Co=[{id:"home",label:"Home"},{id:"experience",label:"Experience"},{id:"projects",label:"Projects"},{id:"skills",label:"Skills"},{id:"contact",label:"Contact"}];function ly({activeSection:s,setActiveSection:e}){const[i,r]=yt.useState(!1),[l,u]=yt.useState(!1);yt.useEffect(()=>{const p=()=>{u(window.scrollY>50);const m=Co.map(g=>{const b=document.getElementById(g.id);if(!b)return{id:g.id,top:0,bottom:0};const E=b.getBoundingClientRect();return{id:g.id,top:E.top+window.scrollY,bottom:E.bottom+window.scrollY}}),h=window.scrollY+120;for(const g of m)if(h>=g.top&&h<g.bottom){s!==g.id&&e(g.id);break}const _=window.innerHeight,y=document.body.scrollHeight;if(window.scrollY+_>=y-50){const g=Co[Co.length-1].id;s!==g&&e(g)}};return window.addEventListener("scroll",p,{passive:!0}),p(),()=>window.removeEventListener("scroll",p)},[s,e]);const d=p=>{var m;e(p),r(!1),(m=document.getElementById(p))==null||m.scrollIntoView({behavior:"smooth"})};return j.jsx("header",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${l?"backdrop-blur-md":""}`,style:{background:l?"hsl(var(--hero-bg) / 0.7)":"transparent",borderBottom:l?"1px solid hsl(var(--border) / 0.6)":"1px solid transparent"},children:j.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-12",children:[j.jsxs("div",{className:"flex justify-between items-center py-5",children:[j.jsxs("a",{href:"#home",onClick:p=>{p.preventDefault(),d("home")},className:"text-xl font-semibold tracking-tight",style:{color:"var(--c-fg)"},children:["ABDULLAH",j.jsx("span",{style:{color:"var(--c-primary)"},children:"."})]}),j.jsx("nav",{className:"hidden md:flex gap-8",children:Co.map(p=>{const m=s===p.id;return j.jsx("button",{onClick:()=>d(p.id),className:"text-xs uppercase tracking-[0.18em] transition-colors cursor-pointer",style:{color:m?"var(--c-fg)":"hsl(var(--muted-foreground))"},onMouseEnter:h=>h.currentTarget.style.color="var(--c-fg)",onMouseLeave:h=>h.currentTarget.style.color=m?"var(--c-fg)":"hsl(var(--muted-foreground))",children:p.label},p.id)})}),j.jsx("a",{href:"/files/Abdullah_resume.docx",download:"Abdullah_resume",target:"_blank",rel:"noreferrer",className:"btn-ghost hidden md:inline-flex",children:"Resume"}),j.jsx("button",{className:"md:hidden p-2 transition-colors",onClick:()=>r(!i),"aria-label":i?"Close menu":"Open menu",style:{color:"var(--c-fg)"},children:i?j.jsx(iy,{size:24}):j.jsx(QS,{size:24})})]}),i&&j.jsx("div",{className:"md:hidden py-4 animate-fade-in",style:{borderTop:"1px solid hsl(var(--border) / 0.5)"},children:j.jsxs("nav",{className:"flex flex-col gap-1",children:[Co.map(p=>{const m=s===p.id;return j.jsx("button",{onClick:()=>d(p.id),className:"px-3 py-3 text-left text-sm uppercase tracking-[0.18em] transition-colors",style:{color:m?"var(--c-fg)":"hsl(var(--muted-foreground))"},children:p.label},p.id)}),j.jsx("a",{href:"/files/Abdullah_resume.docx",download:"Abdullah_resume",target:"_blank",rel:"noreferrer",className:"btn-ghost mt-3 w-fit",children:"Resume"})]})})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ah="184",cy=0,E0=1,uy=2,bc=1,fy=2,Io=3,Qa=0,Wn=1,fa=2,ha=0,Ms=1,Dd=2,T0=3,A0=4,dy=5,yr=100,hy=101,py=102,my=103,gy=104,_y=200,vy=201,xy=202,Sy=203,Ud=204,Nd=205,yy=206,My=207,by=208,Ey=209,Ty=210,Ay=211,Ry=212,Cy=213,wy=214,Ld=0,Pd=1,Od=2,Es=3,Id=4,Fd=5,Bd=6,zd=7,D_=0,Dy=1,Uy=2,Bi=0,U_=1,N_=2,L_=3,P_=4,O_=5,I_=6,F_=7,B_=300,Tr=301,Ts=302,Qf=303,Jf=304,Fc=306,Hd=1e3,da=1001,Gd=1002,Cn=1003,Ny=1004,Jl=1005,Ln=1006,$f=1007,br=1008,pi=1009,z_=1010,H_=1011,Bo=1012,Rh=1013,Hi=1014,Ii=1015,ga=1016,Ch=1017,wh=1018,zo=1020,G_=35902,V_=35899,k_=1021,X_=1022,Ti=1023,_a=1026,Er=1027,W_=1028,Dh=1029,Ar=1030,Uh=1031,Nh=1033,Ec=33776,Tc=33777,Ac=33778,Rc=33779,Vd=35840,kd=35841,Xd=35842,Wd=35843,qd=36196,Yd=37492,jd=37496,Zd=37488,Kd=37489,wc=37490,Qd=37491,Jd=37808,$d=37809,eh=37810,th=37811,nh=37812,ih=37813,ah=37814,rh=37815,sh=37816,oh=37817,lh=37818,ch=37819,uh=37820,fh=37821,dh=36492,hh=36494,ph=36495,mh=36283,gh=36284,Dc=36285,_h=36286,Ly=3200,R0=0,Py=1,Za="",hi="srgb",Uc="srgb-linear",Nc="linear",Vt="srgb",ls=7680,C0=519,Oy=512,Iy=513,Fy=514,Lh=515,By=516,zy=517,Ph=518,Hy=519,w0=35044,D0="300 es",Fi=2e3,Lc=2001;function Gy(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Pc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Vy(){const s=Pc("canvas");return s.style.display="block",s}const U0={};function N0(...s){const e="THREE."+s.shift();console.log(e,...s)}function q_(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=s[1];i&&i.isStackTrace?s[0]+=" "+i.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function rt(...s){s=q_(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...s)}}function Ut(...s){s=q_(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...s)}}function vh(...s){const e=s.join(" ");e in U0||(U0[e]=!0,rt(...s))}function ky(s,e,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const Xy={[Ld]:Pd,[Od]:Bd,[Id]:zd,[Es]:Fd,[Pd]:Ld,[Bd]:Od,[zd]:Id,[Fd]:Es};class Cr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ed=Math.PI/180,xh=180/Math.PI;function Ho(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function Ct(s,e,i){return Math.max(e,Math.min(i,s))}function Wy(s,e){return(s%e+e)%e}function td(s,e,i){return(1-i)*s+i*e}function wo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function kn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Fh=class Fh{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ct(this.x,e.x,i.x),this.y=Ct(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ct(this.x,e,i),this.y=Ct(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ct(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Fh.prototype.isVector2=!0;let Yt=Fh;class Cs{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,p){let m=r[l+0],h=r[l+1],_=r[l+2],y=r[l+3],g=u[d+0],b=u[d+1],E=u[d+2],D=u[d+3];if(y!==D||m!==g||h!==b||_!==E){let S=m*g+h*b+_*E+y*D;S<0&&(g=-g,b=-b,E=-E,D=-D,S=-S);let v=1-p;if(S<.9995){const w=Math.acos(S),O=Math.sin(w);v=Math.sin(v*w)/O,p=Math.sin(p*w)/O,m=m*v+g*p,h=h*v+b*p,_=_*v+E*p,y=y*v+D*p}else{m=m*v+g*p,h=h*v+b*p,_=_*v+E*p,y=y*v+D*p;const w=1/Math.sqrt(m*m+h*h+_*_+y*y);m*=w,h*=w,_*=w,y*=w}}e[i]=m,e[i+1]=h,e[i+2]=_,e[i+3]=y}static multiplyQuaternionsFlat(e,i,r,l,u,d){const p=r[l],m=r[l+1],h=r[l+2],_=r[l+3],y=u[d],g=u[d+1],b=u[d+2],E=u[d+3];return e[i]=p*E+_*y+m*b-h*g,e[i+1]=m*E+_*g+h*y-p*b,e[i+2]=h*E+_*b+p*g-m*y,e[i+3]=_*E-p*y-m*g-h*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,d=e._order,p=Math.cos,m=Math.sin,h=p(r/2),_=p(l/2),y=p(u/2),g=m(r/2),b=m(l/2),E=m(u/2);switch(d){case"XYZ":this._x=g*_*y+h*b*E,this._y=h*b*y-g*_*E,this._z=h*_*E+g*b*y,this._w=h*_*y-g*b*E;break;case"YXZ":this._x=g*_*y+h*b*E,this._y=h*b*y-g*_*E,this._z=h*_*E-g*b*y,this._w=h*_*y+g*b*E;break;case"ZXY":this._x=g*_*y-h*b*E,this._y=h*b*y+g*_*E,this._z=h*_*E+g*b*y,this._w=h*_*y-g*b*E;break;case"ZYX":this._x=g*_*y-h*b*E,this._y=h*b*y+g*_*E,this._z=h*_*E-g*b*y,this._w=h*_*y+g*b*E;break;case"YZX":this._x=g*_*y+h*b*E,this._y=h*b*y+g*_*E,this._z=h*_*E-g*b*y,this._w=h*_*y-g*b*E;break;case"XZY":this._x=g*_*y-h*b*E,this._y=h*b*y-g*_*E,this._z=h*_*E+g*b*y,this._w=h*_*y+g*b*E;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],p=i[5],m=i[9],h=i[2],_=i[6],y=i[10],g=r+p+y;if(g>0){const b=.5/Math.sqrt(g+1);this._w=.25/b,this._x=(_-m)*b,this._y=(u-h)*b,this._z=(d-l)*b}else if(r>p&&r>y){const b=2*Math.sqrt(1+r-p-y);this._w=(_-m)/b,this._x=.25*b,this._y=(l+d)/b,this._z=(u+h)/b}else if(p>y){const b=2*Math.sqrt(1+p-r-y);this._w=(u-h)/b,this._x=(l+d)/b,this._y=.25*b,this._z=(m+_)/b}else{const b=2*Math.sqrt(1+y-r-p);this._w=(d-l)/b,this._x=(u+h)/b,this._y=(m+_)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,p=i._x,m=i._y,h=i._z,_=i._w;return this._x=r*_+d*p+l*h-u*m,this._y=l*_+d*m+u*p-r*h,this._z=u*_+d*h+r*m-l*p,this._w=d*_-r*p-l*m-u*h,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,u=e._z,d=e._w,p=this.dot(e);p<0&&(r=-r,l=-l,u=-u,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),_=Math.sin(h);m=Math.sin(m*h)/_,i=Math.sin(i*h)/_,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Bh=class Bh{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(L0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(L0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,p=e.z,m=e.w,h=2*(d*l-p*r),_=2*(p*i-u*l),y=2*(u*r-d*i);return this.x=i+m*h+d*y-p*_,this.y=r+m*_+p*h-u*y,this.z=l+m*y+u*_-d*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ct(this.x,e.x,i.x),this.y=Ct(this.y,e.y,i.y),this.z=Ct(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ct(this.x,e,i),this.y=Ct(this.y,e,i),this.z=Ct(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-u*p,this.y=u*d-r*m,this.z=r*p-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return nd.copy(this).projectOnVector(e),this.sub(nd)}reflect(e){return this.sub(nd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ct(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Bh.prototype.isVector3=!0;let re=Bh;const nd=new re,L0=new Cs,zh=class zh{constructor(e,i,r,l,u,d,p,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,p,m,h)}set(e,i,r,l,u,d,p,m,h){const _=this.elements;return _[0]=e,_[1]=l,_[2]=p,_[3]=i,_[4]=u,_[5]=m,_[6]=r,_[7]=d,_[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],p=r[3],m=r[6],h=r[1],_=r[4],y=r[7],g=r[2],b=r[5],E=r[8],D=l[0],S=l[3],v=l[6],w=l[1],O=l[4],P=l[7],z=l[2],L=l[5],G=l[8];return u[0]=d*D+p*w+m*z,u[3]=d*S+p*O+m*L,u[6]=d*v+p*P+m*G,u[1]=h*D+_*w+y*z,u[4]=h*S+_*O+y*L,u[7]=h*v+_*P+y*G,u[2]=g*D+b*w+E*z,u[5]=g*S+b*O+E*L,u[8]=g*v+b*P+E*G,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],p=e[5],m=e[6],h=e[7],_=e[8];return i*d*_-i*p*h-r*u*_+r*p*m+l*u*h-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],p=e[5],m=e[6],h=e[7],_=e[8],y=_*d-p*h,g=p*m-_*u,b=h*u-d*m,E=i*y+r*g+l*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/E;return e[0]=y*D,e[1]=(l*h-_*r)*D,e[2]=(p*r-l*d)*D,e[3]=g*D,e[4]=(_*i-l*m)*D,e[5]=(l*u-p*i)*D,e[6]=b*D,e[7]=(r*m-h*i)*D,e[8]=(d*i-r*u)*D,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,p){const m=Math.cos(u),h=Math.sin(u);return this.set(r*m,r*h,-r*(m*d+h*p)+d+e,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(e,i){return this.premultiply(id.makeScale(e,i)),this}rotate(e){return this.premultiply(id.makeRotation(-e)),this}translate(e,i){return this.premultiply(id.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};zh.prototype.isMatrix3=!0;let ft=zh;const id=new ft,P0=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),O0=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qy(){const s={enabled:!0,workingColorSpace:Uc,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Vt&&(l.r=pa(l.r),l.g=pa(l.g),l.b=pa(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Vt&&(l.r=bs(l.r),l.g=bs(l.g),l.b=bs(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Za?Nc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return vh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return vh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Uc]:{primaries:e,whitePoint:r,transfer:Nc,toXYZ:P0,fromXYZ:O0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:e,whitePoint:r,transfer:Vt,toXYZ:P0,fromXYZ:O0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),s}const Rt=qy();function pa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function bs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let cs;class Yy{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{cs===void 0&&(cs=Pc("canvas")),cs.width=e.width,cs.height=e.height;const l=cs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=cs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Pc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=pa(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(pa(i[r]/255)*255):i[r]=pa(i[r]);return{data:i,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jy=0;class Oh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=Ho(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?u.push(ad(l[d].image)):u.push(ad(l[d]))}else u=ad(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function ad(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Yy.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let Zy=0;const rd=new re;class Pn extends Cr{constructor(e=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,r=da,l=da,u=Ln,d=br,p=Ti,m=pi,h=Pn.DEFAULT_ANISOTROPY,_=Za){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zy++}),this.uuid=Ho(),this.name="",this.source=new Oh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(rd).x}get height(){return this.source.getSize(rd).y}get depth(){return this.source.getSize(rd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){rt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){rt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==B_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hd:e.x=e.x-Math.floor(e.x);break;case da:e.x=e.x<0?0:1;break;case Gd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hd:e.y=e.y-Math.floor(e.y);break;case da:e.y=e.y<0?0:1;break;case Gd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=B_;Pn.DEFAULT_ANISOTROPY=1;const Hh=class Hh{constructor(e=0,i=0,r=0,l=1){this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,h=m[0],_=m[4],y=m[8],g=m[1],b=m[5],E=m[9],D=m[2],S=m[6],v=m[10];if(Math.abs(_-g)<.01&&Math.abs(y-D)<.01&&Math.abs(E-S)<.01){if(Math.abs(_+g)<.1&&Math.abs(y+D)<.1&&Math.abs(E+S)<.1&&Math.abs(h+b+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(h+1)/2,P=(b+1)/2,z=(v+1)/2,L=(_+g)/4,G=(y+D)/4,T=(E+S)/4;return O>P&&O>z?O<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(O),l=L/r,u=G/r):P>z?P<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(P),r=L/l,u=T/l):z<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(z),r=G/u,l=T/u),this.set(r,l,u,i),this}let w=Math.sqrt((S-E)*(S-E)+(y-D)*(y-D)+(g-_)*(g-_));return Math.abs(w)<.001&&(w=1),this.x=(S-E)/w,this.y=(y-D)/w,this.z=(g-_)/w,this.w=Math.acos((h+b+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ct(this.x,e.x,i.x),this.y=Ct(this.y,e.y,i.y),this.z=Ct(this.z,e.z,i.z),this.w=Ct(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ct(this.x,e,i),this.y=Ct(this.y,e,i),this.z=Ct(this.z,e,i),this.w=Ct(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Hh.prototype.isVector4=!0;let ln=Hh;class Ky extends Cr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new ln(0,0,e,i),this.scissorTest=!1,this.viewport=new ln(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},u=new Pn(l),d=r.count;for(let p=0;p<d;p++)this.textures[p]=u.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Oh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends Ky{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Y_ extends Pn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qy extends Pn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Oc=class Oc{constructor(e,i,r,l,u,d,p,m,h,_,y,g,b,E,D,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,p,m,h,_,y,g,b,E,D,S)}set(e,i,r,l,u,d,p,m,h,_,y,g,b,E,D,S){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=l,v[1]=u,v[5]=d,v[9]=p,v[13]=m,v[2]=h,v[6]=_,v[10]=y,v[14]=g,v[3]=b,v[7]=E,v[11]=D,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oc().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/us.setFromMatrixColumn(e,0).length(),u=1/us.setFromMatrixColumn(e,1).length(),d=1/us.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),p=Math.sin(r),m=Math.cos(l),h=Math.sin(l),_=Math.cos(u),y=Math.sin(u);if(e.order==="XYZ"){const g=d*_,b=d*y,E=p*_,D=p*y;i[0]=m*_,i[4]=-m*y,i[8]=h,i[1]=b+E*h,i[5]=g-D*h,i[9]=-p*m,i[2]=D-g*h,i[6]=E+b*h,i[10]=d*m}else if(e.order==="YXZ"){const g=m*_,b=m*y,E=h*_,D=h*y;i[0]=g+D*p,i[4]=E*p-b,i[8]=d*h,i[1]=d*y,i[5]=d*_,i[9]=-p,i[2]=b*p-E,i[6]=D+g*p,i[10]=d*m}else if(e.order==="ZXY"){const g=m*_,b=m*y,E=h*_,D=h*y;i[0]=g-D*p,i[4]=-d*y,i[8]=E+b*p,i[1]=b+E*p,i[5]=d*_,i[9]=D-g*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(e.order==="ZYX"){const g=d*_,b=d*y,E=p*_,D=p*y;i[0]=m*_,i[4]=E*h-b,i[8]=g*h+D,i[1]=m*y,i[5]=D*h+g,i[9]=b*h-E,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(e.order==="YZX"){const g=d*m,b=d*h,E=p*m,D=p*h;i[0]=m*_,i[4]=D-g*y,i[8]=E*y+b,i[1]=y,i[5]=d*_,i[9]=-p*_,i[2]=-h*_,i[6]=b*y+E,i[10]=g-D*y}else if(e.order==="XZY"){const g=d*m,b=d*h,E=p*m,D=p*h;i[0]=m*_,i[4]=-y,i[8]=h*_,i[1]=g*y+D,i[5]=d*_,i[9]=b*y-E,i[2]=E*y-b,i[6]=p*_,i[10]=D*y+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jy,e,$y)}lookAt(e,i,r){const l=this.elements;return ni.subVectors(e,i),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),ka.crossVectors(r,ni),ka.lengthSq()===0&&(Math.abs(r.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),ka.crossVectors(r,ni)),ka.normalize(),$l.crossVectors(ni,ka),l[0]=ka.x,l[4]=$l.x,l[8]=ni.x,l[1]=ka.y,l[5]=$l.y,l[9]=ni.y,l[2]=ka.z,l[6]=$l.z,l[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],p=r[4],m=r[8],h=r[12],_=r[1],y=r[5],g=r[9],b=r[13],E=r[2],D=r[6],S=r[10],v=r[14],w=r[3],O=r[7],P=r[11],z=r[15],L=l[0],G=l[4],T=l[8],I=l[12],Q=l[1],H=l[5],J=l[9],de=l[13],he=l[2],q=l[6],N=l[10],B=l[14],se=l[3],ge=l[7],U=l[11],K=l[15];return u[0]=d*L+p*Q+m*he+h*se,u[4]=d*G+p*H+m*q+h*ge,u[8]=d*T+p*J+m*N+h*U,u[12]=d*I+p*de+m*B+h*K,u[1]=_*L+y*Q+g*he+b*se,u[5]=_*G+y*H+g*q+b*ge,u[9]=_*T+y*J+g*N+b*U,u[13]=_*I+y*de+g*B+b*K,u[2]=E*L+D*Q+S*he+v*se,u[6]=E*G+D*H+S*q+v*ge,u[10]=E*T+D*J+S*N+v*U,u[14]=E*I+D*de+S*B+v*K,u[3]=w*L+O*Q+P*he+z*se,u[7]=w*G+O*H+P*q+z*ge,u[11]=w*T+O*J+P*N+z*U,u[15]=w*I+O*de+P*B+z*K,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],p=e[5],m=e[9],h=e[13],_=e[2],y=e[6],g=e[10],b=e[14],E=e[3],D=e[7],S=e[11],v=e[15],w=m*b-h*g,O=p*b-h*y,P=p*g-m*y,z=d*b-h*_,L=d*g-m*_,G=d*y-p*_;return i*(D*w-S*O+v*P)-r*(E*w-S*z+v*L)+l*(E*O-D*z+v*G)-u*(E*P-D*L+S*G)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],p=e[5],m=e[6],h=e[7],_=e[8],y=e[9],g=e[10],b=e[11],E=e[12],D=e[13],S=e[14],v=e[15],w=i*p-r*d,O=i*m-l*d,P=i*h-u*d,z=r*m-l*p,L=r*h-u*p,G=l*h-u*m,T=_*D-y*E,I=_*S-g*E,Q=_*v-b*E,H=y*S-g*D,J=y*v-b*D,de=g*v-b*S,he=w*de-O*J+P*H+z*Q-L*I+G*T;if(he===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/he;return e[0]=(p*de-m*J+h*H)*q,e[1]=(l*J-r*de-u*H)*q,e[2]=(D*G-S*L+v*z)*q,e[3]=(g*L-y*G-b*z)*q,e[4]=(m*Q-d*de-h*I)*q,e[5]=(i*de-l*Q+u*I)*q,e[6]=(S*P-E*G-v*O)*q,e[7]=(_*G-g*P+b*O)*q,e[8]=(d*J-p*Q+h*T)*q,e[9]=(r*Q-i*J-u*T)*q,e[10]=(E*L-D*P+v*w)*q,e[11]=(y*P-_*L-b*w)*q,e[12]=(p*I-d*H-m*T)*q,e[13]=(i*H-r*I+l*T)*q,e[14]=(D*O-E*z-S*w)*q,e[15]=(_*z-y*O+g*w)*q,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,p=e.y,m=e.z,h=u*d,_=u*p;return this.set(h*d+r,h*p-l*m,h*m+l*p,0,h*p+l*m,_*p+r,_*m-l*d,0,h*m-l*p,_*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,p=i._z,m=i._w,h=u+u,_=d+d,y=p+p,g=u*h,b=u*_,E=u*y,D=d*_,S=d*y,v=p*y,w=m*h,O=m*_,P=m*y,z=r.x,L=r.y,G=r.z;return l[0]=(1-(D+v))*z,l[1]=(b+P)*z,l[2]=(E-O)*z,l[3]=0,l[4]=(b-P)*L,l[5]=(1-(g+v))*L,l[6]=(S+w)*L,l[7]=0,l[8]=(E+O)*G,l[9]=(S-w)*G,l[10]=(1-(g+D))*G,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const u=this.determinant();if(u===0)return r.set(1,1,1),i.identity(),this;let d=us.set(l[0],l[1],l[2]).length();const p=us.set(l[4],l[5],l[6]).length(),m=us.set(l[8],l[9],l[10]).length();u<0&&(d=-d),Si.copy(this);const h=1/d,_=1/p,y=1/m;return Si.elements[0]*=h,Si.elements[1]*=h,Si.elements[2]*=h,Si.elements[4]*=_,Si.elements[5]*=_,Si.elements[6]*=_,Si.elements[8]*=y,Si.elements[9]*=y,Si.elements[10]*=y,i.setFromRotationMatrix(Si),r.x=d,r.y=p,r.z=m,this}makePerspective(e,i,r,l,u,d,p=Fi,m=!1){const h=this.elements,_=2*u/(i-e),y=2*u/(r-l),g=(i+e)/(i-e),b=(r+l)/(r-l);let E,D;if(m)E=u/(d-u),D=d*u/(d-u);else if(p===Fi)E=-(d+u)/(d-u),D=-2*d*u/(d-u);else if(p===Lc)E=-d/(d-u),D=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=_,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=y,h[9]=b,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=D,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,r,l,u,d,p=Fi,m=!1){const h=this.elements,_=2/(i-e),y=2/(r-l),g=-(i+e)/(i-e),b=-(r+l)/(r-l);let E,D;if(m)E=1/(d-u),D=d/(d-u);else if(p===Fi)E=-2/(d-u),D=-(d+u)/(d-u);else if(p===Lc)E=-1/(d-u),D=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=_,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=y,h[9]=0,h[13]=b,h[2]=0,h[6]=0,h[10]=E,h[14]=D,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};Oc.prototype.isMatrix4=!0;let hn=Oc;const us=new re,Si=new hn,Jy=new re(0,0,0),$y=new re(1,1,1),ka=new re,$l=new re,ni=new re,I0=new hn,F0=new Cs;class Rr{constructor(e=0,i=0,r=0,l=Rr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],p=l[8],m=l[1],h=l[5],_=l[9],y=l[2],g=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(Ct(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,b),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(p,b),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-y,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-y,b),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Ct(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(g,b),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(Ct(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,h),this._y=Math.atan2(-y,u)):(this._x=0,this._y=Math.atan2(p,b));break;case"XZY":this._z=Math.asin(-Ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,u)):(this._x=Math.atan2(-_,b),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return I0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(I0,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return F0.setFromEuler(this),this.setFromQuaternion(F0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rr.DEFAULT_ORDER="XYZ";class j_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let eM=0;const B0=new re,fs=new Cs,sa=new hn,ec=new re,Do=new re,tM=new re,nM=new Cs,z0=new re(1,0,0),H0=new re(0,1,0),G0=new re(0,0,1),V0={type:"added"},iM={type:"removed"},ds={type:"childadded",child:null},sd={type:"childremoved",child:null};class qn extends Cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=Ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const e=new re,i=new Rr,r=new Cs,l=new re(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new hn},normalMatrix:{value:new ft}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new j_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return fs.setFromAxisAngle(e,i),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,i){return fs.setFromAxisAngle(e,i),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(z0,e)}rotateY(e){return this.rotateOnAxis(H0,e)}rotateZ(e){return this.rotateOnAxis(G0,e)}translateOnAxis(e,i){return B0.copy(e).applyQuaternion(this.quaternion),this.position.add(B0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(z0,e)}translateY(e){return this.translateOnAxis(H0,e)}translateZ(e){return this.translateOnAxis(G0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?ec.copy(e):ec.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sa.lookAt(Do,ec,this.up):sa.lookAt(ec,Do,this.up),this.quaternion.setFromRotationMatrix(sa),l&&(sa.extractRotation(l.matrixWorld),fs.setFromRotationMatrix(sa),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(V0),ds.child=e,this.dispatchEvent(ds),ds.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(iM),sd.child=e,this.dispatchEvent(sd),sd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sa.multiply(e.parent.matrixWorld)),e.applyMatrix4(sa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(V0),ds.child=e,this.dispatchEvent(ds),ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,e,tM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,nM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*r-u[8]*l,u[13]+=r-u[1]*i-u[5]*r-u[9]*l,u[14]+=l-u[2]*i-u[6]*r-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,_=m.length;h<_;h++){const y=m[h];u(e.shapes,y)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(u(e.materials,this.material[m]));l.material=p}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(u(e.animations,m))}}if(i){const p=d(e.geometries),m=d(e.materials),h=d(e.textures),_=d(e.images),y=d(e.shapes),g=d(e.skeletons),b=d(e.animations),E=d(e.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),_.length>0&&(r.images=_),y.length>0&&(r.shapes=y),g.length>0&&(r.skeletons=g),b.length>0&&(r.animations=b),E.length>0&&(r.nodes=E)}return r.object=l,r;function d(p){const m=[];for(const h in p){const _=p[h];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}qn.DEFAULT_UP=new re(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class tc extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const aM={type:"move"};class od{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const D of e.hand.values()){const S=i.getJointPose(D,r),v=this._getHandJoint(h,D);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const _=h.joints["index-finger-tip"],y=h.joints["thumb-tip"],g=_.position.distanceTo(y.position),b=.02,E=.005;h.inputState.pinching&&g>b+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=b-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(aM)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=u!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new tc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const Z_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xa={h:0,s:0,l:0},nc={h:0,s:0,l:0};function ld(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Lt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Rt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Rt.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Rt.workingColorSpace){if(e=Wy(e,1),i=Ct(i,0,1),r=Ct(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=ld(d,u,e+1/3),this.g=ld(d,u,e),this.b=ld(d,u,e-1/3)}return Rt.colorSpaceToWorking(this,l),this}setStyle(e,i=hi){function r(u){u!==void 0&&parseFloat(u)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:rt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=hi){const r=Z_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pa(e.r),this.g=pa(e.g),this.b=pa(e.b),this}copyLinearToSRGB(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return Rt.workingToColorSpace(Nn.copy(this),e),Math.round(Ct(Nn.r*255,0,255))*65536+Math.round(Ct(Nn.g*255,0,255))*256+Math.round(Ct(Nn.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Rt.workingColorSpace){Rt.workingToColorSpace(Nn.copy(this),i);const r=Nn.r,l=Nn.g,u=Nn.b,d=Math.max(r,l,u),p=Math.min(r,l,u);let m,h;const _=(p+d)/2;if(p===d)m=0,h=0;else{const y=d-p;switch(h=_<=.5?y/(d+p):y/(2-d-p),d){case r:m=(l-u)/y+(l<u?6:0);break;case l:m=(u-r)/y+2;break;case u:m=(r-l)/y+4;break}m/=6}return e.h=m,e.s=h,e.l=_,e}getRGB(e,i=Rt.workingColorSpace){return Rt.workingToColorSpace(Nn.copy(this),i),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=hi){Rt.workingToColorSpace(Nn.copy(this),e);const i=Nn.r,r=Nn.g,l=Nn.b;return e!==hi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Xa),this.setHSL(Xa.h+e,Xa.s+i,Xa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Xa),e.getHSL(nc);const r=td(Xa.h,nc.h,i),l=td(Xa.s,nc.s,i),u=td(Xa.l,nc.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new Lt;Lt.NAMES=Z_;class rM extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rr,this.environmentIntensity=1,this.environmentRotation=new Rr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const yi=new re,oa=new re,cd=new re,la=new re,hs=new re,ps=new re,k0=new re,ud=new re,fd=new re,dd=new re,hd=new ln,pd=new ln,md=new ln;class Ei{constructor(e=new re,i=new re,r=new re){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),yi.subVectors(e,i),l.cross(yi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){yi.subVectors(l,i),oa.subVectors(r,i),cd.subVectors(e,i);const d=yi.dot(yi),p=yi.dot(oa),m=yi.dot(cd),h=oa.dot(oa),_=oa.dot(cd),y=d*h-p*p;if(y===0)return u.set(0,0,0),null;const g=1/y,b=(h*m-p*_)*g,E=(d*_-p*m)*g;return u.set(1-b-E,E,b)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,la)===null?!1:la.x>=0&&la.y>=0&&la.x+la.y<=1}static getInterpolation(e,i,r,l,u,d,p,m){return this.getBarycoord(e,i,r,l,la)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,la.x),m.addScaledVector(d,la.y),m.addScaledVector(p,la.z),m)}static getInterpolatedAttribute(e,i,r,l,u,d){return hd.setScalar(0),pd.setScalar(0),md.setScalar(0),hd.fromBufferAttribute(e,i),pd.fromBufferAttribute(e,r),md.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(hd,u.x),d.addScaledVector(pd,u.y),d.addScaledVector(md,u.z),d}static isFrontFacing(e,i,r,l){return yi.subVectors(r,i),oa.subVectors(e,i),yi.cross(oa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),oa.subVectors(this.a,this.b),yi.cross(oa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ei.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return Ei.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,p;hs.subVectors(l,r),ps.subVectors(u,r),ud.subVectors(e,r);const m=hs.dot(ud),h=ps.dot(ud);if(m<=0&&h<=0)return i.copy(r);fd.subVectors(e,l);const _=hs.dot(fd),y=ps.dot(fd);if(_>=0&&y<=_)return i.copy(l);const g=m*y-_*h;if(g<=0&&m>=0&&_<=0)return d=m/(m-_),i.copy(r).addScaledVector(hs,d);dd.subVectors(e,u);const b=hs.dot(dd),E=ps.dot(dd);if(E>=0&&b<=E)return i.copy(u);const D=b*h-m*E;if(D<=0&&h>=0&&E<=0)return p=h/(h-E),i.copy(r).addScaledVector(ps,p);const S=_*E-b*y;if(S<=0&&y-_>=0&&b-E>=0)return k0.subVectors(u,l),p=(y-_)/(y-_+(b-E)),i.copy(l).addScaledVector(k0,p);const v=1/(S+D+g);return d=D*v,p=g*v,i.copy(r).addScaledVector(hs,d).addScaledVector(ps,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Go{constructor(e=new re(1/0,1/0,1/0),i=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Mi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Mi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Mi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,p=u.count;d<p;d++)e.isMesh===!0?e.getVertexPosition(d,Mi):Mi.fromBufferAttribute(u,d),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ic.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ic.copy(r.boundingBox)),ic.applyMatrix4(e.matrixWorld),this.union(ic)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Uo),ac.subVectors(this.max,Uo),ms.subVectors(e.a,Uo),gs.subVectors(e.b,Uo),_s.subVectors(e.c,Uo),Wa.subVectors(gs,ms),qa.subVectors(_s,gs),gr.subVectors(ms,_s);let i=[0,-Wa.z,Wa.y,0,-qa.z,qa.y,0,-gr.z,gr.y,Wa.z,0,-Wa.x,qa.z,0,-qa.x,gr.z,0,-gr.x,-Wa.y,Wa.x,0,-qa.y,qa.x,0,-gr.y,gr.x,0];return!gd(i,ms,gs,_s,ac)||(i=[1,0,0,0,1,0,0,0,1],!gd(i,ms,gs,_s,ac))?!1:(rc.crossVectors(Wa,qa),i=[rc.x,rc.y,rc.z],gd(i,ms,gs,_s,ac))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ca),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ca=[new re,new re,new re,new re,new re,new re,new re,new re],Mi=new re,ic=new Go,ms=new re,gs=new re,_s=new re,Wa=new re,qa=new re,gr=new re,Uo=new re,ac=new re,rc=new re,_r=new re;function gd(s,e,i,r,l){for(let u=0,d=s.length-3;u<=d;u+=3){_r.fromArray(s,u);const p=l.x*Math.abs(_r.x)+l.y*Math.abs(_r.y)+l.z*Math.abs(_r.z),m=e.dot(_r),h=i.dot(_r),_=r.dot(_r);if(Math.max(-Math.max(m,h,_),Math.min(m,h,_))>p)return!1}return!0}const dn=new re,sc=new Yt;let sM=0;class Xn extends Cr{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=w0,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)sc.fromBufferAttribute(this,i),sc.applyMatrix3(e),this.setXY(i,sc.x,sc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=wo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=kn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=wo(i,this.array)),i}setX(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=wo(i,this.array)),i}setY(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=wo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=wo(i,this.array)),i}setW(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array),l=kn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array),l=kn(l,this.array),u=kn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==w0&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class K_ extends Xn{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Q_ extends Xn{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class ma extends Xn{constructor(e,i,r){super(new Float32Array(e),i,r)}}const oM=new Go,No=new re,_d=new re;class Bc{constructor(e=new re,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):oM.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;No.subVectors(e,this.center);const i=No.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(No,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_d.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(No.copy(e.center).add(_d)),this.expandByPoint(No.copy(e.center).sub(_d))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let lM=0;const di=new hn,vd=new qn,vs=new re,ii=new Go,Lo=new Go,Mn=new re;class mi extends Cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=Ho(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gy(e)?Q_:K_)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ft().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,i,r){return di.makeTranslation(e,i,r),this.applyMatrix4(di),this}scale(e,i,r){return di.makeScale(e,i,r),this.applyMatrix4(di),this}lookAt(e){return vd.lookAt(e),vd.updateMatrix(),this.applyMatrix4(vd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new ma(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Go);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ii.setFromBufferAttribute(u),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(e){const r=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const p=i[u];Lo.setFromBufferAttribute(p),this.morphTargetsRelative?(Mn.addVectors(ii.min,Lo.min),ii.expandByPoint(Mn),Mn.addVectors(ii.max,Lo.max),ii.expandByPoint(Mn)):(ii.expandByPoint(Lo.min),ii.expandByPoint(Lo.max))}ii.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)Mn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(Mn));if(i)for(let u=0,d=i.length;u<d;u++){const p=i[u],m=this.morphTargetsRelative;for(let h=0,_=p.count;h<_;h++)Mn.fromBufferAttribute(p,h),m&&(vs.fromBufferAttribute(e,h),Mn.add(vs)),l=Math.max(l,r.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xn(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),p=[],m=[];for(let T=0;T<r.count;T++)p[T]=new re,m[T]=new re;const h=new re,_=new re,y=new re,g=new Yt,b=new Yt,E=new Yt,D=new re,S=new re;function v(T,I,Q){h.fromBufferAttribute(r,T),_.fromBufferAttribute(r,I),y.fromBufferAttribute(r,Q),g.fromBufferAttribute(u,T),b.fromBufferAttribute(u,I),E.fromBufferAttribute(u,Q),_.sub(h),y.sub(h),b.sub(g),E.sub(g);const H=1/(b.x*E.y-E.x*b.y);isFinite(H)&&(D.copy(_).multiplyScalar(E.y).addScaledVector(y,-b.y).multiplyScalar(H),S.copy(y).multiplyScalar(b.x).addScaledVector(_,-E.x).multiplyScalar(H),p[T].add(D),p[I].add(D),p[Q].add(D),m[T].add(S),m[I].add(S),m[Q].add(S))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let T=0,I=w.length;T<I;++T){const Q=w[T],H=Q.start,J=Q.count;for(let de=H,he=H+J;de<he;de+=3)v(e.getX(de+0),e.getX(de+1),e.getX(de+2))}const O=new re,P=new re,z=new re,L=new re;function G(T){z.fromBufferAttribute(l,T),L.copy(z);const I=p[T];O.copy(I),O.sub(z.multiplyScalar(z.dot(I))).normalize(),P.crossVectors(L,I);const H=P.dot(m[T])<0?-1:1;d.setXYZW(T,O.x,O.y,O.z,H)}for(let T=0,I=w.length;T<I;++T){const Q=w[T],H=Q.start,J=Q.count;for(let de=H,he=H+J;de<he;de+=3)G(e.getX(de+0)),G(e.getX(de+1)),G(e.getX(de+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Xn(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let g=0,b=r.count;g<b;g++)r.setXYZ(g,0,0,0);const l=new re,u=new re,d=new re,p=new re,m=new re,h=new re,_=new re,y=new re;if(e)for(let g=0,b=e.count;g<b;g+=3){const E=e.getX(g+0),D=e.getX(g+1),S=e.getX(g+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,D),d.fromBufferAttribute(i,S),_.subVectors(d,u),y.subVectors(l,u),_.cross(y),p.fromBufferAttribute(r,E),m.fromBufferAttribute(r,D),h.fromBufferAttribute(r,S),p.add(_),m.add(_),h.add(_),r.setXYZ(E,p.x,p.y,p.z),r.setXYZ(D,m.x,m.y,m.z),r.setXYZ(S,h.x,h.y,h.z)}else for(let g=0,b=i.count;g<b;g+=3)l.fromBufferAttribute(i,g+0),u.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),_.subVectors(d,u),y.subVectors(l,u),_.cross(y),r.setXYZ(g+0,_.x,_.y,_.z),r.setXYZ(g+1,_.x,_.y,_.z),r.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Mn.fromBufferAttribute(e,i),Mn.normalize(),e.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(p,m){const h=p.array,_=p.itemSize,y=p.normalized,g=new h.constructor(m.length*_);let b=0,E=0;for(let D=0,S=m.length;D<S;D++){p.isInterleavedBufferAttribute?b=m[D]*p.data.stride+p.offset:b=m[D]*_;for(let v=0;v<_;v++)g[E++]=h[b++]}return new Xn(g,_,y)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new mi,r=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,r);i.setAttribute(p,h)}const u=this.morphAttributes;for(const p in u){const m=[],h=u[p];for(let _=0,y=h.length;_<y;_++){const g=h[_],b=e(g,r);m.push(b)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const h=r[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],_=[];for(let y=0,g=h.length;y<g;y++){const b=h[y];_.push(b.toJSON(e.data))}_.length>0&&(l[m]=_,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const h in l){const _=l[h];this.setAttribute(h,_.clone(i))}const u=e.morphAttributes;for(const h in u){const _=[],y=u[h];for(let g=0,b=y.length;g<b;g++)_.push(y[g].clone(i));this.morphAttributes[h]=_}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,_=d.length;h<_;h++){const y=d[h];this.addGroup(y.start,y.count,y.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let cM=0;class Vo extends Cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=Ho(),this.name="",this.type="Material",this.blending=Ms,this.side=Qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ud,this.blendDst=Nd,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=C0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){rt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){rt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(r.blending=this.blending),this.side!==Qa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ud&&(r.blendSrc=this.blendSrc),this.blendDst!==Nd&&(r.blendDst=this.blendDst),this.blendEquation!==yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==C0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const p in u){const m=u[p];delete m.metadata,d.push(m)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ua=new re,xd=new re,oc=new re,Ya=new re,Sd=new re,lc=new re,yd=new re;class J_{constructor(e=new re,i=new re(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ua)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ua.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ua.copy(this.origin).addScaledVector(this.direction,i),ua.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){xd.copy(e).add(i).multiplyScalar(.5),oc.copy(i).sub(e).normalize(),Ya.copy(this.origin).sub(xd);const u=e.distanceTo(i)*.5,d=-this.direction.dot(oc),p=Ya.dot(this.direction),m=-Ya.dot(oc),h=Ya.lengthSq(),_=Math.abs(1-d*d);let y,g,b,E;if(_>0)if(y=d*m-p,g=d*p-m,E=u*_,y>=0)if(g>=-E)if(g<=E){const D=1/_;y*=D,g*=D,b=y*(y+d*g+2*p)+g*(d*y+g+2*m)+h}else g=u,y=Math.max(0,-(d*g+p)),b=-y*y+g*(g+2*m)+h;else g=-u,y=Math.max(0,-(d*g+p)),b=-y*y+g*(g+2*m)+h;else g<=-E?(y=Math.max(0,-(-d*u+p)),g=y>0?-u:Math.min(Math.max(-u,-m),u),b=-y*y+g*(g+2*m)+h):g<=E?(y=0,g=Math.min(Math.max(-u,-m),u),b=g*(g+2*m)+h):(y=Math.max(0,-(d*u+p)),g=y>0?u:Math.min(Math.max(-u,-m),u),b=-y*y+g*(g+2*m)+h);else g=d>0?-u:u,y=Math.max(0,-(d*g+p)),b=-y*y+g*(g+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,y),l&&l.copy(xd).addScaledVector(oc,g),b}intersectSphere(e,i){ua.subVectors(e.center,this.origin);const r=ua.dot(this.direction),l=ua.dot(ua)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),p=r-d,m=r+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,p,m;const h=1/this.direction.x,_=1/this.direction.y,y=1/this.direction.z,g=this.origin;return h>=0?(r=(e.min.x-g.x)*h,l=(e.max.x-g.x)*h):(r=(e.max.x-g.x)*h,l=(e.min.x-g.x)*h),_>=0?(u=(e.min.y-g.y)*_,d=(e.max.y-g.y)*_):(u=(e.max.y-g.y)*_,d=(e.min.y-g.y)*_),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),y>=0?(p=(e.min.z-g.z)*y,m=(e.max.z-g.z)*y):(p=(e.max.z-g.z)*y,m=(e.min.z-g.z)*y),r>m||p>l)||((p>r||r!==r)&&(r=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ua)!==null}intersectTriangle(e,i,r,l,u){Sd.subVectors(i,e),lc.subVectors(r,e),yd.crossVectors(Sd,lc);let d=this.direction.dot(yd),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;Ya.subVectors(this.origin,e);const m=p*this.direction.dot(lc.crossVectors(Ya,lc));if(m<0)return null;const h=p*this.direction.dot(Sd.cross(Ya));if(h<0||m+h>d)return null;const _=-p*Ya.dot(yd);return _<0?null:this.at(_/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $_ extends Vo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rr,this.combine=D_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const X0=new hn,vr=new J_,cc=new Bc,W0=new re,uc=new re,fc=new re,dc=new re,Md=new re,hc=new re,q0=new re,pc=new re;class va extends qn{constructor(e=new mi,i=new $_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const p=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(u&&p){hc.set(0,0,0);for(let m=0,h=u.length;m<h;m++){const _=p[m],y=u[m];_!==0&&(Md.fromBufferAttribute(y,e),d?hc.addScaledVector(Md,_):hc.addScaledVector(Md.sub(i),_))}i.add(hc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),cc.copy(r.boundingSphere),cc.applyMatrix4(u),vr.copy(e.ray).recast(e.near),!(cc.containsPoint(vr.origin)===!1&&(vr.intersectSphere(cc,W0)===null||vr.origin.distanceToSquared(W0)>(e.far-e.near)**2))&&(X0.copy(u).invert(),vr.copy(e.ray).applyMatrix4(X0),!(r.boundingBox!==null&&vr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,vr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,p=u.index,m=u.attributes.position,h=u.attributes.uv,_=u.attributes.uv1,y=u.attributes.normal,g=u.groups,b=u.drawRange;if(p!==null)if(Array.isArray(d))for(let E=0,D=g.length;E<D;E++){const S=g[E],v=d[S.materialIndex],w=Math.max(S.start,b.start),O=Math.min(p.count,Math.min(S.start+S.count,b.start+b.count));for(let P=w,z=O;P<z;P+=3){const L=p.getX(P),G=p.getX(P+1),T=p.getX(P+2);l=mc(this,v,e,r,h,_,y,L,G,T),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,b.start),D=Math.min(p.count,b.start+b.count);for(let S=E,v=D;S<v;S+=3){const w=p.getX(S),O=p.getX(S+1),P=p.getX(S+2);l=mc(this,d,e,r,h,_,y,w,O,P),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let E=0,D=g.length;E<D;E++){const S=g[E],v=d[S.materialIndex],w=Math.max(S.start,b.start),O=Math.min(m.count,Math.min(S.start+S.count,b.start+b.count));for(let P=w,z=O;P<z;P+=3){const L=P,G=P+1,T=P+2;l=mc(this,v,e,r,h,_,y,L,G,T),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,b.start),D=Math.min(m.count,b.start+b.count);for(let S=E,v=D;S<v;S+=3){const w=S,O=S+1,P=S+2;l=mc(this,d,e,r,h,_,y,w,O,P),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function uM(s,e,i,r,l,u,d,p){let m;if(e.side===Wn?m=r.intersectTriangle(d,u,l,!0,p):m=r.intersectTriangle(l,u,d,e.side===Qa,p),m===null)return null;pc.copy(p),pc.applyMatrix4(s.matrixWorld);const h=i.ray.origin.distanceTo(pc);return h<i.near||h>i.far?null:{distance:h,point:pc.clone(),object:s}}function mc(s,e,i,r,l,u,d,p,m,h){s.getVertexPosition(p,uc),s.getVertexPosition(m,fc),s.getVertexPosition(h,dc);const _=uM(s,e,i,r,uc,fc,dc,q0);if(_){const y=new re;Ei.getBarycoord(q0,uc,fc,dc,y),l&&(_.uv=Ei.getInterpolatedAttribute(l,p,m,h,y,new Yt)),u&&(_.uv1=Ei.getInterpolatedAttribute(u,p,m,h,y,new Yt)),d&&(_.normal=Ei.getInterpolatedAttribute(d,p,m,h,y,new re),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new re,materialIndex:0};Ei.getNormal(uc,fc,dc,g.normal),_.face=g,_.barycoord=y}return _}class fM extends Pn{constructor(e=null,i=1,r=1,l,u,d,p,m,h=Cn,_=Cn,y,g){super(null,d,p,m,h,_,l,u,y,g),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bd=new re,dM=new re,hM=new ft;class Sr{constructor(e=new re(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=bd.subVectors(r,i).cross(dM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const l=e.delta(bd),u=this.normal.dot(l);if(u===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/u;return r===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||hM.getNormalMatrix(e),l=this.coplanarPoint(bd).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xr=new Bc,pM=new Yt(.5,.5),gc=new re;class ev{constructor(e=new Sr,i=new Sr,r=new Sr,l=new Sr,u=new Sr,d=new Sr){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(r),p[3].copy(l),p[4].copy(u),p[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Fi,r=!1){const l=this.planes,u=e.elements,d=u[0],p=u[1],m=u[2],h=u[3],_=u[4],y=u[5],g=u[6],b=u[7],E=u[8],D=u[9],S=u[10],v=u[11],w=u[12],O=u[13],P=u[14],z=u[15];if(l[0].setComponents(h-d,b-_,v-E,z-w).normalize(),l[1].setComponents(h+d,b+_,v+E,z+w).normalize(),l[2].setComponents(h+p,b+y,v+D,z+O).normalize(),l[3].setComponents(h-p,b-y,v-D,z-O).normalize(),r)l[4].setComponents(m,g,S,P).normalize(),l[5].setComponents(h-m,b-g,v-S,z-P).normalize();else if(l[4].setComponents(h-m,b-g,v-S,z-P).normalize(),i===Fi)l[5].setComponents(h+m,b+g,v+S,z+P).normalize();else if(i===Lc)l[5].setComponents(m,g,S,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),xr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(e){xr.center.set(0,0,0);const i=pM.distanceTo(e.center);return xr.radius=.7071067811865476+i,xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(gc.x=l.normal.x>0?e.max.x:e.min.x,gc.y=l.normal.y>0?e.max.y:e.min.y,gc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(gc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tv extends Vo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Y0=new hn,Sh=new J_,_c=new Bc,vc=new re;class j0 extends qn{constructor(e=new mi,i=new tv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),_c.copy(r.boundingSphere),_c.applyMatrix4(l),_c.radius+=u,e.ray.intersectsSphere(_c)===!1)return;Y0.copy(l).invert(),Sh.copy(e.ray).applyMatrix4(Y0);const p=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=r.index,y=r.attributes.position;if(h!==null){const g=Math.max(0,d.start),b=Math.min(h.count,d.start+d.count);for(let E=g,D=b;E<D;E++){const S=h.getX(E);vc.fromBufferAttribute(y,S),Z0(vc,S,m,l,e,i,this)}}else{const g=Math.max(0,d.start),b=Math.min(y.count,d.start+d.count);for(let E=g,D=b;E<D;E++)vc.fromBufferAttribute(y,E),Z0(vc,E,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const p=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=u}}}}}function Z0(s,e,i,r,l,u,d){const p=Sh.distanceSqToPoint(s);if(p<i){const m=new re;Sh.closestPointToPoint(s,m),m.applyMatrix4(r);const h=l.ray.origin.distanceTo(m);if(h<l.near||h>l.far)return;u.push({distance:h,distanceToRay:Math.sqrt(p),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class nv extends Pn{constructor(e=[],i=Tr,r,l,u,d,p,m,h,_){super(e,i,r,l,u,d,p,m,h,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mM extends Pn{constructor(e,i,r,l,u,d,p,m,h){super(e,i,r,l,u,d,p,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class As extends Pn{constructor(e,i,r=Hi,l,u,d,p=Cn,m=Cn,h,_=_a,y=1){if(_!==_a&&_!==Er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:y};super(g,l,u,d,p,m,_,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Oh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class gM extends As{constructor(e,i=Hi,r=Tr,l,u,d=Cn,p=Cn,m,h=_a){const _={width:e,height:e,depth:1},y=[_,_,_,_,_,_];super(e,e,i,r,l,u,d,p,m,h),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class iv extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ko extends mi{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const p=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],h=[],_=[],y=[];let g=0,b=0;E("z","y","x",-1,-1,r,i,e,d,u,0),E("z","y","x",1,-1,r,i,-e,d,u,1),E("x","z","y",1,1,e,r,i,l,d,2),E("x","z","y",1,-1,e,r,-i,l,d,3),E("x","y","z",1,-1,e,i,r,l,u,4),E("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new ma(h,3)),this.setAttribute("normal",new ma(_,3)),this.setAttribute("uv",new ma(y,2));function E(D,S,v,w,O,P,z,L,G,T,I){const Q=P/G,H=z/T,J=P/2,de=z/2,he=L/2,q=G+1,N=T+1;let B=0,se=0;const ge=new re;for(let U=0;U<N;U++){const K=U*H-de;for(let ue=0;ue<q;ue++){const ye=ue*Q-J;ge[D]=ye*w,ge[S]=K*O,ge[v]=he,h.push(ge.x,ge.y,ge.z),ge[D]=0,ge[S]=0,ge[v]=L>0?1:-1,_.push(ge.x,ge.y,ge.z),y.push(ue/G),y.push(1-U/T),B+=1}}for(let U=0;U<T;U++)for(let K=0;K<G;K++){const ue=g+K+q*U,ye=g+K+q*(U+1),Ne=g+(K+1)+q*(U+1),Pe=g+(K+1)+q*U;m.push(ue,ye,Pe),m.push(ye,Ne,Pe),se+=6}p.addGroup(b,se,I),b+=se,g+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class zc extends mi{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,p=Math.floor(r),m=Math.floor(l),h=p+1,_=m+1,y=e/p,g=i/m,b=[],E=[],D=[],S=[];for(let v=0;v<_;v++){const w=v*g-d;for(let O=0;O<h;O++){const P=O*y-u;E.push(P,-w,0),D.push(0,0,1),S.push(O/p),S.push(1-v/m)}}for(let v=0;v<m;v++)for(let w=0;w<p;w++){const O=w+h*v,P=w+h*(v+1),z=w+1+h*(v+1),L=w+1+h*v;b.push(O,P,L),b.push(P,z,L)}this.setIndex(b),this.setAttribute("position",new ma(E,3)),this.setAttribute("normal",new ma(D,3)),this.setAttribute("uv",new ma(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zc(e.width,e.height,e.widthSegments,e.heightSegments)}}function Rs(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];if(K0(l))l.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone();else if(Array.isArray(l))if(K0(l[0])){const u=[];for(let d=0,p=l.length;d<p;d++)u[d]=l[d].clone();e[i][r]=u}else e[i][r]=l.slice();else e[i][r]=l}}return e}function Bn(s){const e={};for(let i=0;i<s.length;i++){const r=Rs(s[i]);for(const l in r)e[l]=r[l]}return e}function K0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function _M(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function av(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const vM={clone:Rs,merge:Bn};var xM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,SM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends Vo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xM,this.fragmentShader=SM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=_M(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class yM extends Gi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class MM extends Vo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ly,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bM extends Vo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xc=new re,Sc=new Cs,Li=new re;class rv extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(xc,Sc,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xc,Sc,Li.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(xc,Sc,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xc,Sc,Li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ja=new re,Q0=new Yt,J0=new Yt;class bi extends rv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=xh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ed*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xh*2*Math.atan(Math.tan(ed*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){ja.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ja.x,ja.y).multiplyScalar(-e/ja.z),ja.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ja.x,ja.y).multiplyScalar(-e/ja.z)}getViewSize(e,i){return this.getViewBounds(e,Q0,J0),i.subVectors(J0,Q0)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(ed*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/h,l*=d.width/m,r*=d.height/h}const p=this.filmOffset;p!==0&&(u+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Ih extends rv{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=h*this.view.offsetX,d=u+h*this.view.width,p-=_*this.view.offsetY,m=p-_*this.view.height}this.projectionMatrix.makeOrthographic(u,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const xs=-90,Ss=1;class EM extends qn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new bi(xs,Ss,e,i);l.layers=this.layers,this.add(l);const u=new bi(xs,Ss,e,i);u.layers=this.layers,this.add(u);const d=new bi(xs,Ss,e,i);d.layers=this.layers,this.add(d);const p=new bi(xs,Ss,e,i);p.layers=this.layers,this.add(p);const m=new bi(xs,Ss,e,i);m.layers=this.layers,this.add(m);const h=new bi(xs,Ss,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,p,m]=i;for(const h of i)this.remove(h);if(e===Fi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Lc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,p,m,h,_]=this.children,y=e.getRenderTarget(),g=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const D=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(r,1,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(r,2,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(r,3,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),r.texture.generateMipmaps=D,e.setRenderTarget(r,5,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,_),e.setRenderTarget(y,g,b),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class TM extends bi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class AM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,rt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const Gh=class Gh{constructor(e,i,r,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,l){const u=this.elements;return u[0]=e,u[2]=i,u[1]=r,u[3]=l,this}};Gh.prototype.isMatrix2=!0;let $0=Gh;function e_(s,e,i,r){const l=RM(r);switch(i){case k_:return s*e;case W_:return s*e/l.components*l.byteLength;case Dh:return s*e/l.components*l.byteLength;case Ar:return s*e*2/l.components*l.byteLength;case Uh:return s*e*2/l.components*l.byteLength;case X_:return s*e*3/l.components*l.byteLength;case Ti:return s*e*4/l.components*l.byteLength;case Nh:return s*e*4/l.components*l.byteLength;case Ec:case Tc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ac:case Rc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case kd:case Wd:return Math.max(s,16)*Math.max(e,8)/4;case Vd:case Xd:return Math.max(s,8)*Math.max(e,8)/2;case qd:case Yd:case Zd:case Kd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case jd:case wc:case Qd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Jd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case $d:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case eh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case th:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case nh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ih:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ah:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case rh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case sh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case oh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case lh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ch:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case uh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case fh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case dh:case hh:case ph:return Math.ceil(s/4)*Math.ceil(e/4)*16;case mh:case gh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Dc:case _h:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function RM(s){switch(s){case pi:case z_:return{byteLength:1,components:1};case Bo:case H_:case ga:return{byteLength:2,components:1};case Ch:case wh:return{byteLength:2,components:4};case Hi:case Rh:case Ii:return{byteLength:4,components:1};case G_:case V_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ah}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ah);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function sv(){let s=null,e=!1,i=null,r=null;function l(u,d){i(u,d),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&s!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function CM(s){const e=new WeakMap;function i(p,m){const h=p.array,_=p.usage,y=h.byteLength,g=s.createBuffer();s.bindBuffer(m,g),s.bufferData(m,h,_),p.onUploadCallback();let b;if(h instanceof Float32Array)b=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)b=s.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?b=s.HALF_FLOAT:b=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)b=s.SHORT;else if(h instanceof Uint32Array)b=s.UNSIGNED_INT;else if(h instanceof Int32Array)b=s.INT;else if(h instanceof Int8Array)b=s.BYTE;else if(h instanceof Uint8Array)b=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)b=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:b,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:y}}function r(p,m,h){const _=m.array,y=m.updateRanges;if(s.bindBuffer(h,p),y.length===0)s.bufferSubData(h,0,_);else{y.sort((b,E)=>b.start-E.start);let g=0;for(let b=1;b<y.length;b++){const E=y[g],D=y[b];D.start<=E.start+E.count+1?E.count=Math.max(E.count,D.start+D.count-E.start):(++g,y[g]=D)}y.length=g+1;for(let b=0,E=y.length;b<E;b++){const D=y[b];s.bufferSubData(h,D.start*_.BYTES_PER_ELEMENT,_,D.start,D.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function u(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(s.deleteBuffer(m.buffer),e.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const _=e.get(p);(!_||_.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,p,m),h.version=p.version}}return{get:l,remove:u,update:d}}var wM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,DM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,UM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,NM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,OM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,IM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,FM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,BM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,HM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,GM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,VM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,YM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ZM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,KM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,QM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,JM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$M=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,eb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ib=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ab=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rb="gl_FragColor = linearToOutputTexel( gl_FragColor );",sb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ob=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,lb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ub=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,db=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_b=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,yb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Mb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Eb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ab=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Rb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Db=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ub=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Nb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ob=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ib=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$b=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,rE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,dE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_E=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,SE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ME=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,EE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,TE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,AE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,CE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,IE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,FE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,BE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,zE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,VE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,XE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,KE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,QE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$E=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,e1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,a1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,l1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vt={alphahash_fragment:wM,alphahash_pars_fragment:DM,alphamap_fragment:UM,alphamap_pars_fragment:NM,alphatest_fragment:LM,alphatest_pars_fragment:PM,aomap_fragment:OM,aomap_pars_fragment:IM,batching_pars_vertex:FM,batching_vertex:BM,begin_vertex:zM,beginnormal_vertex:HM,bsdfs:GM,iridescence_fragment:VM,bumpmap_pars_fragment:kM,clipping_planes_fragment:XM,clipping_planes_pars_fragment:WM,clipping_planes_pars_vertex:qM,clipping_planes_vertex:YM,color_fragment:jM,color_pars_fragment:ZM,color_pars_vertex:KM,color_vertex:QM,common:JM,cube_uv_reflection_fragment:$M,defaultnormal_vertex:eb,displacementmap_pars_vertex:tb,displacementmap_vertex:nb,emissivemap_fragment:ib,emissivemap_pars_fragment:ab,colorspace_fragment:rb,colorspace_pars_fragment:sb,envmap_fragment:ob,envmap_common_pars_fragment:lb,envmap_pars_fragment:cb,envmap_pars_vertex:ub,envmap_physical_pars_fragment:yb,envmap_vertex:fb,fog_vertex:db,fog_pars_vertex:hb,fog_fragment:pb,fog_pars_fragment:mb,gradientmap_pars_fragment:gb,lightmap_pars_fragment:_b,lights_lambert_fragment:vb,lights_lambert_pars_fragment:xb,lights_pars_begin:Sb,lights_toon_fragment:Mb,lights_toon_pars_fragment:bb,lights_phong_fragment:Eb,lights_phong_pars_fragment:Tb,lights_physical_fragment:Ab,lights_physical_pars_fragment:Rb,lights_fragment_begin:Cb,lights_fragment_maps:wb,lights_fragment_end:Db,lightprobes_pars_fragment:Ub,logdepthbuf_fragment:Nb,logdepthbuf_pars_fragment:Lb,logdepthbuf_pars_vertex:Pb,logdepthbuf_vertex:Ob,map_fragment:Ib,map_pars_fragment:Fb,map_particle_fragment:Bb,map_particle_pars_fragment:zb,metalnessmap_fragment:Hb,metalnessmap_pars_fragment:Gb,morphinstance_vertex:Vb,morphcolor_vertex:kb,morphnormal_vertex:Xb,morphtarget_pars_vertex:Wb,morphtarget_vertex:qb,normal_fragment_begin:Yb,normal_fragment_maps:jb,normal_pars_fragment:Zb,normal_pars_vertex:Kb,normal_vertex:Qb,normalmap_pars_fragment:Jb,clearcoat_normal_fragment_begin:$b,clearcoat_normal_fragment_maps:eE,clearcoat_pars_fragment:tE,iridescence_pars_fragment:nE,opaque_fragment:iE,packing:aE,premultiplied_alpha_fragment:rE,project_vertex:sE,dithering_fragment:oE,dithering_pars_fragment:lE,roughnessmap_fragment:cE,roughnessmap_pars_fragment:uE,shadowmap_pars_fragment:fE,shadowmap_pars_vertex:dE,shadowmap_vertex:hE,shadowmask_pars_fragment:pE,skinbase_vertex:mE,skinning_pars_vertex:gE,skinning_vertex:_E,skinnormal_vertex:vE,specularmap_fragment:xE,specularmap_pars_fragment:SE,tonemapping_fragment:yE,tonemapping_pars_fragment:ME,transmission_fragment:bE,transmission_pars_fragment:EE,uv_pars_fragment:TE,uv_pars_vertex:AE,uv_vertex:RE,worldpos_vertex:CE,background_vert:wE,background_frag:DE,backgroundCube_vert:UE,backgroundCube_frag:NE,cube_vert:LE,cube_frag:PE,depth_vert:OE,depth_frag:IE,distance_vert:FE,distance_frag:BE,equirect_vert:zE,equirect_frag:HE,linedashed_vert:GE,linedashed_frag:VE,meshbasic_vert:kE,meshbasic_frag:XE,meshlambert_vert:WE,meshlambert_frag:qE,meshmatcap_vert:YE,meshmatcap_frag:jE,meshnormal_vert:ZE,meshnormal_frag:KE,meshphong_vert:QE,meshphong_frag:JE,meshphysical_vert:$E,meshphysical_frag:e1,meshtoon_vert:t1,meshtoon_frag:n1,points_vert:i1,points_frag:a1,shadow_vert:r1,shadow_frag:s1,sprite_vert:o1,sprite_frag:l1},Fe={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new re},probesMax:{value:new re},probesResolution:{value:new re}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Oi={basic:{uniforms:Bn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:Bn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Lt(0)},envMapIntensity:{value:1}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:Bn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:Bn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:Bn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Lt(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:Bn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:Bn([Fe.points,Fe.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:Bn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:Bn([Fe.common,Fe.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:Bn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:Bn([Fe.sprite,Fe.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distance:{uniforms:Bn([Fe.common,Fe.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distance_vert,fragmentShader:vt.distance_frag},shadow:{uniforms:Bn([Fe.lights,Fe.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Oi.physical={uniforms:Bn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const yc={r:0,b:0,g:0},c1=new hn,ov=new ft;ov.set(-1,0,0,0,1,0,0,0,1);function u1(s,e,i,r,l,u){const d=new Lt(0);let p=l===!0?0:1,m,h,_=null,y=0,g=null;function b(w){let O=w.isScene===!0?w.background:null;if(O&&O.isTexture){const P=w.backgroundBlurriness>0;O=e.get(O,P)}return O}function E(w){let O=!1;const P=b(w);P===null?S(d,p):P&&P.isColor&&(S(P,1),O=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?i.buffers.color.setClear(0,0,0,1,u):z==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(s.autoClear||O)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function D(w,O){const P=b(O);P&&(P.isCubeTexture||P.mapping===Fc)?(h===void 0&&(h=new va(new ko(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:Rs(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(z,L,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=P,h.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(c1.makeRotationFromEuler(O.backgroundRotation)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(ov),h.material.toneMapped=Rt.getTransfer(P.colorSpace)!==Vt,(_!==P||y!==P.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,_=P,y=P.version,g=s.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(m===void 0&&(m=new va(new zc(2,2),new Gi({name:"BackgroundMaterial",uniforms:Rs(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:Qa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=P,m.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,m.material.toneMapped=Rt.getTransfer(P.colorSpace)!==Vt,P.matrixAutoUpdate===!0&&P.updateMatrix(),m.material.uniforms.uvTransform.value.copy(P.matrix),(_!==P||y!==P.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,_=P,y=P.version,g=s.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null))}function S(w,O){w.getRGB(yc,av(s)),i.buffers.color.setClear(yc.r,yc.g,yc.b,O,u)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(w,O=1){d.set(w),p=O,S(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(w){p=w,S(d,p)},render:E,addToRenderList:D,dispose:v}}function f1(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=g(null);let u=l,d=!1;function p(H,J,de,he,q){let N=!1;const B=y(H,he,de,J);u!==B&&(u=B,h(u.object)),N=b(H,he,de,q),N&&E(H,he,de,q),q!==null&&e.update(q,s.ELEMENT_ARRAY_BUFFER),(N||d)&&(d=!1,P(H,J,de,he),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function m(){return s.createVertexArray()}function h(H){return s.bindVertexArray(H)}function _(H){return s.deleteVertexArray(H)}function y(H,J,de,he){const q=he.wireframe===!0;let N=r[J.id];N===void 0&&(N={},r[J.id]=N);const B=H.isInstancedMesh===!0?H.id:0;let se=N[B];se===void 0&&(se={},N[B]=se);let ge=se[de.id];ge===void 0&&(ge={},se[de.id]=ge);let U=ge[q];return U===void 0&&(U=g(m()),ge[q]=U),U}function g(H){const J=[],de=[],he=[];for(let q=0;q<i;q++)J[q]=0,de[q]=0,he[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:de,attributeDivisors:he,object:H,attributes:{},index:null}}function b(H,J,de,he){const q=u.attributes,N=J.attributes;let B=0;const se=de.getAttributes();for(const ge in se)if(se[ge].location>=0){const K=q[ge];let ue=N[ge];if(ue===void 0&&(ge==="instanceMatrix"&&H.instanceMatrix&&(ue=H.instanceMatrix),ge==="instanceColor"&&H.instanceColor&&(ue=H.instanceColor)),K===void 0||K.attribute!==ue||ue&&K.data!==ue.data)return!0;B++}return u.attributesNum!==B||u.index!==he}function E(H,J,de,he){const q={},N=J.attributes;let B=0;const se=de.getAttributes();for(const ge in se)if(se[ge].location>=0){let K=N[ge];K===void 0&&(ge==="instanceMatrix"&&H.instanceMatrix&&(K=H.instanceMatrix),ge==="instanceColor"&&H.instanceColor&&(K=H.instanceColor));const ue={};ue.attribute=K,K&&K.data&&(ue.data=K.data),q[ge]=ue,B++}u.attributes=q,u.attributesNum=B,u.index=he}function D(){const H=u.newAttributes;for(let J=0,de=H.length;J<de;J++)H[J]=0}function S(H){v(H,0)}function v(H,J){const de=u.newAttributes,he=u.enabledAttributes,q=u.attributeDivisors;de[H]=1,he[H]===0&&(s.enableVertexAttribArray(H),he[H]=1),q[H]!==J&&(s.vertexAttribDivisor(H,J),q[H]=J)}function w(){const H=u.newAttributes,J=u.enabledAttributes;for(let de=0,he=J.length;de<he;de++)J[de]!==H[de]&&(s.disableVertexAttribArray(de),J[de]=0)}function O(H,J,de,he,q,N,B){B===!0?s.vertexAttribIPointer(H,J,de,q,N):s.vertexAttribPointer(H,J,de,he,q,N)}function P(H,J,de,he){D();const q=he.attributes,N=de.getAttributes(),B=J.defaultAttributeValues;for(const se in N){const ge=N[se];if(ge.location>=0){let U=q[se];if(U===void 0&&(se==="instanceMatrix"&&H.instanceMatrix&&(U=H.instanceMatrix),se==="instanceColor"&&H.instanceColor&&(U=H.instanceColor)),U!==void 0){const K=U.normalized,ue=U.itemSize,ye=e.get(U);if(ye===void 0)continue;const Ne=ye.buffer,Pe=ye.type,te=ye.bytesPerElement,Ee=Pe===s.INT||Pe===s.UNSIGNED_INT||U.gpuType===Rh;if(U.isInterleavedBufferAttribute){const Se=U.data,qe=Se.stride,et=U.offset;if(Se.isInstancedInterleavedBuffer){for(let Ze=0;Ze<ge.locationSize;Ze++)v(ge.location+Ze,Se.meshPerAttribute);H.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ze=0;Ze<ge.locationSize;Ze++)S(ge.location+Ze);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let Ze=0;Ze<ge.locationSize;Ze++)O(ge.location+Ze,ue/ge.locationSize,Pe,K,qe*te,(et+ue/ge.locationSize*Ze)*te,Ee)}else{if(U.isInstancedBufferAttribute){for(let Se=0;Se<ge.locationSize;Se++)v(ge.location+Se,U.meshPerAttribute);H.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let Se=0;Se<ge.locationSize;Se++)S(ge.location+Se);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let Se=0;Se<ge.locationSize;Se++)O(ge.location+Se,ue/ge.locationSize,Pe,K,ue*te,ue/ge.locationSize*Se*te,Ee)}}else if(B!==void 0){const K=B[se];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(ge.location,K);break;case 3:s.vertexAttrib3fv(ge.location,K);break;case 4:s.vertexAttrib4fv(ge.location,K);break;default:s.vertexAttrib1fv(ge.location,K)}}}}w()}function z(){I();for(const H in r){const J=r[H];for(const de in J){const he=J[de];for(const q in he){const N=he[q];for(const B in N)_(N[B].object),delete N[B];delete he[q]}}delete r[H]}}function L(H){if(r[H.id]===void 0)return;const J=r[H.id];for(const de in J){const he=J[de];for(const q in he){const N=he[q];for(const B in N)_(N[B].object),delete N[B];delete he[q]}}delete r[H.id]}function G(H){for(const J in r){const de=r[J];for(const he in de){const q=de[he];if(q[H.id]===void 0)continue;const N=q[H.id];for(const B in N)_(N[B].object),delete N[B];delete q[H.id]}}}function T(H){for(const J in r){const de=r[J],he=H.isInstancedMesh===!0?H.id:0,q=de[he];if(q!==void 0){for(const N in q){const B=q[N];for(const se in B)_(B[se].object),delete B[se];delete q[N]}delete de[he],Object.keys(de).length===0&&delete r[J]}}}function I(){Q(),d=!0,u!==l&&(u=l,h(u.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:I,resetDefaultState:Q,dispose:z,releaseStatesOfGeometry:L,releaseStatesOfObject:T,releaseStatesOfProgram:G,initAttributes:D,enableAttribute:S,disableUnusedAttributes:w}}function d1(s,e,i){let r;function l(m){r=m}function u(m,h){s.drawArrays(r,m,h),i.update(h,r,1)}function d(m,h,_){_!==0&&(s.drawArraysInstanced(r,m,h,_),i.update(h,r,_))}function p(m,h,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,h,0,_);let g=0;for(let b=0;b<_;b++)g+=h[b];i.update(g,r,1)}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=p}function h1(s,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const G=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(G){return!(G!==Ti&&r.convert(G)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(G){const T=G===ga&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(G!==pi&&r.convert(G)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&G!==Ii&&!T)}function m(G){if(G==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";G="mediump"}return G==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const _=m(h);_!==h&&(rt("WebGLRenderer:",h,"not supported, using",_,"instead."),h=_);const y=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const b=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),O=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),z=s.getParameter(s.MAX_SAMPLES),L=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:y,reversedDepthBuffer:g,maxTextures:b,maxVertexTextures:E,maxTextureSize:D,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:w,maxVaryings:O,maxFragmentUniforms:P,maxSamples:z,samples:L}}function p1(s){const e=this;let i=null,r=0,l=!1,u=!1;const d=new Sr,p=new ft,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(y,g){const b=y.length!==0||g||r!==0||l;return l=g,r=y.length,b},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(y,g){i=_(y,g,0)},this.setState=function(y,g,b){const E=y.clippingPlanes,D=y.clipIntersection,S=y.clipShadows,v=s.get(y);if(!l||E===null||E.length===0||u&&!S)u?_(null):h();else{const w=u?0:r,O=w*4;let P=v.clippingState||null;m.value=P,P=_(E,g,O,b);for(let z=0;z!==O;++z)P[z]=i[z];v.clippingState=P,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=w}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(y,g,b,E){const D=y!==null?y.length:0;let S=null;if(D!==0){if(S=m.value,E!==!0||S===null){const v=b+D*4,w=g.matrixWorldInverse;p.getNormalMatrix(w),(S===null||S.length<v)&&(S=new Float32Array(v));for(let O=0,P=b;O!==D;++O,P+=4)d.copy(y[O]).applyMatrix4(w,p),d.normal.toArray(S,P),S[P+3]=d.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=D,e.numIntersection=0,S}}const Ka=4,t_=[.125,.215,.35,.446,.526,.582],Mr=20,m1=256,Po=new Ih,n_=new Lt;let Ed=null,Td=0,Ad=0,Rd=!1;const g1=new re;class i_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,u={}){const{size:d=256,position:p=g1}=u;Ed=this._renderer.getRenderTarget(),Td=this._renderer.getActiveCubeFace(),Ad=this._renderer.getActiveMipmapLevel(),Rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=s_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=r_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ed,Td,Ad),this._renderer.xr.enabled=Rd,e.scissorTest=!1,ys(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Tr||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ed=this._renderer.getRenderTarget(),Td=this._renderer.getActiveCubeFace(),Ad=this._renderer.getActiveMipmapLevel(),Rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:ga,format:Ti,colorSpace:Uc,depthBuffer:!1},l=a_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=a_(e,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_1(u)),this._blurMaterial=x1(u,e,i),this._ggxMaterial=v1(u,e,i)}return l}_compileMaterial(e){const i=new va(new mi,e);this._renderer.compile(i,Po)}_sceneToCubeUV(e,i,r,l,u){const m=new bi(90,1,i,r),h=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],y=this._renderer,g=y.autoClear,b=y.toneMapping;y.getClearColor(n_),y.toneMapping=Bi,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(l),y.clearDepth(),y.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new va(new ko,new $_({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,S=D.material;let v=!1;const w=e.background;w?w.isColor&&(S.color.copy(w),e.background=null,v=!0):(S.color.copy(n_),v=!0);for(let O=0;O<6;O++){const P=O%3;P===0?(m.up.set(0,h[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+_[O],u.y,u.z)):P===1?(m.up.set(0,0,h[O]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+_[O],u.z)):(m.up.set(0,h[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+_[O]));const z=this._cubeSize;ys(l,P*z,O>2?z:0,z,z),y.setRenderTarget(l),v&&y.render(D,m),y.render(e,m)}y.toneMapping=b,y.autoClear=g,e.background=w}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Tr||e.mapping===Ts;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=s_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=r_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const p=u.uniforms;p.envMap.value=e;const m=this._cubeSize;ys(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Po)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[r];p.material=d;const m=d.uniforms,h=r/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),y=Math.sqrt(h*h-_*_),g=0+h*1.25,b=y*g,{_lodMax:E}=this,D=this._sizeLods[r],S=3*D*(r>E-Ka?r-E+Ka:0),v=4*(this._cubeSize-D);m.envMap.value=e.texture,m.roughness.value=b,m.mipInt.value=E-i,ys(u,S,v,3*D,2*D),l.setRenderTarget(u),l.render(p,Po),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=E-r,ys(e,S,v,3*D,2*D),l.setRenderTarget(e),l.render(p,Po)}_blur(e,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",u),this._halfBlur(d,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Ut("blur direction must be either latitudinal or longitudinal!");const _=3,y=this._lodMeshes[l];y.material=h;const g=h.uniforms,b=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*b):2*Math.PI/(2*Mr-1),D=u/E,S=isFinite(u)?1+Math.floor(_*D):Mr;S>Mr&&rt(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Mr}`);const v=[];let w=0;for(let G=0;G<Mr;++G){const T=G/D,I=Math.exp(-T*T/2);v.push(I),G===0?w+=I:G<S&&(w+=2*I)}for(let G=0;G<v.length;G++)v[G]=v[G]/w;g.envMap.value=e.texture,g.samples.value=S,g.weights.value=v,g.latitudinal.value=d==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:O}=this;g.dTheta.value=E,g.mipInt.value=O-r;const P=this._sizeLods[l],z=3*P*(l>O-Ka?l-O+Ka:0),L=4*(this._cubeSize-P);ys(i,z,L,3*P,2*P),m.setRenderTarget(i),m.render(y,Po)}}function _1(s){const e=[],i=[],r=[];let l=s;const u=s-Ka+1+t_.length;for(let d=0;d<u;d++){const p=Math.pow(2,l);e.push(p);let m=1/p;d>s-Ka?m=t_[d-s+Ka-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),_=-h,y=1+h,g=[_,_,y,_,y,y,_,_,y,y,_,y],b=6,E=6,D=3,S=2,v=1,w=new Float32Array(D*E*b),O=new Float32Array(S*E*b),P=new Float32Array(v*E*b);for(let L=0;L<b;L++){const G=L%3*2/3-1,T=L>2?0:-1,I=[G,T,0,G+2/3,T,0,G+2/3,T+1,0,G,T,0,G+2/3,T+1,0,G,T+1,0];w.set(I,D*E*L),O.set(g,S*E*L);const Q=[L,L,L,L,L,L];P.set(Q,v*E*L)}const z=new mi;z.setAttribute("position",new Xn(w,D)),z.setAttribute("uv",new Xn(O,S)),z.setAttribute("faceIndex",new Xn(P,v)),r.push(new va(z,null)),l>Ka&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function a_(s,e,i){const r=new zi(s,e,i);return r.texture.mapping=Fc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ys(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function v1(s,e,i){return new Gi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:m1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Hc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ha,depthTest:!1,depthWrite:!1})}function x1(s,e,i){const r=new Float32Array(Mr),l=new re(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ha,depthTest:!1,depthWrite:!1})}function r_(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ha,depthTest:!1,depthWrite:!1})}function s_(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ha,depthTest:!1,depthWrite:!1})}function Hc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class lv extends zi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new nv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new ko(5,5,5),u=new Gi({name:"CubemapFromEquirect",uniforms:Rs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Wn,blending:ha});u.uniforms.tEquirect.value=i;const d=new va(l,u),p=i.minFilter;return i.minFilter===br&&(i.minFilter=Ln),new EM(1,10,this).update(e,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}function S1(s){let e=new WeakMap,i=new WeakMap,r=null;function l(g,b=!1){return g==null?null:b?d(g):u(g)}function u(g){if(g&&g.isTexture){const b=g.mapping;if(b===Qf||b===Jf)if(e.has(g)){const E=e.get(g).texture;return p(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const D=new lv(E.height);return D.fromEquirectangularTexture(s,g),e.set(g,D),g.addEventListener("dispose",h),p(D.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const b=g.mapping,E=b===Qf||b===Jf,D=b===Tr||b===Ts;if(E||D){let S=i.get(g);const v=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==v)return r===null&&(r=new i_(s)),S=E?r.fromEquirectangular(g,S):r.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),S.texture;if(S!==void 0)return S.texture;{const w=g.image;return E&&w&&w.height>0||D&&w&&m(w)?(r===null&&(r=new i_(s)),S=E?r.fromEquirectangular(g):r.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),g.addEventListener("dispose",_),S.texture):null}}}return g}function p(g,b){return b===Qf?g.mapping=Tr:b===Jf&&(g.mapping=Ts),g}function m(g){let b=0;const E=6;for(let D=0;D<E;D++)g[D]!==void 0&&b++;return b===E}function h(g){const b=g.target;b.removeEventListener("dispose",h);const E=e.get(b);E!==void 0&&(e.delete(b),E.dispose())}function _(g){const b=g.target;b.removeEventListener("dispose",_);const E=i.get(b);E!==void 0&&(i.delete(b),E.dispose())}function y(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:y}}function y1(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&vh("WebGLRenderer: "+r+" extension not supported."),l}}}function M1(s,e,i,r){const l={},u=new WeakMap;function d(y){const g=y.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",d),delete l[g.id];const b=u.get(g);b&&(e.remove(b),u.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(y,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(y){const g=y.attributes;for(const b in g)e.update(g[b],s.ARRAY_BUFFER)}function h(y){const g=[],b=y.index,E=y.attributes.position;let D=0;if(E===void 0)return;if(b!==null){const w=b.array;D=b.version;for(let O=0,P=w.length;O<P;O+=3){const z=w[O+0],L=w[O+1],G=w[O+2];g.push(z,L,L,G,G,z)}}else{const w=E.array;D=E.version;for(let O=0,P=w.length/3-1;O<P;O+=3){const z=O+0,L=O+1,G=O+2;g.push(z,L,L,G,G,z)}}const S=new(E.count>=65535?Q_:K_)(g,1);S.version=D;const v=u.get(y);v&&e.remove(v),u.set(y,S)}function _(y){const g=u.get(y);if(g){const b=y.index;b!==null&&g.version<b.version&&h(y)}else h(y);return u.get(y)}return{get:p,update:m,getWireframeAttribute:_}}function b1(s,e,i){let r;function l(y){r=y}let u,d;function p(y){u=y.type,d=y.bytesPerElement}function m(y,g){s.drawElements(r,g,u,y*d),i.update(g,r,1)}function h(y,g,b){b!==0&&(s.drawElementsInstanced(r,g,u,y*d,b),i.update(g,r,b))}function _(y,g,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,u,y,0,b);let D=0;for(let S=0;S<b;S++)D+=g[S];i.update(D,r,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=_}function E1(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,p){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=p*(u/3);break;case s.LINES:i.lines+=p*(u/2);break;case s.LINE_STRIP:i.lines+=p*(u-1);break;case s.LINE_LOOP:i.lines+=p*u;break;case s.POINTS:i.points+=p*u;break;default:Ut("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function T1(s,e,i){const r=new WeakMap,l=new ln;function u(d,p,m){const h=d.morphTargetInfluences,_=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,y=_!==void 0?_.length:0;let g=r.get(p);if(g===void 0||g.count!==y){let I=function(){G.dispose(),r.delete(p),p.removeEventListener("dispose",I)};g!==void 0&&g.texture.dispose();const b=p.morphAttributes.position!==void 0,E=p.morphAttributes.normal!==void 0,D=p.morphAttributes.color!==void 0,S=p.morphAttributes.position||[],v=p.morphAttributes.normal||[],w=p.morphAttributes.color||[];let O=0;b===!0&&(O=1),E===!0&&(O=2),D===!0&&(O=3);let P=p.attributes.position.count*O,z=1;P>e.maxTextureSize&&(z=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const L=new Float32Array(P*z*4*y),G=new Y_(L,P,z,y);G.type=Ii,G.needsUpdate=!0;const T=O*4;for(let Q=0;Q<y;Q++){const H=S[Q],J=v[Q],de=w[Q],he=P*z*4*Q;for(let q=0;q<H.count;q++){const N=q*T;b===!0&&(l.fromBufferAttribute(H,q),L[he+N+0]=l.x,L[he+N+1]=l.y,L[he+N+2]=l.z,L[he+N+3]=0),E===!0&&(l.fromBufferAttribute(J,q),L[he+N+4]=l.x,L[he+N+5]=l.y,L[he+N+6]=l.z,L[he+N+7]=0),D===!0&&(l.fromBufferAttribute(de,q),L[he+N+8]=l.x,L[he+N+9]=l.y,L[he+N+10]=l.z,L[he+N+11]=de.itemSize===4?l.w:1)}}g={count:y,texture:G,size:new Yt(P,z)},r.set(p,g),p.addEventListener("dispose",I)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let b=0;for(let D=0;D<h.length;D++)b+=h[D];const E=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(s,"morphTargetBaseInfluence",E),m.getUniforms().setValue(s,"morphTargetInfluences",h)}m.getUniforms().setValue(s,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:u}}function A1(s,e,i,r,l){let u=new WeakMap;function d(h){const _=l.render.frame,y=h.geometry,g=e.get(h,y);if(u.get(g)!==_&&(e.update(g),u.set(g,_)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),u.get(h)!==_&&(i.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,s.ARRAY_BUFFER),u.set(h,_))),h.isSkinnedMesh){const b=h.skeleton;u.get(b)!==_&&(b.update(),u.set(b,_))}return g}function p(){u=new WeakMap}function m(h){const _=h.target;_.removeEventListener("dispose",m),r.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:d,dispose:p}}const R1={[U_]:"LINEAR_TONE_MAPPING",[N_]:"REINHARD_TONE_MAPPING",[L_]:"CINEON_TONE_MAPPING",[P_]:"ACES_FILMIC_TONE_MAPPING",[I_]:"AGX_TONE_MAPPING",[F_]:"NEUTRAL_TONE_MAPPING",[O_]:"CUSTOM_TONE_MAPPING"};function C1(s,e,i,r,l){const u=new zi(e,i,{type:s,depthBuffer:r,stencilBuffer:l,depthTexture:r?new As(e,i):void 0}),d=new zi(e,i,{type:ga,depthBuffer:!1,stencilBuffer:!1}),p=new mi;p.setAttribute("position",new ma([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new ma([0,2,0,0,2,0],2));const m=new yM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new va(p,m),_=new Ih(-1,1,1,-1,0,1);let y=null,g=null,b=!1,E,D=null,S=[],v=!1;this.setSize=function(w,O){u.setSize(w,O),d.setSize(w,O);for(let P=0;P<S.length;P++){const z=S[P];z.setSize&&z.setSize(w,O)}},this.setEffects=function(w){S=w,v=S.length>0&&S[0].isRenderPass===!0;const O=u.width,P=u.height;for(let z=0;z<S.length;z++){const L=S[z];L.setSize&&L.setSize(O,P)}},this.begin=function(w,O){if(b||w.toneMapping===Bi&&S.length===0)return!1;if(D=O,O!==null){const P=O.width,z=O.height;(u.width!==P||u.height!==z)&&this.setSize(P,z)}return v===!1&&w.setRenderTarget(u),E=w.toneMapping,w.toneMapping=Bi,!0},this.hasRenderPass=function(){return v},this.end=function(w,O){w.toneMapping=E,b=!0;let P=u,z=d;for(let L=0;L<S.length;L++){const G=S[L];if(G.enabled!==!1&&(G.render(w,z,P,O),G.needsSwap!==!1)){const T=P;P=z,z=T}}if(y!==w.outputColorSpace||g!==w.toneMapping){y=w.outputColorSpace,g=w.toneMapping,m.defines={},Rt.getTransfer(y)===Vt&&(m.defines.SRGB_TRANSFER="");const L=R1[g];L&&(m.defines[L]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=P.texture,w.setRenderTarget(D),w.render(h,_),D=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),d.dispose(),p.dispose(),m.dispose()}}const cv=new Pn,yh=new As(1,1),uv=new Y_,fv=new Qy,dv=new nv,o_=[],l_=[],c_=new Float32Array(16),u_=new Float32Array(9),f_=new Float32Array(4);function ws(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let u=o_[l];if(u===void 0&&(u=new Float32Array(l),o_[l]=u),e!==0){r.toArray(u,0);for(let d=1,p=0;d!==e;++d)p+=i,s[d].toArray(u,p)}return u}function _n(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function vn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function Gc(s,e){let i=l_[e];i===void 0&&(i=new Int32Array(e),l_[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function w1(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function D1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;s.uniform2fv(this.addr,e),vn(i,e)}}function U1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(_n(i,e))return;s.uniform3fv(this.addr,e),vn(i,e)}}function N1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;s.uniform4fv(this.addr,e),vn(i,e)}}function L1(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(_n(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),vn(i,e)}else{if(_n(i,r))return;f_.set(r),s.uniformMatrix2fv(this.addr,!1,f_),vn(i,r)}}function P1(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(_n(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),vn(i,e)}else{if(_n(i,r))return;u_.set(r),s.uniformMatrix3fv(this.addr,!1,u_),vn(i,r)}}function O1(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(_n(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),vn(i,e)}else{if(_n(i,r))return;c_.set(r),s.uniformMatrix4fv(this.addr,!1,c_),vn(i,r)}}function I1(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function F1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;s.uniform2iv(this.addr,e),vn(i,e)}}function B1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_n(i,e))return;s.uniform3iv(this.addr,e),vn(i,e)}}function z1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;s.uniform4iv(this.addr,e),vn(i,e)}}function H1(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function G1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;s.uniform2uiv(this.addr,e),vn(i,e)}}function V1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_n(i,e))return;s.uniform3uiv(this.addr,e),vn(i,e)}}function k1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;s.uniform4uiv(this.addr,e),vn(i,e)}}function X1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(yh.compareFunction=i.isReversedDepthBuffer()?Ph:Lh,u=yh):u=cv,i.setTexture2D(e||u,l)}function W1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||fv,l)}function q1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||dv,l)}function Y1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||uv,l)}function j1(s){switch(s){case 5126:return w1;case 35664:return D1;case 35665:return U1;case 35666:return N1;case 35674:return L1;case 35675:return P1;case 35676:return O1;case 5124:case 35670:return I1;case 35667:case 35671:return F1;case 35668:case 35672:return B1;case 35669:case 35673:return z1;case 5125:return H1;case 36294:return G1;case 36295:return V1;case 36296:return k1;case 35678:case 36198:case 36298:case 36306:case 35682:return X1;case 35679:case 36299:case 36307:return W1;case 35680:case 36300:case 36308:case 36293:return q1;case 36289:case 36303:case 36311:case 36292:return Y1}}function Z1(s,e){s.uniform1fv(this.addr,e)}function K1(s,e){const i=ws(e,this.size,2);s.uniform2fv(this.addr,i)}function Q1(s,e){const i=ws(e,this.size,3);s.uniform3fv(this.addr,i)}function J1(s,e){const i=ws(e,this.size,4);s.uniform4fv(this.addr,i)}function $1(s,e){const i=ws(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function eT(s,e){const i=ws(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function tT(s,e){const i=ws(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function nT(s,e){s.uniform1iv(this.addr,e)}function iT(s,e){s.uniform2iv(this.addr,e)}function aT(s,e){s.uniform3iv(this.addr,e)}function rT(s,e){s.uniform4iv(this.addr,e)}function sT(s,e){s.uniform1uiv(this.addr,e)}function oT(s,e){s.uniform2uiv(this.addr,e)}function lT(s,e){s.uniform3uiv(this.addr,e)}function cT(s,e){s.uniform4uiv(this.addr,e)}function uT(s,e,i){const r=this.cache,l=e.length,u=Gc(i,l);_n(r,u)||(s.uniform1iv(this.addr,u),vn(r,u));let d;this.type===s.SAMPLER_2D_SHADOW?d=yh:d=cv;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||d,u[p])}function fT(s,e,i){const r=this.cache,l=e.length,u=Gc(i,l);_n(r,u)||(s.uniform1iv(this.addr,u),vn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||fv,u[d])}function dT(s,e,i){const r=this.cache,l=e.length,u=Gc(i,l);_n(r,u)||(s.uniform1iv(this.addr,u),vn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||dv,u[d])}function hT(s,e,i){const r=this.cache,l=e.length,u=Gc(i,l);_n(r,u)||(s.uniform1iv(this.addr,u),vn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||uv,u[d])}function pT(s){switch(s){case 5126:return Z1;case 35664:return K1;case 35665:return Q1;case 35666:return J1;case 35674:return $1;case 35675:return eT;case 35676:return tT;case 5124:case 35670:return nT;case 35667:case 35671:return iT;case 35668:case 35672:return aT;case 35669:case 35673:return rT;case 5125:return sT;case 36294:return oT;case 36295:return lT;case 36296:return cT;case 35678:case 36198:case 36298:case 36306:case 35682:return uT;case 35679:case 36299:case 36307:return fT;case 35680:case 36300:case 36308:case 36293:return dT;case 36289:case 36303:case 36311:case 36292:return hT}}class mT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=j1(i.type)}}class gT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=pT(i.type)}}class _T{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const p=l[u];p.setValue(e,i[p.id],r)}}}const Cd=/(\w+)(\])?(\[|\.)?/g;function d_(s,e){s.seq.push(e),s.map[e.id]=e}function vT(s,e,i){const r=s.name,l=r.length;for(Cd.lastIndex=0;;){const u=Cd.exec(r),d=Cd.lastIndex;let p=u[1];const m=u[2]==="]",h=u[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){d_(i,h===void 0?new mT(p,s,e):new gT(p,s,e));break}else{let y=i.map[p];y===void 0&&(y=new _T(p),d_(i,y)),i=y}}}class Cc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const p=e.getActiveUniform(i,d),m=e.getUniformLocation(i,p.name);vT(p,m,this)}const l=[],u=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):u.push(d);l.length>0&&(this.seq=l.concat(u))}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const p=i[u],m=r[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function h_(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const xT=37297;let ST=0;function yT(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const p=d+1;r.push(`${p===e?">":" "} ${p}: ${i[d]}`)}return r.join(`
`)}const p_=new ft;function MT(s){Rt._getMatrix(p_,Rt.workingColorSpace,s);const e=`mat3( ${p_.elements.map(i=>i.toFixed(4))} )`;switch(Rt.getTransfer(s)){case Nc:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function m_(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),u=(s.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+yT(s.getShaderSource(e),p)}else return u}function bT(s,e){const i=MT(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const ET={[U_]:"Linear",[N_]:"Reinhard",[L_]:"Cineon",[P_]:"ACESFilmic",[I_]:"AgX",[F_]:"Neutral",[O_]:"Custom"};function TT(s,e){const i=ET[e];return i===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Mc=new re;function AT(){Rt.getLuminanceCoefficients(Mc);const s=Mc.x.toFixed(4),e=Mc.y.toFixed(4),i=Mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function RT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fo).join(`
`)}function CT(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function wT(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(e,l),d=u.name;let p=1;u.type===s.FLOAT_MAT2&&(p=2),u.type===s.FLOAT_MAT3&&(p=3),u.type===s.FLOAT_MAT4&&(p=4),i[d]={type:u.type,location:s.getAttribLocation(e,d),locationSize:p}}return i}function Fo(s){return s!==""}function g_(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function __(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const DT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mh(s){return s.replace(DT,NT)}const UT=new Map;function NT(s,e){let i=vt[e];if(i===void 0){const r=UT.get(e);if(r!==void 0)i=vt[r],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Mh(i)}const LT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function v_(s){return s.replace(LT,PT)}function PT(s,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function x_(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const OT={[bc]:"SHADOWMAP_TYPE_PCF",[Io]:"SHADOWMAP_TYPE_VSM"};function IT(s){return OT[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const FT={[Tr]:"ENVMAP_TYPE_CUBE",[Ts]:"ENVMAP_TYPE_CUBE",[Fc]:"ENVMAP_TYPE_CUBE_UV"};function BT(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":FT[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const zT={[Ts]:"ENVMAP_MODE_REFRACTION"};function HT(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":zT[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const GT={[D_]:"ENVMAP_BLENDING_MULTIPLY",[Dy]:"ENVMAP_BLENDING_MIX",[Uy]:"ENVMAP_BLENDING_ADD"};function VT(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":GT[s.combine]||"ENVMAP_BLENDING_NONE"}function kT(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function XT(s,e,i,r){const l=s.getContext(),u=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=IT(i),h=BT(i),_=HT(i),y=VT(i),g=kT(i),b=RT(i),E=CT(u),D=l.createProgram();let S,v,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Fo).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Fo).join(`
`),v.length>0&&(v+=`
`)):(S=[x_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fo).join(`
`),v=[x_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+_:"",i.envMap?"#define "+y:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Bi?"#define TONE_MAPPING":"",i.toneMapping!==Bi?vt.tonemapping_pars_fragment:"",i.toneMapping!==Bi?TT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,bT("linearToOutputTexel",i.outputColorSpace),AT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Fo).join(`
`)),d=Mh(d),d=g_(d,i),d=__(d,i),p=Mh(p),p=g_(p,i),p=__(p,i),d=v_(d),p=v_(p),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,S=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",i.glslVersion===D0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===D0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const O=w+S+d,P=w+v+p,z=h_(l,l.VERTEX_SHADER,O),L=h_(l,l.FRAGMENT_SHADER,P);l.attachShader(D,z),l.attachShader(D,L),i.index0AttributeName!==void 0?l.bindAttribLocation(D,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(D,0,"position"),l.linkProgram(D);function G(H){if(s.debug.checkShaderErrors){const J=l.getProgramInfoLog(D)||"",de=l.getShaderInfoLog(z)||"",he=l.getShaderInfoLog(L)||"",q=J.trim(),N=de.trim(),B=he.trim();let se=!0,ge=!0;if(l.getProgramParameter(D,l.LINK_STATUS)===!1)if(se=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,D,z,L);else{const U=m_(l,z,"vertex"),K=m_(l,L,"fragment");Ut("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(D,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+q+`
`+U+`
`+K)}else q!==""?rt("WebGLProgram: Program Info Log:",q):(N===""||B==="")&&(ge=!1);ge&&(H.diagnostics={runnable:se,programLog:q,vertexShader:{log:N,prefix:S},fragmentShader:{log:B,prefix:v}})}l.deleteShader(z),l.deleteShader(L),T=new Cc(l,D),I=wT(l,D)}let T;this.getUniforms=function(){return T===void 0&&G(this),T};let I;this.getAttributes=function(){return I===void 0&&G(this),I};let Q=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Q===!1&&(Q=l.getProgramParameter(D,xT)),Q},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=ST++,this.cacheKey=e,this.usedTimes=1,this.program=D,this.vertexShader=z,this.fragmentShader=L,this}let WT=0;class qT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new YT(e),i.set(e,r)),r}}class YT{constructor(e){this.id=WT++,this.code=e,this.usedTimes=0}}function jT(s){return s===Ar||s===wc||s===Dc}function ZT(s,e,i,r,l,u){const d=new j_,p=new qT,m=new Set,h=[],_=new Map,y=r.logarithmicDepthBuffer;let g=r.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function D(T,I,Q,H,J,de){const he=H.fog,q=J.geometry,N=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?H.environment:null,B=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,se=e.get(T.envMap||N,B),ge=se&&se.mapping===Fc?se.image.height:null,U=b[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&rt("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const K=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ue=K!==void 0?K.length:0;let ye=0;q.morphAttributes.position!==void 0&&(ye=1),q.morphAttributes.normal!==void 0&&(ye=2),q.morphAttributes.color!==void 0&&(ye=3);let Ne,Pe,te,Ee;if(U){const ct=Oi[U];Ne=ct.vertexShader,Pe=ct.fragmentShader}else Ne=T.vertexShader,Pe=T.fragmentShader,p.update(T),te=p.getVertexShaderID(T),Ee=p.getFragmentShaderID(T);const Se=s.getRenderTarget(),qe=s.state.buffers.depth.getReversed(),et=J.isInstancedMesh===!0,Ze=J.isBatchedMesh===!0,Ft=!!T.map,lt=!!T.matcap,At=!!se,Pt=!!T.aoMap,dt=!!T.lightMap,ke=!!T.bumpMap,Qe=!!T.normalMap,ht=!!T.displacementMap,V=!!T.emissiveMap,wt=!!T.metalnessMap,nt=!!T.roughnessMap,ut=T.anisotropy>0,Re=T.clearcoat>0,Tt=T.dispersion>0,C=T.iridescence>0,M=T.sheen>0,X=T.transmission>0,ce=ut&&!!T.anisotropyMap,Me=Re&&!!T.clearcoatMap,Ce=Re&&!!T.clearcoatNormalMap,Ue=Re&&!!T.clearcoatRoughnessMap,fe=C&&!!T.iridescenceMap,_e=C&&!!T.iridescenceThicknessMap,Le=M&&!!T.sheenColorMap,Be=M&&!!T.sheenRoughnessMap,Te=!!T.specularMap,we=!!T.specularColorMap,Je=!!T.specularIntensityMap,it=X&&!!T.transmissionMap,xt=X&&!!T.thicknessMap,k=!!T.gradientMap,Ae=!!T.alphaMap,pe=T.alphaTest>0,ze=!!T.alphaHash,De=!!T.extensions;let be=Bi;T.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(be=s.toneMapping);const Ye={shaderID:U,shaderType:T.type,shaderName:T.name,vertexShader:Ne,fragmentShader:Pe,defines:T.defines,customVertexShaderID:te,customFragmentShaderID:Ee,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Ze,batchingColor:Ze&&J._colorsTexture!==null,instancing:et,instancingColor:et&&J.instanceColor!==null,instancingMorph:et&&J.morphTexture!==null,outputColorSpace:Se===null?s.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Rt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Ft,matcap:lt,envMap:At,envMapMode:At&&se.mapping,envMapCubeUVHeight:ge,aoMap:Pt,lightMap:dt,bumpMap:ke,normalMap:Qe,displacementMap:ht,emissiveMap:V,normalMapObjectSpace:Qe&&T.normalMapType===Py,normalMapTangentSpace:Qe&&T.normalMapType===R0,packedNormalMap:Qe&&T.normalMapType===R0&&jT(T.normalMap.format),metalnessMap:wt,roughnessMap:nt,anisotropy:ut,anisotropyMap:ce,clearcoat:Re,clearcoatMap:Me,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Ue,dispersion:Tt,iridescence:C,iridescenceMap:fe,iridescenceThicknessMap:_e,sheen:M,sheenColorMap:Le,sheenRoughnessMap:Be,specularMap:Te,specularColorMap:we,specularIntensityMap:Je,transmission:X,transmissionMap:it,thicknessMap:xt,gradientMap:k,opaque:T.transparent===!1&&T.blending===Ms&&T.alphaToCoverage===!1,alphaMap:Ae,alphaTest:pe,alphaHash:ze,combine:T.combine,mapUv:Ft&&E(T.map.channel),aoMapUv:Pt&&E(T.aoMap.channel),lightMapUv:dt&&E(T.lightMap.channel),bumpMapUv:ke&&E(T.bumpMap.channel),normalMapUv:Qe&&E(T.normalMap.channel),displacementMapUv:ht&&E(T.displacementMap.channel),emissiveMapUv:V&&E(T.emissiveMap.channel),metalnessMapUv:wt&&E(T.metalnessMap.channel),roughnessMapUv:nt&&E(T.roughnessMap.channel),anisotropyMapUv:ce&&E(T.anisotropyMap.channel),clearcoatMapUv:Me&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Be&&E(T.sheenRoughnessMap.channel),specularMapUv:Te&&E(T.specularMap.channel),specularColorMapUv:we&&E(T.specularColorMap.channel),specularIntensityMapUv:Je&&E(T.specularIntensityMap.channel),transmissionMapUv:it&&E(T.transmissionMap.channel),thicknessMapUv:xt&&E(T.thicknessMap.channel),alphaMapUv:Ae&&E(T.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Qe||ut),vertexNormals:!!q.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!q.attributes.uv&&(Ft||Ae),fog:!!he,useFog:T.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||q.attributes.normal===void 0&&Qe===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:qe,skinning:J.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:ye,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:de.length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&Q.length>0,shadowMapType:s.shadowMap.type,toneMapping:be,decodeVideoTexture:Ft&&T.map.isVideoTexture===!0&&Rt.getTransfer(T.map.colorSpace)===Vt,decodeVideoTextureEmissive:V&&T.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(T.emissiveMap.colorSpace)===Vt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===fa,flipSided:T.side===Wn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:De&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&T.extensions.multiDraw===!0||Ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ye.vertexUv1s=m.has(1),Ye.vertexUv2s=m.has(2),Ye.vertexUv3s=m.has(3),m.clear(),Ye}function S(T){const I=[];if(T.shaderID?I.push(T.shaderID):(I.push(T.customVertexShaderID),I.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Q in T.defines)I.push(Q),I.push(T.defines[Q]);return T.isRawShaderMaterial===!1&&(v(I,T),w(I,T),I.push(s.outputColorSpace)),I.push(T.customProgramCacheKey),I.join()}function v(T,I){T.push(I.precision),T.push(I.outputColorSpace),T.push(I.envMapMode),T.push(I.envMapCubeUVHeight),T.push(I.mapUv),T.push(I.alphaMapUv),T.push(I.lightMapUv),T.push(I.aoMapUv),T.push(I.bumpMapUv),T.push(I.normalMapUv),T.push(I.displacementMapUv),T.push(I.emissiveMapUv),T.push(I.metalnessMapUv),T.push(I.roughnessMapUv),T.push(I.anisotropyMapUv),T.push(I.clearcoatMapUv),T.push(I.clearcoatNormalMapUv),T.push(I.clearcoatRoughnessMapUv),T.push(I.iridescenceMapUv),T.push(I.iridescenceThicknessMapUv),T.push(I.sheenColorMapUv),T.push(I.sheenRoughnessMapUv),T.push(I.specularMapUv),T.push(I.specularColorMapUv),T.push(I.specularIntensityMapUv),T.push(I.transmissionMapUv),T.push(I.thicknessMapUv),T.push(I.combine),T.push(I.fogExp2),T.push(I.sizeAttenuation),T.push(I.morphTargetsCount),T.push(I.morphAttributeCount),T.push(I.numDirLights),T.push(I.numPointLights),T.push(I.numSpotLights),T.push(I.numSpotLightMaps),T.push(I.numHemiLights),T.push(I.numRectAreaLights),T.push(I.numDirLightShadows),T.push(I.numPointLightShadows),T.push(I.numSpotLightShadows),T.push(I.numSpotLightShadowsWithMaps),T.push(I.numLightProbes),T.push(I.shadowMapType),T.push(I.toneMapping),T.push(I.numClippingPlanes),T.push(I.numClipIntersection),T.push(I.depthPacking)}function w(T,I){d.disableAll(),I.instancing&&d.enable(0),I.instancingColor&&d.enable(1),I.instancingMorph&&d.enable(2),I.matcap&&d.enable(3),I.envMap&&d.enable(4),I.normalMapObjectSpace&&d.enable(5),I.normalMapTangentSpace&&d.enable(6),I.clearcoat&&d.enable(7),I.iridescence&&d.enable(8),I.alphaTest&&d.enable(9),I.vertexColors&&d.enable(10),I.vertexAlphas&&d.enable(11),I.vertexUv1s&&d.enable(12),I.vertexUv2s&&d.enable(13),I.vertexUv3s&&d.enable(14),I.vertexTangents&&d.enable(15),I.anisotropy&&d.enable(16),I.alphaHash&&d.enable(17),I.batching&&d.enable(18),I.dispersion&&d.enable(19),I.batchingColor&&d.enable(20),I.gradientMap&&d.enable(21),I.packedNormalMap&&d.enable(22),I.vertexNormals&&d.enable(23),T.push(d.mask),d.disableAll(),I.fog&&d.enable(0),I.useFog&&d.enable(1),I.flatShading&&d.enable(2),I.logarithmicDepthBuffer&&d.enable(3),I.reversedDepthBuffer&&d.enable(4),I.skinning&&d.enable(5),I.morphTargets&&d.enable(6),I.morphNormals&&d.enable(7),I.morphColors&&d.enable(8),I.premultipliedAlpha&&d.enable(9),I.shadowMapEnabled&&d.enable(10),I.doubleSided&&d.enable(11),I.flipSided&&d.enable(12),I.useDepthPacking&&d.enable(13),I.dithering&&d.enable(14),I.transmission&&d.enable(15),I.sheen&&d.enable(16),I.opaque&&d.enable(17),I.pointsUvs&&d.enable(18),I.decodeVideoTexture&&d.enable(19),I.decodeVideoTextureEmissive&&d.enable(20),I.alphaToCoverage&&d.enable(21),I.numLightProbeGrids>0&&d.enable(22),T.push(d.mask)}function O(T){const I=b[T.type];let Q;if(I){const H=Oi[I];Q=vM.clone(H.uniforms)}else Q=T.uniforms;return Q}function P(T,I){let Q=_.get(I);return Q!==void 0?++Q.usedTimes:(Q=new XT(s,I,T,l),h.push(Q),_.set(I,Q)),Q}function z(T){if(--T.usedTimes===0){const I=h.indexOf(T);h[I]=h[h.length-1],h.pop(),_.delete(T.cacheKey),T.destroy()}}function L(T){p.remove(T)}function G(){p.dispose()}return{getParameters:D,getProgramCacheKey:S,getUniforms:O,acquireProgram:P,releaseProgram:z,releaseShaderCache:L,programs:h,dispose:G}}function KT(){let s=new WeakMap;function e(d){return s.has(d)}function i(d){let p=s.get(d);return p===void 0&&(p={},s.set(d,p)),p}function r(d){s.delete(d)}function l(d,p,m){s.get(d)[p]=m}function u(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function QT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function S_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function y_(){const s=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(g){let b=0;return g.isInstancedMesh&&(b+=2),g.isSkinnedMesh&&(b+=1),b}function p(g,b,E,D,S,v){let w=s[e];return w===void 0?(w={id:g.id,object:g,geometry:b,material:E,materialVariant:d(g),groupOrder:D,renderOrder:g.renderOrder,z:S,group:v},s[e]=w):(w.id=g.id,w.object=g,w.geometry=b,w.material=E,w.materialVariant=d(g),w.groupOrder=D,w.renderOrder=g.renderOrder,w.z=S,w.group=v),e++,w}function m(g,b,E,D,S,v){const w=p(g,b,E,D,S,v);E.transmission>0?r.push(w):E.transparent===!0?l.push(w):i.push(w)}function h(g,b,E,D,S,v){const w=p(g,b,E,D,S,v);E.transmission>0?r.unshift(w):E.transparent===!0?l.unshift(w):i.unshift(w)}function _(g,b){i.length>1&&i.sort(g||QT),r.length>1&&r.sort(b||S_),l.length>1&&l.sort(b||S_)}function y(){for(let g=e,b=s.length;g<b;g++){const E=s[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:m,unshift:h,finish:y,sort:_}}function JT(){let s=new WeakMap;function e(r,l){const u=s.get(r);let d;return u===void 0?(d=new y_,s.set(r,[d])):l>=u.length?(d=new y_,u.push(d)):d=u[l],d}function i(){s=new WeakMap}return{get:e,dispose:i}}function $T(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new re,color:new Lt};break;case"SpotLight":i={position:new re,direction:new re,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new re,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new re,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":i={color:new Lt,position:new re,halfWidth:new re,halfHeight:new re};break}return s[e.id]=i,i}}}function eA(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let tA=0;function nA(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function iA(s){const e=new $T,i=eA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new re);const l=new re,u=new hn,d=new hn;function p(h){let _=0,y=0,g=0;for(let I=0;I<9;I++)r.probe[I].set(0,0,0);let b=0,E=0,D=0,S=0,v=0,w=0,O=0,P=0,z=0,L=0,G=0;h.sort(nA);for(let I=0,Q=h.length;I<Q;I++){const H=h[I],J=H.color,de=H.intensity,he=H.distance;let q=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Ar?q=H.shadow.map.texture:q=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)_+=J.r*de,y+=J.g*de,g+=J.b*de;else if(H.isLightProbe){for(let N=0;N<9;N++)r.probe[N].addScaledVector(H.sh.coefficients[N],de);G++}else if(H.isDirectionalLight){const N=e.get(H);if(N.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const B=H.shadow,se=i.get(H);se.shadowIntensity=B.intensity,se.shadowBias=B.bias,se.shadowNormalBias=B.normalBias,se.shadowRadius=B.radius,se.shadowMapSize=B.mapSize,r.directionalShadow[b]=se,r.directionalShadowMap[b]=q,r.directionalShadowMatrix[b]=H.shadow.matrix,w++}r.directional[b]=N,b++}else if(H.isSpotLight){const N=e.get(H);N.position.setFromMatrixPosition(H.matrixWorld),N.color.copy(J).multiplyScalar(de),N.distance=he,N.coneCos=Math.cos(H.angle),N.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),N.decay=H.decay,r.spot[D]=N;const B=H.shadow;if(H.map&&(r.spotLightMap[z]=H.map,z++,B.updateMatrices(H),H.castShadow&&L++),r.spotLightMatrix[D]=B.matrix,H.castShadow){const se=i.get(H);se.shadowIntensity=B.intensity,se.shadowBias=B.bias,se.shadowNormalBias=B.normalBias,se.shadowRadius=B.radius,se.shadowMapSize=B.mapSize,r.spotShadow[D]=se,r.spotShadowMap[D]=q,P++}D++}else if(H.isRectAreaLight){const N=e.get(H);N.color.copy(J).multiplyScalar(de),N.halfWidth.set(H.width*.5,0,0),N.halfHeight.set(0,H.height*.5,0),r.rectArea[S]=N,S++}else if(H.isPointLight){const N=e.get(H);if(N.color.copy(H.color).multiplyScalar(H.intensity),N.distance=H.distance,N.decay=H.decay,H.castShadow){const B=H.shadow,se=i.get(H);se.shadowIntensity=B.intensity,se.shadowBias=B.bias,se.shadowNormalBias=B.normalBias,se.shadowRadius=B.radius,se.shadowMapSize=B.mapSize,se.shadowCameraNear=B.camera.near,se.shadowCameraFar=B.camera.far,r.pointShadow[E]=se,r.pointShadowMap[E]=q,r.pointShadowMatrix[E]=H.shadow.matrix,O++}r.point[E]=N,E++}else if(H.isHemisphereLight){const N=e.get(H);N.skyColor.copy(H.color).multiplyScalar(de),N.groundColor.copy(H.groundColor).multiplyScalar(de),r.hemi[v]=N,v++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Fe.LTC_FLOAT_1,r.rectAreaLTC2=Fe.LTC_FLOAT_2):(r.rectAreaLTC1=Fe.LTC_HALF_1,r.rectAreaLTC2=Fe.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=y,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==b||T.pointLength!==E||T.spotLength!==D||T.rectAreaLength!==S||T.hemiLength!==v||T.numDirectionalShadows!==w||T.numPointShadows!==O||T.numSpotShadows!==P||T.numSpotMaps!==z||T.numLightProbes!==G)&&(r.directional.length=b,r.spot.length=D,r.rectArea.length=S,r.point.length=E,r.hemi.length=v,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=P+z-L,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=G,T.directionalLength=b,T.pointLength=E,T.spotLength=D,T.rectAreaLength=S,T.hemiLength=v,T.numDirectionalShadows=w,T.numPointShadows=O,T.numSpotShadows=P,T.numSpotMaps=z,T.numLightProbes=G,r.version=tA++)}function m(h,_){let y=0,g=0,b=0,E=0,D=0;const S=_.matrixWorldInverse;for(let v=0,w=h.length;v<w;v++){const O=h[v];if(O.isDirectionalLight){const P=r.directional[y];P.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(S),y++}else if(O.isSpotLight){const P=r.spot[b];P.position.setFromMatrixPosition(O.matrixWorld),P.position.applyMatrix4(S),P.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(S),b++}else if(O.isRectAreaLight){const P=r.rectArea[E];P.position.setFromMatrixPosition(O.matrixWorld),P.position.applyMatrix4(S),d.identity(),u.copy(O.matrixWorld),u.premultiply(S),d.extractRotation(u),P.halfWidth.set(O.width*.5,0,0),P.halfHeight.set(0,O.height*.5,0),P.halfWidth.applyMatrix4(d),P.halfHeight.applyMatrix4(d),E++}else if(O.isPointLight){const P=r.point[g];P.position.setFromMatrixPosition(O.matrixWorld),P.position.applyMatrix4(S),g++}else if(O.isHemisphereLight){const P=r.hemi[D];P.direction.setFromMatrixPosition(O.matrixWorld),P.direction.transformDirection(S),D++}}}return{setup:p,setupView:m,state:r}}function M_(s){const e=new iA(s),i=[],r=[],l=[];function u(g){y.camera=g,i.length=0,r.length=0,l.length=0}function d(g){i.push(g)}function p(g){r.push(g)}function m(g){l.push(g)}function h(){e.setup(i)}function _(g){e.setupView(i,g)}const y={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:u,state:y,setupLights:h,setupLightsView:_,pushLight:d,pushShadow:p,pushLightProbeGrid:m}}function aA(s){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let p;return d===void 0?(p=new M_(s),e.set(l,[p])):u>=d.length?(p=new M_(s),d.push(p)):p=d[u],p}function r(){e=new WeakMap}return{get:i,dispose:r}}const rA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,oA=[new re(1,0,0),new re(-1,0,0),new re(0,1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1)],lA=[new re(0,-1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1),new re(0,-1,0),new re(0,-1,0)],b_=new hn,Oo=new re,wd=new re;function cA(s,e,i){let r=new ev;const l=new Yt,u=new Yt,d=new ln,p=new MM,m=new bM,h={},_=i.maxTextureSize,y={[Qa]:Wn,[Wn]:Qa,[fa]:fa},g=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:rA,fragmentShader:sA}),b=g.clone();b.defines.HORIZONTAL_PASS=1;const E=new mi;E.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new va(E,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bc;let v=this.type;this.render=function(L,G,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||L.length===0)return;this.type===fy&&(rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=bc);const I=s.getRenderTarget(),Q=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),J=s.state;J.setBlending(ha),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const de=v!==this.type;de&&G.traverse(function(he){he.material&&(Array.isArray(he.material)?he.material.forEach(q=>q.needsUpdate=!0):he.material.needsUpdate=!0)});for(let he=0,q=L.length;he<q;he++){const N=L[he],B=N.shadow;if(B===void 0){rt("WebGLShadowMap:",N,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const se=B.getFrameExtents();l.multiply(se),u.copy(B.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/se.x),l.x=u.x*se.x,B.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/se.y),l.y=u.y*se.y,B.mapSize.y=u.y));const ge=s.state.buffers.depth.getReversed();if(B.camera._reversedDepth=ge,B.map===null||de===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Io){if(N.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new zi(l.x,l.y,{format:Ar,type:ga,minFilter:Ln,magFilter:Ln,generateMipmaps:!1}),B.map.texture.name=N.name+".shadowMap",B.map.depthTexture=new As(l.x,l.y,Ii),B.map.depthTexture.name=N.name+".shadowMapDepth",B.map.depthTexture.format=_a,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Cn,B.map.depthTexture.magFilter=Cn}else N.isPointLight?(B.map=new lv(l.x),B.map.depthTexture=new gM(l.x,Hi)):(B.map=new zi(l.x,l.y),B.map.depthTexture=new As(l.x,l.y,Hi)),B.map.depthTexture.name=N.name+".shadowMap",B.map.depthTexture.format=_a,this.type===bc?(B.map.depthTexture.compareFunction=ge?Ph:Lh,B.map.depthTexture.minFilter=Ln,B.map.depthTexture.magFilter=Ln):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Cn,B.map.depthTexture.magFilter=Cn);B.camera.updateProjectionMatrix()}const U=B.map.isWebGLCubeRenderTarget?6:1;for(let K=0;K<U;K++){if(B.map.isWebGLCubeRenderTarget)s.setRenderTarget(B.map,K),s.clear();else{K===0&&(s.setRenderTarget(B.map),s.clear());const ue=B.getViewport(K);d.set(u.x*ue.x,u.y*ue.y,u.x*ue.z,u.y*ue.w),J.viewport(d)}if(N.isPointLight){const ue=B.camera,ye=B.matrix,Ne=N.distance||ue.far;Ne!==ue.far&&(ue.far=Ne,ue.updateProjectionMatrix()),Oo.setFromMatrixPosition(N.matrixWorld),ue.position.copy(Oo),wd.copy(ue.position),wd.add(oA[K]),ue.up.copy(lA[K]),ue.lookAt(wd),ue.updateMatrixWorld(),ye.makeTranslation(-Oo.x,-Oo.y,-Oo.z),b_.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),B._frustum.setFromProjectionMatrix(b_,ue.coordinateSystem,ue.reversedDepth)}else B.updateMatrices(N);r=B.getFrustum(),P(G,T,B.camera,N,this.type)}B.isPointLightShadow!==!0&&this.type===Io&&w(B,T),B.needsUpdate=!1}v=this.type,S.needsUpdate=!1,s.setRenderTarget(I,Q,H)};function w(L,G){const T=e.update(D);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,b.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,b.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new zi(l.x,l.y,{format:Ar,type:ga})),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(G,null,T,g,D,null),b.uniforms.shadow_pass.value=L.mapPass.texture,b.uniforms.resolution.value=L.mapSize,b.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(G,null,T,b,D,null)}function O(L,G,T,I){let Q=null;const H=T.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(H!==void 0)Q=H;else if(Q=T.isPointLight===!0?m:p,s.localClippingEnabled&&G.clipShadows===!0&&Array.isArray(G.clippingPlanes)&&G.clippingPlanes.length!==0||G.displacementMap&&G.displacementScale!==0||G.alphaMap&&G.alphaTest>0||G.map&&G.alphaTest>0||G.alphaToCoverage===!0){const J=Q.uuid,de=G.uuid;let he=h[J];he===void 0&&(he={},h[J]=he);let q=he[de];q===void 0&&(q=Q.clone(),he[de]=q,G.addEventListener("dispose",z)),Q=q}if(Q.visible=G.visible,Q.wireframe=G.wireframe,I===Io?Q.side=G.shadowSide!==null?G.shadowSide:G.side:Q.side=G.shadowSide!==null?G.shadowSide:y[G.side],Q.alphaMap=G.alphaMap,Q.alphaTest=G.alphaToCoverage===!0?.5:G.alphaTest,Q.map=G.map,Q.clipShadows=G.clipShadows,Q.clippingPlanes=G.clippingPlanes,Q.clipIntersection=G.clipIntersection,Q.displacementMap=G.displacementMap,Q.displacementScale=G.displacementScale,Q.displacementBias=G.displacementBias,Q.wireframeLinewidth=G.wireframeLinewidth,Q.linewidth=G.linewidth,T.isPointLight===!0&&Q.isMeshDistanceMaterial===!0){const J=s.properties.get(Q);J.light=T}return Q}function P(L,G,T,I,Q){if(L.visible===!1)return;if(L.layers.test(G.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&Q===Io)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,L.matrixWorld);const de=e.update(L),he=L.material;if(Array.isArray(he)){const q=de.groups;for(let N=0,B=q.length;N<B;N++){const se=q[N],ge=he[se.materialIndex];if(ge&&ge.visible){const U=O(L,ge,I,Q);L.onBeforeShadow(s,L,G,T,de,U,se),s.renderBufferDirect(T,null,de,U,L,se),L.onAfterShadow(s,L,G,T,de,U,se)}}}else if(he.visible){const q=O(L,he,I,Q);L.onBeforeShadow(s,L,G,T,de,q,null),s.renderBufferDirect(T,null,de,q,L,null),L.onAfterShadow(s,L,G,T,de,q,null)}}const J=L.children;for(let de=0,he=J.length;de<he;de++)P(J[de],G,T,I,Q)}function z(L){L.target.removeEventListener("dispose",z);for(const T in h){const I=h[T],Q=L.target.uuid;Q in I&&(I[Q].dispose(),delete I[Q])}}}function uA(s,e){function i(){let k=!1;const Ae=new ln;let pe=null;const ze=new ln(0,0,0,0);return{setMask:function(De){pe!==De&&!k&&(s.colorMask(De,De,De,De),pe=De)},setLocked:function(De){k=De},setClear:function(De,be,Ye,ct,Bt){Bt===!0&&(De*=ct,be*=ct,Ye*=ct),Ae.set(De,be,Ye,ct),ze.equals(Ae)===!1&&(s.clearColor(De,be,Ye,ct),ze.copy(Ae))},reset:function(){k=!1,pe=null,ze.set(-1,0,0,0)}}}function r(){let k=!1,Ae=!1,pe=null,ze=null,De=null;return{setReversed:function(be){if(Ae!==be){const Ye=e.get("EXT_clip_control");be?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),Ae=be;const ct=De;De=null,this.setClear(ct)}},getReversed:function(){return Ae},setTest:function(be){be?Se(s.DEPTH_TEST):qe(s.DEPTH_TEST)},setMask:function(be){pe!==be&&!k&&(s.depthMask(be),pe=be)},setFunc:function(be){if(Ae&&(be=Xy[be]),ze!==be){switch(be){case Ld:s.depthFunc(s.NEVER);break;case Pd:s.depthFunc(s.ALWAYS);break;case Od:s.depthFunc(s.LESS);break;case Es:s.depthFunc(s.LEQUAL);break;case Id:s.depthFunc(s.EQUAL);break;case Fd:s.depthFunc(s.GEQUAL);break;case Bd:s.depthFunc(s.GREATER);break;case zd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ze=be}},setLocked:function(be){k=be},setClear:function(be){De!==be&&(De=be,Ae&&(be=1-be),s.clearDepth(be))},reset:function(){k=!1,pe=null,ze=null,De=null,Ae=!1}}}function l(){let k=!1,Ae=null,pe=null,ze=null,De=null,be=null,Ye=null,ct=null,Bt=null;return{setTest:function(st){k||(st?Se(s.STENCIL_TEST):qe(s.STENCIL_TEST))},setMask:function(st){Ae!==st&&!k&&(s.stencilMask(st),Ae=st)},setFunc:function(st,Qt,bn){(pe!==st||ze!==Qt||De!==bn)&&(s.stencilFunc(st,Qt,bn),pe=st,ze=Qt,De=bn)},setOp:function(st,Qt,bn){(be!==st||Ye!==Qt||ct!==bn)&&(s.stencilOp(st,Qt,bn),be=st,Ye=Qt,ct=bn)},setLocked:function(st){k=st},setClear:function(st){Bt!==st&&(s.clearStencil(st),Bt=st)},reset:function(){k=!1,Ae=null,pe=null,ze=null,De=null,be=null,Ye=null,ct=null,Bt=null}}}const u=new i,d=new r,p=new l,m=new WeakMap,h=new WeakMap;let _={},y={},g={},b=new WeakMap,E=[],D=null,S=!1,v=null,w=null,O=null,P=null,z=null,L=null,G=null,T=new Lt(0,0,0),I=0,Q=!1,H=null,J=null,de=null,he=null,q=null;const N=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,se=0;const ge=s.getParameter(s.VERSION);ge.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(ge)[1]),B=se>=1):ge.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(ge)[1]),B=se>=2);let U=null,K={};const ue=s.getParameter(s.SCISSOR_BOX),ye=s.getParameter(s.VIEWPORT),Ne=new ln().fromArray(ue),Pe=new ln().fromArray(ye);function te(k,Ae,pe,ze){const De=new Uint8Array(4),be=s.createTexture();s.bindTexture(k,be),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ye=0;Ye<pe;Ye++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Ae,0,s.RGBA,1,1,ze,0,s.RGBA,s.UNSIGNED_BYTE,De):s.texImage2D(Ae+Ye,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,De);return be}const Ee={};Ee[s.TEXTURE_2D]=te(s.TEXTURE_2D,s.TEXTURE_2D,1),Ee[s.TEXTURE_CUBE_MAP]=te(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[s.TEXTURE_2D_ARRAY]=te(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ee[s.TEXTURE_3D]=te(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),p.setClear(0),Se(s.DEPTH_TEST),d.setFunc(Es),ke(!1),Qe(E0),Se(s.CULL_FACE),Pt(ha);function Se(k){_[k]!==!0&&(s.enable(k),_[k]=!0)}function qe(k){_[k]!==!1&&(s.disable(k),_[k]=!1)}function et(k,Ae){return g[k]!==Ae?(s.bindFramebuffer(k,Ae),g[k]=Ae,k===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ae),k===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ze(k,Ae){let pe=E,ze=!1;if(k){pe=b.get(Ae),pe===void 0&&(pe=[],b.set(Ae,pe));const De=k.textures;if(pe.length!==De.length||pe[0]!==s.COLOR_ATTACHMENT0){for(let be=0,Ye=De.length;be<Ye;be++)pe[be]=s.COLOR_ATTACHMENT0+be;pe.length=De.length,ze=!0}}else pe[0]!==s.BACK&&(pe[0]=s.BACK,ze=!0);ze&&s.drawBuffers(pe)}function Ft(k){return D!==k?(s.useProgram(k),D=k,!0):!1}const lt={[yr]:s.FUNC_ADD,[hy]:s.FUNC_SUBTRACT,[py]:s.FUNC_REVERSE_SUBTRACT};lt[my]=s.MIN,lt[gy]=s.MAX;const At={[_y]:s.ZERO,[vy]:s.ONE,[xy]:s.SRC_COLOR,[Ud]:s.SRC_ALPHA,[Ty]:s.SRC_ALPHA_SATURATE,[by]:s.DST_COLOR,[yy]:s.DST_ALPHA,[Sy]:s.ONE_MINUS_SRC_COLOR,[Nd]:s.ONE_MINUS_SRC_ALPHA,[Ey]:s.ONE_MINUS_DST_COLOR,[My]:s.ONE_MINUS_DST_ALPHA,[Ay]:s.CONSTANT_COLOR,[Ry]:s.ONE_MINUS_CONSTANT_COLOR,[Cy]:s.CONSTANT_ALPHA,[wy]:s.ONE_MINUS_CONSTANT_ALPHA};function Pt(k,Ae,pe,ze,De,be,Ye,ct,Bt,st){if(k===ha){S===!0&&(qe(s.BLEND),S=!1);return}if(S===!1&&(Se(s.BLEND),S=!0),k!==dy){if(k!==v||st!==Q){if((w!==yr||z!==yr)&&(s.blendEquation(s.FUNC_ADD),w=yr,z=yr),st)switch(k){case Ms:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Dd:s.blendFunc(s.ONE,s.ONE);break;case T0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case A0:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ut("WebGLState: Invalid blending: ",k);break}else switch(k){case Ms:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Dd:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case T0:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case A0:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",k);break}O=null,P=null,L=null,G=null,T.set(0,0,0),I=0,v=k,Q=st}return}De=De||Ae,be=be||pe,Ye=Ye||ze,(Ae!==w||De!==z)&&(s.blendEquationSeparate(lt[Ae],lt[De]),w=Ae,z=De),(pe!==O||ze!==P||be!==L||Ye!==G)&&(s.blendFuncSeparate(At[pe],At[ze],At[be],At[Ye]),O=pe,P=ze,L=be,G=Ye),(ct.equals(T)===!1||Bt!==I)&&(s.blendColor(ct.r,ct.g,ct.b,Bt),T.copy(ct),I=Bt),v=k,Q=!1}function dt(k,Ae){k.side===fa?qe(s.CULL_FACE):Se(s.CULL_FACE);let pe=k.side===Wn;Ae&&(pe=!pe),ke(pe),k.blending===Ms&&k.transparent===!1?Pt(ha):Pt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),d.setFunc(k.depthFunc),d.setTest(k.depthTest),d.setMask(k.depthWrite),u.setMask(k.colorWrite);const ze=k.stencilWrite;p.setTest(ze),ze&&(p.setMask(k.stencilWriteMask),p.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),p.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),V(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Se(s.SAMPLE_ALPHA_TO_COVERAGE):qe(s.SAMPLE_ALPHA_TO_COVERAGE)}function ke(k){H!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),H=k)}function Qe(k){k!==cy?(Se(s.CULL_FACE),k!==J&&(k===E0?s.cullFace(s.BACK):k===uy?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):qe(s.CULL_FACE),J=k}function ht(k){k!==de&&(B&&s.lineWidth(k),de=k)}function V(k,Ae,pe){k?(Se(s.POLYGON_OFFSET_FILL),(he!==Ae||q!==pe)&&(he=Ae,q=pe,d.getReversed()&&(Ae=-Ae),s.polygonOffset(Ae,pe))):qe(s.POLYGON_OFFSET_FILL)}function wt(k){k?Se(s.SCISSOR_TEST):qe(s.SCISSOR_TEST)}function nt(k){k===void 0&&(k=s.TEXTURE0+N-1),U!==k&&(s.activeTexture(k),U=k)}function ut(k,Ae,pe){pe===void 0&&(U===null?pe=s.TEXTURE0+N-1:pe=U);let ze=K[pe];ze===void 0&&(ze={type:void 0,texture:void 0},K[pe]=ze),(ze.type!==k||ze.texture!==Ae)&&(U!==pe&&(s.activeTexture(pe),U=pe),s.bindTexture(k,Ae||Ee[k]),ze.type=k,ze.texture=Ae)}function Re(){const k=K[U];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Tt(){try{s.compressedTexImage2D(...arguments)}catch(k){Ut("WebGLState:",k)}}function C(){try{s.compressedTexImage3D(...arguments)}catch(k){Ut("WebGLState:",k)}}function M(){try{s.texSubImage2D(...arguments)}catch(k){Ut("WebGLState:",k)}}function X(){try{s.texSubImage3D(...arguments)}catch(k){Ut("WebGLState:",k)}}function ce(){try{s.compressedTexSubImage2D(...arguments)}catch(k){Ut("WebGLState:",k)}}function Me(){try{s.compressedTexSubImage3D(...arguments)}catch(k){Ut("WebGLState:",k)}}function Ce(){try{s.texStorage2D(...arguments)}catch(k){Ut("WebGLState:",k)}}function Ue(){try{s.texStorage3D(...arguments)}catch(k){Ut("WebGLState:",k)}}function fe(){try{s.texImage2D(...arguments)}catch(k){Ut("WebGLState:",k)}}function _e(){try{s.texImage3D(...arguments)}catch(k){Ut("WebGLState:",k)}}function Le(k){return y[k]!==void 0?y[k]:s.getParameter(k)}function Be(k,Ae){y[k]!==Ae&&(s.pixelStorei(k,Ae),y[k]=Ae)}function Te(k){Ne.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),Ne.copy(k))}function we(k){Pe.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Pe.copy(k))}function Je(k,Ae){let pe=h.get(Ae);pe===void 0&&(pe=new WeakMap,h.set(Ae,pe));let ze=pe.get(k);ze===void 0&&(ze=s.getUniformBlockIndex(Ae,k.name),pe.set(k,ze))}function it(k,Ae){const ze=h.get(Ae).get(k);m.get(Ae)!==ze&&(s.uniformBlockBinding(Ae,ze,k.__bindingPointIndex),m.set(Ae,ze))}function xt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),_={},y={},U=null,K={},g={},b=new WeakMap,E=[],D=null,S=!1,v=null,w=null,O=null,P=null,z=null,L=null,G=null,T=new Lt(0,0,0),I=0,Q=!1,H=null,J=null,de=null,he=null,q=null,Ne.set(0,0,s.canvas.width,s.canvas.height),Pe.set(0,0,s.canvas.width,s.canvas.height),u.reset(),d.reset(),p.reset()}return{buffers:{color:u,depth:d,stencil:p},enable:Se,disable:qe,bindFramebuffer:et,drawBuffers:Ze,useProgram:Ft,setBlending:Pt,setMaterial:dt,setFlipSided:ke,setCullFace:Qe,setLineWidth:ht,setPolygonOffset:V,setScissorTest:wt,activeTexture:nt,bindTexture:ut,unbindTexture:Re,compressedTexImage2D:Tt,compressedTexImage3D:C,texImage2D:fe,texImage3D:_e,pixelStorei:Be,getParameter:Le,updateUBOMapping:Je,uniformBlockBinding:it,texStorage2D:Ce,texStorage3D:Ue,texSubImage2D:M,texSubImage3D:X,compressedTexSubImage2D:ce,compressedTexSubImage3D:Me,scissor:Te,viewport:we,reset:xt}}function fA(s,e,i,r,l,u,d){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Yt,_=new WeakMap,y=new Set;let g;const b=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(C,M){return E?new OffscreenCanvas(C,M):Pc("canvas")}function S(C,M,X){let ce=1;const Me=Tt(C);if((Me.width>X||Me.height>X)&&(ce=X/Math.max(Me.width,Me.height)),ce<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Ce=Math.floor(ce*Me.width),Ue=Math.floor(ce*Me.height);g===void 0&&(g=D(Ce,Ue));const fe=M?D(Ce,Ue):g;return fe.width=Ce,fe.height=Ue,fe.getContext("2d").drawImage(C,0,0,Ce,Ue),rt("WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+Ce+"x"+Ue+")."),fe}else return"data"in C&&rt("WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),C;return C}function v(C){return C.generateMipmaps}function w(C){s.generateMipmap(C)}function O(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(C,M,X,ce,Me,Ce=!1){if(C!==null){if(s[C]!==void 0)return s[C];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Ue;ce&&(Ue=e.get("EXT_texture_norm16"),Ue||rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=M;if(M===s.RED&&(X===s.FLOAT&&(fe=s.R32F),X===s.HALF_FLOAT&&(fe=s.R16F),X===s.UNSIGNED_BYTE&&(fe=s.R8),X===s.UNSIGNED_SHORT&&Ue&&(fe=Ue.R16_EXT),X===s.SHORT&&Ue&&(fe=Ue.R16_SNORM_EXT)),M===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(fe=s.R8UI),X===s.UNSIGNED_SHORT&&(fe=s.R16UI),X===s.UNSIGNED_INT&&(fe=s.R32UI),X===s.BYTE&&(fe=s.R8I),X===s.SHORT&&(fe=s.R16I),X===s.INT&&(fe=s.R32I)),M===s.RG&&(X===s.FLOAT&&(fe=s.RG32F),X===s.HALF_FLOAT&&(fe=s.RG16F),X===s.UNSIGNED_BYTE&&(fe=s.RG8),X===s.UNSIGNED_SHORT&&Ue&&(fe=Ue.RG16_EXT),X===s.SHORT&&Ue&&(fe=Ue.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(fe=s.RG8UI),X===s.UNSIGNED_SHORT&&(fe=s.RG16UI),X===s.UNSIGNED_INT&&(fe=s.RG32UI),X===s.BYTE&&(fe=s.RG8I),X===s.SHORT&&(fe=s.RG16I),X===s.INT&&(fe=s.RG32I)),M===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),X===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),X===s.UNSIGNED_INT&&(fe=s.RGB32UI),X===s.BYTE&&(fe=s.RGB8I),X===s.SHORT&&(fe=s.RGB16I),X===s.INT&&(fe=s.RGB32I)),M===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),X===s.UNSIGNED_INT&&(fe=s.RGBA32UI),X===s.BYTE&&(fe=s.RGBA8I),X===s.SHORT&&(fe=s.RGBA16I),X===s.INT&&(fe=s.RGBA32I)),M===s.RGB&&(X===s.UNSIGNED_SHORT&&Ue&&(fe=Ue.RGB16_EXT),X===s.SHORT&&Ue&&(fe=Ue.RGB16_SNORM_EXT),X===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),X===s.UNSIGNED_INT_10F_11F_11F_REV&&(fe=s.R11F_G11F_B10F)),M===s.RGBA){const _e=Ce?Nc:Rt.getTransfer(Me);X===s.FLOAT&&(fe=s.RGBA32F),X===s.HALF_FLOAT&&(fe=s.RGBA16F),X===s.UNSIGNED_BYTE&&(fe=_e===Vt?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT&&Ue&&(fe=Ue.RGBA16_EXT),X===s.SHORT&&Ue&&(fe=Ue.RGBA16_SNORM_EXT),X===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function z(C,M){let X;return C?M===null||M===Hi||M===zo?X=s.DEPTH24_STENCIL8:M===Ii?X=s.DEPTH32F_STENCIL8:M===Bo&&(X=s.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Hi||M===zo?X=s.DEPTH_COMPONENT24:M===Ii?X=s.DEPTH_COMPONENT32F:M===Bo&&(X=s.DEPTH_COMPONENT16),X}function L(C,M){return v(C)===!0||C.isFramebufferTexture&&C.minFilter!==Cn&&C.minFilter!==Ln?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function G(C){const M=C.target;M.removeEventListener("dispose",G),I(M),M.isVideoTexture&&_.delete(M),M.isHTMLTexture&&y.delete(M)}function T(C){const M=C.target;M.removeEventListener("dispose",T),H(M)}function I(C){const M=r.get(C);if(M.__webglInit===void 0)return;const X=C.source,ce=b.get(X);if(ce){const Me=ce[M.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&Q(C),Object.keys(ce).length===0&&b.delete(X)}r.remove(C)}function Q(C){const M=r.get(C);s.deleteTexture(M.__webglTexture);const X=C.source,ce=b.get(X);delete ce[M.__cacheKey],d.memory.textures--}function H(C){const M=r.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),r.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(M.__webglFramebuffer[ce]))for(let Me=0;Me<M.__webglFramebuffer[ce].length;Me++)s.deleteFramebuffer(M.__webglFramebuffer[ce][Me]);else s.deleteFramebuffer(M.__webglFramebuffer[ce]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[ce])}else{if(Array.isArray(M.__webglFramebuffer))for(let ce=0;ce<M.__webglFramebuffer.length;ce++)s.deleteFramebuffer(M.__webglFramebuffer[ce]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ce=0;ce<M.__webglColorRenderbuffer.length;ce++)M.__webglColorRenderbuffer[ce]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[ce]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const X=C.textures;for(let ce=0,Me=X.length;ce<Me;ce++){const Ce=r.get(X[ce]);Ce.__webglTexture&&(s.deleteTexture(Ce.__webglTexture),d.memory.textures--),r.remove(X[ce])}r.remove(C)}let J=0;function de(){J=0}function he(){return J}function q(C){J=C}function N(){const C=J;return C>=l.maxTextures&&rt("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l.maxTextures),J+=1,C}function B(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function se(C,M){const X=r.get(C);if(C.isVideoTexture&&ut(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&X.__version!==C.version){const ce=C.image;if(ce===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{qe(X,C,M);return}}else C.isExternalTexture&&(X.__webglTexture=C.sourceTexture?C.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+M)}function ge(C,M){const X=r.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){qe(X,C,M);return}else C.isExternalTexture&&(X.__webglTexture=C.sourceTexture?C.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+M)}function U(C,M){const X=r.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){qe(X,C,M);return}i.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+M)}function K(C,M){const X=r.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&X.__version!==C.version){et(X,C,M);return}i.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+M)}const ue={[Hd]:s.REPEAT,[da]:s.CLAMP_TO_EDGE,[Gd]:s.MIRRORED_REPEAT},ye={[Cn]:s.NEAREST,[Ny]:s.NEAREST_MIPMAP_NEAREST,[Jl]:s.NEAREST_MIPMAP_LINEAR,[Ln]:s.LINEAR,[$f]:s.LINEAR_MIPMAP_NEAREST,[br]:s.LINEAR_MIPMAP_LINEAR},Ne={[Oy]:s.NEVER,[Hy]:s.ALWAYS,[Iy]:s.LESS,[Lh]:s.LEQUAL,[Fy]:s.EQUAL,[Ph]:s.GEQUAL,[By]:s.GREATER,[zy]:s.NOTEQUAL};function Pe(C,M){if(M.type===Ii&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Ln||M.magFilter===$f||M.magFilter===Jl||M.magFilter===br||M.minFilter===Ln||M.minFilter===$f||M.minFilter===Jl||M.minFilter===br)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,ue[M.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,ue[M.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,ue[M.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,ye[M.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,ye[M.minFilter]),M.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,Ne[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Cn||M.minFilter!==Jl&&M.minFilter!==br||M.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function te(C,M){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",G));const ce=M.source;let Me=b.get(ce);Me===void 0&&(Me={},b.set(ce,Me));const Ce=B(M);if(Ce!==C.__cacheKey){Me[Ce]===void 0&&(Me[Ce]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,X=!0),Me[Ce].usedTimes++;const Ue=Me[C.__cacheKey];Ue!==void 0&&(Me[C.__cacheKey].usedTimes--,Ue.usedTimes===0&&Q(M)),C.__cacheKey=Ce,C.__webglTexture=Me[Ce].texture}return X}function Ee(C,M,X){return Math.floor(Math.floor(C/X)/M)}function Se(C,M,X,ce){const Ce=C.updateRanges;if(Ce.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,X,ce,M.data);else{Ce.sort((Be,Te)=>Be.start-Te.start);let Ue=0;for(let Be=1;Be<Ce.length;Be++){const Te=Ce[Ue],we=Ce[Be],Je=Te.start+Te.count,it=Ee(we.start,M.width,4),xt=Ee(Te.start,M.width,4);we.start<=Je+1&&it===xt&&Ee(we.start+we.count-1,M.width,4)===it?Te.count=Math.max(Te.count,we.start+we.count-Te.start):(++Ue,Ce[Ue]=we)}Ce.length=Ue+1;const fe=i.getParameter(s.UNPACK_ROW_LENGTH),_e=i.getParameter(s.UNPACK_SKIP_PIXELS),Le=i.getParameter(s.UNPACK_SKIP_ROWS);i.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let Be=0,Te=Ce.length;Be<Te;Be++){const we=Ce[Be],Je=Math.floor(we.start/4),it=Math.ceil(we.count/4),xt=Je%M.width,k=Math.floor(Je/M.width),Ae=it,pe=1;i.pixelStorei(s.UNPACK_SKIP_PIXELS,xt),i.pixelStorei(s.UNPACK_SKIP_ROWS,k),i.texSubImage2D(s.TEXTURE_2D,0,xt,k,Ae,pe,X,ce,M.data)}C.clearUpdateRanges(),i.pixelStorei(s.UNPACK_ROW_LENGTH,fe),i.pixelStorei(s.UNPACK_SKIP_PIXELS,_e),i.pixelStorei(s.UNPACK_SKIP_ROWS,Le)}}function qe(C,M,X){let ce=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ce=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ce=s.TEXTURE_3D);const Me=te(C,M),Ce=M.source;i.bindTexture(ce,C.__webglTexture,s.TEXTURE0+X);const Ue=r.get(Ce);if(Ce.version!==Ue.__version||Me===!0){if(i.activeTexture(s.TEXTURE0+X),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const pe=Rt.getPrimaries(Rt.workingColorSpace),ze=M.colorSpace===Za?null:Rt.getPrimaries(M.colorSpace),De=M.colorSpace===Za||pe===ze?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,De)}i.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let _e=S(M.image,!1,l.maxTextureSize);_e=Re(M,_e);const Le=u.convert(M.format,M.colorSpace),Be=u.convert(M.type);let Te=P(M.internalFormat,Le,Be,M.normalized,M.colorSpace,M.isVideoTexture);Pe(ce,M);let we;const Je=M.mipmaps,it=M.isVideoTexture!==!0,xt=Ue.__version===void 0||Me===!0,k=Ce.dataReady,Ae=L(M,_e);if(M.isDepthTexture)Te=z(M.format===Er,M.type),xt&&(it?i.texStorage2D(s.TEXTURE_2D,1,Te,_e.width,_e.height):i.texImage2D(s.TEXTURE_2D,0,Te,_e.width,_e.height,0,Le,Be,null));else if(M.isDataTexture)if(Je.length>0){it&&xt&&i.texStorage2D(s.TEXTURE_2D,Ae,Te,Je[0].width,Je[0].height);for(let pe=0,ze=Je.length;pe<ze;pe++)we=Je[pe],it?k&&i.texSubImage2D(s.TEXTURE_2D,pe,0,0,we.width,we.height,Le,Be,we.data):i.texImage2D(s.TEXTURE_2D,pe,Te,we.width,we.height,0,Le,Be,we.data);M.generateMipmaps=!1}else it?(xt&&i.texStorage2D(s.TEXTURE_2D,Ae,Te,_e.width,_e.height),k&&Se(M,_e,Le,Be)):i.texImage2D(s.TEXTURE_2D,0,Te,_e.width,_e.height,0,Le,Be,_e.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){it&&xt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Te,Je[0].width,Je[0].height,_e.depth);for(let pe=0,ze=Je.length;pe<ze;pe++)if(we=Je[pe],M.format!==Ti)if(Le!==null)if(it){if(k)if(M.layerUpdates.size>0){const De=e_(we.width,we.height,M.format,M.type);for(const be of M.layerUpdates){const Ye=we.data.subarray(be*De/we.data.BYTES_PER_ELEMENT,(be+1)*De/we.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,be,we.width,we.height,1,Le,Ye)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,0,we.width,we.height,_e.depth,Le,we.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,pe,Te,we.width,we.height,_e.depth,0,we.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?k&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,0,we.width,we.height,_e.depth,Le,Be,we.data):i.texImage3D(s.TEXTURE_2D_ARRAY,pe,Te,we.width,we.height,_e.depth,0,Le,Be,we.data)}else{it&&xt&&i.texStorage2D(s.TEXTURE_2D,Ae,Te,Je[0].width,Je[0].height);for(let pe=0,ze=Je.length;pe<ze;pe++)we=Je[pe],M.format!==Ti?Le!==null?it?k&&i.compressedTexSubImage2D(s.TEXTURE_2D,pe,0,0,we.width,we.height,Le,we.data):i.compressedTexImage2D(s.TEXTURE_2D,pe,Te,we.width,we.height,0,we.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?k&&i.texSubImage2D(s.TEXTURE_2D,pe,0,0,we.width,we.height,Le,Be,we.data):i.texImage2D(s.TEXTURE_2D,pe,Te,we.width,we.height,0,Le,Be,we.data)}else if(M.isDataArrayTexture)if(it){if(xt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Te,_e.width,_e.height,_e.depth),k)if(M.layerUpdates.size>0){const pe=e_(_e.width,_e.height,M.format,M.type);for(const ze of M.layerUpdates){const De=_e.data.subarray(ze*pe/_e.data.BYTES_PER_ELEMENT,(ze+1)*pe/_e.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ze,_e.width,_e.height,1,Le,Be,De)}M.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Le,Be,_e.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Te,_e.width,_e.height,_e.depth,0,Le,Be,_e.data);else if(M.isData3DTexture)it?(xt&&i.texStorage3D(s.TEXTURE_3D,Ae,Te,_e.width,_e.height,_e.depth),k&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Le,Be,_e.data)):i.texImage3D(s.TEXTURE_3D,0,Te,_e.width,_e.height,_e.depth,0,Le,Be,_e.data);else if(M.isFramebufferTexture){if(xt)if(it)i.texStorage2D(s.TEXTURE_2D,Ae,Te,_e.width,_e.height);else{let pe=_e.width,ze=_e.height;for(let De=0;De<Ae;De++)i.texImage2D(s.TEXTURE_2D,De,Te,pe,ze,0,Le,Be,null),pe>>=1,ze>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){const pe=s.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),_e.parentNode!==pe){pe.appendChild(_e),y.add(M),pe.onpaint=ct=>{const Bt=ct.changedElements;for(const st of y)Bt.includes(st.image)&&(st.needsUpdate=!0)},pe.requestPaint();return}const ze=0,De=s.RGBA,be=s.RGBA,Ye=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,ze,De,be,Ye,_e),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Je.length>0){if(it&&xt){const pe=Tt(Je[0]);i.texStorage2D(s.TEXTURE_2D,Ae,Te,pe.width,pe.height)}for(let pe=0,ze=Je.length;pe<ze;pe++)we=Je[pe],it?k&&i.texSubImage2D(s.TEXTURE_2D,pe,0,0,Le,Be,we):i.texImage2D(s.TEXTURE_2D,pe,Te,Le,Be,we);M.generateMipmaps=!1}else if(it){if(xt){const pe=Tt(_e);i.texStorage2D(s.TEXTURE_2D,Ae,Te,pe.width,pe.height)}k&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Le,Be,_e)}else i.texImage2D(s.TEXTURE_2D,0,Te,Le,Be,_e);v(M)&&w(ce),Ue.__version=Ce.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function et(C,M,X){if(M.image.length!==6)return;const ce=te(C,M),Me=M.source;i.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+X);const Ce=r.get(Me);if(Me.version!==Ce.__version||ce===!0){i.activeTexture(s.TEXTURE0+X);const Ue=Rt.getPrimaries(Rt.workingColorSpace),fe=M.colorSpace===Za?null:Rt.getPrimaries(M.colorSpace),_e=M.colorSpace===Za||Ue===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Le=M.isCompressedTexture||M.image[0].isCompressedTexture,Be=M.image[0]&&M.image[0].isDataTexture,Te=[];for(let be=0;be<6;be++)!Le&&!Be?Te[be]=S(M.image[be],!0,l.maxCubemapSize):Te[be]=Be?M.image[be].image:M.image[be],Te[be]=Re(M,Te[be]);const we=Te[0],Je=u.convert(M.format,M.colorSpace),it=u.convert(M.type),xt=P(M.internalFormat,Je,it,M.normalized,M.colorSpace),k=M.isVideoTexture!==!0,Ae=Ce.__version===void 0||ce===!0,pe=Me.dataReady;let ze=L(M,we);Pe(s.TEXTURE_CUBE_MAP,M);let De;if(Le){k&&Ae&&i.texStorage2D(s.TEXTURE_CUBE_MAP,ze,xt,we.width,we.height);for(let be=0;be<6;be++){De=Te[be].mipmaps;for(let Ye=0;Ye<De.length;Ye++){const ct=De[Ye];M.format!==Ti?Je!==null?k?pe&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye,0,0,ct.width,ct.height,Je,ct.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye,xt,ct.width,ct.height,0,ct.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?pe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye,0,0,ct.width,ct.height,Je,it,ct.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye,xt,ct.width,ct.height,0,Je,it,ct.data)}}}else{if(De=M.mipmaps,k&&Ae){De.length>0&&ze++;const be=Tt(Te[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,ze,xt,be.width,be.height)}for(let be=0;be<6;be++)if(Be){k?pe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Te[be].width,Te[be].height,Je,it,Te[be].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,xt,Te[be].width,Te[be].height,0,Je,it,Te[be].data);for(let Ye=0;Ye<De.length;Ye++){const Bt=De[Ye].image[be].image;k?pe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye+1,0,0,Bt.width,Bt.height,Je,it,Bt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye+1,xt,Bt.width,Bt.height,0,Je,it,Bt.data)}}else{k?pe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Je,it,Te[be]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,xt,Je,it,Te[be]);for(let Ye=0;Ye<De.length;Ye++){const ct=De[Ye];k?pe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye+1,0,0,Je,it,ct.image[be]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye+1,xt,Je,it,ct.image[be])}}}v(M)&&w(s.TEXTURE_CUBE_MAP),Ce.__version=Me.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Ze(C,M,X,ce,Me,Ce){const Ue=u.convert(X.format,X.colorSpace),fe=u.convert(X.type),_e=P(X.internalFormat,Ue,fe,X.normalized,X.colorSpace),Le=r.get(M),Be=r.get(X);if(Be.__renderTarget=M,!Le.__hasExternalTextures){const Te=Math.max(1,M.width>>Ce),we=Math.max(1,M.height>>Ce);Me===s.TEXTURE_3D||Me===s.TEXTURE_2D_ARRAY?i.texImage3D(Me,Ce,_e,Te,we,M.depth,0,Ue,fe,null):i.texImage2D(Me,Ce,_e,Te,we,0,Ue,fe,null)}i.bindFramebuffer(s.FRAMEBUFFER,C),nt(M)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ce,Me,Be.__webglTexture,0,wt(M)):(Me===s.TEXTURE_2D||Me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ce,Me,Be.__webglTexture,Ce),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ft(C,M,X){if(s.bindRenderbuffer(s.RENDERBUFFER,C),M.depthBuffer){const ce=M.depthTexture,Me=ce&&ce.isDepthTexture?ce.type:null,Ce=z(M.stencilBuffer,Me),Ue=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;nt(M)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,wt(M),Ce,M.width,M.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,wt(M),Ce,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Ce,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ue,s.RENDERBUFFER,C)}else{const ce=M.textures;for(let Me=0;Me<ce.length;Me++){const Ce=ce[Me],Ue=u.convert(Ce.format,Ce.colorSpace),fe=u.convert(Ce.type),_e=P(Ce.internalFormat,Ue,fe,Ce.normalized,Ce.colorSpace);nt(M)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,wt(M),_e,M.width,M.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,wt(M),_e,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,_e,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function lt(C,M,X){const ce=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Me=r.get(M.depthTexture);if(Me.__renderTarget=M,(!Me.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ce){if(Me.__webglInit===void 0&&(Me.__webglInit=!0,M.depthTexture.addEventListener("dispose",G)),Me.__webglTexture===void 0){Me.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,Me.__webglTexture),Pe(s.TEXTURE_CUBE_MAP,M.depthTexture);const Le=u.convert(M.depthTexture.format),Be=u.convert(M.depthTexture.type);let Te;M.depthTexture.format===_a?Te=s.DEPTH_COMPONENT24:M.depthTexture.format===Er&&(Te=s.DEPTH24_STENCIL8);for(let we=0;we<6;we++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Te,M.width,M.height,0,Le,Be,null)}}else se(M.depthTexture,0);const Ce=Me.__webglTexture,Ue=wt(M),fe=ce?s.TEXTURE_CUBE_MAP_POSITIVE_X+X:s.TEXTURE_2D,_e=M.depthTexture.format===Er?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===_a)nt(M)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,fe,Ce,0,Ue):s.framebufferTexture2D(s.FRAMEBUFFER,_e,fe,Ce,0);else if(M.depthTexture.format===Er)nt(M)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,fe,Ce,0,Ue):s.framebufferTexture2D(s.FRAMEBUFFER,_e,fe,Ce,0);else throw new Error("Unknown depthTexture format")}function At(C){const M=r.get(C),X=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const ce=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ce){const Me=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ce.removeEventListener("dispose",Me)};ce.addEventListener("dispose",Me),M.__depthDisposeCallback=Me}M.__boundDepthTexture=ce}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(X)for(let ce=0;ce<6;ce++)lt(M.__webglFramebuffer[ce],C,ce);else{const ce=C.texture.mipmaps;ce&&ce.length>0?lt(M.__webglFramebuffer[0],C,0):lt(M.__webglFramebuffer,C,0)}else if(X){M.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(i.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[ce]),M.__webglDepthbuffer[ce]===void 0)M.__webglDepthbuffer[ce]=s.createRenderbuffer(),Ft(M.__webglDepthbuffer[ce],C,!1);else{const Me=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=M.__webglDepthbuffer[ce];s.bindRenderbuffer(s.RENDERBUFFER,Ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,Ce)}}else{const ce=C.texture.mipmaps;if(ce&&ce.length>0?i.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),Ft(M.__webglDepthbuffer,C,!1);else{const Me=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,Ce)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Pt(C,M,X){const ce=r.get(C);M!==void 0&&Ze(ce.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&At(C)}function dt(C){const M=C.texture,X=r.get(C),ce=r.get(M);C.addEventListener("dispose",T);const Me=C.textures,Ce=C.isWebGLCubeRenderTarget===!0,Ue=Me.length>1;if(Ue||(ce.__webglTexture===void 0&&(ce.__webglTexture=s.createTexture()),ce.__version=M.version,d.memory.textures++),Ce){X.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer[fe]=[];for(let _e=0;_e<M.mipmaps.length;_e++)X.__webglFramebuffer[fe][_e]=s.createFramebuffer()}else X.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer=[];for(let fe=0;fe<M.mipmaps.length;fe++)X.__webglFramebuffer[fe]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(Ue)for(let fe=0,_e=Me.length;fe<_e;fe++){const Le=r.get(Me[fe]);Le.__webglTexture===void 0&&(Le.__webglTexture=s.createTexture(),d.memory.textures++)}if(C.samples>0&&nt(C)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let fe=0;fe<Me.length;fe++){const _e=Me[fe];X.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[fe]);const Le=u.convert(_e.format,_e.colorSpace),Be=u.convert(_e.type),Te=P(_e.internalFormat,Le,Be,_e.normalized,_e.colorSpace,C.isXRRenderTarget===!0),we=wt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,we,Te,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,X.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),Ft(X.__webglDepthRenderbuffer,C,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ce){i.bindTexture(s.TEXTURE_CUBE_MAP,ce.__webglTexture),Pe(s.TEXTURE_CUBE_MAP,M);for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)Ze(X.__webglFramebuffer[fe][_e],C,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,_e);else Ze(X.__webglFramebuffer[fe],C,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);v(M)&&w(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ue){for(let fe=0,_e=Me.length;fe<_e;fe++){const Le=Me[fe],Be=r.get(Le);let Te=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Te=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Te,Be.__webglTexture),Pe(Te,Le),Ze(X.__webglFramebuffer,C,Le,s.COLOR_ATTACHMENT0+fe,Te,0),v(Le)&&w(Te)}i.unbindTexture()}else{let fe=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(fe=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(fe,ce.__webglTexture),Pe(fe,M),M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)Ze(X.__webglFramebuffer[_e],C,M,s.COLOR_ATTACHMENT0,fe,_e);else Ze(X.__webglFramebuffer,C,M,s.COLOR_ATTACHMENT0,fe,0);v(M)&&w(fe),i.unbindTexture()}C.depthBuffer&&At(C)}function ke(C){const M=C.textures;for(let X=0,ce=M.length;X<ce;X++){const Me=M[X];if(v(Me)){const Ce=O(C),Ue=r.get(Me).__webglTexture;i.bindTexture(Ce,Ue),w(Ce),i.unbindTexture()}}}const Qe=[],ht=[];function V(C){if(C.samples>0){if(nt(C)===!1){const M=C.textures,X=C.width,ce=C.height;let Me=s.COLOR_BUFFER_BIT;const Ce=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=r.get(C),fe=M.length>1;if(fe)for(let Le=0;Le<M.length;Le++)i.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const _e=C.texture.mipmaps;_e&&_e.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Le=0;Le<M.length;Le++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Me|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Me|=s.STENCIL_BUFFER_BIT)),fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[Le]);const Be=r.get(M[Le]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Be,0)}s.blitFramebuffer(0,0,X,ce,0,0,X,ce,Me,s.NEAREST),m===!0&&(Qe.length=0,ht.length=0,Qe.push(s.COLOR_ATTACHMENT0+Le),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Qe.push(Ce),ht.push(Ce),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ht)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Qe))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let Le=0;Le<M.length;Le++){i.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[Le]);const Be=r.get(M[Le]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.TEXTURE_2D,Be,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&m){const M=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function wt(C){return Math.min(l.maxSamples,C.samples)}function nt(C){const M=r.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ut(C){const M=d.render.frame;_.get(C)!==M&&(_.set(C,M),C.update())}function Re(C,M){const X=C.colorSpace,ce=C.format,Me=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||X!==Uc&&X!==Za&&(Rt.getTransfer(X)===Vt?(ce!==Ti||Me!==pi)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",X)),M}function Tt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=N,this.resetTextureUnits=de,this.getTextureUnits=he,this.setTextureUnits=q,this.setTexture2D=se,this.setTexture2DArray=ge,this.setTexture3D=U,this.setTextureCube=K,this.rebindTextures=Pt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=Ze,this.useMultisampledRTT=nt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function dA(s,e){function i(r,l=Za){let u;const d=Rt.getTransfer(l);if(r===pi)return s.UNSIGNED_BYTE;if(r===Ch)return s.UNSIGNED_SHORT_4_4_4_4;if(r===wh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===G_)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===V_)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===z_)return s.BYTE;if(r===H_)return s.SHORT;if(r===Bo)return s.UNSIGNED_SHORT;if(r===Rh)return s.INT;if(r===Hi)return s.UNSIGNED_INT;if(r===Ii)return s.FLOAT;if(r===ga)return s.HALF_FLOAT;if(r===k_)return s.ALPHA;if(r===X_)return s.RGB;if(r===Ti)return s.RGBA;if(r===_a)return s.DEPTH_COMPONENT;if(r===Er)return s.DEPTH_STENCIL;if(r===W_)return s.RED;if(r===Dh)return s.RED_INTEGER;if(r===Ar)return s.RG;if(r===Uh)return s.RG_INTEGER;if(r===Nh)return s.RGBA_INTEGER;if(r===Ec||r===Tc||r===Ac||r===Rc)if(d===Vt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Ec)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Tc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ac)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Rc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Ec)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Tc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ac)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Rc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Vd||r===kd||r===Xd||r===Wd)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Vd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===kd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Xd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Wd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===qd||r===Yd||r===jd||r===Zd||r===Kd||r===wc||r===Qd)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===qd||r===Yd)return d===Vt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===jd)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===Zd)return u.COMPRESSED_R11_EAC;if(r===Kd)return u.COMPRESSED_SIGNED_R11_EAC;if(r===wc)return u.COMPRESSED_RG11_EAC;if(r===Qd)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Jd||r===$d||r===eh||r===th||r===nh||r===ih||r===ah||r===rh||r===sh||r===oh||r===lh||r===ch||r===uh||r===fh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Jd)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===$d)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===eh)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===th)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===nh)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ih)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ah)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===rh)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===sh)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===oh)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===lh)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ch)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===uh)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===fh)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===dh||r===hh||r===ph)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===dh)return d===Vt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===hh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ph)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===mh||r===gh||r===Dc||r===_h)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===mh)return u.COMPRESSED_RED_RGTC1_EXT;if(r===gh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Dc)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===_h)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===zo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const hA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class mA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new iv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Gi({vertexShader:hA,fragmentShader:pA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new va(new zc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gA extends Cr{constructor(e,i){super();const r=this;let l=null,u=1,d=null,p="local-floor",m=1,h=null,_=null,y=null,g=null,b=null,E=null;const D=typeof XRWebGLBinding<"u",S=new mA,v={},w=i.getContextAttributes();let O=null,P=null;const z=[],L=[],G=new Yt;let T=null;const I=new bi;I.viewport=new ln;const Q=new bi;Q.viewport=new ln;const H=[I,Q],J=new TM;let de=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let Ee=z[te];return Ee===void 0&&(Ee=new od,z[te]=Ee),Ee.getTargetRaySpace()},this.getControllerGrip=function(te){let Ee=z[te];return Ee===void 0&&(Ee=new od,z[te]=Ee),Ee.getGripSpace()},this.getHand=function(te){let Ee=z[te];return Ee===void 0&&(Ee=new od,z[te]=Ee),Ee.getHandSpace()};function q(te){const Ee=L.indexOf(te.inputSource);if(Ee===-1)return;const Se=z[Ee];Se!==void 0&&(Se.update(te.inputSource,te.frame,h||d),Se.dispatchEvent({type:te.type,data:te.inputSource}))}function N(){l.removeEventListener("select",q),l.removeEventListener("selectstart",q),l.removeEventListener("selectend",q),l.removeEventListener("squeeze",q),l.removeEventListener("squeezestart",q),l.removeEventListener("squeezeend",q),l.removeEventListener("end",N),l.removeEventListener("inputsourceschange",B);for(let te=0;te<z.length;te++){const Ee=L[te];Ee!==null&&(L[te]=null,z[te].disconnect(Ee))}de=null,he=null,S.reset();for(const te in v)delete v[te];e.setRenderTarget(O),b=null,g=null,y=null,l=null,P=null,Pe.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){u=te,r.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){p=te,r.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(te){h=te},this.getBaseLayer=function(){return g!==null?g:b},this.getBinding=function(){return y===null&&D&&(y=new XRWebGLBinding(l,i)),y},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(te){if(l=te,l!==null){if(O=e.getRenderTarget(),l.addEventListener("select",q),l.addEventListener("selectstart",q),l.addEventListener("selectend",q),l.addEventListener("squeeze",q),l.addEventListener("squeezestart",q),l.addEventListener("squeezeend",q),l.addEventListener("end",N),l.addEventListener("inputsourceschange",B),w.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(G),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,qe=null,et=null;w.depth&&(et=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Se=w.stencil?Er:_a,qe=w.stencil?zo:Hi);const Ze={colorFormat:i.RGBA8,depthFormat:et,scaleFactor:u};y=this.getBinding(),g=y.createProjectionLayer(Ze),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),P=new zi(g.textureWidth,g.textureHeight,{format:Ti,type:pi,depthTexture:new As(g.textureWidth,g.textureHeight,qe,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Se={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:u};b=new XRWebGLLayer(l,i,Se),l.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),P=new zi(b.framebufferWidth,b.framebufferHeight,{format:Ti,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),Pe.setContext(l),Pe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function B(te){for(let Ee=0;Ee<te.removed.length;Ee++){const Se=te.removed[Ee],qe=L.indexOf(Se);qe>=0&&(L[qe]=null,z[qe].disconnect(Se))}for(let Ee=0;Ee<te.added.length;Ee++){const Se=te.added[Ee];let qe=L.indexOf(Se);if(qe===-1){for(let Ze=0;Ze<z.length;Ze++)if(Ze>=L.length){L.push(Se),qe=Ze;break}else if(L[Ze]===null){L[Ze]=Se,qe=Ze;break}if(qe===-1)break}const et=z[qe];et&&et.connect(Se)}}const se=new re,ge=new re;function U(te,Ee,Se){se.setFromMatrixPosition(Ee.matrixWorld),ge.setFromMatrixPosition(Se.matrixWorld);const qe=se.distanceTo(ge),et=Ee.projectionMatrix.elements,Ze=Se.projectionMatrix.elements,Ft=et[14]/(et[10]-1),lt=et[14]/(et[10]+1),At=(et[9]+1)/et[5],Pt=(et[9]-1)/et[5],dt=(et[8]-1)/et[0],ke=(Ze[8]+1)/Ze[0],Qe=Ft*dt,ht=Ft*ke,V=qe/(-dt+ke),wt=V*-dt;if(Ee.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(wt),te.translateZ(V),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),et[10]===-1)te.projectionMatrix.copy(Ee.projectionMatrix),te.projectionMatrixInverse.copy(Ee.projectionMatrixInverse);else{const nt=Ft+V,ut=lt+V,Re=Qe-wt,Tt=ht+(qe-wt),C=At*lt/ut*nt,M=Pt*lt/ut*nt;te.projectionMatrix.makePerspective(Re,Tt,C,M,nt,ut),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function K(te,Ee){Ee===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(Ee.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(l===null)return;let Ee=te.near,Se=te.far;S.texture!==null&&(S.depthNear>0&&(Ee=S.depthNear),S.depthFar>0&&(Se=S.depthFar)),J.near=Q.near=I.near=Ee,J.far=Q.far=I.far=Se,(de!==J.near||he!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),de=J.near,he=J.far),J.layers.mask=te.layers.mask|6,I.layers.mask=J.layers.mask&-5,Q.layers.mask=J.layers.mask&-3;const qe=te.parent,et=J.cameras;K(J,qe);for(let Ze=0;Ze<et.length;Ze++)K(et[Ze],qe);et.length===2?U(J,I,Q):J.projectionMatrix.copy(I.projectionMatrix),ue(te,J,qe)};function ue(te,Ee,Se){Se===null?te.matrix.copy(Ee.matrixWorld):(te.matrix.copy(Se.matrixWorld),te.matrix.invert(),te.matrix.multiply(Ee.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(Ee.projectionMatrix),te.projectionMatrixInverse.copy(Ee.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=xh*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(g===null&&b===null))return m},this.setFoveation=function(te){m=te,g!==null&&(g.fixedFoveation=te),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=te)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(J)},this.getCameraTexture=function(te){return v[te]};let ye=null;function Ne(te,Ee){if(_=Ee.getViewerPose(h||d),E=Ee,_!==null){const Se=_.views;b!==null&&(e.setRenderTargetFramebuffer(P,b.framebuffer),e.setRenderTarget(P));let qe=!1;Se.length!==J.cameras.length&&(J.cameras.length=0,qe=!0);for(let lt=0;lt<Se.length;lt++){const At=Se[lt];let Pt=null;if(b!==null)Pt=b.getViewport(At);else{const ke=y.getViewSubImage(g,At);Pt=ke.viewport,lt===0&&(e.setRenderTargetTextures(P,ke.colorTexture,ke.depthStencilTexture),e.setRenderTarget(P))}let dt=H[lt];dt===void 0&&(dt=new bi,dt.layers.enable(lt),dt.viewport=new ln,H[lt]=dt),dt.matrix.fromArray(At.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(At.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),lt===0&&(J.matrix.copy(dt.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),qe===!0&&J.cameras.push(dt)}const et=l.enabledFeatures;if(et&&et.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&D){y=r.getBinding();const lt=y.getDepthInformation(Se[0]);lt&&lt.isValid&&lt.texture&&S.init(lt,l.renderState)}if(et&&et.includes("camera-access")&&D){e.state.unbindTexture(),y=r.getBinding();for(let lt=0;lt<Se.length;lt++){const At=Se[lt].camera;if(At){let Pt=v[At];Pt||(Pt=new iv,v[At]=Pt);const dt=y.getCameraImage(At);Pt.sourceTexture=dt}}}}for(let Se=0;Se<z.length;Se++){const qe=L[Se],et=z[Se];qe!==null&&et!==void 0&&et.update(qe,Ee,h||d)}ye&&ye(te,Ee),Ee.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Ee}),E=null}const Pe=new sv;Pe.setAnimationLoop(Ne),this.setAnimationLoop=function(te){ye=te},this.dispose=function(){}}}const _A=new hn,hv=new ft;hv.set(-1,0,0,0,1,0,0,0,1);function vA(s,e){function i(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function r(S,v){v.color.getRGB(S.fogColor.value,av(s)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function l(S,v,w,O,P){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?u(S,v):v.isMeshLambertMaterial?(u(S,v),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(u(S,v),y(S,v)):v.isMeshPhongMaterial?(u(S,v),_(S,v),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(u(S,v),g(S,v),v.isMeshPhysicalMaterial&&b(S,v,P)):v.isMeshMatcapMaterial?(u(S,v),E(S,v)):v.isMeshDepthMaterial?u(S,v):v.isMeshDistanceMaterial?(u(S,v),D(S,v)):v.isMeshNormalMaterial?u(S,v):v.isLineBasicMaterial?(d(S,v),v.isLineDashedMaterial&&p(S,v)):v.isPointsMaterial?m(S,v,w,O):v.isSpriteMaterial?h(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,i(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===Wn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,i(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===Wn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,i(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,i(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const w=e.get(v),O=w.envMap,P=w.envMapRotation;O&&(S.envMap.value=O,S.envMapRotation.value.setFromMatrix4(_A.makeRotationFromEuler(P)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(hv),S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,S.aoMapTransform))}function d(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform))}function p(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function m(S,v,w,O){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*w,S.scale.value=O*.5,v.map&&(S.map.value=v.map,i(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function h(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function _(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function y(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function g(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function b(S,v,w){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Wn&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=w.texture,S.transmissionSamplerSize.value.set(w.width,w.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,v){v.matcap&&(S.matcap.value=v.matcap)}function D(S,v){const w=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(w.matrixWorld),S.nearDistance.value=w.shadow.camera.near,S.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function xA(s,e,i,r){let l={},u={},d=[];const p=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,O){const P=O.program;r.uniformBlockBinding(w,P)}function h(w,O){let P=l[w.id];P===void 0&&(E(w),P=_(w),l[w.id]=P,w.addEventListener("dispose",S));const z=O.program;r.updateUBOMapping(w,z);const L=e.render.frame;u[w.id]!==L&&(g(w),u[w.id]=L)}function _(w){const O=y();w.__bindingPointIndex=O;const P=s.createBuffer(),z=w.__size,L=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,z,L),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,O,P),P}function y(){for(let w=0;w<p;w++)if(d.indexOf(w)===-1)return d.push(w),w;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const O=l[w.id],P=w.uniforms,z=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,O);for(let L=0,G=P.length;L<G;L++){const T=Array.isArray(P[L])?P[L]:[P[L]];for(let I=0,Q=T.length;I<Q;I++){const H=T[I];if(b(H,L,I,z)===!0){const J=H.__offset,de=Array.isArray(H.value)?H.value:[H.value];let he=0;for(let q=0;q<de.length;q++){const N=de[q],B=D(N);typeof N=="number"||typeof N=="boolean"?(H.__data[0]=N,s.bufferSubData(s.UNIFORM_BUFFER,J+he,H.__data)):N.isMatrix3?(H.__data[0]=N.elements[0],H.__data[1]=N.elements[1],H.__data[2]=N.elements[2],H.__data[3]=0,H.__data[4]=N.elements[3],H.__data[5]=N.elements[4],H.__data[6]=N.elements[5],H.__data[7]=0,H.__data[8]=N.elements[6],H.__data[9]=N.elements[7],H.__data[10]=N.elements[8],H.__data[11]=0):ArrayBuffer.isView(N)?H.__data.set(new N.constructor(N.buffer,N.byteOffset,H.__data.length)):(N.toArray(H.__data,he),he+=B.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,J,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function b(w,O,P,z){const L=w.value,G=O+"_"+P;if(z[G]===void 0)return typeof L=="number"||typeof L=="boolean"?z[G]=L:ArrayBuffer.isView(L)?z[G]=L.slice():z[G]=L.clone(),!0;{const T=z[G];if(typeof L=="number"||typeof L=="boolean"){if(T!==L)return z[G]=L,!0}else{if(ArrayBuffer.isView(L))return!0;if(T.equals(L)===!1)return T.copy(L),!0}}return!1}function E(w){const O=w.uniforms;let P=0;const z=16;for(let G=0,T=O.length;G<T;G++){const I=Array.isArray(O[G])?O[G]:[O[G]];for(let Q=0,H=I.length;Q<H;Q++){const J=I[Q],de=Array.isArray(J.value)?J.value:[J.value];for(let he=0,q=de.length;he<q;he++){const N=de[he],B=D(N),se=P%z,ge=se%B.boundary,U=se+ge;P+=ge,U!==0&&z-U<B.storage&&(P+=z-U),J.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=P,P+=B.storage}}}const L=P%z;return L>0&&(P+=z-L),w.__size=P,w.__cache={},this}function D(w){const O={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(O.boundary=4,O.storage=4):w.isVector2?(O.boundary=8,O.storage=8):w.isVector3||w.isColor?(O.boundary=16,O.storage=12):w.isVector4?(O.boundary=16,O.storage=16):w.isMatrix3?(O.boundary=48,O.storage=48):w.isMatrix4?(O.boundary=64,O.storage=64):w.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(O.boundary=16,O.storage=w.byteLength):rt("WebGLRenderer: Unsupported uniform value type.",w),O}function S(w){const O=w.target;O.removeEventListener("dispose",S);const P=d.indexOf(O.__bindingPointIndex);d.splice(P,1),s.deleteBuffer(l[O.id]),delete l[O.id],delete u[O.id]}function v(){for(const w in l)s.deleteBuffer(l[w]);d=[],l={},u={}}return{bind:m,update:h,dispose:v}}const SA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pi=null;function yA(){return Pi===null&&(Pi=new fM(SA,16,16,Ar,ga),Pi.name="DFG_LUT",Pi.minFilter=Ln,Pi.magFilter=Ln,Pi.wrapS=da,Pi.wrapT=da,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}class MA{constructor(e={}){const{canvas:i=Vy(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:g=!1,outputBufferType:b=pi}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=d;const D=b,S=new Set([Nh,Uh,Dh]),v=new Set([pi,Hi,Bo,zo,Ch,wh]),w=new Uint32Array(4),O=new Int32Array(4),P=new re;let z=null,L=null;const G=[],T=[];let I=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Q=this;let H=!1,J=null;this._outputColorSpace=hi;let de=0,he=0,q=null,N=-1,B=null;const se=new ln,ge=new ln;let U=null;const K=new Lt(0);let ue=0,ye=i.width,Ne=i.height,Pe=1,te=null,Ee=null;const Se=new ln(0,0,ye,Ne),qe=new ln(0,0,ye,Ne);let et=!1;const Ze=new ev;let Ft=!1,lt=!1;const At=new hn,Pt=new re,dt=new ln,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qe=!1;function ht(){return q===null?Pe:1}let V=r;function wt(A,Y){return i.getContext(A,Y)}try{const A={alpha:!0,depth:l,stencil:u,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:_,failIfMajorPerformanceCaveat:y};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ah}`),i.addEventListener("webglcontextlost",be,!1),i.addEventListener("webglcontextrestored",Ye,!1),i.addEventListener("webglcontextcreationerror",ct,!1),V===null){const Y="webgl2";if(V=wt(Y,A),V===null)throw wt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Ut("WebGLRenderer: "+A.message),A}let nt,ut,Re,Tt,C,M,X,ce,Me,Ce,Ue,fe,_e,Le,Be,Te,we,Je,it,xt,k,Ae,pe;function ze(){nt=new y1(V),nt.init(),k=new dA(V,nt),ut=new h1(V,nt,e,k),Re=new uA(V,nt),ut.reversedDepthBuffer&&g&&Re.buffers.depth.setReversed(!0),Tt=new E1(V),C=new KT,M=new fA(V,nt,Re,C,ut,k,Tt),X=new S1(Q),ce=new CM(V),Ae=new f1(V,ce),Me=new M1(V,ce,Tt,Ae),Ce=new A1(V,Me,ce,Ae,Tt),Je=new T1(V,ut,M),Be=new p1(C),Ue=new ZT(Q,X,nt,ut,Ae,Be),fe=new vA(Q,C),_e=new JT,Le=new aA(nt),we=new u1(Q,X,Re,Ce,E,m),Te=new cA(Q,Ce,ut),pe=new xA(V,Tt,ut,Re),it=new d1(V,nt,Tt),xt=new b1(V,nt,Tt),Tt.programs=Ue.programs,Q.capabilities=ut,Q.extensions=nt,Q.properties=C,Q.renderLists=_e,Q.shadowMap=Te,Q.state=Re,Q.info=Tt}ze(),D!==pi&&(I=new C1(D,i.width,i.height,l,u));const De=new gA(Q,V);this.xr=De,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=nt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=nt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Pe},this.setPixelRatio=function(A){A!==void 0&&(Pe=A,this.setSize(ye,Ne,!1))},this.getSize=function(A){return A.set(ye,Ne)},this.setSize=function(A,Y,oe=!0){if(De.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}ye=A,Ne=Y,i.width=Math.floor(A*Pe),i.height=Math.floor(Y*Pe),oe===!0&&(i.style.width=A+"px",i.style.height=Y+"px"),I!==null&&I.setSize(i.width,i.height),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(ye*Pe,Ne*Pe).floor()},this.setDrawingBufferSize=function(A,Y,oe){ye=A,Ne=Y,Pe=oe,i.width=Math.floor(A*oe),i.height=Math.floor(Y*oe),this.setViewport(0,0,A,Y)},this.setEffects=function(A){if(D===pi){Ut("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Y=0;Y<A.length;Y++)if(A[Y].isOutputPass===!0){rt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(se)},this.getViewport=function(A){return A.copy(Se)},this.setViewport=function(A,Y,oe,ie){A.isVector4?Se.set(A.x,A.y,A.z,A.w):Se.set(A,Y,oe,ie),Re.viewport(se.copy(Se).multiplyScalar(Pe).round())},this.getScissor=function(A){return A.copy(qe)},this.setScissor=function(A,Y,oe,ie){A.isVector4?qe.set(A.x,A.y,A.z,A.w):qe.set(A,Y,oe,ie),Re.scissor(ge.copy(qe).multiplyScalar(Pe).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(A){Re.setScissorTest(et=A)},this.setOpaqueSort=function(A){te=A},this.setTransparentSort=function(A){Ee=A},this.getClearColor=function(A){return A.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,oe=!0){let ie=0;if(A){let ee=!1;if(q!==null){const Oe=q.texture.format;ee=S.has(Oe)}if(ee){const Oe=q.texture.type,He=v.has(Oe),Ie=we.getClearColor(),We=we.getClearAlpha(),Ge=Ie.r,ot=Ie.g,pt=Ie.b;He?(w[0]=Ge,w[1]=ot,w[2]=pt,w[3]=We,V.clearBufferuiv(V.COLOR,0,w)):(O[0]=Ge,O[1]=ot,O[2]=pt,O[3]=We,V.clearBufferiv(V.COLOR,0,O))}else ie|=V.COLOR_BUFFER_BIT}Y&&(ie|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ie|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&V.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),J=A},this.dispose=function(){i.removeEventListener("webglcontextlost",be,!1),i.removeEventListener("webglcontextrestored",Ye,!1),i.removeEventListener("webglcontextcreationerror",ct,!1),we.dispose(),_e.dispose(),Le.dispose(),C.dispose(),X.dispose(),Ce.dispose(),Ae.dispose(),pe.dispose(),Ue.dispose(),De.dispose(),De.removeEventListener("sessionstart",Xo),De.removeEventListener("sessionend",Ds),Yn.stop()};function be(A){A.preventDefault(),N0("WebGLRenderer: Context Lost."),H=!0}function Ye(){N0("WebGLRenderer: Context Restored."),H=!1;const A=Tt.autoReset,Y=Te.enabled,oe=Te.autoUpdate,ie=Te.needsUpdate,ee=Te.type;ze(),Tt.autoReset=A,Te.enabled=Y,Te.autoUpdate=oe,Te.needsUpdate=ie,Te.type=ee}function ct(A){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Bt(A){const Y=A.target;Y.removeEventListener("dispose",Bt),st(Y)}function st(A){Qt(A),C.remove(A)}function Qt(A){const Y=C.get(A).programs;Y!==void 0&&(Y.forEach(function(oe){Ue.releaseProgram(oe)}),A.isShaderMaterial&&Ue.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,oe,ie,ee,Oe){Y===null&&(Y=ke);const He=ee.isMesh&&ee.matrixWorld.determinant()<0,Ie=xa(A,Y,oe,ie,ee);Re.setMaterial(ie,He);let We=oe.index,Ge=1;if(ie.wireframe===!0){if(We=Me.getWireframeAttribute(oe),We===void 0)return;Ge=2}const ot=oe.drawRange,pt=oe.attributes.position;let je=ot.start*Ge,Ot=(ot.start+ot.count)*Ge;Oe!==null&&(je=Math.max(je,Oe.start*Ge),Ot=Math.min(Ot,(Oe.start+Oe.count)*Ge)),We!==null?(je=Math.max(je,0),Ot=Math.min(Ot,We.count)):pt!=null&&(je=Math.max(je,0),Ot=Math.min(Ot,pt.count));const Zt=Ot-je;if(Zt<0||Zt===1/0)return;Ae.setup(ee,ie,Ie,oe,We);let Jt,gt=it;if(We!==null&&(Jt=ce.get(We),gt=xt,gt.setIndex(Jt)),ee.isMesh)ie.wireframe===!0?(Re.setLineWidth(ie.wireframeLinewidth*ht()),gt.setMode(V.LINES)):gt.setMode(V.TRIANGLES);else if(ee.isLine){let cn=ie.linewidth;cn===void 0&&(cn=1),Re.setLineWidth(cn*ht()),ee.isLineSegments?gt.setMode(V.LINES):ee.isLineLoop?gt.setMode(V.LINE_LOOP):gt.setMode(V.LINE_STRIP)}else ee.isPoints?gt.setMode(V.POINTS):ee.isSprite&&gt.setMode(V.TRIANGLES);if(ee.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))gt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const cn=ee._multiDrawStarts,Ve=ee._multiDrawCounts,En=ee._multiDrawCount,_t=We?ce.get(We).bytesPerElement:1,On=C.get(ie).currentProgram.getUniforms();for(let jn=0;jn<En;jn++)On.setValue(V,"_gl_DrawID",jn),gt.render(cn[jn]/_t,Ve[jn])}else if(ee.isInstancedMesh)gt.renderInstances(je,Zt,ee.count);else if(oe.isInstancedBufferGeometry){const cn=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Ve=Math.min(oe.instanceCount,cn);gt.renderInstances(je,Zt,Ve)}else gt.render(je,Zt)};function bn(A,Y,oe){A.transparent===!0&&A.side===fa&&A.forceSinglePass===!1?(A.side=Wn,A.needsUpdate=!0,tn(A,Y,oe),A.side=Qa,A.needsUpdate=!0,tn(A,Y,oe),A.side=fa):tn(A,Y,oe)}this.compile=function(A,Y,oe=null){oe===null&&(oe=A),L=Le.get(oe),L.init(Y),T.push(L),oe.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Y.layers)&&(L.pushLight(ee),ee.castShadow&&L.pushShadow(ee))}),A!==oe&&A.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Y.layers)&&(L.pushLight(ee),ee.castShadow&&L.pushShadow(ee))}),L.setupLights();const ie=new Set;return A.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Oe=ee.material;if(Oe)if(Array.isArray(Oe))for(let He=0;He<Oe.length;He++){const Ie=Oe[He];bn(Ie,oe,ee),ie.add(Ie)}else bn(Oe,oe,ee),ie.add(Oe)}),L=T.pop(),ie},this.compileAsync=function(A,Y,oe=null){const ie=this.compile(A,Y,oe);return new Promise(ee=>{function Oe(){if(ie.forEach(function(He){C.get(He).currentProgram.isReady()&&ie.delete(He)}),ie.size===0){ee(A);return}setTimeout(Oe,10)}nt.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Ja=null;function Vc(A){Ja&&Ja(A)}function Xo(){Yn.stop()}function Ds(){Yn.start()}const Yn=new sv;Yn.setAnimationLoop(Vc),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(A){Ja=A,De.setAnimationLoop(A),A===null?Yn.stop():Yn.start()},De.addEventListener("sessionstart",Xo),De.addEventListener("sessionend",Ds),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;J!==null&&J.renderStart(A,Y);const oe=De.enabled===!0&&De.isPresenting===!0,ie=I!==null&&(q===null||oe)&&I.begin(Q,q);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(De.cameraAutoUpdate===!0&&De.updateCamera(Y),Y=De.getCamera()),A.isScene===!0&&A.onBeforeRender(Q,A,Y,q),L=Le.get(A,T.length),L.init(Y),L.state.textureUnits=M.getTextureUnits(),T.push(L),At.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Ze.setFromProjectionMatrix(At,Fi,Y.reversedDepth),lt=this.localClippingEnabled,Ft=Be.init(this.clippingPlanes,lt),z=_e.get(A,G.length),z.init(),G.push(z),De.enabled===!0&&De.isPresenting===!0){const He=Q.xr.getDepthSensingMesh();He!==null&&$a(He,Y,-1/0,Q.sortObjects)}$a(A,Y,0,Q.sortObjects),z.finish(),Q.sortObjects===!0&&z.sort(te,Ee),Qe=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,Qe&&we.addToRenderList(z,A),this.info.render.frame++,Ft===!0&&Be.beginShadows();const ee=L.state.shadowsArray;if(Te.render(ee,A,Y),Ft===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie&&I.hasRenderPass())===!1){const He=z.opaque,Ie=z.transmissive;if(L.setupLights(),Y.isArrayCamera){const We=Y.cameras;if(Ie.length>0)for(let Ge=0,ot=We.length;Ge<ot;Ge++){const pt=We[Ge];ki(He,Ie,A,pt)}Qe&&we.render(A);for(let Ge=0,ot=We.length;Ge<ot;Ge++){const pt=We[Ge];Vi(z,A,pt,pt.viewport)}}else Ie.length>0&&ki(He,Ie,A,Y),Qe&&we.render(A),Vi(z,A,Y)}q!==null&&he===0&&(M.updateMultisampleRenderTarget(q),M.updateRenderTargetMipmap(q)),ie&&I.end(Q),A.isScene===!0&&A.onAfterRender(Q,A,Y),Ae.resetDefaultState(),N=-1,B=null,T.pop(),T.length>0?(L=T[T.length-1],M.setTextureUnits(L.state.textureUnits),Ft===!0&&Be.setGlobalState(Q.clippingPlanes,L.state.camera)):L=null,G.pop(),G.length>0?z=G[G.length-1]:z=null,J!==null&&J.renderEnd()};function $a(A,Y,oe,ie){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)oe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLightProbeGrid)L.pushLightProbeGrid(A);else if(A.isLight)L.pushLight(A),A.castShadow&&L.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ze.intersectsSprite(A)){ie&&dt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(At);const He=Ce.update(A),Ie=A.material;Ie.visible&&z.push(A,He,Ie,oe,dt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ze.intersectsObject(A))){const He=Ce.update(A),Ie=A.material;if(ie&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),dt.copy(A.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),dt.copy(He.boundingSphere.center)),dt.applyMatrix4(A.matrixWorld).applyMatrix4(At)),Array.isArray(Ie)){const We=He.groups;for(let Ge=0,ot=We.length;Ge<ot;Ge++){const pt=We[Ge],je=Ie[pt.materialIndex];je&&je.visible&&z.push(A,He,je,oe,dt.z,pt)}}else Ie.visible&&z.push(A,He,Ie,oe,dt.z,null)}}const Oe=A.children;for(let He=0,Ie=Oe.length;He<Ie;He++)$a(Oe[He],Y,oe,ie)}function Vi(A,Y,oe,ie){const{opaque:ee,transmissive:Oe,transparent:He}=A;L.setupLightsView(oe),Ft===!0&&Be.setGlobalState(Q.clippingPlanes,oe),ie&&Re.viewport(se.copy(ie)),ee.length>0&&Ai(ee,Y,oe),Oe.length>0&&Ai(Oe,Y,oe),He.length>0&&Ai(He,Y,oe),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function ki(A,Y,oe,ie){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ie.id]===void 0){const je=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ie.id]=new zi(1,1,{generateMipmaps:!0,type:je?ga:pi,minFilter:br,samples:Math.max(4,ut.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const Oe=L.state.transmissionRenderTarget[ie.id],He=ie.viewport||se;Oe.setSize(He.z*Q.transmissionResolutionScale,He.w*Q.transmissionResolutionScale);const Ie=Q.getRenderTarget(),We=Q.getActiveCubeFace(),Ge=Q.getActiveMipmapLevel();Q.setRenderTarget(Oe),Q.getClearColor(K),ue=Q.getClearAlpha(),ue<1&&Q.setClearColor(16777215,.5),Q.clear(),Qe&&we.render(oe);const ot=Q.toneMapping;Q.toneMapping=Bi;const pt=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),L.setupLightsView(ie),Ft===!0&&Be.setGlobalState(Q.clippingPlanes,ie),Ai(A,oe,ie),M.updateMultisampleRenderTarget(Oe),M.updateRenderTargetMipmap(Oe),nt.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Ot=0,Zt=Y.length;Ot<Zt;Ot++){const Jt=Y[Ot],{object:gt,geometry:cn,material:Ve,group:En}=Jt;if(Ve.side===fa&&gt.layers.test(ie.layers)){const _t=Ve.side;Ve.side=Wn,Ve.needsUpdate=!0,Xi(gt,oe,ie,cn,Ve,En),Ve.side=_t,Ve.needsUpdate=!0,je=!0}}je===!0&&(M.updateMultisampleRenderTarget(Oe),M.updateRenderTargetMipmap(Oe))}Q.setRenderTarget(Ie,We,Ge),Q.setClearColor(K,ue),pt!==void 0&&(ie.viewport=pt),Q.toneMapping=ot}function Ai(A,Y,oe){const ie=Y.isScene===!0?Y.overrideMaterial:null;for(let ee=0,Oe=A.length;ee<Oe;ee++){const He=A[ee],{object:Ie,geometry:We,group:Ge}=He;let ot=He.material;ot.allowOverride===!0&&ie!==null&&(ot=ie),Ie.layers.test(oe.layers)&&Xi(Ie,Y,oe,We,ot,Ge)}}function Xi(A,Y,oe,ie,ee,Oe){A.onBeforeRender(Q,Y,oe,ie,ee,Oe),A.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ee.onBeforeRender(Q,Y,oe,ie,A,Oe),ee.transparent===!0&&ee.side===fa&&ee.forceSinglePass===!1?(ee.side=Wn,ee.needsUpdate=!0,Q.renderBufferDirect(oe,Y,ie,ee,A,Oe),ee.side=Qa,ee.needsUpdate=!0,Q.renderBufferDirect(oe,Y,ie,ee,A,Oe),ee.side=fa):Q.renderBufferDirect(oe,Y,ie,ee,A,Oe),A.onAfterRender(Q,Y,oe,ie,ee,Oe)}function tn(A,Y,oe){Y.isScene!==!0&&(Y=ke);const ie=C.get(A),ee=L.state.lights,Oe=L.state.shadowsArray,He=ee.state.version,Ie=Ue.getParameters(A,ee.state,Oe,Y,oe,L.state.lightProbeGridArray),We=Ue.getProgramCacheKey(Ie);let Ge=ie.programs;ie.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Y.environment:null,ie.fog=Y.fog;const ot=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ie.envMap=X.get(A.envMap||ie.environment,ot),ie.envMapRotation=ie.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,Ge===void 0&&(A.addEventListener("dispose",Bt),Ge=new Map,ie.programs=Ge);let pt=Ge.get(We);if(pt!==void 0){if(ie.currentProgram===pt&&ie.lightsStateVersion===He)return Ns(A,Ie),pt}else Ie.uniforms=Ue.getUniforms(A),J!==null&&A.isNodeMaterial&&J.build(A,oe,Ie),A.onBeforeCompile(Ie,Q),pt=Ue.acquireProgram(Ie,We),Ge.set(We,pt),ie.uniforms=Ie.uniforms;const je=ie.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(je.clippingPlanes=Be.uniform),Ns(A,Ie),ie.needsLights=Wo(A),ie.lightsStateVersion=He,ie.needsLights&&(je.ambientLightColor.value=ee.state.ambient,je.lightProbe.value=ee.state.probe,je.directionalLights.value=ee.state.directional,je.directionalLightShadows.value=ee.state.directionalShadow,je.spotLights.value=ee.state.spot,je.spotLightShadows.value=ee.state.spotShadow,je.rectAreaLights.value=ee.state.rectArea,je.ltc_1.value=ee.state.rectAreaLTC1,je.ltc_2.value=ee.state.rectAreaLTC2,je.pointLights.value=ee.state.point,je.pointLightShadows.value=ee.state.pointShadow,je.hemisphereLights.value=ee.state.hemi,je.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,je.spotLightMatrix.value=ee.state.spotLightMatrix,je.spotLightMap.value=ee.state.spotLightMap,je.pointShadowMatrix.value=ee.state.pointShadowMatrix),ie.lightProbeGrid=L.state.lightProbeGridArray.length>0,ie.currentProgram=pt,ie.uniformsList=null,pt}function Us(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=Cc.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function Ns(A,Y){const oe=C.get(A);oe.outputColorSpace=Y.outputColorSpace,oe.batching=Y.batching,oe.batchingColor=Y.batchingColor,oe.instancing=Y.instancing,oe.instancingColor=Y.instancingColor,oe.instancingMorph=Y.instancingMorph,oe.skinning=Y.skinning,oe.morphTargets=Y.morphTargets,oe.morphNormals=Y.morphNormals,oe.morphColors=Y.morphColors,oe.morphTargetsCount=Y.morphTargetsCount,oe.numClippingPlanes=Y.numClippingPlanes,oe.numIntersection=Y.numClipIntersection,oe.vertexAlphas=Y.vertexAlphas,oe.vertexTangents=Y.vertexTangents,oe.toneMapping=Y.toneMapping}function Wi(A,Y){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;P.setFromMatrixPosition(Y.matrixWorld);for(let oe=0,ie=A.length;oe<ie;oe++){const ee=A[oe];if(ee.texture!==null&&ee.boundingBox.containsPoint(P))return ee}return null}function xa(A,Y,oe,ie,ee){Y.isScene!==!0&&(Y=ke),M.resetTextureUnits();const Oe=Y.fog,He=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?Y.environment:null,Ie=q===null?Q.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Rt.workingColorSpace,We=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,Ge=X.get(ie.envMap||He,We),ot=ie.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pt=!!oe.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),je=!!oe.morphAttributes.position,Ot=!!oe.morphAttributes.normal,Zt=!!oe.morphAttributes.color;let Jt=Bi;ie.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Jt=Q.toneMapping);const gt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,cn=gt!==void 0?gt.length:0,Ve=C.get(ie),En=L.state.lights;if(Ft===!0&&(lt===!0||A!==B)){const kt=A===B&&ie.id===N;Be.setState(ie,A,kt)}let _t=!1;ie.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==En.state.version||Ve.outputColorSpace!==Ie||ee.isBatchedMesh&&Ve.batching===!1||!ee.isBatchedMesh&&Ve.batching===!0||ee.isBatchedMesh&&Ve.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&Ve.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&Ve.instancing===!1||!ee.isInstancedMesh&&Ve.instancing===!0||ee.isSkinnedMesh&&Ve.skinning===!1||!ee.isSkinnedMesh&&Ve.skinning===!0||ee.isInstancedMesh&&Ve.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Ve.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Ve.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Ve.instancingMorph===!1&&ee.morphTexture!==null||Ve.envMap!==Ge||ie.fog===!0&&Ve.fog!==Oe||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Be.numPlanes||Ve.numIntersection!==Be.numIntersection)||Ve.vertexAlphas!==ot||Ve.vertexTangents!==pt||Ve.morphTargets!==je||Ve.morphNormals!==Ot||Ve.morphColors!==Zt||Ve.toneMapping!==Jt||Ve.morphTargetsCount!==cn||!!Ve.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(_t=!0):(_t=!0,Ve.__version=ie.version);let On=Ve.currentProgram;_t===!0&&(On=tn(ie,Y,ee),J&&ie.isNodeMaterial&&J.onUpdateProgram(ie,On,Ve));let jn=!1,In=!1,Sa=!1;const zt=On.getUniforms(),$t=Ve.uniforms;if(Re.useProgram(On.program)&&(jn=!0,In=!0,Sa=!0),ie.id!==N&&(N=ie.id,In=!0),Ve.needsLights){const kt=Wi(L.state.lightProbeGridArray,ee);Ve.lightProbeGrid!==kt&&(Ve.lightProbeGrid=kt,In=!0)}if(jn||B!==A){Re.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),zt.setValue(V,"projectionMatrix",A.projectionMatrix),zt.setValue(V,"viewMatrix",A.matrixWorldInverse);const Ri=zt.map.cameraPosition;Ri!==void 0&&Ri.setValue(V,Pt.setFromMatrixPosition(A.matrixWorld)),ut.logarithmicDepthBuffer&&zt.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&zt.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),B!==A&&(B=A,In=!0,Sa=!0)}if(Ve.needsLights&&(En.state.directionalShadowMap.length>0&&zt.setValue(V,"directionalShadowMap",En.state.directionalShadowMap,M),En.state.spotShadowMap.length>0&&zt.setValue(V,"spotShadowMap",En.state.spotShadowMap,M),En.state.pointShadowMap.length>0&&zt.setValue(V,"pointShadowMap",En.state.pointShadowMap,M)),ee.isSkinnedMesh){zt.setOptional(V,ee,"bindMatrix"),zt.setOptional(V,ee,"bindMatrixInverse");const kt=ee.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),zt.setValue(V,"boneTexture",kt.boneTexture,M))}ee.isBatchedMesh&&(zt.setOptional(V,ee,"batchingTexture"),zt.setValue(V,"batchingTexture",ee._matricesTexture,M),zt.setOptional(V,ee,"batchingIdTexture"),zt.setValue(V,"batchingIdTexture",ee._indirectTexture,M),zt.setOptional(V,ee,"batchingColorTexture"),ee._colorsTexture!==null&&zt.setValue(V,"batchingColorTexture",ee._colorsTexture,M));const ai=oe.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&Je.update(ee,oe,On),(In||Ve.receiveShadow!==ee.receiveShadow)&&(Ve.receiveShadow=ee.receiveShadow,zt.setValue(V,"receiveShadow",ee.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&Y.environment!==null&&($t.envMapIntensity.value=Y.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=yA()),In){if(zt.setValue(V,"toneMappingExposure",Q.toneMappingExposure),Ve.needsLights&&kc($t,Sa),Oe&&ie.fog===!0&&fe.refreshFogUniforms($t,Oe),fe.refreshMaterialUniforms($t,ie,Pe,Ne,L.state.transmissionRenderTarget[A.id]),Ve.needsLights&&Ve.lightProbeGrid){const kt=Ve.lightProbeGrid;$t.probesSH.value=kt.texture,$t.probesMin.value.copy(kt.boundingBox.min),$t.probesMax.value.copy(kt.boundingBox.max),$t.probesResolution.value.copy(kt.resolution)}Cc.upload(V,Us(Ve),$t,M)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Cc.upload(V,Us(Ve),$t,M),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&zt.setValue(V,"center",ee.center),zt.setValue(V,"modelViewMatrix",ee.modelViewMatrix),zt.setValue(V,"normalMatrix",ee.normalMatrix),zt.setValue(V,"modelMatrix",ee.matrixWorld),ie.uniformsGroups!==void 0){const kt=ie.uniformsGroups;for(let Ri=0,gi=kt.length;Ri<gi;Ri++){const Dr=kt[Ri];pe.update(Dr,On),pe.bind(Dr,On)}}return On}function kc(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function Wo(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return de},this.getActiveMipmapLevel=function(){return he},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(A,Y,oe){const ie=C.get(A);ie.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),C.get(A.texture).__webglTexture=Y,C.get(A.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:oe,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const oe=C.get(A);oe.__webglFramebuffer=Y,oe.__useDefaultFramebuffer=Y===void 0};const qo=V.createFramebuffer();this.setRenderTarget=function(A,Y=0,oe=0){q=A,de=Y,he=oe;let ie=null,ee=!1,Oe=!1;if(A){const Ie=C.get(A);if(Ie.__useDefaultFramebuffer!==void 0){Re.bindFramebuffer(V.FRAMEBUFFER,Ie.__webglFramebuffer),se.copy(A.viewport),ge.copy(A.scissor),U=A.scissorTest,Re.viewport(se),Re.scissor(ge),Re.setScissorTest(U),N=-1;return}else if(Ie.__webglFramebuffer===void 0)M.setupRenderTarget(A);else if(Ie.__hasExternalTextures)M.rebindTextures(A,C.get(A.texture).__webglTexture,C.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ot=A.depthTexture;if(Ie.__boundDepthTexture!==ot){if(ot!==null&&C.has(ot)&&(A.width!==ot.image.width||A.height!==ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(A)}}const We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Oe=!0);const Ge=C.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ge[Y])?ie=Ge[Y][oe]:ie=Ge[Y],ee=!0):A.samples>0&&M.useMultisampledRTT(A)===!1?ie=C.get(A).__webglMultisampledFramebuffer:Array.isArray(Ge)?ie=Ge[oe]:ie=Ge,se.copy(A.viewport),ge.copy(A.scissor),U=A.scissorTest}else se.copy(Se).multiplyScalar(Pe).floor(),ge.copy(qe).multiplyScalar(Pe).floor(),U=et;if(oe!==0&&(ie=qo),Re.bindFramebuffer(V.FRAMEBUFFER,ie)&&Re.drawBuffers(A,ie),Re.viewport(se),Re.scissor(ge),Re.setScissorTest(U),ee){const Ie=C.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ie.__webglTexture,oe)}else if(Oe){const Ie=Y;for(let We=0;We<A.textures.length;We++){const Ge=C.get(A.textures[We]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+We,Ge.__webglTexture,oe,Ie)}}else if(A!==null&&oe!==0){const Ie=C.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ie.__webglTexture,oe)}N=-1},this.readRenderTargetPixels=function(A,Y,oe,ie,ee,Oe,He,Ie=0){if(!(A&&A.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=C.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&He!==void 0&&(We=We[He]),We){Re.bindFramebuffer(V.FRAMEBUFFER,We);try{const Ge=A.textures[Ie],ot=Ge.format,pt=Ge.type;if(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ie),!ut.textureFormatReadable(ot)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(pt)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-ie&&oe>=0&&oe<=A.height-ee&&V.readPixels(Y,oe,ie,ee,k.convert(ot),k.convert(pt),Oe)}finally{const Ge=q!==null?C.get(q).__webglFramebuffer:null;Re.bindFramebuffer(V.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(A,Y,oe,ie,ee,Oe,He,Ie=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=C.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&He!==void 0&&(We=We[He]),We)if(Y>=0&&Y<=A.width-ie&&oe>=0&&oe<=A.height-ee){Re.bindFramebuffer(V.FRAMEBUFFER,We);const Ge=A.textures[Ie],ot=Ge.format,pt=Ge.type;if(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ie),!ut.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,je),V.bufferData(V.PIXEL_PACK_BUFFER,Oe.byteLength,V.STREAM_READ),V.readPixels(Y,oe,ie,ee,k.convert(ot),k.convert(pt),0);const Ot=q!==null?C.get(q).__webglFramebuffer:null;Re.bindFramebuffer(V.FRAMEBUFFER,Ot);const Zt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await ky(V,Zt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,je),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Oe),V.deleteBuffer(je),V.deleteSync(Zt),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,oe=0){const ie=Math.pow(2,-oe),ee=Math.floor(A.image.width*ie),Oe=Math.floor(A.image.height*ie),He=Y!==null?Y.x:0,Ie=Y!==null?Y.y:0;M.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,oe,0,0,He,Ie,ee,Oe),Re.unbindTexture()};const Xc=V.createFramebuffer(),wr=V.createFramebuffer();this.copyTextureToTexture=function(A,Y,oe=null,ie=null,ee=0,Oe=0){let He,Ie,We,Ge,ot,pt,je,Ot,Zt;const Jt=A.isCompressedTexture?A.mipmaps[Oe]:A.image;if(oe!==null)He=oe.max.x-oe.min.x,Ie=oe.max.y-oe.min.y,We=oe.isBox3?oe.max.z-oe.min.z:1,Ge=oe.min.x,ot=oe.min.y,pt=oe.isBox3?oe.min.z:0;else{const $t=Math.pow(2,-ee);He=Math.floor(Jt.width*$t),Ie=Math.floor(Jt.height*$t),A.isDataArrayTexture?We=Jt.depth:A.isData3DTexture?We=Math.floor(Jt.depth*$t):We=1,Ge=0,ot=0,pt=0}ie!==null?(je=ie.x,Ot=ie.y,Zt=ie.z):(je=0,Ot=0,Zt=0);const gt=k.convert(Y.format),cn=k.convert(Y.type);let Ve;Y.isData3DTexture?(M.setTexture3D(Y,0),Ve=V.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(M.setTexture2DArray(Y,0),Ve=V.TEXTURE_2D_ARRAY):(M.setTexture2D(Y,0),Ve=V.TEXTURE_2D),Re.activeTexture(V.TEXTURE0),Re.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Y.flipY),Re.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),Re.pixelStorei(V.UNPACK_ALIGNMENT,Y.unpackAlignment);const En=Re.getParameter(V.UNPACK_ROW_LENGTH),_t=Re.getParameter(V.UNPACK_IMAGE_HEIGHT),On=Re.getParameter(V.UNPACK_SKIP_PIXELS),jn=Re.getParameter(V.UNPACK_SKIP_ROWS),In=Re.getParameter(V.UNPACK_SKIP_IMAGES);Re.pixelStorei(V.UNPACK_ROW_LENGTH,Jt.width),Re.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Jt.height),Re.pixelStorei(V.UNPACK_SKIP_PIXELS,Ge),Re.pixelStorei(V.UNPACK_SKIP_ROWS,ot),Re.pixelStorei(V.UNPACK_SKIP_IMAGES,pt);const Sa=A.isDataArrayTexture||A.isData3DTexture,zt=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const $t=C.get(A),ai=C.get(Y),kt=C.get($t.__renderTarget),Ri=C.get(ai.__renderTarget);Re.bindFramebuffer(V.READ_FRAMEBUFFER,kt.__webglFramebuffer),Re.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let gi=0;gi<We;gi++)Sa&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,C.get(A).__webglTexture,ee,pt+gi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,C.get(Y).__webglTexture,Oe,Zt+gi)),V.blitFramebuffer(Ge,ot,He,Ie,je,Ot,He,Ie,V.DEPTH_BUFFER_BIT,V.NEAREST);Re.bindFramebuffer(V.READ_FRAMEBUFFER,null),Re.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(ee!==0||A.isRenderTargetTexture||C.has(A)){const $t=C.get(A),ai=C.get(Y);Re.bindFramebuffer(V.READ_FRAMEBUFFER,Xc),Re.bindFramebuffer(V.DRAW_FRAMEBUFFER,wr);for(let kt=0;kt<We;kt++)Sa?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,$t.__webglTexture,ee,pt+kt):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,$t.__webglTexture,ee),zt?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ai.__webglTexture,Oe,Zt+kt):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ai.__webglTexture,Oe),ee!==0?V.blitFramebuffer(Ge,ot,He,Ie,je,Ot,He,Ie,V.COLOR_BUFFER_BIT,V.NEAREST):zt?V.copyTexSubImage3D(Ve,Oe,je,Ot,Zt+kt,Ge,ot,He,Ie):V.copyTexSubImage2D(Ve,Oe,je,Ot,Ge,ot,He,Ie);Re.bindFramebuffer(V.READ_FRAMEBUFFER,null),Re.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else zt?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(Ve,Oe,je,Ot,Zt,He,Ie,We,gt,cn,Jt.data):Y.isCompressedArrayTexture?V.compressedTexSubImage3D(Ve,Oe,je,Ot,Zt,He,Ie,We,gt,Jt.data):V.texSubImage3D(Ve,Oe,je,Ot,Zt,He,Ie,We,gt,cn,Jt):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Oe,je,Ot,He,Ie,gt,cn,Jt.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Oe,je,Ot,Jt.width,Jt.height,gt,Jt.data):V.texSubImage2D(V.TEXTURE_2D,Oe,je,Ot,He,Ie,gt,cn,Jt);Re.pixelStorei(V.UNPACK_ROW_LENGTH,En),Re.pixelStorei(V.UNPACK_IMAGE_HEIGHT,_t),Re.pixelStorei(V.UNPACK_SKIP_PIXELS,On),Re.pixelStorei(V.UNPACK_SKIP_ROWS,jn),Re.pixelStorei(V.UNPACK_SKIP_IMAGES,In),Oe===0&&Y.generateMipmaps&&V.generateMipmap(Ve),Re.unbindTexture()},this.initRenderTarget=function(A){C.get(A).__webglFramebuffer===void 0&&M.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?M.setTextureCube(A,0):A.isData3DTexture?M.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?M.setTexture2DArray(A,0):M.setTexture2D(A,0),Re.unbindTexture()},this.resetState=function(){de=0,he=0,q=null,Re.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Rt._getUnpackColorSpace()}}function E_({text:s="Abdullah Goher",className:e="",color:i,colorFrom:r="#2563eb",colorTo:l="#9333ea"}){const u=yt.useRef(null),d=yt.useRef(null),p=yt.useRef(null),[m,h]=yt.useState("intro"),_=yt.useRef(m);_.current=m,yt.useEffect(()=>{const b=p.current,E=d.current,D=u.current;if(!b||!E||!D)return;const S=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let v=Math.max(1,E.offsetWidth),w=Math.max(1,E.offsetHeight);const O=window.getComputedStyle(E);let P=parseFloat(O.fontSize)||64,z=O.fontFamily||"Inter, sans-serif",L=O.fontWeight||"700";const G=new MA({antialias:!0,alpha:!0});G.setPixelRatio(Math.min(window.devicePixelRatio,2)),G.setSize(v,w),G.setClearColor(0,0),b.appendChild(G.domElement),G.domElement.style.display="block",G.domElement.style.width="100%",G.domElement.style.height="100%";const T=new rM;let I=new Ih(-v/2,v/2,w/2,-w/2,-1e3,1e3);I.position.z=10;const Q=()=>{const ke=document.createElement("canvas"),Qe=ke.getContext("2d"),ht=Math.min(window.devicePixelRatio,2);ke.width=Math.ceil(v*ht),ke.height=Math.ceil(w*ht),Qe.scale(ht,ht),Qe.font=`${L} ${P}px ${z}`,Qe.textBaseline="middle",Qe.textAlign="center",Qe.fillStyle="#ffffff",Qe.fillText(s,v/2,w/2);const V=Qe.getImageData(0,0,ke.width,ke.height).data,wt=Math.max(2,Math.round(P/28)),nt=[];for(let ut=0;ut<ke.height;ut+=wt)for(let Re=0;Re<ke.width;Re+=wt)V[(ut*ke.width+Re)*4+3]>128&&nt.push({x:Re/ht-v/2,y:-(ut/ht-w/2)});return nt};let H=Q(),J=H.length;const de=new Lt(i||r),he=new Lt(i||l),q=new Lt,N=ke=>{const Qe=ke.length,ht=new Float32Array(Qe*3),V=new Float32Array(Qe*3),wt=new Float32Array(Qe*3),nt=new Float32Array(Qe);let ut=1/0,Re=-1/0;for(const C of ke)C.x<ut&&(ut=C.x),C.x>Re&&(Re=C.x);const Tt=Math.max(1,Re-ut);for(let C=0;C<Qe;C++){const M=ke[C],X=C*3,ce=Math.max(v,w)*.6+Math.random()*Math.max(v,w)*.5,Me=Math.random()*Math.PI*2;ht[X+0]=Math.cos(Me)*ce,ht[X+1]=Math.sin(Me)*ce,ht[X+2]=(Math.random()-.5)*60,V[X+0]=M.x,V[X+1]=M.y,V[X+2]=(Math.random()-.5)*6,q.copy(de).lerp(he,(M.x-ut)/Tt),wt[X+0]=q.r,wt[X+1]=q.g,wt[X+2]=q.b,nt[C]=Math.random()*Math.PI*2}return{positions:ht,tgts:V,colors:wt,offsets:nt}};let{positions:B,tgts:se,colors:ge,offsets:U}=N(H),K=new Float32Array(J*3),ue=new mi;ue.setAttribute("position",new Xn(B,3)),ue.setAttribute("color",new Xn(ge,3));const Ne=(()=>{const ke=document.createElement("canvas");ke.width=ke.height=64;const Qe=ke.getContext("2d"),ht=Qe.createRadialGradient(32,32,0,32,32,32);return ht.addColorStop(0,"rgba(255,255,255,1)"),ht.addColorStop(.45,"rgba(255,255,255,0.5)"),ht.addColorStop(1,"rgba(255,255,255,0)"),Qe.fillStyle=ht,Qe.fillRect(0,0,64,64),new mM(ke)})(),Pe=new tv({size:Math.max(2,P*.045),map:Ne,vertexColors:!0,transparent:!0,depthWrite:!1,blending:Dd,sizeAttenuation:!1,opacity:.95});let te=new j0(ue,Pe);T.add(te);const Ee=new re(99999,99999,0),Se=ke=>{const Qe=G.domElement.getBoundingClientRect(),ht=ke.clientX-Qe.left,V=ke.clientY-Qe.top;Ee.x=ht-v/2,Ee.y=-(V-w/2)},qe=()=>{Ee.set(99999,99999,0)};window.addEventListener("mousemove",Se),window.addEventListener("mouseleave",qe);const et=new AM;let Ze=0,Ft=0,lt=null;lt=setTimeout(()=>{h("settled")},S?200:1500);const At=()=>{Ft=requestAnimationFrame(At);const ke=Math.min(et.getDelta(),.05),Qe=et.elapsedTime;Ze<1&&(Ze=Math.min(1,Ze+ke*.9));const ht=_.current;if(ht==="settled"){G.render(T,I);return}const V=Math.max(60,P*.9),wt=P*22,nt=18,ut=.78,Re=ue.getAttribute("position"),Tt=Re.array,C=ht==="scattered";for(let M=0;M<J;M++){const X=M*3,ce=C?2.5:1,Me=se[X]+Math.sin(Qe*1.3+U[M])*ce,Ce=se[X+1]+Math.cos(Qe*1.5+U[M])*ce,Ue=se[X+2],fe=Me*Ze,_e=Ce*Ze,Le=Ue*Ze,Be=fe-Tt[X],Te=_e-Tt[X+1],we=Le-Tt[X+2];if(K[X]+=Be*nt*ke,K[X+1]+=Te*nt*ke,K[X+2]+=we*nt*ke,C&&Ee.x<9e4){const Je=Tt[X]-Ee.x,it=Tt[X+1]-Ee.y,xt=Je*Je+it*it;if(xt<V*V){const k=Math.sqrt(xt)||1e-4,Ae=(1-k/V)*wt;K[X]+=Je/k*Ae*ke,K[X+1]+=it/k*Ae*ke}}K[X]*=ut,K[X+1]*=ut,K[X+2]*=ut,Tt[X]+=K[X]*ke,Tt[X+1]+=K[X+1]*ke,Tt[X+2]+=K[X+2]*ke}Re.needsUpdate=!0,G.render(T,I)};At();const Pt=()=>{const ke=Math.max(1,E.offsetWidth),Qe=Math.max(1,E.offsetHeight);if(ke===v&&Qe===w)return;v=ke,w=Qe;const ht=window.getComputedStyle(E);P=parseFloat(ht.fontSize)||P,z=ht.fontFamily||z,L=ht.fontWeight||L,G.setSize(v,w),I.left=-v/2,I.right=v/2,I.top=w/2,I.bottom=-w/2,I.updateProjectionMatrix(),H=Q();const V=N(H);J=H.length,B=V.positions,se=V.tgts,ge=V.colors,U=V.offsets,K=new Float32Array(J*3),T.remove(te),ue.dispose(),ue=new mi,ue.setAttribute("position",new Xn(B,3)),ue.setAttribute("color",new Xn(ge,3)),Pe.size=Math.max(2,P*.045),te=new j0(ue,Pe),T.add(te)},dt=new ResizeObserver(Pt);return dt.observe(E),window.addEventListener("resize",Pt),()=>{cancelAnimationFrame(Ft),lt&&clearTimeout(lt),dt.disconnect(),window.removeEventListener("resize",Pt),window.removeEventListener("mousemove",Se),window.removeEventListener("mouseleave",qe),ue.dispose(),Pe.dispose(),Ne.dispose(),G.dispose(),G.domElement.parentNode===b&&b.removeChild(G.domElement)}},[s,i,r,l]);const y=()=>{_.current==="settled"&&h("scattered")},g=()=>{_.current==="scattered"&&h("settled")};return j.jsxs("span",{ref:u,onMouseEnter:y,onMouseLeave:g,onTouchStart:y,onTouchEnd:g,className:`relative inline-block align-baseline cursor-pointer ${e}`,style:{lineHeight:1},children:[j.jsx("span",{ref:d,style:{opacity:m==="settled"?1:0,transition:"opacity 350ms ease-in-out",display:"inline-block",...i?{color:i}:{background:`linear-gradient(90deg, ${r}, ${l})`,WebkitBackgroundClip:"text",backgroundClip:"text",WebkitTextFillColor:"transparent",color:"transparent"}},children:s}),j.jsx("span",{ref:p,"aria-hidden":"true",style:{position:"absolute",inset:0,opacity:m==="settled"?0:1,transition:"opacity 350ms ease-in-out",pointerEvents:"none"}})]})}function bA(){const s=e=>{var i;return(i=document.getElementById(e))==null?void 0:i.scrollIntoView({behavior:"smooth"})};return j.jsxs("section",{id:"home",className:"relative min-h-screen flex items-end overflow-hidden",style:{background:"transparent"},children:[j.jsx("div",{"aria-hidden":"true",className:"absolute inset-0 pointer-events-none",style:{background:"linear-gradient(180deg, hsl(var(--hero-bg) / 0.0) 0%, hsl(var(--hero-bg) / 0.0) 55%, hsl(var(--hero-bg) / 0.55) 100%)",zIndex:1}}),j.jsxs("div",{className:"relative z-10 pointer-events-none w-full max-w-[90%] sm:max-w-md lg:max-w-3xl px-6 md:px-12 pb-12 md:pb-16 pt-32",children:[j.jsx("div",{className:"opacity-0 animate-fade-up mb-5 md:mb-6",style:{animationDelay:"0.0s"},children:j.jsxs("div",{className:"relative inline-block",style:{width:"clamp(88px, 8.5vw, 120px)",height:"clamp(88px, 8.5vw, 120px)"},children:[j.jsx("img",{src:"/files/Abdullah_new.jpg",alt:"Abdullah Goher",className:"w-full h-full object-cover object-[center_25%] pointer-events-auto",style:{borderRadius:"50%",border:"2px solid hsl(var(--primary))",boxShadow:"0 0 24px hsl(var(--primary) / 0.4), 0 4px 18px rgba(0,0,0,0.45)"}}),j.jsx("span",{"aria-hidden":"true",className:"absolute -bottom-1 -right-1 inline-flex items-center justify-center",style:{width:"16px",height:"16px",borderRadius:"50%",background:"hsl(var(--primary))",boxShadow:"0 0 0 3px var(--c-hero-bg), 0 0 10px hsl(var(--primary))"}})]})}),j.jsx("p",{className:"micro-label-accent opacity-0 animate-fade-up mb-4",style:{animationDelay:"0.1s"},children:"Junior · CIS · Penn '27"}),j.jsxs("h1",{className:"opacity-0 animate-fade-up font-bold uppercase mb-3 md:mb-5 pointer-events-auto",style:{animationDelay:"0.2s",color:"var(--c-fg)",fontSize:"clamp(2.6rem, 8vw, 6rem)",lineHeight:1.04,letterSpacing:"-0.05em"},children:[j.jsx(E_,{text:"ABDULLAH",color:"hsl(0, 0%, 96%)"}),j.jsx("br",{}),j.jsx(E_,{text:"GOHER",color:"hsl(119, 99%, 46%)"})]}),j.jsx("p",{className:"opacity-0 animate-fade-up font-light mb-3 md:mb-6",style:{animationDelay:"0.4s",color:"hsl(var(--foreground) / 0.85)",fontSize:"clamp(1.05rem, 2.4vw, 1.75rem)",letterSpacing:"-0.01em"},children:"I build secure, intelligent systems."}),j.jsx("p",{className:"opacity-0 animate-fade-up font-medium mb-2 md:mb-3 max-w-2xl",style:{animationDelay:"0.55s",color:"var(--c-fg)",fontSize:"clamp(0.95rem, 1.5vw, 1.2rem)",lineHeight:1.5},children:"B.S.E. & M.S.E. in Computer & Information Science at the University of Pennsylvania."}),j.jsx("p",{className:"opacity-0 animate-fade-up font-light mb-6 md:mb-8 max-w-2xl",style:{animationDelay:"0.65s",color:"hsl(var(--muted-foreground))",fontSize:"clamp(0.92rem, 1.4vw, 1.15rem)",lineHeight:1.6},children:"I ship full-stack applications, train ML models for real-world problems, and turn multi-terabyte datasets into clear decisions."}),j.jsxs("div",{className:"opacity-0 animate-fade-up flex flex-wrap gap-3 mb-6 md:mb-8",style:{animationDelay:"0.7s"},children:[j.jsx("button",{type:"button",onClick:()=>s("projects"),className:"btn-primary pointer-events-auto text-sm",children:"View My Work"}),j.jsx("button",{type:"button",onClick:()=>s("contact"),className:"btn-secondary pointer-events-auto text-sm",children:"Get In Touch"})]}),j.jsxs("div",{className:"opacity-0 animate-fade-up flex flex-wrap items-center gap-4 md:gap-6",style:{animationDelay:"0.85s"},children:[j.jsx("p",{className:"font-light",style:{color:"hsl(var(--muted-foreground) / 0.7)",fontSize:"0.78rem",letterSpacing:"0.04em"},children:"Philadelphia, PA · 4 internships shipped · ML / SWE / Data"}),j.jsx("span",{className:"hidden md:inline-block w-px h-4",style:{background:"hsl(var(--border))"}}),j.jsxs("div",{className:"flex items-center gap-3 pointer-events-auto",children:[j.jsx("a",{href:"https://github.com/Abdullah3245",target:"_blank",rel:"noopener noreferrer",className:"transition-colors",style:{color:"hsl(var(--muted-foreground))"},onMouseEnter:e=>e.currentTarget.style.color="var(--c-primary)",onMouseLeave:e=>e.currentTarget.style.color="hsl(var(--muted-foreground))","aria-label":"GitHub",children:j.jsx(Ic,{size:18})}),j.jsx("a",{href:"https://www.linkedin.com/in/abdullah-goher-801ba227b/",target:"_blank",rel:"noopener noreferrer",className:"transition-colors",style:{color:"hsl(var(--muted-foreground))"},onMouseEnter:e=>e.currentTarget.style.color="var(--c-primary)",onMouseLeave:e=>e.currentTarget.style.color="hsl(var(--muted-foreground))","aria-label":"LinkedIn",children:j.jsx(Eh,{size:18})}),j.jsx("a",{href:"https://mail.google.com/mail/?view=cm&fs=1&to=mgoher@seas.upenn.edu",target:"_blank",rel:"noopener noreferrer",className:"transition-colors",style:{color:"hsl(var(--muted-foreground))"},onMouseEnter:e=>e.currentTarget.style.color="var(--c-primary)",onMouseLeave:e=>e.currentTarget.style.color="hsl(var(--muted-foreground))","aria-label":"Email",children:j.jsx(Th,{size:18})})]})]})]})]})}const EA=[{title:"Languages",icon:zS,skills:["Python","JavaScript","TypeScript","Java","SQL","C"]},{title:"Frontend",icon:$S,skills:["React","Vite","HTML/CSS","Tailwind","Redux","Figma"]},{title:"Backend / Data",icon:b0,skills:["Node.js","Express","Django","MongoDB","PostgreSQL","DuckDB"]},{title:"ML / AI",icon:US,skills:["PyTorch","TensorFlow","Scikit-Learn","XGBoost","CV","NLP"]},{title:"Data Science",icon:b0,skills:["Pandas","NumPy","Matplotlib","Stats","Feature Engineering"]},{title:"Tools",icon:ry,skills:["Git","Docker","AWS","Cypress","JUnit","Web Scraping"]}],TA=["Data Science","Machine Learning","Full-Stack","Big Data Analytics","Computer Vision"];function AA({category:s,index:e}){const i=yt.useRef(null),[r,l]=yt.useState(!1),u=s.icon;return yt.useEffect(()=>{const d=i.current;if(!d)return;const p=new IntersectionObserver(m=>{for(const h of m)if(h.isIntersecting){l(!0),p.disconnect();break}},{threshold:.18,rootMargin:"0px 0px -8% 0px"});return p.observe(d),()=>p.disconnect()},[]),j.jsxs("div",{ref:i,className:"journey-card p-6",style:{opacity:r?1:0,transform:r?"none":"translateY(20px)",transition:"opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 600ms cubic-bezier(0.16, 1, 0.3, 1)",transitionDelay:`${e%3*80}ms`},children:[j.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[j.jsx("div",{className:"p-2 flex items-center justify-center",style:{border:"1px solid hsl(var(--primary) / 0.4)",background:"hsl(var(--primary) / 0.12)",borderRadius:"0.125rem"},children:j.jsx(u,{size:16,style:{color:"var(--c-primary)"}})}),j.jsx("h3",{className:"text-base md:text-lg font-semibold tracking-tight",style:{color:"var(--c-fg)"},children:s.title})]}),j.jsx("div",{className:"flex flex-wrap gap-1.5",children:s.skills.map(d=>j.jsx("span",{className:"px-2.5 py-1 text-xs",style:{border:"1px solid hsl(var(--border))",color:"hsl(var(--foreground) / 0.85)",borderRadius:"0.125rem"},children:d},d))})]})}function RA(){return j.jsx("section",{id:"skills",className:"relative z-10 px-6 md:px-10 lg:px-16 py-24 md:py-32",children:j.jsxs("div",{className:"max-w-6xl mx-auto",children:[j.jsxs("header",{className:"mb-14",children:[j.jsx("p",{className:"micro-label-accent mb-3",children:"§03 / Skills"}),j.jsx("h2",{className:"text-3xl md:text-5xl font-semibold tracking-tight",style:{color:"var(--c-fg)",lineHeight:1.05},children:"The stack."}),j.jsx("p",{className:"mt-4 max-w-xl",style:{color:"hsl(var(--muted-foreground))"},children:"Languages, frameworks, and tools I reach for to build impactful solutions."})]}),j.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6",children:EA.map((s,e)=>j.jsx(AA,{category:s,index:e},s.title))}),j.jsxs("div",{className:"mt-14",children:[j.jsx("p",{className:"micro-label mb-4",children:"Current focus"}),j.jsx("div",{className:"flex flex-wrap gap-2",children:TA.map(s=>j.jsx("span",{className:"px-4 py-2 text-sm",style:{border:"1px solid hsl(var(--primary) / 0.5)",background:"hsl(var(--primary) / 0.10)",color:"var(--c-primary)",borderRadius:"0.125rem"},children:s},s))})]})]})})}const CA=[{title:"Nomad",description:"Full-stack human-mobility research platform making mobility datasets, algorithms, and resources accessible to Computational Social Science researchers.",image:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-02-12%20at%205.50.44%E2%80%AFPM-zCmAflXehiF8X4bwQJTX4IYmHMZVx6.png",technologies:["React","Vite","Express","MongoDB","AWS S3","Cypress","Vitest","LLMs"],liveUrl:"https://nomad.seas.upenn.edu",githubUrl:"#",category:"Full Stack",status:"Live",highlights:["Custom MVC architecture with Express + MongoDB REST APIs","AWS S3 cloud storage for mobility literature","High test coverage with Cypress + Vitest","Automated LLM pipeline extracts JSON from 100+ scholarly papers"]},{title:"Penn Muslim Alumni Data",description:"Full-stack alumni-networking platform with a custom database connecting 200+ community members. Profile pages with structured fields, search, filter, and job-posting features.",image:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop",technologies:["TypeScript","PostgreSQL","React","Node.js","Heroku"],liveUrl:"#",githubUrl:"#",category:"Full Stack",status:"Live",highlights:["Connects 200+ alumni with custom PostgreSQL schema","Search, filter, and job-posting features"]},{title:"Steam Dataset EDA",description:"Data cleaning, preprocessing, and visualisation of a 110k+ games dataset. Predictive models analyzing factors influencing game success.",image:"./files/SteamDataSet.png",technologies:["Python","pandas","scikit-learn","SciPy","matplotlib"],liveUrl:"https://colab.research.google.com/drive/1hapeUwkCeNfUn-uXfLU99tli3u7seR_M?usp=sharing",githubUrl:"https://github.com/Abdullah3245/Steam_Data_Analysis",category:"Data Science",status:"Completed",highlights:["Processed 110k+ games with cleaning + visualization","Random Forest, XGBoost, LightGBM predictive models","EDA with Matplotlib, Seaborn, Plotly"]},{title:"West Coast EV Explorer",description:"Normalized relational database schema for EVs and charging stations across the west coast. Materialized views and optimized SQL queries over 100k+ rows.",image:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&auto=format&fit=crop",technologies:["PostgreSQL","PostGIS","Node.js","Express","React"],liveUrl:"#",githubUrl:"#",category:"Full Stack",status:"Completed",highlights:["Normalized relational DB with 100k+ rows","Materialized views for optimized queries","APIs for zip-code EV lookups + nearest-charger search"]},{title:"AlumniConnectAI",description:"Scrape alumni information and connect through an intelligent matching system. Chrome extension for seamless LinkedIn integration with Stripe payments.",image:"./files/AlumniConnectAI.png",technologies:["Vite + React","Web Scraping","Chrome Extension","Stripe"],liveUrl:"https://alumniconnectai.lovable.app/",githubUrl:"https://github.com/Abdullah3245/AlumniConnectAI?tab=readme-ov-file",category:"Full Stack",status:"Live",highlights:["Chrome extension for LinkedIn integration","Stripe payment processing for premium features","AI-powered alumni matching algorithm"]},{title:"J → RISC-V Compiler",description:"Compiler (jc) translating programs in a stack-oriented language (J) into RISC-V assembly with full Clang interoperability and standard calling conventions.",image:"/files/image.png",technologies:["C","RISC-V Assembly","Compiler Design","Token Parsing"],liveUrl:"#",githubUrl:"#",category:"Systems",status:"Completed",highlights:["Token parsing system with modular design","RISC-V assembly generation for arithmetic / logical ops","Standard calling conventions for Clang interop"]},{title:"Twitter Bot · Markov Chains",description:"ML model generating tweets via Markov-chain word-sequence calculation, ensuring coherent and contextually relevant content.",image:"/files/twitterbot.jpeg",technologies:["Java","Markov Chains","JUnit","Machine Learning"],liveUrl:"#",githubUrl:"https://github.com/Abdullah3245/TwitterBot",category:"ML",status:"Completed",highlights:["Markov chain algorithm for word-sequence calculation","90% code coverage with JUnit testing"]}];function wA({project:s,index:e}){const i=yt.useRef(null),r=yt.useRef(null),[l,u]=yt.useState(!1),[d,p]=yt.useState(!1),m=yt.useRef(null),h=yt.useRef({rx:0,ry:0,mx:50,my:50});yt.useEffect(()=>{const D=i.current;if(!D)return;const S=new IntersectionObserver(v=>{for(const w of v)if(w.isIntersecting){u(!0),S.disconnect();break}},{threshold:.18,rootMargin:"0px 0px -8% 0px"});return S.observe(D),()=>S.disconnect()},[]);const _=()=>{const D=r.current;D&&(D.style.transform=`perspective(900px) rotateX(${h.current.rx}deg) rotateY(${h.current.ry}deg) translateZ(0)`,D.style.setProperty("--mx",`${h.current.mx}%`),D.style.setProperty("--my",`${h.current.my}%`))},y=D=>{const S=i.current;if(!S)return;const v=S.getBoundingClientRect(),w=(D.clientX-v.left)/v.width,O=(D.clientY-v.top)/v.height;h.current.ry=(w-.5)*18,h.current.rx=-(O-.5)*14,h.current.mx=w*100,h.current.my=O*100,m.current==null&&(m.current=requestAnimationFrame(()=>{m.current=null,_()}))},g=()=>p(!0),b=()=>{p(!1),h.current.rx=0,h.current.ry=0,_()},E=s.status==="Live";return j.jsx("div",{ref:i,onMouseEnter:g,onMouseLeave:b,onMouseMove:y,style:{opacity:l?1:0,transform:l?"none":"translateY(28px)",transition:"opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 700ms cubic-bezier(0.16, 1, 0.3, 1)",transitionDelay:`${e%3*90}ms`,perspective:"900px"},children:j.jsxs("div",{ref:r,className:"journey-card flex flex-col overflow-hidden cursor-pointer relative",style:{transformStyle:"preserve-3d",transition:"transform 220ms cubic-bezier(0.16, 1, 0.3, 1), border-color 220ms ease, box-shadow 220ms ease",borderColor:d?"var(--c-primary)":void 0,boxShadow:d?"0 12px 40px -10px hsl(var(--primary) / 0.35), 0 4px 18px -6px rgba(0,0,0,0.4)":"0 1px 4px 0 rgba(0,0,0,0.2)",willChange:"transform"},children:[j.jsx("div",{"aria-hidden":"true",className:"absolute inset-0 pointer-events-none",style:{background:"radial-gradient(circle at var(--mx, 50%) var(--my, 50%), hsl(var(--primary) / 0.18), transparent 40%)",opacity:d?1:0,transition:"opacity 240ms ease",mixBlendMode:"screen",zIndex:2,borderRadius:"inherit"}}),j.jsxs("div",{className:"relative h-44 overflow-hidden",children:[j.jsx("img",{src:s.image||"/placeholder.svg",alt:s.title,className:"w-full h-full object-cover",style:{transition:"transform 700ms ease, filter 400ms ease",transform:d?"scale(1.06)":"scale(1)",filter:d?"brightness(0.85)":"brightness(0.7) saturate(0.9)"}}),j.jsx("div",{className:"absolute inset-0",style:{background:"linear-gradient(180deg, hsl(var(--hero-bg) / 0.0) 35%, hsl(var(--hero-bg) / 0.85) 100%)"}}),j.jsxs("div",{className:"absolute top-3 left-3 flex gap-2",children:[j.jsx("span",{className:"px-2 py-0.5 text-[10px] uppercase tracking-[0.16em]",style:{background:"hsl(var(--background) / 0.7)",color:"var(--c-fg)",border:"1px solid hsl(var(--border))",borderRadius:"0.125rem"},children:s.category}),j.jsxs("span",{className:"px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] flex items-center gap-1",style:{background:E?"hsl(var(--primary) / 0.18)":"hsl(var(--muted) / 0.5)",color:E?"var(--c-primary)":"hsl(var(--muted-foreground))",border:`1px solid ${E?"hsl(var(--primary) / 0.4)":"hsl(var(--border))"}`,borderRadius:"0.125rem"},children:[E&&j.jsx("span",{className:"inline-block w-1.5 h-1.5",style:{background:"var(--c-primary)",borderRadius:"50%",boxShadow:"0 0 6px hsl(var(--primary))"}}),s.status]})]})]}),j.jsxs("div",{className:"flex flex-col flex-1 p-5 gap-3",children:[j.jsxs("div",{className:"flex items-start justify-between gap-2",children:[j.jsx("h3",{className:"text-lg font-semibold tracking-tight",style:{color:"var(--c-fg)"},children:s.title}),j.jsx(R_,{size:18,style:{color:d?"var(--c-primary)":"hsl(var(--muted-foreground))",transform:d?"translate(2px,-2px)":"none",transition:"transform 240ms ease, color 240ms ease"}})]}),j.jsx("p",{className:"text-sm leading-relaxed line-clamp-3",style:{color:"hsl(var(--muted-foreground))"},children:s.description}),j.jsx("ul",{className:"flex flex-col gap-1.5 overflow-hidden",style:{maxHeight:d?"8rem":"0px",opacity:d?1:0,transition:"max-height 400ms ease, opacity 240ms ease"},children:s.highlights.slice(0,3).map((D,S)=>j.jsxs("li",{className:"flex items-start gap-2 text-xs leading-relaxed",style:{color:"hsl(var(--foreground) / 0.78)"},children:[j.jsx(oy,{size:11,className:"flex-shrink-0 mt-0.5",style:{color:"var(--c-primary)"}}),D]},S))}),j.jsxs("div",{className:"flex flex-wrap gap-1.5 mt-auto pt-2",children:[s.technologies.slice(0,5).map((D,S)=>j.jsx("span",{className:"px-2 py-0.5 text-[10px]",style:{border:"1px solid hsl(var(--border))",color:"hsl(var(--foreground) / 0.85)",borderRadius:"0.125rem"},children:D},S)),s.technologies.length>5&&j.jsxs("span",{className:"px-2 py-0.5 text-[10px]",style:{border:"1px solid hsl(var(--border))",color:"hsl(var(--muted-foreground))",borderRadius:"0.125rem"},children:["+",s.technologies.length-5]})]}),j.jsxs("div",{className:"flex gap-3 pt-2",children:[s.liveUrl!=="#"&&j.jsxs("a",{href:s.liveUrl,target:"_blank",rel:"noopener noreferrer",onClick:D=>D.stopPropagation(),className:"flex items-center gap-1 text-xs uppercase tracking-[0.14em] transition-colors",style:{color:"var(--c-primary)"},children:[j.jsx(C_,{size:12})," Live"]}),s.githubUrl!=="#"&&j.jsxs("a",{href:s.githubUrl,target:"_blank",rel:"noopener noreferrer",onClick:D=>D.stopPropagation(),className:"flex items-center gap-1 text-xs uppercase tracking-[0.14em]",style:{color:"hsl(var(--muted-foreground))"},children:[j.jsx(Ic,{size:12})," Code"]})]})]})]})})}const DA=()=>j.jsx("section",{id:"projects",className:"relative z-10 px-6 md:px-10 lg:px-16 py-24 md:py-32",children:j.jsxs("div",{className:"max-w-7xl mx-auto",children:[j.jsxs("header",{className:"mb-14",children:[j.jsx("p",{className:"micro-label-accent mb-3",children:"§02 / Projects"}),j.jsx("h2",{className:"text-3xl md:text-5xl font-semibold tracking-tight",style:{color:"var(--c-fg)",lineHeight:1.05},children:"Selected work."}),j.jsx("p",{className:"mt-4 max-w-xl",style:{color:"hsl(var(--muted-foreground))"},children:"Full-stack apps, ML systems, data pipelines, and a compiler."})]}),j.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6",children:CA.map((s,e)=>j.jsx(wA,{project:s,index:e},s.title))})]})}),UA=[{icon:Th,title:"Email",value:"mgoher@seas.upenn.edu",href:"https://mail.google.com/mail/?view=cm&fs=1&to=mgoher@seas.upenn.edu"},{icon:ty,title:"Phone",value:"+1 (215) 578-1132",href:"tel:+12155781132"},{icon:w_,title:"Location",value:"Philadelphia, PA",href:"https://maps.google.com/?q=Philadelphia,PA"}],NA=[{icon:Ic,href:"https://github.com/Abdullah3245",label:"GitHub"},{icon:Eh,href:"https://www.linkedin.com/in/abdullah-goher-801ba227b/",label:"LinkedIn"}];function LA(){const s=yt.useRef(null),[e,i]=yt.useState(!1);return yt.useEffect(()=>{const r=s.current;if(!r)return;const l=new IntersectionObserver(u=>{for(const d of u)if(d.isIntersecting){i(!0),l.disconnect();break}},{threshold:.18,rootMargin:"0px 0px -8% 0px"});return l.observe(r),()=>l.disconnect()},[]),j.jsx("section",{id:"contact",className:"relative z-10 px-6 md:px-10 lg:px-16 py-24 md:py-32",children:j.jsxs("div",{className:"max-w-4xl mx-auto",children:[j.jsxs("header",{className:"mb-14",children:[j.jsx("p",{className:"micro-label-accent mb-3",children:"§04 / Contact"}),j.jsx("h2",{className:"text-3xl md:text-5xl font-semibold tracking-tight",style:{color:"var(--c-fg)",lineHeight:1.05},children:"Let's build something."}),j.jsx("p",{className:"mt-4 max-w-xl",style:{color:"hsl(var(--muted-foreground))"},children:"Open to internships, research collaborations, and interesting problems."})]}),j.jsxs("div",{ref:s,className:"journey-panel p-8 md:p-12",style:{opacity:e?1:0,transform:e?"none":"translateY(28px)",transition:"opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 700ms cubic-bezier(0.16, 1, 0.3, 1)"},children:[j.jsx("div",{className:"grid md:grid-cols-3 gap-4 md:gap-6",children:UA.map(({icon:r,title:l,value:u,href:d})=>j.jsxs("a",{href:d,target:"_blank",rel:"noopener noreferrer",className:"group flex flex-col p-5",style:{border:"1px solid hsl(var(--border))",borderRadius:"0.125rem",background:"hsl(var(--background) / 0.4)",transition:"border-color 240ms ease, transform 240ms ease"},onMouseEnter:p=>{p.currentTarget.style.borderColor="var(--c-primary)",p.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:p=>{p.currentTarget.style.borderColor="hsl(var(--border))",p.currentTarget.style.transform="none"},children:[j.jsxs("div",{className:"flex items-center justify-between mb-3",children:[j.jsx(r,{size:18,style:{color:"var(--c-primary)"}}),j.jsx(R_,{size:16,style:{color:"hsl(var(--muted-foreground))"}})]}),j.jsx("p",{className:"micro-label mb-1",children:l}),j.jsx("p",{className:"font-medium",style:{color:"var(--c-fg)",fontSize:"0.95rem",wordBreak:"break-word"},children:u})]},l))}),j.jsxs("div",{className:"mt-8 flex flex-wrap items-center gap-4",children:[j.jsx("button",{type:"button",onClick:()=>window.open("https://mail.google.com/mail/?view=cm&fs=1&to=mgoher@seas.upenn.edu","_blank"),className:"btn-primary text-sm",children:"Send a quick email"}),j.jsx("a",{href:"/files/Abdullah_resume.docx",download:"Abdullah_resume",target:"_blank",rel:"noreferrer",className:"btn-secondary text-sm",children:"Download resume"}),j.jsx("div",{className:"flex items-center gap-3 ml-auto",children:NA.map(({icon:r,href:l,label:u})=>j.jsx("a",{href:l,target:"_blank",rel:"noopener noreferrer","aria-label":u,className:"p-2 transition-colors",style:{color:"hsl(var(--muted-foreground))",border:"1px solid hsl(var(--border))",borderRadius:"0.125rem"},onMouseEnter:d=>{d.currentTarget.style.color="var(--c-primary)",d.currentTarget.style.borderColor="var(--c-primary)"},onMouseLeave:d=>{d.currentTarget.style.color="hsl(var(--muted-foreground))",d.currentTarget.style.borderColor="hsl(var(--border))"},children:j.jsx(r,{size:16})},u))})]})]})]})})}function PA(){return j.jsx("footer",{className:"relative z-10 py-12 px-6 md:px-10 lg:px-16",style:{background:"hsl(var(--hero-bg) / 0.85)",borderTop:"1px solid hsl(var(--border))",backdropFilter:"blur(14px)"},children:j.jsxs("div",{className:"max-w-7xl mx-auto",children:[j.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-6",children:[j.jsxs("div",{children:[j.jsx("p",{className:"micro-label-accent mb-2",children:"§ END"}),j.jsx("h3",{className:"text-xl font-semibold tracking-tight",style:{color:"var(--c-fg)"},children:"Abdullah Goher"}),j.jsx("p",{className:"text-sm mt-1",style:{color:"hsl(var(--muted-foreground))"},children:"Junior at the University of Pennsylvania"})]}),j.jsx("div",{className:"flex space-x-3",children:[{Icon:Ic,href:"https://github.com/Abdullah3245",label:"GitHub"},{Icon:Eh,href:"https://www.linkedin.com/in/abdullah-goher-801ba227b/",label:"LinkedIn"},{Icon:Th,href:"https://mail.google.com/mail/?view=cm&fs=1&to=mgoher@seas.upenn.edu",label:"Email"}].map(({Icon:s,href:e,label:i})=>j.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer","aria-label":i,className:"p-2.5 transition-colors",style:{color:"hsl(var(--muted-foreground))",border:"1px solid hsl(var(--border))",borderRadius:"0.125rem"},onMouseEnter:r=>{r.currentTarget.style.color="var(--c-primary)",r.currentTarget.style.borderColor="var(--c-primary)"},onMouseLeave:r=>{r.currentTarget.style.color="hsl(var(--muted-foreground))",r.currentTarget.style.borderColor="hsl(var(--border))"},children:j.jsx(s,{size:16})},i))})]}),j.jsx("hr",{className:"my-8",style:{border:0,borderTop:"1px solid hsl(var(--border) / 0.6)"}}),j.jsxs("div",{className:"flex flex-col md:flex-row justify-between gap-3 text-xs uppercase tracking-[0.16em]",style:{color:"hsl(var(--muted-foreground))"},children:[j.jsxs("p",{children:["© ",new Date().getFullYear()," Abdullah Goher. All rights reserved."]}),j.jsxs("p",{children:["Built with React · Vite · Spline ·"," ",j.jsx("span",{style:{color:"var(--c-primary)"},children:"Sora"})]})]})]})})}const OA=[{title:"Machine Learning Engineer",company:"PennAdapt",subCompany:"Penn Assistive Devices and Prosthetic Technologies",location:"Philadelphia, PA",period:"09/2024 — Present",type:"Student Org",description:"Collaborated in a team of 10 engineers to develop a computer vision model for counting and identifying surgical tools in real-time during procedures, enhancing surgical precision and safety.",achievements:["Curated and annotated a custom 1500+ image dataset in collaboration with surgeons and nurses at Penn Medicine","Trained deep CNN and Vision Transformer models, fine-tuned through iterative optimization to 90%+ accuracy across varying tool angles"],technologies:["PyTorch","Computer Vision","CNN","ViT","Deep Learning"],website:"https://pennadapt.wixsite.com/pennadapt",icon:"ml"},{title:"Data Science Research Assistant",company:"Computational Social Science Lab",location:"Philadelphia, PA",period:"05/2025 — 12/2025",type:"Full-time",description:"Collaborate with the Disaster Management team to derive key mobility and infrastructure metrics for disaster and tourist management during the 2026 FIFA World Cup.",achievements:["Analyze multi-terabyte GPS mobility geospatial datasets (Meta Crisis Population, Factori, SafeGraph) using Apache PySpark on AWS EMR to compute high-resolution crowd-density and movement trends","Visualized insights through heat maps and geospatial plots of GPS pings and POI polygons using Matplotlib and GeoPandas","Developed a Generative AI (RAG) extraction pipeline to identify quantitative mobility metrics from 100s of scholarly papers"],technologies:["Apache PySpark","AWS EMR","Matplotlib","GeoPandas","RAG","Geospatial"],website:"https://css.seas.upenn.edu/",icon:"research"},{title:"Full Stack Web Developer",company:"Children's Hospital of Philadelphia",location:"Philadelphia, PA",period:"11/2024 — 08/2025",type:"Part-time",description:"Assisted in development of Compsy full stack web app used by researchers to design behavioral and clinical experiments.",achievements:["Designed responsive dashboard and 15+ data-entry forms (create / edit / delete) using React + Vite + Tailwind, integrated via REST API to a NoSQL MongoDB","Implemented secure stateless authentication (JWT in HTTP-only cookies) and context-based user data fetching","Added responsive design through media queries and component-level breakpoints across desktop, tablet, and mobile"],technologies:["React","Vite","Tailwind","MongoDB","REST","JWT"],website:"https://www.research.chop.edu/people/birkan-tunc",icon:"frontend"},{title:"Data Analyst Intern",company:"Clab AI",location:"Hybrid · Nashville",period:"05/2024 — 08/2024",type:"Full-time",description:"Assisted in development of an AI-powered college application assistant used by 100+ students to improve admission outcomes.",achievements:["Performed extensive EDA, data cleaning, and visualization on a dataset of 100+ universities, surfacing trends in financial-aid awards and admissions patterns","Built Random-Forest and Linear-Regression models with hyper-parameter tuning that predicted aid eligibility with 82% R² on validation","Fine-tuned LLMs on accepted Common App essays with RLHF to improve personalization and writing guidance"],technologies:["Python","Random Forest","Pandas","EDA","RLHF","LLMs"],website:"https://clabapp.ai/signin",icon:"intern"}];function IA({icon:s}){const e=s==="research"?WS:s==="frontend"?FS:s==="ml"?GS:LS;return j.jsx(e,{size:18,style:{color:"var(--c-primary)"}})}function FA({exp:s,index:e}){const i=yt.useRef(null),[r,l]=yt.useState(!1);return yt.useEffect(()=>{const u=i.current;if(!u)return;const d=new IntersectionObserver(p=>{for(const m of p)if(m.isIntersecting){l(!0),d.disconnect();break}},{threshold:.18,rootMargin:"0px 0px -10% 0px"});return d.observe(u),()=>d.disconnect()},[]),j.jsxs("div",{ref:i,className:"journey-card p-7 md:p-9",style:{opacity:r?1:0,transform:r?"none":"translateY(28px)",transition:"opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 700ms cubic-bezier(0.16, 1, 0.3, 1)",transitionDelay:`${Math.min(e*90,270)}ms`},children:[j.jsxs("div",{className:"flex items-baseline justify-between gap-4 mb-3",children:[j.jsxs("span",{className:"micro-label-accent",children:[String(e+1).padStart(2,"0")," · ",s.type]}),j.jsx("span",{className:"micro-label",children:s.period})]}),j.jsxs("div",{className:"flex items-start gap-4 mb-2",children:[j.jsx(IA,{icon:s.icon}),j.jsxs("div",{className:"flex-1",children:[j.jsx("h3",{className:"text-xl md:text-2xl font-semibold tracking-tight",style:{color:"var(--c-fg)"},children:s.title}),j.jsxs("div",{className:"mt-1 flex flex-wrap items-center gap-x-2 gap-y-1",style:{color:"hsl(var(--muted-foreground))"},children:[j.jsx("span",{style:{color:"var(--c-fg)",fontWeight:500},children:s.company}),j.jsx("span",{children:"·"}),j.jsxs("span",{className:"flex items-center gap-1 text-sm",children:[j.jsx(w_,{size:13})," ",s.location]}),j.jsx("span",{children:"·"}),j.jsxs("span",{className:"flex items-center gap-1 text-sm",children:[j.jsx(OS,{size:13})," ",s.period]})]}),s.subCompany&&j.jsx("p",{className:"mt-1 text-xs",style:{color:"hsl(var(--muted-foreground))",letterSpacing:"0.02em"},children:s.subCompany})]}),j.jsxs("a",{href:s.website,target:"_blank",rel:"noopener noreferrer",className:"text-xs uppercase tracking-[0.16em] flex items-center gap-1 transition-colors",style:{color:"hsl(var(--muted-foreground))"},onMouseEnter:u=>u.currentTarget.style.color="var(--c-primary)",onMouseLeave:u=>u.currentTarget.style.color="hsl(var(--muted-foreground))",children:["Visit ",j.jsx(C_,{size:12})]})]}),j.jsx("p",{className:"mt-4 text-sm md:text-base leading-relaxed",style:{color:"hsl(var(--foreground) / 0.82)"},children:s.description}),j.jsx("ul",{className:"mt-5 space-y-2",children:s.achievements.map((u,d)=>j.jsxs("li",{className:"flex items-start gap-3 text-sm md:text-[0.95rem] leading-relaxed",style:{color:"hsl(var(--foreground) / 0.78)"},children:[j.jsx("span",{className:"mt-2 inline-block w-2 h-2 flex-shrink-0",style:{background:"var(--c-primary)"}}),j.jsx("span",{children:u})]},d))}),j.jsx("div",{className:"mt-6 flex flex-wrap gap-2",children:s.technologies.map(u=>j.jsx("span",{className:"px-3 py-1 text-xs",style:{border:"1px solid hsl(var(--border))",color:"hsl(var(--foreground) / 0.85)",borderRadius:"0.125rem"},children:u},u))})]})}function BA(){return j.jsx("section",{id:"experience",className:"relative z-10 px-6 md:px-10 lg:px-16 py-24 md:py-32",children:j.jsxs("div",{className:"max-w-5xl mx-auto",children:[j.jsxs("header",{className:"mb-14",children:[j.jsx("p",{className:"micro-label-accent mb-3",children:"§01 / Experience"}),j.jsx("h2",{className:"text-3xl md:text-5xl font-semibold tracking-tight",style:{color:"var(--c-fg)",lineHeight:1.05},children:"Where I've shipped."}),j.jsx("p",{className:"mt-4 max-w-xl",style:{color:"hsl(var(--muted-foreground))"},children:"Research at Penn, full-stack engineering at CHOP, applied ML at PennAdapt, and analytics at Clab AI."})]}),j.jsx("div",{className:"space-y-6 md:space-y-8",children:OA.map((s,e)=>j.jsx(FA,{exp:s,index:e},s.company))})]})})}const zA="modulepreload",HA=function(s,e){return new URL(s,e).href},T_={},GA=function(e,i,r){let l=Promise.resolve();if(i&&i.length>0){let d=function(_){return Promise.all(_.map(y=>Promise.resolve(y).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};const p=document.getElementsByTagName("link"),m=document.querySelector("meta[property=csp-nonce]"),h=(m==null?void 0:m.nonce)||(m==null?void 0:m.getAttribute("nonce"));l=d(i.map(_=>{if(_=HA(_,r),_ in T_)return;T_[_]=!0;const y=_.endsWith(".css"),g=y?'[rel="stylesheet"]':"";if(!!r)for(let D=p.length-1;D>=0;D--){const S=p[D];if(S.href===_&&(!y||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${_}"]${g}`))return;const E=document.createElement("link");if(E.rel=y?"stylesheet":zA,y||(E.as="script"),E.crossOrigin="",E.href=_,h&&E.setAttribute("nonce",h),document.head.appendChild(E),y)return new Promise((D,S)=>{E.addEventListener("load",D),E.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${_}`)))})}))}function u(d){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=d,window.dispatchEvent(p),!p.defaultPrevented)throw d}return l.then(d=>{for(const p of d||[])p.status==="rejected"&&u(p.reason);return e().catch(u)})};function VA(){const[s,e]=yt.useState(0),i=yt.useRef(null);return yt.useEffect(()=>{const r=()=>{const u=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),d=window.innerHeight,p=Math.max(1,u-d),m=Math.min(1,Math.max(0,window.scrollY/p));e(m),document.documentElement.style.setProperty("--scroll-progress",String(m))},l=()=>{i.current==null&&(i.current=requestAnimationFrame(()=>{i.current=null,r()}))};return r(),window.addEventListener("scroll",l,{passive:!0}),window.addEventListener("resize",r),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",r),i.current!=null&&cancelAnimationFrame(i.current)}},[]),s}const kA=yt.lazy(()=>GA(()=>import("./react-spline-ByNQekl-.js").then(s=>s.r),[],import.meta.url)),XA="https://prod.spline.design/Slk6b8kz3LRlKiyk/scene.splinecode";function WA(){const s=yt.useRef(null),e=VA();return yt.useEffect(()=>{const i=s.current;if(!i||typeof i.findObjectByName!="function")return;const r=["Camera","camera","Scene","Group","Cube"];for(const l of r){const u=i.findObjectByName(l);if(u&&u.rotation){u.rotation.y=e*.21;return}}},[e]),j.jsxs("div",{"aria-hidden":"true",className:"fixed inset-0 pointer-events-none",style:{zIndex:0,background:"var(--c-hero-bg)"},children:[j.jsx(yt.Suspense,{fallback:j.jsx("div",{className:"absolute inset-0",style:{background:"var(--c-hero-bg)"}}),children:j.jsx(kA,{scene:XA,className:"w-full h-full",onLoad:i=>{s.current=i}})}),j.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:"radial-gradient(ellipse at center, hsl(var(--hero-bg) / 0.0) 0%, hsl(var(--hero-bg) / 0.5) 70%, hsl(var(--hero-bg) / 0.92) 100%)"}})]})}function qA(){const[s,e]=yt.useState("home");return j.jsxs("div",{className:"min-h-screen relative",style:{background:"var(--c-hero-bg)"},children:[j.jsx(WA,{}),j.jsx(ly,{activeSection:s,setActiveSection:e}),j.jsxs("main",{className:"relative",children:[j.jsx(bA,{}),j.jsx(BA,{}),j.jsx(DA,{}),j.jsx(RA,{}),j.jsx(LA,{})]}),j.jsx(PA,{})]})}bS.createRoot(document.getElementById("root")).render(j.jsx(yt.StrictMode,{children:j.jsx(qA,{})}));export{GA as _,j,yt as r};
