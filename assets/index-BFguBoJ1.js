(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const p of c.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();var gh={exports:{}},sa={},yh={exports:{}},we={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function pv(){if(Bp)return we;Bp=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),p=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),D=Symbol.iterator;function M(O){return O===null||typeof O!="object"?null:(O=D&&O[D]||O["@@iterator"],typeof O=="function"?O:null)}var K={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,Y={};function X(O,j,ae){this.props=O,this.context=j,this.refs=Y,this.updater=ae||K}X.prototype.isReactComponent={},X.prototype.setState=function(O,j){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,j,"setState")},X.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function ye(){}ye.prototype=X.prototype;function pe(O,j,ae){this.props=O,this.context=j,this.refs=Y,this.updater=ae||K}var me=pe.prototype=new ye;me.constructor=pe,Q(me,X.prototype),me.isPureReactComponent=!0;var ke=Array.isArray,tt=Object.prototype.hasOwnProperty,xe={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function T(O,j,ae){var _e,Ee={},Se=null,Ne=null;if(j!=null)for(_e in j.ref!==void 0&&(Ne=j.ref),j.key!==void 0&&(Se=""+j.key),j)tt.call(j,_e)&&!P.hasOwnProperty(_e)&&(Ee[_e]=j[_e]);var De=arguments.length-2;if(De===1)Ee.children=ae;else if(1<De){for(var Ue=Array(De),ht=0;ht<De;ht++)Ue[ht]=arguments[ht+2];Ee.children=Ue}if(O&&O.defaultProps)for(_e in De=O.defaultProps,De)Ee[_e]===void 0&&(Ee[_e]=De[_e]);return{$$typeof:i,type:O,key:Se,ref:Ne,props:Ee,_owner:xe.current}}function S(O,j){return{$$typeof:i,type:O.type,key:j,ref:O.ref,props:O.props,_owner:O._owner}}function k(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function N(O){var j={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ae){return j[ae]})}var x=/\/+/g;function I(O,j){return typeof O=="object"&&O!==null&&O.key!=null?N(""+O.key):j.toString(36)}function Je(O,j,ae,_e,Ee){var Se=typeof O;(Se==="undefined"||Se==="boolean")&&(O=null);var Ne=!1;if(O===null)Ne=!0;else switch(Se){case"string":case"number":Ne=!0;break;case"object":switch(O.$$typeof){case i:case e:Ne=!0}}if(Ne)return Ne=O,Ee=Ee(Ne),O=_e===""?"."+I(Ne,0):_e,ke(Ee)?(ae="",O!=null&&(ae=O.replace(x,"$&/")+"/"),Je(Ee,j,ae,"",function(ht){return ht})):Ee!=null&&(k(Ee)&&(Ee=S(Ee,ae+(!Ee.key||Ne&&Ne.key===Ee.key?"":(""+Ee.key).replace(x,"$&/")+"/")+O)),j.push(Ee)),1;if(Ne=0,_e=_e===""?".":_e+":",ke(O))for(var De=0;De<O.length;De++){Se=O[De];var Ue=_e+I(Se,De);Ne+=Je(Se,j,ae,Ue,Ee)}else if(Ue=M(O),typeof Ue=="function")for(O=Ue.call(O),De=0;!(Se=O.next()).done;)Se=Se.value,Ue=_e+I(Se,De++),Ne+=Je(Se,j,ae,Ue,Ee);else if(Se==="object")throw j=String(O),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return Ne}function Ct(O,j,ae){if(O==null)return O;var _e=[],Ee=0;return Je(O,_e,"","",function(Se){return j.call(ae,Se,Ee++)}),_e}function Rt(O){if(O._status===-1){var j=O._result;j=j(),j.then(function(ae){(O._status===0||O._status===-1)&&(O._status=1,O._result=ae)},function(ae){(O._status===0||O._status===-1)&&(O._status=2,O._result=ae)}),O._status===-1&&(O._status=0,O._result=j)}if(O._status===1)return O._result.default;throw O._result}var Le={current:null},J={transition:null},le={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:J,ReactCurrentOwner:xe};function ee(){throw Error("act(...) is not supported in production builds of React.")}return we.Children={map:Ct,forEach:function(O,j,ae){Ct(O,function(){j.apply(this,arguments)},ae)},count:function(O){var j=0;return Ct(O,function(){j++}),j},toArray:function(O){return Ct(O,function(j){return j})||[]},only:function(O){if(!k(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},we.Component=X,we.Fragment=n,we.Profiler=a,we.PureComponent=pe,we.StrictMode=s,we.Suspense=_,we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,we.act=ee,we.cloneElement=function(O,j,ae){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var _e=Q({},O.props),Ee=O.key,Se=O.ref,Ne=O._owner;if(j!=null){if(j.ref!==void 0&&(Se=j.ref,Ne=xe.current),j.key!==void 0&&(Ee=""+j.key),O.type&&O.type.defaultProps)var De=O.type.defaultProps;for(Ue in j)tt.call(j,Ue)&&!P.hasOwnProperty(Ue)&&(_e[Ue]=j[Ue]===void 0&&De!==void 0?De[Ue]:j[Ue])}var Ue=arguments.length-2;if(Ue===1)_e.children=ae;else if(1<Ue){De=Array(Ue);for(var ht=0;ht<Ue;ht++)De[ht]=arguments[ht+2];_e.children=De}return{$$typeof:i,type:O.type,key:Ee,ref:Se,props:_e,_owner:Ne}},we.createContext=function(O){return O={$$typeof:p,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:c,_context:O},O.Consumer=O},we.createElement=T,we.createFactory=function(O){var j=T.bind(null,O);return j.type=O,j},we.createRef=function(){return{current:null}},we.forwardRef=function(O){return{$$typeof:g,render:O}},we.isValidElement=k,we.lazy=function(O){return{$$typeof:C,_payload:{_status:-1,_result:O},_init:Rt}},we.memo=function(O,j){return{$$typeof:E,type:O,compare:j===void 0?null:j}},we.startTransition=function(O){var j=J.transition;J.transition={};try{O()}finally{J.transition=j}},we.unstable_act=ee,we.useCallback=function(O,j){return Le.current.useCallback(O,j)},we.useContext=function(O){return Le.current.useContext(O)},we.useDebugValue=function(){},we.useDeferredValue=function(O){return Le.current.useDeferredValue(O)},we.useEffect=function(O,j){return Le.current.useEffect(O,j)},we.useId=function(){return Le.current.useId()},we.useImperativeHandle=function(O,j,ae){return Le.current.useImperativeHandle(O,j,ae)},we.useInsertionEffect=function(O,j){return Le.current.useInsertionEffect(O,j)},we.useLayoutEffect=function(O,j){return Le.current.useLayoutEffect(O,j)},we.useMemo=function(O,j){return Le.current.useMemo(O,j)},we.useReducer=function(O,j,ae){return Le.current.useReducer(O,j,ae)},we.useRef=function(O){return Le.current.useRef(O)},we.useState=function(O){return Le.current.useState(O)},we.useSyncExternalStore=function(O,j,ae){return Le.current.useSyncExternalStore(O,j,ae)},we.useTransition=function(){return Le.current.useTransition()},we.version="18.3.1",we}var $p;function Zh(){return $p||($p=1,yh.exports=pv()),yh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function mv(){if(Hp)return sa;Hp=1;var i=Zh(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function p(g,_,E){var C,D={},M=null,K=null;E!==void 0&&(M=""+E),_.key!==void 0&&(M=""+_.key),_.ref!==void 0&&(K=_.ref);for(C in _)s.call(_,C)&&!c.hasOwnProperty(C)&&(D[C]=_[C]);if(g&&g.defaultProps)for(C in _=g.defaultProps,_)D[C]===void 0&&(D[C]=_[C]);return{$$typeof:e,type:g,key:M,ref:K,props:D,_owner:a.current}}return sa.Fragment=n,sa.jsx=p,sa.jsxs=p,sa}var Wp;function gv(){return Wp||(Wp=1,gh.exports=mv()),gh.exports}var oe=gv(),ji=Zh(),Xl={},_h={exports:{}},Kt={},vh={exports:{}},Eh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp;function yv(){return qp||(qp=1,(function(i){function e(J,le){var ee=J.length;J.push(le);e:for(;0<ee;){var O=ee-1>>>1,j=J[O];if(0<a(j,le))J[O]=le,J[ee]=j,ee=O;else break e}}function n(J){return J.length===0?null:J[0]}function s(J){if(J.length===0)return null;var le=J[0],ee=J.pop();if(ee!==le){J[0]=ee;e:for(var O=0,j=J.length,ae=j>>>1;O<ae;){var _e=2*(O+1)-1,Ee=J[_e],Se=_e+1,Ne=J[Se];if(0>a(Ee,ee))Se<j&&0>a(Ne,Ee)?(J[O]=Ne,J[Se]=ee,O=Se):(J[O]=Ee,J[_e]=ee,O=_e);else if(Se<j&&0>a(Ne,ee))J[O]=Ne,J[Se]=ee,O=Se;else break e}}return le}function a(J,le){var ee=J.sortIndex-le.sortIndex;return ee!==0?ee:J.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;i.unstable_now=function(){return c.now()}}else{var p=Date,g=p.now();i.unstable_now=function(){return p.now()-g}}var _=[],E=[],C=1,D=null,M=3,K=!1,Q=!1,Y=!1,X=typeof setTimeout=="function"?setTimeout:null,ye=typeof clearTimeout=="function"?clearTimeout:null,pe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function me(J){for(var le=n(E);le!==null;){if(le.callback===null)s(E);else if(le.startTime<=J)s(E),le.sortIndex=le.expirationTime,e(_,le);else break;le=n(E)}}function ke(J){if(Y=!1,me(J),!Q)if(n(_)!==null)Q=!0,Rt(tt);else{var le=n(E);le!==null&&Le(ke,le.startTime-J)}}function tt(J,le){Q=!1,Y&&(Y=!1,ye(T),T=-1),K=!0;var ee=M;try{for(me(le),D=n(_);D!==null&&(!(D.expirationTime>le)||J&&!N());){var O=D.callback;if(typeof O=="function"){D.callback=null,M=D.priorityLevel;var j=O(D.expirationTime<=le);le=i.unstable_now(),typeof j=="function"?D.callback=j:D===n(_)&&s(_),me(le)}else s(_);D=n(_)}if(D!==null)var ae=!0;else{var _e=n(E);_e!==null&&Le(ke,_e.startTime-le),ae=!1}return ae}finally{D=null,M=ee,K=!1}}var xe=!1,P=null,T=-1,S=5,k=-1;function N(){return!(i.unstable_now()-k<S)}function x(){if(P!==null){var J=i.unstable_now();k=J;var le=!0;try{le=P(!0,J)}finally{le?I():(xe=!1,P=null)}}else xe=!1}var I;if(typeof pe=="function")I=function(){pe(x)};else if(typeof MessageChannel<"u"){var Je=new MessageChannel,Ct=Je.port2;Je.port1.onmessage=x,I=function(){Ct.postMessage(null)}}else I=function(){X(x,0)};function Rt(J){P=J,xe||(xe=!0,I())}function Le(J,le){T=X(function(){J(i.unstable_now())},le)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(J){J.callback=null},i.unstable_continueExecution=function(){Q||K||(Q=!0,Rt(tt))},i.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<J?Math.floor(1e3/J):5},i.unstable_getCurrentPriorityLevel=function(){return M},i.unstable_getFirstCallbackNode=function(){return n(_)},i.unstable_next=function(J){switch(M){case 1:case 2:case 3:var le=3;break;default:le=M}var ee=M;M=le;try{return J()}finally{M=ee}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(J,le){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var ee=M;M=J;try{return le()}finally{M=ee}},i.unstable_scheduleCallback=function(J,le,ee){var O=i.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?O+ee:O):ee=O,J){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=ee+j,J={id:C++,callback:le,priorityLevel:J,startTime:ee,expirationTime:j,sortIndex:-1},ee>O?(J.sortIndex=ee,e(E,J),n(_)===null&&J===n(E)&&(Y?(ye(T),T=-1):Y=!0,Le(ke,ee-O))):(J.sortIndex=j,e(_,J),Q||K||(Q=!0,Rt(tt))),J},i.unstable_shouldYield=N,i.unstable_wrapCallback=function(J){var le=M;return function(){var ee=M;M=le;try{return J.apply(this,arguments)}finally{M=ee}}}})(Eh)),Eh}var Gp;function _v(){return Gp||(Gp=1,vh.exports=yv()),vh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function vv(){if(Kp)return Kt;Kp=1;var i=Zh(),e=_v();function n(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function c(t,r){p(t,r),p(t+"Capture",r)}function p(t,r){for(a[t]=r,t=0;t<r.length;t++)s.add(r[t])}var g=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_=Object.prototype.hasOwnProperty,E=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,C={},D={};function M(t){return _.call(D,t)?!0:_.call(C,t)?!1:E.test(t)?D[t]=!0:(C[t]=!0,!1)}function K(t,r,o,u){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Q(t,r,o,u){if(r===null||typeof r>"u"||K(t,r,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Y(t,r,o,u,h,d,y){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=o,this.propertyName=t,this.type=r,this.sanitizeURL=d,this.removeEmptyString=y}var X={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){X[t]=new Y(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];X[r]=new Y(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){X[t]=new Y(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){X[t]=new Y(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){X[t]=new Y(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){X[t]=new Y(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){X[t]=new Y(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){X[t]=new Y(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){X[t]=new Y(t,5,!1,t.toLowerCase(),null,!1,!1)});var ye=/[\-:]([a-z])/g;function pe(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(ye,pe);X[r]=new Y(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(ye,pe);X[r]=new Y(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(ye,pe);X[r]=new Y(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){X[t]=new Y(t,1,!1,t.toLowerCase(),null,!1,!1)}),X.xlinkHref=new Y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){X[t]=new Y(t,1,!1,t.toLowerCase(),null,!0,!0)});function me(t,r,o,u){var h=X.hasOwnProperty(r)?X[r]:null;(h!==null?h.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Q(r,o,h,u)&&(o=null),u||h===null?M(r)&&(o===null?t.removeAttribute(r):t.setAttribute(r,""+o)):h.mustUseProperty?t[h.propertyName]=o===null?h.type===3?!1:"":o:(r=h.attributeName,u=h.attributeNamespace,o===null?t.removeAttribute(r):(h=h.type,o=h===3||h===4&&o===!0?"":""+o,u?t.setAttributeNS(u,r,o):t.setAttribute(r,o))))}var ke=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tt=Symbol.for("react.element"),xe=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),N=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),Je=Symbol.for("react.suspense_list"),Ct=Symbol.for("react.memo"),Rt=Symbol.for("react.lazy"),Le=Symbol.for("react.offscreen"),J=Symbol.iterator;function le(t){return t===null||typeof t!="object"?null:(t=J&&t[J]||t["@@iterator"],typeof t=="function"?t:null)}var ee=Object.assign,O;function j(t){if(O===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+t}var ae=!1;function _e(t,r){if(!t||ae)return"";ae=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(F){var u=F}Reflect.construct(t,[],r)}else{try{r.call()}catch(F){u=F}t.call(r.prototype)}else{try{throw Error()}catch(F){u=F}t()}}catch(F){if(F&&u&&typeof F.stack=="string"){for(var h=F.stack.split(`
`),d=u.stack.split(`
`),y=h.length-1,w=d.length-1;1<=y&&0<=w&&h[y]!==d[w];)w--;for(;1<=y&&0<=w;y--,w--)if(h[y]!==d[w]){if(y!==1||w!==1)do if(y--,w--,0>w||h[y]!==d[w]){var A=`
`+h[y].replace(" at new "," at ");return t.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",t.displayName)),A}while(1<=y&&0<=w);break}}}finally{ae=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?j(t):""}function Ee(t){switch(t.tag){case 5:return j(t.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return t=_e(t.type,!1),t;case 11:return t=_e(t.type.render,!1),t;case 1:return t=_e(t.type,!0),t;default:return""}}function Se(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case P:return"Fragment";case xe:return"Portal";case S:return"Profiler";case T:return"StrictMode";case I:return"Suspense";case Je:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case N:return(t.displayName||"Context")+".Consumer";case k:return(t._context.displayName||"Context")+".Provider";case x:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ct:return r=t.displayName||null,r!==null?r:Se(t.type)||"Memo";case Rt:r=t._payload,t=t._init;try{return Se(t(r))}catch{}}return null}function Ne(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(r);case 8:return r===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function De(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ue(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function ht(t){var r=Ue(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),u=""+t[r];if(!t.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,d=o.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return h.call(this)},set:function(y){u=""+y,d.call(this,y)}}),Object.defineProperty(t,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(y){u=""+y},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function Zn(t){t._valueTracker||(t._valueTracker=ht(t))}function Zi(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return t&&(u=Ue(t)?t.checked?"true":"false":t.value),t=u,t!==o?(r.setValue(t),!0):!1}function kr(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function hi(t,r){var o=r.checked;return ee({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function es(t,r){var o=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;o=De(r.value!=null?r.value:o),t._wrapperState={initialChecked:u,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function co(t,r){r=r.checked,r!=null&&me(t,"checked",r,!1)}function ho(t,r){co(t,r);var o=De(r.value),u=r.type;if(o!=null)u==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?ts(t,r.type,o):r.hasOwnProperty("defaultValue")&&ts(t,r.type,De(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function La(t,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,o||r===t.value||(t.value=r),t.defaultValue=r}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function ts(t,r,o){(r!=="number"||kr(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var er=Array.isArray;function tr(t,r,o,u){if(t=t.options,r){r={};for(var h=0;h<o.length;h++)r["$"+o[h]]=!0;for(o=0;o<t.length;o++)h=r.hasOwnProperty("$"+t[o].value),t[o].selected!==h&&(t[o].selected=h),h&&u&&(t[o].defaultSelected=!0)}else{for(o=""+De(o),r=null,h=0;h<t.length;h++){if(t[h].value===o){t[h].selected=!0,u&&(t[h].defaultSelected=!0);return}r!==null||t[h].disabled||(r=t[h])}r!==null&&(r.selected=!0)}}function fo(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(n(91));return ee({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ns(t,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(n(92));if(er(o)){if(1<o.length)throw Error(n(93));o=o[0]}r=o}r==null&&(r=""),o=r}t._wrapperState={initialValue:De(o)}}function rs(t,r){var o=De(r.value),u=De(r.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),r.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),u!=null&&(t.defaultValue=""+u)}function po(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function ot(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function at(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?ot(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var nr,mo=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,u,h){MSApp.execUnsafeLocalFunction(function(){return t(r,o,u,h)})}:t})(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(nr=nr||document.createElement("div"),nr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=nr.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function Pr(t,r){if(r){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=r;return}}t.textContent=r}var fi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},di=["Webkit","ms","Moz","O"];Object.keys(fi).forEach(function(t){di.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),fi[r]=fi[t]})});function go(t,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||fi.hasOwnProperty(t)&&fi[t]?(""+r).trim():r+"px"}function yo(t,r){t=t.style;for(var o in r)if(r.hasOwnProperty(o)){var u=o.indexOf("--")===0,h=go(o,r[o],u);o==="float"&&(o="cssFloat"),u?t.setProperty(o,h):t[o]=h}}var _o=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vo(t,r){if(r){if(_o[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(n(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(n(61))}if(r.style!=null&&typeof r.style!="object")throw Error(n(62))}}function Eo(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pi=null;function is(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ss=null,sn=null,Un=null;function os(t){if(t=Ho(t)){if(typeof ss!="function")throw Error(n(280));var r=t.stateNode;r&&(r=hl(r),ss(t.stateNode,t.type,r))}}function Fn(t){sn?Un?Un.push(t):Un=[t]:sn=t}function wo(){if(sn){var t=sn,r=Un;if(Un=sn=null,os(t),r)for(t=0;t<r.length;t++)os(r[t])}}function mi(t,r){return t(r)}function To(){}var rr=!1;function Io(t,r,o){if(rr)return t(r,o);rr=!0;try{return mi(t,r,o)}finally{rr=!1,(sn!==null||Un!==null)&&(To(),wo())}}function Ye(t,r){var o=t.stateNode;if(o===null)return null;var u=hl(o);if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,r,typeof o));return o}var as=!1;if(g)try{var gn={};Object.defineProperty(gn,"passive",{get:function(){as=!0}}),window.addEventListener("test",gn,gn),window.removeEventListener("test",gn,gn)}catch{as=!1}function gi(t,r,o,u,h,d,y,w,A){var F=Array.prototype.slice.call(arguments,3);try{r.apply(o,F)}catch($){this.onError($)}}var yi=!1,ls=null,yn=!1,So=null,Hu={onError:function(t){yi=!0,ls=t}};function us(t,r,o,u,h,d,y,w,A){yi=!1,ls=null,gi.apply(Hu,arguments)}function Ma(t,r,o,u,h,d,y,w,A){if(us.apply(this,arguments),yi){if(yi){var F=ls;yi=!1,ls=null}else throw Error(n(198));yn||(yn=!0,So=F)}}function _n(t){var r=t,o=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(o=r.return),t=r.return;while(t)}return r.tag===3?o:null}function _i(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function vn(t){if(_n(t)!==t)throw Error(n(188))}function Ua(t){var r=t.alternate;if(!r){if(r=_n(t),r===null)throw Error(n(188));return r!==t?null:t}for(var o=t,u=r;;){var h=o.return;if(h===null)break;var d=h.alternate;if(d===null){if(u=h.return,u!==null){o=u;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===o)return vn(h),t;if(d===u)return vn(h),r;d=d.sibling}throw Error(n(188))}if(o.return!==u.return)o=h,u=d;else{for(var y=!1,w=h.child;w;){if(w===o){y=!0,o=h,u=d;break}if(w===u){y=!0,u=h,o=d;break}w=w.sibling}if(!y){for(w=d.child;w;){if(w===o){y=!0,o=d,u=h;break}if(w===u){y=!0,u=d,o=h;break}w=w.sibling}if(!y)throw Error(n(189))}}if(o.alternate!==u)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:r}function Ao(t){return t=Ua(t),t!==null?cs(t):null}function cs(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=cs(t);if(r!==null)return r;t=t.sibling}return null}var hs=e.unstable_scheduleCallback,Co=e.unstable_cancelCallback,Fa=e.unstable_shouldYield,Wu=e.unstable_requestPaint,Fe=e.unstable_now,ba=e.unstable_getCurrentPriorityLevel,vi=e.unstable_ImmediatePriority,Nr=e.unstable_UserBlockingPriority,on=e.unstable_NormalPriority,Ro=e.unstable_LowPriority,ja=e.unstable_IdlePriority,Ei=null,Jt=null;function za(t){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(Ei,t,void 0,(t.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:$a,ko=Math.log,Ba=Math.LN2;function $a(t){return t>>>=0,t===0?32:31-(ko(t)/Ba|0)|0}var fs=64,ds=4194304;function Dr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wi(t,r){var o=t.pendingLanes;if(o===0)return 0;var u=0,h=t.suspendedLanes,d=t.pingedLanes,y=o&268435455;if(y!==0){var w=y&~h;w!==0?u=Dr(w):(d&=y,d!==0&&(u=Dr(d)))}else y=o&~h,y!==0?u=Dr(y):d!==0&&(u=Dr(d));if(u===0)return 0;if(r!==0&&r!==u&&(r&h)===0&&(h=u&-u,d=r&-r,h>=d||h===16&&(d&4194240)!==0))return r;if((u&4)!==0&&(u|=o&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=u;0<r;)o=31-Ut(r),h=1<<o,u|=t[o],r&=~h;return u}function qu(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ir(t,r){for(var o=t.suspendedLanes,u=t.pingedLanes,h=t.expirationTimes,d=t.pendingLanes;0<d;){var y=31-Ut(d),w=1<<y,A=h[y];A===-1?((w&o)===0||(w&u)!==0)&&(h[y]=qu(w,r)):A<=r&&(t.expiredLanes|=w),d&=~w}}function Yt(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ti(){var t=fs;return fs<<=1,(fs&4194240)===0&&(fs=64),t}function Or(t){for(var r=[],o=0;31>o;o++)r.push(t);return r}function xr(t,r,o){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-Ut(r),t[r]=o}function Me(t,r){var o=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<o;){var h=31-Ut(o),d=1<<h;r[h]=0,u[h]=-1,t[h]=-1,o&=~d}}function Vr(t,r){var o=t.entangledLanes|=r;for(t=t.entanglements;o;){var u=31-Ut(o),h=1<<u;h&r|t[u]&r&&(t[u]|=r),o&=~h}}var Ie=0;function Lr(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Ha,ps,Wa,qa,Ga,Po=!1,bn=[],_t=null,En=null,wn=null,Mr=new Map,an=new Map,jn=[],Gu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ka(t,r){switch(t){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":En=null;break;case"mouseover":case"mouseout":wn=null;break;case"pointerover":case"pointerout":Mr.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":an.delete(r.pointerId)}}function zt(t,r,o,u,h,d){return t===null||t.nativeEvent!==d?(t={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:d,targetContainers:[h]},r!==null&&(r=Ho(r),r!==null&&ps(r)),t):(t.eventSystemFlags|=u,r=t.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),t)}function Ku(t,r,o,u,h){switch(r){case"focusin":return _t=zt(_t,t,r,o,u,h),!0;case"dragenter":return En=zt(En,t,r,o,u,h),!0;case"mouseover":return wn=zt(wn,t,r,o,u,h),!0;case"pointerover":var d=h.pointerId;return Mr.set(d,zt(Mr.get(d)||null,t,r,o,u,h)),!0;case"gotpointercapture":return d=h.pointerId,an.set(d,zt(an.get(d)||null,t,r,o,u,h)),!0}return!1}function Qa(t){var r=Ri(t.target);if(r!==null){var o=_n(r);if(o!==null){if(r=o.tag,r===13){if(r=_i(o),r!==null){t.blockedOn=r,Ga(t.priority,function(){Wa(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function sr(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var o=ms(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var u=new o.constructor(o.type,o);pi=u,o.target.dispatchEvent(u),pi=null}else return r=Ho(o),r!==null&&ps(r),t.blockedOn=o,!1;r.shift()}return!0}function Ii(t,r,o){sr(t)&&o.delete(r)}function Xa(){Po=!1,_t!==null&&sr(_t)&&(_t=null),En!==null&&sr(En)&&(En=null),wn!==null&&sr(wn)&&(wn=null),Mr.forEach(Ii),an.forEach(Ii)}function Tn(t,r){t.blockedOn===r&&(t.blockedOn=null,Po||(Po=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Xa)))}function In(t){function r(h){return Tn(h,t)}if(0<bn.length){Tn(bn[0],t);for(var o=1;o<bn.length;o++){var u=bn[o];u.blockedOn===t&&(u.blockedOn=null)}}for(_t!==null&&Tn(_t,t),En!==null&&Tn(En,t),wn!==null&&Tn(wn,t),Mr.forEach(r),an.forEach(r),o=0;o<jn.length;o++)u=jn[o],u.blockedOn===t&&(u.blockedOn=null);for(;0<jn.length&&(o=jn[0],o.blockedOn===null);)Qa(o),o.blockedOn===null&&jn.shift()}var or=ke.ReactCurrentBatchConfig,Ur=!0;function $e(t,r,o,u){var h=Ie,d=or.transition;or.transition=null;try{Ie=1,No(t,r,o,u)}finally{Ie=h,or.transition=d}}function Qu(t,r,o,u){var h=Ie,d=or.transition;or.transition=null;try{Ie=4,No(t,r,o,u)}finally{Ie=h,or.transition=d}}function No(t,r,o,u){if(Ur){var h=ms(t,r,o,u);if(h===null)oc(t,r,u,Si,o),Ka(t,u);else if(Ku(h,t,r,o,u))u.stopPropagation();else if(Ka(t,u),r&4&&-1<Gu.indexOf(t)){for(;h!==null;){var d=Ho(h);if(d!==null&&Ha(d),d=ms(t,r,o,u),d===null&&oc(t,r,u,Si,o),d===h)break;h=d}h!==null&&u.stopPropagation()}else oc(t,r,u,null,o)}}var Si=null;function ms(t,r,o,u){if(Si=null,t=is(u),t=Ri(t),t!==null)if(r=_n(t),r===null)t=null;else if(o=r.tag,o===13){if(t=_i(r),t!==null)return t;t=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return Si=t,null}function Do(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ba()){case vi:return 1;case Nr:return 4;case on:case Ro:return 16;case ja:return 536870912;default:return 16}default:return 16}}var Zt=null,gs=null,Bt=null;function Oo(){if(Bt)return Bt;var t,r=gs,o=r.length,u,h="value"in Zt?Zt.value:Zt.textContent,d=h.length;for(t=0;t<o&&r[t]===h[t];t++);var y=o-t;for(u=1;u<=y&&r[o-u]===h[d-u];u++);return Bt=h.slice(t,1<u?1-u:void 0)}function ys(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function zn(){return!0}function xo(){return!1}function vt(t){function r(o,u,h,d,y){this._reactName=o,this._targetInst=h,this.type=u,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(o=t[w],this[w]=o?o(d):d[w]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?zn:xo,this.isPropagationStopped=xo,this}return ee(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=zn)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=zn)},persist:function(){},isPersistent:zn}),r}var Sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_s=vt(Sn),Bn=ee({},Sn,{view:0,detail:0}),Xu=vt(Bn),vs,ar,Fr,Ai=ee({},Bn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$n,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fr&&(Fr&&t.type==="mousemove"?(vs=t.screenX-Fr.screenX,ar=t.screenY-Fr.screenY):ar=vs=0,Fr=t),vs)},movementY:function(t){return"movementY"in t?t.movementY:ar}}),Es=vt(Ai),Vo=ee({},Ai,{dataTransfer:0}),Ja=vt(Vo),ws=ee({},Bn,{relatedTarget:0}),Ts=vt(ws),Ya=ee({},Sn,{animationName:0,elapsedTime:0,pseudoElement:0}),lr=vt(Ya),Za=ee({},Sn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),el=vt(Za),tl=ee({},Sn,{data:0}),Lo=vt(tl),Is={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ft={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rl(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=nl[t])?!!r[t]:!1}function $n(){return rl}var l=ee({},Bn,{key:function(t){if(t.key){var r=Is[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=ys(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ft[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$n,charCode:function(t){return t.type==="keypress"?ys(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ys(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),f=vt(l),m=ee({},Ai,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),v=vt(m),V=ee({},Bn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$n}),b=vt(V),G=ee({},Sn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ve=vt(G),lt=ee({},Ai,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ae=vt(lt),ft=[9,13,27,32],nt=g&&"CompositionEvent"in window,ln=null;g&&"documentMode"in document&&(ln=document.documentMode);var en=g&&"TextEvent"in window&&!ln,Ci=g&&(!nt||ln&&8<ln&&11>=ln),Ss=" ",Mf=!1;function Uf(t,r){switch(t){case"keyup":return ft.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ff(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var As=!1;function h_(t,r){switch(t){case"compositionend":return Ff(r);case"keypress":return r.which!==32?null:(Mf=!0,Ss);case"textInput":return t=r.data,t===Ss&&Mf?null:t;default:return null}}function f_(t,r){if(As)return t==="compositionend"||!nt&&Uf(t,r)?(t=Oo(),Bt=gs=Zt=null,As=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Ci&&r.locale!=="ko"?null:r.data;default:return null}}var d_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bf(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!d_[t.type]:r==="textarea"}function jf(t,r,o,u){Fn(u),r=ll(r,"onChange"),0<r.length&&(o=new _s("onChange","change",null,o,u),t.push({event:o,listeners:r}))}var Mo=null,Uo=null;function p_(t){id(t,0)}function il(t){var r=Ns(t);if(Zi(r))return t}function m_(t,r){if(t==="change")return r}var zf=!1;if(g){var Ju;if(g){var Yu="oninput"in document;if(!Yu){var Bf=document.createElement("div");Bf.setAttribute("oninput","return;"),Yu=typeof Bf.oninput=="function"}Ju=Yu}else Ju=!1;zf=Ju&&(!document.documentMode||9<document.documentMode)}function $f(){Mo&&(Mo.detachEvent("onpropertychange",Hf),Uo=Mo=null)}function Hf(t){if(t.propertyName==="value"&&il(Uo)){var r=[];jf(r,Uo,t,is(t)),Io(p_,r)}}function g_(t,r,o){t==="focusin"?($f(),Mo=r,Uo=o,Mo.attachEvent("onpropertychange",Hf)):t==="focusout"&&$f()}function y_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return il(Uo)}function __(t,r){if(t==="click")return il(r)}function v_(t,r){if(t==="input"||t==="change")return il(r)}function E_(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var An=typeof Object.is=="function"?Object.is:E_;function Fo(t,r){if(An(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var o=Object.keys(t),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var h=o[u];if(!_.call(r,h)||!An(t[h],r[h]))return!1}return!0}function Wf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qf(t,r){var o=Wf(t);t=0;for(var u;o;){if(o.nodeType===3){if(u=t+o.textContent.length,t<=r&&u>=r)return{node:o,offset:r-t};t=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Wf(o)}}function Gf(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?Gf(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Kf(){for(var t=window,r=kr();r instanceof t.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)t=r.contentWindow;else break;r=kr(t.document)}return r}function Zu(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function w_(t){var r=Kf(),o=t.focusedElem,u=t.selectionRange;if(r!==o&&o&&o.ownerDocument&&Gf(o.ownerDocument.documentElement,o)){if(u!==null&&Zu(o)){if(r=u.start,t=u.end,t===void 0&&(t=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(t,o.value.length);else if(t=(r=o.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var h=o.textContent.length,d=Math.min(u.start,h);u=u.end===void 0?d:Math.min(u.end,h),!t.extend&&d>u&&(h=u,u=d,d=h),h=qf(o,d);var y=qf(o,u);h&&y&&(t.rangeCount!==1||t.anchorNode!==h.node||t.anchorOffset!==h.offset||t.focusNode!==y.node||t.focusOffset!==y.offset)&&(r=r.createRange(),r.setStart(h.node,h.offset),t.removeAllRanges(),d>u?(t.addRange(r),t.extend(y.node,y.offset)):(r.setEnd(y.node,y.offset),t.addRange(r)))}}for(r=[],t=o;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)t=r[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var T_=g&&"documentMode"in document&&11>=document.documentMode,Cs=null,ec=null,bo=null,tc=!1;function Qf(t,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;tc||Cs==null||Cs!==kr(u)||(u=Cs,"selectionStart"in u&&Zu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),bo&&Fo(bo,u)||(bo=u,u=ll(ec,"onSelect"),0<u.length&&(r=new _s("onSelect","select",null,r,o),t.push({event:r,listeners:u}),r.target=Cs)))}function sl(t,r){var o={};return o[t.toLowerCase()]=r.toLowerCase(),o["Webkit"+t]="webkit"+r,o["Moz"+t]="moz"+r,o}var Rs={animationend:sl("Animation","AnimationEnd"),animationiteration:sl("Animation","AnimationIteration"),animationstart:sl("Animation","AnimationStart"),transitionend:sl("Transition","TransitionEnd")},nc={},Xf={};g&&(Xf=document.createElement("div").style,"AnimationEvent"in window||(delete Rs.animationend.animation,delete Rs.animationiteration.animation,delete Rs.animationstart.animation),"TransitionEvent"in window||delete Rs.transitionend.transition);function ol(t){if(nc[t])return nc[t];if(!Rs[t])return t;var r=Rs[t],o;for(o in r)if(r.hasOwnProperty(o)&&o in Xf)return nc[t]=r[o];return t}var Jf=ol("animationend"),Yf=ol("animationiteration"),Zf=ol("animationstart"),ed=ol("transitionend"),td=new Map,nd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function br(t,r){td.set(t,r),c(r,[t])}for(var rc=0;rc<nd.length;rc++){var ic=nd[rc],I_=ic.toLowerCase(),S_=ic[0].toUpperCase()+ic.slice(1);br(I_,"on"+S_)}br(Jf,"onAnimationEnd"),br(Yf,"onAnimationIteration"),br(Zf,"onAnimationStart"),br("dblclick","onDoubleClick"),br("focusin","onFocus"),br("focusout","onBlur"),br(ed,"onTransitionEnd"),p("onMouseEnter",["mouseout","mouseover"]),p("onMouseLeave",["mouseout","mouseover"]),p("onPointerEnter",["pointerout","pointerover"]),p("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),A_=new Set("cancel close invalid load scroll toggle".split(" ").concat(jo));function rd(t,r,o){var u=t.type||"unknown-event";t.currentTarget=o,Ma(u,r,void 0,t),t.currentTarget=null}function id(t,r){r=(r&4)!==0;for(var o=0;o<t.length;o++){var u=t[o],h=u.event;u=u.listeners;e:{var d=void 0;if(r)for(var y=u.length-1;0<=y;y--){var w=u[y],A=w.instance,F=w.currentTarget;if(w=w.listener,A!==d&&h.isPropagationStopped())break e;rd(h,w,F),d=A}else for(y=0;y<u.length;y++){if(w=u[y],A=w.instance,F=w.currentTarget,w=w.listener,A!==d&&h.isPropagationStopped())break e;rd(h,w,F),d=A}}}if(yn)throw t=So,yn=!1,So=null,t}function ze(t,r){var o=r[fc];o===void 0&&(o=r[fc]=new Set);var u=t+"__bubble";o.has(u)||(sd(r,t,2,!1),o.add(u))}function sc(t,r,o){var u=0;r&&(u|=4),sd(o,t,u,r)}var al="_reactListening"+Math.random().toString(36).slice(2);function zo(t){if(!t[al]){t[al]=!0,s.forEach(function(o){o!=="selectionchange"&&(A_.has(o)||sc(o,!1,t),sc(o,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[al]||(r[al]=!0,sc("selectionchange",!1,r))}}function sd(t,r,o,u){switch(Do(r)){case 1:var h=$e;break;case 4:h=Qu;break;default:h=No}o=h.bind(null,r,o,t),h=void 0,!as||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),u?h!==void 0?t.addEventListener(r,o,{capture:!0,passive:h}):t.addEventListener(r,o,!0):h!==void 0?t.addEventListener(r,o,{passive:h}):t.addEventListener(r,o,!1)}function oc(t,r,o,u,h){var d=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var y=u.tag;if(y===3||y===4){var w=u.stateNode.containerInfo;if(w===h||w.nodeType===8&&w.parentNode===h)break;if(y===4)for(y=u.return;y!==null;){var A=y.tag;if((A===3||A===4)&&(A=y.stateNode.containerInfo,A===h||A.nodeType===8&&A.parentNode===h))return;y=y.return}for(;w!==null;){if(y=Ri(w),y===null)return;if(A=y.tag,A===5||A===6){u=d=y;continue e}w=w.parentNode}}u=u.return}Io(function(){var F=d,$=is(o),H=[];e:{var B=td.get(t);if(B!==void 0){var Z=_s,ne=t;switch(t){case"keypress":if(ys(o)===0)break e;case"keydown":case"keyup":Z=f;break;case"focusin":ne="focus",Z=Ts;break;case"focusout":ne="blur",Z=Ts;break;case"beforeblur":case"afterblur":Z=Ts;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=Es;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=Ja;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=b;break;case Jf:case Yf:case Zf:Z=lr;break;case ed:Z=Ve;break;case"scroll":Z=Xu;break;case"wheel":Z=Ae;break;case"copy":case"cut":case"paste":Z=el;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=v}var re=(r&4)!==0,Ze=!re&&t==="scroll",L=re?B!==null?B+"Capture":null:B;re=[];for(var R=F,U;R!==null;){U=R;var q=U.stateNode;if(U.tag===5&&q!==null&&(U=q,L!==null&&(q=Ye(R,L),q!=null&&re.push(Bo(R,q,U)))),Ze)break;R=R.return}0<re.length&&(B=new Z(B,ne,null,o,$),H.push({event:B,listeners:re}))}}if((r&7)===0){e:{if(B=t==="mouseover"||t==="pointerover",Z=t==="mouseout"||t==="pointerout",B&&o!==pi&&(ne=o.relatedTarget||o.fromElement)&&(Ri(ne)||ne[ur]))break e;if((Z||B)&&(B=$.window===$?$:(B=$.ownerDocument)?B.defaultView||B.parentWindow:window,Z?(ne=o.relatedTarget||o.toElement,Z=F,ne=ne?Ri(ne):null,ne!==null&&(Ze=_n(ne),ne!==Ze||ne.tag!==5&&ne.tag!==6)&&(ne=null)):(Z=null,ne=F),Z!==ne)){if(re=Es,q="onMouseLeave",L="onMouseEnter",R="mouse",(t==="pointerout"||t==="pointerover")&&(re=v,q="onPointerLeave",L="onPointerEnter",R="pointer"),Ze=Z==null?B:Ns(Z),U=ne==null?B:Ns(ne),B=new re(q,R+"leave",Z,o,$),B.target=Ze,B.relatedTarget=U,q=null,Ri($)===F&&(re=new re(L,R+"enter",ne,o,$),re.target=U,re.relatedTarget=Ze,q=re),Ze=q,Z&&ne)t:{for(re=Z,L=ne,R=0,U=re;U;U=ks(U))R++;for(U=0,q=L;q;q=ks(q))U++;for(;0<R-U;)re=ks(re),R--;for(;0<U-R;)L=ks(L),U--;for(;R--;){if(re===L||L!==null&&re===L.alternate)break t;re=ks(re),L=ks(L)}re=null}else re=null;Z!==null&&od(H,B,Z,re,!1),ne!==null&&Ze!==null&&od(H,Ze,ne,re,!0)}}e:{if(B=F?Ns(F):window,Z=B.nodeName&&B.nodeName.toLowerCase(),Z==="select"||Z==="input"&&B.type==="file")var se=m_;else if(bf(B))if(zf)se=v_;else{se=y_;var ue=g_}else(Z=B.nodeName)&&Z.toLowerCase()==="input"&&(B.type==="checkbox"||B.type==="radio")&&(se=__);if(se&&(se=se(t,F))){jf(H,se,o,$);break e}ue&&ue(t,B,F),t==="focusout"&&(ue=B._wrapperState)&&ue.controlled&&B.type==="number"&&ts(B,"number",B.value)}switch(ue=F?Ns(F):window,t){case"focusin":(bf(ue)||ue.contentEditable==="true")&&(Cs=ue,ec=F,bo=null);break;case"focusout":bo=ec=Cs=null;break;case"mousedown":tc=!0;break;case"contextmenu":case"mouseup":case"dragend":tc=!1,Qf(H,o,$);break;case"selectionchange":if(T_)break;case"keydown":case"keyup":Qf(H,o,$)}var ce;if(nt)e:{switch(t){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else As?Uf(t,o)&&(fe="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(fe="onCompositionStart");fe&&(Ci&&o.locale!=="ko"&&(As||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&As&&(ce=Oo()):(Zt=$,gs="value"in Zt?Zt.value:Zt.textContent,As=!0)),ue=ll(F,fe),0<ue.length&&(fe=new Lo(fe,t,null,o,$),H.push({event:fe,listeners:ue}),ce?fe.data=ce:(ce=Ff(o),ce!==null&&(fe.data=ce)))),(ce=en?h_(t,o):f_(t,o))&&(F=ll(F,"onBeforeInput"),0<F.length&&($=new Lo("onBeforeInput","beforeinput",null,o,$),H.push({event:$,listeners:F}),$.data=ce))}id(H,r)})}function Bo(t,r,o){return{instance:t,listener:r,currentTarget:o}}function ll(t,r){for(var o=r+"Capture",u=[];t!==null;){var h=t,d=h.stateNode;h.tag===5&&d!==null&&(h=d,d=Ye(t,o),d!=null&&u.unshift(Bo(t,d,h)),d=Ye(t,r),d!=null&&u.push(Bo(t,d,h))),t=t.return}return u}function ks(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function od(t,r,o,u,h){for(var d=r._reactName,y=[];o!==null&&o!==u;){var w=o,A=w.alternate,F=w.stateNode;if(A!==null&&A===u)break;w.tag===5&&F!==null&&(w=F,h?(A=Ye(o,d),A!=null&&y.unshift(Bo(o,A,w))):h||(A=Ye(o,d),A!=null&&y.push(Bo(o,A,w)))),o=o.return}y.length!==0&&t.push({event:r,listeners:y})}var C_=/\r\n?/g,R_=/\u0000|\uFFFD/g;function ad(t){return(typeof t=="string"?t:""+t).replace(C_,`
`).replace(R_,"")}function ul(t,r,o){if(r=ad(r),ad(t)!==r&&o)throw Error(n(425))}function cl(){}var ac=null,lc=null;function uc(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var cc=typeof setTimeout=="function"?setTimeout:void 0,k_=typeof clearTimeout=="function"?clearTimeout:void 0,ld=typeof Promise=="function"?Promise:void 0,P_=typeof queueMicrotask=="function"?queueMicrotask:typeof ld<"u"?function(t){return ld.resolve(null).then(t).catch(N_)}:cc;function N_(t){setTimeout(function(){throw t})}function hc(t,r){var o=r,u=0;do{var h=o.nextSibling;if(t.removeChild(o),h&&h.nodeType===8)if(o=h.data,o==="/$"){if(u===0){t.removeChild(h),In(r);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=h}while(o);In(r)}function jr(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function ud(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return t;r--}else o==="/$"&&r++}t=t.previousSibling}return null}var Ps=Math.random().toString(36).slice(2),Hn="__reactFiber$"+Ps,$o="__reactProps$"+Ps,ur="__reactContainer$"+Ps,fc="__reactEvents$"+Ps,D_="__reactListeners$"+Ps,O_="__reactHandles$"+Ps;function Ri(t){var r=t[Hn];if(r)return r;for(var o=t.parentNode;o;){if(r=o[ur]||o[Hn]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(t=ud(t);t!==null;){if(o=t[Hn])return o;t=ud(t)}return r}t=o,o=t.parentNode}return null}function Ho(t){return t=t[Hn]||t[ur],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ns(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function hl(t){return t[$o]||null}var dc=[],Ds=-1;function zr(t){return{current:t}}function Be(t){0>Ds||(t.current=dc[Ds],dc[Ds]=null,Ds--)}function be(t,r){Ds++,dc[Ds]=t.current,t.current=r}var Br={},kt=zr(Br),$t=zr(!1),ki=Br;function Os(t,r){var o=t.type.contextTypes;if(!o)return Br;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var h={},d;for(d in o)h[d]=r[d];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=h),h}function Ht(t){return t=t.childContextTypes,t!=null}function fl(){Be($t),Be(kt)}function cd(t,r,o){if(kt.current!==Br)throw Error(n(168));be(kt,r),be($t,o)}function hd(t,r,o){var u=t.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var h in u)if(!(h in r))throw Error(n(108,Ne(t)||"Unknown",h));return ee({},o,u)}function dl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Br,ki=kt.current,be(kt,t),be($t,$t.current),!0}function fd(t,r,o){var u=t.stateNode;if(!u)throw Error(n(169));o?(t=hd(t,r,ki),u.__reactInternalMemoizedMergedChildContext=t,Be($t),Be(kt),be(kt,t)):Be($t),be($t,o)}var cr=null,pl=!1,pc=!1;function dd(t){cr===null?cr=[t]:cr.push(t)}function x_(t){pl=!0,dd(t)}function $r(){if(!pc&&cr!==null){pc=!0;var t=0,r=Ie;try{var o=cr;for(Ie=1;t<o.length;t++){var u=o[t];do u=u(!0);while(u!==null)}cr=null,pl=!1}catch(h){throw cr!==null&&(cr=cr.slice(t+1)),hs(vi,$r),h}finally{Ie=r,pc=!1}}return null}var xs=[],Vs=0,ml=null,gl=0,un=[],cn=0,Pi=null,hr=1,fr="";function Ni(t,r){xs[Vs++]=gl,xs[Vs++]=ml,ml=t,gl=r}function pd(t,r,o){un[cn++]=hr,un[cn++]=fr,un[cn++]=Pi,Pi=t;var u=hr;t=fr;var h=32-Ut(u)-1;u&=~(1<<h),o+=1;var d=32-Ut(r)+h;if(30<d){var y=h-h%5;d=(u&(1<<y)-1).toString(32),u>>=y,h-=y,hr=1<<32-Ut(r)+h|o<<h|u,fr=d+t}else hr=1<<d|o<<h|u,fr=t}function mc(t){t.return!==null&&(Ni(t,1),pd(t,1,0))}function gc(t){for(;t===ml;)ml=xs[--Vs],xs[Vs]=null,gl=xs[--Vs],xs[Vs]=null;for(;t===Pi;)Pi=un[--cn],un[cn]=null,fr=un[--cn],un[cn]=null,hr=un[--cn],un[cn]=null}var tn=null,nn=null,He=!1,Cn=null;function md(t,r){var o=pn(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=t,r=t.deletions,r===null?(t.deletions=[o],t.flags|=16):r.push(o)}function gd(t,r){switch(t.tag){case 5:var o=t.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,tn=t,nn=jr(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,tn=t,nn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=Pi!==null?{id:hr,overflow:fr}:null,t.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=pn(18,null,null,0),o.stateNode=r,o.return=t,t.child=o,tn=t,nn=null,!0):!1;default:return!1}}function yc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _c(t){if(He){var r=nn;if(r){var o=r;if(!gd(t,r)){if(yc(t))throw Error(n(418));r=jr(o.nextSibling);var u=tn;r&&gd(t,r)?md(u,o):(t.flags=t.flags&-4097|2,He=!1,tn=t)}}else{if(yc(t))throw Error(n(418));t.flags=t.flags&-4097|2,He=!1,tn=t}}}function yd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;tn=t}function yl(t){if(t!==tn)return!1;if(!He)return yd(t),He=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!uc(t.type,t.memoizedProps)),r&&(r=nn)){if(yc(t))throw _d(),Error(n(418));for(;r;)md(t,r),r=jr(r.nextSibling)}if(yd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(r===0){nn=jr(t.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}t=t.nextSibling}nn=null}}else nn=tn?jr(t.stateNode.nextSibling):null;return!0}function _d(){for(var t=nn;t;)t=jr(t.nextSibling)}function Ls(){nn=tn=null,He=!1}function vc(t){Cn===null?Cn=[t]:Cn.push(t)}var V_=ke.ReactCurrentBatchConfig;function Wo(t,r,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var u=o.stateNode}if(!u)throw Error(n(147,t));var h=u,d=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===d?r.ref:(r=function(y){var w=h.refs;y===null?delete w[d]:w[d]=y},r._stringRef=d,r)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function _l(t,r){throw t=Object.prototype.toString.call(r),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function vd(t){var r=t._init;return r(t._payload)}function Ed(t){function r(L,R){if(t){var U=L.deletions;U===null?(L.deletions=[R],L.flags|=16):U.push(R)}}function o(L,R){if(!t)return null;for(;R!==null;)r(L,R),R=R.sibling;return null}function u(L,R){for(L=new Map;R!==null;)R.key!==null?L.set(R.key,R):L.set(R.index,R),R=R.sibling;return L}function h(L,R){return L=Jr(L,R),L.index=0,L.sibling=null,L}function d(L,R,U){return L.index=U,t?(U=L.alternate,U!==null?(U=U.index,U<R?(L.flags|=2,R):U):(L.flags|=2,R)):(L.flags|=1048576,R)}function y(L){return t&&L.alternate===null&&(L.flags|=2),L}function w(L,R,U,q){return R===null||R.tag!==6?(R=ch(U,L.mode,q),R.return=L,R):(R=h(R,U),R.return=L,R)}function A(L,R,U,q){var se=U.type;return se===P?$(L,R,U.props.children,q,U.key):R!==null&&(R.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===Rt&&vd(se)===R.type)?(q=h(R,U.props),q.ref=Wo(L,R,U),q.return=L,q):(q=Bl(U.type,U.key,U.props,null,L.mode,q),q.ref=Wo(L,R,U),q.return=L,q)}function F(L,R,U,q){return R===null||R.tag!==4||R.stateNode.containerInfo!==U.containerInfo||R.stateNode.implementation!==U.implementation?(R=hh(U,L.mode,q),R.return=L,R):(R=h(R,U.children||[]),R.return=L,R)}function $(L,R,U,q,se){return R===null||R.tag!==7?(R=Fi(U,L.mode,q,se),R.return=L,R):(R=h(R,U),R.return=L,R)}function H(L,R,U){if(typeof R=="string"&&R!==""||typeof R=="number")return R=ch(""+R,L.mode,U),R.return=L,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case tt:return U=Bl(R.type,R.key,R.props,null,L.mode,U),U.ref=Wo(L,null,R),U.return=L,U;case xe:return R=hh(R,L.mode,U),R.return=L,R;case Rt:var q=R._init;return H(L,q(R._payload),U)}if(er(R)||le(R))return R=Fi(R,L.mode,U,null),R.return=L,R;_l(L,R)}return null}function B(L,R,U,q){var se=R!==null?R.key:null;if(typeof U=="string"&&U!==""||typeof U=="number")return se!==null?null:w(L,R,""+U,q);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case tt:return U.key===se?A(L,R,U,q):null;case xe:return U.key===se?F(L,R,U,q):null;case Rt:return se=U._init,B(L,R,se(U._payload),q)}if(er(U)||le(U))return se!==null?null:$(L,R,U,q,null);_l(L,U)}return null}function Z(L,R,U,q,se){if(typeof q=="string"&&q!==""||typeof q=="number")return L=L.get(U)||null,w(R,L,""+q,se);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case tt:return L=L.get(q.key===null?U:q.key)||null,A(R,L,q,se);case xe:return L=L.get(q.key===null?U:q.key)||null,F(R,L,q,se);case Rt:var ue=q._init;return Z(L,R,U,ue(q._payload),se)}if(er(q)||le(q))return L=L.get(U)||null,$(R,L,q,se,null);_l(R,q)}return null}function ne(L,R,U,q){for(var se=null,ue=null,ce=R,fe=R=0,mt=null;ce!==null&&fe<U.length;fe++){ce.index>fe?(mt=ce,ce=null):mt=ce.sibling;var Pe=B(L,ce,U[fe],q);if(Pe===null){ce===null&&(ce=mt);break}t&&ce&&Pe.alternate===null&&r(L,ce),R=d(Pe,R,fe),ue===null?se=Pe:ue.sibling=Pe,ue=Pe,ce=mt}if(fe===U.length)return o(L,ce),He&&Ni(L,fe),se;if(ce===null){for(;fe<U.length;fe++)ce=H(L,U[fe],q),ce!==null&&(R=d(ce,R,fe),ue===null?se=ce:ue.sibling=ce,ue=ce);return He&&Ni(L,fe),se}for(ce=u(L,ce);fe<U.length;fe++)mt=Z(ce,L,fe,U[fe],q),mt!==null&&(t&&mt.alternate!==null&&ce.delete(mt.key===null?fe:mt.key),R=d(mt,R,fe),ue===null?se=mt:ue.sibling=mt,ue=mt);return t&&ce.forEach(function(Yr){return r(L,Yr)}),He&&Ni(L,fe),se}function re(L,R,U,q){var se=le(U);if(typeof se!="function")throw Error(n(150));if(U=se.call(U),U==null)throw Error(n(151));for(var ue=se=null,ce=R,fe=R=0,mt=null,Pe=U.next();ce!==null&&!Pe.done;fe++,Pe=U.next()){ce.index>fe?(mt=ce,ce=null):mt=ce.sibling;var Yr=B(L,ce,Pe.value,q);if(Yr===null){ce===null&&(ce=mt);break}t&&ce&&Yr.alternate===null&&r(L,ce),R=d(Yr,R,fe),ue===null?se=Yr:ue.sibling=Yr,ue=Yr,ce=mt}if(Pe.done)return o(L,ce),He&&Ni(L,fe),se;if(ce===null){for(;!Pe.done;fe++,Pe=U.next())Pe=H(L,Pe.value,q),Pe!==null&&(R=d(Pe,R,fe),ue===null?se=Pe:ue.sibling=Pe,ue=Pe);return He&&Ni(L,fe),se}for(ce=u(L,ce);!Pe.done;fe++,Pe=U.next())Pe=Z(ce,L,fe,Pe.value,q),Pe!==null&&(t&&Pe.alternate!==null&&ce.delete(Pe.key===null?fe:Pe.key),R=d(Pe,R,fe),ue===null?se=Pe:ue.sibling=Pe,ue=Pe);return t&&ce.forEach(function(dv){return r(L,dv)}),He&&Ni(L,fe),se}function Ze(L,R,U,q){if(typeof U=="object"&&U!==null&&U.type===P&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case tt:e:{for(var se=U.key,ue=R;ue!==null;){if(ue.key===se){if(se=U.type,se===P){if(ue.tag===7){o(L,ue.sibling),R=h(ue,U.props.children),R.return=L,L=R;break e}}else if(ue.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===Rt&&vd(se)===ue.type){o(L,ue.sibling),R=h(ue,U.props),R.ref=Wo(L,ue,U),R.return=L,L=R;break e}o(L,ue);break}else r(L,ue);ue=ue.sibling}U.type===P?(R=Fi(U.props.children,L.mode,q,U.key),R.return=L,L=R):(q=Bl(U.type,U.key,U.props,null,L.mode,q),q.ref=Wo(L,R,U),q.return=L,L=q)}return y(L);case xe:e:{for(ue=U.key;R!==null;){if(R.key===ue)if(R.tag===4&&R.stateNode.containerInfo===U.containerInfo&&R.stateNode.implementation===U.implementation){o(L,R.sibling),R=h(R,U.children||[]),R.return=L,L=R;break e}else{o(L,R);break}else r(L,R);R=R.sibling}R=hh(U,L.mode,q),R.return=L,L=R}return y(L);case Rt:return ue=U._init,Ze(L,R,ue(U._payload),q)}if(er(U))return ne(L,R,U,q);if(le(U))return re(L,R,U,q);_l(L,U)}return typeof U=="string"&&U!==""||typeof U=="number"?(U=""+U,R!==null&&R.tag===6?(o(L,R.sibling),R=h(R,U),R.return=L,L=R):(o(L,R),R=ch(U,L.mode,q),R.return=L,L=R),y(L)):o(L,R)}return Ze}var Ms=Ed(!0),wd=Ed(!1),vl=zr(null),El=null,Us=null,Ec=null;function wc(){Ec=Us=El=null}function Tc(t){var r=vl.current;Be(vl),t._currentValue=r}function Ic(t,r,o){for(;t!==null;){var u=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),t===o)break;t=t.return}}function Fs(t,r){El=t,Ec=Us=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&r)!==0&&(Wt=!0),t.firstContext=null)}function hn(t){var r=t._currentValue;if(Ec!==t)if(t={context:t,memoizedValue:r,next:null},Us===null){if(El===null)throw Error(n(308));Us=t,El.dependencies={lanes:0,firstContext:t}}else Us=Us.next=t;return r}var Di=null;function Sc(t){Di===null?Di=[t]:Di.push(t)}function Td(t,r,o,u){var h=r.interleaved;return h===null?(o.next=o,Sc(r)):(o.next=h.next,h.next=o),r.interleaved=o,dr(t,u)}function dr(t,r){t.lanes|=r;var o=t.alternate;for(o!==null&&(o.lanes|=r),o=t,t=t.return;t!==null;)t.childLanes|=r,o=t.alternate,o!==null&&(o.childLanes|=r),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Hr=!1;function Ac(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Id(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function pr(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function Wr(t,r,o){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,(Re&2)!==0){var h=u.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),u.pending=r,dr(t,o)}return h=u.interleaved,h===null?(r.next=r,Sc(u)):(r.next=h.next,h.next=r),u.interleaved=r,dr(t,o)}function wl(t,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var u=r.lanes;u&=t.pendingLanes,o|=u,r.lanes=o,Vr(t,o)}}function Sd(t,r){var o=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var h=null,d=null;if(o=o.firstBaseUpdate,o!==null){do{var y={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};d===null?h=d=y:d=d.next=y,o=o.next}while(o!==null);d===null?h=d=r:d=d.next=r}else h=d=r;o={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:u.shared,effects:u.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=r:t.next=r,o.lastBaseUpdate=r}function Tl(t,r,o,u){var h=t.updateQueue;Hr=!1;var d=h.firstBaseUpdate,y=h.lastBaseUpdate,w=h.shared.pending;if(w!==null){h.shared.pending=null;var A=w,F=A.next;A.next=null,y===null?d=F:y.next=F,y=A;var $=t.alternate;$!==null&&($=$.updateQueue,w=$.lastBaseUpdate,w!==y&&(w===null?$.firstBaseUpdate=F:w.next=F,$.lastBaseUpdate=A))}if(d!==null){var H=h.baseState;y=0,$=F=A=null,w=d;do{var B=w.lane,Z=w.eventTime;if((u&B)===B){$!==null&&($=$.next={eventTime:Z,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var ne=t,re=w;switch(B=r,Z=o,re.tag){case 1:if(ne=re.payload,typeof ne=="function"){H=ne.call(Z,H,B);break e}H=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=re.payload,B=typeof ne=="function"?ne.call(Z,H,B):ne,B==null)break e;H=ee({},H,B);break e;case 2:Hr=!0}}w.callback!==null&&w.lane!==0&&(t.flags|=64,B=h.effects,B===null?h.effects=[w]:B.push(w))}else Z={eventTime:Z,lane:B,tag:w.tag,payload:w.payload,callback:w.callback,next:null},$===null?(F=$=Z,A=H):$=$.next=Z,y|=B;if(w=w.next,w===null){if(w=h.shared.pending,w===null)break;B=w,w=B.next,B.next=null,h.lastBaseUpdate=B,h.shared.pending=null}}while(!0);if($===null&&(A=H),h.baseState=A,h.firstBaseUpdate=F,h.lastBaseUpdate=$,r=h.shared.interleaved,r!==null){h=r;do y|=h.lane,h=h.next;while(h!==r)}else d===null&&(h.shared.lanes=0);Vi|=y,t.lanes=y,t.memoizedState=H}}function Ad(t,r,o){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var u=t[r],h=u.callback;if(h!==null){if(u.callback=null,u=o,typeof h!="function")throw Error(n(191,h));h.call(u)}}}var qo={},Wn=zr(qo),Go=zr(qo),Ko=zr(qo);function Oi(t){if(t===qo)throw Error(n(174));return t}function Cc(t,r){switch(be(Ko,r),be(Go,t),be(Wn,qo),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:at(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=at(r,t)}Be(Wn),be(Wn,r)}function bs(){Be(Wn),Be(Go),Be(Ko)}function Cd(t){Oi(Ko.current);var r=Oi(Wn.current),o=at(r,t.type);r!==o&&(be(Go,t),be(Wn,o))}function Rc(t){Go.current===t&&(Be(Wn),Be(Go))}var Ge=zr(0);function Il(t){for(var r=t;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var kc=[];function Pc(){for(var t=0;t<kc.length;t++)kc[t]._workInProgressVersionPrimary=null;kc.length=0}var Sl=ke.ReactCurrentDispatcher,Nc=ke.ReactCurrentBatchConfig,xi=0,Ke=null,ut=null,dt=null,Al=!1,Qo=!1,Xo=0,L_=0;function Pt(){throw Error(n(321))}function Dc(t,r){if(r===null)return!1;for(var o=0;o<r.length&&o<t.length;o++)if(!An(t[o],r[o]))return!1;return!0}function Oc(t,r,o,u,h,d){if(xi=d,Ke=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Sl.current=t===null||t.memoizedState===null?b_:j_,t=o(u,h),Qo){d=0;do{if(Qo=!1,Xo=0,25<=d)throw Error(n(301));d+=1,dt=ut=null,r.updateQueue=null,Sl.current=z_,t=o(u,h)}while(Qo)}if(Sl.current=kl,r=ut!==null&&ut.next!==null,xi=0,dt=ut=Ke=null,Al=!1,r)throw Error(n(300));return t}function xc(){var t=Xo!==0;return Xo=0,t}function qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?Ke.memoizedState=dt=t:dt=dt.next=t,dt}function fn(){if(ut===null){var t=Ke.alternate;t=t!==null?t.memoizedState:null}else t=ut.next;var r=dt===null?Ke.memoizedState:dt.next;if(r!==null)dt=r,ut=t;else{if(t===null)throw Error(n(310));ut=t,t={memoizedState:ut.memoizedState,baseState:ut.baseState,baseQueue:ut.baseQueue,queue:ut.queue,next:null},dt===null?Ke.memoizedState=dt=t:dt=dt.next=t}return dt}function Jo(t,r){return typeof r=="function"?r(t):r}function Vc(t){var r=fn(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=ut,h=u.baseQueue,d=o.pending;if(d!==null){if(h!==null){var y=h.next;h.next=d.next,d.next=y}u.baseQueue=h=d,o.pending=null}if(h!==null){d=h.next,u=u.baseState;var w=y=null,A=null,F=d;do{var $=F.lane;if((xi&$)===$)A!==null&&(A=A.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),u=F.hasEagerState?F.eagerState:t(u,F.action);else{var H={lane:$,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};A===null?(w=A=H,y=u):A=A.next=H,Ke.lanes|=$,Vi|=$}F=F.next}while(F!==null&&F!==d);A===null?y=u:A.next=w,An(u,r.memoizedState)||(Wt=!0),r.memoizedState=u,r.baseState=y,r.baseQueue=A,o.lastRenderedState=u}if(t=o.interleaved,t!==null){h=t;do d=h.lane,Ke.lanes|=d,Vi|=d,h=h.next;while(h!==t)}else h===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function Lc(t){var r=fn(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=o.dispatch,h=o.pending,d=r.memoizedState;if(h!==null){o.pending=null;var y=h=h.next;do d=t(d,y.action),y=y.next;while(y!==h);An(d,r.memoizedState)||(Wt=!0),r.memoizedState=d,r.baseQueue===null&&(r.baseState=d),o.lastRenderedState=d}return[d,u]}function Rd(){}function kd(t,r){var o=Ke,u=fn(),h=r(),d=!An(u.memoizedState,h);if(d&&(u.memoizedState=h,Wt=!0),u=u.queue,Mc(Dd.bind(null,o,u,t),[t]),u.getSnapshot!==r||d||dt!==null&&dt.memoizedState.tag&1){if(o.flags|=2048,Yo(9,Nd.bind(null,o,u,h,r),void 0,null),pt===null)throw Error(n(349));(xi&30)!==0||Pd(o,r,h)}return h}function Pd(t,r,o){t.flags|=16384,t={getSnapshot:r,value:o},r=Ke.updateQueue,r===null?(r={lastEffect:null,stores:null},Ke.updateQueue=r,r.stores=[t]):(o=r.stores,o===null?r.stores=[t]:o.push(t))}function Nd(t,r,o,u){r.value=o,r.getSnapshot=u,Od(r)&&xd(t)}function Dd(t,r,o){return o(function(){Od(r)&&xd(t)})}function Od(t){var r=t.getSnapshot;t=t.value;try{var o=r();return!An(t,o)}catch{return!0}}function xd(t){var r=dr(t,1);r!==null&&Nn(r,t,1,-1)}function Vd(t){var r=qn();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jo,lastRenderedState:t},r.queue=t,t=t.dispatch=F_.bind(null,Ke,t),[r.memoizedState,t]}function Yo(t,r,o,u){return t={tag:t,create:r,destroy:o,deps:u,next:null},r=Ke.updateQueue,r===null?(r={lastEffect:null,stores:null},Ke.updateQueue=r,r.lastEffect=t.next=t):(o=r.lastEffect,o===null?r.lastEffect=t.next=t:(u=o.next,o.next=t,t.next=u,r.lastEffect=t)),t}function Ld(){return fn().memoizedState}function Cl(t,r,o,u){var h=qn();Ke.flags|=t,h.memoizedState=Yo(1|r,o,void 0,u===void 0?null:u)}function Rl(t,r,o,u){var h=fn();u=u===void 0?null:u;var d=void 0;if(ut!==null){var y=ut.memoizedState;if(d=y.destroy,u!==null&&Dc(u,y.deps)){h.memoizedState=Yo(r,o,d,u);return}}Ke.flags|=t,h.memoizedState=Yo(1|r,o,d,u)}function Md(t,r){return Cl(8390656,8,t,r)}function Mc(t,r){return Rl(2048,8,t,r)}function Ud(t,r){return Rl(4,2,t,r)}function Fd(t,r){return Rl(4,4,t,r)}function bd(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function jd(t,r,o){return o=o!=null?o.concat([t]):null,Rl(4,4,bd.bind(null,r,t),o)}function Uc(){}function zd(t,r){var o=fn();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&Dc(r,u[1])?u[0]:(o.memoizedState=[t,r],t)}function Bd(t,r){var o=fn();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&Dc(r,u[1])?u[0]:(t=t(),o.memoizedState=[t,r],t)}function $d(t,r,o){return(xi&21)===0?(t.baseState&&(t.baseState=!1,Wt=!0),t.memoizedState=o):(An(o,r)||(o=Ti(),Ke.lanes|=o,Vi|=o,t.baseState=!0),r)}function M_(t,r){var o=Ie;Ie=o!==0&&4>o?o:4,t(!0);var u=Nc.transition;Nc.transition={};try{t(!1),r()}finally{Ie=o,Nc.transition=u}}function Hd(){return fn().memoizedState}function U_(t,r,o){var u=Qr(t);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Wd(t))qd(r,o);else if(o=Td(t,r,o,u),o!==null){var h=jt();Nn(o,t,u,h),Gd(o,r,u)}}function F_(t,r,o){var u=Qr(t),h={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Wd(t))qd(r,h);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=r.lastRenderedReducer,d!==null))try{var y=r.lastRenderedState,w=d(y,o);if(h.hasEagerState=!0,h.eagerState=w,An(w,y)){var A=r.interleaved;A===null?(h.next=h,Sc(r)):(h.next=A.next,A.next=h),r.interleaved=h;return}}catch{}finally{}o=Td(t,r,h,u),o!==null&&(h=jt(),Nn(o,t,u,h),Gd(o,r,u))}}function Wd(t){var r=t.alternate;return t===Ke||r!==null&&r===Ke}function qd(t,r){Qo=Al=!0;var o=t.pending;o===null?r.next=r:(r.next=o.next,o.next=r),t.pending=r}function Gd(t,r,o){if((o&4194240)!==0){var u=r.lanes;u&=t.pendingLanes,o|=u,r.lanes=o,Vr(t,o)}}var kl={readContext:hn,useCallback:Pt,useContext:Pt,useEffect:Pt,useImperativeHandle:Pt,useInsertionEffect:Pt,useLayoutEffect:Pt,useMemo:Pt,useReducer:Pt,useRef:Pt,useState:Pt,useDebugValue:Pt,useDeferredValue:Pt,useTransition:Pt,useMutableSource:Pt,useSyncExternalStore:Pt,useId:Pt,unstable_isNewReconciler:!1},b_={readContext:hn,useCallback:function(t,r){return qn().memoizedState=[t,r===void 0?null:r],t},useContext:hn,useEffect:Md,useImperativeHandle:function(t,r,o){return o=o!=null?o.concat([t]):null,Cl(4194308,4,bd.bind(null,r,t),o)},useLayoutEffect:function(t,r){return Cl(4194308,4,t,r)},useInsertionEffect:function(t,r){return Cl(4,2,t,r)},useMemo:function(t,r){var o=qn();return r=r===void 0?null:r,t=t(),o.memoizedState=[t,r],t},useReducer:function(t,r,o){var u=qn();return r=o!==void 0?o(r):r,u.memoizedState=u.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},u.queue=t,t=t.dispatch=U_.bind(null,Ke,t),[u.memoizedState,t]},useRef:function(t){var r=qn();return t={current:t},r.memoizedState=t},useState:Vd,useDebugValue:Uc,useDeferredValue:function(t){return qn().memoizedState=t},useTransition:function(){var t=Vd(!1),r=t[0];return t=M_.bind(null,t[1]),qn().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,o){var u=Ke,h=qn();if(He){if(o===void 0)throw Error(n(407));o=o()}else{if(o=r(),pt===null)throw Error(n(349));(xi&30)!==0||Pd(u,r,o)}h.memoizedState=o;var d={value:o,getSnapshot:r};return h.queue=d,Md(Dd.bind(null,u,d,t),[t]),u.flags|=2048,Yo(9,Nd.bind(null,u,d,o,r),void 0,null),o},useId:function(){var t=qn(),r=pt.identifierPrefix;if(He){var o=fr,u=hr;o=(u&~(1<<32-Ut(u)-1)).toString(32)+o,r=":"+r+"R"+o,o=Xo++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=L_++,r=":"+r+"r"+o.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},j_={readContext:hn,useCallback:zd,useContext:hn,useEffect:Mc,useImperativeHandle:jd,useInsertionEffect:Ud,useLayoutEffect:Fd,useMemo:Bd,useReducer:Vc,useRef:Ld,useState:function(){return Vc(Jo)},useDebugValue:Uc,useDeferredValue:function(t){var r=fn();return $d(r,ut.memoizedState,t)},useTransition:function(){var t=Vc(Jo)[0],r=fn().memoizedState;return[t,r]},useMutableSource:Rd,useSyncExternalStore:kd,useId:Hd,unstable_isNewReconciler:!1},z_={readContext:hn,useCallback:zd,useContext:hn,useEffect:Mc,useImperativeHandle:jd,useInsertionEffect:Ud,useLayoutEffect:Fd,useMemo:Bd,useReducer:Lc,useRef:Ld,useState:function(){return Lc(Jo)},useDebugValue:Uc,useDeferredValue:function(t){var r=fn();return ut===null?r.memoizedState=t:$d(r,ut.memoizedState,t)},useTransition:function(){var t=Lc(Jo)[0],r=fn().memoizedState;return[t,r]},useMutableSource:Rd,useSyncExternalStore:kd,useId:Hd,unstable_isNewReconciler:!1};function Rn(t,r){if(t&&t.defaultProps){r=ee({},r),t=t.defaultProps;for(var o in t)r[o]===void 0&&(r[o]=t[o]);return r}return r}function Fc(t,r,o,u){r=t.memoizedState,o=o(u,r),o=o==null?r:ee({},r,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Pl={isMounted:function(t){return(t=t._reactInternals)?_n(t)===t:!1},enqueueSetState:function(t,r,o){t=t._reactInternals;var u=jt(),h=Qr(t),d=pr(u,h);d.payload=r,o!=null&&(d.callback=o),r=Wr(t,d,h),r!==null&&(Nn(r,t,h,u),wl(r,t,h))},enqueueReplaceState:function(t,r,o){t=t._reactInternals;var u=jt(),h=Qr(t),d=pr(u,h);d.tag=1,d.payload=r,o!=null&&(d.callback=o),r=Wr(t,d,h),r!==null&&(Nn(r,t,h,u),wl(r,t,h))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var o=jt(),u=Qr(t),h=pr(o,u);h.tag=2,r!=null&&(h.callback=r),r=Wr(t,h,u),r!==null&&(Nn(r,t,u,o),wl(r,t,u))}};function Kd(t,r,o,u,h,d,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,d,y):r.prototype&&r.prototype.isPureReactComponent?!Fo(o,u)||!Fo(h,d):!0}function Qd(t,r,o){var u=!1,h=Br,d=r.contextType;return typeof d=="object"&&d!==null?d=hn(d):(h=Ht(r)?ki:kt.current,u=r.contextTypes,d=(u=u!=null)?Os(t,h):Br),r=new r(o,d),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Pl,t.stateNode=r,r._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=h,t.__reactInternalMemoizedMaskedChildContext=d),r}function Xd(t,r,o,u){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==t&&Pl.enqueueReplaceState(r,r.state,null)}function bc(t,r,o,u){var h=t.stateNode;h.props=o,h.state=t.memoizedState,h.refs={},Ac(t);var d=r.contextType;typeof d=="object"&&d!==null?h.context=hn(d):(d=Ht(r)?ki:kt.current,h.context=Os(t,d)),h.state=t.memoizedState,d=r.getDerivedStateFromProps,typeof d=="function"&&(Fc(t,r,d,o),h.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(r=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),r!==h.state&&Pl.enqueueReplaceState(h,h.state,null),Tl(t,o,h,u),h.state=t.memoizedState),typeof h.componentDidMount=="function"&&(t.flags|=4194308)}function js(t,r){try{var o="",u=r;do o+=Ee(u),u=u.return;while(u);var h=o}catch(d){h=`
Error generating stack: `+d.message+`
`+d.stack}return{value:t,source:r,stack:h,digest:null}}function jc(t,r,o){return{value:t,source:null,stack:o??null,digest:r??null}}function zc(t,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var B_=typeof WeakMap=="function"?WeakMap:Map;function Jd(t,r,o){o=pr(-1,o),o.tag=3,o.payload={element:null};var u=r.value;return o.callback=function(){Ml||(Ml=!0,nh=u),zc(t,r)},o}function Yd(t,r,o){o=pr(-1,o),o.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var h=r.value;o.payload=function(){return u(h)},o.callback=function(){zc(t,r)}}var d=t.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(o.callback=function(){zc(t,r),typeof u!="function"&&(Gr===null?Gr=new Set([this]):Gr.add(this));var y=r.stack;this.componentDidCatch(r.value,{componentStack:y!==null?y:""})}),o}function Zd(t,r,o){var u=t.pingCache;if(u===null){u=t.pingCache=new B_;var h=new Set;u.set(r,h)}else h=u.get(r),h===void 0&&(h=new Set,u.set(r,h));h.has(o)||(h.add(o),t=nv.bind(null,t,r,o),r.then(t,t))}function ep(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function tp(t,r,o,u,h){return(t.mode&1)===0?(t===r?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=pr(-1,1),r.tag=2,Wr(o,r,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=h,t)}var $_=ke.ReactCurrentOwner,Wt=!1;function bt(t,r,o,u){r.child=t===null?wd(r,null,o,u):Ms(r,t.child,o,u)}function np(t,r,o,u,h){o=o.render;var d=r.ref;return Fs(r,h),u=Oc(t,r,o,u,d,h),o=xc(),t!==null&&!Wt?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~h,mr(t,r,h)):(He&&o&&mc(r),r.flags|=1,bt(t,r,u,h),r.child)}function rp(t,r,o,u,h){if(t===null){var d=o.type;return typeof d=="function"&&!uh(d)&&d.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=d,ip(t,r,d,u,h)):(t=Bl(o.type,null,u,r,r.mode,h),t.ref=r.ref,t.return=r,r.child=t)}if(d=t.child,(t.lanes&h)===0){var y=d.memoizedProps;if(o=o.compare,o=o!==null?o:Fo,o(y,u)&&t.ref===r.ref)return mr(t,r,h)}return r.flags|=1,t=Jr(d,u),t.ref=r.ref,t.return=r,r.child=t}function ip(t,r,o,u,h){if(t!==null){var d=t.memoizedProps;if(Fo(d,u)&&t.ref===r.ref)if(Wt=!1,r.pendingProps=u=d,(t.lanes&h)!==0)(t.flags&131072)!==0&&(Wt=!0);else return r.lanes=t.lanes,mr(t,r,h)}return Bc(t,r,o,u,h)}function sp(t,r,o){var u=r.pendingProps,h=u.children,d=t!==null?t.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(Bs,rn),rn|=o;else{if((o&1073741824)===0)return t=d!==null?d.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,be(Bs,rn),rn|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=d!==null?d.baseLanes:o,be(Bs,rn),rn|=u}else d!==null?(u=d.baseLanes|o,r.memoizedState=null):u=o,be(Bs,rn),rn|=u;return bt(t,r,h,o),r.child}function op(t,r){var o=r.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function Bc(t,r,o,u,h){var d=Ht(o)?ki:kt.current;return d=Os(r,d),Fs(r,h),o=Oc(t,r,o,u,d,h),u=xc(),t!==null&&!Wt?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~h,mr(t,r,h)):(He&&u&&mc(r),r.flags|=1,bt(t,r,o,h),r.child)}function ap(t,r,o,u,h){if(Ht(o)){var d=!0;dl(r)}else d=!1;if(Fs(r,h),r.stateNode===null)Dl(t,r),Qd(r,o,u),bc(r,o,u,h),u=!0;else if(t===null){var y=r.stateNode,w=r.memoizedProps;y.props=w;var A=y.context,F=o.contextType;typeof F=="object"&&F!==null?F=hn(F):(F=Ht(o)?ki:kt.current,F=Os(r,F));var $=o.getDerivedStateFromProps,H=typeof $=="function"||typeof y.getSnapshotBeforeUpdate=="function";H||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(w!==u||A!==F)&&Xd(r,y,u,F),Hr=!1;var B=r.memoizedState;y.state=B,Tl(r,u,y,h),A=r.memoizedState,w!==u||B!==A||$t.current||Hr?(typeof $=="function"&&(Fc(r,o,$,u),A=r.memoizedState),(w=Hr||Kd(r,o,w,u,B,A,F))?(H||typeof y.UNSAFE_componentWillMount!="function"&&typeof y.componentWillMount!="function"||(typeof y.componentWillMount=="function"&&y.componentWillMount(),typeof y.UNSAFE_componentWillMount=="function"&&y.UNSAFE_componentWillMount()),typeof y.componentDidMount=="function"&&(r.flags|=4194308)):(typeof y.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=A),y.props=u,y.state=A,y.context=F,u=w):(typeof y.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{y=r.stateNode,Id(t,r),w=r.memoizedProps,F=r.type===r.elementType?w:Rn(r.type,w),y.props=F,H=r.pendingProps,B=y.context,A=o.contextType,typeof A=="object"&&A!==null?A=hn(A):(A=Ht(o)?ki:kt.current,A=Os(r,A));var Z=o.getDerivedStateFromProps;($=typeof Z=="function"||typeof y.getSnapshotBeforeUpdate=="function")||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(w!==H||B!==A)&&Xd(r,y,u,A),Hr=!1,B=r.memoizedState,y.state=B,Tl(r,u,y,h);var ne=r.memoizedState;w!==H||B!==ne||$t.current||Hr?(typeof Z=="function"&&(Fc(r,o,Z,u),ne=r.memoizedState),(F=Hr||Kd(r,o,F,u,B,ne,A)||!1)?($||typeof y.UNSAFE_componentWillUpdate!="function"&&typeof y.componentWillUpdate!="function"||(typeof y.componentWillUpdate=="function"&&y.componentWillUpdate(u,ne,A),typeof y.UNSAFE_componentWillUpdate=="function"&&y.UNSAFE_componentWillUpdate(u,ne,A)),typeof y.componentDidUpdate=="function"&&(r.flags|=4),typeof y.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof y.componentDidUpdate!="function"||w===t.memoizedProps&&B===t.memoizedState||(r.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||w===t.memoizedProps&&B===t.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=ne),y.props=u,y.state=ne,y.context=A,u=F):(typeof y.componentDidUpdate!="function"||w===t.memoizedProps&&B===t.memoizedState||(r.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||w===t.memoizedProps&&B===t.memoizedState||(r.flags|=1024),u=!1)}return $c(t,r,o,u,d,h)}function $c(t,r,o,u,h,d){op(t,r);var y=(r.flags&128)!==0;if(!u&&!y)return h&&fd(r,o,!1),mr(t,r,d);u=r.stateNode,$_.current=r;var w=y&&typeof o.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,t!==null&&y?(r.child=Ms(r,t.child,null,d),r.child=Ms(r,null,w,d)):bt(t,r,w,d),r.memoizedState=u.state,h&&fd(r,o,!0),r.child}function lp(t){var r=t.stateNode;r.pendingContext?cd(t,r.pendingContext,r.pendingContext!==r.context):r.context&&cd(t,r.context,!1),Cc(t,r.containerInfo)}function up(t,r,o,u,h){return Ls(),vc(h),r.flags|=256,bt(t,r,o,u),r.child}var Hc={dehydrated:null,treeContext:null,retryLane:0};function Wc(t){return{baseLanes:t,cachePool:null,transitions:null}}function cp(t,r,o){var u=r.pendingProps,h=Ge.current,d=!1,y=(r.flags&128)!==0,w;if((w=y)||(w=t!==null&&t.memoizedState===null?!1:(h&2)!==0),w?(d=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(h|=1),be(Ge,h&1),t===null)return _c(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((r.mode&1)===0?r.lanes=1:t.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(y=u.children,t=u.fallback,d?(u=r.mode,d=r.child,y={mode:"hidden",children:y},(u&1)===0&&d!==null?(d.childLanes=0,d.pendingProps=y):d=$l(y,u,0,null),t=Fi(t,u,o,null),d.return=r,t.return=r,d.sibling=t,r.child=d,r.child.memoizedState=Wc(o),r.memoizedState=Hc,t):qc(r,y));if(h=t.memoizedState,h!==null&&(w=h.dehydrated,w!==null))return H_(t,r,y,u,w,h,o);if(d){d=u.fallback,y=r.mode,h=t.child,w=h.sibling;var A={mode:"hidden",children:u.children};return(y&1)===0&&r.child!==h?(u=r.child,u.childLanes=0,u.pendingProps=A,r.deletions=null):(u=Jr(h,A),u.subtreeFlags=h.subtreeFlags&14680064),w!==null?d=Jr(w,d):(d=Fi(d,y,o,null),d.flags|=2),d.return=r,u.return=r,u.sibling=d,r.child=u,u=d,d=r.child,y=t.child.memoizedState,y=y===null?Wc(o):{baseLanes:y.baseLanes|o,cachePool:null,transitions:y.transitions},d.memoizedState=y,d.childLanes=t.childLanes&~o,r.memoizedState=Hc,u}return d=t.child,t=d.sibling,u=Jr(d,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=o),u.return=r,u.sibling=null,t!==null&&(o=r.deletions,o===null?(r.deletions=[t],r.flags|=16):o.push(t)),r.child=u,r.memoizedState=null,u}function qc(t,r){return r=$l({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function Nl(t,r,o,u){return u!==null&&vc(u),Ms(r,t.child,null,o),t=qc(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function H_(t,r,o,u,h,d,y){if(o)return r.flags&256?(r.flags&=-257,u=jc(Error(n(422))),Nl(t,r,y,u)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(d=u.fallback,h=r.mode,u=$l({mode:"visible",children:u.children},h,0,null),d=Fi(d,h,y,null),d.flags|=2,u.return=r,d.return=r,u.sibling=d,r.child=u,(r.mode&1)!==0&&Ms(r,t.child,null,y),r.child.memoizedState=Wc(y),r.memoizedState=Hc,d);if((r.mode&1)===0)return Nl(t,r,y,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var w=u.dgst;return u=w,d=Error(n(419)),u=jc(d,u,void 0),Nl(t,r,y,u)}if(w=(y&t.childLanes)!==0,Wt||w){if(u=pt,u!==null){switch(y&-y){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(u.suspendedLanes|y))!==0?0:h,h!==0&&h!==d.retryLane&&(d.retryLane=h,dr(t,h),Nn(u,t,h,-1))}return lh(),u=jc(Error(n(421))),Nl(t,r,y,u)}return h.data==="$?"?(r.flags|=128,r.child=t.child,r=rv.bind(null,t),h._reactRetry=r,null):(t=d.treeContext,nn=jr(h.nextSibling),tn=r,He=!0,Cn=null,t!==null&&(un[cn++]=hr,un[cn++]=fr,un[cn++]=Pi,hr=t.id,fr=t.overflow,Pi=r),r=qc(r,u.children),r.flags|=4096,r)}function hp(t,r,o){t.lanes|=r;var u=t.alternate;u!==null&&(u.lanes|=r),Ic(t.return,r,o)}function Gc(t,r,o,u,h){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:h}:(d.isBackwards=r,d.rendering=null,d.renderingStartTime=0,d.last=u,d.tail=o,d.tailMode=h)}function fp(t,r,o){var u=r.pendingProps,h=u.revealOrder,d=u.tail;if(bt(t,r,u.children,o),u=Ge.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&hp(t,o,r);else if(t.tag===19)hp(t,o,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(be(Ge,u),(r.mode&1)===0)r.memoizedState=null;else switch(h){case"forwards":for(o=r.child,h=null;o!==null;)t=o.alternate,t!==null&&Il(t)===null&&(h=o),o=o.sibling;o=h,o===null?(h=r.child,r.child=null):(h=o.sibling,o.sibling=null),Gc(r,!1,h,o,d);break;case"backwards":for(o=null,h=r.child,r.child=null;h!==null;){if(t=h.alternate,t!==null&&Il(t)===null){r.child=h;break}t=h.sibling,h.sibling=o,o=h,h=t}Gc(r,!0,o,null,d);break;case"together":Gc(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Dl(t,r){(r.mode&1)===0&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function mr(t,r,o){if(t!==null&&(r.dependencies=t.dependencies),Vi|=r.lanes,(o&r.childLanes)===0)return null;if(t!==null&&r.child!==t.child)throw Error(n(153));if(r.child!==null){for(t=r.child,o=Jr(t,t.pendingProps),r.child=o,o.return=r;t.sibling!==null;)t=t.sibling,o=o.sibling=Jr(t,t.pendingProps),o.return=r;o.sibling=null}return r.child}function W_(t,r,o){switch(r.tag){case 3:lp(r),Ls();break;case 5:Cd(r);break;case 1:Ht(r.type)&&dl(r);break;case 4:Cc(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,h=r.memoizedProps.value;be(vl,u._currentValue),u._currentValue=h;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(be(Ge,Ge.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?cp(t,r,o):(be(Ge,Ge.current&1),t=mr(t,r,o),t!==null?t.sibling:null);be(Ge,Ge.current&1);break;case 19:if(u=(o&r.childLanes)!==0,(t.flags&128)!==0){if(u)return fp(t,r,o);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),be(Ge,Ge.current),u)break;return null;case 22:case 23:return r.lanes=0,sp(t,r,o)}return mr(t,r,o)}var dp,Kc,pp,mp;dp=function(t,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Kc=function(){},pp=function(t,r,o,u){var h=t.memoizedProps;if(h!==u){t=r.stateNode,Oi(Wn.current);var d=null;switch(o){case"input":h=hi(t,h),u=hi(t,u),d=[];break;case"select":h=ee({},h,{value:void 0}),u=ee({},u,{value:void 0}),d=[];break;case"textarea":h=fo(t,h),u=fo(t,u),d=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=cl)}vo(o,u);var y;o=null;for(F in h)if(!u.hasOwnProperty(F)&&h.hasOwnProperty(F)&&h[F]!=null)if(F==="style"){var w=h[F];for(y in w)w.hasOwnProperty(y)&&(o||(o={}),o[y]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(a.hasOwnProperty(F)?d||(d=[]):(d=d||[]).push(F,null));for(F in u){var A=u[F];if(w=h?.[F],u.hasOwnProperty(F)&&A!==w&&(A!=null||w!=null))if(F==="style")if(w){for(y in w)!w.hasOwnProperty(y)||A&&A.hasOwnProperty(y)||(o||(o={}),o[y]="");for(y in A)A.hasOwnProperty(y)&&w[y]!==A[y]&&(o||(o={}),o[y]=A[y])}else o||(d||(d=[]),d.push(F,o)),o=A;else F==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,w=w?w.__html:void 0,A!=null&&w!==A&&(d=d||[]).push(F,A)):F==="children"?typeof A!="string"&&typeof A!="number"||(d=d||[]).push(F,""+A):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(a.hasOwnProperty(F)?(A!=null&&F==="onScroll"&&ze("scroll",t),d||w===A||(d=[])):(d=d||[]).push(F,A))}o&&(d=d||[]).push("style",o);var F=d;(r.updateQueue=F)&&(r.flags|=4)}},mp=function(t,r,o,u){o!==u&&(r.flags|=4)};function Zo(t,r){if(!He)switch(t.tailMode){case"hidden":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function Nt(t){var r=t.alternate!==null&&t.alternate.child===t.child,o=0,u=0;if(r)for(var h=t.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=u,t.childLanes=o,r}function q_(t,r,o){var u=r.pendingProps;switch(gc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(r),null;case 1:return Ht(r.type)&&fl(),Nt(r),null;case 3:return u=r.stateNode,bs(),Be($t),Be(kt),Pc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(yl(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Cn!==null&&(sh(Cn),Cn=null))),Kc(t,r),Nt(r),null;case 5:Rc(r);var h=Oi(Ko.current);if(o=r.type,t!==null&&r.stateNode!=null)pp(t,r,o,u,h),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(n(166));return Nt(r),null}if(t=Oi(Wn.current),yl(r)){u=r.stateNode,o=r.type;var d=r.memoizedProps;switch(u[Hn]=r,u[$o]=d,t=(r.mode&1)!==0,o){case"dialog":ze("cancel",u),ze("close",u);break;case"iframe":case"object":case"embed":ze("load",u);break;case"video":case"audio":for(h=0;h<jo.length;h++)ze(jo[h],u);break;case"source":ze("error",u);break;case"img":case"image":case"link":ze("error",u),ze("load",u);break;case"details":ze("toggle",u);break;case"input":es(u,d),ze("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!d.multiple},ze("invalid",u);break;case"textarea":ns(u,d),ze("invalid",u)}vo(o,d),h=null;for(var y in d)if(d.hasOwnProperty(y)){var w=d[y];y==="children"?typeof w=="string"?u.textContent!==w&&(d.suppressHydrationWarning!==!0&&ul(u.textContent,w,t),h=["children",w]):typeof w=="number"&&u.textContent!==""+w&&(d.suppressHydrationWarning!==!0&&ul(u.textContent,w,t),h=["children",""+w]):a.hasOwnProperty(y)&&w!=null&&y==="onScroll"&&ze("scroll",u)}switch(o){case"input":Zn(u),La(u,d,!0);break;case"textarea":Zn(u),po(u);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(u.onclick=cl)}u=h,r.updateQueue=u,u!==null&&(r.flags|=4)}else{y=h.nodeType===9?h:h.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ot(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=y.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=y.createElement(o,{is:u.is}):(t=y.createElement(o),o==="select"&&(y=t,u.multiple?y.multiple=!0:u.size&&(y.size=u.size))):t=y.createElementNS(t,o),t[Hn]=r,t[$o]=u,dp(t,r,!1,!1),r.stateNode=t;e:{switch(y=Eo(o,u),o){case"dialog":ze("cancel",t),ze("close",t),h=u;break;case"iframe":case"object":case"embed":ze("load",t),h=u;break;case"video":case"audio":for(h=0;h<jo.length;h++)ze(jo[h],t);h=u;break;case"source":ze("error",t),h=u;break;case"img":case"image":case"link":ze("error",t),ze("load",t),h=u;break;case"details":ze("toggle",t),h=u;break;case"input":es(t,u),h=hi(t,u),ze("invalid",t);break;case"option":h=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},h=ee({},u,{value:void 0}),ze("invalid",t);break;case"textarea":ns(t,u),h=fo(t,u),ze("invalid",t);break;default:h=u}vo(o,h),w=h;for(d in w)if(w.hasOwnProperty(d)){var A=w[d];d==="style"?yo(t,A):d==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,A!=null&&mo(t,A)):d==="children"?typeof A=="string"?(o!=="textarea"||A!=="")&&Pr(t,A):typeof A=="number"&&Pr(t,""+A):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(a.hasOwnProperty(d)?A!=null&&d==="onScroll"&&ze("scroll",t):A!=null&&me(t,d,A,y))}switch(o){case"input":Zn(t),La(t,u,!1);break;case"textarea":Zn(t),po(t);break;case"option":u.value!=null&&t.setAttribute("value",""+De(u.value));break;case"select":t.multiple=!!u.multiple,d=u.value,d!=null?tr(t,!!u.multiple,d,!1):u.defaultValue!=null&&tr(t,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(t.onclick=cl)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Nt(r),null;case 6:if(t&&r.stateNode!=null)mp(t,r,t.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(n(166));if(o=Oi(Ko.current),Oi(Wn.current),yl(r)){if(u=r.stateNode,o=r.memoizedProps,u[Hn]=r,(d=u.nodeValue!==o)&&(t=tn,t!==null))switch(t.tag){case 3:ul(u.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ul(u.nodeValue,o,(t.mode&1)!==0)}d&&(r.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[Hn]=r,r.stateNode=u}return Nt(r),null;case 13:if(Be(Ge),u=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(He&&nn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)_d(),Ls(),r.flags|=98560,d=!1;else if(d=yl(r),u!==null&&u.dehydrated!==null){if(t===null){if(!d)throw Error(n(318));if(d=r.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(n(317));d[Hn]=r}else Ls(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Nt(r),d=!1}else Cn!==null&&(sh(Cn),Cn=null),d=!0;if(!d)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(t===null||(Ge.current&1)!==0?ct===0&&(ct=3):lh())),r.updateQueue!==null&&(r.flags|=4),Nt(r),null);case 4:return bs(),Kc(t,r),t===null&&zo(r.stateNode.containerInfo),Nt(r),null;case 10:return Tc(r.type._context),Nt(r),null;case 17:return Ht(r.type)&&fl(),Nt(r),null;case 19:if(Be(Ge),d=r.memoizedState,d===null)return Nt(r),null;if(u=(r.flags&128)!==0,y=d.rendering,y===null)if(u)Zo(d,!1);else{if(ct!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(y=Il(t),y!==null){for(r.flags|=128,Zo(d,!1),u=y.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=o,o=r.child;o!==null;)d=o,t=u,d.flags&=14680066,y=d.alternate,y===null?(d.childLanes=0,d.lanes=t,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=y.childLanes,d.lanes=y.lanes,d.child=y.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=y.memoizedProps,d.memoizedState=y.memoizedState,d.updateQueue=y.updateQueue,d.type=y.type,t=y.dependencies,d.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return be(Ge,Ge.current&1|2),r.child}t=t.sibling}d.tail!==null&&Fe()>$s&&(r.flags|=128,u=!0,Zo(d,!1),r.lanes=4194304)}else{if(!u)if(t=Il(y),t!==null){if(r.flags|=128,u=!0,o=t.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),Zo(d,!0),d.tail===null&&d.tailMode==="hidden"&&!y.alternate&&!He)return Nt(r),null}else 2*Fe()-d.renderingStartTime>$s&&o!==1073741824&&(r.flags|=128,u=!0,Zo(d,!1),r.lanes=4194304);d.isBackwards?(y.sibling=r.child,r.child=y):(o=d.last,o!==null?o.sibling=y:r.child=y,d.last=y)}return d.tail!==null?(r=d.tail,d.rendering=r,d.tail=r.sibling,d.renderingStartTime=Fe(),r.sibling=null,o=Ge.current,be(Ge,u?o&1|2:o&1),r):(Nt(r),null);case 22:case 23:return ah(),u=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?(rn&1073741824)!==0&&(Nt(r),r.subtreeFlags&6&&(r.flags|=8192)):Nt(r),null;case 24:return null;case 25:return null}throw Error(n(156,r.tag))}function G_(t,r){switch(gc(r),r.tag){case 1:return Ht(r.type)&&fl(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return bs(),Be($t),Be(kt),Pc(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 5:return Rc(r),null;case 13:if(Be(Ge),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(n(340));Ls()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return Be(Ge),null;case 4:return bs(),null;case 10:return Tc(r.type._context),null;case 22:case 23:return ah(),null;case 24:return null;default:return null}}var Ol=!1,Dt=!1,K_=typeof WeakSet=="function"?WeakSet:Set,te=null;function zs(t,r){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Qe(t,r,u)}else o.current=null}function Qc(t,r,o){try{o()}catch(u){Qe(t,r,u)}}var gp=!1;function Q_(t,r){if(ac=Ur,t=Kf(),Zu(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var h=u.anchorOffset,d=u.focusNode;u=u.focusOffset;try{o.nodeType,d.nodeType}catch{o=null;break e}var y=0,w=-1,A=-1,F=0,$=0,H=t,B=null;t:for(;;){for(var Z;H!==o||h!==0&&H.nodeType!==3||(w=y+h),H!==d||u!==0&&H.nodeType!==3||(A=y+u),H.nodeType===3&&(y+=H.nodeValue.length),(Z=H.firstChild)!==null;)B=H,H=Z;for(;;){if(H===t)break t;if(B===o&&++F===h&&(w=y),B===d&&++$===u&&(A=y),(Z=H.nextSibling)!==null)break;H=B,B=H.parentNode}H=Z}o=w===-1||A===-1?null:{start:w,end:A}}else o=null}o=o||{start:0,end:0}}else o=null;for(lc={focusedElem:t,selectionRange:o},Ur=!1,te=r;te!==null;)if(r=te,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,te=t;else for(;te!==null;){r=te;try{var ne=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ne!==null){var re=ne.memoizedProps,Ze=ne.memoizedState,L=r.stateNode,R=L.getSnapshotBeforeUpdate(r.elementType===r.type?re:Rn(r.type,re),Ze);L.__reactInternalSnapshotBeforeUpdate=R}break;case 3:var U=r.stateNode.containerInfo;U.nodeType===1?U.textContent="":U.nodeType===9&&U.documentElement&&U.removeChild(U.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(q){Qe(r,r.return,q)}if(t=r.sibling,t!==null){t.return=r.return,te=t;break}te=r.return}return ne=gp,gp=!1,ne}function ea(t,r,o){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&t)===t){var d=h.destroy;h.destroy=void 0,d!==void 0&&Qc(r,o,d)}h=h.next}while(h!==u)}}function xl(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&t)===t){var u=o.create;o.destroy=u()}o=o.next}while(o!==r)}}function Xc(t){var r=t.ref;if(r!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof r=="function"?r(t):r.current=t}}function yp(t){var r=t.alternate;r!==null&&(t.alternate=null,yp(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[Hn],delete r[$o],delete r[fc],delete r[D_],delete r[O_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function _p(t){return t.tag===5||t.tag===3||t.tag===4}function vp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_p(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jc(t,r,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(t,r):o.insertBefore(t,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(t,o)):(r=o,r.appendChild(t)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=cl));else if(u!==4&&(t=t.child,t!==null))for(Jc(t,r,o),t=t.sibling;t!==null;)Jc(t,r,o),t=t.sibling}function Yc(t,r,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,r?o.insertBefore(t,r):o.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(Yc(t,r,o),t=t.sibling;t!==null;)Yc(t,r,o),t=t.sibling}var Et=null,kn=!1;function qr(t,r,o){for(o=o.child;o!==null;)Ep(t,r,o),o=o.sibling}function Ep(t,r,o){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(Ei,o)}catch{}switch(o.tag){case 5:Dt||zs(o,r);case 6:var u=Et,h=kn;Et=null,qr(t,r,o),Et=u,kn=h,Et!==null&&(kn?(t=Et,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):Et.removeChild(o.stateNode));break;case 18:Et!==null&&(kn?(t=Et,o=o.stateNode,t.nodeType===8?hc(t.parentNode,o):t.nodeType===1&&hc(t,o),In(t)):hc(Et,o.stateNode));break;case 4:u=Et,h=kn,Et=o.stateNode.containerInfo,kn=!0,qr(t,r,o),Et=u,kn=h;break;case 0:case 11:case 14:case 15:if(!Dt&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var d=h,y=d.destroy;d=d.tag,y!==void 0&&((d&2)!==0||(d&4)!==0)&&Qc(o,r,y),h=h.next}while(h!==u)}qr(t,r,o);break;case 1:if(!Dt&&(zs(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(w){Qe(o,r,w)}qr(t,r,o);break;case 21:qr(t,r,o);break;case 22:o.mode&1?(Dt=(u=Dt)||o.memoizedState!==null,qr(t,r,o),Dt=u):qr(t,r,o);break;default:qr(t,r,o)}}function wp(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new K_),r.forEach(function(u){var h=iv.bind(null,t,u);o.has(u)||(o.add(u),u.then(h,h))})}}function Pn(t,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var h=o[u];try{var d=t,y=r,w=y;e:for(;w!==null;){switch(w.tag){case 5:Et=w.stateNode,kn=!1;break e;case 3:Et=w.stateNode.containerInfo,kn=!0;break e;case 4:Et=w.stateNode.containerInfo,kn=!0;break e}w=w.return}if(Et===null)throw Error(n(160));Ep(d,y,h),Et=null,kn=!1;var A=h.alternate;A!==null&&(A.return=null),h.return=null}catch(F){Qe(h,r,F)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Tp(r,t),r=r.sibling}function Tp(t,r){var o=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pn(r,t),Gn(t),u&4){try{ea(3,t,t.return),xl(3,t)}catch(re){Qe(t,t.return,re)}try{ea(5,t,t.return)}catch(re){Qe(t,t.return,re)}}break;case 1:Pn(r,t),Gn(t),u&512&&o!==null&&zs(o,o.return);break;case 5:if(Pn(r,t),Gn(t),u&512&&o!==null&&zs(o,o.return),t.flags&32){var h=t.stateNode;try{Pr(h,"")}catch(re){Qe(t,t.return,re)}}if(u&4&&(h=t.stateNode,h!=null)){var d=t.memoizedProps,y=o!==null?o.memoizedProps:d,w=t.type,A=t.updateQueue;if(t.updateQueue=null,A!==null)try{w==="input"&&d.type==="radio"&&d.name!=null&&co(h,d),Eo(w,y);var F=Eo(w,d);for(y=0;y<A.length;y+=2){var $=A[y],H=A[y+1];$==="style"?yo(h,H):$==="dangerouslySetInnerHTML"?mo(h,H):$==="children"?Pr(h,H):me(h,$,H,F)}switch(w){case"input":ho(h,d);break;case"textarea":rs(h,d);break;case"select":var B=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!d.multiple;var Z=d.value;Z!=null?tr(h,!!d.multiple,Z,!1):B!==!!d.multiple&&(d.defaultValue!=null?tr(h,!!d.multiple,d.defaultValue,!0):tr(h,!!d.multiple,d.multiple?[]:"",!1))}h[$o]=d}catch(re){Qe(t,t.return,re)}}break;case 6:if(Pn(r,t),Gn(t),u&4){if(t.stateNode===null)throw Error(n(162));h=t.stateNode,d=t.memoizedProps;try{h.nodeValue=d}catch(re){Qe(t,t.return,re)}}break;case 3:if(Pn(r,t),Gn(t),u&4&&o!==null&&o.memoizedState.isDehydrated)try{In(r.containerInfo)}catch(re){Qe(t,t.return,re)}break;case 4:Pn(r,t),Gn(t);break;case 13:Pn(r,t),Gn(t),h=t.child,h.flags&8192&&(d=h.memoizedState!==null,h.stateNode.isHidden=d,!d||h.alternate!==null&&h.alternate.memoizedState!==null||(th=Fe())),u&4&&wp(t);break;case 22:if($=o!==null&&o.memoizedState!==null,t.mode&1?(Dt=(F=Dt)||$,Pn(r,t),Dt=F):Pn(r,t),Gn(t),u&8192){if(F=t.memoizedState!==null,(t.stateNode.isHidden=F)&&!$&&(t.mode&1)!==0)for(te=t,$=t.child;$!==null;){for(H=te=$;te!==null;){switch(B=te,Z=B.child,B.tag){case 0:case 11:case 14:case 15:ea(4,B,B.return);break;case 1:zs(B,B.return);var ne=B.stateNode;if(typeof ne.componentWillUnmount=="function"){u=B,o=B.return;try{r=u,ne.props=r.memoizedProps,ne.state=r.memoizedState,ne.componentWillUnmount()}catch(re){Qe(u,o,re)}}break;case 5:zs(B,B.return);break;case 22:if(B.memoizedState!==null){Ap(H);continue}}Z!==null?(Z.return=B,te=Z):Ap(H)}$=$.sibling}e:for($=null,H=t;;){if(H.tag===5){if($===null){$=H;try{h=H.stateNode,F?(d=h.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none"):(w=H.stateNode,A=H.memoizedProps.style,y=A!=null&&A.hasOwnProperty("display")?A.display:null,w.style.display=go("display",y))}catch(re){Qe(t,t.return,re)}}}else if(H.tag===6){if($===null)try{H.stateNode.nodeValue=F?"":H.memoizedProps}catch(re){Qe(t,t.return,re)}}else if((H.tag!==22&&H.tag!==23||H.memoizedState===null||H===t)&&H.child!==null){H.child.return=H,H=H.child;continue}if(H===t)break e;for(;H.sibling===null;){if(H.return===null||H.return===t)break e;$===H&&($=null),H=H.return}$===H&&($=null),H.sibling.return=H.return,H=H.sibling}}break;case 19:Pn(r,t),Gn(t),u&4&&wp(t);break;case 21:break;default:Pn(r,t),Gn(t)}}function Gn(t){var r=t.flags;if(r&2){try{e:{for(var o=t.return;o!==null;){if(_p(o)){var u=o;break e}o=o.return}throw Error(n(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(Pr(h,""),u.flags&=-33);var d=vp(t);Yc(t,d,h);break;case 3:case 4:var y=u.stateNode.containerInfo,w=vp(t);Jc(t,w,y);break;default:throw Error(n(161))}}catch(A){Qe(t,t.return,A)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function X_(t,r,o){te=t,Ip(t)}function Ip(t,r,o){for(var u=(t.mode&1)!==0;te!==null;){var h=te,d=h.child;if(h.tag===22&&u){var y=h.memoizedState!==null||Ol;if(!y){var w=h.alternate,A=w!==null&&w.memoizedState!==null||Dt;w=Ol;var F=Dt;if(Ol=y,(Dt=A)&&!F)for(te=h;te!==null;)y=te,A=y.child,y.tag===22&&y.memoizedState!==null?Cp(h):A!==null?(A.return=y,te=A):Cp(h);for(;d!==null;)te=d,Ip(d),d=d.sibling;te=h,Ol=w,Dt=F}Sp(t)}else(h.subtreeFlags&8772)!==0&&d!==null?(d.return=h,te=d):Sp(t)}}function Sp(t){for(;te!==null;){var r=te;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Dt||xl(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!Dt)if(o===null)u.componentDidMount();else{var h=r.elementType===r.type?o.memoizedProps:Rn(r.type,o.memoizedProps);u.componentDidUpdate(h,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var d=r.updateQueue;d!==null&&Ad(r,d,u);break;case 3:var y=r.updateQueue;if(y!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}Ad(r,y,o)}break;case 5:var w=r.stateNode;if(o===null&&r.flags&4){o=w;var A=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":A.autoFocus&&o.focus();break;case"img":A.src&&(o.src=A.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var F=r.alternate;if(F!==null){var $=F.memoizedState;if($!==null){var H=$.dehydrated;H!==null&&In(H)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Dt||r.flags&512&&Xc(r)}catch(B){Qe(r,r.return,B)}}if(r===t){te=null;break}if(o=r.sibling,o!==null){o.return=r.return,te=o;break}te=r.return}}function Ap(t){for(;te!==null;){var r=te;if(r===t){te=null;break}var o=r.sibling;if(o!==null){o.return=r.return,te=o;break}te=r.return}}function Cp(t){for(;te!==null;){var r=te;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{xl(4,r)}catch(A){Qe(r,o,A)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var h=r.return;try{u.componentDidMount()}catch(A){Qe(r,h,A)}}var d=r.return;try{Xc(r)}catch(A){Qe(r,d,A)}break;case 5:var y=r.return;try{Xc(r)}catch(A){Qe(r,y,A)}}}catch(A){Qe(r,r.return,A)}if(r===t){te=null;break}var w=r.sibling;if(w!==null){w.return=r.return,te=w;break}te=r.return}}var J_=Math.ceil,Vl=ke.ReactCurrentDispatcher,Zc=ke.ReactCurrentOwner,dn=ke.ReactCurrentBatchConfig,Re=0,pt=null,rt=null,wt=0,rn=0,Bs=zr(0),ct=0,ta=null,Vi=0,Ll=0,eh=0,na=null,qt=null,th=0,$s=1/0,gr=null,Ml=!1,nh=null,Gr=null,Ul=!1,Kr=null,Fl=0,ra=0,rh=null,bl=-1,jl=0;function jt(){return(Re&6)!==0?Fe():bl!==-1?bl:bl=Fe()}function Qr(t){return(t.mode&1)===0?1:(Re&2)!==0&&wt!==0?wt&-wt:V_.transition!==null?(jl===0&&(jl=Ti()),jl):(t=Ie,t!==0||(t=window.event,t=t===void 0?16:Do(t.type)),t)}function Nn(t,r,o,u){if(50<ra)throw ra=0,rh=null,Error(n(185));xr(t,o,u),((Re&2)===0||t!==pt)&&(t===pt&&((Re&2)===0&&(Ll|=o),ct===4&&Xr(t,wt)),Gt(t,u),o===1&&Re===0&&(r.mode&1)===0&&($s=Fe()+500,pl&&$r()))}function Gt(t,r){var o=t.callbackNode;ir(t,r);var u=wi(t,t===pt?wt:0);if(u===0)o!==null&&Co(o),t.callbackNode=null,t.callbackPriority=0;else if(r=u&-u,t.callbackPriority!==r){if(o!=null&&Co(o),r===1)t.tag===0?x_(kp.bind(null,t)):dd(kp.bind(null,t)),P_(function(){(Re&6)===0&&$r()}),o=null;else{switch(Lr(u)){case 1:o=vi;break;case 4:o=Nr;break;case 16:o=on;break;case 536870912:o=ja;break;default:o=on}o=Mp(o,Rp.bind(null,t))}t.callbackPriority=r,t.callbackNode=o}}function Rp(t,r){if(bl=-1,jl=0,(Re&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Hs()&&t.callbackNode!==o)return null;var u=wi(t,t===pt?wt:0);if(u===0)return null;if((u&30)!==0||(u&t.expiredLanes)!==0||r)r=zl(t,u);else{r=u;var h=Re;Re|=2;var d=Np();(pt!==t||wt!==r)&&(gr=null,$s=Fe()+500,Mi(t,r));do try{ev();break}catch(w){Pp(t,w)}while(!0);wc(),Vl.current=d,Re=h,rt!==null?r=0:(pt=null,wt=0,r=ct)}if(r!==0){if(r===2&&(h=Yt(t),h!==0&&(u=h,r=ih(t,h))),r===1)throw o=ta,Mi(t,0),Xr(t,u),Gt(t,Fe()),o;if(r===6)Xr(t,u);else{if(h=t.current.alternate,(u&30)===0&&!Y_(h)&&(r=zl(t,u),r===2&&(d=Yt(t),d!==0&&(u=d,r=ih(t,d))),r===1))throw o=ta,Mi(t,0),Xr(t,u),Gt(t,Fe()),o;switch(t.finishedWork=h,t.finishedLanes=u,r){case 0:case 1:throw Error(n(345));case 2:Ui(t,qt,gr);break;case 3:if(Xr(t,u),(u&130023424)===u&&(r=th+500-Fe(),10<r)){if(wi(t,0)!==0)break;if(h=t.suspendedLanes,(h&u)!==u){jt(),t.pingedLanes|=t.suspendedLanes&h;break}t.timeoutHandle=cc(Ui.bind(null,t,qt,gr),r);break}Ui(t,qt,gr);break;case 4:if(Xr(t,u),(u&4194240)===u)break;for(r=t.eventTimes,h=-1;0<u;){var y=31-Ut(u);d=1<<y,y=r[y],y>h&&(h=y),u&=~d}if(u=h,u=Fe()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*J_(u/1960))-u,10<u){t.timeoutHandle=cc(Ui.bind(null,t,qt,gr),u);break}Ui(t,qt,gr);break;case 5:Ui(t,qt,gr);break;default:throw Error(n(329))}}}return Gt(t,Fe()),t.callbackNode===o?Rp.bind(null,t):null}function ih(t,r){var o=na;return t.current.memoizedState.isDehydrated&&(Mi(t,r).flags|=256),t=zl(t,r),t!==2&&(r=qt,qt=o,r!==null&&sh(r)),t}function sh(t){qt===null?qt=t:qt.push.apply(qt,t)}function Y_(t){for(var r=t;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var h=o[u],d=h.getSnapshot;h=h.value;try{if(!An(d(),h))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Xr(t,r){for(r&=~eh,r&=~Ll,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var o=31-Ut(r),u=1<<o;t[o]=-1,r&=~u}}function kp(t){if((Re&6)!==0)throw Error(n(327));Hs();var r=wi(t,0);if((r&1)===0)return Gt(t,Fe()),null;var o=zl(t,r);if(t.tag!==0&&o===2){var u=Yt(t);u!==0&&(r=u,o=ih(t,u))}if(o===1)throw o=ta,Mi(t,0),Xr(t,r),Gt(t,Fe()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,Ui(t,qt,gr),Gt(t,Fe()),null}function oh(t,r){var o=Re;Re|=1;try{return t(r)}finally{Re=o,Re===0&&($s=Fe()+500,pl&&$r())}}function Li(t){Kr!==null&&Kr.tag===0&&(Re&6)===0&&Hs();var r=Re;Re|=1;var o=dn.transition,u=Ie;try{if(dn.transition=null,Ie=1,t)return t()}finally{Ie=u,dn.transition=o,Re=r,(Re&6)===0&&$r()}}function ah(){rn=Bs.current,Be(Bs)}function Mi(t,r){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,k_(o)),rt!==null)for(o=rt.return;o!==null;){var u=o;switch(gc(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&fl();break;case 3:bs(),Be($t),Be(kt),Pc();break;case 5:Rc(u);break;case 4:bs();break;case 13:Be(Ge);break;case 19:Be(Ge);break;case 10:Tc(u.type._context);break;case 22:case 23:ah()}o=o.return}if(pt=t,rt=t=Jr(t.current,null),wt=rn=r,ct=0,ta=null,eh=Ll=Vi=0,qt=na=null,Di!==null){for(r=0;r<Di.length;r++)if(o=Di[r],u=o.interleaved,u!==null){o.interleaved=null;var h=u.next,d=o.pending;if(d!==null){var y=d.next;d.next=h,u.next=y}o.pending=u}Di=null}return t}function Pp(t,r){do{var o=rt;try{if(wc(),Sl.current=kl,Al){for(var u=Ke.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}Al=!1}if(xi=0,dt=ut=Ke=null,Qo=!1,Xo=0,Zc.current=null,o===null||o.return===null){ct=1,ta=r,rt=null;break}e:{var d=t,y=o.return,w=o,A=r;if(r=wt,w.flags|=32768,A!==null&&typeof A=="object"&&typeof A.then=="function"){var F=A,$=w,H=$.tag;if(($.mode&1)===0&&(H===0||H===11||H===15)){var B=$.alternate;B?($.updateQueue=B.updateQueue,$.memoizedState=B.memoizedState,$.lanes=B.lanes):($.updateQueue=null,$.memoizedState=null)}var Z=ep(y);if(Z!==null){Z.flags&=-257,tp(Z,y,w,d,r),Z.mode&1&&Zd(d,F,r),r=Z,A=F;var ne=r.updateQueue;if(ne===null){var re=new Set;re.add(A),r.updateQueue=re}else ne.add(A);break e}else{if((r&1)===0){Zd(d,F,r),lh();break e}A=Error(n(426))}}else if(He&&w.mode&1){var Ze=ep(y);if(Ze!==null){(Ze.flags&65536)===0&&(Ze.flags|=256),tp(Ze,y,w,d,r),vc(js(A,w));break e}}d=A=js(A,w),ct!==4&&(ct=2),na===null?na=[d]:na.push(d),d=y;do{switch(d.tag){case 3:d.flags|=65536,r&=-r,d.lanes|=r;var L=Jd(d,A,r);Sd(d,L);break e;case 1:w=A;var R=d.type,U=d.stateNode;if((d.flags&128)===0&&(typeof R.getDerivedStateFromError=="function"||U!==null&&typeof U.componentDidCatch=="function"&&(Gr===null||!Gr.has(U)))){d.flags|=65536,r&=-r,d.lanes|=r;var q=Yd(d,w,r);Sd(d,q);break e}}d=d.return}while(d!==null)}Op(o)}catch(se){r=se,rt===o&&o!==null&&(rt=o=o.return);continue}break}while(!0)}function Np(){var t=Vl.current;return Vl.current=kl,t===null?kl:t}function lh(){(ct===0||ct===3||ct===2)&&(ct=4),pt===null||(Vi&268435455)===0&&(Ll&268435455)===0||Xr(pt,wt)}function zl(t,r){var o=Re;Re|=2;var u=Np();(pt!==t||wt!==r)&&(gr=null,Mi(t,r));do try{Z_();break}catch(h){Pp(t,h)}while(!0);if(wc(),Re=o,Vl.current=u,rt!==null)throw Error(n(261));return pt=null,wt=0,ct}function Z_(){for(;rt!==null;)Dp(rt)}function ev(){for(;rt!==null&&!Fa();)Dp(rt)}function Dp(t){var r=Lp(t.alternate,t,rn);t.memoizedProps=t.pendingProps,r===null?Op(t):rt=r,Zc.current=null}function Op(t){var r=t;do{var o=r.alternate;if(t=r.return,(r.flags&32768)===0){if(o=q_(o,r,rn),o!==null){rt=o;return}}else{if(o=G_(o,r),o!==null){o.flags&=32767,rt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ct=6,rt=null;return}}if(r=r.sibling,r!==null){rt=r;return}rt=r=t}while(r!==null);ct===0&&(ct=5)}function Ui(t,r,o){var u=Ie,h=dn.transition;try{dn.transition=null,Ie=1,tv(t,r,o,u)}finally{dn.transition=h,Ie=u}return null}function tv(t,r,o,u){do Hs();while(Kr!==null);if((Re&6)!==0)throw Error(n(327));o=t.finishedWork;var h=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var d=o.lanes|o.childLanes;if(Me(t,d),t===pt&&(rt=pt=null,wt=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ul||(Ul=!0,Mp(on,function(){return Hs(),null})),d=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||d){d=dn.transition,dn.transition=null;var y=Ie;Ie=1;var w=Re;Re|=4,Zc.current=null,Q_(t,o),Tp(o,t),w_(lc),Ur=!!ac,lc=ac=null,t.current=o,X_(o),Wu(),Re=w,Ie=y,dn.transition=d}else t.current=o;if(Ul&&(Ul=!1,Kr=t,Fl=h),d=t.pendingLanes,d===0&&(Gr=null),za(o.stateNode),Gt(t,Fe()),r!==null)for(u=t.onRecoverableError,o=0;o<r.length;o++)h=r[o],u(h.value,{componentStack:h.stack,digest:h.digest});if(Ml)throw Ml=!1,t=nh,nh=null,t;return(Fl&1)!==0&&t.tag!==0&&Hs(),d=t.pendingLanes,(d&1)!==0?t===rh?ra++:(ra=0,rh=t):ra=0,$r(),null}function Hs(){if(Kr!==null){var t=Lr(Fl),r=dn.transition,o=Ie;try{if(dn.transition=null,Ie=16>t?16:t,Kr===null)var u=!1;else{if(t=Kr,Kr=null,Fl=0,(Re&6)!==0)throw Error(n(331));var h=Re;for(Re|=4,te=t.current;te!==null;){var d=te,y=d.child;if((te.flags&16)!==0){var w=d.deletions;if(w!==null){for(var A=0;A<w.length;A++){var F=w[A];for(te=F;te!==null;){var $=te;switch($.tag){case 0:case 11:case 15:ea(8,$,d)}var H=$.child;if(H!==null)H.return=$,te=H;else for(;te!==null;){$=te;var B=$.sibling,Z=$.return;if(yp($),$===F){te=null;break}if(B!==null){B.return=Z,te=B;break}te=Z}}}var ne=d.alternate;if(ne!==null){var re=ne.child;if(re!==null){ne.child=null;do{var Ze=re.sibling;re.sibling=null,re=Ze}while(re!==null)}}te=d}}if((d.subtreeFlags&2064)!==0&&y!==null)y.return=d,te=y;else e:for(;te!==null;){if(d=te,(d.flags&2048)!==0)switch(d.tag){case 0:case 11:case 15:ea(9,d,d.return)}var L=d.sibling;if(L!==null){L.return=d.return,te=L;break e}te=d.return}}var R=t.current;for(te=R;te!==null;){y=te;var U=y.child;if((y.subtreeFlags&2064)!==0&&U!==null)U.return=y,te=U;else e:for(y=R;te!==null;){if(w=te,(w.flags&2048)!==0)try{switch(w.tag){case 0:case 11:case 15:xl(9,w)}}catch(se){Qe(w,w.return,se)}if(w===y){te=null;break e}var q=w.sibling;if(q!==null){q.return=w.return,te=q;break e}te=w.return}}if(Re=h,$r(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(Ei,t)}catch{}u=!0}return u}finally{Ie=o,dn.transition=r}}return!1}function xp(t,r,o){r=js(o,r),r=Jd(t,r,1),t=Wr(t,r,1),r=jt(),t!==null&&(xr(t,1,r),Gt(t,r))}function Qe(t,r,o){if(t.tag===3)xp(t,t,o);else for(;r!==null;){if(r.tag===3){xp(r,t,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Gr===null||!Gr.has(u))){t=js(o,t),t=Yd(r,t,1),r=Wr(r,t,1),t=jt(),r!==null&&(xr(r,1,t),Gt(r,t));break}}r=r.return}}function nv(t,r,o){var u=t.pingCache;u!==null&&u.delete(r),r=jt(),t.pingedLanes|=t.suspendedLanes&o,pt===t&&(wt&o)===o&&(ct===4||ct===3&&(wt&130023424)===wt&&500>Fe()-th?Mi(t,0):eh|=o),Gt(t,r)}function Vp(t,r){r===0&&((t.mode&1)===0?r=1:(r=ds,ds<<=1,(ds&130023424)===0&&(ds=4194304)));var o=jt();t=dr(t,r),t!==null&&(xr(t,r,o),Gt(t,o))}function rv(t){var r=t.memoizedState,o=0;r!==null&&(o=r.retryLane),Vp(t,o)}function iv(t,r){var o=0;switch(t.tag){case 13:var u=t.stateNode,h=t.memoizedState;h!==null&&(o=h.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(r),Vp(t,o)}var Lp;Lp=function(t,r,o){if(t!==null)if(t.memoizedProps!==r.pendingProps||$t.current)Wt=!0;else{if((t.lanes&o)===0&&(r.flags&128)===0)return Wt=!1,W_(t,r,o);Wt=(t.flags&131072)!==0}else Wt=!1,He&&(r.flags&1048576)!==0&&pd(r,gl,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;Dl(t,r),t=r.pendingProps;var h=Os(r,kt.current);Fs(r,o),h=Oc(null,r,u,t,h,o);var d=xc();return r.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Ht(u)?(d=!0,dl(r)):d=!1,r.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Ac(r),h.updater=Pl,r.stateNode=h,h._reactInternals=r,bc(r,u,t,o),r=$c(null,r,u,!0,d,o)):(r.tag=0,He&&d&&mc(r),bt(null,r,h,o),r=r.child),r;case 16:u=r.elementType;e:{switch(Dl(t,r),t=r.pendingProps,h=u._init,u=h(u._payload),r.type=u,h=r.tag=ov(u),t=Rn(u,t),h){case 0:r=Bc(null,r,u,t,o);break e;case 1:r=ap(null,r,u,t,o);break e;case 11:r=np(null,r,u,t,o);break e;case 14:r=rp(null,r,u,Rn(u.type,t),o);break e}throw Error(n(306,u,""))}return r;case 0:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Rn(u,h),Bc(t,r,u,h,o);case 1:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Rn(u,h),ap(t,r,u,h,o);case 3:e:{if(lp(r),t===null)throw Error(n(387));u=r.pendingProps,d=r.memoizedState,h=d.element,Id(t,r),Tl(r,u,null,o);var y=r.memoizedState;if(u=y.element,d.isDehydrated)if(d={element:u,isDehydrated:!1,cache:y.cache,pendingSuspenseBoundaries:y.pendingSuspenseBoundaries,transitions:y.transitions},r.updateQueue.baseState=d,r.memoizedState=d,r.flags&256){h=js(Error(n(423)),r),r=up(t,r,u,o,h);break e}else if(u!==h){h=js(Error(n(424)),r),r=up(t,r,u,o,h);break e}else for(nn=jr(r.stateNode.containerInfo.firstChild),tn=r,He=!0,Cn=null,o=wd(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ls(),u===h){r=mr(t,r,o);break e}bt(t,r,u,o)}r=r.child}return r;case 5:return Cd(r),t===null&&_c(r),u=r.type,h=r.pendingProps,d=t!==null?t.memoizedProps:null,y=h.children,uc(u,h)?y=null:d!==null&&uc(u,d)&&(r.flags|=32),op(t,r),bt(t,r,y,o),r.child;case 6:return t===null&&_c(r),null;case 13:return cp(t,r,o);case 4:return Cc(r,r.stateNode.containerInfo),u=r.pendingProps,t===null?r.child=Ms(r,null,u,o):bt(t,r,u,o),r.child;case 11:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Rn(u,h),np(t,r,u,h,o);case 7:return bt(t,r,r.pendingProps,o),r.child;case 8:return bt(t,r,r.pendingProps.children,o),r.child;case 12:return bt(t,r,r.pendingProps.children,o),r.child;case 10:e:{if(u=r.type._context,h=r.pendingProps,d=r.memoizedProps,y=h.value,be(vl,u._currentValue),u._currentValue=y,d!==null)if(An(d.value,y)){if(d.children===h.children&&!$t.current){r=mr(t,r,o);break e}}else for(d=r.child,d!==null&&(d.return=r);d!==null;){var w=d.dependencies;if(w!==null){y=d.child;for(var A=w.firstContext;A!==null;){if(A.context===u){if(d.tag===1){A=pr(-1,o&-o),A.tag=2;var F=d.updateQueue;if(F!==null){F=F.shared;var $=F.pending;$===null?A.next=A:(A.next=$.next,$.next=A),F.pending=A}}d.lanes|=o,A=d.alternate,A!==null&&(A.lanes|=o),Ic(d.return,o,r),w.lanes|=o;break}A=A.next}}else if(d.tag===10)y=d.type===r.type?null:d.child;else if(d.tag===18){if(y=d.return,y===null)throw Error(n(341));y.lanes|=o,w=y.alternate,w!==null&&(w.lanes|=o),Ic(y,o,r),y=d.sibling}else y=d.child;if(y!==null)y.return=d;else for(y=d;y!==null;){if(y===r){y=null;break}if(d=y.sibling,d!==null){d.return=y.return,y=d;break}y=y.return}d=y}bt(t,r,h.children,o),r=r.child}return r;case 9:return h=r.type,u=r.pendingProps.children,Fs(r,o),h=hn(h),u=u(h),r.flags|=1,bt(t,r,u,o),r.child;case 14:return u=r.type,h=Rn(u,r.pendingProps),h=Rn(u.type,h),rp(t,r,u,h,o);case 15:return ip(t,r,r.type,r.pendingProps,o);case 17:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Rn(u,h),Dl(t,r),r.tag=1,Ht(u)?(t=!0,dl(r)):t=!1,Fs(r,o),Qd(r,u,h),bc(r,u,h,o),$c(null,r,u,!0,t,o);case 19:return fp(t,r,o);case 22:return sp(t,r,o)}throw Error(n(156,r.tag))};function Mp(t,r){return hs(t,r)}function sv(t,r,o,u){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(t,r,o,u){return new sv(t,r,o,u)}function uh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ov(t){if(typeof t=="function")return uh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===x)return 11;if(t===Ct)return 14}return 2}function Jr(t,r){var o=t.alternate;return o===null?(o=pn(t.tag,r,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=r,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,r=t.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Bl(t,r,o,u,h,d){var y=2;if(u=t,typeof t=="function")uh(t)&&(y=1);else if(typeof t=="string")y=5;else e:switch(t){case P:return Fi(o.children,h,d,r);case T:y=8,h|=8;break;case S:return t=pn(12,o,r,h|2),t.elementType=S,t.lanes=d,t;case I:return t=pn(13,o,r,h),t.elementType=I,t.lanes=d,t;case Je:return t=pn(19,o,r,h),t.elementType=Je,t.lanes=d,t;case Le:return $l(o,h,d,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case k:y=10;break e;case N:y=9;break e;case x:y=11;break e;case Ct:y=14;break e;case Rt:y=16,u=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return r=pn(y,o,r,h),r.elementType=t,r.type=u,r.lanes=d,r}function Fi(t,r,o,u){return t=pn(7,t,u,r),t.lanes=o,t}function $l(t,r,o,u){return t=pn(22,t,u,r),t.elementType=Le,t.lanes=o,t.stateNode={isHidden:!1},t}function ch(t,r,o){return t=pn(6,t,null,r),t.lanes=o,t}function hh(t,r,o){return r=pn(4,t.children!==null?t.children:[],t.key,r),r.lanes=o,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function av(t,r,o,u,h){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Or(0),this.expirationTimes=Or(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Or(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function fh(t,r,o,u,h,d,y,w,A){return t=new av(t,r,o,w,A),r===1?(r=1,d===!0&&(r|=8)):r=0,d=pn(3,null,null,r),t.current=d,d.stateNode=t,d.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ac(d),t}function lv(t,r,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xe,key:u==null?null:""+u,children:t,containerInfo:r,implementation:o}}function Up(t){if(!t)return Br;t=t._reactInternals;e:{if(_n(t)!==t||t.tag!==1)throw Error(n(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Ht(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Ht(o))return hd(t,o,r)}return r}function Fp(t,r,o,u,h,d,y,w,A){return t=fh(o,u,!0,t,h,d,y,w,A),t.context=Up(null),o=t.current,u=jt(),h=Qr(o),d=pr(u,h),d.callback=r??null,Wr(o,d,h),t.current.lanes=h,xr(t,h,u),Gt(t,u),t}function Hl(t,r,o,u){var h=r.current,d=jt(),y=Qr(h);return o=Up(o),r.context===null?r.context=o:r.pendingContext=o,r=pr(d,y),r.payload={element:t},u=u===void 0?null:u,u!==null&&(r.callback=u),t=Wr(h,r,y),t!==null&&(Nn(t,h,y,d),wl(t,h,y)),y}function Wl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function bp(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<r?o:r}}function dh(t,r){bp(t,r),(t=t.alternate)&&bp(t,r)}function uv(){return null}var jp=typeof reportError=="function"?reportError:function(t){console.error(t)};function ph(t){this._internalRoot=t}ql.prototype.render=ph.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(n(409));Hl(t,r,null,null)},ql.prototype.unmount=ph.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;Li(function(){Hl(null,t,null,null)}),r[ur]=null}};function ql(t){this._internalRoot=t}ql.prototype.unstable_scheduleHydration=function(t){if(t){var r=qa();t={blockedOn:null,target:t,priority:r};for(var o=0;o<jn.length&&r!==0&&r<jn[o].priority;o++);jn.splice(o,0,t),o===0&&Qa(t)}};function mh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Gl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zp(){}function cv(t,r,o,u,h){if(h){if(typeof u=="function"){var d=u;u=function(){var F=Wl(y);d.call(F)}}var y=Fp(r,u,t,0,null,!1,!1,"",zp);return t._reactRootContainer=y,t[ur]=y.current,zo(t.nodeType===8?t.parentNode:t),Li(),y}for(;h=t.lastChild;)t.removeChild(h);if(typeof u=="function"){var w=u;u=function(){var F=Wl(A);w.call(F)}}var A=fh(t,0,!1,null,null,!1,!1,"",zp);return t._reactRootContainer=A,t[ur]=A.current,zo(t.nodeType===8?t.parentNode:t),Li(function(){Hl(r,A,o,u)}),A}function Kl(t,r,o,u,h){var d=o._reactRootContainer;if(d){var y=d;if(typeof h=="function"){var w=h;h=function(){var A=Wl(y);w.call(A)}}Hl(r,y,t,h)}else y=cv(o,r,t,h,u);return Wl(y)}Ha=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var o=Dr(r.pendingLanes);o!==0&&(Vr(r,o|1),Gt(r,Fe()),(Re&6)===0&&($s=Fe()+500,$r()))}break;case 13:Li(function(){var u=dr(t,1);if(u!==null){var h=jt();Nn(u,t,1,h)}}),dh(t,1)}},ps=function(t){if(t.tag===13){var r=dr(t,134217728);if(r!==null){var o=jt();Nn(r,t,134217728,o)}dh(t,134217728)}},Wa=function(t){if(t.tag===13){var r=Qr(t),o=dr(t,r);if(o!==null){var u=jt();Nn(o,t,r,u)}dh(t,r)}},qa=function(){return Ie},Ga=function(t,r){var o=Ie;try{return Ie=t,r()}finally{Ie=o}},ss=function(t,r,o){switch(r){case"input":if(ho(t,o),r=o.name,o.type==="radio"&&r!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==t&&u.form===t.form){var h=hl(u);if(!h)throw Error(n(90));Zi(u),ho(u,h)}}}break;case"textarea":rs(t,o);break;case"select":r=o.value,r!=null&&tr(t,!!o.multiple,r,!1)}},mi=oh,To=Li;var hv={usingClientEntryPoint:!1,Events:[Ho,Ns,hl,Fn,wo,oh]},ia={findFiberByHostInstance:Ri,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fv={bundleType:ia.bundleType,version:ia.version,rendererPackageName:ia.rendererPackageName,rendererConfig:ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ke.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ao(t),t===null?null:t.stateNode},findFiberByHostInstance:ia.findFiberByHostInstance||uv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{Ei=Ql.inject(fv),Jt=Ql}catch{}}return Kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hv,Kt.createPortal=function(t,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mh(r))throw Error(n(200));return lv(t,r,null,o)},Kt.createRoot=function(t,r){if(!mh(t))throw Error(n(299));var o=!1,u="",h=jp;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(h=r.onRecoverableError)),r=fh(t,1,!1,null,null,o,!1,u,h),t[ur]=r.current,zo(t.nodeType===8?t.parentNode:t),new ph(r)},Kt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Ao(r),t=t===null?null:t.stateNode,t},Kt.flushSync=function(t){return Li(t)},Kt.hydrate=function(t,r,o){if(!Gl(r))throw Error(n(200));return Kl(null,t,r,!0,o)},Kt.hydrateRoot=function(t,r,o){if(!mh(t))throw Error(n(405));var u=o!=null&&o.hydratedSources||null,h=!1,d="",y=jp;if(o!=null&&(o.unstable_strictMode===!0&&(h=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onRecoverableError!==void 0&&(y=o.onRecoverableError)),r=Fp(r,null,t,1,o??null,h,!1,d,y),t[ur]=r.current,zo(t),u)for(t=0;t<u.length;t++)o=u[t],h=o._getVersion,h=h(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,h]:r.mutableSourceEagerHydrationData.push(o,h);return new ql(r)},Kt.render=function(t,r,o){if(!Gl(r))throw Error(n(200));return Kl(null,t,r,!1,o)},Kt.unmountComponentAtNode=function(t){if(!Gl(t))throw Error(n(40));return t._reactRootContainer?(Li(function(){Kl(null,null,t,!1,function(){t._reactRootContainer=null,t[ur]=null})}),!0):!1},Kt.unstable_batchedUpdates=oh,Kt.unstable_renderSubtreeIntoContainer=function(t,r,o,u){if(!Gl(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Kl(t,r,o,!1,u)},Kt.version="18.3.1-next-f1338f8080-20240426",Kt}var Qp;function Ev(){if(Qp)return _h.exports;Qp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),_h.exports=vv(),_h.exports}var Xp;function wv(){if(Xp)return Xl;Xp=1;var i=Ev();return Xl.createRoot=i.createRoot,Xl.hydrateRoot=i.hydrateRoot,Xl}var Tv=wv();function Iv(){const[i,e]=ji.useState(!1),n=()=>{e(!i)};return oe.jsxs("header",{className:"main-header",children:[oe.jsxs("div",{className:"header-title",children:[oe.jsx("img",{src:"./images/picstronaute.png",alt:"Picstronaute Icon",className:"picstronaute-icon"}),oe.jsx("h1",{children:"PICSTRONAUTE"})]}),oe.jsxs("div",{className:"menu-toggle",onClick:n,children:[oe.jsx("div",{className:`burger-line ${i?"open":""}`}),oe.jsx("div",{className:`burger-line ${i?"open":""}`}),oe.jsx("div",{className:`burger-line ${i?"open":""}`})]}),oe.jsx("nav",{className:`main-nav ${i?"open":""}`,children:oe.jsxs("ul",{children:[oe.jsx("li",{children:oe.jsx("a",{href:"#concept",onClick:n,children:"Concept"})}),oe.jsx("li",{children:oe.jsx("a",{href:"#defis",onClick:n,children:"Défis"})}),oe.jsx("li",{children:oe.jsx("a",{href:"#email",onClick:n,children:"Contact"})})]})})]})}function Sv(){return oe.jsx("footer",{className:"main-footer",children:oe.jsxs("p",{children:["Suivez-nous sur Instagram : ",oe.jsx("a",{href:"https://instagram.com/picstronaute",target:"_blank",rel:"noopener noreferrer",children:"@picstronaute"})]})})}const Av=()=>{};var Jp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):(a&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++s)&1023),e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},Cv=function(i){const e=[];let n=0,s=0;for(;n<i.length;){const a=i[n++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const c=i[n++];e[s++]=String.fromCharCode((a&31)<<6|c&63)}else if(a>239&&a<365){const c=i[n++],p=i[n++],g=i[n++],_=((a&7)<<18|(c&63)<<12|(p&63)<<6|g&63)-65536;e[s++]=String.fromCharCode(55296+(_>>10)),e[s++]=String.fromCharCode(56320+(_&1023))}else{const c=i[n++],p=i[n++];e[s++]=String.fromCharCode((a&15)<<12|(c&63)<<6|p&63)}}return e.join("")},pg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<i.length;a+=3){const c=i[a],p=a+1<i.length,g=p?i[a+1]:0,_=a+2<i.length,E=_?i[a+2]:0,C=c>>2,D=(c&3)<<4|g>>4;let M=(g&15)<<2|E>>6,K=E&63;_||(K=64,p||(M=64)),s.push(n[C],n[D],n[M],n[K])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(dg(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):Cv(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<i.length;){const c=n[i.charAt(a++)],g=a<i.length?n[i.charAt(a)]:0;++a;const E=a<i.length?n[i.charAt(a)]:64;++a;const D=a<i.length?n[i.charAt(a)]:64;if(++a,c==null||g==null||E==null||D==null)throw new Rv;const M=c<<2|g>>4;if(s.push(M),E!==64){const K=g<<4&240|E>>2;if(s.push(K),D!==64){const Q=E<<6&192|D;s.push(Q)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Rv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kv=function(i){const e=dg(i);return pg.encodeByteArray(e,!0)},du=function(i){return kv(i).replace(/\./g,"")},mg=function(i){try{return pg.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv=()=>Pv().__FIREBASE_DEFAULTS__,Dv=()=>{if(typeof process>"u"||typeof Jp>"u")return;const i=Jp.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Ov=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&mg(i[1]);return e&&JSON.parse(e)},xu=()=>{try{return Av()||Nv()||Dv()||Ov()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},gg=i=>xu()?.emulatorHosts?.[i],xv=i=>{const e=gg(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},yg=()=>xu()?.config,_g=i=>xu()?.[`_${i}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function vg(i){return(await fetch(i,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",a=i.iat||0,c=i.sub||i.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const p={iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...i};return[du(JSON.stringify(n)),du(JSON.stringify(p)),""].join(".")}const la={};function Mv(){const i={prod:[],emulator:[]};for(const e of Object.keys(la))la[e]?i.emulator.push(e):i.prod.push(e);return i}function Uv(i){let e=document.getElementById(i),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),n=!0),{created:n,element:e}}let Yp=!1;function Eg(i,e){if(typeof window>"u"||typeof document>"u"||!so(window.location.host)||la[i]===e||la[i]||Yp)return;la[i]=e;function n(M){return`__firebase__banner__${M}`}const s="__firebase__banner",c=Mv().prod.length>0;function p(){const M=document.getElementById(s);M&&M.remove()}function g(M){M.style.display="flex",M.style.background="#7faaf0",M.style.position="fixed",M.style.bottom="5px",M.style.left="5px",M.style.padding=".5em",M.style.borderRadius="5px",M.style.alignItems="center"}function _(M,K){M.setAttribute("width","24"),M.setAttribute("id",K),M.setAttribute("height","24"),M.setAttribute("viewBox","0 0 24 24"),M.setAttribute("fill","none"),M.style.marginLeft="-6px"}function E(){const M=document.createElement("span");return M.style.cursor="pointer",M.style.marginLeft="16px",M.style.fontSize="24px",M.innerHTML=" &times;",M.onclick=()=>{Yp=!0,p()},M}function C(M,K){M.setAttribute("id",K),M.innerText="Learn more",M.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",M.setAttribute("target","__blank"),M.style.paddingLeft="5px",M.style.textDecoration="underline"}function D(){const M=Uv(s),K=n("text"),Q=document.getElementById(K)||document.createElement("span"),Y=n("learnmore"),X=document.getElementById(Y)||document.createElement("a"),ye=n("preprendIcon"),pe=document.getElementById(ye)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(M.created){const me=M.element;g(me),C(X,Y);const ke=E();_(pe,ye),me.append(pe,Q,X,ke),document.body.appendChild(me)}c?(Q.innerText="Preview backend disconnected.",pe.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(pe.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,Q.innerText="Preview backend running in this workspace."),Q.setAttribute("id",K)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",D):D()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Mt())}function bv(){const i=xu()?.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function zv(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Bv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $v(){const i=Mt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Hv(){return!bv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Wv(){try{return typeof indexedDB=="object"}catch{return!1}}function qv(){return new Promise((i,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(s),i(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{e(a.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv="FirebaseError";class Rr extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Gv,Object.setPrototypeOf(this,Rr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ta.prototype.create)}}class Ta{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},a=`${this.service}/${e}`,c=this.errors[e],p=c?Kv(c,s):"Error",g=`${this.serviceName}: ${p} (${a}).`;return new Rr(a,g,s)}}function Kv(i,e){return i.replace(Qv,(n,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const Qv=/\{\$([^}]+)}/g;function Xv(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Hi(i,e){if(i===e)return!0;const n=Object.keys(i),s=Object.keys(e);for(const a of n){if(!s.includes(a))return!1;const c=i[a],p=e[a];if(Zp(c)&&Zp(p)){if(!Hi(c,p))return!1}else if(c!==p)return!1}for(const a of s)if(!n.includes(a))return!1;return!0}function Zp(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(i){const e=[];for(const[n,s]of Object.entries(i))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Jv(i,e){const n=new Yv(i,e);return n.subscribe.bind(n)}class Yv{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let a;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Zv(e,["next","error","complete"])?a=e:a={next:e,error:n,complete:s},a.next===void 0&&(a.next=wh),a.error===void 0&&(a.error=wh),a.complete===void 0&&(a.complete=wh);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Zv(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function wh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(i){return i&&i._delegate?i._delegate:i}class Wi{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Vv;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nE(e))try{this.getOrInitializeService({instanceIdentifier:bi})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:a});s.resolve(c)}catch{}}}}clearInstance(e=bi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=bi){return this.instances.has(e)}getOptions(e=bi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[c,p]of this.instancesDeferred.entries()){const g=this.normalizeInstanceIdentifier(c);s===g&&p.resolve(a)}return a}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),a=this.onInitCallbacks.get(s)??new Set;a.add(e),this.onInitCallbacks.set(s,a);const c=this.instances.get(s);return c&&e(c,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const a of s)try{a(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:tE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=bi){return this.component?this.component.multipleInstances?e:bi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tE(i){return i===bi?void 0:i}function nE(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new eE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Te||(Te={}));const iE={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},sE=Te.INFO,oE={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},aE=(i,e,...n)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),a=oE[e];if(a)console[a](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ef{constructor(e){this.name=e,this._logLevel=sE,this._logHandler=aE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?iE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const lE=(i,e)=>e.some(n=>i instanceof n);let em,tm;function uE(){return em||(em=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cE(){return tm||(tm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wg=new WeakMap,Oh=new WeakMap,Tg=new WeakMap,Th=new WeakMap,tf=new WeakMap;function hE(i){const e=new Promise((n,s)=>{const a=()=>{i.removeEventListener("success",c),i.removeEventListener("error",p)},c=()=>{n(ii(i.result)),a()},p=()=>{s(i.error),a()};i.addEventListener("success",c),i.addEventListener("error",p)});return e.then(n=>{n instanceof IDBCursor&&wg.set(n,i)}).catch(()=>{}),tf.set(e,i),e}function fE(i){if(Oh.has(i))return;const e=new Promise((n,s)=>{const a=()=>{i.removeEventListener("complete",c),i.removeEventListener("error",p),i.removeEventListener("abort",p)},c=()=>{n(),a()},p=()=>{s(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",c),i.addEventListener("error",p),i.addEventListener("abort",p)});Oh.set(i,e)}let xh={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return Oh.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Tg.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ii(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function dE(i){xh=i(xh)}function pE(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=i.call(Ih(this),e,...n);return Tg.set(s,e.sort?e.sort():[e]),ii(s)}:cE().includes(i)?function(...e){return i.apply(Ih(this),e),ii(wg.get(this))}:function(...e){return ii(i.apply(Ih(this),e))}}function mE(i){return typeof i=="function"?pE(i):(i instanceof IDBTransaction&&fE(i),lE(i,uE())?new Proxy(i,xh):i)}function ii(i){if(i instanceof IDBRequest)return hE(i);if(Th.has(i))return Th.get(i);const e=mE(i);return e!==i&&(Th.set(i,e),tf.set(e,i)),e}const Ih=i=>tf.get(i);function gE(i,e,{blocked:n,upgrade:s,blocking:a,terminated:c}={}){const p=indexedDB.open(i,e),g=ii(p);return s&&p.addEventListener("upgradeneeded",_=>{s(ii(p.result),_.oldVersion,_.newVersion,ii(p.transaction),_)}),n&&p.addEventListener("blocked",_=>n(_.oldVersion,_.newVersion,_)),g.then(_=>{c&&_.addEventListener("close",()=>c()),a&&_.addEventListener("versionchange",E=>a(E.oldVersion,E.newVersion,E))}).catch(()=>{}),g}const yE=["get","getKey","getAll","getAllKeys","count"],_E=["put","add","delete","clear"],Sh=new Map;function nm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Sh.get(e))return Sh.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,a=_E.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(a||yE.includes(n)))return;const c=async function(p,...g){const _=this.transaction(p,a?"readwrite":"readonly");let E=_.store;return s&&(E=E.index(g.shift())),(await Promise.all([E[n](...g),a&&_.done]))[0]};return Sh.set(e,c),c}dE(i=>({...i,get:(e,n,s)=>nm(e,n)||i.get(e,n,s),has:(e,n)=>!!nm(e,n)||i.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(EE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function EE(i){return i.getComponent()?.type==="VERSION"}const Vh="@firebase/app",rm="0.14.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=new ef("@firebase/app"),wE="@firebase/app-compat",TE="@firebase/analytics-compat",IE="@firebase/analytics",SE="@firebase/app-check-compat",AE="@firebase/app-check",CE="@firebase/auth",RE="@firebase/auth-compat",kE="@firebase/database",PE="@firebase/data-connect",NE="@firebase/database-compat",DE="@firebase/functions",OE="@firebase/functions-compat",xE="@firebase/installations",VE="@firebase/installations-compat",LE="@firebase/messaging",ME="@firebase/messaging-compat",UE="@firebase/performance",FE="@firebase/performance-compat",bE="@firebase/remote-config",jE="@firebase/remote-config-compat",zE="@firebase/storage",BE="@firebase/storage-compat",$E="@firebase/firestore",HE="@firebase/ai",WE="@firebase/firestore-compat",qE="firebase",GE="12.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh="[DEFAULT]",KE={[Vh]:"fire-core",[wE]:"fire-core-compat",[IE]:"fire-analytics",[TE]:"fire-analytics-compat",[AE]:"fire-app-check",[SE]:"fire-app-check-compat",[CE]:"fire-auth",[RE]:"fire-auth-compat",[kE]:"fire-rtdb",[PE]:"fire-data-connect",[NE]:"fire-rtdb-compat",[DE]:"fire-fn",[OE]:"fire-fn-compat",[xE]:"fire-iid",[VE]:"fire-iid-compat",[LE]:"fire-fcm",[ME]:"fire-fcm-compat",[UE]:"fire-perf",[FE]:"fire-perf-compat",[bE]:"fire-rc",[jE]:"fire-rc-compat",[zE]:"fire-gcs",[BE]:"fire-gcs-compat",[$E]:"fire-fst",[WE]:"fire-fst-compat",[HE]:"fire-vertex","fire-js":"fire-js",[qE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu=new Map,QE=new Map,Mh=new Map;function im(i,e){try{i.container.addComponent(e)}catch(n){Ir.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function Zs(i){const e=i.name;if(Mh.has(e))return Ir.debug(`There were multiple attempts to register component ${e}.`),!1;Mh.set(e,i);for(const n of pu.values())im(n,i);for(const n of QE.values())im(n,i);return!0}function nf(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function mn(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},si=new Ta("app","Firebase",XE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Wi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw si.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo=GE;function Ig(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const s={name:Lh,automaticDataCollectionEnabled:!0,...e},a=s.name;if(typeof a!="string"||!a)throw si.create("bad-app-name",{appName:String(a)});if(n||(n=yg()),!n)throw si.create("no-options");const c=pu.get(a);if(c){if(Hi(n,c.options)&&Hi(s,c.config))return c;throw si.create("duplicate-app",{appName:a})}const p=new rE(a);for(const _ of Mh.values())p.addComponent(_);const g=new JE(n,s,p);return pu.set(a,g),g}function Sg(i=Lh){const e=pu.get(i);if(!e&&i===Lh&&yg())return Ig();if(!e)throw si.create("no-app",{appName:i});return e}function oi(i,e,n){let s=KE[i]??i;n&&(s+=`-${n}`);const a=s.match(/\s|\//),c=e.match(/\s|\//);if(a||c){const p=[`Unable to register library "${s}" with version "${e}":`];a&&p.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&c&&p.push("and"),c&&p.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ir.warn(p.join(" "));return}Zs(new Wi(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE="firebase-heartbeat-database",ZE=1,ma="firebase-heartbeat-store";let Ah=null;function Ag(){return Ah||(Ah=gE(YE,ZE,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(ma)}catch(n){console.warn(n)}}}}).catch(i=>{throw si.create("idb-open",{originalErrorMessage:i.message})})),Ah}async function ew(i){try{const n=(await Ag()).transaction(ma),s=await n.objectStore(ma).get(Cg(i));return await n.done,s}catch(e){if(e instanceof Rr)Ir.warn(e.message);else{const n=si.create("idb-get",{originalErrorMessage:e?.message});Ir.warn(n.message)}}}async function sm(i,e){try{const s=(await Ag()).transaction(ma,"readwrite");await s.objectStore(ma).put(e,Cg(i)),await s.done}catch(n){if(n instanceof Rr)Ir.warn(n.message);else{const s=si.create("idb-set",{originalErrorMessage:n?.message});Ir.warn(s.message)}}}function Cg(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw=1024,nw=30;class rw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sw(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=om();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>nw){const a=ow(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Ir.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=om(),{heartbeatsToSend:n,unsentEntries:s}=iw(this._heartbeatsCache.heartbeats),a=du(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(e){return Ir.warn(e),""}}}function om(){return new Date().toISOString().substring(0,10)}function iw(i,e=tw){const n=[];let s=i.slice();for(const a of i){const c=n.find(p=>p.agent===a.agent);if(c){if(c.dates.push(a.date),am(n)>e){c.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),am(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class sw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wv()?qv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ew(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return sm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return sm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function am(i){return du(JSON.stringify({version:2,heartbeats:i})).length}function ow(i){if(i.length===0)return-1;let e=0,n=i[0].date;for(let s=1;s<i.length;s++)i[s].date<n&&(n=i[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(i){Zs(new Wi("platform-logger",e=>new vE(e),"PRIVATE")),Zs(new Wi("heartbeat",e=>new rw(e),"PRIVATE")),oi(Vh,rm,i),oi(Vh,rm,"esm2020"),oi("fire-js","")}aw("");var lw="firebase",uw="12.2.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */oi(lw,uw,"app");var lm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rf;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,T){function S(){}S.prototype=T.prototype,P.D=T.prototype,P.prototype=new S,P.prototype.constructor=P,P.C=function(k,N,x){for(var I=Array(arguments.length-2),Je=2;Je<arguments.length;Je++)I[Je-2]=arguments[Je];return T.prototype[N].apply(k,I)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(P,T,S){S||(S=0);var k=Array(16);if(typeof T=="string")for(var N=0;16>N;++N)k[N]=T.charCodeAt(S++)|T.charCodeAt(S++)<<8|T.charCodeAt(S++)<<16|T.charCodeAt(S++)<<24;else for(N=0;16>N;++N)k[N]=T[S++]|T[S++]<<8|T[S++]<<16|T[S++]<<24;T=P.g[0],S=P.g[1],N=P.g[2];var x=P.g[3],I=T+(x^S&(N^x))+k[0]+3614090360&4294967295;T=S+(I<<7&4294967295|I>>>25),I=x+(N^T&(S^N))+k[1]+3905402710&4294967295,x=T+(I<<12&4294967295|I>>>20),I=N+(S^x&(T^S))+k[2]+606105819&4294967295,N=x+(I<<17&4294967295|I>>>15),I=S+(T^N&(x^T))+k[3]+3250441966&4294967295,S=N+(I<<22&4294967295|I>>>10),I=T+(x^S&(N^x))+k[4]+4118548399&4294967295,T=S+(I<<7&4294967295|I>>>25),I=x+(N^T&(S^N))+k[5]+1200080426&4294967295,x=T+(I<<12&4294967295|I>>>20),I=N+(S^x&(T^S))+k[6]+2821735955&4294967295,N=x+(I<<17&4294967295|I>>>15),I=S+(T^N&(x^T))+k[7]+4249261313&4294967295,S=N+(I<<22&4294967295|I>>>10),I=T+(x^S&(N^x))+k[8]+1770035416&4294967295,T=S+(I<<7&4294967295|I>>>25),I=x+(N^T&(S^N))+k[9]+2336552879&4294967295,x=T+(I<<12&4294967295|I>>>20),I=N+(S^x&(T^S))+k[10]+4294925233&4294967295,N=x+(I<<17&4294967295|I>>>15),I=S+(T^N&(x^T))+k[11]+2304563134&4294967295,S=N+(I<<22&4294967295|I>>>10),I=T+(x^S&(N^x))+k[12]+1804603682&4294967295,T=S+(I<<7&4294967295|I>>>25),I=x+(N^T&(S^N))+k[13]+4254626195&4294967295,x=T+(I<<12&4294967295|I>>>20),I=N+(S^x&(T^S))+k[14]+2792965006&4294967295,N=x+(I<<17&4294967295|I>>>15),I=S+(T^N&(x^T))+k[15]+1236535329&4294967295,S=N+(I<<22&4294967295|I>>>10),I=T+(N^x&(S^N))+k[1]+4129170786&4294967295,T=S+(I<<5&4294967295|I>>>27),I=x+(S^N&(T^S))+k[6]+3225465664&4294967295,x=T+(I<<9&4294967295|I>>>23),I=N+(T^S&(x^T))+k[11]+643717713&4294967295,N=x+(I<<14&4294967295|I>>>18),I=S+(x^T&(N^x))+k[0]+3921069994&4294967295,S=N+(I<<20&4294967295|I>>>12),I=T+(N^x&(S^N))+k[5]+3593408605&4294967295,T=S+(I<<5&4294967295|I>>>27),I=x+(S^N&(T^S))+k[10]+38016083&4294967295,x=T+(I<<9&4294967295|I>>>23),I=N+(T^S&(x^T))+k[15]+3634488961&4294967295,N=x+(I<<14&4294967295|I>>>18),I=S+(x^T&(N^x))+k[4]+3889429448&4294967295,S=N+(I<<20&4294967295|I>>>12),I=T+(N^x&(S^N))+k[9]+568446438&4294967295,T=S+(I<<5&4294967295|I>>>27),I=x+(S^N&(T^S))+k[14]+3275163606&4294967295,x=T+(I<<9&4294967295|I>>>23),I=N+(T^S&(x^T))+k[3]+4107603335&4294967295,N=x+(I<<14&4294967295|I>>>18),I=S+(x^T&(N^x))+k[8]+1163531501&4294967295,S=N+(I<<20&4294967295|I>>>12),I=T+(N^x&(S^N))+k[13]+2850285829&4294967295,T=S+(I<<5&4294967295|I>>>27),I=x+(S^N&(T^S))+k[2]+4243563512&4294967295,x=T+(I<<9&4294967295|I>>>23),I=N+(T^S&(x^T))+k[7]+1735328473&4294967295,N=x+(I<<14&4294967295|I>>>18),I=S+(x^T&(N^x))+k[12]+2368359562&4294967295,S=N+(I<<20&4294967295|I>>>12),I=T+(S^N^x)+k[5]+4294588738&4294967295,T=S+(I<<4&4294967295|I>>>28),I=x+(T^S^N)+k[8]+2272392833&4294967295,x=T+(I<<11&4294967295|I>>>21),I=N+(x^T^S)+k[11]+1839030562&4294967295,N=x+(I<<16&4294967295|I>>>16),I=S+(N^x^T)+k[14]+4259657740&4294967295,S=N+(I<<23&4294967295|I>>>9),I=T+(S^N^x)+k[1]+2763975236&4294967295,T=S+(I<<4&4294967295|I>>>28),I=x+(T^S^N)+k[4]+1272893353&4294967295,x=T+(I<<11&4294967295|I>>>21),I=N+(x^T^S)+k[7]+4139469664&4294967295,N=x+(I<<16&4294967295|I>>>16),I=S+(N^x^T)+k[10]+3200236656&4294967295,S=N+(I<<23&4294967295|I>>>9),I=T+(S^N^x)+k[13]+681279174&4294967295,T=S+(I<<4&4294967295|I>>>28),I=x+(T^S^N)+k[0]+3936430074&4294967295,x=T+(I<<11&4294967295|I>>>21),I=N+(x^T^S)+k[3]+3572445317&4294967295,N=x+(I<<16&4294967295|I>>>16),I=S+(N^x^T)+k[6]+76029189&4294967295,S=N+(I<<23&4294967295|I>>>9),I=T+(S^N^x)+k[9]+3654602809&4294967295,T=S+(I<<4&4294967295|I>>>28),I=x+(T^S^N)+k[12]+3873151461&4294967295,x=T+(I<<11&4294967295|I>>>21),I=N+(x^T^S)+k[15]+530742520&4294967295,N=x+(I<<16&4294967295|I>>>16),I=S+(N^x^T)+k[2]+3299628645&4294967295,S=N+(I<<23&4294967295|I>>>9),I=T+(N^(S|~x))+k[0]+4096336452&4294967295,T=S+(I<<6&4294967295|I>>>26),I=x+(S^(T|~N))+k[7]+1126891415&4294967295,x=T+(I<<10&4294967295|I>>>22),I=N+(T^(x|~S))+k[14]+2878612391&4294967295,N=x+(I<<15&4294967295|I>>>17),I=S+(x^(N|~T))+k[5]+4237533241&4294967295,S=N+(I<<21&4294967295|I>>>11),I=T+(N^(S|~x))+k[12]+1700485571&4294967295,T=S+(I<<6&4294967295|I>>>26),I=x+(S^(T|~N))+k[3]+2399980690&4294967295,x=T+(I<<10&4294967295|I>>>22),I=N+(T^(x|~S))+k[10]+4293915773&4294967295,N=x+(I<<15&4294967295|I>>>17),I=S+(x^(N|~T))+k[1]+2240044497&4294967295,S=N+(I<<21&4294967295|I>>>11),I=T+(N^(S|~x))+k[8]+1873313359&4294967295,T=S+(I<<6&4294967295|I>>>26),I=x+(S^(T|~N))+k[15]+4264355552&4294967295,x=T+(I<<10&4294967295|I>>>22),I=N+(T^(x|~S))+k[6]+2734768916&4294967295,N=x+(I<<15&4294967295|I>>>17),I=S+(x^(N|~T))+k[13]+1309151649&4294967295,S=N+(I<<21&4294967295|I>>>11),I=T+(N^(S|~x))+k[4]+4149444226&4294967295,T=S+(I<<6&4294967295|I>>>26),I=x+(S^(T|~N))+k[11]+3174756917&4294967295,x=T+(I<<10&4294967295|I>>>22),I=N+(T^(x|~S))+k[2]+718787259&4294967295,N=x+(I<<15&4294967295|I>>>17),I=S+(x^(N|~T))+k[9]+3951481745&4294967295,P.g[0]=P.g[0]+T&4294967295,P.g[1]=P.g[1]+(N+(I<<21&4294967295|I>>>11))&4294967295,P.g[2]=P.g[2]+N&4294967295,P.g[3]=P.g[3]+x&4294967295}s.prototype.u=function(P,T){T===void 0&&(T=P.length);for(var S=T-this.blockSize,k=this.B,N=this.h,x=0;x<T;){if(N==0)for(;x<=S;)a(this,P,x),x+=this.blockSize;if(typeof P=="string"){for(;x<T;)if(k[N++]=P.charCodeAt(x++),N==this.blockSize){a(this,k),N=0;break}}else for(;x<T;)if(k[N++]=P[x++],N==this.blockSize){a(this,k),N=0;break}}this.h=N,this.o+=T},s.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var T=1;T<P.length-8;++T)P[T]=0;var S=8*this.o;for(T=P.length-8;T<P.length;++T)P[T]=S&255,S/=256;for(this.u(P),P=Array(16),T=S=0;4>T;++T)for(var k=0;32>k;k+=8)P[S++]=this.g[T]>>>k&255;return P};function c(P,T){var S=g;return Object.prototype.hasOwnProperty.call(S,P)?S[P]:S[P]=T(P)}function p(P,T){this.h=T;for(var S=[],k=!0,N=P.length-1;0<=N;N--){var x=P[N]|0;k&&x==T||(S[N]=x,k=!1)}this.g=S}var g={};function _(P){return-128<=P&&128>P?c(P,function(T){return new p([T|0],0>T?-1:0)}):new p([P|0],0>P?-1:0)}function E(P){if(isNaN(P)||!isFinite(P))return D;if(0>P)return X(E(-P));for(var T=[],S=1,k=0;P>=S;k++)T[k]=P/S|0,S*=4294967296;return new p(T,0)}function C(P,T){if(P.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(P.charAt(0)=="-")return X(C(P.substring(1),T));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=E(Math.pow(T,8)),k=D,N=0;N<P.length;N+=8){var x=Math.min(8,P.length-N),I=parseInt(P.substring(N,N+x),T);8>x?(x=E(Math.pow(T,x)),k=k.j(x).add(E(I))):(k=k.j(S),k=k.add(E(I)))}return k}var D=_(0),M=_(1),K=_(16777216);i=p.prototype,i.m=function(){if(Y(this))return-X(this).m();for(var P=0,T=1,S=0;S<this.g.length;S++){var k=this.i(S);P+=(0<=k?k:4294967296+k)*T,T*=4294967296}return P},i.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(Q(this))return"0";if(Y(this))return"-"+X(this).toString(P);for(var T=E(Math.pow(P,6)),S=this,k="";;){var N=ke(S,T).g;S=ye(S,N.j(T));var x=((0<S.g.length?S.g[0]:S.h)>>>0).toString(P);if(S=N,Q(S))return x+k;for(;6>x.length;)x="0"+x;k=x+k}},i.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function Q(P){if(P.h!=0)return!1;for(var T=0;T<P.g.length;T++)if(P.g[T]!=0)return!1;return!0}function Y(P){return P.h==-1}i.l=function(P){return P=ye(this,P),Y(P)?-1:Q(P)?0:1};function X(P){for(var T=P.g.length,S=[],k=0;k<T;k++)S[k]=~P.g[k];return new p(S,~P.h).add(M)}i.abs=function(){return Y(this)?X(this):this},i.add=function(P){for(var T=Math.max(this.g.length,P.g.length),S=[],k=0,N=0;N<=T;N++){var x=k+(this.i(N)&65535)+(P.i(N)&65535),I=(x>>>16)+(this.i(N)>>>16)+(P.i(N)>>>16);k=I>>>16,x&=65535,I&=65535,S[N]=I<<16|x}return new p(S,S[S.length-1]&-2147483648?-1:0)};function ye(P,T){return P.add(X(T))}i.j=function(P){if(Q(this)||Q(P))return D;if(Y(this))return Y(P)?X(this).j(X(P)):X(X(this).j(P));if(Y(P))return X(this.j(X(P)));if(0>this.l(K)&&0>P.l(K))return E(this.m()*P.m());for(var T=this.g.length+P.g.length,S=[],k=0;k<2*T;k++)S[k]=0;for(k=0;k<this.g.length;k++)for(var N=0;N<P.g.length;N++){var x=this.i(k)>>>16,I=this.i(k)&65535,Je=P.i(N)>>>16,Ct=P.i(N)&65535;S[2*k+2*N]+=I*Ct,pe(S,2*k+2*N),S[2*k+2*N+1]+=x*Ct,pe(S,2*k+2*N+1),S[2*k+2*N+1]+=I*Je,pe(S,2*k+2*N+1),S[2*k+2*N+2]+=x*Je,pe(S,2*k+2*N+2)}for(k=0;k<T;k++)S[k]=S[2*k+1]<<16|S[2*k];for(k=T;k<2*T;k++)S[k]=0;return new p(S,0)};function pe(P,T){for(;(P[T]&65535)!=P[T];)P[T+1]+=P[T]>>>16,P[T]&=65535,T++}function me(P,T){this.g=P,this.h=T}function ke(P,T){if(Q(T))throw Error("division by zero");if(Q(P))return new me(D,D);if(Y(P))return T=ke(X(P),T),new me(X(T.g),X(T.h));if(Y(T))return T=ke(P,X(T)),new me(X(T.g),T.h);if(30<P.g.length){if(Y(P)||Y(T))throw Error("slowDivide_ only works with positive integers.");for(var S=M,k=T;0>=k.l(P);)S=tt(S),k=tt(k);var N=xe(S,1),x=xe(k,1);for(k=xe(k,2),S=xe(S,2);!Q(k);){var I=x.add(k);0>=I.l(P)&&(N=N.add(S),x=I),k=xe(k,1),S=xe(S,1)}return T=ye(P,N.j(T)),new me(N,T)}for(N=D;0<=P.l(T);){for(S=Math.max(1,Math.floor(P.m()/T.m())),k=Math.ceil(Math.log(S)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),x=E(S),I=x.j(T);Y(I)||0<I.l(P);)S-=k,x=E(S),I=x.j(T);Q(x)&&(x=M),N=N.add(x),P=ye(P,I)}return new me(N,P)}i.A=function(P){return ke(this,P).h},i.and=function(P){for(var T=Math.max(this.g.length,P.g.length),S=[],k=0;k<T;k++)S[k]=this.i(k)&P.i(k);return new p(S,this.h&P.h)},i.or=function(P){for(var T=Math.max(this.g.length,P.g.length),S=[],k=0;k<T;k++)S[k]=this.i(k)|P.i(k);return new p(S,this.h|P.h)},i.xor=function(P){for(var T=Math.max(this.g.length,P.g.length),S=[],k=0;k<T;k++)S[k]=this.i(k)^P.i(k);return new p(S,this.h^P.h)};function tt(P){for(var T=P.g.length+1,S=[],k=0;k<T;k++)S[k]=P.i(k)<<1|P.i(k-1)>>>31;return new p(S,P.h)}function xe(P,T){var S=T>>5;T%=32;for(var k=P.g.length-S,N=[],x=0;x<k;x++)N[x]=0<T?P.i(x+S)>>>T|P.i(x+S+1)<<32-T:P.i(x+S);return new p(N,P.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,p.prototype.add=p.prototype.add,p.prototype.multiply=p.prototype.j,p.prototype.modulo=p.prototype.A,p.prototype.compare=p.prototype.l,p.prototype.toNumber=p.prototype.m,p.prototype.toString=p.prototype.toString,p.prototype.getBits=p.prototype.i,p.fromNumber=E,p.fromString=C,rf=p}).apply(typeof lm<"u"?lm:typeof self<"u"?self:typeof window<"u"?window:{});var Jl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rg,aa,kg,iu,Uh,Pg,Ng,Dg;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,m){return l==Array.prototype||l==Object.prototype||(l[f]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Jl=="object"&&Jl];for(var f=0;f<l.length;++f){var m=l[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var s=n(this);function a(l,f){if(f)e:{var m=s;l=l.split(".");for(var v=0;v<l.length-1;v++){var V=l[v];if(!(V in m))break e;m=m[V]}l=l[l.length-1],v=m[l],f=f(v),f!=v&&f!=null&&e(m,l,{configurable:!0,writable:!0,value:f})}}function c(l,f){l instanceof String&&(l+="");var m=0,v=!1,V={next:function(){if(!v&&m<l.length){var b=m++;return{value:f(b,l[b]),done:!1}}return v=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}a("Array.prototype.values",function(l){return l||function(){return c(this,function(f,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var p=p||{},g=this||self;function _(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function E(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function C(l,f,m){return l.call.apply(l.bind,arguments)}function D(l,f,m){if(!l)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,v),l.apply(f,V)}}return function(){return l.apply(f,arguments)}}function M(l,f,m){return M=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?C:D,M.apply(null,arguments)}function K(l,f){var m=Array.prototype.slice.call(arguments,1);return function(){var v=m.slice();return v.push.apply(v,arguments),l.apply(this,v)}}function Q(l,f){function m(){}m.prototype=f.prototype,l.aa=f.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(v,V,b){for(var G=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)G[Ve-2]=arguments[Ve];return f.prototype[V].apply(v,G)}}function Y(l){const f=l.length;if(0<f){const m=Array(f);for(let v=0;v<f;v++)m[v]=l[v];return m}return[]}function X(l,f){for(let m=1;m<arguments.length;m++){const v=arguments[m];if(_(v)){const V=l.length||0,b=v.length||0;l.length=V+b;for(let G=0;G<b;G++)l[V+G]=v[G]}else l.push(v)}}class ye{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function pe(l){return/^[\s\xa0]*$/.test(l)}function me(){var l=g.navigator;return l&&(l=l.userAgent)?l:""}function ke(l){return ke[" "](l),l}ke[" "]=function(){};var tt=me().indexOf("Gecko")!=-1&&!(me().toLowerCase().indexOf("webkit")!=-1&&me().indexOf("Edge")==-1)&&!(me().indexOf("Trident")!=-1||me().indexOf("MSIE")!=-1)&&me().indexOf("Edge")==-1;function xe(l,f,m){for(const v in l)f.call(m,l[v],v,l)}function P(l,f){for(const m in l)f.call(void 0,l[m],m,l)}function T(l){const f={};for(const m in l)f[m]=l[m];return f}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(l,f){let m,v;for(let V=1;V<arguments.length;V++){v=arguments[V];for(m in v)l[m]=v[m];for(let b=0;b<S.length;b++)m=S[b],Object.prototype.hasOwnProperty.call(v,m)&&(l[m]=v[m])}}function N(l){var f=1;l=l.split(":");const m=[];for(;0<f&&l.length;)m.push(l.shift()),f--;return l.length&&m.push(l.join(":")),m}function x(l){g.setTimeout(()=>{throw l},0)}function I(){var l=le;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class Je{constructor(){this.h=this.g=null}add(f,m){const v=Ct.get();v.set(f,m),this.h?this.h.next=v:this.g=v,this.h=v}}var Ct=new ye(()=>new Rt,l=>l.reset());class Rt{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let Le,J=!1,le=new Je,ee=()=>{const l=g.Promise.resolve(void 0);Le=()=>{l.then(O)}};var O=()=>{for(var l;l=I();){try{l.h.call(l.g)}catch(m){x(m)}var f=Ct;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}J=!1};function j(){this.s=this.s,this.C=this.C}j.prototype.s=!1,j.prototype.ma=function(){this.s||(this.s=!0,this.N())},j.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ae(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}ae.prototype.h=function(){this.defaultPrevented=!0};var _e=(function(){if(!g.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};g.addEventListener("test",m,f),g.removeEventListener("test",m,f)}catch{}return l})();function Ee(l,f){if(ae.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,v=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(tt){e:{try{ke(f.nodeName);var V=!0;break e}catch{}V=!1}V||(f=null)}}else m=="mouseover"?f=l.fromElement:m=="mouseout"&&(f=l.toElement);this.relatedTarget=f,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Se[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ee.aa.h.call(this)}}Q(Ee,ae);var Se={2:"touch",3:"pen",4:"mouse"};Ee.prototype.h=function(){Ee.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Ne="closure_listenable_"+(1e6*Math.random()|0),De=0;function Ue(l,f,m,v,V){this.listener=l,this.proxy=null,this.src=f,this.type=m,this.capture=!!v,this.ha=V,this.key=++De,this.da=this.fa=!1}function ht(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Zn(l){this.src=l,this.g={},this.h=0}Zn.prototype.add=function(l,f,m,v,V){var b=l.toString();l=this.g[b],l||(l=this.g[b]=[],this.h++);var G=kr(l,f,v,V);return-1<G?(f=l[G],m||(f.fa=!1)):(f=new Ue(f,this.src,b,!!v,V),f.fa=m,l.push(f)),f};function Zi(l,f){var m=f.type;if(m in l.g){var v=l.g[m],V=Array.prototype.indexOf.call(v,f,void 0),b;(b=0<=V)&&Array.prototype.splice.call(v,V,1),b&&(ht(f),l.g[m].length==0&&(delete l.g[m],l.h--))}}function kr(l,f,m,v){for(var V=0;V<l.length;++V){var b=l[V];if(!b.da&&b.listener==f&&b.capture==!!m&&b.ha==v)return V}return-1}var hi="closure_lm_"+(1e6*Math.random()|0),es={};function co(l,f,m,v,V){if(Array.isArray(f)){for(var b=0;b<f.length;b++)co(l,f[b],m,v,V);return null}return m=po(m),l&&l[Ne]?l.K(f,m,E(v)?!!v.capture:!1,V):ho(l,f,m,!1,v,V)}function ho(l,f,m,v,V,b){if(!f)throw Error("Invalid event type");var G=E(V)?!!V.capture:!!V,Ve=ns(l);if(Ve||(l[hi]=Ve=new Zn(l)),m=Ve.add(f,m,v,G,b),m.proxy)return m;if(v=La(),m.proxy=v,v.src=l,v.listener=m,l.addEventListener)_e||(V=G),V===void 0&&(V=!1),l.addEventListener(f.toString(),v,V);else if(l.attachEvent)l.attachEvent(tr(f.toString()),v);else if(l.addListener&&l.removeListener)l.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return m}function La(){function l(m){return f.call(l.src,l.listener,m)}const f=fo;return l}function ts(l,f,m,v,V){if(Array.isArray(f))for(var b=0;b<f.length;b++)ts(l,f[b],m,v,V);else v=E(v)?!!v.capture:!!v,m=po(m),l&&l[Ne]?(l=l.i,f=String(f).toString(),f in l.g&&(b=l.g[f],m=kr(b,m,v,V),-1<m&&(ht(b[m]),Array.prototype.splice.call(b,m,1),b.length==0&&(delete l.g[f],l.h--)))):l&&(l=ns(l))&&(f=l.g[f.toString()],l=-1,f&&(l=kr(f,m,v,V)),(m=-1<l?f[l]:null)&&er(m))}function er(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[Ne])Zi(f.i,l);else{var m=l.type,v=l.proxy;f.removeEventListener?f.removeEventListener(m,v,l.capture):f.detachEvent?f.detachEvent(tr(m),v):f.addListener&&f.removeListener&&f.removeListener(v),(m=ns(f))?(Zi(m,l),m.h==0&&(m.src=null,f[hi]=null)):ht(l)}}}function tr(l){return l in es?es[l]:es[l]="on"+l}function fo(l,f){if(l.da)l=!0;else{f=new Ee(f,this);var m=l.listener,v=l.ha||l.src;l.fa&&er(l),l=m.call(v,f)}return l}function ns(l){return l=l[hi],l instanceof Zn?l:null}var rs="__closure_events_fn_"+(1e9*Math.random()>>>0);function po(l){return typeof l=="function"?l:(l[rs]||(l[rs]=function(f){return l.handleEvent(f)}),l[rs])}function ot(){j.call(this),this.i=new Zn(this),this.M=this,this.F=null}Q(ot,j),ot.prototype[Ne]=!0,ot.prototype.removeEventListener=function(l,f,m,v){ts(this,l,f,m,v)};function at(l,f){var m,v=l.F;if(v)for(m=[];v;v=v.F)m.push(v);if(l=l.M,v=f.type||f,typeof f=="string")f=new ae(f,l);else if(f instanceof ae)f.target=f.target||l;else{var V=f;f=new ae(v,l),k(f,V)}if(V=!0,m)for(var b=m.length-1;0<=b;b--){var G=f.g=m[b];V=nr(G,v,!0,f)&&V}if(G=f.g=l,V=nr(G,v,!0,f)&&V,V=nr(G,v,!1,f)&&V,m)for(b=0;b<m.length;b++)G=f.g=m[b],V=nr(G,v,!1,f)&&V}ot.prototype.N=function(){if(ot.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var m=l.g[f],v=0;v<m.length;v++)ht(m[v]);delete l.g[f],l.h--}}this.F=null},ot.prototype.K=function(l,f,m,v){return this.i.add(String(l),f,!1,m,v)},ot.prototype.L=function(l,f,m,v){return this.i.add(String(l),f,!0,m,v)};function nr(l,f,m,v){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var V=!0,b=0;b<f.length;++b){var G=f[b];if(G&&!G.da&&G.capture==m){var Ve=G.listener,lt=G.ha||G.src;G.fa&&Zi(l.i,G),V=Ve.call(lt,v)!==!1&&V}}return V&&!v.defaultPrevented}function mo(l,f,m){if(typeof l=="function")m&&(l=M(l,m));else if(l&&typeof l.handleEvent=="function")l=M(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:g.setTimeout(l,f||0)}function Pr(l){l.g=mo(()=>{l.g=null,l.i&&(l.i=!1,Pr(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class fi extends j{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Pr(this)}N(){super.N(),this.g&&(g.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function di(l){j.call(this),this.h=l,this.g={}}Q(di,j);var go=[];function yo(l){xe(l.g,function(f,m){this.g.hasOwnProperty(m)&&er(f)},l),l.g={}}di.prototype.N=function(){di.aa.N.call(this),yo(this)},di.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _o=g.JSON.stringify,vo=g.JSON.parse,Eo=class{stringify(l){return g.JSON.stringify(l,void 0)}parse(l){return g.JSON.parse(l,void 0)}};function pi(){}pi.prototype.h=null;function is(l){return l.h||(l.h=l.i())}function ss(){}var sn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Un(){ae.call(this,"d")}Q(Un,ae);function os(){ae.call(this,"c")}Q(os,ae);var Fn={},wo=null;function mi(){return wo=wo||new ot}Fn.La="serverreachability";function To(l){ae.call(this,Fn.La,l)}Q(To,ae);function rr(l){const f=mi();at(f,new To(f))}Fn.STAT_EVENT="statevent";function Io(l,f){ae.call(this,Fn.STAT_EVENT,l),this.stat=f}Q(Io,ae);function Ye(l){const f=mi();at(f,new Io(f,l))}Fn.Ma="timingevent";function as(l,f){ae.call(this,Fn.Ma,l),this.size=f}Q(as,ae);function gn(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return g.setTimeout(function(){l()},f)}function gi(){this.g=!0}gi.prototype.xa=function(){this.g=!1};function yi(l,f,m,v,V,b){l.info(function(){if(l.g)if(b)for(var G="",Ve=b.split("&"),lt=0;lt<Ve.length;lt++){var Ae=Ve[lt].split("=");if(1<Ae.length){var ft=Ae[0];Ae=Ae[1];var nt=ft.split("_");G=2<=nt.length&&nt[1]=="type"?G+(ft+"="+Ae+"&"):G+(ft+"=redacted&")}}else G=null;else G=b;return"XMLHTTP REQ ("+v+") [attempt "+V+"]: "+f+`
`+m+`
`+G})}function ls(l,f,m,v,V,b,G){l.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+V+"]: "+f+`
`+m+`
`+b+" "+G})}function yn(l,f,m,v){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+Hu(l,m)+(v?" "+v:"")})}function So(l,f){l.info(function(){return"TIMEOUT: "+f})}gi.prototype.info=function(){};function Hu(l,f){if(!l.g)return f;if(!f)return null;try{var m=JSON.parse(f);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var v=m[l];if(!(2>v.length)){var V=v[1];if(Array.isArray(V)&&!(1>V.length)){var b=V[0];if(b!="noop"&&b!="stop"&&b!="close")for(var G=1;G<V.length;G++)V[G]=""}}}}return _o(m)}catch{return f}}var us={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ma={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},_n;function _i(){}Q(_i,pi),_i.prototype.g=function(){return new XMLHttpRequest},_i.prototype.i=function(){return{}},_n=new _i;function vn(l,f,m,v){this.j=l,this.i=f,this.l=m,this.R=v||1,this.U=new di(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ua}function Ua(){this.i=null,this.g="",this.h=!1}var Ao={},cs={};function hs(l,f,m){l.L=1,l.v=Vr(Yt(f)),l.m=m,l.P=!0,Co(l,null)}function Co(l,f){l.F=Date.now(),Fe(l),l.A=Yt(l.v);var m=l.A,v=l.R;Array.isArray(v)||(v=[String(v)]),Mr(m.i,"t",v),l.C=0,m=l.j.J,l.h=new Ua,l.g=tl(l.j,m?f:null,!l.m),0<l.O&&(l.M=new fi(M(l.Y,l,l.g),l.O)),f=l.U,m=l.g,v=l.ca;var V="readystatechange";Array.isArray(V)||(V&&(go[0]=V.toString()),V=go);for(var b=0;b<V.length;b++){var G=co(m,V[b],v||f.handleEvent,!1,f.h||f);if(!G)break;f.g[G.key]=G}f=l.H?T(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),rr(),yi(l.i,l.u,l.A,l.l,l.R,l.m)}vn.prototype.ca=function(l){l=l.target;const f=this.M;f&&Bt(l)==3?f.j():this.Y(l)},vn.prototype.Y=function(l){try{if(l==this.g)e:{const nt=Bt(this.g);var f=this.g.Ba();const ln=this.g.Z();if(!(3>nt)&&(nt!=3||this.g&&(this.h.h||this.g.oa()||Oo(this.g)))){this.J||nt!=4||f==7||(f==8||0>=ln?rr(3):rr(2)),vi(this);var m=this.g.Z();this.X=m;t:if(Fa(this)){var v=Oo(this.g);l="";var V=v.length,b=Bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){on(this),Nr(this);var G="";break t}this.h.i=new g.TextDecoder}for(f=0;f<V;f++)this.h.h=!0,l+=this.h.i.decode(v[f],{stream:!(b&&f==V-1)});v.length=0,this.h.g+=l,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=m==200,ls(this.i,this.u,this.A,this.l,this.R,nt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,lt=this.g;if((Ve=lt.g?lt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!pe(Ve)){var Ae=Ve;break t}}Ae=null}if(m=Ae)yn(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ro(this,m);else{this.o=!1,this.s=3,Ye(12),on(this),Nr(this);break e}}if(this.P){m=!0;let en;for(;!this.J&&this.C<G.length;)if(en=Wu(this,G),en==cs){nt==4&&(this.s=4,Ye(14),m=!1),yn(this.i,this.l,null,"[Incomplete Response]");break}else if(en==Ao){this.s=4,Ye(15),yn(this.i,this.l,G,"[Invalid Chunk]"),m=!1;break}else yn(this.i,this.l,en,null),Ro(this,en);if(Fa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),nt!=4||G.length!=0||this.h.h||(this.s=1,Ye(16),m=!1),this.o=this.o&&m,!m)yn(this.i,this.l,G,"[Invalid Chunked Response]"),on(this),Nr(this);else if(0<G.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),Vo(ft),ft.M=!0,Ye(11))}}else yn(this.i,this.l,G,null),Ro(this,G);nt==4&&on(this),this.o&&!this.J&&(nt==4?Ts(this.j,this):(this.o=!1,Fe(this)))}else ys(this.g),m==400&&0<G.indexOf("Unknown SID")?(this.s=3,Ye(12)):(this.s=0,Ye(13)),on(this),Nr(this)}}}catch{}finally{}};function Fa(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Wu(l,f){var m=l.C,v=f.indexOf(`
`,m);return v==-1?cs:(m=Number(f.substring(m,v)),isNaN(m)?Ao:(v+=1,v+m>f.length?cs:(f=f.slice(v,v+m),l.C=v+m,f)))}vn.prototype.cancel=function(){this.J=!0,on(this)};function Fe(l){l.S=Date.now()+l.I,ba(l,l.I)}function ba(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=gn(M(l.ba,l),f)}function vi(l){l.B&&(g.clearTimeout(l.B),l.B=null)}vn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(So(this.i,this.A),this.L!=2&&(rr(),Ye(17)),on(this),this.s=2,Nr(this)):ba(this,this.S-l)};function Nr(l){l.j.G==0||l.J||Ts(l.j,l)}function on(l){vi(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,yo(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Ro(l,f){try{var m=l.j;if(m.G!=0&&(m.g==l||Ut(m.h,l))){if(!l.K&&Ut(m.h,l)&&m.G==3){try{var v=m.Da.g.parse(f)}catch{v=null}if(Array.isArray(v)&&v.length==3){var V=v;if(V[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)ws(m),Sn(m);else break e;Es(m),Ye(18)}}else m.za=V[1],0<m.za-m.T&&37500>V[2]&&m.F&&m.v==0&&!m.C&&(m.C=gn(M(m.Za,m),6e3));if(1>=za(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else lr(m,11)}else if((l.K||m.g==l)&&ws(m),!pe(f))for(V=m.Da.g.parse(f),f=0;f<V.length;f++){let Ae=V[f];if(m.T=Ae[0],Ae=Ae[1],m.G==2)if(Ae[0]=="c"){m.K=Ae[1],m.ia=Ae[2];const ft=Ae[3];ft!=null&&(m.la=ft,m.j.info("VER="+m.la));const nt=Ae[4];nt!=null&&(m.Aa=nt,m.j.info("SVER="+m.Aa));const ln=Ae[5];ln!=null&&typeof ln=="number"&&0<ln&&(v=1.5*ln,m.L=v,m.j.info("backChannelRequestTimeoutMs_="+v)),v=m;const en=l.g;if(en){const Ci=en.g?en.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ci){var b=v.h;b.g||Ci.indexOf("spdy")==-1&&Ci.indexOf("quic")==-1&&Ci.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(ko(b,b.h),b.h=null))}if(v.D){const Ss=en.g?en.g.getResponseHeader("X-HTTP-Session-Id"):null;Ss&&(v.ya=Ss,Me(v.I,v.D,Ss))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),v=m;var G=l;if(v.qa=el(v,v.J?v.ia:null,v.W),G.K){Ba(v.h,G);var Ve=G,lt=v.L;lt&&(Ve.I=lt),Ve.B&&(vi(Ve),Fe(Ve)),v.g=G}else Ai(v);0<m.i.length&&Bn(m)}else Ae[0]!="stop"&&Ae[0]!="close"||lr(m,7);else m.G==3&&(Ae[0]=="stop"||Ae[0]=="close"?Ae[0]=="stop"?lr(m,7):vt(m):Ae[0]!="noop"&&m.l&&m.l.ta(Ae),m.v=0)}}rr(4)}catch{}}var ja=class{constructor(l,f){this.g=l,this.map=f}};function Ei(l){this.l=l||10,g.PerformanceNavigationTiming?(l=g.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(g.chrome&&g.chrome.loadTimes&&g.chrome.loadTimes()&&g.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Jt(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function za(l){return l.h?1:l.g?l.g.size:0}function Ut(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function ko(l,f){l.g?l.g.add(f):l.h=f}function Ba(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Ei.prototype.cancel=function(){if(this.i=$a(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function $a(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const m of l.g.values())f=f.concat(m.D);return f}return Y(l.i)}function fs(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(_(l)){for(var f=[],m=l.length,v=0;v<m;v++)f.push(l[v]);return f}f=[],m=0;for(v in l)f[m++]=l[v];return f}function ds(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(_(l)||typeof l=="string"){var f=[];l=l.length;for(var m=0;m<l;m++)f.push(m);return f}f=[],m=0;for(const v in l)f[m++]=v;return f}}}function Dr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(_(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var m=ds(l),v=fs(l),V=v.length,b=0;b<V;b++)f.call(void 0,v[b],m&&m[b],l)}var wi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qu(l,f){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var v=l[m].indexOf("="),V=null;if(0<=v){var b=l[m].substring(0,v);V=l[m].substring(v+1)}else b=l[m];f(b,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function ir(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof ir){this.h=l.h,Ti(this,l.j),this.o=l.o,this.g=l.g,Or(this,l.s),this.l=l.l;var f=l.i,m=new bn;m.i=f.i,f.g&&(m.g=new Map(f.g),m.h=f.h),xr(this,m),this.m=l.m}else l&&(f=String(l).match(wi))?(this.h=!1,Ti(this,f[1]||"",!0),this.o=Ie(f[2]||""),this.g=Ie(f[3]||"",!0),Or(this,f[4]),this.l=Ie(f[5]||"",!0),xr(this,f[6]||"",!0),this.m=Ie(f[7]||"")):(this.h=!1,this.i=new bn(null,this.h))}ir.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Lr(f,ps,!0),":");var m=this.g;return(m||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Lr(f,ps,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(Lr(m,m.charAt(0)=="/"?qa:Wa,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",Lr(m,Po)),l.join("")};function Yt(l){return new ir(l)}function Ti(l,f,m){l.j=m?Ie(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Or(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function xr(l,f,m){f instanceof bn?(l.i=f,jn(l.i,l.h)):(m||(f=Lr(f,Ga)),l.i=new bn(f,l.h))}function Me(l,f,m){l.i.set(f,m)}function Vr(l){return Me(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Ie(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Lr(l,f,m){return typeof l=="string"?(l=encodeURI(l).replace(f,Ha),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Ha(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var ps=/[#\/\?@]/g,Wa=/[#\?:]/g,qa=/[#\?]/g,Ga=/[#\?@]/g,Po=/#/g;function bn(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function _t(l){l.g||(l.g=new Map,l.h=0,l.i&&qu(l.i,function(f,m){l.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}i=bn.prototype,i.add=function(l,f){_t(this),this.i=null,l=an(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(f),this.h+=1,this};function En(l,f){_t(l),f=an(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function wn(l,f){return _t(l),f=an(l,f),l.g.has(f)}i.forEach=function(l,f){_t(this),this.g.forEach(function(m,v){m.forEach(function(V){l.call(f,V,v,this)},this)},this)},i.na=function(){_t(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),m=[];for(let v=0;v<f.length;v++){const V=l[v];for(let b=0;b<V.length;b++)m.push(f[v])}return m},i.V=function(l){_t(this);let f=[];if(typeof l=="string")wn(this,l)&&(f=f.concat(this.g.get(an(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)f=f.concat(l[m])}return f},i.set=function(l,f){return _t(this),this.i=null,l=an(this,l),wn(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Mr(l,f,m){En(l,f),0<m.length&&(l.i=null,l.g.set(an(l,f),Y(m)),l.h+=m.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var m=0;m<f.length;m++){var v=f[m];const b=encodeURIComponent(String(v)),G=this.V(v);for(v=0;v<G.length;v++){var V=b;G[v]!==""&&(V+="="+encodeURIComponent(String(G[v]))),l.push(V)}}return this.i=l.join("&")};function an(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function jn(l,f){f&&!l.j&&(_t(l),l.i=null,l.g.forEach(function(m,v){var V=v.toLowerCase();v!=V&&(En(this,v),Mr(this,V,m))},l)),l.j=f}function Gu(l,f){const m=new gi;if(g.Image){const v=new Image;v.onload=K(zt,m,"TestLoadImage: loaded",!0,f,v),v.onerror=K(zt,m,"TestLoadImage: error",!1,f,v),v.onabort=K(zt,m,"TestLoadImage: abort",!1,f,v),v.ontimeout=K(zt,m,"TestLoadImage: timeout",!1,f,v),g.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=l}else f(!1)}function Ka(l,f){const m=new gi,v=new AbortController,V=setTimeout(()=>{v.abort(),zt(m,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:v.signal}).then(b=>{clearTimeout(V),b.ok?zt(m,"TestPingServer: ok",!0,f):zt(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(V),zt(m,"TestPingServer: error",!1,f)})}function zt(l,f,m,v,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),v(m)}catch{}}function Ku(){this.g=new Eo}function Qa(l,f,m){const v=m||"";try{Dr(l,function(V,b){let G=V;E(V)&&(G=_o(V)),f.push(v+b+"="+encodeURIComponent(G))})}catch(V){throw f.push(v+"type="+encodeURIComponent("_badmap")),V}}function sr(l){this.l=l.Ub||null,this.j=l.eb||!1}Q(sr,pi),sr.prototype.g=function(){return new Ii(this.l,this.j)},sr.prototype.i=(function(l){return function(){return l}})({});function Ii(l,f){ot.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}Q(Ii,ot),i=Ii.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,In(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||g).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Tn(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,In(this)),this.g&&(this.readyState=3,In(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof g.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Xa(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Xa(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Tn(this):In(this),this.readyState==3&&Xa(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,Tn(this))},i.Qa=function(l){this.g&&(this.response=l,Tn(this))},i.ga=function(){this.g&&Tn(this)};function Tn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,In(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=f.next();return l.join(`\r
`)};function In(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ii.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function or(l){let f="";return xe(l,function(m,v){f+=v,f+=":",f+=m,f+=`\r
`}),f}function Ur(l,f,m){e:{for(v in m){var v=!1;break e}v=!0}v||(m=or(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):Me(l,f,m))}function $e(l){ot.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}Q($e,ot);var Qu=/^https?$/i,No=["POST","PUT"];i=$e.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,m,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():_n.g(),this.v=this.o?is(this.o):is(_n),this.g.onreadystatechange=M(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(b){Si(this,b);return}if(l=m||"",m=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var V in v)m.set(V,v[V]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const b of v.keys())m.set(b,v.get(b));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(m.keys()).find(b=>b.toLowerCase()=="content-type"),V=g.FormData&&l instanceof g.FormData,!(0<=Array.prototype.indexOf.call(No,f,void 0))||v||V||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,G]of m)this.g.setRequestHeader(b,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{gs(this),this.u=!0,this.g.send(l),this.u=!1}catch(b){Si(this,b)}};function Si(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,ms(l),Zt(l)}function ms(l){l.A||(l.A=!0,at(l,"complete"),at(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,at(this,"complete"),at(this,"abort"),Zt(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Zt(this,!0)),$e.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Do(this):this.bb())},i.bb=function(){Do(this)};function Do(l){if(l.h&&typeof p<"u"&&(!l.v[1]||Bt(l)!=4||l.Z()!=2)){if(l.u&&Bt(l)==4)mo(l.Ea,0,l);else if(at(l,"readystatechange"),Bt(l)==4){l.h=!1;try{const G=l.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var v;if(v=G===0){var V=String(l.D).match(wi)[1]||null;!V&&g.self&&g.self.location&&(V=g.self.location.protocol.slice(0,-1)),v=!Qu.test(V?V.toLowerCase():"")}m=v}if(m)at(l,"complete"),at(l,"success");else{l.m=6;try{var b=2<Bt(l)?l.g.statusText:""}catch{b=""}l.l=b+" ["+l.Z()+"]",ms(l)}}finally{Zt(l)}}}}function Zt(l,f){if(l.g){gs(l);const m=l.g,v=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||at(l,"ready");try{m.onreadystatechange=v}catch{}}}function gs(l){l.I&&(g.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function Bt(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<Bt(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),vo(f)}};function Oo(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function ys(l){const f={};l=(l.g&&2<=Bt(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<l.length;v++){if(pe(l[v]))continue;var m=N(l[v]);const V=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const b=f[V]||[];f[V]=b,b.push(m)}P(f,function(v){return v.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function zn(l,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||f}function xo(l){this.Aa=0,this.i=[],this.j=new gi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=zn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=zn("baseRetryDelayMs",5e3,l),this.cb=zn("retryDelaySeedMs",1e4,l),this.Wa=zn("forwardChannelMaxRetries",2,l),this.wa=zn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Ei(l&&l.concurrentRequestLimit),this.Da=new Ku,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=xo.prototype,i.la=8,i.G=1,i.connect=function(l,f,m,v){Ye(0),this.W=l,this.H=f||{},m&&v!==void 0&&(this.H.OSID=m,this.H.OAID=v),this.F=this.X,this.I=el(this,null,this.W),Bn(this)};function vt(l){if(_s(l),l.G==3){var f=l.U++,m=Yt(l.I);if(Me(m,"SID",l.K),Me(m,"RID",f),Me(m,"TYPE","terminate"),ar(l,m),f=new vn(l,l.j,f),f.L=2,f.v=Vr(Yt(m)),m=!1,g.navigator&&g.navigator.sendBeacon)try{m=g.navigator.sendBeacon(f.v.toString(),"")}catch{}!m&&g.Image&&(new Image().src=f.v,m=!0),m||(f.g=tl(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Fe(f)}Za(l)}function Sn(l){l.g&&(Vo(l),l.g.cancel(),l.g=null)}function _s(l){Sn(l),l.u&&(g.clearTimeout(l.u),l.u=null),ws(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&g.clearTimeout(l.s),l.s=null)}function Bn(l){if(!Jt(l.h)&&!l.s){l.s=!0;var f=l.Ga;Le||ee(),J||(Le(),J=!0),le.add(f,l),l.B=0}}function Xu(l,f){return za(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=gn(M(l.Ga,l,f),Ya(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const V=new vn(this,this.j,l);let b=this.o;if(this.S&&(b?(b=T(b),k(b,this.S)):b=this.S),this.m!==null||this.O||(V.H=b,b=null),this.P)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var v=this.i[m];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(f+=v,4096<f){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=Fr(this,V,f),m=Yt(this.I),Me(m,"RID",l),Me(m,"CVER",22),this.D&&Me(m,"X-HTTP-Session-Id",this.D),ar(this,m),b&&(this.O?f="headers="+encodeURIComponent(String(or(b)))+"&"+f:this.m&&Ur(m,this.m,b)),ko(this.h,V),this.Ua&&Me(m,"TYPE","init"),this.P?(Me(m,"$req",f),Me(m,"SID","null"),V.T=!0,hs(V,m,null)):hs(V,m,f),this.G=2}}else this.G==3&&(l?vs(this,l):this.i.length==0||Jt(this.h)||vs(this))};function vs(l,f){var m;f?m=f.l:m=l.U++;const v=Yt(l.I);Me(v,"SID",l.K),Me(v,"RID",m),Me(v,"AID",l.T),ar(l,v),l.m&&l.o&&Ur(v,l.m,l.o),m=new vn(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Fr(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),ko(l.h,m),hs(m,v,f)}function ar(l,f){l.H&&xe(l.H,function(m,v){Me(f,v,m)}),l.l&&Dr({},function(m,v){Me(f,v,m)})}function Fr(l,f,m){m=Math.min(l.i.length,m);var v=l.l?M(l.l.Na,l.l,l):null;e:{var V=l.i;let b=-1;for(;;){const G=["count="+m];b==-1?0<m?(b=V[0].g,G.push("ofs="+b)):b=0:G.push("ofs="+b);let Ve=!0;for(let lt=0;lt<m;lt++){let Ae=V[lt].g;const ft=V[lt].map;if(Ae-=b,0>Ae)b=Math.max(0,V[lt].g-100),Ve=!1;else try{Qa(ft,G,"req"+Ae+"_")}catch{v&&v(ft)}}if(Ve){v=G.join("&");break e}}}return l=l.i.splice(0,m),f.D=l,v}function Ai(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Le||ee(),J||(Le(),J=!0),le.add(f,l),l.v=0}}function Es(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=gn(M(l.Fa,l),Ya(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,Ja(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=gn(M(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ye(10),Sn(this),Ja(this))};function Vo(l){l.A!=null&&(g.clearTimeout(l.A),l.A=null)}function Ja(l){l.g=new vn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=Yt(l.qa);Me(f,"RID","rpc"),Me(f,"SID",l.K),Me(f,"AID",l.T),Me(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&Me(f,"TO",l.ja),Me(f,"TYPE","xmlhttp"),ar(l,f),l.m&&l.o&&Ur(f,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=Vr(Yt(f)),m.m=null,m.P=!0,Co(m,l)}i.Za=function(){this.C!=null&&(this.C=null,Sn(this),Es(this),Ye(19))};function ws(l){l.C!=null&&(g.clearTimeout(l.C),l.C=null)}function Ts(l,f){var m=null;if(l.g==f){ws(l),Vo(l),l.g=null;var v=2}else if(Ut(l.h,f))m=f.D,Ba(l.h,f),v=1;else return;if(l.G!=0){if(f.o)if(v==1){m=f.m?f.m.length:0,f=Date.now()-f.F;var V=l.B;v=mi(),at(v,new as(v,m)),Bn(l)}else Ai(l);else if(V=f.s,V==3||V==0&&0<f.X||!(v==1&&Xu(l,f)||v==2&&Es(l)))switch(m&&0<m.length&&(f=l.h,f.i=f.i.concat(m)),V){case 1:lr(l,5);break;case 4:lr(l,10);break;case 3:lr(l,6);break;default:lr(l,2)}}}function Ya(l,f){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*f}function lr(l,f){if(l.j.info("Error code "+f),f==2){var m=M(l.fb,l),v=l.Xa;const V=!v;v=new ir(v||"//www.google.com/images/cleardot.gif"),g.location&&g.location.protocol=="http"||Ti(v,"https"),Vr(v),V?Gu(v.toString(),m):Ka(v.toString(),m)}else Ye(2);l.G=0,l.l&&l.l.sa(f),Za(l),_s(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Ye(2)):(this.j.info("Failed to ping google.com"),Ye(1))};function Za(l){if(l.G=0,l.ka=[],l.l){const f=$a(l.h);(f.length!=0||l.i.length!=0)&&(X(l.ka,f),X(l.ka,l.i),l.h.i.length=0,Y(l.i),l.i.length=0),l.l.ra()}}function el(l,f,m){var v=m instanceof ir?Yt(m):new ir(m);if(v.g!="")f&&(v.g=f+"."+v.g),Or(v,v.s);else{var V=g.location;v=V.protocol,f=f?f+"."+V.hostname:V.hostname,V=+V.port;var b=new ir(null);v&&Ti(b,v),f&&(b.g=f),V&&Or(b,V),m&&(b.l=m),v=b}return m=l.D,f=l.ya,m&&f&&Me(v,m,f),Me(v,"VER",l.la),ar(l,v),v}function tl(l,f,m){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new $e(new sr({eb:m})):new $e(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Lo(){}i=Lo.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Is(){}Is.prototype.g=function(l,f){return new Ft(l,f)};function Ft(l,f){ot.call(this),this.g=new xo(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!pe(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!pe(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new $n(this)}Q(Ft,ot),Ft.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ft.prototype.close=function(){vt(this.g)},Ft.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=_o(l),l=m);f.i.push(new ja(f.Ya++,l)),f.G==3&&Bn(f)},Ft.prototype.N=function(){this.g.l=null,delete this.j,vt(this.g),delete this.g,Ft.aa.N.call(this)};function nl(l){Un.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const m in f){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}Q(nl,Un);function rl(){os.call(this),this.status=1}Q(rl,os);function $n(l){this.g=l}Q($n,Lo),$n.prototype.ua=function(){at(this.g,"a")},$n.prototype.ta=function(l){at(this.g,new nl(l))},$n.prototype.sa=function(l){at(this.g,new rl)},$n.prototype.ra=function(){at(this.g,"b")},Is.prototype.createWebChannel=Is.prototype.g,Ft.prototype.send=Ft.prototype.o,Ft.prototype.open=Ft.prototype.m,Ft.prototype.close=Ft.prototype.close,Dg=function(){return new Is},Ng=function(){return mi()},Pg=Fn,Uh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},us.NO_ERROR=0,us.TIMEOUT=8,us.HTTP_ERROR=6,iu=us,Ma.COMPLETE="complete",kg=Ma,ss.EventType=sn,sn.OPEN="a",sn.CLOSE="b",sn.ERROR="c",sn.MESSAGE="d",ot.prototype.listen=ot.prototype.K,aa=ss,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,Rg=$e}).apply(typeof Jl<"u"?Jl:typeof self<"u"?self:typeof window<"u"?window:{});const um="@firebase/firestore",cm="4.9.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}xt.UNAUTHENTICATED=new xt(null),xt.GOOGLE_CREDENTIALS=new xt("google-credentials-uid"),xt.FIRST_PARTY=new xt("first-party-uid"),xt.MOCK_USER=new xt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ao="12.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi=new ef("@firebase/firestore");function Ws(){return qi.logLevel}function ie(i,...e){if(qi.logLevel<=Te.DEBUG){const n=e.map(sf);qi.debug(`Firestore (${ao}): ${i}`,...n)}}function Gi(i,...e){if(qi.logLevel<=Te.ERROR){const n=e.map(sf);qi.error(`Firestore (${ao}): ${i}`,...n)}}function Vu(i,...e){if(qi.logLevel<=Te.WARN){const n=e.map(sf);qi.warn(`Firestore (${ao}): ${i}`,...n)}}function sf(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(i,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,Og(i,s,n)}function Og(i,e,n){let s=`FIRESTORE (${ao}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw Gi(s),new Error(s)}function Xe(i,e,n,s){let a="Unexpected state";typeof n=="string"?a=n:s=n,i||Og(e,a,s)}function je(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class he extends Rr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(xt.UNAUTHENTICATED)))}shutdown(){}}class hw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class fw{constructor(e){this.t=e,this.currentUser=xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Xe(this.o===void 0,42304);let s=this.i;const a=_=>this.i!==s?(s=this.i,n(_)):Promise.resolve();let c=new Bi;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Bi,e.enqueueRetryable((()=>a(this.currentUser)))};const p=()=>{const _=c;e.enqueueRetryable((async()=>{await _.promise,await a(this.currentUser)}))},g=_=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=_,this.o&&(this.auth.addAuthTokenListener(this.o),p())};this.t.onInit((_=>g(_))),setTimeout((()=>{if(!this.auth){const _=this.t.getImmediate({optional:!0});_?g(_):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Bi)}}),0),p()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Xe(typeof s.accessToken=="string",31837,{l:s}),new xg(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Xe(e===null||typeof e=="string",2055,{h:e}),new xt(e)}}class dw{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=xt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class pw{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new dw(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(xt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class hm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mw{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,mn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Xe(this.o===void 0,3512);const s=c=>{c.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const p=c.token!==this.m;return this.m=c.token,ie("FirebaseAppCheckTokenProvider",`Received ${p?"new":"existing"} token.`),p?n(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable((()=>s(c)))};const a=c=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((c=>a(c))),setTimeout((()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?a(c):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new hm(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Xe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new hm(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gw(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<i;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=gw(40);for(let c=0;c<a.length;++c)s.length<20&&a[c]<n&&(s+=e.charAt(a[c]%62))}return s}}function Oe(i,e){return i<e?-1:i>e?1:0}function Fh(i,e){const n=Math.min(i.length,e.length);for(let s=0;s<n;s++){const a=i.charAt(s),c=e.charAt(s);if(a!==c)return Ch(a)===Ch(c)?Oe(a,c):Ch(a)?1:-1}return Oe(i.length,e.length)}const yw=55296,_w=57343;function Ch(i){const e=i.charCodeAt(0);return e>=yw&&e<=_w}function eo(i,e,n){return i.length===e.length&&i.every(((s,a)=>n(s,e[a])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm="__name__";class Kn{constructor(e,n,s){n===void 0?n=0:n>e.length&&ve(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&ve(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Kn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Kn?e.forEach((s=>{n.push(s)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let a=0;a<s;a++){const c=Kn.compareSegments(e.get(a),n.get(a));if(c!==0)return c}return Oe(e.length,n.length)}static compareSegments(e,n){const s=Kn.isNumericId(e),a=Kn.isNumericId(n);return s&&!a?-1:!s&&a?1:s&&a?Kn.extractNumericId(e).compare(Kn.extractNumericId(n)):Fh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return rf.fromString(e.substring(4,e.length-2))}}class et extends Kn{construct(e,n,s){return new et(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new he(W.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((a=>a.length>0)))}return new et(n)}static emptyPath(){return new et([])}}const vw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class St extends Kn{construct(e,n,s){return new St(e,n,s)}static isValidIdentifier(e){return vw.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),St.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===fm}static keyField(){return new St([fm])}static fromServerFormat(e){const n=[];let s="",a=0;const c=()=>{if(s.length===0)throw new he(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let p=!1;for(;a<e.length;){const g=e[a];if(g==="\\"){if(a+1===e.length)throw new he(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const _=e[a+1];if(_!=="\\"&&_!=="."&&_!=="`")throw new he(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=_,a+=2}else g==="`"?(p=!p,a++):g!=="."||p?(s+=g,a++):(c(),a++)}if(c(),p)throw new he(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new St(n)}static emptyPath(){return new St([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.path=e}static fromPath(e){return new ge(et.fromString(e))}static fromName(e){return new ge(et.fromString(e).popFirst(5))}static empty(){return new ge(et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&et.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return et.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ge(new et(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ew(i,e,n){if(!n)throw new he(W.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function ww(i,e,n,s){if(e===!0&&s===!0)throw new he(W.INVALID_ARGUMENT,`${i} and ${n} cannot be used together.`)}function dm(i){if(!ge.isDocumentKey(i))throw new he(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Vg(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function af(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":ve(12329,{type:typeof i})}function bh(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new he(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=af(i);throw new he(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(i,e){const n={typeString:i};return e&&(n.value=e),n}function Sa(i,e){if(!Vg(i))throw new he(W.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const a=e[s].typeString,c="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){n=`JSON missing required field: '${s}'`;break}const p=i[s];if(a&&typeof p!==a){n=`JSON field '${s}' must be a ${a}.`;break}if(c!==void 0&&p!==c.value){n=`Expected '${s}' field to equal '${c.value}'`;break}}if(n)throw new he(W.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm=-62135596800,mm=1e6;class qe{static now(){return qe.fromMillis(Date.now())}static fromDate(e){return qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*mm);return new qe(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new he(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new he(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<pm)throw new he(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new he(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/mm}_compareTo(e){return this.seconds===e.seconds?Oe(this.nanoseconds,e.nanoseconds):Oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:qe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Sa(e,qe._jsonSchema))return new qe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-pm;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}qe._jsonSchemaVersion="firestore/timestamp/1.0",qe._jsonSchema={type:st("string",qe._jsonSchemaVersion),seconds:st("number"),nanoseconds:st("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{static fromTimestamp(e){return new We(e)}static min(){return new We(new qe(0,0))}static max(){return new We(new qe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga=-1;function Tw(i,e){const n=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,a=We.fromTimestamp(s===1e9?new qe(n+1,0):new qe(n,s));return new ai(a,ge.empty(),e)}function Iw(i){return new ai(i.readTime,i.key,ga)}class ai{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ai(We.min(),ge.empty(),ga)}static max(){return new ai(We.max(),ge.empty(),ga)}}function Sw(i,e){let n=i.readTime.compareTo(e.readTime);return n!==0?n:(n=ge.comparator(i.documentKey,e.documentKey),n!==0?n:Oe(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Cw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lf(i){if(i.code!==W.FAILED_PRECONDITION||i.message!==Aw)throw i;ie("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ve(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new z(((s,a)=>{this.nextCallback=c=>{this.wrapSuccess(e,c).next(s,a)},this.catchCallback=c=>{this.wrapFailure(n,c).next(s,a)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof z?n:z.resolve(n)}catch(n){return z.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):z.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):z.reject(n)}static resolve(e){return new z(((n,s)=>{n(e)}))}static reject(e){return new z(((n,s)=>{s(e)}))}static waitFor(e){return new z(((n,s)=>{let a=0,c=0,p=!1;e.forEach((g=>{++a,g.next((()=>{++c,p&&c===a&&n()}),(_=>s(_)))})),p=!0,c===a&&n()}))}static or(e){let n=z.resolve(!1);for(const s of e)n=n.next((a=>a?z.resolve(a):s()));return n}static forEach(e,n){const s=[];return e.forEach(((a,c)=>{s.push(n.call(this,a,c))})),this.waitFor(s)}static mapArray(e,n){return new z(((s,a)=>{const c=e.length,p=new Array(c);let g=0;for(let _=0;_<c;_++){const E=_;n(e[E]).next((C=>{p[E]=C,++g,g===c&&s(p)}),(C=>a(C)))}}))}static doWhile(e,n){return new z(((s,a)=>{const c=()=>{e()===!0?n().next((()=>{c()}),a):s()};c()}))}}function Rw(i){const e=i.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Aa(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}uf.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf=-1;function hf(i){return i==null}function mu(i){return i===0&&1/i==-1/0}function kw(i){return typeof i=="number"&&Number.isInteger(i)&&!mu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg="";function Pw(i){let e="";for(let n=0;n<i.length;n++)e.length>0&&(e=gm(e)),e=Nw(i.get(n),e);return gm(e)}function Nw(i,e){let n=e;const s=i.length;for(let a=0;a<s;a++){const c=i.charAt(a);switch(c){case"\0":n+="";break;case Lg:n+="";break;default:n+=c}}return n}function gm(i){return i+Lg+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ym(i){let e=0;for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&e++;return e}function lo(i,e){for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&e(n,i[n])}function Mg(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,n){this.comparator=e,this.root=n||Tt.EMPTY}insert(e,n){return new Xt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Tt.BLACK,null,null))}remove(e){return new Xt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return n+s.left.size;a<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,s)=>(e(n,s),!1)))}toString(){const e=[];return this.inorderTraversal(((n,s)=>(e.push(`${n}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Yl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Yl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Yl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Yl(this.root,e,this.comparator,!0)}}class Yl{constructor(e,n,s,a){this.isReverse=a,this.nodeStack=[];let c=1;for(;!e.isEmpty();)if(c=n?s(e.key,n):1,n&&a&&(c*=-1),c<0)e=this.isReverse?e.left:e.right;else{if(c===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Tt{constructor(e,n,s,a,c){this.key=e,this.value=n,this.color=s??Tt.RED,this.left=a??Tt.EMPTY,this.right=c??Tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,a,c){return new Tt(e??this.key,n??this.value,s??this.color,a??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let a=this;const c=s(e,a.key);return a=c<0?a.copy(null,null,null,a.left.insert(e,n,s),null):c===0?a.copy(null,n,null,null,null):a.copy(null,null,null,null,a.right.insert(e,n,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return Tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,a=this;if(n(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,n),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),n(e,a.key)===0){if(a.right.isEmpty())return Tt.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,n))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ve(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ve(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ve(27949);return e+(this.isRed()?0:1)}}Tt.EMPTY=null,Tt.RED=!0,Tt.BLACK=!1;Tt.EMPTY=new class{constructor(){this.size=0}get key(){throw ve(57766)}get value(){throw ve(16141)}get color(){throw ve(16727)}get left(){throw ve(29726)}get right(){throw ve(36894)}copy(e,n,s,a,c){return this}insert(e,n,s){return new Tt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.comparator=e,this.data=new Xt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,s)=>(e(n),!1)))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;n(a.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new _m(this.data.getIterator())}getIteratorFrom(e){return new _m(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((s=>{n=n.add(s)})),n}isEqual(e){if(!(e instanceof At)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const a=n.getNext().key,c=s.getNext().key;if(this.comparator(a,c)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new At(this.comparator);return n.data=e,n}}class _m{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this.fields=e,e.sort(St.comparator)}static empty(){return new Vn([])}unionWith(e){let n=new At(St.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Vn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return eo(this.fields,e.fields,((n,s)=>n.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(a){try{return atob(a)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new Dw("Invalid base64 string: "+c):c}})(e);return new Jn(n)}static fromUint8Array(e){const n=(function(a){let c="";for(let p=0;p<a.length;++p)c+=String.fromCharCode(a[p]);return c})(e);return new Jn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let a=0;a<n.length;a++)s[a]=n.charCodeAt(a);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Jn.EMPTY_BYTE_STRING=new Jn("");const Ow=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ki(i){if(Xe(!!i,39018),typeof i=="string"){let e=0;const n=Ow.exec(i);if(Xe(!!n,46558,{timestamp:i}),n[1]){let a=n[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:It(i.seconds),nanos:It(i.nanos)}}function It(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function to(i){return typeof i=="string"?Jn.fromBase64String(i):Jn.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug="server_timestamp",Fg="__type__",bg="__previous_value__",jg="__local_write_time__";function ff(i){return(i?.mapValue?.fields||{})[Fg]?.stringValue===Ug}function df(i){const e=i.mapValue.fields[bg];return ff(e)?df(e):e}function gu(i){const e=Ki(i.mapValue.fields[jg].timestampValue);return new qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e,n,s,a,c,p,g,_,E,C){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=a,this.ssl=c,this.forceLongPolling=p,this.autoDetectLongPolling=g,this.longPollingOptions=_,this.useFetchStreams=E,this.isUsingEmulator=C}}const yu="(default)";class _u{constructor(e,n){this.projectId=e,this.database=n||yu}static empty(){return new _u("","")}get isDefaultDatabase(){return this.database===yu}isEqual(e){return e instanceof _u&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg="__type__",Vw="__max__",Zl={mapValue:{}},Bg="__vector__",jh="value";function Qi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?ff(i)?4:Mw(i)?9007199254740991:Lw(i)?10:11:ve(28295,{value:i})}function Yn(i,e){if(i===e)return!0;const n=Qi(i);if(n!==Qi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return gu(i).isEqual(gu(e));case 3:return(function(a,c){if(typeof a.timestampValue=="string"&&typeof c.timestampValue=="string"&&a.timestampValue.length===c.timestampValue.length)return a.timestampValue===c.timestampValue;const p=Ki(a.timestampValue),g=Ki(c.timestampValue);return p.seconds===g.seconds&&p.nanos===g.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(a,c){return to(a.bytesValue).isEqual(to(c.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(a,c){return It(a.geoPointValue.latitude)===It(c.geoPointValue.latitude)&&It(a.geoPointValue.longitude)===It(c.geoPointValue.longitude)})(i,e);case 2:return(function(a,c){if("integerValue"in a&&"integerValue"in c)return It(a.integerValue)===It(c.integerValue);if("doubleValue"in a&&"doubleValue"in c){const p=It(a.doubleValue),g=It(c.doubleValue);return p===g?mu(p)===mu(g):isNaN(p)&&isNaN(g)}return!1})(i,e);case 9:return eo(i.arrayValue.values||[],e.arrayValue.values||[],Yn);case 10:case 11:return(function(a,c){const p=a.mapValue.fields||{},g=c.mapValue.fields||{};if(ym(p)!==ym(g))return!1;for(const _ in p)if(p.hasOwnProperty(_)&&(g[_]===void 0||!Yn(p[_],g[_])))return!1;return!0})(i,e);default:return ve(52216,{left:i})}}function ya(i,e){return(i.values||[]).find((n=>Yn(n,e)))!==void 0}function no(i,e){if(i===e)return 0;const n=Qi(i),s=Qi(e);if(n!==s)return Oe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Oe(i.booleanValue,e.booleanValue);case 2:return(function(c,p){const g=It(c.integerValue||c.doubleValue),_=It(p.integerValue||p.doubleValue);return g<_?-1:g>_?1:g===_?0:isNaN(g)?isNaN(_)?0:-1:1})(i,e);case 3:return vm(i.timestampValue,e.timestampValue);case 4:return vm(gu(i),gu(e));case 5:return Fh(i.stringValue,e.stringValue);case 6:return(function(c,p){const g=to(c),_=to(p);return g.compareTo(_)})(i.bytesValue,e.bytesValue);case 7:return(function(c,p){const g=c.split("/"),_=p.split("/");for(let E=0;E<g.length&&E<_.length;E++){const C=Oe(g[E],_[E]);if(C!==0)return C}return Oe(g.length,_.length)})(i.referenceValue,e.referenceValue);case 8:return(function(c,p){const g=Oe(It(c.latitude),It(p.latitude));return g!==0?g:Oe(It(c.longitude),It(p.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return Em(i.arrayValue,e.arrayValue);case 10:return(function(c,p){const g=c.fields||{},_=p.fields||{},E=g[jh]?.arrayValue,C=_[jh]?.arrayValue,D=Oe(E?.values?.length||0,C?.values?.length||0);return D!==0?D:Em(E,C)})(i.mapValue,e.mapValue);case 11:return(function(c,p){if(c===Zl.mapValue&&p===Zl.mapValue)return 0;if(c===Zl.mapValue)return 1;if(p===Zl.mapValue)return-1;const g=c.fields||{},_=Object.keys(g),E=p.fields||{},C=Object.keys(E);_.sort(),C.sort();for(let D=0;D<_.length&&D<C.length;++D){const M=Fh(_[D],C[D]);if(M!==0)return M;const K=no(g[_[D]],E[C[D]]);if(K!==0)return K}return Oe(_.length,C.length)})(i.mapValue,e.mapValue);default:throw ve(23264,{he:n})}}function vm(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Oe(i,e);const n=Ki(i),s=Ki(e),a=Oe(n.seconds,s.seconds);return a!==0?a:Oe(n.nanos,s.nanos)}function Em(i,e){const n=i.values||[],s=e.values||[];for(let a=0;a<n.length&&a<s.length;++a){const c=no(n[a],s[a]);if(c)return c}return Oe(n.length,s.length)}function ro(i){return zh(i)}function zh(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(n){const s=Ki(n);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(n){return to(n).toBase64()})(i.bytesValue):"referenceValue"in i?(function(n){return ge.fromName(n).toString()})(i.referenceValue):"geoPointValue"in i?(function(n){return`geo(${n.latitude},${n.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(n){let s="[",a=!0;for(const c of n.values||[])a?a=!1:s+=",",s+=zh(c);return s+"]"})(i.arrayValue):"mapValue"in i?(function(n){const s=Object.keys(n.fields||{}).sort();let a="{",c=!0;for(const p of s)c?c=!1:a+=",",a+=`${p}:${zh(n.fields[p])}`;return a+"}"})(i.mapValue):ve(61005,{value:i})}function su(i){switch(Qi(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=df(i);return e?16+su(e):16;case 5:return 2*i.stringValue.length;case 6:return to(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((a,c)=>a+su(c)),0)})(i.arrayValue);case 10:case 11:return(function(s){let a=0;return lo(s.fields,((c,p)=>{a+=c.length+su(p)})),a})(i.mapValue);default:throw ve(13486,{value:i})}}function Bh(i){return!!i&&"integerValue"in i}function pf(i){return!!i&&"arrayValue"in i}function ou(i){return!!i&&"mapValue"in i}function Lw(i){return(i?.mapValue?.fields||{})[zg]?.stringValue===Bg}function ua(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const e={mapValue:{fields:{}}};return lo(i.mapValue.fields,((n,s)=>e.mapValue.fields[n]=ua(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(i.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ua(i.arrayValue.values[n]);return e}return{...i}}function Mw(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===Vw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this.value=e}static empty(){return new On({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ou(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ua(n)}setAll(e){let n=St.emptyPath(),s={},a=[];e.forEach(((p,g)=>{if(!n.isImmediateParentOf(g)){const _=this.getFieldsMap(n);this.applyChanges(_,s,a),s={},a=[],n=g.popLast()}p?s[g.lastSegment()]=ua(p):a.push(g.lastSegment())}));const c=this.getFieldsMap(n);this.applyChanges(c,s,a)}delete(e){const n=this.field(e.popLast());ou(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Yn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=n.mapValue.fields[e.get(s)];ou(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=a),n=a}return n.mapValue.fields}applyChanges(e,n,s){lo(n,((a,c)=>e[a]=c));for(const a of s)delete e[a]}clone(){return new On(ua(this.value))}}function $g(i){const e=[];return lo(i.fields,((n,s)=>{const a=new St([n]);if(ou(s)){const c=$g(s.mapValue).fields;if(c.length===0)e.push(a);else for(const p of c)e.push(a.child(p))}else e.push(a)})),new Vn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,n,s,a,c,p,g){this.key=e,this.documentType=n,this.version=s,this.readTime=a,this.createTime=c,this.data=p,this.documentState=g}static newInvalidDocument(e){return new Dn(e,0,We.min(),We.min(),We.min(),On.empty(),0)}static newFoundDocument(e,n,s,a){return new Dn(e,1,n,We.min(),s,a,0)}static newNoDocument(e,n){return new Dn(e,2,n,We.min(),We.min(),On.empty(),0)}static newUnknownDocument(e,n){return new Dn(e,3,n,We.min(),We.min(),On.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(We.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=On.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=On.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=We.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Dn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Dn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e,n){this.position=e,this.inclusive=n}}function wm(i,e,n){let s=0;for(let a=0;a<i.position.length;a++){const c=e[a],p=i.position[a];if(c.field.isKeyField()?s=ge.comparator(ge.fromName(p.referenceValue),n.key):s=no(p,n.data.field(c.field)),c.dir==="desc"&&(s*=-1),s!==0)break}return s}function Tm(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let n=0;n<i.position.length;n++)if(!Yn(i.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,n="asc"){this.field=e,this.dir=n}}function Uw(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{}class yt extends Hg{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new bw(e,n,s):n==="array-contains"?new Bw(e,s):n==="in"?new $w(e,s):n==="not-in"?new Hw(e,s):n==="array-contains-any"?new Ww(e,s):new yt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new jw(e,s):new zw(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(no(n,this.value)):n!==null&&Qi(this.value)===Qi(n)&&this.matchesComparison(no(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class li extends Hg{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new li(e,n)}matches(e){return Wg(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Wg(i){return i.op==="and"}function qg(i){return Fw(i)&&Wg(i)}function Fw(i){for(const e of i.filters)if(e instanceof li)return!1;return!0}function $h(i){if(i instanceof yt)return i.field.canonicalString()+i.op.toString()+ro(i.value);if(qg(i))return i.filters.map((e=>$h(e))).join(",");{const e=i.filters.map((n=>$h(n))).join(",");return`${i.op}(${e})`}}function Gg(i,e){return i instanceof yt?(function(s,a){return a instanceof yt&&s.op===a.op&&s.field.isEqual(a.field)&&Yn(s.value,a.value)})(i,e):i instanceof li?(function(s,a){return a instanceof li&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce(((c,p,g)=>c&&Gg(p,a.filters[g])),!0):!1})(i,e):void ve(19439)}function Kg(i){return i instanceof yt?(function(n){return`${n.field.canonicalString()} ${n.op} ${ro(n.value)}`})(i):i instanceof li?(function(n){return n.op.toString()+" {"+n.getFilters().map(Kg).join(" ,")+"}"})(i):"Filter"}class bw extends yt{constructor(e,n,s){super(e,n,s),this.key=ge.fromName(s.referenceValue)}matches(e){const n=ge.comparator(e.key,this.key);return this.matchesComparison(n)}}class jw extends yt{constructor(e,n){super(e,"in",n),this.keys=Qg("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class zw extends yt{constructor(e,n){super(e,"not-in",n),this.keys=Qg("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function Qg(i,e){return(e.arrayValue?.values||[]).map((n=>ge.fromName(n.referenceValue)))}class Bw extends yt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return pf(n)&&ya(n.arrayValue,this.value)}}class $w extends yt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ya(this.value.arrayValue,n)}}class Hw extends yt{constructor(e,n){super(e,"not-in",n)}matches(e){if(ya(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ya(this.value.arrayValue,n)}}class Ww extends yt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!pf(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>ya(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e,n=null,s=[],a=[],c=null,p=null,g=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=a,this.limit=c,this.startAt=p,this.endAt=g,this.Te=null}}function Im(i,e=null,n=[],s=[],a=null,c=null,p=null){return new qw(i,e,n,s,a,c,p)}function mf(i){const e=je(i);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((s=>$h(s))).join(","),n+="|ob:",n+=e.orderBy.map((s=>(function(c){return c.field.canonicalString()+c.dir})(s))).join(","),hf(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>ro(s))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>ro(s))).join(",")),e.Te=n}return e.Te}function gf(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<i.orderBy.length;n++)if(!Uw(i.orderBy[n],e.orderBy[n]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let n=0;n<i.filters.length;n++)if(!Gg(i.filters[n],e.filters[n]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Tm(i.startAt,e.startAt)&&Tm(i.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,n=null,s=[],a=[],c=null,p="F",g=null,_=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=a,this.limit=c,this.limitType=p,this.startAt=g,this.endAt=_,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Gw(i,e,n,s,a,c,p,g){return new Lu(i,e,n,s,a,c,p,g)}function Kw(i){return new Lu(i)}function Sm(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function Qw(i){return i.collectionGroup!==null}function ca(i){const e=je(i);if(e.Ie===null){e.Ie=[];const n=new Set;for(const c of e.explicitOrderBy)e.Ie.push(c),n.add(c.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(p){let g=new At(St.comparator);return p.filters.forEach((_=>{_.getFlattenedFilters().forEach((E=>{E.isInequality()&&(g=g.add(E.field))}))})),g})(e).forEach((c=>{n.has(c.canonicalString())||c.isKeyField()||e.Ie.push(new Eu(c,s))})),n.has(St.keyField().canonicalString())||e.Ie.push(new Eu(St.keyField(),s))}return e.Ie}function $i(i){const e=je(i);return e.Ee||(e.Ee=Xw(e,ca(i))),e.Ee}function Xw(i,e){if(i.limitType==="F")return Im(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((a=>{const c=a.dir==="desc"?"asc":"desc";return new Eu(a.field,c)}));const n=i.endAt?new vu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new vu(i.startAt.position,i.startAt.inclusive):null;return Im(i.path,i.collectionGroup,e,i.filters,i.limit,n,s)}}function Hh(i,e,n){return new Lu(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,n,i.startAt,i.endAt)}function Xg(i,e){return gf($i(i),$i(e))&&i.limitType===e.limitType}function Jg(i){return`${mf($i(i))}|lt:${i.limitType}`}function oa(i){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((a=>Kg(a))).join(", ")}]`),hf(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((a=>(function(p){return`${p.field.canonicalString()} (${p.dir})`})(a))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((a=>ro(a))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((a=>ro(a))).join(",")),`Target(${s})`})($i(i))}; limitType=${i.limitType})`}function yf(i,e){return e.isFoundDocument()&&(function(s,a){const c=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(c):ge.isDocumentKey(s.path)?s.path.isEqual(c):s.path.isImmediateParentOf(c)})(i,e)&&(function(s,a){for(const c of ca(s))if(!c.field.isKeyField()&&a.data.field(c.field)===null)return!1;return!0})(i,e)&&(function(s,a){for(const c of s.filters)if(!c.matches(a))return!1;return!0})(i,e)&&(function(s,a){return!(s.startAt&&!(function(p,g,_){const E=wm(p,g,_);return p.inclusive?E<=0:E<0})(s.startAt,ca(s),a)||s.endAt&&!(function(p,g,_){const E=wm(p,g,_);return p.inclusive?E>=0:E>0})(s.endAt,ca(s),a))})(i,e)}function Jw(i){return(e,n)=>{let s=!1;for(const a of ca(i)){const c=Yw(a,e,n);if(c!==0)return c;s=s||a.field.isKeyField()}return 0}}function Yw(i,e,n){const s=i.field.isKeyField()?ge.comparator(e.key,n.key):(function(c,p,g){const _=p.data.field(c),E=g.data.field(c);return _!==null&&E!==null?no(_,E):ve(42886)})(i.field,e,n);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return ve(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[a,c]of s)if(this.equalsFn(a,e))return c}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let c=0;c<a.length;c++)if(this.equalsFn(a[c][0],e))return void(a[c]=[e,n]);a.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[n]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){lo(this.inner,((n,s)=>{for(const[a,c]of s)e(a,c)}))}isEmpty(){return Mg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw=new Xt(ge.comparator);function wu(){return Zw}const Yg=new Xt(ge.comparator);function eu(...i){let e=Yg;for(const n of i)e=e.insert(n.key,n);return e}function Zg(i){let e=Yg;return i.forEach(((n,s)=>e=e.insert(n,s.overlayedDocument))),e}function zi(){return ha()}function ey(){return ha()}function ha(){return new Ji((i=>i.toString()),((i,e)=>i.isEqual(e)))}const e0=new Xt(ge.comparator),t0=new At(ge.comparator);function Vt(...i){let e=t0;for(const n of i)e=e.add(n);return e}const n0=new At(Oe);function r0(){return n0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:mu(e)?"-0":e}}function ty(i){return{integerValue:""+i}}function i0(i,e){return kw(e)?ty(e):_f(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(){this._=void 0}}function s0(i,e,n){return i instanceof Tu?(function(a,c){const p={fields:{[Fg]:{stringValue:Ug},[jg]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return c&&ff(c)&&(c=df(c)),c&&(p.fields[bg]=c),{mapValue:p}})(n,e):i instanceof _a?ry(i,e):i instanceof va?iy(i,e):(function(a,c){const p=ny(a,c),g=Am(p)+Am(a.Ae);return Bh(p)&&Bh(a.Ae)?ty(g):_f(a.serializer,g)})(i,e)}function o0(i,e,n){return i instanceof _a?ry(i,e):i instanceof va?iy(i,e):n}function ny(i,e){return i instanceof Iu?(function(s){return Bh(s)||(function(c){return!!c&&"doubleValue"in c})(s)})(e)?e:{integerValue:0}:null}class Tu extends Mu{}class _a extends Mu{constructor(e){super(),this.elements=e}}function ry(i,e){const n=sy(e);for(const s of i.elements)n.some((a=>Yn(a,s)))||n.push(s);return{arrayValue:{values:n}}}class va extends Mu{constructor(e){super(),this.elements=e}}function iy(i,e){let n=sy(e);for(const s of i.elements)n=n.filter((a=>!Yn(a,s)));return{arrayValue:{values:n}}}class Iu extends Mu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Am(i){return It(i.integerValue||i.doubleValue)}function sy(i){return pf(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function a0(i,e){return i.field.isEqual(e.field)&&(function(s,a){return s instanceof _a&&a instanceof _a||s instanceof va&&a instanceof va?eo(s.elements,a.elements,Yn):s instanceof Iu&&a instanceof Iu?Yn(s.Ae,a.Ae):s instanceof Tu&&a instanceof Tu})(i.transform,e.transform)}class l0{constructor(e,n){this.version=e,this.transformResults=n}}class vr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new vr}static exists(e){return new vr(void 0,e)}static updateTime(e){return new vr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function au(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Uu{}function oy(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new ly(i.key,vr.none()):new Ca(i.key,i.data,vr.none());{const n=i.data,s=On.empty();let a=new At(St.comparator);for(let c of e.fields)if(!a.has(c)){let p=n.field(c);p===null&&c.length>1&&(c=c.popLast(),p=n.field(c)),p===null?s.delete(c):s.set(c,p),a=a.add(c)}return new Yi(i.key,s,new Vn(a.toArray()),vr.none())}}function u0(i,e,n){i instanceof Ca?(function(a,c,p){const g=a.value.clone(),_=Rm(a.fieldTransforms,c,p.transformResults);g.setAll(_),c.convertToFoundDocument(p.version,g).setHasCommittedMutations()})(i,e,n):i instanceof Yi?(function(a,c,p){if(!au(a.precondition,c))return void c.convertToUnknownDocument(p.version);const g=Rm(a.fieldTransforms,c,p.transformResults),_=c.data;_.setAll(ay(a)),_.setAll(g),c.convertToFoundDocument(p.version,_).setHasCommittedMutations()})(i,e,n):(function(a,c,p){c.convertToNoDocument(p.version).setHasCommittedMutations()})(0,e,n)}function fa(i,e,n,s){return i instanceof Ca?(function(c,p,g,_){if(!au(c.precondition,p))return g;const E=c.value.clone(),C=km(c.fieldTransforms,_,p);return E.setAll(C),p.convertToFoundDocument(p.version,E).setHasLocalMutations(),null})(i,e,n,s):i instanceof Yi?(function(c,p,g,_){if(!au(c.precondition,p))return g;const E=km(c.fieldTransforms,_,p),C=p.data;return C.setAll(ay(c)),C.setAll(E),p.convertToFoundDocument(p.version,C).setHasLocalMutations(),g===null?null:g.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map((D=>D.field)))})(i,e,n,s):(function(c,p,g){return au(c.precondition,p)?(p.convertToNoDocument(p.version).setHasLocalMutations(),null):g})(i,e,n)}function c0(i,e){let n=null;for(const s of i.fieldTransforms){const a=e.data.field(s.field),c=ny(s.transform,a||null);c!=null&&(n===null&&(n=On.empty()),n.set(s.field,c))}return n||null}function Cm(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&eo(s,a,((c,p)=>a0(c,p)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Ca extends Uu{constructor(e,n,s,a=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Yi extends Uu{constructor(e,n,s,a,c=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=a,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function ay(i){const e=new Map;return i.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=i.data.field(n);e.set(n,s)}})),e}function Rm(i,e,n){const s=new Map;Xe(i.length===n.length,32656,{Re:n.length,Ve:i.length});for(let a=0;a<n.length;a++){const c=i[a],p=c.transform,g=e.data.field(c.field);s.set(c.field,o0(p,g,n[a]))}return s}function km(i,e,n){const s=new Map;for(const a of i){const c=a.transform,p=n.data.field(a.field);s.set(a.field,s0(c,p,e))}return s}class ly extends Uu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class h0 extends Uu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e,n,s,a){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let a=0;a<this.mutations.length;a++){const c=this.mutations[a];c.key.isEqual(e.key)&&u0(c,e,s[a])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=fa(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=fa(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=ey();return this.mutations.forEach((a=>{const c=e.get(a.key),p=c.overlayedDocument;let g=this.applyToLocalView(p,c.mutatedFields);g=n.has(a.key)?null:g;const _=oy(p,g);_!==null&&s.set(a.key,_),p.isValidDocument()||p.convertToNoDocument(We.min())})),s}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Vt())}isEqual(e){return this.batchId===e.batchId&&eo(this.mutations,e.mutations,((n,s)=>Cm(n,s)))&&eo(this.baseMutations,e.baseMutations,((n,s)=>Cm(n,s)))}}class vf{constructor(e,n,s,a){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=a}static from(e,n,s){Xe(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let a=(function(){return e0})();const c=e.mutations;for(let p=0;p<c.length;p++)a=a.insert(c[p].key,s[p].version);return new vf(e,n,s,a)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it,Ce;function p0(i){switch(i){case W.OK:return ve(64938);case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0;default:return ve(15467,{code:i})}}function m0(i){if(i===void 0)return Gi("GRPC error has no .code"),W.UNKNOWN;switch(i){case it.OK:return W.OK;case it.CANCELLED:return W.CANCELLED;case it.UNKNOWN:return W.UNKNOWN;case it.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case it.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case it.INTERNAL:return W.INTERNAL;case it.UNAVAILABLE:return W.UNAVAILABLE;case it.UNAUTHENTICATED:return W.UNAUTHENTICATED;case it.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case it.NOT_FOUND:return W.NOT_FOUND;case it.ALREADY_EXISTS:return W.ALREADY_EXISTS;case it.PERMISSION_DENIED:return W.PERMISSION_DENIED;case it.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case it.ABORTED:return W.ABORTED;case it.OUT_OF_RANGE:return W.OUT_OF_RANGE;case it.UNIMPLEMENTED:return W.UNIMPLEMENTED;case it.DATA_LOSS:return W.DATA_LOSS;default:return ve(39323,{code:i})}}(Ce=it||(it={}))[Ce.OK=0]="OK",Ce[Ce.CANCELLED=1]="CANCELLED",Ce[Ce.UNKNOWN=2]="UNKNOWN",Ce[Ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ce[Ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ce[Ce.NOT_FOUND=5]="NOT_FOUND",Ce[Ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ce[Ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ce[Ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ce[Ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ce[Ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ce[Ce.ABORTED=10]="ABORTED",Ce[Ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ce[Ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ce[Ce.INTERNAL=13]="INTERNAL",Ce[Ce.UNAVAILABLE=14]="UNAVAILABLE",Ce[Ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new rf([4294967295,4294967295],0);class g0{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Wh(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function y0(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function _0(i,e){return Wh(i,e.toTimestamp())}function Ks(i){return Xe(!!i,49232),We.fromTimestamp((function(n){const s=Ki(n);return new qe(s.seconds,s.nanos)})(i))}function uy(i,e){return qh(i,e).canonicalString()}function qh(i,e){const n=(function(a){return new et(["projects",a.projectId,"databases",a.database])})(i).child("documents");return e===void 0?n:n.child(e)}function v0(i){const e=et.fromString(i);return Xe(R0(e),10190,{key:e.toString()}),e}function Gh(i,e){return uy(i.databaseId,e.path)}function E0(i){const e=v0(i);return e.length===4?et.emptyPath():T0(e)}function w0(i){return new et(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function T0(i){return Xe(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function Pm(i,e,n){return{name:Gh(i,e),fields:n.value.mapValue.fields}}function I0(i,e){let n;if(e instanceof Ca)n={update:Pm(i,e.key,e.value)};else if(e instanceof ly)n={delete:Gh(i,e.key)};else if(e instanceof Yi)n={update:Pm(i,e.key,e.data),updateMask:C0(e.fieldMask)};else{if(!(e instanceof h0))return ve(16599,{Vt:e.type});n={verify:Gh(i,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((s=>(function(c,p){const g=p.transform;if(g instanceof Tu)return{fieldPath:p.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(g instanceof _a)return{fieldPath:p.field.canonicalString(),appendMissingElements:{values:g.elements}};if(g instanceof va)return{fieldPath:p.field.canonicalString(),removeAllFromArray:{values:g.elements}};if(g instanceof Iu)return{fieldPath:p.field.canonicalString(),increment:g.Ae};throw ve(20930,{transform:p.transform})})(0,s)))),e.precondition.isNone||(n.currentDocument=(function(a,c){return c.updateTime!==void 0?{updateTime:_0(a,c.updateTime)}:c.exists!==void 0?{exists:c.exists}:ve(27497)})(i,e.precondition)),n}function S0(i,e){return i&&i.length>0?(Xe(e!==void 0,14353),i.map((n=>(function(a,c){let p=a.updateTime?Ks(a.updateTime):Ks(c);return p.isEqual(We.min())&&(p=Ks(c)),new l0(p,a.transformResults||[])})(n,e)))):[]}function A0(i){let e=E0(i.parent);const n=i.structuredQuery,s=n.from?n.from.length:0;let a=null;if(s>0){Xe(s===1,65062);const C=n.from[0];C.allDescendants?a=C.collectionId:e=e.child(C.collectionId)}let c=[];n.where&&(c=(function(D){const M=cy(D);return M instanceof li&&qg(M)?M.getFilters():[M]})(n.where));let p=[];n.orderBy&&(p=(function(D){return D.map((M=>(function(Q){return new Eu(qs(Q.field),(function(X){switch(X){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(Q.direction))})(M)))})(n.orderBy));let g=null;n.limit&&(g=(function(D){let M;return M=typeof D=="object"?D.value:D,hf(M)?null:M})(n.limit));let _=null;n.startAt&&(_=(function(D){const M=!!D.before,K=D.values||[];return new vu(K,M)})(n.startAt));let E=null;return n.endAt&&(E=(function(D){const M=!D.before,K=D.values||[];return new vu(K,M)})(n.endAt)),Gw(e,a,p,c,g,"F",_,E)}function cy(i){return i.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=qs(n.unaryFilter.field);return yt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=qs(n.unaryFilter.field);return yt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=qs(n.unaryFilter.field);return yt.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const p=qs(n.unaryFilter.field);return yt.create(p,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ve(61313);default:return ve(60726)}})(i):i.fieldFilter!==void 0?(function(n){return yt.create(qs(n.fieldFilter.field),(function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ve(58110);default:return ve(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(n){return li.create(n.compositeFilter.filters.map((s=>cy(s))),(function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return ve(1026)}})(n.compositeFilter.op))})(i):ve(30097,{filter:i})}function qs(i){return St.fromServerFormat(i.fieldPath)}function C0(i){const e=[];return i.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function R0(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e){this.yt=e}}function P0(i){const e=A0({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Hh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(){this.Cn=new D0}addToCollectionParentIndex(e,n){return this.Cn.add(n),z.resolve()}getCollectionParents(e,n){return z.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return z.resolve()}deleteFieldIndex(e,n){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,n){return z.resolve()}getDocumentsMatchingTarget(e,n){return z.resolve(null)}getIndexType(e,n){return z.resolve(0)}getFieldIndexes(e,n){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,n){return z.resolve(ai.min())}getMinOffsetFromCollectionGroup(e,n){return z.resolve(ai.min())}updateCollectionGroup(e,n,s){return z.resolve()}updateIndexEntries(e,n){return z.resolve()}}class D0{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),a=this.index[n]||new At(et.comparator),c=!a.has(s);return this.index[n]=a.add(s),c}has(e){const n=e.lastSegment(),s=e.popLast(),a=this.index[n];return a&&a.has(s)}getEntries(e){return(this.index[e]||new At(et.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},hy=41943040;class Qt{static withCacheSize(e){return new Qt(e,Qt.DEFAULT_COLLECTION_PERCENTILE,Qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qt.DEFAULT_COLLECTION_PERCENTILE=10,Qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Qt.DEFAULT=new Qt(hy,Qt.DEFAULT_COLLECTION_PERCENTILE,Qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Qt.DISABLED=new Qt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new io(0)}static cr(){return new io(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm="LruGarbageCollector",O0=1048576;function Om([i,e],[n,s]){const a=Oe(i,n);return a===0?Oe(e,s):a}class x0{constructor(e){this.Ir=e,this.buffer=new At(Om),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();Om(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class V0{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ie(Dm,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Aa(n)?ie(Dm,"Ignoring IndexedDB error during garbage collection: ",n):await lf(n)}await this.Vr(3e5)}))}}class L0{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(e,n){if(n===0)return z.resolve(uf.ce);const s=new x0(n);return this.mr.forEachTarget(e,(a=>s.Ar(a.sequenceNumber))).next((()=>this.mr.pr(e,(a=>s.Ar(a))))).next((()=>s.maxValue))}removeTargets(e,n,s){return this.mr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),z.resolve(Nm)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Nm):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let s,a,c,p,g,_,E;const C=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((D=>(D>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${D}`),a=this.params.maximumSequenceNumbersToCollect):a=D,p=Date.now(),this.nthSequenceNumber(e,a)))).next((D=>(s=D,g=Date.now(),this.removeTargets(e,s,n)))).next((D=>(c=D,_=Date.now(),this.removeOrphanedDocuments(e,s)))).next((D=>(E=Date.now(),Ws()<=Te.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${p-C}ms
	Determined least recently used ${a} in `+(g-p)+`ms
	Removed ${c} targets in `+(_-g)+`ms
	Removed ${D} documents in `+(E-_)+`ms
Total Duration: ${E-C}ms`),z.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:c,documentsRemoved:D}))))}}function M0(i,e){return new L0(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(){this.changes=new Ji((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Dn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?z.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e,n,s,a){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next((a=>(s=a,this.remoteDocumentCache.getEntry(e,n)))).next((a=>(s!==null&&fa(s.mutation,a,Vn.empty(),qe.now()),a)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.getLocalViewOfDocuments(e,s,Vt()).next((()=>s))))}getLocalViewOfDocuments(e,n,s=Vt()){const a=zi();return this.populateOverlays(e,a,n).next((()=>this.computeViews(e,n,a,s).next((c=>{let p=eu();return c.forEach(((g,_)=>{p=p.insert(g,_.overlayedDocument)})),p}))))}getOverlayedDocuments(e,n){const s=zi();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,Vt())))}populateOverlays(e,n,s){const a=[];return s.forEach((c=>{n.has(c)||a.push(c)})),this.documentOverlayCache.getOverlays(e,a).next((c=>{c.forEach(((p,g)=>{n.set(p,g)}))}))}computeViews(e,n,s,a){let c=wu();const p=ha(),g=(function(){return ha()})();return n.forEach(((_,E)=>{const C=s.get(E.key);a.has(E.key)&&(C===void 0||C.mutation instanceof Yi)?c=c.insert(E.key,E):C!==void 0?(p.set(E.key,C.mutation.getFieldMask()),fa(C.mutation,E,C.mutation.getFieldMask(),qe.now())):p.set(E.key,Vn.empty())})),this.recalculateAndSaveOverlays(e,c).next((_=>(_.forEach(((E,C)=>p.set(E,C))),n.forEach(((E,C)=>g.set(E,new F0(C,p.get(E)??null)))),g)))}recalculateAndSaveOverlays(e,n){const s=ha();let a=new Xt(((p,g)=>p-g)),c=Vt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((p=>{for(const g of p)g.keys().forEach((_=>{const E=n.get(_);if(E===null)return;let C=s.get(_)||Vn.empty();C=g.applyToLocalView(E,C),s.set(_,C);const D=(a.get(g.batchId)||Vt()).add(_);a=a.insert(g.batchId,D)}))})).next((()=>{const p=[],g=a.getReverseIterator();for(;g.hasNext();){const _=g.getNext(),E=_.key,C=_.value,D=ey();C.forEach((M=>{if(!c.has(M)){const K=oy(n.get(M),s.get(M));K!==null&&D.set(M,K),c=c.add(M)}})),p.push(this.documentOverlayCache.saveOverlays(e,E,D))}return z.waitFor(p)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,n,s,a){return(function(p){return ge.isDocumentKey(p.path)&&p.collectionGroup===null&&p.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Qw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,a):this.getDocumentsMatchingCollectionQuery(e,n,s,a)}getNextDocuments(e,n,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,a).next((c=>{const p=a-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,a-c.size):z.resolve(zi());let g=ga,_=c;return p.next((E=>z.forEach(E,((C,D)=>(g<D.largestBatchId&&(g=D.largestBatchId),c.get(C)?z.resolve():this.remoteDocumentCache.getEntry(e,C).next((M=>{_=_.insert(C,M)}))))).next((()=>this.populateOverlays(e,E,c))).next((()=>this.computeViews(e,_,E,Vt()))).next((C=>({batchId:g,changes:Zg(C)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ge(n)).next((s=>{let a=eu();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a}))}getDocumentsMatchingCollectionGroupQuery(e,n,s,a){const c=n.collectionGroup;let p=eu();return this.indexManager.getCollectionParents(e,c).next((g=>z.forEach(g,(_=>{const E=(function(D,M){return new Lu(M,null,D.explicitOrderBy.slice(),D.filters.slice(),D.limit,D.limitType,D.startAt,D.endAt)})(n,_.child(c));return this.getDocumentsMatchingCollectionQuery(e,E,s,a).next((C=>{C.forEach(((D,M)=>{p=p.insert(D,M)}))}))})).next((()=>p))))}getDocumentsMatchingCollectionQuery(e,n,s,a){let c;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next((p=>(c=p,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,c,a)))).next((p=>{c.forEach(((_,E)=>{const C=E.getKey();p.get(C)===null&&(p=p.insert(C,Dn.newInvalidDocument(C)))}));let g=eu();return p.forEach(((_,E)=>{const C=c.get(_);C!==void 0&&fa(C.mutation,E,Vn.empty(),qe.now()),yf(n,E)&&(g=g.insert(_,E))})),g}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return z.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(a){return{id:a.id,version:a.version,createTime:Ks(a.createTime)}})(n)),z.resolve()}getNamedQuery(e,n){return z.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(a){return{name:a.name,query:P0(a.bundledQuery),readTime:Ks(a.readTime)}})(n)),z.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(){this.overlays=new Xt(ge.comparator),this.qr=new Map}getOverlay(e,n){return z.resolve(this.overlays.get(n))}getOverlays(e,n){const s=zi();return z.forEach(n,(a=>this.getOverlay(e,a).next((c=>{c!==null&&s.set(a,c)})))).next((()=>s))}saveOverlays(e,n,s){return s.forEach(((a,c)=>{this.St(e,n,c)})),z.resolve()}removeOverlaysForBatchId(e,n,s){const a=this.qr.get(s);return a!==void 0&&(a.forEach((c=>this.overlays=this.overlays.remove(c))),this.qr.delete(s)),z.resolve()}getOverlaysForCollection(e,n,s){const a=zi(),c=n.length+1,p=new ge(n.child("")),g=this.overlays.getIteratorFrom(p);for(;g.hasNext();){const _=g.getNext().value,E=_.getKey();if(!n.isPrefixOf(E.path))break;E.path.length===c&&_.largestBatchId>s&&a.set(_.getKey(),_)}return z.resolve(a)}getOverlaysForCollectionGroup(e,n,s,a){let c=new Xt(((E,C)=>E-C));const p=this.overlays.getIterator();for(;p.hasNext();){const E=p.getNext().value;if(E.getKey().getCollectionGroup()===n&&E.largestBatchId>s){let C=c.get(E.largestBatchId);C===null&&(C=zi(),c=c.insert(E.largestBatchId,C)),C.set(E.getKey(),E)}}const g=zi(),_=c.getIterator();for(;_.hasNext()&&(_.getNext().value.forEach(((E,C)=>g.set(E,C))),!(g.size()>=a)););return z.resolve(g)}St(e,n,s){const a=this.overlays.get(s.key);if(a!==null){const p=this.qr.get(a.largestBatchId).delete(s.key);this.qr.set(a.largestBatchId,p)}this.overlays=this.overlays.insert(s.key,new d0(n,s));let c=this.qr.get(n);c===void 0&&(c=Vt(),this.qr.set(n,c)),this.qr.set(n,c.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(){this.sessionToken=Jn.EMPTY_BYTE_STRING}getSessionToken(e){return z.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(){this.Qr=new At(gt.$r),this.Ur=new At(gt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const s=new gt(e,n);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,n){e.forEach((s=>this.addReference(s,n)))}removeReference(e,n){this.Gr(new gt(e,n))}zr(e,n){e.forEach((s=>this.removeReference(s,n)))}jr(e){const n=new ge(new et([])),s=new gt(n,e),a=new gt(n,e+1),c=[];return this.Ur.forEachInRange([s,a],(p=>{this.Gr(p),c.push(p.key)})),c}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new ge(new et([])),s=new gt(n,e),a=new gt(n,e+1);let c=Vt();return this.Ur.forEachInRange([s,a],(p=>{c=c.add(p.key)})),c}containsKey(e){const n=new gt(e,0),s=this.Qr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class gt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return ge.comparator(e.key,n.key)||Oe(e.Yr,n.Yr)}static Kr(e,n){return Oe(e.Yr,n.Yr)||ge.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new At(gt.$r)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,a){const c=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const p=new f0(c,n,s,a);this.mutationQueue.push(p);for(const g of a)this.Zr=this.Zr.add(new gt(g.key,c)),this.indexManager.addToCollectionParentIndex(e,g.key.path.popLast());return z.resolve(p)}lookupMutationBatch(e,n){return z.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,a=this.ei(s),c=a<0?0:a;return z.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?cf:this.tr-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new gt(n,0),a=new gt(n,Number.POSITIVE_INFINITY),c=[];return this.Zr.forEachInRange([s,a],(p=>{const g=this.Xr(p.Yr);c.push(g)})),z.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new At(Oe);return n.forEach((a=>{const c=new gt(a,0),p=new gt(a,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([c,p],(g=>{s=s.add(g.Yr)}))})),z.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,a=s.length+1;let c=s;ge.isDocumentKey(c)||(c=c.child(""));const p=new gt(new ge(c),0);let g=new At(Oe);return this.Zr.forEachWhile((_=>{const E=_.key.path;return!!s.isPrefixOf(E)&&(E.length===a&&(g=g.add(_.Yr)),!0)}),p),z.resolve(this.ti(g))}ti(e){const n=[];return e.forEach((s=>{const a=this.Xr(s);a!==null&&n.push(a)})),n}removeMutationBatch(e,n){Xe(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return z.forEach(n.mutations,(a=>{const c=new gt(a.key,n.batchId);return s=s.delete(c),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,n){const s=new gt(n,0),a=this.Zr.firstAfterOrEqual(s);return z.resolve(n.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e){this.ri=e,this.docs=(function(){return new Xt(ge.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,a=this.docs.get(s),c=a?a.size:0,p=this.ri(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:p}),this.size+=p-c,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return z.resolve(s?s.document.mutableCopy():Dn.newInvalidDocument(n))}getEntries(e,n){let s=wu();return n.forEach((a=>{const c=this.docs.get(a);s=s.insert(a,c?c.document.mutableCopy():Dn.newInvalidDocument(a))})),z.resolve(s)}getDocumentsMatchingQuery(e,n,s,a){let c=wu();const p=n.path,g=new ge(p.child("__id-9223372036854775808__")),_=this.docs.getIteratorFrom(g);for(;_.hasNext();){const{key:E,value:{document:C}}=_.getNext();if(!p.isPrefixOf(E.path))break;E.path.length>p.length+1||Sw(Iw(C),s)<=0||(a.has(C.key)||yf(n,C))&&(c=c.insert(C.key,C.mutableCopy()))}return z.resolve(c)}getAllFromCollectionGroup(e,n,s,a){ve(9500)}ii(e,n){return z.forEach(this.docs,(s=>n(s)))}newChangeBuffer(e){return new W0(this)}getSize(e){return z.resolve(this.size)}}class W0 extends U0{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((s,a)=>{a.isValidDocument()?n.push(this.Nr.addEntry(e,a)):this.Nr.removeEntry(s)})),z.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(e){this.persistence=e,this.si=new Ji((n=>mf(n)),gf),this.lastRemoteSnapshotVersion=We.min(),this.highestTargetId=0,this.oi=0,this._i=new Ef,this.targetCount=0,this.ai=io.ur()}forEachTarget(e,n){return this.si.forEach(((s,a)=>n(a))),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.oi&&(this.oi=n),z.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new io(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,z.resolve()}updateTargetData(e,n){return this.Pr(n),z.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,n,s){let a=0;const c=[];return this.si.forEach(((p,g)=>{g.sequenceNumber<=n&&s.get(g.targetId)===null&&(this.si.delete(p),c.push(this.removeMatchingKeysForTargetId(e,g.targetId)),a++)})),z.waitFor(c).next((()=>a))}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,n){const s=this.si.get(n)||null;return z.resolve(s)}addMatchingKeys(e,n,s){return this._i.Wr(n,s),z.resolve()}removeMatchingKeys(e,n,s){this._i.zr(n,s);const a=this.persistence.referenceDelegate,c=[];return a&&n.forEach((p=>{c.push(a.markPotentiallyOrphaned(e,p))})),z.waitFor(c)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),z.resolve()}getMatchingKeysForTargetId(e,n){const s=this._i.Hr(n);return z.resolve(s)}containsKey(e,n){return z.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e,n){this.ui={},this.overlays={},this.ci=new uf(0),this.li=!1,this.li=!0,this.hi=new B0,this.referenceDelegate=e(this),this.Pi=new q0(this),this.indexManager=new N0,this.remoteDocumentCache=(function(a){return new H0(a)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new k0(n),this.Ii=new j0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new z0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.ui[e.toKey()];return s||(s=new $0(n,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,s){ie("MemoryPersistence","Starting transaction:",e);const a=new G0(this.ci.next());return this.referenceDelegate.Ei(),s(a).next((c=>this.referenceDelegate.di(a).next((()=>c)))).toPromise().then((c=>(a.raiseOnCommittedEvent(),c)))}Ai(e,n){return z.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,n))))}}class G0 extends Cw{constructor(e){super(),this.currentSequenceNumber=e}}class wf{constructor(e){this.persistence=e,this.Ri=new Ef,this.Vi=null}static mi(e){return new wf(e)}get fi(){if(this.Vi)return this.Vi;throw ve(60996)}addReference(e,n,s){return this.Ri.addReference(s,n),this.fi.delete(s.toString()),z.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.fi.add(s.toString()),z.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),z.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((a=>this.fi.add(a.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next((a=>{a.forEach((c=>this.fi.add(c.toString())))})).next((()=>s.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.fi,(s=>{const a=ge.fromPath(s);return this.gi(e,a).next((c=>{c||n.removeEntry(a,We.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((s=>{s?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return z.or([()=>z.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Su{constructor(e,n){this.persistence=e,this.pi=new Ji((s=>Pw(s.path)),((s,a)=>s.isEqual(a))),this.garbageCollector=M0(this,n)}static mi(e,n){return new Su(e,n)}Ei(){}di(e){return z.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>n.next((a=>s+a))))}wr(e){let n=0;return this.pr(e,(s=>{n++})).next((()=>n))}pr(e,n){return z.forEach(this.pi,((s,a)=>this.br(e,s,a).next((c=>c?z.resolve():n(a)))))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const a=this.persistence.getRemoteDocumentCache(),c=a.newChangeBuffer();return a.ii(e,(p=>this.br(e,p,n).next((g=>{g||(s++,c.removeEntry(p,We.min()))})))).next((()=>c.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),z.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),z.resolve()}removeReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),z.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),z.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=su(e.data.value)),n}br(e,n,s){return z.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const a=this.pi.get(n);return z.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,n,s,a){this.targetId=e,this.fromCache=n,this.Es=s,this.ds=a}static As(e,n){let s=Vt(),a=Vt();for(const c of n.docChanges)switch(c.type){case 0:s=s.add(c.doc.key);break;case 1:a=a.add(c.doc.key)}return new Tf(e,n.fromCache,s,a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Hv()?8:Rw(Mt())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,s,a){const c={result:null};return this.ys(e,n).next((p=>{c.result=p})).next((()=>{if(!c.result)return this.ws(e,n,a,s).next((p=>{c.result=p}))})).next((()=>{if(c.result)return;const p=new K0;return this.Ss(e,n,p).next((g=>{if(c.result=g,this.Vs)return this.bs(e,n,p,g.size)}))})).next((()=>c.result))}bs(e,n,s,a){return s.documentReadCount<this.fs?(Ws()<=Te.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",oa(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),z.resolve()):(Ws()<=Te.DEBUG&&ie("QueryEngine","Query:",oa(n),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.gs*a?(Ws()<=Te.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",oa(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,$i(n))):z.resolve())}ys(e,n){if(Sm(n))return z.resolve(null);let s=$i(n);return this.indexManager.getIndexType(e,s).next((a=>a===0?null:(n.limit!==null&&a===1&&(n=Hh(n,null,"F"),s=$i(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next((c=>{const p=Vt(...c);return this.ps.getDocuments(e,p).next((g=>this.indexManager.getMinOffset(e,s).next((_=>{const E=this.Ds(n,g);return this.Cs(n,E,p,_.readTime)?this.ys(e,Hh(n,null,"F")):this.vs(e,E,n,_)}))))})))))}ws(e,n,s,a){return Sm(n)||a.isEqual(We.min())?z.resolve(null):this.ps.getDocuments(e,s).next((c=>{const p=this.Ds(n,c);return this.Cs(n,p,s,a)?z.resolve(null):(Ws()<=Te.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),oa(n)),this.vs(e,p,n,Tw(a,ga)).next((g=>g)))}))}Ds(e,n){let s=new At(Jw(e));return n.forEach(((a,c)=>{yf(e,c)&&(s=s.add(c))})),s}Cs(e,n,s,a){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const c=e.limitType==="F"?n.last():n.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(a)>0)}Ss(e,n,s){return Ws()<=Te.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",oa(n)),this.ps.getDocumentsMatchingQuery(e,n,ai.min(),s)}vs(e,n,s,a){return this.ps.getDocumentsMatchingQuery(e,s,a).next((c=>(n.forEach((p=>{c=c.insert(p.key,p)})),c)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0="LocalStore";class J0{constructor(e,n,s,a){this.persistence=e,this.Fs=n,this.serializer=a,this.Ms=new Xt(Oe),this.xs=new Ji((c=>mf(c)),gf),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new b0(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function Y0(i,e,n,s){return new J0(i,e,n,s)}async function dy(i,e){const n=je(i);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let a;return n.mutationQueue.getAllMutationBatches(s).next((c=>(a=c,n.Bs(e),n.mutationQueue.getAllMutationBatches(s)))).next((c=>{const p=[],g=[];let _=Vt();for(const E of a){p.push(E.batchId);for(const C of E.mutations)_=_.add(C.key)}for(const E of c){g.push(E.batchId);for(const C of E.mutations)_=_.add(C.key)}return n.localDocuments.getDocuments(s,_).next((E=>({Ls:E,removedBatchIds:p,addedBatchIds:g})))}))}))}function Z0(i,e){const n=je(i);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const a=e.batch.keys(),c=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(g,_,E,C){const D=E.batch,M=D.keys();let K=z.resolve();return M.forEach((Q=>{K=K.next((()=>C.getEntry(_,Q))).next((Y=>{const X=E.docVersions.get(Q);Xe(X!==null,48541),Y.version.compareTo(X)<0&&(D.applyToRemoteDocument(Y,E),Y.isValidDocument()&&(Y.setReadTime(E.commitVersion),C.addEntry(Y)))}))})),K.next((()=>g.mutationQueue.removeMutationBatch(_,D)))})(n,s,e,c).next((()=>c.apply(s))).next((()=>n.mutationQueue.performConsistencyCheck(s))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(g){let _=Vt();for(let E=0;E<g.mutationResults.length;++E)g.mutationResults[E].transformResults.length>0&&(_=_.add(g.batch.mutations[E].key));return _})(e)))).next((()=>n.localDocuments.getDocuments(s,a)))}))}function eT(i){const e=je(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function tT(i,e){const n=je(i);return n.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=cf),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}class xm{constructor(){this.activeTargetIds=r0()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nT{constructor(){this.Mo=new xm,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,s){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new xm,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm="ConnectivityMonitor";class Lm{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ie(Vm,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ie(Vm,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tu=null;function Kh(){return tu===null?tu=(function(){return 268435456+Math.round(2147483648*Math.random())})():tu++,"0x"+tu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh="RestConnection",iT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class sT{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${s}/databases/${a}`,this.Wo=this.databaseId.database===yu?`project_id=${s}`:`project_id=${s}&database_id=${a}`}Go(e,n,s,a,c){const p=Kh(),g=this.zo(e,n.toUriEncodedString());ie(Rh,`Sending RPC '${e}' ${p}:`,g,s);const _={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(_,a,c);const{host:E}=new URL(g),C=so(E);return this.Jo(e,g,_,s,C).then((D=>(ie(Rh,`Received RPC '${e}' ${p}: `,D),D)),(D=>{throw Vu(Rh,`RPC '${e}' ${p} failed with error: `,D,"url: ",g,"request:",s),D}))}Ho(e,n,s,a,c,p){return this.Go(e,n,s,a,c)}jo(e,n,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ao})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((a,c)=>e[c]=a)),s&&s.headers.forEach(((a,c)=>e[c]=a))}zo(e,n){const s=iT[e];return`${this.Uo}/v1/${n}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot="WebChannelConnection";class aT extends sT{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,s,a,c){const p=Kh();return new Promise(((g,_)=>{const E=new Rg;E.setWithCredentials(!0),E.listenOnce(kg.COMPLETE,(()=>{try{switch(E.getLastErrorCode()){case iu.NO_ERROR:const D=E.getResponseJson();ie(Ot,`XHR for RPC '${e}' ${p} received:`,JSON.stringify(D)),g(D);break;case iu.TIMEOUT:ie(Ot,`RPC '${e}' ${p} timed out`),_(new he(W.DEADLINE_EXCEEDED,"Request time out"));break;case iu.HTTP_ERROR:const M=E.getStatus();if(ie(Ot,`RPC '${e}' ${p} failed with status:`,M,"response text:",E.getResponseText()),M>0){let K=E.getResponseJson();Array.isArray(K)&&(K=K[0]);const Q=K?.error;if(Q&&Q.status&&Q.message){const Y=(function(ye){const pe=ye.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(pe)>=0?pe:W.UNKNOWN})(Q.status);_(new he(Y,Q.message))}else _(new he(W.UNKNOWN,"Server responded with status "+E.getStatus()))}else _(new he(W.UNAVAILABLE,"Connection failed."));break;default:ve(9055,{l_:e,streamId:p,h_:E.getLastErrorCode(),P_:E.getLastError()})}}finally{ie(Ot,`RPC '${e}' ${p} completed.`)}}));const C=JSON.stringify(a);ie(Ot,`RPC '${e}' ${p} sending request:`,a),E.send(n,"POST",C,s,15)}))}T_(e,n,s){const a=Kh(),c=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],p=Dg(),g=Ng(),_={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},E=this.longPollingOptions.timeoutSeconds;E!==void 0&&(_.longPollingTimeout=Math.round(1e3*E)),this.useFetchStreams&&(_.useFetchStreams=!0),this.jo(_.initMessageHeaders,n,s),_.encodeInitMessageHeaders=!0;const C=c.join("");ie(Ot,`Creating RPC '${e}' stream ${a}: ${C}`,_);const D=p.createWebChannel(C,_);this.I_(D);let M=!1,K=!1;const Q=new oT({Yo:X=>{K?ie(Ot,`Not sending because RPC '${e}' stream ${a} is closed:`,X):(M||(ie(Ot,`Opening RPC '${e}' stream ${a} transport.`),D.open(),M=!0),ie(Ot,`RPC '${e}' stream ${a} sending:`,X),D.send(X))},Zo:()=>D.close()}),Y=(X,ye,pe)=>{X.listen(ye,(me=>{try{pe(me)}catch(ke){setTimeout((()=>{throw ke}),0)}}))};return Y(D,aa.EventType.OPEN,(()=>{K||(ie(Ot,`RPC '${e}' stream ${a} transport opened.`),Q.o_())})),Y(D,aa.EventType.CLOSE,(()=>{K||(K=!0,ie(Ot,`RPC '${e}' stream ${a} transport closed`),Q.a_(),this.E_(D))})),Y(D,aa.EventType.ERROR,(X=>{K||(K=!0,Vu(Ot,`RPC '${e}' stream ${a} transport errored. Name:`,X.name,"Message:",X.message),Q.a_(new he(W.UNAVAILABLE,"The operation could not be completed")))})),Y(D,aa.EventType.MESSAGE,(X=>{if(!K){const ye=X.data[0];Xe(!!ye,16349);const pe=ye,me=pe?.error||pe[0]?.error;if(me){ie(Ot,`RPC '${e}' stream ${a} received error:`,me);const ke=me.status;let tt=(function(T){const S=it[T];if(S!==void 0)return m0(S)})(ke),xe=me.message;tt===void 0&&(tt=W.INTERNAL,xe="Unknown error status: "+ke+" with message "+me.message),K=!0,Q.a_(new he(tt,xe)),D.close()}else ie(Ot,`RPC '${e}' stream ${a} received:`,ye),Q.u_(ye)}})),Y(g,Pg.STAT_EVENT,(X=>{X.stat===Uh.PROXY?ie(Ot,`RPC '${e}' stream ${a} detected buffering proxy`):X.stat===Uh.NOPROXY&&ie(Ot,`RPC '${e}' stream ${a} detected no buffering proxy`)})),setTimeout((()=>{Q.__()}),0),Q}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function kh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(i){return new g0(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e,n,s=1e3,a=1.5,c=6e4){this.Mi=e,this.timerId=n,this.d_=s,this.A_=a,this.R_=c,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),a=Math.max(0,n-s);a>0&&ie("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,a,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm="PersistentStream";class lT{constructor(e,n,s,a,c,p,g,_){this.Mi=e,this.S_=s,this.b_=a,this.connection=c,this.authCredentialsProvider=p,this.appCheckCredentialsProvider=g,this.listener=_,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new py(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===W.RESOURCE_EXHAUSTED?(Gi(n.toString()),Gi("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,a])=>{this.D_===n&&this.G_(s,a)}),(s=>{e((()=>{const a=new he(W.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(a)}))}))}G_(e,n){const s=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((a=>{s((()=>this.z_(a)))})),this.stream.onMessage((a=>{s((()=>++this.F_==1?this.J_(a):this.onNext(a)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ie(Mm,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(ie(Mm,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class uT extends lT{constructor(e,n,s,a,c,p){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,a,p),this.serializer=c}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Xe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Xe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Xe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=S0(e.writeResults,e.commitTime),s=Ks(e.commitTime);return this.listener.na(s,n)}ra(){const e={};e.database=w0(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((s=>I0(this.serializer,s)))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{}class hT extends cT{constructor(e,n,s,a){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=a,this.ia=!1}sa(){if(this.ia)throw new he(W.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,s,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,p])=>this.connection.Go(e,qh(n,s),a,c,p))).catch((c=>{throw c.name==="FirebaseError"?(c.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new he(W.UNKNOWN,c.toString())}))}Ho(e,n,s,a,c){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([p,g])=>this.connection.Ho(e,qh(n,s),a,p,g,c))).catch((p=>{throw p.name==="FirebaseError"?(p.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),p):new he(W.UNKNOWN,p.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class fT{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Gi(n),this.aa=!1):ie("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra="RemoteStore";class dT{constructor(e,n,s,a,c){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=c,this.Aa.Oo((p=>{s.enqueueAndForget((async()=>{Pa(this)&&(ie(Ra,"Restarting streams for network reachability change."),await(async function(_){const E=je(_);E.Ea.add(4),await ka(E),E.Ra.set("Unknown"),E.Ea.delete(4),await bu(E)})(this))}))})),this.Ra=new fT(s,a)}}async function bu(i){if(Pa(i))for(const e of i.da)await e(!0)}async function ka(i){for(const e of i.da)await e(!1)}function Pa(i){return je(i).Ea.size===0}async function my(i,e,n){if(!Aa(e))throw e;i.Ea.add(1),await ka(i),i.Ra.set("Offline"),n||(n=()=>eT(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{ie(Ra,"Retrying IndexedDB access"),await n(),i.Ea.delete(1),await bu(i)}))}function gy(i,e){return e().catch((n=>my(i,n,e)))}async function ju(i){const e=je(i),n=ui(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:cf;for(;pT(e);)try{const a=await tT(e.localStore,s);if(a===null){e.Ta.length===0&&n.L_();break}s=a.batchId,mT(e,a)}catch(a){await my(e,a)}yy(e)&&_y(e)}function pT(i){return Pa(i)&&i.Ta.length<10}function mT(i,e){i.Ta.push(e);const n=ui(i);n.O_()&&n.X_&&n.ea(e.mutations)}function yy(i){return Pa(i)&&!ui(i).x_()&&i.Ta.length>0}function _y(i){ui(i).start()}async function gT(i){ui(i).ra()}async function yT(i){const e=ui(i);for(const n of i.Ta)e.ea(n.mutations)}async function _T(i,e,n){const s=i.Ta.shift(),a=vf.from(s,e,n);await gy(i,(()=>i.remoteSyncer.applySuccessfulWrite(a))),await ju(i)}async function vT(i,e){e&&ui(i).X_&&await(async function(s,a){if((function(p){return p0(p)&&p!==W.ABORTED})(a.code)){const c=s.Ta.shift();ui(s).B_(),await gy(s,(()=>s.remoteSyncer.rejectFailedWrite(c.batchId,a))),await ju(s)}})(i,e),yy(i)&&_y(i)}async function Um(i,e){const n=je(i);n.asyncQueue.verifyOperationInProgress(),ie(Ra,"RemoteStore received new credentials");const s=Pa(n);n.Ea.add(3),await ka(n),s&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await bu(n)}async function ET(i,e){const n=je(i);e?(n.Ea.delete(2),await bu(n)):e||(n.Ea.add(2),await ka(n),n.Ra.set("Unknown"))}function ui(i){return i.fa||(i.fa=(function(n,s,a){const c=je(n);return c.sa(),new uT(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,a)})(i.datastore,i.asyncQueue,{Xo:()=>Promise.resolve(),t_:gT.bind(null,i),r_:vT.bind(null,i),ta:yT.bind(null,i),na:_T.bind(null,i)}),i.da.push((async e=>{e?(i.fa.B_(),await ju(i)):(await i.fa.stop(),i.Ta.length>0&&(ie(Ra,`Stopping write stream with ${i.Ta.length} pending writes`),i.Ta=[]))}))),i.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,n,s,a,c){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=a,this.removalCallback=c,this.deferred=new Bi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((p=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,a,c){const p=Date.now()+s,g=new If(e,n,p,a,c);return g.start(s),g}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new he(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vy(i,e){if(Gi("AsyncQueue",`${e}: ${i}`),Aa(i))return new he(W.UNAVAILABLE,`${e}: ${i}`);throw i}class wT{constructor(){this.queries=Fm(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const a=je(n),c=a.queries;a.queries=Fm(),c.forEach(((p,g)=>{for(const _ of g.Sa)_.onError(s)}))})(this,new he(W.ABORTED,"Firestore shutting down"))}}function Fm(){return new Ji((i=>Jg(i)),Xg)}function TT(i){i.Ca.forEach((e=>{e.next()}))}var bm,jm;(jm=bm||(bm={})).Ma="default",jm.Cache="cache";const IT="SyncEngine";class ST{constructor(e,n,s,a,c,p){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=a,this.currentUser=c,this.maxConcurrentLimboResolutions=p,this.Pu={},this.Tu=new Ji((g=>Jg(g)),Xg),this.Iu=new Map,this.Eu=new Set,this.du=new Xt(ge.comparator),this.Au=new Map,this.Ru=new Ef,this.Vu={},this.mu=new Map,this.fu=io.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function AT(i,e,n){const s=PT(i);try{const a=await(function(p,g){const _=je(p),E=qe.now(),C=g.reduce(((K,Q)=>K.add(Q.key)),Vt());let D,M;return _.persistence.runTransaction("Locally write mutations","readwrite",(K=>{let Q=wu(),Y=Vt();return _.Ns.getEntries(K,C).next((X=>{Q=X,Q.forEach(((ye,pe)=>{pe.isValidDocument()||(Y=Y.add(ye))}))})).next((()=>_.localDocuments.getOverlayedDocuments(K,Q))).next((X=>{D=X;const ye=[];for(const pe of g){const me=c0(pe,D.get(pe.key).overlayedDocument);me!=null&&ye.push(new Yi(pe.key,me,$g(me.value.mapValue),vr.exists(!0)))}return _.mutationQueue.addMutationBatch(K,E,ye,g)})).next((X=>{M=X;const ye=X.applyToLocalDocumentSet(D,Y);return _.documentOverlayCache.saveOverlays(K,X.batchId,ye)}))})).then((()=>({batchId:M.batchId,changes:Zg(D)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),(function(p,g,_){let E=p.Vu[p.currentUser.toKey()];E||(E=new Xt(Oe)),E=E.insert(g,_),p.Vu[p.currentUser.toKey()]=E})(s,a.batchId,n),await zu(s,a.changes),await ju(s.remoteStore)}catch(a){const c=vy(a,"Failed to persist write");n.reject(c)}}function zm(i,e,n){const s=je(i);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const a=[];s.Tu.forEach(((c,p)=>{const g=p.view.va(e);g.snapshot&&a.push(g.snapshot)})),(function(p,g){const _=je(p);_.onlineState=g;let E=!1;_.queries.forEach(((C,D)=>{for(const M of D.Sa)M.va(g)&&(E=!0)})),E&&TT(_)})(s.eventManager,e),a.length&&s.Pu.H_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function CT(i,e){const n=je(i),s=e.batch.batchId;try{const a=await Z0(n.localStore,e);wy(n,s,null),Ey(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await zu(n,a)}catch(a){await lf(a)}}async function RT(i,e,n){const s=je(i);try{const a=await(function(p,g){const _=je(p);return _.persistence.runTransaction("Reject batch","readwrite-primary",(E=>{let C;return _.mutationQueue.lookupMutationBatch(E,g).next((D=>(Xe(D!==null,37113),C=D.keys(),_.mutationQueue.removeMutationBatch(E,D)))).next((()=>_.mutationQueue.performConsistencyCheck(E))).next((()=>_.documentOverlayCache.removeOverlaysForBatchId(E,C,g))).next((()=>_.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(E,C))).next((()=>_.localDocuments.getDocuments(E,C)))}))})(s.localStore,e);wy(s,e,n),Ey(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await zu(s,a)}catch(a){await lf(a)}}function Ey(i,e){(i.mu.get(e)||[]).forEach((n=>{n.resolve()})),i.mu.delete(e)}function wy(i,e,n){const s=je(i);let a=s.Vu[s.currentUser.toKey()];if(a){const c=a.get(e);c&&(n?c.reject(n):c.resolve(),a=a.remove(e)),s.Vu[s.currentUser.toKey()]=a}}async function zu(i,e,n){const s=je(i),a=[],c=[],p=[];s.Tu.isEmpty()||(s.Tu.forEach(((g,_)=>{p.push(s.pu(_,e,n).then((E=>{if((E||n)&&s.isPrimaryClient){const C=E?!E.fromCache:n?.targetChanges.get(_.targetId)?.current;s.sharedClientState.updateQueryState(_.targetId,C?"current":"not-current")}if(E){a.push(E);const C=Tf.As(_.targetId,E);c.push(C)}})))})),await Promise.all(p),s.Pu.H_(a),await(async function(_,E){const C=je(_);try{await C.persistence.runTransaction("notifyLocalViewChanges","readwrite",(D=>z.forEach(E,(M=>z.forEach(M.Es,(K=>C.persistence.referenceDelegate.addReference(D,M.targetId,K))).next((()=>z.forEach(M.ds,(K=>C.persistence.referenceDelegate.removeReference(D,M.targetId,K)))))))))}catch(D){if(!Aa(D))throw D;ie(X0,"Failed to update sequence numbers: "+D)}for(const D of E){const M=D.targetId;if(!D.fromCache){const K=C.Ms.get(M),Q=K.snapshotVersion,Y=K.withLastLimboFreeSnapshotVersion(Q);C.Ms=C.Ms.insert(M,Y)}}})(s.localStore,c))}async function kT(i,e){const n=je(i);if(!n.currentUser.isEqual(e)){ie(IT,"User change. New user:",e.toKey());const s=await dy(n.localStore,e);n.currentUser=e,(function(c,p){c.mu.forEach((g=>{g.forEach((_=>{_.reject(new he(W.CANCELLED,p))}))})),c.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await zu(n,s.Ls)}}function PT(i){const e=je(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=CT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=RT.bind(null,e),e}class Au{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Fu(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return Y0(this.persistence,new Q0,e.initialUser,this.serializer)}Cu(e){return new fy(wf.mi,this.serializer)}Du(e){return new nT}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Au.provider={build:()=>new Au};class NT extends Au{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Xe(this.persistence.referenceDelegate instanceof Su,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new V0(s,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Qt.withCacheSize(this.cacheSizeBytes):Qt.DEFAULT;return new fy((s=>Su.mi(s,n)),this.serializer)}}class Qh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>zm(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=kT.bind(null,this.syncEngine),await ET(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new wT})()}createDatastore(e){const n=Fu(e.databaseInfo.databaseId),s=(function(c){return new aT(c)})(e.databaseInfo);return(function(c,p,g,_){return new hT(c,p,g,_)})(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return(function(s,a,c,p,g){return new dT(s,a,c,p,g)})(this.localStore,this.datastore,e.asyncQueue,(n=>zm(this.syncEngine,n,0)),(function(){return Lm.v()?new Lm:new rT})())}createSyncEngine(e,n){return(function(a,c,p,g,_,E,C){const D=new ST(a,c,p,g,_,E);return C&&(D.gu=!0),D})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const s=je(n);ie(Ra,"RemoteStore shutting down."),s.Ea.add(5),await ka(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Qh.provider={build:()=>new Qh};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci="FirestoreClient";class DT{constructor(e,n,s,a,c){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=a,this.user=xt.UNAUTHENTICATED,this.clientId=of.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(s,(async p=>{ie(ci,"Received user=",p.uid),await this.authCredentialListener(p),this.user=p})),this.appCheckCredentials.start(s,(p=>(ie(ci,"Received new app check token=",p),this.appCheckCredentialListener(p,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Bi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=vy(n,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Ph(i,e){i.asyncQueue.verifyOperationInProgress(),ie(ci,"Initializing OfflineComponentProvider");const n=i.configuration;await e.initialize(n);let s=n.initialUser;i.setCredentialChangeListener((async a=>{s.isEqual(a)||(await dy(e.localStore,a),s=a)})),e.persistence.setDatabaseDeletedListener((()=>i.terminate())),i._offlineComponents=e}async function Bm(i,e){i.asyncQueue.verifyOperationInProgress();const n=await OT(i);ie(ci,"Initializing OnlineComponentProvider"),await e.initialize(n,i.configuration),i.setCredentialChangeListener((s=>Um(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,a)=>Um(e.remoteStore,a))),i._onlineComponents=e}async function OT(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ie(ci,"Using user provided OfflineComponentProvider");try{await Ph(i,i._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(a){return a.name==="FirebaseError"?a.code===W.FAILED_PRECONDITION||a.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11})(n))throw n;Vu("Error using user provided cache. Falling back to memory cache: "+n),await Ph(i,new Au)}}else ie(ci,"Using default OfflineComponentProvider"),await Ph(i,new NT(void 0));return i._offlineComponents}async function xT(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ie(ci,"Using user provided OnlineComponentProvider"),await Bm(i,i._uninitializedComponentsProvider._online)):(ie(ci,"Using default OnlineComponentProvider"),await Bm(i,new Qh))),i._onlineComponents}function VT(i){return xT(i).then((e=>e.syncEngine))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy="firestore.googleapis.com",Hm=!0;class Wm{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new he(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Iy,this.ssl=Hm}else this.host=e.host,this.ssl=e.ssl??Hm;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=hy;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<O0)throw new he(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ww("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ty(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new he(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new he(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new he(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,a){return s.timeoutSeconds===a.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Sf{constructor(e,n,s,a){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wm({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new he(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new he(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wm(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new cw;switch(s.type){case"firstParty":return new pw(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new he(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=$m.get(n);s&&(ie("ComponentProvider","Removing Datastore"),$m.delete(n),s.terminate())})(this),Promise.resolve()}}function LT(i,e,n,s={}){i=bh(i,Sf);const a=so(e),c=i._getSettings(),p={...c,emulatorOptions:i._getEmulatorOptions()},g=`${e}:${n}`;a&&(vg(`https://${g}`),Eg("Firestore",!0)),c.host!==Iy&&c.host!==g&&Vu("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _={...c,host:g,ssl:a,emulatorOptions:s};if(!Hi(_,p)&&(i._setSettings(_),s.mockUserToken)){let E,C;if(typeof s.mockUserToken=="string")E=s.mockUserToken,C=xt.MOCK_USER;else{E=Lv(s.mockUserToken,i._app?.options.projectId);const D=s.mockUserToken.sub||s.mockUserToken.user_id;if(!D)throw new he(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");C=new xt(D)}i._authCredentials=new hw(new xg(E,C))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Af(this.firestore,e,this._query)}}class Lt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ea(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Lt(this.firestore,e,this._key)}toJSON(){return{type:Lt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(Sa(n,Lt._jsonSchema))return new Lt(e,s||null,new ge(et.fromString(n.referencePath)))}}Lt._jsonSchemaVersion="firestore/documentReference/1.0",Lt._jsonSchema={type:st("string",Lt._jsonSchemaVersion),referencePath:st("string")};class Ea extends Af{constructor(e,n,s){super(e,n,Kw(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Lt(this.firestore,null,new ge(e))}withConverter(e){return new Ea(this.firestore,e,this._path)}}function MT(i,e,...n){if(i=Mn(i),arguments.length===1&&(e=of.newId()),Ew("doc","path",e),i instanceof Sf){const s=et.fromString(e,...n);return dm(s),new Lt(i,null,new ge(s))}{if(!(i instanceof Lt||i instanceof Ea))throw new he(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(et.fromString(e,...n));return dm(s),new Lt(i.firestore,i instanceof Ea?i.converter:null,new ge(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm="AsyncQueue";class Gm{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new py(this,"async_queue_retry"),this._c=()=>{const s=kh();s&&ie(qm,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=kh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=kh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new Bi;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Aa(e))throw e;ie(qm,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Gi("INTERNAL UNHANDLED ERROR: ",Km(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const a=If.createAndSchedule(this,e,n,s,(c=>this.hc(c)));return this.tc.push(a),a}uc(){this.nc&&ve(47125,{Pc:Km(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Km(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class Sy extends Sf{constructor(e,n,s,a){super(e,n,s,a),this.type="firestore",this._queue=new Gm,this._persistenceKey=a?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Gm(e),this._firestoreClient=void 0,await e}}}function UT(i,e){const n=typeof i=="object"?i:Sg(),s=typeof i=="string"?i:yu,a=nf(n,"firestore").getImmediate({identifier:s});if(!a._initialized){const c=xv("firestore");c&&LT(a,...c)}return a}function FT(i){if(i._terminated)throw new he(W.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||bT(i),i._firestoreClient}function bT(i){const e=i._freezeSettings(),n=(function(a,c,p,g){return new xw(a,c,p,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,Ty(g.experimentalLongPollingOptions),g.useFetchStreams,g.isUsingEmulator)})(i._databaseId,i._app?.options.appId||"",i._persistenceKey,e);i._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(i._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),i._firestoreClient=new DT(i._authCredentials,i._appCheckCredentials,i._queue,n,i._componentsProvider&&(function(a){const c=a?._online.build();return{_offline:a?._offline.build(c),_online:c}})(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xn(Jn.fromBase64String(e))}catch(n){throw new he(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new xn(Jn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:xn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Sa(e,xn._jsonSchema))return xn.fromBase64String(e.bytes)}}xn._jsonSchemaVersion="firestore/bytes/1.0",xn._jsonSchema={type:st("string",xn._jsonSchemaVersion),bytes:st("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new he(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new St(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new he(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new he(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Oe(this._lat,e._lat)||Oe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Er._jsonSchemaVersion}}static fromJSON(e){if(Sa(e,Er._jsonSchema))return new Er(e.latitude,e.longitude)}}Er._jsonSchemaVersion="firestore/geoPoint/1.0",Er._jsonSchema={type:st("string",Er._jsonSchemaVersion),latitude:st("number"),longitude:st("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,a){if(s.length!==a.length)return!1;for(let c=0;c<s.length;++c)if(s[c]!==a[c])return!1;return!0})(this._values,e._values)}toJSON(){return{type:wr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Sa(e,wr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new wr(e.vectorValues);throw new he(W.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}wr._jsonSchemaVersion="firestore/vectorValue/1.0",wr._jsonSchema={type:st("string",wr._jsonSchemaVersion),vectorValues:st("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT=/^__.*__$/;class zT{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Yi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ca(e,this.data,n,this.fieldTransforms)}}function Cy(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve(40011,{Ac:i})}}class Rf{constructor(e,n,s,a,c,p){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=a,c===void 0&&this.Rc(),this.fieldTransforms=c||[],this.fieldMask=p||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Rf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.gc(e),s}yc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Cu(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Cy(this.Ac)&&jT.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class BT{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Fu(e)}Cc(e,n,s,a=!1){return new Rf({Ac:e,methodName:n,Dc:s,path:St.emptyPath(),fc:!1,bc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $T(i){const e=i._freezeSettings(),n=Fu(i._databaseId);return new BT(i._databaseId,!!e.ignoreUndefinedProperties,n)}function HT(i,e,n,s,a,c={}){const p=i.Cc(c.merge||c.mergeFields?2:0,e,n,a);Ny("Data must be an object, but it was:",p,s);const g=ky(s,p);let _,E;if(c.merge)_=new Vn(p.fieldMask),E=p.fieldTransforms;else if(c.mergeFields){const C=[];for(const D of c.mergeFields){const M=WT(e,D,n);if(!p.contains(M))throw new he(W.INVALID_ARGUMENT,`Field '${M}' is specified in your field mask but missing from your input data.`);GT(C,M)||C.push(M)}_=new Vn(C),E=p.fieldTransforms.filter((D=>_.covers(D.field)))}else _=null,E=p.fieldTransforms;return new zT(new On(g),_,E)}function Ry(i,e){if(Py(i=Mn(i)))return Ny("Unsupported field value:",e,i),ky(i,e);if(i instanceof Ay)return(function(s,a){if(!Cy(a.Ac))throw a.Sc(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Sc(`${s._methodName}() is not currently supported inside arrays`);const c=s._toFieldTransform(a);c&&a.fieldTransforms.push(c)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,a){const c=[];let p=0;for(const g of s){let _=Ry(g,a.wc(p));_==null&&(_={nullValue:"NULL_VALUE"}),c.push(_),p++}return{arrayValue:{values:c}}})(i,e)}return(function(s,a){if((s=Mn(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return i0(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const c=qe.fromDate(s);return{timestampValue:Wh(a.serializer,c)}}if(s instanceof qe){const c=new qe(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Wh(a.serializer,c)}}if(s instanceof Er)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof xn)return{bytesValue:y0(a.serializer,s._byteString)};if(s instanceof Lt){const c=a.databaseId,p=s.firestore._databaseId;if(!p.isEqual(c))throw a.Sc(`Document reference is for database ${p.projectId}/${p.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:uy(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof wr)return(function(p,g){return{mapValue:{fields:{[zg]:{stringValue:Bg},[jh]:{arrayValue:{values:p.toArray().map((E=>{if(typeof E!="number")throw g.Sc("VectorValues must only contain numeric values.");return _f(g.serializer,E)}))}}}}}})(s,a);throw a.Sc(`Unsupported field value: ${af(s)}`)})(i,e)}function ky(i,e){const n={};return Mg(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):lo(i,((s,a)=>{const c=Ry(a,e.mc(s));c!=null&&(n[s]=c)})),{mapValue:{fields:n}}}function Py(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof qe||i instanceof Er||i instanceof xn||i instanceof Lt||i instanceof Ay||i instanceof wr)}function Ny(i,e,n){if(!Py(n)||!Vg(n)){const s=af(n);throw s==="an object"?e.Sc(i+" a custom object"):e.Sc(i+" "+s)}}function WT(i,e,n){if((e=Mn(e))instanceof Cf)return e._internalPath;if(typeof e=="string")return Dy(i,e);throw Cu("Field path arguments must be of type string or ",i,!1,void 0,n)}const qT=new RegExp("[~\\*/\\[\\]]");function Dy(i,e,n){if(e.search(qT)>=0)throw Cu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,n);try{return new Cf(...e.split("."))._internalPath}catch{throw Cu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,n)}}function Cu(i,e,n,s,a){const c=s&&!s.isEmpty(),p=a!==void 0;let g=`Function ${e}() called with invalid data`;n&&(g+=" (via `toFirestore()`)"),g+=". ";let _="";return(c||p)&&(_+=" (found",c&&(_+=` in field ${s}`),p&&(_+=` in document ${a}`),_+=")"),new he(W.INVALID_ARGUMENT,g+i+_)}function GT(i,e){return i.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e,n,s,a,c){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=a,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new Lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new KT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(xy("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class KT extends Oy{data(){return super.data()}}function xy(i,e){return typeof e=="string"?Dy(i,e):e instanceof Cf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(i,e,n){let s;return s=i?i.toFirestore(e):e,s}class nu{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Qs extends Oy{constructor(e,n,s,a,c,p){super(e,n,s,a,p),this._firestore=e,this._firestoreImpl=e,this.metadata=c}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new lu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(xy("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new he(W.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Qs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Qs._jsonSchemaVersion="firestore/documentSnapshot/1.0",Qs._jsonSchema={type:st("string",Qs._jsonSchemaVersion),bundleSource:st("string","DocumentSnapshot"),bundleName:st("string"),bundle:st("string")};class lu extends Qs{data(e={}){return super.data(e)}}class da{constructor(e,n,s,a){this._firestore=e,this._userDataWriter=n,this._snapshot=a,this.metadata=new nu(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((s=>{e.call(n,new lu(this._firestore,this._userDataWriter,s.key,s,new nu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new he(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(a,c){if(a._snapshot.oldDocs.isEmpty()){let p=0;return a._snapshot.docChanges.map((g=>{const _=new lu(a._firestore,a._userDataWriter,g.doc.key,g.doc,new nu(a._snapshot.mutatedKeys.has(g.doc.key),a._snapshot.fromCache),a.query.converter);return g.doc,{type:"added",doc:_,oldIndex:-1,newIndex:p++}}))}{let p=a._snapshot.oldDocs;return a._snapshot.docChanges.filter((g=>c||g.type!==3)).map((g=>{const _=new lu(a._firestore,a._userDataWriter,g.doc.key,g.doc,new nu(a._snapshot.mutatedKeys.has(g.doc.key),a._snapshot.fromCache),a.query.converter);let E=-1,C=-1;return g.type!==0&&(E=p.indexOf(g.doc.key),p=p.delete(g.doc.key)),g.type!==1&&(p=p.add(g.doc),C=p.indexOf(g.doc.key)),{type:XT(g.type),doc:_,oldIndex:E,newIndex:C}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new he(W.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=da._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=of.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],a=[];return this.docs.forEach((c=>{c._document!==null&&(n.push(c._document),s.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),a.push(c.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function XT(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve(61501,{type:i})}}da._jsonSchemaVersion="firestore/querySnapshot/1.0",da._jsonSchema={type:st("string",da._jsonSchemaVersion),bundleSource:st("string","QuerySnapshot"),bundleName:st("string"),bundle:st("string")};function JT(i,e,n){i=bh(i,Lt);const s=bh(i.firestore,Sy),a=QT(i.converter,e);return YT(s,[HT($T(s),"setDoc",i._key,a,i.converter!==null,n).toMutation(i._key,vr.none())])}function YT(i,e){return(function(s,a){const c=new Bi;return s.asyncQueue.enqueueAndForget((async()=>AT(await VT(s),a,c))),c.promise})(FT(i),e)}(function(e,n=!0){(function(a){ao=a})(oo),Zs(new Wi("firestore",((s,{instanceIdentifier:a,options:c})=>{const p=s.getProvider("app").getImmediate(),g=new Sy(new fw(s.getProvider("auth-internal")),new mw(p,s.getProvider("app-check-internal")),(function(E,C){if(!Object.prototype.hasOwnProperty.apply(E.options,["projectId"]))throw new he(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _u(E.options.projectId,C)})(p,a),p);return c={useFetchStreams:n,...c},g._setSettings(c),g}),"PUBLIC").setMultipleInstances(!0)),oi(um,cm,e),oi(um,cm,"esm2020")})();function Vy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ZT=Vy,Ly=new Ta("auth","Firebase",Vy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru=new ef("@firebase/auth");function eI(i,...e){Ru.logLevel<=Te.WARN&&Ru.warn(`Auth (${oo}): ${i}`,...e)}function uu(i,...e){Ru.logLevel<=Te.ERROR&&Ru.error(`Auth (${oo}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(i,...e){throw kf(i,...e)}function Qn(i,...e){return kf(i,...e)}function My(i,e,n){const s={...ZT(),[e]:n};return new Ta("auth","Firebase",s).create(e,{appName:i.name})}function Tr(i){return My(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function kf(i,...e){if(typeof i!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(n,...s)}return Ly.create(i,...e)}function de(i,e,...n){if(!i)throw kf(e,...n)}function yr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw uu(e),new Error(e)}function Ar(i,e){i||yr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(){return typeof self<"u"&&self.location?.href||""}function tI(){return Qm()==="http:"||Qm()==="https:"}function Qm(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tI()||zv()||"connection"in navigator)?navigator.onLine:!0}function rI(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ar(n>e,"Short delay should be less than long delay!"),this.isMobile=Fv()||Bv()}get(){return nI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(i,e){Ar(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],oI=new Na(3e4,6e4);function Da(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function uo(i,e,n,s,a={}){return Fy(i,a,async()=>{let c={},p={};s&&(e==="GET"?p=s:c={body:JSON.stringify(s)});const g=Ia({key:i.config.apiKey,...p}).slice(1),_=await i._getAdditionalHeaders();_["Content-Type"]="application/json",i.languageCode&&(_["X-Firebase-Locale"]=i.languageCode);const E={method:e,headers:_,...c};return jv()||(E.referrerPolicy="no-referrer"),i.emulatorConfig&&so(i.emulatorConfig.host)&&(E.credentials="include"),Uy.fetch()(await by(i,i.config.apiHost,n,g),E)})}async function Fy(i,e,n){i._canInitEmulator=!1;const s={...iI,...e};try{const a=new aI(i),c=await Promise.race([n(),a.promise]);a.clearNetworkTimeout();const p=await c.json();if("needConfirmation"in p)throw ru(i,"account-exists-with-different-credential",p);if(c.ok&&!("errorMessage"in p))return p;{const g=c.ok?p.errorMessage:p.error.message,[_,E]=g.split(" : ");if(_==="FEDERATED_USER_ID_ALREADY_LINKED")throw ru(i,"credential-already-in-use",p);if(_==="EMAIL_EXISTS")throw ru(i,"email-already-in-use",p);if(_==="USER_DISABLED")throw ru(i,"user-disabled",p);const C=s[_]||_.toLowerCase().replace(/[_\s]+/g,"-");if(E)throw My(i,C,E);Sr(i,C)}}catch(a){if(a instanceof Rr)throw a;Sr(i,"network-request-failed",{message:String(a)})}}async function Nf(i,e,n,s,a={}){const c=await uo(i,e,n,s,a);return"mfaPendingCredential"in c&&Sr(i,"multi-factor-auth-required",{_serverResponse:c}),c}async function by(i,e,n,s){const a=`${e}${n}?${s}`,c=i,p=c.config.emulator?Pf(i.config,a):`${i.config.apiScheme}://${a}`;return sI.includes(n)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(p).toString():p}class aI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Qn(this.auth,"network-request-failed")),oI.get())})}}function ru(i,e,n){const s={appName:i.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const a=Qn(i,e,s);return a.customData._tokenResponse=n,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lI(i,e){return uo(i,"POST","/v1/accounts:delete",e)}async function ku(i,e){return uo(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uI(i,e=!1){const n=Mn(i),s=await n.getIdToken(e),a=Df(s);de(a&&a.exp&&a.auth_time&&a.iat,n.auth,"internal-error");const c=typeof a.firebase=="object"?a.firebase:void 0,p=c?.sign_in_provider;return{claims:a,token:s,authTime:pa(Nh(a.auth_time)),issuedAtTime:pa(Nh(a.iat)),expirationTime:pa(Nh(a.exp)),signInProvider:p||null,signInSecondFactor:c?.sign_in_second_factor||null}}function Nh(i){return Number(i)*1e3}function Df(i){const[e,n,s]=i.split(".");if(e===void 0||n===void 0||s===void 0)return uu("JWT malformed, contained fewer than 3 sections"),null;try{const a=mg(n);return a?JSON.parse(a):(uu("Failed to decode base64 JWT payload"),null)}catch(a){return uu("Caught error parsing JWT payload as JSON",a?.toString()),null}}function Xm(i){const e=Df(i);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wa(i,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Rr&&cI(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function cI({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=pa(this.lastLoginAt),this.creationTime=pa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pu(i){const e=i.auth,n=await i.getIdToken(),s=await wa(i,ku(e,{idToken:n}));de(s?.users.length,e,"internal-error");const a=s.users[0];i._notifyReloadListener(a);const c=a.providerUserInfo?.length?jy(a.providerUserInfo):[],p=dI(i.providerData,c),g=i.isAnonymous,_=!(i.email&&a.passwordHash)&&!p?.length,E=g?_:!1,C={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:p,metadata:new Jh(a.createdAt,a.lastLoginAt),isAnonymous:E};Object.assign(i,C)}async function fI(i){const e=Mn(i);await Pu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dI(i,e){return[...i.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function jy(i){return i.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pI(i,e){const n=await Fy(i,{},async()=>{const s=Ia({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:c}=i.config,p=await by(i,a,"/v1/token",`key=${c}`),g=await i._getAdditionalHeaders();g["Content-Type"]="application/x-www-form-urlencoded";const _={method:"POST",headers:g,body:s};return i.emulatorConfig&&so(i.emulatorConfig.host)&&(_.credentials="include"),Uy.fetch()(p,_)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function mI(i,e){return uo(i,"POST","/v2/accounts:revokeToken",Da(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){de(e.length!==0,"internal-error");const n=Xm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:a,expiresIn:c}=await pI(e,n);this.updateTokensAndExpiration(s,a,Number(c))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:a,expirationTime:c}=n,p=new Xs;return s&&(de(typeof s=="string","internal-error",{appName:e}),p.refreshToken=s),a&&(de(typeof a=="string","internal-error",{appName:e}),p.accessToken=a),c&&(de(typeof c=="number","internal-error",{appName:e}),p.expirationTime=c),p}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xs,this.toJSON())}_performRefresh(){return yr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(i,e){de(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Ln{constructor({uid:e,auth:n,stsTokenManager:s,...a}){this.providerId="firebase",this.proactiveRefresh=new hI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Jh(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const n=await wa(this,this.stsTokenManager.getToken(this.auth,e));return de(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return uI(this,e)}reload(){return fI(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ln({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Pu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mn(this.auth.app))return Promise.reject(Tr(this.auth));const e=await this.getIdToken();return await wa(this,lI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,a=n.email??void 0,c=n.phoneNumber??void 0,p=n.photoURL??void 0,g=n.tenantId??void 0,_=n._redirectEventId??void 0,E=n.createdAt??void 0,C=n.lastLoginAt??void 0,{uid:D,emailVerified:M,isAnonymous:K,providerData:Q,stsTokenManager:Y}=n;de(D&&Y,e,"internal-error");const X=Xs.fromJSON(this.name,Y);de(typeof D=="string",e,"internal-error"),Zr(s,e.name),Zr(a,e.name),de(typeof M=="boolean",e,"internal-error"),de(typeof K=="boolean",e,"internal-error"),Zr(c,e.name),Zr(p,e.name),Zr(g,e.name),Zr(_,e.name),Zr(E,e.name),Zr(C,e.name);const ye=new Ln({uid:D,auth:e,email:a,emailVerified:M,displayName:s,isAnonymous:K,photoURL:p,phoneNumber:c,tenantId:g,stsTokenManager:X,createdAt:E,lastLoginAt:C});return Q&&Array.isArray(Q)&&(ye.providerData=Q.map(pe=>({...pe}))),_&&(ye._redirectEventId=_),ye}static async _fromIdTokenResponse(e,n,s=!1){const a=new Xs;a.updateFromServerResponse(n);const c=new Ln({uid:n.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await Pu(c),c}static async _fromGetAccountInfoResponse(e,n,s){const a=n.users[0];de(a.localId!==void 0,"internal-error");const c=a.providerUserInfo!==void 0?jy(a.providerUserInfo):[],p=!(a.email&&a.passwordHash)&&!c?.length,g=new Xs;g.updateFromIdToken(s);const _=new Ln({uid:a.localId,auth:e,stsTokenManager:g,isAnonymous:p}),E={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new Jh(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!c?.length};return Object.assign(_,E),_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm=new Map;function _r(i){Ar(i instanceof Function,"Expected a class definition");let e=Jm.get(i);return e?(Ar(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Jm.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}zy.type="NONE";const Ym=zy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(i,e,n){return`firebase:${i}:${e}:${n}`}class Js{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:a,name:c}=this.auth;this.fullUserKey=cu(this.userKey,a.apiKey,c),this.fullPersistenceKey=cu("persistence",a.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ku(this.auth,{idToken:e}).catch(()=>{});return n?Ln._fromGetAccountInfoResponse(this.auth,n,e):null}return Ln._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Js(_r(Ym),e,s);const a=(await Promise.all(n.map(async E=>{if(await E._isAvailable())return E}))).filter(E=>E);let c=a[0]||_r(Ym);const p=cu(s,e.config.apiKey,e.name);let g=null;for(const E of n)try{const C=await E._get(p);if(C){let D;if(typeof C=="string"){const M=await ku(e,{idToken:C}).catch(()=>{});if(!M)break;D=await Ln._fromGetAccountInfoResponse(e,M,C)}else D=Ln._fromJSON(e,C);E!==c&&(g=D),c=E;break}}catch{}const _=a.filter(E=>E._shouldAllowMigration);return!c._shouldAllowMigration||!_.length?new Js(c,e,s):(c=_[0],g&&await c._set(p,g.toJSON()),await Promise.all(n.map(async E=>{if(E!==c)try{await E._remove(p)}catch{}})),new Js(c,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(By(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gy(e))return"Blackberry";if(Ky(e))return"Webos";if($y(e))return"Safari";if((e.includes("chrome/")||Hy(e))&&!e.includes("edge/"))return"Chrome";if(qy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(n);if(s?.length===2)return s[1]}return"Other"}function By(i=Mt()){return/firefox\//i.test(i)}function $y(i=Mt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Hy(i=Mt()){return/crios\//i.test(i)}function Wy(i=Mt()){return/iemobile/i.test(i)}function qy(i=Mt()){return/android/i.test(i)}function Gy(i=Mt()){return/blackberry/i.test(i)}function Ky(i=Mt()){return/webos/i.test(i)}function Of(i=Mt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function gI(i=Mt()){return Of(i)&&!!window.navigator?.standalone}function yI(){return $v()&&document.documentMode===10}function Qy(i=Mt()){return Of(i)||qy(i)||Ky(i)||Gy(i)||/windows phone/i.test(i)||Wy(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(i,e=[]){let n;switch(i){case"Browser":n=Zm(Mt());break;case"Worker":n=`${Zm(Mt())}-${i}`;break;default:n=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${oo}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=c=>new Promise((p,g)=>{try{const _=e(c);p(_)}catch(_){g(_)}});s.onAbort=n,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const a of n)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vI(i,e={}){return uo(i,"GET","/v2/passwordPolicy",Da(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI=6;class wI{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??EI,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),a&&(n.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,a,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e,n,s,a){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new eg(this),this.idTokenSubscription=new eg(this),this.beforeStateQueue=new _I(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ly,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_r(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Js.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ku(this,{idToken:e}),s=await Ln._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(mn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(p,p))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,p=s?._redirectEventId,g=await this.tryRedirectSignIn(e);(!c||c===p)&&g?.user&&(s=g.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Pu(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mn(this.app))return Promise.reject(Tr(this));const n=e?Mn(e):null;return n&&de(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mn(this.app)?Promise.reject(Tr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mn(this.app)?Promise.reject(Tr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_r(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vI(this),n=new wI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ta("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await mI(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_r(e)||this._popupRedirectResolver;de(n,this,"argument-error"),this.redirectPersistenceManager=await Js.create(this,[_r(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,a){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let p=!1;const g=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(g,this,"internal-error"),g.then(()=>{p||c(this.currentUser)}),typeof n=="function"){const _=e.addObserver(n,s,a);return()=>{p=!0,_()}}else{const _=e.addObserver(n);return()=>{p=!0,_()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(mn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&eI(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Oa(i){return Mn(i)}class eg{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jv(n=>this.observer=n)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function II(i){xf=i}function SI(i){return xf.loadJS(i)}function AI(){return xf.gapiScript}function CI(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(i,e){const n=nf(i,"auth");if(n.isInitialized()){const a=n.getImmediate(),c=n.getOptions();if(Hi(c,e??{}))return a;Sr(a,"already-initialized")}return n.initialize({options:e})}function kI(i,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(_r);e?.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e?.popupRedirectResolver)}function PI(i,e,n){const s=Oa(i);de(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,c=Jy(e),{host:p,port:g}=NI(e),_=g===null?"":`:${g}`,E={url:`${c}//${p}${_}/`},C=Object.freeze({host:p,port:g,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){de(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),de(Hi(E,s.config.emulator)&&Hi(C,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=E,s.emulatorConfig=C,s.settings.appVerificationDisabledForTesting=!0,so(p)?(vg(`${c}//${p}${_}`),Eg("Auth",!0)):DI()}function Jy(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function NI(i){const e=Jy(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const c=a[1];return{host:c,port:tg(s.substr(c.length+1))}}else{const[c,p]=s.split(":");return{host:c,port:tg(p)}}}function tg(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function DI(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return yr("not implemented")}_getIdTokenResponse(e){return yr("not implemented")}_linkToIdToken(e,n){return yr("not implemented")}_getReauthenticationResolver(e){return yr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ys(i,e){return Nf(i,"POST","/v1/accounts:signInWithIdp",Da(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI="http://localhost";class Xi extends Yy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Sr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a,...c}=n;if(!s||!a)return null;const p=new Xi(s,a);return p.idToken=c.idToken||void 0,p.accessToken=c.accessToken||void 0,p.secret=c.secret,p.nonce=c.nonce,p.pendingToken=c.pendingToken||null,p}_getIdTokenResponse(e){const n=this.buildRequest();return Ys(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ys(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ys(e,n)}buildRequest(){const e={requestUri:OI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ia(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa extends Zy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends xa{constructor(){super("facebook.com")}static credential(e){return Xi._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ei.credentialFromTaggedObject(e)}static credentialFromError(e){return ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ei.credential(e.oauthAccessToken)}catch{return null}}}ei.FACEBOOK_SIGN_IN_METHOD="facebook.com";ei.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends xa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xi._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return ti.credential(n,s)}catch{return null}}}ti.GOOGLE_SIGN_IN_METHOD="google.com";ti.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends xa{constructor(){super("github.com")}static credential(e){return Xi._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ni.credential(e.oauthAccessToken)}catch{return null}}}ni.GITHUB_SIGN_IN_METHOD="github.com";ni.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends xa{constructor(){super("twitter.com")}static credential(e,n){return Xi._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return ri.credential(n,s)}catch{return null}}}ri.TWITTER_SIGN_IN_METHOD="twitter.com";ri.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xI(i,e){return Nf(i,"POST","/v1/accounts:signUp",Da(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,a=!1){const c=await Ln._fromIdTokenResponse(e,s,a),p=ng(s);return new Cr({user:c,providerId:p,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const a=ng(s);return new Cr({user:e,providerId:a,_tokenResponse:s,operationType:n})}}function ng(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VI(i){if(mn(i.app))return Promise.reject(Tr(i));const e=Oa(i);if(await e._initializationPromise,e.currentUser?.isAnonymous)return new Cr({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await xI(e,{returnSecureToken:!0}),s=await Cr._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu extends Rr{constructor(e,n,s,a){super(n.code,n.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,Nu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,a){return new Nu(e,n,s,a)}}function e_(i,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?Nu._fromErrorAndOperation(i,c,e,s):c})}async function LI(i,e,n=!1){const s=await wa(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return Cr._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MI(i,e,n=!1){const{auth:s}=i;if(mn(s.app))return Promise.reject(Tr(s));const a="reauthenticate";try{const c=await wa(i,e_(s,a,e,i),n);de(c.idToken,s,"internal-error");const p=Df(c.idToken);de(p,s,"internal-error");const{sub:g}=p;return de(i.uid===g,s,"user-mismatch"),Cr._forOperation(i,a,c)}catch(c){throw c?.code==="auth/user-not-found"&&Sr(s,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UI(i,e,n=!1){if(mn(i.app))return Promise.reject(Tr(i));const s="signIn",a=await e_(i,s,e),c=await Cr._fromIdTokenResponse(i,s,a);return n||await i._updateCurrentUser(c.user),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FI(i,e){return Nf(i,"POST","/v1/accounts:signInWithCustomToken",Da(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bI(i,e){if(mn(i.app))return Promise.reject(Tr(i));const n=Oa(i),s=await FI(n,{token:e,returnSecureToken:!0}),a=await Cr._fromIdTokenResponse(n,"signIn",s);return await n._updateCurrentUser(a.user),a}function jI(i,e,n,s){return Mn(i).onIdTokenChanged(e,n,s)}function zI(i,e,n){return Mn(i).beforeAuthStateChanged(e,n)}function BI(i,e,n,s){return Mn(i).onAuthStateChanged(e,n,s)}const Du="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Du,"1"),this.storage.removeItem(Du),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I=1e3,HI=10;class n_ extends t_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Qy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),a=this.localCache[n];s!==a&&e(n,a,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((p,g,_)=>{this.notifyListeners(p,_)});return}const s=e.key;n?this.detachListener():this.stopPolling();const a=()=>{const p=this.storage.getItem(s);!n&&this.localCache[s]===p||this.notifyListeners(s,p)},c=this.storage.getItem(s);yI()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,HI):a()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},$I)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}n_.type="LOCAL";const WI=n_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_ extends t_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}r_.type="SESSION";const i_=r_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qI(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(a=>a.isListeningto(e));if(n)return n;const s=new Bu(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:a,data:c}=n.data,p=this.handlersMap[a];if(!p?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const g=Array.from(p).map(async E=>E(n.origin,c)),_=await qI(g);n.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:_})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(i="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return i+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let c,p;return new Promise((g,_)=>{const E=Vf("",20);a.port1.start();const C=setTimeout(()=>{_(new Error("unsupported_event"))},s);p={messageChannel:a,onMessage(D){const M=D;if(M.data.eventId===E)switch(M.data.status){case"ack":clearTimeout(C),c=setTimeout(()=>{_(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),g(M.data.response);break;default:clearTimeout(C),clearTimeout(c),_(new Error("invalid_response"));break}}},this.handlers.add(p),a.port1.addEventListener("message",p.onMessage),this.target.postMessage({eventType:e,eventId:E,data:n},[a.port2])}).finally(()=>{p&&this.removeMessageHandler(p)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(){return window}function KI(i){Xn().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(){return typeof Xn().WorkerGlobalScope<"u"&&typeof Xn().importScripts=="function"}async function QI(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function XI(){return navigator?.serviceWorker?.controller||null}function JI(){return s_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_="firebaseLocalStorageDb",YI=1,Ou="firebaseLocalStorage",a_="fbase_key";class Va{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $u(i,e){return i.transaction([Ou],e?"readwrite":"readonly").objectStore(Ou)}function ZI(){const i=indexedDB.deleteDatabase(o_);return new Va(i).toPromise()}function Yh(){const i=indexedDB.open(o_,YI);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Ou,{keyPath:a_})}catch(a){n(a)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Ou)?e(s):(s.close(),await ZI(),e(await Yh()))})})}async function rg(i,e,n){const s=$u(i,!0).put({[a_]:e,value:n});return new Va(s).toPromise()}async function e1(i,e){const n=$u(i,!1).get(e),s=await new Va(n).toPromise();return s===void 0?null:s.value}function ig(i,e){const n=$u(i,!0).delete(e);return new Va(n).toPromise()}const t1=800,n1=3;class l_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>n1)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return s_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bu._getInstance(JI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await QI(),!this.activeServiceWorker)return;this.sender=new GI(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||XI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yh();return await rg(e,Du,"1"),await ig(e,Du),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>rg(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>e1(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ig(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const c=$u(a,!1).getAll();return new Va(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:c}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(c)&&(this.notifyListeners(a,c),n.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),n.push(a));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),t1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}l_.type="LOCAL";const r1=l_;new Na(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i1(i,e){return e?_r(e):(de(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf extends Yy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ys(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ys(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ys(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function s1(i){return UI(i.auth,new Lf(i),i.bypassAuthState)}function o1(i){const{auth:e,user:n}=i;return de(n,e,"internal-error"),MI(n,new Lf(i),i.bypassAuthState)}async function a1(i){const{auth:e,user:n}=i;return de(n,e,"internal-error"),LI(n,new Lf(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e,n,s,a,c=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:a,tenantId:c,error:p,type:g}=e;if(p){this.reject(p);return}const _={auth:this.auth,requestUri:n,sessionId:s,tenantId:c||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(_))}catch(E){this.reject(E)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return s1;case"linkViaPopup":case"linkViaRedirect":return a1;case"reauthViaPopup":case"reauthViaRedirect":return o1;default:Sr(this.auth,"internal-error")}}resolve(e){Ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l1=new Na(2e3,1e4);class Gs extends u_{constructor(e,n,s,a,c){super(e,n,a,c),this.provider=s,this.authWindow=null,this.pollId=null,Gs.currentPopupAction&&Gs.currentPopupAction.cancel(),Gs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){Ar(this.filter.length===1,"Popup operations only handle one event");const e=Vf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Qn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gs.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,l1.get())};e()}}Gs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1="pendingRedirect",hu=new Map;class c1 extends u_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=hu.get(this.auth._key());if(!e){try{const s=await h1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}hu.set(this.auth._key(),e)}return this.bypassAuthState||hu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function h1(i,e){const n=p1(e),s=d1(i);if(!await s._isAvailable())return!1;const a=await s._get(n)==="true";return await s._remove(n),a}function f1(i,e){hu.set(i._key(),e)}function d1(i){return _r(i._redirectPersistence)}function p1(i){return cu(u1,i.config.apiKey,i.name)}async function m1(i,e,n=!1){if(mn(i.app))return Promise.reject(Tr(i));const s=Oa(i),a=i1(s,e),p=await new c1(s,a,n).execute();return p&&!n&&(delete p.user._redirectEventId,await s._persistUserIfCurrent(p.user),await s._setRedirectUser(null,e)),p}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g1=600*1e3;class y1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!c_(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";n.onError(Qn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=g1&&this.cachedEventUids.clear(),this.cachedEventUids.has(sg(e))}saveEventToCache(e){this.cachedEventUids.add(sg(e)),this.lastProcessedEventTime=Date.now()}}function sg(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function c_({type:i,error:e}){return i==="unknown"&&e?.code==="auth/no-auth-event"}function _1(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return c_(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v1(i,e={}){return uo(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,w1=/^https?/;async function T1(i){if(i.config.emulator)return;const{authorizedDomains:e}=await v1(i);for(const n of e)try{if(I1(n))return}catch{}Sr(i,"unauthorized-domain")}function I1(i){const e=Xh(),{protocol:n,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const p=new URL(i);return p.hostname===""&&s===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&p.hostname===s}if(!w1.test(n))return!1;if(E1.test(i))return s===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S1=new Na(3e4,6e4);function og(){const i=Xn().___jsl;if(i?.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function A1(i){return new Promise((e,n)=>{function s(){og(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{og(),n(Qn(i,"network-request-failed"))},timeout:S1.get()})}if(Xn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Xn().gapi?.load)s();else{const a=CI("iframefcb");return Xn()[a]=()=>{gapi.load?s():n(Qn(i,"network-request-failed"))},SI(`${AI()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw fu=null,e})}let fu=null;function C1(i){return fu=fu||A1(i),fu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1=new Na(5e3,15e3),k1="__/auth/iframe",P1="emulator/auth/iframe",N1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},D1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function O1(i){const e=i.config;de(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?Pf(e,P1):`https://${i.config.authDomain}/${k1}`,s={apiKey:e.apiKey,appName:i.name,v:oo},a=D1.get(i.config.apiHost);a&&(s.eid=a);const c=i._getFrameworks();return c.length&&(s.fw=c.join(",")),`${n}?${Ia(s).slice(1)}`}async function x1(i){const e=await C1(i),n=Xn().gapi;return de(n,i,"internal-error"),e.open({where:document.body,url:O1(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:N1,dontclear:!0},s=>new Promise(async(a,c)=>{await s.restyle({setHideOnLeave:!1});const p=Qn(i,"network-request-failed"),g=Xn().setTimeout(()=>{c(p)},R1.get());function _(){Xn().clearTimeout(g),a(s)}s.ping(_).then(_,()=>{c(p)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},L1=500,M1=600,U1="_blank",F1="http://localhost";class ag{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function b1(i,e,n,s=L1,a=M1){const c=Math.max((window.screen.availHeight-a)/2,0).toString(),p=Math.max((window.screen.availWidth-s)/2,0).toString();let g="";const _={...V1,width:s.toString(),height:a.toString(),top:c,left:p},E=Mt().toLowerCase();n&&(g=Hy(E)?U1:n),By(E)&&(e=e||F1,_.scrollbars="yes");const C=Object.entries(_).reduce((M,[K,Q])=>`${M}${K}=${Q},`,"");if(gI(E)&&g!=="_self")return j1(e||"",g),new ag(null);const D=window.open(e||"",g,C);de(D,i,"popup-blocked");try{D.focus()}catch{}return new ag(D)}function j1(i,e){const n=document.createElement("a");n.href=i,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1="__/auth/handler",B1="emulator/auth/handler",$1=encodeURIComponent("fac");async function lg(i,e,n,s,a,c){de(i.config.authDomain,i,"auth-domain-config-required"),de(i.config.apiKey,i,"invalid-api-key");const p={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:s,v:oo,eventId:a};if(e instanceof Zy){e.setDefaultLanguage(i.languageCode),p.providerId=e.providerId||"",Xv(e.getCustomParameters())||(p.customParameters=JSON.stringify(e.getCustomParameters()));for(const[C,D]of Object.entries({}))p[C]=D}if(e instanceof xa){const C=e.getScopes().filter(D=>D!=="");C.length>0&&(p.scopes=C.join(","))}i.tenantId&&(p.tid=i.tenantId);const g=p;for(const C of Object.keys(g))g[C]===void 0&&delete g[C];const _=await i._getAppCheckToken(),E=_?`#${$1}=${encodeURIComponent(_)}`:"";return`${H1(i)}?${Ia(g).slice(1)}${E}`}function H1({config:i}){return i.emulator?Pf(i,B1):`https://${i.authDomain}/${z1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh="webStorageSupport";class W1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=i_,this._completeRedirectFn=m1,this._overrideRedirectResult=f1}async _openPopup(e,n,s,a){Ar(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const c=await lg(e,n,s,Xh(),a);return b1(e,c,Vf())}async _openRedirect(e,n,s,a){await this._originValidation(e);const c=await lg(e,n,s,Xh(),a);return KI(c),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:a,promise:c}=this.eventManagers[n];return a?Promise.resolve(a):(Ar(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await x1(e),s=new y1(e);return n.register("authEvent",a=>(de(a?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Dh,{type:Dh},a=>{const c=a?.[0]?.[Dh];c!==void 0&&n(!!c),Sr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=T1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Qy()||$y()||Of()}}const q1=W1;var ug="@firebase/auth",cg="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K1(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Q1(i){Zs(new Wi("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:p,authDomain:g}=s.options;de(p&&!p.includes(":"),"invalid-api-key",{appName:s.name});const _={apiKey:p,authDomain:g,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xy(i)},E=new TI(s,a,c,_);return kI(E,n),E},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Zs(new Wi("auth-internal",e=>{const n=Oa(e.getProvider("auth").getImmediate());return(s=>new G1(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),oi(ug,cg,K1(i)),oi(ug,cg,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1=300,J1=_g("authIdTokenMaxAge")||X1;let hg=null;const Y1=i=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>J1)return;const a=n?.token;hg!==a&&(hg=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function Z1(i=Sg()){const e=nf(i,"auth");if(e.isInitialized())return e.getImmediate();const n=RI(i,{popupRedirectResolver:q1,persistence:[r1,WI,i_]}),s=_g("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const p=Y1(c.toString());zI(n,p,()=>p(n.currentUser)),jI(n,g=>p(g))}}const a=gg("auth");return a&&PI(n,`http://${a}`),n}function eS(){return document.getElementsByTagName("head")?.[0]??document}II({loadJS(i){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=a=>{const c=Qn("internal-error");c.customData=a,n(c)},s.type="text/javascript",s.charset="UTF-8",eS().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Q1("Browser");const tS=typeof __app_id<"u"?__app_id:"default-app-id",fg=typeof __initial_auth_token<"u"?__initial_auth_token:null;function nS(){const[i,e]=ji.useState(""),[n,s]=ji.useState(""),[a,c]=ji.useState(!1),[p,g]=ji.useState(null);ji.useEffect(()=>{try{const E={apiKey:"AIzaSyCvhDJUU3IFZ_ZCkS6_YTE7CYRugSvwnJ0",authDomain:"picstronaute-email-base.firebaseapp.com",projectId:"picstronaute-email-base",storageBucket:"picstronaute-email-base.firebasestorage.app",messagingSenderId:"705721731833",appId:"1:705721731833:web:b991d936eb98c98f31f028",measurementId:"G-ZLDKNNR6JG"};if(!E.apiKey||!E.projectId){console.error("Erreur: Configuration Firebase incomplète. Veuillez vérifier les variables d'environnement."),s("Erreur de connexion à la base de données. Veuillez réessayer plus tard.");return}const C=Ig(E),D=UT(C);g(D);const M=Z1(C),K=BI(M,async Q=>{if(!Q)try{fg?await bI(M,fg):await VI(M)}catch(Y){console.error("Erreur de connexion Firebase:",Y)}});return()=>K()}catch(E){console.error("Erreur d'initialisation de Firebase:",E)}},[]);const _=async E=>{if(E.preventDefault(),!i||!p){s("Erreur de connexion à la base de données. Veuillez réessayer plus tard.");return}c(!0);try{const C=MT(p,`/artifacts/${tS}/public/data/emails`,i);await JT(C,{email:i,timestamp:new Date}),s("Merci ! Votre email a bien été enregistré."),e("")}catch(C){console.error("Erreur d'enregistrement de l'email:",C),s("Une erreur est survenue. Veuillez réessayer.")}finally{c(!1)}};return oe.jsxs("div",{className:"email-form-container",children:[oe.jsx("h3",{children:"Restez au courant du lancement !"}),oe.jsx("p",{children:"Soyez les premiers informés des missions exclusives, des nouvelles fonctionnalités et du lancement de l'application."}),oe.jsxs("form",{onSubmit:_,className:"cta-form",children:[oe.jsx("input",{type:"email",name:"email",placeholder:"Votre adresse email",required:!0,value:i,onChange:E=>e(E.target.value),disabled:a}),oe.jsx("button",{type:"submit",disabled:a,children:a?"En cours...":"Rejoindre l'aventure"})]}),n&&oe.jsx("p",{className:"form-message",children:n})]})}function rS(){return oe.jsxs(oe.Fragment,{children:[oe.jsx("section",{className:"hero-section",children:oe.jsx("div",{className:"hero-content",children:oe.jsxs("div",{className:"hero-text-column",children:[oe.jsx("h2",{children:"L'Appli qui fait de vos photos de vraies aventures."}),oe.jsx("p",{children:"Des défis créatifs pour bouger, explorer et capturer le monde autrement."}),oe.jsx("button",{className:"cta-button",children:"Rejoindre l'aventure"})]})})}),oe.jsxs("section",{id:"concept",className:"features-section",children:[oe.jsx("h3",{children:"Le concept en 4 points :"}),oe.jsxs("div",{className:"features-container",children:[oe.jsxs("div",{className:"feature-item-bouger",children:[oe.jsx("h4",{children:"Bouger"}),oe.jsx("p",{children:"Des défis photo qui vous incitent à l'action. Marchez, courez, pédalez pour trouver le cliché parfait."})]}),oe.jsxs("div",{className:"feature-item-explorer",children:[oe.jsx("h4",{children:"Explorer"}),oe.jsx("p",{children:"Découvrez votre environnement, des rues de votre quartier aux sentiers de randonnée."})]}),oe.jsxs("div",{className:"feature-item-capturer",children:[oe.jsx("h4",{children:"Capturer"}),oe.jsx("p",{children:"Immortalisez vos aventures. Chaque mission vous invite à explorer votre créativité et à transformer l'instant en image."})]}),oe.jsxs("div",{className:"feature-item-defier",children:[oe.jsx("h4",{children:"Défier"}),oe.jsx("p",{children:"Relevez des défis thématiques, grimpez dans le classement et rejoignez une communauté engagée. Chaque photo est une chance de vous dépasser."})]})]})]}),oe.jsx("section",{id:"email",children:oe.jsx(nS,{})})]})}function iS(){return oe.jsxs("div",{className:"landing-page-container",children:[oe.jsx(Iv,{}),oe.jsx("main",{className:"main-content",children:oe.jsx(rS,{})}),oe.jsx(Sv,{})]})}Tv.createRoot(document.getElementById("root")).render(oe.jsx(ji.StrictMode,{children:oe.jsx(iS,{})}));
