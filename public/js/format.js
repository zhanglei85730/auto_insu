var Exam = (function() {
	//没有id名exam及data-param属性退出
	if(!$('#exam')&& !$('#exam').attr('data-param')){
		throw new Error('未获取到exam对像或data-param参数不存在');
		return;
	};
        //当前试题序号
        var index = 0,
            //只保存当前答案信息
            getCurrAnswerInfo = {},
            //保存选择的答案
            selectAnswer = [],
            //保存正确答案
            correctAnswer = [],
            //保存绑定的事件的试题序号，解决重复绑定问题
            nextBindEventCount = [],
            //保存首次选择答案，也就是练习模式下未经过提示选择的答案，例如用来计算练习模式下的正确率
            firstSelectAnswer = [],
            opt = function() {
                return JSON.parse($('#exam').attr('data-param'))
            };
			//没有questionsCount及examType值退出
			if(!opt().questionsCount || !opt().examType){
				throw new Error('questionsCount参数或examType不存在');
				return;
			}else{
				//练习模式选择的答案selectAnswer不设置length,做一题目数组长度加1,计算正确率时正确答案/所做答案，
				//模拟考试模式选择的答案selectAnswer数组长度为试题个数，
				if(opt().examType=='mock'){
					selectAnswer.length = parseInt(opt().questionsCount);
				}
			};
        	correctAnswer.length = parseInt(opt().questionsCount);
        //共有方法
        return {
            getIndex: function() {
                return index;
            },
            setIndex: function(x) {
                index = x;
            },
            getCurrAnswerInfo: getCurrAnswerInfo,
            selectAnswer: selectAnswer,
            correctAnswer:correctAnswer,
			//设置正确答案,从后台传入
			setCorrectAnswer:function(arr){
				if($.isArray(arr) && arr.length >= this.selectAnswer.length ){
					this.correctAnswer =arr;
					return this.correctAnswer
				}else{
					if(window.console)console.error('参数错误，该参数为数组类型');
				};
			},
            //考试参数设置
            option: function() {
                return opt();
            },
            //下一题按钮
            nextBtn: function() {
                return $('#zxamTool .Js_next_question')
            },
            //上一题按钮
            prevBtn: function() {
                return $('#zxamTool .Js_prev_question')
            },
            //下一题目
            nextQuestion: function(add) {
                //必须选择答案才能下一步
                if (this.nextBtn().hasClass('disable_btn')) return;
                //有答案保存
                this.getCurrAnswerInfo.selectAnswer ? this.selectAnswer[add] = this.getCurrAnswerInfo.selectAnswer : '';
                var questionsCount = parseInt(parseInt(this.option().questionsCount))
                    //最后一题目
                if (this.option.examType == 'mock') {
                    if ($('#zxamTool .Js_next_question').hasClass('disable_btn')) {
                        return;
                    };
                };
                var allQuesionCount = parseInt(this.option().questionsCount) //总题目数量
                if (add <= allQuesionCount) {
                    this.outQuestionSelectBtn(add)
                    if (this.option().examType == 'mock') {
                        //下一题目显示，当前index为0，index为1显示
                        $('#exam .ks_xz_box').eq(add + 1).show().siblings('.ks_xz_box').hide();
                        this.getCurrAnswerInfo.selectAnswer = '';
                        index++
                        //答题卡当前序号设置为选中状态
                        this.setCurrrentAnswerBlank(this.getIndex());

                        //启用上一步按钮
                        if (add >= 0) {
                            $('#zxamTool .Js_prev_question').removeClass('disable_btn');
                        };
                    } else if (this.option().examType == 'practice') {
                        //答案正确跳转下一步
                        //练习模式正确跳转下一题目
                        if (this.isCompareAnswer(index)) {
                            if (firstSelectAnswer[index] == undefined) firstSelectAnswer[index] = this.getCurrAnswerInfo.isJudge;
                            $('#exam .ks_xz_box').eq(add + 1).show().siblings('.ks_xz_box').hide();
                            index++;
                            //答题卡当前序号设置为选中状态
                            this.setCurrrentAnswerBlank(this.getIndex());
                            //取消已绑定的单选及多选Input事件，已作答不让修改答案
                            this.cancelEvent(this.getIndex())
                                //启用上一步按钮
                            if (add >= 0) {
                                $('#zxamTool .Js_prev_question').removeClass('disable_btn');
                            };
                            //错误显示答案
                        } else {
                            if (firstSelectAnswer[index] == undefined) firstSelectAnswer[index] = this.getCurrAnswerInfo.isJudge;
                            $('#answerCell .card-table-cell').eq(this.getIndex()).addClass('error')
                            this.rightAnswerShow(add);
                        };
                    }
                };
                //设置答题区域颜色
                this.answerBtn(add);
                //最后一题目禁止下一步按钮;
                if (add >= questionsCount - 1) {
                    $('#zxamTool .Js_next_question').addClass('disable_btn');
                };
            },
            //点击选项
            outQuestionSelectBtn: function(index) {
                var strHtml = '';
                var answerLetter = ['a', 'b', 'c', 'd', 'e'];

                var answersCount = this.param(index).answersCount;
                for (var i = 0; i < answersCount; i++) {
                    strHtml += "<li class='ks_da_li'" + "value='" + i + "' " + ">" + answerLetter[i] + "</li>";
                }
                $('#exam .ks_xz_box').eq(index).find('.j_xz_ul').html(strHtml);
            },
            //上一题目
            prevQuestion: function(add) {
                if (this.prevBtn().hasClass('disable_btn')) return;
                var questionsCount = parseInt(parseInt(this.option().questionsCount)) //总题目数量
                if (add - 1 >= 0) {
                    $('#exam .ks_xz_box').eq(add - 1).show().siblings('.ks_xz_box').hide();
                    this.setIndex(this.getIndex() - 1);
					this.setCurrrentAnswerBlank(this.getIndex());
                };
                this.getCurrAnswerInfo.selectAnswer = '';
                //启用下一步按钮;
                if (add <= questionsCount) {
                    $('#zxamTool .Js_next_question').removeClass('disable_btn')
                };
                if (index == 0) {
                    $('#zxamTool .Js_prev_question').addClass('disable_btn');
                }
            },
            //
            //获取设置参数
            param: function(index) {
                return JSON.parse($('#exam .ks_xz_box').eq(index).attr('data-param'));
            },
            //打印输出答题卡
            printQuestionsCell: function(id) {
                var amount = this.option().questionsCount ? this.option().questionsCount : 100,
                    str = '';
                for (var i = 1; i <= amount; i++) {
                    str += '<li class="card-table-cell"><p class="card-a">' + i + '</p></li>';
                };
                $('#' + id).html(str);
            },
            //禁止按钮
            disablePrevBtn: function() {
                if (index == 0) {
                    $('#zxamTool .Js_prev_question').addClass('disable_btn');
                }
            },
            //判断答案是否正确
            isSelectAnswer: function(index) {
                //如果已经绑定了事件退出，否则绑定
                if (nextBindEventCount.indexOf(index) != -1) {
                    return
                } else {
                    nextBindEventCount.unshift(index);
                };
                var index = index < 0 ? 0 : index;
                var that = this;
                var $thisQuestion = $('#exam .J-ks-list').eq(index);
                //单选题目
                if (that.param(index).type == 'radio') {
                    $thisQuestion.find('input').on('click', function(i) {
                        var result = parseInt($(this).val().toUpperCase());
                        that.saveCurrentAnswerInfo(result, index)
                        $(this).addClass('input_checked').parent().siblings().find('input').removeClass('input_checked');
                        $(this).attr('checked', 'checked')
                            //设置表格颜色
                        that.setAnswerArea(index);
                        //问题上显示答案
                        $thisQuestion.find('.j_xz_da').text(that.getCurrAnswerInfo.selectAnswer)
                        $('#answerCell .card-table-cell').eq(index).addClass('done')
                        $thisQuestion.find('.j_xz_ul .ks_da_li').eq(result).addClass('active').siblings('.ks_da_li').removeClass('active');
                    });
                };
                //多选题目
                if (that.param(index).type == 'checkbox') {
                    $thisQuestion.find('input').each(function(i) {
                        $(this).on('click', function() {
                            var checkboxValue = [];
                            $(this).toggleClass("input_checked");
                            if ($(this).hasClass('input_checked')) {
                                $(this).attr('checked', 'checked')
                            } else {
                                $(this).removeAttr('checked')
                            };
                            $thisQuestion.find('.j_xz_ul .ks_da_li').eq(i).toggleClass('active');
                            //循环获取选择答案
                            if ($thisQuestion.find('input:checked').length == 0) {
                                checkboxValue = '';
                            } else {
                                checkboxValue = [];
                                $thisQuestion.find('input:checked').each(function(i) {
                                    checkboxValue.push($(this).val());
                                });
                            }
                            //设置答题卡颜色
                            if (checkboxValue.length > 0) that.setAnswerArea(index);
                            that.saveCurrentAnswerInfo(checkboxValue, index);
                            $thisQuestion.find('.j_xz_da').text(that.getCurrAnswerInfo.selectAnswer)

                        });
                    })
                };

            },
            //
            //保存当前题目选择状态如：已选答案、正确答案、答案是否正确
            saveCurrentAnswerInfo: function(value, index) {
                var that = this;
                var value = value;
                var selectAnswer = {};
                if ($.isArray(value)) {
                    //数组转换为大写
                    //var tempArr = []
                    for (var i = 0; i < value.length; i++) {
                        switch (parseInt(value[i])) {
                            case 0:
                                value[i] = 'A';
                                break;
                            case 1:
                                value[i] = 'B';
                                break;
                            case 2:
                                value[i] = 'C';
                                break;
                            case 3:
                                value[i] = 'D';
                                break;
                            case 4:
                                value[i] = 'E';
                                break;
                            default:
                                selectAnswer.result = ''
                        };
                    }
                    selectAnswer.result = value
                } else {
                    switch (value) {
                        case 0:
                            selectAnswer.result = 'A';
                            break;
                        case 1:
                            selectAnswer.result = 'B';
                            break;
                        case 2:
                            selectAnswer.result = 'C';
                            break;
                        case 3:
                            selectAnswer.result = 'D';
                            break;
                        case 4:
                            selectAnswer.result = 'E';
                            break;
                        default:
                            selectAnswer.result = ''
                    };
                };
                //正确返回ture,否则返回正确答案
                //保存所选答案；
                that.getCurrAnswerInfo.selectAnswer = selectAnswer.result;
                that.selectAnswer[index] = that.getCurrAnswerInfo.selectAnswer;
                //保存题目正确答案
                //单选题目
                if (that.param(index).type == 'radio') {
                    that.getCurrAnswerInfo.isJudge = that.param(index).answer == selectAnswer.result ? true : false;
                    that.correctAnswer[index] = that.param(index).answer.toUpperCase();
                    //多选题目
                } else if (that.param(index).type == 'checkbox') {
                    that.correctAnswer[index] = that.param(index).answer;
                    //对比当前题目选择答案及正确答案
                    if (that.getCurrAnswerInfo.selectAnswer.length == that.param(index).answer.length) {
                        for (var n = 0; n < that.getCurrAnswerInfo.selectAnswer.length; n++) {
                            if (that.getCurrAnswerInfo.selectAnswer[n] == that.param(index).answer[n]) {
                                //答案正确
                            } else {
                                that.getCurrAnswerInfo.isJudge = false;
                                break;
                            };
                            that.getCurrAnswerInfo.isJudge = true;
                        }
                    } else {
                        that.getCurrAnswerInfo.isJudge = false;
                    }
                    this.isCurrent = that.getCurrAnswerInfo.isJudge;
                };
            },
            //设置答题颜色
            setAnswerArea: function(index) {
                $('#answerCell .card-table-cell').eq(index).addClass('done');
            },
            //回答按钮事件
            answerBtn: function(index) {
                var selectAnswer = {};
                var tempIndex = index ? index : 0;
                var that = this;
                var $select = $('#exam .J-ks-list').eq(tempIndex);
                $select.find('.j_xz_ul .ks_da_li').each(function(i) {
                    $(this).on('click', function() {
                        var tempIndex = $(this).index();
                        //设置答题颜色
                        that.setAnswerArea(index);
                        //单选按钮
                        if (that.param(index).type == 'radio') {
                            $(this).addClass('active').siblings('.ks_da_li').removeClass('active');
                            $select.find('input').eq(tempIndex).attr('checked', 'true').addClass('input_checked').parent().siblings().find('input').removeAttr("checked").removeClass('input_checked');
                            //保存选择答案信息
                            var result = parseInt($(this).attr('value'));
                            that.saveCurrentAnswerInfo(result, index);
                            //多选按钮
                        } else if (that.param(index).type == 'checkbox') {
                            $(this).toggleClass('active')
                            $select.find('input').eq(tempIndex).attr('checked', 'true').toggleClass('input_checked');
                            var checkboxsValue = [];
                            //获取多选按题目已选答案，每点击一次获取一次
                            $select.find('.j_xz_ul .ks_da_li').each(function(i) {
                                if ($(this).hasClass('active')) {
                                    checkboxsValue.push($(this).val())
                                };
                            });
                            that.saveCurrentAnswerInfo(checkboxsValue, index);
                        }
                        //问题中下划线显示选择答案
                        $select.find('.j_xz_da').text(that.getCurrAnswerInfo.selectAnswer)

                    });
                    //
                });
            },
            ////模拟考试交卷后错误可以点击错误题目
            answersBlank: function(statu) {
                //statu如果为markWrong表示交试卷后执行标示错误答案
                //setCurrent接受全局index表示高亮显示当前的试题或当前正在做的试题
                var that = this;
                var markWrong = statu == 'markWrong' ? 'markWrong' : false;
                $('#answerCell li').each(function() {
                    $(this).on('click', function(e) {
                        if ($(this).hasClass('error') || $(this).hasClass('done')) {
                            var $index = $(this).index();
                            $(this).addClass('active').siblings().removeClass('active')
                            var $tempobj = $('#exam .J-ks-list').eq($index);
                            $tempobj.show().siblings().hide();
                            //设置全局index
                            that.setIndex($index)
                                //交卷后标示错误答案
                            if (markWrong) {
                                $tempobj.addClass('ks_cw_box');
                                $tempobj.find('.ks_da_box .j_xz_da').text(that.selectAnswer[$index]);
                                //点击答题区域错误答案，只输出一次正确答案
                                if (!$tempobj.hasClass('data-out-answer')) {

                                    if (that.isCompareAnswer(index)) {
                                        //回答正确提示
                                        var insertHtml = '<p class="dp_ib ml-70 color_lv sx_da_yes">回答正确</p>';
                                    } else {
                                        //回答错误提示
                                        if (that.selectAnswer[$index] != undefined) {
                                            var insertHtml = '<p class="dp_ib ml-70 ks_cw">回答错误</p><p class="dp_ib ml-70 color_lv">正确答案为：' + that.correctAnswer[$index] + '</p>';
                                        } else {
                                            var insertHtml = '<p class="dp_ib ml-70 ks_cw">回答错误</p><p class="dp_ib ml-70 color_lv">' + '未选择答案' + '</p>';
                                        }
                                    }
                                    /*if (that.selectAnswer[$index] != undefined) {
                                    	var insertHtml = '<p class="dp_ib ml-70 ks_cw">回答错误</p><p class="dp_ib ml-70 color_lv">正确答案为：' + that.correctAnswer[$index] + '</p>';
                                    } else {
                                    	var insertHtml = '<p class="dp_ib ml-70 ks_cw">回答错误</p><p class="dp_ib ml-70 color_lv">' + '未选择答案' + '</p>';
                                    }*/
                                    $tempobj.find('.ks_da_box .ks_your_answer').after(insertHtml)
                                    $tempobj.addClass('data-out-answer');
                                };
                            }
                        };
                    });
                });
            },
            //设置当前答题卡序号为高亮显示
            setCurrrentAnswerBlank: function(index) {
                $('#answerCell .card-table-cell').eq(index).addClass('active').siblings().removeClass('active')
            },
            //取消已作答题目绑定的单选及多选事件，不让修改答案
            cancelEvent: function(index) {
                $('#exam .J-ks-list').eq(index - 1).find('input').each(function() {
                    $(this).off();
                })

            },
            //顺序练习如果答案错误显示正确答案
            rightAnswerShow: function(index) {
                var $tempobj = $('#exam .J-ks-list').eq(index);
                if (!$tempobj.hasClass('data-out-answer')) {
                    var insertHtml = '<p class="dp_ib ml-70 ks_cw">回答错误</p><p class="dp_ib ml-70 color_lv">正确答案为：' + this.correctAnswer[index] + "<san class='wrong_tip'>（请纠正你的答案方可进入下一题）</span>" + '</p>';
                    // var insertHtml = '<p class="dp_ib ml-70 ks_cw">回答错误</p><p class="dp_ib ml-70 color_lv">' + '请纠正你的答案方可进入下一题' + '</p>';
                    $tempobj.find('.ks_da_box .ks_your_answer').after(insertHtml)
                    $tempobj.addClass('data-out-answer');
                }
            },
            //交卷
            handIn: function() {
                //得出分数
                for (var i = 0; i < this.selectAnswer.length; i++) {
                    if (this.selectAnswer[i] == undefined) {
                        var confirmResult = confirm('您还未完成全部试题，确定要提交吗？');
                        break;
                    } else {
                        confirmResult = true;
                    }
                };
                if (confirmResult) {
                    this.answersBlank();
					this.countDown().clearTime();
                    return true
                } else {
                    return false
                }
            },
            //radio为单选题目分数，checkbox为多选题目分类
            getScore: function(radio, checkbox) {
                //有raio、checkbox值，返回最后得分
                //无参数raio、checkbox值,返回正确率
                var radioArr = [];
                var checkboxArr = [];
                var isCheckboxAnswer = false;
                if (this.selectAnswer.length == 0) return;
                    //对比答案
                for (var i = 0; i < this.selectAnswer.length; i++) {
                    if ($.isArray(this.selectAnswer[i])) {
                        //多选题目
                        for (var x = 0; x < this.selectAnswer[i].length; x++) {
                            if (this.correctAnswer[i].length == this.selectAnswer[i].length && this.correctAnswer[i][x] == this.selectAnswer[i][x]) {
                                isCheckboxAnswer = true;
                            } else {
                                isCheckboxAnswer = false;
                                break;
                            };
                        };
                        if (isCheckboxAnswer) {
                            checkboxArr.push(this.selectAnswer[i]);
                        } else {
                            $('#answerCell .card-table-cell').eq(i).removeClass('active').addClass('error')
                        };
                    } else {
                        //单选题目
                        if (this.selectAnswer[i] != undefined && this.correctAnswer[i] == this.selectAnswer[i]) {
                            radioArr.push(this.selectAnswer[i]);
                        } else {
                            $('#answerCell .card-table-cell').eq(i).removeClass('active').addClass('error')
                        };
                    };
                };
                if (radio && checkbox) {
                        //全部考试得分
                    return checkboxArr.length * checkbox + radioArr.length * radio
                } else {
                    //正确率
					 var rihgtAnswers = 0,allAnswers=0;
					 //练习模式下包含选择答案没有点击下一步按钮的题目
					if(this.getCurrAnswerInfo.selectAnswer){
						allAnswers++;
						if(this.getCurrAnswerInfo.isJudge){
							rihgtAnswers++;
						}
					};
                    for (var i = 0; i < firstSelectAnswer.length; i++) {
                        if (firstSelectAnswer[i]) rihgtAnswers++;
						allAnswers++
                    }
					//保留两位小数
					var result =rihgtAnswers / allAnswers*100+'';
					var position = result.indexOf('.')
					if(position!=-1){
						return result.slice(0,position+3)+'%'
					}
                    return rihgtAnswers / allAnswers * 100 + '%';
                };
            },
            //比较答案是否正确,可以对全部答案就行对比
            isCompareAnswer: function(index) {
				if(this.selectAnswer[index]==undefined)return false;
                if ($.isArray(this.correctAnswer[index])) {
                    for (var x = 0; x < this.correctAnswer[index].length; x++) {
                        if (this.correctAnswer[index].length == this.selectAnswer[index].length) {
                            if (this.correctAnswer[index][x] != this.selectAnswer[index][x]) {
                                return false;
                            };
                        } else {
                            return false;
                        };
                    };
                    return true;
                } else {
                    if (this.correctAnswer[index] == this.selectAnswer[index]) {
                        return true
                    }
                }
            },
            //倒计时
            countDown: function() {
				return{
					setEndTime:function(minutes){
						 var i = 0
						var examDate = new Date();
						var currentTime = examDate.getTime();
						var endTime = currentTime + 60 * 1000 * minutes;
						window.ExamTimer = setInterval(function() {
							var hours = parseInt((endTime - (new Date().getTime())) / 1000 / 60 / 60);
							if (hours < 10) hours = '0' + hours;
							var minute = parseInt((endTime - (new Date().getTime())) / 1000 / 60 % 60);
							if (minute < 10) minute = '0' + minute;
							var seconds = parseInt((endTime - (new Date().getTime())) / 1000 % 60)
							if (seconds < 10) seconds = '0' + seconds;
							$('#countDown').html(hours + ":" + minute + ":" + seconds);
							if (hours<=0 && minute <= 0 && seconds <= 0) {
								clearInterval(window.ExamTimer)
							}
						}, 500);
				
					},
				 clearTime:function(){
					 clearInterval(window.ExamTimer);
				 },
				};
            },

            //考试初始化
            init: function(index) {
                $('input').removeAttr('checked')
                    //练习模式取消交卷事件并隐藏
                if (this.option().examType == 'practice') {
                    $("#zxamTool .Js_hand_in").off();
                    $("#zxamTool .Js_hand_in").text('结束练习');
                };
                this.printQuestionsCell('answerCell')
                this.isSelectAnswer(index);
                this.disablePrevBtn();
                this.outQuestionSelectBtn(index);
                this.answerBtn(index);
                //模拟考试倒计时
                if (this.option().examType == 'mock') {
                    //2个半小时，传入分钟
                    this.countDown().setEndTime(150);
                } else if (this.option().examType == 'practice') {
                    $('#zxamTool .ks_time').eq(0).hide();
                };
                this.setCurrrentAnswerBlank(this.getIndex());
            },
        };
    })()
    //调用执行
