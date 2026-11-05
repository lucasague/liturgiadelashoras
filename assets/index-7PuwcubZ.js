(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}})();/**
* @vue/shared v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ni(e){const o=Object.create(null);for(const a of e.split(","))o[a]=1;return a=>a in o}const Oe={},Ha=[],Vo=()=>{},Ju=()=>!1,Bn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Yn=e=>e.startsWith("onUpdate:"),We=Object.assign,_i=(e,o)=>{const a=e.indexOf(o);a>-1&&e.splice(a,1)},qf=Object.prototype.hasOwnProperty,he=(e,o)=>qf.call(e,o),Z=Array.isArray,Va=e=>Qs(e)==="[object Map]",ss=e=>Qs(e)==="[object Set]",fl=e=>Qs(e)==="[object Date]",ie=e=>typeof e=="function",ze=e=>typeof e=="string",wo=e=>typeof e=="symbol",Ae=e=>e!==null&&typeof e=="object",ju=e=>(Ae(e)||ie(e))&&ie(e.then)&&ie(e.catch),xu=Object.prototype.toString,Qs=e=>xu.call(e),If=e=>Qs(e).slice(8,-1),Uu=e=>Qs(e)==="[object Object]",zi=e=>ze(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Is=Ni(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Gn=e=>{const o=Object.create(null);return(a=>o[a]||(o[a]=e(a)))},Of=/-\w/g,po=Gn(e=>e.replace(Of,o=>o.slice(1).toUpperCase())),Cf=/\B([A-Z])/g,La=Gn(e=>e.replace(Cf,"-$1").toLowerCase()),Qn=Gn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ir=Gn(e=>e?`on${Qn(e)}`:""),xo=(e,o)=>!Object.is(e,o),qn=(e,...o)=>{for(let a=0;a<e.length;a++)e[a](...o)},Hu=(e,o,a,s=!1)=>{Object.defineProperty(e,o,{configurable:!0,enumerable:!1,writable:s,value:a})},Wn=e=>{const o=parseFloat(e);return isNaN(o)?e:o};let gl;const Kn=()=>gl||(gl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ws(e){if(Z(e)){const o={};for(let a=0;a<e.length;a++){const s=e[a],n=ze(s)?Tf(s):Ws(s);if(n)for(const r in n)o[r]=n[r]}return o}else if(ze(e)||Ae(e))return e}const Df=/;(?![^(]*\))/g,Rf=/:([^]+)/,$f=/\/\*[^]*?\*\//g;function Tf(e){const o={};return e.replace($f,"").split(Df).forEach(a=>{if(a){const s=a.split(Rf);s.length>1&&(o[s[0].trim()]=s[1].trim())}}),o}function Re(e){let o="";if(ze(e))o=e;else if(Z(e))for(let a=0;a<e.length;a++){const s=Re(e[a]);s&&(o+=s+" ")}else if(Ae(e))for(const a in e)e[a]&&(o+=a+" ");return o.trim()}const Lf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Mf=Ni(Lf);function Vu(e){return!!e||e===""}function Nf(e,o){if(e.length!==o.length)return!1;let a=!0;for(let s=0;a&&s<e.length;s++)a=ns(e[s],o[s]);return a}function ns(e,o){if(e===o)return!0;let a=fl(e),s=fl(o);if(a||s)return a&&s?e.getTime()===o.getTime():!1;if(a=wo(e),s=wo(o),a||s)return e===o;if(a=Z(e),s=Z(o),a||s)return a&&s?Nf(e,o):!1;if(a=Ae(e),s=Ae(o),a||s){if(!a||!s)return!1;const n=Object.keys(e).length,r=Object.keys(o).length;if(n!==r)return!1;for(const i in e){const t=e.hasOwnProperty(i),l=o.hasOwnProperty(i);if(t&&!l||!t&&l||!ns(e[i],o[i]))return!1}}return String(e)===String(o)}function Ji(e,o){return e.findIndex(a=>ns(a,o))}const wu=e=>!!(e&&e.__v_isRef===!0),K=e=>ze(e)?e:e==null?"":Z(e)||Ae(e)&&(e.toString===xu||!ie(e.toString))?wu(e)?K(e.value):JSON.stringify(e,Fu,2):String(e),Fu=(e,o)=>wu(o)?Fu(e,o.value):Va(o)?{[`Map(${o.size})`]:[...o.entries()].reduce((a,[s,n],r)=>(a[Or(s,r)+" =>"]=n,a),{})}:ss(o)?{[`Set(${o.size})`]:[...o.values()].map(a=>Or(a))}:wo(o)?Or(o):Ae(o)&&!Z(o)&&!Uu(o)?String(o):o,Or=(e,o="")=>{var a;return wo(e)?`Symbol(${(a=e.description)!=null?a:o})`:e};/**
* @vue/reactivity v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ge;class _f{constructor(o=!1){this.detached=o,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!o&&Ge&&(Ge.active?(this.parent=Ge,this.index=(Ge.scopes||(Ge.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let o,a;if(this.scopes){const s=this.scopes.slice();for(o=0,a=s.length;o<a;o++)s[o].pause()}for(o=0,a=this.effects.length;o<a;o++)this.effects[o].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let o,a;if(this.scopes){const n=this.scopes.slice();for(o=0,a=n.length;o<a;o++)n[o].resume()}const s=this.effects.slice();for(o=0,a=s.length;o<a;o++)s[o].resume()}}run(o){if(this._active){const a=Ge;try{return Ge=this,o()}finally{Ge=a}}}on(){++this._on===1&&(this.prevScope=Ge,Ge=this)}off(){if(this._on>0&&--this._on===0){if(Ge===this)Ge=this.prevScope;else{let o=Ge;for(;o;){if(o.prevScope===this){o.prevScope=this.prevScope;break}o=o.prevScope}}this.prevScope=void 0}}stop(o){if(this._active){this._active=!1;let a,s;for(a=0,s=this.effects.length;a<s;a++)this.effects[a].stop();for(this.effects.length=0,a=0,s=this.cleanups.length;a<s;a++)this.cleanups[a]();if(this.cleanups.length=0,this.scopes){const n=this.scopes.slice();for(a=0,s=n.length;a<s;a++)n[a].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!o){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0}}}function zf(){return Ge}let De;const Cr=new WeakSet;class ku{constructor(o){this.fn=o,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ge&&(Ge.active?Ge.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Cr.has(this)&&(Cr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Yu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Sl(this),Gu(this);const o=De,a=Lo;De=this,Lo=!0;try{return this.fn()}finally{Qu(this),De=o,Lo=a,this.flags&=-3}}stop(){if(this.flags&1){for(let o=this.deps;o;o=o.nextDep)Ui(o);this.deps=this.depsTail=void 0,Sl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Cr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ii(this)&&this.run()}get dirty(){return ii(this)}}let Bu=0,Os,Cs;function Yu(e,o=!1){if(e.flags|=8,o){e.next=Cs,Cs=e;return}e.next=Os,Os=e}function ji(){Bu++}function xi(){if(--Bu>0)return;if(Cs){let o=Cs;for(Cs=void 0;o;){const a=o.next;o.next=void 0,o.flags&=-9,o=a}}let e;for(;Os;){let o=Os;for(Os=void 0;o;){const a=o.next;if(o.next=void 0,o.flags&=-9,o.flags&1)try{o.trigger()}catch(s){e||(e=s)}o=a}}if(e)throw e}function Gu(e){for(let o=e.deps;o;o=o.nextDep)o.version=-1,o.prevActiveLink=o.dep.activeLink,o.dep.activeLink=o}function Qu(e){let o,a=e.depsTail,s=a;for(;s;){const n=s.prevDep;s.version===-1?(s===a&&(a=n),Ui(s),Jf(s)):o=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=n}e.deps=o,e.depsTail=a}function ii(e){for(let o=e.deps;o;o=o.nextDep)if(o.dep.version!==o.version||o.dep.computed&&(Wu(o.dep.computed)||o.dep.version!==o.version))return!0;return!!e._dirty}function Wu(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===zs)||(e.globalVersion=zs,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!ii(e))))return;e.flags|=2;const o=e.dep,a=De,s=Lo;De=e,Lo=!0;try{Gu(e);const n=e.fn(e._value);(o.version===0||xo(n,e._value))&&(e.flags|=128,e._value=n,o.version++)}catch(n){throw o.version++,n}finally{De=a,Lo=s,Qu(e),e.flags&=-3}}function Ui(e,o=!1){const{dep:a,prevSub:s,nextSub:n}=e;if(s&&(s.nextSub=n,e.prevSub=void 0),n&&(n.prevSub=s,e.nextSub=void 0),a.subs===e&&(a.subs=s,!s&&a.computed)){a.computed.flags&=-5;for(let r=a.computed.deps;r;r=r.nextDep)Ui(r,!0)}!o&&!--a.sc&&a.map&&a.map.delete(a.key)}function Jf(e){const{prevDep:o,nextDep:a}=e;o&&(o.nextDep=a,e.prevDep=void 0),a&&(a.prevDep=o,e.nextDep=void 0)}let Lo=!0;const Ku=[];function aa(){Ku.push(Lo),Lo=!1}function sa(){const e=Ku.pop();Lo=e===void 0?!0:e}function Sl(e){const{cleanup:o}=e;if(e.cleanup=void 0,o){const a=De;De=void 0;try{o()}finally{De=a}}}let zs=0;class jf{constructor(o,a){this.sub=o,this.dep=a,this.version=a.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Hi{constructor(o){this.computed=o,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(o){if(!De||!Lo||De===this.computed)return;let a=this.activeLink;if(a===void 0||a.sub!==De)a=this.activeLink=new jf(De,this),De.deps?(a.prevDep=De.depsTail,De.depsTail.nextDep=a,De.depsTail=a):De.deps=De.depsTail=a,Xu(a);else if(a.version===-1&&(a.version=this.version,a.nextDep)){const s=a.nextDep;s.prevDep=a.prevDep,a.prevDep&&(a.prevDep.nextDep=s),a.prevDep=De.depsTail,a.nextDep=void 0,De.depsTail.nextDep=a,De.depsTail=a,De.deps===a&&(De.deps=s)}return a}trigger(o){this.version++,zs++,this.notify(o)}notify(o){ji();try{for(let a=this.subs;a;a=a.prevSub)a.sub.notify()&&a.sub.dep.notify()}finally{xi()}}}function Xu(e){if(e.dep.sc++,e.sub.flags&4){const o=e.dep.computed;if(o&&!e.dep.subs){o.flags|=20;for(let s=o.deps;s;s=s.nextDep)Xu(s)}const a=e.dep.subs;a!==e&&(e.prevSub=a,a&&(a.nextSub=e)),e.dep.subs=e}}const ti=new WeakMap,Ca=Symbol(""),li=Symbol(""),Js=Symbol("");function ro(e,o,a){if(Lo&&De){let s=ti.get(e);s||ti.set(e,s=new Map);let n=s.get(a);n||(s.set(a,n=new Hi),n.map=s,n.key=a),n.track()}}function Xo(e,o,a,s,n,r){const i=ti.get(e);if(!i){zs++;return}const t=l=>{l&&l.trigger()};if(ji(),o==="clear")i.forEach(t);else{const l=Z(e),u=l&&zi(a);if(l&&a==="length"){const c=Number(s);i.forEach((m,f)=>{(f==="length"||f===Js||!wo(f)&&f>=c)&&t(m)})}else switch((a!==void 0||i.has(void 0))&&t(i.get(a)),u&&t(i.get(Js)),o){case"add":l?u&&t(i.get("length")):(t(i.get(Ca)),Va(e)&&t(i.get(li)));break;case"delete":l||(t(i.get(Ca)),Va(e)&&t(i.get(li)));break;case"set":Va(e)&&t(i.get(Ca));break}}xi()}function _a(e){const o=ye(e);return o===e?o:(ro(o,"iterate",Js),Co(e)?o:o.map(Mo))}function Xn(e){return ro(e=ye(e),"iterate",Js),e}function Jo(e,o){return na(e)?Ya(Da(e)?Mo(o):o):Mo(o)}const xf={__proto__:null,[Symbol.iterator](){return Dr(this,Symbol.iterator,e=>Jo(this,e))},concat(...e){return _a(this).concat(...e.map(o=>Z(o)?_a(o):o))},entries(){return Dr(this,"entries",e=>(e[1]=Jo(this,e[1]),e))},every(e,o){return Yo(this,"every",e,o,void 0,arguments)},filter(e,o){return Yo(this,"filter",e,o,a=>a.map(s=>Jo(this,s)),arguments)},find(e,o){return Yo(this,"find",e,o,a=>Jo(this,a),arguments)},findIndex(e,o){return Yo(this,"findIndex",e,o,void 0,arguments)},findLast(e,o){return Yo(this,"findLast",e,o,a=>Jo(this,a),arguments)},findLastIndex(e,o){return Yo(this,"findLastIndex",e,o,void 0,arguments)},forEach(e,o){return Yo(this,"forEach",e,o,void 0,arguments)},includes(...e){return Rr(this,"includes",e)},indexOf(...e){return Rr(this,"indexOf",e)},join(e){return _a(this).join(e)},lastIndexOf(...e){return Rr(this,"lastIndexOf",e)},map(e,o){return Yo(this,"map",e,o,void 0,arguments)},pop(){return ds(this,"pop")},push(...e){return ds(this,"push",e)},reduce(e,...o){return bl(this,"reduce",e,o)},reduceRight(e,...o){return bl(this,"reduceRight",e,o)},shift(){return ds(this,"shift")},some(e,o){return Yo(this,"some",e,o,void 0,arguments)},splice(...e){return ds(this,"splice",e)},toReversed(){return _a(this).toReversed()},toSorted(e){return _a(this).toSorted(e)},toSpliced(...e){return _a(this).toSpliced(...e)},unshift(...e){return ds(this,"unshift",e)},values(){return Dr(this,"values",e=>Jo(this,e))}};function Dr(e,o,a){const s=Xn(e),n=s[o]();return s!==e&&!Co(e)&&(n._next=n.next,n.next=()=>{const r=n._next();return r.done||(r.value=a(r.value)),r}),n}const Uf=Array.prototype;function Yo(e,o,a,s,n,r){const i=Xn(e),t=i!==e&&!Co(e),l=i[o];if(l!==Uf[o]){const m=l.apply(e,r);return t?Mo(m):m}let u=a;i!==e&&(t?u=function(m,f){return a.call(this,Jo(e,m),f,e)}:a.length>2&&(u=function(m,f){return a.call(this,m,f,e)}));const c=l.call(i,u,s);return t&&n?n(c):c}function bl(e,o,a,s){const n=Xn(e),r=n!==e&&!Co(e);let i=a,t=!1;n!==e&&(r?(t=s.length===0,i=function(u,c,m){return t&&(t=!1,u=Jo(e,u)),a.call(this,u,Jo(e,c),m,e)}):a.length>3&&(i=function(u,c,m){return a.call(this,u,c,m,e)}));const l=n[o](i,...s);return t?Jo(e,l):l}function Rr(e,o,a){const s=ye(e);ro(s,"iterate",Js);const n=s[o](...a);return(n===-1||n===!1)&&ki(a[0])?(a[0]=ye(a[0]),s[o](...a)):n}function ds(e,o,a=[]){aa(),ji();const s=ye(e)[o].apply(e,a);return xi(),sa(),s}const Hf=Ni("__proto__,__v_isRef,__isVue"),Zu=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(wo));function Vf(e){wo(e)||(e=String(e));const o=ye(this);return ro(o,"has",e),o.hasOwnProperty(e)}class ed{constructor(o=!1,a=!1){this._isReadonly=o,this._isShallow=a}get(o,a,s){if(a==="__v_skip")return o.__v_skip;const n=this._isReadonly,r=this._isShallow;if(a==="__v_isReactive")return!n;if(a==="__v_isReadonly")return n;if(a==="__v_isShallow")return r;if(a==="__v_raw")return s===(n?r?Xf:nd:r?sd:ad).get(o)||Object.getPrototypeOf(o)===Object.getPrototypeOf(s)?o:void 0;const i=Z(o);if(!n){let l;if(i&&(l=xf[a]))return l;if(a==="hasOwnProperty")return Vf}const t=Reflect.get(o,a,to(o)?o:s);if((wo(a)?Zu.has(a):Hf(a))||(n||ro(o,"get",a),r))return t;if(to(t)){const l=i&&zi(a)?t:t.value;return n&&Ae(l)?ui(l):l}return Ae(t)?n?ui(t):wi(t):t}}class od extends ed{constructor(o=!1){super(!1,o)}set(o,a,s,n){let r=o[a];const i=Z(o)&&zi(a);if(!this._isShallow){const u=na(r);if(!Co(s)&&!na(s)&&(r=ye(r),s=ye(s)),!i&&to(r)&&!to(s))return u||(r.value=s),!0}const t=i?Number(a)<o.length:he(o,a),l=Reflect.set(o,a,s,to(o)?o:n);return o===ye(n)&&l&&(t?xo(s,r)&&Xo(o,"set",a,s):Xo(o,"add",a,s)),l}deleteProperty(o,a){const s=he(o,a);o[a];const n=Reflect.deleteProperty(o,a);return n&&s&&Xo(o,"delete",a,void 0),n}has(o,a){const s=Reflect.has(o,a);return(!wo(a)||!Zu.has(a))&&ro(o,"has",a),s}ownKeys(o){return ro(o,"iterate",Z(o)?"length":Ca),Reflect.ownKeys(o)}}class wf extends ed{constructor(o=!1){super(!0,o)}set(o,a){return!0}deleteProperty(o,a){return!0}}const Ff=new od,kf=new wf,Bf=new od(!0);const ci=e=>e,fn=e=>Reflect.getPrototypeOf(e);function Yf(e,o,a){return function(...s){const n=this.__v_raw,r=ye(n),i=Va(r),t=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,u=n[e](...s),c=a?ci:o?Ya:Mo;return!o&&ro(r,"iterate",l?li:Ca),We(Object.create(u),{next(){const{value:m,done:f}=u.next();return f?{value:m,done:f}:{value:t?[c(m[0]),c(m[1])]:c(m),done:f}}})}}function gn(e){return function(...o){return e==="delete"?!1:e==="clear"?void 0:this}}function Gf(e,o){const a={get(n){const r=this.__v_raw,i=ye(r),t=ye(n);e||(xo(n,t)&&ro(i,"get",n),ro(i,"get",t));const{has:l}=fn(i),u=o?ci:e?Ya:Mo;if(l.call(i,n))return u(r.get(n));if(l.call(i,t))return u(r.get(t));r!==i&&r.get(n)},get size(){const n=this.__v_raw;return!e&&ro(ye(n),"iterate",Ca),n.size},has(n){const r=this.__v_raw,i=ye(r),t=ye(n);return e||(xo(n,t)&&ro(i,"has",n),ro(i,"has",t)),n===t?r.has(n):r.has(n)||r.has(t)},forEach(n,r){const i=this,t=i.__v_raw,l=ye(t),u=o?ci:e?Ya:Mo;return!e&&ro(l,"iterate",Ca),t.forEach((c,m)=>n.call(r,u(c),u(m),i))}};return We(a,e?{add:gn("add"),set:gn("set"),delete:gn("delete"),clear:gn("clear")}:{add(n){const r=ye(this),i=fn(r),t=ye(n),l=!o&&!Co(n)&&!na(n)?t:n;return i.has.call(r,l)||xo(n,l)&&i.has.call(r,n)||xo(t,l)&&i.has.call(r,t)||(r.add(l),Xo(r,"add",l,l)),this},set(n,r){!o&&!Co(r)&&!na(r)&&(r=ye(r));const i=ye(this),{has:t,get:l}=fn(i);let u=t.call(i,n);u||(n=ye(n),u=t.call(i,n));const c=l.call(i,n);return i.set(n,r),u?xo(r,c)&&Xo(i,"set",n,r):Xo(i,"add",n,r),this},delete(n){const r=ye(this),{has:i,get:t}=fn(r);let l=i.call(r,n);l||(n=ye(n),l=i.call(r,n)),t&&t.call(r,n);const u=r.delete(n);return l&&Xo(r,"delete",n,void 0),u},clear(){const n=ye(this),r=n.size!==0,i=n.clear();return r&&Xo(n,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(n=>{a[n]=Yf(n,e,o)}),a}function Vi(e,o){const a=Gf(e,o);return(s,n,r)=>n==="__v_isReactive"?!e:n==="__v_isReadonly"?e:n==="__v_raw"?s:Reflect.get(he(a,n)&&n in s?a:s,n,r)}const Qf={get:Vi(!1,!1)},Wf={get:Vi(!1,!0)},Kf={get:Vi(!0,!1)};const ad=new WeakMap,sd=new WeakMap,nd=new WeakMap,Xf=new WeakMap;function Zf(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wi(e){return na(e)?e:Fi(e,!1,Ff,Qf,ad)}function rd(e){return Fi(e,!1,Bf,Wf,sd)}function ui(e){return Fi(e,!0,kf,Kf,nd)}function Fi(e,o,a,s,n){if(!Ae(e)||e.__v_raw&&!(o&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const r=n.get(e);if(r)return r;const i=Zf(If(e));if(i===0)return e;const t=new Proxy(e,i===2?s:a);return n.set(e,t),t}function Da(e){return na(e)?Da(e.__v_raw):!!(e&&e.__v_isReactive)}function na(e){return!!(e&&e.__v_isReadonly)}function Co(e){return!!(e&&e.__v_isShallow)}function ki(e){return e?!!e.__v_raw:!1}function ye(e){const o=e&&e.__v_raw;return o?ye(o):e}function eg(e){return!he(e,"__v_skip")&&Object.isExtensible(e)&&Hu(e,"__v_skip",!0),e}const Mo=e=>Ae(e)?wi(e):e,Ya=e=>Ae(e)?ui(e):e;function to(e){return e?e.__v_isRef===!0:!1}function B(e){return og(e,!1)}function og(e,o){return to(e)?e:new ag(e,o)}class ag{constructor(o,a){this.dep=new Hi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=a?o:ye(o),this._value=a?o:Mo(o),this.__v_isShallow=a}get value(){return this.dep.track(),this._value}set value(o){const a=this._rawValue,s=this.__v_isShallow||Co(o)||na(o);o=s?o:ye(o),xo(o,a)&&(this._rawValue=o,this._value=s?o:Mo(o),this.dep.trigger())}}function pe(e){return to(e)?e.value:e}const sg={get:(e,o,a)=>o==="__v_raw"?e:pe(Reflect.get(e,o,a)),set:(e,o,a,s)=>{const n=e[o];return to(n)&&!to(a)?(n.value=a,!0):Reflect.set(e,o,a,s)}};function id(e){return Da(e)?e:new Proxy(e,sg)}class ng{constructor(o,a,s){this.fn=o,this.setter=a,this._value=void 0,this.dep=new Hi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=zs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!a,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&De!==this)return Yu(this,!0),!0}get value(){const o=this.dep.track();return Wu(this),o&&(o.version=this.dep.version),this._value}set value(o){this.setter&&this.setter(o)}}function rg(e,o,a=!1){let s,n;return ie(e)?s=e:(s=e.get,n=e.set),new ng(s,n,a)}const Sn={},Dn=new WeakMap;let qa;function ig(e,o=!1,a=qa){if(a){let s=Dn.get(a);s||Dn.set(a,s=[]),s.push(e)}}function tg(e,o,a=Oe){const{immediate:s,deep:n,once:r,scheduler:i,augmentJob:t,call:l}=a,u=M=>n?M:Co(M)||n===!1||n===0?Zo(M,1):Zo(M);let c,m,f,y,O=!1,I=!1;if(to(e)?(m=()=>e.value,O=Co(e)):Da(e)?(m=()=>u(e),O=!0):Z(e)?(I=!0,O=e.some(M=>Da(M)||Co(M)),m=()=>e.map(M=>{if(to(M))return M.value;if(Da(M))return u(M);if(ie(M))return l?l(M,2):M()})):ie(e)?o?m=l?()=>l(e,2):e:m=()=>{if(f){aa();try{f()}finally{sa()}}const M=qa;qa=c;try{return l?l(e,3,[y]):e(y)}finally{qa=M}}:m=Vo,o&&n){const M=m,E=n===!0?1/0:n;m=()=>Zo(M(),E)}const _=zf(),V=()=>{c.stop(),_&&_.active&&_i(_.effects,c)};if(r&&o){const M=o;o=(...E)=>{const $=M(...E);return V(),$}}let k=I?new Array(e.length).fill(Sn):Sn;const J=M=>{if(!(!(c.flags&1)||!c.dirty&&!M))if(o){const E=c.run();if(M||n||O||(I?E.some(($,H)=>xo($,k[H])):xo(E,k))){f&&f();const $=qa;qa=c;try{const H=[E,k===Sn?void 0:I&&k[0]===Sn?[]:k,y];k=E,l?l(o,3,H):o(...H)}finally{qa=$}}}else c.run()};return t&&t(J),c=new ku(m),c.scheduler=i?()=>i(J,!1):J,y=M=>ig(M,!1,c),f=c.onStop=()=>{const M=Dn.get(c);if(M){if(l)l(M,4);else for(const E of M)E();Dn.delete(c)}},o?s?J(!0):k=c.run():i?i(J.bind(null,!0),!0):c.run(),V.pause=c.pause.bind(c),V.resume=c.resume.bind(c),V.stop=V,V}function Zo(e,o=1/0,a){if(o<=0||!Ae(e)||e.__v_skip||(a=a||new Map,(a.get(e)||0)>=o))return e;if(a.set(e,o),o--,to(e))Zo(e.value,o,a);else if(Z(e))for(let s=0;s<e.length;s++)Zo(e[s],o,a);else if(ss(e)||Va(e))e.forEach(s=>{Zo(s,o,a)});else if(Uu(e)){for(const s in e)Zo(e[s],o,a);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&Zo(e[s],o,a)}return e}/**
* @vue/runtime-core v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ks(e,o,a,s){try{return s?e(...s):e()}catch(n){Zn(n,o,a)}}function No(e,o,a,s){if(ie(e)){const n=Ks(e,o,a,s);return n&&ju(n)&&n.catch(r=>{Zn(r,o,a)}),n}if(Z(e)){const n=[];for(let r=0;r<e.length;r++)n.push(No(e[r],o,a,s));return n}}function Zn(e,o,a,s=!0){const n=o?o.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:i}=o&&o.appContext.config||Oe;if(o){let t=o.parent;const l=o.proxy,u=`https://vuejs.org/error-reference/#runtime-${a}`;for(;t;){const c=t.ec;if(c){for(let m=0;m<c.length;m++)if(c[m](e,l,u)===!1)return}t=t.parent}if(r){aa(),Ks(r,null,10,[e,l,u]),sa();return}}lg(e,a,n,s,i)}function lg(e,o,a,s=!0,n=!1){if(n)throw e;console.error(e)}const mo=[];let zo=-1;const wa=[];let da=null,xa=0;const td=Promise.resolve();let Rn=null;function Ia(e){const o=Rn||td;return e?o.then(this?e.bind(this):e):o}function cg(e){let o=zo+1,a=mo.length;for(;o<a;){const s=o+a>>>1,n=mo[s],r=js(n);r<e||r===e&&n.flags&2?o=s+1:a=s}return o}function Bi(e){if(!(e.flags&1)){const o=js(e),a=mo[mo.length-1];!a||!(e.flags&2)&&o>=js(a)?mo.push(e):mo.splice(cg(o),0,e),e.flags|=1,ld()}}function ld(){Rn||(Rn=td.then(ud))}function ug(e){if(!Z(e))da&&e.id===-1?da.splice(xa+1,0,e):e.flags&1||(wa.push(e),e.flags|=1);else for(let o=0;o<e.length;o++)wa.push(e[o]);ld()}function vl(e,o,a=zo+1){for(;a<mo.length;a++){const s=mo[a];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;mo.splice(a,1),a--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function cd(e){if(wa.length){const o=[...new Set(wa)].sort((a,s)=>js(a)-js(s));if(wa.length=0,da){for(let a=0;a<o.length;a++)da.push(o[a]);return}for(da=o,xa=0;xa<da.length;xa++){const a=da[xa];a.flags&4&&(a.flags&=-2),a.flags&8||a(),a.flags&=-2}da=null,xa=0}}const js=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ud(e){try{for(zo=0;zo<mo.length;zo++){const o=mo[zo];o&&!(o.flags&8)&&(o.flags&4&&(o.flags&=-2),Ks(o,o.i,o.i?15:14),o.flags&4||(o.flags&=-2))}}finally{for(;zo<mo.length;zo++){const o=mo[zo];o&&(o.flags&=-2)}zo=-1,mo.length=0,cd(),Rn=null,(mo.length||wa.length)&&ud()}}let Ao=null,dd=null;function $n(e){const o=Ao;return Ao=e,dd=e&&e.type.__scopeId||null,o}function dg(e,o=Ao,a){if(!o||e._n)return e;const s=(...n)=>{s._d&&Mn(-1);const r=$n(o),i=Ra.length;let t;try{t=e(...n)}finally{for(let l=Ra.length;l>i;l--)_d();$n(r),s._d&&Mn(1)}return t};return s._n=!0,s._c=!0,s._d=!0,s}function ao(e,o){if(Ao===null)return e;const a=rr(Ao),s=e.dirs||(e.dirs=[]);for(let n=0;n<o.length;n++){let[r,i,t,l=Oe]=o[n];r&&(ie(r)&&(r={mounted:r,updated:r}),r.deep&&Zo(i),s.push({dir:r,instance:a,value:i,oldValue:void 0,arg:t,modifiers:l}))}return e}function Ea(e,o,a,s){const n=e.dirs,r=o&&o.dirs;for(let i=0;i<n.length;i++){const t=n[i];r&&(t.oldValue=r[i].value);let l=t.dir[s];l&&(aa(),No(l,a,8,[e.el,t,e,o]),sa())}}function mg(e,o){if(io){let a=io.provides;const s=io.parent&&io.parent.provides;s===a&&(a=io.provides=Object.create(s)),a[e]=o}}function Ds(e,o,a=!1){const s=lS();if(s||Fa){let n=Fa?Fa._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(n&&e in n)return n[e];if(arguments.length>1)return a&&ie(o)?o.call(s&&s.proxy):o}}const pg=Symbol.for("v-scx"),fg=()=>Ds(pg);function be(e,o,a){return md(e,o,a)}function md(e,o,a=Oe){const{immediate:s,deep:n,flush:r,once:i}=a,t=We({},a),l=o&&s||!o&&r!=="post";let u;if(Hs){if(r==="sync"){const y=fg();u=y.__watcherHandles||(y.__watcherHandles=[])}else if(!l){const y=()=>{};return y.stop=Vo,y.resume=Vo,y.pause=Vo,y}}const c=io;t.call=(y,O,I)=>No(y,c,O,I);let m=!1;r==="post"?t.scheduler=y=>{bo(y,c&&c.suspense)}:r!=="sync"&&(m=!0,t.scheduler=(y,O)=>{O?y():Bi(y)}),t.augmentJob=y=>{o&&(y.flags|=4),m&&(y.flags|=2,c&&(y.id=c.uid,y.i=c))};const f=tg(e,o,t);return Hs&&(u?u.push(f):l&&f()),f}function gg(e,o,a){const s=this.proxy,n=ze(e)?e.includes(".")?pd(s,e):()=>s[e]:e.bind(s,s);let r;ie(o)?r=o:(r=o.handler,a=o);const i=Xs(this),t=md(n,r.bind(s),a);return i(),t}function pd(e,o){const a=o.split(".");return()=>{let s=e;for(let n=0;n<a.length&&s;n++)s=s[a[n]];return s}}const Sg=Symbol("_vte"),er=e=>e.__isTeleport,$r=Symbol("_leaveCb");function bg(e){let o=e[0];if(e.length>1){for(const a of e)if(a.type!==ra){o=a;break}}return o}function fd(e){if(!Gi(e))return er(e.type)&&e.children?bg(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:o,children:a}=e;if(a){if(o&16)return a[0];if(o&32&&ie(a.default))return a.default()}}function Yi(e,o){if(e.shapeFlag&6&&e.component){e.transition=o;const a=e.component.subTree;Yi(er(a.type)&&fd(a)||a,o)}else e.shapeFlag&128?(e.ssContent.transition=o.clone(e.ssContent),e.ssFallback.transition=o.clone(e.ssFallback)):e.transition=o}function or(e,o){return ie(e)?We({name:e.name},o,{setup:e}):e}function gd(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function yl(e,o){let a;return!!((a=Object.getOwnPropertyDescriptor(e,o))&&!a.configurable)}const Tn=new WeakMap;function Rs(e,o,a,s,n=!1){if(Z(e)){e.forEach((I,_)=>Rs(I,o&&(Z(o)?o[_]:o),a,s,n));return}if($s(s)&&!n){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Rs(e,o,a,s.component.subTree);return}const r=s.shapeFlag&4?rr(s.component):s.el,i=n?null:r,{i:t,r:l}=e,u=o&&o.r,c=t.refs===Oe?t.refs={}:t.refs,m=t.setupState,f=ye(m),y=m===Oe?Ju:I=>yl(c,I)?!1:he(f,I),O=(I,_)=>!(_&&yl(c,_));if(u!=null&&u!==l){if(hl(o),ze(u))c[u]=null,y(u)&&(m[u]=null);else if(to(u)){const I=o;O(u,I.k)&&(u.value=null),I.k&&(c[I.k]=null)}}if(ie(l))Ks(l,t,12,[i,c]);else{const I=ze(l),_=to(l);if(I||_){const V=()=>{if(e.f){const k=I?y(l)?m[l]:c[l]:O()||!e.k?l.value:c[e.k];if(n)Z(k)&&_i(k,r);else if(Z(k))k.includes(r)||k.push(r);else if(I)c[l]=[r],y(l)&&(m[l]=c[l]);else{const J=[r];O(l,e.k)&&(l.value=J),e.k&&(c[e.k]=J)}}else I?(c[l]=i,y(l)&&(m[l]=i)):_&&(O(l,e.k)&&(l.value=i),e.k&&(c[e.k]=i))};if(i){const k=()=>{V(),Tn.delete(e)};k.id=-1,Tn.set(e,k),bo(k,a)}else hl(e),V()}}}function hl(e){const o=Tn.get(e);o&&(o.flags|=8,Tn.delete(e))}Kn().requestIdleCallback;Kn().cancelIdleCallback;const $s=e=>!!e.type.__asyncLoader,Gi=e=>e.type.__isKeepAlive;function vg(e,o){Sd(e,"a",o)}function yg(e,o){Sd(e,"da",o)}function Sd(e,o,a=io){const s=e.__wdc||(e.__wdc=()=>{let n=a;for(;n;){if(n.isDeactivated)return;n=n.parent}return e()});if(ar(o,s,a),a){let n=a.parent;for(;n&&n.parent;)Gi(n.parent.vnode)&&hg(s,o,a,n),n=n.parent}}function hg(e,o,a,s){const n=ar(o,e,s,!0);Ls(()=>{_i(s[o],n)},a)}function ar(e,o,a=io,s=!1){if(a){const n=a[e]||(a[e]=[]),r=o.__weh||(o.__weh=(...i)=>{aa();const t=Xs(a),l=No(o,a,e,i);return t(),sa(),l});return s?n.unshift(r):n.push(r),r}}const ta=e=>(o,a=io)=>{(!Hs||e==="sp")&&ar(e,(...s)=>o(...s),a)},Eg=ta("bm"),Ts=ta("m"),Ag=ta("bu"),Pg=ta("u"),Qi=ta("bum"),Ls=ta("um"),qg=ta("sp"),Ig=ta("rtg"),Og=ta("rtc");function Cg(e,o=io){ar("ec",e,o)}const Dg="components",bd=Symbol.for("v-ndc");function In(e){return ze(e)?Rg(Dg,e,!1)||e:e||bd}function Rg(e,o,a=!0,s=!1){const n=Ao||io;if(n){const r=n.type;{const t=pS(r,!1);if(t&&(t===o||t===po(o)||t===Qn(po(o))))return r}const i=El(n[e]||r[e],o)||El(n.appContext[e],o);return!i&&s?r:i}}function El(e,o){return e&&(e[o]||e[po(o)]||e[Qn(po(o))])}function yo(e,o,a,s){let n;const r=a,i=Z(e);if(i||ze(e)){const t=i&&Da(e);let l=!1,u=!1;t&&(l=!Co(e),u=na(e),e=Xn(e)),n=new Array(e.length);for(let c=0,m=e.length;c<m;c++)n[c]=o(l?u?Ya(Mo(e[c])):Mo(e[c]):e[c],c,void 0,r)}else if(typeof e=="number"){n=new Array(e);for(let t=0;t<e;t++)n[t]=o(t+1,t,void 0,r)}else if(Ae(e))if(e[Symbol.iterator])n=Array.from(e,(t,l)=>o(t,l,void 0,r));else{const t=Object.keys(e);n=new Array(t.length);for(let l=0,u=t.length;l<u;l++){const c=t[l];n[l]=o(e[c],c,l,r)}}else n=[];return n}const di=e=>e?jd(e)?rr(e):di(e.parent):null,Ms=We(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>di(e.parent),$root:e=>di(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>yd(e),$forceUpdate:e=>e.f||(e.f=()=>{Bi(e.update)}),$nextTick:e=>e.n||(e.n=Ia.bind(e.proxy)),$watch:e=>gg.bind(e)}),Tr=(e,o)=>e!==Oe&&!e.__isScriptSetup&&he(e,o),$g={get({_:e},o){if(o==="__v_skip")return!0;const{ctx:a,setupState:s,data:n,props:r,accessCache:i,type:t,appContext:l}=e;if(o[0]!=="$"){const f=i[o];if(f!==void 0)switch(f){case 1:return s[o];case 2:return n[o];case 4:return a[o];case 3:return r[o]}else{if(Tr(s,o))return i[o]=1,s[o];if(n!==Oe&&he(n,o))return i[o]=2,n[o];if(he(r,o))return i[o]=3,r[o];if(a!==Oe&&he(a,o))return i[o]=4,a[o];mi&&(i[o]=0)}}const u=Ms[o];let c,m;if(u)return o==="$attrs"&&ro(e.attrs,"get",""),u(e);if((c=t.__cssModules)&&(c=c[o]))return c;if(a!==Oe&&he(a,o))return i[o]=4,a[o];if(m=l.config.globalProperties,he(m,o))return m[o]},set({_:e},o,a){const{data:s,setupState:n,ctx:r}=e;return Tr(n,o)?(n[o]=a,!0):s!==Oe&&he(s,o)?(s[o]=a,!0):he(e.props,o)||o[0]==="$"&&o.slice(1)in e?!1:(r[o]=a,!0)},has({_:{data:e,setupState:o,accessCache:a,ctx:s,appContext:n,props:r,type:i}},t){let l;return!!(a[t]||e!==Oe&&t[0]!=="$"&&he(e,t)||Tr(o,t)||he(r,t)||he(s,t)||he(Ms,t)||he(n.config.globalProperties,t)||(l=i.__cssModules)&&l[t])},defineProperty(e,o,a){return a.get!=null?e._.accessCache[o]=0:he(a,"value")&&this.set(e,o,a.value,null),Reflect.defineProperty(e,o,a)}};function Al(e){return Z(e)?e.reduce((o,a)=>(o[a]=null,o),{}):e}let mi=!0;function Tg(e){const o=yd(e),a=e.proxy,s=e.ctx;mi=!1,o.beforeCreate&&Pl(o.beforeCreate,e,"bc");const{data:n,computed:r,methods:i,watch:t,provide:l,inject:u,created:c,beforeMount:m,mounted:f,beforeUpdate:y,updated:O,activated:I,deactivated:_,beforeDestroy:V,beforeUnmount:k,destroyed:J,unmounted:M,render:E,renderTracked:$,renderTriggered:H,errorCaptured:x,serverPrefetch:W,expose:ae,inheritAttrs:Ee,components:Te,directives:Ce,filters:He}=o;if(u&&Lg(u,s,null),i)for(const X in i){const ce=i[X];ie(ce)&&(s[X]=ce.bind(a))}if(n){const X=n.call(a,a);Ae(X)&&(e.data=wi(X))}if(mi=!0,r)for(const X in r){const ce=r[X],Ke=ie(ce)?ce.bind(a,a):ie(ce.get)?ce.get.bind(a,a):Vo,ko=!ie(ce)&&ie(ce.set)?ce.set.bind(a):Vo,qe=U({get:Ke,set:ko});Object.defineProperty(s,X,{enumerable:!0,configurable:!0,get:()=>qe.value,set:Ve=>qe.value=Ve})}if(t)for(const X in t)vd(t[X],s,a,X);if(l){const X=ie(l)?l.call(a):l;Reflect.ownKeys(X).forEach(ce=>{mg(ce,X[ce])})}c&&Pl(c,e,"c");function $e(X,ce){Z(ce)?ce.forEach(Ke=>X(Ke.bind(a))):ce&&X(ce.bind(a))}if($e(Eg,m),$e(Ts,f),$e(Ag,y),$e(Pg,O),$e(vg,I),$e(yg,_),$e(Cg,x),$e(Og,$),$e(Ig,H),$e(Qi,k),$e(Ls,M),$e(qg,W),Z(ae))if(ae.length){const X=e.exposed||(e.exposed={});ae.forEach(ce=>{Object.defineProperty(X,ce,{get:()=>a[ce],set:Ke=>a[ce]=Ke,enumerable:!0})})}else e.exposed||(e.exposed={});E&&e.render===Vo&&(e.render=E),Ee!=null&&(e.inheritAttrs=Ee),Te&&(e.components=Te),Ce&&(e.directives=Ce),W&&gd(e)}function Lg(e,o,a=Vo){Z(e)&&(e=pi(e));for(const s in e){const n=e[s];let r;Ae(n)?"default"in n?r=Ds(n.from||s,n.default,!0):r=Ds(n.from||s):r=Ds(n),to(r)?Object.defineProperty(o,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:i=>r.value=i}):o[s]=r}}function Pl(e,o,a){No(Z(e)?e.map(s=>s.bind(o.proxy)):e.bind(o.proxy),o,a)}function vd(e,o,a,s){let n=s.includes(".")?pd(a,s):()=>a[s];if(ze(e)){const r=o[e];ie(r)&&be(n,r)}else if(ie(e))be(n,e.bind(a));else if(Ae(e))if(Z(e))e.forEach(r=>vd(r,o,a,s));else{const r=ie(e.handler)?e.handler.bind(a):o[e.handler];ie(r)&&be(n,r,e)}}function yd(e){const o=e.type,{mixins:a,extends:s}=o,{mixins:n,optionsCache:r,config:{optionMergeStrategies:i}}=e.appContext,t=r.get(o);let l;return t?l=t:!n.length&&!a&&!s?l=o:(l={},n.length&&n.forEach(u=>Ln(l,u,i,!0)),Ln(l,o,i)),Ae(o)&&r.set(o,l),l}function Ln(e,o,a,s=!1){const{mixins:n,extends:r}=o;r&&Ln(e,r,a,!0),n&&n.forEach(i=>Ln(e,i,a,!0));for(const i in o)if(!(s&&i==="expose")){const t=Mg[i]||a&&a[i];e[i]=t?t(e[i],o[i]):o[i]}return e}const Mg={data:ql,props:Il,emits:Il,methods:ys,computed:ys,beforeCreate:co,created:co,beforeMount:co,mounted:co,beforeUpdate:co,updated:co,beforeDestroy:co,beforeUnmount:co,destroyed:co,unmounted:co,activated:co,deactivated:co,errorCaptured:co,serverPrefetch:co,components:ys,directives:ys,watch:_g,provide:ql,inject:Ng};function ql(e,o){return o?e?function(){return We(ie(e)?e.call(this,this):e,ie(o)?o.call(this,this):o)}:o:e}function Ng(e,o){return ys(pi(e),pi(o))}function pi(e){if(Z(e)){const o={};for(let a=0;a<e.length;a++)o[e[a]]=e[a];return o}return e}function co(e,o){return e?[...new Set([].concat(e,o))]:o}function ys(e,o){return e?We(Object.create(null),e,o):o}function Il(e,o){return e?Z(e)&&Z(o)?[...new Set([...e,...o])]:We(Object.create(null),Al(e),Al(o??{})):o}function _g(e,o){if(!e)return o;if(!o)return e;const a=We(Object.create(null),e);for(const s in o)a[s]=co(e[s],o[s]);return a}function hd(){return{app:null,config:{isNativeTag:Ju,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zg=0;function Jg(e,o){return function(s,n=null){ie(s)||(s=We({},s)),n!=null&&!Ae(n)&&(n=null);const r=hd(),i=new WeakSet,t=[];let l=!1;const u=r.app={_uid:zg++,_component:s,_props:n,_container:null,_context:r,_instance:null,version:gS,get config(){return r.config},set config(c){},use(c,...m){return i.has(c)||(c&&ie(c.install)?(i.add(c),c.install(u,...m)):ie(c)&&(i.add(c),c(u,...m))),u},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),u},component(c,m){return m?(r.components[c]=m,u):r.components[c]},directive(c,m){return m?(r.directives[c]=m,u):r.directives[c]},mount(c,m,f){if(!l){const y=u._ceVNode||Pe(s,n);return y.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),e(y,c,f),l=!0,u._container=c,c.__vue_app__=u,rr(y.component)}},onUnmount(c){t.push(c)},unmount(){l&&(No(t,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,m){return r.provides[c]=m,u},runWithContext(c){const m=Fa;Fa=u;try{return c()}finally{Fa=m}}};return u}}let Fa=null;const jg=(e,o)=>o==="modelValue"||o==="model-value"?e.modelModifiers:e[`${o}Modifiers`]||e[`${po(o)}Modifiers`]||e[`${La(o)}Modifiers`];function xg(e,o,...a){if(e.isUnmounted)return;const s=e.vnode.props||Oe;let n=a;const r=o.startsWith("update:"),i=r&&jg(s,o.slice(7));i&&(i.trim&&(n=a.map(c=>ze(c)?c.trim():c)),i.number&&(n=a.map(Wn)));let t,l=s[t=Ir(o)]||s[t=Ir(po(o))];!l&&r&&(l=s[t=Ir(La(o))]),l&&No(l,e,6,n);const u=s[t+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[t])return;e.emitted[t]=!0,No(u,e,6,n)}}const Ug=new WeakMap;function Ed(e,o,a=!1){const s=a?Ug:o.emitsCache,n=s.get(e);if(n!==void 0)return n;const r=e.emits;let i={},t=!1;if(!ie(e)){const l=u=>{const c=Ed(u,o,!0);c&&(t=!0,We(i,c))};!a&&o.mixins.length&&o.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!r&&!t?(Ae(e)&&s.set(e,null),null):(Z(r)?r.forEach(l=>i[l]=null):We(i,r),Ae(e)&&s.set(e,i),i)}function sr(e,o){return!e||!Bn(o)?!1:(o=o.slice(2),o=o==="Once"?o:o.replace(/Once$/,""),he(e,o[0].toLowerCase()+o.slice(1))||he(e,La(o))||he(e,o))}function Ol(e){const{type:o,vnode:a,proxy:s,withProxy:n,propsOptions:[r],slots:i,attrs:t,emit:l,render:u,renderCache:c,props:m,data:f,setupState:y,ctx:O,inheritAttrs:I}=e,_=$n(e);let V,k;try{if(a.shapeFlag&4){const M=n||s,E=M;V=jo(u.call(E,M,c,m,y,f,O)),k=t}else{const M=o;V=jo(M.length>1?M(m,{attrs:t,slots:i,emit:l}):M(m,null)),k=o.props?t:Hg(t)}}catch(M){Ra.length=0,Zn(M,e,1),V=Pe(ra)}let J=V;if(k&&I!==!1){const M=Object.keys(k),{shapeFlag:E}=J;M.length&&E&7&&(r&&M.some(Yn)&&(k=Vg(k,r)),J=Ga(J,k,!1,!0))}if(a.dirs&&(J=Ga(J,null,!1,!0),J.dirs=J.dirs?J.dirs.concat(a.dirs):a.dirs),a.transition){const M=er(J.type)&&fd(J)||J;Yi(M,a.transition)}return V=J,$n(_),V}const Hg=e=>{let o;for(const a in e)(a==="class"||a==="style"||Bn(a))&&((o||(o={}))[a]=e[a]);return o},Vg=(e,o)=>{const a={};for(const s in e)(!Yn(s)||!(s.slice(9)in o))&&(a[s]=e[s]);return a};function wg(e,o,a){const{props:s,children:n,component:r}=e,{props:i,children:t,patchFlag:l}=o,u=r.emitsOptions;if(o.dirs||o.transition)return!0;if(a&&l>=0){if(l&1024)return!0;if(l&16)return s?Cl(s,i,u):!!i;if(l&8){const c=o.dynamicProps;for(let m=0;m<c.length;m++){const f=c[m];if(Ad(i,s,f)&&!sr(u,f))return!0}}}else return(n||t)&&(!t||!t.$stable)?!0:s===i?!1:s?i?Cl(s,i,u):!0:!!i;return!1}function Cl(e,o,a){const s=Object.keys(o);if(s.length!==Object.keys(e).length)return!0;for(let n=0;n<s.length;n++){const r=s[n];if(Ad(o,e,r)&&!sr(a,r))return!0}return!1}function Ad(e,o,a){const s=e[a],n=o[a];return a==="style"&&Ae(s)&&Ae(n)?!ns(s,n):s!==n}function Fg({vnode:e,parent:o,suspense:a},s){for(;o;){const n=o.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=s,e=n),n===e)(e=o.vnode).el=s,o=o.parent;else break}a&&a.activeBranch===e&&(a.vnode.el=s)}const Pd={},qd=()=>Object.create(Pd),Id=e=>Object.getPrototypeOf(e)===Pd;function kg(e,o,a,s=!1){const n={},r=qd();e.propsDefaults=Object.create(null),Od(e,o,n,r);for(const i in e.propsOptions[0])i in n||(n[i]=void 0);a?e.props=s?n:rd(n):e.type.props?e.props=n:e.props=r,e.attrs=r}function Bg(e,o,a,s){const{props:n,attrs:r,vnode:{patchFlag:i}}=e,t=ye(n),[l]=e.propsOptions;let u=!1;if((s||i>0)&&!(i&16)){if(i&8){const c=e.vnode.dynamicProps;for(let m=0;m<c.length;m++){let f=c[m];if(sr(e.emitsOptions,f))continue;const y=o[f];if(l)if(he(r,f))y!==r[f]&&(r[f]=y,u=!0);else{const O=po(f);n[O]=fi(l,t,O,y,e,!1)}else y!==r[f]&&(r[f]=y,u=!0)}}}else{Od(e,o,n,r)&&(u=!0);let c;for(const m in t)(!o||!he(o,m)&&((c=La(m))===m||!he(o,c)))&&(l?a&&(a[m]!==void 0||a[c]!==void 0)&&(n[m]=fi(l,t,m,void 0,e,!0)):delete n[m]);if(r!==t)for(const m in r)(!o||!he(o,m))&&(delete r[m],u=!0)}u&&Xo(e.attrs,"set","")}function Od(e,o,a,s){const[n,r]=e.propsOptions;let i=!1,t;if(o)for(let l in o){if(Is(l))continue;const u=o[l];let c;n&&he(n,c=po(l))?!r||!r.includes(c)?a[c]=u:(t||(t={}))[c]=u:sr(e.emitsOptions,l)||(!(l in s)||u!==s[l])&&(s[l]=u,i=!0)}if(r){const l=ye(a),u=t||Oe;for(let c=0;c<r.length;c++){const m=r[c];a[m]=fi(n,l,m,u[m],e,!he(u,m))}}return i}function fi(e,o,a,s,n,r){const i=e[a];if(i!=null){const t=he(i,"default");if(t&&s===void 0){const l=i.default;if(i.type!==Function&&!i.skipFactory&&ie(l)){const{propsDefaults:u}=n;if(a in u)s=u[a];else{const c=Xs(n);s=u[a]=l.call(null,o),c()}}else s=l;n.ce&&n.ce._setProp(a,s)}i[0]&&(r&&!t?s=!1:i[1]&&(s===""||s===La(a))&&(s=!0))}return s}const Yg=new WeakMap;function Cd(e,o,a=!1){const s=a?Yg:o.propsCache,n=s.get(e);if(n)return n;const r=e.props,i={},t=[];let l=!1;if(!ie(e)){const c=m=>{l=!0;const[f,y]=Cd(m,o,!0);We(i,f),y&&t.push(...y)};!a&&o.mixins.length&&o.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!r&&!l)return Ae(e)&&s.set(e,Ha),Ha;if(Z(r))for(let c=0;c<r.length;c++){const m=po(r[c]);Dl(m)&&(i[m]=Oe)}else if(r)for(const c in r){const m=po(c);if(Dl(m)){const f=r[c],y=i[m]=Z(f)||ie(f)?{type:f}:We({},f),O=y.type;let I=!1,_=!0;if(Z(O))for(let V=0;V<O.length;++V){const k=O[V],J=ie(k)&&k.name;if(J==="Boolean"){I=!0;break}else J==="String"&&(_=!1)}else I=ie(O)&&O.name==="Boolean";y[0]=I,y[1]=_,(I||he(y,"default"))&&t.push(m)}}const u=[i,t];return Ae(e)&&s.set(e,u),u}function Dl(e){return e[0]!=="$"&&!Is(e)}const Wi=e=>e==="_"||e==="_ctx"||e==="$stable",Ki=e=>Z(e)?e.map(jo):[jo(e)],Gg=(e,o,a)=>{if(o._n)return o;const s=dg((...n)=>Ki(o(...n)),a);return s._c=!1,s},Dd=(e,o,a)=>{const s=e._ctx;for(const n in e){if(Wi(n))continue;const r=e[n];if(ie(r))o[n]=Gg(n,r,s);else if(r!=null){const i=Ki(r);o[n]=()=>i}}},Rd=(e,o)=>{const a=Ki(o);e.slots.default=()=>a},$d=(e,o,a)=>{for(const s in o)(a||!Wi(s))&&(e[s]=o[s])},Qg=(e,o,a)=>{const s=e.slots=qd();if(e.vnode.shapeFlag&32){const n=o._;n?($d(s,o,a),a&&Hu(s,"_",n,!0)):Dd(o,s)}else o&&Rd(e,o)},Wg=(e,o,a)=>{const{vnode:s,slots:n}=e;let r=!0,i=Oe;if(s.shapeFlag&32){const t=o._;t?a&&t===1?r=!1:$d(n,o,a):(r=!o.$stable,Dd(o,n)),i=o}else o&&(Rd(e,o),i={default:1});if(r)for(const t in n)!Wi(t)&&i[t]==null&&delete n[t]},bo=oS;function Kg(e){return Xg(e)}function Xg(e,o){const a=Kn();a.__VUE__=!0;const{insert:s,remove:n,patchProp:r,createElement:i,createText:t,createComment:l,setText:u,setElementText:c,parentNode:m,nextSibling:f,setScopeId:y=Vo,insertStaticContent:O}=e,I=(g,S,h,C=null,P=null,q=null,z=void 0,T=null,L=!!S.dynamicChildren)=>{if(g===S)return;g&&!ms(g,S)&&(C=Me(g),Ve(g,P,q,!0),g=null),S.patchFlag===-2&&(L=!1,S.dynamicChildren=null);const{type:A,ref:Y,shapeFlag:j}=S;switch(A){case nr:_(g,S,h,C);break;case ra:V(g,S,h,C);break;case Mr:g==null&&k(S,h,C,z);break;case Se:Te(g,S,h,C,P,q,z,T,L);break;default:j&1?E(g,S,h,C,P,q,z,T,L):j&6?Ce(g,S,h,C,P,q,z,T,L):(j&64||j&128)&&A.process(g,S,h,C,P,q,z,T,L,Xe)}Y!=null&&P?Rs(Y,g&&g.ref,q,S||g,!S):Y==null&&g&&g.ref!=null&&Rs(g.ref,null,q,g,!0)},_=(g,S,h,C)=>{if(g==null)s(S.el=t(S.children),h,C);else{const P=S.el=g.el;S.children!==g.children&&u(P,S.children)}},V=(g,S,h,C)=>{g==null?s(S.el=l(S.children||""),h,C):S.el=g.el},k=(g,S,h,C)=>{[g.el,g.anchor]=O(g.children,S,h,C,g.el,g.anchor)},J=({el:g,anchor:S},h,C)=>{let P;for(;g&&g!==S;)P=f(g),s(g,h,C),g=P;s(S,h,C)},M=({el:g,anchor:S})=>{let h;for(;g&&g!==S;)h=f(g),n(g),g=h;n(S)},E=(g,S,h,C,P,q,z,T,L)=>{if(S.type==="svg"?z="svg":S.type==="math"&&(z="mathml"),g==null)$(S,h,C,P,q,z,T,L);else{const A=g.el&&g.el._isVueCE?g.el:null;try{A&&A._beginPatch(),W(g,S,P,q,z,T,L)}finally{A&&A._endPatch()}}},$=(g,S,h,C,P,q,z,T)=>{let L,A;const{props:Y,shapeFlag:j,transition:w,dirs:Q}=g;if(L=g.el=i(g.type,q,Y&&Y.is,Y),j&8?c(L,g.children):j&16&&x(g.children,L,null,C,P,Lr(g,q),z,T),Q&&Ea(g,null,C,"created"),H(L,g,g.scopeId,z,C),Y){for(const fe in Y)fe!=="value"&&!Is(fe)&&r(L,fe,null,Y[fe],q,C);"value"in Y&&r(L,"value",null,Y.value,q),(A=Y.onVnodeBeforeMount)&&_o(A,C,g)}Q&&Ea(g,null,C,"beforeMount");const se=Zg(P,w);se&&w.beforeEnter(L),s(L,S,h),((A=Y&&Y.onVnodeMounted)||se||Q)&&bo(()=>{try{A&&_o(A,C,g),se&&w.enter(L),Q&&Ea(g,null,C,"mounted")}finally{}},P)},H=(g,S,h,C,P)=>{if(h&&y(g,h),C)for(let q=0;q<C.length;q++)y(g,C[q]);if(P){let q=P.subTree;if(S===q||Nd(q.type)&&(q.ssContent===S||q.ssFallback===S)){const z=P.vnode;H(g,z,z.scopeId,z.slotScopeIds,P.parent)}}},x=(g,S,h,C,P,q,z,T,L=0)=>{for(let A=L;A<g.length;A++){const Y=g[A]=T?Ko(g[A]):jo(g[A]);I(null,Y,S,h,C,P,q,z,T)}},W=(g,S,h,C,P,q,z)=>{const T=S.el=g.el;let{patchFlag:L,dynamicChildren:A,dirs:Y}=S;L|=g.patchFlag&16;const j=g.props||Oe,w=S.props||Oe;let Q;if(h&&Aa(h,!1),(Q=w.onVnodeBeforeUpdate)&&_o(Q,h,S,g),Y&&Ea(S,g,h,"beforeUpdate"),h&&Aa(h,!0),A&&(!g.dynamicChildren||g.dynamicChildren.length!==A.length)&&(L=0,z=!1,A=null),(j.innerHTML&&w.innerHTML==null||j.textContent&&w.textContent==null)&&c(T,""),A?ae(g.dynamicChildren,A,T,h,C,Lr(S,P),q):z||ce(g,S,T,null,h,C,Lr(S,P),q,!1),L>0){if(L&16)Ee(T,j,w,h,P);else if(L&2&&j.class!==w.class&&r(T,"class",null,w.class,P),L&4&&r(T,"style",j.style,w.style,P),L&8){const se=S.dynamicProps;for(let fe=0;fe<se.length;fe++){const ge=se[fe],ne=j[ge],Ne=w[ge];(Ne!==ne||ge==="value")&&r(T,ge,ne,Ne,P,h)}}L&1&&g.children!==S.children&&c(T,S.children)}else!z&&A==null&&Ee(T,j,w,h,P);((Q=w.onVnodeUpdated)||Y)&&bo(()=>{Q&&_o(Q,h,S,g),Y&&Ea(S,g,h,"updated")},C)},ae=(g,S,h,C,P,q,z)=>{for(let T=0;T<S.length;T++){const L=g[T],A=S[T],Y=L.el&&(L.type===Se||!ms(L,A)||L.shapeFlag&198)?m(L.el):h;I(L,A,Y,null,C,P,q,z,!0)}},Ee=(g,S,h,C,P)=>{if(S!==h){if(S!==Oe)for(const q in S)!Is(q)&&!(q in h)&&r(g,q,S[q],null,P,C);for(const q in h){if(Is(q))continue;const z=h[q],T=S[q];z!==T&&q!=="value"&&r(g,q,T,z,P,C)}"value"in h&&r(g,"value",S.value,h.value,P)}},Te=(g,S,h,C,P,q,z,T,L)=>{const A=S.el=g?g.el:t(""),Y=S.anchor=g?g.anchor:t("");let{patchFlag:j,dynamicChildren:w,slotScopeIds:Q}=S;Q&&(T=T?T.concat(Q):Q),g==null?(s(A,h,C),s(Y,h,C),x(S.children||[],h,Y,P,q,z,T,L)):j>0&&j&64&&w&&g.dynamicChildren&&g.dynamicChildren.length===w.length?(ae(g.dynamicChildren,w,h,P,q,z,T),(S.key!=null||P&&S===P.subTree)&&Td(g,S,!0)):ce(g,S,h,Y,P,q,z,T,L)},Ce=(g,S,h,C,P,q,z,T,L)=>{S.slotScopeIds=T,g==null?S.shapeFlag&512?P.ctx.activate(S,h,C,z,L):He(S,h,C,P,q,z,L):Io(g,S,L)},He=(g,S,h,C,P,q,z)=>{const T=g.component=tS(g,C,P);if(Gi(g)&&(T.ctx.renderer=Xe),cS(T,!1,z),T.asyncDep){if(P&&P.registerDep(T,$e,z),!g.el){const L=T.subTree=Pe(ra);V(null,L,S,h),g.placeholder=L.el}}else $e(T,g,S,h,P,q,z)},Io=(g,S,h)=>{const C=S.component=g.component;if(wg(g,S,h))if(C.asyncDep&&!C.asyncResolved){X(C,S,h);return}else C.next=S,C.update();else S.el=g.el,C.vnode=S},$e=(g,S,h,C,P,q,z)=>{const T=()=>{if(g.isMounted){let{next:j,bu:w,u:Q,parent:se,vnode:fe}=g;{const Ze=Ld(g);if(Ze){j&&(j.el=fe.el,X(g,j,z)),Ze.asyncDep.then(()=>{bo(()=>{g.isUnmounted||A()},P)});return}}let ge=j,ne;Aa(g,!1),j?(j.el=fe.el,X(g,j,z)):j=fe,w&&qn(w),(ne=j.props&&j.props.onVnodeBeforeUpdate)&&_o(ne,se,j,fe),Aa(g,!0);const Ne=Ol(g),we=g.subTree;g.subTree=Ne,I(we,Ne,m(we.el),Me(we),g,P,q),j.el=Ne.el,ge===null&&Fg(g,Ne.el),Q&&bo(Q,P),(ne=j.props&&j.props.onVnodeUpdated)&&bo(()=>_o(ne,se,j,fe),P)}else{let j;const{el:w,props:Q}=S,{bm:se,m:fe,parent:ge,root:ne,type:Ne}=g,we=$s(S);Aa(g,!1),se&&qn(se),!we&&(j=Q&&Q.onVnodeBeforeMount)&&_o(j,ge,S),Aa(g,!0);{ne.ce&&ne.ce._hasShadowRoot()&&ne.ce._injectChildStyle(Ne,g.parent?g.parent.type:void 0);const Ze=g.subTree=Ol(g);I(null,Ze,h,C,g,P,q),S.el=Ze.el}if(fe&&bo(fe,P),!we&&(j=Q&&Q.onVnodeMounted)){const Ze=S;bo(()=>_o(j,ge,Ze),P)}(S.shapeFlag&256||ge&&$s(ge.vnode)&&ge.vnode.shapeFlag&256)&&g.a&&bo(g.a,P),g.isMounted=!0,S=h=C=null}};g.scope.on();const L=g.effect=new ku(T);g.scope.off();const A=g.update=L.run.bind(L),Y=g.job=L.runIfDirty.bind(L);Y.i=g,Y.id=g.uid,L.scheduler=()=>Bi(Y),Aa(g,!0),A()},X=(g,S,h)=>{S.component=g;const C=g.vnode.props;g.vnode=S,g.next=null,Bg(g,S.props,C,h),Wg(g,S.children,h),aa(),vl(g),sa()},ce=(g,S,h,C,P,q,z,T,L=!1)=>{const A=g&&g.children,Y=g?g.shapeFlag:0,j=S.children,{patchFlag:w,shapeFlag:Q}=S;if(w>0){if(w&128){ko(A,j,h,C,P,q,z,T,L);return}else if(w&256){Ke(A,j,h,C,P,q,z,T,L);return}}Q&8?(Y&16&&Le(A,P,q),j!==A&&c(h,j)):Y&16?Q&16?ko(A,j,h,C,P,q,z,T,L):Le(A,P,q,!0):(Y&8&&c(h,""),Q&16&&x(j,h,C,P,q,z,T,L))},Ke=(g,S,h,C,P,q,z,T,L)=>{g=g||Ha,S=S||Ha;const A=g.length,Y=S.length,j=Math.min(A,Y);let w;for(w=0;w<j;w++){const Q=S[w]=L?Ko(S[w]):jo(S[w]);I(g[w],Q,h,null,P,q,z,T,L)}A>Y?Le(g,P,q,!0,!1,j):x(S,h,C,P,q,z,T,L,j)},ko=(g,S,h,C,P,q,z,T,L)=>{let A=0;const Y=S.length;let j=g.length-1,w=Y-1;for(;A<=j&&A<=w;){const Q=g[A],se=S[A]=L?Ko(S[A]):jo(S[A]);if(ms(Q,se))I(Q,se,h,null,P,q,z,T,L);else break;A++}for(;A<=j&&A<=w;){const Q=g[j],se=S[w]=L?Ko(S[w]):jo(S[w]);if(ms(Q,se))I(Q,se,h,null,P,q,z,T,L);else break;j--,w--}if(A>j){if(A<=w){const Q=w+1,se=Q<Y?S[Q].el:C;for(;A<=w;)I(null,S[A]=L?Ko(S[A]):jo(S[A]),h,se,P,q,z,T,L),A++}}else if(A>w)for(;A<=j;)Ve(g[A],P,q,!0),A++;else{const Q=A,se=A,fe=new Map;for(A=se;A<=w;A++){const Fe=S[A]=L?Ko(S[A]):jo(S[A]);Fe.key!=null&&fe.set(Fe.key,A)}let ge,ne=0;const Ne=w-se+1;let we=!1,Ze=0;const Ro=new Array(Ne);for(A=0;A<Ne;A++)Ro[A]=0;for(A=Q;A<=j;A++){const Fe=g[A];if(ne>=Ne){Ve(Fe,P,q,!0);continue}let ke;if(Fe.key!=null)ke=fe.get(Fe.key);else for(ge=se;ge<=w;ge++)if(Ro[ge-se]===0&&ms(Fe,S[ge])){ke=ge;break}ke===void 0?Ve(Fe,P,q,!0):(Ro[ke-se]=A+1,ke>=Ze?Ze=ke:we=!0,I(Fe,S[ke],h,null,P,q,z,T,L),ne++)}const eo=we?eS(Ro):Ha;for(ge=eo.length-1,A=Ne-1;A>=0;A--){const Fe=se+A,ke=S[Fe],ha=S[Fe+1],Ma=Fe+1<Y?ha.el||Md(ha):C;Ro[A]===0?I(null,ke,h,Ma,P,q,z,T,L):we&&(ge<0||A!==eo[ge]?qe(ke,h,Ma,2):ge--)}}},qe=(g,S,h,C,P=null)=>{const{el:q,type:z,transition:T,children:L,shapeFlag:A}=g;if(A&6){qe(g.component.subTree,S,h,C);return}if(A&128){g.suspense.move(S,h,C);return}if(A&64){z.move(g,S,h,Xe);return}if(z===Se){s(q,S,h);for(let j=0;j<L.length;j++)qe(L[j],S,h,C);s(g.anchor,S,h);return}if(z===Mr){J(g,S,h);return}if(C!==2&&A&1&&T)if(C===0)T.persisted&&!q[$r]?s(q,S,h):(T.beforeEnter(q),s(q,S,h),bo(()=>T.enter(q),P));else{const{leave:j,delayLeave:w,afterLeave:Q}=T,se=()=>{g.ctx.isUnmounted?n(q):s(q,S,h)},fe=()=>{const ge=q._isLeaving||!!q[$r];q._isLeaving&&q[$r](!0),T.persisted&&!ge?se():j(q,()=>{se(),Q&&Q()})};w?w(q,se,fe):fe()}else s(q,S,h)},Ve=(g,S,h,C=!1,P=!1)=>{const{type:q,props:z,ref:T,children:L,dynamicChildren:A,shapeFlag:Y,patchFlag:j,dirs:w,cacheIndex:Q,memo:se}=g;if(j===-2&&(P=!1),T!=null&&(aa(),Rs(T,null,h,g,!0),sa()),Q!=null&&(S.renderCache[Q]=void 0),Y&256){S.ctx.deactivate(g);return}const fe=Y&1&&w,ge=!$s(g);let ne;if(ge&&(ne=z&&z.onVnodeBeforeUnmount)&&_o(ne,S,g),Y&6)go(g.component,h,C);else{if(Y&128){g.suspense.unmount(h,C);return}fe&&Ea(g,null,S,"beforeUnmount"),Y&64?g.type.remove(g,S,h,Xe,C):A&&!A.hasOnce&&(q!==Se||j>0&&j&64)?Le(A,S,h,!1,!0):(q===Se&&j&384||!P&&Y&16)&&Le(L,S,h),C&&la(g)}const Ne=se!=null&&Q==null;(ge&&(ne=z&&z.onVnodeUnmounted)||fe||Ne)&&bo(()=>{ne&&_o(ne,S,g),fe&&Ea(g,null,S,"unmounted"),Ne&&(g.el=null)},h)},la=g=>{const{type:S,el:h,anchor:C,transition:P}=g;if(S===Se){Bo(h,C);return}if(S===Mr){M(g);return}const q=()=>{n(h),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(g.shapeFlag&1&&P&&!P.persisted){const{leave:z,delayLeave:T}=P,L=()=>z(h,q);T?T(g.el,q,L):L()}else q()},Bo=(g,S)=>{let h;for(;g!==S;)h=f(g),n(g),g=h;n(S)},go=(g,S,h)=>{const{bum:C,scope:P,job:q,subTree:z,um:T,m:L,a:A}=g;Rl(L),Rl(A),C&&qn(C),P.stop(),q&&(q.flags|=8,Ve(z,g,S,h)),T&&bo(T,S),bo(()=>{g.isUnmounted=!0},S)},Le=(g,S,h,C=!1,P=!1,q=0)=>{for(let z=q;z<g.length;z++)Ve(g[z],S,h,C,P)},Me=g=>{if(g.shapeFlag&6)return Me(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const S=f(g.anchor||g.el),h=S&&S[Sg];return h?f(h):S};let Do=!1;const lo=(g,S,h)=>{let C;g==null?S._vnode&&(Ve(S._vnode,null,null,!0),C=S._vnode.component):I(S._vnode||null,g,S,null,null,null,h),S._vnode=g,Do||(Do=!0,vl(C),cd(),Do=!1)},Xe={p:I,um:Ve,m:qe,r:la,mt:He,mc:x,pc:ce,pbc:ae,n:Me,o:e};return{render:lo,hydrate:void 0,createApp:Jg(lo)}}function Lr({type:e,props:o},a){return a==="svg"&&e==="foreignObject"||a==="mathml"&&e==="annotation-xml"&&o&&o.encoding&&o.encoding.includes("html")?void 0:a}function Aa({effect:e,job:o},a){a?(e.flags|=32,o.flags|=4):(e.flags&=-33,o.flags&=-5)}function Zg(e,o){return(!e||e&&!e.pendingBranch)&&o&&!o.persisted}function Td(e,o,a=!1){const s=e.children,n=o.children;if(Z(s)&&Z(n))for(let r=0;r<s.length;r++){const i=s[r];let t=n[r];t.shapeFlag&1&&!t.dynamicChildren&&((t.patchFlag<=0||t.patchFlag===32)&&(t=n[r]=Ko(n[r]),t.el=i.el),!a&&t.patchFlag!==-2&&Td(i,t)),t.type===nr&&(t.patchFlag===-1&&(t=n[r]=Ko(t)),t.el=i.el),t.type===ra&&!t.el&&(t.el=i.el)}}function eS(e){const o=e.slice(),a=[0];let s,n,r,i,t;const l=e.length;for(s=0;s<l;s++){const u=e[s];if(u!==0){if(n=a[a.length-1],e[n]<u){o[s]=n,a.push(s);continue}for(r=0,i=a.length-1;r<i;)t=r+i>>1,e[a[t]]<u?r=t+1:i=t;u<e[a[r]]&&(r>0&&(o[s]=a[r-1]),a[r]=s)}}for(r=a.length,i=a[r-1];r-- >0;)a[r]=i,i=o[i];return a}function Ld(e){const o=e.subTree.component;if(o)return o.asyncDep&&!o.asyncResolved?o:Ld(o)}function Rl(e){if(e)for(let o=0;o<e.length;o++)e[o].flags|=8}function Md(e){if(e.placeholder)return e.placeholder;const o=e.component;return o?Md(o.subTree):null}const Nd=e=>e.__isSuspense;function oS(e,o){o&&o.pendingBranch?Z(e)?o.effects.push(...e):o.effects.push(e):ug(e)}const Se=Symbol.for("v-fgt"),nr=Symbol.for("v-txt"),ra=Symbol.for("v-cmt"),Mr=Symbol.for("v-stc"),Ra=[];let Po=null;function R(e=!1){Ra.push(Po=e?null:[])}function _d(){Ra.pop(),Po=Ra[Ra.length-1]||null}let xs=1;function Mn(e,o=!1){xs+=e,e<0&&Po&&o&&(Po.hasOnce=!0)}function zd(e){return e.dynamicChildren=xs>0?Po||Ha:null,_d(),xs>0&&Po&&Po.push(e),e}function N(e,o,a,s,n,r){return zd(b(e,o,a,s,n,r,!0))}function Qo(e,o,a,s,n){return zd(Pe(e,o,a,s,n,!0))}function Nn(e){return e?e.__v_isVNode===!0:!1}function ms(e,o){return e.type===o.type&&e.key===o.key}const Jd=({key:e})=>e??null,On=({ref:e,ref_key:o,ref_for:a})=>(typeof e=="number"&&(e=""+e),e!=null?ze(e)||to(e)||ie(e)?{i:Ao,r:e,k:o,f:!!a}:e:null);function b(e,o=null,a=null,s=0,n=null,r=e===Se?0:1,i=!1,t=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:o,key:o&&Jd(o),ref:o&&On(o),scopeId:dd,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:Ao};return t?(_n(l,a),r&128&&e.normalize(l)):a&&(l.shapeFlag|=ze(a)?8:16),xs>0&&!i&&Po&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Po.push(l),l}const Pe=aS;function aS(e,o=null,a=null,s=0,n=null,r=!1){if((!e||e===bd)&&(e=ra),Nn(e)){const t=Ga(e,o,!0);return a&&_n(t,a),xs>0&&!r&&Po&&(t.shapeFlag&6?Po[Po.indexOf(e)]=t:Po.push(t)),t.patchFlag=-2,t}if(fS(e)&&(e=e.__vccOpts),o){o=sS(o);let{class:t,style:l}=o;t&&!ze(t)&&(o.class=Re(t)),Ae(l)&&(ki(l)&&!Z(l)&&(l=We({},l)),o.style=Ws(l))}const i=ze(e)?1:Nd(e)?128:er(e)?64:Ae(e)?4:ie(e)?2:0;return b(e,o,a,s,n,i,r,!0)}function sS(e){return e?ki(e)||Id(e)?We({},e):e:null}function Ga(e,o,a=!1,s=!1){const{props:n,ref:r,patchFlag:i,children:t,transition:l}=e,u=o?nS(n||{},o):n,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Jd(u),ref:o&&o.ref?a&&r?Z(r)?r.concat(On(o)):[r,On(o)]:On(o):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:t,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:o&&e.type!==Se?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ga(e.ssContent),ssFallback:e.ssFallback&&Ga(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&s&&Yi(c,l.clone(c)),c}function ea(e=" ",o=0){return Pe(nr,null,e,o)}function ue(e="",o=!1){return o?(R(),Qo(ra,null,e)):Pe(ra,null,e)}function jo(e){return e==null||typeof e=="boolean"?Pe(ra):Z(e)?Pe(Se,null,e.slice()):Nn(e)?Ko(e):Pe(nr,null,String(e))}function Ko(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ga(e)}function _n(e,o){let a=0;const{shapeFlag:s}=e;if(o==null)o=null;else if(Z(o))a=16;else if(typeof o=="object")if(s&65){const n=o.default;n&&(n._c&&(n._d=!1),_n(e,n()),n._c&&(n._d=!0));return}else{a=32;const n=o._;!n&&!Id(o)?o._ctx=Ao:n===3&&Ao&&(Ao.slots._===1?o._=1:(o._=2,e.patchFlag|=1024))}else if(ie(o)){if(s&65){_n(e,{default:o});return}o={default:o,_ctx:Ao},a=32}else o=String(o),s&64?(a=16,o=[ea(o)]):a=8;e.children=o,e.shapeFlag|=a}function nS(...e){const o={};for(let a=0;a<e.length;a++){const s=e[a];for(const n in s)if(n==="class")o.class!==s.class&&(o.class=Re([o.class,s.class]));else if(n==="style")o.style=Ws([o.style,s.style]);else if(Bn(n)){const r=o[n],i=s[n];i&&r!==i&&!(Z(r)&&r.includes(i))?o[n]=r?[].concat(r,i):i:i==null&&r==null&&!Yn(n)&&(o[n]=i)}else n!==""&&(o[n]=s[n])}return o}function _o(e,o,a,s=null){No(e,o,7,[a,s])}const rS=hd();let iS=0;function tS(e,o,a){const s=e.type,n=(o?o.appContext:e.appContext)||rS,r={uid:iS++,vnode:e,type:s,parent:o,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new _f(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:o?o.provides:Object.create(n.provides),ids:o?o.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Cd(s,n),emitsOptions:Ed(s,n),emit:null,emitted:null,propsDefaults:Oe,inheritAttrs:s.inheritAttrs,ctx:Oe,data:Oe,props:Oe,attrs:Oe,slots:Oe,refs:Oe,setupState:Oe,setupContext:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=o?o.root:r,r.emit=xg.bind(null,r),e.ce&&e.ce(r),r}let io=null;const lS=()=>io||Ao;let zn,Us;{const e=Kn(),o=(a,s)=>{let n;return(n=e[a])||(n=e[a]=[]),n.push(s),r=>{n.length>1?n.forEach(i=>i(r)):n[0](r)}};zn=o("__VUE_INSTANCE_SETTERS__",a=>io=a),Us=o("__VUE_SSR_SETTERS__",a=>Hs=a)}const Xs=e=>{const o=io;return zn(e),e.scope.on(),()=>{e.scope.off(),zn(o)}},$l=()=>{io&&io.scope.off(),zn(null)};function jd(e){return e.vnode.shapeFlag&4}let Hs=!1;function cS(e,o=!1,a=!1){o&&Us(o);const{props:s,children:n}=e.vnode,r=jd(e);kg(e,s,r,o),Qg(e,n,a||o);const i=r?uS(e,o):void 0;return o&&Us(!1),i}function uS(e,o){const a=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,$g);const{setup:s}=a;if(s){aa();const n=e.setupContext=s.length>1?mS(e):null,r=Xs(e),i=Ks(s,e,0,[e.props,n]),t=ju(i);if(sa(),r(),(t||e.sp)&&!$s(e)&&gd(e),t){if(i.then($l,$l),o)return i.then(l=>{Us(!0);try{Tl(e,l,o)}finally{Us(!1)}}).catch(l=>{Zn(l,e,0)});e.asyncDep=i}else Tl(e,i)}else xd(e)}function Tl(e,o,a){ie(o)?e.type.__ssrInlineRender?e.ssrRender=o:e.render=o:Ae(o)&&(e.setupState=id(o)),xd(e)}function xd(e,o,a){const s=e.type;e.render||(e.render=s.render||Vo);{const n=Xs(e);aa();try{Tg(e)}finally{sa(),n()}}}const dS={get(e,o){return ro(e,"get",""),e[o]}};function mS(e){const o=a=>{e.exposed=a||{}};return{attrs:new Proxy(e.attrs,dS),slots:e.slots,emit:e.emit,expose:o}}function rr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(id(eg(e.exposed)),{get(o,a){if(a in o)return o[a];if(a in Ms)return Ms[a](e)},has(o,a){return a in o||a in Ms}})):e.proxy}function pS(e,o=!0){return ie(e)?e.displayName||e.name:e.name||o&&e.__name}function fS(e){return ie(e)&&"__vccOpts"in e}const U=(e,o)=>rg(e,o,Hs);function gi(e,o,a){try{Mn(-1);const s=arguments.length;return s===2?Ae(o)&&!Z(o)?Nn(o)?Pe(e,null,[o]):Pe(e,o):Pe(e,null,o):(s>3?a=Array.prototype.slice.call(arguments,2):s===3&&Nn(a)&&(a=[a]),Pe(e,o,a))}finally{Mn(1)}}const gS="3.5.41";/**
* @vue/runtime-dom v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Si;const Ll=typeof window<"u"&&window.trustedTypes;if(Ll)try{Si=Ll.createPolicy("vue",{createHTML:e=>e})}catch{}const Ud=Si?e=>Si.createHTML(e):e=>e,SS="http://www.w3.org/2000/svg",bS="http://www.w3.org/1998/Math/MathML",Wo=typeof document<"u"?document:null,Ml=Wo&&Wo.createElement("template"),vS={insert:(e,o,a)=>{o.insertBefore(e,a||null)},remove:e=>{const o=e.parentNode;o&&o.removeChild(e)},createElement:(e,o,a,s)=>{const n=o==="svg"?Wo.createElementNS(SS,e):o==="mathml"?Wo.createElementNS(bS,e):a?Wo.createElement(e,{is:a}):Wo.createElement(e);return e==="select"&&s&&s.multiple!=null&&n.setAttribute("multiple",s.multiple),n},createText:e=>Wo.createTextNode(e),createComment:e=>Wo.createComment(e),setText:(e,o)=>{e.nodeValue=o},setElementText:(e,o)=>{e.textContent=o},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Wo.querySelector(e),setScopeId(e,o){e.setAttribute(o,"")},insertStaticContent(e,o,a,s,n,r){const i=a?a.previousSibling:o.lastChild;if(n&&(n===r||n.nextSibling))for(;o.insertBefore(n.cloneNode(!0),a),!(n===r||!(n=n.nextSibling)););else{Ml.innerHTML=Ud(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const t=Ml.content;if(s==="svg"||s==="mathml"){const l=t.firstChild;for(;l.firstChild;)t.appendChild(l.firstChild);t.removeChild(l)}o.insertBefore(t,a)}return[i?i.nextSibling:o.firstChild,a?a.previousSibling:o.lastChild]}},yS=Symbol("_vtc");function hS(e,o,a){const s=e[yS];s&&(o=(o?[o,...s]:[...s]).join(" ")),o==null?e.removeAttribute("class"):a?e.setAttribute("class",o):e.className=o}const Jn=Symbol("_vod"),Hd=Symbol("_vsh"),Nl={name:"show",beforeMount(e,{value:o},{transition:a}){e[Jn]=e.style.display==="none"?"":e.style.display,a&&o?a.beforeEnter(e):ps(e,o)},mounted(e,{value:o},{transition:a}){a&&o&&a.enter(e)},updated(e,{value:o,oldValue:a},{transition:s}){!o!=!a&&(s?o?(s.beforeEnter(e),ps(e,!0),s.enter(e)):s.leave(e,()=>{ps(e,!1)}):ps(e,o))},beforeUnmount(e,{value:o}){ps(e,o)}};function ps(e,o){e.style.display=o?e[Jn]:"none",e[Hd]=!o}const ES=Symbol(""),AS=/(?:^|;)\s*display\s*:/;function PS(e,o,a){const s=e.style,n=ze(a);let r=!1;if(a&&!n){if(o)if(ze(o))for(const i of o.split(";")){const t=i.slice(0,i.indexOf(":")).trim();a[t]==null&&hs(s,t,"")}else for(const i in o)a[i]==null&&hs(s,i,"");for(const i in a){i==="display"&&(r=!0);const t=a[i];t!=null?IS(e,i,!ze(o)&&o?o[i]:void 0,t)||hs(s,i,t):hs(s,i,"")}}else if(n){if(o!==a){const i=s[ES];i&&(a+=";"+i),s.cssText=a,r=AS.test(a)}}else o&&e.removeAttribute("style");Jn in e&&(e[Jn]=r?s.display:"",e[Hd]&&(s.display="none"))}const _l=/\s*!important$/;function hs(e,o,a){if(Z(a))a.forEach(s=>hs(e,o,s));else if(a==null&&(a=""),o.startsWith("--"))e.setProperty(o,a);else{const s=qS(e,o);_l.test(a)?e.setProperty(La(s),a.replace(_l,""),"important"):e[s]=a}}const zl=["Webkit","Moz","ms"],Nr={};function qS(e,o){const a=Nr[o];if(a)return a;let s=po(o);if(s!=="filter"&&s in e)return Nr[o]=s;s=Qn(s);for(let n=0;n<zl.length;n++){const r=zl[n]+s;if(r in e)return Nr[o]=r}return o}function IS(e,o,a,s){return e.tagName==="TEXTAREA"&&(o==="width"||o==="height")&&ze(s)&&a===s}const Jl="http://www.w3.org/1999/xlink";function jl(e,o,a,s,n,r=Mf(o)){s&&o.startsWith("xlink:")?a==null?e.removeAttributeNS(Jl,o.slice(6,o.length)):e.setAttributeNS(Jl,o,a):a==null||r&&!Vu(a)?e.removeAttribute(o):e.setAttribute(o,r?"":wo(a)?String(a):a)}function xl(e,o,a,s,n){if(o==="innerHTML"||o==="textContent"){a!=null&&(e[o]=o==="innerHTML"?Ud(a):a);return}const r=e.tagName;if(o==="value"&&r!=="PROGRESS"&&!r.includes("-")){const t=r==="OPTION"?e.getAttribute("value")||"":e.value,l=a==null?e.type==="checkbox"?"on":"":String(a);(t!==l||!("_value"in e))&&(e.value=l),a==null&&e.removeAttribute(o),e._value=a;return}let i=!1;if(a===""||a==null){const t=typeof e[o];t==="boolean"?a=Vu(a):a==null&&t==="string"?(a="",i=!0):t==="number"&&(a=0,i=!0)}try{e[o]=a}catch{}i&&e.removeAttribute(n||o)}function ma(e,o,a,s){e.addEventListener(o,a,s)}function OS(e,o,a,s){e.removeEventListener(o,a,s)}const Ul=Symbol("_vei");function CS(e,o,a,s,n=null){const r=e[Ul]||(e[Ul]={}),i=r[o];if(s&&i)i.value=s;else{const[t,l]=$S(o);if(s){const u=r[o]=MS(s,n);ma(e,t,u,l)}else i&&(OS(e,t,i,l),r[o]=void 0)}}const DS=/(Once|Passive|Capture)$/,RS=/^on:?(?:Once|Passive|Capture)$/;function $S(e){let o,a;for(;(a=e.match(DS))&&!RS.test(e);)o||(o={}),e=e.slice(0,e.length-a[1].length),o[a[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):La(e.slice(2)),o]}let _r=0;const TS=Promise.resolve(),LS=()=>_r||(TS.then(()=>_r=0),_r=Date.now());function MS(e,o){const a=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=a.attached)return;const n=a.value;if(Z(n)){const r=s.stopImmediatePropagation;s.stopImmediatePropagation=()=>{r.call(s),s._stopped=!0};const i=n.slice(),t=[s];for(let l=0;l<i.length&&!s._stopped;l++){const u=i[l];u&&No(u,o,5,t)}}else No(n,o,5,[s])};return a.value=e,a.attached=LS(),a}const Hl=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,NS=(e,o,a,s,n,r)=>{const i=n==="svg";o==="class"?hS(e,s,i):o==="style"?PS(e,a,s):Bn(o)?Yn(o)||CS(e,o,a,s,r):(o[0]==="."?(o=o.slice(1),!0):o[0]==="^"?(o=o.slice(1),!1):_S(e,o,s,i))?(xl(e,o,s),!e.tagName.includes("-")&&(o==="value"||o==="checked"||o==="selected")&&jl(e,o,s,i,r,o!=="value")):e._isVueCE&&(zS(e,o)||e._def.__asyncLoader&&(/[A-Z]/.test(o)||!ze(s)))?xl(e,po(o),s,r,o):(o==="true-value"?e._trueValue=s:o==="false-value"&&(e._falseValue=s),jl(e,o,s,i))};function _S(e,o,a,s){if(s)return!!(o==="innerHTML"||o==="textContent"||o in e&&Hl(o)&&ie(a));if(o==="spellcheck"||o==="draggable"||o==="translate"||o==="autocorrect"||o==="sandbox"&&e.tagName==="IFRAME"||o==="form"||o==="list"&&e.tagName==="INPUT"||o==="type"&&e.tagName==="TEXTAREA")return!1;if(o==="width"||o==="height"){const n=e.tagName;if(n==="IMG"||n==="VIDEO"||n==="CANVAS"||n==="SOURCE")return!1}return Hl(o)&&ze(a)?!1:o in e}function zS(e,o){const a=e._def.props;if(!a)return!1;const s=po(o);return Array.isArray(a)?a.some(n=>po(n)===s):Object.keys(a).some(n=>po(n)===s)}const Qa=e=>{const o=e.props["onUpdate:modelValue"]||!1;return Z(o)?a=>qn(o,a):o};function JS(e){e.target.composing=!0}function Vl(e){const o=e.target;o.composing&&(o.composing=!1,o.dispatchEvent(new Event("input")))}const Uo=Symbol("_assign"),bn=Symbol("_initialValue");function zr(e,o,a){return o&&(e=e.trim()),a&&(e=Wn(e)),e}const Es={created(e,{modifiers:{lazy:o,trim:a,number:s}},n){e.parentNode&&(e.type==="text"?e[bn]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[bn]=e.defaultValue.replace(/\r\n?/g,`
`))),e[Uo]=Qa(n);const r=s||n.props&&n.props.type==="number";ma(e,o?"change":"input",i=>{i.target.composing||e[Uo](zr(e.value,a,r))}),(a||r)&&ma(e,"change",()=>{e.value=zr(e.value,a,r)}),o||(ma(e,"compositionstart",JS),ma(e,"compositionend",Vl),ma(e,"change",Vl))},mounted(e,{value:o,modifiers:{trim:a,number:s}}){const n=o??"",r=e[bn];delete e[bn],r!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==r?e[Uo](zr(e.value,a,s)):e.value=n},beforeUpdate(e,{value:o,oldValue:a,modifiers:{lazy:s,trim:n,number:r}},i){if(e[Uo]=Qa(i),e.composing)return;const t=(r||e.type==="number")&&!/^0\d/.test(e.value)?Wn(e.value):e.value,l=o??"";if(t===l)return;const u=e.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===e&&e.type!=="range"&&(s&&o===a||n&&e.value.trim()===l)||(e.value=l)}},ca={deep:!0,created(e,o,a){e[Uo]=Qa(a),ma(e,"change",()=>{const s=e._modelValue,n=Vs(e),r=e.checked,i=e[Uo];if(Z(s)){const t=Ji(s,n),l=t!==-1;if(r&&!l)i(s.concat(n));else if(!r&&l){const u=[...s];u.splice(t,1),i(u)}}else if(ss(s)){const t=new Set(s);r?t.add(n):t.delete(n),i(t)}else i(Vd(e,r))})},mounted:wl,beforeUpdate(e,o,a){e[Uo]=Qa(a),wl(e,o,a)}};function wl(e,{value:o,oldValue:a},s){e._modelValue=o;let n;if(Z(o))n=Ji(o,s.props.value)>-1;else if(ss(o))n=o.has(s.props.value);else{if(o===a)return;n=ns(o,Vd(e,!0))}e.checked!==n&&(e.checked=n)}const jS={deep:!0,created(e,{value:o,modifiers:{number:a}},s){e._modelValue=o,ma(e,"change",()=>{const n=Array.prototype.filter.call(e.options,r=>r.selected).map(r=>a?Wn(Vs(r)):Vs(r));e[Uo](e.multiple?ss(e._modelValue)?new Set(n):n:n[0]),e._assigning=!0,Ia(()=>{e._assigning=!1})}),e[Uo]=Qa(s)},mounted(e,{value:o}){Fl(e,o)},beforeUpdate(e,{value:o},a){e._modelValue=o,e[Uo]=Qa(a)},updated(e,{value:o}){e._assigning||Fl(e,o)}};function Fl(e,o){const a=e.multiple,s=Z(o);if(!(a&&!s&&!ss(o))){for(let n=0,r=e.options.length;n<r;n++){const i=e.options[n],t=Vs(i);if(a)if(s){const l=typeof t;l==="string"||l==="number"?i.selected=o.some(u=>String(u)===String(t)):i.selected=Ji(o,t)>-1}else i.selected=o.has(t);else if(ns(Vs(i),o)){e.selectedIndex!==n&&(e.selectedIndex=n);return}}!a&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Vs(e){return"_value"in e?e._value:e.value}function Vd(e,o){const a=o?"_trueValue":"_falseValue";return a in e?e[a]:o}const xS=We({patchProp:NS},vS);let kl;function US(){return kl||(kl=Kg(xS))}const HS=((...e)=>{const o=US().createApp(...e),{mount:a}=o;return o.mount=s=>{const n=wS(s);if(!n)return;const r=o._component;!ie(r)&&!r.render&&!r.template&&(r.template=n.innerHTML),n.nodeType===1&&(n.textContent="");const i=a(n,!1,VS(n));return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),i},o});function VS(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function wS(e){return ze(e)?document.querySelector(e):e}const FS="modulepreload",kS=function(e,o){return new URL(e,o).href},Bl={},te=function(o,a,s){let n=Promise.resolve();if(a&&a.length>0){let u=function(c){return Promise.all(c.map(m=>Promise.resolve(m).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};const i=document.getElementsByTagName("link"),t=document.querySelector("meta[property=csp-nonce]"),l=t?.nonce||t?.getAttribute("nonce");n=u(a.map(c=>{if(c=kS(c,s),c in Bl)return;Bl[c]=!0;const m=c.endsWith(".css"),f=m?'[rel="stylesheet"]':"";if(s)for(let O=i.length-1;O>=0;O--){const I=i[O];if(I.href===c&&(!m||I.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${f}`))return;const y=document.createElement("link");if(y.rel=m?"stylesheet":FS,m||(y.as="script"),y.crossOrigin="",y.href=c,l&&y.setAttribute("nonce",l),document.head.appendChild(y),m)return new Promise((O,I)=>{y.addEventListener("load",O),y.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(i){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=i,window.dispatchEvent(t),!t.defaultPrevented)throw i}return n.then(i=>{for(const t of i||[])t.status==="rejected"&&r(t.reason);return o().catch(r)})};function BS(e={}){const{immediate:o=!1,onNeedReload:a,onNeedRefresh:s,onOfflineReady:n,onRegistered:r,onRegisteredSW:i,onRegisterError:t}=e;let l,u;const c=async(f=!0)=>{await u};async function m(){if("serviceWorker"in navigator){if(l=await te(async()=>{const{Workbox:f}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:f}},[],import.meta.url).then(({Workbox:f})=>new f("./sw.js",{scope:"./",type:"classic"})).catch(f=>{t?.(f)}),!l)return;l.addEventListener("activated",f=>{(f.isUpdate||f.isExternal)&&(a?a():window.location.reload())}),l.addEventListener("installed",f=>{f.isUpdate||n?.()}),l.register({immediate:o}).then(f=>{i?i("./sw.js",f):r?.(f)}).catch(f=>{t?.(f)})}}return u=m(),c}/*! Capacitor: https://capacitorjs.com/ - MIT License */var Wa;(function(e){e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE"})(Wa||(Wa={}));class Jr extends Error{constructor(o,a,s){super(o),this.message=o,this.code=a,this.data=s}}const YS=e=>{var o,a;return e?.androidBridge?"android":!((a=(o=e?.webkit)===null||o===void 0?void 0:o.messageHandlers)===null||a===void 0)&&a.bridge?"ios":"web"},GS=e=>{const o=e.CapacitorCustomPlatform||null,a=e.Capacitor||{},s=a.Plugins=a.Plugins||{},n=()=>o!==null?o.name:YS(e),r=()=>n()!=="web",i=m=>{const f=u.get(m);return!!(f?.platforms.has(n())||t(m))},t=m=>{var f;return(f=a.PluginHeaders)===null||f===void 0?void 0:f.find(y=>y.name===m)},l=m=>e.console.error(m),u=new Map,c=(m,f={})=>{const y=u.get(m);if(y)return console.warn(`Capacitor plugin "${m}" already registered. Cannot register plugins twice.`),y.proxy;const O=n(),I=t(m);let _;const V=async()=>(!_&&O in f?_=typeof f[O]=="function"?_=await f[O]():_=f[O]:o!==null&&!_&&"web"in f&&(_=typeof f.web=="function"?_=await f.web():_=f.web),_),k=(x,W)=>{var ae,Ee;if(I){const Te=I?.methods.find(Ce=>W===Ce.name);if(Te)return Te.rtype==="promise"?Ce=>a.nativePromise(m,W.toString(),Ce):(Ce,He)=>a.nativeCallback(m,W.toString(),Ce,He);if(x)return(ae=x[W])===null||ae===void 0?void 0:ae.bind(x)}else{if(x)return(Ee=x[W])===null||Ee===void 0?void 0:Ee.bind(x);throw new Jr(`"${m}" plugin is not implemented on ${O}`,Wa.Unimplemented)}},J=x=>{let W;const ae=(...Ee)=>{const Te=V().then(Ce=>{const He=k(Ce,x);if(He){const Io=He(...Ee);return W=Io?.remove,Io}else throw new Jr(`"${m}.${x}()" is not implemented on ${O}`,Wa.Unimplemented)});return x==="addListener"&&(Te.remove=async()=>W()),Te};return ae.toString=()=>`${x.toString()}() { [capacitor code] }`,Object.defineProperty(ae,"name",{value:x,writable:!1,configurable:!1}),ae},M=J("addListener"),E=J("removeListener"),$=(x,W)=>{const ae=M({eventName:x},W),Ee=async()=>{const Ce=await ae;E({eventName:x,callbackId:Ce},W)},Te=new Promise(Ce=>ae.then(()=>Ce({remove:Ee})));return Te.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await Ee()},Te},H=new Proxy({},{get(x,W){switch(W){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return I?$:M;case"removeListener":return E;default:return J(W)}}});return s[m]=H,u.set(m,{name:m,proxy:H,platforms:new Set([...Object.keys(f),...I?[O]:[]])}),H};return a.convertFileSrc||(a.convertFileSrc=m=>m),a.getPlatform=n,a.handleError=l,a.isNativePlatform=r,a.isPluginAvailable=i,a.registerPlugin=c,a.Exception=Jr,a.DEBUG=!!a.DEBUG,a.isLoggingEnabled=!!a.isLoggingEnabled,a},QS=e=>e.Capacitor=GS(e),qo=QS(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),rs=qo.registerPlugin;class Xi{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(o,a){let s=!1;this.listeners[o]||(this.listeners[o]=[],s=!0),this.listeners[o].push(a);const r=this.windowListeners[o];r&&!r.registered&&this.addWindowListener(r),s&&this.sendRetainedArgumentsForEvent(o);const i=async()=>this.removeListener(o,a);return Promise.resolve({remove:i})}async removeAllListeners(){this.listeners={};for(const o in this.windowListeners)this.removeWindowListener(this.windowListeners[o]);this.windowListeners={}}notifyListeners(o,a,s){const n=this.listeners[o];if(!n){if(s){let r=this.retainedEventArguments[o];r||(r=[]),r.push(a),this.retainedEventArguments[o]=r}return}n.forEach(r=>r(a))}hasListeners(o){var a;return!!(!((a=this.listeners[o])===null||a===void 0)&&a.length)}registerWindowListener(o,a){this.windowListeners[a]={registered:!1,windowEventName:o,pluginEventName:a,handler:s=>{this.notifyListeners(a,s)}}}unimplemented(o="not implemented"){return new qo.Exception(o,Wa.Unimplemented)}unavailable(o="not available"){return new qo.Exception(o,Wa.Unavailable)}async removeListener(o,a){const s=this.listeners[o];if(!s)return;const n=s.indexOf(a);this.listeners[o].splice(n,1),this.listeners[o].length||this.removeWindowListener(this.windowListeners[o])}addWindowListener(o){window.addEventListener(o.windowEventName,o.handler),o.registered=!0}removeWindowListener(o){o&&(window.removeEventListener(o.windowEventName,o.handler),o.registered=!1)}sendRetainedArgumentsForEvent(o){const a=this.retainedEventArguments[o];a&&(delete this.retainedEventArguments[o],a.forEach(s=>{this.notifyListeners(o,s)}))}}const Yl=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Gl=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class WS extends Xi{async getCookies(){const o=document.cookie,a={};return o.split(";").forEach(s=>{if(s.length<=0)return;let[n,r]=s.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");n=Gl(n).trim(),r=Gl(r).trim(),a[n]=r}),a}async setCookie(o){try{const a=Yl(o.key),s=Yl(o.value),n=o.expires?`; expires=${o.expires.replace("expires=","")}`:"",r=(o.path||"/").replace("path=",""),i=o.url!=null&&o.url.length>0?`domain=${o.url}`:"";document.cookie=`${a}=${s||""}${n}; path=${r}; ${i};`}catch(a){return Promise.reject(a)}}async deleteCookie(o){try{document.cookie=`${o.key}=; Max-Age=0`}catch(a){return Promise.reject(a)}}async clearCookies(){try{const o=document.cookie.split(";")||[];for(const a of o)document.cookie=a.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(o){return Promise.reject(o)}}async clearAllCookies(){try{await this.clearCookies()}catch(o){return Promise.reject(o)}}}rs("CapacitorCookies",{web:()=>new WS});const KS=async e=>new Promise((o,a)=>{const s=new FileReader;s.onload=()=>{const n=s.result;o(n.indexOf(",")>=0?n.split(",")[1]:n)},s.onerror=n=>a(n),s.readAsDataURL(e)}),XS=(e={})=>{const o=Object.keys(e);return Object.keys(e).map(n=>n.toLocaleLowerCase()).reduce((n,r,i)=>(n[r]=e[o[i]],n),{})},ZS=(e,o=!0)=>e?Object.entries(e).reduce((s,n)=>{const[r,i]=n;let t,l;return Array.isArray(i)?(l="",i.forEach(u=>{t=o?encodeURIComponent(u):u,l+=`${r}=${t}&`}),l.slice(0,-1)):(t=o?encodeURIComponent(i):i,l=`${r}=${t}`),`${s}&${l}`},"").substr(1):null,eb=(e,o={})=>{const a=Object.assign({method:e.method||"GET",headers:e.headers},o),n=XS(e.headers)["content-type"]||"";if(typeof e.data=="string")a.body=e.data;else if(n.includes("application/x-www-form-urlencoded")){const r=new URLSearchParams;for(const[i,t]of Object.entries(e.data||{}))r.set(i,t);a.body=r.toString()}else if(n.includes("multipart/form-data")||e.data instanceof FormData){const r=new FormData;if(e.data instanceof FormData)e.data.forEach((t,l)=>{r.append(l,t)});else for(const t of Object.keys(e.data))r.append(t,e.data[t]);a.body=r;const i=new Headers(a.headers);i.delete("content-type"),a.headers=i}else(n.includes("application/json")||typeof e.data=="object")&&(a.body=JSON.stringify(e.data));return a};class ob extends Xi{async request(o){const a=eb(o,o.webFetchExtra),s=ZS(o.params,o.shouldEncodeUrlParams),n=s?`${o.url}?${s}`:o.url,r=await fetch(n,a),i=r.headers.get("content-type")||"";let{responseType:t="text"}=r.ok?o:{};i.includes("application/json")&&(t="json");let l,u;switch(t){case"arraybuffer":case"blob":u=await r.blob(),l=await KS(u);break;case"json":l=await r.json();break;case"document":case"text":default:l=await r.text()}const c={};return r.headers.forEach((m,f)=>{c[f]=m}),{data:l,headers:c,status:r.status,url:r.url}}async get(o){return this.request(Object.assign(Object.assign({},o),{method:"GET"}))}async post(o){return this.request(Object.assign(Object.assign({},o),{method:"POST"}))}async put(o){return this.request(Object.assign(Object.assign({},o),{method:"PUT"}))}async patch(o){return this.request(Object.assign(Object.assign({},o),{method:"PATCH"}))}async delete(o){return this.request(Object.assign(Object.assign({},o),{method:"DELETE"}))}}rs("CapacitorHttp",{web:()=>new ob});var Ql;(function(e){e.Dark="DARK",e.Light="LIGHT",e.Default="DEFAULT"})(Ql||(Ql={}));var Wl;(function(e){e.StatusBar="StatusBar",e.NavigationBar="NavigationBar"})(Wl||(Wl={}));class ab extends Xi{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}rs("SystemBars",{web:()=>new ab});/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kl=e=>e==="";/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=(...e)=>e.filter((o,a,s)=>!!o&&o.trim()!==""&&s.indexOf(o)===a).join(" ").trim();/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,a,s)=>s?s.toUpperCase():a.toLowerCase());/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=e=>{const o=nb(e);return o.charAt(0).toUpperCase()+o.slice(1)};/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var za={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=Symbol("lucide-icons");function tb(){return Ds(ib,{})}/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=({name:e,iconNode:o,"icon-node":a,absoluteStrokeWidth:s,"absolute-stroke-width":n,strokeWidth:r,"stroke-width":i,size:t,color:l,...u},{slots:c})=>{const{size:m,color:f,strokeWidth:y=2,absoluteStrokeWidth:O=!1,class:I=""}=tb(),_=U(()=>{const V=Kl(s)||Kl(n)||s===!0||n===!0||O===!0,k=r||i||y||za["stroke-width"];return V?Number(k)*24/Number(t??m??za.width):k});return gi("svg",{...za,...u,width:t??m??za.width,height:t??m??za.height,stroke:l??f??za.stroke,"stroke-width":_.value,class:sb("lucide",I,...e?[`lucide-${Xl(rb(e))}-icon`,`lucide-${Xl(e)}`]:["lucide-icon"])},[...(o??a??[]).map(V=>gi(...V)),...c.default?[c.default()]:[]])};/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=(e,o)=>(a,{slots:s,attrs:n})=>gi(lb,{...n,...a,iconNode:o,name:e},s.default?{default:s.default}:void 0);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],ub=me("book-marked",cb);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M16 13h2",key:"weia3s"}],["path",{d:"M16 9h2",key:"1n7gjm"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}],["path",{d:"M6 13h2",key:"1cckiz"}],["path",{d:"M6 9h2",key:"1k7j9f"}]],mb=me("book-open-text",db);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]],fb=me("book-open",pb);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M8 13h.01",key:"1sbv64"}],["path",{d:"M12 13h.01",key:"y0uutt"}],["path",{d:"M16 13h.01",key:"wip0gl"}],["path",{d:"M8 17h.01",key:"p3bg7i"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M16 17h.01",key:"ql8jdd"}]],Zl=me("calendar-days",gb);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],bi=me("chevron-left",Sb);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],wd=me("chevron-right",bb);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=[["path",{d:"m7 6 5 5 5-5",key:"1lc07p"}],["path",{d:"m7 13 5 5 5-5",key:"1d48rs"}]],yb=me("chevrons-down",vb);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=[["path",{d:"m17 11-5-5-5 5",key:"e8nh98"}],["path",{d:"m17 18-5-5-5 5",key:"2avn1x"}]],Eb=me("chevrons-up",hb);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6h4",key:"135r8i"}]],Pb=me("clock-3",Ab);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],Ib=me("flame",qb);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=[["path",{d:"m11.9 12.1 4.514-4.514",key:"109xqo"}],["path",{d:"M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z",key:"txyc8t"}],["path",{d:"m6 16 2 2",key:"16qmzd"}],["path",{d:"M8.23 9.85A3 3 0 0 1 11 8a5 5 0 0 1 5 5 3 3 0 0 1-1.85 2.77l-.92.38A2 2 0 0 0 12 18a4 4 0 0 1-4 4 6 6 0 0 1-6-6 4 4 0 0 1 4-4 2 2 0 0 0 1.85-1.23z",key:"1de1vg"}]],Cb=me("guitar",Ob);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Db=[["path",{d:"M10 18v-7",key:"wt116b"}],["path",{d:"M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z",key:"yxxwt6"}],["path",{d:"M14 18v-7",key:"vav6t3"}],["path",{d:"M18 18v-7",key:"aexdmj"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M6 18v-7",key:"1ivflk"}]],Rb=me("landmark",Db);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],Tb=me("message-square",$b);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=[["path",{d:"m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12",key:"80a601"}],["path",{d:"M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5",key:"j0ngtp"}],["circle",{cx:"16",cy:"7",r:"5",key:"d08jfb"}]],Mb=me("mic-vocal",Lb);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb=[["path",{d:"M18 5h4",key:"1lhgn2"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],_b=me("moon-star",Nb);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],Jb=me("moon",zb);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],xb=me("pause",jb);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Fd=me("play",Ub);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Vb=me("refresh-cw",Hb);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Fb=me("rotate-ccw",wb);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=[["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]],Bb=me("scroll",kb);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Gb=me("search",Yb);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=[["path",{d:"m10 20-1.25-2.5L6 18",key:"18frcb"}],["path",{d:"M10 4 8.75 6.5 6 6",key:"7mghy3"}],["path",{d:"m14 20 1.25-2.5L18 18",key:"1chtki"}],["path",{d:"m14 4 1.25 2.5L18 6",key:"1b4wsy"}],["path",{d:"m17 21-3-6h-4",key:"15hhxa"}],["path",{d:"m17 3-3 6 1.5 3",key:"11697g"}],["path",{d:"M2 12h6.5L10 9",key:"kv9z4n"}],["path",{d:"m20 10-1.5 2 1.5 2",key:"1swlpi"}],["path",{d:"M22 12h-6.5L14 15",key:"1mxi28"}],["path",{d:"m4 10 1.5 2L4 14",key:"k9enpj"}],["path",{d:"m7 21 3-6-1.5-3",key:"j8hb9u"}],["path",{d:"m7 3 3 6h4",key:"1otusx"}]],Wb=me("snowflake",Qb);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Xb=me("sparkles",Kb);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],ev=me("square",Zb);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],ec=me("sun",ov);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]],sv=me("sunrise",av);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=[["path",{d:"M12 10V2",key:"16sf7g"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m16 6-4 4-4-4",key:"6wukr"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]],rv=me("sunset",nv);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5",key:"hbey2j"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18",key:"1hf58s"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20",key:"pidxm4"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21",key:"1pehsh"}]],tv=me("swords",iv);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=[["path",{d:"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z",key:"oadzkq"}],["path",{d:"M12 19v3",key:"npa21l"}]],cv=me("tree-deciduous",lv);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=[["path",{d:"M16 17h6v-6",key:"t6n2it"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7",key:"x473p"}]],dv=me("trending-down",uv);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],pv=me("trending-up",mv);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]],gv=me("unlink",fv);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],bv=me("users",Sv);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],yv=me("video",vv);let Cn=null,vn=null;function hv(){return Cn?Promise.resolve(Cn):(vn||(vn=te(async()=>{const{Bible:e}=await import("./biblia-de-jerusalen.es-CSK_9JO8.js");return{Bible:e}},[],import.meta.url).then(({Bible:e})=>{const o=new e,a=o.getAllBooks().map(s=>{const n=o.getBook(s);return{name:s,abbreviation:n.abreviacion,testament:n.testamento,chapters:n.chapters}});return Cn=a,a}).catch(e=>{throw vn=null,e})),vn)}function Ev(){return Cn!==null}function Av(e,o){return e.find(a=>a.name===o)}function Pv(e,o){return e.chapters.find(a=>a.chapter===o)}function qv(e){return Object.entries(e.verses).filter(([,o])=>!!o).map(([o,a])=>({number:o,text:a})).sort((o,a)=>Number(o.number)-Number(a.number))}function Iv(e,o){const a=jr(o);return a?e.filter(s=>jr(s.name).includes(a)||jr(s.abbreviation).includes(a)):e}function jr(e){return e.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().trim()}function kd(){return typeof navigator<"u"&&navigator.onLine===!1}const vi=B(typeof navigator>"u"?!0:navigator.onLine!==!1);typeof window<"u"&&(window.addEventListener("online",()=>{vi.value=!0}),window.addEventListener("offline",()=>{vi.value=!1}));function Bd(e){if(kd())return!0;const o=e instanceof Error?`${e.name}: ${e.message}`:String(e??"");return/failed to fetch|networkerror|network error|load failed|err_internet|err_network|dynamically imported module|importing a module script failed|offline/i.test(o)}function Yd(e,o,a){return Bd(e)?a:o}const Ov={class:"reader-surface bible-surface"},Cv={class:"bible-header"},Dv={key:0,class:"loading-state"},Rv={key:1,class:"empty-state"},$v={class:"bible-search"},Tv={key:0,class:"empty-state"},Lv={key:0,class:"bible-group"},Mv={class:"section-eyebrow"},Nv={class:"bible-book-list"},_v=["onClick"],zv={key:0,class:"chapter-grid"},Jv=["onClick"],jv={key:1,class:"empty-state"},xv={key:0,class:"bible-text"},Uv={class:"verse-number"},Hv={key:1,class:"empty-state"},Vv={class:"chapter-nav"},wv=["disabled"],Fv=["disabled"],kv=or({__name:"BiblePage",props:{book:{},chapter:{}},emits:["select-book","select-chapter","back"],setup(e,{emit:o}){const a=e,s=o,n=B([]),r=B(!Ev()),i=B(""),t=B("");Ts(async()=>{try{n.value=await hv()}catch(J){i.value=Yd(J,"No se pudo abrir la Biblia. Vuelve a entrar en un momento.","Sin conexión: la Biblia aún no está guardada en el móvil. Ábrela una vez con red y después funcionará sin conexión.")}finally{r.value=!1}});const l=U(()=>Iv(n.value,t.value)),u=U(()=>l.value.filter(J=>J.testament==="Antiguo")),c=U(()=>l.value.filter(J=>J.testament==="Nuevo")),m=U(()=>a.book?Av(n.value,a.book):void 0),f=U(()=>{const J=m.value;return J&&a.chapter?Pv(J,a.chapter):void 0}),y=U(()=>f.value?qv(f.value):[]),O=U(()=>{const J=m.value;return!J||!a.chapter?-1:J.chapters.findIndex(M=>M.chapter===a.chapter)}),I=U(()=>{const J=m.value;return J&&O.value>0?J.chapters[O.value-1].chapter:null}),_=U(()=>{const J=m.value;return!J||O.value<0||O.value>=J.chapters.length-1?null:J.chapters[O.value+1].chapter}),V=U(()=>a.book&&a.chapter?"verses":a.book?"chapters":"books"),k=U(()=>{if(V.value==="books")return"Biblia de Jerusalén";const J=m.value?.name??a.book??"";return V.value==="verses"?`${J} ${a.chapter}`:J});return be(V,()=>window.scrollTo({top:0,behavior:"auto"})),be(()=>a.chapter,()=>window.scrollTo({top:0,behavior:"auto"})),(J,M)=>(R(),N("article",Ov,[b("div",Cv,[b("button",{type:"button",class:"icon-button","aria-label":"Volver",onClick:M[0]||(M[0]=E=>s("back"))},[Pe(pe(bi),{size:22})]),b("div",null,[M[4]||(M[4]=b("p",{class:"kicker"},"Biblia",-1)),b("h1",null,K(k.value),1)])]),r.value?(R(),N("div",Dv,[...M[5]||(M[5]=[b("span",null,null,-1),ea(" Cargando la Biblia ",-1)])])):i.value?(R(),N("div",Rv,K(i.value),1)):V.value==="books"?(R(),N(Se,{key:2},[b("label",$v,[Pe(pe(Gb),{size:18}),ao(b("input",{"onUpdate:modelValue":M[1]||(M[1]=E=>t.value=E),type:"search",placeholder:"Buscar libro","aria-label":"Buscar libro"},null,512),[[Es,t.value]])]),l.value.length?ue("",!0):(R(),N("p",Tv,"Ningún libro coincide con «"+K(t.value)+"».",1)),(R(!0),N(Se,null,yo([{title:"Antiguo Testamento",items:u.value},{title:"Nuevo Testamento",items:c.value}],E=>(R(),N(Se,{key:E.title},[E.items.length?(R(),N("section",Lv,[b("p",Mv,K(E.title),1),b("ul",Nv,[(R(!0),N(Se,null,yo(E.items,$=>(R(),N("li",{key:$.name},[b("button",{type:"button",class:"bible-book",onClick:H=>s("select-book",$.name)},[b("span",null,K($.name),1),b("small",null,K($.abbreviation),1)],8,_v)]))),128))])])):ue("",!0)],64))),128))],64)):V.value==="chapters"?(R(),N(Se,{key:3},[m.value?(R(),N("div",zv,[(R(!0),N(Se,null,yo(m.value.chapters,E=>(R(),N("button",{key:E.chapter,type:"button",class:"chapter-box",onClick:$=>s("select-chapter",E.chapter)},K(E.chapter),9,Jv))),128))])):(R(),N("p",jv,"No se encontró el libro «"+K(a.book)+"».",1))],64)):(R(),N(Se,{key:4},[y.value.length?(R(),N("div",xv,[(R(!0),N(Se,null,yo(y.value,E=>(R(),N("p",{key:E.number},[b("small",Uv,K(E.number),1),ea(" "+K(E.text),1)]))),128))])):(R(),N("p",Hv,"No se encontró ese capítulo.")),b("div",Vv,[b("button",{type:"button",class:"text-button",disabled:!I.value,onClick:M[2]||(M[2]=E=>I.value&&s("select-chapter",I.value))},[Pe(pe(bi),{size:18}),M[6]||(M[6]=ea(" Anterior ",-1))],8,wv),b("button",{type:"button",class:"text-button",disabled:!_.value,onClick:M[3]||(M[3]=E=>_.value&&s("select-chapter",_.value))},[M[7]||(M[7]=ea(" Siguiente ",-1)),Pe(pe(wd),{size:18})],8,Fv)])],64))]))}}),yi=[{number:6,name:"E",latin:"Mi",frequency:82.41},{number:5,name:"A",latin:"La",frequency:110},{number:4,name:"D",latin:"Re",frequency:146.83},{number:3,name:"G",latin:"Sol",frequency:196},{number:2,name:"B",latin:"Si",frequency:246.94},{number:1,name:"E",latin:"Mi",frequency:329.63}],Bv=5,oc=60,ac=500,Yv=.008,Gv=.9;function Qv(e,o){const a=e.length;if(a<512)return null;let s=0;for(let f=0;f<a;f+=1)s+=e[f];s/=a;const n=new Float32Array(a);let r=0;for(let f=0;f<a;f+=1){const y=e[f]-s;n[f]=y,r+=y*y}if(Math.sqrt(r/a)<Yv)return null;const i=Math.max(2,Math.floor(o/ac)),t=Math.min(a-1,Math.ceil(o/oc));if(t<=i)return null;const l=new Float32Array(t+1);for(let f=1;f<=t;f+=1){let y=0,O=0;const I=a-f;for(let _=0;_<I;_+=1){const V=n[_],k=n[_+f];y+=V*k,O+=V*V+k*k}l[f]=O>0?2*y/O:0}const u=Wv(l,i,t);if(u===null)return null;const c=Kv(l,u),m=o/c;return m<oc||m>ac?null:{frequency:m,clarity:Math.min(1,Math.max(0,l[u]))}}function Wv(e,o,a){const s=[];let n=1;for(;n<=a&&e[n]>0;)n+=1;for(;n<a;n+=1)if(e[n]>e[n-1]&&e[n]>=e[n+1])for(n>=o&&s.push(n);n<a&&e[n+1]>=0;)n+=1;if(!s.length)return null;let r=s[0];for(const t of s)e[t]>e[r]&&(r=t);if(e[r]<Gv)return null;const i=e[r]*.9;for(const t of s)if(e[t]>=i)return t;return r}function Kv(e,o){const a=e[o-1]??e[o],s=e[o+1]??e[o],n=2*(2*e[o]-a-s);if(!Number.isFinite(n)||n===0)return o;const r=(s-a)/n;return Math.abs(r)<1?o+r:o}function Xv(e){let o=yi[0],a=sc(e,o.frequency);for(const s of yi){const n=sc(e,s.frequency);Math.abs(n)<Math.abs(a)&&(o=s,a=n)}return{string:o,cents:a}}function sc(e,o){return 1200*Math.log2(e/o)}function Zv(e,o){switch(ey(e)){case"NotAllowedError":case"PermissionDeniedError":return o?"Sin permiso de micrófono: actívalo en Ajustes > Apps > Laudes > Permisos":"Sin permiso de micrófono: permítelo en el navegador";case"SecurityError":return"El navegador bloquea el micrófono en esta página";case"NotFoundError":case"DevicesNotFoundError":case"OverconstrainedError":return"No se encuentra ningún micrófono";case"NotReadableError":case"TrackStartError":case"AbortError":return"El micrófono está ocupado por otra app";case"NoMediaDevices":return"Este navegador no deja usar el micrófono";default:return"No se pudo abrir el micrófono"}}function ey(e){return e&&typeof e=="object"&&"name"in e&&typeof e.name=="string"?e.name:""}const oy={class:"tool-panel tuner-panel"},ay={class:"panel-title panel-title-preces"},sy=["aria-pressed","aria-label"],ny={class:"tuner-note"},ry={key:1},iy={class:"tuner-gauge",role:"presentation"},ty={class:"tuner-hint","aria-live":"polite"},ly={key:0},cy={key:1},uy={class:"tuner-strings"},dy={key:1,class:"tuner-hint tuner-hint-error"},my=70,xr=50,py=1200,fy=.35,gy=or({__name:"GuitarTuner",setup(e){const o=B(!1),a=B(""),s=B(null);let n=null,r=null,i=null,t=null,l=null,u=null,c=null,m=0;const f=U(()=>s.value===null?null:Xv(s.value)),y=U(()=>f.value?Math.round(f.value.cents):0),O=U(()=>f.value!==null&&Math.abs(f.value.cents)<=Bv),I=U(()=>f.value?50+Math.max(-xr,Math.min(xr,f.value.cents))/xr*50:50),_=U(()=>a.value?a.value:f.value?O.value?"Afinada":"":"Pulsa una cuerda");function V(){o.value?J():k()}async function k(){a.value="";try{if(!navigator.mediaDevices?.getUserMedia)throw Object.assign(new Error("mediaDevices no disponible"),{name:"NoMediaDevices"});r=await navigator.mediaDevices.getUserMedia({audio:{autoGainControl:!1,echoCancellation:!1,noiseSuppression:!1}});const $=window.AudioContext??window.webkitAudioContext;n=new $,n.state==="suspended"&&await n.resume(),i=n.createAnalyser(),i.fftSize=2048,u=new Float32Array(i.fftSize),t=n.createMediaStreamSource(r),t.connect(i),o.value=!0,m=performance.now(),l=window.setInterval(M,my)}catch($){J(),console.warn("[afinador] getUserMedia falló",$),a.value=Zv($,qo.isNativePlatform())}}function J(){l!==null&&(window.clearInterval(l),l=null),t?.disconnect(),i?.disconnect(),r?.getTracks().forEach($=>$.stop()),n?.close().catch(()=>{}),t=null,i=null,r=null,n=null,u=null,c=null,s.value=null,o.value=!1}function M(){if(!i||!u||!n)return;i.getFloatTimeDomainData(u);const $=Qv(u,n.sampleRate),H=performance.now();if(!$){H-m>py&&(s.value=null,c=null);return}m=H,c=c===null||Math.abs(1200*Math.log2($.frequency/c))>200?$.frequency:c+($.frequency-c)*fy,s.value=c}function E(){document.hidden&&o.value&&J()}return document.addEventListener("visibilitychange",E),Qi(()=>{document.removeEventListener("visibilitychange",E),J()}),($,H)=>(R(),N("section",oy,[b("div",ay,[H[0]||(H[0]=b("span",{class:"panel-title-spacer","aria-hidden":"true"},null,-1)),H[1]||(H[1]=b("div",null,[b("p",{class:"home-date"},"Afinador")],-1)),b("button",{type:"button",class:Re(["tuner-power-button",{active:o.value}]),"aria-pressed":o.value,"aria-label":o.value?"Apagar el afinador":"Encender el afinador",onClick:V},[Pe(pe(Cb),{size:16})],10,sy)]),o.value?(R(),N("div",{key:0,class:Re(["tuner-readout",{"is-tuned":O.value,"is-idle":!f.value}])},[b("p",ny,[f.value?(R(),N(Se,{key:0},[b("strong",null,K(f.value.string.latin),1),b("small",null,K(f.value.string.name)+" · "+K(f.value.string.number)+"ª",1)],64)):(R(),N("strong",ry,"—"))]),b("div",iy,[H[2]||(H[2]=b("span",{class:"tuner-gauge-center","aria-hidden":"true"},null,-1)),b("span",{class:"tuner-needle",style:Ws({left:`${I.value}%`}),"aria-hidden":"true"},null,4)]),b("p",ty,[_.value?(R(),N("span",ly,K(_.value),1)):ue("",!0),f.value?(R(),N("small",cy,K(y.value>0?"+":"")+K(y.value),1)):ue("",!0)]),b("ul",uy,[(R(!0),N(Se,null,yo(pe(yi),x=>(R(),N("li",{key:x.number,class:Re({active:f.value?.string.number===x.number,tuned:O.value&&f.value?.string.number===x.number})},K(x.name),3))),128))])],2)):a.value?(R(),N("p",dy,K(a.value),1)):ue("",!0)]))}}),Sy=[{key:"greg",label:"Gregoriano",capo:1,voices:3,chords:"DO SOL / DO la / FA SOL DO",icon:"Scroll"},{key:"desc",label:"Descendente",capo:1,voices:4,chords:"DO / la / FA re / SOL",icon:"TrendingDown"},{key:"cruz-fiel",label:"Oh Cruz Fiel",capo:2,chords:"Estribillo: la FA SOL la / la FA SOL la / FA SOL DO / la re la / FA SOL DO / FA la SOL DO — Estrofas: DO FA SOL DO / re FA la / FA DO SOL / FA SOL la",chordSheet:`[la]¡Oh cruz fiel, árbol [FA]únic[SOL]o en nob[la]leza!
[la]Jamás el bosque [FA]dio me[SOL]jor [la]tributo
[FA]en hoja, en [SOL]flor y en [DO]fruto.
[la]¡Dulces clavos! ¡[re]Dulce [la]árbol
[FA]donde la [SOL]Vida empie[DO]za
con un [FA]peso tan [la]dulce en [SOL]su cort[DO]eza!

[DO]Vinagre y sed la [FA]boca, apenas [SOL]gime;[DO]
[re]y, al golpe de los [FA]clavos y l[la]a lanza,
[FA]un mar de sangre [DO]fluye, inunda,[SOL] avanza
[FA]por tierra, mar y[SOL] cielo, y lo[la]s redime.

[la]¡Oh cruz fiel, árbol [FA]único[SOL] en nob[la]leza!
[la]Jamás el bosque [FA]dio me[SOL]jor [la]tributo
[FA]en hoja, en [SOL]flor y en [DO]fruto.
[la]¡Dulces clavos! ¡[re]Dulce [la]árbol
[FA]donde la [SOL]Vida empie[DO]za
con un [FA]peso tan [la]dulce en [SOL]su cort[DO]eza!

[DO]Ablándate, madero[FA], tronco abru[SOL]pto[DO]
[re]de duro corazón y f[FA]ibra inert[la]e;
[FA]doblégate a este [DO]peso y esta mu[SOL]erte
[FA]que cuelga de tus[SOL] ramas como [la]un fruto.

[la]¡Oh cruz fiel, árbol [FA]único[SOL] en nob[la]leza!
[la]Jamás el bosque [FA]dio me[SOL]jor [la]tributo
[FA]en hoja, en [SOL]flor y en [DO]fruto.
[la]¡Dulces clavos! ¡[re]Dulce [la]árbol
[FA]donde la [SOL]Vida empie[DO]za
con un [FA]peso tan [la]dulce en [SOL]su cort[DO]eza!

[DO]Tú, solo entre lo[FA]s árboles, cr[SOL]ecido[DO]
[re]para tender a Crist[FA]o en tu re[la]gazo;
[FA]tú, el arca que n[DO]os salva; tú, [SOL]el abrazo
[FA]de Dios con los v[SOL]erdugos del [la]Ungido.

[la]¡Oh cruz fiel, árbol [FA]único[SOL] en nob[la]leza!
[la]Jamás el bosque [FA]dio me[SOL]jor [la]tributo
[FA]en hoja, en [SOL]flor y en [DO]fruto.
[la]¡Dulces clavos! ¡[re]Dulce [la]árbol
[FA]donde la [SOL]Vida empie[DO]za
con un [FA]peso tan [la]dulce en [SOL]su cort[DO]eza!

[DO]Al Dios de los de[FA]signios de la[SOL] histo[DO]ria,
[re]que es Padre, Hijo [FA]y Espíritu[la], alabanza;
[FA]al que en la cruz[DO] devuelve la e[SOL]speranza
[FA]de toda salvación[SOL], honor y gl[la]oria.

[la]¡Oh cruz fiel, árbol [FA]único[SOL] en nob[la]leza!
[la]Jamás el bosque [FA]dio me[SOL]jor [la]tributo
[FA]en hoja, en [SOL]flor y en [DO]fruto.
[la]¡Dulces clavos! ¡[re]Dulce [la]árbol
[FA]donde la [SOL]Vida empie[DO]za
con un [FA]peso tan [la]dulce en [SOL]su cort[DO]eza!`,icon:"TreeDeciduous"}],Ur=[{key:"tatotaton",label:"Tatotatón",capo:4,voices:4,chords:"la / SOL DO / la / FA mi la",icon:"ChevronsDown"},{key:"tatitaton",label:"Tatitatón",capo:3,voices:2,chords:"la / DO SOL (flexa: la SOL)",icon:"ChevronsUp"},{key:"clasica",label:"Clásica",capo:4,voices:2,chords:"la DO / re MI la (flexa: la SOL)",icon:"Landmark"},{key:"arabe",label:"Árabe",capo:3,voices:2,chords:"re la / SOL re (flexa: re DO)",icon:"MoonStar"},{key:"rota",label:"Rota",capo:5,voices:2,chords:"DO SOL la / FA SOL DO (flexa: DO FA)",icon:"Unlink"},{key:"ascendente",label:"Ascendente",capo:1,voices:4,chords:"DO SOL / SOL la / la FA / FA SOL",icon:"TrendingUp"},{key:"epica",label:"Épica",capo:5,voices:4,chords:"DO SOL la / mi re / FA re / re SOL DO",icon:"Swords"},{key:"narnia",label:"Narnia",capo:1,voices:4,chords:"si MI / MI si / RE LA / fa# si",icon:"Snowflake"}],by=[{key:"invocacion",label:"Invocación inicial",capo:1,chords:"mi (si) / DO RE / mi DO mi / DO mi / DO RE mi (RE mi)",icon:"Flame"}],vy=[{key:"responsorio",label:"Responsorio breve",capo:3,voices:2,chords:"RE LA / SOL RE",icon:"MessageSquare"}],yy=[{key:"zacarias",label:"Cántico de Zacarías",capo:2,voices:4,chords:"DO SOL / mi la / FA DO / re SOL DO",icon:"Mic2"}],hy=[{key:"padrenuestro",label:"Padrenuestro",capo:1,chords:"DO FA DO / DO SOL DO / DO FA DO / DO SOL mi SOL la / DO FA DO / DO SOL mi SOL la / FA DO / DO SOL DO",icon:"Users"}],Ns={"Invocación inicial":by,Himno:Sy,"Primer salmo":Ur,"Segundo salmo":Ur,"Tercer salmo":Ur,"Responsorio breve":vy,"Cántico de Zacarías":yy,Padrenuestro:hy},hi={"Invocación inicial":"invocacion",Himno:"greg","Primer salmo":"tatotaton","Segundo salmo":"tatitaton","Tercer salmo":"ascendente","Responsorio breve":"responsorio","Cántico de Zacarías":"zacarias",Padrenuestro:"padrenuestro"};function Ey(e,o){return Ns[e]?.find(a=>a.key===o)}const Ay=/<\/?[a-z][\s\S]*>/i;function Qe(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Ei(e){return e.replace(/^\[\[ANTIPHON\]\]\s*(.*)$/gm,'<span class="antiphon-line"><span class="rubric">Ant.</span> $1</span>').replace(/\[\[REPEATED_?ANTIPHON\]\]\s*([^<\n\r]*)/g,'<span class="repeated-antiphon"><span class="rubric">R.</span> $1</span>').replace(/^\[\[READING_REFERENCE\]\]\s*(.*)$/gm,'<span class="reading-reference-line">$1</span>').replace(/^\[\[MASS_READING_PROCLAMATION\]\]\s*(.*)$/gm,'<span class="mass-reading-proclamation"><span class="rubric">Lector.</span> $1</span>').replace(/\[\[RESPONSORY_SPLIT\]\]/g,'<span class="responsory-split-mark" aria-hidden="true">|</span>').replace(/\$([^$]+)\$/g,(o,a)=>`<span class="${By(a)?"rubric posture-instruction":"rubric"}">${a}</span>`).replace(/_([^_]+)_/g,"<em>$1</em>").replace(/(^|\n)\s*(V\.|R\.|Ant\.|\u2123\.|\u211F\.)/g,'$1<span class="rubric">$2</span>')}function Gd(e){return e.includes("antiphon-line")||e.includes("repeated-antiphon")}function Sa(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function is(e){return Sa(e.replace(/<[^>]*>/g," ")).replace(/[^a-z0-9]+/g," ").replace(/\s+/g," ").trim()}const Py="gloria al padre y al hijo y al espiritu santo como era en el principio ahora y siempre por los siglos de los siglos amen",qy="Inclinamos la cabeza mientras decimos:";function ir(e){const o=e.map(is).filter(Boolean);return o.length>0&&o.join(" ")===Py}function Fo(e,o){return e.map((a,s)=>({label:a,lines:o[s]?[o[s]]:[]})).filter(a=>a.lines.length)}const Zi='(?:"|&quot;|»|”)?',tr=new RegExp(`[.!?]${Zi}\\s*$`),Qd=new RegExp(`[.;:!?]${Zi}\\s*$`),Wd=new RegExp(`,${Zi}\\s*$`);function et(e){const o=e.trim();return Qd.test(o)?1e4:Wd.test(o)?8:0}function Iy(e){return tr.test(e.trim())?5e3:0}function Oy(e,o){const a=e.trim(),s=o.trim(),n=/[»”](?:[,;:.!?])?$/.test(a)||/(?:"|&quot;)(?:[,;:.!?])?$/.test(a),r=(/[«“]/.test(a)||/^(?:"|&quot;)/.test(a))&&!n,i=/[»”]/.test(s)||/(?:"|&quot;)$/.test(s);return r&&i?-220:r||i?-90:0}function Kd(e,o){return et(e)+Xd([e,o])*.08+Oy(e,o)}function Xd(e){return e.join(" ").replace(/\s+/g,"").length}function Zd(e){return e.length<=1?0:e.slice(0,-1).reduce((o,a,s)=>o+Kd(a,e[s+1]),0)}function Cy(e){return e.reduce((o,a)=>{let s=0;return o+a.groups.reduce((n,r)=>{const i=r.lines.length>1?s*.12:0;return s+=r.lines.length,n+Zd(r.lines)+i},0)},0)}function Dy(e){return e.reduce((o,a)=>o+a.groups.reduce((s,n)=>n.lines.length<=1?s:s+n.lines.slice(0,-1).filter(r=>et(r)>=1e4).length,0),0)}function je(e,o){return{chunks:o,hardJoins:Dy(o),pattern:e,score:Cy(o)}}function nc(e,o){const a=[];let s;for(const n of o){const r=n.groups.flatMap(t=>t.lines);if(n.groups.length===1&&n.groups[0].label==="F"){s=r;continue}a.push(s?[...s,...r]:r),s=void 0}return s&&a.push(s),{chunks:o,hardJoins:a.reduce((n,r)=>n+(r.length<=1?0:r.slice(0,-1).filter(i=>et(i)>=1e4).length),0),pattern:e,score:a.reduce((n,r)=>n+Zd(r)+r.slice(0,-1).reduce((i,t)=>i+Iy(t),0),0)}}function ka(e,o,a,s,n=0){const r=je(e,Ai(o,a,s));return{...r,score:r.score+n}}function Hr(e,o){const a=[];function s(r){a.push({groups:Fo(["1","2"],r)})}function n(r){r[0]&&a.push({groups:[{label:"F",lines:[r[0]]}]});const i=r.slice(1);i.length&&s(i)}if(e.length%2===0){for(let r=0;r<e.length;r+=2)s(e.slice(r,r+2));return a}if(o){n(e.slice(0,3));for(let r=3;r<e.length;r+=2)s(e.slice(r,r+2));return a}for(let r=0;r<e.length-3;r+=2)s(e.slice(r,r+2));return n(e.slice(-3)),a}function ot(e){return e<=1?["1"]:e===2?["1","4"]:e===3?["1","2","4"]:["1","2","3","4"]}function at(e,o){return o===2?["1","3"]:e===2?["1","2"]:e===3?["1","2","3"]:["1","2","3","4"]}function Ry(e,o){const a=[],s=e<=o*2?2:Math.max(2,Math.ceil(e/o)+1);function n(r,i,t){if(t===0){i===0&&a.push(r);return}const l=t-1,u=Math.min(s,i-l);for(let c=1;c<=u;c+=1)n([...r,c],i-c,t-1)}return n([],e,o),a}function Ai(e,o,a){let s=0;return[{groups:a.map((n,r)=>{const i=e.slice(s,s+n);return s+=n,{label:o[r]??String(r+1),lines:i}}).filter(n=>n.lines.length)}]}function Vr(e,o){return Xd(e.slice(o,o+2))}function $y(e){const o=ka("2-1-1",e,["1","2","3"],[2,1,1]),a=ka("1-2-1",e,["1","2","3"],[1,2,1]),s=ka("1-1-2",e,["1","2","3"],[1,1,2]),n=Math.min(Vr(e,1),Vr(e,2));return!(Vr(e,0)>n*2)&&o.hardJoins===0?[{...o,score:o.score-120},a,s]:[o,a,s]}function em(e){return[ka("2-1-1",e,["1","2","3"],[2,1,1])]}function Ty(e,o){const a=Math.floor(e/o),s=e%o;return Array.from({length:o},(n,r)=>a+(r<s?1:0))}function Ly(e){const o=new Map;for(const a of e){const s=o.get(a.pattern);(!s||a.score<s.score)&&o.set(a.pattern,a)}return[...o.values()]}function om(e){if(e.length!==5)return!1;const o=e.map(Sa);return o[0].startsWith("es la salvacion")&&o[1].startsWith("y de la mano")&&o[3].startsWith("recordando")&&o[4].startsWith("y el juramento")}function am(e){if(e.length!==5)return!1;const o=e.map(a=>Sa(a).trim());return o[0].startsWith("y a ti, nino")&&o[1].startsWith("porque iras delante del senor")&&o[2].startsWith("a preparar sus caminos")&&o[3].startsWith("anunciando a su pueblo la salvacion")&&o[4].startsWith("el perdon de sus pecados")}function sm(e){if(e.length!==5)return!1;const o=e.map(a=>Sa(a).trim());return o[0].startsWith("librame de la sangre")&&o[1].startsWith("dios salvador mio")&&o[2].startsWith("y cantara mi lengua")&&o[3].startsWith("senor, me abriras los labios")&&o[4].startsWith("y mi boca proclamara tu alabanza")}function My(e){if(e.length!==4)return!1;const o=e.map(a=>Sa(a).trim());return o[0].startsWith("tiene sed de dios")&&o[1].startsWith("del dios vivo")&&o[2].includes("cuando entrare a ver")&&o[3].startsWith("el rostro de dios")}function Ny(e){const o=Sa(e[0]??"").trim();if(e.length===3&&(o.startsWith("el la ha cimentado sobre el monte santo")||o.startsWith("se dira de sion")))return 3;if(e.length===6&&o.replace(/^[¡!]/,"").startsWith("que pregon tan glorioso para ti"))return 6;if(e.length===4&&o.startsWith("el senor escribira en el registro de los pueblos"))return 4}function _y(e,o){if(o===4)return[{groups:[{label:"F",lines:[e[0]]}]},{groups:[{label:"",lines:[e[1]]},{label:"",lines:[e[2],e[3]]}]}];const a=o===3?[{label:"",lines:[e[2]]}]:[{label:"",lines:[e[2],e[3]]},{label:"",lines:[e[4],e[5]]}];return[{groups:[{label:"F",lines:[e[0],e[1]]}]},{groups:a}]}function zy(e){return[{groups:[{label:"F",lines:[e[0],e[1]]}]},{groups:Fo(["1","2"],[e[2],e[3]])}]}function Pi(e){if(e.length!==5)return!1;const o=e.map(a=>Sa(a).trim());return o[0].startsWith("los sacrificios no te satisfacen")&&o[1].startsWith("si te ofreciera un holocausto")&&o[2].startsWith("mi sacrificio es un espiritu quebrantado")&&o[3].startsWith("un corazon quebrantado")&&o[4].startsWith("tu no lo desprecias")}function nm(e){if(e.length!==5)return!1;const o=e.map(a=>Sa(a).trim());return o[0].includes("favorece a sion")&&o[1].includes("murallas de jerusalen")&&o[2].startsWith("entonces aceptaras los sacrificios rituales")&&o[3].startsWith("ofrendas y holocaustos")&&o[4].includes("se inmolaran novillos")}function rm(e,o){const a=e.map(s=>[s]);for(;a.length>o;){const s=a.some((i,t)=>i.length===1&&a[t+1]?.length===1);let n=0,r=Number.POSITIVE_INFINITY;for(let i=0;i<a.length-1;i+=1){const t=a[i],l=a[i+1],u=t.length>1||l.length>1;if(s&&u)continue;const c=u?1e4:0,m=i===a.length-2?8:0,f=Kd(t[t.length-1],l[0])+c+m;f<r&&(r=f,n=i)}a.splice(n,2,[...a[n],...a[n+1]])}return{groups:a.map((s,n)=>({label:String(n+1),lines:s}))}}function Jy(e){if(e.length<=3)return[{groups:Fo(at(3,e.length),e)}];if(e.length%3===0){const o=[];for(let a=0;a<e.length;a+=3)o.push({groups:Fo(["1","2","3"],e.slice(a,a+3))});return o}return[rm(e,3)]}function Ja(e){if(e.length<=4)return[{groups:Fo(ot(e.length),e)}];if(om(e))return[{groups:[{label:"1",lines:[e[0]]},{label:"2",lines:[e[1]]},{label:"3",lines:[e[2]]},{label:"4",lines:[e[3],e[4]]}]}];if(am(e))return[{groups:[{label:"1",lines:[e[0]]},{label:"2",lines:[e[1],e[2]]},{label:"3",lines:[e[3]]},{label:"4",lines:[e[4]]}]}];if(sm(e))return[{groups:[{label:"1",lines:[e[0],e[1]]},{label:"2",lines:[e[2]]},{label:"3",lines:[e[3]]},{label:"4",lines:[e[4]]}]}];if(Pi(e))return[{groups:[{label:"1",lines:[e[0]]},{label:"2",lines:[e[1]]},{label:"3",lines:[e[2]]},{label:"4",lines:[e[3],e[4]]}]}];if(nm(e))return[{groups:[{label:"1",lines:[e[0]]},{label:"2",lines:[e[1]]},{label:"3",lines:[e[2],e[3]]},{label:"4",lines:[e[4]]}]}];if(e.length%4===0){const o=[];for(let a=0;a<e.length;a+=4){const s={groups:Fo(["1","2","3","4"],e.slice(a,a+4))};o.push(a?{...s,passRestart:!0}:s)}return o}return[rm(e,4)]}function jy(e){const o=e.length/2;let a,s=Number.POSITIVE_INFINITY,n,r=Number.POSITIVE_INFINITY,i=!1;for(let t=0;t<e.length;t+=1){const l=e[t];if(l==="<"){i=!0;continue}if(l===">"){i=!1;continue}if(i||l!==" ")continue;const u=Math.abs(t-o);t>0&&/[,;:.]/.test(e[t-1])&&u<s&&(a=t,s=u),u<r&&(n=t,r=u)}return a??n??-1}function xy(e){const o=jy(e);if(o<0)return e;const a=e.slice(0,o).trimEnd(),s=e.slice(o).trimStart();return!a||!s?e:`${a} ${st()} ${s}`}function rc(e){const o=e.replace(/<[^>]*>/g,"").trim();if(!o||tr.test(o))return!1;const a=o.replace(/[¡!¿?.,;:"'«»“”‘’]/g,"").trim();return a.length>0&&!/\s/.test(a)}function ic(e,o){return`${e.trimEnd()} ${o.trimStart()}`}function im(e){if(e.length<=1)return e;const o=[];let a=0;for(;a<e.length;){const s=e[a],n=a===e.length-1;if(!n&&rc(s)){o.push(ic(s,e[a+1])),a+=2;continue}if(n&&rc(s)&&o.length>0){const r=o[o.length-1];if(!tr.test(r.replace(/<[^>]*>/g,"").trim())){o[o.length-1]=ic(r,s),a+=1;continue}}o.push(s),a+=1}return o}const uo=4,As=uo*2,fs=uo-1,Uy=As-1,yn={sentence:0,clause:40,comma:90,enjambment:260};function Hy(e){const o=e.replace(/<[^>]*>/g,"").trim();return tr.test(o)?yn.sentence:Qd.test(o)?yn.clause:Wd.test(o)?yn.comma:yn.enjambment}function Vy(e,o){return o.hymnNotation?e.length===As?[[uo,uo]]:e.length===As+2?[[uo,uo,2]]:e.length===As+3?[[uo,uo,fs],[uo,fs,uo],[fs,uo,uo]]:e.length===Uy&&o.stanzaLineCounts.includes(As)?[[fs,uo],[uo,fs]]:[]:[]}function wy(e,o){return o===4?[je(`p${e.length}`,[{groups:Fo(ot(e.length),e)}])]:e.length===uo?em(e):[je(`p${e.length}`,[{groups:Fo(at(3,e.length),e)}])]}function tc(e,o,a){if(!a)return;const s=Vy(e,a);if(!s.length)return;const n=[];for(const r of s){let i=0,t=0;const l=[];for(const c of r)l.push(wy(e.slice(t,t+c),o)),t+=c,t<e.length&&(i+=Hy(e[t-1]));let u=[{chunks:[],hardJoins:0,pattern:`pass-${r.join("-")}`,score:i}];l.forEach((c,m)=>{u=u.flatMap(f=>c.map(y=>({chunks:[...f.chunks,...y.chunks.map(O=>m?{...O,passRestart:!0}:O)],hardJoins:f.hardJoins+y.hardJoins,pattern:`${f.pattern}${m?"|":":"}${y.pattern}`,score:f.score+y.score})))}),n.push(...u)}return n}function tm(e,o,a){if((o===2||o===4)&&e.length===1)return[je("single-line-split",[{groups:[{label:"",lines:[xy(e[0])]}]}])];if(o===2)return e.length<=1?[je("F",[{groups:[{label:"F",lines:e}]}])]:My(e)?[je("psalm-thirst-for-god",zy(e))]:e.length%2===0?[je("pairs",Hr(e,!0))]:Ly([nc("leading-free",Hr(e,!0)),nc("trailing-free",Hr(e,!1))]);if(o===3){const i=im(e),t=tc(i,3,a);return t||(i.length<=3?[je(`short-${i.length}`,[{groups:Fo(at(3,i.length),i)}])]:i.length===4?a?.hymnNotation?em(i):$y(i):Pi(i)?[ka("1-2-2",i,["1","2","3"],[1,2,2])]:i.length===6?[ka("2-2-2",i,["1","2","3"],[2,2,2])]:i.length%3===0?[je("triples",Jy(i))]:Ry(i.length,3).map(l=>je(l.join("-"),Ai(i,["1","2","3"],l))))}const s=tc(e,4,a);if(s)return s;const n=Ny(e);if(n)return[je("psalm-86-pairs",_y(e,n))];if(e.length<=4)return[je(`short-${e.length}`,[{groups:Fo(ot(e.length),e)}])];if(om(e))return[je("benedictus-salvation",Ja(e))];if(am(e))return[je("benedictus-prophet",Ja(e))];if(sm(e))return[je("psalm-50-blood",Ja(e))];if(Pi(e))return[je("psalm-50-sacrifice-spirit",Ja(e))];if(nm(e))return[je("psalm-50-sion-sacrifices",Ja(e))];if(e.length%4===0)return[je("fours",Ja(e))];const r=Ty(e.length,4);return[je(r.join("-"),Ai(e,["1","2","3","4"],r))]}function lm(e,o,a){return tm(e,o,a).reduce((s,n)=>n.score<s.score?n:s).chunks}function cm(e){return Array.from({length:e},(o,a)=>String(a+1))}function Fy(e,o){const a=cm(o);return e.groups.length===a.length&&e.groups.every((s,n)=>s.label===a[n]&&s.lines.length===1)}function ky(e,o={}){const a=o.mode?cm(o.mode):[],s=a.length>0&&e.groups.length===a.length&&e.groups.every((l,u)=>l.label===a[u]),n=e.groups.length===1&&(e.groups[0].label==="F"||e.groups[0].label==="")?" is-free-only":"",r=o.minimal?" is-minimal":"",i=e.groups.some(l=>l.lines.length>1)?" has-merged-groups":"",t=e.passRestart?" is-pass-restart":"";return[`<span class="notation-chunk${n}${r}${i}${t}">`,e.groups.map((l,u)=>{const c=l.label==="F"?" is-free":"",m=l.lines.length>1?" is-merged":"",f=o.minimal&&o.mode===4&&e.groups.length<4&&u===e.groups.length-1&&l.label==="4"&&l.lines.length===1,y=o.mode===3&&e.groups.length===2&&(u===e.groups.length-1||e.groups.slice(u+1).every(V=>V.label===""))&&l.label==="3"&&l.lines.length===1,O=l.label!=="F"&&!f&&!y&&(o.minimal||s||l.lines.length>1||o.mode===3&&e.groups.length===2),I=o.hideLabels||O?"":l.label;return[`<span class="notation-line-group${m}${I?" has-label":""}">`,`<span class="notation-label${c}">${I}</span>`,'<span class="notation-lines">',l.lines.map(V=>nt(V,o)).join(""),"</span>","</span>"].join("")}).join(""),"</span>"].join("")}function lr(e,o,a=""){return[`<p class="source-stanza notation-mode-${o.singingNotationMode}${a}">`,e.map(s=>ky(s,{hideLabels:Fy(s,o.singingNotationMode),minimal:o.minimalSingingNotation,mode:o.singingNotationMode,postureInstructionsEnabled:o.postureInstructionsEnabled})).join(""),"</p>"].join("")}function st(){return'<span class="responsory-split-mark" aria-hidden="true">|</span>'}function nt(e,o){return`<span class="source-line${o.postureInstructionsEnabled!==!1&&mm(e)?" is-head-bow-frame-end":""}">${e}</span>`}function cr(e){return e.replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim()}function jn(e){const o=cr(e),a=is(o);return um(a)}function um(e){return e.includes("nos ponemos en pie")||e.includes("nos sentamos")||e.includes("hacemos la senal de la cruz mientras decimos")||e.includes("inclinamos la cabeza mientras decimos")||e.includes("inclinamos la cabeza")||e.includes("todos decimos mientras inclinamos la cabeza")}function By(e){return um(is(e))}function dm(e){return is(cr(e)).includes("hacemos la senal de la cruz mientras decimos")}function Yy(e){return e.includes("†")?e:e.replace(/(<span class="[^"]*\brubric\b[^"]*">)\s*/,"$1† ")}function Gy(e){const o=e.findIndex(s=>dm(s)&&s.includes("†"));if(o<=0)return e;const a=[...e];return a[0]=Yy(a[0]),a[o]=a[o].replace(/†\s*/,""),a}function Qy(e){return/[.!?:;†]$/.test(e.trim())}function Wy(e){const o=e.lastIndexOf("</span>");return o===-1?`${e}.`:`${e.slice(0,o)}.${e.slice(o)}`}function Ky(e){const o=cr(e);return!o||Qy(o)?e:Wy(e)}function Xy(e){return e.map((o,a)=>a<e.length-1?Ky(o):o).join(" ")}function Zy(e){const o=[];let a=0;for(;a<e.length;){const s=e[a];if(!jn(s)){o.push(s),a+=1;continue}const n=[s];for(a+=1;a<e.length&&jn(e[a]);)n.push(e[a]),a+=1;o.push(Xy(Gy(n)))}return o}function eh(){return`<p class="source-stanza is-centered-instruction is-head-bow-frame-start"><span class="source-line"><span class="rubric posture-instruction">${qy}</span></span></p>`}function mm(e){const o=is(e);return o==="gloria al padre y al hijo y al espiritu santo"||o==="bendigamos al padre y al hijo con el espiritu santo"}function oh(e){return e.some(mm)}function ah(e){return e.replace(/(Gloria\s+al\s+Padre,\s*y\s+al\s+Hijo,?)\s+(y\s+al\s+Esp[i\u00ed]ritu\s+Santo\.?)/i,`$1 ${st()} $2`)}function sh(e,o){return o.singingNotationMode===4?['<p class="source-stanza gloria-stanza is-gloria-split">',e.map((a,s)=>nt(s===0?ah(a):a,o)).join(""),"</p>"].join(""):lr(lm(e,o.singingNotationMode),o," gloria-stanza")}const nh=[["Renueva los prodigios, | repite los portentos,","exalta tu mano, | robustece tu brazo."],["Reúne a todas | las tribus de Jacob","y dales su heredad | como antiguamente."],["Llena a Sion | de tu majestad,","y al templo, | de tu gloria."],["Allí le ha puesto su tienda al sol:","él sale como el esposo de su alcoba,","contento como un héroe | a recorrer su camino."],["para poder decirle | a la próxima generación:","«Éste es el Señor, nuestro Dios.»","Él nos guiará por siempre jamás."],["Tú no eres un Dios que ame la maldad,","ni el malvado es tu huésped,","ni el arrogante se mantiene | en tu presencia."],["Porque tú, Señor, | bendices al justo,","y como un escudo | lo rodea tu favor."],["Hazme justicia, oh Dios, | defiende mi causa","contra gente sin piedad,","sálvame del hombre traidor y malvado."],["Yo pensé: «En medio de mis días","tengo que marchar | hacia las puertas del abismo;","me privan del resto de mis años.»"],["Sálvame, Señor, | y tocaremos nuestras arpas","todos nuestros días | en la casa del Señor."],["Serás corona fúlgida | en la mano del Señor","y diadema real | en la palma de tu Dios."],["Dichosa la nación | cuyo Dios es el Señor,","el pueblo que él | se escogió como heredad."],["Clamaste en la aflicción, y te libré,","te respondí oculto entre los truenos,","te puse a prueba | junto a la fuente de Meribá."],["Antes que naciesen los montes","o fuera engendrado el orbe de la tierra,","desde siempre y por siempre | tú eres Dios."],["Dios mío, unos soberbios | se levantan contra mí,","una banda de insolentes atenta contra mi vida,","sin tenerte en cuenta a ti."],["Pero tú, Señor, | Dios clemente y misericordioso,","lento a la cólera, rico en piedad y leal,","mírame, ten compasión de mí."],["Los vivos, los vivos son quienes te alaban:","como yo ahora.","El padre enseña a sus hijos | tu fidelidad."],["Oh Dios, tú mereces | un himno en Sion,","y a ti se te cumplen los votos,","porque tú escuchas las súplicas."],["En su presencia, | las naciones todas","como si no existieran,","valen para él nada y vacío."],["Volveos hacia mí para salvaros,","confines de la tierra,","pues yo soy Dios, | y no hay otro."]],xn="|";function Ka(e){return is(e.replace(/&[a-z]+;|&#\d+;/gi," "))}const rh=new Map(nh.map(e=>[e.map(o=>Ka(o.replace(xn,""))).join(`
`),e.map(o=>{const a=o.indexOf(xn);return{wordsBefore:a<0?0:Ka(o.slice(0,a)).split(" ").length}})]));function pm(e,o){const a=/<[^>]*>|&[a-z]+;|&#\d+;|[\p{L}\p{N}]+/giu;let s=0,n;for(;n=a.exec(e);)if(!/^[<&]/.test(n[0])&&(s+=1,s===o)){const r=n.index+n[0].length,i=/^[,;:]*/.exec(e.slice(r))[0],t=r+i.length;return`${e.slice(0,t)} ${st()} ${e.slice(t).trimStart()}`}return e}function ih(e){return rh.get(e.map(Ka).join(`
`))}function th(e,o,a){let s=1,n=0;const r=e.map((i,t)=>{const l=o[t].wordsBefore,c={label:s===4&&n===3?"":String(s),lines:[l?pm(i,l):i]};return s+=l?2:1,n=s-1,c});return lr([{groups:r}],a," is-voice-split")}const lh=[{mode:4,verses:["riegas los surcos, igualas los terrones,","tu llovizna los deja mullidos,","bendices sus brotes;","coronas el año con tus bienes,","tus carriles rezuman abundancia;"],joinWithNext:[1],passes:[[["1",1],["2",1],["3",1],["4",1]]]},{mode:3,verses:["Mas el frío conturba en los abismos,","y en los días de Dios amaga el vértigo.","¡Y un fuego vivo necesita el alma","y un asidero!"],passes:[[["1",1],["2",1],["3",2]]]},{mode:4,verses:["Mas el frío conturba en los abismos,","y en los días de Dios amaga el vértigo.","¡Y un fuego vivo necesita el alma","y un asidero!"],passes:[[["1",1],["2",1],["4",2]]]},{mode:3,verses:["Hombre quisiste hacerme, no desnuda","inmaterialidad de pensamiento.","Soy una encarnación diminutiva;","el arte, resplandor que toma cuerpo:","la palabra es la carne de la idea:","¡encarnación es todo el universo!","¡Y el que puso esta ley en nuestra nada","hizo carne su verbo!","Así: tangible, humano,","fraterno."],passes:[[["1",2],["2",1],["3",1]],[["1",1],["3",1]],[["1",1],["2",1],["3",2]]]},{mode:4,verses:["Hombre quisiste hacerme, no desnuda","inmaterialidad de pensamiento.","Soy una encarnación diminutiva;","el arte, resplandor que toma cuerpo:","la palabra es la carne de la idea:","¡encarnación es todo el universo!","¡Y el que puso esta ley en nuestra nada","hizo carne su verbo!","Así: tangible, humano,","fraterno."],passes:[[["1",2],["2",1],["4",1]],[["1",1],["4",1]],[["1",1],["2",1],["4",2]]]},{mode:3,verses:["Padre nuestro,","que en los cielos estás, haz a los hombres","iguales: que ninguno se avergüence","de los demás; que todos al que gime","den consuelo; que todos, al que sufre","del hambre la tortura, le regalen","en rica mesa de manteles blancos","con blanco pan y generoso vino;","que no luchen jamás; que nunca emerjan,","entre las áureas mieses de la historia,","sangrientas amapolas, las batallas."],lines:["=Padre nuestro, que en los cielos estás, haz a los hombres iguales","que ninguno se avergüence de los demás","que todos al que gime den consuelo;","que todos, al que sufre del hambre la tortura,","le regalen en rica mesa de manteles blancos","con blanco pan y generoso vino;","que no luchen jamás; que nunca emerjan,","entre las áureas mieses de la historia,","sangrientas amapolas, las batallas."],passes:[[["1",1],["2",1],["3",1]],[["1",1],["2",1],["3",1]],[["1",1],["2",1],["3",1]]]},{mode:3,verses:["Luz, Señor, que ilumine las campiñas","y las ciudades; que a los hombres todos,","en sus destellos mágicos, envuelva","luz inmortal; Señor, luz de los cielos,","fuente de amor y causa de la vida."],lines:["=Luz, Señor, que ilumine las campiñas y las ciudades;","=que a los hombres todos, en sus destellos mágicos, envuelva luz inmortal;","Señor, luz de los cielos, fuente de amor y causa de la vida."],passes:[[["1",1],["2",1],["3",1]]]},{mode:4,verses:["Padre nuestro,","que en los cielos estás, haz a los hombres","iguales: que ninguno se avergüence","de los demás; que todos al que gime","den consuelo; que todos, al que sufre","del hambre la tortura, le regalen","en rica mesa de manteles blancos","con blanco pan y generoso vino;","que no luchen jamás; que nunca emerjan,","entre las áureas mieses de la historia,","sangrientas amapolas, las batallas."],lines:["=Padre nuestro, que en los cielos estás, haz a los hombres iguales","que ninguno se avergüence de los demás","que todos al que gime den consuelo;","que todos, al que sufre del hambre la tortura,","le regalen en rica mesa de manteles blancos","con blanco pan y generoso vino;","que no luchen jamás; que nunca emerjan,","entre las áureas mieses de la historia,","sangrientas amapolas, las batallas."],passes:[[["1",1],["2",1],["4",1]],[["1",1],["2",1],["4",1]],[["1",1],["2",1],["4",1]]]},{mode:4,verses:["Luz, Señor, que ilumine las campiñas","y las ciudades; que a los hombres todos,","en sus destellos mágicos, envuelva","luz inmortal; Señor, luz de los cielos,","fuente de amor y causa de la vida."],lines:["=Luz, Señor, que ilumine las campiñas y las ciudades;","=que a los hombres todos, en sus destellos mágicos, envuelva luz inmortal;","Señor, luz de los cielos, fuente de amor y causa de la vida."],passes:[[["1",1],["2",1],["4",1]]]},{mode:3,verses:["Gloria al Padre, y al Hijo y al Espíritu Santo.","Amén."],lines:["Gloria al Padre y al Hijo","y al Espíritu Santo.","Amén."],passes:[[["1",1]],[["3",1],["",1]]]},{mode:4,verses:["Gloria al Padre, y al Hijo y al Espíritu Santo.","Amén."],lines:["Gloria al Padre y al Hijo","y al Espíritu Santo.","Amén."],passes:[[["1",1]],[["4",1],["",1]]]},{verses:["Es verdad: tú eres un Dios escondido,","el Dios de Israel, el Salvador.","Se avergüenzan y se sonrojan todos por igual,","se van avergonzados los fabricantes de ídolos;","mientras el Señor salva a Israel","con una salvación perpetua,","para que no se avergüencen | ni se sonrojen nunca jamás."],passes:[[["1",1],["2",1],["3",1],["4",1]],[["1",1],["2",1],["3",1]]]},{verses:["Así dice el Señor, creador del cielo","-él es Dios-,","él modeló la tierra,","la fabricó y la afianzó;","no la creó vacía,","sino que la formó habitable:","«Yo soy el Señor, y no hay otro.»"],passes:[[["1",2],["2",2],["3",2],["4",1]]]},{verses:["Yo soy el Señor que pronuncia sentencia","y declara lo que es justo.","Reuníos, venid, acercaos juntos,","supervivientes de las naciones.","No discurren los que llevan su ídolo de madera","y rezan a un dios que no puede salvar."],passes:[[["1",2],["2",2],["3",1],["4",1]]]},{verses:["Declarad, aducid pruebas,","que deliberen juntos:","¿Quién anunció esto desde antiguo,","quién lo predijo desde entonces?","¿No fui yo, el Señor?","-No hay otro Dios fuera de mí-."],passes:[[["1",2],["2",2],["3",1],["4",1]]]},{verses:["Yo juro por mi nombre,","de mi boca sale una sentencia,","una palabra irrevocable:","«Ante mí se doblará toda rodilla,","por mí jurará toda lengua»;","dirán: «Sólo el Señor","tiene la justicia y el poder.»"],passes:[[["1",1],["2",1],["4",1]],[["1",1],["2",1],["3",1],["4",1]]]}],ch=new Map(lh.map(e=>[`${e.mode??4}|${e.verses.map(o=>Ka(o.replace(xn,""))).join(`
`)}`,e]));function uh(e,o,a){let s=0;const n=[],r=[];o.lines&&o.lines.forEach(t=>{const l=t.startsWith("="),u=l?t.slice(1):t,c=Ei(Qe(u));r.push(l?`<span class="line-together">${c}</span>`:c),n.push(u)}),e.forEach((t,l)=>{o.lines||(l>0&&o.joinWithNext?.includes(l-1)?(r[r.length-1]+=` ${t}`,n[n.length-1]+=` ${o.verses[l]}`):(r.push(t),n.push(o.verses[l])))});const i=o.passes.map((t,l)=>{const u=t.map(([c,m])=>{const f=r.slice(s,s+m).map((y,O)=>{const I=n[s+O],_=I.indexOf(xn);return _<0?y:pm(y,Ka(I.slice(0,_)).split(" ").length)});return s+=m,{label:c,lines:f}});return l?{groups:u,passRestart:!0}:{groups:u}});return lr(i,a)}function dh(e){return e.split(`
`)}function qi(e){return dh(e).filter(o=>!Gd(o))}function lc(e,o){return!e.length||ir(e)?!1:e.length%o!==0}function mh(e){return e.reduce((o,a)=>a.score<o.score?a:o)}function ph(e,o){return e.hardJoins>o.hardJoins?!1:e.score<=o.score+18}function fh(e,o){if(jn(e))return 0;const a=qi(e).filter(s=>s.trim());return!a.length||ir(a)?0:(o===3?im(a):a).length}function gh(e,o){if(!(!o.singingNotationMode||!o.hymnNotation))return{hymnNotation:!0,stanzaLineCounts:e.map(a=>fh(a,o.singingNotationMode)).filter(a=>a>0)}}function Sh(e,o,a){const s=o.singingNotationMode,n=e.map(()=>({}));if(!s)return n;let r=0;for(;r<e.length;){const i=qi(e[r]);if(!lc(i,s)){r+=1;continue}const t=r,l=[];for(;r<e.length;){const c=qi(e[r]);if(!lc(c,s))break;const m=tm(c,s,a);l.push({index:r,lines:c,candidates:m,individualBest:mh(m)}),r+=1}const u=new Map;for(const c of l){const m=u.get(c.lines.length)??[];m.push(c),u.set(c.lines.length,m)}for(const c of u.values()){if(c.length<=1){const O=c[0];n[O.index]={chunks:O.individualBest.chunks};continue}const m=new Set(c.flatMap(O=>O.candidates.map(I=>I.pattern)));let f,y=Number.POSITIVE_INFINITY;for(const O of m){let I=0,_=!0;for(const V of c){const k=V.candidates.find(J=>J.pattern===O);if(!k||!ph(k,V.individualBest)){_=!1;break}I+=k.score}_&&I<y&&(f=O,y=I)}for(const O of c){const I=f?O.candidates.find(_=>_.pattern===f):void 0;n[O.index]={chunks:I?.chunks??O.individualBest.chunks}}}t===r&&(r+=1)}return n}function bh(e,o,a={},s){const n=e.split(`
`),r=n.filter(c=>!Gd(c)),i=ir(r),t=jn(e)?" is-centered-instruction":"",l=o.postureInstructionsEnabled!==!1,u=oh(r)&&l?eh():"";if(t){if(!l)return dm(e)?[`<p class="source-stanza${t}">`,'<span class="source-line"><span class="rubric posture-instruction">†</span></span>',"</p>"].join(""):"";const c=Qe(cr(e));return[`<p class="source-stanza${t}">`,`<span class="source-line"><span class="rubric posture-instruction">${c}</span></span>`,"</p>"].join("")}if(o.singingNotationMode&&r.length&&i&&o.singingNotationMode===4)return u+sh(n,o);if((o.singingNotationMode===3||o.singingNotationMode===4)&&r.length){const c=ch.get(`${o.singingNotationMode}|${r.map(Ka).join(`
`)}`);if(c)return u+uh(r,c,o)}if(o.singingNotationMode===4&&r.length){const c=ih(r);if(c)return u+th(r,c,o)}if(o.singingNotationMode&&r.length){const c=a.chunks??lm(r,o.singingNotationMode,s);return u+lr(c,o,i?" gloria-stanza":"")}return[u,`<p class="source-stanza${t}">`,n.map(c=>nt(c,o)).join(""),"</p>"].join("")}function wr(e,o={}){const a=e?.trim();if(!a)return"";if(Ay.test(a))return Ei(a);const s=Zy(Ei(Qe(a)).split(/\n{2,}/)),n=gh(s,o),r=Sh(s,o,n),i=s.map((t,l)=>bh(t,o,r[l],n)).join("");return o.syllableMarks?vh(i):i}function vh(e){return e.replace(new RegExp("(?<=\\s)bus(?=que a mí)","g"),'<span class="syllable-mark">bus</span>')}function G(e){return!!e?.trim()}function yh(e){let o="",a="",s=0;for(;s<e.length;){if(e[s]==="["){const n=e.indexOf("]",s);if(n===-1){o+=e[s],s+=1;continue}const r=e.slice(s+1,n);for(;a.length<o.length;)a+=" ";a.length>0&&!a.endsWith(" ")&&(a+=" "),a+=r,s=n+1;continue}o+=e[s],s+=1}return{chordLine:a,textLine:o.trimEnd()}}function hh(e){const{chordLine:o,textLine:a}=yh(e);return o.trim()?`<span class="chord-sheet-chords">${Qe(o)}</span>
<span class="chord-sheet-text">${Qe(a)}</span>
`:`<span class="chord-sheet-text-only">${Qe(a)}</span>
`}function fm(e){return['<div class="chord-sheet">',e.trim().split(/\n{2,}/).map(a=>`<pre class="chord-sheet-stanza">${a.split(`
`).map(hh).join("")}</pre>`).join(""),"</div>"].join("")}function Eh(e){const o=e.trim();if(!o)return[];const a=o.split(/\n{2,}/).map(n=>{const r=n.split(/\r?\n/).map(i=>i.trim()).filter(i=>i&&!i.startsWith("[[ANTIPHON]]")&&!/^\[\[REPEATED_?ANTIPHON\]\]/.test(i));return ir(r)?0:r.length}).filter(n=>n>0),s=new Map;for(const n of a)s.set(n,(s.get(n)??0)+1);return[...s.entries()].map(([n,r])=>({lineCount:n,occurrences:r})).sort((n,r)=>r.occurrences-n.occurrences||n.lineCount-r.lineCount)}function cc(e){const o=e.find(s=>s.lineCount===4),a=e.find(s=>s.lineCount===2);if(!(!o&&!a)&&!(o&&a&&o.occurrences===a.occurrences))return a?o&&o.occurrences>a.occurrences?4:2:4}function uc(e,o={}){if(!e.length)return[];const a=o.currentKey?e.find(c=>c.key===o.currentKey):void 0,s=a?.voices??o.preferredFamily,n=e.filter(c=>c.key!==a?.key),r=s!==void 0?n.filter(c=>c.voices===s):[],i=s!==void 0?n.filter(c=>c.voices!==s):n,t=a?[a,...r,...i]:[...r,...i],l=new Set(o.takenKeys??[]);if(!l.size)return t;const u=t.filter(c=>!l.has(c.key));return u.length?u:t}const Ah=new Set(["Himno","Primer salmo","Segundo salmo","Tercer salmo","Lectura breve","Cántico de Zacarías"]),dc={Á:"A-agudo",É:"E-agudo",Í:"I-agudo",Ó:"O-agudo",Ú:"U-agudo",Ñ:"N-tilde",Ü:"U-dieresis"};function Ph(e){const o=e.toLocaleUpperCase("es");return dc[o]?dc[o]:/^[A-Z]$/.test(o)?o:null}const qh=Object.assign({"../assets/capitulares/A-agudo.svg":()=>te(()=>import("./A-agudo-CMMCWxEX.js"),[],import.meta.url).then(e=>e.default),"../assets/capitulares/A.svg":()=>te(()=>import("./A-6b3gWUG7.js"),[],import.meta.url).then(e=>e.default),"../assets/capitulares/B.svg":()=>te(()=>import("./B-CipwgNNt.js"),[],import.meta.url).then(e=>e.default),"../assets/capitulares/C.svg":()=>te(()=>import("./C-CJ-G29bu.js"),[],import.meta.url).then(e=>e.default),"../assets/capitulares/D.svg":()=>te(()=>import("./D-DU9y-m5I.js"),[],import.meta.url).then(e=>e.default),"../assets/capitulares/E-agudo.svg":()=>te(()=>import("./E-agudo-DOUnA_tx.js"),[],import.meta.url).then(e=>e.default),"../assets/capitulares/E.svg":()=>te(()=>import("./E-CoZi6fjD.js"),[],import.meta.url).then(e=>e.default),"../assets/capitulares/F.svg":()=>te(()=>import("./F-1qaw_TZD.js"),[],import.meta.url).then(e=>e.default),"../assets/capitulares/G.svg":()=>te(()=>import("./G-DYuybvov.js"),[],import.meta.url).then(e=>e.default),"../assets/capitulares/H.svg":()=>te(()=>import("./H-0JxCyYKJ.js"),[],import.meta.url).then(e=>e.default),"../assets/capitulares/I-agudo.svg":()=>te(()=>import("./I-agudo-v5PSUqrH.js"),[],import.meta.url).then(e=>e.default),"../assets/capitulares/I.svg":()=>te(()=>import("./I-DImUKT7s.js"),[],import.meta.url).then(e=>e.default),"../assets/capitulares/J.svg":()=>te(()=>import("./J-CYTGOfb5.js"),[],import.meta.url).then(e=>e.default),"../assets/capitulares/K.svg":()=>te(()=>import("./K-qrIinejy.js"),[],import.meta.url).then(e=>e.default),"../assets/capitulares/L.svg":()=>te(()=>import("./L-DdUR6E95.js"),[],import.meta.url).then(e=>e.default),"../assets/capitulares/M.svg":()=>te(()=>import("./M-qBcG8rkf.js"),[],import.meta.url).then(e=>e.default),"../assets/capitulares/N-tilde.svg":()=>te(()=>import("./N-tilde-DFKVVsmi.js"),[],import.meta.url).then(e=>e.default),"../assets/capitulares/N.svg":()=>te(()=>import("./N-A9LBx9hN.js"),[],import.meta.url).then(e=>e.default),"../assets/capitulares/O-agudo.svg":()=>te(()=>import("./O-agudo-BcMtlV09.js"),[],import.meta.url).then(e=>e.default),"../assets/capitulares/O.svg":()=>te(()=>import("./O-aZTATLY2.js"),[],import.meta.url).then(e=>e.default),"../assets/capitulares/P.svg":()=>te(()=>import("./P-Cdt7s-1O.js"),[],import.meta.url).then(e=>e.default),"../assets/capitulares/Q.svg":()=>te(()=>import("./Q-Ab59Hgr4.js"),[],import.meta.url).then(e=>e.default),"../assets/capitulares/R.svg":()=>te(()=>import("./R-DtfwSh_p.js"),[],import.meta.url).then(e=>e.default),"../assets/capitulares/S.svg":()=>te(()=>import("./S-CSJ00UKw.js"),[],import.meta.url).then(e=>e.default),"../assets/capitulares/T.svg":()=>te(()=>import("./T-D9LkPFKd.js"),[],import.meta.url).then(e=>e.default),"../assets/capitulares/U-agudo.svg":()=>te(()=>import("./U-agudo-B-qFw_WP.js"),[],import.meta.url).then(e=>e.default),"../assets/capitulares/U-dieresis.svg":()=>te(()=>import("./U-dieresis-PLJJ_3L-.js"),[],import.meta.url).then(e=>e.default),"../assets/capitulares/U.svg":()=>te(()=>import("./U-B30CI58l.js"),[],import.meta.url).then(e=>e.default),"../assets/capitulares/V.svg":()=>te(()=>import("./V-xESCHF9k.js"),[],import.meta.url).then(e=>e.default),"../assets/capitulares/W.svg":()=>te(()=>import("./W-BuEZ4Ms1.js"),[],import.meta.url).then(e=>e.default),"../assets/capitulares/X.svg":()=>te(()=>import("./X-3vWHyoov.js"),[],import.meta.url).then(e=>e.default),"../assets/capitulares/Y.svg":()=>te(()=>import("./Y-DgAF8-4x.js"),[],import.meta.url).then(e=>e.default),"../assets/capitulares/Z.svg":()=>te(()=>import("./Z-BXri5Hky.js"),[],import.meta.url).then(e=>e.default)}),mc=rd(new Map),pc=new Set;function Ih(e){const o=Ph(e);if(!o)return;const a=mc.get(o);if(a!==void 0||pc.has(o))return a;const s=qh[`../assets/capitulares/${o}.svg`];s&&(pc.add(o),s().then(n=>mc.set(o,n)).catch(()=>{}))}const Oh=".antiphon-line, .rubric, .notation-label, .responsory-split-mark";function fc(e){const o=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(let a=o.nextNode();a;a=o.nextNode())if(!a.parentElement?.closest(Oh)&&a.textContent?.trim())return a;return null}function Ch(e){if(!e||typeof document>"u")return e;const o=document.createElement("template");o.innerHTML=e;const a=Array.from(o.content.querySelectorAll(".source-line")).find(f=>!f.closest(".is-centered-instruction")&&fc(f)),s=a?fc(a):null;if(!a||!s)return e;const n=s.textContent??"",r=n.search(/\S/),i=n[r],t=i&&new RegExp("\\p{L}","u").test(i)?Ih(i):void 0;if(!t)return e;const l=s.splitText(r);l.textContent=(l.textContent??"").slice(i.length);const u=document.createElement("span");u.className="capitular-letra",u.textContent=i,l.before(u);const c=document.createElement("span");c.className="capitular",c.setAttribute("aria-hidden","true"),c.innerHTML=t;const m=a.closest(".notation-chunk");return m?m.prepend(c):a.prepend(c),a.closest(".source-stanza")?.classList.add("has-capitular"),o.innerHTML}function Dh(e){return e?.rank?.toUpperCase()==="SOLEMNITY"}const gc=new Set(["Primer salmo","Segundo salmo","Tercer salmo"]);function Sc(e,o){return e&&gc.has(e)&&gc.has(o)?"breve":"pleno"}const gm="var(--accent)",ia="var(--accent)",Sm="var(--surface)",_e=e=>String(Math.round(e*100)/100),Ps=([e,o])=>`${_e(e)} ${_e(o)}`,rt=(e,o)=>`stroke:${e};stroke-width:${_e(o)}`,ws=e=>`fill:${e}`;function Fs(e){return`M${Ps(e[0][0])}`+e.map(([,o,a,s])=>`C${Ps(o)} ${Ps(a)} ${Ps(s)}`).join("")}function no(e,o){const a=Math.min(e.length-1,Math.floor(o*e.length)),s=o*e.length-a,[n,r,i,t]=e[a],l=1-s,u=l*l*l*n[0]+3*l*l*s*r[0]+3*l*s*s*i[0]+s*s*s*t[0],c=l*l*l*n[1]+3*l*l*s*r[1]+3*l*s*s*i[1]+s*s*s*t[1],m=3*l*l*(r[0]-n[0])+6*l*s*(i[0]-r[0])+3*s*s*(t[0]-i[0]),f=3*l*l*(r[1]-n[1])+6*l*s*(i[1]-r[1])+3*s*s*(t[1]-i[1]);return{x:u,y:c,ang:Math.atan2(f,m)*180/Math.PI}}function Xa(e,o,a,s,n=7){let r="";for(let i=n-1;i>=0;i--){const t=a+(s-a)*i/(n-1),l=100*(i+1)/n;r+=`<path d="${e}" pathLength="100" stroke-dasharray="${_e(l)} 1000" style="${rt(o,t)}"/>`}return r}const Rh="M0 0C1.5 -1.5 2.5 -5.5 6 -5.8C8.2 -6 8.6 -4 9 -3.2C11 -4.2 13.6 -2.4 13 0C13.6 2.4 11 4.2 9 3.2C8.6 4 8.2 6 6 5.8C2.5 5.5 1.5 1.5 0 0Z",$h="M0 0C3 -3.8 8.5 -4.2 13 0C8.5 4.2 3 3.8 0 0Z";function Ue(e,o,a,s,n=!0){const r=n?Rh:$h,i=n?"M1.2 0H10M6 0L8.6 -2.4M6 0L8.6 2.4":"M1.5 0H10";return`<g transform="translate(${_e(e)} ${_e(o)}) rotate(${_e(a)}) scale(${_e(s)})"><path d="${r}" style="${ws(ia)}"/><path d="${i}" style="${rt(Sm,.75)}"/></g>`}function Ta(e,o,a,s,n=!1){const r=1.75*a,i=s===10?[4,3,2,1]:[3,2,1],t=[];i.forEach((u,c)=>{for(let m=0;m<u;m++)t.push([e+(m-(u-1)/2)*2*r,o+r+c*1.72*r])});let l=`<path d="M${_e(e)} ${_e(o-2.2*a)}V${_e(o+r)}" style="${rt(ia,.9*a)}"/>`;return n&&(l+=t.map(([u,c])=>`<circle cx="${_e(u)}" cy="${_e(c)}" r="${_e(r*.96+.9)}" style="${ws(Sm)}"/>`).join("")),l+=t.map(([u,c])=>`<circle cx="${_e(u)}" cy="${_e(c)}" r="${_e(r*.96)}" style="${ws(ia)}"/>`).join(""),l}function ho(e,o,a,s,n,r=1.3){let i=a*Math.PI/180,t=e,l=o;const u=26,c=[[t,l]];for(let m=1;m<=u;m++){const f=m/u,y=s/u*(1.7*(1-f)+.3);i+=n*r*2*Math.PI/u*(.35+1.3*f),t+=Math.cos(i)*y,l+=Math.sin(i)*y,c.push([t,l])}return Xa("M"+c.map(Ps).join("L"),ia,.95,.35,5)}function it(e,o){const a=[];for(let s=0;s<e.length-1;s++){const[n,r]=[e[s],e[s+1]],i=(r[0]-n[0])*.45;a.push([n,s===0&&o?o:[n[0]+i,n[1]],[r[0]-i,r[1]],r])}return a}const ks=(e,o,a,s=gm)=>`<circle cx="${_e(e)}" cy="${_e(o)}" r="${_e(a)}" style="${ws(s)}"/>`,ur=(e,o)=>`<g transform="matrix(-1 0 0 1 ${_e(2*e)} 0)">${o}</g>`;function ts(e,o,a){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${_e(e)} ${_e(o)}" aria-hidden="true" focusable="false" style="fill:none;stroke-linecap:round;stroke-linejoin:round">${a}</svg>`}function Th(){const a=it([[100,6.8],[78,13.4],[54,7.6],[30,13],[10,9.6]],[93,4.2]),s=a[a.length-1][3],n=y=>no(a,y),[r,i,t,l]=[n(.25),n(.5),n(.75),n(.97)],[u,c,m]=[n(.38),n(.62),n(.86)],f=Xa(Fs(a),ia,1.55,.6,9)+Ue(r.x,r.y,r.ang-66,.56)+Ue(i.x,i.y,i.ang+70,.5,!1)+Ta(i.x,i.y+.9,.46,6)+Ue(t.x,t.y,t.ang-64,.48)+Ue(l.x,l.y,l.ang+66,.36,!1)+ho(u.x,u.y,u.ang-78,4.4,-1)+ho(c.x,c.y,c.ang+78,4.2,1)+ho(m.x,m.y,m.ang-78,3.6,-1)+ho(s[0],s[1],186,5.2,1,1.5)+ks(s[0]-6.6,s[1]+3.8,.85);return ts(200,21,f+ur(100,f)+Ue(100,7,-118,.46)+Ue(100,7,-62,.46)+Ta(100,7.4,.66,6,!0))}function Lh(){const a=it([[38,6.8],[23,12.6],[10,9.2]],[32,4.4]),s=a[a.length-1][3],n=no(a,.5),r=no(a,.72),i=Xa(Fs(a),ia,1.4,.65,7)+Ue(n.x,n.y,n.ang-66,.46)+ho(r.x,r.y,r.ang+80,3.6,1)+ho(s[0],s[1],186,4.4,1,1.5)+ks(s[0]-5.4,s[1]+3.2,.8);return ts(76,20,i+ur(38,i)+Ta(38,7.4,.62,6,!0))}const Mh=Th(),Nh=Lh();function _h(){const a=[[[130,12.5],[119,5.5],[107,7.5],[99,15.5]],[[99,15.5],[92,22.5],[80,25.5],[70,20.5]],[[70,20.5],[60,15.5],[52,10.5],[41,14]],[[41,14],[34,16.5],[31,22],[24,23.5]]],s=no(a,.13),n=no(a,.33),r=no(a,.56),i=no(a,.79),t=no(a,.24),l=no(a,.66),u=no(a,.5),c=Xa(Fs(a),ia,2.1,.7,9)+Ue(s.x,s.y,s.ang-60,.72)+Ue(n.x,n.y,n.ang+58,.6,!1)+Ue(r.x,r.y,r.ang-62,.64)+Ue(i.x,i.y,i.ang+60,.5,!1)+ho(t.x,t.y,t.ang+75,6,1)+ho(l.x,l.y,l.ang+80,5.4,1)+ho(a[3][3][0],a[3][3][1],176,6.4,1,1.5)+Ta(u.x,u.y+.6,.62,6)+ks(a[3][3][0]-9.5,a[3][3][1]-4.6,1.05);return ts(260,32,c+ur(130,c)+Ue(130,12.5,-122,.62)+Ue(130,12.5,-58,.62)+Ta(130,13.2,.88,10,!0))}const zh=_h();function Jh(){const a=[[[58,8],[42,8],[30,13],[33,24]],[[33,24],[36,33],[56,34],[59.4,45]]],s=no(a,.18),n=no(a,.45),r=no(a,.74),i=no(a,.32),t=it([[47,8.4],[31,4.4],[16,7.6]]),l=t[1][3],u=no(t,.5),c=no(t,.78),m=Xa(Fs(t),ia,1.3,.6,7)+Ue(u.x,u.y,u.ang+70,.48,!1)+ho(c.x,c.y,c.ang-80,3.6,-1)+ho(l[0],l[1],184,4.6,1,1.5)+ks(l[0]-5.8,l[1]+3.4,.85)+Xa(Fs(a),ia,1.9,.8,9)+Ue(s.x,s.y,s.ang-64,.62)+Ue(n.x,n.y,n.ang+70,.5,!1)+Ue(r.x,r.y,r.ang-62,.56)+ho(i.x,i.y,i.ang+82,6,-1),f=`<path d="M60 47C${60+1.6} 50.5 ${60+1.4} 53.5 60 56.5C${60-1.4} 53.5 ${60-1.6} 50.5 60 47Z" style="${ws(gm)}"/>`;return ts(120,62,m+ur(60,m)+Ta(60,10.5,.98,10,!0)+f+ks(60,59.6,1.1))}const jh=Jh(),bc=ts(12,14,Ue(6,3.2,-150,.34)+Ta(6,3.6,.62,6)+ho(6.2,2.2,-30,3.4,1)),xh=ts(16,14,Ue(2.2,9.6,-28,.86)+ho(3.2,9.8,170,3.6,1)),Uh=["data-section-title"],Hh={class:"section-heading"},Vh=["innerHTML"],wh={key:0,class:"chant-picker"},Fh={key:0,class:"chant-picker-verse-counts"},kh={key:1,class:"chant-picker-chant"},Bh=["aria-label"],Yh=["aria-label"],Gh={key:1,class:"chant-voices-sub","aria-hidden":"true"},Qh={key:2,class:"chant-manual-dot","aria-hidden":"true",title:"Elegido por ti"},Wh={key:0,class:"section-eyebrow"},Kh={key:1,class:"section-line-counts-row"},Xh={class:"notation-mode-mini",role:"group","aria-label":"Modo de notacion"},Zh=["aria-label","onClick"],eE={key:1,class:"section-summary"},oE={key:0,class:"section-alternative-tabs",role:"tablist","aria-label":"Alternativas"},aE=["aria-selected","onClick"],sE=["innerHTML"],nE={key:2,class:"announcements-timer"},rE={class:"announcements-timer-main"},iE={class:"announcements-actions"},tE=["disabled"],lE={key:0,class:"announcements-history"},cE={class:"announcements-history-summary"},uE=["innerHTML"],vc="orante:chant-selection",yc="orante:chant-manual",hc="orante:announcements-timer-history",Fr=8,dE=or({__name:"PrayerSection",props:{section:{},alternativeIndex:{},notationEnabled:{type:Boolean},notationMode:{},chantPickerEnabled:{type:Boolean},postureInstructionsEnabled:{type:Boolean},capoOffset:{},inheritedCapoOffset:{},chantKey:{},historicChantKey:{},takenChantKeys:{},capitularEnabled:{type:Boolean},ornamented:{type:Boolean}},emits:["update:alternativeIndex","update:notationMode","chant-selected","capo-cycled"],setup(e,{emit:o}){const a={ChevronsDown:yb,ChevronsUp:Eb,Flame:Ib,Landmark:Rb,MessageSquare:Tb,Mic2:Mb,MoonStar:_b,Scroll:Bb,Snowflake:Wb,Swords:tv,TrendingDown:dv,TrendingUp:pv,TreeDeciduous:cv,Unlink:gv,Users:bv},s=e,n=o,r=new Set(["Himno","Primer salmo","Segundo salmo","Tercer salmo","Cántico de Zacarías","Cántico de María","Cántico evangélico"]),i=new Set([...r,"Salmo invitatorio"]),t=U(()=>r.has(s.section.title)),l=U(()=>i.has(s.section.title)),u=B(0),c=U(()=>{const D=s.chantPickerEnabled?Ns[s.section.title]:void 0;return s.section.title!=="Himno"||!D||qe.value.trimStart().startsWith("¡Oh cruz fiel")?D:D.filter(ee=>ee.key!=="cruz-fiel")}),m=B(""),f=B(""),y=B(s.capoOffset??0);be(()=>s.capoOffset,D=>{D!==void 0&&D!==y.value&&(y.value=D)}),be(()=>s.chantKey,D=>{D&&D!==m.value&&c.value?.some(ee=>ee.key===D)&&(m.value=D,f.value=D)});function O(){try{const D=localStorage.getItem(vc);return D?JSON.parse(D):{}}catch{return{}}}function I(D,ee){try{const re=O();localStorage.setItem(vc,JSON.stringify({...re,[D]:ee}))}catch{}}const _=B(V());function V(){try{const D=localStorage.getItem(yc);return D?JSON.parse(D):{}}catch{return{}}}function k(D,ee){_.value={..._.value,[D]:ee};try{localStorage.setItem(yc,JSON.stringify(_.value))}catch{}}const J=U(()=>!!m.value&&(_.value[s.section.title]===m.value||s.historicChantKey===m.value)),M=U(()=>s.takenChantKeys??[]);function E(){const D=c.value;if(!D?.length)return"";if(s.chantKey&&D.some(ve=>ve.key===s.chantKey))return s.chantKey;const ee=O()[s.section.title];if(ee&&D.some(ve=>ve.key===ee))return ee;const re=cc(la.value);if(re!==void 0){const ve=uc(D,{preferredFamily:re,takenKeys:M.value});if(ve[0])return ve[0].key}return hi[s.section.title]??D[0].key}const $=U(()=>c.value?.find(D=>D.key===m.value)??c.value?.[0]),H=U(()=>Math.max(0,($.value?.capo??0)+y.value)),x=U(()=>$.value?a[$.value.icon]:void 0),W=U(()=>{const D=c.value;return D?.length?uc(D,{currentKey:f.value||void 0,preferredFamily:cc(la.value),takenKeys:M.value}):D});function ae(){const D=W.value;if(!D||D.length<2)return;const ee=D.findIndex(re=>re.key===m.value);m.value=D[(ee+1)%D.length].key,k(s.section.title,m.value)}function Ee(D){const ee=[D,0,-1,1];return ee.filter((re,ve)=>ee.indexOf(re)===ve)}function Te(D,ee){const re=Ee(ee),ve=re.indexOf(D);return ve===-1?ee:re[(ve+1)%re.length]}function Ce(){const D=Te(y.value,s.inheritedCapoOffset??0);y.value=D,n("capo-cycled",D)}const He=U(()=>s.section.kind==="mass"&&s.section.title==="Avisos");function Io(D){return s.section.title==="Himno"?`Himno ${D+1}`:`Opción ${D+1}`}function $e(D){const ee=D?.trim();if(!ee)return[];const re=ee.replace(/\r\n/g,`
`).split(/(?:^|\n)\s*\$?\s*O\s+bien\s*:?\s*\$?\s*/gim).map(ve=>ve.trim()).filter(Boolean);return(re.length?re:[ee]).map((ve,So)=>({label:Io(So),content:ve}))}const X=U(()=>s.section.alternatives?.length?s.section.alternatives:$e(s.section.content)),ce=U(()=>X.value.length>1),Ke=U(()=>{const D=s.alternativeIndex??u.value;return D>=0&&D<X.value.length?D:0}),ko=U(()=>s.section.rubrics?.filter(D=>D.trim()).join(`

`)??""),qe=U(()=>X.value[Ke.value]?.content??""),Ve=U(()=>X.value[Ke.value]?.eyebrow??s.section.eyebrow),la=U(()=>!l.value||!qe.value.trim()?[]:Eh(qe.value)),Bo=B(0),go=B(!1),Le=B(g()),Me=B(!1);let Do=0,lo=0,Xe;be(()=>s.section.content,()=>{u.value=0,m.value=E(),f.value=m.value},{immediate:!0}),be(W,D=>{!D?.length||!m.value||M.value.includes(m.value)&&D[0].key!==m.value&&(m.value=D[0].key)},{immediate:!0}),be(X,D=>{u.value>=D.length&&(u.value=0)}),be([m,y],([D,ee])=>{c.value?.length&&(n("chant-selected",{key:D,capoOffset:ee}),I(s.section.title,D))},{immediate:!0}),Qi(()=>{h()});function ya(D){u.value=D,n("update:alternativeIndex",D)}function g(){try{const D=JSON.parse(localStorage.getItem(hc)??"[]");return Array.isArray(D)?D.filter(ee=>Number.isFinite(ee?.durationMs)&&typeof ee?.stoppedAt=="string").slice(0,Fr):[]}catch{return[]}}function S(D){localStorage.setItem(hc,JSON.stringify(D.slice(0,Fr)))}function h(){Xe!==void 0&&(window.clearInterval(Xe),Xe=void 0)}function C(){go.value&&(Bo.value=Do+Date.now()-lo)}function P(){go.value||(Me.value=!1,Do=Bo.value,lo=Date.now(),go.value=!0,h(),Xe=window.setInterval(C,250))}function q(){if(!go.value)return;C(),go.value=!1,h();const D=Math.round(Bo.value/1e3)*1e3;D>0&&(Le.value=[{durationMs:D,stoppedAt:new Date().toISOString()},...Le.value].slice(0,Fr),S(Le.value)),Me.value=!0}function z(){go.value=!1,h(),Bo.value=0}function T(D){const ee=Math.max(0,Math.round(D/1e3)),re=ee%60,ve=Math.floor(ee/60)%60,So=Math.floor(ee/3600),cs=String(re).padStart(2,"0"),Na=So?String(ve).padStart(2,"0"):String(ve);return So?`${So}:${Na}:${cs}`:`${Na}:${cs}`}function L(D){const ee=new Date(D);return Number.isNaN(ee.getTime())?"":new Intl.DateTimeFormat("es",{day:"2-digit",hour:"2-digit",minute:"2-digit",month:"short"}).format(ee)}const A=U(()=>T(Bo.value)),Y=U(()=>Le.value.slice(0,5)),j=U(()=>{if(!Le.value.length)return"";const D=Le.value.reduce((ee,re)=>ee+re.durationMs,0)/Le.value.length;return T(D)}),w=U(()=>la.value.map(D=>`${D.lineCount}${D.occurrences}`).join(", ")),Q=U(()=>s.section.title==="Cántico de Zacarías"?[4]:s.section.title==="Himno"?[3,4]:[2,4]),se=U(()=>Q.value.includes(s.notationMode)?s.notationMode:Q.value[0]);function fe(D){n("update:notationMode",D)}const ge=new Set(["Himno","Primer salmo","Segundo salmo","Tercer salmo","Cántico de Zacarías"]),ne=U(()=>c.value&&ge.has(s.section.title)&&$.value?.voices?$.value.voices:se.value),Ne=U(()=>!!qe.value.trim()||!!s.section.items?.length),we=U(()=>!!c.value?.length&&Ne.value),Ze=U(()=>!we.value&&s.notationMode&&t.value&&w.value!==""&&Q.value.length>1&&(!!Ve.value||s.section.title==="Himno")),Ro=U(()=>we.value),eo=U(()=>w.value!==""&&Ne.value),Fe=U(()=>Ro.value||eo.value),ke=U(()=>!!Ve.value||Ze.value),ha=U(()=>s.section.title==="Himno"&&s.notationEnabled?$.value?.chordSheet:void 0),Ma=U(()=>s.section.title==="Himno"&&qe.value.trimStart().startsWith("¡Oh cruz fiel"));function gr(D){return s.capitularEnabled&&Ah.has(s.section.title)?Ch(D):D}const sn=U(()=>[ko.value?wr(ko.value,{postureInstructionsEnabled:s.postureInstructionsEnabled}):"",ha.value?fm(ha.value):qe.value?gr(wr(qe.value,{singingNotationMode:!t.value||Ma.value?void 0:ne.value,minimalSingingNotation:s.notationEnabled===!1,postureInstructionsEnabled:s.postureInstructionsEnabled,hymnNotation:s.section.title==="Himno",syllableMarks:s.section.title==="Himno"&&$.value?.key==="desc"})):""].filter(Boolean).join(""));return(D,ee)=>(R(),N("section",{class:Re(["prayer-section",{"is-quiet":e.section.quiet,"is-part":e.section.kind==="part","is-mass":e.section.kind==="mass"}]),"data-section-title":e.section.title},[b("div",Hh,[b("div",{class:Re(["section-heading-top",{"has-chant-picker":Fe.value}])},[b("h3",null,[e.ornamented?(R(),N("span",{key:0,class:"ornamento section-vineta","aria-hidden":"true",innerHTML:pe(xh)},null,8,Vh)):ue("",!0),ea(K(e.section.title),1)]),Fe.value?(R(),N("div",wh,[eo.value?(R(),N("span",Fh,[ea(K(w.value),1),Ro.value?(R(),N(Se,{key:0},[ea(",")],64)):ue("",!0)])):ue("",!0),Ro.value?(R(),N("span",kh,[b("button",{type:"button",class:"chant-capo-badge","aria-label":`Capo ${H.value}`,onClick:Ce},K(H.value),9,Bh),ee[0]||(ee[0]=b("span",{class:"chant-picker-sep","aria-hidden":"true"}," ",-1)),b("button",{type:"button",class:Re(["chant-picker-bubble",{"is-fixed":(W.value?.length??0)<2}]),"aria-label":$.value?`Cántico: ${$.value.label}`:"Cántico",onClick:ae},[x.value?(R(),Qo(In(x.value),{key:0,size:13})):ue("",!0),$.value?.voices?(R(),N("sub",Gh,K($.value.voices),1)):ue("",!0),J.value?(R(),N("span",Qh)):ue("",!0)],10,Yh)])):ue("",!0)])):ue("",!0)],2),ke.value?(R(),N("div",{key:0,class:Re(["section-eyebrow-row",{hymn:s.section.title==="Himno"}])},[Ve.value?(R(),N("p",Wh,K(Ve.value),1)):ue("",!0),Ze.value?(R(),N("div",Kh,[b("div",Xh,[(R(!0),N(Se,null,yo(Q.value,re=>(R(),N("button",{type:"button",class:Re(["notation-mode-pill",{active:se.value===re}]),key:re,"aria-label":`Modo de ${re} lineas`,onClick:ve=>fe(re)},K(re),11,Zh))),128))])])):ue("",!0)],2)):ue("",!0),e.section.summary?(R(),N("p",eE,K(e.section.summary),1)):ue("",!0)]),ce.value?(R(),N("div",oE,[(R(!0),N(Se,null,yo(X.value,(re,ve)=>(R(),N("button",{key:re.label,type:"button",class:Re(["section-alternative-tab",{active:Ke.value===ve}]),role:"tab","aria-selected":Ke.value===ve,onClick:So=>ya(ve)},K(re.label),11,aE))),128))])):ue("",!0),sn.value?(R(),N("div",{key:1,class:"prayer-copy",innerHTML:sn.value},null,8,sE)):ue("",!0),He.value?(R(),N("div",nE,[b("div",rE,[b("div",{class:Re(["announcements-time",{running:go.value}])},K(A.value),3),b("div",iE,[go.value?(R(),N("button",{key:1,type:"button",class:"announcements-action primary","aria-label":"Detener cronómetro",onClick:q},[Pe(pe(ev),{size:14}),ee[2]||(ee[2]=b("span",null,"Detener",-1))])):(R(),N("button",{key:0,type:"button",class:"announcements-action primary","aria-label":"Iniciar cronómetro",onClick:P},[Pe(pe(Fd),{size:15}),ee[1]||(ee[1]=b("span",null,"Iniciar",-1))])),b("button",{type:"button",class:"announcements-action subtle","aria-label":"Reiniciar cronómetro",disabled:Bo.value===0&&!go.value,onClick:z},[Pe(pe(Fb),{size:14})],8,tE)])]),Me.value&&Y.value.length?(R(),N("div",lE,[b("div",cE,[ee[3]||(ee[3]=b("span",null,"Histórico",-1)),b("strong",null,"Media "+K(j.value),1)]),b("ol",null,[(R(!0),N(Se,null,yo(Y.value,re=>(R(),N("li",{key:`${re.stoppedAt}-${re.durationMs}`},[b("span",null,K(L(re.stoppedAt)),1),b("strong",null,K(T(re.durationMs)),1)]))),128))])])):ue("",!0)])):ue("",!0),e.section.items?.length?(R(),N("ol",{key:3,class:Re(["response-list",{"is-preces-list":e.section.title==="Preces"}])},[(R(!0),N(Se,null,yo(e.section.items,(re,ve)=>(R(),N("li",{key:`${e.section.title}-${ve}`,innerHTML:pe(wr)(re,{postureInstructionsEnabled:e.postureInstructionsEnabled})},null,8,uE))),128))],2)):ue("",!0)],10,Uh))}});function mE(e){const o=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0");return`${o}-${a}-${s}`}function bm(e){const[o,a,s]=e.split("-").map(Number);return new Date(o,a-1,s)}function vm(e,o){const a=bm(e);return a.setDate(a.getDate()+o),mE(a)}function Ec(e){return new Intl.DateTimeFormat("es-ES",{weekday:"long",day:"numeric",month:"long",year:"numeric"}).format(e)}const pa="America/Costa_Rica";function Un(e=pa,o=new Date){const a=new Intl.DateTimeFormat("en-CA",{timeZone:e,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(o),s=n=>a.find(r=>r.type===n)?.value??"00";return`${s("year")}-${s("month")}-${s("day")}`}function Ac(e=new Date){return vm(Un(pa,e),1)}function pE(e=pa,o=new Date){const s=new Intl.DateTimeFormat("en-CA",{timeZone:e,hour:"numeric",hourCycle:"h23"}).formatToParts(o).find(n=>n.type==="hour")?.value;return s?Number(s):0}function fE(e,o=pa){return Un(o,new Date(e))}const tt=`Gloria al Padre, y al Hijo, y al Espíritu Santo.
Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.`;function gE(e){return["$V.$ Dios mío, ven en mi auxilio.","$R.$ Señor, date prisa en socorrerme.","$R.$ Gloria al Padre, y al Hijo, y al Espíritu Santo.","$V.$ Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.",e?"":"Aleluya."].filter(Boolean).join(`

`)}const SE=`$V.$ Señor, ábreme los labios.
$R.$ Y mi boca proclamará tu alabanza.`,bE=`Bendito sea el Señor, Dios de Israel,
porque ha visitado y redimido a su pueblo,
suscitándonos una fuerza de salvación
en la casa de David, su siervo,
según lo había predicho desde antiguo
por boca de sus santos profetas.

Es la salvación que nos libra de nuestros enemigos
y de la mano de todos los que nos odian;
realizando la misericordia que tuvo con nuestros padres,
recordando su santa alianza
y el juramento que juró a nuestro padre Abrahán.

Para concedernos que, libres de temor,
arrancados de la mano de los enemigos,
le sirvamos con santidad y justicia,
en su presencia, todos nuestros días.

Y a ti, niño, te llamarán profeta del Altísimo,
porque irás delante del Señor
a preparar sus caminos,
anunciando a su pueblo la salvación,
el perdón de sus pecados.

Por la entrañable misericordia de nuestro Dios,
nos visitará el sol que nace de lo alto,
para iluminar a los que viven en tinieblas
y en sombra de muerte,
para guiar nuestros pasos por el camino de la paz.`,vE=`Proclama mi alma la grandeza del Señor,
se alegra mi espíritu en Dios, mi salvador,
porque ha mirado la humillación de su esclava.

Desde ahora me felicitarán todas las generaciones,
porque el Poderoso ha hecho obras grandes por mí:
su nombre es santo,
y su misericordia llega a sus fieles
de generación en generación.

Él hace proezas con su brazo:
dispersa a los soberbios de corazón,
derriba del trono a los poderosos
y enaltece a los humildes,
a los hambrientos los colma de bienes
y a los ricos los despide vacíos.

Auxilia a Israel, su siervo,
acordándose de la misericordia
como lo había prometido a nuestros padres,
en favor de Abrahán y su descendencia por siempre.`,yE=`Ahora, Señor, según tu promesa,
puedes dejar a tu siervo irse en paz,
porque mis ojos han visto a tu Salvador,
a quien has presentado ante todos los pueblos:
luz para alumbrar a las naciones
y gloria de tu pueblo Israel.`,hE={es:`Padre nuestro, que estás en el cielo,
santificado sea tu Nombre;
venga a nosotros tu reino;
hágase tu voluntad en la tierra como en el cielo.

Danos hoy nuestro pan de cada día;
perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden;
no nos dejes caer en la tentación,
y líbranos del mal.`,la:`Pater noster, qui es in caelis:
sanctificetur nomen tuum;
adveniat regnum tuum;
fiat voluntas tua, sicut in caelo et in terra.

Panem nostrum cotidianum da nobis hodie;
et dimitte nobis debita nostra,
sicut et nos dimittimus debitoribus nostris;
et ne nos inducas in tentationem;
sed libera nos a malo.`};function Oa(e){return hE[e]}const EE={almaRedemptoris:`Santa Madre del Redentor,
puerta siempre abierta del cielo,
estrella del mar,
socorre al pueblo que cae
y procura levantarse.

Tú que ante la admiración de la naturaleza
engendraste a tu santo Creador,
virgen antes y después,
que recibiste de Gabriel aquel saludo,
ten piedad de nosotros pecadores.`,aveRegina:`Salve, Reina de los cielos;
salve, Señora de los ángeles;
salve, raíz; salve, puerta,
que dio paso a nuestra luz.

Alégrate, Virgen gloriosa,
entre todas la más bella;
salve, agraciada doncella,
ruega a Cristo por nosotros.`,reginaCaeli:`Reina del cielo, alégrate, aleluya,
porque el Señor, a quien mereciste llevar, aleluya,
ha resucitado según su palabra, aleluya.
Ruega al Señor por nosotros, aleluya.`,salveRegina:`Dios te salve, Reina y Madre de misericordia,
vida, dulzura y esperanza nuestra; Dios te salve.
A ti llamamos los desterrados hijos de Eva;
a ti suspiramos, gimiendo y llorando en este valle de lágrimas.

Ea, pues, Señora, abogada nuestra,
vuelve a nosotros esos tus ojos misericordiosos.
Y, después de este destierro,
muéstranos a Jesús, fruto bendito de tu vientre.
¡Oh clemente, oh piadosa, oh dulce Virgen María!`};function AE(e){return EE[e]}const PE=`Oh, Señora mía,
Oh, Madre mía,
yo me ofrezco del todo a ti.

Y, en prueba de mi filial afecto,
te consagro en este día
mis ojos, mis oídos,
mi lengua, mi corazón,
en una palabra: todo mi ser.

Ya que soy todo tuyo,
oh, Madre de bondad,
guárdame, defiéndeme y utilízame
como instrumento y posesión tuya.

Amén.`,qE={blessing:`$V.$ El Señor nos bendiga, nos guarde de todo mal y nos lleve a la vida eterna.
$R.$ Amén.`,short:`$V.$ Bendigamos al Señor.
$R.$ Demos gracias a Dios.`,compline:`$V.$ El Señor todopoderoso nos conceda una noche tranquila y una muerte santa.
$R.$ Amén.`};function ym(e){return qE[e]}const IE={liturgico:{label:"Cancionero Litúrgico",url:"https://cancionero-liturgico.org/cancion.html",note:"partituras, midi y, en varios casos, acordes para acompañamiento"},malaga:{label:"Diócesis de Málaga",url:"https://diocesismalaga.es/inicio/2013030102/cancionero-liturgico/",note:"cancionero litúrgico diocesano con partituras y acordes para guitarra"},stella:{label:"Cancionero Stella Maris",url:"https://www.cancionerostellamaris.com/",note:"cancionero católico con acordes y grabaciones"},schoenstatt:{label:"Cancionero Schoenstatt Akati",url:"https://www.schoenstatt.org.py/sites/www.schoenstatt.org.py/files/docs/cancionero_tv_2014_con_notas.pdf",note:"cancionero de Schoenstatt con notas y acordes"},safaMadrid:{label:"Parroquia Sagrada Familia, Madrid",url:"https://parroquiasafa.archimadrid.es/cantos/",note:"cantos usados en misa de familias"},sanEsteban:{label:"Parroquia San Esteban, Fuenlabrada",url:"https://sanestebanfuenlabrada.es/wp-content/uploads/2023/10/Cancionero-Misa-de-Familias-Parroquia-San-Esteban-Fuenlabrada.pdf",note:"cancionero de misa de familias dividido por partes de la misa y tiempos litúrgicos"},pilgrim:{label:"Cancionero de misa familiar",url:"https://pilgrim.neocities.org/cancionero/",note:"cantos con acordes organizados por secciones y tiempos litúrgicos"},domingo:{label:"Selección de misa del domingo",url:"https://pilgrim.neocities.org/cancionero/resources/pages/misa-del-domingo",note:"selecciones dominicales con letras y acordes para guitarra"},juaninos:{label:"Juaninos México",url:"https://juaninos.org.mx/musica-catolica/cantos-para-misa-cancionero-catolico-letra-y-acordes/",note:"criterios y recursos mexicanos para elegir cantos de misa"},almaMisas:{label:"Alma Misas, Guadalajara",url:"https://almamisas.com/",note:"cantos litúrgicos mexicanos por secciones de la misa"},vidaSanto:{label:"Vida de Santo México",url:"https://vidadesanto.com/cancionero-catolico-letra-y-acordes/",note:"cantoral católico mexicano por tiempo litúrgico y secciones"},rcc:{label:"Renovación Carismática Católica",url:"https://www.renovacioncarismaticamiami.com/ministerio-de-musica/cantos-para-santa-misa/",note:"estructura de cantos para Santa Misa y cancionero católico"},chantPublicDomain:{label:"Canto gregoriano tradicional",url:"https://www.cpdl.org/wiki/index.php/Main_Page",note:"textos latinos tradicionales y repertorio coral de dominio público"}},OE={entrada:"Canto de entrada",penitencial:"Señor, ten piedad",gloria:"Gloria",credo:"Canto del Credo",salmo:"Salmo responsorial cantado",aclamacion:"Aclamación cantada",ofertorio:"Canto de ofertorio",santo:"Santo",memorial:"Aclamación memorial",amen:"Amén",padrenuestro:"Padrenuestro cantado",cordero:"Cordero de Dios",comunion:"Canto de comunión",meditacion:"Canto de meditación",final:"Canto final"},CE={advent:"Adviento",adoration:"adoración",amen:"amén",christ:"Cristo",christmas:"Navidad",communion:"comunión",community:"asamblea",corpus:"Corpus Christi",easter:"Pascua",eucharist:"Eucaristía",forgiveness:"perdón",gloria:"Gloria",holy:"Santo",joy:"alegría",lent:"Cuaresma",martyr:"mártires",mary:"María",mission:"misión",offering:"ofrendas",ordinary:"tiempo ordinario",peace:"paz",pentecost:"Pentecostés",psalm:"salmo",saints:"santos",spirit:"Espíritu Santo",thanksgiving:"acción de gracias",trinity:"Trinidad",word:"Palabra"},DE=`Ubi caritas et amor,
Deus ibi est.

Congregavit nos in unum Christi amor.
Exsultemus et in ipso iucundemur.
Timeamus et amemus Deum vivum.
Et ex corde diligamus nos sincero.`,RE=`Adoro te devote, latens Deitas,
quae sub his figuris vere latitas:
tibi se cor meum totum subiicit,
quia te contemplans totum deficit.

Visus, tactus, gustus in te fallitur,
sed auditu solo tuto creditur;
credo quidquid dixit Dei Filius:
nil hoc verbo veritatis verius.

In cruce latebat sola Deitas,
at hic latet simul et humanitas:
ambo tamen credens atque confitens,
peto quod petivit latro paenitens.

Plagas, sicut Thomas, non intueor:
Deum tamen meum te confiteor.
Fac me tibi semper magis credere,
in te spem habere, te diligere.

O memoriale mortis Domini,
panis vivus vitam praestans homini:
praesta meae menti de te vivere,
et te illi semper dulce sapere.

Pie pellicane, Iesu Domine,
me immundum munda tuo sanguine,
cuius una stilla salvum facere
totum mundum quit ab omni scelere.

Iesu, quem velatum nunc aspicio,
oro fiat illud quod tam sitio:
ut te revelata cernens facie,
visu sim beatus tuae gloriae. Amen.`,$E=`Tantum ergo sacramentum
veneremur cernui,
et antiquum documentum
novo cedat ritui;
praestet fides supplementum
sensuum defectui.

Genitori Genitoque
laus et iubilatio,
salus, honor, virtus quoque
sit et benedictio;
procedenti ab utroque
compar sit laudatio. Amen.`,TE=`Ave verum corpus,
natum de Maria Virgine,
vere passum, immolatum
in cruce pro homine.

Cuius latus perforatum
fluxit aqua et sanguine:
esto nobis praegustatum
in mortis examine.

O Iesu dulcis,
o Iesu pie,
o Iesu, fili Mariae.`,LE=`$Todos.$ Creo en un solo Dios,
Padre todopoderoso,
Creador del cielo y de la tierra,
de todo lo visible y lo invisible.

Creo en un solo Señor, Jesucristo,
Hijo único de Dios,
nacido del Padre antes de todos los siglos:
Dios de Dios, Luz de Luz,
Dios verdadero de Dios verdadero,
engendrado, no creado,
de la misma naturaleza del Padre,
por quien todo fue hecho;
que por nosotros, los hombres,
y por nuestra salvación bajó del cielo,
y por obra del Espíritu Santo
se encarnó de María, la Virgen,
y se hizo hombre;
y por nuestra causa fue crucificado
en tiempos de Poncio Pilato;
padeció y fue sepultado,
y resucitó al tercer día, según las Escrituras,
y subió al cielo,
y está sentado a la derecha del Padre;
y de nuevo vendrá con gloria
para juzgar a vivos y muertos,
y su reino no tendrá fin.

Creo en el Espíritu Santo,
Señor y dador de vida,
que procede del Padre y del Hijo,
que con el Padre y el Hijo
recibe una misma adoración y gloria,
y que habló por los profetas.

Creo en la Iglesia,
que es una, santa, católica y apostólica.
Confieso que hay un solo bautismo
para el perdón de los pecados.
Espero la resurrección de los muertos
y la vida del mundo futuro.
Amén.`,ME=`$Todos.$ Creo en Dios, Padre todopoderoso,
Creador del cielo y de la tierra.

Creo en Jesucristo, su único Hijo, nuestro Señor,
que fue concebido por obra y gracia del Espíritu Santo,
nació de santa María Virgen,
padeció bajo el poder de Poncio Pilato,
fue crucificado, muerto y sepultado,
descendió a los infiernos,
al tercer día resucitó de entre los muertos,
subió a los cielos
y está sentado a la derecha de Dios, Padre todopoderoso.
Desde allí ha de venir a juzgar a vivos y muertos.

Creo en el Espíritu Santo,
la santa Iglesia católica,
la comunión de los santos,
el perdón de los pecados,
la resurrección de la carne
y la vida eterna.
Amén.`,NE=`Credo in unum Deum,
Patrem omnipotentem,
factorem caeli et terrae,
visibilium omnium et invisibilium.

Et in unum Dominum Iesum Christum,
Filium Dei unigenitum,
et ex Patre natum ante omnia saecula.
Deum de Deo, lumen de lumine,
Deum verum de Deo vero,
genitum, non factum,
consubstantialem Patri:
per quem omnia facta sunt.
Qui propter nos homines
et propter nostram salutem
descendit de caelis.

Et incarnatus est de Spiritu Sancto
ex Maria Virgine,
et homo factus est.
Crucifixus etiam pro nobis
sub Pontio Pilato;
passus et sepultus est,
et resurrexit tertia die,
secundum Scripturas,
et ascendit in caelum,
sedet ad dexteram Patris.
Et iterum venturus est cum gloria,
iudicare vivos et mortuos,
cuius regni non erit finis.

Et in Spiritum Sanctum,
Dominum et vivificantem:
qui ex Patre Filioque procedit.
Qui cum Patre et Filio
simul adoratur et conglorificatur:
qui locutus est per prophetas.

Et unam, sanctam, catholicam
et apostolicam Ecclesiam.
Confiteor unum baptisma
in remissionem peccatorum.
Et exspecto resurrectionem mortuorum,
et vitam venturi saeculi. Amen.`,_E=`Veni, Creator Spiritus,
mentes tuorum visita,
imple superna gratia
quae tu creasti pectora.

Qui diceris Paraclitus,
altissimi donum Dei,
fons vivus, ignis, caritas
et spiritalis unctio.

Tu septiformis munere,
digitus paternae dexterae,
tu rite promissum Patris,
sermone ditans guttura.

Accende lumen sensibus,
infunde amorem cordibus,
infirma nostri corporis
virtute firmans perpeti.

Hostem repellas longius,
pacemque dones protinus;
ductore sic te praevio
vitemus omne noxium.

Per te sciamus da Patrem
noscamus atque Filium,
te utriusque Spiritum
credamus omni tempore.

Deo Patri sit gloria,
et Filio, qui a mortuis
surrexit, ac Paraclito,
in saeculorum saecula. Amen.`,zE=`Victimae paschali laudes
immolent Christiani.
Agnus redemit oves:
Christus innocens Patri
reconciliavit peccatores.

Mors et vita duello
conflixere mirando:
dux vitae mortuus
regnat vivus.

Dic nobis, Maria,
quid vidisti in via?
Sepulcrum Christi viventis
et gloriam vidi resurgentis.

Angelicos testes,
sudarium et vestes.
Surrexit Christus spes mea:
praecedet suos in Galilaeam.

Scimus Christum surrexisse
a mortuis vere:
tu nobis, victor Rex,
miserere. Amen. Alleluia.`,JE=`Salve, Regina,
mater misericordiae,
vita, dulcedo et spes nostra, salve.

Ad te clamamus,
exsules filii Evae.
Ad te suspiramus,
gementes et flentes
in hac lacrimarum valle.

Eia ergo, advocata nostra,
illos tuos misericordes oculos
ad nos converte.
Et Iesum, benedictum fructum ventris tui,
nobis post hoc exsilium ostende.
O clemens, o pia,
o dulcis Virgo Maria.`,jE=`Pange, lingua, gloriosi
corporis mysterium,
sanguinisque pretiosi
quem in mundi pretium
fructus ventris generosi
Rex effudit gentium.

Nobis datus, nobis natus
ex intacta Virgine,
et in mundo conversatus,
sparso verbi semine,
sui moras incolatus
miro clausit ordine.

In supremae nocte cenae
recumbens cum fratribus,
observata lege plene
cibis in legalibus,
cibum turbae duodenae
se dat suis manibus.

Verbum caro, panem verum
verbo carnem efficit;
fitque sanguis Christi merum,
et si sensus deficit,
ad firmandum cor sincerum
sola fides sufficit.

Tantum ergo sacramentum
veneremur cernui,
et antiquum documentum
novo cedat ritui;
praestet fides supplementum
sensuum defectui.

Genitori Genitoque
laus et iubilatio,
salus, honor, virtus quoque
sit et benedictio;
procedenti ab utroque
compar sit laudatio. Amen.`,xE=`Panis angelicus
fit panis hominum;
dat panis caelicus
figuris terminum.

O res mirabilis:
manducat Dominum
pauper, servus et humilis.

Te trina Deitas
unaque poscimus:
sic nos tu visita,
sicut te colimus.

Per tuas semitas
duc nos quo tendimus
ad lucem quam inhabitas.`,UE=`Veni, Sancte Spiritus,
et emitte caelitus
lucis tuae radium.

Veni, pater pauperum,
veni, dator munerum,
veni, lumen cordium.

Consolator optime,
dulcis hospes animae,
dulce refrigerium.

In labore requies,
in aestu temperies,
in fletu solacium.

O lux beatissima,
reple cordis intima
tuorum fidelium.

Sine tuo numine,
nihil est in homine,
nihil est innoxium.

Lava quod est sordidum,
riga quod est aridum,
sana quod est saucium.

Flecte quod est rigidum,
fove quod est frigidum,
rege quod est devium.

Da tuis fidelibus,
in te confidentibus,
sacrum septenarium.

Da virtutis meritum,
da salutis exitum,
da perenne gaudium. Amen. Alleluia.`,HE=`Attende, Domine,
et miserere,
quia peccavimus tibi.

Ad te Rex summe,
omnium Redemptor,
oculos nostros
sublevamus flentes:
exaudi, Christe,
supplicantum preces.

Dextera Patris,
lapis angularis,
via salutis,
ianua caelestis,
ablue nostri
maculas delicti.

Rogamus, Deus,
tuam maiestatem:
auribus sacris
gemitus exaudi:
crimina nostra
placidus indulge.

Tibi fatemur
crimina admissa:
contrito corde
pandimus occulta;
tua, Redemptor,
pietas ignoscat.

Innocens captus,
nec repugnans ductus,
testibus falsis
pro impiis damnatus:
quos redemisti,
tu conserva, Christe.`,VE=`Asperges me, Domine,
hyssopo et mundabor:
lavabis me,
et super nivem dealbabor.

Miserere mei, Deus,
secundum magnam misericordiam tuam.

Gloria Patri, et Filio,
et Spiritui Sancto:
sicut erat in principio,
et nunc, et semper,
et in saecula saeculorum. Amen.`,wE=`Vidi aquam egredientem
de templo a latere dextro, alleluia:
et omnes ad quos pervenit aqua ista
salvi facti sunt,
et dicent: alleluia, alleluia.

Confitemini Domino,
quoniam bonus:
quoniam in saeculum
misericordia eius.`,FE=`Parce, Domine,
parce populo tuo:
ne in aeternum
irascaris nobis.`,kE=`Crux fidelis, inter omnes
arbor una nobilis:
nulla talem silva profert
flore, fronde, germine.

Dulce lignum,
dulces clavos,
dulce pondus sustinet.`,BE=`O salutaris Hostia,
quae caeli pandis ostium:
bella premunt hostilia,
da robur, fer auxilium.

Uni trinoque Domino
sit sempiterna gloria,
qui vitam sine termino
nobis donet in patria. Amen.`,YE=`Anima Christi, sanctifica me.
Corpus Christi, salva me.
Sanguis Christi, inebria me.
Aqua lateris Christi, lava me.

Passio Christi, conforta me.
O bone Iesu, exaudi me.
Intra tua vulnera absconde me.

Ne permittas me separari a te.
Ab hoste maligno defende me.
In hora mortis meae voca me,
et iube me venire ad te,
ut cum Sanctis tuis laudem te
in saecula saeculorum. Amen.`,GE=`Alma de Cristo, santifícame.
Cuerpo de Cristo, sálvame.
Sangre de Cristo, embriágame.
Agua del costado de Cristo, lávame.

Pasión de Cristo, confórtame.
Oh, buen Jesús, óyeme.
Dentro de tus llagas, escóndeme.

No permitas que me aparte de ti.
Del enemigo malo, defiéndeme.
En la hora de mi muerte, llámame,
y mándame ir a ti,
para que con tus santos te alabe
por los siglos de los siglos. Amén.`,QE=`Regina caeli, laetare, alleluia:
quia quem meruisti portare, alleluia,
resurrexit, sicut dixit, alleluia:
ora pro nobis Deum, alleluia.`,WE=`Sub tuum praesidium
confugimus, sancta Dei Genetrix.

Nostras deprecationes
ne despicias in necessitatibus,
sed a periculis cunctis
libera nos semper,
Virgo gloriosa et benedicta.`,KE=`Alma Redemptoris Mater,
quae pervia caeli porta manes,
et stella maris,
succurre cadenti
surgere qui curat populo:
tu quae genuisti,
natura mirante,
tuum sanctum Genitorem:
Virgo prius ac posterius,
Gabrielis ab ore
sumens illud Ave,
peccatorum miserere.`,XE=`Ave, Regina caelorum,
ave, Domina angelorum:
salve, radix, salve, porta,
ex qua mundo lux est orta.

Gaude, Virgo gloriosa,
super omnes speciosa:
vale, o valde decora,
et pro nobis Christum exora.`,ZE=`Ave, maris stella,
Dei Mater alma,
atque semper Virgo,
felix caeli porta.

Sumens illud Ave
Gabrielis ore,
funda nos in pace,
mutans Evae nomen.

Solve vincla reis,
profer lumen caecis,
mala nostra pelle,
bona cuncta posce.

Monstra te esse matrem:
sumat per te preces,
qui pro nobis natus
tulit esse tuus.

Virgo singularis,
inter omnes mitis,
nos culpis solutos
mites fac et castos.

Vitam praesta puram,
iter para tutum,
ut videntes Iesum
semper collaetemur.

Sit laus Deo Patri,
summo Christo decus,
Spiritui Sancto,
tribus honor unus. Amen.`,eA=`O sacrum convivium,
in quo Christus sumitur:
recolitur memoria passionis eius;
mens impletur gratia;
et futurae gloriae nobis pignus datur.
Alleluia.`,oA=`O magnum mysterium,
et admirabile sacramentum,
ut animalia viderent Dominum natum,
iacentem in praesepio.

Beata Virgo,
cuius viscera meruerunt portare
Dominum Christum.
Alleluia.`,aA=`Christus vincit,
Christus regnat,
Christus imperat.`,sA=`Rorate caeli desuper,
et nubes pluant iustum.

Ne irascaris, Domine,
ne ultra memineris iniquitatis:
ecce civitas Sancti facta est deserta,
Sion deserta facta est,
Ierusalem desolata est:
domus sanctificationis tuae et gloriae tuae,
ubi laudaverunt te patres nostri.

Peccavimus, et facti sumus
tamquam immundus nos.

Vide, Domine,
afflictionem populi tui.

Consolamini, consolamini,
popule meus.`,nA=`Conditor alme siderum,
aeterna lux credentium,
Christe, redemptor omnium,
exaudi preces supplicum.

Qui condolens interitu
mortis perire saeculum,
salvasti mundum languidum,
donans reis remedium.

Vergente mundi vespere,
uti sponsus de thalamo,
egressus honestissima
Virginis matris clausula.

Cuius forti potentiae
genu curvantur omnia;
caelestia, terrestria
nutu fatentur subdita.

Te deprecamur, ultimae
magnum diei Iudicem,
armis supernae gratiae
defende nos ab hostibus.

Virtus, honor, laus, gloria
Deo Patri cum Filio,
Sancto simul Paraclito,
in saeculorum saecula. Amen.`,rA=`Adeste fideles,
laeti triumphantes,
venite, venite in Bethlehem.
Natum videte
Regem angelorum.

Venite adoremus,
venite adoremus,
venite adoremus Dominum.

Deum de Deo,
lumen de lumine,
gestant puellae viscera.
Deum verum,
genitum non factum.

Venite adoremus,
venite adoremus,
venite adoremus Dominum.`,iA=`O filii et filiae,
Rex caelestis, Rex gloriae,
morte surrexit hodie. Alleluia.

Et mane prima sabbati,
ad ostium monumenti,
accesserunt discipuli. Alleluia.

Et Maria Magdalene,
et Iacobi, et Salome,
venerunt corpus ungere. Alleluia.

Discipulis adstantibus,
in medio stetit Christus,
dicens: Pax vobis omnibus. Alleluia.

Vide, Thoma, vide latus,
vide pedes, vide manus:
noli esse incredulus. Alleluia.

Beati qui non viderunt
et firmiter crediderunt:
vitam aeternam habebunt. Alleluia.

In hoc festo sanctissimo
sit laus et iubilatio:
benedicamus Domino. Alleluia.`,tA=`Vexilla Regis prodeunt,
fulget Crucis mysterium,
qua vita mortem pertulit
et morte vitam protulit.

Quae vulnerata lanceae
mucrone diro, criminum
ut nos lavaret sordibus,
manavit unda et sanguine.

Impleta sunt quae concinit
David fideli carmine,
dicendo nationibus:
regnavit a ligno Deus.

Arbor decora et fulgida,
ornata Regis purpura,
electa digno stipite
tam sancta membra tangere.

Beata, cuius brachiis
pretium pependit saeculi:
statera facta corporis
tulitque praedam tartari.

O Crux ave, spes unica,
hoc Passionis tempore:
piis adauge gratiam,
reisque dele crimina.

Te, fons salutis, Trinitas,
collaudet omnis spiritus:
quibus crucis victoriam
largiris, adde praemium. Amen.`,lA=`Stabat Mater dolorosa
iuxta crucem lacrimosa,
dum pendebat Filius.

Cuius animam gementem,
contristatam et dolentem,
pertransivit gladius.

O quam tristis et afflicta
fuit illa benedicta,
mater Unigeniti.

Quae maerebat et dolebat,
pia Mater, dum videbat
nati poenas inclyti.

Quis est homo qui non fleret,
Matrem Christi si videret
in tanto supplicio?

Quis non posset contristari,
Christi Matrem contemplari
dolentem cum Filio?

Pro peccatis suae gentis
vidit Iesum in tormentis
et flagellis subditum.

Vidit suum dulcem natum
moriendo desolatum,
dum emisit spiritum.

Sancta Mater, istud agas,
crucifixi fige plagas
cordi meo valide.

Fac me tecum pie flere,
crucifixo condolere,
donec ego vixero.

Iuxta crucem tecum stare,
et me tibi sociare
in planctu desidero.

Quando corpus morietur,
fac ut animae donetur
paradisi gloria. Amen.`,cA=`Lauda, Sion, Salvatorem,
lauda ducem et pastorem
in hymnis et canticis.

Quantum potes, tantum aude:
quia maior omni laude,
nec laudare sufficis.

Laudis thema specialis,
panis vivus et vitalis
hodie proponitur.

Quem in sacrae mensa cenae,
turbae fratrum duodenae
datum non ambigitur.

Sit laus plena, sit sonora,
sit iucunda, sit decora
mentis iubilatio.

Dies enim solemnis agitur,
in qua mensae prima recolitur
huius institutio.

In hac mensa novi Regis,
novum Pascha novae legis
Phase vetus terminat.

Vetustatem novitas,
umbram fugat veritas,
noctem lux eliminat.

Quod in cena Christus gessit,
faciendum hoc expressit
in sui memoriam.

Docti sacris institutis,
panem, vinum in salutis
consecramus hostiam.

Dogma datur Christianis,
quod in carnem transit panis,
et vinum in sanguinem.

Caro cibus, sanguis potus:
manet tamen Christus totus,
sub utraque specie.

A sumente non concisus,
non confractus, non divisus:
integer accipitur.

Sumit unus, sumunt mille:
quantum isti, tantum ille:
nec sumptus consumitur.

Sumunt boni, sumunt mali:
sorte tamen inaequali,
vitae vel interitus.

Mors est malis, vita bonis:
vide paris sumptionis
quam sit dispar exitus.

Ecce panis angelorum,
factus cibus viatorum:
vere panis filiorum,
non mittendus canibus.

In figuris praesignatur,
cum Isaac immolatur,
agnus Paschae deputatur,
datur manna patribus.

Bone pastor, panis vere,
Iesu, nostri miserere:
tu nos pasce, nos tuere,
tu nos bona fac videre
in terra viventium.

Tu qui cuncta scis et vales,
qui nos pascis hic mortales:
tuos ibi commensales,
coheredes et sodales
fac sanctorum civium. Amen. Alleluia.`,uA=[{title:"Ubi caritas",sections:["ofertorio","comunion","meditacion"],tags:["community","peace","eucharist","ordinary"],source:"chantPublicDomain",note:"Antífona tradicional para caridad, unidad, Jueves Santo, ofertorio o comunión contemplativa.",lyricsTitle:"Ubi caritas",lyrics:DE,priority:20},{title:"Adoro te devote",sections:["comunion","meditacion"],tags:["adoration","eucharist","communion","corpus"],source:"chantPublicDomain",note:"Himno eucarístico tradicional para comunión, adoración o Corpus Christi.",lyricsTitle:"Adoro te devote",lyrics:RE,priority:22},{title:"Tantum ergo",sections:["comunion","meditacion","final"],tags:["adoration","eucharist","corpus"],source:"chantPublicDomain",note:"Himno eucarístico tradicional, especialmente adecuado en Corpus o adoración después de la comunión.",lyricsTitle:"Tantum ergo",lyrics:$E,priority:22},{title:"O salutaris Hostia",sections:["comunion","meditacion","final"],tags:["adoration","eucharist","corpus"],source:"chantPublicDomain",note:"Himno eucarístico breve para comunión, adoración o Corpus Christi.",lyricsTitle:"O salutaris Hostia",lyrics:BE,priority:20},{title:"Ave verum corpus",sections:["comunion","meditacion"],tags:["eucharist","communion","corpus","mary"],source:"chantPublicDomain",note:"Texto eucarístico breve y sobrio para comunión o meditación.",lyricsTitle:"Ave verum corpus",lyrics:TE,priority:18},{title:"O sacrum convivium",sections:["comunion","meditacion"],tags:["eucharist","communion","adoration","corpus"],source:"chantPublicDomain",note:"Antífona eucarística breve para comunión, adoración o acción de gracias.",lyricsTitle:"O sacrum convivium",lyrics:eA,priority:20},{title:"Anima Christi",sections:["comunion","meditacion"],tags:["communion","eucharist","adoration"],source:"chantPublicDomain",note:"Oración tradicional para acción de gracias después de la comunión.",lyricsTitle:"Anima Christi",lyrics:YE,priority:18},{title:"Veni Creator Spiritus",sections:["entrada","meditacion","final"],tags:["spirit","pentecost","mission"],source:"chantPublicDomain",note:"Himno tradicional al Espíritu Santo; prioritario en Pentecostés, confirmaciones y envíos.",lyricsTitle:"Veni Creator Spiritus",lyrics:_E,priority:22},{title:"Victimae paschali laudes",sections:["entrada","aclamacion","meditacion","final"],tags:["easter","christ","joy"],source:"chantPublicDomain",note:"Secuencia pascual tradicional para Pascua y días con tono de resurrección.",lyricsTitle:"Victimae paschali laudes",lyrics:zE,priority:22},{title:"Salve Regina",sections:["final","meditacion"],tags:["mary","peace"],source:"chantPublicDomain",note:"Antífona mariana tradicional para final o acción de gracias.",lyricsTitle:"Salve Regina",lyrics:JE,priority:18},{title:"Regina caeli",sections:["final","meditacion"],tags:["mary","easter","joy"],source:"chantPublicDomain",note:"Antífona mariana propia del tiempo pascual.",lyricsTitle:"Regina caeli",lyrics:QE,priority:22},{title:"Sub tuum praesidium",sections:["final","meditacion"],tags:["mary","peace"],source:"chantPublicDomain",note:"Antífona mariana antigua para final o acción de gracias.",lyricsTitle:"Sub tuum praesidium",lyrics:WE,priority:16},{title:"Alma Redemptoris Mater",sections:["final","meditacion"],tags:["mary","christmas","advent"],source:"chantPublicDomain",note:"Antífona mariana tradicional para Adviento y Navidad.",lyricsTitle:"Alma Redemptoris Mater",lyrics:KE,priority:20},{title:"Ave Regina caelorum",sections:["final","meditacion"],tags:["mary","peace"],source:"chantPublicDomain",note:"Antífona mariana tradicional para final o meditación.",lyricsTitle:"Ave Regina caelorum",lyrics:XE,priority:16},{title:"Ave maris stella",sections:["final","meditacion"],tags:["mary","peace"],source:"chantPublicDomain",note:"Himno mariano tradicional, útil en fiestas de la Virgen y como canto final.",lyricsTitle:"Ave maris stella",lyrics:ZE,priority:18},{title:"Pange lingua",sections:["entrada","ofertorio","comunion","meditacion","final"],tags:["adoration","eucharist","communion","corpus"],source:"chantPublicDomain",note:"Himno eucarístico tradicional; muy fuerte en Corpus Christi, Jueves Santo, comunión o adoración.",lyricsTitle:"Pange lingua",lyrics:jE,priority:24},{title:"Panis angelicus",sections:["comunion","meditacion"],tags:["adoration","eucharist","communion","corpus"],source:"chantPublicDomain",note:"Texto eucarístico breve para comunión, Corpus Christi o acción de gracias.",lyricsTitle:"Panis angelicus",lyrics:xE,priority:22},{title:"Lauda Sion",sections:["entrada","aclamacion","comunion","meditacion","final"],tags:["eucharist","communion","corpus"],source:"chantPublicDomain",note:"Secuencia tradicional de Corpus Christi; encaja especialmente en Corpus, comunión o meditación eucarística.",lyricsTitle:"Lauda Sion",lyrics:cA,priority:24},{title:"Veni Sancte Spiritus",sections:["entrada","aclamacion","meditacion","final"],tags:["spirit","pentecost"],source:"chantPublicDomain",note:"Secuencia tradicional de Pentecostés; útil como canto al Espíritu o meditación.",lyricsTitle:"Veni Sancte Spiritus",lyrics:UE,priority:24},{title:"Attende Domine",sections:["penitencial","meditacion"],tags:["forgiveness","lent"],source:"chantPublicDomain",note:"Canto penitencial tradicional para Cuaresma o celebraciones con fuerte tono de conversión.",lyricsTitle:"Attende Domine",lyrics:HE,priority:22},{title:"Asperges me",sections:["penitencial","entrada","meditacion"],tags:["forgiveness","ordinary"],source:"chantPublicDomain",note:"Antífona tradicional de aspersión fuera del tiempo pascual; útil cuando se sustituye el acto penitencial por la aspersión.",lyricsTitle:"Asperges me",lyrics:VE,priority:18},{title:"Vidi aquam",sections:["penitencial","entrada","meditacion"],tags:["easter","forgiveness"],source:"chantPublicDomain",note:"Antífona pascual de aspersión; prioritaria cuando se hace la aspersión en Pascua.",lyricsTitle:"Vidi aquam",lyrics:wE,priority:22},{title:"Parce Domine",sections:["penitencial","meditacion"],tags:["forgiveness","lent"],source:"chantPublicDomain",note:"Aclamación penitencial breve y tradicional, especialmente útil en Cuaresma.",lyricsTitle:"Parce Domine",lyrics:FE,priority:18},{title:"Rorate caeli",sections:["entrada","aclamacion","meditacion"],tags:["advent","christ","word"],source:"chantPublicDomain",note:"Canto tradicional de Adviento, de súplica por la venida del Justo.",lyricsTitle:"Rorate caeli",lyrics:sA,priority:24},{title:"Conditor alme siderum",sections:["entrada","meditacion","final"],tags:["advent","christ"],source:"chantPublicDomain",note:"Himno tradicional de Adviento para entrada o meditación.",lyricsTitle:"Conditor alme siderum",lyrics:nA,priority:20},{title:"Adeste fideles",sections:["entrada","final"],tags:["christmas","joy","christ"],source:"chantPublicDomain",note:"Canto tradicional de Navidad para entrada o final.",lyricsTitle:"Adeste fideles",lyrics:rA,priority:22},{title:"O magnum mysterium",sections:["entrada","meditacion","final"],tags:["christmas","christ","mary"],source:"chantPublicDomain",note:"Texto tradicional de Navidad para meditación, entrada o final.",lyricsTitle:"O magnum mysterium",lyrics:oA,priority:20},{title:"Christus vincit",sections:["entrada","final","meditacion"],tags:["christ","trinity","joy"],source:"chantPublicDomain",note:"Aclamación tradicional a Cristo Rey para entrada, final o celebraciones cristológicas.",lyricsTitle:"Christus vincit",lyrics:aA,priority:18},{title:"O filii et filiae",sections:["entrada","aclamacion","final"],tags:["easter","joy","christ"],source:"chantPublicDomain",note:"Canto pascual tradicional, especialmente útil en Pascua y domingos pascuales.",lyricsTitle:"O filii et filiae",lyrics:iA,priority:22},{title:"Vexilla Regis",sections:["entrada","meditacion","final"],tags:["lent","christ"],source:"chantPublicDomain",note:"Himno tradicional de la Cruz, fuerte para Cuaresma, Pasión y Viernes Santo.",lyricsTitle:"Vexilla Regis",lyrics:tA,priority:22},{title:"Crux fidelis",sections:["meditacion","final"],tags:["lent","christ"],source:"chantPublicDomain",note:"Refrán tradicional para la adoración de la Cruz y meditaciones de Pasión.",lyricsTitle:"Crux fidelis",lyrics:kE,priority:20},{title:"Stabat Mater",sections:["meditacion","final"],tags:["lent","mary","christ"],source:"chantPublicDomain",note:"Secuencia tradicional junto a la Cruz; útil en Cuaresma, Pasión y celebraciones de la Virgen Dolorosa.",lyricsTitle:"Stabat Mater",lyrics:lA,priority:20},{title:"Juntos como hermanos",sections:["entrada","final"],tags:["community","ordinary","joy"],source:"schoenstatt",note:"Entrada sencilla cuando se quiere subrayar asamblea y camino común.",priority:8},{title:"Qué alegría cuando me dijeron",sections:["entrada","salmo"],tags:["psalm","joy","community","ordinary"],source:"schoenstatt",note:"Muy apto para entrada dominical o celebración con tono festivo.",priority:10},{title:"Dios nos convoca",sections:["entrada"],tags:["community","ordinary"],source:"sanEsteban",note:"Entrada centrada en la reunión de la asamblea."},{title:"El Señor nos ha reunido",sections:["entrada"],tags:["community","joy","ordinary"],source:"sanEsteban",note:"Entrada de convocatoria comunitaria."},{title:"Vienen con alegría",sections:["entrada","final"],tags:["joy","community","ordinary"],source:"sanEsteban",note:"Buena para una entrada viva de domingo.",priority:5},{title:"Reunidos en su nombre",sections:["entrada"],tags:["community","christ","ordinary"],source:"sanEsteban",note:"Entrada sobria para tiempo ordinario."},{title:"Un pueblo camina",sections:["entrada","final"],tags:["community","mission","ordinary"],source:"sanEsteban",note:"Encaja cuando el día tiene tono de seguimiento o misión."},{title:"Pueblo de reyes",sections:["entrada","final"],tags:["community","christ","mission"],source:"liturgico",note:"Entrada solemne para una asamblea grande."},{title:"Alegre la mañana",sections:["entrada"],tags:["joy","thanksgiving","ordinary"],source:"liturgico",note:"Entrada luminosa para celebraciones de mañana."},{title:"Aclamad al Señor",sections:["entrada","final"],tags:["joy","community","ordinary"],source:"liturgico",note:"Opción festiva y amplia para iniciar la celebración."},{title:"Alabaré a mi Señor",sections:["entrada","final"],tags:["joy","thanksgiving","ordinary"],source:"liturgico",note:"De corte carismático/popular para entrada alegre."},{title:"Cristo joven",sections:["entrada","final"],tags:["christ","mission","joy"],source:"schoenstatt",note:"Útil en misa de jóvenes o celebración con tono misionero."},{title:"Enciéndeme",sections:["entrada","final","meditacion"],tags:["mission","spirit","offering"],source:"safaMadrid",note:"Entrada o envío cuando el día pide disponibilidad y ardor apostólico.",priority:6},{title:"Iglesia joven",sections:["entrada","final"],tags:["community","mission","joy"],source:"sanEsteban",note:"Entrada viva, especialmente con jóvenes o familias."},{title:"Hacia ti",sections:["entrada","ofertorio"],tags:["offering","ordinary"],source:"schoenstatt",note:"Buena para procesión de entrada o presentación de dones."},{title:"Ven, ven, Señor",sections:["entrada","aclamacion"],tags:["advent","christ"],source:"sanEsteban",note:"Prioritaria en Adviento.",priority:18},{title:"Si rasgaras los cielos",sections:["entrada","aclamacion"],tags:["advent","word"],source:"schoenstatt",note:"Adviento con tono de súplica."},{title:"Hoy en la tierra",sections:["entrada","final"],tags:["christmas","joy"],source:"pilgrim",note:"Navidad o días del tiempo de Navidad.",priority:18},{title:"Los niños hebreos",sections:["entrada"],tags:["christ","joy"],source:"sanEsteban",note:"Entrada propia para Domingo de Ramos."},{title:"Señor, ten piedad",sections:["penitencial"],tags:["forgiveness","ordinary"],source:"schoenstatt",note:"Forma sencilla para cantar el acto penitencial.",priority:8},{title:"Kyrie eleison",sections:["penitencial"],tags:["forgiveness","ordinary"],source:"pilgrim",note:"Opción breve para el rito penitencial."},{title:"Perdona a tu pueblo",sections:["penitencial"],tags:["forgiveness","lent"],source:"sanEsteban",note:"Especialmente apropiado en Cuaresma.",priority:14},{title:"Agua, lávame",sections:["penitencial","meditacion"],tags:["forgiveness","lent"],source:"liturgico",note:"Penitencial o meditación de purificación."},{title:"Hoy perdóname",sections:["penitencial","meditacion"],tags:["forgiveness","lent"],source:"schoenstatt",note:"Súplica penitencial directa."},{title:"Me levantaré",sections:["penitencial","meditacion"],tags:["forgiveness","lent"],source:"liturgico",note:"Útil cuando las lecturas hablan de conversión."},{title:"Piedad de mí, Señor",sections:["penitencial","salmo"],tags:["forgiveness","psalm","lent"],source:"liturgico",note:"Se adapta bien al salmo 50 y tiempos penitenciales."},{title:"Renuévame",sections:["penitencial","meditacion"],tags:["forgiveness","spirit"],source:"rcc",note:"Canto de renovación interior."},{title:"Gloria",sections:["gloria"],tags:["gloria","joy","trinity"],source:"schoenstatt",note:"Gloria cantado de uso general.",priority:8},{title:"Gloria de la Juventud",sections:["gloria"],tags:["gloria","joy"],source:"schoenstatt",note:"Opción más viva para celebraciones con jóvenes."},{title:"Gloria a Dios",sections:["gloria"],tags:["gloria","joy"],source:"pilgrim",note:"Gloria sencillo para domingo o solemnidad."},{title:"Gloria, gloria a Dios",sections:["gloria"],tags:["gloria","joy"],source:"rcc",note:"Opción de carácter carismático."},{title:"Mi alma canta de gozo",sections:["gloria","meditacion"],tags:["gloria","joy","mary"],source:"liturgico",note:"Puede servir como canto de alabanza si el día tiene tono mariano."},{title:"Credo niceno",sections:["credo"],tags:["trinity","christ","word","community"],source:"chantPublicDomain",note:"Texto litúrgico completo para cantar la profesión de fe ordinaria.",priority:12},{title:"Credo apostólico",sections:["credo"],tags:["trinity","christ","word","community"],source:"chantPublicDomain",note:"Texto litúrgico completo del Símbolo de los Apóstoles.",priority:10},{title:"Credo III",sections:["credo"],tags:["trinity","christ","word","community"],source:"chantPublicDomain",note:"Texto latino tradicional del Credo para canto gregoriano.",priority:14},{title:"Tu Palabra me da vida",sections:["salmo","aclamacion"],tags:["word","psalm","ordinary"],source:"safaMadrid",note:"Muy útil alrededor de la liturgia de la Palabra.",priority:10},{title:"Prueben qué bueno es el Señor",sections:["salmo","comunion"],tags:["psalm","eucharist","thanksgiving"],source:"schoenstatt",note:"Buena opción si el salmo o la comunión hablan de gustar la bondad de Dios."},{title:"El Señor es mi pastor",sections:["salmo","comunion","meditacion"],tags:["psalm","peace","christ"],source:"liturgico",note:"Para salmo 22/23, domingo pascual o día de Buen Pastor."},{title:"A ti levanto mis ojos",sections:["salmo"],tags:["psalm","ordinary"],source:"liturgico",note:"Cuando el salmo tiene tono de confianza."},{title:"Gustad y ved",sections:["salmo","comunion"],tags:["psalm","eucharist","thanksgiving"],source:"liturgico",note:"Fuerte para comunión y salmo con sabor eucarístico.",priority:8},{title:"Rendid a Yahvé",sections:["salmo","entrada"],tags:["psalm","joy","holy"],source:"schoenstatt",note:"Apropiado para salmos de alabanza."},{title:"Salmo de la creación",sections:["salmo","meditacion"],tags:["psalm","thanksgiving","joy"],source:"schoenstatt",note:"Salmo o meditación con tono de alabanza cósmica."},{title:"Misericordias Domini",sections:["salmo","meditacion"],tags:["psalm","thanksgiving","peace"],source:"liturgico",note:"Taizé, breve y meditativo."},{title:"El Señor es mi luz",sections:["salmo","meditacion"],tags:["psalm","peace","ordinary"],source:"liturgico",note:"Para salmos de confianza."},{title:"Bendice, alma mía, al Señor",sections:["salmo","meditacion"],tags:["psalm","thanksgiving"],source:"liturgico",note:"Para salmos de bendición y gratitud."},{title:"Aleluya popular",sections:["aclamacion"],tags:["word","joy","ordinary"],source:"liturgico",note:"Aclamación general fuera de Cuaresma.",priority:6},{title:"Aleluya de la tierra",sections:["aclamacion"],tags:["word","joy","ordinary"],source:"liturgico",note:"Aclamación viva y conocida."},{title:"Aleluya para Pascua",sections:["aclamacion"],tags:["word","easter","joy"],source:"liturgico",note:"Prioritaria durante Pascua.",priority:20},{title:"Aleluya, el Señor resucitó",sections:["aclamacion","entrada","final"],tags:["easter","joy","christ"],source:"liturgico",note:"Pascua o domingos con tono de resurrección.",priority:18},{title:"Mirad, Jesús resucita hoy",sections:["entrada","aclamacion","final"],tags:["easter","joy","christ"],source:"liturgico",note:"Muy claro para Pascua.",priority:18},{title:"Aleluya para Adviento",sections:["aclamacion"],tags:["advent","word"],source:"liturgico",note:"Adviento.",priority:16},{title:"Aleluya para Navidad",sections:["aclamacion"],tags:["christmas","word","joy"],source:"liturgico",note:"Navidad y tiempo de Navidad.",priority:16},{title:"Alabanza a ti, Cristo",sections:["aclamacion"],tags:["lent","word","christ"],source:"liturgico",note:"Aclamación cuaresmal sin aleluya.",priority:20},{title:"En tu altar",sections:["ofertorio"],tags:["offering","eucharist"],source:"schoenstatt",note:"Ofertorio explícito y directo.",priority:10},{title:"Esto que soy, esto te doy",sections:["ofertorio"],tags:["offering","thanksgiving"],source:"schoenstatt",note:"Ofertorio de entrega personal.",priority:8},{title:"Te presentamos el vino y el pan",sections:["ofertorio"],tags:["offering","eucharist"],source:"sanEsteban",note:"Ofertorio clásico centrado en los dones.",priority:8},{title:"Saber que vendrás",sections:["ofertorio"],tags:["offering","advent","christ"],source:"sanEsteban",note:"Ofertorio con tono de esperanza."},{title:"Recibe, oh Dios",sections:["ofertorio"],tags:["offering"],source:"sanEsteban",note:"Presentación de dones sobria."},{title:"Ofrenda de amor",sections:["ofertorio"],tags:["offering","eucharist"],source:"sanEsteban",note:"Ofertorio eucarístico."},{title:"Te ofrecemos, Señor",sections:["ofertorio"],tags:["offering"],source:"sanEsteban",note:"Ofertorio de uso general."},{title:"Bendito seas, Señor",sections:["ofertorio"],tags:["offering","thanksgiving"],source:"sanEsteban",note:"Encaja con la presentación del pan y del vino."},{title:"Juntos nos acercamos",sections:["ofertorio","comunion"],tags:["community","eucharist"],source:"schoenstatt",note:"Cuando se quiere unir procesión de dones y mesa común."},{title:"Qué te puedo dar",sections:["ofertorio"],tags:["offering","thanksgiving"],source:"safaMadrid",note:"Ofertorio conocido en misa de familias."},{title:"En tus manos",sections:["ofertorio","meditacion"],tags:["offering","peace"],source:"schoenstatt",note:"Entrega confiada."},{title:"Santo Campanario",sections:["santo"],tags:["holy","joy"],source:"schoenstatt",note:"Santo breve y reconocible.",priority:8},{title:"Santo es el Señor mi Dios",sections:["santo"],tags:["holy","joy"],source:"sanEsteban",note:"Santo popular."},{title:"Santo salesiano",sections:["santo"],tags:["holy","joy"],source:"sanEsteban",note:"Santo muy cantable para asamblea."},{title:"Santo en unión del coro",sections:["santo"],tags:["holy"],source:"sanEsteban",note:"Opción tradicional para el ordinario."},{title:"Santo solemne",sections:["santo"],tags:["holy"],source:"sanEsteban",note:"Mejor para solemnidades."},{title:"Santo de misa de familias",sections:["santo"],tags:["holy","joy","community"],source:"safaMadrid",note:"Versión pensada para asamblea familiar."},{title:"Santo Palestrina",sections:["santo"],tags:["holy"],source:"sanEsteban",note:"Opción más clásica."},{title:"Anunciamos tu muerte",sections:["memorial"],tags:["christ","eucharist"],source:"rcc",note:"Aclamación memorial directa."},{title:"Cada vez que comemos de este pan",sections:["memorial"],tags:["eucharist","christ"],source:"rcc",note:"Aclamación memorial centrada en pan y cáliz."},{title:"Por tu cruz y resurrección",sections:["memorial"],tags:["easter","christ","eucharist"],source:"rcc",note:"Especialmente fuerte en Pascua."},{title:"Tuyo es el reino",sections:["amen"],tags:["amen","gloria","trinity"],source:"rcc",note:"Aclamación conclusiva breve."},{title:"Amén solemne",sections:["amen"],tags:["amen","gloria","trinity"],source:"liturgico",note:"Para doxología final de la plegaria eucarística."},{title:"Amén cantado",sections:["amen"],tags:["amen"],source:"pilgrim",note:"Respuesta simple de la asamblea."},{title:"Padrenuestro cantado",sections:["padrenuestro"],tags:["peace","community"],source:"pilgrim",note:"Versión de uso general para la oración dominical.",priority:8},{title:"Padre nuestro de la paz",sections:["padrenuestro"],tags:["peace","community"],source:"rcc",note:"Cuando se quiere preparar el rito de la paz."},{title:"Padrenuestro Kairoi",sections:["padrenuestro"],tags:["community","peace"],source:"pilgrim",note:"Versión conocida en coros juveniles."},{title:"Padrenuestro tradicional",sections:["padrenuestro"],tags:["community"],source:"sanEsteban",note:"Opción sobria y congregacional."},{title:"Cordero de Dios",sections:["cordero"],tags:["eucharist","peace"],source:"schoenstatt",note:"Cordero sencillo para fracción del pan.",priority:8},{title:"Cordero de Dios 2",sections:["cordero"],tags:["eucharist","peace"],source:"schoenstatt",note:"Otra melodía para el ordinario."},{title:"Cordero Paraguayo",sections:["cordero"],tags:["eucharist","peace"],source:"schoenstatt",note:"Variante popular con carácter latinoamericano."},{title:"Cordero de Dios Mejía",sections:["cordero"],tags:["eucharist","peace"],source:"stella",note:"Opción frecuente en repertorios hispanoamericanos."},{title:"Cordero de Dios Palazón",sections:["cordero"],tags:["eucharist","peace"],source:"liturgico",note:"Opción litúrgica sobria."},{title:"Cordero de misa de familias",sections:["cordero"],tags:["eucharist","peace","community"],source:"sanEsteban",note:"Buena para asamblea familiar."},{title:"A tu mesa",sections:["comunion"],tags:["communion","eucharist","corpus"],source:"liturgico",note:"Comunión directa y clara; sube mucho en Corpus.",priority:12},{title:"Alrededor de tu mesa",sections:["comunion"],tags:["communion","eucharist","community","corpus"],source:"liturgico",note:"Muy buen canto de comunión comunitaria.",priority:12},{title:"Pan de vida",sections:["comunion"],tags:["communion","eucharist","corpus"],source:"vidaSanto",note:"Prioritario cuando el día habla de pan de vida o Corpus.",priority:18},{title:"Milagro de amor",sections:["comunion","meditacion"],tags:["communion","eucharist","adoration","corpus"],source:"schoenstatt",note:"Comunión eucarística de tono adorante.",priority:14},{title:"Jesús alimento que da vida",sections:["comunion"],tags:["communion","eucharist","corpus"],source:"schoenstatt",note:"Muy adecuado para Corpus o textos de vida eterna.",priority:16},{title:"Te haces presente en mí",sections:["comunion","meditacion"],tags:["communion","eucharist","adoration"],source:"schoenstatt",note:"Comunión interior y adorante."},{title:"Alma de Cristo",sections:["comunion","meditacion"],tags:["communion","eucharist","adoration"],source:"chantPublicDomain",note:"Comunión o acción de gracias.",lyricsTitle:"Alma de Cristo",lyrics:GE,priority:18},{title:"Te conocimos al partir el pan",sections:["comunion"],tags:["communion","eucharist","easter"],source:"liturgico",note:"Especialmente adecuado para Emaús y Pascua.",priority:12},{title:"En la fracción del pan",sections:["comunion"],tags:["communion","eucharist","easter"],source:"liturgico",note:"Comunión con sabor pascual."},{title:"Una espiga dorada por el sol",sections:["comunion","ofertorio"],tags:["communion","eucharist","offering"],source:"pilgrim",note:"Comunión u ofertorio con símbolos de pan y vino."},{title:"No hay amor más grande",sections:["comunion","meditacion"],tags:["communion","eucharist","christ"],source:"schoenstatt",note:"Comunión cuando las lecturas hablan de entrega."},{title:"Cena de Jueves",sections:["comunion","meditacion"],tags:["communion","eucharist","corpus"],source:"schoenstatt",note:"Comunión de tono eucarístico y contemplativo."},{title:"Mi amado es para mí",sections:["comunion","meditacion"],tags:["communion","adoration"],source:"liturgico",note:"Comunión contemplativa."},{title:"Alabándote",sections:["comunion","meditacion"],tags:["communion","adoration","thanksgiving"],source:"safaMadrid",note:"Comunión de acción de gracias."},{title:"Tú eres mi Dios",sections:["comunion","meditacion"],tags:["adoration","thanksgiving","peace"],source:"almaMisas",note:"Comunión o acción de gracias sencilla."},{title:"Nada te turbe",sections:["meditacion","comunion"],tags:["peace","adoration"],source:"pilgrim",note:"Silencio después de la comunión o adoración."},{title:"Jesús estoy aquí",sections:["meditacion","comunion"],tags:["adoration","peace"],source:"schoenstatt",note:"Meditación personal tras la comunión."},{title:"En ti descansar",sections:["meditacion","comunion"],tags:["peace","adoration"],source:"schoenstatt",note:"Canto reposado para acción de gracias."},{title:"Sé en quién he puesto mi confianza",sections:["meditacion"],tags:["peace","martyr","saints"],source:"schoenstatt",note:"Muy útil para mártires o lecturas de fidelidad.",priority:10},{title:"Maravillas hizo en mí",sections:["meditacion","final"],tags:["mary","thanksgiving","joy"],source:"schoenstatt",note:"Acción de gracias mariana."},{title:"Mi alma canta",sections:["meditacion","final"],tags:["mary","thanksgiving","joy"],source:"liturgico",note:"Magnificat o canto de acción de gracias."},{title:"Te alabo en verdad",sections:["meditacion","final"],tags:["thanksgiving","adoration"],source:"schoenstatt",note:"Acción de gracias de tono carismático."},{title:"Getsemaní",sections:["meditacion"],tags:["lent","christ","adoration"],source:"schoenstatt",note:"Cuaresma, pasión o meditación sobria."},{title:"Misericordias Domini",sections:["meditacion"],tags:["peace","thanksgiving"],source:"liturgico",note:"Repetitivo y apto para silencio orante."},{title:"Alma misionera",sections:["final"],tags:["mission","ordinary"],source:"liturgico",note:"Envío claro y conocido.",priority:12},{title:"Pescador de hombres",sections:["final","comunion"],tags:["mission","christ","ordinary"],source:"schoenstatt",note:"Final o comunión cuando el Evangelio llama al seguimiento.",priority:10},{title:"Santa María del camino",sections:["final"],tags:["mary","mission"],source:"sanEsteban",note:"Canto final mariano y de camino.",priority:8},{title:"Junto a ti María",sections:["final","meditacion"],tags:["mary","peace"],source:"schoenstatt",note:"Final mariano sencillo.",priority:10},{title:"Reina y Madre",sections:["final","meditacion"],tags:["mary"],source:"schoenstatt",note:"Final mariano de sensibilidad schoenstattiana."},{title:"María de la Alianza",sections:["final","meditacion"],tags:["mary"],source:"schoenstatt",note:"Final mariano."},{title:"Alégrate, María",sections:["final","meditacion"],tags:["mary","joy"],source:"liturgico",note:"Mariano festivo, especialmente en fiestas de la Virgen."},{title:"Misioneros",sections:["final"],tags:["mission","ordinary"],source:"schoenstatt",note:"Envío apostólico."},{title:"Id y anunciad",sections:["final"],tags:["mission","word"],source:"vidaSanto",note:"Final cuando el Evangelio envía a anunciar."},{title:"Tomado de la mano",sections:["final","comunion"],tags:["christ","peace","community"],source:"safaMadrid",note:"Final popular de misa de familias."},{title:"Ven Espíritu Divino",sections:["final","entrada","meditacion"],tags:["spirit","pentecost"],source:"schoenstatt",note:"Pentecostés o días con fuerte presencia del Espíritu.",priority:14},{title:"Transformación en Pentecostés",sections:["entrada","final","meditacion"],tags:["spirit","pentecost","mission"],source:"schoenstatt",note:"Pentecostés y envío misionero.",priority:16},{title:"Sopla",sections:["meditacion","final"],tags:["spirit"],source:"schoenstatt",note:"Invocación al Espíritu Santo."},{title:"Fuego",sections:["entrada","final","meditacion"],tags:["spirit","mission"],source:"schoenstatt",note:"Canto de ardor misionero."},{title:"Uno en Trinidad",sections:["entrada","gloria","meditacion","final"],tags:["trinity","gloria"],source:"schoenstatt",note:"Prioritario para la Santísima Trinidad.",priority:22},{title:"Canto a Dios Padre",sections:["entrada","meditacion","final"],tags:["trinity","thanksgiving"],source:"schoenstatt",note:"Buen encaje en solemnidades trinitarias."}];function lt(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function Ii(e,o=new Set){return typeof e=="string"?e:!e||typeof e!="object"||o.has(e)?"":(o.add(e),Array.isArray(e)?e.map(a=>Ii(a,o)).join(" "):Object.entries(e).filter(([a])=>!a.startsWith("__")).map(([,a])=>Ii(a,o)).join(" "))}function oa(e,o){const a=e[o];return typeof a=="string"?a.trim():""}function ct(e){return Array.isArray(e.lecturas)?e.lecturas.filter(o=>!!(o&&typeof o=="object")):[]}function ut(e){return oa(e,"type").toUpperCase()}function dA(e){return e==="PSALM"||e==="CELEBRATION_PSALM"||e.endsWith("PSALM")}function mA(e){return e==="ACCLAMATION"||e==="CELEBRATION_ACCLAMATION"}function pA(e){return(e.split(":").pop()?.trim()??"").replace(/^_+|_+$/g,"").trim()}function fA(e,o){const a=pA(e);if(!G(a))return o;const s=`$R.$ ${a}`,n=o.replace(/\s*R\.(?=\s|$)/g,`
${s}`);return[s,n].filter(G).join(`

`)}function gA(e){const o=ct(e).find(a=>{const s=ut(a);return dA(s)&&G(oa(a,"texto"))});return o?fA(oa(o,"ref"),oa(o,"texto")):""}function dt(e){return lt([e.celebration,e.rank,e.cycle,...e.seasons??[]].filter(Boolean).join(" "))}function hm(e){const o=dt(e);return o.includes("lent")||o.includes("cuaresma")}function SA(e){const o=dt(e);return o.includes("advent")||o.includes("adviento")?"Muéstranos, Señor, tu misericordia y danos tu salvación.":o.includes("christmas")||o.includes("navidad")||o.includes("epifania")?"Nos ha amanecido un día sagrado; venid, naciones, adorad al Señor, porque hoy una gran luz ha bajado a la tierra.":hm(e)?"No solo de pan vive el hombre, sino de toda palabra que sale de la boca de Dios.":o.includes("pentecost")?"Ven, Espíritu Santo, llena los corazones de tus fieles y enciende en ellos el fuego de tu amor.":o.includes("easter")||o.includes("pascua")||o.includes("ascension")?"Ha resucitado Cristo, que creó todas las cosas y se compadeció del género humano.":o.includes("martir")||o.includes("martyr")?"Dichosos los perseguidos por causa de la justicia, porque de ellos es el reino de los cielos.":o.includes("virgen")||o.includes("maria")?"Dichosa tú, Virgen María, que has creído, porque lo que te ha dicho el Señor se cumplirá.":"Tus palabras, Señor, son espíritu y vida; tú tienes palabras de vida eterna."}function bA(e){return e.replace(/_([^_]+)_/g,"$1").replace(/\$([^$]+)\$/g,"$1").replace(/\$/g,"").trim()}function Oi(e){const o=e?.trim()??"",a=o.match(/_([^_]+)_/)?.[1]?.trim();if(a)return a;const s=o.match(/:\s*(.+)$/s)?.[1]?.trim();return s?bA(s):""}function Pc(e,o){const a=ct(e).find(s=>{const n=ut(s);return n==="GOSPEL"||n==="CELEBRATION_GOSPEL"});return Oi(o.massGospelReference)||Oi(a?oa(a,"ref"):"")}function vA(e,o){const a=ct(e).find(r=>{const i=ut(r);return mA(i)&&(G(oa(r,"ref"))||G(oa(r,"texto")))}),s=hm(o)?"$Todos.$ Honor y gloria a ti, Señor Jesús.":"$Todos.$ Aleluya.",n=a?oa(a,"texto")||Oi(oa(a,"ref"))||Pc(e,o):Pc(e,o)||SA(o);return[s,`$Cantor.$ ${n}`,s].filter(G).join(`

`)}function yA(e,o){const a=dt(o),s=lt([a,Ii(e)].filter(Boolean).join(" ")),n=new Set;return(a.includes("ordinary")||a.includes("ordinario"))&&n.add("ordinary"),(a.includes("advent")||a.includes("adviento"))&&n.add("advent"),(a.includes("christmas")||a.includes("navidad"))&&n.add("christmas"),(a.includes("lent")||a.includes("cuaresma"))&&n.add("lent"),(a.includes("easter")||a.includes("pascua"))&&n.add("easter"),(a.includes("corpus")||a.includes("cuerpo y sangre"))&&n.add("corpus"),(a.includes("trinidad")||a.includes("trinity"))&&n.add("trinity"),a.includes("pentecost")&&n.add("pentecost"),(a.includes("pentecost")||a.includes("espiritu santo")||a.includes("paraclito"))&&n.add("spirit"),(a.includes("maria")||a.includes("virgen")||a.includes("madre"))&&n.add("mary"),a.includes("martir")&&n.add("martyr"),(a.includes("santo")||a.includes("santos")||a.includes("san "))&&n.add("saints"),(s.includes("eucarist")||s.includes("pan de vida")||/\b(?:pan|vino)\b/.test(s))&&n.add("eucharist"),(s.includes("mision")||s.includes("envia")||s.includes("apostol"))&&n.add("mission"),(s.includes("palabra")||s.includes("evangelio"))&&n.add("word"),(s.includes("perdon")||s.includes("misericord"))&&n.add("forgiveness"),s.includes("paz")&&n.add("peace"),s.includes("alegr")&&n.add("joy"),(s.includes("ofrenda")||s.includes("altar"))&&n.add("offering"),s.includes("comunion")&&n.add("communion"),n}function hA(e,o,a){const s=["advent","christmas","lent","easter","pentecost"],n=e.tags.filter(i=>a.has(i));let r=(e.sections[0]===o?18:0)+(n.length?e.priority??0:Math.min(e.priority??0,2));for(const i of e.tags)a.has(i)&&(r+=i==="ordinary"?5:24);for(const i of s)e.tags.includes(i)&&!a.has(i)&&(r-=42);return e.tags.includes("corpus")&&!a.has("corpus")&&!a.has("eucharist")&&(r-=36),o==="comunion"&&(a.has("corpus")||a.has("eucharist"))&&(r+=e.tags.includes("eucharist")?16:0),o==="salmo"&&e.tags.includes("psalm")&&(r+=8),r}function EA(e,o){const a=e.tags.filter(s=>o.has(s)).map(s=>CE[s]);return a.length?a.join(", "):"encaje general de la sección"}function AA(e){return`<a href="${Qe(e.url)}" target="_blank" rel="noreferrer">${Qe(e.label)}</a>`}function so(e,o){return['<div class="song-liturgical-text">',`<p><span class="rubric">Texto litúrgico.</span> ${Qe(e)}</p>`,...o.split(/\n{2,}/).map(a=>`<p>${Qe(a).replace(/\n/g,"<br>")}</p>`),"</div>"].join("")}function PA(e,o,a){const s=lt(e.title);if(e.sections.includes("penitencial")&&s.includes("kyrie"))return so("Kyrie eleison",`$Sacerdote/diácono.$ Kyrie, eleison.
$Pueblo.$ Kyrie, eleison.

$Sacerdote/diácono.$ Christe, eleison.
$Pueblo.$ Christe, eleison.

$Sacerdote/diácono.$ Kyrie, eleison.
$Pueblo.$ Kyrie, eleison.`);if(e.sections.includes("penitencial")&&s.includes("senor ten piedad"))return so("Señor, ten piedad",`$Sacerdote/diácono.$ Señor, ten piedad.
$Pueblo.$ Señor, ten piedad.

$Sacerdote/diácono.$ Cristo, ten piedad.
$Pueblo.$ Cristo, ten piedad.

$Sacerdote/diácono.$ Señor, ten piedad.
$Pueblo.$ Señor, ten piedad.`);if(e.sections.includes("gloria")&&s.includes("gloria"))return so("Gloria",`$Todos.$ Gloria a Dios en el cielo,
y en la tierra paz a los hombres que ama el Señor.
Por tu inmensa gloria te alabamos,
te bendecimos, te adoramos,
te glorificamos, te damos gracias,
Señor Dios, Rey celestial,
Dios Padre todopoderoso.

Señor, Hijo único, Jesucristo.
Señor Dios, Cordero de Dios, Hijo del Padre;
tú que quitas el pecado del mundo,
ten piedad de nosotros;
tú que quitas el pecado del mundo,
atiende nuestra súplica;
tú que estás sentado a la derecha del Padre,
ten piedad de nosotros;
porque sólo tú eres Santo,
sólo tú Señor,
sólo tú Altísimo, Jesucristo,
con el Espíritu Santo
en la gloria de Dios Padre. Amén.`);if(e.sections.includes("credo"))return s.includes("apostolico")?so("Credo apostólico",ME):s.includes("iii")?so("Credo III",NE):so("Credo niceno",LE);if(e.sections.includes("salmo")){const n=gA(a);if(n)return so("Salmo responsorial del día",n)}if(e.sections.includes("aclamacion")){const n=vA(a,o);if(n)return so("Aclamación antes del Evangelio del día",n)}return e.sections.includes("santo")?so("Santo",`$Todos.$ Santo, Santo, Santo es el Señor,
Dios del universo.
Llenos están el cielo y la tierra de tu gloria.
Hosanna en el cielo.
Bendito el que viene en nombre del Señor.
Hosanna en el cielo.`):e.sections.includes("memorial")?s.includes("cada vez")?so("Aclamación memorial",`$Sacerdote.$ Aclamemos el Misterio de la fe.

$Pueblo.$ Cada vez que comemos de este pan y bebemos de este cáliz, anunciamos tu muerte, Señor, hasta que vuelvas.`):s.includes("por tu cruz")?so("Aclamación memorial",`$Sacerdote.$ Este es el Misterio de la fe.

$Pueblo.$ Por tu cruz y resurrección nos has salvado, Señor.`):so("Aclamación memorial",`$Sacerdote.$ Este es el Misterio de la fe.

$Pueblo.$ Anunciamos tu muerte, proclamamos tu resurrección. ¡Ven, Señor Jesús!`):e.sections.includes("amen")?so("Gran Amén","$Pueblo.$ Amén."):e.sections.includes("padrenuestro")?so("Padrenuestro",`$Todos.$ ${Oa(o.lordPrayerLanguage)}`):e.sections.includes("cordero")?so("Cordero de Dios",`$Todos.$ Cordero de Dios, que quitas el pecado del mundo, ten piedad de nosotros.

$Todos.$ Cordero de Dios, que quitas el pecado del mundo, ten piedad de nosotros.

$Todos.$ Cordero de Dios, que quitas el pecado del mundo, danos la paz.`):""}function qA(e,o,a,s){const n=IE[e.source],r=PA(e,a,s),i=e.lyrics?so(e.lyricsTitle??e.title,e.lyrics):"",t=!!(r||i);return['<div class="song-suggestion">',`<p class="song-suggestion-title">${Qe(e.title)}</p>`,`<p><span class="rubric">Encaje.</span> ${Qe(e.note)}</p>`,`<p><span class="rubric">Prioridad por día.</span> ${Qe(EA(e,o))}</p>`,r,i,`<p><span class="rubric">Fuente.</span> ${AA(n)} <span class="song-source-note">${Qe(n.note)}</span></p>`,'<div class="song-source-action">',`<span class="song-source-action-title">${t?"Texto incluido":"Letra y acordes"}</span>`,`<span>${t?"Consulta la fuente enlazada para melodía, partitura o acordes.":"Consultar en la fuente enlazada."}</span>`,"</div>","</div>"].join("")}function To(e){return OE[e]}function IA(e,o,a){const s=yA(o,a);return uA.filter(n=>n.sections.includes(e)).map(n=>({song:n,score:hA(n,e,s)})).sort((n,r)=>r.score-n.score||n.song.title.localeCompare(r.song.title,"es")).map(({song:n})=>({label:n.title,content:qA(n,s,a,o)}))}const OA=[{key:"vienen-con-alegria",title:"Vienen con alegría",chordSheet:`[DO]Vienen con alegría, Señor
c[SOL]antando vienen con ale[DO7]gría, Señor,
[FA]los que caminan p[DO]or la vida, [LA7]Señor,
s[re]embrando tu [SOL]paz y amo[DO]r.

[DO]Vienen trayendo la espera[SOL]nza,
a un mundo cargado d[DO]e ansiedad
[SOL]un mundo que busca y que no alcanza,
[FA]caminos de am[SOL]or y de amista[DO]d.

(Se repite el estribillo "Vienen con alegría, Señor..." entre estrofas)

[DO]Vienen trayendo entre sus ma[SOL]nos
[DO]esfuerzos de hermanos por la paz,
[SOL]deseos de un mundo más humano,
[FA]que nacen del[SOL] bien y la ver[DO]dad.`,sourceLabel:"Cancionero Pilgrim",sourceUrl:"https://pilgrim.neocities.org/cancionero/resources/canciones/vienen_con"},{key:"en-el-nombre-del-padre",title:"En el nombre del Padre",chordSheet:`[LA]En nombre del Padre,
[LA7]En nombre del Hij[RE]o
[LA]En nombre del Santo Espí[MI]ritu
[LA]Estamos a[mi]quí ([LA7]bis)

[LA7]Para alab[RE]ar y ag[MI]radecer
[do#]Bendecir y [fa#]adorar
[si]Estamos aquí Señor
[MI]A tu[LA] disp[mi]osició[LA7]n.

[LA7]Para alab[RE]ar y ag[MI]radecer
[do#]Bendecir[fa#] y adorar
[si]Estamos aquí Señor
[MI]Dios Trino de a[LA]mor.`,sourceLabel:"Acordes Web",sourceUrl:"https://acordesweb.com/cancion/musica-religiosa/en-el-nombre-del-padre"},{key:"ya-estan-pisando",title:"Ya están pisando nuestros pies",chordSheet:`[RE]Qué alegría cuando me d[si]ijeron:
"[mi]¡Vamos a la casa del Se[LA7]ñor!"
Ya est[RE]án pisando nuestros p[SOL]ies
tus um[RE]brales J[LA7]erusal[RE]én.

Jerusalén está fund[si]ada
como ciud[mi]ad bien comp[LA7]acta.
Al[RE]lá suben las tri[SOL]bus,
las tr[RE]ibus d[LA7]el Se[RE]ñor.

(Estrofas siguientes: mismos acordes de arriba, no verificados nota a nota en la fuente)

Según la costumbre de Israel,
a celebrar el nombre del Señor
en ella están los tribunales de justicia,
en el palacio de David.

Desead la paz a Jerusalén:
"Vivan seguros los que te aman,
haya paz dentro de tus muros,
en tus palacios seguridad."

Por mis hermanos y compañeros,
voy a decir: "La paz contigo."
Por la casa del Señor, nuestro Dios,
te deseo todo bien.`,sourceLabel:'Cancionero Pilgrim (Salmo 121/122, "Qué alegría cuando me dijeron")',sourceUrl:"https://pilgrim.neocities.org/cancionero/resources/canciones/que-alegria-cuando-me-dijeron-acordes"}],CA=[{key:"oh-cruz-fiel",title:"Oh, Cruz Fiel",chordSheet:`[la]¡Oh cruz fiel, árbol [FA]únic[SOL]o en nob[la]leza!
[la]Jamás el bosque [FA]dio me[SOL]jor [la]tributo
[FA]en hoja, en [SOL]flor y en [DO]fruto.
[la]¡Dulces clavos! ¡[re]Dulce [la]árbol
[FA]donde la [SOL]Vida empie[DO]za
con un [FA]peso tan [la]dulce en [SOL]su cort[DO]eza!

[DO]Vinagre y sed la [FA]boca, apenas [SOL]gime;[DO]
[re]y, al golpe de los [FA]clavos y l[la]a lanza,
[FA]un mar de sangre [DO]fluye, inunda,[SOL] avanza
[FA]por tierra, mar y[SOL] cielo, y lo[la]s redime.

[la]¡Oh cruz fiel, árbol [FA]único[SOL] en nob[la]leza!
[la]Jamás el bosque [FA]dio me[SOL]jor [la]tributo
[FA]en hoja, en [SOL]flor y en [DO]fruto.
[la]¡Dulces clavos! ¡[re]Dulce [la]árbol
[FA]donde la [SOL]Vida empie[DO]za
con un [FA]peso tan [la]dulce en [SOL]su cort[DO]eza!

[DO]Ablándate, madero[FA], tronco abru[SOL]pto[DO]
[re]de duro corazón y f[FA]ibra inert[la]e;
[FA]doblégate a este [DO]peso y esta mu[SOL]erte
[FA]que cuelga de tus[SOL] ramas como [la]un fruto.

[la]¡Oh cruz fiel, árbol [FA]único[SOL] en nob[la]leza!
[la]Jamás el bosque [FA]dio me[SOL]jor [la]tributo
[FA]en hoja, en [SOL]flor y en [DO]fruto.
[la]¡Dulces clavos! ¡[re]Dulce [la]árbol
[FA]donde la [SOL]Vida empie[DO]za
con un [FA]peso tan [la]dulce en [SOL]su cort[DO]eza!

[DO]Tú, solo entre lo[FA]s árboles, cr[SOL]ecido[DO]
[re]para tender a Crist[FA]o en tu re[la]gazo;
[FA]tú, el arca que n[DO]os salva; tú, [SOL]el abrazo
[FA]de Dios con los v[SOL]erdugos del [la]Ungido.

[la]¡Oh cruz fiel, árbol [FA]único[SOL] en nob[la]leza!
[la]Jamás el bosque [FA]dio me[SOL]jor [la]tributo
[FA]en hoja, en [SOL]flor y en [DO]fruto.
[la]¡Dulces clavos! ¡[re]Dulce [la]árbol
[FA]donde la [SOL]Vida empie[DO]za
con un [FA]peso tan [la]dulce en [SOL]su cort[DO]eza!

[DO]Al Dios de los de[FA]signios de la[SOL] histo[DO]ria,
[re]que es Padre, Hijo [FA]y Espíritu[la], alabanza;
[FA]al que en la cruz[DO] devuelve la e[SOL]speranza
[FA]de toda salvación[SOL], honor y gl[la]oria.

[la]¡Oh cruz fiel, árbol [FA]único[SOL] en nob[la]leza!
[la]Jamás el bosque [FA]dio me[SOL]jor [la]tributo
[FA]en hoja, en [SOL]flor y en [DO]fruto.
[la]¡Dulces clavos! ¡[re]Dulce [la]árbol
[FA]donde la [SOL]Vida empie[DO]za
con un [FA]peso tan [la]dulce en [SOL]su cort[DO]eza!`,sourceLabel:"Cancionero propio (respaldo de SongBook, 06/09/2026)",sourceUrl:""}],Em={entrada:OA,meditacion:CA};function DA(e){return Em[e]}const qc=new Set(Object.keys(Em).map(To));function RA(e){return['<div class="mass-song">',fm(e.chordSheet),"</div>"].join("")}const $A=3600*1e3;let Ci=!1,Di=!1;function Am(){window.location.reload()}function TA(e){Ci=e,!Ci&&Di&&(Di=!1,Am())}function LA(){if(Ci){Di=!0;return}Am()}function MA(e){if(!e)return;const o=()=>{navigator.onLine!==!1&&e.update().catch(()=>{})};setInterval(o,$A),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&o()}),window.addEventListener("online",o)}function NA(e,o,a){const s=o>0?` (capo ${o})`:"";return`  • *${e}*${s}: ${a}`}function _A(e){return e.length?`*ACORDES*


${e.join(`

`)}`:""}const Bs=1080,Ys=1920,zA=30,Ic=1,kr=300,Oc=36,Cc=6;async function JA(e,o){try{return await jA(e,o)}finally{o.cameraStream?.getTracks().forEach(a=>a.stop())}}async function jA(e,o){if(!xA())throw new Error("Este navegador no puede generar video desde la app.");const a=Math.max(320,Math.ceil(e.getBoundingClientRect().width)),s=Bs/a,n=Ys/s,r=Math.max(Math.ceil(e.scrollHeight),Math.ceil(n)),i=await wA(e,{contentHeight:r,liturgicalColor:o.liturgicalColor,readerScale:o.readerScale,theme:o.theme,width:a});if(o.signal?.aborted)return null;const t=document.createElement("canvas");t.width=Bs,t.height=Ys;const l=t.getContext("2d");if(!l)throw new Error("No se pudo preparar el lienzo del video.");const u=o.cameraStream?await HA(o.cameraStream):null,c=t.captureStream(zA),m=o.cameraStream?.getAudioTracks()??[],f=new MediaStream([...c.getVideoTracks(),...m]),y=new MediaRecorder(f,UA(m.length>0)),O=[];let I=0,_=0,V=!1;const k=Math.max(0,r-n),J=Math.max(0,o.speedPixelsPerSecond),M=J>0?k/J:0,E=Ic+M,$=()=>{V||(V=!0,I&&cancelAnimationFrame(I),c.getTracks().forEach(H=>H.stop()),o.cameraStream?.getTracks().forEach(H=>H.stop()),u?.remove(),y.state!=="inactive"&&y.stop())};return o.signal?.addEventListener("abort",$,{once:!0}),await new Promise((H,x)=>{y.ondataavailable=ae=>{ae.data.size>0&&O.push(ae.data)},y.onerror=()=>{$(),x(new Error("No se pudo grabar el video generado."))},y.onstop=()=>{o.signal?.removeEventListener("abort",$),H()},Dc(l,i,0,a,n,u,o.liturgicalColor),y.start(1e3),o.onRecordingStarted?.();const W=ae=>{if(o.signal?.aborted){$();return}_||(_=ae);const Ee=(ae-_)/1e3,Te=Math.max(0,Ee-Ic),Ce=Math.min(k,Te*J);if(Dc(l,i,Ce,a,n,u,o.liturgicalColor),Ee>=E){$();return}I=requestAnimationFrame(W)};I=requestAnimationFrame(W)}),!o.signal?.aborted&&O.length?new Blob(O,{type:O[0]?.type||"video/webm"}):null}function xA(){return typeof MediaRecorder<"u"&&typeof HTMLCanvasElement.prototype.captureStream=="function"}function UA(e){const a=(e?["video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm"]:["video/webm;codecs=vp9","video/webm"]).find(s=>MediaRecorder.isTypeSupported(s));return a?{mimeType:a}:void 0}async function HA(e){const o=document.createElement("video");return o.muted=!0,o.playsInline=!0,o.srcObject=e,await new Promise((a,s)=>{o.onloadedmetadata=()=>a(),o.onerror=()=>s(new Error("No se pudo iniciar la cámara."))}),await o.play(),o}function Dc(e,o,a,s,n,r,i){e.fillStyle="#22221c",e.fillRect(0,0,Bs,Ys),e.drawImage(o,0,a,s,n,0,0,Bs,Ys),r&&r.readyState>=r.HAVE_CURRENT_DATA&&VA(e,r,i||"rgba(244, 239, 228, 0.92)")}function VA(e,o,a){const s=kr/2,n=Bs-Oc-s,r=Ys-Oc-s,i=o.videoWidth||1,t=o.videoHeight||1,l=Math.max(kr/i,kr/t),u=i*l,c=t*l;e.save(),e.beginPath(),e.arc(n,r,s,0,Math.PI*2),e.closePath(),e.clip(),e.translate(n,r),e.scale(-1,1),e.drawImage(o,-u/2,-c/2,u,c),e.restore(),e.save(),e.beginPath(),e.arc(n,r,s-Cc/2,0,Math.PI*2),e.lineWidth=Cc,e.strokeStyle=a,e.stroke(),e.restore()}async function wA(e,o){const{default:a}=await te(async()=>{const{default:t}=await import("./html2canvas-pro.esm-8GDqt-58.js");return{default:t}},[],import.meta.url),s=e.cloneNode(!0);s.querySelectorAll(".reader-inline-controls").forEach(t=>t.remove()),s.querySelectorAll(".reader-header > svg").forEach(t=>t.remove()),s.style.border="0",s.style.borderRadius="0",s.style.boxShadow="none",s.style.margin="0",s.style.overflow="visible",s.style.width=`${o.width}px`,s.style.minHeight=`${o.contentHeight}px`;const n=document.createElement("div");n.className="app",n.dataset.theme=o.theme,n.style.setProperty("--reader-scale",String(o.readerScale)),n.style.setProperty("--liturgical-color",o.liturgicalColor),n.style.width=`${o.width}px`,n.style.minHeight=`${o.contentHeight}px`,n.style.background="var(--surface)";const r=document.createElement("main");r.className="app-shell is-reader",r.style.maxWidth=`${o.width}px`,r.style.padding="0",r.append(s),n.append(r);const i=document.createElement("div");i.style.position="fixed",i.style.top="0",i.style.left="-99999px",i.style.width=`${o.width}px`,i.style.pointerEvents="none",i.append(n),document.body.append(i);try{return await a(n,{width:o.width,height:o.contentHeight,windowWidth:o.width,backgroundColor:null,useCORS:!0,scale:1})}finally{i.remove()}}var Rc;(function(e){e[e.Sunday=1]="Sunday",e[e.Monday=2]="Monday",e[e.Tuesday=3]="Tuesday",e[e.Wednesday=4]="Wednesday",e[e.Thursday=5]="Thursday",e[e.Friday=6]="Friday",e[e.Saturday=7]="Saturday"})(Rc||(Rc={}));const qs=rs("LocalNotifications",{web:()=>te(()=>import("./web-DAPLvcLx.js"),[],import.meta.url).then(e=>new e.LocalNotificationsWeb)}),$c=[{id:9001,hour:"tertia",label:"Tercia",hora:9},{id:9002,hour:"sexta",label:"Sexta",hora:12},{id:9003,hour:"nona",label:"Nona",hora:15},{id:9004,hour:"vesperae",label:"Vísperas",hora:18},{id:9005,hour:"completorium",label:"Completas",hora:21}];function mt(){return qo.isNativePlatform()}async function FA(e){if(!mt()||(await qs.cancel({notifications:$c.map(({id:a})=>({id:a}))}),!e))return;let o=await qs.checkPermissions();o.display!=="granted"&&(o=await qs.requestPermissions()),o.display==="granted"&&await qs.schedule({notifications:$c.map(({id:a,hour:s,label:n,hora:r})=>({id:a,title:n,body:`Es hora de rezar ${n}`,schedule:{on:{hour:r,minute:0},allowWhileIdle:!0},extra:{hour:s}}))})}function kA(e){mt()&&qs.addListener("localNotificationActionPerformed",({notification:o})=>{const a=o.extra?.hour;a&&e(a)})}rs("BloqueoPantalla");const BA="laudes:ultimo-bloqueo";async function YA(){return qo.isNativePlatform(),{soportado:!1,activo:!1}}async function GA(){let e;qo.isNativePlatform()?e={bloqueado:!1,motivo:"no-disponible"}:e={bloqueado:!1,motivo:"web"};try{localStorage.setItem(BA,JSON.stringify({...e,en:new Date().toISOString()}))}catch{}return e}async function QA(){qo.isNativePlatform()}function WA(e,o){return new Promise(a=>{const s=setTimeout(a,o);e.then(()=>{clearTimeout(s),a()},()=>{clearTimeout(s),a()})})}const Tc=[{source:"spain",title:"Misa Crismal",aliases:["Misa Crismal","Jueves Santo Misa Crismal"],fields:{entranceAntiphon:"Jesucristo nos ha convertido en un reino, y hecho sacerdotes de Dios, su Padre. A él la gloria y el poder por los siglos de los siglos. Amén.",collect:"Oh Dios, que por la unción del Espíritu Santo constituiste a tu Hijo Mesías y Señor, y a nosotros, miembros de su cuerpo, nos haces partícipes de su misma unción; ayúdanos a ser en el mundo testigos fieles de la redención que ofreces a todos los hombres. Por nuestro Señor Jesucristo.",offerings:"Te pedimos, Señor, que la eficacia de este sacrificio nos purifique del antiguo pecado, acreciente en nosotros la vida nueva y nos otorgue la plena salvación. Por Jesucristo, nuestro Señor.",communionAntiphon:"Cantaré eternamente las misericordias del Señor, anunciaré tu fidelidad por todas las edades.",postCommunion:"Concédenos, Dios todopoderoso, que quienes han participado en tus sacramentos sean en el mundo buen olor de Cristo. Que vive y reina."}},{source:"icergua",title:"Misa vespertina de la Cena del Señor",aliases:["Jueves de Semana Santa","Jueves Santo","Misa vespertina de la Cena del Señor","Cena del Señor"],fields:{entranceAntiphon:"Debemos gloriarnos en la cruz de nuestro Señor Jesucristo: en él está nuestra salvación, vida y resurrección; él nos ha salvado y liberado.",collect:"Dios nuestro, que nos has reunido para celebrar aquella Cena en la cual tu Hijo único, antes de entregarse a la muerte, confió a la Iglesia el sacrificio nuevo y eterno, sacramento de su amor, concédenos alcanzar por la participación en este sacramento, la plenitud del amor y de la vida. Por nuestro Señor Jesucristo, tu Hijo, que siendo Dios vive y reina contigo, en la unidad del Espíritu Santo, por los siglos de los siglos.",offerings:"Concédenos, Señor, participar dignamente en esta Eucaristía, porque cada vez que celebramos el memorial de la muerte de tu Hijo, se realiza la obra de nuestra redención. Por Jesucristo, nuestro Señor.",communionAntiphon:"Esto es mi cuerpo, que se entrega por vosotros; este cáliz es la nueva alianza en mi sangre; haced esto cada vez que lo toméis en memoria mía.",postCommunion:"Señor, tú que nos permites disfrutar en esta vida de la Cena instituida por tu Hijo, concédenos participar también del banquete celestial en tu Reino. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"Misa Crismal",aliases:["Misa Crismal","Jueves Santo Misa Crismal"],fields:{collect:"Oh Dios, que por la unción del Espíritu Santo constituiste a tu Hijo Mesías y Señor y, a nosotros, miembros de su cuerpo, nos haces partícipes de su misma unción; ayúdanos a ser en el mundo testigos fieles de la redención que, por el misterio de la cruz, realizaste para toda la humanidad. Por nuestro Señor Jesucristo.",offerings:"Te pedimos, Señor, que la eficacia de este sacrificio nos purifique del antiguo pecado, acreciente en nosotros la vida nueva y nos otorgue la plena salvación. Por Jesucristo, nuestro Señor.",postCommunion:"Concédenos, Dios todopoderoso, que quienes hemos participado en tus sacramentos manifestemos en el mundo la presencia de Jesucristo. Que vive y reina."}},{source:"icergua",title:"Santos Basilio y Gregorio, obispos",aliases:["Santos Basilio y Gregorio, obispos","Santos Basilio Magno y Gregorio Nacianceno, obispos y doctores de la Iglesia","Basilio Magno y Gregorio Nacianceno","San Basilio Magno y San Gregorio Nacianceno","Basil the Great and Gregory Nazianzen","Basil and Gregory, bishops"],fields:{collect:"Señor y Dios nuestro, que concediste a tus obispos Basilio Magno y Gregorio Nacianceno ser agregados al número de los santos pastores por su ardiente caridad y su fe insigne; concédenos, por su intercesión, perseverar en el amor y en la fe, para participar de tu gloria. Por nuestro Señor Jesucristo.",offerings:"Acepta, Señor, las ofrendas que te presentamos para esta Eucaristía en la que recordamos la memoria de los santos Basilio y Gregorio, a fin de que, al ofrecerte tus propios dones, podamos recibirte a ti mismo. Por Jesucristo, nuestro Señor.",postCommunion:"Concédenos, Dios todopoderoso, que la gracia de estos sacramentos fortalezca cada día más nuestra vida cristiana, para que seamos auténticos discípulos de tu Hijo Jesucristo, como lo fueron los santos padres Basilio y Gregorio. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"San Antonio Abad",aliases:["San Antonio Abad","San Antonio de Egipto, abad","San Antonio de Egipto","Antonio de Egipto","Antonio, abad","Anthony, abbot","Anthony of Egypt","Anthony the Abbot"],fields:{collect:"Dios nuestro, que concediste a san Antonio, abad, dejar por tu amor cuanto tenía, para servirte heroicamente en el desierto, otórganos, por tu gracia, superar nuestro egoísmo y amarte a ti sobre todas las cosas. Por nuestro Señor Jesucristo.",offerings:"Acepta, Señor, estos dones que humildemente te presentamos en la conmemoración de san Antonio, abad, y líbranos de nuestro apego a los bienes materiales para que te tengamos a ti como nuestra única riqueza. Por Jesucristo, nuestro Señor.",postCommunion:"Por medio de esta Eucaristía concédenos, Señor, la fuerza necesaria para vencer siempre, a ejemplo de san Antonio, abad, las tentaciones del enemigo. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"Vigilia Pascual",aliases:["Sábado Santo","Sabado Santo","Vigilia Pascual","En la noche santa"],fields:{collect:"Dios nuestro, que haces resplandecer esta noche santa con la gloria del Señor resucitado, aviva en tu Iglesia el espíritu filial, para que, renovados en cuerpo y espíritu, nos entreguemos plenamente a tu servicio. Por nuestro Señor Jesucristo.",offerings:"Acepta, Señor, los dones que te presentamos y concédenos que el memorial de la muerte y resurrección de Jesucristo, que estamos celebrando, nos obtenga la fuerza para participar de la vida eterna. Por Jesucristo, nuestro Señor.",communionAntiphon:"Cristo, nuestra Pascua, ha sido inmolado. Aleluya.",postCommunion:"Infúndenos, Señor, tu espíritu de caridad para que vivamos siempre unidos en tu amor los que hemos participado en este sacramento de la muerte y resurrección de Jesucristo, que vive y reina por los siglos de los siglos."}},{source:"mercaba",title:"3 de enero",aliases:["3 de enero"],fields:{entranceAntiphon:"DIOS ENVIÓ A SU HIJO, NACIDO DE UNA MUJER, PARA HACERNOS HIJOS ADOPTIVOS. (GAL. 4,4-5)",collect:"Dios todopoderoso y eterno, por la venida de tu Hijo único has hecho resplandecer una nueva luz; concédenos que, así como Jesucristo, al nacer de la Virgen María, ha querido compartir nuestra condición humana, también nosotros lleguemos a compartir en su Reino la gloria de su divinidad. Por nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Tú eres, Padre, la fuente del amor sincero y de la paz. Con estas ofrendas que te presentamos concédenos glorificar tu nombre, y por la participación en la Eucaristía fortalece los lazos que nos unen. Te lo pedimos por Jesucristo, nuestro Señor.",communionAntiphon:"DE SU PLENITUD, TODOS HEMOS RECIBIDO GRACIA TRAS GRACIA. (JN. 1,16)",postCommunion:"Padre providente, que tu pueblo tantas veces ayudado por ti a lo largo de este año que termina, pueda recibir hoy y siempre los dones de tu amor, para que fortalecido por los bienes transitorios busque con mayor confianza los bienes eternos. Por Jesucristo, nuestro Señor."}},{source:"mercaba",title:"5 de enero",aliases:["5 de enero"],fields:{entranceAntiphon:"EL DÍA SANTO BRILLÓ PARA NOSOTROS. VENGAN, PUEBLOS, Y ADOREN AL SEÑOR, PORQUE UNA GRAN LUZ DESCENDIÓ SOBRE LA TIERRA.",collect:"Señor Dios, proclamamos que tu Hijo único, eterno como tú en la gloria, nació de la Virgen Madre como hombre verdadero. Aumenta nuestra fe, líbranos de los males presentes y danos los gozos eternos. Por nuestro Señor Jesucristo, tu Hijo que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"En este misterioso encuentro entre tu grandeza y nuestra pobreza, acepta, Señor Dios, nuestros dones, para que al ofrecerte lo que nos diste merezcamos recibirte a ti mismo. Por Jesucristo, nuestro Señor.",communionAntiphon:"NOSOTROS HEMOS VISTO SU GLORIA, LA GLORIA QUE RECIBE DEL PADRE COMO HIJO ÚNICO, LLENO DE GRACIA Y DE VERDAD. (JN. 1,14)",postCommunion:"Concédenos, Dios todopoderoso, que la comunión de los santos misterios fortalezca constantemente nuestra vida. Por Jesucristo, nuestro Señor."}},{source:"mercaba",title:"Miércoles de Ceniza",aliases:["Miércoles de Ceniza","MIERCOLES DE CENIZA"],fields:{entranceAntiphon:"SEÑOR, TÚ ERES MISERICORDIOSO CON TODOS Y NO ABORRECES NADA DE LO QUE HAS HECHO, CIERRAS LOS OJOS A LOS PECADOS DE LOS HOMBRES PARA QUE SE ARREPIENTAN Y LOS PERDONAS PORQUE TÚ ERES EL SEÑOR, NUESTRO DIOS. (CFR. SAB. 11,24.26)",collect:"Señor y Dios nuestro, concédenos la gracia de iniciar con el santo ayuno cuaresmal un camino de verdadera conversión, y afrontar con la penitencia la lucha contra el espíritu del mal. Por nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Al ofrecerte el sacrificio con el que iniciamos solemnemente la Cuaresma, te pedimos, Padre, que por las obras de penitencia y caridad, dominemos nuestras pasiones y, limpios de pecado, podamos celebrar con fervor la Pascua de tu Hijo, que vive y reina por los siglos de los siglos.",communionAntiphon:"QUIEN MEDITA EN LA LEY DEL SEÑOR DÍA Y NOCHE, DARÁ SU FRUTO EN EL TIEMPO OPORTUNO. (CFR. SAL. 1,2-3)",postCommunion:"Fortalécenos, Señor Dios, con los sacramentos recibidos para que nuestro ayuno sea agradable a tus ojos y cure todos nuestros males. Por Jesucristo, nuestro Señor."}},{source:"mercaba",title:"Viernes de la 4ª semana de Cuaresma",aliases:["Viernes de la 4ª semana de Cuaresma","VIERNES DE LA IV SEMANA","VIERNES DE LA IV SEMANA DE CUARESMA"],fields:{entranceAntiphon:"DIOS MÍO, SÁLVAME POR TU NOMBRE, DEFIÉNDEME CON TU PODER. DIOS MÍO, ESCUCHA MI SÚPLICA, PRESTA ATENCIÓN A LAS PALABRAS DE MI BOCA. (SAL. 53,3-4)",collect:"Señor Dios, que has preparado remedios adecuados para nuestra fragilidad, concédenos experimentar tu salvación con alegría y manifestarla con una vida santa. Te lo pedimos por nuestro Señor Jesucristo, tu Hijo que es Dios, y contigo y el Espíritu Santo vive y reina en unidad por los siglos de los siglos.",offerings:"Purificados por tu inmenso poder, te pedimos, Dios todopoderoso, que este sacrificio que celebramos nos haga llegar interiormente limpios hasta ti. Por Jesucristo nuestro Señor.",communionAntiphon:"EN CRISTO HEMOS SIDO REDIMIDOS POR SU SANGRE Y HEMOS RECIBIDO EL PERDÓN DE LOS PECADOS, SEGÚN LA RIQUEZA DE SU GRACIA. (EF. 1,7)",postCommunion:"Así como en la vida nos renovamos constantemente, concédenos, Padre, que renunciando al pecado, renovemos nuestro corazón con tu gracia. Por Jesucristo nuestro Señor."}},{source:"textosliturgia",title:"San Isidro Labrador",aliases:["San Isidro Labrador","San Isidro, labrador","Isidro Labrador"],fields:{entranceAntiphon:"El labrador aguarda paciente el fruto precioso de la tierra, esperando con paciencia hasta que recibe la lluvia temprana y la tardía. [T. P. Aleluya.]",collect:"Señor, Dios nuestro, que en la humildad y sencillez de san Isidro labrador, nos dejaste un ejemplo de vida escondida en ti, con Cristo, concédenos que el trabajo de cada día humanice nuestro mundo y sea al mismo tiempo plegaria de alabanza a tu nombre. Por nuestro Señor Jesucristo.",offerings:"Acepta y santifica, Señor, estos dones de pan y de vino, fruto de la tierra que cultivó san Isidro labrador, regándola con el sudor de su frente. Por Jesucristo, nuestro Señor.",communionAntiphon:`Oró, y el cielo dio la lluvia y la tierra produjo su fruto. [T. P. Aleluya.]

O bien:
Yo soy la verdadera vid, y mi Padre es el labrador. [T. P. Aleluya.]`,postCommunion:"Te pedimos, Señor, que el alimento santo que hemos recibido sea en nosotros siembra prometedora de cosecha abundante de caridad, para que, a imitación de san Isidro, cuya memoria hemos celebrado, sepamos compartir nuestro pan de cada día con nuestros hermanos los hombres. Por Jesucristo, nuestro Señor."}},{source:"peru",title:"María, Madre de la Iglesia",aliases:["María, Madre de la Iglesia","Santa María, Madre de la Iglesia","Bienaventurada Virgen María, Madre de la Iglesia"],fields:{entranceAntiphon:"Los discípulos perseveraban unánimes en la oración junto con María, la Madre de Jesús.",collect:"Dios Padre de misericordia, cuyo Unigénito, clavado en la cruz, proclamó como Madre nuestra a su propia Madre, María santísima, concédenos, por su cooperación amorosa, que tu Iglesia, siendo cada día más fecunda, se alegre por la santidad de sus hijos y atraiga a su seno a todas las familias de los pueblos. Por nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Recibe, Señor, nuestras ofrendas y conviértelas en sacramento de salvación, por cuya eficacia y por la intervención amorosa de la santísima Virgen María, Madre de la Iglesia, nos llenemos de santo fervor y merezcamos quedar más íntimamente asociados, con ella, a la obra de la redención. Por Jesucristo, nuestro Señor.",communionAntiphon:`Hubo unas bodas en Caná de Galilea a las que asistió María, la Madre de Jesús. En esa ocasión, Jesús dio principio a sus milagros, manifestó su poder y sus discípulos creyeron en él.

O bien:
Desde la cruz, Cristo dijo al discípulo amado: He ahí a tu Madre.`,postCommunion:"Habiendo recibido esta prenda de redención y vida, te suplicamos, Señor, que tu Iglesia, por la protección maternal de la santísima Virgen, instruya a todas las naciones, anunciándoles el Evangelio, y llene al mundo entero con la efusión de tu Espíritu. Por Jesucristo, nuestro Señor."}},{source:"textosliturgia",title:"Inmaculado Corazón de María",aliases:["Inmaculado Corazón de María","El Inmaculado Corazón de la Virgen María","Inmaculado Corazón de la Bienaventurada Virgen María"],fields:{entranceAntiphon:"Alegra mi corazón con tu auxilio y cantaré al Señor por el bien que me ha hecho.",collect:"Oh Dios, tú que has preparado en el Corazón de la Virgen María una digna morada al Espíritu Santo, haz que nosotros, por intercesión de la Virgen, lleguemos a ser templos dignos de tu gloria. Por nuestro Señor Jesucristo.",offerings:"Acoge, Señor, la ofrenda y las súplicas que te presentamos en la fiesta de María, la Madre de Dios, haz que sean agradables a tus ojos y atraigan sobre el pueblo el auxilio de tu protección. Por Jesucristo, nuestro Señor.",communionAntiphon:"María conservaba todas estas cosas, meditándolas en su corazón.",postCommunion:"Como partícipes de la redención eterna, te rogamos, Señor, que al celebrar la memoria de la Madre de tu Hijo nos gocemos en la abundancia de tu gracia y sintamos el aumento continuo de la salvación. Por Jesucristo nuestro Señor."}},{source:"mercaba",title:"24 de diciembre",aliases:["24 de diciembre","24 DE DICIEMBRE"],fields:{entranceAntiphon:"YA SE CUMPLIÓ EL TIEMPO ESTABLECIDO, EN EL QUE DIOS ENVIÓ A SU HIJO A LA TIERRA. (CFR. GAL. 4,4)",collect:"Señor Jesús, apresúrate y no tardes, para que tu venida consuele y anime a quienes confiamos en tu bondad. Tú que vives y reinas con el Padre en la unidad del Espíritu Santo y eres Dios por los siglos de los siglos.",offerings:"Acepta, Padre, por tu infinita bondad, los dones que te ofrecemos, mientras esperamos la gloriosa y definitiva venida del Señor Jesucristo, que vive y reina por los siglos de los siglos.",communionAntiphon:"BENDITO SEA EL SEÑOR, EL DIOS DE ISRAEL, PORQUE HA VISITADO Y REDIMIDO A SU PUEBLO. (LC. 1,68)",postCommunion:"Renovados por esta Eucaristía, te pedimos, Señor, que así como preparamos la fiesta del nacimiento de tu Hijo y nuestro hermano, podamos también recibir con alegría la abundancia de sus dones eternos. Por el mismo Jesucristo, nuestro Señor."}},{source:"mercaba",title:"Jueves después de Miércoles de Ceniza",aliases:["Jueves después de Miércoles de Ceniza","JUEVES DESPUES DE CENIZA"],fields:{entranceAntiphon:"INVOQUÉ AL SEÑOR Y ÉL ME ESCUCHÓ; ME DEFENDIÓ DE LOS QUE ME ATACABAN. CONFÍA TU SUERTE AL SEÑOR Y ÉL TE SOSTENDRÁ. (CFR. SAL. 54,17-20.23)",collect:"Que tu gracia, Padre, inspire y acompañe nuestras obras, para que comiencen en ti como en su fuente y tiendan a ti como a su fin. Por nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Mira con bondad, Padre, las ofrendas que presentamos sobre tu altar, para que nos consigan tu misericordia y así glorifiquen tu Nombre. Por Jesucristo, nuestro Señor.",communionAntiphon:"CREA EN MÍ, DIOS MÍO, UN CORAZÓN PURO, Y RENUEVA LA FIRMEZA DE MI ESPÍRITU. (SAL. 50,12)",postCommunion:"Favorecidos con el don del cielo, te pedimos, Dios todopoderoso, que esta Eucaristía nos alcance el perdón y la salvación. Por Jesucristo, nuestro Señor."}},{source:"mercaba",title:"Viernes después de Miércoles de Ceniza",aliases:["Viernes después de Miércoles de Ceniza","VIERNES DESPUES DE CENIZA"],fields:{entranceAntiphon:"ESCUCHA, SEÑOR, TEN PIEDAD DE MÍ; VEN A AYUDARME, SEÑOR. (SAL 29,11)",collect:"Padre misericordioso, acompaña con tu benevolencia los primeros pasos de nuestro camino penitencial, para que nuestras prácticas exteriores expresen la sinceridad de nuestro corazón. Por nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Concede, Señor, que el sacrificio ofrecido en este tiempo de preparación pascual, nos haga más gratos a tus ojos y más generosos en la práctica de la penitencia. Por Jesucristo nuestro Señor.",communionAntiphon:"MUÉSTRANOS, SEÑOR, TUS CAMINOS, ENSÉÑANOS TUS SENDEROS. (SAL 24, 4)",postCommunion:"Te pedimos, Padre santo, que la participación en tus misterios nos purifique de todo pecado y nos obtenga la conversión. Por Jesucristo, nuestro Señor."}},{source:"mercaba",title:"Lunes de la 3ª semana de Cuaresma",aliases:["Lunes de la 3ª semana de Cuaresma","LUNES DE LA III SEMANA DE CUARESMA"],fields:{entranceAntiphon:"MI ALMA SE CONSUME DE DESEOS POR LOS ATRIOS DEL SEÑOR; MI CORAZÓN Y MI CARNE CLAMAN ANSIOSOS POR EL DIOS VIVIENTE. (SAL 83,3)",collect:"Dios omnipotente, purifica y protege a tu Iglesia con tu constante misericordia y ya que sin ti no puede vivir segura, dirígela siempre con tu protección. Por nuestro Señor Jesucristo, tu Hijo que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Te ofrecemos, Señor, estos dones como expresión de nuestro servicio; conviértelos para nosotros en sacramento de salvación. Por Jesucristo nuestro Señor.",communionAntiphon:"¡ALABEN AL SEÑOR, TODAS LAS NACIONES, PORQUE ES INQUEBRANTABLE SU AMOR POR NOSOTROS! (SAL. 116,1-2)",postCommunion:"Te rogamos, Señor, que la comunión de tu sacramento nos purifique de nuestras faltas y nos congregue en la unidad. Por Jesucristo nuestro Señor."}},{source:"mercaba",title:"Lunes de la 4ª semana de Cuaresma",aliases:["Lunes de la 4ª semana de Cuaresma","LUNES DE LA IV SEMANA DE CUARESMA"],fields:{entranceAntiphon:"YO CONFÍO EN EL SEÑOR. ¡TU AMOR SERÁ MI GOZO Y MI ALEGRÍA!, PORQUE TÚ MIRASTE MI AFLICCIÓN. (CFR. SAL. 30,7-8)",collect:"Señor Dios, que renuevas al mundo por medio de sacramentos divinos; concede a tu Iglesia la ayuda de estos auxilios de tu gracia y no la prives de lo que necesita cada día. Te lo pedimos por nuestro Señor Jesucristo, tu Hijo, que es Dios y vive y reina contigo en la unidad del Espíritu Santo por los siglos de los siglos.",offerings:"Padre bueno, concédenos obtener mucho fruto de estas ofrendas que te presentamos, para que muera en nosotros el antiguo poder del pecado y nos renovemos con tu vida divina. Por Jesucristo nuestro Señor.",communionAntiphon:"DICE EL SEÑOR: INFUNDIRÉ MI ESPÍRITU EN USTEDES Y HARÉ QUE SIGAN MIS PRECEPTOS, Y QUE OBSERVEN Y PRACTIQUEN MIS LEYES. (EZ. 36,27)",postCommunion:"Te pedimos, Padre, que estos santos misterios nos renueven, nos llenen de vida y nos santifiquen, para alcanzar así los premios eternos. Por Jesucristo nuestro Señor."}},{source:"mercaba",title:"Martes de la 4ª semana de Cuaresma",aliases:["Martes de la 4ª semana de Cuaresma","MARTES DE LA IV SEMANA DE CUARESMA"],fields:{entranceAntiphon:"USTEDES, LOS SEDIENTOS, VENGAN POR AGUA, DICE EL SEÑOR; LOS QUE NO TENGAN DINERO, VENGAN Y BEBAN CON ALEGRÍA. (CFR. IS. 55,1)",collect:"Señor y Dios nuestro, te pedimos que las venerables prácticas de este tiempo cuaresmal dispongan el corazón de tus fieles para celebrar dignamente el misterio pascual y anunciar a todos los hombres la grandeza de tu salvación. por nuestro Señor Jesucristo, tu Hijo, que es Dios y vive y reina contigo en la unidad del Espíritu Santo por los siglos de los siglos.",offerings:"Te ofrecemos, Señor, estos dones que nos diste como testimonio de tu providencia para nuestra vida mortal y como alimento eficaz de inmortalidad. Por Jesucristo nuestro Señor.",communionAntiphon:"EL SEÑOR ES MI PASTOR, NADA ME PUEDE FALTAR. EN PRADERAS CUBIERTAS DE VERDOR, ÉL ME HACE DESCANSAR Y ME CONDUCE A LAS AGUAS TRANQUILAS. (SAL. 22,1-2)",postCommunion:"Purifícanos, Señor, y renuévanos de tal modo con tus sacramentos que también nuestro cuerpo encuentre en ellos fuerza para la vida presente y el germen de su vida inmortal. Por Jesucristo nuestro Señor."}},{source:"mercaba",title:"Miércoles de la 4ª semana de Cuaresma",aliases:["Miércoles de la 4ª semana de Cuaresma","MIERCOLES DE LA IV SEMANA DE CUARESMA"],fields:{entranceAntiphon:"MI ORACIÓN SUBE HASTA TI, SEÑOR, EN EL MOMENTO FAVORABLE: RESPÓNDEME, DIOS MÍO, POR TU GRAN AMOR, SÁLVAME, POR TU FIDELIDAD. (SAL. 68,14)",collect:"Padre misericordioso, tú concedes al justo el premio de sus méritos y el perdón al pecador que se arrepiente; ten piedad de nosotros que confesamos nuestras culpas y danos tu paz y tu perdón. Por nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Por este sacrificio te pedimos, Señor, que desaparezcan los rastros del pecado en nosotros y renovados en Cristo, nos hagas participar más plenamente de tu salvación. Por el mismo Jesucristo nuestro Señor.",communionAntiphon:"DIOS NO ENVIÓ A SU HIJO PARA JUZGAR AL MUNDO, SINO PARA QUE EL MUNDO SE SALVE POR ÉL. (JN. 3,17)",postCommunion:"No permitas, Señor, que estos sacramentos que hemos recibido sean causa de condenación para nosotros, ya que los instituiste como remedios de salvación. Por Jesucristo nuestro Señor."}},{source:"mercaba",title:"Lunes de la 5ª semana de Cuaresma",aliases:["Lunes de la 5ª semana de Cuaresma","LUNES DE LA V SEMANA DE CUARESMA"],fields:{entranceAntiphon:"TEN PIEDAD DE MÍ, SEÑOR, PORQUE MIS ENEMIGOS ME ASEDIAN Y COMBATEN CONTRA MÍ. (SAL. 55,2-3)",collect:"Padre bueno, tu inefable amor nos enriquece con toda clase de bendiciones; haz que pasemos del estado de pecado a la vida de la gracia y así nos preparemos para la gloria del Reino celestial. Por nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Te pedimos, Padre, que quienes nos disponemos a celebrar los santos misterios, tengamos la alegría de poder ofrecerte, como fruto de nuestra penitencia corporal, un espíritu plenamente renovado. Por Jesucristo, nuestro Señor.",communionAntiphon:"Cuando se lee el evangelio de la mujer adúltera: MUJER, ¿ALGUIEN TE HA CONDENADO? NADIE, SEÑOR. YO TAMPOCO TE CONDENO. VETE, NO PEQUES MÁS EN ADELANTE. (JN. 8,10-11) Cuando se lee otro evangelio: YO SOY LA LUZ DEL MUNDO, DICE EL SEÑOR. EL QUE ME SIGUE NO ANDARÁ EN TINIEBLAS, SINO QUE TENDRÁ LA LUZ DE LA VIDA. (JN. 8,12)",postCommunion:"Te pedimos, Padre, que estos sacramentos que nos fortalecen sean siempre para nosotros fuente de perdón y siguiendo el camino de Jesús, podamos llegar hasta ti. Por el mismo Jesucristo nuestro Señor."}},{source:"mercaba",title:"Martes de la 5ª semana de Cuaresma",aliases:["Martes de la 5ª semana de Cuaresma","MARTES DE LA V SEMANA DE CUARESMA"],fields:{entranceAntiphon:"ESPERA EN EL SEÑOR Y SÉ FUERTE; TEN VALOR Y ESPERA EN EL SEÑOR. (SAL. 26,14)",collect:"Concédenos, Padre, perseverar en el cumplimiento de tu voluntad para que, en este tiempo en que vivimos, tu pueblo crezca no sólo en número sino también en santidad. Por nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Te ofrecemos, Señor Dios, este sacrificio de reconciliación, para que mediante tu misericordia perdones nuestras faltas y guíes nuestros corazones vacilantes. Por Jesucristo nuestro Señor.",communionAntiphon:"DICE EL SEÑOR: CUANDO YO SEA LEVANTADO EN ALTO SOBRE LA TIERRA, ATRAERÉ A TODOS HACIA MÍ. (JN. 12,32)",postCommunion:"Concédenos, Dios todopoderoso, que, participando asiduamente en tus divinos misterios, merezcamos alcanzar los dones del cielo. Por Jesucristo nuestro Señor."}},{source:"mercaba",title:"Jueves de la 5ª semana de Cuaresma",aliases:["Jueves de la 5ª semana de Cuaresma","JUEVES DE LA V SEMANA DE CUARESMA"],fields:{entranceAntiphon:"CRISTO ES EL MEDIADOR DE LA NUEVA ALIANZA A FIN DE QUE, HABIENDO MUERTO ÉL, LOS QUE SON LLAMADOS RECIBAN LA HERENCIA ETERNA QUE HA SIDO PROMETIDA. (CFR. HEB. 9,15)",collect:"Escucha nuestras súplicas, Padre, y mira con amor a quienes hemos puesto nuestra esperanza en tu misericordia. Límpianos de todos los pecados para que perseveremos en una vida santa y lleguemos a heredar tus promesas. Por nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Mira complacido, Padre nuestro, los dones presentados; concédenos que sirvan para nuestra conversión y alcancen la salvación al mundo entero. Por Jesucristo nuestro Señor.",communionAntiphon:"DIOS NO PERDONÓ A SU PROPIO HIJO, SINO QUE LO ENTREGÓ POR TODOS NOSOTROS; POR ESO NOS CONCEDERÁ CON ÉL TODA CLASE DE FAVORES. (CFR. ROM. 8,32)",postCommunion:"Después de haber comido el alimento de salvación te pedimos, Padre de misericordia, que este sacramento nos haga participar de la vida eterna. Por Jesucristo nuestro Señor."}},{source:"mercaba",title:"Viernes de la 5ª semana de Cuaresma",aliases:["Viernes de la 5ª semana de Cuaresma","VIERNES DE LA V SEMANA DE CUARESMA"],fields:{entranceAntiphon:"TEN PIEDAD DE MÍ, SEÑOR, PORQUE ESTOY ANGUSTIADO; LÍBRAME DEL PODER DE MIS ENEMIGOS Y DE AQUELLOS QUE ME PERSIGUEN. SEÑOR, QUE NO ME AVERGÜENCE DE HABERTE INVOCADO. (SAL. 30,10.16.18)",collect:"Perdona las culpas de tu pueblo, Señor, y que tu amor y tu bondad nos libren del poder del pecado, al que estamos sometidos por nuestra debilidad. Te lo pedimos por nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Concédenos, Dios de misericordia, acercarnos con dignidad a la celebración de este sacrificio, y te pedimos que por nuestra frecuente participación en él, alcancemos la salvación. Por Jesucristo nuestro Señor.",communionAntiphon:"JESÚS, LLEVÓ SOBRE LA CRUZ NUESTROS PECADOS, CARGÁNDOLOS EN SU CUERPO, A FIN DE QUE, MUERTOS AL PECADO VIVAMOS PARA LA JUSTICIA. GRACIAS A SUS LLAGAS, FUIMOS CURADOS. (1 PED. 2,24)",postCommunion:"Este don que hemos recibido, Padre, nos proteja siempre y aleje de nosotros todo mal. Te lo pedimos por Jesucristo nuestro Señor."}},{source:"mercaba",title:"Lunes de la 2ª semana de Pascua",aliases:["Lunes de la 2ª semana de Pascua","LUNES DE LA II SEMANA DE PASCUA"],fields:{entranceAntiphon:"CRISTO, DESPUÉS DE RESUCITAR, NO MUERE MÁS, PORQUE LA MUERTE YA NO TIENE PODER SOBRE ÉL. ALELUIA. (ROM. 6,9)",collect:"Dios todopoderoso y eterno, a quien nos atrevemos a llamar Padre, confirma en nosotros el espíritu de hijos adoptivos para que merezcamos alcanzar la herencia prometida. Por nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Recibe, Padre, las ofrendas de tu Iglesia desbordante de alegría, y después de habernos concedido el motivo de un gozo tan grande, permítenos alcanzar su plenitud en la felicidad eterna. Por Jesucristo, nuestro Señor.",communionAntiphon:"JESÚS, PONIÉNDOSE EN MEDIO DE SUS DISCÍPULOS LES DIJO: LA PAZ ESTÉ CON USTEDES. ALELUIA. (JN. 20,19)",postCommunion:"Mira, Padre, con bondad a tu pueblo y ya que has querido renovarlo con los sacramentos de la vida eterna, concédenos alcanzar la gloria de la resurrección. Por Jesucristo, nuestro Señor."}},{source:"mercaba",title:"Martes de la 2ª semana de Pascua",aliases:["Martes de la 2ª semana de Pascua","MARTES DE LA II SEMANA DE PASCUA"],fields:{entranceAntiphon:"ALEGRÉMONOS, REGOCIJÉMONOS Y DEMOS GLORIA A DIOS, PORQUE EL SEÑOR, NUESTRO DIOS, EL TODOPODEROSO, HA ESTABLECIDO SU REINO. ALELUIA. (APOC. 19,7.6)",collect:"Dios todopoderoso, haznos capaces de proclamar la victoria de Cristo resucitado, de modo que quienes hemos recibido el anticipo de los bienes futuros, lleguemos a compartirlos un día en plenitud. Por nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Señor y Dios nuestro, concédenos alegrarnos siempre por estos misterios pascuales para que la constante celebración de nuestra redención, sea para nosotros fuente de inagotable alegría. Por Jesucristo, nuestro Señor.",communionAntiphon:"EL MESÍAS DEBÍA SUFRIR Y RESUCITAR PARA ENTRAR EN SU GLORIA. ALELUIA. (CFR. LC. 24,46.26)",postCommunion:"Escucha nuestras oraciones, Señor y Padre nuestro, para que la participación en los sacramentos por los que fuimos redimidos, nos mantenga fieles en la vida presente y así nos otorgues la felicidad eterna. Por Jesucristo, nuestro Señor."}},{source:"mercaba",title:"Miércoles de la 2ª semana de Pascua",aliases:["Miércoles de la 2ª semana de Pascua","MIERCOLES DE LA II SEMANA DE PASCUA"],fields:{entranceAntiphon:"TE ALABARÉ ENTRE LAS NACIONES, SEÑOR, Y ANUNCIARÉ TU NOMBRE A MIS HERMANOS. ALELUIA. (SAL. 17,50; 21,23)",collect:"Al revivir nuevamente este año el misterio pascual, en el que la humanidad recobra la dignidad perdida y adquiere la esperanza de la resurrección futura, te pedimos, Dios de clemencia, que el misterio celebrado en la fe se actualice siempre en el amor. Por nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Padre bondadoso, por el intercambio sagrado de este sacrificio, nos haces participar de tu vida divina; concédenos que así como conocemos tu verdad, vivamos de acuerdo con ella. Por Jesucristo, nuestro Señor.",communionAntiphon:"DICE EL SEÑOR: YO LOS ELEGÍ DEL MUNDO Y LOS DESTINÉ PARA QUE VAYAN Y DEN FRUTO, Y ESE FRUTO SEA DURADERO. ALELUIA. (CFR. JN. 15,16.19)",postCommunion:"Señor Dios de bondad, ven en ayuda de tu pueblo y ya que nos has iniciado en los misterios celestiales, concédenos pasar de la esclavitud del pecado a la novedad de una vida santa. Por Jesucristo, nuestro Señor."}},{source:"mercaba",title:"Jueves de la 2ª semana de Pascua",aliases:["Jueves de la 2ª semana de Pascua","JUEVES DE LA II SEMANA DE PASCUA"],fields:{entranceAntiphon:"SEÑOR, CUANDO SALISTE AL FRENTE DE TU PUEBLO, ABRIÉNDOLE CAMINO Y CONVIVIENDO CON ÉL, TEMBLÓ LA TIERRA Y EL CIELO DEJÓ CAER SU LLUVIA. ALELUIA. (CFR. SAL. 67,8-9.20)",collect:"Señor, Dios de misericordia, te pedimos que podamos experimentar en todo tiempo los frutos pascuales que hoy celebramos. Por nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Lleguen a ti, Padre, nuestras oraciones junto con estas ofrendas, y haz que, purificados por tu misericordia, podamos recibir el sacramento de tu inmensa bondad. Por Jesucristo, nuestro Señor.",communionAntiphon:"YO ESTARÉ SIEMPRE CON USTEDES HASTA EL FIN DEL MUNDO. ALELUIA. (MT. 28,20)",postCommunion:"Dios todopoderoso y eterno, que en la resurrección de Jesucristo nos has hecho renacer a la vida eterna, haz que los sacramentos pascuales den en nosotros fruto abundante, y que el alimento de salvación que acabamos de recibir fortalezca nuestras vidas. Por Jesucristo, nuestro Señor."}},{source:"mercaba",title:"Viernes de la 2ª semana de Pascua",aliases:["Viernes de la 2ª semana de Pascua","VIERNES DE LA II SEMANA DE PASCUA"],fields:{entranceAntiphon:"NOS HAS REDIMIDO, SEÑOR, POR MEDIO DE TU SANGRE, DE TODAS LAS FAMILIAS, LENGUAS, PUEBLOS Y NACIONES, Y HAS HECHO DE NOSOTROS UN REINO SACERDOTAL PARA NUESTRO DIOS. ALELUIA. (APOC. 5,9-10)",collect:"Ya que quisiste, Señor, que tu Hijo sufriera por nosotros el suplicio de la cruz para librarnos del poder del enemigo, concédenos la gracia de la victoria pascual. Por el mismo Jesucristo, tu Hijo y nuestro Señor, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Padre de bondad, acepta las ofrendas de tu familia, para que, protegida por ti, no pierda los dones recibidos y alcance la felicidad eterna que prometiste. Por Jesucristo, nuestro Señor.",communionAntiphon:"EL SEÑOR JESÚS FUE ENTREGADO POR NUESTROS PECADOS Y RESUCITADO PARA NUESTRA JUSTIFICACIÓN. ALELUIA. (ROM. 4,25)",postCommunion:"Protege, Señor, con amor de Padre al pueblo que has salvado por el sacrificio de la cruz y alimentado con el pan eucarístico; hazlo partícipe de la gloria de Cristo resucitado. Te lo pedimos por el mismo Jesucristo, nuestro Señor."}},{source:"mercaba",title:"Lunes de la 3ª semana de Pascua",aliases:["Lunes de la 3ª semana de Pascua","LUNES DE LA III SEMANA DE PASCUA"],fields:{entranceAntiphon:"RESUCITÓ EL BUEN PASTOR, QUE DIO LA VIDA POR SUS OVEJAS Y SE ENTREGÓ A LA MUERTE POR SU REBAÑO. ALELUIA.",collect:"Señor Dios, tú muestras la luz de tu verdad a los que viven en tinieblas y en sombras de muerte, para que puedan volver al camino de la justicia. Danos a cuantos hacemos profesión de cristianos, la gracia de rechazar todo lo que se opone a este nombre y de comprometernos con sus exigencias. Por nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Lleguen hasta ti, Padre, nuestras oraciones junto con estas ofrendas, y haz que, purificados por tu misericordia, podamos recibir el sacramento de tu inmensa bondad. Por Jesucristo, nuestro Señor.",communionAntiphon:"DICE EL SEÑOR: LES DEJO LA PAZ, LES DOY MI PAZ, PERO NO COMO LA DA EL MUNDO. ALELUIA. (JN. 14,27)",postCommunion:"Dios todopoderoso y eterno, que en la resurrección de Jesucristo nos has hecho renacer a la vida eterna, haz que los sacramentos pascuales den en nosotros fruto abundante, y que el alimento de salvación que acabamos de recibir fortalezca nuestras vidas. Por Jesucristo, nuestro Señor."}},{source:"mercaba",title:"Martes de la 3ª semana de Pascua",aliases:["Martes de la 3ª semana de Pascua","MARTES DE LA III SEMANA DE PASCUA"],fields:{entranceAntiphon:"ALABEN A NUESTRO DIOS, TODOS LOS QUE LO TEMEN, PEQUEÑOS Y GRANDES; PORQUE LLEGÓ LA SALVACIÓN, EL PODER Y EL REINO. ALELUIA. (AP. 19,5; 12,10)",collect:"Señor, Dios de misericordia, tú abres las puertas del Reino de los cielos a los renacidos por el agua y el Espíritu. Aumenta en tus hijos la gracia que nos diste, para que purificados de todos nuestros pecados, podamos gozar de los bienes que en tu bondad nos has prometido. Por nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Recibe, Padre, las ofrendas de tu Iglesia desbordante de alegría, y después de habernos concedido el motivo de un gozo tan grande, permítenos alcanzar su plenitud en la felicidad eterna. Por Jesucristo, nuestro Señor.",communionAntiphon:"SI HEMOS MUERTO CON CRISTO, CREEMOS QUE TAMBIÉN VIVIREMOS CON ÉL. ALELUIA. (ROM. 6,8)",postCommunion:"Padre providente, mira con bondad a tu pueblo, y ya que nos has renovado con los sacramentos de la vida eterna, concédenos alcanzar la gloria de la resurrección. Por Jesucristo, nuestro Señor."}},{source:"mercaba",title:"Miércoles de la 3ª semana de Pascua",aliases:["Miércoles de la 3ª semana de Pascua","MIERCOLES DE LA III SEMANA DE PASCUA"],fields:{entranceAntiphon:"MI BOCA, SEÑOR, PROCLAMA TU ALABANZA. MIS LABIOS TE CANTARÁN JUBILOSOS. ALELUIA. (SAL. 70,8.23)",collect:"Escucha a tu familia, Dios Padre providente, y a quienes regalaste el don de la fe, concédeles compartir eternamente el premio de la resurrección de tu Hijo. Él que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Señor y Dios nuestro, concédenos alegrarnos siempre por estos misterios pascuales para que la constante celebración de nuestra redención, sea para nosotros fuente de inagotable alegría. Por Jesucristo, nuestro Señor.",communionAntiphon:"CRISTO HA RESUCITADO. ÉL HA HECHO BRILLAR SOBRE NOSOTROS SU LUZ, DESPUÉS DE HABERNOS RESCATADO CON SU SANGRE.",postCommunion:"Escucha nuestras oraciones, Señor y Padre nuestro, para que la participación en los sacramentos por los que fuimos redimidos, nos mantenga fieles en la vida presente y así nos otorgues la felicidad eterna. Por Jesucristo, nuestro Señor."}},{source:"mercaba",title:"Jueves de la 3ª semana de Pascua",aliases:["Jueves de la 3ª semana de Pascua","JUEVES DE LA III SEMANA DE PASCUA"],fields:{entranceAntiphon:"CANTARÉ AL SEÑOR QUE SE HA CUBIERTO DE GLORIA. EL SEÑOR ES MI FUERZA Y MI PROTECCIÓN, ÉL ME SALVÓ. ALELUIA. (EX. 15,1-2)",collect:"Dios todopoderoso y eterno, en este tiempo pascual nos has revelado con mayor claridad tu amor y nos has permitido conocerlo más profundamente; concedenos experimentarlo con abundancia para que, liberados de las tinieblas del error, podamos adherirnos con firmeza a tu verdad. Por nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Padre bondadoso, por el intercambio sagrado de este sacrificio, nos haces participar de tu vida divina; concédenos que así como conocemos tu verdad, vivamos de acuerdo con ella. Por Jesucristo, nuestro Señor.",communionAntiphon:"CRISTO MURIÓ POR TODOS, A FIN DE QUE LOS QUE VIVEN NO VIVAN MÁS PARA SÍ MISMOS, SINO PARA AQUEL QUE MURIÓ Y RESUCITÓ POR ELLOS. ALELUIA. (2 COR. 5,15)",postCommunion:"Señor Dios de bondad, ven en ayuda de tu pueblo y ya que nos has iniciado en los misterios celestiales, concédenos pasar de la esclavitud del pecado a la novedad de una vida santa. Por Jesucristo, nuestro Señor."}},{source:"mercaba",title:"Viernes de la 3ª semana de Pascua",aliases:["Viernes de la 3ª semana de Pascua","VIERNES DE LA III SEMANA DE PASCUA"],fields:{entranceAntiphon:"EL CORDERO QUE HA SIDO INMOLADO ES DIGNO DE RECIBIR EL PODER Y LA RIQUEZA, LA SABIDURÍA, LA FUERZA Y EL HONOR, LA GLORIA Y LA ALABANZA. ALELUIA. (APOC. 5,12)",collect:"Te pedimos, Padre omnipotente, que quienes hemos conocido la gracia de la resurrección del Señor, podamos resurgir a una vida nueva por la acción de tu Espíritu. Por nuestro Señor Jesucristo, tu Hijo, que contigo vive y reina en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Dios de bondad, santifica estos dones que te presentamos y al aceptar la oblación de este sacrificio espiritual, conviértenos en ofrenda eterna. Por Jesucristo, nuestro Señor.",communionAntiphon:"EL CRUCIFICADO RESUCITÓ DE ENTRE LOS MUERTOS, Y NOS REDIMIÓ. ALELUIA.",postCommunion:"Después de recibir los sagrados misterios, humildemente te pedimos, Señor, que esta eucaristía, celebrada como memorial de tu Hijo, nos haga progresar en el amor. Por el mismo Jesucristo, nuestro Señor."}},{source:"mercaba",title:"Lunes de la 4ª semana de Pascua",aliases:["Lunes de la 4ª semana de Pascua","LUNES DE LA IV SEMANA DE PASCUA"],fields:{entranceAntiphon:"CRISTO, DESPUÉS DE RESUCITAR, NO MUERE MÁS, PORQUE LA MUERTE YA NO TIENE PODER SOBRE ÉL. ALELUIA. (ROM. 6,9)",collect:"Padre misericordioso, por medio de la humillación de tu Hijo levantaste a la humanidad caída; concede a tus fieles una santa alegría, para que quienes hemos sido liberados del pecado, alcancemos la felicidad eterna. Te lo pedimos por Jesucristo, tu Hijo y nuestro Señor, que contigo vive y reina en la unidad del Espíritu Santo y es Dios, por los siglos de los siglos.",offerings:"Recibe, Padre, las ofrendas de tu Iglesia desbordante de alegría, y después de habernos concedido el motivo de un gozo tan grande, permítenos alcanzar su plenitud en la felicidad eterna. Por Jesucristo, nuestro Señor.",communionAntiphon:"JESÚS, PONIÉNDOSE EN MEDIO DE SUS DISCÍPULOS LES DIJO: LA PAZ ESTÉ CON USTEDES. ALELUIA. (JN. 20,19)",postCommunion:"Mira, Padre, con bondad a tu pueblo y ya que has querido renovarlo con los sacramentos de la vida eterna, concédenos alcanzar la gloria de la resurrección. Por Jesucristo, nuestro Señor."}},{source:"mercaba",title:"Martes de la 4ª semana de Pascua",aliases:["Martes de la 4ª semana de Pascua","MARTES DE LA IV SEMANA DE PASCUA"],fields:{entranceAntiphon:"ALEGRÉMONOS, REGOCIJÉMONOS Y DEMOS GLORIA A DIOS, PORQUE EL SEÑOR, NUESTRO DIOS, EL TODOPODEROSO, HA ESTABLECIDO SU REINO. ALELUIA. (APOC. 19,7.6)",collect:"Te pedimos, Dios todopoderoso, que la celebración de las fiestas de Cristo resucitado aumente en nosotros la alegría de sabernos salvados. Por nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Señor y Dios nuestro, concédenos alegrarnos siempre por estos misterios pascuales para que la constante celebración de nuestra redención, sea para nosotros fuente de inagotable alegría. Por Jesucristo, nuestro Señor.",communionAntiphon:"EL MESÍAS DEBÍA SUFRIR Y RESUCITAR PARA ENTRAR EN SU GLORIA. ALELUIA. (CFR. LC. 24,46.26)",postCommunion:"Escucha nuestras oraciones, Señor y Padre nuestro, para que la participación en los sacramentos por los que fuimos redimidos, nos mantenga fieles en la vida presente y así nos otorgues la felicidad eterna. Por Jesucristo, nuestro Señor."}},{source:"mercaba",title:"Jueves de la 4ª semana de Pascua",aliases:["Jueves de la 4ª semana de Pascua","JUEVES DE LA IV SEMANA DE PASCUA"],fields:{entranceAntiphon:"SEÑOR, CUANDO SALISTE AL FRENTE DE TU PUEBLO, ABRIÉNDOLE CAMINO Y CONVIVIENDO CON ÉL, TEMBLÓ LA TIERRA Y EL CIELO DEJÓ CAER SU LLUVIA. ALELUIA. (CFR. SAL. 67,8-9.20)",collect:"Señor y Dios nuestro, que restauras la dignidad del hombre elevándolo por encima de su condición original: no olvides tu inefable proyecto de amor y bendice con tus dones a quienes redimiste por medio del bautismo. Te lo pedimos por nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Lleguen a ti, Padre, nuestras oraciones junto con estas ofrendas, y haz que, purificados por tu misericordia, podamos recibir el sacramento de tu inmensa bondad. Por Jesucristo, nuestro Señor.",communionAntiphon:"YO ESTARÉ SIEMPRE CON USTEDES HASTA EL FIN DEL MUNDO. ALELUIA. (MT. 28,20)",postCommunion:"Dios todopoderoso y eterno, que en la resurrección de Jesucristo nos has hecho renacer a la vida eterna, haz que los sacramentos pascuales den en nosotros fruto abundante, y que el alimento de salvación que acabamos de recibir fortalezca nuestras vidas. Por Jesucristo, nuestro Señor."}},{source:"mercaba",title:"Viernes de la 4ª semana de Pascua",aliases:["Viernes de la 4ª semana de Pascua","VIERNES DE LA IV SEMANA DE PASCUA"],fields:{entranceAntiphon:"NOS HAS REDIMIDO, SEÑOR, POR MEDIO DE TU SANGRE, DE TODAS LAS FAMILIAS, LENGUAS, PUEBLOS Y NACIONES, Y HAS HECHO DE NOSOTROS UN REINO SACERDOTAL PARA NUESTRO DIOS. ALELUIA. (APOC. 5,9-10)",collect:"Tú eres, Padre, el autor de nuestra libertad y de nuestra salvación; escucha nuestra oración y concédenos a quienes redimiste con la sangre de tu Hijo la gracia de vivir para ti y encontrar en ti la felicidad eterna. Por el mismo Jesucristo, tu Hijo y nuestro Señor, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Padre de bondad, acepta las ofrendas de tu familia, para que, protegida por ti, no pierda los dones recibidos y alcance la felicidad eterna que prometiste.",communionAntiphon:"EL SEÑOR JESÚS FUE ENTREGADO POR NUESTROS PECADOS Y RESUCITADO PARA NUESTRA JUSTIFICACIÓN. ALELUIA. (ROM. 4,25)",postCommunion:"Protege, Señor, con amor de Padre al pueblo que has salvado por el sacrificio de la cruz y alimentado con el pan eucarístico; hazlo partícipe de la gloria de Cristo resucitado. Te lo pedimos por el mismo Jesucristo, nuestro Señor."}},{source:"mercaba",title:"Lunes de la 5ª semana de Pascua",aliases:["Lunes de la 5ª semana de Pascua","LUNES DE LA V SEMANA DE PASCUA"],fields:{entranceAntiphon:"RESUCITÓ EL BUEN PASTOR, QUE DIO LA VIDA POR SUS OVEJAS Y SE ENTREGÓ A LA MUERTE POR SU REBAÑO. ALELUIA.",collect:"Señor Dios, que unes a tus fieles en una sola voluntad; concédenos amar lo que nos mandas y esperar lo que nos prometes, para que en medio de la inestabilidad de este mundo, esté firme nuestro corazón donde se encuentra la verdadera alegría. Por nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Lleguen hasta ti, Padre, nuestras oraciones junto con estas ofrendas, y haz que, purificados por tu misericordia, podamos recibir el sacramento de tu inmensa bondad. Por Jesucristo, nuestro Señor.",communionAntiphon:"DICE EL SEÑOR: LES DEJO LA PAZ, LES DOY MI PAZ, PERO NO COMO LA DA EL MUNDO. ALELUIA. (JN. 14,27)",postCommunion:"Dios todopoderoso y eterno, que en la resurrección de Jesucristo nos has hecho renacer a la vida eterna, haz que los sacramentos pascuales den en nosotros fruto abundante, y que el alimento de salvación que acabamos de recibir fortalezca nuestras vidas. Por Jesucristo, nuestro Señor."}},{source:"mercaba",title:"Martes de la 5ª semana de Pascua",aliases:["Martes de la 5ª semana de Pascua","MARTES DE LA V SEMANA DE PASCUA"],fields:{entranceAntiphon:"ALABEN A NUESTRO DIOS, TODOS LOS QUE LO TEMEN, PEQUEÑOS Y GRANDES; PORQUE LLEGÓ LA SALVACIÓN, EL PODER Y EL REINO. ALELUIA. (AP. 19,5; 12,10)",collect:"Señor Dios, que en la Resurrección de Cristo nos renuevas para la vida eterna, concede a tu pueblo perseverar en la fe y en la esperanza, para que nunca dudemos del cumplimiento de tus promesas. Por nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Recibe, Padre, las ofrendas de tu Iglesia desbordante de alegría, y después de habernos concedido el motivo de un gozo tan grande, permítenos alcanzar su plenitud en la felicidad eterna. Por Jesucristo, nuestro Señor.",communionAntiphon:"SI HEMOS MUERTO CON CRISTO, CREEMOS QUE TAMBIÉN VIVIREMOS CON ÉL. ALELUIA. (ROM. 6,8)",postCommunion:"Padre providente, mira con bondad a tu pueblo, y ya que nos has renovado con los sacramentos de la vida eterna, concédenos alcanzar la gloria de la resurrección. Por Jesucristo, nuestro Señor."}},{source:"mercaba",title:"Miércoles de la 5ª semana de Pascua",aliases:["Miércoles de la 5ª semana de Pascua","MIERCOLES DE LA V SEMANA DE PASCUA"],fields:{entranceAntiphon:"MI BOCA, SEÑOR, PROCLAMA TU ALABANZA. MIS LABIOS TE CANTARÁN JUBILOSOS. ALELUIA. (SAL. 70,8.23)",collect:"Dios misericordioso, que amas la inocencia y la devuelves a quienes la han perdido; dirige hacia ti nuestros corazones, para que liberados de las tinieblas de la incredulidad, nunca nos apartemos de la luz de tu verdad. Te lo pedimos por nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Señor y Dios nuestro, concédenos alegrarnos siempre por estos misterios pascuales para que la constante celebración de nuestra redención, sea para nosotros fuente de inagotable alegría. Por Jesucristo, nuestro Señor.",communionAntiphon:"CRISTO HA RESUCITADO. ÉL HA HECHO BRILLAR SOBRE NOSOTROS SU LUZ, DESPUÉS DE HABERNOS RESCATADO CON SU SANGRE.",postCommunion:"Escucha nuestras oraciones, Señor y Padre nuestro, para que la participación en los sacramentos por los que fuimos redimidos, nos mantenga fieles en la vida presente y así nos otorgues la felicidad eterna. Por Jesucristo, nuestro Señor."}},{source:"mercaba",title:"Jueves de la 5ª semana de Pascua",aliases:["Jueves de la 5ª semana de Pascua","JUEVES DE LA V SEMANA DE PASCUA"],fields:{entranceAntiphon:"CANTARÉ AL SEÑOR QUE SE HA CUBIERTO DE GLORIA. EL SEÑOR ES MI FUERZA Y MI PROTECCIÓN, ÉL ME SALVÓ. ALELUIA. (EX. 15,1-2)",collect:"Dios, Padre del perdón, por tu gracia conviertes en justos a los pecadores y das la felicidad a los afligidos; ayúdanos con tu poder y con tus dones, para perseverar con fortaleza en la fe que nos ha justificado. Por nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Padre bondadoso, por el intercambio sagrado de este sacrificio, nos haces participar de tu vida divina; concédenos que así como conocemos tu verdad, vivamos de acuerdo con ella. Por Jesucristo, nuestro Señor.",communionAntiphon:"CRISTO MURIÓ POR TODOS, A FIN DE QUE LOS QUE VIVEN NO VIVAN MÁS PARA SÍ MISMOS, SINO PARA AQUEL QUE MURIÓ Y RESUCITÓ POR ELLOS. ALELUIA. (2 COR. 5,15)",postCommunion:"Señor Dios de bondad, ven en ayuda de tu pueblo y ya que nos has iniciado en los misterios celestiales, concédenos pasar de la esclavitud del pecado a la novedad de una vida santa. Por Jesucristo, nuestro Señor."}},{source:"mercaba",title:"Viernes de la 5ª semana de Pascua",aliases:["Viernes de la 5ª semana de Pascua","VIERNES DE LA V SEMANA DE PASCUA"],fields:{entranceAntiphon:"EL CORDERO QUE HA SIDO INMOLADO ES DIGNO DE RECIBIR EL PODER Y LA RIQUEZA, LA SABIDURÍA, LA FUERZA Y EL HONOR, LA GLORIA Y LA ALABANZA. ALELUIA. (APOC. 5,12)",collect:"Dios de amor y paz, concédenos la gracia de encaminar nuestra vida según la exigencia de los misterios pascuales, para que al celebrarlos con alegría, nos proteja y nos salve su continua eficacia. Por nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Dios de bondad, santifica estos dones que te presentamos y al aceptar la oblación de este sacrificio espiritual, conviértenos en ofrenda eterna. Por Jesucristo, nuestro Señor.",communionAntiphon:"EL CRUCIFICADO RESUCITÓ DE ENTRE LOS MUERTOS, Y NOS REDIMIÓ. ALELUIA.",postCommunion:"Después de recibir los sagrados misterios, humildemente te pedimos, Señor, que esta eucaristía, celebrada como memorial de tu Hijo, nos haga progresar en el amor. Por el mismo Jesucristo, nuestro Señor."}},{source:"mercaba",title:"Lunes de la 6ª semana de Pascua",aliases:["Lunes de la 6ª semana de Pascua","LUNES DE LA VI SEMANA DE PASCUA"],fields:{entranceAntiphon:"CRISTO, DESPUÉS DE RESUCITAR, NO MUERE MÁS, PORQUE LA MUERTE YA NO TIENE PODER SOBRE ÉL. ALELUIA. (ROM. 6,9)",collect:"Dios misericordioso y providente; te pedimos experimentar en todo tiempo los frutos del misterio pascual que hoy celebramos. Por nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Recibe, Padre, las ofrendas de tu Iglesia desbordante de alegría, y después de habernos concedido el motivo de un gozo tan grande, permítenos alcanzar su plenitud en la felicidad eterna. Por Jesucristo, nuestro Señor.",communionAntiphon:"JESÚS, PONIÉNDOSE EN MEDIO DE SUS DISCÍPULOS LES DIJO: LA PAZ ESTÉ CON USTEDES. ALELUIA. (JN. 20,19)",postCommunion:"Mira, Padre, con bondad a tu pueblo y ya que has querido renovarlo con los sacramentos de la vida eterna, concédenos alcanzar la gloria de la resurrección. Por Jesucristo, nuestro Señor."}},{source:"mercaba",title:"Martes de la 6ª semana de Pascua",aliases:["Martes de la 6ª semana de Pascua","MARTES DE LA VI SEMANA DE PASCUA"],fields:{entranceAntiphon:"ALEGRÉMONOS, REGOCIJÉMONOS Y DEMOS GLORIA A DIOS, PORQUE EL SEÑOR, NUESTRO DIOS, EL TODOPODEROSO, HA ESTABLECIDO SU REINO. ALELUIA. (APOC. 19,7.6)",collect:"Que tu pueblo, Padre, rejuvenecido por la vida nueva, tenga una permanente alegría y ya que recobramos la gloria de la adopción filial, que sepamos aguardar con alegría y esperanza el día de la resurrección. Te lo pedimos por nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Señor y Dios nuestro, concédenos alegrarnos siempre por estos misterios pascuales para que la constante celebración de nuestra redención, sea para nosotros fuente de inagotable alegría. Por Jesucristo, nuestro Señor.",communionAntiphon:"EL MESÍAS DEBÍA SUFRIR Y RESUCITAR PARA ENTRAR EN SU GLORIA. ALELUIA. (CFR. LC. 24,46.26)",postCommunion:"Escucha nuestras oraciones, Señor y Padre nuestro, para que la participación en los sacramentos por los que fuimos redimidos, nos mantenga fieles en la vida presente y así nos otorgues la felicidad eterna. Por Jesucristo, nuestro Señor."}},{source:"mercaba",title:"Miércoles de la 6ª semana de Pascua",aliases:["Miércoles de la 6ª semana de Pascua","MIERCOLES DE LA VI SEMANA DE PASCUA"],fields:{entranceAntiphon:"TE ALABARÉ ENTRE LAS NACIONES, SEÑOR, Y ANUNCIARÉ TU NOMBRE A MIS HERMANOS. ALELUIA. (SAL. 17,50; 21,23)",collect:"Te pedimos, Dios todopoderoso, que así como celebramos el misterio de la resurrección de tu Hijo, podamos también alegrarnos con todos los santos cuando Él vuelva para la pascua definitiva. Por nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Padre bondadoso, por el intercambio sagrado de este sacrificio, nos haces participar de tu vida divina; concédenos que así como conocemos tu verdad, vivamos de acuerdo con ella. Por Jesucristo, nuestro Señor.",communionAntiphon:"DICE EL SEÑOR: YO LOS ELEGÍ DEL MUNDO Y LOS DESTINÉ PARA QUE VAYAN Y DEN FRUTO, Y ESE FRUTO SEA DURADERO. ALELUIA. (CFR. JN. 15,16.19)",postCommunion:"Señor Dios de bondad, ven en ayuda de tu pueblo y ya que nos has iniciado en los misterios celestiales, concédenos pasar de la esclavitud del pecado a la novedad de una vida santa. Por Jesucristo, nuestro Señor."}},{source:"mercaba",title:"Lunes de la 7ª semana de Pascua",aliases:["Lunes de la 7ª semana de Pascua","LUNES DE LA VII SEMANA DE PASCUA"],fields:{entranceAntiphon:"RECIBIRÁN LA FUERZA DEL ESPÍRITU SANTO QUE DESCENDERÁ SOBRE USTEDES, Y SERÁN MIS TESTIGOS HASTA LOS CONFINES DE LA TIERRA. ALELUIA. (HECH. 1,8)",collect:"Derrama sobre nosotros, Señor, la fuerza del Espíritu Santo, para que podamos cumplir fielmente tu voluntad y demos testimonio de ti con nuestras obras. Por nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Te pedimos, Señor Dios, que este santo sacrificio nos purifique e infunda en nosotros la fuerza de tu gracia. Por Jesucristo, nuestro Señor.",communionAntiphon:"DICE EL SEÑOR: NO LOS DEJARÉ HUÉRFANOS, VOLVERÉ A USTEDES, Y SE ALEGRARÁ SU CORAZÓN. ALELUIA. (CFR. JN. 14,18; 16,22)",postCommunion:"Señor Dios de bondad, ven en ayuda de tu pueblo y ya que nos has iniciado en los misterios celestiales, concédenos pasar de la esclavitud del pecado a la novedad de una vida santa. Por Jesucristo, nuestro Señor."}},{source:"mercaba",title:"Martes de la 7ª semana de Pascua",aliases:["Martes de la 7ª semana de Pascua","MARTES DE LA VII SEMANA DE PASCUA"],fields:{entranceAntiphon:"YO SOY EL PRIMERO Y EL ÚLTIMO, EL VIVIENTE. ESTUVE MUERTO PERO AHORA VIVO PARA SIEMPRE. ALELUIA. (APOC. 1,17-18)",collect:"Padre rico en misericordia, envía tu Espíritu para que habite en nosotros y nos convierta en templos de tu gloria. Te lo pedimos por nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Recibe, Padre nuestro, las oraciones de tus fieles, junto con la oblación de estas ofrendas, para que este culto de nuestra entrega nos introduzca en la gloria celestial. Por Jesucristo, nuestro Señor.",communionAntiphon:"DICE EL SEÑOR: EL ESPÍRITU SANTO, QUE EL PADRE ENVIARÁ EN MI NOMBRE, LES ENSEÑARÁ TODO Y LES RECORDARÁ LO QUE LES HE DICHO. ALELUIA. (JN. 14,26)",postCommunion:"Después de recibir los sagrados misterios, humildemente te pedimos, Señor, que esta eucaristía, celebrada como memorial de tu Hijo, nos haga progresar en el amor. Por el mismo Jesucristo, nuestro Señor."}},{source:"mercaba",title:"Miércoles de la 7ª semana de Pascua",aliases:["Miércoles de la 7ª semana de Pascua","MIERCOLES DE LA VII SEMANA DE PASCUA"],fields:{entranceAntiphon:"APLAUDAN, TODOS LOS PUEBLOS, ACLAMEN AL SEÑOR CON GRITOS DE ALEGRÍA. ALELUIA. (SAL. 46,2)",collect:"Padre, fuente y autor de toda santidad; te pedimos que tu Iglesia, congregada por el Espíritu Santo, te sirva siempre de todo corazón y permanezca unida en un mismo amor. Por nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Recibe, Padre lleno de amor, este sacrificio instituido por ti, y gracias a estos sagrados misterios que celebramos como deber de nuestro servicio, santifícanos y danos tu salvación. Por Jesucristo, nuestro Señor.",communionAntiphon:"DICE EL SEÑOR: CUANDO VENGA EL PARÁCLITO QUE YO LES ENVIARÉ DESDE EL PADRE, EL ESPÍRITU DE LA VERDAD QUE PROVIENE DEL PADRE, ÉL DARÁ TESTIMONIO DE MÍ. Y USTEDES TAMBIÉN DARÁN TESTIMONIO DE MÍ. ALELUIA. (JN. 15,26-27)",postCommunion:"Te pedimos, Dios santo, que este sacramento celestial aumente tu gracia en nosotros y nos purifique con su eficacia, para que podamos recibir constantemente un don tan admirable. Por Jesucristo, nuestro Señor."}},{source:"mercaba",title:"Jueves de la 7ª semana de Pascua",aliases:["Jueves de la 7ª semana de Pascua","JUEVES DE LA VII SEMANA DE PASCUA"],fields:{entranceAntiphon:"VAYAMOS CONFIADAMENTE AL TRONO DE LA GRACIA, A FIN DE OBTENER MISERICORDIA Y ALCANZAR LA GRACIA DE UN AUXILIO OPORTUNO. ALELUIA. (HEB. 4,16)",collect:"Señor Dios, que tu Espíritu derrame sobre nosotros la fuerza de sus dones, y nos dé un corazón que sea de tu agrado, siempre dispuesto a cumplir tu voluntad. Por nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Dios de bondad, santifica estos dones que te presentamos y al aceptar la oblación de este sacrificio espiritual, conviértenos en ofrenda eterna. Por Jesucristo, nuestro Señor.",communionAntiphon:"DICE EL SEÑOR: LES DIGO LA VERDAD, LES CONVIENE QUE YO ME VAYA, PORQUE SI NO ME VOY, EL PARÁCLITO NO VENDRÁ A USTEDES. ALELUIA. (JN. 16,7)",postCommunion:"Dios de amor, te suplicamos que los misterios recibidos, nos instruyan con sus enseñanzas, y nos renueven con su participación, para que merezcamos poseer los dones del Espíritu Santo. Por Jesucristo, nuestro Señor."}},{source:"mercaba",title:"Viernes de la 7ª semana de Pascua",aliases:["Viernes de la 7ª semana de Pascua","VIERNES DE LA VII SEMANA DE PASCUA"],fields:{entranceAntiphon:"CRISTO NOS AMÓ Y NOS PURIFICÓ DE NUESTROS PECADOS, POR MEDIO DE SU SANGRE E HIZO DE NOSOTROS UN REINO SACERDOTAL PARA DIOS, SU PADRE. ALELUIA. (APOC. 1,5-6)",collect:"Dios y Señor nuestro, por la glorificación de tu Hijo y con la luz del Espíritu Santo, nos abriste las puertas de la eternidad. Te pedimos que, al participar de un don tan grande, se acreciente nuestra entrega a tu servicio y progresemos en la fe. Por nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Padre de todos los hombres, mira con bondad las ofrendas de tu pueblo, y para que podamos presentarte un sacrificio agradable, haz que la venida del Espíritu Santo nos limpie de todo pecado. Por Jesucristo, nuestro Señor.",communionAntiphon:"DICE EL SEÑOR: CUANDO VENGA EL ESPÍRITU DE LA VERDAD, ÉL LOS INTRODUCIRÁ EN TODA LA VERDAD. ALELUIA. (JN. 16,13)",postCommunion:"Padre providente, que nos purificas y nos alimentas con esta Eucaristía, concédenos que, por su eficacia, alcancemos la vida eterna. Por Jesucristo, nuestro Señor."}},{source:"mercaba",title:"Martes de la 1ª semana de Adviento",aliases:["Martes de la 1ª semana de Adviento","MARTES DE LA I SEMANA DE ADVIENTO"],fields:{entranceAntiphon:"VENDRÁ EL SEÑOR, MI DIOS, Y TODOS LOS SANTOS CON ÉL, Y BRILLARÁ EN AQUEL DÍA UNA GRAN LUZ. (CFR. ZAC. 14,5.7)",collect:"Dios de infinita misericordia, escucha favorablemente nuestras súplicas, socórrenos en medio de las pruebas de la vida, y que la venida de tu Hijo nos reconforte para que no volvamos a caer en la esclavitud del pecado. Te lo pedimos, por el mismo Jesucristo, nuestro Señor, que vive y reina contigo, en la unidad del Espíritu Santo y es Dios, por los siglos de los siglos.",offerings:"Te pedimos, Padre, que te sean agradables nuestras humildes oraciones y ofrendas, y ya que carecemos de méritos propios, socórrenos con tu misericordia. Por Jesucristo, nuestro Señor.",communionAntiphon:"EL JUSTO JUEZ DARÁ LA CORONA DE JUSTICIA A TODOS LOS QUE HAYAN AGUARDADO CON AMOR SU VENIDA. (CFR. 2 TIM. 4,8)",postCommunion:"Saciados con el alimento espiritual, te rogamos, Padre, que por la participación de este santo misterio, nos enseñes a valorar sabiamente las cosas terrenas con el corazón puesto en las celestiales. Por Jesucristo, nuestro Señor."}},{source:"mercaba",title:"Miércoles de la 1ª semana de Adviento",aliases:["Miércoles de la 1ª semana de Adviento","MIERCOLES DE LA I SEMANA DE ADVIENTO"],fields:{entranceAntiphon:"VENDRÁ EL SEÑOR Y NO TARDARÁ. SACARÁ A LA LUZ LO QUE ESTÁ OCULTO EN LAS TINIEBLAS Y MANIFESTARÁ LAS INTENCIONES SECRETAS DE LOS CORAZONES. (CFR. HAB. 2,3; 1 COR. 4,5)",collect:"Señor y Dios nuestro, que tu poder divino prepare nuestro corazón para que cuando llegue tu Hijo, Jesucristo, nos encuentre dignos de sentarnos a su mesa y Él mismo nos sirva el alimento celestial. Que vive y reina contigo, en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Ayúdanos, Padre, a ofrecerte este sacrificio como expresión de nuestra propia entrega, para que así cumplamos debidamente lo que tú mismo nos mandaste celebrar y obtengamos la plenitud de la salvación. Por Jesucristo, nuestro Señor.",communionAntiphon:"EL SEÑOR LLEGA CON PODER E ILUMINARÁ LOS OJOS DE SUS SERVIDORES. (CFR. IS. 35,5; 40,10)",postCommunion:"Señor y Dios nuestro, imploramos tu clemencia para que, liberándonos de todo pecado, la fuerza de este alimento divino nos prepare a las fiestas que ya se acercan. Por Jesucristo, nuestro Señor."}},{source:"mercaba",title:"Viernes de la 1ª semana de Adviento",aliases:["Viernes de la 1ª semana de Adviento","VIERNES DE LA I SEMANA DE ADVIENTO"],fields:{entranceAntiphon:"VIENE EL SEÑOR CON GLORIA A VISITAR A SU PUEBLO CON LA PAZ YA DARLE LA VIDA ETERNA.",collect:"(dirigida a Jesucristo) Señor Jesús, muéstranos tu poder y ven; sálvanos del pecado, protégenos de todo peligro y condúcenos a la salvación. Tú que vives y reinas con el Padre en la unidad del Espíritu Santo y eres Dios por los siglos de los siglos.",offerings:"Te pedimos, Padre, que te sean agradables nuestras humildes oraciones y ofrendas, y ya que carecemos de méritos propios, socórrenos con tu misericordia. Por Jesucristo, nuestro Señor.",communionAntiphon:"ESPERAMOS ARDIENTEMENTE QUE VENGA COMO SALVADOR EL SEÑOR JESUCRISTO. ÉL TRANSFORMARÁ NUESTRO POBRE CUERPO MORTAL, HACIÉNDOLO SEMEJANTE A SU CUERPO GLORIOSO. (FILIP. 3,20-21)",postCommunion:"Saciados con el alimento espiritual, te rogamos, Padre, que por la participación de este santo misterio, nos enseñes a valorar sabiamente las cosas terrenas con el corazón puesto en las celestiales. Por Jesucristo, nuestro Señor."}},{source:"mercaba",title:"Miércoles de la 2ª semana de Adviento",aliases:["Miércoles de la 2ª semana de Adviento","MIERCOLES DE LA II SEMANA DE ADVIENTO"],fields:{entranceAntiphon:"VENDRÁ EL SEÑOR Y NO TARDARÁ. SACARÁ A LA LUZ LO QUE ESTÁ OCULTO EN LAS TINIEBLAS Y MANIFESTARÁ LAS INTENCIONES SECRETAS DE LOS CORAZONES. (CFR. HAB. 2,3; 1 COR. 4,5)",collect:"Dios todopoderoso, que nos exhortas a preparar el camino del Señor, no permitas que quienes esperamos la presencia consoladora del médico celestial desfallezcamos a causa de nuestra debilidad. Por nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo, en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Ayúdanos, Padre, a ofrecerte este sacrificio como expresión de nuestra propia entrega, para que así cumplamos debidamente lo que tú mismo nos mandaste celebrar y obtengamos la plenitud de la salvación. Por Jesucristo, nuestro Señor.",communionAntiphon:"EL SEÑOR LLEGA CON PODER E ILUMINARÁ LOS OJOS DE SUS SERVIDORES. (CFR. IS. 35,5; 40,10)",postCommunion:"Señor y Dios nuestro, imploramos tu clemencia para que, liberándonos de todo pecado, la fuerza de este alimento divino nos prepare a las fiestas que ya se acercan. Por Jesucristo, nuestro Señor."}},{source:"mercaba",title:"Jueves de la 2ª semana de Adviento",aliases:["Jueves de la 2ª semana de Adviento","JUEVES DE LA II SEMANA DE ADVIENTO"],fields:{entranceAntiphon:"TÚ ESTÁS CERCA, SEÑOR, Y TODOS TUS MANDAMIENTOS SON VERDADEROS. YO SÉ DESDE HACE MUCHO TIEMPO QUE TÚ AFIRMASTE PARA SIEMPRE TUS PRESCRIPCIONES. (SAL. 118,151-152)",collect:"Despierta, Señor, nuestro corazón y anímanos a preparar los caminos de tu Hijo, para que gracias a su venida, podamos servirte con una vida santa. Por el mismo Jesucristo, nuestro Señor, que vive y reina contigo, en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"De todo lo que hemos recibido de tu generosidad, acepta, Padre, los dones que te presentamos, y que esta ofrenda realizada en el tiempo presente, se convierta, para nosotros, en anticipo de la salvación eterna. Por Jesucristo, nuestro Señor.",communionAntiphon:"VIVAMOS EN LA VIDA PRESENTE CON SOBRIEDAD, JUSTICIA Y PIEDAD, MIENTRAS AGUARDAMOS LA FELIZ ESPERANZA Y LA MANIFESTACIÓN DE LA GLORIA DE NUESTRO GRAN DIOS. (TITO 2,12-13)",postCommunion:"Te pedimos, Padre, que la celebración de estos santos misterios produzca su fruto en nosotros, y nos enseñe a amar los bienes eternos mientras peregrinamos en medio de las cosas transitorias. Por Jesucristo, nuestro Señor."}},{source:"mercaba",title:"Viernes de la 2ª semana de Adviento",aliases:["Viernes de la 2ª semana de Adviento","VIERNES DE LA II SEMANA DE ADVIENTO"],fields:{entranceAntiphon:"VIENE EL SEÑOR CON GLORIA A VISITAR A SU PUEBLO CON LA PAZ Y A DARLE LA VIDA ETERNA.",collect:"Concede a tu pueblo, Señor, la gracia de esperar ardientemente la venida de tu Hijo para que podamos salir a su encuentro con las lámparas encendidas, como Él nos enseñó. Que vive y reina contigo, en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Te pedimos, Padre, que te sean agradables nuestras humildes oraciones y ofrendas, y ya que carecemos de méritos propios, socórrenos con tu misericordia. Por Jesucristo, nuestro Señor.",communionAntiphon:"ESPERAMOS ARDIENTEMENTE QUE VENGA COMO SALVADOR EL SEÑOR JESUCRISTO. ÉL TRANSFORMARÁ NUESTRO POBRE CUERPO MORTAL, HACIÉNDOLO SEMEJANTE A SU CUERPO GLORIOSO. (FILIP. 3,20-21)",postCommunion:"Saciados con el alimento espiritual, te rogamos, Padre, que por la participación de este santo misterio, nos enseñes a valorar sabiamente las cosas terrenas con el corazón puesto en las celestiales. Por Jesucristo, nuestro Señor."}},{source:"mercaba",title:"Martes de la 3ª semana de Adviento",aliases:["Martes de la 3ª semana de Adviento","MARTES DE LA III SEMANA DE ADVIENTO"],fields:{entranceAntiphon:"VENDRÁ EL SEÑOR, MI DIOS, Y TODOS LOS SANTOS CON ÉL, Y BRILLARÁ EN AQUEL DÍA UNA GRAN LUZ. (CFR. ZAC. 14,5.7)",collect:"Padre lleno de bondad, que por medio de tu Hijo único has hecho de nosotros una nueva criatura, mira con amor la obra de tu misericordia, y por su venida purifícanos del pecado. Por nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo, en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Te pedimos, Padre, que te sean agradables nuestras humildes oraciones y ofrendas, y ya que carecemos de méritos propios, socórrenos con tu misericordia. Por Jesucristo, nuestro Señor.",communionAntiphon:"EL JUSTO JUEZ DARÁ LA CORONA DE JUSTICIA A TODOS LOS QUE HAYAN AGUARDADO CON AMOR SU VENIDA. (CFR. 2 TIM. 4,8)",postCommunion:"Saciados con el alimento espiritual, te rogamos, Padre, que por la participación de este santo misterio, nos enseñes a valorar sabiamente las cosas terrenas con el corazón puesto en las celestiales. Por Jesucristo, nuestro Señor."}},{source:"mercaba",title:"Miércoles de la 3ª semana de Adviento",aliases:["Miércoles de la 3ª semana de Adviento","MIERCOLES DE LA III SEMANA DE ADVIENTO"],fields:{entranceAntiphon:"VENDRÁ EL SEÑOR Y NO TARDARÁ. SACARÁ A LA LUZ LO QUE ESTÁ OCULTO EN LAS TINIEBLAS Y MANIFESTARÁ LAS INTENCIONES SECRETAS DE LOS CORAZONES. (CFR. HAB. 2,3; 1 COR. 4,5)",collect:"Concédenos, Señor y Dios nuestro, que la cercana celebración del nacimiento de tu Hijo nos fortalezca en medio de las fatigas de cada día, y nos alcance la recompensa eterna. Por nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo, en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Ayúdanos, Padre, a ofrecerte este sacrificio como expresión de nuestra propia entrega, para que así cumplamos debidamente lo que tú mismo nos mandaste celebrar y obtengamos la plenitud de la salvación. Por Jesucristo, nuestro Señor.",communionAntiphon:"EL SEÑOR LLEGA CON PODER E ILUMINARÁ LOS OJOS DE SUS SERVIDORES. (CFR. IS. 35,5; 40,10)",postCommunion:"Señor y Dios nuestro, imploramos tu clemencia para que, liberándonos de todo pecado, la fuerza de este alimento divino nos prepare a las fiestas que ya se acercan. Por Jesucristo, nuestro Señor."}},{source:"mercaba",title:"17 de diciembre",aliases:["17 de diciembre","17 DE DICIEMBRE"],fields:{entranceAntiphon:"¡GRITEN DE ALEGRÍA, CIELOS!¡REGOCÍJATE, TIERRA!, PORQUE VIENE EL SEÑOR Y SE COMPADECE DE SUS POBRES. (CFR. IS. 49,13)",collect:"Señor Dios, creador y redentor del hombre, que quisiste que tu Palabra se encarnara en el seno de una Madre siempre virgen, concédenos participar de la vida divina de tu Hijo, así como él quiso asumir nuestra condición humana. Que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Señor, Dios nuestro, santifica las ofrendas de tu Iglesia, y danos en estos sagrados misterios el pan del cielo que repara nuestras fuerzas. Por Jesucristo, nuestro Señor.",communionAntiphon:"VENDRÁ EL DESEADO DE TODAS LAS NACIONES Y LLENARÁ DE GLORIA LA CASA DEL SEÑOR. (CFR. AG. 2,7)",postCommunion:"Señor y Padre nuestro, tú que nos has alimentado con el pan eucarístico, concédenos que cuando vuelva tu Hijo, nos encuentre brillando como lámparas resplandecientes. Te lo pedimos por Él, que vive y reina por los siglos de los siglos."}},{source:"mercaba",title:"18 de diciembre",aliases:["18 de diciembre","18 DE DICIEMBRE"],fields:{entranceAntiphon:"EL MESÍAS QUE JUAN ANUNCIÓ COMO CORDERO DE DIOS, VENDRÁ COMO NUESTRO REY.",collect:"Te pedimos, Dios nuestro, que el nacimiento de tu Hijo nos libre de la esclavitud del pecado y nos ayude a vivir como hombres nuevos. Por nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo, en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Te suplicamos, Padre, que nuestra ofrenda sacramental nos haga agradables a ti, para que podamos participar de la eternidad de tu Hijo hecho hombre en el tiempo. Él que vive y reina por los siglos de los siglos.",communionAntiphon:'LE PONDRÁN EL NOMBRE DE EMANUEL, QUE SIGNIFICA: "DIOS CON NOSOTROS". (CFR. MT. 1,23)',postCommunion:"Señor Dios, concédenos tu misericordia a quienes constituimos el templo del Espíritu, para que podamos prepararnos debidamente a celebrar la llegada de nuestro Salvador. Por el mismo Jesucristo, nuestro Señor."}},{source:"mercaba",title:"19 de diciembre",aliases:["19 de diciembre","19 DE DICIEMBRE"],fields:{entranceAntiphon:"EL QUE HA DE VENIR, VENDRÁ SIN TARDAR Y YA NO HABRÁ TEMOR EN NUESTRA TIERRA, PORQUE ÉL ES NUESTRO SALVADOR. (CFR. HEB. 10,37)",collect:"Dios y Padre nuestro, que a través de la maternidad de María quisiste revelar al mundo el esplendor de tu gloria, concédenos poder celebrar con fe íntegra y una generosa entrega el admirable misterio de la Encarnación de tu Hijo. Que vive y reina contigo en la unidad del Espíritu Santo y es Dios, por los siglos de los siglos.",offerings:"Mira con bondad, Señor Dios, estas ofrendas y consagra con tu poder lo que te presentamos humildemente en nombre de toda la humanidad. Por Jesucristo, nuestro Señor.",communionAntiphon:"NOS VISITARÁ EL SOL NACIENTE, PARA GUIAR NUESTROS PASOS POR EL CAMINO DE LA PAZ. (LC. 1,78-79)",postCommunion:"Te damos gracias, Padre, por los dones recibidos de ti y te pedimos que ellos despierten en nosotros el deseo de la salvación prometida, para poder celebrar el nacimiento del Salvador con un corazón renovado. Por Jesucristo, nuestro Señor."}},{source:"mercaba",title:"21 de diciembre",aliases:["21 de diciembre","21 DE DICIEMBRE"],fields:{entranceAntiphon:"VIENE EL SEÑOR, EL QUE DOMINA A LOS PUEBLOS, Y SE LLAMARÁ EMANUEL, PORQUE DIOS ESTÁ CON NOSOTROS. (CFR. IS. 7,14; 8,10)",collect:"Escucha, Padre de bondad, la plegaria de tu pueblo, y concede a quienes nos alegramos por la venida de tu Hijo, que podamos alcanzar la vida eterna cuando Él vuelva en la majestad de su gloria. Que vive y reina contigo, en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Acepta, Padre, los dones de tu Iglesia y transfórmalos con tu poder divino en sacramento de nuestra salvación. Por Jesucristo, nuestro Señor.",communionAntiphon:"FELIZ DE TI POR HABER CREÍDO QUE SE CUMPLIRÁ LO QUE TE FUE ANUNCIADO DE PARTE DEL SEÑOR. (LC. 1,45)",postCommunion:"Que la participación en estos divinos misterios proteja, Padre, continuamente a tu pueblo, para que entregado plenamente a tu servicio, obtenga con abundancia la salvación del alma y del cuerpo. Por Jesucristo, nuestro Señor."}},{source:"mercaba",title:"22 de diciembre",aliases:["22 de diciembre","22 DE DICIEMBRE"],fields:{entranceAntiphon:"¡PUERTAS, LEVANTEN SUS DINTELES! ¡ÁBRANSE, PUERTAS ETERNAS, PARA QUE ENTRE EL REY DE LA GLORIA! (SAL. 23,7)",collect:"Señor y Padre nuestro, que por la venida de tu Hijo quisiste redimir al hombre alejado de ti por el pecado, concede a quienes creemos en su Encarnación que podamos llegar a gozar un día de la compañía de nuestro Redentor. Que vive y reina contigo, en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Confiados en tu misericordia, Padre bueno, llegamos con nuestras ofrendas a tu sagrado altar; concédenos que los santos misterios que ahora celebramos nos purifiquen de nuestros pecados. Por Jesucristo, nuestro Señor.",communionAntiphon:"MI ALMA CANTA LA GRANDEZA DEL SEÑOR, PORQUE EL TODOPODEROSO HA HECHO EN MÍ GRANDES COSAS. (LC. 1,46.49)",postCommunion:"La comunión que hemos recibido nos fortalezca, Padre, para que con nuestros buenas obras podamos salir al encuentro del Salvador y merecer el premio de la felicidad eterna. Él que vive y reina por los siglos de los siglos."}},{source:"mercaba",title:"23 de diciembre",aliases:["23 de diciembre","23 DE DICIEMBRE"],fields:{entranceAntiphon:"NOS NACERÁ UN NIÑO Y SERÁ LLAMADO DIOS, FUERTE, Y ÉL SERÁ LA BENDICIÓN DE TODOS LOS PUEBLOS. (CFR. IS. 9,5; SAL. 71,17)",collect:"Dios todopoderoso y eterno, al acercarnos a las fiestas de la Navidad, te pedimos que tu Hijo, hecho carne en las entrañas de la Virgen María, nos haga partícipes de la abundancia de su misericordia. Por el mismo Señor Jesucristo, tu Hijo, que vive y reina contigo, en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Que este sacrificio de la perfecta alabanza restablezca, Señor, nuestra amistad contigo, y así podamos celebrar con un corazón purificado el nacimiento de nuestro Redentor. Que vive y reina por los siglos de los siglos.",communionAntiphon:"YO ESTOY JUNTO A LA PUERTA Y LLAMO: SI ALGUIEN OYE MI VOZ Y ME ABRE, ENTRARÉ EN SU CASA Y CENAREMOS JUNTOS. (APOC. 3,20)",postCommunion:"Concede tu paz, Padre misericordioso, a quienes has alimentado con el pan del cielo, para que permanezcamos siempre en vela y salgamos al encuentro de tu Hijo muy amado cuando Él vuelva a completar su obra salvadora. Te lo pedimos por el mismo Jesucristo, nuestro Señor."}},{source:"liturgiapapal",title:"I Semana del Tiempo Ordinario",aliases:["I Semana del Tiempo Ordinario","1 semana del tiempo ordinario","1ª semana del Tiempo Ordinario","ordinary time 1 sunday"],fields:{entranceAntiphon:"Vi sentado en el trono celestial a un hombre, a quien adora la multitud de los ángeles que cantan a una sola voz: «Este es aquel cuyo poder permanece eternamente».",collect:"Acompaña, Señor, con celestial piedad, los anhelos y súplicas de tu pueblo, para que conozca lo que debe poner por obra y lleve a cabo con firmeza lo que ha conocido. Por nuestro Señor Jesucristo.",offerings:"Te pedimos, Señor, que te sea agradable la ofrenda de tu pueblo por la cual recibimos la santificación y obtenemos lo que piadosamente pedimos. Por Jesucristo, nuestro Señor.",communionAntiphon:`Señor, en ti está la fuente de la vida, tu luz nos hace ver la luz.

O bien: Jn 10, 10
Yo he venido, dice el Señor, para que tengan vida, y la tengan en abundancia.`,postCommunion:"Renovados por tus sacramentos, te suplicamos, Dios todopoderoso, que te sirvamos dignamente con una vida que te sea agradable. Por Jesucristo, nuestro Señor."}},{source:"spain",title:"Epifanía del Señor",aliases:["Epifanía","Epifanía del Señor"],fields:{entranceAntiphon:"Mirad que llega el Señor que domina; en su mano está el reino y el poder y la fuerza.",collect:"Oh, Dios, que revelaste en este día tu Unigénito a los pueblos gentiles por medio de una estrella, concédenos con bondad, a los que ya te conocemos por la fe, poder contemplar la hermosura infinita de tu gloria. Por nuestro Señor Jesucristo.",offerings:"Mira propicio, Señor, los dones de tu Iglesia que no son oro, incienso y mirra, sino Jesucristo que, en estas ofrendas, se manifiesta, se inmola y se da en alimento. Él, que vive y reina por los siglos de los siglos.",communionAntiphon:"Hemos visto salir su estrella en Oriente y venimos con regalos a adorar al Señor.",postCommunion:"Que tu luz, Señor, nos prepare siempre y en todo lugar, para que contemplemos con mirada limpia y recibamos con amor sincero el misterio del que has querido hacernos partícipes. Por Jesucristo, nuestro Señor."}},{source:"spain",title:"Bautismo del Señor",aliases:["Bautismo del Señor"],fields:{entranceAntiphon:"Apenas se bautizó el Señor, se abrieron los cielos, y el Espíritu se posó sobre él como una paloma, y se oyó la voz del Padre que decía: «Este es mi Hijo amado, en quien me complazco».",collect:`Dios todopoderoso y eterno, que en el bautismo de Cristo, en el Jordán, al enviar sobre él tu Espíritu Santo, quisiste revelar solemnemente a tu Hijo amado, concede a tus hijos de adopción, renacidos del agua y del Espíritu Santo, perseverar siempre en tu benevolencia. Por nuestro Señor Jesucristo.

O bien:
Oh, Dios, cuyo Unigénito se manifestó en la realidad de nuestra carne, haz que merezcamos ser transformados interiormente por aquel que hemos conocido semejante a nosotros en su humanidad. Por nuestro Señor Jesucristo.`,offerings:"Recibe, Señor, los dones en este día en que manifestaste a tu Hijo predilecto, y haz que esta ofrenda de tu pueblo se convierta en el sacrificio de aquel que quiso borrar los pecados del mundo. Por Jesucristo, nuestro Señor.",communionAntiphon:"Este es de quien decía Juan: «Yo lo he visto y he dado testimonio de que este es el Hijo de Dios».",postCommunion:"Señor, alimentados con estos dones sagrados, imploramos de tu bondad, que, escuchando fielmente a tu Unigénito, de verdad nos llamemos y seamos hijos tuyos. Por Jesucristo, nuestro Señor."}},{source:"spain",title:"II Domingo del Tiempo Ordinario",aliases:["II Domingo del Tiempo Ordinario","2º domingo del Tiempo Ordinario","2 domingo del tiempo ordinario","ordinary time 2 sunday"],fields:{entranceAntiphon:"Que se postre ante ti, oh, Dios, la tierra entera; que toquen en tu honor; que toquen para tu nombre, oh Altísimo.",communionAntiphon:`Preparas una mesa ante mí y mi cáliz glorioso rebosa.

O bien: Cf. 1 Jn 4, 16
Nosotros hemos conocido y hemos creído en el amor que Dios nos tiene.`}},{source:"spain",title:"III Domingo del Tiempo Ordinario",aliases:["III Domingo del Tiempo Ordinario","3º domingo del Tiempo Ordinario","3 domingo del tiempo ordinario","domingo de la Palabra de Dios","ordinary time 3 sunday"],fields:{entranceAntiphon:"Cantad al Señor un cántico nuevo, cantad al Señor toda la tierra. Honor y majestad le preceden, fuerza y esplendor están en su templo.",communionAntiphon:`Contemplad al Señor y quedaréis radiantes, vuestro rostro no se avergonzará.

O bien: Cf. Jn 8, 12
Yo soy la luz del mundo, dice el Señor. El que me sigue no camina en las tinieblas, sino que tendrá la luz de la vida.`}},{source:"spain",title:"IV Domingo del Tiempo Ordinario",aliases:["IV Domingo del Tiempo Ordinario","4º domingo del Tiempo Ordinario","4 domingo del tiempo ordinario","ordinary time 4 sunday"],fields:{entranceAntiphon:"Sálvanos, Señor, Dios nuestro, reúnenos de entre los gentiles; daremos gracias a tu santo nombre, y alabarte será nuestra gloria.",communionAntiphon:`Haz brillar tu rostro sobre tu siervo, sálvame por tu misericordia, Señor, no quede yo defraudado tras haber acudido a ti.

O bien: Mt 5, 3-4
Bienaventurados los pobres en el espíritu, porque de ellos es el reino de los cielos. Bienaventurados los mansos, porque ellos heredarán la tierra.`}},{source:"spain",title:"Presentación del Señor",aliases:["Presentación del Señor","Presentación de Jesús en el Templo","La Presentación del Señor"],fields:{entranceAntiphon:"Oh, Dios, meditamos tu misericordia en medio de tu templo: como tu Nombre, oh, Dios, tu alabanza llega al confín de la tierra. Tu diestra está llena de justicia.",collect:"Dios todopoderoso y eterno, rogamos humildemente a tu majestad que, así como tu Hijo Unigénito ha sido presentado hoy en el templo en la realidad de nuestra carne, nos concedas, de igual modo, ser presentados ante ti con el alma limpia. Por nuestro Señor Jesucristo.",offerings:"Te pedimos, Señor, que te sean gratos los dones presentados por la Iglesia exultante de gozo, pues has querido que tu Hijo Unigénito se ofreciera como Cordero inocente por la salvación del mundo. Por Jesucristo, nuestro Señor.",communionAntiphon:"Mis ojos han visto a tu Salvador, a quien has presentado ante todos los pueblos.",postCommunion:"Por estos dones santos que hemos recibido, llénanos de tu gracia, Señor, tú que has colmado plenamente el anhelo expectante de Simeón y, así como él no vio la muerte sin haber merecido acoger antes a Cristo, concédenos alcanzar la vida eterna a quienes caminamos al encuentro del Señor. Por Jesucristo, nuestro Señor."}},{source:"spain",title:"V Domingo del Tiempo Ordinario",aliases:["V Domingo del Tiempo Ordinario","5º domingo del Tiempo Ordinario","5 domingo del tiempo ordinario","ordinary time 5 sunday"],fields:{entranceAntiphon:"Entrad, postrémonos por tierra, bendiciendo al Señor, creador nuestro. Porque él es nuestro Dios.",communionAntiphon:`Den gracias al Señor por su misericordia, por las maravillas que hace con los hombres. Calmó el ansia de los sedientos y a los hambrientos los colmó de bienes.

O bien: Mt 5, 5-6
Bienaventurados los que lloran, porque ellos serán consolados. Bienaventurados los que tienen hambre y sed de la justicia, porque ellos quedarán saciados.`}},{source:"spain",title:"Santos Cirilo, monje, y Metodio, obispo, patronos de Europa",aliases:["Santos Cirilo, monje, y Metodio, obispo, patronos de Europa","Santos Cirilo y Metodio","San Cirilo y San Metodio","Cirilo y Metodio"],fields:{entranceAntiphon:"Estos son los varones santos, amigos de Dios, insignes en la predicación de la verdad divina.",collect:"Oh, Dios, que iluminaste a los pueblos eslavos por medio de los santos hermanos Cirilo y Metodio, concédenos acoger en nuestros corazones las palabras de tu enseñanza, y haz de nosotros un pueblo concorde en la fe verdadera y en su recta confesión. Por nuestro Señor Jesucristo.",offerings:"Mira, Señor, los dones que presentamos a tu majestad en la conmemoración de los santos Cirilo y Metodio, y haz que se conviertan en signo de la humanidad nueva, reconciliada contigo en ferviente caridad. Por Jesucristo, nuestro Señor.",communionAntiphon:"Los discípulos se fueron a predicar el Evangelio, y el Señor cooperaba confirmando la palabra con las señales que los acompañaban.",postCommunion:"Oh, Dios, Padre de todos los pueblos, que nos haces partícipes de un mismo Pan y un mismo Espíritu, y herederos del convite eterno, concédenos con bondad, en la fiesta de los santos Cirilo y Metodio, que la multitud de tus hijos, perseverando en la misma fe, construya unánime el reino de la justicia y de la paz. Por Jesucristo, nuestro Señor."}},{source:"spain",title:"VI Domingo del Tiempo Ordinario",aliases:["VI Domingo del Tiempo Ordinario","6º domingo del Tiempo Ordinario","6 domingo del tiempo ordinario","ordinary time 6 sunday"],fields:{entranceAntiphon:"Sé la roca de mi refugio, Señor, un baluarte donde me salve, tú que eres mi roca y mi baluarte; por tu nombre dirígeme y guíame.",communionAntiphon:`Ellos comieron y se saciaron, el Señor les dio lo que habían pedido; no fueron defraudados.

O bien: Jn 3, 16
Tanto amó Dios al mundo, que entregó a su Hijo único, para que no perezca ninguno de los que creen en él, sino que tengan vida eterna.`}},{source:"spain",title:"San José, esposo de la Bienaventurada Virgen María",aliases:["José, Esposo de María","San José, esposo de la Bienaventurada Virgen María","San José, esposo de María","San José"],fields:{entranceAntiphon:"Este es el administrador fiel y prudente a quien el Señor puso al frente de su servidumbre.",collect:"Concédenos, Dios todopoderoso, que tu Iglesia conserve siempre y lleve a su plenitud los primeros misterios de la salvación humana que confiaste a la fiel custodia de san José. Por nuestro Señor Jesucristo.",offerings:"Te pedimos, Señor, que, así como san José se entregó con piadoso afecto a servir a tu Unigénito, nacido de la Virgen María, merezcamos, también nosotros, servir a tu altar con un corazón puro. Por Jesucristo, nuestro Señor.",communionAntiphon:"Siervo bueno y fiel: entra en el gozo de tu Señor.",postCommunion:"Defiende, Señor, con tu protección continua a tu familia, alegre por la solemnidad de san José, y, al saciarla con el alimento de este altar, conserva con bondad tus dones en ella. Por Jesucristo, nuestro Señor."}},{source:"spain",title:"V Domingo de Cuaresma",aliases:["V Domingo de Cuaresma","5º domingo de Cuaresma","5 domingo de cuaresma"],fields:{entranceAntiphon:"Hazme justicia, oh Dios, defiende mi causa, contra gente sin piedad; sálvame del hombre traidor y malvado, porque tú eres mi Dios y mi fortaleza.",collect:"Te pedimos, Señor Dios nuestro, que, con tu ayuda, avancemos animosamente hacia aquel mismo amor que movió a tu Hijo a entregarse a la muerte por la salvación del mundo. Por nuestro Señor Jesucristo.",offerings:"Escúchanos, Dios todopoderoso, y, por la acción de este sacrificio, purifica a tus siervos, a quienes has iluminado con las enseñanzas de la fe cristiana. Por Jesucristo, nuestro Señor.",communionAntiphon:`Cuando se lee el Evangelio de la resurrección de Lázaro: Cf. Jn 11, 26
El que está vivo y cree en mí no morirá para siempre, dice el Señor.

Cuando se lee el Evangelio de la mujer adúltera: Jn 8, 10-11
Mujer, ¿ninguno te ha condenado? Ninguno, Señor. Tampoco yo te condeno. En adelante no peques más.

Cuando se lee otro Evangelio: Jn 12, 24-25
En verdad, en verdad os digo: si el grano de trigo no cae en tierra y muere, queda infecundo; pero si muere, da mucho fruto.`,postCommunion:"Te pedimos, Dios todopoderoso, que nos cuentes siempre entre los miembros de Cristo, cuyo Cuerpo y Sangre hemos recibido. Él, que vive y reina por los siglos de los siglos.",prayerOverPeople:"Señor, bendice a tu pueblo que espera siempre el don de tu misericordia, y concédele, inspirado por ti, recibir lo que desea de tu generosidad. Por Jesucristo, nuestro Señor."}},{source:"spain",title:"Anunciación del Señor",aliases:["Anunciación","Anunciación del Señor","La Anunciación del Señor"],fields:{entranceAntiphon:"Cuando el Señor entró en el mundo dijo: Aquí estoy, oh Dios, para hacer tu voluntad.",collect:"Señor, tú has querido que la Palabra se encarnase en el seno de la Virgen María; concédenos, en tu bondad, que cuantos confesamos a nuestro Redentor, como Dios y como hombre verdadero, lleguemos a hacernos semejantes a él en su naturaleza divina. Por nuestro Señor Jesucristo.",offerings:"Dígnate, Señor, aceptar los dones de tu Iglesia; y, pues reconoce que ha tenido su origen en la encarnación de tu Unigénito, llénala del don de tu alegría al celebrar este sagrado misterio. Por Jesucristo, nuestro Señor.",communionAntiphon:"Mirad: la Virgen está encinta y dará a luz un hijo, y le pondrá por nombre Dios-con-nosotros.",postCommunion:"Confirma, Señor, en nosotros la verdadera fe, mediante los sacramentos que hemos recibido; para que cuantos confesamos al Hijo de la Virgen, como Dios y como hombre verdadero, podamos llegar a las alegrías del reino por el poder de su santa resurrección. Por Jesucristo, nuestro Señor."}},{source:"spain",title:"Domingo de Ramos en la Pasión del Señor",aliases:["Domingo de Ramos","Domingo de Ramos en la Pasión del Señor","Domingo de Ramos de la Pasión del Señor"],fields:{entranceAntiphon:`Seis días antes de la solemnidad de la Pascua, cuando Jesús iba a la ciudad de Jerusalén, salieron a su encuentro los niños: en las manos tomaron ramos y aclamaban gritando:
Hosanna en las alturas:
Bendito tú que viniste
con abundante misericordia.

Portones, alzad los dinteles,
que se alcen las puertas eternales:
va a entrar el Rey de la gloria.
¿Quién es ese Rey de la gloria?
El Señor, Dios del universo,
él es el Rey de la gloria.

Hosanna en las alturas:
Bendito tú que viniste
con abundante misericordia.`,collect:"Dios todopoderoso y eterno, que hiciste que nuestro Salvador se encarnase y soportara la cruz para que imitemos su ejemplo de humildad, concédenos, propicio, aprender las enseñanzas de la pasión y participar de la resurrección gloriosa. Por nuestro Señor Jesucristo.",offerings:"Señor, que por la pasión de tu Unigénito se extienda sobre nosotros tu misericordia y, aunque no la merecen nuestras obras, que con la ayuda de tu compasión podamos recibirla en este sacrificio único. Por Jesucristo, nuestro Señor.",communionAntiphon:"Padre mío, si este cáliz no puede pasar sin que yo lo beba, hágase tu voluntad.",postCommunion:"Saciados con los dones santos, te pedimos, Señor, que, así como nos has hecho esperar lo que creemos por la muerte de tu Hijo, podamos alcanzar, por su resurrección, la plena posesión de lo que anhelamos. Por Jesucristo, nuestro Señor.",prayerOverPeople:"Dirige tu mirada, Señor, sobre esta familia tuya por la que nuestro Señor Jesucristo no dudó en entregarse a los verdugos y padecer el tormento de la cruz. Por Jesucristo, nuestro Señor."}},{source:"spain",title:"Domingo de Pascua de la Resurrección del Señor",aliases:["Domingo de Pascua","Domingo de Pascua de la Resurrección del Señor"],fields:{entranceAntiphon:`He resucitado y aún estoy contigo, aleluya; me cubres con tu mano, aleluya; tu sabiduría es sublime, aleluya, aleluya.

O bien: Cf. Lc 24, 34; Ap 1, 6
Verdaderamente ha resucitado el Señor, aleluya. A él la gloria y el poder por toda la eternidad, aleluya, aleluya.`,collect:"Oh, Dios, que en este día, vencida la muerte, nos has abierto las puertas de la eternidad por medio de tu Unigénito, concede, a quienes celebramos la solemnidad de la resurrección del Señor, que, renovados por tu Espíritu, resucitemos a la luz de la vida. Por nuestro Señor Jesucristo.",offerings:"Rebosantes de gozo pascual, ofrecemos, Señor, este sacrificio en el que tan maravillosamente renace y se alimenta tu Iglesia. Por Jesucristo, nuestro Señor.",communionAntiphon:"Ha sido inmolada nuestra víctima pascual: Cristo. Aleluya. Así, pues, celebremos con los panes ázimos de la sinceridad y la verdad. Aleluya, aleluya.",postCommunion:"Protege, oh, Dios, a tu Iglesia con misericordia perpetua, para que, renovada por los sacramentos pascuales, llegue a la gloria de la resurrección. Por Jesucristo, nuestro Señor."}},{source:"spain",title:"Lunes de la Octava de Pascua",aliases:["Lunes día de la Octava de Pascua","Lunes de la Octava de Pascua"],fields:{entranceAntiphon:`El Señor hizo entrar a su pueblo en el país donde abunda la leche y la miel; que la ley del Señor esté siempre en tus labios. Aleluya.

O bien:
El Señor ha resucitado de entre los muertos, como lo había dicho; alegrémonos y regocijémonos todos, porque reina para siempre. Aleluya.`,collect:"Señor Dios, que por medio del bautismo haces crecer a tu Iglesia, dándole siempre nuevos hijos, concede a cuantos han renacido en la fuente bautismal vivir siempre de acuerdo con la fe que profesaron. Por nuestro Señor Jesucristo.",offerings:"Recibe, Señor, con bondad, las ofrendas de tu pueblo, para que, renovados por la fe y el bautismo, consigamos la eterna bienaventuranza. Por Jesucristo, nuestro Señor.",communionAntiphon:"Cristo, una vez resucitado de entre los muertos, ya no muere más; la muerte ya no tiene dominio sobre él. Aleluya.",postCommunion:"Te pedimos, Señor, que la gracia del misterio pascual llene totalmente nuestro espíritu, para que, quienes hemos entrado en el camino de la salvación, seamos dignos de alcanzar todos sus beneficios. Por Jesucristo, nuestro Señor."}},{source:"spain",title:"Martes de la Octava de Pascua",aliases:["Martes día de la Octava de Pascua","Martes de la Octava de Pascua"],fields:{entranceAntiphon:"Les dio a beber agua de sabiduría; si se apoyan en ella, no vacilarán; los ensalzará para siempre. Aleluya.",collect:"Oh, Dios, que nos entregaste los auxilios pascuales, continúa favoreciendo a tu pueblo con estos dones celestes, para que, habiendo alcanzado la libertad verdadera, pueda gozar en el cielo de la alegría que ya ha empezado a gustar en la tierra. Por nuestro Señor Jesucristo.",offerings:"Acoge, Señor, con bondad las ofrendas de tu familia, para que, bajo tu protección, no pierda los dones ya recibidos y alcance los eternos. Por Jesucristo, nuestro Señor.",communionAntiphon:"Si habéis resucitado con Cristo, buscad los bienes de allá arriba, donde Cristo está sentado a la derecha de Dios; aspirad a los bienes de arriba. Aleluya.",postCommunion:"Escúchanos, Dios todopoderoso, y, para merecer la felicidad eterna, prepara los corazones de tu familia a la que otorgaste la gracia incomparable del bautismo. Por Jesucristo, nuestro Señor."}},{source:"spain",title:"Miércoles de la Octava de Pascua",aliases:["Miércoles día de la Octava de Pascua","Miércoles de la Octava de Pascua"],fields:{entranceAntiphon:"Venid vosotros, benditos de mi Padre; heredad el reino preparado para vosotros desde la creación del mundo. Aleluya.",collect:"Oh, Dios, que todos los años nos alegras con la solemnidad de la resurrección del Señor, concédenos propicio llegar a la alegría eterna mediante las fiestas que celebramos en el tiempo. Por nuestro Señor Jesucristo.",offerings:"Acepta, Señor, las ofrendas de la redención humana y concédenos, complacido, la salud del alma y del cuerpo. Por Jesucristo, nuestro Señor.",communionAntiphon:"Los discípulos reconocieron al Señor Jesús al partir el pan. Aleluya.",postCommunion:"Librados de la vieja condición de pecado, te pedimos, Señor, que la devota participación en el sacramento de tu Hijo nos transforme en nuevas criaturas. Por Jesucristo, nuestro Señor."}},{source:"spain",title:"Jueves de la Octava de Pascua",aliases:["Jueves día de la Octava de Pascua","Jueves de la Octava de Pascua"],fields:{entranceAntiphon:"Celebraron a coro tu mano vencedora, Señor, porque la sabiduría abrió la boca de los mudos y soltó la lengua de los niños. Aleluya.",collect:"Oh, Dios, que has reunido pueblos diversos en la confesión de tu nombre, concede a los que han renacido en la fuente bautismal una misma fe en su espíritu y un mismo amor en sus obras. Por nuestro Señor Jesucristo.",offerings:"Recibe, Señor, en tu bondad las ofrendas que te presentamos con gratitud por los nuevos bautizados, y para apresurar la ayuda del cielo. Por Jesucristo, nuestro Señor.",communionAntiphon:"Pueblo adquirido por Dios, anunciad las proezas del que os llamó de las tinieblas a su luz maravillosa. Aleluya.",postCommunion:"Escucha, Señor, nuestras oraciones para que el santo intercambio de nuestra redención nos sostenga durante la vida presente y nos dé las alegrías eternas. Por Jesucristo, nuestro Señor."}},{source:"spain",title:"Viernes de la Octava de Pascua",aliases:["Viernes día de la Octava de Pascua","Viernes de la Octava de Pascua"],fields:{entranceAntiphon:"El Señor condujo a su pueblo seguro, mientras el mar cubría a sus enemigos. Aleluya.",collect:"Dios todopoderoso y eterno, que por el Misterio pascual has restablecido tu alianza con los hombres, concédenos imitar en la vida lo que celebramos en la fe. Por nuestro Señor Jesucristo.",offerings:"Realiza, Señor, en nosotros lo que significa el intercambio de esta ofrenda pascual, para que pasemos del apego a las cosas de la tierra, al deseo de los bienes del cielo. Por Jesucristo, nuestro Señor.",communionAntiphon:"Jesús dijo a sus discípulos: «Vamos, almorzad». Y tomó el pan y se lo dio. Aleluya.",postCommunion:"Guarda, Señor, con tu amor constante a los que has salvado, para que los redimidos por la pasión de tu Hijo se alegren con su resurrección. Él, que vive y reina por los siglos de los siglos."}},{source:"spain",title:"Sábado de la Octava de Pascua",aliases:["Sábado día de la Octava de Pascua","Sábado de la Octava de Pascua"],fields:{entranceAntiphon:"El Señor sacó a su pueblo con alegría, a sus escogidos con gritos de triunfo. Aleluya.",collect:"Oh, Dios, que no cesas de aumentar con la abundancia de tu gracia el número de los pueblos que creen en ti, mira con amor a tus elegidos, para que los renacidos en el bautismo se revistan de la inmortalidad dichosa. Por nuestro Señor Jesucristo.",offerings:"Concédenos, Señor, alegrarnos siempre por estos misterios pascuales, y que la actualización continua de tu obra redentora sea para nosotros fuente de gozo incesante. Por Jesucristo, nuestro Señor.",communionAntiphon:"Cuantos habéis sido bautizados en Cristo os habéis revestido de Cristo. Aleluya.",postCommunion:"Mira, Señor, con bondad, a tu pueblo y, ya que has querido renovarlo con estos sacramentos de vida eterna, concédele llegar a la incorruptible resurrección de la carne que habrá de ser glorificada. Por Jesucristo, nuestro Señor."}},{source:"spain",title:"II Domingo de Pascua o de la Divina Misericordia",aliases:["II Domingo de Pascua","2º domingo de Pascua","Domingo de la Divina Misericordia","2º domingo de Pascua o Domingo de la Divina Misericordia"],fields:{entranceAntiphon:`Como niños recién nacidos, ansiad la leche espiritual, no adulterada, para que con ella vayáis progresando en la salvación. Aleluya.

O bien: 4 Esd 2, 36-37
Alegraos en vuestra gloria, dando gracias a Dios, que os ha llamado al reino celestial. Aleluya.`,collect:"Dios de misericordia infinita, que reanimas, con el retorno anual de las fiestas de Pascua, la fe del pueblo a ti consagrado, acrecienta en nosotros los dones de tu gracia, para que todos comprendan mejor qué bautismo nos ha purificado, qué Espíritu nos ha hecho renacer y qué sangre nos ha redimido. Por nuestro Señor Jesucristo.",offerings:"Recibe, Señor, las ofrendas de tu pueblo para que, renovados por la confesión de tu nombre y por el bautismo, consigamos la eterna bienaventuranza. Por Jesucristo, nuestro Señor.",communionAntiphon:"Trae tu mano y métela en el agujero de los clavos: y no seas incrédulo, sino creyente. Aleluya.",postCommunion:"Concédenos, Dios todopoderoso, que el sacramento pascual recibido permanezca siempre en nuestros corazones. Por Jesucristo, nuestro Señor."}},{source:"spain",title:"III Domingo de Pascua",aliases:["III Domingo de Pascua","3º domingo de Pascua"],fields:{entranceAntiphon:"Aclamad al Señor, tierra entera; tocad en honor de su nombre, cantad himnos a su gloria. Aleluya.",collect:"Que tu pueblo, Señor, exulte siempre al verse renovado y rejuvenecido en el espíritu, para que todo el que se alegra ahora de haber recobrado la gloria de la adopción filial, ansíe el día de la resurrección con la esperanza cierta de la felicidad eterna. Por nuestro Señor Jesucristo.",offerings:"Recibe, Señor, las ofrendas de tu Iglesia exultante, y a quien diste motivo de tanto gozo concédele disfrutar de la alegría eterna. Por Jesucristo, nuestro Señor.",communionAntiphon:`Año A: Cf. Lc 24, 35
Los discípulos reconocieron al Señor Jesús al partir el pan. Aleluya.

Año B: Cf. Lc 24, 46-47
Convenía que el Mesías padeciera, resucitara de entre los muertos al tercer día y, en su nombre, se proclamara la conversión para el perdón de los pecados a todos los pueblos. Aleluya.

Año C: Cf. Jn 21, 12-13
Jesús dijo a sus discípulos: «Vamos, almorzad». Y tomó el pan y se lo dio. Aleluya.`,postCommunion:"Mira, Señor, con bondad a tu pueblo y, ya que has querido renovarlo con estos sacramentos de vida eterna, concédele llegar a la incorruptible resurrección de la carne que habrá de ser glorificada. Por Jesucristo, nuestro Señor."}},{source:"spain",title:"IV Domingo de Pascua",aliases:["IV Domingo de Pascua","4º domingo de Pascua"],fields:{entranceAntiphon:"La misericordia del Señor llena la tierra, la palabra del Señor hizo el cielo. Aleluya.",collect:"Dios todopoderoso y eterno, condúcenos a la asamblea gozosa del cielo, para que la debilidad del rebaño llegue hasta donde le ha precedido la fortaleza del Pastor. Él, que vive y reina contigo.",offerings:"Concédenos, Señor, alegrarnos siempre por estos misterios pascuales y que la actualización continua de tu obra redentora sea para nosotros fuente de gozo incesante. Por Jesucristo, nuestro Señor.",communionAntiphon:"Ha resucitado el Buen Pastor, que dio la vida por sus ovejas y se dignó morir por su rebaño. Aleluya.",postCommunion:"Pastor bueno, vela compasivo sobre tu rebaño y conduce a los pastos eternos a las ovejas que has redimido con la sangre preciosa de tu Hijo. Él, que vive y reina por los siglos de los siglos."}},{source:"spain",title:"San Marcos, evangelista",aliases:["San Marcos, evangelista","San Marcos"],fields:{entranceAntiphon:"Id al mundo entero y proclamad el Evangelio a toda la creación. Aleluya.",collect:"Señor, Dios nuestro, que enalteciste a tu evangelista san Marcos con el ministerio de la predicación evangélica, concédenos aprovechar de tal modo sus enseñanzas que sigamos fielmente las huellas de Cristo. Él, que vive y reina contigo.",offerings:"Te ofrecemos, Señor, este sacrificio de alabanza, celebrando la gloria de tu evangelista san Marcos, y te pedimos, humildemente, que tu Iglesia se mantenga siempre fiel a la misión de anunciar el Evangelio. Por Jesucristo, nuestro Señor.",communionAntiphon:"Sabed que yo estoy con vosotros todos los días, hasta el fin del mundo, dice el Señor. Aleluya.",postCommunion:"Dios todopoderoso, que este sacramento nos santifique y nos otorgue la gracia de creer con firmeza el Evangelio que san Marcos nos ha transmitido. Por Jesucristo, nuestro Señor."}},{source:"spain",title:"Santa Catalina de Siena, virgen y doctora, patrona de Europa",aliases:["Santa Catalina de Siena","Santa Catalina de Siena, virgen, doctora de la Iglesia y Patrona Secundaria de Europa","Catalina de Siena"],fields:{entranceAntiphon:"Esta es una virgen sabia y una del número de las prudentes, que salió a recibir a Cristo con la lámpara encendida. Aleluya.",collect:"Oh, Dios, que inflamaste de amor divino a santa Catalina de Siena en la contemplación de la pasión del Señor y en el servicio a tu Iglesia, concede a tu pueblo, por su intercesión, que, unido al misterio de Cristo, se alegre siempre por la manifestación de su gloria. Por nuestro Señor Jesucristo.",offerings:"Recibe, Señor, el sacrificio de salvación que te ofrecemos en la conmemoración de santa Catalina de Siena, y haz que instruidos con sus enseñanzas podamos darte gracias a ti, Dios verdadero, con fervor creciente. Por Jesucristo, nuestro Señor.",communionAntiphon:"Si vivimos en la luz, lo mismo que Dios está en la luz, estamos en comunión unos con otros, y la sangre de su Hijo limpia de todo pecado. Aleluya.",postCommunion:"Señor, la mesa del cielo en la que hemos sido alimentados, y que sustentó a santa Catalina de Siena en su vida temporal, nos obtenga la vida eterna. Por Jesucristo, nuestro Señor."}},{source:"spain",title:"V Domingo de Pascua",aliases:["V Domingo de Pascua","5º domingo de Pascua"],fields:{entranceAntiphon:"Cantad al Señor un cántico nuevo porque ha hecho maravillas; reveló a las naciones su salvación. Aleluya.",collect:"Dios todopoderoso y eterno, lleva a su pleno cumplimiento en nosotros el Misterio pascual, para que, quienes, por tu bondad, han sido renovados en el santo bautismo, den frutos abundantes con tu ayuda y protección y lleguen a los gozos de la vida eterna. Por nuestro Señor Jesucristo.",offerings:"Oh, Dios, que nos haces partícipes de tu única y suprema divinidad por el admirable intercambio de este sacrificio, concédenos alcanzar en una vida santa la realidad que hemos conocido en ti. Por Jesucristo, nuestro Señor.",communionAntiphon:"Yo soy la verdadera vid, y vosotros los sarmientos, dice el Señor; el que permanece en mí y yo en él, ese da fruto abundante. Aleluya.",postCommunion:"Asiste, Señor, a tu pueblo y haz que pasemos del antiguo pecado a la vida nueva los que hemos sido alimentados con los sacramentos del cielo. Por Jesucristo, nuestro Señor."}},{source:"spain",title:"VI Domingo de Pascua",aliases:["VI Domingo de Pascua","6º domingo de Pascua"],fields:{entranceAntiphon:"Anunciadlo con gritos de júbilo, publicadlo y proclamadlo hasta el confín de la tierra. Decid: «El Señor ha rescatado a su pueblo». Aleluya.",collect:"Dios todopoderoso, concédenos continuar celebrando con fervor sincero estos días de alegría en honor del Señor resucitado, para que manifestemos siempre en las obras lo que repasamos en el recuerdo. Por nuestro Señor Jesucristo.",offerings:"Suban hasta ti, Señor, nuestras súplicas con la ofrenda del sacrificio, para que, purificados por tu bondad, nos preparemos para el sacramento de tu inmenso amor. Por Jesucristo, nuestro Señor.",communionAntiphon:"Si me amáis, guardaréis mis mandamientos, dice el Señor. Y yo le pediré al Padre que os dé otro Paráclito, que esté siempre con vosotros. Aleluya.",postCommunion:"Dios todopoderoso y eterno, que en la resurrección de Jesucristo nos has renovado para la vida eterna, multiplica en nosotros los frutos del Misterio pascual e infunde en nuestros corazones la fortaleza del alimento de salvación. Por Jesucristo, nuestro Señor."}},{source:"spain",title:"Ascensión del Señor",aliases:["Ascensión del Señor","La Ascensión del Señor"],fields:{entranceAntiphon:"Galileos, ¿qué hacéis ahí mirando al cielo? Volverá como lo habéis visto marcharse al cielo. Aleluya.",collect:`Dios todopoderoso, concédenos exultar santamente de gozo y alegrarnos con religiosa acción de gracias, porque la ascensión de Jesucristo, tu Hijo, es ya nuestra victoria, y adonde ya se ha adelantado gloriosamente nuestra Cabeza, esperamos llegar también los miembros de su cuerpo. Por nuestro Señor Jesucristo.

O bien:
Dios todopoderoso, concédenos habitar espiritualmente en las moradas celestiales a cuantos creemos que tu Unigénito y Redentor nuestro ascendió hoy a la gloria. Él, que vive y reina contigo.`,offerings:"Te presentamos ahora, Señor, el sacrificio para celebrar la admirable ascensión de tu Hijo; concédenos, por este sagrado intercambio, elevarnos hasta las realidades del cielo. Por Jesucristo, nuestro Señor.",communionAntiphon:"Sabed que yo estoy con vosotros todos los días, hasta el final de los tiempos. Aleluya.",postCommunion:"Dios todopoderoso y eterno, que, mientras vivimos aún en la tierra, nos concedes gustar los divinos misterios, te rogamos que el afecto de nuestra piedad cristiana se dirija allí donde nuestra condición humana está contigo. Por Jesucristo, nuestro Señor."}},{source:"spain",title:"VII Domingo de Pascua",aliases:["VII Domingo de Pascua","7º domingo de Pascua"],fields:{entranceAntiphon:"Escúchame, Señor, que te llamo. Oigo en mi corazón: Buscad mi rostro. Tu rostro buscaré, Señor; no me escondas tu rostro. Aleluya.",collect:"Atiende, Señor, a nuestras plegarias y, ya que confesamos que Cristo, Salvador de los hombres, vive junto a ti en la majestad de tu gloria, haz que le sintamos presente también entre nosotros hasta el fin de los tiempos, como él mismo prometió. Por nuestro Señor Jesucristo.",offerings:"Acepta las súplicas de tus fieles, Señor, juntamente con estas ofrendas, para que lleguemos a la gloria del cielo mediante esta piadosa celebración. Por Jesucristo, nuestro Señor.",communionAntiphon:"Padre, ruego que sean uno, como nosotros somos uno. Aleluya.",postCommunion:"Escúchanos, Dios, salvador nuestro, para que confiemos en que, por este sacramento, se realizará, en todo el cuerpo de la Iglesia, lo anticipado ya en su Cabeza. Por Jesucristo, nuestro Señor."}},{source:"spain",title:"Pentecostés",aliases:["Pentecostés","Domingo de Pentecostés"],fields:{entranceAntiphon:`El Espíritu del Señor llenó la tierra y todo lo abarca, y conoce cada sonido. Aleluya.

O bien: Cf. Rom 5, 5; 8, 11
El amor de Dios ha sido derramado en nuestros corazones por el Espíritu Santo que habita en nosotros. Aleluya.`,collect:"Oh, Dios, que por el misterio de esta fiesta santificas a toda tu Iglesia en medio de los pueblos y de las naciones, derrama los dones de tu Espíritu sobre todos los confines de la tierra y realiza ahora también, en el corazón de tus fieles, aquellas maravillas que te dignaste hacer en los comienzos de la predicación evangélica. Por nuestro Señor Jesucristo.",offerings:"Te pedimos, Señor, que, según la promesa de tu Hijo, el Espíritu Santo nos haga comprender más profundamente la realidad misteriosa de este sacrificio y nos lleve al conocimiento pleno de toda la verdad revelada. Por Jesucristo, nuestro Señor.",communionAntiphon:"Se llenaron todos de Espíritu Santo y hablaron de las grandezas de Dios, aleluya.",postCommunion:"Oh, Dios, que has comunicado a tu Iglesia los bienes del cielo, conserva la gracia que le has dado, para que el don infuso del Espíritu Santo sea siempre nuestra fuerza, y el alimento espiritual acreciente su fruto para la redención eterna. Por Jesucristo, nuestro Señor."}},{source:"spain",title:"Nuestro Señor Jesucristo, Sumo y Eterno Sacerdote",aliases:["Jesucristo, Sumo y Eterno Sacerdote","Nuestro Señor Jesucristo, Sumo y Eterno Sacerdote","Sumo y Eterno Sacerdote"],fields:{entranceAntiphon:"Cristo, mediador de una nueva alianza, como permanece para siempre, tiene el sacerdocio que no pasa.",collect:"Oh, Dios, que para gloria tuya y salvación del género humano constituiste a tu Hijo único sumo y eterno Sacerdote, concede, por la acción del Espíritu Santo, a quienes él eligió para ministros y dispensadores de sus misterios la gracia de ser fieles en el cumplimiento del ministerio recibido. Por nuestro Señor Jesucristo.",offerings:"Jesucristo, nuestro Mediador, te haga aceptables estos dones, Señor, y nos presente juntamente con él como ofrenda agradable a tus ojos. Por Jesucristo nuestro Señor.",communionAntiphon:"Sabed que yo estoy con vosotros todos los días hasta el final del mundo, dice el Señor.",postCommunion:"La eucaristía que hemos ofrecido y recibido, nos dé la vida, Señor, para que, unidos a ti en caridad perpetua, demos frutos que siempre permanezcan. Por Jesucristo nuestro Señor."}},{source:"spain",title:"Santísima Trinidad",aliases:["Domingo de la Santísima Trinidad","Santísima Trinidad","La Santísima Trinidad"],fields:{entranceAntiphon:"Bendito sea Dios Padre y el Hijo unigénito de Dios y el Espíritu Santo, porque ha tenido misericordia de nosotros.",collect:"Dios Padre, que, al enviar al mundo la Palabra de la verdad y el Espíritu de la santificación, revelaste a los hombres tu admirable misterio, concédenos, al profesar la fe verdadera, reconocer la gloria de la eterna Trinidad y adorar la Unidad en su poder y grandeza. Por nuestro Señor Jesucristo.",offerings:"Por la invocación de tu nombre, santifica, Señor y Dios nuestro, estos dones de nuestra docilidad y transfórmanos, por ellos, en ofrenda permanente. Por Jesucristo, nuestro Señor.",communionAntiphon:"Como sois hijos, Dios envió a vuestros corazones el Espíritu de su Hijo, que clama: «Abba, Padre».",postCommunion:"Señor y Dios nuestro, que la recepción de este sacramento y la profesión de fe en la santa y eterna Trinidad y en su Unidad indivisible, nos aprovechen para la salvación del alma y del cuerpo. Por Jesucristo, nuestro Señor."}},{source:"spain",title:"Conversión de San Pablo, apóstol",aliases:["Conversión de San Pablo, apóstol","Conversión de san Pablo","San Pablo, apóstol"],fields:{entranceAntiphon:"Sé de quién me he fiado y estoy firmemente persuadido de que el juez justo tiene poder para velar hasta aquel día por el depósito que se me confió.",collect:"Oh, Dios, que has instruido al mundo entero con la predicación de san Pablo, apóstol, concede a cuantos celebramos hoy su conversión, avanzar hacia ti, siguiendo su ejemplo, y ser en el mundo testigos de tu verdad. Por nuestro Señor Jesucristo.",offerings:"Al celebrar estos divinos misterios, te pedimos, Señor, que el Espíritu nos ilumine con aquella luz de la fe que alumbró al apóstol san Pablo para propagar siempre tu gloria. Por Jesucristo, nuestro Señor.",communionAntiphon:"Vivo de la fe en el Hijo de Dios, que me amó y se entregó por mí.",postCommunion:"Señor Dios nuestro, que los sacramentos recibidos acrecienten en nosotros aquel ardor de la caridad que abrasó al apóstol san Pablo y le impulsó al cuidado de todas las Iglesias. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"Santos Timoteo y Tito, obispos",aliases:["Santos Timoteo y Tito, obispos","San Timoteo y San Tito, obispos","Timoteo y Tito","San Timothy de Ephesus y Titus de Crete, obispos","Timothy de Ephesus y Titus de Crete","Timothy and Titus","Timothy and Titus, bishops"],fields:{collect:"Oh Dios, que hiciste brillar con virtudes apostólicas a los santos Timoteo y Tito; concédenos por su intercesión que, viviendo en justicia y santidad, seamos testigos de la presencia del Reino entre nosotros. Por nuestro Señor Jesucristo.",offerings:"Acepta, Señor, con bondad, nuestras ofrendas y, por intercesión de los santos Timoteo y Tito, que hoy conmemoramos, consérvanos unidos en tu amor para que podamos ofrecerte dignamente este sacrificio de alabanza. Por Jesucristo, nuestro Señor.",postCommunion:"Dios nuestro, fuente de consolación y de paz, que nos has concedido celebrar la Eucaristía en la fiesta de tus santos Timoteo y Tito, haz que el Cuerpo y la Sangre de tu Hijo, que hemos recibido en este sacramento, sean prendas de nuestra salvación eterna. Por Jesucristo, nuestro Señor."}},{source:"textosliturgia",title:"Santa Inés, virgen y mártir",aliases:["Santa Inés, virgen y mártir","Santa Inés de Roma, virgen","Inés de Roma","Agnes de Roma","Agnes","Agnes, virgin","Agnes, virgin and martyr"],fields:{collect:"Dios todopoderoso y eterno, que eliges a los débiles para confundir a los fuertes de este mundo; concédenos a cuantos celebramos el triunfo de tu mártir santa Inés imitar la firmeza de su fe. Por nuestro Señor Jesucristo."}},{source:"textosliturgia",title:"San Francisco de Sales, obispo",aliases:["San Francisco de Sales, obispo","San Francisco de Sales, obispo y doctor de la Iglesia","San Francisco De Sales, obispo","Francisco de Sales","Francis de Sales","Francis de Sales, bishop","Francis de Sales, bishop and doctor"],fields:{collect:"Oh Dios, tú has querido que el santo obispo Francisco de Sales se hiciera todo para todos por la salvación de las almas, concédenos, en tu bondad, a ejemplo suyo, manifestar siempre la dulzura de tu amor en el servicio a los hermanos. Por nuestro Señor Jesucristo.",offerings:"Por este sacrificio de salvación que te ofrecemos, Señor, enciende nuestro corazón en el fuego del Espíritu Santo, con el que inflamaste admirablemente el alma llena de ternura de san Francisco de Sales. Por Jesucristo, nuestro Señor.",postCommunion:"Dios todopoderoso, por estos sacramentos que hemos recibido, concédenos que, imitando en la tierra el amor y mansedumbre de san Francisco de Sales, alcancemos también la gloria del cielo. Por Jesucristo, nuestro Señor."}},{source:"textosliturgia",title:"San Juan Bosco, presbítero",aliases:["San Juan Bosco, presbítero","San Juan Bosco","Juan Bosco","John Bosco","John Bosco, priest"],fields:{collect:"Oh Dios, que has suscitado en san Juan Bosco, presbítero, un padre y un maestro para los jóvenes, concédenos que, encendidos en su mismo fuego de caridad, podamos ganar almas para ti y solo a ti servirte. Por nuestro Señor Jesucristo."}},{source:"textosliturgia",title:"Santa Águeda, virgen y mártir",aliases:["Santa Águeda, virgen y mártir","Santa Águeda de Sicilia, virgen","Águeda de Sicilia","Agatha de Sicilia"],fields:{collect:"Te rogamos, Señor, que la virgen santa Águeda nos alcance tu perdón, pues ella fue agradable a tus ojos por la fortaleza que mostró en su martirio y por el mérito de su castidad. Por nuestro Señor Jesucristo."}},{source:"textosliturgia",title:"Santos Pablo Miki y compañeros, mártires",aliases:["Santos Pablo Miki y compañeros, mártires","San Pablo Miki y, compañeros mártires","Pablo Miki y compañeros"],fields:{collect:"Oh Dios, fortaleza de todos los santos, que has llamado a Pablo Miki y a sus compañeros a la vida eterna por medio de la cruz; concédenos, por su intercesión, mantener con vigor, hasta la muerte, la fe que profesamos. Por nuestro Señor Jesucristo."}},{source:"spain",title:"VII Domingo del Tiempo Ordinario",aliases:["VII Domingo del Tiempo Ordinario","7º domingo del Tiempo Ordinario","7 domingo del tiempo ordinario","ordinary time 7 sunday"],fields:{entranceAntiphon:"Señor, yo confío en tu misericordia: mi alma gozará con tu salvación, y cantaré al Señor por el bien que me ha hecho.",communionAntiphon:`Proclamo todas tus maravillas, me alegro y exulto contigo, y toco en honor de tu nombre, oh Altísimo.

O bien: Jn 11, 27
Señor, yo creo que tú eres el Cristo, el Hijo de Dios, el que tenía que venir al mundo.`}},{source:"spain",title:"VIII Domingo del Tiempo Ordinario",aliases:["VIII Domingo del Tiempo Ordinario","8º domingo del Tiempo Ordinario","8 domingo del tiempo ordinario","ordinary time 8 sunday"],fields:{entranceAntiphon:"El Señor fue mi apoyo: me sacó a un lugar espacioso, me libró porque me amaba.",communionAntiphon:`Cantaré al Señor por el bien que me ha hecho, cantaré al nombre del Dios Altísimo.

O bien: Mt 28, 20
Sabed que yo estoy con vosotros todos los días, hasta el final de los tiempos, dice el Señor.`}},{source:"spain",title:"IX Domingo del Tiempo Ordinario",aliases:["IX Domingo del Tiempo Ordinario","9º domingo del Tiempo Ordinario","9 domingo del tiempo ordinario","ordinary time 9 sunday"],fields:{entranceAntiphon:"Mírame, oh, Dios, y ten piedad de mí, que estoy solo y afligido. Mira mis trabajos y mis penas, y perdona todos mis pecados, Dios mío.",communionAntiphon:`Yo te invoco porque tú me respondes, Dios mío; inclina el oído y escucha mis palabras.

O bien: Cf. Mc 11, 23. 24
En verdad os digo: todo cuanto pidáis en la oración, creed que os lo han concedido y lo obtendréis, dice el Señor.`}},{source:"spain",title:"Cátedra de San Pedro, apóstol",aliases:["Cátedra de San Pedro, apóstol","Cátedra del apóstol San Pedro","Cátedra de San Pedro"],fields:{entranceAntiphon:"El Señor dice a Simón Pedro: Yo he pedido por ti, para que tu fe no se apague. Y tú, cuando te recobres, da firmeza a tus hermanos.",collect:"Dios todopoderoso, no permitas que seamos perturbados por ningún peligro, tú que nos has afianzado sobre la roca de la fe apostólica. Por nuestro Señor Jesucristo.",offerings:"Acepta, Señor, las oraciones y ofrendas de tu Iglesia, para que bajo el pastoreo de san Pedro, de quien recibe la integridad de su fe, pueda llegar a la vida eterna. Por Jesucristo nuestro Señor.",communionAntiphon:"Pedro dijo a Jesús: tú eres el Mesías, el Hijo de Dios vivo. Jesús le respondió: tú eres Pedro, y sobre esta piedra edificaré mi Iglesia.",postCommunion:"Señor, Dios nuestro, que al celebrar la festividad de la Cátedra de san Pedro nos has alimentado con el Cuerpo y la Sangre de Cristo; haz que este misterio de redención sea para nosotros sacramento de unidad y de paz. Por Jesucristo nuestro Señor."}},{source:"spain",title:"San Isidoro, obispo y doctor de la Iglesia",aliases:["San Isidoro, obispo y doctor de la Iglesia","San Isidoro"],fields:{entranceAntiphon:"Radiante e inmarcesible es la sabiduría, la ven con facilidad los que la aman y quienes la buscan la encuentran. Aleluya.",collect:"Señor, Dios todopoderoso, tú elegiste a San Isidoro, obispo y doctor de la Iglesia, para que fuese testimonio y fuente del humano saber, concédenos, por su intercesión, una búsqueda atenta y una aceptación generosa de tu eterna verdad. Por nuestro Señor Jesucristo.",offerings:"Que estas ofrendas, Señor, fruto del trabajo del hombre, atraigan tus bendiciones y nos hagan dóciles al Espíritu de la verdad. Por Jesucristo nuestro Señor.",communionAntiphon:"Sin engaño aprendí la sabiduría, sin envidia la comparto y no escondo sus riquezas; porque es un tesoro inagotable para los hombres: los que lo adquieren se ganan la amistad de Dios, pues los dones de la instrucción los recomienda. Aleluya.",postCommunion:"A los que has alimentado con Cristo, pan de vida, ilumínalos, Señor, con las enseñanzas de Cristo, Maestro, para que en la fiesta de san Isidoro aprendan tu verdad y la hagan vida propia en la práctica del amor. Por Jesucristo nuestro Señor."}},{source:"spain",title:"San Matías, apóstol",aliases:["San Matías, apóstol","San Matías"],fields:{entranceAntiphon:"No sois vosotros los que me habéis elegido, dice el Señor; soy yo quien os he elegido para que vayáis y deis fruto, y vuestro fruto permanezca. Aleluya.",collect:"Oh, Dios, que agregaste a san Matías al colegio de los apóstoles, concede, por su ayuda, a quienes nos alegramos en la suerte de tu predilección, ser contados entre los elegidos. Por nuestro Señor Jesucristo.",offerings:"Recibe, Señor, las ofrendas que tu Iglesia te presenta con devoción en la fiesta de san Matías, y, por ellas, confírmanos con el poder de tu gracia. Por Jesucristo, nuestro Señor.",communionAntiphon:"Este es mi mandamiento: que os améis unos a otros como yo os he amado, dice el Señor. Aleluya.",postCommunion:"No dejes, Señor, de colmar a tu familia con los dones divinos, y, por intercesión de san Matías, dígnate recibirnos en la luz para tomar parte de la suerte de los santos. Por Jesucristo, nuestro Señor."}},{source:"spain",title:"San Lucas, evangelista",aliases:["San Lucas, evangelista","San Lucas"],fields:{entranceAntiphon:"Qué hermosos son sobre los montes los pies del mensajero que proclama la paz, que anuncia la buena nueva, que pregona la justicia.",collect:"Señor Dios, que elegiste a san Lucas para que nos revelara con la predicación y los escritos el misterio de tu amor a los pobres, concede, a cuantos se glorían en tu nombre, perseverar viviendo con un solo corazón y una sola alma y que todos los pueblos merezcan ver tu salvación. Por nuestro Señor Jesucristo.",offerings:"Por estos dones del cielo, concédenos, Señor, servirte con libertad de espíritu, para que la ofrenda que te presentamos en la fiesta de san Lucas ponga remedio a nuestros males y nos alcance la gloria. Por Jesucristo, nuestro Señor.",communionAntiphon:"El Señor mandó a los discípulos que anunciaran a todos los pueblos: El reino de Dios ha llegado a vosotros.",postCommunion:"Te pedimos, Dios todopoderoso, que nos santifique el don recibido de tu santo altar y nos fortalezca en la fe del Evangelio que san Lucas predicó. Por Jesucristo, nuestro Señor."}},{source:"spain",title:"San Juan, apóstol y evangelista",aliases:["San Juan, apóstol y evangelista","San Juan Evangelista","San Juan, apóstol"],fields:{entranceAntiphon:`Este es Juan, que durante la cena reclinó su cabeza en el pecho del Señor: apóstol bienaventurado, a quien fueron revelados los secretos divinos y difundió la palabra de vida por toda la tierra.

O bien: Cf. Eclo 15, 5
En medio de la asamblea le abrirá la boca, y el Señor lo llenará del espíritu de sabiduría y de inteligencia, lo revestirá con un vestido de gloria.`,collect:"Oh, Dios, que por medio del apóstol san Juan nos has revelado las misteriosas profundidades de tu Verbo, concédenos comprender con inteligencia y amor lo que él ha hecho resonar en nuestros oídos admirablemente. Por nuestro Señor Jesucristo.",offerings:"Santifica, Señor, los dones que hemos presentado para que, al participar de esta cena, nos abramos al misterio del Verbo eterno que revelaste a tu apóstol san Juan en la misma fuente. Por Jesucristo, nuestro Señor.",communionAntiphon:"El Verbo se hizo carne y habitó entre nosotros; de su plenitud todos hemos recibido.",postCommunion:"Dios todopoderoso, te pedimos, por el misterio que hemos celebrado, que el Verbo hecho carne, a quien anunció el apóstol san Juan, habite siempre entre nosotros. Por Jesucristo, nuestro Señor."}},{source:"spain",title:"I Domingo de Cuaresma",aliases:["I Domingo de Cuaresma"],fields:{entranceAntiphon:"Me invocará y lo escucharé; lo defenderé, lo glorificaré; lo saciaré de largos días.",collect:`DIOS todopoderoso, por medio de las prácticas anuales del sacramento cuaresmal concédenos progresar en
el conocimiento del misterio de Cristo, y conseguir sus frutos con una conducta digna. Por nuestro Señor
Jesucristo.`,offerings:`HAZ Señor, que nuestra vida responda a estos dones que van a ser ofrecidos y en los que celebramos el
comienzo de un mismo sacramento admirable.
Por Jesucristo, nuestro Señor.`,communionAntiphon:`El Señor se sienta como Rey eterno, el Señor bendice a su pueblo con la paz.

O bien: Cf. Sal 90, 4
El Señor te cubrirá con sus plumas, bajo sus alas te refugiarás.`,postCommunion:`DESPUÉS de recibir el pan del cielo que alimenta la fe, consolida la esperanza y fortalece el amor, te
rogamos, Señor, que nos hagas sentir hambre de Cristo, pan vivo y verdadero, y nos enseñes a vivir
constantemente de toda palabra que sale de tu boca. Por Jesucristo, nuestro Señor.`,prayerOverPeople:`TE pedimos, Señor, que descienda sobre tu pueblo la bendición copiosa, para que la esperanza brote en la
tribulación, la virtud se afiance en la dificultad y se obtenga la redención eterna. Por Jesucristo, nuestro
Señor.`}},{source:"spain",title:"Lunes de la I Semana de Cuaresma",aliases:["Lunes de la I Semana de Cuaresma"],fields:{entranceAntiphon:`Como están los ojos de los esclavos fijos en las manos de sus señores, así están nuestros ojos en el Señor,
Dios nuestro, esperando su misericordia. Misericordia, Señor, misericordia.`,collect:`CONVIÉRTENOS a ti, Dios Salvador nuestro, e instruye nuestras mentes con la sabiduría del cielo, para
que la celebración de esta Cuaresma dé fruto en nosotros. Por nuestro Señor Jesucristo.`,offerings:`ACEPTA, Señor, la ofrenda de nuestra fidelidad, que, por tu acción, santifique nuestra vida y nos obtenga
el perdón de nuestras culpas. Por Jesucristo, nuestro Señor.`,communionAntiphon:`En verdad os digo, cada vez que lo hicisteis con uno de estos mis hermanos más pequeños, conmigo lo
hicisteis, dice el Señor. Venid vosotros, benditos de mi Padre, heredad el reino preparado para vosotros
desde la creación del mundo.`,postCommunion:`AL recibir tu sacramento, Señor, concédenos experimentar alivio para el alma y para el cuerpo, para que,
salvados ambos, nos gloriemos en la plenitud de los auxilios del cielo.
Por Jesucristo nuestro Señor.`,prayerOverPeople:`Se puede añadir ad libitum
TE pedimos, Señor, que ilumines la mente de tu pueblo con la claridad de tu luz, para que alcance a ver lo
que debe obrar y lleve a cabo lo que sea recto.
Por Jesucristo, nuestro Señor.`}},{source:"spain",title:"Martes de la I Semana de Cuaresma",aliases:["Martes de la I Semana de Cuaresma"],fields:{entranceAntiphon:"Señor, tú has sido nuestro refugio de generación en generación. Desde siempre y por siempre tú eres Dios.",collect:`SEÑOR, mira a tu familia y haz que nuestro espíritu brille junto a ti con el deseo de poseerte, al
mortificarnos mediante la penitencia corporal.
Por nuestro Señor Jesucristo.`,offerings:`DIOS, creador todopoderoso, acepta los dones que recibimos de tu abundante generosidad y convierte en
auxilio para la vida eterna los bienes temporales que nos has dado.
Por Jesucristo, nuestro Señor.`,communionAntiphon:`Escúchame cuando te invoco, Dios de mi justicia; tú que en el aprie to me diste anchura ten piedad de mí y
escucha mi oración.`,postCommunion:`SEÑOR, que este sacramento nos ayude
a estimar los bienes del cielo
a la vez que calmamos la tendencia a los de la tierra.
Por Jesucristo, nuestro Señor.`,prayerOverPeople:`Se puede añadir ad libitum
OH, Dios, que tus fieles, se fortalezcan con tu bendición; sé para ellos consuelo en la tristeza,
paciencia en la tribulación y defensa en el peligro.
Por Jesucristo, nuestro Señor.`}},{source:"spain",title:"Miércoles de la I Semana de Cuaresma",aliases:["Miércoles de la I Semana de Cuaresma"],fields:{entranceAntiphon:`Recuerda, Señor, que tu ternura y tu misericordia son eternas. Que no triunfen de nosotros nuestros
enemigos. Sálvanos, Dios de Israel, de todos nuestros peligros.`,collect:`MIRA complacido, Señor, el fervor de tu pueblo que desea entregarse a ti con una vida santa;
y, a los que dominan su cuerpo con la penitencia, transfórmalos interiormente
mediante el fruto de las buenas obras.
Por nuestro Señor Jesucristo.`,offerings:`TE presentamos, Señor, estos dones que nos diste para consagrarlos a tu nombre
y, ya que los has hecho sacramento para nosotros, transfórmalos en remedio para la vida eterna.
Por Jesucristo, nuestro Señor.`,communionAntiphon:"Que se alegren todos los que esperan en ti, Señor: gozarán eternamente y habitarás en ellos.",postCommunion:`OH, Dios, que no cesas de alimentarnos con tus sacramentos, concédenos que este banquete al que nos has
admitido nos alcancde la vida eterna.
Por Jesucristo, nuestro Señor.`,prayerOverPeople:`Se puede añadir ad libitum
SEÑOR, mira con bondad a tu pueblo y límpialo de todos sus pecados con tu misericordia; así no le hará
daño adversidad alguna, si no le domina ninguna maldad.
Por Jesucristo, nuestro Señor.`}},{source:"spain",title:"Jueves de la I Semana de Cuaresma",aliases:["Jueves de la I Semana de Cuaresma"],fields:{entranceAntiphon:"Señor, escucha mis palabras, atiende a mis gemidos, haz caso mis gritos de auxilio, Rey mío y Dios mío.",collect:`CONCÉDENOS, Señor, la gracia de conocer siempre lo que es recto y practicarlo con diligencia, para que
vivamos siempre según tu voluntad los que sin ti no podemos ni siquiera existir.
Por nuestro Señor Jesucristo.`,offerings:`ATIENDE, Señor, los deseos de los que te suplican, y, al aceptar nuestras ofrendas y plegarias, convierte
hacia ti los corazones de todos nosotros.
Por Jesucristo, nuestro Señor.`,communionAntiphon:"Todo el que pide recibe, quien busca encuentra y al que llama se le abre.",postCommunion:`SEÑOR, Dios nuestro, haz de estos santos misterios que nos entregaste como prenda de nuestra salvación,
auxilio en el presente y para el futuro. Por Jesucristo, nuestro Señor.`,prayerOverPeople:`Se puede añadir ad libitum
TE rogamos, Señor, que la misericordia esperada descienda sobre los que te suplican, y concédeles la
abundancia de los bienes del cielo, de modo que sepan bien lo que han de pedir
y obtengan lo que han solicitado.
Por Jesucristo, nuestro Señor.`}},{source:"spain",title:"Viernes de la I semana de Cuaresma",aliases:["Viernes de la I semana de Cuaresma"],fields:{entranceAntiphon:"Señor, sácame de mis tribulaciones. Mira mis trabajos y mis penas y perdona todos mis pecados.",collect:`SEÑOR, concede a tus fieles, prepararse de modo conveniente a las fiestas de Pascua, para que, aceptada la
penitencia corporal según la costumbre, sea útil a todos para el bien de las almas. Por nuestro Señor
Jesucristo.`,offerings:`ACEPTA, Señor, estas ofrendas con las que has querido satisfacerte y por las que nos devuelves con amor
eficaz la salvación eterna.
Por Jesucristo, nuestro Señor.`,communionAntiphon:`Por mi vida, oráculo del Señor, que yo no me complazco en la muerte del malvado, sino en que el malvado
se convierta y viva.`,postCommunion:`LA comunión de tu sacramento, Señor, nos restaure y, purificados del antiguo pecado, nos conduzca a la
unidad del misterio que nos salva.
Por Jesucristo, nuestro Señor.`,prayerOverPeople:`Se puede añadir ad libitum
MIRA, Señor, con bondad a tu pueblo, para que se cumpla en su interior lo que su observancia manifiesta
externamente.
Por Jesucristo, nuestro Señor.`}},{source:"spain",title:"Sábado de la I Semana de Cuaresma",aliases:["Sábado de la I Semana de Cuaresma"],fields:{entranceAntiphon:"La ley del Señor es perfecta y es descanso del alma; el precepto del Señor es fiel e instruye a los ignorantes.",collect:`PADRE eterno, vuelve hacia ti nuestros corazones, para que, buscando siempre lo único necesario y
realizando obras de caridad, nos dediquemos a tu servicio.
Por nuestro Señor Jesucristo.`,offerings:`SEÑOR, que estos santos misterios nos renueven y nos hagan dignos de su fruto.
Por Jesucristo, nuestro Señor.`,communionAntiphon:"Sed perfectos, como vuestro Padre celestial es perfecto, dice el Señor.",postCommunion:`ASISTE, Señor, con tu ayuda continua a los que alimentas con este divino sacramento,
y, a cuantos has iluminado con la sabiduría del cielo, acompáñalos con el consuelo de la salvación.
Por Jesucristo, nuestro Señor.`,prayerOverPeople:`Se puede añadir ad libitum
CONFORTA, Señor, a tus fieles con la bendición que imploramos de ti, para que nunca permitas que nos
apartemos de tu voluntad y siempre podamos agradecer tus beneficios.
Por Jesucristo, nuestro Señor.`}},{source:"spain",title:"II Domingo de Cuaresma",aliases:["II Domingo de Cuaresma"],fields:{entranceAntiphon:`Oigo en mi corazón: «Buscad mi rostro». Tu rostro buscaré, Señor. No me escondas tu rostro.

O bien: Sal 24, 6. 2. 22
Recuerda, Señor, que tu ternura y tu misericordia son eternas. Que no triunfen de nosotros nuestros
enemigos; sálvanos, Dios de Israel, de todos nuestros peligros.`,collect:`OH, Dios, que nos has mandado escuchar a tu Hijo amado, alimenta nuestro espíritu con tu palabra; para
que, con mirada limpia, contemplemos gozosos la gloria de tu rostro.
Por nuestro Señor Jesucristo.`,offerings:`TE pedimos, Señor, que esta oblación borre nuestros pecados y santifique los cuerpos y las almas de tus
fieles, para que celebren dignamente las fiestas pascuales.
Por Jesucristo, nuestro Señor.`,communionAntiphon:"Este es mi Hijo, el amado, en quien me complazco. Escuchadlo.",postCommunion:`TE damos gracias, Señor, porque, al participar en estos gloriosos misterios, nos haces recibir, ya en este
mundo, los bienes eternos del cielo.
Por Jesucristo, nuestro Señor.`,prayerOverPeople:`DIRIGE continuamente, Señor, los corazones de tus fieles y concede esta gracia a tus siervos,
de modo que, permaneciendo en tu amor y cercanía, cumplan plenamente tus mandamientos.
Por Jesucristo, nuestro Señor.`}},{source:"spain",title:"Lunes de la II semana de Cuaresma",aliases:["Lunes de la II semana de Cuaresma"],fields:{entranceAntiphon:`Sálvame, Señor, ten misericordia de mí. Mi pie se mantiene en el camino llano; en la asamblea bendeciré al
Señor.`,collect:`OH, Dios, que nos man daste mortificar nuestro cu erpo como remedio espiritual, concédenos abstenemos
de todo pecado y que nuestros corazones sean capaces de cumplir los mandamientos de tu amor.
Por nuestro Señor Jesucristo.`,offerings:`ACOGE, Señor, nuestra oración y libra de las seduccio nes del mundo a los que concedes servirte con los
santos misterios del cielo.
Por Jesucristo, nuestro Señor.`,communionAntiphon:"Sed misericordiosos como vuestro Padre es misericordioso, dice el Señor.",postCommunion:`SEÑOR, que esta comunión nos limpie de pecado y nos haga partícipes de las alegrías del cielo.
Por Jesucristo, nuestro Señor.`,prayerOverPeople:`Se puede añadir ad libitum
AFIANZA, Señor, el corazón de tus fieles y fortalécelos con el poder de tu gracia, para que se ent reguen
con fervor a la plegaria y se amen con amor sincero.
Por Jesucristo, nuestro Señor.`}},{source:"spain",title:"Martes de la II semana de Cuaresma",aliases:["Martes de la II semana de Cuaresma"],fields:{entranceAntiphon:"Da luz a mis ojos para que no duerma en la muerte, para que no diga mi enemigo: «Le he podido».",collect:`SEÑOR, vela con amor continuo sobre tu Iglesia, y, pues sin tu ayuda no puede sostenerse lo que se
cimienta en la debilidad humana, protégela siempre con tus auxilios en el peligro
y dirígela hacia la salvación.
Por nuestro Señor Jesucristo.`,offerings:`SANTIFÍCANOS, Señor, complacido por estos sacramentos; purifícanos de nuestros vicios terrenos y
condúcenos hacia los bienes del cielo.
Por Jesucristo, nuestro Señor.`,communionAntiphon:"Proclamando todas tus maravillas, me alegro y exulto contigo, y toco en honor de tu nombre, oh, Altísimo.",postCommunion:`TE rogamos, Señor, que la participación en tu mesa santa nos haga crecer en la piedad y nos obtenga tu
ayuda constante.
Por Jesucristo, nuestro Señor.`,prayerOverPeople:`Se puede añadir ad libitum
MUÉSTRATE propicio, Señor, a las súplicas de tus fieles y cura las debilidades de su espíritu, para que,
una vez perdonados, se alegren siempre con tu bendición.
Por Jesucristo, nuestro Señor.`}},{source:"spain",title:"Miércoles de la II semana de Cuaresma",aliases:["Miércoles de la II semana de Cuaresma"],fields:{entranceAntiphon:"No me abandones, Señor, Dios mío, no te quedes lejos; ven a socorrerme, Señor mío, mi fuerza y salvación.",collect:`SEÑOR, guarda a tu familia instruida en las buenas obras y, confortada en sus necesidades temporales,
condúcela propicio hacia los bienes eternos.
Por nuestro Señor Jesucristo.`,offerings:`MIRA con bondad, Señor, la ofrenda que te presentamos, y por este santo intercambio líbranos de las
ataduras de nuestros pecados.
Por Jesucristo, nuestro Señor.`,communionAntiphon:"El Hijo del hombre no ha venido a ser servido sino a servir y dar su vida en rescate por muchos.",postCommunion:`SEÑOR, Dios nuestro, te pedimos que se convierta en causa de salvación eterna
lo que quisiste fuera para nosotros prenda de inmortalidad.
Por Jesucristo, nuestro Señor.`,prayerOverPeople:`Se puede añadir ad libitum
CONCEDE a tus siervos, Señor, la abundancia de tu protección y gracia,
dales salud de alma y cuerpo, concédeles plenitud de amor fraterno y haz que sean siempre fieles en su
entrega a ti.
Por Jesucristo, nuestro Señor.`}},{source:"spain",title:"Jueves de la II semana de Cuaresma",aliases:["Jueves de la II semana de Cuaresma"],fields:{entranceAntiphon:`Oh, Dios, ponme a prueba y conoce mis sentimientos; mira si mi camino se desvía y guíame por el camino
eterno.`,collect:`OH, Dios, que amas y devuelves la inocencia, atrae hacia ti los corazones de tus siervos
para que, llenos del fervor de tu Espíritu, permanezcamos firmes en la fe
y eficaces en las obras.
Por nuestro Señor Jesucristo.`,offerings:`SANTIFICA, Señor, por este sacrificio, nuestra observancia cuaresmal, para que las prácticas externas
transformen nuestro espíritu.
Por Jesucristo, nuestro Señor.`,communionAntiphon:"Dichoso el que, con vida intachable, camina en la ley del Señor.",postCommunion:`TE pedimos, Señor, que el fruto de este sacrificio permanezca en nosotros y se manifieste siempre en
nuestras obras.
Por Jesucristo, nuestro Señor.`,prayerOverPeople:`Se puede añadir ad libitum
ASISTE, Señor, a tus siervos que imploran el auxilio de tu gracia, para que obtengan la defensa y la guía
de tu protección.
Por Jesucristo, nuestro Señor.`}},{source:"spain",title:"Viernes de la II semana de Cuaresma",aliases:["Viernes de la II semana de Cuaresma"],fields:{entranceAntiphon:`Oh, Dios, ponme a prueba y conoce mis sentimientos; mira si mi camino se desvía y guíame por el camino
eterno.`,collect:`CONCÉDENOS, Dios todopoderoso, llegar a lo que está por venir con los corazones limpios,
por el santo esfuerzo purificador de la penitencia.
Por nuestro Señor Jesucristo.`,offerings:`TE pedimos, oh Dios, que tu misericordia prepare debidamente a tus siervos y los conduzca a celebrar
estos misterios con una conducta piadosa.
Por Jesucristo, nuestro Señor.`,communionAntiphon:"Dios nos amó y nos envió a su Hijo como víctima de propiciación por nuestros pecados.",postCommunion:`SEÑOR, después de recibir la prenda de la eterna salvación, haz que la procuremos de tal modo que
podamos llegar a ella.
Por Jesucristo, nuestro Señor.`,prayerOverPeople:`Se puede añadir ad libitum
TE pedimos, Señor, que concedas a tu pueblo la salud de alma y cuerpo, para que,
haciendo el bien, merezca ser defendido siempre por tu protección.
Por Jesucristo, nuestro Señor.`}},{source:"spain",title:"Sábado de la II semana de Cuaresma",aliases:["Sábado de la II semana de Cuaresma"],fields:{entranceAntiphon:`El Señor es clemente y misericordioso, lento a la cólera y rico en piedad; el Señor es bueno con todos, es
cariñoso con todas sus criaturas.`,collect:`SEÑOR, Dios nuestro, que, por medio de los sacramentos, nos permites, ya en la tierra, participar de los
bienes del cielo, dirígenos tú mismo en esta la vida, para que nos lleves
hacia esa luz en la que habitas.
Por nuestro Señor Jesucristo.`,offerings:`LLEGUEN hasta nosotros, Señor, por medio de este sacramento, los frutos de la redención,
para que nos aparten de los excesos humanos y nos conduzcan hacia los bienes del cielo.
Por Jesucristo, nuestro Señor.`,communionAntiphon:`Deberías alegrarte, hijo, porque este hermano tuyo estaba muerto y ha revivido; estaba perdido y lo hemos
encontrado.`,postCommunion:`SEÑOR, que la gracia recibida de tu sacramento llegue a lo más hondo de nuestro corazón y nos
comunique su fuerza divina.
Por Jesucristo, nuestro Señor.`,prayerOverPeople:`Se puede añadir ad libitum
ESTÉN abiertos, Señor, los oídos de tu misericordia a los ruegos de los que te suplican, y, para que les
concedas lo que desean, haz que pidan lo que a ti te agrada.
Por Jesucristo, nuestro Señor.`}},{source:"spain",title:"III Domingo de Cuaresma",aliases:["III Domingo de Cuaresma"],fields:{entranceAntiphon:`Tengo los ojos puestos en el Señor, porque él saca mis pies de la red. Mírame, oh Dios, y ten piedad de mí,
que estoy solo y afligido.

O bien: Cf. Ez 36, 23-26
Cuando, por medio de vosotros, haga ver mi santidad, os reuniré de todos los países; derramaré sobre
vosotros un agua pura que os purificará de todas vuestras inmundicias, y os daré un espíritu nuevo, dice el
Señor.`,collect:`OH, Dios, autor de toda misericordia y bondad, que aceptas el ayuno, la oración y la limosna
como remedio de nuestros pecados, mira con amor el reconocimiento de nuestra pequeñez y levanta con tu
misericordia a los que nos sentimos abatidos por nuestra conciencia.
Por nuestro Señor Jesucristo.`,offerings:`SEÑOR, por la celebración de este sacrificio concédenos, en tu bondad, que, al pedirte el perdón nuestras
ofensas, nos esforcemos en perdonar las de nuestros hermanos.
Por Jesucristo, nuestro Señor.

Cuando no se lee el Evangelio de la Samaritana, se utiliza el`,communionAntiphon:`El que beba del agua que yo le daré, dice el Señor, se convertirá dentro de él en un surtidor de agua que
salta hasta la vida eterna.

Cuando se lee otro Evangelio: Sal 85, 4-5
Hasta el gorrión ha encontrado una casa; la golondrina, un nido donde colocar sus polluelos: tus altares,
Señor del universo, Rey mío y Dios mío. Dichosos los que viven en tu casa, alabándote siempre.`,postCommunion:`ALIMENTADOS ya en la tierra con el pan del cielo, prenda de eterna salvación, te suplicamos, Señor, que
se haga realidad en nuestra vida lo que hemos recibido en este sacramento.
Por Jesucristo, nuestro Señor.`,prayerOverPeople:`TE pedimos, Señor, que dirijas los corazones de tus fieles y les concedas benigno la gracia
de permanecer firmes en el amor a ti y al prójimo, y de cumplir plenamente tus mandamientos.
Por Jesucristo, nuestro Señor.`}},{source:"spain",title:"Martes de la III semana de Cuaresma",aliases:["Martes de la III semana de Cuaresma"],fields:{entranceAntiphon:`Yo te invoco porque tú me respon des, Dios mío; inclina el oído y escucha mis palabras. Guárdame como a
las niñas de tus ojos, a la sombra de tus alas escóndeme.`,collect:`SEÑOR, que tu gracia no nos abandone, para que, entregados plenamente a tu servicio, sintamos sobre
nosotros tu protección continua.
Por nuestro Señor Jesucristo.`,offerings:`CONCÉDENOS, Señor, que este sacrificio de salvación, purifique nuestros pecados
y atraiga sobre nosotros la ayuda de tu poder.
Por Jesucristo, nuestro Señor.`,communionAntiphon:`Señor ¿quién puede hospedarse en tu tienda y habitar en tu monte santo? El que procede honradam ente y
practica la justicia.`,postCommunion:`LA participación en este santo sacramento nos vivifique, Señor, expíe nuestros pecados
y nos otorgue tu protección.
Por Jesucristo, nuestro Señor.`,prayerOverPeople:`Se puede añadir ad libitum
OH, Dios, maestro y guía de tu pueblo, aleja de él los pecados que le afean, para que te sea siempre
agradable y se sienta seguro con tu auxilio.
Por Jesucristo, nuestro Señor.`}},{source:"spain",title:"Miércoles de la III semana de Cuaresma",aliases:["Miércoles de la III semana de Cuaresma"],fields:{entranceAntiphon:"Asegura mis pasos con tu promesa, Señor, que ninguna maldad me domine.",collect:`SEÑOR, instruidos por las prácticas cuaresmales y alimentados con tu palabra, concédenos que te
sirvamos fielmente con una santa austeridad de vida y perseveremos unidos en la plegaria.
Por nuestro Señor Jesucristo.`,offerings:`CON la ofrenda de estos dones, Señor, recibe las súplicas de tu pueblo y defiende de todo peligro a los que
ahora celebramos tus misterios.
Por Jesucristo, nuestro Señor.`,communionAntiphon:"Me enseñarás el sendero dde la vida, me saciarás de gozo en tu presencia, Señor.",postCommunion:`SEÑOR, que nos santifique la comida celestial que hemos recibido, para que, libres de nuestros errores,
podamos alcanzar las promesas eternas.
Por Jesucristo, nuestro Señor.`,prayerOverPeople:`Se puede añadir ad libitum
CONCEDE a tu pueblo, Dios nuestro, una voluntad agradable a ti, porque le otorgarás toda clase de bienes
al hacerle conforme a tus mandatos.
Por Jesucristo, nuestro Señor.`}},{source:"spain",title:"Jueves de la III semana de Cuaresma",aliases:["Jueves de la III semana de Cuaresma"],fields:{entranceAntiphon:"para siempre su Señor.",collect:`CONVOCAMOS humildemente, Señor, tu grandeza para que, a medida que se acerca la fiesta de nuestra
salvación, vaya creciendo en intensidad nuestra entrega para celebrar dignamente el Misterio pascual.
Por nuestro Señor Jesucristo.`,offerings:`SEÑOR preserva de toda maldad a tu pueblo, para que sus ofrendas sean gratas a tus ojos,
y no permitas entregarse a los falsos placeres a quien prometes alcanzar los premios de tu verdad.
Por Jesucristo, nuestro Señor.`,communionAntiphon:`Tú promulgas tus mandatos para que se observen exactamente. Ojalá esté firme mi camino para cumplir tus
decretos.`,postCommunion:`PRESTA benigno tu ayuda, Señor, a quienes alimentas con tus sacramentos para que consigamos tu
salvación en la celebración de estos misterios y en la vida cotidiana.
Por Jesucristo, nuestro Señor.`,prayerOverPeople:`Se puede añadir ad libitum
CONFIADOS en tu misericordia, imploramos, Señor, tu clemencia, pues, así como hemos recibido de ti lo
que somos, por tu gracia, procuremos desear el bieny poner en práctica lo deseado.
Por Jesucristo, nuestro Señor.`}},{source:"spain",title:"Viernes de la III semana de Cuaresma",aliases:["Viernes de la III semana de Cuaresma"],fields:{entranceAntiphon:"No tienes igual entre los dioses, Señor: grande eres tú y haces maravillas, tú eres el único Dios.",collect:`INFUNDE bondadosamente, Señor, tu gracia en nuestros corazones, para que sepamos apartarnos de los
errores humanos y secundar las inspiraciones que, por tu generosidad,
nos vienen del cielo.
Por nuestro Señor Jesucristo.`,offerings:`MIRA Señor, con bondad los dones que te dedicamos, para que sean gratos a tus ojos
y nos alcancen siempre la salvación.
Por Jesucristo, nuestro Señor.`,communionAntiphon:"Amar a Dios con todo el corazón, y al prójimo como a uno mismo, vale más que todos los sacrificios.",postCommunion:`LA acción de tu poder, Señor, penetre nuestros cuerpos y almas,
para que poseamos en la plenitud de la salvación lo que en esta participación hemos recibido.
Por Jesucristo, nuestro Señor.`,prayerOverPeople:`Se puede añadir ad libitum
SEÑOR, mira a los fieles que imploran tu misericordia, para que puedan difundir por todas partes los
dones de tu amor quienes han puesto en ti su confianza.
Por Jesucristo, nuestro Señor.`}},{source:"spain",title:"IV Domingo de Cuaresma",aliases:["IV Domingo de Cuaresma"],fields:{entranceAntiphon:`Alégrate, Jerusalén, reuníos todos los que la amáis, regocijaos los que estuvisteis tristes para que exultéis;
mamaréis a sus pechos y os saciaréis de sus consuelos.`,collect:`OH, Dios,
que, por tu Verbo, realizas de modo admirable la reconciliación del género humano, haz que el pueblo
cristiano se apresure, con fe gozosa y entrega diligente, a celebrar las próximas fiestas pascuales.
Por nuestro Señor Jesucristo.`,offerings:`SEÑOR, al ofrecerte alegres los dones de la eterna salvación, te rogamos nos ayudes a celebrarlos con fe
verdadera y a saber ofrecértelos de modo adecuado por la salvación del mundo.
Por Jesucristo, nuestro Señor.

Cuando no se lee el Evangelio del ciego de nacimiento, se utiliza el`,communionAntiphon:`El Señor untó mis ojos: fui, me lavé, vi y creí en Dios.

Cuando se lee el evangelio del hijo pródigo: Lc 15, 32
Era preciso alegrarse, porque este hermano tuyo estaba muerto y ha revivido; estaba perdido y lo hemos
encontrado.

Cuando se lee otro evangelio: Sal 121, 3-4
Jerusalén está fundada como ciudad bien compacta. Allá suben las tribus, las tribus del Señor, a celebrar el
nombre del Señor.`,postCommunion:`OH, Dios, luz que alumbras a todo hombre que viene a este mundo, ilumina nuestros corazones con la
claridad de tu gracia, para que seamos capaces de pensar siempre,
y de amar con sinceridad, lo que es digno y grato a tu grandeza.
Por Jesucristo, nuestro Señor.`,prayerOverPeople:`DEFIENDE, Señor, a los que te suplican, fortalece a los débiles, vivifica siempre con tu luz
a los que caminan en sombras de muerte, y, libres de todo mal por tu compasión, concédeles llegar a los
bienes definitivos.
Por Jesucristo, nuestro Señor.`}},{source:"icergua",title:"II DOMINGO DEL TIEMPO ORDINARIO",aliases:["II DOMINGO DEL TIEMPO ORDINARIO","2 domingo del tiempo ordinario","ordinary time 2 sunday"],fields:{collect:`Dios todopoderoso y eterno, que con amor gobiernas los cielos y la
tierra, escucha paternalmente las s úplicas de tu pueblo y haz que
los días de nuestra vida transcurran en tu paz. Por nuestro Señor
Jesucristo, tu Hijo, que siendo Dios vive y reina contigo, en la
unidad del Espíritu Santo, por los siglos de los siglos. Amén.`,offerings:`Concédenos, Señor, participar dignamente en esta Eucaristía,
porque cada vez que celebramos el memorial del sacrificio de tu
Hijo, actualiza la obra de nuestra redención. Por Jesucristo, nuestro
Señor. Amén.`,postCommunion:`Infúndenos, Señor, el espíritu de tu caridad para que, alimentados
del mismo pan espiritual, permanezcamos siempre unidos por el
mismo amor. Por Jesucristo, nuestro Señor. Amén.`}},{source:"icergua",title:"III DOMINGO DEL TIEMPO ORDINARIO",aliases:["III DOMINGO DEL TIEMPO ORDINARIO","3 domingo del tiempo ordinario","ordinary time 3 sunday"],fields:{collect:`Dios eterno y todopoderoso, conduce nuestra vida por el camino
de tus mandamientos para que, unidos a tu Hijo, podamos producir
frutos de amor y fidelidad. Por nuestro Señor Jesucristo, tu Hijo,
que siendo Dios vive y reina contigo, en la unidad del Espíritu
Santo, por los siglos de los siglos. Amén.`,offerings:`Acepta, Señor, con bondad, los dones que te presentamos y
santifícalos por medio de tu Espíritu para que se nos conviertan en
sacramento de salvación. Por Jesucristo, nuestro Señor. Amén.`,postCommunion:`Te damos gracias, Señor, por habernos alimentado con el Cuerpo y
la Sangre de tu Hijo y te pedi mos que este don tuyo sea para
nosotros fuente inagotable de vida. Por Jesucristo, nuestro Señor.
Amén.`}},{source:"icergua",title:"IV DOMINGO DEL TIEMPO ORDINARIO",aliases:["IV DOMINGO DEL TIEMPO ORDINARIO","4 domingo del tiempo ordinario","ordinary time 4 sunday"],fields:{collect:`Concédenos, Señor, Dios nuestro, amarte con todo el corazón y,
con el mismo amor, amar a nuest ro prójimo. Por nuestro Señor
Jesucristo, tu Hijo, que siendo Dios vive y reina contigo, en la
unidad del Espíritu Santo, por los siglos de los siglos. Amén.`,offerings:`Acepta, Señor, estos dones que te presentamos en señal de
entrega a ti, y conviértelos en el sacramento de nuestra redención.
Por Jesucristo, nuestro Señor. Amén.`,postCommunion:`Que el sacramento del Cuerpo y la Sangre de tu Hijo que acabamos
de recibir, nos ayude, Señor, a vivir más profundamente nuestra fe.
Por Jesucristo, nuestro Señor. Amén.`}},{source:"icergua",title:"V DOMINGO DEL TIEMPO ORDINARIO",aliases:["V DOMINGO DEL TIEMPO ORDINARIO","5 domingo del tiempo ordinario","ordinary time 5 sunday"],fields:{collect:`Señor, que tu amor incansable cuide y proteja siempre a estos hijos
tuyos, que han puesto en tu gracia toda su esperanza. Por nuestro
Señor Jesucristo, tu Hijo, que sie ndo Dios vive y reina contigo, en
la unidad del Espíritu Santo, por los siglos de los siglos. Amén.`,offerings:`Señor, Dios nuestro, tú que nos has dado este pan y este vino para
reparar nuestras fuerzas, conviértelos para nosotros en
sacramento de vida eterna. Por Jesucristo, nuestro Señor. Amén.`,postCommunion:`Señor, tú que has querido hacernos participar de un mismo pan y
de un mismo cáliz, concédenos vivir de tal manera unidos en
Cristo, que nuestro trabajo sea eficaz para la salvación del mundo.
Por Jesucristo, nuestro Señor. Amén.`}},{source:"icergua",title:"VI DOMINGO DEL TIEMPO ORDINARIO",aliases:["VI DOMINGO DEL TIEMPO ORDINARIO","6 domingo del tiempo ordinario","ordinary time 6 sunday"],fields:{collect:`Señor, que prometiste venir y habitar en los corazones rectos y
sinceros, concédenos la rectitud y sinceridad de vida, para que
podamos gozar de tu presencia. Por nuestro Señor Jesucristo, tu
Hijo, que siendo Dios vive y reina contigo, en la unidad del Espíritu
Santo, por los siglos de los siglos. Amén.`,offerings:`Que este sacrificio, Señor, que vamos a ofrecerte, nos purifique,
nos renueve y nos haga partícipes dde la vida nueva de tu Reino. Por
Jesucristo, nuestro Señor. Amén.`,postCommunion:`Señor, que el pan eucarístico, por medio del cual nos has
comunicado tú la vida verdadera, produzca abundantes frutos en
nosotros. Por Jesucristo, nuestro Señor. Amén.`}},{source:"icergua",title:"VII DOMINGO DEL TIEMPO ORDINARIO",aliases:["VII DOMINGO DEL TIEMPO ORDINARIO","7 domingo del tiempo ordinario","ordinary time 7 sunday"],fields:{collect:`Concédenos, Señor, ser dóciles a las inspiraciones de tu Espíritu
para que realicemos siempre en nuestra vida tu santa voluntad. Por
nuestro Señor Jesucristo, tu Hijo, que siendo Dios vive y reina
contigo, en la unidad del Espíritu Santo, por los siglos de los
siglos. Amén.`,offerings:`Que este sacrificio de acción de gracias y de alabanza que vamos a
ofrecerte, nos ayude, Señor, a reconocer la salvación eterna de la
que nos haces partícipes por tu Espíritu. Por Jesucristo, nuestro
Señor. Amén.`,postCommunion:`Padre, que el Cuerpo y la Sangre de Cristo, que nos has dado, en
este sacramento, sean para todos nosotros prenda segura de vida
eterna. Por Jesucristo, nuestro Señor. Amén.`}},{source:"icergua",title:"VIII DOMINGO DEL TIEMPO ORDINARIO",aliases:["VIII DOMINGO DEL TIEMPO ORDINARIO","8 domingo del tiempo ordinario","ordinary time 8 sunday"],fields:{collect:`Concede, Señor, que el curso de los acontecimientos del mundo se
desenvuelva, según tu voluntad, en la justicia y en la paz, y que tu
Iglesia pueda servirte con tranquilidad y alegría. Por nuestro Señor
Jesucristo, tu Hijo, que siendo Dios vive y reina contigo, en la
unidad del Espíritu Santo, por los siglos de los siglos. Amén.`,offerings:`Señor, que el pan y el vino que tú mismo nos das para ofrecértelos,
nos ayuden, convertidos en el Cuerpo y Sangre de tu Hijo, a
participar dde la vida eterna. Por Jesucristo, nuestro Señor. Amén.`,postCommunion:`Te pedimos, Padre misericordioso, que por este sacramento con
que ahora nos fortaleces y nos haces partícipes dde la vida eterna,
nos ayude a ser signos de la presencia de tu Reino en el mundo.
Por Jesucristo, nuestro Señor. Amén.`}},{source:"icergua",title:"IX DOMINGO DEL TIEMPO ORDINARIO",aliases:["IX DOMINGO DEL TIEMPO ORDINARIO","9 domingo del tiempo ordinario","ordinary time 9 sunday"],fields:{collect:`Nos
acogemos, Señor, a tu providencia, y te pedimos humildemente
que apartes de nosotros todo mal y nos concedas aquello que
pueda contribuir a nuestro bien. Por nuestro Señor Jesucristo, tu
Hijo, que siendo Dios vive y reina contigo, en la unidad del Espíritu
Santo, por los siglos de los siglos. Amén.`,offerings:`Confiados en tu misericordia, Señor, venimos a tu altar con
nuestros dones a fin de que nos purifiques por este memorial que
estamos celebrando. Por Jesucristo, nuestro Señor. Amén.`,postCommunion:`Padre santo, tú que nos has alimentado con el Cuerpo y la Sangre
de tu Hijo, guíanos por medio de tu Espíritu a fin de que, no sólo
con palabras, sino con toda nuestra vida podamos demostrarte
nuestro amor e irradiar la presencia de tu Reino. Por Jesucristo,
nuestro Señor. Amén.`}},{source:"icergua",title:"X DOMINGO DEL TIEMPO ORDINARIO",aliases:["X DOMINGO DEL TIEMPO ORDINARIO","10 domingo del tiempo ordinario","ordinary time 10 sunday"],fields:{entranceAntiphon:`El Señor es mi luz y mi salvación, ¿a quién temeré?
El Señor es la defensa de mi vida, ¿quién me hará temblar?
Ellos, mis enemigos y adversarios, tropiezan y caen.`,collect:`Dios nuestro, de quien todo bien procede, inspíranos propósitos de
justicia y santidad y concédenos tu ayuda para poder cumplirlos.
Por nuestro Señor Jesucristo, tu Hijo, que siendo Dios vive y reina
contigo, en la unidad del Espíritu Santo, por los siglos de los
siglos. Amén.`,offerings:`Mira, Señor, con bondad, estos dones que te presentamos
humildemente, para que sean gratos a tus ojos y nos hagan crecer
en tu amor. Por Jesucristo, nuestro Señor. Amén.`,communionAntiphon:`Yo te invoco porque tú me respondes, Dios mío;
inclina el oído y escucha mis palabras.

O bien:
Dios es amor, y quien permanece en el amor permanece en Dios y Dios en él.`,postCommunion:`Señor, que la fuerza redentora de esta Eucaristía nos libre de
nuestras malas inclinaciones y nos guíe siempre por el camino de
tus mandamientos. Por Jesucristo, nuestro Señor. Amén.`}},{source:"icergua",title:"XI DOMINGO DEL TIEMPO ORDINARIO",aliases:["XI DOMINGO DEL TIEMPO ORDINARIO","11 domingo del tiempo ordinario","ordinary time 11 sunday"],fields:{entranceAntiphon:`Escúchame, Señor, que te llamo.
Tú eres mi auxilio; no me deseches,
no me abandones, Dios de mi salvación.`,collect:`Dios nuestro, fuerza de todos los que en ti confían, ayúdanos con
tu gracia, sin la cual nada puede nuestra humana debilidad, para
que podamos serte fieles en la observancia de tus mandamientos.
Por nuestro Señor Jesucristo, tu Hijo, que siendo Dios vive y reina
contigo, en la unidad del Espíritu Santo, por los siglos de los
siglos. Amén.`,offerings:`Dios nuestro, que en estos dones que te presentamos nos otorgas
el pan que nos alimenta y el sacramento que nos da nueva vida,
haz que nunca llegue a faltarnos este sustento del cuerpo y del
espíritu. Por Jesucristo, nuestro Señor. Amén.`,communionAntiphon:`Una cosa pido al Señor, eso buscaré:
habitar en la casa del Señor por los días de mi vida.

O bien:
Padre santo: guarda en tu nombre a los que me has dado,
para que sean uno como nosotros, dice el Señor.`,postCommunion:`Que nuestra participación en este sacramento signo de la unión de
los fieles en ti, contribuya, Señor, a la unidad de tu Iglesia. Por
Jesucristo, nuestro Señor. Amén.`}},{source:"icergua",title:"XII DOMINGO DEL TIEMPO ORDINARIO",aliases:["XII DOMINGO DEL TIEMPO ORDINARIO","12 domingo del tiempo ordinario","ordinary time 12 sunday"],fields:{entranceAntiphon:`El Señor es fuerza para su pueblo,
apoyo y salvación para su Ungido.
Salva a tu pueblo, Señor, y bendice tu heredad,
sé su pastor por siempre.`,collect:`Padre misericordioso, que nunca dejas de tu mano a quienes has
hecho tus amigos, concédenos vivir siempre movidos por tu amor
y por el filial temor de ofenderte. Por nuestro Señor Jesucristo, tu
Hijo, que siendo Dios vive y reina contigo, en la unidad del Espíritu
Santo, por los siglos de los siglos. Amén.`,offerings:`Acepta, Señor, este sacrificio de reconciliación y alabanza que
vamos a ofrecerte, a fin de que purifique nuestros corazones y
podamos corresponder a tu amor con nuestro amor. Por
Jesucristo, nuestro Señor. Amén.`,communionAntiphon:`Los ojos de todos te están aguardando, Señor;
tú les das la comida a su tiempo.

O bien:
Yo soy el Buen Pastor, yo doy mi vida por las ovejas, dice el Señor.`,postCommunion:`Señor, tú que nos has renovado con el Cuerpo y la Sangre de tu
Hijo, concédenos que la participación en esta Eucaristía nos ayude
a obtener la plenitud de la redención. Por Jesucristo, nuestro
Señor. Amén.`}},{source:"icergua",title:"XIII DOMINGO DEL TIEMPO ORDINARIO",aliases:["XIII DOMINGO DEL TIEMPO ORDINARIO","13 domingo del tiempo ordinario","ordinary time 13 sunday"],fields:{entranceAntiphon:`Pueblos todos, batid palmas,
aclamad a Dios con gritos de júbilo.`,collect:`Padre de bondad, que por medio de tu gracia nos has hecho hijos
de la luz, líbranos de las tinieblas del error y haz que
permanezcamos siempre en el esplendor de la verdad. Por nuestro
Señor Jesucristo, tu Hijo, que siendo Dios vive y reina contigo, en
la unidad del Espíritu Santo, por los siglos de los siglos. Amén.`,offerings:`Concédenos, Señor, celebrar dignamente esta Eucaristía por medio
de la cual tú te dignas hacernos partícipes de los frutos de la
redención. Por Jesucristo, nuestro Señor. Amén.`,communionAntiphon:`Bendice, alma mía, al Señor
y todo mi ser a su santo nombre.

O bien:
Padre, por ellos ruego; para que todos sean uno en nosotros,
para que el mundo crea que tú me has enviado, dice el Señor.`,postCommunion:`Que el Cuerpo y la Sangre de tu Hijo, que hemos ofrecido en
sacrificio y recibido en comunión, sean para nosotros principio de
vida nueva, a fin de que, unidos a ti por el amor, demos frutos que
permanezcan para siempre. Por Jesucristo, nuestro Señor. Amén.`}},{source:"icergua",title:"XIV DOMINGO DEL TIEMPO ORDINARIO",aliases:["XIV DOMINGO DEL TIEMPO ORDINARIO","14 domingo del tiempo ordinario","ordinary time 14 sunday"],fields:{entranceAntiphon:`Oh, Dios, meditamos tu misericordia en medio de tu templo;
como tu nombre, oh, Dios, tu alabanza llega al confín de la tierra.
Tu diestra está llena de justicia.`,collect:`Dios nuestro, que por medio de la muerte de tu Hijo has redimido al
mundo de la esclavitud del pecado, concédenos participar ahora de
una santa alegría y, alcanzar la plenitud de la felicidad eterna. Por
nuestro Señor Jesucristo, tu Hijo, que siendo Dios vive y reina
contigo, en la unidad del Espíritu Santo, por los siglos de los
siglos. Amén.`,offerings:`Que el sacrificio que vamos a ofre certe nos purifique, Señor, y nos
ayude a conformar cada día más nuestra vida con los ejemplos de
tu Hijo Jesucristo, que vive y re ina por los siglos de los siglos.
Amén.`,communionAntiphon:`Gustad y ved qué bueno es el Señor,
dichoso el que se acoge a él.

O bien:
Venid a mí todos los que estáis cansados y agobiados,
y yo os aliviaré, dice el Señor.`,postCommunion:`Dios omnipotente y eterno, que nos has alimentado con el
sacramento de tu amor, concédenos vivir siempre en tu amistad y
agradecer continuamente tu misericordia. Por Jesucristo, nuestro
Señor. Amén.`}},{source:"icergua",title:"XV DOMINGO DEL TIEMPO ORDINARIO",aliases:["XV DOMINGO DEL TIEMPO ORDINARIO","15 domingo del tiempo ordinario","ordinary time 15 sunday"],fields:{entranceAntiphon:`Yo aparezco ante ti con la justicia,
y me saciaré mientras se manifestará tu gloria.`,collect:`Señor, tú que iluminas a los extraviados con la luz de tu Evangelio
para que vuelvan al camino de la verdad, concede a cuantos nos
llamamos cristianos imitar fielmente a Cristo y rechazar lo que
pueda alejarnos de él. Por nuestro Señor Jesucristo, tu Hijo, que
siendo Dios vive y reina contigo, en la unidad del Espíritu Santo,
por los siglos de los siglos. Amén.`,offerings:`Mira bondadosamente, Señor, las ofre ndas de tu Iglesia suplicante,
y conviértelas en alimento espi ritual que ayude a crecer en
santidad a todos tus fieles. Por Jesucristo, nuestro Señor. Amén.`,communionAntiphon:`Hasta el gorrión ha encontrado una casa;
la golondrina, un nido donde colocar sus polluelos:
tus altares, Señor del universo, Rey y Dios mío.
Dichosos los que viven en tu casa, alabándote siempre.

O bien:
El que come mi carne y bebe mi sangre habita en mí y yo en él, dice el Señor.`,postCommunion:`Te suplicamos, Señor, que esta Eucaristía que hemos recibido, nos
ayude a amarte más y a servirte mejor cada día. Por Jesucristo,
nuestro Señor. Amén.`}},{source:"icergua",title:"XVI DOMINGO DEL TIEMPO ORDINARIO",aliases:["XVI DOMINGO DEL TIEMPO ORDINARIO","16 domingo del tiempo ordinario","ordinary time 16 sunday"],fields:{entranceAntiphon:`Dios es mi auxilio,
el Señor sostiene mi vida.
Te ofreceré un sacrificio voluntario
dando gracias a tu nombre, que es bueno.`,collect:`Míranos, Señor, con amor y multiplica en nosotros los dones de tu
gracia para que, llenos de fe, esperanza y caridad, permanezcamos
siempre fieles en el cumplimiento de tus mandatos. Por nuestro
Señor Jesucristo. Amén.`,offerings:`Dios nuestro, que con la muerte de tu Hijo llevaste a término y
perfección los sacrificios de la an tigua alianza, acepta y bendice
estos dones, como aceptaste y bendijis te los de Abel, para que lo
que cada uno te ofrece, sea de provecho para la salvación de
todos. Por Jesucristo, nuestro Señor. Amén.`,communionAntiphon:`Ha hecho maravillas memorables,
el Señor es piadoso y clemente.
Él da alimento a los que lo temen.

O bien:
Mira, estoy a la puerta y llamo, dice el Señor.
Si alguien escucha mi voz y abre la puerta,
entraré en su casa y cenaré con él y él conmigo.`,postCommunion:`Señor, tú que nos has concedido participar en esta Eucaristía,
míranos con bondad y fortalécenos, para poder vivir como hijos
tuyos. Por Jesucristo, nuestro Señor. Amén.`}},{source:"icergua",title:"XVII DOMINGO DEL TIEMPO ORDINARIO",aliases:["XVII DOMINGO DEL TIEMPO ORDINARIO","17 domingo del tiempo ordinario","ordinary time 17 sunday"],fields:{entranceAntiphon:`Dios vive en su santa morada.
Dios, el que hace habitar juntos en su casa,
él mismo dará fuerza y poder a su pueblo.`,collect:`Padre santo y todopoderoso, protector de los que en ti confían, ten
misericordia de nosotros y enséñanos a usar con sabiduría de los
bienes de la tierra, a fin de qu e no nos impidan alcanzar los del
cielo. Por nuestro Señor Jesucristo, tu Hijo, que siendo Dios vive y
reina contigo, en la unidad del Espíritu Santo, por los siglos de los
siglos. Amén.`,offerings:`Acepta, Señor, estos dones que tu generosidad ha puesto en
nuestras manos, y concédenos que es te sacrificio santifique toda
nuestra vida y nos conduzca a la felicidad eterna. Por Jesucristo,
nuestro Señor. Amén.`,communionAntiphon:`Bendice, alma mía, al Señor
y no olvides sus beneficios.

O bien:
Dichosos los misericordiosos, porque ellos alcanzarán misericordia.
Dichosos los limpios de corazón, porque ellos verán a Dios.`,postCommunion:`Señor, que esta Eucaristía, memorial de la muerte y resurrección de
tu Hijo, nos ayude a corresponder al don inefable de su amor y a
procurar cada día nuestra salvación eterna. Por Jesucristo, nuestro
Señor. Amén.`}},{source:"icergua",title:"XVIII DOMINGO DEL TIEMPO ORDINARIO",aliases:["XVIII DOMINGO DEL TIEMPO ORDINARIO","18 domingo del tiempo ordinario","ordinary time 18 sunday"],fields:{entranceAntiphon:`Dios mío, ven en mi auxilio;
Señor, date prisa en socorrerme.
Que tú eres mi auxilio y mi liberación.
Señor, no tardes.`,collect:`Señor, tú que eres nuestro creador y quien amorosamente dispone
toda nuestra vida, renuévanos conforme a la imagen de tu Hijo
ayúdanos a conservar siempre tu gracia. Por nuestro Señor
Jesucristo, tu Hijo, que siendo Dios vive y reina contigo, en la
unidad del Espíritu Santo, por los siglos de los siglos. Amén.`,offerings:`Santifica, Señor, estos dones y por medio del sacrificio de tu Hijo,
transforma toda nuestra vida en una continua ofrenda. Por
Jesucristo, nuestro Señor. Amén.`,communionAntiphon:`Señor, nos diste el pan del cielo,
lleno de toda delicia y grato a cualquier gusto.

O bien:
Yo soy el pan de vida.
El que viene a mí no tendrá hambre
y el que cree en mí no tendrá sed jamás, dice el Señor.`,postCommunion:`Protege, Señor, continuamente a quienes renuevas y fortaleces con
esta Eucaristía y hazlos participar de la salvación eterna. Por
Jesucristo, nuestro Señor. Amén.`}},{source:"icergua",title:"XIX DOMINGO DEL TIEMPO ORDINARIO",aliases:["XIX DOMINGO DEL TIEMPO ORDINARIO","19 domingo del tiempo ordinario","ordinary time 19 sunday"],fields:{entranceAntiphon:`Piensa, Señor, en tu alianza,
no olvides sin remedio la vida de tus pobres.
Levántate, oh, Dios, defiende tu causa,
no olvides las voces de los que acuden a ti.`,collect:`Dios eterno y todopoderoso a quien confiadamente podemos
llamar Padre nuestro, haz crecer en nuestros corazones el espíritu
de hijos adoptivos tuyos, para que podamos gozar, después de
esta vida, de la herencia que nos has prometido. Por nuestro Señor
Jesucristo, tu Hijo, que siendo Dios vive y reina contigo, en la
unidad del Espíritu Santo, por los siglos de los siglos. Amén.`,offerings:`Acepta, Señor, con bondad, estos dones que has puesto en manos
de tu Iglesia, y con tu poder conviértelos en el sacramento de
nuestra salvación. Por Jesucristo nuestro Señor. Amén.`,communionAntiphon:`Glorifica al Señor, Jerusalén,
que te sacia con flor de harina.

O bien:
El pan que yo daré es mi carne para vida del mundo, dice el Señor.`,postCommunion:`Que la recepción de esta Eucaristía nos confirme, Señor, en tu
amor y nos haga participar dde la vida eterna. Por Jesucristo,
nuestro Señor. Amén.`}},{source:"icergua",title:"XX DOMINGO DEL TIEMPO ORDINARIO",aliases:["XX DOMINGO DEL TIEMPO ORDINARIO","20 domingo del tiempo ordinario","ordinary time 20 sunday"],fields:{entranceAntiphon:`Fíjate, oh, Dios, escudo nuestro;
mira el rostro de tu Ungido,
porque vale más un día en tus atrios que mil en mi casa.`,collect:`Enciende, Señor, nuestros corazones con el fuego de tu amor a fin
de que, amándote en todo y sobr e todo, podamos obtener aquellos
bienes que no podemos ni siquiera im aginar y has prometido a los
que te aman. Por nuestro Señor Jesucristo, tu Hijo, que siendo Dios
vive y reina contigo, en la unidad de l Espíritu Santo, por los siglos
de los siglos. Amén.`,offerings:`Acepta, Señor, los dones que te presentamos para esta Eucaristía a
fin de que, a cambio de ofrecerte lo que tú nos has dado, podamos
recibir de ti, tu misma vida. Por Jesucristo, nuestro Señor. Amén.`,communionAntiphon:`Del Señor viene la misericordia,
la redención copiosa.

O bien:
Yo soy el pan vivo que ha bajado del cielo, dice el Señor;
el que coma de este pan vivirá para siempre.`,postCommunion:`Tú que nos hecho partícipes de la v i d a d e C r i s t o e n e s t e
sacramento, transfórmanos, Señor, a imagen de tu Hijo, para que
participemos también de su gloria en el cielo. Por Jesucristo,
nuestro Señor. Amén.`}},{source:"icergua",title:"XXI DOMINGO DEL TIEMPO ORDINARIO",aliases:["XXI DOMINGO DEL TIEMPO ORDINARIO","21 domingo del tiempo ordinario","ordinary time 21 sunday"],fields:{entranceAntiphon:`Inclina tu oído, Señor, escúchame.
Salva a tu siervo que confía en ti.
Piedad de mí, Señor,
que a ti te estoy llamando todo el día.`,collect:`Dios nuestro, tú que puedes da rnos un mismo querer y un mismo
sentir, concédenos a todos amar lo que nos mandas y anhelar lo
que nos prometes para que, en medio de las preocupaciones de
esta vida, pueda encontrar nuestro corazón la felicidad verdadera.
Por nuestro Señor Jesucristo, tu Hijo, que siendo Dios vive y reina
contigo, en la unidad del Espíritu Santo, por los siglos de los
siglos. Amén.`,offerings:`Dios nuestro, que por medio de un sacrificio único, el de Cristo en
la Cruz, nos has adoptado como hijos tuyos, concede siempre a tu
Iglesia el don de la unidad y de la paz. Por Jesucristo, nuestro
Señor. Amén.`,communionAntiphon:`La tierra se sacia de tu acción fecunda, Señor,
para sacar pan de los campos
y vino que alegre el corazón del hombre.

O bien:
El que come mi carne y bebe mi sangre tiene vida eterna,
y yo lo resucitaré en el último día, dice el Señor.`,postCommunion:`Completa, Señor, en nosotros la obra redentora de tu amor y danos
la fortaleza y generosidad necesarias para que podamos cumplir en
todo tu santa voluntad. Por Jesucristo, nuestro Señor. Amén.`}},{source:"icergua",title:"XXII DOMINGO DEL TIEMPO ORDINARIO",aliases:["XXII DOMINGO DEL TIEMPO ORDINARIO","22 domingo del tiempo ordinario","ordinary time 22 sunday"],fields:{entranceAntiphon:`Piedad de mí, Señor;
que a ti te estoy llamando todo el día,
porque tú, Señor, eres bueno y clemente,
rico en misericordia con los que te invocan.`,collect:`Dios misericordioso, de quien pr ocede todo lo bueno, inflámanos
con tu amor y acércanos más a ti a fin de que podamos crecer en tu
gracia y perseveremos en ella. Por nuestro Señor Jesucristo.
Amén.`,offerings:`Acepta, Señor, los dones que te pr esentamos y realiza en nosotros
con el poder de tu Espíritu, la obra redentora que se actualiza en
esta Eucaristía. Por Jesucristo, nuestro Señor. Amén.`,communionAntiphon:`Qué bondad tan grande, Señor,
reservas para los que te temen.

O bien:
Bienaventurados los que trabajan por la paz,
porque ellos serán llamados hijos de Dios.
Bienaventurados los perseguidos por causa de la justicia,
porque de ellos es el reino de los cielos.`,postCommunion:`Te rogamos, Señor, que este sacramento con que nos has
alimentado, nos haga crecer en tu amor y nos impulse a servirte en
nuestro prójimo. Por Jesucristo, nuestro Señor. Amén.`}},{source:"icergua",title:"XXIII DOMINGO DEL TIEMPO ORDINARIO",aliases:["XXIII DOMINGO DEL TIEMPO ORDINARIO","23 domingo del tiempo ordinario","ordinary time 23 sunday"],fields:{entranceAntiphon:`Señor, tú eres justo,
tus mandamientos son rectos.
Trata con misericordia a tu siervo.`,collect:`Señor, que te has dignado redimir nos y hacernos hijos tuyos,
míranos siempre con amor de Padre y haz que cuantos creemos en
Cristo, obtengamos la verdadera lib ertad y la participación en tu
Reino. Por nuestro Señor Jesucristo. Amén.`,offerings:`Dios nuestro, fuente de la paz y del amor sincero, concédenos
glorificarte por estas ofrendas, y unirnos fielmente a ti por la
participación
en esta Eucaristía. Por Jesucristo, nuestro Señor. Amén.`,communionAntiphon:`Como busca la cierva corrientes de agua,
así mi alma te busca a ti, Dios mío;
mi alma tiene sed de Dios, del Dios vivo.

O bien:
Yo soy la luz del mundo;
el que me sigue no camina en tinieblas,
sino que tendrá la luz de la vida, dice el Señor.`,postCommunion:`Tú que nos has instruido con tu palabra y alimentado con tu
Eucaristía, concédenos, Señor, aprovechar estos dones para que
vivamos unidos a tu Hijo y partic ipemos de su vida inmortal. Por
Jesucristo, nuestro Señor. Amén.`}},{source:"icergua",title:"XXIV DOMINGO DEL TIEMPO ORDINARIO",aliases:["XXIV DOMINGO DEL TIEMPO ORDINARIO","24 domingo del tiempo ordinario","ordinary time 24 sunday"],fields:{entranceAntiphon:`Señor, da la paz a los que esperan en ti,
y saca veraces a tus profetas;
escucha la súplica de tus siervos
y de tu pueblo Israel.`,collect:`Míranos, Señor, con ojos de misericordia y haz que experimentemos
vivamente tu amor para que podamos servirte con todas nuestras
fuerzas. Por nuestro Señor Jesucristo, tu Hijo, que siendo Dios vive
y reina contigo, en la unidad del Es píritu Santo, por los siglos de
los siglos. Amén.`,offerings:`Acepta, Señor, con bondad, los dones y plegarias de tu pueblo y
haz que lo que cada uno ofrece en tu honor, ayude a la salvación de
todos. Por Jesucristo, nuestro Señor. Amén.`,communionAntiphon:`Qué inapreciable es tu misericordia, oh, Dios.
Los humanos se acogen a la sombra de tus alas.

O bien:
El cáliz de la bendición que bendecimos
es comunión de la Sangre de Cristo;
el pan que partimos
es participación en el Cuerpo del Señor.`,postCommunion:`Que la gracia de esta comuni ón nos transforme, Señor, tan
plenamente, que no sea ya nuestro egoísmo, sino tu amor, el que
impulse, de ahora en adelante, nuestra vida. Por Jesucristo,
nuestro Señor. Amén.`}},{source:"icergua",title:"XXV DOMINGO DEL TIEMPO ORDINARIO",aliases:["XXV DOMINGO DEL TIEMPO ORDINARIO","25 domingo del tiempo ordinario","ordinary time 25 sunday"],fields:{entranceAntiphon:`Yo soy la salvación del pueblo, dice el Señor.
Cuando me invoquen en la tribulación,
los escucharé y seré para siempre su Señor.`,collect:`Dios nuestro, que en el amor a ti y a nuestro prójimo has querido
resumir toda tu ley, concédenos descubrirte y amarte en nuestros
hermanos para que podamos alcanzar la vida eterna. Por nuestro
Señor Jesucristo, tu Hijo, que sie ndo Dios vive y reina contigo, en
la unidad del Espíritu Santo, por los siglos de los siglos. Amén.`,offerings:`Acepta, Señor, los dones que te presentamos a fin de que, por
medio de esta Eucaristía, podamos obtener las gracias de la
redención. Por Jesucristo, nuestro Señor. Amén.`,communionAntiphon:`Tú, Señor, promulgas tus decretos
para que se observen exactamente;
ojalá esté firme mi camino para cumplir tus consignas.

O bien:
Yo soy el Buen Pastor, dice el Señor;
conozco a mis ovejas, y las mías me conocen.`,postCommunion:`Concede siempre tu ayuda, Señor, a quienes has alimentado con la
Eucaristía, a fin de que la gracia recibida en este sacramento,
transforme continuamente nuestra vida. Por Jesucristo, nuestro
Señor. Amén.`}},{source:"icergua",title:"XXVI DOMINGO DEL TIEMPO ORDINARIO",aliases:["XXVI DOMINGO DEL TIEMPO ORDINARIO","26 domingo del tiempo ordinario","ordinary time 26 sunday"],fields:{entranceAntiphon:`Cuanto has hecho con nosotros, Señor, es un castigo merecido,
porque hemos pecado contra ti
y no hemos obedecido tus mandamientos;
pero da gloria a tu nombre
y trátanos según tu gran misericordia.`,collect:`Dios nuestro, que con tu perdón y tu misericordia, nos das la
prueba más delicada de tu omnipot encia, apiádate de nosotros,
pecadores, para que no desfallezcamos en la lucha por alcanzar la
vida nueva que nos has prometido. Por nuestro Señor Jesucristo,
tu Hijo, que siendo Dios vive y reina contigo, en la unidad del
Espíritu Santo, por los siglos de los siglos. Amén.`,offerings:`Acepta, Padre misericordioso, nuest ros dones y conviértelos en el
Cuerpo y la Sangre de tu Hijo, fu ente de toda bendición para tu
Iglesia. Por Jesucristo, nuestro Señor. Amén.`,communionAntiphon:`Recuerda la palabra que diste a tu siervo, Señor,
de la que hiciste mi esperanza;
este es mi consuelo en la aflicción.

O bien:
En esto hemos conocido el amor de Dios:
en que él dio su vida por nosotros.
También nosotros debemos dar nuestra vida por los hermanos.`,postCommunion:`Que esta Eucaristía renueve, Señor, nuestro cuerpo y nuestro
espíritu a fin de que podamos participar de la herencia gloriosa de
tu Hijo, cuya muerte hemos anunciado y compartido. Por
Jesucristo, nuestro Señor. Amén.`}},{source:"icergua",title:"XXVII DOMINGO DEL TIEMPO ORDINARIO",aliases:["XXVII DOMINGO DEL TIEMPO ORDINARIO","27 domingo del tiempo ordinario","ordinary time 27 sunday"],fields:{entranceAntiphon:`A tu poder, Señor, está sometido el mundo entero;
nadie puede oponerse a ti.
Tú creaste el cielo y la tierra
y las maravillas todas que existen bajo el cielo.
Tú eres Señor del universo.`,collect:`Padre lleno de amor, que nos concedes siempre más de lo que
merecemos y deseamos, perdona misericordiosamente nuestras
ofensas y otórganos aquellas gracias que no hemos sabido pedirte
y tú sabes que necesitamos. Por nuestro Señor Jesucristo, tu Hijo,
que siendo Dios vive y reina contigo, en la unidad del Espíritu
Santo, por los siglos de los siglos. Amén.`,offerings:`Acepta, Señor, este sacrificio de alabanza que tú mismo instituiste,
y realiza en nosotros la obra de santificación que con su muerte
nos mereció tu Hijo, que vive y reina por los siglos de los siglos.
Amén.`,communionAntiphon:`El Señor es bueno para quienes esperan en él,
para quien lo busca.

O bien:
Porque el pan es uno,
nosotros, siendo muchos, formamos un solo cuerpo,
pues todos comemos del mismo pan
y participamos del mismo cáliz.`,postCommunion:`Que esta comunión, Señor, sacie nuestra hambre y nuestra sed de
ti y nos transforme en tu Hijo, Jesucristo, que vive y reina por los
siglos de los siglos. Amén.`}},{source:"icergua",title:"XXVIII DOMINGO DEL TIEMPO ORDINARIO",aliases:["XXVIII DOMINGO DEL TIEMPO ORDINARIO","28 domingo del tiempo ordinario","ordinary time 28 sunday"],fields:{entranceAntiphon:`Si llevas cuenta de los delitos, Señor,
¿quién podrá resistir?
Pero de ti procede el perdón, Dios de Israel.`,collect:`Te pedimos, Señor, que tu gracia nos inspire y acompañe siempre
para que podamos descubrirte en todos y amarte y servirte en cada
uno. Por nuestro Señor Jesucristo, tu Hijo, que siendo Dios vive y
reina contigo, en la unidad del Espíritu Santo, por los siglos de los
siglos. Amén.`,offerings:`Acepta, Señor, nuestras ofrendas y concédenos que esta Eucaristía
nos haga partícipes de la gloria de tu Reino. Por Jesucristo,
nuestro Señor. Amén.`,communionAntiphon:`Los ricos empobrecen y pasan hambre;
los que buscan al Señor no carecen de nada.

O bien:
Cuando se manifieste el Señor,
seremos semejantes a él,
porque lo veremos tal cual es.`,postCommunion:`Te pedimos, Señor, humildemente, que el Cuerpo y la Sangre de tu
Hijo que hemos recibido en alim ento, nos comuniquen su misma
vida. Por Jesucristo, nuestro Señor. Amén.`}},{source:"icergua",title:"XXIX DOMINGO DEL TIEMPO ORDINARIO",aliases:["XXIX DOMINGO DEL TIEMPO ORDINARIO","29 domingo del tiempo ordinario","ordinary time 29 sunday"],fields:{entranceAntiphon:`Yo te invoco porque tú me respondes, Dios mío;
inclina el oído y escucha mis palabras.
Guárdame como a las niñas de tus ojos,
a la sombra de tus alas escóndeme.`,collect:`Dios todopoderoso y eterno, haz que nuestra voluntad sea siempre
dócil a la tuya y que te sirvam os con un corazón sincero. Por
nuestro Señor Jesucristo, tu Hijo, que siendo Dios vive y reina
contigo, en la unidad del Espíritu Santo, por los siglos de los
siglos. Amén.`,offerings:`Santifica, Señor, estos dones que con sincera voluntad te
presentamos, y por medio de esta Eucaristía, dígnate purificarnos y
renovarnos. Por Jesucristo nuestro Señor. Amén.`,communionAntiphon:`Los ojos del Señor están puestos en quien lo teme,
en los que esperan su misericordia,
para librar sus vidas de la muerte
y reanimarlos en tiempo de hambre.

O bien:
El Hijo del hombre ha venido
para dar su vida en rescate por muchos.`,postCommunion:`Que esta celebración eucarística nos comunique, Señor, nuevas
fuerzas para cumplir tu voluntad en esta vida y nos confirme en la
esperanza de tu Reino. Por Jesucristo, nuestro Señor. Amén.`}},{source:"icergua",title:"XXX DOMINGO DEL TIEMPO ORDINARIO",aliases:["XXX DOMINGO DEL TIEMPO ORDINARIO","30 domingo del tiempo ordinario","ordinary time 30 sunday"],fields:{entranceAntiphon:`Que se alegren los que buscan al Señor.
Recurrid al Señor y a su poder,
buscad continuamente su rostro.`,collect:`Aumenta, Señor, en nosotros la fe, la esperanza y la caridad para
que cumplamos con amor tus mandamientos y podamos
conseguir, así, el cielo que nos tienes prometido. Por nuestro
Señor Jesucristo, tu Hijo, que sie ndo Dios vive y reina contigo, en
la unidad del Espíritu Santo, por los siglos de los siglos. Amén.`,offerings:`Mira, Señor, con bondad, las ofrendas que te presentamos, a fin de
que esta celebración eucarística sea para tu gloria y alabanza. Por
Jesucristo, nuestro Señor. Amén.`,communionAntiphon:`Que nos alegremos en tu salvación
y glorifiquemos el nombre de nuestro Dios.

O bien:
Cristo nos amó y se entregó por nosotros
como oblación de suave olor.`,postCommunion:`Concédenos, Señor, que este memorial de la muerte y resurrección
de tu Hijo nos haga verdaderamente morir al pecado y renacer a
una nueva vida. Por Jesucristo nuestro Señor. Amén.`}},{source:"icergua",title:"XXXI DOMINGO DEL TIEMPO ORDINARIO",aliases:["XXXI DOMINGO DEL TIEMPO ORDINARIO","31 domingo del tiempo ordinario","ordinary time 31 sunday"],fields:{entranceAntiphon:`No me abandones, Señor, Dios mío,
no te quedes lejos;
ven a prisa a socorrerme,
Señor mío, mi salvación.`,collect:`Dios omnipotente y misericordioso, de cuya mano proviene el don
de servirte y de alabarte, ay údanos a vencer cuanto pueda
separarnos de ti. Por nuestro Señor Jesucristo, tu Hijo, que siendo
Dios vive y reina contigo, en la unidad del Espíritu Santo, por los
siglos de los siglos. Amén.`,offerings:`Que este sacrificio que vamos a ofr ecerte en comunión con toda tu
Iglesia, te sea agradabl e, Señor, y nos obtenga la plenitud de tu
misericordia. Por Jesucristo, nuestro Señor. Amén.`,communionAntiphon:`Me enseñarás el sendero de la vida,
me saciarás de gozo en tu presencia, Señor.

O bien:
El Padre que vive me ha enviado,
y yo vivo por el Padre;
del mismo modo, el que me come vivirá por mí,
dice el Señor.`,postCommunion:`Continúa, Señor, en nosotros tu obra de salvación por medio de
esta Eucaristía para que, cada vez más unidos a Cristo, lleguemos
a alcanzar la plenitud de la vida eterna. Por Jesucristo, nuestro
Señor. Amén.`}},{source:"icergua",title:"XXXII DOMINGO DEL TIEMPO ORDINARIO",aliases:["XXXII DOMINGO DEL TIEMPO ORDINARIO","32 domingo del tiempo ordinario","ordinary time 32 sunday"],fields:{entranceAntiphon:`Llegue hasta ti mi súplica;
inclina tu oído a mi clamor, Señor.`,collect:`Ayúdanos, Señor, a dejar en tus manos paternales todas nuestras
preocupaciones, a fin de que podamos entregarnos con mayor
libertad a tu servicio. Por nuestro Señor Jesucristo, tu Hijo, que
siendo Dios vive y reina contigo, en la unidad del Espíritu Santo,
por los siglos de los siglos. Amén.`,offerings:`Mira, Señor, con bondad los dones que te presentamos, a fin de
que el sacramento de la muerte y resurrección de tu Hijo, nos
alcance de ti la vida verdadera
. Por Jesucristo, nuestro Señor. Amén.`,communionAntiphon:`El Señor es mi pastor, nada me falta;
en verdes praderas me hace recostar,
me conduce hacia fuentes tranquilas.

O bien:
Los discípulos reconocieron al Señor Jesús
al partir el pan.`,postCommunion:`Te damos gracias, Señor, por habernos alimentado con el Cuerpo y
la Sangre de tu Hijo y te rogamos que la fuerza del Espíritu Santo,
que nos has comunicado en este sacramento, permanezca en
nosotros y transforme toda nuestra vida. Por Jesucristo, nuestro
Señor. Amén.`}},{source:"icergua",title:"XXXIII DOMINGO DEL TIEMPO ORDINARIO",aliases:["XXXIII DOMINGO DEL TIEMPO ORDINARIO","33 domingo del tiempo ordinario","ordinary time 33 sunday"],fields:{entranceAntiphon:`Dice el Señor:
«Tengo designios de paz y no de aflicción,
me invocaréis y yo os escucharé;
os congregaré sacándoos de los países y comarcas
por donde os dispersé».`,collect:`Concédenos, Señor, tu ayuda para entregarnos fielmente a tu
servicio porque sólo en el cumplimiento de tu voluntad podremos
encontrar la felicidad verdadera. Por nuestro Señor Jesucristo, tu
Hijo, que siendo Dios vive y reina contigo, en la unidad del Espíritu
Santo, por los siglos de los siglos. Amén.`,offerings:`Que estos dones traídos a tu altar nos obtengan de ti, Señor y Dios
nuestro, la gracia de servirte con amor y la felicidad de tu Reino.
Por Jesucristo, nuestro Señor. Amén.`,communionAntiphon:`Para mí lo bueno es estar junto a Dios,
hacer del Señor Dios mi refugio.

O bien:
En verdad os digo:
todo cuanto pidáis en la oración,
creed que os lo han concedido y lo obtendréis,
dice el Señor.`,postCommunion:`Señor, que nuestra participación en esta Eucaristía que tu Hijo nos
mandó celebrar como memorial suyo, nos una siempre con el
vínculo de tu amor. Por Jesucristo, nuestro Señor. Amén.`,prayerOverPeople:`Envía Señor, tu bendición sobre estos fieles tuyos que han
conmemorado la muerte de tu Hijo y esperan resucitar con él;
concédeles tu perdón y tu consuelo, fortalece su fe y hazlos
partícipes de la eterna salvación. Por Jesucristo, nuestro Señor.

R. Amén.
Luego se sale en silencio del templo.`}},{source:"textosliturgia",title:"San Felipe Neri, presbítero",aliases:["San Felipe Neri, presbítero","San Felipe de Neri, presbítero","Felipe Neri","Philip Neri"],fields:{entranceAntiphon:"El amor de Dios ha sido derramado en nuestros corazones por el mismo Espíritu que habita en nosotros. Aleluya.",collect:"Oh Dios, que no cesas de enaltecer a tus siervos con la gloria de la santidad, concédenos, por tu bondad, que el Espíritu Santo encienda en nosotros aquel mismo fuego que atravesó admirablemente el corazón de san Felipe Neri. Por nuestro Señor Jesucristo.",offerings:"Al ofrecerte, Señor, este sacrificio de alabanza, te rogamos que, a ejemplo de san Felipe Neri nos consagremos siempre con entusiasmo a glorificar tu nombre y a servir al prójimo. Por Jesucristo, nuestro Señor.",communionAntiphon:"Como el Padre me ha amado, así os he amado yo, dice el Señor; permaneced en mi amor. Aleluya.",postCommunion:"Alimentados con las delicias del cielo, te pedimos, Señor, que, a imitación de san Felipe Neri, procuremos siempre aquello que nos asegura vida verdadera. Por Jesucristo, nuestro Señor."}},{source:"textosliturgia",title:"San Justino, mártir",aliases:["San Justino, mártir","San Justino Mártir","Justino, mártir","Justin Martyr"],fields:{entranceAntiphon:"Me han cavado fosas los insolentes ignorando tu voluntad; pero yo comentaré tus preceptos ante los reyes y no me avergonzaré.",collect:"Señor, tú que has enseñado a san Justino a encontrar en la locura de la cruz la incomparable sabiduría de Cristo, concédenos, por intercesión de tu mártir, la gracia de alejar los errores que nos cercan y de mantenernos firmes en la fe. Por nuestro Señor Jesucristo.",offerings:"Concédenos, Señor, celebrar dignamente estos misterios que defendió con valentía tu mártir san Justino. Por Jesucristo, nuestro Señor.",communionAntiphon:"Nunca entre vosotros me precié de saber cosa alguna, sino a Jesucristo, y éste crucificado.",postCommunion:"Tú que nos has reconfortado con el pan del cielo, concédenos, Señor, que, siguiendo fielmente las enseñanzas del mártir san Justino, nos mantengamos en continua acción de gracias por los dones que de ti recibimos. Por Jesucristo, nuestro Señor."}},{source:"ldhoras",title:"Santos Carlos Lwanga y compañeros, mártires",aliases:["Santos Carlos Lwanga y compañeros, mártires","Santos Carlos Luanga y compañeros, mártires","San Carlos Lwanga y compañeros","San Carlos Luanga y compañeros","Carlos Lwanga","Carlos Luanga","Mártires de Uganda"],fields:{entranceAntiphon:`El Señor probó a sus elegidos como oro en el crisol
y los aceptó como un holocausto.
Por eso brillarán cuando Dios los visite,
porque la gracia y la misericordia son para sus elegidos. Aleluya.`,collect:`Dios nuestro, que hiciste de la sangre de tus mártires
semilla de nuevos cristianos,
concédenos bondadosamente que el campo de tu Iglesia,
regado por la sangre de san Carlos Lwanga y sus compañeros,
te brinde siempre una generosa cosecha.
Por nuestro Señor Jesucristo, tu Hijo,
que vive y reina contigo en la unidad del Espíritu Santo,
y es Dios, por los siglos de los siglos.`,offerings:`Al presentar nuestros dones, Señor,
te pedimos que, así como diste a tus mártires
la gracia de morir antes que pecar,
nos concedas también a nosotros,
servirte en tu altar con total entrega.
Por Jesucristo, nuestro Señor.`,communionAntiphon:"Es valiosa a los ojos del Señor la muerte de sus santos. Aleluya.",postCommunion:`Te pedimos, Padre, que estos divinos sacramentos,
recibidos en la conmemoración de tus santos mártires,
como a ellos les dieron el valor para superar los tormentos,
a nosotros nos concedan, en medio de las adversidades,
la perseverancia en la fe y en la caridad.
Por Jesucristo, nuestro Señor.`}},{source:"ldhoras",title:"Santísimo Cuerpo y Sangre de Cristo",aliases:["Santísimo Cuerpo y Sangre de Cristo","El Santísimo Cuerpo y Sangre de Cristo","Corpus Christi","Cuerpo y Sangre de Cristo","De la Santísima Eucaristía","Eucaristía"],fields:{entranceAntiphon:`El Señor los alimentó con flor de harina
y los sació con miel silvestre.`,communionAntiphon:`El que come mi carne y bebe mi sangre,
permanece en mí y yo en él, dice el Señor.`}},{source:"textosliturgia",title:"Sagrado Corazón de Jesús",aliases:["Sagrado Corazón de Jesús","El Sagrado Corazón de Jesús","Sacratísimo Corazón de Jesús"],fields:{entranceAntiphon:"Los proyectos de su Corazón subsisten de edad en edad, para librar sus vidas de la muerte y reanimarlos en tiempo de hambre.",collect:`Dios todopoderoso, concede a quienes, alegrándonos en el Corazón de tu Hijo amado, recordamos los inmensos beneficios de su amor hacia nosotros, merecer recibir una inagotable abundancia de gracia de aquella fuente celestial de los dones. Por nuestro Señor Jesucristo.

O bien:
Oh, Dios, que en el Corazón de tu Hijo, herido por nuestros pecados, te has dignado regalarnos misericordiosamente infinitos tesoros de amor, te pedimos que, al rendirle el homenaje de nuestra piedad, manifestemos también una conveniente reparación. Por nuestro Señor Jesucristo.`,offerings:"Mira, Señor, el inefable amor del Corazón de tu Hijo predilecto para que los dones que te presentamos sean ofrenda aceptable a ti y expiación de nuestras culpas. Por Jesucristo, nuestro Señor.",communionAntiphon:`Dice el Señor: «El que tenga sed que venga a mí, y que beba el que cree en mí: de sus entrañas manarán ríos de agua viva».

O bien:
Uno de los soldados, con la lanza, le traspasó el costado, y al punto salió sangre y agua.`,postCommunion:"Señor, que el sacramento de la caridad encienda en nosotros el fuego del amor santo por el que, cautivados siempre por tu Hijo, aprendamos a reconocerle en los hermanos. Él, que vive y reina por los siglos de los siglos."}},{source:"icergua",title:"San Bernabé, apóstol",aliases:["San Bernabé, apóstol","Bernabé","Barnabas","Barnabé"],fields:{entranceAntiphon:"Dichoso san Bernabé, digno de ser contado entre los Apóstoles, pues era un hombre bueno, lleno del Espíritu Santo y de fe.",collect:"Señor, tú que llenaste de fe y de amor al apóstol san Bernabé y lo destinaste a predicar la salvación a los paganos, ayúdanos, por su intercesión, a dar a conocer a todos tu Evangelio por medio de nuestra vida y de nuestra palabra. Por nuestro Señor Jesucristo.",offerings:"Que el sacrificio que vamos a ofrecerte encienda, Señor, en nosotros el amor que impulsó a san Bernabé, apóstol, a difundir la luz del Evangelio. Por Jesucristo, nuestro Señor.",communionAntiphon:"Ya no los llamaré siervos, dice el Señor, porque el siervo no sabe lo que hace su amo. A ustedes los he llamado amigos, porque les he dado a conocer todo lo que he oído a mi Padre.",postCommunion:"Te suplicamos, Señor, por intercesión de san Bernabé, que esta Eucaristía, en la que hemos recibido a Cristo sacramentalmente, nos haga partícipes de la vida nueva del Reino. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"Santos Tomás Moro y Juan Fisher, mártires",aliases:["Santos Tomás Moro y Juan Fisher","Tomás Moro y Juan Fisher","Juan Fisher y Tomás Moro","Thomas More and John Fisher","Tomás Moro","Juan Fisher"],fields:{collect:"Te pedimos, Señor, que nos concedas imitar la integridad de vida y la constancia en la fe de los santos mártires Tomás Moro y Juan Fisher, cuyo martirio recordamos, y haznos instrumentos de reconciliación entre toda la humanidad. Por nuestro Señor Jesucristo.",offerings:"Recibe, Padre santo, las ofrendas que te presentamos en honor de tus santos Tomás Moro y Juan Fisher, y concédenos permanecer firmes en la confesión de tu nombre y en el testimonio de tu amor. Por Jesucristo, nuestro Señor.",postCommunion:"Señor y Dios nuestro, que admirablemente ilustraste el misterio de la cruz con el ejemplo de los santos mártires Tomás Moro y Juan Fisher, concédenos la gracia, ya que hemos sido alimentados con el Cuerpo de Cristo, de seguirlo con fidelidad en la Iglesia, para la salvación de todos. Por Jesucristo, nuestro Señor."}},{source:"textosliturgia",title:"Natividad de san Juan Bautista",aliases:["Natividad de san Juan Bautista","Nacimiento de san Juan Bautista","Nacimiento de Juan Bautista"],fields:{entranceAntiphon:"Surgió un hombre enviado por Dios, que se llamaba Juan: este venía como testigo, para dar testimonio de la luz, para preparar al Señor un pueblo bien dispuesto.",collect:"Oh, Dios, que suscitaste a san Juan Bautista para que preparase a Cristo el Señor una muchedumbre bien dispuesta, concede a tu pueblo el don de la alegría espiritual y dirige los corazones de todos los fieles por el camino de la salvación y de la paz. Por nuestro Señor Jesucristo.",offerings:"Colmamos de dones tu altar, Señor, para celebrar con el honor debido la natividad de quien proclamó que el Salvador del mundo ya estaba próximo y lo mostró presente entre los hombres. Por Jesucristo, nuestro Señor.",communionAntiphon:"Por la entrañable misericordia de nuestro Dios, nos visitará el Sol que nace de lo alto.",postCommunion:"Alimentados con el convite del Cordero celestial, te pedimos, Señor, que tu Iglesia, llena de gozo por el nacimiento de san Juan Bautista, reconozca al autor de su nueva vida en aquel cuya venida inminente anunció. Por Jesucristo, nuestro Señor."}},{source:"usccb",title:"Natividad de san Juan Bautista",aliases:["Natividad de san Juan Bautista","Nacimiento de san Juan Bautista","Nacimiento de Juan Bautista"],fields:{entranceAntiphon:`Vino un hombre enviado por Dios, que se llamaba Juan.
Él vino para dar testimonio de la luz y prepararle al Señor un pueblo dispuesto a recibirlo.`,communionAntiphon:`Por la entrañable misericordia de nuestro Dios,
nos ha visitado el sol que nace de lo alto.`}},{source:"icergua",title:"San Ireneo, obispo y mártir",aliases:["San Ireneo","Ireneo","Ireneo de Lyon","Irenaeus"],fields:{collect:"Señor, tú que llamaste al obispo san Ireneo a defender tu verdad y a traer la paz a tu Iglesia, aumenta en nosotros la fe y la caridad a fin de que nos esforcemos siempre por fomentar la unidad y la concordia en el mundo. Por nuestro Señor Jesucristo.",offerings:"Que esta Eucaristía con la que celebramos, Señor, la fiesta de san Ireneo, te glorifique a ti y aumente en nosotros el amor a la verdad, a fin de que permanezcamos firmes en la fe y en la unidad de tu Iglesia. Por Jesucristo, nuestro Señor.",postCommunion:"Que la participación en este sacramento nos comunique, Señor, la fe viva por la que gloriosamente murió san Ireneo, a fin de que podamos vivir como verdaderos discípulos de Cristo, que vive y reina por los siglos de los siglos."}},{source:"icergua",title:"Santos Pedro y Pablo, apóstoles",aliases:["Santos Pedro y Pablo, apóstoles","San Pedro y San Pablo, apóstoles","Santos Pedro y Pablo","San Pedro y San Pablo","Pedro y Pablo","Peter and Paul"],fields:{entranceAntiphon:`Éstos son los que, viviendo en nuestra carne,
con su sangre fecundaron a la Iglesia,
bebieron del cáliz del Señor,
y fueron hechos amigos suyos.`,collect:"Dios nuestro, que nos llenas de alegría con la solemnidad de los santos apóstoles Pedro y Pablo, haz que tu Iglesia se mantenga siempre fiel a las enseñanzas de estos Apóstoles, de quienes recibió el primer anuncio de la fe. Por nuestro Señor Jesucristo.",offerings:"Acepta, Señor, los dones que te presentamos y, por intercesión de san Pedro y san Pablo, concédenos celebrar este sacrificio íntimamente unidos a ti en la fe y en el amor. Por Jesucristo, nuestro Señor.",communionAntiphon:`Dijo Pedro a Jesús: Tú eres el Mesías, el Hijo de Dios vivo.
Jesús le respondió: Tú eres Pedro
y sobre esta piedra edificaré mi Iglesia.`,postCommunion:"Tú que nos has alimentado con esta Eucaristía, haz, Señor, que la participación perseverante en el memorial de la muerte y resurrección de tu Hijo, y la fidelidad a la doctrina de los Apóstoles, nos conserven unidos en tu amor. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"Santo Tomás, apóstol",aliases:["Santo Tomás, apóstol","Santo Tomás","Tomás, apóstol","Thomas apostle"],fields:{entranceAntiphon:`Tú eres mi Dios; te doy gracias, Dios mío, yo te ensalzo.
Te alabo, porque tú eres mi salvación.`,collect:"Padre todopoderoso, tú que concediste a santo Tomás reconocer a Cristo como su Señor y su Dios; por intercesión de este apóstol, haz que crezcamos en la fe, para que creyendo firmemente en tu Hijo Jesucristo, podamos participar de su vida divina. Por nuestro Señor Jesucristo.",offerings:"Acepta, Señor, el sacrificio de alabanza que vamos a ofrecerte en esta festividad de santo Tomás, apóstol, y conserva en nosotros los dones de tu redención. Por Jesucristo, nuestro Señor.",communionAntiphon:`Trae tu mano y toca la señal de los clavos;
y no seas incrédulo, sino creyente.`,postCommunion:"Padre misericordioso, que nos has alimentado con el Cuerpo y la Sangre de tu Hijo, haz que, junto con el apóstol Tomás, reconozcamos en Cristo a nuestro Señor y a nuestro Dios y demos testimonio con la vida de lo que creemos. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"San Benito, abad",aliases:["San Benito, abad","San Benito","San Benito, abad, patrono de Europa","Benito abad","Benedict abbot"],fields:{entranceAntiphon:`Hubo un varón de vida venerable,
bendecido por la gracia y por su nombre,
que dejando su casa y los bienes paternos,
buscando vivir sólo para Dios,
pidió el hábito de la vida monástica.`,collect:"Dios nuestro, que nos has dado en san Benito un maestro admirable de vida consagrada a ti, haz que, siguiendo su ejemplo, antepongamos tu amor a todas las cosas y procuremos el bien de los demás antes que el nuestro. Por nuestro Señor Jesucristo.",offerings:"Acepta, Señor, con bondad los dones que te presentamos en esta festividad de san Benito y haz que, a ejemplo suyo, te busquemos a ti únicamente a fin de que podamos alcanzar el don de la unidad y de la paz. Por Jesucristo, nuestro Señor.",communionAntiphon:`Éste es el administrador fiel y previsor,
a quien el Señor ha puesto al frente de su casa
para distribuir la ración de trigo en el momento oportuno.`,postCommunion:"Señor, tú que nos has alimentado con el Cuerpo y la Sangre de Cristo, haz que, a imitación de san Benito abad, te sirvamos fielmente y pongamos en práctica un sincero amor fraterno. Por Jesucristo, nuestro Señor."}},{source:"textosliturgia",title:"San Buenaventura, obispo y doctor de la Iglesia",aliases:["San Buenaventura, obispo y doctor de la Iglesia","San Buenaventura de Bagnoregio, obispo","San Buenaventura, obispo","Buenaventura de Bagnoregio","Bonaventure de Bagnoregio"],fields:{collect:"Dios todopoderoso, concede a cuantos hoy celebramos la fiesta de tu obispo san Buenaventura la gracia de aprovechar su admirable doctrina e imitar los ejemplos de su ardiente caridad. Por nuestro Señor Jesucristo."}},{source:"icergua",title:"Santa María Magdalena",aliases:["Santa María Magdalena","María Magdalena","Mary Magdalene"],fields:{entranceAntiphon:`El Señor dijo a María Magdalena:
«Ve a mis hermanos y diles:
Subo al Padre mío y Padre vuestro,
al Dios mío y Dios vuestro».`,collect:"Dios nuestro, que quisiste que santa María Magdalena fuera la primera en recibir de tu Hijo unigénito el encargo de anunciar el gozo de la resurrección, concédenos, que siguiendo su ejemplo, demos a conocer a todos que Cristo vive y nos acompaña cada día por medio de su Espíritu. Por nuestro Señor Jesucristo.",offerings:"Mira, Señor, los dones que te presentamos y acéptalos con el mismo agrado con que tu Hijo Jesucristo aceptó el homenaje de amor de María Magdalena. Por Jesucristo, nuestro Señor.",communionAntiphon:`Nos apremia el amor de Cristo
para que los que viven ya no vivan para sí,
sino para el que murió y resucitó por ellos.`,postCommunion:"Que el sacramento que hemos recibido encienda, Señor, en nosotros aquel mismo amor ardiente y fiel de santa María Magdalena a Cristo, su maestro, que vive y reina por los siglos de los siglos."}},{source:"usccb",title:"Santos Marta, María y Lázaro",aliases:["Santos Marta, María y Lázaro","Santas Marta, María y Lázaro","Marta, María y Lázaro","Martha de Bethany María de Bethany y Lazarus de Bethany"],fields:{entranceAntiphon:"Cuando entró Jesús en un poblado, una mujer, llamada Marta, lo recibió en su casa.",collect:"Dios nuestro, cuyo Hijo llamó a Lázaro del sepulcro a la vida y aceptó ser hospedado en la casa de Marta, concédenos servirlo fielmente en nuestros hermanos, para que como María merezcamos ser nutridos con la meditación de la palabra de Cristo. Él, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Al proclamar, Señor, tu obra admirable en tus santos, suplicamos humildemente a tu majestad que, así como te fueron gratos sus amorosos obsequios, así también te sea aceptable el desempeño de nuestro servicio. Por Jesucristo, nuestro Señor.",communionAntiphon:"Marta dijo a Jesús: Sí, Señor. Creo firmemente que tú eres el Mesías, el Hijo de Dios, el que tenía que venir al mundo.",postCommunion:"Señor, que la santa comunión del Cuerpo y la Sangre de tu Unigénito nos aleje de todas las cosas pasajeras, para que, a ejemplo de los santos Marta, María y Lázaro, podamos crecer en la tierra en un auténtico amor a ti y gozar en el cielo, contemplándote eternamente. Por Jesucristo, nuestro Señor."}},{source:"textosliturgia",title:"San Ignacio de Loyola, presbítero",aliases:["San Ignacio de Loyola, presbítero","San Ignacio de Loyola","Ignacio de Loyola"],fields:{entranceAntiphon:"Al nombre de Jesús toda rodilla se doble, en el cielo, en la tierra, en el abismo, y toda lengua proclame: «Jesucristo es Señor», para gloria de Dios Padre.",collect:"Oh Dios, que has suscitado en tu Iglesia a san Ignacio de Loyola para propagar la mayor gloria de tu nombre, concédenos que, combatiendo en la tierra con su protección y su ejemplo, merezcamos ser coronados con él en el cielo. Por nuestro Señor Jesucristo.",offerings:"Que te agraden, Señor Dios, las ofrendas que te presentamos en la fiesta de san Ignacio de Loyola; concédenos que estos divinos misterios, que estableciste como fuente de toda santificación, nos santifiquen también en la verdad. Por Jesucristo, nuestro Señor.",communionAntiphon:"He venido a prender fuego a la tierra, y cuánto deseo que ya esté ardiendo, dice el Señor.",postCommunion:"Señor, que el sacrificio de alabanza que te hemos ofrecido para darte gracias en honor de san Ignacio de Loyola, nos conduzca a la eterna glorificación de tu majestad. Por Jesucristo, nuestro Señor."}},{source:"textosliturgia",title:"San Alfonso María de Ligorio, obispo y doctor de la Iglesia",aliases:["San Alfonso María de Ligorio, obispo y doctor de la Iglesia","San Alfonso María Liguori, obispo","San Alfonso María de Ligorio","Alfonso María de Ligorio","Alphonsus María Liguori"],fields:{collect:"Oh Dios, que suscitas continuamente en tu Iglesia nuevos ejemplos de virtud, concédenos seguir las huellas del obispo san Alfonso María en el celo por las almas, de modo que consigamos su recompensa en el cielo. Por nuestro Señor Jesucristo.",offerings:"Señor, enciende misericordioso nuestros corazones en el fuego celestial del Espíritu, tú que concediste a san Alfonso María celebrar estos misterios ofreciéndose él mismo, por medio de ellos, como víctima santa. Por Jesucristo, nuestro Señor.",postCommunion:"Oh Dios, que hiciste a san Alfonso María fiel dispensador y predicador de este misterio tan grande, concede a tus fieles recibirlo frecuentemente y alabarte sin cesar al recibirlo. Por Jesucristo, nuestro Señor."}},{source:"textosliturgia",title:"San Juan María Vianney, presbítero",aliases:["San Juan María Vianney, presbítero","San Juan María Vianney","Juan María Vianney"],fields:{collect:"Dios de poder y misericordia, que hiciste admirable a san Juan María Vianney por su celo pastoral, concédenos por su intercesión y su ejemplo, ganar para Cristo a nuestros hermanos y alcanzar, juntamente con ellos, los premios de la vida eterna. Por nuestro Señor Jesucristo."}},{source:"textosliturgia",title:"Santa Clara, virgen",aliases:["Santa Clara, virgen","Santa Clara de Asís, virgen","Santa Clare de Assisi, virgen","Clara de Asís"],fields:{collect:"Oh Dios, que infundiste en santa Clara un profundo amor a la pobreza evangélica, concédenos por su intercesión, que, siguiendo a Cristo en la pobreza de espíritu, merezcamos llegar a contemplarte en tu reino. Por nuestro Señor Jesucristo."}},{source:"textosliturgia",title:"San Bernardo, abad y doctor de la Iglesia",aliases:["San Bernardo, abad y doctor de la Iglesia","San Bernard de Clairvaux, abad","San Bernardo de Claraval","Bernardo de Claraval"],fields:{entranceAntiphon:"El Señor colmó a san Bernardo de espíritu de inteligencia: él sirvió al pueblo de Dios con abundante doctrina.",collect:"Oh Dios, tú hiciste del abad san Bernardo, inflamado por el celo de tu casa, una lámpara ardiente y luminosa en tu Iglesia, concédenos, por su intercesión, participar de su ferviente espíritu y caminar siempre como hijos de la luz. Por nuestro Señor Jesucristo.",offerings:"Te ofrecemos, Señor, este sacramento de unidad y paz en la memoria del abad san Bernardo, que, brillante por su palabra y por sus obras, defendió con firmeza la concordia y el orden en tu Iglesia. Por Jesucristo, nuestro Señor.",communionAntiphon:"Como el Padre me ha amado, así os he amado yo, dice el Señor; permaneced en mi amor.",postCommunion:"El alimento que hemos recibido, Señor, en la celebración de san Bernardo, produzca en nosotros su fruto, para que, instruidos por su doctrina y confortados por su ejemplo, nos dejemos arrebatar por el amor de tu Verbo encarnado. Él, que vive y reina por los siglos de los siglos."}},{source:"textosliturgia",title:"San Pío X, papa",aliases:["San Pío X, papa","San Pío décimo, papa","Pío X"],fields:{collect:"Oh Dios, que, para defender la fe católica e instaurar todas las cosas en Cristo, colmaste al papa san Pío de sabiduría divina y fortaleza apostólica, concédenos, por tu bondad, que, siguiendo su ejemplo y doctrina, podamos alcanzar la recompensa eterna. Por nuestro Señor Jesucristo.",offerings:"Acepta complacido, Señor, nuestras ofrendas y concédenos que, dóciles a las enseñanzas del papa san Pío, celebremos con dignidad estos divinos misterios y los recibamos con espíritu de fe. Por Jesucristo, nuestro Señor.",postCommunion:"Al celebrar la fiesta del papa san Pío, te rogamos, Señor Dios nuestro, que por la eficacia de la mesa celestial seamos constantes en la fe y vivamos concordes en tu amor. Por Jesucristo, nuestro Señor."}},{source:"spain",title:"Santa Brígida, religiosa, patrona de Europa",aliases:["Santa Brígida, religiosa, patrona de Europa","Santa Brígida","Brígida, religiosa","Brígida de Suecia"],fields:{entranceAntiphon:`Alegrémonos todos en el Señor
al celebrar este día de fiesta en honor de santa Brígida;
los ángeles se alegran de esta fiesta
y alaban al Hijo de Dios.`,collect:"Oh, Dios, que guiaste a santa Brígida en los diversos estados de vida y le enseñaste de modo admirable la sabiduría de la cruz en la contemplación de la pasión de tu Hijo, concédenos que, siguiendo fielmente tu llamada, te busquemos en todas las cosas. Por nuestro Señor Jesucristo.",offerings:"Dios misericordioso, que en santa Brígida, destruido el hombre viejo, quisiste crear al hombre nuevo a tu imagen, concédenos, transformados del mismo modo, ofrecer este sacrificio de reconciliación, agradable a ti. Por Jesucristo, nuestro Señor.",communionAntiphon:`Has amado la justicia y odiado la impiedad:
por eso Dios, tu Dios,
te ha ungido con aceite de júbilo
entre todos tus compañeros.`,postCommunion:"Te rogamos, Dios todopoderoso, que, fortalecidos por este sacramento, aprendamos a buscarte siempre sobre todas las cosas, a ejemplo de santa Brígida, y ser portadores, ya en este mundo, de la imagen del hombre nuevo. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"Santiago, apóstol",aliases:["Santiago, apóstol","Santiago, apóstol, Patrono de España","Santiago el Mayor","Santiago “El Mayor”, apóstol","James apostle"],fields:{entranceAntiphon:`Jesús, paseando junto al mar de Galilea,
vio a Santiago, hijo de Zebedeo, y a Juan, su hermano,
que estaban repasando las redes,
y los llamó, y les puso el nombre de Boanerges,
es decir, los hijos del trueno.`,collect:"Dios todopoderoso y eterno, que quisiste que Santiago fuera el primero de entre los apóstoles en derramar su sangre por el Evangelio, fortalece a tu Iglesia con el testimonio de su martirio y defiéndela con su valiosa protección. Por nuestro Señor Jesucristo.",offerings:"Acepta, Señor, los dones que te presentamos y, por intercesión del apóstol Santiago, purifica nuestros corazones para que podamos participar dignamente del Cuerpo y de la Sangre de Cristo, que vive y reina por los siglos de los siglos.",communionAntiphon:`Bebieron el cáliz del Señor
y se hicieron amigos de Dios.`,postCommunion:"Por intercesión del apóstol Santiago, en cuya festividad hemos recibido con alegría tus santos sacramentos, concédenos, Señor, tu protección y ayuda. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"Santos Joaquín y Ana",aliases:["Santos Joaquín y Ana","San Joaquín y Santa Ana","Joaquín y Ana","Joachim and Anne"],fields:{collect:"Dios de nuestros padres, que concediste a san Joaquín y a santa Ana el privilegio de ser los padres de María, la madre del Salvador, ayúdanos, por su intercesión, a alcanzar la salvación eterna. Por nuestro Señor Jesucristo.",offerings:"Acepta, Señor, el sacrificio que vamos a ofrecerte y concédenos participar por él de la salvación prometida en Cristo, a Abraham y a su descendencia. Por Jesucristo, nuestro Señor.",postCommunion:"Padre santo, que quisiste que tu Unigénito se hiciera hermano nuestro para convertirnos en hijos tuyos, concede a quienes has alimentado con el Cuerpo y la Sangre de Cristo, un verdadero espíritu filial y una sincera caridad fraterna. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"Transfiguración del Señor",aliases:["Transfiguración","Transfiguración del Señor","La Transfiguración del Señor"],fields:{entranceAntiphon:`Se manifestó el Espíritu Santo en una nube luminosa
y se oyó la voz del Padre que dijo:
«Este es mi Hijo, el amado, en quien me complazco. Escuchadlo».`,collect:"Dios nuestro, que en la Transfiguración gloriosa de tu Hijo unigénito fortaleciste nuestra fe con el testimonio de Moisés y Elías y nos dejaste entrever la gloria que nos espera, como hijos tuyos, concédenos seguir el Evangelio de Cristo para compartir con él la herencia de tu Reino. Por nuestro Señor Jesucristo.",offerings:"Santifica, Señor, los dones que te presentamos y, por la transfiguración de tu Hijo, haz que esta Eucaristía nos purifique de todos nuestros pecados. Por Jesucristo, nuestro Señor.",communionAntiphon:`Cuando Cristo se manifieste,
seremos semejantes a él,
porque lo veremos tal cual es.`,postCommunion:"Que la comunión que hemos recibido nos asemeje, Señor, cada día más a tu Hijo, cuya gloria quisiste manifestarnos en su Transfiguración. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"San Lorenzo, diácono y mártir",aliases:["San Lorenzo, diácono y mártir","San Lorenzo mártir","San Lorenzo","Lorenzo, diácono y mártir"],fields:{entranceAntiphon:`El diácono san Lorenzo se entregó por entero al servicio de la Iglesia:
así mereció pasar el martirio
y por él subir hasta Cristo nuestro Señor.`,collect:"Dios nuestro, que hiciste resplandecer al diácono san Lorenzo por su fidelidad al servicio de los demás y su glorioso martirio, concédenos, por su intercesión, amar a Cristo como él lo amó y servirlo en los hermanos. Por nuestro Señor Jesucristo.",offerings:"Acepta, Señor, los dones que te presentamos al celebrar al diácono san Lorenzo y haz que este sacrificio eucarístico ayude a nuestra salvación. Por Jesucristo, nuestro Señor.",communionAntiphon:`El que quiera servirme, que me siga;
y donde esté yo, allí también estará mi servidor,
dice el Señor.`,postCommunion:"Que esta Eucaristía, que hemos celebrado al conmemorar la fiesta de san Lorenzo, nos haga participar, Señor, más profundamente de los frutos de la redención. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"La Asunción de la Santísima Virgen María",aliases:["La Asunción de la Santísima Virgen María","Asunción de la Santísima Virgen María","Asunción de María","Glorificación de Santa María","Santa María glorificada"],fields:{entranceAntiphon:`Un gran signo apareció en el cielo:
una mujer vestida de sol,
la luna bajo sus pies
y una corona de doce estrellas sobre su cabeza.

O bien:
Alegrémonos todos en el Señor
al celebrar este día de fiesta en honor de la Virgen María:
de su Asunción se alegran los ángeles
y alaban al Hijo de Dios.`,collect:"Dios todopoderoso y eterno, que glorificaste a santa María, Madre de tu Hijo, exaltándola para que compartiera la plenitud de su resurrección, concédenos vivir en este mundo como ella vivió, para participar de la misma gloria que ella ha recibido. Por nuestro Señor Jesucristo.",offerings:"Acepta, Señor, este sacrificio que te ofrecemos para celebrar la glorificación de santa María y ayúdanos, por su intercesión, a buscarte y a vivir siempre en tu amor. Por Jesucristo, nuestro Señor.",communionAntiphon:`Me felicitarán todas las generaciones,
porque el Poderoso ha hecho obras grandes en mí.`,postCommunion:"Tú, que nos has hecho partícipes de este sacramento de vida eterna, concédenos, Señor, por intercesión de santa María, en este día de su glorificación, alcanzar la gloria de la resurrección. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"Santísima Virgen María, Reina del Cielo",aliases:["Santísima Virgen María, Reina del Cielo","Santa María Reina","María Reina","Virgen María Reina"],fields:{collect:"Dios todopoderoso, que has querido darnos como madre y reina a la Madre de tu Hijo, concédenos amarla y venerarla como verdaderos hijos suyos y participar, por su intercesión, de la gloria de tu Reino. Por nuestro Señor Jesucristo.",offerings:"Acepta, Señor, los dones que te presentamos para celebrar esta fiesta de santa María y concédenos que tu Hijo Jesucristo, que quiso ofrecerse por nosotros en la cruz, nos obtenga tu perdón y tu paz. Él, que vive y reina por los siglos de los siglos.",postCommunion:"Te suplicamos, Señor, que quienes hemos participado de este sacramento, al celebrar hoy a santa María, participemos, por su intercesión, del banquete eterno. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"San Bartolomé, apóstol",aliases:["San Bartolomé, apóstol","San Bartolomé","Bartolomé, apóstol","Bartholomew apostle"],fields:{entranceAntiphon:`Proclamad día tras día la victoria de Dios,
contad a los pueblos su gloria.`,collect:"Fortalece, Señor, nuestra fe para que sigamos a Cristo con la misma sinceridad de san Bartolomé, apóstol, y concédenos, por su intercesión, que la Iglesia sea instrumento eficaz de salvación para toda la humanidad. Por nuestro Señor Jesucristo.",offerings:"Señor, que el sacrificio de alabanza que vamos a ofrecerte en la fiesta del apóstol san Bartolomé, nos obtenga, por su intercesión, la gracia de servirte con fidelidad. Por Jesucristo, nuestro Señor.",communionAntiphon:`Yo preparo para vosotros el Reino
como me lo preparó mi Padre a mí,
de forma que comáis y bebáis a mi mesa en mi Reino,
dice el Señor.`,postCommunion:"Que la comunión que hemos recibido, al celebrar la fiesta de san Bartolomé, nos dé fuerza, Señor, para imitar a Cristo aquí en la tierra y participar de la vida eterna. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"San Agustín de Hipona, obispo y doctor de la Iglesia",aliases:["San Agustín de Hipona, obispo y doctor de la Iglesia","San Agustín, obispo","San Agustín de Hipona","Agustín de Hipona"],fields:{collect:"Enciende, Señor, en nosotros el fuego con que inflamaste el corazón de san Agustín, a fin de que, sedientos como él de sabiduría y de amor, no descansemos hasta encontrarte a ti, verdad eterna e infinita bondad. Por nuestro Señor Jesucristo.",offerings:"Señor, que esta Eucaristía que vamos a celebrar, como memorial de nuestra redención y sacramento de tu misericordia, sea para nosotros signo de unidad y vínculo de amor. Por Jesucristo, nuestro Señor.",postCommunion:"Que el Cuerpo y la Sangre de Cristo, que hemos recibido en este sacramento, nos hagan participar, Señor, de su vida divina. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"Santa Rosa de Lima, virgen",aliases:["Santa Rosa de Lima, virgen","Santa Rosa de Lima","Rosa de Lima","Santa Rose de Lima"],fields:{collect:"Dios nuestro, que impulsaste a santa Rosa de Lima a renunciar al mundo para consagrarse a una vida de austeridad por amor tuyo, enciéndenos con ese mismo amor para que, viviendo auténticamente nuestro cristianismo en el mundo, nos esforcemos en ganarlo para ti. Por nuestro Señor Jesucristo.",offerings:"Acepta, Señor, los dones que te presentamos al celebrar hoy la fiesta de santa Rosa de Lima, y haz que este memorial de la muerte y resurrección de tu Hijo nos ayude a encontrar en nuestros sufrimientos, aceptados por amor a Cristo y al prójimo, el camino para participar en tu Reino. Por Jesucristo, nuestro Señor.",postCommunion:"Tú, que nos has hecho partícipes del Cuerpo y de la Sangre de tu Hijo, enciéndenos, Señor, en su amor para que, a ejemplo de santa Rosa de Lima, seamos capaces de renunciar a cuanto pueda apartarnos de Cristo, que vive y reina por los siglos de los siglos."}},{source:"textosliturgia",title:"Martirio de San Juan Bautista",aliases:["Martirio de San Juan Bautista","Martirio Juan Bautista","Martirio de san Juan","Degollación de San Juan Bautista"],fields:{entranceAntiphon:"Comentaré tus preceptos ante los reyes, Señor, y no me avergonzaré. Serán mi delicia tus mandatos, que tanto amo.",collect:"Oh, Dios, tú has querido que san Juan Bautista fuese el Precursor de tu Hijo en su nacimiento y en su muerte, concédenos que, así como él murió mártir de la verdad y de la justicia, luchemos nosotros valerosamente por la confesión de tu verdad. Por nuestro Señor Jesucristo.",offerings:"Por estos dones que te ofrecemos, concédenos, Señor, seguir rectamente tus caminos, que enseñó san Juan, la voz que clama en el desierto, y rubricó, con gran valor, derramando su sangre. Por Jesucristo, nuestro Señor.",communionAntiphon:"Contestó Juan: «Él tiene que crecer y yo tengo que menguar».",postCommunion:"Al celebrar el martirio de san Juan Bautista, concédenos, Señor, venerar lo que significan los sacramentos de salvación que hemos recibido y gozar aún más de su acción en nosotros. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"Natividad de la Bienaventurada Virgen María",aliases:["Natividad de la Bienaventurada Virgen María","Nacimiento de Santa María","Nacimiento de la Virgen María","Natividad de la Virgen María"],fields:{entranceAntiphon:"Celebremos con alegría el Nacimiento de María, la Virgen: de ella salió el sol de justicia, Cristo, nuestro Dios.",collect:"Al celebrar hoy el nacimiento de santa María, Madre de Cristo, nuestro Redentor, concédenos, Dios misericordioso, el don de tu alegría y de tu paz. Por nuestro Señor Jesucristo.",offerings:"Santifica, Señor, los dones que te presentamos al celebrar el nacimiento de santa María, la purísima Madre de tu Hijo, y haz que este sacrificio nos limpie de todas nuestras culpas. Por Jesucristo, nuestro Señor.",communionAntiphon:"La Virgen dará a luz un hijo que salvará a su pueblo de los pecados.",postCommunion:"Que esta sagrada Eucaristía con que nos has renovado, nos llene, Señor, de júbilo en esta fiesta de la Natividad de la Virgen María, aurora de nuestra salvación. Por Jesucristo nuestro Señor."}},{source:"spain",title:"Exaltación de la Santa Cruz",aliases:["Exaltación de la Santa Cruz","La Exaltación de la Santa Cruz"],fields:{entranceAntiphon:`Nosotros hemos de gloriarnos en la cruz de nuestro Señor Jesucristo:
en él está nuestra salvación, vida y resurrección,
por él somos salvados y liberados.`,collect:"Oh, Dios, que para salvar al género humano has querido que tu Unigénito soportara la cruz, concede, a quienes hemos conocido en la tierra este misterio, alcanzar en el cielo los premios de su redención. Por nuestro Señor Jesucristo.",offerings:"Señor, que nos limpie de toda culpa esta oblación, la misma que en el ara de la cruz quitó el pecado del mundo entero. Por Jesucristo, nuestro Señor.",communionAntiphon:`Cuando yo sea elevado sobre la tierra,
atraeré a todos hacia mí, dice el Señor.`,postCommunion:"Alimentados en tu sagrado banquete, te pedimos, Señor Jesucristo, que lleves a la gloria de la resurrección a los que has redimido mediante el leño de la cruz vivificadora. Tú, que vives y reinas por los siglos de los siglos."}},{source:"textosliturgia",title:"San Gregorio Magno, papa y doctor de la Iglesia",aliases:["San Gregorio Magno, papa y doctor de la Iglesia","San Gregorio I Magno, papa","San Gregorio Magno","Gregorio Magno","Gregory Magno"],fields:{entranceAntiphon:"El bienaventurado Gregorio Magno, elevado a la cátedra de Pedro, buscaba siempre el rostro del Señor, y vivía en la contemplación de su amor.",collect:"Oh Dios, que cuidas a tu pueblo con misericordia y lo diriges con amor, por intercesión del papa san Gregorio Magno concede el espíritu de sabiduría a quienes confiaste la misión de gobernar, para que el progreso de los fieles sea el gozo eterno de los pastores. Por nuestro Señor Jesucristo.",offerings:"Señor, en la fiesta de san Gregorio Magno te pedimos que nos sirva de provecho esta ofrenda con cuya inmolación concediste que se perdonasen los pecados del mundo entero. Por Jesucristo, nuestro Señor.",communionAntiphon:"Este es el siervo fiel y prudente a quien el Señor puso al frente de su servidumbre para que reparta la ración de alimento a sus horas.",postCommunion:"A cuantos alimentas con Cristo, Pan de vida, instrúyelos, Señor, con la enseñanza de Cristo Maestro, para que, en la fiesta de san Gregorio Magno, conozcan tu verdad y la realicen en el amor. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"San Juan Crisóstomo, obispo",aliases:["San Juan Crisóstomo, obispo","San Juan Crisóstomo, obispo y doctor de la Iglesia","Juan Crisóstomo","John Chrysostom"],fields:{collect:"Señor Dios, fortaleza de los que en ti confían, tú, que quisiste que el obispo san Juan Crisóstomo brillara por su admirable elocuencia y por su gran fortaleza en medio de los sufrimientos, haz que su sabiduría nos ilumine y que el ejemplo de su invencible constancia nos fortalezca. Por nuestro Señor Jesucristo.",offerings:"Acepta, Señor, los dones que te presentamos en la conmemoración de san Juan Crisóstomo y haz que, a ejemplo suyo, sepamos ofrecerte toda nuestra vida, unida al sacrificio de Cristo, que vive y reina por los siglos de los siglos.",postCommunion:"Dios misericordioso, concédenos que el sacramento que hemos recibido en la festividad de san Juan Crisóstomo, nos confirme en tu amor y nos haga testigos fieles de tu verdad. Por Jesucristo, nuestro Señor."}},{source:"textosliturgia",title:"Bienaventurada Virgen María de los Dolores",aliases:["Bienaventurada Virgen María de los dolores","Santa María Dolorosa","Virgen María de los Dolores","Nuestra Señora de los Dolores"],fields:{entranceAntiphon:"Simeón dijo a María: «Este ha sido puesto para que muchos en Israel caigan y se levanten, y será como un signo de contradicción: y a ti misma una espada te traspasará el alma».",collect:"Oh, Dios, junto a tu Hijo elevado en la cruz quisiste que estuviese la Madre dolorosa; concede a tu Iglesia, que, asociándose con María a la pasión de Cristo, merezca participar en su resurrección. Por nuestro Señor Jesucristo.",offerings:"Dios misericordioso, recibe las plegarias y los dones que presentamos para alabanza de tu nombre, al venerar a santa María Virgen, a quien tú nos entregaste generosamente, como piadosísima Madre, cuando estaba de pie junto a la cruz de Jesús. Él, que vive y reina por los siglos de los siglos.",communionAntiphon:"Estad alegres en la medida que compartís los sufrimientos de Cristo, de modo que, cuando se revele su gloria, gocéis de alegría desbordante.",postCommunion:"Después de recibir los sacramentos de la redención eterna, te pedimos, Señor, que, al recordar los dolores de santa María Virgen, completemos en nosotros, en favor de la Iglesia, lo que falta a la pasión de Cristo. Él, que vive y reina por los siglos de los siglos."}},{source:"textosliturgia",title:"Santos Cornelio y Cipriano, mártires",aliases:["San Cornelio, papa, y Cipriano, obispo, mártires","Santos Cornelio y Cipriano","Cornelio y Cipriano","Cornelius and Cyprian"],fields:{collect:"Oh, Dios, que has puesto al frente de tu pueblo como abnegados pastores y mártires invencibles a los santos Cornelio y Cipriano, concédenos, por su intercesión, ser fortalecidos en la fe y en la constancia para trabajar con empeño por la unidad de tu Iglesia. Por nuestro Señor Jesucristo.",offerings:"Recibe, Señor, los dones de tu pueblo ofrecidos en honor de la pasión de tus santos mártires, y lo que dio fortaleza en la persecución a los santos Cornelio y Cipriano, nos dé también a nosotros constancia en las adversidades. Por Jesucristo, nuestro Señor.",postCommunion:"Concédenos, Señor, por este sacramento que hemos recibido, ser confirmados por la fuerza de tu Espíritu a ejemplo de los santos mártires Cornelio y Cipriano, para dar fiel testimonio de la verdad del Evangelio. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"San Mateo, apóstol y evangelista",aliases:["San Mateo, apóstol y evangelista","San Mateo","Mateo, apóstol y evangelista","Matthew apostle evangelist"],fields:{entranceAntiphon:`Id y haced discípulos de todos los pueblos,
bautizándolos y enseñándoles a guardar todo lo que os he mandado,
dice el Señor.`,collect:"Dios misericordioso, que elegiste a san Mateo, un recaudador de impuestos, para hacerlo apóstol tuyo, ayúdanos, por su intercesión, a cumplir nuestras responsabilidades en esta vida como verdaderos apóstoles de Cristo, que vive y reina contigo.",offerings:"Acepta, Señor, los dones que te presentamos en la fiesta del apóstol y evangelista san Mateo y, como fruto de esta Eucaristía, concede a tu Iglesia mantenerse fiel al Evangelio predicado por los apóstoles. Por Jesucristo, nuestro Señor.",communionAntiphon:`No he venido a llamar a los justos,
sino a los pecadores, dice el Señor.`,postCommunion:"Tú, que nos has hecho partícipes en esta Eucaristía del júbilo de san Mateo al recibir en su casa a Jesucristo, concédenos, Señor, la gracia de no separarnos nunca de tu Hijo y de esforzarnos por darlo a conocer. Por Jesucristo, nuestro Señor."}},{source:"textosliturgia",title:"San Pío de Pietrelcina, presbítero",aliases:["San Pío de Pietrelcina, presbítero","San Pio de Pietrelcina, presbítero","San Pius de Pietrelcina, presbítero","San Pío de Pietrelcina","Padre Pío","Pío de Pietrelcina"],fields:{collect:"Dios todopoderoso y eterno, que concediste a san Pío, presbítero, la gracia singular de participar en la cruz de tu Hijo, y por su ministerio renovaste las maravillas de tu misericordia, concédenos, por su intercesión, que, asociados siempre a los sufrimientos de Cristo, lleguemos felizmente a la gloria de la resurrección. Por nuestro Señor Jesucristo."}},{source:"icergua",title:"Santos Arcángeles Miguel, Gabriel y Rafael",aliases:["Santos Arcángeles Miguel, Gabriel y Rafael","Santos Miguel, Gabriel y Rafael, arcángeles","Arcángeles Miguel Gabriel Rafael","Miguel, Gabriel y Rafael"],fields:{entranceAntiphon:`Bendecid al Señor, ángeles suyos,
poderosos ejecutores de sus órdenes,
prontos a la voz de su palabra.`,collect:"Dios todopoderoso, que con providencia admirable has confiado a los ángeles y a los seres humanos su misión particular, haz que quienes te sirven constantemente en el cielo nos protejan siempre en la tierra. Por nuestro Señor Jesucristo.",offerings:"Haz, Señor, que tus ángeles lleven ante ti los dones que te presentamos y que este sacrificio sea para toda la humanidad fuente de vida y salvación. Por Jesucristo, nuestro Señor.",communionAntiphon:`Te doy gracias, Señor, de todo corazón,
delante de los ángeles tañeré para ti.`,postCommunion:"Que nos fortalezca, Señor, el pan de vida con que nos has alimentado, para que caminemos seguros por la senda de la salvación bajo la fiel custodia de los ángeles. Por Jesucristo nuestro Señor."}},{source:"textosliturgia",title:"San Jerónimo, presbítero y doctor de la Iglesia",aliases:["San Jerónimo, presbítero y doctor de la Iglesia","San Jerónimo de Stridon, presbítero","San Jerónimo","Jerónimo de Stridon"],fields:{entranceAntiphon:"Dichoso el hombre que medita la ley del Señor día y noche, dará fruto en su sazón.",collect:"Oh Dios, que concediste al presbítero san Jerónimo un amor suave y vivo a la Sagrada Escritura, haz que tu pueblo se alimente de tu palabra con mayor abundancia y encuentre en ella la fuente de la vida. Por nuestro Señor Jesucristo.",offerings:"Concédenos, Señor, que, después de meditar tu palabra a ejemplo de san Jerónimo, nos dispongamos a ofrecer con mayor fervor a tu gloria el sacrificio de salvación. Por Jesucristo, nuestro Señor.",communionAntiphon:"Si encontraba tus palabras, Señor Dios, las devoraba: tus palabras me servían de gozo, eran la alegría de mi corazón.",postCommunion:"Señor, que los sacramentos que hemos recibido muevan el corazón de tus fieles, gozosos por la celebración de san Jerónimo, para que, atentos a las enseñanzas divinas, comprendan lo que deben seguir y, siguiéndolo, alcancen la vida eterna. Por Jesucristo, nuestro Señor."}},{source:"textosliturgia",title:"Santa Teresa del Niño Jesús, virgen y doctora de la Iglesia",aliases:["Santa Teresa del Niño Jesús, virgen y doctora de la Iglesia","Santa Teresita del Niño Jesús, virgen y doctora de la Iglesia","San Therese de Child Jesus y Holy Face de Lisieux, virgen","Teresa del Niño Jesús","Teresita del Niño Jesús"],fields:{entranceAntiphon:"El Señor la rodeó cuidando de ella, la guardó como a las niñas de sus ojos; como el águila extendió sus alas, la tomó y la llevó sobre sus plumas; el Señor solo la condujo.",collect:"Oh Dios, que preparas tu reino para los humildes y sencillos, concédenos seguir confiadamente el camino de santa Teresa del Niño Jesús para que, por su intercesión, nos sea revelada tu gloria eterna. Por nuestro Señor Jesucristo.",offerings:"Señor, al proclamarte admirable en santa Teresa del Niño Jesús, suplicamos humildemente a tu majestad que, así como te agradaron sus méritos, aceptes de igual modo nuestro servicio. Por Jesucristo, nuestro Señor.",communionAntiphon:"Dice el Señor: «si no os convertís y os hacéis como niños, no entraréis en el reino de los cielos».",postCommunion:"Que los sacramentos que hemos recibido, Señor, enciendan en nosotros la fuerza de aquel amor con el que santa Teresa del Niño Jesús se entregó a ti y anheló obtener tu misericordia para todos los hombres. Por Jesucristo, nuestro Señor."}},{source:"textosliturgia",title:"Santos Ángeles Custodios",aliases:["Santos Ángeles Custodios","Holy Guardian Angels","Ángeles Custodios"],fields:{entranceAntiphon:"Ángeles del Señor, bendecid al Señor, ensalzadlo con himnos por los siglos.",collect:"Oh Dios, que en tu providencia inefable te has dignado enviar a tus santos ángeles para nuestra custodia, concede, a los que te suplicamos, ser defendidos siempre por su protección y gozar eternamente de su compañía. Por nuestro Señor Jesucristo.",offerings:"Recibe, Señor, los dones que te presentamos en honor de tus santos ángeles, y concédenos, por tu bondad, vernos libres, con su continua protección, de los peligros presentes y llegar felizmente a la vida eterna. Por Jesucristo, nuestro Señor.",communionAntiphon:"Delante de los ángeles tañeré para ti, Dios mío.",postCommunion:"Señor, a los que has alimentado para la vida eterna con tan grandes sacramentos dirígelos, por ministerio de los ángeles, en el camino de la salvación y de la paz. Por Jesucristo, nuestro Señor."}},{source:"textosliturgia",title:"Bienaventurada Virgen María del Rosario",aliases:["Bienaventurada Virgen María del Rosario","Nuestra Señora del Rosario","Our Lady de Rosary","Virgen del Rosario"],fields:{entranceAntiphon:"Dios te salve, María, llena eres de gracia, el Señor es contigo: bendita tú eres entre todas las mujeres y bendito es el fruto de tu vientre.",collect:"Derrama, Señor, tu gracia en nuestros corazones, para que, quienes hemos conocido, por el anuncio del ángel, la encarnación de Cristo, tu Hijo, lleguemos, por su pasión y su cruz, y la intercesión de la bienaventurada Virgen María, a la gloria de la resurrección. Por nuestro Señor Jesucristo.",offerings:"Haz, Señor, que nos preparemos dignamente con estos dones presentados, y que celebremos de tal modo los misterios de tu Unigénito que merezcamos ser dignos de sus promesas. Por Jesucristo, nuestro Señor.",communionAntiphon:"Concebirás en tu vientre y darás a luz un hijo, y le pondrás por nombre Jesús.",postCommunion:"Te rogamos, Señor y Dios nuestro, que quienes anunciamos en este sacramento la muerte y resurrección de tu Hijo, asociados a su pasión, merezcamos participar del gozo y de la gloria. Por Jesucristo, nuestro Señor."}},{source:"textosliturgia",title:"Bienaventurada Virgen María del Pilar",aliases:["Bienaventurada Virgen María del Pilar","Nuestra Señora del Pilar","Our Lady de Pillar","Virgen del Pilar"],fields:{entranceAntiphon:"Les diste una columna de fuego, como guía para un viaje desconocido, para que pudieran caminar día y noche por el desierto.",collect:"Dios todopoderoso y eterno, que en la gloriosa Madre de tu Hijo has concedido un amparo celestial a cuantos la invocan con la secular advocación del Pilar, concédenos, por su intercesión, fortaleza en la fe, seguridad en la esperanza y constancia en el amor. Por nuestro Señor Jesucristo.",offerings:"Dios todopoderoso y eterno, que hiciste brillar sobre nosotros la luz de la fe, haz que los dones que ahora te presentamos y las súplicas que te dirigimos nos consigan, por intercesión de santa María del Pilar, permanecer firmes en la fe y generosos en el amor. Por Jesucristo, nuestro Señor.",communionAntiphon:"Me felicitarán todas las generaciones, porque el Poderoso ha hecho obras grandes por mí.",postCommunion:"Oh, Dios, que de modo maravilloso multiplicas tu presencia en medio de nosotros, al darte gracias por este sacramento con que nos has alimentado, te rogamos nos concedas, por intercesión de santa María del Pilar, llegar a contemplarte eternamente en el cielo. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"Santa Teresa de Jesús, virgen y doctora de la Iglesia",aliases:["Santa Teresa de Jesús, virgen y doctora de la Iglesia","Santa Teresa de Jesús","Santa Teresa de Ávila","Teresa de Jesús","Teresa de Ávila"],fields:{entranceAntiphon:`Como busca la cierva corrientes de agua,
así mi alma te busca a ti, Dios mío;
mi alma tiene sed de Dios, del Dios vivo.`,collect:"Dios nuestro, que por medio de tu Espíritu impulsaste a santa Teresa de Jesús a renovar en la Iglesia la vida religiosa, concédenos, por su intercesión, un ardiente deseo de renovar nuestra vida cristiana y de servirte con alegría. Por nuestro Señor Jesucristo.",offerings:"Acepta, Señor, los dones que te presentamos y concédenos celebrar esta Eucaristía, con el mismo fervor con que santa Teresa de Jesús se consagró a tu Hijo y al servicio de la Iglesia. Por Jesucristo, nuestro Señor.",communionAntiphon:`Cantaré eternamente las misericordias del Señor,
anunciaré tu fidelidad por todas las edades.`,postCommunion:"Tú, que nos has alimentado con el Cuerpo y la Sangre de tu Hijo, concédenos, Señor, que, a ejemplo de santa Teresa de Jesús, no nos cansemos nunca de cantar las maravillas de tu amor. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"San Ignacio de Antioquía, obispo y mártir",aliases:["San Ignacio de Antioquía, obispo y mártir","San Ignacio de Antioquía, obispo","San Ignacio de Antioquía","Ignacio de Antioquía"],fields:{collect:"Dios eterno y todopoderoso, que has querido glorificar a tu Iglesia con el testimonio de los mártires, concédenos que el glorioso martirio que mereció a san Ignacio una corona inmortal, fortalezca cada vez más nuestra fe. Por nuestro Señor Jesucristo.",offerings:"Señor Dios, que después de purificar como trigo de Cristo a san Ignacio de Antioquía, lo aceptaste como pan inmaculado, dígnate aceptar los dones que tu Iglesia te presenta. Por Jesucristo, nuestro Señor.",postCommunion:"Que el Cuerpo y la Sangre de Cristo que hemos recibido, Señor, al conmemorar el martirio de san Ignacio, nos dé nuevas fuerzas para que, con las palabras y con las acciones, nos manifestemos auténticos cristianos. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"San Lucas, evangelista",aliases:["San Lucas, evangelista","San Lucas Evangelista","San Lucas","Lucas, evangelista"],fields:{collect:"Señor, tú que elegiste a san Lucas para revelar al mundo, mediante su predicación y su Evangelio, el misterio de tu predilección por los pobres, haz que todos los que hemos recibido de ti la gracia de conocerte, unidos por un profundo espíritu de fraternidad, demos al mundo testimonio claro de tu amor. Por nuestro Señor Jesucristo.",offerings:"Purifica, Señor, nuestros corazones, a fin de que el sacrificio que vamos a ofrecerte en la festividad de san Lucas evangelista, nos haga crecer en la vida nueva de tu Reino. Por Jesucristo, nuestro Señor.",postCommunion:"Que esta sagrada comunión aumente, Señor, en nosotros el amor a Cristo y nos haga permanecer fieles al Evangelio, predicado y transmitido por san Lucas. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"Santos Simón y Judas, apóstoles",aliases:["Santos Simón y Judas, apóstoles","Santos Simón y Judas","San Simón y San Judas","Simón y Judas, apóstoles"],fields:{entranceAntiphon:`Estos son los varones santos
a quienes eligió el Señor amorosamente
y les dio la gloria eterna.`,collect:"Dios nuestro, que nos has dado a conocer a tu Hijo por la predicación de los apóstoles, haz que, por intercesión de los santos Simón y Judas, nosotros amemos cada día más a Cristo y que cada vez mayor número de personas lo conozcan. Por nuestro Señor Jesucristo.",offerings:"Acepta, Señor, los dones que te presentamos en la fiesta de tus santos Apóstoles Simón y Judas y reaviva nuestra fe, para que podamos celebrar dignamente tu Eucaristía. Por Jesucristo, nuestro Señor.",communionAntiphon:`El que me ama guardará mi palabra,
y mi Padre lo amará,
y vendremos a él y haremos morada en él,
dice el Señor.`,postCommunion:"Tú, que nos has hecho participar del Cuerpo y de la Sangre de tu Hijo, al conmemorar hoy el martirio de los santos apóstoles Simón y Judas, haz, Señor, que el Espíritu Santo nos guarde siempre en tu amor. Por Jesucristo, nuestro Señor."}},{source:"textosliturgia",title:"San Carlos Borromeo, obispo",aliases:["San Carlos Borromeo, obispo","San Carlos Borromeo","Carlos Borromeo"],fields:{collect:"Conserva, Señor, en tu pueblo el espíritu que infundiste en el obispo san Carlos Borromeo, para que la Iglesia se renueve sin cesar y pueda mostrar al mundo el verdadero rostro de Cristo, configurada a su imagen. Por nuestro Señor Jesucristo.",offerings:"Mira, Señor, los dones presentados en tu altar en la memoria de san Carlos Borromeo, y, así como lo glorificaste por su celo en el ministerio pastoral y sus virtudes admirables, concédenos, por la eficacia de este sacrificio, abundar en frutos de buenas obras. Por Jesucristo, nuestro Señor.",postCommunion:"Te pedimos, Señor, que los sacramentos recibidos nos den aquella fortaleza de espíritu que hizo a san Carlos Borromeo fiel en el ministerio y fervoroso en la caridad. Por Jesucristo, nuestro Señor."}},{source:"textosliturgia",title:"San León Magno, papa y doctor de la Iglesia",aliases:["San León Magno, papa y doctor de la Iglesia","San Leo I Magno, papa","San León Magno","León Magno"],fields:{entranceAntiphon:"El Señor hizo con él una alianza de paz, y lo nombró príncipe para que tuviera eternamente la dignidad del sacerdocio.",collect:"Oh, Dios, que nunca permites que las puertas del infierno prevalezcan contra tu Iglesia, asentada sobre la firmeza de la roca apostólica, te pedimos, por intercesión del papa san León Magno, que permaneciendo firme en tu verdad goce de una paz continua. Por nuestro Señor Jesucristo.",offerings:"Señor, por estas ofrendas que te presentamos ilumina, complacido, a tu Iglesia, para que tu grey crezca y se desarrolle en todas partes, y sus pastores, bajo tu guía, sean de tu agrado. Por Jesucristo, nuestro Señor.",communionAntiphon:"Pedro dijo a Jesús: «Tú eres el Mesías, el Hijo del Dios vivo». Jesús le respondió: «Tú eres Pedro, y sobre esta piedra edificaré mi Iglesia».",postCommunion:"Señor, gobierna con bondad a tu Iglesia, alimentada en esta mesa santa, para que, dirigida por tu mano poderosa, tenga cada vez mayor libertad y persevere en la integridad de la fe. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"Todos los Santos",aliases:["Todos los Santos","Solemnidad de Todos los Santos"],fields:{entranceAntiphon:`Alegrémonos todos en el Señor
al celebrar este día de fiesta en honor de todos los santos.
Los ángeles se alegran de esta solemnidad
y alaban al Hijo de Dios.`,collect:"Dios omnipotente y eterno, que otorgas a tu Iglesia la alegría de celebrar, en esta solemnidad, los méritos y la gloria de todos los santos, concede a tu pueblo, por intercesión de estos hermanos nuestros, la abundancia de tu misericordia. Por nuestro Señor Jesucristo.",offerings:"Acepta, Señor, el sacrificio de alabanza que vamos a ofrecerte al celebrar hoy la fiesta de aquellos que ya participan plenamente de la resurrección de tu Hijo, y concédenos experimentar su protección y ayuda en nuestro camino hacia ti. Por Jesucristo, nuestro Señor.",communionAntiphon:`Bienaventurados los limpios de corazón,
porque ellos verán a Dios.
Bienaventurados los que trabajan por la paz,
porque ellos serán llamados hijos de Dios.
Bienaventurados los perseguidos por causa de la justicia,
porque de ellos es el reino de los cielos.`,postCommunion:"Dios nuestro, fuente única de toda santidad y admirable en todos tus santos, haz que este sacramento nos encienda en el fuego de tu amor y nos ayude a experimentar la alegría de tu Reino. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"Conmemoración de todos los fieles difuntos",aliases:["Conmemoración de todos los fieles difuntos","Todos los Difuntos","Fieles difuntos","Conmemoración de los fieles difuntos"],fields:{entranceAntiphon:`Del mismo modo que Jesús ha muerto y resucitado,
Dios llevará con él, por medio de Jesús,
a los que han muerto.
Lo mismo que en Adán mueren todos,
así en Cristo todos serán vivificados.`,collect:"Escucha, Señor, nuestras súplicas y haz que, al proclamar nuestra fe en la resurrección de tu Hijo, se avive también nuestra esperanza en la resurrección de nuestros hermanos. Por nuestro Señor Jesucristo.",offerings:"Acepta, Señor, los dones que te ofrecemos en este sacramento de amor que nos une a Cristo, tu Hijo, y haz que nuestros hermanos difuntos estén gozando plenamente de la gloria de tu Reino. Por Jesucristo, nuestro Señor.",communionAntiphon:`Yo soy la resurrección y la vida:
el que cree en mí, aunque haya muerto, vivirá,
y el que está vivo y cree en mí no morirá para siempre,
dice el Señor.`,postCommunion:"En este memorial de la muerte y resurrección de Cristo en el que celebramos la comunión de los santos y la resurrección de los muertos, te pedimos que, nuestros hermanos difuntos, estén gozando de la plenitud de tu gloria. Por Jesucristo, nuestro Señor."}},{source:"textosliturgia",title:"Dedicación de la basílica de Letrán",aliases:["Dedicación de la basílica de Letrán","Dedicación de la Basílica de Letrán","La Dedicación de la basílica de Letrán","Basílica de Letrán","Dedicación de Letrán"],fields:{entranceAntiphon:`Vi la ciudad santa, la nueva Jerusalén que descendía del cielo, de parte de Dios, preparada como una esposa que se ha adornado para su esposo.
O bien:
He aquí la morada de Dios entre los hombres, y morará entre ellos, y ellos serán su pueblo, y el “Dios con ellos” será su Dios.`,collect:`Oh, Dios, que preparas una morada eterna a tu majestad con piedras vivas y elegidas, multiplica en tu Iglesia el espíritu de gracia que le has dado, de modo que tu pueblo fiel crezca siempre para la edificación de la Jerusalén del cielo. Por nuestro Señor Jesucristo.
O bien:
Oh, Dios, que has querido que tu esposa se llamara Iglesia, haz que el pueblo reunido en tu nombre te venere, te ame, te siga y, guiado por ti, llegue al cielo que le has prometido. Por nuestro Señor Jesucristo.`,offerings:"Recibe, Señor, esta ofrenda y concede a los que te invocamos la gracia de los sacramentos y el fruto de nuestros ruegos. Por Jesucristo, nuestro Señor.",communionAntiphon:"Como piedras vivas, entráis en la construcción de una casa espiritual para un sacerdocio santo.",postCommunion:"Oh, Dios, que has querido hacer de tu Iglesia signo temporal de la Jerusalén del cielo, concédenos, por la participación en este sacramento, ser transformados en templo de tu gracia y entrar en la morada de tu gloria. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"San Martín de Porres, religioso",aliases:["San Martín de Porres, religioso","San Martín de Porres","Martín de Porres"],fields:{collect:"Señor, Dios nuestro, que condujiste a san Martín de Porres a la gloria por el camino de trabajos humildes e ignorados, concédenos imitar sus ejemplos para participar de la vida nueva de tu Reino. Por nuestro Señor Jesucristo.",offerings:"Dios misericordioso, que transformaste a san Martín de Porres, para hacer de él una criatura nueva a imagen de Cristo, renuévanos también a nosotros mediante este sacrificio de reconciliación que vamos a ofrecerte. Por Jesucristo, nuestro Señor.",postCommunion:"Dios omnipotente, que por medio de este sacramento nos comunicas la fuerza de tu Espíritu, haz que, a ejemplo de san Martín de Porres, te amemos sobre todas las cosas y vivamos siempre como verdaderos hijos tuyos. Por Jesucristo, nuestro Señor."}},{source:"textosliturgia",title:"San Josafat, obispo y mártir",aliases:["San Josafat, obispo y mártir","San Josafat Kuncewicz, obispo y mártir","San Josafat","Josafat Kuncewicz"],fields:{collect:"Aviva, Señor, en tu Iglesia, el Espíritu que impulsó a san Josafat, obispo y mártir, a dar la vida por su rebaño, y concédenos, por su intercesión, que ese mismo Espíritu nos dé fuerza a nosotros para entregar la vida por nuestros hermanos. Por nuestro Señor Jesucristo.",offerings:"Dios de misericordia, bendice estos dones y fortalece a tu pueblo en la fe, que confirmó san Josafat con el derramamiento de su sangre. Por Jesucristo, nuestro Señor.",postCommunion:"Señor, que el banquete eucarístico nos llene de paz y fortaleza, para que, a ejemplo de san Josafat, gastemos generosamente nuestra vida por la extensión y la unidad de la Iglesia. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"San Andrés, apóstol",aliases:["San Andrés, apóstol","San Andrés Apóstol","San Andrés","Andrés, apóstol"],fields:{entranceAntiphon:`El Señor, paseando junto al lago de Galilea,
vio a dos hermanos, Pedro y Andrés, y los llamó:
«Venid en pos de mí y os haré pescadores de hombres».`,collect:"Dios nuestro, tú que llamaste al apóstol san Andrés para que fuera predicador del Evangelio y pastor de tu Iglesia, haz que sea siempre ante ti nuestro poderoso intercesor. Por nuestro Señor Jesucristo.",offerings:"Mira, Señor, con bondad, los dones que te presentamos en la festividad de san Andrés, apóstol, y haz que esta Eucaristía sea para nosotros fuente de vida y salvación. Por Jesucristo, nuestro Señor.",communionAntiphon:`Dijo Andrés a su hermano Simón:
«Hemos encontrado al Mesías, que significa Cristo».
Y lo llevó a Jesús.`,postCommunion:"Que esta Eucaristía nos fortalezca, Señor, para que, a ejemplo de san Andrés, participemos con nuestros sufrimientos en la pasión de Cristo y en su gloriosa resurrección. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"Inmaculada Concepción de María",aliases:["Inmaculada Concepción de María","Inmaculada Concepción de la Bienaventurada Virgen María","Concepción de Santa María, la Llena de Gracia","Concepción de Santa María","Santa María, la Llena de Gracia"],fields:{entranceAntiphon:`Desbordo de gozo en el Señor,
y me alegro con mi Dios:
porque me ha vestido un traje de gala
y me ha envuelto en un manto de triunfo,
como novia que se adorna con sus joyas.`,collect:"Dios todopoderoso, que llenando de gracia a santa María, desde su concepción, preparaste una morada digna para tu Hijo y, en atención a los méritos de la muerte redentora de Cristo, la preservaste de pecado, concédenos, por su maternal intercesión, vivir en tu presencia sin pecar. Por nuestro Señor Jesucristo.",offerings:"Acepta, Señor, el sacrificio de salvación que vamos a ofrecerte en esta festividad de santa María, a la que, desde su concepción, llenaste de gracia e hiciste bendita entre las mujeres y, por tu misericordia, concédenos el perdón de nuestros pecados. Por Jesucristo, nuestro Señor.",communionAntiphon:`Grandes cosas se cantan de ti, María,
porque de ti ha nacido el sol de justicia,
Cristo, nuestro Dios.`,postCommunion:"Que el Cuerpo y la Sangre de tu Hijo que hemos recibido, nos ayuden, Señor, a superar nuestra fragilidad, pues nos reconocemos pecadores y, que la intercesión de santa María, la llena de gracia, nos ayude a entregarnos incondicionalmente a tu servicio. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"Santa María de Guadalupe",aliases:["Santa María de Guadalupe","Nuestra Señora de Guadalupe","Virgen de Guadalupe","Guadalupe"],fields:{collect:"Padre de misericordia, que has puesto a los pueblos indígenas y pobres de América Latina bajo la especial protección de santa María de Guadalupe, Madre de tu Hijo, concédenos, por su intercesión, profundizar en nuestra fe y buscar el progreso de nuestros pueblos por caminos de justicia y de paz. Por nuestro Señor Jesucristo.",offerings:"Acepta, Señor, los dones que te presentamos en la fiesta de santa María de Guadalupe, y haz que este sacrificio nos dé fuerza para cumplir tus mandamientos como Ella lo hizo. Por Jesucristo, nuestro Señor.",postCommunion:"Que el Cuerpo y la Sangre de tu Hijo, que hemos recibido en este sacramento nos ayuden, Señor, por intercesión de nuestra santísima Madre de Guadalupe, a reconocernos y amarnos todos como verdaderos hermanos. Por Jesucristo, nuestro Señor."}},{source:"textosliturgia",title:"San Juan de la Cruz, presbítero y doctor de la Iglesia",aliases:["San Juan de la Cruz, presbítero y doctor de la Iglesia","San Juan de la Cruz, presbítero","San Juan de la Cruz","Juan de la Cruz"],fields:{entranceAntiphon:"Dios me libre de gloriarme si no es en la cruz de nuestro Señor Jesucristo, por la cual el mundo está crucificado para mí, y yo para el mundo.",collect:"Oh, Dios, que hiciste a san Juan de la Cruz, presbítero, insigne por su perfecta abnegación y amor a la cruz, concédenos imitarle siempre para llegar a la contemplación eterna de tu gloria. Por nuestro Señor Jesucristo.",offerings:"Dios todopoderoso, mira el sacrificio que te ofrecemos en la memoria de san Juan de la Cruz, y concede a cuantos celebramos el misterio de la pasión del Señor, imitar lo que realizamos. Por Jesucristo, nuestro Señor.",communionAntiphon:"Si alguno quiere venir en pos de mí, que se niegue a sí mismo, tome su cruz y me siga, dice el Señor.",postCommunion:"Oh, Dios, que iluminaste de modo admirable el misterio de la cruz en san Juan de la Cruz, concédenos, por tu bondad, que, fortalecidos por este sacrificio, permanezcamos siempre fieles a Cristo y trabajemos en la Iglesia por la salvación de todos. Por Jesucristo, nuestro Señor."}},{source:"textosliturgia",title:"Nuestro Señor Jesucristo, Rey del Universo",aliases:["Nuestro Señor Jesucristo, Rey del Universo","Jesucristo, Rey del Universo","Cristo Rey","Rey del Universo"],fields:{entranceAntiphon:"Digno es el Cordero degollado de recibir el poder, la riqueza, la sabiduría, la fuerza y el honor. A él la gloria y el poder, por los siglos de los siglos.",collect:"Dios todopoderoso y eterno, que quisiste recapitular todas las cosas en tu Hijo muy amado, Rey del Universo, haz que la creación entera, liberada de la esclavitud, sirva a tu majestad y te glorifique sin fin. Él, que vive y reina contigo.",offerings:"Al ofrecerte, Señor, el sacrificio de la reconciliación humana, pedimos humildemente que tu Hijo conceda a todos los pueblos los dones de la paz y de la unidad. Por Jesucristo, nuestro Señor.",communionAntiphon:"El Señor se sienta como Rey eterno, el Señor bendice a su pueblo con la paz.",postCommunion:"Después de recibir el alimento de la inmortalidad, te pedimos, Señor, que, quienes nos gloriamos de obedecer los mandatos de Cristo, Rey del Universo, podamos vivir eternamente con él en el reino del cielo. Él, que vive y reina por los siglos de los siglos."}},{source:"icergua",title:"I Domingo de Adviento",aliases:["I Domingo de Adviento","1º domingo de Adviento","Primer domingo de Adviento"],fields:{entranceAntiphon:`A ti levanto mi alma, Dios mío, en ti confío;
no quede yo defraudado,
que no triunfen de mí mis enemigos,
pues los que esperan en ti no quedan defraudados.`,collect:"Señor, despierta en nosotros el deseo de prepararnos para reconocer la presencia de Cristo, con la práctica de las obras de misericordia para que, podamos participar constantemente de la vida nueva de su Reino. Por el mismo nuestro Señor Jesucristo, tu Hijo, que siendo Dios vive y reina contigo, en la unidad del Espíritu Santo, por los siglos de los siglos. Amén.",offerings:"Acepta, Señor, estas ofrendas que hemos tomado de tus mismos dones, y concédenos que esta Eucaristía que estamos celebrando, nos haga participar de la salvación eterna. Por Jesucristo nuestro Señor. Amén.",communionAntiphon:`El Señor nos dará la lluvia,
y nuestra tierra dará su fruto.`,postCommunion:"Por nuestra participación en esta Eucaristía, enséñanos, Señor, a no poner nuestro corazón en las cosas pasajeras, sino en los bienes eternos. Por Jesucristo, nuestro Señor. Amén."}},{source:"icergua",title:"II Domingo de Adviento",aliases:["II Domingo de Adviento","2º domingo de Adviento","Segundo domingo de Adviento"],fields:{entranceAntiphon:`Pueblo de Sion:
el Señor vendrá a salvar a los pueblos
y hará resonar la majestad de su voz
con alegría en vuestro corazón.`,collect:"Que nuestras responsabilidades terrenas no nos impidan, Señor, reconocer la venida de tu Hijo, y que la sabiduría que viene de Ti, nos disponga a recibirlo y a participar de su propia vida. Por nuestro Señor Jesucristo, tu Hijo, que siendo Dios vive y reina contigo, en la unidad del Espíritu Santo, por los siglos de los siglos. Amén.",offerings:"Que te sean agradables, Señor, nuestras humildes ofrendas y oraciones, y que tu misericordia supla la extrema pobreza de nuestros méritos. Por Jesucristo, nuestro Señor. Amén.",communionAntiphon:`En pie, Jerusalén,
sube a la altura,
contempla la alegría que Dios te envía.`,postCommunion:"Como fruto de nuestra participación en este sacramento de vida eterna, enséñanos, Señor, a no sobrevalorar las cosas terrenales y a estimar las del cielo. Por Jesucristo, nuestro Señor. Amén."}},{source:"icergua",title:"III Domingo de Adviento",aliases:["III Domingo de Adviento","3º domingo de Adviento","Tercer domingo de Adviento"],fields:{entranceAntiphon:`Alegraos siempre en el Señor;
os lo repito, alegraos.
El Señor está cerca.`,collect:"Mira, Señor, a tu pueblo que espera con fe la fiesta del nacimiento de tu Hijo, y concédele celebrar el gran misterio de nuestra salvación con corazón nuevo e inmensa alegría. Por nuestro Señor Jesucristo, tu Hijo, que siendo Dios vive y reina contigo, en la unidad del Espíritu Santo, por los siglos de los siglos. Amén.",offerings:"Te pedimos, Señor, que este sacrificio, signo de nuestra total entrega a ti, lleve a cabo plenamente en nosotros tu salvación. Por Jesucristo, nuestro Señor. Amén.",communionAntiphon:`Decid a los cobardes de corazón:
sed fuertes, no temáis.
He aquí nuestro Dios que viene y nos salvará.`,postCommunion:"Que esta Eucaristía nos purifique, Señor, de toda mancha y nos prepare así a celebrar dignamente la Navidad ya próxima. Por Jesucristo, nuestro Señor. Amén."}},{source:"icergua",title:"IV Domingo de Adviento",aliases:["IV Domingo de Adviento","4º domingo de Adviento","Cuarto domingo de Adviento"],fields:{entranceAntiphon:`Cielos, destilad desde lo alto;
nubes, derramad al Justo;
ábrase la tierra y brote al Salvador.`,collect:"Derrama, Señor, tu gracia sobre nosotros, que hemos conocido por el anuncio del ángel la encarnación de tu Hijo, para que lleguemos, por su pasión y su cruz, a la gloria de la resurrección. Por nuestro Señor Jesucristo, tu Hijo, que siendo Dios vive y reina contigo, en la unidad del Espíritu Santo, por los siglos de los siglos. Amén.",offerings:"Que el mismo Espíritu que cubrió con su sombra y fecundó con su poder el seno de santa María, santifique, Señor, estas ofrendas que hemos depositado sobre tu altar. Por Jesucristo, nuestro Señor. Amén.",communionAntiphon:`Mirad: la Virgen está encinta y da a luz un hijo,
y le pondrá por nombre Enmanuel.`,postCommunion:"Tú que nos has dado en este sacramento la prenda de nuestra salvación, concédenos, Padre todopoderoso, prepararnos cada día con mayor fervor para celebrar dignamente el nacimiento de tu Hijo, que vive y reina por los siglos de los siglos. Amén."}},{source:"spain",title:"Santos Pedro Poveda Castroverde e Inocencio de la Inmaculada Canoura Arnau, presbíteros, y compañeros, mártires",aliases:["Santos Pedro Poveda Castroverde e Inocencio de la Inmaculada Canoura Arnau, presbíteros, y compañeros, mártires","Santos Pedro Poveda e Inocencio de la Inmaculada, presbíteros, y compañeros, mártires","Santos Pedro Poveda e Inocencio","Pedro Poveda","Inocencio de la Inmaculada"],fields:{collect:"Dios, Padre nuestro, que a los santos Pedro e Inocencio, presbíteros, y compañeros, mártires, con la ayuda de la Madre de Dios, los llevaste a la imitación de Cristo hasta el derramamiento de la sangre, concédenos, por su ejemplo e intercesión, confesar la fe con fortaleza, de palabra y de obra. Por nuestro Señor Jesucristo."}},{source:"textosliturgia",title:"San Martín de Tours, obispo",aliases:["San Martín de Tours, obispo","San Martín de Tours","San Martín, obispo","Martín de Tours"],fields:{entranceAntiphon:"Suscitaré un sacerdote fiel, que obre según mi corazón y mi deseo, dice el Señor.",collect:"Oh, Dios, que fuiste glorificado con la vida y la muerte del obispo san Martín, renueva en nuestros corazones las maravillas de tu gracia, para que ni la vida ni la muerte puedan apartarnos de tu amor. Por nuestro señor Jesucristo.",offerings:"Santifica, Señor, estos dones que ofrecemos con gozo en honor de san Martín, y haz que por ellos se oriente siempre nuestra vida en la adversidad y en la prosperidad. Por Jesucristo, nuestro Señor.",communionAntiphon:"En verdad os digo que cada vez que lo hicisteis con uno de estos mis hermanos más pequeños, conmigo lo hicisteis, dice el Señor.",postCommunion:"Concede, Señor, a los que has alimentado con el sacramento de la unidad, una armonía perfecta con tu voluntad en todas las cosas, para que, así como san Martín se entregó por entero a ti, nosotros también nos gloriemos de ser verdaderamente tuyos. Por Jesucristo, nuestro Señor."}},{source:"textosliturgia",title:"Santa Isabel de Hungría",aliases:["Santa Isabel de Hungría","Santa Isabel de Hungría, religiosa","Isabel de Hungría"],fields:{collect:"Oh, Dios, que concediste a santa Isabel de Hungría reconocer y venerar a Cristo en los pobres, concédenos, por su intercesión, servir con amor infatigable a los indigentes y a los atribulados. Por nuestro Señor Jesucristo."}},{source:"textosliturgia",title:"Presentación de la bienaventurada Virgen María",aliases:["Presentación de la bienaventurada Virgen María","Presentación de la Santísima Virgen María","Presentación de la Virgen María"],fields:{collect:"Concédenos, Señor, a cuantos honramos la gloriosa memoria de la santísima Virgen María, por su intercesión, participar como ella de la plenitud de tu gracia. Por nuestro Señor Jesucristo."}},{source:"textosliturgia",title:"San Andrés Dung-Lac, presbítero, y compañeros, mártires",aliases:["San Andrés Dung-Lac, presbítero, y compañeros, mártires","Santos Andrés Dung-Lac, presbítero, y compañeros, mártires","San Andrés Dung-Lac","Andrés Dung-Lac"],fields:{entranceAntiphon:"Nosotros hemos de gloriarnos en la cruz de nuestro Señor Jesucristo. El mensaje de la cruz, para los que se salvan, es fuerza de Dios.",collect:"Oh, Dios, fuente y origen de toda paternidad, tú hiciste que los santos mártires Andrés y sus compañeros fueran fieles a la cruz de tu Hijo hasta el derramamiento de su sangre, concédenos, por su intercesión, difundir tu amor entre los hermanos y que nos llamemos y seamos de verdad hijos tuyos. Por nuestro Señor Jesucristo.",offerings:"Recibe, Padre santo, los dones que te ofrecemos al venerar la pasión de los santos mártires, para que, en medio de las dificultades de nuestra vida, permanezcamos siempre fieles a ti y hagamos de nosotros mismos una ofrenda agradable a tus ojos. Por Jesucristo, nuestro Señor.",communionAntiphon:"Bienaventurados los perseguidos por causa de la justicia, porque de ellos es el reino de los cielos.",postCommunion:"Alimentados con un mismo pan en la conmemoración de los santos mártires, te pedimos humildemente, Señor, que nos mantengamos unidos en tu amor y merezcamos alcanzar el premio eterno a la perseverancia. Por Jesucristo, nuestro Señor."}},{source:"textosliturgia",title:"San Francisco Javier, presbítero",aliases:["San Francisco Javier, presbítero","San Francisco Javier, misionero","San Francisco Javier","Francisco Javier"],fields:{entranceAntiphon:"Te alabaré entre las naciones, Señor; contaré tu fama a mis hermanos.",collect:"Oh, Dios, adquiriste para ti pueblos numerosos por la predicación de san Francisco Javier, haz que tus fieles se apasionen con su mismo celo por la fe, y que la santa Iglesia se alegre de ver crecer en todas las partes el número de sus hijos. Por nuestro Señor Jesucristo.",offerings:"Señor, recibe los dones que te presentamos en la memoria de san Francisco Javier, y concédenos que, así como él llegó a tierras lejanas impulsado por el deseo de la salvación de los hombres, también nosotros, dando testimonio eficaz del Evangelio, sintamos la urgencia de llegar a ti. Por Jesucristo, nuestro Señor.",communionAntiphon:"Lo que os digo en la oscuridad, decidlo a la luz, dice el Señor; y lo que os digo al oído, pregonadlo desde la azotea.",postCommunion:"Oh, Dios, que tus sacramentos enciendan en nosotros aquella ardiente caridad que inflamó a san Francisco Javier por la salvación de las almas, concédenos que, viviendo más dignamente nuestra vocación, consigamos con él la recompensa prometida a los buenos servidores. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"San Nicolás de Mira, obispo",aliases:["San Nicolás de Mira, obispo","San Nicolás de Myra, obispo","San Nicolás, obispo","San Nicolás de Mira","San Nicolás"],fields:{collect:"Señor y Dios nuestro, tú que concediste a tu obispo Nicolás de Myra ser agregado al número de los santos pastores, por su ardiente caridad y su fe insigne, concédenos, por su intercesión, perseverar en el amor y en la fe, para participar de la vida nueva de tu Reino. Por nuestro Señor Jesucristo.",offerings:"Recibe, Señor, las ofrendas que te presentamos en la festividad del obispo san Nicolás de Myra y concédenos obtener por ellas, como lo esperamos, el auxilio de tu misericordia. Por Jesucristo, nuestro Señor.",postCommunion:"Alimentados con el sacramento del Cuerpo y de la Sangre de tu Hijo, te pedimos, Dios y Padre nuestro, que el memorial que hemos celebrado con fe nos obtenga plenamente tu perdón. Por Jesucristo, nuestro Señor."}},{source:"textosliturgia",title:"San Ambrosio, obispo y doctor de la Iglesia",aliases:["San Ambrosio, obispo y doctor de la Iglesia","San Ambrosio, obispo","San Ambrosio","Ambrosio, obispo"],fields:{entranceAntiphon:"Te alabaré entre las naciones, Señor; contaré tu fama a mis hermanos.",collect:"Oh, Dios, que hiciste al obispo san Ambrosio doctor de la fe católica y ejemplo de fortaleza apostólica, suscita en tu Iglesia hombres según tu corazón que la gobiernen con fortaleza y sabiduría. Por nuestro Señor Jesucristo.",offerings:"Al celebrar estos divinos misterios, te pedimos, Señor, que el Espíritu Santo nos ilumine con aquella luz de la fe que alumbró a san Ambrosio para propagar siempre tu gloria. Por Jesucristo, nuestro Señor.",communionAntiphon:"El que medita la ley del Señor día y noche da fruto en su sazón.",postCommunion:"Fortalecidos, Señor, con el vigor de este sacramento, concédenos seguir de tal modo las enseñanzas de san Ambrosio que, caminando con decisión por tus sendas, nos preparemos para el gozo del banquete eterno. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"Navidad",aliases:["Navidad","La Natividad del Señor","Natividad del Señor","Nacimiento del Señor"],fields:{entranceAntiphon:`Un niño nos ha nacido,
un hijo se nos ha dado;
lleva a hombros el principado,
y es su nombre: Ángel del gran consejo.`,collect:"Dios nuestro, que de modo admirable creaste al ser humano a tu imagen y semejanza, y de modo más admirable lo elevaste con el nacimiento de tu Hijo, concédenos participar de la vida divina de aquél que ha querido participar de nuestra humanidad. Por nuestro Señor Jesucristo, tu Hijo, que siendo Dios vive y reina contigo, en la unidad del Espíritu Santo, por los siglos de los siglos. Amén.",offerings:"Acepta, Señor, en la fiesta solemne de la Navidad, esta ofrenda que nos reconcilia contigo de un modo perfecto, y encierra en sí la plenitud del culto que los humanos podemos tributarte. Por Jesucristo, nuestro Señor. Amén.",communionAntiphon:`Los confines de la tierra
han contemplado la salvación de nuestro Dios.`,postCommunion:"Concédenos, Dios misericordioso, que el salvador del mundo, que hoy nos ha nacido para comunicarnos su vida divina, nos dé también el don de su inmortalidad. El cual vive y reina por los siglos de los siglos. Amén."}},{source:"icergua",title:"Sagrada Familia",aliases:["Sagrada Familia","La Sagrada Familia","Sagrada Familia de Jesús, María y José","Jesús, María y José"],fields:{entranceAntiphon:`Los pastores fueron corriendo
y encontraron a María y a José,
y al niño acostado en el pesebre.`,collect:"Señor y Dios nuestro, tú que nos has dado en la Sagrada Familia de tu Hijo, el modelo perfecto para nuestras familias, concédenos practicar sus virtudes y estar unidos por los lazos de tu amor, para que compartamos la alegría de tu casa. Por nuestro Señor Jesucristo, tu Hijo, que siendo Dios vive y reina contigo, en la unidad del Espíritu Santo, por los siglos de los siglos. Amén.",offerings:"Acepta, Señor, este sacrificio de reconciliación y por intercesión de la Madre de tu Hijo y de san José, concede a nuestras familias, vivir siempre en tu amistad y en tu paz. Por Jesucristo, nuestro Señor. Amén.",communionAntiphon:`Nuestro Dios apareció en el mundo
y vivió en medio de los hombres.`,postCommunion:"Padre lleno de amor, concede a los que acabamos de alimentarnos con este sacramento celestial, imitar siempre los ejemplos de la Sagrada Familia, para que, superando las pruebas de cada día, gocemos de la gloria de tu Reino. Por Jesucristo, nuestro Señor. Amén."}},{source:"liturgiapapal",title:"29 de diciembre, quinto día dentro de la Octava de Navidad",aliases:["29 de diciembre","5º día de la Octava de Navidad","5º día dentro de la Octava de Navidad","Quinto día dentro de la Octava de Navidad"],fields:{entranceAntiphon:"Tanto amó Dios al mundo, que le dio a su Hijo único, para que todo el que crea en él, no perezca, sino que tenga la vida eterna.",collect:"Dios todopoderoso e invisible, que, con la luz de tu venida, ahuyentaste las tinieblas del mundo, míranos con rostro sereno, para que sobreabundemos en toda alabanza, proclamando dignamente la gloria del nacimiento de tu Unigénito. Él, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Recibe, Señor, nuestros dones, con los que se realiza tan glorioso intercambio, para que, al ofrecerte lo que tú nos diste, merezcamos recibirte a ti mismo. Por Jesucristo, nuestro Señor.",communionAntiphon:"Por la entrañable misericordia de nuestro Dios, nos ha visitado, el Sol que nace de lo alto.",postCommunion:"Concédenos, Dios todopoderoso, que la eficacia de estos sagrados misterios constantemente fortalezca nuestra vida. Por Jesucristo, nuestro Señor."}},{source:"liturgiapapal",title:"30 de diciembre, sexto día dentro de la Octava de Navidad",aliases:["30 de diciembre","6º día de la Octava de Navidad","6º día dentro de la Octava de Navidad","Sexto día dentro de la Octava de Navidad"],fields:{entranceAntiphon:"Cuando un profundo silencio envolvía todas las cosas y la noche estaba a la mitad de su camino, tu Palabra todopoderosa, Señor, bajó desde el trono real del cielo.",collect:"Concédenos, Dios todopoderoso, que, viéndonos sujetos a la antigua esclavitud bajo el yugo del pecado, nos libere el nuevo nacimiento según la carne de tu Unigénito. Él, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Acepta benignamente, Señor, los dones de tu pueblo, para que recibamos, por este sacramento celestial, aquello mismo que el fervor de nuestra fe nos mueve a proclamar. Por Jesucristo, nuestro Señor.",communionAntiphon:"De su plenitud todos hemos recibido gracia sobre gracia.",postCommunion:"Señor Dios, que nos unes a ti al permitirnos participar en tus sacramentos, realiza su poderoso efecto en nuestros corazones, y que la misma recepción de este don tuyo nos haga más dignos de seguirlo recibiendo. Por Jesucristo, nuestro Señor."}},{source:"liturgiapapal",title:"31 de diciembre, séptimo día dentro de la Octava de Navidad",aliases:["31 de diciembre","7º día de la Octava de Navidad","7º día dentro de la Octava de Navidad","Séptimo día dentro de la Octava de Navidad","Septimo día dentro de la Octava de Navidad"],fields:{entranceAntiphon:"Un niño nos ha nacido, un hijo se nos ha dado; lleva sobre sus hombros el imperio y su nombre será Ángel del gran consejo.",collect:"Dios todopoderoso y eterno, que aceptaste que en el nacimiento de tu Hijo halle su principio y perfección la virtud que nos une a ti, concédenos que seamos contados entre los escogidos de aquel en quien está la plenitud de toda salvación humana. Él, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Señor Dios, fuente de toda devoción sincera y de la paz, concédenos honrar de tal manera tu majestad con estos dones, que, al participar en estos santos misterios, todos quedemos unidos en un mismo sentir. Por Jesucristo, nuestro Señor.",communionAntiphon:"Dios envió al mundo a su Hijo unigénito, para que vivamos por él.",postCommunion:"Señor, que tu pueblo, al que acompañas con variados auxilios, obtenga de tu misericordia la ayuda presente y la futura, para que, mientras se afana en procurar el necesario consuelo de las cosas pasajeras, más confiadamente aspire a las eternas. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"María, Madre de Dios",aliases:["María, Madre de Dios","Santa María, Madre de Dios","Santa Maria, Madre de Dios","Octava de Navidad"],fields:{collect:"Señor Dios, que por la fecunda entrega de santa María diste al género humano el don de la salvación eterna, concédenos gozar de la intercesión de aquélla por quien recibimos al autor de la vida, Jesucristo, Señor nuestro, que vive y reina contigo, en la unidad del Espíritu Santo, por los siglos de los siglos. Amén.",offerings:"Señor, tú que eres el origen de todos los bienes y quien los lleva a su pleno desarrollo, concede a quienes celebramos en santa María, Madre de Dios, las primicias de nuestra redención, alcanzar la plenitud de sus frutos. Por Jesucristo, nuestro Señor. Amén.",postCommunion:"Señor, que estos sacramentos que hemos recibido con alegría, sean fuente de vida eterna para nosotros, que nos gloriamos de proclamar a santa María como Madre de tu Hijo y Madre de la Iglesia. Por Jesucristo, nuestro Señor. Amén."}},{source:"textosliturgia",title:"San Esteban, primer mártir",aliases:["San Esteban, Primer mártir","San Esteban, primer mártir","San Esteban, protomártir","San Esteban"],fields:{entranceAntiphon:"Las puertas del cielo se han abierto para san Esteban, el primero de los mártires, y por eso triunfa coronado en el cielo.",collect:"Concédenos, Señor, imitar lo que celebramos para que aprendamos a amar a los enemigos, al celebrar el nacimiento para el cielo de quien supo orar también por los perseguidores. Por nuestro Señor Jesucristo.",offerings:"Acepta, Señor, los dones de nuestra devoción en el día de la gloriosa memoria del mártir san Esteban. Por Jesucristo, nuestro Señor.",communionAntiphon:"Se pusieron a apedrear a Esteban, que repetía esta invocación: «Señor Jesús, recibe mi espíritu».",postCommunion:"Señor, te damos gracias por la abundancia de tus misericordias para con nosotros, al salvarnos por el nacimiento de tu Hijo y llenarnos de alegría en la fiesta de tu mártir san Esteban. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"San Juan, apóstol y evangelista",aliases:["San Juan, apóstol y evangelista","San Juan Apóstol y Evangelista","San Juan evangelista"],fields:{collect:"Dios nuestro, que por medio del Apóstol san Juan, has querido descubrirnos la profundidad de la vida y del amor de tu Hijo, haz que seamos capaces de conocer y de amar cada día más a Jesucristo, nuestro redentor, que vive y reina contigo.",offerings:"Santifica, Señor, los dones que te presentamos, y haz que, por esta Eucaristía, participemos del conocimiento profundo de tu Hijo que concediste a san Juan. Por Jesucristo, nuestro Señor.",postCommunion:"Por medio de este sacramento que hemos recibido en la fiesta de san Juan evangelista, concédenos, Señor, que habite siempre en nosotros tu Hijo, Jesucristo, que vive y reina por los siglos de los siglos."}},{source:"icergua",title:"Santos Inocentes, mártires",aliases:["Santos Inocentes, mártires","Santos Inocentes","Los Santos Inocentes"],fields:{entranceAntiphon:`Los niños inocentes murieron por Cristo,
siguieron al Cordero sin mancha,
a quien alaban por siempre:
Gloria a ti, Señor.`,collect:"Dios nuestro, que concediste a los Santos Inocentes dar testimonio de Cristo, no de palabra, sino con su sangre, ayúdanos a poner de manifiesto nuestra fe, no sólo con nuestros labios, sino, con nuestra conducta diaria. Por nuestro Señor Jesucristo.",offerings:"Acepta, Señor, los dones que te presentamos con amor y, por este sacrificio de salvación, con el que redimes incluso a los que no te conocen, purifícanos de nuestros pecados. Por Jesucristo, nuestro Señor.",communionAntiphon:`Estos fueron rescatados como primicias de los hombres
para Dios y el Cordero.
Estos son los que siguen al Cordero
adondequiera que vaya.`,postCommunion:"Dios nuestro, que en virtud del nacimiento de Cristo otorgaste a los Santos Inocentes el premio de la gloria, concédenos, por el Cuerpo y la Sangre de tu Hijo, que hemos recibido, participar plenamente de tu redención. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"Común de la Dedicación de una Iglesia",aliases:["Dedicación de la basílica de Letrán","Dedicación de una iglesia","Dedicación de la basílica","Letrán"],fields:{entranceAntiphon:`Desde el santuario, Dios impone reverencia:
es el Dios de Israel quien da fuerza y poder a su pueblo.
¡Dios sea bendito!

O bien:
Vi la ciudad santa, la nueva Jerusalén,
que descendía del cielo, de parte de Dios,
preparada como una esposa
que se ha adornado para su esposo.`,collect:"Señor y Dios nuestro, que nos permites recordar cada año el día de la consagración de este templo, atiende nuestras súplicas y concédenos rendirte siempre en este lugar, un culto que te dé gloria a ti y nos santifique plenamente a nosotros. Por nuestro Señor Jesucristo.",offerings:"Al hacer memoria del día en que te dignaste llenar esta casa de gloria y santidad, te pedimos, Señor, que nos transformes en ofrendas agradables a tus ojos. Por Jesucristo, nuestro Señor.",communionAntiphon:`Sois templos de Dios
y el Espíritu de Dios habita en vosotros.
El templo de Dios es santo:
y ese templo sois vosotros.

O bien:
Como piedras vivas entráis en la construcción
de una casa espiritual,
un sacerdocio santo.`,postCommunion:"Te pedimos, Señor, que este pueblo, consagrado a ti, obtenga tus bendiciones, a fin de que descubra la gracia que ha recibido al participar en la liturgia de esta fiesta. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"Común de Santa María I",aliases:["Bienaventurada Virgen María del Rosario","Nuestra Señora del Pilar","Presentación de la Santísima Virgen María","Santa María","Virgen María","Nuestra Señora","Madre de Dios","Natividad de la Bienaventurada Virgen María","Nacimiento de Santa María","Nacimiento de la Virgen María","Natividad de la Virgen María","Inmaculada Concepción de María"],fields:{entranceAntiphon:`¡Salve, Madre Santa!,
Virgen, Madre del Rey,
que gobierna cielo y tierra
por los siglos de los siglos.

O bien:
Dichosa eres, Virgen María,
que llevaste en tu seno al autor del universo;
engendraste al que te creó
y permaneces virgen para siempre.`,collect:"Señor, concede a tus hijos gozar siempre de completa salud de alma y cuerpo; y por la intercesión de santa María, Madre de tu Hijo, líbranos de las tristezas de esta vida y concédenos participar de las alegrías de tu Reino. Por nuestro Señor Jesucristo.",offerings:"Padre lleno de bondad, que nos socorra el inmenso amor de tu Hijo unigénito para que, quien al nacer de santa María, la consagrara con abundancia de bendiciones, nos libre de nuestras culpas y haga acepta a ti nuestra oblación. Por Jesucristo, nuestro Señor.",communionAntiphon:`Dichoso el vientre de María, la Virgen,
que llevó al Hijo del eterno Padre.`,postCommunion:"Señor, al recibir el sacramento eucarístico en esta festividad de santa María, te pedimos que nos concedas celebrar dignamente, a imitación suya, el misterio de nuestra redención. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"Común de Santos y Santas",aliases:["Santos Ángeles Custodios","santo","santa","santos","santas","abad","monje","religioso"],fields:{entranceAntiphon:"Que todas tus obras te den gracias, Señor, y tus fieles te bendigan; que anuncien la gloria de tu reino y proclamen tu poder.",collect:"Dios todopoderoso y eterno, que nos has dado una prueba de tu amor al glorificar a tus santos, haz que la intercesión y ejemplo de quienes hoy celebramos nos impulsen a seguir con fidelidad a tu Hijo, Jesucristo, que vive y reina contigo en la unidad del Espíritu Santo y es Dios, por los siglos de los siglos.",offerings:"Acepta, Señor, con bondad, nuestras ofrendas y, por intercesión de quienes hoy conmemoramos, consérvanos unidos en tu amor para que podamos ofrecerte dignamente este sacrificio de alabanza. Por Jesucristo, nuestro Señor.",communionAntiphon:"Los justos se regocijan, gritan de gozo delante del Señor y se llenan de alegría.",postCommunion:"Dios nuestro, fuente de consolación y de paz, que nos has concedido celebrar la Eucaristía en la fiesta de {{celebration}}, haz que el Cuerpo y la Sangre de tu Hijo, que hemos recibido en este sacramento, nos den participación en la vida eterna. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"Común de Mártires",aliases:["mártir","mártires","Santos Pedro Poveda Castroverde e Inocencio de la Inmaculada Canoura Arnau, presbíteros, y compañeros, mártires","Santos Andrés Dung-Lac, presbítero, y compañeros, mártires"],fields:{entranceAntiphon:`Los santos que siguieron las huellas de Cristo
viven gozosos en el cielo.
Derramaron la sangre por su amor,
por eso se alegran con Cristo para siempre.

O bien:
Aunque el justo sufra muchos males,
de todos los libra el Señor;
él cuida de todos sus huesos,
y ni uno solo se quebrará.`,collect:"Te pedimos, Señor, que nos concedas imitar la constancia en la fe de quienes hoy celebramos, cuyo martirio recordamos llenos de veneración. Por nuestro Señor Jesucristo.",offerings:"Recibe, Padre santo, las ofrendas que te presentamos en honor de tus mártires y concédenos permanecer firmes en la confesión de tu nombre. Por Jesucristo, nuestro Señor.",communionAntiphon:`Vosotros sois los que habéis perseverado conmigo en mis pruebas,
y yo os transmito el reino, dice el Señor;
comeréis y beberéis a mi mesa en mi reino.`,postCommunion:"Señor y Dios nuestro, que admirablemente ilustraste el misterio de la cruz con el ejemplo de tus mártires, concédenos, por intercesión de quienes hoy hemos conmemorado, la gracia, ya que hemos sido alimentados con el Cuerpo de Cristo, de seguirlo con fidelidad en la Iglesia para la salvación de todos. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"Común de Pastores",aliases:["obispo","papa","pastor","presbítero","San Carlos Borromeo, obispo","San León Magno, papa y doctor de la Iglesia","San Josafat Kuncewicz, obispo y mártir"],fields:{entranceAntiphon:"El Buen Pastor dio su vida por las ovejas.",collect:"Señor, tú confiaste a {{celebration}} la misión de instruir a tus ovejas con la palabra y el ejemplo, concédenos, por su intercesión, ser fieles a la fe que enseñó con su palabra e imitar el ejemplo que nos dio con su vida. Por nuestro Señor Jesucristo.",offerings:"Que estos dones, Señor, que te presentamos en honor de {{celebration}} y que van a dar testimonio de tu poder y de tu gloria, nos hagan partícipes de la salvación eterna. Por Jesucristo, nuestro Señor.",communionAntiphon:"El Buen Pastor dio su vida por las ovejas.",postCommunion:"Fortalecidos con el pan de la vida, te pedimos, Señor, que a ejemplo de {{celebration}} te sirvamos con entrega absoluta y amemos a nuestros hermanos con amor incansable. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"Común de Vírgenes y Religiosas Consagradas",aliases:["virgen","abadesa","monja","religiosa","Santa Teresita del Niño Jesús, virgen y doctora de la Iglesia","Santa Isabel de Hungría, religiosa"],fields:{entranceAntiphon:"Esta es una virgen sabia y prudente, que salió al encuentro de Cristo con la lámpara encendida.",collect:"Concédenos, Dios, salvador nuestro, que al conmemorar hoy a {{celebration}}, aprendamos, a ejemplo suyo, a servirte con amor y alegría. Por nuestro Señor Jesucristo.",offerings:"Acepta, Señor, los dones que te presentamos, por las maravillas que tu amor realizó en la vida de {{celebration}}, y haz que nuestra ofrenda sea grata a tus ojos. Por Jesucristo, nuestro Señor.",communionAntiphon:"Ya viene el esposo, salid a recibir a Cristo, el Señor.",postCommunion:"Señor, que este sacramento fortalezca en nosotros tu amor, para que aceptemos los sufrimientos de nuestra vida como una forma de participar en la pasión de Cristo y nos esforcemos por vivir unidos a ti, a ejemplo de {{celebration}}. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"Lunes del Tiempo de Navidad",aliases:["Lunes del Tiempo de Navidad"],fields:{collect:"Concede, Señor, a tu pueblo creer y proclamar con fe inquebrantable que Cristo, verdadero Dios como tú, se hizo verdadero hombre como nosotros en el seno de santa María, a fin de que, por este misterio, nos veamos libres de los males de esta vida y alcancemos la participación en tu Reino. Por nuestro Señor Jesucristo.",offerings:"Acepta, Señor, las ofrendas que te presentamos para esta Eucaristía, a fin de que, al ofrecerte tus propios dones, podamos recibirte a ti mismo. Por Jesucristo, nuestro Señor.",postCommunion:"Concédenos, Dios todopoderoso, que la gracia de estos sacramentos fortalezca cada día más nuestra vida cristiana. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"Martes del Tiempo de Navidad",aliases:["Martes del Tiempo de Navidad"],fields:{collect:"Padre celestial, tú que por el nacimiento de tu Hijo quisiste que fuera semejante a nosotros en todo, menos en el pecado, concede a cuantos en él hemos renacido a la vida nueva, vernos libres de nuestras antiguas miserias. Por el mismo nuestro Señor Jesucristo.",offerings:"Recibe, Señor, con bondad las ofrendas de tu pueblo y concédenos que, las realidades que creemos por la fe, las consigamos por este sacramento divino. Por Jesucristo, nuestro Señor.",postCommunion:"Señor Dios, que nos unes a ti por la participación de este sacramento, concédenos obtener toda su eficacia para que así, la recepción de este don tuyo, nos identifique más plenamente con tu Hijo Jesucristo, que vive y reina, por los siglos de los siglos."}},{source:"icergua",title:"Lunes de la 1ª semana de Adviento",aliases:["Lunes de la 1ª semana de Adviento","Lunes de la I semana de Adviento"],fields:{collect:"Concédenos, Señor Dios nuestro, permanecer vigilantes a la venida de tu Hijo Jesucristo, para que cuando venga y llame, nos encuentre velando en oración y dispuestos a dejarnos transformar por su Espíritu. Por nuestro Señor Jesucristo.",offerings:"Acepta, Señor, estas ofrendas que hemos tomado de tus mismos dones, y concédenos que esta Eucaristía que estamos celebrando, nos haga participar de la salvación eterna. Por Jesucristo nuestro Señor.",postCommunion:"Por nuestra participación en esta Eucaristía enséñanos, Señor, a no poner nuestro corazón en las cosas pasajeras, sino en los bienes eternos. Por Jesucristo, nuestro Señor."}},{source:"liturgiapapal",title:"Lunes de la 1ª semana de Adviento",aliases:["Lunes de la 1ª semana de Adviento","Lunes de la I semana de Adviento"],fields:{entranceAntiphon:"Escuchad, pueblos, la palabra del Señor; anunciadla en los confines de la tierra: he aquí nuestro Salvador que viene, no temáis.",communionAntiphon:"Ven, Señor, a visitarnos con tu paz para que nos alegremos delante de ti con un corazón íntegro."}},{source:"icergua",title:"Jueves de la 1ª semana de Adviento",aliases:["Jueves de la 1ª semana de Adviento","Jueves de la I semana de Adviento"],fields:{collect:"Muestra, Señor, tu poder y ven en nuestra ayuda para que la abundancia de tu misericordia apresure el momento de la salvación que nuestros pecados han retardado. Por nuestro Señor Jesucristo.",offerings:"Acepta, Señor, estas ofrendas que hemos tomado de tus mismos dones, y concédenos que esta Eucaristía que estamos celebrando, nos haga participar de la salvación eterna. Por Jesucristo nuestro Señor.",postCommunion:"Por nuestra participación en esta Eucaristía, enséñanos, Señor, a no poner nuestro corazón en las cosas pasajeras, sino en los bienes eternos. Por Jesucristo, nuestro Señor."}},{source:"liturgiapapal",title:"Jueves de la 1ª semana de Adviento",aliases:["Jueves de la 1ª semana de Adviento","Jueves de la I semana de Adviento"],fields:{entranceAntiphon:"Tú, Señor, estás cerca y todos tus caminos son verdaderos; hace tiempo comprendí tus preceptos, porque tú eres eterno.",communionAntiphon:"Llevemos ya desde ahora una vida sobria, justa y piadosa, aguardando la dicha que esperamos y la manifestación de la gloria del gran Dios."}},{source:"icergua",title:"Lunes de la 2ª semana de Adviento",aliases:["Lunes de la 2ª semana de Adviento","Lunes de la II semana de Adviento"],fields:{collect:"Escucha, Señor, nuestras plegarias y ayúdanos a prepararnos a celebrar con verdadera fe y pureza de corazón el gran misterio de la encarnación de tu Hijo, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Acepta, Señor, estas ofrendas que hemos tomado de tus mismos dones, y concédenos que esta Eucaristía que estamos celebrando, nos haga participar de la salvación eterna. Por Jesucristo nuestro Señor.",postCommunion:"Por nuestra participación en esta Eucaristía, enséñanos, Señor, a no poner nuestro corazón en las cosas pasajeras, sino en los bienes eternos. Por Jesucristo, nuestro Señor."}},{source:"liturgiapapal",title:"Lunes de la 2ª semana de Adviento",aliases:["Lunes de la 2ª semana de Adviento","Lunes de la II semana de Adviento"],fields:{entranceAntiphon:"Escuchad, pueblos, la palabra del Señor; anunciadla en los confines de la tierra: he aquí nuestro Salvador que viene, no temáis.",communionAntiphon:"Ven, Señor, a visitarnos con tu paz para que nos alegremos delante de ti con un corazón íntegro."}},{source:"icergua",title:"Martes de la 2ª semana de Adviento",aliases:["Martes de la 2ª semana de Adviento","Martes de la II semana de Adviento"],fields:{collect:"Señor y Dios nuestro, que has hecho llegar a todos los rincones de la tierra la buena nueva de la venida del salvador, concédenos esperar con sincera alegría las fiestas con que celebramos el día de su nacimiento. Por nuestro Señor Jesucristo.",offerings:"Que te sean agradables, Señor, nuestras humildes ofrendas y oraciones, y que tu misericordia supla la extrema pobreza de nuestros méritos. Por Jesucristo, nuestro Señor.",postCommunion:"Como fruto de nuestra participación en este sacramento de vida eterna, enséñanos, Señor, a no sobrevalorar las cosas terrenales y a estimar las del cielo. Por Jesucristo, nuestro Señor."}},{source:"liturgiapapal",title:"Martes de la 2ª semana de Adviento",aliases:["Martes de la 2ª semana de Adviento","Martes de la II semana de Adviento"],fields:{entranceAntiphon:"Vendrá el Señor y con él todos sus santos; y aquel día habrá una luz espléndida.",communionAntiphon:"El juez justo dará la corona de la justicia a los que aguarden con amor su venida."}},{source:"icergua",title:"Jueves de la 3ª semana de Adviento",aliases:["Jueves de la 3ª semana de Adviento","Jueves de la III semana de Adviento"],fields:{collect:"Señor, con el nacimiento de tu Hijo, que viene a salvarnos, danos tu perdón y llena de alegría nuestros corazones, entristecidos por haber pecado, apartándonos de tu amor. Por nuestro Señor Jesucristo.",offerings:"Acepta, Señor, estas ofrendas que te presentamos, y concédenos que esta Eucaristía que estamos celebrando, nos haga participar de la salvación eterna. Por Jesucristo nuestro Señor.",postCommunion:"Por nuestra participación en esta Eucaristía, enséñanos, Señor, a no poner nuestro corazón en las cosas pasajeras, sino en los bienes eternos. Por Jesucristo, nuestro Señor."}},{source:"liturgiapapal",title:"Jueves de la 3ª semana de Adviento",aliases:["Jueves de la 3ª semana de Adviento","Jueves de la III semana de Adviento"],fields:{entranceAntiphon:"Tú, Señor, estás cerca y todos tus caminos son verdaderos; hace tiempo comprendí tus preceptos, porque tú eres eterno.",communionAntiphon:"Llevemos ya desde ahora una vida sobria, justa y piadosa, aguardando la dicha que esperamos y la manifestación de la gloria del gran Dios."}},{source:"icergua",title:"20 de diciembre",aliases:["20 de diciembre"],fields:{collect:"A ejemplo de santa María que, al aceptar tu voluntad, anunciada por el ángel, recibió en su seno a tu Hijo, fue cubierta con la gracia del Espíritu Santo y se convirtió en templo de la divinidad, concédenos, Padre todopoderoso, la gracia de aceptar tus designios con humildad de corazón. Por nuestro Señor Jesucristo.",offerings:"Acepta, Señor, el único sacrificio que puede agradarte y, por nuestra participación en este sacramento, concédenos los bienes que la fe nos invita a esperar. Por Jesucristo, nuestro Señor.",postCommunion:"Protege, Señor, con tu poder a cuantos has alimentado con esta Eucaristía, y haz que encuentren en este sacramento la fuente de la paz verdadera. Por Jesucristo, nuestro Señor."}},{source:"textosliturgia",title:"20 de diciembre",aliases:["20 de diciembre"],fields:{entranceAntiphon:"Brotará un renuevo del tronco de Jesé y la gloria del Señor llenará toda la tierra. Todos verán la salvación de Dios.",communionAntiphon:"El ángel dijo a María: Concebirás y dará a luz un hijo, y le pondrás por nombre Jesús."}},{source:"icergua",title:"Jueves de la 4ª semana de Cuaresma",aliases:["Jueves de la 4ª semana de Cuaresma","Jueves de la IV semana de Cuaresma"],fields:{collect:"Asiste y protege siempre, Señor, a esta familia tuya, que ha puesto en ti toda su esperanza, a fin de que purificados de nuestros pecados, permanezcamos fieles a nuestro compromiso bautismal y obtengamos la herencia prometida. Por nuestro Señor Jesucristo.",offerings:"Mira, Señor, con agrado el sacrificio que vamos a ofrecerte y concédenos por él, la conversión de nuestra vida y la salvación del mundo. Por Jesucristo, nuestro Señor.",postCommunion:"Por medio de este sacramento que ya desde ahora nos comunica tu fuerza, concédenos, Padre misericordioso, participar de la vida eterna. Por Jesucristo, nuestro Señor."}},{source:"spain",title:"Jueves de la 4ª semana de Cuaresma",aliases:["Jueves de la 4ª semana de Cuaresma","Jueves de la IV semana de Cuaresma"],fields:{entranceAntiphon:"Que se alegren los que buscan al Señor. Recurrid al Señor y a su poder, buscad continuamente su rostro.",communionAntiphon:"Pondré mi ley en su interior y la escribiré en sus corazones; yo seré su Dios y ellos serán mi pueblo, dice el Señor."}},{source:"spain",title:"Miércoles de la 5ª semana de Cuaresma",aliases:["Miércoles de la 5ª semana de Cuaresma","Miércoles de la V semana de Cuaresma"],fields:{entranceAntiphon:"Señor, me librarás de mis enemigos, me levantarás sobre los que resisten y me salvarás del hombre cruel.",collect:"Ilumina, Dios misericordioso, el corazón de tus hijos, santificado por la penitencia, y, al infundirles el piadoso deseo de servirte, escucha compasivo a los que te suplican. Por nuestro Señor Jesucristo.",offerings:"Señor, te consagramos las ofrendas que nos has concedido presentar en honor de tu nombre, para que se conviertan en remedio de nuestra debilidad. Por Jesucristo, nuestro Señor.",communionAntiphon:"Dios nos ha trasladado al reino del Hijo de su amor, por cuya sangre hemos recibido la redención, el perdón de los pecados.",postCommunion:"Señor, el sacramento que acabamos de recibir sea medicina del cielo, para que elimine las culpas de nuestros corazones y nos asegure tu constante protección. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"Miércoles de la 4ª semana de Pascua",aliases:["Miércoles de la 4ª semana de Pascua","Miércoles de la IV semana de Pascua"],fields:{collect:"Dios nuestro, vida de los creyentes, gloria de los humildes, felicidad de los justos, escucha nuestras súplicas y sacia, con la abundancia de tus dones, la sed de quienes esperamos en tus promesas. Por nuestro Señor Jesucristo.",offerings:"Dios nuestro, que por medio de estos dones que vas a convertir en el Cuerpo y la Sangre de tu Hijo, nos haces participar de tu misma vida divina, concédenos que nuestra conducta ponga de manifiesto las verdades que nos has revelado. Por Jesucristo, nuestro Señor.",postCommunion:"Señor, tú que nos has concedido participar en esta Eucaristía, míranos con bondad y ayúdanos a vencer nuestra fragilidad humana, para poder vivir como hijos tuyos. Por Jesucristo, nuestro Señor."}},{source:"liturgiapapal",title:"Miércoles de la 4ª semana de Pascua",aliases:["Miércoles de la 4ª semana de Pascua","Miércoles de la IV semana de Pascua"],fields:{entranceAntiphon:"Te daré gracias entre las naciones, Señor; contaré tu fama a mis hermanos. Aleluya.",communionAntiphon:"Dice el Señor: «Yo os he escogido sacándoos del mundo y os he destinado para que vayáis y deis fruto y vuestro fruto permanezca». Aleluya."}},{source:"icergua",title:"Viernes de la 6ª semana de Pascua",aliases:["Viernes de la 6ª semana de Pascua","Viernes de la VI semana de Pascua"],fields:{collect:"Te pedimos, Señor, que por medio de la predicación del Evangelio se extienda por todo el mundo la acción redentora de Cristo, y que toda la humanidad forme una sola familia, conforme a la voluntad de tu Hijo, que vive y reina contigo.",offerings:"Acepta, Señor, con bondad, las ofrendas que te presentamos, y ayúdanos a conservar tu gracia para participar de la felicidad eterna. Por Jesucristo, nuestro Señor.",postCommunion:"Señor, que tu amor paterno proteja siempre a quienes has salvado por medio de la pasión de tu Hijo, y que Cristo resucitado sea la fuente de todas nuestras alegrías. Por Jesucristo, nuestro Señor."}},{source:"liturgiapapal",title:"Viernes de la 6ª semana de Pascua",aliases:["Viernes de la 6ª semana de Pascua","Viernes de la VI semana de Pascua"],fields:{entranceAntiphon:"Señor, con tu sangre has adquirido para Dios hombres de toda tribu, lengua, pueblo y nación; y has hecho de ellos para nuestro Dios un reino de sacerdotes. Aleluya.",communionAntiphon:"Cristo nuestro Señor fue entregado por nuestros pecados, y resucitó para nuestra justificación. Aleluya."}},{source:"icergua",title:"San Francisco de Asís",aliases:["San Francisco de Asís","San Francisco de Asís, religioso","4 de octubre"],fields:{collect:"Dios nuestro, que otorgaste a san Francisco de Asís la gracia de seguir gozosamente a Cristo en una vida de pobreza y humildad, haz que, a ejemplo suyo, nuestra preocupación esencial en esta tierra sea la de amar y seguir a tu Hijo, Jesucristo, que vive y reina contigo.",offerings:"Acepta, Señor, nuestros dones y prepáranos a celebrar el memorial de la pasión de tu Hijo, que tan honda huella dejó en la vida de san Francisco. Por Jesucristo, nuestro Señor.",postCommunion:"Señor, que esta sagrada comunión nos haga amar profundamente a Cristo y a los seres humanos para que, a ejemplo de san Francisco de Asís, procuremos sin cesar el bien de nuestros hermanos. Por Jesucristo, nuestro Señor."}},{source:"santaescolastica",title:"San Francisco de Asís",aliases:["San Francisco de Asís","San Francisco de Asís, religioso","4 de octubre"],fields:{entranceAntiphon:"El hombre de Dios ha dejado su casa, ha abandonado su herencia, para desposarse con la Dama Pobreza, y el Señor lo llamó a su servicio.",communionAntiphon:"El hombre de Dios ha dejado su casa, ha abandonado su herencia, para desposarse con la Dama Pobreza, y el Señor lo llamó a su servicio."}},{source:"ldhoras",title:"San Bonifacio, obispo y mártir",aliases:["San Bonifacio, obispo y mártir","San Bonifacio obispo y mártir","Bonifacio, obispo y mártir","Bonifacio"],fields:{entranceAntiphon:`Éstos son los santos que llegaron a ser amigos de Dios,
y recibieron la gloria por el anuncio de la verdad divina.

O bien:
Te alabaré entre las naciones, Señor,
y anunciaré tu Nombre a mis hermanos.

O bien:
Qué hermosos son sobre las montañas
los pies de los que anuncian buenas noticias,
proclaman la paz, traen la felicidad, pregonan la salvación.

O bien:
Anuncien la gloria del Señor entre las naciones
y sus maravillas entre los pueblos,
porque el Señor es grande y digno de alabanza.`,collect:`Te rogamos, Padre,
que el mártir san Bonifacio interceda por nosotros,
para que conservemos con firmeza
y manifestemos con nuestras obras
la fe que enseñó con su palabra y selló con su sangre.
Por nuestro Señor Jesucristo, tu Hijo,
que vive y reina contigo en la unidad del Espíritu Santo,
y es Dios, por los siglos de los siglos.`,offerings:`Dios todopoderoso,
acepta nuestra ofrenda en la fiesta de san Bonifacio,
y concédenos expresar en la vida
el misterio de la pasión de tu Hijo
que ahora celebramos.
Por Jesucristo, nuestro Señor.

O bien:
Padre, escucha con bondad nuestras súplicas
y líbranos de toda culpa,
para que tu gracia purifique
a quienes te servimos con estos sagrados misterios.
Por Jesucristo, nuestro Señor.

O bien:
Te pedimos, Padre,
que bendigas estos dones que te ofrecemos
en la conmemoración de san Bonifacio,
para que, al recibirlos,
seamos liberados de toda culpa
y saciados con los alimentos celestiales.
Por Jesucristo, nuestro Señor.`,communionAntiphon:`Apacentaré a mis ovejas
y las llevaré a descansar, dice el Señor.

O bien:
Lo que Yo les digo en la oscuridad,
repítanlo en pleno día, dice el Señor;
y lo que escuchen al oído,
proclámenlo desde lo alto de las casas.

O bien:
Dice el Señor: Vayan por todo el mundo,
anuncien el Evangelio y Yo estaré siempre con ustedes.

O bien:
Permanezcan en mí, como Yo en ustedes, dice el Señor.
El que permanece en mí, y Yo en él, da mucho fruto.

O bien:
El Señor envió a los discípulos para que anunciaran en las ciudades:
el reino de Dios está cerca de ustedes.

O bien:
La semilla que cayó en buena tierra
son aquéllos que dan fruto en la perseverancia,
con un corazón bien dispuesto.`,postCommunion:`Señor y Padre nuestro, por el misterio que celebramos
confirma a tus servidores en aquella fe verdadera
que san Bonifacio difundió incansablemente
hasta el fin de su vida,
y concédenos profesarla siempre de palabra y de obra.
Por Jesucristo, nuestro Señor.

O bien:
Te pedimos, Señor y Dios nuestro,
que los sacramentos recibidos
fortalezcan en nosotros aquella fe
que transmitió la predicación de los apóstoles,
y custodió la solicitud pastoral de san Bonifacio.
Por Jesucristo, nuestro Señor.

O bien:
Padre, danos nueva vida por los sacramentos recibidos,
y, en esta conmemoración de san Bonifacio,
nos estimule el ejemplo de sus virtudes apostólicas.
Por Jesucristo, nuestro Señor.`}},{source:"icergua",title:"De la Santísima Eucaristía",aliases:["De la Santísima Eucaristía","Corpus Christi","Cuerpo y Sangre de Cristo","Santísimo Cuerpo y Sangre de Cristo","Eucaristía"],fields:{entranceAntiphon:`El Señor los alimentó con flor de harina
y los sació con miel silvestre.`,collect:"Oh Dios, que en este sacramento admirable nos dejaste el memorial de tu pasión, te pedimos nos concedas venerar de tal modo los sagrados misterios de tu Cuerpo y de tu Sangre, que experimentemos constantemente en nosotros el fruto de tu redención. Tú que vives y reinas.",offerings:"Concede, Señor, a tu Iglesia, el don de la paz y la unidad, significado en las ofrendas sacramentales que te presentamos. Por Jesucristo nuestro Señor. Amén.",communionAntiphon:`El que come mi carne y bebe mi sangre,
permanece en mí y yo en él, dice el Señor.`,postCommunion:"La comunión de tu Cuerpo y Sangre, Señor, signo del banquete del reino, que hemos gustado en esta celebración, nos llene del gozo eterno de tu divinidad. Tú que vives y reinas por los siglos de los siglos."}}];function Zs(e){const o={i:"1",ii:"2",iii:"3",iv:"4",v:"5",vi:"6",vii:"7",viii:"8",ix:"9",x:"10",xi:"11",xii:"12",xiii:"13",xiv:"14",xv:"15",xvi:"16",xvii:"17",xviii:"18",xix:"19",xx:"20",xxi:"21",xxii:"22",xxiii:"23",xxiv:"24",xxv:"25",xxvi:"26",xxvii:"27",xxviii:"28",xxix:"29",xxx:"30",xxxi:"31",xxxii:"32",xxxiii:"33",xxxiv:"34"};return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim().split(/\s+/).map(a=>o[a]??a).join(" ")}function KA(e){const a=Zs(e??"").match(/\b(?:lunes|martes|miercoles|jueves|viernes|sabado)\b.*\b(\d{1,2})\b.*\bsemana\b.*\btiempo\b.*\bordinario\b/);if(!a)return"";const s=a[1];return`ordinary time ${s} sunday ${s} domingo del tiempo ordinario`}function XA(e){if(!e.date)return"";const o=Zs(e.celebration??"");return/^\d{1,2} de enero$/.test(o)?`${["domingo","lunes","martes","miercoles","jueves","viernes","sabado"][e.date.getDay()]} del tiempo de navidad`:""}function ZA(e){if(!e.date)return"";const o=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];return`${e.date.getDate()} de ${o[e.date.getMonth()]}`}function eP(e){const o=Zs(e??"");return!o||/\b(?:christ|jesus|lord|god)\b/.test(o)?"":[[/\bsaints?\b/,"santo santa santos santas"],[/\bmartyrs?\b/,"martir martires"],[/\bbishops?\b/,"obispo"],[/\bpopes?\b/,"papa"],[/\bpriests?\b|\bpresbyters?\b/,"presbitero"],[/\bvirgins?\b/,"virgen"],[/\breligious\b/,"religioso religiosa"],[/\babbots?\b/,"abad"],[/\babbesses?\b/,"abadesa"],[/\bmonks?\b/,"monje"],[/\bnuns?\b/,"monja"]].filter(([s])=>s.test(o)).map(([,s])=>s).join(" ")}function oP(e){return Zs([e.celebration,ZA(e),eP(e.celebration),KA(e.celebration),XA(e),e.rank,...e.seasons??[]].filter(Boolean).join(" "))}function aP(e,o){const a=oP(o);if(!a)return[];const s=Math.max(...Tc.filter(i=>!i.title.startsWith("Común")&&i.fields[e]).map(i=>hn(i,a)),0),n=Tc.filter(i=>{if(!i.fields[e])return!1;const t=hn(i,a);return t?i.title.startsWith("Común")||!s||t>=s:!1}),r=n.filter(i=>!i.title.startsWith("Común"));return(r.length?r:n).sort((i,t)=>hn(t,a)-hn(i,a))}function hn(e,o){return Math.max(...e.aliases.map(a=>{const s=Zs(a);return s?o.includes(s)?s.length:s.includes(o)?o.length:0:0}),0)}const sP=`$Todos.$ Gloria a Dios en el cielo,
y en la tierra paz a los hombres que ama el Señor.

Por tu inmensa gloria
te alabamos, te bendecimos,
te adoramos, te glorificamos,
te damos gracias,
Señor Dios, Rey celestial,
Dios Padre todopoderoso.

Señor, Hijo único, Jesucristo.
Señor Dios, Cordero de Dios,
Hijo del Padre;
tú que quitas el pecado del mundo,
ten piedad de nosotros;
tú que quitas el pecado del mundo,
atiende nuestra súplica;
tú que estás sentado a la derecha del Padre,
ten piedad de nosotros;
porque sólo tú eres Santo,
sólo tú Señor,
sólo tú Altísimo, Jesucristo,
con el Espíritu Santo
en la gloria de Dios Padre.
Amén.`,nP=`$Todos.$ Creo en un solo Dios,
Padre todopoderoso,
Creador del cielo y de la tierra,
de todo lo visible y lo invisible.

Creo en un solo Señor, Jesucristo,
Hijo único de Dios,
nacido del Padre antes de todos los siglos:
Dios de Dios, Luz de Luz,
Dios verdadero de Dios verdadero,
engendrado, no creado,
de la misma naturaleza del Padre,
por quien todo fue hecho;
que por nosotros, los hombres,
y por nuestra salvación bajó del cielo,
y por obra del Espíritu Santo
se encarnó de María, la Virgen,
y se hizo hombre;
y por nuestra causa fue crucificado
en tiempos de Poncio Pilato;
padeció y fue sepultado,
y resucitó al tercer día, según las Escrituras,
y subió al cielo,
y está sentado a la derecha del Padre;
y de nuevo vendrá con gloria
para juzgar a vivos y muertos,
y su reino no tendrá fin.

Creo en el Espíritu Santo,
Señor y dador de vida,
que procede del Padre y del Hijo,
que con el Padre y el Hijo
recibe una misma adoración y gloria,
y que habló por los profetas.

Creo en la Iglesia,
que es una, santa, católica y apostólica.
Confieso que hay un solo bautismo
para el perdón de los pecados.
Espero la resurrección de los muertos
y la vida del mundo futuro.
Amén.`,rP=`$Todos.$ Creo en Dios, Padre todopoderoso,
Creador del cielo y de la tierra.

Creo en Jesucristo, su único Hijo, nuestro Señor,
que fue concebido por obra y gracia del Espíritu Santo,
nació de santa María Virgen,
padeció bajo el poder de Poncio Pilato,
fue crucificado, muerto y sepultado,
descendió a los infiernos,
al tercer día resucitó de entre los muertos,
subió a los cielos
y está sentado a la derecha de Dios, Padre todopoderoso.
Desde allí ha de venir a juzgar a vivos y muertos.

Creo en el Espíritu Santo,
la santa Iglesia católica,
la comunión de los santos,
el perdón de los pecados,
la resurrección de la carne
y la vida eterna.
Amén.`,iP=`$Todos.$ Santo, Santo, Santo es el Señor,
Dios del universo.
Llenos están el cielo y la tierra de tu gloria.
Hosanna en el cielo.
Bendito el que viene en nombre del Señor.
Hosanna en el cielo.`,tP=`$Sacerdote.$ Líbranos de todos los males, Señor,
y concédenos la paz en nuestros días,
para que, ayudados por tu misericordia,
vivamos siempre libres de pecado
y protegidos de toda perturbación,
mientras esperamos la gloriosa venida
de nuestro Salvador Jesucristo.

$Pueblo.$ Tuyo es el reino,
tuyo el poder y la gloria,
por siempre, Señor.`,lP=`$Sacerdote.$ Señor Jesucristo, que dijiste a tus apóstoles:
"La paz os dejo, mi paz os doy";
no tengas en cuenta nuestros pecados,
sino la fe de tu Iglesia
y, conforme a tu palabra,
concédele la paz y la unidad.
Tú que vives y reinas por los siglos de los siglos.

$Pueblo.$ Amén.

$Sacerdote.$ La paz del Señor esté siempre con vosotros.

$Pueblo.$ Y con tu espíritu.

$Sacerdote/diácono.$ Daos fraternalmente la paz.`,cP=`$Sacerdote.$ Señor Jesucristo, Hijo de Dios vivo,
que, por voluntad del Padre,
cooperando el Espíritu Santo,
diste con tu muerte la vida al mundo:
líbrame, por la recepción de tu Cuerpo y de tu Sangre,
de todas mis culpas y de todo mal.
Concédeme cumplir siempre tus mandamientos
y jamás permitas que me separe de ti.`,uP=`$Sacerdote.$ Señor Jesucristo,
la comunión de tu Cuerpo y de tu Sangre
no sea para mí un motivo de juicio y condenación,
sino que, por tu piedad,
me aproveche para defensa de alma y cuerpo
y como remedio saludable.`,dP=`$Sacerdote.$ Bendito seas, Señor, Dios del universo, por este pan, fruto de la tierra y del trabajo del hombre, que recibimos de tu generosidad y ahora te presentamos; él será para nosotros pan de vida.

$Pueblo.$ Bendito seas por siempre, Señor.

$Sacerdote.$ El agua unida al vino sea signo de nuestra participación en la vida divina de quien ha querido compartir nuestra condición humana.

$Sacerdote.$ Bendito seas, Señor, Dios del universo, por este vino, fruto de la vid y del trabajo del hombre, que recibimos de tu generosidad y ahora te presentamos; él será para nosotros bebida de salvación.

$Pueblo.$ Bendito seas por siempre, Señor.

$Sacerdote.$ Acepta, Señor, nuestro corazón contrito y nuestro espíritu humilde; que este sea hoy nuestro sacrificio y que sea agradable en tu presencia, Señor, Dios nuestro.

$Sacerdote.$ Lava del todo mi delito, Señor, limpia mi pecado.`,mP=`$Rúbrica.$ Mientras se canta el canto de ofertorio, el sacerdote puede decir en secreto las fórmulas de bendición del pan y del vino.

$Sacerdote, en secreto.$ Bendito seas, Señor, Dios del universo, por este pan, fruto de la tierra y del trabajo del hombre, que recibimos de tu generosidad y ahora te presentamos; él será para nosotros pan de vida.

$Sacerdote, en secreto.$ El agua unida al vino sea signo de nuestra participación en la vida divina de quien ha querido compartir nuestra condición humana.

$Sacerdote, en secreto.$ Bendito seas, Señor, Dios del universo, por este vino, fruto de la vid y del trabajo del hombre, que recibimos de tu generosidad y ahora te presentamos; él será para nosotros bebida de salvación.

$Sacerdote, en secreto.$ Acepta, Señor, nuestro corazón contrito y nuestro espíritu humilde; que este sea hoy nuestro sacrificio y que sea agradable en tu presencia, Señor, Dios nuestro.

$Sacerdote, en secreto.$ Lava del todo mi delito, Señor, limpia mi pecado.`,Br="$Pueblo.$ El Señor reciba de tus manos este sacrificio, para alabanza y gloria de su nombre, para nuestro bien y el de toda su santa Iglesia.",pP=`$Sacerdote.$ ¿Creéis en Dios, Padre todopoderoso, Creador del cielo y de la tierra?

$Pueblo.$ Sí, creo.

$Sacerdote.$ ¿Creéis en Jesucristo, su único Hijo, nuestro Señor, que nació de santa María Virgen, murió, fue sepultado, resucitó de entre los muertos y está sentado a la derecha del Padre?

$Pueblo.$ Sí, creo.

$Sacerdote.$ ¿Creéis en el Espíritu Santo, en la santa Iglesia católica, en la comunión de los santos, en el perdón de los pecados, en la resurrección de los muertos y en la vida eterna?

$Pueblo.$ Sí, creo.

$Sacerdote.$ Esta es nuestra fe. Esta es la fe de la Iglesia, que nos gloriamos de profesar en Cristo Jesús, Señor nuestro.`,fP=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno,
por Cristo, Señor nuestro.

A él lo constituiste fundamento de todo,
y quisiste que de su plenitud participáramos todos.
Él, siendo Dios, se despojó de su gloria,
y por su sangre derramada en la cruz
trajo la paz y la reconciliación a la creación entera.

Ahora, constituido Señor del universo,
es fuente de salvación para cuantos creen en él.
Por eso, con los ángeles y los arcángeles
y con todos los coros celestiales,
cantamos sin cesar el himno de tu gloria.`,gP=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno.

Pues por medio de tu amado Hijo
eres el creador del género humano
y también el autor bondadoso de la nueva creación.

Por eso, con razón te sirven todas las criaturas,
con justicia te alaban todos los redimidos,
y unánimes te bendicen tus santos.
Con ellos, también nosotros,
a una con los ángeles,
cantamos tu gloria gozosos proclamando.`,SP=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno.

Pues, aunque no necesitas de nuestra alabanza,
tú nos concedes que seamos agradecidos;
y, aunque nuestras bendiciones no aumentan tu gloria,
nos aprovechan para nuestra salvación.
Por Cristo, Señor nuestro.

Por eso, unidos a los ángeles,
te aclamamos llenos de alegría.`,bP=`$Sacerdote.$ En verdad es justo darte gracias,
Señor, Padre santo,
Dios de la alianza y de la paz.

Porque tú llamaste a Abrahán
y le mandaste salir de su tierra,
para constituirlo padre de todas las naciones.
Tú suscitaste a Moisés
para librar a tu pueblo
y guiarlo a la tierra de promisión.

Tú, en la etapa final de la historia,
has enviado a tu Hijo
como huésped y peregrino en medio de nosotros,
para redimirnos del pecado y de la muerte;
y has derramado el Espíritu,
para hacer de todas las naciones un solo pueblo nuevo,
que tiene como meta tu reino,
como estado la libertad de tus hijos
y como ley el precepto del amor.

Por estos dones de tu benevolencia,
unidos a los ángeles y a los santos,
cantamos con gozo el himno de tu gloria.`,vP=`$Sacerdote.$ En verdad es justo darte gracias,
y es deber nuestro alabarte,
Padre santo,
Dios todopoderoso y eterno,
en todos los momentos y circunstancias de la vida,
en la salud y en la enfermedad,
en el sufrimiento y en el gozo,
por tu siervo Jesús, nuestro Redentor.

Porque él, en su vida terrena,
pasó haciendo el bien
y curando a los oprimidos por el mal.
También hoy, como buen samaritano,
se acerca a todo ser humano
que sufre en su cuerpo o en su espíritu,
y sana sus heridas con el aceite del consuelo
y con el ungüento de la esperanza.

Por este don de tu gracia,
incluso cuando nos vemos sumergidos
en la noche del dolor,
vislumbramos la luz pascual
en tu Hijo, muerto y resucitado.

Por eso, unidos a los ángeles y a los santos,
cantamos a una voz el himno de tu gloria.`,yP=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno.

Tú eres el Dios vivo y verdadero;
el universo está lleno de tu presencia,
pero sobre todo has dejado la huella de tu gloria
en el ser humano, creado a tu imagen y semejanza.

Tú lo llamas a cooperar con el trabajo cotidiano
en el proyecto de la creación
y le das tu Espíritu
para que sea artífice de justicia y de paz,
en Cristo, el hombre nuevo.

Por eso, unidos a los ángeles y a los santos,
cantamos con alegría el himno de tu alabanza.`,Lc=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno,
por Cristo, Señor nuestro.

Por él nos has conducido al conocimiento de la verdad,
para hacernos miembros de su cuerpo
mediante el vínculo de una misma fe
y un mismo bautismo;
y has enviado sobre todos los pueblos
la efusión de tu Espíritu Santo.

Tu Espíritu es artífice de la unidad
y, por la generosa distribución de sus dones,
se constituye en admirable constructor
de la nueva creación.
Él habita en tus hijos de adopción,
él santifica a toda tu Iglesia
y, dirigiéndola con sabiduría,
la guía a la perfección.

Por eso, unidos al coro de los ángeles,
te alabamos con alegría,
cantando tu gloria.`,Mc=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno.

Porque en toda casa consagrada a la oración
te dignas manifestar la gloria
de tu incomparable amor,
y, constituida en tabernáculo
de tu presencia sacramental,
nos recuerdas que tú mismo
nos has hecho templos del Espíritu Santo,
para que por tu gracia
brillemos con el esplendor de la santidad.

Con tu acción constante,
santificas a la Iglesia, esposa de Cristo,
que, simbolizada por estos templos materiales,
se llena de gozo por la multitud de sus hijos
y se presenta ante el mundo
como signo de la presencia de tu Reino.

Por eso, con todos los ángeles y santos,
te alabamos,
proclamando sin cesar.`,Nc=`$Sacerdote.$ En verdad es justo darte gracias
y exaltar tu nombre,
Padre santo y misericordioso,
por Jesucristo,
Señor y redentor nuestro.

Te alabamos, te bendecimos y te glorificamos
por el sacramento del nuevo nacimiento.
Tú has querido que del corazón abierto de tu Hijo
manara para nosotros el don nupcial del Bautismo,
primera pascua de los creyentes,
puerta de nuestra salvación,
inicio de la vida en el Espíritu
y fuente de la nueva creación.

A través del agua,
por la acción de tu Espíritu,
engendras en el seno de la Iglesia,
virgen y madre,
un pueblo de sacerdotes y reyes,
para que congregue a todas las naciones
a la unidad y a la santidad de tu amor.

Por este don de tu benevolencia
tu familia te adora
y, unida a los ángeles y a los santos,
canta el himno de tu gloria.`,_c=`$Sacerdote.$ En verdad es justo darte gracias,
es bueno cantar tu gloria,
Padre santo,
fuente y origen de todo bien.

Tú, en el bautismo,
das nueva vida a los creyentes
y los haces partícipes
del misterio pascual de tu Hijo.

Tú los confirmas con el sello de tu Espíritu,
mediante la imposición de manos
y la unción real del santo crisma.
Así, renovados a imagen de Cristo,
el ungido por el Espíritu Santo
y enviado para anunciar la buena nueva de la salvación,
los invitas al banquete eucarístico
y los envías como testigos de la fe
en la Iglesia y en el mundo.

Por eso nosotros,
reunidos en esta asamblea festiva
para celebrar los prodigios de un renovado Pentecostés,
y unidos a los ángeles y a los santos,
cantamos el himno de tu gloria.`,zc=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno.

Ya que, por la unción del Espíritu Santo,
constituiste a tu Hijo unigénito
Pontífice de la alianza nueva y eterna,
y has querido que su sacerdocio único
se perpetuara en la Iglesia.

Porque Cristo no solo comunica
la dignidad del sacerdocio real
a todo el pueblo redimido,
sino que, mediante la imposición de las manos,
eligiendo a algunos de entre los hermanos,
los hace partícipes de su ministerio de salvación.

Ellos renuevan, en su nombre,
el sacrificio redentor,
preparan para tus hijos el banquete pascual,
fomentan la caridad en tu pueblo santo,
lo alimentan con la palabra
y lo fortifican con los sacramentos;
y, consagrando su vida a ti
y a la salvación de sus hermanos,
se esfuerzan por reproducir en sí
la misma imagen del Señor,
dando un constante testimonio
de fidelidad y de amor.

Por eso, Señor,
con todos los ángeles y santos,
te alabamos,
cantando llenos de alegría.`,Jc=`$Sacerdote.$ En verdad es justo y necesario,
alabarte y darte gracias,
Padre santo,
Dios omnipotente y misericordioso,
de quien proviene toda paternidad
por la efusión del Espíritu.

En tu Hijo Jesucristo,
sacerdote eterno,
siervo obediente y pastor,
has puesto el origen y la fuente
de todo ministerio,
para mantener vivo el testimonio apostólico
en tu pueblo, aún peregrino.

Entre la diversidad de dones y carismas
tú eliges dispensadores de los santos misterios,
para que en todas las naciones de la tierra
se ofrezca el sacrificio perfecto
y, con la palabra y los sacramentos,
se edifique la Iglesia,
comunidad de la nueva alianza
y templo de tu gloria.

Por este misterio de salvación,
unidos a los ángeles y a los santos,
cantamos con gozo el himno de tu alabanza.`,jc=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno.

Porque estableciste con tu pueblo
una nueva alianza,
para hacer partícipes en Cristo
de la naturaleza divina
y coherederos de su gloria
a los que redimiste
por el misterio de su muerte y resurrección.

Y quisiste darnos a entender
esta gracia de tu liberalidad
en la unión del hombre y la mujer,
para que el sacramento que ahora celebramos
nos recuerde el designio inefable de tu amor.

Por eso, con los ángeles y los santos,
cantamos sin cesar el himno de tu gloria.`,xc=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno,
por Cristo, Señor nuestro.

En él resplandece la esperanza
de nuestra feliz resurrección;
y así, aunque la certeza de morir nos entristece,
nos llena de gozo
el saber que somos herederos de tu Reino.

Pues, para quienes creemos en ti, Señor,
la vida se transforma, no se acaba;
por lo que, cuando se disuelve
nuestra morada terrenal,
la vida nueva de la que ya participamos
llega a su plenitud.

Por eso, con los ángeles y los arcángeles
y con todos los coros celestiales,
cantamos sin cesar el himno de tu gloria.`,Uc=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno,
por Cristo, Señor nuestro.

Porque él es la salvación del mundo,
la vida de toda la humanidad
y la resurrección de los muertos.

Por él, los ángeles,
que gozan de tu presencia,
eternamente te adoran;
permítenos unirnos a sus voces,
cantando jubilosos tu alabanza.`,Hc=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno,
por Cristo, Señor nuestro.

Porque él es la salvación del mundo,
la vida de los hombres,
la resurrección de los muertos.

Por él,
los ángeles te cantan con júbilo eterno
y nosotros nos unimos a sus voces
cantando humildemente tu alabanza.`,Vc=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno.

Porque tu voluntad nos da la vida,
tus decretos la dirigen
y un mandato tuyo,
en castigo del pecado,
nos devuelve a la tierra
de la que habíamos sido sacados.

Y también te damos gracias
porque, al redimirnos con la muerte de tu Hijo Jesucristo,
por tu voluntad salvadora
nos llevas a nueva vida
para que tengamos parte en su gloriosa resurrección.

Por eso,
como los ángeles te cantan en el cielo,
así nosotros en la tierra
te aclamamos diciendo sin cesar.`,wc=`$Sacerdote.$ En verdad es justo darte gracias
y deber nuestro glorificarte,
Padre santo.

Porque si el morir se debe al hombre,
el ser llamados a la vida con Cristo
es obra gratuita de tu amor,
ya que, habiendo muerto por el pecado,
hemos sido redimidos por la victoria de tu Hijo.

Por eso,
como los ángeles te cantan en el cielo,
así nosotros te proclamamos en la tierra,
diciendo sin cesar.`,hP=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso, Pastor eterno.

Porque no abandonas a tu rebaño,
sino que lo cuidas continuamente;
para que por el ministerio e intercesión de los mismos Apóstoles,
a quienes tu Hijo dejó como testigos y heraldos de su Evangelio,
confiadamente viva su vocación de pueblo de la alianza
y prosiga su camino hasta alcanzar la plenitud de la salvación.

Por eso, con los ángeles y los arcángeles
y con todos los coros celestiales,
cantamos sin cesar el himno de tu gloria.`,Fc=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno,
por Cristo, Señor nuestro.

Porque has cimentado tu Iglesia
sobre la roca de los Apóstoles,
para que permanezca en el mundo
como signo de santidad
y señale a todos los hombres
el camino que nos lleva hacia ti.

Por eso,
Señor, con todos los ángeles
te alabamos ahora y por siempre
diciendo con humilde fe.`,EP=`$Sacerdote.$ En verdad es justo darte gracias
y deber nuestro glorificarte,
Padre santo.

Porque por Cristo, Señor nuestro,
en cada uno de tus santos
resplandece tu misericordia y la grandeza de tu gloria,
pues la corona de triunfo de la que les has hecho participar
es luminosa manifestación de tu ilimitado amor.

Con su vida, nos proporcionas ejemplo;
ayuda, con su intercesión,
y por la comunión con ellos, anticipas el gozo de la consumación.

Alentados por el testimonio de su amor
somos robustecidos a lo largo de nuestra peregrinación,
abrigando la certeza de que nos acercamos a la plenitud de la salvación.

Por eso, con los ángeles y arcángeles,
y con la multitud de los santos,
te cantamos un himno de alabanza,
proclamando sin cesar.`,kc=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno,
por Cristo, Señor nuestro.

Porque mediante el testimonio admirable de tus santos
fecundas sin cesar a tu Iglesia
con vitalidad siempre nueva,
dándonos así pruebas evidentes de tu amor.
Ellos nos estimulan con su ejemplo
en el camino de la vida
y nos ayudan con su intercesión.

Por eso,
ahora, nosotros, llenos de alegría,
te aclamamos con los ángeles y los santos
diciendo.`,AP=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno,
por Cristo Señor nuestro.

Porque la sangre del glorioso mártir,
derramada como la de Cristo para proclamar su fidelidad a ti,
manifiesta tu admirable poder,
y al transformar la fragilidad en fortaleza
hace que, robustecida, la débil criatura
se convierta en testigo intrépido de tu fidelidad.

Por eso, como los ángeles te cantan en el cielo,
así nosotros en la tierra
te aclamamos, cantando sin cesar.`,Bc=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno.

Porque al alabar nosotros a los santos mártires,
tú eres glorificado
ya que todo lo que concierne a su pasión
es obra admirable de tu poder.
En efecto, tú misericordiosamente
les proporcionas el ardor de la fe,
tú les otorgas la firmeza de la perseverancia
y les concedes la victoria en la batalla,
por Cristo, Señor nuestro.

Por eso, tus creaturas del cielo y de la tierra
te adoran cantando un cántico nuevo,
y nosotros con todos los coros de los ángeles,
proclamamos tu gloria diciendo.`,PP=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno,
por Cristo Señor nuestro.

Porque permites que tu Iglesia se alegre hoy al recordar a {{celebration}}.
Con el ejemplo de su vida nos animas,
sus enseñanzas son fuente de instrucción
y su intercesión es para nosotros protección.

Por eso, con los ángeles y los santos,
te cantamos el himno de alabanza,
proclamando sin cesar.`,qP=`$Sacerdote.$ En verdad es justo y necesario
que te alaben, Señor,
tus criaturas del cielo y de la tierra.

Porque al celebrar a los santos que por amor a ti
se consagraron a Cristo, nuestro Salvador,
reconocemos tu providencia admirable,
que no cesa de llamarnos a la vida de santidad,
para que por la efusión del Espíritu,
participando ya de la vida nueva de tu Reino,
alcancemos al final su plenitud.

Por eso, con todos los ángeles y santos,
te alabamos, cantando sin cesar.`,IP=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno,
por Cristo Señor nuestro.

Pues él, al revelarnos el verdadero sentido del sacerdocio,
se ofreció a ti como víctima salvadora,
y nos mandó que lo ofreciéramos como memorial suyo.

De esta manera, cuando comemos su carne,
inmolada por nosotros, quedamos fortalecidos;
y cuando bebemos su sangre,
derramada por nosotros,
quedamos limpios de nuestros pecados.

Por eso, con los ángeles y los arcángeles
y con todos los coros celestiales,
cantamos sin cesar el himno de tu gloria.`,OP=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno,
por Cristo Señor nuestro.

El cual, en la última cena con los Apóstoles,
cuando iba a ofrecerse a ti como cordero sin mancha,
y tú lo aceptarías como el sacrificio de alabanza perfecta,
para perpetuar entre nosotros los efectos de su pasión salvadora,
nos dejó el memorial de su muerte y resurrección.

Con este sacramento, alimentas y santificas a tus fieles
para que, a los seres humanos que habitan un mismo mundo,
una misma fe los ilumine y un mismo amor los una.

Así pues, nos acercamos a tu mesa
para que, penetrados por la gracia de este admirable misterio,
nos vayas transformando en imagen de tu Hijo.

Por eso, Señor, todas tus criaturas, en el cielo y en la tierra
te adoran proclamando tus alabanzas;
y también nosotros,
junto con los ángeles,
te aclamamos por siempre, cantando.`,CP=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno,
por Cristo, Señor nuestro.

El cual, al venir por vez primera
en la humildad de nuestra carne,
realizó el plan de redención trazado desde antiguo
y nos abrió el camino de la salvación,
para que ahora, que sigue viniendo
por medio de su Espíritu
y revelándonos la plenitud de su obra,
podamos participar de los bienes prometidos.

Por eso, con los ángeles y los arcángeles
y con todos los coros celestiales,
cantamos sin cesar el himno de tu gloria.`,DP=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno,
por Cristo, Señor nuestro.

A quien todos los profetas anunciaron
y la Virgen esperó con inefable amor de madre;
Juan lo proclamó ya próximo
y lo señaló después presente en el mundo.

Él es quien nos concede ahora
prepararnos con alegría
al misterio de su nacimiento,
para que cada vez que llegue hasta nosotros
nos encuentre velando en oración
y cantando su alabanza.

Por eso, con los ángeles y los arcángeles
y con todos los coros celestiales,
cantamos sin cesar el himno de tu gloria.`,RP=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno.

Porque gracias al misterio de la Palabra hecha carne,
la luz de tu gloria ha brillado ante nuestros ojos
con nuevo resplandor,
para que, conociéndote visiblemente
por medio de tu Hijo,
él nos lleve al amor de lo invisible.

Por eso, con los ángeles y los arcángeles
y con todos los coros celestiales,
cantamos sin cesar el himno de tu gloria.`,$P=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno,
por Cristo, Señor nuestro.

El cual, en el misterio santo de su nacimiento,
se hizo presente entre nosotros
sin dejar la gloria del Padre;
siendo invisible en su condición divina,
se hizo visible al asumir la nuestra
y, engendrado antes de todo tiempo,
comenzó a existir en el tiempo
para reintegrar en la unidad a la creación entera
y llamar de nuevo al ser humano caído
a la participación gloriosa en tu Reino.

Por eso, unidos a los coros angélicos,
te aclamamos llenos de alegría.`,Yc=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación,
darte gracias
siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno,
por Cristo nuestro Señor.

Por él,
hoy resplandece ante el mundo
el maravilloso intercambio que nos salva,
pues al revestirse tu Hijo de nuestra frágil condición,
no sólo confiere dignidad eterna
a la naturaleza humana,
sino que por esta unión admirable,
nos hace a nosotros eternos.

Por eso,
unidos a los coros angélicos,
te aclamamos llenos de alegría.`,TP=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno.

Porque has revelado en Cristo
la luz para todos los pueblos
y el misterio de nuestra salvación;
pues al manifestarse tu Hijo
en nuestra carne mortal,
nos hiciste partícipes
de la gloria de su inmortalidad.

Por eso, con los ángeles y los arcángeles
y con todos los coros celestiales,
cantamos sin cesar el himno de tu gloria.`,LP=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno,
por Cristo, Señor nuestro.

Por él reanimas en tus hijos
la confianza de ser el pueblo de tu elección,
para que se dediquen con mayor entrega
a la alabanza divina y al amor fraterno,
y por la celebración de los misterios
que nos dieron nueva vida,
participemos con plenitud
de los dones del Espíritu
y del gozo de tu Reino.

Por eso, con los ángeles y los arcángeles
y con todos los coros celestiales,
cantamos sin cesar el himno de tu gloria.`,MP=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno.

Porque a través de tu Hijo Jesucristo,
misericordiosamente nos llamas a la conversión;
para que, liberados de la esclavitud del pecado,
redescubramos el amor que nos tienes
y, viviendo como tus hijos predilectos,
experimentemos el gozo y la libertad
para los que nos has creado.

Por eso, con los ángeles y los arcángeles
y con todos los coros celestiales,
cantamos sin cesar el himno de tu gloria.`,NP=`$Sacerdote.$ En verdad es justo bendecir tu nombre,
Padre rico en misericordia,
ahora que, en nuestro itinerario hacia la luz pascual,
seguimos los pasos de Cristo,
maestro y modelo de la humanidad reconciliada en el amor.

Tú abres a la Iglesia el camino de un nuevo éxodo
a través del desierto cuaresmal,
para que nos acerquemos a ti,
Dios de vida y esperanza,
de tal forma que, con el corazón puro
y libre de todo temor,
reavivemos nuestra vocación de pueblo de la alianza,
convocado para bendecir tu nombre,
escuchar tu palabra
y experimentar con gozo tus maravillas.

Por estos signos de salvación,
unidos a los ángeles, ministros de tu gloria,
proclamamos el canto de tu alabanza.`,_P=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno.

Porque Cristo, Señor nuestro,
retirándose al desierto
para prepararse a cumplir su misión,
inauguró la práctica de nuestro éxodo cuaresmal
y, al rechazar las tentaciones del enemigo,
nos enseñó a renunciar al pecado
para entregarte todo el corazón,
de modo que participemos plenamente
de su resurrección.

Por eso, con los ángeles y santos
te cantamos el himno de alabanza,
proclamando sin cesar.`,zP=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno.

Porque en la pasión salvadora de tu Hijo
nos has manifestado tu amor inefable
y has mostrado que la cruz
es el camino que lleva a la resurrección.
Pues al quedar derrotados el pecado y la muerte,
la aurora de una nueva esperanza
ha despuntado para toda la humanidad.

Por eso, ahora nosotros, llenos de alegría,
te aclamamos con los ángeles y los santos
cantando tu gloria.`,JP=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno,
por Cristo, Señor nuestro.

Porque se acercan los días santos
en los que recordamos la pasión salvadora
y la gloriosa resurrección de Jesucristo, Señor nuestro.
Y al celebrar su triunfo sobre el pecado y la muerte
experimentamos la eficacia
del misterio de nuestra redención.

Por eso, los ángeles te cantan con júbilo eterno
y nosotros nos unimos a sus voces,
cantando humildemente tu alabanza.`,jP=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
glorificarte siempre, Señor,
pero más que nunca en este tiempo
en que celebramos que Cristo, nuestra Pascua,
ha resucitado de entre los muertos.

Porque él es el Cordero de Dios
que quita el pecado del mundo:
muriendo, ha destruido nuestra muerte,
y resucitando, ha restaurado la vida.

Por eso, llenos de la alegría pascual,
liberados de la esclavitud
en la libertad de la nueva creación,
nos unimos a los coros celestiales,
a los ángeles y a los arcángeles,
y exultantes de gozo proclamamos tu gloria.`,xP=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
glorificarte siempre, Señor,
pero más que nunca en este tiempo
en que celebramos que Cristo, nuestra Pascua,
ha resucitado de entre los muertos.

Por él, los hijos de la luz
nacen a la vida eterna,
y las puertas de los cielos
han vuelto a abrirse para quienes en él creen,
ya que con su muerte destruyó nuestra muerte
y en su gloriosa resurrección
hemos resucitado todos.

Por eso, llenos de la alegría pascual,
liberados de la esclavitud
en la libertad de la nueva creación,
nos unimos a los coros celestiales
y exultantes de gozo proclamamos tu gloria.`,UP=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
glorificarte siempre, Señor,
pero más que nunca en este tiempo
en que celebramos que Cristo, nuestra Pascua,
ha resucitado de entre los muertos.

Porque continuamente se ofrece por nosotros
e intercede por todos ante ti
el que, inmolado en la cruz, venció a la muerte
y, una vez resucitado, vive para siempre.

Por eso, llenos de la alegría pascual,
liberados de la esclavitud
en la libertad de la nueva creación,
nos unimos a los coros celestiales
y exultantes de gozo proclamamos tu gloria.`,HP=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
glorificarte siempre, Señor,
pero más que nunca en este tiempo
en que celebramos que Cristo, nuestra Pascua,
ha resucitado de entre los muertos.

Porque destruida la antigua situación de pecado,
se levanta todo lo que estaba caído
y en Cristo se nos otorga
la integridad de la vida.

Por eso, llenos de la alegría pascual,
liberados de la esclavitud
en la libertad de la nueva creación,
nos unimos a los coros celestiales
y exultantes de gozo proclamamos tu gloria.`,VP=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
glorificarte siempre, Señor,
pero más que nunca en este tiempo
en que celebramos que Cristo, nuestra Pascua,
ha resucitado de entre los muertos.

Porque él, con la oblación de su cuerpo en la cruz,
llevó a plenitud los sacrificios de la antigua ley,
y al ofrecerse a ti por nuestra salvación
quiso ser a un tiempo víctima, sacerdote y altar.

Por eso, llenos de la alegría pascual,
liberados de la esclavitud
en la libertad de la nueva creación,
nos unimos a los coros celestiales
y exultantes de gozo proclamamos tu gloria.`,Gc=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias
siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno,
por Cristo, Señor nuestro.

Que después de su resurrección
se apareció visiblemente a todos sus discípulos
y, ante sus ojos, fue elevado al cielo
para hacernos compartir su divinidad.

Por eso,
con esta efusión de gozo pascual,
el mundo entero se desborda de alegría,
y también los coros celestiales,
los ángeles y los arcángeles,
cantan sin cesar el himno de tu gloria.`,wP=`$Sacerdote.$ En verdad es justo y necesario
que todas las criaturas, en el cielo y en la tierra,
se unan en tu alabanza,
Dios todopoderoso y eterno,
por Jesucristo, tu Hijo, Señor del universo.

El cual, habiendo entrado una vez para siempre
en el santuario del cielo,
ahora intercede por nosotros como mediador
que asegura la inextinguible efusión del Espíritu.
Pastor y obispo de nuestras vidas,
nos invita a la plegaria unánime,
a ejemplo de María y los apóstoles,
para que vivamos en un perenne Pentecostés.

Por eso, llenos de la alegría pascual,
nos unimos a los coros celestiales
y exultantes de gozo proclamamos tu gloria.`,Qc=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno.

Porque Cristo, Señor nuestro,
después de anunciar su muerte a los discípulos,
les mostró en el monte santo
el esplendor de su gloria,
para testimoniar que,
de acuerdo con la ley y los profetas,
la pasión es el camino
que conduce a la resurrección.

Por eso, como los ángeles te cantan en el cielo,
así nosotros en la tierra te aclamamos,
cantando sin cesar.`,FP=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno.

Porque tú eres quien dirige y gobierna a tu Iglesia,
proporcionándole lo que más le conviene
en todo lugar y en cada momento.
No dejas de instruirla, sostenerla y guiarla
con la fuerza del Espíritu Santo,
para que celebre incesantemente
los prodigios de un renovado Pentecostés.

De manera que, confiada siempre a ti en el amor,
ni abandone la plegaria en la tribulación,
ni deje de darte gracias en el gozo,
por Cristo, Señor nuestro.

Por eso, unidos a los coros angélicos,
te aclamamos llenos de alegría.`,kP=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno,
por Cristo, Señor nuestro.

Quien, por su misterio pascual,
realizó la obra maravillosa
de llamarnos de la esclavitud del pecado y de la muerte
al honor de ser estirpe elegida,
sacerdocio real, nación consagrada
y pueblo de tu propiedad,
para que, trasladados por ti de las tinieblas
a tu luz admirable,
proclamemos ante el mundo tus maravillas.

Por eso, con los ángeles y los arcángeles
con los tronos y dominaciones
y con todos los coros celestiales,
cantamos sin cesar el himno de tu gloria.`,BP=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno,
por Cristo, Señor nuestro.

Quien, compadecido del extravío de los hombres,
quiso nacer de la Virgen;
Muriendo en la cruz,
nos libró de eterna muerte
y, resucitando, nos dio vida eterna.

Por eso, con los ángeles y los arcángeles
con los tronos y dominaciones
y con todos los coros celestiales,
cantamos sin cesar el himno de tu gloria.`,YP=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno.

Porque reconocemos como obra
de tu poder admirable
no sólo haber socorrido nuestra débil naturaleza
con la fuerza de tu divinidad,
sino también el haber previsto el remedio
en nuestra misma naturaleza mortal;
y así, con lo que fue la causa de nuestra ruina,
con eso mismo nos diste la salvación,
por Cristo, Señor nuestro.

Por él, los ángeles cantan con júbilo eterno
y nosotros nos unimos a sus voces,
cantando humildemente tu alabanza.`,GP=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno,
por Cristo, Señor nuestro.

Porque naciendo, restauró nuestra naturaleza caída;
padeciendo en la cruz, borró nuestros pecados;
resucitando de entre los muertos,
nos proporcionó el acceso a la vida eterna;
y ascendiendo hasta ti, Padre,
nos abrió las puertas del reino de los cielos.

Por eso, unidos a la multitud de los ángeles
y de los santos,
te aclamamos llenos de alegría.`,QP=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno.

Porque creaste el universo
con todo cuanto contiene;
determinaste el ciclo de las estaciones;
pero formaste al hombre a tu imagen y semejanza,
y lo hiciste dueño de un mundo portentoso,
para que, en tu nombre,
dominara la creación entera
y, al contemplar la grandeza de tus obras,
en todo momento te alabara,
por Cristo, Señor nuestro.

A quien cantan los cielos y la tierra,
los ángeles y los arcángeles,
proclamando sin cesar.`,WP=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno.

En quien vivimos, nos movemos y existimos;
y todavía peregrinos en este mundo,
no sólo experimentamos
las pruebas cotidianas de tu amor,
sino que poseemos ya, en prenda, la vida futura.
Porque, al poseer las primicias del Espíritu,
por el cual resucitaste a Jesús de entre los muertos,
esperamos disfrutar eternamente del Misterio Pascual.

Por eso, te alabamos con todos los ángeles
y proclamamos tu gloria con alegría.`,KP=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno.

Porque tu amor al mundo fue tan misericordioso
que no sólo nos enviaste como Redentor
a tu propio Hijo,
sino que lo quisiste en todo semejante a nosotros,
menos en el pecado,
para poder así amar en nosotros
lo que en él amabas.
Y con su obediencia nos devolviste aquellos dones
que por la desobediencia del pecado habíamos perdido.

Por eso, ahora nosotros,
llenos de alegría,
te aclamamos con los ángeles y los santos.`,XP=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno.

Pues quisiste reunir de nuevo,
por la Sangre de tu Hijo y la acción del Espíritu Santo,
a los hijos dispersos por el pecado;
para que tu pueblo,
congregado a imagen de la unidad trinitaria,
fuera reconocido como Iglesia,
cuerpo de Cristo y templo del Espíritu,
para alabanza de tu sabiduría infinita.

Por eso, unidos a los coros angélicos,
te aclamamos llenos de alegría.`,ZP=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno.

Y alabar, bendecir y proclamar tu gloria
al venerar a Santa María,
madre y modelo nuestro.
Porque ella concibió a tu único Hijo
por obra del Espíritu Santo,
para que, quedando transformada
su total disponibilidad
en santa y gloriosa fecundidad,
brillara sobre el mundo la luz eterna,
Jesucristo, Señor nuestro.

Por él, los ángeles y los arcángeles
y todos los coros celestiales
celebran tu gloria, unidos en común alegría.
Permítenos asociarnos a sus voces,
cantando humildemente tu alabanza.`,eq=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias y proclamar
que has hecho obras admirables
al hacer brillar tu gloria y tu perfección
en tus santos,
y de un modo muy especial en Santa María,
la madre de tu Hijo Jesucristo
y de toda la nueva creación.

Por eso, al celebrarla hoy,
queremos exaltar tu generosidad
inspirados en su propio cántico.
En verdad, has hecho maravillas por toda la tierra
y prolongaste tu misericordia
de generación en generación,
cuando, complacido en la humildad de tu sierva,
nos diste por su medio al autor de la vida,
Jesucristo, tu Hijo, Señor nuestro.

Por él, los ángeles y los arcángeles
te adoran eternamente, gozosos en tu presencia.
Permítenos unirnos a sus voces,
cantando tu alabanza.`,oq=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno,
y alabarte en esta festividad de la Virgen María.

Porque al aceptar ella tu Palabra
en su corazón inmaculado,
tú la elegiste para que la concibiera
en su seno virginal
y, al dar a luz a Cristo,
preparó el nacimiento de la Iglesia.
Porque al aceptar, junto a la cruz,
el encargo de tu amor,
recibió como hijos a todos los seres humanos,
redimidos por la sangre de Cristo.
Porque al unirse a las oraciones
de los apóstoles y discípulos,
que esperaban la venida del Espíritu Consolador,
se convirtió en modelo de la Iglesia suplicante.

Por eso, con todos los ángeles y santos,
te alabamos sin cesar,
cantando tus maravillas.`,aq=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno,
por Cristo, Señor nuestro.

Porque has constituido a Santa María,
la Madre de tu Hijo,
en madre y auxiliadora del pueblo cristiano,
para que, imitándola en su entrega
y alentado por su protección,
participe valientemente en el combate de la fe,
persevere con fidelidad
en la enseñanza de los apóstoles
y camine seguro entre las dificultades del mundo,
hasta alcanzar gozoso la Jerusalén celestial.

Por eso, Señor, con todos los ángeles
te aclamamos ahora y por siempre,
cantando tus maravillas.`,sq=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno.

Porque, habiendo sido rescatados del pecado
por tu Hijo Jesucristo,
ahora podemos alabarte
celebrando a tus ángeles y arcángeles.
El honor que tributamos a los que te fueron fieles
es reconocimiento de tu gloria
y proclama tu grandeza;
pues, si es digna de admiración
la criatura angélica,
lo es inmensamente más aquel que la creó.

Por Jesucristo, el Señor,
adoran tu majestad todos los ángeles,
y nosotros, a una con ellos,
te adoramos llenos de júbilo.`,nq=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno.

Y alabar, bendecir y proclamar tu gloria
en la veneración de san José,
el hombre justo que diste por esposo
a Santa María, la madre del Señor.
Servidor bueno y fiel,
lo elegiste como cabeza de tu familia en Nazaret
para que, con amor paternal,
cuidara de tu Hijo unigénito,
concebido por obra del Espíritu Santo,
Jesucristo, el Señor.

Por él, los ángeles y los arcángeles
y todos los coros celestiales
celebran tu gloria, unidos en común alegría.
Permítenos asociarnos a sus voces,
cantando humildemente tu alabanza.`,rq=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno,
por Cristo, Señor nuestro.

En san Juan, su precursor,
a quien consagraste como el mayor
entre los nacidos de mujer,
proclamamos tu grandeza.
Porque su nacimiento fue motivo de gran alegría,
y ya antes de nacer saltó de gozo
por la llegada de la salvación humana;
solo él, entre todos los profetas,
mostró al Cordero de la redención.

Él bautizó al mismo autor del bautismo,
para santificar el agua viva,
y mereció darle el supremo testimonio
derramando su sangre.

Por eso,
con las virtudes del cielo
te aclamamos continuamente en la tierra
alabando tu gloria sin cesar.`,iq=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno.

Que con tu Hijo unigénito y el Espíritu Santo
eres un solo Dios, un solo Señor;
no en la singularidad de una sola Persona,
sino en la Trinidad de una sola naturaleza.
Y lo que creemos de tu gloria
porque tú lo revelaste
lo afirmamos sin diferencia
de tu Hijo y del Espíritu Santo.
De modo que, al proclamar nuestra fe
en la verdadera y eterna Divinidad,
adoramos tres Personas distintas,
de única naturaleza e iguales en dignidad.

A quien alaban los ángeles y los arcángeles,
los querubines y serafines,
que no cesan de aclamarte,
diciendo a una sola voz.`,tq=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno,
por Cristo, Señor nuestro.

El cual, con amor admirable, se entregó por nosotros
y, elevado sobre la cruz,
hizo que de la herida de su costado
brotaran, con el agua y la sangre,
los sacramentos de la Iglesia,
para que así,
acercándose al Corazón abierto del Salvador,
todos puedan beber siempre con gozo
de las fuentes de la salvación.

Por eso,
con los santos
y con todos los ángeles,
te glorificamos diciendo sin cesar.`,lq=`$Sacerdote.$ En verdad es justo y necesario,
es nuestro deber y salvación
darte gracias siempre y en todo lugar,
Señor, Padre santo,
Dios todopoderoso y eterno.

Porque consagraste Sacerdote eterno y Rey del Universo
a tu único Hijo, nuestro Señor Jesucristo,
ungiéndolo con óleo de alegría,
para que, ofreciéndose a sí mismo
como víctima perfecta y pacificadora
en el altar de la cruz,
consumara el misterio de la redención humana
y, sometiendo a su poder la creación entera,
entregara a tu majestad infinita
un reino eterno y universal:
el reino de la verdad y de la vida,
el reino de la santidad y la gracia,
el reino de la justicia, el amor y la paz.

Por eso,
con los ángeles y los arcángeles,
tronos y dominaciones,
y con todos los coros celestiales,
cantamos sin cesar el himno de tu gloria.`,pt="$Sacerdote.$ Invoquemos, queridos hermanos, a Dios, Padre todopoderoso, para que bendiga esta agua, que va a ser derramada sobre nosotros en memoria de nuestro bautismo, y pidámosle que nos renueve interiormente, para que permanezcamos fieles al Espíritu que hemos recibido.",ft=`$Sacerdote.$ Que Dios todopoderoso nos purifique del pecado y, por la celebración de esta eucaristía, nos haga dignos de participar del banquete de su reino.

$Pueblo.$ Amén.`,cq=`${pt}

$Sacerdote.$ Dios todopoderoso y eterno, que, por medio del agua, fuente de vida y medio de purificación, quisiste limpiarnos del pecado y darnos el don de la vida eterna, dígnate bendecir esta agua, para que sea signo de tu protección en este día consagrado a ti, Señor. Por medio de esta agua renueva también en nosotros la fuente viva de tu gracia, y líbranos de todo mal de alma y cuerpo, para que nos acerquemos a ti con el corazón limpio y recibamos dignamente tu salvación. Por Jesucristo, nuestro Señor.

$Pueblo.$ Amén.

$Cantor.$ Rocíame con el hisopo, Señor: quedaré limpio; lávame: quedaré más blanco que la nieve.

${ft}`,uq=`${pt}

$Sacerdote.$ Dios todopoderoso, fuente y origen de la vida del alma y del cuerpo, bendice esta agua, que vamos a usar con fe para implorar el perdón de nuestros pecados y alcanzar la ayuda de tu gracia contra toda enfermedad y asechanza del enemigo. Concédenos, Señor, por tu misericordia, que las aguas vivas siempre broten salvadoras, para que podamos acercarnos a ti con el corazón limpio y evitemos todo peligro de alma y cuerpo. Por Jesucristo, nuestro Señor.

$Pueblo.$ Amén.

$Cantor.$ Derramaré sobre vosotros un agua pura que os purificará.

${ft}`,dq=`${pt}

$Sacerdote.$ Señor, Dios todopoderoso, escucha las oraciones de tu pueblo, ahora que recordamos la acción maravillosa de nuestra creación y la maravilla, aún más grande, de nuestra redención; dígnate bendecir esta agua. La creaste para hacer fecunda la tierra y para favorecer nuestros cuerpos con la frescura y la limpieza. La hiciste también instrumento de misericordia al librar a tu pueblo de la esclavitud y al apagar con ella su sed en el desierto; por los profetas la revelaste como signo de la nueva Alianza que quisiste sellar con los hombres. Y, cuando Cristo descendió a ella en el Jordán, renovaste nuestra naturaleza pecadora en el baño del nuevo nacimiento. Que esta agua, Señor, avive en nosotros el recuerdo de nuestro bautismo y nos haga participar en el gozo de nuestros hermanos bautizados en la Pascua. Por Jesucristo, nuestro Señor.

$Pueblo.$ Amén.

$Cantor.$ Vi agua que bajaba por el lado derecho del templo, aleluya; a todo el que llegue esta agua tendrá nueva vida y cantará: aleluya, aleluya.

${ft}`,Pm=`$Sacerdote.$ Santo eres en verdad, Señor, fuente de toda santidad; por eso te pedimos que santifiques estos dones con la efusión de tu Espíritu, de manera que se conviertan para nosotros en el Cuerpo y la Sangre de Jesucristo, nuestro Señor.

El cual, cuando iba a ser entregado a su Pasión, voluntariamente aceptada, tomó pan, dándote gracias, lo partió y lo dio a sus discípulos, diciendo:

$Sacerdote.$ Tomad y comed todos de él, porque esto es mi Cuerpo, que será entregado por vosotros.

$Sacerdote.$ Del mismo modo, acabada la cena, tomó el cáliz, y, dándote gracias de nuevo, lo pasó a sus discípulos, diciendo:

$Sacerdote.$ Tomad y bebed todos de él, porque este es el cáliz de mi Sangre, Sangre de la alianza nueva y eterna, que será derramada por vosotros y por muchos para el perdón de los pecados. Haced esto en conmemoración mía.`,qm=`$Sacerdote.$ Así, pues, Padre, al celebrar ahora el memorial de la muerte y resurrección de tu Hijo, te ofrecemos el pan de vida y el cáliz de salvación, y te damos gracias porque nos haces dignos de servirte en tu presencia.

Te pedimos humildemente que el Espíritu Santo congregue en la unidad a cuantos participamos del Cuerpo y Sangre de Cristo.

Acuérdate, Señor, de tu Iglesia extendida por toda la tierra; y con el papa y nuestro obispo, y todos los pastores que cuidan de tu pueblo, llévala a su perfección por la caridad.

Acuérdate también de nuestros hermanos que durmieron en la esperanza de la resurrección, y de todos los que han muerto en tu misericordia; admítelos a contemplar la luz de tu rostro.

Ten misericordia de todos nosotros, y así, con María, la Virgen Madre de Dios, su esposo san José, los apóstoles y cuantos vivieron en tu amistad a través de los tiempos, merezcamos, por tu Hijo Jesucristo, compartir la vida eterna y cantar tus alabanzas.`,mq="El cual, cuando iba a ser entregado a su Pasión, voluntariamente aceptada, tomó pan, dándote gracias, lo partió y lo dio a sus discípulos, diciendo:",pq="El cual, en esta misma noche, cuando iba a ser entregado a su Pasión, voluntariamente aceptada, tomó pan, dándote gracias, lo partió y lo dio a sus discípulos, diciendo:",fq="Acuérdate, Señor, de tu Iglesia extendida por toda la tierra;",gq={sunday:"Acuérdate, Señor, de tu Iglesia extendida por toda la tierra, y reunida aquí en el domingo, día en que Cristo ha vencido a la muerte y nos ha hecho partícipes de su vida inmortal;",christmas:"Acuérdate, Señor, de tu Iglesia extendida por toda la tierra y reunida aquí en el día santo en que la Virgen María dio a luz al Salvador del mundo;",christmasNight:"Acuérdate, Señor, de tu Iglesia extendida por toda la tierra y reunida aquí en la noche santa en que la Virgen María dio a luz al Salvador del mundo;",epiphany:"Acuérdate, Señor, de tu Iglesia extendida por toda la tierra y reunida aquí en el día santo en que tu único Hijo, eterno como tú en la gloria, se manifestó en la realidad de nuestra propia carne;",easter:"Acuérdate, Señor, de tu Iglesia extendida por toda la tierra y reunida aquí en el día santísimo de la resurrección de nuestro Señor Jesucristo;",easterNight:"Acuérdate, Señor, de tu Iglesia extendida por toda la tierra y reunida aquí en la noche santísima de la resurrección de nuestro Señor Jesucristo;",ascension:"Acuérdate, Señor, de tu Iglesia extendida por toda la tierra y reunida aquí en el día glorioso en que Cristo ha sido constituido Señor del cielo y de la tierra;",pentecost:"Acuérdate, Señor, de tu Iglesia extendida por toda la tierra y reunida aquí en el día en que la efusión de tu Espíritu ha hecho de ella sacramento de unidad para todos los pueblos;"},Im=`$Sacerdote.$ Padre misericordioso, te pedimos humildemente por Jesucristo, tu Hijo, nuestro Señor, que aceptes y bendigas estos + dones, este sacrificio santo y puro que te ofrecemos, ante todo por tu Iglesia santa y católica, para que le concedas la paz, la protejas, la congregues en la unidad y la gobiernes en el mundo entero, con tu servidor el papa, con nuestro obispo, y todos los demás obispos que, fieles a la verdad, promueven la fe católica y apostólica.

Acuérdate, Señor, de aquellos por quienes se ofrece esta Misa.

y de todos los aquí reunidos, cuya fe y entrega bien conoces; por ellos y todos los suyos, por el perdón de sus pecados y la salvación que esperan, te ofrecemos, y ellos mismos te ofrecen, este sacrificio de alabanza a ti, eterno Dios, vivo y verdadero.

Reunidos en comunión con toda la Iglesia, veneramos la memoria, ante todo de la gloriosa siempre Virgen María, Madre de Jesucristo, nuestro Dios y Señor; la de su esposo, San José, la de los santos apóstoles y mártires Pedro y Pablo, Andrés, [Santiago y Juan, Tomás, Santiago, Felipe, Bartolomé, Mateo, Simón y Tadeo; Lino, Clemente, Sixto, Cornelio, Cipriano, Lorenzo, Crisógono, Juan y Pablo, Cosme y Damián,] y la de todos los santos; por sus méritos y oraciones concédenos en todo tu protección. [Por Cristo, nuestro Señor. Amén.]

Acepta, Señor, en tu bondad, esta ofrenda de tus siervos y de toda tu familia santa; ordena en tu paz nuestros días, líbranos de la condenación eterna y cuéntanos entre tus elegidos. [Por Cristo, nuestro Señor. Amén.]

El sacerdote extiende las manos sobre la ofrenda.

Bendice y santifica, oh Padre, esta ofrenda, haciéndola perfecta, espiritual y digna de ti, de manera que sea para nosotros Cuerpo y Sangre de tu Hijo amado, Jesucristo, nuestro Señor.

El cual, la víspera de su Pasión, tomó pan en sus santas y venerables manos, y, elevando los ojos, hacia ti, Dios, Padre suyo todopoderoso, dando gracias te bendijo, lo partió, y lo dio a sus discípulos, diciendo:

TOMAD Y COMED TODOS DE ÉL, PORQUE ESTO ES MI CUERPO, QUE SERÁ ENTREGADO POR VOSOTROS.

Del mismo modo, acabada la cena, tomó este cáliz glorioso en sus santas y venerables manos, dando gracias te bendijo, y lo dio a sus discípulos diciendo:

TOMAD Y BEBED TODOS DE ÉL, PORQUE ÉSTE ES EL CÁLIZ DE MI SANGRE, SANGRE DE LA ALIANZA NUEVA Y ETERNA, QUE SERÁ DERRAMADA POR VOSOTROS Y POR MUCHOS PARA EL PERDÓN DE LOS PECADOS. HACED ESTO EN CONMEMORACIÓN MÍA.`,Sq="Reunidos en comunión con toda la Iglesia, veneramos la memoria, ante todo de la gloriosa siempre Virgen María, Madre de Jesucristo, nuestro Dios y Señor; la de su esposo, San José, la de los santos apóstoles y mártires Pedro y Pablo, Andrés, [Santiago y Juan, Tomás, Santiago, Felipe, Bartolomé, Mateo, Simón y Tadeo; Lino, Clemente, Sixto, Cornelio, Cipriano, Lorenzo, Crisógono, Juan y Pablo, Cosme y Damián,] y la de todos los santos; por sus méritos y oraciones concédenos en todo tu protección. [Por Cristo, nuestro Señor. Amén.]",Go="la de su esposo, San José; la de los santos apóstoles y mártires Pedro y Pablo, Andrés, [Santiago y Juan, Tomás, Santiago, Felipe, Bartolomé, Mateo, Simón y Tadeo; Lino, Cleto, Clemente, Sixto, Cornelio, Cipriano, Lorenzo, Crisógono, Juan y Pablo, Cosme y Damián,] y la de todos los santos; por sus méritos y oraciones concédenos en todo tu protección. [Por Cristo, nuestro Señor. Amén.]",Wc="Acepta, Señor, en tu bondad, esta ofrenda de tus siervos y de toda tu familia santa; ordena en tu paz nuestros días, líbranos de la condenación eterna y cuéntanos entre tus elegidos. [Por Cristo, nuestro Señor. Amén.]",Kc="El cual, la víspera de su Pasión, tomó pan en sus santas y venerables manos, y, elevando los ojos, hacia ti, Dios, Padre suyo todopoderoso, dando gracias te bendijo, lo partió, y lo dio a sus discípulos, diciendo:",bq="El cual, hoy, la víspera de padecer por nuestra salvación y la de todos los hombres, tomó pan en sus santas y venerables manos, y, elevando los ojos, hacia ti, Dios, Padre suyo todopoderoso, dando gracias te bendijo, lo partió, y lo dio a sus discípulos, diciendo:",Xc={sunday:`Reunidos en comunión con toda la Iglesia para celebrar el domingo, día en que Cristo ha vencido a la muerte y nos ha hecho partícipes de su vida inmortal, veneramos la memoria, ante todo, de la gloriosa siempre Virgen María, Madre de Jesucristo, nuestro Dios y Señor; ${Go}`,christmas:`Reunidos en comunión con toda la Iglesia para celebrar el día santo en que la Virgen María, conservando intacta su virginidad, dio a luz al Salvador del mundo, veneramos la memoria, ante todo, de la gloriosa siempre Virgen María, Madre de Jesucristo, nuestro Dios y Señor; ${Go}`,christmasNight:`Reunidos en comunión con toda la Iglesia para celebrar la noche santa en que la Virgen María, conservando intacta su virginidad, dio a luz al Salvador del mundo, veneramos la memoria, ante todo, de la gloriosa siempre Virgen María, Madre de Jesucristo, nuestro Dios y Señor; ${Go}`,epiphany:`Reunidos en comunión con toda la Iglesia para celebrar el día santo en que tu único Hijo, eterno como tú en la gloria, se manifestó en la verdad de nuestra carne, hecho hombre como nosotros, veneramos la memoria, ante todo, de la gloriosa siempre Virgen María, Madre de Jesucristo, nuestro Dios y Señor; ${Go}`,holyThursday:`Reunidos en comunión con toda la Iglesia para celebrar el día santo en que nuestro Señor Jesucristo fue entregado por nosotros, veneramos la memoria, ante todo, de la gloriosa siempre Virgen María, Madre de Jesucristo, nuestro Dios y Señor; ${Go}`,easter:`Reunidos en comunión con toda la Iglesia para celebrar el día santo de la resurrección de nuestro Señor Jesucristo según la carne, veneramos la memoria, ante todo, de la gloriosa siempre Virgen María, Madre de Jesucristo, nuestro Dios y Señor; ${Go}`,easterNight:`Reunidos en comunión con toda la Iglesia para celebrar la noche santa de la resurrección de nuestro Señor Jesucristo según la carne, veneramos la memoria, ante todo, de la gloriosa siempre Virgen María, Madre de Jesucristo, nuestro Dios y Señor; ${Go}`,ascension:`Reunidos en comunión con toda la Iglesia para celebrar el día santo en que tu único Hijo, nuestro Señor Jesucristo, habiendo tomado nuestra débil condición humana, la exaltó a la derecha de tu gloria, veneramos la memoria, ante todo, de la gloriosa siempre Virgen María, Madre de Jesucristo, nuestro Dios y Señor; ${Go}`,pentecost:`Reunidos en comunión con toda la Iglesia para celebrar el día de Pentecostés, en que el Espíritu Santo se manifestó a los apóstoles en lenguas de fuego, veneramos la memoria, ante todo, de la gloriosa siempre Virgen María, Madre de Jesucristo, nuestro Dios y Señor; ${Go}`},vq="Acepta, Señor, en tu bondad, esta ofrenda de tus siervos y de toda tu familia santa, que te presentamos en el día mismo en que nuestro Señor Jesucristo encomendó a sus discípulos la celebración del sacramento de su Cuerpo y de su Sangre; ordena en tu paz nuestros días, líbranos de la condenación eterna y cuéntanos entre tus elegidos. [Por Cristo, nuestro Señor. Amén.]",yq="Acepta, Señor, en tu bondad, esta ofrenda de tus siervos y de toda tu familia santa, por aquellos que has hecho renacer del agua y del Espíritu Santo, perdonándoles todos sus pecados; ordena en tu paz nuestros días, líbranos de la condenación eterna y cuéntanos entre tus elegidos. [Por Cristo, nuestro Señor. Amén.]",hq=`$Sacerdote.$ Por eso, Padre, nosotros, tus siervos, y todo tu pueblo santo, al celebrar este memorial de la muerte gloriosa de Jesucristo, tu Hijo, nuestro Señor; de su santa resurrección del lugar de los muertos y de su admirable ascensión a los cielos, te ofrecemos, Dios de gloria y majestad, de los mismos bienes que nos has dado, el sacrificio puro, inmaculado y santo: pan de vida eterna y cáliz de eterna salvación.

Mira con ojos de bondad esta ofrenda y acéptala, como aceptaste los dones del justo Abel, el sacrificio de Abrahán, nuestro padre en la fe, y la oblación pura de tu sumo sacerdote Melquisedec.

Inclinado, con las manos juntas, prosigue:

Te pedimos humildemente, Dios todopoderoso, que esta ofrenda sea llevada a tu presencia, hasta el altar del cielo, por manos de tu ángel, para que cuantos recibimos el Cuerpo y la Sangre de tu Hijo, al participar aquí de este altar, seamos colmados de gracia y bendición. [Por Cristo, nuestro Señor. Amén.]

Conmemoración de los difuntos:

Acuérdate también, Señor, de tus hijos difuntos, que nos han precedido con el signo de la fe y duermen ya el sueño de la paz.

A ellos, Señor, y a cuantos descansan en Cristo, concédeles el lugar del consuelo, de la luz y de la paz. [Por Cristo, nuestro Señor. Amén.]

Y a nosotros, pecadores, siervos tuyos, que confiarnos en tu infinita misericordia, admítenos en la asamblea de los santos apóstoles y mártires Juan el Bautista, Esteban, Matías y Bernabé, [Ignacio, Alejandro, Marcelino y Pedro, Felicidad y Perpetua, Águeda, Lucía, Inés, Cecilia, Anastasia,] y de todos los santos; y acéptanos en su compañía, no por nuestros méritos, sino conforme a tu bondad.

Por Cristo, Señor nuestro, por quien sigues creando todos los bienes, los santificas, los llenas de vida, los bendices y los repartes entre nosotros.`,Om=`$Sacerdote.$ Santo eres, en verdad, Padre, y con razón te alaban todas tus criaturas, ya que por Jesucristo, tu Hijo, Señor nuestro, con la fuerza del Espíritu Santo, das vida y santificas todo, y congregas a tu pueblo sin cesar, para que ofrezca en tu honor un sacrificio sin mancha desde donde sale el sol hasta el ocaso.

Por eso, Padre, te suplicamos que santifiques por el mismo espíritu estos dones que hemos separado para ti, de manera que se conviertan para nosotros en Cuerpo y + Sangre de Jesucristo, Hijo tuyo y Señor nuestro, que nos mandó celebrar estos misterios.

Porque él mismo, la noche en que iba a ser entregado, tomó pan, y dando gracias te bendijo, lo partió y lo dio a sus discípulos, diciendo:

TOMAD Y COMED TODOS DE ÉL, PORQUE ESTO ES MI CUERPO, QUE SERÁ ENTREGADO POR VOSOTROS.

Del mismo modo, acabada la cena, tomó el cáliz, dando gracias te bendijo, y lo pasó a sus discípulos, diciendo:

TOMAD Y BEBED TODOS DE ÉL, PORQUE ÉSTE ES EL CÁLIZ DE MI SANGRE, SANGRE DE LA ALIANZA NUEVA Y ETERNA, QUE SERÁ DERRAMADA POR VOSOTROS Y POR MUCHOS PARA EL PERDÓN DE LOS PECADOS. HACED ESTO EN CONMEMORACIÓN MÍA.`,Cm=`$Sacerdote.$ Así, pues, Padre, al celebrar ahora el memorial de la pasión salvadora de tu Hijo, de su admirable resurrección y ascensión al cielo, mientras esperamos su venida gloriosa, te ofrecemos, en esta acción de gracias, el sacrificio vivo y santo.

Dirige tu mirada sobre la ofrenda de tu Iglesia, y reconoce en ella la víctima por cuya inmolación quisiste devolvernos tu amistad, para que, fortalecidos con el Cuerpo y la Sangre de tu Hijo y llenos de tu Espíritu Santo, formemos en Cristo un solo cuerpo y un solo espíritu.

Que él nos transforme en ofrenda permanente, para que gocemos de tu heredad junto con tus elegidos: con María, la Virgen Madre de Dios, su esposo san José, los apóstoles y los mártires, y todos los santos, por cuya intercesión confiamos obtener siempre tu ayuda.

Te pedimos, Padre, que esta víctima de reconciliación traiga la paz y la salvación al mundo entero. Confirma en la fe y en la caridad a tu Iglesia, peregrina en la tierra: a tu servidor, el papa, a nuestro obispo, al orden episcopal, a los presbíteros y diáconos, y a todo el pueblo redimido por ti.

Atiende los deseos y súplicas de esta familia que has congregado en tu presencia. Reúne en torno a ti, Padre misericordioso, a todos tus hijos dispersos por el mundo.

A nuestros hermanos difuntos y a cuantos murieron en tu amistad recíbelos en tu reino, donde esperamos gozar todos juntos de la plenitud eterna de tu gloria, por Cristo, Señor nuestro, por quien concedes al mundo todos los bienes.`,Eq="Porque él mismo, la noche en que iba a ser entregado, tomó pan, y dando gracias te bendijo, lo partió y lo dio a sus discípulos, diciendo:",Aq="Habiendo amado a los suyos que estaban en el mundo, los amó hasta el extremo y, mientras cenaba con sus discípulos, tomó pan, y dando gracias te bendijo, lo partió y lo dio a sus discípulos, diciendo:",Pq="Atiende los deseos y súplicas de esta familia que has congregado en tu presencia.",qq={sunday:"Atiende los deseos y súplicas de esta familia que has congregado en tu presencia en el domingo, día en que Cristo ha vencido a la muerte y nos ha hecho partícipes de su vida inmortal.",christmas:"Atiende los deseos y súplicas de esta familia que has congregado en tu presencia en el día santo en que la Virgen María dio a luz al Salvador del mundo.",christmasNight:"Atiende los deseos y súplicas de esta familia que has congregado en tu presencia en la noche santa en que la Virgen María dio a luz al Salvador del mundo.",epiphany:"Atiende los deseos y súplicas de esta familia que has congregado en tu presencia en el día santo en que tu único Hijo, eterno como tú en la gloria, se manifestó en la verdad de nuestra carne hecho hombre.",easter:"Atiende los deseos y súplicas de esta familia que has congregado en tu presencia en el día glorioso de la resurrección de nuestro Señor Jesucristo según la carne.",easterNight:"Atiende los deseos y súplicas de esta familia que has congregado en tu presencia en la noche gloriosa de la resurrección de nuestro Señor Jesucristo según la carne.",ascension:"Atiende los deseos y súplicas de esta familia que has congregado en tu presencia en el día glorioso de la Ascensión, en el que Cristo ha sido constituido Señor del cielo y de la tierra.",pentecost:"Atiende los deseos y súplicas de esta familia que has congregado en tu presencia en el día en que la efusión de tu Espíritu ha hecho de ella sacramento de unidad para todos los pueblos."},Iq=`$Sacerdote.$ En verdad es justo darte gracias, y deber nuestro glorificarte, Padre santo, porque tú eres el único Dios vivo y verdadero que existes desde siempre y vives para siempre; luz sobre toda luz. Porque tú solo eres bueno y la fuente de la vida, hiciste todas las cosas para colmarlas de tus bendiciones y alegrar su multitud con la claridad de tu gloria.

Por eso, innumerables ángeles en tu presencia, contemplando la gloria de tu rostro, te sirven siempre y te glorifican sin cesar. Y con ellos también nosotros, llenos de alegría, y por nuestra voz las demás criaturas, aclamamos tu nombre cantando:`,Oq=`$Sacerdote.$ Te alabamos, Padre santo, porque eres grande y porque hiciste todas las cosas con sabiduría y amor. A imagen tuya creaste al hombre y le encomendaste el universo entero, para que, sirviéndote sólo a ti, su Creador, dominara todo lo creado.

Y cuando por desobediencia perdió tu amistad, no lo abandonaste al poder de la muerte, sino que, compadecido, tendiste la mano a todos, para que te encuentre el que te busca. Reiteraste, además, tu alianza a los hombres; por los profetas los fuiste llevando con la esperanza de salvación.

Y tanto amaste al mundo, Padre santo, que, al cumplirse la plenitud de los tiempos, nos enviaste como salvador a tu único Hijo. El cual se encarnó por obra del Espíritu Santo, nació de María, la Virgen, y así compartió en todo nuestra condición humana menos en el pecado; anunció la salvación a los pobres, la liberación a los oprimidos y a los afligidos el consuelo. Para cumplir tus designios, él mismo se entregó a la muerte, y, resucitando, destruyó la muerte y nos dio nueva vida. Y porque no vivamos ya para nosotros mismos, sino para él, que por nosotros murió y resucitó, envió, Padre, al Espíritu Santo como primicia para los creyentes, a fin de santificar todas las cosas, llevando a la plenitud su obra en el mundo.

Por eso, Padre, te rogamos que este mismo Espíritu santifique que estas ofrendas, de manera que se conviertan para nosotros en Cuerpo y + Sangre de Jesucristo, nuestro Señor, y así celebremos el gran misterio que nos dejó como alianza eterna. Porque él mismo, llegada la hora en que había de ser glorificado por ti, Padre santo, habiendo amado a los suyos que estaban en el mundo, los amó hasta el extremo.

Y, mientras cenaba con sus discípulos, tomó pan, te bendijo, lo partió y se lo dio, diciendo:

TOMAD Y COMED TODOS DE ÉL, PORQUE ESTO ES MI CUERPO, QUE SERÁ ENTREGADO POR VOSOTROS.

Del mismo modo, tomó el cáliz lleno del fruto de la vid, te dio gracias y se lo pasó a sus discípulos, diciendo:

TOMAD Y BEBED TODOS DE ÉL, PORQUE ÉSTE ES EL CÁLIZ DE MI SANGRE, SANGRE DE LA ALIANZA NUEVA Y ETERNA, QUE SERÁ DERRAMADA POR VOSOTROS Y POR MUCHOS PARA EL PERDÓN DE LOS PECADOS. HACED ESTO EN CONMEMORACIÓN MÍA.`,Cq=`$Sacerdote.$ Por eso, Padre, al celebrar ahora el memorial de nuestra redención, recordamos la muerte del Cristo y su descenso al lugar de los muertos, proclamamos su resurrección y ascensión a tu derecha; y mientras esperamos su venida gloriosa, te ofrecemos su Cuerpo y su Sangre, sacrificio agradable a ti y salvación para todo el mundo.

Dirige tu mirada sobre esta Víctima que tú mismo has preparado a tu Iglesia, y concede a cuantos compartimos este pan y este cáliz, que, congregados en un solo cuerpo por el Espíritu Santo, seamos en Cristo víctima viva para alabanza de tu gloria.

Y ahora, Señor, acuérdate de todos aquellos por quienes te ofrecemos este sacrificio: de tu servidor el papa, de nuestro obispo, del orden episcopal y de los presbíteros y diáconos, de los oferentes y de los aquí reunidos, de todo tu pueblo santo y de aquellos que te buscan con sincero corazón.

Acuérdate también de los que murieron en la paz de Cristo y de todos los difuntos, cuya fe tú sólo conociste. Padre de bondad, que todos tus hijos nos reunamos en la heredad de tu reino, con María, la Virgen Madre de Dios, con su esposo san José, con los apóstoles y los santos; y allí, junto con toda la creación libre

ya del pecado y de la muerte, te glorifiquemos por Cristo, Señor nuestro, por quien concedes al mundo todos los bienes.`,Dq=`$Sacerdote.$ En verdad es justo y necesario darte gracias, Señor, Padre santo, porque no dejas de llamarnos a una vida plenamente feliz.

Tú, Dios de bondad y misericordia, ofreces siempre tu perdón e invitas a los pecadores a recurrir confiadamente a tu clemencia.

Muchas veces los hombres hemos quebrantado tu alianza; pero tú, en vez de abandonarnos, has sellado de nuevo con la familia humana, por Jesucristo, tu Hijo, nuestro Señor, un pacto tan sólido que ya nada lo podrá romper.

Y ahora, mientras ofreces a tu pueblo un tiempo de gracia y reconciliación, lo alientas en Cristo para que vuelva a ti, obedeciendo más plenamente al Espíritu Santo, y se entregue al servicio de todos los hombres.

Por eso, llenos de admiración y agradecimiento, unimos nuestras voces a las de los coros celestiales para cantar la grandeza de tu amor y proclamar la alegría de nuestra salvación:`,Rq=`$Sacerdote.$ Oh Dios, que desde el principio del mundo haces cuanto nos conviene para que seamos santos como tú mismo eres Santo, mira a tu pueblo aquí reunido.

Y derrama la fuerza de tu Espíritu, de manera que estos dones sean para nosotros Cuerpo y + Sangre de tu amado Hijo Jesucristo, en quien nosotros somos hijos tuyos.

Cuando nosotros estábamos perdidos y éramos incapaces de volver a ti, nos amaste hasta el extremo.

Tu Hijo, que es el único justo, se entregó a sí mismo en nuestras manos para ser clavado en la cruz.

Pero, antes de que sus brazos extendidos entre el cielo y la tierra trazasen el signo indeleble de tu alianza, quiso celebrar la Pascua con sus discípulos.

Mientras cenaba con ellos, tomó pan, dando gracias, te bendijo, lo partió y se lo dio, diciendo:

TOMAD Y COMED TODOS DE ÉL, PORQUE ESTO ES MI CUERPO, QUE SERÁ ENTREGADO POR VOSOTROS.

Igualmente, después de haber cenado, sabiendo que él iba a reconciliar todas las cosas en sí mismo por su sangre derramada en la cruz, tomó el cáliz, lleno del fruto de la vid, de nuevo te dio gracias y lo pasó a sus amigos, diciendo:

TOMAD Y BEBED TODOS DE ÉL, PORQUE ÉSTE ES EL CÁLIZ DE MI SANGRE, SANGRE DE LA ALIANZA NUEVA Y ETERNA, QUE SERÁ DERRAMADA POR VOSOTROS Y POR MUCHOS PARA EL PERDÓN DE LOS PECADOS. HACED ESTO EN CONMEMORACIÓN MÍA.`,$q=`$Sacerdote.$ Así, pues, al hacer el memorial de Jesucristo, nuestra Pascua y nuestra paz definitiva, y celebrar su muerte y resurrección, en la esperanza del día feliz de su retorno, te ofrecemos, Dios fiel y verdadero, la Víctima que devuelve tu gracia a los hombres.

Mira con amor, Padre de bondad, a quienes llamas a unirse a ti, y concédeles que, participando del único sacrificio de Cristo, formen, por la fuerza del Espíritu Santo, un solo cuerpo, en el que no haya ninguna división.

Guárdanos a todos en comunión de fe y amor con el papa y nuestro obispo.

Ayúdanos a preparar la venida de tu reino, hasta la hora en que nos presentemos ante ti, santos entre los santos del cielo, con Santa María, la Virgen, y los apóstoles, y con nuestros hermanos difuntos, que confiamos a tu misericordia.

Entonces, en la creación nueva, liberada por fin de toda corrupción, te cantaremos la acción de gracias de Jesucristo, tu Ungido, que vive eternamente.`,Tq=`$Sacerdote.$ Te damos gracias, Dios nuestro y Padre todopoderoso, por medio de Jesucristo, nuestro Señor, y te alabamos por la obra admirable de la redención.

Pues, en una humanidad dividida por las enemistades y las discordias, tú diriges las voluntades para que se dispongan a la reconciliación.

Tu Espíritu mueve los corazones para que los enemigos vuelvan a la amistad, los adversarios se den la mano y los pueblos busquen la unión.

Con tu acción eficaz consigues que las luchas se apacigüen y crezca el deseo de la paz; que el perdón venza al odio y la indulgencia a la venganza.

Por eso, debemos darte gracias continuamente y alabarte con los coros celestiales, que te aclaman sin cesar:`,Lq=`$Sacerdote.$ A ti, pues, Padre, que gobiernas el universo, te bendecimos por Jesucristo, tu Hijo, que ha venido en tu nombre.

Él es la palabra que nos salva, la mano que tiendes a los pecadores, el camino que nos conduce a la paz.

Dios, Padre nuestro, nos habíamos apartado de ti y nos has reconciliado por tu Hijo, a quien entregaste a la muerte para que nos convirtiéramos a tu amor y nos amáramos unos a otros.

Por eso, celebrando este misterio de reconciliación, te rogamos que santifiques con el rocío de tu Espíritu estos dones, para que sean el Cuerpo y + Sangre de tu Hijo, mientras cumplimos su mandato.

Porque él mismo, cuando iba a entregar su vida por nuestra liberación, estando sentado a la mesa, tomó pan en sus manos, dando gracias, te bendijo, lo partió y lo dio a sus discípulos, diciendo:

TOMAD Y COMED TODOS DE ÉL, PORQUE ESTO ES MI CUERPO, QUE SERÁ ENTREGADO POR VOSOTROS.

Del mismo modo, aquella noche, tomó el cáliz, y, proclamando tu misericordia, lo pasó a sus discípulos, diciendo:

TOMAD Y BEBED TODOS DE ÉL, PORQUE ÉSTE ES EL CÁLIZ DE MI SANGRE, SANGRE DE LA ALIANZA NUEVA Y ETERNA, QUE SERÁ DERRAMADA POR VOSOTROS Y POR MUCHOS PARA EL PERDÓN DE LOS PECADOS. HACED ESTO EN CONMEMORACIÓN MÍA.`,Mq=`$Sacerdote.$ Señor, Dios nuestro, tu Hijo nos dejó esta prenda de su amor.

Al celebrar, pues, el memorial de su muerte y resurrección, te ofrecemos lo mismo que tú nos entregaste: el sacrificio de la reconciliación perfecta.

Acéptanos también a nosotros, Padre santo, juntamente con la ofrenda de tu Hijo, y en la participación de este banquete concédenos tu Espíritu, para que desaparezca todo obstáculo en el camino de la concordia y la Iglesia resplandezca en medio de los hombres como signo de unidad e instrumento de tu paz.

Que este Espíritu, vínculo de amor, nos guarde en comunión con el papa y nuestro obispo, con los demás obispos y todo tu pueblo santo.

Recibe en tu reino a nuestros hermanos que se durmieron en el Señor y a todos los difuntos cuya fe sólo tú conociste.

Así como nos has reunido aquí en torno a la mesa de tu Hijo, unidos con María, la Virgen Madre de Dios, y con todos los santos, reúne también a los hombres de cualquier clase y condición, de toda raza y lengua, en el banquete de la unidad eterna, en un mundo nuevo donde brille la plenitud de tu paz, por Cristo, Señor nuestro.`,Nq=`$Sacerdote.$ Te damos gracias, Padre de bondad, y te glorificamos, Señor, Dios del universo, porque no cesas de convocar a los hombres de toda raza y cultura, por medio del Evangelio de tu Hijo, y los reúnes en un solo cuerpo, que es la Iglesia.

Esta Iglesia, vivificada por tu Espíritu, resplandece como signo de la unidad de todos los hombres, da testimonio de tu amor en el mundo y abre a todos las puertas de la esperanza.

De esta forma se convierte en un signo de fidelidad a la alianza, que has sellado con nosotros para siempre.

Por ello, Señor, te enaltecen el cielo y la tierra, y también nosotros, unidos a toda la Iglesia, proclamamos el himno de tu gloria:`,_q=`$Sacerdote.$ Te damos gracias, Señor y Padre nuestro, te bendecimos y te glorificamos, porque has creado todas las cosas y nos has llamado a la vida.

Tú nunca nos dejas solos, te manifiestas vivo y presente en medio de nosotros.

Ya en tiempos antiguos guiaste a Israel, tu pueblo, con mano poderosa y brazo extendido, a través de un inmenso desierto.

Hoy acompañas a tu Iglesia peregrina, dándole la fuerza de tu Espíritu.

Por medio de tu Hijo nos abres el camino de la vida, para que, a través de este mundo, lleguemos al gozo perfecto de tu reino.

Por eso, con los ángeles y los santos, cantamos sin cesar el himno de tu gloria:`,zq=`$Sacerdote.$ Te damos gracias y te bendecimos, Dios santo y fuerte, porque diriges con sabiduría los destinos del mundo y cuidas con amor de cada uno de los hombres.

Tú nos invitas a escuchar tu palabra, que nos reúne en un solo cuerpo, y a mantenernos siempre firmes en el seguimiento de tu Hijo.

Porque sólo él es el camino que nos conduce hacia ti, Dios invisible, la verdad que nos hace libres, la vida que nos colma de alegría.`,Jq=`$Sacerdote.$ Te damos gracias, Padre fiel y lleno de ternura, porque tanto amaste al mundo que le has entregado a tu Hijo, para que fuera nuestro Señor y nuestro hermano.

Él manifiesta su amor para con los pobres y los enfermos, para con los pequeños y los pecadores.

Él nunca permaneció indiferente ante el sufrimiento humano; su vida y su palabra son para nosotros la prueba de tu amor; como un padre siente ternura por sus hijos, así tú sientes ternura por tus fieles.

Por eso, te alabamos y te glorificamos y, con los ángeles y los santos, cantamos tu bondad y tu fidelidad, proclamando el himno de tu gloria:`,jq=`$Sacerdote.$ Te glorificamos, Padre Santo, porque estás siempre con nosotros en el camino de la vida, sobre todo cuando Cristo, tu Hijo, nos congrega para el banquete pascual de su amor.

Como hizo en otro tiempo con los discípulos de Emaús, él nos explica las Escrituras y parte para nosotros el pan.

Te rogamos, pues, Padre todopoderoso, que envíes tu Espíritu sobre este pan y este vino, de manera que se conviertan para nosotros en Cuerpo y + Sangre de Jesucristo, Hijo tuyo y Señor nuestro.

Él mismo, la víspera de su Pasión, mientras estaba a la mesa con sus discípulos tomó pan, te dio gracias, lo partió y se lo dio, diciendo:

TOMAD Y COMED TODOS DE ÉL,
PORQUE ESTO ES MI CUERPO,
QUE SERÁ ENTREGADO POR VOSOTROS.

Del mismo modo, tomó el cáliz lleno de vino, te dio gracias con la plegaria de bendición y lo pasó a sus discípulos, diciendo:

TOMAD Y BEBED TODOS DE ÉL,
PORQUE ÉSTE ES EL CÁLIZ DE MI SANGRE,
SANGRE DE LA ALIANZA NUEVA Y ETERNA,
QUE SERÁ DERRAMADA POR VOSOTROS Y POR MUCHOS
PARA EL PERDÓN DE LOS PECADOS.

HACED ESTO EN CONMEMORACIÓN MÍA.`,xq=`$Sacerdote.$ Por eso, Padre de bondad, celebramos ahora el memorial de nuestra reconciliación, y proclamamos la obra de tu amor: Cristo, tu Hijo, a través del sufrimiento y de la muerte en Cruz, ha resucitado a la vida nueva y ha sido glorificado a tu derecha.

Dirige tu mirada, Padre santo, sobre esta ofrenda; es Jesucristo que se ofrece con su Cuerpo y con su Sangre y, por este sacrificio, nos abre el camino hacia ti.

Señor, Padre de misericordia, derrama sobre nosotros el Espíritu del Amor, el Espíritu de tu hijo.

Haz que nuestra Iglesia se renueve constantemente a la luz del Evangelio y encuentre siempre nuevos impulsos de vida; consolida los vínculos de unidad entre los laicos y los pastores de tu Iglesia, entre nuestro obispo y sus presbíteros y diáconos, entre todos los obispos y el papa; que la Iglesia sea, en medio de nuestro mundo, dividido por las guerras y discordias, instrumento de unidad, de concordia y de paz.

Acuérdate también, Padre, de nuestros hermanos que murieron en la paz de Cristo, y de todos los demás difuntos, cuya fe sólo tú conociste; admítelos a contemplar la luz de tu rostro y llévalos a la plenitud de la vida en la resurrección.

Y, cuando termine nuestra peregrinación por este mundo, recíbenos también a nosotros en tu reino, donde esperamos gozar todos juntos de la plenitud eterna de tu gloria.

En comunión con la Virgen María, Madre de Dios, los apóstoles, los mártires y todos los santos, te invocamos, Padre, y te glorificamos, Por Cristo, Señor nuestro.`,Uq=`$Sacerdote.$ Por eso, Padre de bondad, celebramos ahora el memorial de nuestra reconciliación, y proclamamos la obra de tu amor: Cristo, tu Hijo, a través del sufrimiento y de la muerte en Cruz, ha resucitado a la vida nueva y ha sido glorificado a tu derecha.

Dirige tu mirada, Padre santo, sobre esta ofrenda; es Jesucristo que se ofrece con su Cuerpo y con su Sangre y, por este sacrificio, nos abre el camino hacia ti.

Señor, Padre de misericordia, derrama sobre nosotros el Espíritu del Amor, el Espíritu de tu hijo.

Fortalécenos con este mismo Espíritu a todos los que hemos sido invitados a tu mesa, para que todos nosotros, pueblo de Dios, con nuestros pastores, el papa, nuestro obispo, con los presbíteros y los diáconos, caminemos alegres en la esperanza y firmes en la fe, y comuniquemos al mundo el gozo del Evangelio.

Acuérdate también, Padre, de nuestros hermanos que murieron en la paz de Cristo, y de todos los demás difuntos, cuya fe sólo tú conociste; admítelos a contemplar la luz de tu rostro y llévalos a la plenitud de la vida en la resurrección.

Y, cuando termine nuestra peregrinación por este mundo, recíbenos también a nosotros en tu reino, donde esperamos gozar todos juntos de la plenitud eterna de tu gloria.

En comunión con la Virgen María, Madre de Dios, los apóstoles, los mártires y todos los santos, te invocamos, Padre, y te glorificamos. Por Cristo, Señor nuestro.`,Hq=`$Sacerdote.$ Por eso, Padre de bondad, celebramos ahora el memorial de nuestra reconciliación, y proclamamos la obra de tu amor: Cristo, tu Hijo, a través del sufrimiento y de la muerte en Cruz, ha resucitado a la vida nueva y ha sido glorificado a tu derecha.

Dirige tu mirada, Padre santo, sobre esta ofrenda; es Jesucristo que se ofrece con su Cuerpo y con su Sangre y, por este sacrificio, nos abre el camino hacia ti.

Señor, Padre de misericordia, derrama sobre nosotros el Espíritu del Amor, el Espíritu de tu hijo.

Fortalécenos a cuantos nos disponemos a recibir el Cuerpo y la Sangre de tu Hijo y haz que, unidos al papa y a nuestro obispo, seamos uno en la fe y en el amor.

Danos entrañas de misericordia ante toda miseria humana, inspíranos el gesto y la palabra oportuna frente al hermano solo y desamparado, ayúdanos a mostrarnos disponibles ante quien se siente explotado y deprimido.

Que tu Iglesia, Señor, sea un recinto de verdad y de amor, de libertad, de justicia y de paz, para que todos encuentren en ella un motivo para seguir esperando.

Acuérdate también, Padre, de nuestros hermanos que murieron en la paz de Cristo, y de todos los demás difuntos, cuya fe sólo tú conociste; admítelos a contemplar la luz de tu rostro y llévalos a la plenitud de la vida en la resurrección.

Y, cuando termine nuestra peregrinación por este mundo, recíbenos también a nosotros en tu reino, donde esperamos gozar todos juntos de la plenitud eterna de tu gloria.

En comunión con la Virgen María, Madre de Dios, los apóstoles, los mártires y todos los santos, te invocamos, Padre, y te glorificamos, por Cristo, Señor nuestro.`,Vq=`$Sacerdote.$ Por eso, Padre de bondad, celebramos ahora el memorial de nuestra reconciliación, y proclamamos la obra de tu amor: Cristo, tu Hijo, a través del sufrimiento y de la muerte en Cruz, ha resucitado a la vida nueva y ha sido glorificado a tu derecha.

Dirige tu mirada, Padre santo, sobre esta ofrenda; es Jesucristo que se ofrece con su Cuerpo y con su Sangre y, por este sacrificio, nos abre el camino hacia ti.

Señor, Padre de misericordia, derrama sobre nosotros el Espíritu del Amor, el Espíritu de tu hijo.

Fortalece a tu pueblo con el Cuerpo y la Sangre de tu Hijo y renuévanos a todos a su imagen.

Derrama tu bendición abundante sobre el papa y sobre nuestro obispo; que todos los miembros de la Iglesia sepamos discernir los signos de los tiempos y crezcamos en la fidelidad al Evangelio; que nos preocupemos de compartir en la caridad las angustias y las tristezas, las alegrías y las esperanzas de los hombres, y así les mostremos el camino de la salvación.

Acuérdate también, Padre, de nuestros hermanos que murieron en la paz de Cristo, y de todos los demás difuntos, cuya fe sólo tú conociste; admítelos a contemplar la luz de tu rostro y llévalos a la plenitud de la vida en la resurrección.

Y, cuando termine nuestra peregrinación por este mundo, recíbenos también a nosotros en tu reino, donde esperamos gozar todos juntos de la plenitud eterna de tu gloria.

En comunión con la Virgen María, Madre de Dios, los apóstoles, los mártires y todos los santos, te invocamos, Padre, y te glorificamos, por Cristo, Señor nuestro.`,Zc=`$Diácono/sacerdote.$ Inclinaos para recibir la bendición.

$Sacerdote.$ El Señor os bendiga y os guarde.

$Pueblo.$ Amén.

$Sacerdote.$ Haga brillar su rostro sobre vosotros y os conceda su favor.

$Pueblo.$ Amén.

$Sacerdote.$ Vuelva su mirada a vosotros y os conceda la paz.

$Pueblo.$ Amén.

$Sacerdote.$ Y la bendición de Dios todopoderoso, Padre, Hijo + y Espíritu Santo, descienda sobre vosotros y os acompañe siempre.

$Pueblo.$ Amén.`,eu=`$Diácono/sacerdote.$ Inclinaos para recibir la bendición.

$Sacerdote.$ La paz de Dios, que supera todo juicio, custodie vuestros corazones y vuestros pensamientos en el conocimiento y el amor de Dios y de su Hijo Jesucristo, nuestro Señor.

$Pueblo.$ Amén.

$Sacerdote.$ Y la bendición de Dios todopoderoso, Padre, Hijo + y Espíritu Santo, descienda sobre vosotros y os acompañe siempre.

$Pueblo.$ Amén.`,ou=`$Diácono/sacerdote.$ Inclinaos para recibir la bendición.

$Sacerdote.$ Dios, nuestro Padre, que nos ha congregado para esta celebración de sus santos, os bendiga, os proteja y os confirme en su paz.

$Pueblo.$ Amén.

$Sacerdote.$ Cristo, el Señor, que ha manifestado en sus santos la fuerza renovadora del Misterio pascual, os haga auténticos testigos de su Evangelio.

$Pueblo.$ Amén.

$Sacerdote.$ El Espíritu Santo, que en los santos nos ha ofrecido un ejemplo de caridad evangélica, os conceda la gracia de acrecentar en la Iglesia la verdadera comunión de fe y amor.

$Pueblo.$ Amén.

$Sacerdote.$ Y la bendición de Dios todopoderoso, Padre, Hijo + y Espíritu Santo, descienda sobre vosotros y os acompañe siempre.

$Pueblo.$ Amén.`,au=`$Diácono/sacerdote.$ Inclinaos para recibir la bendición.

$Sacerdote.$ Dios, Padre misericordioso, os conceda a todos vosotros, como al hijo pródigo, el gozo de volver a la casa paterna.

$Pueblo.$ Amén.

$Sacerdote.$ Cristo, modelo de oración y de vida, os guíe a la auténtica conversión del corazón a través del camino de la Cuaresma.

$Pueblo.$ Amén.

$Sacerdote.$ El Espíritu de sabiduría y de fortaleza os sostenga en la lucha contra el maligno, para que podáis celebrar con Cristo la victoria pascual.

$Pueblo.$ Amén.

$Sacerdote.$ Y la bendición de Dios todopoderoso, Padre, Hijo + y Espíritu Santo, descienda sobre vosotros y os acompañe siempre.

$Pueblo.$ Amén.`,su=`$Diácono/sacerdote.$ Inclinaos para recibir la bendición.

$Sacerdote.$ Que os bendiga Dios todopoderoso en la solemnidad pascual que hoy celebramos y, compasivo, os defienda de toda asechanza del pecado.

$Pueblo.$ Amén.

$Sacerdote.$ El que os ha renovado para la vida eterna, en la resurrección de su Unigénito, os colme con el premio de la inmortalidad.

$Pueblo.$ Amén.

$Sacerdote.$ Y quienes, terminados los días de la pasión del Señor, habéis participado en los gozos de la fiesta de Pascua, podáis llegar, por su gracia, con espíritu exultante a aquellas fiestas que se celebran con alegría eterna.

$Pueblo.$ Amén.

$Sacerdote.$ Y la bendición de Dios todopoderoso, Padre, Hijo + y Espíritu Santo, descienda sobre vosotros y os acompañe siempre.

$Pueblo.$ Amén.`,nu=`$Diácono/sacerdote.$ Inclinaos para recibir la bendición.

$Sacerdote.$ Que Dios omnipotente y misericordioso os santifique con la celebración de este Adviento y os llene de sus bendiciones, ya que creéis que Cristo vino al mundo y esperáis su retorno glorioso.

$Pueblo.$ Amén.

$Sacerdote.$ Que durante toda la vida os conceda permanecer firmes en la fe, alegres en la esperanza y eficaces en la caridad.

$Pueblo.$ Amén.

$Sacerdote.$ Que os enriquezca con los premios eternos cuando venga en la majestad de su gloria aquel de cuya encarnación, llenos de fe, os alegráis ahora.

$Pueblo.$ Amén.

$Sacerdote.$ Y la bendición de Dios todopoderoso, Padre, Hijo + y Espíritu Santo, descienda sobre vosotros y os acompañe siempre.

$Pueblo.$ Amén.`,ru=`$Diácono/sacerdote.$ Inclinaos para recibir la bendición.

$Sacerdote.$ Que Dios, cuya infinita bondad disipó las tinieblas del mundo con la encarnación de su Hijo e iluminó el mundo con su nacimiento glorioso, aleje de vosotros el pecado y alumbre vuestros corazones con el esplendor de las virtudes.

$Pueblo.$ Amén.

$Sacerdote.$ Que llene vuestros corazones de su alegría y os haga mensajeros del Evangelio el mismo que encomendó a sus ángeles anunciar a los pastores el gran gozo del nacimiento del Salvador.

$Pueblo.$ Amén.

$Sacerdote.$ Y que os colme de su paz y de buena voluntad y os conceda participar de la vida eterna aquel que, por la encarnación de su Hijo, unió la tierra con el cielo.

$Pueblo.$ Amén.

$Sacerdote.$ Y la bendición de Dios todopoderoso, Padre, Hijo + y Espíritu Santo, descienda sobre vosotros y os acompañe siempre.

$Pueblo.$ Amén.`,iu=`$Diácono/sacerdote.$ Inclinaos para recibir la bendición.

$Sacerdote.$ Que Dios, fuente y origen de toda bendición, os conceda su gracia, os bendiga copiosamente y os guarde, sanos y salvos, durante todo este año.

$Pueblo.$ Amén.

$Sacerdote.$ Que os conserve íntegros en la fe, inconmovibles en la esperanza y perseverantes hasta el fin, con santa paciencia, en la caridad.

$Pueblo.$ Amén.

$Sacerdote.$ Que disponga vuestros días y ocupaciones en la paz, escuche siempre vuestra oración y os haga felizmente partícipes de la vida eterna.

$Pueblo.$ Amén.

$Sacerdote.$ Y la bendición de Dios todopoderoso, Padre, Hijo + y Espíritu Santo, descienda sobre vosotros y os acompañe siempre.

$Pueblo.$ Amén.`,tu=`$Diácono/sacerdote.$ Inclinaos para recibir la bendición.

$Sacerdote.$ Que Dios, cuya misericordia os llamó de las tinieblas a su luz admirable, derrame su bendición sobre vosotros y fortalezca vuestro corazón en la fe, la esperanza y la caridad.

$Pueblo.$ Amén.

$Sacerdote.$ Y puesto que seguís confiadamente a Cristo, que hoy se manifestó al mundo como luz que brilla en las tinieblas, que os haga también a vosotros ser luz para vuestros hermanos.

$Pueblo.$ Amén.

$Sacerdote.$ Para que así, a lo largo de vuestra peregrinación terrena, os encontréis con Cristo, el Señor, luz de luz, a quien los magos buscaron guiados por la estrella y, llenos de gozo, lograron encontrar.

$Pueblo.$ Amén.

$Sacerdote.$ Y la bendición de Dios todopoderoso, Padre, Hijo + y Espíritu Santo, descienda sobre vosotros y os acompañe siempre.

$Pueblo.$ Amén.`,lu=`$Diácono/sacerdote.$ Inclinaos para recibir la bendición.

$Sacerdote.$ Que Dios, Padre de las luces, que iluminó la mente de los discípulos con la luz del Espíritu Santo, os alegre con su bendición y os llene siempre con los dones de su Espíritu.

$Pueblo.$ Amén.

$Sacerdote.$ Que el mismo fuego divino que de manera admirable descendió sobre los apóstoles purifique vuestros corazones de todo pecado y los ilumine con su claridad.

$Pueblo.$ Amén.

$Sacerdote.$ Que el mismo Espíritu que unió todas las lenguas en una sola confesión de fe os conceda perseverar en ella y llegar, así, a ver plenamente lo que ahora esperáis.

$Pueblo.$ Amén.

$Sacerdote.$ Y la bendición de Dios todopoderoso, Padre, Hijo + y Espíritu Santo, descienda sobre vosotros y os acompañe siempre.

$Pueblo.$ Amén.`,cu=`$Diácono/sacerdote.$ Inclinaos para recibir la bendición.

$Sacerdote.$ Que Dios, que en su providencia amorosa quiso redimir al género humano por medio del Hijo santísimo de la Virgen María, os colme de sus bendiciones.

$Pueblo.$ Amén.

$Sacerdote.$ Que experimentéis siempre la protección de Santa María, por quien habéis recibido al autor de la vida.

$Pueblo.$ Amén.

$Sacerdote.$ Que a todos los que os habéis reunido hoy para celebrar con devoción esta fiesta de María, el Señor os conceda la participación en la vida eterna.

$Pueblo.$ Amén.

$Sacerdote.$ Y la bendición de Dios todopoderoso, Padre, Hijo + y Espíritu Santo, descienda sobre vosotros y os acompañe siempre.

$Pueblo.$ Amén.`,wq=`$Diácono/sacerdote.$ Inclinaos para recibir la bendición.

$Sacerdote.$ Concede a tu pueblo, Señor, con tu protección y tu gracia, salud de alma y cuerpo, perfecto amor a los hermanos y una entrega total a tu servicio. Por Jesucristo, nuestro Señor.

$Pueblo.$ Amén.

$Sacerdote.$ Y la bendición de Dios todopoderoso, Padre, Hijo + y Espíritu Santo, descienda sobre vosotros.

$Pueblo.$ Amén.`,Fq=`$Diácono/sacerdote.$ Inclinaos para recibir la bendición.

$Sacerdote.$ Ilumina, Señor, a tu pueblo para que, cumpliendo tu santa voluntad, pueda practicar siempre el bien. Por Jesucristo, nuestro Señor.

$Pueblo.$ Amén.

$Sacerdote.$ Y la bendición de Dios todopoderoso, Padre, Hijo + y Espíritu Santo, descienda sobre vosotros.

$Pueblo.$ Amén.`,kq=`$Diácono/sacerdote.$ Inclinaos para recibir la bendición.

$Sacerdote.$ Señor, protege con tu mano poderosa a este pueblo suplicante; dígnate purificarlo y orientarlo para que, consolado en el presente, tienda sin cesar hacia los bienes futuros. Por Jesucristo, nuestro Señor.

$Pueblo.$ Amén.

$Sacerdote.$ Y la bendición de Dios todopoderoso, Padre, Hijo + y Espíritu Santo, descienda sobre vosotros.

$Pueblo.$ Amén.`,Bq=`$Diácono/sacerdote.$ Inclinaos para recibir la bendición.

$Sacerdote.$ Señor, que se alegren los fieles porque tú glorificas a los miembros del Cuerpo de tu Hijo; y, pues devotamente celebran la memoria de los santos, concédeles participar de su suerte y gozar un día con ellos de tu gloria eterna. Por Jesucristo, nuestro Señor.

$Pueblo.$ Amén.

$Sacerdote.$ Y la bendición de Dios todopoderoso, Padre, Hijo + y Espíritu Santo, descienda sobre vosotros.

$Pueblo.$ Amén.`,Yq=`$Diácono/sacerdote.$ Inclinaos para recibir la bendición.

$Sacerdote.$ Te pedimos, Señor, que descienda sobre tu pueblo la bendición copiosa, para que la esperanza brote en la tribulación, la virtud se afiance en la dificultad y se obtenga la redención eterna. Por Jesucristo, nuestro Señor.

$Pueblo.$ Amén.

$Sacerdote.$ Y la bendición de Dios todopoderoso, Padre, Hijo + y Espíritu Santo, descienda sobre vosotros.

$Pueblo.$ Amén.`,Gq=`$Diácono/sacerdote.$ Inclinaos para recibir la bendición.

$Sacerdote.$ Te pedimos, Señor, que ilumines la mente de tu pueblo con la claridad de tu luz, para que alcance a ver lo que debe obrar y lleve a cabo lo que sea recto. Por Jesucristo, nuestro Señor.

$Pueblo.$ Amén.

$Sacerdote.$ Y la bendición de Dios todopoderoso, Padre, Hijo + y Espíritu Santo, descienda sobre vosotros.

$Pueblo.$ Amén.`,Qq=`$Diácono/sacerdote.$ Inclinaos para recibir la bendición.

$Sacerdote.$ Oh, Dios, que tus fieles se fortalezcan con tu bendición; sé para ellos consuelo en la tristeza, paciencia en la tribulación y defensa en el peligro. Por Jesucristo, nuestro Señor.

$Pueblo.$ Amén.

$Sacerdote.$ Y la bendición de Dios todopoderoso, Padre, Hijo + y Espíritu Santo, descienda sobre vosotros.

$Pueblo.$ Amén.`,Wq=`$Diácono/sacerdote.$ Inclinaos para recibir la bendición.

$Sacerdote.$ Señor, mira con bondad a tu pueblo y límpialo de todos sus pecados con tu misericordia; así no le hará daño adversidad alguna, si no le domina ninguna maldad. Por Jesucristo, nuestro Señor.

$Pueblo.$ Amén.

$Sacerdote.$ Y la bendición de Dios todopoderoso, Padre, Hijo + y Espíritu Santo, descienda sobre vosotros.

$Pueblo.$ Amén.`;function oo(e){return`$Diácono/sacerdote.$ Inclinaos para recibir la bendición.

$Sacerdote.$ ${e}

$Pueblo.$ Amén.

$Sacerdote.$ Y la bendición de Dios todopoderoso, Padre, Hijo + y Espíritu Santo, descienda sobre vosotros.

$Pueblo.$ Amén.`}const Kq=[{label:"CEE Cuaresma I jueves",content:oo("Te rogamos, Señor, que la misericordia esperada descienda sobre los que te suplican, y concédeles la abundancia de los bienes del cielo, de modo que sepan bien lo que han de pedir y obtengan lo que han solicitado. Por Jesucristo, nuestro Señor.")},{label:"CEE Cuaresma I viernes",content:oo("Mira, Señor, con bondad a tu pueblo, para que se cumpla en su interior lo que su observancia manifiesta externamente. Por Jesucristo, nuestro Señor.")},{label:"CEE Cuaresma I sábado",content:oo("Conforta, Señor, a tus fieles con la bendición que imploramos de ti, para que nunca permitas que nos apartemos de tu voluntad y siempre podamos agradecer tus beneficios. Por Jesucristo, nuestro Señor.")},{label:"CEE Cuaresma II domingo",content:oo("Dirige continuamente, Señor, los corazones de tus fieles y concede esta gracia a tus siervos, de modo que, permaneciendo en tu amor y cercanía, cumplan plenamente tus mandamientos. Por Jesucristo, nuestro Señor.")},{label:"CEE Cuaresma II lunes",content:oo("Afianza, Señor, el corazón de tus fieles y fortalécelos con el poder de tu gracia, para que se entreguen con fervor a la plegaria y se amen con amor sincero. Por Jesucristo, nuestro Señor.")},{label:"CEE Cuaresma II martes",content:oo("Muéstrate propicio, Señor, a las súplicas de tus fieles y cura las debilidades de su espíritu, para que, una vez perdonados, se alegren siempre con tu bendición. Por Jesucristo, nuestro Señor.")},{label:"CEE Cuaresma II miércoles",content:oo("Concede a tus siervos, Señor, la abundancia de tu protección y gracia, dales salud de alma y cuerpo, concédeles plenitud de amor fraterno y haz que sean siempre fieles en su entrega a ti. Por Jesucristo, nuestro Señor.")},{label:"CEE Cuaresma II jueves",content:oo("Asiste, Señor, a tus siervos que imploran el auxilio de tu gracia, para que obtengan la defensa y la guía de tu protección. Por Jesucristo, nuestro Señor.")},{label:"CEE Cuaresma II viernes",content:oo("Te pedimos, Señor, que concedas a tu pueblo la salud de alma y cuerpo, para que, haciendo el bien, merezca ser defendido siempre por tu protección. Por Jesucristo, nuestro Señor.")},{label:"CEE Cuaresma II sábado",content:oo("Estén abiertos, Señor, los oídos de tu misericordia a los ruegos de los que te suplican, y, para que les concedas lo que desean, haz que pidan lo que a ti te agrada. Por Jesucristo, nuestro Señor.")},{label:"CEE Cuaresma III lunes",content:oo("Te pedimos, Señor, que dirijas los corazones de tus fieles y les concedas benigno la gracia de permanecer firmes en el amor a ti y al prójimo, y de cumplir plenamente tus mandamientos. Por Jesucristo, nuestro Señor.")},{label:"CEE Cuaresma III martes",content:oo("Oh, Dios, maestro y guía de tu pueblo, aleja de él los pecados que le afean, para que te sea siempre agradable y se sienta seguro con tu auxilio. Por Jesucristo, nuestro Señor.")},{label:"CEE Cuaresma III miércoles",content:oo("Concede a tu pueblo, Dios nuestro, una voluntad agradable a ti, porque le otorgarás toda clase de bienes al hacerle conforme a tus mandatos. Por Jesucristo, nuestro Señor.")},{label:"CEE Cuaresma III jueves",content:oo("Confiados en tu misericordia, imploramos, Señor, tu clemencia, pues, así como hemos recibido de ti lo que somos, por tu gracia, procuremos desear el bien y poner en práctica lo deseado. Por Jesucristo, nuestro Señor.")},{label:"CEE Cuaresma III viernes",content:oo("Señor, mira a los fieles que imploran tu misericordia, para que puedan difundir por todas partes los dones de tu amor quienes han puesto en ti su confianza. Por Jesucristo, nuestro Señor.")},{label:"CEE Cuaresma IV domingo",content:oo("Defiende, Señor, a los que te suplican, fortalece a los débiles, vivifica siempre con tu luz a los que caminan en sombras de muerte, y, libres de todo mal por tu compasión, concédeles llegar a los bienes definitivos. Por Jesucristo, nuestro Señor.")}],Xq=`$Fuente.$ Misal ICERGUA: Viernes Santo, oración universal.

$Diácono/lector.$ Por la santa Iglesia: oremos, hermanos y hermanas, por la santa Iglesia de Dios, para que el Señor le conceda la paz y la unidad, la proteja en todo el mundo y nos conceda una vida serena para alabar a Dios Padre todopoderoso.

$Sacerdote.$ Dios todopoderoso y eterno, que en Cristo revelaste tu gloria a todas las naciones, conserva la obra de tu amor para que tu Iglesia, extendida por todo el mundo, persevere con fe inquebrantable en la confesión de tu nombre. Por Jesucristo nuestro Señor.

$Pueblo.$ Amén.

$Diácono/lector.$ Por el Obispo de Roma: oremos por el Sucesor de Pedro, para que Dios nuestro Señor, que lo eligió para presidir en la caridad, lo asista y proteja para que promueva la unidad entre los cristianos.

$Sacerdote.$ Dios todopoderoso y eterno, cuya providencia gobierna todas las cosas: atiende nuestras súplicas y haz que el obispo de Roma, redescubriendo el ministerio confiado al apóstol Pedro, se convierta en signo y vínculo de unidad entre todos los cristianos. Por Jesucristo nuestro Señor.

$Pueblo.$ Amén.

$Diácono/lector.$ Por el pueblo de Dios y sus ministros: oremos también por los obispos, presbíteros, diáconos, y por todos los miembros del pueblo santo de Dios.

$Sacerdote.$ Dios todopoderoso y eterno, que con tu Espíritu santificas y gobiernas a toda tu Iglesia; escucha nuestras súplicas y concédenos tu gracia para que todos, según nuestra vocación, podamos servirte con fidelidad. Por Jesucristo nuestro Señor.

$Pueblo.$ Amén.

$Diácono/lector.$ Por los catecúmenos: oremos también por los catecúmenos, para que Dios nuestro Señor les ilumine interiormente y les comunique su amor; y para que, mediante el bautismo, se les perdonen todos sus pecados y queden incorporados a Cristo, Señor nuestro.

$Sacerdote.$ Dios todopoderoso y eterno, que sin cesar concedes nuevos hijos a tu Iglesia; aumenta en los catecúmenos el conocimiento de su fe, para que puedan renacer por el bautismo a la vida nueva de tus hijos de adopción. Por Jesucristo nuestro Señor.

$Pueblo.$ Amén.

$Diácono/lector.$ Por la unidad de los cristianos: oremos también por todos los hermanos que creen en Cristo, para que Dios nuestro Señor les conceda vivir sinceramente lo que profesan y se digne reunirlos para siempre en un solo rebaño.

$Sacerdote.$ Dios todopoderoso y eterno, que reúnes a los que están dispersos y los mantienes en la unidad; mira con amor a todos los cristianos, a fin de que cuantos están consagrados por un solo bautismo formen una sola familia unida por el amor y la integridad de la fe. Por Jesucristo nuestro Señor.

$Pueblo.$ Amén.

$Diácono/lector.$ Por el pueblo de Israel: oremos también por el pueblo de Israel, al que Dios habló por medio de los profetas, para que el Señor le conceda progresar continuamente en el amor a su nombre y en la fidelidad a su alianza.

$Sacerdote.$ Dios todopoderoso y eterno, que prometiste llenar de bendiciones a Abrahán y su descendencia; escucha las súplicas de tu Iglesia y concede al pueblo de la primitiva alianza alcanzar la plenitud de la redención. Por Jesucristo nuestro Señor.

$Pueblo.$ Amén.

$Diácono/lector.$ Por los que no creen en Cristo: oremos también por los que no creen en Cristo, para que, iluminados por el Espíritu Santo, puedan encontrar el camino de la salvación.

$Sacerdote.$ Dios todopoderoso y eterno, concede a quienes no creen en Cristo buscar sinceramente agradarte para que encuentren la verdad; y a nosotros, tus fieles, concédenos progresar en el amor fraterno y en el deseo de conocerte más, para dar al mundo testimonio creíble de tu amor. Por Jesucristo nuestro Señor.

$Pueblo.$ Amén.

$Diácono/lector.$ Por los que no creen en Dios: oremos también por los que no admiten a Dios, para que obren siempre con bondad y rectitud y puedan alcanzar el premio de llegar a él.

$Sacerdote.$ Dios todopoderoso y eterno, que creaste a los seres humanos para que te busquen, y, sólo al encontrarte hallen descanso; concédenos que, en medio de las adversidades de este mundo, todos reconozcan las señales de tu amor y, estimulados por el testimonio de nuestra vida, tengan por fin la alegría de reconocerte como único Dios y Padre de todos los humanos. Por Jesucristo nuestro Señor.

$Pueblo.$ Amén.

$Diácono/lector.$ Por los gobernantes: oremos también por los gobernantes de todas las naciones, para que Dios nuestro Señor les inspire decisiones que promuevan el bien común en un ambiente de paz y libertad.

$Sacerdote.$ Dios todopoderoso y eterno, en cuyas manos está mover el corazón de los humanos y defender los derechos de los pueblos; asiste a los que gobiernan para que, con tu ayuda, promuevan una paz duradera, un auténtico progreso social y una verdadera libertad religiosa. Por Jesucristo nuestro Señor.

$Pueblo.$ Amén.

$Diácono/lector.$ Por los que se encuentran en alguna tribulación: oremos, hermanos, a Dios Padre todopoderoso por todos los que en el mundo sufren las consecuencias del pecado, para que cure a los enfermos, dé alimento a los que padecen hambre, libere de la injusticia a los perseguidos, redima a los encarcelados, conceda volver a casa a los emigrantes y desterrados, proteja a los que viajan y dé la salvación a los moribundos.

$Sacerdote.$ Dios todopoderoso y eterno, consuelo de los que lloran y fuerza de los que sufren; lleguen hasta ti las súplicas de quienes te invocan en su tribulación, para que sientan en sus adversidades la ayuda de tu misericordia. Por Jesucristo nuestro Señor.

$Pueblo.$ Amén.`,Zq=`$Fuente.$ Misal ICERGUA: Viernes Santo de la Pasión del Señor.

$Rúbrica.$ Hoy no se celebra la Misa. La celebración se hace normalmente por la tarde. Se entra en silencio.

$Sacerdote.$ ¡Oh Dios!, tu Hijo Jesucristo, Señor nuestro, por medio de su pasión ha destruido la muerte, que, como consecuencia del antiguo pecado, a todos los humanos alcanza. Concédenos hacernos semejantes a él. De este modo, los que hemos llevado grabada, por exigencia de la naturaleza humana, la imagen de Adán, el humano terreno, llevaremos grabada en adelante, por la acción santificadora de tu gracia, la imagen de Jesucristo, el humano celestial. Él que vive y reina, por lo siglos de los siglos.

$Pueblo.$ Amén.`,eI=`$Fuente.$ Misal ICERGUA: Viernes Santo, veneración de la cruz.

$Rúbrica.$ Después de la oración universal, se pasa a venerar la cruz. Se muestra tres veces la cruz y al mostrarla se canta o se dice:

$Sacerdote/cantor.$ Miren el árbol de la cruz, del cual estuvo colgada la salvación.

$Todos.$ Vengan a venerarlo.

$Rúbrica.$ Después todos los participantes pasan a venerar la cruz.`,oI=`$Fuente.$ Misal ICERGUA: Viernes Santo, rito de la comunión.

$Rúbrica.$ Se extiende un mantel sobre el altar y se pone sobre él un corporal y el libro. El diácono o un ministro trae el Santísimo Sacramento del monumento directamente al altar, mientras todos permanecen de pie y en silencio.`;function aI(e){return["$Fuente.$ Misal ICERGUA: Viernes Santo, rito de la comunión.","$Sacerdote.$ Fieles a la recomendación del Salvador, y siguiendo su divina enseñanza, con confianza decimos:",`$Todos.$ ${Oa(e.lordPrayerLanguage)}`,"$Todos.$ Porque tuyo es el reino, tuyo es el poder y la gloria, por siempre, Señor.",'$Sacerdote.$ Señor Jesucristo, tú dijiste a los apóstoles: "La paz les dejo, mi paz les doy". Que tu Iglesia alcance esa paz y la unidad. Y, a nosotros pecadores, absueltos de condena y reprobación, presérvanos del mal y consérvanos en tu amor para que, liberados, por tu ternura y tu compasión, de toda angustia y tentación; vigilantes reconozcamos cada día, tu gloriosa manifestación. Te lo pedimos a Ti, que vives y reinas, por los siglos de los siglos.',"$Pueblo.$ Amén.","$Sacerdote.$ La paz del Señor esté siempre con ustedes.","$Pueblo.$ Y con tu espíritu.","$Sacerdote.$ Señor Jesucristo, Hijo de Dios vivo, concédenos que la comunión en tu Cuerpo y en tu Sangre, nos libre de todo pecado, nos dé fortaleza para cumplir siempre tu voluntad y nos alcance un corazón sencillo y una mirada limpia, para reconocer la presencia de tu Reino en cada persona y en toda la creación.","$Sacerdote.$ He aquí el Cordero de Dios, que quita el pecado del mundo. Dichosos los invitados al banquete del Señor.","$Todos.$ Señor, no soy digno de que vengas a mí, pero una palabra tuya bastará para sanarme."].join(`

`)}const sI=`$Fuente.$ Misal ICERGUA: Viernes Santo, comunión de los fieles.

$Rúbrica.$ Se distribuye la comunión a los fieles.

$Sacerdote/ministro.$ El Cuerpo de Cristo.

$Fiel.$ Amén.`,nI=`$Fuente.$ Misal ICERGUA: Viernes Santo, oración después de la comunión.

$Sacerdote.$ Oremos.

$Después de la comunión.$ Dios todopoderoso y eterno, que nos has redimido con la gloriosa muerte y resurrección de Jesucristo, por medio de nuestra participación en este sacramento prosigue en nosotros la obra de tu amor y ayúdanos a vivir entregados siempre a tu servicio. Por Jesucristo, nuestro Señor.

$Pueblo.$ Amén.`,rI=`$Fuente.$ Misal ICERGUA: Viernes Santo, oración sobre el pueblo.

$Sacerdote.$ Envía Señor, tu bendición sobre estos fieles tuyos que han conmemorado la muerte de tu Hijo y esperan resucitar con él; concédeles tu perdón y tu consuelo, fortalece su fe y hazlos partícipes de la eterna salvación. Por Jesucristo, nuestro Señor.

$Pueblo.$ Amén.

$Rúbrica.$ Luego se sale en silencio del templo.`,iI=`$Fuente.$ Misal ICERGUA: Miércoles de Ceniza, bendición e imposición de la ceniza.

$Rúbrica.$ Después de la homilía, el sacerdote, de pie y con las manos juntas, dice:

$Sacerdote.$ Hermanos, pidamos humildemente a Dios Padre que bendiga con su gracia esta ceniza que, en señal de arrepentimiento, vamos a imponer sobre nuestras cabezas.

$Rúbrica.$ Después de un breve momento de oración en silencio, prosigue:

$Sacerdote.$ Señor Dios, que te apiadas de quienes se humillan y concedes tu paz a los que se arrepienten, escucha con bondad nuestras súplicas y derrama la gracia de tu bendición sobre estos siervos tuyos que van a recibir la ceniza, para que, fieles a las prácticas cuaresmales, puedan llegar, con corazón puro, a celebrar la Pascua de tu Hijo, que vive y reina por los siglos de los siglos.

$Pueblo.$ Amén.

$Rúbrica.$ Rocía la ceniza con agua bendita, sin decir nada.

$Sacerdote.$ Arrepiéntete y cree en el Evangelio.

$Rúbrica.$ Mientras se impone la ceniza, se entona un canto apropiado.`,tI=`$Fuente.$ Misal ICERGUA: Domingo de Ramos, procesión con los ramos.

$Rúbrica.$ Se reúnen en un lugar conveniente, fuera del templo.

$Sacerdote.$ Queridos hermanos y hermanas: Desde el principio de la Cuaresma nos venimos preparando a través de la oración y de la caridad. Hoy, cercana ya la noche de Pascua, en comunión con toda la Iglesia, nos reunimos para iniciar la celebración de los misterios de la Pasión de nuestro Señor Jesucristo. Acompañemos con fe y devoción a nuestro Salvador en su entrada a la ciudad santa, para que, participando de su cruz, por su gracia, compartamos también su Resurrección.

$Sacerdote.$ Oremos. Dios todopoderoso y eterno, dígnate bendecir estos ramos y, a cuantos acompañamos jubilosos a Cristo, nuestro rey y Señor, concédenos vivir contigo en la Jerusalén del cielo. Por Jesucristo, nuestro Señor.

$Pueblo.$ Amén.

$Rúbrica.$ En silencio, rocía con agua bendita los ramos.`,lI=`$Diácono/sacerdote.$ Lectura del santo Evangelio según san Mateo.

$Pueblo.$ Gloria a ti, Señor.

Estaban ya cerca de Jerusalén. Cuando llegaron a Betfagé, junto al monte de los Olivos. Jesús envió a dos discípulos con esta misión: «Vayan al pueblecito que está al frente, y allí encontrarán una burra atada con su burrito al lado. Desátenla y tráiganmela. Si alguien les dice algo, contéstenle: El Señor los necesita, y los devolverá cuanto antes».

Esto sucedió para que se cumpliera lo dicho por el profeta: Digan a la hija de Sión: «Mira que tu rey viene a ti con toda sencillez, montado en una burra, un animal de carga».

Los discípulos se fueron e hicieron como Jesús les había mandado. Le trajeron la burra con su cría, le colocaron sus mantos sobre el lomo y él se sentó encima.

Había muchísima gente; extendían sus mantos en el camino, o bien cortaban ramas de árboles, con las que cubrían el suelo. Y el gentío que iba delante de Jesús, así como los que le seguían, empezaron a gritar: «¡Hosanna al hijo de David! ¡Bendito sea el que viene en el nombre del Señor! ¡Hosanna en lo más alto de los cielos!».

Cuando Jesús entró en Jerusalén, toda la ciudad se alborotó y preguntaban: «¿Quién es este?». Y la muchedumbre respondía: «¡Este es el profeta Jesús, de Nazaret de Galilea!».

$Diácono/sacerdote.$ Palabra del Señor.

$Pueblo.$ Gloria a ti, Señor Jesús.`,cI=`$Diácono/sacerdote.$ Lectura del santo Evangelio según san Marcos.

$Pueblo.$ Gloria a ti, Señor.

Cuando se aproximaban a Jerusalén, cerca ya de Betfagé y de Betania, al pie del monte de los Olivos, Jesús envió a dos de sus discípulos diciéndoles: «Vayan a ese pueblo que ven enfrente; apenas entren encontrarán un burro amarrado, que ningún hombre ha montado todavía. Desátenlo y tráiganlo aquí. Si alguien les pregunta: ¿Por qué hacen eso?, contesten: El Señor lo necesita, pero se lo va a devolver aquí mismo».

Se fueron y encontraron en la calle al burro, amarrado delante de una puerta, y lo desataron. Algunos de los que estaban allí les dijeron: «¿Por qué sueltan ese burro?». Ellos les contestaron lo que les había dicho Jesús, y se lo permitieron.

Trajeron el burro a Jesús, le pusieron sus capas encima y Jesús montó en él. Muchas personas extendían sus capas a lo largo del camino, mientras otras lo cubrían con ramas cortadas en el campo. Y tanto los que iban delante como los que seguían a Jesús, gritaban: «¡Hosanna! ¡Bendito el que viene en nombre del Señor! ¡Ahí viene el bendito reino de nuestro padre David! ¡Hosanna en las alturas!».

$Diácono/sacerdote.$ Palabra del Señor.

$Pueblo.$ Gloria a ti, Señor Jesús.`,uI=`$Diácono/sacerdote.$ Lectura del santo Evangelio según san Juan.

$Pueblo.$ Gloria a ti, Señor.

Al día siguiente, muchos de los que habían llegado para la fiesta se enteraron de que Jesús también venía a Jerusalén. Entonces tomaron ramas de palmera y salieron a su encuentro gritando: «¡Hosanna! ¡Bendito el que viene en nombre del Señor! ¡Bendito sea el Rey de Israel!».

Jesús encontró un burrito y se montó en él, según dice la Escritura: No temas, ciudad de Sión, mira que viene tu Rey montado en un burrito.

Los discípulos no se dieron cuenta de esto en aquel momento, pero cuando Jesús fue glorificado, recapacitaron que esto había sido escrito para él y que lo habían hecho para él.

$Diácono/sacerdote.$ Palabra del Señor.

$Pueblo.$ Gloria a ti, Señor Jesús.`,dI=`$Diácono/sacerdote.$ Lectura del santo Evangelio según san Lucas.

$Pueblo.$ Gloria a ti, Señor.

Dicho esto, Jesús pasó adelante y emprendió la subida hacia Jerusalén. Cuando se acercaban a Betfagé y Betania, al pie del monte llamado de los Olivos, Jesús envió a dos de sus discípulos y les dijo: «Vayan al pueblo de enfrente y al entrar en él encontrarán atado un burrito que no ha sido montado por nadie hasta ahora. Desátenlo y tráiganmelo. Si alguien les pregunta por qué lo desatan, contesten que el Señor lo necesita».

Fueron los dos discípulos y hallaron todo tal como Jesús les había dicho. Mientras soltaban el burrito llegaron los dueños y les preguntaron: «¿Por qué desatan ese burrito?». Contestaron: «El Señor lo necesita».

Trajeron entonces el burrito y le echaron sus capas encima para que Jesús se montara. La gente extendía sus mantos sobre el camino a medida que iba avanzando. Al acercarse a la bajada del monte de los Olivos, la multitud de los discípulos comenzó a alabar a Dios a gritos, con gran alegría, por todos los milagros que habían visto. Decían: «¡Bendito el que viene como Rey, en el nombre del Señor! ¡Paz en el cielo y gloria en lo más alto de los cielos!».

Algunos fariseos que se encontraban entre la gente dijeron a Jesús: «Maestro, reprende a tus discípulos». Pero él contestó: «Yo les aseguro que si ellos se callan, gritarán las piedras».

$Diácono/sacerdote.$ Palabra del Señor.

$Pueblo.$ Gloria a ti, Señor Jesús.`,mI=`$Rúbrica.$ Al final puede hacerse una breve reflexión sobre el sentido de la celebración.

$Rúbrica.$ Seguidamente inicia la procesión de ramos hacia el templo. Durante el trayecto se entonan cantos en los que se reconozca a Cristo como Señor.

$Rúbrica.$ Al llegar al templo, el sacerdote se reviste con los ornamentos propios para la Eucaristía y prosigue la celebración a partir de la oración colecta.`,pI=`$Fuente.$ Misal ICERGUA: Misa vespertina de la Cena del Señor.

$Rúbrica.$ Después de la homilía, donde sea pastoralmente conveniente, se procede al lavatorio de los pies.

$Rúbrica.$ Las personas designadas para el rito van, acompañadas por los ministros, a ocupar los asientos preparados para ellas en un lugar visible.

$Rúbrica.$ El celebrante, si es necesario, se quita la casulla, se acerca a cada una de las personas designadas y, con la ayuda de los ministros, les lava los pies y se los seca.

$Rúbrica.$ Una vez terminado el lavatorio, se continúa con la celebración eucarística a partir de la oración de los fieles.`,fI=`$Fuente.$ Misal ICERGUA: Misa vespertina de la Cena del Señor.

$Rúbrica.$ Dicha la oración después de la comunión, el sacerdote, de pie ante el altar, pone incienso en el incensario y, arrodillado, inciensa tres veces al Santísimo Sacramento.

$Rúbrica.$ Enseguida recibe el paño de hombros, toma en sus manos el copón y lo cubre con las extremidades del paño.

$Rúbrica.$ Se forma entonces la procesión para llevar al Santísimo Sacramento a través del templo, hasta el sitio donde se le va a guardar.

$Rúbrica.$ No hay bendición ni despedida ordinaria. La celebración continúa con la adoración ante el monumento.`,gI=`$Fuente.$ Misal ICERGUA: Jueves Santo, Misa Crismal.

$Rúbrica.$ En la homilía, el obispo exhorta a sus presbíteros a guardar la fidelidad en su ministerio y los invita a renovar públicamente sus promesas sacerdotales.

$Obispo.$ Queridos hermanos: En esta conmemoración anual del día en que Cristo confirió el sacramento del ministerio ordenado a los apóstoles y a nosotros, ¿quieren renovar las promesas que hicieron un día ante la Iglesia?

$Presbíteros.$ Sí, quiero.

$Obispo.$ ¿Quieren unirse más fuertemente a Cristo y configurarse con él, renunciando a ustedes mismos y reafirmando la promesa de cumplir los sagrados deberes que, por amor a Cristo, aceptaron el día de su ordenación, para servicio de la Iglesia?

$Presbíteros.$ Sí, quiero.

$Obispo.$ ¿Desean permanecer como fieles dispensadores de los misterios de Dios en la celebración eucarística y en las demás acciones litúrgicas, y desempeñar fielmente el ministerio de la predicación como seguidores de Cristo, cabeza y pastor, sin pretender los bienes temporales, sino movidos únicamente por el celo por el Pueblo de Dios?

$Presbíteros.$ Sí, quiero.

$Obispo.$ Y ahora ustedes, hermanos muy queridos, oren por sus presbíteros, para que el Señor derrame abundantemente sobre ellos sus bendiciones: que sean ministros fieles de Cristo sumo sacerdote, y los conduzcan a él, única fuente de salvación.

$Todos.$ Cristo, óyenos. Cristo, escúchanos.

$Obispo.$ Oren también por mí, para que sea fiel al ministerio apostólico confiado a mi humilde persona y sea imagen, cada vez más viva y perfecta, de Cristo sacerdote, buen pastor, maestro y siervo de todos.

$Todos.$ Cristo, óyenos. Cristo, escúchanos.

$Obispo.$ El Señor nos guarde en su caridad y nos haga participar a todos, pastores y pueblo santo, de la vida eterna.

$Todos.$ Amén.

$Rúbrica.$ No se dice Credo ni oración de los fieles.`,SI=`$Fuente.$ Misal ICERGUA: Jueves Santo, Misa Crismal.

$Rúbrica.$ Después de la renovación de las promesas sacerdotales, los diáconos y ministros designados para llevar los óleos, así como los fieles que han de presentar sobre el altar el pan, el vino y el agua, van en su busca y se los presentan al obispo trayéndolos en procesión, mientras se entona un canto apropiado.

$Diácono/ministro.$ Óleo para el santo crisma.

$Diácono/ministro.$ Óleo de los enfermos.

$Diácono/ministro.$ Óleo de los catecúmenos.

$Rúbrica.$ La misa se desarrolla como en el rito de la concelebración, hasta el final de la plegaria eucarística.`,bI=`$Fuente.$ Misal ICERGUA: Jueves Santo, Misa Crismal.

$Rúbrica.$ Antes de que el obispo diga la doxología: "Por Cristo, con él y en él", el que llevó la vasija del óleo de los enfermos la lleva cerca del altar y la sostiene delante del obispo, mientras bendice el óleo de los enfermos imponiendo las manos sobre la vasija.

$Obispo.$ Señor Dios, Padre de todo consuelo, que has querido sanar las dolencias de los enfermos por medio de tu Hijo: escucha con amor la oración de nuestra fe y derrama desde el cielo tu Espíritu Santo Consolador sobre este óleo. Tú que has hecho que el leño verde del olivo produzca aceite abundante para vigor de nuestro cuerpo, enriquece con tu bendición este óleo para que cuantos sean ungidos con él sean sanados en su cuerpo y en su espíritu, sientan tu divina protección y experimenten alivio en sus enfermedades y dolores. Que por tu acción, Señor, este aceite sea para nosotros óleo santo, en nombre de Jesucristo nuestro Señor.

$Todos.$ Amén.

$Rúbrica.$ Acabada la bendición, la vasija del óleo de los enfermos se lleva de nuevo a su lugar, y la misa prosigue hasta después de la comunión.`,vI=`$Fuente.$ Misal ICERGUA: Jueves Santo, Misa Crismal.

$Rúbrica.$ Dicha la oración después de la comunión, los ministros colocan las vasijas con los óleos que se han de bendecir sobre una mesa dispuesta en medio del presbiterio.

$Obispo.$ Señor Dios, fuerza y defensa de tu pueblo, que has hecho del aceite un símbolo de vigor, derrama tu Espíritu Santo sobre este óleo y dígnate bendecirlo para que los catecúmenos que han de ser ungidos con él reciban la fortaleza, la sabiduría y la valentía en el combate de la fe; de manera que, viviendo según el Evangelio de Cristo, den testimonio de la presencia de tu Reino y gocen de la alegría de vivir como hijos tuyos y de formar parte de la Iglesia. Por Jesucristo nuestro Señor.

$Todos.$ Amén.`,yI=`$Fuente.$ Misal ICERGUA: Jueves Santo, Misa Crismal.

$Rúbrica.$ Seguidamente el obispo derrama los aromas sobre el óleo y hace el crisma en silencio, a no ser que ya estuviese preparado de antemano.

$Obispo.$ Hermanos: pidamos a Dios Padre todopoderoso que se digne bendecir y santificar este ungüento para que aquellos cuyos cuerpos van a ser ungidos con él sientan interiormente la unción del Espíritu Santo, participando de los frutos de la redención.

$Rúbrica.$ Entonces el obispo, oportunamente, sopla sobre la boca de la vasija del crisma y, con las manos extendidas, dice la oración de consagración.

$Obispo.$ Señor, autor de todo crecimiento y de todo progreso espiritual: recibe complacido la acción de gracias que gozosamente, por nuestro medio, te dirige la Iglesia. Al principio del mundo, tú mandaste que de la tierra brotasen árboles que dieran fruto, y entre ellos, el olivo que ahora nos suministra el aceite con el que hemos preparado el santo crisma. Cuando en los días del diluvio las aguas purificaron de pecado la tierra, una paloma, signo de la gracia futura, anunció con un ramo de olivo la restauración de la paz entre los humanos. David, en los tiempos antiguos, previendo con espíritu profético los sacramentos que tu amor instituiría en favor de la humanidad, nos invitaba a ungir nuestros rostros con óleo en señal de alegría. Y en los últimos tiempos, el símbolo de la unción alcanzó su plenitud: después que el agua bautismal lava los pecados, el óleo santo consagra nuestros cuerpos y da paz y alegría a nuestros rostros.

$Obispo.$ Por eso, Señor, tú mandaste a tu siervo Moisés que, tras purificar en el agua a su hermano Aarón, lo consagrase sacerdote con la unción de este óleo. Todavía alcanzó la unción mayor grandeza cuando tu Hijo, nuestro Señor Jesucristo, después de ser bautizado por Juan en el Jordán, recibió el Espíritu Santo en forma de paloma y se oyó tu voz declarando que él era tu Hijo, el Amado, en quien te complacías plenamente. De este modo se hizo manifiesto que David ya hablaba de Cristo cuando dijo: "El Señor, tu Dios, te ha ungido con aceite de júbilo entre todos tus compañeros".

$Rúbrica.$ El obispo impone las manos sobre el óleo y los concelebrantes, en silencio, extienden la mano derecha hacia el crisma y la mantienen así hasta el final de la oración.

$Obispo.$ Por tanto, te pedimos, Señor, que mediante el poder de tu Espíritu Santo hagas que esta mezcla de aceite y perfume sea para nosotros instrumento y signo de tus bendiciones; derrama sobre nuestros hermanos, cuando sean ungidos con este crisma, la abundancia de los dones del Espíritu Santo, y que los lugares y objetos consagrados por este óleo sean para tu pueblo motivo de santificación. Pero ante todo, Señor, te suplicamos que por medio del sacramento de la confirmación hagas crecer a tu Iglesia en el número y santidad de sus hijos, hasta que, según la medida de Cristo, alcance aquella plenitud en la que tú, en el esplendor de tu gloria, junto con tu Hijo y en la unidad del Espíritu Santo, lo serás todo en todos por los siglos de los siglos.

$Todos.$ Amén.`,hI=`$Fuente.$ Misal ICERGUA: Vigilia Pascual.

$Rúbrica.$ Se apagan las luces de la iglesia. En un lugar adecuado fuera del templo se enciende el fuego.

$Sacerdote.$ Hermanos: en esta noche santa, en que nuestro Señor Jesucristo pasó de la muerte a la vida, la Iglesia invita a todos sus hijos, diseminados por el mundo, a que se reúnan para velar en oración. Si conmemoramos la Pascua del Señor, escuchando su palabra y participando en sus sacramentos, sabemos que también compartiremos su triunfo sobre la muerte y viviremos siempre con él, en Dios.

$Sacerdote.$ Oremos: Dios nuestro, que por medio de tu Hijo has comunicado el fuego de tu luz: bendice este fuego, y concédenos que la celebración de las fiestas pascuales encienda en nosotros la luz de la vida nueva y nos haga partícipes de la gloria de tu Reino.

$Pueblo.$ Amén.

$Rúbrica.$ Bendecido el fuego nuevo, se prepara el cirio pascual.

$Sacerdote.$ Cristo ayer y hoy.

$Sacerdote.$ Principio y fin.

$Sacerdote.$ Alfa.

$Sacerdote.$ Y omega.

$Sacerdote.$ Suyo es el tiempo.

$Sacerdote.$ Y la eternidad.

$Sacerdote.$ A él la gloria y el poder.

$Sacerdote.$ Por los siglos de los siglos. Amén.

$Sacerdote.$ La luz de Cristo, que resucita glorioso, disipe las tinieblas del corazón y del espíritu.

$Diácono/cantor.$ Luz de Cristo.

$Todos.$ Demos gracias a Dios.

$Rúbrica.$ La aclamación se canta al inicio de la procesión, a la entrada del templo y al llegar al altar.`,EI=`$Fuente.$ Misal ICERGUA: Pregón Pascual.

$Sacerdote/diácono/cantor.$ El Señor esté con ustedes.

$Pueblo.$ Y con tu espíritu.

$Sacerdote/diácono/cantor.$ Levantemos el corazón.

$Pueblo.$ Lo tenemos levantado hacia el Señor.

$Sacerdote/diácono/cantor.$ Demos gracias al Señor, nuestro Dios.

$Pueblo.$ Es justo y necesario.

$Sacerdote/diácono/cantor.$ En verdad es justo y necesario aclamar con nuestras voces y con todo el afecto del corazón a Dios invisible, el Padre todopoderoso, y a su único Hijo, nuestro Señor Jesucristo.

Porque él ha pagado por nosotros al eterno Padre la deuda de Adán y, derramando su sangre, canceló la condena del antiguo pecado.

Porque éstas son las fiestas de Pascua, en las que se inmola el verdadero Cordero, cuya sangre consagra la vida de los fieles.

Esta noche sacaste de Egipto a los israelitas, nuestros padres, y los hiciste pasar a pie el mar Rojo.

Esta es la noche en que el fuego esclareció las tinieblas del pecado.

Esta es la noche en la que los que creen en Cristo por toda la tierra son arrancados de los vicios del mundo y de la oscuridad del pecado, son restituidos a la gracia y son agregados a los santos.

Esta es la noche en que, rotas las cadenas de la muerte, Cristo asciende victorioso del abismo.

¿De qué nos serviría haber nacido si no hubiéramos sido rescatados?

¡Qué asombroso beneficio de tu amor por nosotros! ¡Qué incomparable ternura y caridad!

¡Para rescatar al esclavo, entregaste al Hijo!

Necesario fue el pecado de Adán, que ha sido borrado por la muerte de Cristo. ¡Feliz la culpa que mereció tal redentor!

¡Qué noche tan dichosa! Sólo ella conoció el momento que Cristo resucitó de entre los muertos.

Esta es la noche de la que estaba escrito: "Será la noche clara como el día, la noche iluminada por mi gozo".

Y así, esta noche santa ahuyenta los pecados, lava las culpas, devuelve la inocencia a los caídos, expulsa el odio, trae la concordia y doblega a los poderosos.

$Pueblo.$ Amén.`,AI=`$Fuente.$ Misal ICERGUA: Vigilia Pascual, liturgia bautismal.

$Rúbrica.$ El sacerdote con los ministros se dirige a la fuente bautismal, si se encuentra a la vista de los fieles. De lo contrario, se pone un recipiente con agua en el presbiterio.

$Sacerdote.$ Hermanos, acompañemos con nuestra oración a estos catecúmenos que anhelan renacer a nueva vida en la fuente del bautismo, para que Dios, nuestro Padre, les otorgue su protección y su amor.

$Sacerdote.$ Si se bendice la fuente, pero no va a haber bautizos: Hermanos, pidamos a Dios todopoderoso que con su poder santifique esta fuente bautismal, para que cuantos en el bautismo van a ser regenerados en Cristo, sean acogidos en la familia de Dios.

$Rúbrica.$ Si no hay bautizos ni bendición de la fuente, omitidas las letanías, se procede inmediatamente a la bendición del agua.

$Sacerdote.$ Invoquemos, queridos hermanos, a Dios Padre todopoderoso, para que bendiga esta agua, que va a ser derramada sobre nosotros en memoria de nuestro bautismo; y pidámosle que nos renueve interiormente para que permanezcamos fieles al espíritu, que hemos recibido.

$Todos.$ Señor Dios nuestro, escucha las oraciones de tu pueblo que vela en esta noche santa, en que celebramos nuestra creación y la maravilla aún más grande de nuestra redención; dígnate bendecir esta agua.

La creaste para hacer fecunda la tierra y para favorecer nuestros cuerpos con el frescor y la limpieza. La hiciste también instrumento de misericordia al librar a tu pueblo de la esclavitud y al apagar con ella su sed en el desierto; por los profetas la revelaste como signo de la nueva alianza que quisiste sellar con los humanos. Y cuando Cristo descendió a ella en el Jordán, renovaste nuestra naturaleza pecadora con el baño del nuevo renacimiento.

Que esta agua, Señor, avive en nosotros el recuerdo de nuestro bautismo, y nos haga participar en el gozo de nuestros hermanos bautizados en la Pascua. Por Jesucristo nuestro Señor.

$Pueblo.$ Amén.`,PI=`$Sacerdote.$ ¿Renuncian al pecado para vivir en la libertad de los hijos de Dios?

$Pueblo.$ Sí, renuncio.

$Sacerdote.$ ¿Renuncian a todas las seducciones del Maligno, para que el pecado no los esclavice?

$Pueblo.$ Sí, renuncio.

$Sacerdote.$ ¿Renuncian a Satanás, padre y príncipe del pecado?

$Pueblo.$ Sí, renuncio.

$Sacerdote.$ ¿Creen en Dios, Padre todopoderoso, creador del cielo y de la tierra?

$Pueblo.$ Sí, creo.

$Sacerdote.$ ¿Creen en Jesucristo, su Hijo único y Señor nuestro, que nació de Santa María Virgen, padeció y murió por nosotros, resucitó y está sentado a la derecha del Padre?

$Pueblo.$ Sí, creo.

$Sacerdote.$ ¿Creen en el Espíritu Santo, en la santa Iglesia católica, en la comunión de los santos, en el perdón de los pecados, en la resurrección de los muertos y en la vida eterna?

$Pueblo.$ Sí, creo.

$Sacerdote.$ Que Dios todopoderoso, Padre de nuestro Señor Jesucristo, que nos liberó del pecado y nos ha hecho renacer por el agua y el Espíritu Santo, nos conserve con su gracia, unidos a Jesucristo, nuestro Señor, para la vida eterna.

$Pueblo.$ Amén.

$Rúbrica.$ Si no hay bautismos, se rocía con el agua bendecida a toda la asamblea.`;function de(e,o,a=!1){return{title:e,content:o,kind:"mass",quiet:a}}function Je(e,o,a=!1){return{title:e,alternatives:o,kind:"mass",quiet:a}}function Ye(e){return{title:e,kind:"part",quiet:!0}}function Dm(e){return fo(e).includes("viernes santo")}function ba(e){const o=fo(e);return o.includes("jueves de semana santa")||o.includes("jueves santo")||o.includes("cena del senor")}function Rm(e){return fo(e).includes("miercoles de ceniza")}function uu(e){const o=fo(e);return o.includes("domingo de ramos")||o.includes("ramos")&&o.includes("pasion")}function Hn(e){return fo(e).includes("crismal")}function gt(e){const o=fo(e);return o.includes("sabado santo")||o.includes("vigilia pascual")}function qI(e){const o=fo(e);return gt(e)||YI(e.date)||o.includes("pentecost")||o.includes("domingo de pascua")||o.includes("octava de pascua")}function II(){return[Ye("Celebración de la Pasión del Señor"),Ye("Liturgia de la Palabra y oración universal"),de("Entrada en silencio y oración inicial",Zq,!0)]}function $m(){return de("Oración universal solemne",Xq,!0)}function OI(){return[Ye("Veneración de la cruz"),de("Presentación y adoración de la cruz",eI,!0)]}function CI(e,o){const a=[Ye("Rito de la comunión"),de("Traslado del Santísimo Sacramento",oI,!0),de("Padrenuestro e invitación a la comunión",aI(e),!0)];return Eo(a,e,o,"comunion"),a.push(de("Comunión de los fieles",sI,!0),de("Oración después de la comunión",nI,!0),de("Oración sobre el pueblo y salida en silencio",rI,!0)),a}function DI(){return de("Lavatorio de los pies",pI,!0)}function RI(){return de("Bendición e imposición de la ceniza",iI,!0)}function $I(){return de("Renovación de las promesas sacerdotales",gI,!0)}function TI(){return de("Bendición del óleo de los enfermos",bI,!0)}function LI(){return[de("Bendición del óleo de los catecúmenos",vI,!0),de("Consagración del crisma",yI,!0)]}function MI(e){const o=e.cycle?.trim().toUpperCase(),a=[{label:"Año A",cycle:"A",content:lI},{label:"Año B",cycle:"B",content:cI},{label:"Año B - Juan",cycle:"B",content:uI},{label:"Año C",cycle:"C",content:dI}],s=[...a.filter(n=>n.cycle===o),...a.filter(n=>n.cycle!==o)];return Je("Evangelio de la entrada del Señor",s.map(({label:n,content:r})=>({label:n,content:r})),!0)}function NI(e){return[Ye("Conmemoración de la entrada del Señor"),de("Bendición de los ramos",tI,!0),MI(e),de("Procesión hacia el templo",mI,!0)]}function _I(e,o){const a=[Ye("Traslación del Santísimo Sacramento")];return Eo(a,e,o,"final"),a.push(de("Procesión al monumento",fI,!0)),a}function zI(){return[Ye("Vigilia Pascual"),Ye("Lucernario"),de("Bendición del fuego y preparación del cirio",hI,!0),de("Pregón pascual",EI,!0)]}function JI(){return[Ye("Liturgia bautismal"),de("Bendición del agua",AI,!0),de("Renovación de las promesas bautismales",PI,!0)]}const jI={"Salmo responsorial":[{label:"Creación",content:`$Fuente.$ Misal Romano: Vigilia Pascual, oración después de la primera lectura.

$Sacerdote.$ Oremos.

Dios todopoderoso y eterno, admirable en todas tus obras, que tus redimidos comprendan cómo la creación del mundo, en el comienzo de los siglos, no fue obra de mayor grandeza que el sacrificio de Cristo, nuestra Pascua inmolada, en la plenitud de los tiempos. Por Jesucristo, nuestro Señor.

$Pueblo.$ Amén.`},{label:"Creación del hombre",content:`$Fuente.$ Misal Romano: Vigilia Pascual, oración alternativa después de la primera lectura breve.

$Sacerdote.$ Oremos.

Oh, Dios, que admirablemente creaste al hombre y de modo más admirable aún lo redimiste: concédenos resistir sabiamente a los atractivos del pecado para alcanzar la eterna alegría. Por Jesucristo, nuestro Señor.

$Pueblo.$ Amén.`}],"Salmo responsorial II":[{label:"Abrahán",content:`$Fuente.$ Misal Romano: Vigilia Pascual, oración después de la segunda lectura.

$Sacerdote.$ Oremos.

Oh, Dios, Padre supremo de los creyentes, que multiplicas sobre la tierra los hijos de tu promesa con la gracia de la adopción y, por el Misterio pascual, hiciste de tu siervo Abrahán el padre de todas las naciones, como lo habías prometido, concede a tu pueblo responder dignamente a la gracia de tu llamada. Por Jesucristo, nuestro Señor.

$Pueblo.$ Amén.`}],"Salmo responsorial III":[{label:"Mar Rojo",content:`$Fuente.$ Misal Romano: Vigilia Pascual, oración después de la tercera lectura.

$Sacerdote.$ Oremos.

También ahora, Señor, vemos brillar tus antiguas maravillas, y lo mismo que en otro tiempo manifestabas tu poder al librar a un solo pueblo de la persecución del Faraón, hoy aseguras la salvación de todas las naciones, haciéndolas renacer por las aguas del bautismo; te pedimos que los hombres del mundo entero lleguen a ser hijos de Abrahán y miembros del nuevo Israel. Por Jesucristo, nuestro Señor.

$Pueblo.$ Amén.`},{label:"Imagen bautismal",content:`$Fuente.$ Misal Romano: Vigilia Pascual, oración alternativa después de la tercera lectura.

$Sacerdote.$ Oremos.

Oh, Dios, que has iluminado los prodigios de los tiempos antiguos con la luz del nuevo Testamento, el mar Rojo fue imagen de la fuente bautismal, y el pueblo, liberado de la esclavitud, imagen de la familia cristiana; concede a todas las gentes, elevadas por su fe a la dignidad de pueblo elegido, regenerarse por la participación de tu Espíritu. Por Jesucristo, nuestro Señor.

$Pueblo.$ Amén.`}],"Salmo responsorial IV":[{label:"Nueva Jerusalén",content:`$Fuente.$ Misal Romano: Vigilia Pascual, oración después de la cuarta lectura.

$Sacerdote.$ Oremos.

Dios todopoderoso y eterno, multiplica, fiel a tu palabra, la descendencia que aseguraste a la fe de nuestros padres, y aumenta con tu adopción los hijos de la promesa, para que tu Iglesia vea cómo se ha cumplido ya, en gran medida, cuanto creyeron y esperaron los patriarcas. Por Jesucristo, nuestro Señor.

$Pueblo.$ Amén.`}],"Salmo responsorial V":[{label:"Salvación gratuita",content:`$Fuente.$ Misal Romano: Vigilia Pascual, oración después de la quinta lectura.

$Sacerdote.$ Oremos.

Dios todopoderoso y eterno, esperanza única del mundo, que anunciaste por la voz de tus profetas los misterios de los tiempos presentes, atiende los deseos de tu pueblo, porque ninguno de tus fieles puede progresar en la virtud sin la inspiración de tu gracia. Por Jesucristo, nuestro Señor.

$Pueblo.$ Amén.`}],"Salmo responsorial VI":[{label:"Sabiduría",content:`$Fuente.$ Misal Romano: Vigilia Pascual, oración después de la sexta lectura.

$Sacerdote.$ Oremos.

Oh, Dios, que sin cesar haces crecer a tu Iglesia con la convocatoria de todas las gentes, defiende con tu constante protección a cuantos purificas en el agua del bautismo. Por Jesucristo, nuestro Señor.

$Pueblo.$ Amén.`}],"Salmo responsorial VII":[{label:"Corazón nuevo",content:`$Fuente.$ Misal Romano: Vigilia Pascual, oración después de la séptima lectura.

$Sacerdote.$ Oremos.

Oh, Dios, poder inmutable y luz sin ocaso, mira con bondad el sacramento admirable de la Iglesia entera y, en cumplimiento de tus eternos designios, lleva a feliz término la obra de la salvación humana; y que todo el mundo experimente y vea cómo lo abatido se levanta, lo viejo se renueva y todo vuelve a su integridad original, por el mismo Jesucristo, de quien todo procede. Él, que vive y reina por los siglos de los siglos.

$Pueblo.$ Amén.`},{label:"Ambos Testamentos",content:`$Fuente.$ Misal Romano: Vigilia Pascual, oración alternativa después de la séptima lectura.

$Sacerdote.$ Oremos.

Oh, Dios, que para celebrar el Misterio pascual nos instruyes con las páginas de ambos Testamentos, danos a conocer tu misericordia, para que, al percibir los bienes presentes, se afiance la esperanza de los futuros. Por Jesucristo, nuestro Señor.

$Pueblo.$ Amén.`}]};function xI(e){const o=jI[e];if(o?.length)return Je("Oración después de la lectura",o,!0)}const UI={"Antífona de entrada":"entranceAntiphon",Colecta:"collect","Sobre las ofrendas":"offerings","Antífona de comunión":"communionAntiphon","Después de la comunión":"postCommunion","Oración sobre el pueblo":"prayerOverPeople"};function Tm(e,o,a){const s=o.celebration?.trim(),n=[`$Celebración.$ ${s?`${s}.`:"Del día."}`];if(a?.trim()){const r=HI(FI(VI(Lm(a,o),o.cycle),o));n.push(`$${e}.$ ${r}`)}return n.join(`

`)}function HI(e){return e.replace(/\s+,/g,",").replaceAll("s úplicas","súplicas").replaceAll("nuest ro","nuestro").replaceAll("sie ndo","siendo").replaceAll("omnipo tencia","omnipotencia").replaceAll("Sang re","Sangre")}function Lm(e,o){const a=o.celebration?.trim()||"esta celebración";return e.replaceAll("{{celebration}}",a)}function VI(e,o){const a=o?.trim().toUpperCase();if(!a||!["A","B","C"].includes(a))return e;const s=/^\s*Año\s*([ABC])\s*:\s*(.*)$/i;if(!/(^|\n)\s*Año\s*[ABC]\s*:/i.test(e))return e;const n=new Map;let r;for(const i of e.replace(/\r\n/g,`
`).split(`
`)){const t=i.match(s);if(t){r=t[1].toUpperCase(),n.set(r,[t[2].trim()].filter(Boolean));continue}r&&n.get(r)?.push(i)}return n.get(a)?.join(`
`).trim()||e}function En(e){const o=St(e);if(/\b(?:jn|juan)\s*4\b/.test(o)||o.includes("samaritana")||o.includes("agua que yo le dare"))return"samaritan";if(/\b(?:jn|juan)\s*9\b/.test(o)||o.includes("unto mis ojos")||o.includes("ciego de nacimiento"))return"blind";if(/\b(?:jn|juan)\s*11\b/.test(o)||o.includes("lazaro")||o.includes("resurreccion de lazaro"))return"lazarus";if(/\b(?:jn|juan)\s*8\b/.test(o)||o.includes("adultera")||o.includes("ninguno te ha condenado"))return"adulteress";if(/\b(?:lc|lucas)\s*15\b/.test(o)||o.includes("hijo prodigo")||o.includes("este hermano tuyo"))return"prodigal";if(o.includes("otro evangelio"))return"other"}function wI(e){const o=/\bCuando se lee(?:\s+el)?\s+([^:]+):\s*/gi,a=[...e.matchAll(o)];if(!a.length)return;const s=e.slice(0,a[0].index).trim(),n=a.map((r,i)=>{const t=(r.index??0)+r[0].length,l=a[i+1]?.index??e.length;return{condition:r[1].trim(),content:e.slice(t,l).trim()}}).filter(r=>r.content);return{base:s,segments:n}}function FI(e,o){const a=wI(e);if(!a)return e;const s=`${o.massGospelReference??""}
${o.massGospelText??""}`.trim();if(!s)return e;const n=En(s)??"other",r=a.base?En(a.base):void 0;if(a.base&&r===n)return a.base;const i=a.segments.find(l=>En(`${l.condition}
${l.content}`)===n);if(i)return i.content;const t=a.segments.find(l=>En(l.condition)==="other");return t&&(!a.base||r&&r!==n)?t.content:a.base||e}function kI(e){return e.celebration?.trim()||"esta celebración"}function BI(e,o,a,s){return[`$Edición.$ ${a}.`,Tm(e,o,s)].join(`

`)}function Ri(e){return e.source==="spain"?"España":e.source==="icergua"?"ICERGUA":e.source==="usccb"?"USCCB/CEM":e.source==="liturgiapapal"?"Liturgia Papal":e.source==="mercaba"?"Mercabá":e.source==="peru"?"Perú":e.source==="textosliturgia"?"Textos para la Liturgia":e.source==="santaescolastica"?"Santa Escolástica":"LDHoras"}function du(e){return e.title.startsWith("Común")?e.title:Ri(e)}function Yr(e){const o=e?.replace(/\r\n/g,`
`).trim();return o?o.split(/(?:^|\n)\s*O\s+bien\s*:?\s*/gi).map(a=>a.trim()).filter(Boolean):[]}function Gr(e,o,a){return a>1?`${e} ${o+1}`:e}function mu(e,o,a,s){return[`$Fuente.$ ${a.source==="santaescolastica"?Ri(a):`Misal ${Ri(a)}`}: ${a.title}.`,Tm(e,o,a.fields[s])].join(`

`)}function Za(e,o,a,s="",n="",r=s){const i=UI[o],t=i?aP(i,a):[],l=t.find(f=>f.source==="spain"),u=t.filter(f=>f.source==="icergua"),c=t.filter(f=>f.source!=="spain"&&f.source!=="icergua"),m=[];if(i&&l?.fields[i]){const f=Yr(l.fields[i]);f.forEach((y,O)=>{m.push({label:Gr("España",O,f.length),content:[s,BI(o,a,"Misal Romano de España",y),n].filter(Boolean).join(`

`)})})}return u.forEach(f=>{if(!i||!f.fields[i])return;const y=Yr(f.fields[i]),O=du(f);y.forEach((I,_)=>{m.push({label:Gr(O,_,y.length),content:[s,mu(o,a,{...f,fields:{...f.fields,[i]:I}},i),n].filter(Boolean).join(`

`)})})}),c.forEach(f=>{if(!i||!f.fields[i])return;const y=Yr(f.fields[i]),O=du(f);y.forEach((I,_)=>{m.push({label:Gr(O,_,y.length),content:[s,mu(o,a,{...f,fields:{...f.fields,[i]:I}},i),n].filter(Boolean).join(`

`)})})}),m.length?Je(e,m):de(e,r,!0)}function St(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function fo(e){return St([e.celebration,e.rank,...e.seasons??[]].filter(Boolean).join(" "))}function Mm(e){const o=e%19,a=Math.floor(e/100),s=e%100,n=Math.floor(a/4),r=a%4,i=Math.floor((a+8)/25),t=Math.floor((a-i+1)/3),l=(19*o+a-n-t+15)%30,u=Math.floor(s/4),c=s%4,m=(32+2*r+2*u-l-c)%7,f=Math.floor((o+11*l+22*m)/451),y=Math.floor((l+m-7*f+114)/31)-1,O=(l+m-7*f+114)%31+1;return new Date(e,y,O)}function Nm(e,o){const a=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()),s=Date.UTC(o.getFullYear(),o.getMonth(),o.getDate());return Math.round((a-s)/864e5)}function YI(e){if(!e)return!1;const o=Nm(e,Mm(e.getFullYear()));return o>=0&&o<=7}function _m(e){if(e)return Nm(e,Mm(e.getFullYear()))}function GI(e){if(!e)return!1;const o=e.getMonth(),a=e.getDate();return o===11&&a>=25&&a<=31||o===0&&a===1}function QI(e){const o=St(e.celebration??"");return GI(e.date)||o==="navidad"||o.includes("natividad")}function bt(e){const o=fo(e),a=_m(e.date);if(gt(e))return{key:"easterNight",label:"Vigilia pascual"};if(a!==void 0&&a>=0&&a<=7)return{key:"easter",label:"Pascua"};if(o.includes("pentecost"))return{key:"pentecost",label:"Pentecostés"};if(o.includes("ascension"))return{key:"ascension",label:"Ascensión"};if(o.includes("epifania"))return{key:"epiphany",label:"Epifanía"};if(QI(e))return{key:"christmas",label:"Navidad"};if(e.rank?.toUpperCase()==="SUNDAY")return{key:"sunday",label:"domingo"}}function pu(e,o=Wc,a=Kc){return Im.replace(Sq,e).replace(Wc,o).replace(Kc,a)}function WI(e){if(ba(e))return{label:"I - Jueves Santo",content:pu(Xc.holyThursday,vq,bq)};const o=bt(e);if(o)return{label:`I - ${o.label}`,content:pu(Xc[o.key],o.key==="easter"||o.key==="easterNight"?yq:void 0)}}function KI(e){const o=WI(e),a=o?[o]:[];return a.push({label:"I",content:Im}),a}function XI(e){return Pm.replace(mq,e)}function ZI(e){return qm.replace(fq,e)}function eO(e){const o=ba(e)?[{label:"II - Jueves Santo",content:XI(pq)}]:[];return o.push({label:"II",content:Pm}),o}function oO(e){const o=bt(e),a=o?[{label:`II - ${o.label}`,content:ZI(gq[o.key])}]:[];return a.push({label:"II",content:qm}),a}function aO(e){return Om.replace(Eq,e)}function sO(e){return Cm.replace(Pq,e)}function nO(e){const o=ba(e)?[{label:"III - Jueves Santo",content:aO(Aq)}]:[];return o.push({label:"III",content:Om}),o}function rO(e){const o=bt(e),a=o?[{label:`III - ${o.label}`,content:sO(qq[o.key])}]:[];return a.push({label:"III",content:Cm}),a}function vt(e){return fo(e).includes("lent")||fo(e).includes("cuaresma")}function iO(e){return e.replace(/_([^_]+)_/g,"$1").replace(/\$([^$]+)\$/g,"$1").replace(/\$/g,"").trim()}function tO(e){const o=e?.trim()??"",a=o.match(/_([^_]+)_/)?.[1]?.trim();if(a)return a;const s=o.match(/:\s*(.+)$/s)?.[1]?.trim();return s?iO(s):""}function lO(e){const o=fo(e),a=tO(e.massGospelReference);return a?{label:"Evangelio del día",verse:a}:o.includes("advent")||o.includes("adviento")?{label:"Común Adviento",verse:"Muéstranos, Señor, tu misericordia y danos tu salvación."}:o.includes("christmas")||o.includes("navidad")||o.includes("epifania")?{label:"Común Navidad",verse:"Nos ha amanecido un día sagrado; venid, naciones, adorad al Señor, porque hoy una gran luz ha bajado a la tierra."}:vt(e)?{label:"Común Cuaresma",verse:"No solo de pan vive el hombre, sino de toda palabra que sale de la boca de Dios."}:o.includes("pentecost")?{label:"Común Pentecostés",verse:"Ven, Espíritu Santo, llena los corazones de tus fieles y enciende en ellos el fuego de tu amor."}:o.includes("easter")||o.includes("pascua")||o.includes("ascension")?{label:"Común Pascua",verse:"Ha resucitado Cristo, que creó todas las cosas y se compadeció del género humano."}:o.includes("martir")||o.includes("martyr")?{label:"Común mártires",verse:"Dichosos los perseguidos por causa de la justicia, porque de ellos es el reino de los cielos."}:o.includes("virgen")||o.includes("maria")||o.includes("maría")?{label:"Común Santa María",verse:"Dichosa tú, Virgen María, que has creído, porque lo que te ha dicho el Señor se cumplirá."}:{label:"Común",verse:"Tus palabras, Señor, son espíritu y vida; tú tienes palabras de vida eterna."}}function cO(e){return vt(e)?"$Todos.$ Honor y gloria a ti, Señor Jesús.":"$Todos.$ Aleluya."}function uO(e,o){const a=cO(e);return[a,`$Cantor.$ ${o}`,a].join(`

`)}function dO(e){const o=fo(e),a=e.rank?.toUpperCase(),s=[],n=(r,i)=>{s.push({label:r,content:i})};return o.includes("epifania")&&n("Epifanía",TP),(o.includes("transfiguracion")||o.includes("transfiguraci"))&&n("Transfiguración",Qc),(o.includes("pentecost")||o.includes("espiritu santo"))&&n("Espíritu Santo",FP),o.includes("jose")&&n("San José",nq),o.includes("angel")&&n("Ángeles",sq),o.includes("trinidad")&&n("Santísima Trinidad",iq),(o.includes("sagrado corazon")||o.includes("sacratísimo corazon")||o.includes("sacratísimo corazón"))&&n("Sagrado Corazón",tq),(o.includes("cristo rey")||o.includes("rey del universo"))&&n("Cristo Rey",lq),(o.includes("juan bautista")||o.includes("john the baptist"))&&n("San Juan Bautista",rq),(o.includes("corpus")||o.includes("eucarist")||o.includes("cuerpo")&&o.includes("sangre"))&&(n("Eucaristía I",IP),n("Eucaristía II",OP)),(o.includes("unidad")||o.includes("ecumen")||o.includes("iglesia"))&&n("Unidad de la Iglesia",Lc),(o.includes("dedicacion")||o.includes("dedicaci")||o.includes("templo"))&&n("Dedicación de una iglesia",Mc),(o.includes("bautismo")||o.includes("bautismal"))&&n("Bautismo",Nc),(o.includes("confirmacion")||o.includes("confirmaci")||o.includes("crisma"))&&n("Confirmación",_c),(o.includes("ordenacion")||o.includes("ordenaci")||o.includes("crismal")||o.includes("sacerdote")||o.includes("presbiter"))&&(n("Ordenaciones I",zc),n("Ordenaciones II",Jc)),(o.includes("matrimonio")||o.includes("boda")||o.includes("esposos"))&&n("Matrimonio",jc),(o.includes("difunto")||o.includes("difuntos")||o.includes("exequias")||o.includes("funeral"))&&(n("Difuntos I",xc),n("Difuntos II",Uc),n("Difuntos III",Hc),n("Difuntos IV",Vc),n("Difuntos V",wc)),(o.includes("advent")||o.includes("adviento"))&&(n("Adviento I",CP),n("Adviento II",DP)),(o.includes("christmas")||o.includes("navidad")||o.includes("natividad"))&&(n("Navidad I",RP),n("Navidad II",$P),n("Navidad III",Yc)),(o.includes("lent")||o.includes("cuaresma"))&&(n("Cuaresma I",LP),n("Cuaresma II",MP),n("Cuaresma III",NP),n("Cuaresma IV",_P)),(o.includes("pasion")||o.includes("ramos")||o.includes("semana santa")||o.includes("viernes santo"))&&(n("Pasión I",zP),n("Pasión II",JP)),(o.includes("easter")||o.includes("pascua"))&&(n("Pascua I",jP),n("Pascua II",xP),n("Pascua III",UP),n("Pascua IV",HP),n("Pascua V",VP)),o.includes("ascension")&&(n("Ascensión II",Gc),n("Después de la Ascensión",wP)),a==="SUNDAY"&&o.includes("ordinary_time")&&(n("Dominical I",kP),n("Dominical II",BP),n("Dominical III",YP),n("Dominical IV",GP),n("Dominical V",QP),n("Dominical VI",WP),n("Dominical VII",KP),n("Dominical VIII",XP)),(o.includes("maria")||o.includes("virgen"))&&(n("Santa María I",ZP),n("Santa María II",eq),n("Santa María III",oq),n("Santa María IV",aq)),(o.includes("apostol")||o.includes("apostle")||o.includes("evangelist"))&&(n("Apóstoles I",hP),n("Apóstoles II",Fc)),(o.includes("martir")||o.includes("martyr"))&&(n("Mártires I",AP),n("Mártires II",Bc)),(o.includes("obispo")||o.includes("bishop")||o.includes("pastor")||o.includes("papa")||o.includes("pope")||o.includes("presbiter"))&&n("Pastores",PP),(o.includes("abad")||o.includes("abbot")||o.includes("religios")||o.includes("virgen")||o.includes("virgin")||o.includes("monj"))&&n("Religiosos",qP),(o.includes("sant")||o.includes("saint"))&&(n("Santos I",EP),n("Santos II",kc)),s.push({label:"Común I",content:fP},{label:"Común II",content:gP},{label:"Común III",content:SP},{label:"Común IV",content:bP},{label:"Común V",content:vP},{label:"Común VI",content:yP},{label:"Transfiguración",content:Qc},{label:"Unidad de la Iglesia",content:Lc},{label:"Dedicación de una iglesia",content:Mc},{label:"Bautismo",content:Nc},{label:"Confirmación",content:_c},{label:"Ordenaciones I",content:zc},{label:"Ordenaciones II",content:Jc},{label:"Matrimonio",content:jc},{label:"Difuntos I",content:xc},{label:"Difuntos II",content:Uc},{label:"Difuntos III",content:Hc},{label:"Difuntos IV",content:Vc},{label:"Difuntos V",content:wc},{label:"Navidad III",content:Yc},{label:"Ascensión II",content:Gc},{label:"Apóstoles II",content:Fc},{label:"Mártires II",content:Bc},{label:"Santos II",content:kc},{label:"Diversas I - unidad",content:Nq},{label:"Diversas II - salvación",content:_q},{label:"Diversas III - camino",content:zq},{label:"Diversas IV - caridad",content:Jq},{label:"PE IV",content:Iq},{label:"Reconciliación I",content:Dq},{label:"Reconciliación II",content:Tq}),s.filter((r,i,t)=>t.findIndex(l=>l.label===r.label)===i).map(r=>({...r,content:Lm(r.content,e)}))}const zm=`$Sacerdote/diácono.$ Señor, ten piedad.

$Pueblo.$ Señor, ten piedad.

$Sacerdote/diácono.$ Cristo, ten piedad.

$Pueblo.$ Cristo, ten piedad.

$Sacerdote/diácono.$ Señor, ten piedad.

$Pueblo.$ Señor, ten piedad.`,yt=`$Sacerdote.$ Dios todopoderoso tenga misericordia de nosotros, perdone nuestros pecados y nos lleve a la vida eterna.

$Pueblo.$ Amén.`,ht="$Sacerdote.$ Hermanos: para celebrar dignamente estos sagrados misterios, reconozcamos nuestros pecados.",mO="$Sacerdote.$ Humildes y penitentes, como el publicano en el templo, acerquémonos al Dios justo, y pidámosle que tenga piedad de nosotros, que también nos reconocemos pecadores.",pO="$Sacerdote.$ Jesucristo, el justo, intercede por nosotros y nos reconcilia con el Padre. Abramos, pues, nuestro espíritu al arrepentimiento, para acercarnos a la mesa del Señor.",fO="$Sacerdote.$ Pidamos perdón a Dios de todo corazón.",gO=`$Todos.$ Yo confieso ante Dios todopoderoso y ante vosotros, hermanos, que he pecado mucho de pensamiento, palabra, obra y omisión.

$Todos.$ Por mi culpa, por mi culpa, por mi gran culpa. Por eso ruego a santa María, siempre Virgen, a los ángeles, a los santos y a vosotros, hermanos, que intercedáis por mí ante Dios, nuestro Señor.`;function ls(e){return[ht,`$Sacerdote/diácono.$ ${e[0]}: Señor, ten piedad.`,"$Pueblo.$ Señor, ten piedad.",`$Sacerdote/diácono.$ ${e[1]}: Cristo, ten piedad.`,"$Pueblo.$ Cristo, ten piedad.",`$Sacerdote/diácono.$ ${e[2]}: Señor, ten piedad.`,"$Pueblo.$ Señor, ten piedad.",yt].join(`

`)}function An(e=ht){return[e,gO,yt,zm].join(`

`)}const SO=`${ht}

$Sacerdote/diácono.$ Tú que has sido enviado a sanar los corazones afligidos: Señor, ten piedad.

$Pueblo.$ Señor, ten piedad.

$Sacerdote/diácono.$ Tú que has venido a llamar a los pecadores: Cristo, ten piedad.

$Pueblo.$ Cristo, ten piedad.

$Sacerdote/diácono.$ Tú que estás sentado a la derecha del Padre para interceder por nosotros: Señor, ten piedad.

$Pueblo.$ Señor, ten piedad.

${yt}`,bO=`$Sacerdote.$ El Señor Jesús, que nos invita a la mesa de la Palabra y de la Comunión, nos llama ahora a la conversión. Reconozcamos, pues, que somos pecadores e invoquemos con esperanza la misericordia de Dios.

$Sacerdote/diácono.$ Luz del mundo, que vienes a iluminar a todos los que viven en las tinieblas del pecado: Señor, ten piedad.

$Pueblo.$ Señor, ten piedad.

$Sacerdote/diácono.$ Buen pastor, que vienes a guiar a tu rebaño por las sendas de la verdad y la justicia: Cristo, ten piedad.

$Pueblo.$ Cristo, ten piedad.

$Sacerdote/diácono.$ Hijo de Dios, que volverás un día para dar cumplimiento a las promesas del Padre: Señor, ten piedad.

$Pueblo.$ Señor, ten piedad.

$Sacerdote.$ Dios todopoderoso tenga misericordia de nosotros, perdone nuestros pecados y nos lleve a la vida eterna.

$Pueblo.$ Amén.`,vO=ls(["Tú que eres el Camino que conduce al Padre","Tú que eres la Verdad que ilumina a los pueblos","Tú que eres la Vida que renueva el mundo"]),yO=ls(["Tú que eres la plenitud de la verdad y de la gracia","Tú que te has hecho pobre para enriquecernos","Tú que has venido para hacer de nosotros tu pueblo santo"]),hO=ls(["Tú que no has venido a condenar, sino a perdonar","Tú que has dicho que hay gran fiesta en el cielo por un pecador que se arrepiente","Tú que perdonas mucho a quien mucho ama"]),EO=ls(["Tú que has venido a buscar al que estaba perdido","Tú que has querido dar la vida en rescate por todos","Tú que reúnes a tus hijos dispersos"]),AO=ls(["Tú que ofreciste el perdón a Pedro arrepentido","Tú que prometiste el paraíso al buen ladrón","Tú que perdonas a todo hombre que confía en tu misericordia"]),PO=ls(["Defensor de los pobres","Refugio de los débiles","Esperanza de los pecadores"]),qO=`$Sacerdote.$ Hermanos: ¿Renunciáis al pecado, para vivir en la libertad de los hijos de Dios?

$Pueblo.$ Sí, renuncio.

$Sacerdote.$ ¿Renunciáis a las seducciones del Maligno, para que no domine en vosotros el pecado?

$Pueblo.$ Sí, renuncio.

$Sacerdote.$ ¿Renunciáis a Satanás, padre y príncipe del pecado?

$Pueblo.$ Sí, renuncio.

$Sacerdote.$ Dios todopoderoso tenga misericordia de nosotros, perdone nuestros pecados y nos lleve a la vida eterna.

$Pueblo.$ Amén.`,IO=`$Coro/cantor.$ Ofrezcan los cristianos
ofrendas de alabanza
a gloria de la Víctima
propicia de la Pascua.

Cordero sin pecado
que a las ovejas salva,
a Dios y a los culpables
unió con nueva alianza.

Lucharon vida y muerte
en singular batalla
y, muerto el que es la Vida,
triunfante se levanta.

¿Qué has visto de camino,
María, en la mañana?

A mi Señor glorioso,
la tumba abandonada,
los ángeles testigos,
sudarios y mortaja.

¡Resucitó de veras
mi amor y mi esperanza!

Venid a Galilea,
allí el Señor aguarda;
allí veréis los suyos
la gloria de la Pascua.

Primicia de los muertos,
sabemos por tu gracia
que estás resucitado;
la muerte en ti no manda.

Rey vencedor, apiádate
de la miseria humana
y da a tus fieles parte
en tu victoria santa.`,OO=`$Coro/cantor.$ Ven, Espíritu divino,
manda tu luz desde el cielo.
Padre amoroso del pobre;
don, en tus dones espléndido;
luz que penetra las almas;
fuente del mayor consuelo.

Ven, dulce huésped del alma,
descanso de nuestro esfuerzo,
tregua en el duro trabajo,
brisa en las horas de fuego,
gozo que enjuga las lágrimas
y reconforta en los duelos.

Entra hasta el fondo del alma,
divina luz, y enriquécenos.
Mira el vacío del hombre
si tú le faltas por dentro;
mira el poder del pecado
cuando no envías tu aliento.

Riega la tierra en sequía,
sana el corazón enfermo,
lava las manchas, infunde
calor de vida en el hielo,
doma el espíritu indómito,
guía al que tuerce el sendero.

Reparte tus siete dones
según la fe de tus siervos;
por tu bondad y tu gracia
dale al esfuerzo su mérito;
salva al que busca salvarse
y danos tu gozo eterno.
Amén.`,CO=`$Coro/cantor.$ Este es el pan de los ángeles,
convertido en alimento de los caminantes;
es verdadero pan de los hijos,
que no debe echarse a los perros.

Figuras lo representaron:
Isaac fue sacrificado,
el cordero pascual fue inmolado,
el maná alimentó a nuestros padres.

Buen Pastor, pan verdadero,
Jesús, ten piedad de nosotros;
apaciéntanos y protégenos;
haznos ver los bienes
en la tierra de los vivientes.

Tú, que todo lo sabes y puedes,
que nos alimentas en esta vida mortal,
haznos tus comensales,
coherederos y compañeros
de los santos ciudadanos.
Amén.`,DO=`$Coro/cantor.$ Estaba la Madre dolorosa
junto a la cruz llorosa
en que pendía su Hijo.
Su alma gimiente,
contristada y doliente,
atravesó la espada.

¡Oh, cuán triste y afligida
estuvo aquella bendita
Madre del Unigénito!
Languidecía y se dolía
la piadosa Madre que veía
las penas de su excelso Hijo.

¿Qué hombre no lloraría
si a la Madre de Cristo viera
en tanto suplicio?
¿Quién no se entristecería
a la Madre contemplando
con su doliente Hijo?

Por los pecados de su gente
vio a Jesús en los tormentos
y doblegado por los azotes.
Vio a su dulce Hijo
muriendo desolado
al entregar su espíritu.

Ea, Madre, fuente de amor,
hazme sentir tu dolor;
contigo quiero llorar.
Haz que mi corazón arda
en el amor de mi Dios
y en cumplir su voluntad.

Santa Madre, yo te ruego
que me traspases las llagas
del Crucificado en el corazón.
De tu Hijo malherido,
que por mí tanto sufrió,
reparte conmigo las penas.

Déjame llorar contigo,
condolerme por tu Hijo
mientras yo esté vivo.
Junto a la cruz contigo estar
y contigo asociarme
en el llanto es mi deseo.

Virgen de vírgenes preclara,
no te amargues ya conmigo,
déjame llorar contigo.
Haz que llore la muerte de Cristo,
hazme socio de su pasión,
haz que me quede con sus llagas.

Haz que me hieran sus llagas,
haz que con la cruz me embriague
y con la sangre de tu Hijo.
Para que no me queme en las llamas,
defiéndeme tú, Virgen santa,
en el día del juicio.

Cuando, Cristo, haya de irme,
concédeme que tu Madre me guíe
a la palma de la victoria.
Y cuando mi cuerpo muera,
haz que a mi alma se conceda
del paraíso la gloria.
Amén.`;function RO(e){const o=fo(e),a=_m(e.date);if(o.includes("pentecost"))return{label:"Pentecostés",content:OO,required:!0};if(a!==void 0&&a>=0&&a<=7)return{label:"Pascua",content:IO,required:a===0};if(o.includes("corpus")||o.includes("cuerpo y sangre"))return{label:"Corpus Christi",content:CO,required:!1};if(o.includes("dolores")&&(o.includes("maria")||o.includes("virgen")))return{label:"Nuestra Señora de los Dolores",content:DO,required:!1}}function Eo(e,o,a,s){e.push(a(s))}function $O(e){const o=RO(e);if(o)return de("Secuencia",[`$Rúbrica.$ ${o.required?"Obligatoria":"Opcional"} en ${o.label}; se canta antes del Aleluya.`,o.content].join(`

`),!0)}function TO(e){const o=lO(e);return Je("Aclamación antes del Evangelio",[{label:o.label,content:uO(e,o.verse)},{label:"Omitida",content:"$Rúbrica.$ Si no se canta, el Aleluya o el versículo antes del Evangelio puede omitirse según la Instrucción General del Misal Romano."}],!0)}function Jm(e,o,a){const s=[];return s.push(Za("Antífona de entrada","Antífona de entrada",e),de("Señal de la cruz",`$Sacerdote.$ En el nombre del Padre, y del Hijo, y del Espíritu Santo.

$Pueblo.$ Amén.`,!0),Je("Saludo inicial",[{label:"El Señor esté",content:`$Sacerdote.$ El Señor esté con vosotros.

$Pueblo.$ Y con tu espíritu.`},{label:"La gracia",content:`$Sacerdote.$ La gracia de nuestro Señor Jesucristo, el amor del Padre y la comunión del Espíritu Santo estén con todos vosotros.

$Pueblo.$ Y con tu espíritu.`},{label:"Gracia y paz",content:`$Sacerdote.$ La gracia y la paz de Dios, nuestro Padre, y de Jesucristo, el Señor, estén con todos vosotros.

$Pueblo.$ Y con tu espíritu.`},{label:"Dirige corazones",content:`$Sacerdote.$ El Señor, que dirige nuestros corazones para que amemos a Dios, esté con todos vosotros.

$Pueblo.$ Y con tu espíritu.`},{label:"La paz",content:`$Sacerdote.$ La paz, la caridad y la fe, de parte de Dios Padre, y de Jesucristo, el Señor, estén con todos vosotros.

$Pueblo.$ Y con tu espíritu.`},{label:"Dios esperanza",content:`$Sacerdote.$ El Dios de la esperanza, que por la acción del Espíritu Santo nos colma con su alegría y con su paz, permanezca siempre con todos vosotros.

$Pueblo.$ Y con tu espíritu.`},{label:"Alegría y paz",content:`$Sacerdote.$ Queridos hermanos: Que Dios os llene de alegría y de paz en la fe, y que el Espíritu Santo esté siempre con vosotros.

$Pueblo.$ Y con tu espíritu.`},{label:"Obispo",content:`$Obispo.$ La paz esté con vosotros.

$Pueblo.$ Y con tu espíritu.`}],!0),Je("Monición inicial",[{label:"Omitida",content:"$Rúbrica.$ Si no se hace monición inicial, se continúa directamente con el acto penitencial."},{label:"Breve",content:`$Rúbrica.$ Si se hace una monición inicial, se usa una monición breve preparada para ${kI(e)}.`}],!0)),uu(e)&&s.push(...NI(e)),ba(e)||Rm(e)||uu(e)||(Eo(s,e,o,"penitencial"),s.push(Je("Acto penitencial y Señor, ten piedad",[{label:"Invocaciones",content:SO},{label:"Luz del mundo",content:bO},{label:"Camino",content:vO},{label:"Plenitud",content:yO},{label:"No condenar",content:hO},{label:"Buscar perdido",content:EO},{label:"Pedro",content:AO},{label:"Defensor",content:PO},{label:"Yo confieso",content:An()},{label:"Humildes",content:An(mO)},{label:"Cristo justo",content:An(pO)},{label:"Perdón",content:An(fO)},{label:"Ten misericordia",content:`$Sacerdote.$ Señor, ten misericordia de nosotros.

$Pueblo.$ Porque hemos pecado contra ti.

$Sacerdote.$ Muéstranos, Señor, tu misericordia.

$Pueblo.$ Y danos tu salvación.

$Sacerdote.$ Dios todopoderoso tenga misericordia de nosotros, perdone nuestros pecados y nos lleve a la vida eterna.

$Pueblo.$ Amén.

`+zm},{label:"Renuncias",content:qO},{label:"Aspersión I",content:cq},{label:"Aspersión II",content:uq},{label:"Aspersión pascual",content:dq}],!0))),a&&(Eo(s,e,o,"gloria"),s.push(de("Gloria",sP,!0))),s.push(Za("Oración colecta","Colecta",e,"$Sacerdote.$ Oremos.")),s}function LO(e){const o=fo(e),a=e.celebration?.trim()||"esta celebración";if(Dm(e))return $m();const s={label:"Libre",content:`$Sacerdote.$ Oremos, hermanos, al Señor, que conoce las necesidades de su Iglesia y del mundo entero.

$Lector/diácono.$ Por la Iglesia, para que sea fiel al Evangelio y anuncie a todos la alegría de la salvación.

$Pueblo.$ Te rogamos, óyenos.

$Lector/diácono.$ Por los gobernantes y responsables públicos, para que trabajen por la justicia, la paz y el bien común.

$Pueblo.$ Te rogamos, óyenos.

$Lector/diácono.$ Por los pobres, los enfermos y cuantos sufren, para que reciban consuelo, ayuda y esperanza.

$Pueblo.$ Te rogamos, óyenos.

$Lector/diácono.$ Por quienes celebramos ${a}, para que esta Eucaristía renueve nuestra fe, nuestra esperanza y nuestra caridad.

$Pueblo.$ Te rogamos, óyenos.

$Sacerdote.$ Escucha, Padre, las súplicas que te presentamos con confianza y concédenos vivir siempre según tu voluntad. Por Jesucristo, nuestro Señor.`},n={label:"General",content:`$Sacerdote.$ Oremos, hermanos, a Dios Padre todopoderoso, que quiere que todos los hombres se salven y lleguen al conocimiento de la verdad.

$Lector/diácono.$ Por la santa Iglesia, para que anuncie con fidelidad el Evangelio y sea signo de unidad entre todos los pueblos.

$Pueblo.$ Te rogamos, óyenos.

$Lector/diácono.$ Por el papa, los obispos, los presbíteros y los diáconos, para que sirvan al pueblo de Dios con humildad y celo apostólico.

$Pueblo.$ Te rogamos, óyenos.

$Lector/diácono.$ Por los gobernantes y por cuantos tienen responsabilidades públicas, para que busquen la justicia, la paz y el bien común.

$Pueblo.$ Te rogamos, óyenos.

$Lector/diácono.$ Por los pobres, los enfermos, los migrantes, los perseguidos y cuantos sufren, para que encuentren consuelo, ayuda y esperanza.

$Pueblo.$ Te rogamos, óyenos.

$Lector/diácono.$ Por nuestra comunidad, para que escuche la Palabra, celebre dignamente los misterios santos y viva en caridad fraterna.

$Pueblo.$ Te rogamos, óyenos.

$Sacerdote.$ Escucha, Padre, las súplicas que tu pueblo te presenta con fe, y concédenos lo que más conviene a nuestra salvación. Por Jesucristo, nuestro Señor.`},r={label:"Mártires",content:`$Sacerdote.$ Presentemos nuestras súplicas al Señor, que fortalece a sus testigos y sostiene a su Iglesia en la prueba.

$Lector/diácono.$ Por la Iglesia perseguida y por quienes dan testimonio de Cristo con su vida, para que no les falte la fuerza del Espíritu Santo.

$Pueblo.$ Te rogamos, óyenos.

$Lector/diácono.$ Por quienes celebramos ${a}, para que aprendamos a confesar a Cristo con obras y palabras.

$Pueblo.$ Te rogamos, óyenos.

$Lector/diácono.$ Por quienes sufren violencia, injusticia o desprecio por causa del Evangelio, para que encuentren en Dios consuelo y libertad.

$Pueblo.$ Te rogamos, óyenos.

$Lector/diácono.$ Por nuestra comunidad, para que sea fiel en las pruebas pequeñas y grandes.

$Pueblo.$ Te rogamos, óyenos.

$Sacerdote.$ Acoge, Señor, la oración de tu pueblo y haznos firmes en la fe. Por Jesucristo, nuestro Señor.`},i={label:"Adviento",content:`$Sacerdote.$ En la esperanza de la venida del Señor, presentemos al Padre nuestras súplicas.

$Lector/diácono.$ Por la Iglesia, para que despierte en todos los pueblos el deseo de acoger a Cristo, luz de las naciones.

$Pueblo.$ Ven, Señor Jesús.

$Lector/diácono.$ Por los que gobiernan las naciones, para que preparen caminos de justicia, reconciliación y paz.

$Pueblo.$ Ven, Señor Jesús.

$Lector/diácono.$ Por los que viven en soledad, pobreza o desaliento, para que el Señor esté cerca de ellos y nosotros sepamos acompañarlos.

$Pueblo.$ Ven, Señor Jesús.

$Lector/diácono.$ Por nuestra comunidad, para que espere al Señor con vigilancia, conversión y alegría.

$Pueblo.$ Ven, Señor Jesús.

$Sacerdote.$ Escucha, Padre, la oración de tu Iglesia que aguarda la manifestación de tu Hijo. Él vive y reina por los siglos de los siglos.`},t={label:"Navidad",content:`$Sacerdote.$ Al celebrar el nacimiento del Salvador, elevemos al Padre nuestra oración por toda la humanidad.

$Lector/diácono.$ Por la Iglesia, para que anuncie con gozo que el Verbo se ha hecho carne y habita entre nosotros.

$Pueblo.$ Escúchanos, Señor.

$Lector/diácono.$ Por las familias, para que el nacimiento de Cristo renueve en ellas la paz, la ternura y la fe.

$Pueblo.$ Escúchanos, Señor.

$Lector/diácono.$ Por los niños, los ancianos, los enfermos y cuantos no tienen hogar, para que sean acogidos con amor y dignidad.

$Pueblo.$ Escúchanos, Señor.

$Lector/diácono.$ Por nosotros, para que reconozcamos al Señor en los pequeños y sencillos.

$Pueblo.$ Escúchanos, Señor.

$Sacerdote.$ Dios y Padre nuestro, que nos has dado a tu Hijo como Salvador, escucha nuestras súplicas y llénanos de tu paz. Por Jesucristo, nuestro Señor.`},l={label:"Cuaresma",content:`$Sacerdote.$ En este tiempo de conversión, pidamos al Señor un corazón nuevo y un espíritu firme.

$Lector/diácono.$ Por la Iglesia, para que viva la Cuaresma en escucha de la Palabra, oración, penitencia y caridad.

$Pueblo.$ Señor, ten piedad.

$Lector/diácono.$ Por los catecúmenos y por quienes se preparan para recibir los sacramentos, para que avancen con alegría hacia la vida nueva.

$Pueblo.$ Señor, ten piedad.

$Lector/diácono.$ Por los pecadores, los alejados y los que han perdido la esperanza, para que experimenten la misericordia de Dios.

$Pueblo.$ Señor, ten piedad.

$Lector/diácono.$ Por nosotros, para que el ayuno, la limosna y la oración nos conviertan de verdad al Evangelio.

$Pueblo.$ Señor, ten piedad.

$Sacerdote.$ Dios misericordioso, acoge nuestras súplicas y guíanos por el camino de la conversión. Por Jesucristo, nuestro Señor.`},u={label:"Pascua",content:`$Sacerdote.$ Con la alegría de Cristo resucitado, oremos al Padre que nos ha dado vida nueva.

$Lector/diácono.$ Por la Iglesia, para que anuncie con valentía la victoria de Cristo sobre el pecado y la muerte.

$Pueblo.$ Cristo resucitado, escúchanos.

$Lector/diácono.$ Por los recién bautizados y por todos los cristianos, para que vivamos como hijos de la luz.

$Pueblo.$ Cristo resucitado, escúchanos.

$Lector/diácono.$ Por quienes sufren guerras, enfermedad, duelo o injusticia, para que la esperanza pascual sostenga sus vidas.

$Pueblo.$ Cristo resucitado, escúchanos.

$Lector/diácono.$ Por nuestra comunidad, para que sea testigo de la resurrección con obras de caridad y unidad.

$Pueblo.$ Cristo resucitado, escúchanos.

$Sacerdote.$ Padre de misericordia, que resucitaste a tu Hijo de entre los muertos, escucha a tu pueblo y danos la vida de Cristo. Él vive y reina por los siglos de los siglos.`},c={label:"Apóstoles",content:`$Sacerdote.$ Unidos a la fe apostólica de la Iglesia, presentemos al Señor nuestras súplicas.

$Lector/diácono.$ Por la Iglesia, edificada sobre el fundamento de los apóstoles, para que conserve íntegra la fe recibida.

$Pueblo.$ Te rogamos, óyenos.

$Lector/diácono.$ Por los misioneros y evangelizadores, para que anuncien a Cristo con palabras verdaderas y vida santa.

$Pueblo.$ Te rogamos, óyenos.

$Lector/diácono.$ Por quienes celebramos ${a}, para que recibamos nuevo ardor apostólico.

$Pueblo.$ Te rogamos, óyenos.

$Lector/diácono.$ Por nuestra comunidad, para que sea perseverante en la enseñanza de los apóstoles, la comunión, la fracción del pan y las oraciones.

$Pueblo.$ Te rogamos, óyenos.

$Sacerdote.$ Señor, que guías a tu Iglesia por el testimonio de los apóstoles, escucha nuestra oración. Por Jesucristo, nuestro Señor.`},m={label:"Santos",content:`$Sacerdote.$ Al celebrar ${a}, pidamos al Señor que haga fecunda en nosotros la santidad de su Iglesia.

$Lector/diácono.$ Por la Iglesia, para que resplandezca en ella la santidad de Cristo.

$Pueblo.$ Te rogamos, óyenos.

$Lector/diácono.$ Por quienes tienen responsabilidades pastorales, educativas o familiares, para que guíen a otros con sabiduría y caridad.

$Pueblo.$ Te rogamos, óyenos.

$Lector/diácono.$ Por los pobres y los que sufren, para que encuentren en los cristianos una ayuda concreta y fraterna.

$Pueblo.$ Te rogamos, óyenos.

$Lector/diácono.$ Por nosotros, para que sigamos a Cristo con fidelidad en las tareas ordinarias de cada día.

$Pueblo.$ Te rogamos, óyenos.

$Sacerdote.$ Señor, fuente de toda santidad, escucha nuestras súplicas y haznos crecer en tu amor. Por Jesucristo, nuestro Señor.`},f=[n];o.includes("advent")?f.unshift(i):o.includes("christmas")||o.includes("navidad")||o.includes("epifania")||o.includes("bautismo")?f.unshift(t):o.includes("lent")||o.includes("cuaresma")||o.includes("ramos")?f.unshift(l):o.includes("easter")||o.includes("pascua")||o.includes("ascension")||o.includes("pentecost")?f.unshift(u):o.includes("apostol")||o.includes("evangelista")?f.unshift(c):o.includes("martir")||o.includes("martyr")?f.unshift(r):(e.rank?.toUpperCase()==="SOLEMNITY"||e.rank?.toUpperCase()==="FEAST")&&f.unshift(m),f.push(r,c,i,t,l,u,m,s);const y=f.filter((O,I,_)=>_.findIndex(V=>V.label===O.label)===I);return Je("Oración universal",y,!0)}function jm(e,o,a){const s=[de("Homilía",`$Rúbrica.$ Homilía.

$Rúbrica.$ Puede guardarse un momento de silencio.`,!0)];return Hn(e)?(s.push($I()),s):(Rm(e)&&s.push(RI()),ba(e)&&s.push(DI()),o&&(a&&Eo(s,e,a,"credo"),s.push(Je("Profesión de fe",[{label:"Niceno",content:nP},{label:"Apostólico",content:rP},{label:"Bautismal",content:pP}],!0))),s.push(LO(e)),s)}function xm(e,o){const a=[];return Hn(e)&&a.push(de("Procesión de los óleos y de las ofrendas",SI,!0)),Eo(a,e,o,"ofertorio"),a.push(Je("Presentación de los dones",[{label:"En voz alta",content:dP},{label:"Con canto",content:mP}],!0),Je("Orad, hermanos",[{label:"Mío y vuestro",content:`$Sacerdote.$ Orad, hermanos, para que este sacrificio, mío y vuestro, sea agradable a Dios, Padre todopoderoso.

${Br}`},{label:"Toda la Iglesia",content:`$Sacerdote.$ En el momento de ofrecer el sacrificio de toda la Iglesia, oremos a Dios, Padre todopoderoso.

${Br}`},{label:"Gozos y fatigas",content:`$Sacerdote.$ Orad, hermanos, para que, llevando al altar los gozos y las fatigas de cada día, nos dispongamos a ofrecer el sacrificio agradable a Dios, Padre todopoderoso.

${Br}`}],!0),Za("Oración sobre las ofrendas","Sobre las ofrendas",e),Je("Monición a la plegaria eucarística",[{label:"Omitida",content:"$Rúbrica.$ Si no se hace monición, el sacerdote inicia directamente el diálogo del prefacio."},{label:"Breve",content:`$Rúbrica.$ Si se hace una monición antes de la plegaria eucarística, se usa una monición breve preparada para esta celebración.

$Rúbrica.$ No se canta de fondo durante las oraciones presidenciales.`}],!0),Je("Prefacio",dO(e),!0),de("Diálogo del prefacio",`$Sacerdote.$ El Señor esté con vosotros.

$Pueblo.$ Y con tu espíritu.

$Sacerdote.$ Levantemos el corazón.

$Pueblo.$ Lo tenemos levantado hacia el Señor.

$Sacerdote.$ Demos gracias al Señor, nuestro Dios.

$Pueblo.$ Es justo y necesario.`,!0)),Eo(a,e,o,"santo"),a.push(de("Santo",iP,!0)),a.push(Je("Plegaria eucarística",[...KI(e),...eO(e),...nO(e),{label:"IV",content:Oq},{label:"Reconciliación I",content:Rq},{label:"Reconciliación II",content:Lq},{label:"Diversas circunstancias",content:jq}],!0)),Eo(a,e,o,"memorial"),a.push(Je("Monición y aclamación memorial",[{label:"Sacramento / Anunciamos",content:`$Sacerdote.$ Este es el Sacramento de nuestra fe.

$Pueblo.$ Anunciamos tu muerte, proclamamos tu resurrección. ¡Ven, Señor Jesús!`},{label:"Misterio / Anunciamos",content:`$Sacerdote.$ Este es el Misterio de la fe.

$Pueblo.$ Anunciamos tu muerte, proclamamos tu resurrección. ¡Ven, Señor Jesús!`},{label:"Aclamemos / Cada vez",content:`$Sacerdote.$ Aclamemos el Misterio de la fe.

$Pueblo.$ Cada vez que comemos de este pan y bebemos de este cáliz, anunciamos tu muerte, Señor, hasta que vuelvas.`},{label:"Cristo nos redimió / Cada vez",content:`$Sacerdote.$ Este es el Misterio de nuestra fe. Cristo nos redimió.

$Pueblo.$ Cada vez que comemos de este pan y bebemos de este cáliz, anunciamos tu muerte, Señor, hasta que vuelvas.`},{label:"Cristo se entregó / Salvador",content:`$Sacerdote.$ Este es el Misterio de la fe. Cristo se entregó por nosotros.

$Pueblo.$ Sálvanos, Salvador del mundo, que nos has liberado por tu cruz y resurrección.`},{label:"Este es / Por tu cruz",content:`$Sacerdote.$ Este es el Misterio de la fe.

$Pueblo.$ Por tu cruz y resurrección nos has salvado, Señor.`},{label:"Salvador",content:`$Sacerdote.$ Este es el Misterio de la fe.

$Pueblo.$ Sálvanos, Salvador del mundo, que nos has liberado por tu cruz y resurrección.`}],!0)),a.push(Je("Continuación de la plegaria eucarística",[{label:"I",content:hq},...oO(e),...rO(e),{label:"IV",content:Cq},{label:"Reconciliación I",content:$q},{label:"Reconciliación II",content:Mq},{label:"Diversas I - unidad",content:xq},{label:"Diversas II - salvación",content:Uq},{label:"Diversas III - camino",content:Hq},{label:"Diversas IV - caridad",content:Vq}],!0)),Hn(e)&&a.push(TI()),Eo(a,e,o,"amen"),a.push(Je("Doxología final y gran Amén",[{label:"Amén final",content:`$Sacerdote.$ Por Cristo, con él y en él, a ti, Dios Padre omnipotente, en la unidad del Espíritu Santo, todo honor y toda gloria por los siglos de los siglos.

$Pueblo.$ Amén.`},{label:"Amén intercalado",content:`$Sacerdote.$ Por Cristo, con él y en él.

$Coro/pueblo.$ Amén.

$Sacerdote.$ A ti, Dios Padre omnipotente, en la unidad del Espíritu Santo.

$Coro/pueblo.$ Amén.

$Sacerdote.$ Todo honor y toda gloria por los siglos de los siglos.

$Coro/pueblo.$ Amén.

$Rúbrica.$ Usar sólo si la musicalización está aprobada y el sacerdote mantiene íntegra la doxología que le corresponde.`}],!0)),a}function Um(e,o){const a=[];return Eo(a,e,o,"padrenuestro"),a.push(Je("Padrenuestro",[{label:"Fieles",content:["$Sacerdote.$ Fieles a la recomendación del Salvador y siguiendo su divina enseñanza, nos atrevemos a decir:",Oa(e.lordPrayerLanguage)].join(`

`)},{label:"Hijos de Dios",content:["$Sacerdote.$ Llenos de alegría por ser hijos de Dios, digamos confiadamente la oración que Cristo nos enseñó:",Oa(e.lordPrayerLanguage)].join(`

`)},{label:"Amor de Dios",content:["$Sacerdote.$ El amor de Dios ha sido derramado en nuestros corazones con el Espíritu Santo que se nos ha dado; digamos con fe y esperanza:",Oa(e.lordPrayerLanguage)].join(`

`)},{label:"Banquete",content:["$Sacerdote.$ Antes de participar en el banquete de la Eucaristía, signo de reconciliación y vínculo de unión fraterna, oremos juntos como el Señor nos ha enseñado:",Oa(e.lordPrayerLanguage)].join(`

`)}]),de("Embolismo",tP,!0),de("Rito de la paz",lP,!0)),Eo(a,e,o,"cordero"),a.push(de("Cordero de Dios",`$Todos.$ Cordero de Dios, que quitas el pecado del mundo, ten piedad de nosotros.

$Todos.$ Cordero de Dios, que quitas el pecado del mundo, ten piedad de nosotros.

$Todos.$ Cordero de Dios, que quitas el pecado del mundo, danos la paz.`,!0),Je("Comunión del sacerdote",[{label:"Hijo de Dios vivo",content:cP},{label:"No sea juicio",content:uP}],!0),de("Invitación a la comunión",`$Sacerdote.$ Este es el Cordero de Dios, que quita el pecado del mundo. Dichosos los invitados a la cena del Señor.

$Todos.$ Señor, no soy digno de que entres en mi casa, pero una palabra tuya bastará para sanarme.`,!0)),Eo(a,e,o,"comunion"),a.push(Za("Antífona de comunión","Antífona de comunión",e),de("Comunión de los fieles",`$Sacerdote/ministro.$ El Cuerpo de Cristo.

$Fiel.$ Amén.`,!0)),Eo(a,e,o,"meditacion"),a.push(Za("Oración después de la comunión","Después de la comunión",e,"$Sacerdote.$ Oremos.")),Hn(e)&&a.push(...LI()),a}function MO(e){const o=fo(e),a=e.rank?.toUpperCase(),s=e.date?.getMonth(),n=e.date?.getDate(),r=s===0&&n===1,i=o.includes("easter")||o.includes("pascua"),t=[],l=(u,c)=>{t.push({label:u,content:c})};return(o.includes("epifania")||o.includes("epiphany"))&&l("Solemne Epifanía",tu),(o.includes("pentecost")||o.includes("espiritu santo")||o.includes("holy spirit"))&&l("Solemne Espíritu Santo",lu),(o.includes("adviento")||o.includes("advent"))&&l("Solemne Adviento",nu),(r||o.includes("ano nuevo")||o.includes("new year"))&&l("Solemne Año Nuevo",iu),(o.includes("navidad")||o.includes("christmas")||o.includes("natividad"))&&l("Solemne Navidad",ru),vt(e)&&l("Solemne Cuaresma",au),i&&l("Solemne Pascua",su),(o.includes("maria")||o.includes("mary")||o.includes("virgen")||o.includes("guadalupe"))&&l("Solemne Santa María",cu),(/\bsan\b/.test(o)||/\bsanta\b/.test(o)||/\bsanto\b/.test(o)||/\bsantos\b/.test(o)||o.includes("saint")||o.includes("martir")||o.includes("martyr")||o.includes("apostol")||o.includes("apostle")||o.includes("evangelist"))&&l("Solemne santo",ou),a==="SUNDAY"&&(o.includes("ordinary_time")||o.includes("tiempo ordinario"))&&(l("Solemne TO I",Zc),l("Solemne TO II",eu)),t.push({label:"Simple",content:`$Sacerdote.$ El Señor esté con vosotros.

$Pueblo.$ Y con tu espíritu.

$Sacerdote.$ La bendición de Dios todopoderoso, Padre, Hijo y Espíritu Santo, descienda sobre vosotros.

$Pueblo.$ Amén.`},{label:"Solemne Adviento",content:nu},{label:"Solemne Navidad",content:ru},{label:"Solemne Año Nuevo",content:iu},{label:"Solemne Epifanía",content:tu},{label:"Solemne Cuaresma",content:au},{label:"Solemne Pascua",content:su},{label:"Solemne Espíritu Santo",content:lu},{label:"Solemne Santa María",content:cu},{label:"Solemne TO I",content:Zc},{label:"Solemne TO II",content:eu},{label:"Solemne santo",content:ou},{label:"Sobre el pueblo I",content:wq},{label:"Sobre el pueblo II",content:Fq},{label:"Sobre el pueblo III",content:kq},{label:"Sobre santos",content:Bq},{label:"Sobre pueblo Cuaresma I domingo",content:Yq},{label:"Sobre pueblo Cuaresma I lunes",content:Gq},{label:"Sobre pueblo Cuaresma I martes",content:Qq},{label:"Sobre pueblo Cuaresma I miércoles",content:Wq},...Kq),t.filter((u,c,m)=>m.findIndex(f=>f.label===u.label)===c)}function Hm(e,o){const a=[{label:"Podéis ir",content:`$Sacerdote/diácono.$ Podéis ir en paz.

$Pueblo.$ Demos gracias a Dios.`},{label:"Anunciad",content:`$Sacerdote/diácono.$ Anunciad a todos la alegría del Señor resucitado. Podéis ir en paz.

$Pueblo.$ Demos gracias a Dios.`},{label:"Glorificad",content:`$Sacerdote/diácono.$ Glorificad al Señor con vuestra vida. Podéis ir en paz.

$Pueblo.$ Demos gracias a Dios.`},{label:"En el nombre",content:`$Sacerdote/diácono.$ En el nombre del Señor, podéis ir en paz.

$Pueblo.$ Demos gracias a Dios.`}];qI(e)&&a.unshift({label:"Aleluya",content:`$Sacerdote/diácono.$ Podéis ir en paz, aleluya, aleluya.

$Pueblo.$ Demos gracias a Dios, aleluya, aleluya.`});const s=[Je("Avisos",[{label:"Omitidos",content:"$Rúbrica.$ Si no hay avisos necesarios, se continúa con la bendición."},{label:"Breves",content:"$Rúbrica.$ Se dan, si procede, los avisos necesarios."}],!0),Za("Oración sobre el pueblo","Oración sobre el pueblo",e,"$Diácono/sacerdote.$ Inclinaos para recibir la bendición.","$Pueblo.$ Amén.",""),Je("Bendición",MO(e),!0),Je("Despedida",a,!0),de("Veneración del altar","$Sacerdote y ministros.$ Veneran el altar y se retiran.",!0)];return Eo(s,e,o,"final"),s}let Qr;async function en(){return Qr??=te(()=>import("./breviarium-ikHKEKn4.js"),[],import.meta.url).then(e=>e.default).catch(e=>{throw Qr=void 0,e}),Qr}const NO=new Set(["laudes","vesperae","evangelium"]),Vm="__optionInfo",Et="__optionLabel",Wr=new Map,_O=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],zO={monday:"Lunes",tuesday:"Martes",wednesday:"Miércoles",thursday:"Jueves",friday:"Viernes",saturday:"Sábado",sunday:"Domingo"},wm={charles_lwanga_and_companions_martyrs:"Santos Carlos Luanga y compañeros, mártires",justin_martyr:"San Justino, mártir",most_holy_trinity:"Santísima Trinidad",most_holy_body_and_blood_of_christ:"Corpus Christi",most_sacred_heart_of_jesus:"Sagrado Corazón de Jesús",nativity_of_john_the_baptist:"Natividad de san Juan Bautista",our_lord_jesus_christ_king_of_the_universe:"Nuestro Señor Jesucristo, Rey del Universo",passion_of_saint_john_the_baptist:"Martirio de San Juan Bautista"},Fm={agatha:"Águeda",agnes:"Inés",alphonsus:"Alfonso",ambrose:"Ambrosio",andrew:"Andrés",anthony:"Antonio",augustine:"Agustín",barnabas:"Bernabé",bartholomew:"Bartolomé",basil:"Basilio",benedict:"Benito",bonaventure:"Buenaventura",boniface:"Bonifacio",catherine:"Catalina",charles:"Carlos",christ:"Cristo",dominic:"Domingo",francis:"Francisco",gregory:"Gregorio",ignatius:"Ignacio",irenaeus:"Ireneo",isidore:"Isidoro",james:"Santiago",jerome:"Jerónimo",joachim:"Joaquín",john:"Juan",joseph:"José",justin:"Justino",lawrence:"Lorenzo",lord:"Señor",luke:"Lucas",mark:"Marcos",mary:"María",matthew:"Mateo",michael:"Miguel",paul:"Pablo",peter:"Pedro",philip:"Felipe",pius:"Pío",thomas:"Tomás"},km={abbot:"abad",apostle:"apóstol",apostles:"apóstoles",bishop:"obispo",bishops:"obispos",companions:"compañeros",deacon:"diácono",doctor:"doctor",evangelist:"evangelista",martyr:"mártir",martyrs:"mártires",pope:"papa",priest:"presbítero",priests:"presbíteros",religious:"religioso",virgin:"virgen",virgins:"vírgenes"},Kr=new Map([["FIRSTLECTURE",10],["CELEBRATION_FIRSTLECTURE",10],["PSALM",20],["CELEBRATION_PSALM",20],["SECONDLECTURE",30],["CELEBRATION_SECONDLECTURE",30],["SECONDPSALM",40],["THIRDLECTURE",50],["THIRDPSALM",60],["FOURTHLECTURE",70],["FOURTHPSALM",80],["FIFTHLECTURE",90],["FIFTHPSALM",100],["SIXTHLECTURE",110],["SIXTHPSALM",120],["SEVENTHLECTURE",130],["SEVENTHPSALM",140],["EIGHTHLECTURE",150],["ACCLAMATION",160],["CELEBRATION_ACCLAMATION",160],["GOSPEL",170],["CELEBRATION_GOSPEL",170]]),JO={FIRSTLECTURE:"Primera lectura",CELEBRATION_FIRSTLECTURE:"Primera lectura",PSALM:"Salmo responsorial",CELEBRATION_PSALM:"Salmo responsorial",SECONDLECTURE:"Segunda lectura",CELEBRATION_SECONDLECTURE:"Segunda lectura",SECONDPSALM:"Salmo responsorial II",THIRDLECTURE:"Tercera lectura",THIRDPSALM:"Salmo responsorial III",FOURTHLECTURE:"Cuarta lectura",FOURTHPSALM:"Salmo responsorial IV",FIFTHLECTURE:"Quinta lectura",FIFTHPSALM:"Salmo responsorial V",SIXTHLECTURE:"Sexta lectura",SIXTHPSALM:"Salmo responsorial VI",SEVENTHLECTURE:"Séptima lectura",SEVENTHPSALM:"Salmo responsorial VII",EIGHTHLECTURE:"Epístola",ACCLAMATION:"Aclamación antes del Evangelio",CELEBRATION_ACCLAMATION:"Aclamación antes del Evangelio",GOSPEL:"Evangelio",CELEBRATION_GOSPEL:"Evangelio"},fu={invitatorium:"Invitatorio",officium:"Oficio",laudes:"Laudes",tertia:"Tercia",sexta:"Sexta",nona:"Nona",vesperae:"Vísperas",completorium:"Completas",evangelium:"Misa"};function jO(e=new Date){const o=e.getHours()*60+e.getMinutes();return o<210?"officium":o<450?"laudes":o<630?"tertia":o<810?"sexta":o<990?"nona":o<1170?"vesperae":o<1410?"completorium":"officium"}async function va(e,o){const a=await en(),s=new a(e),n=await s.getLiturgyInformation(e);let r;switch(o){case"invitatorium":{const[l,u]=await Promise.all([s.getInvitatorium(e),s.getInvitatoriumPsalms()]);r=[{...l,psalmTitle:u[0]?.title,psalm:u[0]?.psalm,__invitatoryPsalms:u}];break}case"officium":r=await s.getOfficium(e);break;case"laudes":{const[l,u,c]=await Promise.all([s.getLaudes(e),s.getInvitatorium(e),s.getInvitatoriumPsalms()]);r=l?.map(m=>({...m,__invitatoryAntiphon:u?.val,__invitatoryPsalm:c[0]?.psalm,__invitatoryPsalmTitle:c[0]?.title,__invitatoryPsalms:c}));break}case"tertia":r=await s.getTertia(e);break;case"sexta":r=await s.getSexta(e);break;case"nona":r=await s.getNona(e);break;case"vesperae":r=await s.getVesperae(e);break;case"completorium":r=await s.getCompletorium(e);break;case"evangelium":r=PC(await s.getLectures(e),e,n);break}const t=(NO.has(o)?r??[]:r?[r]:[]).filter(HO);return{info:n,options:t.length>1?t.map(l=>xO(l,n)):t}}function xO(e,o){const a=typeof e.id=="string"?e.id:"";return!G(o.celebration)||!a||wm[a]||dp(a)?e:{...e,[Et]:o.celebration}}async function UO(e,o){const a=await YO(e,o);if(a)return a;let s;try{s=await va(e,o)}catch(n){const r=await bu(e,o);if(r)return r;throw n}if(!s.options.length){const n=await bu(e,o);if(n)return n}return await KO(e,o,s)??await XO(e,o,s)??s}function gu(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function es(e,o){return new Date(e.getFullYear(),e.getMonth(),e.getDate()+o)}function os(e,o){return gu(e)===gu(o)}function on(e){const o=e%19,a=Math.floor(e/100),s=e%100,n=Math.floor(a/4),r=a%4,i=Math.floor((a+8)/25),t=Math.floor((a-i+1)/3),l=(19*o+a-n-t+15)%30,u=Math.floor(s/4),c=s%4,m=(32+2*r+2*u-l-c)%7,f=Math.floor((o+11*l+22*m)/451),y=Math.floor((l+m-7*f+114)/31),O=(l+m-7*f+114)%31+1;return new Date(e,y-1,O)}function At(e){const o=on(e);return{thursday:es(o,60),sunday:es(o,63)}}function Bm(e){const o=on(e);return{thursday:es(o,39),sunday:es(o,42)}}function HO(e){return typeof e=="object"&&e!==null}function VO(e){const o=e[Vm];return typeof o=="object"&&o!==null?o:void 0}function wO(e){return e?VO(e):void 0}function Ho(e,o,a){return{...e,[Et]:o,[Vm]:a}}function FO(e){return{...e,color:"WHITE",celebration:"Corpus Christi",rank:"SOLEMNITY"}}function Ua(e,o){return{...e,cycle:o??e.cycle}}function Ym(e){const o=e.options[0]?.id;return typeof o=="string"?o:""}function kO(e){const o=e.match(/^ordinary_time_(\d+)_sunday$/);return o?`ordinary_time_${Number(o[1])-1}_thursday`:""}function Gm(e,o){return`ordinary_time_${e}_${_O[o]??""}`}async function Qm(e,o,a){if(!e)return;const s=`${e}::${o}::${a.getFullYear()}`;return Wr.has(s)||Wr.set(s,(async()=>{for(let n=0;n<=10;n+=1){const r=n===0?[a.getFullYear()]:[a.getFullYear()-n,a.getFullYear()+n];for(const i of r)for(let t=0;t<=11;t+=1)for(let l=1;l<=31;l+=1){const u=new Date(i,t,l);if(!(u.getMonth()!==t||os(u,a)))try{const c=await va(u,o);if(Ym(c)===e)return c}catch{continue}}}})()),Wr.get(s)}async function Su(e,o){const{thursday:a,sunday:s}=At(e.getFullYear()),r=await va(o==="evangelium"?s:a,o);return{...r,info:FO(r.info)}}function BO(e){return{...e,celebration:"Ascensión del Señor",rank:"SOLEMNITY"}}async function YO(e,o){const{thursday:a,sunday:s}=Bm(e.getFullYear());if(!os(e,s))return;const n=await va(a,o);if(!n.options.length)return;const r=BO(n.info);return{info:r,options:n.options.map(i=>Ho(i,"Ascensión del Señor",r))}}function Pt(e){const o=e?.match(/(\d+)[.ºª]?\s*(?:domingo|semana)\s+del\s+Tiempo\s+Ordinario/i);return o?Number(o[1]):void 0}async function Wm(e){const o=await en();for(const a of[-3,-2,-1,1,2,3]){const s=es(e,a);try{const n=await new o(s).getLiturgyInformation(s),r=Pt(n.celebration);if(n.seasons?.includes("ORDINARY_TIME")&&r)return r}catch{continue}}}function Km(e,o){const a=e.seasons??[],s=o.seasons??[];return a.some(n=>s.includes(n))}async function Xm(e,o,a,s){const n=await en();for(let r=0;r<=10;r+=1){const i=r===0?[e.getFullYear()]:[e.getFullYear()-r,e.getFullYear()+r];for(const t of i)for(let l=0;l<=11;l+=1)for(let u=1;u<=31;u+=1){const c=new Date(t,l,u);if(!(c.getMonth()!==l||os(c,e)||c.getDay()!==e.getDay()))try{const m=await new n(c).getLiturgyInformation(c);if(m.rank!=="WEEKDAY"||!Km(a,m)||Pt(m.celebration)!==s)continue;const f=await va(c,o);if(f.options.length)return f}catch{continue}}}}function GO(e){const o=on(e.getFullYear());return Math.round((e.getTime()-o.getTime())/(1440*60*1e3))}async function QO(e,o,a){const s=GO(e);for(let n=1;n<=10;n+=1)for(const r of[e.getFullYear()-n,e.getFullYear()+n]){const i=es(on(r),s);if(i.getDay()===e.getDay())try{const t=await en(),l=await new t(i).getLiturgyInformation(i);if(l.rank!=="WEEKDAY"||!Km(a,l))continue;const u=await va(i,o);if(u.options.length)return u}catch{continue}}}async function bu(e,o){const a=await en(),n=await new a(e).getLiturgyInformation(e),r=Pt(n.celebration)??await Wm(e);if(n.seasons?.includes("ORDINARY_TIME")&&r){const t=await Xm(e,o,n,r),l=Gm(r,e.getDay()),u=t??await Qm(l,o,e);return u?.options.length?{info:Ua(u.info,n.cycle),options:u.options.map(c=>Ho(c,"Ordinario",Ua(u.info,n.cycle)))}:void 0}const i=n.seasons?.includes("EASTER_TIME")?await QO(e,o,n):void 0;if(i?.options.length)return{info:Ua(i.info,n.cycle),options:i.options.map(t=>Ho(t,"Feria",Ua(i.info,n.cycle)))}}async function WO(e,o,a){const{sunday:s}=At(e.getFullYear()),n=await va(s,o),r=Ym(n),i=Number(r.match(/^ordinary_time_(\d+)_sunday$/)?.[1]??0),t=i>0?i-1:await Wm(e),l=o==="evangelium"?Gm(t??0,4):kO(r),u=await Qm(l,o,e)??(t?await Xm(e,o,a,t):void 0);if(u)return{...u,info:Ua(u.info,a.cycle)}}async function KO(e,o,a){const{thursday:s,sunday:n}=At(e.getFullYear()),r=os(e,s),i=os(e,n);if(!r&&!i)return;if(r){const u=await WO(e,o,a.info);if(!u?.options.length)return;const c=await Su(e,o);return{info:u.info,options:[...u.options.map(m=>Ho(m,"Normal",u.info)),...c.options.map(m=>Ho(m,"Corpus Christi",c.info))]}}const t=await Su(e,o),l=Ua(a.info,a.info.cycle);return{info:t.info,options:[...t.options.map(u=>Ho(u,"Corpus Christi",t.info)),...a.options.map(u=>Ho(u,"Domingo ordinario",l))]}}async function XO(e,o,a){if(o!=="evangelium"||a.options.length)return;const{thursday:s,sunday:n}=Bm(e.getFullYear());if(!os(e,n))return;const r=await va(s,o);if(r.options.length)return{info:{...r.info,celebration:"Ascensión del Señor",rank:"SOLEMNITY"},options:r.options.map(i=>Ho(i,"Ascensión del Señor",r.info))}}function oe(e,o){const a=e[o];return typeof a=="string"?a:""}function dr(e){return e.replaceAll(`salvación,
lograba por Cristo Jesús`,`salvación,
lograda por Cristo Jesús`)}function $a(e,o){const a=e[o];return Array.isArray(a)?a.filter(s=>typeof s=="string"&&G(s)):[]}function vu(e){const o=e.match(/^\s*(?:\$?([VR])\.\s*\$?|\$?([\u2123\u211F])\.\s*\$?)/i);if(!o)return;const a=o[1]?.toUpperCase()??o[2];return a==="V"||a==="℣"?"V":"R"}function Zm(e){return e.replace(/^\s*(?:\$?[VR]\.\s*\$?|\$?[\u2123\u211F]\.\s*\$?)\s*/i,"").trim()}function Xr(e,o){return`$${o==="V"?"℣":"℟"}. $${Zm(e)}`}function yu(e){return e.length!==3?e:[Xr(e[0],"R"),Xr(e[1],"V"),Xr(e[2],"R")]}function ZO(e){const o=e.trim(),a=o.replace(/[.;:!?]+$/g,"").trim();return[...new Set([o,a].filter(G))]}function eC(e,o){const a=e.toLocaleLowerCase("es");for(const s of ZO(o)){const n=a.lastIndexOf(s.toLocaleLowerCase("es"));if(n>0)return n}return-1}function Ba(e){const o=e.findIndex(c=>vu(c)==="V"),s=e.map((c,m)=>vu(c)==="R"?m:-1).filter(c=>c>=0)[1];if(o<0||s===void 0||e[o].includes("[[RESPONSORY_SPLIT]]"))return e;const n=e[o],r=n.match(/^\s*(?:\$?V\.\s*\$?|\$?\u2123\.\s*\$?)\s*/i)?.[0]??"",i=n.slice(r.length),t=eC(i,Zm(e[s]));if(t<=0)return e;const l=i.slice(0,t).trimEnd(),u=i.slice(t).trimStart();return e.map((c,m)=>m===o?`${r}${l} [[RESPONSORY_SPLIT]] ${u}`:c)}function qt(e){return Array.isArray(e)?e.filter(o=>typeof o=="object"&&o!==null):[]}function It(e){return qt(e.__invitatoryPsalms).map(o=>({title:oe(o,"title"),psalm:oe(o,"psalm")})).filter(o=>G(o.title)&&G(o.psalm))}function Vn(e){const o=e.match(/Salmo\s+(\d+)/i);return o?Number(o[1]):void 0}function oC(e,o){const a=Vn(e);return a?`Salmo ${a}`:`Salmo ${o+1}`}function xe(e){return oe(e,"type").toUpperCase()}function hu(e){return e==="PSALM"||e==="CELEBRATION_PSALM"||e.endsWith("PSALM")}function as(e){return e==="GOSPEL"||e==="CELEBRATION_GOSPEL"}function Zr(e){return e==="ACCLAMATION"||e==="CELEBRATION_ACCLAMATION"}function aC(e){return(e.split(":").pop()?.trim()??"").replace(/^_+|_+$/g,"").trim()}function sC(e,o){const a=aC(e);if(!G(a))return o;const s=`$R.$ ${a}`,n=o.replace(/\s*R\.(?=\s|$)/g,`
${s}`);return[s,n].filter(G).join(`

`)}function nC(e){const a=an(e).match(/^([1-3]?\s*[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+)/)?.[1]?.replace(/\s+/g,"").toLowerCase();return{mt:"Mateo",mc:"Marcos",lc:"Lucas",jn:"Juan"}[a??""]??"Evangelio"}function rC(e){return/^(Mt|Mc|Lc|Jn)\s+1\s*,\s*1\b/i.test(an(e))}function iC(e){const o=an(e);return/^Mt\s+28\b.*\b20\b/i.test(o)||/^Mc\s+16\b.*\b20\b/i.test(o)||/^Lc\s+24\b.*\b53\b/i.test(o)||/^Jn\s+21\b.*\b25\b/i.test(o)}function tC(e){return rC(e)?"Comienzo del santo Evangelio":iC(e)?"Conclusión del santo Evangelio":"Lectura del santo Evangelio"}function lC(e,o){return["$Rúbrica.$ Si el diácono proclama el Evangelio, pide la bendición al sacerdote:","$Diácono.$ Padre, dame tu bendición.","$Sacerdote.$ El Señor esté en tu corazón y en tus labios, para que anuncies dignamente su Evangelio. En el nombre del Padre, y del Hijo + y del Espíritu Santo.","$Diácono.$ Amén.","$Rúbrica.$ Si proclama el sacerdote, dice inclinado ante el altar:","$Sacerdote.$ Purifica mi corazón y mis labios, Dios todopoderoso, para que pueda anunciar dignamente tu santo Evangelio.","$V.$ El Señor esté con vosotros","$R.$ Y con tu espíritu",`$V.$ ${tC(e)} según San ${nC(e)}`,"$R.$ Gloria a ti, Señor",o.trim(),"$V.$ Palabra del Señor","$R.$ Gloria a ti, Señor Jesús","$Sacerdote/diácono.$ Las palabras del Evangelio borren nuestros pecados."].filter(G).join(`

`)}function Ot(){return{title:"Aclamación después del Evangelio",alternatives:[{label:"Verdad",content:`$Coro/pueblo.$ Tu palabra, Señor, es la verdad,
y tu ley nuestra libertad.`},{label:"Lámpara",content:`$Coro/pueblo.$ Tu palabra, Señor,
es lámpara que alumbra nuestros pasos.`},{label:"Permanece",content:`$Coro/pueblo.$ Tu palabra, Señor,
permanece por los siglos.`}],kind:"mass",quiet:!0}}const $i=/^(?:[1-3]\s*)?[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]{1,12}\.?\s*\d/;function an(e){const o=op(e),a=[...o.matchAll(/\$\s*([^$\n\r]+)/g)].map(r=>r[1].trim()).reverse().find(r=>$i.test(r));if(a)return a;const s=mr(o).replace(/\r\n/g,`
`).split(`
`).map(r=>r.trim()).filter(Boolean);return[...s].reverse().find(r=>$i.test(r))??s[0]??""}function cC(e){return an(e).match(/^([1-3]?\s*[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+)/)?.[1]?.replace(/\s+/g,"").toLowerCase()??""}const uC={gen:"libro del Génesis",gn:"libro del Génesis",ex:"libro del Éxodo",lev:"libro del Levítico",lv:"libro del Levítico",num:"libro de los Números",nm:"libro de los Números",dt:"libro del Deuteronomio",jos:"libro de Josué",jue:"libro de los Jueces",jc:"libro de los Jueces",rut:"libro de Rut",rt:"libro de Rut","1sam":"primer libro de Samuel","2sam":"segundo libro de Samuel","1s":"primer libro de Samuel","2s":"segundo libro de Samuel","1re":"primer libro de los Reyes","2re":"segundo libro de los Reyes","1r":"primer libro de los Reyes","2r":"segundo libro de los Reyes","1cron":"primer libro de las Crónicas","2cron":"segundo libro de las Crónicas","1cro":"primer libro de las Crónicas","2cro":"segundo libro de las Crónicas",esd:"libro de Esdras",neh:"libro de Nehemías",ne:"libro de Nehemías",tob:"libro de Tobías",tb:"libro de Tobías",jdt:"libro de Judit",est:"libro de Ester","1m":"primer libro de los Macabeos","2m":"segundo libro de los Macabeos","1mac":"primer libro de los Macabeos","2mac":"segundo libro de los Macabeos","1macabeos":"primer libro de los Macabeos","2macabeos":"segundo libro de los Macabeos",job:"libro de Job",jb:"libro de Job",prov:"libro de los Proverbios",pr:"libro de los Proverbios",qo:"libro del Eclesiastés",ecle:"libro del Eclesiastés",ecles:"libro del Eclesiastés",cant:"Cantar de los Cantares",ct:"Cantar de los Cantares",cnt:"Cantar de los Cantares",sb:"libro de la Sabiduría",si:"libro del Eclesiástico",sir:"libro del Eclesiástico",eclo:"libro del Eclesiástico",is:"libro de Isaías",jr:"libro de Jeremías",jer:"libro de Jeremías",lam:"libro de las Lamentaciones",lm:"libro de las Lamentaciones",bar:"libro de Baruc",ba:"libro de Baruc",ez:"profecía de Ezequiel",dan:"profecía de Daniel",dn:"profecía de Daniel",os:"profecía de Oseas",jl:"profecía de Joel",am:"profecía de Amós",abd:"profecía de Abdías",jon:"profecía de Jonás",miq:"profecía de Miqueas",mi:"profecía de Miqueas",nah:"profecía de Nahún",hab:"profecía de Habacuc",ha:"profecía de Habacuc",sof:"profecía de Sofonías",so:"profecía de Sofonías",ag:"profecía de Ageo",zac:"profecía de Zacarías",za:"profecía de Zacarías",mal:"profecía de Malaquías",ml:"profecía de Malaquías",hech:"libro de los Hechos de los apóstoles",hch:"libro de los Hechos de los apóstoles",rom:"carta del apóstol san Pablo a los Romanos",rm:"carta del apóstol san Pablo a los Romanos","1co":"primera carta del apóstol san Pablo a los Corintios","2co":"segunda carta del apóstol san Pablo a los Corintios","1cor":"primera carta del apóstol san Pablo a los Corintios","2cor":"segunda carta del apóstol san Pablo a los Corintios",gal:"carta del apóstol san Pablo a los Gálatas",ga:"carta del apóstol san Pablo a los Gálatas",ef:"carta del apóstol san Pablo a los Efesios",flp:"carta del apóstol san Pablo a los Filipenses",col:"carta del apóstol san Pablo a los Colosenses","1tes":"primera carta del apóstol san Pablo a los Tesalonicenses","2tes":"segunda carta del apóstol san Pablo a los Tesalonicenses","1ts":"primera carta del apóstol san Pablo a los Tesalonicenses","2ts":"segunda carta del apóstol san Pablo a los Tesalonicenses","1tim":"primera carta del apóstol san Pablo a Timoteo","2tim":"segunda carta del apóstol san Pablo a Timoteo","1tm":"primera carta del apóstol san Pablo a Timoteo","2tm":"segunda carta del apóstol san Pablo a Timoteo",tit:"carta del apóstol san Pablo a Tito",tt:"carta del apóstol san Pablo a Tito","1tit":"carta del apóstol san Pablo a Tito","1tt":"carta del apóstol san Pablo a Tito",flm:"carta del apóstol san Pablo a Filemón",heb:"carta a los Hebreos",hb:"carta a los Hebreos",sant:"carta del apóstol Santiago",st:"carta del apóstol Santiago","1pe":"primera carta del apóstol san Pedro","2pe":"segunda carta del apóstol san Pedro","1p":"primera carta del apóstol san Pedro","2p":"segunda carta del apóstol san Pedro","1jn":"primera carta del apóstol san Juan","2jn":"segunda carta del apóstol san Juan","3jn":"tercera carta del apóstol san Juan",jud:"carta del apóstol san Judas",judas:"carta del apóstol san Judas",ap:"libro del Apocalipsis"};function dC(e){return uC[cC(e)]??""}function mC(e){const o=dC(e);return o?o.startsWith("libro ")||o.startsWith("primer libro ")||o.startsWith("segundo libro ")||o.startsWith("Cantar ")?`Lectura del ${o}`:`Lectura de la ${o}`:""}function mr(e){return e.replace(/_([^_]+)_/g,"$1").replace(/\$([^$]+)\$/g,"$1").replace(/\$/g,"").trim()}function Ct(e){return ep(e)}function ep(e){const a=an(e).replace(/\s*:\s*.*$/s,"").trim().replace(/^(.{4,})\1$/,"$1");return $i.test(a)?a:""}function pC(e){const o=e.trim();return/[.!?]$/.test(o)?o:`${o}.`}function Eu(e){const o=e?.trim()??"",a=o.match(/_([^_]+)_/)?.[1]?.trim();if(a)return a;const s=o.match(/:\s*(.+)$/s)?.[1]?.trim();return s?mr(s):""}function fC(e,o){const a=mC(e),s=ep(e),n=dr(o);return[s?`[[READING_REFERENCE]] ${s}`:"",a?`[[MASS_READING_PROCLAMATION]] ${pC(a)}`:"",n,"$Lector.$ Palabra de Dios.","$Pueblo.$ Te alabamos, Señor."].filter(G).join(`

`)}function gC(e){return Li(e,"lent")?"$Todos.$ Honor y gloria a ti, Señor Jesús.":"$Todos.$ Aleluya."}function SC(e,o,a){return G(o)?o:Eu(e)||Eu(a.massGospelReference)||mr(e)}function bC(e,o,a){const s=[a.celebration,a.rank,...a.seasons??[]].filter(Boolean).join(" ").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase(),n=/secuencia/i.test(e)&&G(o),r=s.includes("pentecost")&&n?"Ven, Espíritu Santo, llena los corazones de tus fieles y enciende en ellos el fuego de tu amor.":SC(e,o,a),i=gC(a);return[i,`$Cantor.$ ${r}`,i].join(`

`)}function Dt(e,o,a){const s=DA(e);return{title:To(e),alternatives:s?s.map(n=>({label:n.title,content:RA(n)})):IA(e,o,a),kind:"mass",quiet:!0}}function vC(e){return e.match(/^\s*\$?\s*((?:en\s+tiempo\s+pascual|tiempo\s+pascual|fuera\s+del\s+tiempo\s+pascual|fuera\s+de\s+pascua|no\s+pascua|si\s+no\s+es\s+pascua|pascua|si\s+es\s+pascua))\s*:/i)?.[1]??""}function yC(e,o){const a=vC(e);return G(a)?$t(a)?ga(o):Tt(a)?!ga(o):!0:!0}function op(e){return e.replace(/^\s*\$?\s*(?:evangelio\s+pascual\s+para\s+el\s+ciclo\s+[ABC]|en\s+el\s+ciclo\s+[ABC])\s*:\s*/i,"").replace(/^\s*\$?\s*(?:en\s+tiempo\s+pascual|tiempo\s+pascual|fuera\s+del\s+tiempo\s+pascual|fuera\s+de\s+pascua|no\s+pascua|si\s+no\s+es\s+pascua|pascua|si\s+es\s+pascua)\s*:\s*/i,"").trim()}function ap(e,o){const a=op(e),s=o.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();return/^Jn\s+11\b/i.test(a)&&s.startsWith("queridos hermanos: este es el mensaje")?"1 Jn 1, 5 - 2, 2: _La sangre de Jesús nos limpia de todo pecado._":/^Sal\s+102\b/i.test(a)&&s.startsWith("en aquel tiempo, tomo la palabra jesus y dijo")?"Mt 11, 25-30: _Has escondido estas cosas a los sabios y entendidos, y se las has revelado a la gente sencilla._":/^1\s*Jn\s+1\b/i.test(a)&&s.startsWith("bendice, alma mia, al senor")?"Sal 102, 1b-2.3-4.8-9.13-14.17-18: _Bendice, alma mía, al Señor._":a}function Gs(e){return e==="FIRSTLECTURE"||e==="CELEBRATION_FIRSTLECTURE"}function Ti(e){return e==="SECONDLECTURE"||e==="CELEBRATION_SECONDLECTURE"}function Rt(e,o){const a=qt(e.lecturas).map((t,l)=>({reading:t,index:l,order:Kr.get(xe(t))??Number.POSITIVE_INFINITY})).filter(({reading:t,order:l})=>Number.isFinite(l)&&(G(oe(t,"ref"))||G(oe(t,"texto")))&&yC(oe(t,"ref"),o)),s=a.some(({reading:t})=>Gs(xe(t))),n=a.filter(({reading:t})=>xe(t).startsWith("CELEBRATION_"));if(n.some(({reading:t})=>Gs(xe(t)))&&n.some(({reading:t})=>as(xe(t))))return n.sort((t,l)=>t.order-l.order||t.index-l.index).map(({reading:t})=>t);const i=new Set(a.filter(({reading:t})=>xe(t).startsWith("CELEBRATION_")).map(({reading:t})=>Kr.get(xe(t))));return a.filter(({reading:t})=>{const l=xe(t),u=Kr.get(l);return l.startsWith("CELEBRATION_")||!i.has(u)}).sort((t,l)=>{const u=!s&&Ti(xe(t.reading))?10:t.order,c=!s&&Ti(xe(l.reading))?10:l.order;return u-c||t.index-l.index}).map(({reading:t})=>t)}function hC(e,o){const a=[],s=o.rank?.toUpperCase();return s&&s!=="WEEKDAY"&&s!=="FERIA"&&a.push("MEMORY"),o.cycle&&a.push(`YEAR_${o.cycle.toUpperCase()}`),a.push(e.getFullYear()%2===0?"EVEN":"ODD"),a.push("ANY","MEMORY"),[...new Set(a)]}const EC={"01-02":[{id:"christmas_time_january_2_local",cycle:"ANY",lecturas:[{type:"ACCLAMATION",ref:"_Aleluya, aleluya, aleluya._",texto:`En muchas ocasiones habló Dios antiguamente a los padres por los profetas.
En esta etapa final, nos ha hablado por el Hijo.`},{type:"FIRSTLECTURE",ref:"1 Jn 2, 22-28: _Lo que habéis oído desde el principio permanezca en vosotros._",texto:`Queridos hermanos:

¿Quién es el mentiroso sino el que niega que Jesús es el Cristo? Ese es el anticristo, el que niega al Padre y al Hijo. Todo el que niega al Hijo tampoco posee al Padre. Quien confiesa al Hijo posee también al Padre.

En cuanto a vosotros, lo que habéis oído desde el principio permanezca en vosotros. Si permanece en vosotros lo que habéis oído desde el principio, también vosotros permaneceréis en el Hijo y en el Padre; y esta es la promesa que él mismo nos hizo: la vida eterna.

Os he escrito esto respecto a los que tratan de engañaros. Y en cuanto a vosotros, la unción que de él habéis recibido permanece en vosotros, y no necesitáis que nadie os enseñe. Pero como su unción os enseña acerca de todas las cosas —y es verdadera y no mentirosa—, según os enseñó, permaneced en él.

Y ahora, hijos, permaneced en él para que, cuando se manifieste, tengamos plena confianza y no quedemos avergonzados lejos de él en su venida.`},{type:"PSALM",ref:"Sal 97, 1bcde. 2-3ab. 3cd-4: _Los confines de la tierra han contemplado la salvación de nuestro Dios._",texto:`Cantad al Señor un cántico nuevo,
porque ha hecho maravillas.
Su diestra le ha dado la victoria,
su santo brazo. R.

El Señor da a conocer su salvación,
revela a las naciones su justicia.
Se acordó de su misericordia y su fidelidad
en favor de la casa de Israel. R.

Los confines de la tierra han contemplado
la salvación de nuestro Dios.
Aclama al Señor, tierra entera;
gritad, vitoread, tocad. R.`},{type:"GOSPEL",ref:"Jn 1, 19-28: _En medio de vosotros hay uno que no conocéis._",texto:`Este es el testimonio de Juan, cuando los judíos enviaron desde Jerusalén sacerdotes y levitas a que le preguntaran:

«¿Tú quién eres?»

Él confesó y no negó; confesó:

«Yo no soy el Mesías».

Le preguntaron:

«Entonces, ¿qué? ¿Eres tú Elías?».

Él dijo:

«No lo soy».

«¿Eres tú el Profeta?».

Respondió:

«No».

Y le dijeron:

«¿Quién eres, para que podamos dar una respuesta a los que nos han enviado? ¿Qué dices de ti mismo?».

Él contestó:

«Yo soy la voz que grita en el desierto: “Allanad el camino del Señor”, como dijo el profeta Isaías».

Entre los enviados había fariseos y le preguntaron:

«Entonces, ¿por qué bautizas si tú no eres el Mesías, ni Elías, ni el Profeta?».

Juan les respondió:

«Yo bautizo con agua; en medio de vosotros hay uno que no conocéis, el que viene detrás de mí, y al que no soy digno de desatar la correa de la sandalia».

Esto pasaba en Betania, en la otra orilla del Jordán, donde Juan estaba bautizando.`}]}]};function AC(e){const o=`${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`;return EC[o]??[]}function Au(e,o){return{...e,color:"WHITE",celebration:o,rank:"SOLEMNITY"}}function Pu(e,o){if(oe(e,"id")!=="holy_thursday")return;const a=qt(e.lecturas),s=a.filter(t=>xe(t).startsWith("CELEBRATION_")),n=a.filter(t=>!xe(t).startsWith("CELEBRATION_")),r=s.some(t=>Gs(xe(t)))&&s.some(t=>as(xe(t))),i=n.some(t=>Gs(xe(t)))&&n.some(t=>as(xe(t)));if(!(!r||!i))return[Ho({...e,id:"holy_thursday_evening_mass",lecturas:s},"Misa vespertina de la Cena del Señor",Au(o,"Misa vespertina de la Cena del Señor")),Ho({...e,id:"holy_thursday_chrism_mass",lecturas:n},"Misa Crismal",Au(o,"Misa Crismal"))]}function PC(e,o,a){const s=(e??[]).filter(r=>Rt(r,a.seasons).length);if(!s.length)return AC(o);const n=hC(o,a);for(let r=0;r<n.length;r+=1){const i=n[r],t=s.filter(c=>oe(c,"cycle").toUpperCase()===i);if(!t.length)continue;const l=t.flatMap(c=>Pu(c,a)??[c]),u=l.length!==t.length?l:t;if(i==="MEMORY"&&a.rank?.toUpperCase()==="MEMORIAL"){const c=n.slice(r+1).map(m=>s.find(f=>oe(f,"cycle").toUpperCase()===m)).find(m=>!!m);if(c)return[...u,c]}return u}return s.flatMap(r=>Pu(r,a)??[r])}function qC(e,o){if(!G(e)||!o)return e;const a=o.trim().toLowerCase();if(!["a","b","c"].includes(a))return e;const s=/^\s*\$?\s*Año\s*([ABC])\s*:\s*\$?\s*(.*)$/i;if(!/(^|\n)\s*\$?\s*Año\s*[ABC]\s*:/i.test(e))return e;const r=e.split(/\r?\n/),i=new Map;let t=null;for(const u of r){const c=u.match(s);if(c){t=c[1].toLowerCase();const m=(c[2]??"").trim();m.length?i.set(t,[m]):i.set(t,[]);continue}if(t){const m=i.get(t);m&&m.push(u)}}const l=i.get(a);return l?.length?l.join(`
`).trim():e}function ga(e){return!!e?.some(o=>{const a=o.toUpperCase();return a.includes("EASTER")||a.includes("PASCHAL")&&!a.includes("TRIDUUM")})}function wn(e,o){return!!e?.some(a=>a.toUpperCase().includes(o))}function IC(e){return wn(e,"PASCHAL_TRIDUUM")}function OC(e){return wn(e,"EASTER_OCTAVE")}function $t(e){return/^(?:si\s+es\s+pascua|pascua|en\s+tiempo\s+pascual|tiempo\s+pascual)$/i.test(e.trim())}function Tt(e){return/^(?:si\s+no\s+es\s+pascua|no\s+pascua|fuera\s+de\s+pascua|fuera\s+del\s+tiempo\s+pascual)$/i.test(e.trim())}function CC(e,o){return!G(e)||!o?.length?e:e.replace(/\s*\$\(\s*((?:fuera\s+del\s+tiempo\s+pascual|fuera\s+de\s+pascua|no\s+pascua|si\s+no\s+es\s+pascua|en\s+tiempo\s+pascual|tiempo\s+pascual|pascua|si\s+es\s+pascua))\s*:\s*\$?\s*([\s\S]*?)\s*\$\)/gi,(a,s,n)=>{if(!(ga(o)&&$t(s)||!ga(o)&&Tt(s)))return"";const i=n.trim();return i?` ${i}`:""})}function DC(e,o){if(!G(e)||!o?.length)return e;const a=CC(e,o),s=/^\s*\$?\s*((?:fuera\s+del\s+tiempo\s+pascual|fuera\s+de\s+pascua|no\s+pascua|si\s+no\s+es\s+pascua|en\s+tiempo\s+pascual|tiempo\s+pascual|pascua|si\s+es\s+pascua))\s*:\s*\$?\s*(.*)$/i;if(!/(^|\n)\s*\$?\s*(?:fuera\s+del\s+tiempo\s+pascual|fuera\s+de\s+pascua|no\s+pascua|si\s+no\s+es\s+pascua|en\s+tiempo\s+pascual|tiempo\s+pascual|pascua|si\s+es\s+pascua)\s*:/i.test(a))return a;const r=a.split(/\r?\n/),i=new Map;i.set("easter",[]),i.set("nonEaster",[]);let t=null;for(const c of r){const m=c.match(s);if(m){const f=m[1]??"";$t(f)?t="easter":Tt(f)?t="nonEaster":t=null;const y=(m[2]??"").trim();t&&y.length&&i.get(t)?.push(y);continue}t&&i.get(t)?.push(c)}const u=i.get(ga(o)?"easter":"nonEaster")?.join(`
`).trim();if(!u){const m=i.get(ga(o)?"nonEaster":"easter")?.join(`
`).trim();return m||e}return u}function Lt(e,o,a){return qC(DC(e,a),o)}function sp(e){return!!e?.some(o=>o.includes("LENT"))}function RC(e){return wn(e,"ADVENT")||wn(e,"CHRISTMAS")}function $C(e){return e.getMonth()===0||e.getMonth()===1&&e.getDate()<=2}function TC(e){return ga(e.seasons)?"reginaCaeli":RC(e.seasons)||e.date&&$C(e.date)?"almaRedemptoris":e.date&&e.date<on(e.date.getFullYear())||sp(e.seasons)?"aveRegina":"salveRegina"}const LC={almaRedemptoris:"Santa Madre del Redentor",aveRegina:"Salve, Reina de los cielos",reginaCaeli:"Reina del cielo",salveRegina:"Salve Regina"};function MC(e){const o=TC(e);return{title:"Antífona mariana",alternatives:[o,...["almaRedemptoris","aveRegina","reginaCaeli","salveRegina"].filter(s=>s!==o)].map(s=>({label:LC[s],content:AE(s)}))}}function Fn(e){return G(e)?`[[ANTIPHON]] ${e}`:""}function pr(e){return G(e)?`[[REPEATED_ANTIPHON]] ${e}`:""}function np(e){const o=e?.replace(/\r\n/g,`
`).trim();return o?o.split(/(?:^|\n)\s*\$?\s*O\s+bien\s*:?\s*\$?\s*/gim).map(a=>a.trim()).filter(Boolean):[]}function Mt(e){return fr("Himno",e,"Himno")}const ei=`$V.$ Dios todopoderoso tenga misericordia de nosotros, perdone nuestros pecados y nos lleve a la vida eterna.

$R.$ Amén.`,qu=`$V.$ Señor, ten piedad.

$R.$ Señor, ten piedad.

$V.$ Cristo, ten piedad.

$R.$ Cristo, ten piedad.

$V.$ Señor, ten piedad.

$R.$ Señor, ten piedad.`,Pn=`$Rúbrica.$ Antes de Completas es muy de alabar que se haga examen de conciencia.

$Rúbrica.$ Se guarda un momento de silencio.`;function NC(){return{title:"Examen de conciencia",alternatives:[{label:"Silencio",content:Pn},{label:"Yo confieso",content:[Pn,"$Todos.$ Yo confieso ante Dios todopoderoso y ante vosotros, hermanos, que he pecado mucho de pensamiento, palabra, obra y omisión.","$Todos.$ Por mi culpa, por mi culpa, por mi gran culpa. Por eso ruego a santa María, siempre Virgen, a los ángeles, a los santos y a vosotros, hermanos, que intercedáis por mí ante Dios, nuestro Señor.",ei,qu].join(`

`)},{label:"Ten misericordia",content:[Pn,"$V.$ Señor, ten misericordia de nosotros.","$R.$ Porque hemos pecado contra ti.","$V.$ Muéstranos, Señor, tu misericordia.","$R.$ Y danos tu salvación.",ei,qu].join(`

`)},{label:"Invocaciones",content:[Pn,"$V.$ Tú que has sido enviado a sanar los corazones afligidos: Señor, ten piedad.","$R.$ Señor, ten piedad.","$V.$ Tú que has venido a llamar a los pecadores: Cristo, ten piedad.","$R.$ Cristo, ten piedad.","$V.$ Tú que estás sentado a la derecha del Padre para interceder por nosotros: Señor, ten piedad.","$R.$ Señor, ten piedad.",ei].join(`

`)}]}}function fr(e,o,a="Opción",s){const n=np(o),r=i=>s?s(i):i;return n.length<=1?{title:e,content:r(o)}:{title:e,alternatives:n.map((i,t)=>({label:`${a} ${t+1}`,content:r(i)}))}}function _C(e){return G(e)?`$V.$ ${e}

$R.$ Amén.`:e}function rp(e,o,a,s=!0){const n=np(a);function r(i){const t=s?pr(i):Fn(i);return[Fn(i),kn,o,tt,t].filter(G).join(`

`)}return n.length<=1?{title:e,content:r(a)}:{title:e,alternatives:n.map((i,t)=>({label:`Antífona ${t+1}`,content:r(i)}))}}function zC(e,o){const a=pr(o),s=G(a)?e.replace(/<small\b[^>]*>\s*Se repite la ant.fona\s*<\/small>/gi,`
${a}
`):e;return ip(s)}function ip(e){return e.replace(/<\/p>\s*<p\b[^>]*>/gi,`

`).replace(/<p\b[^>]*>/gi,"").replace(/<\/p>/gi,"").replace(/<br\s*\/?>/gi,`
`).replace(/<\/?[^>]+>/g,"").replace(/&nbsp;/gi," ").replace(/&amp;/gi,"&").replace(/&quot;/gi,'"').replace(/&#39;|&apos;/gi,"'").replace(/&lt;/gi,"<").replace(/&gt;/gi,">").replace(/[ \t]+\n/g,`
`).replace(/\n{3,}/g,`

`).trim()}function JC(e){return e.replace(/(?:^|\n+)\s*Gloria al Padre,\s*y al Hijo,\s*y al Esp[íi]ritu Santo\.?\s+(?:Como era en el principio,\s*)?ahora y siempre,?\s+por los siglos de los siglos\.?\s*Am[eé]n\.?/gi,`
`).replace(/(?:^|\n+)\s*Gloria al Padre,\s*y al Hijo,\s*y al Esp[íi]ritu Santo\.?\s+Como era en el principio,\s*ahora y siempre,?\s+por los siglos de los siglos\.?\s*Am[eé]n\.?/gi,`
`).replace(/\n{3,}/g,`

`).trim()}function jC(e){return ip(e.replace(/<small\b[^>]*>\s*Se repite la ant.fona\s*<\/small>/gi,""))}function xC(e){return e.replace(/\n+\s*_?Si se ha rezado este salmo en el invitatorio, se reemplaza por el Salmo 94, que se encuentra m(?:Ã¡|á)s arriba\._?/gi,"").trim()}function UC(e){return/Si se ha rezado este salmo en el invitatorio, se reemplaza por el Salmo 94/i.test(e)}function HC(e,o){return!G(e)&&!G(o)?"":[Fn(e),o,pr(e)].filter(G).join(`

`)}function Ie(e,o){(G(o.content)||o.alternatives?.length||o.items?.length)&&e.push(o)}function fa(e,o,a,s,n,r,i){const t=oe(o,`${s}_salmo_cita`),l=oe(o,`${s}_salmo_texto`),u=!!i?.canReplace&&UC(t)&&Vn(t)===i?.selectedPsalmNumber&&!!i?.replacementPsalm,c=i?.replacementPsalm,m=u&&c?c.title:xC(t),f=u&&c?jC(c.psalm):l;Ie(e,{title:a,eyebrow:m,content:HC(Lt(oe(o,`${s}_salmo_antifona`),n,r),f)})}function VC(e,o){const a=It(e),s=Math.max(0,Math.min(a.length-1,o.invitatoryPsalmIndex??0));return a[s]}function wC(e,o,a){const s=It(e),n=VC(e,o),r=s.find(i=>Vn(i.title)===94);return{canReplace:a==="laudes"&&o.includeInvitatoryInLaudes&&!!(n&&r),selectedPsalmNumber:n?Vn(n.title):void 0,replacementPsalm:r}}function tp(e,o){const a=oe(e,"__invitatoryAntiphon")||oe(e,"val"),s=It(e),n={title:oe(e,"__invitatoryPsalmTitle")||oe(e,"psalmTitle"),psalm:oe(e,"__invitatoryPsalm")||oe(e,"psalm")},r=s.length?s:n.title&&n.psalm?[n]:[],i=Math.max(0,Math.min(r.length-1,o.invitatoryPsalmIndex??0)),t=r[i],l=r.map((u,c)=>({label:oC(u.title,c),eyebrow:u.title,content:[JC(zC(u.psalm,a)),tt,pr(a)].filter(G).join(`

`)}));return[{title:"Aclamación",content:SE},{title:"Antífona",content:Fn(a),quiet:!0},{title:"Salmo invitatorio",eyebrow:t?.title,alternatives:l}]}function Nt(e,o,a){return a==="laudes"&&o.includeInvitatoryInLaudes?tp(e,o):[{title:"Invocación inicial",content:gE(sp(o.seasons))}]}function FC(e,o){return rp(e==="vesperae"?"Cántico de María":"Cántico de Zacarías",e==="vesperae"?vE:bE,o)}function kC(e,o){const a=e.split(/\r?\n/).map(s=>s.trim().replace(/^\*[A-Za-z]\*\s*/,"")).filter(G).flatMap(s=>{const n=s.startsWith("*"),r=n?s.replace(/^\*+/,"").trimStart():s,i=n?`<strong>${Qe(r)}</strong>`:Qe(r),l=`<span class="${n?"personal-intention-line is-bold":"personal-intention-line"}">- ${i}</span>`,u=n&&G(o)?`<span class="custom-preces-response-line">$R.$ ${Qe(o)}</span>`:"";return[l,u].filter(G)});return a.length?`<p class="personal-intentions-block">${a.join("")}</p>`:""}const BC="pueden añadirse intenciones personales";function YC(e){return(e.match(/_/g)??[]).length%2===1?`${e}_`:e}function GC(e){return YC(e.trim().replace(/^\s*-\s*\(\s*o\s+bien\s*:?\s*/i,"- ").replace(/\s*\(\s*o\s+bien\s*:?\s*_?\s*$/i,"").replace(/\)\s*(_?)\s*$/i,"$1").trim())}function QC(e,o){const a=o.replace(/_/g,"").trim();if(!G(a))return e;const s=a.split(/\s+/).map(n=>n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("\\s+");return e.replace(new RegExp(`\\s*${s}\\s*(_?)\\s*$`,"i"),"$1")}function WC(e,o,a){const s=oe(e,"preces_respuesta"),n=$a(e,"preces_contenido").map(GC).map(l=>QC(l,s)),r=G(s)?`$R.$ ${s}`:"",i=G(o),t=[];return G(r)&&t.push(r),n.forEach(l=>{t.push([l,r].filter(G).join(`

`))}),i?t.push(kC(o,s)):a==="vesperae"&&t.push(BC),i&&G(r)&&t.push(r),{title:"Preces",content:oe(e,"preces_intro"),items:t}}function KC(e,o){return{title:"Padrenuestro",content:[oe(e,"invitacion_padrenuestro"),Oa(o.lordPrayerLanguage)].filter(G).join(`

`),quiet:!0}}function XC(e){if(e==="laudes"||e==="vesperae")return"blessing";if(e==="completorium")return"compline";if(e==="invitatorium"||e==="officium"||e==="tertia"||e==="sexta"||e==="nona")return"short"}function _t(e,o){const a=XC(o);a&&Ie(e,{title:"Conclusión",content:ym(a),quiet:!0})}function oi(e,o,a){const s=[],n=wC(e,o,a);for(const r of Nt(e,o,a))Ie(s,r);return Ie(s,Mt(oe(e,"himno"))),fa(s,e,"Primer salmo","primer",o.cycle,o.seasons,n),fa(s,e,"Segundo salmo","segundo",o.cycle,o.seasons,n),fa(s,e,"Tercer salmo","tercer",o.cycle,o.seasons,n),Ie(s,{title:"Lectura breve",eyebrow:Ct(oe(e,"lectura_biblica_cita")),content:dr(oe(e,"lectura_biblica"))}),Ie(s,{title:"Responsorio breve",items:Ba($a(e,"responsorios"))}),(a==="laudes"||a==="vesperae")&&(Ie(s,FC(a,Lt(oe(e,"cantico_evangelico_antifona"),o.cycle,o.seasons))),Ie(s,WC(e,o.customIntentions,a)),Ie(s,KC(e,o))),Ie(s,fr("Oración final",oe(e,"oracion_final"),"Oración",_C)),_t(s,a),a==="laudes"&&o.includeMarianConsecrationInLaudes&&Ie(s,{title:"Consagración a María",content:PE}),s}function ZC(e,o){const a=$a(e,"responsorio_pascua");return ga(o.seasons)&&a.length?a:Ba($a(e,"responsorio"))}function eD(e,o){if(IC(o.seasons)){const a=oe(e,"antifona_triduo");if(G(a))return a}if(OC(o.seasons)){const a=oe(e,"antifona_inalbis");if(G(a))return a}return Lt(oe(e,"cantico_evangelico_antifona"),o.cycle,o.seasons)}function oD(e){return["$V.$ Oremos.",e.replace(/\r\n/g,`
`).replace(/^\s*(?:<p[^>]*>\s*)?Completas\s*:[\s\S]*?(?=(?:<p[^>]*>\s*)?(?:\$V\.\$\s*)?Oremos\s*:?\s*)/i,"").replace(/^\s*(?:<p[^>]*>\s*)?Completas\s*:[^\n<]*(?:<\/p>)?\s*/i,"").replace(/^\s*(?:<p[^>]*>\s*)?(?:\$V\.\$\s*)?Oremos\s*:?\s*(?:<\/p>)?\s*/i,"").replace(/\s*(?:\$R\.\$\s*)?Am[eé]n\.?\s*$/i,"").replace(/\n{3,}/g,`

`).trim(),"$R.$ Amén."].filter(G).join(`

`)}function aD(e,o){const a=[];for(const n of Nt(e,o,"completorium"))Ie(a,n);Ie(a,NC()),Ie(a,Mt(oe(e,"himno"))),fa(a,e,"Primer salmo","primer"),fa(a,e,"Segundo salmo","segundo"),Ie(a,{title:"Lectura breve",eyebrow:Ct(oe(e,"lectura_biblica_cita")),content:dr(oe(e,"lectura_biblica_texto"))}),Ie(a,{title:"Responsorio",items:Ba(ZC(e,o))});const s=eD(e,o);return Ie(a,rp("Cántico evangélico",yE,s,!0)),Ie(a,fr("Oración",oD([oe(e,"oracion"),oe(e,"final")].filter(G).join(`

`)),"Oración")),_t(a,"completorium"),Ie(a,MC(o)),a}function sD(e,o){const a=[],s=o.officeTrack,n=s==="a"?"anual":s==="i"?"año impar":"año par";for(const r of Nt(e,o,"officium"))Ie(a,r);return Ie(a,Mt(oe(e,"himno"))),fa(a,e,"Primer salmo","primer"),fa(a,e,"Segundo salmo","segundo"),fa(a,e,"Tercer salmo","tercer"),Ie(a,{title:"Responsorio",items:Ba($a(e,"responsorio1"))}),Ie(a,{title:`Lectura bíblica (${n})`,eyebrow:Ct(oe(e,`lectura_biblica_cita_${s}`)),summary:oe(e,`lectura_biblica_titulo_${s}`),content:dr(oe(e,`lectura_biblica_texto_${s}`))}),Ie(a,{title:"Responsorio",items:Ba(yu($a(e,`responsorio2_${s}`)))}),Ie(a,{title:`Lectura patrística (${n})`,eyebrow:mr(oe(e,`lectura_patristica_cita_${s}`)),summary:oe(e,`lectura_patristica_titulo_${s}`),content:oe(e,`lectura_patristica_texto_${s}`)}),Ie(a,{title:"Responsorio",items:Ba(yu($a(e,`responsorio3_${s}`)))}),Ie(a,fr("Oración final",oe(e,"oracion_final"),"Oración")),_t(a,"officium"),a}function nD(e,o){return Ti(e)&&!o.some(a=>Gs(xe(a)))?"Primera lectura":JO[e]??"Lectura"}function zt(e,o){const a=Rt(e,o.seasons);return a.map(s=>{const n=xe(s),r=oe(s,"texto"),i=ap(oe(s,"ref"),r),l=!hu(n)&&!as(n)&&!Zr(n)?"":i;return{title:nD(n,a),eyebrow:G(l)?l:void 0,content:hu(n)?sC(i,r):as(n)?lC(i,r):Zr(n)?bC(i,r,o):fC(i,r),kind:"mass",quiet:Zr(n)}})}function Jt(e,o){const a=Rt(e,o.seasons).find(r=>as(xe(r)));if(!a)return o;const s=oe(a,"texto"),n=ap(oe(a,"ref"),s);return{...o,massGospelReference:n,massGospelText:s}}function Li(e,o){return(e.seasons??[]).some(a=>a.toLowerCase().includes(o))}function rD(e){const o=e.rank?.toUpperCase();return ba(e)||o==="SOLEMNITY"||o==="FEAST"?!0:o==="SUNDAY"&&!Li(e,"advent")&&!Li(e,"lent")}function iD(e){const o=e.rank?.toUpperCase();return ba(e)?!1:o==="SUNDAY"||o==="SOLEMNITY"}function tD(e){return!!(e.kind==="part"||G(e.content)||G(e.summary)||e.rubrics?.some(G)||e.alternatives?.some(o=>G(o.content))||e.items?.length)}const vo="$Nos ponemos en pie$",_s="$Nos sentamos$",lp="$Nos arrodillamos durante la consagración.$",kn="$† Hacemos la señal de la cruz mientras decimos: †$",lD="$† Hacemos la señal de la cruz mientras decimos: †$",cD="$† Hacemos la señal de la cruz mientras decimos: †$",uD="$† Hacemos la señal de la cruz mientras decimos: †$";function cp(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function dD(e,o){const a=o.filter(G);if(!a.length||e.kind==="part")return e;const s=[...e.rubrics??[]];for(const n of a)s.includes(n)||s.push(n);return{...e,rubrics:s}}function mD(e){if(e===vo)return"stand";if(e===_s)return"sit";if(e===lp)return"kneel"}function pD(e){let o;return e.map(a=>{const s=a.rubrics??[];if(!s.length)return a;const n=[];return s.forEach(r=>{const i=mD(r);if(!i){n.push(r);return}i!==o&&(n.push(r),o=i)}),n.length?{...a,rubrics:n}:{...a,rubrics:void 0}})}function fD(e,o){const a=cp(o.title);return a==="aclamacion"?[vo,lD]:e==="invitatorium"&&(a==="antifona"||a==="salmo invitatorio")?[vo]:a==="invocacion inicial"?[vo,kn]:a==="himno"?[vo]:a==="examen de conciencia"?[_s]:a==="primer salmo"||a==="segundo salmo"||a==="tercer salmo"?[_s]:a.startsWith("lectura")||a==="responsorio"||a==="responsorio breve"?[_s]:a==="cantico de zacarias"||a==="cantico de maria"||a==="cantico evangelico"?[vo]:a==="preces"||a==="padre nuestro"||a==="antifona mariana"||a==="consagracion a maria"||a.includes("oracion")?[vo]:a==="conclusion"?e==="laudes"||e==="vesperae"||e==="completorium"?[vo,kn]:[vo]:[]}function gD(e){const o=cp(e.title);return o==="senal de la cruz"?[vo,kn]:o==="evangelio"?[vo,cD]:o==="bendicion"?[vo,uD]:o==="primera lectura"||o==="segunda lectura"||o==="salmo responsorial"||o==="salmo responsorial cantado"||o==="secuencia"||o==="homilia"||o==="avisos"||o==="canto de ofertorio"||o==="presentacion de los dones"||o==="canto de meditacion"?[_s]:o==="plegaria eucaristica"?[vo,lp]:o.includes("evangelio")||o.includes("aclamacion")||o.includes("gloria")||o.includes("credo")||o.includes("profesion de fe")||o.includes("oracion")||o.includes("prefacio")||o.includes("santo")||o.includes("padrenuestro")||o.includes("cordero de dios")||o.includes("comunion")||o.includes("bendicion")||o.includes("despedida")||o.includes("veneracion del altar")||o==="antifona de entrada"||o==="canto de entrada"||o==="saludo inicial"||o==="monicion inicial"||o==="acto penitencial y senor, ten piedad"||o==="senor, ten piedad"||o==="orad, hermanos"||o==="dialogo del prefacio"||o==="monicion a la plegaria eucaristica"||o==="continuacion de la plegaria eucaristica"||o==="doxologia final y gran amen"||o==="rito de la paz"||o==="invitacion a la comunion"||o==="canto final"?[vo]:[]}function Pa(e,o){return pD(o.map(a=>dD(a,e==="evangelium"?gD(a):fD(e,a))))}function SD(e,o){const a=Jt(e,o),s=zt(e,a),n=i=>Dt(i,e,a),r=[...II()];return s.forEach(i=>{i.title==="Salmo responsorial"&&r.push(n("salmo")),i.title==="Aclamación antes del Evangelio"&&r.push(n("aclamacion")),r.push(i),i.title==="Evangelio"&&r.push(Ot())}),r.push({title:"Homilía",content:`$Rúbrica.$ Homilía.

$Rúbrica.$ Puede guardarse un momento de silencio.`,kind:"mass",quiet:!0},$m(),...OI(),...CI(o,n)),jt(r,o)}function bD(e,o){const a=Jt(e,o),s=zt(e,a),n=f=>Dt(f,e,a),r=[...zI(),Ye("Liturgia de la Palabra")],i=Jm(o,n,!1).find(f=>f.title==="Oración colecta");let t=!1;function l(){t||(r.push(n("gloria")),r.push({title:"Gloria",content:tt,kind:"mass",quiet:!0}),i&&r.push(i),t=!0)}s.forEach(f=>{if(f.title==="Epístola"&&l(),f.title.startsWith("Salmo responsorial")&&r.push(n("salmo")),f.title==="Aclamación antes del Evangelio"&&r.push(n("aclamacion")),r.push(f),f.title==="Evangelio"&&r.push(Ot()),f.title.startsWith("Salmo responsorial")){const y=xI(f.title);y&&r.push(y)}}),l();const u=jm(o,!1),c=u.find(f=>f.title==="Homilía"),m=u.find(f=>f.title==="Oración universal");return c&&r.push(c),r.push(...JI()),m&&r.push(m),r.push(Ye("Liturgia eucarística"),...xm(o,n),Ye("Rito de la comunión"),...Um(o,n),Ye("Ritos conclusivos"),...Hm(o,n)),jt(r,o)}const vD=new Set([To("entrada"),To("penitencial"),"Acto penitencial y Señor, ten piedad",To("gloria"),"Gloria",To("salmo"),"Salmo responsorial",To("aclamacion"),"Aclamación antes del Evangelio",To("ofertorio"),To("cordero"),"Cordero de Dios",To("comunion"),To("final")]);function jt(e,o){const a=e.filter(tD);return o.priestMode?a:a.filter(s=>vD.has(s.title))}function yD(e,o){if(Dm(o))return SD(e,o);if(gt(o))return bD(e,o);const a=Jt(e,o),s=zt(e,a),n=u=>Dt(u,e,a),r=[n("entrada"),Ye("Ritos iniciales"),...Jm(a,n,rD(a)),Ye("Liturgia de la Palabra")];let i=!1,t=!1;function l(){if(t)return;const u=$O(a);u&&r.push(u),t=!0}return s.forEach(u=>{u.title==="Salmo responsorial"&&r.push(n("salmo")),u.title==="Aclamación antes del Evangelio"&&(l(),r.push(n("aclamacion")),i=!0),u.title==="Evangelio"&&!i&&(l(),r.push(n("aclamacion")),r.push(TO(a)),i=!0),r.push(u),u.title==="Evangelio"&&r.push(Ot())}),r.push(...jm(a,iD(a),n),Ye("Liturgia eucarística"),...xm(a,n),Ye("Rito de la comunión"),...Um(a,n)),ba(a)?r.push(..._I(a,n)):r.push(Ye("Ritos conclusivos"),...Hm(a,n)),jt(r,o)}function hD(e,o,a){switch(e){case"invitatorium":{const s=[...tp(o,a).filter(n=>G(n.content)||n.alternatives?.length),{title:"Conclusión",content:ym("short"),quiet:!0}];return Pa(e,s)}case"officium":return Pa(e,sD(o,a));case"laudes":return Pa(e,oi(o,a,e));case"tertia":case"sexta":case"nona":return Pa(e,oi(o,a,e));case"vesperae":return Pa(e,oi(o,a,e));case"completorium":return Pa(e,aD(o,a));case"evangelium":return Pa(e,yD(o,a))}}function ED(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}function up(e){return e==="and"?"y":e==="of"?"de":e==="the"?"":e==="great"?"Magno":e==="nazianzen"?"Nacianceno":e==="rome"?"Roma":e==="sicily"?"Sicilia":e==="padua"?"Padua":e==="egypt"?"Egipto":Fm[e]??ED(e)}function AD(e){return e==="and"?"y":e==="of"?"de":km[e]??Fm[e]??e}function PD(e){const o=e.split("_").filter(Boolean),a=o.findIndex(t=>!!km[t]);if(a<0)return"";const n=new Set(["agatha","agnes","catherine","clare","lucy","mary","monica","teresa"]).has(o[0]??"")?"Santa":"San",r=o.slice(0,a).map(up).filter(G).join(" "),i=o.slice(a).map(AD).filter(G).join(" ");return[r?`${n} ${r}`:"",i].filter(G).join(", ")}const qD={ordinary_time:"del Tiempo Ordinario",advent:"de Adviento",christmas:"de Navidad",lent:"de Cuaresma",easter:"de Pascua"};function dp(e){const o=e.match(/^(ordinary_time|advent|christmas|lent|easter)_(\d+)_(monday|tuesday|wednesday|thursday|friday|saturday|sunday)$/);if(!o)return;const a=qD[o[1]],s=Number(o[2]),n=o[3];return n==="sunday"?`${s}º domingo ${a}`:`${zO[n]} de la ${s}ª semana ${a}`}function ID(e){const o=wm[e];if(o)return o;const a=dp(e);if(a)return a;const s=PD(e);return s||e.split("_").map(n=>up(n)).filter(G).join(" ")}function ai(e,o){const a=oe(e,Et);if(G(a))return a;const s=typeof e.id=="string"?e.id:"";return s?ID(s):`Opción ${o+1}`}const OD={class:"date-band"},CD={class:"day-summary"},DD={class:"home-date"},RD={class:"summary-tags"},$D={key:0},TD={key:1},LD={key:2},MD={key:0,class:"date-picker-panel"},ND={class:"date-input"},_D={class:"home-layout"},zD={class:"menu-panel"},JD={class:"office-grid"},jD=["onClick"],xD={class:"home-extras"},UD=["onClick"],HD={class:"home-tools"},VD={class:"tool-panel"},wD={class:"panel-title panel-title-preces"},FD=["disabled"],kD={key:0,class:"offline-notice"},BD={class:"tool-panel"},YD={class:"setting-group"},GD={class:"range-row"},QD={class:"setting-group"},WD={class:"switch-row"},KD={class:"switch-row"},XD={class:"setting-group"},ZD={class:"switch-row"},eR={class:"setting-group"},oR={class:"switch-row"},aR={class:"setting-group"},sR={class:"switch-row"},nR={class:"setting-group"},rR={class:"switch-row"},iR={class:"setting-group"},tR={class:"segmented"},lR={class:"setting-group"},cR={class:"switch-row"},uR={key:0,class:"setting-group"},dR={class:"segmented"},mR={key:1,class:"setting-group"},pR={class:"switch-row"},fR={class:"setting-group"},gR={class:"scroll-speed-control"},SR=["max","aria-valuetext"],bR={class:"scroll-speed-labels"},vR=["aria-pressed","onClick"],yR={class:"reader-header"},hR=["innerHTML"],ER={key:1,class:"reader-celebration"},AR=["innerHTML"],PR={key:1,class:"reader-celebration-dot","aria-hidden":"true"},qR={class:"reader-celebration-text"},IR=["innerHTML"],OR={key:3,class:"reader-celebration-dot","aria-hidden":"true"},CR={class:"reader-date"},DR={key:0,class:"reader-inline-controls"},RR={key:1,class:"option-choice-backdrop",role:"dialog","aria-label":"Elección de opción litúrgica","aria-live":"polite"},$R={class:"option-choice-modal"},TR={class:"option-choice-grid"},LR=["onClick"],MR={key:2,class:"loading-state"},NR={key:3,class:"empty-state"},_R={key:4,class:"empty-state"},zR=["innerHTML"],JR=["innerHTML"],jR=["aria-label"],xR={key:0,class:"option-choice-backdrop",role:"dialog","aria-label":"Padrenuestro en solemnidad","aria-live":"polite"},UR={class:"option-choice-modal"},HR={class:"option-choice-grid option-choice-grid-two"},ua=.9,gs=1.28,ja=20,Ss=4,Iu="orante:font-scale-v2",VR="orante:font-scale",Ou=10,Cu="orante:prayer-options-by-day",wR=150,bs=3,Du=20,Ru=2,FR=5e3,kR=.95,si=1,BR=1.05,YR=2.4,GR=96,vs="#f2eee6",$u="#c99b42",QR="https://raw.githubusercontent.com/lucasague/liturgiadelashoras/data/intenciones.json",ni="orante:intenciones-last-synced-id",WR="lucasague/liturgiadelashoras",KR="data",XR="canticos.json",Tu="https://laudes-rele.laudescantados.workers.dev",ZR=3e3,e$=250,o$=33,a$=or({__name:"App",setup(e){const o={key:"invitatorium",label:"Invitatorio",icon:Xb},a=[{key:"officium",label:"Oficio",icon:fb},{key:"laudes",label:"Laudes",icon:sv},{key:"tertia",label:"Tercia",icon:Pb},{key:"sexta",label:"Sexta",icon:ec},{key:"nona",label:"Nona",icon:ec},{key:"vesperae",label:"Vísperas",icon:rv},{key:"completorium",label:"Completas",icon:Jb}],s=[{key:"evangelium",label:"Misa",icon:mb,open:()=>rn("evangelium")},{key:"bible",label:"Biblia",icon:ub,open:()=>uf()}],n=B("home"),r=B(null),i=B(null),t=B(Ac()),l=B(0),u=B(null),c=B(!0),m=B(""),f=B(!1),y=B(Ss),O=B(Be("orante:office-track",new Date().getFullYear()%2===0?"p":"i")),I=B(Be("orante:include-invitatory-laudes",!1)),_=B(Be("orante:include-marian-consecration-laudes",!0)),V=B(0),k=B("es"),J=B(Be("orante:custom-intentions","")),M=B(Be("orante:singing-notation",!1)),E=B(Be("orante:priest-mode",!1)),$=B(Be("orante:posture-instructions",!1)),H=B(Be("orante:capitulares-solemnidad",!0)),x=Vt(Be("orante:singing-notation-mode",2)),W=B(Be("orante:singing-notation-modes",{})),ae=B({}),Ee=B({}),Te=B({}),Ce=B({}),He=B({});let Io=!1;const $e=B({}),X=B(jO()),ce=B(Be("orante:camera-scroll-enabled",!0)),Ke=B(Be("orante:avisos-horas",!0)),ko=B(!1),qe=[{key:"slow",label:"Lento",description:"Canto",speed:3.3},{key:"medium",label:"Medio",description:"Lectura en voz alta",speed:6.12},{key:"fast",label:"Rápido",description:"Lectura mental",speed:12}],Ve=qe[qe.length-1].speed,la=qe[0].speed,go=qe[1].speed/la,Le=B(bs),Me=B(!1),Do=B(Be(Cu,{})),lo=B(!1),Xe=B(!1),ya=B(null);let g=0,S=0,h=0,C=!1,P=0,q=0,z=bs;const T=B(!1),L=B(""),A=B(null),Y=B(!1);let j=null,w=!1,Q=null;const se=U(()=>bm(t.value)),fe=U(()=>u.value?.options[l.value]),ge=U(()=>`${t.value}::${X.value}`),ne=U(()=>wO(fe.value)??u.value?.info),Ne=U(()=>ua+y.value/ja*(gs-ua)),we=U({get:()=>kt(Le.value),set:p=>{const d=Number(p),v=Number.isFinite(d)?Math.min(qe.length-1,Math.max(0,Math.round(d))):0;Le.value=qe[v].speed}}),Ze=U(()=>qe[we.value]),Ro=$u,eo={RED:"#c96f65",GREEN:"#7fac6f",PURPLE:"#9874b4",WHITE:$u,ROSE:"#bf7f94",BLUE:"#78a7c8"},Fe={"#ff5654":eo.RED,"#70b26f":eo.GREEN,"#794498":eo.PURPLE,"#bdbdbd66":eo.WHITE,"#ff81f5":eo.ROSE,"#00bafe":eo.BLUE},ke=U(()=>zp(ne.value)),ha=U(()=>ne.value?.rank==="SUNDAY"?vs:ke.value),Ma=U(()=>ne.value?.color==="WHITE"||ke.value===vs?Ro:ke.value),gr=U(()=>vs),sn=U(()=>({choirMode:M.value,priestMode:E.value,customIntentions:J.value,includeInvitatoryInLaudes:I.value,includeMarianConsecrationInLaudes:_.value,invitatoryPsalmIndex:V.value,lordPrayerLanguage:k.value,officeTrack:O.value,date:se.value,celebration:ne.value?.celebration,rank:ne.value?.rank,cycle:ne.value?.cycle,seasons:ne.value?.seasons})),D=U(()=>H.value&&X.value!=="evangelium"&&Dh(ne.value)),ee=U(()=>D.value&&X.value==="laudes"),re=U(()=>fe.value?hD(X.value,fe.value,sn.value):[]),ve=B(!1),So=B(""),cs=B(new Date);let Na;const mp=U(()=>{const p=Be(ni,""),d=cs.value;return pE(pa,d)<4?!1:p?fE(p,pa)!==Un(pa,d):!0});function xt(){const p=J.value.trim().length>0,d=kd()?"Sin conexión":"No hay conexión con la nube";return p?`${d}: se muestran las últimas intenciones descargadas, puede que no sean las de hoy.`:`${d}: no se han podido cargar las intenciones de hoy.`}async function Sr(p={}){const{force:d=!1}=p;d&&(ve.value=!0,So.value="");try{const v=await fetch(QR,{cache:"no-store"});if(!v.ok){So.value=xt();return}const F=await v.json();if(!F.id||!F.text?.trim()){So.value="Todavía no hay intenciones publicadas para hoy.";return}const le=Be(ni,"");if(So.value="",!d&&F.id===le)return;J.value=F.text.trim(),localStorage.setItem(ni,JSON.stringify(F.id))}catch(v){So.value=Bd(v)?xt():"No se han podido cargar las intenciones de hoy."}finally{d&&(ve.value=!1)}}const pp=`https://raw.githubusercontent.com/${WR}/${KR}/${XR}`;let Ut="",Ht=0;async function fp(p){try{const d=await fetch(pp,{cache:"no-store"});if(!d.ok)return;const v=await d.json();if(Te.value={...v.porSalmo},Ce.value={...v.dias},Io=!0,t.value!==p)return;v.fecha===p?(v.selecciones&&(ae.value={...v.selecciones},He.value=Object.fromEntries(Object.entries(v.selecciones).map(([F,le])=>[F,le.key]))),v.misaCanciones&&($e.value={...v.misaCanciones})):v.dias?.[p]&&(He.value={...v.dias[p]},ae.value=Object.fromEntries(Object.entries(v.dias[p]).map(([F,le])=>[F,{key:le,capoOffset:0}])))}catch{}}async function gp(p){if(Io)try{await fetch(`${Tu}/canticos`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({fecha:p,selecciones:ae.value,misaCanciones:$e.value,porSalmo:Te.value,dias:Ce.value})})}catch{}}function br(){window.clearTimeout(Ht);const p=t.value;Ht=window.setTimeout(()=>{gp(p)},1500)}be(ae,br,{deep:!0}),be($e,br,{deep:!0}),be(t,p=>{p!==Ut&&(Ut=p,ae.value={},He.value={},Ee.value={},$e.value={},fp(p))},{immediate:!0}),be([t,X],()=>{l.value=0,V.value=0,lo.value=!1,Xe.value=!1,ya.value=null,ol()}),be(y,p=>localStorage.setItem(Iu,JSON.stringify(p))),be(O,p=>localStorage.setItem("orante:office-track",JSON.stringify(p))),be(I,p=>{localStorage.setItem("orante:include-invitatory-laudes",JSON.stringify(p)),p||(V.value=0)}),be(_,p=>{localStorage.setItem("orante:include-marian-consecration-laudes",JSON.stringify(p))}),be(J,p=>localStorage.setItem("orante:custom-intentions",JSON.stringify(p))),be(M,p=>localStorage.setItem("orante:singing-notation",JSON.stringify(p))),be(E,p=>localStorage.setItem("orante:priest-mode",JSON.stringify(p))),be($,p=>localStorage.setItem("orante:posture-instructions",JSON.stringify(p))),be(H,p=>localStorage.setItem("orante:capitulares-solemnidad",JSON.stringify(p))),be(ce,p=>localStorage.setItem("orante:camera-scroll-enabled",JSON.stringify(p))),be(Ke,p=>{localStorage.setItem("orante:avisos-horas",JSON.stringify(p)),FA(p).catch(()=>{})},{immediate:!0}),kA(p=>{t.value=Un(pa),rn(p)}),be(W,p=>localStorage.setItem("orante:singing-notation-modes",JSON.stringify(p)),{deep:!0}),be(Do,p=>{localStorage.setItem(Cu,JSON.stringify(p))},{deep:!0}),be(Le,p=>{const d=hr(p);if(d!==p){Le.value=d;return}localStorage.setItem("orante:auto-scroll-speed",JSON.stringify(p))}),be([Me,n],Xp),be([T,Me],([p,d])=>{TA(!!(p||d))}),be(vi,p=>{p&&Sr()}),ol(),Ts(()=>{localStorage.removeItem("orante:theme"),localStorage.removeItem("orante:lord-prayer-language"),localStorage.removeItem("orante:auto-scroll-on-open"),Bt(),cf("home"),window.addEventListener("popstate",tl),Sr(),Na=setInterval(()=>{document.hidden||(cs.value=new Date)},6e4)}),Ls(()=>{us(),Bt(),window.removeEventListener("popstate",tl),Na!==void 0&&clearInterval(Na)});function Sp(){Sr({force:!0})}function Be(p,d){try{const v=localStorage.getItem(p);return v?JSON.parse(v):d}catch{return d}}function Vt(p){return p===3||p===4?p:2}function wt(p,d){return`${p.title}-${p.eyebrow??""}-${d}`}function bp(p){return p.title==="Cántico de Zacarías"?4:x}function vp(p,d){return Vt(W.value[wt(p,d)]??bp(p))}function yp(p,d,v){W.value={...W.value,[wt(p,d)]:v}}function hp(p,d){d.key!==Ft(p)&&(He.value={...He.value,[p.title]:d.key}),ae.value={...ae.value,[p.title]:d}}function vr(p){return!(Ns[p.title]?.length>1)||p.title==="Invocación inicial"?void 0:(p.eyebrow?.trim()||p.content?.trim().split(`
`)[0]||"").toLowerCase().replace(/\s+/g," ").slice(0,80)||void 0}function Ep(){if(X.value!=="laudes")return;const p={...Te.value},d={...Ce.value[t.value]??{}};for(const F of re.value){const le=ae.value[F.title]?.key,Oo=vr(F);!le||!Oo||(p[Oo]=le,d[F.title]=le)}const v={...Ce.value,[t.value]:d};for(const F of Object.keys(v).sort().slice(0,Math.max(0,Object.keys(v).length-wR)))delete v[F];Te.value=p,Ce.value=v,He.value={...d},br()}function Ap(p){return ae.value[p.title]?.capoOffset??0}function Pp(p){return Ee.value[p.title]??0}function Ft(p){const d=vr(p);return He.value[p.title]??(d?Te.value[d]:void 0)??ae.value[p.title]?.key}function qp(p){const d=vr(p);return d?Te.value[d]:void 0}function Ip(p){const d=re.value.indexOf(p);return d<=0?[]:re.value.slice(0,d).map(v=>ae.value[v.title]?.key).filter(v=>!!v)}function Op(p,d){const v={...ae.value},F={...Ee.value};re.value.forEach((le,Oo)=>{const $o=Ns[le.title];if(Oo<p||!$o?.length)return;const mn=v[le.title]??{key:hi[le.title]??$o[0].key,capoOffset:0};v[le.title]={...mn,capoOffset:d},Oo>p&&(F[le.title]=d)}),ae.value=v,Ee.value=F}function Cp(p){if(p.title==="Salmo invitatorio")return V.value;if(qc.has(p.title)){const d=$e.value[p.title],v=d?p.alternatives?.findIndex(F=>F.label===d):void 0;return v!==void 0&&v>=0?v:void 0}}function Dp(p,d){if(p.title==="Salmo invitatorio"){V.value=d;return}if(qc.has(p.title)){const v=p.alternatives?.[d]?.label;v&&($e.value={...$e.value,[p.title]:v})}}function Rp(p){u.value?.options[p]&&(Do.value={...Do.value,[ge.value]:p},l.value=p,V.value=0,lo.value=!1,sl())}function $p(p){return ai(p[0],0)==="Corpus Christi"&&p.some((d,v)=>ai(d,v)==="Domingo ordinario")}function Tp(){const p=u.value?.options??[];if(p.length<=1){l.value=0,lo.value=!1;return}if($p(p)){l.value=0,lo.value=!0;return}const d=Do.value[ge.value];if(Number.isInteger(d)&&d>=0&&d<p.length){l.value=d,lo.value=!1;return}l.value=0,lo.value=!0}function yr(p){const d=Number(p);return Number.isFinite(d)?Math.min(ja,Math.max(0,Math.round(d))):Ss}function Lp(p){const d=Number(p);return Number.isFinite(d)?d>=0&&d<=ja?d:d>=ua&&d<=gs?Math.round((d-ua)/(gs-ua)*ja):Ss:Ss}function Mp(){const p=Be(Iu,null);if(p!==null)return yr(Lp(p));const d=Be(VR,null);if(d!==null){const v=Number(d);if(Number.isFinite(v)){if(v>=0&&v<=Ou)return yr(v*(ja/Ou));if(v>=ua&&v<=gs)return yr((v-ua)/(gs-ua)*ja)}}return Ss}function kt(p){const d=Number(p);if(!Number.isFinite(d))return 0;let v=0,F=Number.POSITIVE_INFINITY;return qe.forEach((le,Oo)=>{const $o=Math.abs(le.speed-d);$o<F&&(F=$o,v=Oo)}),v}function hr(p){const d=Number(p);return Number.isFinite(d)?qe[kt(d)].speed:bs}function Np(p){we.value=p}function _p(p){const d=Number(p);return Number.isFinite(d)?d>Ve&&d<=Du?hr(d/Du*Ve):hr(d):bs}function Bt(){const p="#161612";document.documentElement.style.backgroundColor=p,document.body.style.backgroundColor=p,document.getElementById("app")?.style.setProperty("background-color",p),document.querySelector('meta[name="theme-color"]')?.setAttribute("content",p)}function zp(p){const d=Yt(p?.color);return d||Jp(p?.color_hex||eo.GREEN,eo.GREEN)}function Yt(p){const d=String(p??"").trim().toUpperCase();return eo[d]}function Jp(p,d=eo.GREEN){const v=p.trim().toLowerCase(),F=Yt(v);if(F)return F;if(v==="white")return vs;const le=v.startsWith("#")?v:`#${v}`,Oo=Fe[le];if(Oo)return Oo;const $o=v.startsWith("#")?v.slice(1):v,mn=/^([0-9a-f]{3})$/i.test($o),yf=/^([0-9a-f]{6})$/i.test($o),hf=/^([0-9a-f]{8})$/i.test($o);if(!mn&&!yf&&!hf)return d;const pn=mn?$o.split("").map(pl=>pl+pl).join(""):$o.slice(0,6),Ef=Number.parseInt(pn.slice(0,2),16),Af=Number.parseInt(pn.slice(2,4),16),Pf=Number.parseInt(pn.slice(4,6),16);return Ef>=245&&Af>=245&&Pf>=245?vs:`#${pn}`}function Gt(p){return p&&p.charAt(0).toUpperCase()+p.slice(1)}function Qt(p,d){const v=new Intl.DateTimeFormat("es-ES",{weekday:d?"long":void 0,day:"numeric",month:"long",year:"numeric"}).format(p);return Gt(v.replace(",",""))}function jp(p){return new Intl.DateTimeFormat("es-ES",{day:"numeric",month:"long"}).format(p)}function Wt(p){return/^(lunes|martes|mi\u00e9rcoles|jueves|viernes|s\u00e1bado|domingo)\b/i.test(p.trim())}function xp(p){return/tiempo ordinario/i.test(p)||/\bsemana\b/i.test(p)}function Up(){const p=ne.value?.celebration?.trim(),d=ne.value?.rank;return!p||xp(p)?!1:d!=="FERIA"&&d!=="WEEKDAY"}function Hp(){const d=`${fu[X.value]} Cantados`,v=ne.value?.celebration?.trim();if(v&&Up()){const F=Wt(v)?", ":" - ",le=Qt(se.value,!Wt(v));return`${d} - ${v}${F}${le}`}return`${d} - ${Qt(se.value,!0)}`}const Vp={"Invocación inicial":"Invocación inicial",Himno:"Himno","Primer salmo":"1er salmo","Segundo salmo":"2º salmo","Tercer salmo":"3er salmo","Responsorio breve":"Responsorio","Cántico de Zacarías":"Cántico Evangélico",Padrenuestro:"Padrenuestro"};function wp(p){const d=ae.value[p],v=d?.key??hi[p],F=v?Ey(p,v):void 0;if(!F)return;const le=Math.max(0,F.capo+(d?.capoOffset??0)),Oo=Vp[p]??p;return NA(Oo,le,F.chords)}function Fp(){if(X.value!=="laudes")return"";const p=Object.keys(Ns).map(wp).filter(d=>!!d);return _A(p)}function kp(p){const d=document.createElement("textarea");d.value=p,d.setAttribute("readonly","true"),d.style.position="fixed",d.style.top="0",d.style.left="0",d.style.opacity="0",d.style.pointerEvents="none",document.body.appendChild(d),d.focus(),d.select(),d.setSelectionRange(0,d.value.length);try{return document.execCommand("copy")}catch{return!1}finally{document.body.removeChild(d)}}function Bp(p,d){return fetch(`${Tu}/metadata/${t.value}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:p,description:d})}).catch(()=>{})}async function Kt(p){try{if(navigator.clipboard?.writeText&&window.isSecureContext){await navigator.clipboard.writeText(p);return}}catch{}kp(p)}const nn=B(null);async function Xt(){qo.isNativePlatform()&&(nn.value=await YA())}function Zt(){document.visibilityState==="visible"&&Xt()}Ts(()=>{qo.isNativePlatform()&&(Xt(),document.addEventListener("visibilitychange",Zt))}),Ls(()=>{document.removeEventListener("visibilitychange",Zt)});async function el(){const p=Hp(),d=Fp(),v=Bp(p,d);await Kt(p),d&&(await new Promise(F=>window.setTimeout(F,1e3)),await Kt(d)),await WA(v,ZR)}function Yp(p){const d={FERIA:"Feria",WEEKDAY:"Feria",MEMORIAL:"Memoria",FEAST:"Fiesta",SOLEMNITY:"Solemnidad",SUNDAY:"Domingo"};return p?d[p]??p:""}y.value=Mp(),Le.value=_p(Be("orante:auto-scroll-speed",bs));async function ol(){const p=++g,d=se.value,v=X.value;c.value=!0,m.value="";try{const F=await UO(d,v);p===g&&(u.value=F,Tp(),sl())}catch(F){if(p!==g)return;m.value=Yd(F,"No se pudo preparar esta oración. Prueba con otro día o con otra Hora.","Sin conexión: esta es la primera vez que abres la app sin red y aún no se ha guardado el texto de la liturgia. Conéctate una vez y quedará disponible sin conexión para siempre."),lo.value=!1,u.value=null}finally{p===g&&(c.value=!1)}}function al(p){t.value=vm(t.value,p)}function Gp(){t.value=Ac(),f.value=!1}function Qp(p){return p==="laudes"||p==="vesperae"}function Wp(p){return Qp(p)&&ne.value?.rank==="SOLEMNITY"}function sl(){return n.value!=="reader"||lo.value||Xe.value||!Wp(X.value)?!1:(ya.value=X.value,Xe.value=!0,!0)}function nl(p){X.value=p,n.value!=="reader"&&ln("reader"),n.value="reader",us(),Ia(()=>{window.scrollTo({top:0,behavior:"auto"}),Me.value=ko.value})}function rn(p){nl(p)}function rl(p){const d=ya.value;k.value=p,Xe.value=!1,ya.value=null,d&&nl(d)}function Kp(){if(Me.value){tn();return}if(cl()){el();return}C=Pr(),Me.value=!0}function Xp(){const p=C;if(C=!1,Er(),n.value==="reader"&&Me.value){if(p){h=window.setTimeout(()=>{h=0,n.value==="reader"&&Me.value&&(S=requestAnimationFrame(dn))},FR);return}S=requestAnimationFrame(dn)}}function Er(){h&&window.clearTimeout(h),S&&cancelAnimationFrame(S),h=0,S=0,P=0,q=0,z=Le.value}async function Zp(){const p=document.documentElement;if(!(document.fullscreenElement||!p.requestFullscreen))try{await p.requestFullscreen({navigationUI:"hide"})}catch{}}async function il(){if(!(!document.fullscreenElement||!document.exitFullscreen))try{await document.exitFullscreen()}catch{}}function tn(){Me.value=!1,Er()}function ef(){j?.abort(),j=null,of()}async function of(){w&&(w=!1,Q?.getTracks().forEach(p=>p.stop()),Q=null,Y.value=!1,A.value&&(A.value.srcObject=null),L.value="",T.value=!1)}async function af(){T.value=!0,w=!0,L.value="";try{Q=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user"}})}catch{Q=null}Q&&w&&(Y.value=!0,await Ia(),A.value&&(A.value.srcObject=Q)),w&&(C=Pr(),Me.value=!0)}function us(){tn(),ef(),il()}function Ar(){const p=w;Ep(),us(),el().then(()=>{p&&GA()})}function sf(){if(ce.value){T.value||Zp(),rf();return}Kp()}function nf(){ce.value||Ar()}async function rf(){if(T.value){Ar();return}if(qo.isNativePlatform()){await af();return}const p=document.querySelector(".reader-surface");if(!p)return;C=Pr(),Me.value=!0;let d=null;try{d=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user"}})}catch{d=null}T.value=!0,L.value=d?"Generando vídeo con cámara…":"Generando vídeo…",j=new AbortController,d&&(Y.value=!0,await Ia(),A.value&&(A.value.srcObject=d));try{const v=await JA(p,{cameraStream:d,liturgicalColor:ke.value,readerScale:Ne.value,signal:j.signal,speedPixelsPerSecond:Le.value*Ru,theme:"default",onRecordingStarted:()=>{L.value="Grabando…"}});v&&tf(v,`${X.value}-${t.value}.webm`),L.value=""}catch{L.value="No se pudo generar el vídeo.",window.setTimeout(()=>{L.value=""},4e3)}finally{T.value=!1,j=null,Y.value=!1,A.value&&(A.value.srcObject=null),tn(),il()}}function tf(p,d){const v=URL.createObjectURL(p),F=document.createElement("a");F.href=v,F.download=d,document.body.appendChild(F),F.click(),F.remove(),URL.revokeObjectURL(v)}function tl(p){const d=p.state??null,v=lf(d);us(),n.value=v,r.value=v==="bible"?d?.oranteBibleBook??null:null,i.value=v==="bible"?d?.oranteBibleChapter??null:null,Ia(()=>window.scrollTo({top:0,behavior:"auto"}))}function lf(p){const d=p;return d?.oranteScreen==="reader"?"reader":d?.oranteScreen==="bible"?"bible":"home"}function cf(p){const d=window.history.state??{};window.history.replaceState({...d,...ll(p)},"")}function ln(p){const d=window.history.state??{};window.history.pushState({...d,...ll(p)},"")}function ll(p){return{oranteScreen:p,oranteBibleBook:p==="bible"?r.value:null,oranteBibleChapter:p==="bible"?i.value:null}}function uf(){r.value=null,i.value=null,us(),ln("bible"),n.value="bible",Ia(()=>window.scrollTo({top:0,behavior:"auto"}))}function df(p){r.value=p,i.value=null,ln("bible")}function mf(p){i.value=p,ln("bible")}function pf(){window.history.back()}function Pr(){return window.scrollY<=1}function cl(){return window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-3}function ul(p){return p.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function cn(p){return window.scrollY+p.getBoundingClientRect().top}function un(p){const d=ul(p);return Array.from(document.querySelectorAll(".reader-surface .prayer-section")).find(F=>ul(F.dataset.sectionTitle??"")===d)}let qr=si,dl=-1/0;function ff(){const p=performance.now();return p-dl<e$||(dl=p,qr=gf()),qr}function gf(){const p=un("Lectura breve"),d=un("Preces"),v=un("Padrenuestro");if(!p||!d||!v)return si;const F=un("Conclusión");if(F&&F.getBoundingClientRect().bottom<=window.innerHeight)return go;const le=window.scrollY+GR;return le<cn(p)?kR:le>=cn(d)&&le<cn(v)?go:le>=cn(v)?BR:si}function Sf(){return Le.value*ff()}function bf(p,d,v){return p<d?Math.min(d,p+v):p>d?Math.max(d,p-v):p}function dn(p){if(S=0,n.value!=="reader"||!Me.value){Er();return}P||(P=p);const d=(p-P)/1e3;P=p,z=bf(z,Sf(),YR*d),q+=z*Ru*d;const v=Math.trunc(q);if(v>0&&(window.scrollBy({top:v,behavior:"auto"}),q-=v),cl()){tn();return}vf()}function vf(){document.hidden||(h=window.setTimeout(()=>{h=0,S=requestAnimationFrame(dn)},o$))}function ml(){!document.hidden&&n.value==="reader"&&Me.value&&!S&&!h&&(P=0,S=requestAnimationFrame(dn))}return Ts(()=>document.addEventListener("visibilitychange",ml)),Ls(()=>document.removeEventListener("visibilitychange",ml)),(p,d)=>(R(),N("div",{class:"app",style:Ws({"--reader-scale":Ne.value,"--liturgical-color":ha.value,"--celebration-color":gr.value,"--notation-color":Ma.value,"--scroll-speed-color":ke.value})},[b("main",{class:Re(["app-shell",{"is-reader":n.value!=="home"}])},[n.value==="home"?(R(),N(Se,{key:0},[b("section",OD,[b("button",{type:"button",class:"icon-button date-nav-button","aria-label":"Día anterior",onClick:d[0]||(d[0]=v=>al(-1))},[Pe(pe(bi),{size:24})]),b("div",CD,[b("p",DD,K(jp(se.value)),1),b("h1",null,K(ne.value?.celebration||pe(Ec)(se.value)),1),b("div",RD,[ne.value?.psaltery_week?(R(),N("span",$D,"Salterio "+K(ne.value.psaltery_week),1)):ue("",!0),ne.value?.cycle?(R(),N("span",TD,"Ciclo "+K(ne.value.cycle),1)):ue("",!0),ne.value?.rank?(R(),N("span",LD,K(Yp(ne.value.rank)),1)):ue("",!0)])]),b("button",{type:"button",class:"icon-button date-nav-button","aria-label":"Día siguiente",onClick:d[1]||(d[1]=v=>al(1))},[Pe(pe(wd),{size:24})]),b("button",{type:"button",class:Re(["icon-button calendar-toggle-button",{active:f.value}]),"aria-label":"Abrir calendario",onClick:d[2]||(d[2]=v=>f.value=!f.value)},[Pe(pe(Zl),{size:18})],2),f.value?(R(),N("div",MD,[b("label",ND,[Pe(pe(Zl),{size:18}),ao(b("input",{"onUpdate:modelValue":d[3]||(d[3]=v=>t.value=v),type:"date",onChange:d[4]||(d[4]=v=>f.value=!1)},null,544),[[Es,t.value]])]),b("button",{type:"button",class:"text-button",onClick:Gp},"Hoy")])):ue("",!0)]),b("div",_D,[b("section",zD,[d[23]||(d[23]=b("div",{class:"panel-title"},[b("div",null,[b("p",{class:"home-date"},"Liturgia")])],-1)),b("button",{type:"button",class:Re(["office-strip office-strip-prelude",{active:X.value===o.key}]),onClick:d[5]||(d[5]=v=>rn(o.key))},[(R(),Qo(In(o.icon),{size:18})),b("span",null,K(o.label),1)],2),b("div",JD,[(R(),N(Se,null,yo(a,v=>b("button",{key:v.key,type:"button",class:Re(["office-card",{active:X.value===v.key}]),onClick:F=>rn(v.key)},[(R(),Qo(In(v.icon),{size:22})),b("span",null,K(v.label),1)],10,jD)),64))]),b("div",xD,[(R(),N(Se,null,yo(s,v=>b("button",{key:v.key,type:"button",class:"office-strip",onClick:F=>v.open()},[(R(),Qo(In(v.icon),{size:18})),b("span",null,K(v.label),1)],8,UD)),64))])]),b("aside",HD,[b("section",VD,[b("div",wD,[d[24]||(d[24]=b("span",{class:"panel-title-spacer","aria-hidden":"true"},null,-1)),d[25]||(d[25]=b("div",null,[b("p",{class:"home-date"},"Preces")],-1)),b("button",{type:"button",class:Re(["intentions-refresh-button",{"is-stale":mp.value,"is-syncing":ve.value}]),disabled:ve.value,title:"Recargar intenciones desde la nube","aria-label":"Recargar intenciones desde la nube",onClick:Sp},[Pe(pe(Vb),{size:16})],10,FD)]),ao(b("textarea",{"onUpdate:modelValue":d[6]||(d[6]=v=>J.value=v),class:"long-textarea",placeholder:"Intenciones personales"},null,512),[[Es,J.value]]),So.value?(R(),N("p",kD,K(So.value),1)):ue("",!0)]),b("section",BD,[d[50]||(d[50]=b("div",{class:"panel-title"},[b("div",null,[b("p",{class:"home-date"},"Ajustes")])],-1)),b("div",YD,[d[26]||(d[26]=b("label",{for:"font-scale"},"Texto",-1)),b("div",GD,[ao(b("input",{id:"font-scale","onUpdate:modelValue":d[7]||(d[7]=v=>y.value=v),type:"range",min:"0",max:"20",step:"1"},null,512),[[Es,y.value,void 0,{number:!0}]]),b("span",null,K(y.value),1)])]),b("div",QD,[d[31]||(d[31]=b("label",null,"Laudes",-1)),b("label",WD,[ao(b("input",{"onUpdate:modelValue":d[8]||(d[8]=v=>I.value=v),type:"checkbox"},null,512),[[ca,I.value]]),d[27]||(d[27]=b("span",{class:"switch-track"},null,-1)),d[28]||(d[28]=b("strong",null,"Invitatorio",-1))]),b("label",KD,[ao(b("input",{"onUpdate:modelValue":d[9]||(d[9]=v=>_.value=v),type:"checkbox"},null,512),[[ca,_.value]]),d[29]||(d[29]=b("span",{class:"switch-track"},null,-1)),d[30]||(d[30]=b("strong",null,"Consagración a María",-1))])]),b("div",XD,[d[33]||(d[33]=b("label",null,"Modo coro",-1)),b("label",ZD,[ao(b("input",{"onUpdate:modelValue":d[10]||(d[10]=v=>M.value=v),type:"checkbox"},null,512),[[ca,M.value]]),d[32]||(d[32]=b("span",{class:"switch-track"},null,-1)),b("strong",null,K(M.value?"Activado":"Desactivado"),1)])]),b("div",eR,[d[35]||(d[35]=b("label",null,"Modo sacerdote",-1)),b("label",oR,[ao(b("input",{"onUpdate:modelValue":d[11]||(d[11]=v=>E.value=v),type:"checkbox"},null,512),[[ca,E.value]]),d[34]||(d[34]=b("span",{class:"switch-track"},null,-1)),b("strong",null,K(E.value?"Activado":"Desactivado"),1)]),d[36]||(d[36]=b("p",{class:"setting-hint"}," Apagado, la Misa muestra solo lo que canta el coro. Encendido, la Misa entera. ",-1))]),b("div",aR,[d[38]||(d[38]=b("label",null,"Indicaciones posturales",-1)),b("label",sR,[ao(b("input",{"onUpdate:modelValue":d[12]||(d[12]=v=>$.value=v),type:"checkbox"},null,512),[[ca,$.value]]),d[37]||(d[37]=b("span",{class:"switch-track"},null,-1)),b("strong",null,K($.value?"Activado":"Desactivado"),1)])]),b("div",nR,[d[40]||(d[40]=b("label",null,"Ornamentos en solemnidades",-1)),b("label",rR,[ao(b("input",{"onUpdate:modelValue":d[13]||(d[13]=v=>H.value=v),type:"checkbox"},null,512),[[ca,H.value]]),d[39]||(d[39]=b("span",{class:"switch-track"},null,-1)),b("strong",null,K(H.value?"Activado":"Desactivado"),1)])]),b("div",iR,[d[41]||(d[41]=b("label",null,"Padrenuestro",-1)),b("div",tR,[b("button",{type:"button",class:Re({active:k.value==="es"}),onClick:d[14]||(d[14]=v=>k.value="es")}," Español ",2),b("button",{type:"button",class:Re({active:k.value==="la"}),onClick:d[15]||(d[15]=v=>k.value="la")}," Latín ",2)])]),b("div",lR,[d[44]||(d[44]=b("label",null,"Desplazamiento",-1)),b("label",cR,[ao(b("input",{"onUpdate:modelValue":d[16]||(d[16]=v=>ce.value=v),type:"checkbox"},null,512),[[ca,ce.value]]),d[42]||(d[42]=b("span",{class:"switch-track"},null,-1)),d[43]||(d[43]=b("strong",null,"Con cámara",-1))])]),nn.value?.soportado?(R(),N("div",uR,[d[45]||(d[45]=b("label",null,"Bloquear el móvil al terminar (doble toque en la burbuja)",-1)),b("div",dR,[b("button",{type:"button",class:Re({active:nn.value.activo}),onClick:d[17]||(d[17]=v=>pe(QA)())},K(nn.value.activo?"Activado":"Desactivado: activar en Accesibilidad"),3)])])):ue("",!0),pe(mt)()?(R(),N("div",mR,[d[48]||(d[48]=b("label",null,"Avisos",-1)),b("label",pR,[ao(b("input",{"onUpdate:modelValue":d[18]||(d[18]=v=>Ke.value=v),type:"checkbox"},null,512),[[ca,Ke.value]]),d[46]||(d[46]=b("span",{class:"switch-track"},null,-1)),d[47]||(d[47]=b("strong",null,"Tercia 9:00, Sexta 12:00, Nona 15:00, Vísperas 18:00, Completas 21:00",-1))])])):ue("",!0),b("div",fR,[d[49]||(d[49]=b("label",null,"Velocidad de desplazamiento",-1)),b("div",gR,[ao(b("input",{id:"auto-scroll-speed","onUpdate:modelValue":d[19]||(d[19]=v=>we.value=v),type:"range",min:"0",max:qe.length-1,step:"1","aria-label":"Velocidad de desplazamiento","aria-valuetext":`${Ze.value.label}: ${Ze.value.description}`},null,8,SR),[[Es,we.value,void 0,{number:!0}]]),b("div",bR,[(R(),N(Se,null,yo(qe,(v,F)=>b("button",{key:v.key,type:"button",class:Re(["scroll-speed-option",{active:v.speed===Le.value}]),"aria-pressed":v.speed===Le.value,onClick:le=>Np(F)},[b("strong",null,K(v.label),1)],10,vR)),64))])])])]),Pe(gy)])])],64)):n.value==="bible"?(R(),Qo(kv,{key:1,book:r.value,chapter:i.value,onSelectBook:df,onSelectChapter:mf,onBack:pf},null,8,["book","chapter"])):(R(),N(Se,{key:2},[b("article",{class:Re(["reader-surface",{"is-ornamented":D.value}])},[b("div",yR,[b("div",null,[D.value?(R(),N("span",{key:0,class:"ornamento ornamento-cabecera","aria-hidden":"true",innerHTML:pe(zh)},null,8,hR)):ue("",!0),ne.value?.celebration?(R(),N("p",ER,[D.value?(R(),N("span",{key:0,class:"ornamento reader-celebration-racimo","aria-hidden":"true",innerHTML:pe(bc)},null,8,AR)):(R(),N("span",PR)),b("span",qR,K(ne.value.celebration),1),D.value?(R(),N("span",{key:2,class:"ornamento reader-celebration-racimo","aria-hidden":"true",innerHTML:pe(bc)},null,8,IR)):(R(),N("span",OR))])):ue("",!0),b("h1",null,K(pe(fu)[X.value]),1),b("p",CR,K(Gt(pe(Ec)(se.value))),1)])]),X.value==="officium"?(R(),N("div",DR,[X.value==="officium"?ao((R(),N("select",{key:0,"onUpdate:modelValue":d[20]||(d[20]=v=>O.value=v)},[...d[51]||(d[51]=[b("option",{value:"a"},"Anual",-1),b("option",{value:"i"},"Impar",-1),b("option",{value:"p"},"Par",-1)])],512)),[[jS,O.value]]):ue("",!0)])):ue("",!0),lo.value&&u.value?.options.length?(R(),N("div",RR,[b("div",$R,[d[52]||(d[52]=b("p",{class:"kicker"},"Hoy hay opciones",-1)),d[53]||(d[53]=b("h2",null,"¿Qué quieres recitar?",-1)),d[54]||(d[54]=b("p",{class:"option-choice-subtitle"},"Selecciona la opción de esta fecha.",-1)),b("div",TR,[(R(!0),N(Se,null,yo(u.value.options,(v,F)=>(R(),N("button",{key:`${v.id}-${F}`,type:"button",class:"option-choice-item",onClick:le=>Rp(F)},K(pe(ai)(v,F)),9,LR))),128))])])])):ue("",!0),c.value?(R(),N("div",MR,[...d[55]||(d[55]=[b("span",null,null,-1),ea(" Cargando oración ",-1)])])):m.value?(R(),N("div",NR,K(m.value),1)):re.value.length?(R(),N(Se,{key:5},[(R(!0),N(Se,null,yo(re.value,(v,F)=>(R(),N(Se,{key:`${v.title}-${v.eyebrow}`},[D.value?(R(),N("span",{key:0,class:Re(["ornamento ornamento-divisor",{"is-breve":pe(Sc)(re.value[F-1]?.title,v.title)==="breve"}]),"aria-hidden":"true",innerHTML:pe(Sc)(re.value[F-1]?.title,v.title)==="breve"?pe(Nh):pe(Mh)},null,10,zR)):ue("",!0),Pe(dE,{section:v,ornamented:D.value,"alternative-index":Cp(v),"notation-enabled":M.value,"notation-mode":vp(v,F),"chant-picker-enabled":X.value==="laudes","posture-instructions-enabled":$.value,"capitular-enabled":ee.value,"capo-offset":Ap(v),"inherited-capo-offset":Pp(v),"chant-key":Ft(v),"historic-chant-key":qp(v),"taken-chant-keys":Ip(v),"onUpdate:alternativeIndex":le=>Dp(v,le),"onUpdate:notationMode":le=>yp(v,F,le),onChantSelected:le=>hp(v,le),onCapoCycled:le=>Op(F,le)},null,8,["section","ornamented","alternative-index","notation-enabled","notation-mode","chant-picker-enabled","posture-instructions-enabled","capitular-enabled","capo-offset","inherited-capo-offset","chant-key","historic-chant-key","taken-chant-keys","onUpdate:alternativeIndex","onUpdate:notationMode","onChantSelected","onCapoCycled"])],64))),128)),D.value?(R(),N("span",{key:0,class:"ornamento ornamento-colofon","aria-hidden":"true",innerHTML:pe(jh)},null,8,JR)):ue("",!0)],64)):(R(),N("div",_R," No hay contenido disponible para esta hora. "))],2),ao(b("button",{type:"button",class:Re(["floating-scroll-button floating-video-button",{active:ce.value?T.value:Me.value}]),"aria-label":ce.value?T.value?"Cancelar grabación y scroll":"Grabar vídeo y hacer scroll":Me.value?"Pausar scroll":"Iniciar scroll",onClick:sf,onDblclick:nf},[ce.value?(R(),Qo(pe(yv),{key:0,size:18})):Me.value?(R(),Qo(pe(xb),{key:1,size:18})):(R(),Qo(pe(Fd),{key:2,size:18}))],42,jR),[[Nl,!Y.value]]),ao(b("video",{ref_key:"cameraPreviewVideo",ref:A,class:"camera-preview-bubble",autoplay:"",muted:"",playsinline:"",onDblclick:Ar},null,544),[[Nl,Y.value]])],64))],2),Xe.value?(R(),N("div",xR,[b("div",UR,[d[56]||(d[56]=b("p",{class:"kicker"},"Solemnidad elegida",-1)),d[57]||(d[57]=b("h2",null,"¿Padrenuestro en latín?",-1)),d[58]||(d[58]=b("p",{class:"option-choice-subtitle"}," Esta opción es solemnidad; elige cómo quieres rezar el Padrenuestro. ",-1)),b("div",HR,[b("button",{type:"button",class:"option-choice-item",onClick:d[21]||(d[21]=v=>rl("es"))}," Español "),b("button",{type:"button",class:"option-choice-item",onClick:d[22]||(d[22]=v=>rl("la"))}," Latín ")])])])):ue("",!0)],4))}}),s$="__capgo_keep_url_path_after_reload",ri="__capgo_history_stack__",Lu=100,n$=typeof window<"u"&&typeof document<"u"&&typeof history<"u";if(n$){const e=window;if(!e.__capgoHistoryPatched){e.__capgoHistoryPatched=!0;const o=()=>{try{if(e.__capgoKeepUrlPathAfterReload)return!0}catch{}try{return window.localStorage.getItem(s$)==="1"}catch{return!1}},a=()=>{try{const E=window.sessionStorage.getItem(ri);if(!E)return{stack:[],index:-1};const $=JSON.parse(E);return!$||!Array.isArray($.stack)||typeof $.index!="number"?{stack:[],index:-1}:$}catch{return{stack:[],index:-1}}},s=(E,$)=>{try{window.sessionStorage.setItem(ri,JSON.stringify({stack:E,index:$}))}catch{}},n=()=>{try{window.sessionStorage.removeItem(ri)}catch{}},r=E=>{try{const $=E??window.location.href,H=new URL($ instanceof URL?$.toString():$,window.location.href);return`${H.pathname}${H.search}${H.hash}`}catch{return null}},i=(E,$)=>{if(E.length<=Lu)return{stack:E,index:$};const H=E.length-Lu,x=E.slice(H),W=Math.max(0,$-H);return{stack:x,index:W}},t=E=>{document.readyState==="complete"||document.readyState==="interactive"?E():window.addEventListener("DOMContentLoaded",E,{once:!0})};let l=!1,u=!1,c=!1;const m=()=>{if(!l)return;const E=a(),$=r();if($){if(E.stack.length===0){E.stack.push($),E.index=0,s(E.stack,E.index);return}(E.index<0||E.index>=E.stack.length)&&(E.index=E.stack.length-1),E.stack[E.index]!==$&&(E.stack[E.index]=$,s(E.stack,E.index))}},f=(E,$)=>{if(!l||u)return;const H=r(E);if(!H)return;let{stack:x,index:W}=a();x.length===0?(x.push(H),W=x.length-1):$?((W<0||W>=x.length)&&(W=x.length-1),x[W]=H):W>=x.length-1?(x.push(H),W=x.length-1):(x=x.slice(0,W+1),x.push(H),W=x.length-1),{stack:x,index:W}=i(x,W),s(x,W)},y=()=>{if(!l||u)return;const E=a();if(E.stack.length===0){m();return}const $=E.index>=0&&E.index<E.stack.length?E.index:E.stack.length-1,H=r();if(E.stack.length===1&&H===E.stack[0])return;const x=E.stack[0];if(!x)return;u=!0;try{history.replaceState(history.state,document.title,x);for(let Ee=1;Ee<E.stack.length;Ee+=1)history.pushState(history.state,document.title,E.stack[Ee])}catch{u=!1;return}u=!1;const W=E.stack.length-1,ae=$-W;ae!==0?history.go(ae):(history.replaceState(history.state,document.title,E.stack[$]),window.dispatchEvent(new PopStateEvent("popstate")))},O=()=>{!l||c||(c=!0,t(()=>{c=!1,y()}))};let I=null,_=null;const V=()=>{if(!l||u)return;const E=r();if(!E)return;const $=a(),H=$.stack.lastIndexOf(E);H>=0?$.index=H:($.stack.push(E),$.index=$.stack.length-1);const x=i($.stack,$.index);s(x.stack,x.index)},k=()=>{I&&_||(I=history.pushState,_=history.replaceState,history.pushState=function($,H,x){const W=I?.call(history,$,H,x);return f(x,!1),W},history.replaceState=function($,H,x){const W=_?.call(history,$,H,x);return f(x,!0),W},window.addEventListener("popstate",V))},J=()=>{I&&(history.pushState=I,I=null),_&&(history.replaceState=_,_=null),window.removeEventListener("popstate",V)},M=E=>{if(l===E){l&&(m(),O());return}l=E,l?(k(),m(),O()):(J(),n())};window.addEventListener("CapacitorUpdaterKeepUrlPathAfterReload",E=>{var $;const H=E,x=($=H?.detail)===null||$===void 0?void 0:$.enabled;typeof x=="boolean"?(e.__capgoKeepUrlPathAfterReload=x,M(x)):(e.__capgoKeepUrlPathAfterReload=!0,M(!0))}),M(o())}}var Mu;(function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.UPDATE_NOT_AVAILABLE=1]="UPDATE_NOT_AVAILABLE",e[e.UPDATE_AVAILABLE=2]="UPDATE_AVAILABLE",e[e.UPDATE_IN_PROGRESS=3]="UPDATE_IN_PROGRESS"})(Mu||(Mu={}));var Nu;(function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.PENDING=1]="PENDING",e[e.DOWNLOADING=2]="DOWNLOADING",e[e.INSTALLING=3]="INSTALLING",e[e.INSTALLED=4]="INSTALLED",e[e.FAILED=5]="FAILED",e[e.CANCELED=6]="CANCELED",e[e.DOWNLOADED=11]="DOWNLOADED"})(Nu||(Nu={}));var _u;(function(e){e[e.OK=0]="OK",e[e.CANCELED=1]="CANCELED",e[e.FAILED=2]="FAILED",e[e.NOT_AVAILABLE=3]="NOT_AVAILABLE",e[e.NOT_ALLOWED=4]="NOT_ALLOWED",e[e.INFO_MISSING=5]="INFO_MISSING"})(_u||(_u={}));const Mi=rs("CapacitorUpdater",{web:()=>te(()=>import("./web-BCav4llp.js"),[],import.meta.url).then(e=>new e.CapacitorUpdaterWeb)}),zu="https://lucasague.github.io/liturgiadelashoras/",r$=1800*1e3;async function i$(){if(navigator.onLine===!1)return;const e=await fetch(`${zu}version.json?t=${Date.now()}`,{cache:"no-store"});if(!e.ok)return;const{builtAt:o}=await e.json();if(typeof o!="number"||o<=1793877850048)return;const a=Number(localStorage.getItem("laudes:ota-descargada")??0);if(o<=a)return;const s=await Mi.download({url:`${zu}bundle.zip`,version:String(o)});await Mi.next({id:s.id}),localStorage.setItem("laudes:ota-descargada",String(o))}function t$(){if(!qo.isNativePlatform())return;Mi.notifyAppReady().catch(()=>{});const e=()=>{i$().catch(()=>{})};e(),window.setInterval(e,r$),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&e()})}qo.isNativePlatform()?t$():BS({immediate:!0,onNeedReload:LA,onRegisteredSW:(e,o)=>MA(o)});HS(a$).mount("#app");export{Mu as A,Xi as W};
//# sourceMappingURL=index-7PuwcubZ.js.map
