!function(t,e){function n(t){return function(e){return{}.toString.call(e)=="[object "+t+"]"}}function o(){return S++}function a(t){return t.match(T)[0]}function r(t){for(t=t.replace(_,"/"),t=t.replace(C,"$1/");t.match(z);)t=t.replace(z,"/");return t}function i(t){var e=t.length-1,n=t.charAt(e);return"#"===n?t.substring(0,e):".js"===t.substring(e-2)||t.indexOf("?")>0||"/"===n?t:t+".js"}function s(t){var e=$.alias;return e&&A(e[t])?e[t]:t}function c(t){var e,n=$.paths;return n&&(e=t.match(q))&&A(n[e[1]])&&(t=n[e[1]]+e[2]),t}function u(t){var e=$.vars;return e&&t.indexOf("{")>-1&&(t=t.replace(H,function(t,n){return A(e[n])?e[n]:t})),t}function l(t){var e=$.map,n=t;if(e)for(var o=0,a=e.length;a>o;o++){var r=e[o];if(n=k(r)?r(t)||t:t.replace(r[0],r[1]),n!==t)break}return n}function p(t,e){var n,o=t.charAt(0);if(j.test(t))n=t;else if("."===o)n=r((e?a(e):$.cwd)+t);else if("/"===o){var i=$.cwd.match(B);n=i?i[0]+t.substring(1):t}else n=$.base+t;return 0===n.indexOf("//")&&(n=location.protocol+n),n}function d(t,e){if(!t)return"";t=s(t),t=c(t),t=u(t),t=i(t);var n=p(t,e);return n=l(n)}function f(t){return t.hasAttribute?t.src:t.getAttribute("src",4)}function h(t,e,n){var o=O.createElement("script");if(n){var a=k(n)?n(t):n;a&&(o.charset=a)}g(o,e,t),o.async=!0,o.src=t,N=o,X?R.insertBefore(o,X):R.appendChild(o),N=null}function g(t,e,n){function o(){t.onload=t.onerror=t.onreadystatechange=null,$.debug||R.removeChild(t),t=null,e()}var a="onload"in t;a?(t.onload=o,t.onerror=function(){E("error",{uri:n,node:t}),o()}):t.onreadystatechange=function(){/loaded|complete/.test(t.readyState)&&o()}}function v(){if(N)return N;if(G&&"interactive"===G.readyState)return G;for(var t=R.getElementsByTagName("script"),e=t.length-1;e>=0;e--){var n=t[e];if("interactive"===n.readyState)return G=n}}function y(t){var e=[];return t.replace(V,"").replace(M,function(t,n,o){o&&e.push(o)}),e}function m(t,e){this.uri=t,this.dependencies=e||[],this.exports=null,this.status=0,this._waitings={},this._remain=0}if(!t.seajs){var w=t.seajs={version:"2.3.0"},$=w.data={},b=n("Object"),A=n("String"),L=Array.isArray||n("Array"),k=n("Function"),S=0,x=$.events={};w.on=function(t,e){var n=x[t]||(x[t]=[]);return n.push(e),w},w.off=function(t,e){if(!t&&!e)return x=$.events={},w;var n=x[t];if(n)if(e)for(var o=n.length-1;o>=0;o--)n[o]===e&&n.splice(o,1);else delete x[t];return w};var E=w.emit=function(t,e){var n=x[t];if(n){n=n.slice();for(var o=0,a=n.length;a>o;o++)n[o](e)}return w},T=/[^?#]*\//,_=/\/\.\//g,z=/\/[^/]+\/\.\.\//,C=/([^:/])\/+\//g,q=/^([^/:]+)(\/.+)$/,H=/{([^{]+)}/g,j=/^\/\/.|:\//,B=/^.*?\/\/.*?\//,O=document,D=location.href&&0!==location.href.indexOf("about:")?a(location.href):"",U=O.scripts,P=O.getElementById("seajsnode")||U[U.length-1],I=a(f(P)||D);w.resolve=d;var N,G,R=O.head||O.getElementsByTagName("head")[0]||O.documentElement,X=R.getElementsByTagName("base")[0];w.request=h;var F,M=/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^\/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g,V=/\\\\/g,J=w.cache={},K={},Q={},W={},Y=m.STATUS={FETCHING:1,SAVED:2,LOADING:3,LOADED:4,EXECUTING:5,EXECUTED:6};m.prototype.resolve=function(){for(var t=this,e=t.dependencies,n=[],o=0,a=e.length;a>o;o++)n[o]=m.resolve(e[o],t.uri);return n},m.prototype.load=function(){var t=this;if(!(t.status>=Y.LOADING)){t.status=Y.LOADING;var n=t.resolve();E("load",n);for(var o,a=t._remain=n.length,r=0;a>r;r++)o=m.get(n[r]),o.status<Y.LOADED?o._waitings[t.uri]=(o._waitings[t.uri]||0)+1:t._remain--;if(0===t._remain)return t.onload(),e;var i={};for(r=0;a>r;r++)o=J[n[r]],o.status<Y.FETCHING?o.fetch(i):o.status===Y.SAVED&&o.load();for(var s in i)i.hasOwnProperty(s)&&i[s]()}},m.prototype.onload=function(){var t=this;t.status=Y.LOADED,t.callback&&t.callback();var e,n,o=t._waitings;for(e in o)o.hasOwnProperty(e)&&(n=J[e],n._remain-=o[e],0===n._remain&&n.onload());delete t._waitings,delete t._remain},m.prototype.fetch=function(t){function n(){w.request(i.requestUri,i.onRequest,i.charset)}function o(){delete K[s],Q[s]=!0,F&&(m.save(r,F),F=null);var t,e=W[s];for(delete W[s];t=e.shift();)t.load()}var a=this,r=a.uri;a.status=Y.FETCHING;var i={uri:r};E("fetch",i);var s=i.requestUri||r;return!s||Q[s]?(a.load(),e):K[s]?(W[s].push(a),e):(K[s]=!0,W[s]=[a],E("request",i={uri:r,requestUri:s,onRequest:o,charset:$.charset}),i.requested||(t?t[i.requestUri]=n:n()),e)},m.prototype.exec=function(){function t(e){return m.get(t.resolve(e)).exec()}var n=this;if(n.status>=Y.EXECUTING)return n.exports;n.status=Y.EXECUTING;var a=n.uri;t.resolve=function(t){return m.resolve(t,a)},t.async=function(e,n){return m.use(e,n,a+"_async_"+o()),t};var r=n.factory,i=k(r)?r(t,n.exports={},n):r;return i===e&&(i=n.exports),delete n.factory,n.exports=i,n.status=Y.EXECUTED,E("exec",n),i},m.resolve=function(t,e){var n={id:t,refUri:e};return E("resolve",n),n.uri||w.resolve(n.id,e)},m.define=function(t,n,o){var a=arguments.length;1===a?(o=t,t=e):2===a&&(o=n,L(t)?(n=t,t=e):n=e),!L(n)&&k(o)&&(n=y(""+o));var r={id:t,uri:m.resolve(t),deps:n,factory:o};if(!r.uri&&O.attachEvent){var i=v();i&&(r.uri=i.src)}E("define",r),r.uri?m.save(r.uri,r):F=r},m.save=function(t,e){var n=m.get(t);n.status<Y.SAVED&&(n.id=e.id||t,n.dependencies=e.deps||[],n.factory=e.factory,n.status=Y.SAVED,E("save",n))},m.get=function(t,e){return J[t]||(J[t]=new m(t,e))},m.use=function(e,n,o){var a=m.get(o,L(e)?e:[e]);a.callback=function(){for(var e=[],o=a.resolve(),r=0,i=o.length;i>r;r++)e[r]=J[o[r]].exec();n&&n.apply(t,e),delete a.callback},a.load()},w.use=function(t,e){return m.use(t,e,$.cwd+"_use_"+o()),w},m.define.cmd={},t.define=m.define,w.Module=m,$.fetchedList=Q,$.cid=o,w.require=function(t){var e=m.get(m.resolve(t));return e.status<Y.EXECUTING&&(e.onload(),e.exec()),e.exports},$.base=I,$.dir=I,$.cwd=D,$.charset="utf-8",w.config=function(t){for(var e in t){var n=t[e],o=$[e];if(o&&b(o))for(var a in n)o[a]=n[a];else L(o)?n=o.concat(n):"base"===e&&("/"!==n.slice(-1)&&(n+="/"),n=p(n)),$[e]=n}return E("config",t),w}}}(this),function(){function t(t){s[t.name]=t}function e(t){return t&&s.hasOwnProperty(t)}function n(t){for(var n in s)if(e(n)){var o=","+s[n].ext.join(",")+",";if(o.indexOf(","+t+",")>-1)return n}}function o(t,e){var n=i.XMLHttpRequest?new i.XMLHttpRequest:new i.ActiveXObject("Microsoft.XMLHTTP");return n.open("GET",t,!0),n.onreadystatechange=function(){if(4===n.readyState){if(n.status>399&&n.status<600)throw new Error("Could not load: "+t+", status = "+n.status);e(n.responseText)}},n.send(null)}function a(t){t&&/\S/.test(t)&&(i.execScript||function(t){(i.eval||eval).call(i,t)})(t)}function r(t){return t.replace(/(["\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r").replace(/[\u2028]/g,"\\u2028").replace(/[\u2029]/g,"\\u2029")}var i=window,s={},c={};t({name:"text",ext:[".tpl",".html"],exec:function(t,e){a('define("'+t+'#", [], "'+r(e)+'")')}}),t({name:"json",ext:[".json"],exec:function(t,e){a('define("'+t+'#", [], '+e+")")}}),t({name:"handlebars",ext:[".handlebars"],exec:function(t,e){var n=['define("'+t+'#", ["handlebars"], function(require, exports, module) {','  var source = "'+r(e)+'"','  var Handlebars = require("handlebars")["default"]',"  module.exports = function(data, options) {","    options || (options = {})","    options.helpers || (options.helpers = {})","    for (var key in Handlebars.helpers) {","      options.helpers[key] = options.helpers[key] || Handlebars.helpers[key]","    }","    return Handlebars.compile(source)(data, options)","  }","})"].join("\n");a(n)}}),seajs.on("resolve",function(t){var o=t.id;if(!o)return"";var a,r;(r=o.match(/^(\w+)!(.+)$/))&&e(r[1])?(a=r[1],o=r[2]):(r=o.match(/[^?]+(\.\w+)(?:\?|#|$)/))&&(a=n(r[1])),a&&-1===o.indexOf("#")&&(o+="#");var i=seajs.resolve(o,t.refUri);a&&(c[i]=a),t.uri=i}),seajs.on("request",function(t){var e=c[t.uri];e&&(o(t.requestUri,function(n){s[e].exec(t.uri,n),t.onRequest()}),t.requested=!0)}),define("seajs/seajs-text/1.1.1/seajs-text-debug",[],{})}(),window.debug=function(t,e){var n,o;if(CONST.DEBUG_CONSOLE)try{n=Application.extend({type:"console"},e),o="function"==typeof t?t():t,o&&o.length>0&&("error"===n.type?console.error(o):"alert"===n.type?alert(o):console.log(o))}catch(a){}};var Application=function(t){this.options=t,this.initialize.apply(this,arguments)};Application.prototype={initialize:function(){this.modules={},this.status={},this.templates={},this.cache={},this.topics={},this.subUid=-1,this.isLazyLoad=!1},addModule:function(t,e){t in this.modules&&debug("【Module】已存在的模块："+t),this.modules[t]=e},getModules:function(){return this.modules},addStatus:function(t,e){this.status[t]=e},getStatus:function(t){return this.status[t]},getAllStatus:function(){return this.status},addTemplate:function(t,e){t in this.templates&&debug("【Template】已存在的模板："+t),this.templates[t]=e},getTemplates:function(){return this.templates},render:function(t){t=Application.extend({empty:!1},t);var e=$(t.render,$(t.page||"body")),n=t.handlebars.compile(t.template||e.html());t.empty&&e.empty();var o=$(n(t.data));t.callback&&t.callback.call(null,o),e.append(o)},addHash:function(t){localStorage._currentHash=t,window.location.hash=t},getCurrentHash:function(){return localStorage._currentHash},setBackPage:function(t){localStorage.backPage=t},getBackPage:function(){var t=localStorage.backPage,e=t;return"false"===t&&(e=App._Stack.getBefore()?App._Stack.getBefore()[0]:"home"),localStorage.backPage=!1,e},hasBackPage:function(){return localStorage.backPage},trigger:function(t,e){var n=this;return this.topics[t]?(setTimeout(function(){for(var o=n.topics[t],a=o?o.length:0;a--;)o[a].func(t,e)},0),!0):!1},on:function(t,e){this.topics[t]||(this.topics[t]=[]);var n=(++this.subUid).toString();return this.topics[t].push({token:n,func:e}),n},off:function(t){for(var e in this.topics)if(this.topics[e])for(var n=0,o=this.topics[e].length;o>n;n++)if(this.topics[e][n].token===t)return this.topics[e].splice(n,1),t;return!1},autoHide:function(t,e){debug("【Util】App.autoHide:");var n=$(".app-content",$(t)),o=!1;$(".app-content",$(t)).get(0)&&$(".app-content",$(t)).get(0).addEventListener("scroll",function(){var t=n.scrollTop();t>0&&!o?(o=!0,e.hide&&e.hide.call(this,t)):0===t&&o&&(o=!1,e.show&&e.show.call(this,t))})},scroll:function(t,e,n){debug("【Util】App.scroll:"+t);var o=$(".app-content",$(n)),a=parseInt(o.scrollTop()),r=0,i=5;t=parseInt(t),e/=i;var s=setInterval(function(){r++,o.scrollTop((t-a)/e*r+a),r>=e&&clearInterval(s)},i)},addLoading:function(){return window.$loading&&window.$loading.remove(),window.$loading=$('<div class="loading"></div>'),$("body").append(window.$loading),window.$loading},addTool:function(t,e){return window.$tool&&window.$tool.remove(),window.$tool=$(App.$tool.clone()),window.$tool.css("display","blcok"),window.$tool.find(".tool-reflesh").attr("data-page",e),window.$tool.find(".tool-totop").off().on("click",function(){App.scroll(0,100,t)}),window.$tool.find(".tool-reflesh").off().on("click",function(){$(this).attr("data-page").length>0?(App._Stack.pop(),App.load($(this).attr("data-page"))):window.location.reload()}),"home"===window.$tool.find(".tool-reflesh").attr("data-page")&&window.$tool.find(".tool-back").remove(),window.$tool.find(".tool-back").off().on("click",function(){App.back(App.getBackPage)}),$(t).append(window.$tool),window.$tool},getLoading:function(){return $("")},removeLoading:function(){window.$loading?window.$loading.remove():$(".loading").remove()},initLoad:function(t,e,n){t&&(App.addLoading(),App.addTool(t,e.page),e.page&&App.addHash("#/"+e.page),$(t).on("appForward",function(){setTimeout(function(){App.removeLoading()},500),e.appForward&&e.appForward.call(n,t)}),$(t).on("appLayout",function(){e.appLayout&&e.appLayout.call(n,t)}),$(t).on("appShow",function(){debug("【Stack】Stack size: "+App._Stack.size()),App.addTool(t,e.page),e.appShow&&e.appShow.call(n,t)}),$(t).on("appReady",function(){App.removeLoading(),App.initPage(t),App.addTool(t,e.page),App.off("queryEvent"),App.on("queryEvent",function(){App.initPage(t)}),e.appReady&&e.appReady.call(n,t)}),$(t).on("appBeforeBack",function(){e.appBeforeBack&&e.appBeforeBack.call(n,t)}),$(t).on("appBack",function(){e.appBack&&e.appBack.call(n,t)}),$(t).on("appHide",function(){App.removeLoading(),e.appHide&&e.appHide.call(n,t)}),$(t).on("appDestroy",function(){App.removeLoading(),e.appDestroy&&e.appDestroy.call(n,t)}),e&&e.transition&&n&&(n.transition=e.transition))},initContent:function(t,e){$(t).find(".app-content").height($(window).height()-(e||0)),$(t).on("appShow",function(){$(t).find(".app-content").height($(window).height()-(e||0))})},initLazyLoad:function(t){this.isLazyLoad||(this.isLazyLoad=!0,setTimeout(function(){var e=$(".app-content",$(t)),n=$(".lazy",$(e));n.size()>0&&!n.lazyload?seajs.use(["LazyLoad"],function(){try{seajs.require("LazyLoad"),n.lazyload({container:e}),debug("【LazyLoad】initLazyLoad")}catch(t){debug("【Error】: lazyload is not find !")}}):(debug("【LazyLoad】initLazyLoad"),n.lazyload({container:e}))},100))},resetLazyLoad:function(t,e){$(t,$(e)).find(".lazy").size()>0&&(debug("【LazyLoad】resetLazyLoad"),App.disableLazyLoad(),App.initLazyLoad(e))},disableLazyLoad:function(){this.isLazyLoad=!1},isLazyLoad:function(){return this.isLazyLoad},initPage:function(t){setTimeout(function(){App._Pages.fixContent(t)},0),setTimeout(function(){App._Scroll.setup(t)},0),setTimeout(function(){App.initClick(t)},300),setTimeout(function(){var e=$(t).find(".app-content");if(e.height()>$(window).height()){var n=$(t).find(".app-topbar");App.initContent(t,n.size()>0?n.eq(0).height():0)}},5e3)},initPageReady:function(t){window.onhashchange=function(){try{if(debug("【Hash】onhashchange: "+t.getCurrentHash()+" -> "+location.hash),t.getCurrentHash()&&t.getCurrentHash()===location.hash)return;if(location.hash.length>0){var e=location.hash.substring(2,location.hash.length);if(t._CustomStack.length>0){var n=t._CustomStack.pop();return void t.load(n[0],n[1])}"undefined"===e&&t.load("home");var o=$(".app-back");o.size()>0?o.click():(debug("【Hash】size stack is 0"),t.load("home"))}}catch(a){t._Stack.destroy(),t.load("home")}},t.enableDragTransition();try{if(location.hash.length>0)if(t._CustomStack=t._Stack.getRestoreStacks(),0===t._CustomStack.length)t.load("home");else{var e=t._CustomStack.pop();t.load(e[0],e[1])}else t._Stack.destroy(),t.load("home")}catch(n){t._Stack.destroy(),t.load("home")}},cleanStack:function(){App._Stack.destroy(),App._CustomStack.length=0},addCache:function(t,e){this.cache[t]=e},getCache:function(t){return this.cache[t]}},Application.version="00111114",Application.each=function(t,e){var n,o;if(null==t)return t;if(t.length===+t.length)for(n=0,o=t.length;o>n&&e(t[n],n,t)!==!1;n++);else{var a=Object.keys(t);for(n=0,o=a.length;o>n&&e(t[a[n]],a[n],t,n)!==!1;n++);}return t},Application.extend=function(t){return"undefined"==typeof t?t:(Array.prototype.slice.call(arguments,1).forEach(function(e){for(var n in e)t[n]=e[n]}),t)},Application.getValue=function(t,e){function n(t,e){return Application.each(e,function(o){return o in t?1!==e.length?(e.shift(),n(t[o],e),!1):void(a=t[o]):!1}),a}var o,a;return arguments.length<2||"string"!=typeof e?void console.error("参数不能少于2个， 且path为字符串"):(o=e.split("."),n(t,o))},Application.url=window.location.href,Application.fromCharCode=function(t){try{return String.fromCharCode(t)}catch(e){}},function(){var t,e;!function(n,o){function a(t){return function(e){return{}.toString.call(e)=="[object "+t+"]"}}function r(){}var i=a("Function"),s={};r.prototype.exec=function(){function t(t){return r.get(t).exec()}var e=this;if(this.execed)return e.exports;this.execed=!0;var n=e.factory,a=i(n)?n(t,e.exports={},e):n;return a===o&&(a=e.exports),delete e.factory,e.exports=a,a},t=function(t,e,n){var o={id:t,deps:e,factory:n};r.save(o)},r.save=function(t){var e=r.get(t.id);e.id=t.id,e.dependencies=t.deps,e.factory=t.factory},r.get=function(t){return s[t]||(s[t]=new r)},e=function(t){var e=r.get(t);return e.execed||e.exec(),e.exports}}(this)}();