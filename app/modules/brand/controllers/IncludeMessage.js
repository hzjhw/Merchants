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
    $(page).find('#cellphone').click(function(){
      if($(this).val() == '')
      {
        if(window.confirm('需要登录账号,才能留言.现在登录吗？'))
        App.load("login_dealers");
      }
    });
    $(page).find('.message .button').click(function () {
      //TODO submit
      var custName = $("#custname", $(page)).val();
      var levMsg = $("#levMsg", $(page)).val();
      if (!islogin) {
        if(window.confirm("您还未登录，立即登录吗？"))
        {
          App.load('login_dealers');
        }
        return;
      }
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
          }
        })
    });

  }
  module.exports = IncludeMessage;

})