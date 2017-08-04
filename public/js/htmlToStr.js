    function javascript() {
        var htmlArr = $("#content").val().replace(/\\/g, "\\\\").replace(/\\/g, "\\/").replace(/\'/g, "\\\'").split('\n');
        var len = htmlArr.length;
        var outArr = [];
        outArr.push("\'\\\n");
        jQuery.each(htmlArr, function(index, value) {

            if (value !== "") {
                outArr.push(value + "\\\n");
            }
        });
        outArr.push("\'");
        // $("#result").val(outArr.join(""));
    }

    $("#industryNews").html( < div class = "car_hd_a" > , < h2 > , 业界 < em > 动态 < /em>, < /h2>, < a href = "newsMore?newsType=yjdt"
            class = "more_a" > More + < /a>, < /div>, , , , , , , , , , , , , , , , , , , , , , , < div class = "clearfix car_bd_top" > , < div class = "bd_top_img" > , < img src = "upload/1491028907985.png"
            alt = "业界动态" / > , < /div>, < div class = "bd_top_news" > , < h3 > , < a href = "newsDetail?id=1491028907987"
            title = "" > , 上海大众更名上汽大众 提升上汽影响力, < /a>, < /h3>, < p > , , , 　　e继7月上海通用更名为“ 上汽通用” 之后， 12 月11日， 上海大众正式宣布更名为上汽大众， 上汽集团品牌影响力进一步提升。　　 来自官方的通告表示，“ 自2015年12月7日起， 上海大众汽车有限公司更名为上汽大众汽车有限公司， 简称上汽大众”，“ 更名后， 上汽大众汽车有限公司将承担原公司所有的权利和义务， 公司经营范围和业务关系维持不变。”　　 更名一事， 今年2月就已传出消息， 虽然7月得到了通用的支持， 但随后大众方面却持反对意见， 经过拉锯式的谈判， 大众终于认可了“ 上汽大众”。　　 更名项目由上汽集团董事长陈虹亲自牵头， 旨在提振上汽集团整体品牌形象， 提升上汽自主品牌荣威和MG的影响力。　　 就在12月9日， 上汽集团发布了产销快报。 11 月上汽集团总销量为59 .5 万辆， 前11月累计销量为524 .1 万辆， 同步增长2 .77 % ，位居国内行业第一。 可供对比参考的是， 今年前11月东风集团累计销量340万辆， 行业第二。, , < /p>, < /div>, < /div>, , , , , , < div class = "car_bd_bottom" > , < ul class = "car_list_a" > , , <!---->
            , , < li > , < a href = "newsDetail?id=1491357889141" > , 汽车众筹兴起 风险不容忽视, < /a><span class="list_date_a">04-05</span > < /li>, , , <!---->
            , , < li > , < a href = "newsDetail?id=1491357544789" > , 英国演示能实现“ 互相交流” 的无人驾驶汽车, < /a><span class="list_date_a">04-05</span > < /li>, , , <!---->
            , , < li > , < a href = "newsDetail?id=1491357495261" > , 展望未来蓝图： 无人驾驶汽车预计十年内实现, < /a><span class="list_date_a">04-05</span > < /li>, , , <!---->
            , , < li > , < a href = "newsDetail?id=1491357473376" > , 展望未来蓝图： 无人驾驶汽车预计十年内实现, < /a><span class="list_date_a">04-05</span > < /li>, , , <!---->
            , , < li > , < a href = "newsDetail?id=1491357400515" > , 2020 年新能源汽车动力锂电池报废量将达17万吨, < /a><span class="list_date_a">04-05</span > < /li>, , , <!---->
            , , < li > , < a href = "newsDetail?id=1491357364955" > , 果造车新证据： 挖来汽车之城30年“ 老司机” 担任团队高管, < /a><span class="list_date_a">04-05</span > < /li>, , , <!---->
            , , < li > , < a href = "newsDetail?id=1491357327771" > , 新能源汽车产业应政策市场双驱动, < /a><span class="list_date_a">04-05</span > < /li>, , , <!---->
            , , < li > , < a href = "newsDetail?id=1491046199515" > , 乐视 + FF惊艳亮相CES：“ 坐拥” 全球顶级电动车与生态硬件全部专利, < /a><span class="list_date_a">04-01</span > < /li>, , , <!---->
            , , < li > , < a href = "newsDetail?id=1491043190492" > , 共享汽车进军穗莞 最低1分钟1毛钱, < /a><span class="list_date_a">04-01</span > < /li>, , , < /ul>, < /div>)