(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var t={},n=[],r=()=>{},i=()=>!1,a=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),o=e=>e.startsWith(`onUpdate:`),s=Object.assign,c=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},l=Object.prototype.hasOwnProperty,u=(e,t)=>l.call(e,t),d=Array.isArray,f=e=>x(e)===`[object Map]`,p=e=>x(e)===`[object Set]`,m=e=>x(e)===`[object Date]`,h=e=>typeof e==`function`,g=e=>typeof e==`string`,_=e=>typeof e==`symbol`,v=e=>typeof e==`object`&&!!e,y=e=>(v(e)||h(e))&&h(e.then)&&h(e.catch),b=Object.prototype.toString,x=e=>b.call(e),S=e=>x(e).slice(8,-1),C=e=>x(e)===`[object Object]`,w=e=>g(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,ee=e(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),te=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},ne=/-\w/g,T=te(e=>e.replace(ne,e=>e.slice(1).toUpperCase())),re=/\B([A-Z])/g,E=te(e=>e.replace(re,`-$1`).toLowerCase()),ie=te(e=>e.charAt(0).toUpperCase()+e.slice(1)),ae=te(e=>e?`on${ie(e)}`:``),oe=(e,t)=>!Object.is(e,t),se=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},D=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},ce=e=>{let t=parseFloat(e);return isNaN(t)?e:t},le=e=>{let t=g(e)?Number(e):NaN;return isNaN(t)?e:t},ue,de=()=>ue||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function fe(e){if(d(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=g(r)?ge(r):fe(r);if(i)for(let e in i)t[e]=i[e]}return t}if(g(e)||v(e))return e}var pe=/;(?![^(]*\))/g,me=/:([^]+)/,he=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function ge(e){let t={};return e.replace(he,e=>e.startsWith(`/*`)?``:e).split(pe).forEach(e=>{if(e){let n=e.split(me);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function O(e){let t=``;if(g(e))t=e;else if(d(e))for(let n=0;n<e.length;n++){let r=O(e[n]);r&&(t+=r+` `)}else if(v(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var _e=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,ve=e(_e);_e+``;function ye(e){return!!e||e===``}function be(e,t,n){if(e.length!==t.length)return!1;let r=!0;for(let i=0;r&&i<e.length;i++)r=we(e[i],t[i],n);return r}function xe(e,t,n){if(e.size!==t.size)return!1;let r=Array.from(t),i=new Uint8Array(r.length);for(let t of e){let e=-1;for(let a=0;a<r.length;a++)if(!i[a]&&we(t,r[a],n)){e=a;break}if(e<0)return!1;i[e]=1}return!0}function Se(e,t,n){let r=f(e),i=f(t);if(r||i||(r=p(e),i=p(t),r||i))return r&&i?xe(e,t,n):!1;if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let r in e){let i=e.hasOwnProperty(r),a=t.hasOwnProperty(r);if(i&&!a||!i&&a||!we(e[r],t[r],n))return!1}return String(e)===String(t)}function Ce(e,t,n,r){n||=[new Map,new Map];let[i,a]=n;if(i.has(e)||a.has(t))return i.get(e)===t&&a.get(t)===e;i.set(e,t),a.set(t,e);let o=r(e,t,n);return i.delete(e),a.delete(t),o}function we(e,t,n){if(e===t)return!0;let r=m(e),i=m(t);return r||i?r&&i?e.getTime()===t.getTime():!1:(r=_(e),i=_(t),r||i?e===t:(r=d(e),i=d(t),r||i?r&&i?Ce(e,t,n,be):!1:(r=v(e),i=v(t),r||i?!r||!i?!1:Ce(e,t,n,Se):String(e)===String(t))))}function Te(e,t){return e.findIndex(e=>we(e,t))}var Ee=e=>!!(e&&e.__v_isRef===!0),k=e=>g(e)?e:e==null?``:d(e)||v(e)&&(e.toString===b||!h(e.toString))?Ee(e)?k(e.value):JSON.stringify(e,De,2):String(e),De=(e,t)=>Ee(t)?De(e,t.value):f(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[Oe(t,r)+` =>`]=n,e),{})}:p(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Oe(e))}:_(t)?Oe(t):v(t)&&!d(t)&&!C(t)?String(t):t,Oe=(e,t=``)=>_(e)?`Symbol(${e.description??t})`:e,A,ke=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&A&&(A.active?(this.parent=A,this.index=(A.scopes||(A.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}let n=this.effects.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}}run(e){if(this._active){let t=A;try{return A=this,e()}finally{A=t}}}on(){++this._on===1&&(this.prevScope=A,A=this)}off(){if(this._on>0&&--this._on===0){if(A===this)A=this.prevScope;else{let e=A;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){let e=this.scopes.slice();for(t=0,n=e.length;t<n;t++)e[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function Ae(){return A}var j,je=new WeakSet,Me=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,A&&(A.active?A.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,je.has(this)&&(je.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ie(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ye(this),ze(this);let e=j,t=Ge;j=this,Ge=!0;try{return this.fn()}finally{Be(this),j=e,Ge=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ue(e);this.deps=this.depsTail=void 0,Ye(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?je.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ve(this)&&this.run()}get dirty(){return Ve(this)}},Ne=0,Pe,Fe;function Ie(e,t=!1){if(e.flags|=8,t){e.next=Fe,Fe=e;return}e.next=Pe,Pe=e}function Le(){Ne++}function Re(){if(--Ne>0)return;if(Fe){let e=Fe;for(Fe=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;Pe;){let t=Pe;for(Pe=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function ze(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Be(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),Ue(r),We(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function Ve(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(He(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function He(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Xe)||(e.globalVersion=Xe,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ve(e))))return;e.flags|=2;let t=e.dep,n=j,r=Ge;j=e,Ge=!0;try{ze(e);let n=e.fn(e._value);(t.version===0||oe(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{j=n,Ge=r,Be(e),e.flags&=-3}}function Ue(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)Ue(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function We(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var Ge=!0,Ke=[];function qe(){Ke.push(Ge),Ge=!1}function Je(){let e=Ke.pop();Ge=e===void 0||e}function Ye(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=j;j=void 0;try{t()}finally{j=e}}}var Xe=0,Ze=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},Qe=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!j||!Ge||j===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==j)t=this.activeLink=new Ze(j,this),j.deps?(t.prevDep=j.depsTail,j.depsTail.nextDep=t,j.depsTail=t):j.deps=j.depsTail=t,$e(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=j.depsTail,t.nextDep=void 0,j.depsTail.nextDep=t,j.depsTail=t,j.deps===t&&(j.deps=e)}return t}trigger(e){this.version++,Xe++,this.notify(e)}notify(e){Le();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Re()}}};function $e(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)$e(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var et=new WeakMap,tt=Symbol(``),nt=Symbol(``),rt=Symbol(``);function M(e,t,n){if(Ge&&j){let t=et.get(e);t||et.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new Qe),r.map=t,r.key=n),r.track()}}function it(e,t,n,r,i,a){let o=et.get(e);if(!o){Xe++;return}let s=e=>{e&&e.trigger()};if(Le(),t===`clear`)o.forEach(s);else{let i=d(e),a=i&&w(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===rt||!_(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(rt)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(tt)),f(e)&&s(o.get(nt)));break;case`delete`:i||(s(o.get(tt)),f(e)&&s(o.get(nt)));break;case`set`:f(e)&&s(o.get(tt))}}Re()}function at(e){let t=N(e);return t===e||(M(t,`iterate`,rt),Wt(e))?t:Ut(e)?Ht(e)?t.map(e=>Jt(qt(e))):t.map(Jt):t.map(qt)}function ot(e){return M(e=N(e),`iterate`,rt),e}function st(e,t){return Ut(e)?Jt(Ht(e)?qt(t):t):qt(t)}var ct={__proto__:null,[Symbol.iterator](){return lt(this,Symbol.iterator,e=>st(this,e))},concat(...e){return at(this).concat(...e.map(e=>d(e)?at(e):e))},entries(){return lt(this,`entries`,e=>(e[1]=st(this,e[1]),e))},every(e,t){return dt(this,`every`,e,t,void 0,arguments)},filter(e,t){return dt(this,`filter`,e,t,e=>e.map(e=>st(this,e)),arguments)},find(e,t){return dt(this,`find`,e,t,e=>st(this,e),arguments)},findIndex(e,t){return dt(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return dt(this,`findLast`,e,t,e=>st(this,e),arguments)},findLastIndex(e,t){return dt(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return dt(this,`forEach`,e,t,void 0,arguments)},includes(...e){return pt(this,`includes`,e)},indexOf(...e){return pt(this,`indexOf`,e)},join(e){return at(this).join(e)},lastIndexOf(...e){return pt(this,`lastIndexOf`,e)},map(e,t){return dt(this,`map`,e,t,void 0,arguments)},pop(){return mt(this,`pop`)},push(...e){return mt(this,`push`,e)},reduce(e,...t){return ft(this,`reduce`,e,t)},reduceRight(e,...t){return ft(this,`reduceRight`,e,t)},shift(){return mt(this,`shift`)},some(e,t){return dt(this,`some`,e,t,void 0,arguments)},splice(...e){return mt(this,`splice`,e)},toReversed(){return at(this).toReversed()},toSorted(e){return at(this).toSorted(e)},toSpliced(...e){return at(this).toSpliced(...e)},unshift(...e){return mt(this,`unshift`,e)},values(){return lt(this,`values`,e=>st(this,e))}};function lt(e,t,n){let r=ot(e),i=r[t]();return r!==e&&!Wt(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var ut=Array.prototype;function dt(e,t,n,r,i,a){let o=ot(e),s=o!==e&&!Wt(e),c=o[t];if(c!==ut[t]){let t=c.apply(e,a);return s?qt(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,st(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function ft(e,t,n,r){let i=ot(e),a=i!==e&&!Wt(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=st(e,t)),n.call(this,t,st(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?st(e,c):c}function pt(e,t,n){let r=N(e);M(r,`iterate`,rt);let i=r[t](...n);return(i===-1||i===!1)&&Gt(n[0])?(n[0]=N(n[0]),r[t](...n)):i}function mt(e,t,n=[]){qe(),Le();let r=N(e)[t].apply(e,n);return Re(),Je(),r}var ht=e(`__proto__,__v_isRef,__isVue`),gt=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(_));function _t(e){_(e)||(e=String(e));let t=N(this);return M(t,`has`,e),t.hasOwnProperty(e)}var vt=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?It:Ft:i?Pt:Nt).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=d(e);if(!r){let e;if(a&&(e=ct[t]))return e;if(t===`hasOwnProperty`)return _t}let o=Reflect.get(e,t,P(e)?e:n);if((_(t)?gt.has(t):ht(t))||(r||M(e,`get`,t),i))return o;if(P(o)){let e=a&&w(t)?o:o.value;return r&&v(e)?Bt(e):e}return v(o)?r?Bt(o):Rt(o):o}},yt=class extends vt{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=d(e)&&w(t);if(!this._isShallow){let e=Ut(i);if(!Wt(n)&&!Ut(n)&&(i=N(i),n=N(n)),!a&&P(i)&&!P(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:u(e,t),s=Reflect.set(e,t,n,P(e)?e:r);return e===N(r)&&s&&(o?oe(n,i)&&it(e,`set`,t,n,i):it(e,`add`,t,n)),s}deleteProperty(e,t){let n=u(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&it(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!_(t)||!gt.has(t))&&M(e,`has`,t),n}ownKeys(e){return M(e,`iterate`,d(e)?`length`:tt),Reflect.ownKeys(e)}},bt=class extends vt{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},xt=new yt,St=new bt,Ct=new yt(!0),wt=e=>e,Tt=e=>Reflect.getPrototypeOf(e);function Et(e,t,n){return function(...r){let i=this.__v_raw,a=N(i),o=f(a),c=e===`entries`||e===Symbol.iterator&&o,l=e===`keys`&&o,u=i[e](...r),d=n?wt:t?Jt:qt;return!t&&M(a,`iterate`,l?nt:tt),s(Object.create(u),{next(){let{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}}})}}function Dt(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function Ot(e,t){let n={get(n){let r=this.__v_raw,i=N(r),a=N(n);e||(oe(n,a)&&M(i,`get`,n),M(i,`get`,a));let{has:o}=Tt(i),s=t?wt:e?Jt:qt;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&M(N(t),`iterate`,tt),t.size},has(t){let n=this.__v_raw,r=N(n),i=N(t);return e||(oe(t,i)&&M(r,`has`,t),M(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=N(a),s=t?wt:e?Jt:qt;return!e&&M(o,`iterate`,tt),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return s(n,e?{add:Dt(`add`),set:Dt(`set`),delete:Dt(`delete`),clear:Dt(`clear`)}:{add(e){let n=N(this),r=Tt(n),i=N(e),a=!t&&!Wt(e)&&!Ut(e)?i:e;return r.has.call(n,a)||oe(e,a)&&r.has.call(n,e)||oe(i,a)&&r.has.call(n,i)||(n.add(a),it(n,`add`,a,a)),this},set(e,n){!t&&!Wt(n)&&!Ut(n)&&(n=N(n));let r=N(this),{has:i,get:a}=Tt(r),o=i.call(r,e);o||=(e=N(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?oe(n,s)&&it(r,`set`,e,n,s):it(r,`add`,e,n),this},delete(e){let t=N(this),{has:n,get:r}=Tt(t),i=n.call(t,e);i||=(e=N(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&it(t,`delete`,e,void 0,a),o},clear(){let e=N(this),t=e.size!==0,n=e.clear();return t&&it(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=Et(r,e,t)}),n}function kt(e,t){let n=Ot(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(u(n,r)&&r in t?n:t,r,i)}var At={get:kt(!1,!1)},jt={get:kt(!1,!0)},Mt={get:kt(!0,!1)},Nt=new WeakMap,Pt=new WeakMap,Ft=new WeakMap,It=new WeakMap;function Lt(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function Rt(e){return Ut(e)?e:Vt(e,!1,xt,At,Nt)}function zt(e){return Vt(e,!1,Ct,jt,Pt)}function Bt(e){return Vt(e,!0,St,Mt,Ft)}function Vt(e,t,n,r,i){if(!v(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;let a=i.get(e);if(a)return a;let o=Lt(S(e));if(o===0)return e;let s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function Ht(e){return Ut(e)?Ht(e.__v_raw):!!(e&&e.__v_isReactive)}function Ut(e){return!!(e&&e.__v_isReadonly)}function Wt(e){return!!(e&&e.__v_isShallow)}function Gt(e){return e?!!e.__v_raw:!1}function N(e){let t=e&&e.__v_raw;return t?N(t):e}function Kt(e){return!u(e,`__v_skip`)&&Object.isExtensible(e)&&D(e,`__v_skip`,!0),e}var qt=e=>v(e)?Rt(e):e,Jt=e=>v(e)?Bt(e):e;function P(e){return e?e.__v_isRef===!0:!1}function F(e){return Yt(e,!1)}function Yt(e,t){return P(e)?e:new Xt(e,t)}var Xt=class{constructor(e,t){this.dep=new Qe,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:N(e),this._value=t?e:qt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||Wt(e)||Ut(e);e=n?e:N(e),oe(e,t)&&(this._rawValue=e,this._value=n?e:qt(e),this.dep.trigger())}};function I(e){return P(e)?e.value:e}var Zt={get:(e,t,n)=>t===`__v_raw`?e:I(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return P(i)&&!P(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Qt(e){return Ht(e)?e:new Proxy(e,Zt)}var $t=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Qe(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Xe-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&j!==this)return Ie(this,!0),!0}get value(){let e=this.dep.track();return He(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function en(e,t,n=!1){let r,i;return h(e)?r=e:(r=e.get,i=e.set),new $t(r,i,n)}var tn={},nn=new WeakMap,rn=void 0;function an(e,t=!1,n=rn){if(n){let t=nn.get(n);t||nn.set(n,t=[]),t.push(e)}}function on(e,n,i=t){let{immediate:a,deep:o,once:s,scheduler:l,augmentJob:u,call:f}=i,p=e=>o?e:Wt(e)||o===!1||o===0?sn(e,1):sn(e),m,g,_,v,y=!1,b=!1;if(P(e)?(g=()=>e.value,y=Wt(e)):Ht(e)?(g=()=>p(e),y=!0):d(e)?(b=!0,y=e.some(e=>Ht(e)||Wt(e)),g=()=>e.map(e=>{if(P(e))return e.value;if(Ht(e))return p(e);if(h(e))return f?f(e,2):e()})):g=h(e)?n?f?()=>f(e,2):e:()=>{if(_){qe();try{_()}finally{Je()}}let t=rn;rn=m;try{return f?f(e,3,[v]):e(v)}finally{rn=t}}:r,n&&o){let e=g,t=o===!0?1/0:o;g=()=>sn(e(),t)}let x=Ae(),S=()=>{m.stop(),x&&x.active&&c(x.effects,m)};if(s&&n){let e=n;n=(...t)=>{let n=e(...t);return S(),n}}let C=b?Array(e.length).fill(tn):tn,w=e=>{if(m.flags&1&&(m.dirty||e)){if(n){let t=m.run();if(e||o||y||(b?t.some((e,t)=>oe(e,C[t])):oe(t,C))){_&&_();let e=rn;rn=m;try{let e=[t,C===tn?void 0:b&&C[0]===tn?[]:C,v];C=t,f?f(n,3,e):n(...e)}finally{rn=e}}}else m.run()}};return u&&u(w),m=new Me(g),m.scheduler=l?()=>l(w,!1):w,v=e=>an(e,!1,m),_=m.onStop=()=>{let e=nn.get(m);if(e){if(f)f(e,4);else for(let t of e)t();nn.delete(m)}},n?a?w(!0):C=m.run():l?l(w.bind(null,!0),!0):m.run(),S.pause=m.pause.bind(m),S.resume=m.resume.bind(m),S.stop=S,S}function sn(e,t=1/0,n){if(t<=0||!v(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,P(e))sn(e.value,t,n);else if(d(e))for(let r=0;r<e.length;r++)sn(e[r],t,n);else if(p(e)||f(e))e.forEach(e=>{sn(e,t,n)});else if(C(e)){for(let r in e)sn(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&sn(e[r],t,n)}return e}function cn(e,t,n,r){try{return r?e(...r):e()}catch(e){un(e,t,n)}}function ln(e,t,n,r){if(h(e)){let i=cn(e,t,n,r);return i&&y(i)&&i.catch(e=>{un(e,t,n)}),i}if(d(e)){let i=[];for(let a=0;a<e.length;a++)i.push(ln(e[a],t,n,r));return i}}function un(e,n,r,i=!0){let a=n?n.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||t;if(n){let t=n.parent,i=n.proxy,a=`https://vuejs.org/error-reference/#runtime-${r}`;for(;t;){let n=t.ec;if(n){for(let t=0;t<n.length;t++)if(n[t](e,i,a)===!1)return}t=t.parent}if(o){qe(),cn(o,null,10,[e,i,a]),Je();return}}dn(e,r,a,i,s)}function dn(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var L=[],fn=-1,pn=[],mn=null,hn=0,gn=Promise.resolve(),_n=null;function vn(e){let t=_n||gn;return e?t.then(this?e.bind(this):e):t}function yn(e){let t=fn+1,n=L.length;for(;t<n;){let r=t+n>>>1,i=L[r],a=Tn(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function bn(e){if(!(e.flags&1)){let t=Tn(e),n=L[L.length-1];!n||!(e.flags&2)&&t>=Tn(n)?L.push(e):L.splice(yn(t),0,e),e.flags|=1,xn()}}function xn(){_n||=gn.then(En)}function Sn(e){if(!d(e))mn&&e.id===-1?mn.splice(hn+1,0,e):e.flags&1||(pn.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)pn.push(e[t]);xn()}function Cn(e,t,n=fn+1){for(;n<L.length;n++){let t=L[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;L.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function wn(e){if(pn.length){let e=[...new Set(pn)].sort((e,t)=>Tn(e)-Tn(t));if(pn.length=0,mn){for(let t=0;t<e.length;t++)mn.push(e[t]);return}for(mn=e,hn=0;hn<mn.length;hn++){let e=mn[hn];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}mn=null,hn=0}}var Tn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function En(e){try{for(fn=0;fn<L.length;fn++){let e=L[fn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),cn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;fn<L.length;fn++){let e=L[fn];e&&(e.flags&=-2)}fn=-1,L.length=0,wn(e),_n=null,(L.length||pn.length)&&En(e)}}var R=null,Dn=null;function On(e){let t=R;return R=e,Dn=e&&e.type.__scopeId||null,t}function kn(e,t=R,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&la(-1);let i=On(t),a=aa.length,o;try{o=e(...n)}finally{for(let e=aa.length;e>a;e--)sa();On(i),r._d&&la(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function An(e,n){if(R===null)return e;let r=Va(R),i=e.dirs||=[];for(let e=0;e<n.length;e++){let[a,o,s,c=t]=n[e];a&&(h(a)&&(a={mounted:a,updated:a}),a.deep&&sn(o),i.push({dir:a,instance:r,value:o,oldValue:void 0,arg:s,modifiers:c}))}return e}function jn(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(qe(),ln(c,n,8,[e.el,s,e,t]),Je())}}function Mn(e,t){if(Y){let n=Y.provides,r=Y.parent&&Y.parent.provides;r===n&&(n=Y.provides=Object.create(r)),n[e]=t}}function Nn(e,t,n=!1){let r=Oa();if(r||mi){let i=mi?mi._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&h(t)?t.call(r&&r.proxy):t}}var Pn=Symbol.for(`v-scx`),Fn=()=>Nn(Pn);function In(e,t,n){return Ln(e,t,n)}function Ln(e,n,i=t){let{immediate:a,deep:o,flush:c,once:l}=i,u=s({},i),d=n&&a||!n&&c!==`post`,f;if(Pa){if(c===`sync`){let e=Fn();f=e.__watcherHandles||=[]}else if(!d){let e=()=>{};return e.stop=r,e.resume=r,e.pause=r,e}}let p=Y;u.call=(e,t,n)=>ln(e,p,t,n);let m=!1;c===`post`?u.scheduler=e=>{B(e,p&&p.suspense)}:c!==`sync`&&(m=!0,u.scheduler=(e,t)=>{t?e():bn(e)}),u.augmentJob=e=>{n&&(e.flags|=4),m&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};let h=on(e,n,u);return Pa&&(f?f.push(h):d&&h()),h}function Rn(e,t,n){let r=this.proxy,i=g(e)?e.includes(`.`)?zn(r,e):()=>r[e]:e.bind(r,r),a;h(t)?a=t:(a=t.handler,n=t);let o=ja(this),s=Ln(i,a.bind(r),n);return o(),s}function zn(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var Bn=new WeakMap,Vn=Symbol(`_vte`),Hn=e=>e.__isTeleport,Un=e=>e&&(e.disabled||e.disabled===``),Wn=e=>e&&(e.defer||e.defer===``),Gn=e=>typeof SVGElement<`u`&&e instanceof SVGElement,Kn=e=>typeof MathMLElement==`function`&&e instanceof MathMLElement,qn=(e,t)=>{let n=e&&e.to;return g(n)?t?t(n):null:n},Jn={name:`Teleport`,__isTeleport:!0,process(e,t,n,r,i,a,o,s,c,l){let{mc:u,pc:d,pbc:f,o:{insert:p,querySelector:m,createText:h,createComment:g,parentNode:_}}=l,v=Un(t.props),{dynamicChildren:y}=t,b=(e,t,n)=>{e.shapeFlag&16&&u(e.children,t,n,i,a,o,s,c)},x=(e=t)=>{let n=Un(e.props),r=e.target=qn(e.props,m),a=$n(r,e,h,p);r&&(o!==`svg`&&Gn(r)?o=`svg`:o!==`mathml`&&Kn(r)&&(o=`mathml`),i&&i.isCE&&(i.ce._teleportTargets||(i.ce._teleportTargets=new Set)).add(r),n||(b(e,r,a),Qn(e,!1)))},S=e=>{let t=()=>{if(Bn.get(e)===t){if(Bn.delete(e),Un(e.props)){let t=_(e.el)||n;b(e,t,e.anchor),Qn(e,!0)}x(e)}};Bn.set(e,t),B(t,a)};if(e==null){let e=t.el=h(``),i=t.anchor=h(``);if(p(e,n,r),p(i,n,r),Wn(t.props)||a&&a.pendingBranch){S(t);return}v&&(b(t,n,i),Qn(t,!0)),x()}else{t.el=e.el;let r=t.anchor=e.anchor,u=Bn.get(e);if(u){u.flags|=8,Bn.delete(e),S(t);return}t.targetStart=e.targetStart;let p=t.target=e.target,h=t.targetAnchor=e.targetAnchor,g=Un(e.props),_=g?n:p,b=g?r:h;if(o===`svg`||Gn(p)?o=`svg`:(o===`mathml`||Kn(p))&&(o=`mathml`),y?(f(e.dynamicChildren,y,_,i,a,o,s),Xi(e,t,!0)):c||d(e,t,_,b,i,a,o,s,!1),v)g?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Yn(t,n,r,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){let e=qn(t.props,m);e&&(t.target=e,Yn(t,e,null,l,0))}else g&&Yn(t,p,h,l,1);Qn(t,v)}},remove(e,t,n,{um:r,o:{remove:i}},a){let{shapeFlag:o,children:s,anchor:c,targetStart:l,targetAnchor:u,target:d,props:f}=e,p=Un(f),m=a||!p,h=Bn.get(e);if(h&&(h.flags|=8,Bn.delete(e)),d&&(i(l),i(u)),a&&i(c),!h&&(p||d)&&o&16)for(let e=0;e<s.length;e++){let i=s[e];r(i,t,n,m,!!i.dynamicChildren)}},move:Yn,hydrate:Xn};function Yn(e,t,n,{o:{insert:r},m:i},a=2){a===0&&r(e.targetAnchor,t,n);let{el:o,anchor:s,shapeFlag:c,children:l,props:u}=e,d=a===2;if(d&&r(o,t,n),!Bn.has(e)&&(!d||Un(u))&&c&16)for(let e=0;e<l.length;e++)i(l[e],t,n,2);d&&r(s,t,n)}function Xn(e,t,n,r,i,a,{o:{nextSibling:o,parentNode:s,querySelector:c,insert:l,createText:u}},d){function f(e,n){let r=n;for(;r;){if(r&&r.nodeType===8){if(r.data===`teleport start anchor`)t.targetStart=r;else if(r.data===`teleport anchor`){t.targetAnchor=r,e._lpa=t.targetAnchor&&o(t.targetAnchor);break}}r=o(r)}}function p(e,t){t.anchor=d(o(e),t,s(e),n,r,i,a)}let m=t.target=qn(t.props,c),h=Un(t.props);if(m){let c=m._lpa||m.firstChild;t.shapeFlag&16&&(h?(p(e,t),f(m,c),t.targetAnchor||$n(m,t,u,l,s(e)===m?e:null)):(t.anchor=o(e),f(m,c),t.targetAnchor||$n(m,t,u,l),d(c&&o(c),t,m,n,r,i,a))),Qn(t,h)}else h&&t.shapeFlag&16&&(p(e,t),t.targetStart=e,t.targetAnchor=o(e));return t.anchor&&o(t.anchor)}var Zn=Jn;function Qn(e,t){let n=e.ctx;if(n&&n.ut){let r,i;for(t?(r=e.el,i=e.anchor):(r=e.targetStart,i=e.targetAnchor);r&&r!==i;)r.nodeType===1&&r.setAttribute(`data-v-owner`,n.uid),r=r.nextSibling;n.ut()}}function $n(e,t,n,r,i=null){let a=t.targetStart=n(``),o=t.targetAnchor=n(``);return a[Vn]=o,e&&(r(a,e,i),r(o,e,i)),o}var er=Symbol(`_leaveCb`),tr=Symbol(`_enterCb`);function nr(){let e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return kr(()=>{e.isMounted=!0}),Mr(()=>{e.isUnmounting=!0}),e}var rr=[Function,Array],ir={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:rr,onEnter:rr,onAfterEnter:rr,onEnterCancelled:rr,onBeforeLeave:rr,onLeave:rr,onAfterLeave:rr,onLeaveCancelled:rr,onBeforeAppear:rr,onAppear:rr,onAfterAppear:rr,onAppearCancelled:rr},ar=e=>{let t=e.subTree;return t.component?ar(t.component):t},or={name:`BaseTransition`,props:ir,setup(e,{slots:t}){let n=Oa(),r=nr();return()=>{let i=t.default&&mr(t.default(),!0),a=i&&i.length?sr(i):n.subTree?J():void 0;if(!a)return;let o=N(e),{mode:s}=o;if(r.isLeaving)return dr(a);let c=fr(a);if(!c)return dr(a);let l=ur(c,o,r,n,e=>l=e);c.type!==H&&pr(c,l);let u=n.subTree&&fr(n.subTree);if(u&&u.type!==H&&!pa(u,c)&&ar(n).type!==H){let e=ur(u,o,r,n);if(pr(u,e),s===`out-in`&&c.type!==H)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete e.afterLeave,u=void 0},dr(a);s===`in-out`&&c.type!==H?e.delayLeave=(e,t,n)=>{let i=lr(r,u);i[String(u.key)]=u,e[er]=()=>{t(),e[er]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{n(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&=void 0;return a}}};function sr(e){let t=e[0];if(e.length>1){for(let n of e)if(n.type!==H){t=n;break}}return t}var cr=or;function lr(e,t){let{leavingVNodes:n}=e,r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function ur(e,t,n,r,i){let{appear:a,mode:o,persisted:s=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:p,onLeave:m,onAfterLeave:h,onLeaveCancelled:g,onBeforeAppear:_,onAppear:v,onAfterAppear:y,onAppearCancelled:b}=t,x=String(e.key),S=lr(n,e),C=(e,t)=>{e&&ln(e,r,9,t)},w=(e,t)=>{let n=t[1];C(e,t),d(e)?e.every(e=>e.length<=1)&&n():e.length<=1&&n()},ee={mode:o,persisted:s,beforeEnter(t){let r=c;if(!n.isMounted){if(a)r=_||c;else return}t[er]&&t[er](!0);let i=S[x];i&&pa(e,i)&&i.el[er]&&i.el[er](),C(r,[t])},enter(t){if(S[x]===e)return;let r=l,i=u,o=f;if(!n.isMounted){if(a)r=v||l,i=y||u,o=b||f;else return}let s=!1;t[tr]=e=>{s||(s=!0,C(e?o:i,[t]),ee.delayedLeave&&ee.delayedLeave(),t[tr]=void 0)};let c=t[tr].bind(null,!1);r?w(r,[t,c]):c()},leave(t,r){let i=String(e.key);if(t[tr]&&t[tr](!0),n.isUnmounting)return r();C(p,[t]);let a=!1;t[er]=n=>{a||(a=!0,r(),C(n?g:h,[t]),t[er]=void 0,S[i]===e&&delete S[i])};let o=t[er].bind(null,!1);S[i]=e,m?w(m,[t,o]):o()},clone(e){let a=ur(e,t,n,r,i);return i&&i(a),a}};return ee}function dr(e){if(xr(e))return e=va(e),e.children=null,e}function fr(e){if(!xr(e))return Hn(e.type)&&e.children?sr(e.children):e;if(e.component)return e.component.subTree;let{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&h(n.default))return n.default()}}function pr(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;let n=e.component.subTree;pr(Hn(n.type)&&fr(n)||n,t)}else e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function mr(e,t=!1,n){let r=[],i=0;for(let a=0;a<e.length;a++){let o=e[a],s=n==null?o.key:String(n)+String(o.key==null?a:o.key);o.type===V?(o.patchFlag&128&&i++,r=r.concat(mr(o.children,t,s))):(t||o.type!==H)&&r.push(s==null?o:va(o,{key:s}))}if(i>1)for(let e=0;e<r.length;e++)r[e].patchFlag=-2;return r}function hr(e){e.ids=[e.ids[0]+e.ids[2]+++`-`,0,0]}function gr(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var _r=new WeakMap;function vr(e,n,r,a,o=!1){if(d(e)){e.forEach((e,t)=>vr(e,n&&(d(n)?n[t]:n),r,a,o));return}if(br(a)&&!o){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&vr(e,n,r,a.component.subTree);return}let s=a.shapeFlag&4?Va(a.component):a.el,l=o?null:s,{i:f,r:p}=e,m=n&&n.r,_=f.refs===t?f.refs={}:f.refs,v=f.setupState,y=N(v),b=v===t?i:e=>!gr(_,e)&&u(y,e),x=(e,t)=>!(t&&gr(_,t));if(m!=null&&m!==p){if(yr(n),g(m))_[m]=null,b(m)&&(v[m]=null);else if(P(m)){let e=n;x(m,e.k)&&(m.value=null),e.k&&(_[e.k]=null)}}if(h(p))cn(p,f,12,[l,_]);else{let t=g(p),n=P(p);if(t||n){let i=()=>{if(e.f){let n=t?b(p)?v[p]:_[p]:x(p)||!e.k?p.value:_[e.k];if(o)d(n)&&c(n,s);else if(d(n))n.includes(s)||n.push(s);else if(t)_[p]=[s],b(p)&&(v[p]=_[p]);else{let t=[s];x(p,e.k)&&(p.value=t),e.k&&(_[e.k]=t)}}else t?(_[p]=l,b(p)&&(v[p]=l)):n&&(x(p,e.k)&&(p.value=l),e.k&&(_[e.k]=l))};if(l){let t=()=>{i(),_r.delete(e)};t.id=-1,_r.set(e,t),B(t,r)}else yr(e),i()}}}function yr(e){let t=_r.get(e);t&&(t.flags|=8,_r.delete(e))}de().requestIdleCallback,de().cancelIdleCallback;var br=e=>!!e.type.__asyncLoader,xr=e=>e.type.__isKeepAlive;function Sr(e,t){wr(e,`a`,t)}function Cr(e,t){wr(e,`da`,t)}function wr(e,t,n=Y){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(Er(t,r,n),n){let e=n.parent;for(;e&&e.parent;)xr(e.parent.vnode)&&Tr(r,t,n,e),e=e.parent}}function Tr(e,t,n,r){let i=Er(t,e,r,!0);Nr(()=>{c(r[t],i)},n)}function Er(e,t,n=Y,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{qe();let i=ja(n),a=ln(t,n,e,r);return i(),Je(),a};return r?i.unshift(a):i.push(a),a}}var Dr=e=>(t,n=Y)=>{(!Pa||e===`sp`)&&Er(e,(...e)=>t(...e),n)},Or=Dr(`bm`),kr=Dr(`m`),Ar=Dr(`bu`),jr=Dr(`u`),Mr=Dr(`bum`),Nr=Dr(`um`),Pr=Dr(`sp`),Fr=Dr(`rtg`),Ir=Dr(`rtc`);function Lr(e,t=Y){Er(`ec`,e,t)}var Rr=`components`,zr=Symbol.for(`v-ndc`);function Br(e){return g(e)?Vr(Rr,e,!1)||e:e||zr}function Vr(e,t,n=!0,r=!1){let i=R||Y;if(i){let n=i.type;if(e===Rr){let e=Ha(n,!1);if(e&&(e===t||e===T(t)||e===ie(T(t))))return n}let a=Hr(i[e]||n[e],t)||Hr(i.appContext[e],t);return!a&&r?n:a}}function Hr(e,t){return e&&(e[t]||e[T(t)]||e[ie(T(t))])}function Ur(e,t,n,r){let i,a=n&&n[r],o=d(e);if(o||g(e)){let n=o&&Ht(e),r=!1,s=!1;n&&(r=!Wt(e),s=Ut(e),e=ot(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?Jt(qt(e[n])):qt(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(v(e)){if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}}else i=[];return n&&(n[r]=i),i}function Wr(e,t,n,r,i,a){if(n??={},R.ce||R.parent&&br(R.parent)&&R.parent.ce){let e=a!=null&&n.key==null?s({},n,{key:a}):n,i=Object.keys(e).length>0;return t!=="default"&&(e.name=t),U(),da(V,null,[K(`slot`,e,r&&r())],i?-2:64)}let o=e[t];o&&o._c&&(o._d=!1);let c=aa.length;U();let l;try{let i=o&&Gr(o(n)),s=n.key||a||i&&i.key;l=da(V,{key:(s&&!_(s)?s:`_${t}`)+(!i&&r?`_fb`:``)},i||(r?r():[]),i&&e._===1?64:-2)}catch(e){for(let e=aa.length;e>c;e--)sa();throw e}finally{o&&o._c&&(o._d=!0)}return!i&&l.scopeId&&(l.slotScopeIds=[l.scopeId+`-s`]),l}function Gr(e){return e.some(e=>!fa(e)||!(e.type===H||e.type===V&&!Gr(e.children)))?e:null}var Kr=e=>e?Na(e)?Va(e):Kr(e.parent):null,qr=s(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Kr(e.parent),$root:e=>Kr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>ni(e),$forceUpdate:e=>e.f||=()=>{bn(e.update)},$nextTick:e=>e.n||=vn.bind(e.proxy),$watch:e=>Rn.bind(e)}),Jr=(e,n)=>e!==t&&!e.__isScriptSetup&&u(e,n),Yr={get({_:e},n){if(n===`__v_skip`)return!0;let{ctx:r,setupState:i,data:a,props:o,accessCache:s,type:c,appContext:l}=e;if(n[0]!==`$`){let e=s[n];if(e!==void 0)switch(e){case 1:return i[n];case 2:return a[n];case 4:return r[n];case 3:return o[n]}else if(Jr(i,n))return s[n]=1,i[n];else if(a!==t&&u(a,n))return s[n]=2,a[n];else if(u(o,n))return s[n]=3,o[n];else if(r!==t&&u(r,n))return s[n]=4,r[n];else Zr&&(s[n]=0)}let d=qr[n],f,p;if(d)return n===`$attrs`&&M(e.attrs,`get`,``),d(e);if((f=c.__cssModules)&&(f=f[n]))return f;if(r!==t&&u(r,n))return s[n]=4,r[n];if(p=l.config.globalProperties,u(p,n))return p[n]},set({_:e},n,r){let{data:i,setupState:a,ctx:o}=e;return Jr(a,n)?(a[n]=r,!0):i!==t&&u(i,n)?(i[n]=r,!0):u(e.props,n)||n[0]===`$`&&n.slice(1)in e?!1:(o[n]=r,!0)},has({_:{data:e,setupState:n,accessCache:r,ctx:i,appContext:a,props:o,type:s}},c){let l;return!!(r[c]||e!==t&&c[0]!==`$`&&u(e,c)||Jr(n,c)||u(o,c)||u(i,c)||u(qr,c)||u(a.config.globalProperties,c)||(l=s.__cssModules)&&l[c])},defineProperty(e,t,n){return n.get==null?u(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function Xr(e){return d(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var Zr=!0;function Qr(e){let t=ni(e),n=e.proxy,i=e.ctx;Zr=!1,t.beforeCreate&&ei(t.beforeCreate,e,`bc`);let{data:a,computed:o,methods:s,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:g,updated:_,activated:y,deactivated:b,beforeDestroy:x,beforeUnmount:S,destroyed:C,unmounted:w,render:ee,renderTracked:te,renderTriggered:ne,errorCaptured:T,serverPrefetch:re,expose:E,inheritAttrs:ie,components:ae,directives:oe,filters:se}=t;if(u&&$r(u,i,null),s)for(let e in s){let t=s[e];h(t)&&(i[e]=t.bind(n))}if(a){let t=a.call(n,n);v(t)&&(e.data=Rt(t))}if(Zr=!0,o)for(let e in o){let t=o[e],a=X({get:h(t)?t.bind(n,n):h(t.get)?t.get.bind(n,n):r,set:!h(t)&&h(t.set)?t.set.bind(n):r});Object.defineProperty(i,e,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(let e in c)ti(c[e],i,n,e);if(l){let e=h(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{Mn(t,e[t])})}f&&ei(f,e,`c`);function D(e,t){d(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(D(Or,p),D(kr,m),D(Ar,g),D(jr,_),D(Sr,y),D(Cr,b),D(Lr,T),D(Ir,te),D(Fr,ne),D(Mr,S),D(Nr,w),D(Pr,re),d(E)){if(E.length){let t=e.exposed||={};E.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={}}ee&&e.render===r&&(e.render=ee),ie!=null&&(e.inheritAttrs=ie),ae&&(e.components=ae),oe&&(e.directives=oe),re&&hr(e)}function $r(e,t,n=r){d(e)&&(e=si(e));for(let n in e){let r=e[n],i;i=v(r)?`default`in r?Nn(r.from||n,r.default,!0):Nn(r.from||n):Nn(r),P(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function ei(e,t,n){ln(d(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function ti(e,t,n,r){let i=r.includes(`.`)?zn(n,r):()=>n[r];if(g(e)){let n=t[e];h(n)&&In(i,n)}else if(h(e))In(i,e.bind(n));else if(v(e)){if(d(e))e.forEach(e=>ti(e,t,n,r));else{let r=h(e.handler)?e.handler.bind(n):t[e.handler];h(r)&&In(i,r,e)}}}function ni(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>ri(c,e,o,!0)),ri(c,t,o)),v(t)&&a.set(t,c),c}function ri(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&ri(e,a,n,!0),i&&i.forEach(t=>ri(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=ii[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var ii={data:ai,props:li,emits:li,methods:ci,computed:ci,beforeCreate:z,created:z,beforeMount:z,mounted:z,beforeUpdate:z,updated:z,beforeDestroy:z,beforeUnmount:z,destroyed:z,unmounted:z,activated:z,deactivated:z,errorCaptured:z,serverPrefetch:z,components:ci,directives:ci,watch:ui,provide:ai,inject:oi};function ai(e,t){return t?e?function(){return s(h(e)?e.call(this,this):e,h(t)?t.call(this,this):t)}:t:e}function oi(e,t){return ci(si(e),si(t))}function si(e){if(d(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function z(e,t){return e?[...new Set([].concat(e,t))]:t}function ci(e,t){return e?s(Object.create(null),e,t):t}function li(e,t){return e?d(e)&&d(t)?[...new Set([...e,...t])]:s(Object.create(null),Xr(e),Xr(t??{})):t}function ui(e,t){if(!e)return t;if(!t)return e;let n=s(Object.create(null),e);for(let r in t)n[r]=z(e[r],t[r]);return n}function di(){return{app:null,config:{isNativeTag:i,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var fi=0;function pi(e,t){return function(n,r=null){h(n)||(n=s({},n)),r!=null&&!v(r)&&(r=null);let i=di(),a=new WeakSet,o=[],c=!1,l=i.app={_uid:fi++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Ga,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&h(e.install)?(a.add(e),e.install(l,...t)):h(e)&&(a.add(e),e(l,...t))),l},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),l},component(e,t){return t?(i.components[e]=t,l):i.components[e]},directive(e,t){return t?(i.directives[e]=t,l):i.directives[e]},mount(a,o,s){if(!c){let u=l._ceVNode||K(n,r);return u.appContext=i,s===!0?s=`svg`:s===!1&&(s=void 0),o&&t?t(u,a):e(u,a,s),c=!0,l._container=a,a.__vue_app__=l,Va(u.component)}},onUnmount(e){o.push(e)},unmount(){c&&(ln(o,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return i.provides[e]=t,l},runWithContext(e){let t=mi;mi=l;try{return e()}finally{mi=t}}};return l}}var mi=null,hi=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${T(t)}Modifiers`]||e[`${E(t)}Modifiers`];function gi(e,n,...r){if(e.isUnmounted)return;let i=e.vnode.props||t,a=r,o=n.startsWith(`update:`),s=o&&hi(i,n.slice(7));s&&(s.trim&&(a=r.map(e=>g(e)?e.trim():e)),s.number&&(a=a.map(ce)));let c,l=i[c=ae(n)]||i[c=ae(T(n))];!l&&o&&(l=i[c=ae(E(n))]),l&&ln(l,e,6,a);let u=i[c+`Once`];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,ln(u,e,6,a)}}var _i=new WeakMap;function vi(e,t,n=!1){let r=n?_i:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},c=!1;if(!h(e)){let r=e=>{let n=vi(e,t,!0);n&&(c=!0,s(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!c?(v(e)&&r.set(e,null),null):(d(a)?a.forEach(e=>o[e]=null):s(o,a),v(e)&&r.set(e,o),o)}function yi(e,t){return!e||!a(t)?!1:(t=t.slice(2),t=t===`Once`?t:t.replace(/Once$/,``),u(e,t[0].toLowerCase()+t.slice(1))||u(e,E(t))||u(e,t))}function bi(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:s,attrs:c,emit:l,render:u,renderCache:d,props:f,data:p,setupState:m,ctx:h,inheritAttrs:g}=e,_=On(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=ba(u.call(t,e,d,f,m,p,h)),y=c}else{let e=t;v=ba(e.length>1?e(f,{attrs:c,slots:s,emit:l}):e(f,null)),y=t.props?c:xi(c)}}catch(t){aa.length=0,un(t,e,1),v=K(H)}let b=v;if(y&&g!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(o)&&(y=Si(y,a)),b=va(b,y,!1,!0))}return n.dirs&&(b=va(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&pr(Hn(b.type)&&fr(b)||b,n.transition),v=b,On(_),v}var xi=e=>{let t;for(let n in e)(n===`class`||n===`style`||a(n))&&((t||={})[n]=e[n]);return t},Si=(e,t)=>{let n={};for(let r in e)(!o(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Ci(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?wi(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(Ti(o,r,n)&&!yi(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?!o||wi(r,o,l):!!o;return!1}function wi(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(Ti(t,e,a)&&!yi(n,a))return!0}return!1}function Ti(e,t,n){let r=e[n],i=t[n];return n===`style`&&v(r)&&v(i)?!we(r,i):r!==i}function Ei({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var Di={},Oi=()=>Object.create(Di),ki=e=>Object.getPrototypeOf(e)===Di;function Ai(e,t,n,r=!1){let i={},a=Oi();e.propsDefaults=Object.create(null),Mi(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);e.props=n?r?i:zt(i):e.type.props?i:a,e.attrs=a}function ji(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=N(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(yi(e.emitsOptions,o))continue;let d=t[o];if(c){if(u(a,o))d!==a[o]&&(a[o]=d,l=!0);else{let t=T(o);i[t]=Ni(c,s,t,d,e,!1)}}else d!==a[o]&&(a[o]=d,l=!0)}}}else{Mi(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!u(t,a)&&((r=E(a))===a||!u(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=Ni(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!u(t,e))&&(delete a[e],l=!0)}l&&it(e.attrs,`set`,``)}function Mi(e,n,r,i){let[a,o]=e.propsOptions,s=!1,c;if(n)for(let t in n){if(ee(t))continue;let l=n[t],d;a&&u(a,d=T(t))?!o||!o.includes(d)?r[d]=l:(c||={})[d]=l:yi(e.emitsOptions,t)||(!(t in i)||l!==i[t])&&(i[t]=l,s=!0)}if(o){let n=N(r),i=c||t;for(let t=0;t<o.length;t++){let s=o[t];r[s]=Ni(a,n,s,i[s],e,!u(i,s))}}return s}function Ni(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=u(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&h(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=ja(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===E(n))&&(r=!0))}return r}var Pi=new WeakMap;function Fi(e,r,i=!1){let a=i?Pi:r.propsCache,o=a.get(e);if(o)return o;let c=e.props,l={},f=[],p=!1;if(!h(e)){let t=e=>{p=!0;let[t,n]=Fi(e,r,!0);s(l,t),n&&f.push(...n)};!i&&r.mixins.length&&r.mixins.forEach(t),e.extends&&t(e.extends),e.mixins&&e.mixins.forEach(t)}if(!c&&!p)return v(e)&&a.set(e,n),n;if(d(c))for(let e=0;e<c.length;e++){let n=T(c[e]);Ii(n)&&(l[n]=t)}else if(c)for(let e in c){let t=T(e);if(Ii(t)){let n=c[e],r=l[t]=d(n)||h(n)?{type:n}:s({},n),i=r.type,a=!1,o=!0;if(d(i))for(let e=0;e<i.length;++e){let t=i[e],n=h(t)&&t.name;if(n===`Boolean`){a=!0;break}n===`String`&&(o=!1)}else a=h(i)&&i.name===`Boolean`;r[0]=a,r[1]=o,(a||u(r,`default`))&&f.push(t)}}let m=[l,f];return v(e)&&a.set(e,m),m}function Ii(e){return e[0]!==`$`&&!ee(e)}var Li=e=>e===`_`||e===`_ctx`||e===`$stable`,Ri=e=>d(e)?e.map(ba):[ba(e)],zi=(e,t,n)=>{if(t._n)return t;let r=kn((...e)=>Ri(t(...e)),n);return r._c=!1,r},Bi=(e,t,n)=>{let r=e._ctx;for(let n in e){if(Li(n))continue;let i=e[n];if(h(i))t[n]=zi(n,i,r);else if(i!=null){let e=Ri(i);t[n]=()=>e}}},Vi=(e,t)=>{let n=Ri(t);e.slots.default=()=>n},Hi=(e,t,n)=>{for(let r in t)(n||!Li(r))&&(e[r]=t[r])},Ui=(e,t,n)=>{let r=e.slots=Oi();if(e.vnode.shapeFlag&32){let e=t._;e?(Hi(r,t,n),n&&D(r,`_`,e,!0)):Bi(t,r)}else t&&Vi(e,t)},Wi=(e,n,r)=>{let{vnode:i,slots:a}=e,o=!0,s=t;if(i.shapeFlag&32){let e=n._;e?r&&e===1?o=!1:Hi(a,n,r):(o=!n.$stable,Bi(n,a)),s=n}else n&&(Vi(e,n),s={default:1});if(o)for(let e in a)!Li(e)&&s[e]==null&&delete a[e]},B=na;function Gi(e){return Ki(e)}function Ki(e,i){let a=de();a.__VUE__=!0;let{insert:o,remove:s,patchProp:c,createElement:l,createText:u,createComment:d,setText:f,setElementText:p,parentNode:m,nextSibling:h,setScopeId:g=r,insertStaticContent:_}=e,v=(e,t,r,i=null,a=null,o=null,s=void 0,c=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!pa(e,t)&&(i=be(e),ge(e,a,o,!0),e=null),t.patchFlag===-2&&(l=!1,t.dynamicChildren=null),t.dynamicChildren&&e&&e.dynamicChildren&&e.dynamicChildren.hasOnce&&(t.dynamicChildren===n&&(t.dynamicChildren=[]),t.dynamicChildren.hasOnce=!0);let{type:u,ref:d,shapeFlag:f}=t;switch(u){case ra:y(e,t,r,i);break;case H:b(e,t,r,i);break;case ia:e??x(t,r,i,s);break;case V:ae(e,t,r,i,a,o,s,c,l);break;default:f&1?w(e,t,r,i,a,o,s,c,l):f&6?oe(e,t,r,i,a,o,s,c,l):(f&64||f&128)&&u.process(e,t,r,i,a,o,s,c,l,Ce)}d!=null&&a?vr(d,e&&e.ref,o,t||e,!t):d==null&&e&&e.ref!=null&&vr(e.ref,null,o,e,!0)},y=(e,t,n,r)=>{if(e==null)o(t.el=u(t.children),n,r);else{let n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},b=(e,t,n,r)=>{e==null?o(t.el=d(t.children||``),n,r):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=h(e),o(e,n,r),e=i;o(t,n,r)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),s(e),e=n;s(t)},w=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)te(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),re(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},te=(e,t,n,r,i,a,s,u)=>{let d,f,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(d=e.el=l(e.type,a,m&&m.is,m),h&8?p(d,e.children):h&16&&T(e.children,d,null,r,i,qi(e,a),s,u),_&&jn(e,null,r,`created`),ne(d,e,e.scopeId,s,r),m){for(let e in m)e!==`value`&&!ee(e)&&c(d,e,null,m[e],a,r);`value`in m&&c(d,`value`,null,m.value,a),(f=m.onVnodeBeforeMount)&&wa(f,r,e)}_&&jn(e,null,r,`beforeMount`);let v=Yi(i,g);v&&g.beforeEnter(d),o(d,t,n),((f=m&&m.onVnodeMounted)||v||_)&&B(()=>{try{f&&wa(f,r,e),v&&g.enter(d),_&&jn(e,null,r,`mounted`)}finally{}},i)},ne=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||ta(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;ne(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},T=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++){let c=e[l]=s?xa(e[l]):ba(e[l]);v(null,c,t,n,r,i,a,o,s)}},re=(e,n,r,i,a,o,s)=>{let l=n.el=e.el,{patchFlag:u,dynamicChildren:d,dirs:f}=n;u|=e.patchFlag&16;let m=e.props||t,h=n.props||t,g;if(r&&Ji(r,!1),(g=h.onVnodeBeforeUpdate)&&wa(g,r,n,e),f&&jn(n,e,r,`beforeUpdate`),r&&Ji(r,!0),d&&(!e.dynamicChildren||e.dynamicChildren.length!==d.length)&&(u=0,s=!1,d=null),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&p(l,``),d?E(e.dynamicChildren,d,l,r,i,qi(n,a),o):s||fe(e,n,l,null,r,i,qi(n,a),o,!1),u>0){if(u&16)ie(l,m,h,r,a);else if(u&2&&m.class!==h.class&&c(l,`class`,null,h.class,a),u&4&&c(l,`style`,m.style,h.style,a),u&8){let e=n.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t],i=m[n],o=h[n];(o!==i||n===`value`)&&c(l,n,i,o,a,r)}}u&1&&e.children!==n.children&&p(l,n.children)}else!s&&d==null&&ie(l,m,h,r,a);((g=h.onVnodeUpdated)||f)&&B(()=>{g&&wa(g,r,n,e),f&&jn(n,e,r,`updated`)},i)},E=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s],u=c.el&&(c.type===V||!pa(c,l)||c.shapeFlag&198)?m(c.el):n;v(c,l,u,null,r,i,a,o,!0)}},ie=(e,n,r,i,a)=>{if(n!==r){if(n!==t)for(let t in n)!ee(t)&&!(t in r)&&c(e,t,n[t],null,a,i);for(let t in r){if(ee(t))continue;let o=r[t],s=n[t];o!==s&&t!==`value`&&c(e,t,s,o,a,i)}`value`in r&&c(e,`value`,n.value,r.value,a)}},ae=(e,t,n,r,i,a,s,c,l)=>{let d=t.el=e?e.el:u(``),f=t.anchor=e?e.anchor:u(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(c=c?c.concat(h):h),e==null?(o(d,n,r),o(f,n,r),T(t.children||[],n,f,i,a,s,c,l)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(E(e.dynamicChildren,m,n,i,a,s,c),(t.key!=null||i&&t===i.subTree)&&Xi(e,t,!0)):fe(e,t,n,f,i,a,s,c,l)},oe=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):D(t,n,r,i,a,o,c):ce(e,t,c)},D=(e,t,n,r,i,a,o)=>{let s=e.component=Da(e,r,i);if(xr(e)&&(s.ctx.renderer=Ce),Fa(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,le,o),!e.el){let r=s.subTree=K(H);b(null,r,t,n),e.placeholder=r.el}}else le(s,e,t,n,i,a,o)},ce=(e,t,n)=>{let r=t.component=e.component;if(Ci(e,t,n)){if(r.asyncDep&&!r.asyncResolved){t.el=e.el,ue(r,t,n);return}r.next=t,r.update()}else t.el=e.el,r.vnode=t},le=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=Qi(e);if(n){t&&(t.el=c.el,ue(e,t,o)),n.asyncDep.then(()=>{B(()=>{e.isUnmounted||l()},i)});return}}let u=t,d;Ji(e,!1),t?(t.el=c.el,ue(e,t,o)):t=c,n&&se(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&wa(d,s,t,c),Ji(e,!0);let f=bi(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el),be(p),e,i,a),t.el=f.el,u===null&&Ei(e,f.el),r&&B(r,i),(d=t.props&&t.props.onVnodeUpdated)&&B(()=>wa(d,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=br(t);if(Ji(e,!1),l&&se(l),!m&&(o=c&&c.onVnodeBeforeMount)&&wa(o,d,t),Ji(e,!0),s&&Te){let t=()=>{e.subTree=bi(e),Te(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=bi(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&B(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;B(()=>wa(o,d,e),i)}(t.shapeFlag&256||d&&br(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&B(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new Me(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>bn(u),Ji(e,!0),l()},ue=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,ji(e,t.props,r,n),Wi(e,t.children,n),qe(),Cn(e),Je()},fe=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:m}=t;if(f>0){if(f&128){me(l,d,n,r,i,a,o,s,c);return}if(f&256){pe(l,d,n,r,i,a,o,s,c);return}}m&8?(u&16&&ye(l,i,a),d!==l&&p(n,d)):u&16?m&16?me(l,d,n,r,i,a,o,s,c):ye(l,i,a,!0):(u&8&&p(n,``),m&16&&T(d,n,r,i,a,o,s,c))},pe=(e,t,r,i,a,o,s,c,l)=>{e||=n,t||=n;let u=e.length,d=t.length,f=Math.min(u,d),p=0;for(;p<f;p++){let n=t[p]=l?xa(t[p]):ba(t[p]);v(e[p],n,r,null,a,o,s,c,l)}u>d?ye(e,a,o,!0,!1,f):T(t,r,i,a,o,s,c,l,f)},me=(e,t,r,i,a,o,s,c,l)=>{let u=0,d=t.length,f=e.length-1,p=d-1;for(;u<=f&&u<=p;){let n=e[u],i=t[u]=l?xa(t[u]):ba(t[u]);if(pa(n,i))v(n,i,r,null,a,o,s,c,l);else break;u++}for(;u<=f&&u<=p;){let n=e[f],i=t[p]=l?xa(t[p]):ba(t[p]);if(pa(n,i))v(n,i,r,null,a,o,s,c,l);else break;f--,p--}if(u>f){if(u<=p){let e=p+1,n=e<d?t[e].el:i;for(;u<=p;)v(null,t[u]=l?xa(t[u]):ba(t[u]),r,n,a,o,s,c,l),u++}}else if(u>p)for(;u<=f;)ge(e[u],a,o,!0),u++;else{let m=u,h=u,g=new Map;for(u=h;u<=p;u++){let e=t[u]=l?xa(t[u]):ba(t[u]);e.key!=null&&g.set(e.key,u)}let _,y=0,b=p-h+1,x=!1,S=0,C=Array(b);for(u=0;u<b;u++)C[u]=0;for(u=m;u<=f;u++){let n=e[u];if(y>=b){ge(n,a,o,!0);continue}let i;if(n.key!=null)i=g.get(n.key);else for(_=h;_<=p;_++)if(C[_-h]===0&&pa(n,t[_])){i=_;break}i===void 0?ge(n,a,o,!0):(C[i-h]=u+1,i>=S?S=i:x=!0,v(n,t[i],r,null,a,o,s,c,l),y++)}let w=x?Zi(C):n;for(_=w.length-1,u=b-1;u>=0;u--){let e=h+u,n=t[e],f=t[e+1],p=e+1<d?f.el||ea(f):i;C[u]===0?v(null,n,r,p,a,o,s,c,l):x&&(_<0||u!==w[_]?he(n,r,p,2):_--)}}},he=(e,t,n,r,i=null)=>{let{el:a,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){he(e.component.subTree,t,n,r);return}if(d&128){e.suspense.move(t,n,r);return}if(d&64){c.move(e,t,n,Ce);return}if(c===V){o(a,t,n);for(let e=0;e<u.length;e++)he(u[e],t,n,r);o(e.anchor,t,n);return}if(c===ia){S(e,t,n);return}if(r!==2&&d&1&&l){if(r===0)l.persisted&&!a[er]?o(a,t,n):(l.beforeEnter(a),o(a,t,n),B(()=>l.enter(a),i));else{let{leave:r,delayLeave:i,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?s(a):o(a,t,n)},d=()=>{let e=a._isLeaving||!!a[er];a._isLeaving&&a[er](!0),l.persisted&&!e?u():r(a,()=>{u(),c&&c()})};i?i(a,u,d):d()}}else o(a,t,n)},ge=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if((d===-2||l&&l.hasOnce)&&(i=!1),s!=null&&(qe(),vr(s,null,n,e,!0),Je()),p!=null&&(!e.ctx||e.ctx===t)&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let h=u&1&&f,g=!br(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&wa(_,t,e),u&6)ve(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&jn(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,Ce,r):l&&!l.hasOnce&&(a!==V||d>0&&d&64)?ye(l,t,n,!1,!0):(a===V&&d&384||!i&&u&16)&&ye(c,t,n),r&&O(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&B(()=>{_&&wa(_,t,e),h&&jn(e,null,t,`unmounted`),v&&(e.el=null)},n)},O=e=>{let{type:t,el:n,anchor:r,transition:i}=e;if(t===V){_e(n,r);return}if(t===ia){C(e),i&&!i.persisted&&i.afterLeave&&i.afterLeave();return}let a=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(e.shapeFlag&1&&i&&!i.persisted){let{leave:t,delayLeave:r}=i,o=()=>t(n,a);r?r(e.el,a,o):o()}else a()},_e=(e,t)=>{let n;for(;e!==t;)n=h(e),s(e),e=n;s(t)},ve=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;$i(c),$i(l),r&&se(r),i.stop(),a?(a.flags|=8,ge(o,e,t,n)):e.vnode.el&&o&&(o.transition=e.vnode.transition,ge(o,e,t,n)),s&&B(s,t),B(()=>{e.isUnmounted=!0},t)},ye=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)ge(e[o],t,n,r,i)},be=e=>{if(e.shapeFlag&6)return be(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[Vn];return n?h(n):t},xe=!1,Se=(e,t,n)=>{let r;e==null?t._vnode&&(ge(t._vnode,null,null,!0),r=t._vnode.component):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,xe||=(xe=!0,Cn(r),wn(),!1)},Ce={p:v,um:ge,m:he,r:O,mt:D,mc:T,pc:fe,pbc:E,n:be,o:e},we,Te;return i&&([we,Te]=i(Ce)),{render:Se,hydrate:we,createApp:pi(Se,we)}}function qi({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function Ji({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Yi(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Xi(e,t,n=!1){let r=e.children,i=t.children;if(d(r)&&d(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=xa(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&Xi(t,a)),a.type===ra&&(a.patchFlag===-1&&(a=i[e]=xa(a)),a.el=t.el),a.type===H&&!a.el&&(a.el=t.el)}}function Zi(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-->0;)n[a]=o,o=t[o];return n}function Qi(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Qi(t)}function $i(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function ea(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?ea(t.subTree):null}var ta=e=>e.__isSuspense;function na(e,t){t&&t.pendingBranch?d(e)?t.effects.push(...e):t.effects.push(e):Sn(e)}var V=Symbol.for(`v-fgt`),ra=Symbol.for(`v-txt`),H=Symbol.for(`v-cmt`),ia=Symbol.for(`v-stc`),aa=[],oa=null;function U(e=!1){aa.push(oa=e?null:[])}function sa(){aa.pop(),oa=aa[aa.length-1]||null}var ca=1;function la(e,t=!1){ca+=e,e<0&&oa&&t&&(oa.hasOnce=!0)}function ua(e){return e.dynamicChildren=ca>0?oa||n:null,sa(),ca>0&&oa&&oa.push(e),e}function W(e,t,n,r,i,a){return ua(G(e,t,n,r,i,a,!0))}function da(e,t,n,r,i){return ua(K(e,t,n,r,i,!0))}function fa(e){return e?e.__v_isVNode===!0:!1}function pa(e,t){return e.type===t.type&&e.key===t.key}var ma=({key:e})=>e??null,ha=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:g(e)||P(e)||h(e)?{i:R,r:e,k:t,f:!!n}:e);function G(e,t=null,n=null,r=0,i=null,a=e===V?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ma(t),ref:t&&ha(t),scopeId:Dn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:R};return s?(Sa(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=g(n)?8:16),ca>0&&!o&&oa&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&oa.push(c),c}var K=ga;function ga(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===zr)&&(e=H),fa(e)){let r=va(e,t,!0);return n&&Sa(r,n),ca>0&&!a&&oa&&(r.shapeFlag&6?oa[oa.indexOf(e)]=r:oa.push(r)),r.patchFlag=-2,r}if(Ua(e)&&(e=e.__vccOpts),t){t=_a(t);let{class:e,style:n}=t;e&&!g(e)&&(t.class=O(e)),v(n)&&(Gt(n)&&!d(n)&&(n=s({},n)),t.style=fe(n))}let o=g(e)?1:ta(e)?128:Hn(e)?64:v(e)?4:h(e)?2:0;return G(e,t,n,r,i,o,a,!0)}function _a(e){return e?Gt(e)||ki(e)?s({},e):e:null}function va(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?Ca(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&ma(l),ref:t&&t.ref?n&&a?d(a)?a.concat(ha(t)):[a,ha(t)]:ha(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==V?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&va(e.ssContent),ssFallback:e.ssFallback&&va(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return c&&r&&pr(u,c.clone(u)),u}function q(e=` `,t=0){return K(ra,null,e,t)}function ya(e,t){let n=K(ia,null,e);return n.staticCount=t,n}function J(e=``,t=!1){return t?(U(),da(H,null,e)):K(H,null,e)}function ba(e){return e==null||typeof e==`boolean`?K(H):d(e)?K(V,null,e.slice()):fa(e)?xa(e):K(ra,null,String(e))}function xa(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:va(e)}function Sa(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(d(t))n=16;else if(typeof t==`object`){if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),Sa(e,n()),n._c&&(n._d=!0));return}{n=32;let r=t._;!r&&!ki(t)?t._ctx=R:r===3&&R&&(R.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}}else if(h(t)){if(r&65){Sa(e,{default:t});return}t={default:t,_ctx:R},n=32}else t=String(t),r&64?(n=16,t=[q(t)]):n=8;e.children=t,e.shapeFlag|=n}function Ca(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=O([t.class,r.class]));else if(e===`style`)t.style=fe([t.style,r.style]);else if(a(e)){let n=t[e],i=r[e];i&&n!==i&&!(d(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!o(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function wa(e,t,n,r=null){ln(e,t,7,[n,r])}var Ta=di(),Ea=0;function Da(e,n,r){let i=e.type,a=(n?n.appContext:e.appContext)||Ta,o={uid:Ea++,vnode:e,type:i,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ke(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),ids:n?n.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fi(i,a),emitsOptions:vi(i,a),emit:null,emitted:null,propsDefaults:t,inheritAttrs:i.inheritAttrs,ctx:t,data:t,props:t,attrs:t,slots:t,refs:t,setupState:t,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=gi.bind(null,o),e.ce&&e.ce(o),o}var Y=null,Oa=()=>Y||R,ka,Aa;{let e=de(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};ka=t(`__VUE_INSTANCE_SETTERS__`,e=>Y=e),Aa=t(`__VUE_SSR_SETTERS__`,e=>Pa=e)}var ja=e=>{let t=Y;return ka(e),e.scope.on(),()=>{e.scope.off(),ka(t)}},Ma=()=>{Y&&Y.scope.off(),ka(null)};function Na(e){return e.vnode.shapeFlag&4}var Pa=!1;function Fa(e,t=!1,n=!1){t&&Aa(t);let{props:r,children:i}=e.vnode,a=Na(e);Ai(e,r,a,t),Ui(e,i,n||t);let o=a?Ia(e,t):void 0;return t&&Aa(!1),o}function Ia(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Yr);let{setup:r}=n;if(r){qe();let n=e.setupContext=r.length>1?Ba(e):null,i=ja(e),a=cn(r,e,0,[e.props,n]),o=y(a);if(Je(),i(),(o||e.sp)&&!br(e)&&hr(e),o){if(a.then(Ma,Ma),t)return a.then(n=>{Aa(!0);try{La(e,n,t)}finally{Aa(!1)}}).catch(t=>{un(t,e,0)});e.asyncDep=a}else La(e,a,t)}else Ra(e,t)}function La(e,t,n){h(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:v(t)&&(e.setupState=Qt(t)),Ra(e,n)}function Ra(e,t,n){let i=e.type;e.render||=i.render||r;{let t=ja(e);qe();try{Qr(e)}finally{Je(),t()}}}var za={get(e,t){return M(e,`get`,``),e[t]}};function Ba(e){return{attrs:new Proxy(e.attrs,za),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function Va(e){return e.exposed?e.exposeProxy||=new Proxy(Qt(Kt(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in qr)return qr[n](e)},has(e,t){return t in e||t in qr}}):e.proxy}function Ha(e,t=!0){return h(e)?e.displayName||e.name:e.name||t&&e.__name}function Ua(e){return h(e)&&`__vccOpts`in e}var X=(e,t)=>en(e,t,Pa);function Wa(e,t,n){try{la(-1);let r=arguments.length;return r===2?v(t)&&!d(t)?fa(t)?K(e,null,[t]):K(e,t):K(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&fa(n)&&(n=[n]),K(e,t,n))}finally{la(1)}}var Ga=`3.5.43`,Ka=void 0,qa=typeof window<`u`&&window.trustedTypes;if(qa)try{Ka=qa.createPolicy(`vue`,{createHTML:e=>e})}catch{}var Ja=Ka?e=>Ka.createHTML(e):e=>e,Ya=`http://www.w3.org/2000/svg`,Xa=`http://www.w3.org/1998/Math/MathML`,Za=typeof document<`u`?document:null,Qa=Za&&Za.createElement(`template`),$a={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?Za.createElementNS(Ya,e):t===`mathml`?Za.createElementNS(Xa,e):n?Za.createElement(e,{is:n}):Za.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>Za.createTextNode(e),createComment:e=>Za.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Za.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),i!==a&&(i=i.nextSibling););else{Qa.innerHTML=Ja(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=Qa.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},eo=`transition`,to=`animation`,no=Symbol(`_vtc`),ro={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},io=s({},ir,ro),ao=(e=>(e.displayName=`Transition`,e.props=io,e))((e,{slots:t})=>Wa(cr,co(e),t)),oo=(e,t=[])=>{d(e)?e.forEach(e=>e(...t)):e&&e(...t)},so=e=>e?d(e)?e.some(e=>e.length>1):e.length>1:!1;function co(e){let t={};for(let n in e)n in ro||(t[n]=e[n]);if(e.css===!1)return t;let{name:n=`v`,type:r,duration:i,enterFromClass:a=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=a,appearActiveClass:u=o,appearToClass:d=c,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,h=lo(i),g=h&&h[0],_=h&&h[1],{onBeforeEnter:v,onEnter:y,onEnterCancelled:b,onLeave:x,onLeaveCancelled:S,onBeforeAppear:C=v,onAppear:w=y,onAppearCancelled:ee=b}=t,te=(e,t,n,r)=>{e._enterCancelled=r,po(e,t?d:c),po(e,t?u:o),n&&n()},ne=(e,t)=>{e._isLeaving=!1,po(e,f),po(e,m),po(e,p),t&&t()},T=e=>(t,n)=>{let i=e?w:y,o=()=>te(t,e,n);oo(i,[t,o]),mo(()=>{po(t,e?l:a),fo(t,e?d:c),so(i)||go(t,r,g,o)})};return s(t,{onBeforeEnter(e){oo(v,[e]),fo(e,a),fo(e,o)},onBeforeAppear(e){oo(C,[e]),fo(e,l),fo(e,u)},onEnter:T(!1),onAppear:T(!0),onLeave(e,t){e._isLeaving=!0;let n=()=>ne(e,t);fo(e,f),e._enterCancelled?(fo(e,p),bo(e)):(bo(e),fo(e,p)),mo(()=>{e._isLeaving&&(po(e,f),fo(e,m),so(x)||go(e,r,_,n))}),oo(x,[e,n])},onEnterCancelled(e){te(e,!1,void 0,!0),oo(b,[e])},onAppearCancelled(e){te(e,!0,void 0,!0),oo(ee,[e])},onLeaveCancelled(e){ne(e),oo(S,[e])}})}function lo(e){if(e==null)return null;if(v(e))return[uo(e.enter),uo(e.leave)];{let t=uo(e);return[t,t]}}function uo(e){return le(e)}function fo(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[no]||(e[no]=new Set)).add(t)}function po(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));let n=e[no];n&&(n.delete(t),n.size||(e[no]=void 0))}function mo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}var ho=0;function go(e,t,n,r){let i=e._endId=++ho,a=()=>{i===e._endId&&r()};if(n!=null)return setTimeout(a,n);let{type:o,timeout:s,propCount:c}=_o(e,t);if(!o)return r();let l=o+`end`,u=0,d=()=>{e.removeEventListener(l,f),a()},f=t=>{t.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},s+1),e.addEventListener(l,f)}function _o(e,t){let n=window.getComputedStyle(e),r=e=>(n[e]||``).split(`, `),i=r(`${eo}Delay`),a=r(`${eo}Duration`),o=vo(i,a),s=r(`${to}Delay`),c=r(`${to}Duration`),l=vo(s,c),u=null,d=0,f=0;t===eo?o>0&&(u=eo,d=o,f=a.length):t===to?l>0&&(u=to,d=l,f=c.length):(d=Math.max(o,l),u=d>0?o>l?eo:to:null,f=u?u===eo?a.length:c.length:0);let p=u===eo&&/\b(?:transform|all)(?:,|$)/.test(r(`${eo}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:p}}function vo(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((t,n)=>yo(t)+yo(e[n])))}function yo(e){return e===`auto`?0:Number(e.slice(0,-1).replace(`,`,`.`))*1e3}function bo(e){return(e?e.ownerDocument:document).body.offsetHeight}function xo(e,t,n){let r=e[no];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var So=Symbol(`_vod`),Co=Symbol(`_vsh`),wo=Symbol(``),To=/(?:^|;)\s*display\s*:/;function Eo(e,t,n){let r=e.style,i=g(n),a=!1;if(n&&!i){if(t){if(g(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??Oo(r,t,``)}else for(let e in t)n[e]??Oo(r,e,``)}for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?Oo(r,i,``):Mo(e,i,!g(t)&&t?t[i]:void 0,o)||Oo(r,i,o)}}else if(i){if(t!==n){let e=r[wo];e&&(n+=`;`+e),r.cssText=n,a=To.test(n)}}else t&&e.removeAttribute(`style`);So in e&&(e[So]=a?r.display:``,e[Co]&&(r.display=`none`))}var Do=/\s*!important$/;function Oo(e,t,n){if(d(n))n.forEach(n=>Oo(e,t,n));else if(n??=``,t.startsWith(`--`))Do.test(n)?e.setProperty(t,n.replace(Do,``),`important`):e.setProperty(t,n);else{let r=jo(e,t);Do.test(n)?e.setProperty(E(r),n.replace(Do,``),`important`):e[r]=n}}var ko=[`Webkit`,`Moz`,`ms`],Ao={};function jo(e,t){let n=Ao[t];if(n)return n;let r=T(t);if(r!==`filter`&&r in e)return Ao[t]=r;r=ie(r);for(let n=0;n<ko.length;n++){let i=ko[n]+r;if(i in e)return Ao[t]=i}return t}function Mo(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&g(r)&&n===r}var No=`http://www.w3.org/1999/xlink`;function Po(e,t,n,r,i,a=ve(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(No,t.slice(6,t.length)):e.setAttributeNS(No,t,n):n==null||a&&!ye(n)?e.removeAttribute(t):e.setAttribute(t,a?``:_(n)?String(n):n)}function Fo(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?Ja(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=ye(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Io(e,t,n,r){e.addEventListener(t,n,r)}function Lo(e,t,n,r){e.removeEventListener(t,n,r)}var Ro=Symbol(`_vei`);function zo(e,t,n,r,i=null){let a=e[Ro]||(e[Ro]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=Ho(t);r?Io(e,n,a[t]=Ko(r,i),s):o&&(Lo(e,n,o,s),a[t]=void 0)}}var Bo=/(Once|Passive|Capture)$/,Vo=/^on:?(?:Once|Passive|Capture)$/;function Ho(e){let t,n;for(;(n=e.match(Bo))&&!Vo.test(e);)t||={},e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===`:`?e.slice(3):E(e.slice(2)),t]}var Uo=0,Wo=Promise.resolve(),Go=()=>Uo||=(Wo.then(()=>Uo=0),Date.now());function Ko(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;let r=n.value;if(d(r)){let n=e.stopImmediatePropagation;e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0};let i=r.slice(),a=[e];for(let n=0;n<i.length&&!e._stopped;n++){let e=i[n];e&&ln(e,t,5,a)}}else ln(r,t,5,[e])};return n.value=e,n.attached=Go(),n}var qo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Jo=(e,t,n,r,i,s)=>{let c=i===`svg`;t===`class`?xo(e,r,c):t===`style`?Eo(e,n,r):a(t)?o(t)||zo(e,t,n,r,s):(t[0]===`.`?(t=t.slice(1),1):t[0]===`^`?(t=t.slice(1),0):Yo(e,t,r,c))?(Fo(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&Po(e,t,r,c,s,t!==`value`)):e._isVueCE&&(Xo(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!g(r)))?Fo(e,T(t),r,s,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),Po(e,t,r,c))};function Yo(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&qo(t)&&h(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return qo(t)&&g(n)?!1:t in e}function Xo(e,t){let n=e._def.props;if(!n)return!1;let r=T(t);return Array.isArray(n)?n.some(e=>T(e)===r):Object.keys(n).some(e=>T(e)===r)}var Zo=e=>{let t=e.props[`onUpdate:modelValue`]||!1;return d(t)?e=>se(t,e):t},Qo=Symbol(`_assign`),$o={deep:!0,created(e,t,n){e[Qo]=Zo(n),Io(e,`change`,()=>{let t=e._modelValue,n=ts(e),r=e.checked,i=e[Qo];if(d(t)){let e=Te(t,n),a=e!==-1;if(r&&!a)i(t.concat(n));else if(!r&&a){let n=[...t];n.splice(e,1),i(n)}}else if(p(t)){let e=new Set(t);r?e.add(n):e.delete(n),i(e)}else i(ns(e,r))})},mounted:es,beforeUpdate(e,t,n){e[Qo]=Zo(n),es(e,t,n)}};function es(e,{value:t,oldValue:n},r){e._modelValue=t;let i;if(d(t))i=Te(t,r.props.value)>-1;else if(p(t))i=t.has(r.props.value);else{if(t===n)return;i=we(t,ns(e,!0))}e.checked!==i&&(e.checked=i)}function ts(e){return`_value`in e?e._value:e.value}function ns(e,t){let n=t?`_trueValue`:`_falseValue`;return n in e?e[n]:t}var rs=[`ctrl`,`shift`,`alt`,`meta`],is={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,right:e=>`button`in e&&e.button!==2,exact:(e,t)=>rs.some(n=>e[`${n}Key`]&&!t.includes(n))},as=(e,t)=>{if(!e)return e;let n=e._withMods||={},r=t.join(`.`);return n[r]||(n[r]=((n,...r)=>{for(let e=0;e<t.length;e++){let r=is[t[e]];if(r&&r(n,t))return}return e(n,...r)}))},os=s({patchProp:Jo},$a),ss;function cs(){return ss||=Gi(os)}var ls=((...e)=>{let t=cs().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=ds(e);if(!r)return;let i=t._component;!h(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,us(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function us(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function ds(e){return g(e)?document.querySelector(e):e}var fs={class:`app-shell`},ps={__name:`AppLayout`,setup(e){return(e,t)=>(U(),W(`main`,fs,[Wr(e.$slots,`header`),Wr(e.$slots,`default`),Wr(e.$slots,`footer`)]))}},ms={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":2,"stroke-linecap":`round`,"stroke-linejoin":`round`},hs=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim();function gs(e){return e!=null}function _s(e,t={}){let n=t.attributeNames??{},r=e=>n[e]??e,i=e.size??e.width??ms.width,a=e.size??e.height??ms.height,o=e.aliases?.filter(e=>typeof e==`string`&&e.trim()!==``).map(e=>`lucide-${e}`)??[],s=[...e.name?[`lucide-${e.name}`]:[],...o],c=t.className?.split(` `).filter(Boolean)??[],l=t.includeDefaultClasses===!1?hs(...c):hs(`lucide`,...s,...c),u=t.absoluteStrokeWidth?Number(t.strokeWidth??ms[`stroke-width`])*Number(e.size??e.width??ms.width)/Number(t.size??t.width??ms.width):t.strokeWidth??ms[`stroke-width`];return[`svg`,{...Object.entries(ms).reduce((e,[t,n])=>(e[r(t)]=n,e),{}),...`color`in t&&t.color&&{[r(`stroke`)]:t.color},...`size`in t&&gs(t.size)&&{[r(`width`)]:t.size,[r(`height`)]:t.size},...`width`in t&&gs(t.width)&&{[r(`width`)]:t.width},...`height`in t&&gs(t.height)&&{[r(`height`)]:t.height},[r(`stroke-width`)]:u,...l&&{[r(`class`)]:l},[r(`viewBox`)]:`0 0 ${i} ${a}`,...t.hasA11yProp===!1?{[r(`aria-hidden`)]:`true`}:{},...`attributes`in t&&t.attributes},e.node.map(e=>{let[n,i,a]=e,o=t.nonScalingStroke?{[r(`vector-effect`)]:`non-scaling-stroke`,...i}:i;return a?[n,o,a]:[n,o]})]}var vs=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},ys=e=>e===``,bs=e=>e?.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),xs=Symbol(`lucide-icons`);function Ss(){return Nn(xs,{})}var Cs=({name:e,iconNode:t,"icon-node":n,icon:r={name:bs(e),node:t??n,size:24,aliases:[]},absoluteStrokeWidth:i,"absolute-stroke-width":a,nonScalingStroke:o,"non-scaling-stroke":s,strokeWidth:c,"stroke-width":l,size:u,width:d=u,height:f=u,color:p,...m},{slots:h})=>{let{size:g,color:_,strokeWidth:v=2,absoluteStrokeWidth:y=!1,nonScalingStroke:b=!1,class:x=``}=Ss(),S=ys(i)||ys(a)||i===!0||a===!0||y===!0,C=ys(o)||ys(s)||o===!0||s===!0||b===!0;delete m.class;let w=h.default?.(),[,ee,te=[]]=_s(r,{color:p??_,width:d??u??g,height:f??u??g,strokeWidth:c??l??v,absoluteStrokeWidth:S,nonScalingStroke:C,className:x,hasA11yProp:w!=null&&w.length>0||vs(m),attributes:m});return Wa(`svg`,ee,[...te.map(e=>Wa(...e)),...w??[]])};function Z(e,t=[]){let n=typeof e==`string`?{name:e,node:t}:e;return(e,{slots:t})=>Wa(Cs,{...e,icon:n},t.default?{default:t.default}:void 0)}var ws=Z({name:`activity`,size:24,node:[[`path`,{d:`M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2`,key:`169zse`}]]}),Ts=Z({name:`book-open`,size:24,node:[[`path`,{d:`M12 5v16`,key:`1f6ucr`}],[`path`,{d:`M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z`,key:`1fyvmf`}]]}),Es=Z({name:`calendar-days`,size:24,node:[[`path`,{d:`M8 2v3`,key:`1ioesn`}],[`path`,{d:`M16 2v3`,key:`otl347`}],[`rect`,{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`,key:`h1oib`}],[`path`,{d:`M3 9h18`,key:`1pudct`}],[`path`,{d:`M8 13h.01`,key:`1sbv64`}],[`path`,{d:`M12 13h.01`,key:`y0uutt`}],[`path`,{d:`M16 13h.01`,key:`wip0gl`}],[`path`,{d:`M8 17h.01`,key:`p3bg7i`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}],[`path`,{d:`M16 17h.01`,key:`ql8jdd`}]]}),Ds=Z({name:`check`,size:24,node:[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]}),Os=Z({name:`chevron-down`,size:24,node:[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]}),ks=Z({name:`chevron-left`,size:24,node:[[`path`,{d:`m15 18-6-6 6-6`,key:`1wnfg3`}]]}),As=Z({name:`chevron-right`,size:24,node:[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]}),js=Z({name:`chevron-up`,size:24,node:[[`path`,{d:`m18 15-6-6-6 6`,key:`153udz`}]]}),Ms=Z({name:`clock-3`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 6v6h4`,key:`135r8i`}]]}),Ns=Z({name:`external-link`,size:24,node:[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`M10 14 21 3`,key:`gplh6r`}],[`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,key:`a6xqqp`}]]}),Ps=Z({name:`flame`,size:24,node:[[`path`,{d:`M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4`,key:`1slcih`}]]}),Fs=Z({name:`monitor`,size:24,node:[[`rect`,{width:`20`,height:`14`,x:`2`,y:`3`,rx:`2`,key:`48i651`}],[`line`,{x1:`8`,x2:`16`,y1:`21`,y2:`21`,key:`1svkeh`}],[`line`,{x1:`12`,x2:`12`,y1:`17`,y2:`21`,key:`vw1qmm`}]]}),Is=Z({name:`moon`,size:24,node:[[`path`,{d:`M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`,key:`kfwtm`}]]}),Ls=Z({name:`newspaper`,size:24,node:[[`path`,{d:`M15 18h-5`,key:`95g1m2`}],[`path`,{d:`M18 14h-8`,key:`sponae`}],[`path`,{d:`M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2`,key:`39pd36`}],[`rect`,{width:`8`,height:`4`,x:`10`,y:`6`,rx:`1`,key:`aywv1n`}]]}),Rs=Z({name:`radio`,size:24,node:[[`path`,{d:`M16.247 7.761a6 6 0 0 1 0 8.478`,key:`1fwjs5`}],[`path`,{d:`M19.075 4.933a10 10 0 0 1 0 14.134`,key:`ehdyv1`}],[`path`,{d:`M4.925 19.067a10 10 0 0 1 0-14.134`,key:`1q22gi`}],[`path`,{d:`M7.753 16.239a6 6 0 0 1 0-8.478`,key:`r2q7qm`}],[`circle`,{cx:`12`,cy:`12`,r:`2`,key:`1c9p78`}]]}),zs=Z({name:`refresh-cw`,size:24,node:[[`path`,{d:`M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8`,key:`v9h5vc`}],[`path`,{d:`M21 3v5h-5`,key:`1q7to0`}],[`path`,{d:`M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16`,key:`3uifl3`}],[`path`,{d:`M8 16H3v5`,key:`1cv678`}]]}),Bs=Z({name:`sparkles`,size:24,node:[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,key:`1s2grr`}],[`path`,{d:`M20 2v4`,key:`1rf3ol`}],[`path`,{d:`M22 4h-4`,key:`gwowj6`}],[`circle`,{cx:`4`,cy:`20`,r:`2`,key:`6kqj1y`}]],aliases:[`stars`]}),Vs=Z({name:`sun`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`4`,key:`4exip2`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`m4.93 4.93 1.41 1.41`,key:`149t6j`}],[`path`,{d:`m17.66 17.66 1.41 1.41`,key:`ptbguv`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`m6.34 17.66-1.41 1.41`,key:`1m8zz5`}],[`path`,{d:`m19.07 4.93-1.41 1.41`,key:`1shlcs`}]]}),Hs=Z({name:`ticket`,size:24,node:[[`path`,{d:`M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z`,key:`qn84l0`}],[`path`,{d:`M13 5v2`,key:`dyzc3o`}],[`path`,{d:`M13 17v2`,key:`1ont0d`}],[`path`,{d:`M13 11v2`,key:`1wjjxi`}]]}),Us=Z({name:`trending-up`,size:24,node:[[`path`,{d:`M16 7h6v6`,key:`box55l`}],[`path`,{d:`m22 7-8.5 8.5-5-5L2 17`,key:`1t1m79`}]]}),Ws=Z({name:`wifi-off`,size:24,node:[[`path`,{d:`M12 20h.01`,key:`zekei9`}],[`path`,{d:`M8.5 16.429a5 5 0 0 1 7 0`,key:`1bycff`}],[`path`,{d:`M5 12.859a10 10 0 0 1 5.17-2.69`,key:`1dl1wf`}],[`path`,{d:`M19 12.859a10 10 0 0 0-2.007-1.523`,key:`4k23kn`}],[`path`,{d:`M2 8.82a15 15 0 0 1 4.177-2.643`,key:`1grhjp`}],[`path`,{d:`M22 8.82a15 15 0 0 0-11.288-3.764`,key:`z3jwby`}],[`path`,{d:`m2 2 20 20`,key:`1ooewy`}]]}),Gs=Z({name:`wifi`,size:24,node:[[`path`,{d:`M12 20h.01`,key:`zekei9`}],[`path`,{d:`M2 8.82a15 15 0 0 1 20 0`,key:`dnpr2z`}],[`path`,{d:`M5 12.859a10 10 0 0 1 14 0`,key:`1x1e6c`}],[`path`,{d:`M8.5 16.429a5 5 0 0 1 7 0`,key:`1bycff`}]]}),Ks=Z({name:`x`,size:24,node:[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]}),qs={class:`topbar`},Js={class:`brand`},Ys={class:`brand-mark`},Xs={class:`sync-area`},Zs={class:`theme-switch`,role:`group`,"aria-label":`显示模式`},Qs=[`title`,`aria-label`,`aria-pressed`,`onClick`],$s={class:`sync-copy`},ec=[`disabled`],tc={__name:`AppTopbar`,props:{themePreference:{type:String,required:!0},usingSnapshot:{type:Boolean,default:!1},lastChecked:{type:String,default:``},isRefreshing:{type:Boolean,default:!1}},emits:[`changeTheme`,`openDaily`,`refresh`,`replaySwarm`],setup(e,{emit:t}){let n=t,r=[{value:`dark`,label:`深色模式`,icon:Is},{value:`system`,label:`跟随系统`,icon:Fs},{value:`light`,label:`浅色模式`,icon:Vs}];return(t,i)=>(U(),W(`header`,qs,[G(`div`,Js,[G(`span`,Ys,[K(I(ws),{size:19,"stroke-width":2})]),i[3]||=G(`div`,null,[G(`h1`,null,`Codex 重置监控`),G(`p`,null,`额度重置、重置卡发放与原帖记录`)],-1)]),G(`div`,Xs,[G(`div`,Zs,[(U(),W(V,null,Ur(r,t=>G(`button`,{key:t.value,type:`button`,class:O({active:e.themePreference===t.value}),title:t.label,"aria-label":t.label,"aria-pressed":e.themePreference===t.value,onClick:e=>n(`changeTheme`,t.value)},[(U(),da(Br(t.icon),{size:15,"stroke-width":1.8}))],10,Qs)),64))]),G(`div`,$s,[G(`span`,{class:O([`sync-state`,{offline:e.usingSnapshot}])},[(U(),da(Br(e.usingSnapshot?I(Ws):I(Gs)),{size:13})),q(` `+k(e.usingSnapshot?`快照数据`:`实时同步`),1)],2),G(`span`,null,k(e.lastChecked),1)]),G(`button`,{class:`daily-entry-btn`,type:`button`,title:`查看今日 AI 早报`,onClick:i[0]||=e=>n(`openDaily`)},[K(I(Ts),{size:14}),i[4]||=G(`span`,null,`今日早报`,-1)]),G(`button`,{class:`swarm-entry-btn`,type:`button`,title:`重放多人光标开屏重构动效`,onClick:i[1]||=e=>n(`replaySwarm`)},[K(I(Bs),{size:14}),i[5]||=G(`span`,null,`重构开屏`,-1)]),G(`button`,{class:`refresh-button`,type:`button`,disabled:e.isRefreshing,title:`刷新数据`,onClick:i[2]||=e=>n(`refresh`)},[K(I(zs),{size:17,class:O({spinning:e.isRefreshing})},null,8,[`class`]),i[6]||=G(`span`,null,`刷新`,-1)],8,ec)])]))}},nc={__name:`AppFooter`,props:{totalCount:{type:Number,default:0},historyFrom:{type:String,default:``}},setup(e){return(t,n)=>(U(),W(`footer`,null,[G(`span`,null,[K(I(Hs),{size:14}),q(` 共收录 `+k(e.totalCount)+` 条记录`,1)]),G(`span`,null,`数据时间范围始于 `+k(e.historyFrom||`未知`),1)]))}},rc=e=>String(e).padStart(2,`0`),ic=e=>`${e.getFullYear()}-${rc(e.getMonth()+1)}-${rc(e.getDate())}`,ac=e=>e?.slice(0,10)||``,oc=e=>e.occurredOn||ac(e.schedule?.from)||ac(e.confirmedAt)||ac(e.createdAt);function sc(e){if(!e)return`时间待定`;let t=new Date(e);return new Intl.DateTimeFormat(`zh-CN`,{month:`numeric`,day:`numeric`,hour:`2-digit`,minute:`2-digit`,hour12:!1}).format(t)}function cc(e){if(!e)return``;let t=new Date(e);return`${t.getMonth()+1}/${t.getDate()} ${rc(t.getHours())}:${rc(t.getMinutes())} 发布`}function lc(e){if(!e)return``;let t=new Date(e),n=Math.max(0,Date.now()-t.getTime()),r=Math.floor(n/6e4);if(r<1)return`刚刚`;if(r<60)return`${r} 分钟前`;let i=Math.floor(r/60);if(i<24)return`${i} 小时前`;let a=Math.floor(i/24);return a<7?`${a} 天前`:`${t.getMonth()+1}/${t.getDate()}`}var uc={key:0,class:`forecast`,"aria-labelledby":`forecast-heading`},dc={class:`forecast-time`},fc={class:`eyebrow`,id:`forecast-heading`},pc={class:`date-display`},mc={class:`hero-post`},hc={class:`post-head`},gc={class:`author-meta`},_c={class:`author-avatar`,"aria-hidden":`true`},vc={class:`author-copy`},yc={class:`post-time`},bc={class:`post-text`},xc={class:`post-foot`},Sc=[`href`],Cc={__name:`ForecastHero`,props:{event:{type:Object,default:null},author:{type:Object,required:!0}},setup(e){let t=e,n=X(()=>{if(!t.event)return{date:`暂无记录`,time:`--:--`};let e=(t.event.status===`confirmed`?t.event.confirmedAt||t.event.posts?.[0]?.publishedAt:null)||t.event.schedule?.from||t.event.createdAt;if(!e)return{date:`时间待定`,time:`--:--`};let n=new Date(e);return{date:new Intl.DateTimeFormat(`zh-CN`,{month:`long`,day:`numeric`}).format(n),time:`${rc(n.getHours())}:${rc(n.getMinutes())}`}});return(t,r)=>e.event?(U(),W(`section`,uc,[G(`div`,dc,[G(`div`,fc,[q(k(e.event.status===`announced`?e.event.type===`reset_credit`?`重置卡发放预告`:`额度重置预告`:e.event.type===`reset_credit`?`重置卡发放`:`额度重置`)+` `,1),r[0]||=G(`span`,null,`•`,-1),G(`strong`,null,k(e.event.status===`announced`?`即将发生`:`已确认`),1)]),G(`div`,pc,[G(`span`,null,k(n.value.date),1),G(`span`,null,k(n.value.time),1)]),G(`p`,null,k(e.event.schedule?.label||(e.event.status===`confirmed`?e.event.title||`已完成`:`具体时间待后续确认`)),1)]),G(`article`,mc,[G(`div`,hc,[G(`div`,gc,[G(`div`,_c,k(e.author.initial),1),G(`div`,vc,[G(`strong`,null,k(e.author.name),1),G(`span`,null,k(e.author.handle),1)])]),G(`time`,yc,k(I(cc)(e.event.posts?.[0]?.publishedAt||e.event.createdAt)),1)]),G(`p`,bc,k(e.event.posts?.[0]?.text||e.event.title),1),G(`div`,xc,[G(`span`,null,k(e.event.posts?.[0]?.stage||e.event.label)+` · 中文译文`,1),e.event.posts?.[0]?.url?(U(),W(`a`,{key:0,href:e.event.posts[0].url,target:`_blank`,rel:`noreferrer`},[r[1]||=q(` 在 X 查看原帖 `,-1),K(I(Ns),{size:13})],8,Sc)):J(``,!0)])])])):J(``,!0)}},wc={class:`calendar-side`},Tc={class:`calendar-toolbar`},Ec={class:`calendar-header-info`},Dc={class:`month-actions`},Oc={class:`weekdays`,"aria-hidden":`true`},kc={class:`calendar-grid`},Ac=[`aria-label`,`onClick`],jc={class:`day-number`},Mc={key:0,class:`today-dot`},Nc={class:`day-meta`},Pc={key:1,class:`day-label`},Fc={__name:`CalendarGrid`,props:{monthTitle:{type:String,required:!0},monthResetCount:{type:Number,default:0},monthCreditCount:{type:Number,default:0},calendarDays:{type:Array,required:!0},selectedDate:{type:String,required:!0}},emits:[`selectDay`,`goToToday`,`moveMonth`],setup(e,{emit:t}){let n=t;return(t,r)=>(U(),W(`div`,wc,[G(`div`,Tc,[G(`div`,Ec,[G(`h3`,null,k(e.monthTitle),1),G(`p`,null,`本月：`+k(e.monthResetCount)+` 条全员重置 · `+k(e.monthCreditCount)+` 条重置卡`,1)]),G(`div`,Dc,[G(`button`,{type:`button`,class:`icon-button`,title:`上个月`,"aria-label":`上个月`,onClick:r[0]||=e=>n(`moveMonth`,-1)},[K(I(ks),{size:18})]),G(`button`,{type:`button`,class:`recent-button`,onClick:r[1]||=e=>n(`goToToday`)},` 回到今天 `),G(`button`,{type:`button`,class:`icon-button`,title:`下个月`,"aria-label":`下个月`,onClick:r[2]||=e=>n(`moveMonth`,1)},[K(I(As),{size:18})])])]),G(`div`,Oc,[(U(),W(V,null,Ur([`日`,`一`,`二`,`三`,`四`,`五`,`六`],(e,t)=>G(`span`,{key:e,class:O([`weekday-name`,{weekend:t===0||t===6}])},k(e),3)),64))]),G(`div`,kc,[(U(!0),W(V,null,Ur(e.calendarDays,t=>(U(),W(`button`,{key:t.key,type:`button`,class:O([`day-cell`,{weekend:t.isWeekend,weekday:!t.isWeekend,muted:!t.currentMonth,selected:t.key===e.selectedDate,today:t.today,"has-reset":t.events.some(e=>e.type===`direct_reset`),"has-credit":t.events.some(e=>e.type===`reset_credit`),holiday:t.holiday?.holiday,workday:t.holiday&&!t.holiday.holiday}]),"aria-label":`${t.key}，${t.holiday?.name||``}，${t.events.length} 条记录`,onClick:e=>n(`selectDay`,t)},[G(`span`,jc,k(t.day),1),t.today?(U(),W(`span`,Mc)):J(``,!0),G(`span`,Nc,[t.holiday?(U(),W(`span`,{key:0,class:O([`holiday-label`,{workday:!t.holiday.holiday}])},k(t.holiday.holiday?t.holiday.name:`班`),3)):J(``,!0),t.events.length?(U(),W(`span`,Pc,k(t.events.length>1?`${t.events.length} 条记录`:t.events[0].label),1)):J(``,!0)])],10,Ac))),128))]),r[3]||=G(`p`,{class:`calendar-note`},`按北京时间记录。发放日期不明的重置卡，收录在发帖当天。`,-1)]))}},Ic={class:`details-wrap`},Lc={class:`details`,"aria-live":`polite`},Rc={class:`details-header`},zc={class:`details-title-row`},Bc={class:`details-date-group`},Vc={class:`details-calendar-badge`,"aria-hidden":`true`},Hc={class:`details-date-text`},Uc={class:`details-year-tag`},Wc={class:`details-status-tag`},Gc={key:0,class:`event-count-pill`},Kc={key:2,class:`plain-pill`},qc={class:`holiday-banner-icon`},Jc={class:`holiday-banner-content`},Yc={class:`holiday-banner-title`},Xc={class:`holiday-type-chip`},Zc={class:`holiday-banner-desc`},Qc={key:1,class:`event-list`},$c={class:`event-block-header`},el={key:0,class:`event-schedule-badge`},tl={class:`event-title`},nl={key:0,class:`event-scope`},rl={class:`event-posts-group`},il={class:`post-card-head`},al={class:`author-meta`},ol={class:`author-avatar small`,"aria-hidden":`true`},sl={class:`author-copy`},cl={class:`post-time`},ll={class:`post-card-body`},ul={class:`post-text`},dl={class:`post-card-foot`},fl={class:`post-stage-tag`},pl=[`href`],ml={key:2,class:`empty-state`},hl={class:`empty-icon-wrap`},gl={__name:`CalendarDetails`,props:{selectedTitle:{type:String,required:!0},selectedYear:{type:String,required:!0},selectedHoliday:{type:Object,default:null},selectedEvents:{type:Array,default:()=>[]},author:{type:Object,required:!0}},setup(e){return(t,n)=>(U(),W(`div`,Ic,[G(`aside`,Lc,[G(`div`,Rc,[G(`div`,zc,[G(`div`,Bc,[G(`span`,Vc,[K(I(Es),{size:15})]),G(`div`,Hc,[G(`h3`,null,k(e.selectedTitle),1),G(`span`,Uc,k(e.selectedYear),1)])]),G(`div`,Wc,[e.selectedEvents.length?(U(),W(`span`,Gc,k(e.selectedEvents.length)+` 条记录 `,1)):e.selectedHoliday?(U(),W(`span`,{key:1,class:O([`holiday-pill`,{workday:!e.selectedHoliday.holiday}])},k(e.selectedHoliday.name),3)):(U(),W(`span`,Kc,` 无记录 `))])])]),e.selectedHoliday?(U(),W(`div`,{key:0,class:O([`holiday-detail-banner`,{workday:!e.selectedHoliday.holiday}])},[G(`div`,qc,[K(I(Es),{size:16})]),G(`div`,Jc,[G(`div`,Yc,[G(`strong`,null,k(e.selectedHoliday.name),1),G(`span`,Xc,k(e.selectedHoliday.holiday?`法定休假`:`调休上班`),1)]),G(`p`,Zc,[q(k(e.selectedHoliday.holiday?`法定节假日放假安排`:`按国家规定需补班打卡`)+` `,1),e.selectedHoliday.wage?(U(),W(V,{key:0},[q(` · 当日享 `+k(e.selectedHoliday.wage)+` 倍加班工资`,1)],64)):J(``,!0)])])],2)):J(``,!0),e.selectedEvents.length?(U(),W(`div`,Qc,[(U(!0),W(V,null,Ur(e.selectedEvents,t=>(U(),W(`article`,{key:t.id,class:`event-block`},[G(`div`,$c,[G(`div`,{class:O([`event-kicker-tag`,t.type])},[t.status===`announced`?(U(),da(I(Ms),{key:0,size:12})):(U(),da(I(Ds),{key:1,size:12})),G(`span`,null,k(t.status===`announced`?`预告`:`已确认`)+` · `+k(t.label),1)],2),t.schedule?.label?(U(),W(`span`,el,[K(I(Ms),{size:11}),q(` `+k(t.schedule.label),1)])):J(``,!0)]),G(`h4`,tl,k(t.title),1),t.scope?(U(),W(`p`,nl,[n[0]||=G(`span`,{class:`scope-label`},`适用范围：`,-1),q(k(t.scope),1)])):J(``,!0),G(`div`,rl,[(U(!0),W(V,null,Ur(t.posts,t=>(U(),W(`div`,{key:t.id,class:`detail-post-card`},[G(`div`,il,[G(`div`,al,[G(`div`,ol,k(e.author.initial),1),G(`div`,sl,[G(`strong`,null,k(e.author.name),1),G(`span`,null,k(e.author.handle),1)])]),G(`time`,cl,k(I(cc)(t.publishedAt)),1)]),G(`div`,ll,[G(`p`,ul,k(t.text),1)]),G(`div`,dl,[G(`span`,fl,k(t.stage)+` · 中文译文`,1),G(`a`,{href:t.url,target:`_blank`,rel:`noreferrer`,class:`post-x-link`},[n[1]||=q(` 在 X 查看原帖 `,-1),K(I(Ns),{size:12})],8,pl)])]))),128))])]))),128))])):e.selectedHoliday?J(``,!0):(U(),W(`div`,ml,[G(`div`,hl,[K(I(Es),{size:22})]),n[2]||=G(`strong`,null,`当日暂无记录`,-1),n[3]||=G(`p`,null,`选择带有彩色标记的日期，可查看详细重置与发卡推文`,-1)]))])]))}},_l={class:`calendar-section`,"aria-labelledby":`calendar-heading`},vl={class:`calendar-panel`},yl={__name:`CalendarSection`,props:{monthTitle:{type:String,required:!0},monthResetCount:{type:Number,default:0},monthCreditCount:{type:Number,default:0},calendarDays:{type:Array,required:!0},selectedDate:{type:String,required:!0},selectedTitle:{type:String,required:!0},selectedYear:{type:String,required:!0},selectedHoliday:{type:Object,default:null},selectedEvents:{type:Array,default:()=>[]},author:{type:Object,required:!0}},emits:[`selectDay`,`goToToday`,`moveMonth`],setup(e,{emit:t}){let n=t;return(t,r)=>(U(),W(`section`,_l,[r[3]||=ya(`<div class="section-heading"><div><h2 id="calendar-heading">重置日历</h2><p>选择日期，查看重置状态与原帖记录。</p></div><div class="legend" aria-label="事件图例"><span><i class="legend-dot reset"></i>全员重置</span><span><i class="legend-dot credit"></i>重置卡</span><span><i class="legend-dot holiday"></i>法定休假</span><span><i class="legend-dot workday"></i>调休上班</span></div></div>`,1),G(`div`,vl,[K(Fc,{"month-title":e.monthTitle,"month-reset-count":e.monthResetCount,"month-credit-count":e.monthCreditCount,"calendar-days":e.calendarDays,"selected-date":e.selectedDate,onSelectDay:r[0]||=e=>n(`selectDay`,e),onGoToToday:r[1]||=e=>n(`goToToday`),onMoveMonth:r[2]||=e=>n(`moveMonth`,e)},null,8,[`month-title`,`month-reset-count`,`month-credit-count`,`calendar-days`,`selected-date`]),K(gl,{"selected-title":e.selectedTitle,"selected-year":e.selectedYear,"selected-holiday":e.selectedHoliday,"selected-events":e.selectedEvents,author:e.author},null,8,[`selected-title`,`selected-year`,`selected-holiday`,`selected-events`,`author`])])]))}},bl={class:`hot-topics-panel`,"aria-labelledby":`hot-topics-heading`},xl={class:`section-heading hot-heading`},Sl={class:`news-heading-wrap`},Cl={class:`news-title-group`},wl={class:`hot-pill`},Tl=[`disabled`],El={key:0,class:`notice`,role:`status`},Dl={key:1,class:`hot-topics-list`},Ol={class:`hot-topic-main`},kl={class:`hot-topic-title`},Al=[`href`],jl={class:`hot-topic-meta`},Ml=[`title`],Nl=[`title`],Pl={key:0,class:`hot-time`},Fl={key:2,class:`hot-empty`},Il={__name:`HotTopicsPanel`,props:{hotTopics:{type:Array,default:()=>[]},isHotRefreshing:{type:Boolean,default:!1},hotError:{type:String,default:``}},emits:[`refresh`],setup(e,{emit:t}){let n=t;return(t,r)=>(U(),W(`aside`,bl,[G(`div`,xl,[G(`div`,Sl,[G(`div`,Cl,[G(`span`,wl,[K(I(Ps),{size:12}),r[1]||=q(` 全网热度`,-1)]),r[2]||=G(`h2`,{id:`hot-topics-heading`},`当前热点榜 Top 10`,-1)]),r[3]||=G(`p`,null,`全网讨论度与信号量聚合排序`,-1)]),G(`button`,{type:`button`,class:`icon-refresh-btn`,disabled:e.isHotRefreshing,title:`刷新热点榜`,onClick:r[0]||=e=>n(`refresh`)},[K(I(zs),{size:13,class:O({spinning:e.isHotRefreshing})},null,8,[`class`])],8,Tl)]),e.hotError&&!e.hotTopics.length?(U(),W(`div`,El,k(e.hotError),1)):J(``,!0),e.hotTopics.length?(U(),W(`div`,Dl,[(U(!0),W(V,null,Ur(e.hotTopics,e=>(U(),W(`article`,{key:e.id,class:`hot-topic-card`},[G(`span`,{class:O([`hot-rank-badge`,`rank-${e.rank}`])},k(e.rank),3),G(`div`,Ol,[G(`h3`,kl,[G(`a`,{href:e.links?.original||e.links?.aihot,target:`_blank`,rel:`noreferrer`},[q(k(e.title)+` `,1),K(I(Ns),{size:11,class:`hot-ext-icon`})],8,Al)]),G(`div`,jl,[G(`span`,{class:`hot-source`,title:e.source?.name},k(e.source?.name||`热门信源`),9,Ml),G(`span`,{class:`hot-stats`,title:`${e.signalCount} 条讨论信号 · ${e.sourceCount} 个信源报道`},[K(I(Us),{size:11}),q(` `+k(e.signalCount)+` 讨论 · `+k(e.sourceCount)+` 报道 `,1)],8,Nl),e.latestAt?(U(),W(`time`,Pl,k(I(lc)(e.latestAt)),1)):J(``,!0)])])]))),128))])):e.isHotRefreshing?J(``,!0):(U(),W(`div`,Fl,[K(I(Ps),{size:24}),r[4]||=G(`p`,null,`暂无热点榜数据`,-1)]))]))}},Ll={class:`news-panel`,"aria-labelledby":`news-heading`},Rl={class:`section-heading`},zl={class:`news-heading-wrap`},Bl={class:`news-title-group`},Vl={class:`live-pill`},Hl={class:`news-toolbar`},Ul={key:0,class:`news-check-time`},Wl=[`disabled`],Gl={key:0,class:`notice`,role:`status`},Kl={key:1,class:`news-grid`},ql={class:`news-card-head`},Jl=[`title`],Yl={class:`news-card-meta`},Xl=[`title`],Zl=[`datetime`],Ql={class:`news-card-title`},$l=[`href`],eu={class:`news-card-summary`},tu={key:0,class:`news-card-reason`},nu={class:`news-card-foot`},ru=[`href`],iu={key:2,class:`news-empty`},au={key:3,class:`news-actions`},ou={__name:`NewsPanel`,props:{newsItems:{type:Array,default:()=>[]},isNewsRefreshing:{type:Boolean,default:!1},newsError:{type:String,default:``},lastNewsChecked:{type:String,default:``},showAllNews:{type:Boolean,default:!1}},emits:[`refresh`,`toggleShowAll`],setup(e,{emit:t}){let n=e,r=t,i=X(()=>n.showAllNews?n.newsItems:n.newsItems.slice(0,6));return(t,n)=>(U(),W(`div`,Ll,[G(`div`,Rl,[G(`div`,zl,[G(`div`,Bl,[G(`span`,Vl,[K(I(Rs),{size:12,class:`live-dot`}),n[2]||=q(` 实时追踪`,-1)]),n[3]||=G(`h2`,{id:`news-heading`},`最新 AI 资讯速递`,-1)]),n[4]||=G(`p`,null,`精选 24 小时前沿动态与重大事件（每分钟自动比对 ETag 更新）`,-1)]),G(`div`,Hl,[e.lastNewsChecked?(U(),W(`span`,Ul,k(e.lastNewsChecked)+` 检查`,1)):J(``,!0),G(`button`,{type:`button`,class:`news-refresh-btn`,disabled:e.isNewsRefreshing,title:`检查最新资讯`,onClick:n[0]||=e=>r(`refresh`)},[K(I(zs),{size:13,class:O({spinning:e.isNewsRefreshing})},null,8,[`class`]),G(`span`,null,k(e.isNewsRefreshing?`检查中`:`刷新`),1)],8,Wl)])]),e.newsError&&!e.newsItems.length?(U(),W(`div`,Gl,k(e.newsError),1)):J(``,!0),e.newsItems.length?(U(),W(`div`,Kl,[(U(!0),W(V,null,Ur(i.value,e=>(U(),W(`article`,{key:e.id,class:`news-card`},[G(`div`,ql,[G(`span`,{class:`news-source`,title:e.source?.name},k(e.source?.name||`科技快讯`),9,Jl),G(`div`,Yl,[e.score?(U(),W(`span`,{key:0,class:`news-score`,title:`评分：${e.score}`},[K(I(Ps),{size:12}),q(` `+k(e.score),1)],8,Xl)):J(``,!0),G(`time`,{datetime:e.publishedAt||e.discoveredAt},k(I(lc)(e.publishedAt||e.discoveredAt)),9,Zl)])]),G(`h3`,Ql,[G(`a`,{href:e.links?.original||e.links?.aihot,target:`_blank`,rel:`noreferrer`},[q(k(e.title)+` `,1),K(I(Ns),{size:13,class:`ext-icon`})],8,$l)]),G(`p`,eu,k(e.summary),1),e.reason?(U(),W(`div`,tu,[K(I(Bs),{size:13,class:`sparkle-icon`}),G(`span`,null,k(e.reason),1)])):J(``,!0),G(`div`,nu,[e.links?.original?(U(),W(`a`,{key:0,href:e.links.original,target:`_blank`,rel:`noreferrer`,class:`news-link`},[n[5]||=q(` 阅读原报道 `,-1),K(I(Ns),{size:12})],8,ru)):J(``,!0)])]))),128))])):e.isNewsRefreshing?J(``,!0):(U(),W(`div`,iu,[K(I(Ls),{size:24}),n[6]||=G(`p`,null,`暂无 24 小时内的精选资讯`,-1)])),e.newsItems.length>6?(U(),W(`div`,au,[G(`button`,{type:`button`,class:`news-expand-btn`,onClick:n[1]||=e=>r(`toggleShowAll`)},[(U(),da(Br(e.showAllNews?I(js):I(Os)),{size:15})),G(`span`,null,k(e.showAllNews?`收起资讯`:`查看全部（共 ${e.newsItems.length} 条资讯）`),1)])])):J(``,!0)]))}},su={class:`intel-section`,"aria-labelledby":`intel-heading`},cu={class:`intel-layout`},lu={__name:`IntelSection`,props:{hotTopics:{type:Array,default:()=>[]},isHotRefreshing:{type:Boolean,default:!1},hotError:{type:String,default:``},newsItems:{type:Array,default:()=>[]},isNewsRefreshing:{type:Boolean,default:!1},newsError:{type:String,default:``},lastNewsChecked:{type:String,default:``},showAllNews:{type:Boolean,default:!1}},emits:[`refreshHot`,`refreshNews`,`toggleShowAllNews`],setup(e,{emit:t}){let n=t;return(t,r)=>(U(),W(`section`,su,[G(`div`,cu,[K(Il,{"hot-topics":e.hotTopics,"is-hot-refreshing":e.isHotRefreshing,"hot-error":e.hotError,onRefresh:r[0]||=e=>n(`refreshHot`)},null,8,[`hot-topics`,`is-hot-refreshing`,`hot-error`]),K(ou,{"news-items":e.newsItems,"is-news-refreshing":e.isNewsRefreshing,"news-error":e.newsError,"last-news-checked":e.lastNewsChecked,"show-all-news":e.showAllNews,onRefresh:r[1]||=e=>n(`refreshNews`),onToggleShowAll:r[2]||=e=>n(`toggleShowAllNews`)},null,8,[`news-items`,`is-news-refreshing`,`news-error`,`last-news-checked`,`show-all-news`])])]))}},uu={class:`modal-dialog`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`daily-modal-title`},du={class:`modal-header`},fu={class:`modal-title-group`},pu={class:`modal-badge`},mu={id:`daily-modal-title`},hu={class:`modal-body`},gu={key:0,class:`daily-lead-card`},_u={class:`lead-badge`},vu={class:`lead-title`},yu={class:`lead-paragraph`},bu={class:`daily-sections`},xu={class:`section-label-bar`},Su={class:`section-label-tag`},Cu={class:`section-count`},wu={class:`daily-item-list`},Tu={class:`daily-item-head`},Eu={key:0,class:`daily-item-source`},Du={class:`daily-item-title`},Ou=[`href`],ku={class:`daily-item-summary`},Au={class:`daily-item-foot`},ju=[`href`],Mu={class:`modal-footer`},Nu={class:`modal-dismiss-checkbox`},Pu={__name:`DailyReportModal`,props:{modelValue:{type:Boolean,default:!1},dailyReport:{type:Object,default:null}},emits:[`update:modelValue`,`close`],setup(e,{emit:t}){let n=e,r=t,i=F(!1);function a(){r(`close`,i.value),r(`update:modelValue`,!1)}function o(e){e.key===`Escape`&&n.modelValue&&a()}return In(()=>n.modelValue,e=>{e?document.body.style.overflow=`hidden`:document.body.style.overflow=``},{immediate:!0}),kr(()=>{window.addEventListener(`keydown`,o)}),Mr(()=>{window.removeEventListener(`keydown`,o),document.body.style.overflow=``}),(t,n)=>(U(),da(Zn,{to:`body`},[K(ao,{name:`modal`},{default:kn(()=>[e.modelValue&&e.dailyReport?(U(),W(`div`,{key:0,class:`modal-overlay`,onClick:as(a,[`self`])},[G(`div`,uu,[G(`div`,du,[G(`div`,fu,[G(`span`,pu,[K(I(Ls),{size:13}),n[1]||=q(` 今日 AI 早报`,-1)]),G(`h2`,mu,`前沿速递 · `+k(e.dailyReport.date),1)]),G(`button`,{type:`button`,class:`modal-close-btn`,title:`关闭 (Esc)`,"aria-label":`关闭`,onClick:a},[K(I(Ks),{size:18})])]),G(`div`,hu,[e.dailyReport.lead?(U(),W(`div`,gu,[G(`div`,_u,[K(I(Ps),{size:13}),n[2]||=q(` 今日焦点`,-1)]),G(`h3`,vu,k(e.dailyReport.lead.title),1),G(`p`,yu,k(e.dailyReport.lead.leadParagraph),1)])):J(``,!0),G(`div`,bu,[(U(!0),W(V,null,Ur(e.dailyReport.sections,(e,t)=>(U(),W(`div`,{key:t,class:`daily-section-group`},[G(`div`,xu,[G(`span`,Su,k(e.label),1),G(`span`,Cu,k(e.items?.length||0)+` 篇`,1)]),G(`div`,wu,[(U(!0),W(V,null,Ur(e.items,(e,t)=>(U(),W(`article`,{key:t,class:`daily-item-card`},[G(`div`,Tu,[e.source?.name?(U(),W(`span`,Eu,k(e.source.name),1)):J(``,!0)]),G(`h4`,Du,[G(`a`,{href:e.links?.original||e.links?.aihot,target:`_blank`,rel:`noreferrer`},[q(k(e.title)+` `,1),K(I(Ns),{size:13,class:`ext-icon`})],8,Ou)]),G(`p`,ku,k(e.summary),1),G(`div`,Au,[e.links?.original?(U(),W(`a`,{key:0,href:e.links.original,target:`_blank`,rel:`noreferrer`,class:`daily-link`},[n[3]||=q(` 阅读原文 `,-1),K(I(Ns),{size:12})],8,ju)):J(``,!0)])]))),128))])]))),128))])]),G(`div`,Mu,[G(`label`,Nu,[An(G(`input`,{type:`checkbox`,"onUpdate:modelValue":n[0]||=e=>i.value=e},null,512),[[$o,i.value]]),n[4]||=G(`span`,null,`今日不再自动弹出`,-1)]),G(`div`,{class:`modal-footer-actions`},[G(`button`,{type:`button`,class:`modal-primary-btn`,onClick:a},` 我知道了 `)])])])])):J(``,!0)]),_:1})]))}},Fu={name:`Tibo`,handle:`@thsottiaux`,initial:`T`},Iu={CODEX_RECENT:`https://aihot.news/api/v1/codex-resets/recent`,NEWS_ITEMS:`https://aihot.news/api/v1/items?mode=selected&window=24h&limit=20`,HOT_TOPICS:`https://aihot.news/api/v1/hot-topics`,DAILY_LATEST:`https://aihot.news/api/v1/dailies/latest`,HOLIDAY_BASE:`https://timor.tech/api/holiday/year`};async function Lu(e,t=``){let n={Accept:`application/json`};t&&(n[`If-None-Match`]=t);let r=await fetch(e,{headers:n}),i=r.headers.get(`etag`),a=r.headers.get(`date`);if(r.status===304)return{notModified:!0,data:null,etag:i||t,serverDate:a,status:304};if(!r.ok)throw Error(`HTTP ${r.status}`);return{notModified:!1,data:await r.json(),etag:i||t,serverDate:a,status:r.status}}var Ru=`curl -A 'aihot-api/2.0.0 aihot-actor/eadeb5de-23a2-4a19-8f98-28d79646b202' 'https://aihot.news/api/v1/codex-resets/recent'


\`\`\`json
{
  "schemaVersion": 1,
  "timezone": "Asia/Shanghai",
  "today": "2026-10-21",
  "checkedAt": "2026-10-21T09:40:28.564+08:00",
  "historyFrom": "2026-06-12T00:00:00.000+08:00",
  "count": 46,
  "events": [
    {
      "id": "reset-2112432076767289678-1-1",
      "type": "direct_reset",
      "label": "全员重置",
      "displayLabel": "重置（形式未明确）",
      "presentation": {
        "status": "confirmed",
        "scopeKnown": false,
        "scopeLabel": null,
        "kindExplicit": false,
        "timeInferred": false,
        "audienceZh": null,
        "productsZh": null
      },
      "estimate": null,
      "status": "confirmed",
      "title": "Tibo 确认重置",
      "scope": "",
      "createdAt": "2026-10-20T14:33:48.000+08:00",
      "updatedAt": "2026-10-20T14:33:48.000+08:00",
      "confirmedAt": "2026-10-20T14:33:48.000+08:00",
      "occurredOn": null,
      "confirmationBasis": "source_post",
      "schedule": null,
      "posts": [
        {
          "id": "2112432076767289678",
          "publishedAt": "2026-10-20T14:33:48.000+08:00",
          "stage": "确认完成",
          "text": "算了，我们还在忙……然后重置了。好好享受吧。",
          "originalText": "Nevermind, we're still cooking... and reset. Enjoy.",
          "fullText": "第15天/ 算了，我们还在忙……然后重置了。好好享受吧。",
          "fullOriginalText": "Day 15/ Nevermind, we're still cooking... and reset. Enjoy.",
          "context": [
            {
              "id": "2112268918681485431",
              "author": "thsottiaux",
              "relation": "quote",
              "text": "第15天/ 我们完蛋了",
              "originalText": "Day 15/ We're cooked",
              "url": "https://x.com/i/status/2112268918681485431"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2112432076767289678"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "reset-2111492738025959922-1-1",
      "type": "direct_reset",
      "label": "全员重置",
      "displayLabel": "重置（形式未明确）",
      "presentation": {
        "status": "confirmed",
        "scopeKnown": false,
        "scopeLabel": null,
        "kindExplicit": false,
        "timeInferred": false,
        "audienceZh": null,
        "productsZh": null
      },
      "estimate": null,
      "status": "confirmed",
      "title": "Tibo 确认重置",
      "scope": "",
      "createdAt": "2026-10-18T00:21:13.000+08:00",
      "updatedAt": "2026-10-18T05:33:29.557+08:00",
      "confirmedAt": "2026-10-18T05:12:21.000+08:00",
      "occurredOn": null,
      "confirmationBasis": "source_post",
      "schedule": {
        "precision": "deadline",
        "from": "2026-10-18T15:00:00.000+08:00",
        "through": "2026-10-18T15:00:00.000+08:00",
        "label": "北京时间预计 10月18日 15:00 前"
      },
      "posts": [
        {
          "id": "2111492738025959922",
          "publishedAt": "2026-10-18T00:21:13.000+08:00",
          "stage": "预告",
          "text": "今天之内、太平洋时间当天结束前落地",
          "originalText": "Landing sometime today by EOD PST",
          "fullText": "今天之内、太平洋时间当天结束前落地",
          "fullOriginalText": "Landing sometime today by EOD PST",
          "context": [
            {
              "id": "2111492673890824348",
              "author": "thsottiaux",
              "relation": "reply",
              "text": "第13天/ 额度重置",
              "originalText": "Day 13/ Le limit reset",
              "url": "https://x.com/i/status/2111492673890824348"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2111492738025959922"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "reset-2110595484180214059-1-1",
      "type": "direct_reset",
      "label": "全员重置",
      "displayLabel": "重置（形式未明确）",
      "presentation": {
        "status": "confirmed",
        "scopeKnown": false,
        "scopeLabel": null,
        "kindExplicit": false,
        "timeInferred": false,
        "audienceZh": null,
        "productsZh": null
      },
      "estimate": null,
      "status": "confirmed",
      "title": "Tibo 确认重置",
      "scope": "",
      "createdAt": "2026-10-15T12:55:51.000+08:00",
      "updatedAt": "2026-10-15T12:55:51.000+08:00",
      "confirmedAt": "2026-10-15T12:55:51.000+08:00",
      "occurredOn": null,
      "confirmationBasis": "source_post",
      "schedule": null,
      "posts": [
        {
          "id": "2110618732666257557",
          "publishedAt": "2026-10-15T14:28:13.000+08:00",
          "stage": "确认完成",
          "text": "搞定收工",
          "originalText": "Done and dusted",
          "fullText": "搞定收工",
          "fullOriginalText": "Done and dusted",
          "context": [
            {
              "id": "2110595554036400151",
              "author": "thsottiaux",
              "relation": "quote",
              "text": "将在接下来 2 小时内落地",
              "originalText": "Landing within the next 2 hours",
              "url": "https://x.com/i/status/2110595554036400151"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2110618732666257557"
        },
        {
          "id": "2110595554036400151",
          "publishedAt": "2026-10-15T12:56:07.000+08:00",
          "stage": "进展",
          "text": "将在接下来 2 小时内落地",
          "originalText": "Landing within the next 2 hours",
          "fullText": "将在接下来 2 小时内落地",
          "fullOriginalText": "Landing within the next 2 hours",
          "context": [
            {
              "id": "2110595484180214059",
              "author": "thsottiaux",
              "relation": "reply",
              "text": "关于我的重置按钮丢了的报道，实在言过其实了\\n\\n第 10 天/ 重置",
              "originalText": "The reports of my reset button being lost are greatly exaggerated\\n\\nDay 10/ Reset",
              "url": "https://x.com/i/status/2110595484180214059"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2110595554036400151"
        },
        {
          "id": "2110595484180214059",
          "publishedAt": "2026-10-15T12:55:51.000+08:00",
          "stage": "确认完成",
          "text": "第 10 天/ 重置",
          "originalText": "Day 10/ Reset",
          "fullText": "关于我的重置按钮丢了的报道，实在是言过其实了\\n\\n第 10 天/ 重置",
          "fullOriginalText": "The reports of my reset button being lost are greatly exaggerated\\n\\nDay 10/ Reset",
          "context": [],
          "url": "https://x.com/thsottiaux/status/2110595484180214059"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "banked-2107913674593644711-1-1",
      "type": "reset_credit",
      "label": "发重置卡",
      "displayLabel": "重置卡发放",
      "presentation": {
        "reportedAt": "2026-10-08T03:19:33.000+08:00",
        "status": "confirmed",
        "scopeKnown": true,
        "scopeLabel": "everyone's paid accounts",
        "kindExplicit": true,
        "timeInferred": false,
        "audienceZh": "所有付费账户",
        "productsZh": "Codex、ChatGPT Work"
      },
      "estimate": null,
      "status": "confirmed",
      "title": "重置卡已发放",
      "scope": "所有付费订阅",
      "createdAt": "2026-10-08T03:19:17.000+08:00",
      "updatedAt": "2026-10-08T11:44:55.000+08:00",
      "confirmedAt": "2026-10-08T11:44:55.000+08:00",
      "occurredOn": null,
      "confirmationBasis": "source_post",
      "schedule": {
        "precision": "deadline",
        "from": "2026-10-08T15:00:00.000+08:00",
        "through": "2026-10-08T15:00:00.000+08:00",
        "label": "北京时间预计 10月8日 15:00 前"
      },
      "posts": [
        {
          "id": "2108040921044639779",
          "publishedAt": "2026-10-08T11:44:55.000+08:00",
          "stage": "确认发卡",
          "text": "已确认在所有账户中到账。",
          "originalText": "Confirmed landed across all accounts.",
          "fullText": "已确认在所有账户中到账。我们目前进展如何？",
          "fullOriginalText": "Confirmed landed across all accounts. How are we doing so far?",
          "context": [
            {
              "id": "2107913674593644711",
              "author": "thsottiaux",
              "relation": "quote",
              "text": "第 3 天/\\n\\n重头戏是 Chat 里的 GPT-6，不过今天也是个小庆祝日——Codex 和 ChatGPT Work 的活跃用户数创下 4000 万新高。\\n\\n正在给所有付费账户加载一张重置卡。明天见！",
              "originalText": "Day 3/\\n\\nThe big one is GPT-6 in Chat, but today is also a little celebration day with a new high of 40M active users across Codex and ChatGPT Work.\\n\\nLoading a banked reset in everyone's paid accounts. See you again tomorrow!",
              "url": "https://x.com/i/status/2107913674593644711"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2108040921044639779"
        },
        {
          "id": "2107913738791596286",
          "publishedAt": "2026-10-08T03:19:33.000+08:00",
          "stage": "进展",
          "text": "会在太平洋时间今天结束前到位。",
          "originalText": "Will be there by EOD PST.",
          "fullText": "会在太平洋时间今天结束前到位。",
          "fullOriginalText": "Will be there by EOD PST.",
          "context": [
            {
              "id": "2107913674593644711",
              "author": "thsottiaux",
              "relation": "reply",
              "text": "第 3 天/\\n\\n重头戏是 Chat 里的 GPT-6，不过今天也是个小庆祝日，Codex 和 ChatGPT Work 的活跃用户数创下 4000 万新高。\\n\\n正在给所有付费账户加载一张重置卡。明天见！",
              "originalText": "Day 3/\\n\\nThe big one is GPT-6 in Chat, but today is also a little celebration day with a new high of 40M active users across Codex and ChatGPT Work.\\n\\nLoading a banked reset in everyone's paid accounts. See you again tomorrow!",
              "url": "https://x.com/i/status/2107913674593644711"
            },
            {
              "id": "2107575657014468879",
              "author": "thsottiaux",
              "relation": "quote",
              "text": "第 2 天汇总/\\n\\n2.1/ Approve for me（自动审核）现已包含在内，且不消耗用量。使用时可能占套餐的 2-10%。对你来说也更好。\\n2.2/ 面向构建者的简化 API。\\n2.3/ 会议记录已集成。\\n2.4/ Decisions API 已面向构建者上线。将在应用中使用以改善体验。",
              "originalText": "Roundup of Day 2/\\n\\n2.1/ Approve for me (auto-review) is now included and does not use usage. Can be between 2-10% of plan when used. Also better for you.\\n2.2/ Simplified API for builders.\\n2.3/ Meeting notes integrated.\\n2.4/ Decisions API live for builders. Will use in the app to improve the experience.",
              "url": "https://x.com/i/status/2107575657014468879"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2107913738791596286"
        },
        {
          "id": "2107913674593644711",
          "publishedAt": "2026-10-08T03:19:17.000+08:00",
          "stage": "进展",
          "text": "正在给所有付费账户加载一张重置卡。",
          "originalText": "Loading a banked reset in everyone's paid accounts.",
          "fullText": "第 3 天/\\n\\n重头戏是 Chat 里的 GPT-6，但今天也是个小庆祝日——Codex 和 ChatGPT Work 的活跃用户数创下 4000 万新高。\\n\\n正在给所有付费账户加载一张重置卡。明天见！",
          "fullOriginalText": "Day 3/\\n\\nThe big one is GPT-6 in Chat, but today is also a little celebration day with a new high of 40M active users across Codex and ChatGPT Work.\\n\\nLoading a banked reset in everyone's paid accounts. See you again tomorrow!",
          "context": [
            {
              "id": "2107575657014468879",
              "author": "thsottiaux",
              "relation": "quote",
              "text": "第 2 天汇总/\\n\\n2.1/ Approve for me（自动审核）现已包含在内，且不消耗用量。使用时可能占套餐的 2-10%。对你来说也更好。\\n2.2/ 面向构建者的简化 API。\\n2.3/ 会议纪要集成。\\n2.4/ Decisions API 已面向构建者上线。将在应用中使用以改善体验。",
              "originalText": "Roundup of Day 2/\\n\\n2.1/ Approve for me (auto-review) is now included and does not use usage. Can be between 2-10% of plan when used. Also better for you.\\n2.2/ Simplified API for builders.\\n2.3/ Meeting notes integrated.\\n2.4/ Decisions API live for builders. Will use in the app to improve the experience.",
              "url": "https://x.com/i/status/2107575657014468879"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2107913674593644711"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "reset-2107676072871600470-1-1",
      "type": "direct_reset",
      "label": "全员重置",
      "displayLabel": "重置（形式未明确）",
      "presentation": {
        "status": "confirmed",
        "scopeKnown": false,
        "scopeLabel": null,
        "kindExplicit": false,
        "timeInferred": false,
        "audienceZh": null,
        "productsZh": null
      },
      "estimate": null,
      "status": "confirmed",
      "title": "Tibo 确认重置",
      "scope": "",
      "createdAt": "2026-10-07T11:35:09.000+08:00",
      "updatedAt": "2026-10-07T11:35:09.000+08:00",
      "confirmedAt": "2026-10-07T11:35:09.000+08:00",
      "occurredOn": null,
      "confirmationBasis": "source_post",
      "schedule": null,
      "posts": [
        {
          "id": "2107676072871600470",
          "publishedAt": "2026-10-07T11:35:09.000+08:00",
          "stage": "确认完成",
          "text": "因此……重置已经处理完毕。尽情享用！",
          "originalText": "Therefore ... the reset has been processed. Enjoy!",
          "fullText": "我们发布了四件被认为从不错到很棒的东西，还有一些数学证明，但投票结果很明确，社区要求一次重置。我确实做了校准，看起来这个游戏规则偏向重置，但目前的规则就是这样。\\n\\n因此……重置已经处理完毕。尽情享用！",
          "fullOriginalText": "We shipped four things that were deemed good to great and some math proofs, but the vote is clear and the community demands a reset. I did calibrate it and it *seems* that the game is rigged in reset's favor, but such are the rules at the moment.\\n\\nTherefore ... the reset has been processed. Enjoy!",
          "context": [
            {
              "id": "2107575657014468879",
              "author": "thsottiaux",
              "relation": "quote",
              "text": "第 2 天汇总/\\n\\n2.1/ Approve for me（自动审查）现已包含在内，且不消耗用量。使用时可能占套餐的 2-10%。对你来说也更好。\\n2.2/ 为开发者提供简化的 API。\\n2.3/ 会议纪要已集成。\\n2.4/ Decisions API 已面向开发者上线。将用于应用中以改善体验。",
              "originalText": "Roundup of Day 2/\\n\\n2.1/ Approve for me (auto-review) is now included and does not use usage. Can be between 2-10% of plan when used. Also better for you.\\n2.2/ Simplified API for builders.\\n2.3/ Meeting notes integrated.\\n2.4/ Decisions API live for builders. Will use in the app to improve the experience.",
              "url": "https://x.com/i/status/2107575657014468879"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2107676072871600470"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "reset-2106239435461579088-1-1",
      "type": "direct_reset",
      "label": "全员重置",
      "displayLabel": "重置（形式未明确）",
      "presentation": {
        "status": "confirmed",
        "scopeKnown": true,
        "scopeLabel": "Pro",
        "kindExplicit": false,
        "timeInferred": false,
        "audienceZh": "Pro 500 用户",
        "productsZh": "Codex"
      },
      "estimate": null,
      "status": "confirmed",
      "title": "Tibo 确认重置",
      "scope": "Pro",
      "createdAt": "2026-10-03T12:26:28.000+08:00",
      "updatedAt": "2026-10-03T12:26:28.000+08:00",
      "confirmedAt": "2026-10-03T12:26:28.000+08:00",
      "occurredOn": null,
      "confirmationBasis": "source_post",
      "schedule": null,
      "posts": [
        {
          "id": "2106239435461579088",
          "publishedAt": "2026-10-03T12:26:28.000+08:00",
          "stage": "确认完成",
          "text": "全部修好了。",
          "originalText": "All fixed.",
          "fullText": "全部修好了。这里 Pro 500 用户的数量多得惊人。",
          "fullOriginalText": "All fixed. Surprising number of Pro 500 users on here.",
          "context": [
            {
              "id": "2106233145163141249",
              "author": "thsottiaux",
              "relation": "quote",
              "text": "看到一些反馈说 Pro 500 没有像预期那样收到早前的重置。正在调查，会补上。",
              "originalText": "Seeing some reports that the Pro 500 didn’t get the reset as expected earlier. Investigating and will make up for it",
              "url": "https://x.com/i/status/2106233145163141249"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2106239435461579088"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "reset-2105843926221660585-1-1",
      "type": "direct_reset",
      "label": "全员重置",
      "displayLabel": "额度重置",
      "presentation": {
        "status": "confirmed",
        "scopeKnown": true,
        "scopeLabel": "Pro",
        "kindExplicit": true,
        "timeInferred": false,
        "audienceZh": "Pro 500 用户",
        "productsZh": "Codex"
      },
      "estimate": null,
      "status": "confirmed",
      "title": "Codex 额度重置已完成",
      "scope": "所有付费订阅",
      "createdAt": "2026-10-02T10:14:51.000+08:00",
      "updatedAt": "2026-10-03T12:28:21.000+08:00",
      "confirmedAt": "2026-10-03T05:18:48.000+08:00",
      "occurredOn": null,
      "confirmationBasis": "source_post",
      "schedule": {
        "precision": "window",
        "from": "2026-10-03T01:00:00.000+08:00",
        "through": "2026-10-03T02:00:00.000+08:00",
        "label": "北京时间预计 10月3日 01:00–02:00"
      },
      "posts": [
        {
          "id": "2106239912932692085",
          "publishedAt": "2026-10-03T12:28:21.000+08:00",
          "stage": "补充说明",
          "text": "是的，没有，那是我的错，没能在上午10点把它完美地下发出去。下次这件事会规划得更好，抱歉。",
          "originalText": "Yeah no, that was my bad for not propagating it at 10am quite perfectly. This is something that will be better planned next time, apologies.",
          "fullText": "@_architected 是的，没有，那是我的错，没能在上午10点把它完美地下发出去。下次这件事会规划得更好，抱歉。",
          "fullOriginalText": "@_architected Yeah no, that was my bad for not propagating it at 10am quite perfectly. This is something that will be better planned next time, apologies.",
          "context": [
            {
              "id": "2106083508267724809",
              "author": "_architected",
              "relation": "reply",
              "text": "我已经开始他妈的极度讨厌这种重置破事了。\\n\\n- 所以我周日反正还有一次重置，当时还剩大约30%。\\n- 他们宣布重置会在周五上午10点进行。\\n- 好吧，我不想丢掉我那30%，所以我赶紧开了 Astra，用它做一些我本来打算周末做的大规模重构工作。\\n- 上午10点没有重置，因为他们的算力现在大概扛不住，于是他们就完全沉默了。",
              "originalText": "i've started hating this reset bullshit so fucking much.\\n\\n- so i have a reset coming on Sunday anyway, with about 30% left.\\n- they announce that the reset will happen on Friday @ 10 am.\\n- ok, i don't want to lose my 30%, so i spin up Astra and use it for some big refactoring work i was planning to do over the weekend.\\n- there's no reset @ 10 am because their compute power probably can't handle it right now, so they just go completely silent.",
              "url": "https://x.com/i/status/2106083508267724809"
            },
            {
              "id": "2105843926221660585",
              "author": "thsottiaux",
              "relation": "quote",
              "text": "全球重置将于明天太平洋时间上午10点落地，面向所有付费 ChatGPT 账户。对 GPT-6.1 Sol 的缓慢启动表示抱歉，在头两天巨大的负载高峰之后，它现在已经恢复到预期速度运行。",
              "originalText": "Global reset landing tomorrow 10am PST for all paid ChatGPT accounts. Apologies for the slow start with GPT-6.1 Sol, it's now back to running at expected speeds after the massive load spike in the first two days.",
              "url": "https://x.com/i/status/2105843926221660585"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2106239912932692085"
        },
        {
          "id": "2106233145163141249",
          "publishedAt": "2026-10-03T12:01:28.000+08:00",
          "stage": "补充说明",
          "text": "看到一些报告说 Pro 500 没有像之前预期的那样获得重置。正在调查，并会补上。",
          "originalText": "Seeing some reports that the Pro 500 didn’t get the reset as expected earlier. Investigating and will make up for it",
          "fullText": "看到一些报告说 Pro 500 没有像之前预期的那样获得重置。正在调查，并会补上。",
          "fullOriginalText": "Seeing some reports that the Pro 500 didn’t get the reset as expected earlier. Investigating and will make up for it",
          "context": [],
          "url": "https://x.com/thsottiaux/status/2106233145163141249"
        },
        {
          "id": "2106131810921136451",
          "publishedAt": "2026-10-03T05:18:48.000+08:00",
          "stage": "确认完成",
          "text": "全部重置已下发完成。尽情享用。",
          "originalText": "Reset all propagated. Enjoy.",
          "fullText": "全部重置已下发完成。尽情享用。",
          "fullOriginalText": "Reset all propagated. Enjoy.",
          "context": [
            {
              "id": "2105843926221660585",
              "author": "thsottiaux",
              "relation": "quote",
              "text": "全球重置将于明天太平洋时间上午10点对所有付费 ChatGPT 账户生效。对 GPT-6.1 Sol 的缓慢启动表示抱歉，在头两天巨大的负载高峰之后，它现在已经恢复到预期速度运行。",
              "originalText": "Global reset landing tomorrow 10am PST for all paid ChatGPT accounts. Apologies for the slow start with GPT-6.1 Sol, it's now back to running at expected speeds after the massive load spike in the first two days.",
              "url": "https://x.com/i/status/2105843926221660585"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2106131810921136451"
        },
        {
          "id": "2105843926221660585",
          "publishedAt": "2026-10-02T10:14:51.000+08:00",
          "stage": "预告",
          "text": "全球重置将于明天太平洋时间上午10点落地，面向所有付费 ChatGPT 账户。",
          "originalText": "Global reset landing tomorrow 10am PST for all paid ChatGPT accounts.",
          "fullText": "全球重置将于明天太平洋时间上午10点落地，面向所有付费 ChatGPT 账户。对 GPT-6.1 Sol 的缓慢启动表示抱歉，在头两天巨大的负载高峰之后，它现在已经恢复到预期速度运行。",
          "fullOriginalText": "Global reset landing tomorrow 10am PST for all paid ChatGPT accounts. Apologies for the slow start with GPT-6.1 Sol, it's now back to running at expected speeds after the massive load spike in the first two days.",
          "context": [],
          "url": "https://x.com/thsottiaux/status/2105843926221660585"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "banked-2105173168281506088-1-1",
      "type": "reset_credit",
      "label": "发重置卡",
      "displayLabel": "重置卡发放",
      "presentation": {
        "status": "confirmed",
        "scopeKnown": false,
        "scopeLabel": null,
        "kindExplicit": true,
        "timeInferred": false,
        "audienceZh": null,
        "productsZh": "Codex"
      },
      "estimate": null,
      "status": "confirmed",
      "title": "重置卡已发放",
      "scope": "",
      "createdAt": "2026-09-30T13:49:30.000+08:00",
      "updatedAt": "2026-09-30T13:49:30.000+08:00",
      "confirmedAt": "2026-09-30T13:49:30.000+08:00",
      "occurredOn": null,
      "confirmationBasis": "source_post",
      "schedule": null,
      "posts": [
        {
          "id": "2105173168281506088",
          "publishedAt": "2026-09-30T13:49:30.000+08:00",
          "stage": "确认发卡",
          "text": "是的，查一下邮件",
          "originalText": "Yes, check email",
          "fullText": "@kr0der 是的，查一下邮件",
          "fullOriginalText": "@kr0der Yes, check email",
          "context": [
            {
              "id": "2105157445857538064",
              "author": "kr0der",
              "relation": "reply",
              "text": "我偶然发现我的 Codex 里有 62,393 个 credits，于是查了一下这按正常价格要花多少钱\\n\\n25,000 credits 是 1.5k 澳元，所以这大约是 3.7k 澳元（约 2.5k 美元）\\n\\n感谢 OpenAI 送的免费 credits（这是因为 $200 套餐的变动吗？），还有额外的那张 banked reset 🫡",
              "originalText": "i randomly saw that i have 62,393 credits in Codex so i checked how much $ that would cost normally\\n\\n25,000 credits is $1.5k AUD so this is about $3.7k AUD (~$2.5k USD)\\n\\nthanks OpenAI for the free credits (is this due to the $200 plan change?) and also the extra banked reset 🫡",
              "url": "https://x.com/i/status/2105157445857538064"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2105173168281506088"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "reset-2103963215885701493-1-1",
      "type": "reset_credit",
      "label": "发重置卡",
      "displayLabel": "重置卡发放",
      "presentation": {
        "status": "confirmed",
        "scopeKnown": false,
        "scopeLabel": null,
        "kindExplicit": false,
        "timeInferred": false,
        "audienceZh": null,
        "productsZh": null
      },
      "estimate": null,
      "status": "confirmed",
      "title": "重置卡已发放",
      "scope": "",
      "createdAt": "2026-09-27T05:41:35.000+08:00",
      "updatedAt": "2026-09-30T05:14:28.548+08:00",
      "confirmedAt": null,
      "occurredOn": "2026-09-30",
      "confirmationBasis": "receipt_review",
      "schedule": null,
      "posts": [
        {
          "id": "2103963215885701493",
          "publishedAt": "2026-09-27T05:41:35.000+08:00",
          "stage": "预告",
          "text": "下周会有更多重置。",
          "originalText": "More resets coming next week",
          "fullText": "抱歉，Gia。下周会有更多重置。",
          "fullOriginalText": "@giadotai Sorry Gia. More resets coming next week",
          "context": [
            {
              "id": "2103919273353830410",
              "author": "giadotai",
              "relation": "reply",
              "text": null,
              "originalText": "The reset came right after my own reset, couldn’t be worse timing.",
              "url": "https://x.com/i/status/2103919273353830410"
            },
            {
              "id": "2103911959544610829",
              "author": "thsottiaux",
              "relation": "quote",
              "text": "重置已全部生效。就这些了。祝大家周末愉快。",
              "originalText": "Resets all propagated. That will be all. Have a fantastic weekend.",
              "url": "https://x.com/i/status/2103911959544610829"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2103963215885701493"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "reset-2103637477760311522-1-1",
      "type": "direct_reset",
      "label": "全员重置",
      "displayLabel": "额度重置",
      "presentation": {
        "status": "confirmed",
        "scopeKnown": true,
        "scopeLabel": "所有付费用户",
        "kindExplicit": true,
        "timeInferred": false,
        "audienceZh": "所有付费用户",
        "productsZh": "Codex、ChatGPT Work"
      },
      "estimate": null,
      "status": "confirmed",
      "title": "Codex 额度重置已完成",
      "scope": "所有付费订阅",
      "createdAt": "2026-09-26T08:07:13.000+08:00",
      "updatedAt": "2026-09-27T02:17:54.000+08:00",
      "confirmedAt": "2026-09-27T02:17:54.000+08:00",
      "occurredOn": null,
      "confirmationBasis": "source_post",
      "schedule": null,
      "posts": [
        {
          "id": "2103911959544610829",
          "publishedAt": "2026-09-27T02:17:54.000+08:00",
          "stage": "确认完成",
          "text": "重置已全部生效。",
          "originalText": "Resets all propagated.",
          "fullText": "重置已全部生效。就这些了。祝大家周末愉快。",
          "fullOriginalText": "Resets all propagated. That will be all. Have a fantastic weekend.",
          "context": [],
          "url": "https://x.com/thsottiaux/status/2103911959544610829"
        },
        {
          "id": "2103637477760311522",
          "publishedAt": "2026-09-26T08:07:13.000+08:00",
          "stage": "预告",
          "text": "我们将重置所有付费用户在 Codex 和 ChatGPT Work 上的用量额度。",
          "originalText": "we’ll reset usage limits for all paid users across codex and ChatGPT work",
          "fullText": "哦对……我们回来了，接下来会重置所有付费用户在 Codex 和 ChatGPT Work 上的用量额度\\n\\n抱歉刚才的短暂中断！\\n\\n（是的，我们有一个特殊的备用 Codex，在出问题的时候帮我们顶上）",
          "fullOriginalText": "o yes… we’re back in action and we’ll reset usage limits for all paid users across codex and ChatGPT work\\n\\nsorry about the brief disruption!\\n\\n(and yes we have a special spare codex when things are down to help us out)",
          "context": [
            {
              "id": "2103622639386574979",
              "author": "thsottiaux",
              "relation": "quote",
              "text": "哦不 :(",
              "originalText": "o no :(",
              "url": "https://x.com/i/status/2103622639386574979"
            },
            {
              "id": "2103620061156290622",
              "author": "thsottiaux",
              "relation": "reply",
              "text": "我们已注意到 Codex 服务中断，正在努力恢复正常服务。",
              "originalText": "We are aware that codex is down and are working hard to bring back normal service.",
              "url": "https://x.com/i/status/2103620061156290622"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2103637477760311522"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "banked-2101352781219258527-1-1",
      "type": "reset_credit",
      "label": "发重置卡",
      "displayLabel": "重置卡发放",
      "presentation": {
        "status": "confirmed",
        "scopeKnown": true,
        "scopeLabel": "Plus, Pro, Business",
        "kindExplicit": true,
        "timeInferred": true,
        "audienceZh": "Plus、Pro、Business 用户",
        "productsZh": null
      },
      "estimate": null,
      "status": "confirmed",
      "title": "重置卡已发放",
      "scope": "Plus、Pro、Business",
      "createdAt": "2026-09-20T00:48:38.000+08:00",
      "updatedAt": "2026-09-23T05:49:16.000+08:00",
      "confirmedAt": null,
      "occurredOn": "2026-09-23",
      "confirmationBasis": "receipt_review",
      "schedule": {
        "precision": "date",
        "from": "2026-09-22T15:00:00.000+08:00",
        "through": "2026-09-23T15:00:00.000+08:00",
        "label": "北京时间预计 9月22日 15:00–9月23日 15:00"
      },
      "posts": [
        {
          "id": "2102463847714247142",
          "publishedAt": "2026-09-23T02:23:37.000+08:00",
          "stage": "发卡预告",
          "text": "我们正在为所有 Plus、Pro 和 Business 用户的账户载入一张重置卡。",
          "originalText": "We are loading a banked reset into all accounts of our Plus, Pro and Business users.",
          "fullText": "GPT-6 Sol 和 Luna 已经上线。它们不仅在各方面的提升都非常显著，在写作以及那种「你一试就知道」的整体质感上也是如此。\\n\\n我们还把 API 价格永久下调了 50%，让这两款模型能适用于大量全新的使用场景，也让你的用量更经用——即使是订阅用户也一样。\\n\\n还有一件事。我们正在为所有 Plus、Pro 和 Business 用户的账户载入一张重置卡。冲！\\n\\nhttps://t.co/00DRh1sRrO",
          "fullOriginalText": "GPT-6 Sol and Luna are out. Not only are they a very significant improvement across the board, but also in writing and general \\"you know when you try it\\" quality. \\n\\nWe are also permanently reducing the API price by 50% making both of them viable for a ton of new usecases and making your usage go further too, even on the subscriptions.\\n\\nAnd one more thing. We are loading a banked reset into all accounts of our Plus, Pro and Business users. Let's go!\\n\\nhttps://t.co/00DRh1sRrO",
          "context": [
            {
              "id": "2102440619616682120",
              "author": "thsottiaux",
              "relation": "quote",
              "text": null,
              "originalText": "We have been focusing on efficiency and intelligence for all. \\n\\nVery proud of the team. Only possible when you have incredible models at the top end of the capability that you can then use to make a big difference in everything else.",
              "url": "https://x.com/i/status/2102440619616682120"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2102463847714247142"
        },
        {
          "id": "2102254445082116335",
          "publishedAt": "2026-09-22T12:31:32.000+08:00",
          "stage": "预告",
          "text": "马上就周二了，我答应过周二会有一次重置。",
          "originalText": "We are almost Tuesday and I promised a reset for Tuesday.",
          "fullText": "女士们先生们……启动……你们的……引擎。马上就到周二了，我承诺过周二会重置。还有一些其他事情。很快见。",
          "fullOriginalText": "Ladies and gentlemen... start... your... ENGINES. We are almost Tuesday and I promised a reset for Tuesday. Among some other things. See you soon.",
          "context": [],
          "url": "https://x.com/thsottiaux/status/2102254445082116335"
        },
        {
          "id": "2101352781219258527",
          "publishedAt": "2026-09-20T00:48:38.000+08:00",
          "stage": "发卡预告",
          "text": "好吧。不过它周二还是会来的。",
          "originalText": "OK fine. But it’s also still coming in Tuesday",
          "fullText": "@udiWertheimer 好吧。不过它也仍然会在周二到来。",
          "fullOriginalText": "@udiWertheimer OK fine. But it’s also still coming in Tuesday",
          "context": [
            {
              "id": "2101093319501664368",
              "author": "udiWertheimer",
              "relation": "reply",
              "text": "好吧 Tibo，你们这周没发布什么有意思的东西。\\n\\n你欠我们一张重置卡。\\n\\n不好意思，规矩不是我定的。",
              "originalText": "ok tibo you guys didn’t ship anything interesting this week\\n\\nyou owe us a banked reset\\n\\nsorry i don’t make the rules",
              "url": "https://x.com/i/status/2101093319501664368"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2101352781219258527"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "reset-2098612714704891959-1-1",
      "type": "direct_reset",
      "label": "全员重置",
      "displayLabel": "重置（形式未明确）",
      "presentation": {
        "status": "confirmed",
        "scopeKnown": true,
        "scopeLabel": "Astra users",
        "kindExplicit": false,
        "timeInferred": true,
        "audienceZh": "“Astra users”",
        "productsZh": null
      },
      "estimate": null,
      "status": "confirmed",
      "title": "Tibo 确认重置",
      "scope": "",
      "createdAt": "2026-09-12T11:20:36.000+08:00",
      "updatedAt": "2026-09-12T16:09:17.000+08:00",
      "confirmedAt": "2026-09-12T16:09:17.000+08:00",
      "occurredOn": null,
      "confirmationBasis": "source_post",
      "schedule": {
        "precision": "deadline",
        "from": "2026-09-12T15:00:00.000+08:00",
        "through": "2026-09-12T15:00:00.000+08:00",
        "label": "北京时间预计 9月12日 15:00 前"
      },
      "posts": [
        {
          "id": "2098685367058612394",
          "publishedAt": "2026-09-12T16:09:17.000+08:00",
          "stage": "确认完成",
          "text": "所有重置已下发完毕。",
          "originalText": "Reset all propagated.",
          "fullText": "所有重置已下发完毕。祝好梦。",
          "fullOriginalText": "Reset all propagated. Sweet dreams.",
          "context": [
            {
              "id": "2098612714704891959",
              "author": "thsottiaux",
              "relation": "quote",
              "text": "嗨，Astra 用户们。一次重置，以及关于近段时间大家反馈的质量问题的简要更新。\\n\\n与你们中的一些人一起排查后，我们发现并修复了以下问题：\\n- 一些为旧模型编写的 skills 触发过于频繁，或妨碍了模型检查自己的产出。\\n- 一个可选开启的上下文管理实验可能导致提前停止，或去回复更早的消息。我们已将其关闭。我们粗略估计约有 4-5k 名用户受该实验影响。\\n- 我们还移除了一些配置不当的引擎，这些引擎对经由它们的一部分长尾流量造成了可测量的质量下降。\\n\\n我们还做了一些较小的改进，整体体验应该会明显变好。更稳定的任务跟进、更好地追踪你的最新消息，以及在任务推进过程中做更好的结果检查。\\n\\n大家贴出的例子，以及所有直接与我们合作过的用户，都极其有助于我们快速修复问题。始终感谢这个了不起的社区。\\n\\n当然，一次重置也会在今天午夜前落地。",
              "originalText": "Hi Astra users. A reset and a quick update on quality issues that have been posted around.\\n\\nWorking with some of you, we have found and fixed the following issues:\\n- Some skills written for previous models were triggering too often or preventing the model from checking its work.\\n- An opt-in context management experiment that could cause early stops or replies to older messages. We've disabled it. Our rough estimate is that 4-5k users were affected by this experiment.\\n- We've also removed some badly configured engines that resulted in a measured quality degradation for a long tail of traffic flowing through them.\\n\\nWe’ve also made some more minor improvements and things should feel significantly better across the board. More consistent follow-through, better tracking of your latest message, and better checks on the work as it’s going through the motions.\\n\\nThe examples posted and all the users who worked directly with us were incredibly useful in helping fix things quickly. Always grateful for this incredible community.\\n\\nAnd of course, a reset is also landing by midnight today.",
              "url": "https://x.com/i/status/2098612714704891959"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2098685367058612394"
        },
        {
          "id": "2098612714704891959",
          "publishedAt": "2026-09-12T11:20:36.000+08:00",
          "stage": "预告",
          "text": "当然，一次重置也会在今天午夜前落地。",
          "originalText": "And of course, a reset is also landing by midnight today.",
          "fullText": "嗨，Astra 用户们。一次重置，以及关于近段时间大家反馈的质量问题的简要更新。\\n\\n与你们中的一些人一起排查后，我们发现并修复了以下问题：\\n- 一些为旧模型编写的 skills 触发过于频繁，或妨碍了模型检查自己的产出。\\n- 一个可选开启的上下文管理实验可能导致提前停止，或去回复更早的消息。我们已将其关闭。我们粗略估计约有 4-5k 名用户受该实验影响。\\n- 我们还移除了一些配置不当的引擎，这些引擎对经由它们的一部分长尾流量造成了可测量的质量下降。\\n\\n我们还做了一些较小的改进，整体体验应该会明显变好。更稳定的任务跟进、更好地追踪你的最新消息，以及在任务推进过程中做更好的结果检查。\\n\\n大家贴出的例子，以及所有直接与我们合作过的用户，都极其有助于我们快速修复问题。始终感谢这个了不起的社区。\\n\\n当然，一次重置也会在今天午夜前落地。",
          "fullOriginalText": "Hi Astra users. A reset and a quick update on quality issues that have been posted around.\\n\\nWorking with some of you, we have found and fixed the following issues:\\n- Some skills written for previous models were triggering too often or preventing the model from checking its work.\\n- An opt-in context management experiment that could cause early stops or replies to older messages. We've disabled it. Our rough estimate is that 4-5k users were affected by this experiment.\\n- We've also removed some badly configured engines that resulted in a measured quality degradation for a long tail of traffic flowing through them.\\n\\nWe’ve also made some more minor improvements and things should feel significantly better across the board. More consistent follow-through, better tracking of your latest message, and better checks on the work as it’s going through the motions.\\n\\nThe examples posted and all the users who worked directly with us were incredibly useful in helping fix things quickly. Always grateful for this incredible community.\\n\\nAnd of course, a reset is also landing by midnight today.",
          "context": [],
          "url": "https://x.com/thsottiaux/status/2098612714704891959"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "banked-2097752790177370535-1-1",
      "type": "reset_credit",
      "label": "发重置卡",
      "displayLabel": "重置（形式未明确）",
      "presentation": {
        "status": "confirmed",
        "scopeKnown": true,
        "scopeLabel": "Everyone who used one in the affected time window",
        "kindExplicit": false,
        "timeInferred": false,
        "audienceZh": "受影响的用户",
        "productsZh": "Codex、ChatGPT Work"
      },
      "estimate": null,
      "status": "confirmed",
      "title": "重置卡已发放",
      "scope": "",
      "createdAt": "2026-09-10T02:23:34.000+08:00",
      "updatedAt": "2026-09-13T10:36:02.000+08:00",
      "confirmedAt": null,
      "occurredOn": null,
      "confirmationBasis": "receipt_review",
      "schedule": null,
      "posts": [
        {
          "id": "2097752790177370535",
          "publishedAt": "2026-09-10T02:23:34.000+08:00",
          "stage": "发卡预告",
          "text": "所有在受影响的时间窗口内使用过重置卡的人都会再获得一张。",
          "originalText": "Everyone who used one in the affected time window is getting another one",
          "fullText": "今天早上出了点小插曲：一些重置卡在 ChatGPT Work 和 Codex 中使用时未能完全生效。所有在受影响的时间窗口内使用过重置卡的人都会再获得一张，并收到一封道歉邮件。",
          "fullOriginalText": "There was a bit of a kerfuffle this morning with some banked resets not fully applying when used in ChatGPT Work and Codex. Everyone who used one in the affected time window is getting another one and an email to apologize.",
          "context": [],
          "url": "https://x.com/thsottiaux/status/2097752790177370535"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "reset-2097043464538264003-1-1",
      "type": "direct_reset",
      "label": "全员重置",
      "displayLabel": "额度重置",
      "presentation": {
        "status": "confirmed",
        "scopeKnown": true,
        "scopeLabel": "所有用户",
        "kindExplicit": true,
        "timeInferred": false,
        "audienceZh": "所有用户",
        "productsZh": null
      },
      "estimate": null,
      "status": "confirmed",
      "title": "Codex 额度重置已完成",
      "scope": "",
      "createdAt": "2026-09-08T03:24:57.000+08:00",
      "updatedAt": "2026-09-08T12:05:53.000+08:00",
      "confirmedAt": "2026-09-08T12:05:53.000+08:00",
      "occurredOn": null,
      "confirmationBasis": "source_post",
      "schedule": {
        "precision": "window",
        "from": "2026-09-08T09:00:00.000+08:00",
        "through": "2026-09-08T10:00:00.000+08:00",
        "label": "北京时间预计 9月8日 09:00–10:00"
      },
      "posts": [
        {
          "id": "2097174560412246215",
          "publishedAt": "2026-09-08T12:05:53.000+08:00",
          "stage": "确认完成",
          "text": "所有人的用量额度都已重置。",
          "originalText": "All reset for everyone.",
          "fullText": "所有人的用量额度都已重置。享受与 Astra 一起的这一周吧。",
          "fullOriginalText": "All reset for everyone. Enjoy the week with Astra.",
          "context": [
            {
              "id": "2097043464538264003",
              "author": "thsottiaux",
              "relation": "quote",
              "text": "永远不会放弃你\\n永远不会让你失望\\n永远不会四处奔波并抛弃你\\n永远不会让你哭泣\\n永远不会说再见\\n永远不会撒谎并伤害你\\n\\n感谢阅读。我们将对所有付费订阅的用量做一次全球重置，好让你在 blender 里做有趣的 3D 建模把额度烧光之后，还能继续享受 Astra。工作周马上就要开始了。\\n\\n大约在今天下午 6 点 PST 落地。",
              "originalText": "Never gonna give you up\\nNever gonna let you down\\nNever gonna run around and desert you\\nNever gonna make you cry\\nNever gonna say goodbye\\nNever gonna tell a lie and hurt you\\n\\nThanks for reading. We will do a global reset of the usage for all paid subscriptions so that you can keep enjoying Astra after burning through all of it doing fun 3D modeling in blender. The work week is about to start.\\n\\nLands around 6pm PST today.",
              "url": "https://x.com/i/status/2097043464538264003"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2097174560412246215"
        },
        {
          "id": "2097043464538264003",
          "publishedAt": "2026-09-08T03:24:57.000+08:00",
          "stage": "预告",
          "text": "我们将对所有付费订阅的用量做一次全球重置。",
          "originalText": "We will do a global reset of the usage for all paid subscriptions",
          "fullText": "永远不会放弃你\\n永远不会让你失望\\n永远不会四处奔波并抛弃你\\n永远不会让你哭泣\\n永远不会说再见\\n永远不会撒谎并伤害你\\n\\n感谢阅读。我们将对所有付费订阅的用量做一次全球重置，好让你在 blender 里做有趣的 3D 建模把额度烧光之后，还能继续享受 Astra。工作周马上就要开始了。\\n\\n大约在今天下午 6 点 PST 落地。",
          "fullOriginalText": "Never gonna give you up\\nNever gonna let you down\\nNever gonna run around and desert you\\nNever gonna make you cry\\nNever gonna say goodbye\\nNever gonna tell a lie and hurt you\\n\\nThanks for reading. We will do a global reset of the usage for all paid subscriptions so that you can keep enjoying Astra after burning through all of it doing fun 3D modeling in blender. The work week is about to start.\\n\\nLands around 6pm PST today.",
          "context": [],
          "url": "https://x.com/thsottiaux/status/2097043464538264003"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "banked-2095979536043401428-1-1",
      "type": "reset_credit",
      "label": "发重置卡",
      "displayLabel": "重置卡发放",
      "presentation": {
        "status": "confirmed",
        "scopeKnown": true,
        "scopeLabel": "Plus, Pro, Business",
        "kindExplicit": true,
        "timeInferred": true,
        "audienceZh": "Plus、Pro、Business 用户",
        "productsZh": null
      },
      "estimate": null,
      "status": "confirmed",
      "title": "重置卡已发放",
      "scope": "Plus、Pro、Business",
      "createdAt": "2026-09-05T04:57:17.000+08:00",
      "updatedAt": "2026-09-13T10:36:02.000+08:00",
      "confirmedAt": null,
      "occurredOn": "2026-09-05",
      "confirmationBasis": "receipt_review",
      "schedule": {
        "precision": "deadline",
        "from": "2026-09-05T15:00:00.000+08:00",
        "through": "2026-09-05T15:00:00.000+08:00",
        "label": "北京时间预计 9月5日 15:00 前"
      },
      "posts": [
        {
          "id": "2096035437299237298",
          "publishedAt": "2026-09-05T08:39:25.000+08:00",
          "stage": "发卡预告",
          "text": "我们今天也会为所有 Plus、Pro 和 Business 用户发放完整的重置卡，今天结束前到账。",
          "originalText": "we will do the full banked reset today too for all Plus, Pro and Business users. Lands end of day.",
          "fullText": "因为我们非常高兴 Astra 今天提前上线了，而你们一直超级有耐心（其实也没有，但没关系！）……我们今天也会为所有 Plus、Pro 和 Business 用户发放完整的重置卡。今天结束前到账。\\n\\nAstra 日快乐，祝你们度过一个超棒的周末。\\n\\nPS：如果你在太平洋时间晚上 8 点前创建账号或升级，你也能拿到。还有时间！",
          "fullOriginalText": "Because we are beyond happy to have Astra rolled out today ahead of schedule and you have been super patient with us (not really, but it’s ok!)… we will do the full banked reset today too for all Plus, Pro and Business users. Lands end of day.\\n\\nHappy Astra day and enjoy a phenomenal weekend. \\n\\nPS: If you create the account or upgrade before 8pm PT you will get it too. Still time!",
          "context": [],
          "url": "https://x.com/thsottiaux/status/2096035437299237298"
        },
        {
          "id": "2095979536043401428",
          "publishedAt": "2026-09-05T04:57:17.000+08:00",
          "stage": "发卡预告",
          "text": "我们给你准备了一张重置卡作为补偿。它会在今天结束前到账；如果你在太平洋时间晚上 8 点前创建账号，你也同样能拿到。",
          "originalText": "we've got you covered with a banked reset. Lands by end of day",
          "fullText": "部分 Plus 和 Business 用户今天还无法使用 Astra，我们给你准备了一张重置卡作为补偿。它会在今天结束前到账；如果你在太平洋时间晚上 8 点前创建账号，你也同样能拿到。",
          "fullOriginalText": "Some Plus and Business users won't yet get access to Astra today, we've got you covered with a banked reset. Lands by end of day and if you create your account by 8pm PT then you'll get it too.",
          "context": [],
          "url": "https://x.com/thsottiaux/status/2095979536043401428"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "banked-2095651088502591861-1-1",
      "type": "reset_credit",
      "label": "发重置卡",
      "displayLabel": "重置卡发放",
      "presentation": {
        "status": "confirmed",
        "scopeKnown": true,
        "scopeLabel": "paid ChatGPT plan",
        "kindExplicit": true,
        "timeInferred": false,
        "audienceZh": "所有付费用户",
        "productsZh": "ChatGPT"
      },
      "estimate": null,
      "status": "confirmed",
      "title": "重置卡已发放",
      "scope": "",
      "createdAt": "2026-09-04T07:12:09.000+08:00",
      "updatedAt": "2026-09-13T10:36:02.000+08:00",
      "confirmedAt": null,
      "occurredOn": "2026-09-04",
      "confirmationBasis": "receipt_review",
      "schedule": {
        "precision": "approximate",
        "from": "2026-09-04T10:12:09.000+08:00",
        "through": "2026-09-04T10:12:09.000+08:00",
        "label": "北京时间约 9月4日 10:12"
      },
      "posts": [
        {
          "id": "2095651088502591861",
          "publishedAt": "2026-09-04T07:12:09.000+08:00",
          "stage": "发卡预告",
          "text": "你每有一天无法在已付费的 ChatGPT 套餐中使用 Astra，我们就送出一张重置卡，从今天开始；第一张会在约 3 小时后到账。",
          "originalText": "We will give one banked reset for every day you don't have access to Astra on your paid ChatGPT plan, starting today.",
          "fullText": "你每有一天无法在已付费的 ChatGPT 套餐中使用 Astra，我们就送出一张重置卡，从今天开始。团队正在竭尽全力，尽快让大家用上。\\n\\n第一张会在约 3 小时后到账。如果你还没有账号，现在还有时间创建。",
          "fullOriginalText": "We will give one banked reset for every day you don't have access to Astra on your paid ChatGPT plan, starting today.  Team is moving mountains to give access as fast as we can.\\n\\nFirst one will land in ~ 3 hours. There is still time to create your account if you don't have one.",
          "context": [],
          "url": "https://x.com/thsottiaux/status/2095651088502591861"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "reset-2094143054039183573-1-1",
      "type": "direct_reset",
      "label": "全员重置",
      "displayLabel": "额度重置",
      "presentation": {
        "status": "confirmed",
        "scopeKnown": true,
        "scopeLabel": "所有付费用户",
        "kindExplicit": true,
        "timeInferred": false,
        "audienceZh": "所有付费用户",
        "productsZh": "Codex、ChatGPT Work"
      },
      "estimate": null,
      "status": "confirmed",
      "title": "Codex 额度重置已完成",
      "scope": "所有付费订阅",
      "createdAt": "2026-08-31T03:19:46.000+08:00",
      "updatedAt": "2026-08-31T10:34:27.000+08:00",
      "confirmedAt": "2026-08-31T10:34:27.000+08:00",
      "occurredOn": null,
      "confirmationBasis": "source_post",
      "schedule": {
        "precision": "window",
        "from": "2026-08-31T09:00:00.000+08:00",
        "through": "2026-08-31T10:00:00.000+08:00",
        "label": "北京时间预计 8月31日 09:00–10:00"
      },
      "posts": [
        {
          "id": "2094252447271366730",
          "publishedAt": "2026-08-31T10:34:27.000+08:00",
          "stage": "确认完成",
          "text": "为此我们刚刚为 ChatGPT Work 和 Codex 的所有付费订阅重置了用量额度。",
          "originalText": "we have now reset usage for all paid subscriptions for ChatGPT Work and Codex.",
          "fullText": "我昨天想说的是，我们的活跃用户数达到了 2500 万，为此我们刚刚为 ChatGPT Work 和 Codex 的所有付费订阅重置了用量额度。\\n\\n很快会有更多来自 The Reset Company 的消息，敬请期待。",
          "fullOriginalText": "What I wanted to say yesterday is that we hit 25M active users and to celebrate we have now reset usage for all paid subscriptions for ChatGPT Work and Codex.\\n\\nSee you soon for more news from The Reset Company.",
          "context": [
            {
              "id": "2093811840258293947",
              "author": "thsottiaux",
              "relation": "quote",
              "text": null,
              "originalText": "This celebration is moved to tomorrow as the button was already pressed today.",
              "url": "https://x.com/i/status/2093811840258293947"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2094252447271366730"
        },
        {
          "id": "2094144275957350900",
          "publishedAt": "2026-08-31T03:24:37.000+08:00",
          "stage": "预告",
          "text": "你的 Codex 和 ChatGPT Work 重置将在太平洋时间下午 6 点落地。",
          "originalText": "Your Codex and ChatGPT Work reset will land at 6pm PST.",
          "fullText": "你的 Codex 和 ChatGPT Work 重置将在太平洋时间下午 6 点落地。\\n\\n我挑战你尽可能多地把用量烧掉，并去发现那些最新、最棒的功能。\\n\\n是时候 /fast 了",
          "fullOriginalText": "Your Codex and ChatGPT Work reset will land at 6pm PST. \\n\\nI challenge you to burn as much usage as you can and discover and the latest awesome features. \\n\\nTime to go /fast",
          "context": [],
          "url": "https://x.com/thsottiaux/status/2094144275957350900"
        },
        {
          "id": "2094143054039183573",
          "publishedAt": "2026-08-31T03:19:46.000+08:00",
          "stage": "预告",
          "text": "是的（确认明天还会再有一次重置）。",
          "originalText": "Yes",
          "fullText": "是的",
          "fullOriginalText": "@rezoundous Yes",
          "context": [
            {
              "id": "2093949336573124769",
              "author": "rezoundous",
              "relation": "reply",
              "text": null,
              "originalText": "ANOTHER RESET TOMORROW?",
              "url": "https://x.com/i/status/2093949336573124769"
            },
            {
              "id": "2093811840258293947",
              "author": "thsottiaux",
              "relation": "quote",
              "text": null,
              "originalText": "This celebration is moved to tomorrow as the button was already pressed today.",
              "url": "https://x.com/i/status/2093811840258293947"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2094143054039183573"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "reset-2093801758665715784-1-1",
      "type": "direct_reset",
      "label": "全员重置",
      "displayLabel": "额度重置",
      "presentation": {
        "status": "likely_completed",
        "scopeKnown": true,
        "scopeLabel": "paid users",
        "kindExplicit": true,
        "timeInferred": false,
        "audienceZh": "所有付费用户",
        "productsZh": "Codex、ChatGPT Work"
      },
      "estimate": {
        "from": "2026-08-30T05:30:00.000+08:00",
        "through": "2026-08-30T08:30:00.000+08:00",
        "basis": "model",
        "label": "北京时间 8月30日 05:30–08:30",
        "reason": "模型推算：本条给出 2:30pm PST 的落地时间，帖子发出时已近 13:43，按以往重置常有数小时延迟，故留出至下午稍晚的窗口。"
      },
      "status": "announced",
      "title": "额度应已重置",
      "scope": "",
      "createdAt": "2026-08-30T04:43:34.000+08:00",
      "updatedAt": "2026-08-30T04:43:53.000+08:00",
      "confirmedAt": null,
      "occurredOn": null,
      "confirmationBasis": null,
      "schedule": {
        "precision": "window",
        "from": "2026-08-30T05:30:00.000+08:00",
        "through": "2026-08-30T06:30:00.000+08:00",
        "label": "北京时间预计 8月30日 05:30–06:30"
      },
      "posts": [
        {
          "id": "2093801838504186008",
          "publishedAt": "2026-08-30T04:43:53.000+08:00",
          "stage": "预告",
          "text": "将于 2:30pm PST 落地。",
          "originalText": "Landing 2:30pm PST",
          "fullText": "将于 2:30pm PST 落地",
          "fullOriginalText": "Landing 2:30pm PST",
          "context": [
            {
              "id": "2093801758665715784",
              "author": "thsottiaux",
              "relation": "reply",
              "text": "我们正在为 Codex 和 ChatGPT Work 的所有付费用户重置用量。\\n\\n请继续往下读，了解 Codex 用量额度的最新进展。团队一直在连轴转，梳理了数千条报告并陆续发布修复。\\n\\n取决于你使用 Codex 的方式，你的用量应该能比之前多用 10% 到 50%。\\n\\n我们真的是拿细梳子一点点梳理，很多被发现的细小问题其实由来已久，以下是我们发现并修复的内容：\\n- 压缩（Compaction）。我们在压缩过程中保留了旧图片，有时会让上下文大到再次触发压缩。修复后，重度使用图片的用户用量下降了约 10%。已修复。\\n- 记忆（Memory）。后台记忆 worker 可能会继承 Stop 钩子，在钩子不允许其结束时仍持续运行。这影响了不到 1% 的用户，但长尾情况相当糟糕，我们见过一个示例线程检查自己能否停止多达 15,000 次。已修复。\\n- 目标（Goals）。某些情况下，设定好的 /goal 完成后仍会越过预期的停止条件继续运行，或者模型会不断重试失效的工具而不停止。我们见过一些例子消耗了每周额度的 15% 到 70%。已修复。\\n- 自动化（Automations）。一些自定义计划任务可能比配置的频率运行得更频繁。已修复。\\n- 子代理（Subagents）。较小的模型（例如 Luna）有时会在未被明确要求的情况下挑选能力更强的帮手。同样的情况也出现在：未以 /fast 模式运行的编排模型可能要求子代理以 /fast 运行。已修复。\\n- 电脑操作历史（Computer History）。较旧的实现可能导致对重叠的活动反复进行摘要。在某些情况下，我们看到它每周最多消耗五分之一的每周用量。已修复。\\n- 滚动任务摘要（Rolling task summaries）。普通轮次会触发额外的后台请求。这让 token 用量增加了约 1%。每次都不多，但会累积。我们已经禁用这一功能。\\n- MCP。一些工具结果可能被重复编码。我们还发现工具说明被截断后又被重新获取。已修复。\\n\\n我们还做了一些架构层面的改动，防止这些问题再次出现；无论怎样，一旦发生，我们的团队都会收到告警。我们也在努力让你直接在应用里看到用量都花在了哪里，这样你就不用再靠猜了。\\n\\n不用说，我们正在重置用量额度，希望你们度过一个非常愉快的周六！",
              "originalText": "We are reseting usage for all paid users of Codex and ChatGPT Work.\\n\\nPlease continue reading for an update on Codex usage limits. The team has been working around the clock, going through thousands of reports and shipping fixes.\\n\\nDepending on how you use Codex, you should see your usage go between 10% and 50% further than before.\\n\\nWe really went with a fine comb, with many uncovered small things being longstanding and here is what we found and fixed:\\n- Compaction. We were keeping old images during compaction, sometimes making the context large enough to trigger compaction again. After the fix, usage dropped around 10% for users making heavy use of images. Fixed.\\n- Memory. Background memory workers could inherit Stop hooks and keep running when the hook wouldn’t let them finish. This affected fewer than 1% of users, with the long tail being pretty bad and we saw one example thread check whether it could stop 15,000 times. Fixed.\\n- Goals. In some cases, a set /goal could finish and then keep going past the intended stop condition, or the model would keep retrying broken tools without stopping. We saw examples consume anywhere from 15% to 70% of a weekly allowance. Fixed.\\n- Automations. Some custom schedules could run more frequently than configured. Fixed.\\n- Subagents. Smaller models (e.g. Luna) sometimes picked more capable helpers without being explicitly asked. The same was true where the orchestrating model not running in /fast mode could request sub-agents to run /fast. Fixed.\\n- Computer History. The older implementation could lead to repeatedly summarizing overlapping activity. For some cases we saw it consume up to one fifth of the weekly usage per week. Fixed.\\n- Rolling task summaries. Ordinary turns were triggering extra background requests. These added about 1% to token usage. Small each time, but it adds up. We have disabled this.\\n- MCP. Some tool results could be encoded twice. We also found tool instructions getting cut off and fetched again. Fixed.\\n\\nWe’ve also made architectural changes to prevent these from regressing and our teams will get paged if it happens regardless. We are also working on showing you directly in the app where your usage goes so you don’t have to guess.\\n\\nGoes without saying that we’re resetting usage limits and I hope you enjoy a very nice Saturday!",
              "url": "https://x.com/i/status/2093801758665715784"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2093801838504186008"
        },
        {
          "id": "2093801758665715784",
          "publishedAt": "2026-08-30T04:43:34.000+08:00",
          "stage": "预告",
          "text": "我们正在为 Codex 和 ChatGPT Work 的所有付费用户重置用量。……不用说，我们正在重置用量额度，希望你们度过一个非常愉快的周六！",
          "originalText": "We are reseting usage for all paid users of Codex and ChatGPT Work.",
          "fullText": "我们正在为 Codex 和 ChatGPT Work 的所有付费用户重置用量。\\n\\n请继续往下读，了解 Codex 用量额度的最新进展。团队一直在连轴转，梳理了数千条报告并陆续发布修复。\\n\\n取决于你使用 Codex 的方式，你的用量应该能比之前多用 10% 到 50%。\\n\\n我们真的是拿细梳子一点点梳理，很多被发现的细小问题其实由来已久，以下是我们发现并修复的内容：\\n- 压缩（Compaction）。我们在压缩过程中保留了旧图片，有时会让上下文大到再次触发压缩。修复后，重度使用图片的用户用量下降了约 10%。已修复。\\n- 记忆（Memory）。后台记忆 worker 可能会继承 Stop 钩子，在钩子不允许其结束时仍持续运行。这影响了不到 1% 的用户，但长尾情况相当糟糕，我们见过一个示例线程检查自己能否停止多达 15,000 次。已修复。\\n- 目标（Goals）。某些情况下，设定好的 /goal 完成后仍会越过预期的停止条件继续运行，或者模型会不断重试失效的工具而不停止。我们见过一些例子消耗了每周额度的 15% 到 70%。已修复。\\n- 自动化（Automations）。一些自定义计划任务可能比配置的频率运行得更频繁。已修复。\\n- 子代理（Subagents）。较小的模型（例如 Luna）有时会在未被明确要求的情况下挑选能力更强的帮手。同样的情况也出现在：未以 /fast 模式运行的编排模型可能要求子代理以 /fast 运行。已修复。\\n- 电脑操作历史（Computer History）。较旧的实现可能导致对重叠的活动反复进行摘要。在某些情况下，我们看到它每周最多消耗五分之一的每周用量。已修复。\\n- 滚动任务摘要（Rolling task summaries）。普通轮次会触发额外的后台请求。这让 token 用量增加了约 1%。每次都不多，但会累积。我们已经禁用这一功能。\\n- MCP。一些工具结果可能被重复编码。我们还发现工具说明被截断后又被重新获取。已修复。\\n\\n我们还做了一些架构层面的改动，防止这些问题再次出现；无论怎样，一旦发生，我们的团队都会收到告警。我们也在努力让你直接在应用里看到用量都花在了哪里，这样你就不用再靠猜了。\\n\\n不用说，我们正在重置用量额度，希望你们度过一个非常愉快的周六！",
          "fullOriginalText": "We are reseting usage for all paid users of Codex and ChatGPT Work.\\n\\nPlease continue reading for an update on Codex usage limits. The team has been working around the clock, going through thousands of reports and shipping fixes.\\n\\nDepending on how you use Codex, you should see your usage go between 10% and 50% further than before.\\n\\nWe really went with a fine comb, with many uncovered small things being longstanding and here is what we found and fixed:\\n- Compaction. We were keeping old images during compaction, sometimes making the context large enough to trigger compaction again. After the fix, usage dropped around 10% for users making heavy use of images. Fixed.\\n- Memory. Background memory workers could inherit Stop hooks and keep running when the hook wouldn’t let them finish. This affected fewer than 1% of users, with the long tail being pretty bad and we saw one example thread check whether it could stop 15,000 times. Fixed.\\n- Goals. In some cases, a set /goal could finish and then keep going past the intended stop condition, or the model would keep retrying broken tools without stopping. We saw examples consume anywhere from 15% to 70% of a weekly allowance. Fixed.\\n- Automations. Some custom schedules could run more frequently than configured. Fixed.\\n- Subagents. Smaller models (e.g. Luna) sometimes picked more capable helpers without being explicitly asked. The same was true where the orchestrating model not running in /fast mode could request sub-agents to run /fast. Fixed.\\n- Computer History. The older implementation could lead to repeatedly summarizing overlapping activity. For some cases we saw it consume up to one fifth of the weekly usage per week. Fixed.\\n- Rolling task summaries. Ordinary turns were triggering extra background requests. These added about 1% to token usage. Small each time, but it adds up. We have disabled this.\\n- MCP. Some tool results could be encoded twice. We also found tool instructions getting cut off and fetched again. Fixed.\\n\\nWe’ve also made architectural changes to prevent these from regressing and our teams will get paged if it happens regardless. We are also working on showing you directly in the app where your usage goes so you don’t have to guess.\\n\\nGoes without saying that we’re resetting usage limits and I hope you enjoy a very nice Saturday!",
          "context": [],
          "url": "https://x.com/thsottiaux/status/2093801758665715784"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "reset-2093014447833116908-1-1",
      "type": "direct_reset",
      "label": "全员重置",
      "displayLabel": "额度重置",
      "presentation": {
        "status": "confirmed",
        "scopeKnown": true,
        "scopeLabel": "all ChatGPT Work and Codex users",
        "kindExplicit": true,
        "timeInferred": false,
        "audienceZh": "所有用户",
        "productsZh": "Codex、ChatGPT Work"
      },
      "estimate": null,
      "status": "confirmed",
      "title": "Codex 额度重置已完成",
      "scope": "",
      "createdAt": "2026-08-28T00:35:05.000+08:00",
      "updatedAt": "2026-08-28T00:35:05.000+08:00",
      "confirmedAt": "2026-08-28T00:35:05.000+08:00",
      "occurredOn": null,
      "confirmationBasis": "source_post",
      "schedule": null,
      "posts": [
        {
          "id": "2093014447833116908",
          "publishedAt": "2026-08-28T00:35:05.000+08:00",
          "stage": "确认完成",
          "text": "全新的我，还有面向所有 ChatGPT Work 和 Codex 用户的全新用量额度。",
          "originalText": "Brand new me and brand new usage for all ChatGPT Work and Codex users.",
          "fullText": "从没睡得这么香，感觉整个人都被重置了。全新的我，还有面向所有 ChatGPT Work 和 Codex 用户的全新用量额度。按一次按钮，就重返一分青春。\\n\\n周四快乐",
          "fullOriginalText": "Never slept better and feeling reseted. Brand new me and brand new usage for all ChatGPT Work and Codex users. Regaining my youth one button press at a time.\\n\\nHappy Thursday",
          "context": [],
          "url": "https://x.com/thsottiaux/status/2093014447833116908"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "reset-2092316228497063958-1-1",
      "type": "direct_reset",
      "label": "全员重置",
      "displayLabel": "重置（形式未明确）",
      "presentation": {
        "status": "confirmed",
        "scopeKnown": false,
        "scopeLabel": null,
        "kindExplicit": false,
        "timeInferred": false,
        "audienceZh": null,
        "productsZh": "Codex"
      },
      "estimate": null,
      "status": "confirmed",
      "title": "Tibo 确认重置",
      "scope": "",
      "createdAt": "2026-08-26T02:20:36.000+08:00",
      "updatedAt": "2026-08-26T02:20:36.000+08:00",
      "confirmedAt": "2026-08-26T02:20:36.000+08:00",
      "occurredOn": null,
      "confirmationBasis": "source_post",
      "schedule": null,
      "posts": [
        {
          "id": "2092316228497063958",
          "publishedAt": "2026-08-26T02:20:36.000+08:00",
          "stage": "确认完成",
          "text": "倒也不算随机，但确实如此。",
          "originalText": "Not so random, but yes",
          "fullText": "倒也不算随机，但确实如此。",
          "fullOriginalText": "@s_batzoglou Not so random, but yes",
          "context": [
            {
              "id": "2092256496063033418",
              "author": "s_batzoglou",
              "relation": "reply",
              "text": null,
              "originalText": "Did we just get a random Codex reset?",
              "url": "https://x.com/i/status/2092256496063033418"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2092316228497063958"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "reset-2091407991736332689-1-1",
      "type": "direct_reset",
      "label": "全员重置",
      "displayLabel": "额度重置",
      "presentation": {
        "status": "confirmed",
        "scopeKnown": true,
        "scopeLabel": "business accounts",
        "kindExplicit": true,
        "timeInferred": false,
        "audienceZh": "Business 用户",
        "productsZh": "Codex"
      },
      "estimate": null,
      "status": "confirmed",
      "title": "Codex 额度重置已完成",
      "scope": "business",
      "createdAt": "2026-08-23T14:11:36.000+08:00",
      "updatedAt": "2026-08-24T10:09:04.000+08:00",
      "confirmedAt": "2026-08-24T08:46:51.000+08:00",
      "occurredOn": null,
      "confirmationBasis": "source_post",
      "schedule": {
        "precision": "window",
        "from": "2026-08-24T05:00:00.000+08:00",
        "through": "2026-08-24T06:00:00.000+08:00",
        "label": "北京时间预计 8月24日 05:00–06:00"
      },
      "posts": [
        {
          "id": "2091709346371838240",
          "publishedAt": "2026-08-24T10:09:04.000+08:00",
          "stage": "补充说明",
          "text": "确实包含商业版账户，商业版账户也大约 5 分钟后就会全部完成。",
          "originalText": "It does include business accounts! Just checked and it was still propagating, but should be all done in 5 minutes for business accounts too.",
          "fullText": "确实包含商业版账户！刚刚查了一下，它还在推送中，不过商业版账户也大约 5 分钟后就会全部完成。",
          "fullOriginalText": "@hooftly It does include business accounts! Just checked and it was still propagating, but should be all done in 5 minutes for business accounts too.",
          "context": [
            {
              "id": "2091691767267774755",
              "author": "hooftly",
              "relation": "reply",
              "text": null,
              "originalText": "@thsottiaux Why do you keep saying all paid users but then exclude biz accounts.\\n\\nSuper frustrating",
              "url": "https://x.com/i/status/2091691767267774755"
            },
            {
              "id": "2091688655828246890",
              "author": "thsottiaux",
              "relation": "reply",
              "text": "周日好。重置已经推送到各个账号，我们也针对昨天提到的那些我们发现的问题，在用量方面上线了一些修复。你应该能感受到积极的改善。明天还会有更多内容，我们会持续沟通。",
              "originalText": "Good Sunday. Reset has been propagated to accounts and we landed some fixes to usage for things mentioned yesterday as issues we found. You should feel a positive difference. More to come tomorrow and will keep communicating.",
              "url": "https://x.com/i/status/2091688655828246890"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2091709346371838240"
        },
        {
          "id": "2091688655828246890",
          "publishedAt": "2026-08-24T08:46:51.000+08:00",
          "stage": "确认完成",
          "text": "重置已经推送到各个账号。",
          "originalText": "Reset has been propagated to accounts",
          "fullText": "周日好。重置已经推送到各个账号，我们也针对昨天提到的那些我们发现的问题，在用量方面上线了一些修复。你应该能感受到积极的改善。明天还会有更多内容，我们会持续沟通。",
          "fullOriginalText": "Good Sunday. Reset has been propagated to accounts and we landed some fixes to usage for things mentioned yesterday as issues we found. You should feel a positive difference. More to come tomorrow and will keep communicating.",
          "context": [
            {
              "id": "2091407991736332689",
              "author": "thsottiaux",
              "relation": "quote",
              "text": "关于 Codex 速率限制的更新。\\n\\n我们发现 (a) 在带有多次压缩的长会话中使用图片时存在一些效率损耗，(b) Computer History 的 p95+ 用量偏高，(c) 一个本意是生成对话标题的功能，其用量消耗比预期略多。我们已经派出一支攻坚团队全面排查，并将在明天发布修复。我们还发现了一种能大幅提升效率的全新方法，它与上述问题完全无关，我们将在下周着手推进。\\n\\n作为明天部分修复的一部分，我们还将对全部付费订阅的用量进行一次完全重置。\\n\\n到时见。",
              "originalText": "Update on rate limits in Codex. \\n\\nWe’ve found (a) some inefficiencies when using images in long sessions with multiple compactions (b) high p95+ usage for Computer History (c) a feature that was meant to generate conversation titles that was draining a bit more usage than intended. And we have a tiger team combing through everything and shipping fixes tomorrow. We also found a novel approach to drive efficiency up significantly that is completely unrelated and we will be working on next week.\\n\\nAs part of some of the fixes tomorrow, we will also do a full reset of the usage for all paid subscriptions.\\n\\nSee you then.",
              "url": "https://x.com/i/status/2091407991736332689"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2091688655828246890"
        },
        {
          "id": "2091413240337326588",
          "publishedAt": "2026-08-23T14:32:27.000+08:00",
          "stage": "预告",
          "text": "（我）说的是下午2点，显然。",
          "originalText": "Meant 2pm obviously",
          "fullText": "显然，我是说下午2点。",
          "fullOriginalText": "Meant 2pm obviously",
          "context": [
            {
              "id": "2091412393368945027",
              "author": "thsottiaux",
              "relation": "reply",
              "text": "重置将在明天约 14pm PST 落地。",
              "originalText": "Reset will land around 14pm PST tomorrow.",
              "url": "https://x.com/i/status/2091412393368945027"
            },
            {
              "id": "2091407991736332689",
              "author": "thsottiaux",
              "relation": "reply",
              "text": "关于 Codex 速率限制的更新。\\n\\n我们发现 (a) 在带有多次压缩的长会话中使用图片时存在一些效率损耗，(b) Computer History 的 p95+ 用量偏高，(c) 一个本意是生成对话标题的功能，其用量消耗比预期略多。我们已经派出一支攻坚团队全面排查，并将在明天发布修复。我们还发现了一种能大幅提升效率的全新方法，它与上述问题完全无关，我们将在下周着手推进。\\n\\n作为明天部分修复的一部分，我们还将对全部付费订阅的用量进行一次完全重置。\\n\\n到时见。",
              "originalText": "Update on rate limits in Codex. \\n\\nWe’ve found (a) some inefficiencies when using images in long sessions with multiple compactions (b) high p95+ usage for Computer History (c) a feature that was meant to generate conversation titles that was draining a bit more usage than intended. And we have a tiger team combing through everything and shipping fixes tomorrow. We also found a novel approach to drive efficiency up significantly that is completely unrelated and we will be working on next week.\\n\\nAs part of some of the fixes tomorrow, we will also do a full reset of the usage for all paid subscriptions.\\n\\nSee you then.",
              "url": "https://x.com/i/status/2091407991736332689"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2091413240337326588"
        },
        {
          "id": "2091412393368945027",
          "publishedAt": "2026-08-23T14:29:05.000+08:00",
          "stage": "预告",
          "text": "重置将在明天约 14pm PST 落地。",
          "originalText": "Reset will land around 14pm PST tomorrow.",
          "fullText": "重置将在明天约 14pm PST 落地。",
          "fullOriginalText": "Reset will land around 14pm PST tomorrow.",
          "context": [
            {
              "id": "2091407991736332689",
              "author": "thsottiaux",
              "relation": "reply",
              "text": "关于 Codex 速率限制的更新。\\n\\n我们发现 (a) 在带有多次压缩的长会话中使用图片时存在一些效率损耗，(b) Computer History 的 p95+ 用量偏高，(c) 一个本意是生成对话标题的功能，其用量消耗比预期略多。我们已经派出一支攻坚团队全面排查，并将在明天发布修复。我们还发现了一种能大幅提升效率的全新方法，它与上述问题完全无关，我们将在下周着手推进。\\n\\n作为明天部分修复的一部分，我们还将对全部付费订阅的用量进行一次完全重置。\\n\\n到时见。",
              "originalText": "Update on rate limits in Codex. \\n\\nWe’ve found (a) some inefficiencies when using images in long sessions with multiple compactions (b) high p95+ usage for Computer History (c) a feature that was meant to generate conversation titles that was draining a bit more usage than intended. And we have a tiger team combing through everything and shipping fixes tomorrow. We also found a novel approach to drive efficiency up significantly that is completely unrelated and we will be working on next week.\\n\\nAs part of some of the fixes tomorrow, we will also do a full reset of the usage for all paid subscriptions.\\n\\nSee you then.",
              "url": "https://x.com/i/status/2091407991736332689"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2091412393368945027"
        },
        {
          "id": "2091407991736332689",
          "publishedAt": "2026-08-23T14:11:36.000+08:00",
          "stage": "预告",
          "text": "作为明天部分修复的一部分，我们还将对全部付费订阅的用量进行一次完全重置。",
          "originalText": "As part of some of the fixes tomorrow, we will also do a full reset of the usage for all paid subscriptions.",
          "fullText": "关于 Codex 速率限制的更新。\\n\\n我们发现 (a) 在带有多次压缩的长会话中使用图片时存在一些效率损耗，(b) Computer History 的 p95+ 用量偏高，(c) 一个本意是生成对话标题的功能，其用量消耗比预期略多。我们已经派出一支攻坚团队全面排查，并将在明天发布修复。我们还发现了一种能大幅提升效率的全新方法，它与上述问题完全无关，我们将在下周着手推进。\\n\\n作为明天部分修复的一部分，我们还将对全部付费订阅的用量进行一次完全重置。\\n\\n到时见。",
          "fullOriginalText": "Update on rate limits in Codex. \\n\\nWe’ve found (a) some inefficiencies when using images in long sessions with multiple compactions (b) high p95+ usage for Computer History (c) a feature that was meant to generate conversation titles that was draining a bit more usage than intended. And we have a tiger team combing through everything and shipping fixes tomorrow. We also found a novel approach to drive efficiency up significantly that is completely unrelated and we will be working on next week.\\n\\nAs part of some of the fixes tomorrow, we will also do a full reset of the usage for all paid subscriptions.\\n\\nSee you then.",
          "context": [
            {
              "id": "2091033630147854385",
              "author": "thsottiaux",
              "relation": "quote",
              "text": null,
              "originalText": "Update on rate limits in Codex. We do see that for some users the cache hit rate has been worse this week than the stable state the weeks before. This could explain that usage is draining somewhat faster for those users as hitting the cache consistently is an important component of being efficient.\\n\\nWe are investigating and will have an update tomorrow.",
              "url": "https://x.com/i/status/2091033630147854385"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2091407991736332689"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "banked-2090766694897619318-1-1",
      "type": "reset_credit",
      "label": "发重置卡",
      "displayLabel": "重置卡发放",
      "presentation": {
        "status": "confirmed",
        "scopeKnown": true,
        "scopeLabel": "所有付费用户",
        "kindExplicit": true,
        "timeInferred": false,
        "audienceZh": "所有付费用户",
        "productsZh": "Codex、ChatGPT Work"
      },
      "estimate": null,
      "status": "confirmed",
      "title": "重置卡已发放",
      "scope": "所有付费订阅",
      "createdAt": "2026-08-21T19:43:19.000+08:00",
      "updatedAt": "2026-08-22T08:50:36.000+08:00",
      "confirmedAt": "2026-08-22T08:50:36.000+08:00",
      "occurredOn": null,
      "confirmationBasis": "source_post",
      "schedule": {
        "precision": "window",
        "from": "2026-08-22T11:00:00.000+08:00",
        "through": "2026-08-22T12:00:00.000+08:00",
        "label": "北京时间预计 8月22日 11:00–12:00"
      },
      "posts": [
        {
          "id": "2090964822422949999",
          "publishedAt": "2026-08-22T08:50:36.000+08:00",
          "stage": "确认发卡",
          "text": "重置卡已到账，我再说一遍，重置卡已到账。",
          "originalText": "The banked reset has landed, I repeat, the banked reset has landed.",
          "fullText": "重置卡已到账，我再说一遍，重置卡已到账。祝大家周末愉快。",
          "fullOriginalText": "The banked reset has landed, I repeat, the banked reset has landed. Have an amazing weekend.",
          "context": [
            {
              "id": "2090947196107764189",
              "author": "thsottiaux",
              "relation": "quote",
              "text": "重置卡会在太平洋时间晚上 8 点前到账。面向 ChatGPT Work 和 Codex 的所有付费用户。这条消息你们想怎么用就怎么用吧。",
              "originalText": "The banked reset will be there by 8pm PST. For all paid users of ChatGPT Work and Codex. Do with this information what you may.",
              "url": "https://x.com/i/status/2090947196107764189"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2090964822422949999"
        },
        {
          "id": "2090947196107764189",
          "publishedAt": "2026-08-22T07:40:34.000+08:00",
          "stage": "发卡预告",
          "text": "重置卡会在太平洋时间晚上 8 点前到账，面向 ChatGPT Work 和 Codex 的所有付费用户。",
          "originalText": "The banked reset will be there by 8pm PST. For all paid users of ChatGPT Work and Codex.",
          "fullText": "重置卡会在太平洋时间晚上 8 点前到账。面向 ChatGPT Work 和 Codex 的所有付费用户。这条消息你们想怎么用就怎么用吧。",
          "fullOriginalText": "The banked reset will be there by 8pm PST. For all paid users of ChatGPT Work and Codex. Do with this information what you may.",
          "context": [],
          "url": "https://x.com/thsottiaux/status/2090947196107764189"
        },
        {
          "id": "2090766694897619318",
          "publishedAt": "2026-08-21T19:43:19.000+08:00",
          "stage": "发卡预告",
          "text": "今天白天，我们将为每一位 Codex 和 ChatGPT Work 用户发放一张重置卡（BANKED reset），你可以随意选择什么时候使用。",
          "originalText": "during the day we will credit every Codex and ChatGPT Work user with a BANKED reset that you can use at your own leisure",
          "fullText": "又是我。我带来了好消息。\\n\\n首先，本周某个时候，Codex 的活跃用户数已经达到 2000 万。其次，这值得庆祝，所以今天白天我们将为每一位 Codex 和 ChatGPT Work 用户发放一张重置卡（BANKED reset），你可以随意选择什么时候使用。之后我们还会带来其他好消息！\\n\\n关于用量额度消耗更快的问题，虽然我们没有发现任何异常情况，但我们对此极其重视，目前正在进行调查。如果确实发现了什么，我会公布出来；而我下面那条帖子实际上是对我们确实观察到的一种特定模式所作的澄清，我想把它特别指出来。\\n\\n今天去做点了不起的事吧。",
          "fullOriginalText": "It's me again. I come bearing great news. \\n\\nFirst of all, we have hit 20M active users for Codex some time this week. Second of all, this is cause for celebration and during the day we will credit every Codex and ChatGPT Work user with a BANKED reset that you can use at your own leisure. And we will have some other good news later too!\\n\\nNow, on usage limits draining faster, while we're not seeing anything abnormal, we do take it incredibly seriously and there is an ongoing investigation. I will share if we do find anything and my below post is really a clarification on a specific pattern that we did see that I wanted to call out.\\n\\nGo do something amazing today.",
          "context": [
            {
              "id": "2090675027670978569",
              "author": "thsottiaux",
              "relation": "quote",
              "text": null,
              "originalText": "We've investigated a few messages about codex usage limits being different. That's not something we change without engaging the community and being transparent.\\n\\nWhat we did see is that when talking to affected users many were using sub2api. Converting a subscription into api traffic to then re-serve or share across many users is not something we support and this type of usage gets flagged by our fraud-prevention systems.\\n\\nYou are completely fine if you use your subscription through Sign in With ChatGPT, either through the official clients or through one of the many OSS clients (Pi, OpenCode, ...) that support signing in with your account and using your included usage.",
              "url": "https://x.com/i/status/2090675027670978569"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2090766694897619318"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "reset-2087706104814023111-1-1",
      "type": "direct_reset",
      "label": "全员重置",
      "displayLabel": "重置（形式未明确）",
      "presentation": {
        "status": "likely_completed",
        "scopeKnown": true,
        "scopeLabel": "所有用户",
        "kindExplicit": false,
        "timeInferred": false,
        "audienceZh": "所有用户",
        "productsZh": "Codex"
      },
      "estimate": {
        "from": "2026-08-13T09:05:00.000+08:00",
        "through": "2026-08-13T11:00:00.000+08:00",
        "basis": "model",
        "label": "北京时间 8月13日 09:05–11:00",
        "reason": "模型推算：帖子称约一小时内到账，按其惯常延迟留出数小时余量。"
      },
      "status": "announced",
      "title": "额度应已重置",
      "scope": "",
      "createdAt": "2026-08-13T09:01:37.000+08:00",
      "updatedAt": "2026-08-13T09:01:37.000+08:00",
      "confirmedAt": null,
      "occurredOn": null,
      "confirmationBasis": null,
      "schedule": {
        "precision": "approximate",
        "from": "2026-08-13T10:01:37.000+08:00",
        "through": "2026-08-13T10:01:37.000+08:00",
        "label": "北京时间约 8月13日 10:01"
      },
      "posts": [
        {
          "id": "2087706104814023111",
          "publishedAt": "2026-08-13T09:01:37.000+08:00",
          "stage": "预告",
          "text": "大家好好享受一次重置吧。大约一小时内就会到账。",
          "originalText": "Enjoy a nice reset everyone. Landing in the next hour or so",
          "fullText": "其实是好几天前的旧闻了，不过已经跨过了 1500 万。大家好好享受一次重置吧。大约一小时内就会到账，赶紧 /fast。",
          "fullOriginalText": "Old news actually from a bunch of days ago, but crossed that 15M. Enjoy a nice reset everyone. Landing in the next hour or so, go /fast.",
          "context": [
            {
              "id": "2087423996115681767",
              "author": "thsottiaux",
              "relation": "quote",
              "text": null,
              "originalText": "I previously promised a reset for every 1M in additional active users for Codex, until 10M. \\n\\nWe blew past that and have been silent since 10M. Little surprise for you tomorrow.",
              "url": "https://x.com/i/status/2087423996115681767"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2087706104814023111"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "reset-2086189414292865249-1-1",
      "type": "direct_reset",
      "label": "全员重置",
      "displayLabel": "额度重置",
      "presentation": {
        "status": "confirmed",
        "scopeKnown": true,
        "scopeLabel": "paid · all paid ChatGPT Work and Codex users",
        "kindExplicit": true,
        "timeInferred": true,
        "audienceZh": "所有付费用户",
        "productsZh": "Codex、ChatGPT Work"
      },
      "estimate": null,
      "status": "confirmed",
      "title": "Codex 额度重置已完成",
      "scope": "所有付费订阅",
      "createdAt": "2026-08-09T04:34:50.000+08:00",
      "updatedAt": "2026-08-11T08:28:16.000+08:00",
      "confirmedAt": "2026-08-11T08:27:44.000+08:00",
      "occurredOn": null,
      "confirmationBasis": "source_post",
      "schedule": {
        "precision": "date",
        "from": "2026-08-10T15:00:00.000+08:00",
        "through": "2026-08-11T15:00:00.000+08:00",
        "label": "北京时间预计 8月10日 15:00–8月11日 15:00"
      },
      "posts": [
        {
          "id": "2086972933566857393",
          "publishedAt": "2026-08-11T08:28:16.000+08:00",
          "stage": "确认完成",
          "text": "所有付费 ChatGPT Work 和 Codex 用户的用量额度已重置。",
          "originalText": "Usage limits have been reset for all paid ChatGPT Work and Codex users.",
          "fullText": "所有付费 ChatGPT Work 和 Codex 用户的用量额度已重置。祝大家周一快乐，希望这一周过得非常棒。",
          "fullOriginalText": "Usage limits have been reset for all paid ChatGPT Work and Codex users. Happy Monday you all. Hope it is a fantastic week.",
          "context": [
            {
              "id": "2086972802457063486",
              "author": "thsottiaux",
              "relation": "reply",
              "text": "嗨。\\n\\n搞定了。",
              "originalText": "Hi.\\n\\nIt is done.",
              "url": "https://x.com/i/status/2086972802457063486"
            },
            {
              "id": "2086189414292865249",
              "author": "thsottiaux",
              "relation": "quote",
              "text": "我会在周一再做一次“表演性”的重置。",
              "originalText": "@rxmphai I'll do another performative reset on Monday",
              "url": "https://x.com/i/status/2086189414292865249"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2086972933566857393"
        },
        {
          "id": "2086972802457063486",
          "publishedAt": "2026-08-11T08:27:44.000+08:00",
          "stage": "确认完成",
          "text": "搞定了。",
          "originalText": "It is done.",
          "fullText": "嗨。\\n\\n搞定了。",
          "fullOriginalText": "Hi.\\n\\nIt is done.",
          "context": [
            {
              "id": "2086902321108205926",
              "author": "blueemi99",
              "relation": "quote",
              "text": null,
              "originalText": "So what about our reset?",
              "url": "https://x.com/i/status/2086902321108205926"
            },
            {
              "id": "2086189414292865249",
              "author": "thsottiaux",
              "relation": "quote",
              "text": "我会在周一再做一次“表演性”的重置。",
              "originalText": "@rxmphai I'll do another performative reset on Monday",
              "url": "https://x.com/i/status/2086189414292865249"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2086972802457063486"
        },
        {
          "id": "2086189414292865249",
          "publishedAt": "2026-08-09T04:34:50.000+08:00",
          "stage": "预告",
          "text": "我会在周一再做一次“表演性”的重置。",
          "originalText": "I'll do another performative reset on Monday",
          "fullText": "我会在周一再做一次“表演性”的重置。",
          "fullOriginalText": "@rxmphai I'll do another performative reset on Monday",
          "context": [
            {
              "id": "2086188425691140496",
              "author": "rxmphai",
              "relation": "reply",
              "text": null,
              "originalText": "This is just performative at this point. The weekly reset was yesterday",
              "url": "https://x.com/i/status/2086188425691140496"
            },
            {
              "id": "2086188036493344823",
              "author": "thsottiaux",
              "relation": "quote",
              "text": "没错，GPT-5.6 Sol 非常棒，几乎在哪儿都能用，包括在 CC harness 里。\\n\\n为了庆祝这一点，再加上我哪儿也不打算去……我已经为 ChatGPT Work 和 Codex 的所有付费用户重置了用量额度。\\n\\n玩得开心！",
              "originalText": "That's right, GPT-5.6 Sol is awesome and can be used pretty much anywhere, including in the CC harness. \\n\\nTo celebrate this, together with the fact that I'm not going anywhere... I have reset usage limits for all paid users of ChatGPT Work and Codex. \\n\\nHave fun out there!",
              "url": "https://x.com/i/status/2086188036493344823"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2086189414292865249"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "reset-2086188036493344823-1-1",
      "type": "direct_reset",
      "label": "全员重置",
      "displayLabel": "额度重置",
      "presentation": {
        "status": "confirmed",
        "scopeKnown": true,
        "scopeLabel": "paid · 所有付费用户",
        "kindExplicit": true,
        "timeInferred": false,
        "audienceZh": "所有付费用户",
        "productsZh": "Codex、ChatGPT Work"
      },
      "estimate": null,
      "status": "confirmed",
      "title": "Codex 额度重置已完成",
      "scope": "所有付费订阅",
      "createdAt": "2026-08-09T04:29:22.000+08:00",
      "updatedAt": "2026-08-09T04:29:22.000+08:00",
      "confirmedAt": "2026-08-09T04:29:22.000+08:00",
      "occurredOn": null,
      "confirmationBasis": "source_post",
      "schedule": null,
      "posts": [
        {
          "id": "2086188036493344823",
          "publishedAt": "2026-08-09T04:29:22.000+08:00",
          "stage": "确认完成",
          "text": "我已经为 ChatGPT Work 和 Codex 的所有付费用户重置了用量额度。",
          "originalText": "I have reset usage limits for all paid users of ChatGPT Work and Codex.",
          "fullText": "没错，GPT-5.6 Sol 非常棒，几乎在哪儿都能用，包括在 CC harness 里。\\n\\n为了庆祝这一点，再加上我哪儿也不打算去……我已经为 ChatGPT Work 和 Codex 的所有付费用户重置了用量额度。\\n\\n玩得开心！",
          "fullOriginalText": "That's right, GPT-5.6 Sol is awesome and can be used pretty much anywhere, including in the CC harness. \\n\\nTo celebrate this, together with the fact that I'm not going anywhere... I have reset usage limits for all paid users of ChatGPT Work and Codex. \\n\\nHave fun out there!",
          "context": [
            {
              "id": "2086173812253729118",
              "author": "bcherny",
              "relation": "quote",
              "text": null,
              "originalText": "@thsottiaux We are hiring if you would like to work at Anthropic!\\n\\nWe don’t ban people for using harnesses with other models. Almost certainly it was a different account classifier that triggered. Looking into it, thanks for escalating.",
              "url": "https://x.com/i/status/2086173812253729118"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2086188036493344823"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "reset-2083395449814229287-1-1",
      "type": "direct_reset",
      "label": "全员重置",
      "displayLabel": "额度重置",
      "presentation": {
        "status": "confirmed",
        "scopeKnown": false,
        "scopeLabel": null,
        "kindExplicit": true,
        "timeInferred": false,
        "audienceZh": null,
        "productsZh": "Codex、ChatGPT Work"
      },
      "estimate": null,
      "status": "confirmed",
      "title": "Codex 额度重置已完成",
      "scope": "",
      "createdAt": "2026-08-01T11:32:37.000+08:00",
      "updatedAt": "2026-08-01T11:32:37.000+08:00",
      "confirmedAt": "2026-08-01T11:32:37.000+08:00",
      "occurredOn": null,
      "confirmationBasis": "source_post",
      "schedule": null,
      "posts": [
        {
          "id": "2083395449814229287",
          "publishedAt": "2026-08-01T11:32:37.000+08:00",
          "stage": "确认完成",
          "text": "我已经重置了 Codex 和 ChatGPT Work 的用量额度。",
          "originalText": "I have reset usage limits for Codex and ChatGPT Work.",
          "fullText": "为了庆祝高效的一周，也为了让大家这个周末能运行 100'000 个 Luna 线程……没错……等一等……我已经重置了 Codex 和 ChatGPT Work 的用量额度。\\n\\n尽情享受吧。",
          "fullOriginalText": "To celebrate a week of efficiency and let you run 100'000 Luna threads this weekend... that's right... wait for it... I have reset usage limits for Codex and ChatGPT Work.\\n\\nEnjoy.",
          "context": [],
          "url": "https://x.com/thsottiaux/status/2083395449814229287"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "reset-2082317452755751098-1-1",
      "type": "direct_reset",
      "label": "全员重置",
      "displayLabel": "额度重置",
      "presentation": {
        "status": "confirmed",
        "scopeKnown": true,
        "scopeLabel": "all ChatGPT Work and Codex users",
        "kindExplicit": true,
        "timeInferred": false,
        "audienceZh": "所有用户",
        "productsZh": "Codex、ChatGPT Work"
      },
      "estimate": null,
      "status": "confirmed",
      "title": "Codex 额度重置已完成",
      "scope": "",
      "createdAt": "2026-07-29T12:09:02.000+08:00",
      "updatedAt": "2026-07-29T13:42:35.000+08:00",
      "confirmedAt": "2026-07-29T12:09:02.000+08:00",
      "occurredOn": null,
      "confirmationBasis": "source_post",
      "schedule": null,
      "posts": [
        {
          "id": "2082340992871760182",
          "publishedAt": "2026-07-29T13:42:35.000+08:00",
          "stage": "确认完成",
          "text": "回到 100% 了！",
          "originalText": "back to 100%!",
          "fullText": "天呐天呐天呐，回到 100% 了！",
          "fullOriginalText": "@0xrsydn Omg omg omg, back to 100%!",
          "context": [
            {
              "id": "2082340894745964820",
              "author": "0xrsydn",
              "relation": "reply",
              "text": null,
              "originalText": "HOLYSHIT I WAS AT AROUND 10% WEEKLY USAGE LEFT OMG",
              "url": "https://x.com/i/status/2082340894745964820"
            },
            {
              "id": "2082317452755751098",
              "author": "thsottiaux",
              "relation": "quote",
              "text": "Sol 的用户们，大家好！我已经为所有 ChatGPT Work 和 Codex 用户重置了用量额度。同时，也顺便简要更新一下 GPT-5.6 Sol 的用量额度。\\n\\n过去几周，很多人告诉我们，Sol 消耗 Codex 额度的速度比预期更快。需要明确的是，我们并没有降低任何订阅套餐的用量。\\n\\n我们一直在深入排查问题所在，并已上线了多项改进。因此，我们预计在典型的 Sol 使用场景下，你的额度能用得久大约 18%。有些用户从今天起应该就能看到明显更大的改善。明天，我们还会恢复此前在调查期间暂时暂停的五小时额度限制。\\n\\n以下是我们发现的情况：\\n- GPT-5.6 Sol 更愿意长时间工作、发起更多工具调用，并在各种工具和子代理之间协调复杂工作流。这让它更擅长解决难题，但有些任务的消耗远远超出我们的预期。\\n- 在相同推理强度下，Sol 也比之前的模型更卖力。Sol 上的 High 可能比 GPT-5.5 上的 High 消耗更多 token。\\n- 程序化工具调用（也称为 code mode）让 Sol 能够更灵活地并行运行工具调用，或在等待时继续工作。但这也导致每轮回复更多、缓存输入 token 更多，用量高于预期。\\n- 当 Sol 在等待工具调用完成，或运行大量网络搜索时，这一点尤其明显。我们已经改进了这两种情况的处理方式，并会继续让 code mode 更高效。\\n- 影响也非常不均衡。中位数用户其实觉得 Sol 相当省 token，而一些处理更难任务的深度用户则看到额度消耗快得多。上线前我们非常关注平均和中位用量，忽略了一些长尾用户可能消耗明显更多额度的情况。\\n\\nSol 是 Codex 能力上的一大进步，但能力和效率并不总是同步提升，有些问题只有在人们以真实规模使用模型后才会显现。我们应该更早意识到这一点，也应该更坦诚地说明。\\n\\n你们继续推进前沿，我们就会继续提升效率并随时分享进展。",
              "originalText": "Hello people of Sol! I've reset usage limits for all ChatGPT Work and Codex users. Together with that, a quick update on GPT-5.6 Sol usage limits.\\n\\nOver the past few weeks, many of you have told us that Sol was using your Codex limits faster than expected. To be clear, we have not reduced usage on any subscription plans.\\n\\nWe’ve been digging into what was happening and have landed several improvements. As a result, we expect your usage to last around 18% longer during typical use of Sol. Some of you should already see significantly larger improvements from today. Tomorrow, we’ll also restore the five-hour limit that we temporarily paused while investigating.\\n\\nHere’s what we found:\\n- GPT-5.6 Sol is much more willing to work for longer, make additional tool calls, and coordinate complex workflows across tools and subagents. That makes it better at solving hard problems, but some tasks were using far more than we intended.\\n- Sol also works harder at the same reasoning effort than previous models. High on Sol can use more tokens than High did on GPT-5.5.\\n- Programmatic tool calling, also referred to as code mode, gives Sol much more flexibility to run tool calls in parallel or continue working while waiting. But it also led to more responses per turn, more cached input tokens, and higher usage than expected.\\n- This was particularly noticeable when Sol was waiting for tool calls to finish or running many web searches. We’ve improved how we handle both cases and are continuing to make code mode more efficient.\\n- The impact was also very uneven. The median user actually found Sol quite token efficient, while some power users working on harder tasks saw their usage drain much faster. We were very focused on average and median usage before launch and missed some cases where the long tail could use significantly more usage.\\n\\nSol is a significant step forward in what Codex can do, but capability and efficiency do not always improve at the same pace, and some issues only become clear once people are using the model at real-world scale. We should have recognized this sooner and been more upfront about it.\\n\\nYou keep pushing the frontier and we’ll keep improving efficiency and sharing updates as we go.",
              "url": "https://x.com/i/status/2082317452755751098"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2082340992871760182"
        },
        {
          "id": "2082317452755751098",
          "publishedAt": "2026-07-29T12:09:02.000+08:00",
          "stage": "确认完成",
          "text": "我已经为所有 ChatGPT Work 和 Codex 用户重置了用量额度。",
          "originalText": "I've reset usage limits for all ChatGPT Work and Codex users.",
          "fullText": "Sol 的用户们，大家好！我已经为所有 ChatGPT Work 和 Codex 用户重置了用量额度。同时，也顺便简要更新一下 GPT-5.6 Sol 的用量额度。\\n\\n过去几周，很多人告诉我们，Sol 消耗 Codex 额度的速度比预期更快。需要明确的是，我们并没有降低任何订阅套餐的用量。\\n\\n我们一直在深入排查问题所在，并已上线了多项改进。因此，我们预计在典型的 Sol 使用场景下，你的额度能用得久大约 18%。有些用户从今天起应该就能看到明显更大的改善。明天，我们还会恢复此前在调查期间暂时暂停的五小时额度限制。\\n\\n以下是我们发现的情况：\\n- GPT-5.6 Sol 更愿意长时间工作、发起更多工具调用，并在各种工具和子代理之间协调复杂工作流。这让它更擅长解决难题，但有些任务的消耗远远超出我们的预期。\\n- 在相同推理强度下，Sol 也比之前的模型更卖力。Sol 上的 High 可能比 GPT-5.5 上的 High 消耗更多 token。\\n- 程序化工具调用（也称为 code mode）让 Sol 能够更灵活地并行运行工具调用，或在等待时继续工作。但这也导致每轮回复更多、缓存输入 token 更多，用量高于预期。\\n- 当 Sol 在等待工具调用完成，或运行大量网络搜索时，这一点尤其明显。我们已经改进了这两种情况的处理方式，并会继续让 code mode 更高效。\\n- 影响也非常不均衡。中位数用户其实觉得 Sol 相当省 token，而一些处理更难任务的深度用户则看到额度消耗快得多。上线前我们非常关注平均和中位用量，忽略了一些长尾用户可能消耗明显更多额度的情况。\\n\\nSol 是 Codex 能力上的一大进步，但能力和效率并不总是同步提升，有些问题只有在人们以真实规模使用模型后才会显现。我们应该更早意识到这一点，也应该更坦诚地说明。\\n\\n你们继续推进前沿，我们就会继续提升效率并随时分享进展。",
          "fullOriginalText": "Hello people of Sol! I've reset usage limits for all ChatGPT Work and Codex users. Together with that, a quick update on GPT-5.6 Sol usage limits.\\n\\nOver the past few weeks, many of you have told us that Sol was using your Codex limits faster than expected. To be clear, we have not reduced usage on any subscription plans.\\n\\nWe’ve been digging into what was happening and have landed several improvements. As a result, we expect your usage to last around 18% longer during typical use of Sol. Some of you should already see significantly larger improvements from today. Tomorrow, we’ll also restore the five-hour limit that we temporarily paused while investigating.\\n\\nHere’s what we found:\\n- GPT-5.6 Sol is much more willing to work for longer, make additional tool calls, and coordinate complex workflows across tools and subagents. That makes it better at solving hard problems, but some tasks were using far more than we intended.\\n- Sol also works harder at the same reasoning effort than previous models. High on Sol can use more tokens than High did on GPT-5.5.\\n- Programmatic tool calling, also referred to as code mode, gives Sol much more flexibility to run tool calls in parallel or continue working while waiting. But it also led to more responses per turn, more cached input tokens, and higher usage than expected.\\n- This was particularly noticeable when Sol was waiting for tool calls to finish or running many web searches. We’ve improved how we handle both cases and are continuing to make code mode more efficient.\\n- The impact was also very uneven. The median user actually found Sol quite token efficient, while some power users working on harder tasks saw their usage drain much faster. We were very focused on average and median usage before launch and missed some cases where the long tail could use significantly more usage.\\n\\nSol is a significant step forward in what Codex can do, but capability and efficiency do not always improve at the same pace, and some issues only become clear once people are using the model at real-world scale. We should have recognized this sooner and been more upfront about it.\\n\\nYou keep pushing the frontier and we’ll keep improving efficiency and sharing updates as we go.",
          "context": [],
          "url": "https://x.com/thsottiaux/status/2082317452755751098"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "reset-2081940052154933696-1-1",
      "type": "direct_reset",
      "label": "全员重置",
      "displayLabel": "额度重置",
      "presentation": {
        "status": "confirmed",
        "scopeKnown": true,
        "scopeLabel": "所有付费用户",
        "kindExplicit": true,
        "timeInferred": false,
        "audienceZh": "所有付费用户",
        "productsZh": "Codex、ChatGPT Work"
      },
      "estimate": null,
      "status": "confirmed",
      "title": "Codex 额度重置已完成",
      "scope": "所有付费订阅",
      "createdAt": "2026-07-28T11:09:23.000+08:00",
      "updatedAt": "2026-07-28T11:09:23.000+08:00",
      "confirmedAt": "2026-07-28T11:09:23.000+08:00",
      "occurredOn": null,
      "confirmationBasis": "source_post",
      "schedule": null,
      "posts": [
        {
          "id": "2081940052154933696",
          "publishedAt": "2026-07-28T11:09:23.000+08:00",
          "stage": "确认完成",
          "text": "所有 Codex 和 ChatGPT Work 付费用户的用量额度已重置。",
          "originalText": "The usage limits have been reset for all paid users of Codex and ChatGPT Work.",
          "fullText": "回到电脑前了。所有 Codex 和 ChatGPT Work 付费用户的用量额度已重置。呜呼呼呼呼呼呼呼！今天是个好日子！",
          "fullOriginalText": "Back at the laptop. The usage limits have been reset for all paid users of Codex and ChatGPT Work. Weeeeeeeee. It's a good day!",
          "context": [
            {
              "id": "2081899343091843463",
              "author": "thsottiaux",
              "relation": "quote",
              "text": null,
              "originalText": "We’re celebrating the fast adoption of chatGPT Work and all the incredible effort that went into it today. I’m feeling like a limit reset.\\n\\nHold on tight to your ultra and /fast and see you in a few hours when I’m back at the laptop!",
              "url": "https://x.com/i/status/2081899343091843463"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2081940052154933696"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "reset-2081096447718723984-1-1",
      "type": "direct_reset",
      "label": "全员重置",
      "displayLabel": "额度重置",
      "presentation": {
        "status": "confirmed",
        "scopeKnown": true,
        "scopeLabel": "all Codex and ChatGPT Work users",
        "kindExplicit": true,
        "timeInferred": false,
        "audienceZh": "所有用户",
        "productsZh": "Codex、ChatGPT Work"
      },
      "estimate": null,
      "status": "confirmed",
      "title": "Codex 额度重置已完成",
      "scope": "",
      "createdAt": "2026-07-26T03:17:12.000+08:00",
      "updatedAt": "2026-07-26T03:17:12.000+08:00",
      "confirmedAt": "2026-07-26T03:17:12.000+08:00",
      "occurredOn": null,
      "confirmationBasis": "source_post",
      "schedule": null,
      "posts": [
        {
          "id": "2081096447718723984",
          "publishedAt": "2026-07-26T03:17:12.000+08:00",
          "stage": "确认完成",
          "text": "我们已为所有 Codex 和 ChatGPT Work 用户重置了用量额度。",
          "originalText": "We have reset usage limits for all Codex and ChatGPT Work users.",
          "fullText": "我们已为所有 Codex 和 ChatGPT Work 用户重置了用量额度。\\n\\n昨晚大约凌晨 2 点到 4 点，我们遭遇了一次几乎波及全球的故障。现在一切安好、已经恢复，但你知道接下来是什么。\\n\\n我们学习。我们重置。尽情享用。",
          "fullOriginalText": "We have reset usage limits for all Codex and ChatGPT Work users.\\n\\nLast night around 2am to 4am we suffered an almost global outage. All well and recovered, but you know what comes next.\\n\\nWe learn. We reset. Enjoy.",
          "context": [
            {
              "id": "2080956723297198218",
              "author": "blueemi99",
              "relation": "quote",
              "text": null,
              "originalText": "Hey does this mean a reset?? A banked one too maybe? https://t.co/v2lPCH53rw",
              "url": "https://x.com/i/status/2080956723297198218"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2081096447718723984"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "reset-2079609157934886975-1-1",
      "type": "direct_reset",
      "label": "全员重置",
      "displayLabel": "额度重置",
      "presentation": {
        "status": "likely_completed",
        "scopeKnown": true,
        "scopeLabel": "paid users",
        "kindExplicit": true,
        "timeInferred": false,
        "audienceZh": "所有付费用户",
        "productsZh": "Codex、ChatGPT Work"
      },
      "estimate": {
        "from": "2026-07-22T01:30:00.000+08:00",
        "through": "2026-07-22T17:00:00.000+08:00",
        "basis": "model",
        "label": "北京时间 7月22日 01:30–17:00",
        "reason": "模型推算：帖子称一小时内到账，但历史记录中“in the next hour”类重置常延迟数小时至半天，故留出更宽窗口。"
      },
      "status": "announced",
      "title": "额度应已重置",
      "scope": "",
      "createdAt": "2026-07-22T00:47:15.000+08:00",
      "updatedAt": "2026-07-22T00:47:15.000+08:00",
      "confirmedAt": null,
      "occurredOn": null,
      "confirmationBasis": null,
      "schedule": {
        "precision": "deadline",
        "from": "2026-07-22T01:47:15.000+08:00",
        "through": "2026-07-22T01:47:15.000+08:00",
        "label": "北京时间预计 7月22日 01:47 前"
      },
      "posts": [
        {
          "id": "2079609157934886975",
          "publishedAt": "2026-07-22T00:47:15.000+08:00",
          "stage": "预告",
          "text": "新的一天，为 Codex 和 ChatGPT Work 的付费用户再次重置用量。将在接下来一小时内到账。",
          "originalText": "New day, new usage reset for paid users of Codex and ChatGPT Work. Lands in the next hour.",
          "fullText": "1000万！\\n\\n新的一天，为 Codex 和 ChatGPT Work 的付费用户再次重置用量。将在接下来一小时内到账。尽情享用。https://t.co/VUJ4S3vKDG",
          "fullOriginalText": "10M! \\n\\nNew day, new usage reset for paid users of Codex and ChatGPT Work. Lands in the next hour. Enjoy. https://t.co/VUJ4S3vKDG",
          "context": [],
          "url": "https://x.com/thsottiaux/status/2079609157934886975"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "reset-2078320950488297917-1-1",
      "type": "direct_reset",
      "label": "全员重置",
      "displayLabel": "额度重置",
      "presentation": {
        "status": "confirmed",
        "scopeKnown": true,
        "scopeLabel": "所有付费用户",
        "kindExplicit": true,
        "timeInferred": false,
        "audienceZh": "所有付费用户",
        "productsZh": "Codex、ChatGPT Work"
      },
      "estimate": null,
      "status": "confirmed",
      "title": "Codex 额度重置已完成",
      "scope": "所有付费订阅",
      "createdAt": "2026-07-18T11:28:22.000+08:00",
      "updatedAt": "2026-07-18T11:58:44.000+08:00",
      "confirmedAt": "2026-07-18T11:28:22.000+08:00",
      "occurredOn": null,
      "confirmationBasis": "source_post",
      "schedule": null,
      "posts": [
        {
          "id": "2078328592308818117",
          "publishedAt": "2026-07-18T11:58:44.000+08:00",
          "stage": "确认完成",
          "text": "而现在 100%",
          "originalText": "And now 100%",
          "fullText": "而现在 100%",
          "fullOriginalText": "@shlummi And now 100%",
          "context": [
            {
              "id": "2078328000278605953",
              "author": "shlummi",
              "relation": "reply",
              "text": null,
              "originalText": "FUCK I WAS AT 90%",
              "url": "https://x.com/i/status/2078328000278605953"
            },
            {
              "id": "2078320950488297917",
              "author": "thsottiaux",
              "relation": "quote",
              "text": "哎呀……我又来了一次。\\n\\n为所有付费用户的 Codex 和 ChatGPT Work 重置用量额度，尽情享受吧。非常感谢一支了不起的团队，他们以光速迭代，并在我们以史无前例的速度扩张时始终让基础设施保持在线。\\n\\n周末愉快！https://t.co/WIuS07doKA",
              "originalText": "Oops... I did it again. \\n\\nEnjoy reset usage limits for all paid users for Codex and ChatGPT Work. Super grateful for an incredible team who is iterating at lightspeed and keeping the infra up as we scale faster than ever.\\n\\nEnjoy the weekend! https://t.co/WIuS07doKA",
              "url": "https://x.com/i/status/2078320950488297917"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2078328592308818117"
        },
        {
          "id": "2078327646170337398",
          "publishedAt": "2026-07-18T11:54:58.000+08:00",
          "stage": "补充说明",
          "text": "确认了。",
          "originalText": "Confirmed",
          "fullText": "确认了。",
          "fullOriginalText": "@madewithv Confirmed",
          "context": [
            {
              "id": "2078311244323516768",
              "author": "madewithv",
              "relation": "reply",
              "text": null,
              "originalText": "@thsottiaux how about today's reset? it's confirmed, right?",
              "url": "https://x.com/i/status/2078311244323516768"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2078327646170337398"
        },
        {
          "id": "2078320950488297917",
          "publishedAt": "2026-07-18T11:28:22.000+08:00",
          "stage": "确认完成",
          "text": "为所有付费用户的 Codex 和 ChatGPT Work 重置用量额度，尽情享受吧。",
          "originalText": "Enjoy reset usage limits for all paid users for Codex and ChatGPT Work.",
          "fullText": "哎呀……我又来了一次。\\n\\n为所有付费用户的 Codex 和 ChatGPT Work 重置用量额度，尽情享受吧。非常感谢一支了不起的团队，他们以光速迭代，并在我们以史无前例的速度扩张时始终让基础设施保持在线。\\n\\n周末愉快！https://t.co/WIuS07doKA",
          "fullOriginalText": "Oops... I did it again. \\n\\nEnjoy reset usage limits for all paid users for Codex and ChatGPT Work. Super grateful for an incredible team who is iterating at lightspeed and keeping the infra up as we scale faster than ever.\\n\\nEnjoy the weekend! https://t.co/WIuS07doKA",
          "context": [
            {
              "id": "2078310751878647932",
              "author": "thsottiaux",
              "relation": "quote",
              "text": null,
              "originalText": "GPT-5.6 Sol confirmed to be an extremely good model",
              "url": "https://x.com/i/status/2078310751878647932"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2078320950488297917"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "reset-2077607697487188198-1-1",
      "type": "direct_reset",
      "label": "全员重置",
      "displayLabel": "重置（形式未明确）",
      "presentation": {
        "status": "likely_completed",
        "scopeKnown": false,
        "scopeLabel": null,
        "kindExplicit": false,
        "timeInferred": true,
        "audienceZh": null,
        "productsZh": "Codex、ChatGPT Work"
      },
      "estimate": {
        "from": "2026-07-16T12:20:00.000+08:00",
        "through": "2026-07-16T15:30:00.000+08:00",
        "basis": "model",
        "label": "北京时间 7月16日 12:20–15:30",
        "reason": "模型推算：帖子称“几分钟内”恢复 100% 每周额度，参考历史重置实际到账常比所说时间晚数小时，估计当晚深夜前后到账。"
      },
      "status": "announced",
      "title": "额度应已重置",
      "scope": "",
      "createdAt": "2026-07-16T12:14:09.000+08:00",
      "updatedAt": "2026-07-16T12:14:09.000+08:00",
      "confirmedAt": null,
      "occurredOn": null,
      "confirmationBasis": null,
      "schedule": {
        "precision": "approximate",
        "from": "2026-07-16T12:17:09.000+08:00",
        "through": "2026-07-16T12:17:09.000+08:00",
        "label": "北京时间约 7月16日 12:17"
      },
      "posts": [
        {
          "id": "2077607697487188198",
          "publishedAt": "2026-07-16T12:14:09.000+08:00",
          "stage": "预告",
          "text": "又给我们的 Codex 和 ChatGPT Work 用户来了一次重置……几分钟后你们应该就能拿回那甜美的 100% 每周用量额度了。",
          "originalText": "Another reset for our Codex and ChatGPT Work users.",
          "fullText": "又给我们的 Codex 和 ChatGPT Work 用户来了一次重置。其实今天早些时候就早早达到了 900 万活跃用户，但随后就被团队为了保持系统稳定可靠所做的那大概几百万件事给分心了。\\n\\n几分钟后你们应该就能拿回那甜美的 100% 每周用量额度了。去做你那高效的自己吧，把 Twitter 关了。嘘——快走！",
          "fullOriginalText": "Another reset for our Codex and ChatGPT Work users. Actually hit 9M active users way earlier today, but then got distracted by the approximately millions of things the team is doing to keep the systems up and reliable.\\n\\nShould have that sweet 100% weekly usage limit back in a few minutes. Go be your productive self and close twitter. Shoo!",
          "context": [],
          "url": "https://x.com/thsottiaux/status/2077607697487188198"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "reset-2077114635308986427-1-1",
      "type": "direct_reset",
      "label": "全员重置",
      "displayLabel": "额度重置",
      "presentation": {
        "reportedAt": "2026-07-15T03:34:54.000+08:00",
        "status": "likely_completed",
        "scopeKnown": true,
        "scopeLabel": "all",
        "kindExplicit": true,
        "timeInferred": false,
        "audienceZh": "“all”",
        "productsZh": "Codex、ChatGPT Work"
      },
      "estimate": {
        "from": "2026-07-15T03:35:00.000+08:00",
        "through": "2026-07-15T09:35:00.000+08:00",
        "basis": "model",
        "label": "北京时间 7月15日 03:35–09:35",
        "reason": "模型推算：帖子称正在重置、未给出时间，按 Tibo 以往重置通常在宣布后数小时内到账，故给出约 6 小时窗口。"
      },
      "status": "announced",
      "title": "额度应已重置",
      "scope": "",
      "createdAt": "2026-07-15T03:34:54.000+08:00",
      "updatedAt": "2026-07-15T03:34:54.000+08:00",
      "confirmedAt": null,
      "occurredOn": null,
      "confirmationBasis": null,
      "schedule": null,
      "posts": [
        {
          "id": "2077114635308986427",
          "publishedAt": "2026-07-15T03:34:54.000+08:00",
          "stage": "预告",
          "text": "我们再次为所有人重置用量额度。",
          "originalText": "We are once again resetting the usage limits for all.",
          "fullText": "大家好。我们在 Codex 和 ChatGPT Work 上的活跃用户已达到 800 万。\\n\\n我们再次为所有人重置用量额度。而且我们依然没有 5 小时频率限制，让每个人都能探索 GPT-5.6 Sol 的边界，看看你能有多大胆。\\n\\n明天见，届时会有更多关于我们增长的消息！",
          "fullOriginalText": "Hello. We have reached 8M active users across Codex and ChatGPT Work.\\n\\nWe are once again resetting the usage limits for all. And we continue to not have the 5h rate limit as well, allowing everyone to explore the boundaries of GPT-5.6 Sol and discover how ambitious you can be.\\n\\nSee you tomorrow for more updates on our growth!",
          "context": [
            {
              "id": "2077106587307798989",
              "author": "sama",
              "relation": "quote",
              "text": null,
              "originalText": "5.6 sol growth is insane.\\n\\nthe inference team has done heroic work to be able to support demand.\\n\\nwe are going to move mountains to continue to scale, but it is possible there are some hiccups soon.",
              "url": "https://x.com/i/status/2077106587307798989"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2077114635308986427"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "banked-2076418567143408112-2-1",
      "type": "reset_credit",
      "label": "发重置卡",
      "displayLabel": "重置卡发放",
      "presentation": {
        "status": "confirmed",
        "scopeKnown": true,
        "scopeLabel": "everyone's account",
        "kindExplicit": true,
        "timeInferred": true,
        "audienceZh": "所有用户",
        "productsZh": "Codex、ChatGPT Work"
      },
      "estimate": null,
      "status": "confirmed",
      "title": "重置卡已发放",
      "scope": "",
      "createdAt": "2026-07-13T05:28:59.000+08:00",
      "updatedAt": "2026-07-14T02:29:31.000+08:00",
      "confirmedAt": "2026-07-14T02:29:31.000+08:00",
      "occurredOn": null,
      "confirmationBasis": "source_post",
      "schedule": {
        "precision": "date",
        "from": "2026-07-13T15:00:00.000+08:00",
        "through": "2026-07-14T15:00:00.000+08:00",
        "label": "北京时间预计 7月13日 15:00–7月14日 15:00"
      },
      "posts": [
        {
          "id": "2076735790567338203",
          "publishedAt": "2026-07-14T02:29:31.000+08:00",
          "stage": "确认发卡",
          "text": "为庆祝这一里程碑，我们已为每个人的账号添加了一张重置卡。",
          "originalText": "We have added a banked reset to everyone's account to celebrate the milestone.",
          "fullText": "感谢现在正在使用 Codex 和 ChatGPT Work 的 700 万活跃用户。\\n\\n为庆祝这一里程碑，我们已为每个人的账号添加了一张重置卡。你可以在桌面应用或网页端使用这张重置卡，它会为你补充本周用量。\\n\\n玩得开心。",
          "fullOriginalText": "Thank you to the 7M active users who are now using Codex and ChatGPT Work.\\n\\nWe have added a banked reset to everyone's account to celebrate the milestone. You can apply the reset in the desktop app or on web and it will replenish the weekly usage for you.\\n\\nHave fun out there.",
          "context": [],
          "url": "https://x.com/thsottiaux/status/2076735790567338203"
        },
        {
          "id": "2076418567143408112",
          "publishedAt": "2026-07-13T05:28:59.000+08:00",
          "stage": "发卡预告",
          "text": "明天我们将庆祝 700 万活跃用户里程碑，并为所有 ChatGPT Work 和 Codex 用户发放第一张重置卡。",
          "originalText": "Tomorrow we will celebrate our 7M active users milestone and grant the first banked reset across all of our ChatGPT Work and Codex users.",
          "fullText": "为 50 万 ChatGPT Work 和 Codex 用户添加了一张重置卡。\\n\\n最近发生的事情：\\n- 刚刚发布了从网页端和移动端使用重置卡的功能。在今天之前，你只能在桌面应用里这么做\\n- 出现了一个问题：不到 10% 使用了重置卡的用户实际上并没有被重置。这只发生在一个 2 小时的窗口内。\\n- 由于很难找出所有实际未被重置的确切用户，我们改为向那个 2 小时窗口内所有按下重置按钮的用户都发放了一张重置卡。这也让我们有机会在明天之前验证新的基础设施\\n\\n明天我们将庆祝 700 万活跃用户里程碑，并为所有 ChatGPT Work 和 Codex 用户发放第一张重置卡。\\n\\n我们还会发布一大堆桌面应用更新，解决你们反馈的大量问题。\\n\\n回头聊",
          "fullOriginalText": "Added a banked reset to 500k users of ChatGPT Work and Codex.\\n\\nWhat’s been happening:\\n- Just released the ability to use a banked reset from web and mobile. Before today you could only do it in the desktop app\\n- Had an issue where less than 10% of users who used a banked reset and it didn’t actually reset. This was during a 2 hour window.\\n- It was hard to find all the exact users where it didn’t apply, so instead granted a banked reset to everyone who pressed the reset button in that 2 hour window. This also gives us the opportunity to validate the new infra ahead of tomorrow\\n\\nTomorrow we will celebrate our 7M active users milestone and grant the first banked reset across all of our ChatGPT Work and Codex users.\\n\\nWe will also release a bunch of updates to the desktop app, addressing a ton of your feedback.\\n\\nTalk soon",
          "context": [],
          "url": "https://x.com/thsottiaux/status/2076418567143408112"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "banked-2076418567143408112-1-1",
      "type": "reset_credit",
      "label": "发重置卡",
      "displayLabel": "重置卡发放",
      "presentation": {
        "status": "confirmed",
        "scopeKnown": true,
        "scopeLabel": "500k users",
        "kindExplicit": true,
        "timeInferred": false,
        "audienceZh": "“500k users”",
        "productsZh": "Codex、ChatGPT Work"
      },
      "estimate": null,
      "status": "confirmed",
      "title": "重置卡已发放",
      "scope": "",
      "createdAt": "2026-07-13T05:28:59.000+08:00",
      "updatedAt": "2026-07-13T05:28:59.000+08:00",
      "confirmedAt": "2026-07-13T05:28:59.000+08:00",
      "occurredOn": null,
      "confirmationBasis": "source_post",
      "schedule": null,
      "posts": [
        {
          "id": "2076418567143408112",
          "publishedAt": "2026-07-13T05:28:59.000+08:00",
          "stage": "确认发卡",
          "text": "为 50 万 ChatGPT Work 和 Codex 用户添加了一张重置卡。",
          "originalText": "Added a banked reset to 500k users of ChatGPT Work and Codex.",
          "fullText": "为 50 万 ChatGPT Work 和 Codex 用户添加了一张重置卡。\\n\\n最近发生的事情：\\n- 刚刚发布了从网页端和移动端使用重置卡的功能。在今天之前，你只能在桌面应用里这么做\\n- 出现了一个问题：不到 10% 使用了重置卡的用户实际上并没有被重置。这只发生在一个 2 小时的窗口内。\\n- 由于很难找出所有实际未被重置的确切用户，我们改为向那个 2 小时窗口内所有按下重置按钮的用户都发放了一张重置卡。这也让我们有机会在明天之前验证新的基础设施\\n\\n明天我们将庆祝 700 万活跃用户里程碑，并为所有 ChatGPT Work 和 Codex 用户发放第一张重置卡。\\n\\n我们还会发布一大堆桌面应用更新，解决你们反馈的大量问题。\\n\\n回头聊",
          "fullOriginalText": "Added a banked reset to 500k users of ChatGPT Work and Codex.\\n\\nWhat’s been happening:\\n- Just released the ability to use a banked reset from web and mobile. Before today you could only do it in the desktop app\\n- Had an issue where less than 10% of users who used a banked reset and it didn’t actually reset. This was during a 2 hour window.\\n- It was hard to find all the exact users where it didn’t apply, so instead granted a banked reset to everyone who pressed the reset button in that 2 hour window. This also gives us the opportunity to validate the new infra ahead of tomorrow\\n\\nTomorrow we will celebrate our 7M active users milestone and grant the first banked reset across all of our ChatGPT Work and Codex users.\\n\\nWe will also release a bunch of updates to the desktop app, addressing a ton of your feedback.\\n\\nTalk soon",
          "context": [],
          "url": "https://x.com/thsottiaux/status/2076418567143408112"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "reset-2076365965915467978-1-1",
      "type": "direct_reset",
      "label": "全员重置",
      "displayLabel": "额度重置",
      "presentation": {
        "status": "likely_completed",
        "scopeKnown": false,
        "scopeLabel": null,
        "kindExplicit": true,
        "timeInferred": false,
        "audienceZh": null,
        "productsZh": null
      },
      "estimate": {
        "from": "2026-07-13T02:30:00.000+08:00",
        "through": "2026-07-13T09:00:00.000+08:00",
        "basis": "model",
        "label": "北京时间 7月13日 02:30–09:00",
        "reason": "模型推算：帖子称“in the next hour”，从发布时刻 10:59 起算；过往类似承诺（如 6/26“in the next few hours”）实际落地常晚数小时，故留出余量。"
      },
      "status": "announced",
      "title": "额度应已重置",
      "scope": "",
      "createdAt": "2026-07-13T01:59:57.000+08:00",
      "updatedAt": "2026-07-13T01:59:57.000+08:00",
      "confirmedAt": null,
      "occurredOn": null,
      "confirmationBasis": null,
      "schedule": {
        "precision": "deadline",
        "from": "2026-07-13T02:59:57.000+08:00",
        "through": "2026-07-13T02:59:57.000+08:00",
        "label": "北京时间预计 7月13日 02:59 前"
      },
      "posts": [
        {
          "id": "2076365965915467978",
          "publishedAt": "2026-07-13T01:59:57.000+08:00",
          "stage": "预告",
          "text": "我们达到了 600 万活跃用户，并将在接下来一小时内落地一次用量额度重置。",
          "originalText": "We hit 6M active users, and are landing a usage reset in the next hour",
          "fullText": "早上好。过去 48 小时里，Codex 和 ChatGPT Work 的进展非常密集！这里有三个重要更新：\\n\\n- 暂时取消所有 Plus、Business 和 Pro 套餐的 5 小时使用限制。\\n- 正在推出一些变更，将使 GPT 5.6 Sol 在整体上更高效，这将体现在使用量的减少上，从而让你能用得更久。具体影响将在量化后公布。\\n- 我们的活跃用户已达到 600 万，并将在接下来一小时内进行一次使用量重置。\\n\\n去创造吧。",
          "fullOriginalText": "Morning. The last 48 hours of Codex and ChatGPT Work have been intense! Three important updates:\\n\\n- Temporarily removing the 5 hour usage limit restriction for all Plus, Business and Pro plans\\n- Rolling out changes that will make GPT 5.6 Sol more efficient across the board and that will be reflected in less usage being used so that it can take you further. Exact impact to be quantified and shared\\n- We hit 6M active users, and are landing a usage reset in the next hour\\n\\nGo do things",
          "context": [],
          "url": "https://x.com/thsottiaux/status/2076365965915467978"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "reset-2075452680760443190-1-2",
      "type": "direct_reset",
      "label": "全员重置",
      "displayLabel": "额度重置",
      "presentation": {
        "status": "confirmed",
        "scopeKnown": true,
        "scopeLabel": "all our ChatGPT Work and Codex users",
        "kindExplicit": true,
        "timeInferred": false,
        "audienceZh": "“all our ChatGPT Work and Codex users”",
        "productsZh": "Codex、ChatGPT Work"
      },
      "estimate": null,
      "status": "confirmed",
      "title": "Codex 额度重置已完成",
      "scope": "",
      "createdAt": "2026-07-10T13:30:53.000+08:00",
      "updatedAt": "2026-07-11T22:51:08.000+08:00",
      "confirmedAt": "2026-07-11T22:51:08.000+08:00",
      "occurredOn": null,
      "confirmationBasis": "source_post",
      "schedule": {
        "precision": "deadline",
        "from": "2026-07-11T14:24:25.000+08:00",
        "through": "2026-07-11T14:24:25.000+08:00",
        "label": "北京时间预计 7月11日 14:24 前"
      },
      "posts": [
        {
          "id": "2075956058942820790",
          "publishedAt": "2026-07-11T22:51:08.000+08:00",
          "stage": "确认完成",
          "text": "我们自动应用了这些重置，原因有两个。",
          "originalText": "We applied the resets automatically",
          "fullText": "我们自动应用了这些重置，原因有两个。\\n\\n1. 目前无法在网页版或移动版 ChatGPT 上使用重置卡。我们将在下周推出这项功能，而且需要向我们所有新的 ChatGPT Work 用户做一点说明引导。\\n\\n2. 系统目前承受着很大的压力，而完全重置对基础设施负载的影响更具可预测性。这有助于我们在上线后的头 48 小时内保持稳定。\\n\\n等我们回到正常的运营节奏后，我们就会使用重置卡了！",
          "fullOriginalText": "We applied the resets automatically because of two reasons.\\n\\n1. It is not possible to use a banked reset from the web or mobile ChatGPT. We are launching it next week and it will require a bit of education for all our new ChatGPT Work users.\\n2. The system is under a lot of pressure and full resets are more predictable in how they affect load on the infrastructure. This helps us keeping things stable in the first 48 hours of the launch.\\n\\nAnd we will use banked resets once we are back in the normal operating cadence!",
          "context": [
            {
              "id": "2075845796365263075",
              "author": "RileyRalmuto",
              "relation": "reply",
              "text": null,
              "originalText": "hey @thsottiaux thanks for the resets, however I have a problem/question - who should I contact about my codex app automatically applying my usage resets without me selecting it/consenting? the one you just announced automatically applied…again…after the last one also auto applied while I still had 60%+ left on my existing weekly limit earlier today. I was only at literally I think 95% again when the second one applied itself 😑\\n\\nis this a bug from the app update? has anyone else reported this happening? and is there a way to provide my data in some way to prove I genuinely had hardly used any of my tokens when the resets applied themselves? I imagine y’all get people trying to scam you for tokens often. so. happy to offer whatever to show that is not happening here. lol. I just *really* hope I didn’t lose another free reset to a bug after carefully budgeting usage all day 😅\\n\\n<3",
              "url": "https://x.com/i/status/2075845796365263075"
            },
            {
              "id": "2075820987833274448",
              "author": "thsottiaux",
              "relation": "quote",
              "text": "隆重推出……又一次面向我们所有 ChatGPT Work 和 Codex 用户的用量额度重置。应该会在接下来 30 分钟内到账。祝你们周末愉快。\\n\\n感谢你们把我们的系统逼到了绝对极限，我们从未见过流量增长如此之快。继续把反馈发给我们，我们就会继续发布新东西。",
              "originalText": "Introducing... another usage limit reset for all our ChatGPT Work and Codex users. Should land over next 30 minutes. Hope you have an awesome weekend.\\n\\nThank you for pushing our systems to the absolute limit, we have never seen traffic increase so quickly. Keep the feedback coming and we'll keep shipping.",
              "url": "https://x.com/i/status/2075820987833274448"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2075956058942820790"
        },
        {
          "id": "2075820987833274448",
          "publishedAt": "2026-07-11T13:54:25.000+08:00",
          "stage": "预告",
          "text": "隆重推出……又一次面向我们所有 ChatGPT Work 和 Codex 用户的用量额度重置。应该会在接下来 30 分钟内到账。",
          "originalText": "Introducing... another usage limit reset for all our ChatGPT Work and Codex users. Should land over next 30 minutes.",
          "fullText": "隆重推出……又一次面向我们所有 ChatGPT Work 和 Codex 用户的用量额度重置。应该会在接下来 30 分钟内到账。祝你们周末愉快。\\n\\n感谢你们把我们的系统逼到了绝对极限，我们从未见过流量增长如此之快。继续把反馈发给我们，我们就会继续发布新东西。",
          "fullOriginalText": "Introducing... another usage limit reset for all our ChatGPT Work and Codex users. Should land over next 30 minutes. Hope you have an awesome weekend.\\n\\nThank you for pushing our systems to the absolute limit, we have never seen traffic increase so quickly. Keep the feedback coming and we'll keep shipping.",
          "context": [
            {
              "id": "2075641131002700120",
              "author": "thsottiaux",
              "relation": "quote",
              "text": "美丽的人们，大家好！我们已经重置了 Codex 和 ChatGPT Work 的用量额度。今天晚些时候还会再来一次。欢呼吧。\\n\\n既然我引起了大家的注意，来简单说说 ChatGPT Work、Codex 以及我们昨天分享的所有更新的最新情况。\\n\\n过去 24 小时里，我们一直在阅读反馈、研究使用情况，并与你们中的许多人交流。简单来说，大家对 GPT 5.6 Sol、移动端和网页端的 ChatGPT Work 感到*非常*兴奋，但我们也确实没有把所有事情都做对。\\n\\n- 我们让使用最高算力设置变得太容易了，却没有充分说清这对用量额度的影响。\\n- 我们大刀阔斧地重组了桌面应用，导致聊天和项目这些熟悉的功能变得更难找到。\\n- 我们发布时的定位聚焦于 ChatGPT Work，这让一些 Codex 粉丝感觉 Codex 会逐渐消失。这绝对不是我们的本意，我们热爱 Codex，它会一直存在。\\n- 此外，我们还给一些现有多智能体工作流带来了退化问题，插件和其他部分体验也存在一堆粗糙的地方。\\n\\n我们今天就会推出第一批改进。我们会重置用量两次，让大家能继续尝试；调整默认设置和模型选择器，不再把用户推向不必要的高开销设置；修复若干插件提交问题；改进我们在产品中呈现 Codex 的方式；并清理一些最紧迫的桌面问题。\\n\\n更大一批改进将于下周上线。我们会以更熟悉、可自定义的方式把聊天和项目带回侧边栏，让用量和重置时间更加醒目，明确什么时候该用 ChatGPT Work、什么时候该用 Codex，并处理我们收到的许多其他更零散但很好的反馈。\\n\\n这次发布背后的雄心没有改变。我们认为把 ChatGPT 和 Codex 整合到一个让人们和智能体可以协作的工作空间，是非常重要的一步。但一个宏大的方向并不能成为可以避免的混乱或首个版本退化的借口。\\n\\n请继续给我们反馈。我们动作很快，今天的一些更新后你应该就能看到体验变好；下周还会有大幅提升。",
              "originalText": "Hello beautiful people! We have reset usage limits across Codex and ChatGPT Work. And another one will come later in the day. Rejoice.\\n\\nNow that I have your attention, a quick update on ChatGPT Work, Codex and all the updates we shared yesterday.\\n\\nWe’ve spent the last 24 hours reading feedback, looking at usage patterns, and talking with many of you. The short version is that there is a *lot* of excitement for GPT 5.6 Sol, ChatGPT Work on mobile & web, but also that we didn't get everything quite right.\\n\\n- We made it too easy to use the highest-compute settings without making the impact on usage limits sufficiently clear.\\n- We reorganized the desktop app in one bold move, making familiar things like chats and projects harder to find.\\n- Our launch framing was focused on ChatGPT Work and to some of our Codex fans it made it feel like Codex was going away over time. Absolutely not our intention, we love Codex and it is here to stay.\\n- And we introduced regressions for some existing multi-agent workflows, alongside a collection of rough edges in plugins and other parts of the experience.\\n\\nWe’re landing a first set of improvements today. We’re resetting usage twice so people can keep experimenting, changing defaults and the model picker so they don’t push people toward unnecessarily expensive settings, fixing several plugin submission issues, improving how we represent Codex in the product, and cleaning up some of the most immediate desktop problems.\\n\\nA larger set of improvements will land next week. We’re bringing chats and projects back into the sidebar in a more familiar and customizable way, making usage and reset timing much more visible, clarifying when to use ChatGPT Work and when to use Codex, and addressing the many other smaller pieces of great feedback we've had.\\n\\nThe ambition behind this launch hasn’t changed. We think bringing ChatGPT and Codex together into a workspace where people and agents can collaborate is a very important step forward. But an ambitious direction doesn’t excuse avoidable confusion or regressions in the first version.\\n\\nPlease keep the feedback coming. We’re moving quickly, and you should see the experience already get better with a few updates today; and substantially better again next week.",
              "url": "https://x.com/i/status/2075641131002700120"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2075820987833274448"
        },
        {
          "id": "2075641131002700120",
          "publishedAt": "2026-07-11T01:59:43.000+08:00",
          "stage": "预告",
          "text": "今天晚些时候还会再来一次。",
          "originalText": "And another one will come later in the day.",
          "fullText": "美丽的人们，大家好！我们已经重置了 Codex 和 ChatGPT Work 的用量额度。今天晚些时候还会再来一次。欢呼吧。\\n\\n既然我引起了大家的注意，来简单说说 ChatGPT Work、Codex 以及我们昨天分享的所有更新的最新情况。\\n\\n过去 24 小时里，我们一直在阅读反馈、研究使用情况，并与你们中的许多人交流。简单来说，大家对 GPT 5.6 Sol、移动端和网页端的 ChatGPT Work 感到*非常*兴奋，但我们也确实没有把所有事情都做对。\\n\\n- 我们让使用最高算力设置变得太容易了，却没有充分说清这对用量额度的影响。\\n- 我们大刀阔斧地重组了桌面应用，导致聊天和项目这些熟悉的功能变得更难找到。\\n- 我们发布时的定位聚焦于 ChatGPT Work，这让一些 Codex 粉丝感觉 Codex 会逐渐消失。这绝对不是我们的本意，我们热爱 Codex，它会一直存在。\\n- 此外，我们还给一些现有多智能体工作流带来了退化问题，插件和其他部分体验也存在一堆粗糙的地方。\\n\\n我们今天就会推出第一批改进。我们会重置用量两次，让大家能继续尝试；调整默认设置和模型选择器，不再把用户推向不必要的高开销设置；修复若干插件提交问题；改进我们在产品中呈现 Codex 的方式；并清理一些最紧迫的桌面问题。\\n\\n更大一批改进将于下周上线。我们会以更熟悉、可自定义的方式把聊天和项目带回侧边栏，让用量和重置时间更加醒目，明确什么时候该用 ChatGPT Work、什么时候该用 Codex，并处理我们收到的许多其他更零散但很好的反馈。\\n\\n这次发布背后的雄心没有改变。我们认为把 ChatGPT 和 Codex 整合到一个让人们和智能体可以协作的工作空间，是非常重要的一步。但一个宏大的方向并不能成为可以避免的混乱或首个版本退化的借口。\\n\\n请继续给我们反馈。我们动作很快，今天的一些更新后你应该就能看到体验变好；下周还会有大幅提升。",
          "fullOriginalText": "Hello beautiful people! We have reset usage limits across Codex and ChatGPT Work. And another one will come later in the day. Rejoice.\\n\\nNow that I have your attention, a quick update on ChatGPT Work, Codex and all the updates we shared yesterday.\\n\\nWe’ve spent the last 24 hours reading feedback, looking at usage patterns, and talking with many of you. The short version is that there is a *lot* of excitement for GPT 5.6 Sol, ChatGPT Work on mobile & web, but also that we didn't get everything quite right.\\n\\n- We made it too easy to use the highest-compute settings without making the impact on usage limits sufficiently clear.\\n- We reorganized the desktop app in one bold move, making familiar things like chats and projects harder to find.\\n- Our launch framing was focused on ChatGPT Work and to some of our Codex fans it made it feel like Codex was going away over time. Absolutely not our intention, we love Codex and it is here to stay.\\n- And we introduced regressions for some existing multi-agent workflows, alongside a collection of rough edges in plugins and other parts of the experience.\\n\\nWe’re landing a first set of improvements today. We’re resetting usage twice so people can keep experimenting, changing defaults and the model picker so they don’t push people toward unnecessarily expensive settings, fixing several plugin submission issues, improving how we represent Codex in the product, and cleaning up some of the most immediate desktop problems.\\n\\nA larger set of improvements will land next week. We’re bringing chats and projects back into the sidebar in a more familiar and customizable way, making usage and reset timing much more visible, clarifying when to use ChatGPT Work and when to use Codex, and addressing the many other smaller pieces of great feedback we've had.\\n\\nThe ambition behind this launch hasn’t changed. We think bringing ChatGPT and Codex together into a workspace where people and agents can collaborate is a very important step forward. But an ambitious direction doesn’t excuse avoidable confusion or regressions in the first version.\\n\\nPlease keep the feedback coming. We’re moving quickly, and you should see the experience already get better with a few updates today; and substantially better again next week.",
          "context": [],
          "url": "https://x.com/thsottiaux/status/2075641131002700120"
        },
        {
          "id": "2075452680760443190",
          "publishedAt": "2026-07-10T13:30:53.000+08:00",
          "stage": "预告",
          "text": "我们将在未来 24 小时内再次重置 ChatGPT Work 和 Codex 的速率限制（两次）。",
          "originalText": "we will reset the rate limits again (twice) across ChatGPT Work and Codex over the next 24 hours.",
          "fullText": "为庆祝 GPT-5.6 Sol 的发布，我们将在未来 24 小时内再次重置 ChatGPT Work 和 Codex 的速率限制（两次）。\\n\\n我们希望你有时间真正去尝试那些有野心的任务，并把它玩熟。祝你探索愉快！",
          "fullOriginalText": "To celebrate the launch of GPT-5.6 Sol, we will reset the rate limits again (twice) across ChatGPT Work and Codex over the next 24 hours.\\n\\nWe want you to have the time to truly try ambitious tasks and get the hang of it. Happy exploring!",
          "context": [],
          "url": "https://x.com/thsottiaux/status/2075452680760443190"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "reset-2075452680760443190-1-1",
      "type": "direct_reset",
      "label": "全员重置",
      "displayLabel": "额度重置",
      "presentation": {
        "status": "confirmed",
        "scopeKnown": false,
        "scopeLabel": null,
        "kindExplicit": true,
        "timeInferred": false,
        "audienceZh": null,
        "productsZh": "Codex、ChatGPT Work"
      },
      "estimate": null,
      "status": "confirmed",
      "title": "Codex 额度重置已完成",
      "scope": "",
      "createdAt": "2026-07-10T13:30:53.000+08:00",
      "updatedAt": "2026-07-11T01:59:43.000+08:00",
      "confirmedAt": "2026-07-11T01:59:43.000+08:00",
      "occurredOn": null,
      "confirmationBasis": "source_post",
      "schedule": {
        "precision": "deadline",
        "from": "2026-07-11T13:30:53.000+08:00",
        "through": "2026-07-11T13:30:53.000+08:00",
        "label": "北京时间预计 7月11日 13:30 前"
      },
      "posts": [
        {
          "id": "2075641131002700120",
          "publishedAt": "2026-07-11T01:59:43.000+08:00",
          "stage": "确认完成",
          "text": "我们已经重置了 Codex 和 ChatGPT Work 的用量额度。",
          "originalText": "We have reset usage limits across Codex and ChatGPT Work.",
          "fullText": "美丽的人们，大家好！我们已经重置了 Codex 和 ChatGPT Work 的用量额度。今天晚些时候还会再来一次。欢呼吧。\\n\\n既然我引起了大家的注意，来简单说说 ChatGPT Work、Codex 以及我们昨天分享的所有更新的最新情况。\\n\\n过去 24 小时里，我们一直在阅读反馈、研究使用情况，并与你们中的许多人交流。简单来说，大家对 GPT 5.6 Sol、移动端和网页端的 ChatGPT Work 感到*非常*兴奋，但我们也确实没有把所有事情都做对。\\n\\n- 我们让使用最高算力设置变得太容易了，却没有充分说清这对用量额度的影响。\\n- 我们大刀阔斧地重组了桌面应用，导致聊天和项目这些熟悉的功能变得更难找到。\\n- 我们发布时的定位聚焦于 ChatGPT Work，这让一些 Codex 粉丝感觉 Codex 会逐渐消失。这绝对不是我们的本意，我们热爱 Codex，它会一直存在。\\n- 此外，我们还给一些现有多智能体工作流带来了退化问题，插件和其他部分体验也存在一堆粗糙的地方。\\n\\n我们今天就会推出第一批改进。我们会重置用量两次，让大家能继续尝试；调整默认设置和模型选择器，不再把用户推向不必要的高开销设置；修复若干插件提交问题；改进我们在产品中呈现 Codex 的方式；并清理一些最紧迫的桌面问题。\\n\\n更大一批改进将于下周上线。我们会以更熟悉、可自定义的方式把聊天和项目带回侧边栏，让用量和重置时间更加醒目，明确什么时候该用 ChatGPT Work、什么时候该用 Codex，并处理我们收到的许多其他更零散但很好的反馈。\\n\\n这次发布背后的雄心没有改变。我们认为把 ChatGPT 和 Codex 整合到一个让人们和智能体可以协作的工作空间，是非常重要的一步。但一个宏大的方向并不能成为可以避免的混乱或首个版本退化的借口。\\n\\n请继续给我们反馈。我们动作很快，今天的一些更新后你应该就能看到体验变好；下周还会有大幅提升。",
          "fullOriginalText": "Hello beautiful people! We have reset usage limits across Codex and ChatGPT Work. And another one will come later in the day. Rejoice.\\n\\nNow that I have your attention, a quick update on ChatGPT Work, Codex and all the updates we shared yesterday.\\n\\nWe’ve spent the last 24 hours reading feedback, looking at usage patterns, and talking with many of you. The short version is that there is a *lot* of excitement for GPT 5.6 Sol, ChatGPT Work on mobile & web, but also that we didn't get everything quite right.\\n\\n- We made it too easy to use the highest-compute settings without making the impact on usage limits sufficiently clear.\\n- We reorganized the desktop app in one bold move, making familiar things like chats and projects harder to find.\\n- Our launch framing was focused on ChatGPT Work and to some of our Codex fans it made it feel like Codex was going away over time. Absolutely not our intention, we love Codex and it is here to stay.\\n- And we introduced regressions for some existing multi-agent workflows, alongside a collection of rough edges in plugins and other parts of the experience.\\n\\nWe’re landing a first set of improvements today. We’re resetting usage twice so people can keep experimenting, changing defaults and the model picker so they don’t push people toward unnecessarily expensive settings, fixing several plugin submission issues, improving how we represent Codex in the product, and cleaning up some of the most immediate desktop problems.\\n\\nA larger set of improvements will land next week. We’re bringing chats and projects back into the sidebar in a more familiar and customizable way, making usage and reset timing much more visible, clarifying when to use ChatGPT Work and when to use Codex, and addressing the many other smaller pieces of great feedback we've had.\\n\\nThe ambition behind this launch hasn’t changed. We think bringing ChatGPT and Codex together into a workspace where people and agents can collaborate is a very important step forward. But an ambitious direction doesn’t excuse avoidable confusion or regressions in the first version.\\n\\nPlease keep the feedback coming. We’re moving quickly, and you should see the experience already get better with a few updates today; and substantially better again next week.",
          "context": [],
          "url": "https://x.com/thsottiaux/status/2075641131002700120"
        },
        {
          "id": "2075452680760443190",
          "publishedAt": "2026-07-10T13:30:53.000+08:00",
          "stage": "预告",
          "text": "我们将在未来 24 小时内再次重置 ChatGPT Work 和 Codex 的速率限制（两次）。",
          "originalText": "we will reset the rate limits again (twice) across ChatGPT Work and Codex over the next 24 hours.",
          "fullText": "为庆祝 GPT-5.6 Sol 的发布，我们将在未来 24 小时内再次重置 ChatGPT Work 和 Codex 的速率限制（两次）。\\n\\n我们希望你有时间真正去尝试那些有野心的任务，并把它玩熟。祝你探索愉快！",
          "fullOriginalText": "To celebrate the launch of GPT-5.6 Sol, we will reset the rate limits again (twice) across ChatGPT Work and Codex over the next 24 hours.\\n\\nWe want you to have the time to truly try ambitious tasks and get the hang of it. Happy exploring!",
          "context": [],
          "url": "https://x.com/thsottiaux/status/2075452680760443190"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "reset-2075296200761418073-1-1",
      "type": "direct_reset",
      "label": "全员重置",
      "displayLabel": "额度重置",
      "presentation": {
        "status": "likely_completed",
        "scopeKnown": false,
        "scopeLabel": null,
        "kindExplicit": true,
        "timeInferred": false,
        "audienceZh": null,
        "productsZh": "Codex、ChatGPT Work"
      },
      "estimate": {
        "from": "2026-07-10T05:24:11.000+08:00",
        "through": "2026-07-10T07:24:00.000+08:00",
        "basis": "model",
        "label": "北京时间 7月10日 05:24–07:24",
        "reason": "模型推算：帖文称将在接下来一小时内逐步生效，起始不早于发帖时间 14:24，并预留少量延迟缓冲。"
      },
      "status": "announced",
      "title": "额度应已重置",
      "scope": "",
      "createdAt": "2026-07-10T03:09:06.000+08:00",
      "updatedAt": "2026-07-10T05:24:11.000+08:00",
      "confirmedAt": null,
      "occurredOn": null,
      "confirmationBasis": null,
      "schedule": {
        "precision": "deadline",
        "from": "2026-07-10T06:24:11.000+08:00",
        "through": "2026-07-10T06:24:11.000+08:00",
        "label": "北京时间预计 7月10日 06:24 前"
      },
      "posts": [
        {
          "id": "2075330198887940337",
          "publishedAt": "2026-07-10T05:24:11.000+08:00",
          "stage": "预告",
          "text": "尽情享受 ChatGPT Work 和 Codex 用量额度的完整重置吧。正在接下来的一小时内逐步生效。",
          "originalText": "Enjoy a full reset of your usage limits for ChatGPT Work and Codex. Propagating in the next hour.",
          "fullText": "尽情享受 ChatGPT Work 和 Codex 用量额度的完整重置吧。正在接下来的一小时内逐步生效。\\n\\n@_rajanagarwal 刚刚加入，来做模型研究并推进编码能力。今天是他按下的按钮，你们可以谢谢他。https://t.co/vMMwKJibBI",
          "fullOriginalText": "Enjoy a full reset of your usage limits for ChatGPT Work and Codex. Propagating in the next hour.\\n\\n@_rajanagarwal just joined to work on model research and push on coding capabilities. You can thank him for pressing the button today. https://t.co/vMMwKJibBI",
          "context": [],
          "url": "https://x.com/thsottiaux/status/2075330198887940337"
        },
        {
          "id": "2075296200761418073",
          "publishedAt": "2026-07-10T03:09:06.000+08:00",
          "stage": "预告",
          "text": "今天下午会有一次重置。",
          "originalText": "Reset will be coming this afternoon",
          "fullText": "不用叫我宝贝。今天下午会有一次重置。",
          "fullOriginalText": "@sohamstwt No need to call me babe. Reset will be coming this afternoon",
          "context": [
            {
              "id": "2075294668250919108",
              "author": "sohamstwt",
              "relation": "reply",
              "text": null,
              "originalText": "all good babe, just give us a reset",
              "url": "https://x.com/i/status/2075294668250919108"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2075296200761418073"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "banked-2072608196993188002-1-1",
      "type": "reset_credit",
      "label": "发重置卡",
      "displayLabel": "重置卡发放",
      "presentation": {
        "status": "confirmed",
        "scopeKnown": true,
        "scopeLabel": "所有用户",
        "kindExplicit": true,
        "timeInferred": false,
        "audienceZh": "所有用户",
        "productsZh": "Codex"
      },
      "estimate": null,
      "status": "confirmed",
      "title": "重置卡已发放",
      "scope": "",
      "createdAt": "2026-07-02T17:07:56.000+08:00",
      "updatedAt": "2026-07-02T17:07:56.000+08:00",
      "confirmedAt": "2026-07-02T17:07:56.000+08:00",
      "occurredOn": null,
      "confirmationBasis": "source_post",
      "schedule": null,
      "posts": [
        {
          "id": "2072608196993188002",
          "publishedAt": "2026-07-02T17:07:56.000+08:00",
          "stage": "确认发卡",
          "text": "应该已经在你的小猪存钱罐里了。这是面向所有人的。",
          "originalText": "Should be in your little piggy bank. It is for everyone.",
          "fullText": "应该已经在你的小猪存钱罐里了。这是面向所有人的。如果它没显示在你的账户里，请告诉我，我们一定会去调查。",
          "fullOriginalText": "@LexnLin Should be in your little piggy bank. It is for everyone. Let me know if it doesn't show in your account and we'll definitely investigate.",
          "context": [
            {
              "id": "2072427754914521449",
              "author": "LexnLin",
              "relation": "reply",
              "text": null,
              "originalText": "guess it wasnt for everyone https://t.co/O9WETIMPqD",
              "url": "https://x.com/i/status/2072427754914521449"
            },
            {
              "id": "2072411121936486774",
              "author": "benedictk__",
              "relation": "quote",
              "text": null,
              "originalText": "Enjoy the codex reset people.\\n\\nA user got to push the secret button and suddenly all of you got more tokens.\\n\\nHope the button goes back to @thsottiaux where it belongs.\\n\\n(Also I think @sama has one) https://t.co/53mL4DzyO4",
              "url": "https://x.com/i/status/2072411121936486774"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2072608196993188002"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "reset-2071740419030053227-1-1",
      "type": "direct_reset",
      "label": "全员重置",
      "displayLabel": "额度重置",
      "presentation": {
        "status": "likely_completed",
        "scopeKnown": false,
        "scopeLabel": null,
        "kindExplicit": true,
        "timeInferred": false,
        "audienceZh": null,
        "productsZh": "Codex"
      },
      "estimate": {
        "from": "2026-06-30T08:00:00.000+08:00",
        "through": "2026-06-30T20:00:00.000+08:00",
        "basis": "model",
        "label": "北京时间 6月30日 08:00–20:00",
        "reason": "模型推算：帖子称一小时内完成重置，但历史记录显示从宣布到真正到账常延迟数小时，故把窗口放宽到次日凌晨。"
      },
      "status": "announced",
      "title": "额度应已重置",
      "scope": "",
      "createdAt": "2026-06-30T07:39:41.000+08:00",
      "updatedAt": "2026-06-30T07:39:41.000+08:00",
      "confirmedAt": null,
      "occurredOn": null,
      "confirmationBasis": null,
      "schedule": {
        "precision": "deadline",
        "from": "2026-06-30T08:39:41.000+08:00",
        "through": "2026-06-30T08:39:41.000+08:00",
        "label": "北京时间预计 6月30日 08:39 前"
      },
      "posts": [
        {
          "id": "2071740419030053227",
          "publishedAt": "2026-06-30T07:39:41.000+08:00",
          "stage": "预告",
          "text": "Codex 用量额度将在接下来一小时内再次完全重置。",
          "originalText": "Codex usage limits will be fully reset again in the next hour",
          "fullText": "Codex 用量额度将在接下来一小时内再次完全重置，我们还会在你的重置银行里额外存入一张重置卡，供你在接下来的 24 小时内自己使用。\\n\\n我们调查了有关 Codex 用量消耗快于预期的报告。并不存在某个单一的核心问题，而是几个较小的问题叠加影响了部分用户。\\n\\n以下是我们发现并做出的改动：\\n- 实际用量：Auto-review 变得过于主动，另一项改动触发了更多 subagent 工作，后台建议在失败后可能重复运行或重试过于频繁。我们回滚了这些改动，并修复了建议调度、重复生成和重试行为。这应能减少不必要的后台 token 消耗，同时保留用户明确请求的工作。\\n- 用量报告：Auto-review 被错误地显示为 GPT‑5.4 用量，失败或被限流的请求仍被显示为 turns。现在 Auto-review 会作为单独类别显示，只有成功的请求才计入 turn 图表。被限流的请求从未被计费，只是显示有误。\\n- 即时缓解：我们在推出修复的同时重置了用量额度，随后在 CLI、桌面应用和用量后端发布了热修复。\\n- 后续预期：新的用量数据应更清晰，实际消耗应更低。历史图表可能仍会把 auto-review 显示在 GPT‑5.4 下，因为旧的 turn 数据没有被重新标记。像 /goal、subagents 和更高推理等级这类本就会执行更多工作的功能，自然仍会占用更多容量。\\n\\n所有修复现已部署完成，我们还增加了更详细的监控，以便更早发现后台用量的回退问题。我们会继续密切关注结果。\\n\\n感谢大家用 Codex 构建和做各种各样的东西。",
          "fullOriginalText": "Codex usage limits will be fully reset again in the next hour and we will credit one additional reset into your bank for your own usage over the next 24 hours.\\n\\nWe investigated reports that Codex usage was being consumed faster than expected. There wasn't one central issue, but a few smaller problems compounded for some users.   \\n\\nHere's what we found and changed: \\n- Actual usage: Auto-review had become more proactive, another change was triggering more subagent work, and background suggestions could run twice or retry too frequently after failures. We reverted the changes and fixed suggestion scheduling, duplicate generation, and retry behavior. This should reduce unnecessary background token consumption while preserving the work users explicitly request. \\n- Usage reporting: Auto-review was incorrectly appearing as GPT‑5.4 usage, and failed or rate-limited requests were still shown as turns. Auto-review now appears as its own category, and only successful requests count toward the turn graphs. Rate-limited requests were never charged, but they were being displayed incorrectly. \\n- Immediate relief: We reset usage limits while rolling out the fixes, then shipped hotfixes across the CLI, desktop app, and usage backend. \\n- What to expect: New usage data should be clearer and actual consumption should be lower. Historical charts may still show auto-review under GPT‑5.4 because older turn data was not relabeled. Features that intentionally perform more work; such as /goal, subagents, and higher reasoning levels will still naturally use more capacity.  \\n\\nAll fixes are now deployed, and we've added more detailed monitoring so we can detect background-usage regressions sooner. We'll continue watching the results closely.\\n\\nThank you for building and doing all sorts of things with Codex.",
          "context": [
            {
              "id": "2071357473659707441",
              "author": "thsottiaux",
              "relation": "quote",
              "text": null,
              "originalText": "Codex team is in a warroom on a Sunday combing through logs and checking whether there is anything that could lead to increased usage drains for some users. Taking it very seriously and won't rest until we get to the bottom of it.",
              "url": "https://x.com/i/status/2071357473659707441"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2071740419030053227"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "banked-2071383430634344902-1-1",
      "type": "reset_credit",
      "label": "发重置卡",
      "displayLabel": "重置卡发放",
      "presentation": {
        "status": "likely_completed",
        "scopeKnown": true,
        "scopeLabel": "you happened to have used your previous reset in the few hours before and didn't go through your usage",
        "kindExplicit": true,
        "timeInferred": false,
        "audienceZh": "Go 用户",
        "productsZh": "Codex"
      },
      "estimate": {
        "from": "2026-06-30T08:00:00.000+08:00",
        "through": "2026-06-30T20:00:00.000+08:00",
        "basis": "model",
        "label": "北京时间 6月30日 08:00–20:00",
        "reason": "模型推算：该重置卡在此前调查期间已被承诺，本次随重置一并发放，故预估与本次重置同一落地窗口。"
      },
      "status": "announced",
      "title": "重置卡应已发放",
      "scope": "",
      "createdAt": "2026-06-29T08:01:08.000+08:00",
      "updatedAt": "2026-06-30T07:39:41.000+08:00",
      "confirmedAt": null,
      "occurredOn": null,
      "confirmationBasis": null,
      "schedule": null,
      "posts": [
        {
          "id": "2071740419030053227",
          "publishedAt": "2026-06-30T07:39:41.000+08:00",
          "stage": "发卡预告",
          "text": "我们还会在你的重置银行里额外存入一张重置卡，供你在接下来的 24 小时内自己使用。",
          "originalText": "we will credit one additional reset into your bank for your own usage over the next 24 hours",
          "fullText": "Codex 用量额度将在接下来一小时内再次完全重置，我们还会在你的重置银行里额外存入一张重置卡，供你在接下来的 24 小时内自己使用。\\n\\n我们调查了有关 Codex 用量消耗快于预期的报告。并不存在某个单一的核心问题，而是几个较小的问题叠加影响了部分用户。\\n\\n以下是我们发现并做出的改动：\\n- 实际用量：Auto-review 变得过于主动，另一项改动触发了更多 subagent 工作，后台建议在失败后可能重复运行或重试过于频繁。我们回滚了这些改动，并修复了建议调度、重复生成和重试行为。这应能减少不必要的后台 token 消耗，同时保留用户明确请求的工作。\\n- 用量报告：Auto-review 被错误地显示为 GPT‑5.4 用量，失败或被限流的请求仍被显示为 turns。现在 Auto-review 会作为单独类别显示，只有成功的请求才计入 turn 图表。被限流的请求从未被计费，只是显示有误。\\n- 即时缓解：我们在推出修复的同时重置了用量额度，随后在 CLI、桌面应用和用量后端发布了热修复。\\n- 后续预期：新的用量数据应更清晰，实际消耗应更低。历史图表可能仍会把 auto-review 显示在 GPT‑5.4 下，因为旧的 turn 数据没有被重新标记。像 /goal、subagents 和更高推理等级这类本就会执行更多工作的功能，自然仍会占用更多容量。\\n\\n所有修复现已部署完成，我们还增加了更详细的监控，以便更早发现后台用量的回退问题。我们会继续密切关注结果。\\n\\n感谢大家用 Codex 构建和做各种各样的东西。",
          "fullOriginalText": "Codex usage limits will be fully reset again in the next hour and we will credit one additional reset into your bank for your own usage over the next 24 hours.\\n\\nWe investigated reports that Codex usage was being consumed faster than expected. There wasn't one central issue, but a few smaller problems compounded for some users.   \\n\\nHere's what we found and changed: \\n- Actual usage: Auto-review had become more proactive, another change was triggering more subagent work, and background suggestions could run twice or retry too frequently after failures. We reverted the changes and fixed suggestion scheduling, duplicate generation, and retry behavior. This should reduce unnecessary background token consumption while preserving the work users explicitly request. \\n- Usage reporting: Auto-review was incorrectly appearing as GPT‑5.4 usage, and failed or rate-limited requests were still shown as turns. Auto-review now appears as its own category, and only successful requests count toward the turn graphs. Rate-limited requests were never charged, but they were being displayed incorrectly. \\n- Immediate relief: We reset usage limits while rolling out the fixes, then shipped hotfixes across the CLI, desktop app, and usage backend. \\n- What to expect: New usage data should be clearer and actual consumption should be lower. Historical charts may still show auto-review under GPT‑5.4 because older turn data was not relabeled. Features that intentionally perform more work; such as /goal, subagents, and higher reasoning levels will still naturally use more capacity.  \\n\\nAll fixes are now deployed, and we've added more detailed monitoring so we can detect background-usage regressions sooner. We'll continue watching the results closely.\\n\\nThank you for building and doing all sorts of things with Codex.",
          "context": [
            {
              "id": "2071357473659707441",
              "author": "thsottiaux",
              "relation": "quote",
              "text": null,
              "originalText": "Codex team is in a warroom on a Sunday combing through logs and checking whether there is anything that could lead to increased usage drains for some users. Taking it very seriously and won't rest until we get to the bottom of it.",
              "url": "https://x.com/i/status/2071357473659707441"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2071740419030053227"
        },
        {
          "id": "2071383430634344902",
          "publishedAt": "2026-06-29T08:01:08.000+08:00",
          "stage": "发卡预告",
          "text": "如果你恰好在几个小时前用掉了你之前的重置卡，而且并没有用完你的用量，不用担心：在我们结束调查后，你会获得更多手动重置。",
          "originalText": "you will get more manual resets after we conclude the investigation",
          "fullText": "如果你恰好在几个小时前用掉了你之前的重置卡，而且并没有用完你的用量，不用担心：在我们结束调查后，你会获得更多手动重置。",
          "fullOriginalText": "If you happened to have used your previous reset in the few hours before and didn't go through your usage, do not worry, you will get more manual resets after we conclude the investigation.",
          "context": [
            {
              "id": "2071381664853319742",
              "author": "thsottiaux",
              "relation": "reply",
              "text": "由于我们仍在调查中，我已经重置了所有人的 Codex 用量额度。这是一次硬重置，因为有些用户已经累积了多达三张重置卡，可以按自己的时间安排使用。\\n\\n说来有趣，本周在 OpenAI 被称为 RESET 周，本意是让大家放松一下。不过，这将会是另一种意义上的 RESET 周。好好享受吧。",
              "originalText": "As we are still investigating, I have reset everyone's Codex usage limits. This is a hard reset given some users had stacked up to three banked resets already that they can apply on their own schedule.\\n\\nFunnily enough, this week at OpenAI is called the RESET week, which is meant for folks to relax a bit. However it will be a different kind of RESET week. Enjoy.",
              "url": "https://x.com/i/status/2071381664853319742"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2071383430634344902"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "reset-2071381664853319742-1-1",
      "type": "direct_reset",
      "label": "全员重置",
      "displayLabel": "额度重置",
      "presentation": {
        "status": "confirmed",
        "scopeKnown": true,
        "scopeLabel": "所有用户",
        "kindExplicit": true,
        "timeInferred": false,
        "audienceZh": "所有用户",
        "productsZh": "Codex"
      },
      "estimate": null,
      "status": "confirmed",
      "title": "Codex 额度重置已完成",
      "scope": "",
      "createdAt": "2026-06-29T07:54:07.000+08:00",
      "updatedAt": "2026-06-29T07:54:07.000+08:00",
      "confirmedAt": "2026-06-29T07:54:07.000+08:00",
      "occurredOn": null,
      "confirmationBasis": "source_post",
      "schedule": null,
      "posts": [
        {
          "id": "2071381664853319742",
          "publishedAt": "2026-06-29T07:54:07.000+08:00",
          "stage": "确认完成",
          "text": "我已经重置了所有人的 Codex 用量额度。",
          "originalText": "I have reset everyone's Codex usage limits.",
          "fullText": "由于我们仍在调查中，我已经重置了所有人的 Codex 用量额度。这是一次硬重置，因为有些用户已经累积了多达三张重置卡，可以按自己的时间安排使用。\\n\\n说来有趣，本周在 OpenAI 被称为 RESET 周，本意是让大家放松一下。不过，这将会是另一种意义上的 RESET 周。好好享受吧。",
          "fullOriginalText": "As we are still investigating, I have reset everyone's Codex usage limits. This is a hard reset given some users had stacked up to three banked resets already that they can apply on their own schedule.\\n\\nFunnily enough, this week at OpenAI is called the RESET week, which is meant for folks to relax a bit. However it will be a different kind of RESET week. Enjoy.",
          "context": [
            {
              "id": "2071357473659707441",
              "author": "thsottiaux",
              "relation": "quote",
              "text": null,
              "originalText": "Codex team is in a warroom on a Sunday combing through logs and checking whether there is anything that could lead to increased usage drains for some users. Taking it very seriously and won't rest until we get to the bottom of it.",
              "url": "https://x.com/i/status/2071357473659707441"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2071381664853319742"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "reset-2070653282440405046-1-1",
      "type": "direct_reset",
      "label": "全员重置",
      "displayLabel": "额度重置",
      "presentation": {
        "status": "confirmed",
        "scopeKnown": true,
        "scopeLabel": "all Codex users",
        "kindExplicit": true,
        "timeInferred": true,
        "audienceZh": "所有用户",
        "productsZh": "Codex"
      },
      "estimate": null,
      "status": "confirmed",
      "title": "Codex 额度重置已完成",
      "scope": "",
      "createdAt": "2026-06-27T07:39:48.000+08:00",
      "updatedAt": "2026-06-28T05:47:54.000+08:00",
      "confirmedAt": "2026-06-28T05:47:54.000+08:00",
      "occurredOn": null,
      "confirmationBasis": "source_post",
      "schedule": {
        "precision": "deadline",
        "from": "2026-06-27T10:39:48.000+08:00",
        "through": "2026-06-27T10:39:48.000+08:00",
        "label": "北京时间预计 6月27日 10:39 前"
      },
      "posts": [
        {
          "id": "2070987512261029923",
          "publishedAt": "2026-06-28T05:47:54.000+08:00",
          "stage": "确认完成",
          "text": "我们还是把用量重置了，因为我们能这么做，但我们找不到这里有任何坏掉的地方。",
          "originalText": "Still did reset the usage because we can, but we can't find anything that is broken here.",
          "fullText": "我们之前有一个 2 倍用量促销倍率。这里没有玩任何把戏，但我们确实找不到问题。\\n\\n我们还是把用量重置了，因为我们能这么做，但我们找不到这里有任何坏掉的地方。",
          "fullOriginalText": "@scottstts We had a 2X usage promotion multiplier. Not playing any tricks here but we legitimately are not finding an issue.\\n\\nStill did reset the usage because we can, but we can't find anything that is broken here.",
          "context": [
            {
              "id": "2070772031394615454",
              "author": "scottstts",
              "relation": "reply",
              "text": null,
              "originalText": "Appreciate the reset, not to sound ungrateful, but codex usage does drain visibly faster compared to maybe 1-2 months ago, and so many people reported this, how come you didn’t find any issues? If the usage is reduced officially I think people would understand but plz just communicate that clearly",
              "url": "https://x.com/i/status/2070772031394615454"
            },
            {
              "id": "2070653282440405046",
              "author": "thsottiaux",
              "relation": "quote",
              "text": "我们将为所有 Codex 用户免费送上一次用量重置。应该会在接下来几个小时内显示在你们的账户中。\\n\\n我们已经采取了一些缓解措施，但调查并未显示用户受到大范围影响。我们会继续监控情况。",
              "originalText": "We are giving all Codex users a usage reset on the house. Should be showing in your accounts in the next few hours.\\n\\nWe have applied some mitigations, but our investigation hasn't shown users being impacted at large. We are continuing to monitor the situation.",
              "url": "https://x.com/i/status/2070653282440405046"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2070987512261029923"
        },
        {
          "id": "2070653282440405046",
          "publishedAt": "2026-06-27T07:39:48.000+08:00",
          "stage": "预告",
          "text": "我们将为所有 Codex 用户免费送上一次用量重置。应该会在接下来几个小时内显示在你们的账户中。",
          "originalText": "We are giving all Codex users a usage reset on the house. Should be showing in your accounts in the next few hours.",
          "fullText": "我们将为所有 Codex 用户免费送上一次用量重置。应该会在接下来几个小时内显示在你们的账户中。\\n\\n我们已经采取了一些缓解措施，但调查并未显示用户受到大范围影响。我们会继续监控情况。",
          "fullOriginalText": "We are giving all Codex users a usage reset on the house. Should be showing in your accounts in the next few hours.\\n\\nWe have applied some mitigations, but our investigation hasn't shown users being impacted at large. We are continuing to monitor the situation.",
          "context": [
            {
              "id": "2070553131503776175",
              "author": "thsottiaux",
              "relation": "quote",
              "text": null,
              "originalText": "Ola. The Codex team is investigating issues where some accounts are seeing faster usage draining than intended. We believe this is related to some abuse &amp; fraud prevention mechanisms that we have that might be overflagging. \\n\\nStay tuned.",
              "url": "https://x.com/i/status/2070553131503776175"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2070653282440405046"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "banked-2067399435009622521-2-1",
      "type": "reset_credit",
      "label": "发重置卡",
      "displayLabel": "重置卡发放",
      "presentation": {
        "status": "confirmed",
        "scopeKnown": false,
        "scopeLabel": null,
        "kindExplicit": true,
        "timeInferred": false,
        "audienceZh": null,
        "productsZh": "Codex"
      },
      "estimate": null,
      "status": "confirmed",
      "title": "重置卡已发放",
      "scope": "",
      "createdAt": "2026-06-18T08:10:10.000+08:00",
      "updatedAt": "2026-06-18T08:10:10.000+08:00",
      "confirmedAt": "2026-06-18T08:10:10.000+08:00",
      "occurredOn": null,
      "confirmationBasis": "source_post",
      "schedule": null,
      "posts": [
        {
          "id": "2067399435009622521",
          "publishedAt": "2026-06-18T08:10:10.000+08:00",
          "stage": "确认发卡",
          "text": "而且你还额外获得一张存入重置卡库的重置卡，可以随时按自己的节奏使用。",
          "originalText": "But you are also getting one into the reset bank to use at your own leisure.",
          "fullText": "亲爱的、温柔的 Codex 用户：\\n\\n我们偷偷搞了一次双重重置。不仅送你一次完整重置（我们请客），还额外送你一张重置卡，你可以随时按自己的节奏使用。\\n\\n尽情享用",
          "fullOriginalText": "Dearest gentle codexer.\\n\\nWe did a sneaky double reset. Not only do you get a full reset on us. But you are also getting one into the reset bank to use at your own leisure. \\n\\nEnjoy",
          "context": [
            {
              "id": "2067364445593170007",
              "author": "argofowl",
              "relation": "quote",
              "text": null,
              "originalText": "❗❗❗\\n\\nguys remember this post about codex rate limit resets \\"on your own time\\"?\\n\\nwell apparently this is some bullshit that is only bankable when you refer people and they sign up for codex\\n\\ntibo's last reset auto-applied\\n\\ni didn't need a reset right now, i had 50% usage in reserve and my reset was tomorrow\\n\\ni could have /fast on xhigh all day and still had a full reset tomorrow\\n\\nbut now they forced a reset i didn't need as if it's some reward\\n\\nsome anthropic level marketing ngl\\n\\ni was so happy because i thought every reset would be bankable so we could use it when we wanted, on our own time\\n\\ni hate this so much",
              "url": "https://x.com/i/status/2067364445593170007"
            },
            {
              "id": "2065225362544726371",
              "author": "OpenAI",
              "relation": "quote",
              "text": null,
              "originalText": "We heard you wanted to use Codex rate limit resets on your own time.\\n\\nStarting today, we’re rolling out the ability to save rate limit resets to use later.\\n\\nWe’re starting Go, Plus, Pro, and Business users with one free reset: https://t.co/gucyTi04wc",
              "url": "https://x.com/i/status/2065225362544726371"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2067399435009622521"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    },
    {
      "id": "reset-2066956441173323943-1-1",
      "type": "direct_reset",
      "label": "全员重置",
      "displayLabel": "额度重置",
      "presentation": {
        "status": "confirmed",
        "scopeKnown": true,
        "scopeLabel": "all plans",
        "kindExplicit": true,
        "timeInferred": false,
        "audienceZh": "“all plans”",
        "productsZh": "Codex"
      },
      "estimate": null,
      "status": "confirmed",
      "title": "Codex 额度重置已完成",
      "scope": "",
      "createdAt": "2026-06-17T02:49:52.000+08:00",
      "updatedAt": "2026-06-18T08:10:10.000+08:00",
      "confirmedAt": "2026-06-18T08:10:10.000+08:00",
      "occurredOn": null,
      "confirmationBasis": "source_post",
      "schedule": {
        "precision": "deadline",
        "from": "2026-06-18T02:49:52.000+08:00",
        "through": "2026-06-18T02:49:52.000+08:00",
        "label": "北京时间预计 6月18日 02:49 前"
      },
      "posts": [
        {
          "id": "2067399435009622521",
          "publishedAt": "2026-06-18T08:10:10.000+08:00",
          "stage": "确认完成",
          "text": "我们偷偷搞了一次双重重置。不仅送你一次完整重置，我们请客。",
          "originalText": "We did a sneaky double reset. Not only do you get a full reset on us.",
          "fullText": "亲爱的、温柔的 Codex 用户：\\n\\n我们偷偷搞了一次双重重置。不仅送你一次完整重置（我们请客），还额外送你一张重置卡，你可以随时按自己的节奏使用。\\n\\n尽情享用",
          "fullOriginalText": "Dearest gentle codexer.\\n\\nWe did a sneaky double reset. Not only do you get a full reset on us. But you are also getting one into the reset bank to use at your own leisure. \\n\\nEnjoy",
          "context": [
            {
              "id": "2067364445593170007",
              "author": "argofowl",
              "relation": "quote",
              "text": null,
              "originalText": "❗❗❗\\n\\nguys remember this post about codex rate limit resets \\"on your own time\\"?\\n\\nwell apparently this is some bullshit that is only bankable when you refer people and they sign up for codex\\n\\ntibo's last reset auto-applied\\n\\ni didn't need a reset right now, i had 50% usage in reserve and my reset was tomorrow\\n\\ni could have /fast on xhigh all day and still had a full reset tomorrow\\n\\nbut now they forced a reset i didn't need as if it's some reward\\n\\nsome anthropic level marketing ngl\\n\\ni was so happy because i thought every reset would be bankable so we could use it when we wanted, on our own time\\n\\ni hate this so much",
              "url": "https://x.com/i/status/2067364445593170007"
            },
            {
              "id": "2065225362544726371",
              "author": "OpenAI",
              "relation": "quote",
              "text": null,
              "originalText": "We heard you wanted to use Codex rate limit resets on your own time.\\n\\nStarting today, we’re rolling out the ability to save rate limit resets to use later.\\n\\nWe’re starting Go, Plus, Pro, and Business users with one free reset: https://t.co/gucyTi04wc",
              "url": "https://x.com/i/status/2065225362544726371"
            }
          ],
          "url": "https://x.com/thsottiaux/status/2067399435009622521"
        },
        {
          "id": "2066956441173323943",
          "publishedAt": "2026-06-17T02:49:52.000+08:00",
          "stage": "预告",
          "text": "给我们 24 小时，来重置所有套餐的 Codex 速率限制。",
          "originalText": "Give us 24 hours to reset the Codex rate limits across all plans.",
          "fullText": "这个已经修好了。你知道接下来要发生什么 👀\\n\\n给我们 24 小时，来重置所有套餐的 Codex 速率限制。",
          "fullOriginalText": "This was fixed. You know what's coming 👀\\n\\nGive us 24 hours to reset the Codex rate limits across all plans.",
          "context": [],
          "url": "https://x.com/thsottiaux/status/2066956441173323943"
        }
      ],
      "url": "https://aihot.news/codex-reset"
    }
  ],
  "activities": [
    {
      "id": "2112592264686149749",
      "publishedAt": "2026-10-21T01:10:20.000+08:00",
      "eventIds": [],
      "kind": "related",
      "text": "周末有报告称，部分用户的用量消耗速度比预期更快。我们已识别出约 40,000 个账户，这些账户在用量额度上存在不一致，即实际应用的用量与其实际所选套餐不符。我们正在逐一联系所有这些用户，并已修正该问题。如果你受到影响，我们会向你的账户添加额度。抱歉我们搞错了。",
      "originalText": "There were reports of usage draining faster than anticipated for some users over the weekend. We've identified approximately 40,000 accounts that had an inconsistency on which usage limits where the actual usage that was applied did not correspond to their actual selected plan. We are reaching out individually to all these users and have corrected the issue. If this affected you, we'll add credits to your account. Sorry we got this wrong.",
      "context": [],
      "statusChanged": false,
      "action": null,
      "url": "https://x.com/thsottiaux/status/2112592264686149749"
    },
    {
      "id": "2112432076767289678",
      "publishedAt": "2026-10-20T14:33:48.000+08:00",
      "eventIds": [
        "reset-2112432076767289678-1-1"
      ],
      "kind": "event_update",
      "text": "第15天/ 算了，我们还在忙……然后重置了。好好享受吧。",
      "originalText": "Day 15/ Nevermind, we're still cooking... and reset. Enjoy.",
      "context": [
        {
          "id": "2112268918681485431",
          "author": "thsottiaux",
          "relation": "quote",
          "text": "第15天/ 我们完蛋了",
          "originalText": "Day 15/ We're cooked",
          "url": "https://x.com/i/status/2112268918681485431"
        }
      ],
      "statusChanged": true,
      "action": "confirm",
      "url": "https://x.com/thsottiaux/status/2112432076767289678"
    },
    {
      "id": "2112039554538770846",
      "publishedAt": "2026-10-19T12:34:04.000+08:00",
      "eventIds": [],
      "kind": "related",
      "text": "@xiangning0 你想得美",
      "originalText": "@xiangning0 You wish",
      "context": [
        {
          "id": "2111971102587269568",
          "author": "xiangning0",
          "relation": "reply",
          "text": "如果让 Tibo 来发布 Deepseek 的新模型：\\n第一天，速度从 200t/s 提升到了300\\n第二天，重置\\n第三天，现在输入框可以生成回复了\\n第四天，重置\\n第五天，修改了默认上下文长度\\n第六天，发重置卡\\n第七天，支持 8 倍速，仅 pro 用户可用\\n第二十八天，发布全新模型命名deepseek v4.5 天王星 Ultra fast",
          "originalText": "如果让 Tibo 来发布 Deepseek 的新模型：\\n第一天，速度从 200t/s 提升到了300\\n第二天，重置\\n第三天，现在输入框可以生成回复了\\n第四天，重置\\n第五天，修改了默认上下文长度\\n第六天，发重置卡\\n第七天，支持 8 倍速，仅 pro 用户可用\\n第二十八天，发布全新模型命名deepseek v4.5 天王星 Ultra fast",
          "url": "https://x.com/i/status/2111971102587269568"
        }
      ],
      "statusChanged": false,
      "action": null,
      "url": "https://x.com/thsottiaux/status/2112039554538770846"
    },
    {
      "id": "2111918768733753664",
      "publishedAt": "2026-10-19T04:34:06.000+08:00",
      "eventIds": [],
      "kind": "related",
      "text": "现在人们都逃出时间线，在街上找我要重置了。我打算做点小卡片发给大家。",
      "originalText": "People have escaped the TL and are asking me for resets on the street now. I’ll make little cards to hand out",
      "context": [],
      "statusChanged": false,
      "action": null,
      "url": "https://x.com/thsottiaux/status/2111918768733753664"
    },
    {
      "id": "2111918635849801739",
      "publishedAt": "2026-10-19T04:33:34.000+08:00",
      "eventIds": [],
      "kind": "related",
      "text": "@littlelion_love 我们走着瞧",
      "originalText": "@littlelion_love We’ll see",
      "context": [
        {
          "id": "2111918435877720405",
          "author": "littlelion_love",
          "relation": "reply",
          "text": "等 Tibo 在 X 上达到 100 万粉丝时，会有一次重置吗？",
          "originalText": "When Tibo reaches 1M followers on X, will there be a reset?",
          "url": "https://x.com/i/status/2111918435877720405"
        },
        {
          "id": "2111849858374177222",
          "author": "thsottiaux",
          "relation": "quote",
          "text": "今天在煮什么",
          "originalText": "What’s cooking today",
          "url": "https://x.com/i/status/2111849858374177222"
        }
      ],
      "statusChanged": false,
      "action": null,
      "url": "https://x.com/thsottiaux/status/2111918635849801739"
    },
    {
      "id": "2111495569806065883",
      "publishedAt": "2026-10-18T00:32:28.000+08:00",
      "eventIds": [],
      "kind": "related",
      "text": "@ajambrosino @ah20im 启动一个“机器幽灵”战术小队，我们出现了降级",
      "originalText": "@ajambrosino @ah20im start a ghost in the machine tactical squad, we've got a degradation",
      "context": [
        {
          "id": "2111493616304849220",
          "author": "ajambrosino",
          "relation": "reply",
          "text": "@thsottiaux 绿灯",
          "originalText": "@thsottiaux green",
          "url": "https://x.com/i/status/2111493616304849220"
        },
        {
          "id": "2111493076850229733",
          "author": "thsottiaux",
          "relation": "reply",
          "text": "@ajambrosino 2+2？",
          "originalText": "@ajambrosino 2+2?",
          "url": "https://x.com/i/status/2111493076850229733"
        }
      ],
      "statusChanged": false,
      "action": null,
      "url": "https://x.com/thsottiaux/status/2111495569806065883"
    },
    {
      "id": "2111492738025959922",
      "publishedAt": "2026-10-18T00:21:13.000+08:00",
      "eventIds": [
        "reset-2111492738025959922-1-1"
      ],
      "kind": "event_update",
      "text": "今天之内、太平洋时间当天结束前落地",
      "originalText": "Landing sometime today by EOD PST",
      "context": [
        {
          "id": "2111492673890824348",
          "author": "thsottiaux",
          "relation": "reply",
          "text": "第13天/ 额度重置",
          "originalText": "Day 13/ Le limit reset",
          "url": "https://x.com/i/status/2111492673890824348"
        }
      ],
      "statusChanged": true,
      "action": "announce",
      "url": "https://x.com/thsottiaux/status/2111492738025959922"
    },
    {
      "id": "2110618732666257557",
      "publishedAt": "2026-10-15T14:28:13.000+08:00",
      "eventIds": [
        "reset-2110595484180214059-1-1"
      ],
      "kind": "event_update",
      "text": "搞定收工",
      "originalText": "Done and dusted",
      "context": [
        {
          "id": "2110595554036400151",
          "author": "thsottiaux",
          "relation": "quote",
          "text": "将在接下来 2 小时内落地",
          "originalText": "Landing within the next 2 hours",
          "url": "https://x.com/i/status/2110595554036400151"
        }
      ],
      "statusChanged": true,
      "action": "confirm",
      "url": "https://x.com/thsottiaux/status/2110618732666257557"
    },
    {
      "id": "2110595554036400151",
      "publishedAt": "2026-10-15T12:56:07.000+08:00",
      "eventIds": [
        "reset-2110595484180214059-1-1"
      ],
      "kind": "event_update",
      "text": "将在接下来 2 小时内落地",
      "originalText": "Landing within the next 2 hours",
      "context": [
        {
          "id": "2110595484180214059",
          "author": "thsottiaux",
          "relation": "reply",
          "text": "关于我的重置按钮丢了的报道，实在言过其实了\\n\\n第 10 天/ 重置",
          "originalText": "The reports of my reset button being lost are greatly exaggerated\\n\\nDay 10/ Reset",
          "url": "https://x.com/i/status/2110595484180214059"
        }
      ],
      "statusChanged": true,
      "action": null,
      "url": "https://x.com/thsottiaux/status/2110595554036400151"
    },
    {
      "id": "2110595484180214059",
      "publishedAt": "2026-10-15T12:55:51.000+08:00",
      "eventIds": [
        "reset-2110595484180214059-1-1"
      ],
      "kind": "event_update",
      "text": "关于我的重置按钮丢了的报道，实在是言过其实了\\n\\n第 10 天/ 重置",
      "originalText": "The reports of my reset button being lost are greatly exaggerated\\n\\nDay 10/ Reset",
      "context": [],
      "statusChanged": true,
      "action": "confirm",
      "url": "https://x.com/thsottiaux/status/2110595484180214059"
    }
  ],
  "monitor": {
    "status": "healthy",
    "lastAttemptAt": "2026-10-21T09:40:28.564+08:00",
    "lastCollectedAt": "2026-10-21T09:40:28.564+08:00",
    "lastVerifiedAt": "2026-10-21T09:40:28.564+08:00",
    "heldWindowCount": 0,
    "pendingCount": 0,
    "reviewCount": 0
  },
  "outage": null
}
\`\`\`
`;function zu(e=Ru){let t=e.match(/```json\s*([\s\S]*?)\s*```/);return t?JSON.parse(t[1]):{events:[],count:0,timezone:`Asia/Shanghai`}}async function Bu(e=``){return Lu(Iu.CODEX_RECENT,e)}async function Vu(e=``){return Lu(Iu.NEWS_ITEMS,e)}async function Hu(e=``){return Lu(Iu.HOT_TOPICS,e)}async function Uu(e=``){return Lu(Iu.DAILY_LATEST,e)}var Wu=`https://timor.tech/api/holiday/year/2026/



\`\`\`json
{"code":0,"holiday":{"01-01":{"holiday":true,"name":"元旦","wage":3,"date":"2026-01-01","rest":57},"01-02":{"holiday":true,"name":"元旦","wage":2,"date":"2026-01-02","rest":1},"01-03":{"holiday":true,"name":"元旦","wage":2,"date":"2026-01-03","rest":1},"01-04":{"holiday":false,"name":"元旦后补班","wage":1,"after":true,"target":"元旦","date":"2026-01-04","rest":1},"02-14":{"holiday":false,"name":"春节前补班","wage":1,"after":false,"target":"春节","date":"2026-02-14","rest":4},"02-15":{"holiday":true,"name":"春节","wage":2,"date":"2026-02-15","rest":5},"02-16":{"holiday":true,"name":"除夕","wage":3,"date":"2026-02-16","rest":1},"02-17":{"holiday":true,"name":"初一","wage":3,"date":"2026-02-17","rest":1},"02-18":{"holiday":true,"name":"初二","wage":3,"date":"2026-02-18","rest":1},"02-19":{"holiday":true,"name":"初三","wage":3,"date":"2026-02-19","rest":1},"02-20":{"holiday":true,"name":"初四","wage":2,"date":"2026-02-20","rest":1},"02-21":{"holiday":true,"name":"初五","wage":2,"date":"2026-02-21","rest":1},"02-22":{"holiday":true,"name":"初六","wage":2,"date":"2026-02-22","rest":1},"02-23":{"holiday":true,"name":"初七","wage":2,"date":"2026-02-23","rest":1},"02-28":{"holiday":false,"name":"春节后补班","wage":1,"target":"春节","after":true,"date":"2026-02-28","rest":2},"04-04":{"holiday":true,"name":"清明节","wage":2,"date":"2026-04-04","rest":1},"04-05":{"holiday":true,"name":"清明节","wage":3,"date":"2026-04-05","rest":1},"04-06":{"holiday":true,"name":"清明节","wage":2,"date":"2026-04-06","rest":1},"05-01":{"holiday":true,"name":"劳动节","wage":3,"date":"2026-05-01","rest":23},"05-02":{"holiday":true,"name":"劳动节","wage":3,"date":"2026-05-02","rest":1},"05-03":{"holiday":true,"name":"劳动节","wage":2,"date":"2026-05-03","rest":1},"05-04":{"holiday":true,"name":"劳动节","wage":2,"date":"2026-05-04","rest":1},"05-05":{"holiday":true,"name":"劳动节","wage":2,"date":"2026-05-05","rest":1},"05-09":{"holiday":false,"name":"劳动节后补班","wage":1,"after":true,"target":"劳动节","date":"2026-05-09","rest":1},"06-19":{"holiday":true,"name":"端午节","wage":3,"date":"2026-06-19","rest":33},"06-20":{"holiday":true,"name":"端午节","wage":2,"date":"2026-06-20","rest":1},"06-21":{"holiday":true,"name":"端午节","wage":2,"date":"2026-06-21","rest":1},"09-20":{"holiday":false,"name":"中秋节前补班","after":false,"wage":1,"target":"中秋节","date":"2026-09-20","rest":30},"09-25":{"holiday":true,"name":"中秋节","wage":3,"date":"2026-09-25","rest":5},"09-26":{"holiday":true,"name":"中秋节","wage":2,"date":"2026-09-26","rest":1},"09-27":{"holiday":true,"name":"中秋节","wage":2,"date":"2026-09-27","rest":1},"10-01":{"holiday":true,"name":"国庆节","wage":3,"date":"2026-10-01","rest":4},"10-02":{"holiday":true,"name":"国庆节","wage":3,"date":"2026-10-02","rest":1},"10-03":{"holiday":true,"name":"国庆节","wage":3,"date":"2026-10-03","rest":1},"10-04":{"holiday":true,"name":"国庆节","wage":2,"date":"2026-10-04","rest":1},"10-05":{"holiday":true,"name":"国庆节","wage":2,"date":"2026-10-05","rest":1},"10-06":{"holiday":true,"name":"国庆节","wage":2,"date":"2026-10-06","rest":1},"10-07":{"holiday":true,"name":"国庆节","wage":2,"date":"2026-10-07","rest":1},"10-10":{"holiday":false,"after":true,"wage":1,"name":"国庆节后补班","target":"国庆节","date":"2026-10-10"}}}
\`\`\``;function Gu(e=Wu){let t=e.match(/```json\s*([\s\S]*?)\s*```/);return t?JSON.parse(t[1]):{code:-1,holiday:{}}}async function Ku(e){let t=await fetch(`${Iu.HOLIDAY_BASE}/${e}/`,{headers:{Accept:`application/json`},cache:`no-cache`});if(!t.ok)throw Error(`HTTP ${t.status}`);let n=await t.json();if(n.code!==0||!n.holiday)throw Error(`节假日接口数据格式不正确`);return n.holiday}var Q={THEME:`codex-reset-theme`,CODEX_PAYLOAD:`codex-reset-cached-payload`,CODEX_ETAG:`codex-reset-etag`,NEWS_ITEMS:`codex-news-items`,NEWS_ETAG:`codex-news-etag`,HOT_TOPICS:`codex-hot-topics`,HOT_ETAG:`codex-hot-etag`,DAILY_REPORT:`codex-daily-report`,DAILY_ETAG:`codex-daily-etag`,DAILY_DISMISSED:`codex-daily-dismissed-date`,SWARM_INTRO_SEEN:`codex-swarm-intro-seen`};function qu(e,t=null){try{let n=window.localStorage.getItem(e);if(n==null)return t;try{return JSON.parse(n)}catch{return n}}catch{return t}}function $(e,t){try{t==null?window.localStorage.removeItem(e):typeof t==`string`?window.localStorage.setItem(e,t):window.localStorage.setItem(e,JSON.stringify(t))}catch{}}function Ju(e,t){if(!t||!Array.isArray(t.events))return e;let n=new Map;(e?.events||[]).forEach(e=>{e?.id&&n.set(e.id,e)}),t.events.forEach(e=>{e?.id&&n.set(e.id,e)});let r=Array.from(n.values()).sort((e,t)=>{let n=new Date(e.occurredOn||e.schedule?.from||e.confirmedAt||e.createdAt||0).getTime();return new Date(t.occurredOn||t.schedule?.from||t.confirmedAt||t.createdAt||0).getTime()-n});return{...t,events:r,count:r.length,historyFrom:e?.historyFrom||t.historyFrom}}var Yu=F(!1);function Xu(e={}){let{autoLiveDelay:t=600,maxDuration:n=5e3}=e;window.__swarmAutoLiveDelay=t,window.__swarmMaxDuration=n,Yu.value=!0;let r=()=>{Yu.value=!1,window.removeEventListener(`swarm:destroy`,r)};if(window.addEventListener(`swarm:destroy`,r,{once:!0}),window.__swarmRebuild)window.__swarmRebuild.start();else{let e=document.querySelector(`script[data-swarm-script]`);e&&e.remove();let t=document.createElement(`script`);t.src=`/swarm.js`,t.async=!0,t.dataset.swarmScript=`true`,document.body.appendChild(t)}}function Zu(){let e=new URLSearchParams(window.location.search),t=e.has(`intro`)||e.has(`swarm`);return!qu(Q.SWARM_INTRO_SEEN,!1)||t?($(Q.SWARM_INTRO_SEEN,!0),setTimeout(()=>{Xu({autoLiveDelay:1200})},300),!0):!1}function Qu(){Xu({autoLiveDelay:1200})}var $u={key:0,class:`notice`,role:`status`},ed={__name:`HomeView`,setup(e){let t=Fu,n=qu(Q.THEME,null),r=F([`dark`,`system`,`light`].includes(n)?n:`system`),i=window.matchMedia(`(prefers-color-scheme: dark)`),a=F(i.matches),o=X(()=>r.value===`system`?a.value?`dark`:`light`:r.value);In([r,a],()=>{document.documentElement.dataset.theme=o.value,document.documentElement.style.colorScheme=o.value,$(Q.THEME,r.value)},{immediate:!0});function s(e){a.value=e.matches}function c(e){r.value=e}let l=zu(),u=Gu(),d=qu(Q.CODEX_PAYLOAD,null),f=F(qu(Q.CODEX_ETAG,``)),p=F(d&&Array.isArray(d.events)?Ju(l,d):l),m=F({2026:u.holiday||{}}),h=F(!1),g=F(``),_=F(!d),v=F(new Date),y=X(()=>p.value?.events||[]),b=X(()=>y.value.filter(e=>e.status===`announced`).sort((e,t)=>new Date(t.schedule?.from||t.createdAt)-new Date(e.schedule?.from||e.createdAt)).filter(e=>e.schedule?.through&&new Date(e.schedule.through)>=v.value).sort((e,t)=>new Date(e.schedule.from)-new Date(t.schedule.from))[0]||y.value[0]||null),x=ic(new Date),S=F(x),C=F(new Date(`${x.slice(0,7)}-01T12:00:00`)),w=new Set,ee=X(()=>new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`,month:`long`}).format(C.value)),te=X(()=>{let e=new Map;return y.value.forEach(t=>{let n=oc(t);n&&(e.has(n)||e.set(n,[]),e.get(n).push(t))}),e}),ne=X(()=>{let e=C.value.getFullYear(),t=C.value.getMonth(),n=new Date(e,t,1).getDay(),r=new Date(e,t,1-n);return Array.from({length:42},(e,n)=>{let i=new Date(r);i.setDate(r.getDate()+n);let a=ic(i),o=`${rc(i.getMonth()+1)}-${rc(i.getDate())}`,s=i.getDay();return{date:i,key:a,day:i.getDate(),isWeekend:s===0||s===6,currentMonth:i.getMonth()===t,today:a===ic(v.value),events:te.value.get(a)||[],holiday:m.value[i.getFullYear()]?.[o]||null}})}),T=X(()=>{let e=`${C.value.getFullYear()}-${rc(C.value.getMonth()+1)}`;return y.value.filter(t=>oc(t).startsWith(e))}),re=X(()=>T.value.filter(e=>e.type===`direct_reset`).length),E=X(()=>T.value.filter(e=>e.type===`reset_credit`).length),ie=X(()=>te.value.get(S.value)||[]),ae=X(()=>{let e=Number(S.value.slice(0,4));return m.value[e]?.[S.value.slice(5)]||null}),oe=X(()=>{let e=new Date(`${S.value}T12:00:00`);return new Intl.DateTimeFormat(`zh-CN`,{month:`long`,day:`numeric`}).format(e)}),se=X(()=>S.value.slice(0,4)),D=X(()=>{let e=p.value?.checkedAt;return e?`${sc(e)} 检查`:`暂无检查记录`});function ce(e){S.value=e.key,e.currentMonth||(C.value=new Date(e.date.getFullYear(),e.date.getMonth(),1))}function le(e){C.value=new Date(C.value.getFullYear(),C.value.getMonth()+e,1);let t=`${C.value.getFullYear()}-${rc(C.value.getMonth()+1)}`,n=y.value.find(e=>oc(e).startsWith(t));S.value=n?oc(n):`${t}-01`}function ue(){let e=ic(v.value);S.value=e,C.value=new Date(`${e.slice(0,7)}-01T12:00:00`)}async function de(){h.value=!0,g.value=``;try{let e=await Bu(f.value);if(e.notModified){p.value={...p.value,checkedAt:e.serverDate?new Date(e.serverDate).toISOString():new Date().toISOString()},e.etag&&e.etag!==f.value&&(f.value=e.etag),$(Q.CODEX_PAYLOAD,p.value),$(Q.CODEX_ETAG,f.value),_.value=!1;return}if(!Array.isArray(e.data?.events))throw Error(`接口数据格式不正确`);p.value=Ju(p.value,e.data),_.value=!1,e.etag&&(f.value=e.etag),$(Q.CODEX_PAYLOAD,p.value),$(Q.CODEX_ETAG,f.value)}catch(e){g.value=`实时连接暂不可用，当前展示缓存数据。`,p.value?.events?.length||(p.value=l,_.value=!0),console.warn(`Failed to refresh Codex reset data:`,e)}finally{h.value=!1}}async function fe(e,t=!1){if(t||!w.has(e)){w.add(e);try{let t=await Ku(e);m.value={...m.value,[e]:t}}catch(t){console.warn(`Failed to load ${e} holiday data:`,t)}}}let pe=qu(Q.NEWS_ITEMS,[]),me=F(Array.isArray(pe)?pe:[]),he=F(qu(Q.NEWS_ETAG,``)),ge=F(!1),O=F(``),_e=F(``),ve=F(!1);async function ye(){ge.value=!0,O.value=``;try{let e=await Vu(he.value);if(e.notModified){_e.value=sc(e.serverDate||new Date),e.etag&&e.etag!==he.value&&(he.value=e.etag),$(Q.NEWS_ITEMS,me.value),$(Q.NEWS_ETAG,he.value);return}if(!Array.isArray(e.data?.items))throw Error(`资讯接口数据格式不正确`);me.value=e.data.items,_e.value=sc(e.serverDate||new Date),e.etag&&(he.value=e.etag),$(Q.NEWS_ITEMS,me.value),$(Q.NEWS_ETAG,he.value)}catch(e){O.value=`资讯获取暂不可用，展示缓存内容。`,console.warn(`Failed to fetch latest news items:`,e)}finally{ge.value=!1}}let be=qu(Q.HOT_TOPICS,[]),xe=F(Array.isArray(be)?be:[]),Se=F(qu(Q.HOT_ETAG,``)),Ce=F(!1),we=F(``),Te=F(``);async function Ee(){Ce.value=!0,we.value=``;try{let e=await Hu(Se.value);if(e.notModified){Te.value=sc(e.serverDate||new Date),e.etag&&e.etag!==Se.value&&(Se.value=e.etag),$(Q.HOT_TOPICS,xe.value),$(Q.HOT_ETAG,Se.value);return}if(!Array.isArray(e.data?.items))throw Error(`热点榜接口数据格式不正确`);xe.value=e.data.items.slice(0,10),Te.value=sc(e.serverDate||new Date),e.etag&&(Se.value=e.etag),$(Q.HOT_TOPICS,xe.value),$(Q.HOT_ETAG,Se.value)}catch(e){we.value=`热点榜获取暂不可用，展示缓存内容。`,console.warn(`Failed to fetch hot topics:`,e)}finally{Ce.value=!1}}let De=qu(Q.DAILY_REPORT,null),Oe=F(De?.date&&Array.isArray(De?.sections)?De:null),A=F(qu(Q.DAILY_ETAG,``)),ke=F(!1),Ae=F(!1);function j(e){qu(Q.DAILY_DISMISSED,``)!==e.date&&(Yu.value?window.addEventListener(`swarm:destroy`,()=>{ke.value=!0},{once:!0}):ke.value=!0)}function je(e){ke.value=!1,e&&Oe.value?.date&&$(Q.DAILY_DISMISSED,Oe.value.date)}function Me(){ke.value=!0}async function Ne(){Ae.value=!0;try{let e=await Uu(A.value);if(e.notModified){Oe.value&&j(Oe.value);return}let t=e.data?.report;t?.date&&Array.isArray(t?.sections)&&(Oe.value=t,e.etag&&(A.value=e.etag),$(Q.DAILY_REPORT,t),$(Q.DAILY_ETAG,e.etag||A.value),j(t))}catch(e){console.warn(`Failed to load daily report:`,e),Oe.value&&j(Oe.value)}finally{Ae.value=!1}}async function Pe(){await Promise.all([de(),fe(C.value.getFullYear(),!0),ye(),Ne(),Ee()])}In(()=>C.value.getFullYear(),e=>fe(e),{immediate:!0});let Fe,Ie,Le;return kr(()=>{de(),ye(),Ne(),Ee(),i.addEventListener(`change`,s),Zu(),Fe=window.setInterval(de,3e5),Ie=window.setInterval(()=>{ye(),Ee()},6e4),Le=window.setInterval(()=>{v.value=new Date},6e4)}),Mr(()=>{i.removeEventListener(`change`,s),window.clearInterval(Fe),window.clearInterval(Ie),window.clearInterval(Le)}),(e,n)=>(U(),da(ps,null,{header:kn(()=>[K(tc,{"theme-preference":r.value,"using-snapshot":_.value,"last-checked":D.value,"is-refreshing":h.value,onChangeTheme:c,onOpenDaily:Me,onRefresh:Pe,onReplaySwarm:I(Qu)},null,8,[`theme-preference`,`using-snapshot`,`last-checked`,`is-refreshing`,`onReplaySwarm`])]),footer:kn(()=>[K(nc,{"total-count":p.value.count||y.value.length,"history-from":I(ac)(p.value.historyFrom)},null,8,[`total-count`,`history-from`])]),default:kn(()=>[g.value?(U(),W(`div`,$u,k(g.value),1)):J(``,!0),K(Cc,{event:b.value,author:I(t)},null,8,[`event`,`author`]),K(yl,{"month-title":ee.value,"month-reset-count":re.value,"month-credit-count":E.value,"calendar-days":ne.value,"selected-date":S.value,"selected-title":oe.value,"selected-year":se.value,"selected-holiday":ae.value,"selected-events":ie.value,author:I(t),onSelectDay:ce,onGoToToday:ue,onMoveMonth:le},null,8,[`month-title`,`month-reset-count`,`month-credit-count`,`calendar-days`,`selected-date`,`selected-title`,`selected-year`,`selected-holiday`,`selected-events`,`author`]),K(lu,{"hot-topics":xe.value,"is-hot-refreshing":Ce.value,"hot-error":we.value,"news-items":me.value,"is-news-refreshing":ge.value,"news-error":O.value,"last-news-checked":_e.value,"show-all-news":ve.value,onRefreshHot:Ee,onRefreshNews:ye,onToggleShowAllNews:n[0]||=e=>ve.value=!ve.value},null,8,[`hot-topics`,`is-hot-refreshing`,`hot-error`,`news-items`,`is-news-refreshing`,`news-error`,`last-news-checked`,`show-all-news`]),K(Pu,{modelValue:ke.value,"onUpdate:modelValue":n[1]||=e=>ke.value=e,"daily-report":Oe.value,onClose:je},null,8,[`modelValue`,`daily-report`])]),_:1}))}};ls({__name:`App`,setup(e){return(e,t)=>(U(),da(ed))}}).mount(`#app`);