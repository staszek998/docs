(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{139:function(t,e,n){"use strict";var i=n(60);n.n(i).a},140:function(t,e,n){"use strict";var i=n(61);n.n(i).a},168:function(t,e,n){"use strict";var i=n(71);n.n(i).a},191:function(t,e,n){"use strict";var i=n(73);n.n(i).a},192:function(t,e,n){"use strict";var i=n(74);n.n(i).a},193:function(t,e,n){"use strict";var i=n(75);n.n(i).a},194:function(t,e,n){"use strict";var i=n(76);n.n(i).a},195:function(t,e,n){"use strict";var i=n(77);n.n(i).a},196:function(t,e,n){"use strict";var i=n(78);n.n(i).a},197:function(t,e,n){"use strict";var i=n(79);n.n(i).a},198:function(t,e,n){"use strict";var i=n(80);n.n(i).a},200:function(t,e,n){"use strict";var i=n(82);n.n(i).a},211:function(t,e,n){"use strict";n.r(e);n(120);var i=n(0),a=n(3),s=n.n(a),r=(n(25),n(94),n(37),n(133),n(96),n(97),n(98),n(99),n(52),n(135),n(58),n(59),/#.*$/),o=/\.(md|html)$/,l=/\/$/,c=/^(https?:|mailto:|tel:)/;function u(t){return decodeURI(t).replace(r,"").replace(o,"")}function h(t){return c.test(t)}function p(t){if(h(t))return t;var e=t.match(r),n=e?e[0]:"",i=u(t);return l.test(i)?t:i+".html"+n}function d(t,e){var n=t.hash,i=function(t){var e=t.match(r);if(e)return e[0]}(e);return(!i||n===i)&&u(t.path)===u(e)}function f(t,e,n){n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var a=e.split("/");n&&a[a.length-1]||a.pop();for(var s=t.replace(/^\//,"").split("/"),r=0;r<s.length;r++){var o=s[r];".."===o?a.pop():"."!==o&&a.push(o)}""!==a[0]&&a.unshift("");return a.join("/")}(e,n));for(var i=u(e),a=0;a<t.length;a++)if(u(t[a].regularPath)===i)return Object.assign({},t[a],{type:"page",path:p(t[a].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function v(t,e,n,i){var a=n.pages,s=n.themeConfig,r=i&&s.locales&&s.locales[i]||s;if("auto"===(t.frontmatter.sidebar||r.sidebar||s.sidebar))return function(t){var e=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}(t);var o=r.sidebar||s.sidebar;if(o){var l=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(i=t,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(n))return{base:n,config:e[n]};var i;return{}}(e,o),c=l.base,u=l.config;return u?u.map((function(t){return function t(e,n,i,a){if("string"==typeof e)return f(n,e,i);if(Array.isArray(e))return Object.assign(f(n,e[0],i),{title:e[1]});a&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");var s=e.children||[];return{type:"group",title:e.title,children:s.map((function(e){return t(e,n,i,!0)})),collapsable:!1!==e.collapsable}}(t,a,c)})):[]}return[]}function g(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function m(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}var b={props:{item:{required:!0}},computed:{link:function(){return p(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link}},methods:{isExternal:h,isMailto:function(t){return/^mailto:/.test(t)},isTel:function(t){return/^tel:/.test(t)}}},_=n(1),k=Object(_.a)(b,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])}),[],!1,null,null,null).exports,$={components:{NavLink:k},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},C=(n(139),Object(_.a)($,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:"hero"}}):t._e(),t._v(" "),n("h1",[t._v(t._s(t.data.heroText||t.$title||"Hello"))]),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,(function(e,i){return n("div",{key:i,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),n("Content",{staticClass:"custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),x=(n(140),Object(_.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports),w=n(208),L=(n(167),{props:["options"],mounted:function(){this.initialize(this.options,this.$lang)},methods:{initialize:function(t,e){Promise.all([Promise.all([n.e(0),n.e(2)]).then(n.t.bind(null,209,7)),Promise.all([n.e(0),n.e(2)]).then(n.t.bind(null,210,7))]).then((function(n){var i=Object(w.a)(n,1)[0];i=i.default;var a=t.algoliaOptions,s=void 0===a?{}:a;i(Object.assign({},t,{inputSelector:"#algolia-search-input",algoliaOptions:Object.assign({facetFilters:["lang:".concat(e)].concat(s.facetFilters||[])},s)}))}))},update:function(t,e){this.$el.innerHTML='<input id="algolia-search-input" class="search-query">',this.initialize(t,e)}},watch:{$lang:function(t){this.update(this.options,t)},options:function(t){this.update(t,this.$lang)}}}),y=(n(168),Object(_.a)(L,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("form",{staticClass:"algolia-search-wrapper search-box",attrs:{id:"search-form"}},[e("input",{staticClass:"search-query",attrs:{id:"algolia-search-input"}})])}],!1,null,null,null).exports),S=n(207),O=(n(177),n(118)),E={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},T=(n(191),Object(_.a)(E,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null).exports),j={components:{NavLink:k,DropdownTransition:T},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}},N=(n(192),{components:{NavLink:k,DropdownLink:Object(_.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)})),0):n("NavLink",{attrs:{item:e}})],1)})),0)])],1)}),[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,i=this.$router.options.routes,a=this.$site.themeConfig.locales||{},s={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(e).map((function(s){var r,o=e[s],l=a[s]&&a[s].label||o.lang;return o.lang===t.$lang?r=n:(r=n.replace(t.$localeConfig.path,s),i.some((function(t){return t.path===r}))||(r=s)),{text:l,link:r}}))};return[].concat(Object(O.a)(this.userNav),[s])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(m(t),{items:(t.items||[]).map(m)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}}),I=(n(193),Object(_.a)(N,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null).exports);function M(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var B={components:{SidebarButton:x,NavLink:k,NavLinks:I,SearchBox:S.a,AlgoliaSearchBox:y},data:function(){return{linksWrapMaxWidth:null,afterLinks:[{text:"Chat",link:"https://discord.gg/3ZZBmFs",type:"link",items:[]},{text:"Github",link:"https://github.com/universal-vue",type:"link",items:[]}]}},mounted:function(){var t=this,e=parseInt(M(this.$el,"paddingLeft"))+parseInt(M(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},H=(n(194),Object(_.a)(B,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("NavLinks",{staticClass:"can-hide"}),t._v(" "),n("div",{staticClass:"links",style:{"max-width":t.linksWrapMaxWidth+"px"}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search?n("SearchBox"):t._e(),t._v(" "),n("div",[n("a",{attrs:{title:"Chat",href:"https://discord.gg/3ZZBmFs",target:"_blank"}},[n("svg",{staticClass:"picto",attrs:{id:"chat",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[n("g",{attrs:{"data-name":"Layer 2"}},[n("g",{attrs:{"data-name":"message-circle"}},[n("rect",{attrs:{width:"24",height:"24",opacity:"0"}}),t._v(" "),n("path",{attrs:{d:"M19.07 4.93a10 10 0 0 0-16.28 11 1.06 1.06 0 0 1 .09.64L2 20.8a1 1 0 0 0 .27.91A1 1 0 0 0 3 22h.2l4.28-.86a1.26 1.26 0 0 1 .64.09 10 10 0 0 0 11-16.28zM8 13a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"}})])])])]),t._v(" "),n("a",{attrs:{title:"Github",href:"https://github.com/universal-vue/uvue",target:"_blank"}},[n("svg",{staticClass:"picto",attrs:{id:"github",xmlns:"http://www.w3.org/2000/svg",width:"161.033",height:"157.058",viewBox:"0 0 42.607 41.555"}},[n("path",{attrs:{d:"M21.304 0C9.539 0 0 9.538 0 21.304 0 30.716 6.104 38.7 14.569 41.518c1.064.198 1.455-.462 1.455-1.024 0-.508-.02-2.187-.029-3.967-5.926 1.289-7.177-2.513-7.177-2.513-.97-2.463-2.365-3.117-2.365-3.117-1.933-1.323.145-1.295.145-1.295 2.14.15 3.266 2.195 3.266 2.195 1.9 3.257 4.984 2.315 6.2 1.77.19-1.376.743-2.316 1.352-2.848-4.732-.539-9.706-2.365-9.706-10.528 0-2.326.832-4.226 2.195-5.718-.221-.537-.95-2.704.206-5.638 0 0 1.79-.573 5.86 2.184a20.42 20.42 0 0 1 5.333-.717c1.81.008 3.634.245 5.336.717 4.066-2.757 5.853-2.184 5.853-2.184 1.16 2.934.43 5.1.209 5.638 1.366 1.492 2.192 3.392 2.192 5.718 0 8.182-4.983 9.984-9.727 10.511.764.661 1.445 1.958 1.445 3.945 0 2.85-.025 5.145-.025 5.847 0 .567.384 1.23 1.463 1.022 8.46-2.82 14.557-10.803 14.557-20.212C42.607 9.538 33.069 0 21.304 0",fill:"#1b1817","fill-rule":"evenodd"}})])])])],1)],1)}),[],!1,null,null,null).exports);function A(t,e,n){var i=[];e.forEach((function(t){"group"===t.type?i.push.apply(i,Object(O.a)(t.children||[])):i.push(t)}));for(var a=0;a<i.length;a++){var s=i[a];if("page"===s.type&&s.path===t.path)return i[a+n]}}var D={props:["sidebarItems"],computed:{lastUpdated:function(){if(this.$page.lastUpdated)return new Date(this.$page.lastUpdated).toLocaleString(this.$lang)},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,n=this.$page.frontmatter.prev;return!1===n?void 0:n?f(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,A(t,e,-1))},next:function(){var t,e,n=this.$page.frontmatter.next;return!1===n?void 0:n?f(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,A(t,e,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,i=t.docsDir,a=void 0===i?"":i,s=t.docsBranch,r=void 0===s?"master":s,o=t.docsRepo,c=void 0===o?e:o,h=u(this.$page.path);return l.test(h)?h+="README.md":h+=".md",c&&n?this.createEditLink(e,c,a,r,h):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,i,a){return/bitbucket.org/.test(t)?(c.test(e)?e:t).replace(l,"")+"/".concat(i)+(n?"/"+n.replace(l,""):"")+a+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default"):(c.test(e)?e:"https://github.com/".concat(e)).replace(l,"")+"/edit/".concat(i)+(n?"/"+n.replace(l,""):"")+a}}},G=(n(195),Object(_.a)(D,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content"),t._v(" "),n("div",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports);function P(t,e,n,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n)}function U(t,e,n,i,a){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||s>a?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var r=d(i,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[P(t,n+"#"+e.slug,e.title,r),U(t,e.children,n,i,a,s+1)])})))}var W={functional:!0,props:["item"],render:function(t,e){var n=e.parent,i=n.$page,a=n.$site,s=n.$route,o=e.props.item,l=d(s,o.path),c="auto"===o.type?l||o.children.some((function(t){return d(s,o.basePath+"#"+t.slug)})):l,u=P(t,o.path,o.title||o.path,c),h=null!=i.frontmatter.sidebarDepth?i.frontmatter.sidebarDepth:a.themeConfig.sidebarDepth,p=null==h?1:h,f=!!a.themeConfig.displayAllHeaders;return"auto"===o.type?[u,U(t,o.children,o.basePath,s,p)]:(c||f)&&o.headers&&!r.test(o.path)?[u,U(t,g(o.headers),o.path,s,p)]:u}},z=(n(196),Object(_.a)(W,void 0,void 0,!1,null,null,null).exports),R={name:"SidebarGroup",props:["item","first","open","collapsable"],components:{SidebarLink:z,DropdownTransition:T}};n(197);var q={components:{SidebarGroup:Object(_.a)(R,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-group",class:{first:t.first,collapsable:t.collapsable}},[n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("ul",{ref:"items",staticClass:"sidebar-group-items"},t._l(t.item.children,(function(t){return n("li",[n("SidebarLink",{attrs:{item:t}})],1)})),0):t._e()])],1)}),[],!1,null,null,null).exports,SidebarLink:z,NavLinks:I},props:["items"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if("group"===i.type&&i.children.some((function(e){return d(t,e.path)})))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return d(this.$route,t.regularPath)}}},F=(n(198),{components:{Home:C,Page:G,Sidebar:Object(_.a)(q,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},[n("NavLinks"),t._v(" "),t._t("top"),t._v(" "),t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,first:0===i,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{item:e}})],1)})),0):t._e(),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports,Navbar:H},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.layout&&!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return v(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;window.addEventListener("scroll",this.onScroll),s.a.configure({showSpinner:!1}),this.$router.beforeEach((function(t,e,n){t.path===e.path||i.a.component(t.name)||s.a.start(),n()})),this.$router.afterEach((function(){s.a.done(),t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),Z=(n(199),n(200),Object(_.a)(F,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1)}),[],!1,null,null,null));e.default=Z.exports},60:function(t,e,n){},61:function(t,e,n){},71:function(t,e,n){},73:function(t,e,n){},74:function(t,e,n){},75:function(t,e,n){},76:function(t,e,n){},77:function(t,e,n){},78:function(t,e,n){},79:function(t,e,n){},80:function(t,e,n){},82:function(t,e,n){}}]);