!function(e,t){function n(e){return function(t){return{}.toString.call(t)=="[object "+e+"]"}}function o(){return S++}function a(e){return e.match(_)[0]}function r(e){for(e=e.replace(T,"/"),e=e.replace(C,"$1/");e.match(z);)e=e.replace(z,"/");return e}function i(e){var t=e.length-1,n=e.charAt(t);return"#"===n?e.substring(0,t):".js"===e.substring(t-2)||e.indexOf("?")>0||"/"===n?e:e+".js"}function c(e){var t=b.alias;return t&&A(t[e])?t[e]:e}function s(e){var t,n=b.paths;return n&&(t=e.match(O))&&A(n[t[1]])&&(e=n[t[1]]+t[2]),e}function u(e){var t=b.vars;return t&&e.indexOf("{")>-1&&(e=e.replace(q,function(e,n){return A(t[n])?t[n]:e})),e}function l(e){var t=b.map,n=e;if(t)for(var o=0,a=t.length;a>o;o++){var r=t[o];if(n=k(r)?r(e)||e:e.replace(r[0],r[1]),n!==e)break}return n}function p(e,t){var n,o=e.charAt(0);if(H.test(e))n=e;else if("."===o)n=r((t?a(t):b.cwd)+e);else if("/"===o){var i=b.cwd.match(D);n=i?i[0]+e.substring(1):e}else n=b.base+e;return 0===n.indexOf("//")&&(n=location.protocol+n),n}function f(e,t){if(!e)return"";e=c(e),e=s(e),e=u(e),e=i(e);var n=p(e,t);return n=l(n)}function d(e){return e.hasAttribute?e.src:e.getAttribute("src",4)}function h(e,t,n){var o=j.createElement("script");if(n){var a=k(n)?n(e):n;a&&(o.charset=a)}g(o,t,e),o.async=!0,o.src=e,N=o,X?R.insertBefore(o,X):R.appendChild(o),N=null}function g(e,t,n){function o(){e.onload=e.onerror=e.onreadystatechange=null,b.debug||R.removeChild(e),e=null,t()}var a="onload"in e;a?(e.onload=o,e.onerror=function(){E("error",{uri:n,node:e}),o()}):e.onreadystatechange=function(){/loaded|complete/.test(e.readyState)&&o()}}function v(){if(N)return N;if(G&&"interactive"===G.readyState)return G;for(var e=R.getElementsByTagName("script"),t=e.length-1;t>=0;t--){var n=e[t];if("interactive"===n.readyState)return G=n}}function y(e){var t=[];return e.replace(V,"").replace(M,function(e,n,o){o&&t.push(o)}),t}function m(e,t){this.uri=e,this.dependencies=t||[],this.exports=null,this.status=0,this._waitings={},this._remain=0}if(!e.seajs){var w=e.seajs={version:"2.3.0"},b=w.data={},$=n("Object"),A=n("String"),L=Array.isArray||n("Array"),k=n("Function"),S=0,x=b.events={};w.on=function(e,t){var n=x[e]||(x[e]=[]);return n.push(t),w},w.off=function(e,t){if(!e&&!t)return x=b.events={},w;var n=x[e];if(n)if(t)for(var o=n.length-1;o>=0;o--)n[o]===t&&n.splice(o,1);else delete x[e];return w};var E=w.emit=function(e,t){var n=x[e];if(n){n=n.slice();for(var o=0,a=n.length;a>o;o++)n[o](t)}return w},_=/[^?#]*\//,T=/\/\.\//g,z=/\/[^/]+\/\.\.\//,C=/([^:/])\/+\//g,O=/^([^/:]+)(\/.+)$/,q=/{([^{]+)}/g,H=/^\/\/.|:\//,D=/^.*?\/\/.*?\//,j=document,B=location.href&&0!==location.href.indexOf("about:")?a(location.href):"",U=j.scripts,P=j.getElementById("seajsnode")||U[U.length-1],I=a(d(P)||B);w.resolve=f;var N,G,R=j.head||j.getElementsByTagName("head")[0]||j.documentElement,X=R.getElementsByTagName("base")[0];w.request=h;var F,M=/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^\/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g,V=/\\\\/g,J=w.cache={},K={},Q={},W={},Y=m.STATUS={FETCHING:1,SAVED:2,LOADING:3,LOADED:4,EXECUTING:5,EXECUTED:6};m.prototype.resolve=function(){for(var e=this,t=e.dependencies,n=[],o=0,a=t.length;a>o;o++)n[o]=m.resolve(t[o],e.uri);return n},m.prototype.load=function(){var e=this;if(!(e.status>=Y.LOADING)){e.status=Y.LOADING;var n=e.resolve();E("load",n);for(var o,a=e._remain=n.length,r=0;a>r;r++)o=m.get(n[r]),o.status<Y.LOADED?o._waitings[e.uri]=(o._waitings[e.uri]||0)+1:e._remain--;if(0===e._remain)return e.onload(),t;var i={};for(r=0;a>r;r++)o=J[n[r]],o.status<Y.FETCHING?o.fetch(i):o.status===Y.SAVED&&o.load();for(var c in i)i.hasOwnProperty(c)&&i[c]()}},m.prototype.onload=function(){var e=this;e.status=Y.LOADED,e.callback&&e.callback();var t,n,o=e._waitings;for(t in o)o.hasOwnProperty(t)&&(n=J[t],n._remain-=o[t],0===n._remain&&n.onload());delete e._waitings,delete e._remain},m.prototype.fetch=function(e){function n(){w.request(i.requestUri,i.onRequest,i.charset)}function o(){delete K[c],Q[c]=!0,F&&(m.save(r,F),F=null);var e,t=W[c];for(delete W[c];e=t.shift();)e.load()}var a=this,r=a.uri;a.status=Y.FETCHING;var i={uri:r};E("fetch",i);var c=i.requestUri||r;return!c||Q[c]?(a.load(),t):K[c]?(W[c].push(a),t):(K[c]=!0,W[c]=[a],E("request",i={uri:r,requestUri:c,onRequest:o,charset:b.charset}),i.requested||(e?e[i.requestUri]=n:n()),t)},m.prototype.exec=function(){function e(t){return m.get(e.resolve(t)).exec()}var n=this;if(n.status>=Y.EXECUTING)return n.exports;n.status=Y.EXECUTING;var a=n.uri;e.resolve=function(e){return m.resolve(e,a)},e.async=function(t,n){return m.use(t,n,a+"_async_"+o()),e};var r=n.factory,i=k(r)?r(e,n.exports={},n):r;return i===t&&(i=n.exports),delete n.factory,n.exports=i,n.status=Y.EXECUTED,E("exec",n),i},m.resolve=function(e,t){var n={id:e,refUri:t};return E("resolve",n),n.uri||w.resolve(n.id,t)},m.define=function(e,n,o){var a=arguments.length;1===a?(o=e,e=t):2===a&&(o=n,L(e)?(n=e,e=t):n=t),!L(n)&&k(o)&&(n=y(""+o));var r={id:e,uri:m.resolve(e),deps:n,factory:o};if(!r.uri&&j.attachEvent){var i=v();i&&(r.uri=i.src)}E("define",r),r.uri?m.save(r.uri,r):F=r},m.save=function(e,t){var n=m.get(e);n.status<Y.SAVED&&(n.id=t.id||e,n.dependencies=t.deps||[],n.factory=t.factory,n.status=Y.SAVED,E("save",n))},m.get=function(e,t){return J[e]||(J[e]=new m(e,t))},m.use=function(t,n,o){var a=m.get(o,L(t)?t:[t]);a.callback=function(){for(var t=[],o=a.resolve(),r=0,i=o.length;i>r;r++)t[r]=J[o[r]].exec();n&&n.apply(e,t),delete a.callback},a.load()},w.use=function(e,t){return m.use(e,t,b.cwd+"_use_"+o()),w},m.define.cmd={},e.define=m.define,w.Module=m,b.fetchedList=Q,b.cid=o,w.require=function(e){var t=m.get(m.resolve(e));return t.status<Y.EXECUTING&&(t.onload(),t.exec()),t.exports},b.base=I,b.dir=I,b.cwd=B,b.charset="utf-8",w.config=function(e){for(var t in e){var n=e[t],o=b[t];if(o&&$(o))for(var a in n)o[a]=n[a];else L(o)?n=o.concat(n):"base"===t&&("/"!==n.slice(-1)&&(n+="/"),n=p(n)),b[t]=n}return E("config",e),w}}}(this),function(){function e(e){c[e.name]=e}function t(e){return e&&c.hasOwnProperty(e)}function n(e){for(var n in c)if(t(n)){var o=","+c[n].ext.join(",")+",";if(o.indexOf(","+e+",")>-1)return n}}function o(e,t){var n=i.XMLHttpRequest?new i.XMLHttpRequest:new i.ActiveXObject("Microsoft.XMLHTTP");return n.open("GET",e,!0),n.onreadystatechange=function(){if(4===n.readyState){if(n.status>399&&n.status<600)throw new Error("Could not load: "+e+", status = "+n.status);t(n.responseText)}},n.send(null)}function a(e){e&&/\S/.test(e)&&(i.execScript||function(e){(i.eval||eval).call(i,e)})(e)}function r(e){return e.replace(/(["\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r").replace(/[\u2028]/g,"\\u2028").replace(/[\u2029]/g,"\\u2029")}var i=window,c={},s={};e({name:"text",ext:[".tpl",".html"],exec:function(e,t){a('define("'+e+'#", [], "'+r(t)+'")')}}),e({name:"json",ext:[".json"],exec:function(e,t){a('define("'+e+'#", [], '+t+")")}}),e({name:"handlebars",ext:[".handlebars"],exec:function(e,t){var n=['define("'+e+'#", ["handlebars"], function(require, exports, module) {','  var source = "'+r(t)+'"','  var Handlebars = require("handlebars")["default"]',"  module.exports = function(data, options) {","    options || (options = {})","    options.helpers || (options.helpers = {})","    for (var key in Handlebars.helpers) {","      options.helpers[key] = options.helpers[key] || Handlebars.helpers[key]","    }","    return Handlebars.compile(source)(data, options)","  }","})"].join("\n");a(n)}}),seajs.on("resolve",function(e){var o=e.id;if(!o)return"";var a,r;(r=o.match(/^(\w+)!(.+)$/))&&t(r[1])?(a=r[1],o=r[2]):(r=o.match(/[^?]+(\.\w+)(?:\?|#|$)/))&&(a=n(r[1])),a&&-1===o.indexOf("#")&&(o+="#");var i=seajs.resolve(o,e.refUri);a&&(s[i]=a),e.uri=i}),seajs.on("request",function(e){var t=s[e.uri];t&&(o(e.requestUri,function(n){c[t].exec(e.uri,n),e.onRequest()}),e.requested=!0)}),define("seajs/seajs-text/1.1.1/seajs-text-debug",[],{})}(),window.debug=function(e,t){var n,o;if(CONST.DEBUG_CONSOLE)try{n=Application.extend({type:"console"},t),o="function"==typeof e?e():e,o&&o.length>0&&("error"===n.type?console.error(o):"alert"===n.type?alert(o):console.log(o))}catch(a){}};var Application=function(e){this.options=e,this.initialize.apply(this,arguments)};Application.prototype={initialize:function(){this.modules={},this.status={},this.templates={},this.cache={},this.topics={},this.subUid=-1,this.isLazyLoad=!1},addModule:function(e,t){e in this.modules&&debug("【Module】已存在的模块："+e),this.modules[e]=t},getModules:function(){return this.modules},addStatus:function(e,t){this.status[e]=t},getStatus:function(e){return this.status[e]},getAllStatus:function(){return this.status},addTemplate:function(e,t){e in this.templates&&debug("【Template】已存在的模板："+e),this.templates[e]=t},getTemplates:function(){return this.templates},render:function(e){e=Application.extend({empty:!1},e);var t=$(e.render,$(e.page||"body")),n=e.handlebars.compile(e.template||t.html());e.empty&&t.empty();var o=$(n(e.data));e.callback&&e.callback.call(null,o),t.append(o)},addHash:function(e){localStorage._currentHash=e,window.location.hash=e},getCurrentHash:function(){var e=localStorage._currentHash;return e&&-1!==e.indexOf("?")&&(e=e.substring(0,e.indexOf("?"))),e},setBackPage:function(e){localStorage.backPage=e},getBackPage:function(){var e=localStorage.backPage,t=e;return"false"===e&&(t=App._Stack.getBefore()?App._Stack.getBefore()[0]:"home"),localStorage.backPage=!1,t},hasBackPage:function(){return localStorage.backPage},trigger:function(e,t){var n=this;return this.topics[e]?(setTimeout(function(){for(var o=n.topics[e],a=o?o.length:0;a--;)o[a].func(e,t)},0),!0):!1},on:function(e,t){this.topics[e]||(this.topics[e]=[]);var n=(++this.subUid).toString();return this.topics[e].push({token:n,func:t}),n},off:function(e){for(var t in this.topics)if(this.topics[t])for(var n=0,o=this.topics[t].length;o>n;n++)if(this.topics[t][n].token===e)return this.topics[t].splice(n,1),e;return!1},getUrlParam:function(e,t){var n=new RegExp("(^|&)"+e+"=([^&]*)(&|$)");"undefined"!=typeof t&&(location.href.indexOf("?")<location.href.indexOf("#/")&&(t=t.replace("html?","")),t=t.substring(t.indexOf("?"),t.length));var o=t||window.location.search,a=o.substr(1).match(n);return null!=a?unescape(a[2]):null},setUrlParam:function(e,t,n){"undefined"!=typeof n&&(n=n.substring(n.indexOf("?"),n.length));var o=n||window.location.search,a=o.substr(1).match(reg);return null!=a?unescape(a[2]):void 0},autoHide:function(e,t){debug("【Util】App.autoHide:");var n=$(".app-content",$(e)),o=!1;$(".app-content",$(e)).get(0)&&$(".app-content",$(e)).get(0).addEventListener("scroll",function(){var e=n.scrollTop();e>0&&!o?(o=!0,t.hide&&t.hide.call(this,e)):0===e&&o&&(o=!1,t.show&&t.show.call(this,e))})},scroll:function(e,t,n){debug("【Util】App.scroll:"+e);var o=$(".app-content",$(n)),a=parseInt(o.scrollTop()),r=0,i=5;e=parseInt(e),t/=i;var c=setInterval(function(){r++,o.scrollTop((e-a)/t*r+a),r>=t&&clearInterval(c)},i)},addLoading:function(){return window.$loading&&window.$loading.remove(),window.$loading=$('<div class="loading"></div>'),$("body").append(window.$loading),window.$loading},addTool:function(e,t){return window.$tool&&window.$tool.remove(),window.$tool=$(App.$tool.clone()),window.$tool.css("display","blcok"),window.$tool.find(".tool-reflesh").attr("data-page",t),window.$tool.find(".tool-totop").off().on("click",function(t){return t.preventDefault(),App.scroll(0,100,e),!1}),window.$tool.find(".tool-reflesh").off().on("click",function(e){if(e.preventDefault(),$(this).attr("data-page").length>0){var t=App._Stack.getLast();App._Stack.pop(),App.load(t[0],t[3])}else window.location.reload();return!1}),"home"===window.$tool.find(".tool-reflesh").attr("data-page")&&window.$tool.find(".tool-back").remove(),window.$tool.find(".tool-back").off().on("click",function(e){return e.preventDefault(),App.back(App.getBackPage),!1}),$(e).append(window.$tool),window.$tool},getLoading:function(){return $("")},removeLoading:function(){window.$loading?window.$loading.remove():$(".loading").remove()},initLoad:function(e,t,n){e&&(App.addLoading(),App.addTool(e,t.page),t.page&&App.addHash("#/"+t.page),$(e).on("appForward",function(){setTimeout(function(){App.removeLoading()},500),t.appForward&&t.appForward.call(n,e)}),$(e).on("appLayout",function(){t.appLayout&&t.appLayout.call(n,e)}),$(e).on("appShow",function(){debug("【Stack】Stack size: "+App._Stack.size()),App.addTool(e,t.page),t.appShow&&t.appShow.call(n,e)}),$(e).on("appReady",function(){App.removeLoading(),App.initPage(e),App.addTool(e,t.page),App.off("queryEvent"),App.on("queryEvent",function(){App.initPage(e)}),t.appReady&&t.appReady.call(n,e)}),$(e).on("appBeforeBack",function(){t.appBeforeBack&&t.appBeforeBack.call(n,e)}),$(e).on("appBack",function(){t.appBack&&t.appBack.call(n,e)}),$(e).on("appHide",function(){App.removeLoading(),t.appHide&&t.appHide.call(n,e)}),$(e).on("appDestroy",function(){App.removeLoading(),t.appDestroy&&t.appDestroy.call(n,e)}),t&&t.transition&&n&&(n.transition=t.transition))},initContent:function(e,t){$(e).find(".app-content").height($(window).height()-(t||0)),$(e).on("appShow",function(){$(e).find(".app-content").height($(window).height()-(t||0))})},initLazyLoad:function(e){this.isLazyLoad||(this.isLazyLoad=!0,setTimeout(function(){var t=$(".app-content",$(e)),n=$(".lazy",$(t));n.size()>0&&!n.lazyload?seajs.use(["LazyLoad"],function(){try{seajs.require("LazyLoad"),n.lazyload({container:t}),debug("【LazyLoad】initLazyLoad")}catch(e){debug("【Error】: lazyload is not find !")}}):(debug("【LazyLoad】initLazyLoad"),n.lazyload({container:t}))},100))},resetLazyLoad:function(e,t){$(e,$(t)).find(".lazy").size()>0&&(debug("【LazyLoad】resetLazyLoad"),App.disableLazyLoad(),App.initLazyLoad(t))},disableLazyLoad:function(){this.isLazyLoad=!1},isLazyLoad:function(){return this.isLazyLoad},initPage:function(e){setTimeout(function(){App._Pages.fixContent(e)},0),setTimeout(function(){App._Scroll.setup(e)},0),setTimeout(function(){App.initClick(e)},300),setTimeout(function(){var t=$(e).find(".app-content");if(t.height()>$(window).height()){var n=$(e).find(".app-topbar");App.initContent(e,n.size()>0?n.eq(0).height():0)}},5e3)},initPageReady:function(e){window.onhashchange=function(){try{if(debug("【Hash】onhashchange: "+localStorage._currentHash+" -> "+location.hash),localStorage._currentHash&&localStorage._currentHash===location.hash)return;if(location.hash.length>0){var t=location.hash.substring(2,location.hash.length);if(e._CustomStack&&e._CustomStack.length>0){var n=e._CustomStack.pop();return void e.load(n[0],n[1])}"undefined"===t&&e.load("home");var o=$(".app-back");o.size()>0?o.click():(debug("【Hash】size stack is 0"),e.load("home"))}}catch(a){e._Stack.destroy(),e.load("home")}},e.enableDragTransition();try{if(location.hash.length>0&&"#/home"!==location.hash)if(e._CustomStack=e._Stack.getRestoreStacks(),0===e._CustomStack.length)e.load("home");else if(-1!==location.href.indexOf("?"))e.load(location.hash.substring(2,location.hash.indexOf("?")));else{var t=e._CustomStack.pop();e.load(t[0],t[1])}else e._Stack.destroy(),e.load("home")}catch(n){e._Stack.destroy(),e.load("home")}},cleanStack:function(){App._Stack.destroy(),App._CustomStack.length=0},addCache:function(e,t){this.cache[e]=t},getCache:function(e){return this.cache[e]}},Application.version="00111114",Application.each=function(e,t){var n,o;if(null==e)return e;if(e.length===+e.length)for(n=0,o=e.length;o>n&&t(e[n],n,e)!==!1;n++);else{var a=Object.keys(e);for(n=0,o=a.length;o>n&&t(e[a[n]],a[n],e,n)!==!1;n++);}return e},Application.extend=function(e){return"undefined"==typeof e?e:(Array.prototype.slice.call(arguments,1).forEach(function(t){for(var n in t)e[n]=t[n]}),e)},Application.getValue=function(e,t){function n(e,t){return Application.each(t,function(o){return o in e?1!==t.length?(t.shift(),n(e[o],t),!1):void(a=e[o]):!1}),a}var o,a;return arguments.length<2||"string"!=typeof t?void console.error("参数不能少于2个， 且path为字符串"):(o=t.split("."),n(e,o))},Application.url=window.location.href,Application.fromCharCode=function(e){try{return String.fromCharCode(e)}catch(t){}},function(){var e,t;!function(n,o){function a(e){return function(t){return{}.toString.call(t)=="[object "+e+"]"}}function r(){}var i=a("Function"),c={};r.prototype.exec=function(){function e(e){return r.get(e).exec()}var t=this;if(this.execed)return t.exports;this.execed=!0;var n=t.factory,a=i(n)?n(e,t.exports={},t):n;return a===o&&(a=t.exports),delete t.factory,t.exports=a,a},e=function(e,t,n){var o={id:e,deps:t,factory:n};r.save(o)},r.save=function(e){var t=r.get(e.id);t.id=e.id,t.dependencies=e.deps,t.factory=e.factory},r.get=function(e){return c[e]||(c[e]=new r)},t=function(e){var t=r.get(e);return t.execed||t.exec(),t.exports}}(this)}();