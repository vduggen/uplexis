(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["details"],{5943:function(t,e,i){"use strict";i("c9d9")},"608c":function(t,e,i){},"8a8d":function(t,e,i){},"8c4a":function(t,e,i){"use strict";i("8a8d")},"9f52":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("div",{staticClass:"detail"},[s("banner",{attrs:{image:i("ba57"),title:"Histórico Empresarial",description:"O aplicativo Histórico Empresarial permite ao usuário ter acesso a\n        todos os fatos acontecimentos relevantes de uma empresa desde o seu\n        ano de fundação.",price:40,id:13},on:{changeData:t.changeData}}),s("v-container",[s("header",{staticClass:"detail__header"},[s("router-link",{staticClass:"detail__header__link",attrs:{to:"/"}},[s("v-icon",{attrs:{color:"primary",size:"2.3rem"}},[t._v("mdi-chevron-left")]),s("span",{staticClass:"detail__header__title"},[t._v(t._s(t.data.name))])],1)],1),s("div",{staticClass:"detail__body"},[s("v-slide-group",{staticClass:"detail__body__images",attrs:{"show-arrows":""}},t._l(4,(function(t){return s("v-slide-item",{key:t,staticClass:"ma-3"},[s("cardDetail")],1)})),1),s("div",{staticClass:"\n            detail__body__description\n            text--secondary\n            subtitle-2\n            font-weight-regular\n          "},t._l(t.data.description,(function(e,i){return s("span",{key:i,class:{"mt-4":i>0}},[t._v(" "+t._s(e)+" ")])})),0),s("div",{staticClass:"detail__body__footer"},[s("span",{staticClass:"mr-4"},[s("span",[t._v("R$ ")]),s("span",{staticClass:"text-h4 font-weight-medium"},[t._v(" "+t._s(t._f("getValue")(t._f("formatCurrency")(t.data.value)))+" ")])]),s("v-btn",{staticClass:"text-none",attrs:{color:"primary"}},[t._v("Habilitar")])],1)],1)])],1)])},n=[],r=(i("4de4"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"card-detail"},[i("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"}}),i("v-card-subtitle",{staticClass:"card-detail__description"},[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sit impedit maxime obcaecati ducimus ipsam? ")])],1)}),a=[],o=(i("8c4a"),i("2877")),c=i("6544"),l=i.n(c),h=i("b0af"),u=i("99d9"),f=i("adda"),d={},p=Object(o["a"])(d,r,a,!1,null,null,null),v=p.exports;l()(p,{VCard:h["a"],VCardSubtitle:u["b"],VImg:f["a"]});var m=i("108e"),g=i("b9ad"),w={components:{cardDetail:v,Banner:g["a"]},data:function(){return{data:{}}},mounted:function(){var t=this.$route,e=t.params,i=t.query,s="banner"===i.type,n=s?m["a"]:m["b"],r=n.filter((function(t){var i=t.id;return i==e.id}));this.data=r[0]},methods:{changeData:function(){var t=this.$route,e=t.params,i=t.query,s="banner"===i.type,n=s?m["a"]:m["b"],r=n.filter((function(t){var i=t.id;return i==e.id}));this.data=r[0]}}},b=w,_=(i("5943"),i("7496")),O=i("8336"),y=i("a523"),x=i("132d"),$=i("5530"),C=(i("caad"),i("99af"),i("fb6a"),i("608c"),i("9d26")),k=i("0789"),M=i("604c"),X=(i("a9e3"),i("b0c0"),i("d9bd")),S=i("2b0e"),E=S["a"].extend({name:"mobile",props:{mobileBreakpoint:{type:[Number,String],default:function(){return this.$vuetify?this.$vuetify.breakpoint.mobileBreakpoint:void 0},validator:function(t){return!isNaN(Number(t))||["xs","sm","md","lg","xl"].includes(String(t))}}},computed:{isMobile:function(){var t=this.$vuetify.breakpoint,e=t.mobile,i=t.width,s=t.name,n=t.mobileBreakpoint;if(n===this.mobileBreakpoint)return e;var r=parseInt(this.mobileBreakpoint,10),a=!isNaN(r);return a?i<r:s===this.mobileBreakpoint}},created:function(){this.$attrs.hasOwnProperty("mobile-break-point")&&Object(X["d"])("mobile-break-point","mobile-breakpoint",this)}}),T=i("dc22"),I=(i("159b"),i("80d2")),Y=function(t){var e=t.touchstartX,i=t.touchendX,s=t.touchstartY,n=t.touchendY,r=.5,a=16;t.offsetX=i-e,t.offsetY=n-s,Math.abs(t.offsetY)<r*Math.abs(t.offsetX)&&(t.left&&i<e-a&&t.left(t),t.right&&i>e+a&&t.right(t)),Math.abs(t.offsetX)<r*Math.abs(t.offsetY)&&(t.up&&n<s-a&&t.up(t),t.down&&n>s+a&&t.down(t))};function j(t,e){var i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function A(t,e){var i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),Y(e)}function N(t,e){var i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function W(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return j(t,e)},touchend:function(t){return A(t,e)},touchmove:function(t){return N(t,e)}}}function P(t,e,i){var s=e.value,n=s.parent?t.parentElement:t,r=s.options||{passive:!0};if(n){var a=W(e.value);n._touchHandlers=Object(n._touchHandlers),n._touchHandlers[i.context._uid]=a,Object(I["q"])(a).forEach((function(t){n.addEventListener(t,a[t],r)}))}}function V(t,e,i){var s=e.value.parent?t.parentElement:t;if(s&&s._touchHandlers){var n=s._touchHandlers[i.context._uid];Object(I["q"])(n).forEach((function(t){s.removeEventListener(t,n[t])})),delete s._touchHandlers[i.context._uid]}}var B={inserted:P,unbind:V},H=B,z=i("58df"),L=Object(z["a"])(M["a"],E).extend({name:"base-slide-group",directives:{Resize:T["a"],Touch:H},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},showArrows:{type:[Boolean,String],validator:function(t){return"boolean"===typeof t||["always","desktop","mobile"].includes(t)}}},data:function(){return{internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,isSwipingHorizontal:!1,isSwiping:!1,scrollOffset:0,widths:{content:0,wrapper:0}}},computed:{canTouch:function(){return"undefined"!==typeof window},__cachedNext:function(){return this.genTransition("next")},__cachedPrev:function(){return this.genTransition("prev")},classes:function(){return Object($["a"])(Object($["a"])({},M["a"].options.computed.classes.call(this)),{},{"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing})},hasAffixes:function(){switch(this.showArrows){case"always":return!0;case"desktop":return!this.isMobile;case!0:return this.isOverflowing||Math.abs(this.scrollOffset)>0;case"mobile":return this.isMobile||this.isOverflowing||Math.abs(this.scrollOffset)>0;default:return!this.isMobile&&(this.isOverflowing||Math.abs(this.scrollOffset)>0)}},hasNext:function(){if(!this.hasAffixes)return!1;var t=this.widths,e=t.content,i=t.wrapper;return e>Math.abs(this.scrollOffset)+i},hasPrev:function(){return this.hasAffixes&&0!==this.scrollOffset}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset:function(t){this.$refs.content.style.transform="translateX(".concat(-t,"px)")}},beforeUpdate:function(){this.internalItemsLength=(this.$children||[]).length},updated:function(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{genNext:function(){var t=this,e=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:function(){return t.onAffixClick("next")}},key:"next"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content"},this.$slots.default)},genData:function(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon:function(t){var e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");var i="".concat(t[0].toUpperCase()).concat(t.slice(1)),s=this["has".concat(i)];return this.showArrows||s?this.$createElement(C["a"],{props:{disabled:!s}},this["".concat(e,"Icon")]):null},genPrev:function(){var t=this,e=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:function(){return t.onAffixClick("prev")}},key:"prev"},[e])},genTransition:function(t){return this.$createElement(k["c"],[this.genIcon(t)])},genWrapper:function(){var t=this;return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:function(e){return t.overflowCheck(e,t.onTouchStart)},move:function(e){return t.overflowCheck(e,t.onTouchMove)},end:function(e){return t.overflowCheck(e,t.onTouchEnd)}}}],ref:"wrapper"},[this.genContent()])},calculateNewOffset:function(t,e,i,s){var n=i?-1:1,r=n*s+("prev"===t?-1:1)*e.wrapper;return n*Math.max(Math.min(r,e.content-e.wrapper),0)},onAffixClick:function(t){this.$emit("click:".concat(t)),this.scrollTo(t)},onResize:function(){this._isDestroyed||this.setWidths()},onTouchStart:function(t){var e=this.$refs.content;this.startX=this.scrollOffset+t.touchstartX,e.style.setProperty("transition","none"),e.style.setProperty("willChange","transform")},onTouchMove:function(t){if(this.canTouch){if(!this.isSwiping){var e=t.touchmoveX-t.touchstartX,i=t.touchmoveY-t.touchstartY;this.isSwipingHorizontal=Math.abs(e)>Math.abs(i),this.isSwiping=!0}this.isSwipingHorizontal&&(this.scrollOffset=this.startX-t.touchmoveX,document.documentElement.style.overflowY="hidden")}},onTouchEnd:function(){if(this.canTouch){var t=this.$refs,e=t.content,i=t.wrapper,s=e.clientWidth-i.clientWidth;e.style.setProperty("transition",null),e.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-s&&(this.scrollOffset=-s):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=s&&(this.scrollOffset=s),this.isSwiping=!1,document.documentElement.style.removeProperty("overflow-y")}},overflowCheck:function(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView:function(){if(!this.selectedItem&&this.items.length){var t=this.items[this.items.length-1].$el.getBoundingClientRect(),e=this.$refs.wrapper.getBoundingClientRect();(this.$vuetify.rtl&&e.right<t.right||!this.$vuetify.rtl&&e.left>t.left)&&this.scrollTo("prev")}this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=this.calculateCenteredOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=this.calculateUpdatedOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},calculateUpdatedOffset:function(t,e,i,s){var n=t.clientWidth,r=i?e.content-t.offsetLeft-n:t.offsetLeft;i&&(s=-s);var a=e.wrapper+s,o=n+r,c=.4*n;return r<=s?s=Math.max(r-c,0):a<=o&&(s=Math.min(s-(a-o-c),e.content-e.wrapper)),i?-s:s},calculateCenteredOffset:function(t,e,i){var s=t.offsetLeft,n=t.clientWidth;if(i){var r=e.content-s-n/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,r))}var a=s+n/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,a))},scrollTo:function(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths:function(){var t=this;window.requestAnimationFrame((function(){var e=t.$refs,i=e.content,s=e.wrapper;t.widths={content:i?i.clientWidth:0,wrapper:s?s.clientWidth:0},t.isOverflowing=t.widths.wrapper+1<t.widths.content,t.scrollIntoView()}))}},render:function(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}}),D=L.extend({name:"v-slide-group",provide:function(){return{slideGroup:this}}}),R=i("d903"),q=i("4e82c"),U=Object(z["a"])(R["a"],Object(q["a"])("slideGroup")).extend({name:"v-slide-item"}),G=Object(o["a"])(b,s,n,!1,null,null,null);e["default"]=G.exports;l()(G,{VApp:_["a"],VBtn:O["a"],VContainer:y["a"],VIcon:x["a"],VSlideGroup:D,VSlideItem:U})},c9d9:function(t,e,i){}}]);
//# sourceMappingURL=details.3b19a3e7.js.map