/**
 * @description Login
 * @class Login
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('IceIndexCtrl', ['App', 'template/ice_index'], function (require, exports, module) {
  var IceIndexCtrl, App, template;

  App = require('App');
  template = require('template/ice_index');

  IceIndexCtrl = function (page, ctx) {
    debug('【Module】: Call Ice8');
    $(page).html(template);
    /*头部 开始*/
    App.initLoad(page, { transition: 'fade', page: 'other_iceindex', appShow: function (page) {
      var phoneNum = localStorage[App.CELL_PHONE];
      App.removeLoading(); // 移除载入动画
      App.initTopScroll(page); // 顶部自动隐藏
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
      App.resetLazyLoad(page);
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
        var cntVal = '请先登录';
        App.showConfirm('未登录', cntVal, $dom, function () {
          App.setBackPage('home');
          App.load('login_dealers');
        });
      }
    })
    /*头部 结尾*/

    $(page).find('.detailed li').click(function(){
      var ids = $(this).attr('data-id');
      App.load(ids,ctx);
    });
    $(page).find('.btn-back').click(function () {
      App.back();
    });
  };

  module.exports = IceIndexCtrl;
});