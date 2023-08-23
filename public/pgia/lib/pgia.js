/* eslint-disable */
/* prettier-ignore */

/*!
 * PINEGROW INTERACTIONS (PGIA) Run-time library
 * VERSION: 2.14
 * DATE: 2022-12-04
 * INFO: https://pinegrow.com/docs/interactions/
 * @license Copyright (c) 2020-2022 Pinegrow Pte. Ltd. All rights reserved, with exlusion of supporting libraries.
 *
 * License: You are allowed to use, duplicate, distribute this code as a part of work developed with PGIA, and license it to third parties, who may also license such developed work to end-users.
 *
 * Includes supporting libraries:
 *
 * GreenSock GSAP including ScrollTrigger and ScrollTo plugin, @author: Jack Doyle, jack@greensock.com
 *
 * @license Copyright (c) 2008-2022, GreenSock. All rights reserved.
 * GSAP is subject to the terms of enterprise license between GreenSock and Pinegrow Pte. Ltd., under which Pinegrow Interactions users are allowed to use, duplicate and distribute this code as a part of work developed with PGIA, and license it to third parties, who may also license such developed work to end-users.
 * If GSAP is used outside of PGIA or if GSAP is accesses directly through custom Javascript code, it is subject to its own license https://greensock.com/standard-license
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){"use strict";function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function r(t){return"string"==typeof t}function s(t){return"function"==typeof t}function t(t){return"number"==typeof t}function u(t){return void 0===t}function v(t){return"object"==typeof t}function w(t){return!1!==t}function x(){return"undefined"!=typeof window}function y(t){return s(t)||r(t)}function P(t){return(i=yt(t,ot))&&Ce}function Q(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")}function R(t,e){return!e&&console.warn(t)}function S(t,e){return t&&(ot[t]=e)&&i&&(i[t]=e)||ot}function T(){return 0}function ea(t){var e,r,i=t[0];if(v(i)||s(i)||(t=[t]),!(e=(i._gsap||{}).harness)){for(r=gt.length;r--&&!gt[r].targetTest(i););e=gt[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new jt(t[r],e)))||t.splice(r,1);return t}function fa(t){return t._gsap||ea(Ot(t))[0]._gsap}function ga(t,e,r){return(r=t[e])&&s(r)?t[e]():u(r)&&t.getAttribute&&t.getAttribute(e)||r}function ha(t,e){return(t=t.split(",")).forEach(e)||t}function ia(t){return Math.round(1e5*t)/1e5||0}function ja(t){return Math.round(1e7*t)/1e7||0}function ka(t,e){var r=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),"+"===r?t+i:"-"===r?t-i:"*"===r?t*i:t/i}function la(t,e){for(var r=e.length,i=0;t.indexOf(e[i])<0&&++i<r;);return i<r}function ma(){var t,e,r=ct.length,i=ct.slice(0);for(dt={},t=ct.length=0;t<r;t++)(e=i[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)}function na(t,e,r,i){ct.length&&ma(),t.render(e,r,i||B&&e<0&&(t._initted||t._startAt)),ct.length&&ma()}function oa(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(at).length<2?e:r(t)?t.trim():t}function pa(t){return t}function qa(t,e){for(var r in e)r in t||(t[r]=e[r]);return t}function ta(t,e){for(var r in e)"__proto__"!==r&&"constructor"!==r&&"prototype"!==r&&(t[r]=v(e[r])?ta(t[r]||(t[r]={}),e[r]):e[r]);return t}function ua(t,e){var r,i={};for(r in t)r in e||(i[r]=t[r]);return i}function va(t){var e=t.parent||L,r=t.keyframes?function _setKeyframeDefaults(i){return function(t,e){for(var r in e)r in t||"duration"===r&&i||"ease"===r||(t[r]=e[r])}}($(t.keyframes)):qa;if(w(t.inherit))for(;e;)r(t,e.vars.defaults),e=e.parent||e._dp;return t}function xa(t,e,r,i,n){void 0===r&&(r="_first"),void 0===i&&(i="_last");var a,s=t[i];if(n)for(a=e[n];s&&s[n]>a;)s=s._prev;return s?(e._next=s._next,s._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[i]=e,e._prev=s,e.parent=e._dp=t,e}function ya(t,e,r,i){void 0===r&&(r="_first"),void 0===i&&(i="_last");var n=e._prev,a=e._next;n?n._next=a:t[r]===e&&(t[r]=a),a?a._prev=n:t[i]===e&&(t[i]=n),e._next=e._prev=e.parent=null}function za(t,e){!t.parent||e&&!t.parent.autoRemoveChildren||t.parent.remove(t),t._act=0}function Aa(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var r=t;r;)r._dirty=1,r=r.parent;return t}function Ca(t,e,r,i){return t._startAt&&(B?t._startAt.revert(ht):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))}function Ea(t){return t._repeat?Tt(t._tTime,t=t.duration()+t._rDelay)*t:0}function Ga(t,e){return(t-e._start)*e._ts+(0<=e._ts?0:e._dirty?e.totalDuration():e._tDur)}function Ha(t){return t._end=ja(t._start+(t._tDur/Math.abs(t._ts||t._rts||V)||0))}function Ia(t,e){var r=t._dp;return r&&r.smoothChildTiming&&t._ts&&(t._start=ja(r._time-(0<t._ts?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ha(t),r._dirty||Aa(r,t)),t}function Ja(t,e){var r;if((e._time||e._initted&&!e._dur)&&(r=Ga(t.rawTime(),e),(!e._dur||kt(0,e.totalDuration(),r)-e._tTime>V)&&e.render(r,!0)),Aa(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)0<=r.rawTime()&&r.totalTime(r._tTime),r=r._dp;t._zTime=-V}}function Ka(e,r,i,n){return r.parent&&za(r),r._start=ja((t(i)?i:i||e!==L?xt(e,i,r):e._time)+r._delay),r._end=ja(r._start+(r.totalDuration()/Math.abs(r.timeScale())||0)),xa(e,r,"_first","_last",e._sort?"_start":0),bt(r)||(e._recent=r),n||Ja(e,r),e._ts<0&&Ia(e,e._tTime),e}function La(t,e){return(ot.ScrollTrigger||Q("scrollTrigger",e))&&ot.ScrollTrigger.create(e,t)}function Ma(t,e,r,i,n){return Ht(t,e,n),t._initted?!r&&t._pt&&!B&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&f!==Et.frame?(ct.push(t),t._lazy=[n,i],1):void 0:1}function Ra(t,e,r,i){var n=t._repeat,a=ja(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=n?n<0?1e10:ja(a*(n+1)+t._rDelay*n):a,0<s&&!i&&Ia(t,t._tTime=t._tDur*s),t.parent&&Ha(t),r||Aa(t.parent,t),t}function Sa(t){return t instanceof Ut?Aa(t):Ra(t,t._dur)}function Va(e,r,i){var n,a,s=t(r[1]),o=(s?2:1)+(e<2?0:1),u=r[o];if(s&&(u.duration=r[1]),u.parent=i,e){for(n=u,a=i;a&&!("immediateRender"in n);)n=a.vars.defaults||{},a=w(a.vars.inherit)&&a.parent;u.immediateRender=w(n.immediateRender),e<2?u.runBackwards=1:u.startAt=r[o-1]}return new Gt(r[0],u,r[1+o])}function Wa(t,e){return t||0===t?e(t):e}function Ya(t,e){return r(t)&&(e=st.exec(t))?e[1]:""}function _a(t,e){return t&&v(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&v(t[0]))&&!t.nodeType&&t!==h}function cb(r){return r=Ot(r)[0]||R("Invalid scope")||{},function(t){var e=r.current||r.nativeElement||r;return Ot(t,e.querySelectorAll?e:e===r?R("Invalid scope")||a.createElement("div"):r)}}function db(t){return t.sort(function(){return.5-Math.random()})}function eb(t){if(s(t))return t;var p=v(t)?t:{each:t},_=Yt(p.ease),m=p.from||0,g=parseFloat(p.base)||0,y={},e=0<m&&m<1,T=isNaN(m)||e,b=p.axis,w=m,x=m;return r(m)?w=x={center:.5,edges:.5,end:1}[m]||0:!e&&T&&(w=m[0],x=m[1]),function(t,e,r){var i,n,a,s,o,u,h,l,f,c=(r||p).length,d=y[c];if(!d){if(!(f="auto"===p.grid?0:(p.grid||[1,U])[1])){for(h=-U;h<(h=r[f++].getBoundingClientRect().left)&&f<c;);f--}for(d=y[c]=[],i=T?Math.min(f,c)*w-.5:m%f,n=f===U?0:T?c*x/f-.5:m/f|0,l=U,u=h=0;u<c;u++)a=u%f-i,s=n-(u/f|0),d[u]=o=b?Math.abs("y"===b?s:a):K(a*a+s*s),h<o&&(h=o),o<l&&(l=o);"random"===m&&db(d),d.max=h-l,d.min=l,d.v=c=(parseFloat(p.amount)||parseFloat(p.each)*(c<f?c-1:b?"y"===b?c/f:f:Math.max(f,c/f))||0)*("edges"===m?-1:1),d.b=c<0?g-c:g,d.u=Ya(p.amount||p.each)||0,_=_&&c<0?Lt(_):_}return c=(d[t]-d.min)/d.max||0,ja(d.b+(_?_(c):c)*d.v)+d.u}}function fb(i){var n=Math.pow(10,((i+"").split(".")[1]||"").length);return function(e){var r=ja(Math.round(parseFloat(e)/i)*i*n);return(r-r%1)/n+(t(e)?0:Ya(e))}}function gb(h,e){var l,f,r=$(h);return!r&&v(h)&&(l=r=h.radius||U,h.values?(h=Ot(h.values),(f=!t(h[0]))&&(l*=l)):h=fb(h.increment)),Wa(e,r?s(h)?function(t){return f=h(t),Math.abs(f-t)<=l?f:t}:function(e){for(var r,i,n=parseFloat(f?e.x:e),a=parseFloat(f?e.y:0),s=U,o=0,u=h.length;u--;)(r=f?(r=h[u].x-n)*r+(i=h[u].y-a)*i:Math.abs(h[u]-n))<s&&(s=r,o=u);return o=!l||s<=l?h[o]:e,f||o===e||t(e)?o:o+Ya(e)}:fb(h))}function hb(t,e,r,i){return Wa($(t)?!e:!0===r?!!(r=0):!i,function(){return $(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((t-r/2+Math.random()*(e-t+.99*r))/r)*r*i)/i})}function lb(e,r,t){return Wa(t,function(t){return e[~~r(t)]})}function ob(t){for(var e,r,i,n,a=0,s="";~(e=t.indexOf("random(",a));)i=t.indexOf(")",e),n="["===t.charAt(e+7),r=t.substr(e+7,i-e-7).match(n?at:tt),s+=t.substr(a,e-a)+hb(n?r:+r[0],n?0:+r[1],+r[2]||1e-5),a=i+1;return s+t.substr(a,t.length-a)}function rb(t,e,r){var i,n,a,s=t.labels,o=U;for(i in s)(n=s[i]-e)<0==!!r&&n&&o>(n=Math.abs(n))&&(a=i,o=n);return a}function tb(t){return za(t),t.scrollTrigger&&t.scrollTrigger.kill(!!B),t.progress()<1&&Ct(t,"onInterrupt"),t}function yb(t,e,r){return(6*(t+=t<0?1:1<t?-1:0)<1?e+(r-e)*t*6:t<.5?r:3*t<2?e+(r-e)*(2/3-t)*6:e)*At+.5|0}function zb(e,r,i){var n,a,s,o,u,h,l,f,c,d,p=e?t(e)?[e>>16,e>>8&At,e&At]:0:St.black;if(!p){if(","===e.substr(-1)&&(e=e.substr(0,e.length-1)),St[e])p=St[e];else if("#"===e.charAt(0)){if(e.length<6&&(e="#"+(n=e.charAt(1))+n+(a=e.charAt(2))+a+(s=e.charAt(3))+s+(5===e.length?e.charAt(4)+e.charAt(4):"")),9===e.length)return[(p=parseInt(e.substr(1,6),16))>>16,p>>8&At,p&At,parseInt(e.substr(7),16)/255];p=[(e=parseInt(e.substr(1),16))>>16,e>>8&At,e&At]}else if("hsl"===e.substr(0,3))if(p=d=e.match(tt),r){if(~e.indexOf("="))return p=e.match(et),i&&p.length<4&&(p[3]=1),p}else o=+p[0]%360/360,u=p[1]/100,n=2*(h=p[2]/100)-(a=h<=.5?h*(u+1):h+u-h*u),3<p.length&&(p[3]*=1),p[0]=yb(o+1/3,n,a),p[1]=yb(o,n,a),p[2]=yb(o-1/3,n,a);else p=e.match(tt)||St.transparent;p=p.map(Number)}return r&&!d&&(n=p[0]/At,a=p[1]/At,s=p[2]/At,h=((l=Math.max(n,a,s))+(f=Math.min(n,a,s)))/2,l===f?o=u=0:(c=l-f,u=.5<h?c/(2-l-f):c/(l+f),o=l===n?(a-s)/c+(a<s?6:0):l===a?(s-n)/c+2:(n-a)/c+4,o*=60),p[0]=~~(o+.5),p[1]=~~(100*u+.5),p[2]=~~(100*h+.5)),i&&p.length<4&&(p[3]=1),p}function Ab(t){var r=[],i=[],n=-1;return t.split(Rt).forEach(function(t){var e=t.match(rt)||[];r.push.apply(r,e),i.push(n+=e.length+1)}),r.c=i,r}function Bb(t,e,r){var i,n,a,s,o="",u=(t+o).match(Rt),h=e?"hsla(":"rgba(",l=0;if(!u)return t;if(u=u.map(function(t){return(t=zb(t,e,1))&&h+(e?t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]:t.join(","))+")"}),r&&(a=Ab(t),(i=r.c).join(o)!==a.c.join(o)))for(s=(n=t.replace(Rt,"1").split(rt)).length-1;l<s;l++)o+=n[l]+(~i.indexOf(l)?u.shift()||h+"0,0,0,0)":(a.length?a:u.length?u:r).shift());if(!n)for(s=(n=t.split(Rt)).length-1;l<s;l++)o+=n[l]+u[l];return o+n[s]}function Eb(t){var e,r=t.join(" ");if(Rt.lastIndex=0,Rt.test(r))return e=Dt.test(r),t[1]=Bb(t[1],e),t[0]=Bb(t[0],e,Ab(t[1])),!0}function Nb(t){var e=(t+"").split("("),r=Ft[e[0]];return r&&1<e.length&&r.config?r.config.apply(null,~t.indexOf("{")?[function _parseObjectInString(t){for(var e,r,i,n={},a=t.substr(1,t.length-3).split(":"),s=a[0],o=1,u=a.length;o<u;o++)r=a[o],e=o!==u-1?r.lastIndexOf(","):r.length,i=r.substr(0,e),n[s]=isNaN(i)?i.replace(Bt,"").trim():+i,s=r.substr(e+1).trim();return n}(e[1])]:function _valueInParentheses(t){var e=t.indexOf("(")+1,r=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<r?t.indexOf(")",r+1):r)}(t).split(",").map(oa)):Ft._CE&&It.test(t)?Ft._CE("",t):r}function Pb(t,e){for(var r,i=t._first;i;)i instanceof Ut?Pb(i,e):!i.vars.yoyoEase||i._yoyo&&i._repeat||i._yoyo===e||(i.timeline?Pb(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next}function Rb(t,e,r,i){void 0===r&&(r=function easeOut(t){return 1-e(1-t)}),void 0===i&&(i=function easeInOut(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var n,a={easeIn:e,easeOut:r,easeInOut:i};return ha(t,function(t){for(var e in Ft[t]=ot[t]=a,Ft[n=t.toLowerCase()]=r,a)Ft[n+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=Ft[t+"."+e]=a[e]}),a}function Sb(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}}function Tb(r,t,e){function Hm(t){return 1===t?1:i*Math.pow(2,-10*t)*G((t-a)*n)+1}var i=1<=t?t:1,n=(e||(r?.3:.45))/(t<1?t:1),a=n/W*(Math.asin(1/i)||0),s="out"===r?Hm:"in"===r?function(t){return 1-Hm(1-t)}:Sb(Hm);return n=W/n,s.config=function(t,e){return Tb(r,t,e)},s}function Ub(e,r){function Pm(t){return t?--t*t*((r+1)*t+r)+1:0}void 0===r&&(r=1.70158);var t="out"===e?Pm:"in"===e?function(t){return 1-Pm(1-t)}:Sb(Pm);return t.config=function(t){return Ub(e,t)},t}var I,B,l,L,h,n,a,i,o,f,c,d,p,_,m,g,b,k,M,O,C,A,D,E,z,F,Y,N,j={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},q={duration:.5,overwrite:!1,delay:0},U=1e8,V=1/U,W=2*Math.PI,X=W/4,H=0,K=Math.sqrt,Z=Math.cos,G=Math.sin,J="function"==typeof ArrayBuffer&&ArrayBuffer.isView||function(){},$=Array.isArray,tt=/(?:-?\.?\d|\.)+/gi,et=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,it=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,nt=/[+-]=-?[.\d]+/,at=/[^,'"\[\]\s]+/gi,st=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ot={},ut={suppressEvents:!0,isStart:!0,kill:!1},ht={suppressEvents:!0,kill:!1},lt={suppressEvents:!0},ft={},ct=[],dt={},pt={},_t={},mt=30,gt=[],vt="",yt=function _merge(t,e){for(var r in e)t[r]=e[r];return t},Tt=function _animationCycle(t,e){var r=Math.floor(t/=e);return t&&r===t?r-1:r},bt=function _isFromOrFromStart(t){var e=t.data;return"isFromStart"===e||"isStart"===e},wt={_start:0,endTime:T,totalDuration:T},xt=function _parsePosition(t,e,i){var n,a,s,o=t.labels,u=t._recent||wt,h=t.duration()>=U?u.endTime(!1):t._dur;return r(e)&&(isNaN(e)||e in o)?(a=e.charAt(0),s="%"===e.substr(-1),n=e.indexOf("="),"<"===a||">"===a?(0<=n&&(e=e.replace(/=/,"")),("<"===a?u._start:u.endTime(0<=u._repeat))+(parseFloat(e.substr(1))||0)*(s?(n<0?u:i).totalDuration()/100:1)):n<0?(e in o||(o[e]=h),o[e]):(a=parseFloat(e.charAt(n-1)+e.substr(n+1)),s&&i&&(a=a/100*($(i)?i[0]:i).totalDuration()),1<n?_parsePosition(t,e.substr(0,n-1),i)+a:h+a)):null==e?h:+e},kt=function _clamp(t,e,r){return r<t?t:e<r?e:r},Mt=[].slice,Ot=function toArray(t,e,i){return l&&!e&&l.selector?l.selector(t):!r(t)||i||!n&&zt()?$(t)?function _flatten(t,e,i){return void 0===i&&(i=[]),t.forEach(function(t){return r(t)&&!e||_a(t,1)?i.push.apply(i,Ot(t)):i.push(t)})||i}(t,i):_a(t)?Mt.call(t,0):t?[t]:[]:Mt.call((e||a).querySelectorAll(t),0)},Pt=function mapRange(e,t,r,i,n){var a=t-e,s=i-r;return Wa(n,function(t){return r+((t-e)/a*s||0)})},Ct=function _callback(t,e,r){var i,n,a,s=t.vars,o=s[e],u=l,h=t._ctx;if(o)return i=s[e+"Params"],n=s.callbackScope||t,r&&ct.length&&ma(),h&&(l=h),a=i?o.apply(n,i):o.call(n),l=u,a},At=255,St={aqua:[0,At,At],lime:[0,At,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,At],navy:[0,0,128],white:[At,At,At],olive:[128,128,0],yellow:[At,At,0],orange:[At,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[At,0,0],pink:[At,192,203],cyan:[0,At,At],transparent:[At,At,At,0]},Rt=function(){var t,e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";for(t in St)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),Dt=/hsl[a]?\(/,Et=(M=Date.now,O=500,C=33,A=M(),D=A,z=E=1e3/240,g={time:0,frame:0,tick:function tick(){wl(!0)},deltaRatio:function deltaRatio(t){return b/(1e3/(t||60))},wake:function wake(){o&&(!n&&x()&&(h=n=window,a=h.document||{},ot.gsap=Ce,(h.gsapVersions||(h.gsapVersions=[])).push(Ce.version),P(i||h.GreenSockGlobals||!h.gsap&&h||{}),m=h.requestAnimationFrame),p&&g.sleep(),_=m||function(t){return setTimeout(t,z-1e3*g.time+1|0)},d=1,wl(2))},sleep:function sleep(){(m?h.cancelAnimationFrame:clearTimeout)(p),d=0,_=T},lagSmoothing:function lagSmoothing(t,e){O=t||1e8,C=Math.min(e,O,0)},fps:function fps(t){E=1e3/(t||240),z=1e3*g.time+E},add:function add(n,t,e){var a=t?function(t,e,r,i){n(t,e,r,i),g.remove(a)}:n;return g.remove(n),F[e?"unshift":"push"](a),zt(),a},remove:function remove(t,e){~(e=F.indexOf(t))&&F.splice(e,1)&&e<=k&&k--},_listeners:F=[]}),zt=function _wake(){return!d&&Et.wake()},Ft={},It=/^[\d.\-M][\d.\-,\s]/,Bt=/["']/g,Lt=function _invertEase(e){return function(t){return 1-e(1-t)}},Yt=function _parseEase(t,e){return t&&(s(t)?t:Ft[t]||Nb(t))||e};function wl(t){var e,r,i,n,a=M()-D,s=!0===t;if(O<a&&(A+=a-C),(0<(e=(i=(D+=a)-A)-z)||s)&&(n=++g.frame,b=i-1e3*g.time,g.time=i/=1e3,z+=e+(E<=e?4:E-e),r=1),s||(p=_(wl)),r)for(k=0;k<F.length;k++)F[k](i,b,n,t)}function en(t){return t<N?Y*t*t:t<.7272727272727273?Y*Math.pow(t-1.5/2.75,2)+.75:t<.9090909090909092?Y*(t-=2.25/2.75)*t+.9375:Y*Math.pow(t-2.625/2.75,2)+.984375}ha("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;Rb(t+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(2*t,r)/2:1-Math.pow(2*(1-t),r)/2})}),Ft.Linear.easeNone=Ft.none=Ft.Linear.easeIn,Rb("Elastic",Tb("in"),Tb("out"),Tb()),Y=7.5625,N=1/2.75,Rb("Bounce",function(t){return 1-en(1-t)},en),Rb("Expo",function(t){return t?Math.pow(2,10*(t-1)):0}),Rb("Circ",function(t){return-(K(1-t*t)-1)}),Rb("Sine",function(t){return 1===t?1:1-Z(t*X)}),Rb("Back",Ub("in"),Ub("out"),Ub()),Ft.SteppedEase=Ft.steps=ot.SteppedEase={config:function config(t,e){void 0===t&&(t=1);var r=1/t,i=t+(e?0:1),n=e?1:0;return function(t){return((i*kt(0,.99999999,t)|0)+n)*r}}},q.ease=Ft["quad.out"],ha("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return vt+=t+","+t+"Params,"});var Nt,jt=function GSCache(t,e){this.id=H++,(t._gsap=this).target=t,this.harness=e,this.get=e?e.get:ga,this.set=e?e.getSetter:re},qt=((Nt=Animation.prototype).delay=function delay(t){return t||0===t?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},Nt.duration=function duration(t){return arguments.length?this.totalDuration(0<this._repeat?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},Nt.totalDuration=function totalDuration(t){return arguments.length?(this._dirty=0,Ra(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},Nt.totalTime=function totalTime(t,e){if(zt(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ia(this,t),!r._dp||r.parent||Ja(r,this);r&&r.parent;)r.parent._time!==r._start+(0<=r._ts?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(0<this._ts&&t<this._tDur||this._ts<0&&0<t||!this._tDur&&!t)&&Ka(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===V||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),na(this,t,e)),this},Nt.time=function time(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+Ea(this))%(this._dur+this._rDelay)||(t?this._dur:0),e):this._time},Nt.totalProgress=function totalProgress(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},Nt.progress=function progress(t,e){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?t:1-t)+Ea(this),e):this.duration()?Math.min(1,this._time/this._dur):this.ratio},Nt.iteration=function iteration(t,e){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,e):this._repeat?Tt(this._tTime,r)+1:1},Nt.timeScale=function timeScale(t){if(!arguments.length)return this._rts===-V?0:this._rts;if(this._rts===t)return this;var e=this.parent&&this._ts?Ga(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-V?0:this._rts,this.totalTime(kt(-this._delay,this._tDur,e),!0),Ha(this),function _recacheAncestors(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t}(this)},Nt.paused=function paused(t){return arguments.length?(this._ps!==t&&((this._ps=t)?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(zt(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&Math.abs(this._zTime)!==V&&(this._tTime-=V)))),this):this._ps},Nt.startTime=function startTime(t){if(arguments.length){this._start=t;var e=this.parent||this._dp;return!e||!e._sort&&this.parent||Ka(e,this,t-this._delay),this}return this._start},Nt.endTime=function endTime(t){return this._start+(w(t)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},Nt.rawTime=function rawTime(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ga(e.rawTime(t),this):this._tTime:this._tTime},Nt.revert=function revert(t){void 0===t&&(t=lt);var e=B;return B=t,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(t),this.totalTime(-.01,t.suppressEvents)),"nested"!==this.data&&!1!==t.kill&&this.kill(),B=e,this},Nt.globalTime=function globalTime(t){for(var e=this,r=arguments.length?t:e.rawTime();e;)r=e._start+r/(e._ts||1),e=e._dp;return!this.parent&&this.vars.immediateRender?-1:r},Nt.repeat=function repeat(t){return arguments.length?(this._repeat=t===1/0?-2:t,Sa(this)):-2===this._repeat?1/0:this._repeat},Nt.repeatDelay=function repeatDelay(t){if(arguments.length){var e=this._time;return this._rDelay=t,Sa(this),e?this.time(e):this}return this._rDelay},Nt.yoyo=function yoyo(t){return arguments.length?(this._yoyo=t,this):this._yoyo},Nt.seek=function seek(t,e){return this.totalTime(xt(this,t),w(e))},Nt.restart=function restart(t,e){return this.play().totalTime(t?-this._delay:0,w(e))},Nt.play=function play(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},Nt.reverse=function reverse(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},Nt.pause=function pause(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},Nt.resume=function resume(){return this.paused(!1)},Nt.reversed=function reversed(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-V:0)),this):this._rts<0},Nt.invalidate=function invalidate(){return this._initted=this._act=0,this._zTime=-V,this},Nt.isActive=function isActive(){var t,e=this.parent||this._dp,r=this._start;return!(e&&!(this._ts&&this._initted&&e.isActive()&&(t=e.rawTime(!0))>=r&&t<this.endTime(!0)-V))},Nt.eventCallback=function eventCallback(t,e,r){var i=this.vars;return 1<arguments.length?(e?(i[t]=e,r&&(i[t+"Params"]=r),"onUpdate"===t&&(this._onUpdate=e)):delete i[t],this):i[t]},Nt.then=function then(t){var i=this;return new Promise(function(e){function zo(){var t=i.then;i.then=null,s(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=t),e(r),i.then=t}var r=s(t)?t:pa;i._initted&&1===i.totalProgress()&&0<=i._ts||!i._tTime&&i._ts<0?zo():i._prom=zo})},Nt.kill=function kill(){tb(this)},Animation);function Animation(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ra(this,+t.duration,1,1),this.data=t.data,l&&(this._ctx=l).data.push(this),d||Et.wake()}qa(qt.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-V,_prom:0,_ps:!1,_rts:1});var Ut=function(i){function Timeline(t,e){var r;return void 0===t&&(t={}),(r=i.call(this,t)||this).labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=w(t.sortChildren),L&&Ka(t.parent||L,_assertThisInitialized(r),e),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&La(_assertThisInitialized(r),t.scrollTrigger),r}_inheritsLoose(Timeline,i);var e=Timeline.prototype;return e.to=function to(t,e,r){return Va(0,arguments,this),this},e.from=function from(t,e,r){return Va(1,arguments,this),this},e.fromTo=function fromTo(t,e,r,i){return Va(2,arguments,this),this},e.set=function set(t,e,r){return e.duration=0,e.parent=this,va(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new Gt(t,e,xt(this,r),1),this},e.call=function call(t,e,r){return Ka(this,Gt.delayedCall(0,t,e),r)},e.staggerTo=function staggerTo(t,e,r,i,n,a,s){return r.duration=e,r.stagger=r.stagger||i,r.onComplete=a,r.onCompleteParams=s,r.parent=this,new Gt(t,r,xt(this,n)),this},e.staggerFrom=function staggerFrom(t,e,r,i,n,a,s){return r.runBackwards=1,va(r).immediateRender=w(r.immediateRender),this.staggerTo(t,e,r,i,n,a,s)},e.staggerFromTo=function staggerFromTo(t,e,r,i,n,a,s,o){return i.startAt=r,va(i).immediateRender=w(i.immediateRender),this.staggerTo(t,e,i,n,a,s,o)},e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,c,d,p,_=this._time,m=this._dirty?this.totalDuration():this._tDur,g=this._dur,v=t<=0?0:ja(t),y=this._zTime<0!=t<0&&(this._initted||!g);if(this!==L&&m<v&&0<=t&&(v=m),v!==this._tTime||r||y){if(_!==this._time&&g&&(v+=this._time-_,t+=this._time-_),i=v,f=this._start,u=!(l=this._ts),y&&(g||(_=this._zTime),!t&&e||(this._zTime=t)),this._repeat){if(d=this._yoyo,o=g+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*o+t,e,r);if(i=ja(v%o),v===m?(s=this._repeat,i=g):((s=~~(v/o))&&s===v/o&&(i=g,s--),g<i&&(i=g)),c=Tt(this._tTime,o),!_&&this._tTime&&c!==s&&(c=s),d&&1&s&&(i=g-i,p=1),s!==c&&!this._lock){var T=d&&1&c,b=T===(d&&1&s);if(s<c&&(T=!T),_=T?0:g,this._lock=1,this.render(_||(p?0:ja(s*o)),e,!g)._lock=0,this._tTime=v,!e&&this.parent&&Ct(this,"onRepeat"),this.vars.repeatRefresh&&!p&&(this.invalidate()._lock=1),_&&_!==this._time||u!=!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(g=this._dur,m=this._tDur,b&&(this._lock=2,_=T?g:-1e-4,this.render(_,!0),this.vars.repeatRefresh&&!p&&this.invalidate()),this._lock=0,!this._ts&&!u)return this;Pb(this,p)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=function _findNextPauseTween(t,e,r){var i;if(e<r)for(i=t._first;i&&i._start<=r;){if("isPause"===i.data&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=r;){if("isPause"===i.data&&i._start<e)return i;i=i._prev}}(this,ja(_),ja(i)))&&(v-=i-(i=h._start)),this._tTime=v,this._time=i,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=t,_=0),!_&&i&&!e&&(Ct(this,"onStart"),this._tTime!==v))return this;if(_<=i&&0<=t)for(n=this._first;n;){if(a=n._next,(n._act||i>=n._start)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(i-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(i-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=-V);break}}n=a}else{n=this._last;for(var w=t<0?t:i;n;){if(a=n._prev,(n._act||w<=n._end)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(w-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(w-n._start)*n._ts,e,r||B&&(n._initted||n._startAt)),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=w?-V:V);break}}n=a}}if(h&&!e&&(this.pause(),h.render(_<=i?0:-V)._zTime=_<=i?1:-1,this._ts))return this._start=f,Ha(this),this.render(t,e,r);this._onUpdate&&!e&&Ct(this,"onUpdate",!0),(v===m&&this._tTime>=this.totalDuration()||!v&&_)&&(f!==this._start&&Math.abs(l)===Math.abs(this._ts)||this._lock||(!t&&g||!(v===m&&0<this._ts||!v&&this._ts<0)||za(this,1),e||t<0&&!_||!v&&!_&&m||(Ct(this,v===m&&0<=t?"onComplete":"onReverseComplete",!0),!this._prom||v<m&&0<this.timeScale()||this._prom())))}return this},e.add=function add(e,i){var n=this;if(t(i)||(i=xt(this,i,e)),!(e instanceof qt)){if($(e))return e.forEach(function(t){return n.add(t,i)}),this;if(r(e))return this.addLabel(e,i);if(!s(e))return this;e=Gt.delayedCall(0,e)}return this!==e?Ka(this,e,i):this},e.getChildren=function getChildren(t,e,r,i){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),void 0===i&&(i=-U);for(var n=[],a=this._first;a;)a._start>=i&&(a instanceof Gt?e&&n.push(a):(r&&n.push(a),t&&n.push.apply(n,a.getChildren(!0,e,r)))),a=a._next;return n},e.getById=function getById(t){for(var e=this.getChildren(1,1,1),r=e.length;r--;)if(e[r].vars.id===t)return e[r]},e.remove=function remove(t){return r(t)?this.removeLabel(t):s(t)?this.killTweensOf(t):(ya(this,t),t===this._recent&&(this._recent=this._last),Aa(this))},e.totalTime=function totalTime(t,e){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ja(Et.time-(0<this._ts?t/this._ts:(this.totalDuration()-t)/-this._ts))),i.prototype.totalTime.call(this,t,e),this._forcing=0,this):this._tTime},e.addLabel=function addLabel(t,e){return this.labels[t]=xt(this,e),this},e.removeLabel=function removeLabel(t){return delete this.labels[t],this},e.addPause=function addPause(t,e,r){var i=Gt.delayedCall(0,e||T,r);return i.data="isPause",this._hasPause=1,Ka(this,i,xt(this,t))},e.removePause=function removePause(t){var e=this._first;for(t=xt(this,t);e;)e._start===t&&"isPause"===e.data&&za(e),e=e._next},e.killTweensOf=function killTweensOf(t,e,r){for(var i=this.getTweensOf(t,r),n=i.length;n--;)Vt!==i[n]&&i[n].kill(t,e);return this},e.getTweensOf=function getTweensOf(e,r){for(var i,n=[],a=Ot(e),s=this._first,o=t(r);s;)s instanceof Gt?la(s._targets,a)&&(o?(!Vt||s._initted&&s._ts)&&s.globalTime(0)<=r&&s.globalTime(s.totalDuration())>r:!r||s.isActive())&&n.push(s):(i=s.getTweensOf(a,r)).length&&n.push.apply(n,i),s=s._next;return n},e.tweenTo=function tweenTo(t,e){e=e||{};var r,i=this,n=xt(i,t),a=e.startAt,s=e.onStart,o=e.onStartParams,u=e.immediateRender,h=Gt.to(i,qa({ease:e.ease||"none",lazy:!1,immediateRender:!1,time:n,overwrite:"auto",duration:e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale())||V,onStart:function onStart(){if(i.pause(),!r){var t=e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale());h._dur!==t&&Ra(h,t,0,1).render(h._time,!0,!0),r=1}s&&s.apply(h,o||[])}},e));return u?h.render(0):h},e.tweenFromTo=function tweenFromTo(t,e,r){return this.tweenTo(e,qa({startAt:{time:xt(this,t)}},r))},e.recent=function recent(){return this._recent},e.nextLabel=function nextLabel(t){return void 0===t&&(t=this._time),rb(this,xt(this,t))},e.previousLabel=function previousLabel(t){return void 0===t&&(t=this._time),rb(this,xt(this,t),1)},e.currentLabel=function currentLabel(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+V)},e.shiftChildren=function shiftChildren(t,e,r){void 0===r&&(r=0);for(var i,n=this._first,a=this.labels;n;)n._start>=r&&(n._start+=t,n._end+=t),n=n._next;if(e)for(i in a)a[i]>=r&&(a[i]+=t);return Aa(this)},e.invalidate=function invalidate(t){var e=this._first;for(this._lock=0;e;)e.invalidate(t),e=e._next;return i.prototype.invalidate.call(this,t)},e.clear=function clear(t){void 0===t&&(t=!0);for(var e,r=this._first;r;)e=r._next,this.remove(r),r=e;return this._dp&&(this._time=this._tTime=this._pTime=0),t&&(this.labels={}),Aa(this)},e.totalDuration=function totalDuration(t){var e,r,i,n=0,a=this,s=a._last,o=U;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-t:t));if(a._dirty){for(i=a.parent;s;)e=s._prev,s._dirty&&s.totalDuration(),o<(r=s._start)&&a._sort&&s._ts&&!a._lock?(a._lock=1,Ka(a,s,r-s._delay,1)._lock=0):o=r,r<0&&s._ts&&(n-=r,(!i&&!a._dp||i&&i.smoothChildTiming)&&(a._start+=r/a._ts,a._time-=r,a._tTime-=r),a.shiftChildren(-r,!1,-Infinity),o=0),s._end>n&&s._ts&&(n=s._end),s=e;Ra(a,a===L&&a._time>n?a._time:n,1,1),a._dirty=0}return a._tDur},Timeline.updateRoot=function updateRoot(t){if(L._ts&&(na(L,Ga(t,L)),f=Et.frame),Et.frame>=mt){mt+=j.autoSleep||120;var e=L._first;if((!e||!e._ts)&&j.autoSleep&&Et._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||Et.sleep()}}},Timeline}(qt);qa(Ut.prototype,{_lock:0,_hasPause:0,_forcing:0});function _b(t,e,i,n,a,o){var u,h,l,f;if(pt[t]&&!1!==(u=new pt[t]).init(a,u.rawVars?e[t]:function _processVars(t,e,i,n,a){if(s(t)&&(t=Qt(t,a,e,i,n)),!v(t)||t.style&&t.nodeType||$(t)||J(t))return r(t)?Qt(t,a,e,i,n):t;var o,u={};for(o in t)u[o]=Qt(t[o],a,e,i,n);return u}(e[t],n,a,o,i),i,n,o)&&(i._pt=h=new pe(i._pt,a,t,0,1,u.render,u,0,u.priority),i!==c))for(l=i._ptLookup[i._targets.indexOf(a)],f=u._props.length;f--;)l[u._props[f]]=h;return u}function fc(t,r,e,i){var n,a,s=r.ease||i||"power1.inOut";if($(r))a=e[t]||(e[t]=[]),r.forEach(function(t,e){return a.push({t:e/(r.length-1)*100,v:t,e:s})});else for(n in r)a=e[n]||(e[n]=[]),"ease"===n||a.push({t:parseFloat(t),v:r[n],e:s})}var Vt,Wt,Xt=function _addPropTween(t,e,i,n,a,o,u,h,l,f){s(n)&&(n=n(a||0,t,o));var c,d=t[e],p="get"!==i?i:s(d)?l?t[e.indexOf("set")||!s(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():d,_=s(d)?l?ee:$t:Jt;if(r(n)&&(~n.indexOf("random(")&&(n=ob(n)),"="===n.charAt(1)&&(!(c=ka(p,n)+(Ya(p)||0))&&0!==c||(n=c))),!f||p!==n||Wt)return isNaN(p*n)||""===n?(d||e in t||Q(e,n),function _addComplexStringPropTween(t,e,r,i,n,a,s){var o,u,h,l,f,c,d,p,_=new pe(this._pt,t,e,0,1,se,null,n),m=0,g=0;for(_.b=r,_.e=i,r+="",(d=~(i+="").indexOf("random("))&&(i=ob(i)),a&&(a(p=[r,i],t,e),r=p[0],i=p[1]),u=r.match(it)||[];o=it.exec(i);)l=o[0],f=i.substring(m,o.index),h?h=(h+1)%5:"rgba("===f.substr(-5)&&(h=1),l!==u[g++]&&(c=parseFloat(u[g-1])||0,_._pt={_next:_._pt,p:f||1===g?f:",",s:c,c:"="===l.charAt(1)?ka(c,l)-c:parseFloat(l)-c,m:h&&h<4?Math.round:0},m=it.lastIndex);return _.c=m<i.length?i.substring(m,i.length):"",_.fp=s,(nt.test(i)||d)&&(_.e=0),this._pt=_}.call(this,t,e,p,n,_,h||j.stringFilter,l)):(c=new pe(this._pt,t,e,+p||0,n-(p||0),"boolean"==typeof d?ae:ne,0,_),l&&(c.fp=l),u&&c.modifier(u,this,t),this._pt=c)},Ht=function _initTween(t,e,r){var i,n,a,s,o,u,h,l,f,c,d,p,_,m=t.vars,g=m.ease,v=m.startAt,y=m.immediateRender,T=m.lazy,b=m.onUpdate,x=m.onUpdateParams,k=m.callbackScope,M=m.runBackwards,O=m.yoyoEase,P=m.keyframes,C=m.autoRevert,A=t._dur,S=t._startAt,R=t._targets,D=t.parent,E=D&&"nested"===D.data?D.vars.targets:R,z="auto"===t._overwrite&&!I,F=t.timeline;if(!F||P&&g||(g="none"),t._ease=Yt(g,q.ease),t._yEase=O?Lt(Yt(!0===O?g:O,q.ease)):0,O&&t._yoyo&&!t._repeat&&(O=t._yEase,t._yEase=t._ease,t._ease=O),t._from=!F&&!!m.runBackwards,!F||P&&!m.stagger){if(p=(l=R[0]?fa(R[0]).harness:0)&&m[l.prop],i=ua(m,ft),S&&(S._zTime<0&&S.progress(1),e<0&&M&&y&&!C?S.render(-1,!0):S.revert(M&&A?ht:ut),S._lazy=0),v){if(za(t._startAt=Gt.set(R,qa({data:"isStart",overwrite:!1,parent:D,immediateRender:!0,lazy:w(T),startAt:null,delay:0,onUpdate:b,onUpdateParams:x,callbackScope:k,stagger:0},v))),e<(t._startAt._dp=0)&&(B||!y&&!C)&&t._startAt.revert(ht),y&&A&&e<=0&&r<=0)return void(e&&(t._zTime=e))}else if(M&&A&&!S)if(e&&(y=!1),a=qa({overwrite:!1,data:"isFromStart",lazy:y&&w(T),immediateRender:y,stagger:0,parent:D},i),p&&(a[l.prop]=p),za(t._startAt=Gt.set(R,a)),e<(t._startAt._dp=0)&&(B?t._startAt.revert(ht):t._startAt.render(-1,!0)),t._zTime=e,y){if(!e)return}else _initTween(t._startAt,V,V);for(t._pt=t._ptCache=0,T=A&&w(T)||T&&!A,n=0;n<R.length;n++){if(h=(o=R[n])._gsap||ea(R)[n]._gsap,t._ptLookup[n]=c={},dt[h.id]&&ct.length&&ma(),d=E===R?n:E.indexOf(o),l&&!1!==(f=new l).init(o,p||i,t,d,E)&&(t._pt=s=new pe(t._pt,o,f.name,0,1,f.render,f,0,f.priority),f._props.forEach(function(t){c[t]=s}),f.priority&&(u=1)),!l||p)for(a in i)pt[a]&&(f=_b(a,i,t,d,o,E))?f.priority&&(u=1):c[a]=s=Xt.call(t,o,a,"get",i[a],d,E,0,m.stringFilter);t._op&&t._op[n]&&t.kill(o,t._op[n]),z&&t._pt&&(Vt=t,L.killTweensOf(o,c,t.globalTime(e)),_=!t.parent,Vt=0),t._pt&&T&&(dt[h.id]=1)}u&&de(t),t._onInit&&t._onInit(t)}t._onUpdate=b,t._initted=(!t._op||t._pt)&&!_,P&&e<=0&&F.render(U,!0,!0)},Qt=function _parseFuncOrString(t,e,i,n,a){return s(t)?t.call(e,i,n,a):r(t)&&~t.indexOf("random(")?ob(t):t},Kt=vt+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Zt={};ha(Kt+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return Zt[t]=1});var Gt=function(z){function Tween(e,r,i,n){var a;"number"==typeof r&&(i.duration=r,r=i,i=null);var s,o,u,h,l,f,c,d,p=(a=z.call(this,n?r:va(r))||this).vars,_=p.duration,m=p.delay,g=p.immediateRender,T=p.stagger,b=p.overwrite,x=p.keyframes,k=p.defaults,M=p.scrollTrigger,O=p.yoyoEase,P=r.parent||L,C=($(e)||J(e)?t(e[0]):"length"in r)?[e]:Ot(e);if(a._targets=C.length?ea(C):R("GSAP target "+e+" not found. https://greensock.com",!j.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=b,x||T||y(_)||y(m)){if(r=a.vars,(s=a.timeline=new Ut({data:"nested",defaults:k||{},targets:P&&"nested"===P.data?P.vars.targets:C})).kill(),s.parent=s._dp=_assertThisInitialized(a),s._start=0,T||y(_)||y(m)){if(h=C.length,c=T&&eb(T),v(T))for(l in T)~Kt.indexOf(l)&&((d=d||{})[l]=T[l]);for(o=0;o<h;o++)(u=ua(r,Zt)).stagger=0,O&&(u.yoyoEase=O),d&&yt(u,d),f=C[o],u.duration=+Qt(_,_assertThisInitialized(a),o,f,C),u.delay=(+Qt(m,_assertThisInitialized(a),o,f,C)||0)-a._delay,!T&&1===h&&u.delay&&(a._delay=m=u.delay,a._start+=m,u.delay=0),s.to(f,u,c?c(o,f,C):0),s._ease=Ft.none;s.duration()?_=m=0:a.timeline=0}else if(x){va(qa(s.vars.defaults,{ease:"none"})),s._ease=Yt(x.ease||r.ease||"none");var A,S,D,E=0;if($(x))x.forEach(function(t){return s.to(C,t,">")}),s.duration();else{for(l in u={},x)"ease"===l||"easeEach"===l||fc(l,x[l],u,x.easeEach);for(l in u)for(A=u[l].sort(function(t,e){return t.t-e.t}),o=E=0;o<A.length;o++)(D={ease:(S=A[o]).e,duration:(S.t-(o?A[o-1].t:0))/100*_})[l]=S.v,s.to(C,D,E),E+=D.duration;s.duration()<_&&s.to({},{duration:_-s.duration()})}}_||a.duration(_=s.duration())}else a.timeline=0;return!0!==b||I||(Vt=_assertThisInitialized(a),L.killTweensOf(C),Vt=0),Ka(P,_assertThisInitialized(a),i),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(g||!_&&!x&&a._start===ja(P._time)&&w(g)&&function _hasNoPausedAncestors(t){return!t||t._ts&&_hasNoPausedAncestors(t.parent)}(_assertThisInitialized(a))&&"nested"!==P.data)&&(a._tTime=-V,a.render(Math.max(0,-m)||0)),M&&La(_assertThisInitialized(a),M),a}_inheritsLoose(Tween,z);var e=Tween.prototype;return e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,c=this._time,d=this._tDur,p=this._dur,_=t<0,m=d-V<t&&!_?d:t<V?0:t;if(p){if(m!==this._tTime||!t||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=_){if(i=m,l=this.timeline,this._repeat){if(s=p+this._rDelay,this._repeat<-1&&_)return this.totalTime(100*s+t,e,r);if(i=ja(m%s),m===d?(a=this._repeat,i=p):((a=~~(m/s))&&a===m/s&&(i=p,a--),p<i&&(i=p)),(u=this._yoyo&&1&a)&&(f=this._yEase,i=p-i),o=Tt(this._tTime,s),i===c&&!r&&this._initted)return this._tTime=m,this;a!==o&&(l&&this._yEase&&Pb(l,u),!this.vars.repeatRefresh||u||this._lock||(this._lock=r=1,this.render(ja(s*a),!0).invalidate()._lock=0))}if(!this._initted){if(Ma(this,_?t:i,r,e,m))return this._tTime=0,this;if(c!==this._time)return this;if(p!==this._dur)return this.render(t,e,r)}if(this._tTime=m,this._time=i,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(f||this._ease)(i/p),this._from&&(this.ratio=h=1-h),i&&!c&&!e&&(Ct(this,"onStart"),this._tTime!==m))return this;for(n=this._pt;n;)n.r(h,n.d),n=n._next;l&&l.render(t<0?t:!i&&u?-V:l._dur*l._ease(i/this._dur),e,r)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(_&&Ca(this,t,0,r),Ct(this,"onUpdate")),this._repeat&&a!==o&&this.vars.onRepeat&&!e&&this.parent&&Ct(this,"onRepeat"),m!==this._tDur&&m||this._tTime!==m||(_&&!this._onUpdate&&Ca(this,t,0,!0),!t&&p||!(m===this._tDur&&0<this._ts||!m&&this._ts<0)||za(this,1),e||_&&!c||!(m||c||u)||(Ct(this,m===d?"onComplete":"onReverseComplete",!0),!this._prom||m<d&&0<this.timeScale()||this._prom()))}}else!function _renderZeroDurationTween(t,e,r,i){var n,a,s,o=t.ratio,u=e<0||!e&&(!t._start&&function _parentPlayheadIsBeforeStart(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||_parentPlayheadIsBeforeStart(e))}(t)&&(t._initted||!bt(t))||(t._ts<0||t._dp._ts<0)&&!bt(t))?0:1,h=t._rDelay,l=0;if(h&&t._repeat&&(l=kt(0,t._tDur,e),a=Tt(l,h),t._yoyo&&1&a&&(u=1-u),a!==Tt(t._tTime,h)&&(o=1-u,t.vars.repeatRefresh&&t._initted&&t.invalidate())),u!==o||B||i||t._zTime===V||!e&&t._zTime){if(!t._initted&&Ma(t,e,i,r,l))return;for(s=t._zTime,t._zTime=e||(r?V:0),r=r||e&&!s,t.ratio=u,t._from&&(u=1-u),t._time=0,t._tTime=l,n=t._pt;n;)n.r(u,n.d),n=n._next;e<0&&Ca(t,e,0,!0),t._onUpdate&&!r&&Ct(t,"onUpdate"),l&&t._repeat&&!r&&t.parent&&Ct(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===u&&(u&&za(t,1),r||B||(Ct(t,u?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)}(this,t,e,r);return this},e.targets=function targets(){return this._targets},e.invalidate=function invalidate(t){return t&&this.vars.runBackwards||(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),z.prototype.invalidate.call(this,t)},e.resetTo=function resetTo(t,e,r,i){d||Et.wake(),this._ts||this.play();var n,a=Math.min(this._dur,(this._dp._time-this._start)*this._ts);return this._initted||Ht(this,a),n=this._ease(a/this._dur),function _updatePropTweens(t,e,r,i,n,a,s){var o,u,h,l,f=(t._pt&&t._ptCache||(t._ptCache={}))[e];if(!f)for(f=t._ptCache[e]=[],h=t._ptLookup,l=t._targets.length;l--;){if((o=h[l][e])&&o.d&&o.d._pt)for(o=o.d._pt;o&&o.p!==e&&o.fp!==e;)o=o._next;if(!o)return Wt=1,t.vars[e]="+=0",Ht(t,s),Wt=0,1;f.push(o)}for(l=f.length;l--;)(o=(u=f[l])._pt||u).s=!i&&0!==i||n?o.s+(i||0)+a*o.c:i,o.c=r-o.s,u.e&&(u.e=ia(r)+Ya(u.e)),u.b&&(u.b=o.s+Ya(u.b))}(this,t,e,r,i,n,a)?this.resetTo(t,e,r,i):(Ia(this,0),this.parent||xa(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function kill(t,e){if(void 0===e&&(e="all"),!(t||e&&"all"!==e))return this._lazy=this._pt=0,this.parent?tb(this):this;if(this.timeline){var i=this.timeline.totalDuration();return this.timeline.killTweensOf(t,e,Vt&&!0!==Vt.vars.overwrite)._first||tb(this),this.parent&&i!==this.timeline.totalDuration()&&Ra(this,this._dur*this.timeline._tDur/i,0,1),this}var n,a,s,o,u,h,l,f=this._targets,c=t?Ot(t):f,d=this._ptLookup,p=this._pt;if((!e||"all"===e)&&function _arraysMatch(t,e){for(var r=t.length,i=r===e.length;i&&r--&&t[r]===e[r];);return r<0}(f,c))return"all"===e&&(this._pt=0),tb(this);for(n=this._op=this._op||[],"all"!==e&&(r(e)&&(u={},ha(e,function(t){return u[t]=1}),e=u),e=function _addAliasesToVars(t,e){var r,i,n,a,s=t[0]?fa(t[0]).harness:0,o=s&&s.aliases;if(!o)return e;for(i in r=yt({},e),o)if(i in r)for(n=(a=o[i].split(",")).length;n--;)r[a[n]]=r[i];return r}(f,e)),l=f.length;l--;)if(~c.indexOf(f[l]))for(u in a=d[l],"all"===e?(n[l]=e,o=a,s={}):(s=n[l]=n[l]||{},o=e),o)(h=a&&a[u])&&("kill"in h.d&&!0!==h.d.kill(u)||ya(this,h,"_pt"),delete a[u]),"all"!==s&&(s[u]=1);return this._initted&&!this._pt&&p&&tb(this),this},Tween.to=function to(t,e,r){return new Tween(t,e,r)},Tween.from=function from(t,e){return Va(1,arguments)},Tween.delayedCall=function delayedCall(t,e,r,i){return new Tween(e,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:e,onReverseComplete:e,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},Tween.fromTo=function fromTo(t,e,r){return Va(2,arguments)},Tween.set=function set(t,e){return e.duration=0,e.repeatDelay||(e.repeat=0),new Tween(t,e)},Tween.killTweensOf=function killTweensOf(t,e,r){return L.killTweensOf(t,e,r)},Tween}(qt);qa(Gt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),ha("staggerTo,staggerFrom,staggerFromTo",function(r){Gt[r]=function(){var t=new Ut,e=Mt.call(arguments,0);return e.splice("staggerFromTo"===r?5:4,0,0),t[r].apply(t,e)}});function nc(t,e,r){return t.setAttribute(e,r)}function vc(t,e,r,i){i.mSet(t,e,i.m.call(i.tween,r,i.mt),i)}var Jt=function _setterPlain(t,e,r){return t[e]=r},$t=function _setterFunc(t,e,r){return t[e](r)},ee=function _setterFuncWithParam(t,e,r,i){return t[e](i.fp,r)},re=function _getSetter(t,e){return s(t[e])?$t:u(t[e])&&t.setAttribute?nc:Jt},ne=function _renderPlain(t,e){return e.set(e.t,e.p,Math.round(1e6*(e.s+e.c*t))/1e6,e)},ae=function _renderBoolean(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},se=function _renderComplexString(t,e){var r=e._pt,i="";if(!t&&e.b)i=e.b;else if(1===t&&e.e)i=e.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*t):Math.round(1e4*(r.s+r.c*t))/1e4)+i,r=r._next;i+=e.c}e.set(e.t,e.p,i,e)},oe=function _renderPropTweens(t,e){for(var r=e._pt;r;)r.r(t,r.d),r=r._next},le=function _addPluginModifier(t,e,r,i){for(var n,a=this._pt;a;)n=a._next,a.p===i&&a.modifier(t,e,r),a=n},fe=function _killPropTweensOf(t){for(var e,r,i=this._pt;i;)r=i._next,i.p===t&&!i.op||i.op===t?ya(this,i,"_pt"):i.dep||(e=1),i=r;return!e},de=function _sortPropTweensByPriority(t){for(var e,r,i,n,a=t._pt;a;){for(e=a._next,r=i;r&&r.pr>a.pr;)r=r._next;(a._prev=r?r._prev:n)?a._prev._next=a:i=a,(a._next=r)?r._prev=a:n=a,a=e}t._pt=i},pe=(PropTween.prototype.modifier=function modifier(t,e,r){this.mSet=this.mSet||this.set,this.set=vc,this.m=t,this.mt=r,this.tween=e},PropTween);function PropTween(t,e,r,i,n,a,s,o,u){this.t=e,this.s=i,this.c=n,this.p=r,this.r=a||ne,this.d=s||this,this.set=o||Jt,this.pr=u||0,(this._next=t)&&(t._prev=this)}ha(vt+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return ft[t]=1}),ot.TweenMax=ot.TweenLite=Gt,ot.TimelineLite=ot.TimelineMax=Ut,L=new Ut({sortChildren:!1,defaults:q,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),j.stringFilter=Eb;function Cc(t){return(Te[t]||we).map(function(t){return t()})}function Dc(){var t=Date.now(),o=[];2<t-xe&&(Cc("matchMediaInit"),ye.forEach(function(t){var e,r,i,n,a=t.queries,s=t.conditions;for(r in a)(e=h.matchMedia(a[r]).matches)&&(i=1),e!==s[r]&&(s[r]=e,n=1);n&&(t.revert(),i&&o.push(t))}),Cc("matchMediaRevert"),o.forEach(function(t){return t.onMatch(t)}),xe=t,Cc("matchMedia"))}var _e,ye=[],Te={},we=[],xe=0,ke=((_e=Context.prototype).add=function add(t,i,n){function Cw(){var t,e=l,r=a.selector;return e&&e!==a&&e.data.push(a),n&&(a.selector=cb(n)),l=a,t=i.apply(a,arguments),s(t)&&a._r.push(t),l=e,a.selector=r,a.isReverted=!1,t}s(t)&&(n=i,i=t,t=s);var a=this;return a.last=Cw,t===s?Cw(a):t?a[t]=Cw:Cw},_e.ignore=function ignore(t){var e=l;l=null,t(this),l=e},_e.getTweens=function getTweens(){var e=[];return this.data.forEach(function(t){return t instanceof Context?e.push.apply(e,t.getTweens()):t instanceof Gt&&!(t.parent&&"nested"===t.parent.data)&&e.push(t)}),e},_e.clear=function clear(){this._r.length=this.data.length=0},_e.kill=function kill(e,t){var r=this;if(e){var i=this.getTweens();this.data.forEach(function(t){"isFlip"===t.data&&(t.revert(),t.getChildren(!0,!0,!1).forEach(function(t){return i.splice(i.indexOf(t),1)}))}),i.map(function(t){return{g:t.globalTime(0),t:t}}).sort(function(t,e){return e.g-t.g||-1}).forEach(function(t){return t.t.revert(e)}),this.data.forEach(function(t){return!(t instanceof qt)&&t.revert&&t.revert(e)}),this._r.forEach(function(t){return t(e,r)}),this.isReverted=!0}else this.data.forEach(function(t){return t.kill&&t.kill()});if(this.clear(),t){var n=ye.indexOf(this);~n&&ye.splice(n,1)}},_e.revert=function revert(t){this.kill(t||{})},Context);function Context(t,e){this.selector=e&&cb(e),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var Me,Oe=((Me=MatchMedia.prototype).add=function add(t,e,r){v(t)||(t={matches:t});var i,n,a,s=new ke(0,r||this.scope),o=s.conditions={};for(n in this.contexts.push(s),e=s.add("onMatch",e),s.queries=t)"all"===n?a=1:(i=h.matchMedia(t[n]))&&(ye.indexOf(s)<0&&ye.push(s),(o[n]=i.matches)&&(a=1),i.addListener?i.addListener(Dc):i.addEventListener("change",Dc));return a&&e(s),this},Me.revert=function revert(t){this.kill(t||{})},Me.kill=function kill(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},MatchMedia);function MatchMedia(t){this.contexts=[],this.scope=t}var Pe={registerPlugin:function registerPlugin(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){return function _createPlugin(t){var e=(t=!t.name&&t.default||t).name,r=s(t),i=e&&!r&&t.init?function(){this._props=[]}:t,n={init:T,render:oe,add:Xt,kill:fe,modifier:le,rawVars:0},a={targetTest:0,get:0,getSetter:re,aliases:{},register:0};if(zt(),t!==i){if(pt[e])return;qa(i,qa(ua(t,n),a)),yt(i.prototype,yt(n,ua(t,a))),pt[i.prop=e]=i,t.targetTest&&(gt.push(i),ft[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}S(e,i),t.register&&t.register(Ce,i,pe)}(t)})},timeline:function timeline(t){return new Ut(t)},getTweensOf:function getTweensOf(t,e){return L.getTweensOf(t,e)},getProperty:function getProperty(i,t,e,n){r(i)&&(i=Ot(i)[0]);var a=fa(i||{}).get,s=e?pa:oa;return"native"===e&&(e=""),i?t?s((pt[t]&&pt[t].get||a)(i,t,e,n)):function(t,e,r){return s((pt[t]&&pt[t].get||a)(i,t,e,r))}:i},quickSetter:function quickSetter(r,e,i){if(1<(r=Ot(r)).length){var n=r.map(function(t){return Ce.quickSetter(t,e,i)}),a=n.length;return function(t){for(var e=a;e--;)n[e](t)}}r=r[0]||{};var s=pt[e],o=fa(r),u=o.harness&&(o.harness.aliases||{})[e]||e,h=s?function(t){var e=new s;c._pt=0,e.init(r,i?t+i:t,c,0,[r]),e.render(1,e),c._pt&&oe(1,c)}:o.set(r,u);return s?h:function(t){return h(r,u,i?t+i:t,o,1)}},quickTo:function quickTo(t,i,e){function Ux(t,e,r){return n.resetTo(i,t,e,r)}var r,n=Ce.to(t,yt(((r={})[i]="+=0.1",r.paused=!0,r),e||{}));return Ux.tween=n,Ux},isTweening:function isTweening(t){return 0<L.getTweensOf(t,!0).length},defaults:function defaults(t){return t&&t.ease&&(t.ease=Yt(t.ease,q.ease)),ta(q,t||{})},config:function config(t){return ta(j,t||{})},registerEffect:function registerEffect(t){var i=t.name,n=t.effect,e=t.plugins,a=t.defaults,r=t.extendTimeline;(e||"").split(",").forEach(function(t){return t&&!pt[t]&&!ot[t]&&R(i+" effect requires "+t+" plugin.")}),_t[i]=function(t,e,r){return n(Ot(t),qa(e||{},a),r)},r&&(Ut.prototype[i]=function(t,e,r){return this.add(_t[i](t,v(e)?e:(r=e)&&{},this),r)})},registerEase:function registerEase(t,e){Ft[t]=Yt(e)},parseEase:function parseEase(t,e){return arguments.length?Yt(t,e):Ft},getById:function getById(t){return L.getById(t)},exportRoot:function exportRoot(t,e){void 0===t&&(t={});var r,i,n=new Ut(t);for(n.smoothChildTiming=w(t.smoothChildTiming),L.remove(n),n._dp=0,n._time=n._tTime=L._time,r=L._first;r;)i=r._next,!e&&!r._dur&&r instanceof Gt&&r.vars.onComplete===r._targets[0]||Ka(n,r,r._start-r._delay),r=i;return Ka(L,n,0),n},context:function context(t,e){return t?new ke(t,e):l},matchMedia:function matchMedia(t){return new Oe(t)},matchMediaRefresh:function matchMediaRefresh(){return ye.forEach(function(t){var e,r,i=t.conditions;for(r in i)i[r]&&(i[r]=!1,e=1);e&&t.revert()})||Dc()},addEventListener:function addEventListener(t,e){var r=Te[t]||(Te[t]=[]);~r.indexOf(e)||r.push(e)},removeEventListener:function removeEventListener(t,e){var r=Te[t],i=r&&r.indexOf(e);0<=i&&r.splice(i,1)},utils:{wrap:function wrap(e,t,r){var i=t-e;return $(e)?lb(e,wrap(0,e.length),t):Wa(r,function(t){return(i+(t-e)%i)%i+e})},wrapYoyo:function wrapYoyo(e,t,r){var i=t-e,n=2*i;return $(e)?lb(e,wrapYoyo(0,e.length-1),t):Wa(r,function(t){return e+(i<(t=(n+(t-e)%n)%n||0)?n-t:t)})},distribute:eb,random:hb,snap:gb,normalize:function normalize(t,e,r){return Pt(t,e,0,1,r)},getUnit:Ya,clamp:function clamp(e,r,t){return Wa(t,function(t){return kt(e,r,t)})},splitColor:zb,toArray:Ot,selector:cb,mapRange:Pt,pipe:function pipe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return e.reduce(function(t,e){return e(t)},t)}},unitize:function unitize(e,r){return function(t){return e(parseFloat(t))+(r||Ya(t))}},interpolate:function interpolate(e,i,t,n){var a=isNaN(e+i)?0:function(t){return(1-t)*e+t*i};if(!a){var s,o,u,h,l,f=r(e),c={};if(!0===t&&(n=1)&&(t=null),f)e={p:e},i={p:i};else if($(e)&&!$(i)){for(u=[],h=e.length,l=h-2,o=1;o<h;o++)u.push(interpolate(e[o-1],e[o]));h--,a=function func(t){t*=h;var e=Math.min(l,~~t);return u[e](t-e)},t=i}else n||(e=yt($(e)?[]:{},e));if(!u){for(s in i)Xt.call(c,e,s,"get",i[s]);a=function func(t){return oe(t,c)||(f?e.p:e)}}}return Wa(t,a)},shuffle:db},install:P,effects:_t,ticker:Et,updateRoot:Ut.updateRoot,plugins:pt,globalTimeline:L,core:{PropTween:pe,globals:S,Tween:Gt,Timeline:Ut,Animation:qt,getCache:fa,_removeLinkedListItem:ya,reverting:function reverting(){return B},context:function context(t){return t&&l&&(l.data.push(t),t._ctx=l),l},suppressOverwrites:function suppressOverwrites(t){return I=t}}};ha("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return Pe[t]=Gt[t]}),Et.add(Ut.updateRoot),c=Pe.to({},{duration:0});function Hc(t,e){for(var r=t._pt;r&&r.p!==e&&r.op!==e&&r.fp!==e;)r=r._next;return r}function Jc(t,a){return{name:t,rawVars:1,init:function init(t,n,e){e._onInit=function(t){var e,i;if(r(n)&&(e={},ha(n,function(t){return e[t]=1}),n=e),a){for(i in e={},n)e[i]=a(n[i]);n=e}!function _addModifiers(t,e){var r,i,n,a=t._targets;for(r in e)for(i=a.length;i--;)(n=(n=t._ptLookup[i][r])&&n.d)&&(n._pt&&(n=Hc(n,r)),n&&n.modifier&&n.modifier(e[r],t,a[i],r))}(t,n)}}}}var Ce=Pe.registerPlugin({name:"attr",init:function init(t,e,r,i,n){var a,s,o;for(a in this.tween=r,e)o=t.getAttribute(a)||"",(s=this.add(t,"setAttribute",(o||0)+"",e[a],i,n,0,0,a)).op=a,s.b=o,this._props.push(a)},render:function render(t,e){for(var r=e._pt;r;)B?r.set(r.t,r.p,r.b,r):r.r(t,r.d),r=r._next}},{name:"endArray",init:function init(t,e){for(var r=e.length;r--;)this.add(t,r,t[r]||0,e[r],0,0,0,0,0,1)}},Jc("roundProps",fb),Jc("modifiers"),Jc("snap",gb))||Pe;Gt.version=Ut.version=Ce.version="3.11.3",o=1,x()&&zt();function td(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function ud(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function vd(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)}function wd(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)}function xd(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)}function yd(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)}function zd(t,e,r){return t.style[e]=r}function Ad(t,e,r){return t.style.setProperty(e,r)}function Bd(t,e,r){return t._gsap[e]=r}function Cd(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r}function Dd(t,e,r,i,n){var a=t._gsap;a.scaleX=a.scaleY=r,a.renderTransform(n,a)}function Ed(t,e,r,i,n){var a=t._gsap;a[e]=r,a.renderTransform(n,a)}function Hd(t,e){var r=this,i=this.target,n=i.style;if(t in rr){if(this.tfm=this.tfm||{},"transform"!==t&&(~(t=hr[t]||t).indexOf(",")?t.split(",").forEach(function(t){return r.tfm[t]=mr(i,t)}):this.tfm[t]=i._gsap.x?i._gsap[t]:mr(i,t)),0<=this.props.indexOf(lr))return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(fr,e,"")),t=lr}(n||e)&&this.props.push(t,e,n[t])}function Id(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))}function Jd(){var t,e,r=this.props,i=this.target,n=i.style,a=i._gsap;for(t=0;t<r.length;t+=3)r[t+1]?i[r[t]]=r[t+2]:r[t+2]?n[r[t]]=r[t+2]:n.removeProperty(r[t].replace(sr,"-$1").toLowerCase());if(this.tfm){for(e in this.tfm)a[e]=this.tfm[e];a.svg&&(a.renderTransform(),i.setAttribute("data-svg-origin",this.svgo||"")),!(t=Fe())||t.isStart||n[lr]||(Id(n),a.uncache=1)}}function Kd(t,e){var r={target:t,props:[],revert:Jd,save:Hd};return e&&e.split(",").forEach(function(t){return r.save(t)}),r}function Md(t,e){var r=Se.createElementNS?Se.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Se.createElement(t);return r.style?r:Se.createElement(t)}function Nd(t,e,r){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(sr,"-$1").toLowerCase())||i.getPropertyValue(e)||!r&&Nd(t,dr(e)||e,1)||""}function Qd(){(function _windowExists(){return"undefined"!=typeof window})()&&window.document&&(Ae=window,Se=Ae.document,Re=Se.documentElement,Ee=Md("div")||{style:{}},Md("div"),lr=dr(lr),fr=lr+"Origin",Ee.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ie=!!dr("perspective"),Fe=Ce.core.reverting,De=1)}function Rd(t){var e,r=Md("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,a=this.style.cssText;if(Re.appendChild(r),r.appendChild(this),this.style.display="block",t)try{e=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=Rd}catch(t){}else this._gsapBBox&&(e=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),Re.removeChild(r),this.style.cssText=a,e}function Sd(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])}function Td(e){var r;try{r=e.getBBox()}catch(t){r=Rd.call(e,!0)}return r&&(r.width||r.height)||e.getBBox===Rd||(r=Rd.call(e,!0)),!r||r.width||r.x||r.y?r:{x:+Sd(e,["x","cx","x1"])||0,y:+Sd(e,["y","cy","y1"])||0,width:0,height:0}}function Ud(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!Td(t))}function Vd(t,e){if(e){var r=t.style;e in rr&&e!==fr&&(e=lr),r.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),r.removeProperty(e.replace(sr,"-$1").toLowerCase())):r.removeAttribute(e)}}function Wd(t,e,r,i,n,a){var s=new pe(t._pt,e,r,0,1,a?yd:xd);return(t._pt=s).b=i,s.e=n,t._props.push(r),s}function Zd(t,e,r,i){var n,a,s,o,u=parseFloat(r)||0,h=(r+"").trim().substr((u+"").length)||"px",l=Ee.style,f=or.test(e),c="svg"===t.tagName.toLowerCase(),d=(c?"client":"offset")+(f?"Width":"Height"),p="px"===i,_="%"===i;return i===h||!u||pr[i]||pr[h]?u:("px"===h||p||(u=Zd(t,e,r,"px")),o=t.getCTM&&Ud(t),!_&&"%"!==h||!rr[e]&&!~e.indexOf("adius")?(l[f?"width":"height"]=100+(p?h:i),a=~e.indexOf("adius")||"em"===i&&t.appendChild&&!c?t:t.parentNode,o&&(a=(t.ownerSVGElement||{}).parentNode),a&&a!==Se&&a.appendChild||(a=Se.body),(s=a._gsap)&&_&&s.width&&f&&s.time===Et.time&&!s.uncache?ia(u/s.width*100):(!_&&"%"!==h||_r[Nd(a,"display")]||(l.position=Nd(t,"position")),a===t&&(l.position="static"),a.appendChild(Ee),n=Ee[d],a.removeChild(Ee),l.position="absolute",f&&_&&((s=fa(a)).time=Et.time,s.width=a[d]),ia(p?n*u/100:n&&u?100/n*u:0))):(n=o?t.getBBox()[f?"width":"height"]:t[d],ia(_?u/n*100:u/100*n)))}function _d(t,e,r,i){if(!r||"none"===r){var n=dr(e,t,1),a=n&&Nd(t,n,1);a&&a!==r?(e=n,r=a):"borderColor"===e&&(r=Nd(t,"borderTopColor"))}var s,o,u,h,l,f,c,d,p,_,m,g=new pe(this._pt,t.style,e,0,1,se),v=0,y=0;if(g.b=r,g.e=i,r+="","auto"===(i+="")&&(t.style[e]=i,i=Nd(t,e)||i,t.style[e]=r),Eb(s=[r,i]),i=s[1],u=(r=s[0]).match(rt)||[],(i.match(rt)||[]).length){for(;o=rt.exec(i);)c=o[0],p=i.substring(v,o.index),l?l=(l+1)%5:"rgba("!==p.substr(-5)&&"hsla("!==p.substr(-5)||(l=1),c!==(f=u[y++]||"")&&(h=parseFloat(f)||0,m=f.substr((h+"").length),"="===c.charAt(1)&&(c=ka(h,c)+m),d=parseFloat(c),_=c.substr((d+"").length),v=rt.lastIndex-_.length,_||(_=_||j.units[e]||m,v===i.length&&(i+=_,g.e+=_)),m!==_&&(h=Zd(t,e,f,_)||0),g._pt={_next:g._pt,p:p||1===y?p:",",s:h,c:d-h,m:l&&l<4||"zIndex"===e?Math.round:0});g.c=v<i.length?i.substring(v,i.length):""}else g.r="display"===e&&"none"===i?yd:xd;return nt.test(i)&&(g.e=0),this._pt=g}function be(t){var e=t.split(" "),r=e[0],i=e[1]||"50%";return"top"!==r&&"bottom"!==r&&"left"!==i&&"right"!==i||(t=r,r=i,i=t),e[0]=gr[r]||r,e[1]=gr[i]||i,e.join(" ")}function ce(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r,i,n,a=e.t,s=a.style,o=e.u,u=a._gsap;if("all"===o||!0===o)s.cssText="",i=1;else for(n=(o=o.split(",")).length;-1<--n;)r=o[n],rr[r]&&(i=1,r="transformOrigin"===r?fr:lr),Vd(a,r);i&&(Vd(a,lr),u&&(u.svg&&a.removeAttribute("transform"),br(a,1),u.uncache=1,Id(s)))}}function ge(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t}function he(t){var e=Nd(t,lr);return ge(e)?yr:e.substr(7).match(et).map(ia)}function ie(t,e){var r,i,n,a,s=t._gsap||fa(t),o=t.style,u=he(t);return s.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(u=[(n=t.transform.baseVal.consolidate().matrix).a,n.b,n.c,n.d,n.e,n.f]).join(",")?yr:u:(u!==yr||t.offsetParent||t===Re||s.svg||(n=o.display,o.display="block",(r=t.parentNode)&&t.offsetParent||(a=1,i=t.nextElementSibling,Re.appendChild(t)),u=he(t),n?o.display=n:Vd(t,"display"),a&&(i?r.insertBefore(t,i):r?r.appendChild(t):Re.removeChild(t))),e&&6<u.length?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)}function je(t,e,r,i,n,a){var s,o,u,h=t._gsap,l=n||ie(t,!0),f=h.xOrigin||0,c=h.yOrigin||0,d=h.xOffset||0,p=h.yOffset||0,_=l[0],m=l[1],g=l[2],v=l[3],y=l[4],T=l[5],b=e.split(" "),w=parseFloat(b[0])||0,x=parseFloat(b[1])||0;r?l!==yr&&(o=_*v-m*g)&&(u=w*(-m/o)+x*(_/o)-(_*T-m*y)/o,w=w*(v/o)+x*(-g/o)+(g*T-v*y)/o,x=u):(w=(s=Td(t)).x+(~b[0].indexOf("%")?w/100*s.width:w),x=s.y+(~(b[1]||b[0]).indexOf("%")?x/100*s.height:x)),i||!1!==i&&h.smooth?(y=w-f,T=x-c,h.xOffset=d+(y*_+T*g)-y,h.yOffset=p+(y*m+T*v)-T):h.xOffset=h.yOffset=0,h.xOrigin=w,h.yOrigin=x,h.smooth=!!i,h.origin=e,h.originIsAbsolute=!!r,t.style[fr]="0px 0px",a&&(Wd(a,h,"xOrigin",f,w),Wd(a,h,"yOrigin",c,x),Wd(a,h,"xOffset",d,h.xOffset),Wd(a,h,"yOffset",p,h.yOffset)),t.setAttribute("data-svg-origin",w+" "+x)}function me(t,e,r){var i=Ya(e);return ia(parseFloat(e)+parseFloat(Zd(t,"x",r+"px",i)))+i}function te(t,e,i,n,a){var s,o,u=360,h=r(a),l=parseFloat(a)*(h&&~a.indexOf("rad")?ir:1)-n,f=n+l+"deg";return h&&("short"===(s=a.split("_")[1])&&(l%=u)!==l%180&&(l+=l<0?u:-u),"cw"===s&&l<0?l=(l+36e9)%u-~~(l/u)*u:"ccw"===s&&0<l&&(l=(l-36e9)%u-~~(l/u)*u)),t._pt=o=new pe(t._pt,e,i,n,l,ud),o.e=f,o.u="deg",t._props.push(i),o}function ue(t,e){for(var r in e)t[r]=e[r];return t}function ve(t,e,r){var i,n,a,s,o,u,h,l=ue({},r._gsap),f=r.style;for(n in l.svg?(a=r.getAttribute("transform"),r.setAttribute("transform",""),f[lr]=e,i=br(r,1),Vd(r,lr),r.setAttribute("transform",a)):(a=getComputedStyle(r)[lr],f[lr]=e,i=br(r,1),f[lr]=a),rr)(a=l[n])!==(s=i[n])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(n)<0&&(o=Ya(a)!==(h=Ya(s))?Zd(r,n,a,h):parseFloat(a),u=parseFloat(s),t._pt=new pe(t._pt,i,n,o,u-o,td),t._pt.u=h||0,t._props.push(n));ue(i,l)}var Ae,Se,Re,De,Ee,ze,Fe,Ie,Be=Ft.Power0,Le=Ft.Power1,Ye=Ft.Power2,Ne=Ft.Power3,qe=Ft.Power4,Ue=Ft.Linear,Ve=Ft.Quad,We=Ft.Cubic,Xe=Ft.Quart,He=Ft.Quint,Qe=Ft.Strong,Ke=Ft.Elastic,Ze=Ft.Back,Ge=Ft.SteppedEase,Je=Ft.Bounce,$e=Ft.Sine,tr=Ft.Expo,er=Ft.Circ,rr={},ir=180/Math.PI,nr=Math.PI/180,ar=Math.atan2,sr=/([A-Z])/g,or=/(left|right|width|margin|padding|x)/i,ur=/[\s,\(]\S/,hr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},lr="transform",fr=lr+"Origin",cr="O,Moz,ms,Ms,Webkit".split(","),dr=function _checkPropPrefix(t,e,r){var i=(e||Ee).style,n=5;if(t in i&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);n--&&!(cr[n]+t in i););return n<0?null:(3===n?"ms":0<=n?cr[n]:"")+t},pr={deg:1,rad:1,turn:1},_r={grid:1,flex:1},mr=function _get(t,e,r,i){var n;return De||Qd(),e in hr&&"transform"!==e&&~(e=hr[e]).indexOf(",")&&(e=e.split(",")[0]),rr[e]&&"transform"!==e?(n=br(t,i),n="transformOrigin"!==e?n[e]:n.svg?n.origin:wr(Nd(t,fr))+" "+n.zOrigin+"px"):(n=t.style[e])&&"auto"!==n&&!i&&!~(n+"").indexOf("calc(")||(n=vr[e]&&vr[e](t,e,r)||Nd(t,e)||ga(t,e)||("opacity"===e?1:0)),r&&!~(n+"").trim().indexOf(" ")?Zd(t,e,n,r)+r:n},gr={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},vr={clearProps:function clearProps(t,e,r,i,n){if("isFromStart"!==n.data){var a=t._pt=new pe(t._pt,e,r,0,0,ce);return a.u=i,a.pr=-10,a.tween=n,t._props.push(r),1}}},yr=[1,0,0,1,0,0],Tr={},br=function _parseTransform(t,e){var r=t._gsap||new jt(t);if("x"in r&&!e&&!r.uncache)return r;var i,n,a,s,o,u,h,l,f,c,d,p,_,m,g,v,y,T,b,w,x,k,M,O,P,C,A,S,R,D,E,z,F=t.style,I=r.scaleX<0,B="deg",L=getComputedStyle(t),Y=Nd(t,fr)||"0";return i=n=a=u=h=l=f=c=d=0,s=o=1,r.svg=!(!t.getCTM||!Ud(t)),L.translate&&("none"===L.translate&&"none"===L.scale&&"none"===L.rotate||(F[lr]=("none"!==L.translate?"translate3d("+(L.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+("none"!==L.rotate?"rotate("+L.rotate+") ":"")+("none"!==L.scale?"scale("+L.scale.split(" ").join(",")+") ":"")+("none"!==L[lr]?L[lr]:"")),F.scale=F.rotate=F.translate="none"),m=ie(t,r.svg),r.svg&&(O=r.uncache?(P=t.getBBox(),Y=r.xOrigin-P.x+"px "+(r.yOrigin-P.y)+"px",""):!e&&t.getAttribute("data-svg-origin"),je(t,O||Y,!!O||r.originIsAbsolute,!1!==r.smooth,m)),p=r.xOrigin||0,_=r.yOrigin||0,m!==yr&&(T=m[0],b=m[1],w=m[2],x=m[3],i=k=m[4],n=M=m[5],6===m.length?(s=Math.sqrt(T*T+b*b),o=Math.sqrt(x*x+w*w),u=T||b?ar(b,T)*ir:0,(f=w||x?ar(w,x)*ir+u:0)&&(o*=Math.abs(Math.cos(f*nr))),r.svg&&(i-=p-(p*T+_*w),n-=_-(p*b+_*x))):(z=m[6],D=m[7],A=m[8],S=m[9],R=m[10],E=m[11],i=m[12],n=m[13],a=m[14],h=(g=ar(z,R))*ir,g&&(O=k*(v=Math.cos(-g))+A*(y=Math.sin(-g)),P=M*v+S*y,C=z*v+R*y,A=k*-y+A*v,S=M*-y+S*v,R=z*-y+R*v,E=D*-y+E*v,k=O,M=P,z=C),l=(g=ar(-w,R))*ir,g&&(v=Math.cos(-g),E=x*(y=Math.sin(-g))+E*v,T=O=T*v-A*y,b=P=b*v-S*y,w=C=w*v-R*y),u=(g=ar(b,T))*ir,g&&(O=T*(v=Math.cos(g))+b*(y=Math.sin(g)),P=k*v+M*y,b=b*v-T*y,M=M*v-k*y,T=O,k=P),h&&359.9<Math.abs(h)+Math.abs(u)&&(h=u=0,l=180-l),s=ia(Math.sqrt(T*T+b*b+w*w)),o=ia(Math.sqrt(M*M+z*z)),g=ar(k,M),f=2e-4<Math.abs(g)?g*ir:0,d=E?1/(E<0?-E:E):0),r.svg&&(O=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!ge(Nd(t,lr)),O&&t.setAttribute("transform",O))),90<Math.abs(f)&&Math.abs(f)<270&&(I?(s*=-1,f+=u<=0?180:-180,u+=u<=0?180:-180):(o*=-1,f+=f<=0?180:-180)),e=e||r.uncache,r.x=i-((r.xPercent=i&&(!e&&r.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-i)?-50:0)))?t.offsetWidth*r.xPercent/100:0)+"px",r.y=n-((r.yPercent=n&&(!e&&r.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-n)?-50:0)))?t.offsetHeight*r.yPercent/100:0)+"px",r.z=a+"px",r.scaleX=ia(s),r.scaleY=ia(o),r.rotation=ia(u)+B,r.rotationX=ia(h)+B,r.rotationY=ia(l)+B,r.skewX=f+B,r.skewY=c+B,r.transformPerspective=d+"px",(r.zOrigin=parseFloat(Y.split(" ")[2])||0)&&(F[fr]=wr(Y)),r.xOffset=r.yOffset=0,r.force3D=j.force3D,r.renderTransform=r.svg?Cr:Ie?Pr:xr,r.uncache=0,r},wr=function _firstTwoOnly(t){return(t=t.split(" "))[0]+" "+t[1]},xr=function _renderNon3DTransforms(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Pr(t,e)},kr="0deg",Mr="0px",Or=") ",Pr=function _renderCSSTransforms(t,e){var r=e||this,i=r.xPercent,n=r.yPercent,a=r.x,s=r.y,o=r.z,u=r.rotation,h=r.rotationY,l=r.rotationX,f=r.skewX,c=r.skewY,d=r.scaleX,p=r.scaleY,_=r.transformPerspective,m=r.force3D,g=r.target,v=r.zOrigin,y="",T="auto"===m&&t&&1!==t||!0===m;if(v&&(l!==kr||h!==kr)){var b,w=parseFloat(h)*nr,x=Math.sin(w),k=Math.cos(w);w=parseFloat(l)*nr,b=Math.cos(w),a=me(g,a,x*b*-v),s=me(g,s,-Math.sin(w)*-v),o=me(g,o,k*b*-v+v)}_!==Mr&&(y+="perspective("+_+Or),(i||n)&&(y+="translate("+i+"%, "+n+"%) "),!T&&a===Mr&&s===Mr&&o===Mr||(y+=o!==Mr||T?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+Or),u!==kr&&(y+="rotate("+u+Or),h!==kr&&(y+="rotateY("+h+Or),l!==kr&&(y+="rotateX("+l+Or),f===kr&&c===kr||(y+="skew("+f+", "+c+Or),1===d&&1===p||(y+="scale("+d+", "+p+Or),g.style[lr]=y||"translate(0, 0)"},Cr=function _renderSVGTransforms(t,e){var r,i,n,a,s,o=e||this,u=o.xPercent,h=o.yPercent,l=o.x,f=o.y,c=o.rotation,d=o.skewX,p=o.skewY,_=o.scaleX,m=o.scaleY,g=o.target,v=o.xOrigin,y=o.yOrigin,T=o.xOffset,b=o.yOffset,w=o.forceCSS,x=parseFloat(l),k=parseFloat(f);c=parseFloat(c),d=parseFloat(d),(p=parseFloat(p))&&(d+=p=parseFloat(p),c+=p),c||d?(c*=nr,d*=nr,r=Math.cos(c)*_,i=Math.sin(c)*_,n=Math.sin(c-d)*-m,a=Math.cos(c-d)*m,d&&(p*=nr,s=Math.tan(d-p),n*=s=Math.sqrt(1+s*s),a*=s,p&&(s=Math.tan(p),r*=s=Math.sqrt(1+s*s),i*=s)),r=ia(r),i=ia(i),n=ia(n),a=ia(a)):(r=_,a=m,i=n=0),(x&&!~(l+"").indexOf("px")||k&&!~(f+"").indexOf("px"))&&(x=Zd(g,"x",l,"px"),k=Zd(g,"y",f,"px")),(v||y||T||b)&&(x=ia(x+v-(v*r+y*n)+T),k=ia(k+y-(v*i+y*a)+b)),(u||h)&&(s=g.getBBox(),x=ia(x+u/100*s.width),k=ia(k+h/100*s.height)),s="matrix("+r+","+i+","+n+","+a+","+x+","+k+")",g.setAttribute("transform",s),w&&(g.style[lr]=s)};ha("padding,margin,Width,Radius",function(e,r){var t="Right",i="Bottom",n="Left",o=(r<3?["Top",t,i,n]:["Top"+n,"Top"+t,i+t,i+n]).map(function(t){return r<2?e+t:"border"+t+e});vr[1<r?"border"+e:e]=function(e,t,r,i,n){var a,s;if(arguments.length<4)return a=o.map(function(t){return mr(e,t,r)}),5===(s=a.join(" ")).split(a[0]).length?a[0]:s;a=(i+"").split(" "),s={},o.forEach(function(t,e){return s[t]=a[e]=a[e]||a[(e-1)/2|0]}),e.init(t,s,n)}});var Ar,Sr,Rr,Dr={name:"css",register:Qd,targetTest:function targetTest(t){return t.style&&t.nodeType},init:function init(t,e,i,n,a){var s,o,u,h,l,f,c,d,p,_,m,g,v,y,T,b,w=this._props,x=t.style,k=i.vars.startAt;for(c in De||Qd(),this.styles=this.styles||Kd(t),b=this.styles.props,this.tween=i,e)if("autoRound"!==c&&(o=e[c],!pt[c]||!_b(c,e,i,n,t,a)))if(l=typeof o,f=vr[c],"function"===l&&(l=typeof(o=o.call(i,n,t,a))),"string"===l&&~o.indexOf("random(")&&(o=ob(o)),f)f(this,t,c,o,i)&&(T=1);else if("--"===c.substr(0,2))s=(getComputedStyle(t).getPropertyValue(c)+"").trim(),o+="",Rt.lastIndex=0,Rt.test(s)||(d=Ya(s),p=Ya(o)),p?d!==p&&(s=Zd(t,c,s,p)+p):d&&(o+=d),this.add(x,"setProperty",s,o,n,a,0,0,c),w.push(c),b.push(c,0,x[c]);else if("undefined"!==l){if(k&&c in k?(s="function"==typeof k[c]?k[c].call(i,n,t,a):k[c],r(s)&&~s.indexOf("random(")&&(s=ob(s)),Ya(s+"")||(s+=j.units[c]||Ya(mr(t,c))||""),"="===(s+"").charAt(1)&&(s=mr(t,c))):s=mr(t,c),h=parseFloat(s),(_="string"===l&&"="===o.charAt(1)&&o.substr(0,2))&&(o=o.substr(2)),u=parseFloat(o),c in hr&&("autoAlpha"===c&&(1===h&&"hidden"===mr(t,"visibility")&&u&&(h=0),b.push("visibility",0,x.visibility),Wd(this,x,"visibility",h?"inherit":"hidden",u?"inherit":"hidden",!u)),"scale"!==c&&"transform"!==c&&~(c=hr[c]).indexOf(",")&&(c=c.split(",")[0])),m=c in rr)if(this.styles.save(c),g||((v=t._gsap).renderTransform&&!e.parseTransform||br(t,e.parseTransform),y=!1!==e.smoothOrigin&&v.smooth,(g=this._pt=new pe(this._pt,x,lr,0,1,v.renderTransform,v,0,-1)).dep=1),"scale"===c)this._pt=new pe(this._pt,v,"scaleY",h,(_?ka(h,_+u):u)-h||0,td),this._pt.u=0,w.push("scaleY",c),c+="X";else{if("transformOrigin"===c){b.push(fr,0,x[fr]),o=be(o),v.svg?je(t,o,0,y,0,this):((p=parseFloat(o.split(" ")[2])||0)!==v.zOrigin&&Wd(this,v,"zOrigin",v.zOrigin,p),Wd(this,x,c,wr(s),wr(o)));continue}if("svgOrigin"===c){je(t,o,1,y,0,this);continue}if(c in Tr){te(this,v,c,h,_?ka(h,_+o):o);continue}if("smoothOrigin"===c){Wd(this,v,"smooth",v.smooth,o);continue}if("force3D"===c){v[c]=o;continue}if("transform"===c){ve(this,o,t);continue}}else c in x||(c=dr(c)||c);if(m||(u||0===u)&&(h||0===h)&&!ur.test(o)&&c in x)u=u||0,(d=(s+"").substr((h+"").length))!==(p=Ya(o)||(c in j.units?j.units[c]:d))&&(h=Zd(t,c,s,p)),this._pt=new pe(this._pt,m?v:x,c,h,(_?ka(h,_+u):u)-h,m||"px"!==p&&"zIndex"!==c||!1===e.autoRound?td:wd),this._pt.u=p||0,d!==p&&"%"!==p&&(this._pt.b=s,this._pt.r=vd);else if(c in x)_d.call(this,t,c,s,_?_+o:o);else{if(!(c in t)){Q(c,o);continue}this.add(t,c,s||t[c],_?_+o:o,n,a)}m||(c in x?b.push(c,0,x[c]):b.push(c,1,s||t[c])),w.push(c)}T&&de(this)},render:function render(t,e){if(e.tween._time||!Fe())for(var r=e._pt;r;)r.r(t,r.d),r=r._next;else e.styles.revert()},get:mr,aliases:hr,getSetter:function getSetter(t,e,r){var i=hr[e];return i&&i.indexOf(",")<0&&(e=i),e in rr&&e!==fr&&(t._gsap.x||mr(t,"x"))?r&&ze===r?"scale"===e?Cd:Bd:(ze=r||{})&&("scale"===e?Dd:Ed):t.style&&!u(t.style[e])?zd:~e.indexOf("-")?Ad:re(t,e)},core:{_removeProperty:Vd,_getMatrix:ie}};Ce.utils.checkPrefix=dr,Ce.core.getStyleSaver=Kd,Rr=ha((Ar="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(Sr="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(t){rr[t]=1}),ha(Sr,function(t){j.units[t]="deg",Tr[t]=1}),hr[Rr[13]]=Ar+","+Sr,ha("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",function(t){var e=t.split(":");hr[e[1]]=Rr[e[0]]}),ha("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){j.units[t]="px"}),Ce.registerPlugin(Dr);var Er=Ce.registerPlugin(Dr)||Ce,zr=Er.core.Tween;e.Back=Ze,e.Bounce=Je,e.CSSPlugin=Dr,e.Circ=er,e.Cubic=We,e.Elastic=Ke,e.Expo=tr,e.Linear=Ue,e.Power0=Be,e.Power1=Le,e.Power2=Ye,e.Power3=Ne,e.Power4=qe,e.Quad=Ve,e.Quart=Xe,e.Quint=He,e.Sine=$e,e.SteppedEase=Ge,e.Strong=Qe,e.TimelineLite=Ut,e.TimelineMax=Ut,e.TweenLite=Gt,e.TweenMax=zr,e.default=Er,e.gsap=Er;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});

!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], t)
    : t(((e = e || self).window = e.window || {}))
})(this, function (e) {
  'use strict'
  function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r]
      ;(n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        'value' in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n)
    }
  }
  function q() {
    return (
      we ||
      ('undefined' != typeof window &&
        (we = window.gsap) &&
        we.registerPlugin &&
        we)
    )
  }
  function y(e, t) {
    return ~Fe.indexOf(e) && Fe[Fe.indexOf(e) + 1][t]
  }
  function z(e) {
    return !!~t.indexOf(e)
  }
  function A(e, t, r, n, o) {
    return e.addEventListener(t, r, { passive: !n, capture: !!o })
  }
  function B(e, t, r, n) {
    return e.removeEventListener(t, r, !!n)
  }
  function E() {
    return (ze && ze.isPressed) || Le.cache++
  }
  function F(r, n) {
    function Sc(e) {
      if (e || 0 === e) {
        o && (Ae.history.scrollRestoration = 'manual')
        var t = ze && ze.isPressed
        ;(e = Sc.v = Math.round(e) || (ze && ze.iOS ? 1 : 0)),
          r(e),
          (Sc.cacheID = Le.cache),
          t && i('ss', e)
      } else (n || Le.cache !== Sc.cacheID || i('ref')) && ((Sc.cacheID = Le.cache), (Sc.v = r()))
      return Sc.v + Sc.offset
    }
    return (Sc.offset = 0), r && Sc
  }
  function I(e) {
    return (
      we.utils.toArray(e)[0] ||
      ('string' == typeof e && !1 !== we.config().nullTargetWarn
        ? console.warn('Element not found:', e)
        : null)
    )
  }
  function J(t, e) {
    var r = e.s,
      n = e.sc
    z(t) && (t = Ee.scrollingElement || Me)
    var o = Le.indexOf(t),
      i = n === Ne.sc ? 1 : 2
    ~o || (o = Le.push(t) - 1), Le[o + i] || t.addEventListener('scroll', E)
    var a = Le[o + i],
      s =
        a ||
        (Le[o + i] =
          F(y(t, r), !0) ||
          (z(t)
            ? n
            : F(function (e) {
                return arguments.length ? (t[r] = e) : t[r]
              })))
    return (
      (s.target = t),
      a || (s.smooth = 'smooth' === we.getProperty(t, 'scrollBehavior')),
      s
    )
  }
  function K(e, t, o) {
    function od(e, t) {
      var r = He()
      t || n < r - s
        ? ((a = i), (i = e), (l = s), (s = r))
        : o
        ? (i += e)
        : (i = a + ((e - a) / (r - l)) * (s - l))
    }
    var i = e,
      a = e,
      s = He(),
      l = s,
      n = t || 50,
      c = Math.max(500, 3 * n)
    return {
      update: od,
      reset: function reset() {
        ;(a = i = o ? 0 : i), (l = s = 0)
      },
      getVelocity: function getVelocity(e) {
        var t = l,
          r = a,
          n = He()
        return (
          (!e && 0 !== e) || e === i || od(e),
          s === l || c < n - l
            ? 0
            : ((i + (o ? r : -r)) / ((o ? n : s) - t)) * 1e3
        )
      },
    }
  }
  function L(e, t) {
    return (
      t && !e._gsapAllow && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    )
  }
  function M(e) {
    var t = Math.max.apply(Math, e),
      r = Math.min.apply(Math, e)
    return Math.abs(t) >= Math.abs(r) ? t : r
  }
  function N() {
    ;(Ie = we.core.globals().ScrollTrigger) &&
      Ie.core &&
      (function _integrate() {
        var e = Ie.core,
          r = e.bridge || {},
          t = e._scrollers,
          n = e._proxies
        t.push.apply(t, Le),
          n.push.apply(n, Fe),
          (Le = t),
          (Fe = n),
          (i = function _bridge(e, t) {
            return r[e](t)
          })
      })()
  }
  function O(e) {
    return (
      (we = e || q()) &&
        'undefined' != typeof document &&
        document.body &&
        ((Ae = window),
        (Me = (Ee = document).documentElement),
        (Ce = Ee.body),
        (t = [Ae, Ee, Me, Ce]),
        we.utils.clamp,
        (De = 'onpointerenter' in Ce ? 'pointer' : 'mouse'),
        (Oe = k.isTouch =
          Ae.matchMedia &&
          Ae.matchMedia('(hover: none), (pointer: coarse)').matches
            ? 1
            : 'ontouchstart' in Ae ||
              0 < navigator.maxTouchPoints ||
              0 < navigator.msMaxTouchPoints
            ? 2
            : 0),
        (Be = k.eventTypes =
          (
            'ontouchstart' in Me
              ? 'touchstart,touchmove,touchcancel,touchend'
              : 'onpointerdown' in Me
              ? 'pointerdown,pointermove,pointercancel,pointerup'
              : 'mousedown,mousemove,mouseup,mouseup'
          ).split(',')),
        setTimeout(function () {
          return (o = 0)
        }, 500),
        N(),
        (ke = 1)),
      ke
    )
  }
  var we,
    ke,
    Ae,
    Ee,
    Me,
    Ce,
    Oe,
    De,
    Ie,
    t,
    ze,
    Be,
    o = 1,
    Re = [],
    Le = [],
    Fe = [],
    He = Date.now,
    i = function _bridge(e, t) {
      return t
    },
    r = 'scrollLeft',
    n = 'scrollTop',
    Je = {
      s: r,
      p: 'left',
      p2: 'Left',
      os: 'right',
      os2: 'Right',
      d: 'width',
      d2: 'Width',
      a: 'x',
      sc: F(function (e) {
        return arguments.length
          ? Ae.scrollTo(e, Ne.sc())
          : Ae.pageXOffset || Ee[r] || Me[r] || Ce[r] || 0
      }),
    },
    Ne = {
      s: n,
      p: 'top',
      p2: 'Top',
      os: 'bottom',
      os2: 'Bottom',
      d: 'height',
      d2: 'Height',
      a: 'y',
      op: Je,
      sc: F(function (e) {
        return arguments.length
          ? Ae.scrollTo(Je.sc(), e)
          : Ae.pageYOffset || Ee[n] || Me[n] || Ce[n] || 0
      }),
    }
  ;(Je.op = Ne), (Le.cache = 0)
  var k =
    ((Observer.prototype.init = function init(e) {
      ke || O(we) || console.warn('Please gsap.registerPlugin(Observer)'),
        Ie || N()
      var o = e.tolerance,
        a = e.dragMinimum,
        t = e.type,
        n = e.target,
        r = e.lineHeight,
        i = e.debounce,
        s = e.preventDefault,
        l = e.onStop,
        c = e.onStopDelay,
        u = e.ignore,
        f = e.wheelSpeed,
        d = e.event,
        p = e.onDragStart,
        g = e.onDragEnd,
        h = e.onDrag,
        v = e.onPress,
        b = e.onRelease,
        m = e.onRight,
        y = e.onLeft,
        x = e.onUp,
        S = e.onDown,
        w = e.onChangeX,
        _ = e.onChangeY,
        T = e.onChange,
        k = e.onToggleX,
        P = e.onToggleY,
        C = e.onHover,
        D = e.onHoverEnd,
        R = e.onMove,
        X = e.ignoreCheck,
        F = e.isNormalizer,
        Y = e.onGestureStart,
        H = e.onGestureEnd,
        V = e.onWheel,
        W = e.onEnable,
        j = e.onDisable,
        q = e.onClick,
        U = e.scrollSpeed,
        G = e.capture,
        $ = e.allowClicks,
        Q = e.lockAxis,
        Z = e.onLockAxis
      function Pe() {
        return (ye = He())
      }
      function Qe(e, t) {
        return (
          ((se.event = e) && u && ~u.indexOf(e.target)) ||
          (t && ge && 'touch' !== e.pointerType) ||
          (X && X(e, t))
        )
      }
      function Se() {
        var e = (se.deltaX = M(be)),
          t = (se.deltaY = M(me)),
          r = Math.abs(e) >= o,
          n = Math.abs(t) >= o
        T && (r || n) && T(se, e, t, be, me),
          r &&
            (m && 0 < se.deltaX && m(se),
            y && se.deltaX < 0 && y(se),
            w && w(se),
            k && se.deltaX < 0 != le < 0 && k(se),
            (le = se.deltaX),
            (be[0] = be[1] = be[2] = 0)),
          n &&
            (S && 0 < se.deltaY && S(se),
            x && se.deltaY < 0 && x(se),
            _ && _(se),
            P && se.deltaY < 0 != ce < 0 && P(se),
            (ce = se.deltaY),
            (me[0] = me[1] = me[2] = 0)),
          (ne || re) && (R && R(se), re && (h(se), (re = !1)), (ne = !1)),
          ie && !(ie = !1) && Z && Z(se),
          oe && (V(se), (oe = !1)),
          (ee = 0)
      }
      function Te(e, t, r) {
        ;(be[r] += e),
          (me[r] += t),
          se._vx.update(e),
          se._vy.update(t),
          i ? (ee = ee || requestAnimationFrame(Se)) : Se()
      }
      function Ue(e, t) {
        Q &&
          !ae &&
          ((se.axis = ae = Math.abs(e) > Math.abs(t) ? 'x' : 'y'), (ie = !0)),
          'y' !== ae && ((be[2] += e), se._vx.update(e, !0)),
          'x' !== ae && ((me[2] += t), se._vy.update(t, !0)),
          i ? (ee = ee || requestAnimationFrame(Se)) : Se()
      }
      function Ve(e) {
        if (!Qe(e, 1)) {
          var t = (e = L(e, s)).clientX,
            r = e.clientY,
            n = t - se.x,
            o = r - se.y,
            i = se.isDragging
          ;(se.x = t),
            (se.y = r),
            (i ||
              Math.abs(se.startX - t) >= a ||
              Math.abs(se.startY - r) >= a) &&
              (h && (re = !0),
              i || (se.isDragging = !0),
              Ue(n, o),
              i || (p && p(se)))
        }
      }
      function Xe(t) {
        if (!Qe(t, 1)) {
          B(F ? n : ve, Be[1], Ve, !0)
          var e =
              se.isDragging &&
              (3 < Math.abs(se.x - se.startX) ||
                3 < Math.abs(se.y - se.startY)),
            r = L(t)
          e ||
            (se._vx.reset(),
            se._vy.reset(),
            s &&
              $ &&
              we.delayedCall(0.08, function () {
                if (300 < He() - ye && !t.defaultPrevented)
                  if (t.target.click) t.target.click()
                  else if (ve.createEvent) {
                    var e = ve.createEvent('MouseEvents')
                    e.initMouseEvent(
                      'click',
                      !0,
                      !0,
                      Ae,
                      1,
                      r.screenX,
                      r.screenY,
                      r.clientX,
                      r.clientY,
                      !1,
                      !1,
                      !1,
                      !1,
                      0,
                      null,
                    ),
                      t.target.dispatchEvent(e)
                  }
              })),
            (se.isDragging = se.isGesturing = se.isPressed = !1),
            l && !F && te.restart(!0),
            g && e && g(se),
            b && b(se, e)
        }
      }
      function Ye(e) {
        return (
          e.touches &&
          1 < e.touches.length &&
          (se.isGesturing = !0) &&
          Y(e, se.isDragging)
        )
      }
      function Ze() {
        return (se.isGesturing = !1) || H(se)
      }
      function $e(e) {
        if (!Qe(e)) {
          var t = ue(),
            r = fe()
          Te((t - de) * U, (r - pe) * U, 1),
            (de = t),
            (pe = r),
            l && te.restart(!0)
        }
      }
      function _e(e) {
        if (!Qe(e)) {
          ;(e = L(e, s)), V && (oe = !0)
          var t =
            (1 === e.deltaMode ? r : 2 === e.deltaMode ? Ae.innerHeight : 1) * f
          Te(e.deltaX * t, e.deltaY * t, 0), l && !F && te.restart(!0)
        }
      }
      function af(e) {
        if (!Qe(e)) {
          var t = e.clientX,
            r = e.clientY,
            n = t - se.x,
            o = r - se.y
          ;(se.x = t), (se.y = r), (ne = !0), (n || o) && Ue(n, o)
        }
      }
      function bf(e) {
        ;(se.event = e), C(se)
      }
      function cf(e) {
        ;(se.event = e), D(se)
      }
      function df(e) {
        return Qe(e) || (L(e, s) && q(se))
      }
      ;(this.target = n = I(n) || Me),
        (this.vars = e),
        (u = u && we.utils.toArray(u)),
        (o = o || 1e-9),
        (a = a || 0),
        (f = f || 1),
        (U = U || 1),
        (t = t || 'wheel,touch,pointer'),
        (i = !1 !== i),
        (r = r || parseFloat(Ae.getComputedStyle(Ce).lineHeight) || 22)
      var ee,
        te,
        re,
        ne,
        oe,
        ie,
        ae,
        se = this,
        le = 0,
        ce = 0,
        ue = J(n, Je),
        fe = J(n, Ne),
        de = ue(),
        pe = fe(),
        ge =
          ~t.indexOf('touch') &&
          !~t.indexOf('pointer') &&
          'pointerdown' === Be[0],
        he = z(n),
        ve = n.ownerDocument || Ee,
        be = [0, 0, 0],
        me = [0, 0, 0],
        ye = 0,
        xe = (se.onPress = function (e) {
          Qe(e, 1) ||
            ((se.axis = ae = null),
            te.pause(),
            (se.isPressed = !0),
            (e = L(e)),
            (le = ce = 0),
            (se.startX = se.x = e.clientX),
            (se.startY = se.y = e.clientY),
            se._vx.reset(),
            se._vy.reset(),
            A(F ? n : ve, Be[1], Ve, s, !0),
            (se.deltaX = se.deltaY = 0),
            v && v(se))
        })
      ;(te = se._dc =
        we
          .delayedCall(c || 0.25, function onStopFunc() {
            se._vx.reset(), se._vy.reset(), te.pause(), l && l(se)
          })
          .pause()),
        (se.deltaX = se.deltaY = 0),
        (se._vx = K(0, 50, !0)),
        (se._vy = K(0, 50, !0)),
        (se.scrollX = ue),
        (se.scrollY = fe),
        (se.isDragging = se.isGesturing = se.isPressed = !1),
        (se.enable = function (e) {
          return (
            se.isEnabled ||
              (A(he ? ve : n, 'scroll', E),
              0 <= t.indexOf('scroll') && A(he ? ve : n, 'scroll', $e, s, G),
              0 <= t.indexOf('wheel') && A(n, 'wheel', _e, s, G),
              ((0 <= t.indexOf('touch') && Oe) || 0 <= t.indexOf('pointer')) &&
                (A(n, Be[0], xe, s, G),
                A(ve, Be[2], Xe),
                A(ve, Be[3], Xe),
                $ && A(n, 'click', Pe, !1, !0),
                q && A(n, 'click', df),
                Y && A(ve, 'gesturestart', Ye),
                H && A(ve, 'gestureend', Ze),
                C && A(n, De + 'enter', bf),
                D && A(n, De + 'leave', cf),
                R && A(n, De + 'move', af)),
              (se.isEnabled = !0),
              e && e.type && xe(e),
              W && W(se)),
            se
          )
        }),
        (se.disable = function () {
          se.isEnabled &&
            (Re.filter(function (e) {
              return e !== se && z(e.target)
            }).length || B(he ? ve : n, 'scroll', E),
            se.isPressed &&
              (se._vx.reset(), se._vy.reset(), B(F ? n : ve, Be[1], Ve, !0)),
            B(he ? ve : n, 'scroll', $e, G),
            B(n, 'wheel', _e, G),
            B(n, Be[0], xe, G),
            B(ve, Be[2], Xe),
            B(ve, Be[3], Xe),
            B(n, 'click', Pe, !0),
            B(n, 'click', df),
            B(ve, 'gesturestart', Ye),
            B(ve, 'gestureend', Ze),
            B(n, De + 'enter', bf),
            B(n, De + 'leave', cf),
            B(n, De + 'move', af),
            (se.isEnabled = se.isPressed = se.isDragging = !1),
            j && j(se))
        }),
        (se.kill = function () {
          se.disable()
          var e = Re.indexOf(se)
          0 <= e && Re.splice(e, 1), ze === se && (ze = 0)
        }),
        Re.push(se),
        F && z(n) && (ze = se),
        se.enable(d)
    }),
    (function _createClass(e, t, r) {
      return (
        t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
      )
    })(Observer, [
      {
        key: 'velocityX',
        get: function get() {
          return this._vx.getVelocity()
        },
      },
      {
        key: 'velocityY',
        get: function get() {
          return this._vy.getVelocity()
        },
      },
    ]),
    Observer)
  function Observer(e) {
    this.init(e)
  }
  ;(k.version = '3.11.3'),
    (k.create = function (e) {
      return new k(e)
    }),
    (k.register = O),
    (k.getAll = function () {
      return Re.slice()
    }),
    (k.getById = function (t) {
      return Re.filter(function (e) {
        return e.vars.id === t
      })[0]
    }),
    q() && we.registerPlugin(k)
  function xa() {
    return (ot = 1)
  }
  function ya() {
    return (ot = 0)
  }
  function za(e) {
    return e
  }
  function Aa(e) {
    return Math.round(1e5 * e) / 1e5 || 0
  }
  function Ba() {
    return 'undefined' != typeof window
  }
  function Ca() {
    return Ke || (Ba() && (Ke = window.gsap) && Ke.registerPlugin && Ke)
  }
  function Da(e) {
    return !!~s.indexOf(e)
  }
  function Ea(e) {
    return (
      y(e, 'getBoundingClientRect') ||
      (Da(e)
        ? function () {
            return (Xt.width = We.innerWidth), (Xt.height = We.innerHeight), Xt
          }
        : function () {
            return Mt(e)
          })
    )
  }
  function Ha(e, t) {
    var r = t.s,
      n = t.d2,
      o = t.d,
      i = t.a
    return (r = 'scroll' + n) && (i = y(e, r))
      ? i() - Ea(e)()[o]
      : Da(e)
      ? (qe[r] || Ge[r]) -
        (We['inner' + n] || qe['client' + n] || Ge['client' + n])
      : e[r] - e['offset' + n]
  }
  function Ia(e, t) {
    for (var r = 0; r < p.length; r += 3)
      (t && !~t.indexOf(p[r + 1])) || e(p[r], p[r + 1], p[r + 2])
  }
  function Ja(e) {
    return 'string' == typeof e
  }
  function Ka(e) {
    return 'function' == typeof e
  }
  function La(e) {
    return 'number' == typeof e
  }
  function Ma(e) {
    return 'object' == typeof e
  }
  function Na(e, t, r) {
    return e && e.progress(t ? 0 : 1) && r && e.pause()
  }
  function Oa(e, t) {
    if (e.enabled) {
      var r = t(e)
      r && r.totalTime && (e.callbackAnimation = r)
    }
  }
  function db(e) {
    return We.getComputedStyle(e)
  }
  function fb(e, t) {
    for (var r in t) r in e || (e[r] = t[r])
    return e
  }
  function hb(e, t) {
    var r = t.d2
    return e['offset' + r] || e['client' + r] || 0
  }
  function ib(e) {
    var t,
      r = [],
      n = e.labels,
      o = e.duration()
    for (t in n) r.push(n[t] / o)
    return r
  }
  function kb(o) {
    var i = Ke.utils.snap(o),
      a =
        Array.isArray(o) &&
        o.slice(0).sort(function (e, t) {
          return e - t
        })
    return a
      ? function (e, t, r) {
          var n
          if ((void 0 === r && (r = 0.001), !t)) return i(e)
          if (0 < t) {
            for (e -= r, n = 0; n < a.length; n++) if (a[n] >= e) return a[n]
            return a[n - 1]
          }
          for (n = a.length, e += r; n--; ) if (a[n] <= e) return a[n]
          return a[0]
        }
      : function (e, t, r) {
          void 0 === r && (r = 0.001)
          var n = i(e)
          return !t || Math.abs(n - e) < r || n - e < 0 == t < 0
            ? n
            : i(t < 0 ? e - o : e + o)
        }
  }
  function mb(t, r, e, n) {
    return e.split(',').forEach(function (e) {
      return t(r, e, n)
    })
  }
  function nb(e, t, r, n, o) {
    return e.addEventListener(t, r, { passive: !n, capture: !!o })
  }
  function ob(e, t, r, n) {
    return e.removeEventListener(t, r, !!n)
  }
  function pb(e, t, r) {
    return r && r.wheelHandler && e(t, 'wheel', r)
  }
  function tb(e, t) {
    if (Ja(e)) {
      var r = e.indexOf('='),
        n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0
      ~r && (e.indexOf('%') > r && (n *= t / 100), (e = e.substr(0, r - 1))),
        (e =
          n +
          (e in D
            ? D[e] * t
            : ~e.indexOf('%')
            ? (parseFloat(e) * t) / 100
            : parseFloat(e) || 0))
    }
    return e
  }
  function ub(e, t, r, n, o, i, a, s) {
    var l = o.startColor,
      c = o.endColor,
      u = o.fontSize,
      f = o.indent,
      d = o.fontWeight,
      p = je.createElement('pgiamarker'),
      g = Da(r) || 'fixed' === y(r, 'pinType'),
      h = -1 !== e.indexOf('scroller'),
      v = g ? Ge : r,
      b = -1 !== e.indexOf('start'),
      m = b ? l : c,
      x =
        'border-color:' +
        m +
        ';font-size:' +
        u +
        ';color:' +
        m +
        ';font-weight:' +
        d +
        ';pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;'
    return (
      (x += 'position:' + ((h || s) && g ? 'fixed;' : 'absolute;')),
      (!h && !s && g) ||
        (x += (n === Ne ? _ : T) + ':' + (i + parseFloat(f)) + 'px;'),
      a &&
        (x +=
          'box-sizing:border-box;text-align:left;width:' +
          a.offsetWidth +
          'px;'),
      (p._isStart = b),
      p.setAttribute('class', 'gsap-marker-' + e + (t ? ' marker-' + t : '')),
      (p.style.cssText = x),
      (p.innerText = t || 0 === t ? e + '-' + t : e),
      v.children[0] ? v.insertBefore(p, v.children[0]) : v.appendChild(p),
      (p._offset = p['offset' + n.op.d2]),
      R(p, 0, n, b),
      p
    )
  }
  function zb() {
    return 34 < gt() - ht && (S = S || requestAnimationFrame(j))
  }
  function Ab() {
    ;(h && h.isPressed && !(h.startX > Ge.clientWidth)) ||
      (Le.cache++,
      h ? (S = S || requestAnimationFrame(j)) : j(),
      ht || H('scrollStart'),
      (ht = gt()))
  }
  function Bb() {
    ;(m = We.innerWidth), (b = We.innerHeight)
  }
  function Cb() {
    Le.cache++,
      nt ||
        g ||
        je.fullscreenElement ||
        je.webkitFullscreenElement ||
        (v &&
          m === We.innerWidth &&
          !(Math.abs(We.innerHeight - b) > 0.25 * We.innerHeight)) ||
        l.restart(!0)
  }
  function Fb() {
    return ob(Z, 'scrollEnd', Fb) || zt(!0)
  }
  function Ib(e) {
    for (var t = 0; t < V.length; t += 5)
      (!e || (V[t + 4] && V[t + 4].query === e)) &&
        ((V[t].style.cssText = V[t + 1]),
        V[t].getBBox && V[t].setAttribute('transform', V[t + 2] || ''),
        (V[t + 3].uncache = 1))
  }
  function Jb(e, t) {
    var r
    for (it = 0; it < Ot.length; it++)
      !(r = Ot[it]) || (t && r._ctx !== t) || (e ? r.kill(1) : r.revert(!0, !0))
    t && Ib(t), t || H('revert')
  }
  function Kb(e, t) {
    Le.cache++,
      (!t && ut) ||
        Le.forEach(function (e) {
          return Ka(e) && e.cacheID++ && (e.rec = 0)
        }),
      Ja(e) && (We.history.scrollRestoration = x = e)
  }
  function Xb(e, t, r, n) {
    if (!e._gsap.swappedIn) {
      for (var o, i = U.length, a = t.style, s = e.style; i--; )
        a[(o = U[i])] = r[o]
      ;(a.position = 'absolute' === r.position ? 'absolute' : 'relative'),
        'inline' === r.display && (a.display = 'inline-block'),
        (s[T] = s[_] = 'auto'),
        (a.flexBasis = r.flexBasis || 'auto'),
        (a.overflow = 'visible'),
        (a.boxSizing = 'border-box'),
        (a[mt] = hb(e, Je) + Et),
        (a[yt] = hb(e, Ne) + Et),
        (a[Tt] = s[kt] = s.top = s.left = '0'),
        Rt(n),
        (s[mt] = s.maxWidth = r[mt]),
        (s[yt] = s.maxHeight = r[yt]),
        (s[Tt] = r[Tt]),
        e.parentNode !== t &&
          (e.parentNode.insertBefore(t, e), t.appendChild(e)),
        (e._gsap.swappedIn = !0)
    }
  }
  function $b(e) {
    for (var t = G.length, r = e.style, n = [], o = 0; o < t; o++)
      n.push(G[o], r[G[o]])
    return (n.t = e), n
  }
  function bc(e, t, r, n, o, i, a, s, l, c, u, f, d) {
    Ka(e) && (e = e(s)),
      Ja(e) &&
        'max' === e.substr(0, 3) &&
        (e = f + ('=' === e.charAt(4) ? tb('0' + e.substr(3), r) : 0))
    var p,
      g,
      h,
      v = d ? d.time() : 0
    if ((d && d.seek(0), La(e))) a && R(a, r, n, !0)
    else {
      Ka(t) && (t = t(s))
      var b,
        m,
        y,
        x,
        S = (e || '0').split(' ')
      ;(h = I(t) || Ge),
        ((b = Mt(h) || {}) && (b.left || b.top)) ||
          'none' !== db(h).display ||
          ((x = h.style.display),
          (h.style.display = 'block'),
          (b = Mt(h)),
          x ? (h.style.display = x) : h.style.removeProperty('display')),
        (m = tb(S[0], b[n.d])),
        (y = tb(S[1] || '0', r)),
        (e = b[n.p] - l[n.p] - c + m + o - y),
        a && R(a, y, n, r - y < 20 || (a._isStart && 20 < y)),
        (r -= r - y)
    }
    if (i) {
      var w = e + r,
        _ = i._isStart
      ;(p = 'scroll' + n.d2),
        R(
          i,
          w,
          n,
          (_ && 20 < w) ||
            (!_ && (u ? Math.max(Ge[p], qe[p]) : i.parentNode[p]) <= w + 1),
        ),
        u &&
          ((l = Mt(a)),
          u && (i.style[n.op.p] = l[n.op.p] - n.op.m - i._offset + Et))
    }
    return (
      d &&
        h &&
        ((p = Mt(h)),
        d.seek(f),
        (g = Mt(h)),
        (d._caScrollDist = p[n.p] - g[n.p]),
        (e = (e / d._caScrollDist) * f)),
      d && d.seek(v),
      d ? e : Math.round(e)
    )
  }
  function dc(e, t, r, n) {
    if (e.parentNode !== t) {
      var o,
        i,
        a = e.style
      if (t === Ge) {
        for (o in ((e._stOrig = a.cssText), (i = db(e))))
          +o ||
            Q.test(o) ||
            !i[o] ||
            'string' != typeof a[o] ||
            '0' === o ||
            (a[o] = i[o])
        ;(a.top = r), (a.left = n)
      } else a.cssText = e._stOrig
      ;(Ke.core.getCache(e).uncache = 1), t.appendChild(e)
    }
  }
  function ec(l, e) {
    function Sj(e, t, r, n, o) {
      var i = Sj.tween,
        a = t.onComplete,
        s = {}
      return (
        (r = r || f()),
        (o = (n && o) || 0),
        (n = n || e - r),
        i && i.kill(),
        (c = Math.round(r)),
        (t[d] = e),
        ((t.modifiers = s)[d] = function (e) {
          return (
            (e = Math.round(f())) !== c &&
            e !== u &&
            3 < Math.abs(e - c) &&
            3 < Math.abs(e - u)
              ? (i.kill(), (Sj.tween = 0))
              : (e = r + n * i.ratio + o * i.ratio * i.ratio),
            (u = c),
            (c = Math.round(e))
          )
        }),
        (t.onComplete = function () {
          ;(Sj.tween = 0), a && a.call(i)
        }),
        (i = Sj.tween = Ke.to(l, t))
      )
    }
    var c,
      u,
      f = J(l, e),
      d = '_scroll' + e.p2
    return (
      ((l[d] = f).wheelHandler = function () {
        return Sj.tween && Sj.tween.kill() && (Sj.tween = 0)
      }),
      nb(l, 'wheel', f.wheelHandler),
      Sj
    )
  }
  var Ke,
    a,
    We,
    je,
    qe,
    Ge,
    s,
    l,
    et,
    tt,
    rt,
    c,
    nt,
    ot,
    u,
    it,
    f,
    d,
    p,
    at,
    st,
    g,
    h,
    v,
    b,
    m,
    P,
    lt,
    x,
    ct,
    S,
    ut,
    ft,
    dt,
    pt = 1,
    gt = Date.now,
    w = gt(),
    ht = 0,
    vt = 0,
    bt = Math.abs,
    _ = 'right',
    T = 'bottom',
    mt = 'width',
    yt = 'height',
    xt = 'Right',
    St = 'Left',
    wt = 'Top',
    _t = 'Bottom',
    Tt = 'padding',
    kt = 'margin',
    At = 'Width',
    C = 'Height',
    Et = 'px',
    Mt = function _getBounds(e, t) {
      var r =
          t &&
          'matrix(1, 0, 0, 1, 0, 0)' !== db(e)[u] &&
          Ke.to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          }).progress(1),
        n = e.getBoundingClientRect()
      return r && r.progress(0).kill(), n
    },
    Pt = {
      startColor: 'green',
      endColor: 'red',
      indent: 0,
      fontSize: '16px',
      fontWeight: 'normal',
    },
    Ct = { toggleActions: 'play', anticipatePin: 0 },
    D = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    R = function _positionMarker(e, t, r, n) {
      var o = { display: 'block' },
        i = r[n ? 'os2' : 'p2'],
        a = r[n ? 'p2' : 'os2']
      ;(e._isFlipped = n),
        (o[r.a + 'Percent'] = n ? -100 : 0),
        (o[r.a] = n ? '1px' : 0),
        (o['border' + i + At] = 1),
        (o['border' + a + At] = 0),
        (o[r.p] = t + 'px'),
        Ke.set(e, o)
    },
    Ot = [],
    Dt = {},
    X = {},
    Y = [],
    H = function _dispatch(e) {
      return (
        (X[e] &&
          X[e].map(function (e) {
            return e()
          })) ||
        Y
      )
    },
    V = [],
    It = 0,
    zt = function _refreshAll(e, t) {
      if (!ht || e) {
        ;(ut = Z.isRefreshing = !0),
          Le.forEach(function (e) {
            return Ka(e) && e.cacheID++ && (e.rec = e())
          })
        var r = H('refreshInit')
        at && Z.sort(),
          t || Jb(),
          Le.forEach(function (e) {
            Ka(e) &&
              (e.smooth && (e.target.style.scrollBehavior = 'auto'), e(0))
          }),
          Ot.slice(0).forEach(function (e) {
            return e.refresh()
          }),
          Ot.forEach(function (e, t) {
            if (e._subPinOffset && e.pin) {
              var r = e.vars.horizontal ? 'offsetWidth' : 'offsetHeight',
                n = e.pin[r]
              e.revert(!0, 1), e.adjustPinSpacing(e.pin[r] - n), e.revert(!1, 1)
            }
          }),
          Ot.forEach(function (e) {
            return (
              'max' === e.vars.end &&
              e.setPositions(
                e.start,
                Math.max(e.start + 1, Ha(e.scroller, e._dir)),
              )
            )
          }),
          r.forEach(function (e) {
            return e && e.render && e.render(-1)
          }),
          Le.forEach(function (e) {
            Ka(e) &&
              (e.smooth &&
                requestAnimationFrame(function () {
                  return (e.target.style.scrollBehavior = 'smooth')
                }),
              e.rec && e(e.rec))
          }),
          Kb(x, 1),
          l.pause(),
          It++,
          j(2),
          Ot.forEach(function (e) {
            return Ka(e.vars.onRefresh) && e.vars.onRefresh(e)
          }),
          (ut = Z.isRefreshing = !1),
          H('refresh')
      } else nb(Z, 'scrollEnd', Fb)
    },
    W = 0,
    Bt = 1,
    j = function _updateAll(e) {
      if (!ut || 2 === e) {
        ;(Z.isUpdating = !0), dt && dt.update(0)
        var t = Ot.length,
          r = gt(),
          n = 50 <= r - w,
          o = t && Ot[0].scroll()
        if (
          ((Bt = o < W ? -1 : 1),
          (W = o),
          n &&
            (ht && !ot && 200 < r - ht && ((ht = 0), H('scrollEnd')),
            (rt = w),
            (w = r)),
          Bt < 0)
        ) {
          for (it = t; 0 < it--; ) Ot[it] && Ot[it].update(0, n)
          Bt = 1
        } else for (it = 0; it < t; it++) Ot[it] && Ot[it].update(0, n)
        Z.isUpdating = !1
      }
      S = 0
    },
    U = [
      'left',
      'top',
      T,
      _,
      kt + _t,
      kt + xt,
      kt + wt,
      kt + St,
      'display',
      'flexShrink',
      'float',
      'zIndex',
      'gridColumnStart',
      'gridColumnEnd',
      'gridRowStart',
      'gridRowEnd',
      'gridArea',
      'justifySelf',
      'alignSelf',
      'placeSelf',
      'order',
    ],
    G = U.concat([
      mt,
      yt,
      'boxSizing',
      'max' + At,
      'max' + C,
      'position',
      kt,
      Tt,
      Tt + wt,
      Tt + xt,
      Tt + _t,
      Tt + St,
    ]),
    $ = /([A-Z])/g,
    Rt = function _setState(e) {
      if (e) {
        var t,
          r,
          n = e.t.style,
          o = e.length,
          i = 0
        for ((e.t._gsap || Ke.core.getCache(e.t)).uncache = 1; i < o; i += 2)
          (r = e[i + 1]),
            (t = e[i]),
            r
              ? (n[t] = r)
              : n[t] && n.removeProperty(t.replace($, '-$1').toLowerCase())
      }
    },
    Xt = { left: 0, top: 0 },
    Q = /(webkit|moz|length|cssText|inset)/i,
    Z =
      ((ScrollTrigger.prototype.init = function init(_, T) {
        if (
          ((this.progress = this.start = 0), this.vars && this.kill(!0, !0), vt)
        ) {
          var k,
            n,
            p,
            A,
            E,
            M,
            P,
            C,
            O,
            D,
            z,
            e,
            B,
            R,
            X,
            L,
            F,
            t,
            Y,
            b,
            H,
            N,
            m,
            K,
            x,
            S,
            r,
            w,
            V,
            W,
            o,
            g,
            j,
            q,
            U,
            G,
            $,
            i,
            Q = (_ = fb(Ja(_) || La(_) || _.nodeType ? { trigger: _ } : _, Ct))
              .onUpdate,
            Z = _.toggleClass,
            a = _.id,
            ee = _.onToggle,
            te = _.onRefresh,
            re = _.scrub,
            ne = _.trigger,
            oe = _.pin,
            ie = _.pinSpacing,
            ae = _.invalidateOnRefresh,
            se = _.anticipatePin,
            s = _.onScrubComplete,
            h = _.onSnapComplete,
            le = _.once,
            ce = _.snap,
            ue = _.pinReparent,
            l = _.pinSpacer,
            fe = _.containerAnimation,
            de = _.fastScrollEnd,
            pe = _.preventOverlaps,
            ge =
              _.horizontal || (_.containerAnimation && !1 !== _.horizontal)
                ? Je
                : Ne,
            he = !re && 0 !== re,
            ve = I(_.scroller || We),
            c = Ke.core.getCache(ve),
            be = Da(ve),
            me =
              'fixed' ===
              ('pinType' in _
                ? _.pinType
                : y(ve, 'pinType') || (be && 'fixed')),
            ye = [_.onEnter, _.onLeave, _.onEnterBack, _.onLeaveBack],
            xe = he && _.toggleActions.split(' '),
            u = 'markers' in _ ? _.markers : Ct.markers,
            Se = be ? 0 : parseFloat(db(ve)['border' + ge.p2 + At]) || 0,
            we = this,
            _e =
              _.onRefreshInit &&
              function () {
                return _.onRefreshInit(we)
              },
            Te = (function _getSizeFunc(e, t, r) {
              var n = r.d,
                o = r.d2,
                i = r.a
              return (i = y(e, 'getBoundingClientRect'))
                ? function () {
                    return i()[n]
                  }
                : function () {
                    return (t ? We['inner' + o] : e['client' + o]) || 0
                  }
            })(ve, be, ge),
            ke = (function _getOffsetsFunc(e, t) {
              return !t || ~Fe.indexOf(e)
                ? Ea(e)
                : function () {
                    return Xt
                  }
            })(ve, be),
            Ae = 0,
            Ee = 0,
            Me = J(ve, ge)
          if (
            (lt(we),
            (we._dir = ge),
            (se *= 45),
            (we.scroller = ve),
            (we.scroll = fe ? fe.time.bind(fe) : Me),
            (A = Me()),
            (we.vars = _),
            (T = T || _.animation),
            'refreshPriority' in _ &&
              ((at = 1), -9999 === _.refreshPriority && (dt = we)),
            (c.tweenScroll = c.tweenScroll || {
              top: ec(ve, Ne),
              left: ec(ve, Je),
            }),
            (we.tweenTo = k = c.tweenScroll[ge.p]),
            (we.scrubDuration = function (e) {
              ;(o = La(e) && e)
                ? W
                  ? W.duration(e)
                  : (W = Ke.to(T, {
                      ease: 'expo',
                      totalProgress: '+=0.001',
                      duration: o,
                      paused: !0,
                      onComplete: function onComplete() {
                        return s && s(we)
                      },
                    }))
                : (W && W.progress(1).kill(), (W = 0))
            }),
            T &&
              ((T.vars.lazy = !1),
              T._initted ||
                (!1 !== T.vars.immediateRender &&
                  !1 !== _.immediateRender &&
                  T.duration() &&
                  T.render(0, !0, !0)),
              (we.animation = T.pause()),
              (T.scrollTrigger = we).scrubDuration(re),
              (w = 0),
              (a = a || T.vars.id)),
            Ot.push(we),
            ce &&
              ((Ma(ce) && !ce.push) || (ce = { snapTo: ce }),
              'scrollBehavior' in Ge.style &&
                Ke.set(be ? [Ge, qe] : ve, { scrollBehavior: 'auto' }),
              Le.forEach(function (e) {
                return (
                  Ka(e) &&
                  e.target === (be ? je.scrollingElement || qe : ve) &&
                  (e.smooth = !1)
                )
              }),
              (p = Ka(ce.snapTo)
                ? ce.snapTo
                : 'labels' === ce.snapTo
                ? (function _getClosestLabel(t) {
                    return function (e) {
                      return Ke.utils.snap(ib(t), e)
                    }
                  })(T)
                : 'labelsDirectional' === ce.snapTo
                ? (function _getLabelAtDirection(r) {
                    return function (e, t) {
                      return kb(ib(r))(e, t.direction)
                    }
                  })(T)
                : !1 !== ce.directional
                ? function (e, t) {
                    return kb(ce.snapTo)(e, gt() - Ee < 500 ? 0 : t.direction)
                  }
                : Ke.utils.snap(ce.snapTo)),
              (g = ce.duration || { min: 0.1, max: 2 }),
              (g = Ma(g) ? tt(g.min, g.max) : tt(g, g)),
              (j = Ke.delayedCall(ce.delay || o / 2 || 0.1, function () {
                var e = Me(),
                  t = gt() - Ee < 500,
                  r = k.tween
                if (
                  !(t || Math.abs(we.getVelocity()) < 10) ||
                  r ||
                  ot ||
                  Ae === e
                )
                  we.isActive && Ae !== e && j.restart(!0)
                else {
                  var n = (e - M) / B,
                    o = T && !he ? T.totalProgress() : n,
                    i = t ? 0 : ((o - V) / (gt() - rt)) * 1e3 || 0,
                    a = Ke.utils.clamp(-n, 1 - n, (bt(i / 2) * i) / 0.185),
                    s = n + (!1 === ce.inertia ? 0 : a),
                    l = tt(0, 1, p(s, we)),
                    c = Math.round(M + l * B),
                    u = ce.onStart,
                    f = ce.onInterrupt,
                    d = ce.onComplete
                  if (e <= P && M <= e && c !== e) {
                    if (r && !r._initted && r.data <= bt(c - e)) return
                    !1 === ce.inertia && (a = l - n),
                      k(
                        c,
                        {
                          duration: g(
                            bt(
                              (0.185 * Math.max(bt(s - o), bt(l - o))) /
                                i /
                                0.05 || 0,
                            ),
                          ),
                          ease: ce.ease || 'power3',
                          data: bt(c - e),
                          onInterrupt: function onInterrupt() {
                            return j.restart(!0) && f && f(we)
                          },
                          onComplete: function onComplete() {
                            we.update(),
                              (Ae = Me()),
                              (w = V =
                                T && !he ? T.totalProgress() : we.progress),
                              h && h(we),
                              d && d(we)
                          },
                        },
                        e,
                        a * B,
                        c - e - a * B,
                      ),
                      u && u(we, k.tween)
                  }
                }
              }).pause())),
            a && (Dt[a] = we),
            (i =
              (i =
                (ne = we.trigger = I(ne || oe)) &&
                ne._gsap &&
                ne._gsap.stRevert) && i(we)),
            (oe = !0 === oe ? ne : I(oe)),
            Ja(Z) && (Z = { targets: ne, className: Z }),
            oe &&
              (!1 === ie ||
                ie === kt ||
                (ie =
                  !(
                    !ie &&
                    oe.parentNode &&
                    oe.parentNode.style &&
                    'flex' === db(oe.parentNode).display
                  ) && Tt),
              (we.pin = oe),
              (n = Ke.core.getCache(oe)).spacer
                ? (R = n.pinState)
                : (l &&
                    ((l = I(l)) &&
                      !l.nodeType &&
                      (l = l.current || l.nativeElement),
                    (n.spacerIsNative = !!l),
                    l && (n.spacerState = $b(l))),
                  (n.spacer = F = l || je.createElement('div')),
                  F.classList.add('pin-spacer'),
                  a && F.classList.add('pin-spacer-' + a),
                  (n.pinState = R = $b(oe))),
              !1 !== _.force3D && Ke.set(oe, { force3D: !0 }),
              (we.spacer = F = n.spacer),
              (r = db(oe)),
              (m = r[ie + ge.os2]),
              (Y = Ke.getProperty(oe)),
              (b = Ke.quickSetter(oe, ge.a, Et)),
              Xb(oe, F, r),
              (L = $b(oe))),
            u)
          ) {
            ;(e = Ma(u) ? fb(u, Pt) : Pt),
              (D = ub('scroller-start', a, ve, ge, e, 0)),
              (z = ub('scroller-end', a, ve, ge, e, 0, D)),
              (t = D['offset' + ge.op.d2])
            var f = I(y(ve, 'content') || ve)
            ;(C = this.markerStart = ub('start', a, f, ge, e, t, 0, fe)),
              (O = this.markerEnd = ub('end', a, f, ge, e, t, 0, fe)),
              fe && ($ = Ke.quickSetter([C, O], ge.a, Et)),
              me ||
                (Fe.length && !0 === y(ve, 'fixedMarkers')) ||
                ((function _makePositionable(e) {
                  var t = db(e).position
                  e.style.position =
                    'absolute' === t || 'fixed' === t ? t : 'relative'
                })(be ? Ge : ve),
                Ke.set([D, z], { force3D: !0 }),
                (x = Ke.quickSetter(D, ge.a, Et)),
                (S = Ke.quickSetter(z, ge.a, Et)))
          }
          if (fe) {
            var d = fe.vars.onUpdate,
              v = fe.vars.onUpdateParams
            fe.eventCallback('onUpdate', function () {
              we.update(0, 0, 1), d && d.apply(v || [])
            })
          }
          ;(we.previous = function () {
            return Ot[Ot.indexOf(we) - 1]
          }),
            (we.next = function () {
              return Ot[Ot.indexOf(we) + 1]
            }),
            (we.revert = function (e, t) {
              if (!t) return we.kill(!0)
              var r = !1 !== e || !we.enabled,
                n = nt
              r !== we.isReverted &&
                (r &&
                  ((U = Math.max(Me(), we.scroll.rec || 0)),
                  (q = we.progress),
                  (G = T && T.progress())),
                C &&
                  [C, O, D, z].forEach(function (e) {
                    return (e.style.display = r ? 'none' : 'block')
                  }),
                r && ((nt = 1), we.update(r)),
                oe &&
                  (r
                    ? (function _swapPinOut(e, t, r) {
                        Rt(r)
                        var n = e._gsap
                        if (n.spacerIsNative) Rt(n.spacerState)
                        else if (e._gsap.swappedIn) {
                          var o = t.parentNode
                          o && (o.insertBefore(e, t), o.removeChild(t))
                        }
                        e._gsap.swappedIn = !1
                      })(oe, F, R)
                    : (ue && we.isActive) || Xb(oe, F, db(oe), K)),
                r || we.update(r),
                (nt = n),
                (we.isReverted = r))
            }),
            (we.refresh = function (e, t) {
              if ((!nt && we.enabled) || t)
                if (oe && e && ht) nb(ScrollTrigger, 'scrollEnd', Fb)
                else {
                  !ut && _e && _e(we),
                    (nt = 1),
                    (Ee = gt()),
                    k.tween && (k.tween.kill(), (k.tween = 0)),
                    W && W.pause(),
                    ae && T && T.revert({ kill: !1 }).invalidate(),
                    we.isReverted || we.revert(!0, !0),
                    (we._subPinOffset = !1)
                  for (
                    var r,
                      n,
                      o,
                      i,
                      a,
                      s,
                      l,
                      c,
                      u,
                      f,
                      d = Te(),
                      p = ke(),
                      g = fe ? fe.duration() : Ha(ve, ge),
                      h = 0,
                      v = 0,
                      b = _.end,
                      m = _.endTrigger || ne,
                      y =
                        _.start ||
                        (0 !== _.start && ne ? (oe ? '0 0' : '0 100%') : 0),
                      x = (we.pinnedContainer =
                        _.pinnedContainer && I(_.pinnedContainer)),
                      S = (ne && Math.max(0, Ot.indexOf(we))) || 0,
                      w = S;
                    w--;

                  )
                    (s = Ot[w]).end || s.refresh(0, 1) || (nt = 1),
                      !(l = s.pin) ||
                        (l !== ne && l !== oe) ||
                        s.isReverted ||
                        ((f = f || []).unshift(s), s.revert(!0, !0)),
                      s !== Ot[w] && (S--, w--)
                  for (
                    Ka(y) && (y = y(we)),
                      M =
                        bc(y, ne, d, ge, Me(), C, D, we, p, Se, me, g, fe) ||
                        (oe ? -0.001 : 0),
                      Ka(b) && (b = b(we)),
                      Ja(b) &&
                        !b.indexOf('+=') &&
                        (~b.indexOf(' ')
                          ? (b = (Ja(y) ? y.split(' ')[0] : '') + b)
                          : ((h = tb(b.substr(2), d)),
                            (b = Ja(y) ? y : M + h),
                            (m = ne))),
                      P =
                        Math.max(
                          M,
                          bc(
                            b || (m ? '100% 0' : g),
                            m,
                            d,
                            ge,
                            Me() + h,
                            O,
                            z,
                            we,
                            p,
                            Se,
                            me,
                            g,
                            fe,
                          ),
                        ) || -0.001,
                      B = P - M || ((M -= 0.01) && 0.001),
                      h = 0,
                      w = S;
                    w--;

                  )
                    (l = (s = Ot[w]).pin) &&
                      s.start - s._pinPush <= M &&
                      !fe &&
                      0 < s.end &&
                      ((r = s.end - s.start),
                      ((l === ne && s.start - s._pinPush < M) || l === x) &&
                        !La(y) &&
                        (h += r * (1 - s.progress)),
                      l === oe && (v += r))
                  if (
                    ((M += h),
                    (P += h),
                    (we._pinPush = v),
                    C &&
                      h &&
                      (((r = {})[ge.a] = '+=' + h),
                      x && (r[ge.p] = '-=' + Me()),
                      Ke.set([C, O], r)),
                    oe)
                  )
                    (r = db(oe)),
                      (i = ge === Ne),
                      (o = Me()),
                      (H = parseFloat(Y(ge.a)) + v),
                      !g &&
                        1 < P &&
                        ((be ? Ge : ve).style['overflow-' + ge.a] = 'scroll'),
                      Xb(oe, F, r),
                      (L = $b(oe)),
                      (n = Mt(oe, !0)),
                      (c = me && J(ve, i ? Je : Ne)()),
                      ie &&
                        (((K = [ie + ge.os2, B + v + Et]).t = F),
                        (w = ie === Tt ? hb(oe, ge) + B + v : 0) &&
                          K.push(ge.d, w + Et),
                        Rt(K),
                        x &&
                          Ot.forEach(function (e) {
                            e.pin === x &&
                              !1 !== e.vars.pinSpacing &&
                              (e._subPinOffset = !0)
                          }),
                        me && Me(U)),
                      me &&
                        (((a = {
                          top: n.top + (i ? o - M : c) + Et,
                          left: n.left + (i ? c : o - M) + Et,
                          boxSizing: 'border-box',
                          position: 'fixed',
                        })[mt] = a.maxWidth =
                          Math.ceil(n.width) + Et),
                        (a[yt] = a.maxHeight = Math.ceil(n.height) + Et),
                        (a[kt] =
                          a[kt + wt] =
                          a[kt + xt] =
                          a[kt + _t] =
                          a[kt + St] =
                            '0'),
                        (a[Tt] = r[Tt]),
                        (a[Tt + wt] = r[Tt + wt]),
                        (a[Tt + xt] = r[Tt + xt]),
                        (a[Tt + _t] = r[Tt + _t]),
                        (a[Tt + St] = r[Tt + St]),
                        (X = (function _copyState(e, t, r) {
                          for (
                            var n, o = [], i = e.length, a = r ? 8 : 0;
                            a < i;
                            a += 2
                          )
                            (n = e[a]), o.push(n, n in t ? t[n] : e[a + 1])
                          return (o.t = e.t), o
                        })(R, a, ue)),
                        ut && Me(0)),
                      T
                        ? ((u = T._initted),
                          st(1),
                          T.render(T.duration(), !0, !0),
                          (N = Y(ge.a) - H + B + v),
                          B !== N && me && X.splice(X.length - 2, 2),
                          T.render(0, !0, !0),
                          u || T.invalidate(!0),
                          T.parent || T.totalTime(T.totalTime()),
                          st(0))
                        : (N = B)
                  else if (ne && Me() && !fe)
                    for (n = ne.parentNode; n && n !== Ge; )
                      n._pinOffset &&
                        ((M -= n._pinOffset), (P -= n._pinOffset)),
                        (n = n.parentNode)
                  f &&
                    f.forEach(function (e) {
                      return e.revert(!1, !0)
                    }),
                    (we.start = M),
                    (we.end = P),
                    (A = E = ut ? U : Me()),
                    fe || ut || (A < U && Me(U), (we.scroll.rec = 0)),
                    we.revert(!1, !0),
                    j &&
                      ((Ae = -1), we.isActive && Me(M + B * q), j.restart(!0)),
                    (nt = 0),
                    T &&
                      he &&
                      (T._initted || G) &&
                      T.progress() !== G &&
                      T.progress(G, !0).render(T.time(), !0, !0),
                    (q === we.progress && !fe) ||
                      (T && !he && T.totalProgress(q, !0),
                      (we.progress = (A - M) / B === q ? 0 : q)),
                    oe && ie && (F._pinOffset = Math.round(we.progress * N)),
                    te && !ut && te(we)
                }
            }),
            (we.getVelocity = function () {
              return ((Me() - E) / (gt() - rt)) * 1e3 || 0
            }),
            (we.endAnimation = function () {
              Na(we.callbackAnimation),
                T &&
                  (W
                    ? W.progress(1)
                    : T.paused()
                    ? he || Na(T, we.direction < 0, 1)
                    : Na(T, T.reversed()))
            }),
            (we.labelToScroll = function (e) {
              return (
                (T &&
                  T.labels &&
                  (M || we.refresh() || M) +
                    (T.labels[e] / T.duration()) * B) ||
                0
              )
            }),
            (we.getTrailing = function (t) {
              var e = Ot.indexOf(we),
                r =
                  0 < we.direction ? Ot.slice(0, e).reverse() : Ot.slice(e + 1)
              return (
                Ja(t)
                  ? r.filter(function (e) {
                      return e.vars.preventOverlaps === t
                    })
                  : r
              ).filter(function (e) {
                return 0 < we.direction ? e.end <= M : e.start >= P
              })
            }),
            (we.update = function (e, t, r) {
              if (!fe || r || e) {
                var n,
                  o,
                  i,
                  a,
                  s,
                  l,
                  c,
                  u = ut ? U : we.scroll(),
                  f = e ? 0 : (u - M) / B,
                  d = f < 0 ? 0 : 1 < f ? 1 : f || 0,
                  p = we.progress
                if (
                  (t &&
                    ((E = A),
                    (A = fe ? Me() : u),
                    ce && ((V = w), (w = T && !he ? T.totalProgress() : d))),
                  se &&
                    !d &&
                    oe &&
                    !nt &&
                    !pt &&
                    ht &&
                    M < u + ((u - E) / (gt() - rt)) * se &&
                    (d = 1e-4),
                  d !== p && we.enabled)
                ) {
                  if (
                    ((a =
                      (s =
                        (n = we.isActive = !!d && d < 1) != (!!p && p < 1)) ||
                      !!d != !!p),
                    (we.direction = p < d ? 1 : -1),
                    (we.progress = d),
                    a &&
                      !nt &&
                      ((o = d && !p ? 0 : 1 === d ? 1 : 1 === p ? 2 : 3),
                      he &&
                        ((i =
                          (!s && 'none' !== xe[o + 1] && xe[o + 1]) || xe[o]),
                        (c =
                          T && ('complete' === i || 'reset' === i || i in T)))),
                    pe &&
                      (s || c) &&
                      (c || re || !T) &&
                      (Ka(pe)
                        ? pe(we)
                        : we.getTrailing(pe).forEach(function (e) {
                            return e.endAnimation()
                          })),
                    he ||
                      (!W || nt || pt
                        ? T && T.totalProgress(d, !!nt)
                        : ((fe || (dt && dt !== we)) &&
                            W.render(W._dp._time - W._start),
                          W.resetTo
                            ? W.resetTo('totalProgress', d, T._tTime / T._tDur)
                            : ((W.vars.totalProgress = d),
                              W.invalidate().restart()))),
                    oe)
                  )
                    if ((e && ie && (F.style[ie + ge.os2] = m), me)) {
                      if (a) {
                        if (
                          ((l =
                            !e && p < d && u < P + 1 && u + 1 >= Ha(ve, ge)),
                          ue)
                        )
                          if (e || (!n && !l)) dc(oe, F)
                          else {
                            var g = Mt(oe, !0),
                              h = u - M
                            dc(
                              oe,
                              Ge,
                              g.top + (ge === Ne ? h : 0) + Et,
                              g.left + (ge === Ne ? 0 : h) + Et,
                            )
                          }
                        Rt(n || l ? X : L),
                          (N !== B && d < 1 && n) ||
                            b(H + (1 !== d || l ? 0 : N))
                      }
                    } else b(Aa(H + N * d))
                  !ce || k.tween || nt || pt || j.restart(!0),
                    Z &&
                      (s || (le && d && (d < 1 || !ct))) &&
                      et(Z.targets).forEach(function (e) {
                        return e.classList[n || le ? 'add' : 'remove'](
                          Z.className,
                        )
                      }),
                    !Q || he || e || Q(we),
                    a && !nt
                      ? (he &&
                          (c &&
                            ('complete' === i
                              ? T.pause().totalProgress(1)
                              : 'reset' === i
                              ? T.restart(!0).pause()
                              : 'restart' === i
                              ? T.restart(!0)
                              : T[i]()),
                          Q && Q(we)),
                        (!s && ct) ||
                          (ee && s && Oa(we, ee),
                          ye[o] && Oa(we, ye[o]),
                          le && (1 === d ? we.kill(!1, 1) : (ye[o] = 0)),
                          s || (ye[(o = 1 === d ? 1 : 3)] && Oa(we, ye[o]))),
                        de &&
                          !n &&
                          Math.abs(we.getVelocity()) > (La(de) ? de : 2500) &&
                          (Na(we.callbackAnimation),
                          W
                            ? W.progress(1)
                            : Na(T, 'reverse' === i ? 1 : !d, 1)))
                      : he && Q && !nt && Q(we)
                }
                if (S) {
                  var v = fe ? (u / fe.duration()) * (fe._caScrollDist || 0) : u
                  x(v + (D._isFlipped ? 1 : 0)), S(v)
                }
                $ && $((-u / fe.duration()) * (fe._caScrollDist || 0))
              }
            }),
            (we.enable = function (e, t) {
              we.enabled ||
                ((we.enabled = !0),
                nb(ve, 'resize', Cb),
                nb(be ? je : ve, 'scroll', Ab),
                _e && nb(ScrollTrigger, 'refreshInit', _e),
                !1 !== e && ((we.progress = q = 0), (A = E = Ae = Me())),
                !1 !== t && we.refresh())
            }),
            (we.getTween = function (e) {
              return e && k ? k.tween : W
            }),
            (we.setPositions = function (e, t) {
              oe &&
                ((H += e - M),
                (N += t - e - B),
                ie === Tt && we.adjustPinSpacing(t - e - B)),
                (we.start = M = e),
                (we.end = P = t),
                (B = t - e),
                we.update()
            }),
            (we.adjustPinSpacing = function (e) {
              if (K) {
                var t = K.indexOf(ge.d) + 1
                ;(K[t] = parseFloat(K[t]) + e + Et),
                  (K[1] = parseFloat(K[1]) + e + Et),
                  Rt(K)
              }
            }),
            (we.disable = function (e, t) {
              if (
                we.enabled &&
                (!1 !== e && we.revert(!0, !0),
                (we.enabled = we.isActive = !1),
                t || (W && W.pause()),
                (U = 0),
                n && (n.uncache = 1),
                _e && ob(ScrollTrigger, 'refreshInit', _e),
                j && (j.pause(), k.tween && k.tween.kill() && (k.tween = 0)),
                !be)
              ) {
                for (var r = Ot.length; r--; )
                  if (Ot[r].scroller === ve && Ot[r] !== we) return
                ob(ve, 'resize', Cb), ob(ve, 'scroll', Ab)
              }
            }),
            (we.kill = function (e, t) {
              we.disable(e, t), W && !t && W.kill(), a && delete Dt[a]
              var r = Ot.indexOf(we)
              0 <= r && Ot.splice(r, 1),
                r === it && 0 < Bt && it--,
                (r = 0),
                Ot.forEach(function (e) {
                  return e.scroller === we.scroller && (r = 1)
                }),
                r || ut || (we.scroll.rec = 0),
                T &&
                  ((T.scrollTrigger = null),
                  e && T.revert({ kill: !1 }),
                  t || T.kill()),
                C &&
                  [C, O, D, z].forEach(function (e) {
                    return e.parentNode && e.parentNode.removeChild(e)
                  }),
                dt === we && (dt = 0),
                oe &&
                  (n && (n.uncache = 1),
                  (r = 0),
                  Ot.forEach(function (e) {
                    return e.pin === oe && r++
                  }),
                  r || (n.spacer = 0)),
                _.onKill && _.onKill(we)
            }),
            we.enable(!1, !1),
            i && i(we),
            T && T.add && !B
              ? Ke.delayedCall(0.01, function () {
                  return M || P || we.refresh()
                }) &&
                (B = 0.01) &&
                (M = P = 0)
              : we.refresh(),
            oe &&
              (function _queueRefreshAll() {
                if (ft !== It) {
                  var e = (ft = It)
                  requestAnimationFrame(function () {
                    return e === It && zt(!0)
                  })
                }
              })()
        } else this.update = this.refresh = this.kill = za
      }),
      (ScrollTrigger.register = function register(e) {
        return (
          a ||
            ((Ke = e || Ca()),
            Ba() && window.document && ScrollTrigger.enable(),
            (a = vt)),
          a
        )
      }),
      (ScrollTrigger.defaults = function defaults(e) {
        if (e) for (var t in e) Ct[t] = e[t]
        return Ct
      }),
      (ScrollTrigger.disable = function disable(t, r) {
        ;(vt = 0),
          Ot.forEach(function (e) {
            return e[r ? 'kill' : 'disable'](t)
          }),
          ob(We, 'wheel', Ab),
          ob(je, 'scroll', Ab),
          clearInterval(c),
          ob(je, 'touchcancel', za),
          ob(Ge, 'touchstart', za),
          mb(ob, je, 'pointerdown,touchstart,mousedown', xa),
          mb(ob, je, 'pointerup,touchend,mouseup', ya),
          l.kill(),
          Ia(ob)
        for (var e = 0; e < Le.length; e += 3)
          pb(ob, Le[e], Le[e + 1]), pb(ob, Le[e], Le[e + 2])
      }),
      (ScrollTrigger.enable = function enable() {
        if (
          ((We = window),
          (je = document),
          (qe = je.documentElement),
          (Ge = je.body),
          Ke &&
            ((et = Ke.utils.toArray),
            (tt = Ke.utils.clamp),
            (lt = Ke.core.context || za),
            (st = Ke.core.suppressOverwrites || za),
            (x = We.history.scrollRestoration || 'auto'),
            Ke.core.globals('ScrollTrigger', ScrollTrigger),
            Ge))
        ) {
          ;(vt = 1),
            k.register(Ke),
            (ScrollTrigger.isTouch = k.isTouch),
            (P =
              k.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            nb(We, 'wheel', Ab),
            (s = [We, je, qe, Ge]),
            Ke.matchMedia
              ? ((ScrollTrigger.matchMedia = function (e) {
                  var t,
                    r = Ke.matchMedia()
                  for (t in e) r.add(t, e[t])
                  return r
                }),
                Ke.addEventListener('matchMediaInit', function () {
                  return Jb()
                }),
                Ke.addEventListener('matchMediaRevert', function () {
                  return Ib()
                }),
                Ke.addEventListener('matchMedia', function () {
                  zt(0, 1), H('matchMedia')
                }),
                Ke.matchMedia('(orientation: portrait)', function () {
                  return Bb(), Bb
                }))
              : console.warn('Requires GSAP 3.11.0 or later'),
            Bb(),
            nb(je, 'scroll', Ab)
          var e,
            t,
            r = Ge.style,
            n = r.borderTopStyle,
            o = Ke.core.Animation.prototype
          for (
            o.revert ||
              Object.defineProperty(o, 'revert', {
                value: function value() {
                  return this.time(-0.01, !0)
                },
              }),
              r.borderTopStyle = 'solid',
              e = Mt(Ge),
              Ne.m = Math.round(e.top + Ne.sc()) || 0,
              Je.m = Math.round(e.left + Je.sc()) || 0,
              n ? (r.borderTopStyle = n) : r.removeProperty('border-top-style'),
              c = setInterval(zb, 250),
              Ke.delayedCall(0.5, function () {
                return (pt = 0)
              }),
              nb(je, 'touchcancel', za),
              nb(Ge, 'touchstart', za),
              mb(nb, je, 'pointerdown,touchstart,mousedown', xa),
              mb(nb, je, 'pointerup,touchend,mouseup', ya),
              u = Ke.utils.checkPrefix('transform'),
              G.push(u),
              a = gt(),
              l = Ke.delayedCall(0.2, zt).pause(),
              p = [
                je,
                'visibilitychange',
                function () {
                  var e = We.innerWidth,
                    t = We.innerHeight
                  je.hidden ? ((f = e), (d = t)) : (f === e && d === t) || Cb()
                },
                je,
                'DOMContentLoaded',
                zt,
                We,
                'load',
                zt,
                We,
                'resize',
                Cb,
              ],
              Ia(nb),
              Ot.forEach(function (e) {
                return e.enable(0, 1)
              }),
              t = 0;
            t < Le.length;
            t += 3
          )
            pb(ob, Le[t], Le[t + 1]), pb(ob, Le[t], Le[t + 2])
        }
      }),
      (ScrollTrigger.config = function config(e) {
        'limitCallbacks' in e && (ct = !!e.limitCallbacks)
        var t = e.syncInterval
        ;(t && clearInterval(c)) || ((c = t) && setInterval(zb, t)),
          'ignoreMobileResize' in e &&
            (v = 1 === ScrollTrigger.isTouch && e.ignoreMobileResize),
          'autoRefreshEvents' in e &&
            (Ia(ob) || Ia(nb, e.autoRefreshEvents || 'none'),
            (g = -1 === (e.autoRefreshEvents + '').indexOf('resize')))
      }),
      (ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
        var r = I(e),
          n = Le.indexOf(r),
          o = Da(r)
        ~n && Le.splice(n, o ? 6 : 2),
          t && (o ? Fe.unshift(We, t, Ge, t, qe, t) : Fe.unshift(r, t))
      }),
      (ScrollTrigger.clearMatchMedia = function clearMatchMedia(t) {
        Ot.forEach(function (e) {
          return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0)
        })
      }),
      (ScrollTrigger.isInViewport = function isInViewport(e, t, r) {
        var n = (Ja(e) ? I(e) : e).getBoundingClientRect(),
          o = n[r ? mt : yt] * t || 0
        return r
          ? 0 < n.right - o && n.left + o < We.innerWidth
          : 0 < n.bottom - o && n.top + o < We.innerHeight
      }),
      (ScrollTrigger.positionInViewport = function positionInViewport(e, t, r) {
        Ja(e) && (e = I(e))
        var n = e.getBoundingClientRect(),
          o = n[r ? mt : yt],
          i =
            null == t
              ? o / 2
              : t in D
              ? D[t] * o
              : ~t.indexOf('%')
              ? (parseFloat(t) * o) / 100
              : parseFloat(t) || 0
        return r ? (n.left + i) / We.innerWidth : (n.top + i) / We.innerHeight
      }),
      (ScrollTrigger.killAll = function killAll(e) {
        if (
          (Ot.forEach(function (e) {
            return 'ScrollSmoother' !== e.vars.id && e.kill()
          }),
          !0 !== e)
        ) {
          var t = X.killAll || []
          ;(X = {}),
            t.forEach(function (e) {
              return e()
            })
        }
      }),
      ScrollTrigger)
  function ScrollTrigger(e, t) {
    a ||
      ScrollTrigger.register(Ke) ||
      console.warn('Please gsap.registerPlugin(ScrollTrigger)'),
      this.init(e, t)
  }
  ;(Z.version = '3.11.3'),
    (Z.saveStyles = function (e) {
      return e
        ? et(e).forEach(function (e) {
            if (e && e.style) {
              var t = V.indexOf(e)
              0 <= t && V.splice(t, 5),
                V.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute('transform'),
                  Ke.core.getCache(e),
                  lt(),
                )
            }
          })
        : V
    }),
    (Z.revert = function (e, t) {
      return Jb(!e, t)
    }),
    (Z.create = function (e, t) {
      return new Z(e, t)
    }),
    (Z.refresh = function (e) {
      return e ? Cb() : (a || Z.register()) && zt(!0)
    }),
    (Z.update = j),
    (Z.clearScrollMemory = Kb),
    (Z.maxScroll = function (e, t) {
      return Ha(e, t ? Je : Ne)
    }),
    (Z.getScrollFunc = function (e, t) {
      return J(I(e), t ? Je : Ne)
    }),
    (Z.getById = function (e) {
      return Dt[e]
    }),
    (Z.getAll = function () {
      return Ot.filter(function (e) {
        return 'ScrollSmoother' !== e.vars.id
      })
    }),
    (Z.isScrolling = function () {
      return !!ht
    }),
    (Z.snapDirectional = kb),
    (Z.addEventListener = function (e, t) {
      var r = X[e] || (X[e] = [])
      ~r.indexOf(t) || r.push(t)
    }),
    (Z.removeEventListener = function (e, t) {
      var r = X[e],
        n = r && r.indexOf(t)
      0 <= n && r.splice(n, 1)
    }),
    (Z.batch = function (e, t) {
      function Do(e, t) {
        var r = [],
          n = [],
          o = Ke.delayedCall(i, function () {
            t(r, n), (r = []), (n = [])
          }).pause()
        return function (e) {
          r.length || o.restart(!0),
            r.push(e.trigger),
            n.push(e),
            a <= r.length && o.progress(1)
        }
      }
      var r,
        n = [],
        o = {},
        i = t.interval || 0.016,
        a = t.batchMax || 1e9
      for (r in t)
        o[r] =
          'on' === r.substr(0, 2) && Ka(t[r]) && 'onRefreshInit' !== r
            ? Do(0, t[r])
            : t[r]
      return (
        Ka(a) &&
          ((a = a()),
          nb(Z, 'refresh', function () {
            return (a = t.batchMax())
          })),
        et(e).forEach(function (e) {
          var t = {}
          for (r in o) t[r] = o[r]
          ;(t.trigger = e), n.push(Z.create(t))
        }),
        n
      )
    })
  function gc(e, t, r, n) {
    return (
      n < t ? e(n) : t < 0 && e(0),
      n < r ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
    )
  }
  function hc(e, t) {
    !0 === t
      ? e.style.removeProperty('touch-action')
      : (e.style.touchAction =
          !0 === t
            ? 'auto'
            : t
            ? 'pan-' + t + (k.isTouch ? ' pinch-zoom' : '')
            : 'none'),
      e === qe && hc(Ge, t)
  }
  function jc(e) {
    var t,
      r = e.event,
      n = e.target,
      o = e.axis,
      i = (r.changedTouches ? r.changedTouches[0] : r).target,
      a = i._gsap || Ke.core.getCache(i),
      s = gt()
    if (!a._isScrollT || 2e3 < s - a._isScrollT) {
      for (; i && i.scrollHeight <= i.clientHeight; ) i = i.parentNode
      ;(a._isScroll =
        i &&
        !Da(i) &&
        i !== n &&
        (te[(t = db(i)).overflowY] || te[t.overflowX])),
        (a._isScrollT = s)
    }
    ;(!a._isScroll && 'x' !== o) || (r.stopPropagation(), (r._gsapAllow = !0))
  }
  function kc(e, t, r, n) {
    return k.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: t,
      onWheel: (n = n && jc),
      onPress: n,
      onDrag: n,
      onScroll: n,
      onEnable: function onEnable() {
        return r && nb(je, k.eventTypes[0], ne, !1, !0)
      },
      onDisable: function onDisable() {
        return ob(je, k.eventTypes[0], ne, !0)
      },
    })
  }
  function oc(e) {
    function zp() {
      return (o = !1)
    }
    function Cp() {
      ;(i = Ha(d, Ne)),
        (T = tt(P ? 1 : 0, i)),
        f && (_ = tt(0, Ha(d, Je))),
        (l = It)
    }
    function Dp() {
      ;(h._gsap.y = Aa(parseFloat(h._gsap.y) + v.offset) + 'px'),
        (h.style.transform =
          'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' +
          parseFloat(h._gsap.y) +
          ', 0, 1)'),
        (v.offset = v.cacheID = 0)
    }
    function Jp() {
      Cp(),
        a.isActive() &&
          a.vars.scrollY > i &&
          (v() > i ? a.progress(1) && v(i) : a.resetTo('scrollY', i))
    }
    Ma(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = 'wheel,touch'),
      (e.debounce = !!e.debounce),
      (e.id = e.id || 'normalizer')
    var n,
      i,
      l,
      o,
      a,
      c,
      u,
      s,
      f = e.normalizeScrollX,
      t = e.momentum,
      r = e.allowNestedScroll,
      d = I(e.target) || qe,
      p = Ke.core.globals().ScrollSmoother,
      g = p && p.get(),
      h =
        P &&
        ((e.content && I(e.content)) ||
          (g && !1 !== e.content && !g.smooth() && g.content())),
      v = J(d, Ne),
      b = J(d, Je),
      m = 1,
      y =
        (k.isTouch && We.visualViewport
          ? We.visualViewport.scale * We.visualViewport.width
          : We.outerWidth) / We.innerWidth,
      x = 0,
      S = Ka(t)
        ? function () {
            return t(n)
          }
        : function () {
            return t || 2.8
          },
      w = kc(d, e.type, !0, r),
      _ = za,
      T = za
    return (
      h && Ke.set(h, { y: '+=0' }),
      (e.ignoreCheck = function (e) {
        return (
          (P &&
            'touchmove' === e.type &&
            (function ignoreDrag() {
              if (o) {
                requestAnimationFrame(zp)
                var e = Aa(n.deltaY / 2),
                  t = T(v.v - e)
                if (h && t !== v.v + v.offset) {
                  v.offset = t - v.v
                  var r = Aa((parseFloat(h && h._gsap.y) || 0) - v.offset)
                  ;(h.style.transform =
                    'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' +
                    r +
                    ', 0, 1)'),
                    (h._gsap.y = r + 'px'),
                    (v.cacheID = Le.cache),
                    j()
                }
                return !0
              }
              v.offset && Dp(), (o = !0)
            })()) ||
          (1.05 < m && 'touchstart' !== e.type) ||
          n.isGesturing ||
          (e.touches && 1 < e.touches.length)
        )
      }),
      (e.onPress = function () {
        var e = m
        ;(m = Aa(((We.visualViewport && We.visualViewport.scale) || 1) / y)),
          a.pause(),
          e !== m && hc(d, 1.01 < m || (!f && 'x')),
          (c = b()),
          (u = v()),
          Cp(),
          (l = It)
      }),
      (e.onRelease = e.onGestureStart =
        function (e, t) {
          if ((v.offset && Dp(), t)) {
            Le.cache++
            var r,
              n,
              o = S()
            f &&
              ((n = (r = b()) + (0.05 * o * -e.velocityX) / 0.227),
              (o *= gc(b, r, n, Ha(d, Je))),
              (a.vars.scrollX = _(n))),
              (n = (r = v()) + (0.05 * o * -e.velocityY) / 0.227),
              (o *= gc(v, r, n, Ha(d, Ne))),
              (a.vars.scrollY = T(n)),
              a.invalidate().duration(o).play(0.01),
              ((P && a.vars.scrollY >= i) || i - 1 <= r) &&
                Ke.to({}, { onUpdate: Jp, duration: o })
          } else s.restart(!0)
        }),
      (e.onWheel = function () {
        a._ts && a.pause(), 1e3 < gt() - x && ((l = 0), (x = gt()))
      }),
      (e.onChange = function (e, t, r, n, o) {
        if (
          (It !== l && Cp(),
          t && f && b(_(n[2] === t ? c + (e.startX - e.x) : b() + t - n[1])),
          r)
        ) {
          v.offset && Dp()
          var i = o[2] === r,
            a = i ? u + e.startY - e.y : v() + r - o[1],
            s = T(a)
          i && a !== s && (u += s - a), v(s)
        }
        ;(r || t) && j()
      }),
      (e.onEnable = function () {
        hc(d, !f && 'x'),
          Z.addEventListener('refresh', Jp),
          nb(We, 'resize', Jp),
          v.smooth &&
            ((v.target.style.scrollBehavior = 'auto'),
            (v.smooth = b.smooth = !1)),
          w.enable()
      }),
      (e.onDisable = function () {
        hc(d, !0),
          ob(We, 'resize', Jp),
          Z.removeEventListener('refresh', Jp),
          w.kill()
      }),
      (e.lockAxis = !1 !== e.lockAxis),
      ((n = new k(e)).iOS = P) && !v() && v(1),
      P && Ke.ticker.add(za),
      (s = n._dc),
      (a = Ke.to(n, {
        ease: 'power4',
        paused: !0,
        scrollX: f ? '+=0.1' : '+=0',
        scrollY: '+=0.1',
        onComplete: s.vars.onComplete,
      })),
      n
    )
  }
  var ee,
    te = { auto: 1, scroll: 1 },
    re = /(input|label|select|textarea)/i,
    ne = function _captureInputs(e) {
      var t = re.test(e.target.tagName)
      ;(t || ee) && ((e._gsapAllow = !0), (ee = t))
    }
  ;(Z.sort = function (e) {
    return Ot.sort(
      e ||
        function (e, t) {
          return (
            -1e6 * (e.vars.refreshPriority || 0) +
            e.start -
            (t.start + -1e6 * (t.vars.refreshPriority || 0))
          )
        },
    )
  }),
    (Z.observe = function (e) {
      return new k(e)
    }),
    (Z.normalizeScroll = function (e) {
      if (void 0 === e) return h
      if (!0 === e && h) return h.enable()
      if (!1 === e) return h && h.kill()
      var t = e instanceof k ? e : oc(e)
      return h && h.target === t.target && h.kill(), Da(t.target) && (h = t), t
    }),
    (Z.core = {
      _getVelocityProp: K,
      _inputObserver: kc,
      _scrollers: Le,
      _proxies: Fe,
      bridge: {
        ss: function ss() {
          ht || H('scrollStart'), (ht = gt())
        },
        ref: function ref() {
          return nt
        },
      },
    }),
    Ca() && Ke.registerPlugin(Z),
    (e.ScrollTrigger = Z),
    (e.default = Z)
  if (typeof window === 'undefined' || window !== e) {
    Object.defineProperty(e, '__esModule', { value: !0 })
  } else {
    delete e.default
  }
})

!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], t)
    : t(((e = e || self).window = e.window || {}))
})(this, function (e) {
  'use strict'
  function k() {
    return 'undefined' != typeof window
  }
  function l() {
    return u || (k() && (u = window.gsap) && u.registerPlugin && u)
  }
  function m(e) {
    return 'string' == typeof e
  }
  function n(e) {
    return 'function' == typeof e
  }
  function o(e, t) {
    var o = 'x' === t ? 'Width' : 'Height',
      n = 'scroll' + o,
      r = 'client' + o
    return e === T || e === i || e === c
      ? Math.max(i[n], c[n]) - (T['inner' + o] || i[r] || c[r])
      : e[n] - e['offset' + o]
  }
  function p(e, t) {
    var o = 'scroll' + ('x' === t ? 'Left' : 'Top')
    return (
      e === T &&
        (null != e.pageXOffset
          ? (o = 'page' + t.toUpperCase() + 'Offset')
          : (e = null != i[o] ? i : c)),
      function () {
        return e[o]
      }
    )
  }
  function r(e, t) {
    if (!(e = f(e)[0]) || !e.getBoundingClientRect)
      return (
        console.warn("scrollTo target doesn't exist. Using 0") || { x: 0, y: 0 }
      )
    var o = e.getBoundingClientRect(),
      n = !t || t === T || t === c,
      r = n
        ? {
            top:
              i.clientTop - (T.pageYOffset || i.scrollTop || c.scrollTop || 0),
            left:
              i.clientLeft -
              (T.pageXOffset || i.scrollLeft || c.scrollLeft || 0),
          }
        : t.getBoundingClientRect(),
      l = { x: o.left - r.left, y: o.top - r.top }
    return !n && t && ((l.x += p(t, 'x')()), (l.y += p(t, 'y')())), l
  }
  function s(e, t, n, l, s) {
    return isNaN(e) || 'object' == typeof e
      ? m(e) && '=' === e.charAt(1)
        ? parseFloat(e.substr(2)) * ('-' === e.charAt(0) ? -1 : 1) + l - s
        : 'max' === e
        ? o(t, n) - s
        : Math.min(o(t, n), r(e, t)[n] - s)
      : parseFloat(e) - s
  }
  function t() {
    ;(u = l()),
      k() &&
        u &&
        document.body &&
        ((T = window),
        (c = document.body),
        (i = document.documentElement),
        (f = u.utils.toArray),
        u.config({ autoKillThreshold: 7 }),
        (v = u.config()),
        (a = 1))
  }
  var u,
    a,
    T,
    i,
    c,
    f,
    v,
    y = {
      version: '3.11.3',
      name: 'scrollTo',
      rawVars: 1,
      register: function register(e) {
        ;(u = e), t()
      },
      init: function init(e, o, r, l, i) {
        a || t()
        var c = this,
          f = u.getProperty(e, 'scrollSnapType')
        ;(c.isWin = e === T),
          (c.target = e),
          (c.tween = r),
          (o = (function _clean(e, t, o, r) {
            if ((n(e) && (e = e(t, o, r)), 'object' != typeof e))
              return m(e) && 'max' !== e && '=' !== e.charAt(1)
                ? { x: e, y: e }
                : { y: e }
            if (e.nodeType) return { y: e, x: e }
            var l,
              s = {}
            for (l in e)
              s[l] = 'onAutoKill' !== l && n(e[l]) ? e[l](t, o, r) : e[l]
            return s
          })(o, l, e, i)),
          (c.vars = o),
          (c.autoKill = !!o.autoKill),
          (c.getX = p(e, 'x')),
          (c.getY = p(e, 'y')),
          (c.x = c.xPrev = c.getX()),
          (c.y = c.yPrev = c.getY()),
          'smooth' === u.getProperty(e, 'scrollBehavior') &&
            u.set(e, { scrollBehavior: 'auto' }),
          f &&
            'none' !== f &&
            ((c.snap = 1),
            (c.snapInline = e.style.scrollSnapType),
            (e.style.scrollSnapType = 'none')),
          null != o.x
            ? (c.add(c, 'x', c.x, s(o.x, e, 'x', c.x, o.offsetX || 0), l, i),
              c._props.push('scrollTo_x'))
            : (c.skipX = 1),
          null != o.y
            ? (c.add(c, 'y', c.y, s(o.y, e, 'y', c.y, o.offsetY || 0), l, i),
              c._props.push('scrollTo_y'))
            : (c.skipY = 1)
      },
      render: function render(e, t) {
        for (
          var n,
            r,
            l,
            s,
            i,
            p = t._pt,
            c = t.target,
            f = t.tween,
            u = t.autoKill,
            a = t.xPrev,
            y = t.yPrev,
            d = t.isWin,
            x = t.snap,
            g = t.snapInline;
          p;

        )
          p.r(e, p.d), (p = p._next)
        ;(n = d || !t.skipX ? t.getX() : a),
          (l = (r = d || !t.skipY ? t.getY() : y) - y),
          (s = n - a),
          (i = v.autoKillThreshold),
          t.x < 0 && (t.x = 0),
          t.y < 0 && (t.y = 0),
          u &&
            (!t.skipX && (i < s || s < -i) && n < o(c, 'x') && (t.skipX = 1),
            !t.skipY && (i < l || l < -i) && r < o(c, 'y') && (t.skipY = 1),
            t.skipX &&
              t.skipY &&
              (f.kill(),
              t.vars.onAutoKill &&
                t.vars.onAutoKill.apply(f, t.vars.onAutoKillParams || []))),
          d
            ? T.scrollTo(t.skipX ? n : t.x, t.skipY ? r : t.y)
            : (t.skipY || (c.scrollTop = t.y), t.skipX || (c.scrollLeft = t.x)),
          !x ||
            (1 !== e && 0 !== e) ||
            ((r = c.scrollTop),
            (n = c.scrollLeft),
            g
              ? (c.style.scrollSnapType = g)
              : c.style.removeProperty('scroll-snap-type'),
            (c.scrollTop = r + 1),
            (c.scrollLeft = n + 1),
            (c.scrollTop = r),
            (c.scrollLeft = n)),
          (t.xPrev = t.x),
          (t.yPrev = t.y)
      },
      kill: function kill(e) {
        var t = 'scrollTo' === e
        ;(!t && 'scrollTo_x' !== e) || (this.skipX = 1),
          (!t && 'scrollTo_y' !== e) || (this.skipY = 1)
      },
    }
  ;(y.max = o),
    (y.getOffset = r),
    (y.buildGetter = p),
    l() && u.registerPlugin(y),
    (e.ScrollToPlugin = y),
    (e.default = y)
  if (typeof window === 'undefined' || window !== e) {
    Object.defineProperty(e, '__esModule', { value: !0 })
  } else {
    delete e.default
  }
})

!(function () {
  function e(e) {
    var u,
      d,
      c,
      p = { up: [], left: [], right: [], down: [] },
      a = function (t, e) {
        var a,
          n,
          i,
          o,
          r,
          s,
          l = t.touches[0] || t.changedTouches[0]
        !l ||
          (!e && 1 < t.touches.length) ||
          ((a = l.clientX - u),
          (n = l.clientY - d),
          (i = Math.abs(a)),
          (l = Math.abs(n)),
          (r =
            l < i
              ? ((o = a < 0 ? 'left' : 'right'), i)
              : ((o = 0 < n ? 'up' : 'down'), l)),
          (s = !1),
          p[o].forEach(function (t) {
            t.pd && t.pd() && (s = !0)
            var e = t.wp
              ? (t.w * ('up' === o || 'down' === o ? c.height : c.width)) / 100
              : t.w
            r >= nt(t.m, 4, e || 40) &&
              (0 < e
                ? (e = Math.floor(r / e)) !== t.l && (t.f(), (t.l = e))
                : t.done || ((t.done = !0), t.f()))
          }),
          s && !e && t.preventDefault())
      },
      n = function (t) {
        e.removeEventListener('touchmove', a),
          e.removeEventListener('touchend', n)
      }
    e.addEventListener(
      'touchstart',
      function (t) {
        1 === t.touches.length &&
          ((t = t.touches[0]),
          (u = t.clientX),
          (d = t.clientY),
          e.addEventListener('touchmove', a, { passive: !1 }),
          e.addEventListener('touchend', n, !1),
          w(p, function (t, e) {
            for (var a = 0; a < e.length; a++) (e[a].l = 0), (e[a].done = !1)
          }),
          (c = e.getBoundingClientRect()))
      },
      !1,
    ),
      e.addEventListener(
        'touchforcechange',
        function (t) {
          var n = !1
          w(p, function (t, e) {
            for (var a = 0; a < e.length; a++)
              if (e[a].pd && e[a].pd()) {
                n = !0
                break
              }
          }),
            n && t.preventDefault()
        },
        { passive: !1 },
      ),
      (this.add = function (t, e, a, n, i) {
        var o
        'string' == typeof e &&
          0 <= e.indexOf('%') &&
          ((e = C(e, 100)), (o = !0)),
          p[t].push({ w: e, wp: o, l: 0, m: a, f: n, pd: i })
      }),
      (this.remove = function (t, e) {
        for (var a = 0; a < p[t].length; a++)
          if (p[t][a].f === e) return void p[t].splice(a, 1)
      })
  }
  function u(t) {
    return t._pg_gh || (t._pg_gh = new e(t)), t._pg_gh
  }
  var d = !1
  window.addEventListener(
    'DOMContentLoaded',
    function () {
      d = !0
    },
    !1,
  )
  var D = gsap.matchMedia()
  gsap.registerPlugin({
    version: '1.0.0',
    name: 'pgClass',
    init: function (t, e, a, n, i) {
      ;(this.t = t),
        (this.o = t.getAttribute('class') || ''),
        (this.has = !1),
        (this.v = e),
        (this.cl = t.classList || null)
    },
    render: function (t, e) {
      e.cl &&
        (0 === t
          ? (e.t.getAttribute('class') !== e.o &&
              e.t.setAttribute('class', e.o),
            (e.has = !1))
          : 0 < t &&
            (e.v.add && (e.cl.contains(e.v.add) || e.cl.add(e.v.add)),
            e.v.set &&
              e.t.getAttribute('class') !== e.v.set &&
              e.t.setAttribute('class', e.v.set),
            e.v.remove && e.cl.contains(e.v.remove) && e.cl.remove(e.v.remove),
            e.v.toggle && !e.has && (e.cl.toggle(e.v.toggle), (e.has = !0))))
    },
  })
  var t = {
    version: '1.0.0',
    name: 'pgLottie',
    init: function (t, e, a, n, i) {
      if (lottie) {
        var o = null
        if (e.anim) o = P(e.anim, t, e.target_element)
        else if (t._pg_lottie) o = t._pg_lottie
        else
          for (
            var r = lottie.getRegisteredAnimations(), s = 0;
            s < r.length;
            s++
          )
            if (r[s].wrapper === t) {
              ;(o = r[s]), (t._pg_lottie = o)
              break
            }
        o && 'object' == typeof o && 'goToAndStop' in o
          ? ((this.t = t),
            (this.v = e),
            (this.a = o),
            (this.tw = a),
            (this.dur = o.totalFrames / o.frameRate),
            (this.tw_dur = a.duration()),
            (this.doing = !1),
            (this.gf = function (t) {
              return 0 <= (t += '').indexOf('f')
                ? at(t.replace('f', ''), 0)
                : F(null, t) * o.frameRate
            }))
          : q(
              'Lottie animation is not specified. Add transform on animated element or use Animation property.',
            )
      } else q('Lottie is not defined. Include it before pgia.js.')
    },
    render: function (t, e) {
      e.a &&
        (e.v.seek && e.a.goToAndStop(t * e.dur * 1e3, !1),
        0 < t && !e.doing
          ? ('play' in e.v &&
              ('' === e.v.play
                ? e.a.play()
                : e.a.goToAndPlay(e.gf(e.v.play), !0)),
            'pause' in e.v &&
              ('' === e.v.pause
                ? e.a.pause()
                : e.a.goToAndStop(e.gf(e.v.pause), !0)),
            e.v.toggle && (e.a.isPaused ? e.a.play() : e.a.pause()),
            (e.doing = !0))
          : 0 === t && (e.doing = !1))
    },
  }
  gsap.registerPlugin(t),
    (t = {
      version: '1.0.0',
      name: 'pgCall',
      init: function (a, t, e, n, i) {
        ;(this.t = a),
          (this.v = t),
          (this.dur = e.duration()),
          (this.c = function (t, e) {
            return 'string' == typeof t && (t = window[t]), t(a, e), t
          })
      },
      render: function (t, e) {
        ;(0 !== t && 0 !== e.dur) || !e.v.start
          ? 1 === t && e.v.complete
            ? (e.v.complete = e.c(e.v.complete, t))
            : e.v.update && (e.v.update = e.c(e.v.update, t))
          : (e.v.start = e.c(e.v.start, t))
      },
    }),
    gsap.registerPlugin(t)
  var s = 0,
    l = 0,
    c = {
      version: '1.0.0',
      name: 'pgDom',
      init: function (t, e, a, n, i) {
        if (
          ((this.t = t),
          (this.o = t.getAttribute('class') || ''),
          (this.has = !1),
          (this.v = e),
          (this.created = []),
          (this.template = e.template || null),
          (this.parent = t.parentNode),
          (this.next = t.nextSibling),
          (this.removed = !1),
          (this.append = !0),
          (this.live = !1),
          (this.target_element =
            'function' == typeof e.target_element
              ? e.target_element(t)
              : e.target_element || null),
          e.clone)
        ) {
          var o = new Date().getTime()
          if (t._pg_clone_time && o - t._pg_clone_time < 200)
            return void q(
              'This element was just cloned and is now cloning others. Probably a recursive loop!',
            )
          o = t.cloneNode(!0)
          ;(this.template = o.outerHTML),
            (this.append = 'append' == e.ins),
            (this.live = !0)
        }
        o = at(e.count || 1)
        'string' == typeof e.count_sel &&
          (o = V(t, e.count_sel).length + at(e.count || 0)),
          (this.count = o)
      },
      _d: function (t) {
        t &&
          (X.elementAnimationsManager.destroyAnimations(t, !0),
          X.scrollSceneManager && X.scrollSceneManager.removeScene(t, !0),
          t.parentNode && t.parentNode.removeChild(t))
      },
      _c: function (t) {
        t &&
          (X.elementAnimationsManager.refreshAnimations(t, !0),
          X.scrollSceneManager && X.scrollSceneManager.updateScene(t, !0))
      },
      render: function (t, e) {
        if (e.template) {
          var a = new Date().getTime()
          500 < a - s && ((s = a), (l = 0))
          var n,
            i = Y(e.count * t)
          if (0 <= i && i < e.created.length)
            for (; e.created.length > i; ) c._d(e.created.pop())
          for (; 0 < i && i > e.created.length; ) {
            if (100 < ++l)
              return void q(
                'Cloning too many elements is a sign of an endless loop. Blocking. Tried to clone ' +
                  l +
                  ' elements.',
              )
            if (
              !(n = e.live
                ? e.t.cloneNode(!0)
                : ((o = document.createRange()).selectNodeContents(e.t),
                  o.createContextualFragment(
                    e.live ? e.t.outerHTML : e.template,
                  ).firstChild))
            )
              break
            n.removeAttribute('data-pg-id')
            var o = (e.created.length ? e.created[e.created.length - 1] : e.t)
              .nextSibling
            e.append || !o
              ? e.t.parentNode.appendChild(n)
              : e.t.parentNode.insertBefore(n, o),
              n.classList
                ? n.classList.add('pgia-clone')
                : (n.className += ' pgia-clone'),
              e.created.push(n)
            var r = !1,
              o = S(n.innerHTML, function (t) {
                return (r = !0), (e.target_element || n).getAttribute(t) || ''
              })
            r && (n.innerHTML = o),
              e.v.pos &&
                ((n._pg_position = new p(
                  n,
                  e.target_element,
                  P(e.v.pos, n, e.target_element) || 'auto',
                  at(e.v.pos_dist || 0),
                  at(e.v.pos_width || 0),
                  at(e.v.pos_height || 0),
                  e.v.pos_scale || !1,
                  e.v.pos_no_repo || !1,
                )),
                (n.style.left = n._pg_position.left + 'px'),
                (n.style.top = n._pg_position.top + 'px')),
              (n._pg_clone_time = new Date().getTime()),
              c._c(n),
              e.v.play && X.play(n, e.v.play)
          }
        }
        e.v.remove &&
          (1 != t || e.removed
            ? t < 1 &&
              e.removed &&
              (e.parent &&
                (e.next
                  ? e.parent.insertBefore(e.t, e.next)
                  : e.parent.appendChild(e.t)),
              (e.removed = !1),
              c._c(e.t))
            : (c._d(e.t), (e.removed = !0))),
          e.v.reparent &&
            ((a = e.parent != e.t.parentNode),
            0 == t && a
              ? e.parent.appendChild(e.t)
              : 0 < t &&
                !a &&
                (a = V(e.t, e.v.reparent)[0]) &&
                a.appendChild(e.t))
      },
    }
  gsap.registerPlugin(c)
  var a = new (function () {
      var a = []
      ;(this.add = function (t) {
        a.indexOf(t) < 0 && a.push(t)
      }),
        (this.remove = function (t) {
          t = a.indexOf(t)
          0 <= t && a.splice(t, 1)
        })
      function t(e) {
        a.slice(0).forEach(function (t) {
          ;(e && !t.fixed) || (t.update() && t.move())
        })
      }
      var e = null
      window.addEventListener('resize', function () {
        e && clearTimeout(e), (e = setTimeout(t, 250))
      }),
        window.addEventListener('scroll', function () {
          t(!0)
        })
    })(),
    p = function (d, c, t, p, h, f, g, e) {
      d._pg_position && d._pg_position.destroy(),
        (this.fixed = 'fixed' === window.getComputedStyle(d).position),
        (this.parent = this.fixed
          ? d.ownerDocument.body
          : (function (t) {
              var e = t.parentNode
              for (; e && 1 == e.nodeType; ) {
                if ('static' != window.getComputedStyle(e).position) return e
                e = e.parentNode
              }
              return t.ownerDocument.body
            })(d)),
        'auto' === t && (t = 'top bottom right left')
      var m = t.split(/\s+/),
        n = gsap.quickSetter(d, 'css')
      ;(this.update = function () {
        if (!d.ownerDocument || !c.ownerDocument || !d.parentNode)
          return (d._pg_position = null), this.destroy(), !1
        var t,
          e,
          a = window.innerWidth,
          n = window.innerHeight,
          i = d.getBoundingClientRect(),
          o = c.getBoundingClientRect(),
          r = this.parent.getBoundingClientRect(),
          s = h ? (o.width * h) / 100 : i.width,
          l = f ? (o.height * f) / 100 : i.height
        g && h && !f && (l *= s / i.width), g && f && !h && (s *= l / i.height)
        for (var u = 0; u < m.length; u++) {
          switch (m[u]) {
            case 'top':
              ;(e = o.left + o.width / 2 - s / 2), (t = o.top - p - i.height)
              break
            case 'bottom':
              ;(e = o.left + o.width / 2 - s / 2), (t = o.top + o.height + p)
              break
            case 'left':
              ;(t = o.top + o.height / 2 - l / 2), (e = o.left - i.width - p)
              break
            case 'right':
              ;(t = o.top + o.height / 2 - l / 2), (e = o.left + o.width + p)
              break
            case 'center':
              ;(t = o.top + o.height / 2 - l / 2),
                (e = o.left + o.width / 2 - s / 2)
              break
            case 'inner-top':
              ;(t = o.top + p), (e = o.left + o.width / 2 - s / 2)
          }
          if (
            (0 < e && 0 < t && e + i.width < a && t + i.height < n) ||
            u == m.length - 1
          ) {
            ;(this.pos = m[u]), (e -= r.left), (t -= r.top)
            break
          }
        }
        return (
          (this.ot = i.top - r.top),
          (this.ol = i.left - r.left),
          (this.ow = i.width),
          (this.oh = i.height),
          (this.top = t),
          (this.left = e),
          (this.w = s),
          (this.h = l),
          d.setAttribute('data-pgia-position', this.pos),
          !0
        )
      }),
        (this.move = function (t) {
          var e = void 0 === t ? 1 : t,
            a = {
              left: this.ol + (this.left - this.ol) * e,
              top: this.ot + (this.top - this.ot) * e,
            }
          h &&
            ((t = this.ow + (this.w - this.ow) * e),
            g
              ? ((a.scaleX = t / d.offsetWidth), f || (a.scaleY = a.scaleX))
              : (a.width = t)),
            f &&
              ((e = this.oh + (this.h - this.oh) * e),
              g
                ? ((a.scaleY = e / d.offsetHeight), h || (a.scaleX = a.scaleY))
                : (a.height = e)),
            n(a)
        }),
        (this.destroy = function () {
          a.remove(this)
        }),
        this.update(),
        e || a.add(this)
    },
    t = {
      version: '1.0.0',
      name: 'pgPos',
      init: function (t, e, a, n, i) {
        ;(this.t = t), (this.v = e), (this.added = !1)
        var o =
          'function' == typeof e.target_element
            ? e.target_element(t)
            : e.target_element || null
        e.tsel && (o = V(t, e.tsel)[0] || o),
          (this.norepos = P(e.no_repo || '0', t, o)),
          (this.pos = new p(
            t,
            o,
            P(e.pos || 'auto', t, o),
            P(e.dist || '0', t, o),
            P(e.width || '0', t, o),
            P(e.height || '0', t, o),
            P(e.scale || '0', t, o),
            !0,
          ))
      },
      render: function (t, e) {
        0 === t
          ? (a.remove(e.pos), (e.added = !1))
          : e.norepos ||
            e.added ||
            (e.pos.update(), a.add(e.pos), (e.added = !0)),
          e.pos.move(t)
      },
    }
  gsap.registerPlugin(t),
    (t = {
      version: '1.0.0',
      name: 'pgia',
      init: function (t, e, a, n, i) {
        if (
          ((this.t = t),
          (this.v = e),
          (this.te =
            'function' == typeof e.target_element
              ? e.target_element(t)
              : e.target_element || null),
          (this.pr = 0),
          (this.dir = e.dir || 'f_b'),
          (this.pt = e.target ? P(e.target, t, this.te) : t),
          (this.played = this.paused = this.recreated = !1),
          'string' == typeof this.pt)
        )
          switch (this.pt) {
            case 'previous':
            case 'next':
            case 'first':
            case 'last':
              this.pt = lt(t, this.pt)
              break
            default:
              this.pt = V(t, this.pt) || t
          }
      },
      render: function (e, a) {
        var t = a.pr <= e ? 'f' : 'b'
        0 <= a.dir.indexOf(t) &&
          (0 < e &&
            ('rec' in a.v &&
              !a.recreated &&
              ($(a.pt, function (t) {
                X.recreate(t, P(a.v.rec || a.v.play || '', a.t, a.te))
              }),
              (a.recreated = !0)),
            a.v.play &&
              ((!a.v.cont && a.played) ||
                $(a.pt, function (t) {
                  X.play(t, P(a.v.play, a.t, a.te), null, !!a.v.cont)
                }),
              (a.played = !0)),
            a.v.pause &&
              !a.paused &&
              ($(a.pt, function (t) {
                X.pause(t, P(a.v.pause, a.t, a.te))
              }),
              (a.paused = !0))),
          a.v.seek &&
            $(a.pt, function (t) {
              X.seek(t, P(a.v.seek, a.t, a.te), e, !1)
            })),
          (0 !== e && 1 !== e) ||
            a.v.once ||
            (a.played = a.paused = a.recreated = !1),
          (a.pr = e)
      },
    }),
    gsap.registerPlugin(t),
    gsap.registerPlugin(ScrollTrigger),
    gsap.registerPlugin(ScrollToPlugin)
  var X = {}
  window.pgia = X
  var n = document.documentElement,
    R = n.hasAttribute('data-pg-id')
  function q(t) {
    R && console.error(t)
  }
  function i() {
    return R
      ? n.hasAttribute('data-pg-mobile')
      : 'string' == typeof pgia_small_mq
      ? !!window.matchMedia && window.matchMedia(pgia_small_mq).matches
      : screen.width < 1e3 && screen.height < 1e3
  }
  'undefined' != typeof gasp && gsap.defaults({ overwrite: 'auto' }),
    i(),
    window.addEventListener('resize', function () {
      i()
    })
  var Y,
    U,
    N,
    z,
    H,
    Z,
    F,
    j,
    W,
    J,
    w,
    A,
    h,
    V,
    f,
    $,
    Q,
    G,
    o,
    r,
    K,
    tt,
    et,
    g,
    m,
    v,
    _,
    y,
    x,
    b,
    k,
    O,
    t = !0
  function T(t, e) {
    for (var a = e + 'Sibling', n = t[a]; n && 1 !== n.nodeType; ) n = n[a]
    return n
  }
  function at(t, e) {
    t = parseFloat(t)
    return isNaN(t) ? e : t
  }
  function nt(t, e, a) {
    return Math.min(Math.max(t, e), a)
  }
  function it(t, e) {
    return 0 === ('' + t).indexOf(e)
  }
  function E(t) {
    return t.replace(/\&gt;|\#gt\#/g, '>')
  }
  function S(t, a) {
    var n = !1,
      t = (t + '').replace(/\$\{([^\}]*)\}/g, function (t, e) {
        e = a(e)
        return 'object' == typeof e && ((n = e), (e = '_o_')), e
      })
    return n && '_o_' === t ? n : t
  }
  function M(t) {
    return (
      !t.paused() &&
      0 < t.duration() &&
      (t.reversed() ? 0 < t.progress() : t.progress() < 1)
    )
  }
  function L(t) {
    return Array.prototype.slice.call(t.parentNode.children).indexOf(t)
  }
  function P(t, a, n, e) {
    t = S(t, function (t) {
      var e = t.split('|')
      return (
        (void 0 ===
          (t = it((t = e[0]), '--')
            ? (window.getComputedStyle(a).getPropertyValue(t) || '').trim()
            : (function (t, e, a, n) {
                var i = window,
                  o = t.split('.'),
                  t = 0
                'this' == o[0]
                  ? ((i = e), t++)
                  : 'target' == o[0] && ((i = a), t++)
                for (var r = t; r < o.length; r++) {
                  var s = o[r].split('#'),
                    l = s[0],
                    s = s[1]
                  if ('object' != typeof i || null === i) return n
                  if (i instanceof HTMLElement) {
                    if ('index' == l) return L(i)
                    if ('index1' == l) return L(i) + 1
                    if ('style' == l && r < o.length - 1)
                      return null ===
                        (i = window
                          .getComputedStyle(i)
                          .getPropertyValue(o[r + 1]))
                        ? n
                        : i
                  }
                  if ('hasAttribute' in i && i.hasAttribute(l))
                    i = i.getAttribute(l)
                  else {
                    if (!(l in i)) return n
                    ;(i = 'function' == typeof i[l] ? i[l].call(i) : i[l]),
                      s && !isNaN(i) && s in Math && (i = Math[s](at(i)))
                  }
                }
                return i
              })(t, a, n)) ||
          '' === t) &&
          1 < e.length &&
          (t = e[1]),
        t
      )
    })
    return e && (t = C(t, e)), at(t, t)
  }
  function C(t, a) {
    t = (t + '').replace(/([0-9]+)\%/, function (t, e) {
      return ((a = 'function' == typeof a ? a() : a) * at(e)) / 100
    })
    return at(t, t)
  }
  function I(t) {
    try {
      return JSON.parse(t)
    } catch (t) {}
    return null
  }
  function B(t, e, a, n) {
    var i,
      o = I(n || t.getAttribute(e))
    o && o.l
      ? a.d &&
        a.d.l &&
        ((i = {}),
        o.l.forEach(function (t) {
          t.name && (i[t.name] = !0)
        }),
        a.d.l.forEach(function (t) {
          ;(t.name && i[t.name]) || o.l.push(t)
        }))
      : (o = a),
      t.setAttribute(e, JSON.stringify(o))
  }
  function ot(t, e, a) {
    var n = document.body,
      i = document.documentElement,
      o = t == window || t == n
    o || t.parentNode
    o && (t = n)
    var r,
      s,
      l,
      u = {
        p: o
          ? {
              left: 0,
              top: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            }
          : t.getBoundingClientRect(),
        pswidth: (o ? i : t).scrollWidth,
        psheight: (o ? i : t).scrollHeight,
        spleft: o ? window.pageXOffset || i.scrollLeft : t.scrollLeft,
        sptop: o ? window.pageYOffset || i.scrollTop : t.scrollTop,
        c: [],
      }
    if (!a)
      for (var d, c = e ? V(t, e) : t.children, p = 0; p < c.length; p++)
        (c[p].getAttribute('class') || '').indexOf('gsap-marker') < 0 &&
          ((d = c[p]),
          (r = u.p),
          (s = u.spleft),
          (l = u.sptop),
          (d = {
            left: (d = d.getBoundingClientRect()).left - r.left + s,
            top: d.top - r.top + l,
            width: d.width,
            height: d.height,
          }),
          u.c.push(d))
    return u
  }
  function rt(t) {
    var e = X.scrollSceneManager.getScene
    return (
      (scene =
        t == window ? e(document.body) || e(document.documentElement) : e(t)),
      scene && scene.st
    )
  }
  function st(e, a, n) {
    if (e[a])
      try {
        '' !== n && (e.currentTime = at(n, 0)),
          'play' === a
            ? e[a]()
                .then(function () {
                  e._pgia_broken = !1
                })
                .catch(function (t) {
                  ;(e._pgia_broken = !0),
                    'play' !== a ||
                      'AUDIO' == e.nodeName ||
                      e.muted ||
                      ((e.muted = !0), st(e, a, n)),
                    q(t)
                })
            : e[a]()
      } catch (t) {
        q(t)
      }
  }
  function lt(t, e) {
    if (e) {
      var a = f(t),
        n = e.match(/(\w+)(\((.*)\))?/),
        i = at(n[3], n[3])
      if (!a.length) return []
      switch (n[1]) {
        case 'previous':
        case 'next':
          var o = 'next' === n[1]
          if (!i)
            return [
              T(a[0], e) ||
                ((s = (s = a[0].parentNode)[
                  (l = o ? 'first' : 'last') + 'Child'
                ])
                  ? 1 === s.nodeType
                    ? s
                    : T(s, 'first' === l ? 'next' : 'previous')
                  : null),
            ]
          for (var r = 0; r < a.length; r++)
            if (a[r].matches(i))
              return [
                o
                  ? r + 1 < a.length
                    ? a[r + 1]
                    : a[0]
                  : 0 < r
                  ? a[r - 1]
                  : a[a.length - 1],
              ]
          return [o ? a[0] : a[a.length - 1]]
        case 'first':
        case 'last':
          return (
            void 0 === i && (i = 1),
            isNaN(i) ? [] : 'first' === n[1] ? Q(a, 0, i) : Q(a, a.length - i)
          )
      }
    }
    var s, l
    return t
  }
  function ut(t, a) {
    ;((t || '') + '').split(/\s*,\s*/).forEach(function (t) {
      isNaN(t) || (t = parseInt(t))
      var e = !1
      'string' == typeof t
        ? it(t, '-') && ((e = !0), (t = t.substr(1)))
        : t < 0 && ((e = !0), (t = -t)),
        a(t, e)
    })
  }
  Element.prototype.matches ||
    (Element.prototype.matches =
      Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector),
    Element.prototype.closest ||
      (Element.prototype.closest = function (t) {
        var e = this
        do {
          if (e.matches(t)) return e
        } while (
          null !== (e = e.parentElement || e.parentNode) &&
          1 === e.nodeType
        )
        return null
      }),
    (screen &&
      Element.prototype.matches &&
      void 0 !== Array.isArray &&
      'innerHeight' in window &&
      !n.hasAttribute('data-pg-ia-disabled') &&
      document.createElement('div').classList) ||
      (t = !1),
    t
      ? (navigator.userAgent.indexOf('Firefox'),
        (Y = Math.round),
        (U = function (t) {
          return t &&
            t.clientWidth &&
            t.clientHeight &&
            t.scrollWidth / t.clientWidth > t.scrollHeight / t.clientHeight
            ? 'h'
            : 'v'
        }),
        (N = function (t, e) {
          return Math.abs(t - e) < 0.001
        }),
        (z = function (t) {
          return Y(1e3 * t) / 1e3
        }),
        (H = function (t, e, a, n, i, o, r, s, l, u, d, c) {
          t = t || ot(e, o)
          var p = a ? 'left' : 'top',
            h = a ? 'width' : 'height',
            f = a ? 'Left' : 'Top',
            o = e == window || e == document.body,
            g = t.c.length
          if (g) {
            var m = r ? r.end - r.start : t['ps' + h] - t.p[h],
              v = r ? r.start : 0,
              _ = r ? r.progress : t['sp' + p] / m
            if (
              (void 0 !== l && (_ = l),
              s &&
                ((!n && N(_, 1)) || (n && N(_, 0))) &&
                ((_ = n ? 1 : t.c[0][p] / m),
                (e = o ? document.documentElement : e),
                (b = _ * m),
                o
                  ? window.scrollTo(a ? b : t.sptop, a ? t.spleft : b)
                  : (e['scroll' + f] = b)),
              void 0 !== d)
            )
              return u
                ? { px: t.p[h] * d, p: (t.p[h] * d) / m, i: d }
                : {
                    px: t.c[d][p],
                    p: t.c[d][p] / m,
                    i: nt(d, 0, s ? g - 2 : g - 1),
                  }
            O = -1
            var y,
              w,
              A,
              x,
              b = (r ? r.pgBottomCover : 0) / m,
              s = (r ? r.pgTopCover : 0) / m
            if ('c' === n || i) {
              for (
                var k = _ + t.p[h] / m - b,
                  O = 0,
                  T = 0,
                  E = (d = 0),
                  S = (r ? r.pgTopCover : 0) / m,
                  M = 0;
                M < g;
                M++
              ) {
                var L = (t.c[M][p] - v) / m,
                  P = nt((t.c[M][p] + t.c[M][h] - v) / m, _ + S, k),
                  C = nt(L, _ + S, k),
                  I = t.c[M][h] / m,
                  I = Y(((P - C) / I) * 100)
                !1 === n && ((i && N(L, _)) || z(L) > _) && (I *= 5),
                  !0 === n && ((i && N(L, _)) || z(L) < _) && (I *= 5),
                  (E < I || (I == E && M == g - 1 && 1 == _)) &&
                    ((E = I), (O = L * m), (T = L), (d = M))
              }
              return { p: T, px: O, idx: d }
            }
            if (u)
              T =
                !n && 1 == _ && c
                  ? (O = s * m) / m
                  : (O = nt(_ * m + t.p[h] * (n ? -1 : 1), 0, m)) / m
            else if (n) {
              _ += s
              for (M = g - 1; 0 <= M; M--) {
                var B = Y(t.c[M][p])
                if (
                  ((T = z((B - v) / m)),
                  (!N((A = T), (x = _)) && A < x) || (i && N(T, _)))
                ) {
                  ;(O = B), (d = M)
                  break
                }
              }
              O < 0 && ((O = v), (d = T = 0))
            } else {
              _ += s
              for (M = 0; M < g; M++) {
                B = Y(t.c[M][p])
                if (
                  (!N((y = T = (B - v) / m), (w = _)) && w < y) ||
                  (i && N(T, _))
                ) {
                  ;(O = B), (d = M)
                  break
                }
              }
              O < 0 && ((O = r ? r.end : m), (T = 1), (d = t.c.length - 1))
            }
            return (
              1 < T && c && ((T = (O = s * m) / m), (d = 0)),
              { p: T, px: O, idx: d }
            )
          }
        }),
        (Z = new (function () {
          ;(this.getAnimationId = function (t, e) {
            var a = null
            return (
              $(t, function (t) {
                null !== a ||
                  ((t = t.getAttribute('data-pg-id')) && (a = t + ':' + e))
              }),
              a
            )
          }),
            (this.updateProgress = function (t, e, a) {
              window._pg_animation_phone &&
                t &&
                window._pg_animation_phone.animationProgress(t, e, a)
            })
        })()),
        (F = function (t, e) {
          return 'string' == typeof e
            ? 0 <= e.indexOf('%') && t
              ? (t.duration() * parseFloat(e.replace('%', ''))) / 100
              : 0 <= e.indexOf('ms')
              ? parseFloat(e.replace(/\s?ms/, '')) / 1e3
              : 0 <= e.indexOf('s')
              ? parseFloat(e.replace(/\s?s/, ''))
              : parseFloat(e)
            : e
        }),
        (j = function (t) {
          return !!(R && t && t.nopg) || !(!t || !t.on || 'off' !== t.on)
        }),
        (W = function (t) {
          if (t && t.on && 'off' !== t.on) {
            t = 'mobile' === t.on ? 'pgia_small_mq' : 'pgia_large_mq'
            return 'string' == typeof window[t] ? window[t] : null
          }
          return null
        }),
        (J = window.matchMedia('(prefers-reduced-motion: reduce)').matches),
        (w = function (t, e) {
          for (var a in t) t.hasOwnProperty(a) && e(a, t[a])
        }),
        (A = function (t) {
          var e = Quad.easeOut
          if (!t) return e
          switch (t) {
            case 'SteppedEase.ease':
              return SteppedEase.ease.config(12)
            case 'RoughEase.ease':
              return RoughEase.ease
          }
          t = t.split('.')
          return (2 === t.length && window[t[0]] && window[t[0]][t[1]]) || e
        }),
        (h = 0),
        (V = function (t, e, a) {
          try {
            var n = (e = e || '').split('->'),
              i = n[1]
            if (!(e = n[0]) || 'this' === e) return lt([t], i)
            var o,
              r = t
            if (
              (it(e, '$') && ((e = e.substr(1)), (r = a || document)),
              it(e, '^'))
            ) {
              var s = e.substr(1).split('|'),
                n = t.closest(s[0].trim())
              return lt(1 === s.length ? [n] : V(n, s[1].trim(), a), i)
            }
            it(e, '>') &&
              ((o = 'pgtemp_' + h++),
              r.setAttribute(o, ''),
              (e = '[' + o + '] ' + e))
            s = r.querySelectorAll(e)
            return o && r.removeAttribute(o), lt(s, i)
          } catch (t) {
            q(t)
          }
          return []
        }),
        (X.getTargets = V),
        (f = function (t) {
          return 'forEach' in t ||
            t instanceof NodeList ||
            t instanceof HTMLCollection ||
            Array.isArray(t)
            ? t
            : [t]
        }),
        ($ = function (t, e) {
          Array.prototype.forEach.call(f(t), e)
        }),
        (Q = function (t, e, a) {
          return Array.prototype.slice.call(t, e, a)
        }),
        (G = function (t, e, a) {
          return !(e in t) || '' === t[e]
            ? a
            : void 0 === a || 'number' != typeof a || isNaN(t[e])
            ? t[e]
            : at(t[e])
        }),
        (o = 0),
        (r = function () {
          this.getTimeline = function (t, f, e, g) {
            function _(t, e) {
              return (e || t)[m] || null
            }
            var y = gsap.timeline({ onComplete: e }),
              m = '_pgia_target_' + o++
            return (
              t &&
                t.l &&
                t.l.forEach(function (e) {
                  e.m ||
                    e.l
                      .sort(function (t, e) {
                        return t.p === e.p
                          ? 'flip' === t.t
                            ? -1
                            : 'flip' === e.t
                            ? 1
                            : 'set' === t.t
                            ? -1
                            : 'set' === e.t
                            ? 1
                            : 0
                          : t.p - e.p
                      })
                      .forEach(function (a) {
                        var t, n, i, o, r, s, l, u, d, c, v, p, h
                        a.m ||
                          ((t = e.t || 'this'),
                          (n = null),
                          t &&
                            ((i = t),
                            (o = m),
                            (r = []),
                            $(f, function (e) {
                              Array.prototype.forEach.call(
                                V(e, P(i, e, e)),
                                function (t) {
                                  r.indexOf(t) < 0 &&
                                    (r.push(t), o && (t[o] = e))
                                },
                              )
                            }),
                            (n = r)),
                          (s = a.p),
                          (l = a.d || 0),
                          (u = []),
                          (d = []),
                          (c = []),
                          (v = {}),
                          (p = {
                            'media.playing': function (t, e) {
                              function a() {
                                n.forEach(function (t) {
                                  t.paused &&
                                    !t._pgia_broken &&
                                    ('' !== e ||
                                      isNaN(t.duration) ||
                                      t.duration > t.currentTime) &&
                                    st(t, 'play', e)
                                })
                              }
                              u.push(a),
                                c.push(a),
                                d.push(function () {
                                  n.forEach(function (t) {
                                    st(t, 'pause', '')
                                  })
                                })
                            },
                            'media.play': function (t, e) {
                              u.push(function () {
                                n.forEach(function (t) {
                                  st(t, 'play', e)
                                })
                              })
                            },
                            'media.stop': function (t, e) {
                              u.push(function () {
                                n.forEach(function (t) {
                                  st(t, 'pause', e)
                                })
                              })
                            },
                            'media.mute': function (t, e) {
                              u.push(function () {
                                n.forEach(function (t) {
                                  t.muted = !!e
                                })
                              })
                            },
                            'pgia.play': function (t, e) {
                              ;(v.pgia = v.pgia || {}),
                                (v.pgia.play = e),
                                (v.pgia.target_element = _)
                            },
                            'pgia.pause': function (t, e) {
                              ;(v.pgia = v.pgia || {}),
                                (v.pgia.pause = e),
                                (v.pgia.target_element = _)
                            },
                            pgia: function (t, e) {
                              ;(v.pgia = v.pgia || {}),
                                (e.target_element = _),
                                w(e, function (t, e) {
                                  v.pgia[t] = e
                                })
                            },
                            'pgia.start': function (t, e) {
                              v.pgCall || (v.pgCall = {}), (v.pgCall.start = e)
                            },
                            'pgia.complete': function (t, e) {
                              v.pgCall || (v.pgCall = {}),
                                (v.pgCall.complete = e)
                            },
                            'pgia.update': function (t, e) {
                              v.pgCall || (v.pgCall = {}), (v.pgCall.update = e)
                            },
                            'class.set': function (t, e) {
                              ;(v.pgClass = v.pgClass || {}),
                                (v.pgClass.set = e)
                            },
                            'class.add': function (t, e) {
                              ;(v.pgClass = v.pgClass || {}),
                                (v.pgClass.add = e)
                            },
                            'class.remove': function (t, e) {
                              ;(v.pgClass = v.pgClass || {}),
                                (v.pgClass.remove = e)
                            },
                            'class.toggle': function (t, e) {
                              ;(v.pgClass = v.pgClass || {}),
                                (v.pgClass.toggle = e)
                            },
                            scrollTo: function (t, d) {
                              var c = {},
                                p = G(d, 'dir', 'y'),
                                h = G(d, 'dest', 0) + '',
                                f = G(d, 'inf', 0),
                                g = G(d, 'esel', null),
                                m = G(d, 'offset', 'st')
                              y._pg_req_inv = !0
                              function e(t, e) {
                                var a,
                                  n = _(e),
                                  i = P(h, e, n),
                                  o = !1
                                0 <= (i + '').indexOf('_or_start') &&
                                  ((o = !0), (i = i.replace('_or_start', '')))
                                var r,
                                  s = rt(e)
                                function l() {
                                  return e[
                                    'client' + ('y' == p ? 'Height' : 'Width')
                                  ]
                                }
                                switch (
                                  (s
                                    ? ((f = s.pgInf), (p = s.pgHor ? 'x' : 'y'))
                                    : d.dir || (p = 'h' == U(e) ? 'x' : 'y'),
                                  i)
                                ) {
                                  case 'next':
                                  case 'prev':
                                    ;(a = H(
                                      null,
                                      e,
                                      'x' == p,
                                      'prev' == i,
                                      !1,
                                      g,
                                      s,
                                      f,
                                      void 0,
                                      !1,
                                      void 0,
                                      o,
                                    )),
                                      (c[p] = a.px)
                                    break
                                  case 'first':
                                    ;(a = H(
                                      null,
                                      e,
                                      'x' == p,
                                      !1,
                                      !1,
                                      g,
                                      s,
                                      f,
                                      void 0,
                                      !1,
                                      0,
                                    )),
                                      (c[p] = a.px)
                                    break
                                  case 'last':
                                    ;(a = H(
                                      null,
                                      e,
                                      'x' == p,
                                      !1,
                                      !1,
                                      g,
                                      s,
                                      f,
                                      void 0,
                                      !1,
                                      9999,
                                    )),
                                      (c[p] = a.px)
                                    break
                                  case 'next_page':
                                  case 'prev_page':
                                    ;(a = H(
                                      null,
                                      e,
                                      'x' == p,
                                      it(i, 'prev'),
                                      !1,
                                      g,
                                      s,
                                      f,
                                      void 0,
                                      !0,
                                      void 0,
                                      o,
                                    )),
                                      (c[p] = a.px)
                                    break
                                  default:
                                    if ('string' != typeof i) c[p] = i
                                    else {
                                      function u() {
                                        var t = L(n)
                                        return (
                                          4 < i.length
                                            ? (t = at(i.substr(4)))
                                            : n.hasAttribute('data-item-idx') &&
                                              (t = at(
                                                n.getAttribute('data-item-idx'),
                                              )),
                                          t
                                        )
                                      }
                                      if (it(i, 'item')) {
                                        ;(r = u()),
                                          (a = H(
                                            null,
                                            e,
                                            'x' == p,
                                            !1,
                                            !1,
                                            g,
                                            s,
                                            f,
                                            void 0,
                                            !1,
                                            r,
                                          )),
                                          (c[p] = a.px)
                                        break
                                      }
                                      if (it(i, 'page')) {
                                        ;(r = u()),
                                          (a = H(
                                            null,
                                            e,
                                            'x' == p,
                                            !1,
                                            !1,
                                            g,
                                            s,
                                            f,
                                            void 0,
                                            !0,
                                            r,
                                          )),
                                          (c[p] = a.px)
                                        break
                                      }
                                      c[p] = C(i, l)
                                    }
                                }
                                return (
                                  (c['offset' + p.toUpperCase()] =
                                    'st' === m
                                      ? s
                                        ? s.pgTopCover
                                        : 0
                                      : P(m, e, n, l)),
                                  c
                                )
                              }
                              !n.length ||
                              ('BODY' != n[0].tagName && 'HTML' != n[0].tagName)
                                ? (v.scrollTo = e)
                                : ((t = { scrollTo: e(0, n[0]) }),
                                  a.e && (t.ease = A(a.e)),
                                  y.add(gsap.to(window, l, t), s))
                            },
                            pgPos: function (t, e) {
                              ;(e.target_element = _), (v.pgPos = e)
                            },
                            pgDom: function (t, e) {
                              ;(e.target_element = _),
                                (v.pgDom = e),
                                0 == l && e.clone && (n = Q(n, 0).reverse())
                            },
                            'history.push': function (t, e) {
                              u.push(function () {
                                n.forEach(function (t) {
                                  ;(e = P(e, t, _(t))) &&
                                    history.pushState({}, '', e)
                                })
                              })
                            },
                            attr: function (t, e) {
                              var a = {}
                              w(e, function (t, e) {
                                a[t] = h(e)
                              }),
                                (v.attr = a)
                            },
                          }),
                          (h = function (t) {
                            if ('string' == typeof t && 0 <= t.indexOf('${')) {
                              var n = t
                              return function (t, e, a) {
                                return P(n, e, _(e))
                              }
                            }
                            return (
                              'object' == typeof t &&
                                null !== t &&
                                (t.target_element = _),
                              t
                            )
                          }),
                          (p['stroke-dasharray'] = p['stroke-dashoffset'] =
                            function (t, n) {
                              ;(n = h(n)),
                                (v[t] = function (t, e, a) {
                                  return (
                                    'function' == typeof n && (n = n(t, e, a)),
                                    C(n, function () {
                                      return e.getTotalLength
                                        ? e.getTotalLength()
                                        : 100
                                    })
                                  )
                                })
                            }),
                          w(a.l, function (t, e) {
                            p[t] || (e = h(e)),
                              p[t] ? p[t](t, e) : (v[t] = isNaN(e) ? e : at(e))
                          }),
                          a.e && (v.ease = A(a.e)),
                          c.length &&
                            ((v.onUpdate = function (e) {
                              c.forEach(function (t) {
                                t(e)
                              })
                            }),
                            (v.onUpdateParams = ['{self}'])),
                          u.length &&
                            (v.onStart = function () {
                              u.forEach(function (t) {
                                t()
                              })
                            }),
                          d.length &&
                            (v.onComplete = function () {
                              d.forEach(function (t) {
                                t()
                              })
                            }),
                          n.length &&
                            ('flip' === a.t ||
                              (0 === l
                                ? y.set(n, v, s)
                                : a.s && !g
                                ? y.staggerTo(n, l, v, a.s, s)
                                : y.add(TweenLite.to(n, l, v), s))))
                      })
                }),
              y
            )
          }
        }),
        (X.animationPresets = new (function () {
          var n,
            i,
            a = {
              pxBckImage: function (t) {
                var e = i()
                return (
                  e.set(t, { backgroundPositionY: '0%' }),
                  e.add(
                    n(t, 1, {
                      ease: 'Linear.easeNone',
                      backgroundPositionY: '100%',
                    }),
                  ),
                  e
                )
              },
              pxBckElement: function (t) {
                var e = i()
                return (
                  e.set(t, { scale: 1.1, y: '-5%' }),
                  e.add(n(t, 1, { ease: 'Linear.easeNone', y: '5%' })),
                  e
                )
              },
              pxFly: function (t) {
                var e = i()
                return (
                  e.add(n(t, 1, { ease: 'Linear.easeNone', y: '-100vh' })), e
                )
              },
              bounce: function (t) {
                var e = i()
                return (
                  e.set(t, { y: 0 }),
                  e.add(n(t, 0.2, { ease: 'Power3.easeOut', y: 0 })),
                  e.add(n(t, 0.2, { y: -30 })),
                  e.add(n(t, 0.03, { y: -30 })),
                  e.add(n(t, 0.13, { ease: 'Expo.easeIn', y: 0 })),
                  e.add(n(t, 0.17, { y: -15 })),
                  e.add(n(t, 0.1, { y: 0 })),
                  e.add(n(t, 0.1, { y: -4 })),
                  e.add(n(t, 0.1, { y: 0 })),
                  e
                )
              },
              flash: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1 }),
                  e.add(n(t, 0.25, { autoAlpha: 0 })),
                  e.add(n(t, 0.25, { autoAlpha: 1 })),
                  e.add(n(t, 0.25, { autoAlpha: 0 })),
                  e.add(n(t, 0.25, { autoAlpha: 1 })),
                  e
                )
              },
              pulse: function (t) {
                var e = i()
                return (
                  e.set(t, { scale: 1 }),
                  e.add(n(t, 0.5, { scale: 1.05 })),
                  e.add(n(t, 0.5, { scale: 1 })),
                  e
                )
              },
              rubberBand: function (t) {
                var e = i()
                return (
                  e.set(t, { scale: 1 }),
                  e.add(n(t, 0.3, { scaleX: 1.25, scaleY: 0.75 })),
                  e.add(n(t, 0.1, { scaleX: 0.75, scaleY: 1.25 })),
                  e.add(n(t, 0.1, { scaleX: 1.15, scaleY: 0.85 })),
                  e.add(n(t, 0.1 + 0.05, { scaleX: 0.95, scaleY: 1.05 })),
                  e.add(n(t, 0.1, { scaleX: 1.05, scaleY: 0.95 })),
                  e.add(n(t, 0.25, { scaleX: 1, scaleY: 1 })),
                  e
                )
              },
              shake: function (t) {
                var e = i()
                return (
                  e.set(t, { x: 0 }),
                  e.add(n(t, 0.1, { x: -10 })),
                  e.add(n(t, 0.1, { x: 10 })),
                  e.add(n(t, 0.1, { x: -10 })),
                  e.add(n(t, 0.1, { x: 10 })),
                  e.add(n(t, 0.1, { x: -10 })),
                  e.add(n(t, 0.1, { x: 10 })),
                  e.add(n(t, 0.1, { x: -10 })),
                  e.add(n(t, 0.1, { x: 10 })),
                  e.add(n(t, 0.1, { x: -10 })),
                  e.add(n(t, 0.1, { x: 0 })),
                  e
                )
              },
              headShake: function (t) {
                var e = i()
                return (
                  e.set(t, { x: 0, rotateY: 0 }),
                  e.add(n(t, 0.065, { x: -6, rotateY: -9 })),
                  e.add(n(t, 0.1 + 0.02, { x: 5, rotateY: 7 })),
                  e.add(n(t, 0.13, { x: -3, rotateY: -5 })),
                  e.add(n(t, 0.1 + 0.02, { x: 2, rotateY: 3 })),
                  e.add(n(t, 0.065, { x: 0, rotateY: 0 })),
                  e.add(n(t, 0.065, { x: 0, rotateY: 0 })),
                  e
                )
              },
              swing: function (t) {
                var e = i()
                return (
                  e.set(t, { rotation: 0 }),
                  e.add(n(t, 0.2, { rotation: 15 })),
                  e.add(n(t, 0.2, { rotation: -10 })),
                  e.add(n(t, 0.2, { rotation: 5 })),
                  e.add(n(t, 0.2, { rotation: -5 })),
                  e.add(n(t, 0.2, { rotation: 0 })),
                  e
                )
              },
              tada: function (t) {
                var e = i()
                return (
                  e.set(t, { scale: 1, rotation: 0 }),
                  e.add(n(t, 0.1, { scale: 0.9, rotation: -3 })),
                  e.add(n(t, 0.1, { scale: 0.9, rotation: -3 })),
                  e.add(n(t, 0.1, { scale: 1.1, rotation: 3 })),
                  e.add(n(t, 0.1, { scale: 1.1, rotation: -3 })),
                  e.add(n(t, 0.1, { scale: 1.1, rotation: 3 })),
                  e.add(n(t, 0.1, { scale: 1.1, rotation: -3 })),
                  e.add(n(t, 0.1, { scale: 1.1, rotation: 3 })),
                  e.add(n(t, 0.1, { scale: 1.1, rotation: -3 })),
                  e.add(n(t, 0.1, { scale: 1.1, rotation: 3 })),
                  e.add(n(t, 0.1, { scale: 1, rotation: 0 })),
                  e
                )
              },
              wobble: function (t) {
                var e = i()
                return (
                  e.set(t, { x: 0, rotation: 0 }),
                  e.add(n(t, 0.15, { x: '-25%', rotation: -5 })),
                  e.add(n(t, 0.15, { x: '20%', rotation: 3 })),
                  e.add(n(t, 0.15, { x: '-15%', rotation: -3 })),
                  e.add(n(t, 0.15, { x: '10%', rotation: 2 })),
                  e.add(n(t, 0.15, { x: '-5%', rotation: -1 })),
                  e.add(n(t, 0.25, { x: '0%', rotation: 0 })),
                  e
                )
              },
              jello: function (t) {
                var e = i(),
                  a = 0.111
                return (
                  e.set(t, { skewX: 0, skewY: 0 }),
                  e.add(n(t, a, { skewX: 0, skewY: 0 })),
                  e.add(n(t, a, { skewX: -12.5, skewY: -12.5 })),
                  e.add(n(t, a, { skewX: 6.25, skewY: 6.25 })),
                  e.add(n(t, a, { skewX: -3.125, skewY: -3.125 })),
                  e.add(n(t, a, { skewX: 1.5625, skewY: 1.5625 })),
                  e.add(n(t, a, { skewX: -0.78125, skewY: -0.78125 })),
                  e.add(n(t, a, { skewX: 0.390625, skewY: 0.390625 })),
                  e.add(n(t, a, { skewX: -0.1953125, skewY: -0.1953125 })),
                  e.add(n(t, 0.112, { skewX: 0, skewY: 0 })),
                  e
                )
              },
              heartBeat: function (t) {
                var e = i(),
                  a = 'Power0.easeInOut'
                return (
                  e.set(t, { scale: 1 }),
                  e.add(n(t, 0.14, { ease: a, scale: 1.3 })),
                  e.add(n(t, 0.14, { ease: a, scale: 1 })),
                  e.add(n(t, 0.14, { ease: a, scale: 1.3 })),
                  e.add(n(t, 0.28, { ease: a, scale: 1 })),
                  e
                )
              },
              bounceIn: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 0, scale: 0.3 }),
                  e.add(n(t, 0.2, { scale: 1.1 })),
                  e.add(n(t, 0.2, { scale: 0.9 })),
                  e.add(n(t, 0.2, { scale: 1.03 })),
                  e.add(n(t, 0.2, { scale: 0.97 })),
                  e.add(n(t, 0.2, { scale: 1 })),
                  e.add(n(t, 1, { autoAlpha: 1 }), '-=1'),
                  e
                )
              },
              bounceInDown: function (t) {
                var e = i()
                customEase = 'Power3.easeOut'
                return (
                  e.set(t, { autoAlpha: 0, y: -3e3 }),
                  e.add(n(t, 0.6, { ease: customEase, y: 25, autoAlpha: 1 })),
                  e.add(n(t, 0.15, { ease: customEase, y: -10 })),
                  e.add(n(t, 0.15, { ease: customEase, y: 5 })),
                  e.add(n(t, 0.1, { ease: customEase, y: 0 })),
                  e
                )
              },
              bounceInLeft: function (t) {
                var e = i()
                customEase = 'Power3.easeOut'
                return (
                  e.set(t, { autoAlpha: 0, x: -3e3 }),
                  e.add(n(t, 0.6, { ease: customEase, x: 25, autoAlpha: 1 })),
                  e.add(n(t, 0.15, { ease: customEase, x: -10 })),
                  e.add(n(t, 0.15, { ease: customEase, x: 5 })),
                  e.add(n(t, 0.1, { ease: customEase, x: 0 })),
                  e
                )
              },
              bounceInRight: function (t) {
                var e = i(),
                  a = 'Power3.easeOut'
                return (
                  e.set(t, { autoAlpha: 0, x: 3e3 }),
                  e.add(n(t, 0.6, { ease: a, x: -25, autoAlpha: 1 })),
                  e.add(n(t, 0.15, { ease: a, x: 10 })),
                  e.add(n(t, 0.15, { ease: a, x: -5 })),
                  e.add(n(t, 0.1, { ease: a, x: 0 })),
                  e
                )
              },
              bounceInUp: function (t) {
                var e = i(),
                  a = 'Power3.easeOut'
                return (
                  e.set(t, { autoAlpha: 0, y: 3e3 }),
                  e.add(n(t, 0.6, { ease: a, y: -20, autoAlpha: 1 })),
                  e.add(n(t, 0.15, { ease: a, y: 10 })),
                  e.add(n(t, 0.15, { ease: a, y: -5 })),
                  e.add(n(t, 0.1, { ease: a, y: 0 })),
                  e
                )
              },
              bounceOut: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1, scale: 1 }),
                  e.add(n(t, 0.2, { scale: 0.9 })),
                  e.add(n(t, 0.3, { scale: 1.1, autoAlpha: 1 })),
                  e.add(n(t, 0.05, { scale: 1.1, autoAlpha: 1 })),
                  e.add(n(t, 0.45, { scale: 0.3, autoAlpha: 0 })),
                  e
                )
              },
              bounceOutDown: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1, y: 0 }),
                  e.add(n(t, 0.2, { y: 10 })),
                  e.add(n(t, 0.2, { y: -20 })),
                  e.add(n(t, 0.05, { y: -20 })),
                  e.add(n(t, 0.55, { y: 2e3 })),
                  e
                )
              },
              bounceOutLeft: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1, x: 0 }),
                  e.add(n(t, 0.2, { autoAlpha: 1, x: 20 })),
                  e.add(n(t, 0.8, { autoAlpha: 0, x: -2e3 })),
                  e
                )
              },
              bounceOutRight: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1, x: 0 }),
                  e.add(n(t, 0.2, { autoAlpha: 1, x: -20 })),
                  e.add(n(t, 0.8, { autoAlpha: 0, x: 2e3 })),
                  e
                )
              },
              bounceOutUp: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1, y: 0 }),
                  e.add(n(t, 0.2, { autoAlpha: 1, y: -10 })),
                  e.add(n(t, 0.2, { autoAlpha: 1, y: 20 })),
                  e.add(n(t, 0.05, { autoAlpha: 1, y: 20 })),
                  e.add(n(t, 0.55, { autoAlpha: 0, y: -2e3 })),
                  e
                )
              },
              fadeIn: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 0 }),
                  e.add(n(t, 1, { autoAlpha: 1 })),
                  e
                )
              },
              fadeInDown: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 0, y: '-100%' }),
                  e.add(n(t, 1, { autoAlpha: 1, y: '0%' })),
                  e
                )
              },
              fadeInDownBig: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 0, y: -2e3 }),
                  e.add(n(t, 1, { autoAlpha: 1, y: 0 })),
                  e
                )
              },
              fadeInLeft: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 0, x: '-100%' }),
                  e.add(n(t, 1, { autoAlpha: 1, x: '0%' })),
                  e
                )
              },
              fadeInLeftBig: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 0, x: -2e3 }),
                  e.add(n(t, 1, { autoAlpha: 1, x: 0 })),
                  e
                )
              },
              fadeInRight: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 0, x: '100%' }),
                  e.add(n(t, 1, { autoAlpha: 1, x: '0%' })),
                  e
                )
              },
              fadeInRightBig: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 0, x: 2e3 }),
                  e.add(n(t, 1, { autoAlpha: 1, x: 0 })),
                  e
                )
              },
              fadeInUp: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 0, y: '100%' }),
                  e.add(n(t, 1, { autoAlpha: 1, y: '0%' })),
                  e
                )
              },
              fadeInUpBig: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 0, y: 2e3 }),
                  e.add(n(t, 1, { autoAlpha: 1, y: 0 })),
                  e
                )
              },
              fadeOut: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1 }),
                  e.add(n(t, 1, { autoAlpha: 0 })),
                  e
                )
              },
              fadeOutDown: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1, y: 0 }),
                  e.add(n(t, 1, { autoAlpha: 0, y: '100%' })),
                  e
                )
              },
              fadeOutDownBig: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1, y: 0 }),
                  e.add(n(t, 1, { autoAlpha: 0, y: 2e3 })),
                  e
                )
              },
              fadeOutLeft: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1, x: 0 }),
                  e.add(n(t, 1, { autoAlpha: 0, x: '-100%' })),
                  e
                )
              },
              fadeOutLeftBig: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1, x: 0 }),
                  e.add(n(t, 1, { autoAlpha: 0, x: -2e3 })),
                  e
                )
              },
              fadeOutRight: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1 }),
                  e.add(n(t, 1, { autoAlpha: 0, x: '100%' })),
                  e
                )
              },
              fadeOutRightBig: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1, x: 0 }),
                  e.add(n(t, 1, { autoAlpha: 0, x: 2e3 })),
                  e
                )
              },
              fadeOutUp: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1, y: 0 }),
                  e.add(n(t, 1, { autoAlpha: 0, y: '-100%' })),
                  e
                )
              },
              fadeOutUpBig: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1, y: 0 }),
                  e.add(n(t, 1, { autoAlpha: 0, y: -2e3 })),
                  e
                )
              },
              flip: function (t) {
                var e = i(),
                  a = 'Power0.easeIn'
                return (
                  e.set(t, {
                    transformPerspective: 400,
                    scale: 1,
                    z: 0,
                    rotationY: -360,
                  }),
                  e.add(
                    n(t, 0.4, {
                      ease: a,
                      transformPerspective: 400,
                      scale: 1,
                      z: 150,
                      rotationY: -190,
                    }),
                  ),
                  e.add(
                    n(t, 0.1, {
                      ease: a,
                      transformPerspective: 400,
                      scale: 1,
                      z: 150,
                      rotationY: -170,
                    }),
                  ),
                  e.add(
                    n(t, 0.3, {
                      ease: a,
                      transformPerspective: 400,
                      scale: 0.95,
                      z: 150,
                      rotationY: 0,
                    }),
                  ),
                  e.add(
                    n(t, 0.2, {
                      ease: a,
                      transformPerspective: 400,
                      scale: 1,
                      z: 0,
                      rotationY: 0,
                    }),
                  ),
                  e
                )
              },
              flipInX: function (t) {
                var e = i()
                return (
                  e.set(t, {
                    autoAlpha: 0,
                    transformPerspective: 400,
                    rotationX: 90,
                  }),
                  e.add(
                    n(t, 0.4, {
                      ease: 'Power0.easeIn',
                      transformPerspective: 400,
                      rotationX: -20,
                    }),
                  ),
                  e.add(
                    n(t, 0.2, { transformPerspective: 400, rotationX: 10 }),
                  ),
                  e.add(n(t, 0.4 + 0.2, { autoAlpha: 1 }), '-=' + (0.4 + 0.2)),
                  e.add(
                    n(t, 0.2, { transformPerspective: 400, rotationX: -5 }),
                  ),
                  e.add(n(t, 0.2, { transformPerspective: 400, rotationX: 0 })),
                  e
                )
              },
              flipInY: function (t) {
                var e = i()
                return (
                  e.set(t, {
                    autoAlpha: 0,
                    transformPerspective: 400,
                    rotationY: 90,
                  }),
                  e.add(
                    n(t, 0.4, {
                      ease: 'Linear.easeIn',
                      transformPerspective: 400,
                      rotationY: -20,
                    }),
                  ),
                  e.add(
                    n(t, 0.2, { transformPerspective: 400, rotationY: 10 }),
                  ),
                  e.add(n(t, 0.4 + 0.2, { autoAlpha: 1 }), '-=' + (0.4 + 0.2)),
                  e.add(
                    n(t, 0.2, { transformPerspective: 400, rotationY: -5 }),
                  ),
                  e.add(n(t, 0.2, { transformPerspective: 400, rotationY: 0 })),
                  e
                )
              },
              flipOutX: function (t) {
                var e = i()
                return (
                  e.set(t, {
                    autoAlpha: 1,
                    transformPerspective: 400,
                    rotationX: 0,
                  }),
                  e.add(
                    n(t, 0.3, {
                      autoAlpha: 1,
                      transformPerspective: 400,
                      rotationX: -20,
                    }),
                  ),
                  e.add(
                    n(t, 0.7, {
                      autoAlpha: 0,
                      transformPerspective: 400,
                      rotationX: 90,
                    }),
                  ),
                  e
                )
              },
              flipOutY: function (t) {
                var e = i()
                return (
                  e.set(t, {
                    autoAlpha: 1,
                    transformPerspective: 400,
                    rotationY: 0,
                  }),
                  e.add(
                    n(t, 0.3, {
                      autoAlpha: 1,
                      transformPerspective: 400,
                      rotationY: -20,
                    }),
                  ),
                  e.add(
                    n(t, 0.7, {
                      autoAlpha: 0,
                      transformPerspective: 400,
                      rotationY: 90,
                    }),
                  ),
                  e
                )
              },
              lightSpeedIn: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 0, x: '100%', skewX: -30 }),
                  e.add(n(t, 0.6, { autoAlpha: 1, skewX: 20 })),
                  e.add(n(t, 0.2, { skewX: -5 })),
                  e.add(n(t, 0.2, { skewX: 0 })),
                  e.add(n(t, 1, { x: '0%' }), '-=1'),
                  e
                )
              },
              lightSpeedOut: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1, x: 0, skewX: 0 }),
                  e.add(n(t, 1, { autoAlpha: 0, x: '100%', skewX: 30 })),
                  e
                )
              },
              rotateIn: function (t) {
                var e = i()
                return (
                  e.set(t, {
                    autoAlpha: 0,
                    transformOrigin: 'center',
                    rotationZ: 200,
                  }),
                  e.add(
                    n(t, 1, {
                      autoAlpha: 1,
                      transformOrigin: 'center',
                      rotationZ: 0,
                    }),
                  ),
                  e
                )
              },
              rotateInDownLeft: function (t) {
                var e = i()
                return (
                  e.set(t, {
                    autoAlpha: 0,
                    transformOrigin: 'left bottom',
                    rotationZ: -45,
                  }),
                  e.add(
                    n(t, 1, {
                      autoAlpha: 1,
                      transformOrigin: 'left bottom',
                      rotationZ: 0,
                    }),
                  ),
                  e
                )
              },
              rotateInDownRight: function (t) {
                var e = i()
                return (
                  e.set(t, {
                    autoAlpha: 0,
                    transformOrigin: 'right bottom',
                    rotationZ: 45,
                  }),
                  e.add(
                    n(t, 1, {
                      autoAlpha: 1,
                      transformOrigin: 'right bottom',
                      rotationZ: 0,
                    }),
                  ),
                  e
                )
              },
              rotateInUpLeft: function (t) {
                var e = i()
                return (
                  e.set(t, {
                    autoAlpha: 0,
                    transformOrigin: 'left bottom',
                    rotationZ: 45,
                  }),
                  e.add(
                    n(t, 1, {
                      autoAlpha: 1,
                      transformOrigin: 'left bottom',
                      rotationZ: 0,
                    }),
                  ),
                  e
                )
              },
              rotateInUpRight: function (t) {
                var e = i()
                return (
                  e.set(t, {
                    autoAlpha: 0,
                    transformOrigin: 'right bottom',
                    rotationZ: -90,
                  }),
                  e.add(
                    n(t, 1, {
                      autoAlpha: 1,
                      transformOrigin: 'right bottom',
                      rotationZ: 0,
                    }),
                  ),
                  e
                )
              },
              rotateOut: function (t) {
                var e = i()
                return (
                  e.set(t, {
                    autoAlpha: 1,
                    transformOrigin: 'center',
                    rotationZ: 0,
                  }),
                  e.add(
                    n(t, 1, {
                      autoAlpha: 0,
                      transformOrigin: 'center',
                      rotationZ: 200,
                    }),
                  ),
                  e
                )
              },
              rotateOutDownLeft: function (t) {
                var e = i()
                return (
                  e.set(t, {
                    autoAlpha: 1,
                    transformOrigin: 'left bottom',
                    rotationZ: 0,
                  }),
                  e.add(
                    n(t, 1, {
                      autoAlpha: 0,
                      transformOrigin: 'left bottom',
                      rotationZ: 45,
                    }),
                  ),
                  e
                )
              },
              rotateOutDownRight: function (t) {
                var e = i()
                return (
                  e.set(t, {
                    autoAlpha: 1,
                    transformOrigin: 'right bottom',
                    rotationZ: 0,
                  }),
                  e.add(
                    n(t, 1, {
                      autoAlpha: 0,
                      transformOrigin: 'right bottom',
                      rotationZ: -45,
                    }),
                  ),
                  e
                )
              },
              rotateOutUpLeft: function (t) {
                var e = i()
                return (
                  e.set(t, {
                    autoAlpha: 1,
                    transformOrigin: 'left bottom',
                    rotationZ: 0,
                  }),
                  e.add(
                    n(t, 1, {
                      autoAlpha: 0,
                      transformOrigin: 'left bottom',
                      rotationZ: -45,
                    }),
                  ),
                  e
                )
              },
              rotateOutUpRight: function (t) {
                var e = i()
                return (
                  e.set(t, {
                    autoAlpha: 1,
                    transformOrigin: 'right bottom',
                    rotationZ: 0,
                  }),
                  e.add(
                    n(t, 1, {
                      autoAlpha: 0,
                      transformOrigin: 'right bottom',
                      rotationZ: 90,
                    }),
                  ),
                  e
                )
              },
              slideInUp: function (t) {
                var e = i()
                return (
                  e.set(t, { y: '100%' }),
                  e.add(n(t, 0.1, { autoAlpha: 1 }), 0),
                  e.add(n(t, 1, { y: '0%' }), 0),
                  e
                )
              },
              slideInDown: function (t) {
                var e = i()
                return (
                  e.set(t, { y: '-100%' }),
                  e.add(n(t, 0.1, { autoAlpha: 1 }), 0),
                  e.add(n(t, 1, { y: '0%' }), 0),
                  e
                )
              },
              slideInLeft: function (t) {
                var e = i()
                return (
                  e.set(t, { x: '-100%' }),
                  e.add(n(t, 0.1, { autoAlpha: 1 }), 0),
                  e.add(n(t, 1, { x: '0%' }), 0),
                  e
                )
              },
              slideInRight: function (t) {
                var e = i()
                return (
                  e.set(t, { x: '100%' }),
                  e.add(n(t, 0.1, { autoAlpha: 1 }), 0),
                  e.add(n(t, 1, { x: '0%' }), 0),
                  e
                )
              },
              slideOutUp: function (t) {
                var e = i()
                return (
                  e.set(t, { y: '0%' }),
                  e.add(n(t, 0.9, { y: '-100%' })),
                  e.add(n(t, 0.1, { autoAlpha: 0 })),
                  e
                )
              },
              slideOutDown: function (t) {
                var e = i()
                return (
                  e.set(t, { y: '0%' }),
                  e.add(n(t, 0.9, { y: '100%' })),
                  e.add(n(t, 0.1, { autoAlpha: 0 })),
                  e
                )
              },
              slideOutLeft: function (t) {
                var e = i()
                return (
                  e.set(t, { x: '0%' }),
                  e.add(n(t, 0.9, { x: '-100%' })),
                  e.add(n(t, 0.1, { autoAlpha: 0 })),
                  e
                )
              },
              slideOutRight: function (t) {
                var e = i()
                return (
                  e.set(t, { x: '0%' }),
                  e.add(n(t, 0.9, { x: '100%' })),
                  e.add(n(t, 0.1, { autoAlpha: 0 })),
                  e
                )
              },
              zoomIn: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 0, scale: 0.3 }),
                  e.add(n(t, 1, { scale: 1 })),
                  e.add(n(t, 0.5, { autoAlpha: 1 }), '-=1'),
                  e
                )
              },
              zoomInDown: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 0, scale: 0.1, y: -150 }),
                  e.add(
                    n(t, 0.6, {
                      ease: 'Power2.easeIn',
                      autoAlpha: 1,
                      scale: 0.475,
                      y: 60,
                    }),
                  ),
                  e.add(n(t, 0.4, { ease: 'Power4.easeOut', scale: 1, y: 0 })),
                  e
                )
              },
              zoomInLeft: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 0, scale: 0.1, x: -300 }),
                  e.add(
                    n(t, 0.6, {
                      ease: 'Power2.easeIn',
                      autoAlpha: 1,
                      scale: 0.475,
                      x: 10,
                    }),
                  ),
                  e.add(n(t, 0.4, { ease: 'Power4.easeOut', scale: 1, x: 0 })),
                  e
                )
              },
              zoomInRight: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 0, scale: 0.1, x: 100 }),
                  e.add(
                    n(t, 0.6, {
                      ease: 'Power2.easeIn',
                      autoAlpha: 1,
                      scale: 0.475,
                      x: -10,
                    }),
                  ),
                  e.add(n(t, 0.4, { ease: 'Power4.easeOut', scale: 1, x: 0 })),
                  e
                )
              },
              zoomInUp: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 0, scale: 0.1, y: 150 }),
                  e.add(
                    n(t, 0.6, {
                      ease: 'Power2.easeIn',
                      autoAlpha: 1,
                      scale: 0.475,
                      y: -60,
                    }),
                  ),
                  e.add(n(t, 0.4, { ease: 'Power4.easeOut', scale: 1, y: 0 })),
                  e
                )
              },
              zoomOut: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1, scale: 1 }),
                  e.add(n(t, 0.5, { autoAlpha: 0, scale: 0.3 })),
                  e.add(n(t, 1, { autoAlpha: 0, scale: 1 })),
                  e
                )
              },
              zoomOutDown: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1, scale: 1, y: '0px' }),
                  e.add(
                    n(t, 0.4, {
                      ease: 'Power2.easeIn',
                      autoAlpha: 1,
                      scale: 0.475,
                      y: -28,
                    }),
                  ),
                  e.add(
                    n(t, 0.6, {
                      ease: 'Power4.easeOut',
                      autoAlpha: 0,
                      scale: 0.1,
                      y: 500,
                      transformOrigin: 'center bottom',
                    }),
                  ),
                  e
                )
              },
              zoomOutLeft: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1, scale: 1, x: 0 }),
                  e.add(n(t, 0.4, { autoAlpha: 1, scale: 0.475, x: 42 })),
                  e.add(
                    n(t, 0.6, {
                      autoAlpha: 0,
                      scale: 0.1,
                      x: -300,
                      transformOrigin: 'left center',
                    }),
                  ),
                  e
                )
              },
              zoomOutRight: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1, scale: 1, x: 0 }),
                  e.add(n(t, 0.4, { autoAlpha: 1, scale: 0.475, x: -42 })),
                  e.add(
                    n(t, 0.6, {
                      autoAlpha: 0,
                      scale: 0.1,
                      x: 250,
                      transformOrigin: 'right center',
                    }),
                  ),
                  e
                )
              },
              zoomOutUp: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1, scale: 1, y: 0 }),
                  e.add(
                    n(t, 0.4, {
                      ease: 'Power2.easeIn',
                      autoAlpha: 1,
                      scale: 0.475,
                      y: 28,
                    }),
                  ),
                  e.add(
                    n(t, 0.6, {
                      ease: 'Power4.easeOut',
                      autoAlpha: 0,
                      scale: 0.1,
                      y: -500,
                      transformOrigin: 'center bottom',
                    }),
                  ),
                  e
                )
              },
              hinge: function (t) {
                var e = i()
                return (
                  e.set(t, { transformOrigin: 'top left' }),
                  e.add(
                    n(t, 0.2, {
                      rotation: 80,
                      transformOrigin: 'top left',
                      ease: 'Linear.easeInOut',
                    }),
                  ),
                  e.add(
                    n(t, 0.2, {
                      rotation: 60,
                      transformOrigin: 'top left',
                      ease: 'Linear.easeInOut',
                    }),
                  ),
                  e.add(
                    n(t, 0.2, {
                      rotation: 80,
                      transformOrigin: 'top left',
                      ease: 'Linear.easeInOut',
                    }),
                  ),
                  e.add(
                    n(t, 0.2, {
                      autoAlpha: 1,
                      rotation: 60,
                      transformOrigin: 'top left',
                      ease: 'Linear.easeInOut',
                    }),
                  ),
                  e.add(n(t, 0.2, { autoAlpha: 0, rotation: 0, y: '700px' })),
                  e
                )
              },
              jackInTheBox: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 0, scale: 0.1, rotation: 30 }),
                  e.add(n(t, 0.5, { rotation: -10 })),
                  e.add(n(t, 0.2, { rotation: 3 })),
                  e.add(n(t, 0.3, { rotation: 0 })),
                  e.add(n(t, 1, { autoAlpha: 1, scale: 1 }), '-=1'),
                  e
                )
              },
              rollIn: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 0, x: '-100%', rotation: -120 }),
                  e.add(n(t, 1, { autoAlpha: 1, x: '0%', rotation: 0 })),
                  e
                )
              },
              rollOut: function (t) {
                var e = i()
                return (
                  e.set(t, { autoAlpha: 1, x: '0%', rotationZ: 0 }),
                  e.add(n(t, 1, { autoAlpha: 0, x: '100%', rotation: 120 })),
                  e
                )
              },
            }
          this.getTimeline = function (t, e) {
            return (
              n ||
                ((n = TweenLite.to),
                (i = function () {
                  return gsap.timeline({ paused: !0 })
                })),
              a[t] ? a[t](e) : null
            )
          }
        })()),
        (X.namedAnimations = {}),
        (K = function (t, e) {
          t !== e && (X.namedAnimations[t] = e)
        }),
        (tt = X.getAnimationTimeline =
          function (t, e, a) {
            if (
              ('string' == typeof t &&
                X.namedAnimations[t] &&
                (t = X.namedAnimations[t]),
              'string' != typeof t)
            )
              return new r().getTimeline(t || {}, e, null, a)
            e = X.animationPresets.getTimeline(t, e)
            return (
              e ||
                (q('Named animation not found: ' + t), (e = gsap.timeline({}))),
              e
            )
          }),
        (et = function (t) {
          if (t && t.l)
            for (var e = 0; e < t.l.length; e++)
              if (!t.l[e].m)
                for (var a = 0; a < t.l[e].l.length; a++)
                  if ('flip' === t.l[e].l[a].t) return !0
          return !1
        }),
        ((g = function (t, e, a, n) {
          var i = this
          ;(this.data = a),
            (this.index = e),
            (this.parent = n),
            (this.event = a.trg || 'click'),
            (this.touchEvent = null),
            (this.element = t),
            (this.targets = []),
            (this.timeline = null),
            (this.delayTimer = null),
            (this.mouseMoveMeasure = a.mm_a || 'x'),
            (this.restAt = 0.5),
            (this.restart = 'true' === a.rstr),
            (this.pauseOther = 'true' === a.po),
            (this.reset = 'true' === a.rst),
            (this.reverse = 'true' === a.rev),
            (this.toggRev = 'true' === a.trev),
            (this.disabled = j(a)),
            (this.interval = null),
            (this.softDelay = 'soft' in a ? F(null, a.soft) : 0.5),
            (this.keys = a.keys ? a.keys.split(/\s*,\s*/) : []),
            et(a.a) && (a.rcr = !0),
            (this.name = a.name ? (a.name + '').toLowerCase() : null),
            (this.trigC = 0),
            (this._etce = null),
            (this._playBind = this.play.bind(this)),
            (this._playScrollBind = this.playScroll.bind(this)),
            (this._playMouseMoveBind = this.playMouseMove.bind(this)),
            (this._playScrubBind = this.playScrub.bind(this)),
            (this._restBind = this.rest.bind(this)),
            a.name && a.a && K(a.name, a.a),
            (this.mm_context = null),
            (this.inactive_mq = !1),
            (this.redm = J && !!a.redm)
          var o = !1,
            r = !0,
            s = !0
          0 < this.event.indexOf('_notouch') &&
            ((this.event = this.event.replace('_notouch', '')), (r = !1)),
            it(this.event, 'swipe') &&
              ((this.swipe = { dir: this.event.replace('swipe_', '') }),
              (this.event = 'swipe'))
          function l() {
            switch (i.event) {
              case 'now':
                s ? X.elementAnimationsManager.play_list.push(i) : i.play(),
                  (o = !0)
                break
              case 'no':
                o = !0
                break
              case 'DOMContentLoaded':
                d && i.play()
              case 'load':
              case 'resize':
              case 'popstate':
                window.addEventListener(i.event, i._playBind, !1), (o = !0)
                break
              case 'timer':
                ;(i.interval = setInterval(
                  i._playBind,
                  1e3 * F(null, a.timer || 1),
                )),
                  (o = !0)
                break
              case 'mousemove':
              case 'touchmove':
                'run' === i.mouseMoveMeasure
                  ? (i.touchEvent = 'touchmove')
                  : (t.addEventListener(i.event, i._playMouseMoveBind, !1),
                    t.addEventListener(
                      'touchmove',
                      i._playMouseMoveBind,
                      !!a.pdef && { passive: !1 },
                    ),
                    i.data.mm_r &&
                      (t.addEventListener('mouseleave', i._restBind, !1),
                      t.addEventListener('touchend', i._restBind, !1),
                      (i.restAt = parseFloat(i.data.mm_r) + '%'),
                      i.seek(i.restAt)),
                    (o = !0))
                break
              case 'input_scrub':
                ;(i.smin = at('is_min' in a ? a.is_min : t.min || 0)),
                  (i.smax = at('is_max' in a ? a.is_max : t.max || 100)),
                  t.addEventListener('input', i._playScrubBind, !1),
                  (o = !0)
                break
              case 'swipe':
                u(t).add(i.swipe.dir, 0, 0, i._playBind, function () {
                  return !!a.pdef && i._etc()
                })
                break
              case 'mouseenter':
              case 'mousedown':
                r && (i.touchEvent = 'touchstart')
                break
              case 'mouseleave':
              case 'mouseup':
                r && (i.touchEvent = 'touchend')
                break
              case 'scrolling':
                window.addEventListener('scroll', i._playScrollBind, !1),
                  (o = !0)
            }
            o ||
              (t.addEventListener(
                i.event.replace('res_', ''),
                i._playBind,
                !(!it(i.event, 'touch') || !a.pdef) && { passive: !1 },
              ),
              i.touchEvent &&
                t.addEventListener(
                  i.touchEvent,
                  i._playBind,
                  !('touchmove' !== i.touchEvent || !a.pdef) && { passive: !1 },
                ))
          }
          e = W(a)
          e
            ? ((n = D.contexts.length),
              (i.inactive_mq = !0),
              D.add(e, function (t) {
                return (
                  l(),
                  (i.inactive_mq = !1),
                  i.getTimeline(),
                  (s = !1),
                  function () {
                    ;(i.inactive_mq = !0), i.destroy(!0)
                  }
                )
              }),
              (this.mm_context = D.contexts[n]))
            : l()
        }).prototype._etc = function () {
          var t = this._etce
          if (this.data.tc && t) {
            var e = this.data.tcv || null,
              a = this.data.tca || 'a'
            switch (this.data.tc) {
              case 'class':
                return t.classList.contains(e)
              case 'no-class':
                return !t.classList.contains(e)
              case 'attr':
                return t.getAttribute(a) == e
              case 'no-attr':
                return t.getAttribute(a) != e
            }
          }
          return !0
        }),
        (g.prototype.create = function () {
          var t,
            e = this
          this.timeline = null
          var a = this.data
          ;(this.targets = a.t ? V(this.element, a.t) : [this.element]),
            (t = this.targets.length
              ? ((n = this.targets), (this._etce = n[0]), tt(a.a, n, this.redm))
              : gsap.timeline({})).pause()
          var n = parseInt(a.rpt || 1)
          return (
            1 !== n && t.repeat(1 < n ? n - 1 : n),
            this.data.d && t.duration(F(t, a.d)),
            this.redm && 0.01 < t.duration() && t.duration(0.01),
            (this.timeline = t),
            R &&
              ((t._pg_animation_id = Z.getAnimationId(
                this.element,
                'animation_' + this.index,
              )),
              t.eventCallback('onUpdate', function () {
                Z.updateProgress(
                  this._pg_animation_id,
                  this.time(),
                  this.progress(),
                )
              })),
            this.reset &&
              t.eventCallback('onComplete', function () {
                e.seek(e.reverse ? '100%' : 0, !1, !1)
              }),
            t.eventCallback('onRepeat', function () {}),
            t
          )
        }),
        (g.prototype.getTimeline = function () {
          return this.timeline || this.create()
        }),
        (g.prototype.recreate = function () {
          this.timeline && (this.timeline.kill(), (this.timeline = null))
        }),
        (g.prototype.play = function (t, e) {
          var a,
            n,
            i,
            o,
            r,
            s = this
          j(this.data) ||
            (this.data.rcr && this.recreate(),
            (a = this.getTimeline()),
            this._etc() &&
              ((t &&
                it(t.type, 'key') &&
                this.keys.indexOf(' ' == t.key ? 'Spacebar' : t.key) < 0) ||
                (s.data.pdef && t && t.preventDefault(),
                s.data.sprop && t && t.stopPropagation(),
                (n = this.reverse || e),
                s.toggRev &&
                  (s.trigC++ % 2 == 1 && (n = !n),
                  (i = n ? G(s.data, 'spdrev', 100) / 100 : 1),
                  s.data.d ? a.duration(F(a, s.data.d) / i) : a.timeScale(i),
                  s.redm && 0.01 < a.duration() && a.duration(0.01)),
                (i = n ? a.duration() : 0),
                (o = (a._pg_req_inv || this.restart) && !s.data.noinv),
                (r =
                  !this.restart && (n ? 0 < a.progress() : a.progress() < 1)
                    ? null
                    : 0),
                this.delayTimer && clearTimeout(this.delayTimer),
                this.pauseOther &&
                  ((s = G(s.data, 'pol', '')),
                  this.parent.pauseOther(this, s ? s.split(/\s?,\s?/) : []),
                  (o = !0)),
                (a.time() !== i && r !== i) || !this.data.dly
                  ? (o && a.invalidate(), n ? a.reverse(r) : a.play(r))
                  : (this.delayTimer = setTimeout(function () {
                      o && a.invalidate(), n ? a.reverse(r) : a.play(r)
                    }, 1e3 * F(a, this.data.dly))))))
        }),
        (g.prototype.playMouseMove = function (t) {
          if (!j(this.data)) {
            var e = this.getTimeline()
            if (this._etc()) {
              this.data.pdef && t.preventDefault(),
                this.data.sprop && t.stopPropagation()
              var a,
                n = this.element.getBoundingClientRect(),
                i = it(t.type, 'touch')
                  ? ((a = t.targetTouches[0].pageX), t.targetTouches[0].pageY)
                  : ((a = t.pageX), t.pageY),
                o = 0,
                r = window.pageXOffset,
                s = window.pageYOffset
              switch (this.mouseMoveMeasure) {
                case 'x':
                  0 < n.width && (o = (a - r - n.left) / n.width)
                  break
                case 'y':
                  0 < n.height && (o = (i - s - n.top) / n.height)
                  break
                case 'd_c':
                  var l,
                    u,
                    d = Math.sqrt(
                      Math.pow(n.width / 2, 2) + Math.pow(n.height / 2, 2),
                    )
                  0 < d &&
                    ((l = a - r - n.left - n.width / 2),
                    (u = i - s - n.top - n.height / 2),
                    (o = Math.sqrt(l * l + u * u) / d))
              }
              this.softSeek(e.duration() * o, this.softDelay)
            }
          }
        }),
        (g.prototype.playScrub = function (t) {
          var e, a, n
          j(this.data) ||
            ((e = this.getTimeline()),
            this._etc() &&
              (this.data.pdef && t.preventDefault(),
              this.data.sprop && t.stopPropagation(),
              (n = at((a = t.target).value, 0)),
              (t = 0),
              (t =
                'checkbox' == a.type
                  ? a.checked
                    ? 1
                    : 0
                  : (nt(n, this.smin, this.smax) - this.smin) /
                    (this.smax - this.smin)),
              this.softSeek(e.duration() * t, this.softDelay)))
        }),
        (g.prototype.isPlaying = function () {
          return this.timeline && M(this.timeline)
        }),
        (g.prototype.playScroll = function (t) {
          var e, a
          j(this.data) ||
            ((e = this.getTimeline()),
            this._etc() &&
              ((a = nt(
                window.pageYOffset /
                  (document.body.offsetHeight - window.innerHeight),
                0,
                1,
              )),
              this.softSeek(e.duration() * a, this.softDelay)))
        }),
        (g.prototype.seek = function (t, e, a) {
          var n
          j(this.data) ||
            ((n = this.getTimeline()),
            (t = Math.max(0, F(n, t))),
            e && 1 === n.progress() && (t = 0),
            this.delayTimer && clearTimeout(this.delayTimer),
            e ? n.play(t) : n.pause(t, a))
        }),
        (g.prototype.pause = function () {
          this.delayTimer &&
            (clearTimeout(this.delayTimer), (this.delayTimer = null)),
            this.timeline && this.timeline.pause()
        }),
        (g.prototype.softSeek = function (t, e) {
          var a = this.getTimeline()
          a._pg_seek_tween && a._pg_seek_tween.kill(),
            a.paused() || a.pause(),
            0 === e
              ? a.seek(t)
              : (a._pg_seek_tween = TweenMax.to(a, e, { time: t }))
        }),
        (g.prototype.rest = function (t) {
          var e = this.getTimeline()
          e._pg_seek_tween && e._pg_seek_tween.kill(),
            this.softSeek(F(e, this.restAt), this.softDelay)
        }),
        (g.prototype.refresh = function (t) {
          ;(this.data = t),
            this.delayTimer && clearTimeout(this.delayTimer),
            this.interval && clearInterval(this.interval)
          var e = this.timeline,
            t = 0
          e &&
            (e._pg_seek_tween && e._pg_seek_tween.kill(),
            (t = e.time()),
            e.seek(0),
            e.kill()),
            this.create(),
            0 < t && this.timeline.pause(t)
        }),
        (g.prototype.destroy = function (t) {
          switch (this.event) {
            case 'now':
            case 'timer':
            case 'no':
              break
            case 'load':
            case 'DOMContentLoaded':
            case 'resize':
            case 'popstate':
              window.removeEventListener(this.event, this._playBind)
              break
            case 'mousemove':
            case 'touchmove':
              'run' === this.mouseMoveMeasure
                ? this.element.removeEventListener(this.event, this._playBind)
                : (this.element.removeEventListener(
                    this.event,
                    this._playMouseMoveBind,
                  ),
                  this.element.removeEventListener(
                    'touchmove',
                    this._playMouseMoveBind,
                  ),
                  this.data.mm_r &&
                    (this.element.removeEventListener(
                      'mouseleave',
                      this._restBind,
                    ),
                    this.element.removeEventListener(
                      'touchend',
                      this._restBind,
                    )))
              break
            case 'input_scrub':
              this.element.removeEventListener('input', this._playScrubBind),
                (done = !0)
              break
            case 'swipe':
              u(this.element).remove(this.swipe.dir, this._playBind)
              break
            case 'scrolling':
              window.removeEventListener('scroll', this._playScrollBind)
              break
            default:
              this.element.removeEventListener(
                this.event.replace('res_', ''),
                this._playBind,
              )
          }
          this.touchEvent &&
            this.element.removeEventListener(this.touchEvent, this._playBind),
            this.delayTimer && clearTimeout(this.delayTimer),
            this.interval && clearInterval(this.interval),
            this.timeline &&
              !t &&
              (this.timeline.pause(0),
              this.timeline._pg_seek_tween &&
                this.timeline._pg_seek_tween.kill()),
            (this.timeline = null),
            this.mm_context &&
              !t &&
              (this.mm_context.kill(!0, D), (this.mm_context = null))
        }),
        ((m = function (t, e, a) {
          if (
            ((this.element = t),
            (this.animations = []),
            (this.named = {}),
            e && e.l)
          ) {
            for (var n = 0; n < e.l.length; n++) {
              var i = e.l[n].name || ''
              i &&
                'object' == typeof e.l[n].a &&
                (this.named[i] = { u: [], a: e.l[n].a })
            }
            for (n = 0; n < e.l.length; n++)
              'string' == typeof e.l[n].a &&
                this.named[e.l[n].a] &&
                (this.named[e.l[n].a].u.push(n),
                (e.l[n].a = this.named[e.l[n].a].a)),
                this.animations.push(new g(t, n, e.l[n], this))
          }
        }).prototype.find = function (t, e) {
          var a
          if (isNaN(t)) {
            var n = this.animations
            t = (t + '').toLowerCase()
            for (var i = 0; i < n.length; i++)
              if (t == n[i].name && !n[i].inactive_mq) {
                a = i
                break
              }
          } else (a = parseInt(t)), e && a--
          return this.animations[a] || null
        }),
        (m.prototype.play = function (t, e) {
          t = this.find(t)
          t && t.play(null, e)
        }),
        (m.prototype.seek = function (t, e, a) {
          t = this.find(t)
          t && t.seek(e, a)
        }),
        (m.prototype.refresh = function (n, t, e) {
          var a = t.l[n]
          if (
            (a.name && K(a.name, a.a), !e && a.name && 'object' == typeof a.a)
          ) {
            this.named[a.name] || (this.named[a.name] = { u: [] }),
              (this.named[a.name].a = a.a)
            for (var i = 0; i < this.named[a.name].u.length; i++)
              this.refresh(this.named[a.name].u[i], t, !0)
          }
          w(this.named, function (t, e) {
            var a = e.u.indexOf(n)
            0 <= a && e.u.splice(a, 1)
          }),
            'string' == typeof a.a &&
              this.named[a.a] &&
              (this.named[a.a].u.push(n), (a.a = this.named[a.a].a))
          e = this.find(n)
          e && e.refresh(a)
        }),
        (m.prototype.getData = function (t, e) {
          t = this.find(t)
          return t && e !== t ? t.data : null
        }),
        (m.prototype.pauseOther = function (e, a) {
          a = a.map(function (t) {
            return t.toLowerCase()
          })
          var n = 1
          this.animations.forEach(function (t) {
            ;((t !== e && (!a.length || 0 <= a.indexOf(n + ''))) ||
              (t.name && 0 <= a.indexOf(t.name))) &&
              t.pause(),
              n++
          })
        }),
        (m.prototype.destroy = function (t) {
          this.animations.forEach(function (t) {
            t.destroy()
          })
        }),
        (X.play = function (n, t, e, i) {
          e && !n._pg_animations && (n._pg_animations = new m(n, e)),
            n._pg_animations &&
              ut(t, function (t, e) {
                var a = n._pg_animations.find(t, !0)
                !a &&
                  X.namedAnimations[t] &&
                  ((t = { name: t, trg: 'no', a: X.namedAnimations[t] }),
                  (a = new g(
                    n,
                    n._pg_animations.animations.length,
                    t,
                    n._pg_animations,
                  )),
                  n._pg_animations.animations.push(a)),
                  a && ((i && a.isPlaying()) || a.play(null, e))
              })
        }),
        (X.pause = function (a, t, n) {
          a._pg_animations &&
            ut(t, function (t, e) {
              t = a._pg_animations.find(t, !0)
              t && t.timeline !== n && t.pause()
            })
        }),
        (X.seek = function (a, t, n, i) {
          a._pg_animations &&
            ut(t, function (t, e) {
              t = a._pg_animations.find(t, !0)
              t && t.seek(n, void 0 === i || i)
            })
        }),
        (X.recreate = function (a, t) {
          a._pg_animations &&
            ut(t, function (t, e) {
              t = a._pg_animations.find(t, !0)
              t && t.recreate()
            })
        }),
        (v = 'data-pg-ia-apply'),
        (_ = [
          'data-pg-ia',
          'data-pg-ia-scene',
          'data-pg-ia-hide',
          'data-pg-ia-show',
          'data-pg-ia-smooth-scroll',
        ]),
        (y = function (a) {
          var t = a.getAttribute(v)
          if (t && 'this' !== t)
            try {
              var n = []
              _.forEach(function (t) {
                var e
                a.hasAttribute(t) &&
                  ((e = a.getAttribute(t) || ''),
                  n.push({ a: t, v: e, d: I(e) }))
              }),
                $(V(a, t), function (e) {
                  a != e &&
                    n.forEach(function (t) {
                      e.hasAttribute(t.a)
                        ? 'data-pg-ia' == t.a && B(e, t.a, t)
                        : e.setAttribute(t.a, t.v)
                    })
                })
            } catch (t) {
              q(t)
            }
        }),
        $(document.querySelectorAll('[' + v + ']'), y),
        (X.applyToMany = function (t) {
          t.hasAttribute(v) && y(t), $(t.querySelectorAll('[' + v + ']'), y)
        }),
        (x = []),
        (b = window._pg_add_to_source_funcs = []),
        (X.add = function (e, t, i) {
          var o = {},
            r = R && window._pg_add_to_source,
            t = t ? V(document, t) : [document]
          $(t, function (t) {
            $(V(t, e), function (t) {
              for (var e in i)
                if (i.hasOwnProperty(e)) {
                  o[e] = o[e] || I(i[e])
                  var a = 'data-pg-ia'
                  if ('interactions' === e) {
                    var n = t.getAttribute(a)
                    if (n) {
                      B(t, a, o[e], n),
                        r &&
                          b.push(function () {
                            B(window._pg_animation_phone.getPgel(t), a, o[e], n)
                          })
                      continue
                    }
                  } else a += '-' + e
                  r &&
                    b.push(function () {
                      window._pg_animation_phone
                        .getPgel(t)
                        .setAttribute(a, i[e])
                    }),
                    t.setAttribute(a, i[e])
                }
              x.push(function () {
                i.interactions &&
                  X.elementAnimationsManager.refreshAnimations(t),
                  i.scene && X.scrollSceneManager.createScene(t),
                  i['smooth-scroll'] &&
                    X.smoothScrollManager &&
                    X.smoothScrollManager.create(t)
              })
            })
          })
        }),
        (X.update = function () {
          x.forEach(function (t) {
            t()
          }),
            (x = [])
        }),
        (X.refresh = function (t) {
          X.applyToMany(t),
            X.elementAnimationsManager.refreshAnimations(t, !0),
            X.scrollSceneManager.updateScene(t, !0)
        }),
        (X.elementAnimationsManager = new (function () {
          var a = this,
            n = !(this.play_list = [])
          function i() {
            var t = a.play_list
            ;(a.play_list = []),
              t.forEach(function (t) {
                try {
                  t.play()
                } catch (t) {}
              })
          }
          function o(t, e) {
            $(t.querySelectorAll('[data-pg-ia]'), e)
          }
          function r(t) {
            try {
              var e = t.getAttribute('data-pg-ia')
              e &&
                ((e = JSON.parse(E(e))),
                (t._pg_animations = new m(t, e)),
                !n && 0 < a.play_list.length && i())
            } catch (t) {
              q(t)
            }
          }
          ;(this.seek = function (t, e, a, n) {
            t && t._pg_animations && t._pg_animations.seek(e, a, n)
          }),
            (this.refreshCustomAnimation = function (t, e) {
              var a
              t._pg_animations &&
                ((a = JSON.parse(E(t.getAttribute('data-pg-ia')))),
                t._pg_animations.refresh(e, a))
            }),
            (this.refreshAnimations = function (t, e) {
              a.destroyAnimations(t), r(t), e && o(t, a.refreshAnimations)
            }),
            (this.destroyAnimations = function (t, e) {
              t._pg_animations && t._pg_animations.destroy(),
                e && o(t, a.destroyAnimations)
            }),
            (this.init = function () {
              ;(n = !0), o(document, r), (n = !1), i()
              var t = this
              setInterval(function () {
                t.play_list.length && i()
              }, 50)
            })
        })()),
        X.elementAnimationsManager.init(),
        (k = function (P, t) {
          var C,
            I,
            B,
            Y = this,
            N = [],
            s = -1,
            n = !1,
            i = null
          ;(this.destroy = function () {
            n ||
              (I &&
                (I._pg_seek_tween && I._pg_seek_tween.kill(),
                I.pause(0),
                I.kill()),
              B && B.kill(),
              N.forEach(function (t) {
                t.tl && (t.tl.pause(0), t.tl.kill())
              }),
              (N = []),
              C.kill(),
              (C = null),
              i && (i.kill(!0, D), (i = null)))
          }),
            (this.create = function () {
              var e, t, a
              try {
                e = JSON.parse(E(P.getAttribute('data-pg-ia-scene') || '{}'))
              } catch (t) {
                return void q(t)
              }
              ;(n = j(e)) ||
                ((t = W(e))
                  ? ((a = D.contexts.length),
                    D.add(t, function (t) {
                      return (
                        Y.createInner(e, !0),
                        function () {
                          ;(N = []), (C = null)
                        }
                      )
                    }),
                    (i = D.contexts[a]))
                  : Y.createInner(e))
            }),
            (this.createInner = function (n, e) {
              var l = J && !!n.redm,
                t = function (t) {
                  return it((t += ''), '-') ? '-=' + t.substr(1) : '+=' + t
                }
              ;(n.s = n.s || 'auto'),
                (n.dir = n.dir || 'a'),
                n.pin && 'onEnter' === n.s && (n.s = 'onLeave')
              var a,
                i,
                o = P,
                r = null
              'auto' === n.s
                ? ((a = 'start end'), (i = 'start start'))
                : 'custom' === n.s
                ? ((a = n.s_t || 'top'),
                  (a += ' ' + (n.s_s || 'top')),
                  n.s_o && (a += t(n.s_o)),
                  (i = n.e_t || ''),
                  (i = (i += ' ' + (n.e_s || '')).trim()),
                  n.e_o && (i += t(n.e_o)),
                  n.s_scroller && (r = V(P, n.s_scroller)[0]))
                : 'whole' === n.s
                ? ((r = P), (o = null), (a = 0))
                : ((a = {
                    onEnter: { s: 'start end', e: '' },
                    onCenter: { s: 'start center', e: '' },
                    onLeave: { s: 'start start', e: '' },
                  }[n.s].s),
                  (i = '+=' + (n.d || '200%')),
                  n.o &&
                    ((u = it((u = n.o + ''), '-') ? u.substr(1) : '-' + u),
                    (a += t(u)))),
                r || !(c = o.parentNode) || ((d = rt(c)) && (r = d.scroller)),
                (r !== document.body && r !== document.documentElement) ||
                  (r = null)
              t = F(null, n.smooth, 0.5)
              0 === t ? (t = !0) : void 0 === t && (t = 0.5),
                'a' === n.dir && (n.dir = U(r))
              var s = 'h' === n.dir,
                u = function (t) {
                  return (
                    'string' == typeof t &&
                      (t = s
                        ? t.replace(/start/g, 'left').replace(/end/g, 'right')
                        : t.replace(/start/g, 'top').replace(/end/g, 'bottom')),
                    t
                  )
                }
              ;(a = u(a)), (i = u(i))
              var d,
                c = !1
              ;(n.snap || '').length &&
                ((c =
                  'e' === n.snap
                    ? {
                        snapTo: function (t, e) {
                          return 1 == e.progress
                            ? 1
                            : H(
                                null,
                                e.scroller,
                                s,
                                T < 0,
                                !0,
                                n.snap_sel || null,
                                e,
                                !1,
                              ).p -
                                e.pgTopCover / (e.end - e.start)
                        },
                      }
                    : { snapTo: n.snap.split(',').map(at) }),
                (d = F(null, n.snap_dur || 0)),
                (u = F(null, n.snap_durmax || 0)),
                d &&
                  ((c.duration = 0 < u ? { min: d, max: u } : d),
                  l && (c.duration = 0.01)),
                (d = F(null, n.snap_del || (!0 !== t ? t + 0.1 : 0.3))) &&
                  (c.delay = d),
                !0 !== t &&
                  d < t &&
                  (q(
                    'Scroll scene smoothing delay ' +
                      t +
                      ' should not be longer than snap delay ' +
                      d +
                      '! Adjusting...',
                  ),
                  (c.delay = t + 0.1)),
                n.snap_ease && (c.ease = n.snap_ease))
              var p,
                h,
                f,
                g,
                m,
                v,
                _,
                y,
                w,
                A,
                x,
                b,
                k,
                O,
                T = 0,
                t = {
                  trigger: o,
                  start: function () {
                    return a
                  },
                  endTrigger: V(o, n.e_target)[0],
                  end: i,
                  pin: !l && !!n.pin && (V(P, n.pint)[0] || P),
                  scrub: t,
                  horizontal: s,
                  markers:
                    !!n.dbg && (R || P.hasAttribute('data-pgia-show-markers')),
                  snap: c,
                  onRefresh: function (t) {
                    O && k() && O(C)
                  },
                  onUpdate: function (t) {
                    O && O(t)
                  },
                  onSnapComplete: function (t) {
                    Y.inf && 1 == t.progress && t.scroll(0)
                  },
                  onEnter: function (t) {
                    E.call(I)
                  },
                }
              r && (t.scroller = r),
                t.pin &&
                  (n.pin_type && (t.pinType = n.pin_type),
                  n.pin_body && (t.pinReparent = !0),
                  'auto' == (c = n.pin_spc || 'auto')
                    ? ('flex' !=
                        (r = window.getComputedStyle(t.pin.parentNode))
                          .display &&
                        'absolute' != r.position) ||
                      (c = 'margin')
                    : 'false' == c && (c = !1),
                  'auto' != c && 'padding' != c && (t.pinSpacing = c)),
                (this.inf = n.pag_inf || !1),
                n.pag &&
                  ((m = g = null),
                  (v = 'p' == n.pag),
                  (_ = s ? 'width' : 'height'),
                  (y = s ? 'left' : 'top'),
                  (A = n.pag_clone),
                  (b = 1e3 * F((x = null), G(n, 'pag_delay', 0.1))),
                  l && (b = 10),
                  (k = function () {
                    ;(f = ot(P, n.pag_t)),
                      console.log('pag_max_page', f['ps' + _] / f.p[_]),
                      (w = Math.floor(f['ps' + _] / f.p[_] + 0.1)),
                      (p = V(P, n.pag_t)),
                      (h = V(P, n.pag_i))
                    var t,
                      e = v ? w : p.length
                    Y.inf && e--,
                      A &&
                        (null === x && (x = h[0].outerHTML),
                        e < (t = h.length)
                          ? gsap.set(Q(h, e, t), { pgDom: { remove: !0 } })
                          : t < e &&
                            gsap.set(h[0], {
                              pgDom: { template: x, count: e - t },
                            }),
                        (h = V(P, n.pag_i)))
                    var a = 0
                    return (
                      $(h, function (t) {
                        t.setAttribute('data-item-idx', a++)
                      }),
                      !0
                    )
                  }),
                  (O = function (e) {
                    e.getVelocity(),
                      (m =
                        m ||
                        setTimeout(function () {
                          var t
                          ;(m = null),
                            C &&
                              ((t = ot(P, n.pag_t, !0)),
                              (t = v
                                ? Math.floor(t['sp' + y] / t.p[_] + 0.1)
                                : H(f, null, s, 'c', !0, null, e).idx),
                              Y.inf && t >= (v ? w - 1 : h.length) && (t = 0),
                              (t = h[t]),
                              g != t &&
                                (n.pag_pd && g && X.play(g, n.pag_pd),
                                n.pag_pa && t && X.play(t, n.pag_pa),
                                (g = t)))
                        }, b))
                  }))
              var E = function (t) {
                var e
                ;(t = this.pgPinScrollTrigger || this.scrollTrigger) &&
                  (0 !== (e = t.getVelocity()) && (T = e),
                  Y.seek(this.progress(), t.direction, 0),
                  S && ((t = this.progress()), Z.updateProgress(S, t, t)))
              }
              t.pin
                ? ((B = gsap.timeline({
                    scrollTrigger: t,
                    onUpdate: function () {
                      var t = this.progress() * I.duration()
                      t < 0.001 && (t = 0), I.seek(t, !1)
                    },
                  })),
                  (I = gsap.timeline({ onUpdate: E })),
                  (C = I.pgPinScrollTrigger = B.scrollTrigger),
                  B.to({}, 100, {}, 0),
                  I.pause(),
                  gsap.globalTimeline.add(I))
                : ((I = gsap.timeline({ scrollTrigger: t, onUpdate: E })),
                  (C = I.scrollTrigger)),
                (this.st = C),
                (this.st.pgInf = this.inf),
                (this.st.pgHor = s),
                (C.pgTopCover = G(n, 'pag_tc', 0)),
                (C.pgBottomCover = G(n, 'pag_bc', 0)),
                I.to({}, 100, {}, 0),
                (N = [])
              var S,
                M = n.l
              if (M && 0 < M.length)
                for (var L = 0; L < M.length; L++)
                  !(function (s) {
                    var a, t
                    j(s)
                      ? N.push({ disabled: !0 })
                      : ((a = function () {
                          var t,
                            e,
                            a,
                            n,
                            i,
                            o = V(P, s.t),
                            r = tt(s.a, o)
                          return (
                            s.name && K(s.name, s.a),
                            r &&
                              ((e = -1),
                              (a = !(t = 0)),
                              (n = 0),
                              (r._pg_animation_id = R
                                ? Z.getAnimationId([P], 'scene_item_' + L)
                                : null),
                              'scroll' === G(s, 'p', 'scroll')
                                ? ((t = parseFloat(G(s, 's', 0))),
                                  (n = parseFloat(G(s, 'sc_d', 100 - t))),
                                  r.duration(n),
                                  I.add(r, t),
                                  r.play())
                                : (r.pause(),
                                  null !== (i = G(s, 't_d', null)) &&
                                    r.duration(parseFloat(i)),
                                  (t = parseFloat(G(s, 's', 0)) / 100),
                                  (i = G(s, 'sc_dir', 'down')),
                                  (e = s.rev
                                    ? 'down' === i
                                      ? Math.min(0.9, t + 0.5)
                                      : Math.max(0, t - 0.5)
                                    : -1),
                                  (a = !1),
                                  l && 0.01 < r.duration() && r.duration(0.01)),
                              (i = {
                                start: t,
                                duration: n,
                                tl: r,
                                animation_idx: L,
                                scroll: a,
                                reverse_at: e,
                                elements: o,
                                dir: i,
                                rep: s.rep || !1,
                                name: s.name || '',
                                inv: s.inv || !1,
                                a: s.a,
                                rec:
                                  s.rec || et(s.a)
                                    ? function (t) {
                                        t.tl.kill(),
                                          (t.tl = tt(t.a, t.elements))
                                      }
                                    : null,
                              }),
                              N.push(i),
                              R &&
                                r.eventCallback('onUpdate', function () {
                                  Z.updateProgress(
                                    this._pg_animation_id,
                                    this.time(),
                                    this.progress(),
                                  )
                                })),
                            i
                          )
                        }),
                        (t = W(s)) && !e
                          ? D.add(t, function (t) {
                              var e = a()
                              return function () {
                                var t
                                !e ||
                                  (0 <= (t = N.indexOf(e)) && N.splice(t, 1))
                              }
                            })
                          : a())
                  })(M[L])
              R && (S = Z.getAnimationId(P, 'scene')), n.pin
            }),
            (this.scroll = function (t) {
              n || C.scroll(t)
            }),
            (this.seek = function (i, t, o) {
              var r
              n ||
                (N.forEach(function (t) {
                  t.detached &&
                    !t.disabled &&
                    (t.tl.duration(t.duration),
                    I.add(t.tl, t.start),
                    t.tl.play(),
                    (t.detached = !1))
                }),
                (i = Math.round(100 * i) / 100),
                'down' == (r = -1 === t ? 'up' : 'down') &&
                  (i < s || 0 == s) &&
                  (s = -0.1),
                'up' == r && s < i && (s = 1.1),
                N.forEach(function (t) {
                  var e, a, n
                  t.disabled ||
                    ((e = t.rep ? 0 : void 0),
                    (n = t.tl.progress()),
                    (a = Math.max(o, t.start)),
                    (n = t.inv && (0 === n || 0 === e)),
                    t.scroll ||
                      ('down' == r
                        ? 0 <= t.dir.indexOf('down')
                          ? ((s < a && a <= i && !M(t.tl)) ||
                              (a <= i && t.tl.reversed())) &&
                            (n && t.tl.invalidate(),
                            t.rec && t.rec(t),
                            t.tl.play(e),
                            0 <= t.reverse_at && (t.reverse_at = i))
                          : 0 <= t.reverse_at &&
                            t.reverse_at <= i &&
                            !t.tl.reversed() &&
                            (t.rec && t.rec(t), t.tl.reverse())
                        : 0 <= t.dir.indexOf('up')
                        ? ((a < s && i <= a && !M(t.tl)) ||
                            (i <= a && t.tl.reversed())) &&
                          (n && t.tl.invalidate(),
                          t.rec && t.rec(t),
                          t.tl.play(e),
                          0 <= t.reverse_at && (t.reverse_at = i))
                        : 0 <= t.reverse_at &&
                          t.reverse_at >= i &&
                          !t.tl.reversed() &&
                          (t.rec && t.rec(t), t.tl.reverse())))
                }),
                (s = i))
            }),
            (this.seekAnimation = function (t, e, a) {
              for (var n = 0; n < N.length; n++)
                if (N[n].animation_idx === t && !N[n].disabled) {
                  var i = N[n].tl,
                    o = Math.max(0, F(i, e))
                  N[n].scroll &&
                    a &&
                    !N[n].detached &&
                    (I.remove(i),
                    gsap.globalTimeline.add(i),
                    i.timeScale(1),
                    (N[n].detached = !0)),
                    a && 1 === i.progress() && (o = 0),
                    a ? i.play(o) : i.pause(o)
                  break
                }
            }),
            (this.refreshAnimation = function (t) {
              for (var e = !1, a = 0; a < N.length; a++)
                if (N[a].animation_idx === t && !N[a].disabled)
                  try {
                    e = !0
                    var n = N[a].tl.time(),
                      i = (i = JSON.parse(
                        E(P.getAttribute('data-pg-ia-scene')),
                      )).l[a],
                      o = V(P, i.t),
                      r = tt(i.a, o)
                    i.name && K(i.name, i.a),
                      'scroll' === G(i, 'p', 'scroll')
                        ? ((N[a].detached = !1),
                          r.duration(N[a].duration),
                          I.add(r, N[a].start),
                          r.play())
                        : r.pause(Math.min(n, r.duration())),
                      N[a].tl.pause(0),
                      N[a].tl.kill(),
                      (N[a].tl = r),
                      (N[a].elements = o),
                      R &&
                        ((r._pg_animation_id = Z.getAnimationId(
                          [P],
                          'scene_item_' + t,
                        )),
                        r.eventCallback('onUpdate', function () {
                          Z.updateProgress(
                            this._pg_animation_id,
                            this.time(),
                            this.progress(),
                          )
                        }))
                  } catch (t) {
                    return q(t), !0
                  }
              return e
            }),
            this.create()
        }),
        (X.scrollSceneManager = new (function () {
          var t = this,
            n = []
          function i(t, e) {
            $(t.querySelectorAll('[data-pg-ia-scene]'), e)
          }
          function a(t, e) {
            if ((o(t), !t.hasAttribute('data-pg-ia-scene'))) return null
            ;(t._pg_scroll_scene = new k(t)), n.indexOf(t) < 0 && n.push(t)
          }
          function o(t, e) {
            t._pg_scroll_scene && t._pg_scroll_scene.destroy(),
              (t._pg_scroll_scene = null)
            var a = n.indexOf(t)
            0 <= a && n.splice(a, 1), e && i(t, o)
          }
          ;(this.removeScene = o),
            (this.createScene = a),
            (this.updateScene = function (t, e) {
              a(t, !0), e && i(t, a)
            }),
            (this.getScene = function (t) {
              return t._pg_scroll_scene || null
            }),
            (this.scrollScene = function (t, e) {
              t._pg_scroll_scene && t._pg_scroll_scene.scroll(e)
            }),
            (this.seekAnimation = function (t, e, a, n) {
              t._pg_scroll_scene && t._pg_scroll_scene.seekAnimation(e, a, n)
            }),
            (this.refreshAnimation = function (t, e) {
              t._pg_scroll_scene &&
                (t._pg_scroll_scene.refreshAnimation(e) || this.updateScene(t))
            }),
            (this.init = function () {
              this.removeAll(), i(document, a)
            }),
            (this.removeAll = function () {
              n.slice(0).forEach(function (t) {
                o(t)
              })
            }),
            window.addEventListener('load', function () {
              t.init()
            })
        })()),
        (O = function (e, t) {
          var a,
            n,
            i = !1,
            o = null,
            r =
              window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.oRequestAnimationFrame ||
              window.msRequestAnimationFrame,
            t = { slow: 10, normal: 30, fast: 60 }[t.spd || 'normal']
          'HTML' === e.nodeName || 'BODY' === e.nodeName
            ? ((i = !0),
              ScrollTrigger.normalizeScroll({
                type: 'touch,wheel',
                wheelSpeed: t / 30,
                scrollSpeed: t / 30,
                ignore: document.querySelectorAll(
                  '[data-pg-ia-smooth-scroll]:not(html)',
                ),
              }))
            : ((a = e.scrollTop),
              (n = function () {
                0
                var t =
                  0 < (t = (a - e.scrollTop) / 6) ? Math.ceil(t) : Math.floor(t)
                ;(e.scrollTop += t), 0.5 < Math.abs(t) && r && r(n)
              }),
              (o = ScrollTrigger.observe({
                target: e,
                type: 'wheel,touch',
                wheelSpeed: t / 30,
                onWheel: function (t) {
                  t.event.preventDefault(), (a = e.scrollTop + t.deltaY), n()
                },
              }))),
            (this.destroy = function () {
              i ? ScrollTrigger.normalizeScroll(!1) : o.kill()
            })
        }),
        (X.smoothScrollManager = new (function () {
          ;(this.init = function () {
            $(
              document.querySelectorAll('[data-pg-ia-smooth-scroll]'),
              function (t) {
                e(t)
              },
            )
          }),
            (this.refresh = function (t) {
              t._pg_smooth_scroll &&
                (t._pg_smooth_scroll.destroy(), (t._pg_smooth_scroll = null)),
                e(t)
            })
          var e = function (t) {
            try {
              var e
              t.hasAttribute('data-pg-ia-smooth-scroll') &&
                ((e = JSON.parse(
                  E(t.getAttribute('data-pg-ia-smooth-scroll') || '{}'),
                )),
                (t._pg_smooth_scroll = new O(t, e)))
            } catch (t) {
              q(t)
            }
          }
        })()),
        X.smoothScrollManager.init())
      : console && console.log('Pinegrow Interactions are not supported.')
})()
