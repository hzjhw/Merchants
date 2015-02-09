/**
 * Created by Administrator on 2015/2/9.
 */
define('BrandMessage', ['App', 'template/brand_message', 'HandlebarsHelper'], function (require, exports, module) {
  var BrandMessage, App, template, HandlebarsHelper;

  App = require('App');
  template = require('template/brand_message');
  HandlebarsHelper = require('HandlebarsHelper');

  BrandMessage = function (page, render, data) {
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

    $(page).find('.message .button').click(function () {
      //TODO submit
      var custName = $("#custname", $(page)).val();
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
        App.query('/cmp/custMsg', {
          data: {
            'custName':custName,
            'custMsg.fact_id': data.id,
            'custMsg.content': $("#levMsg", $(page)).val(),
            'custMsg.cust_phone': $("#cellphone", $(page)).val()
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
  module.exports = BrandMessage;

})