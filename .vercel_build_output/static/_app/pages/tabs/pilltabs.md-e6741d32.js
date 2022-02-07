import{S as w,i as P,s as E,e as m,t as j,k as v,c as h,a as g,h as T,d as p,m as x,b as f,g as _,I as k,j as M,K as b,U as N,C as y,w as C,x as D,y as I,z as R,A as L,q as S,o as q,B as A,X as H}from"../../chunks/vendor-85546de9.js";import V from"../layouts/doc.svelte-d897bf1c.js";/* empty css                                                        */function U(o,e,n){const t=o.slice();return t[1]=e[n].name,t[2]=e[n].selected,t[3]=e[n].link,t}function z(o){let e,n,t=o[1]+"",a,l,s,c;return{c(){e=m("li"),n=m("a"),a=j(t),c=v(),this.h()},l(i){e=h(i,"LI",{class:!0});var u=g(e);n=h(u,"A",{class:!0,href:!0,rel:!0});var r=g(n);a=T(r,t),r.forEach(p),c=x(u),u.forEach(p),this.h()},h(){f(n,"class",l=""+((o[2]?"active inline-block py-3 px-4 text-sm font-medium text-center text-white bg-blue-600 rounded-lg":"inline-block py-3 px-4 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white")+"")),f(n,"href",s=o[3]),f(n,"rel","external"),f(e,"class","mr-2")},m(i,u){_(i,e,u),k(e,n),k(n,a),k(e,c)},p(i,u){u&1&&t!==(t=i[1]+"")&&M(a,t),u&1&&l!==(l=""+((i[2]?"active inline-block py-3 px-4 text-sm font-medium text-center text-white bg-blue-600 rounded-lg":"inline-block py-3 px-4 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white")+""))&&f(n,"class",l),u&1&&s!==(s=i[3])&&f(n,"href",s)},d(i){i&&p(e)}}}function X(o){let e,n=o[0],t=[];for(let a=0;a<n.length;a+=1)t[a]=z(U(o,n,a));return{c(){e=m("ul");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=h(a,"UL",{class:!0});var l=g(e);for(let s=0;s<t.length;s+=1)t[s].l(l);l.forEach(p),this.h()},h(){f(e,"class","flex flex-wrap")},m(a,l){_(a,e,l);for(let s=0;s<t.length;s+=1)t[s].m(e,null)},p(a,[l]){if(l&1){n=a[0];let s;for(s=0;s<n.length;s+=1){const c=U(a,n,s);t[s]?t[s].p(c,l):(t[s]=z(c),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=n.length}},i:b,o:b,d(a){a&&p(e),N(t,a)}}}function F(o,e,n){let{tabs:t=[{name:"Profile",selected:!0,link:"/#"},{name:"Dashboard",selected:!1,link:"/#"},{name:"Settings",selected:!1,link:"/#"},{name:"Contacts",selected:!1,link:"/#"}]}=e;return o.$$set=a=>{"tabs"in a&&n(0,t=a.tabs)},[t]}class G extends w{constructor(e){super();P(this,e,F,X,E,{tabs:0})}}function J(o){let e,n,t,a,l=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> PillTabs <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"svelte-flow"</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PillTabs</span> <span class="token punctuation">/></span></span>
</code>`,s,c,i,u;return i=new G({}),{c(){e=m("h1"),n=j("Pill Tabs"),t=v(),a=m("pre"),s=v(),c=m("div"),C(i.$$.fragment),this.h()},l(r){e=h(r,"H1",{class:!0});var d=g(e);n=T(d,"Pill Tabs"),d.forEach(p),t=x(r),a=h(r,"PRE",{class:!0});var K=g(a);K.forEach(p),s=x(r),c=h(r,"DIV",{class:!0});var $=g(c);D(i.$$.fragment,$),$.forEach(p),this.h()},h(){f(e,"class","text-3xl w-full dark:text-white"),f(a,"class","language-svelte"),f(c,"class","container mx-auto p-8")},m(r,d){_(r,e,d),k(e,n),_(r,t,d),_(r,a,d),a.innerHTML=l,_(r,s,d),_(r,c,d),I(i,c,null),u=!0},p:b,i(r){u||(S(i.$$.fragment,r),u=!0)},o(r){q(i.$$.fragment,r),u=!1},d(r){r&&p(e),r&&p(t),r&&p(a),r&&p(s),r&&p(c),A(i)}}}function O(o){let e,n;const t=[o[0],B];let a={$$slots:{default:[J]},$$scope:{ctx:o}};for(let l=0;l<t.length;l+=1)a=y(a,t[l]);return e=new V({props:a}),{c(){C(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,s){I(e,l,s),n=!0},p(l,[s]){const c=s&1?R(t,[s&1&&L(l[0]),s&0&&L(B)]):{};s&2&&(c.$$scope={dirty:s,ctx:l}),e.$set(c)},i(l){n||(S(e.$$.fragment,l),n=!0)},o(l){q(e.$$.fragment,l),n=!1},d(l){A(e,l)}}}const B={layout:"doc"};function Q(o,e,n){return o.$$set=t=>{n(0,e=y(y({},e),H(t)))},e=H(e),[e]}class ee extends w{constructor(e){super();P(this,e,Q,O,E,{})}}export{ee as default,B as metadata};