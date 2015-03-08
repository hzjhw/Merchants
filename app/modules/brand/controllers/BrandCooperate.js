/**
 * @description BrandCooperate
 * @class BrandCooperate
 * @author yongjin<zjut_wyj@163.com> 2015/3/6
 */
define('BrandCooperate', ['App', 'HandlebarsHelper', 'template/brand_cooperate'], function (require, exports, module) {
  var BrandCooperate, App, HandlebarsHelper, template;

  App = require('App');
  HandlebarsHelper = require('HandlebarsHelper');
  template = require('template/brand_cooperate');

  BrandCooperate = function (page, facid) {
    App.query('/cmp/cooperate',{
      cache:true,
      success:function(data){
        if(data.msg == 'success') {
          var tpl = HandlebarsHelper.compile(template);
          $(page).html(tpl(data));

          $(page).find('#confirm').click(function(){
            var nameVal  = $(page).find('#name').val();
            var address  = $(page).find('#address').val();
            var isoem    = $(page).find('#isoem').val();
            var year_sum = $(page).find('#year_sum').val();
            var vouchers = $(page).find('#vouchers').val();
            var vouchMsg = $(page).find('#vouchMsg').val();
            var cust_id  = $(page).find('#cust_id').val();

            if($.trim(nameVal) == '')
            {
              var cntVal = '<span style="font-size: 20px"> 真实姓名不能为空!</span>';
              App.showMsg('姓名为空', cntVal);
              return;
            }
            if($.trim(vouchMsg) == '')
            {
              var cntVal = '<span style="font-size: 20px"> 留言内容不能为空!</span>';
              App.showMsg('内容为空', cntVal);
              return;
            }
            App.query('/cmp/fixCoop',{
              data:{
                'member.contact_name': nameVal,
                'member.cust_id': cust_id,
                'member.isoem': isoem,
                'member.year_sum': year_sum,
                'member.address': address,
                'vchid': vouchers,
                'content': vouchMsg,
                'fact_id': facid
              },
              success:function(result){
                var cntVal = '<span style="font-size: 20px">成功发送合作信息,敬请关注厂家回复!</span>';
                if(result.msg == 'success'){
                  App.showMsg('合作成功', cntVal);
                }else if(result.msg =='nofact'){
                  cntVal = '<span style="font-size: 20px"> 未知厂家信息</span>';
                  App.showMsg('未知厂家', cntVal);
                }else if (result.msg == 'erUpdate'){
                  cntVal = '<span style="font-size: 20px"> 由于网络等因素,造成合作失败!请重新合作</span>';
                  App.showMsg('合作失败', cntVal);
                }else if (result.msg == 'erSave'){
                  cntVal = '<span style="font-size: 20px"> 由于网络等因素,造成无法合作!请重新合作</span>';
                  App.showMsg('合作错误', cntVal);
                }else if (result.msg == 'erMember'){
                  cntVal = '<span style="font-size: 20px"> 由于网络等因素,你的信息无法存储!</span>';
                  App.showMsg('资料无法存储', cntVal);
                }else{
                  cntVal = '<span style="font-size: 20px"> 由于网络等因素,信息无法提交!</span>';
                  App.showMsg('信息无法识别', cntVal);
                }
                App.back();
              }
            })
          })

          $(page).find('.btn-back').click(function () {
            //App.load('brand_detail',{id:facid});
            App.back();
          });

        }else if (data.msg == 'nofact'){
          console.error('【意向合作】没有厂家id值');
        }else if (data.msg == 'nologin'){
          var cntVal = '<span style="font-size: 20px"> 对不起,您还未登录!现在就登录吗?</span>';
          App.showConfirm('未登录', cntVal, null, function () {
            App.load('login_dealers');
          });
        }
      }
    })

  };

  module.exports = BrandCooperate;
});