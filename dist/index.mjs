function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e,n,r){return t[1]&&r?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](r(e))):n.ctx}function c(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function d(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function $(t){return document.createTextNode(t)}function f(){return $(" ")}function p(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t,e,n,r){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function v(t,e,n){t.classList[n?"add":"remove"](e)}let g;function y(t){g=t}function x(t){(function(){if(!g)throw new Error("Function called outside component initialization");return g})().$$.on_mount.push(t)}function w(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const z=[],b=[],C=[],k=[],L=Promise.resolve();let _=!1;function M(){_||(_=!0,L.then(B))}function T(t){C.push(t)}const W=new Set;let H=0;function B(){const t=g;do{for(;H<z.length;){const t=z[H];H++,y(t),E(t.$$)}for(y(null),z.length=0,H=0;b.length;)b.pop()();for(let t=0;t<C.length;t+=1){const e=C[t];W.has(e)||(W.add(e),e())}C.length=0}while(z.length);for(;k.length;)k.pop()();_=!1,W.clear(),y(t)}function E(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const O=new Set;function A(t,e){t&&t.i&&(O.delete(t),t.i(e))}function S(t,e,n,r){if(t&&t.o){if(O.has(t))return;O.add(t),undefined.c.push((()=>{O.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function X(t){t&&t.c()}function I(t,n,s,l){const{fragment:c,on_mount:i,on_destroy:u,after_update:a}=t.$$;c&&c.m(n,s),l||T((()=>{const n=i.map(e).filter(o);u?u.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(T)}function V(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function j(e,o,s,l,c,i,a,d=[-1]){const $=g;y(e);const f=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||($?$.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:o.target||$.$$.root};a&&a(f.root);let p=!1;if(f.ctx=s?s(e,o.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return f.ctx&&c(f.ctx[t],f.ctx[t]=o)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](o),p&&function(t,e){-1===t.$$.dirty[0]&&(z.push(t),M(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],f.update(),p=!0,r(f.before_update),f.fragment=!!l&&l(f.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);f.fragment&&f.fragment.l(t),t.forEach(u)}else f.fragment&&f.fragment.c();o.intro&&A(e.$$.fragment),I(e,o.target,o.anchor,o.customElement),B()}y($)}class P{$destroy(){V(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function N(t){let e;return{c(){e=d("defs")},m(n,r){i(n,e,r),e.innerHTML=t[2]},p(t,n){4&n[0]&&(e.innerHTML=t[2])},d(t){t&&u(e)}}}function U(t){let e,n;return{c(){e=d("path"),h(e,"fill","none"),h(e,"stroke",t[1]),h(e,"stroke-width",t[22]),h(e,"d",n="\r\n            M 0 "+t[16]+"\r\n            L "+t[9]+" "+t[16]+"\r\n            C "+t[17]+" "+t[16]+" "+t[18]+" "+t[8]+" "+t[6]+" "+t[8]+"\r\n            L "+t[7]+" "+t[8]+"\r\n            C "+t[20]+" "+t[8]+" "+t[19]+" "+t[16]+" "+t[10]+" "+t[16]+"\r\n            L "+t[11]+" "+t[16]+"\r\n            ")},m(t,n){i(t,e,n)},p(t,r){2&r[0]&&h(e,"stroke",t[1]),2035648&r[0]&&n!==(n="\r\n            M 0 "+t[16]+"\r\n            L "+t[9]+" "+t[16]+"\r\n            C "+t[17]+" "+t[16]+" "+t[18]+" "+t[8]+" "+t[6]+" "+t[8]+"\r\n            L "+t[7]+" "+t[8]+"\r\n            C "+t[20]+" "+t[8]+" "+t[19]+" "+t[16]+" "+t[10]+" "+t[16]+"\r\n            L "+t[11]+" "+t[16]+"\r\n            ")&&h(e,"d",n)},d(t){t&&u(e)}}}function Z(t){let e,n,o,s,g,y,x,w,z,b,C=t[2]&&N(t),k=t[1]&&U(t);const L=t[40].default,_=function(t,e,n,r){if(t){const o=l(t,e,n,r);return t[0](o)}}(L,t,t[39],null),M=_||function(t){let e;return{c(){e=$("An exampe Booknote")},m(t,n){i(t,e,n)},d(t){t&&u(e)}}}();return{c(){e=a("div"),n=d("svg"),C&&C.c(),o=d("path"),k&&k.c(),y=f(),x=a("div"),M&&M.c(),h(o,"stroke","none"),h(o,"fill",t[21]),h(o,"d",s="\r\n          M 0 "+t[16]+"\r\n          L "+t[9]+" "+t[16]+"\r\n          C "+t[17]+" "+t[16]+" "+t[18]+" "+t[8]+" "+t[6]+" "+t[8]+"\r\n          L "+t[7]+" "+t[8]+"\r\n          C "+t[20]+" "+t[8]+" "+t[19]+" "+t[16]+" "+t[10]+" "+t[16]+"\r\n          L "+t[11]+" "+t[16]+"\r\n          L "+t[11]+" "+t[12]+"\r\n          L 0 "+t[12]+"\r\n          Z\r\n          "),h(n,"class","shape svelte-w6xcva"),h(n,"xmlns","http://www.w3.org/2000/svg"),h(n,"viewBox",g="0 0 "+t[11]+" "+t[12]),h(n,"preserveAspectRatio","none"),v(n,"inversed",t[3]),h(x,"class","content svelte-w6xcva"),m(x,"transform","translateX(calc("+t[15]+"% + "+t[4]+"px))"),v(x,"left","left"===t[5]),v(x,"right","right"===t[5]),h(e,"class","booknote svelte-w6xcva"),m(e,"height",t[0]+"px")},m(r,s){i(r,e,s),c(e,n),C&&C.m(n,null),c(n,o),k&&k.m(n,null),c(e,y),c(e,x),M&&M.m(x,null),t[43](x),t[44](e),w=!0,z||(b=[p(window,"resize",t[42]),p(e,"click",t[41])],z=!0)},p(t,r){t[2]?C?C.p(t,r):(C=N(t),C.c(),C.m(n,o)):C&&(C.d(1),C=null),(!w||2097152&r[0])&&h(o,"fill",t[21]),(!w||2039744&r[0]&&s!==(s="\r\n          M 0 "+t[16]+"\r\n          L "+t[9]+" "+t[16]+"\r\n          C "+t[17]+" "+t[16]+" "+t[18]+" "+t[8]+" "+t[6]+" "+t[8]+"\r\n          L "+t[7]+" "+t[8]+"\r\n          C "+t[20]+" "+t[8]+" "+t[19]+" "+t[16]+" "+t[10]+" "+t[16]+"\r\n          L "+t[11]+" "+t[16]+"\r\n          L "+t[11]+" "+t[12]+"\r\n          L 0 "+t[12]+"\r\n          Z\r\n          "))&&h(o,"d",s),t[1]?k?k.p(t,r):(k=U(t),k.c(),k.m(n,null)):k&&(k.d(1),k=null),(!w||6144&r[0]&&g!==(g="0 0 "+t[11]+" "+t[12]))&&h(n,"viewBox",g),8&r[0]&&v(n,"inversed",t[3]),_&&_.p&&(!w||256&r[1])&&function(t,e,n,r,o,s){if(o){const c=l(e,n,r,s);t.p(c,o)}}(_,L,t,t[39],w?function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(L,t[39],r,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[39]),null),(!w||32784&r[0])&&m(x,"transform","translateX(calc("+t[15]+"% + "+t[4]+"px))"),32&r[0]&&v(x,"left","left"===t[5]),32&r[0]&&v(x,"right","right"===t[5]),(!w||1&r[0])&&m(e,"height",t[0]+"px")},i(t){w||(A(M,t),w=!0)},o(t){S(M,t),w=!1},d(n){n&&u(e),C&&C.d(),k&&k.d(),M&&M.d(n),t[43](null),t[44](null),z=!1,r(b)}}}function q(t,e,n){let r,o,{$$slots:s={},$$scope:l}=e,{borderColor:c=null}=e,{borderWidth:i=0}=e,{backgroundColor:u="#BBB"}=e,{pattern:a=null}=e,{patternId:d="pattern"}=e,{width:$=null}=e,{height:f=null}=e,{depth:p=80}=e,{roundTop:h=50}=e,{roundBottom:m=50}=e,{curveWidth:v=50}=e,{padding:g=0}=e,{inversed:y=!1}=e,{shiftX:z=0}=e,{align:C="center"}=e,k=i,_=0,T=0,W=0,H=0,B=0,E=0,O=0,A=0,S=0,X=0,I=0,V=0,j=0,P=0,N=0,U=0,Z=0,q=0,F=1e3,G=100,J=null;function R(){n(33,_=r.clientWidth),T=o.clientWidth,n(34,W=o.clientHeight),null===$&&n(24,$=T),null===f&&n(0,f=W)}x((async()=>{await(M(),L),R()}));return t.$$set=t=>{"borderColor"in t&&n(1,c=t.borderColor),"borderWidth"in t&&n(25,i=t.borderWidth),"backgroundColor"in t&&n(26,u=t.backgroundColor),"pattern"in t&&n(2,a=t.pattern),"patternId"in t&&n(27,d=t.patternId),"width"in t&&n(24,$=t.width),"height"in t&&n(0,f=t.height),"depth"in t&&n(28,p=t.depth),"roundTop"in t&&n(29,h=t.roundTop),"roundBottom"in t&&n(30,m=t.roundBottom),"curveWidth"in t&&n(31,v=t.curveWidth),"padding"in t&&n(32,g=t.padding),"inversed"in t&&n(3,y=t.inversed),"shiftX"in t&&n(4,z=t.shiftX),"align"in t&&n(5,C=t.align),"$$scope"in t&&n(39,l=t.$$scope)},t.$$.update=()=>{32&t.$$.dirty[0]&&n(38,V="center"===C?.5:"left"===C?0:1),32&t.$$.dirty[0]&&n(36,X="center"===C?.5:"left"===C?0:1),32&t.$$.dirty[0]&&n(37,I="center"===C?.5:1),16777216&t.$$.dirty[0]|2&t.$$.dirty[1]&&n(35,S=$+2*g),4&t.$$.dirty[1]&&n(11,F=_),2064&t.$$.dirty[0]|176&t.$$.dirty[1]&&n(6,B=F*V-S*X+z),2064&t.$$.dirty[0]|208&t.$$.dirty[1]&&n(7,E=F*V+S*I+z),64&t.$$.dirty[0]|1&t.$$.dirty[1]&&n(9,j=B-v),1073742336&t.$$.dirty[0]|1&t.$$.dirty[1]&&n(17,P=j+v*m/100),536870976&t.$$.dirty[0]|1&t.$$.dirty[1]&&n(18,N=B-v*h/100),128&t.$$.dirty[0]|1&t.$$.dirty[1]&&n(10,U=E+v),1073742848&t.$$.dirty[0]|1&t.$$.dirty[1]&&n(19,Z=U-v*m/100),536871040&t.$$.dirty[0]|1&t.$$.dirty[1]&&n(20,q=E+v*h/100),256&t.$$.dirty[0]&&n(8,O+=k),8&t.$$.dirty[1]&&n(12,G=W),268439552&t.$$.dirty[0]&&n(16,A=G*p/100),201326596&t.$$.dirty[0]&&n(21,J=a?"url(#"+d+")":u),32&t.$$.dirty[0]&&n(15,H="center"===C?-50:"left"===C?0:-100)},[f,c,a,y,z,C,B,E,O,j,U,F,G,r,o,H,A,P,N,Z,q,J,k,R,$,i,u,d,p,h,m,v,g,_,W,S,X,I,V,l,s,function(e){w.call(this,t,e)},()=>R(),function(t){b[t?"unshift":"push"]((()=>{o=t,n(14,o)}))},function(t){b[t?"unshift":"push"]((()=>{r=t,n(13,r)}))}]}class F extends P{constructor(t){super(),j(this,t,q,Z,s,{borderColor:1,borderWidth:25,backgroundColor:26,pattern:2,patternId:27,width:24,height:0,depth:28,roundTop:29,roundBottom:30,curveWidth:31,padding:32,inversed:3,shiftX:4,align:5},null,[-1,-1])}}function G(t){let e;return{c(){e=a("h1"),e.textContent="The TabTitle Component",h(e,"class","svelte-4vm4uz")},m(t,n){i(t,e,n)},d(t){t&&u(e)}}}function J(t){let e;return{c(){e=a("h2"),e.innerHTML='It adapts to your content <img src="favicon.png" alt="icon" style="width:30px; height:30px; margin:0 0 0 10px;" class="svelte-4vm4uz"/>',h(e,"class","svelte-4vm4uz")},m(t,n){i(t,e,n)},d(t){t&&u(e)}}}function R(t){let e;return{c(){e=a("h2"),e.textContent="Just give it colors",h(e,"class","svelte-4vm4uz")},m(t,n){i(t,e,n)},d(t){t&&u(e)}}}function D(t){let e;return{c(){e=a("h2"),e.textContent="And customize the round",h(e,"class","svelte-4vm4uz")},m(t,n){i(t,e,n)},d(t){t&&u(e)}}}function K(t){let e;return{c(){e=a("h2"),e.textContent="Or make it sharp",h(e,"class","svelte-4vm4uz")},m(t,n){i(t,e,n)},d(t){t&&u(e)}}}function Q(t){let e;return{c(){e=a("h2"),e.textContent="Make it full extruded",h(e,"class","svelte-4vm4uz")},m(t,n){i(t,e,n)},d(t){t&&u(e)}}}function Y(t){let e;return{c(){e=a("h2"),e.textContent="Or just by half",h(e,"class","svelte-4vm4uz")},m(t,n){i(t,e,n)},d(t){t&&u(e)}}}function tt(t){let e;return{c(){e=a("h2"),e.textContent="Stick it to the left",h(e,"class","svelte-4vm4uz")},m(t,n){i(t,e,n)},d(t){t&&u(e)}}}function et(t){let e;return{c(){e=a("h2"),e.textContent="Or right",h(e,"class","svelte-4vm4uz")},m(t,n){i(t,e,n)},d(t){t&&u(e)}}}function nt(t){let e;return{c(){e=a("h2"),e.textContent="Or invert it",h(e,"class","svelte-4vm4uz")},m(t,n){i(t,e,n)},d(t){t&&u(e)}}}function rt(t){let e;return{c(){e=a("h2"),e.textContent="A little to the left",h(e,"class","svelte-4vm4uz")},m(t,n){i(t,e,n)},d(t){t&&u(e)}}}function ot(t){let e;return{c(){e=a("h2"),e.textContent="Oh and you can apply SVG pattern :)",h(e,"class","big svelte-4vm4uz")},m(t,n){i(t,e,n)},d(t){t&&u(e)}}}function st(t){let e,n,r,o,s,l,d,$,p,m,v,g,y,x,w,z,b,C,k,L,_,M,T,W,H,B,E,O,j,P,N,U,Z,q,st,lt,ct,it,ut,at,dt,$t,ft,pt,ht,mt,vt,gt,yt,xt,wt,zt,bt,Ct,kt,Lt,_t;return r=new F({props:{inversed:!0,borderColor:"#63a5b1",borderWidth:4,padding:20,pattern:t[0],$$slots:{default:[G]},$$scope:{ctx:t}}}),l=new F({props:{$$slots:{default:[J]},$$scope:{ctx:t}}}),v=new F({props:{backgroundColor:"#4f9ba9",borderColor:"#1e7d8e",borderWidth:2,$$slots:{default:[R]},$$scope:{ctx:t}}}),z=new F({props:{roundTop:0,roundBottom:110,curveWidth:30,padding:20,$$slots:{default:[D]},$$scope:{ctx:t}}}),_=new F({props:{roundTop:0,roundBottom:0,curveWidth:10,padding:20,$$slots:{default:[K]},$$scope:{ctx:t}}}),B=new F({props:{depth:100,$$slots:{default:[Q]},$$scope:{ctx:t}}}),N=new F({props:{depth:50,$$slots:{default:[Y]},$$scope:{ctx:t}}}),lt=new F({props:{align:"left",$$slots:{default:[tt]},$$scope:{ctx:t}}}),dt=new F({props:{align:"right",$$slots:{default:[et]},$$scope:{ctx:t}}}),gt=new F({props:{inversed:!0,$$slots:{default:[nt]},$$scope:{ctx:t}}}),bt=new F({props:{inversed:!0,shiftX:-100,$$slots:{default:[rt]},$$scope:{ctx:t}}}),Lt=new F({props:{depth:50,pattern:t[1],patternId:"footerPattern",borderColor:"#1e7d8e",borderWidth:3,$$slots:{default:[ot]},$$scope:{ctx:t}}}),{c(){e=a("main"),n=a("header"),X(r.$$.fragment),o=f(),s=a("article"),X(l.$$.fragment),d=f(),$=a("div"),p=f(),m=a("article"),X(v.$$.fragment),g=f(),y=a("div"),x=f(),w=a("article"),X(z.$$.fragment),b=f(),C=a("div"),k=f(),L=a("article"),X(_.$$.fragment),M=f(),T=a("div"),W=f(),H=a("article"),X(B.$$.fragment),E=f(),O=a("div"),j=f(),P=a("article"),X(N.$$.fragment),U=f(),Z=a("div"),q=f(),st=a("article"),X(lt.$$.fragment),ct=f(),it=a("div"),ut=f(),at=a("article"),X(dt.$$.fragment),$t=f(),ft=a("div"),pt=f(),ht=a("article"),mt=a("div"),vt=f(),X(gt.$$.fragment),yt=f(),xt=a("article"),wt=a("div"),zt=f(),X(bt.$$.fragment),Ct=f(),kt=a("footer"),X(Lt.$$.fragment),h(n,"class","svelte-4vm4uz"),h($,"class","svelte-4vm4uz"),h(s,"class","svelte-4vm4uz"),h(y,"class","svelte-4vm4uz"),h(m,"class","svelte-4vm4uz"),h(C,"class","svelte-4vm4uz"),h(w,"class","svelte-4vm4uz"),h(T,"class","svelte-4vm4uz"),h(L,"class","svelte-4vm4uz"),h(O,"class","svelte-4vm4uz"),h(H,"class","svelte-4vm4uz"),h(Z,"class","svelte-4vm4uz"),h(P,"class","svelte-4vm4uz"),h(it,"class","svelte-4vm4uz"),h(st,"class","svelte-4vm4uz"),h(ft,"class","svelte-4vm4uz"),h(at,"class","svelte-4vm4uz"),h(mt,"class","svelte-4vm4uz"),h(ht,"class","svelte-4vm4uz"),h(wt,"class","svelte-4vm4uz"),h(xt,"class","svelte-4vm4uz"),h(kt,"class","svelte-4vm4uz"),h(e,"class","svelte-4vm4uz")},m(t,u){i(t,e,u),c(e,n),I(r,n,null),c(e,o),c(e,s),I(l,s,null),c(s,d),c(s,$),c(e,p),c(e,m),I(v,m,null),c(m,g),c(m,y),c(e,x),c(e,w),I(z,w,null),c(w,b),c(w,C),c(e,k),c(e,L),I(_,L,null),c(L,M),c(L,T),c(e,W),c(e,H),I(B,H,null),c(H,E),c(H,O),c(e,j),c(e,P),I(N,P,null),c(P,U),c(P,Z),c(e,q),c(e,st),I(lt,st,null),c(st,ct),c(st,it),c(e,ut),c(e,at),I(dt,at,null),c(at,$t),c(at,ft),c(e,pt),c(e,ht),c(ht,mt),c(ht,vt),I(gt,ht,null),c(e,yt),c(e,xt),c(xt,wt),c(xt,zt),I(bt,xt,null),c(e,Ct),c(e,kt),I(Lt,kt,null),_t=!0},p(t,[e]){const n={};4&e&&(n.$$scope={dirty:e,ctx:t}),r.$set(n);const o={};4&e&&(o.$$scope={dirty:e,ctx:t}),l.$set(o);const s={};4&e&&(s.$$scope={dirty:e,ctx:t}),v.$set(s);const c={};4&e&&(c.$$scope={dirty:e,ctx:t}),z.$set(c);const i={};4&e&&(i.$$scope={dirty:e,ctx:t}),_.$set(i);const u={};4&e&&(u.$$scope={dirty:e,ctx:t}),B.$set(u);const a={};4&e&&(a.$$scope={dirty:e,ctx:t}),N.$set(a);const d={};4&e&&(d.$$scope={dirty:e,ctx:t}),lt.$set(d);const $={};4&e&&($.$$scope={dirty:e,ctx:t}),dt.$set($);const f={};4&e&&(f.$$scope={dirty:e,ctx:t}),gt.$set(f);const p={};4&e&&(p.$$scope={dirty:e,ctx:t}),bt.$set(p);const h={};4&e&&(h.$$scope={dirty:e,ctx:t}),Lt.$set(h)},i(t){_t||(A(r.$$.fragment,t),A(l.$$.fragment,t),A(v.$$.fragment,t),A(z.$$.fragment,t),A(_.$$.fragment,t),A(B.$$.fragment,t),A(N.$$.fragment,t),A(lt.$$.fragment,t),A(dt.$$.fragment,t),A(gt.$$.fragment,t),A(bt.$$.fragment,t),A(Lt.$$.fragment,t),_t=!0)},o(t){S(r.$$.fragment,t),S(l.$$.fragment,t),S(v.$$.fragment,t),S(z.$$.fragment,t),S(_.$$.fragment,t),S(B.$$.fragment,t),S(N.$$.fragment,t),S(lt.$$.fragment,t),S(dt.$$.fragment,t),S(gt.$$.fragment,t),S(bt.$$.fragment,t),S(Lt.$$.fragment,t),_t=!1},d(t){t&&u(e),V(r),V(l),V(v),V(z),V(_),V(B),V(N),V(lt),V(dt),V(gt),V(bt),V(Lt)}}}function lt(t){return['\n    <pattern id="pattern" width="60" height="10" patternTransform="rotate(145)" patternUnits="userSpaceOnUse">\n         <rect width="100%" height="100%" fill="#1e7d8e"></rect>\n         <line x1="15" x2="15" y2="10" style="stroke:#0c7386; stroke-width:30" />\n    </pattern>\n  ',"\n    <pattern id='footerPattern' patternUnits='userSpaceOnUse' width='40' height='40' patternTransform='scale(2) rotate(20)'>\n      <rect x='0' y='0' width='100%' height='100%' fill='hsla(189, 36%, 49%, 1)'/>\n      <path d='M15 5h10v30H15zM35-5V5H5V-5zM35 35v10H5V35zM35-15h10v30H35zM55 15v10H25V15zM15 15v10h-30V15zM35 25h10v30H35zM-5 25H5v30H-5zM-5-15H5v30H-5z'  stroke-width='1.5' stroke='hsla(189, 65%, 34%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/>\n    </pattern>\n  "]}const ct=new class extends P{constructor(t){super(),j(this,t,lt,st,s,{})}}({target:document.body,props:{}});export{ct as default};
