var list = [];
var minDate;
var curYear;
var curMonth;
var curDay;

$(function() {
    curMonth = date.getMonth();
    curYear = date.getFullYear();
    curDay = date.getDate();
    $('#calendar').calendar({
        swipeable: true,
        ready: function(e, date, dateStr) {
            setTimeout(function() {
                list = $list.dateandweek
                $('.ui-calendar-calendar td').addClass('dateDisabled');
                for (var i = 0; i < list.length; i++) {
                    var das = list[i].date.split("-")

                    var $day = $('.ui-calendar-calendar td[data-year="' + das[0] + '"][data-month="' + das[1] + '"][data-date="' + das[2] + '"]');
                    var date2 = new Date(list[i].date);
                    var count = Number(list[i].count);
                    $day.find('a').html(list[i].day);
                    if (count > 0) {
                        if ($day.find('.num').length == 0) {
                            $day.append("<span class='num'>" + list[i].count + "</span>");
                        }
                        if (date2 >= date && $day.hasClass("dateDisabled"))
                            $day.removeClass('dateDisabled');
                        else if (!$day.hasClass("dateDisabled"))
                            $day.addClass('dateDisabled');

                    } else {
                        if (!$day.hasClass("dateDisabled"))
                            $day.addClass('dateDisabled');
                    }
                }
                var selectedDate = $('#calendar').calendar('selectedDate');
                var year = selectedDate.getFullYear();
                var month = Number(selectedDate.getMonth());
                var day = selectedDate.getDate();
                //getLectures(year, Number(month) + 1, Number(day));

            }, 100)
        },
        select: function(e, date, dateStr) { //选中日期时
            setTimeout(function() {
                var date1 = new Date("2017-07-07");
                for (var i = 0; i < list.length; i++) {
                    var $day = $('.ui-calendar-calendar td[data-year="' + list[i].year + '"][data-month="' + (list[i].month - 1) + '"][data-date="' + list[i].day + '"]')
                    var date2 = new Date(list[i].date);

                    var count = Number(list[i].count);
                    $day.find('a').html(list[i].day);

                    if (count > 0) {
                        if ($day.find('.num').length == 0) {
                            $day.append("<span class='num'>" + list[i].count + "</span>");
                        }
                        if (date2 >= date1)
                            $day.removeClass('dateDisabled');
                        else if (!$day.hasClass("dateDisabled"))
                            $day.addClass('dateDisabled');

                    } else {
                        if (!$day.hasClass("dateDisabled"))
                            $day.addClass('dateDisabled');
                    }

                }
                $('.dateDisabled').each(function() {
                    $(this).click(function() {
                        if ($(this).find(".num").length == 0) { return false; }

                    });
                });
                var dateArr = dateStr.split("-");
                //getLectures(dateArr[0], Number(dateArr[1]), Number(dateArr[2]));

            }, 1)
        },
        monthchange: function(e, date, dateStr) // 月份改变时
            {
                setTimeout(function() {

                    var month = Number(date);
                    var year = Number(dateStr);
                    getCantChooseDate(year, month, 1);
                    var firstDay;
                    for (var i = 0; i < list.length; i++) {
                        var $day = $('.ui-calendar-calendar td[data-year="' + list[i].year + '"][data-month="' + (list[i].month - 1) + '"][data-date="' + list[i].day + '"]');
                        /***/
                        var count = Number(list[i].count);
                        if (count > 0 && !firstDay)
                            firstDay = Number(list[i].day);

                    }

                    $('.dateDisabled').on("tap", function() {
                        $(this).click(function() {
                            if ($(this).find(".num").length == 0) { return false; }

                        });
                    });

                    if (year == curYear && curMonth == month) {
                        //getLectures(dateStr, Number(date) + 1, curDay);
                    } else if (firstDay > 0) {
                        //getLectures(dateStr, Number(date) + 1, firstDay);
                    } else {
                        //getLectures(dateStr, Number(date) + 1, 1);
                    }

                }, 1000)
            }

    });
    //不让日期选中
    $('.ui-calendar-calendar td').removeClass("ui-state-active");
    getCantChooseDate(curYear, curMonth, 0);
});
x = 1;
//type 0页面加载时1是月份改变时
function getCantChooseDate(year, month, type) {
    var ym = year + "-" + ("0" + (month + 1)).slice(-2);
    $list = getBookTime(ym)
    list = formData()
    $('#calendar').calendar('minDate', ym + "-" + curDay)
    $('#calendar').calendar('maxDate', '2017-07-31')
    $('#calendar').calendar('refresh');
    $('#calendar').calendar('selectedDate', ym + "-" + curDay);


    //出现loading
    //$('.pbody').addClass('page_loading');
    /*if (type == 0)
    {
    	$('#calendar').calendar('refresh');
    	minDate=new Date(ym+"-"+curDay)
    }else{
    	if (ym == defaultYearMonth)
    	{
    		minDate=new Date(defaultYearMonth+"-"+curDay)
    	}
    	else
    	{
    		minDate=new Date(ym+"-"+curDay)
    		defaultYearMonth = ym;
    	}
    }*/
    if (list) {
        for (var i = 0; i < list.length; i++) {
            var d1 = new Date(list[i].date);
            var $day = $('.ui-calendar-calendar td[data-year="' + d1.getFullYear() + '"][data-month="' + d1.getMonth() + '"][data-date="' + d1.getDate() + '"]');
            if (d1 >= minDate && $day.hasClass("dateDisabled"))
                $day.removeClass('dateDisabled');
            else if (!$day.hasClass("dateDisabled"))
                $day.addClass('dateDisabled');
            var count = 0;
            for (var j = 0; j < list[i].updowntimes.length; j++) {
                var item = list[i].updowntimes[j]
                count += parseInt(item.count);
            }
            if (count > 0) {
                $day.append("<span class='num'>" + count + "</span>");
            }
        }
    }
}