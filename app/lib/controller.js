/**
 * @description main
 * @class main
 * @author yongjin<zjut_wyj@163.com> 2015/3/2
 */
var COLOUR_KEY = '__BASIC_APP_COLOUR___';
var WINDOW_WIDTH = null;
var LOGIN_TYPE = 'home';
var LOGIN_CHANGE =false;
var CELL_PHONE = "cell_phone";

seajs.use(['App'], function (App) {
  function scroll(scrollTo, time) {
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

  window.showConfirm = function (titleVal, cntVal, curEle, modelVal) {
    seajs.use(['dialog'], function (dialog) {
      window.dialog = dialog({
        title: titleVal,
        content: cntVal,
        width: WINDOW_WIDTH - 280,
        button: [
          {
            value: '确定',
            callback: function () {
              App.load(modelVal);
            },
            autofocus: true
          },
          {
            value: '取消'
          }
        ]
      }).showModal(curEle);
    })
  }
  function show330(page, callback) {
    seajs.use(['dialog'], function (dialog) {
      window.dialog && window.dialog.close().remove();
      window.dialog = dialog({
        id: '330dialog',
        title: '我的330',
        align: 'bottom right',
        width: WINDOW_WIDTH - 280,
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

  /*首页*/
  App.controller('home', function (page) {
    $('#Loading').remove();
    App.removeLoading();
    App.initLoad(page, { transition: 'fade', page: 'home'}, this);
    var phoneNum = localStorage[CELL_PHONE];
    LOGIN_TYPE = 'home';
    if (phoneNum !== '') {
      $(page).find(".app-top-login").html("<div class='btn-login'>手机号:" + phoneNum + "</div><div class='app-button app-btn btn-out'>退出</div> ")
    }
    else {
      $(page).find(".app-top-login").html(' <div class="app-button btn-register"  style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0);">注册</div>' +
        '<div class="app-button btn-login" style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0);">登录</div>');
    }
    $(page).on('appReady', function () {
      $(page).find('.btn-register').on('click', function () {
        App.load('register_dealers');
      });
      $(page).find('.btn-login').on('click', function () {
        App.load('login_dealers');
      });
      $(page).find('.btn-out').on('click', function () {
        App.query("/loginout", {
          success: function (result) {
            if (result.msg == 'success') {
              localStorage[CELL_PHONE] = '';
              LOGIN_CHANGE=true;
              App.load(LOGIN_TYPE);
            }
          }
        })
      });
    });
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
          show330(page);
          window.myDialog = true;
        }
      }, 0);
      var $dom = $(this).find('.span-my').get(0);
      App.query('/userinfo', {
        success: function (data) {
          if (data.msg == 'nologin') {
            var cntVal = '<span style="font-size: 20px"> 对不起,您还未登录!现在就登录吗?</span>';
            showConfirm('未登录', cntVal, $dom, 'login_dealers');
            /*if (window.confirm('对不起,您还未登录!现在就登录吗?')) {
             App.load('login_dealers');
             }*/
          }
          else {
            show330(page, function (dialog) {
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
    setTimeout(function () {
      seajs.use(['HomeBrand'], function (HomeBrand) {
        new HomeBrand(page);
      });
      setTimeout(function () {
        var $appContent = $('.app-content');
        var $appLogo = $('#app-index-logo');
        var $search = $('.app-search');
        var isHide = false;
        $('.app-content').get(0) &&
        $('.app-content').get(0).addEventListener("scroll", function (event) {
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
      }, 500);
    }, 0);
    // 布局相关
    WINDOW_WIDTH = $(window).width();
    $(page).find('.app-logo-container').height(WINDOW_WIDTH * 0.2);
    $(window).resize(function () {
      $(page).find('.app-logo-container').height(WINDOW_WIDTH * 0.2);
    });
  });

  /*品牌列表*/
  App.controller('brand_list', function (page) {
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
      new BrandList(page, ctx.args.id, ctx.args.title, ctx.args.banner, ctx.args.area);
    });
  });
  /*品牌详细*/
  App.controller('brand_detail', function (page) {
    var ctx = this;
    LOGIN_TYPE = 'brand_detail';
    App.initLoad(page, { transition: 'slide-left', page: 'brand_detail'}, ctx);
    if (!ctx.args.id) ctx.args.id = localStorage['brand_detail_args_id'];
    localStorage['brand_detail_args_id'] = ctx.args.id;
    seajs.use(['BrandDetail'], function (BrandDetail) {
      new BrandDetail(page, ctx.args.id, ctx);
    })
  });
  /*厂家信息*/
  App.controller('brand_info', function (page) {
    var ctx = this;
    LOGIN_TYPE = 'brand_info';
    App.initLoad(page, { transition: 'slide-left', page: 'brand_info'}, ctx);
    if (!ctx.args.id) ctx.args.id = localStorage['brand_info_args_id'];
    localStorage['brand_info_args_id'] = ctx.args.id;
    seajs.use(['BrandInfo'], function (BrandInfo) {
      new BrandInfo(page, ctx.args.id, ctx);
    });
  });
  /*厂家产品*/
  App.controller('brand_product', function (page) {
    var ctx = this;
    LOGIN_TYPE = 'brand_product';
    App.initLoad(page, { transition: 'slide-left', page: 'brand_product'}, ctx);
    if (!ctx.args.id) ctx.args.id = localStorage['brand_product_args_id'];
    localStorage['brand_product_args_id'] = ctx.args.id;
    seajs.use(['BrandProduct'], function (BrandProduct) {
      new BrandProduct(page, ctx.args.id, ctx);
    });
  });
  /*厂家实力*/
  App.controller('brand_tec', function (page) {
    var ctx = this;
    LOGIN_TYPE = 'brand_tec';
    App.initLoad(page, { transition: 'slide-left', page: 'brand_tec'}, ctx);
    if (!ctx.args.id) ctx.args.id = localStorage['brand_tec_args_id'];
    localStorage['brand_tec_args_id'] = ctx.args.id;
    seajs.use(['BrandTec'], function (BrandTec) {
      new BrandTec(page, ctx.args.id, ctx);
    });
  });
  /*空白区域*/
  App.controller('brand_blank', function (page) {
    var ctx = this;
    LOGIN_TYPE = 'brand_blank';
    App.initLoad(page, { transition: 'slide-left', page: 'brand_blank'}, ctx);
    if (!ctx.args.id) ctx.args.id = localStorage['brand_blank_args_id'];
    localStorage['brand_blank_args_id'] = ctx.args.id;
    seajs.use(['BrandBlank'], function (BrandBlank) {
      new BrandBlank(page, ctx.args.id, ctx);
    });
  });
  /*特色门馆*/
  App.controller('brand_unique', function (page) {
    var ctx = this;
    App.initLoad(page, { transition: 'fade', page: 'brand_unique'}, ctx);
    seajs.use(['BrandUnique'], function (BrandUnique) {
      new BrandUnique(page, ctx);
    });
  });
  App.controller('category', function (page) {
    App.initLoad(page, { transition: 'slideon-down', page: 'category'}, this);
    seajs.use(['CategoryCtrl'], function (CategoryCtrl) {
      new CategoryCtrl(page, this);
    });
  });

  /*搜藏的产品*/
  App.controller('favorite_product', function (page) {
    App.initLoad(page, { transition: 'slide-left', page: 'favorite_product'}, this);
    seajs.use(['FavPro'], function (FavPro) {
      new FavPro(page);
    });
  });
  /*搜藏的品牌*/
  App.controller('favorite_brand', function (page) {
    App.initLoad(page, { transition: 'slide-left', page: 'favorite_brand'}, this);
    seajs.use(['FavBrand'], function (FavBrand) {
      new FavBrand(page);
    });
  });
  /*我的抵金券*/
  App.controller('favorite_money', function (page) {
    App.initLoad(page, { transition: 'slide-left', page: 'favorite_money'}, this);
    seajs.use(['FavMoney'], function (FavMoney) {
      new FavMoney(page);
    });
  });
  /*我的意向合作*/
  App.controller('favorite_cooprate', function (page) {
    App.initLoad(page, { transition: 'slide-left', page: 'favorite_cooprate'}, this);
    seajs.use(['FavCooprate'], function (FavCooprate) {
      new FavCooprate(page);
    });
  });
  /*我的留言*/
  App.controller('favorite_message', function (page) {
    App.initLoad(page, { transition: 'slide-left', page: 'favorite_message'}, this);
    seajs.use(['FavMessage'], function (FavMessage) {
      new FavMessage(page);
    });
  });

  /*登录页面*/
  App.controller('login_dealers', function (page) {
    var ctx = this;
    App.initLoad(page, { transition: 'slide-left', page: 'login_dealers'}, ctx);
    seajs.use(['Login'], function (Login) {
      new Login(page, ctx);
    });
  });
  /*经销商*/
  App.controller('favorite_info', function (page) {
    App.initLoad(page, { transition: 'slide-left', page: 'favorite_info'}, this);
    seajs.use(['FavInfo'], function (FavInfo) {
      new FavInfo(page);
    });
  });
  /*产品列表*/
  App.controller('product_list', function (page) {
    var ctx = this;
    App.initLoad(page, { transition: 'fade', page: 'product_list'}, ctx);
    if (!ctx.args.id) ctx.args.id = localStorage['product_list_args_id'];
    localStorage['product_list_args_id'] = ctx.args.id;
    seajs.use(['ProductList'], function (ProductList) {
      new ProductList(page, ctx.args.id, ctx.args.price, ctx);
    });
  });

  /*产品详细*/
  App.controller('product_detail', function (page) {
    var ctx = this;
    App.initLoad(page, { transition: 'fade', page: 'product_detail'}, ctx);
    if (!ctx.args.id) ctx.args.id = localStorage['product_detail_args_id'];
    if (!ctx.args.id) ctx.args.proid = localStorage['product_detail_args_proid'];
    localStorage['product_detail_args_id'] = ctx.args.id;
    localStorage['product_detail_args_proid'] = ctx.args.proid;
    seajs.use(['ProductDetail'], function (ProductDetail) {
      new ProductDetail(page, ctx.args.id, ctx.args.proid, ctx);
    });
  });
  App.controller('product_search', function (page) {
    var ctx = this;
    App.initLoad(page, { transition: 'fade', page: 'product_search'}, ctx);
    seajs.use(['ProductSearch'], function (ProductSearch) {
      new ProductSearch(page, ctx);
    });
  });
  /*注册页面*/
  App.controller('register_dealers', function (page) {
    var ctx = this;
    App.initLoad(page, { transition: 'slide-left', page: 'register_dealers'}, ctx);
    seajs.use(['Register'], function (Register) {
      new Register(page, ctx);
    });
  });
  /*搜索页面*/
  App.controller('search', function (page) {
    var ctx = this;
    App.initLoad(page, { transition: 'fade', page: 'search'}, ctx);
    seajs.use(['SearchIndex'], function (SearchIndex) {
      new SearchIndex(page, ctx);
    });
  });


  window.onhashchange = function () {
    if (App.getCurrentHash() && (App.getCurrentHash() === location.hash)) return;
    if (location.hash.length > 0) {
      var _page = location.hash.substring(2, location.hash.length);
      App.back(_page.indexOf('undefined') > -1 ? 'home' : _page);
    }
  }
  App.enableDragTransition();
  try {
    if (location.hash.length > 0) {
      App.restore()
    } else {
      App.load('home');
    }
  } catch (err) {
    App.load('home');
  }
});