var h=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function V(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Z="Expected a function",W=NaN,de="[object Symbol]",le=/^\s+|\s+$/g,ue=/^[-+]0x[0-9a-f]+$/i,fe=/^0b[01]+$/i,me=/^0o[0-7]+$/i,be=parseInt,ve=typeof h=="object"&&h&&h.Object===Object&&h,pe=typeof self=="object"&&self&&self.Object===Object&&self,ge=ve||pe||Function("return this")(),he=Object.prototype,ye=he.toString,we=Math.max,ke=Math.min,H=function(){return ge.Date.now()};function Ee(t,e,n){var r,a,s,c,o,d,l=0,f=!1,b=!1,w=!0;if(typeof t!="function")throw new TypeError(Z);e=F(e)||0,A(n)&&(f=!!n.leading,b="maxWait"in n,s=b?we(F(n.maxWait)||0,e):s,w="trailing"in n?!!n.trailing:w);function k(i){var m=r,v=a;return r=a=void 0,l=i,c=t.apply(v,m),c}function z(i){return l=i,o=setTimeout(p,e),f?k(i):c}function q(i){var m=i-d,v=i-l,N=e-m;return b?ke(N,s-v):N}function C(i){var m=i-d,v=i-l;return d===void 0||m>=e||m<0||b&&v>=s}function p(){var i=H();if(C(i))return S(i);o=setTimeout(p,q(i))}function S(i){return o=void 0,w&&r?k(i):(r=a=void 0,c)}function D(){o!==void 0&&clearTimeout(o),l=0,r=d=a=o=void 0}function _(){return o===void 0?c:S(H())}function E(){var i=H(),m=C(i);if(r=arguments,a=this,d=i,m){if(o===void 0)return z(d);if(b)return o=setTimeout(p,e),k(d)}return o===void 0&&(o=setTimeout(p,e)),c}return E.cancel=D,E.flush=_,E}function Oe(t,e,n){var r=!0,a=!0;if(typeof t!="function")throw new TypeError(Z);return A(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),Ee(t,e,{leading:r,maxWait:e,trailing:a})}function A(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function xe(t){return!!t&&typeof t=="object"}function Ce(t){return typeof t=="symbol"||xe(t)&&ye.call(t)==de}function F(t){if(typeof t=="number")return t;if(Ce(t))return W;if(A(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=A(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(le,"");var n=fe.test(t);return n||me.test(t)?be(t.slice(2),n?2:8):ue.test(t)?W:+t}var Se=Oe;const Ne=V(Se);var je="Expected a function",Y=NaN,Le="[object Symbol]",Te=/^\s+|\s+$/g,Me=/^[-+]0x[0-9a-f]+$/i,$e=/^0b[01]+$/i,Ae=/^0o[0-7]+$/i,Ie=parseInt,ze=typeof h=="object"&&h&&h.Object===Object&&h,qe=typeof self=="object"&&self&&self.Object===Object&&self,De=ze||qe||Function("return this")(),_e=Object.prototype,He=_e.toString,Pe=Math.max,Re=Math.min,P=function(){return De.Date.now()};function Be(t,e,n){var r,a,s,c,o,d,l=0,f=!1,b=!1,w=!0;if(typeof t!="function")throw new TypeError(je);e=G(e)||0,R(n)&&(f=!!n.leading,b="maxWait"in n,s=b?Pe(G(n.maxWait)||0,e):s,w="trailing"in n?!!n.trailing:w);function k(i){var m=r,v=a;return r=a=void 0,l=i,c=t.apply(v,m),c}function z(i){return l=i,o=setTimeout(p,e),f?k(i):c}function q(i){var m=i-d,v=i-l,N=e-m;return b?Re(N,s-v):N}function C(i){var m=i-d,v=i-l;return d===void 0||m>=e||m<0||b&&v>=s}function p(){var i=P();if(C(i))return S(i);o=setTimeout(p,q(i))}function S(i){return o=void 0,w&&r?k(i):(r=a=void 0,c)}function D(){o!==void 0&&clearTimeout(o),l=0,r=d=a=o=void 0}function _(){return o===void 0?c:S(P())}function E(){var i=P(),m=C(i);if(r=arguments,a=this,d=i,m){if(o===void 0)return z(d);if(b)return o=setTimeout(p,e),k(d)}return o===void 0&&(o=setTimeout(p,e)),c}return E.cancel=D,E.flush=_,E}function R(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function We(t){return!!t&&typeof t=="object"}function Fe(t){return typeof t=="symbol"||We(t)&&He.call(t)==Le}function G(t){if(typeof t=="number")return t;if(Fe(t))return Y;if(R(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=R(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(Te,"");var n=$e.test(t);return n||Ae.test(t)?Ie(t.slice(2),n?2:8):Me.test(t)?Y:+t}var Ye=Be;const U=V(Ye);var ee=function(){};function te(t){var e=void 0,n=void 0,r=void 0;for(e=0;e<t.length;e+=1)if(n=t[e],n.dataset&&n.dataset.aos||(r=n.children&&te(n.children),r))return!0;return!1}function Ge(t){t&&t.forEach(function(e){var n=Array.prototype.slice.call(e.addedNodes),r=Array.prototype.slice.call(e.removedNodes),a=n.concat(r);if(te(a))return ee()})}function ne(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function Ue(){return!!ne()}function Xe(t,e){var n=window.document,r=ne(),a=new r(Ge);ee=e,a.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}var X={isSupported:Ue,ready:Xe},Ke=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Je=function(){function t(e,n){for(var r=0;r<n.length;r++){var a=n[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),Qe=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ve=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,Ze=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,et=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,tt=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function K(){return navigator.userAgent||navigator.vendor||window.opera||""}var nt=function(){function t(){Ke(this,t)}return Je(t,[{key:"phone",value:function(){var n=K();return!!(Ve.test(n)||Ze.test(n.substr(0,4)))}},{key:"mobile",value:function(){var n=K();return!!(et.test(n)||tt.test(n.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),t}(),$=new nt,rt=function(e,n){return n&&n.forEach(function(r){return e.classList.add(r)})},at=function(e,n){return n&&n.forEach(function(r){return e.classList.remove(r)})},L=function(e,n){var r=void 0;return $.ie11()?(r=document.createEvent("CustomEvent"),r.initCustomEvent(e,!0,!0,{detail:n})):r=new CustomEvent(e,{detail:n}),document.dispatchEvent(r)},it=function(e,n){var r=e.options,a=e.position,s=e.node;e.data;var c=function(){e.animated&&(at(s,r.animatedClassNames),L("aos:out",s),e.options.id&&L("aos:in:"+e.options.id,s),e.animated=!1)},o=function(){e.animated||(rt(s,r.animatedClassNames),L("aos:in",s),e.options.id&&L("aos:in:"+e.options.id,s),e.animated=!0)};r.mirror&&n>=a.out&&!r.once?c():n>=a.in?o():e.animated&&!r.once&&c()},J=function(e){return e.forEach(function(n,r){return it(n,window.pageYOffset)})},re=function(e){for(var n=0,r=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)n+=e.offsetLeft-(e.tagName!="BODY"?e.scrollLeft:0),r+=e.offsetTop-(e.tagName!="BODY"?e.scrollTop:0),e=e.offsetParent;return{top:r,left:n}},y=function(t,e,n){var r=t.getAttribute("data-aos-"+e);if(typeof r<"u"){if(r==="true")return!0;if(r==="false")return!1}return r||n},ot=function(e,n,r){var a=window.innerHeight,s=y(e,"anchor"),c=y(e,"anchor-placement"),o=Number(y(e,"offset",c?0:n)),d=c||r,l=e;s&&document.querySelectorAll(s)&&(l=document.querySelectorAll(s)[0]);var f=re(l).top-a;switch(d){case"top-bottom":break;case"center-bottom":f+=l.offsetHeight/2;break;case"bottom-bottom":f+=l.offsetHeight;break;case"top-center":f+=a/2;break;case"center-center":f+=a/2+l.offsetHeight/2;break;case"bottom-center":f+=a/2+l.offsetHeight;break;case"top-top":f+=a;break;case"bottom-top":f+=a+l.offsetHeight;break;case"center-top":f+=a+l.offsetHeight/2;break}return f+o},st=function(e,n){var r=y(e,"anchor"),a=y(e,"offset",n),s=e;r&&document.querySelectorAll(r)&&(s=document.querySelectorAll(r)[0]);var c=re(s).top;return c+s.offsetHeight-a},ct=function(e,n){return e.forEach(function(r,a){var s=y(r.node,"mirror",n.mirror),c=y(r.node,"once",n.once),o=y(r.node,"id"),d=n.useClassNames&&r.node.getAttribute("data-aos"),l=[n.animatedClassName].concat(d?d.split(" "):[]).filter(function(f){return typeof f=="string"});n.initClassName&&r.node.classList.add(n.initClassName),r.position={in:ot(r.node,n.offset,n.anchorPlacement),out:s&&st(r.node,n.offset)},r.options={once:c,mirror:s,animatedClassNames:l,id:o}}),e},ae=function(){var t=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(t,function(e){return{node:e}})},g=[],Q=!1,u={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},ie=function(){return document.all&&!window.atob},dt=function(){return g=ct(g,u),J(g),window.addEventListener("scroll",Ne(function(){J(g,u.once)},u.throttleDelay)),g},O=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;e&&(Q=!0),Q&&dt()},oe=function(){if(g=ae(),ce(u.disable)||ie())return se();O()},se=function(){g.forEach(function(e,n){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),u.initClassName&&e.node.classList.remove(u.initClassName),u.animatedClassName&&e.node.classList.remove(u.animatedClassName)})},ce=function(e){return e===!0||e==="mobile"&&$.mobile()||e==="phone"&&$.phone()||e==="tablet"&&$.tablet()||typeof e=="function"&&e()===!0},lt=function(e){return u=Qe(u,e),g=ae(),!u.disableMutationObserver&&!X.isSupported()&&(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),u.disableMutationObserver=!0),u.disableMutationObserver||X.ready("[data-aos]",oe),ce(u.disable)||ie()?se():(document.querySelector("body").setAttribute("data-aos-easing",u.easing),document.querySelector("body").setAttribute("data-aos-duration",u.duration),document.querySelector("body").setAttribute("data-aos-delay",u.delay),["DOMContentLoaded","load"].indexOf(u.startEvent)===-1?document.addEventListener(u.startEvent,function(){O(!0)}):window.addEventListener("load",function(){O(!0)}),u.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1&&O(!0),window.addEventListener("resize",U(O,u.debounceDelay,!0)),window.addEventListener("orientationchange",U(O,u.debounceDelay,!0)),g)},ut={init:lt,refresh:O,refreshHard:oe};ut.init({disable:!1,startEvent:"DOMContentLoaded",initClassName:"aos-init",animatedClassName:"aos-animate",useClassNames:!1,disableMutationObserver:!1,debounceDelay:50,throttleDelay:99,offset:105,delay:0,duration:900,easing:"ease",once:!1,mirror:!1,anchorPlacement:"top-bottom"});const I=document,ft=I.querySelector("[data-toogle]");function mt(t){let e=new Audio;e.src="../sounds/short_circuit.mp3",e.volume-=.6,e.play(),setTimeout(()=>{e.pause()},1900)}function bt(){let t=new Audio;t.src="../sounds/franks-electricity.mp3",t.volume-=.7,t.play()}let T=0;function vt(){console.log(T),T++,T<=8?bt():T<=18&&mt()}ft.addEventListener("click",vt);let j=!1;const x=I.querySelector("[data-toogle]"),pt=window.matchMedia("(prefers-color-scheme: dark)");window.matchMedia("(prefers-color-scheme: short-circuit)");function B(t){I.documentElement.classList.toggle("dark-mode",t),j=t,I.documentElement.classList.contains("dark-mode")?(x.classList.remove("bi-lightning-charge"),x.classList.add("bi-lightning-charge-fill")):(x.classList.remove("bi-lightning-charge-fill"),x.classList.add("bi-lightning-charge"))}function gt(t){localStorage.setItem("dark-mode",t)}B(localStorage.getItem("dark-mode")=="true");let M=0;pt.addEventListener("state",t=>B(t.matches));x.addEventListener("click",t=>{j=!j});function ht(){M++,console.log(M),M<=8?(B(j),gt(j)):M<=15?(document.documentElement.classList.add("short-circuit"),document.documentElement.classList.remove("dark-mode")):(alert("You messed up. Click here to reload"),location.reload())}x.addEventListener("click",ht);
