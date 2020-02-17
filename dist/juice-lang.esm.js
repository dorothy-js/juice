/* @pollon/juice-lang - v1.0.0
* https://github.com/pollon-js/juice-lang#readme
* 2020 Francesco Lasaracina. Licensed ISC */
function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=o(e);if(t){var i=o(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return u(this,n)}}function c(e,t,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=o(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}var s=new(function(){function t(n,r){e(this,t),this.commands={},this.behaviours={}}return n(t,null,[{key:"checkCommandType",value:function(e){return e&&e.name&&e.execute}},{key:"checkBehaviourType",value:function(e){return e&&e.name&&e.execute}}]),n(t,[{key:"addCommand",value:function(e){t.checkCommandType(e)&&(this.commands[e.name]||(this.commands[e.name]=e))}},{key:"removeCommand",value:function(e){t.checkCommandType(e)&&this.commands[e.name]&&(this.commands[e.name]=void 0)}},{key:"addBehaviour",value:function(e){t.checkBehaviourType(e)&&(this.behaviours[e.name]||(this.behaviours[e.name]=e))}},{key:"removeBehaviour",value:function(e){t.checkBehaviourType(e)&&this.behaviours[e.name]&&(this.behaviours[e.name]=void 0)}}]),t}()),f=function(e){var t,n,r;for(t in n=s.behaviours)if(r=n[t].canParse(e)){r=n[t];break}if(!r)throw new Error("Juice: Behaviour `"+e.toString("utf-8")+"` not recognized!");return r};function l(e){return e=Array.isArray(e)?e:[e],new RegExp("^"+e.join("|"),"i")}var m=function(){function t(n,r,o){e(this,t),this.name=n,this.keyword=r,this.strategy=o}return n(t,[{key:"canParse",value:function(e){return l(this.keyword).test(e)}},{key:"parse",value:function(e){return l(this.keyword).exec(e)}},{key:"execute",value:function(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];if((e=n.shift())&&this.canParse(e.trim()))return n.unshift(this.parse(e)),this.strategy.apply(this,n)}}]),t}(),h=function(t){r(o,m);var n=a(o);function o(t,r,i){return e(this,o),n.call(this,t,r,i)}return o}(),d=function(t){r(o,m);var n=a(o);function o(t,r,i){return e(this,o),r=Array.isArray(r)?r:[r],n.call(this,t,r,i)}return o}(),v=function(e){var t,n,r,o;for(r in console.log("%cJuice Nutrition Table","font-weight:bold; font-size:18px"),o=[],console.groupCollapsed("Commands"),n=s.commands)Object.prototype.hasOwnProperty.call(n,r)&&o.push({name:n[r].name,keyword:n[r].keyword});for(r in console.table(o),console.groupEnd(),o=[],console.groupCollapsed("Behaviours"),t=s.behaviours)Object.prototype.hasOwnProperty.call(t,r)&&o.push({name:t[r].name,keyword:t[r].keyword.join(", ")});return console.table(o),console.groupEnd(),!0},p=function(t){r(o,h);var n=a(o);function o(){return e(this,o),n.call(this,"help","help!",v)}return o}(),y=function(){},g=function(e,t){var n,r,o,i,u=1;return"dynamic"==(i=this.name.split(".").pop())&&(i=t[u],u++),n=t[u++],r=f(t[u].trim()),o=t[u].trim(),document["juice-domevents-".concat(i,"-on-").concat(n)]=function(t){for(var i=t.target;i&&i!=this;i=i.parentNode)if(i.matches(n)){r.execute(o,i),e(t,i);break}},document.addEventListener(i,document["juice-domevents-".concat(i,"-on-").concat(n)]),!0},b=function(t){r(o,h);var n=a(o);function o(t,r,i){var u;return e(this,o),(u=n.call(this,t,r,y)).strategy=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return g.apply(this,[i].concat(t))},u}return o}(),w=function(){},k=function(e){var t,n,r,o;t=e[1],n=e[2],r=f(e[3].trim()),o=e[3].trim();var i,u="juice-intersection-observer-on-".concat(t);return n=document.querySelectorAll(n),t="window"==t?null:document.querySelectorAll(t),i=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&r.execute(o,e.target)}))}),{root:t,rootMargin:"0px"}),n.forEach((function(e){return i.observe(e)})),document[u]=i,!0},A=function(e){var t=e[1],n=document["juice-intersection-observer-on-".concat(t)];return n&&n.disconnect(),!0},C=function(t){r(o,h);var n=a(o);function o(){var t;return e(this,o),(t=n.call(this,"DOM.IntersectionObserver.observe",'when dom "([^"]+)" intersects "([^"]+)"\\s(.*)',w)).strategy=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return k.apply(this,t)},t}return o}(),O=function(t){r(o,h);var n=a(o);function o(){var t;return e(this,o),(t=n.call(this,"DOM.IntersectionObserver.disconnect",'unwatch dom "([^"]+)" intersections',w)).strategy=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return A.apply(this,t)},t}return o}(),E=function(){},j=function(e){var t,n,r;return t=e[1],n=f(e[2].trim()),r=e[2].trim(),document["juice-transitionend-on-".concat(t)]=function(e){for(var o=e.target;o&&o!=this;o=o.parentNode)if(o.matches(t)){n.execute(r,o);break}},document.addEventListener("transitionend",document["juice-transitionend-on-".concat(t)]),!0},x=function(t){r(o,h);var n=a(o);function o(){var t;return e(this,o),(t=n.call(this,"CSS.TransitionEnd",'when transition ends on "([^"]+)"\\s(.*)',E)).strategy=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return j.apply(this,t)},t}return o}(),M=function(){},P=function(e){var t,n,r;return t=e[1],n=f(e[2].trim()),r=e[2].trim(),document["juice-animationend-on-".concat(t)]=function(e){for(var o=e.target;o&&o!=this;o=o.parentNode)if(o.matches(t)){n.execute(r,o);break}},document.addEventListener("animationend",document["juice-animationend-on-".concat(t)]),!0},S=function(t){r(o,h);var n=a(o);function o(){var t;return e(this,o),(t=n.call(this,"CSS.AnimationEnd",'when animation ends on "([^"]+)"\\s(.*)',M)).strategy=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return P.apply(this,t)},t}return o}(),_=function(){},B=function(t){r(u,d);var i=a(u);function u(t,n){return e(this,u),i.call(this,t,n,_)}return n(u,[{key:"parse",value:function(e){return{behaviour:(e=c(o(u.prototype),"parse",this).call(this,e))[1].trim(),value:e[2].trim(),target:e[3].trim()}}}]),u}();function R(e,t){if("parent"==t)return[e.parentNode];if(/parent\(([^"]+)\)/.test(t)){var n=t.match(/parent\(([^"]+)\)/);return[e.closest(n[1])]}switch(t){case"target":case"this":case"it":case"itself":case void 0:return[e];default:return document.querySelectorAll(t)}}var T=function(e,t){var n,r,o;o=R(t,e.target),e.behaviour="s"==e.behaviour.charAt(e.behaviour.length-1)?e.behaviour.substring(0,e.behaviour.length-1):e.behaviour,n="toggle","set"==e.behaviour?n="setAttribute":"remove"==e.behaviour&&(n="removeAttribute"),r=e.value.trim().split(" to "),"toggle"!=n?[].forEach.call(o,(function(e){"setAttribute"==n?r.length>1?e.setAttribute(r[0].trim(),r[1].trim()):e.setAttribute(r[0].trim(),!0):"removeAttribute"==n&&e.removeAttribute(r[0].trim())})):[].forEach.call(o,(function(e){e.getAttribute(r[0].trim())?e.removeAttribute(r[0].trim()):r.length>1?e.setAttribute(r[0].trim(),r[1].trim()):e.setAttribute(r[0].trim(),!0)}))},D=function(t){r(o,B);var n=a(o);function o(){var t;return e(this,o),(t=n.call(this,"DOM.attribute",'(set|sets|remove|removes|toggle|toggles) attribute "([^"]+)" on "([^"]+)"')).strategy=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return T.apply(this,t)},t}return o}(),Q=function(e,t){var n,r;r=R(t,e.target),n="s"==e.behaviour.charAt(e.behaviour.length-1)?e.behaviour.substring(0,e.behaviour.length-1):e.behaviour,[].forEach.call(r,(function(t){t.classList[n](e.value)}))},L=function(t){r(o,B);var n=a(o);function o(){var t;return e(this,o),(t=n.call(this,"DOM.classList",'(add|adds|remove|removes|toggle|toggles) class "([^"]+)" on "([^"]+)"')).strategy=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Q.apply(this,t)},t}return o}(),N=function(){},q=function(e,t){"a"==t.nodeName.toLowerCase()&&e.preventDefault()},z=[{name:"Mouse.click",keyword:'clicking on "([^"]+)"\\s(.*)',sink:q},{name:"Mouse.dblclick",keyword:'double clicking on "([^"]+)"\\s(.*)',sink:q},{name:"Mouse.mousedown",keyword:'holding down on "([^"]+)"\\s(.*)',sink:N},{name:"Mouse.mouseenter",keyword:'hovering in "([^"]+)"\\s(.*)',sink:N},{name:"Mouse.mouseleave",keyword:'hovering away from "([^"]+)"\\s(.*)',sink:N},{name:"Mouse.mousemove",keyword:'moving on "([^"]+)"\\s(.*)',sink:N},{name:"Mouse.mouseout",keyword:'hovering out "([^"]+)"\\s(.*)',sink:N},{name:"Mouse.mouseover",keyword:'hovering on "([^"]+)"\\s(.*)',sink:N},{name:"Mouse.mouseup",keyword:'when released "([^"]+)"\\s(.*)',sink:N},{name:"Mouse.focusin",keyword:'focusing on "([^"]+)"\\s(.*)',sink:N},{name:"Mouse.focusout",keyword:'focusing out from "([^"]+)"\\s(.*)',sink:N},{name:"DomEvents.dynamic",keyword:'when dom emits "([^"]+)" on "([^"]+)"\\s(.*)',sink:q}];s.addCommand(new p),z.forEach((function(e){s.addCommand(new b(e.name,e.keyword,e.sink))})),s.addCommand(new S),s.addCommand(new x),s.addCommand(new C),s.addCommand(new O),s.addBehaviour(new L),s.addBehaviour(new D);var I=function(e){(function(e){var t=[];return e.toString("utf8").split(/;|\r\n|[\n\r\u0085\u2028\u2029]/g).forEach((function(e){(e=function(e){var t,n,r;for(n={singleQuote:!1,doubleQuote:!1,regex:!1,blockComment:!1,lineComment:!1,condComp:!1},t=0,r=(e=("__"+e+"__").split("")).length;t<r;t++)if(n.regex)"/"===e[t]&&"\\"!==e[t-1]&&(n.regex=!1);else if(n.singleQuote)"'"===e[t]&&"\\"!==e[t-1]&&(n.singleQuote=!1);else if(n.doubleQuote)'"'===e[t]&&"\\"!==e[t-1]&&(n.doubleQuote=!1);else if(n.blockComment)"*"===e[t]&&"/"===e[t+1]&&(e[t+1]="",n.blockComment=!1),e[t]="";else if(n.lineComment)("\n"===e[t+1]||"\r"===e[t+1])&&(n.lineComment=!1),e[t]="";else if(n.condComp)"@"===e[t-2]&&"*"===e[t-1]&&"/"===e[t]&&(n.condComp=!1);else if(n.doubleQuote='"'===e[t],n.singleQuote="'"===e[t],"/"===e[t]){if("*"===e[t+1]&&"@"===e[t+2]){n.condComp=!0;continue}if("*"===e[t+1]){e[t]="",n.blockComment=!0;continue}if("/"===e[t+1]){e[t]="",n.lineComment=!0;continue}n.regex=!0}return e.join("").slice(2,-2)}(e.trim()))&&t.push(e)})),t})(e).forEach((function(e){var t,n;t=e.trim(),t=Array.isArray(t)?t:[t],n=s.commands,t.forEach((function(e){var t;if(e){for(var r in n)if(t=n[r].execute(e))break;if(!t)throw new Error("Juice: Command `"+e+"` not recognized!");return t}}))}))};String.prototype.squeeze=function(){I(this)};var J=function(e){return f(e)};export{d as Behaviour,h as Command,m as Rule,s as Ruleset,J as findBehaviour,I as parse};
