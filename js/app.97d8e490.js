(function(){"use strict";var e={4313:function(e,n,t){var o=t(5130),r=t(6768),i=t(4232);const u={class:"carousel__item"};function l(e,n,t,o,l,f){const s=(0,r.g2)("Slide"),a=(0,r.g2)("Pagination"),c=(0,r.g2)("Carousel");return(0,r.uX)(),(0,r.Wv)(c,{ref:"carousel",onWheel:e.onWheel},{addons:(0,r.k6)((()=>[(0,r.bF)(a)])),default:(0,r.k6)((()=>[((0,r.uX)(),(0,r.CE)(r.FK,null,(0,r.pI)(10,(e=>(0,r.bF)(s,{key:e},{default:(0,r.k6)((()=>[n[0]||(n[0]=(0,r.Lk)("div",null,"шаг 7",-1)),(0,r.Lk)("div",u,(0,i.v_)(e),1)])),_:2},1024))),64))])),_:1},8,["onWheel"])}var f=t(1114),s=(0,r.pM)({components:{Carousel:f.FN,Slide:f.q7,Pagination:f.dK},mounted(){this.onWheel=this.throttle(this.onWheel.bind(this),500)},methods:{goToNextSlide(){this.$refs.carousel.next()},goToPrevSlide(){this.$refs.carousel.prev()},onWheel(e){e.deltaX>0?this.goToNextSlide():e.deltaX<0&&this.goToPrevSlide()},throttle(e,n){let t;return function(...o){t||(e.apply(this,o),t=!0,setTimeout((()=>t=!1),n))}}}}),a=t(1241);const c=(0,a.A)(s,[["render",l]]);var h=c;(0,o.Ef)(h).mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,i){if(!o){var u=1/0;for(a=0;a<e.length;a++){o=e[a][0],r=e[a][1],i=e[a][2];for(var l=!0,f=0;f<o.length;f++)(!1&i||u>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[f])}))?o.splice(f--,1):(l=!1,i<u&&(u=i));if(l){e.splice(a--,1);var s=r();void 0!==s&&(n=s)}}return n}i=i||0;for(var a=e.length;a>0&&e[a-1][2]>i;a--)e[a]=e[a-1];e[a]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={524:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,u=o[0],l=o[1],f=o[2],s=0;if(u.some((function(n){return 0!==e[n]}))){for(r in l)t.o(l,r)&&(t.m[r]=l[r]);if(f)var a=f(t)}for(n&&n(o);s<u.length;s++)i=u[s],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(a)},o=self["webpackChunktest"]=self["webpackChunktest"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[504],(function(){return t(4313)}));o=t.O(o)})();
//# sourceMappingURL=app.97d8e490.js.map