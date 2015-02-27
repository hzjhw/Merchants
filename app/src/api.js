/**
 * @description api
 * @class api
 * @author yongjin<zjut_wyj@163.com> 2015/2/3
 */
App.query = function (query, options) {
  try {
    var cacheId = options.data ? (query + options.data.pageSize + options.data.pageNumber) : query;
    if (options.cache && App.getCache(cacheId)) {
      options.success && options.success.call(this, App.getCache(cacheId));
    } else {
      return $.ajax({
        type: 'post',
        url: CONST.API + query,
        data: options.data,
        success: function (result) {
          if (options.cache) App.addCache(cacheId, result);
          options.success && options.success.call(this, result);
        }
      });
    }
  } catch (e) {
  }
}
