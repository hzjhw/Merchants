/**
 * @description 应用程序管理器
 * @class Application - 应用程序管理器
 * @author yongjin<zjut_wyj@163.com> 2014/12/28
 */
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
  },
  /**
   * 添加模板 分拆seajs配置文件，
   * 实现每个模板都有自己的模块配置文件
   *
   * @method [模块] - addModule
   * @param name
   * @param val
   * @author wyj 14.12.28
   * @example
   *        app.addModule('ProductList', '/modules/product/controllers/ProductList.js');
   */
  addModule: function (name, val) {
    if (name in this['modules']) {
      console.log('已存在的模块：' + name);
    }
    this['modules'][name] = val;
  },
  /**
   * 获取所有模块
   *
   * @method [模块] - getModules
   * @return {*}
   * @author wyj 14.12.28
   * @example
   *
   */
  getModules: function () {
    return this['modules'];
  },
  /**
   * 添加状态数据
   *
   * @method [状态] - addStatus
   * @param name
   * @param value
   * @author wyj 15.1.7
   */
  addStatus: function (name, value) {
    this['status'][name] = value;
  },
  /**
   * 获取状态数据
   *
   * @method [状态] - getStatus
   * @param name
   * @param value
   * @author wyj 15.1.7
   */
  getStatus: function (name) {
    return this['status'][name];
  },
  /**
   * 获取所有状态数据
   * @method [状态] - getAllStatus
   * @return {{}|*|Application.status}
   * @author wyj 15.1.9
   */
  getAllStatus: function () {
    return this.status;
  },
  /**
   * 添加模板, 目前无法解决seajs的实时获取问题
   *
   * @method [模板] - addTemplate
   * @param name
   * @param fn
   * @author wyj 14.12.28
   * @example
   *        app.addTemplate('template/photo_item', function (require, exports, module) {
              module.exports = require('modules/album/views/photo_item.html');
            });
   */
  addTemplate: function (name, fn) {
    if (name in this['templates']) {
      console.log('已存在的模板：' + name);
    }
    this['templates'][name] = fn;
  },
  /**
   * 获取所有模板
   *
   * @method [模板] - getTemplates
   * @return {*}
   * @author wyj 14.12.28
   * @example
   *        app.getTemplates();
   */
  getTemplates: function () {
    return this['templates'];
  },
  /**
   * 单视图渲染
   * @method [模板] - render
   * @param options
   * @author wyj 15.2.7
   * @example
   *      App.render({
   *          render: '#brandList', // 容器
   *          handlebars: HandlebarsHelper, // 必需
   *          page: page, // 作用域
   *          template: $('#brandList').html(),
   *          items: result.brandList.list // 数据列表
   *          callback: function(dom){
   *
   *          }
   *      });
   */
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
      _back = App._Stack.getBefore()[0];
    }
    localStorage['backPage'] = false;
    return _back;
  },
  hasBackPage: function () {
    return localStorage['backPage'];
  },
  addLoading: function () {
    if (window.$loading) window.$loading.remove();
    window.$loading = $('<div class="loading"></div>');
    $('body').append(window.$loading);
  },
  removeLoading: function () {
    if (window.$loading) window.$loading.remove();
    else $('.loading').remove();
  },
  initLoad: function (page, options, context) {
    if (page) {
      App.addLoading();
      if (options.page) App.addHash('#/' + options.page);
      //if (App._Stack.size() > 5) App._Stack.shift();
      //console.log('【Stack】Stack size: ' + App._Stack.size());
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
        console.log('【Stack】Stack size: ' + App._Stack.size());
        options.appShow && options.appShow.call(context, page);
      });
      $(page).on('appReady', function () {
        App.removeLoading();
        App.initPage(page);
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
    //alert($(window).height() - height);
    $(page).on('appShow', function () {
      $(page).find('.app-content').height($(window).height() - (height || 0));
    });
    //alert($(page).find('.app-content').height());
  },
  initLazyLoad: function (page) {
    seajs.use(['LazyLoad'], function () {
      var appContent = $('.app-content', $(page));
      $('.lazy', $(appContent)).lazyload({
        container: appContent,
        effect: "fadeIn"
      });
    });
  },
  initPage: function (page, height) {
    //App.initContent(page);
    setTimeout(App._Pages.fixContent(page), 0);
    setTimeout(App._Pages.fixContent(page), 50);
    setTimeout(App._Pages.fixContent(page), 100);
    setTimeout(App._Pages.fixContent(page), 300);
    setTimeout(App._Pages.fixContent(page), 500);
    setTimeout(App._Pages.fixContent(page), 800);
    setTimeout(App._Pages.fixContent(page), 1000);
    setTimeout(App._Pages.fixContent(page), 1200);
    setTimeout(App._Pages.fixContent(page), 1500);
    setTimeout(App._Pages.fixContent(page), 2000);
    setTimeout(App._Pages.fixContent(page), 2500);
    setTimeout(App._Pages.fixContent(page), 3000);
    setTimeout(App._Pages.fixContent(page), 3500);
    setTimeout(App._Pages.fixContent(page), 4000);
    setTimeout(App._Pages.fixContent(page), 4500);
    setTimeout(App._Pages.fixContent(page), 5000);
    setTimeout(App._Pages.fixContent(page), 6000);
    setTimeout(App._Pages.fixContent(page), 7000);
    setTimeout(App._Pages.fixContent(page), 8000);
    setTimeout(App._Pages.fixContent(page), 9000);
    setTimeout(App._Pages.fixContent(page), 10000);

    setTimeout(App._Scroll.setup(page), 1000);
    setTimeout(App._Scroll.setup(page), 2000);
    setTimeout(App._Scroll.setup(page), 3000);
    setTimeout(App._Scroll.setup(page), 4000);
    setTimeout(App._Scroll.setup(page), 5000);
    setTimeout(App._Scroll.setup(page), 6000);
    setTimeout(App._Scroll.setup(page), 7000);
    setTimeout(App._Scroll.setup(page), 8000);
    setTimeout(App._Scroll.setup(page), 9000);
    setTimeout(App._Scroll.setup(page), 10000);

    setTimeout(function () {
      App.initClick(page);
    }, 300);
    setTimeout(function(){
      var $content = $(page).find('.app-content');
      if ($content.height() > $(window).height()) {
        var $topbar = $(page).find('.app-topbar');
        App.initContent(page, $topbar.size() > 0 ? $topbar.eq(0).height() : 0);
      }
    }, 5000);
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
