/**
 * Created by Administrator on 2015/2/9.
 */
define('IncludeMessage', ['App', 'template/include_message', 'HandlebarsHelper'], function (require, exports, module) {
  var IncludeMessage, App, template, HandlebarsHelper;

  App = require('App');
  template = require('template/include_message');
  HandlebarsHelper = require('HandlebarsHelper');

  IncludeMessage = function (page, render, data) {
    var islogin = false;
    var tpl = HandlebarsHelper.compile(template);

    $(page).find(render).html(tpl(data));
    LOGIN_TYPE = data.loginType;
    //TODO validate is login before submit
    App.query('/cmp/custInfo', {
        success: function (result) {
          if (result.msg == 'success') {
            $("#custname", $(page)).val(result.custInfo.contact_name);
            $("#cellphone", $(page)).val(result.custInfo.contact_cellphone);
            islogin = true;
          }
      }
    });
    $(page).find('#custname,#cellphone,#levMsg').click(function(){
      if(!islogin)
      {
        var cntVal = '<span style="font-size: 20px"> 需要登录账号,才能留言.现在登录吗？</span>';
        window.showConfirm('未登录',cntVal,null,'login_dealers');
      }
    });
    $(page).find('.message .button').click(function () {
      if(!islogin)
      {
        var cntVal = '<span style="font-size: 20px"> 需要登录账号,才能留言.现在登录吗？</span>';
        window.showConfirm('未登录',cntVal,null,'login_dealers');
        return;
      }
      //TODO submit
      var custName = $("#custname", $(page)).val();
      var levMsg = $("#levMsg", $(page)).val();
      if($.trim(custName) == '')
      {
        alert("留言前需填写您的姓名！");
        $("#custname", $(page)).focus();
        return ;
      }
      if($.trim(levMsg) === '')
      {
        alert('留言信息不能为空!');
        $("#levMsg", $(page)).focus();
        return ;
      }
        App.query('/cmp/custMsg', {
          data: {
            'custName':custName,
            'custmsg.fact_id': data.id,
            'custmsg.content': $("#levMsg", $(page)).val(),
            'custmsg.cust_phone': $("#cellphone", $(page)).val()
          },
          success: function (result) {
            if (result.msg == 'success') {
              alert("留言成功");
              $("#levMsg", $(page)).val("");
            }
            else if (result.msg == 'same')
            {
              alert("您已有过类似留言了!");
              $("#levMsg", $(page)).val("");
            }
            else if (result.msg == 'error')
            {
              alert("由于网络等因素,留言失败。请重新留言!");
            }

          }
        })
    });

  }
  module.exports = IncludeMessage;

})