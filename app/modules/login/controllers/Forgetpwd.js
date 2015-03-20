/**
 * @description Forgetpwd
 * @class Forgetpwd
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('Forgetpwd', ['App', 'template/forgetpwd'], function (require, exports, module) {
  var Forgetpwd, App, template;

  App = require('App');
  template = require('template/forgetpwd');



  Forgetpwd = function (page,ctx) {
    debug('【Module】: Call forget passwd');
    $(page).html(template);
    $(page).find('.btn-back').click(function () {
      App.back();
    });
    var checkNum ='' ;
    $(page).find('#forgetpwd').click(function(){
      var phoneNum = $("#phoneNum",$(page)).val();
      var checkval = $("#checkval",$(page)).val();
      var pwd = $("#pwd",$(page)).val();
      var checkpwd = $("#checkpwd",$(page)).val();
      var cntVal ='';
      if("" === phoneNum.trim()){
        cntVal = '<span style="font-size: 20px">手机号不能为空!</span>';
        App.showMsg('手机号为空',cntVal);
        return;
      }else if(!(/^1[3|4|5|8][0-9]\d{8}$/.test(phoneNum))){
        cntVal = '<span style="font-size: 20px">手机号格式不正确!</span>';
        App.showMsg('格式错误',cntVal);
        return;
      }

      if('' === checkval.trim()){
        cntVal = '<span style="font-size: 20px">验证码不能为空!</span>';
        App.showMsg('验证码为空',cntVal);
        return;
      }else if(checkNum !== checkval){
        cntVal = '<span style="font-size: 20px">验证码不正确!</span>';
        App.showMsg('验证码错误',cntVal);
        return;
      }

      if("" === pwd.trim()){
        cntVal = '<span style="font-size: 20px">密码不能为空!</span>';
        App.showMsg('密码为空',cntVal);
        return;
      }

      if(pwd !== checkpwd){
        cntVal = '<span style="font-size: 20px">密码和确认密码不一致!</span>';
        App.showMsg('密码不一致',cntVal);
        return;
      }

      App.query('/forgetPwd',{
        data:{phone:phoneNum,newpwd:pwd},
        success:function(data){
          if(data.msg === 'success'){
            cntVal = '<span style="font-size: 20px">密码修改成功!</span>';
            App.showMsg('修改密码',cntVal);
          }else if(data.msg === 'error'){
            cntVal = '<span style="font-size: 20px">由于网络等因素,无法修改密码!</span>';
            App.showMsg('无法修改',cntVal);
          }else if (data.msg === ''){
            cntVal = '<span style="font-size: 20px">手机号错误,无法修改!</span>';
            App.showMsg('手机号错误',cntVal);
          }
        }
      })

    });

    var wait = 10;
    var bindClick = function(){
      var _this = this;
      var phoneNum = $(_this).prevAll('#phoneNum').val();
      if(!(/^1[3|4|5|8][0-9]\d{8}$/.test(phoneNum)) ) {
        var cntVals = '<span style="font-size: 20px">请先正确填写手机号!</span>';
        App.showMsg('号码错误',cntVals);
        return;
      }
        $(_this).unbind('click',bindClick);
        App.query('/sendMsg',{
          data:{phone:phoneNum},
          success:function(data){
            if(data.msg === 'success')
            {
              console.log('你的验证码是:'+data.randNum);
              checkNum = data.randNum;
            }else if(data.msg === 'error'){
              var cntVals = '<span style="font-size: 20px">该区域短信无法接收,请重发!</span>';
              App.showMsg('短信错误',cntVals);
            }else if(data.msg === 'errPhone'){
              var cntVals = '<span style="font-size: 20px">请核对手机号!</span>';
              App.showMsg('手机号错误',cntVals);
            }
          }
        });
        var intvl = setInterval(function(){
          wait--;
          if(wait > 0)
          {
            $(_this).html(wait +"秒后重发");
          }
          else
          {
            clearInterval(intvl);
            $(_this).bind('click',bindClick);
            $(_this).html('获取验证码');
            wait = 10;
          }
        },1000);

    };
    $(page).find('#checkCodes').bind('click',bindClick);
  };

  module.exports = Forgetpwd;
});