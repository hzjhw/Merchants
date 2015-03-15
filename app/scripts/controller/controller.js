/**
 * @description main
 * @class main
 * @author yongjin<zjut_wyj@163.com> 2015/3/2
 */

App.CELL_PHONE = "cell_phone";
App.CNT_NAME = "cntName";
App.isLogin = function () {
  var phoneNum = localStorage[App.CELL_PHONE];
  if (phoneNum)
    return phoneNum.indexOf('1') == 0;
  return false;
};
App.showMsg = function (titleVal, cntVal) {
  seajs.use(['dialog'], function (dialog) {
    window.msgDialog = dialog({
      id: 'showMsg',
      title: titleVal,
      content: cntVal,
      width: $(window).width() - 280,
      button: [
        {value: '确定'}
      ]
    }).showModal();
  })
};
App.showConfirm = function (titleVal, cntVal, curEle, callback) {
  seajs.use(['dialog'], function (dialog) {
    window.confirmDialog = dialog({
      id: 'comfirmDialog',
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
};
App.show330 = function (page, callback) {
  seajs.use(['dialog'], function (dialog) {
    try {
      window.myDialog && window.myDialog.close && window.myDialog.close().remove();
    } catch (e) {
      debug('【Error】myDialog not find!');
    }
    window.myDialog = dialog({
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
    callback && callback.call(this, window.myDialog);
  });
};
App.initTopScroll = function (page) {
  setTimeout(function () {
    var $appLogo = $('#app-index-logo', $(page));
    var $search = $('.app-search', $(page));
    App.autoHide(page, {
      show: function (scrollTop) {
        $search.css({marginTop: 0});
        $appLogo.removeClass('index-logo-hide');
      },
      hide: function (scrollTop) {
        $search.css({marginTop: 7});
        $appLogo.addClass('index-logo-hide');
      }
    });
  }, 100);
};
App.initBrandAutoHide = function (page) {
  setTimeout(function () {
    var $topbar = $('.app-topbar', $(page));
    var $bottom = $('.app-bottombar');
    App.autoHide(page, {
      show: function (scrollTop) {
        $topbar.removeClass('brand-top-auto-hide');
        $bottom.removeClass('brand-bottom-auto-show');

      },
      hide: function (scrollTop) {
        $topbar.addClass('brand-top-auto-hide');
        $bottom.addClass('brand-bottom-auto-show');
      }
    });
  }, 100)
};

App.initBrandListBottom = function (renderObj, data) {
  renderObj.find('.login-li').off().remove();
  if (data.isLogin) {
    renderObj.append('<li class="app-btn login-li"><span class="icon-bg icon-bottombar-login"></span>' +
      '<span class="bottombar-text">退出</span>' +
      '</li>');
  } else {
    renderObj.append('<li data-url="login_dealers" class="app-btn login-li"><span class="icon-bg icon-bottombar-login"></span>' +
      '<span class="bottombar-text">登录</span>' +
      '</li>');
  }
  // 底部导航
  $(renderObj).find('li').off().on('click', function () {
    var urlVal = $(this).attr('data-url');
    if (urlVal) {
      App.setBackPage('brand_list');
      App.load(urlVal);
    }
    else {
      App.query('/loginout', {
        success: function (result) {
          if (result.msg == 'success') {
            localStorage[App.CELL_PHONE] = '';
            localStorage[App.CNT_NAME] = '';
            App.load('home');
          }
        }
      })
    }
  });
};
App.addStatus("useStatus", [
  {
    text: "待审核",
    value: "03",
    html: '<span class="h">等待厂家审核</span>'
  },
  {
    text: "未通过",
    value: "02",
    html: '<span class="h">审核未通过</span>'
  },
  {
    text: "已通过",
    value: "01",
    html: '<span class="l">已审核通过</span>'
  }
]);
App.addStatus("resultStatus", [
  {
    text: "待审核",
    value: "03",
    html: "<span>厂家未审核</span>"
  },
  {
    text: "未通过",
    value: "02",
    html: "<span>审核未通过</span>"
  },
  {
    text: "已通过",
    value: "01",
    html: '<span class="yes">厂家审核通过</span>'
  }
]);
seajs.use(['App'], function (App) {
  // 加载动画
  var $Loading = $('#Loading');
  App.Loading = $Loading.clone();
  $Loading.remove();
  // 浮动工具栏
  var $tool = $('#tool');
  App.$tool = $tool.clone();
  $tool.remove();
  // 初始化手机号码
  App.query('/phone', {
    async: false,
    success: function (data) {
      localStorage[App.CELL_PHONE] = data.phoneNum;
      localStorage[App.CNT_NAME] = data.cntName;
    }
  });



  /*首页*/
  App.controller('home', function (page) {
    debug('【Controller】pageLoad: home');
    // App.cleanStack();// 清除stack
    App._Stack.destroy();
    App.initLoad(page, { transition: 'fade', page: 'home', appShow: function (page) {
      var phoneNum = localStorage[App.CELL_PHONE];

      App.removeLoading(); // 移除载入动画
      App.initTopScroll(page); // 顶部自动隐藏
      //App.cleanStack(); // 清除stack
      if(! App._CustomStack)  App._CustomStack={};
      App._CustomStack.length = 0;

      $('body').find('#tool .tool-back').remove();

      if (App.isLogin()) {
        $(page).find(".app-top-login").html("<div class='sj'>手机号:" + phoneNum + "</div><div class='app-btn btn-out' style='float:right;margin-right:30px;color:#fff;'>退出</div> ");
      } else {
        $(page).find(".app-top-login").html(' <div class="app-button btn-register"  style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0);">注册</div>' +
          '<div class="app-button btn-login" style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0);">登录</div>');
      }
      // appReady里注册事件必需先注销事件
      $(page).find('.btn-register').off().on('click', function () {
        App.load('register_dealers');
      });
      $(page).find('.btn-login').off().on('click', function () {
        App.setBackPage('home');
        App.load('login_dealers');
      });
      $(page).find('.btn-out').off().on('click', function () {
        App.query("/loginout", {
          success: function (result) {
            if (result.msg == 'success') {
              App.disableLazyLoad();
              localStorage[App.CELL_PHONE] = '';
              localStorage[App.CNT_NAME] = '';
              App.load('home');
            }
          }
        })
      });
      //TODO 重新lazyload
      App.resetLazyLoad('#merchants-show', page);
    }}, this);
    try {
      $(page).find('[data-target="inputs"]')
        .attr('data-target', null)
        .stickyClick(function (unlock) {
          App.pick('inputs', function (params) {
            debug(JSON.stringify(params));
            unlock();
          });
        });
    } catch (e) {
    }
    // 我的330
    setTimeout(function () {
      if (!window.myDialog) {
        App.show330(page);
      }
    }, 0);
    $(page).find('.btn-my').click(function (e) {
      e.preventDefault();
      var $dom = $(this).find('.span-my').get(0);
      if (App.isLogin()) {
        App.show330(page, function (dialog) {
          dialog.showModal($dom)
        })
      }
      else {
        var cntVal = '<span style="font-size: 20px"> 对不起,您还未登录!现在就登录吗?</span>';
        App.showConfirm('未登录', cntVal, $dom, function () {
          App.setBackPage('home');
          App.load('login_dealers');
        });
      }
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
      debug('【Module】call HomeBrand');
      App.HomeBrand = new HomeBrand(page);
    });
  });
  /*忘记密码*/
  App.controller('forget_pwd',function(page){
    debug('【Controller】pageLoad: forget_pwd');
    seajs.use(['Forgetpwd'],function(Forgetpwd){
      App.Forgetpwd = new Forgetpwd(page);
    });
  });
  /*意向合作*/
  App.controller('brand_cooperate', function (page) {
    debug('【Controller】pageLoad: brand_cooperate');
    App.initLoad(page, { transition: 'slide-left', page: 'brand_cooperate'}, this);
    seajs.use(['BrandCooperate'], function (BrandCooperate) {
      App.BrandCooperate = new BrandCooperate(page, localStorage['brand_fact_id']);
    });
  });
  /*品牌列表*/
  App.controller('brand_list', function (page) {
    debug('【Controller】pageLoad: brand_list');
    var ctx = this;
    App.initLoad(page, { transition: 'slide-left', page: 'brand_list', appShow: function (page) {
      App.initBrandListBottom($(page).find('.bottombar-ul'), {
        isLogin: App.isLogin()
      });
    }, appReady: function (page) {
      seajs.use(['IncludeListBottom'], function (IncludeListBottom) {
        new IncludeListBottom(page, '.bottombar-ul', {isLogin: App.isLogin()});
      });
    }}, this);

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
    if (!ctx.args.id) ctx.args.id = localStorage['brand_fact_id'];
    localStorage['brand_fact_id'] = ctx.args.id;
    App.initLoad(page, { transition: 'fade', page: 'brand_detail', appShow: function (page) {
      seajs.use('IncludeMessage', function (IncludeMessage) {
        new IncludeMessage(page, '.message', {
          id: ctx.args.id
        });
      });
    }, appReady: function (page) {
      seajs.use(['IncludeDetailBottom'], function (IncludeDetailBottom) {
        new IncludeDetailBottom(page, '.bottombar-ul', {isLogin: App.isLogin(), facPhone: page.facPhone});
      });

      App.initBrandAutoHide(page);
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
    if (!ctx.args.id) ctx.args.id = localStorage['brand_fact_id'];
    localStorage['brand_fact_id'] = ctx.args.id;
    App.initLoad(page, { transition: 'fade', page: 'brand_info', appShow: function (page) {
      seajs.use('IncludeMessage', function (IncludeMessage) {
        new IncludeMessage(page, '.message', {
          id: ctx.args.id
        });
      });
    }, appReady: function (page) {
      seajs.use(['IncludeDetailBottom'], function (IncludeDetailBottom) {
        new IncludeDetailBottom(page, '.bottombar-ul', {isLogin: App.isLogin(), facPhone: page.facPhone});
      });
      App.initBrandAutoHide(page);
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
    App.initLoad(page, { transition: 'fade', page: 'brand_product', appReady: function (page) {
      seajs.use(['IncludeDetailBottom'], function (IncludeDetailBottom) {
        new IncludeDetailBottom(page, '.bottombar-ul', {isLogin: App.isLogin(), facPhone: page.facPhone});
      });
      App.initBrandAutoHide(page);
    }}, ctx);
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
    if (!ctx.args.id) ctx.args.id = localStorage['brand_fact_id'];
    localStorage['brand_fact_id'] = ctx.args.id;
    App.initLoad(page, { transition: 'fade', page: 'brand_tec', appShow: function (page) {
      seajs.use('IncludeMessage', function (IncludeMessage) {
        new IncludeMessage(page, '.message', {
          id: ctx.args.id
        });
      });
    }, appReady: function (page) {

      seajs.use(['IncludeDetailBottom'], function (IncludeDetailBottom) {
        new IncludeDetailBottom(page, '.bottombar-ul', {isLogin: App.isLogin(), facPhone: page.facPhone});
      });
      App.initBrandAutoHide(page);
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
    if (!ctx.args.id) ctx.args.id = localStorage['brand_fact_id'];
    localStorage['brand_fact_id'] = ctx.args.id;
    App.initLoad(page, { transition: 'fade', page: 'brand_blank', appShow: function (page) {
      seajs.use('IncludeMessage', function (IncludeMessage) {
        new IncludeMessage(page, '.message', {
          id: ctx.args.id
        });
      });
    }, appReady: function (page) {
      seajs.use(['IncludeDetailBottom'], function (IncludeDetailBottom) {
        new IncludeDetailBottom(page, '.bottombar-ul', {isLogin: App.isLogin(), facPhone: page.facPhone});
      });
      App.initBrandAutoHide(page);
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

    if (!ctx.args.id) ctx.args.id = localStorage['brand_fact_id'];
    localStorage['brand_fact_id'] = ctx.args.id;
    if (ctx.args.price || ctx.args.cat) {
      localStorage['brand_fact_id'] = null;
    }
    App.initLoad(page, { transition: 'fade', page: 'product_list', appShow: function (page) {
      if (!(ctx.args.price || ctx.args.cat)) {
        seajs.use('IncludeMessage', function (IncludeMessage) {
          new IncludeMessage(page, '.message', {
            id: ctx.args.id
          });
        })
      }
    }, appReady: function (page) {
      if (!(ctx.args.price || ctx.args.cat)) {
        seajs.use(['IncludeDetailBottom'], function (IncludeDetailBottom) {
          new IncludeDetailBottom(page, '.bottombar-ul', {isLogin: App.isLogin(), facPhone: page.facPhone});
        });
        App.initBrandAutoHide(page);
      }
    }}, ctx);

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
  // 初始化页面载入后事件
  App.initPageReady(App);
});