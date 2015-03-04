/**
 * @description main
 * @class main
 * @author yongjin<zjut_wyj@163.com> 2015/3/2
 */
App.LOGIN_CHANGE = false;
App.CELL_PHONE = "cell_phone";

App.scroll = function (scrollTo, time) {
  debug('【Util】App.scroll:' + scrollTo);
  var scrollFrom = parseInt(document.body.scrollTop),
    i = 0,
    runEvery = 5; // run every 5ms
  scrollTo = parseInt(scrollTo);
  time /= runEvery;
  var interval = setInterval(function () {
    i++;
    document.body.scrollTop = (scrollTo - scrollFrom) / time * i + scrollFrom;
    if (i >= time) {
      clearInterval(interval);
    }
  }, runEvery);
}
App.showMsg = function (titleVal, cntVal) {
  seajs.use(['dialog'], function (dialog) {
    window.dialog = dialog({
      title: titleVal,
      content: cntVal,
      width: $(window).width() - 280,
      button: [
        {value: '确定'}
      ]
    }).showModal();
  })
}
App.showConfirm = function (titleVal, cntVal, curEle, callback) {
  seajs.use(['dialog'], function (dialog) {
    window.dialog = dialog({
      title: titleVal,
      content: cntVal,
      width: $(window).width() - 280,
      button: [
        {
          value: '确定',
          callback: callback,
          autofocus: true
        },
        {
          value: '取消'
        }
      ]
    }).showModal(curEle);
  })
}
App.show330 = function (page, callback) {
  seajs.use(['dialog'], function (dialog) {
    window.dialog && window.dialog.close().remove();
    window.dialog = dialog({
      id: '330dialog',
      title: '我的330',
      align: 'bottom right',
      width: $(window).width() - 280,
      fixed: false,
      content: $('.container-my', $(page)).html(),
      onshow: function () {
        var ctx = this;
        setTimeout(function () {
          $('.ul-my li').click(function (e) {
            e.preventDefault();
            ctx.close();
            App.load($(this).attr('data-target'));
            return false;
          });
        }, 100);
      }
    });
    callback && callback.call(this, window.dialog);
  });
}
App.initTopScroll = function (page) {
  debug('【Util】App.initTopScroll:');
  var $appContent = $('.app-content', $(page));
  var $appLogo = $('#app-index-logo', $(page));
  var $search = $('.app-search', $(page));
  var isHide = false;
  $('.app-content', $(page)).get(0) &&
  $('.app-content', $(page)).get(0).addEventListener("scroll", function (event) {
    var scrollTop = $appContent.scrollTop();
    if (scrollTop === 0) {
      isHide = false;
      $search.css({marginTop: 0});
      $appLogo.show();
    }
    if (scrollTop > 100 && !isHide) {
      isHide = true;
      $search.css({marginTop: 7}, '100');
      $appLogo.hide();
    }
  });
}

