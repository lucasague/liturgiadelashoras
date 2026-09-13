(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}})();/**
* @vue/shared v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Xr(e){const o=Object.create(null);for(const a of e.split(","))o[a]=1;return a=>a in o}const Ae={},Da=[],No=()=>{},zc=()=>!1,Sn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),bn=e=>e.startsWith("onUpdate:"),Ve=Object.assign,Zr=(e,o)=>{const a=e.indexOf(o);a>-1&&e.splice(a,1)},gp=Object.prototype.hasOwnProperty,ye=(e,o)=>gp.call(e,o),Q=Array.isArray,Ra=e=>Ps(e)==="[object Map]",xa=e=>Ps(e)==="[object Set]",It=e=>Ps(e)==="[object Date]",K=e=>typeof e=="function",Me=e=>typeof e=="string",_o=e=>typeof e=="symbol",he=e=>e!==null&&typeof e=="object",Jc=e=>(he(e)||K(e))&&K(e.then)&&K(e.catch),jc=Object.prototype.toString,Ps=e=>jc.call(e),Sp=e=>Ps(e).slice(8,-1),Uc=e=>Ps(e)==="[object Object]",ei=e=>Me(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ns=Xr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),yn=e=>{const o=Object.create(null);return(a=>o[a]||(o[a]=e(a)))},bp=/-\w/g,ao=yn(e=>e.replace(bp,o=>o.slice(1).toUpperCase())),yp=/\B([A-Z])/g,va=yn(e=>e.replace(yp,"-$1").toLowerCase()),vn=yn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Yn=yn(e=>e?`on${vn(e)}`:""),To=(e,o)=>!Object.is(e,o),Ys=(e,...o)=>{for(let a=0;a<e.length;a++)e[a](...o)},Hc=(e,o,a,s=!1)=>{Object.defineProperty(e,o,{configurable:!0,enumerable:!1,writable:s,value:a})},hn=e=>{const o=parseFloat(e);return isNaN(o)?e:o};let Ct;const En=()=>Ct||(Ct=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function qs(e){if(Q(e)){const o={};for(let a=0;a<e.length;a++){const s=e[a],n=Me(s)?Ap(s):qs(s);if(n)for(const r in n)o[r]=n[r]}return o}else if(Me(e)||he(e))return e}const vp=/;(?![^(]*\))/g,hp=/:([^]+)/,Ep=/\/\*[^]*?\*\//g;function Ap(e){const o={};return e.replace(Ep,"").split(vp).forEach(a=>{if(a){const s=a.split(hp);s.length>1&&(o[s[0].trim()]=s[1].trim())}}),o}function Le(e){let o="";if(Me(e))o=e;else if(Q(e))for(let a=0;a<e.length;a++){const s=Le(e[a]);s&&(o+=s+" ")}else if(he(e))for(const a in e)e[a]&&(o+=a+" ");return o.trim()}const Pp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qp=Xr(Pp);function xc(e){return!!e||e===""}function Ip(e,o){if(e.length!==o.length)return!1;let a=!0;for(let s=0;a&&s<e.length;s++)a=Va(e[s],o[s]);return a}function Va(e,o){if(e===o)return!0;let a=It(e),s=It(o);if(a||s)return a&&s?e.getTime()===o.getTime():!1;if(a=_o(e),s=_o(o),a||s)return e===o;if(a=Q(e),s=Q(o),a||s)return a&&s?Ip(e,o):!1;if(a=he(e),s=he(o),a||s){if(!a||!s)return!1;const n=Object.keys(e).length,r=Object.keys(o).length;if(n!==r)return!1;for(const i in e){const t=e.hasOwnProperty(i),l=o.hasOwnProperty(i);if(t&&!l||!t&&l||!Va(e[i],o[i]))return!1}}return String(e)===String(o)}function oi(e,o){return e.findIndex(a=>Va(a,o))}const Vc=e=>!!(e&&e.__v_isRef===!0),G=e=>Me(e)?e:e==null?"":Q(e)||he(e)&&(e.toString===jc||!K(e.toString))?Vc(e)?G(e.value):JSON.stringify(e,Fc,2):String(e),Fc=(e,o)=>Vc(o)?Fc(e,o.value):Ra(o)?{[`Map(${o.size})`]:[...o.entries()].reduce((a,[s,n],r)=>(a[Gn(s,r)+" =>"]=n,a),{})}:xa(o)?{[`Set(${o.size})`]:[...o.values()].map(a=>Gn(a))}:_o(o)?Gn(o):he(o)&&!Q(o)&&!Uc(o)?String(o):o,Gn=(e,o="")=>{var a;return _o(e)?`Symbol(${(a=e.description)!=null?a:o})`:e};/**
* @vue/reactivity v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xe;class Cp{constructor(o=!1){this.detached=o,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!o&&xe&&(xe.active?(this.parent=xe,this.index=(xe.scopes||(xe.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let o,a;if(this.scopes){const s=this.scopes.slice();for(o=0,a=s.length;o<a;o++)s[o].pause()}for(o=0,a=this.effects.length;o<a;o++)this.effects[o].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let o,a;if(this.scopes){const n=this.scopes.slice();for(o=0,a=n.length;o<a;o++)n[o].resume()}const s=this.effects.slice();for(o=0,a=s.length;o<a;o++)s[o].resume()}}run(o){if(this._active){const a=xe;try{return xe=this,o()}finally{xe=a}}}on(){++this._on===1&&(this.prevScope=xe,xe=this)}off(){if(this._on>0&&--this._on===0){if(xe===this)xe=this.prevScope;else{let o=xe;for(;o;){if(o.prevScope===this){o.prevScope=this.prevScope;break}o=o.prevScope}}this.prevScope=void 0}}stop(o){if(this._active){this._active=!1;let a,s;for(a=0,s=this.effects.length;a<s;a++)this.effects[a].stop();for(this.effects.length=0,a=0,s=this.cleanups.length;a<s;a++)this.cleanups[a]();if(this.cleanups.length=0,this.scopes){const n=this.scopes.slice();for(a=0,s=n.length;a<s;a++)n[a].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!o){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0}}}function Op(){return xe}let Oe;const Qn=new WeakSet;class wc{constructor(o){this.fn=o,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,xe&&(xe.active?xe.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Qn.has(this)&&(Qn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Bc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ot(this),Yc(this);const o=Oe,a=ho;Oe=this,ho=!0;try{return this.fn()}finally{Gc(this),Oe=o,ho=a,this.flags&=-3}}stop(){if(this.flags&1){for(let o=this.deps;o;o=o.nextDep)ni(o);this.deps=this.depsTail=void 0,Ot(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Qn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Cr(this)&&this.run()}get dirty(){return Cr(this)}}let kc=0,rs,is;function Bc(e,o=!1){if(e.flags|=8,o){e.next=is,is=e;return}e.next=rs,rs=e}function ai(){kc++}function si(){if(--kc>0)return;if(is){let o=is;for(is=void 0;o;){const a=o.next;o.next=void 0,o.flags&=-9,o=a}}let e;for(;rs;){let o=rs;for(rs=void 0;o;){const a=o.next;if(o.next=void 0,o.flags&=-9,o.flags&1)try{o.trigger()}catch(s){e||(e=s)}o=a}}if(e)throw e}function Yc(e){for(let o=e.deps;o;o=o.nextDep)o.version=-1,o.prevActiveLink=o.dep.activeLink,o.dep.activeLink=o}function Gc(e){let o,a=e.depsTail,s=a;for(;s;){const n=s.prevDep;s.version===-1?(s===a&&(a=n),ni(s),Dp(s)):o=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=n}e.deps=o,e.depsTail=a}function Cr(e){for(let o=e.deps;o;o=o.nextDep)if(o.dep.version!==o.version||o.dep.computed&&(Qc(o.dep.computed)||o.dep.version!==o.version))return!0;return!!e._dirty}function Qc(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===ms)||(e.globalVersion=ms,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Cr(e))))return;e.flags|=2;const o=e.dep,a=Oe,s=ho;Oe=e,ho=!0;try{Yc(e);const n=e.fn(e._value);(o.version===0||To(n,e._value))&&(e.flags|=128,e._value=n,o.version++)}catch(n){throw o.version++,n}finally{Oe=a,ho=s,Gc(e),e.flags&=-3}}function ni(e,o=!1){const{dep:a,prevSub:s,nextSub:n}=e;if(s&&(s.nextSub=n,e.prevSub=void 0),n&&(n.prevSub=s,e.nextSub=void 0),a.subs===e&&(a.subs=s,!s&&a.computed)){a.computed.flags&=-5;for(let r=a.computed.deps;r;r=r.nextDep)ni(r,!0)}!o&&!--a.sc&&a.map&&a.map.delete(a.key)}function Dp(e){const{prevDep:o,nextDep:a}=e;o&&(o.nextDep=a,e.prevDep=void 0),a&&(a.prevDep=o,e.nextDep=void 0)}let ho=!0;const Wc=[];function Bo(){Wc.push(ho),ho=!1}function Yo(){const e=Wc.pop();ho=e===void 0?!0:e}function Ot(e){const{cleanup:o}=e;if(e.cleanup=void 0,o){const a=Oe;Oe=void 0;try{o()}finally{Oe=a}}}let ms=0;class Rp{constructor(o,a){this.sub=o,this.dep=a,this.version=a.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ri{constructor(o){this.computed=o,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(o){if(!Oe||!ho||Oe===this.computed)return;let a=this.activeLink;if(a===void 0||a.sub!==Oe)a=this.activeLink=new Rp(Oe,this),Oe.deps?(a.prevDep=Oe.depsTail,Oe.depsTail.nextDep=a,Oe.depsTail=a):Oe.deps=Oe.depsTail=a,Kc(a);else if(a.version===-1&&(a.version=this.version,a.nextDep)){const s=a.nextDep;s.prevDep=a.prevDep,a.prevDep&&(a.prevDep.nextDep=s),a.prevDep=Oe.depsTail,a.nextDep=void 0,Oe.depsTail.nextDep=a,Oe.depsTail=a,Oe.deps===a&&(Oe.deps=s)}return a}trigger(o){this.version++,ms++,this.notify(o)}notify(o){ai();try{for(let a=this.subs;a;a=a.prevSub)a.sub.notify()&&a.sub.dep.notify()}finally{si()}}}function Kc(e){if(e.dep.sc++,e.sub.flags&4){const o=e.dep.computed;if(o&&!e.dep.subs){o.flags|=20;for(let s=o.deps;s;s=s.nextDep)Kc(s)}const a=e.dep.subs;a!==e&&(e.prevSub=a,a&&(a.nextSub=e)),e.dep.subs=e}}const Or=new WeakMap,fa=Symbol(""),Dr=Symbol(""),ps=Symbol("");function Ge(e,o,a){if(ho&&Oe){let s=Or.get(e);s||Or.set(e,s=new Map);let n=s.get(a);n||(s.set(a,n=new ri),n.map=s,n.key=a),n.track()}}function Fo(e,o,a,s,n,r){const i=Or.get(e);if(!i){ms++;return}const t=l=>{l&&l.trigger()};if(ai(),o==="clear")i.forEach(t);else{const l=Q(e),u=l&&ei(a);if(l&&a==="length"){const c=Number(s);i.forEach((m,f)=>{(f==="length"||f===ps||!_o(f)&&f>=c)&&t(m)})}else switch((a!==void 0||i.has(void 0))&&t(i.get(a)),u&&t(i.get(ps)),o){case"add":l?u&&t(i.get("length")):(t(i.get(fa)),Ra(e)&&t(i.get(Dr)));break;case"delete":l||(t(i.get(fa)),Ra(e)&&t(i.get(Dr)));break;case"set":Ra(e)&&t(i.get(fa));break}}si()}function Aa(e){const o=be(e);return o===e?o:(Ge(o,"iterate",ps),So(e)?o:o.map(Eo))}function An(e){return Ge(e=be(e),"iterate",ps),e}function Ro(e,o){return Go(e)?Ma(ga(e)?Eo(o):o):Eo(o)}const $p={__proto__:null,[Symbol.iterator](){return Wn(this,Symbol.iterator,e=>Ro(this,e))},concat(...e){return Aa(this).concat(...e.map(o=>Q(o)?Aa(o):o))},entries(){return Wn(this,"entries",e=>(e[1]=Ro(this,e[1]),e))},every(e,o){return Uo(this,"every",e,o,void 0,arguments)},filter(e,o){return Uo(this,"filter",e,o,a=>a.map(s=>Ro(this,s)),arguments)},find(e,o){return Uo(this,"find",e,o,a=>Ro(this,a),arguments)},findIndex(e,o){return Uo(this,"findIndex",e,o,void 0,arguments)},findLast(e,o){return Uo(this,"findLast",e,o,a=>Ro(this,a),arguments)},findLastIndex(e,o){return Uo(this,"findLastIndex",e,o,void 0,arguments)},forEach(e,o){return Uo(this,"forEach",e,o,void 0,arguments)},includes(...e){return Kn(this,"includes",e)},indexOf(...e){return Kn(this,"indexOf",e)},join(e){return Aa(this).join(e)},lastIndexOf(...e){return Kn(this,"lastIndexOf",e)},map(e,o){return Uo(this,"map",e,o,void 0,arguments)},pop(){return Ya(this,"pop")},push(...e){return Ya(this,"push",e)},reduce(e,...o){return Dt(this,"reduce",e,o)},reduceRight(e,...o){return Dt(this,"reduceRight",e,o)},shift(){return Ya(this,"shift")},some(e,o){return Uo(this,"some",e,o,void 0,arguments)},splice(...e){return Ya(this,"splice",e)},toReversed(){return Aa(this).toReversed()},toSorted(e){return Aa(this).toSorted(e)},toSpliced(...e){return Aa(this).toSpliced(...e)},unshift(...e){return Ya(this,"unshift",e)},values(){return Wn(this,"values",e=>Ro(this,e))}};function Wn(e,o,a){const s=An(e),n=s[o]();return s!==e&&!So(e)&&(n._next=n.next,n.next=()=>{const r=n._next();return r.done||(r.value=a(r.value)),r}),n}const Tp=Array.prototype;function Uo(e,o,a,s,n,r){const i=An(e),t=i!==e&&!So(e),l=i[o];if(l!==Tp[o]){const m=l.apply(e,r);return t?Eo(m):m}let u=a;i!==e&&(t?u=function(m,f){return a.call(this,Ro(e,m),f,e)}:a.length>2&&(u=function(m,f){return a.call(this,m,f,e)}));const c=l.call(i,u,s);return t&&n?n(c):c}function Dt(e,o,a,s){const n=An(e),r=n!==e&&!So(e);let i=a,t=!1;n!==e&&(r?(t=s.length===0,i=function(u,c,m){return t&&(t=!1,u=Ro(e,u)),a.call(this,u,Ro(e,c),m,e)}):a.length>3&&(i=function(u,c,m){return a.call(this,u,c,m,e)}));const l=n[o](i,...s);return t?Ro(e,l):l}function Kn(e,o,a){const s=be(e);Ge(s,"iterate",ps);const n=s[o](...a);return(n===-1||n===!1)&&ci(a[0])?(a[0]=be(a[0]),s[o](...a)):n}function Ya(e,o,a=[]){Bo(),ai();const s=be(e)[o].apply(e,a);return si(),Yo(),s}const Lp=Xr("__proto__,__v_isRef,__isVue"),Xc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(_o));function Mp(e){_o(e)||(e=String(e));const o=be(this);return Ge(o,"has",e),o.hasOwnProperty(e)}class Zc{constructor(o=!1,a=!1){this._isReadonly=o,this._isShallow=a}get(o,a,s){if(a==="__v_skip")return o.__v_skip;const n=this._isReadonly,r=this._isShallow;if(a==="__v_isReactive")return!n;if(a==="__v_isReadonly")return n;if(a==="__v_isShallow")return r;if(a==="__v_raw")return s===(n?r?Fp:su:r?au:ou).get(o)||Object.getPrototypeOf(o)===Object.getPrototypeOf(s)?o:void 0;const i=Q(o);if(!n){let l;if(i&&(l=$p[a]))return l;if(a==="hasOwnProperty")return Mp}const t=Reflect.get(o,a,Ke(o)?o:s);if((_o(a)?Xc.has(a):Lp(a))||(n||Ge(o,"get",a),r))return t;if(Ke(t)){const l=i&&ei(a)?t:t.value;return n&&he(l)?$r(l):l}return he(t)?n?$r(t):ti(t):t}}class eu extends Zc{constructor(o=!1){super(!1,o)}set(o,a,s,n){let r=o[a];const i=Q(o)&&ei(a);if(!this._isShallow){const u=Go(r);if(!So(s)&&!Go(s)&&(r=be(r),s=be(s)),!i&&Ke(r)&&!Ke(s))return u||(r.value=s),!0}const t=i?Number(a)<o.length:ye(o,a),l=Reflect.set(o,a,s,Ke(o)?o:n);return o===be(n)&&l&&(t?To(s,r)&&Fo(o,"set",a,s):Fo(o,"add",a,s)),l}deleteProperty(o,a){const s=ye(o,a);o[a];const n=Reflect.deleteProperty(o,a);return n&&s&&Fo(o,"delete",a,void 0),n}has(o,a){const s=Reflect.has(o,a);return(!_o(a)||!Xc.has(a))&&Ge(o,"has",a),s}ownKeys(o){return Ge(o,"iterate",Q(o)?"length":fa),Reflect.ownKeys(o)}}class Np extends Zc{constructor(o=!1){super(!0,o)}set(o,a){return!0}deleteProperty(o,a){return!0}}const _p=new eu,zp=new Np,Jp=new eu(!0);const Rr=e=>e,Js=e=>Reflect.getPrototypeOf(e);function jp(e,o,a){return function(...s){const n=this.__v_raw,r=be(n),i=Ra(r),t=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,u=n[e](...s),c=a?Rr:o?Ma:Eo;return!o&&Ge(r,"iterate",l?Dr:fa),Ve(Object.create(u),{next(){const{value:m,done:f}=u.next();return f?{value:m,done:f}:{value:t?[c(m[0]),c(m[1])]:c(m),done:f}}})}}function js(e){return function(...o){return e==="delete"?!1:e==="clear"?void 0:this}}function Up(e,o){const a={get(n){const r=this.__v_raw,i=be(r),t=be(n);e||(To(n,t)&&Ge(i,"get",n),Ge(i,"get",t));const{has:l}=Js(i),u=o?Rr:e?Ma:Eo;if(l.call(i,n))return u(r.get(n));if(l.call(i,t))return u(r.get(t));r!==i&&r.get(n)},get size(){const n=this.__v_raw;return!e&&Ge(be(n),"iterate",fa),n.size},has(n){const r=this.__v_raw,i=be(r),t=be(n);return e||(To(n,t)&&Ge(i,"has",n),Ge(i,"has",t)),n===t?r.has(n):r.has(n)||r.has(t)},forEach(n,r){const i=this,t=i.__v_raw,l=be(t),u=o?Rr:e?Ma:Eo;return!e&&Ge(l,"iterate",fa),t.forEach((c,m)=>n.call(r,u(c),u(m),i))}};return Ve(a,e?{add:js("add"),set:js("set"),delete:js("delete"),clear:js("clear")}:{add(n){const r=be(this),i=Js(r),t=be(n),l=!o&&!So(n)&&!Go(n)?t:n;return i.has.call(r,l)||To(n,l)&&i.has.call(r,n)||To(t,l)&&i.has.call(r,t)||(r.add(l),Fo(r,"add",l,l)),this},set(n,r){!o&&!So(r)&&!Go(r)&&(r=be(r));const i=be(this),{has:t,get:l}=Js(i);let u=t.call(i,n);u||(n=be(n),u=t.call(i,n));const c=l.call(i,n);return i.set(n,r),u?To(r,c)&&Fo(i,"set",n,r):Fo(i,"add",n,r),this},delete(n){const r=be(this),{has:i,get:t}=Js(r);let l=i.call(r,n);l||(n=be(n),l=i.call(r,n)),t&&t.call(r,n);const u=r.delete(n);return l&&Fo(r,"delete",n,void 0),u},clear(){const n=be(this),r=n.size!==0,i=n.clear();return r&&Fo(n,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(n=>{a[n]=jp(n,e,o)}),a}function ii(e,o){const a=Up(e,o);return(s,n,r)=>n==="__v_isReactive"?!e:n==="__v_isReadonly"?e:n==="__v_raw"?s:Reflect.get(ye(a,n)&&n in s?a:s,n,r)}const Hp={get:ii(!1,!1)},xp={get:ii(!1,!0)},Vp={get:ii(!0,!1)};const ou=new WeakMap,au=new WeakMap,su=new WeakMap,Fp=new WeakMap;function wp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ti(e){return Go(e)?e:li(e,!1,_p,Hp,ou)}function kp(e){return li(e,!1,Jp,xp,au)}function $r(e){return li(e,!0,zp,Vp,su)}function li(e,o,a,s,n){if(!he(e)||e.__v_raw&&!(o&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const r=n.get(e);if(r)return r;const i=wp(Sp(e));if(i===0)return e;const t=new Proxy(e,i===2?s:a);return n.set(e,t),t}function ga(e){return Go(e)?ga(e.__v_raw):!!(e&&e.__v_isReactive)}function Go(e){return!!(e&&e.__v_isReadonly)}function So(e){return!!(e&&e.__v_isShallow)}function ci(e){return e?!!e.__v_raw:!1}function be(e){const o=e&&e.__v_raw;return o?be(o):e}function Bp(e){return!ye(e,"__v_skip")&&Object.isExtensible(e)&&Hc(e,"__v_skip",!0),e}const Eo=e=>he(e)?ti(e):e,Ma=e=>he(e)?$r(e):e;function Ke(e){return e?e.__v_isRef===!0:!1}function w(e){return Yp(e,!1)}function Yp(e,o){return Ke(e)?e:new Gp(e,o)}class Gp{constructor(o,a){this.dep=new ri,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=a?o:be(o),this._value=a?o:Eo(o),this.__v_isShallow=a}get value(){return this.dep.track(),this._value}set value(o){const a=this._rawValue,s=this.__v_isShallow||So(o)||Go(o);o=s?o:be(o),To(o,a)&&(this._rawValue=o,this._value=s?o:Eo(o),this.dep.trigger())}}function Te(e){return Ke(e)?e.value:e}const Qp={get:(e,o,a)=>o==="__v_raw"?e:Te(Reflect.get(e,o,a)),set:(e,o,a,s)=>{const n=e[o];return Ke(n)&&!Ke(a)?(n.value=a,!0):Reflect.set(e,o,a,s)}};function nu(e){return ga(e)?e:new Proxy(e,Qp)}class Wp{constructor(o,a,s){this.fn=o,this.setter=a,this._value=void 0,this.dep=new ri(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ms-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!a,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Oe!==this)return Bc(this,!0),!0}get value(){const o=this.dep.track();return Qc(this),o&&(o.version=this.dep.version),this._value}set value(o){this.setter&&this.setter(o)}}function Kp(e,o,a=!1){let s,n;return K(e)?s=e:(s=e.get,n=e.set),new Wp(s,n,a)}const Us={},Xs=new WeakMap;let ua;function Xp(e,o=!1,a=ua){if(a){let s=Xs.get(a);s||Xs.set(a,s=[]),s.push(e)}}function Zp(e,o,a=Ae){const{immediate:s,deep:n,once:r,scheduler:i,augmentJob:t,call:l}=a,u=L=>n?L:So(L)||n===!1||n===0?wo(L,1):wo(L);let c,m,f,h,C=!1,O=!1;if(Ke(e)?(m=()=>e.value,C=So(e)):ga(e)?(m=()=>u(e),C=!0):Q(e)?(O=!0,C=e.some(L=>ga(L)||So(L)),m=()=>e.map(L=>{if(Ke(L))return L.value;if(ga(L))return u(L);if(K(L))return l?l(L,2):L()})):K(e)?o?m=l?()=>l(e,2):e:m=()=>{if(f){Bo();try{f()}finally{Yo()}}const L=ua;ua=c;try{return l?l(e,3,[h]):e(h)}finally{ua=L}}:m=No,o&&n){const L=m,j=n===!0?1/0:n;m=()=>wo(L(),j)}const J=Op(),H=()=>{c.stop(),J&&J.active&&Zr(J.effects,c)};if(r&&o){const L=o;o=(...j)=>{const X=L(...j);return H(),X}}let z=O?new Array(e.length).fill(Us):Us;const _=L=>{if(!(!(c.flags&1)||!c.dirty&&!L))if(o){const j=c.run();if(L||n||C||(O?j.some((X,me)=>To(X,z[me])):To(j,z))){f&&f();const X=ua;ua=c;try{const me=[j,z===Us?void 0:O&&z[0]===Us?[]:z,h];z=j,l?l(o,3,me):o(...me)}finally{ua=X}}}else c.run()};return t&&t(_),c=new wc(m),c.scheduler=i?()=>i(_,!1):_,h=L=>Xp(L,!1,c),f=c.onStop=()=>{const L=Xs.get(c);if(L){if(l)l(L,4);else for(const j of L)j();Xs.delete(c)}},o?s?_(!0):z=c.run():i?i(_.bind(null,!0),!0):c.run(),H.pause=c.pause.bind(c),H.resume=c.resume.bind(c),H.stop=H,H}function wo(e,o=1/0,a){if(o<=0||!he(e)||e.__v_skip||(a=a||new Map,(a.get(e)||0)>=o))return e;if(a.set(e,o),o--,Ke(e))wo(e.value,o,a);else if(Q(e))for(let s=0;s<e.length;s++)wo(e[s],o,a);else if(xa(e)||Ra(e))e.forEach(s=>{wo(s,o,a)});else if(Uc(e)){for(const s in e)wo(e[s],o,a);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&wo(e[s],o,a)}return e}/**
* @vue/runtime-core v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Is(e,o,a,s){try{return s?e(...s):e()}catch(n){Pn(n,o,a)}}function Ao(e,o,a,s){if(K(e)){const n=Is(e,o,a,s);return n&&Jc(n)&&n.catch(r=>{Pn(r,o,a)}),n}if(Q(e)){const n=[];for(let r=0;r<e.length;r++)n.push(Ao(e[r],o,a,s));return n}}function Pn(e,o,a,s=!0){const n=o?o.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:i}=o&&o.appContext.config||Ae;if(o){let t=o.parent;const l=o.proxy,u=`https://vuejs.org/error-reference/#runtime-${a}`;for(;t;){const c=t.ec;if(c){for(let m=0;m<c.length;m++)if(c[m](e,l,u)===!1)return}t=t.parent}if(r){Bo(),Is(r,null,10,[e,l,u]),Yo();return}}ef(e,a,n,s,i)}function ef(e,o,a,s=!0,n=!1){if(n)throw e;console.error(e)}const oo=[];let Oo=-1;const $a=[];let ea=null,Ca=0;const ru=Promise.resolve();let Zs=null;function da(e){const o=Zs||ru;return e?o.then(this?e.bind(this):e):o}function of(e){let o=Oo+1,a=oo.length;for(;o<a;){const s=o+a>>>1,n=oo[s],r=fs(n);r<e||r===e&&n.flags&2?o=s+1:a=s}return o}function ui(e){if(!(e.flags&1)){const o=fs(e),a=oo[oo.length-1];!a||!(e.flags&2)&&o>=fs(a)?oo.push(e):oo.splice(of(o),0,e),e.flags|=1,iu()}}function iu(){Zs||(Zs=ru.then(lu))}function af(e){if(!Q(e))ea&&e.id===-1?ea.splice(Ca+1,0,e):e.flags&1||($a.push(e),e.flags|=1);else for(let o=0;o<e.length;o++)$a.push(e[o]);iu()}function Rt(e,o,a=Oo+1){for(;a<oo.length;a++){const s=oo[a];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;oo.splice(a,1),a--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function tu(e){if($a.length){const o=[...new Set($a)].sort((a,s)=>fs(a)-fs(s));if($a.length=0,ea){for(let a=0;a<o.length;a++)ea.push(o[a]);return}for(ea=o,Ca=0;Ca<ea.length;Ca++){const a=ea[Ca];a.flags&4&&(a.flags&=-2),a.flags&8||a(),a.flags&=-2}ea=null,Ca=0}}const fs=e=>e.id==null?e.flags&2?-1:1/0:e.id;function lu(e){try{for(Oo=0;Oo<oo.length;Oo++){const o=oo[Oo];o&&!(o.flags&8)&&(o.flags&4&&(o.flags&=-2),Is(o,o.i,o.i?15:14),o.flags&4||(o.flags&=-2))}}finally{for(;Oo<oo.length;Oo++){const o=oo[Oo];o&&(o.flags&=-2)}Oo=-1,oo.length=0,tu(),Zs=null,(oo.length||$a.length)&&lu()}}let po=null,cu=null;function en(e){const o=po;return po=e,cu=e&&e.type.__scopeId||null,o}function sf(e,o=po,a){if(!o||e._n)return e;const s=(...n)=>{s._d&&sn(-1);const r=en(o),i=Sa.length;let t;try{t=e(...n)}finally{for(let l=Sa.length;l>i;l--)Mu();en(r),s._d&&sn(1)}return t};return s._n=!0,s._c=!0,s._d=!0,s}function mo(e,o){if(po===null)return e;const a=Rn(po),s=e.dirs||(e.dirs=[]);for(let n=0;n<o.length;n++){let[r,i,t,l=Ae]=o[n];r&&(K(r)&&(r={mounted:r,updated:r}),r.deep&&wo(i),s.push({dir:r,instance:a,value:i,oldValue:void 0,arg:t,modifiers:l}))}return e}function ta(e,o,a,s){const n=e.dirs,r=o&&o.dirs;for(let i=0;i<n.length;i++){const t=n[i];r&&(t.oldValue=r[i].value);let l=t.dir[s];l&&(Bo(),Ao(l,a,8,[e.el,t,e,o]),Yo())}}function nf(e,o){if(Qe){let a=Qe.provides;const s=Qe.parent&&Qe.parent.provides;s===a&&(a=Qe.provides=Object.create(s)),a[e]=o}}function ts(e,o,a=!1){const s=og();if(s||Ta){let n=Ta?Ta._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(n&&e in n)return n[e];if(arguments.length>1)return a&&K(o)?o.call(s&&s.proxy):o}}const rf=Symbol.for("v-scx"),tf=()=>ts(rf);function ge(e,o,a){return uu(e,o,a)}function uu(e,o,a=Ae){const{immediate:s,deep:n,flush:r,once:i}=a,t=Ve({},a),l=o&&s||!o&&r!=="post";let u;if(bs){if(r==="sync"){const h=tf();u=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=No,h.resume=No,h.pause=No,h}}const c=Qe;t.call=(h,C,O)=>Ao(h,c,C,O);let m=!1;r==="post"?t.scheduler=h=>{ro(h,c&&c.suspense)}:r!=="sync"&&(m=!0,t.scheduler=(h,C)=>{C?h():ui(h)}),t.augmentJob=h=>{o&&(h.flags|=4),m&&(h.flags|=2,c&&(h.id=c.uid,h.i=c))};const f=Zp(e,o,t);return bs&&(u?u.push(f):l&&f()),f}function lf(e,o,a){const s=this.proxy,n=Me(e)?e.includes(".")?du(s,e):()=>s[e]:e.bind(s,s);let r;K(o)?r=o:(r=o.handler,a=o);const i=Cs(this),t=uu(n,r.bind(s),a);return i(),t}function du(e,o){const a=o.split(".");return()=>{let s=e;for(let n=0;n<a.length&&s;n++)s=s[a[n]];return s}}const cf=Symbol("_vte"),qn=e=>e.__isTeleport,Xn=Symbol("_leaveCb");function uf(e){let o=e[0];if(e.length>1){for(const a of e)if(a.type!==Qo){o=a;break}}return o}function mu(e){if(!mi(e))return qn(e.type)&&e.children?uf(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:o,children:a}=e;if(a){if(o&16)return a[0];if(o&32&&K(a.default))return a.default()}}function di(e,o){if(e.shapeFlag&6&&e.component){e.transition=o;const a=e.component.subTree;di(qn(a.type)&&mu(a)||a,o)}else e.shapeFlag&128?(e.ssContent.transition=o.clone(e.ssContent),e.ssFallback.transition=o.clone(e.ssFallback)):e.transition=o}function In(e,o){return K(e)?Ve({name:e.name},o,{setup:e}):e}function pu(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function $t(e,o){let a;return!!((a=Object.getOwnPropertyDescriptor(e,o))&&!a.configurable)}const on=new WeakMap;function ls(e,o,a,s,n=!1){if(Q(e)){e.forEach((O,J)=>ls(O,o&&(Q(o)?o[J]:o),a,s,n));return}if(cs(s)&&!n){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&ls(e,o,a,s.component.subTree);return}const r=s.shapeFlag&4?Rn(s.component):s.el,i=n?null:r,{i:t,r:l}=e,u=o&&o.r,c=t.refs===Ae?t.refs={}:t.refs,m=t.setupState,f=be(m),h=m===Ae?zc:O=>$t(c,O)?!1:ye(f,O),C=(O,J)=>!(J&&$t(c,J));if(u!=null&&u!==l){if(Tt(o),Me(u))c[u]=null,h(u)&&(m[u]=null);else if(Ke(u)){const O=o;C(u,O.k)&&(u.value=null),O.k&&(c[O.k]=null)}}if(K(l))Is(l,t,12,[i,c]);else{const O=Me(l),J=Ke(l);if(O||J){const H=()=>{if(e.f){const z=O?h(l)?m[l]:c[l]:C()||!e.k?l.value:c[e.k];if(n)Q(z)&&Zr(z,r);else if(Q(z))z.includes(r)||z.push(r);else if(O)c[l]=[r],h(l)&&(m[l]=c[l]);else{const _=[r];C(l,e.k)&&(l.value=_),e.k&&(c[e.k]=_)}}else O?(c[l]=i,h(l)&&(m[l]=i)):J&&(C(l,e.k)&&(l.value=i),e.k&&(c[e.k]=i))};if(i){const z=()=>{H(),on.delete(e)};z.id=-1,on.set(e,z),ro(z,a)}else Tt(e),H()}}}function Tt(e){const o=on.get(e);o&&(o.flags|=8,on.delete(e))}En().requestIdleCallback;En().cancelIdleCallback;const cs=e=>!!e.type.__asyncLoader,mi=e=>e.type.__isKeepAlive;function df(e,o){fu(e,"a",o)}function mf(e,o){fu(e,"da",o)}function fu(e,o,a=Qe){const s=e.__wdc||(e.__wdc=()=>{let n=a;for(;n;){if(n.isDeactivated)return;n=n.parent}return e()});if(Cn(o,s,a),a){let n=a.parent;for(;n&&n.parent;)mi(n.parent.vnode)&&pf(s,o,a,n),n=n.parent}}function pf(e,o,a,s){const n=Cn(o,e,s,!0);gi(()=>{Zr(s[o],n)},a)}function Cn(e,o,a=Qe,s=!1){if(a){const n=a[e]||(a[e]=[]),r=o.__weh||(o.__weh=(...i)=>{Bo();const t=Cs(a),l=Ao(o,a,e,i);return t(),Yo(),l});return s?n.unshift(r):n.push(r),r}}const Wo=e=>(o,a=Qe)=>{(!bs||e==="sp")&&Cn(e,(...s)=>o(...s),a)},ff=Wo("bm"),pi=Wo("m"),gf=Wo("bu"),Sf=Wo("u"),fi=Wo("bum"),gi=Wo("um"),bf=Wo("sp"),yf=Wo("rtg"),vf=Wo("rtc");function hf(e,o=Qe){Cn("ec",e,o)}const Ef="components",gu=Symbol.for("v-ndc");function Gs(e){return Me(e)?Af(Ef,e,!1)||e:e||gu}function Af(e,o,a=!0,s=!1){const n=po||Qe;if(n){const r=n.type;{const t=ig(r,!1);if(t&&(t===o||t===ao(o)||t===vn(ao(o))))return r}const i=Lt(n[e]||r[e],o)||Lt(n.appContext[e],o);return!i&&s?r:i}}function Lt(e,o){return e&&(e[o]||e[ao(o)]||e[vn(ao(o))])}function to(e,o,a,s){let n;const r=a,i=Q(e);if(i||Me(e)){const t=i&&ga(e);let l=!1,u=!1;t&&(l=!So(e),u=Go(e),e=An(e)),n=new Array(e.length);for(let c=0,m=e.length;c<m;c++)n[c]=o(l?u?Ma(Eo(e[c])):Eo(e[c]):e[c],c,void 0,r)}else if(typeof e=="number"){n=new Array(e);for(let t=0;t<e;t++)n[t]=o(t+1,t,void 0,r)}else if(he(e))if(e[Symbol.iterator])n=Array.from(e,(t,l)=>o(t,l,void 0,r));else{const t=Object.keys(e);n=new Array(t.length);for(let l=0,u=t.length;l<u;l++){const c=t[l];n[l]=o(e[c],c,l,r)}}else n=[];return n}const Tr=e=>e?zu(e)?Rn(e):Tr(e.parent):null,us=Ve(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Tr(e.parent),$root:e=>Tr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>bu(e),$forceUpdate:e=>e.f||(e.f=()=>{ui(e.update)}),$nextTick:e=>e.n||(e.n=da.bind(e.proxy)),$watch:e=>lf.bind(e)}),Zn=(e,o)=>e!==Ae&&!e.__isScriptSetup&&ye(e,o),Pf={get({_:e},o){if(o==="__v_skip")return!0;const{ctx:a,setupState:s,data:n,props:r,accessCache:i,type:t,appContext:l}=e;if(o[0]!=="$"){const f=i[o];if(f!==void 0)switch(f){case 1:return s[o];case 2:return n[o];case 4:return a[o];case 3:return r[o]}else{if(Zn(s,o))return i[o]=1,s[o];if(n!==Ae&&ye(n,o))return i[o]=2,n[o];if(ye(r,o))return i[o]=3,r[o];if(a!==Ae&&ye(a,o))return i[o]=4,a[o];Lr&&(i[o]=0)}}const u=us[o];let c,m;if(u)return o==="$attrs"&&Ge(e.attrs,"get",""),u(e);if((c=t.__cssModules)&&(c=c[o]))return c;if(a!==Ae&&ye(a,o))return i[o]=4,a[o];if(m=l.config.globalProperties,ye(m,o))return m[o]},set({_:e},o,a){const{data:s,setupState:n,ctx:r}=e;return Zn(n,o)?(n[o]=a,!0):s!==Ae&&ye(s,o)?(s[o]=a,!0):ye(e.props,o)||o[0]==="$"&&o.slice(1)in e?!1:(r[o]=a,!0)},has({_:{data:e,setupState:o,accessCache:a,ctx:s,appContext:n,props:r,type:i}},t){let l;return!!(a[t]||e!==Ae&&t[0]!=="$"&&ye(e,t)||Zn(o,t)||ye(r,t)||ye(s,t)||ye(us,t)||ye(n.config.globalProperties,t)||(l=i.__cssModules)&&l[t])},defineProperty(e,o,a){return a.get!=null?e._.accessCache[o]=0:ye(a,"value")&&this.set(e,o,a.value,null),Reflect.defineProperty(e,o,a)}};function Mt(e){return Q(e)?e.reduce((o,a)=>(o[a]=null,o),{}):e}let Lr=!0;function qf(e){const o=bu(e),a=e.proxy,s=e.ctx;Lr=!1,o.beforeCreate&&Nt(o.beforeCreate,e,"bc");const{data:n,computed:r,methods:i,watch:t,provide:l,inject:u,created:c,beforeMount:m,mounted:f,beforeUpdate:h,updated:C,activated:O,deactivated:J,beforeDestroy:H,beforeUnmount:z,destroyed:_,unmounted:L,render:j,renderTracked:X,renderTriggered:me,errorCaptured:re,serverPrefetch:ae,expose:pe,inheritAttrs:qe,components:ie,directives:te,filters:go}=o;if(u&&If(u,s,null),i)for(const le in i){const ce=i[le];K(ce)&&(s[le]=ce.bind(a))}if(n){const le=n.call(a,a);he(le)&&(e.data=ti(le))}if(Lr=!0,r)for(const le in r){const ce=r[le],co=K(ce)?ce.bind(a,a):K(ce.get)?ce.get.bind(a,a):No,Ne=!K(ce)&&K(ce.set)?ce.set.bind(a):No,ue=U({get:co,set:Ne});Object.defineProperty(s,le,{enumerable:!0,configurable:!0,get:()=>ue.value,set:$e=>ue.value=$e})}if(t)for(const le in t)Su(t[le],s,a,le);if(l){const le=K(l)?l.call(a):l;Reflect.ownKeys(le).forEach(ce=>{nf(ce,le[ce])})}c&&Nt(c,e,"c");function Je(le,ce){Q(ce)?ce.forEach(co=>le(co.bind(a))):ce&&le(ce.bind(a))}if(Je(ff,m),Je(pi,f),Je(gf,h),Je(Sf,C),Je(df,O),Je(mf,J),Je(hf,re),Je(vf,X),Je(yf,me),Je(fi,z),Je(gi,L),Je(bf,ae),Q(pe))if(pe.length){const le=e.exposed||(e.exposed={});pe.forEach(ce=>{Object.defineProperty(le,ce,{get:()=>a[ce],set:co=>a[ce]=co,enumerable:!0})})}else e.exposed||(e.exposed={});j&&e.render===No&&(e.render=j),qe!=null&&(e.inheritAttrs=qe),ie&&(e.components=ie),te&&(e.directives=te),ae&&pu(e)}function If(e,o,a=No){Q(e)&&(e=Mr(e));for(const s in e){const n=e[s];let r;he(n)?"default"in n?r=ts(n.from||s,n.default,!0):r=ts(n.from||s):r=ts(n),Ke(r)?Object.defineProperty(o,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:i=>r.value=i}):o[s]=r}}function Nt(e,o,a){Ao(Q(e)?e.map(s=>s.bind(o.proxy)):e.bind(o.proxy),o,a)}function Su(e,o,a,s){let n=s.includes(".")?du(a,s):()=>a[s];if(Me(e)){const r=o[e];K(r)&&ge(n,r)}else if(K(e))ge(n,e.bind(a));else if(he(e))if(Q(e))e.forEach(r=>Su(r,o,a,s));else{const r=K(e.handler)?e.handler.bind(a):o[e.handler];K(r)&&ge(n,r,e)}}function bu(e){const o=e.type,{mixins:a,extends:s}=o,{mixins:n,optionsCache:r,config:{optionMergeStrategies:i}}=e.appContext,t=r.get(o);let l;return t?l=t:!n.length&&!a&&!s?l=o:(l={},n.length&&n.forEach(u=>an(l,u,i,!0)),an(l,o,i)),he(o)&&r.set(o,l),l}function an(e,o,a,s=!1){const{mixins:n,extends:r}=o;r&&an(e,r,a,!0),n&&n.forEach(i=>an(e,i,a,!0));for(const i in o)if(!(s&&i==="expose")){const t=Cf[i]||a&&a[i];e[i]=t?t(e[i],o[i]):o[i]}return e}const Cf={data:_t,props:zt,emits:zt,methods:os,computed:os,beforeCreate:eo,created:eo,beforeMount:eo,mounted:eo,beforeUpdate:eo,updated:eo,beforeDestroy:eo,beforeUnmount:eo,destroyed:eo,unmounted:eo,activated:eo,deactivated:eo,errorCaptured:eo,serverPrefetch:eo,components:os,directives:os,watch:Df,provide:_t,inject:Of};function _t(e,o){return o?e?function(){return Ve(K(e)?e.call(this,this):e,K(o)?o.call(this,this):o)}:o:e}function Of(e,o){return os(Mr(e),Mr(o))}function Mr(e){if(Q(e)){const o={};for(let a=0;a<e.length;a++)o[e[a]]=e[a];return o}return e}function eo(e,o){return e?[...new Set([].concat(e,o))]:o}function os(e,o){return e?Ve(Object.create(null),e,o):o}function zt(e,o){return e?Q(e)&&Q(o)?[...new Set([...e,...o])]:Ve(Object.create(null),Mt(e),Mt(o??{})):o}function Df(e,o){if(!e)return o;if(!o)return e;const a=Ve(Object.create(null),e);for(const s in o)a[s]=eo(e[s],o[s]);return a}function yu(){return{app:null,config:{isNativeTag:zc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Rf=0;function $f(e,o){return function(s,n=null){K(s)||(s=Ve({},s)),n!=null&&!he(n)&&(n=null);const r=yu(),i=new WeakSet,t=[];let l=!1;const u=r.app={_uid:Rf++,_component:s,_props:n,_container:null,_context:r,_instance:null,version:lg,get config(){return r.config},set config(c){},use(c,...m){return i.has(c)||(c&&K(c.install)?(i.add(c),c.install(u,...m)):K(c)&&(i.add(c),c(u,...m))),u},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),u},component(c,m){return m?(r.components[c]=m,u):r.components[c]},directive(c,m){return m?(r.directives[c]=m,u):r.directives[c]},mount(c,m,f){if(!l){const h=u._ceVNode||Pe(s,n);return h.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),e(h,c,f),l=!0,u._container=c,c.__vue_app__=u,Rn(h.component)}},onUnmount(c){t.push(c)},unmount(){l&&(Ao(t,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,m){return r.provides[c]=m,u},runWithContext(c){const m=Ta;Ta=u;try{return c()}finally{Ta=m}}};return u}}let Ta=null;const Tf=(e,o)=>o==="modelValue"||o==="model-value"?e.modelModifiers:e[`${o}Modifiers`]||e[`${ao(o)}Modifiers`]||e[`${va(o)}Modifiers`];function Lf(e,o,...a){if(e.isUnmounted)return;const s=e.vnode.props||Ae;let n=a;const r=o.startsWith("update:"),i=r&&Tf(s,o.slice(7));i&&(i.trim&&(n=a.map(c=>Me(c)?c.trim():c)),i.number&&(n=a.map(hn)));let t,l=s[t=Yn(o)]||s[t=Yn(ao(o))];!l&&r&&(l=s[t=Yn(va(o))]),l&&Ao(l,e,6,n);const u=s[t+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[t])return;e.emitted[t]=!0,Ao(u,e,6,n)}}const Mf=new WeakMap;function vu(e,o,a=!1){const s=a?Mf:o.emitsCache,n=s.get(e);if(n!==void 0)return n;const r=e.emits;let i={},t=!1;if(!K(e)){const l=u=>{const c=vu(u,o,!0);c&&(t=!0,Ve(i,c))};!a&&o.mixins.length&&o.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!r&&!t?(he(e)&&s.set(e,null),null):(Q(r)?r.forEach(l=>i[l]=null):Ve(i,r),he(e)&&s.set(e,i),i)}function On(e,o){return!e||!Sn(o)?!1:(o=o.slice(2),o=o==="Once"?o:o.replace(/Once$/,""),ye(e,o[0].toLowerCase()+o.slice(1))||ye(e,va(o))||ye(e,o))}function Jt(e){const{type:o,vnode:a,proxy:s,withProxy:n,propsOptions:[r],slots:i,attrs:t,emit:l,render:u,renderCache:c,props:m,data:f,setupState:h,ctx:C,inheritAttrs:O}=e,J=en(e);let H,z;try{if(a.shapeFlag&4){const L=n||s,j=L;H=$o(u.call(j,L,c,m,h,f,C)),z=t}else{const L=o;H=$o(L.length>1?L(m,{attrs:t,slots:i,emit:l}):L(m,null)),z=o.props?t:Nf(t)}}catch(L){Sa.length=0,Pn(L,e,1),H=Pe(Qo)}let _=H;if(z&&O!==!1){const L=Object.keys(z),{shapeFlag:j}=_;L.length&&j&7&&(r&&L.some(bn)&&(z=_f(z,r)),_=Na(_,z,!1,!0))}if(a.dirs&&(_=Na(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(a.dirs):a.dirs),a.transition){const L=qn(_.type)&&mu(_)||_;di(L,a.transition)}return H=_,en(J),H}const Nf=e=>{let o;for(const a in e)(a==="class"||a==="style"||Sn(a))&&((o||(o={}))[a]=e[a]);return o},_f=(e,o)=>{const a={};for(const s in e)(!bn(s)||!(s.slice(9)in o))&&(a[s]=e[s]);return a};function zf(e,o,a){const{props:s,children:n,component:r}=e,{props:i,children:t,patchFlag:l}=o,u=r.emitsOptions;if(o.dirs||o.transition)return!0;if(a&&l>=0){if(l&1024)return!0;if(l&16)return s?jt(s,i,u):!!i;if(l&8){const c=o.dynamicProps;for(let m=0;m<c.length;m++){const f=c[m];if(hu(i,s,f)&&!On(u,f))return!0}}}else return(n||t)&&(!t||!t.$stable)?!0:s===i?!1:s?i?jt(s,i,u):!0:!!i;return!1}function jt(e,o,a){const s=Object.keys(o);if(s.length!==Object.keys(e).length)return!0;for(let n=0;n<s.length;n++){const r=s[n];if(hu(o,e,r)&&!On(a,r))return!0}return!1}function hu(e,o,a){const s=e[a],n=o[a];return a==="style"&&he(s)&&he(n)?!Va(s,n):s!==n}function Jf({vnode:e,parent:o,suspense:a},s){for(;o;){const n=o.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=s,e=n),n===e)(e=o.vnode).el=s,o=o.parent;else break}a&&a.activeBranch===e&&(a.vnode.el=s)}const Eu={},Au=()=>Object.create(Eu),Pu=e=>Object.getPrototypeOf(e)===Eu;function jf(e,o,a,s=!1){const n={},r=Au();e.propsDefaults=Object.create(null),qu(e,o,n,r);for(const i in e.propsOptions[0])i in n||(n[i]=void 0);a?e.props=s?n:kp(n):e.type.props?e.props=n:e.props=r,e.attrs=r}function Uf(e,o,a,s){const{props:n,attrs:r,vnode:{patchFlag:i}}=e,t=be(n),[l]=e.propsOptions;let u=!1;if((s||i>0)&&!(i&16)){if(i&8){const c=e.vnode.dynamicProps;for(let m=0;m<c.length;m++){let f=c[m];if(On(e.emitsOptions,f))continue;const h=o[f];if(l)if(ye(r,f))h!==r[f]&&(r[f]=h,u=!0);else{const C=ao(f);n[C]=Nr(l,t,C,h,e,!1)}else h!==r[f]&&(r[f]=h,u=!0)}}}else{qu(e,o,n,r)&&(u=!0);let c;for(const m in t)(!o||!ye(o,m)&&((c=va(m))===m||!ye(o,c)))&&(l?a&&(a[m]!==void 0||a[c]!==void 0)&&(n[m]=Nr(l,t,m,void 0,e,!0)):delete n[m]);if(r!==t)for(const m in r)(!o||!ye(o,m))&&(delete r[m],u=!0)}u&&Fo(e.attrs,"set","")}function qu(e,o,a,s){const[n,r]=e.propsOptions;let i=!1,t;if(o)for(let l in o){if(ns(l))continue;const u=o[l];let c;n&&ye(n,c=ao(l))?!r||!r.includes(c)?a[c]=u:(t||(t={}))[c]=u:On(e.emitsOptions,l)||(!(l in s)||u!==s[l])&&(s[l]=u,i=!0)}if(r){const l=be(a),u=t||Ae;for(let c=0;c<r.length;c++){const m=r[c];a[m]=Nr(n,l,m,u[m],e,!ye(u,m))}}return i}function Nr(e,o,a,s,n,r){const i=e[a];if(i!=null){const t=ye(i,"default");if(t&&s===void 0){const l=i.default;if(i.type!==Function&&!i.skipFactory&&K(l)){const{propsDefaults:u}=n;if(a in u)s=u[a];else{const c=Cs(n);s=u[a]=l.call(null,o),c()}}else s=l;n.ce&&n.ce._setProp(a,s)}i[0]&&(r&&!t?s=!1:i[1]&&(s===""||s===va(a))&&(s=!0))}return s}const Hf=new WeakMap;function Iu(e,o,a=!1){const s=a?Hf:o.propsCache,n=s.get(e);if(n)return n;const r=e.props,i={},t=[];let l=!1;if(!K(e)){const c=m=>{l=!0;const[f,h]=Iu(m,o,!0);Ve(i,f),h&&t.push(...h)};!a&&o.mixins.length&&o.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!r&&!l)return he(e)&&s.set(e,Da),Da;if(Q(r))for(let c=0;c<r.length;c++){const m=ao(r[c]);Ut(m)&&(i[m]=Ae)}else if(r)for(const c in r){const m=ao(c);if(Ut(m)){const f=r[c],h=i[m]=Q(f)||K(f)?{type:f}:Ve({},f),C=h.type;let O=!1,J=!0;if(Q(C))for(let H=0;H<C.length;++H){const z=C[H],_=K(z)&&z.name;if(_==="Boolean"){O=!0;break}else _==="String"&&(J=!1)}else O=K(C)&&C.name==="Boolean";h[0]=O,h[1]=J,(O||ye(h,"default"))&&t.push(m)}}const u=[i,t];return he(e)&&s.set(e,u),u}function Ut(e){return e[0]!=="$"&&!ns(e)}const Si=e=>e==="_"||e==="_ctx"||e==="$stable",bi=e=>Q(e)?e.map($o):[$o(e)],xf=(e,o,a)=>{if(o._n)return o;const s=sf((...n)=>bi(o(...n)),a);return s._c=!1,s},Cu=(e,o,a)=>{const s=e._ctx;for(const n in e){if(Si(n))continue;const r=e[n];if(K(r))o[n]=xf(n,r,s);else if(r!=null){const i=bi(r);o[n]=()=>i}}},Ou=(e,o)=>{const a=bi(o);e.slots.default=()=>a},Du=(e,o,a)=>{for(const s in o)(a||!Si(s))&&(e[s]=o[s])},Vf=(e,o,a)=>{const s=e.slots=Au();if(e.vnode.shapeFlag&32){const n=o._;n?(Du(s,o,a),a&&Hc(s,"_",n,!0)):Cu(o,s)}else o&&Ou(e,o)},Ff=(e,o,a)=>{const{vnode:s,slots:n}=e;let r=!0,i=Ae;if(s.shapeFlag&32){const t=o._;t?a&&t===1?r=!1:Du(n,o,a):(r=!o.$stable,Cu(o,n)),i=o}else o&&(Ou(e,o),i={default:1});if(r)for(const t in n)!Si(t)&&i[t]==null&&delete n[t]},ro=Gf;function wf(e){return kf(e)}function kf(e,o){const a=En();a.__VUE__=!0;const{insert:s,remove:n,patchProp:r,createElement:i,createText:t,createComment:l,setText:u,setElementText:c,parentNode:m,nextSibling:f,setScopeId:h=No,insertStaticContent:C}=e,O=(p,S,v,P=null,q=null,E=null,M=void 0,$=null,D=!!S.dynamicChildren)=>{if(p===S)return;p&&!Ga(p,S)&&(P=uo(p),$e(p,q,E,!0),p=null),S.patchFlag===-2&&(D=!1,S.dynamicChildren=null);const{type:A,ref:F,shapeFlag:R}=S;switch(A){case Dn:J(p,S,v,P);break;case Qo:H(p,S,v,P);break;case or:p==null&&z(S,v,P,M);break;case fe:ie(p,S,v,P,q,E,M,$,D);break;default:R&1?j(p,S,v,P,q,E,M,$,D):R&6?te(p,S,v,P,q,E,M,$,D):(R&64||R&128)&&A.process(p,S,v,P,q,E,M,$,D,we)}F!=null&&q?ls(F,p&&p.ref,E,S||p,!S):F==null&&p&&p.ref!=null&&ls(p.ref,null,E,p,!0)},J=(p,S,v,P)=>{if(p==null)s(S.el=t(S.children),v,P);else{const q=S.el=p.el;S.children!==p.children&&u(q,S.children)}},H=(p,S,v,P)=>{p==null?s(S.el=l(S.children||""),v,P):S.el=p.el},z=(p,S,v,P)=>{[p.el,p.anchor]=C(p.children,S,v,P,p.el,p.anchor)},_=({el:p,anchor:S},v,P)=>{let q;for(;p&&p!==S;)q=f(p),s(p,v,P),p=q;s(S,v,P)},L=({el:p,anchor:S})=>{let v;for(;p&&p!==S;)v=f(p),n(p),p=v;n(S)},j=(p,S,v,P,q,E,M,$,D)=>{if(S.type==="svg"?M="svg":S.type==="math"&&(M="mathml"),p==null)X(S,v,P,q,E,M,$,D);else{const A=p.el&&p.el._isVueCE?p.el:null;try{A&&A._beginPatch(),ae(p,S,q,E,M,$,D)}finally{A&&A._endPatch()}}},X=(p,S,v,P,q,E,M,$)=>{let D,A;const{props:F,shapeFlag:R,transition:x,dirs:k}=p;if(D=p.el=i(p.type,E,F&&F.is,F),R&8?c(D,p.children):R&16&&re(p.children,D,null,P,q,er(p,E),M,$),k&&ta(p,null,P,"created"),me(D,p,p.scopeId,M,P),F){for(const de in F)de!=="value"&&!ns(de)&&r(D,de,null,F[de],E,P);"value"in F&&r(D,"value",null,F.value,E),(A=F.onVnodeBeforeMount)&&Co(A,P,p)}k&&ta(p,null,P,"beforeMount");const oe=Bf(q,x);oe&&x.beforeEnter(D),s(D,S,v),((A=F&&F.onVnodeMounted)||oe||k)&&ro(()=>{try{A&&Co(A,P,p),oe&&x.enter(D),k&&ta(p,null,P,"mounted")}finally{}},q)},me=(p,S,v,P,q)=>{if(v&&h(p,v),P)for(let E=0;E<P.length;E++)h(p,P[E]);if(q){let E=q.subTree;if(S===E||Lu(E.type)&&(E.ssContent===S||E.ssFallback===S)){const M=q.vnode;me(p,M,M.scopeId,M.slotScopeIds,q.parent)}}},re=(p,S,v,P,q,E,M,$,D=0)=>{for(let A=D;A<p.length;A++){const F=p[A]=$?Vo(p[A]):$o(p[A]);O(null,F,S,v,P,q,E,M,$)}},ae=(p,S,v,P,q,E,M)=>{const $=S.el=p.el;let{patchFlag:D,dynamicChildren:A,dirs:F}=S;D|=p.patchFlag&16;const R=p.props||Ae,x=S.props||Ae;let k;if(v&&la(v,!1),(k=x.onVnodeBeforeUpdate)&&Co(k,v,S,p),F&&ta(S,p,v,"beforeUpdate"),v&&la(v,!0),A&&(!p.dynamicChildren||p.dynamicChildren.length!==A.length)&&(D=0,M=!1,A=null),(R.innerHTML&&x.innerHTML==null||R.textContent&&x.textContent==null)&&c($,""),A?pe(p.dynamicChildren,A,$,v,P,er(S,q),E):M||ce(p,S,$,null,v,P,er(S,q),E,!1),D>0){if(D&16)qe($,R,x,v,q);else if(D&2&&R.class!==x.class&&r($,"class",null,x.class,q),D&4&&r($,"style",R.style,x.style,q),D&8){const oe=S.dynamicProps;for(let de=0;de<oe.length;de++){const Z=oe[de],Ie=R[Z],Ce=x[Z];(Ce!==Ie||Z==="value")&&r($,Z,Ie,Ce,q,v)}}D&1&&p.children!==S.children&&c($,S.children)}else!M&&A==null&&qe($,R,x,v,q);((k=x.onVnodeUpdated)||F)&&ro(()=>{k&&Co(k,v,S,p),F&&ta(S,p,v,"updated")},P)},pe=(p,S,v,P,q,E,M)=>{for(let $=0;$<S.length;$++){const D=p[$],A=S[$],F=D.el&&(D.type===fe||!Ga(D,A)||D.shapeFlag&198)?m(D.el):v;O(D,A,F,null,P,q,E,M,!0)}},qe=(p,S,v,P,q)=>{if(S!==v){if(S!==Ae)for(const E in S)!ns(E)&&!(E in v)&&r(p,E,S[E],null,q,P);for(const E in v){if(ns(E))continue;const M=v[E],$=S[E];M!==$&&E!=="value"&&r(p,E,$,M,q,P)}"value"in v&&r(p,"value",S.value,v.value,q)}},ie=(p,S,v,P,q,E,M,$,D)=>{const A=S.el=p?p.el:t(""),F=S.anchor=p?p.anchor:t("");let{patchFlag:R,dynamicChildren:x,slotScopeIds:k}=S;k&&($=$?$.concat(k):k),p==null?(s(A,v,P),s(F,v,P),re(S.children||[],v,F,q,E,M,$,D)):R>0&&R&64&&x&&p.dynamicChildren&&p.dynamicChildren.length===x.length?(pe(p.dynamicChildren,x,v,q,E,M,$),(S.key!=null||q&&S===q.subTree)&&Ru(p,S,!0)):ce(p,S,v,F,q,E,M,$,D)},te=(p,S,v,P,q,E,M,$,D)=>{S.slotScopeIds=$,p==null?S.shapeFlag&512?q.ctx.activate(S,v,P,M,D):go(S,v,P,q,E,M,D):Re(p,S,D)},go=(p,S,v,P,q,E,M)=>{const $=p.component=eg(p,P,q);if(mi(p)&&($.ctx.renderer=we),ag($,!1,M),$.asyncDep){if(q&&q.registerDep($,Je,M),!p.el){const D=$.subTree=Pe(Qo);H(null,D,S,v),p.placeholder=D.el}}else Je($,p,S,v,q,E,M)},Re=(p,S,v)=>{const P=S.component=p.component;if(zf(p,S,v))if(P.asyncDep&&!P.asyncResolved){le(P,S,v);return}else P.next=S,P.update();else S.el=p.el,P.vnode=S},Je=(p,S,v,P,q,E,M)=>{const $=()=>{if(p.isMounted){let{next:R,bu:x,u:k,parent:oe,vnode:de}=p;{const no=$u(p);if(no){R&&(R.el=de.el,le(p,R,M)),no.asyncDep.then(()=>{ro(()=>{p.isUnmounted||A()},q)});return}}let Z=R,Ie;la(p,!1),R?(R.el=de.el,le(p,R,M)):R=de,x&&Ys(x),(Ie=R.props&&R.props.onVnodeBeforeUpdate)&&Co(Ie,oe,R,de),la(p,!0);const Ce=Jt(p),Ze=p.subTree;p.subTree=Ce,O(Ze,Ce,m(Ze.el),uo(Ze),p,q,E),R.el=Ce.el,Z===null&&Jf(p,Ce.el),k&&ro(k,q),(Ie=R.props&&R.props.onVnodeUpdated)&&ro(()=>Co(Ie,oe,R,de),q)}else{let R;const{el:x,props:k}=S,{bm:oe,m:de,parent:Z,root:Ie,type:Ce}=p,Ze=cs(S);la(p,!1),oe&&Ys(oe),!Ze&&(R=k&&k.onVnodeBeforeMount)&&Co(R,Z,S),la(p,!0);{Ie.ce&&Ie.ce._hasShadowRoot()&&Ie.ce._injectChildStyle(Ce,p.parent?p.parent.type:void 0);const no=p.subTree=Jt(p);O(null,no,v,P,p,q,E),S.el=no.el}if(de&&ro(de,q),!Ze&&(R=k&&k.onVnodeMounted)){const no=S;ro(()=>Co(R,Z,no),q)}(S.shapeFlag&256||Z&&cs(Z.vnode)&&Z.vnode.shapeFlag&256)&&p.a&&ro(p.a,q),p.isMounted=!0,S=v=P=null}};p.scope.on();const D=p.effect=new wc($);p.scope.off();const A=p.update=D.run.bind(D),F=p.job=D.runIfDirty.bind(D);F.i=p,F.id=p.uid,D.scheduler=()=>ui(F),la(p,!0),A()},le=(p,S,v)=>{S.component=p;const P=p.vnode.props;p.vnode=S,p.next=null,Uf(p,S.props,P,v),Ff(p,S.children,v),Bo(),Rt(p),Yo()},ce=(p,S,v,P,q,E,M,$,D=!1)=>{const A=p&&p.children,F=p?p.shapeFlag:0,R=S.children,{patchFlag:x,shapeFlag:k}=S;if(x>0){if(x&128){Ne(A,R,v,P,q,E,M,$,D);return}else if(x&256){co(A,R,v,P,q,E,M,$,D);return}}k&8?(F&16&&Xe(A,q,E),R!==A&&c(v,R)):F&16?k&16?Ne(A,R,v,P,q,E,M,$,D):Xe(A,q,E,!0):(F&8&&c(v,""),k&16&&re(R,v,P,q,E,M,$,D))},co=(p,S,v,P,q,E,M,$,D)=>{p=p||Da,S=S||Da;const A=p.length,F=S.length,R=Math.min(A,F);let x;for(x=0;x<R;x++){const k=S[x]=D?Vo(S[x]):$o(S[x]);O(p[x],k,v,null,q,E,M,$,D)}A>F?Xe(p,q,E,!0,!1,R):re(S,v,P,q,E,M,$,D,R)},Ne=(p,S,v,P,q,E,M,$,D)=>{let A=0;const F=S.length;let R=p.length-1,x=F-1;for(;A<=R&&A<=x;){const k=p[A],oe=S[A]=D?Vo(S[A]):$o(S[A]);if(Ga(k,oe))O(k,oe,v,null,q,E,M,$,D);else break;A++}for(;A<=R&&A<=x;){const k=p[R],oe=S[x]=D?Vo(S[x]):$o(S[x]);if(Ga(k,oe))O(k,oe,v,null,q,E,M,$,D);else break;R--,x--}if(A>R){if(A<=x){const k=x+1,oe=k<F?S[k].el:P;for(;A<=x;)O(null,S[A]=D?Vo(S[A]):$o(S[A]),v,oe,q,E,M,$,D),A++}}else if(A>x)for(;A<=R;)$e(p[A],q,E,!0),A++;else{const k=A,oe=A,de=new Map;for(A=oe;A<=x;A++){const _e=S[A]=D?Vo(S[A]):$o(S[A]);_e.key!=null&&de.set(_e.key,A)}let Z,Ie=0;const Ce=x-oe+1;let Ze=!1,no=0;const Io=new Array(Ce);for(A=0;A<Ce;A++)Io[A]=0;for(A=k;A<=R;A++){const _e=p[A];if(Ie>=Ce){$e(_e,q,E,!0);continue}let I;if(_e.key!=null)I=de.get(_e.key);else for(Z=oe;Z<=x;Z++)if(Io[Z-oe]===0&&Ga(_e,S[Z])){I=Z;break}I===void 0?$e(_e,q,E,!0):(Io[I-oe]=A+1,I>=no?no=I:Ze=!0,O(_e,S[I],v,null,q,E,M,$,D),Ie++)}const ha=Ze?Yf(Io):Da;for(Z=ha.length-1,A=Ce-1;A>=0;A--){const _e=oe+A,I=S[_e],B=S[_e+1],ee=_e+1<F?B.el||Tu(B):P;Io[A]===0?O(null,I,v,ee,q,E,M,$,D):Ze&&(Z<0||A!==ha[Z]?ue(I,v,ee,2):Z--)}}},ue=(p,S,v,P,q=null)=>{const{el:E,type:M,transition:$,children:D,shapeFlag:A}=p;if(A&6){ue(p.component.subTree,S,v,P);return}if(A&128){p.suspense.move(S,v,P);return}if(A&64){M.move(p,S,v,we);return}if(M===fe){s(E,S,v);for(let R=0;R<D.length;R++)ue(D[R],S,v,P);s(p.anchor,S,v);return}if(M===or){_(p,S,v);return}if(P!==2&&A&1&&$)if(P===0)$.persisted&&!E[Xn]?s(E,S,v):($.beforeEnter(E),s(E,S,v),ro(()=>$.enter(E),q));else{const{leave:R,delayLeave:x,afterLeave:k}=$,oe=()=>{p.ctx.isUnmounted?n(E):s(E,S,v)},de=()=>{const Z=E._isLeaving||!!E[Xn];E._isLeaving&&E[Xn](!0),$.persisted&&!Z?oe():R(E,()=>{oe(),k&&k()})};x?x(E,oe,de):de()}else s(E,S,v)},$e=(p,S,v,P=!1,q=!1)=>{const{type:E,props:M,ref:$,children:D,dynamicChildren:A,shapeFlag:F,patchFlag:R,dirs:x,cacheIndex:k,memo:oe}=p;if(R===-2&&(q=!1),$!=null&&(Bo(),ls($,null,v,p,!0),Yo()),k!=null&&(S.renderCache[k]=void 0),F&256){S.ctx.deactivate(p);return}const de=F&1&&x,Z=!cs(p);let Ie;if(Z&&(Ie=M&&M.onVnodeBeforeUnmount)&&Co(Ie,S,p),F&6)Jo(p.component,v,P);else{if(F&128){p.suspense.unmount(v,P);return}de&&ta(p,null,S,"beforeUnmount"),F&64?p.type.remove(p,S,v,we,P):A&&!A.hasOnce&&(E!==fe||R>0&&R&64)?Xe(A,S,v,!1,!0):(E===fe&&R&384||!q&&F&16)&&Xe(D,S,v),P&&Fe(p)}const Ce=oe!=null&&k==null;(Z&&(Ie=M&&M.onVnodeUnmounted)||de||Ce)&&ro(()=>{Ie&&Co(Ie,S,p),de&&ta(p,null,S,"unmounted"),Ce&&(p.el=null)},v)},Fe=p=>{const{type:S,el:v,anchor:P,transition:q}=p;if(S===fe){Po(v,P);return}if(S===or){L(p);return}const E=()=>{n(v),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(p.shapeFlag&1&&q&&!q.persisted){const{leave:M,delayLeave:$}=q,D=()=>M(v,E);$?$(p.el,E,D):D()}else E()},Po=(p,S)=>{let v;for(;p!==S;)v=f(p),n(p),p=v;n(S)},Jo=(p,S,v)=>{const{bum:P,scope:q,job:E,subTree:M,um:$,m:D,a:A}=p;Ht(D),Ht(A),P&&Ys(P),q.stop(),E&&(E.flags|=8,$e(M,p,S,v)),$&&ro($,S),ro(()=>{p.isUnmounted=!0},S)},Xe=(p,S,v,P=!1,q=!1,E=0)=>{for(let M=E;M<p.length;M++)$e(p[M],S,v,P,q)},uo=p=>{if(p.shapeFlag&6)return uo(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const S=f(p.anchor||p.el),v=S&&S[cf];return v?f(v):S};let bo=!1;const qo=(p,S,v)=>{let P;p==null?S._vnode&&($e(S._vnode,null,null,!0),P=S._vnode.component):O(S._vnode||null,p,S,null,null,null,v),S._vnode=p,bo||(bo=!0,Rt(P),tu(),bo=!1)},we={p:O,um:$e,m:ue,r:Fe,mt:go,mc:re,pc:ce,pbc:pe,n:uo,o:e};return{render:qo,hydrate:void 0,createApp:$f(qo)}}function er({type:e,props:o},a){return a==="svg"&&e==="foreignObject"||a==="mathml"&&e==="annotation-xml"&&o&&o.encoding&&o.encoding.includes("html")?void 0:a}function la({effect:e,job:o},a){a?(e.flags|=32,o.flags|=4):(e.flags&=-33,o.flags&=-5)}function Bf(e,o){return(!e||e&&!e.pendingBranch)&&o&&!o.persisted}function Ru(e,o,a=!1){const s=e.children,n=o.children;if(Q(s)&&Q(n))for(let r=0;r<s.length;r++){const i=s[r];let t=n[r];t.shapeFlag&1&&!t.dynamicChildren&&((t.patchFlag<=0||t.patchFlag===32)&&(t=n[r]=Vo(n[r]),t.el=i.el),!a&&t.patchFlag!==-2&&Ru(i,t)),t.type===Dn&&(t.patchFlag===-1&&(t=n[r]=Vo(t)),t.el=i.el),t.type===Qo&&!t.el&&(t.el=i.el)}}function Yf(e){const o=e.slice(),a=[0];let s,n,r,i,t;const l=e.length;for(s=0;s<l;s++){const u=e[s];if(u!==0){if(n=a[a.length-1],e[n]<u){o[s]=n,a.push(s);continue}for(r=0,i=a.length-1;r<i;)t=r+i>>1,e[a[t]]<u?r=t+1:i=t;u<e[a[r]]&&(r>0&&(o[s]=a[r-1]),a[r]=s)}}for(r=a.length,i=a[r-1];r-- >0;)a[r]=i,i=o[i];return a}function $u(e){const o=e.subTree.component;if(o)return o.asyncDep&&!o.asyncResolved?o:$u(o)}function Ht(e){if(e)for(let o=0;o<e.length;o++)e[o].flags|=8}function Tu(e){if(e.placeholder)return e.placeholder;const o=e.component;return o?Tu(o.subTree):null}const Lu=e=>e.__isSuspense;function Gf(e,o){o&&o.pendingBranch?Q(e)?o.effects.push(...e):o.effects.push(e):af(e)}const fe=Symbol.for("v-fgt"),Dn=Symbol.for("v-txt"),Qo=Symbol.for("v-cmt"),or=Symbol.for("v-stc"),Sa=[];let fo=null;function T(e=!1){Sa.push(fo=e?null:[])}function Mu(){Sa.pop(),fo=Sa[Sa.length-1]||null}let gs=1;function sn(e,o=!1){gs+=e,e<0&&fo&&o&&(fo.hasOnce=!0)}function Nu(e){return e.dynamicChildren=gs>0?fo||Da:null,Mu(),gs>0&&fo&&fo.push(e),e}function N(e,o,a,s,n,r){return Nu(b(e,o,a,s,n,r,!0))}function Do(e,o,a,s,n){return Nu(Pe(e,o,a,s,n,!0))}function nn(e){return e?e.__v_isVNode===!0:!1}function Ga(e,o){return e.type===o.type&&e.key===o.key}const _u=({key:e})=>e??null,Qs=({ref:e,ref_key:o,ref_for:a})=>(typeof e=="number"&&(e=""+e),e!=null?Me(e)||Ke(e)||K(e)?{i:po,r:e,k:o,f:!!a}:e:null);function b(e,o=null,a=null,s=0,n=null,r=e===fe?0:1,i=!1,t=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:o,key:o&&_u(o),ref:o&&Qs(o),scopeId:cu,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:po};return t?(rn(l,a),r&128&&e.normalize(l)):a&&(l.shapeFlag|=Me(a)?8:16),gs>0&&!i&&fo&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&fo.push(l),l}const Pe=Qf;function Qf(e,o=null,a=null,s=0,n=null,r=!1){if((!e||e===gu)&&(e=Qo),nn(e)){const t=Na(e,o,!0);return a&&rn(t,a),gs>0&&!r&&fo&&(t.shapeFlag&6?fo[fo.indexOf(e)]=t:fo.push(t)),t.patchFlag=-2,t}if(tg(e)&&(e=e.__vccOpts),o){o=Wf(o);let{class:t,style:l}=o;t&&!Me(t)&&(o.class=Le(t)),he(l)&&(ci(l)&&!Q(l)&&(l=Ve({},l)),o.style=qs(l))}const i=Me(e)?1:Lu(e)?128:qn(e)?64:he(e)?4:K(e)?2:0;return b(e,o,a,s,n,i,r,!0)}function Wf(e){return e?ci(e)||Pu(e)?Ve({},e):e:null}function Na(e,o,a=!1,s=!1){const{props:n,ref:r,patchFlag:i,children:t,transition:l}=e,u=o?Kf(n||{},o):n,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&_u(u),ref:o&&o.ref?a&&r?Q(r)?r.concat(Qs(o)):[r,Qs(o)]:Qs(o):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:t,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:o&&e.type!==fe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Na(e.ssContent),ssFallback:e.ssFallback&&Na(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&s&&di(c,l.clone(c)),c}function aa(e=" ",o=0){return Pe(Dn,null,e,o)}function Se(e="",o=!1){return o?(T(),Do(Qo,null,e)):Pe(Qo,null,e)}function $o(e){return e==null||typeof e=="boolean"?Pe(Qo):Q(e)?Pe(fe,null,e.slice()):nn(e)?Vo(e):Pe(Dn,null,String(e))}function Vo(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Na(e)}function rn(e,o){let a=0;const{shapeFlag:s}=e;if(o==null)o=null;else if(Q(o))a=16;else if(typeof o=="object")if(s&65){const n=o.default;n&&(n._c&&(n._d=!1),rn(e,n()),n._c&&(n._d=!0));return}else{a=32;const n=o._;!n&&!Pu(o)?o._ctx=po:n===3&&po&&(po.slots._===1?o._=1:(o._=2,e.patchFlag|=1024))}else if(K(o)){if(s&65){rn(e,{default:o});return}o={default:o,_ctx:po},a=32}else o=String(o),s&64?(a=16,o=[aa(o)]):a=8;e.children=o,e.shapeFlag|=a}function Kf(...e){const o={};for(let a=0;a<e.length;a++){const s=e[a];for(const n in s)if(n==="class")o.class!==s.class&&(o.class=Le([o.class,s.class]));else if(n==="style")o.style=qs([o.style,s.style]);else if(Sn(n)){const r=o[n],i=s[n];i&&r!==i&&!(Q(r)&&r.includes(i))?o[n]=r?[].concat(r,i):i:i==null&&r==null&&!bn(n)&&(o[n]=i)}else n!==""&&(o[n]=s[n])}return o}function Co(e,o,a,s=null){Ao(e,o,7,[a,s])}const Xf=yu();let Zf=0;function eg(e,o,a){const s=e.type,n=(o?o.appContext:e.appContext)||Xf,r={uid:Zf++,vnode:e,type:s,parent:o,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Cp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:o?o.provides:Object.create(n.provides),ids:o?o.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Iu(s,n),emitsOptions:vu(s,n),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:s.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=o?o.root:r,r.emit=Lf.bind(null,r),e.ce&&e.ce(r),r}let Qe=null;const og=()=>Qe||po;let tn,Ss;{const e=En(),o=(a,s)=>{let n;return(n=e[a])||(n=e[a]=[]),n.push(s),r=>{n.length>1?n.forEach(i=>i(r)):n[0](r)}};tn=o("__VUE_INSTANCE_SETTERS__",a=>Qe=a),Ss=o("__VUE_SSR_SETTERS__",a=>bs=a)}const Cs=e=>{const o=Qe;return tn(e),e.scope.on(),()=>{e.scope.off(),tn(o)}},xt=()=>{Qe&&Qe.scope.off(),tn(null)};function zu(e){return e.vnode.shapeFlag&4}let bs=!1;function ag(e,o=!1,a=!1){o&&Ss(o);const{props:s,children:n}=e.vnode,r=zu(e);jf(e,s,r,o),Vf(e,n,a||o);const i=r?sg(e,o):void 0;return o&&Ss(!1),i}function sg(e,o){const a=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Pf);const{setup:s}=a;if(s){Bo();const n=e.setupContext=s.length>1?rg(e):null,r=Cs(e),i=Is(s,e,0,[e.props,n]),t=Jc(i);if(Yo(),r(),(t||e.sp)&&!cs(e)&&pu(e),t){if(i.then(xt,xt),o)return i.then(l=>{Ss(!0);try{Vt(e,l,o)}finally{Ss(!1)}}).catch(l=>{Pn(l,e,0)});e.asyncDep=i}else Vt(e,i)}else Ju(e)}function Vt(e,o,a){K(o)?e.type.__ssrInlineRender?e.ssrRender=o:e.render=o:he(o)&&(e.setupState=nu(o)),Ju(e)}function Ju(e,o,a){const s=e.type;e.render||(e.render=s.render||No);{const n=Cs(e);Bo();try{qf(e)}finally{Yo(),n()}}}const ng={get(e,o){return Ge(e,"get",""),e[o]}};function rg(e){const o=a=>{e.exposed=a||{}};return{attrs:new Proxy(e.attrs,ng),slots:e.slots,emit:e.emit,expose:o}}function Rn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(nu(Bp(e.exposed)),{get(o,a){if(a in o)return o[a];if(a in us)return us[a](e)},has(o,a){return a in o||a in us}})):e.proxy}function ig(e,o=!0){return K(e)?e.displayName||e.name:e.name||o&&e.__name}function tg(e){return K(e)&&"__vccOpts"in e}const U=(e,o)=>Kp(e,o,bs);function _r(e,o,a){try{sn(-1);const s=arguments.length;return s===2?he(o)&&!Q(o)?nn(o)?Pe(e,null,[o]):Pe(e,o):Pe(e,null,o):(s>3?a=Array.prototype.slice.call(arguments,2):s===3&&nn(a)&&(a=[a]),Pe(e,o,a))}finally{sn(1)}}const lg="3.5.41";/**
* @vue/runtime-dom v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let zr;const Ft=typeof window<"u"&&window.trustedTypes;if(Ft)try{zr=Ft.createPolicy("vue",{createHTML:e=>e})}catch{}const ju=zr?e=>zr.createHTML(e):e=>e,cg="http://www.w3.org/2000/svg",ug="http://www.w3.org/1998/Math/MathML",xo=typeof document<"u"?document:null,wt=xo&&xo.createElement("template"),dg={insert:(e,o,a)=>{o.insertBefore(e,a||null)},remove:e=>{const o=e.parentNode;o&&o.removeChild(e)},createElement:(e,o,a,s)=>{const n=o==="svg"?xo.createElementNS(cg,e):o==="mathml"?xo.createElementNS(ug,e):a?xo.createElement(e,{is:a}):xo.createElement(e);return e==="select"&&s&&s.multiple!=null&&n.setAttribute("multiple",s.multiple),n},createText:e=>xo.createTextNode(e),createComment:e=>xo.createComment(e),setText:(e,o)=>{e.nodeValue=o},setElementText:(e,o)=>{e.textContent=o},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>xo.querySelector(e),setScopeId(e,o){e.setAttribute(o,"")},insertStaticContent(e,o,a,s,n,r){const i=a?a.previousSibling:o.lastChild;if(n&&(n===r||n.nextSibling))for(;o.insertBefore(n.cloneNode(!0),a),!(n===r||!(n=n.nextSibling)););else{wt.innerHTML=ju(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const t=wt.content;if(s==="svg"||s==="mathml"){const l=t.firstChild;for(;l.firstChild;)t.appendChild(l.firstChild);t.removeChild(l)}o.insertBefore(t,a)}return[i?i.nextSibling:o.firstChild,a?a.previousSibling:o.lastChild]}},mg=Symbol("_vtc");function pg(e,o,a){const s=e[mg];s&&(o=(o?[o,...s]:[...s]).join(" ")),o==null?e.removeAttribute("class"):a?e.setAttribute("class",o):e.className=o}const ln=Symbol("_vod"),Uu=Symbol("_vsh"),fg={name:"show",beforeMount(e,{value:o},{transition:a}){e[ln]=e.style.display==="none"?"":e.style.display,a&&o?a.beforeEnter(e):Qa(e,o)},mounted(e,{value:o},{transition:a}){a&&o&&a.enter(e)},updated(e,{value:o,oldValue:a},{transition:s}){!o!=!a&&(s?o?(s.beforeEnter(e),Qa(e,!0),s.enter(e)):s.leave(e,()=>{Qa(e,!1)}):Qa(e,o))},beforeUnmount(e,{value:o}){Qa(e,o)}};function Qa(e,o){e.style.display=o?e[ln]:"none",e[Uu]=!o}const gg=Symbol(""),Sg=/(?:^|;)\s*display\s*:/;function bg(e,o,a){const s=e.style,n=Me(a);let r=!1;if(a&&!n){if(o)if(Me(o))for(const i of o.split(";")){const t=i.slice(0,i.indexOf(":")).trim();a[t]==null&&as(s,t,"")}else for(const i in o)a[i]==null&&as(s,i,"");for(const i in a){i==="display"&&(r=!0);const t=a[i];t!=null?vg(e,i,!Me(o)&&o?o[i]:void 0,t)||as(s,i,t):as(s,i,"")}}else if(n){if(o!==a){const i=s[gg];i&&(a+=";"+i),s.cssText=a,r=Sg.test(a)}}else o&&e.removeAttribute("style");ln in e&&(e[ln]=r?s.display:"",e[Uu]&&(s.display="none"))}const kt=/\s*!important$/;function as(e,o,a){if(Q(a))a.forEach(s=>as(e,o,s));else if(a==null&&(a=""),o.startsWith("--"))e.setProperty(o,a);else{const s=yg(e,o);kt.test(a)?e.setProperty(va(s),a.replace(kt,""),"important"):e[s]=a}}const Bt=["Webkit","Moz","ms"],ar={};function yg(e,o){const a=ar[o];if(a)return a;let s=ao(o);if(s!=="filter"&&s in e)return ar[o]=s;s=vn(s);for(let n=0;n<Bt.length;n++){const r=Bt[n]+s;if(r in e)return ar[o]=r}return o}function vg(e,o,a,s){return e.tagName==="TEXTAREA"&&(o==="width"||o==="height")&&Me(s)&&a===s}const Yt="http://www.w3.org/1999/xlink";function Gt(e,o,a,s,n,r=qp(o)){s&&o.startsWith("xlink:")?a==null?e.removeAttributeNS(Yt,o.slice(6,o.length)):e.setAttributeNS(Yt,o,a):a==null||r&&!xc(a)?e.removeAttribute(o):e.setAttribute(o,r?"":_o(a)?String(a):a)}function Qt(e,o,a,s,n){if(o==="innerHTML"||o==="textContent"){a!=null&&(e[o]=o==="innerHTML"?ju(a):a);return}const r=e.tagName;if(o==="value"&&r!=="PROGRESS"&&!r.includes("-")){const t=r==="OPTION"?e.getAttribute("value")||"":e.value,l=a==null?e.type==="checkbox"?"on":"":String(a);(t!==l||!("_value"in e))&&(e.value=l),a==null&&e.removeAttribute(o),e._value=a;return}let i=!1;if(a===""||a==null){const t=typeof e[o];t==="boolean"?a=xc(a):a==null&&t==="string"?(a="",i=!0):t==="number"&&(a=0,i=!0)}try{e[o]=a}catch{}i&&e.removeAttribute(n||o)}function oa(e,o,a,s){e.addEventListener(o,a,s)}function hg(e,o,a,s){e.removeEventListener(o,a,s)}const Wt=Symbol("_vei");function Eg(e,o,a,s,n=null){const r=e[Wt]||(e[Wt]={}),i=r[o];if(s&&i)i.value=s;else{const[t,l]=qg(o);if(s){const u=r[o]=Og(s,n);oa(e,t,u,l)}else i&&(hg(e,t,i,l),r[o]=void 0)}}const Ag=/(Once|Passive|Capture)$/,Pg=/^on:?(?:Once|Passive|Capture)$/;function qg(e){let o,a;for(;(a=e.match(Ag))&&!Pg.test(e);)o||(o={}),e=e.slice(0,e.length-a[1].length),o[a[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):va(e.slice(2)),o]}let sr=0;const Ig=Promise.resolve(),Cg=()=>sr||(Ig.then(()=>sr=0),sr=Date.now());function Og(e,o){const a=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=a.attached)return;const n=a.value;if(Q(n)){const r=s.stopImmediatePropagation;s.stopImmediatePropagation=()=>{r.call(s),s._stopped=!0};const i=n.slice(),t=[s];for(let l=0;l<i.length&&!s._stopped;l++){const u=i[l];u&&Ao(u,o,5,t)}}else Ao(n,o,5,[s])};return a.value=e,a.attached=Cg(),a}const Kt=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Dg=(e,o,a,s,n,r)=>{const i=n==="svg";o==="class"?pg(e,s,i):o==="style"?bg(e,a,s):Sn(o)?bn(o)||Eg(e,o,a,s,r):(o[0]==="."?(o=o.slice(1),!0):o[0]==="^"?(o=o.slice(1),!1):Rg(e,o,s,i))?(Qt(e,o,s),!e.tagName.includes("-")&&(o==="value"||o==="checked"||o==="selected")&&Gt(e,o,s,i,r,o!=="value")):e._isVueCE&&($g(e,o)||e._def.__asyncLoader&&(/[A-Z]/.test(o)||!Me(s)))?Qt(e,ao(o),s,r,o):(o==="true-value"?e._trueValue=s:o==="false-value"&&(e._falseValue=s),Gt(e,o,s,i))};function Rg(e,o,a,s){if(s)return!!(o==="innerHTML"||o==="textContent"||o in e&&Kt(o)&&K(a));if(o==="spellcheck"||o==="draggable"||o==="translate"||o==="autocorrect"||o==="sandbox"&&e.tagName==="IFRAME"||o==="form"||o==="list"&&e.tagName==="INPUT"||o==="type"&&e.tagName==="TEXTAREA")return!1;if(o==="width"||o==="height"){const n=e.tagName;if(n==="IMG"||n==="VIDEO"||n==="CANVAS"||n==="SOURCE")return!1}return Kt(o)&&Me(a)?!1:o in e}function $g(e,o){const a=e._def.props;if(!a)return!1;const s=ao(o);return Array.isArray(a)?a.some(n=>ao(n)===s):Object.keys(a).some(n=>ao(n)===s)}const _a=e=>{const o=e.props["onUpdate:modelValue"]||!1;return Q(o)?a=>Ys(o,a):o};function Tg(e){e.target.composing=!0}function Xt(e){const o=e.target;o.composing&&(o.composing=!1,o.dispatchEvent(new Event("input")))}const Lo=Symbol("_assign"),Hs=Symbol("_initialValue");function nr(e,o,a){return o&&(e=e.trim()),a&&(e=hn(e)),e}const ss={created(e,{modifiers:{lazy:o,trim:a,number:s}},n){e.parentNode&&(e.type==="text"?e[Hs]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[Hs]=e.defaultValue.replace(/\r\n?/g,`
`))),e[Lo]=_a(n);const r=s||n.props&&n.props.type==="number";oa(e,o?"change":"input",i=>{i.target.composing||e[Lo](nr(e.value,a,r))}),(a||r)&&oa(e,"change",()=>{e.value=nr(e.value,a,r)}),o||(oa(e,"compositionstart",Tg),oa(e,"compositionend",Xt),oa(e,"change",Xt))},mounted(e,{value:o,modifiers:{trim:a,number:s}}){const n=o??"",r=e[Hs];delete e[Hs],r!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==r?e[Lo](nr(e.value,a,s)):e.value=n},beforeUpdate(e,{value:o,oldValue:a,modifiers:{lazy:s,trim:n,number:r}},i){if(e[Lo]=_a(i),e.composing)return;const t=(r||e.type==="number")&&!/^0\d/.test(e.value)?hn(e.value):e.value,l=o??"";if(t===l)return;const u=e.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===e&&e.type!=="range"&&(s&&o===a||n&&e.value.trim()===l)||(e.value=l)}},Pa={deep:!0,created(e,o,a){e[Lo]=_a(a),oa(e,"change",()=>{const s=e._modelValue,n=ys(e),r=e.checked,i=e[Lo];if(Q(s)){const t=oi(s,n),l=t!==-1;if(r&&!l)i(s.concat(n));else if(!r&&l){const u=[...s];u.splice(t,1),i(u)}}else if(xa(s)){const t=new Set(s);r?t.add(n):t.delete(n),i(t)}else i(Hu(e,r))})},mounted:Zt,beforeUpdate(e,o,a){e[Lo]=_a(a),Zt(e,o,a)}};function Zt(e,{value:o,oldValue:a},s){e._modelValue=o;let n;if(Q(o))n=oi(o,s.props.value)>-1;else if(xa(o))n=o.has(s.props.value);else{if(o===a)return;n=Va(o,Hu(e,!0))}e.checked!==n&&(e.checked=n)}const Lg={deep:!0,created(e,{value:o,modifiers:{number:a}},s){e._modelValue=o,oa(e,"change",()=>{const n=Array.prototype.filter.call(e.options,r=>r.selected).map(r=>a?hn(ys(r)):ys(r));e[Lo](e.multiple?xa(e._modelValue)?new Set(n):n:n[0]),e._assigning=!0,da(()=>{e._assigning=!1})}),e[Lo]=_a(s)},mounted(e,{value:o}){el(e,o)},beforeUpdate(e,{value:o},a){e._modelValue=o,e[Lo]=_a(a)},updated(e,{value:o}){e._assigning||el(e,o)}};function el(e,o){const a=e.multiple,s=Q(o);if(!(a&&!s&&!xa(o))){for(let n=0,r=e.options.length;n<r;n++){const i=e.options[n],t=ys(i);if(a)if(s){const l=typeof t;l==="string"||l==="number"?i.selected=o.some(u=>String(u)===String(t)):i.selected=oi(o,t)>-1}else i.selected=o.has(t);else if(Va(ys(i),o)){e.selectedIndex!==n&&(e.selectedIndex=n);return}}!a&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function ys(e){return"_value"in e?e._value:e.value}function Hu(e,o){const a=o?"_trueValue":"_falseValue";return a in e?e[a]:o}const Mg=Ve({patchProp:Dg},dg);let ol;function Ng(){return ol||(ol=wf(Mg))}const _g=((...e)=>{const o=Ng().createApp(...e),{mount:a}=o;return o.mount=s=>{const n=Jg(s);if(!n)return;const r=o._component;!K(r)&&!r.render&&!r.template&&(r.template=n.innerHTML),n.nodeType===1&&(n.textContent="");const i=a(n,!1,zg(n));return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),i},o});function zg(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Jg(e){return Me(e)?document.querySelector(e):e}const jg="modulepreload",Ug=function(e,o){return new URL(e,o).href},al={},$n=function(o,a,s){let n=Promise.resolve();if(a&&a.length>0){let u=function(c){return Promise.all(c.map(m=>Promise.resolve(m).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};const i=document.getElementsByTagName("link"),t=document.querySelector("meta[property=csp-nonce]"),l=t?.nonce||t?.getAttribute("nonce");n=u(a.map(c=>{if(c=Ug(c,s),c in al)return;al[c]=!0;const m=c.endsWith(".css"),f=m?'[rel="stylesheet"]':"";if(s)for(let C=i.length-1;C>=0;C--){const O=i[C];if(O.href===c&&(!m||O.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${f}`))return;const h=document.createElement("link");if(h.rel=m?"stylesheet":jg,m||(h.as="script"),h.crossOrigin="",h.href=c,l&&h.setAttribute("nonce",l),document.head.appendChild(h),m)return new Promise((C,O)=>{h.addEventListener("load",C),h.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(i){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=i,window.dispatchEvent(t),!t.defaultPrevented)throw i}return n.then(i=>{for(const t of i||[])t.status==="rejected"&&r(t.reason);return o().catch(r)})};function Hg(e={}){const{immediate:o=!1,onNeedReload:a,onNeedRefresh:s,onOfflineReady:n,onRegistered:r,onRegisteredSW:i,onRegisterError:t}=e;let l,u;const c=async(f=!0)=>{await u};async function m(){if("serviceWorker"in navigator){if(l=await $n(async()=>{const{Workbox:f}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:f}},[],import.meta.url).then(({Workbox:f})=>new f("./sw.js",{scope:"./",type:"classic"})).catch(f=>{t?.(f)}),!l)return;l.addEventListener("activated",f=>{(f.isUpdate||f.isExternal)&&(a?a():window.location.reload())}),l.addEventListener("installed",f=>{f.isUpdate||n?.()}),l.register({immediate:o}).then(f=>{i?i("./sw.js",f):r?.(f)}).catch(f=>{t?.(f)})}}return u=m(),c}/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sl=e=>e==="";/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=(...e)=>e.filter((o,a,s)=>!!o&&o.trim()!==""&&s.indexOf(o)===a).join(" ").trim();/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nl=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,a,s)=>s?s.toUpperCase():a.toLowerCase());/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=e=>{const o=Vg(e);return o.charAt(0).toUpperCase()+o.slice(1)};/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qa={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=Symbol("lucide-icons");function kg(){return ts(wg,{})}/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=({name:e,iconNode:o,"icon-node":a,absoluteStrokeWidth:s,"absolute-stroke-width":n,strokeWidth:r,"stroke-width":i,size:t,color:l,...u},{slots:c})=>{const{size:m,color:f,strokeWidth:h=2,absoluteStrokeWidth:C=!1,class:O=""}=kg(),J=U(()=>{const H=sl(s)||sl(n)||s===!0||n===!0||C===!0,z=r||i||h||qa["stroke-width"];return H?Number(z)*24/Number(t??m??qa.width):z});return _r("svg",{...qa,...u,width:t??m??qa.width,height:t??m??qa.height,stroke:l??f??qa.stroke,"stroke-width":J.value,class:xg("lucide",O,...e?[`lucide-${nl(Fg(e))}-icon`,`lucide-${nl(e)}`]:["lucide-icon"])},[...(o??a??[]).map(H=>_r(...H)),...c.default?[c.default()]:[]])};/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=(e,o)=>(a,{slots:s,attrs:n})=>_r(Bg,{...n,...a,iconNode:o,name:e},s.default?{default:s.default}:void 0);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],Gg=ne("book-marked",Yg);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M16 13h2",key:"weia3s"}],["path",{d:"M16 9h2",key:"1n7gjm"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}],["path",{d:"M6 13h2",key:"1cckiz"}],["path",{d:"M6 9h2",key:"1k7j9f"}]],Wg=ne("book-open-text",Qg);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]],Xg=ne("book-open",Kg);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M8 13h.01",key:"1sbv64"}],["path",{d:"M12 13h.01",key:"y0uutt"}],["path",{d:"M16 13h.01",key:"wip0gl"}],["path",{d:"M8 17h.01",key:"p3bg7i"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M16 17h.01",key:"ql8jdd"}]],rl=ne("calendar-days",Zg);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Jr=ne("chevron-left",eS);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],xu=ne("chevron-right",oS);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=[["path",{d:"m7 6 5 5 5-5",key:"1lc07p"}],["path",{d:"m7 13 5 5 5-5",key:"1d48rs"}]],sS=ne("chevrons-down",aS);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=[["path",{d:"m17 11-5-5-5 5",key:"e8nh98"}],["path",{d:"m17 18-5-5-5 5",key:"2avn1x"}]],rS=ne("chevrons-up",nS);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6h4",key:"135r8i"}]],tS=ne("clock-3",iS);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],cS=ne("flame",lS);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=[["path",{d:"m11.9 12.1 4.514-4.514",key:"109xqo"}],["path",{d:"M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z",key:"txyc8t"}],["path",{d:"m6 16 2 2",key:"16qmzd"}],["path",{d:"M8.23 9.85A3 3 0 0 1 11 8a5 5 0 0 1 5 5 3 3 0 0 1-1.85 2.77l-.92.38A2 2 0 0 0 12 18a4 4 0 0 1-4 4 6 6 0 0 1-6-6 4 4 0 0 1 4-4 2 2 0 0 0 1.85-1.23z",key:"1de1vg"}]],dS=ne("guitar",uS);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=[["path",{d:"M10 18v-7",key:"wt116b"}],["path",{d:"M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z",key:"yxxwt6"}],["path",{d:"M14 18v-7",key:"vav6t3"}],["path",{d:"M18 18v-7",key:"aexdmj"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M6 18v-7",key:"1ivflk"}]],pS=ne("landmark",mS);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],gS=ne("message-square",fS);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=[["path",{d:"m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12",key:"80a601"}],["path",{d:"M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5",key:"j0ngtp"}],["circle",{cx:"16",cy:"7",r:"5",key:"d08jfb"}]],bS=ne("mic-vocal",SS);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=[["path",{d:"M18 5h4",key:"1lhgn2"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],vS=ne("moon-star",yS);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],ES=ne("moon",hS);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],PS=ne("pause",AS);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Vu=ne("play",qS);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],CS=ne("refresh-cw",IS);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],DS=ne("rotate-ccw",OS);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=[["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]],$S=ne("scroll",RS);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],LS=ne("search",TS);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=[["path",{d:"m10 20-1.25-2.5L6 18",key:"18frcb"}],["path",{d:"M10 4 8.75 6.5 6 6",key:"7mghy3"}],["path",{d:"m14 20 1.25-2.5L18 18",key:"1chtki"}],["path",{d:"m14 4 1.25 2.5L18 6",key:"1b4wsy"}],["path",{d:"m17 21-3-6h-4",key:"15hhxa"}],["path",{d:"m17 3-3 6 1.5 3",key:"11697g"}],["path",{d:"M2 12h6.5L10 9",key:"kv9z4n"}],["path",{d:"m20 10-1.5 2 1.5 2",key:"1swlpi"}],["path",{d:"M22 12h-6.5L14 15",key:"1mxi28"}],["path",{d:"m4 10 1.5 2L4 14",key:"k9enpj"}],["path",{d:"m7 21 3-6-1.5-3",key:"j8hb9u"}],["path",{d:"m7 3 3 6h4",key:"1otusx"}]],NS=ne("snowflake",MS);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],zS=ne("sparkles",_S);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],jS=ne("square",JS);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],il=ne("sun",US);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]],xS=ne("sunrise",HS);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=[["path",{d:"M12 10V2",key:"16sf7g"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m16 6-4 4-4-4",key:"6wukr"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]],FS=ne("sunset",VS);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5",key:"hbey2j"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18",key:"1hf58s"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20",key:"pidxm4"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21",key:"1pehsh"}]],kS=ne("swords",wS);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=[["path",{d:"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z",key:"oadzkq"}],["path",{d:"M12 19v3",key:"npa21l"}]],YS=ne("tree-deciduous",BS);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=[["path",{d:"M16 17h6v-6",key:"t6n2it"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7",key:"x473p"}]],QS=ne("trending-down",GS);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],KS=ne("trending-up",WS);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]],ZS=ne("unlink",XS);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],ob=ne("users",eb);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],sb=ne("video",ab);let Ws=null,xs=null;function nb(){return Ws?Promise.resolve(Ws):(xs||(xs=$n(async()=>{const{Bible:e}=await import("./biblia-de-jerusalen.es-CSK_9JO8.js");return{Bible:e}},[],import.meta.url).then(({Bible:e})=>{const o=new e,a=o.getAllBooks().map(s=>{const n=o.getBook(s);return{name:s,abbreviation:n.abreviacion,testament:n.testamento,chapters:n.chapters}});return Ws=a,a}).catch(e=>{throw xs=null,e})),xs)}function rb(){return Ws!==null}function ib(e,o){return e.find(a=>a.name===o)}function tb(e,o){return e.chapters.find(a=>a.chapter===o)}function lb(e){return Object.entries(e.verses).filter(([,o])=>!!o).map(([o,a])=>({number:o,text:a})).sort((o,a)=>Number(o.number)-Number(a.number))}function cb(e,o){const a=rr(o);return a?e.filter(s=>rr(s.name).includes(a)||rr(s.abbreviation).includes(a)):e}function rr(e){return e.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().trim()}function Fu(){return typeof navigator<"u"&&navigator.onLine===!1}const jr=w(typeof navigator>"u"?!0:navigator.onLine!==!1);typeof window<"u"&&(window.addEventListener("online",()=>{jr.value=!0}),window.addEventListener("offline",()=>{jr.value=!1}));function wu(e){if(Fu())return!0;const o=e instanceof Error?`${e.name}: ${e.message}`:String(e??"");return/failed to fetch|networkerror|network error|load failed|err_internet|err_network|dynamically imported module|importing a module script failed|offline/i.test(o)}function ku(e,o,a){return wu(e)?a:o}const ub={class:"reader-surface bible-surface"},db={class:"bible-header"},mb={key:0,class:"loading-state"},pb={key:1,class:"empty-state"},fb={class:"bible-search"},gb={key:0,class:"empty-state"},Sb={key:0,class:"bible-group"},bb={class:"section-eyebrow"},yb={class:"bible-book-list"},vb=["onClick"],hb={key:0,class:"chapter-grid"},Eb=["onClick"],Ab={key:1,class:"empty-state"},Pb={key:0,class:"bible-text"},qb={class:"verse-number"},Ib={key:1,class:"empty-state"},Cb={class:"chapter-nav"},Ob=["disabled"],Db=["disabled"],Rb=In({__name:"BiblePage",props:{book:{},chapter:{}},emits:["select-book","select-chapter","back"],setup(e,{emit:o}){const a=e,s=o,n=w([]),r=w(!rb()),i=w(""),t=w("");pi(async()=>{try{n.value=await nb()}catch(_){i.value=ku(_,"No se pudo abrir la Biblia. Vuelve a entrar en un momento.","Sin conexión: la Biblia aún no está guardada en el móvil. Ábrela una vez con red y después funcionará sin conexión.")}finally{r.value=!1}});const l=U(()=>cb(n.value,t.value)),u=U(()=>l.value.filter(_=>_.testament==="Antiguo")),c=U(()=>l.value.filter(_=>_.testament==="Nuevo")),m=U(()=>a.book?ib(n.value,a.book):void 0),f=U(()=>{const _=m.value;return _&&a.chapter?tb(_,a.chapter):void 0}),h=U(()=>f.value?lb(f.value):[]),C=U(()=>{const _=m.value;return!_||!a.chapter?-1:_.chapters.findIndex(L=>L.chapter===a.chapter)}),O=U(()=>{const _=m.value;return _&&C.value>0?_.chapters[C.value-1].chapter:null}),J=U(()=>{const _=m.value;return!_||C.value<0||C.value>=_.chapters.length-1?null:_.chapters[C.value+1].chapter}),H=U(()=>a.book&&a.chapter?"verses":a.book?"chapters":"books"),z=U(()=>{if(H.value==="books")return"Biblia de Jerusalén";const _=m.value?.name??a.book??"";return H.value==="verses"?`${_} ${a.chapter}`:_});return ge(H,()=>window.scrollTo({top:0,behavior:"auto"})),ge(()=>a.chapter,()=>window.scrollTo({top:0,behavior:"auto"})),(_,L)=>(T(),N("article",ub,[b("div",db,[b("button",{type:"button",class:"icon-button","aria-label":"Volver",onClick:L[0]||(L[0]=j=>s("back"))},[Pe(Te(Jr),{size:22})]),b("div",null,[L[4]||(L[4]=b("p",{class:"kicker"},"Biblia",-1)),b("h1",null,G(z.value),1)])]),r.value?(T(),N("div",mb,[...L[5]||(L[5]=[b("span",null,null,-1),aa(" Cargando la Biblia ",-1)])])):i.value?(T(),N("div",pb,G(i.value),1)):H.value==="books"?(T(),N(fe,{key:2},[b("label",fb,[Pe(Te(LS),{size:18}),mo(b("input",{"onUpdate:modelValue":L[1]||(L[1]=j=>t.value=j),type:"search",placeholder:"Buscar libro","aria-label":"Buscar libro"},null,512),[[ss,t.value]])]),l.value.length?Se("",!0):(T(),N("p",gb,"Ningún libro coincide con «"+G(t.value)+"».",1)),(T(!0),N(fe,null,to([{title:"Antiguo Testamento",items:u.value},{title:"Nuevo Testamento",items:c.value}],j=>(T(),N(fe,{key:j.title},[j.items.length?(T(),N("section",Sb,[b("p",bb,G(j.title),1),b("ul",yb,[(T(!0),N(fe,null,to(j.items,X=>(T(),N("li",{key:X.name},[b("button",{type:"button",class:"bible-book",onClick:me=>s("select-book",X.name)},[b("span",null,G(X.name),1),b("small",null,G(X.abbreviation),1)],8,vb)]))),128))])])):Se("",!0)],64))),128))],64)):H.value==="chapters"?(T(),N(fe,{key:3},[m.value?(T(),N("div",hb,[(T(!0),N(fe,null,to(m.value.chapters,j=>(T(),N("button",{key:j.chapter,type:"button",class:"chapter-box",onClick:X=>s("select-chapter",j.chapter)},G(j.chapter),9,Eb))),128))])):(T(),N("p",Ab,"No se encontró el libro «"+G(a.book)+"».",1))],64)):(T(),N(fe,{key:4},[h.value.length?(T(),N("div",Pb,[(T(!0),N(fe,null,to(h.value,j=>(T(),N("p",{key:j.number},[b("small",qb,G(j.number),1),aa(" "+G(j.text),1)]))),128))])):(T(),N("p",Ib,"No se encontró ese capítulo.")),b("div",Cb,[b("button",{type:"button",class:"text-button",disabled:!O.value,onClick:L[2]||(L[2]=j=>O.value&&s("select-chapter",O.value))},[Pe(Te(Jr),{size:18}),L[6]||(L[6]=aa(" Anterior ",-1))],8,Ob),b("button",{type:"button",class:"text-button",disabled:!J.value,onClick:L[3]||(L[3]=j=>J.value&&s("select-chapter",J.value))},[L[7]||(L[7]=aa(" Siguiente ",-1)),Pe(Te(xu),{size:18})],8,Db)])],64))]))}}),Ur=[{number:6,name:"E",latin:"Mi",frequency:82.41},{number:5,name:"A",latin:"La",frequency:110},{number:4,name:"D",latin:"Re",frequency:146.83},{number:3,name:"G",latin:"Sol",frequency:196},{number:2,name:"B",latin:"Si",frequency:246.94},{number:1,name:"E",latin:"Mi",frequency:329.63}],$b=5,tl=60,ll=500,Tb=.008,Lb=.9;function Mb(e,o){const a=e.length;if(a<512)return null;let s=0;for(let f=0;f<a;f+=1)s+=e[f];s/=a;const n=new Float32Array(a);let r=0;for(let f=0;f<a;f+=1){const h=e[f]-s;n[f]=h,r+=h*h}if(Math.sqrt(r/a)<Tb)return null;const i=Math.max(2,Math.floor(o/ll)),t=Math.min(a-1,Math.ceil(o/tl));if(t<=i)return null;const l=new Float32Array(t+1);for(let f=1;f<=t;f+=1){let h=0,C=0;const O=a-f;for(let J=0;J<O;J+=1){const H=n[J],z=n[J+f];h+=H*z,C+=H*H+z*z}l[f]=C>0?2*h/C:0}const u=Nb(l,i,t);if(u===null)return null;const c=_b(l,u),m=o/c;return m<tl||m>ll?null:{frequency:m,clarity:Math.min(1,Math.max(0,l[u]))}}function Nb(e,o,a){const s=[];let n=1;for(;n<=a&&e[n]>0;)n+=1;for(;n<a;n+=1)if(e[n]>e[n-1]&&e[n]>=e[n+1])for(n>=o&&s.push(n);n<a&&e[n+1]>=0;)n+=1;if(!s.length)return null;let r=s[0];for(const t of s)e[t]>e[r]&&(r=t);if(e[r]<Lb)return null;const i=e[r]*.9;for(const t of s)if(e[t]>=i)return t;return r}function _b(e,o){const a=e[o-1]??e[o],s=e[o+1]??e[o],n=2*(2*e[o]-a-s);if(!Number.isFinite(n)||n===0)return o;const r=(s-a)/n;return Math.abs(r)<1?o+r:o}function zb(e){let o=Ur[0],a=cl(e,o.frequency);for(const s of Ur){const n=cl(e,s.frequency);Math.abs(n)<Math.abs(a)&&(o=s,a=n)}return{string:o,cents:a}}function cl(e,o){return 1200*Math.log2(e/o)}const Jb={class:"tool-panel tuner-panel"},jb={class:"panel-title panel-title-preces"},Ub=["aria-pressed","aria-label"],Hb={class:"tuner-note"},xb={key:1},Vb={class:"tuner-gauge",role:"presentation"},Fb={class:"tuner-hint","aria-live":"polite"},wb={key:0},kb={key:1},Bb={class:"tuner-strings"},Yb={key:1,class:"tuner-hint tuner-hint-error"},Gb=70,ir=50,Qb=1200,Wb=.35,Kb=In({__name:"GuitarTuner",setup(e){const o=w(!1),a=w(""),s=w(null);let n=null,r=null,i=null,t=null,l=null,u=null,c=null,m=0;const f=U(()=>s.value===null?null:zb(s.value)),h=U(()=>f.value?Math.round(f.value.cents):0),C=U(()=>f.value!==null&&Math.abs(f.value.cents)<=$b),O=U(()=>f.value?50+Math.max(-ir,Math.min(ir,f.value.cents))/ir*50:50),J=U(()=>a.value?a.value:f.value?C.value?"Afinada":"":"Pulsa una cuerda");function H(){o.value?_():z()}async function z(){a.value="";try{r=await navigator.mediaDevices.getUserMedia({audio:{autoGainControl:!1,echoCancellation:!1,noiseSuppression:!1}});const j=window.AudioContext??window.webkitAudioContext;n=new j,n.state==="suspended"&&await n.resume(),i=n.createAnalyser(),i.fftSize=2048,u=new Float32Array(i.fftSize),t=n.createMediaStreamSource(r),t.connect(i),o.value=!0,m=performance.now(),l=window.setInterval(L,Gb)}catch(j){_(),a.value=j instanceof DOMException&&j.name==="NotAllowedError"?"Sin permiso de micrófono":"No se pudo abrir el micrófono"}}function _(){l!==null&&(window.clearInterval(l),l=null),t?.disconnect(),i?.disconnect(),r?.getTracks().forEach(j=>j.stop()),n?.close().catch(()=>{}),t=null,i=null,r=null,n=null,u=null,c=null,s.value=null,o.value=!1}function L(){if(!i||!u||!n)return;i.getFloatTimeDomainData(u);const j=Mb(u,n.sampleRate),X=performance.now();if(!j){X-m>Qb&&(s.value=null,c=null);return}m=X,c=c===null||Math.abs(1200*Math.log2(j.frequency/c))>200?j.frequency:c+(j.frequency-c)*Wb,s.value=c}return fi(_),(j,X)=>(T(),N("section",Jb,[b("div",jb,[X[0]||(X[0]=b("span",{class:"panel-title-spacer","aria-hidden":"true"},null,-1)),X[1]||(X[1]=b("div",null,[b("p",{class:"home-date"},"Afinador")],-1)),b("button",{type:"button",class:Le(["tuner-power-button",{active:o.value}]),"aria-pressed":o.value,"aria-label":o.value?"Apagar el afinador":"Encender el afinador",onClick:H},[Pe(Te(dS),{size:16})],10,Ub)]),o.value?(T(),N("div",{key:0,class:Le(["tuner-readout",{"is-tuned":C.value,"is-idle":!f.value}])},[b("p",Hb,[f.value?(T(),N(fe,{key:0},[b("strong",null,G(f.value.string.latin),1),b("small",null,G(f.value.string.name)+" · "+G(f.value.string.number)+"ª",1)],64)):(T(),N("strong",xb,"—"))]),b("div",Vb,[X[2]||(X[2]=b("span",{class:"tuner-gauge-center","aria-hidden":"true"},null,-1)),b("span",{class:"tuner-needle",style:qs({left:`${O.value}%`}),"aria-hidden":"true"},null,4)]),b("p",Fb,[J.value?(T(),N("span",wb,G(J.value),1)):Se("",!0),f.value?(T(),N("small",kb,G(h.value>0?"+":"")+G(h.value),1)):Se("",!0)]),b("ul",Bb,[(T(!0),N(fe,null,to(Te(Ur),me=>(T(),N("li",{key:me.number,class:Le({active:f.value?.string.number===me.number,tuned:C.value&&f.value?.string.number===me.number})},G(me.name),3))),128))])],2)):a.value?(T(),N("p",Yb,G(a.value),1)):Se("",!0)]))}}),Xb=[{key:"greg",label:"Gregoriano",capo:1,voices:3,chords:"DO SOL / DO la / FA SOL DO",icon:"Scroll"},{key:"desc",label:"Descendente",capo:1,voices:4,chords:"DO / la / FA re / SOL",icon:"TrendingDown"},{key:"cruz-fiel",label:"Oh Cruz Fiel",capo:2,chords:"Estribillo: la FA SOL la / la FA SOL la / FA SOL DO / la re la / FA SOL DO / FA la SOL DO — Estrofas: DO FA SOL DO / re FA la / FA DO SOL / FA SOL la",chordSheet:`[la]¡Oh cruz fiel, árbol [FA]únic[SOL]o en nob[la]leza!
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
con un [FA]peso tan [la]dulce en [SOL]su cort[DO]eza!`,icon:"TreeDeciduous"}],tr=[{key:"tatotaton",label:"Tatotatón",capo:4,voices:4,chords:"la / SOL DO / la / FA mi la",icon:"ChevronsDown"},{key:"tatitaton",label:"Tatitatón",capo:3,voices:2,chords:"la / DO SOL (flexa: la SOL)",icon:"ChevronsUp"},{key:"clasica",label:"Clásica",capo:4,voices:2,chords:"la DO / re MI la (flexa: la SOL)",icon:"Landmark"},{key:"arabe",label:"Árabe",capo:3,voices:2,chords:"re la / SOL re (flexa: re DO)",icon:"MoonStar"},{key:"rota",label:"Rota",capo:5,voices:2,chords:"DO SOL la / FA SOL DO (flexa: DO FA)",icon:"Unlink"},{key:"ascendente",label:"Ascendente",capo:1,voices:4,chords:"DO SOL / SOL la / la FA / FA SOL",icon:"TrendingUp"},{key:"epica",label:"Épica",capo:5,voices:4,chords:"DO SOL la / mi re / FA re / re SOL DO",icon:"Swords"},{key:"narnia",label:"Narnia",capo:1,voices:4,chords:"si MI / MI si / RE LA / fa# si",icon:"Snowflake"}],Zb=[{key:"invocacion",label:"Invocación inicial",capo:1,chords:"mi (si) / DO RE / mi DO mi / DO mi / DO RE mi (RE mi)",icon:"Flame"}],ey=[{key:"responsorio",label:"Responsorio breve",capo:3,voices:2,chords:"RE LA / SOL RE",icon:"MessageSquare"}],oy=[{key:"zacarias",label:"Cántico de Zacarías",capo:2,voices:4,chords:"DO SOL / mi la / FA DO / re SOL DO",icon:"Mic2"}],ay=[{key:"padrenuestro",label:"Padrenuestro",capo:1,chords:"DO FA DO / DO SOL DO / DO FA DO / DO SOL mi SOL la / DO FA DO / DO SOL mi SOL la / FA DO / DO SOL DO",icon:"Users"}],cn={"Invocación inicial":Zb,Himno:Xb,"Primer salmo":tr,"Segundo salmo":tr,"Tercer salmo":tr,"Responsorio breve":ey,"Cántico de Zacarías":oy,Padrenuestro:ay},Hr={"Invocación inicial":"invocacion",Himno:"greg","Primer salmo":"tatotaton","Segundo salmo":"tatitaton","Tercer salmo":"ascendente","Responsorio breve":"responsorio","Cántico de Zacarías":"zacarias",Padrenuestro:"padrenuestro"};function sy(e,o){return cn[e]?.find(a=>a.key===o)}const ny=/<\/?[a-z][\s\S]*>/i;function We(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function ul(e){return e.replace(/^\[\[ANTIPHON\]\]\s*(.*)$/gm,'<span class="antiphon-line"><span class="rubric">Ant.</span> $1</span>').replace(/\[\[REPEATED_?ANTIPHON\]\]\s*([^<\n\r]*)/g,'<span class="repeated-antiphon"><span class="rubric">R.</span> $1</span>').replace(/^\[\[READING_REFERENCE\]\]\s*(.*)$/gm,'<span class="reading-reference-line">$1</span>').replace(/^\[\[MASS_READING_PROCLAMATION\]\]\s*(.*)$/gm,'<span class="mass-reading-proclamation"><span class="rubric">Lector.</span> $1</span>').replace(/\[\[RESPONSORY_SPLIT\]\]/g,'<span class="responsory-split-mark" aria-hidden="true">|</span>').replace(/\$([^$]+)\$/g,(o,a)=>`<span class="${Ay(a)?"rubric posture-instruction":"rubric"}">${a}</span>`).replace(/_([^_]+)_/g,"<em>$1</em>").replace(/(^|\n)\s*(V\.|R\.|Ant\.|\u2123\.|\u211F\.)/g,'$1<span class="rubric">$2</span>')}function Bu(e){return e.includes("antiphon-line")||e.includes("repeated-antiphon")}function Fa(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function Os(e){return Fa(e.replace(/<[^>]*>/g," ")).replace(/[^a-z0-9]+/g," ").replace(/\s+/g," ").trim()}const ry="gloria al padre y al hijo y al espiritu santo como era en el principio ahora y siempre por los siglos de los siglos amen",iy="Inclinamos la cabeza mientras decimos:";function Tn(e){const o=e.map(Os).filter(Boolean);return o.length>0&&o.join(" ")===ry}function zo(e,o){return e.map((a,s)=>({label:a,lines:o[s]?[o[s]]:[]})).filter(a=>a.lines.length)}const yi='(?:"|&quot;|»|”)?',Ln=new RegExp(`[.!?]${yi}\\s*$`),Yu=new RegExp(`[.;:!?]${yi}\\s*$`),Gu=new RegExp(`,${yi}\\s*$`);function vi(e){const o=e.trim();return Yu.test(o)?1e4:Gu.test(o)?8:0}function ty(e){return Ln.test(e.trim())?5e3:0}function ly(e,o){const a=e.trim(),s=o.trim(),n=/[»”](?:[,;:.!?])?$/.test(a)||/(?:"|&quot;)(?:[,;:.!?])?$/.test(a),r=(/[«“]/.test(a)||/^(?:"|&quot;)/.test(a))&&!n,i=/[»”]/.test(s)||/(?:"|&quot;)$/.test(s);return r&&i?-220:r||i?-90:0}function Qu(e,o){return vi(e)+Wu([e,o])*.08+ly(e,o)}function Wu(e){return e.join(" ").replace(/\s+/g,"").length}function Ku(e){return e.length<=1?0:e.slice(0,-1).reduce((o,a,s)=>o+Qu(a,e[s+1]),0)}function cy(e){return e.reduce((o,a)=>{let s=0;return o+a.groups.reduce((n,r)=>{const i=r.lines.length>1?s*.12:0;return s+=r.lines.length,n+Ku(r.lines)+i},0)},0)}function uy(e){return e.reduce((o,a)=>o+a.groups.reduce((s,n)=>n.lines.length<=1?s:s+n.lines.slice(0,-1).filter(r=>vi(r)>=1e4).length,0),0)}function He(e,o){return{chunks:o,hardJoins:uy(o),pattern:e,score:cy(o)}}function dl(e,o){const a=[];let s;for(const n of o){const r=n.groups.flatMap(t=>t.lines);if(n.groups.length===1&&n.groups[0].label==="F"){s=r;continue}a.push(s?[...s,...r]:r),s=void 0}return s&&a.push(s),{chunks:o,hardJoins:a.reduce((n,r)=>n+(r.length<=1?0:r.slice(0,-1).filter(i=>vi(i)>=1e4).length),0),pattern:e,score:a.reduce((n,r)=>n+Ku(r)+r.slice(0,-1).reduce((i,t)=>i+ty(t),0),0)}}function Ks(e,o,a,s,n=0){const r=He(e,xr(o,a,s));return{...r,score:r.score+n}}function lr(e,o){const a=[];function s(r){a.push({groups:zo(["1","2"],r)})}function n(r){r[0]&&a.push({groups:[{label:"F",lines:[r[0]]}]});const i=r.slice(1);i.length&&s(i)}if(e.length%2===0){for(let r=0;r<e.length;r+=2)s(e.slice(r,r+2));return a}if(o){n(e.slice(0,3));for(let r=3;r<e.length;r+=2)s(e.slice(r,r+2));return a}for(let r=0;r<e.length-3;r+=2)s(e.slice(r,r+2));return n(e.slice(-3)),a}function hi(e){return e<=1?["1"]:e===2?["1","4"]:e===3?["1","2","4"]:["1","2","3","4"]}function Ei(e,o){return o===2?["1","3"]:e===2?["1","2"]:e===3?["1","2","3"]:["1","2","3","4"]}function ml(e,o){const a=[],s=e<=o*2?2:Math.max(2,Math.ceil(e/o)+1);function n(r,i,t){if(t===0){i===0&&a.push(r);return}const l=t-1,u=Math.min(s,i-l);for(let c=1;c<=u;c+=1)n([...r,c],i-c,t-1)}return n([],e,o),a}function xr(e,o,a){let s=0;return[{groups:a.map((n,r)=>{const i=e.slice(s,s+n);return s+=n,{label:o[r]??String(r+1),lines:i}}).filter(n=>n.lines.length)}]}function cr(e,o){return Wu(e.slice(o,o+2))}function Xu(e){const o=Ks("2-1-1",e,["1","2","3"],[2,1,1]),a=Ks("1-2-1",e,["1","2","3"],[1,2,1]),s=Ks("1-1-2",e,["1","2","3"],[1,1,2]),n=Math.min(cr(e,1),cr(e,2));return!(cr(e,0)>n*2)&&o.hardJoins===0?[{...o,score:o.score-120},a,s]:[o,a,s]}function dy(e){const o=new Map;for(const a of e){const s=o.get(a.pattern);(!s||a.score<s.score)&&o.set(a.pattern,a)}return[...o.values()]}function Zu(e){if(e.length!==5)return!1;const o=e.map(Fa);return o[0].startsWith("es la salvacion")&&o[1].startsWith("y de la mano")&&o[3].startsWith("recordando")&&o[4].startsWith("y el juramento")}function ed(e){if(e.length!==5)return!1;const o=e.map(a=>Fa(a).trim());return o[0].startsWith("y a ti, nino")&&o[1].startsWith("porque iras delante del senor")&&o[2].startsWith("a preparar sus caminos")&&o[3].startsWith("anunciando a su pueblo la salvacion")&&o[4].startsWith("el perdon de sus pecados")}function od(e){if(e.length!==5)return!1;const o=e.map(a=>Fa(a).trim());return o[0].startsWith("librame de la sangre")&&o[1].startsWith("dios salvador mio")&&o[2].startsWith("y cantara mi lengua")&&o[3].startsWith("senor, me abriras los labios")&&o[4].startsWith("y mi boca proclamara tu alabanza")}function my(e){if(e.length!==4)return!1;const o=e.map(a=>Fa(a).trim());return o[0].startsWith("tiene sed de dios")&&o[1].startsWith("del dios vivo")&&o[2].includes("cuando entrare a ver")&&o[3].startsWith("el rostro de dios")}function py(e){return[{groups:[{label:"F",lines:[e[0],e[1]]}]},{groups:zo(["1","2"],[e[2],e[3]])}]}function ad(e){if(e.length!==5)return!1;const o=e.map(a=>Fa(a).trim());return o[0].includes("favorece a sion")&&o[1].includes("murallas de jerusalen")&&o[2].startsWith("entonces aceptaras los sacrificios rituales")&&o[3].startsWith("ofrendas y holocaustos")&&o[4].includes("se inmolaran novillos")}function sd(e,o){const a=e.map(s=>[s]);for(;a.length>o;){const s=a.some((i,t)=>i.length===1&&a[t+1]?.length===1);let n=0,r=Number.POSITIVE_INFINITY;for(let i=0;i<a.length-1;i+=1){const t=a[i],l=a[i+1],u=t.length>1||l.length>1;if(s&&u)continue;const c=u?1e4:0,m=i===a.length-2?8:0,f=Qu(t[t.length-1],l[0])+c+m;f<r&&(r=f,n=i)}a.splice(n,2,[...a[n],...a[n+1]])}return{groups:a.map((s,n)=>({label:String(n+1),lines:s}))}}function fy(e){if(e.length<=3)return[{groups:zo(Ei(3,e.length),e)}];if(e.length%3===0){const o=[];for(let a=0;a<e.length;a+=3)o.push({groups:zo(["1","2","3"],e.slice(a,a+3))});return o}return[sd(e,3)]}function Wa(e){if(e.length<=4)return[{groups:zo(hi(e.length),e)}];if(Zu(e))return[{groups:[{label:"1",lines:[e[0]]},{label:"2",lines:[e[1]]},{label:"3",lines:[e[2]]},{label:"4",lines:[e[3],e[4]]}]}];if(ed(e))return[{groups:[{label:"1",lines:[e[0]]},{label:"2",lines:[e[1],e[2]]},{label:"3",lines:[e[3]]},{label:"4",lines:[e[4]]}]}];if(od(e))return[{groups:[{label:"1",lines:[e[0],e[1]]},{label:"2",lines:[e[2]]},{label:"3",lines:[e[3]]},{label:"4",lines:[e[4]]}]}];if(ad(e))return[{groups:[{label:"1",lines:[e[0]]},{label:"2",lines:[e[1]]},{label:"3",lines:[e[2],e[3]]},{label:"4",lines:[e[4]]}]}];if(e.length%4===0){const o=[];for(let a=0;a<e.length;a+=4)o.push({groups:zo(["1","2","3","4"],e.slice(a,a+4))});return o}return[sd(e,4)]}function gy(e){const o=e.length/2;let a,s=Number.POSITIVE_INFINITY,n,r=Number.POSITIVE_INFINITY,i=!1;for(let t=0;t<e.length;t+=1){const l=e[t];if(l==="<"){i=!0;continue}if(l===">"){i=!1;continue}if(i||l!==" ")continue;const u=Math.abs(t-o);t>0&&/[,;:.]/.test(e[t-1])&&u<s&&(a=t,s=u),u<r&&(n=t,r=u)}return a??n??-1}function Sy(e){const o=gy(e);if(o<0)return e;const a=e.slice(0,o).trimEnd(),s=e.slice(o).trimStart();return!a||!s?e:`${a} ${cd()} ${s}`}function pl(e){const o=e.replace(/<[^>]*>/g,"").trim();if(!o||Ln.test(o))return!1;const a=o.replace(/[¡!¿?.,;:"'«»“”‘’]/g,"").trim();return a.length>0&&!/\s/.test(a)}function fl(e,o){return`${e.trimEnd()} ${o.trimStart()}`}function nd(e){if(e.length<=1)return e;const o=[];let a=0;for(;a<e.length;){const s=e[a],n=a===e.length-1;if(!n&&pl(s)){o.push(fl(s,e[a+1])),a+=2;continue}if(n&&pl(s)&&o.length>0){const r=o[o.length-1];if(!Ln.test(r.replace(/<[^>]*>/g,"").trim())){o[o.length-1]=fl(r,s),a+=1;continue}}o.push(s),a+=1}return o}const ma=4,Vr=ma*2,gl=ma-1,by=Vr-1,Vs={sentence:0,clause:40,comma:90,enjambment:260};function yy(e){const o=e.replace(/<[^>]*>/g,"").trim();return Ln.test(o)?Vs.sentence:Yu.test(o)?Vs.clause:Gu.test(o)?Vs.comma:Vs.enjambment}function vy(e,o){return o.hymnNotation?e.length===Vr?[[ma,ma]]:e.length===by&&o.stanzaLineCounts.includes(Vr)?[[gl,ma],[ma,gl]]:[]:[]}function Sl(e,o){return o===4?[He(`p${e.length}`,[{groups:zo(hi(e.length),e)}])]:e.length===ma?Xu(e):[He(`p${e.length}`,[{groups:zo(Ei(3,e.length),e)}])]}function bl(e,o,a){if(!a)return;const s=vy(e,a);if(!s.length)return;const n=[];for(const r of s){const i=yy(e[r[0]-1]),t=Sl(e.slice(0,r[0]),o),l=Sl(e.slice(r[0]),o);for(const u of t)for(const c of l)n.push({chunks:[...u.chunks,...c.chunks.map(m=>({...m,passRestart:!0}))],hardJoins:u.hardJoins+c.hardJoins,pattern:`pass-${r.join("-")}:${u.pattern}|${c.pattern}`,score:u.score+c.score+i})}return n}function rd(e,o,a){if((o===2||o===4)&&e.length===1)return[He("single-line-split",[{groups:[{label:"F",lines:[Sy(e[0])]}]}])];if(o===2)return e.length<=1?[He("F",[{groups:[{label:"F",lines:e}]}])]:my(e)?[He("psalm-thirst-for-god",py(e))]:e.length%2===0?[He("pairs",lr(e,!0))]:dy([dl("leading-free",lr(e,!0)),dl("trailing-free",lr(e,!1))]);if(o===3){const n=nd(e),r=bl(n,3,a);return r||(n.length<=3?[He(`short-${n.length}`,[{groups:zo(Ei(3,n.length),n)}])]:n.length===4?Xu(n):n.length===6?[Ks("2-2-2",n,["1","2","3"],[2,2,2])]:n.length%3===0?[He("triples",fy(n))]:ml(n.length,3).map(i=>He(i.join("-"),xr(n,["1","2","3"],i))))}const s=bl(e,4,a);return s||(e.length<=4?[He(`short-${e.length}`,[{groups:zo(hi(e.length),e)}])]:Zu(e)?[He("benedictus-salvation",Wa(e))]:ed(e)?[He("benedictus-prophet",Wa(e))]:od(e)?[He("psalm-50-blood",Wa(e))]:ad(e)?[He("psalm-50-sion-sacrifices",Wa(e))]:e.length%4===0?[He("fours",Wa(e))]:ml(e.length,4).map(n=>He(n.join("-"),xr(e,["1","2","3","4"],n))))}function id(e,o,a){return rd(e,o,a).reduce((s,n)=>n.score<s.score?n:s).chunks}function td(e){return Array.from({length:e},(o,a)=>String(a+1))}function hy(e,o){const a=td(o);return e.groups.length===a.length&&e.groups.every((s,n)=>s.label===a[n]&&s.lines.length===1)}function Ey(e,o={}){const a=o.mode?td(o.mode):[],s=a.length>0&&e.groups.length===a.length&&e.groups.every((l,u)=>l.label===a[u]),n=e.groups.length===1&&e.groups[0].label==="F"?" is-free-only":"",r=o.minimal?" is-minimal":"",i=e.groups.some(l=>l.lines.length>1)?" has-merged-groups":"",t=e.passRestart?" is-pass-restart":"";return[`<span class="notation-chunk${n}${r}${i}${t}">`,e.groups.map((l,u)=>{const c=l.label==="F"?" is-free":"",m=l.lines.length>1?" is-merged":"",f=o.minimal&&o.mode===4&&e.groups.length<4&&u===e.groups.length-1&&l.label==="4"&&l.lines.length===1,h=o.mode===3&&e.groups.length===2&&u===e.groups.length-1&&l.label==="3"&&l.lines.length===1,C=l.label!=="F"&&!f&&!h&&(o.minimal||s||l.lines.length>1||o.mode===3&&e.groups.length===2),O=o.hideLabels||C?"":l.label;return[`<span class="notation-line-group${m}${O?" has-label":""}">`,`<span class="notation-label${c}">${O}</span>`,'<span class="notation-lines">',l.lines.map(H=>Ai(H,o)).join(""),"</span>","</span>"].join("")}).join(""),"</span>"].join("")}function ld(e,o,a=""){return[`<p class="source-stanza notation-mode-${o.singingNotationMode}${a}">`,e.map(s=>Ey(s,{hideLabels:hy(s,o.singingNotationMode),minimal:o.minimalSingingNotation,mode:o.singingNotationMode,postureInstructionsEnabled:o.postureInstructionsEnabled})).join(""),"</p>"].join("")}function cd(){return'<span class="responsory-split-mark" aria-hidden="true">|</span>'}function Ai(e,o){return`<span class="source-line${o.postureInstructionsEnabled!==!1&&md(e)?" is-head-bow-frame-end":""}">${e}</span>`}function Mn(e){return e.replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim()}function un(e){const o=Mn(e),a=Os(o);return ud(a)}function ud(e){return e.includes("nos ponemos en pie")||e.includes("nos sentamos")||e.includes("hacemos la senal de la cruz mientras decimos")||e.includes("inclinamos la cabeza mientras decimos")||e.includes("inclinamos la cabeza")||e.includes("todos decimos mientras inclinamos la cabeza")}function Ay(e){return ud(Os(e))}function dd(e){return Os(Mn(e)).includes("hacemos la senal de la cruz mientras decimos")}function Py(e){return e.includes("†")?e:e.replace(/(<span class="[^"]*\brubric\b[^"]*">)\s*/,"$1† ")}function qy(e){const o=e.findIndex(s=>dd(s)&&s.includes("†"));if(o<=0)return e;const a=[...e];return a[0]=Py(a[0]),a[o]=a[o].replace(/†\s*/,""),a}function Iy(e){return/[.!?:;†]$/.test(e.trim())}function Cy(e){const o=e.lastIndexOf("</span>");return o===-1?`${e}.`:`${e.slice(0,o)}.${e.slice(o)}`}function Oy(e){const o=Mn(e);return!o||Iy(o)?e:Cy(e)}function Dy(e){return e.map((o,a)=>a<e.length-1?Oy(o):o).join(" ")}function Ry(e){const o=[];let a=0;for(;a<e.length;){const s=e[a];if(!un(s)){o.push(s),a+=1;continue}const n=[s];for(a+=1;a<e.length&&un(e[a]);)n.push(e[a]),a+=1;o.push(Dy(qy(n)))}return o}function $y(){return`<p class="source-stanza is-centered-instruction is-head-bow-frame-start"><span class="source-line"><span class="rubric posture-instruction">${iy}</span></span></p>`}function md(e){const o=Os(e);return o==="gloria al padre y al hijo y al espiritu santo"||o==="bendigamos al padre y al hijo con el espiritu santo"}function Ty(e){return e.some(md)}function Ly(e){return e.replace(/(Gloria\s+al\s+Padre,\s*y\s+al\s+Hijo,?)\s+(y\s+al\s+Esp[i\u00ed]ritu\s+Santo\.?)/i,`$1 ${cd()} $2`)}function My(e,o){return o.singingNotationMode===4?['<p class="source-stanza gloria-stanza is-gloria-split">',e.map((a,s)=>Ai(s===0?Ly(a):a,o)).join(""),"</p>"].join(""):ld(id(e,o.singingNotationMode),o," gloria-stanza")}function Ny(e){return e.split(`
`)}function Fr(e){return Ny(e).filter(o=>!Bu(o))}function yl(e,o){return!e.length||Tn(e)?!1:e.length%o!==0}function _y(e){return e.reduce((o,a)=>a.score<o.score?a:o)}function zy(e,o){return e.hardJoins>o.hardJoins?!1:e.score<=o.score+18}function Jy(e,o){if(un(e))return 0;const a=Fr(e).filter(s=>s.trim());return!a.length||Tn(a)?0:(o===3?nd(a):a).length}function jy(e,o){if(!(!o.singingNotationMode||!o.hymnNotation))return{hymnNotation:!0,stanzaLineCounts:e.map(a=>Jy(a,o.singingNotationMode)).filter(a=>a>0)}}function Uy(e,o,a){const s=o.singingNotationMode,n=e.map(()=>({}));if(!s)return n;let r=0;for(;r<e.length;){const i=Fr(e[r]);if(!yl(i,s)){r+=1;continue}const t=r,l=[];for(;r<e.length;){const c=Fr(e[r]);if(!yl(c,s))break;const m=rd(c,s,a);l.push({index:r,lines:c,candidates:m,individualBest:_y(m)}),r+=1}const u=new Map;for(const c of l){const m=u.get(c.lines.length)??[];m.push(c),u.set(c.lines.length,m)}for(const c of u.values()){if(c.length<=1){const C=c[0];n[C.index]={chunks:C.individualBest.chunks};continue}const m=new Set(c.flatMap(C=>C.candidates.map(O=>O.pattern)));let f,h=Number.POSITIVE_INFINITY;for(const C of m){let O=0,J=!0;for(const H of c){const z=H.candidates.find(_=>_.pattern===C);if(!z||!zy(z,H.individualBest)){J=!1;break}O+=z.score}J&&O<h&&(f=C,h=O)}for(const C of c){const O=f?C.candidates.find(J=>J.pattern===f):void 0;n[C.index]={chunks:O?.chunks??C.individualBest.chunks}}}t===r&&(r+=1)}return n}function Hy(e,o,a={},s){const n=e.split(`
`),r=n.filter(c=>!Bu(c)),i=Tn(r),t=un(e)?" is-centered-instruction":"",l=o.postureInstructionsEnabled!==!1,u=Ty(r)&&l?$y():"";if(t){if(!l)return dd(e)?[`<p class="source-stanza${t}">`,'<span class="source-line"><span class="rubric posture-instruction">†</span></span>',"</p>"].join(""):"";const c=We(Mn(e));return[`<p class="source-stanza${t}">`,`<span class="source-line"><span class="rubric posture-instruction">${c}</span></span>`,"</p>"].join("")}if(o.singingNotationMode&&r.length&&i&&o.singingNotationMode===4)return u+My(n,o);if(o.singingNotationMode&&r.length){const c=a.chunks??id(r,o.singingNotationMode,s);return u+ld(c,o,i?" gloria-stanza":"")}return[u,`<p class="source-stanza${t}">`,n.map(c=>Ai(c,o)).join(""),"</p>"].join("")}function ur(e,o={}){const a=e?.trim();if(!a)return"";if(ny.test(a))return ul(a);const s=Ry(ul(We(a)).split(/\n{2,}/)),n=jy(s,o),r=Uy(s,o,n);return s.map((i,t)=>Hy(i,o,r[t],n)).join("")}function V(e){return!!e?.trim()}function xy(e){let o="",a="",s=0;for(;s<e.length;){if(e[s]==="["){const n=e.indexOf("]",s);if(n===-1){o+=e[s],s+=1;continue}const r=e.slice(s+1,n);for(;a.length<o.length;)a+=" ";a.length>0&&!a.endsWith(" ")&&(a+=" "),a+=r,s=n+1;continue}o+=e[s],s+=1}return{chordLine:a,textLine:o.trimEnd()}}function Vy(e){const{chordLine:o,textLine:a}=xy(e);return o.trim()?`<span class="chord-sheet-chords">${We(o)}</span>
<span class="chord-sheet-text">${We(a)}</span>
`:`<span class="chord-sheet-text-only">${We(a)}</span>
`}function pd(e){return['<div class="chord-sheet">',e.trim().split(/\n{2,}/).map(a=>`<pre class="chord-sheet-stanza">${a.split(`
`).map(Vy).join("")}</pre>`).join(""),"</div>"].join("")}function Fy(e){const o=e.trim();if(!o)return[];const a=o.split(/\n{2,}/).map(n=>{const r=n.split(/\r?\n/).map(i=>i.trim()).filter(i=>i&&!i.startsWith("[[ANTIPHON]]")&&!/^\[\[REPEATED_?ANTIPHON\]\]/.test(i));return Tn(r)?0:r.length}).filter(n=>n>0),s=new Map;for(const n of a)s.set(n,(s.get(n)??0)+1);return[...s.entries()].map(([n,r])=>({lineCount:n,occurrences:r})).sort((n,r)=>r.occurrences-n.occurrences||n.lineCount-r.lineCount)}function vl(e){const o=e.find(s=>s.lineCount===4),a=e.find(s=>s.lineCount===2);if(!(!o&&!a)&&!(o&&a&&o.occurrences===a.occurrences))return a?o&&o.occurrences>a.occurrences?4:2:4}function hl(e,o={}){if(!e.length)return[];const a=o.currentKey?e.find(c=>c.key===o.currentKey):void 0,s=a?.voices??o.preferredFamily,n=e.filter(c=>c.key!==a?.key),r=s!==void 0?n.filter(c=>c.voices===s):[],i=s!==void 0?n.filter(c=>c.voices!==s):n,t=a?[a,...r,...i]:[...r,...i],l=new Set(o.takenKeys??[]);if(!l.size)return t;const u=t.filter(c=>!l.has(c.key));return u.length?u:t}const wy=["data-section-title"],ky={class:"section-heading"},By={key:0,class:"chant-picker"},Yy={key:0,class:"chant-picker-verse-counts"},Gy={key:1,class:"chant-picker-chant"},Qy=["aria-label"],Wy=["aria-label"],Ky={key:1,class:"chant-voices-sub","aria-hidden":"true"},Xy={key:0,class:"section-eyebrow"},Zy={key:1,class:"section-line-counts-row"},ev={class:"notation-mode-mini",role:"group","aria-label":"Modo de notacion"},ov=["aria-label","onClick"],av={key:1,class:"section-summary"},sv={key:0,class:"section-alternative-tabs",role:"tablist","aria-label":"Alternativas"},nv=["aria-selected","onClick"],rv=["innerHTML"],iv={key:2,class:"announcements-timer"},tv={class:"announcements-timer-main"},lv={class:"announcements-actions"},cv=["disabled"],uv={key:0,class:"announcements-history"},dv={class:"announcements-history-summary"},mv=["innerHTML"],El="orante:chant-selection",Al="orante:announcements-timer-history",dr=8,pv=In({__name:"PrayerSection",props:{section:{},alternativeIndex:{},notationEnabled:{type:Boolean},notationMode:{},chantPickerEnabled:{type:Boolean},postureInstructionsEnabled:{type:Boolean},capoOffset:{},inheritedCapoOffset:{},chantKey:{},takenChantKeys:{}},emits:["update:alternativeIndex","update:notationMode","chant-selected","capo-cycled"],setup(e,{emit:o}){const a={ChevronsDown:sS,ChevronsUp:rS,Flame:cS,Landmark:pS,MessageSquare:gS,Mic2:bS,MoonStar:vS,Scroll:$S,Snowflake:NS,Swords:kS,TrendingDown:QS,TrendingUp:KS,TreeDeciduous:YS,Unlink:ZS,Users:ob},s=e,n=o,r=new Set(["Himno","Primer salmo","Segundo salmo","Tercer salmo","Cántico de Zacarías","Cántico de María","Cántico evangélico"]),i=new Set([...r,"Salmo invitatorio"]),t=U(()=>r.has(s.section.title)),l=U(()=>i.has(s.section.title)),u=w(0),c=U(()=>s.chantPickerEnabled?cn[s.section.title]:void 0),m=w(""),f=w(""),h=w(s.capoOffset??0);ge(()=>s.capoOffset,I=>{I!==void 0&&I!==h.value&&(h.value=I)}),ge(()=>s.chantKey,I=>{I&&I!==m.value&&c.value?.some(B=>B.key===I)&&(m.value=I,f.value=I)});function C(){try{const I=localStorage.getItem(El);return I?JSON.parse(I):{}}catch{return{}}}function O(I,B){try{const ee=C();localStorage.setItem(El,JSON.stringify({...ee,[I]:B}))}catch{}}const J=U(()=>s.takenChantKeys??[]);function H(){const I=c.value;if(!I?.length)return"";if(s.chantKey&&I.some(ve=>ve.key===s.chantKey))return s.chantKey;const B=C()[s.section.title];if(B&&I.some(ve=>ve.key===B))return B;const ee=vl(co.value);if(ee!==void 0){const ve=hl(I,{preferredFamily:ee,takenKeys:J.value});if(ve[0])return ve[0].key}return Hr[s.section.title]??I[0].key}const z=U(()=>c.value?.find(I=>I.key===m.value)??c.value?.[0]),_=U(()=>Math.max(0,(z.value?.capo??0)+h.value)),L=U(()=>z.value?a[z.value.icon]:void 0),j=U(()=>{const I=c.value;return I?.length?hl(I,{currentKey:f.value||void 0,preferredFamily:vl(co.value),takenKeys:J.value}):I});function X(){const I=j.value;if(!I||I.length<2)return;const B=I.findIndex(ee=>ee.key===m.value);m.value=I[(B+1)%I.length].key}function me(I){const B=[I,0,-1,1];return B.filter((ee,ve)=>B.indexOf(ee)===ve)}function re(I,B){const ee=me(B),ve=ee.indexOf(I);return ve===-1?B:ee[(ve+1)%ee.length]}function ae(){const I=re(h.value,s.inheritedCapoOffset??0);h.value=I,n("capo-cycled",I)}const pe=U(()=>s.section.kind==="mass"&&s.section.title==="Avisos");function qe(I){return s.section.title==="Himno"?`Himno ${I+1}`:`Opción ${I+1}`}function ie(I){const B=I?.trim();if(!B)return[];const ee=B.replace(/\r\n/g,`
`).split(/(?:^|\n)\s*\$?\s*O\s+bien\s*:?\s*\$?\s*/gim).map(ve=>ve.trim()).filter(Boolean);return(ee.length?ee:[B]).map((ve,Xo)=>({label:qe(Xo),content:ve}))}const te=U(()=>s.section.alternatives?.length?s.section.alternatives:ie(s.section.content)),go=U(()=>te.value.length>1),Re=U(()=>{const I=s.alternativeIndex??u.value;return I>=0&&I<te.value.length?I:0}),Je=U(()=>s.section.rubrics?.filter(I=>I.trim()).join(`

`)??""),le=U(()=>te.value[Re.value]?.content??""),ce=U(()=>te.value[Re.value]?.eyebrow??s.section.eyebrow),co=U(()=>!l.value||!le.value.trim()?[]:Fy(le.value)),Ne=w(0),ue=w(!1),$e=w(bo()),Fe=w(!1);let Po=0,Jo=0,Xe;ge(()=>s.section.content,()=>{u.value=0,m.value=H(),f.value=m.value},{immediate:!0}),ge(j,I=>{!I?.length||!m.value||J.value.includes(m.value)&&I[0].key!==m.value&&(m.value=I[0].key)},{immediate:!0}),ge(te,I=>{u.value>=I.length&&(u.value=0)}),ge([m,h],([I,B])=>{c.value?.length&&(n("chant-selected",{key:I,capoOffset:B}),O(s.section.title,I))},{immediate:!0}),fi(()=>{we()});function uo(I){u.value=I,n("update:alternativeIndex",I)}function bo(){try{const I=JSON.parse(localStorage.getItem(Al)??"[]");return Array.isArray(I)?I.filter(B=>Number.isFinite(B?.durationMs)&&typeof B?.stoppedAt=="string").slice(0,dr):[]}catch{return[]}}function qo(I){localStorage.setItem(Al,JSON.stringify(I.slice(0,dr)))}function we(){Xe!==void 0&&(window.clearInterval(Xe),Xe=void 0)}function Ko(){ue.value&&(Ne.value=Po+Date.now()-Jo)}function p(){ue.value||(Fe.value=!1,Po=Ne.value,Jo=Date.now(),ue.value=!0,we(),Xe=window.setInterval(Ko,250))}function S(){if(!ue.value)return;Ko(),ue.value=!1,we();const I=Math.round(Ne.value/1e3)*1e3;I>0&&($e.value=[{durationMs:I,stoppedAt:new Date().toISOString()},...$e.value].slice(0,dr),qo($e.value)),Fe.value=!0}function v(){ue.value=!1,we(),Ne.value=0}function P(I){const B=Math.max(0,Math.round(I/1e3)),ee=B%60,ve=Math.floor(B/60)%60,Xo=Math.floor(B/3600),ka=String(ee).padStart(2,"0"),Ea=Xo?String(ve).padStart(2,"0"):String(ve);return Xo?`${Xo}:${Ea}:${ka}`:`${Ea}:${ka}`}function q(I){const B=new Date(I);return Number.isNaN(B.getTime())?"":new Intl.DateTimeFormat("es",{day:"2-digit",hour:"2-digit",minute:"2-digit",month:"short"}).format(B)}const E=U(()=>P(Ne.value)),M=U(()=>$e.value.slice(0,5)),$=U(()=>{if(!$e.value.length)return"";const I=$e.value.reduce((B,ee)=>B+ee.durationMs,0)/$e.value.length;return P(I)}),D=U(()=>co.value.map(I=>`${I.lineCount}${I.occurrences}`).join(", ")),A=U(()=>s.section.title==="Cántico de Zacarías"?[4]:s.section.title==="Himno"?[3,4]:[2,4]),F=U(()=>A.value.includes(s.notationMode)?s.notationMode:A.value[0]);function R(I){n("update:notationMode",I)}const x=new Set(["Himno","Primer salmo","Segundo salmo","Tercer salmo","Cántico de Zacarías"]),k=U(()=>c.value&&x.has(s.section.title)&&z.value?.voices?z.value.voices:F.value),oe=U(()=>!!le.value.trim()||!!s.section.items?.length),de=U(()=>!!c.value?.length&&oe.value),Z=U(()=>!de.value&&s.notationMode&&t.value&&D.value!==""&&A.value.length>1&&(!!ce.value||s.section.title==="Himno")),Ie=U(()=>de.value),Ce=U(()=>D.value!==""&&oe.value),Ze=U(()=>Ie.value||Ce.value),no=U(()=>!!ce.value||Z.value),Io=U(()=>s.section.title==="Himno"&&s.notationEnabled?z.value?.chordSheet:void 0),ha=U(()=>s.section.title==="Himno"&&le.value.trimStart().startsWith("¡Oh cruz fiel")),_e=U(()=>[Je.value?ur(Je.value,{postureInstructionsEnabled:s.postureInstructionsEnabled}):"",Io.value?pd(Io.value):le.value?ur(le.value,{singingNotationMode:!t.value||ha.value?void 0:k.value,minimalSingingNotation:s.notationEnabled===!1,postureInstructionsEnabled:s.postureInstructionsEnabled,hymnNotation:s.section.title==="Himno"}):""].filter(Boolean).join(""));return(I,B)=>(T(),N("section",{class:Le(["prayer-section",{"is-quiet":e.section.quiet,"is-part":e.section.kind==="part","is-mass":e.section.kind==="mass"}]),"data-section-title":e.section.title},[b("div",ky,[b("div",{class:Le(["section-heading-top",{"has-chant-picker":Ze.value}])},[b("h3",null,G(e.section.title),1),Ze.value?(T(),N("div",By,[Ce.value?(T(),N("span",Yy,[aa(G(D.value),1),Ie.value?(T(),N(fe,{key:0},[aa(",")],64)):Se("",!0)])):Se("",!0),Ie.value?(T(),N("span",Gy,[b("button",{type:"button",class:"chant-capo-badge","aria-label":`Capo ${_.value}`,onClick:ae},G(_.value),9,Qy),B[0]||(B[0]=b("span",{class:"chant-picker-sep","aria-hidden":"true"}," ",-1)),b("button",{type:"button",class:Le(["chant-picker-bubble",{"is-fixed":(j.value?.length??0)<2}]),"aria-label":z.value?`Cántico: ${z.value.label}`:"Cántico",onClick:X},[L.value?(T(),Do(Gs(L.value),{key:0,size:13})):Se("",!0),z.value?.voices?(T(),N("sub",Ky,G(z.value.voices),1)):Se("",!0)],10,Wy)])):Se("",!0)])):Se("",!0)],2),no.value?(T(),N("div",{key:0,class:Le(["section-eyebrow-row",{hymn:s.section.title==="Himno"}])},[ce.value?(T(),N("p",Xy,G(ce.value),1)):Se("",!0),Z.value?(T(),N("div",Zy,[b("div",ev,[(T(!0),N(fe,null,to(A.value,ee=>(T(),N("button",{type:"button",class:Le(["notation-mode-pill",{active:F.value===ee}]),key:ee,"aria-label":`Modo de ${ee} lineas`,onClick:ve=>R(ee)},G(ee),11,ov))),128))])])):Se("",!0)],2)):Se("",!0),e.section.summary?(T(),N("p",av,G(e.section.summary),1)):Se("",!0)]),go.value?(T(),N("div",sv,[(T(!0),N(fe,null,to(te.value,(ee,ve)=>(T(),N("button",{key:ee.label,type:"button",class:Le(["section-alternative-tab",{active:Re.value===ve}]),role:"tab","aria-selected":Re.value===ve,onClick:Xo=>uo(ve)},G(ee.label),11,nv))),128))])):Se("",!0),_e.value?(T(),N("div",{key:1,class:"prayer-copy",innerHTML:_e.value},null,8,rv)):Se("",!0),pe.value?(T(),N("div",iv,[b("div",tv,[b("div",{class:Le(["announcements-time",{running:ue.value}])},G(E.value),3),b("div",lv,[ue.value?(T(),N("button",{key:1,type:"button",class:"announcements-action primary","aria-label":"Detener cronómetro",onClick:S},[Pe(Te(jS),{size:14}),B[2]||(B[2]=b("span",null,"Detener",-1))])):(T(),N("button",{key:0,type:"button",class:"announcements-action primary","aria-label":"Iniciar cronómetro",onClick:p},[Pe(Te(Vu),{size:15}),B[1]||(B[1]=b("span",null,"Iniciar",-1))])),b("button",{type:"button",class:"announcements-action subtle","aria-label":"Reiniciar cronómetro",disabled:Ne.value===0&&!ue.value,onClick:v},[Pe(Te(DS),{size:14})],8,cv)])]),Fe.value&&M.value.length?(T(),N("div",uv,[b("div",dv,[B[3]||(B[3]=b("span",null,"Histórico",-1)),b("strong",null,"Media "+G($.value),1)]),b("ol",null,[(T(!0),N(fe,null,to(M.value,ee=>(T(),N("li",{key:`${ee.stoppedAt}-${ee.durationMs}`},[b("span",null,G(q(ee.stoppedAt)),1),b("strong",null,G(P(ee.durationMs)),1)]))),128))])])):Se("",!0)])):Se("",!0),e.section.items?.length?(T(),N("ol",{key:3,class:Le(["response-list",{"is-preces-list":e.section.title==="Preces"}])},[(T(!0),N(fe,null,to(e.section.items,(ee,ve)=>(T(),N("li",{key:`${e.section.title}-${ve}`,innerHTML:Te(ur)(ee,{postureInstructionsEnabled:e.postureInstructionsEnabled})},null,8,mv))),128))],2)):Se("",!0)],10,wy))}});function fv(e){const o=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0");return`${o}-${a}-${s}`}function fd(e){const[o,a,s]=e.split("-").map(Number);return new Date(o,a-1,s)}function gd(e,o){const a=fd(e);return a.setDate(a.getDate()+o),fv(a)}function Pl(e){return new Intl.DateTimeFormat("es-ES",{weekday:"long",day:"numeric",month:"long",year:"numeric"}).format(e)}const ba="America/Costa_Rica";function Pi(e=ba,o=new Date){const a=new Intl.DateTimeFormat("en-CA",{timeZone:e,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(o),s=n=>a.find(r=>r.type===n)?.value??"00";return`${s("year")}-${s("month")}-${s("day")}`}function ql(e=new Date){return gd(Pi(ba,e),1)}function gv(e=ba,o=new Date){const s=new Intl.DateTimeFormat("en-CA",{timeZone:e,hour:"numeric",hourCycle:"h23"}).formatToParts(o).find(n=>n.type==="hour")?.value;return s?Number(s):0}function Sv(e,o=ba){return Pi(o,new Date(e))}const qi=`Gloria al Padre, y al Hijo, y al Espíritu Santo.
Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.`;function bv(e){return["$V.$ Dios mío, ven en mi auxilio.","$R.$ Señor, date prisa en socorrerme.","$R.$ Gloria al Padre, y al Hijo, y al Espíritu Santo.","$V.$ Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.",e?"":"Aleluya."].filter(Boolean).join(`

`)}const yv=`$V.$ Señor, ábreme los labios.
$R.$ Y mi boca proclamará tu alabanza.`,vv=`Bendito sea el Señor, Dios de Israel,
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
para guiar nuestros pasos por el camino de la paz.`,hv=`Proclama mi alma la grandeza del Señor,
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
en favor de Abrahán y su descendencia por siempre.`,Ev=`Ahora, Señor, según tu promesa,
puedes dejar a tu siervo irse en paz,
porque mis ojos han visto a tu Salvador,
a quien has presentado ante todos los pueblos:
luz para alumbrar a las naciones
y gloria de tu pueblo Israel.`,Av={es:`Padre nuestro, que estás en el cielo,
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
sed libera nos a malo.`};function pa(e){return Av[e]}const Pv={almaRedemptoris:`Santa Madre del Redentor,
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
¡Oh clemente, oh piadosa, oh dulce Virgen María!`};function qv(e){return Pv[e]}const Iv=`Oh, Señora mía,
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

Amén.`,Cv={blessing:`$V.$ El Señor nos bendiga, nos guarde de todo mal y nos lleve a la vida eterna.
$R.$ Amén.`,short:`$V.$ Bendigamos al Señor.
$R.$ Demos gracias a Dios.`,compline:`$V.$ El Señor todopoderoso nos conceda una noche tranquila y una muerte santa.
$R.$ Amén.`};function Sd(e){return Cv[e]}const Ov={liturgico:{label:"Cancionero Litúrgico",url:"https://cancionero-liturgico.org/cancion.html",note:"partituras, midi y, en varios casos, acordes para acompañamiento"},malaga:{label:"Diócesis de Málaga",url:"https://diocesismalaga.es/inicio/2013030102/cancionero-liturgico/",note:"cancionero litúrgico diocesano con partituras y acordes para guitarra"},stella:{label:"Cancionero Stella Maris",url:"https://www.cancionerostellamaris.com/",note:"cancionero católico con acordes y grabaciones"},schoenstatt:{label:"Cancionero Schoenstatt Akati",url:"https://www.schoenstatt.org.py/sites/www.schoenstatt.org.py/files/docs/cancionero_tv_2014_con_notas.pdf",note:"cancionero de Schoenstatt con notas y acordes"},safaMadrid:{label:"Parroquia Sagrada Familia, Madrid",url:"https://parroquiasafa.archimadrid.es/cantos/",note:"cantos usados en misa de familias"},sanEsteban:{label:"Parroquia San Esteban, Fuenlabrada",url:"https://sanestebanfuenlabrada.es/wp-content/uploads/2023/10/Cancionero-Misa-de-Familias-Parroquia-San-Esteban-Fuenlabrada.pdf",note:"cancionero de misa de familias dividido por partes de la misa y tiempos litúrgicos"},pilgrim:{label:"Cancionero de misa familiar",url:"https://pilgrim.neocities.org/cancionero/",note:"cantos con acordes organizados por secciones y tiempos litúrgicos"},domingo:{label:"Selección de misa del domingo",url:"https://pilgrim.neocities.org/cancionero/resources/pages/misa-del-domingo",note:"selecciones dominicales con letras y acordes para guitarra"},juaninos:{label:"Juaninos México",url:"https://juaninos.org.mx/musica-catolica/cantos-para-misa-cancionero-catolico-letra-y-acordes/",note:"criterios y recursos mexicanos para elegir cantos de misa"},almaMisas:{label:"Alma Misas, Guadalajara",url:"https://almamisas.com/",note:"cantos litúrgicos mexicanos por secciones de la misa"},vidaSanto:{label:"Vida de Santo México",url:"https://vidadesanto.com/cancionero-catolico-letra-y-acordes/",note:"cantoral católico mexicano por tiempo litúrgico y secciones"},rcc:{label:"Renovación Carismática Católica",url:"https://www.renovacioncarismaticamiami.com/ministerio-de-musica/cantos-para-santa-misa/",note:"estructura de cantos para Santa Misa y cancionero católico"},chantPublicDomain:{label:"Canto gregoriano tradicional",url:"https://www.cpdl.org/wiki/index.php/Main_Page",note:"textos latinos tradicionales y repertorio coral de dominio público"}},Dv={entrada:"Canto de entrada",penitencial:"Señor, ten piedad",gloria:"Gloria",credo:"Canto del Credo",salmo:"Salmo responsorial cantado",aclamacion:"Aclamación cantada",ofertorio:"Canto de ofertorio",santo:"Santo",memorial:"Aclamación memorial",amen:"Amén",padrenuestro:"Padrenuestro cantado",cordero:"Cordero de Dios",comunion:"Canto de comunión",meditacion:"Canto de meditación",final:"Canto final"},Rv={advent:"Adviento",adoration:"adoración",amen:"amén",christ:"Cristo",christmas:"Navidad",communion:"comunión",community:"asamblea",corpus:"Corpus Christi",easter:"Pascua",eucharist:"Eucaristía",forgiveness:"perdón",gloria:"Gloria",holy:"Santo",joy:"alegría",lent:"Cuaresma",martyr:"mártires",mary:"María",mission:"misión",offering:"ofrendas",ordinary:"tiempo ordinario",peace:"paz",pentecost:"Pentecostés",psalm:"salmo",saints:"santos",spirit:"Espíritu Santo",thanksgiving:"acción de gracias",trinity:"Trinidad",word:"Palabra"},$v=`Ubi caritas et amor,
Deus ibi est.

Congregavit nos in unum Christi amor.
Exsultemus et in ipso iucundemur.
Timeamus et amemus Deum vivum.
Et ex corde diligamus nos sincero.`,Tv=`Adoro te devote, latens Deitas,
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
visu sim beatus tuae gloriae. Amen.`,Lv=`Tantum ergo sacramentum
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
compar sit laudatio. Amen.`,Mv=`Ave verum corpus,
natum de Maria Virgine,
vere passum, immolatum
in cruce pro homine.

Cuius latus perforatum
fluxit aqua et sanguine:
esto nobis praegustatum
in mortis examine.

O Iesu dulcis,
o Iesu pie,
o Iesu, fili Mariae.`,Nv=`$Todos.$ Creo en un solo Dios,
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
Amén.`,_v=`$Todos.$ Creo en Dios, Padre todopoderoso,
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
Amén.`,zv=`Credo in unum Deum,
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
et vitam venturi saeculi. Amen.`,Jv=`Veni, Creator Spiritus,
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
in saeculorum saecula. Amen.`,jv=`Victimae paschali laudes
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
miserere. Amen. Alleluia.`,Uv=`Salve, Regina,
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
o dulcis Virgo Maria.`,Hv=`Pange, lingua, gloriosi
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
compar sit laudatio. Amen.`,xv=`Panis angelicus
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
ad lucem quam inhabitas.`,Vv=`Veni, Sancte Spiritus,
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
da perenne gaudium. Amen. Alleluia.`,Fv=`Attende, Domine,
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
tu conserva, Christe.`,wv=`Asperges me, Domine,
hyssopo et mundabor:
lavabis me,
et super nivem dealbabor.

Miserere mei, Deus,
secundum magnam misericordiam tuam.

Gloria Patri, et Filio,
et Spiritui Sancto:
sicut erat in principio,
et nunc, et semper,
et in saecula saeculorum. Amen.`,kv=`Vidi aquam egredientem
de templo a latere dextro, alleluia:
et omnes ad quos pervenit aqua ista
salvi facti sunt,
et dicent: alleluia, alleluia.

Confitemini Domino,
quoniam bonus:
quoniam in saeculum
misericordia eius.`,Bv=`Parce, Domine,
parce populo tuo:
ne in aeternum
irascaris nobis.`,Yv=`Crux fidelis, inter omnes
arbor una nobilis:
nulla talem silva profert
flore, fronde, germine.

Dulce lignum,
dulces clavos,
dulce pondus sustinet.`,Gv=`O salutaris Hostia,
quae caeli pandis ostium:
bella premunt hostilia,
da robur, fer auxilium.

Uni trinoque Domino
sit sempiterna gloria,
qui vitam sine termino
nobis donet in patria. Amen.`,Qv=`Anima Christi, sanctifica me.
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
in saecula saeculorum. Amen.`,Wv=`Alma de Cristo, santifícame.
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
por los siglos de los siglos. Amén.`,Kv=`Regina caeli, laetare, alleluia:
quia quem meruisti portare, alleluia,
resurrexit, sicut dixit, alleluia:
ora pro nobis Deum, alleluia.`,Xv=`Sub tuum praesidium
confugimus, sancta Dei Genetrix.

Nostras deprecationes
ne despicias in necessitatibus,
sed a periculis cunctis
libera nos semper,
Virgo gloriosa et benedicta.`,Zv=`Alma Redemptoris Mater,
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
peccatorum miserere.`,eh=`Ave, Regina caelorum,
ave, Domina angelorum:
salve, radix, salve, porta,
ex qua mundo lux est orta.

Gaude, Virgo gloriosa,
super omnes speciosa:
vale, o valde decora,
et pro nobis Christum exora.`,oh=`Ave, maris stella,
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
tribus honor unus. Amen.`,ah=`O sacrum convivium,
in quo Christus sumitur:
recolitur memoria passionis eius;
mens impletur gratia;
et futurae gloriae nobis pignus datur.
Alleluia.`,sh=`O magnum mysterium,
et admirabile sacramentum,
ut animalia viderent Dominum natum,
iacentem in praesepio.

Beata Virgo,
cuius viscera meruerunt portare
Dominum Christum.
Alleluia.`,nh=`Christus vincit,
Christus regnat,
Christus imperat.`,rh=`Rorate caeli desuper,
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
popule meus.`,ih=`Conditor alme siderum,
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
in saeculorum saecula. Amen.`,th=`Adeste fideles,
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
venite adoremus Dominum.`,lh=`O filii et filiae,
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
benedicamus Domino. Alleluia.`,ch=`Vexilla Regis prodeunt,
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
largiris, adde praemium. Amen.`,uh=`Stabat Mater dolorosa
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
paradisi gloria. Amen.`,dh=`Lauda, Sion, Salvatorem,
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
fac sanctorum civium. Amen. Alleluia.`,mh=[{title:"Ubi caritas",sections:["ofertorio","comunion","meditacion"],tags:["community","peace","eucharist","ordinary"],source:"chantPublicDomain",note:"Antífona tradicional para caridad, unidad, Jueves Santo, ofertorio o comunión contemplativa.",lyricsTitle:"Ubi caritas",lyrics:$v,priority:20},{title:"Adoro te devote",sections:["comunion","meditacion"],tags:["adoration","eucharist","communion","corpus"],source:"chantPublicDomain",note:"Himno eucarístico tradicional para comunión, adoración o Corpus Christi.",lyricsTitle:"Adoro te devote",lyrics:Tv,priority:22},{title:"Tantum ergo",sections:["comunion","meditacion","final"],tags:["adoration","eucharist","corpus"],source:"chantPublicDomain",note:"Himno eucarístico tradicional, especialmente adecuado en Corpus o adoración después de la comunión.",lyricsTitle:"Tantum ergo",lyrics:Lv,priority:22},{title:"O salutaris Hostia",sections:["comunion","meditacion","final"],tags:["adoration","eucharist","corpus"],source:"chantPublicDomain",note:"Himno eucarístico breve para comunión, adoración o Corpus Christi.",lyricsTitle:"O salutaris Hostia",lyrics:Gv,priority:20},{title:"Ave verum corpus",sections:["comunion","meditacion"],tags:["eucharist","communion","corpus","mary"],source:"chantPublicDomain",note:"Texto eucarístico breve y sobrio para comunión o meditación.",lyricsTitle:"Ave verum corpus",lyrics:Mv,priority:18},{title:"O sacrum convivium",sections:["comunion","meditacion"],tags:["eucharist","communion","adoration","corpus"],source:"chantPublicDomain",note:"Antífona eucarística breve para comunión, adoración o acción de gracias.",lyricsTitle:"O sacrum convivium",lyrics:ah,priority:20},{title:"Anima Christi",sections:["comunion","meditacion"],tags:["communion","eucharist","adoration"],source:"chantPublicDomain",note:"Oración tradicional para acción de gracias después de la comunión.",lyricsTitle:"Anima Christi",lyrics:Qv,priority:18},{title:"Veni Creator Spiritus",sections:["entrada","meditacion","final"],tags:["spirit","pentecost","mission"],source:"chantPublicDomain",note:"Himno tradicional al Espíritu Santo; prioritario en Pentecostés, confirmaciones y envíos.",lyricsTitle:"Veni Creator Spiritus",lyrics:Jv,priority:22},{title:"Victimae paschali laudes",sections:["entrada","aclamacion","meditacion","final"],tags:["easter","christ","joy"],source:"chantPublicDomain",note:"Secuencia pascual tradicional para Pascua y días con tono de resurrección.",lyricsTitle:"Victimae paschali laudes",lyrics:jv,priority:22},{title:"Salve Regina",sections:["final","meditacion"],tags:["mary","peace"],source:"chantPublicDomain",note:"Antífona mariana tradicional para final o acción de gracias.",lyricsTitle:"Salve Regina",lyrics:Uv,priority:18},{title:"Regina caeli",sections:["final","meditacion"],tags:["mary","easter","joy"],source:"chantPublicDomain",note:"Antífona mariana propia del tiempo pascual.",lyricsTitle:"Regina caeli",lyrics:Kv,priority:22},{title:"Sub tuum praesidium",sections:["final","meditacion"],tags:["mary","peace"],source:"chantPublicDomain",note:"Antífona mariana antigua para final o acción de gracias.",lyricsTitle:"Sub tuum praesidium",lyrics:Xv,priority:16},{title:"Alma Redemptoris Mater",sections:["final","meditacion"],tags:["mary","christmas","advent"],source:"chantPublicDomain",note:"Antífona mariana tradicional para Adviento y Navidad.",lyricsTitle:"Alma Redemptoris Mater",lyrics:Zv,priority:20},{title:"Ave Regina caelorum",sections:["final","meditacion"],tags:["mary","peace"],source:"chantPublicDomain",note:"Antífona mariana tradicional para final o meditación.",lyricsTitle:"Ave Regina caelorum",lyrics:eh,priority:16},{title:"Ave maris stella",sections:["final","meditacion"],tags:["mary","peace"],source:"chantPublicDomain",note:"Himno mariano tradicional, útil en fiestas de la Virgen y como canto final.",lyricsTitle:"Ave maris stella",lyrics:oh,priority:18},{title:"Pange lingua",sections:["entrada","ofertorio","comunion","meditacion","final"],tags:["adoration","eucharist","communion","corpus"],source:"chantPublicDomain",note:"Himno eucarístico tradicional; muy fuerte en Corpus Christi, Jueves Santo, comunión o adoración.",lyricsTitle:"Pange lingua",lyrics:Hv,priority:24},{title:"Panis angelicus",sections:["comunion","meditacion"],tags:["adoration","eucharist","communion","corpus"],source:"chantPublicDomain",note:"Texto eucarístico breve para comunión, Corpus Christi o acción de gracias.",lyricsTitle:"Panis angelicus",lyrics:xv,priority:22},{title:"Lauda Sion",sections:["entrada","aclamacion","comunion","meditacion","final"],tags:["eucharist","communion","corpus"],source:"chantPublicDomain",note:"Secuencia tradicional de Corpus Christi; encaja especialmente en Corpus, comunión o meditación eucarística.",lyricsTitle:"Lauda Sion",lyrics:dh,priority:24},{title:"Veni Sancte Spiritus",sections:["entrada","aclamacion","meditacion","final"],tags:["spirit","pentecost"],source:"chantPublicDomain",note:"Secuencia tradicional de Pentecostés; útil como canto al Espíritu o meditación.",lyricsTitle:"Veni Sancte Spiritus",lyrics:Vv,priority:24},{title:"Attende Domine",sections:["penitencial","meditacion"],tags:["forgiveness","lent"],source:"chantPublicDomain",note:"Canto penitencial tradicional para Cuaresma o celebraciones con fuerte tono de conversión.",lyricsTitle:"Attende Domine",lyrics:Fv,priority:22},{title:"Asperges me",sections:["penitencial","entrada","meditacion"],tags:["forgiveness","ordinary"],source:"chantPublicDomain",note:"Antífona tradicional de aspersión fuera del tiempo pascual; útil cuando se sustituye el acto penitencial por la aspersión.",lyricsTitle:"Asperges me",lyrics:wv,priority:18},{title:"Vidi aquam",sections:["penitencial","entrada","meditacion"],tags:["easter","forgiveness"],source:"chantPublicDomain",note:"Antífona pascual de aspersión; prioritaria cuando se hace la aspersión en Pascua.",lyricsTitle:"Vidi aquam",lyrics:kv,priority:22},{title:"Parce Domine",sections:["penitencial","meditacion"],tags:["forgiveness","lent"],source:"chantPublicDomain",note:"Aclamación penitencial breve y tradicional, especialmente útil en Cuaresma.",lyricsTitle:"Parce Domine",lyrics:Bv,priority:18},{title:"Rorate caeli",sections:["entrada","aclamacion","meditacion"],tags:["advent","christ","word"],source:"chantPublicDomain",note:"Canto tradicional de Adviento, de súplica por la venida del Justo.",lyricsTitle:"Rorate caeli",lyrics:rh,priority:24},{title:"Conditor alme siderum",sections:["entrada","meditacion","final"],tags:["advent","christ"],source:"chantPublicDomain",note:"Himno tradicional de Adviento para entrada o meditación.",lyricsTitle:"Conditor alme siderum",lyrics:ih,priority:20},{title:"Adeste fideles",sections:["entrada","final"],tags:["christmas","joy","christ"],source:"chantPublicDomain",note:"Canto tradicional de Navidad para entrada o final.",lyricsTitle:"Adeste fideles",lyrics:th,priority:22},{title:"O magnum mysterium",sections:["entrada","meditacion","final"],tags:["christmas","christ","mary"],source:"chantPublicDomain",note:"Texto tradicional de Navidad para meditación, entrada o final.",lyricsTitle:"O magnum mysterium",lyrics:sh,priority:20},{title:"Christus vincit",sections:["entrada","final","meditacion"],tags:["christ","trinity","joy"],source:"chantPublicDomain",note:"Aclamación tradicional a Cristo Rey para entrada, final o celebraciones cristológicas.",lyricsTitle:"Christus vincit",lyrics:nh,priority:18},{title:"O filii et filiae",sections:["entrada","aclamacion","final"],tags:["easter","joy","christ"],source:"chantPublicDomain",note:"Canto pascual tradicional, especialmente útil en Pascua y domingos pascuales.",lyricsTitle:"O filii et filiae",lyrics:lh,priority:22},{title:"Vexilla Regis",sections:["entrada","meditacion","final"],tags:["lent","christ"],source:"chantPublicDomain",note:"Himno tradicional de la Cruz, fuerte para Cuaresma, Pasión y Viernes Santo.",lyricsTitle:"Vexilla Regis",lyrics:ch,priority:22},{title:"Crux fidelis",sections:["meditacion","final"],tags:["lent","christ"],source:"chantPublicDomain",note:"Refrán tradicional para la adoración de la Cruz y meditaciones de Pasión.",lyricsTitle:"Crux fidelis",lyrics:Yv,priority:20},{title:"Stabat Mater",sections:["meditacion","final"],tags:["lent","mary","christ"],source:"chantPublicDomain",note:"Secuencia tradicional junto a la Cruz; útil en Cuaresma, Pasión y celebraciones de la Virgen Dolorosa.",lyricsTitle:"Stabat Mater",lyrics:uh,priority:20},{title:"Juntos como hermanos",sections:["entrada","final"],tags:["community","ordinary","joy"],source:"schoenstatt",note:"Entrada sencilla cuando se quiere subrayar asamblea y camino común.",priority:8},{title:"Qué alegría cuando me dijeron",sections:["entrada","salmo"],tags:["psalm","joy","community","ordinary"],source:"schoenstatt",note:"Muy apto para entrada dominical o celebración con tono festivo.",priority:10},{title:"Dios nos convoca",sections:["entrada"],tags:["community","ordinary"],source:"sanEsteban",note:"Entrada centrada en la reunión de la asamblea."},{title:"El Señor nos ha reunido",sections:["entrada"],tags:["community","joy","ordinary"],source:"sanEsteban",note:"Entrada de convocatoria comunitaria."},{title:"Vienen con alegría",sections:["entrada","final"],tags:["joy","community","ordinary"],source:"sanEsteban",note:"Buena para una entrada viva de domingo.",priority:5},{title:"Reunidos en su nombre",sections:["entrada"],tags:["community","christ","ordinary"],source:"sanEsteban",note:"Entrada sobria para tiempo ordinario."},{title:"Un pueblo camina",sections:["entrada","final"],tags:["community","mission","ordinary"],source:"sanEsteban",note:"Encaja cuando el día tiene tono de seguimiento o misión."},{title:"Pueblo de reyes",sections:["entrada","final"],tags:["community","christ","mission"],source:"liturgico",note:"Entrada solemne para una asamblea grande."},{title:"Alegre la mañana",sections:["entrada"],tags:["joy","thanksgiving","ordinary"],source:"liturgico",note:"Entrada luminosa para celebraciones de mañana."},{title:"Aclamad al Señor",sections:["entrada","final"],tags:["joy","community","ordinary"],source:"liturgico",note:"Opción festiva y amplia para iniciar la celebración."},{title:"Alabaré a mi Señor",sections:["entrada","final"],tags:["joy","thanksgiving","ordinary"],source:"liturgico",note:"De corte carismático/popular para entrada alegre."},{title:"Cristo joven",sections:["entrada","final"],tags:["christ","mission","joy"],source:"schoenstatt",note:"Útil en misa de jóvenes o celebración con tono misionero."},{title:"Enciéndeme",sections:["entrada","final","meditacion"],tags:["mission","spirit","offering"],source:"safaMadrid",note:"Entrada o envío cuando el día pide disponibilidad y ardor apostólico.",priority:6},{title:"Iglesia joven",sections:["entrada","final"],tags:["community","mission","joy"],source:"sanEsteban",note:"Entrada viva, especialmente con jóvenes o familias."},{title:"Hacia ti",sections:["entrada","ofertorio"],tags:["offering","ordinary"],source:"schoenstatt",note:"Buena para procesión de entrada o presentación de dones."},{title:"Ven, ven, Señor",sections:["entrada","aclamacion"],tags:["advent","christ"],source:"sanEsteban",note:"Prioritaria en Adviento.",priority:18},{title:"Si rasgaras los cielos",sections:["entrada","aclamacion"],tags:["advent","word"],source:"schoenstatt",note:"Adviento con tono de súplica."},{title:"Hoy en la tierra",sections:["entrada","final"],tags:["christmas","joy"],source:"pilgrim",note:"Navidad o días del tiempo de Navidad.",priority:18},{title:"Los niños hebreos",sections:["entrada"],tags:["christ","joy"],source:"sanEsteban",note:"Entrada propia para Domingo de Ramos."},{title:"Señor, ten piedad",sections:["penitencial"],tags:["forgiveness","ordinary"],source:"schoenstatt",note:"Forma sencilla para cantar el acto penitencial.",priority:8},{title:"Kyrie eleison",sections:["penitencial"],tags:["forgiveness","ordinary"],source:"pilgrim",note:"Opción breve para el rito penitencial."},{title:"Perdona a tu pueblo",sections:["penitencial"],tags:["forgiveness","lent"],source:"sanEsteban",note:"Especialmente apropiado en Cuaresma.",priority:14},{title:"Agua, lávame",sections:["penitencial","meditacion"],tags:["forgiveness","lent"],source:"liturgico",note:"Penitencial o meditación de purificación."},{title:"Hoy perdóname",sections:["penitencial","meditacion"],tags:["forgiveness","lent"],source:"schoenstatt",note:"Súplica penitencial directa."},{title:"Me levantaré",sections:["penitencial","meditacion"],tags:["forgiveness","lent"],source:"liturgico",note:"Útil cuando las lecturas hablan de conversión."},{title:"Piedad de mí, Señor",sections:["penitencial","salmo"],tags:["forgiveness","psalm","lent"],source:"liturgico",note:"Se adapta bien al salmo 50 y tiempos penitenciales."},{title:"Renuévame",sections:["penitencial","meditacion"],tags:["forgiveness","spirit"],source:"rcc",note:"Canto de renovación interior."},{title:"Gloria",sections:["gloria"],tags:["gloria","joy","trinity"],source:"schoenstatt",note:"Gloria cantado de uso general.",priority:8},{title:"Gloria de la Juventud",sections:["gloria"],tags:["gloria","joy"],source:"schoenstatt",note:"Opción más viva para celebraciones con jóvenes."},{title:"Gloria a Dios",sections:["gloria"],tags:["gloria","joy"],source:"pilgrim",note:"Gloria sencillo para domingo o solemnidad."},{title:"Gloria, gloria a Dios",sections:["gloria"],tags:["gloria","joy"],source:"rcc",note:"Opción de carácter carismático."},{title:"Mi alma canta de gozo",sections:["gloria","meditacion"],tags:["gloria","joy","mary"],source:"liturgico",note:"Puede servir como canto de alabanza si el día tiene tono mariano."},{title:"Credo niceno",sections:["credo"],tags:["trinity","christ","word","community"],source:"chantPublicDomain",note:"Texto litúrgico completo para cantar la profesión de fe ordinaria.",priority:12},{title:"Credo apostólico",sections:["credo"],tags:["trinity","christ","word","community"],source:"chantPublicDomain",note:"Texto litúrgico completo del Símbolo de los Apóstoles.",priority:10},{title:"Credo III",sections:["credo"],tags:["trinity","christ","word","community"],source:"chantPublicDomain",note:"Texto latino tradicional del Credo para canto gregoriano.",priority:14},{title:"Tu Palabra me da vida",sections:["salmo","aclamacion"],tags:["word","psalm","ordinary"],source:"safaMadrid",note:"Muy útil alrededor de la liturgia de la Palabra.",priority:10},{title:"Prueben qué bueno es el Señor",sections:["salmo","comunion"],tags:["psalm","eucharist","thanksgiving"],source:"schoenstatt",note:"Buena opción si el salmo o la comunión hablan de gustar la bondad de Dios."},{title:"El Señor es mi pastor",sections:["salmo","comunion","meditacion"],tags:["psalm","peace","christ"],source:"liturgico",note:"Para salmo 22/23, domingo pascual o día de Buen Pastor."},{title:"A ti levanto mis ojos",sections:["salmo"],tags:["psalm","ordinary"],source:"liturgico",note:"Cuando el salmo tiene tono de confianza."},{title:"Gustad y ved",sections:["salmo","comunion"],tags:["psalm","eucharist","thanksgiving"],source:"liturgico",note:"Fuerte para comunión y salmo con sabor eucarístico.",priority:8},{title:"Rendid a Yahvé",sections:["salmo","entrada"],tags:["psalm","joy","holy"],source:"schoenstatt",note:"Apropiado para salmos de alabanza."},{title:"Salmo de la creación",sections:["salmo","meditacion"],tags:["psalm","thanksgiving","joy"],source:"schoenstatt",note:"Salmo o meditación con tono de alabanza cósmica."},{title:"Misericordias Domini",sections:["salmo","meditacion"],tags:["psalm","thanksgiving","peace"],source:"liturgico",note:"Taizé, breve y meditativo."},{title:"El Señor es mi luz",sections:["salmo","meditacion"],tags:["psalm","peace","ordinary"],source:"liturgico",note:"Para salmos de confianza."},{title:"Bendice, alma mía, al Señor",sections:["salmo","meditacion"],tags:["psalm","thanksgiving"],source:"liturgico",note:"Para salmos de bendición y gratitud."},{title:"Aleluya popular",sections:["aclamacion"],tags:["word","joy","ordinary"],source:"liturgico",note:"Aclamación general fuera de Cuaresma.",priority:6},{title:"Aleluya de la tierra",sections:["aclamacion"],tags:["word","joy","ordinary"],source:"liturgico",note:"Aclamación viva y conocida."},{title:"Aleluya para Pascua",sections:["aclamacion"],tags:["word","easter","joy"],source:"liturgico",note:"Prioritaria durante Pascua.",priority:20},{title:"Aleluya, el Señor resucitó",sections:["aclamacion","entrada","final"],tags:["easter","joy","christ"],source:"liturgico",note:"Pascua o domingos con tono de resurrección.",priority:18},{title:"Mirad, Jesús resucita hoy",sections:["entrada","aclamacion","final"],tags:["easter","joy","christ"],source:"liturgico",note:"Muy claro para Pascua.",priority:18},{title:"Aleluya para Adviento",sections:["aclamacion"],tags:["advent","word"],source:"liturgico",note:"Adviento.",priority:16},{title:"Aleluya para Navidad",sections:["aclamacion"],tags:["christmas","word","joy"],source:"liturgico",note:"Navidad y tiempo de Navidad.",priority:16},{title:"Alabanza a ti, Cristo",sections:["aclamacion"],tags:["lent","word","christ"],source:"liturgico",note:"Aclamación cuaresmal sin aleluya.",priority:20},{title:"En tu altar",sections:["ofertorio"],tags:["offering","eucharist"],source:"schoenstatt",note:"Ofertorio explícito y directo.",priority:10},{title:"Esto que soy, esto te doy",sections:["ofertorio"],tags:["offering","thanksgiving"],source:"schoenstatt",note:"Ofertorio de entrega personal.",priority:8},{title:"Te presentamos el vino y el pan",sections:["ofertorio"],tags:["offering","eucharist"],source:"sanEsteban",note:"Ofertorio clásico centrado en los dones.",priority:8},{title:"Saber que vendrás",sections:["ofertorio"],tags:["offering","advent","christ"],source:"sanEsteban",note:"Ofertorio con tono de esperanza."},{title:"Recibe, oh Dios",sections:["ofertorio"],tags:["offering"],source:"sanEsteban",note:"Presentación de dones sobria."},{title:"Ofrenda de amor",sections:["ofertorio"],tags:["offering","eucharist"],source:"sanEsteban",note:"Ofertorio eucarístico."},{title:"Te ofrecemos, Señor",sections:["ofertorio"],tags:["offering"],source:"sanEsteban",note:"Ofertorio de uso general."},{title:"Bendito seas, Señor",sections:["ofertorio"],tags:["offering","thanksgiving"],source:"sanEsteban",note:"Encaja con la presentación del pan y del vino."},{title:"Juntos nos acercamos",sections:["ofertorio","comunion"],tags:["community","eucharist"],source:"schoenstatt",note:"Cuando se quiere unir procesión de dones y mesa común."},{title:"Qué te puedo dar",sections:["ofertorio"],tags:["offering","thanksgiving"],source:"safaMadrid",note:"Ofertorio conocido en misa de familias."},{title:"En tus manos",sections:["ofertorio","meditacion"],tags:["offering","peace"],source:"schoenstatt",note:"Entrega confiada."},{title:"Santo Campanario",sections:["santo"],tags:["holy","joy"],source:"schoenstatt",note:"Santo breve y reconocible.",priority:8},{title:"Santo es el Señor mi Dios",sections:["santo"],tags:["holy","joy"],source:"sanEsteban",note:"Santo popular."},{title:"Santo salesiano",sections:["santo"],tags:["holy","joy"],source:"sanEsteban",note:"Santo muy cantable para asamblea."},{title:"Santo en unión del coro",sections:["santo"],tags:["holy"],source:"sanEsteban",note:"Opción tradicional para el ordinario."},{title:"Santo solemne",sections:["santo"],tags:["holy"],source:"sanEsteban",note:"Mejor para solemnidades."},{title:"Santo de misa de familias",sections:["santo"],tags:["holy","joy","community"],source:"safaMadrid",note:"Versión pensada para asamblea familiar."},{title:"Santo Palestrina",sections:["santo"],tags:["holy"],source:"sanEsteban",note:"Opción más clásica."},{title:"Anunciamos tu muerte",sections:["memorial"],tags:["christ","eucharist"],source:"rcc",note:"Aclamación memorial directa."},{title:"Cada vez que comemos de este pan",sections:["memorial"],tags:["eucharist","christ"],source:"rcc",note:"Aclamación memorial centrada en pan y cáliz."},{title:"Por tu cruz y resurrección",sections:["memorial"],tags:["easter","christ","eucharist"],source:"rcc",note:"Especialmente fuerte en Pascua."},{title:"Tuyo es el reino",sections:["amen"],tags:["amen","gloria","trinity"],source:"rcc",note:"Aclamación conclusiva breve."},{title:"Amén solemne",sections:["amen"],tags:["amen","gloria","trinity"],source:"liturgico",note:"Para doxología final de la plegaria eucarística."},{title:"Amén cantado",sections:["amen"],tags:["amen"],source:"pilgrim",note:"Respuesta simple de la asamblea."},{title:"Padrenuestro cantado",sections:["padrenuestro"],tags:["peace","community"],source:"pilgrim",note:"Versión de uso general para la oración dominical.",priority:8},{title:"Padre nuestro de la paz",sections:["padrenuestro"],tags:["peace","community"],source:"rcc",note:"Cuando se quiere preparar el rito de la paz."},{title:"Padrenuestro Kairoi",sections:["padrenuestro"],tags:["community","peace"],source:"pilgrim",note:"Versión conocida en coros juveniles."},{title:"Padrenuestro tradicional",sections:["padrenuestro"],tags:["community"],source:"sanEsteban",note:"Opción sobria y congregacional."},{title:"Cordero de Dios",sections:["cordero"],tags:["eucharist","peace"],source:"schoenstatt",note:"Cordero sencillo para fracción del pan.",priority:8},{title:"Cordero de Dios 2",sections:["cordero"],tags:["eucharist","peace"],source:"schoenstatt",note:"Otra melodía para el ordinario."},{title:"Cordero Paraguayo",sections:["cordero"],tags:["eucharist","peace"],source:"schoenstatt",note:"Variante popular con carácter latinoamericano."},{title:"Cordero de Dios Mejía",sections:["cordero"],tags:["eucharist","peace"],source:"stella",note:"Opción frecuente en repertorios hispanoamericanos."},{title:"Cordero de Dios Palazón",sections:["cordero"],tags:["eucharist","peace"],source:"liturgico",note:"Opción litúrgica sobria."},{title:"Cordero de misa de familias",sections:["cordero"],tags:["eucharist","peace","community"],source:"sanEsteban",note:"Buena para asamblea familiar."},{title:"A tu mesa",sections:["comunion"],tags:["communion","eucharist","corpus"],source:"liturgico",note:"Comunión directa y clara; sube mucho en Corpus.",priority:12},{title:"Alrededor de tu mesa",sections:["comunion"],tags:["communion","eucharist","community","corpus"],source:"liturgico",note:"Muy buen canto de comunión comunitaria.",priority:12},{title:"Pan de vida",sections:["comunion"],tags:["communion","eucharist","corpus"],source:"vidaSanto",note:"Prioritario cuando el día habla de pan de vida o Corpus.",priority:18},{title:"Milagro de amor",sections:["comunion","meditacion"],tags:["communion","eucharist","adoration","corpus"],source:"schoenstatt",note:"Comunión eucarística de tono adorante.",priority:14},{title:"Jesús alimento que da vida",sections:["comunion"],tags:["communion","eucharist","corpus"],source:"schoenstatt",note:"Muy adecuado para Corpus o textos de vida eterna.",priority:16},{title:"Te haces presente en mí",sections:["comunion","meditacion"],tags:["communion","eucharist","adoration"],source:"schoenstatt",note:"Comunión interior y adorante."},{title:"Alma de Cristo",sections:["comunion","meditacion"],tags:["communion","eucharist","adoration"],source:"chantPublicDomain",note:"Comunión o acción de gracias.",lyricsTitle:"Alma de Cristo",lyrics:Wv,priority:18},{title:"Te conocimos al partir el pan",sections:["comunion"],tags:["communion","eucharist","easter"],source:"liturgico",note:"Especialmente adecuado para Emaús y Pascua.",priority:12},{title:"En la fracción del pan",sections:["comunion"],tags:["communion","eucharist","easter"],source:"liturgico",note:"Comunión con sabor pascual."},{title:"Una espiga dorada por el sol",sections:["comunion","ofertorio"],tags:["communion","eucharist","offering"],source:"pilgrim",note:"Comunión u ofertorio con símbolos de pan y vino."},{title:"No hay amor más grande",sections:["comunion","meditacion"],tags:["communion","eucharist","christ"],source:"schoenstatt",note:"Comunión cuando las lecturas hablan de entrega."},{title:"Cena de Jueves",sections:["comunion","meditacion"],tags:["communion","eucharist","corpus"],source:"schoenstatt",note:"Comunión de tono eucarístico y contemplativo."},{title:"Mi amado es para mí",sections:["comunion","meditacion"],tags:["communion","adoration"],source:"liturgico",note:"Comunión contemplativa."},{title:"Alabándote",sections:["comunion","meditacion"],tags:["communion","adoration","thanksgiving"],source:"safaMadrid",note:"Comunión de acción de gracias."},{title:"Tú eres mi Dios",sections:["comunion","meditacion"],tags:["adoration","thanksgiving","peace"],source:"almaMisas",note:"Comunión o acción de gracias sencilla."},{title:"Nada te turbe",sections:["meditacion","comunion"],tags:["peace","adoration"],source:"pilgrim",note:"Silencio después de la comunión o adoración."},{title:"Jesús estoy aquí",sections:["meditacion","comunion"],tags:["adoration","peace"],source:"schoenstatt",note:"Meditación personal tras la comunión."},{title:"En ti descansar",sections:["meditacion","comunion"],tags:["peace","adoration"],source:"schoenstatt",note:"Canto reposado para acción de gracias."},{title:"Sé en quién he puesto mi confianza",sections:["meditacion"],tags:["peace","martyr","saints"],source:"schoenstatt",note:"Muy útil para mártires o lecturas de fidelidad.",priority:10},{title:"Maravillas hizo en mí",sections:["meditacion","final"],tags:["mary","thanksgiving","joy"],source:"schoenstatt",note:"Acción de gracias mariana."},{title:"Mi alma canta",sections:["meditacion","final"],tags:["mary","thanksgiving","joy"],source:"liturgico",note:"Magnificat o canto de acción de gracias."},{title:"Te alabo en verdad",sections:["meditacion","final"],tags:["thanksgiving","adoration"],source:"schoenstatt",note:"Acción de gracias de tono carismático."},{title:"Getsemaní",sections:["meditacion"],tags:["lent","christ","adoration"],source:"schoenstatt",note:"Cuaresma, pasión o meditación sobria."},{title:"Misericordias Domini",sections:["meditacion"],tags:["peace","thanksgiving"],source:"liturgico",note:"Repetitivo y apto para silencio orante."},{title:"Alma misionera",sections:["final"],tags:["mission","ordinary"],source:"liturgico",note:"Envío claro y conocido.",priority:12},{title:"Pescador de hombres",sections:["final","comunion"],tags:["mission","christ","ordinary"],source:"schoenstatt",note:"Final o comunión cuando el Evangelio llama al seguimiento.",priority:10},{title:"Santa María del camino",sections:["final"],tags:["mary","mission"],source:"sanEsteban",note:"Canto final mariano y de camino.",priority:8},{title:"Junto a ti María",sections:["final","meditacion"],tags:["mary","peace"],source:"schoenstatt",note:"Final mariano sencillo.",priority:10},{title:"Reina y Madre",sections:["final","meditacion"],tags:["mary"],source:"schoenstatt",note:"Final mariano de sensibilidad schoenstattiana."},{title:"María de la Alianza",sections:["final","meditacion"],tags:["mary"],source:"schoenstatt",note:"Final mariano."},{title:"Alégrate, María",sections:["final","meditacion"],tags:["mary","joy"],source:"liturgico",note:"Mariano festivo, especialmente en fiestas de la Virgen."},{title:"Misioneros",sections:["final"],tags:["mission","ordinary"],source:"schoenstatt",note:"Envío apostólico."},{title:"Id y anunciad",sections:["final"],tags:["mission","word"],source:"vidaSanto",note:"Final cuando el Evangelio envía a anunciar."},{title:"Tomado de la mano",sections:["final","comunion"],tags:["christ","peace","community"],source:"safaMadrid",note:"Final popular de misa de familias."},{title:"Ven Espíritu Divino",sections:["final","entrada","meditacion"],tags:["spirit","pentecost"],source:"schoenstatt",note:"Pentecostés o días con fuerte presencia del Espíritu.",priority:14},{title:"Transformación en Pentecostés",sections:["entrada","final","meditacion"],tags:["spirit","pentecost","mission"],source:"schoenstatt",note:"Pentecostés y envío misionero.",priority:16},{title:"Sopla",sections:["meditacion","final"],tags:["spirit"],source:"schoenstatt",note:"Invocación al Espíritu Santo."},{title:"Fuego",sections:["entrada","final","meditacion"],tags:["spirit","mission"],source:"schoenstatt",note:"Canto de ardor misionero."},{title:"Uno en Trinidad",sections:["entrada","gloria","meditacion","final"],tags:["trinity","gloria"],source:"schoenstatt",note:"Prioritario para la Santísima Trinidad.",priority:22},{title:"Canto a Dios Padre",sections:["entrada","meditacion","final"],tags:["trinity","thanksgiving"],source:"schoenstatt",note:"Buen encaje en solemnidades trinitarias."}];function Ii(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function wr(e,o=new Set){return typeof e=="string"?e:!e||typeof e!="object"||o.has(e)?"":(o.add(e),Array.isArray(e)?e.map(a=>wr(a,o)).join(" "):Object.entries(e).filter(([a])=>!a.startsWith("__")).map(([,a])=>wr(a,o)).join(" "))}function ko(e,o){const a=e[o];return typeof a=="string"?a.trim():""}function Ci(e){return Array.isArray(e.lecturas)?e.lecturas.filter(o=>!!(o&&typeof o=="object")):[]}function Oi(e){return ko(e,"type").toUpperCase()}function ph(e){return e==="PSALM"||e==="CELEBRATION_PSALM"||e.endsWith("PSALM")}function fh(e){return e==="ACCLAMATION"||e==="CELEBRATION_ACCLAMATION"}function gh(e){return(e.split(":").pop()?.trim()??"").replace(/^_+|_+$/g,"").trim()}function Sh(e,o){const a=gh(e);if(!V(a))return o;const s=`$R.$ ${a}`,n=o.replace(/\s*R\.(?=\s|$)/g,`
${s}`);return[s,n].filter(V).join(`

`)}function bh(e){const o=Ci(e).find(a=>{const s=Oi(a);return ph(s)&&V(ko(a,"texto"))});return o?Sh(ko(o,"ref"),ko(o,"texto")):""}function Di(e){return Ii([e.celebration,e.rank,e.cycle,...e.seasons??[]].filter(Boolean).join(" "))}function bd(e){const o=Di(e);return o.includes("lent")||o.includes("cuaresma")}function yh(e){const o=Di(e);return o.includes("advent")||o.includes("adviento")?"Muéstranos, Señor, tu misericordia y danos tu salvación.":o.includes("christmas")||o.includes("navidad")||o.includes("epifania")?"Nos ha amanecido un día sagrado; venid, naciones, adorad al Señor, porque hoy una gran luz ha bajado a la tierra.":bd(e)?"No solo de pan vive el hombre, sino de toda palabra que sale de la boca de Dios.":o.includes("pentecost")?"Ven, Espíritu Santo, llena los corazones de tus fieles y enciende en ellos el fuego de tu amor.":o.includes("easter")||o.includes("pascua")||o.includes("ascension")?"Ha resucitado Cristo, que creó todas las cosas y se compadeció del género humano.":o.includes("martir")||o.includes("martyr")?"Dichosos los perseguidos por causa de la justicia, porque de ellos es el reino de los cielos.":o.includes("virgen")||o.includes("maria")?"Dichosa tú, Virgen María, que has creído, porque lo que te ha dicho el Señor se cumplirá.":"Tus palabras, Señor, son espíritu y vida; tú tienes palabras de vida eterna."}function vh(e){return e.replace(/_([^_]+)_/g,"$1").replace(/\$([^$]+)\$/g,"$1").replace(/\$/g,"").trim()}function kr(e){const o=e?.trim()??"",a=o.match(/_([^_]+)_/)?.[1]?.trim();if(a)return a;const s=o.match(/:\s*(.+)$/s)?.[1]?.trim();return s?vh(s):""}function Il(e,o){const a=Ci(e).find(s=>{const n=Oi(s);return n==="GOSPEL"||n==="CELEBRATION_GOSPEL"});return kr(o.massGospelReference)||kr(a?ko(a,"ref"):"")}function hh(e,o){const a=Ci(e).find(r=>{const i=Oi(r);return fh(i)&&(V(ko(r,"ref"))||V(ko(r,"texto")))}),s=bd(o)?"$Todos.$ Honor y gloria a ti, Señor Jesús.":"$Todos.$ Aleluya.",n=a?ko(a,"texto")||kr(ko(a,"ref"))||Il(e,o):Il(e,o)||yh(o);return[s,`$Cantor.$ ${n}`,s].filter(V).join(`

`)}function Eh(e,o){const a=Di(o),s=Ii([a,wr(e)].filter(Boolean).join(" ")),n=new Set;return(a.includes("ordinary")||a.includes("ordinario"))&&n.add("ordinary"),(a.includes("advent")||a.includes("adviento"))&&n.add("advent"),(a.includes("christmas")||a.includes("navidad"))&&n.add("christmas"),(a.includes("lent")||a.includes("cuaresma"))&&n.add("lent"),(a.includes("easter")||a.includes("pascua"))&&n.add("easter"),(a.includes("corpus")||a.includes("cuerpo y sangre"))&&n.add("corpus"),(a.includes("trinidad")||a.includes("trinity"))&&n.add("trinity"),a.includes("pentecost")&&n.add("pentecost"),(a.includes("pentecost")||a.includes("espiritu santo")||a.includes("paraclito"))&&n.add("spirit"),(a.includes("maria")||a.includes("virgen")||a.includes("madre"))&&n.add("mary"),a.includes("martir")&&n.add("martyr"),(a.includes("santo")||a.includes("santos")||a.includes("san "))&&n.add("saints"),(s.includes("eucarist")||s.includes("pan de vida")||/\b(?:pan|vino)\b/.test(s))&&n.add("eucharist"),(s.includes("mision")||s.includes("envia")||s.includes("apostol"))&&n.add("mission"),(s.includes("palabra")||s.includes("evangelio"))&&n.add("word"),(s.includes("perdon")||s.includes("misericord"))&&n.add("forgiveness"),s.includes("paz")&&n.add("peace"),s.includes("alegr")&&n.add("joy"),(s.includes("ofrenda")||s.includes("altar"))&&n.add("offering"),s.includes("comunion")&&n.add("communion"),n}function Ah(e,o,a){const s=["advent","christmas","lent","easter","pentecost"],n=e.tags.filter(i=>a.has(i));let r=(e.sections[0]===o?18:0)+(n.length?e.priority??0:Math.min(e.priority??0,2));for(const i of e.tags)a.has(i)&&(r+=i==="ordinary"?5:24);for(const i of s)e.tags.includes(i)&&!a.has(i)&&(r-=42);return e.tags.includes("corpus")&&!a.has("corpus")&&!a.has("eucharist")&&(r-=36),o==="comunion"&&(a.has("corpus")||a.has("eucharist"))&&(r+=e.tags.includes("eucharist")?16:0),o==="salmo"&&e.tags.includes("psalm")&&(r+=8),r}function Ph(e,o){const a=e.tags.filter(s=>o.has(s)).map(s=>Rv[s]);return a.length?a.join(", "):"encaje general de la sección"}function qh(e){return`<a href="${We(e.url)}" target="_blank" rel="noreferrer">${We(e.label)}</a>`}function Ye(e,o){return['<div class="song-liturgical-text">',`<p><span class="rubric">Texto litúrgico.</span> ${We(e)}</p>`,...o.split(/\n{2,}/).map(a=>`<p>${We(a).replace(/\n/g,"<br>")}</p>`),"</div>"].join("")}function Ih(e,o,a){const s=Ii(e.title);if(e.sections.includes("penitencial")&&s.includes("kyrie"))return Ye("Kyrie eleison",`$Sacerdote/diácono.$ Kyrie, eleison.
$Pueblo.$ Kyrie, eleison.

$Sacerdote/diácono.$ Christe, eleison.
$Pueblo.$ Christe, eleison.

$Sacerdote/diácono.$ Kyrie, eleison.
$Pueblo.$ Kyrie, eleison.`);if(e.sections.includes("penitencial")&&s.includes("senor ten piedad"))return Ye("Señor, ten piedad",`$Sacerdote/diácono.$ Señor, ten piedad.
$Pueblo.$ Señor, ten piedad.

$Sacerdote/diácono.$ Cristo, ten piedad.
$Pueblo.$ Cristo, ten piedad.

$Sacerdote/diácono.$ Señor, ten piedad.
$Pueblo.$ Señor, ten piedad.`);if(e.sections.includes("gloria")&&s.includes("gloria"))return Ye("Gloria",`$Todos.$ Gloria a Dios en el cielo,
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
en la gloria de Dios Padre. Amén.`);if(e.sections.includes("credo"))return s.includes("apostolico")?Ye("Credo apostólico",_v):s.includes("iii")?Ye("Credo III",zv):Ye("Credo niceno",Nv);if(e.sections.includes("salmo")){const n=bh(a);if(n)return Ye("Salmo responsorial del día",n)}if(e.sections.includes("aclamacion")){const n=hh(a,o);if(n)return Ye("Aclamación antes del Evangelio del día",n)}return e.sections.includes("santo")?Ye("Santo",`$Todos.$ Santo, Santo, Santo es el Señor,
Dios del universo.
Llenos están el cielo y la tierra de tu gloria.
Hosanna en el cielo.
Bendito el que viene en nombre del Señor.
Hosanna en el cielo.`):e.sections.includes("memorial")?s.includes("cada vez")?Ye("Aclamación memorial",`$Sacerdote.$ Aclamemos el Misterio de la fe.

$Pueblo.$ Cada vez que comemos de este pan y bebemos de este cáliz, anunciamos tu muerte, Señor, hasta que vuelvas.`):s.includes("por tu cruz")?Ye("Aclamación memorial",`$Sacerdote.$ Este es el Misterio de la fe.

$Pueblo.$ Por tu cruz y resurrección nos has salvado, Señor.`):Ye("Aclamación memorial",`$Sacerdote.$ Este es el Misterio de la fe.

$Pueblo.$ Anunciamos tu muerte, proclamamos tu resurrección. ¡Ven, Señor Jesús!`):e.sections.includes("amen")?Ye("Gran Amén","$Pueblo.$ Amén."):e.sections.includes("padrenuestro")?Ye("Padrenuestro",`$Todos.$ ${pa(o.lordPrayerLanguage)}`):e.sections.includes("cordero")?Ye("Cordero de Dios",`$Todos.$ Cordero de Dios, que quitas el pecado del mundo, ten piedad de nosotros.

$Todos.$ Cordero de Dios, que quitas el pecado del mundo, ten piedad de nosotros.

$Todos.$ Cordero de Dios, que quitas el pecado del mundo, danos la paz.`):""}function Ch(e,o,a,s){const n=Ov[e.source],r=Ih(e,a,s),i=e.lyrics?Ye(e.lyricsTitle??e.title,e.lyrics):"",t=!!(r||i);return['<div class="song-suggestion">',`<p class="song-suggestion-title">${We(e.title)}</p>`,`<p><span class="rubric">Encaje.</span> ${We(e.note)}</p>`,`<p><span class="rubric">Prioridad por día.</span> ${We(Ph(e,o))}</p>`,r,i,`<p><span class="rubric">Fuente.</span> ${qh(n)} <span class="song-source-note">${We(n.note)}</span></p>`,'<div class="song-source-action">',`<span class="song-source-action-title">${t?"Texto incluido":"Letra y acordes"}</span>`,`<span>${t?"Consulta la fuente enlazada para melodía, partitura o acordes.":"Consultar en la fuente enlazada."}</span>`,"</div>","</div>"].join("")}function vo(e){return Dv[e]}function Oh(e,o,a){const s=Eh(o,a);return mh.filter(n=>n.sections.includes(e)).map(n=>({song:n,score:Ah(n,e,s)})).sort((n,r)=>r.score-n.score||n.song.title.localeCompare(r.song.title,"es")).map(({song:n})=>({label:n.title,content:Ch(n,s,a,o)}))}const Dh=[{key:"vienen-con-alegria",title:"Vienen con alegría",chordSheet:`[DO]Vienen con alegría, Señor
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
te deseo todo bien.`,sourceLabel:'Cancionero Pilgrim (Salmo 121/122, "Qué alegría cuando me dijeron")',sourceUrl:"https://pilgrim.neocities.org/cancionero/resources/canciones/que-alegria-cuando-me-dijeron-acordes"}],Rh=[{key:"oh-cruz-fiel",title:"Oh, Cruz Fiel",chordSheet:`[la]¡Oh cruz fiel, árbol [FA]únic[SOL]o en nob[la]leza!
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
con un [FA]peso tan [la]dulce en [SOL]su cort[DO]eza!`,sourceLabel:"Cancionero propio (respaldo de SongBook, 06/09/2026)",sourceUrl:""}],yd={entrada:Dh,meditacion:Rh};function $h(e){return yd[e]}const Cl=new Set(Object.keys(yd).map(vo));function Th(e){return['<div class="mass-song">',pd(e.chordSheet),"</div>"].join("")}const Lh=3600*1e3;let Br=!1,Yr=!1;function vd(){window.location.reload()}function Mh(e){Br=e,!Br&&Yr&&(Yr=!1,vd())}function Nh(){if(Br){Yr=!0;return}vd()}function _h(e){if(!e)return;const o=()=>{navigator.onLine!==!1&&e.update().catch(()=>{})};setInterval(o,Lh),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&o()}),window.addEventListener("online",o)}function zh(e,o,a){const s=o>0?` (capo ${o})`:"";return`  • *${e}*${s}: ${a}`}function Jh(e){return e.length?`*ACORDES*


${e.join(`

`)}`:""}const vs=1080,hs=1920,jh=30,Ol=1,mr=300,Dl=36,Rl=6;async function Uh(e,o){try{return await Hh(e,o)}finally{o.cameraStream?.getTracks().forEach(a=>a.stop())}}async function Hh(e,o){if(!xh())throw new Error("Este navegador no puede generar video desde la app.");const a=Math.max(320,Math.ceil(e.getBoundingClientRect().width)),s=vs/a,n=hs/s,r=Math.max(Math.ceil(e.scrollHeight),Math.ceil(n)),i=await kh(e,{contentHeight:r,liturgicalColor:o.liturgicalColor,readerScale:o.readerScale,theme:o.theme,width:a});if(o.signal?.aborted)return null;const t=document.createElement("canvas");t.width=vs,t.height=hs;const l=t.getContext("2d");if(!l)throw new Error("No se pudo preparar el lienzo del video.");const u=o.cameraStream?await Fh(o.cameraStream):null,c=t.captureStream(jh),m=o.cameraStream?.getAudioTracks()??[],f=new MediaStream([...c.getVideoTracks(),...m]),h=new MediaRecorder(f,Vh(m.length>0)),C=[];let O=0,J=0,H=!1;const z=Math.max(0,r-n),_=Math.max(0,o.speedPixelsPerSecond),L=_>0?z/_:0,j=Ol+L,X=()=>{H||(H=!0,O&&cancelAnimationFrame(O),c.getTracks().forEach(me=>me.stop()),o.cameraStream?.getTracks().forEach(me=>me.stop()),u?.remove(),h.state!=="inactive"&&h.stop())};return o.signal?.addEventListener("abort",X,{once:!0}),await new Promise((me,re)=>{h.ondataavailable=pe=>{pe.data.size>0&&C.push(pe.data)},h.onerror=()=>{X(),re(new Error("No se pudo grabar el video generado."))},h.onstop=()=>{o.signal?.removeEventListener("abort",X),me()},$l(l,i,0,a,n,u,o.liturgicalColor),h.start(1e3),o.onRecordingStarted?.();const ae=pe=>{if(o.signal?.aborted){X();return}J||(J=pe);const qe=(pe-J)/1e3,ie=Math.max(0,qe-Ol),te=Math.min(z,ie*_);if($l(l,i,te,a,n,u,o.liturgicalColor),qe>=j){X();return}O=requestAnimationFrame(ae)};O=requestAnimationFrame(ae)}),!o.signal?.aborted&&C.length?new Blob(C,{type:C[0]?.type||"video/webm"}):null}function xh(){return typeof MediaRecorder<"u"&&typeof HTMLCanvasElement.prototype.captureStream=="function"}function Vh(e){const a=(e?["video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm"]:["video/webm;codecs=vp9","video/webm"]).find(s=>MediaRecorder.isTypeSupported(s));return a?{mimeType:a}:void 0}async function Fh(e){const o=document.createElement("video");return o.muted=!0,o.playsInline=!0,o.srcObject=e,await new Promise((a,s)=>{o.onloadedmetadata=()=>a(),o.onerror=()=>s(new Error("No se pudo iniciar la cámara."))}),await o.play(),o}function $l(e,o,a,s,n,r,i){e.fillStyle="#22221c",e.fillRect(0,0,vs,hs),e.drawImage(o,0,a,s,n,0,0,vs,hs),r&&r.readyState>=r.HAVE_CURRENT_DATA&&wh(e,r,i||"rgba(244, 239, 228, 0.92)")}function wh(e,o,a){const s=mr/2,n=vs-Dl-s,r=hs-Dl-s,i=o.videoWidth||1,t=o.videoHeight||1,l=Math.max(mr/i,mr/t),u=i*l,c=t*l;e.save(),e.beginPath(),e.arc(n,r,s,0,Math.PI*2),e.closePath(),e.clip(),e.translate(n,r),e.scale(-1,1),e.drawImage(o,-u/2,-c/2,u,c),e.restore(),e.save(),e.beginPath(),e.arc(n,r,s-Rl/2,0,Math.PI*2),e.lineWidth=Rl,e.strokeStyle=a,e.stroke(),e.restore()}async function kh(e,o){const{default:a}=await $n(async()=>{const{default:t}=await import("./html2canvas-pro.esm-8GDqt-58.js");return{default:t}},[],import.meta.url),s=e.cloneNode(!0);s.querySelectorAll(".reader-inline-controls").forEach(t=>t.remove()),s.querySelectorAll(".reader-header > svg").forEach(t=>t.remove()),s.style.border="0",s.style.borderRadius="0",s.style.boxShadow="none",s.style.margin="0",s.style.overflow="visible",s.style.width=`${o.width}px`,s.style.minHeight=`${o.contentHeight}px`;const n=document.createElement("div");n.className="app",n.dataset.theme=o.theme,n.style.setProperty("--reader-scale",String(o.readerScale)),n.style.setProperty("--liturgical-color",o.liturgicalColor),n.style.width=`${o.width}px`,n.style.minHeight=`${o.contentHeight}px`,n.style.background="var(--surface)";const r=document.createElement("main");r.className="app-shell is-reader",r.style.maxWidth=`${o.width}px`,r.style.padding="0",r.append(s),n.append(r);const i=document.createElement("div");i.style.position="fixed",i.style.top="0",i.style.left="-99999px",i.style.width=`${o.width}px`,i.style.pointerEvents="none",i.append(n),document.body.append(i);try{return await a(n,{width:o.width,height:o.contentHeight,windowWidth:o.width,backgroundColor:null,useCORS:!0,scale:1})}finally{i.remove()}}/*! Capacitor: https://capacitorjs.com/ - MIT License */var za;(function(e){e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE"})(za||(za={}));class pr extends Error{constructor(o,a,s){super(o),this.message=o,this.code=a,this.data=s}}const Bh=e=>{var o,a;return e?.androidBridge?"android":!((a=(o=e?.webkit)===null||o===void 0?void 0:o.messageHandlers)===null||a===void 0)&&a.bridge?"ios":"web"},Yh=e=>{const o=e.CapacitorCustomPlatform||null,a=e.Capacitor||{},s=a.Plugins=a.Plugins||{},n=()=>o!==null?o.name:Bh(e),r=()=>n()!=="web",i=m=>{const f=u.get(m);return!!(f?.platforms.has(n())||t(m))},t=m=>{var f;return(f=a.PluginHeaders)===null||f===void 0?void 0:f.find(h=>h.name===m)},l=m=>e.console.error(m),u=new Map,c=(m,f={})=>{const h=u.get(m);if(h)return console.warn(`Capacitor plugin "${m}" already registered. Cannot register plugins twice.`),h.proxy;const C=n(),O=t(m);let J;const H=async()=>(!J&&C in f?J=typeof f[C]=="function"?J=await f[C]():J=f[C]:o!==null&&!J&&"web"in f&&(J=typeof f.web=="function"?J=await f.web():J=f.web),J),z=(re,ae)=>{var pe,qe;if(O){const ie=O?.methods.find(te=>ae===te.name);if(ie)return ie.rtype==="promise"?te=>a.nativePromise(m,ae.toString(),te):(te,go)=>a.nativeCallback(m,ae.toString(),te,go);if(re)return(pe=re[ae])===null||pe===void 0?void 0:pe.bind(re)}else{if(re)return(qe=re[ae])===null||qe===void 0?void 0:qe.bind(re);throw new pr(`"${m}" plugin is not implemented on ${C}`,za.Unimplemented)}},_=re=>{let ae;const pe=(...qe)=>{const ie=H().then(te=>{const go=z(te,re);if(go){const Re=go(...qe);return ae=Re?.remove,Re}else throw new pr(`"${m}.${re}()" is not implemented on ${C}`,za.Unimplemented)});return re==="addListener"&&(ie.remove=async()=>ae()),ie};return pe.toString=()=>`${re.toString()}() { [capacitor code] }`,Object.defineProperty(pe,"name",{value:re,writable:!1,configurable:!1}),pe},L=_("addListener"),j=_("removeListener"),X=(re,ae)=>{const pe=L({eventName:re},ae),qe=async()=>{const te=await pe;j({eventName:re,callbackId:te},ae)},ie=new Promise(te=>pe.then(()=>te({remove:qe})));return ie.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await qe()},ie},me=new Proxy({},{get(re,ae){switch(ae){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return O?X:L;case"removeListener":return j;default:return _(ae)}}});return s[m]=me,u.set(m,{name:m,proxy:me,platforms:new Set([...Object.keys(f),...O?[C]:[]])}),me};return a.convertFileSrc||(a.convertFileSrc=m=>m),a.getPlatform=n,a.handleError=l,a.isNativePlatform=r,a.isPluginAvailable=i,a.registerPlugin=c,a.Exception=pr,a.DEBUG=!!a.DEBUG,a.isLoggingEnabled=!!a.isLoggingEnabled,a},Gh=e=>e.Capacitor=Yh(e),Es=Gh(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Nn=Es.registerPlugin;class Ri{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(o,a){let s=!1;this.listeners[o]||(this.listeners[o]=[],s=!0),this.listeners[o].push(a);const r=this.windowListeners[o];r&&!r.registered&&this.addWindowListener(r),s&&this.sendRetainedArgumentsForEvent(o);const i=async()=>this.removeListener(o,a);return Promise.resolve({remove:i})}async removeAllListeners(){this.listeners={};for(const o in this.windowListeners)this.removeWindowListener(this.windowListeners[o]);this.windowListeners={}}notifyListeners(o,a,s){const n=this.listeners[o];if(!n){if(s){let r=this.retainedEventArguments[o];r||(r=[]),r.push(a),this.retainedEventArguments[o]=r}return}n.forEach(r=>r(a))}hasListeners(o){var a;return!!(!((a=this.listeners[o])===null||a===void 0)&&a.length)}registerWindowListener(o,a){this.windowListeners[a]={registered:!1,windowEventName:o,pluginEventName:a,handler:s=>{this.notifyListeners(a,s)}}}unimplemented(o="not implemented"){return new Es.Exception(o,za.Unimplemented)}unavailable(o="not available"){return new Es.Exception(o,za.Unavailable)}async removeListener(o,a){const s=this.listeners[o];if(!s)return;const n=s.indexOf(a);this.listeners[o].splice(n,1),this.listeners[o].length||this.removeWindowListener(this.windowListeners[o])}addWindowListener(o){window.addEventListener(o.windowEventName,o.handler),o.registered=!0}removeWindowListener(o){o&&(window.removeEventListener(o.windowEventName,o.handler),o.registered=!1)}sendRetainedArgumentsForEvent(o){const a=this.retainedEventArguments[o];a&&(delete this.retainedEventArguments[o],a.forEach(s=>{this.notifyListeners(o,s)}))}}const Tl=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Ll=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class Qh extends Ri{async getCookies(){const o=document.cookie,a={};return o.split(";").forEach(s=>{if(s.length<=0)return;let[n,r]=s.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");n=Ll(n).trim(),r=Ll(r).trim(),a[n]=r}),a}async setCookie(o){try{const a=Tl(o.key),s=Tl(o.value),n=o.expires?`; expires=${o.expires.replace("expires=","")}`:"",r=(o.path||"/").replace("path=",""),i=o.url!=null&&o.url.length>0?`domain=${o.url}`:"";document.cookie=`${a}=${s||""}${n}; path=${r}; ${i};`}catch(a){return Promise.reject(a)}}async deleteCookie(o){try{document.cookie=`${o.key}=; Max-Age=0`}catch(a){return Promise.reject(a)}}async clearCookies(){try{const o=document.cookie.split(";")||[];for(const a of o)document.cookie=a.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(o){return Promise.reject(o)}}async clearAllCookies(){try{await this.clearCookies()}catch(o){return Promise.reject(o)}}}Nn("CapacitorCookies",{web:()=>new Qh});const Wh=async e=>new Promise((o,a)=>{const s=new FileReader;s.onload=()=>{const n=s.result;o(n.indexOf(",")>=0?n.split(",")[1]:n)},s.onerror=n=>a(n),s.readAsDataURL(e)}),Kh=(e={})=>{const o=Object.keys(e);return Object.keys(e).map(n=>n.toLocaleLowerCase()).reduce((n,r,i)=>(n[r]=e[o[i]],n),{})},Xh=(e,o=!0)=>e?Object.entries(e).reduce((s,n)=>{const[r,i]=n;let t,l;return Array.isArray(i)?(l="",i.forEach(u=>{t=o?encodeURIComponent(u):u,l+=`${r}=${t}&`}),l.slice(0,-1)):(t=o?encodeURIComponent(i):i,l=`${r}=${t}`),`${s}&${l}`},"").substr(1):null,Zh=(e,o={})=>{const a=Object.assign({method:e.method||"GET",headers:e.headers},o),n=Kh(e.headers)["content-type"]||"";if(typeof e.data=="string")a.body=e.data;else if(n.includes("application/x-www-form-urlencoded")){const r=new URLSearchParams;for(const[i,t]of Object.entries(e.data||{}))r.set(i,t);a.body=r.toString()}else if(n.includes("multipart/form-data")||e.data instanceof FormData){const r=new FormData;if(e.data instanceof FormData)e.data.forEach((t,l)=>{r.append(l,t)});else for(const t of Object.keys(e.data))r.append(t,e.data[t]);a.body=r;const i=new Headers(a.headers);i.delete("content-type"),a.headers=i}else(n.includes("application/json")||typeof e.data=="object")&&(a.body=JSON.stringify(e.data));return a};class eE extends Ri{async request(o){const a=Zh(o,o.webFetchExtra),s=Xh(o.params,o.shouldEncodeUrlParams),n=s?`${o.url}?${s}`:o.url,r=await fetch(n,a),i=r.headers.get("content-type")||"";let{responseType:t="text"}=r.ok?o:{};i.includes("application/json")&&(t="json");let l,u;switch(t){case"arraybuffer":case"blob":u=await r.blob(),l=await Wh(u);break;case"json":l=await r.json();break;case"document":case"text":default:l=await r.text()}const c={};return r.headers.forEach((m,f)=>{c[f]=m}),{data:l,headers:c,status:r.status,url:r.url}}async get(o){return this.request(Object.assign(Object.assign({},o),{method:"GET"}))}async post(o){return this.request(Object.assign(Object.assign({},o),{method:"POST"}))}async put(o){return this.request(Object.assign(Object.assign({},o),{method:"PUT"}))}async patch(o){return this.request(Object.assign(Object.assign({},o),{method:"PATCH"}))}async delete(o){return this.request(Object.assign(Object.assign({},o),{method:"DELETE"}))}}Nn("CapacitorHttp",{web:()=>new eE});var Ml;(function(e){e.Dark="DARK",e.Light="LIGHT",e.Default="DEFAULT"})(Ml||(Ml={}));var Nl;(function(e){e.StatusBar="StatusBar",e.NavigationBar="NavigationBar"})(Nl||(Nl={}));class oE extends Ri{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}Nn("SystemBars",{web:()=>new oE});const hd=Nn("ScreenRecorder");function aE(){return Es.isNativePlatform()&&Es.isPluginAvailable("ScreenRecorder")}async function sE(){await hd.start({recordAudio:!0,format:"mp4"})}async function nE(){await hd.stop()}const _l=[{source:"spain",title:"Misa Crismal",aliases:["Misa Crismal","Jueves Santo Misa Crismal"],fields:{entranceAntiphon:"Jesucristo nos ha convertido en un reino, y hecho sacerdotes de Dios, su Padre. A él la gloria y el poder por los siglos de los siglos. Amén.",collect:"Oh Dios, que por la unción del Espíritu Santo constituiste a tu Hijo Mesías y Señor, y a nosotros, miembros de su cuerpo, nos haces partícipes de su misma unción; ayúdanos a ser en el mundo testigos fieles de la redención que ofreces a todos los hombres. Por nuestro Señor Jesucristo.",offerings:"Te pedimos, Señor, que la eficacia de este sacrificio nos purifique del antiguo pecado, acreciente en nosotros la vida nueva y nos otorgue la plena salvación. Por Jesucristo, nuestro Señor.",communionAntiphon:"Cantaré eternamente las misericordias del Señor, anunciaré tu fidelidad por todas las edades.",postCommunion:"Concédenos, Dios todopoderoso, que quienes han participado en tus sacramentos sean en el mundo buen olor de Cristo. Que vive y reina."}},{source:"icergua",title:"Misa vespertina de la Cena del Señor",aliases:["Jueves de Semana Santa","Jueves Santo","Misa vespertina de la Cena del Señor","Cena del Señor"],fields:{entranceAntiphon:"Debemos gloriarnos en la cruz de nuestro Señor Jesucristo: en él está nuestra salvación, vida y resurrección; él nos ha salvado y liberado.",collect:"Dios nuestro, que nos has reunido para celebrar aquella Cena en la cual tu Hijo único, antes de entregarse a la muerte, confió a la Iglesia el sacrificio nuevo y eterno, sacramento de su amor, concédenos alcanzar por la participación en este sacramento, la plenitud del amor y de la vida. Por nuestro Señor Jesucristo, tu Hijo, que siendo Dios vive y reina contigo, en la unidad del Espíritu Santo, por los siglos de los siglos.",offerings:"Concédenos, Señor, participar dignamente en esta Eucaristía, porque cada vez que celebramos el memorial de la muerte de tu Hijo, se realiza la obra de nuestra redención. Por Jesucristo, nuestro Señor.",communionAntiphon:"Esto es mi cuerpo, que se entrega por vosotros; este cáliz es la nueva alianza en mi sangre; haced esto cada vez que lo toméis en memoria mía.",postCommunion:"Señor, tú que nos permites disfrutar en esta vida de la Cena instituida por tu Hijo, concédenos participar también del banquete celestial en tu Reino. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"Misa Crismal",aliases:["Misa Crismal","Jueves Santo Misa Crismal"],fields:{collect:"Oh Dios, que por la unción del Espíritu Santo constituiste a tu Hijo Mesías y Señor y, a nosotros, miembros de su cuerpo, nos haces partícipes de su misma unción; ayúdanos a ser en el mundo testigos fieles de la redención que, por el misterio de la cruz, realizaste para toda la humanidad. Por nuestro Señor Jesucristo.",offerings:"Te pedimos, Señor, que la eficacia de este sacrificio nos purifique del antiguo pecado, acreciente en nosotros la vida nueva y nos otorgue la plena salvación. Por Jesucristo, nuestro Señor.",postCommunion:"Concédenos, Dios todopoderoso, que quienes hemos participado en tus sacramentos manifestemos en el mundo la presencia de Jesucristo. Que vive y reina."}},{source:"icergua",title:"Santos Basilio y Gregorio, obispos",aliases:["Santos Basilio y Gregorio, obispos","Santos Basilio Magno y Gregorio Nacianceno, obispos y doctores de la Iglesia","Basilio Magno y Gregorio Nacianceno","San Basilio Magno y San Gregorio Nacianceno","Basil the Great and Gregory Nazianzen","Basil and Gregory, bishops"],fields:{collect:"Señor y Dios nuestro, que concediste a tus obispos Basilio Magno y Gregorio Nacianceno ser agregados al número de los santos pastores por su ardiente caridad y su fe insigne; concédenos, por su intercesión, perseverar en el amor y en la fe, para participar de tu gloria. Por nuestro Señor Jesucristo.",offerings:"Acepta, Señor, las ofrendas que te presentamos para esta Eucaristía en la que recordamos la memoria de los santos Basilio y Gregorio, a fin de que, al ofrecerte tus propios dones, podamos recibirte a ti mismo. Por Jesucristo, nuestro Señor.",postCommunion:"Concédenos, Dios todopoderoso, que la gracia de estos sacramentos fortalezca cada día más nuestra vida cristiana, para que seamos auténticos discípulos de tu Hijo Jesucristo, como lo fueron los santos padres Basilio y Gregorio. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"San Antonio Abad",aliases:["San Antonio Abad","San Antonio de Egipto, abad","San Antonio de Egipto","Antonio de Egipto","Antonio, abad","Anthony, abbot","Anthony of Egypt","Anthony the Abbot"],fields:{collect:"Dios nuestro, que concediste a san Antonio, abad, dejar por tu amor cuanto tenía, para servirte heroicamente en el desierto, otórganos, por tu gracia, superar nuestro egoísmo y amarte a ti sobre todas las cosas. Por nuestro Señor Jesucristo.",offerings:"Acepta, Señor, estos dones que humildemente te presentamos en la conmemoración de san Antonio, abad, y líbranos de nuestro apego a los bienes materiales para que te tengamos a ti como nuestra única riqueza. Por Jesucristo, nuestro Señor.",postCommunion:"Por medio de esta Eucaristía concédenos, Señor, la fuerza necesaria para vencer siempre, a ejemplo de san Antonio, abad, las tentaciones del enemigo. Por Jesucristo, nuestro Señor."}},{source:"icergua",title:"Vigilia Pascual",aliases:["Sábado Santo","Sabado Santo","Vigilia Pascual","En la noche santa"],fields:{collect:"Dios nuestro, que haces resplandecer esta noche santa con la gloria del Señor resucitado, aviva en tu Iglesia el espíritu filial, para que, renovados en cuerpo y espíritu, nos entreguemos plenamente a tu servicio. Por nuestro Señor Jesucristo.",offerings:"Acepta, Señor, los dones que te presentamos y concédenos que el memorial de la muerte y resurrección de Jesucristo, que estamos celebrando, nos obtenga la fuerza para participar de la vida eterna. Por Jesucristo, nuestro Señor.",communionAntiphon:"Cristo, nuestra Pascua, ha sido inmolado. Aleluya.",postCommunion:"Infúndenos, Señor, tu espíritu de caridad para que vivamos siempre unidos en tu amor los que hemos participado en este sacramento de la muerte y resurrección de Jesucristo, que vive y reina por los siglos de los siglos."}},{source:"mercaba",title:"3 de enero",aliases:["3 de enero"],fields:{entranceAntiphon:"DIOS ENVIÓ A SU HIJO, NACIDO DE UNA MUJER, PARA HACERNOS HIJOS ADOPTIVOS. (GAL. 4,4-5)",collect:"Dios todopoderoso y eterno, por la venida de tu Hijo único has hecho resplandecer una nueva luz; concédenos que, así como Jesucristo, al nacer de la Virgen María, ha querido compartir nuestra condición humana, también nosotros lleguemos a compartir en su Reino la gloria de su divinidad. Por nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Tú eres, Padre, la fuente del amor sincero y de la paz. Con estas ofrendas que te presentamos concédenos glorificar tu nombre, y por la participación en la Eucaristía fortalece los lazos que nos unen. Te lo pedimos por Jesucristo, nuestro Señor.",communionAntiphon:"DE SU PLENITUD, TODOS HEMOS RECIBIDO GRACIA TRAS GRACIA. (JN. 1,16)",postCommunion:"Padre providente, que tu pueblo tantas veces ayudado por ti a lo largo de este año que termina, pueda recibir hoy y siempre los dones de tu amor, para que fortalecido por los bienes transitorios busque con mayor confianza los bienes eternos. Por Jesucristo, nuestro Señor."}},{source:"mercaba",title:"5 de enero",aliases:["5 de enero"],fields:{entranceAntiphon:"EL DÍA SANTO BRILLÓ PARA NOSOTROS. VENGAN, PUEBLOS, Y ADOREN AL SEÑOR, PORQUE UNA GRAN LUZ DESCENDIÓ SOBRE LA TIERRA.",collect:"Señor Dios, proclamamos que tu Hijo único, eterno como tú en la gloria, nació de la Virgen Madre como hombre verdadero. Aumenta nuestra fe, líbranos de los males presentes y danos los gozos eternos. Por nuestro Señor Jesucristo, tu Hijo que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"En este misterioso encuentro entre tu grandeza y nuestra pobreza, acepta, Señor Dios, nuestros dones, para que al ofrecerte lo que nos diste merezcamos recibirte a ti mismo. Por Jesucristo, nuestro Señor.",communionAntiphon:"NOSOTROS HEMOS VISTO SU GLORIA, LA GLORIA QUE RECIBE DEL PADRE COMO HIJO ÚNICO, LLENO DE GRACIA Y DE VERDAD. (JN. 1,14)",postCommunion:"Concédenos, Dios todopoderoso, que la comunión de los santos misterios fortalezca constantemente nuestra vida. Por Jesucristo, nuestro Señor."}},{source:"mercaba",title:"Miércoles de Ceniza",aliases:["Miércoles de Ceniza","MIERCOLES DE CENIZA"],fields:{entranceAntiphon:"SEÑOR, TÚ ERES MISERICORDIOSO CON TODOS Y NO ABORRECES NADA DE LO QUE HAS HECHO, CIERRAS LOS OJOS A LOS PECADOS DE LOS HOMBRES PARA QUE SE ARREPIENTAN Y LOS PERDONAS PORQUE TÚ ERES EL SEÑOR, NUESTRO DIOS. (CFR. SAB. 11,24.26)",collect:"Señor y Dios nuestro, concédenos la gracia de iniciar con el santo ayuno cuaresmal un camino de verdadera conversión, y afrontar con la penitencia la lucha contra el espíritu del mal. Por nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.",offerings:"Al ofrecerte el sacrificio con el que iniciamos solemnemente la Cuaresma, te pedimos, Padre, que por las obras de penitencia y caridad, dominemos nuestras pasiones y, limpios de pecado, podamos celebrar con fervor la Pascua de tu Hijo, que vive y reina por los siglos de los siglos.",communionAntiphon:"QUIEN MEDITA EN LA LEY DEL SEÑOR DÍA Y NOCHE, DARÁ SU FRUTO EN EL TIEMPO OPORTUNO. (CFR. SAL. 1,2-3)",postCommunion:"Fortalécenos, Señor Dios, con los sacramentos recibidos para que nuestro ayuno sea agradable a tus ojos y cure todos nuestros males. Por Jesucristo, nuestro Señor."}},{source:"mercaba",title:"Viernes de la 4ª semana de Cuaresma",aliases:["Viernes de la 4ª semana de Cuaresma","VIERNES DE LA IV SEMANA","VIERNES DE LA IV SEMANA DE CUARESMA"],fields:{entranceAntiphon:"DIOS MÍO, SÁLVAME POR TU NOMBRE, DEFIÉNDEME CON TU PODER. DIOS MÍO, ESCUCHA MI SÚPLICA, PRESTA ATENCIÓN A LAS PALABRAS DE MI BOCA. (SAL. 53,3-4)",collect:"Señor Dios, que has preparado remedios adecuados para nuestra fragilidad, concédenos experimentar tu salvación con alegría y manifestarla con una vida santa. Te lo pedimos por nuestro Señor Jesucristo, tu Hijo que es Dios, y contigo y el Espíritu Santo vive y reina en unidad por los siglos de los siglos.",offerings:"Purificados por tu inmenso poder, te pedimos, Dios todopoderoso, que este sacrificio que celebramos nos haga llegar interiormente limpios hasta ti. Por Jesucristo nuestro Señor.",communionAntiphon:"EN CRISTO HEMOS SIDO REDIMIDOS POR SU SANGRE Y HEMOS RECIBIDO EL PERDÓN DE LOS PECADOS, SEGÚN LA RIQUEZA DE SU GRACIA. (EF. 1,7)",postCommunion:"Así como en la vida nos renovamos constantemente, concédenos, Padre, que renunciando al pecado, renovemos nuestro corazón con tu gracia. Por Jesucristo nuestro Señor."}},{source:"textosliturgia",title:"San Isidro Labrador",aliases:["San Isidro Labrador","San Isidro, labrador","Isidro Labrador"],fields:{entranceAntiphon:"El labrador aguarda paciente el fruto precioso de la tierra, esperando con paciencia hasta que recibe la lluvia temprana y la tardía. [T. P. Aleluya.]",collect:"Señor, Dios nuestro, que en la humildad y sencillez de san Isidro labrador, nos dejaste un ejemplo de vida escondida en ti, con Cristo, concédenos que el trabajo de cada día humanice nuestro mundo y sea al mismo tiempo plegaria de alabanza a tu nombre. Por nuestro Señor Jesucristo.",offerings:"Acepta y santifica, Señor, estos dones de pan y de vino, fruto de la tierra que cultivó san Isidro labrador, regándola con el sudor de su frente. Por Jesucristo, nuestro Señor.",communionAntiphon:`Oró, y el cielo dio la lluvia y la tierra produjo su fruto. [T. P. Aleluya.]

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
permanece en mí y yo en él, dice el Señor.`,postCommunion:"La comunión de tu Cuerpo y Sangre, Señor, signo del banquete del reino, que hemos gustado en esta celebración, nos llene del gozo eterno de tu divinidad. Tú que vives y reinas por los siglos de los siglos."}}];function Ds(e){const o={i:"1",ii:"2",iii:"3",iv:"4",v:"5",vi:"6",vii:"7",viii:"8",ix:"9",x:"10",xi:"11",xii:"12",xiii:"13",xiv:"14",xv:"15",xvi:"16",xvii:"17",xviii:"18",xix:"19",xx:"20",xxi:"21",xxii:"22",xxiii:"23",xxiv:"24",xxv:"25",xxvi:"26",xxvii:"27",xxviii:"28",xxix:"29",xxx:"30",xxxi:"31",xxxii:"32",xxxiii:"33",xxxiv:"34"};return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim().split(/\s+/).map(a=>o[a]??a).join(" ")}function rE(e){const a=Ds(e??"").match(/\b(?:lunes|martes|miercoles|jueves|viernes|sabado)\b.*\b(\d{1,2})\b.*\bsemana\b.*\btiempo\b.*\bordinario\b/);if(!a)return"";const s=a[1];return`ordinary time ${s} sunday ${s} domingo del tiempo ordinario`}function iE(e){if(!e.date)return"";const o=Ds(e.celebration??"");return/^\d{1,2} de enero$/.test(o)?`${["domingo","lunes","martes","miercoles","jueves","viernes","sabado"][e.date.getDay()]} del tiempo de navidad`:""}function tE(e){if(!e.date)return"";const o=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];return`${e.date.getDate()} de ${o[e.date.getMonth()]}`}function lE(e){const o=Ds(e??"");return!o||/\b(?:christ|jesus|lord|god)\b/.test(o)?"":[[/\bsaints?\b/,"santo santa santos santas"],[/\bmartyrs?\b/,"martir martires"],[/\bbishops?\b/,"obispo"],[/\bpopes?\b/,"papa"],[/\bpriests?\b|\bpresbyters?\b/,"presbitero"],[/\bvirgins?\b/,"virgen"],[/\breligious\b/,"religioso religiosa"],[/\babbots?\b/,"abad"],[/\babbesses?\b/,"abadesa"],[/\bmonks?\b/,"monje"],[/\bnuns?\b/,"monja"]].filter(([s])=>s.test(o)).map(([,s])=>s).join(" ")}function cE(e){return Ds([e.celebration,tE(e),lE(e.celebration),rE(e.celebration),iE(e),e.rank,...e.seasons??[]].filter(Boolean).join(" "))}function uE(e,o){const a=cE(o);if(!a)return[];const s=Math.max(..._l.filter(i=>!i.title.startsWith("Común")&&i.fields[e]).map(i=>Fs(i,a)),0),n=_l.filter(i=>{if(!i.fields[e])return!1;const t=Fs(i,a);return t?i.title.startsWith("Común")||!s||t>=s:!1}),r=n.filter(i=>!i.title.startsWith("Común"));return(r.length?r:n).sort((i,t)=>Fs(t,a)-Fs(i,a))}function Fs(e,o){return Math.max(...e.aliases.map(a=>{const s=Ds(a);return s?o.includes(s)?s.length:s.includes(o)?o.length:0:0}),0)}const dE=`$Todos.$ Gloria a Dios en el cielo,
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
Amén.`,mE=`$Todos.$ Creo en un solo Dios,
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
Amén.`,pE=`$Todos.$ Creo en Dios, Padre todopoderoso,
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
Amén.`,fE=`$Todos.$ Santo, Santo, Santo es el Señor,
Dios del universo.
Llenos están el cielo y la tierra de tu gloria.
Hosanna en el cielo.
Bendito el que viene en nombre del Señor.
Hosanna en el cielo.`,gE=`$Sacerdote.$ Líbranos de todos los males, Señor,
y concédenos la paz en nuestros días,
para que, ayudados por tu misericordia,
vivamos siempre libres de pecado
y protegidos de toda perturbación,
mientras esperamos la gloriosa venida
de nuestro Salvador Jesucristo.

$Pueblo.$ Tuyo es el reino,
tuyo el poder y la gloria,
por siempre, Señor.`,SE=`$Sacerdote.$ Señor Jesucristo, que dijiste a tus apóstoles:
"La paz os dejo, mi paz os doy";
no tengas en cuenta nuestros pecados,
sino la fe de tu Iglesia
y, conforme a tu palabra,
concédele la paz y la unidad.
Tú que vives y reinas por los siglos de los siglos.

$Pueblo.$ Amén.

$Sacerdote.$ La paz del Señor esté siempre con vosotros.

$Pueblo.$ Y con tu espíritu.

$Sacerdote/diácono.$ Daos fraternalmente la paz.`,bE=`$Sacerdote.$ Señor Jesucristo, Hijo de Dios vivo,
que, por voluntad del Padre,
cooperando el Espíritu Santo,
diste con tu muerte la vida al mundo:
líbrame, por la recepción de tu Cuerpo y de tu Sangre,
de todas mis culpas y de todo mal.
Concédeme cumplir siempre tus mandamientos
y jamás permitas que me separe de ti.`,yE=`$Sacerdote.$ Señor Jesucristo,
la comunión de tu Cuerpo y de tu Sangre
no sea para mí un motivo de juicio y condenación,
sino que, por tu piedad,
me aproveche para defensa de alma y cuerpo
y como remedio saludable.`,vE=`$Sacerdote.$ Bendito seas, Señor, Dios del universo, por este pan, fruto de la tierra y del trabajo del hombre, que recibimos de tu generosidad y ahora te presentamos; él será para nosotros pan de vida.

$Pueblo.$ Bendito seas por siempre, Señor.

$Sacerdote.$ El agua unida al vino sea signo de nuestra participación en la vida divina de quien ha querido compartir nuestra condición humana.

$Sacerdote.$ Bendito seas, Señor, Dios del universo, por este vino, fruto de la vid y del trabajo del hombre, que recibimos de tu generosidad y ahora te presentamos; él será para nosotros bebida de salvación.

$Pueblo.$ Bendito seas por siempre, Señor.

$Sacerdote.$ Acepta, Señor, nuestro corazón contrito y nuestro espíritu humilde; que este sea hoy nuestro sacrificio y que sea agradable en tu presencia, Señor, Dios nuestro.

$Sacerdote.$ Lava del todo mi delito, Señor, limpia mi pecado.`,hE=`$Rúbrica.$ Mientras se canta el canto de ofertorio, el sacerdote puede decir en secreto las fórmulas de bendición del pan y del vino.

$Sacerdote, en secreto.$ Bendito seas, Señor, Dios del universo, por este pan, fruto de la tierra y del trabajo del hombre, que recibimos de tu generosidad y ahora te presentamos; él será para nosotros pan de vida.

$Sacerdote, en secreto.$ El agua unida al vino sea signo de nuestra participación en la vida divina de quien ha querido compartir nuestra condición humana.

$Sacerdote, en secreto.$ Bendito seas, Señor, Dios del universo, por este vino, fruto de la vid y del trabajo del hombre, que recibimos de tu generosidad y ahora te presentamos; él será para nosotros bebida de salvación.

$Sacerdote, en secreto.$ Acepta, Señor, nuestro corazón contrito y nuestro espíritu humilde; que este sea hoy nuestro sacrificio y que sea agradable en tu presencia, Señor, Dios nuestro.

$Sacerdote, en secreto.$ Lava del todo mi delito, Señor, limpia mi pecado.`,fr="$Pueblo.$ El Señor reciba de tus manos este sacrificio, para alabanza y gloria de su nombre, para nuestro bien y el de toda su santa Iglesia.",EE=`$Sacerdote.$ ¿Creéis en Dios, Padre todopoderoso, Creador del cielo y de la tierra?

$Pueblo.$ Sí, creo.

$Sacerdote.$ ¿Creéis en Jesucristo, su único Hijo, nuestro Señor, que nació de santa María Virgen, murió, fue sepultado, resucitó de entre los muertos y está sentado a la derecha del Padre?

$Pueblo.$ Sí, creo.

$Sacerdote.$ ¿Creéis en el Espíritu Santo, en la santa Iglesia católica, en la comunión de los santos, en el perdón de los pecados, en la resurrección de los muertos y en la vida eterna?

$Pueblo.$ Sí, creo.

$Sacerdote.$ Esta es nuestra fe. Esta es la fe de la Iglesia, que nos gloriamos de profesar en Cristo Jesús, Señor nuestro.`,AE=`$Sacerdote.$ En verdad es justo y necesario,
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
cantamos sin cesar el himno de tu gloria.`,PE=`$Sacerdote.$ En verdad es justo y necesario,
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
cantamos tu gloria gozosos proclamando.`,qE=`$Sacerdote.$ En verdad es justo y necesario,
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
te aclamamos llenos de alegría.`,IE=`$Sacerdote.$ En verdad es justo darte gracias,
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
cantamos con gozo el himno de tu gloria.`,CE=`$Sacerdote.$ En verdad es justo darte gracias,
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
cantamos a una voz el himno de tu gloria.`,OE=`$Sacerdote.$ En verdad es justo y necesario,
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
cantamos con alegría el himno de tu alabanza.`,zl=`$Sacerdote.$ En verdad es justo y necesario,
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
cantando tu gloria.`,Jl=`$Sacerdote.$ En verdad es justo y necesario,
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
proclamando sin cesar.`,jl=`$Sacerdote.$ En verdad es justo darte gracias
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
canta el himno de tu gloria.`,Ul=`$Sacerdote.$ En verdad es justo darte gracias,
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
cantamos el himno de tu gloria.`,Hl=`$Sacerdote.$ En verdad es justo y necesario,
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
cantando llenos de alegría.`,xl=`$Sacerdote.$ En verdad es justo y necesario,
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
cantamos con gozo el himno de tu alabanza.`,Vl=`$Sacerdote.$ En verdad es justo y necesario,
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
cantamos sin cesar el himno de tu gloria.`,Fl=`$Sacerdote.$ En verdad es justo y necesario,
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
cantamos sin cesar el himno de tu gloria.`,wl=`$Sacerdote.$ En verdad es justo y necesario,
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
cantando jubilosos tu alabanza.`,kl=`$Sacerdote.$ En verdad es justo y necesario,
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
cantando humildemente tu alabanza.`,Bl=`$Sacerdote.$ En verdad es justo y necesario,
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
te aclamamos diciendo sin cesar.`,Yl=`$Sacerdote.$ En verdad es justo darte gracias
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
diciendo sin cesar.`,DE=`$Sacerdote.$ En verdad es justo y necesario,
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
cantamos sin cesar el himno de tu gloria.`,Gl=`$Sacerdote.$ En verdad es justo y necesario,
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
diciendo con humilde fe.`,RE=`$Sacerdote.$ En verdad es justo darte gracias
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
proclamando sin cesar.`,Ql=`$Sacerdote.$ En verdad es justo y necesario,
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
diciendo.`,$E=`$Sacerdote.$ En verdad es justo y necesario,
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
te aclamamos, cantando sin cesar.`,Wl=`$Sacerdote.$ En verdad es justo y necesario,
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
proclamamos tu gloria diciendo.`,TE=`$Sacerdote.$ En verdad es justo y necesario,
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
proclamando sin cesar.`,LE=`$Sacerdote.$ En verdad es justo y necesario
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
te alabamos, cantando sin cesar.`,ME=`$Sacerdote.$ En verdad es justo y necesario,
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
cantamos sin cesar el himno de tu gloria.`,NE=`$Sacerdote.$ En verdad es justo y necesario,
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
te aclamamos por siempre, cantando.`,_E=`$Sacerdote.$ En verdad es justo y necesario,
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
cantamos sin cesar el himno de tu gloria.`,zE=`$Sacerdote.$ En verdad es justo y necesario,
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
cantamos sin cesar el himno de tu gloria.`,JE=`$Sacerdote.$ En verdad es justo y necesario,
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
cantamos sin cesar el himno de tu gloria.`,jE=`$Sacerdote.$ En verdad es justo y necesario,
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
te aclamamos llenos de alegría.`,Kl=`$Sacerdote.$ En verdad es justo y necesario,
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
te aclamamos llenos de alegría.`,UE=`$Sacerdote.$ En verdad es justo y necesario,
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
cantamos sin cesar el himno de tu gloria.`,HE=`$Sacerdote.$ En verdad es justo y necesario,
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
cantamos sin cesar el himno de tu gloria.`,xE=`$Sacerdote.$ En verdad es justo y necesario,
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
cantamos sin cesar el himno de tu gloria.`,VE=`$Sacerdote.$ En verdad es justo bendecir tu nombre,
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
proclamamos el canto de tu alabanza.`,FE=`$Sacerdote.$ En verdad es justo y necesario,
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
proclamando sin cesar.`,wE=`$Sacerdote.$ En verdad es justo y necesario,
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
cantando tu gloria.`,kE=`$Sacerdote.$ En verdad es justo y necesario,
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
cantando humildemente tu alabanza.`,BE=`$Sacerdote.$ En verdad es justo y necesario,
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
y exultantes de gozo proclamamos tu gloria.`,YE=`$Sacerdote.$ En verdad es justo y necesario,
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
y exultantes de gozo proclamamos tu gloria.`,GE=`$Sacerdote.$ En verdad es justo y necesario,
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
y exultantes de gozo proclamamos tu gloria.`,QE=`$Sacerdote.$ En verdad es justo y necesario,
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
y exultantes de gozo proclamamos tu gloria.`,WE=`$Sacerdote.$ En verdad es justo y necesario,
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
y exultantes de gozo proclamamos tu gloria.`,Xl=`$Sacerdote.$ En verdad es justo y necesario,
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
cantan sin cesar el himno de tu gloria.`,KE=`$Sacerdote.$ En verdad es justo y necesario
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
y exultantes de gozo proclamamos tu gloria.`,Zl=`$Sacerdote.$ En verdad es justo y necesario,
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
cantando sin cesar.`,XE=`$Sacerdote.$ En verdad es justo y necesario,
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
te aclamamos llenos de alegría.`,ZE=`$Sacerdote.$ En verdad es justo y necesario,
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
cantamos sin cesar el himno de tu gloria.`,eA=`$Sacerdote.$ En verdad es justo y necesario,
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
cantamos sin cesar el himno de tu gloria.`,oA=`$Sacerdote.$ En verdad es justo y necesario,
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
cantando humildemente tu alabanza.`,aA=`$Sacerdote.$ En verdad es justo y necesario,
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
te aclamamos llenos de alegría.`,sA=`$Sacerdote.$ En verdad es justo y necesario,
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
proclamando sin cesar.`,nA=`$Sacerdote.$ En verdad es justo y necesario,
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
y proclamamos tu gloria con alegría.`,rA=`$Sacerdote.$ En verdad es justo y necesario,
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
te aclamamos con los ángeles y los santos.`,iA=`$Sacerdote.$ En verdad es justo y necesario,
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
te aclamamos llenos de alegría.`,tA=`$Sacerdote.$ En verdad es justo y necesario,
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
cantando humildemente tu alabanza.`,lA=`$Sacerdote.$ En verdad es justo y necesario,
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
cantando tu alabanza.`,cA=`$Sacerdote.$ En verdad es justo y necesario,
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
cantando tus maravillas.`,uA=`$Sacerdote.$ En verdad es justo y necesario,
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
cantando tus maravillas.`,dA=`$Sacerdote.$ En verdad es justo y necesario,
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
te adoramos llenos de júbilo.`,mA=`$Sacerdote.$ En verdad es justo y necesario,
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
cantando humildemente tu alabanza.`,pA=`$Sacerdote.$ En verdad es justo y necesario,
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
alabando tu gloria sin cesar.`,fA=`$Sacerdote.$ En verdad es justo y necesario,
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
diciendo a una sola voz.`,gA=`$Sacerdote.$ En verdad es justo y necesario,
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
te glorificamos diciendo sin cesar.`,SA=`$Sacerdote.$ En verdad es justo y necesario,
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
cantamos sin cesar el himno de tu gloria.`,$i="$Sacerdote.$ Invoquemos, queridos hermanos, a Dios, Padre todopoderoso, para que bendiga esta agua, que va a ser derramada sobre nosotros en memoria de nuestro bautismo, y pidámosle que nos renueve interiormente, para que permanezcamos fieles al Espíritu que hemos recibido.",Ti=`$Sacerdote.$ Que Dios todopoderoso nos purifique del pecado y, por la celebración de esta eucaristía, nos haga dignos de participar del banquete de su reino.

$Pueblo.$ Amén.`,bA=`${$i}

$Sacerdote.$ Dios todopoderoso y eterno, que, por medio del agua, fuente de vida y medio de purificación, quisiste limpiarnos del pecado y darnos el don de la vida eterna, dígnate bendecir esta agua, para que sea signo de tu protección en este día consagrado a ti, Señor. Por medio de esta agua renueva también en nosotros la fuente viva de tu gracia, y líbranos de todo mal de alma y cuerpo, para que nos acerquemos a ti con el corazón limpio y recibamos dignamente tu salvación. Por Jesucristo, nuestro Señor.

$Pueblo.$ Amén.

$Cantor.$ Rocíame con el hisopo, Señor: quedaré limpio; lávame: quedaré más blanco que la nieve.

${Ti}`,yA=`${$i}

$Sacerdote.$ Dios todopoderoso, fuente y origen de la vida del alma y del cuerpo, bendice esta agua, que vamos a usar con fe para implorar el perdón de nuestros pecados y alcanzar la ayuda de tu gracia contra toda enfermedad y asechanza del enemigo. Concédenos, Señor, por tu misericordia, que las aguas vivas siempre broten salvadoras, para que podamos acercarnos a ti con el corazón limpio y evitemos todo peligro de alma y cuerpo. Por Jesucristo, nuestro Señor.

$Pueblo.$ Amén.

$Cantor.$ Derramaré sobre vosotros un agua pura que os purificará.

${Ti}`,vA=`${$i}

$Sacerdote.$ Señor, Dios todopoderoso, escucha las oraciones de tu pueblo, ahora que recordamos la acción maravillosa de nuestra creación y la maravilla, aún más grande, de nuestra redención; dígnate bendecir esta agua. La creaste para hacer fecunda la tierra y para favorecer nuestros cuerpos con la frescura y la limpieza. La hiciste también instrumento de misericordia al librar a tu pueblo de la esclavitud y al apagar con ella su sed en el desierto; por los profetas la revelaste como signo de la nueva Alianza que quisiste sellar con los hombres. Y, cuando Cristo descendió a ella en el Jordán, renovaste nuestra naturaleza pecadora en el baño del nuevo nacimiento. Que esta agua, Señor, avive en nosotros el recuerdo de nuestro bautismo y nos haga participar en el gozo de nuestros hermanos bautizados en la Pascua. Por Jesucristo, nuestro Señor.

$Pueblo.$ Amén.

$Cantor.$ Vi agua que bajaba por el lado derecho del templo, aleluya; a todo el que llegue esta agua tendrá nueva vida y cantará: aleluya, aleluya.

${Ti}`,Ed=`$Sacerdote.$ Santo eres en verdad, Señor, fuente de toda santidad; por eso te pedimos que santifiques estos dones con la efusión de tu Espíritu, de manera que se conviertan para nosotros en el Cuerpo y la Sangre de Jesucristo, nuestro Señor.

El cual, cuando iba a ser entregado a su Pasión, voluntariamente aceptada, tomó pan, dándote gracias, lo partió y lo dio a sus discípulos, diciendo:

$Sacerdote.$ Tomad y comed todos de él, porque esto es mi Cuerpo, que será entregado por vosotros.

$Sacerdote.$ Del mismo modo, acabada la cena, tomó el cáliz, y, dándote gracias de nuevo, lo pasó a sus discípulos, diciendo:

$Sacerdote.$ Tomad y bebed todos de él, porque este es el cáliz de mi Sangre, Sangre de la alianza nueva y eterna, que será derramada por vosotros y por muchos para el perdón de los pecados. Haced esto en conmemoración mía.`,Ad=`$Sacerdote.$ Así, pues, Padre, al celebrar ahora el memorial de la muerte y resurrección de tu Hijo, te ofrecemos el pan de vida y el cáliz de salvación, y te damos gracias porque nos haces dignos de servirte en tu presencia.

Te pedimos humildemente que el Espíritu Santo congregue en la unidad a cuantos participamos del Cuerpo y Sangre de Cristo.

Acuérdate, Señor, de tu Iglesia extendida por toda la tierra; y con el papa y nuestro obispo, y todos los pastores que cuidan de tu pueblo, llévala a su perfección por la caridad.

Acuérdate también de nuestros hermanos que durmieron en la esperanza de la resurrección, y de todos los que han muerto en tu misericordia; admítelos a contemplar la luz de tu rostro.

Ten misericordia de todos nosotros, y así, con María, la Virgen Madre de Dios, su esposo san José, los apóstoles y cuantos vivieron en tu amistad a través de los tiempos, merezcamos, por tu Hijo Jesucristo, compartir la vida eterna y cantar tus alabanzas.`,hA="El cual, cuando iba a ser entregado a su Pasión, voluntariamente aceptada, tomó pan, dándote gracias, lo partió y lo dio a sus discípulos, diciendo:",EA="El cual, en esta misma noche, cuando iba a ser entregado a su Pasión, voluntariamente aceptada, tomó pan, dándote gracias, lo partió y lo dio a sus discípulos, diciendo:",AA="Acuérdate, Señor, de tu Iglesia extendida por toda la tierra;",PA={sunday:"Acuérdate, Señor, de tu Iglesia extendida por toda la tierra, y reunida aquí en el domingo, día en que Cristo ha vencido a la muerte y nos ha hecho partícipes de su vida inmortal;",christmas:"Acuérdate, Señor, de tu Iglesia extendida por toda la tierra y reunida aquí en el día santo en que la Virgen María dio a luz al Salvador del mundo;",christmasNight:"Acuérdate, Señor, de tu Iglesia extendida por toda la tierra y reunida aquí en la noche santa en que la Virgen María dio a luz al Salvador del mundo;",epiphany:"Acuérdate, Señor, de tu Iglesia extendida por toda la tierra y reunida aquí en el día santo en que tu único Hijo, eterno como tú en la gloria, se manifestó en la realidad de nuestra propia carne;",easter:"Acuérdate, Señor, de tu Iglesia extendida por toda la tierra y reunida aquí en el día santísimo de la resurrección de nuestro Señor Jesucristo;",easterNight:"Acuérdate, Señor, de tu Iglesia extendida por toda la tierra y reunida aquí en la noche santísima de la resurrección de nuestro Señor Jesucristo;",ascension:"Acuérdate, Señor, de tu Iglesia extendida por toda la tierra y reunida aquí en el día glorioso en que Cristo ha sido constituido Señor del cielo y de la tierra;",pentecost:"Acuérdate, Señor, de tu Iglesia extendida por toda la tierra y reunida aquí en el día en que la efusión de tu Espíritu ha hecho de ella sacramento de unidad para todos los pueblos;"},Pd=`$Sacerdote.$ Padre misericordioso, te pedimos humildemente por Jesucristo, tu Hijo, nuestro Señor, que aceptes y bendigas estos + dones, este sacrificio santo y puro que te ofrecemos, ante todo por tu Iglesia santa y católica, para que le concedas la paz, la protejas, la congregues en la unidad y la gobiernes en el mundo entero, con tu servidor el papa, con nuestro obispo, y todos los demás obispos que, fieles a la verdad, promueven la fe católica y apostólica.

Acuérdate, Señor, de aquellos por quienes se ofrece esta Misa.

y de todos los aquí reunidos, cuya fe y entrega bien conoces; por ellos y todos los suyos, por el perdón de sus pecados y la salvación que esperan, te ofrecemos, y ellos mismos te ofrecen, este sacrificio de alabanza a ti, eterno Dios, vivo y verdadero.

Reunidos en comunión con toda la Iglesia, veneramos la memoria, ante todo de la gloriosa siempre Virgen María, Madre de Jesucristo, nuestro Dios y Señor; la de su esposo, San José, la de los santos apóstoles y mártires Pedro y Pablo, Andrés, [Santiago y Juan, Tomás, Santiago, Felipe, Bartolomé, Mateo, Simón y Tadeo; Lino, Clemente, Sixto, Cornelio, Cipriano, Lorenzo, Crisógono, Juan y Pablo, Cosme y Damián,] y la de todos los santos; por sus méritos y oraciones concédenos en todo tu protección. [Por Cristo, nuestro Señor. Amén.]

Acepta, Señor, en tu bondad, esta ofrenda de tus siervos y de toda tu familia santa; ordena en tu paz nuestros días, líbranos de la condenación eterna y cuéntanos entre tus elegidos. [Por Cristo, nuestro Señor. Amén.]

El sacerdote extiende las manos sobre la ofrenda.

Bendice y santifica, oh Padre, esta ofrenda, haciéndola perfecta, espiritual y digna de ti, de manera que sea para nosotros Cuerpo y Sangre de tu Hijo amado, Jesucristo, nuestro Señor.

El cual, la víspera de su Pasión, tomó pan en sus santas y venerables manos, y, elevando los ojos, hacia ti, Dios, Padre suyo todopoderoso, dando gracias te bendijo, lo partió, y lo dio a sus discípulos, diciendo:

TOMAD Y COMED TODOS DE ÉL, PORQUE ESTO ES MI CUERPO, QUE SERÁ ENTREGADO POR VOSOTROS.

Del mismo modo, acabada la cena, tomó este cáliz glorioso en sus santas y venerables manos, dando gracias te bendijo, y lo dio a sus discípulos diciendo:

TOMAD Y BEBED TODOS DE ÉL, PORQUE ÉSTE ES EL CÁLIZ DE MI SANGRE, SANGRE DE LA ALIANZA NUEVA Y ETERNA, QUE SERÁ DERRAMADA POR VOSOTROS Y POR MUCHOS PARA EL PERDÓN DE LOS PECADOS. HACED ESTO EN CONMEMORACIÓN MÍA.`,qA="Reunidos en comunión con toda la Iglesia, veneramos la memoria, ante todo de la gloriosa siempre Virgen María, Madre de Jesucristo, nuestro Dios y Señor; la de su esposo, San José, la de los santos apóstoles y mártires Pedro y Pablo, Andrés, [Santiago y Juan, Tomás, Santiago, Felipe, Bartolomé, Mateo, Simón y Tadeo; Lino, Clemente, Sixto, Cornelio, Cipriano, Lorenzo, Crisógono, Juan y Pablo, Cosme y Damián,] y la de todos los santos; por sus méritos y oraciones concédenos en todo tu protección. [Por Cristo, nuestro Señor. Amén.]",Ho="la de su esposo, San José; la de los santos apóstoles y mártires Pedro y Pablo, Andrés, [Santiago y Juan, Tomás, Santiago, Felipe, Bartolomé, Mateo, Simón y Tadeo; Lino, Cleto, Clemente, Sixto, Cornelio, Cipriano, Lorenzo, Crisógono, Juan y Pablo, Cosme y Damián,] y la de todos los santos; por sus méritos y oraciones concédenos en todo tu protección. [Por Cristo, nuestro Señor. Amén.]",ec="Acepta, Señor, en tu bondad, esta ofrenda de tus siervos y de toda tu familia santa; ordena en tu paz nuestros días, líbranos de la condenación eterna y cuéntanos entre tus elegidos. [Por Cristo, nuestro Señor. Amén.]",oc="El cual, la víspera de su Pasión, tomó pan en sus santas y venerables manos, y, elevando los ojos, hacia ti, Dios, Padre suyo todopoderoso, dando gracias te bendijo, lo partió, y lo dio a sus discípulos, diciendo:",IA="El cual, hoy, la víspera de padecer por nuestra salvación y la de todos los hombres, tomó pan en sus santas y venerables manos, y, elevando los ojos, hacia ti, Dios, Padre suyo todopoderoso, dando gracias te bendijo, lo partió, y lo dio a sus discípulos, diciendo:",ac={sunday:`Reunidos en comunión con toda la Iglesia para celebrar el domingo, día en que Cristo ha vencido a la muerte y nos ha hecho partícipes de su vida inmortal, veneramos la memoria, ante todo, de la gloriosa siempre Virgen María, Madre de Jesucristo, nuestro Dios y Señor; ${Ho}`,christmas:`Reunidos en comunión con toda la Iglesia para celebrar el día santo en que la Virgen María, conservando intacta su virginidad, dio a luz al Salvador del mundo, veneramos la memoria, ante todo, de la gloriosa siempre Virgen María, Madre de Jesucristo, nuestro Dios y Señor; ${Ho}`,christmasNight:`Reunidos en comunión con toda la Iglesia para celebrar la noche santa en que la Virgen María, conservando intacta su virginidad, dio a luz al Salvador del mundo, veneramos la memoria, ante todo, de la gloriosa siempre Virgen María, Madre de Jesucristo, nuestro Dios y Señor; ${Ho}`,epiphany:`Reunidos en comunión con toda la Iglesia para celebrar el día santo en que tu único Hijo, eterno como tú en la gloria, se manifestó en la verdad de nuestra carne, hecho hombre como nosotros, veneramos la memoria, ante todo, de la gloriosa siempre Virgen María, Madre de Jesucristo, nuestro Dios y Señor; ${Ho}`,holyThursday:`Reunidos en comunión con toda la Iglesia para celebrar el día santo en que nuestro Señor Jesucristo fue entregado por nosotros, veneramos la memoria, ante todo, de la gloriosa siempre Virgen María, Madre de Jesucristo, nuestro Dios y Señor; ${Ho}`,easter:`Reunidos en comunión con toda la Iglesia para celebrar el día santo de la resurrección de nuestro Señor Jesucristo según la carne, veneramos la memoria, ante todo, de la gloriosa siempre Virgen María, Madre de Jesucristo, nuestro Dios y Señor; ${Ho}`,easterNight:`Reunidos en comunión con toda la Iglesia para celebrar la noche santa de la resurrección de nuestro Señor Jesucristo según la carne, veneramos la memoria, ante todo, de la gloriosa siempre Virgen María, Madre de Jesucristo, nuestro Dios y Señor; ${Ho}`,ascension:`Reunidos en comunión con toda la Iglesia para celebrar el día santo en que tu único Hijo, nuestro Señor Jesucristo, habiendo tomado nuestra débil condición humana, la exaltó a la derecha de tu gloria, veneramos la memoria, ante todo, de la gloriosa siempre Virgen María, Madre de Jesucristo, nuestro Dios y Señor; ${Ho}`,pentecost:`Reunidos en comunión con toda la Iglesia para celebrar el día de Pentecostés, en que el Espíritu Santo se manifestó a los apóstoles en lenguas de fuego, veneramos la memoria, ante todo, de la gloriosa siempre Virgen María, Madre de Jesucristo, nuestro Dios y Señor; ${Ho}`},CA="Acepta, Señor, en tu bondad, esta ofrenda de tus siervos y de toda tu familia santa, que te presentamos en el día mismo en que nuestro Señor Jesucristo encomendó a sus discípulos la celebración del sacramento de su Cuerpo y de su Sangre; ordena en tu paz nuestros días, líbranos de la condenación eterna y cuéntanos entre tus elegidos. [Por Cristo, nuestro Señor. Amén.]",OA="Acepta, Señor, en tu bondad, esta ofrenda de tus siervos y de toda tu familia santa, por aquellos que has hecho renacer del agua y del Espíritu Santo, perdonándoles todos sus pecados; ordena en tu paz nuestros días, líbranos de la condenación eterna y cuéntanos entre tus elegidos. [Por Cristo, nuestro Señor. Amén.]",DA=`$Sacerdote.$ Por eso, Padre, nosotros, tus siervos, y todo tu pueblo santo, al celebrar este memorial de la muerte gloriosa de Jesucristo, tu Hijo, nuestro Señor; de su santa resurrección del lugar de los muertos y de su admirable ascensión a los cielos, te ofrecemos, Dios de gloria y majestad, de los mismos bienes que nos has dado, el sacrificio puro, inmaculado y santo: pan de vida eterna y cáliz de eterna salvación.

Mira con ojos de bondad esta ofrenda y acéptala, como aceptaste los dones del justo Abel, el sacrificio de Abrahán, nuestro padre en la fe, y la oblación pura de tu sumo sacerdote Melquisedec.

Inclinado, con las manos juntas, prosigue:

Te pedimos humildemente, Dios todopoderoso, que esta ofrenda sea llevada a tu presencia, hasta el altar del cielo, por manos de tu ángel, para que cuantos recibimos el Cuerpo y la Sangre de tu Hijo, al participar aquí de este altar, seamos colmados de gracia y bendición. [Por Cristo, nuestro Señor. Amén.]

Conmemoración de los difuntos:

Acuérdate también, Señor, de tus hijos difuntos, que nos han precedido con el signo de la fe y duermen ya el sueño de la paz.

A ellos, Señor, y a cuantos descansan en Cristo, concédeles el lugar del consuelo, de la luz y de la paz. [Por Cristo, nuestro Señor. Amén.]

Y a nosotros, pecadores, siervos tuyos, que confiarnos en tu infinita misericordia, admítenos en la asamblea de los santos apóstoles y mártires Juan el Bautista, Esteban, Matías y Bernabé, [Ignacio, Alejandro, Marcelino y Pedro, Felicidad y Perpetua, Águeda, Lucía, Inés, Cecilia, Anastasia,] y de todos los santos; y acéptanos en su compañía, no por nuestros méritos, sino conforme a tu bondad.

Por Cristo, Señor nuestro, por quien sigues creando todos los bienes, los santificas, los llenas de vida, los bendices y los repartes entre nosotros.`,qd=`$Sacerdote.$ Santo eres, en verdad, Padre, y con razón te alaban todas tus criaturas, ya que por Jesucristo, tu Hijo, Señor nuestro, con la fuerza del Espíritu Santo, das vida y santificas todo, y congregas a tu pueblo sin cesar, para que ofrezca en tu honor un sacrificio sin mancha desde donde sale el sol hasta el ocaso.

Por eso, Padre, te suplicamos que santifiques por el mismo espíritu estos dones que hemos separado para ti, de manera que se conviertan para nosotros en Cuerpo y + Sangre de Jesucristo, Hijo tuyo y Señor nuestro, que nos mandó celebrar estos misterios.

Porque él mismo, la noche en que iba a ser entregado, tomó pan, y dando gracias te bendijo, lo partió y lo dio a sus discípulos, diciendo:

TOMAD Y COMED TODOS DE ÉL, PORQUE ESTO ES MI CUERPO, QUE SERÁ ENTREGADO POR VOSOTROS.

Del mismo modo, acabada la cena, tomó el cáliz, dando gracias te bendijo, y lo pasó a sus discípulos, diciendo:

TOMAD Y BEBED TODOS DE ÉL, PORQUE ÉSTE ES EL CÁLIZ DE MI SANGRE, SANGRE DE LA ALIANZA NUEVA Y ETERNA, QUE SERÁ DERRAMADA POR VOSOTROS Y POR MUCHOS PARA EL PERDÓN DE LOS PECADOS. HACED ESTO EN CONMEMORACIÓN MÍA.`,Id=`$Sacerdote.$ Así, pues, Padre, al celebrar ahora el memorial de la pasión salvadora de tu Hijo, de su admirable resurrección y ascensión al cielo, mientras esperamos su venida gloriosa, te ofrecemos, en esta acción de gracias, el sacrificio vivo y santo.

Dirige tu mirada sobre la ofrenda de tu Iglesia, y reconoce en ella la víctima por cuya inmolación quisiste devolvernos tu amistad, para que, fortalecidos con el Cuerpo y la Sangre de tu Hijo y llenos de tu Espíritu Santo, formemos en Cristo un solo cuerpo y un solo espíritu.

Que él nos transforme en ofrenda permanente, para que gocemos de tu heredad junto con tus elegidos: con María, la Virgen Madre de Dios, su esposo san José, los apóstoles y los mártires, y todos los santos, por cuya intercesión confiamos obtener siempre tu ayuda.

Te pedimos, Padre, que esta víctima de reconciliación traiga la paz y la salvación al mundo entero. Confirma en la fe y en la caridad a tu Iglesia, peregrina en la tierra: a tu servidor, el papa, a nuestro obispo, al orden episcopal, a los presbíteros y diáconos, y a todo el pueblo redimido por ti.

Atiende los deseos y súplicas de esta familia que has congregado en tu presencia. Reúne en torno a ti, Padre misericordioso, a todos tus hijos dispersos por el mundo.

A nuestros hermanos difuntos y a cuantos murieron en tu amistad recíbelos en tu reino, donde esperamos gozar todos juntos de la plenitud eterna de tu gloria, por Cristo, Señor nuestro, por quien concedes al mundo todos los bienes.`,RA="Porque él mismo, la noche en que iba a ser entregado, tomó pan, y dando gracias te bendijo, lo partió y lo dio a sus discípulos, diciendo:",$A="Habiendo amado a los suyos que estaban en el mundo, los amó hasta el extremo y, mientras cenaba con sus discípulos, tomó pan, y dando gracias te bendijo, lo partió y lo dio a sus discípulos, diciendo:",TA="Atiende los deseos y súplicas de esta familia que has congregado en tu presencia.",LA={sunday:"Atiende los deseos y súplicas de esta familia que has congregado en tu presencia en el domingo, día en que Cristo ha vencido a la muerte y nos ha hecho partícipes de su vida inmortal.",christmas:"Atiende los deseos y súplicas de esta familia que has congregado en tu presencia en el día santo en que la Virgen María dio a luz al Salvador del mundo.",christmasNight:"Atiende los deseos y súplicas de esta familia que has congregado en tu presencia en la noche santa en que la Virgen María dio a luz al Salvador del mundo.",epiphany:"Atiende los deseos y súplicas de esta familia que has congregado en tu presencia en el día santo en que tu único Hijo, eterno como tú en la gloria, se manifestó en la verdad de nuestra carne hecho hombre.",easter:"Atiende los deseos y súplicas de esta familia que has congregado en tu presencia en el día glorioso de la resurrección de nuestro Señor Jesucristo según la carne.",easterNight:"Atiende los deseos y súplicas de esta familia que has congregado en tu presencia en la noche gloriosa de la resurrección de nuestro Señor Jesucristo según la carne.",ascension:"Atiende los deseos y súplicas de esta familia que has congregado en tu presencia en el día glorioso de la Ascensión, en el que Cristo ha sido constituido Señor del cielo y de la tierra.",pentecost:"Atiende los deseos y súplicas de esta familia que has congregado en tu presencia en el día en que la efusión de tu Espíritu ha hecho de ella sacramento de unidad para todos los pueblos."},MA=`$Sacerdote.$ En verdad es justo darte gracias, y deber nuestro glorificarte, Padre santo, porque tú eres el único Dios vivo y verdadero que existes desde siempre y vives para siempre; luz sobre toda luz. Porque tú solo eres bueno y la fuente de la vida, hiciste todas las cosas para colmarlas de tus bendiciones y alegrar su multitud con la claridad de tu gloria.

Por eso, innumerables ángeles en tu presencia, contemplando la gloria de tu rostro, te sirven siempre y te glorifican sin cesar. Y con ellos también nosotros, llenos de alegría, y por nuestra voz las demás criaturas, aclamamos tu nombre cantando:`,NA=`$Sacerdote.$ Te alabamos, Padre santo, porque eres grande y porque hiciste todas las cosas con sabiduría y amor. A imagen tuya creaste al hombre y le encomendaste el universo entero, para que, sirviéndote sólo a ti, su Creador, dominara todo lo creado.

Y cuando por desobediencia perdió tu amistad, no lo abandonaste al poder de la muerte, sino que, compadecido, tendiste la mano a todos, para que te encuentre el que te busca. Reiteraste, además, tu alianza a los hombres; por los profetas los fuiste llevando con la esperanza de salvación.

Y tanto amaste al mundo, Padre santo, que, al cumplirse la plenitud de los tiempos, nos enviaste como salvador a tu único Hijo. El cual se encarnó por obra del Espíritu Santo, nació de María, la Virgen, y así compartió en todo nuestra condición humana menos en el pecado; anunció la salvación a los pobres, la liberación a los oprimidos y a los afligidos el consuelo. Para cumplir tus designios, él mismo se entregó a la muerte, y, resucitando, destruyó la muerte y nos dio nueva vida. Y porque no vivamos ya para nosotros mismos, sino para él, que por nosotros murió y resucitó, envió, Padre, al Espíritu Santo como primicia para los creyentes, a fin de santificar todas las cosas, llevando a la plenitud su obra en el mundo.

Por eso, Padre, te rogamos que este mismo Espíritu santifique que estas ofrendas, de manera que se conviertan para nosotros en Cuerpo y + Sangre de Jesucristo, nuestro Señor, y así celebremos el gran misterio que nos dejó como alianza eterna. Porque él mismo, llegada la hora en que había de ser glorificado por ti, Padre santo, habiendo amado a los suyos que estaban en el mundo, los amó hasta el extremo.

Y, mientras cenaba con sus discípulos, tomó pan, te bendijo, lo partió y se lo dio, diciendo:

TOMAD Y COMED TODOS DE ÉL, PORQUE ESTO ES MI CUERPO, QUE SERÁ ENTREGADO POR VOSOTROS.

Del mismo modo, tomó el cáliz lleno del fruto de la vid, te dio gracias y se lo pasó a sus discípulos, diciendo:

TOMAD Y BEBED TODOS DE ÉL, PORQUE ÉSTE ES EL CÁLIZ DE MI SANGRE, SANGRE DE LA ALIANZA NUEVA Y ETERNA, QUE SERÁ DERRAMADA POR VOSOTROS Y POR MUCHOS PARA EL PERDÓN DE LOS PECADOS. HACED ESTO EN CONMEMORACIÓN MÍA.`,_A=`$Sacerdote.$ Por eso, Padre, al celebrar ahora el memorial de nuestra redención, recordamos la muerte del Cristo y su descenso al lugar de los muertos, proclamamos su resurrección y ascensión a tu derecha; y mientras esperamos su venida gloriosa, te ofrecemos su Cuerpo y su Sangre, sacrificio agradable a ti y salvación para todo el mundo.

Dirige tu mirada sobre esta Víctima que tú mismo has preparado a tu Iglesia, y concede a cuantos compartimos este pan y este cáliz, que, congregados en un solo cuerpo por el Espíritu Santo, seamos en Cristo víctima viva para alabanza de tu gloria.

Y ahora, Señor, acuérdate de todos aquellos por quienes te ofrecemos este sacrificio: de tu servidor el papa, de nuestro obispo, del orden episcopal y de los presbíteros y diáconos, de los oferentes y de los aquí reunidos, de todo tu pueblo santo y de aquellos que te buscan con sincero corazón.

Acuérdate también de los que murieron en la paz de Cristo y de todos los difuntos, cuya fe tú sólo conociste. Padre de bondad, que todos tus hijos nos reunamos en la heredad de tu reino, con María, la Virgen Madre de Dios, con su esposo san José, con los apóstoles y los santos; y allí, junto con toda la creación libre

ya del pecado y de la muerte, te glorifiquemos por Cristo, Señor nuestro, por quien concedes al mundo todos los bienes.`,zA=`$Sacerdote.$ En verdad es justo y necesario darte gracias, Señor, Padre santo, porque no dejas de llamarnos a una vida plenamente feliz.

Tú, Dios de bondad y misericordia, ofreces siempre tu perdón e invitas a los pecadores a recurrir confiadamente a tu clemencia.

Muchas veces los hombres hemos quebrantado tu alianza; pero tú, en vez de abandonarnos, has sellado de nuevo con la familia humana, por Jesucristo, tu Hijo, nuestro Señor, un pacto tan sólido que ya nada lo podrá romper.

Y ahora, mientras ofreces a tu pueblo un tiempo de gracia y reconciliación, lo alientas en Cristo para que vuelva a ti, obedeciendo más plenamente al Espíritu Santo, y se entregue al servicio de todos los hombres.

Por eso, llenos de admiración y agradecimiento, unimos nuestras voces a las de los coros celestiales para cantar la grandeza de tu amor y proclamar la alegría de nuestra salvación:`,JA=`$Sacerdote.$ Oh Dios, que desde el principio del mundo haces cuanto nos conviene para que seamos santos como tú mismo eres Santo, mira a tu pueblo aquí reunido.

Y derrama la fuerza de tu Espíritu, de manera que estos dones sean para nosotros Cuerpo y + Sangre de tu amado Hijo Jesucristo, en quien nosotros somos hijos tuyos.

Cuando nosotros estábamos perdidos y éramos incapaces de volver a ti, nos amaste hasta el extremo.

Tu Hijo, que es el único justo, se entregó a sí mismo en nuestras manos para ser clavado en la cruz.

Pero, antes de que sus brazos extendidos entre el cielo y la tierra trazasen el signo indeleble de tu alianza, quiso celebrar la Pascua con sus discípulos.

Mientras cenaba con ellos, tomó pan, dando gracias, te bendijo, lo partió y se lo dio, diciendo:

TOMAD Y COMED TODOS DE ÉL, PORQUE ESTO ES MI CUERPO, QUE SERÁ ENTREGADO POR VOSOTROS.

Igualmente, después de haber cenado, sabiendo que él iba a reconciliar todas las cosas en sí mismo por su sangre derramada en la cruz, tomó el cáliz, lleno del fruto de la vid, de nuevo te dio gracias y lo pasó a sus amigos, diciendo:

TOMAD Y BEBED TODOS DE ÉL, PORQUE ÉSTE ES EL CÁLIZ DE MI SANGRE, SANGRE DE LA ALIANZA NUEVA Y ETERNA, QUE SERÁ DERRAMADA POR VOSOTROS Y POR MUCHOS PARA EL PERDÓN DE LOS PECADOS. HACED ESTO EN CONMEMORACIÓN MÍA.`,jA=`$Sacerdote.$ Así, pues, al hacer el memorial de Jesucristo, nuestra Pascua y nuestra paz definitiva, y celebrar su muerte y resurrección, en la esperanza del día feliz de su retorno, te ofrecemos, Dios fiel y verdadero, la Víctima que devuelve tu gracia a los hombres.

Mira con amor, Padre de bondad, a quienes llamas a unirse a ti, y concédeles que, participando del único sacrificio de Cristo, formen, por la fuerza del Espíritu Santo, un solo cuerpo, en el que no haya ninguna división.

Guárdanos a todos en comunión de fe y amor con el papa y nuestro obispo.

Ayúdanos a preparar la venida de tu reino, hasta la hora en que nos presentemos ante ti, santos entre los santos del cielo, con Santa María, la Virgen, y los apóstoles, y con nuestros hermanos difuntos, que confiamos a tu misericordia.

Entonces, en la creación nueva, liberada por fin de toda corrupción, te cantaremos la acción de gracias de Jesucristo, tu Ungido, que vive eternamente.`,UA=`$Sacerdote.$ Te damos gracias, Dios nuestro y Padre todopoderoso, por medio de Jesucristo, nuestro Señor, y te alabamos por la obra admirable de la redención.

Pues, en una humanidad dividida por las enemistades y las discordias, tú diriges las voluntades para que se dispongan a la reconciliación.

Tu Espíritu mueve los corazones para que los enemigos vuelvan a la amistad, los adversarios se den la mano y los pueblos busquen la unión.

Con tu acción eficaz consigues que las luchas se apacigüen y crezca el deseo de la paz; que el perdón venza al odio y la indulgencia a la venganza.

Por eso, debemos darte gracias continuamente y alabarte con los coros celestiales, que te aclaman sin cesar:`,HA=`$Sacerdote.$ A ti, pues, Padre, que gobiernas el universo, te bendecimos por Jesucristo, tu Hijo, que ha venido en tu nombre.

Él es la palabra que nos salva, la mano que tiendes a los pecadores, el camino que nos conduce a la paz.

Dios, Padre nuestro, nos habíamos apartado de ti y nos has reconciliado por tu Hijo, a quien entregaste a la muerte para que nos convirtiéramos a tu amor y nos amáramos unos a otros.

Por eso, celebrando este misterio de reconciliación, te rogamos que santifiques con el rocío de tu Espíritu estos dones, para que sean el Cuerpo y + Sangre de tu Hijo, mientras cumplimos su mandato.

Porque él mismo, cuando iba a entregar su vida por nuestra liberación, estando sentado a la mesa, tomó pan en sus manos, dando gracias, te bendijo, lo partió y lo dio a sus discípulos, diciendo:

TOMAD Y COMED TODOS DE ÉL, PORQUE ESTO ES MI CUERPO, QUE SERÁ ENTREGADO POR VOSOTROS.

Del mismo modo, aquella noche, tomó el cáliz, y, proclamando tu misericordia, lo pasó a sus discípulos, diciendo:

TOMAD Y BEBED TODOS DE ÉL, PORQUE ÉSTE ES EL CÁLIZ DE MI SANGRE, SANGRE DE LA ALIANZA NUEVA Y ETERNA, QUE SERÁ DERRAMADA POR VOSOTROS Y POR MUCHOS PARA EL PERDÓN DE LOS PECADOS. HACED ESTO EN CONMEMORACIÓN MÍA.`,xA=`$Sacerdote.$ Señor, Dios nuestro, tu Hijo nos dejó esta prenda de su amor.

Al celebrar, pues, el memorial de su muerte y resurrección, te ofrecemos lo mismo que tú nos entregaste: el sacrificio de la reconciliación perfecta.

Acéptanos también a nosotros, Padre santo, juntamente con la ofrenda de tu Hijo, y en la participación de este banquete concédenos tu Espíritu, para que desaparezca todo obstáculo en el camino de la concordia y la Iglesia resplandezca en medio de los hombres como signo de unidad e instrumento de tu paz.

Que este Espíritu, vínculo de amor, nos guarde en comunión con el papa y nuestro obispo, con los demás obispos y todo tu pueblo santo.

Recibe en tu reino a nuestros hermanos que se durmieron en el Señor y a todos los difuntos cuya fe sólo tú conociste.

Así como nos has reunido aquí en torno a la mesa de tu Hijo, unidos con María, la Virgen Madre de Dios, y con todos los santos, reúne también a los hombres de cualquier clase y condición, de toda raza y lengua, en el banquete de la unidad eterna, en un mundo nuevo donde brille la plenitud de tu paz, por Cristo, Señor nuestro.`,VA=`$Sacerdote.$ Te damos gracias, Padre de bondad, y te glorificamos, Señor, Dios del universo, porque no cesas de convocar a los hombres de toda raza y cultura, por medio del Evangelio de tu Hijo, y los reúnes en un solo cuerpo, que es la Iglesia.

Esta Iglesia, vivificada por tu Espíritu, resplandece como signo de la unidad de todos los hombres, da testimonio de tu amor en el mundo y abre a todos las puertas de la esperanza.

De esta forma se convierte en un signo de fidelidad a la alianza, que has sellado con nosotros para siempre.

Por ello, Señor, te enaltecen el cielo y la tierra, y también nosotros, unidos a toda la Iglesia, proclamamos el himno de tu gloria:`,FA=`$Sacerdote.$ Te damos gracias, Señor y Padre nuestro, te bendecimos y te glorificamos, porque has creado todas las cosas y nos has llamado a la vida.

Tú nunca nos dejas solos, te manifiestas vivo y presente en medio de nosotros.

Ya en tiempos antiguos guiaste a Israel, tu pueblo, con mano poderosa y brazo extendido, a través de un inmenso desierto.

Hoy acompañas a tu Iglesia peregrina, dándole la fuerza de tu Espíritu.

Por medio de tu Hijo nos abres el camino de la vida, para que, a través de este mundo, lleguemos al gozo perfecto de tu reino.

Por eso, con los ángeles y los santos, cantamos sin cesar el himno de tu gloria:`,wA=`$Sacerdote.$ Te damos gracias y te bendecimos, Dios santo y fuerte, porque diriges con sabiduría los destinos del mundo y cuidas con amor de cada uno de los hombres.

Tú nos invitas a escuchar tu palabra, que nos reúne en un solo cuerpo, y a mantenernos siempre firmes en el seguimiento de tu Hijo.

Porque sólo él es el camino que nos conduce hacia ti, Dios invisible, la verdad que nos hace libres, la vida que nos colma de alegría.`,kA=`$Sacerdote.$ Te damos gracias, Padre fiel y lleno de ternura, porque tanto amaste al mundo que le has entregado a tu Hijo, para que fuera nuestro Señor y nuestro hermano.

Él manifiesta su amor para con los pobres y los enfermos, para con los pequeños y los pecadores.

Él nunca permaneció indiferente ante el sufrimiento humano; su vida y su palabra son para nosotros la prueba de tu amor; como un padre siente ternura por sus hijos, así tú sientes ternura por tus fieles.

Por eso, te alabamos y te glorificamos y, con los ángeles y los santos, cantamos tu bondad y tu fidelidad, proclamando el himno de tu gloria:`,BA=`$Sacerdote.$ Te glorificamos, Padre Santo, porque estás siempre con nosotros en el camino de la vida, sobre todo cuando Cristo, tu Hijo, nos congrega para el banquete pascual de su amor.

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

HACED ESTO EN CONMEMORACIÓN MÍA.`,YA=`$Sacerdote.$ Por eso, Padre de bondad, celebramos ahora el memorial de nuestra reconciliación, y proclamamos la obra de tu amor: Cristo, tu Hijo, a través del sufrimiento y de la muerte en Cruz, ha resucitado a la vida nueva y ha sido glorificado a tu derecha.

Dirige tu mirada, Padre santo, sobre esta ofrenda; es Jesucristo que se ofrece con su Cuerpo y con su Sangre y, por este sacrificio, nos abre el camino hacia ti.

Señor, Padre de misericordia, derrama sobre nosotros el Espíritu del Amor, el Espíritu de tu hijo.

Haz que nuestra Iglesia se renueve constantemente a la luz del Evangelio y encuentre siempre nuevos impulsos de vida; consolida los vínculos de unidad entre los laicos y los pastores de tu Iglesia, entre nuestro obispo y sus presbíteros y diáconos, entre todos los obispos y el papa; que la Iglesia sea, en medio de nuestro mundo, dividido por las guerras y discordias, instrumento de unidad, de concordia y de paz.

Acuérdate también, Padre, de nuestros hermanos que murieron en la paz de Cristo, y de todos los demás difuntos, cuya fe sólo tú conociste; admítelos a contemplar la luz de tu rostro y llévalos a la plenitud de la vida en la resurrección.

Y, cuando termine nuestra peregrinación por este mundo, recíbenos también a nosotros en tu reino, donde esperamos gozar todos juntos de la plenitud eterna de tu gloria.

En comunión con la Virgen María, Madre de Dios, los apóstoles, los mártires y todos los santos, te invocamos, Padre, y te glorificamos, Por Cristo, Señor nuestro.`,GA=`$Sacerdote.$ Por eso, Padre de bondad, celebramos ahora el memorial de nuestra reconciliación, y proclamamos la obra de tu amor: Cristo, tu Hijo, a través del sufrimiento y de la muerte en Cruz, ha resucitado a la vida nueva y ha sido glorificado a tu derecha.

Dirige tu mirada, Padre santo, sobre esta ofrenda; es Jesucristo que se ofrece con su Cuerpo y con su Sangre y, por este sacrificio, nos abre el camino hacia ti.

Señor, Padre de misericordia, derrama sobre nosotros el Espíritu del Amor, el Espíritu de tu hijo.

Fortalécenos con este mismo Espíritu a todos los que hemos sido invitados a tu mesa, para que todos nosotros, pueblo de Dios, con nuestros pastores, el papa, nuestro obispo, con los presbíteros y los diáconos, caminemos alegres en la esperanza y firmes en la fe, y comuniquemos al mundo el gozo del Evangelio.

Acuérdate también, Padre, de nuestros hermanos que murieron en la paz de Cristo, y de todos los demás difuntos, cuya fe sólo tú conociste; admítelos a contemplar la luz de tu rostro y llévalos a la plenitud de la vida en la resurrección.

Y, cuando termine nuestra peregrinación por este mundo, recíbenos también a nosotros en tu reino, donde esperamos gozar todos juntos de la plenitud eterna de tu gloria.

En comunión con la Virgen María, Madre de Dios, los apóstoles, los mártires y todos los santos, te invocamos, Padre, y te glorificamos. Por Cristo, Señor nuestro.`,QA=`$Sacerdote.$ Por eso, Padre de bondad, celebramos ahora el memorial de nuestra reconciliación, y proclamamos la obra de tu amor: Cristo, tu Hijo, a través del sufrimiento y de la muerte en Cruz, ha resucitado a la vida nueva y ha sido glorificado a tu derecha.

Dirige tu mirada, Padre santo, sobre esta ofrenda; es Jesucristo que se ofrece con su Cuerpo y con su Sangre y, por este sacrificio, nos abre el camino hacia ti.

Señor, Padre de misericordia, derrama sobre nosotros el Espíritu del Amor, el Espíritu de tu hijo.

Fortalécenos a cuantos nos disponemos a recibir el Cuerpo y la Sangre de tu Hijo y haz que, unidos al papa y a nuestro obispo, seamos uno en la fe y en el amor.

Danos entrañas de misericordia ante toda miseria humana, inspíranos el gesto y la palabra oportuna frente al hermano solo y desamparado, ayúdanos a mostrarnos disponibles ante quien se siente explotado y deprimido.

Que tu Iglesia, Señor, sea un recinto de verdad y de amor, de libertad, de justicia y de paz, para que todos encuentren en ella un motivo para seguir esperando.

Acuérdate también, Padre, de nuestros hermanos que murieron en la paz de Cristo, y de todos los demás difuntos, cuya fe sólo tú conociste; admítelos a contemplar la luz de tu rostro y llévalos a la plenitud de la vida en la resurrección.

Y, cuando termine nuestra peregrinación por este mundo, recíbenos también a nosotros en tu reino, donde esperamos gozar todos juntos de la plenitud eterna de tu gloria.

En comunión con la Virgen María, Madre de Dios, los apóstoles, los mártires y todos los santos, te invocamos, Padre, y te glorificamos, por Cristo, Señor nuestro.`,WA=`$Sacerdote.$ Por eso, Padre de bondad, celebramos ahora el memorial de nuestra reconciliación, y proclamamos la obra de tu amor: Cristo, tu Hijo, a través del sufrimiento y de la muerte en Cruz, ha resucitado a la vida nueva y ha sido glorificado a tu derecha.

Dirige tu mirada, Padre santo, sobre esta ofrenda; es Jesucristo que se ofrece con su Cuerpo y con su Sangre y, por este sacrificio, nos abre el camino hacia ti.

Señor, Padre de misericordia, derrama sobre nosotros el Espíritu del Amor, el Espíritu de tu hijo.

Fortalece a tu pueblo con el Cuerpo y la Sangre de tu Hijo y renuévanos a todos a su imagen.

Derrama tu bendición abundante sobre el papa y sobre nuestro obispo; que todos los miembros de la Iglesia sepamos discernir los signos de los tiempos y crezcamos en la fidelidad al Evangelio; que nos preocupemos de compartir en la caridad las angustias y las tristezas, las alegrías y las esperanzas de los hombres, y así les mostremos el camino de la salvación.

Acuérdate también, Padre, de nuestros hermanos que murieron en la paz de Cristo, y de todos los demás difuntos, cuya fe sólo tú conociste; admítelos a contemplar la luz de tu rostro y llévalos a la plenitud de la vida en la resurrección.

Y, cuando termine nuestra peregrinación por este mundo, recíbenos también a nosotros en tu reino, donde esperamos gozar todos juntos de la plenitud eterna de tu gloria.

En comunión con la Virgen María, Madre de Dios, los apóstoles, los mártires y todos los santos, te invocamos, Padre, y te glorificamos, por Cristo, Señor nuestro.`,sc=`$Diácono/sacerdote.$ Inclinaos para recibir la bendición.

$Sacerdote.$ El Señor os bendiga y os guarde.

$Pueblo.$ Amén.

$Sacerdote.$ Haga brillar su rostro sobre vosotros y os conceda su favor.

$Pueblo.$ Amén.

$Sacerdote.$ Vuelva su mirada a vosotros y os conceda la paz.

$Pueblo.$ Amén.

$Sacerdote.$ Y la bendición de Dios todopoderoso, Padre, Hijo + y Espíritu Santo, descienda sobre vosotros y os acompañe siempre.

$Pueblo.$ Amén.`,nc=`$Diácono/sacerdote.$ Inclinaos para recibir la bendición.

$Sacerdote.$ La paz de Dios, que supera todo juicio, custodie vuestros corazones y vuestros pensamientos en el conocimiento y el amor de Dios y de su Hijo Jesucristo, nuestro Señor.

$Pueblo.$ Amén.

$Sacerdote.$ Y la bendición de Dios todopoderoso, Padre, Hijo + y Espíritu Santo, descienda sobre vosotros y os acompañe siempre.

$Pueblo.$ Amén.`,rc=`$Diácono/sacerdote.$ Inclinaos para recibir la bendición.

$Sacerdote.$ Dios, nuestro Padre, que nos ha congregado para esta celebración de sus santos, os bendiga, os proteja y os confirme en su paz.

$Pueblo.$ Amén.

$Sacerdote.$ Cristo, el Señor, que ha manifestado en sus santos la fuerza renovadora del Misterio pascual, os haga auténticos testigos de su Evangelio.

$Pueblo.$ Amén.

$Sacerdote.$ El Espíritu Santo, que en los santos nos ha ofrecido un ejemplo de caridad evangélica, os conceda la gracia de acrecentar en la Iglesia la verdadera comunión de fe y amor.

$Pueblo.$ Amén.

$Sacerdote.$ Y la bendición de Dios todopoderoso, Padre, Hijo + y Espíritu Santo, descienda sobre vosotros y os acompañe siempre.

$Pueblo.$ Amén.`,ic=`$Diácono/sacerdote.$ Inclinaos para recibir la bendición.

$Sacerdote.$ Dios, Padre misericordioso, os conceda a todos vosotros, como al hijo pródigo, el gozo de volver a la casa paterna.

$Pueblo.$ Amén.

$Sacerdote.$ Cristo, modelo de oración y de vida, os guíe a la auténtica conversión del corazón a través del camino de la Cuaresma.

$Pueblo.$ Amén.

$Sacerdote.$ El Espíritu de sabiduría y de fortaleza os sostenga en la lucha contra el maligno, para que podáis celebrar con Cristo la victoria pascual.

$Pueblo.$ Amén.

$Sacerdote.$ Y la bendición de Dios todopoderoso, Padre, Hijo + y Espíritu Santo, descienda sobre vosotros y os acompañe siempre.

$Pueblo.$ Amén.`,tc=`$Diácono/sacerdote.$ Inclinaos para recibir la bendición.

$Sacerdote.$ Que os bendiga Dios todopoderoso en la solemnidad pascual que hoy celebramos y, compasivo, os defienda de toda asechanza del pecado.

$Pueblo.$ Amén.

$Sacerdote.$ El que os ha renovado para la vida eterna, en la resurrección de su Unigénito, os colme con el premio de la inmortalidad.

$Pueblo.$ Amén.

$Sacerdote.$ Y quienes, terminados los días de la pasión del Señor, habéis participado en los gozos de la fiesta de Pascua, podáis llegar, por su gracia, con espíritu exultante a aquellas fiestas que se celebran con alegría eterna.

$Pueblo.$ Amén.

$Sacerdote.$ Y la bendición de Dios todopoderoso, Padre, Hijo + y Espíritu Santo, descienda sobre vosotros y os acompañe siempre.

$Pueblo.$ Amén.`,lc=`$Diácono/sacerdote.$ Inclinaos para recibir la bendición.

$Sacerdote.$ Que Dios omnipotente y misericordioso os santifique con la celebración de este Adviento y os llene de sus bendiciones, ya que creéis que Cristo vino al mundo y esperáis su retorno glorioso.

$Pueblo.$ Amén.

$Sacerdote.$ Que durante toda la vida os conceda permanecer firmes en la fe, alegres en la esperanza y eficaces en la caridad.

$Pueblo.$ Amén.

$Sacerdote.$ Que os enriquezca con los premios eternos cuando venga en la majestad de su gloria aquel de cuya encarnación, llenos de fe, os alegráis ahora.

$Pueblo.$ Amén.

$Sacerdote.$ Y la bendición de Dios todopoderoso, Padre, Hijo + y Espíritu Santo, descienda sobre vosotros y os acompañe siempre.

$Pueblo.$ Amén.`,cc=`$Diácono/sacerdote.$ Inclinaos para recibir la bendición.

$Sacerdote.$ Que Dios, cuya infinita bondad disipó las tinieblas del mundo con la encarnación de su Hijo e iluminó el mundo con su nacimiento glorioso, aleje de vosotros el pecado y alumbre vuestros corazones con el esplendor de las virtudes.

$Pueblo.$ Amén.

$Sacerdote.$ Que llene vuestros corazones de su alegría y os haga mensajeros del Evangelio el mismo que encomendó a sus ángeles anunciar a los pastores el gran gozo del nacimiento del Salvador.

$Pueblo.$ Amén.

$Sacerdote.$ Y que os colme de su paz y de buena voluntad y os conceda participar de la vida eterna aquel que, por la encarnación de su Hijo, unió la tierra con el cielo.

$Pueblo.$ Amén.

$Sacerdote.$ Y la bendición de Dios todopoderoso, Padre, Hijo + y Espíritu Santo, descienda sobre vosotros y os acompañe siempre.

$Pueblo.$ Amén.`,uc=`$Diácono/sacerdote.$ Inclinaos para recibir la bendición.

$Sacerdote.$ Que Dios, fuente y origen de toda bendición, os conceda su gracia, os bendiga copiosamente y os guarde, sanos y salvos, durante todo este año.

$Pueblo.$ Amén.

$Sacerdote.$ Que os conserve íntegros en la fe, inconmovibles en la esperanza y perseverantes hasta el fin, con santa paciencia, en la caridad.

$Pueblo.$ Amén.

$Sacerdote.$ Que disponga vuestros días y ocupaciones en la paz, escuche siempre vuestra oración y os haga felizmente partícipes de la vida eterna.

$Pueblo.$ Amén.

$Sacerdote.$ Y la bendición de Dios todopoderoso, Padre, Hijo + y Espíritu Santo, descienda sobre vosotros y os acompañe siempre.

$Pueblo.$ Amén.`,dc=`$Diácono/sacerdote.$ Inclinaos para recibir la bendición.

$Sacerdote.$ Que Dios, cuya misericordia os llamó de las tinieblas a su luz admirable, derrame su bendición sobre vosotros y fortalezca vuestro corazón en la fe, la esperanza y la caridad.

$Pueblo.$ Amén.

$Sacerdote.$ Y puesto que seguís confiadamente a Cristo, que hoy se manifestó al mundo como luz que brilla en las tinieblas, que os haga también a vosotros ser luz para vuestros hermanos.

$Pueblo.$ Amén.

$Sacerdote.$ Para que así, a lo largo de vuestra peregrinación terrena, os encontréis con Cristo, el Señor, luz de luz, a quien los magos buscaron guiados por la estrella y, llenos de gozo, lograron encontrar.

$Pueblo.$ Amén.

$Sacerdote.$ Y la bendición de Dios todopoderoso, Padre, Hijo + y Espíritu Santo, descienda sobre vosotros y os acompañe siempre.

$Pueblo.$ Amén.`,mc=`$Diácono/sacerdote.$ Inclinaos para recibir la bendición.

$Sacerdote.$ Que Dios, Padre de las luces, que iluminó la mente de los discípulos con la luz del Espíritu Santo, os alegre con su bendición y os llene siempre con los dones de su Espíritu.

$Pueblo.$ Amén.

$Sacerdote.$ Que el mismo fuego divino que de manera admirable descendió sobre los apóstoles purifique vuestros corazones de todo pecado y los ilumine con su claridad.

$Pueblo.$ Amén.

$Sacerdote.$ Que el mismo Espíritu que unió todas las lenguas en una sola confesión de fe os conceda perseverar en ella y llegar, así, a ver plenamente lo que ahora esperáis.

$Pueblo.$ Amén.

$Sacerdote.$ Y la bendición de Dios todopoderoso, Padre, Hijo + y Espíritu Santo, descienda sobre vosotros y os acompañe siempre.

$Pueblo.$ Amén.`,pc=`$Diácono/sacerdote.$ Inclinaos para recibir la bendición.

$Sacerdote.$ Que Dios, que en su providencia amorosa quiso redimir al género humano por medio del Hijo santísimo de la Virgen María, os colme de sus bendiciones.

$Pueblo.$ Amén.

$Sacerdote.$ Que experimentéis siempre la protección de Santa María, por quien habéis recibido al autor de la vida.

$Pueblo.$ Amén.

$Sacerdote.$ Que a todos los que os habéis reunido hoy para celebrar con devoción esta fiesta de María, el Señor os conceda la participación en la vida eterna.

$Pueblo.$ Amén.

$Sacerdote.$ Y la bendición de Dios todopoderoso, Padre, Hijo + y Espíritu Santo, descienda sobre vosotros y os acompañe siempre.

$Pueblo.$ Amén.`,KA=`$Diácono/sacerdote.$ Inclinaos para recibir la bendición.

$Sacerdote.$ Concede a tu pueblo, Señor, con tu protección y tu gracia, salud de alma y cuerpo, perfecto amor a los hermanos y una entrega total a tu servicio. Por Jesucristo, nuestro Señor.

$Pueblo.$ Amén.

$Sacerdote.$ Y la bendición de Dios todopoderoso, Padre, Hijo + y Espíritu Santo, descienda sobre vosotros.

$Pueblo.$ Amén.`,XA=`$Diácono/sacerdote.$ Inclinaos para recibir la bendición.

$Sacerdote.$ Ilumina, Señor, a tu pueblo para que, cumpliendo tu santa voluntad, pueda practicar siempre el bien. Por Jesucristo, nuestro Señor.

$Pueblo.$ Amén.

$Sacerdote.$ Y la bendición de Dios todopoderoso, Padre, Hijo + y Espíritu Santo, descienda sobre vosotros.

$Pueblo.$ Amén.`,ZA=`$Diácono/sacerdote.$ Inclinaos para recibir la bendición.

$Sacerdote.$ Señor, protege con tu mano poderosa a este pueblo suplicante; dígnate purificarlo y orientarlo para que, consolado en el presente, tienda sin cesar hacia los bienes futuros. Por Jesucristo, nuestro Señor.

$Pueblo.$ Amén.

$Sacerdote.$ Y la bendición de Dios todopoderoso, Padre, Hijo + y Espíritu Santo, descienda sobre vosotros.

$Pueblo.$ Amén.`,eP=`$Diácono/sacerdote.$ Inclinaos para recibir la bendición.

$Sacerdote.$ Señor, que se alegren los fieles porque tú glorificas a los miembros del Cuerpo de tu Hijo; y, pues devotamente celebran la memoria de los santos, concédeles participar de su suerte y gozar un día con ellos de tu gloria eterna. Por Jesucristo, nuestro Señor.

$Pueblo.$ Amén.

$Sacerdote.$ Y la bendición de Dios todopoderoso, Padre, Hijo + y Espíritu Santo, descienda sobre vosotros.

$Pueblo.$ Amén.`,oP=`$Diácono/sacerdote.$ Inclinaos para recibir la bendición.

$Sacerdote.$ Te pedimos, Señor, que descienda sobre tu pueblo la bendición copiosa, para que la esperanza brote en la tribulación, la virtud se afiance en la dificultad y se obtenga la redención eterna. Por Jesucristo, nuestro Señor.

$Pueblo.$ Amén.

$Sacerdote.$ Y la bendición de Dios todopoderoso, Padre, Hijo + y Espíritu Santo, descienda sobre vosotros.

$Pueblo.$ Amén.`,aP=`$Diácono/sacerdote.$ Inclinaos para recibir la bendición.

$Sacerdote.$ Te pedimos, Señor, que ilumines la mente de tu pueblo con la claridad de tu luz, para que alcance a ver lo que debe obrar y lleve a cabo lo que sea recto. Por Jesucristo, nuestro Señor.

$Pueblo.$ Amén.

$Sacerdote.$ Y la bendición de Dios todopoderoso, Padre, Hijo + y Espíritu Santo, descienda sobre vosotros.

$Pueblo.$ Amén.`,sP=`$Diácono/sacerdote.$ Inclinaos para recibir la bendición.

$Sacerdote.$ Oh, Dios, que tus fieles se fortalezcan con tu bendición; sé para ellos consuelo en la tristeza, paciencia en la tribulación y defensa en el peligro. Por Jesucristo, nuestro Señor.

$Pueblo.$ Amén.

$Sacerdote.$ Y la bendición de Dios todopoderoso, Padre, Hijo + y Espíritu Santo, descienda sobre vosotros.

$Pueblo.$ Amén.`,nP=`$Diácono/sacerdote.$ Inclinaos para recibir la bendición.

$Sacerdote.$ Señor, mira con bondad a tu pueblo y límpialo de todos sus pecados con tu misericordia; así no le hará daño adversidad alguna, si no le domina ninguna maldad. Por Jesucristo, nuestro Señor.

$Pueblo.$ Amén.

$Sacerdote.$ Y la bendición de Dios todopoderoso, Padre, Hijo + y Espíritu Santo, descienda sobre vosotros.

$Pueblo.$ Amén.`;function Be(e){return`$Diácono/sacerdote.$ Inclinaos para recibir la bendición.

$Sacerdote.$ ${e}

$Pueblo.$ Amén.

$Sacerdote.$ Y la bendición de Dios todopoderoso, Padre, Hijo + y Espíritu Santo, descienda sobre vosotros.

$Pueblo.$ Amén.`}const rP=[{label:"CEE Cuaresma I jueves",content:Be("Te rogamos, Señor, que la misericordia esperada descienda sobre los que te suplican, y concédeles la abundancia de los bienes del cielo, de modo que sepan bien lo que han de pedir y obtengan lo que han solicitado. Por Jesucristo, nuestro Señor.")},{label:"CEE Cuaresma I viernes",content:Be("Mira, Señor, con bondad a tu pueblo, para que se cumpla en su interior lo que su observancia manifiesta externamente. Por Jesucristo, nuestro Señor.")},{label:"CEE Cuaresma I sábado",content:Be("Conforta, Señor, a tus fieles con la bendición que imploramos de ti, para que nunca permitas que nos apartemos de tu voluntad y siempre podamos agradecer tus beneficios. Por Jesucristo, nuestro Señor.")},{label:"CEE Cuaresma II domingo",content:Be("Dirige continuamente, Señor, los corazones de tus fieles y concede esta gracia a tus siervos, de modo que, permaneciendo en tu amor y cercanía, cumplan plenamente tus mandamientos. Por Jesucristo, nuestro Señor.")},{label:"CEE Cuaresma II lunes",content:Be("Afianza, Señor, el corazón de tus fieles y fortalécelos con el poder de tu gracia, para que se entreguen con fervor a la plegaria y se amen con amor sincero. Por Jesucristo, nuestro Señor.")},{label:"CEE Cuaresma II martes",content:Be("Muéstrate propicio, Señor, a las súplicas de tus fieles y cura las debilidades de su espíritu, para que, una vez perdonados, se alegren siempre con tu bendición. Por Jesucristo, nuestro Señor.")},{label:"CEE Cuaresma II miércoles",content:Be("Concede a tus siervos, Señor, la abundancia de tu protección y gracia, dales salud de alma y cuerpo, concédeles plenitud de amor fraterno y haz que sean siempre fieles en su entrega a ti. Por Jesucristo, nuestro Señor.")},{label:"CEE Cuaresma II jueves",content:Be("Asiste, Señor, a tus siervos que imploran el auxilio de tu gracia, para que obtengan la defensa y la guía de tu protección. Por Jesucristo, nuestro Señor.")},{label:"CEE Cuaresma II viernes",content:Be("Te pedimos, Señor, que concedas a tu pueblo la salud de alma y cuerpo, para que, haciendo el bien, merezca ser defendido siempre por tu protección. Por Jesucristo, nuestro Señor.")},{label:"CEE Cuaresma II sábado",content:Be("Estén abiertos, Señor, los oídos de tu misericordia a los ruegos de los que te suplican, y, para que les concedas lo que desean, haz que pidan lo que a ti te agrada. Por Jesucristo, nuestro Señor.")},{label:"CEE Cuaresma III lunes",content:Be("Te pedimos, Señor, que dirijas los corazones de tus fieles y les concedas benigno la gracia de permanecer firmes en el amor a ti y al prójimo, y de cumplir plenamente tus mandamientos. Por Jesucristo, nuestro Señor.")},{label:"CEE Cuaresma III martes",content:Be("Oh, Dios, maestro y guía de tu pueblo, aleja de él los pecados que le afean, para que te sea siempre agradable y se sienta seguro con tu auxilio. Por Jesucristo, nuestro Señor.")},{label:"CEE Cuaresma III miércoles",content:Be("Concede a tu pueblo, Dios nuestro, una voluntad agradable a ti, porque le otorgarás toda clase de bienes al hacerle conforme a tus mandatos. Por Jesucristo, nuestro Señor.")},{label:"CEE Cuaresma III jueves",content:Be("Confiados en tu misericordia, imploramos, Señor, tu clemencia, pues, así como hemos recibido de ti lo que somos, por tu gracia, procuremos desear el bien y poner en práctica lo deseado. Por Jesucristo, nuestro Señor.")},{label:"CEE Cuaresma III viernes",content:Be("Señor, mira a los fieles que imploran tu misericordia, para que puedan difundir por todas partes los dones de tu amor quienes han puesto en ti su confianza. Por Jesucristo, nuestro Señor.")},{label:"CEE Cuaresma IV domingo",content:Be("Defiende, Señor, a los que te suplican, fortalece a los débiles, vivifica siempre con tu luz a los que caminan en sombras de muerte, y, libres de todo mal por tu compasión, concédeles llegar a los bienes definitivos. Por Jesucristo, nuestro Señor.")}],iP=`$Fuente.$ Misal ICERGUA: Viernes Santo, oración universal.

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

$Pueblo.$ Amén.`,tP=`$Fuente.$ Misal ICERGUA: Viernes Santo de la Pasión del Señor.

$Rúbrica.$ Hoy no se celebra la Misa. La celebración se hace normalmente por la tarde. Se entra en silencio.

$Sacerdote.$ ¡Oh Dios!, tu Hijo Jesucristo, Señor nuestro, por medio de su pasión ha destruido la muerte, que, como consecuencia del antiguo pecado, a todos los humanos alcanza. Concédenos hacernos semejantes a él. De este modo, los que hemos llevado grabada, por exigencia de la naturaleza humana, la imagen de Adán, el humano terreno, llevaremos grabada en adelante, por la acción santificadora de tu gracia, la imagen de Jesucristo, el humano celestial. Él que vive y reina, por lo siglos de los siglos.

$Pueblo.$ Amén.`,lP=`$Fuente.$ Misal ICERGUA: Viernes Santo, veneración de la cruz.

$Rúbrica.$ Después de la oración universal, se pasa a venerar la cruz. Se muestra tres veces la cruz y al mostrarla se canta o se dice:

$Sacerdote/cantor.$ Miren el árbol de la cruz, del cual estuvo colgada la salvación.

$Todos.$ Vengan a venerarlo.

$Rúbrica.$ Después todos los participantes pasan a venerar la cruz.`,cP=`$Fuente.$ Misal ICERGUA: Viernes Santo, rito de la comunión.

$Rúbrica.$ Se extiende un mantel sobre el altar y se pone sobre él un corporal y el libro. El diácono o un ministro trae el Santísimo Sacramento del monumento directamente al altar, mientras todos permanecen de pie y en silencio.`;function uP(e){return["$Fuente.$ Misal ICERGUA: Viernes Santo, rito de la comunión.","$Sacerdote.$ Fieles a la recomendación del Salvador, y siguiendo su divina enseñanza, con confianza decimos:",`$Todos.$ ${pa(e.lordPrayerLanguage)}`,"$Todos.$ Porque tuyo es el reino, tuyo es el poder y la gloria, por siempre, Señor.",'$Sacerdote.$ Señor Jesucristo, tú dijiste a los apóstoles: "La paz les dejo, mi paz les doy". Que tu Iglesia alcance esa paz y la unidad. Y, a nosotros pecadores, absueltos de condena y reprobación, presérvanos del mal y consérvanos en tu amor para que, liberados, por tu ternura y tu compasión, de toda angustia y tentación; vigilantes reconozcamos cada día, tu gloriosa manifestación. Te lo pedimos a Ti, que vives y reinas, por los siglos de los siglos.',"$Pueblo.$ Amén.","$Sacerdote.$ La paz del Señor esté siempre con ustedes.","$Pueblo.$ Y con tu espíritu.","$Sacerdote.$ Señor Jesucristo, Hijo de Dios vivo, concédenos que la comunión en tu Cuerpo y en tu Sangre, nos libre de todo pecado, nos dé fortaleza para cumplir siempre tu voluntad y nos alcance un corazón sencillo y una mirada limpia, para reconocer la presencia de tu Reino en cada persona y en toda la creación.","$Sacerdote.$ He aquí el Cordero de Dios, que quita el pecado del mundo. Dichosos los invitados al banquete del Señor.","$Todos.$ Señor, no soy digno de que vengas a mí, pero una palabra tuya bastará para sanarme."].join(`

`)}const dP=`$Fuente.$ Misal ICERGUA: Viernes Santo, comunión de los fieles.

$Rúbrica.$ Se distribuye la comunión a los fieles.

$Sacerdote/ministro.$ El Cuerpo de Cristo.

$Fiel.$ Amén.`,mP=`$Fuente.$ Misal ICERGUA: Viernes Santo, oración después de la comunión.

$Sacerdote.$ Oremos.

$Después de la comunión.$ Dios todopoderoso y eterno, que nos has redimido con la gloriosa muerte y resurrección de Jesucristo, por medio de nuestra participación en este sacramento prosigue en nosotros la obra de tu amor y ayúdanos a vivir entregados siempre a tu servicio. Por Jesucristo, nuestro Señor.

$Pueblo.$ Amén.`,pP=`$Fuente.$ Misal ICERGUA: Viernes Santo, oración sobre el pueblo.

$Sacerdote.$ Envía Señor, tu bendición sobre estos fieles tuyos que han conmemorado la muerte de tu Hijo y esperan resucitar con él; concédeles tu perdón y tu consuelo, fortalece su fe y hazlos partícipes de la eterna salvación. Por Jesucristo, nuestro Señor.

$Pueblo.$ Amén.

$Rúbrica.$ Luego se sale en silencio del templo.`,fP=`$Fuente.$ Misal ICERGUA: Miércoles de Ceniza, bendición e imposición de la ceniza.

$Rúbrica.$ Después de la homilía, el sacerdote, de pie y con las manos juntas, dice:

$Sacerdote.$ Hermanos, pidamos humildemente a Dios Padre que bendiga con su gracia esta ceniza que, en señal de arrepentimiento, vamos a imponer sobre nuestras cabezas.

$Rúbrica.$ Después de un breve momento de oración en silencio, prosigue:

$Sacerdote.$ Señor Dios, que te apiadas de quienes se humillan y concedes tu paz a los que se arrepienten, escucha con bondad nuestras súplicas y derrama la gracia de tu bendición sobre estos siervos tuyos que van a recibir la ceniza, para que, fieles a las prácticas cuaresmales, puedan llegar, con corazón puro, a celebrar la Pascua de tu Hijo, que vive y reina por los siglos de los siglos.

$Pueblo.$ Amén.

$Rúbrica.$ Rocía la ceniza con agua bendita, sin decir nada.

$Sacerdote.$ Arrepiéntete y cree en el Evangelio.

$Rúbrica.$ Mientras se impone la ceniza, se entona un canto apropiado.`,gP=`$Fuente.$ Misal ICERGUA: Domingo de Ramos, procesión con los ramos.

$Rúbrica.$ Se reúnen en un lugar conveniente, fuera del templo.

$Sacerdote.$ Queridos hermanos y hermanas: Desde el principio de la Cuaresma nos venimos preparando a través de la oración y de la caridad. Hoy, cercana ya la noche de Pascua, en comunión con toda la Iglesia, nos reunimos para iniciar la celebración de los misterios de la Pasión de nuestro Señor Jesucristo. Acompañemos con fe y devoción a nuestro Salvador en su entrada a la ciudad santa, para que, participando de su cruz, por su gracia, compartamos también su Resurrección.

$Sacerdote.$ Oremos. Dios todopoderoso y eterno, dígnate bendecir estos ramos y, a cuantos acompañamos jubilosos a Cristo, nuestro rey y Señor, concédenos vivir contigo en la Jerusalén del cielo. Por Jesucristo, nuestro Señor.

$Pueblo.$ Amén.

$Rúbrica.$ En silencio, rocía con agua bendita los ramos.`,SP=`$Diácono/sacerdote.$ Lectura del santo Evangelio según san Mateo.

$Pueblo.$ Gloria a ti, Señor.

Estaban ya cerca de Jerusalén. Cuando llegaron a Betfagé, junto al monte de los Olivos. Jesús envió a dos discípulos con esta misión: «Vayan al pueblecito que está al frente, y allí encontrarán una burra atada con su burrito al lado. Desátenla y tráiganmela. Si alguien les dice algo, contéstenle: El Señor los necesita, y los devolverá cuanto antes».

Esto sucedió para que se cumpliera lo dicho por el profeta: Digan a la hija de Sión: «Mira que tu rey viene a ti con toda sencillez, montado en una burra, un animal de carga».

Los discípulos se fueron e hicieron como Jesús les había mandado. Le trajeron la burra con su cría, le colocaron sus mantos sobre el lomo y él se sentó encima.

Había muchísima gente; extendían sus mantos en el camino, o bien cortaban ramas de árboles, con las que cubrían el suelo. Y el gentío que iba delante de Jesús, así como los que le seguían, empezaron a gritar: «¡Hosanna al hijo de David! ¡Bendito sea el que viene en el nombre del Señor! ¡Hosanna en lo más alto de los cielos!».

Cuando Jesús entró en Jerusalén, toda la ciudad se alborotó y preguntaban: «¿Quién es este?». Y la muchedumbre respondía: «¡Este es el profeta Jesús, de Nazaret de Galilea!».

$Diácono/sacerdote.$ Palabra del Señor.

$Pueblo.$ Gloria a ti, Señor Jesús.`,bP=`$Diácono/sacerdote.$ Lectura del santo Evangelio según san Marcos.

$Pueblo.$ Gloria a ti, Señor.

Cuando se aproximaban a Jerusalén, cerca ya de Betfagé y de Betania, al pie del monte de los Olivos, Jesús envió a dos de sus discípulos diciéndoles: «Vayan a ese pueblo que ven enfrente; apenas entren encontrarán un burro amarrado, que ningún hombre ha montado todavía. Desátenlo y tráiganlo aquí. Si alguien les pregunta: ¿Por qué hacen eso?, contesten: El Señor lo necesita, pero se lo va a devolver aquí mismo».

Se fueron y encontraron en la calle al burro, amarrado delante de una puerta, y lo desataron. Algunos de los que estaban allí les dijeron: «¿Por qué sueltan ese burro?». Ellos les contestaron lo que les había dicho Jesús, y se lo permitieron.

Trajeron el burro a Jesús, le pusieron sus capas encima y Jesús montó en él. Muchas personas extendían sus capas a lo largo del camino, mientras otras lo cubrían con ramas cortadas en el campo. Y tanto los que iban delante como los que seguían a Jesús, gritaban: «¡Hosanna! ¡Bendito el que viene en nombre del Señor! ¡Ahí viene el bendito reino de nuestro padre David! ¡Hosanna en las alturas!».

$Diácono/sacerdote.$ Palabra del Señor.

$Pueblo.$ Gloria a ti, Señor Jesús.`,yP=`$Diácono/sacerdote.$ Lectura del santo Evangelio según san Juan.

$Pueblo.$ Gloria a ti, Señor.

Al día siguiente, muchos de los que habían llegado para la fiesta se enteraron de que Jesús también venía a Jerusalén. Entonces tomaron ramas de palmera y salieron a su encuentro gritando: «¡Hosanna! ¡Bendito el que viene en nombre del Señor! ¡Bendito sea el Rey de Israel!».

Jesús encontró un burrito y se montó en él, según dice la Escritura: No temas, ciudad de Sión, mira que viene tu Rey montado en un burrito.

Los discípulos no se dieron cuenta de esto en aquel momento, pero cuando Jesús fue glorificado, recapacitaron que esto había sido escrito para él y que lo habían hecho para él.

$Diácono/sacerdote.$ Palabra del Señor.

$Pueblo.$ Gloria a ti, Señor Jesús.`,vP=`$Diácono/sacerdote.$ Lectura del santo Evangelio según san Lucas.

$Pueblo.$ Gloria a ti, Señor.

Dicho esto, Jesús pasó adelante y emprendió la subida hacia Jerusalén. Cuando se acercaban a Betfagé y Betania, al pie del monte llamado de los Olivos, Jesús envió a dos de sus discípulos y les dijo: «Vayan al pueblo de enfrente y al entrar en él encontrarán atado un burrito que no ha sido montado por nadie hasta ahora. Desátenlo y tráiganmelo. Si alguien les pregunta por qué lo desatan, contesten que el Señor lo necesita».

Fueron los dos discípulos y hallaron todo tal como Jesús les había dicho. Mientras soltaban el burrito llegaron los dueños y les preguntaron: «¿Por qué desatan ese burrito?». Contestaron: «El Señor lo necesita».

Trajeron entonces el burrito y le echaron sus capas encima para que Jesús se montara. La gente extendía sus mantos sobre el camino a medida que iba avanzando. Al acercarse a la bajada del monte de los Olivos, la multitud de los discípulos comenzó a alabar a Dios a gritos, con gran alegría, por todos los milagros que habían visto. Decían: «¡Bendito el que viene como Rey, en el nombre del Señor! ¡Paz en el cielo y gloria en lo más alto de los cielos!».

Algunos fariseos que se encontraban entre la gente dijeron a Jesús: «Maestro, reprende a tus discípulos». Pero él contestó: «Yo les aseguro que si ellos se callan, gritarán las piedras».

$Diácono/sacerdote.$ Palabra del Señor.

$Pueblo.$ Gloria a ti, Señor Jesús.`,hP=`$Rúbrica.$ Al final puede hacerse una breve reflexión sobre el sentido de la celebración.

$Rúbrica.$ Seguidamente inicia la procesión de ramos hacia el templo. Durante el trayecto se entonan cantos en los que se reconozca a Cristo como Señor.

$Rúbrica.$ Al llegar al templo, el sacerdote se reviste con los ornamentos propios para la Eucaristía y prosigue la celebración a partir de la oración colecta.`,EP=`$Fuente.$ Misal ICERGUA: Misa vespertina de la Cena del Señor.

$Rúbrica.$ Después de la homilía, donde sea pastoralmente conveniente, se procede al lavatorio de los pies.

$Rúbrica.$ Las personas designadas para el rito van, acompañadas por los ministros, a ocupar los asientos preparados para ellas en un lugar visible.

$Rúbrica.$ El celebrante, si es necesario, se quita la casulla, se acerca a cada una de las personas designadas y, con la ayuda de los ministros, les lava los pies y se los seca.

$Rúbrica.$ Una vez terminado el lavatorio, se continúa con la celebración eucarística a partir de la oración de los fieles.`,AP=`$Fuente.$ Misal ICERGUA: Misa vespertina de la Cena del Señor.

$Rúbrica.$ Dicha la oración después de la comunión, el sacerdote, de pie ante el altar, pone incienso en el incensario y, arrodillado, inciensa tres veces al Santísimo Sacramento.

$Rúbrica.$ Enseguida recibe el paño de hombros, toma en sus manos el copón y lo cubre con las extremidades del paño.

$Rúbrica.$ Se forma entonces la procesión para llevar al Santísimo Sacramento a través del templo, hasta el sitio donde se le va a guardar.

$Rúbrica.$ No hay bendición ni despedida ordinaria. La celebración continúa con la adoración ante el monumento.`,PP=`$Fuente.$ Misal ICERGUA: Jueves Santo, Misa Crismal.

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

$Rúbrica.$ No se dice Credo ni oración de los fieles.`,qP=`$Fuente.$ Misal ICERGUA: Jueves Santo, Misa Crismal.

$Rúbrica.$ Después de la renovación de las promesas sacerdotales, los diáconos y ministros designados para llevar los óleos, así como los fieles que han de presentar sobre el altar el pan, el vino y el agua, van en su busca y se los presentan al obispo trayéndolos en procesión, mientras se entona un canto apropiado.

$Diácono/ministro.$ Óleo para el santo crisma.

$Diácono/ministro.$ Óleo de los enfermos.

$Diácono/ministro.$ Óleo de los catecúmenos.

$Rúbrica.$ La misa se desarrolla como en el rito de la concelebración, hasta el final de la plegaria eucarística.`,IP=`$Fuente.$ Misal ICERGUA: Jueves Santo, Misa Crismal.

$Rúbrica.$ Antes de que el obispo diga la doxología: "Por Cristo, con él y en él", el que llevó la vasija del óleo de los enfermos la lleva cerca del altar y la sostiene delante del obispo, mientras bendice el óleo de los enfermos imponiendo las manos sobre la vasija.

$Obispo.$ Señor Dios, Padre de todo consuelo, que has querido sanar las dolencias de los enfermos por medio de tu Hijo: escucha con amor la oración de nuestra fe y derrama desde el cielo tu Espíritu Santo Consolador sobre este óleo. Tú que has hecho que el leño verde del olivo produzca aceite abundante para vigor de nuestro cuerpo, enriquece con tu bendición este óleo para que cuantos sean ungidos con él sean sanados en su cuerpo y en su espíritu, sientan tu divina protección y experimenten alivio en sus enfermedades y dolores. Que por tu acción, Señor, este aceite sea para nosotros óleo santo, en nombre de Jesucristo nuestro Señor.

$Todos.$ Amén.

$Rúbrica.$ Acabada la bendición, la vasija del óleo de los enfermos se lleva de nuevo a su lugar, y la misa prosigue hasta después de la comunión.`,CP=`$Fuente.$ Misal ICERGUA: Jueves Santo, Misa Crismal.

$Rúbrica.$ Dicha la oración después de la comunión, los ministros colocan las vasijas con los óleos que se han de bendecir sobre una mesa dispuesta en medio del presbiterio.

$Obispo.$ Señor Dios, fuerza y defensa de tu pueblo, que has hecho del aceite un símbolo de vigor, derrama tu Espíritu Santo sobre este óleo y dígnate bendecirlo para que los catecúmenos que han de ser ungidos con él reciban la fortaleza, la sabiduría y la valentía en el combate de la fe; de manera que, viviendo según el Evangelio de Cristo, den testimonio de la presencia de tu Reino y gocen de la alegría de vivir como hijos tuyos y de formar parte de la Iglesia. Por Jesucristo nuestro Señor.

$Todos.$ Amén.`,OP=`$Fuente.$ Misal ICERGUA: Jueves Santo, Misa Crismal.

$Rúbrica.$ Seguidamente el obispo derrama los aromas sobre el óleo y hace el crisma en silencio, a no ser que ya estuviese preparado de antemano.

$Obispo.$ Hermanos: pidamos a Dios Padre todopoderoso que se digne bendecir y santificar este ungüento para que aquellos cuyos cuerpos van a ser ungidos con él sientan interiormente la unción del Espíritu Santo, participando de los frutos de la redención.

$Rúbrica.$ Entonces el obispo, oportunamente, sopla sobre la boca de la vasija del crisma y, con las manos extendidas, dice la oración de consagración.

$Obispo.$ Señor, autor de todo crecimiento y de todo progreso espiritual: recibe complacido la acción de gracias que gozosamente, por nuestro medio, te dirige la Iglesia. Al principio del mundo, tú mandaste que de la tierra brotasen árboles que dieran fruto, y entre ellos, el olivo que ahora nos suministra el aceite con el que hemos preparado el santo crisma. Cuando en los días del diluvio las aguas purificaron de pecado la tierra, una paloma, signo de la gracia futura, anunció con un ramo de olivo la restauración de la paz entre los humanos. David, en los tiempos antiguos, previendo con espíritu profético los sacramentos que tu amor instituiría en favor de la humanidad, nos invitaba a ungir nuestros rostros con óleo en señal de alegría. Y en los últimos tiempos, el símbolo de la unción alcanzó su plenitud: después que el agua bautismal lava los pecados, el óleo santo consagra nuestros cuerpos y da paz y alegría a nuestros rostros.

$Obispo.$ Por eso, Señor, tú mandaste a tu siervo Moisés que, tras purificar en el agua a su hermano Aarón, lo consagrase sacerdote con la unción de este óleo. Todavía alcanzó la unción mayor grandeza cuando tu Hijo, nuestro Señor Jesucristo, después de ser bautizado por Juan en el Jordán, recibió el Espíritu Santo en forma de paloma y se oyó tu voz declarando que él era tu Hijo, el Amado, en quien te complacías plenamente. De este modo se hizo manifiesto que David ya hablaba de Cristo cuando dijo: "El Señor, tu Dios, te ha ungido con aceite de júbilo entre todos tus compañeros".

$Rúbrica.$ El obispo impone las manos sobre el óleo y los concelebrantes, en silencio, extienden la mano derecha hacia el crisma y la mantienen así hasta el final de la oración.

$Obispo.$ Por tanto, te pedimos, Señor, que mediante el poder de tu Espíritu Santo hagas que esta mezcla de aceite y perfume sea para nosotros instrumento y signo de tus bendiciones; derrama sobre nuestros hermanos, cuando sean ungidos con este crisma, la abundancia de los dones del Espíritu Santo, y que los lugares y objetos consagrados por este óleo sean para tu pueblo motivo de santificación. Pero ante todo, Señor, te suplicamos que por medio del sacramento de la confirmación hagas crecer a tu Iglesia en el número y santidad de sus hijos, hasta que, según la medida de Cristo, alcance aquella plenitud en la que tú, en el esplendor de tu gloria, junto con tu Hijo y en la unidad del Espíritu Santo, lo serás todo en todos por los siglos de los siglos.

$Todos.$ Amén.`,DP=`$Fuente.$ Misal ICERGUA: Vigilia Pascual.

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

$Rúbrica.$ La aclamación se canta al inicio de la procesión, a la entrada del templo y al llegar al altar.`,RP=`$Fuente.$ Misal ICERGUA: Pregón Pascual.

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

$Pueblo.$ Amén.`,$P=`$Fuente.$ Misal ICERGUA: Vigilia Pascual, liturgia bautismal.

$Rúbrica.$ El sacerdote con los ministros se dirige a la fuente bautismal, si se encuentra a la vista de los fieles. De lo contrario, se pone un recipiente con agua en el presbiterio.

$Sacerdote.$ Hermanos, acompañemos con nuestra oración a estos catecúmenos que anhelan renacer a nueva vida en la fuente del bautismo, para que Dios, nuestro Padre, les otorgue su protección y su amor.

$Sacerdote.$ Si se bendice la fuente, pero no va a haber bautizos: Hermanos, pidamos a Dios todopoderoso que con su poder santifique esta fuente bautismal, para que cuantos en el bautismo van a ser regenerados en Cristo, sean acogidos en la familia de Dios.

$Rúbrica.$ Si no hay bautizos ni bendición de la fuente, omitidas las letanías, se procede inmediatamente a la bendición del agua.

$Sacerdote.$ Invoquemos, queridos hermanos, a Dios Padre todopoderoso, para que bendiga esta agua, que va a ser derramada sobre nosotros en memoria de nuestro bautismo; y pidámosle que nos renueve interiormente para que permanezcamos fieles al espíritu, que hemos recibido.

$Todos.$ Señor Dios nuestro, escucha las oraciones de tu pueblo que vela en esta noche santa, en que celebramos nuestra creación y la maravilla aún más grande de nuestra redención; dígnate bendecir esta agua.

La creaste para hacer fecunda la tierra y para favorecer nuestros cuerpos con el frescor y la limpieza. La hiciste también instrumento de misericordia al librar a tu pueblo de la esclavitud y al apagar con ella su sed en el desierto; por los profetas la revelaste como signo de la nueva alianza que quisiste sellar con los humanos. Y cuando Cristo descendió a ella en el Jordán, renovaste nuestra naturaleza pecadora con el baño del nuevo renacimiento.

Que esta agua, Señor, avive en nosotros el recuerdo de nuestro bautismo, y nos haga participar en el gozo de nuestros hermanos bautizados en la Pascua. Por Jesucristo nuestro Señor.

$Pueblo.$ Amén.`,TP=`$Sacerdote.$ ¿Renuncian al pecado para vivir en la libertad de los hijos de Dios?

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

$Rúbrica.$ Si no hay bautismos, se rocía con el agua bendecida a toda la asamblea.`;function se(e,o,a=!1){return{title:e,content:o,kind:"mass",quiet:a}}function ze(e,o,a=!1){return{title:e,alternatives:o,kind:"mass",quiet:a}}function Ue(e){return{title:e,kind:"part",quiet:!0}}function Cd(e){return so(e).includes("viernes santo")}function ra(e){const o=so(e);return o.includes("jueves de semana santa")||o.includes("jueves santo")||o.includes("cena del senor")}function Od(e){return so(e).includes("miercoles de ceniza")}function fc(e){const o=so(e);return o.includes("domingo de ramos")||o.includes("ramos")&&o.includes("pasion")}function dn(e){return so(e).includes("crismal")}function Li(e){const o=so(e);return o.includes("sabado santo")||o.includes("vigilia pascual")}function LP(e){const o=so(e);return Li(e)||oq(e.date)||o.includes("pentecost")||o.includes("domingo de pascua")||o.includes("octava de pascua")}function MP(){return[Ue("Celebración de la Pasión del Señor"),Ue("Liturgia de la Palabra y oración universal"),se("Entrada en silencio y oración inicial",tP,!0)]}function Dd(){return se("Oración universal solemne",iP,!0)}function NP(){return[Ue("Veneración de la cruz"),se("Presentación y adoración de la cruz",lP,!0)]}function _P(e,o){const a=[Ue("Rito de la comunión"),se("Traslado del Santísimo Sacramento",cP,!0),se("Padrenuestro e invitación a la comunión",uP(e),!0)];return lo(a,e,o,"comunion"),a.push(se("Comunión de los fieles",dP,!0),se("Oración después de la comunión",mP,!0),se("Oración sobre el pueblo y salida en silencio",pP,!0)),a}function zP(){return se("Lavatorio de los pies",EP,!0)}function JP(){return se("Bendición e imposición de la ceniza",fP,!0)}function jP(){return se("Renovación de las promesas sacerdotales",PP,!0)}function UP(){return se("Bendición del óleo de los enfermos",IP,!0)}function HP(){return[se("Bendición del óleo de los catecúmenos",CP,!0),se("Consagración del crisma",OP,!0)]}function xP(e){const o=e.cycle?.trim().toUpperCase(),a=[{label:"Año A",cycle:"A",content:SP},{label:"Año B",cycle:"B",content:bP},{label:"Año B - Juan",cycle:"B",content:yP},{label:"Año C",cycle:"C",content:vP}],s=[...a.filter(n=>n.cycle===o),...a.filter(n=>n.cycle!==o)];return ze("Evangelio de la entrada del Señor",s.map(({label:n,content:r})=>({label:n,content:r})),!0)}function VP(e){return[Ue("Conmemoración de la entrada del Señor"),se("Bendición de los ramos",gP,!0),xP(e),se("Procesión hacia el templo",hP,!0)]}function FP(e,o){const a=[Ue("Traslación del Santísimo Sacramento")];return lo(a,e,o,"final"),a.push(se("Procesión al monumento",AP,!0)),a}function wP(){return[Ue("Vigilia Pascual"),Ue("Lucernario"),se("Bendición del fuego y preparación del cirio",DP,!0),se("Pregón pascual",RP,!0)]}function kP(){return[Ue("Liturgia bautismal"),se("Bendición del agua",$P,!0),se("Renovación de las promesas bautismales",TP,!0)]}const BP={"Salmo responsorial":[{label:"Creación",content:`$Fuente.$ Misal Romano: Vigilia Pascual, oración después de la primera lectura.

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

$Pueblo.$ Amén.`}]};function YP(e){const o=BP[e];if(o?.length)return ze("Oración después de la lectura",o,!0)}const GP={"Antífona de entrada":"entranceAntiphon",Colecta:"collect","Sobre las ofrendas":"offerings","Antífona de comunión":"communionAntiphon","Después de la comunión":"postCommunion","Oración sobre el pueblo":"prayerOverPeople"};function Rd(e,o,a){const s=o.celebration?.trim(),n=[`$Celebración.$ ${s?`${s}.`:"Del día."}`];if(a?.trim()){const r=QP(XP(WP($d(a,o),o.cycle),o));n.push(`$${e}.$ ${r}`)}return n.join(`

`)}function QP(e){return e.replace(/\s+,/g,",").replaceAll("s úplicas","súplicas").replaceAll("nuest ro","nuestro").replaceAll("sie ndo","siendo").replaceAll("omnipo tencia","omnipotencia").replaceAll("Sang re","Sangre")}function $d(e,o){const a=o.celebration?.trim()||"esta celebración";return e.replaceAll("{{celebration}}",a)}function WP(e,o){const a=o?.trim().toUpperCase();if(!a||!["A","B","C"].includes(a))return e;const s=/^\s*Año\s*([ABC])\s*:\s*(.*)$/i;if(!/(^|\n)\s*Año\s*[ABC]\s*:/i.test(e))return e;const n=new Map;let r;for(const i of e.replace(/\r\n/g,`
`).split(`
`)){const t=i.match(s);if(t){r=t[1].toUpperCase(),n.set(r,[t[2].trim()].filter(Boolean));continue}r&&n.get(r)?.push(i)}return n.get(a)?.join(`
`).trim()||e}function ws(e){const o=Mi(e);if(/\b(?:jn|juan)\s*4\b/.test(o)||o.includes("samaritana")||o.includes("agua que yo le dare"))return"samaritan";if(/\b(?:jn|juan)\s*9\b/.test(o)||o.includes("unto mis ojos")||o.includes("ciego de nacimiento"))return"blind";if(/\b(?:jn|juan)\s*11\b/.test(o)||o.includes("lazaro")||o.includes("resurreccion de lazaro"))return"lazarus";if(/\b(?:jn|juan)\s*8\b/.test(o)||o.includes("adultera")||o.includes("ninguno te ha condenado"))return"adulteress";if(/\b(?:lc|lucas)\s*15\b/.test(o)||o.includes("hijo prodigo")||o.includes("este hermano tuyo"))return"prodigal";if(o.includes("otro evangelio"))return"other"}function KP(e){const o=/\bCuando se lee(?:\s+el)?\s+([^:]+):\s*/gi,a=[...e.matchAll(o)];if(!a.length)return;const s=e.slice(0,a[0].index).trim(),n=a.map((r,i)=>{const t=(r.index??0)+r[0].length,l=a[i+1]?.index??e.length;return{condition:r[1].trim(),content:e.slice(t,l).trim()}}).filter(r=>r.content);return{base:s,segments:n}}function XP(e,o){const a=KP(e);if(!a)return e;const s=`${o.massGospelReference??""}
${o.massGospelText??""}`.trim();if(!s)return e;const n=ws(s)??"other",r=a.base?ws(a.base):void 0;if(a.base&&r===n)return a.base;const i=a.segments.find(l=>ws(`${l.condition}
${l.content}`)===n);if(i)return i.content;const t=a.segments.find(l=>ws(l.condition)==="other");return t&&(!a.base||r&&r!==n)?t.content:a.base||e}function ZP(e){return e.celebration?.trim()||"esta celebración"}function eq(e,o,a,s){return[`$Edición.$ ${a}.`,Rd(e,o,s)].join(`

`)}function Gr(e){return e.source==="spain"?"España":e.source==="icergua"?"ICERGUA":e.source==="usccb"?"USCCB/CEM":e.source==="liturgiapapal"?"Liturgia Papal":e.source==="mercaba"?"Mercabá":e.source==="peru"?"Perú":e.source==="textosliturgia"?"Textos para la Liturgia":e.source==="santaescolastica"?"Santa Escolástica":"LDHoras"}function gc(e){return e.title.startsWith("Común")?e.title:Gr(e)}function gr(e){const o=e?.replace(/\r\n/g,`
`).trim();return o?o.split(/(?:^|\n)\s*O\s+bien\s*:?\s*/gi).map(a=>a.trim()).filter(Boolean):[]}function Sr(e,o,a){return a>1?`${e} ${o+1}`:e}function Sc(e,o,a,s){return[`$Fuente.$ ${a.source==="santaescolastica"?Gr(a):`Misal ${Gr(a)}`}: ${a.title}.`,Rd(e,o,a.fields[s])].join(`

`)}function Ja(e,o,a,s="",n="",r=s){const i=GP[o],t=i?uE(i,a):[],l=t.find(f=>f.source==="spain"),u=t.filter(f=>f.source==="icergua"),c=t.filter(f=>f.source!=="spain"&&f.source!=="icergua"),m=[];if(i&&l?.fields[i]){const f=gr(l.fields[i]);f.forEach((h,C)=>{m.push({label:Sr("España",C,f.length),content:[s,eq(o,a,"Misal Romano de España",h),n].filter(Boolean).join(`

`)})})}return u.forEach(f=>{if(!i||!f.fields[i])return;const h=gr(f.fields[i]),C=gc(f);h.forEach((O,J)=>{m.push({label:Sr(C,J,h.length),content:[s,Sc(o,a,{...f,fields:{...f.fields,[i]:O}},i),n].filter(Boolean).join(`

`)})})}),c.forEach(f=>{if(!i||!f.fields[i])return;const h=gr(f.fields[i]),C=gc(f);h.forEach((O,J)=>{m.push({label:Sr(C,J,h.length),content:[s,Sc(o,a,{...f,fields:{...f.fields,[i]:O}},i),n].filter(Boolean).join(`

`)})})}),m.length?ze(e,m):se(e,r,!0)}function Mi(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function so(e){return Mi([e.celebration,e.rank,...e.seasons??[]].filter(Boolean).join(" "))}function Td(e){const o=e%19,a=Math.floor(e/100),s=e%100,n=Math.floor(a/4),r=a%4,i=Math.floor((a+8)/25),t=Math.floor((a-i+1)/3),l=(19*o+a-n-t+15)%30,u=Math.floor(s/4),c=s%4,m=(32+2*r+2*u-l-c)%7,f=Math.floor((o+11*l+22*m)/451),h=Math.floor((l+m-7*f+114)/31)-1,C=(l+m-7*f+114)%31+1;return new Date(e,h,C)}function Ld(e,o){const a=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()),s=Date.UTC(o.getFullYear(),o.getMonth(),o.getDate());return Math.round((a-s)/864e5)}function oq(e){if(!e)return!1;const o=Ld(e,Td(e.getFullYear()));return o>=0&&o<=7}function Md(e){if(e)return Ld(e,Td(e.getFullYear()))}function aq(e){if(!e)return!1;const o=e.getMonth(),a=e.getDate();return o===11&&a>=25&&a<=31||o===0&&a===1}function sq(e){const o=Mi(e.celebration??"");return aq(e.date)||o==="navidad"||o.includes("natividad")}function Ni(e){const o=so(e),a=Md(e.date);if(Li(e))return{key:"easterNight",label:"Vigilia pascual"};if(a!==void 0&&a>=0&&a<=7)return{key:"easter",label:"Pascua"};if(o.includes("pentecost"))return{key:"pentecost",label:"Pentecostés"};if(o.includes("ascension"))return{key:"ascension",label:"Ascensión"};if(o.includes("epifania"))return{key:"epiphany",label:"Epifanía"};if(sq(e))return{key:"christmas",label:"Navidad"};if(e.rank?.toUpperCase()==="SUNDAY")return{key:"sunday",label:"domingo"}}function bc(e,o=ec,a=oc){return Pd.replace(qA,e).replace(ec,o).replace(oc,a)}function nq(e){if(ra(e))return{label:"I - Jueves Santo",content:bc(ac.holyThursday,CA,IA)};const o=Ni(e);if(o)return{label:`I - ${o.label}`,content:bc(ac[o.key],o.key==="easter"||o.key==="easterNight"?OA:void 0)}}function rq(e){const o=nq(e),a=o?[o]:[];return a.push({label:"I",content:Pd}),a}function iq(e){return Ed.replace(hA,e)}function tq(e){return Ad.replace(AA,e)}function lq(e){const o=ra(e)?[{label:"II - Jueves Santo",content:iq(EA)}]:[];return o.push({label:"II",content:Ed}),o}function cq(e){const o=Ni(e),a=o?[{label:`II - ${o.label}`,content:tq(PA[o.key])}]:[];return a.push({label:"II",content:Ad}),a}function uq(e){return qd.replace(RA,e)}function dq(e){return Id.replace(TA,e)}function mq(e){const o=ra(e)?[{label:"III - Jueves Santo",content:uq($A)}]:[];return o.push({label:"III",content:qd}),o}function pq(e){const o=Ni(e),a=o?[{label:`III - ${o.label}`,content:dq(LA[o.key])}]:[];return a.push({label:"III",content:Id}),a}function _i(e){return so(e).includes("lent")||so(e).includes("cuaresma")}function fq(e){return e.replace(/_([^_]+)_/g,"$1").replace(/\$([^$]+)\$/g,"$1").replace(/\$/g,"").trim()}function gq(e){const o=e?.trim()??"",a=o.match(/_([^_]+)_/)?.[1]?.trim();if(a)return a;const s=o.match(/:\s*(.+)$/s)?.[1]?.trim();return s?fq(s):""}function Sq(e){const o=so(e),a=gq(e.massGospelReference);return a?{label:"Evangelio del día",verse:a}:o.includes("advent")||o.includes("adviento")?{label:"Común Adviento",verse:"Muéstranos, Señor, tu misericordia y danos tu salvación."}:o.includes("christmas")||o.includes("navidad")||o.includes("epifania")?{label:"Común Navidad",verse:"Nos ha amanecido un día sagrado; venid, naciones, adorad al Señor, porque hoy una gran luz ha bajado a la tierra."}:_i(e)?{label:"Común Cuaresma",verse:"No solo de pan vive el hombre, sino de toda palabra que sale de la boca de Dios."}:o.includes("pentecost")?{label:"Común Pentecostés",verse:"Ven, Espíritu Santo, llena los corazones de tus fieles y enciende en ellos el fuego de tu amor."}:o.includes("easter")||o.includes("pascua")||o.includes("ascension")?{label:"Común Pascua",verse:"Ha resucitado Cristo, que creó todas las cosas y se compadeció del género humano."}:o.includes("martir")||o.includes("martyr")?{label:"Común mártires",verse:"Dichosos los perseguidos por causa de la justicia, porque de ellos es el reino de los cielos."}:o.includes("virgen")||o.includes("maria")||o.includes("maría")?{label:"Común Santa María",verse:"Dichosa tú, Virgen María, que has creído, porque lo que te ha dicho el Señor se cumplirá."}:{label:"Común",verse:"Tus palabras, Señor, son espíritu y vida; tú tienes palabras de vida eterna."}}function bq(e){return _i(e)?"$Todos.$ Honor y gloria a ti, Señor Jesús.":"$Todos.$ Aleluya."}function yq(e,o){const a=bq(e);return[a,`$Cantor.$ ${o}`,a].join(`

`)}function vq(e){const o=so(e),a=e.rank?.toUpperCase(),s=[],n=(r,i)=>{s.push({label:r,content:i})};return o.includes("epifania")&&n("Epifanía",UE),(o.includes("transfiguracion")||o.includes("transfiguraci"))&&n("Transfiguración",Zl),(o.includes("pentecost")||o.includes("espiritu santo"))&&n("Espíritu Santo",XE),o.includes("jose")&&n("San José",mA),o.includes("angel")&&n("Ángeles",dA),o.includes("trinidad")&&n("Santísima Trinidad",fA),(o.includes("sagrado corazon")||o.includes("sacratísimo corazon")||o.includes("sacratísimo corazón"))&&n("Sagrado Corazón",gA),(o.includes("cristo rey")||o.includes("rey del universo"))&&n("Cristo Rey",SA),(o.includes("juan bautista")||o.includes("john the baptist"))&&n("San Juan Bautista",pA),(o.includes("corpus")||o.includes("eucarist")||o.includes("cuerpo")&&o.includes("sangre"))&&(n("Eucaristía I",ME),n("Eucaristía II",NE)),(o.includes("unidad")||o.includes("ecumen")||o.includes("iglesia"))&&n("Unidad de la Iglesia",zl),(o.includes("dedicacion")||o.includes("dedicaci")||o.includes("templo"))&&n("Dedicación de una iglesia",Jl),(o.includes("bautismo")||o.includes("bautismal"))&&n("Bautismo",jl),(o.includes("confirmacion")||o.includes("confirmaci")||o.includes("crisma"))&&n("Confirmación",Ul),(o.includes("ordenacion")||o.includes("ordenaci")||o.includes("crismal")||o.includes("sacerdote")||o.includes("presbiter"))&&(n("Ordenaciones I",Hl),n("Ordenaciones II",xl)),(o.includes("matrimonio")||o.includes("boda")||o.includes("esposos"))&&n("Matrimonio",Vl),(o.includes("difunto")||o.includes("difuntos")||o.includes("exequias")||o.includes("funeral"))&&(n("Difuntos I",Fl),n("Difuntos II",wl),n("Difuntos III",kl),n("Difuntos IV",Bl),n("Difuntos V",Yl)),(o.includes("advent")||o.includes("adviento"))&&(n("Adviento I",_E),n("Adviento II",zE)),(o.includes("christmas")||o.includes("navidad")||o.includes("natividad"))&&(n("Navidad I",JE),n("Navidad II",jE),n("Navidad III",Kl)),(o.includes("lent")||o.includes("cuaresma"))&&(n("Cuaresma I",HE),n("Cuaresma II",xE),n("Cuaresma III",VE),n("Cuaresma IV",FE)),(o.includes("pasion")||o.includes("ramos")||o.includes("semana santa")||o.includes("viernes santo"))&&(n("Pasión I",wE),n("Pasión II",kE)),(o.includes("easter")||o.includes("pascua"))&&(n("Pascua I",BE),n("Pascua II",YE),n("Pascua III",GE),n("Pascua IV",QE),n("Pascua V",WE)),o.includes("ascension")&&(n("Ascensión II",Xl),n("Después de la Ascensión",KE)),a==="SUNDAY"&&o.includes("ordinary_time")&&(n("Dominical I",ZE),n("Dominical II",eA),n("Dominical III",oA),n("Dominical IV",aA),n("Dominical V",sA),n("Dominical VI",nA),n("Dominical VII",rA),n("Dominical VIII",iA)),(o.includes("maria")||o.includes("virgen"))&&(n("Santa María I",tA),n("Santa María II",lA),n("Santa María III",cA),n("Santa María IV",uA)),(o.includes("apostol")||o.includes("apostle")||o.includes("evangelist"))&&(n("Apóstoles I",DE),n("Apóstoles II",Gl)),(o.includes("martir")||o.includes("martyr"))&&(n("Mártires I",$E),n("Mártires II",Wl)),(o.includes("obispo")||o.includes("bishop")||o.includes("pastor")||o.includes("papa")||o.includes("pope")||o.includes("presbiter"))&&n("Pastores",TE),(o.includes("abad")||o.includes("abbot")||o.includes("religios")||o.includes("virgen")||o.includes("virgin")||o.includes("monj"))&&n("Religiosos",LE),(o.includes("sant")||o.includes("saint"))&&(n("Santos I",RE),n("Santos II",Ql)),s.push({label:"Común I",content:AE},{label:"Común II",content:PE},{label:"Común III",content:qE},{label:"Común IV",content:IE},{label:"Común V",content:CE},{label:"Común VI",content:OE},{label:"Transfiguración",content:Zl},{label:"Unidad de la Iglesia",content:zl},{label:"Dedicación de una iglesia",content:Jl},{label:"Bautismo",content:jl},{label:"Confirmación",content:Ul},{label:"Ordenaciones I",content:Hl},{label:"Ordenaciones II",content:xl},{label:"Matrimonio",content:Vl},{label:"Difuntos I",content:Fl},{label:"Difuntos II",content:wl},{label:"Difuntos III",content:kl},{label:"Difuntos IV",content:Bl},{label:"Difuntos V",content:Yl},{label:"Navidad III",content:Kl},{label:"Ascensión II",content:Xl},{label:"Apóstoles II",content:Gl},{label:"Mártires II",content:Wl},{label:"Santos II",content:Ql},{label:"Diversas I - unidad",content:VA},{label:"Diversas II - salvación",content:FA},{label:"Diversas III - camino",content:wA},{label:"Diversas IV - caridad",content:kA},{label:"PE IV",content:MA},{label:"Reconciliación I",content:zA},{label:"Reconciliación II",content:UA}),s.filter((r,i,t)=>t.findIndex(l=>l.label===r.label)===i).map(r=>({...r,content:$d(r.content,e)}))}const Nd=`$Sacerdote/diácono.$ Señor, ten piedad.

$Pueblo.$ Señor, ten piedad.

$Sacerdote/diácono.$ Cristo, ten piedad.

$Pueblo.$ Cristo, ten piedad.

$Sacerdote/diácono.$ Señor, ten piedad.

$Pueblo.$ Señor, ten piedad.`,zi=`$Sacerdote.$ Dios todopoderoso tenga misericordia de nosotros, perdone nuestros pecados y nos lleve a la vida eterna.

$Pueblo.$ Amén.`,Ji="$Sacerdote.$ Hermanos: para celebrar dignamente estos sagrados misterios, reconozcamos nuestros pecados.",hq="$Sacerdote.$ Humildes y penitentes, como el publicano en el templo, acerquémonos al Dios justo, y pidámosle que tenga piedad de nosotros, que también nos reconocemos pecadores.",Eq="$Sacerdote.$ Jesucristo, el justo, intercede por nosotros y nos reconcilia con el Padre. Abramos, pues, nuestro espíritu al arrepentimiento, para acercarnos a la mesa del Señor.",Aq="$Sacerdote.$ Pidamos perdón a Dios de todo corazón.",Pq=`$Todos.$ Yo confieso ante Dios todopoderoso y ante vosotros, hermanos, que he pecado mucho de pensamiento, palabra, obra y omisión.

$Todos.$ Por mi culpa, por mi culpa, por mi gran culpa. Por eso ruego a santa María, siempre Virgen, a los ángeles, a los santos y a vosotros, hermanos, que intercedáis por mí ante Dios, nuestro Señor.`;function wa(e){return[Ji,`$Sacerdote/diácono.$ ${e[0]}: Señor, ten piedad.`,"$Pueblo.$ Señor, ten piedad.",`$Sacerdote/diácono.$ ${e[1]}: Cristo, ten piedad.`,"$Pueblo.$ Cristo, ten piedad.",`$Sacerdote/diácono.$ ${e[2]}: Señor, ten piedad.`,"$Pueblo.$ Señor, ten piedad.",zi].join(`

`)}function ks(e=Ji){return[e,Pq,zi,Nd].join(`

`)}const qq=`${Ji}

$Sacerdote/diácono.$ Tú que has sido enviado a sanar los corazones afligidos: Señor, ten piedad.

$Pueblo.$ Señor, ten piedad.

$Sacerdote/diácono.$ Tú que has venido a llamar a los pecadores: Cristo, ten piedad.

$Pueblo.$ Cristo, ten piedad.

$Sacerdote/diácono.$ Tú que estás sentado a la derecha del Padre para interceder por nosotros: Señor, ten piedad.

$Pueblo.$ Señor, ten piedad.

${zi}`,Iq=`$Sacerdote.$ El Señor Jesús, que nos invita a la mesa de la Palabra y de la Comunión, nos llama ahora a la conversión. Reconozcamos, pues, que somos pecadores e invoquemos con esperanza la misericordia de Dios.

$Sacerdote/diácono.$ Luz del mundo, que vienes a iluminar a todos los que viven en las tinieblas del pecado: Señor, ten piedad.

$Pueblo.$ Señor, ten piedad.

$Sacerdote/diácono.$ Buen pastor, que vienes a guiar a tu rebaño por las sendas de la verdad y la justicia: Cristo, ten piedad.

$Pueblo.$ Cristo, ten piedad.

$Sacerdote/diácono.$ Hijo de Dios, que volverás un día para dar cumplimiento a las promesas del Padre: Señor, ten piedad.

$Pueblo.$ Señor, ten piedad.

$Sacerdote.$ Dios todopoderoso tenga misericordia de nosotros, perdone nuestros pecados y nos lleve a la vida eterna.

$Pueblo.$ Amén.`,Cq=wa(["Tú que eres el Camino que conduce al Padre","Tú que eres la Verdad que ilumina a los pueblos","Tú que eres la Vida que renueva el mundo"]),Oq=wa(["Tú que eres la plenitud de la verdad y de la gracia","Tú que te has hecho pobre para enriquecernos","Tú que has venido para hacer de nosotros tu pueblo santo"]),Dq=wa(["Tú que no has venido a condenar, sino a perdonar","Tú que has dicho que hay gran fiesta en el cielo por un pecador que se arrepiente","Tú que perdonas mucho a quien mucho ama"]),Rq=wa(["Tú que has venido a buscar al que estaba perdido","Tú que has querido dar la vida en rescate por todos","Tú que reúnes a tus hijos dispersos"]),$q=wa(["Tú que ofreciste el perdón a Pedro arrepentido","Tú que prometiste el paraíso al buen ladrón","Tú que perdonas a todo hombre que confía en tu misericordia"]),Tq=wa(["Defensor de los pobres","Refugio de los débiles","Esperanza de los pecadores"]),Lq=`$Sacerdote.$ Hermanos: ¿Renunciáis al pecado, para vivir en la libertad de los hijos de Dios?

$Pueblo.$ Sí, renuncio.

$Sacerdote.$ ¿Renunciáis a las seducciones del Maligno, para que no domine en vosotros el pecado?

$Pueblo.$ Sí, renuncio.

$Sacerdote.$ ¿Renunciáis a Satanás, padre y príncipe del pecado?

$Pueblo.$ Sí, renuncio.

$Sacerdote.$ Dios todopoderoso tenga misericordia de nosotros, perdone nuestros pecados y nos lleve a la vida eterna.

$Pueblo.$ Amén.`,Mq=`$Coro/cantor.$ Ofrezcan los cristianos
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
en tu victoria santa.`,Nq=`$Coro/cantor.$ Ven, Espíritu divino,
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
Amén.`,_q=`$Coro/cantor.$ Este es el pan de los ángeles,
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
Amén.`,zq=`$Coro/cantor.$ Estaba la Madre dolorosa
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
Amén.`;function Jq(e){const o=so(e),a=Md(e.date);if(o.includes("pentecost"))return{label:"Pentecostés",content:Nq,required:!0};if(a!==void 0&&a>=0&&a<=7)return{label:"Pascua",content:Mq,required:a===0};if(o.includes("corpus")||o.includes("cuerpo y sangre"))return{label:"Corpus Christi",content:_q,required:!1};if(o.includes("dolores")&&(o.includes("maria")||o.includes("virgen")))return{label:"Nuestra Señora de los Dolores",content:zq,required:!1}}function lo(e,o,a,s){e.push(a(s))}function jq(e){const o=Jq(e);if(o)return se("Secuencia",[`$Rúbrica.$ ${o.required?"Obligatoria":"Opcional"} en ${o.label}; se canta antes del Aleluya.`,o.content].join(`

`),!0)}function Uq(e){const o=Sq(e);return ze("Aclamación antes del Evangelio",[{label:o.label,content:yq(e,o.verse)},{label:"Omitida",content:"$Rúbrica.$ Si no se canta, el Aleluya o el versículo antes del Evangelio puede omitirse según la Instrucción General del Misal Romano."}],!0)}function _d(e,o,a){const s=[];return s.push(Ja("Antífona de entrada","Antífona de entrada",e),se("Señal de la cruz",`$Sacerdote.$ En el nombre del Padre, y del Hijo, y del Espíritu Santo.

$Pueblo.$ Amén.`,!0),ze("Saludo inicial",[{label:"El Señor esté",content:`$Sacerdote.$ El Señor esté con vosotros.

$Pueblo.$ Y con tu espíritu.`},{label:"La gracia",content:`$Sacerdote.$ La gracia de nuestro Señor Jesucristo, el amor del Padre y la comunión del Espíritu Santo estén con todos vosotros.

$Pueblo.$ Y con tu espíritu.`},{label:"Gracia y paz",content:`$Sacerdote.$ La gracia y la paz de Dios, nuestro Padre, y de Jesucristo, el Señor, estén con todos vosotros.

$Pueblo.$ Y con tu espíritu.`},{label:"Dirige corazones",content:`$Sacerdote.$ El Señor, que dirige nuestros corazones para que amemos a Dios, esté con todos vosotros.

$Pueblo.$ Y con tu espíritu.`},{label:"La paz",content:`$Sacerdote.$ La paz, la caridad y la fe, de parte de Dios Padre, y de Jesucristo, el Señor, estén con todos vosotros.

$Pueblo.$ Y con tu espíritu.`},{label:"Dios esperanza",content:`$Sacerdote.$ El Dios de la esperanza, que por la acción del Espíritu Santo nos colma con su alegría y con su paz, permanezca siempre con todos vosotros.

$Pueblo.$ Y con tu espíritu.`},{label:"Alegría y paz",content:`$Sacerdote.$ Queridos hermanos: Que Dios os llene de alegría y de paz en la fe, y que el Espíritu Santo esté siempre con vosotros.

$Pueblo.$ Y con tu espíritu.`},{label:"Obispo",content:`$Obispo.$ La paz esté con vosotros.

$Pueblo.$ Y con tu espíritu.`}],!0),ze("Monición inicial",[{label:"Omitida",content:"$Rúbrica.$ Si no se hace monición inicial, se continúa directamente con el acto penitencial."},{label:"Breve",content:`$Rúbrica.$ Si se hace una monición inicial, se usa una monición breve preparada para ${ZP(e)}.`}],!0)),fc(e)&&s.push(...VP(e)),ra(e)||Od(e)||fc(e)||(lo(s,e,o,"penitencial"),s.push(ze("Acto penitencial y Señor, ten piedad",[{label:"Invocaciones",content:qq},{label:"Luz del mundo",content:Iq},{label:"Camino",content:Cq},{label:"Plenitud",content:Oq},{label:"No condenar",content:Dq},{label:"Buscar perdido",content:Rq},{label:"Pedro",content:$q},{label:"Defensor",content:Tq},{label:"Yo confieso",content:ks()},{label:"Humildes",content:ks(hq)},{label:"Cristo justo",content:ks(Eq)},{label:"Perdón",content:ks(Aq)},{label:"Ten misericordia",content:`$Sacerdote.$ Señor, ten misericordia de nosotros.

$Pueblo.$ Porque hemos pecado contra ti.

$Sacerdote.$ Muéstranos, Señor, tu misericordia.

$Pueblo.$ Y danos tu salvación.

$Sacerdote.$ Dios todopoderoso tenga misericordia de nosotros, perdone nuestros pecados y nos lleve a la vida eterna.

$Pueblo.$ Amén.

`+Nd},{label:"Renuncias",content:Lq},{label:"Aspersión I",content:bA},{label:"Aspersión II",content:yA},{label:"Aspersión pascual",content:vA}],!0))),a&&(lo(s,e,o,"gloria"),s.push(se("Gloria",dE,!0))),s.push(Ja("Oración colecta","Colecta",e,"$Sacerdote.$ Oremos.")),s}function Hq(e){const o=so(e),a=e.celebration?.trim()||"esta celebración";if(Cd(e))return Dd();const s={label:"Libre",content:`$Sacerdote.$ Oremos, hermanos, al Señor, que conoce las necesidades de su Iglesia y del mundo entero.

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

$Sacerdote.$ Señor, fuente de toda santidad, escucha nuestras súplicas y haznos crecer en tu amor. Por Jesucristo, nuestro Señor.`},f=[n];o.includes("advent")?f.unshift(i):o.includes("christmas")||o.includes("navidad")||o.includes("epifania")||o.includes("bautismo")?f.unshift(t):o.includes("lent")||o.includes("cuaresma")||o.includes("ramos")?f.unshift(l):o.includes("easter")||o.includes("pascua")||o.includes("ascension")||o.includes("pentecost")?f.unshift(u):o.includes("apostol")||o.includes("evangelista")?f.unshift(c):o.includes("martir")||o.includes("martyr")?f.unshift(r):(e.rank?.toUpperCase()==="SOLEMNITY"||e.rank?.toUpperCase()==="FEAST")&&f.unshift(m),f.push(r,c,i,t,l,u,m,s);const h=f.filter((C,O,J)=>J.findIndex(H=>H.label===C.label)===O);return ze("Oración universal",h,!0)}function zd(e,o,a){const s=[se("Homilía",`$Rúbrica.$ Homilía.

$Rúbrica.$ Puede guardarse un momento de silencio.`,!0)];return dn(e)?(s.push(jP()),s):(Od(e)&&s.push(JP()),ra(e)&&s.push(zP()),o&&(a&&lo(s,e,a,"credo"),s.push(ze("Profesión de fe",[{label:"Niceno",content:mE},{label:"Apostólico",content:pE},{label:"Bautismal",content:EE}],!0))),s.push(Hq(e)),s)}function Jd(e,o){const a=[];return dn(e)&&a.push(se("Procesión de los óleos y de las ofrendas",qP,!0)),lo(a,e,o,"ofertorio"),a.push(ze("Presentación de los dones",[{label:"En voz alta",content:vE},{label:"Con canto",content:hE}],!0),ze("Orad, hermanos",[{label:"Mío y vuestro",content:`$Sacerdote.$ Orad, hermanos, para que este sacrificio, mío y vuestro, sea agradable a Dios, Padre todopoderoso.

${fr}`},{label:"Toda la Iglesia",content:`$Sacerdote.$ En el momento de ofrecer el sacrificio de toda la Iglesia, oremos a Dios, Padre todopoderoso.

${fr}`},{label:"Gozos y fatigas",content:`$Sacerdote.$ Orad, hermanos, para que, llevando al altar los gozos y las fatigas de cada día, nos dispongamos a ofrecer el sacrificio agradable a Dios, Padre todopoderoso.

${fr}`}],!0),Ja("Oración sobre las ofrendas","Sobre las ofrendas",e),ze("Monición a la plegaria eucarística",[{label:"Omitida",content:"$Rúbrica.$ Si no se hace monición, el sacerdote inicia directamente el diálogo del prefacio."},{label:"Breve",content:`$Rúbrica.$ Si se hace una monición antes de la plegaria eucarística, se usa una monición breve preparada para esta celebración.

$Rúbrica.$ No se canta de fondo durante las oraciones presidenciales.`}],!0),ze("Prefacio",vq(e),!0),se("Diálogo del prefacio",`$Sacerdote.$ El Señor esté con vosotros.

$Pueblo.$ Y con tu espíritu.

$Sacerdote.$ Levantemos el corazón.

$Pueblo.$ Lo tenemos levantado hacia el Señor.

$Sacerdote.$ Demos gracias al Señor, nuestro Dios.

$Pueblo.$ Es justo y necesario.`,!0)),lo(a,e,o,"santo"),a.push(se("Santo",fE,!0)),a.push(ze("Plegaria eucarística",[...rq(e),...lq(e),...mq(e),{label:"IV",content:NA},{label:"Reconciliación I",content:JA},{label:"Reconciliación II",content:HA},{label:"Diversas circunstancias",content:BA}],!0)),lo(a,e,o,"memorial"),a.push(ze("Monición y aclamación memorial",[{label:"Sacramento / Anunciamos",content:`$Sacerdote.$ Este es el Sacramento de nuestra fe.

$Pueblo.$ Anunciamos tu muerte, proclamamos tu resurrección. ¡Ven, Señor Jesús!`},{label:"Misterio / Anunciamos",content:`$Sacerdote.$ Este es el Misterio de la fe.

$Pueblo.$ Anunciamos tu muerte, proclamamos tu resurrección. ¡Ven, Señor Jesús!`},{label:"Aclamemos / Cada vez",content:`$Sacerdote.$ Aclamemos el Misterio de la fe.

$Pueblo.$ Cada vez que comemos de este pan y bebemos de este cáliz, anunciamos tu muerte, Señor, hasta que vuelvas.`},{label:"Cristo nos redimió / Cada vez",content:`$Sacerdote.$ Este es el Misterio de nuestra fe. Cristo nos redimió.

$Pueblo.$ Cada vez que comemos de este pan y bebemos de este cáliz, anunciamos tu muerte, Señor, hasta que vuelvas.`},{label:"Cristo se entregó / Salvador",content:`$Sacerdote.$ Este es el Misterio de la fe. Cristo se entregó por nosotros.

$Pueblo.$ Sálvanos, Salvador del mundo, que nos has liberado por tu cruz y resurrección.`},{label:"Este es / Por tu cruz",content:`$Sacerdote.$ Este es el Misterio de la fe.

$Pueblo.$ Por tu cruz y resurrección nos has salvado, Señor.`},{label:"Salvador",content:`$Sacerdote.$ Este es el Misterio de la fe.

$Pueblo.$ Sálvanos, Salvador del mundo, que nos has liberado por tu cruz y resurrección.`}],!0)),a.push(ze("Continuación de la plegaria eucarística",[{label:"I",content:DA},...cq(e),...pq(e),{label:"IV",content:_A},{label:"Reconciliación I",content:jA},{label:"Reconciliación II",content:xA},{label:"Diversas I - unidad",content:YA},{label:"Diversas II - salvación",content:GA},{label:"Diversas III - camino",content:QA},{label:"Diversas IV - caridad",content:WA}],!0)),dn(e)&&a.push(UP()),lo(a,e,o,"amen"),a.push(ze("Doxología final y gran Amén",[{label:"Amén final",content:`$Sacerdote.$ Por Cristo, con él y en él, a ti, Dios Padre omnipotente, en la unidad del Espíritu Santo, todo honor y toda gloria por los siglos de los siglos.

$Pueblo.$ Amén.`},{label:"Amén intercalado",content:`$Sacerdote.$ Por Cristo, con él y en él.

$Coro/pueblo.$ Amén.

$Sacerdote.$ A ti, Dios Padre omnipotente, en la unidad del Espíritu Santo.

$Coro/pueblo.$ Amén.

$Sacerdote.$ Todo honor y toda gloria por los siglos de los siglos.

$Coro/pueblo.$ Amén.

$Rúbrica.$ Usar sólo si la musicalización está aprobada y el sacerdote mantiene íntegra la doxología que le corresponde.`}],!0)),a}function jd(e,o){const a=[];return lo(a,e,o,"padrenuestro"),a.push(ze("Padrenuestro",[{label:"Fieles",content:["$Sacerdote.$ Fieles a la recomendación del Salvador y siguiendo su divina enseñanza, nos atrevemos a decir:",pa(e.lordPrayerLanguage)].join(`

`)},{label:"Hijos de Dios",content:["$Sacerdote.$ Llenos de alegría por ser hijos de Dios, digamos confiadamente la oración que Cristo nos enseñó:",pa(e.lordPrayerLanguage)].join(`

`)},{label:"Amor de Dios",content:["$Sacerdote.$ El amor de Dios ha sido derramado en nuestros corazones con el Espíritu Santo que se nos ha dado; digamos con fe y esperanza:",pa(e.lordPrayerLanguage)].join(`

`)},{label:"Banquete",content:["$Sacerdote.$ Antes de participar en el banquete de la Eucaristía, signo de reconciliación y vínculo de unión fraterna, oremos juntos como el Señor nos ha enseñado:",pa(e.lordPrayerLanguage)].join(`

`)}]),se("Embolismo",gE,!0),se("Rito de la paz",SE,!0)),lo(a,e,o,"cordero"),a.push(se("Cordero de Dios",`$Todos.$ Cordero de Dios, que quitas el pecado del mundo, ten piedad de nosotros.

$Todos.$ Cordero de Dios, que quitas el pecado del mundo, ten piedad de nosotros.

$Todos.$ Cordero de Dios, que quitas el pecado del mundo, danos la paz.`,!0),ze("Comunión del sacerdote",[{label:"Hijo de Dios vivo",content:bE},{label:"No sea juicio",content:yE}],!0),se("Invitación a la comunión",`$Sacerdote.$ Este es el Cordero de Dios, que quita el pecado del mundo. Dichosos los invitados a la cena del Señor.

$Todos.$ Señor, no soy digno de que entres en mi casa, pero una palabra tuya bastará para sanarme.`,!0)),lo(a,e,o,"comunion"),a.push(Ja("Antífona de comunión","Antífona de comunión",e),se("Comunión de los fieles",`$Sacerdote/ministro.$ El Cuerpo de Cristo.

$Fiel.$ Amén.`,!0)),lo(a,e,o,"meditacion"),a.push(Ja("Oración después de la comunión","Después de la comunión",e,"$Sacerdote.$ Oremos.")),dn(e)&&a.push(...HP()),a}function xq(e){const o=so(e),a=e.rank?.toUpperCase(),s=e.date?.getMonth(),n=e.date?.getDate(),r=s===0&&n===1,i=o.includes("easter")||o.includes("pascua"),t=[],l=(u,c)=>{t.push({label:u,content:c})};return(o.includes("epifania")||o.includes("epiphany"))&&l("Solemne Epifanía",dc),(o.includes("pentecost")||o.includes("espiritu santo")||o.includes("holy spirit"))&&l("Solemne Espíritu Santo",mc),(o.includes("adviento")||o.includes("advent"))&&l("Solemne Adviento",lc),(r||o.includes("ano nuevo")||o.includes("new year"))&&l("Solemne Año Nuevo",uc),(o.includes("navidad")||o.includes("christmas")||o.includes("natividad"))&&l("Solemne Navidad",cc),_i(e)&&l("Solemne Cuaresma",ic),i&&l("Solemne Pascua",tc),(o.includes("maria")||o.includes("mary")||o.includes("virgen")||o.includes("guadalupe"))&&l("Solemne Santa María",pc),(/\bsan\b/.test(o)||/\bsanta\b/.test(o)||/\bsanto\b/.test(o)||/\bsantos\b/.test(o)||o.includes("saint")||o.includes("martir")||o.includes("martyr")||o.includes("apostol")||o.includes("apostle")||o.includes("evangelist"))&&l("Solemne santo",rc),a==="SUNDAY"&&(o.includes("ordinary_time")||o.includes("tiempo ordinario"))&&(l("Solemne TO I",sc),l("Solemne TO II",nc)),t.push({label:"Simple",content:`$Sacerdote.$ El Señor esté con vosotros.

$Pueblo.$ Y con tu espíritu.

$Sacerdote.$ La bendición de Dios todopoderoso, Padre, Hijo y Espíritu Santo, descienda sobre vosotros.

$Pueblo.$ Amén.`},{label:"Solemne Adviento",content:lc},{label:"Solemne Navidad",content:cc},{label:"Solemne Año Nuevo",content:uc},{label:"Solemne Epifanía",content:dc},{label:"Solemne Cuaresma",content:ic},{label:"Solemne Pascua",content:tc},{label:"Solemne Espíritu Santo",content:mc},{label:"Solemne Santa María",content:pc},{label:"Solemne TO I",content:sc},{label:"Solemne TO II",content:nc},{label:"Solemne santo",content:rc},{label:"Sobre el pueblo I",content:KA},{label:"Sobre el pueblo II",content:XA},{label:"Sobre el pueblo III",content:ZA},{label:"Sobre santos",content:eP},{label:"Sobre pueblo Cuaresma I domingo",content:oP},{label:"Sobre pueblo Cuaresma I lunes",content:aP},{label:"Sobre pueblo Cuaresma I martes",content:sP},{label:"Sobre pueblo Cuaresma I miércoles",content:nP},...rP),t.filter((u,c,m)=>m.findIndex(f=>f.label===u.label)===c)}function Ud(e,o){const a=[{label:"Podéis ir",content:`$Sacerdote/diácono.$ Podéis ir en paz.

$Pueblo.$ Demos gracias a Dios.`},{label:"Anunciad",content:`$Sacerdote/diácono.$ Anunciad a todos la alegría del Señor resucitado. Podéis ir en paz.

$Pueblo.$ Demos gracias a Dios.`},{label:"Glorificad",content:`$Sacerdote/diácono.$ Glorificad al Señor con vuestra vida. Podéis ir en paz.

$Pueblo.$ Demos gracias a Dios.`},{label:"En el nombre",content:`$Sacerdote/diácono.$ En el nombre del Señor, podéis ir en paz.

$Pueblo.$ Demos gracias a Dios.`}];LP(e)&&a.unshift({label:"Aleluya",content:`$Sacerdote/diácono.$ Podéis ir en paz, aleluya, aleluya.

$Pueblo.$ Demos gracias a Dios, aleluya, aleluya.`});const s=[ze("Avisos",[{label:"Omitidos",content:"$Rúbrica.$ Si no hay avisos necesarios, se continúa con la bendición."},{label:"Breves",content:"$Rúbrica.$ Se dan, si procede, los avisos necesarios."}],!0),Ja("Oración sobre el pueblo","Oración sobre el pueblo",e,"$Diácono/sacerdote.$ Inclinaos para recibir la bendición.","$Pueblo.$ Amén.",""),ze("Bendición",xq(e),!0),ze("Despedida",a,!0),se("Veneración del altar","$Sacerdote y ministros.$ Veneran el altar y se retiran.",!0)];return lo(s,e,o,"final"),s}let br;async function Rs(){return br??=$n(()=>import("./breviarium-t_WgACFJ.js"),[],import.meta.url).then(e=>e.default).catch(e=>{throw br=void 0,e}),br}const Vq=new Set(["laudes","vesperae","evangelium"]),Hd="__optionInfo",xd="__optionLabel",yr=new Map,Fq=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],wq={monday:"Lunes",tuesday:"Martes",wednesday:"Miércoles",thursday:"Jueves",friday:"Viernes",saturday:"Sábado",sunday:"Domingo"},kq={charles_lwanga_and_companions_martyrs:"Santos Carlos Luanga y compañeros, mártires",justin_martyr:"San Justino, mártir",most_holy_trinity:"Santísima Trinidad",most_holy_body_and_blood_of_christ:"Corpus Christi",most_sacred_heart_of_jesus:"Sagrado Corazón de Jesús",nativity_of_john_the_baptist:"Natividad de san Juan Bautista",our_lord_jesus_christ_king_of_the_universe:"Nuestro Señor Jesucristo, Rey del Universo",passion_of_saint_john_the_baptist:"Martirio de San Juan Bautista"},Vd={agatha:"Águeda",agnes:"Inés",alphonsus:"Alfonso",ambrose:"Ambrosio",andrew:"Andrés",anthony:"Antonio",augustine:"Agustín",barnabas:"Bernabé",bartholomew:"Bartolomé",basil:"Basilio",benedict:"Benito",bonaventure:"Buenaventura",boniface:"Bonifacio",catherine:"Catalina",charles:"Carlos",christ:"Cristo",dominic:"Domingo",francis:"Francisco",gregory:"Gregorio",ignatius:"Ignacio",irenaeus:"Ireneo",isidore:"Isidoro",james:"Santiago",jerome:"Jerónimo",joachim:"Joaquín",john:"Juan",joseph:"José",justin:"Justino",lawrence:"Lorenzo",lord:"Señor",luke:"Lucas",mark:"Marcos",mary:"María",matthew:"Mateo",michael:"Miguel",paul:"Pablo",peter:"Pedro",philip:"Felipe",pius:"Pío",thomas:"Tomás"},Fd={abbot:"abad",apostle:"apóstol",apostles:"apóstoles",bishop:"obispo",bishops:"obispos",companions:"compañeros",deacon:"diácono",doctor:"doctor",evangelist:"evangelista",martyr:"mártir",martyrs:"mártires",pope:"papa",priest:"presbítero",priests:"presbíteros",religious:"religioso",virgin:"virgen",virgins:"vírgenes"},vr=new Map([["FIRSTLECTURE",10],["CELEBRATION_FIRSTLECTURE",10],["PSALM",20],["CELEBRATION_PSALM",20],["SECONDLECTURE",30],["CELEBRATION_SECONDLECTURE",30],["SECONDPSALM",40],["THIRDLECTURE",50],["THIRDPSALM",60],["FOURTHLECTURE",70],["FOURTHPSALM",80],["FIFTHLECTURE",90],["FIFTHPSALM",100],["SIXTHLECTURE",110],["SIXTHPSALM",120],["SEVENTHLECTURE",130],["SEVENTHPSALM",140],["EIGHTHLECTURE",150],["ACCLAMATION",160],["CELEBRATION_ACCLAMATION",160],["GOSPEL",170],["CELEBRATION_GOSPEL",170]]),Bq={FIRSTLECTURE:"Primera lectura",CELEBRATION_FIRSTLECTURE:"Primera lectura",PSALM:"Salmo responsorial",CELEBRATION_PSALM:"Salmo responsorial",SECONDLECTURE:"Segunda lectura",CELEBRATION_SECONDLECTURE:"Segunda lectura",SECONDPSALM:"Salmo responsorial II",THIRDLECTURE:"Tercera lectura",THIRDPSALM:"Salmo responsorial III",FOURTHLECTURE:"Cuarta lectura",FOURTHPSALM:"Salmo responsorial IV",FIFTHLECTURE:"Quinta lectura",FIFTHPSALM:"Salmo responsorial V",SIXTHLECTURE:"Sexta lectura",SIXTHPSALM:"Salmo responsorial VI",SEVENTHLECTURE:"Séptima lectura",SEVENTHPSALM:"Salmo responsorial VII",EIGHTHLECTURE:"Epístola",ACCLAMATION:"Aclamación antes del Evangelio",CELEBRATION_ACCLAMATION:"Aclamación antes del Evangelio",GOSPEL:"Evangelio",CELEBRATION_GOSPEL:"Evangelio"},yc={invitatorium:"Invitatorio",officium:"Oficio",laudes:"Laudes",tertia:"Tercia",sexta:"Sexta",nona:"Nona",vesperae:"Vísperas",completorium:"Completas",evangelium:"Misa"};function Yq(e=new Date){const o=e.getHours()*60+e.getMinutes();return o<210?"officium":o<450?"laudes":o<630?"tertia":o<810?"sexta":o<990?"nona":o<1170?"vesperae":o<1410?"completorium":"officium"}async function ia(e,o){const a=await Rs(),s=new a(e),n=await s.getLiturgyInformation(e);let r;switch(o){case"invitatorium":{const[t,l]=await Promise.all([s.getInvitatorium(e),s.getInvitatoriumPsalms()]);r=[{...t,psalmTitle:l[0]?.title,psalm:l[0]?.psalm,__invitatoryPsalms:l}];break}case"officium":r=await s.getOfficium(e);break;case"laudes":{const[t,l,u]=await Promise.all([s.getLaudes(e),s.getInvitatorium(e),s.getInvitatoriumPsalms()]);r=t?.map(c=>({...c,__invitatoryAntiphon:l?.val,__invitatoryPsalm:u[0]?.psalm,__invitatoryPsalmTitle:u[0]?.title,__invitatoryPsalms:u}));break}case"tertia":r=await s.getTertia(e);break;case"sexta":r=await s.getSexta(e);break;case"nona":r=await s.getNona(e);break;case"vesperae":r=await s.getVesperae(e);break;case"completorium":r=await s.getCompletorium(e);break;case"evangelium":r=TI(await s.getLectures(e),e,n);break}const i=Vq.has(o)?r??[]:r?[r]:[];return{info:n,options:i.filter(Qq)}}async function Gq(e,o){const a=await oI(e,o);if(a)return a;let s;try{s=await ia(e,o)}catch(n){const r=await Ec(e,o);if(r)return r;throw n}if(!s.options.length){const n=await Ec(e,o);if(n)return n}return await rI(e,o,s)??await iI(e,o,s)??s}function vc(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function ja(e,o){return new Date(e.getFullYear(),e.getMonth(),e.getDate()+o)}function Ua(e,o){return vc(e)===vc(o)}function $s(e){const o=e%19,a=Math.floor(e/100),s=e%100,n=Math.floor(a/4),r=a%4,i=Math.floor((a+8)/25),t=Math.floor((a-i+1)/3),l=(19*o+a-n-t+15)%30,u=Math.floor(s/4),c=s%4,m=(32+2*r+2*u-l-c)%7,f=Math.floor((o+11*l+22*m)/451),h=Math.floor((l+m-7*f+114)/31),C=(l+m-7*f+114)%31+1;return new Date(e,h-1,C)}function ji(e){const o=$s(e);return{thursday:ja(o,60),sunday:ja(o,63)}}function wd(e){const o=$s(e);return{thursday:ja(o,39),sunday:ja(o,42)}}function Qq(e){return typeof e=="object"&&e!==null}function Wq(e){const o=e[Hd];return typeof o=="object"&&o!==null?o:void 0}function Kq(e){return e?Wq(e):void 0}function Mo(e,o,a){return{...e,[xd]:o,[Hd]:a}}function Xq(e){return{...e,color:"WHITE",celebration:"Corpus Christi",rank:"SOLEMNITY"}}function Oa(e,o){return{...e,cycle:o??e.cycle}}function kd(e){const o=e.options[0]?.id;return typeof o=="string"?o:""}function Zq(e){const o=e.match(/^ordinary_time_(\d+)_sunday$/);return o?`ordinary_time_${Number(o[1])-1}_thursday`:""}function Bd(e,o){return`ordinary_time_${e}_${Fq[o]??""}`}async function Yd(e,o,a){if(!e)return;const s=`${e}::${o}::${a.getFullYear()}`;return yr.has(s)||yr.set(s,(async()=>{for(let n=0;n<=10;n+=1){const r=n===0?[a.getFullYear()]:[a.getFullYear()-n,a.getFullYear()+n];for(const i of r)for(let t=0;t<=11;t+=1)for(let l=1;l<=31;l+=1){const u=new Date(i,t,l);if(!(u.getMonth()!==t||Ua(u,a)))try{const c=await ia(u,o);if(kd(c)===e)return c}catch{continue}}}})()),yr.get(s)}async function hc(e,o){const{thursday:a,sunday:s}=ji(e.getFullYear()),r=await ia(o==="evangelium"?s:a,o);return{...r,info:Xq(r.info)}}function eI(e){return{...e,celebration:"Ascensión del Señor",rank:"SOLEMNITY"}}async function oI(e,o){const{thursday:a,sunday:s}=wd(e.getFullYear());if(!Ua(e,s))return;const n=await ia(a,o);if(!n.options.length)return;const r=eI(n.info);return{info:r,options:n.options.map(i=>Mo(i,"Ascensión del Señor",r))}}function Ui(e){const o=e?.match(/(\d+)[.ºª]?\s*(?:domingo|semana)\s+del\s+Tiempo\s+Ordinario/i);return o?Number(o[1]):void 0}async function Gd(e){const o=await Rs();for(const a of[-3,-2,-1,1,2,3]){const s=ja(e,a);try{const n=await new o(s).getLiturgyInformation(s),r=Ui(n.celebration);if(n.seasons?.includes("ORDINARY_TIME")&&r)return r}catch{continue}}}function Qd(e,o){const a=e.seasons??[],s=o.seasons??[];return a.some(n=>s.includes(n))}async function Wd(e,o,a,s){const n=await Rs();for(let r=0;r<=10;r+=1){const i=r===0?[e.getFullYear()]:[e.getFullYear()-r,e.getFullYear()+r];for(const t of i)for(let l=0;l<=11;l+=1)for(let u=1;u<=31;u+=1){const c=new Date(t,l,u);if(!(c.getMonth()!==l||Ua(c,e)||c.getDay()!==e.getDay()))try{const m=await new n(c).getLiturgyInformation(c);if(m.rank!=="WEEKDAY"||!Qd(a,m)||Ui(m.celebration)!==s)continue;const f=await ia(c,o);if(f.options.length)return f}catch{continue}}}}function aI(e){const o=$s(e.getFullYear());return Math.round((e.getTime()-o.getTime())/(1440*60*1e3))}async function sI(e,o,a){const s=aI(e);for(let n=1;n<=10;n+=1)for(const r of[e.getFullYear()-n,e.getFullYear()+n]){const i=ja($s(r),s);if(i.getDay()===e.getDay())try{const t=await Rs(),l=await new t(i).getLiturgyInformation(i);if(l.rank!=="WEEKDAY"||!Qd(a,l))continue;const u=await ia(i,o);if(u.options.length)return u}catch{continue}}}async function Ec(e,o){const a=await Rs(),n=await new a(e).getLiturgyInformation(e),r=Ui(n.celebration)??await Gd(e);if(n.seasons?.includes("ORDINARY_TIME")&&r){const t=await Wd(e,o,n,r),l=Bd(r,e.getDay()),u=t??await Yd(l,o,e);return u?.options.length?{info:Oa(u.info,n.cycle),options:u.options.map(c=>Mo(c,"Ordinario",Oa(u.info,n.cycle)))}:void 0}const i=n.seasons?.includes("EASTER_TIME")?await sI(e,o,n):void 0;if(i?.options.length)return{info:Oa(i.info,n.cycle),options:i.options.map(t=>Mo(t,"Feria",Oa(i.info,n.cycle)))}}async function nI(e,o,a){const{sunday:s}=ji(e.getFullYear()),n=await ia(s,o),r=kd(n),i=Number(r.match(/^ordinary_time_(\d+)_sunday$/)?.[1]??0),t=i>0?i-1:await Gd(e),l=o==="evangelium"?Bd(t??0,4):Zq(r),u=await Yd(l,o,e)??(t?await Wd(e,o,a,t):void 0);if(u)return{...u,info:Oa(u.info,a.cycle)}}async function rI(e,o,a){const{thursday:s,sunday:n}=ji(e.getFullYear()),r=Ua(e,s),i=Ua(e,n);if(!r&&!i)return;if(r){const u=await nI(e,o,a.info);if(!u?.options.length)return;const c=await hc(e,o);return{info:u.info,options:[...u.options.map(m=>Mo(m,"Normal",u.info)),...c.options.map(m=>Mo(m,"Corpus Christi",c.info))]}}const t=await hc(e,o),l=Oa(a.info,a.info.cycle);return{info:t.info,options:[...t.options.map(u=>Mo(u,"Corpus Christi",t.info)),...a.options.map(u=>Mo(u,"Domingo ordinario",l))]}}async function iI(e,o,a){if(o!=="evangelium"||a.options.length)return;const{thursday:s,sunday:n}=wd(e.getFullYear());if(!Ua(e,n))return;const r=await ia(s,o);if(r.options.length)return{info:{...r.info,celebration:"Ascensión del Señor",rank:"SOLEMNITY"},options:r.options.map(i=>Mo(i,"Ascensión del Señor",r.info))}}function W(e,o){const a=e[o];return typeof a=="string"?a:""}function _n(e){return e.replaceAll(`salvación,
lograba por Cristo Jesús`,`salvación,
lograda por Cristo Jesús`)}function ya(e,o){const a=e[o];return Array.isArray(a)?a.filter(s=>typeof s=="string"&&V(s)):[]}function Ac(e){const o=e.match(/^\s*(?:\$?([VR])\.\s*\$?|\$?([\u2123\u211F])\.\s*\$?)/i);if(!o)return;const a=o[1]?.toUpperCase()??o[2];return a==="V"||a==="℣"?"V":"R"}function Kd(e){return e.replace(/^\s*(?:\$?[VR]\.\s*\$?|\$?[\u2123\u211F]\.\s*\$?)\s*/i,"").trim()}function hr(e,o){return`$${o==="V"?"℣":"℟"}. $${Kd(e)}`}function Pc(e){return e.length!==3?e:[hr(e[0],"R"),hr(e[1],"V"),hr(e[2],"R")]}function tI(e){const o=e.trim(),a=o.replace(/[.;:!?]+$/g,"").trim();return[...new Set([o,a].filter(V))]}function lI(e,o){const a=e.toLocaleLowerCase("es");for(const s of tI(o)){const n=a.lastIndexOf(s.toLocaleLowerCase("es"));if(n>0)return n}return-1}function La(e){const o=e.findIndex(c=>Ac(c)==="V"),s=e.map((c,m)=>Ac(c)==="R"?m:-1).filter(c=>c>=0)[1];if(o<0||s===void 0||e[o].includes("[[RESPONSORY_SPLIT]]"))return e;const n=e[o],r=n.match(/^\s*(?:\$?V\.\s*\$?|\$?\u2123\.\s*\$?)\s*/i)?.[0]??"",i=n.slice(r.length),t=lI(i,Kd(e[s]));if(t<=0)return e;const l=i.slice(0,t).trimEnd(),u=i.slice(t).trimStart();return e.map((c,m)=>m===o?`${r}${l} [[RESPONSORY_SPLIT]] ${u}`:c)}function Hi(e){return Array.isArray(e)?e.filter(o=>typeof o=="object"&&o!==null):[]}function xi(e){return Hi(e.__invitatoryPsalms).map(o=>({title:W(o,"title"),psalm:W(o,"psalm")})).filter(o=>V(o.title)&&V(o.psalm))}function mn(e){const o=e.match(/Salmo\s+(\d+)/i);return o?Number(o[1]):void 0}function cI(e,o){const a=mn(e);return a?`Salmo ${a}`:`Salmo ${o+1}`}function je(e){return W(e,"type").toUpperCase()}function qc(e){return e==="PSALM"||e==="CELEBRATION_PSALM"||e.endsWith("PSALM")}function Ha(e){return e==="GOSPEL"||e==="CELEBRATION_GOSPEL"}function Er(e){return e==="ACCLAMATION"||e==="CELEBRATION_ACCLAMATION"}function uI(e){return(e.split(":").pop()?.trim()??"").replace(/^_+|_+$/g,"").trim()}function dI(e,o){const a=uI(e);if(!V(a))return o;const s=`$R.$ ${a}`,n=o.replace(/\s*R\.(?=\s|$)/g,`
${s}`);return[s,n].filter(V).join(`

`)}function mI(e){const a=Ts(e).match(/^([1-3]?\s*[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+)/)?.[1]?.replace(/\s+/g,"").toLowerCase();return{mt:"Mateo",mc:"Marcos",lc:"Lucas",jn:"Juan"}[a??""]??"Evangelio"}function pI(e){return/^(Mt|Mc|Lc|Jn)\s+1\s*,\s*1\b/i.test(Ts(e))}function fI(e){const o=Ts(e);return/^Mt\s+28\b.*\b20\b/i.test(o)||/^Mc\s+16\b.*\b20\b/i.test(o)||/^Lc\s+24\b.*\b53\b/i.test(o)||/^Jn\s+21\b.*\b25\b/i.test(o)}function gI(e){return pI(e)?"Comienzo del santo Evangelio":fI(e)?"Conclusión del santo Evangelio":"Lectura del santo Evangelio"}function SI(e,o){return["$Rúbrica.$ Si el diácono proclama el Evangelio, pide la bendición al sacerdote:","$Diácono.$ Padre, dame tu bendición.","$Sacerdote.$ El Señor esté en tu corazón y en tus labios, para que anuncies dignamente su Evangelio. En el nombre del Padre, y del Hijo + y del Espíritu Santo.","$Diácono.$ Amén.","$Rúbrica.$ Si proclama el sacerdote, dice inclinado ante el altar:","$Sacerdote.$ Purifica mi corazón y mis labios, Dios todopoderoso, para que pueda anunciar dignamente tu santo Evangelio.","$V.$ El Señor esté con vosotros","$R.$ Y con tu espíritu",`$V.$ ${gI(e)} según San ${mI(e)}`,"$R.$ Gloria a ti, Señor",o.trim(),"$V.$ Palabra del Señor","$R.$ Gloria a ti, Señor Jesús","$Sacerdote/diácono.$ Las palabras del Evangelio borren nuestros pecados."].filter(V).join(`

`)}function Vi(){return{title:"Aclamación después del Evangelio",alternatives:[{label:"Verdad",content:`$Coro/pueblo.$ Tu palabra, Señor, es la verdad,
y tu ley nuestra libertad.`},{label:"Lámpara",content:`$Coro/pueblo.$ Tu palabra, Señor,
es lámpara que alumbra nuestros pasos.`},{label:"Permanece",content:`$Coro/pueblo.$ Tu palabra, Señor,
permanece por los siglos.`}],kind:"mass",quiet:!0}}const Qr=/^(?:[1-3]\s*)?[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]{1,12}\.?\s*\d/;function Ts(e){const o=Zd(e),a=[...o.matchAll(/\$\s*([^$\n\r]+)/g)].map(r=>r[1].trim()).reverse().find(r=>Qr.test(r));if(a)return a;const s=zn(o).replace(/\r\n/g,`
`).split(`
`).map(r=>r.trim()).filter(Boolean);return[...s].reverse().find(r=>Qr.test(r))??s[0]??""}function bI(e){return Ts(e).match(/^([1-3]?\s*[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+)/)?.[1]?.replace(/\s+/g,"").toLowerCase()??""}const yI={gen:"libro del Génesis",gn:"libro del Génesis",ex:"libro del Éxodo",lev:"libro del Levítico",lv:"libro del Levítico",num:"libro de los Números",nm:"libro de los Números",dt:"libro del Deuteronomio",jos:"libro de Josué",jue:"libro de los Jueces",jc:"libro de los Jueces",rut:"libro de Rut",rt:"libro de Rut","1sam":"primer libro de Samuel","2sam":"segundo libro de Samuel","1s":"primer libro de Samuel","2s":"segundo libro de Samuel","1re":"primer libro de los Reyes","2re":"segundo libro de los Reyes","1r":"primer libro de los Reyes","2r":"segundo libro de los Reyes","1cron":"primer libro de las Crónicas","2cron":"segundo libro de las Crónicas","1cro":"primer libro de las Crónicas","2cro":"segundo libro de las Crónicas",esd:"libro de Esdras",neh:"libro de Nehemías",ne:"libro de Nehemías",tob:"libro de Tobías",tb:"libro de Tobías",jdt:"libro de Judit",est:"libro de Ester","1m":"primer libro de los Macabeos","2m":"segundo libro de los Macabeos","1mac":"primer libro de los Macabeos","2mac":"segundo libro de los Macabeos","1macabeos":"primer libro de los Macabeos","2macabeos":"segundo libro de los Macabeos",job:"libro de Job",jb:"libro de Job",prov:"libro de los Proverbios",pr:"libro de los Proverbios",qo:"libro del Eclesiastés",ecle:"libro del Eclesiastés",ecles:"libro del Eclesiastés",cant:"Cantar de los Cantares",ct:"Cantar de los Cantares",cnt:"Cantar de los Cantares",sb:"libro de la Sabiduría",si:"libro del Eclesiástico",sir:"libro del Eclesiástico",eclo:"libro del Eclesiástico",is:"libro de Isaías",jr:"libro de Jeremías",jer:"libro de Jeremías",lam:"libro de las Lamentaciones",lm:"libro de las Lamentaciones",bar:"libro de Baruc",ba:"libro de Baruc",ez:"profecía de Ezequiel",dan:"profecía de Daniel",dn:"profecía de Daniel",os:"profecía de Oseas",jl:"profecía de Joel",am:"profecía de Amós",abd:"profecía de Abdías",jon:"profecía de Jonás",miq:"profecía de Miqueas",mi:"profecía de Miqueas",nah:"profecía de Nahún",hab:"profecía de Habacuc",ha:"profecía de Habacuc",sof:"profecía de Sofonías",so:"profecía de Sofonías",ag:"profecía de Ageo",zac:"profecía de Zacarías",za:"profecía de Zacarías",mal:"profecía de Malaquías",ml:"profecía de Malaquías",hech:"libro de los Hechos de los apóstoles",hch:"libro de los Hechos de los apóstoles",rom:"carta del apóstol san Pablo a los Romanos",rm:"carta del apóstol san Pablo a los Romanos","1co":"primera carta del apóstol san Pablo a los Corintios","2co":"segunda carta del apóstol san Pablo a los Corintios","1cor":"primera carta del apóstol san Pablo a los Corintios","2cor":"segunda carta del apóstol san Pablo a los Corintios",gal:"carta del apóstol san Pablo a los Gálatas",ga:"carta del apóstol san Pablo a los Gálatas",ef:"carta del apóstol san Pablo a los Efesios",flp:"carta del apóstol san Pablo a los Filipenses",col:"carta del apóstol san Pablo a los Colosenses","1tes":"primera carta del apóstol san Pablo a los Tesalonicenses","2tes":"segunda carta del apóstol san Pablo a los Tesalonicenses","1ts":"primera carta del apóstol san Pablo a los Tesalonicenses","2ts":"segunda carta del apóstol san Pablo a los Tesalonicenses","1tim":"primera carta del apóstol san Pablo a Timoteo","2tim":"segunda carta del apóstol san Pablo a Timoteo","1tm":"primera carta del apóstol san Pablo a Timoteo","2tm":"segunda carta del apóstol san Pablo a Timoteo",tit:"carta del apóstol san Pablo a Tito",tt:"carta del apóstol san Pablo a Tito","1tit":"carta del apóstol san Pablo a Tito","1tt":"carta del apóstol san Pablo a Tito",flm:"carta del apóstol san Pablo a Filemón",heb:"carta a los Hebreos",hb:"carta a los Hebreos",sant:"carta del apóstol Santiago",st:"carta del apóstol Santiago","1pe":"primera carta del apóstol san Pedro","2pe":"segunda carta del apóstol san Pedro","1p":"primera carta del apóstol san Pedro","2p":"segunda carta del apóstol san Pedro","1jn":"primera carta del apóstol san Juan","2jn":"segunda carta del apóstol san Juan","3jn":"tercera carta del apóstol san Juan",jud:"carta del apóstol san Judas",judas:"carta del apóstol san Judas",ap:"libro del Apocalipsis"};function vI(e){return yI[bI(e)]??""}function hI(e){const o=vI(e);return o?o.startsWith("libro ")||o.startsWith("primer libro ")||o.startsWith("segundo libro ")||o.startsWith("Cantar ")?`Lectura del ${o}`:`Lectura de la ${o}`:""}function zn(e){return e.replace(/_([^_]+)_/g,"$1").replace(/\$([^$]+)\$/g,"$1").replace(/\$/g,"").trim()}function Fi(e){return Xd(e)}function Xd(e){const a=Ts(e).replace(/\s*:\s*.*$/s,"").trim().replace(/^(.{4,})\1$/,"$1");return Qr.test(a)?a:""}function EI(e){const o=e.trim();return/[.!?]$/.test(o)?o:`${o}.`}function Ic(e){const o=e?.trim()??"",a=o.match(/_([^_]+)_/)?.[1]?.trim();if(a)return a;const s=o.match(/:\s*(.+)$/s)?.[1]?.trim();return s?zn(s):""}function AI(e,o){const a=hI(e),s=Xd(e),n=_n(o);return[s?`[[READING_REFERENCE]] ${s}`:"",a?`[[MASS_READING_PROCLAMATION]] ${EI(a)}`:"",n,"$Lector.$ Palabra de Dios.","$Pueblo.$ Te alabamos, Señor."].filter(V).join(`

`)}function PI(e){return Kr(e,"lent")?"$Todos.$ Honor y gloria a ti, Señor Jesús.":"$Todos.$ Aleluya."}function qI(e,o,a){return V(o)?o:Ic(e)||Ic(a.massGospelReference)||zn(e)}function II(e,o,a){const s=[a.celebration,a.rank,...a.seasons??[]].filter(Boolean).join(" ").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase(),n=/secuencia/i.test(e)&&V(o),r=s.includes("pentecost")&&n?"Ven, Espíritu Santo, llena los corazones de tus fieles y enciende en ellos el fuego de tu amor.":qI(e,o,a),i=PI(a);return[i,`$Cantor.$ ${r}`,i].join(`

`)}function wi(e,o,a){const s=$h(e);return{title:vo(e),alternatives:s?s.map(n=>({label:n.title,content:Th(n)})):Oh(e,o,a),kind:"mass",quiet:!0}}function CI(e){return e.match(/^\s*\$?\s*((?:en\s+tiempo\s+pascual|tiempo\s+pascual|fuera\s+del\s+tiempo\s+pascual|fuera\s+de\s+pascua|no\s+pascua|si\s+no\s+es\s+pascua|pascua|si\s+es\s+pascua))\s*:/i)?.[1]??""}function OI(e,o){const a=CI(e);return V(a)?Bi(a)?na(o):Yi(a)?!na(o):!0:!0}function Zd(e){return e.replace(/^\s*\$?\s*(?:evangelio\s+pascual\s+para\s+el\s+ciclo\s+[ABC]|en\s+el\s+ciclo\s+[ABC])\s*:\s*/i,"").replace(/^\s*\$?\s*(?:en\s+tiempo\s+pascual|tiempo\s+pascual|fuera\s+del\s+tiempo\s+pascual|fuera\s+de\s+pascua|no\s+pascua|si\s+no\s+es\s+pascua|pascua|si\s+es\s+pascua)\s*:\s*/i,"").trim()}function em(e,o){const a=Zd(e),s=o.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();return/^Jn\s+11\b/i.test(a)&&s.startsWith("queridos hermanos: este es el mensaje")?"1 Jn 1, 5 - 2, 2: _La sangre de Jesús nos limpia de todo pecado._":/^Sal\s+102\b/i.test(a)&&s.startsWith("en aquel tiempo, tomo la palabra jesus y dijo")?"Mt 11, 25-30: _Has escondido estas cosas a los sabios y entendidos, y se las has revelado a la gente sencilla._":/^1\s*Jn\s+1\b/i.test(a)&&s.startsWith("bendice, alma mia, al senor")?"Sal 102, 1b-2.3-4.8-9.13-14.17-18: _Bendice, alma mía, al Señor._":a}function As(e){return e==="FIRSTLECTURE"||e==="CELEBRATION_FIRSTLECTURE"}function Wr(e){return e==="SECONDLECTURE"||e==="CELEBRATION_SECONDLECTURE"}function ki(e,o){const a=Hi(e.lecturas).map((t,l)=>({reading:t,index:l,order:vr.get(je(t))??Number.POSITIVE_INFINITY})).filter(({reading:t,order:l})=>Number.isFinite(l)&&(V(W(t,"ref"))||V(W(t,"texto")))&&OI(W(t,"ref"),o)),s=a.some(({reading:t})=>As(je(t))),n=a.filter(({reading:t})=>je(t).startsWith("CELEBRATION_"));if(n.some(({reading:t})=>As(je(t)))&&n.some(({reading:t})=>Ha(je(t))))return n.sort((t,l)=>t.order-l.order||t.index-l.index).map(({reading:t})=>t);const i=new Set(a.filter(({reading:t})=>je(t).startsWith("CELEBRATION_")).map(({reading:t})=>vr.get(je(t))));return a.filter(({reading:t})=>{const l=je(t),u=vr.get(l);return l.startsWith("CELEBRATION_")||!i.has(u)}).sort((t,l)=>{const u=!s&&Wr(je(t.reading))?10:t.order,c=!s&&Wr(je(l.reading))?10:l.order;return u-c||t.index-l.index}).map(({reading:t})=>t)}function DI(e,o){const a=[],s=o.rank?.toUpperCase();return s&&s!=="WEEKDAY"&&s!=="FERIA"&&a.push("MEMORY"),o.cycle&&a.push(`YEAR_${o.cycle.toUpperCase()}`),a.push(e.getFullYear()%2===0?"EVEN":"ODD"),a.push("ANY","MEMORY"),[...new Set(a)]}const RI={"01-02":[{id:"christmas_time_january_2_local",cycle:"ANY",lecturas:[{type:"ACCLAMATION",ref:"_Aleluya, aleluya, aleluya._",texto:`En muchas ocasiones habló Dios antiguamente a los padres por los profetas.
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

Esto pasaba en Betania, en la otra orilla del Jordán, donde Juan estaba bautizando.`}]}]};function $I(e){const o=`${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`;return RI[o]??[]}function Cc(e,o){return{...e,color:"WHITE",celebration:o,rank:"SOLEMNITY"}}function Oc(e,o){if(W(e,"id")!=="holy_thursday")return;const a=Hi(e.lecturas),s=a.filter(t=>je(t).startsWith("CELEBRATION_")),n=a.filter(t=>!je(t).startsWith("CELEBRATION_")),r=s.some(t=>As(je(t)))&&s.some(t=>Ha(je(t))),i=n.some(t=>As(je(t)))&&n.some(t=>Ha(je(t)));if(!(!r||!i))return[Mo({...e,id:"holy_thursday_evening_mass",lecturas:s},"Misa vespertina de la Cena del Señor",Cc(o,"Misa vespertina de la Cena del Señor")),Mo({...e,id:"holy_thursday_chrism_mass",lecturas:n},"Misa Crismal",Cc(o,"Misa Crismal"))]}function TI(e,o,a){const s=(e??[]).filter(r=>ki(r,a.seasons).length);if(!s.length)return $I(o);const n=DI(o,a);for(let r=0;r<n.length;r+=1){const i=n[r],t=s.filter(c=>W(c,"cycle").toUpperCase()===i);if(!t.length)continue;const l=t.flatMap(c=>Oc(c,a)??[c]),u=l.length!==t.length?l:t;if(i==="MEMORY"&&a.rank?.toUpperCase()==="MEMORIAL"){const c=n.slice(r+1).map(m=>s.find(f=>W(f,"cycle").toUpperCase()===m)).find(m=>!!m);if(c)return[...u,c]}return u}return s.flatMap(r=>Oc(r,a)??[r])}function LI(e,o){if(!V(e)||!o)return e;const a=o.trim().toLowerCase();if(!["a","b","c"].includes(a))return e;const s=/^\s*\$?\s*Año\s*([ABC])\s*:\s*\$?\s*(.*)$/i;if(!/(^|\n)\s*\$?\s*Año\s*[ABC]\s*:/i.test(e))return e;const r=e.split(/\r?\n/),i=new Map;let t=null;for(const u of r){const c=u.match(s);if(c){t=c[1].toLowerCase();const m=(c[2]??"").trim();m.length?i.set(t,[m]):i.set(t,[]);continue}if(t){const m=i.get(t);m&&m.push(u)}}const l=i.get(a);return l?.length?l.join(`
`).trim():e}function na(e){return!!e?.some(o=>{const a=o.toUpperCase();return a.includes("EASTER")||a.includes("PASCHAL")&&!a.includes("TRIDUUM")})}function pn(e,o){return!!e?.some(a=>a.toUpperCase().includes(o))}function MI(e){return pn(e,"PASCHAL_TRIDUUM")}function NI(e){return pn(e,"EASTER_OCTAVE")}function Bi(e){return/^(?:si\s+es\s+pascua|pascua|en\s+tiempo\s+pascual|tiempo\s+pascual)$/i.test(e.trim())}function Yi(e){return/^(?:si\s+no\s+es\s+pascua|no\s+pascua|fuera\s+de\s+pascua|fuera\s+del\s+tiempo\s+pascual)$/i.test(e.trim())}function _I(e,o){return!V(e)||!o?.length?e:e.replace(/\s*\$\(\s*((?:fuera\s+del\s+tiempo\s+pascual|fuera\s+de\s+pascua|no\s+pascua|si\s+no\s+es\s+pascua|en\s+tiempo\s+pascual|tiempo\s+pascual|pascua|si\s+es\s+pascua))\s*:\s*\$?\s*([\s\S]*?)\s*\$\)/gi,(a,s,n)=>{if(!(na(o)&&Bi(s)||!na(o)&&Yi(s)))return"";const i=n.trim();return i?` ${i}`:""})}function zI(e,o){if(!V(e)||!o?.length)return e;const a=_I(e,o),s=/^\s*\$?\s*((?:fuera\s+del\s+tiempo\s+pascual|fuera\s+de\s+pascua|no\s+pascua|si\s+no\s+es\s+pascua|en\s+tiempo\s+pascual|tiempo\s+pascual|pascua|si\s+es\s+pascua))\s*:\s*\$?\s*(.*)$/i;if(!/(^|\n)\s*\$?\s*(?:fuera\s+del\s+tiempo\s+pascual|fuera\s+de\s+pascua|no\s+pascua|si\s+no\s+es\s+pascua|en\s+tiempo\s+pascual|tiempo\s+pascual|pascua|si\s+es\s+pascua)\s*:/i.test(a))return a;const r=a.split(/\r?\n/),i=new Map;i.set("easter",[]),i.set("nonEaster",[]);let t=null;for(const c of r){const m=c.match(s);if(m){const f=m[1]??"";Bi(f)?t="easter":Yi(f)?t="nonEaster":t=null;const h=(m[2]??"").trim();t&&h.length&&i.get(t)?.push(h);continue}t&&i.get(t)?.push(c)}const u=i.get(na(o)?"easter":"nonEaster")?.join(`
`).trim();if(!u){const m=i.get(na(o)?"nonEaster":"easter")?.join(`
`).trim();return m||e}return u}function Gi(e,o,a){return LI(zI(e,a),o)}function om(e){return!!e?.some(o=>o.includes("LENT"))}function JI(e){return pn(e,"ADVENT")||pn(e,"CHRISTMAS")}function jI(e){return e.getMonth()===0||e.getMonth()===1&&e.getDate()<=2}function UI(e){return na(e.seasons)?"reginaCaeli":JI(e.seasons)||e.date&&jI(e.date)?"almaRedemptoris":e.date&&e.date<$s(e.date.getFullYear())||om(e.seasons)?"aveRegina":"salveRegina"}const HI={almaRedemptoris:"Santa Madre del Redentor",aveRegina:"Salve, Reina de los cielos",reginaCaeli:"Reina del cielo",salveRegina:"Salve Regina"};function xI(e){const o=UI(e);return{title:"Antífona mariana",alternatives:[o,...["almaRedemptoris","aveRegina","reginaCaeli","salveRegina"].filter(s=>s!==o)].map(s=>({label:HI[s],content:qv(s)}))}}function fn(e){return V(e)?`[[ANTIPHON]] ${e}`:""}function Jn(e){return V(e)?`[[REPEATED_ANTIPHON]] ${e}`:""}function am(e){const o=e?.replace(/\r\n/g,`
`).trim();return o?o.split(/(?:^|\n)\s*\$?\s*O\s+bien\s*:?\s*\$?\s*/gim).map(a=>a.trim()).filter(Boolean):[]}function Qi(e){return jn("Himno",e,"Himno")}const Ar=`$V.$ Dios todopoderoso tenga misericordia de nosotros, perdone nuestros pecados y nos lleve a la vida eterna.

$R.$ Amén.`,Dc=`$V.$ Señor, ten piedad.

$R.$ Señor, ten piedad.

$V.$ Cristo, ten piedad.

$R.$ Cristo, ten piedad.

$V.$ Señor, ten piedad.

$R.$ Señor, ten piedad.`,Bs=`$Rúbrica.$ Antes de Completas es muy de alabar que se haga examen de conciencia.

$Rúbrica.$ Se guarda un momento de silencio.`;function VI(){return{title:"Examen de conciencia",alternatives:[{label:"Silencio",content:Bs},{label:"Yo confieso",content:[Bs,"$Todos.$ Yo confieso ante Dios todopoderoso y ante vosotros, hermanos, que he pecado mucho de pensamiento, palabra, obra y omisión.","$Todos.$ Por mi culpa, por mi culpa, por mi gran culpa. Por eso ruego a santa María, siempre Virgen, a los ángeles, a los santos y a vosotros, hermanos, que intercedáis por mí ante Dios, nuestro Señor.",Ar,Dc].join(`

`)},{label:"Ten misericordia",content:[Bs,"$V.$ Señor, ten misericordia de nosotros.","$R.$ Porque hemos pecado contra ti.","$V.$ Muéstranos, Señor, tu misericordia.","$R.$ Y danos tu salvación.",Ar,Dc].join(`

`)},{label:"Invocaciones",content:[Bs,"$V.$ Tú que has sido enviado a sanar los corazones afligidos: Señor, ten piedad.","$R.$ Señor, ten piedad.","$V.$ Tú que has venido a llamar a los pecadores: Cristo, ten piedad.","$R.$ Cristo, ten piedad.","$V.$ Tú que estás sentado a la derecha del Padre para interceder por nosotros: Señor, ten piedad.","$R.$ Señor, ten piedad.",Ar].join(`

`)}]}}function jn(e,o,a="Opción",s){const n=am(o),r=i=>s?s(i):i;return n.length<=1?{title:e,content:r(o)}:{title:e,alternatives:n.map((i,t)=>({label:`${a} ${t+1}`,content:r(i)}))}}function FI(e){return V(e)?`$V.$ ${e}

$R.$ Amén.`:e}function sm(e,o,a,s=!0){const n=am(a);function r(i){const t=s?Jn(i):fn(i);return[fn(i),gn,o,qi,t].filter(V).join(`

`)}return n.length<=1?{title:e,content:r(a)}:{title:e,alternatives:n.map((i,t)=>({label:`Antífona ${t+1}`,content:r(i)}))}}function wI(e,o){const a=Jn(o),s=V(a)?e.replace(/<small\b[^>]*>\s*Se repite la ant.fona\s*<\/small>/gi,`
${a}
`):e;return nm(s)}function nm(e){return e.replace(/<\/p>\s*<p\b[^>]*>/gi,`

`).replace(/<p\b[^>]*>/gi,"").replace(/<\/p>/gi,"").replace(/<br\s*\/?>/gi,`
`).replace(/<\/?[^>]+>/g,"").replace(/&nbsp;/gi," ").replace(/&amp;/gi,"&").replace(/&quot;/gi,'"').replace(/&#39;|&apos;/gi,"'").replace(/&lt;/gi,"<").replace(/&gt;/gi,">").replace(/[ \t]+\n/g,`
`).replace(/\n{3,}/g,`

`).trim()}function kI(e){return e.replace(/(?:^|\n+)\s*Gloria al Padre,\s*y al Hijo,\s*y al Esp[íi]ritu Santo\.?\s+(?:Como era en el principio,\s*)?ahora y siempre,?\s+por los siglos de los siglos\.?\s*Am[eé]n\.?/gi,`
`).replace(/(?:^|\n+)\s*Gloria al Padre,\s*y al Hijo,\s*y al Esp[íi]ritu Santo\.?\s+Como era en el principio,\s*ahora y siempre,?\s+por los siglos de los siglos\.?\s*Am[eé]n\.?/gi,`
`).replace(/\n{3,}/g,`

`).trim()}function BI(e){return nm(e.replace(/<small\b[^>]*>\s*Se repite la ant.fona\s*<\/small>/gi,""))}function YI(e){return e.replace(/\n+\s*_?Si se ha rezado este salmo en el invitatorio, se reemplaza por el Salmo 94, que se encuentra m(?:Ã¡|á)s arriba\._?/gi,"").trim()}function GI(e){return/Si se ha rezado este salmo en el invitatorio, se reemplaza por el Salmo 94/i.test(e)}function QI(e,o){return!V(e)&&!V(o)?"":[fn(e),o,Jn(e)].filter(V).join(`

`)}function Ee(e,o){(V(o.content)||o.alternatives?.length||o.items?.length)&&e.push(o)}function sa(e,o,a,s,n,r,i){const t=W(o,`${s}_salmo_cita`),l=W(o,`${s}_salmo_texto`),u=!!i?.canReplace&&GI(t)&&mn(t)===i?.selectedPsalmNumber&&!!i?.replacementPsalm,c=i?.replacementPsalm,m=u&&c?c.title:YI(t),f=u&&c?BI(c.psalm):l;Ee(e,{title:a,eyebrow:m,content:QI(Gi(W(o,`${s}_salmo_antifona`),n,r),f)})}function WI(e,o){const a=xi(e),s=Math.max(0,Math.min(a.length-1,o.invitatoryPsalmIndex??0));return a[s]}function KI(e,o,a){const s=xi(e),n=WI(e,o),r=s.find(i=>mn(i.title)===94);return{canReplace:a==="laudes"&&o.includeInvitatoryInLaudes&&!!(n&&r),selectedPsalmNumber:n?mn(n.title):void 0,replacementPsalm:r}}function rm(e,o){const a=W(e,"__invitatoryAntiphon")||W(e,"val"),s=xi(e),n={title:W(e,"__invitatoryPsalmTitle")||W(e,"psalmTitle"),psalm:W(e,"__invitatoryPsalm")||W(e,"psalm")},r=s.length?s:n.title&&n.psalm?[n]:[],i=Math.max(0,Math.min(r.length-1,o.invitatoryPsalmIndex??0)),t=r[i],l=r.map((u,c)=>({label:cI(u.title,c),eyebrow:u.title,content:[kI(wI(u.psalm,a)),qi,Jn(a)].filter(V).join(`

`)}));return[{title:"Aclamación",content:yv},{title:"Antífona",content:fn(a),quiet:!0},{title:"Salmo invitatorio",eyebrow:t?.title,alternatives:l}]}function Wi(e,o,a){return a==="laudes"&&o.includeInvitatoryInLaudes?rm(e,o):[{title:"Invocación inicial",content:bv(om(o.seasons))}]}function XI(e,o){return sm(e==="vesperae"?"Cántico de María":"Cántico de Zacarías",e==="vesperae"?hv:vv,o)}function ZI(e,o){const a=e.split(/\r?\n/).map(s=>s.trim()).filter(V).flatMap(s=>{const n=s.startsWith("*"),r=n?s.slice(1).trimStart():s,i=n?`<strong>${We(r)}</strong>`:We(r),l=`<span class="${n?"personal-intention-line is-bold":"personal-intention-line"}">- ${i}</span>`,u=n&&V(o)?`<span class="custom-preces-response-line">$R.$ ${We(o)}</span>`:"";return[l,u].filter(V)});return a.length?`<p class="personal-intentions-block">${a.join("")}</p>`:""}const eC="pueden añadirse intenciones personales";function oC(e){return(e.match(/_/g)??[]).length%2===1?`${e}_`:e}function aC(e){return oC(e.trim().replace(/^\s*-\s*\(\s*o\s+bien\s*:?\s*/i,"- ").replace(/\s*\(\s*o\s+bien\s*:?\s*_?\s*$/i,"").replace(/\)\s*(_?)\s*$/i,"$1").trim())}function sC(e,o,a){const s=W(e,"preces_respuesta"),n=ya(e,"preces_contenido").map(aC),r=V(s)?`$R.$ ${s}`:"",i=V(o),t=[];return V(r)&&t.push(r),n.forEach(l=>{t.push([l,r].filter(V).join(`

`))}),i?t.push(ZI(o,s)):a==="vesperae"&&t.push(eC),i&&V(r)&&t.push(r),{title:"Preces",content:W(e,"preces_intro"),items:t}}function nC(e,o){return{title:"Padrenuestro",content:[W(e,"invitacion_padrenuestro"),pa(o.lordPrayerLanguage)].filter(V).join(`

`),quiet:!0}}function rC(e){if(e==="laudes"||e==="vesperae")return"blessing";if(e==="completorium")return"compline";if(e==="invitatorium"||e==="officium"||e==="tertia"||e==="sexta"||e==="nona")return"short"}function Ki(e,o){const a=rC(o);a&&Ee(e,{title:"Conclusión",content:Sd(a),quiet:!0})}function Pr(e,o,a){const s=[],n=KI(e,o,a);for(const r of Wi(e,o,a))Ee(s,r);return Ee(s,Qi(W(e,"himno"))),sa(s,e,"Primer salmo","primer",o.cycle,o.seasons,n),sa(s,e,"Segundo salmo","segundo",o.cycle,o.seasons,n),sa(s,e,"Tercer salmo","tercer",o.cycle,o.seasons,n),Ee(s,{title:"Lectura breve",eyebrow:Fi(W(e,"lectura_biblica_cita")),content:_n(W(e,"lectura_biblica"))}),Ee(s,{title:"Responsorio breve",items:La(ya(e,"responsorios"))}),(a==="laudes"||a==="vesperae")&&(Ee(s,XI(a,Gi(W(e,"cantico_evangelico_antifona"),o.cycle,o.seasons))),Ee(s,sC(e,o.customIntentions,a)),Ee(s,nC(e,o))),Ee(s,jn("Oración final",W(e,"oracion_final"),"Oración",FI)),Ki(s,a),a==="laudes"&&o.includeMarianConsecrationInLaudes&&Ee(s,{title:"Consagración a María",content:Iv}),s}function iC(e,o){const a=ya(e,"responsorio_pascua");return na(o.seasons)&&a.length?a:La(ya(e,"responsorio"))}function tC(e,o){if(MI(o.seasons)){const a=W(e,"antifona_triduo");if(V(a))return a}if(NI(o.seasons)){const a=W(e,"antifona_inalbis");if(V(a))return a}return Gi(W(e,"cantico_evangelico_antifona"),o.cycle,o.seasons)}function lC(e){return["$V.$ Oremos.",e.replace(/\r\n/g,`
`).replace(/^\s*(?:<p[^>]*>\s*)?Completas\s*:[\s\S]*?(?=(?:<p[^>]*>\s*)?(?:\$V\.\$\s*)?Oremos\s*:?\s*)/i,"").replace(/^\s*(?:<p[^>]*>\s*)?Completas\s*:[^\n<]*(?:<\/p>)?\s*/i,"").replace(/^\s*(?:<p[^>]*>\s*)?(?:\$V\.\$\s*)?Oremos\s*:?\s*(?:<\/p>)?\s*/i,"").replace(/\s*(?:\$R\.\$\s*)?Am[eé]n\.?\s*$/i,"").replace(/\n{3,}/g,`

`).trim(),"$R.$ Amén."].filter(V).join(`

`)}function cC(e,o){const a=[];for(const n of Wi(e,o,"completorium"))Ee(a,n);Ee(a,VI()),Ee(a,Qi(W(e,"himno"))),sa(a,e,"Primer salmo","primer"),sa(a,e,"Segundo salmo","segundo"),Ee(a,{title:"Lectura breve",eyebrow:Fi(W(e,"lectura_biblica_cita")),content:_n(W(e,"lectura_biblica_texto"))}),Ee(a,{title:"Responsorio",items:La(iC(e,o))});const s=tC(e,o);return Ee(a,sm("Cántico evangélico",Ev,s,!0)),Ee(a,jn("Oración",lC([W(e,"oracion"),W(e,"final")].filter(V).join(`

`)),"Oración")),Ki(a,"completorium"),Ee(a,xI(o)),a}function uC(e,o){const a=[],s=o.officeTrack,n=s==="a"?"anual":s==="i"?"año impar":"año par";for(const r of Wi(e,o,"officium"))Ee(a,r);return Ee(a,Qi(W(e,"himno"))),sa(a,e,"Primer salmo","primer"),sa(a,e,"Segundo salmo","segundo"),sa(a,e,"Tercer salmo","tercer"),Ee(a,{title:"Responsorio",items:La(ya(e,"responsorio1"))}),Ee(a,{title:`Lectura bíblica (${n})`,eyebrow:Fi(W(e,`lectura_biblica_cita_${s}`)),summary:W(e,`lectura_biblica_titulo_${s}`),content:_n(W(e,`lectura_biblica_texto_${s}`))}),Ee(a,{title:"Responsorio",items:La(Pc(ya(e,`responsorio2_${s}`)))}),Ee(a,{title:`Lectura patrística (${n})`,eyebrow:zn(W(e,`lectura_patristica_cita_${s}`)),summary:W(e,`lectura_patristica_titulo_${s}`),content:W(e,`lectura_patristica_texto_${s}`)}),Ee(a,{title:"Responsorio",items:La(Pc(ya(e,`responsorio3_${s}`)))}),Ee(a,jn("Oración final",W(e,"oracion_final"),"Oración")),Ki(a,"officium"),a}function dC(e,o){return Wr(e)&&!o.some(a=>As(je(a)))?"Primera lectura":Bq[e]??"Lectura"}function Xi(e,o){const a=ki(e,o.seasons);return a.map(s=>{const n=je(s),r=W(s,"texto"),i=em(W(s,"ref"),r),l=!qc(n)&&!Ha(n)&&!Er(n)?"":i;return{title:dC(n,a),eyebrow:V(l)?l:void 0,content:qc(n)?dI(i,r):Ha(n)?SI(i,r):Er(n)?II(i,r,o):AI(i,r),kind:"mass",quiet:Er(n)}})}function Zi(e,o){const a=ki(e,o.seasons).find(r=>Ha(je(r)));if(!a)return o;const s=W(a,"texto"),n=em(W(a,"ref"),s);return{...o,massGospelReference:n,massGospelText:s}}function Kr(e,o){return(e.seasons??[]).some(a=>a.toLowerCase().includes(o))}function mC(e){const o=e.rank?.toUpperCase();return ra(e)||o==="SOLEMNITY"||o==="FEAST"?!0:o==="SUNDAY"&&!Kr(e,"advent")&&!Kr(e,"lent")}function pC(e){const o=e.rank?.toUpperCase();return ra(e)?!1:o==="SUNDAY"||o==="SOLEMNITY"}function fC(e){return!!(e.kind==="part"||V(e.content)||V(e.summary)||e.rubrics?.some(V)||e.alternatives?.some(o=>V(o.content))||e.items?.length)}const io="$Nos ponemos en pie$",ds="$Nos sentamos$",im="$Nos arrodillamos durante la consagración.$",gn="$† Hacemos la señal de la cruz mientras decimos: †$",gC="$† Hacemos la señal de la cruz mientras decimos: †$",SC="$† Hacemos la señal de la cruz mientras decimos: †$",bC="$† Hacemos la señal de la cruz mientras decimos: †$";function tm(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function yC(e,o){const a=o.filter(V);if(!a.length||e.kind==="part")return e;const s=[...e.rubrics??[]];for(const n of a)s.includes(n)||s.push(n);return{...e,rubrics:s}}function vC(e){if(e===io)return"stand";if(e===ds)return"sit";if(e===im)return"kneel"}function hC(e){let o;return e.map(a=>{const s=a.rubrics??[];if(!s.length)return a;const n=[];return s.forEach(r=>{const i=vC(r);if(!i){n.push(r);return}i!==o&&(n.push(r),o=i)}),n.length?{...a,rubrics:n}:{...a,rubrics:void 0}})}function EC(e,o){const a=tm(o.title);return a==="aclamacion"?[io,gC]:e==="invitatorium"&&(a==="antifona"||a==="salmo invitatorio")?[io]:a==="invocacion inicial"?[io,gn]:a==="himno"?[io]:a==="examen de conciencia"?[ds]:a==="primer salmo"||a==="segundo salmo"||a==="tercer salmo"?[ds]:a.startsWith("lectura")||a==="responsorio"||a==="responsorio breve"?[ds]:a==="cantico de zacarias"||a==="cantico de maria"||a==="cantico evangelico"?[io]:a==="preces"||a==="padre nuestro"||a==="antifona mariana"||a==="consagracion a maria"||a.includes("oracion")?[io]:a==="conclusion"?e==="laudes"||e==="vesperae"||e==="completorium"?[io,gn]:[io]:[]}function AC(e){const o=tm(e.title);return o==="senal de la cruz"?[io,gn]:o==="evangelio"?[io,SC]:o==="bendicion"?[io,bC]:o==="primera lectura"||o==="segunda lectura"||o==="salmo responsorial"||o==="salmo responsorial cantado"||o==="secuencia"||o==="homilia"||o==="avisos"||o==="canto de ofertorio"||o==="presentacion de los dones"||o==="canto de meditacion"?[ds]:o==="plegaria eucaristica"?[io,im]:o.includes("evangelio")||o.includes("aclamacion")||o.includes("gloria")||o.includes("credo")||o.includes("profesion de fe")||o.includes("oracion")||o.includes("prefacio")||o.includes("santo")||o.includes("padrenuestro")||o.includes("cordero de dios")||o.includes("comunion")||o.includes("bendicion")||o.includes("despedida")||o.includes("veneracion del altar")||o==="antifona de entrada"||o==="canto de entrada"||o==="saludo inicial"||o==="monicion inicial"||o==="acto penitencial y senor, ten piedad"||o==="senor, ten piedad"||o==="orad, hermanos"||o==="dialogo del prefacio"||o==="monicion a la plegaria eucaristica"||o==="continuacion de la plegaria eucaristica"||o==="doxologia final y gran amen"||o==="rito de la paz"||o==="invitacion a la comunion"||o==="canto final"?[io]:[]}function ca(e,o){return hC(o.map(a=>yC(a,e==="evangelium"?AC(a):EC(e,a))))}function PC(e,o){const a=Zi(e,o),s=Xi(e,a),n=i=>wi(i,e,a),r=[...MP()];return s.forEach(i=>{i.title==="Salmo responsorial"&&r.push(n("salmo")),i.title==="Aclamación antes del Evangelio"&&r.push(n("aclamacion")),r.push(i),i.title==="Evangelio"&&r.push(Vi())}),r.push({title:"Homilía",content:`$Rúbrica.$ Homilía.

$Rúbrica.$ Puede guardarse un momento de silencio.`,kind:"mass",quiet:!0},Dd(),...NP(),..._P(o,n)),et(r,o)}function qC(e,o){const a=Zi(e,o),s=Xi(e,a),n=f=>wi(f,e,a),r=[...wP(),Ue("Liturgia de la Palabra")],i=_d(o,n,!1).find(f=>f.title==="Oración colecta");let t=!1;function l(){t||(r.push(n("gloria")),r.push({title:"Gloria",content:qi,kind:"mass",quiet:!0}),i&&r.push(i),t=!0)}s.forEach(f=>{if(f.title==="Epístola"&&l(),f.title.startsWith("Salmo responsorial")&&r.push(n("salmo")),f.title==="Aclamación antes del Evangelio"&&r.push(n("aclamacion")),r.push(f),f.title==="Evangelio"&&r.push(Vi()),f.title.startsWith("Salmo responsorial")){const h=YP(f.title);h&&r.push(h)}}),l();const u=zd(o,!1),c=u.find(f=>f.title==="Homilía"),m=u.find(f=>f.title==="Oración universal");return c&&r.push(c),r.push(...kP()),m&&r.push(m),r.push(Ue("Liturgia eucarística"),...Jd(o,n),Ue("Rito de la comunión"),...jd(o,n),Ue("Ritos conclusivos"),...Ud(o,n)),et(r,o)}const IC=new Set([vo("entrada"),vo("penitencial"),"Acto penitencial y Señor, ten piedad",vo("gloria"),"Gloria",vo("salmo"),"Salmo responsorial",vo("aclamacion"),"Aclamación antes del Evangelio",vo("ofertorio"),vo("cordero"),"Cordero de Dios",vo("comunion"),vo("final")]);function et(e,o){const a=e.filter(fC);return o.priestMode?a:a.filter(s=>IC.has(s.title))}function CC(e,o){if(Cd(o))return PC(e,o);if(Li(o))return qC(e,o);const a=Zi(e,o),s=Xi(e,a),n=u=>wi(u,e,a),r=[n("entrada"),Ue("Ritos iniciales"),..._d(a,n,mC(a)),Ue("Liturgia de la Palabra")];let i=!1,t=!1;function l(){if(t)return;const u=jq(a);u&&r.push(u),t=!0}return s.forEach(u=>{u.title==="Salmo responsorial"&&r.push(n("salmo")),u.title==="Aclamación antes del Evangelio"&&(l(),r.push(n("aclamacion")),i=!0),u.title==="Evangelio"&&!i&&(l(),r.push(n("aclamacion")),r.push(Uq(a)),i=!0),r.push(u),u.title==="Evangelio"&&r.push(Vi())}),r.push(...zd(a,pC(a),n),Ue("Liturgia eucarística"),...Jd(a,n),Ue("Rito de la comunión"),...jd(a,n)),ra(a)?r.push(...FP(a,n)):r.push(Ue("Ritos conclusivos"),...Ud(a,n)),et(r,o)}function OC(e,o,a){switch(e){case"invitatorium":{const s=[...rm(o,a).filter(n=>V(n.content)||n.alternatives?.length),{title:"Conclusión",content:Sd("short"),quiet:!0}];return ca(e,s)}case"officium":return ca(e,uC(o,a));case"laudes":return ca(e,Pr(o,a,e));case"tertia":case"sexta":case"nona":return ca(e,Pr(o,a,e));case"vesperae":return ca(e,Pr(o,a,e));case"completorium":return ca(e,cC(o,a));case"evangelium":return ca(e,CC(o,a))}}function DC(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}function lm(e){return e==="and"?"y":e==="of"?"de":e==="the"?"":e==="great"?"Magno":e==="nazianzen"?"Nacianceno":e==="rome"?"Roma":e==="sicily"?"Sicilia":e==="padua"?"Padua":e==="egypt"?"Egipto":Vd[e]??DC(e)}function RC(e){return e==="and"?"y":e==="of"?"de":Fd[e]??Vd[e]??e}function $C(e){const o=e.split("_").filter(Boolean),a=o.findIndex(t=>!!Fd[t]);if(a<0)return"";const n=new Set(["agatha","agnes","catherine","clare","lucy","mary","monica","teresa"]).has(o[0]??"")?"Santa":"San",r=o.slice(0,a).map(lm).filter(V).join(" "),i=o.slice(a).map(RC).filter(V).join(" ");return[r?`${n} ${r}`:"",i].filter(V).join(", ")}function TC(e){const o=kq[e];if(o)return o;const a=e.match(/^ordinary_time_(\d+)_(monday|tuesday|wednesday|thursday|friday|saturday|sunday)$/);if(a){const n=Number(a[1]),r=a[2];return r==="sunday"?`${n}º domingo del Tiempo Ordinario`:`${wq[r]} de la ${n}ª semana del Tiempo Ordinario`}const s=$C(e);return s||e.split("_").map(n=>lm(n)).filter(V).join(" ")}function qr(e,o){const a=W(e,xd);if(V(a))return a;const s=typeof e.id=="string"?e.id:"";return s?TC(s):`Opción ${o+1}`}const LC={class:"date-band"},MC={class:"day-summary"},NC={class:"home-date"},_C={class:"summary-tags"},zC={key:0},JC={key:1},jC={key:2},UC={key:0,class:"date-picker-panel"},HC={class:"date-input"},xC={class:"home-layout"},VC={class:"menu-panel"},FC={class:"office-grid"},wC=["onClick"],kC={class:"home-extras"},BC=["onClick"],YC={class:"home-tools"},GC={class:"tool-panel"},QC={class:"panel-title panel-title-preces"},WC=["disabled"],KC={key:0,class:"offline-notice"},XC={class:"tool-panel"},ZC={class:"setting-group"},eO={class:"range-row"},oO={class:"setting-group"},aO={class:"switch-row"},sO={class:"switch-row"},nO={class:"setting-group"},rO={class:"switch-row"},iO={class:"setting-group"},tO={class:"switch-row"},lO={class:"setting-group"},cO={class:"switch-row"},uO={class:"setting-group"},dO={class:"segmented"},mO={class:"setting-group"},pO={class:"switch-row"},fO={class:"setting-group"},gO={class:"scroll-speed-control"},SO=["max","aria-valuetext"],bO={class:"scroll-speed-labels"},yO=["aria-pressed","onClick"],vO={class:"reader-surface"},hO={class:"reader-header"},EO={key:0,class:"reader-celebration"},AO={class:"reader-celebration-text"},PO={class:"reader-date"},qO={key:0,class:"reader-inline-controls"},IO={key:1,class:"option-choice-backdrop",role:"dialog","aria-label":"Elección de opción litúrgica","aria-live":"polite"},CO={class:"option-choice-modal"},OO={class:"option-choice-grid"},DO=["onClick"],RO={key:2,class:"loading-state"},$O={key:3,class:"empty-state"},TO={key:4,class:"empty-state"},LO=["aria-label"],MO={key:0,class:"option-choice-backdrop",role:"dialog","aria-label":"Padrenuestro en solemnidad","aria-live":"polite"},NO={class:"option-choice-modal"},_O={class:"option-choice-grid option-choice-grid-two"},Zo=.9,Ka=1.28,Ia=20,Xa=4,Rc="orante:font-scale-v2",zO="orante:font-scale",$c=10,Tc="orante:prayer-options-by-day",Za=3,Lc=20,Mc=2,JO=5e3,jO=.95,Nc=1,UO=1.05,HO=2.4,xO=96,es="#f2eee6",_c="#c99b42",VO="https://raw.githubusercontent.com/lucasague/liturgiadelashoras/data/intenciones.json",Ir="orante:intenciones-last-synced-id",FO="lucasague/liturgiadelashoras",wO="data",kO="canticos.json",BO=In({__name:"App",setup(e){const o={key:"invitatorium",label:"Invitatorio",icon:zS},a=[{key:"officium",label:"Oficio",icon:Xg},{key:"laudes",label:"Laudes",icon:xS},{key:"tertia",label:"Tercia",icon:tS},{key:"sexta",label:"Sexta",icon:il},{key:"nona",label:"Nona",icon:il},{key:"vesperae",label:"Vísperas",icon:FS},{key:"completorium",label:"Completas",icon:ES}],s=[{key:"evangelium",label:"Misa",icon:Wg,open:()=>xn("evangelium")},{key:"bible",label:"Biblia",icon:Gg,open:()=>sp()}],n=w("home"),r=w(null),i=w(null),t=w(ql()),l=w(0),u=w(null),c=w(!0),m=w(""),f=w(!1),h=w(Xa),C=w(ke("orante:office-track",new Date().getFullYear()%2===0?"p":"i")),O=w(ke("orante:include-invitatory-laudes",!1)),J=w(ke("orante:include-marian-consecration-laudes",!0)),H=w(0),z=w("es"),_=w(ke("orante:custom-intentions","")),L=w(ke("orante:singing-notation",!1)),j=w(ke("orante:priest-mode",!1)),X=w(ke("orante:posture-instructions",!1)),me=nt(ke("orante:singing-notation-mode",2)),re=w(ke("orante:singing-notation-modes",{})),ae=w({}),pe=w({}),qe=w({}),ie=w(Yq()),te=w(ke("orante:camera-scroll-enabled",!0)),go=w(!1),Re=[{key:"slow",label:"Lento",description:"Canto",speed:3.3},{key:"medium",label:"Medio",description:"Lectura en voz alta",speed:6.12},{key:"fast",label:"Rápido",description:"Lectura mental",speed:12}],Je=Re[Re.length-1].speed,le=Re[0].speed,co=Re[1].speed/le,Ne=w(Za),ue=w(!1),$e=w(ke(Tc,{})),Fe=w(!1),Po=w(!1),Jo=w(null);let Xe=0,uo=0,bo=0,qo=!1,we=0,Ko=0,p=Za;const S=w(!1),v=w(""),P=w(null),q=w(!1);let E=null,M=!1,$=null;const D=U(()=>fd(t.value)),A=U(()=>u.value?.options[l.value]),F=U(()=>`${t.value}::${ie.value}`),R=U(()=>Kq(A.value)??u.value?.info),x=U(()=>Zo+h.value/Ia*(Ka-Zo)),k=U({get:()=>it(Ne.value),set:g=>{const d=Number(g),y=Number.isFinite(d)?Math.min(Re.length-1,Math.max(0,Math.round(d))):0;Ne.value=Re[y].speed}}),oe=U(()=>Re[k.value]),de=_c,Z={RED:"#c96f65",GREEN:"#7fac6f",PURPLE:"#9874b4",WHITE:_c,ROSE:"#bf7f94",BLUE:"#78a7c8"},Ie={"#ff5654":Z.RED,"#70b26f":Z.GREEN,"#794498":Z.PURPLE,"#bdbdbd66":Z.WHITE,"#ff81f5":Z.ROSE,"#00bafe":Z.BLUE},Ce=U(()=>Tm(R.value)),Ze=U(()=>R.value?.rank==="SUNDAY"?es:Ce.value),no=U(()=>R.value?.color==="WHITE"||Ce.value===es?de:Ce.value),Io=U(()=>es),ha=U(()=>({choirMode:L.value,priestMode:j.value,customIntentions:_.value,includeInvitatoryInLaudes:O.value,includeMarianConsecrationInLaudes:J.value,invitatoryPsalmIndex:H.value,lordPrayerLanguage:z.value,officeTrack:C.value,date:D.value,celebration:R.value?.celebration,rank:R.value?.rank,cycle:R.value?.cycle,seasons:R.value?.seasons})),_e=U(()=>A.value?OC(ie.value,A.value,ha.value):[]),I=w(!1),B=w(""),ee=w(new Date);let ve;const Xo=U(()=>{const g=ke(Ir,""),d=ee.value;return gv(ba,d)<4?!1:g?Sv(g,ba)!==Pi(ba,d):!0});function ka(){const g=_.value.trim().length>0,d=Fu()?"Sin conexión":"No hay conexión con la nube";return g?`${d}: se muestran las últimas intenciones descargadas, puede que no sean las de hoy.`:`${d}: no se han podido cargar las intenciones de hoy.`}async function Ea(g={}){const{force:d=!1}=g;d&&(I.value=!0,B.value="");try{const y=await fetch(VO,{cache:"no-store"});if(!y.ok){B.value=ka();return}const Y=await y.json();if(!Y.id||!Y.text?.trim()){B.value="Todavía no hay intenciones publicadas para hoy.";return}const De=ke(Ir,"");if(B.value="",!d&&Y.id===De)return;_.value=Y.text.trim(),localStorage.setItem(Ir,JSON.stringify(Y.id))}catch(y){B.value=wu(y)?ka():"No se han podido cargar las intenciones de hoy."}finally{d&&(I.value=!1)}}const cm=`https://raw.githubusercontent.com/${FO}/${wO}/${kO}`;let ot="",at=0;async function um(g){try{const d=await fetch(cm,{cache:"no-store"});if(!d.ok)return;const y=await d.json();y.fecha===g&&(y.selecciones&&(ae.value={...y.selecciones}),y.misaCanciones&&(qe.value={...y.misaCanciones}))}catch{}}async function dm(g){}function st(){window.clearTimeout(at),t.value,at=window.setTimeout(()=>{dm()},1500)}ge(ae,st,{deep:!0}),ge(qe,st,{deep:!0}),ge(t,g=>{g!==ot&&(ot=g,ae.value={},pe.value={},qe.value={},um(g))},{immediate:!0}),ge([t,ie],()=>{l.value=0,H.value=0,Fe.value=!1,Po.value=!1,Jo.value=null,ft()}),ge(h,g=>localStorage.setItem(Rc,JSON.stringify(g))),ge(C,g=>localStorage.setItem("orante:office-track",JSON.stringify(g))),ge(O,g=>{localStorage.setItem("orante:include-invitatory-laudes",JSON.stringify(g)),g||(H.value=0)}),ge(J,g=>{localStorage.setItem("orante:include-marian-consecration-laudes",JSON.stringify(g))}),ge(_,g=>localStorage.setItem("orante:custom-intentions",JSON.stringify(g))),ge(L,g=>localStorage.setItem("orante:singing-notation",JSON.stringify(g))),ge(j,g=>localStorage.setItem("orante:priest-mode",JSON.stringify(g))),ge(X,g=>localStorage.setItem("orante:posture-instructions",JSON.stringify(g))),ge(te,g=>localStorage.setItem("orante:camera-scroll-enabled",JSON.stringify(g))),ge(re,g=>localStorage.setItem("orante:singing-notation-modes",JSON.stringify(g)),{deep:!0}),ge($e,g=>{localStorage.setItem(Tc,JSON.stringify(g))},{deep:!0}),ge(Ne,g=>{const d=Hn(g);if(d!==g){Ne.value=d;return}localStorage.setItem("orante:auto-scroll-speed",JSON.stringify(g))}),ge([ue,n],Bm),ge([S,ue],([g,d])=>{Mh(!!(g||d))}),ge(jr,g=>{g&&Ea()}),ft(),pi(()=>{localStorage.removeItem("orante:theme"),localStorage.removeItem("orante:lord-prayer-language"),localStorage.removeItem("orante:auto-scroll-on-open"),tt(),ap("home"),window.addEventListener("popstate",ht),Ea(),ve=setInterval(()=>{ee.value=new Date},6e4)}),gi(()=>{Ba(),tt(),window.removeEventListener("popstate",ht),ve!==void 0&&clearInterval(ve)});function mm(){Ea({force:!0})}function ke(g,d){try{const y=localStorage.getItem(g);return y?JSON.parse(y):d}catch{return d}}function nt(g){return g===3||g===4?g:2}function rt(g,d){return`${g.title}-${g.eyebrow??""}-${d}`}function pm(g){return g.title==="Cántico de Zacarías"?4:me}function fm(g,d){return nt(re.value[rt(g,d)]??pm(g))}function gm(g,d,y){re.value={...re.value,[rt(g,d)]:y}}function Sm(g,d){ae.value={...ae.value,[g.title]:d}}function bm(g){return ae.value[g.title]?.capoOffset??0}function ym(g){return pe.value[g.title]??0}function vm(g){return ae.value[g.title]?.key}function hm(g){const d=_e.value.indexOf(g);return d<=0?[]:_e.value.slice(0,d).map(y=>ae.value[y.title]?.key).filter(y=>!!y)}function Em(g,d){const y={...ae.value},Y={...pe.value};_e.value.forEach((De,jo)=>{const yo=cn[De.title];if(jo<g||!yo?.length)return;const _s=y[De.title]??{key:Hr[De.title]??yo[0].key,capoOffset:0};y[De.title]={..._s,capoOffset:d},jo>g&&(Y[De.title]=d)}),ae.value=y,pe.value=Y}function Am(g){if(g.title==="Salmo invitatorio")return H.value;if(Cl.has(g.title)){const d=qe.value[g.title],y=d?g.alternatives?.findIndex(Y=>Y.label===d):void 0;return y!==void 0&&y>=0?y:void 0}}function Pm(g,d){if(g.title==="Salmo invitatorio"){H.value=d;return}if(Cl.has(g.title)){const y=g.alternatives?.[d]?.label;y&&(qe.value={...qe.value,[g.title]:y})}}function qm(g){u.value?.options[g]&&($e.value={...$e.value,[F.value]:g},l.value=g,H.value=0,Fe.value=!1,St())}function Im(g){return qr(g[0],0)==="Corpus Christi"&&g.some((d,y)=>qr(d,y)==="Domingo ordinario")}function Cm(){const g=u.value?.options??[];if(g.length<=1){l.value=0,Fe.value=!1;return}if(Im(g)){l.value=0,Fe.value=!0;return}const d=$e.value[F.value];if(Number.isInteger(d)&&d>=0&&d<g.length){l.value=d,Fe.value=!1;return}l.value=0,Fe.value=!0}function Un(g){const d=Number(g);return Number.isFinite(d)?Math.min(Ia,Math.max(0,Math.round(d))):Xa}function Om(g){const d=Number(g);return Number.isFinite(d)?d>=0&&d<=Ia?d:d>=Zo&&d<=Ka?Math.round((d-Zo)/(Ka-Zo)*Ia):Xa:Xa}function Dm(){const g=ke(Rc,null);if(g!==null)return Un(Om(g));const d=ke(zO,null);if(d!==null){const y=Number(d);if(Number.isFinite(y)){if(y>=0&&y<=$c)return Un(y*(Ia/$c));if(y>=Zo&&y<=Ka)return Un((y-Zo)/(Ka-Zo)*Ia)}}return Xa}function it(g){const d=Number(g);if(!Number.isFinite(d))return 0;let y=0,Y=Number.POSITIVE_INFINITY;return Re.forEach((De,jo)=>{const yo=Math.abs(De.speed-d);yo<Y&&(Y=yo,y=jo)}),y}function Hn(g){const d=Number(g);return Number.isFinite(d)?Re[it(d)].speed:Za}function Rm(g){k.value=g}function $m(g){const d=Number(g);return Number.isFinite(d)?d>Je&&d<=Lc?Hn(d/Lc*Je):Hn(d):Za}function tt(){const g="#161612";document.documentElement.style.backgroundColor=g,document.body.style.backgroundColor=g,document.getElementById("app")?.style.setProperty("background-color",g),document.querySelector('meta[name="theme-color"]')?.setAttribute("content",g)}function Tm(g){const d=lt(g?.color);return d||Lm(g?.color_hex||Z.GREEN,Z.GREEN)}function lt(g){const d=String(g??"").trim().toUpperCase();return Z[d]}function Lm(g,d=Z.GREEN){const y=g.trim().toLowerCase(),Y=lt(y);if(Y)return Y;if(y==="white")return es;const De=y.startsWith("#")?y:`#${y}`,jo=Ie[De];if(jo)return jo;const yo=y.startsWith("#")?y.slice(1):y,_s=/^([0-9a-f]{3})$/i.test(yo),up=/^([0-9a-f]{6})$/i.test(yo),dp=/^([0-9a-f]{8})$/i.test(yo);if(!_s&&!up&&!dp)return d;const zs=_s?yo.split("").map(qt=>qt+qt).join(""):yo.slice(0,6),mp=Number.parseInt(zs.slice(0,2),16),pp=Number.parseInt(zs.slice(2,4),16),fp=Number.parseInt(zs.slice(4,6),16);return mp>=245&&pp>=245&&fp>=245?es:`#${zs}`}function ct(g){return g&&g.charAt(0).toUpperCase()+g.slice(1)}function ut(g,d){const y=new Intl.DateTimeFormat("es-ES",{weekday:d?"long":void 0,day:"numeric",month:"long",year:"numeric"}).format(g);return ct(y.replace(",",""))}function Mm(g){return new Intl.DateTimeFormat("es-ES",{day:"numeric",month:"long"}).format(g)}function dt(g){return/^(lunes|martes|mi\u00e9rcoles|jueves|viernes|s\u00e1bado|domingo)\b/i.test(g.trim())}function Nm(g){return/tiempo ordinario/i.test(g)||/\bsemana\b/i.test(g)}function _m(){const g=R.value?.celebration?.trim(),d=R.value?.rank;return!g||Nm(g)?!1:d!=="FERIA"&&d!=="WEEKDAY"}function zm(){const d=`${yc[ie.value]} Cantados`,y=R.value?.celebration?.trim();if(y&&_m()){const Y=dt(y)?", ":" - ",De=ut(D.value,!dt(y));return`${d} - ${y}${Y}${De}`}return`${d} - ${ut(D.value,!0)}`}const Jm={"Invocación inicial":"Invocación inicial",Himno:"Himno","Primer salmo":"1er salmo","Segundo salmo":"2º salmo","Tercer salmo":"3er salmo","Responsorio breve":"Responsorio","Cántico de Zacarías":"Cántico Evangélico",Padrenuestro:"Padrenuestro"};function jm(g){const d=ae.value[g],y=d?.key??Hr[g],Y=y?sy(g,y):void 0;if(!Y)return;const De=Math.max(0,Y.capo+(d?.capoOffset??0)),jo=Jm[g]??g;return zh(jo,De,Y.chords)}function Um(){if(ie.value!=="laudes")return"";const g=Object.keys(cn).map(jm).filter(d=>!!d);return Jh(g)}function Hm(g){const d=document.createElement("textarea");d.value=g,d.setAttribute("readonly","true"),d.style.position="fixed",d.style.top="0",d.style.left="0",d.style.opacity="0",d.style.pointerEvents="none",document.body.appendChild(d),d.focus(),d.select(),d.setSelectionRange(0,d.value.length);try{return document.execCommand("copy")}catch{return!1}finally{document.body.removeChild(d)}}async function mt(g){try{if(navigator.clipboard?.writeText&&window.isSecureContext){await navigator.clipboard.writeText(g);return}}catch{}Hm(g)}async function pt(){const g=zm(),d=Um();await mt(g),d&&window.setTimeout(()=>{mt(d)},1e3)}function xm(g){const d={FERIA:"Feria",WEEKDAY:"Feria",MEMORIAL:"Memoria",FEAST:"Fiesta",SOLEMNITY:"Solemnidad",SUNDAY:"Domingo"};return g?d[g]??g:""}h.value=Dm(),Ne.value=$m(ke("orante:auto-scroll-speed",Za));async function ft(){const g=++Xe,d=D.value,y=ie.value;c.value=!0,m.value="";try{const Y=await Gq(d,y);g===Xe&&(u.value=Y,Cm(),St())}catch(Y){if(g!==Xe)return;m.value=ku(Y,"No se pudo preparar esta oración. Prueba con otro día o con otra Hora.","Sin conexión: esta es la primera vez que abres la app sin red y aún no se ha guardado el texto de la liturgia. Conéctate una vez y quedará disponible sin conexión para siempre."),Fe.value=!1,u.value=null}finally{g===Xe&&(c.value=!1)}}function gt(g){t.value=gd(t.value,g)}function Vm(){t.value=ql(),f.value=!1}function Fm(g){return g==="laudes"||g==="vesperae"}function wm(g){return Fm(g)&&R.value?.rank==="SOLEMNITY"}function St(){return n.value!=="reader"||Fe.value||Po.value||!wm(ie.value)?!1:(Jo.value=ie.value,Po.value=!0,!0)}function bt(g){ie.value=g,n.value!=="reader"&&Ms("reader"),n.value="reader",Ba(),da(()=>{window.scrollTo({top:0,behavior:"auto"}),ue.value=go.value})}function xn(g){bt(g)}function yt(g){const d=Jo.value;z.value=g,Po.value=!1,Jo.value=null,d&&bt(d)}function km(){if(ue.value){Ls();return}if(At()){pt();return}qo=wn(),ue.value=!0}function Bm(){const g=qo;if(qo=!1,Vn(),n.value==="reader"&&ue.value){if(g){bo=window.setTimeout(()=>{bo=0,n.value==="reader"&&ue.value&&(uo=requestAnimationFrame(Bn))},JO);return}uo=requestAnimationFrame(Bn)}}function Vn(){bo&&window.clearTimeout(bo),uo&&cancelAnimationFrame(uo),bo=0,uo=0,we=0,Ko=0,p=Ne.value}async function Ym(){const g=document.documentElement;if(!(document.fullscreenElement||!g.requestFullscreen))try{await g.requestFullscreen({navigationUI:"hide"})}catch{}}async function vt(){if(!(!document.fullscreenElement||!document.exitFullscreen))try{await document.exitFullscreen()}catch{}}function Ls(){ue.value=!1,Vn()}function Gm(){E?.abort(),E=null,Qm()}async function Qm(){if(M){M=!1,$?.getTracks().forEach(g=>g.stop()),$=null,q.value=!1,P.value&&(P.value.srcObject=null);try{await nE(),v.value=""}catch{v.value="No se pudo detener la grabación.",window.setTimeout(()=>{v.value=""},4e3)}finally{S.value=!1}}}async function Wm(){S.value=!0,v.value="Iniciando grabación…";try{await sE()}catch{S.value=!1,v.value="No se pudo iniciar la grabación de pantalla.",window.setTimeout(()=>{v.value=""},4e3);return}M=!0,v.value="";try{$=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user"}})}catch{$=null}$&&M&&(q.value=!0,await da(),P.value&&(P.value.srcObject=$)),M&&(qo=wn(),ue.value=!0)}function Ba(){Ls(),Gm(),vt()}function Fn(){Ba(),pt()}function Km(){if(te.value){S.value||Ym(),Zm();return}km()}function Xm(){te.value||Fn()}async function Zm(){if(S.value){Fn();return}if(aE()){await Wm();return}const g=document.querySelector(".reader-surface");if(!g)return;qo=wn(),ue.value=!0;let d=null;try{d=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user"}})}catch{d=null}S.value=!0,v.value=d?"Generando vídeo con cámara…":"Generando vídeo…",E=new AbortController,d&&(q.value=!0,await da(),P.value&&(P.value.srcObject=d));try{const y=await Uh(g,{cameraStream:d,liturgicalColor:Ce.value,readerScale:x.value,signal:E.signal,speedPixelsPerSecond:Ne.value*Mc,theme:"default",onRecordingStarted:()=>{v.value="Grabando…"}});y&&ep(y,`${ie.value}-${t.value}.webm`),v.value=""}catch{v.value="No se pudo generar el vídeo.",window.setTimeout(()=>{v.value=""},4e3)}finally{S.value=!1,E=null,q.value=!1,P.value&&(P.value.srcObject=null),Ls(),vt()}}function ep(g,d){const y=URL.createObjectURL(g),Y=document.createElement("a");Y.href=y,Y.download=d,document.body.appendChild(Y),Y.click(),Y.remove(),URL.revokeObjectURL(y)}function ht(g){const d=g.state??null,y=op(d);Ba(),n.value=y,r.value=y==="bible"?d?.oranteBibleBook??null:null,i.value=y==="bible"?d?.oranteBibleChapter??null:null,da(()=>window.scrollTo({top:0,behavior:"auto"}))}function op(g){const d=g;return d?.oranteScreen==="reader"?"reader":d?.oranteScreen==="bible"?"bible":"home"}function ap(g){const d=window.history.state??{};window.history.replaceState({...d,...Et(g)},"")}function Ms(g){const d=window.history.state??{};window.history.pushState({...d,...Et(g)},"")}function Et(g){return{oranteScreen:g,oranteBibleBook:g==="bible"?r.value:null,oranteBibleChapter:g==="bible"?i.value:null}}function sp(){r.value=null,i.value=null,Ba(),Ms("bible"),n.value="bible",da(()=>window.scrollTo({top:0,behavior:"auto"}))}function np(g){r.value=g,i.value=null,Ms("bible")}function rp(g){i.value=g,Ms("bible")}function ip(){window.history.back()}function wn(){return window.scrollY<=1}function At(){return window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-3}function Pt(g){return g.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function Ns(g){return window.scrollY+g.getBoundingClientRect().top}function kn(g){const d=Pt(g);return Array.from(document.querySelectorAll(".reader-surface .prayer-section")).find(Y=>Pt(Y.dataset.sectionTitle??"")===d)}function tp(){const g=kn("Lectura breve"),d=kn("Preces"),y=kn("Padrenuestro");if(!g||!d||!y)return Nc;const Y=window.scrollY+xO;return Y<Ns(g)?jO:Y>=Ns(d)&&Y<Ns(y)?co:Y>=Ns(y)?UO:Nc}function lp(){return Ne.value*tp()}function cp(g,d,y){return g<d?Math.min(d,g+y):g>d?Math.max(d,g-y):g}function Bn(g){if(n.value!=="reader"||!ue.value){Vn();return}we||(we=g);const d=(g-we)/1e3;we=g,p=cp(p,lp(),HO*d),Ko+=p*Mc*d;const y=Math.trunc(Ko);if(y>0&&(window.scrollBy({top:y,behavior:"auto"}),Ko-=y),At()){Ls();return}uo=requestAnimationFrame(Bn)}return(g,d)=>(T(),N("div",{class:"app",style:qs({"--reader-scale":x.value,"--liturgical-color":Ze.value,"--celebration-color":Io.value,"--notation-color":no.value,"--scroll-speed-color":Ce.value})},[b("main",{class:Le(["app-shell",{"is-reader":n.value!=="home"}])},[n.value==="home"?(T(),N(fe,{key:0},[b("section",LC,[b("button",{type:"button",class:"icon-button date-nav-button","aria-label":"Día anterior",onClick:d[0]||(d[0]=y=>gt(-1))},[Pe(Te(Jr),{size:24})]),b("div",MC,[b("p",NC,G(Mm(D.value)),1),b("h1",null,G(R.value?.celebration||Te(Pl)(D.value)),1),b("div",_C,[R.value?.psaltery_week?(T(),N("span",zC,"Salterio "+G(R.value.psaltery_week),1)):Se("",!0),R.value?.cycle?(T(),N("span",JC,"Ciclo "+G(R.value.cycle),1)):Se("",!0),R.value?.rank?(T(),N("span",jC,G(xm(R.value.rank)),1)):Se("",!0)])]),b("button",{type:"button",class:"icon-button date-nav-button","aria-label":"Día siguiente",onClick:d[1]||(d[1]=y=>gt(1))},[Pe(Te(xu),{size:24})]),b("button",{type:"button",class:Le(["icon-button calendar-toggle-button",{active:f.value}]),"aria-label":"Abrir calendario",onClick:d[2]||(d[2]=y=>f.value=!f.value)},[Pe(Te(rl),{size:18})],2),f.value?(T(),N("div",UC,[b("label",HC,[Pe(Te(rl),{size:18}),mo(b("input",{"onUpdate:modelValue":d[3]||(d[3]=y=>t.value=y),type:"date",onChange:d[4]||(d[4]=y=>f.value=!1)},null,544),[[ss,t.value]])]),b("button",{type:"button",class:"text-button",onClick:Vm},"Hoy")])):Se("",!0)]),b("div",xC,[b("section",VC,[d[20]||(d[20]=b("div",{class:"panel-title"},[b("div",null,[b("p",{class:"home-date"},"Liturgia")])],-1)),b("button",{type:"button",class:Le(["office-strip office-strip-prelude",{active:ie.value===o.key}]),onClick:d[5]||(d[5]=y=>xn(o.key))},[(T(),Do(Gs(o.icon),{size:18})),b("span",null,G(o.label),1)],2),b("div",FC,[(T(),N(fe,null,to(a,y=>b("button",{key:y.key,type:"button",class:Le(["office-card",{active:ie.value===y.key}]),onClick:Y=>xn(y.key)},[(T(),Do(Gs(y.icon),{size:22})),b("span",null,G(y.label),1)],10,wC)),64))]),b("div",kC,[(T(),N(fe,null,to(s,y=>b("button",{key:y.key,type:"button",class:"office-strip",onClick:Y=>y.open()},[(T(),Do(Gs(y.icon),{size:18})),b("span",null,G(y.label),1)],8,BC)),64))])]),b("aside",YC,[b("section",GC,[b("div",QC,[d[21]||(d[21]=b("span",{class:"panel-title-spacer","aria-hidden":"true"},null,-1)),d[22]||(d[22]=b("div",null,[b("p",{class:"home-date"},"Preces")],-1)),b("button",{type:"button",class:Le(["intentions-refresh-button",{"is-stale":Xo.value,"is-syncing":I.value}]),disabled:I.value,title:"Recargar intenciones desde la nube","aria-label":"Recargar intenciones desde la nube",onClick:mm},[Pe(Te(CS),{size:16})],10,WC)]),mo(b("textarea",{"onUpdate:modelValue":d[6]||(d[6]=y=>_.value=y),class:"long-textarea",placeholder:"Intenciones personales"},null,512),[[ss,_.value]]),B.value?(T(),N("p",KC,G(B.value),1)):Se("",!0)]),b("section",XC,[d[41]||(d[41]=b("div",{class:"panel-title"},[b("div",null,[b("p",{class:"home-date"},"Ajustes")])],-1)),b("div",ZC,[d[23]||(d[23]=b("label",{for:"font-scale"},"Texto",-1)),b("div",eO,[mo(b("input",{id:"font-scale","onUpdate:modelValue":d[7]||(d[7]=y=>h.value=y),type:"range",min:"0",max:"20",step:"1"},null,512),[[ss,h.value,void 0,{number:!0}]]),b("span",null,G(h.value),1)])]),b("div",oO,[d[28]||(d[28]=b("label",null,"Laudes",-1)),b("label",aO,[mo(b("input",{"onUpdate:modelValue":d[8]||(d[8]=y=>O.value=y),type:"checkbox"},null,512),[[Pa,O.value]]),d[24]||(d[24]=b("span",{class:"switch-track"},null,-1)),d[25]||(d[25]=b("strong",null,"Invitatorio",-1))]),b("label",sO,[mo(b("input",{"onUpdate:modelValue":d[9]||(d[9]=y=>J.value=y),type:"checkbox"},null,512),[[Pa,J.value]]),d[26]||(d[26]=b("span",{class:"switch-track"},null,-1)),d[27]||(d[27]=b("strong",null,"Consagración a María",-1))])]),b("div",nO,[d[30]||(d[30]=b("label",null,"Modo coro",-1)),b("label",rO,[mo(b("input",{"onUpdate:modelValue":d[10]||(d[10]=y=>L.value=y),type:"checkbox"},null,512),[[Pa,L.value]]),d[29]||(d[29]=b("span",{class:"switch-track"},null,-1)),b("strong",null,G(L.value?"Activado":"Desactivado"),1)])]),b("div",iO,[d[32]||(d[32]=b("label",null,"Modo sacerdote",-1)),b("label",tO,[mo(b("input",{"onUpdate:modelValue":d[11]||(d[11]=y=>j.value=y),type:"checkbox"},null,512),[[Pa,j.value]]),d[31]||(d[31]=b("span",{class:"switch-track"},null,-1)),b("strong",null,G(j.value?"Activado":"Desactivado"),1)]),d[33]||(d[33]=b("p",{class:"setting-hint"}," Apagado, la Misa muestra solo lo que canta el coro. Encendido, la Misa entera. ",-1))]),b("div",lO,[d[35]||(d[35]=b("label",null,"Indicaciones posturales",-1)),b("label",cO,[mo(b("input",{"onUpdate:modelValue":d[12]||(d[12]=y=>X.value=y),type:"checkbox"},null,512),[[Pa,X.value]]),d[34]||(d[34]=b("span",{class:"switch-track"},null,-1)),b("strong",null,G(X.value?"Activado":"Desactivado"),1)])]),b("div",uO,[d[36]||(d[36]=b("label",null,"Padrenuestro",-1)),b("div",dO,[b("button",{type:"button",class:Le({active:z.value==="es"}),onClick:d[13]||(d[13]=y=>z.value="es")}," Español ",2),b("button",{type:"button",class:Le({active:z.value==="la"}),onClick:d[14]||(d[14]=y=>z.value="la")}," Latín ",2)])]),b("div",mO,[d[39]||(d[39]=b("label",null,"Desplazamiento",-1)),b("label",pO,[mo(b("input",{"onUpdate:modelValue":d[15]||(d[15]=y=>te.value=y),type:"checkbox"},null,512),[[Pa,te.value]]),d[37]||(d[37]=b("span",{class:"switch-track"},null,-1)),d[38]||(d[38]=b("strong",null,"Con cámara",-1))])]),b("div",fO,[d[40]||(d[40]=b("label",null,"Velocidad de desplazamiento",-1)),b("div",gO,[mo(b("input",{id:"auto-scroll-speed","onUpdate:modelValue":d[16]||(d[16]=y=>k.value=y),type:"range",min:"0",max:Re.length-1,step:"1","aria-label":"Velocidad de desplazamiento","aria-valuetext":`${oe.value.label}: ${oe.value.description}`},null,8,SO),[[ss,k.value,void 0,{number:!0}]]),b("div",bO,[(T(),N(fe,null,to(Re,(y,Y)=>b("button",{key:y.key,type:"button",class:Le(["scroll-speed-option",{active:y.speed===Ne.value}]),"aria-pressed":y.speed===Ne.value,onClick:De=>Rm(Y)},[b("strong",null,G(y.label),1)],10,yO)),64))])])])]),Pe(Kb)])])],64)):n.value==="bible"?(T(),Do(Rb,{key:1,book:r.value,chapter:i.value,onSelectBook:np,onSelectChapter:rp,onBack:ip},null,8,["book","chapter"])):(T(),N(fe,{key:2},[b("article",vO,[b("div",hO,[b("div",null,[R.value?.celebration?(T(),N("p",EO,[d[42]||(d[42]=b("span",{class:"reader-celebration-dot","aria-hidden":"true"},null,-1)),b("span",AO,G(R.value.celebration),1),d[43]||(d[43]=b("span",{class:"reader-celebration-dot","aria-hidden":"true"},null,-1))])):Se("",!0),b("h1",null,G(Te(yc)[ie.value]),1),b("p",PO,G(ct(Te(Pl)(D.value))),1)])]),ie.value==="officium"?(T(),N("div",qO,[ie.value==="officium"?mo((T(),N("select",{key:0,"onUpdate:modelValue":d[17]||(d[17]=y=>C.value=y)},[...d[44]||(d[44]=[b("option",{value:"a"},"Anual",-1),b("option",{value:"i"},"Impar",-1),b("option",{value:"p"},"Par",-1)])],512)),[[Lg,C.value]]):Se("",!0)])):Se("",!0),Fe.value&&u.value?.options.length?(T(),N("div",IO,[b("div",CO,[d[45]||(d[45]=b("p",{class:"kicker"},"Hoy hay opciones",-1)),d[46]||(d[46]=b("h2",null,"¿Qué quieres recitar?",-1)),d[47]||(d[47]=b("p",{class:"option-choice-subtitle"},"Selecciona la opción de esta fecha.",-1)),b("div",OO,[(T(!0),N(fe,null,to(u.value.options,(y,Y)=>(T(),N("button",{key:`${y.id}-${Y}`,type:"button",class:"option-choice-item",onClick:De=>qm(Y)},G(Te(qr)(y,Y)),9,DO))),128))])])])):Se("",!0),c.value?(T(),N("div",RO,[...d[48]||(d[48]=[b("span",null,null,-1),aa(" Cargando oración ",-1)])])):m.value?(T(),N("div",$O,G(m.value),1)):_e.value.length?(T(!0),N(fe,{key:5},to(_e.value,(y,Y)=>(T(),Do(pv,{key:`${y.title}-${y.eyebrow}`,section:y,"alternative-index":Am(y),"notation-enabled":L.value,"notation-mode":fm(y,Y),"chant-picker-enabled":ie.value==="laudes","posture-instructions-enabled":X.value,"capo-offset":bm(y),"inherited-capo-offset":ym(y),"chant-key":vm(y),"taken-chant-keys":hm(y),"onUpdate:alternativeIndex":De=>Pm(y,De),"onUpdate:notationMode":De=>gm(y,Y,De),onChantSelected:De=>Sm(y,De),onCapoCycled:De=>Em(Y,De)},null,8,["section","alternative-index","notation-enabled","notation-mode","chant-picker-enabled","posture-instructions-enabled","capo-offset","inherited-capo-offset","chant-key","taken-chant-keys","onUpdate:alternativeIndex","onUpdate:notationMode","onChantSelected","onCapoCycled"]))),128)):(T(),N("div",TO," No hay contenido disponible para esta hora. "))]),b("button",{type:"button",class:Le(["floating-scroll-button floating-video-button",{active:te.value?S.value:ue.value}]),"aria-label":te.value?S.value?"Cancelar grabación y scroll":"Grabar vídeo y hacer scroll":ue.value?"Pausar scroll":"Iniciar scroll",onClick:Km,onDblclick:Xm},[te.value?(T(),Do(Te(sb),{key:0,size:18})):ue.value?(T(),Do(Te(PS),{key:1,size:18})):(T(),Do(Te(Vu),{key:2,size:18}))],42,LO),mo(b("video",{ref_key:"cameraPreviewVideo",ref:P,class:"camera-preview-bubble",autoplay:"",muted:"",playsinline:"",onDblclick:Fn},null,544),[[fg,q.value]])],64))],2),Po.value?(T(),N("div",MO,[b("div",NO,[d[49]||(d[49]=b("p",{class:"kicker"},"Solemnidad elegida",-1)),d[50]||(d[50]=b("h2",null,"¿Padrenuestro en latín?",-1)),d[51]||(d[51]=b("p",{class:"option-choice-subtitle"}," Esta opción es solemnidad; elige cómo quieres rezar el Padrenuestro. ",-1)),b("div",_O,[b("button",{type:"button",class:"option-choice-item",onClick:d[18]||(d[18]=y=>yt("es"))}," Español "),b("button",{type:"button",class:"option-choice-item",onClick:d[19]||(d[19]=y=>yt("la"))}," Latín ")])])])):Se("",!0)],4))}});Hg({immediate:!0,onNeedReload:Nh,onRegisteredSW:(e,o)=>_h(o)});_g(BO).mount("#app");
//# sourceMappingURL=index-DP7GFKgJ.js.map
