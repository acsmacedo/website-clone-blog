(function(t){function e(e){for(var s,o,r=e[0],u=e[1],c=e[2],l=0,d=[];l<r.length;l++)o=r[l],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);m&&m(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],s=!0,o=1;o<i.length;o++){var u=i[o];0!==n[u]&&(s=!1)}s&&(a.splice(e--,1),t=r(r.s=i[0]))}return t}var s={},n={app:0},a=[];function o(t){return r.p+"js/"+({}[t]||t)+"."+{"chunk-2d0ae528":"78aea50a","chunk-2d0da7ce":"8856dee4","chunk-56e6d83d":"cb86328c","chunk-6222fb80":"7ce2724e"}[t]+".js"}function r(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.e=function(t){var e=[],i=n[t];if(0!==i)if(i)e.push(i[2]);else{var s=new Promise((function(e,s){i=n[t]=[e,s]}));e.push(i[2]=s);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.src=o(t);var c=new Error;a=function(e){u.onerror=u.onload=null,clearTimeout(l);var i=n[t];if(0!==i){if(i){var s=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+s+": "+a+")",c.name="ChunkLoadError",c.type=s,c.request=a,i[1](c)}n[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(e)},r.m=t,r.c=s,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var m=c;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"btn-up",on:{click:t.up}},[i("i",{staticClass:"bx bx-up-arrow-alt"})]),i("NsaMenuColapse"),i("NsaMenu"),i("transition",{attrs:{name:"tra"}},[i("router-view")],1),i("NsaFooter")],1)},a=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",{staticClass:"menu"},[i("div",{staticClass:"menu__container"},[t._m(0),i("div",{staticClass:"menu__icon",on:{click:t.open}},[i("i",{staticClass:"bx bx-menu"})]),i("ul",{staticClass:"menu__links",on:{click:t.close}},[i("router-link",{attrs:{to:{name:"Home"}}},[t._v("home")]),i("router-link",{attrs:{to:{name:"About"}}},[t._v("about")]),i("router-link",{attrs:{to:{name:"Blog"}}},[t._v("blog")]),i("router-link",{attrs:{to:{name:"Project"}}},[t._v("project")])],1)])])},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"menu__logo"},[i("a",{attrs:{href:"https://github.com/acsmacedo",target:"_blank"}},[t._v("Anderson Macedo")])])}],u={methods:{open:function(){var t=document.querySelector(".menu__colapse"),e=document.querySelector(".overlay");t.style.display="flex",e.style.display="block"},close:function(){var t=document.querySelector(".menu__colapse"),e=document.querySelector(".overlay");t.style.display="none",e.style.display="none"}}},c=u,l=i("2877"),m=Object(l["a"])(c,o,r,!1,null,null,null),d=m.exports,p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",[i("ul",{staticClass:"menu__colapse",on:{click:t.close}},[i("router-link",{attrs:{to:{name:"Home"}}},[t._v("home")]),i("router-link",{attrs:{to:{name:"About"}}},[t._v("about")]),i("router-link",{attrs:{to:{name:"Blog"}}},[t._v("blog")]),i("router-link",{attrs:{to:{name:"Project"}}},[t._v("project")])],1),i("div",{staticClass:"overlay",on:{click:t.close}})])},f=[],g={methods:{open:function(){var t=document.querySelector(".menu__colapse"),e=document.querySelector(".overlay");t.style.display="flex",e.style.display="block"},close:function(){var t=document.querySelector(".menu__colapse"),e=document.querySelector(".overlay");t.style.display="none",e.style.display="none"}}},v=g,_=Object(l["a"])(v,p,f,!1,null,null,null),b=_.exports,q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",{staticClass:"footer"},[i("NsaFooterForm"),i("NsaFooterMedia"),i("NsaFooterMap"),i("NsaFooterCopy")],1)},h=[],P=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"footer__form"},[t._m(0),i("form",{staticClass:"footer__form__subscribe",on:{submit:function(t){t.preventDefault()}}},[i("input",{attrs:{type:"text",placeholder:"Enter your email"}}),i("button",[t._v("Subscribe")])])])},x=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer__form__title title"},[i("h2",[t._v("Subscribe")]),i("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil perspiciatis eaque consequatur excepturi, sunt totam voluptas nemo reiciendis.")])])}],y={},j=y,k=Object(l["a"])(j,P,x,!1,null,null,null),L=k.exports,C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"footer__media"},[i("div",[i("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault()}}},[i("i",{staticClass:"bx bxl-instagram"})]),i("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault()}}},[i("i",{staticClass:"bx bxl-facebook"})]),i("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault()}}},[i("i",{staticClass:"bx bxl-twitter"})]),i("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault()}}},[i("i",{staticClass:"bx bxl-behance"})]),i("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault()}}},[i("i",{staticClass:"bx bxl-github"})])])])},w=[],N={},S=N,O=Object(l["a"])(S,C,w,!1,null,null,null),E=O.exports,$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"footer__info"},[i("div",{staticClass:"footer__info__nas"},[i("h4",[t._v("Anderson Macedo")]),i("p",[t._v("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus ratione ea et dignissimos nostrum magnam explicabo natus, fugit nam vero doloribus iste incidunt consequuntur illo vitae quas asperiores voluptas eveniet.")])]),i("div",{staticClass:"footer__info__links"},[i("h4",[t._v("Front-end")]),i("p",[t._v("HTML")]),i("p",[t._v("CSS")]),i("p",[t._v("Javascript")]),i("p",[t._v("Sass")])]),i("div",{staticClass:"footer__info__links"},[i("h4",[t._v("Framework")]),i("p",[t._v("Vue")]),i("p",[t._v("Vuex")]),i("p",[t._v("Vue Router")]),i("p",[t._v("Vue/Cli")])]),i("div",{staticClass:"footer__info__links"},[i("h4",[t._v("Navigation")]),i("p",[t._v("Home")]),i("p",[t._v("About")]),i("p",[t._v("Blog")]),i("p",[t._v("Project")])])])}],H={},M=H,F=Object(l["a"])(M,$,I,!1,null,null,null),T=F.exports,A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},B=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"footer__copy"},[i("p",[t._v("Criado por "),i("a",{attrs:{href:"https://github.com/acsmacedo",target:"_blank"}},[t._v("Anderson Macedo")])])])}],D={},V=D,J=Object(l["a"])(V,A,B,!1,null,null,null),R=J.exports,W={components:{NsaFooterForm:L,NsaFooterMedia:E,NsaFooterMap:T,NsaFooterCopy:R}},Y=W,z=Object(l["a"])(Y,q,h,!1,null,null,null),G=z.exports,K={components:{NsaMenu:d,NsaMenuColapse:b,NsaFooter:G},methods:{up:function(){window.scrollTo(0,0)}}};document.addEventListener("scroll",(function(){window.scrollY>window.innerHeight-60?document.querySelector(".btn-up").style.display="flex":document.querySelector(".btn-up").style.display="none"}));var Q=K,U=(i("5c0b"),Object(l["a"])(Q,n,a,!1,null,null,null)),X=U.exports,Z=(i("d3b7"),i("8c4f")),tt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("NsaHomeHeader"),i("NsaAboutHeader"),i("div",{staticClass:"home__about"},[i("NsaBtn",{attrs:{link:"/about"}})],1),i("NsaHomePost"),i("NsaProjectHeader"),i("div",{staticClass:"home__project"},[i("NsaBtn",{attrs:{link:"/project"}})],1)],1)},et=[],it=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"home__header"},[t._m(0),i("div",{staticClass:"home__header__scroll",on:{click:t.scroll}},[i("i",{staticClass:"bx bx-down-arrow-alt"})])])},st=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home__header__container"},[i("h1",[t._v("Hello! I'm Anderson Macedo")]),i("p",[t._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem est voluptate aliquid nisi iure esse accusantium repellendus veritatis modi perspiciatis fuga, quia alias fugit exercitationem distinctio.")]),i("a",{attrs:{href:"https://github.com/acsmacedo",target:"_blank"}},[t._v("Learn more")])])}],nt={methods:{scroll:function(){window.scrollTo(0,window.innerHeight-47)}}},at=nt,ot=Object(l["a"])(at,it,st,!1,null,null,null),rt=ot.exports,ut=i("7ef8"),ct=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"home__post"},[i("NsaTitle",{attrs:{title:"Last news",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices elit nullam nunc justo sagittis suscipit ultrices."}}),i("div",{staticClass:"home__post__items"},t._l(3,(function(e){return i("NsaPreviewPost",{key:t.blogPost[e-1].id,attrs:{img:t.blogPost[e-1].img,imgInfo:t.blogPost[e-1].imgInfo,title:t.blogPost[e-1].title,text:t.blogPost[e-1].text,href:"/blog/"+t.blogPost[e-1].id}})})),1)],1)},lt=[],mt=i("5530"),dt=i("2f62"),pt=i("6f7f"),ft=i("e5c4"),gt={components:{NsaPreviewPost:pt["a"],NsaTitle:ft["a"]},computed:Object(mt["a"])({},Object(dt["b"])(["blogPost"]))},vt=gt,_t=Object(l["a"])(vt,ct,lt,!1,null,null,null),bt=_t.exports,qt=i("fed9"),ht=i("fe1b"),Pt={components:{NsaHomeHeader:rt,NsaAboutHeader:ut["a"],NsaHomePost:bt,NsaProjectHeader:qt["a"],NsaBtn:ht["a"]}},xt=Pt,yt=Object(l["a"])(xt,tt,et,!1,null,null,null),jt=yt.exports;s["a"].use(Z["a"]);var kt=[{path:"/",name:"Home",component:jt},{path:"/about",name:"About",component:function(){return i.e("chunk-56e6d83d").then(i.bind(null,"b6d7"))}},{path:"/project",name:"Project",component:function(){return i.e("chunk-6222fb80").then(i.bind(null,"79c3"))}},{path:"/blog",name:"Blog",component:function(){return i.e("chunk-2d0da7ce").then(i.bind(null,"6c8c"))}},{path:"/blog/:post",name:"Post",component:function(){return i.e("chunk-2d0ae528").then(i.bind(null,"0a23"))}}],Lt=new Z["a"]({mode:"history",scrollBehavior:function(t,e,i){return i||{x:0,y:0}},base:"/",routes:kt}),Ct=Lt;i("7db0");s["a"].use(dt["a"]);var wt=new dt["a"].Store({state:{aboutIcon:[{id:0,icon:"bx bx-paint",title:"Web Design",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices."},{id:1,icon:"bx bx-code-block",title:"Development",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices."},{id:2,icon:"bx bx-camera",title:"Photography",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices."}],blogPost:[{id:1,img:"/post-1.jpg",imgInfo:"qualquer",title:"Post 1",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?\n        \n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?\n        \n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?\n        \n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?\n        "},{id:2,img:"/post-2.jpg",imgInfo:"qualquer",title:"Post 2",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?\n        \n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?\n        \n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?\n        \n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?\n        "},{id:3,img:"/post-3.jpg",imgInfo:"qualquer",title:"Post 3",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?\n        \n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?\n        \n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?\n        \n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?\n        "},{id:4,img:"/post-4.jpg",imgInfo:"qualquer",title:"Post 4",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?\n        \n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?\n        \n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?\n        \n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?\n        "},{id:5,img:"/post-5.jpg",imgInfo:"qualquer",title:"Post 5",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?\n        \n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?\n        \n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?\n        \n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?\n        "},{id:6,img:"/post-6.jpg",imgInfo:"qualquer",title:"Post 6",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?\n        \n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?\n        \n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?\n        \n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?\n        "},{id:7,img:"/post-7.jpg",imgInfo:"qualquer",title:"Post 7",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?\n        \n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?\n        \n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?\n        \n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?\n        "},{id:8,img:"/post-8.jpg",imgInfo:"qualquer",title:"Post 8",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?\n        \n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?\n        \n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?\n        \n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?\n        "},{id:9,img:"/post-9.jpg",imgInfo:"qualquer",title:"Post 9",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?\n        \n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?\n        \n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?\n        \n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?\n        "}],showPost:3},getters:{blogPost:function(t){return t.blogPost.reverse()},blogPostItem:function(t){return function(e){var i=t.blogPost.find((function(t){return t.id==e}));return i}}},mutations:{plusShowPost:function(t){t.showPost<t.blogPost.length&&(t.showPost+=3)}},modules:{}}),Nt=(i("82e8"),i("ab5c"),i("a7c6")),St=i.n(Nt);s["a"].use(St.a),s["a"].config.productionTip=!1,new s["a"]({router:Ct,store:wt,render:function(t){return t(X)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";var s=i("9c0c"),n=i.n(s);n.a},"6f7f":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("img",{attrs:{src:t.img,alt:t.imgInfo}}),i("span",[i("h3",[t._v(t._s(t.title))]),i("p",[t._v(t._s(t._f("truncate")(t.text,120)))]),i("NsaBtn",{attrs:{link:t.href}},[t._v("More")])],1)])},n=[],a=i("fe1b"),o={components:{NsaBtn:a["a"]},props:{img:String,imgInfo:String,title:String,text:String,href:String}},r=o,u=i("2877"),c=Object(u["a"])(r,s,n,!1,null,null,null);e["a"]=c.exports},"7ef8":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"about__header"},[i("NsaTitle",{attrs:{title:"About us",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices elit nullam nunc justo sagittis suscipit ultrices."}}),i("div",{staticClass:"about__header__text"},t._l(t.aboutIcon,(function(t){return i("NsaIconBox",{key:t.id,attrs:{title:t.title,text:t.text,icon:t.icon}})})),1)],1)},n=[],a=i("5530"),o=i("2f62"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("i",{class:t.icon}),i("h3",[t._v(t._s(t.title))]),i("p",[t._v(t._s(t.text))])])},u=[],c={props:{icon:String,title:String,text:String}},l=c,m=i("2877"),d=Object(m["a"])(l,r,u,!1,null,null,null),p=d.exports,f=i("e5c4"),g={components:{NsaIconBox:p,NsaTitle:f["a"]},computed:Object(a["a"])({},Object(o["d"])(["aboutIcon"]))},v=g,_=Object(m["a"])(v,s,n,!1,null,null,null);e["a"]=_.exports},"82e8":function(t,e,i){},"9c0c":function(t,e,i){},ab5c:function(t,e,i){},e5c4:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title"},[i("h2",[t._v(t._s(t.title))]),i("p",[t._v(t._s(t.text))])])},n=[],a={props:{title:String,text:String}},o=a,r=i("2877"),u=Object(r["a"])(o,s,n,!1,null,null,null);e["a"]=u.exports},fe1b:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("router-link",{staticClass:"btn",attrs:{to:t.link}},[t._t("default",[t._v("Learn more")])],2)},n=[],a={props:{link:String}},o=a,r=i("2877"),u=Object(r["a"])(o,s,n,!1,null,null,null);e["a"]=u.exports},fed9:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"project__header"},[i("NsaTitle",{attrs:{title:"Project",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices elit nullam nunc justo sagittis suscipit ultrices."}})],1)},n=[],a=i("e5c4"),o={components:{NsaTitle:a["a"]}},r=o,u=i("2877"),c=Object(u["a"])(r,s,n,!1,null,null,null);e["a"]=c.exports}});
//# sourceMappingURL=app.1cb73fd7.js.map