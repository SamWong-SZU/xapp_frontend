webpackJsonp([1],{0:function(t,e,n){t.exports=n("msSN")},"0NDe":function(t,e){},"3JWO":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"SET_PAGE_SWITCHING",function(){return c}),n.d(e,"SET_PAGE_SCROLL_POSITION",function(){return l}),n.d(e,"state",function(){return u}),n.d(e,"mutations",function(){return h}),n.d(e,"actions",function(){return d});var a,i=n("a3Yh"),s=n.n(i),r=n("4YfN"),o=n.n(r),c="SET_PAGE_SWITCHING",l="SET_PAGE_SCROLL_POSITION",u=function(){return{isPageSwitching:!1,scrollPostionMap:{}}},h=(a={},s()(a,c,function(t,e){t.isPageSwitching=e}),s()(a,l,function(t,e){var n=e.pageId,a=e.scrollPosition;t.scrollPostionMap=o()({},t.scrollPostionMap,s()({},n,a))}),a),d={setPageSwitching:function(t,e){(0,t.commit)(c,e)},savePageScrollPosition:function(t,e){var n=t.commit,a=e.pageId,i=e.scrollPosition;n(l,{pageId:a,scrollPosition:i})}}},"5e9e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"state",function(){return a}),n.d(e,"mutations",function(){return i});var a=function(){return{enable:!1,type:"none",effect:"none"}},i={setType:function(t,e){t.type=e},setEffect:function(t,e){t.effect=e}}},B7xE:function(t,e){},CJsk:function(t,e){},IaLg:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"SET_SIDEBAR_VISIBILITY",function(){return i}),n.d(e,"state",function(){return s}),n.d(e,"mutations",function(){return r}),n.d(e,"actions",function(){return o});var a=n("a3Yh"),i="SET_SIDEBAR_VISIBILITY",s=function(){return{show:!1,title:{imageLeft:"",altLeft:"",iconLeft:"home",text:"Home",imageRight:"",altRight:"",iconRight:""},blocks:[{sublistTitle:"Sublist1",list:[{text:"Detail Page 1",icon:"sentiment_satisfied",route:"/detail/1"},{text:"Detail Page 2",image:"https://github.com/google/material-design-icons/blob/master/social/2x_web/ic_mood_bad_black_48dp.png?raw=true",alt:"mood-bad",route:"/detail/2"},{text:"Detail Page 3",icon:"sentiment_neutral",route:"/detail/3"}]}]}},r=n.n(a)()({},i,function(t,e){t.show=e}),o={showSidebar:function(t){(0,t.commit)(i,!0)},hideSidebar:function(t){(0,t.commit)(i,!1)}}},Jfi4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"SET_APP_HEADER",function(){return o}),n.d(e,"state",function(){return c}),n.d(e,"mutations",function(){return l}),n.d(e,"actions",function(){return u});var a=n("a3Yh"),i=n.n(a),s=n("aA9S"),r=n.n(s),o="SET_APP_HEADER",c=function(){return{show:!0,title:"Lavas123",logoIcon:{src:"",alt:""},showMenu:!0,showBack:!1,showLogo:!1,actions:[]}},l=i()({},o,function(t,e){t=r()(t,e)}),u={setAppHeader:function(t,e){(0,t.commit)(o,e)}}},RVH4:function(t,e){},Uz7q:function(t,e){t.exports={buildVersion:1540292932304,build:{ssr:!1,publicPath:"/xapp_frontend/dist/",compress:!0,cssExtract:!0},middleware:{all:[],server:[],client:[]},router:{mode:"hash",base:"/xapp_frontend/dist/",pageTransition:{type:"slide",transitionClass:"slide"}},errorHandler:{defaultErrorMessage:"Internal Server Error",showRealErrorMessage:!1,errorPath:"/error"},serviceWorker:{enable:!0,swDest:"E:\\xapp_frontend\\dist\\service-worker.js"},skeleton:{enable:!0,asyncCSS:!0}}},VfP6:function(t,e,n){var a={"./appShell/appHeader.js":"Jfi4","./appShell/appSidebar.js":"IaLg","./appShell/common.js":"3JWO","./pageTransition.js":"5e9e"};function i(t){return n(s(t))}function s(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}i.keys=function(){return Object.keys(a)},i.resolve=s,t.exports=i,i.id="VfP6"},X85k:function(t,e){},ZavL:function(t,e){},b6TX:function(t,e){},eZkJ:function(t,e){},msSN:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("rVsN"),i=n.n(a),s=n("IHPB"),r=n.n(s),o=n("lC5x"),c=n.n(o),l=n("J0Oq"),u=n.n(l),h=n("++MA"),d=n("Umb+"),p=function(){var t=u()(c.a.mark(function t(e){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();function f(t,e){var n={isClient:!0,app:e,store:t.store,route:t.to,from:t.from},a=t.next;return n.params=n.route.params||{},n.query=n.route.query||{},n.redirect=function(t){var e=t.status,i=void 0===e?302:e,s=t.path,r=void 0===s?"":s,o=t.query,c=void 0===o?{}:o,l=t.external,u=void 0!==l&&l;n._redirected=!0,a({path:r,query:c,status:i,external:u})},n}var v=function(){var t=u()(c.a.mark(function t(e,n){var a;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=0;case 1:if(!(a<e.length)){t.next=9;break}if(!n._redirected){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,m(e[a],n);case 6:a++,t.next=1;break;case 9:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}();function m(t,e){var n=void 0;return 2===t.length?n=new i.a(function(n,a){t(e,function(t,i){t?(e.error(t),a(t)):n(i)})}):(n=t(e))&&(n instanceof i.a||"function"==typeof n.then)||(n=i.a.resolve(n)),n}var _=n("Uz7q"),b=n.n(_),w=n("4YfN"),g=n.n(w),y=n("7WjQ"),S=n.n(y),k=n("3cXf"),C=n.n(k),x=n("hRKE"),P=n.n(x),E=n("cigS"),T={name:"appshell",metaInfo:{title:"Lavas",meta:[{name:"keywords",content:"lavas PWA"},{name:"description",content:"基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题"}],bodyAttrs:{"empty-appshell":void 0}}},A=n("QAAC"),$=Object(A.a)(T,function(){var t=this.$createElement;return(this._self._c||t)("div")},[],!1,null,null,null).exports;var I=function(t){n("tzwg")},O=Object(A.a)({name:"detailId",data:function(){return{state:{appHeaderState:{show:!0,title:"Lavas123",showMenu:!1,showBack:!0,showLogo:!1,actions:[]}}}},activated:function(){this.setState(this.$store,this.state)}},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"detail-wrapper"},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs10:"","offset-xs1":""}},[n("article",{staticClass:"detail-content text-xs-center"},[n("header",{staticClass:"detail-title text-xs-center"},[t._v("\n                        Detail "+t._s(t.$route.params.id)+"\n                    ")]),t._v(" "),n("router-link",{attrs:{to:{name:"detailId",params:{id:Number(t.$route.params.id)+1},query:{nav:this.$route.query.nav}}}},[t._v("\n                        Detail "+t._s(Number(t.$route.params.id)+1)+"\n                    ")]),t._v(" "),n("p",[t._v("\n                    Progressive Web Apps are user experiences that have the reach of the web, and are:\nReliable - Load instantly and never show the downasaur, even in uncertain network conditions.\nFast - Respond quickly to user interactions with silky smooth animations and no janky scrolling.\n                    ")]),t._v(" "),n("p",[t._v("\n                    Progressive Web Apps are user experiences that have the reach of the web, and are:\nReliable - Load instantly and never show the downasaur, even in uncertain network conditions.\nFast - Respond quickly to user interactions with silky smooth animations and no janky scrolling.\n                    ")]),t._v(" "),n("p",[t._v("\n                    Progressive Web Apps are user experiences that have the reach of the web, and are:\nReliable - Load instantly and never show the downasaur, even in uncertain network conditions.\nFast - Respond quickly to user interactions with silky smooth animations and no janky scrolling.\n                    ")]),t._v(" "),n("p",[t._v("\n                    Progressive Web Apps are user experiences that have the reach of the web, and are:\nReliable - Load instantly and never show the downasaur, even in uncertain network conditions.\nFast - Respond quickly to user interactions with silky smooth animations and no janky scrolling.\n                    ")]),t._v(" "),n("p",[t._v("\n                    Progressive Web Apps are user experiences that have the reach of the web, and are:\nReliable - Load instantly and never show the downasaur, even in uncertain network conditions.\nFast - Respond quickly to user interactions with silky smooth animations and no janky scrolling.\n                    ")])],1)])],1)],1)},[],!1,I,"data-v-39ac1c7f",null).exports,L=n("ZLEe"),H=n.n(L),j={name:"error",computed:{message:function(){return this.$route.params.error||"您访问的路径不存在"}},created:function(){var t=this.$route.query;0!==H()(t).length&&this.$router.replace({name:"error",params:t})}},R=Object(A.a)(j,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-error"},[e("p",[this._v(this._s(this.message))])])},[],!1,null,null,null).exports;var N=function(t){n("b6TX")},W={name:"index",components:{recommend:Object(A.a)({name:"recommend",mounted:function(){this.$refs.recommentList.scrollTo(20,0)}},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"recomment-page"},[n("h2",[t._v("精品推荐")]),t._v(" "),n("ul",{ref:"recommentList",staticClass:"recommend"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),n("li")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"detail/1"}},[e("div",{staticClass:"cover-container"},[e("div",{staticClass:"cover"})]),this._v(" "),e("span",{staticClass:"title"},[this._v("Dice Shake")]),this._v(" "),e("p",{staticClass:"brief"},[this._v("Shake your device to roll the dice.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"detail/1"}},[e("div",{staticClass:"cover-container"},[e("div",{staticClass:"cover"})]),this._v(" "),e("span",{staticClass:"title"},[this._v("Dice Shake")]),this._v(" "),e("p",{staticClass:"brief"},[this._v("Shake your device to roll the dice.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"detail/1"}},[e("div",{staticClass:"cover-container"},[e("div",{staticClass:"cover"})]),this._v(" "),e("span",{staticClass:"title"},[this._v("Dice Shake")]),this._v(" "),e("p",{staticClass:"brief"},[this._v("Shake your device to roll the dice.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"detail/1"}},[e("div",{staticClass:"cover-container"},[e("div",{staticClass:"cover"})]),this._v(" "),e("span",{staticClass:"title"},[this._v("Dice Shake")]),this._v(" "),e("p",{staticClass:"brief"},[this._v("Shake your device to roll the dice.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"detail/1"}},[e("div",{staticClass:"cover-container"},[e("div",{staticClass:"cover"})]),this._v(" "),e("span",{staticClass:"title"},[this._v("Dice Shake")]),this._v(" "),e("p",{staticClass:"brief"},[this._v("Shake your device to roll the dice.")])])])}],!1,N,"data-v-1f090fdd",null).exports},metaInfo:{title:"Home",titleTemplate:"%s - Lavas",meta:[{name:"keywords",content:"lavas PWA"},{name:"description",content:"基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题"}]},data:function(){return{state:{appHeaderState:{show:!0,title:"XApp",showMenu:!0,showBack:!1,showLogo:!1,actions:[]}}}},activated:function(){this.setState(this.$store,this.state)}};var M=function(t){n("ZavL")},q=Object(A.a)(W,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index-page"},[e("recommend")],1)},[],!1,M,"data-v-79c6cce3",null).exports,D=n("HVJf"),B={appHeaderState:{show:!1}};function Y(t){t.dispatch("appShell/appHeader/setAppHeader",B.appHeaderState)}var V={name:"search",metaInfo:{title:"Search",titleTemplate:"%s - Lavas",meta:[{name:"keywords",content:"lavas PWA"},{name:"description",content:"基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题"}]},data:function(){return{query:"",loading:!1,data:[]}},methods:{search:function(){var t=u()(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.data=[],this.loading=!0,this.$el.querySelector(".search-input").blur(),t.next=5,new i.a(function(t){setTimeout(t,1e3)});case 5:this.data=[{title:"Ali Connors",headline:"Brunch this weekend?",subtitle:"I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",action:"15 min"},{title:"me, Scrott, Jennifer",headline:"Summer BBQ",subtitle:"Wish I could come, but I'm out of town this weekend.",action:"2 hr"},{title:"Sandra Adams",headline:"Oui oui",subtitle:"Do you have Paris recommendations? Have you ever been?",action:"6 hr"},{title:"Trevor Hansen",headline:"Birthday gift",subtitle:"Have any ideas about what we should get Heidi for her birthday?",action:"12 hr"},{title:"Britta Holt",headline:"Recipe to try",subtitle:"We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",action:"18 hr"}],this.loading=!1;case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},asyncData:function(){var t=u()(c.a.mark(function t(e){var n=e.store;e.route;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:Y(n);case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),activated:function(){Y(this.$store)}};var J=function(t){n("X85k")},F=[{path:"/appshell",component:$,meta:{},name:"appshell"},{path:"/detail/:id",component:O,meta:{},name:"detailId"},{path:"/",component:q,meta:{},name:"index"},{path:"/search",component:Object(A.a)(V,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-search-page"},[n("header",[n("v-btn",{staticClass:"search-btn",attrs:{light:"",icon:""},nativeOn:{click:function(e){t.$router.go(-1)}}},[n("v-icon",{staticClass:"search-icon"},[t._v("arrow_back")])],1),t._v(" "),n("form",{on:{submit:function(e){return e.preventDefault(),t.search(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"search-input",attrs:{type:"search",autocomplete:"off",placeholder:"请输入搜索词",autocapitalize:"off"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}})]),t._v(" "),n("v-btn",{staticClass:"search-btn",attrs:{light:"",icon:""},nativeOn:{click:function(e){t.query=""}}},[n("v-icon",{staticClass:"search-icon"},[t._v("close")])],1)],1),t._v(" "),t.loading?n("div",{staticClass:"search-loading"},[n("v-progress-circular",{staticClass:"primary--text",attrs:{indeterminate:"",size:70}})],1):t._e(),t._v(" "),t.data&&t.data.length?n("div",{staticClass:"search-content"},[n("v-list",{attrs:{"two-line":""}},[t._l(t.data,function(e,a){return[n("v-list-tile",{key:e.title,attrs:{avatar:"",ripple:""}},[n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.title))]),t._v(" "),n("v-list-tile-sub-title",{staticClass:"grey--text text--darken-4"},[t._v(t._s(e.headline))]),t._v(" "),n("v-list-tile-sub-title",[t._v(t._s(e.subtitle))])],1),t._v(" "),n("v-list-tile-action",[n("v-list-tile-action-text",[t._v(t._s(e.action))]),t._v(" "),n("v-icon",{staticClass:"grey--text text--lighten-1"},[t._v("star_border")])],1)],1),t._v(" "),a+1<t.data.length?n("v-divider",{attrs:{light:""}}):t._e()]})],2)],1):t._e()])},[],!1,J,"data-v-22543504",null).exports,meta:{},name:"search"},{path:"/error",component:R,meta:{},name:"error",alias:"*"}];h.a.use(E.a);var X=["index"],G=[],z=[],U="LAVAS_HISTORY_ARRAY_STACK_LOCAL_KEY",K="LAVAS_HISTORY_STATE_STACK_LOCAL_KEY",Z=[],Q=!1;function tt(){return history.state?history.state.key:""}function et(t,e){try{localStorage.setItem(t,"object"===(void 0===e?"undefined":P()(e))?C()(e):e)}catch(t){}}function nt(t,e){var n=!0;return Q?(n=function(){var t=Z.indexOf(tt());return t===Z.length-1||-1===t||(Z.length=t+1,!1)}(),setTimeout(function(){var t=tt(),e=Z.indexOf(t);n&&-1===e&&Z.push(t),et(K,Z)},300)):((n=function(t,e){var n=z.indexOf(t.fullPath);return-1===n||(z.length=n+1,!1)}(t))&&z.push(t.fullPath),et(U,z)),t.name&&-1!==X.indexOf(t.name)?n=!1:t.name&&-1!==G.indexOf(t.name)&&(n=!0),n}Q=window.history&&"state"in history;var at=function(t,e,n){if(n)return n;var a={};return t.hash&&(a.selector=t.hash),t.matched.some(function(t){return t.meta.scrollToTop})&&(a.x=0,a.y=0),a};F.filter(function(t){return t.keepAlive||t.meta.keepAlive}).map(function(t){return t.name});function it(){var t=new E.a({mode:"hash",base:"/xapp_frontend/dist/",scrollBehavior:at,routes:F});return Q?function(){if(history.length>1)try{var t=JSON.parse(localStorage.getItem(K));t&&t.length&&(Z=t.slice(-history.length))}catch(t){}setTimeout(function(){Z.length?Z[Z.length-1]=tt():Z.push(tt())},300)}():function(t){var e=location.href.replace(location.origin+t,"/");try{var n=JSON.parse(localStorage.getItem(U));n&&n.length&&n[n.length-1]===e&&(z=n)}catch(t){}-1===z.indexOf(e)&&z.push(e)}(t.options.base),t.beforeEach(function(e,n,a){if(t.app.$store&&t.app.$store.state.pageTransition.enable){var i=nt(e)?"slide-left":"slide-right";t.app.$store.commit("pageTransition/setType","slide"),t.app.$store.commit("pageTransition/setEffect",i)}a()}),t}var st=n("aA9S"),rt=n.n(st),ot=n("HzJ8"),ct=n.n(ot);h.a.use(D.a);var lt=n("VfP6"),ut=lt.keys(),ht={},dt=!0,pt=!1,ft=void 0;try{for(var vt,mt=ct()(ut);!(dt=(vt=mt.next()).done);dt=!0){var _t=vt.value;if("./index.js"===_t){ht=Tt(_t);break}}}catch(t){pt=!0,ft=t}finally{try{!dt&&mt.return&&mt.return()}finally{if(pt)throw ft}}if("function"!=typeof ht){ht.modules=ht.modules||{};var bt=!0,wt=!1,gt=void 0;try{for(var yt,St=ct()(ut);!(bt=(yt=St.next()).done);bt=!0){var kt=yt.value;if("./index.js"!==kt){var Ct=kt.replace(/^\.\//,"").replace(/\.js$/,""),xt=Ct.split("/"),Pt=At(ht,xt);Pt[Ct=xt.pop()]=Tt(kt),Pt[Ct].namespaced=!0}}}catch(t){wt=!0,gt=t}finally{try{!bt&&St.return&&St.return()}finally{if(wt)throw gt}}}var Et=ht instanceof Function?ht:function(){return new D.a.Store(rt()({},ht,{state:ht.state instanceof Function?ht.state():{}}))};function Tt(t){var e=lt(t),n=e.default||e;if(n.commit)throw new Error("[lavas] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[lavas] state should be a function in store/"+t.replace("./",""));return n}function At(t,e){if(1===e.length)return t.modules;var n=e.shift(),a=t.modules[n]=t.modules[n]||{};return a.namespaced=!0,a.modules=a.modules||{},At(a,e)}var $t=new h.a,It={name:"appHeader",computed:g()({},Object(D.c)("appShell/appHeader",["show","showMenu","showBack","showLogo","logoIcon","title","actions"]),Object(D.c)("appShell/common",["isPageSwitching"])),methods:{handleClick:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.actionIdx,a=e.route;if(!this.isPageSwitching){var i={};"action"===t&&(i.actionIdx=n),this.$emit("click-"+t,i),$t.$emit("app-header:click-"+t,i),a&&this.$router.push(a)}}}};var Ot=function(t){n("RVH4")},Lt=Object(A.a)(It,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide-down"}},[n("header",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"app-header-wrapper"},[n("div",{staticClass:"app-header-left"},[t.showMenu?n("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){t.handleClick("menu")}}},[n("v-icon",{staticClass:"app-header-icon",attrs:{color:"grey"}},[t._v("menu")])],1):t._e(),t._v(" "),t.showBack?n("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){t.handleClick("back")}}},[n("v-icon",{staticClass:"app-header-icon",attrs:{color:"grey"}},[t._v("arrow_back")])],1):t._e(),t._v(" "),t.showLogo?n("div",{on:{click:function(e){t.handleClick("logo")}}},[t._t("logo",[t.logoIcon.src?n("img",{staticClass:"app-header-icon",attrs:{src:t.logoIcon.src,alt:t.logoIcon.alt}}):t._e()])],2):t._e()],1),t._v(" "),n("div",{staticClass:"app-header-middle"},[t._t("title",[t._v("\n                "+t._s(t.title)+"\n            ")])],2),t._v(" "),n("div",{staticClass:"app-header-right"},[(t.showMenu||t.showBack||t.showLogo)&&t.actions.length<=0?n("v-btn",{staticStyle:{visibility:"hidden"},attrs:{icon:""}},[n("v-icon",{staticClass:"app-header-icon",attrs:{color:"grey"}},[t._v("arrow_back")])],1):t._e(),t._v(" "),t._l(t.actions,function(e,a){return t._t("actions",[n("v-btn",{attrs:{icon:"icon"},nativeOn:{click:function(n){t.handleClick("action",{actionIdx:a,route:e.route})}}},[e.icon?n("v-icon",{staticClass:"app-header-icon",attrs:{color:"grey"}},[t._v(t._s(e.icon))]):t._e()],1)],{icon:e.icon,route:e.route})})],2)])])},[],!1,Ot,"data-v-d022aee0",null).exports,Ht={name:"appFooter",props:{bottomNav:{type:String,default:"home"},changeNav:{type:Function,require:!0}},methods:{handleChangeNav:function(t){this.changeNav(t)}}},jt=Object(A.a)(Ht,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-bottom-nav",{attrs:{active:t.bottomNav,value:"",fixed:"",app:"",color:"transparent"},on:{"update:active":t.handleChangeNav}},[n("v-btn",{attrs:{color:"teal",flat:"",value:"home"}},[n("span",[t._v("首页")]),t._v(" "),n("v-icon",[t._v("home")])],1),t._v(" "),n("v-btn",{attrs:{color:"teal",flat:"",value:"type"}},[n("span",[t._v("分类")]),t._v(" "),n("v-icon",[t._v("search")])],1),t._v(" "),n("v-btn",{attrs:{color:"teal",flat:"",value:"rank"}},[n("span",[t._v("排行榜")]),t._v(" "),n("v-icon",[t._v("whatshot")])],1),t._v(" "),n("v-btn",{attrs:{color:"teal",flat:"",value:"about"}},[n("span",[t._v("关于")]),t._v(" "),n("v-icon",[t._v("info")])],1)],1)},[],!1,null,null,null).exports,Rt=n("a3Yh"),Nt=n.n(Rt),Wt=n("0Rst"),Mt=n.n(Wt),qt=function(t){setTimeout(t,1e3/60)};qt=window.requestAnimationFrame||window.webkitRequestAnimationFrame||qt;var Dt={props:{value:{type:Boolean,default:!1},enable:{type:Boolean,default:!0},width:{type:Number,default:.75},duration:{type:Number,default:200},region:Nt()({type:Object},"default",function(){return{top:0,bottom:0,left:0,width:40}})},data:function(){return{clientWidth:320,clientHeight:568,startX:0,startY:0,scrollEnable:!1,wrapperClass:{expand:!1,collapse:!0,"w-left":!0},opacity:0,iscroll:null}},computed:{itsWidth:function(){return this.width<1?Math.round(this.width*this.clientWidth):this.width},widthProp:function(){return this.itsWidth+"px"},status:{get:function(){return this.value},set:function(t){this.$emit("input",t)}},zone:function(){var t=this.region,e=t.top,n=t.right,a=t.bottom,i=t.left,s=t.width,r=t.height,o=this.clientWidth,c=this.clientHeight;return{top:void 0===e?c-a-r:e,left:void 0===i?o-n-s:i,width:void 0===s?o-i-n:s,height:void 0===r?c-e-i:r}}},watch:{status:function(t){t?this.expand():this.collapse()}},mounted:function(){this.clientWidth=document.documentElement.clientWidth,this.clientHeight=document.documentElement.clientHeight,document.body.addEventListener("touchstart",this.touchStart.bind(this)),document.body.addEventListener("touchmove",this.touchMove.bind(this))},methods:{touchStart:function(t){if(!this.wrapperClass.expand&&this.enable){var e=t.touches[0],n=e.clientX,a=e.clientY,i=this.zone,s=i.left,r=i.top,o=i.width,c=i.height;n<s||n>s+o||a<r||a>r+c||(this.scrollEnable=!0,this.startX=n,this.startY=a)}},touchMove:function(t){var e=this;if(this.scrollEnable){var n=t.touches[0],a=n.clientX,i=n.clientY,s=a-this.startX;s>5&&Math.abs(i-this.startY)/s<.577&&(this.wrapperClass.expand=!0,this.wrapperClass.collapse=!1,this.$nextTick(function(){e.bindScroll(t)}))}},toggleClick:function(t){this.status=!1},bindScroll:function(t){var e=this;this.iscroll||(this.iscroll=new Mt.a(this.$refs.sidebarWrapper,{eventPassthrough:!0,scrollY:!1,scrollX:!0,bounce:!1,startX:-this.itsWidth}),this.iscroll.on("scrollEnd",function(){var t=e.iscroll,n=t.directionX,a=t.x;0===a?e.status=!0:a===-e.itsWidth?e.status=!1:e.status=!(n>0)&&(n<0||!e.status)}),this.changeOpacity(),t&&this.iscroll._start(t))},expand:function(){var t=this;this.wrapperClass.expand=!0,this.wrapperClass.collapse=!1,this.$nextTick(function(){t.iscroll||t.bindScroll(),t.iscroll.x<0&&setTimeout(function(){t.iscroll&&t.iscroll.scrollTo(0,0,t.duration)},10)})},collapse:function(){var t=this;this.iscroll&&(this.iscroll.x===-this.itsWidth?this.unbindScroll():(setTimeout(function(){t.iscroll.scrollTo(-t.itsWidth,0,t.duration)}),setTimeout(function(){t.unbindScroll()},this.duration+10)))},unbindScroll:function(){this.iscroll&&(this.iscroll.destroy(),this.iscroll=null,this.wrapperClass.expand=!1,this.wrapperClass.collapse=!0,this.scrollEnable=!1,this.opacity=0,this.$refs.sidebarScroller.setAttribute("style","padding-left:"+this.widthProp))},changeOpacity:function(){this.wrapperClass.expand&&this.iscroll&&(this.opacity=(this.iscroll.x+this.itsWidth)/this.itsWidth*.5,qt(this.changeOpacity.bind(this)))}}};var Bt=function(t){n("eZkJ")},Yt={components:{Sidebar:Object(A.a)(Dt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"sidebarWrapper",staticClass:"sidebar-wrapper",class:t.wrapperClass},[n("div",{ref:"sidebarScroller",staticClass:"sidebar-scroller",style:{"padding-left":t.widthProp}},[n("div",{staticClass:"sidebar-main",style:{width:t.widthProp},on:{scroll:function(t){t.stopPropagation()}}},[t._t("default")],2),t._v(" "),n("div",{ref:"sidebarToggle",staticClass:"touch-toggle",style:{opacity:t.opacity,"padding-left":t.widthProp},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toggleClick(e)}}})])])},[],!1,Bt,"data-v-414ed5f0",null).exports},computed:g()({},Object(D.c)("appShell/appSidebar",["show","title","user","blocks"]),{sidebarStatus:{get:function(){return this.show},set:function(t){t?this.$emit("show-sidebar"):this.$emit("hide-sidebar")}},enableSidebar:function(){return this.$store.state.appShell.appHeader.show&&this.$store.state.appShell.appHeader.showMenu}}),methods:{close:function(){this.sidebarStatus=!1},closeAndGo:function(t){this.$router.push(t),this.close()}}};var Vt=function(t){n("B7xE")},Jt=Object(A.a)(Yt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("sidebar",{attrs:{enable:t.enableSidebar},model:{value:t.sidebarStatus,callback:function(e){t.sidebarStatus=e},expression:"sidebarStatus"}},[n("div",{staticClass:"app-sidebar-content"},[t.title?n("div",{staticClass:"app-sidebar-title",on:{click:function(e){e.stopPropagation(),t.closeAndGo("/")}}},[n("span",{staticClass:"app-sidebar-title-left-icon"},[t.title.imageLeft?n("img",{attrs:{src:t.title.imageLeft,alt:t.title.altLeft}}):t.title.iconLeft?n("v-icon",{attrs:{color:"white"}},[t._v(t._s(t.title.iconLeft))]):t._e()],1),t._v(" "),n("span",[t._v(t._s(t.title.text))]),t._v(" "),t._t("logo",[n("span",{staticClass:"app-sidebar-title-right-logo"},[t.title.imageRight?n("img",{attrs:{src:t.title.imageRight,alt:t.title.altRight}}):t.title.iconRight?n("v-icon",[t._v(t._s(t.title.iconRight))]):t._e()],1)])],2):t._e(),t._v(" "),t.user?n("div",{staticClass:"app-sidebar-user"},[n("div",{staticClass:"user-avatar"},[n("v-icon",{staticClass:"user-avatar-icon"},[t._v("face")])],1),t._v(" "),n("div",{staticClass:"user-info"},[n("div",{staticClass:"user-name"},[n("v-icon",[t._v("person")]),t._v(t._s(t.user.name))],1),t._v(" "),n("div",{staticClass:"user-location"},[n("v-icon",[t._v("room")]),t._v(t._s(t.user.location))],1),t._v(" "),n("div",{staticClass:"user-email"},[n("v-icon",[t._v("email")]),t._v(t._s(t.user.email))],1)])]):t._e(),t._v(" "),t.blocks?n("div",{staticClass:"app-sidebar-blocks"},[n("ul",t._l(t.blocks,function(e,a){return n("li",{key:a,staticClass:"app-sidebar-block"},[e.sublistTitle?n("div",{staticClass:"sub-list-title"},[t._v(t._s(e.sublistTitle))]):t._e(),t._v(" "),e.list?n("ul",t._l(e.list,function(e){return n("li",{key:e.text,on:{click:function(n){n.stopPropagation(),t.closeAndGo(e.route)}}},[e.icon||e.image?n("span",{staticClass:"app-sidebar-block-left-icon"},[e.image?n("img",{attrs:{src:e.image,alt:e.alt}}):e.icon?n("v-icon",[t._v(t._s(e.icon))]):t._e()],1):t._e(),t._v(" "),e.text?n("span",{staticClass:"app-sidebar-block-text"},[t._v(t._s(e.text))]):t._e()])})):t._e()])}))]):t._e()])])},[],!1,Vt,"data-v-e345e3d6",null).exports,Ft={name:"updateToast",props:{text:{type:String,default:"站点发生更新，请手动刷新"}},data:function(){return{show:!1}},mounted:function(){window.addEventListener("sw.update",this.handleUpdate)},beforeDestroy:function(){window.removeEventListener("sw.update",this.handleUpdate)},methods:{handleUpdate:function(t){this.show=!0},handleRefresh:function(){window.location.reload()}}};var Xt=function(t){n("0NDe")},Gt={name:"app",components:{UpdateToast:Object(A.a)(Ft,function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"popup"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"update-toast"},[e("span",[this._v(this._s(this.text))]),this._v(" "),e("span",{staticClass:"update-toast-close-btn",on:{click:this.handleRefresh}},[e("i",{staticClass:"iconfont icon-refresh"})])])])},[],!1,Xt,"data-v-fc732238",null).exports,AppHeader:Lt,AppSidebar:Jt,AppFooter:jt},computed:g()({},Object(D.c)("pageTransition",{pageTransitionType:function(t){return t.type},pageTransitionEffect:function(t){return t.effect}}),Object(D.c)("appShell/appHeader",{appHeaderShow:function(t){return t.show}}),Object(D.c)("appShell/common",{scrollPostionMap:function(t){return t.scrollPostionMap}}),{pageTransitionClass:function(){return"transition-"+this.pageTransitionType},routerViewKey:function(){var t=this.$route,e=t.name,n=t.params,a=H()(n);return a.length?e+a.reduce(function(t,e){return t+n[e]},""):null}}),data:function(){return{include:[],bottomNav:"home",tabCache:{},tabDefault:{home:"/",rank:"/detail/2",type:"/detail/3",about:"/detail/4"}}},methods:g()({},Object(D.b)("appShell/appSidebar",["showSidebar","hideSidebar"]),Object(D.b)("appShell/common",["setPageSwitching","savePageScrollPosition"]),{changeNav:function(t){var e=this.bottomNav;this.bottomNav=t,this.bottomNav===e?this.$router.push({path:this.tabDefault[t],query:{nav:t}}):this.$router.push({path:this.tabCache[t]||this.tabDefault[t],query:{nav:t}})},restoreContainerScrollPosition:function(t,e){t.classList.add("app-view-scroll-enabled"),t.scrollTop=e},restoreBodyScrollPosition:function(t,e){t.classList.remove("app-view-scroll-enabled"),document.body.scrollTop=document.documentElement.scrollTop=e},handleBeforeEnter:function(t){var e=this,n=t.dataset.pageId,a=(this.scrollPostionMap[n]||{}).y,i=void 0===a?0:a;this.setPageSwitching(!0),h.a.nextTick(function(){e.restoreContainerScrollPosition(t,i)})},handleAfterEnter:function(t){var e=t.dataset.pageId,n=(this.scrollPostionMap[e]||{}).y,a=void 0===n?0:n;this.setPageSwitching(!1),this.restoreBodyScrollPosition(t,a)},handleBeforeLeave:function(t){var e=t.dataset.pageId,n=document.body.scrollTop||document.documentElement.scrollTop;this.restoreContainerScrollPosition(t,n),this.savePageScrollPosition({pageId:e,scrollPosition:{y:n}})},handleClickHeaderBack:function(){this.$router.go(-1)},handleClickHeaderMenu:function(){this.showSidebar()},handleHideSidebar:function(){this.hideSidebar()},handleShowSidebar:function(){this.showSidebar()}}),mounted:function(){},watch:{$route:function(t,e){this.bottomNav=t.query.nav||"home",this.tabCache[this.bottomNav]=t.path}}};var zt=function(t){n("wHNC")},Ut=Object(A.a)(Gt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-app",[n("app-header",{staticClass:"app-shell-header",on:{"click-menu":t.handleClickHeaderMenu,"click-back":t.handleClickHeaderBack}}),t._v(" "),n("app-sidebar",{on:{"hide-sidebar":t.handleHideSidebar,"show-sidebar":t.handleShowSidebar}}),t._v(" "),n("app-footer",{attrs:{bottomNav:t.bottomNav,changeNav:t.changeNav}}),t._v(" "),n("transition",{attrs:{name:t.pageTransitionEffect},on:{"before-enter":t.handleBeforeEnter,"after-enter":t.handleAfterEnter,"before-leave":t.handleBeforeLeave}},[n("keep-alive",[n("router-view",{key:t.routerViewKey,staticClass:"app-view",class:[{"app-view-with-header":t.appHeaderShow},t.pageTransitionClass],attrs:{"data-page-id":t.$route.fullPath}})],1)],1),t._v(" "),n("update-toast")],1)],1)},[],!1,zt,null,null).exports,Kt=n("SEdL"),Zt=n.n(Kt);h.a.use(S.a),h.a.use(Zt.a),h.a.config.productionTip=!1,h.a.prototype.setState=function(t,e){t.dispatch("appShell/appHeader/setAppHeader",e.appHeaderState)},h.a.prototype.routerPush=function(t,e){t.query=t.query||{},t.query.nav=e,this.$router.push(t)};var Qt={data:function(){return{percent:0,show:!1,canSuccess:!0,duration:3e3,height:"2px",color:"#ffca2b",failedColor:"#ff0000"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,t.$nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}};var te=function(t){n("nJc9")},ee=Object(A.a)(Qt,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})},[],!1,te,"data-v-e0e1a4fc",null).exports,ne=n("ZGS7"),ae=n.n(ne),ie=n("eFXI"),se=n.n(ie);n("RpDc"),n("CJsk");ae.a.shim(),se.a.shim();var re=h.a.prototype.$loading=new h.a(ee).$mount(),oe=function(){var t=it(),e=Et();return{App:h.a.extend(g()({router:t,store:e},Ut)),router:t,store:e}}(),ce=oe.App,le=oe.router,ue=oe.store,he=b.a.build,de=he.ssr,pe=he.cssExtract,fe=b.a.middleware,ve=void 0===fe?{}:fe,me=b.a.skeleton,_e=me.enable,be=me.asyncCSS,we=void 0;window.__INITIAL_STATE__&&ue.replaceState(window.__INITIAL_STATE__),"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),document.body.appendChild(re.$el),h.a.mixin({beforeRouteUpdate:function(){var t=u()(c.a.mark(function t(e,n,a){var i;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:(i=this.$options.asyncData)?(re.start(),i.call(this,{store:this.$store,route:e}).then(function(){re.finish(),a()}).catch(a)):a();case 2:case"end":return t.stop()}},t,this)}));return function(e,n,a){return t.apply(this,arguments)}}()});var ge=!0;if(function(){var t=this;le.beforeEach(function(){var e=u()(c.a.mark(function e(n,a,i){var s,o,l,u,h,m,_;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(ge||n.path!==a.path){t.next=2;break}return t.abrupt("return",i());case 2:return ge=!1,s=le.getMatchedComponents(n),o=[].concat(r()(ve.all||[]),r()(ve.client||[]),r()(s.filter(function(t){var e=t.middleware;return!!e}).reduce(function(t,e){var n=e.middleware;return t.concat(n)},[]))),t.next=7,p(o);case 7:if(l=t.sent,!(u=o.find(function(t){return"function"!=typeof l[t]}))){t.next=11;break}throw new Error("Unknown middleware "+u);case 11:return h=!1,m=f({to:n,from:a,store:ue,next:function(t){if(re.finish&&re.finish(),!h){if(h=!0,t.external)return t.query=Object(d.stringify)(t.query),t.path=t.path+(t.query?"?"+t.query:""),window.location.replace(t.path),i();i(t)}}},we),_=o.map(function(t){return l[t]}),t.next=17,v(_,m);case 17:h||i();case 18:case"end":return t.stop()}},e,t)}));return function(t,n,a){return e.apply(this,arguments)}}())}(),!document.body.hasAttribute("empty-appshell")&&de)we=new ce,le.onReady(function(){Se(),we.$mount("#app")});else{var ye=_e&&be&&pe;window.mountLavas=function(){setTimeout(function(){var t=document.querySelector("#app");t&&(t.innerHTML=""),we.$mount("#app")},0)},Se(),we=new ce,(de||!ye||ye&&window.STYLE_READY)&&window.mountLavas()}function Se(){var t=this;le.beforeResolve(function(e,n,a){var s=le.getMatchedComponents(e),r=le.getMatchedComponents(n),o=!1,l=s.filter(function(t,e){return o||(o=r[e]!==t)});if(!l.length)return a();re.start(),i.a.all(l.filter(function(t){return t.asyncData&&(!t.asyncDataFetched||!e.meta.keepAlive)}).map(function(){var n=u()(c.a.mark(function n(a){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.asyncData({store:ue,route:e});case 2:a.asyncDataFetched=!0;case 3:case"end":return t.stop()}},n,t)}));return function(t){return n.apply(this,arguments)}}())).then(function(){re.finish(),a()}).catch(a)})}},nJc9:function(t,e){},tzwg:function(t,e){},wHNC:function(t,e){}},[0]);
//# sourceMappingURL=index.a4602237.js.map