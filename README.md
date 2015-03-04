上门网331手机app
====

### 服务端API文档 - 数据接口
- http://192.168.1.99:1111/330jfinal

### app.js API文档  - app.js框架
- http://code.kik.com/app/2/docs.html#ui-content

### UI navigation and transition utility  - 转场效果文档
- https://github.com/kikinteractive/swapper

### seajs API文档 - 模块加载
- http://seajs.org/docs/#docs

### artDialog API文档 - 对话框
- http://aui.github.io/artDialog/doc/index.html

### handlebars API文档 - 模板引擎
- http://handlebarsjs.com/

### Zepto API文档 - DOM选择器
- http://zeptojs.com/

### git API文档 - 项目管理
- http://git-scm.com/book/zh/v1
- 抓取并合并 ：git fetch origin master:jhw -> git merge jhw
- 提交 ：git add . -> git commit -m "wyj" -> git push origin
- 更新之前必须先stash自己的内容， 为了减少git逻辑错误
- 若抓取合并失败， 先stash自己的内容[命令git stash]， 然后执行[git merge jhw], 然后再unstash自己的[命令git stash pop]
- 清空stash[git stash clear]


### 架构目录
- const.js [常量配置]
- config.js [配置模块路径、模板与路由与全局变量]
- config.local.js [本地配置文件， 此文件未加入到版本管理中]
- images [存放图片， 样式中background:url()中的url图片地址存放到styles/img文件夹中， 且为相对地址]
- lib文件夹 [APP核心组件]
- scripts [包含所有帮助类与基础脚本， 如：handlebars模板引擎帮助类]
- styles [所有样式文件]
- vendor [所有第三方插件]

### 常见案件
1) 对话框
seajs.use(['dialog'], function (dialog) {
                    window.dialog = dialog({
                        id: '330dialog',
                        title: '我的330',
                        align: 'bottom right',
                        width: WINDOW_WIDTH - 280,
                        content: $('.container-my', $(page)).html()
                    }).showModal($dom);
                })
                
2) 数据渲染
var $container = $('#merchants-show', $(page));
                var template = $container.html();
                $container.empty();
                App.render({ render: '#merchants-show', page: page, template: template, data: {
                    title: '品牌展示馆',
                    list: result.brandList.list
                }});
                
3) tag标签切换
var $sub = $(page).find('.cate-item-sub');
            $(page).find('.cate-item').each(function (index) {
                $(this).click(function () {
                    $(this).addClass('current').siblings('.cate-item').removeClass('current');
                    $sub.eq(index).addClass('cate-cur').siblings().removeClass('cate-cur');
                });
            });
            
4) 添加加载动画
$(page).find('.cate-ul li').click(function () {
    App.addLoading(); // 移除为App.removeLoading();
});

5) 初始化页面载入
App.controller('brand_detail', function (page) {
    App.initLoad(page, { transition: 'fade', page: 'brand_detail', 
        appReady: function(page){}, // 页面载入完毕事件
        appShow: function(page){} // 页面显示事件
    }, ctx);
    .....
});

6) 设置返回点
App.setBackPage('brand_list'); // 获取 App.getBackPage()

7) 

### 响应速度方面
1) 按钮点击响应速度
    在需要点击的按钮上添加app-btn选择符  如：<input type="button" class="app-button app-btn" value="确定"/>
    
2) 页面切换速度
    在模块文件中添加setTimeout(function(){}, 0);
    BrandList = function (page, id, title, banner, area) {
        setTimeout(function () {
            ....
        }, 0);
    });
    
### 样式方面
1) 所有的文字统一最小24px

### 注册事项
1) 控制好App._Stack深度， 返回按钮尽量调用App.back('home'); 
   标记返回点App.setBackPage('brand_list');尽早缩减Stack长度
2) 多添加debug语句， 容易及早发现问题
3) 请求数据最好加上cache: true缓存
4) 所有返回按钮需加app-back 选择符
