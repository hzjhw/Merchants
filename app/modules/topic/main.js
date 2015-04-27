/**
 * @description main
 * @class main
 * @author yongjin<zjut_wyj@163.com> 2015/2/8
 */
App.addModule('TopicIndex', 'modules/topic/controllers/TopicIndex.js');
App.addTemplate('template/topic_index', function (require, exports, module) {
  module.exports = require('modules/topic/views/topic_index.html');
});