import{S as Wa,i as Ya,s as Za,C as wa,w as A,x as F,y as O,z as an,A as Ua,q as z,o as X,B as G,X as Sa,e as i,t as b,k as p,c as r,a as m,h as x,d as n,m as u,b as c,g as e,I as v}from"../../chunks/vendor-85546de9.js";import nn from"../layouts/doc.svelte-d897bf1c.js";import{E as La}from"../../chunks/ExtraLargeModal-cae0036f.js";import{M as ja}from"../../chunks/ModalButton-b1515f06.js";/* empty css                                                        */function sn(k){let t;return{c(){t=b(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco.`)},l(l){t=x(l,`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco.`)},m(l,d){e(l,t,d)},d(l){l&&n(t)}}}function tn(k){let t;return{c(){t=b(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco.`)},l(l){t=x(l,`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco.`)},m(l,d){e(l,t,d)},d(l){l&&n(t)}}}function en(k){let t;return{c(){t=b(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco.`)},l(l){t=x(l,`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco.`)},m(l,d){e(l,t,d)},d(l){l&&n(t)}}}function ln(k){let t,l,d,g,o,f,$,Oa=`<code class="language-svelte">import <span class="token language-javascript"><span class="token punctuation">&#123;</span> ModalButton<span class="token punctuation">,</span> ExtraLargeModal <span class="token punctuation">&#125;</span></span> from "svelte-flow";

// simple modal
let id = "simple";

// Modal 1
let id1 = "extra-large-modal";
let btnExLName = "Extra Large Modal with one button";
let btnExLColor = "blue";

// Modal 2
let id2 = "extra-large-modal-2";
let btnExLName2 = "Extra Large Modal with two buttons";
let btnExLColor2 = "purple";
let btn1 = "Read more";
let btn2 = "Close";

const handlebtn1 = () => <span class="token language-javascript"><span class="token punctuation">&#123;</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"handlebtn1 is clicked from a parent page."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">toggleModal</span><span class="token punctuation">(</span>id1<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></span>;

const handlebtn2 = () => <span class="token language-javascript"><span class="token punctuation">&#123;</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"handlebtn2 is clicked from a parent page."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">toggleModal</span><span class="token punctuation">(</span>id2<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></span>;

const handlebtn3 = () => <span class="token language-javascript"><span class="token punctuation">&#123;</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"handlebtn3 is clicked from a parent page."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">toggleModal</span><span class="token punctuation">(</span>id2<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></span>;</code>`,Q,w,ga,W,L,j,Y,C,ba,Z,h,za=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ModalButton</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>id<span class="token punctuation">&#125;</span></span> <span class="token attr-name">btnName</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Info Modal<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ExtraLargeModal</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>id<span class="token punctuation">&#125;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Info Modal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ExtraLargeModal</span><span class="token punctuation">></span></span></code>`,aa,q,xa,na,B,N,sa,I,va,ta,T,Xa=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ModalButton</span> <span class="token attr-name">id=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>id1<span class="token punctuation">&#125;</span></span> <span class="token attr-name">btnName=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>btnExLName<span class="token punctuation">&#125;</span></span> <span class="token attr-name">btnColor=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>btnExLColor<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ExtraLargeModal</span>
  <span class="token attr-name">id=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>id1<span class="token punctuation">&#125;</span></span>
  <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Default Modal Title<span class="token punctuation">"</span></span>
  <span class="token language-javascript"><span class="token punctuation">&#123;</span>btn1<span class="token punctuation">&#125;</span></span>
  <span class="token attr-name"><span class="token namespace">on:</span>handlebtn1=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>handlebtn1<span class="token punctuation">&#125;</span></span>
<span class="token punctuation">></span></span>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ExtraLargeModal</span><span class="token punctuation">></span></span></code>`,ea,y,$a,la,H,P,oa,D,_a,pa,R,Ga=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ModalButton</span> <span class="token attr-name">id=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>id2<span class="token punctuation">&#125;</span></span> <span class="token attr-name">btnName=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>btnExLName2<span class="token punctuation">&#125;</span></span> <span class="token attr-name">btnColor=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>btnExLColor2<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ExtraLargeModal</span>
  <span class="token attr-name">id=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>id2<span class="token punctuation">&#125;</span></span>
  <span class="token attr-name">btnColor</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>indigo<span class="token punctuation">"</span></span>
  <span class="token attr-name">textColor</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span>
  <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Default Modal Title<span class="token punctuation">"</span></span>
  <span class="token language-javascript"><span class="token punctuation">&#123;</span>btn1<span class="token punctuation">&#125;</span></span>
  <span class="token language-javascript"><span class="token punctuation">&#123;</span>btn2<span class="token punctuation">&#125;</span></span>
  <span class="token attr-name"><span class="token namespace">on:</span>handlebtn1=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>handlebtn2<span class="token punctuation">&#125;</span></span>
  <span class="token attr-name"><span class="token namespace">on:</span>handlebtn2=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>handlebtn3<span class="token punctuation">&#125;</span></span>
<span class="token punctuation">></span></span>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ExtraLargeModal</span><span class="token punctuation">></span></span></code>`,ua,M,ca,E,ia,_,ra,U,Ea,ma,S,V,Ma,da;return j=new ja({props:{id:Aa,btnName:"Info Modal"}}),N=new ja({props:{id:Ca,btnName:pn,btnColor:un}}),P=new ja({props:{id:fa,btnName:cn,btnColor:rn}}),M=new La({props:{id:Aa,title:"Info Modal",$$slots:{default:[sn]},$$scope:{ctx:k}}}),E=new La({props:{id:Ca,title:"Default Modal Title",btn1:Fa,$$slots:{default:[tn]},$$scope:{ctx:k}}}),E.$on("handlebtn1",k[0]),_=new La({props:{id:fa,btnColor:"indigo",textColor:"red",title:"Default Modal Title",btn1:Fa,btn2:mn,$$slots:{default:[en]},$$scope:{ctx:k}}}),_.$on("handlebtn1",k[1]),_.$on("handlebtn2",k[2]),{c(){t=i("h1"),l=b("Extra-large Modals: Setup"),d=p(),g=i("p"),o=b("Import ModalButton, ExtraLargeModal components and set variables in the script tag."),f=p(),$=i("pre"),Q=p(),w=i("h1"),ga=b("Extra-large Modals for Information"),W=p(),L=i("div"),A(j.$$.fragment),Y=p(),C=i("p"),ba=b("Create a button and modal."),Z=p(),h=i("pre"),aa=p(),q=i("h1"),xa=b("Extra-large Modals with One Button"),na=p(),B=i("div"),A(N.$$.fragment),sa=p(),I=i("p"),va=b("Create a button and modal."),ta=p(),T=i("pre"),ea=p(),y=i("h1"),$a=b("Extra-large Modals with Two Buttons"),la=p(),H=i("div"),A(P.$$.fragment),oa=p(),D=i("p"),_a=b("Create a button and modal."),pa=p(),R=i("pre"),ua=p(),A(M.$$.fragment),ca=p(),A(E.$$.fragment),ia=p(),A(_.$$.fragment),ra=p(),U=i("h1"),Ea=b("References"),ma=p(),S=i("p"),V=i("a"),Ma=b("- Flowbite Modal"),this.h()},l(a){t=r(a,"H1",{class:!0});var s=m(t);l=x(s,"Extra-large Modals: Setup"),s.forEach(n),d=u(a),g=r(a,"P",{class:!0});var J=m(g);o=x(J,"Import ModalButton, ExtraLargeModal components and set variables in the script tag."),J.forEach(n),f=u(a),$=r(a,"PRE",{class:!0});var ka=m($);ka.forEach(n),Q=u(a),w=r(a,"H1",{class:!0});var K=m(w);ga=x(K,"Extra-large Modals for Information"),K.forEach(n),W=u(a),L=r(a,"DIV",{class:!0});var ha=m(L);F(j.$$.fragment,ha),ha.forEach(n),Y=u(a),C=r(a,"P",{class:!0});var qa=m(C);ba=x(qa,"Create a button and modal."),qa.forEach(n),Z=u(a),h=r(a,"PRE",{class:!0});var Ja=m(h);Ja.forEach(n),aa=u(a),q=r(a,"H1",{class:!0});var Ba=m(q);xa=x(Ba,"Extra-large Modals with One Button"),Ba.forEach(n),na=u(a),B=r(a,"DIV",{class:!0});var Na=m(B);F(N.$$.fragment,Na),Na.forEach(n),sa=u(a),I=r(a,"P",{class:!0});var Ia=m(I);va=x(Ia,"Create a button and modal."),Ia.forEach(n),ta=u(a),T=r(a,"PRE",{class:!0});var Ka=m(T);Ka.forEach(n),ea=u(a),y=r(a,"H1",{class:!0});var Ta=m(y);$a=x(Ta,"Extra-large Modals with Two Buttons"),Ta.forEach(n),la=u(a),H=r(a,"DIV",{class:!0});var ya=m(H);F(P.$$.fragment,ya),ya.forEach(n),oa=u(a),D=r(a,"P",{class:!0});var Ha=m(D);_a=x(Ha,"Create a button and modal."),Ha.forEach(n),pa=u(a),R=r(a,"PRE",{class:!0});var Qa=m(R);Qa.forEach(n),ua=u(a),F(M.$$.fragment,a),ca=u(a),F(E.$$.fragment,a),ia=u(a),F(_.$$.fragment,a),ra=u(a),U=r(a,"H1",{class:!0});var Pa=m(U);Ea=x(Pa,"References"),Pa.forEach(n),ma=u(a),S=r(a,"P",{class:!0});var Da=m(S);V=r(Da,"A",{href:!0,target:!0});var Ra=m(V);Ma=x(Ra,"- Flowbite Modal"),Ra.forEach(n),Da.forEach(n),this.h()},h(){c(t,"class","text-3xl w-full dark:text-white pt-16"),c(g,"class","dark:text-white"),c($,"class","language-svelte"),c(w,"class","text-3xl w-full dark:text-white"),c(L,"class","container flex flex-wrap my-8 mx-auto justify-center"),c(C,"class","dark:text-white"),c(h,"class","language-svelte"),c(q,"class","text-3xl w-full dark:text-white"),c(B,"class","container flex flex-wrap my-8 mx-auto justify-center"),c(I,"class","dark:text-white"),c(T,"class","language-svelte"),c(y,"class","text-3xl w-full dark:text-white"),c(H,"class","container flex flex-wrap my-8 mx-auto justify-center"),c(D,"class","dark:text-white"),c(R,"class","language-svelte"),c(U,"class","text-3xl w-full dark:text-white pb-8"),c(V,"href","https://flowbite.com/docs/components/modal/"),c(V,"target","_blank"),c(S,"class","dark:text-white text-base")},m(a,s){e(a,t,s),v(t,l),e(a,d,s),e(a,g,s),v(g,o),e(a,f,s),e(a,$,s),$.innerHTML=Oa,e(a,Q,s),e(a,w,s),v(w,ga),e(a,W,s),e(a,L,s),O(j,L,null),e(a,Y,s),e(a,C,s),v(C,ba),e(a,Z,s),e(a,h,s),h.innerHTML=za,e(a,aa,s),e(a,q,s),v(q,xa),e(a,na,s),e(a,B,s),O(N,B,null),e(a,sa,s),e(a,I,s),v(I,va),e(a,ta,s),e(a,T,s),T.innerHTML=Xa,e(a,ea,s),e(a,y,s),v(y,$a),e(a,la,s),e(a,H,s),O(P,H,null),e(a,oa,s),e(a,D,s),v(D,_a),e(a,pa,s),e(a,R,s),R.innerHTML=Ga,e(a,ua,s),O(M,a,s),e(a,ca,s),O(E,a,s),e(a,ia,s),O(_,a,s),e(a,ra,s),e(a,U,s),v(U,Ea),e(a,ma,s),e(a,S,s),v(S,V),v(V,Ma),da=!0},p(a,s){const J={};s&16&&(J.$$scope={dirty:s,ctx:a}),M.$set(J);const ka={};s&16&&(ka.$$scope={dirty:s,ctx:a}),E.$set(ka);const K={};s&16&&(K.$$scope={dirty:s,ctx:a}),_.$set(K)},i(a){da||(z(j.$$.fragment,a),z(N.$$.fragment,a),z(P.$$.fragment,a),z(M.$$.fragment,a),z(E.$$.fragment,a),z(_.$$.fragment,a),da=!0)},o(a){X(j.$$.fragment,a),X(N.$$.fragment,a),X(P.$$.fragment,a),X(M.$$.fragment,a),X(E.$$.fragment,a),X(_.$$.fragment,a),da=!1},d(a){a&&n(t),a&&n(d),a&&n(g),a&&n(f),a&&n($),a&&n(Q),a&&n(w),a&&n(W),a&&n(L),G(j),a&&n(Y),a&&n(C),a&&n(Z),a&&n(h),a&&n(aa),a&&n(q),a&&n(na),a&&n(B),G(N),a&&n(sa),a&&n(I),a&&n(ta),a&&n(T),a&&n(ea),a&&n(y),a&&n(la),a&&n(H),G(P),a&&n(oa),a&&n(D),a&&n(pa),a&&n(R),a&&n(ua),G(M,a),a&&n(ca),G(E,a),a&&n(ia),G(_,a),a&&n(ra),a&&n(U),a&&n(ma),a&&n(S)}}}function on(k){let t,l;const d=[k[3],Va];let g={$$slots:{default:[ln]},$$scope:{ctx:k}};for(let o=0;o<d.length;o+=1)g=wa(g,d[o]);return t=new nn({props:g}),{c(){A(t.$$.fragment)},l(o){F(t.$$.fragment,o)},m(o,f){O(t,o,f),l=!0},p(o,[f]){const $=f&8?an(d,[f&8&&Ua(o[3]),f&0&&Ua(Va)]):{};f&16&&($.$$scope={dirty:f,ctx:o}),t.$set($)},i(o){l||(z(t.$$.fragment,o),l=!0)},o(o){X(t.$$.fragment,o),l=!1},d(o){G(t,o)}}}const Va={layout:"doc"};let Aa="simple",Ca="extra-large-modal",pn="Extra Large Modal with one button",un="blue",fa="extra-large-modal-2",cn="Extra Large Modal with two buttons",rn="purple",Fa="Read more",mn="Close";function dn(k,t,l){const d=()=>{alert("handlebtn1 is clicked from a parent page."),toggleModal(Ca,!1)},g=()=>{alert("handlebtn2 is clicked from a parent page."),toggleModal(fa,!1)},o=()=>{alert("handlebtn3 is clicked from a parent page."),toggleModal(fa,!1)};return k.$$set=f=>{l(3,t=wa(wa({},t),Sa(f)))},t=Sa(t),[d,g,o,t]}class vn extends Wa{constructor(t){super();Ya(this,t,dn,on,Za,{})}}export{vn as default,Va as metadata};