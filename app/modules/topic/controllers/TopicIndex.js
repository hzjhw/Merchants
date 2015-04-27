/**
 * @description Login
 * @class Login
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
define('TopicIndex', ['App', 'template/topic_index'], function (require, exports, module) {
  var TopicIndex, App, template;

  App = require('App');
  template = require('template/topic_index');

  TopicIndex = function (page, ctx) {
    debug('【Module】: Call topic_index');
    $(page).html(template);
  };

  module.exports = TopicIndex;
});