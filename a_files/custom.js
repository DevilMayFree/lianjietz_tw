
var _fileUploadIsSend = false;
var _fileUploadIsSend2 = true;
//載入頁面統一要做的事
$(function ()
{

})

$(window).resize(function () {
    
});

//變更預設分頁筆數
function InputGo(page) {
    $('div.pager').find('input[type=text]').each(function () {
		$(this).val(page);
	});
}
//送出變更分頁筆數
function ChangeDefaultPage() {
	SendSubmit();
}
//轉至url
function GoUrl(url) {
	location.href = url;
}

//cehck url replace &符號
function CheckUrl(url) {
    url = url.replace(/&amp;/g, '&');
    if (url.indexOf('?') > -1) {
        url += "&";
    }
    else {
        url += "?";
    }
    return url;
}
//送出第一個form or 指定
function SendSubmit(index) {
    index = index || 0;
    $("form")[index].submit();
}

//回上一頁
function back() {
    if (1 < history.length) {
        history.back();
        return false;
    }
    return true;
}

//對urlParameter編碼
function EncodeParameter(value) {
	return encodeURIComponent(value);
}
//縮圖
function DrawImage(ImgD, FitWidth, FitHeight) {
	var image = new Image();
	image.src = ImgD.src;
	if (image.width > 0 && image.height > 0) {
		if (image.width / image.height >= FitWidth / FitHeight) {
			if (image.width > FitWidth) {
				ImgD.width = FitWidth;
				ImgD.height = (image.height * FitWidth) / image.width;
			} else {
				ImgD.width = image.width;
				ImgD.height = image.height;
			}
		} else {
			if (image.height > FitHeight) {
				ImgD.height = FitHeight;
				ImgD.width = (image.width * FitHeight) / image.height;
			} else {
				ImgD.width = image.width;
				ImgD.height = image.height;
			}
		}
	}

}
//檢查上下線日期
function CheckDateUpDown(date1, date2)
{
    if ($.datepicker.parseDate("yy/mm/dd", date1) >
                $.datepicker.parseDate("yy/mm/dd", date2)) {
        alert("日期範圍輸入錯誤！！");
        return false;
    }
}

//移除id
function Remove(id) {
	$("#" + id).remove();
}
//關閉 BlockUI
function CloseBlockUI() {
	$.unblockUI();
}
//取得網址#後的部分
function UrlReplace(url) {
	return url.replace(/^.*#/, '');
}

//給FileUpload 用的送出
function StartSendSubmitByFileUpload(sec) {
    sec = sec || 1000;
    var _canSend = true;
    $(".uploadii").each(function () {
        if ($(this).val() != "1") {
            _canSend = false;
            return false;
        }
    });
    //$("div.ajax-file-upload-container").each(function () {
    //    if ($(this).find('div.ajax-file-upload-statusbar').length > 0) {
    //        _canSend = false;
    //        return false;
    //    }
    //});
    if (_canSend) {
        SendSubmit();//基本上會有2個form 所以要送第1個
        //if (!_fileUploadIsSend) {
        //    _fileUploadIsSend = true;
        //    SendSubmit();//基本上會有2個form 所以要送第1個
        //}
    }
    else {
        setInterval("StartSendSubmitByFileUpload()", sec);
    }
}

//檢查cookie是否開啟
function CheckCookie() {
	$.cookie('checkCookie', 'test', { path: '/' });
	if ($.cookie('checkCookie') == null) {
		alert('已關閉瀏覽器Cookie功能，部分網站功能無法正常使用!!');
	}
	else {
		$.cookie('checkCookie', null);
	}
}

//取得int
function GetInt(value) {
    return parseInt(value) || 0;
}

//取得float
function GetFloat(value) {
    return parseFloat(value) || 0;
}

//計算小數
function GetFormatFloat(num, pos) {
    var size = Math.pow(10, pos);
    return Math.round(num * size) / size;
}

//show提示對話框
//msg 要提示的訊息
//msgType 1=success ,2=notice ,3=warning ,4=error 
function showMsg(msg, msgType) {
	switch (msgType) {
		case 1:
			msgType="success"
			break;
		case 2:
			msgType = "notice"
			break;
		case 3:
			msgType = "warning"
			break;
		case 4:
			msgType = "error"
			break;
		default:
			msgType = "notice"
			break;

	}
	$().toastmessage('showToast', {
		text: msg,
		stayTime: 3000,
		sticky: false,
		position: 'middle-center',//訊息位置：1.top-left  2.top-center 3.top-right 4.middle-left 5.middle-center 6.middle-right
		type: msgType, //success ,notice ,warning ,error 
		closeText: '',
		close: function () {

		}
	});
}