seajs.use(['App'], function (App) {
  /*首页*/
  App.controller('home', function (page) {
    debug('【Controller】pageLoad: home');

    $('#Loading').remove();
    App._Stack.destroy();

    App.initLoad(page, { transition: 'fade', page: 'home', appReady: function (page) {
    }, appShow: function (page) {
      App.removeLoading();
      App.initTopScroll(page);
      App._Stack.destroy();
      var phoneNum = localStorage[App.CELL_PHONE];
      if (phoneNum !== '')
        $(page).find(".app-top-login").html("<div class='btn-login'>手机号:" + phoneNum + "</div><div class='app-button app-btn btn-out'>退出</div> ");
      else {
        $(page).find(".app-top-login").html(' <div class="app-button btn-register"  style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0);">注册</div>' +
          '<div class="app-button btn-login" style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0);">登录</div>');
      }
      // appReady里注册事件必需先注销事件
      $(page).find('.btn-register').off().on('click', function () {
        App.load('register_dealers');
      });
      $(page).find('.btn-login').off().on('click', function () {
        App.load('login_dealers');
      });
      $(page).find('.btn-out').off().on('click', function () {
        App.query("/loginout", {
          success: function (result) {
            if (result.msg == 'success') {
              localStorage[App.CELL_PHONE] = '';
              App.LOGIN_CHANGE = true;
              App.back();
            }
          }
        })
      });
    }}, this);
    try {
      $(page).find('[data-target="inputs"]')
        .attr('data-target', null)
        .stickyClick(function (unlock) {
          App.pick('inputs', function (params) {
            console.log(JSON.stringify(params));
            unlock();
          });
        });
    } catch (e) {
    }
    // 我的330
    $(page).find('.btn-my').click(function (e) {
      e.preventDefault();
      setTimeout(function () {
        if (!window.myDialog) {
          App.show330(page);
          window.myDialog = true;
        }
      }, 0);
      var $dom = $(this).find('.span-my').get(0);
      App.query('/userinfo', {
        cache: true,
        success: function (data) {
          if (data.msg == 'nologin') {
            var cntVal = '<span style="font-size: 20px"> 对不起,您还未登录!现在就登录吗?</span>';
            App.showConfirm('未登录', cntVal, $dom, function () {
              App.load('login_dealers');
            });
            /*if (window.confirm('对不起,您还未登录!现在就登录吗?')) {
             App.load('login_dealers');
             }*/
          }
          else {
            App.show330(page, function (dialog) {
              dialog.showModal($dom)
            });
          }
        }
      });
      return false;
    });

    /*品牌分类*/
    $(page).find('.cate-ul li').click(function () {
      App.addLoading();
      if ($(this).attr('data-id').length === 0) {
        App.load('brand_unique');
        return;
      }
      App.load('brand_list', {
        id: $(this).attr('data-id'),
        title: $(this).attr('data-title'),
        banner: $(this).attr('data-banner')
      });
    });
    // 门馆展示
    seajs.use(['HomeBrand'], function (HomeBrand) {
      console.log('HomeBrand');
      App.HomeBrand = new HomeBrand(page);
    });
  });

  /*品牌列表*/
  App.controller('brand_list', function (page) {
    debug('【Controller】pageLoad: brand_list');
    var ctx = this;
    App.initLoad(page, { transition: 'slide-left', page: 'brand_list'}, this);

    this.transition = 'slide-left';

    this.transition = 'slide-left';

    if (!ctx.args.id) ctx.args.id = localStorage['brand_list_args_id'];
    if (!ctx.args.title) ctx.args.title = localStorage['brand_list_args_title'];
    if (!ctx.args.banner) ctx.args.banner = localStorage['brand_list_args_banner'];

    localStorage['brand_list_args_id'] = ctx.args.id;
    localStorage['brand_list_args_title'] = ctx.args.title;
    localStorage['brand_list_args_banner'] = ctx.args.banner;

    seajs.use(['BrandList'], function (BrandList) {
      App.BrandList = new BrandList(page, ctx.args.id, ctx.args.title, ctx.args.banner, ctx.args.area);
    });
  });
  /*品牌详细*/
  App.controller('brand_detail', function (page) {
    debug('【Controller】pageLoad: brand_detail');
    var ctx = this;
    if (!ctx.args.id) ctx.args.id = localStorage['brand_detail_args_id'];
    localStorage['brand_detail_args_id'] = ctx.args.id;
    App.initLoad(page, { transition: 'fade', page: 'brand_detail', appShow:function(page){
      seajs.use('IncludeMessage',function(IncludeMessage){
        new IncludeMessage(page, '.message', {
          id: ctx.args.id
        });
      })
    }}, ctx);
    seajs.use(['BrandDetail'], function (BrandDetail) {
      App.BrandDetail = new BrandDetail(page, ctx.args.id, ctx);
    })
  });
  /*厂家信息*/
  App.controller('brand_info', function (page) {
    debug('【Controller】pageLoad: brand_info');
    var ctx = this;
    App._Stack.pop();
    if (!ctx.args.id) ctx.args.id = localStorage['brand_info_args_id'];
    localStorage['brand_info_args_id'] = ctx.args.id;
    App.initLoad(page, { transition: 'fade', page: 'brand_info', appShow:function(page){
      seajs.use('IncludeMessage',function(IncludeMessage){
        new IncludeMessage(page, '.message', {
          id: ctx.args.id
        });
      })
    }}, ctx);
    seajs.use(['BrandInfo'], function (BrandInfo) {
      App.BrandInfo = new BrandInfo(page, ctx.args.id, ctx);
    });
  });
  /*厂家产品*/
  App.controller('brand_product', function (page) {
    debug('【Controller】pageLoad: brand_info');
    var ctx = this;
    App._Stack.pop();
    App.initLoad(page, { transition: 'fade', page: 'brand_product'}, ctx);
    if (!ctx.args.id) ctx.args.id = localStorage['brand_product_args_id'];
    localStorage['brand_product_args_id'] = ctx.args.id;
    seajs.use(['BrandProduct'], function (BrandProduct) {
      App.BrandProduct = new BrandProduct(page, ctx.args.id, ctx);
    });
  });
  /*厂家实力*/
  App.controller('brand_tec', function (page) {
    debug('【Controller】pageLoad: brand_tec');
    var ctx = this;
    App._Stack.pop();
    if (!ctx.args.id) ctx.args.id = localStorage['brand_tec_args_id'];
    localStorage['brand_tec_args_id'] = ctx.args.id;
    App.initLoad(page, { transition: 'fade', page: 'brand_tec', appShow:function(page){
      seajs.use('IncludeMessage',function(IncludeMessage){
        new IncludeMessage(page, '.message', {
          id: ctx.args.id
        });
      })
    }}, ctx);
    seajs.use(['BrandTec'], function (BrandTec) {
      App.BrandTec = new BrandTec(page, ctx.args.id, ctx);
    });
  });
  /*空白区域*/
  App.controller('brand_blank', function (page) {
    debug('【Controller】pageLoad: brand_blank');
    var ctx = this;
    App._Stack.pop();
    if (!ctx.args.id) ctx.args.id = localStorage['brand_blank_args_id'];
    localStorage['brand_blank_args_id'] = ctx.args.id;
    App.initLoad(page, { transition: 'fade', page: 'brand_blank', appShow:function(page){
      seajs.use('IncludeMessage',function(IncludeMessage){
        new IncludeMessage(page, '.message', {
          id: ctx.args.id
        });
      })
    }}, ctx);
    seajs.use(['BrandBlank'], function (BrandBlank) {
      App.BrandBlank = new BrandBlank(page, ctx.args.id, ctx);
    });
  });
  /*特色门馆*/
  App.controller('brand_unique', function (page) {
    debug('【Controller】pageLoad: brand_unique');
    var ctx = this;
    App.initLoad(page, { transition: 'fade', page: 'brand_unique'}, ctx);
    seajs.use(['BrandUnique'], function (BrandUnique) {
      App.BrandUnique = new BrandUnique(page, ctx);
    });
  });
  App.controller('category', function (page) {
    debug('【Controller】pageLoad: category');
    App.initLoad(page, { transition: 'slideon-down', page: 'category'}, this);
    seajs.use(['CategoryCtrl'], function (CategoryCtrl) {
      App.CategoryCtrl = new CategoryCtrl(page, this);
    });
  });

  /*搜藏的产品*/
  App.controller('favorite_product', function (page) {
    debug('【Controller】pageLoad: favorite_product');
    App.initLoad(page, { transition: 'slide-left', page: 'favorite_product'}, this);
    seajs.use(['FavPro'], function (FavPro) {
      App.FavPro = new FavPro(page);
    });
  });
  /*搜藏的品牌*/
  App.controller('favorite_brand', function (page) {
    debug('【Controller】pageLoad: favorite_brand');
    App.initLoad(page, { transition: 'slide-left', page: 'favorite_brand'}, this);
    seajs.use(['FavBrand'], function (FavBrand) {
      App.FavBrand = new FavBrand(page);
    });
  });
  /*我的抵金券*/
  App.controller('favorite_money', function (page) {
    debug('【Controller】pageLoad: favorite_money');
    App.initLoad(page, { transition: 'slide-left', page: 'favorite_money'}, this);
    seajs.use(['FavMoney'], function (FavMoney) {
      App.FavMoney = new FavMoney(page);
    });
  });
  /*我的意向合作*/
  App.controller('favorite_cooprate', function (page) {
    debug('【Controller】pageLoad: favorite_cooprate');
    App.initLoad(page, { transition: 'slide-left', page: 'favorite_cooprate'}, this);
    seajs.use(['FavCooprate'], function (FavCooprate) {
      App.FavCooprate = new FavCooprate(page);
    });
  });
  /*我的留言*/
  App.controller('favorite_message', function (page) {
    debug('【Controller】pageLoad: favorite_message');
    App.initLoad(page, { transition: 'slide-left', page: 'favorite_message'}, this);
    seajs.use(['FavMessage'], function (FavMessage) {
      App.FavMessage = new FavMessage(page);
    });
  });

  /*登录页面*/
  App.controller('login_dealers', function (page) {
    debug('【Controller】pageLoad: login_dealers');
    var ctx = this;
    App.initLoad(page, { transition: 'slide-left', page: 'login_dealers'}, ctx);
    seajs.use(['Login'], function (Login) {
      App.Login = new Login(page, ctx);
    });
  });
  /*经销商*/
  App.controller('favorite_info', function (page) {
    debug('【Controller】pageLoad: favorite_info');
    App.initLoad(page, { transition: 'slide-left', page: 'favorite_info'}, this);
    seajs.use(['FavInfo'], function (FavInfo) {
      App.FavInfo = new FavInfo(page);
    });
  });
  /*产品列表*/
  App.controller('product_list', function (page) {
    debug('【Controller】pageLoad: product_list');
    var ctx = this;
    App.initLoad(page, { transition: 'fade', page: 'product_list'}, ctx);
    if (!ctx.args.id) ctx.args.id = localStorage['product_list_args_id'];
    localStorage['product_list_args_id'] = ctx.args.id;
    if (ctx.args.price || ctx.args.cat) {
      localStorage['product_list_args_id'] = null;
    }
    seajs.use(['ProductList'], function (ProductList) {
      App.ProductList = new ProductList(page, ctx.args.id, ctx.args.price, ctx.args.cat, ctx.args.keywords, ctx);
    });
  });

  /*产品详细*/
  App.controller('product_detail', function (page) {
    debug('【Controller】pageLoad: product_detail');
    var ctx = this;
    App.initLoad(page, { transition: 'fade', page: 'product_detail'}, ctx);
    if (!ctx.args.id) ctx.args.id = localStorage['product_detail_args_id'];
    if (!ctx.args.id) ctx.args.proid = localStorage['product_detail_args_proid'];
    localStorage['product_detail_args_id'] = ctx.args.id;
    localStorage['product_detail_args_proid'] = ctx.args.proid;
    seajs.use(['ProductDetail'], function (ProductDetail) {
      App.ProductDetail = new ProductDetail(page, ctx.args.id, ctx.args.proid, ctx);
    });
  });
  App.controller('product_search', function (page) {
    debug('【Controller】pageLoad: product_search');
    var ctx = this;
    App.initLoad(page, { transition: 'fade', page: 'product_search'}, ctx);
    seajs.use(['ProductSearch'], function (ProductSearch) {
      App.ProductSearch = new ProductSearch(page, ctx);
    });
  });
  /*注册页面*/
  App.controller('register_dealers', function (page) {
    debug('【Controller】pageLoad: register_dealers');
    var ctx = this;
    App.initLoad(page, { transition: 'slide-left', page: 'register_dealers'}, ctx);
    seajs.use(['Register'], function (Register) {
      App.Register = new Register(page, ctx);
    });
  });
  /*搜索页面*/
  App.controller('search', function (page) {
    debug('【Controller】pageLoad: search');
    var ctx = this;
    App.initLoad(page, { transition: 'fade', page: 'search'}, ctx);
    seajs.use(['SearchIndex'], function (SearchIndex) {
      App.SearchIndex = new SearchIndex(page, ctx);
    });
  });


  window.onhashchange = function () {
    try {
      debug('【Hash】onhashchange: ' + App.getCurrentHash() + ' -> ' + location.hash);
      if (App.getCurrentHash() && (App.getCurrentHash() === location.hash)) return;
      if (location.hash.length > 0) {
        var _page = location.hash.substring(2, location.hash.length);
        /*if (App._Stack.size() === 0) {
         window.location.href = window.location.href;
         window.BACK_HOME++;
         if (window.BACK_HOME === 1) {
         App.showConfirm('退出提示：', '是否退出？', null, function () {
         window.history.back();
         });
         }
         return;
         }*/
        /* if (App.hasBackPage() && App.hasBackPage() !== 'false'){
         App.back(App.getBackPage());
         } else{
         App.back(_page.indexOf('undefined') > -1 ? 'home' : _page);
         }*/
        var $back = $('.app-back');
        if ($back.size() > 0) {
          $back.click();
        } else {
          if (App._Stack.size() === 0) {
            _page = 'home';
            App._Stack.destroy();
          }
          App.back(_page.indexOf('undefined') > -1 ? 'home' : _page);
        }
      }
    } catch (e) {
      App._Stack.destroy();
      App.load('home');
    }
  }
  App.enableDragTransition();
  try {
    if (location.hash.length > 0) {
      App.restore({ maxAge: 5 * 60 * 1000 });
    } else {
      App._Stack.destroy();
      App.load('home');
    }
  } catch (err) {
    App._Stack.destroy();
    App.load('home');

  }
});