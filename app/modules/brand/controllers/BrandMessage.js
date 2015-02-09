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
        console.log(result);
        if(result =='success')
        {
          $("#custname", $(page)).val(result.contact_name);
          $("#cellphone", $(page)).val(result.cell_phone);
          islogin =true;
        }
      }
    });

    $(page).find('.message .button').click(function () {
      //TODO submit
      if(!islogin)
      {
        App.query('/cmp/custMsg',{
          data: {
            'custMsg.fact_id': data.id,
            'custMsg.content':  $("#levMsg", $(page)).val(),
            'custMsg.cust_phone':$("#cellphone", $(page)).val()
          },
          success: function(result){
            alert(result);
            if(result == 'success')
            {

            }
          }
        })
      }
    });

  }

  module.exports = BrandMessage;

})