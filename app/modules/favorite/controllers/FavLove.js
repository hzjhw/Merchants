/**
 * @description FavoriteCtrl
 * @class FavoriteCtrl
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('FavLove', ['App','template/favLove','HandlebarsHelper'], function (require, exports, module) {
  var FavLove, App, template,HandlebarsHelper;

  App = require('App');
  HandlebarsHelper = require('HandlebarsHelper');
  template = require('template/favLove');

  FavLove = function (page) {
    var tpl = HandlebarsHelper.compile(template);
    App.query('/userinfo/loveList',{
      success:function(data){
        $(page).html(tpl(data));
        $(page).find('li').click(function(){
          /*if($(this).hasClass('selected')){
            $(this).removeClass('selected');
          }else{
            $(this).addClass('selected');
          }*/
          $(this).toggleClass('red');
        });
        $(page).find('.btn-back').click(function () {
          App.back();
        });
      }
    });
  };
  module.exports = FavLove;
});