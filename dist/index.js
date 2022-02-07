var TabTitle=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,n,e,r){return t[1]&&r?function(t,n){for(const e in n)t[e]=n[e];return t}(e.ctx.slice(),t[1](r(n))):e.ctx}function d(t,n){t.appendChild(n)}function l(t,n,e){const r=function(t){if(!t)return document;const n=t.getRootNode?t.getRootNode():t.ownerDocument;if(n&&n.host)return n;return t.ownerDocument}(t);if(!r.getElementById(n)){const t=a("style");t.id=n,t.textContent=e,function(t,n){d(t.head||t,n)}(r,t)}}function u(t,n,e){t.insertBefore(n,e||null)}function s(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function f(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function $(t){return document.createTextNode(t)}function h(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function p(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function g(t,n,e,r){null===e?t.style.removeProperty(n):t.style.setProperty(n,e,r?"important":"")}function m(t,n,e){t.classList[e?"add":"remove"](n)}let y;function v(t){y=t}function w(t){(function(){if(!y)throw new Error("Function called outside component initialization");return y})().$$.on_mount.push(t)}function x(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t.call(this,n)))}const b=[],k=[],L=[],_=[],C=Promise.resolve();let B=!1;function E(){B||(B=!0,C.then(A))}function W(t){L.push(t)}const T=new Set;let M=0;function A(){const t=y;do{for(;M<b.length;){const t=b[M];M++,v(t),N(t.$$)}for(v(null),b.length=0,M=0;k.length;)k.pop()();for(let t=0;t<L.length;t+=1){const n=L[t];T.has(n)||(T.add(n),n())}L.length=0}while(b.length);for(;_.length;)_.pop()();B=!1,T.clear(),v(t)}function N(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(W)}}const X=new Set;function I(t,n){t&&t.i&&(X.delete(t),t.i(n))}function j(i,c,d,l,u,a,f,$=[-1]){const h=y;v(i);const p=i.$$={fragment:null,ctx:null,props:a,update:t,not_equal:u,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c.context||(h?h.$$.context:[])),callbacks:e(),dirty:$,skip_bound:!1,root:c.target||h.$$.root};f&&f(p.root);let g=!1;if(p.ctx=d?d(i,c.props||{},((t,n,...e)=>{const r=e.length?e[0]:n;return p.ctx&&u(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),g&&function(t,n){-1===t.$$.dirty[0]&&(b.push(t),E(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(i,t)),n})):[],p.update(),g=!0,r(p.before_update),p.fragment=!!l&&l(p.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);p.fragment&&p.fragment.l(t),t.forEach(s)}else p.fragment&&p.fragment.c();c.intro&&I(i.$$.fragment),function(t,e,i,c){const{fragment:d,on_mount:l,on_destroy:u,after_update:s}=t.$$;d&&d.m(e,i),c||W((()=>{const e=l.map(n).filter(o);u?u.push(...e):r(e),t.$$.on_mount=[]})),s.forEach(W)}(i,c.target,c.anchor,c.customElement),A()}v(h)}function H(t){l(t,"svelte-w6xcva","div.booknote.svelte-w6xcva{width:100%;position:relative}svg.shape.svelte-w6xcva{width:100%;height:100%}svg.shape.inversed.svelte-w6xcva{transform:scaleY(-1)}div.content.svelte-w6xcva{position:absolute;top:0;height:auto;width:auto;margin-left:50%}div.content.left.svelte-w6xcva{margin-left:0}div.content.right.svelte-w6xcva{margin-left:100%}")}function O(t){let n;return{c(){n=f("defs")},m(e,r){u(e,n,r),n.innerHTML=t[2]},p(t,e){4&e[0]&&(n.innerHTML=t[2])},d(t){t&&s(n)}}}function P(t){let n,e;return{c(){n=f("path"),p(n,"fill","none"),p(n,"stroke",t[1]),p(n,"stroke-width",t[22]),p(n,"d",e="\r\n            M 0 "+t[16]+"\r\n            L "+t[9]+" "+t[16]+"\r\n            C "+t[17]+" "+t[16]+" "+t[18]+" "+t[8]+" "+t[6]+" "+t[8]+"\r\n            L "+t[7]+" "+t[8]+"\r\n            C "+t[20]+" "+t[8]+" "+t[19]+" "+t[16]+" "+t[10]+" "+t[16]+"\r\n            L "+t[11]+" "+t[16]+"\r\n            ")},m(t,e){u(t,n,e)},p(t,r){2&r[0]&&p(n,"stroke",t[1]),2035648&r[0]&&e!==(e="\r\n            M 0 "+t[16]+"\r\n            L "+t[9]+" "+t[16]+"\r\n            C "+t[17]+" "+t[16]+" "+t[18]+" "+t[8]+" "+t[6]+" "+t[8]+"\r\n            L "+t[7]+" "+t[8]+"\r\n            C "+t[20]+" "+t[8]+" "+t[19]+" "+t[16]+" "+t[10]+" "+t[16]+"\r\n            L "+t[11]+" "+t[16]+"\r\n            ")&&p(n,"d",e)},d(t){t&&s(n)}}}function R(t){let n,e,o,i,l,y,v,w,x,b,k=t[2]&&O(t),L=t[1]&&P(t);const _=t[40].default,C=function(t,n,e,r){if(t){const o=c(t,n,e,r);return t[0](o)}}(_,t,t[39],null),B=C||function(t){let n;return{c(){n=$("An exampe Booknote")},m(t,e){u(t,n,e)},d(t){t&&s(n)}}}();return{c(){n=a("div"),e=f("svg"),k&&k.c(),o=f("path"),L&&L.c(),y=$(" "),v=a("div"),B&&B.c(),p(o,"stroke","none"),p(o,"fill",t[21]),p(o,"d",i="\r\n          M 0 "+t[16]+"\r\n          L "+t[9]+" "+t[16]+"\r\n          C "+t[17]+" "+t[16]+" "+t[18]+" "+t[8]+" "+t[6]+" "+t[8]+"\r\n          L "+t[7]+" "+t[8]+"\r\n          C "+t[20]+" "+t[8]+" "+t[19]+" "+t[16]+" "+t[10]+" "+t[16]+"\r\n          L "+t[11]+" "+t[16]+"\r\n          L "+t[11]+" "+t[12]+"\r\n          L 0 "+t[12]+"\r\n          Z\r\n          "),p(e,"class","shape svelte-w6xcva"),p(e,"xmlns","http://www.w3.org/2000/svg"),p(e,"viewBox",l="0 0 "+t[11]+" "+t[12]),p(e,"preserveAspectRatio","none"),m(e,"inversed",t[3]),p(v,"class","content svelte-w6xcva"),g(v,"transform","translateX(calc("+t[15]+"% + "+t[4]+"px))"),m(v,"left","left"===t[5]),m(v,"right","right"===t[5]),p(n,"class","booknote svelte-w6xcva"),g(n,"height",t[0]+"px")},m(r,i){u(r,n,i),d(n,e),k&&k.m(e,null),d(e,o),L&&L.m(e,null),d(n,y),d(n,v),B&&B.m(v,null),t[43](v),t[44](n),w=!0,x||(b=[h(window,"resize",t[42]),h(n,"click",t[41])],x=!0)},p(t,r){t[2]?k?k.p(t,r):(k=O(t),k.c(),k.m(e,o)):k&&(k.d(1),k=null),(!w||2097152&r[0])&&p(o,"fill",t[21]),(!w||2039744&r[0]&&i!==(i="\r\n          M 0 "+t[16]+"\r\n          L "+t[9]+" "+t[16]+"\r\n          C "+t[17]+" "+t[16]+" "+t[18]+" "+t[8]+" "+t[6]+" "+t[8]+"\r\n          L "+t[7]+" "+t[8]+"\r\n          C "+t[20]+" "+t[8]+" "+t[19]+" "+t[16]+" "+t[10]+" "+t[16]+"\r\n          L "+t[11]+" "+t[16]+"\r\n          L "+t[11]+" "+t[12]+"\r\n          L 0 "+t[12]+"\r\n          Z\r\n          "))&&p(o,"d",i),t[1]?L?L.p(t,r):(L=P(t),L.c(),L.m(e,null)):L&&(L.d(1),L=null),(!w||6144&r[0]&&l!==(l="0 0 "+t[11]+" "+t[12]))&&p(e,"viewBox",l),8&r[0]&&m(e,"inversed",t[3]),C&&C.p&&(!w||256&r[1])&&function(t,n,e,r,o,i){if(o){const d=c(n,e,r,i);t.p(d,o)}}(C,_,t,t[39],w?function(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(void 0===n.dirty)return o;if("object"==typeof o){const t=[],e=Math.max(n.dirty.length,o.length);for(let r=0;r<e;r+=1)t[r]=n.dirty[r]|o[r];return t}return n.dirty|o}return n.dirty}(_,t[39],r,null):function(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}(t[39]),null),(!w||32784&r[0])&&g(v,"transform","translateX(calc("+t[15]+"% + "+t[4]+"px))"),32&r[0]&&m(v,"left","left"===t[5]),32&r[0]&&m(v,"right","right"===t[5]),(!w||1&r[0])&&g(n,"height",t[0]+"px")},i(t){w||(I(B,t),w=!0)},o(t){!function(t,n,e,r){if(t&&t.o){if(X.has(t))return;X.add(t),(void 0).c.push((()=>{X.delete(t),r&&(e&&t.d(1),r())})),t.o(n)}}(B,t),w=!1},d(e){e&&s(n),k&&k.d(),L&&L.d(),B&&B.d(e),t[43](null),t[44](null),x=!1,r(b)}}}function S(t,n,e){let r,o,{$$slots:i={},$$scope:c}=n,{borderColor:d=null}=n,{borderWidth:l=0}=n,{backgroundColor:u="#BBB"}=n,{pattern:s=null}=n,{patternId:a="pattern"}=n,{width:f=null}=n,{height:$=null}=n,{depth:h=80}=n,{roundTop:p=50}=n,{roundBottom:g=50}=n,{curveWidth:m=50}=n,{padding:y=0}=n,{inversed:v=!1}=n,{shiftX:b=0}=n,{align:L="center"}=n,_=l,B=0,W=0,T=0,M=0,A=0,N=0,X=0,I=0,j=0,H=0,O=0,P=0,R=0,S=0,z=0,D=0,Z=0,q=0,F=1e3,Y=100,G=null;function J(){e(33,B=r.clientWidth),W=o.clientWidth,e(34,T=o.clientHeight),null===f&&e(24,f=W),null===$&&e(0,$=T)}w((async()=>{await(E(),C),J()}));return t.$$set=t=>{"borderColor"in t&&e(1,d=t.borderColor),"borderWidth"in t&&e(25,l=t.borderWidth),"backgroundColor"in t&&e(26,u=t.backgroundColor),"pattern"in t&&e(2,s=t.pattern),"patternId"in t&&e(27,a=t.patternId),"width"in t&&e(24,f=t.width),"height"in t&&e(0,$=t.height),"depth"in t&&e(28,h=t.depth),"roundTop"in t&&e(29,p=t.roundTop),"roundBottom"in t&&e(30,g=t.roundBottom),"curveWidth"in t&&e(31,m=t.curveWidth),"padding"in t&&e(32,y=t.padding),"inversed"in t&&e(3,v=t.inversed),"shiftX"in t&&e(4,b=t.shiftX),"align"in t&&e(5,L=t.align),"$$scope"in t&&e(39,c=t.$$scope)},t.$$.update=()=>{32&t.$$.dirty[0]&&e(38,P="center"===L?.5:"left"===L?0:1),32&t.$$.dirty[0]&&e(36,H="center"===L?.5:"left"===L?0:1),32&t.$$.dirty[0]&&e(37,O="center"===L?.5:1),16777216&t.$$.dirty[0]|2&t.$$.dirty[1]&&e(35,j=f+2*y),4&t.$$.dirty[1]&&e(11,F=B),2064&t.$$.dirty[0]|176&t.$$.dirty[1]&&e(6,A=F*P-j*H+b),2064&t.$$.dirty[0]|208&t.$$.dirty[1]&&e(7,N=F*P+j*O+b),64&t.$$.dirty[0]|1&t.$$.dirty[1]&&e(9,R=A-m),1073742336&t.$$.dirty[0]|1&t.$$.dirty[1]&&e(17,S=R+m*g/100),536870976&t.$$.dirty[0]|1&t.$$.dirty[1]&&e(18,z=A-m*p/100),128&t.$$.dirty[0]|1&t.$$.dirty[1]&&e(10,D=N+m),1073742848&t.$$.dirty[0]|1&t.$$.dirty[1]&&e(19,Z=D-m*g/100),536871040&t.$$.dirty[0]|1&t.$$.dirty[1]&&e(20,q=N+m*p/100),256&t.$$.dirty[0]&&e(8,X+=_),8&t.$$.dirty[1]&&e(12,Y=T),268439552&t.$$.dirty[0]&&e(16,I=Y*h/100),201326596&t.$$.dirty[0]&&e(21,G=s?"url(#"+a+")":u),32&t.$$.dirty[0]&&e(15,M="center"===L?-50:"left"===L?0:-100)},[$,d,s,v,b,L,A,N,X,R,D,F,Y,r,o,M,I,S,z,Z,q,G,_,J,f,l,u,a,h,p,g,m,y,B,T,j,H,O,P,c,i,function(n){x.call(this,t,n)},()=>J(),function(t){k[t?"unshift":"push"]((()=>{o=t,e(14,o)}))},function(t){k[t?"unshift":"push"]((()=>{r=t,e(13,r)}))}]}return class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),j(this,t,S,R,i,{borderColor:1,borderWidth:25,backgroundColor:26,pattern:2,patternId:27,width:24,height:0,depth:28,roundTop:29,roundBottom:30,curveWidth:31,padding:32,inversed:3,shiftX:4,align:5},H,[-1,-1])}}}();
