$(function() {
    //获取查询参数通用方法
    function getQueryParam(Key) {
        let query = window.location.search.slice(1).split('&'),
            arrResult = [];
        query.forEach((item) => {
            if (item.match(Key + "=(\\w*)") != null) {
                var pageNum = item.match(Key + "=(\\w*)")[1];
                arrResult.push(pageNum);
            };
        });
        return arrResult.length == 0 ? null : arrResult.length > 1 ? arrResult : arrResult[0]

    }
    //为翻页模块当前页增加标示
    let pagesize = getQueryParam('pagesize');
    if (pagesize != null) {
        $('#paginnation .paginnation-num').eq(pagesize - 1).addClass('current');
    } else {
        $('#paginnation .paginnation-num').eq(0).addClass('current');
    }
    //顶部导航菜单根据pathname设置被选中菜单  
    let pathname = window.location.pathname.slice(1);
    let itemNode = 0;
    switch (pathname) {
        case 'news':
            itemNode = 1;
            break;
        case 'newsDetail':
            itemNode = 1;
            break;
        case 'guide':
            itemNode = 2;
            break;
        case 'products':
            itemNode = 3;
            break;
        default:
            itemNode = 0;
    };
    $('#nav li').eq(itemNode).addClass('current').siblings('li').removeClass('current');

})