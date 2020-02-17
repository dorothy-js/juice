/* @pollon/juice-lang - v1.0.0
* https://github.com/pollon-js/juice-lang#readme
* 2020 Francesco Lasaracina. Licensed ISC */
System.register([],(function(e){"use strict";return{execute:function(){function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}function s(e,t,n){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=i(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}var f=e("Ruleset",new(function(){function e(n,r){t(this,e),this.commands={},this.behaviours={}}return r(e,null,[{key:"checkCommandType",value:function(e){return e&&e.name&&e.execute}},{key:"checkBehaviourType",value:function(e){return e&&e.name&&e.execute}}]),r(e,[{key:"addCommand",value:function(t){e.checkCommandType(t)&&(this.commands[t.name]||(this.commands[t.name]=t))}},{key:"removeCommand",value:function(t){e.checkCommandType(t)&&this.commands[t.name]&&(this.commands[t.name]=void 0)}},{key:"addBehaviour",value:function(t){e.checkBehaviourType(t)&&(this.behaviours[t.name]||(this.behaviours[t.name]=t))}},{key:"removeBehaviour",value:function(t){e.checkBehaviourType(t)&&this.behaviours[t.name]&&(this.behaviours[t.name]=void 0)}}]),e}())),l=function(e){var t,n,r;for(t in n=f.behaviours)if(r=n[t].canParse(e)){r=n[t];break}if(!r)throw new Error("Juice: Behaviour `"+e.toString("utf-8")+"` not recognized!");return r};function m(e){return e=Array.isArray(e)?e:[e],new RegExp("^"+e.join("|"),"i")}var h=e("Rule",function(){function e(n,r,o){t(this,e),this.name=n,this.keyword=r,this.strategy=o}return r(e,[{key:"canParse",value:function(e){return m(this.keyword).test(e)}},{key:"parse",value:function(e){return m(this.keyword).exec(e)}},{key:"execute",value:function(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];if((e=n.shift())&&this.canParse(e.trim()))return n.unshift(this.parse(e)),this.strategy.apply(this,n)}}]),e}()),d=e("Command",function(e){o(r,e);var n=c(r);function r(e,o,i){return t(this,r),n.call(this,e,o,i)}return r}(h)),v=e("Behaviour",function(e){o(r,e);var n=c(r);function r(e,o,i){return t(this,r),o=Array.isArray(o)?o:[o],n.call(this,e,o,i)}return r}(h)),y=function(e){var t,n,r,o;for(r in console.log("%cJuice Nutrition Table","font-weight:bold; font-size:18px"),o=[],console.groupCollapsed("Commands"),n=f.commands)Object.prototype.hasOwnProperty.call(n,r)&&o.push({name:n[r].name,keyword:n[r].keyword});for(r in console.table(o),console.groupEnd(),o=[],console.groupCollapsed("Behaviours"),t=f.behaviours)Object.prototype.hasOwnProperty.call(t,r)&&o.push({name:t[r].name,keyword:t[r].keyword.join(", ")});return console.table(o),console.groupEnd(),!0},p=function(e){o(r,e);var n=c(r);function r(){return t(this,r),n.call(this,"help","help!",y)}return r}(d),g=function(){},b=function(e,t){var n,r,o,i,u=1;return"dynamic"==(i=this.name.split(".").pop())&&(i=t[u],u++),n=t[u++],r=l(t[u].trim()),o=t[u].trim(),document["juice-domevents-".concat(i,"-on-").concat(n)]=function(t){for(var i=t.target;i&&i!=this;i=i.parentNode)if(i.matches(n)){r.execute(o,i),e(t,i);break}},document.addEventListener(i,document["juice-domevents-".concat(i,"-on-").concat(n)]),!0},w=function(e){o(r,e);var n=c(r);function r(e,o,i){var u;return t(this,r),(u=n.call(this,e,o,g)).strategy=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return b.apply(this,[i].concat(t))},u}return r}(d),k=function(){},C=function(e){var t,n,r,o;t=e[1],n=e[2],r=l(e[3].trim()),o=e[3].trim();var i,u="juice-intersection-observer-on-".concat(t);return n=document.querySelectorAll(n),t="window"==t?null:document.querySelectorAll(t),i=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&r.execute(o,e.target)}))}),{root:t,rootMargin:"0px"}),n.forEach((function(e){return i.observe(e)})),document[u]=i,!0},A=function(e){var t=e[1],n=document["juice-intersection-observer-on-".concat(t)];return n&&n.disconnect(),!0},O=function(e){o(r,e);var n=c(r);function r(){var e;return t(this,r),(e=n.call(this,"DOM.IntersectionObserver.observe",'when dom "([^"]+)" intersects "([^"]+)"\\s(.*)',k)).strategy=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return C.apply(this,t)},e}return r}(d),E=function(e){o(r,e);var n=c(r);function r(){var e;return t(this,r),(e=n.call(this,"DOM.IntersectionObserver.disconnect",'unwatch dom "([^"]+)" intersections',k)).strategy=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return A.apply(this,t)},e}return r}(d),j=function(){},x=function(e){var t,n,r;return t=e[1],n=l(e[2].trim()),r=e[2].trim(),document["juice-transitionend-on-".concat(t)]=function(e){for(var o=e.target;o&&o!=this;o=o.parentNode)if(o.matches(t)){n.execute(r,o);break}},document.addEventListener("transitionend",document["juice-transitionend-on-".concat(t)]),!0},M=function(e){o(r,e);var n=c(r);function r(){var e;return t(this,r),(e=n.call(this,"CSS.TransitionEnd",'when transition ends on "([^"]+)"\\s(.*)',j)).strategy=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return x.apply(this,t)},e}return r}(d),P=function(){},S=function(e){var t,n,r;return t=e[1],n=l(e[2].trim()),r=e[2].trim(),document["juice-animationend-on-".concat(t)]=function(e){for(var o=e.target;o&&o!=this;o=o.parentNode)if(o.matches(t)){n.execute(r,o);break}},document.addEventListener("animationend",document["juice-animationend-on-".concat(t)]),!0},R=function(e){o(r,e);var n=c(r);function r(){var e;return t(this,r),(e=n.call(this,"CSS.AnimationEnd",'when animation ends on "([^"]+)"\\s(.*)',P)).strategy=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return S.apply(this,t)},e}return r}(d),_=function(){},B=function(e){o(u,e);var n=c(u);function u(e,r){return t(this,u),n.call(this,e,r,_)}return r(u,[{key:"parse",value:function(e){return{behaviour:(e=s(i(u.prototype),"parse",this).call(this,e))[1].trim(),value:e[2].trim(),target:e[3].trim()}}}]),u}(v);function T(e,t){if("parent"==t)return[e.parentNode];if(/parent\(([^"]+)\)/.test(t)){var n=t.match(/parent\(([^"]+)\)/);return[e.closest(n[1])]}switch(t){case"target":case"this":case"it":case"itself":case void 0:return[e];default:return document.querySelectorAll(t)}}var D=function(e,t){var n,r,o;o=T(t,e.target),e.behaviour="s"==e.behaviour.charAt(e.behaviour.length-1)?e.behaviour.substring(0,e.behaviour.length-1):e.behaviour,n="toggle","set"==e.behaviour?n="setAttribute":"remove"==e.behaviour&&(n="removeAttribute"),r=e.value.trim().split(" to "),"toggle"!=n?[].forEach.call(o,(function(e){"setAttribute"==n?r.length>1?e.setAttribute(r[0].trim(),r[1].trim()):e.setAttribute(r[0].trim(),!0):"removeAttribute"==n&&e.removeAttribute(r[0].trim())})):[].forEach.call(o,(function(e){e.getAttribute(r[0].trim())?e.removeAttribute(r[0].trim()):r.length>1?e.setAttribute(r[0].trim(),r[1].trim()):e.setAttribute(r[0].trim(),!0)}))},Q=function(e){o(r,e);var n=c(r);function r(){var e;return t(this,r),(e=n.call(this,"DOM.attribute",'(set|sets|remove|removes|toggle|toggles) attribute "([^"]+)" on "([^"]+)"')).strategy=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return D.apply(this,t)},e}return r}(B),L=function(e,t){var n,r;r=T(t,e.target),n="s"==e.behaviour.charAt(e.behaviour.length-1)?e.behaviour.substring(0,e.behaviour.length-1):e.behaviour,[].forEach.call(r,(function(t){t.classList[n](e.value)}))},N=function(e){o(r,e);var n=c(r);function r(){var e;return t(this,r),(e=n.call(this,"DOM.classList",'(add|adds|remove|removes|toggle|toggles) class "([^"]+)" on "([^"]+)"')).strategy=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return L.apply(this,t)},e}return r}(B),q=function(){},z=function(e,t){"a"==t.nodeName.toLowerCase()&&e.preventDefault()},I=[{name:"Mouse.click",keyword:'clicking on "([^"]+)"\\s(.*)',sink:z},{name:"Mouse.dblclick",keyword:'double clicking on "([^"]+)"\\s(.*)',sink:z},{name:"Mouse.mousedown",keyword:'holding down on "([^"]+)"\\s(.*)',sink:q},{name:"Mouse.mouseenter",keyword:'hovering in "([^"]+)"\\s(.*)',sink:q},{name:"Mouse.mouseleave",keyword:'hovering away from "([^"]+)"\\s(.*)',sink:q},{name:"Mouse.mousemove",keyword:'moving on "([^"]+)"\\s(.*)',sink:q},{name:"Mouse.mouseout",keyword:'hovering out "([^"]+)"\\s(.*)',sink:q},{name:"Mouse.mouseover",keyword:'hovering on "([^"]+)"\\s(.*)',sink:q},{name:"Mouse.mouseup",keyword:'when released "([^"]+)"\\s(.*)',sink:q},{name:"Mouse.focusin",keyword:'focusing on "([^"]+)"\\s(.*)',sink:q},{name:"Mouse.focusout",keyword:'focusing out from "([^"]+)"\\s(.*)',sink:q},{name:"DomEvents.dynamic",keyword:'when dom emits "([^"]+)" on "([^"]+)"\\s(.*)',sink:z}];f.addCommand(new p),I.forEach((function(e){f.addCommand(new w(e.name,e.keyword,e.sink))})),f.addCommand(new R),f.addCommand(new M),f.addCommand(new O),f.addCommand(new E),f.addBehaviour(new N),f.addBehaviour(new Q);var J=e("parse",(function(e){(function(e){var t=[];return e.toString("utf8").split(/;|\r\n|[\n\r\u0085\u2028\u2029]/g).forEach((function(e){(e=function(e){var t,n,r;for(n={singleQuote:!1,doubleQuote:!1,regex:!1,blockComment:!1,lineComment:!1,condComp:!1},t=0,r=(e=("__"+e+"__").split("")).length;t<r;t++)if(n.regex)"/"===e[t]&&"\\"!==e[t-1]&&(n.regex=!1);else if(n.singleQuote)"'"===e[t]&&"\\"!==e[t-1]&&(n.singleQuote=!1);else if(n.doubleQuote)'"'===e[t]&&"\\"!==e[t-1]&&(n.doubleQuote=!1);else if(n.blockComment)"*"===e[t]&&"/"===e[t+1]&&(e[t+1]="",n.blockComment=!1),e[t]="";else if(n.lineComment)("\n"===e[t+1]||"\r"===e[t+1])&&(n.lineComment=!1),e[t]="";else if(n.condComp)"@"===e[t-2]&&"*"===e[t-1]&&"/"===e[t]&&(n.condComp=!1);else if(n.doubleQuote='"'===e[t],n.singleQuote="'"===e[t],"/"===e[t]){if("*"===e[t+1]&&"@"===e[t+2]){n.condComp=!0;continue}if("*"===e[t+1]){e[t]="",n.blockComment=!0;continue}if("/"===e[t+1]){e[t]="",n.lineComment=!0;continue}n.regex=!0}return e.join("").slice(2,-2)}(e.trim()))&&t.push(e)})),t})(e).forEach((function(e){var t,n;t=e.trim(),t=Array.isArray(t)?t:[t],n=f.commands,t.forEach((function(e){var t;if(e){for(var r in n)if(t=n[r].execute(e))break;if(!t)throw new Error("Juice: Command `"+e+"` not recognized!");return t}}))}))}));String.prototype.squeeze=function(){J(this)};e("findBehaviour",(function(e){return l(e)}))}}}));