$(function() {
    var Exam = window.Exam;
	try{
    	Exam.init(0)
	}catch(e){
		return;
	}
    $("#zxamTool .Js_next_question").bind('click', function() {
        var index = Exam.getIndex();
        Exam.answersBlank();
        if (Exam.nextBtn().hasClass('disable_btn')) return;
        //最后一题目
        if (Exam.getIndex() >= Exam.option().questionsCount) {
            $(this).addClass('disable_btn');
            return;
        }
        if (Exam.option().examType == 'practice') {
            if (!Exam.selectAnswer[index]) {
                $('#exam .J-ks-list').eq(index).find('.j_xz_da').text('请选择答案')
            } else {
                Exam.nextQuestion(index)
                var index2 = Exam.getIndex();
                if (Exam.getCurrAnswerInfo.isJudge) {
                    //index小于题目数
                    if (index2 < Exam.option().questionsCount) {
                        Exam.isSelectAnswer(index2);
                        Exam.outQuestionSelectBtn(index2);
                        Exam.getCurrAnswerInfo.isJudge = '';
                        Exam.getCurrAnswerInfo.selectAnswer = '';
                    }
                } else {
                    if (index != 0) {}
                }
            };
            Exam.answerBtn(index)
        } else if (Exam.option().examType == 'mock') {
            if (!Exam.selectAnswer[index]) {
                $('#exam .J-ks-list').eq(index).find('.j_xz_da').text('请选择答案')
                if (index != 0) {
                    Exam.isSelectAnswer(index - 1)
                };
            } else {
                Exam.nextQuestion(index)
                    //获取全局的index值
                var index = Exam.getIndex();
                //点击下一步按钮输出下一题目选择答案，排除末尾一题目
                if (index + 1 < Exam.option().questionsCount) {
                    Exam.outQuestionSelectBtn(index + 1);
                }
				if(index < Exam.option().questionsCount){
				Exam.isSelectAnswer(index);
                //绑定最后一题目选择按钮事件               
                Exam.answerBtn(index);
				}
            }
        };
    });
    $("#zxamTool .Js_prev_question").bind('click', function() {
        var index = Exam.getIndex();
        Exam.prevQuestion(index);
    });
    $("#zxamTool .Js_hand_in").on('click', function() {
        if (Exam.option().examType == 'mock' && Exam.handIn()) {
            //传入分数
			//Exam.setCorrectAnswer([['A'],['A'],['A'],['A'],['A'],[['A']],['A'],[['A']]])
            popBoxScore(Exam.getScore(1, 2));
            //显示错误答案
            Exam.answersBlank('markWrong');
            $(this).addClass('ks_handed_in').text('已交卷')
                //交卷后禁用上一步、下一步按钮
            $('.Js_prev_question,.Js_next_question').off();
            $('.Js_prev_question,.Js_next_question').addClass('disable_btn');
            $(this).off('click')
        } else if (Exam.option().examType == 'practice') {
            //计算正确率
            Exam.getScore();
            popEndPriatice(Exam.getScore(), function() {
                //练习模式曳继续考试
                //
            });
        };
    });
    //交卷弹出框
    function popBoxScore(scores) {
        layer.open({
            type: 1,
            shadeClose: true, //开启遮罩关闭
            area: ['400px', '300px'], //宽高
            title: false,
            content: "<div class='zxwt_box' style='width:400px;height:300px'><h2 class='zxwt_h2'>模拟考试<span class='zxwt_h2_span layui-layer-close'><b>×</b>关闭</span></h2><div class='exam_getScroes'>" + '您本次考试的最后得分为：' + scores +"分"+ "</div><a class='layui-layer-close zxwt_close'>关闭</a><a class='layui-layer-close zxwt_close' id='practiceAgain'>重新考试</a></div>"
        });
        $('#practiceAgain').on('click', function() {
            window.location.reload()
        })
    };
    //结束考试弹出框
    function popEndPriatice(value, fn) {
        layer.open({
            type: 1,
            shadeClose: true, //开启遮罩关闭
            area: ['400px', '300px'], //宽高
            title: false,
            content: "<div class='zxwt_box' style='width:400px;height:300px'><h2 class='zxwt_h2'>顺序练习<span class='zxwt_h2_span layui-layer-close'><b>×</b>关闭</span></h2><div class='exam_getScroes'>" + '您本次练习的正确率为：' + value + "</div><a class='layui-layer-close zxwt_close'>关闭</a><a class='layui-layer-close zxwt_close' id='continuePractice'>继续练习</a></div>"
        });
        $('#continuePractice').on('click', function() {
            fn();
        })
    };
    /*在线咨询页面弹框END*/
});