/**
 * Created by Administrator on 2015/2/9.
 */
define('IncludeMessage', ['App', 'template/include_message', 'HandlebarsHelper'], function (require, exports, module) {
  var IncludeMessage, App, template, HandlebarsHelper;

  App = require('App');
  HandlebarsHelper = require('HandlebarsHelper');

  IncludeMessage = function (page, render, data) {
    setTimeout(function () {
      debug('【Module】: Call IncludeMessage');
      var islogin = false;
      template = require('template/include_message');
      var tpl = HandlebarsHelper.compile(template);

      $(page).find(render).html(tpl(data));
      //TODO validate is login before submit
      App.query('/cmp/custInfo', {
        cache:true,
        success: function (result) {
          if (result.msg == 'success') {
            $("#custname", $(page)).val(result.custInfo.contact_name);
            $("#cellphone", $(page)).val(result.custInfo.contact_cellphone);
            islogin = true;
          }
        }
      });
      $(page).find('#custname,#cellphone,#levMsg').click(function () {
        if (!islogin) {
          var cntVal = '<span style="font-size: 20px"> 需要登录账号,才能留言.现在登录吗？</span>';
          App.showConfirm('未登录', cntVal, null, function(){
            App.load('login_dealers');
          });
        }
      });
      $(page).find('#msgSub').click(function () {
        if (!islogin) {
          var cntVal = '<span style="font-size: 20px"> 需要登录账号,才能留言.现在登录吗？</span>';
          App.showConfirm('未登录', cntVal, null, function(){
            App.load('login_dealers');
          });
          return;
        }
        //TODO submit
        var custName = $("#custname", $(page)).val();
        var levMsg = $("#levMsg", $(page)).val();
        if ($.trim(custName) === '') {
          alert("留言前需填写您的姓名！");
          return;
        }
        if ($.trim(levMsg) === '') {
          alert('留言信息不能为空!');
          return;
        }
        App.query('/cmp/custMsg', {
          data: {
            'custName': custName,
            'custmsg.fact_id': data.id,
            'custmsg.content': $("#levMsg", $(page)).val(),
            'custmsg.cust_phone': $("#cellphone", $(page)).val()
          },
          success: function (result) {
            if (result.msg == 'success') {
              alert("留言成功");
              $("#levMsg", $(page)).val("");
            }
            else if (result.msg == 'same') {
              alert("您已有过类似留言了!");
              $("#levMsg", $(page)).val("");
            }
            else if (result.msg == 'error') {
              alert("由于网络等因素,留言失败。请重新留言!");
            }

          }
        });
      });
    }, 0);
  };
  module.exports = IncludeMessage;
});