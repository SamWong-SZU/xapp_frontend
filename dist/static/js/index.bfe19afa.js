webpackJsonp([1],{0:function(t,e,a){t.exports=a("msSN")},"0NDe":function(t,e){},"3JWO":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),a.d(e,"SET_PAGE_SWITCHING",function(){return c}),a.d(e,"SET_PAGE_SCROLL_POSITION",function(){return l}),a.d(e,"state",function(){return u}),a.d(e,"mutations",function(){return h}),a.d(e,"actions",function(){return d});var n,i=a("a3Yh"),r=a.n(i),s=a("4YfN"),o=a.n(s),c="SET_PAGE_SWITCHING",l="SET_PAGE_SCROLL_POSITION",u=function(){return{isPageSwitching:!1,scrollPostionMap:{}}},h=(n={},r()(n,c,function(t,e){t.isPageSwitching=e}),r()(n,l,function(t,e){var a=e.pageId,n=e.scrollPosition;t.scrollPostionMap=o()({},t.scrollPostionMap,r()({},a,n))}),n),d={setPageSwitching:function(t,e){(0,t.commit)(c,e)},savePageScrollPosition:function(t,e){var a=t.commit,n=e.pageId,i=e.scrollPosition;a(l,{pageId:n,scrollPosition:i})}}},"5e9e":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),a.d(e,"state",function(){return n}),a.d(e,"mutations",function(){return i});var n=function(){return{enable:!1,type:"none",effect:"none"}},i={setType:function(t,e){t.type=e},setEffect:function(t,e){t.effect=e}}},B7xE:function(t,e){},CJsk:function(t,e){},IaLg:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),a.d(e,"SET_SIDEBAR_VISIBILITY",function(){return i}),a.d(e,"state",function(){return r}),a.d(e,"mutations",function(){return s}),a.d(e,"actions",function(){return o});var n=a("a3Yh"),i="SET_SIDEBAR_VISIBILITY",r=function(){return{show:!1,title:{imageLeft:"",altLeft:"",iconLeft:"home",text:"Home",imageRight:"",altRight:"",iconRight:""},blocks:[{sublistTitle:"Sublist1",list:[{text:"Detail Page 1",icon:"sentiment_satisfied",route:"/detail/1"},{text:"Detail Page 2",image:"https://github.com/google/material-design-icons/blob/master/social/2x_web/ic_mood_bad_black_48dp.png?raw=true",alt:"mood-bad",route:"/detail/2"},{text:"Detail Page 3",icon:"sentiment_neutral",route:"/detail/3"}]}]}},s=a.n(n)()({},i,function(t,e){t.show=e}),o={showSidebar:function(t){(0,t.commit)(i,!0)},hideSidebar:function(t){(0,t.commit)(i,!1)}}},Jfi4:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),a.d(e,"SET_APP_HEADER",function(){return o}),a.d(e,"state",function(){return c}),a.d(e,"mutations",function(){return l}),a.d(e,"actions",function(){return u});var n=a("a3Yh"),i=a.n(n),r=a("aA9S"),s=a.n(r),o="SET_APP_HEADER",c=function(){return{show:!0,title:"Lavas123",logoIcon:{src:"",alt:""},showMenu:!0,showBack:!1,showLogo:!1,actions:[]}},l=i()({},o,function(t,e){t=s()(t,e)}),u={setAppHeader:function(t,e){(0,t.commit)(o,e)}}},RVH4:function(t,e){},Uz7q:function(t,e){t.exports={buildVersion:1540370230099,build:{ssr:!1,publicPath:"/xapp_frontend/dist/",compress:!0,cssExtract:!0},middleware:{all:[],server:[],client:[]},router:{mode:"hash",base:"/xapp_frontend/dist/",pageTransition:{type:"slide",transitionClass:"slide"}},errorHandler:{defaultErrorMessage:"Internal Server Error",showRealErrorMessage:!1,errorPath:"/error"},serviceWorker:{enable:!0,swDest:"E:\\xapp_frontend\\dist\\service-worker.js"},skeleton:{enable:!0,asyncCSS:!0}}},VfP6:function(t,e,a){var n={"./appShell/appHeader.js":"Jfi4","./appShell/appSidebar.js":"IaLg","./appShell/common.js":"3JWO","./pageTransition.js":"5e9e"};function i(t){return a(r(t))}function r(t){var e=n[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}i.keys=function(){return Object.keys(n)},i.resolve=r,t.exports=i,i.id="VfP6"},X85k:function(t,e){},XhBt:function(t,e){},eZkJ:function(t,e){},hFBo:function(t,e){},msSN:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("rVsN"),i=a.n(n),r=a("IHPB"),s=a.n(r),o=a("lC5x"),c=a.n(o),l=a("J0Oq"),u=a.n(l),h=a("++MA"),d=a("Umb+"),p=function(){var t=u()(c.a.mark(function t(e){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();function v(t,e){var a={isClient:!0,app:e,store:t.store,route:t.to,from:t.from},n=t.next;return a.params=a.route.params||{},a.query=a.route.query||{},a.redirect=function(t){var e=t.status,i=void 0===e?302:e,r=t.path,s=void 0===r?"":r,o=t.query,c=void 0===o?{}:o,l=t.external,u=void 0!==l&&l;a._redirected=!0,n({path:s,query:c,status:i,external:u})},a}var f=function(){var t=u()(c.a.mark(function t(e,a){var n;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=0;case 1:if(!(n<e.length)){t.next=9;break}if(!a._redirected){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,m(e[n],a);case 6:n++,t.next=1;break;case 9:case"end":return t.stop()}},t,this)}));return function(e,a){return t.apply(this,arguments)}}();function m(t,e){var a=void 0;return 2===t.length?a=new i.a(function(a,n){t(e,function(t,i){t?(e.error(t),n(t)):a(i)})}):(a=t(e))&&(a instanceof i.a||"function"==typeof a.then)||(a=i.a.resolve(a)),a}var _=a("Uz7q"),b=a.n(_),w=a("4YfN"),g=a.n(w),y=a("7WjQ"),S=a.n(y),k=a("3cXf"),C=a.n(k),x=a("hRKE"),P=a.n(x),T=a("cigS"),E={name:"appshell",metaInfo:{title:"Lavas",meta:[{name:"keywords",content:"lavas PWA"},{name:"description",content:"基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题"}],bodyAttrs:{"empty-appshell":void 0}}},A=a("QAAC"),I=Object(A.a)(E,function(){var t=this.$createElement;return(this._self._c||t)("div")},[],!1,null,null,null).exports;var $=function(t){a("tzwg")},O=Object(A.a)({name:"detailId",data:function(){return{state:{appHeaderState:{show:!0,title:"Lavas123",showMenu:!1,showBack:!0,showLogo:!1,actions:[]}}}},activated:function(){this.setState(this.$store,this.state)}},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail-wrapper"},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs10:"","offset-xs1":""}},[a("article",{staticClass:"detail-content text-xs-center"},[a("header",{staticClass:"detail-title text-xs-center"},[t._v("\n                        Detail "+t._s(t.$route.params.id)+"\n                    ")]),t._v(" "),a("router-link",{attrs:{to:{name:"detailId",params:{id:Number(t.$route.params.id)+1},query:{nav:this.$route.query.nav}}}},[t._v("\n                        Detail "+t._s(Number(t.$route.params.id)+1)+"\n                    ")]),t._v(" "),a("p",[t._v("\n                    Progressive Web Apps are user experiences that have the reach of the web, and are:\nReliable - Load instantly and never show the downasaur, even in uncertain network conditions.\nFast - Respond quickly to user interactions with silky smooth animations and no janky scrolling.\n                    ")]),t._v(" "),a("p",[t._v("\n                    Progressive Web Apps are user experiences that have the reach of the web, and are:\nReliable - Load instantly and never show the downasaur, even in uncertain network conditions.\nFast - Respond quickly to user interactions with silky smooth animations and no janky scrolling.\n                    ")]),t._v(" "),a("p",[t._v("\n                    Progressive Web Apps are user experiences that have the reach of the web, and are:\nReliable - Load instantly and never show the downasaur, even in uncertain network conditions.\nFast - Respond quickly to user interactions with silky smooth animations and no janky scrolling.\n                    ")]),t._v(" "),a("p",[t._v("\n                    Progressive Web Apps are user experiences that have the reach of the web, and are:\nReliable - Load instantly and never show the downasaur, even in uncertain network conditions.\nFast - Respond quickly to user interactions with silky smooth animations and no janky scrolling.\n                    ")]),t._v(" "),a("p",[t._v("\n                    Progressive Web Apps are user experiences that have the reach of the web, and are:\nReliable - Load instantly and never show the downasaur, even in uncertain network conditions.\nFast - Respond quickly to user interactions with silky smooth animations and no janky scrolling.\n                    ")])],1)])],1)],1)},[],!1,$,"data-v-39ac1c7f",null).exports,L=a("ZLEe"),q=a.n(L),H={name:"error",computed:{message:function(){return this.$route.params.error||"您访问的路径不存在"}},created:function(){var t=this.$route.query;0!==q()(t).length&&this.$router.replace({name:"error",params:t})}},j=Object(A.a)(H,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-error"},[e("p",[this._v(this._s(this.message))])])},[],!1,null,null,null).exports;var R=function(t){a("XhBt")};var N=function(t){a("hFBo")},W={name:"index",components:{recommend:Object(A.a)({name:"recommend",mounted:function(){this.$refs.recommentList.scrollTo(20,0)}},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"recomment-page"},[a("h2",[t._v("精品推荐")]),t._v(" "),a("ul",{ref:"recommentList",staticClass:"recommend"},[a("li",[a("router-link",{attrs:{to:{name:"detailId",params:{id:1},query:{nav:this.$route.query.nav}}}},[a("div",{staticClass:"cover-container"},[a("div",{staticClass:"cover"})]),t._v(" "),a("span",{staticClass:"recommend-title"},[t._v("Dice Shake")]),t._v(" "),a("p",{staticClass:"brief"},[t._v("Shake your device to roll the dice.")])])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:{name:"detailId",params:{id:1},query:{nav:this.$route.query.nav}}}},[a("div",{staticClass:"cover-container"},[a("div",{staticClass:"cover"})]),t._v(" "),a("span",{staticClass:"recommend-title"},[t._v("Dice Shake")]),t._v(" "),a("p",{staticClass:"brief"},[t._v("Shake your device to roll the dice.")])])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:{name:"detailId",params:{id:1},query:{nav:this.$route.query.nav}}}},[a("div",{staticClass:"cover-container"},[a("div",{staticClass:"cover"})]),t._v(" "),a("span",{staticClass:"recommend-title"},[t._v("Dice Shake")]),t._v(" "),a("p",{staticClass:"brief"},[t._v("Shake your device to roll the dice.")])])],1),t._v(" "),a("li")])])},[],!1,R,"data-v-502c16c4",null).exports,rank:Object(A.a)({name:"rank",mounted:function(){}},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"rank-page"},[a("h2",[t._v("排行榜\n        "),a("router-link",{staticClass:"sub-title",attrs:{to:{name:"detailId",params:{id:1},query:{nav:this.$route.query.nav}}}},[t._v("\n            更多\n        ")])],1),t._v(" "),a("p",[t._v("当下最热门的App，快用起来吧！")]),t._v(" "),a("ul",{ref:"rankList",staticClass:"rank"},[a("li",[a("router-link",{attrs:{to:{name:"detailId",params:{id:1},query:{nav:this.$route.query.nav}}}},[a("img",{attrs:{src:"https://d3frsattnbx5l6.cloudfront.net/1539285157804-towergame-icon-512.png"}}),t._v(" "),a("span",{staticClass:"app-name"},[t._v("Instagram")]),t._v(" "),a("span",{staticClass:"category"},[t._v("Social")])])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:{name:"detailId",params:{id:1},query:{nav:this.$route.query.nav}}}},[a("img",{attrs:{src:"https://d3frsattnbx5l6.cloudfront.net/1539285157804-towergame-icon-512.png"}}),t._v(" "),a("span",{staticClass:"app-name"},[t._v("Instagram")]),t._v(" "),a("span",{staticClass:"category"},[t._v("Social")])])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:{name:"detailId",params:{id:1},query:{nav:this.$route.query.nav}}}},[a("img",{attrs:{src:"https://d3frsattnbx5l6.cloudfront.net/1539285157804-towergame-icon-512.png"}}),t._v(" "),a("span",{staticClass:"app-name"},[t._v("Instagram")]),t._v(" "),a("span",{staticClass:"category"},[t._v("Social")])])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:{name:"detailId",params:{id:1},query:{nav:this.$route.query.nav}}}},[a("img",{attrs:{src:"https://d3frsattnbx5l6.cloudfront.net/1539285157804-towergame-icon-512.png"}}),t._v(" "),a("span",{staticClass:"app-name"},[t._v("Instagram")]),t._v(" "),a("span",{staticClass:"category"},[t._v("Social")])])],1)])])},[],!1,N,"data-v-53a68875",null).exports},metaInfo:{title:"Home",titleTemplate:"%s - Lavas",meta:[{name:"keywords",content:"lavas PWA"},{name:"description",content:"基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题"}]},data:function(){return{state:{appHeaderState:{show:!0,title:"XApp",showMenu:!0,showBack:!1,showLogo:!1,actions:[]}}}},activated:function(){this.setState(this.$store,this.state)}};var M=function(t){a("wS7A")},B=Object(A.a)(W,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index-page"},[e("recommend"),this._v(" "),e("rank")],1)},[],!1,M,"data-v-bf854812",null).exports,D=a("HVJf"),Y={appHeaderState:{show:!1}};function V(t){t.dispatch("appShell/appHeader/setAppHeader",Y.appHeaderState)}var F={name:"search",metaInfo:{title:"Search",titleTemplate:"%s - Lavas",meta:[{name:"keywords",content:"lavas PWA"},{name:"description",content:"基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题"}]},data:function(){return{query:"",loading:!1,data:[]}},methods:{search:function(){var t=u()(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.data=[],this.loading=!0,this.$el.querySelector(".search-input").blur(),t.next=5,new i.a(function(t){setTimeout(t,1e3)});case 5:this.data=[{title:"Ali Connors",headline:"Brunch this weekend?",subtitle:"I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",action:"15 min"},{title:"me, Scrott, Jennifer",headline:"Summer BBQ",subtitle:"Wish I could come, but I'm out of town this weekend.",action:"2 hr"},{title:"Sandra Adams",headline:"Oui oui",subtitle:"Do you have Paris recommendations? Have you ever been?",action:"6 hr"},{title:"Trevor Hansen",headline:"Birthday gift",subtitle:"Have any ideas about what we should get Heidi for her birthday?",action:"12 hr"},{title:"Britta Holt",headline:"Recipe to try",subtitle:"We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",action:"18 hr"}],this.loading=!1;case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},asyncData:function(){var t=u()(c.a.mark(function t(e){var a=e.store;e.route;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:V(a);case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),activated:function(){V(this.$store)}};var J=function(t){a("X85k")},X=[{path:"/appshell",component:I,meta:{},name:"appshell"},{path:"/detail/:id",component:O,meta:{},name:"detailId"},{path:"/",component:B,meta:{},name:"index"},{path:"/search",component:Object(A.a)(F,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-search-page"},[a("header",[a("v-btn",{staticClass:"search-btn",attrs:{light:"",icon:""},nativeOn:{click:function(e){t.$router.go(-1)}}},[a("v-icon",{staticClass:"search-icon"},[t._v("arrow_back")])],1),t._v(" "),a("form",{on:{submit:function(e){return e.preventDefault(),t.search(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"search-input",attrs:{type:"search",autocomplete:"off",placeholder:"请输入搜索词",autocapitalize:"off"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}})]),t._v(" "),a("v-btn",{staticClass:"search-btn",attrs:{light:"",icon:""},nativeOn:{click:function(e){t.query=""}}},[a("v-icon",{staticClass:"search-icon"},[t._v("close")])],1)],1),t._v(" "),t.loading?a("div",{staticClass:"search-loading"},[a("v-progress-circular",{staticClass:"primary--text",attrs:{indeterminate:"",size:70}})],1):t._e(),t._v(" "),t.data&&t.data.length?a("div",{staticClass:"search-content"},[a("v-list",{attrs:{"two-line":""}},[t._l(t.data,function(e,n){return[a("v-list-tile",{key:e.title,attrs:{avatar:"",ripple:""}},[a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.title))]),t._v(" "),a("v-list-tile-sub-title",{staticClass:"grey--text text--darken-4"},[t._v(t._s(e.headline))]),t._v(" "),a("v-list-tile-sub-title",[t._v(t._s(e.subtitle))])],1),t._v(" "),a("v-list-tile-action",[a("v-list-tile-action-text",[t._v(t._s(e.action))]),t._v(" "),a("v-icon",{staticClass:"grey--text text--lighten-1"},[t._v("star_border")])],1)],1),t._v(" "),n+1<t.data.length?a("v-divider",{attrs:{light:""}}):t._e()]})],2)],1):t._e()])},[],!1,J,"data-v-22543504",null).exports,meta:{},name:"search"},{path:"/error",component:j,meta:{},name:"error",alias:"*"}];h.a.use(T.a);var U=["index"],G=[],z=[],K="LAVAS_HISTORY_ARRAY_STACK_LOCAL_KEY",Z="LAVAS_HISTORY_STATE_STACK_LOCAL_KEY",Q=[],tt=!1;function et(){return history.state?history.state.key:""}function at(t,e){try{localStorage.setItem(t,"object"===(void 0===e?"undefined":P()(e))?C()(e):e)}catch(t){}}function nt(t,e){var a=!0;return tt?(a=function(){var t=Q.indexOf(et());return t===Q.length-1||-1===t||(Q.length=t+1,!1)}(),setTimeout(function(){var t=et(),e=Q.indexOf(t);a&&-1===e&&Q.push(t),at(Z,Q)},300)):((a=function(t,e){var a=z.indexOf(t.fullPath);return-1===a||(z.length=a+1,!1)}(t))&&z.push(t.fullPath),at(K,z)),t.name&&-1!==U.indexOf(t.name)?a=!1:t.name&&-1!==G.indexOf(t.name)&&(a=!0),a}tt=window.history&&"state"in history;var it=function(t,e,a){if(a)return a;var n={};return t.hash&&(n.selector=t.hash),t.matched.some(function(t){return t.meta.scrollToTop})&&(n.x=0,n.y=0),n};X.filter(function(t){return t.keepAlive||t.meta.keepAlive}).map(function(t){return t.name});function rt(){var t=new T.a({mode:"hash",base:"/xapp_frontend/dist/",scrollBehavior:it,routes:X});return tt?function(){if(history.length>1)try{var t=JSON.parse(localStorage.getItem(Z));t&&t.length&&(Q=t.slice(-history.length))}catch(t){}setTimeout(function(){Q.length?Q[Q.length-1]=et():Q.push(et())},300)}():function(t){var e=location.href.replace(location.origin+t,"/");try{var a=JSON.parse(localStorage.getItem(K));a&&a.length&&a[a.length-1]===e&&(z=a)}catch(t){}-1===z.indexOf(e)&&z.push(e)}(t.options.base),t.beforeEach(function(e,a,n){if(t.app.$store&&t.app.$store.state.pageTransition.enable){var i=nt(e)?"slide-left":"slide-right";t.app.$store.commit("pageTransition/setType","slide"),t.app.$store.commit("pageTransition/setEffect",i)}n()}),t}var st=a("aA9S"),ot=a.n(st),ct=a("HzJ8"),lt=a.n(ct);h.a.use(D.a);var ut=a("VfP6"),ht=ut.keys(),dt={},pt=!0,vt=!1,ft=void 0;try{for(var mt,_t=lt()(ht);!(pt=(mt=_t.next()).done);pt=!0){var bt=mt.value;if("./index.js"===bt){dt=At(bt);break}}}catch(t){vt=!0,ft=t}finally{try{!pt&&_t.return&&_t.return()}finally{if(vt)throw ft}}if("function"!=typeof dt){dt.modules=dt.modules||{};var wt=!0,gt=!1,yt=void 0;try{for(var St,kt=lt()(ht);!(wt=(St=kt.next()).done);wt=!0){var Ct=St.value;if("./index.js"!==Ct){var xt=Ct.replace(/^\.\//,"").replace(/\.js$/,""),Pt=xt.split("/"),Tt=It(dt,Pt);Tt[xt=Pt.pop()]=At(Ct),Tt[xt].namespaced=!0}}}catch(t){gt=!0,yt=t}finally{try{!wt&&kt.return&&kt.return()}finally{if(gt)throw yt}}}var Et=dt instanceof Function?dt:function(){return new D.a.Store(ot()({},dt,{state:dt.state instanceof Function?dt.state():{}}))};function At(t){var e=ut(t),a=e.default||e;if(a.commit)throw new Error("[lavas] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(a.state&&"function"!=typeof a.state)throw new Error("[lavas] state should be a function in store/"+t.replace("./",""));return a}function It(t,e){if(1===e.length)return t.modules;var a=e.shift(),n=t.modules[a]=t.modules[a]||{};return n.namespaced=!0,n.modules=n.modules||{},It(n,e)}var $t=new h.a,Ot={name:"appHeader",computed:g()({},Object(D.c)("appShell/appHeader",["show","showMenu","showBack","showLogo","logoIcon","title","actions"]),Object(D.c)("appShell/common",["isPageSwitching"])),methods:{handleClick:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e.actionIdx,n=e.route;if(!this.isPageSwitching){var i={};"action"===t&&(i.actionIdx=a),this.$emit("click-"+t,i),$t.$emit("app-header:click-"+t,i),n&&this.$router.push(n)}}}};var Lt=function(t){a("RVH4")},qt=Object(A.a)(Ot,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"slide-down"}},[a("header",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"app-header-wrapper"},[a("div",{staticClass:"app-header-left"},[t.showMenu?a("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){t.handleClick("menu")}}},[a("v-icon",{staticClass:"app-header-icon",attrs:{color:"grey"}},[t._v("menu")])],1):t._e(),t._v(" "),t.showBack?a("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){t.handleClick("back")}}},[a("v-icon",{staticClass:"app-header-icon",attrs:{color:"grey"}},[t._v("arrow_back")])],1):t._e(),t._v(" "),t.showLogo?a("div",{on:{click:function(e){t.handleClick("logo")}}},[t._t("logo",[t.logoIcon.src?a("img",{staticClass:"app-header-icon",attrs:{src:t.logoIcon.src,alt:t.logoIcon.alt}}):t._e()])],2):t._e()],1),t._v(" "),a("div",{staticClass:"app-header-middle"},[t._t("title",[t._v("\n                "+t._s(t.title)+"\n            ")])],2),t._v(" "),a("div",{staticClass:"app-header-right"},[(t.showMenu||t.showBack||t.showLogo)&&t.actions.length<=0?a("v-btn",{staticStyle:{visibility:"hidden"},attrs:{icon:""}},[a("v-icon",{staticClass:"app-header-icon",attrs:{color:"grey"}},[t._v("arrow_back")])],1):t._e(),t._v(" "),t._l(t.actions,function(e,n){return t._t("actions",[a("v-btn",{attrs:{icon:"icon"},nativeOn:{click:function(a){t.handleClick("action",{actionIdx:n,route:e.route})}}},[e.icon?a("v-icon",{staticClass:"app-header-icon",attrs:{color:"grey"}},[t._v(t._s(e.icon))]):t._e()],1)],{icon:e.icon,route:e.route})})],2)])])},[],!1,Lt,"data-v-d022aee0",null).exports,Ht={name:"appFooter",props:{bottomNav:{type:String,default:"home"},changeNav:{type:Function,require:!0}},methods:{handleChangeNav:function(t){this.changeNav(t)}}},jt=Object(A.a)(Ht,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-bottom-nav",{attrs:{active:t.bottomNav,value:"",fixed:"",app:"",color:"transparent"},on:{"update:active":t.handleChangeNav}},[a("v-btn",{attrs:{color:"teal",flat:"",value:"home"}},[a("span",[t._v("首页")]),t._v(" "),a("v-icon",[t._v("home")])],1),t._v(" "),a("v-btn",{attrs:{color:"teal",flat:"",value:"type"}},[a("span",[t._v("分类")]),t._v(" "),a("v-icon",[t._v("search")])],1),t._v(" "),a("v-btn",{attrs:{color:"teal",flat:"",value:"rank"}},[a("span",[t._v("排行榜")]),t._v(" "),a("v-icon",[t._v("whatshot")])],1),t._v(" "),a("v-btn",{attrs:{color:"teal",flat:"",value:"about"}},[a("span",[t._v("关于")]),t._v(" "),a("v-icon",[t._v("info")])],1)],1)},[],!1,null,null,null).exports,Rt=a("a3Yh"),Nt=a.n(Rt),Wt=a("0Rst"),Mt=a.n(Wt),Bt=function(t){setTimeout(t,1e3/60)};Bt=window.requestAnimationFrame||window.webkitRequestAnimationFrame||Bt;var Dt={props:{value:{type:Boolean,default:!1},enable:{type:Boolean,default:!0},width:{type:Number,default:.75},duration:{type:Number,default:200},region:Nt()({type:Object},"default",function(){return{top:0,bottom:0,left:0,width:40}})},data:function(){return{clientWidth:320,clientHeight:568,startX:0,startY:0,scrollEnable:!1,wrapperClass:{expand:!1,collapse:!0,"w-left":!0},opacity:0,iscroll:null}},computed:{itsWidth:function(){return this.width<1?Math.round(this.width*this.clientWidth):this.width},widthProp:function(){return this.itsWidth+"px"},status:{get:function(){return this.value},set:function(t){this.$emit("input",t)}},zone:function(){var t=this.region,e=t.top,a=t.right,n=t.bottom,i=t.left,r=t.width,s=t.height,o=this.clientWidth,c=this.clientHeight;return{top:void 0===e?c-n-s:e,left:void 0===i?o-a-r:i,width:void 0===r?o-i-a:r,height:void 0===s?c-e-i:s}}},watch:{status:function(t){t?this.expand():this.collapse()}},mounted:function(){this.clientWidth=document.documentElement.clientWidth,this.clientHeight=document.documentElement.clientHeight,document.body.addEventListener("touchstart",this.touchStart.bind(this)),document.body.addEventListener("touchmove",this.touchMove.bind(this))},methods:{touchStart:function(t){if(!this.wrapperClass.expand&&this.enable){var e=t.touches[0],a=e.clientX,n=e.clientY,i=this.zone,r=i.left,s=i.top,o=i.width,c=i.height;a<r||a>r+o||n<s||n>s+c||(this.scrollEnable=!0,this.startX=a,this.startY=n)}},touchMove:function(t){var e=this;if(this.scrollEnable){var a=t.touches[0],n=a.clientX,i=a.clientY,r=n-this.startX;r>5&&Math.abs(i-this.startY)/r<.577&&(this.wrapperClass.expand=!0,this.wrapperClass.collapse=!1,this.$nextTick(function(){e.bindScroll(t)}))}},toggleClick:function(t){this.status=!1},bindScroll:function(t){var e=this;this.iscroll||(this.iscroll=new Mt.a(this.$refs.sidebarWrapper,{eventPassthrough:!0,scrollY:!1,scrollX:!0,bounce:!1,startX:-this.itsWidth}),this.iscroll.on("scrollEnd",function(){var t=e.iscroll,a=t.directionX,n=t.x;0===n?e.status=!0:n===-e.itsWidth?e.status=!1:e.status=!(a>0)&&(a<0||!e.status)}),this.changeOpacity(),t&&this.iscroll._start(t))},expand:function(){var t=this;this.wrapperClass.expand=!0,this.wrapperClass.collapse=!1,this.$nextTick(function(){t.iscroll||t.bindScroll(),t.iscroll.x<0&&setTimeout(function(){t.iscroll&&t.iscroll.scrollTo(0,0,t.duration)},10)})},collapse:function(){var t=this;this.iscroll&&(this.iscroll.x===-this.itsWidth?this.unbindScroll():(setTimeout(function(){t.iscroll.scrollTo(-t.itsWidth,0,t.duration)}),setTimeout(function(){t.unbindScroll()},this.duration+10)))},unbindScroll:function(){this.iscroll&&(this.iscroll.destroy(),this.iscroll=null,this.wrapperClass.expand=!1,this.wrapperClass.collapse=!0,this.scrollEnable=!1,this.opacity=0,this.$refs.sidebarScroller.setAttribute("style","padding-left:"+this.widthProp))},changeOpacity:function(){this.wrapperClass.expand&&this.iscroll&&(this.opacity=(this.iscroll.x+this.itsWidth)/this.itsWidth*.5,Bt(this.changeOpacity.bind(this)))}}};var Yt=function(t){a("eZkJ")},Vt={components:{Sidebar:Object(A.a)(Dt,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"sidebarWrapper",staticClass:"sidebar-wrapper",class:t.wrapperClass},[a("div",{ref:"sidebarScroller",staticClass:"sidebar-scroller",style:{"padding-left":t.widthProp}},[a("div",{staticClass:"sidebar-main",style:{width:t.widthProp},on:{scroll:function(t){t.stopPropagation()}}},[t._t("default")],2),t._v(" "),a("div",{ref:"sidebarToggle",staticClass:"touch-toggle",style:{opacity:t.opacity,"padding-left":t.widthProp},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toggleClick(e)}}})])])},[],!1,Yt,"data-v-414ed5f0",null).exports},computed:g()({},Object(D.c)("appShell/appSidebar",["show","title","user","blocks"]),{sidebarStatus:{get:function(){return this.show},set:function(t){t?this.$emit("show-sidebar"):this.$emit("hide-sidebar")}},enableSidebar:function(){return this.$store.state.appShell.appHeader.show&&this.$store.state.appShell.appHeader.showMenu}}),methods:{close:function(){this.sidebarStatus=!1},closeAndGo:function(t){this.$router.push(t),this.close()}}};var Ft=function(t){a("B7xE")},Jt=Object(A.a)(Vt,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("sidebar",{attrs:{enable:t.enableSidebar},model:{value:t.sidebarStatus,callback:function(e){t.sidebarStatus=e},expression:"sidebarStatus"}},[a("div",{staticClass:"app-sidebar-content"},[t.title?a("div",{staticClass:"app-sidebar-title",on:{click:function(e){e.stopPropagation(),t.closeAndGo("/")}}},[a("span",{staticClass:"app-sidebar-title-left-icon"},[t.title.imageLeft?a("img",{attrs:{src:t.title.imageLeft,alt:t.title.altLeft}}):t.title.iconLeft?a("v-icon",{attrs:{color:"white"}},[t._v(t._s(t.title.iconLeft))]):t._e()],1),t._v(" "),a("span",[t._v(t._s(t.title.text))]),t._v(" "),t._t("logo",[a("span",{staticClass:"app-sidebar-title-right-logo"},[t.title.imageRight?a("img",{attrs:{src:t.title.imageRight,alt:t.title.altRight}}):t.title.iconRight?a("v-icon",[t._v(t._s(t.title.iconRight))]):t._e()],1)])],2):t._e(),t._v(" "),t.user?a("div",{staticClass:"app-sidebar-user"},[a("div",{staticClass:"user-avatar"},[a("v-icon",{staticClass:"user-avatar-icon"},[t._v("face")])],1),t._v(" "),a("div",{staticClass:"user-info"},[a("div",{staticClass:"user-name"},[a("v-icon",[t._v("person")]),t._v(t._s(t.user.name))],1),t._v(" "),a("div",{staticClass:"user-location"},[a("v-icon",[t._v("room")]),t._v(t._s(t.user.location))],1),t._v(" "),a("div",{staticClass:"user-email"},[a("v-icon",[t._v("email")]),t._v(t._s(t.user.email))],1)])]):t._e(),t._v(" "),t.blocks?a("div",{staticClass:"app-sidebar-blocks"},[a("ul",t._l(t.blocks,function(e,n){return a("li",{key:n,staticClass:"app-sidebar-block"},[e.sublistTitle?a("div",{staticClass:"sub-list-title"},[t._v(t._s(e.sublistTitle))]):t._e(),t._v(" "),e.list?a("ul",t._l(e.list,function(e){return a("li",{key:e.text,on:{click:function(a){a.stopPropagation(),t.closeAndGo(e.route)}}},[e.icon||e.image?a("span",{staticClass:"app-sidebar-block-left-icon"},[e.image?a("img",{attrs:{src:e.image,alt:e.alt}}):e.icon?a("v-icon",[t._v(t._s(e.icon))]):t._e()],1):t._e(),t._v(" "),e.text?a("span",{staticClass:"app-sidebar-block-text"},[t._v(t._s(e.text))]):t._e()])})):t._e()])}))]):t._e()])])},[],!1,Ft,"data-v-e345e3d6",null).exports,Xt={name:"updateToast",props:{text:{type:String,default:"站点发生更新，请手动刷新"}},data:function(){return{show:!1}},mounted:function(){window.addEventListener("sw.update",this.handleUpdate)},beforeDestroy:function(){window.removeEventListener("sw.update",this.handleUpdate)},methods:{handleUpdate:function(t){this.show=!0},handleRefresh:function(){window.location.reload()}}};var Ut=function(t){a("0NDe")},Gt={name:"app",components:{UpdateToast:Object(A.a)(Xt,function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"popup"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"update-toast"},[e("span",[this._v(this._s(this.text))]),this._v(" "),e("span",{staticClass:"update-toast-close-btn",on:{click:this.handleRefresh}},[e("i",{staticClass:"iconfont icon-refresh"})])])])},[],!1,Ut,"data-v-fc732238",null).exports,AppHeader:qt,AppSidebar:Jt,AppFooter:jt},computed:g()({},Object(D.c)("pageTransition",{pageTransitionType:function(t){return t.type},pageTransitionEffect:function(t){return t.effect}}),Object(D.c)("appShell/appHeader",{appHeaderShow:function(t){return t.show}}),Object(D.c)("appShell/common",{scrollPostionMap:function(t){return t.scrollPostionMap}}),{pageTransitionClass:function(){return"transition-"+this.pageTransitionType},routerViewKey:function(){var t=this.$route,e=t.name,a=t.params,n=q()(a);return n.length?e+n.reduce(function(t,e){return t+a[e]},""):null}}),data:function(){return{include:[],bottomNav:"home",tabCache:{},tabDefault:{home:"/",rank:"/detail/2",type:"/detail/3",about:"/detail/4"}}},methods:g()({},Object(D.b)("appShell/appSidebar",["showSidebar","hideSidebar"]),Object(D.b)("appShell/common",["setPageSwitching","savePageScrollPosition"]),{changeNav:function(t){var e=this.bottomNav;this.bottomNav=t,this.bottomNav===e?this.$router.push({path:this.tabDefault[t],query:{nav:t}}):this.$router.push({path:this.tabCache[t]||this.tabDefault[t],query:{nav:t}})},restoreContainerScrollPosition:function(t,e){t.classList.add("app-view-scroll-enabled"),t.scrollTop=e},restoreBodyScrollPosition:function(t,e){t.classList.remove("app-view-scroll-enabled"),document.body.scrollTop=document.documentElement.scrollTop=e},handleBeforeEnter:function(t){var e=this,a=t.dataset.pageId,n=(this.scrollPostionMap[a]||{}).y,i=void 0===n?0:n;this.setPageSwitching(!0),h.a.nextTick(function(){e.restoreContainerScrollPosition(t,i)})},handleAfterEnter:function(t){var e=t.dataset.pageId,a=(this.scrollPostionMap[e]||{}).y,n=void 0===a?0:a;this.setPageSwitching(!1),this.restoreBodyScrollPosition(t,n)},handleBeforeLeave:function(t){var e=t.dataset.pageId,a=document.body.scrollTop||document.documentElement.scrollTop;this.restoreContainerScrollPosition(t,a),this.savePageScrollPosition({pageId:e,scrollPosition:{y:a}})},handleClickHeaderBack:function(){this.$router.go(-1)},handleClickHeaderMenu:function(){this.showSidebar()},handleHideSidebar:function(){this.hideSidebar()},handleShowSidebar:function(){this.showSidebar()}}),mounted:function(){console.log(this)},watch:{$route:function(t,e){this.bottomNav=t.query.nav||"home",this.tabCache[this.bottomNav]=t.path}}};var zt=function(t){a("wHNC")},Kt=Object(A.a)(Gt,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",[a("app-header",{staticClass:"app-shell-header",on:{"click-menu":t.handleClickHeaderMenu,"click-back":t.handleClickHeaderBack}}),t._v(" "),a("app-sidebar",{on:{"hide-sidebar":t.handleHideSidebar,"show-sidebar":t.handleShowSidebar}}),t._v(" "),a("app-footer",{attrs:{bottomNav:t.bottomNav,changeNav:t.changeNav}}),t._v(" "),a("transition",{attrs:{name:t.pageTransitionEffect},on:{"before-enter":t.handleBeforeEnter,"after-enter":t.handleAfterEnter,"before-leave":t.handleBeforeLeave}},[a("keep-alive",[a("router-view",{key:t.routerViewKey,staticClass:"app-view",class:[{"app-view-with-header":t.appHeaderShow},t.pageTransitionClass],attrs:{"data-page-id":t.$route.fullPath}})],1)],1),t._v(" "),a("update-toast")],1)],1)},[],!1,zt,null,null).exports,Zt=a("SEdL"),Qt=a.n(Zt),te=a("aozt"),ee=a.n(te),ae={devUrl:"http://erp2.hwdev.pagoda.com.cn"},ne=ae.devUrl||ae.devUrl,ie={getRecommendList:function(){return ee.a.get(ne+"/www.baidu.com")}};h.a.use(S.a),h.a.use(Qt.a),h.a.config.productionTip=!1,h.a.prototype.AjaxService=ie,h.a.prototype.setState=function(t,e){t.dispatch("appShell/appHeader/setAppHeader",e.appHeaderState)},h.a.prototype.routerPush=function(t,e){t.query=t.query||{},t.query.nav=e,this.$router.push(t)};var re={data:function(){return{percent:0,show:!1,canSuccess:!0,duration:3e3,height:"2px",color:"#ffca2b",failedColor:"#ff0000"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,t.$nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}};var se=function(t){a("nJc9")},oe=Object(A.a)(re,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})},[],!1,se,"data-v-e0e1a4fc",null).exports,ce=a("ZGS7"),le=a.n(ce),ue=a("eFXI"),he=a.n(ue);a("RpDc"),a("CJsk");le.a.shim(),he.a.shim();var de=h.a.prototype.$loading=new h.a(oe).$mount(),pe=function(){var t=rt(),e=Et();return{App:h.a.extend(g()({router:t,store:e},Kt)),router:t,store:e}}(),ve=pe.App,fe=pe.router,me=pe.store,_e=b.a.build,be=_e.ssr,we=_e.cssExtract,ge=b.a.middleware,ye=void 0===ge?{}:ge,Se=b.a.skeleton,ke=Se.enable,Ce=Se.asyncCSS,xe=void 0;window.__INITIAL_STATE__&&me.replaceState(window.__INITIAL_STATE__),"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),document.body.appendChild(de.$el),h.a.mixin({beforeRouteUpdate:function(){var t=u()(c.a.mark(function t(e,a,n){var i;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:(i=this.$options.asyncData)?(de.start(),i.call(this,{store:this.$store,route:e}).then(function(){de.finish(),n()}).catch(n)):n();case 2:case"end":return t.stop()}},t,this)}));return function(e,a,n){return t.apply(this,arguments)}}()});var Pe=!0;if(function(){var t=this;fe.beforeEach(function(){var e=u()(c.a.mark(function e(a,n,i){var r,o,l,u,h,m,_;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(Pe||a.path!==n.path){t.next=2;break}return t.abrupt("return",i());case 2:return Pe=!1,r=fe.getMatchedComponents(a),o=[].concat(s()(ye.all||[]),s()(ye.client||[]),s()(r.filter(function(t){var e=t.middleware;return!!e}).reduce(function(t,e){var a=e.middleware;return t.concat(a)},[]))),t.next=7,p(o);case 7:if(l=t.sent,!(u=o.find(function(t){return"function"!=typeof l[t]}))){t.next=11;break}throw new Error("Unknown middleware "+u);case 11:return h=!1,m=v({to:a,from:n,store:me,next:function(t){if(de.finish&&de.finish(),!h){if(h=!0,t.external)return t.query=Object(d.stringify)(t.query),t.path=t.path+(t.query?"?"+t.query:""),window.location.replace(t.path),i();i(t)}}},xe),_=o.map(function(t){return l[t]}),t.next=17,f(_,m);case 17:h||i();case 18:case"end":return t.stop()}},e,t)}));return function(t,a,n){return e.apply(this,arguments)}}())}(),!document.body.hasAttribute("empty-appshell")&&be)xe=new ve,fe.onReady(function(){Ee(),xe.$mount("#app")});else{var Te=ke&&Ce&&we;window.mountLavas=function(){setTimeout(function(){var t=document.querySelector("#app");t&&(t.innerHTML=""),xe.$mount("#app")},0)},Ee(),xe=new ve,(be||!Te||Te&&window.STYLE_READY)&&window.mountLavas()}function Ee(){var t=this;fe.beforeResolve(function(e,a,n){var r=fe.getMatchedComponents(e),s=fe.getMatchedComponents(a),o=!1,l=r.filter(function(t,e){return o||(o=s[e]!==t)});if(!l.length)return n();de.start(),i.a.all(l.filter(function(t){return t.asyncData&&(!t.asyncDataFetched||!e.meta.keepAlive)}).map(function(){var a=u()(c.a.mark(function a(n){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.asyncData({store:me,route:e});case 2:n.asyncDataFetched=!0;case 3:case"end":return t.stop()}},a,t)}));return function(t){return a.apply(this,arguments)}}())).then(function(){de.finish(),n()}).catch(n)})}},nJc9:function(t,e){},tzwg:function(t,e){},wHNC:function(t,e){},wS7A:function(t,e){}},[0]);
//# sourceMappingURL=index.bfe19afa.js.map