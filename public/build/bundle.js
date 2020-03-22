var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function i(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function r(t){return null==t?"":t}function c(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function f(){return d(" ")}function h(){return d("")}function p(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let b;function m(t){b=t}const v=[],x=[],w=[],y=[],$=Promise.resolve();let j=!1;function A(t){w.push(t)}let E=!1;const _=new Set;function O(){if(!E){E=!0;do{for(let t=0;t<v.length;t+=1){const e=v[t];m(e),k(e.$$)}for(v.length=0;x.length;)x.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];_.has(e)||(_.add(e),e())}w.length=0}while(v.length);for(;y.length;)y.pop()();j=!1,E=!1,_.clear()}}function k(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const N=new Set;function D(t,e){-1===t.$$.dirty[0]&&(v.push(t),j||(j=!0,$.then(O)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function T(s,r,c,l,u,a,d=[-1]){const f=b;m(s);const h=r.props||{},p=s.$$={fragment:null,ctx:null,props:a,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:d};let g=!1;var v,x;p.ctx=c?c(s,h,(t,e,...n)=>{const o=n.length?n[0]:e;return p.ctx&&u(p.ctx[t],p.ctx[t]=o)&&(p.bound[t]&&p.bound[t](o),g&&D(s,t)),e}):[],p.update(),g=!0,o(p.before_update),p.fragment=!!l&&l(p.ctx),r.target&&(r.hydrate?p.fragment&&p.fragment.l(function(t){return Array.from(t.childNodes)}(r.target)):p.fragment&&p.fragment.c(),r.intro&&((v=s.$$.fragment)&&v.i&&(N.delete(v),v.i(x))),function(t,n,s){const{fragment:r,on_mount:c,on_destroy:l,after_update:u}=t.$$;r&&r.m(n,s),A(()=>{const n=c.map(e).filter(i);l?l.push(...n):o(n),t.$$.on_mount=[]}),u.forEach(A)}(s,r.target,r.anchor),O()),m(f)}function U(t,e,n){const o=t.slice();return o[10]=e[n].id,o[11]=e[n].x,o[12]=e[n].y,o[13]=e[n].imgId,o[14]=e[n].width,o[15]=e[n].height,o[16]=e[n].visible,o}function C(t){let e;function n(t,e){return t[13]?I:S}let o=n(t),i=o(t);return{c(){i.c(),e=h()},m(t,n){i.m(t,n),l(t,e,n)},p(t,s){o===(o=n(t))&&i?i.p(t,s):(i.d(1),i=o(t),i&&(i.c(),i.m(e.parentNode,e)))},d(t){i.d(t),t&&u(e)}}}function S(t){let e,n,i,s,d,h,b,m,v,x;function w(...e){return t[6](t[10],...e)}function y(...e){return t[7](t[10],...e)}function $(...e){return t[8](t[10],...e)}function j(...e){return t[9](t[10],...e)}return{c(){e=a("div"),n=a("img"),b=f(),g(n,"alt",i=t[10]),g(n,"width",s=t[14]),g(n,"height",d=t[15]),n.src!==(h="assets/"+t[10]+".png")&&g(n,"src",h),g(n,"class","svelte-7wwphf"),g(e,"class",m=r(t[0].isUseful(t[10])?"object":"decoration")+" svelte-7wwphf"),g(e,"draggable","true"),g(e,"style",v="position: absolute; display:inline-block; left: "+t[11]+"px; top: "+t[12]+"px")},m(t,o){l(t,e,o),c(e,n),c(e,b),x=[p(e,"dragover",w),p(e,"dragstart",y),p(e,"drop",$),p(e,"click",j)]},p(o,c){t=o,1&c&&i!==(i=t[10])&&g(n,"alt",i),1&c&&s!==(s=t[14])&&g(n,"width",s),1&c&&d!==(d=t[15])&&g(n,"height",d),1&c&&n.src!==(h="assets/"+t[10]+".png")&&g(n,"src",h),1&c&&m!==(m=r(t[0].isUseful(t[10])?"object":"decoration")+" svelte-7wwphf")&&g(e,"class",m),1&c&&v!==(v="position: absolute; display:inline-block; left: "+t[11]+"px; top: "+t[12]+"px")&&g(e,"style",v)},d(t){t&&u(e),o(x)}}}function I(t){let e,n,o,i,s,d,h,b,m;function v(...e){return t[5](t[10],...e)}return{c(){e=a("div"),n=a("img"),d=f(),g(n,"alt",o=t[10]),n.src!==(i="assets/"+t[13]+".png")&&g(n,"src",i),g(n,"style",s="position: absolute; left: -"+t[11]+"px; top: -"+t[12]+"px;"),g(n,"class","svelte-7wwphf"),g(e,"class",h=r(t[0].isUseful(t[10])?"object":"decoration")+" svelte-7wwphf"),g(e,"style",b="position: absolute; overflow: hidden; left: "+t[11]+"px; top: "+t[12]+"px; width: "+t[14]+"px; height: "+t[15]+"px")},m(t,o){l(t,e,o),c(e,n),c(e,d),m=p(e,"click",v)},p(c,l){t=c,1&l&&o!==(o=t[10])&&g(n,"alt",o),1&l&&n.src!==(i="assets/"+t[13]+".png")&&g(n,"src",i),1&l&&s!==(s="position: absolute; left: -"+t[11]+"px; top: -"+t[12]+"px;")&&g(n,"style",s),1&l&&h!==(h=r(t[0].isUseful(t[10])?"object":"decoration")+" svelte-7wwphf")&&g(e,"class",h),1&l&&b!==(b="position: absolute; overflow: hidden; left: "+t[11]+"px; top: "+t[12]+"px; width: "+t[14]+"px; height: "+t[15]+"px")&&g(e,"style",b)},d(t){t&&u(e),m()}}}function L(t){let e,n=t[16]&&C(t);return{c(){n&&n.c(),e=h()},m(t,o){n&&n.m(t,o),l(t,e,o)},p(t,o){t[16]?n?n.p(t,o):(n=C(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(t){n&&n.d(t),t&&u(e)}}}function M(e){let n,o=Object.values(e[0].objects),i=[];for(let t=0;t<o.length;t+=1)i[t]=L(U(e,o,t));return{c(){n=a("div");for(let t=0;t<i.length;t+=1)i[t].c();g(n,"class","scene svelte-7wwphf")},m(t,e){l(t,n,e);for(let t=0;t<i.length;t+=1)i[t].m(n,null)},p(t,[e]){if(7&e){let s;for(o=Object.values(t[0].objects),s=0;s<o.length;s+=1){const r=U(t,o,s);i[s]?i[s].p(r,e):(i[s]=L(r),i[s].c(),i[s].m(n,null))}for(;s<i.length;s+=1)i[s].d(1);i.length=o.length}},i:t,o:t,d(t){t&&u(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(i,t)}}}function P(t){return t.indexOf("+")<0}function q(t,e,n){class o{constructor(t,e){this.objects={},this.audios={},this.events=[],this.audios.error=new Audio("assets/error.mp3"),fetch(t).then(t=>t.text()).then(t=>this.load((new DOMParser).parseFromString(t,"text/xml"))).then(e)}load(t){console.log(t.documentElement),this.addObjects(t.documentElement.children)}performEvents(){let t=t=>{for(let e of t.split(" "))if(null==this.objects[e]&&console.log("error in event condition: "+t),!this.objects[e].visible)return!1;return!0};for(let e in this.events){let n=this.events[e];if(t(n.condition))return this.addObjects(n.xmlObjects),void this.events.splice(e,1)}}addObjects(t){function e(t){switch(t.nodeName){case"object":t.getAttribute("src")?this.addCrop(t.getAttribute("id"),t.getAttribute("src"),t.getAttribute("x"),t.getAttribute("y"),t.getAttribute("width"),t.getAttribute("height")):this.add(t.getAttribute("id"),t.getAttribute("x"),t.getAttribute("y"),t.getAttribute("width"),t.getAttribute("height"));break;case"audio":this.addAudio(t.getAttribute("id"));break;case"event":this.addEvent(t.getAttribute("id"),t.getAttribute("if"),t.children)}n(0,c)}for(let n of t)n.delay?setTimeout(e.bind(this,n),n.delay):e(n)}add(t,e,n,o,i){this.objects[t]={id:t,x:e,y:n,width:o,height:i,visible:P(t)}}addCrop(t,e,n,o,i,s){this.objects[t]={id:t,x:n,y:o,imgId:e,width:i-n,height:s-o,visible:P(t)}}addEvent(t,e,n){this.events[t]={id:t,condition:e,xmlObjects:n}}addAudio(t){this.audios[t]=new Audio("assets/"+t+".mp3")}contains(t){return null!=this.objects[t]}play(t){this.audios[t]&&this.audios[t].play()}playError(){this.play("error")}stop(t){this.audios[t]&&(this.audios[t].pause(),this.audios[t].currentTime=0)}hide(t){this.objects[t].visible=!1,c.stop(t)}isUseful(t){return"cuisine"!=t}show(t){console.log("show "+t),console.log(this.objects[t].visible),this.objects[t].visible=!0,this.play(t)}}function i(t){const e=function(t){return"+"==t[t.length-1]?t.substr(0,t.length-1)+"-":"-"==t[t.length-1]?t.substr(0,t.length-1)+"+":void 0}(t);null!=e?(c.hide(t),c.show(e),c.performEvents(),n(0,c)):c.audios[t]&&c.audios[t].play()}function s(t,e){t.preventDefault();const n=t.dataTransfer.getData("id");console.log("drop "+n+" on "+e),r(n,e)}function r(t,e){c.contains(e+"+"+t)?(c.hide(t),c.hide(e),c.show(e+"+"+t),c.performEvents(),n(0,c)):c.playError()}let c=new o("assets/scene.xml",()=>{n(0,c)});return[c,i,s,o,r,t=>i(t),(t,e)=>function(t,e){t.preventDefault()}(e),(t,e)=>function(t,e){t.dataTransfer.setData("id",e),console.log("drag "+e)}(e,t),(t,e)=>s(e,t),t=>i(t)]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}{constructor(t){super(),T(this,t,q,M,s,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
