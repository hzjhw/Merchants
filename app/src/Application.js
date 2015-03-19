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
    var _hash = localStorage['_currentHash'];
    if (_hash && _hash.indexOf('?') !== -1){
      _hash = _hash.substring(0, _hash.indexOf('?'));
    }
    //debug(_hash, {type: 'alert'});
    return _hash;
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
  getUrlParam: function (name, url) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    if (typeof url !== 'undefined'){
      if (location.href.indexOf('?') < location.href.indexOf('#/')){
        url = url.replace('html?', '');
      }
      url = url.substring(url.indexOf('?'), url.length);
    }
    var path = url || window.location.search;
    var r = path.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  },
  setUrlParam: function(name, value, url){
    var url_pre = '';
    if (typeof url !== 'undefined'){
      url = url.substring(url.indexOf('?'), url.length);
    }
    var path = url || window.location.search;
    var r = path.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
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
        var _data = App._Stack.getLast();
        debugger
        App._Stack.pop();
        //App.load($(this).attr('data-page').replace(/^(.+)\?.*$/g, '$1'));
        App.load(_data[0], _data[3]);
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
        debug('【Hash】onhashchange: ' + localStorage['_currentHash'] + ' -> ' + location.hash);
        if (localStorage['_currentHash'] && (localStorage['_currentHash'] === location.hash)) return;
        if (location.hash.length > 0) {
          var _page = location.hash.substring(2, location.hash.length);
          if (App._CustomStack && App._CustomStack.length > 0) {
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
      if (location.hash.length > 0 && location.hash !== '#/home') {
        App._CustomStack = App._Stack.getRestoreStacks();
        if (App._CustomStack.length === 0) {
          App.load('home');
        }
        else if (location.href.indexOf('?') !== -1){
          //alert('initPageReady:' + location.hash.substring(2, location.hash.indexOf('?')));
          App.load(location.hash.substring(2, location.hash.indexOf('?')));

        }
        else {
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
