(function(){"use strict";var t={2549:function(t,e,n){var r=n(5130),o=n(6768),i=n(4232);const u={class:"carousel__item"};function s(t,e,n,r,s,l){const a=(0,o.g2)("Slide"),f=(0,o.g2)("Pagination"),c=(0,o.g2)("Carousel");return(0,o.uX)(),(0,o.Wv)(c,{ref:"carousel",onWheel:t.onWheel},{addons:(0,o.k6)((()=>[(0,o.bF)(f)])),default:(0,o.k6)((()=>[((0,o.uX)(),(0,o.CE)(o.FK,null,(0,o.pI)(10,(t=>(0,o.bF)(a,{key:t},{default:(0,o.k6)((()=>[e[0]||(e[0]=(0,o.Lk)("div",null,"шаг 3",-1)),(0,o.Lk)("div",u,(0,i.v_)(t),1)])),_:2},1024))),64))])),_:1},8,["onWheel"])}var l=n(1114),a=(0,o.pM)({components:{Carousel:l.FN,Slide:l.q7,Pagination:l.dK},data(){return{isThrottled:!0}},methods:{goToNextSlide(){1==this.isThrottled&&(this.isThrottled=!1,this.$refs.carousel.next()),setTimeout((()=>{this.isThrottled=!0}),300)},goToPrevSlide(){1==this.isThrottled&&(this.isThrottled=!1,this.$refs.carousel.prev()),setTimeout((()=>{this.isThrottled=!0}),300)},onWheel(t){t.deltaX>0?this.goToNextSlide():t.deltaX<0&&this.goToPrevSlide()}}}),f=n(1241);const c=(0,f.A)(a,[["render",s]]);var d=c;(0,r.Ef)(d).mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,i){if(!r){var u=1/0;for(f=0;f<t.length;f++){r=t[f][0],o=t[f][1],i=t[f][2];for(var s=!0,l=0;l<r.length;l++)(!1&i||u>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[l])}))?r.splice(l--,1):(s=!1,i<u&&(u=i));if(s){t.splice(f--,1);var a=o();void 0!==a&&(e=a)}}return e}i=i||0;for(var f=t.length;f>0&&t[f-1][2]>i;f--)t[f]=t[f-1];t[f]=[r,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,u=r[0],s=r[1],l=r[2],a=0;if(u.some((function(e){return 0!==t[e]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var f=l(n)}for(e&&e(r);a<u.length;a++)i=u[a],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(f)},r=self["webpackChunktest"]=self["webpackChunktest"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(2549)}));r=n.O(r)})();
//# sourceMappingURL=app.bc798928.js.map