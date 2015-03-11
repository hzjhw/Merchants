<<<<<<< Updated upstream
/*! Sea.js 2.3.0 | seajs.org/LICENSE.md */
!function(a,b){function c(a){return function(b){return{}.toString.call(b)=="[object "+a+"]"}}function d(){return z++}function e(a){return a.match(C)[0]}function f(a){for(a=a.replace(D,"/"),a=a.replace(F,"$1/");a.match(E);)a=a.replace(E,"/");return a}function g(a){var b=a.length-1,c=a.charAt(b);return"#"===c?a.substring(0,b):".js"===a.substring(b-2)||a.indexOf("?")>0||"/"===c?a:a+".js"}function h(a){var b=u.alias;return b&&w(b[a])?b[a]:a}function i(a){var b=u.paths,c;return b&&(c=a.match(G))&&w(b[c[1]])&&(a=b[c[1]]+c[2]),a}function j(a){var b=u.vars;return b&&a.indexOf("{")>-1&&(a=a.replace(H,function(a,c){return w(b[c])?b[c]:a})),a}function k(a){var b=u.map,c=a;if(b)for(var d=0,e=b.length;e>d;d++){var f=b[d];if(c=y(f)?f(a)||a:a.replace(f[0],f[1]),c!==a)break}return c}function l(a,b){var c,d=a.charAt(0);if(I.test(a))c=a;else if("."===d)c=f((b?e(b):u.cwd)+a);else if("/"===d){var g=u.cwd.match(J);c=g?g[0]+a.substring(1):a}else c=u.base+a;return 0===c.indexOf("//")&&(c=location.protocol+c),c}function m(a,b){if(!a)return"";a=h(a),a=i(a),a=j(a),a=g(a);var c=l(a,b);return c=k(c)}function n(a){return a.hasAttribute?a.src:a.getAttribute("src",4)}function o(a,b,c){var d=K.createElement("script");if(c){var e=y(c)?c(a):c;e&&(d.charset=e)}p(d,b,a),d.async=!0,d.src=a,R=d,Q?P.insertBefore(d,Q):P.appendChild(d),R=null}function p(a,b,c){function d(){a.onload=a.onerror=a.onreadystatechange=null,u.debug||P.removeChild(a),a=null,b()}var e="onload"in a;e?(a.onload=d,a.onerror=function(){B("error",{uri:c,node:a}),d()}):a.onreadystatechange=function(){/loaded|complete/.test(a.readyState)&&d()}}function q(){if(R)return R;if(S&&"interactive"===S.readyState)return S;for(var a=P.getElementsByTagName("script"),b=a.length-1;b>=0;b--){var c=a[b];if("interactive"===c.readyState)return S=c}}function r(a){var b=[];return a.replace(U,"").replace(T,function(a,c,d){d&&b.push(d)}),b}function s(a,b){this.uri=a,this.dependencies=b||[],this.exports=null,this.status=0,this._waitings={},this._remain=0}if(!a.seajs){var t=a.seajs={version:"2.3.0"},u=t.data={},v=c("Object"),w=c("String"),x=Array.isArray||c("Array"),y=c("Function"),z=0,A=u.events={};t.on=function(a,b){var c=A[a]||(A[a]=[]);return c.push(b),t},t.off=function(a,b){if(!a&&!b)return A=u.events={},t;var c=A[a];if(c)if(b)for(var d=c.length-1;d>=0;d--)c[d]===b&&c.splice(d,1);else delete A[a];return t};var B=t.emit=function(a,b){var c=A[a],d;if(c){c=c.slice();for(var e=0,f=c.length;f>e;e++)c[e](b)}return t},C=/[^?#]*\//,D=/\/\.\//g,E=/\/[^/]+\/\.\.\//,F=/([^:/])\/+\//g,G=/^([^/:]+)(\/.+)$/,H=/{([^{]+)}/g,I=/^\/\/.|:\//,J=/^.*?\/\/.*?\//,K=document,L=location.href&&0!==location.href.indexOf("about:")?e(location.href):"",M=K.scripts,N=K.getElementById("seajsnode")||M[M.length-1],O=e(n(N)||L);t.resolve=m;var P=K.head||K.getElementsByTagName("head")[0]||K.documentElement,Q=P.getElementsByTagName("base")[0],R,S;t.request=o;var T=/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^\/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g,U=/\\\\/g,V=t.cache={},W,X={},Y={},Z={},$=s.STATUS={FETCHING:1,SAVED:2,LOADING:3,LOADED:4,EXECUTING:5,EXECUTED:6};s.prototype.resolve=function(){for(var a=this,b=a.dependencies,c=[],d=0,e=b.length;e>d;d++)c[d]=s.resolve(b[d],a.uri);return c},s.prototype.load=function(){var a=this;if(!(a.status>=$.LOADING)){a.status=$.LOADING;var c=a.resolve();B("load",c);for(var d=a._remain=c.length,e,f=0;d>f;f++)e=s.get(c[f]),e.status<$.LOADED?e._waitings[a.uri]=(e._waitings[a.uri]||0)+1:a._remain--;if(0===a._remain)return a.onload(),b;var g={};for(f=0;d>f;f++)e=V[c[f]],e.status<$.FETCHING?e.fetch(g):e.status===$.SAVED&&e.load();for(var h in g)g.hasOwnProperty(h)&&g[h]()}},s.prototype.onload=function(){var a=this;a.status=$.LOADED,a.callback&&a.callback();var b=a._waitings,c,d;for(c in b)b.hasOwnProperty(c)&&(d=V[c],d._remain-=b[c],0===d._remain&&d.onload());delete a._waitings,delete a._remain},s.prototype.fetch=function(a){function c(){t.request(g.requestUri,g.onRequest,g.charset)}function d(){delete X[h],Y[h]=!0,W&&(s.save(f,W),W=null);var a,b=Z[h];for(delete Z[h];a=b.shift();)a.load()}var e=this,f=e.uri;e.status=$.FETCHING;var g={uri:f};B("fetch",g);var h=g.requestUri||f;return!h||Y[h]?(e.load(),b):X[h]?(Z[h].push(e),b):(X[h]=!0,Z[h]=[e],B("request",g={uri:f,requestUri:h,onRequest:d,charset:u.charset}),g.requested||(a?a[g.requestUri]=c:c()),b)},s.prototype.exec=function(){function a(b){return s.get(a.resolve(b)).exec()}var c=this;if(c.status>=$.EXECUTING)return c.exports;c.status=$.EXECUTING;var e=c.uri;a.resolve=function(a){return s.resolve(a,e)},a.async=function(b,c){return s.use(b,c,e+"_async_"+d()),a};var f=c.factory,g=y(f)?f(a,c.exports={},c):f;return g===b&&(g=c.exports),delete c.factory,c.exports=g,c.status=$.EXECUTED,B("exec",c),g},s.resolve=function(a,b){var c={id:a,refUri:b};return B("resolve",c),c.uri||t.resolve(c.id,b)},s.define=function(a,c,d){var e=arguments.length;1===e?(d=a,a=b):2===e&&(d=c,x(a)?(c=a,a=b):c=b),!x(c)&&y(d)&&(c=r(""+d));var f={id:a,uri:s.resolve(a),deps:c,factory:d};if(!f.uri&&K.attachEvent){var g=q();g&&(f.uri=g.src)}B("define",f),f.uri?s.save(f.uri,f):W=f},s.save=function(a,b){var c=s.get(a);c.status<$.SAVED&&(c.id=b.id||a,c.dependencies=b.deps||[],c.factory=b.factory,c.status=$.SAVED,B("save",c))},s.get=function(a,b){return V[a]||(V[a]=new s(a,b))},s.use=function(b,c,d){var e=s.get(d,x(b)?b:[b]);e.callback=function(){for(var b=[],d=e.resolve(),f=0,g=d.length;g>f;f++)b[f]=V[d[f]].exec();c&&c.apply(a,b),delete e.callback},e.load()},t.use=function(a,b){return s.use(a,b,u.cwd+"_use_"+d()),t},s.define.cmd={},a.define=s.define,t.Module=s,u.fetchedList=Y,u.cid=d,t.require=function(a){var b=s.get(s.resolve(a));return b.status<$.EXECUTING&&(b.onload(),b.exec()),b.exports},u.base=O,u.dir=O,u.cwd=L,u.charset="utf-8",t.config=function(a){for(var b in a){var c=a[b],d=u[b];if(d&&v(d))for(var e in c)d[e]=c[e];else x(d)?c=d.concat(c):"base"===b&&("/"!==c.slice(-1)&&(c+="/"),c=l(c)),u[b]=c}return B("config",a),t}}}(this);

(function(){
    /**
     * The Sea.js plugin for loading text resources such as template, json etc
     */

    var global = window
    var plugins = {}
    var uriCache = {}

    function register(o) {
        plugins[o.name] = o
    }

// normal text
    register({
        name: "text",

        ext: [".tpl", ".html"],

        exec: function(uri, content) {
            globalEval('define("' + uri + '#", [], "' + jsEscape(content) + '")')
        }
    })

// json
    register({
        name: "json",

        ext: [".json"],

        exec: function(uri, content) {
            globalEval('define("' + uri + '#", [], ' + content + ')')
        }
    })

// for handlebars template
    register({
        name: "handlebars",

        ext: [".handlebars"],

        exec: function(uri, content) {
            var code = [
                    'define("' + uri + '#", ["handlebars"], function(require, exports, module) {',
                    '  var source = "' + jsEscape(content) + '"',
                '  var Handlebars = require("handlebars")["default"]',
                '  module.exports = function(data, options) {',
                '    options || (options = {})',
                '    options.helpers || (options.helpers = {})',
                '    for (var key in Handlebars.helpers) {',
                '      options.helpers[key] = options.helpers[key] || Handlebars.helpers[key]',
                '    }',
                '    return Handlebars.compile(source)(data, options)',
                '  }',
                '})'
            ].join('\n')

            globalEval(code)
        }
    })


    seajs.on("resolve", function(data) {
        var id = data.id
        if (!id) return ""

        var pluginName
        var m

        // text!path/to/some.xx
        if ((m = id.match(/^(\w+)!(.+)$/)) && isPlugin(m[1])) {
            pluginName = m[1]
            id = m[2]
        }
        // http://path/to/a.tpl
        // http://path/to/c.json?v2
        else if ((m = id.match(/[^?]+(\.\w+)(?:\?|#|$)/))) {
            pluginName = getPluginName(m[1])
        }

        if (pluginName && id.indexOf("#") === -1) {
            id += "#"
        }

        var uri = seajs.resolve(id, data.refUri)

        if (pluginName) {
            uriCache[uri] = pluginName
        }

        data.uri = uri
    })

    seajs.on("request", function(data) {
        var name = uriCache[data.uri]

        if (name) {
            xhr(data.requestUri, function(content) {
                plugins[name].exec(data.uri, content)
                data.onRequest()
            })

            data.requested = true
        }
    })


// Helpers

    function isPlugin(name) {
        return name && plugins.hasOwnProperty(name)
    }

    function getPluginName(ext) {
        for (var k in plugins) {
            if (isPlugin(k)) {
                var exts = "," + plugins[k].ext.join(",") + ","
                if (exts.indexOf("," + ext + ",") > -1) {
                    return k
                }
            }
        }
    }

    function xhr(url, callback) {
        var r = global.XMLHttpRequest ?
            new global.XMLHttpRequest() :
            new global.ActiveXObject("Microsoft.XMLHTTP")

        r.open("GET", url, true)

        r.onreadystatechange = function() {
            if (r.readyState === 4) {
                // Support local file
                if (r.status > 399 && r.status < 600) {
                    throw new Error("Could not load: " + url + ", status = " + r.status)
                }
                else {
                    callback(r.responseText)
                }
            }
        }

        return r.send(null)
    }

    function globalEval(content) {
        if (content && /\S/.test(content)) {
            (global.execScript || function(content) {
                (global.eval || eval).call(global, content)
            })(content)
        }
    }

    function jsEscape(content) {
        return content.replace(/(["\\])/g, "\\$1")
            .replace(/[\f]/g, "\\f")
            .replace(/[\b]/g, "\\b")
            .replace(/[\n]/g, "\\n")
            .replace(/[\t]/g, "\\t")
            .replace(/[\r]/g, "\\r")
            .replace(/[\u2028]/g, "\\u2028")
            .replace(/[\u2029]/g, "\\u2029")
    }

    function pure(uri) {
        // Remove timestamp etc
        return uri.replace(/\?.*$/, "")
    }

    define("seajs/seajs-text/1.1.1/seajs-text-debug", [], {});
})();
/**
 * @description 应用程序管理器
 * @class Application - 应用程序管理器
 * @author yongjin<zjut_wyj@163.com> 2014/12/28
 */
/**
 * 调试
 *
 * @method debug
 * @param str
 * @param options
 * @author wyj 14.12.24
 * @example
 *   debug('test');
 *   debug('test', {
 *    type: 'error' // 打印红色字体
 *   });
 *   debug(function(){
 *     return 'test';
 *   });
 * */
window.debug = function (str, options) {
  var opts, msg;
  if (CONST.DEBUG_CONSOLE) {
    try {
      opts = Application.extend({ type: 'console' }, options);
      msg = typeof str == 'function' ? str() : str;
      if (msg && msg.length > 0) {
        if (opts.type === 'error') {
          console.error(msg);
        } else if (opts.type === 'alert') {
          alert(msg);
        } else {
          console.log(msg);
        }
      }
    } catch (e) {
    }
  }
};
var Application = function (options) {
  this.options = options;
  this.initialize.apply(this, arguments);
};
Application.prototype = {
  initialize: function () {
    this.modules = {};
    this.status = {};
    this.templates = {};
    this.cache = {};
    this.topics = {};
    this.subUid = -1;
    this.isLazyLoad = false;
  },
  addModule: function (name, val) {
    if (name in this['modules']) {
      debug('【Module】已存在的模块：' + name);
    }
    this['modules'][name] = val;
  },
  getModules: function () {
    return this['modules'];
  },
  addStatus: function (name, value) {
    this['status'][name] = value;
  },
  getStatus: function (name) {
    return this['status'][name];
  },
  getAllStatus: function () {
    return this.status;
  },
  addTemplate: function (name, fn) {
    if (name in this['templates']) {
      debug('【Template】已存在的模板：' + name);
    }
    this['templates'][name] = fn;
  },
  getTemplates: function () {
    return this['templates'];
  },
  render: function (options) {
    options = Application.extend({ empty: false }, options);
    var $container = $(options.render, $(options.page || 'body')); // 渲染容器
    var view = options.handlebars.compile(options.template || $container.html()); // 单视图
    if (options.empty) $container.empty();
    var $node = $(view(options.data));
    if (options.callback) {
      options.callback.call(null, $node);
    }
    $container.append($node);
  },
  addHash: function (name, page) {
    localStorage['_currentHash'] = name;
    window.location.hash = name;
  },
  getCurrentHash: function () {
    return localStorage['_currentHash'];
  },
  setBackPage: function (name) {
    localStorage['backPage'] = name;
  },
  getBackPage: function () {
    var backPage = localStorage['backPage'];
    var _back = backPage;
    if (backPage === 'false') {

      _back = App._Stack.getBefore() ? App._Stack.getBefore()[0] : 'home';
    }
    localStorage['backPage'] = false;
    return _back;
  },
  hasBackPage: function () {
    return localStorage['backPage'];
  },
  trigger: function (topic, args) {
    var ctx = this;
    if (!this.topics[topic]) return false;
    setTimeout(function () {
      var subscribers = ctx.topics[topic],
        len = subscribers ? subscribers.length : 0;
      while (len--) {
        subscribers[len].func(topic, args);
      }
    }, 0);
    return true;
  },
  on: function (topic, func) {
    if (!this.topics[topic]) this.topics[topic] = [];
    var token = (++this.subUid).toString();
    this.topics[topic].push({
      token: token,
      func: func
    });
    return token;
  },
  off: function (token) {
    for (var m in this.topics) {
      if (this.topics[m]) {
        for (var i = 0, j = this.topics[m].length; i < j; i++) {
          if (this.topics[m][i].token === token) {
            this.topics[m].splice(i, 1);
            return token;
          }
        }
      }
    }
    return false;
  },
  autoHide: function (page, options) {
    debug('【Util】App.autoHide:');
    var $appContent = $('.app-content', $(page));
    var isHide = false;
    $('.app-content', $(page)).get(0) &&
    $('.app-content', $(page)).get(0).addEventListener("scroll", function (event) {
      var scrollTop = $appContent.scrollTop();
      if (scrollTop > 0 && !isHide) {
        isHide = true;
        options.hide && options.hide.call(this, scrollTop);
      } else if (scrollTop === 0 && isHide) {
        isHide = false
        options.show && options.show.call(this, scrollTop);
      }
    });
  },
  scroll: function (scrollTo, time, page) {
    debug('【Util】App.scroll:' + scrollTo);
    var $appContent = $('.app-content', $(page));
    var scrollFrom = parseInt($appContent.scrollTop()),
      i = 0,
      runEvery = 5; // run every 5ms
    scrollTo = parseInt(scrollTo);
    time /= runEvery;
    var interval = setInterval(function () {
      i++;
      $appContent.scrollTop((scrollTo - scrollFrom) / time * i + scrollFrom);
      if (i >= time) {
        clearInterval(interval);
      }
    }, runEvery);
  },
  addLoading: function () {
    if (window.$loading) window.$loading.remove();
    window.$loading = $('<div class="loading"></div>');
    $('body').append(window.$loading);
    return window.$loading;
  },
  addTool: function (page, _page) {
    if (window.$tool) window.$tool.remove();
    window.$tool = $(App.$tool.clone());
    window.$tool.css('display', 'blcok');
    window.$tool.find('.tool-reflesh').attr('data-page', _page);
    window.$tool.find('.tool-totop').off().on('click', function (e) {
      e.preventDefault();
      App.scroll(0, 100, page);
      return false;
    });
    window.$tool.find('.tool-reflesh').off().on('click', function (e) {
      e.preventDefault();
      if ($(this).attr('data-page').length > 0) {
        App._Stack.pop();
        App.load($(this).attr('data-page'));
      } else {
        window.location.reload();
      }
      return false;
    });
    if (window.$tool.find('.tool-reflesh').attr('data-page') === 'home') {
      window.$tool.find('.tool-back').remove();
    }
    window.$tool.find('.tool-back').off().on('click', function (e) {
      e.preventDefault();
      App.back(App.getBackPage);
      return false;
    });
    $(page).append(window.$tool);
    return window.$tool;
  },
  getLoading: function () {
    return $('');
  },
  removeLoading: function () {
    if (window.$loading) window.$loading.remove();
    else $('.loading').remove();
  },
  initLoad: function (page, options, context) {
    if (page) {
      App.addLoading();
      App.addTool(page, options.page);
      if (options.page) App.addHash('#/' + options.page);
      // show
      $(page).on('appForward', function () {
        setTimeout(function () {
          App.removeLoading();
        }, 500);
        options.appForward && options.appForward.call(context, page);
      });
      $(page).on('appLayout', function () {
        options.appLayout && options.appLayout.call(context, page);
      });
      $(page).on('appShow', function () {
        debug('【Stack】Stack size: ' + App._Stack.size());
        App.addTool(page, options.page);
        options.appShow && options.appShow.call(context, page);
      });
      $(page).on('appReady', function () {
        App.removeLoading();
        App.initPage(page);
        App.addTool(page, options.page);
        App.off('queryEvent');
        App.on('queryEvent', function (data) {
          App.initPage(page);
        })
        options.appReady && options.appReady.call(context, page);
      });
      // back
      $(page).on('appBeforeBack', function () {
        options.appBeforeBack && options.appBeforeBack.call(context, page);
      });
      $(page).on('appBack', function () {
        options.appBack && options.appBack.call(context, page);
      });
      $(page).on('appHide', function () {
        App.removeLoading();
        options.appHide && options.appHide.call(context, page);
      });
      $(page).on('appDestroy', function () {
        App.removeLoading();
        options.appDestroy && options.appDestroy.call(context, page);
      });
      if (options && options.transition) {
        context && (context.transition = options.transition);
      }
    }
  },
  initContent: function (page, height) {
    $(page).find('.app-content').height($(window).height() - (height || 0));
    $(page).on('appShow', function () {
      $(page).find('.app-content').height($(window).height() - (height || 0));
    });
  },
  initLazyLoad: function (page) {
    if (!this.isLazyLoad) {
      this.isLazyLoad = true;
      setTimeout(function () {
        var appContent = $('.app-content', $(page));
        var $lazyList = $('.lazy', $(appContent));
        if ($lazyList.size() > 0 && !$lazyList.lazyload) {
          seajs.use(['LazyLoad'], function (lazyload) {
            try {
              seajs.require('LazyLoad');
              $lazyList.lazyload({
                container: appContent
              });
              debug('【LazyLoad】initLazyLoad');
            } catch (e) {
              debug('【Error】: lazyload is not find !');
            }
          });
        } else {
          debug('【LazyLoad】initLazyLoad');
          $lazyList.lazyload({
            container: appContent
          });
        }
      }, 100);
    }
  },
  resetLazyLoad: function (render, page) {
    if ($(render, $(page)).find('.lazy').size() > 0) {
      debug('【LazyLoad】resetLazyLoad');
      App.disableLazyLoad();
      App.initLazyLoad(page);
    }
  },
  disableLazyLoad: function () {
    this.isLazyLoad = false;
  },
  isLazyLoad: function () {
    return this.isLazyLoad;
  },
  initPage: function (page) {
    setTimeout(function () {
      App._Pages.fixContent(page)
    }, 0);
    setTimeout(function () {
      App._Scroll.setup(page)
    }, 0);
    setTimeout(function () {
      App.initClick(page);
    }, 300);
    setTimeout(function () {
      var $content = $(page).find('.app-content');
      if ($content.height() > $(window).height()) {
        var $topbar = $(page).find('.app-topbar');
        App.initContent(page, $topbar.size() > 0 ? $topbar.eq(0).height() : 0);
      }
    }, 5000);
  },
  initPageReady: function (App) {
    window.onhashchange = function () {
      try {
        debug('【Hash】onhashchange: ' + App.getCurrentHash() + ' -> ' + location.hash);
        if (App.getCurrentHash() && (App.getCurrentHash() === location.hash)) return;
        if (location.hash.length > 0) {
          var _page = location.hash.substring(2, location.hash.length);
          if (App._CustomStack.length > 0) {
            var item = App._CustomStack.pop();
            App.load(item[0], item[1]);
            return;
          }
          if (_page === 'undefined') App.load('home');
          /*else if (!App._Stack.getPage(_page)) {
           App.load('home');
           return;
           }*/
          var $back = $('.app-back');
          if ($back.size() > 0) {
            $back.click();
          } else {
            debug('【Hash】size stack is 0');
            App.load('home');
          }
        }
      } catch (e) {
        App._Stack.destroy();
        App.load('home');
      }
    }
    App.enableDragTransition();
    try {
      //debugger
      if (location.hash.length > 0) {
        App._CustomStack = App._Stack.getRestoreStacks();
        if (App._CustomStack.length === 0) {
          App.load('home');
        } else {
          var item = App._CustomStack.pop();
          App.load(item[0], item[1]);
        }
        //App.restore({ maxAge: 5 * 60 * 1000 });
      } else {
        App._Stack.destroy();
        App.load('home');
      }
    } catch (err) {
      App._Stack.destroy();
      App.load('home');

    }
  },
  cleanStack: function () {
    App._Stack.destroy();
    App._CustomStack.length = 0;
  },
  addCache: function (name, data) {
    this.cache[name] = data;
  },
  getCache: function (name) {
    return this.cache[name];
  }
};
Application.version = '00111114';
Application.each = function (obj, callback, context) {
  var i, length;
  if (obj == null) return obj;
  if (obj.length === +obj.length) {
    for (i = 0, length = obj.length; i < length; i++) {
      if (callback(obj[i], i, obj) === false) break;
    }
  } else {
    var ks = Object.keys(obj);
    for (i = 0, length = ks.length; i < length; i++) {
      if (callback(obj[ks[i]], ks[i], obj, i) === false) break;
    }
  }
  return obj;
};
Application.extend = function (obj) {
  if (typeof obj === 'undefined') return obj;
  Array.prototype.slice.call(arguments, 1).forEach(function (source) {
    for (var prop in source) {
      obj[prop] = source[prop];
    }
  });
  return obj;
};
Application.getValue = function (object, path) {
  var array, result;
  if (arguments.length < 2 || typeof path !== 'string') {
    console.error('参数不能少于2个， 且path为字符串');
    return;
  }
  array = path.split('.');
  function get(object, array) {
    Application.each(array, function (key) {
      if (key in object) {
        if (array.length === 1) {
          // 如果为数组最后一个元素， 则返回值
          result = object[key]
        } else {
          // 否则去除数组第一个， 递归调用get方法
          array.shift();
          get(object[key], array);
          // 同样跳出循环
          return false;
        }
      } else {
        // 没找到直接跳出循环
        return false;
      }
    });
    return result;
  }

  return get(object, array);
}
Application.url = window.location.href;

Application.fromCharCode = function (code) {
  try {
    return String.fromCharCode(code);
  } catch (e) {
  }
}
  /*window.addEventListener( "load", function() {
   FastClick.attach( document.body );
   }, false );*/
;
(function () {
  /**
   * Sea.js mini 2.3.0 | seajs.org/LICENSE.md
   * @method seajs
   * @private
   */
  var define;
  var require;
  (function (global, undefined) {
    /**
     * util-lang.js - The minimal language enhancement
     * @method isType
     * @private
     */
    function isType(type) {
      return function (obj) {
        return {}.toString.call(obj) == "[object " + type + "]"
      }
    }

    var isFunction = isType("Function")
    /**
     * module.js - The core of module loader
     * @method Module
     * @private
     */
    var cachedMods = {}

    function Module() {
    }

    // Execute a module
    Module.prototype.exec = function () {
      var mod = this
      // When module is executed, DO NOT execute it again. When module
      // is being executed, just return `module.exports` too, for avoiding
      // circularly calling
      if (this.execed) {
        return mod.exports
      }
      this.execed = true;

      function require(id) {
        return Module.get(id).exec()
      }

      // Exec factory
      var factory = mod.factory
      var exports = isFunction(factory) ? factory(require, mod.exports = {}, mod) : factory
      if (exports === undefined) {
        exports = mod.exports
      }
      // Reduce memory leak
      delete mod.factory
      mod.exports = exports
      return exports
    }
    // Define a module
    define = function (id, deps, factory) {
      var meta = {
        id: id,
        deps: deps,
        factory: factory
      }
      Module.save(meta)
    }
    // Save meta data to cachedMods
    Module.save = function (meta) {
      var mod = Module.get(meta.id)
      mod.id = meta.id
      mod.dependencies = meta.deps
      mod.factory = meta.factory
    }
    // Get an existed module or create a new one
    Module.get = function (id) {
      return cachedMods[id] || (cachedMods[id] = new Module())
    }
    // Public API
    require = function (id) {
      var mod = Module.get(id)
      if (!mod.execed) {
        mod.exec()
      }
      return mod.exports
    }
  })(this);
})();
=======
!function(e,t){function n(e){return function(t){return{}.toString.call(t)=="[object "+e+"]"}}function r(){return E++}function i(e){return e.match(T)[0]}function o(e){for(e=e.replace(_,"/"),e=e.replace(q,"$1/");e.match(C);)e=e.replace(C,"/");return e}function a(e){var t=e.length-1,n=e.charAt(t);return"#"===n?e.substring(0,t):".js"===e.substring(t-2)||e.indexOf("?")>0||"/"===n?e:e+".js"}function s(e){var t=A.alias;return t&&b(t[e])?t[e]:e}function c(e){var t,n=A.paths;return n&&(t=e.match(j))&&b(n[t[1]])&&(e=n[t[1]]+t[2]),e}function u(e){var t=A.vars;return t&&e.indexOf("{")>-1&&(e=e.replace(H,function(e,n){return b(t[n])?t[n]:e})),e}function p(e){var t=A.map,n=e;if(t)for(var r=0,i=t.length;i>r;r++){var o=t[r];if(n=S(o)?o(e)||e:e.replace(o[0],o[1]),n!==e)break}return n}function l(e,t){var n,r=e.charAt(0);if(B.test(e))n=e;else if("."===r)n=o((t?i(t):A.cwd)+e);else if("/"===r){var a=A.cwd.match(D);n=a?a[0]+e.substring(1):e}else n=A.base+e;return 0===n.indexOf("//")&&(n=location.protocol+n),n}function f(e,t){if(!e)return"";e=s(e),e=c(e),e=u(e),e=a(e);var n=l(e,t);return n=p(n)}function d(e){return e.hasAttribute?e.src:e.getAttribute("src",4)}function h(e,t,n){var r=O.createElement("script");if(n){var i=S(n)?n(e):n;i&&(r.charset=i)}g(r,t,e),r.async=!0,r.src=e,I=r,F?X.insertBefore(r,F):X.appendChild(r),I=null}function g(e,t,n){function r(){e.onload=e.onerror=e.onreadystatechange=null,A.debug||X.removeChild(e),e=null,t()}var i="onload"in e;i?(e.onload=r,e.onerror=function(){L("error",{uri:n,node:e}),r()}):e.onreadystatechange=function(){/loaded|complete/.test(e.readyState)&&r()}}function v(){if(I)return I;if(G&&"interactive"===G.readyState)return G;for(var e=X.getElementsByTagName("script"),t=e.length-1;t>=0;t--){var n=e[t];if("interactive"===n.readyState)return G=n}}function m(e){var t=[];return e.replace(V,"").replace(M,function(e,n,r){r&&t.push(r)}),t}function y(e,t){this.uri=e,this.dependencies=t||[],this.exports=null,this.status=0,this._waitings={},this._remain=0}if(!e.seajs){var w=e.seajs={version:"2.3.0"},A=w.data={},x=n("Object"),b=n("String"),$=Array.isArray||n("Array"),S=n("Function"),E=0,k=A.events={};w.on=function(e,t){var n=k[e]||(k[e]=[]);return n.push(t),w},w.off=function(e,t){if(!e&&!t)return k=A.events={},w;var n=k[e];if(n)if(t)for(var r=n.length-1;r>=0;r--)n[r]===t&&n.splice(r,1);else delete k[e];return w};var L=w.emit=function(e,t){var n=k[e];if(n){n=n.slice();for(var r=0,i=n.length;i>r;r++)n[r](t)}return w},T=/[^?#]*\//,_=/\/\.\//g,C=/\/[^/]+\/\.\.\//,q=/([^:/])\/+\//g,j=/^([^/:]+)(\/.+)$/,H=/{([^{]+)}/g,B=/^\/\/.|:\//,D=/^.*?\/\/.*?\//,O=document,P=location.href&&0!==location.href.indexOf("about:")?i(location.href):"",U=O.scripts,N=O.getElementById("seajsnode")||U[U.length-1],z=i(d(N)||P);w.resolve=f;var I,G,X=O.head||O.getElementsByTagName("head")[0]||O.documentElement,F=X.getElementsByTagName("base")[0];w.request=h;var R,M=/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^\/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g,V=/\\\\/g,J=w.cache={},K={},Q={},W={},Y=y.STATUS={FETCHING:1,SAVED:2,LOADING:3,LOADED:4,EXECUTING:5,EXECUTED:6};y.prototype.resolve=function(){for(var e=this,t=e.dependencies,n=[],r=0,i=t.length;i>r;r++)n[r]=y.resolve(t[r],e.uri);return n},y.prototype.load=function(){var e=this;if(!(e.status>=Y.LOADING)){e.status=Y.LOADING;var n=e.resolve();L("load",n);for(var r,i=e._remain=n.length,o=0;i>o;o++)r=y.get(n[o]),r.status<Y.LOADED?r._waitings[e.uri]=(r._waitings[e.uri]||0)+1:e._remain--;if(0===e._remain)return e.onload(),t;var a={};for(o=0;i>o;o++)r=J[n[o]],r.status<Y.FETCHING?r.fetch(a):r.status===Y.SAVED&&r.load();for(var s in a)a.hasOwnProperty(s)&&a[s]()}},y.prototype.onload=function(){var e=this;e.status=Y.LOADED,e.callback&&e.callback();var t,n,r=e._waitings;for(t in r)r.hasOwnProperty(t)&&(n=J[t],n._remain-=r[t],0===n._remain&&n.onload());delete e._waitings,delete e._remain},y.prototype.fetch=function(e){function n(){w.request(a.requestUri,a.onRequest,a.charset)}function r(){delete K[s],Q[s]=!0,R&&(y.save(o,R),R=null);var e,t=W[s];for(delete W[s];e=t.shift();)e.load()}var i=this,o=i.uri;i.status=Y.FETCHING;var a={uri:o};L("fetch",a);var s=a.requestUri||o;return!s||Q[s]?(i.load(),t):K[s]?(W[s].push(i),t):(K[s]=!0,W[s]=[i],L("request",a={uri:o,requestUri:s,onRequest:r,charset:A.charset}),a.requested||(e?e[a.requestUri]=n:n()),t)},y.prototype.exec=function(){function e(t){return y.get(e.resolve(t)).exec()}var n=this;if(n.status>=Y.EXECUTING)return n.exports;n.status=Y.EXECUTING;var i=n.uri;e.resolve=function(e){return y.resolve(e,i)},e.async=function(t,n){return y.use(t,n,i+"_async_"+r()),e};var o=n.factory,a=S(o)?o(e,n.exports={},n):o;return a===t&&(a=n.exports),delete n.factory,n.exports=a,n.status=Y.EXECUTED,L("exec",n),a},y.resolve=function(e,t){var n={id:e,refUri:t};return L("resolve",n),n.uri||w.resolve(n.id,t)},y.define=function(e,n,r){var i=arguments.length;1===i?(r=e,e=t):2===i&&(r=n,$(e)?(n=e,e=t):n=t),!$(n)&&S(r)&&(n=m(""+r));var o={id:e,uri:y.resolve(e),deps:n,factory:r};if(!o.uri&&O.attachEvent){var a=v();a&&(o.uri=a.src)}L("define",o),o.uri?y.save(o.uri,o):R=o},y.save=function(e,t){var n=y.get(e);n.status<Y.SAVED&&(n.id=t.id||e,n.dependencies=t.deps||[],n.factory=t.factory,n.status=Y.SAVED,L("save",n))},y.get=function(e,t){return J[e]||(J[e]=new y(e,t))},y.use=function(t,n,r){var i=y.get(r,$(t)?t:[t]);i.callback=function(){for(var t=[],r=i.resolve(),o=0,a=r.length;a>o;o++)t[o]=J[r[o]].exec();n&&n.apply(e,t),delete i.callback},i.load()},w.use=function(e,t){return y.use(e,t,A.cwd+"_use_"+r()),w},y.define.cmd={},e.define=y.define,w.Module=y,A.fetchedList=Q,A.cid=r,w.require=function(e){var t=y.get(y.resolve(e));return t.status<Y.EXECUTING&&(t.onload(),t.exec()),t.exports},A.base=z,A.dir=z,A.cwd=P,A.charset="utf-8",w.config=function(e){for(var t in e){var n=e[t],r=A[t];if(r&&x(r))for(var i in n)r[i]=n[i];else $(r)?n=r.concat(n):"base"===t&&("/"!==n.slice(-1)&&(n+="/"),n=l(n)),A[t]=n}return L("config",e),w}}}(this),function(){function e(e){s[e.name]=e}function t(e){return e&&s.hasOwnProperty(e)}function n(e){for(var n in s)if(t(n)){var r=","+s[n].ext.join(",")+",";if(r.indexOf(","+e+",")>-1)return n}}function r(e,t){var n=a.XMLHttpRequest?new a.XMLHttpRequest:new a.ActiveXObject("Microsoft.XMLHTTP");return n.open("GET",e,!0),n.onreadystatechange=function(){if(4===n.readyState){if(n.status>399&&n.status<600)throw new Error("Could not load: "+e+", status = "+n.status);t(n.responseText)}},n.send(null)}function i(e){e&&/\S/.test(e)&&(a.execScript||function(e){(a.eval||eval).call(a,e)})(e)}function o(e){return e.replace(/(["\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r").replace(/[\u2028]/g,"\\u2028").replace(/[\u2029]/g,"\\u2029")}var a=window,s={},c={};e({name:"text",ext:[".tpl",".html"],exec:function(e,t){i('define("'+e+'#", [], "'+o(t)+'")')}}),e({name:"json",ext:[".json"],exec:function(e,t){i('define("'+e+'#", [], '+t+")")}}),e({name:"handlebars",ext:[".handlebars"],exec:function(e,t){var n=['define("'+e+'#", ["handlebars"], function(require, exports, module) {','  var source = "'+o(t)+'"','  var Handlebars = require("handlebars")["default"]',"  module.exports = function(data, options) {","    options || (options = {})","    options.helpers || (options.helpers = {})","    for (var key in Handlebars.helpers) {","      options.helpers[key] = options.helpers[key] || Handlebars.helpers[key]","    }","    return Handlebars.compile(source)(data, options)","  }","})"].join("\n");i(n)}}),seajs.on("resolve",function(e){var r=e.id;if(!r)return"";var i,o;(o=r.match(/^(\w+)!(.+)$/))&&t(o[1])?(i=o[1],r=o[2]):(o=r.match(/[^?]+(\.\w+)(?:\?|#|$)/))&&(i=n(o[1])),i&&-1===r.indexOf("#")&&(r+="#");var a=seajs.resolve(r,e.refUri);i&&(c[a]=i),e.uri=a}),seajs.on("request",function(e){var t=c[e.uri];t&&(r(e.requestUri,function(n){s[t].exec(e.uri,n),e.onRequest()}),e.requested=!0)}),define("seajs/seajs-text/1.1.1/seajs-text-debug",[],{})}();var Application=function(e){this.options=e,this.initialize.apply(this,arguments)};Application.prototype={initialize:function(){this.modules={},this.status={},this.templates={},this.cache={},this.topics={},this.subUid=-1,this.isLazyLoad=!1},addModule:function(e,t){e in this.modules&&console.log("已存在的模块："+e),this.modules[e]=t},getModules:function(){return this.modules},addStatus:function(e,t){this.status[e]=t},getStatus:function(e){return this.status[e]},getAllStatus:function(){return this.status},addTemplate:function(e,t){e in this.templates&&console.log("已存在的模板："+e),this.templates[e]=t},getTemplates:function(){return this.templates},render:function(e){e=Application.extend({empty:!1},e);var t=$(e.render,$(e.page||"body")),n=e.handlebars.compile(e.template||t.html());e.empty&&t.empty();var r=$(n(e.data));e.callback&&e.callback.call(null,r),t.append(r)},addHash:function(e){localStorage._currentHash=e,window.location.hash=e},getCurrentHash:function(){return localStorage._currentHash},setBackPage:function(e){localStorage.backPage=e},getBackPage:function(){var e=localStorage.backPage,t=e;return"false"===e&&(t=App._Stack.getBefore()?App._Stack.getBefore()[0]:"home"),localStorage.backPage=!1,t},hasBackPage:function(){return localStorage.backPage},addLoading:function(){return window.$loading&&window.$loading.remove(),window.$loading=$('<div class="loading"></div>'),$("body").append(window.$loading),window.$loading},getLoading:function(){return $("")},removeLoading:function(){window.$loading?window.$loading.remove():$(".loading").remove()},trigger:function(e,t){var n=this;return this.topics[e]?(setTimeout(function(){for(var r=n.topics[e],i=r?r.length:0;i--;)r[i].func(e,t)},0),!0):!1},on:function(e,t){this.topics[e]||(this.topics[e]=[]);var n=(++this.subUid).toString();return this.topics[e].push({token:n,func:t}),n},off:function(e){for(var t in this.topics)if(this.topics[t])for(var n=0,r=this.topics[t].length;r>n;n++)if(this.topics[t][n].token===e)return this.topics[t].splice(n,1),e;return!1},autoHide:function(e,t){debug("【Util】App.autoHide:");var n=$(".app-content",$(e)),r=!1;$(".app-content",$(e)).get(0)&&$(".app-content",$(e)).get(0).addEventListener("scroll",function(){var e=n.scrollTop();e>0&&!r?(r=!0,t.hide&&t.hide.call(this,e)):0===e&&r&&(r=!1,t.show&&t.show.call(this,e))})},initLoad:function(e,t,n){e&&(App.addLoading(),t.page&&App.addHash("#/"+t.page),$(e).on("appForward",function(){setTimeout(function(){App.removeLoading()},500),t.appForward&&t.appForward.call(n,e)}),$(e).on("appLayout",function(){t.appLayout&&t.appLayout.call(n,e)}),$(e).on("appShow",function(){console.log("【Stack】Stack size: "+App._Stack.size()),t.appShow&&t.appShow.call(n,e)}),$(e).on("appReady",function(){App.removeLoading(),App.initPage(e),App.off("queryEvent"),App.on("queryEvent",function(){App.initPage(e)}),t.appReady&&t.appReady.call(n,e)}),$(e).on("appBeforeBack",function(){t.appBeforeBack&&t.appBeforeBack.call(n,e)}),$(e).on("appBack",function(){t.appBack&&t.appBack.call(n,e)}),$(e).on("appHide",function(){App.removeLoading(),t.appHide&&t.appHide.call(n,e)}),$(e).on("appDestroy",function(){App.removeLoading(),t.appDestroy&&t.appDestroy.call(n,e)}),t&&t.transition&&n&&(n.transition=t.transition))},initContent:function(e,t){$(e).find(".app-content").height($(window).height()-(t||0)),$(e).on("appShow",function(){$(e).find(".app-content").height($(window).height()-(t||0))})},initLazyLoad:function(e){this.isLazyLoad||(this.isLazyLoad=!0,seajs.use(["LazyLoad"],function(){var t=$(".app-content",$(e));$(".lazy",$(t)).lazyload({container:t,effect:"fadeIn"})}))},initPage:function(e){setTimeout(function(){App._Pages.fixContent(e)},0),setTimeout(function(){App._Pages.fixContent(e)},50),setTimeout(function(){App._Pages.fixContent(e)},100),setTimeout(function(){App._Pages.fixContent(e)},300),setTimeout(function(){App._Scroll.setup(e)},0),setTimeout(function(){App._Scroll.setup(e)},100),setTimeout(function(){App._Scroll.setup(e)},1e3),setTimeout(function(){App._Scroll.setup(e)},3e3),setTimeout(function(){App.initClick(e)},300),setTimeout(function(){var t=$(e).find(".app-content");if(t.height()>$(window).height()){var n=$(e).find(".app-topbar");App.initContent(e,n.size()>0?n.eq(0).height():0)}},5e3)},addCache:function(e,t){this.cache[e]=t},getCache:function(e){return this.cache[e]}},Application.version="00111114",Application.each=function(e,t){var n,r;if(null==e)return e;if(e.length===+e.length)for(n=0,r=e.length;r>n&&t(e[n],n,e)!==!1;n++);else{var i=Object.keys(e);for(n=0,r=i.length;r>n&&t(e[i[n]],i[n],e,n)!==!1;n++);}return e},Application.extend=function(e){return"undefined"==typeof e?e:(Array.prototype.slice.call(arguments,1).forEach(function(t){for(var n in t)e[n]=t[n]}),e)},Application.getValue=function(e,t){function n(e,t){return Application.each(t,function(r){return r in e?1!==t.length?(t.shift(),n(e[r],t),!1):void(i=e[r]):!1}),i}var r,i;return arguments.length<2||"string"!=typeof t?void console.error("参数不能少于2个， 且path为字符串"):(r=t.split("."),n(e,r))},Application.url=window.location.href,Application.fromCharCode=function(e){try{return String.fromCharCode(e)}catch(t){}},function(){var e,t;!function(n,r){function i(e){return function(t){return{}.toString.call(t)=="[object "+e+"]"}}function o(){}var a=i("Function"),s={};o.prototype.exec=function(){function e(e){return o.get(e).exec()}var t=this;if(this.execed)return t.exports;this.execed=!0;var n=t.factory,i=a(n)?n(e,t.exports={},t):n;return i===r&&(i=t.exports),delete t.factory,t.exports=i,i},e=function(e,t,n){var r={id:e,deps:t,factory:n};o.save(r)},o.save=function(e){var t=o.get(e.id);t.id=e.id,t.dependencies=e.deps,t.factory=e.factory},o.get=function(e){return s[e]||(s[e]=new o)},t=function(e){var t=o.get(e);return t.execed||t.exec(),t.exports}}(this)}();
>>>>>>> Stashed changes
