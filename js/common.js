$(function () {
    $("#feedback_f .imgCode").click(function () {
        var url = $(this).attr("src");
        url += "1";
        $(this).attr("src", url);
    })

    $("#feedback_f .btnSaveFeedback").click(function () {
        var model = {};
        var code = $("#feedback_f .txtCode").val();
        if (code.length != 4) {
            alert("请正确填写验证码");
            $("#feedback_f .imgCode").click();
            $("#feedback_f .txtCode").focus();
            return false;
        }
        model.Title = $("#feedback_f .txtName").val();
        model.Phone = $("#feedback_f .txtPhone").val();
        model.Email = $("#feedback_f .txtEmail").val();
        model.Content = $("#feedback_f .txtContent").val();
        
        if (model.Title.length < 2) {
            alert("请填写姓名");
            $("#feedback_f .txtName").focus();
            return false;
        }
        if (!isPhone(model.Phone)) {
            alert("请正确填写手机号码");
            $("#feedback_f .txtPhone").focus();
            return false;
        }
        if (!isEmail(model.Email)) {
            alert("请正确填写邮箱");
            $("#feedback_f .txtEmail").focus();
            return false;
        }
        if (model.Content.length < 1) {
            alert("请输入留言内容");
            $("#feedback_f .txtContent").focus();
            return false;
        }
        model.Ver = "cn";
        model.ClassId = 203;
        Feedback.Add(model, code, function (res) {
            $("#feedback_f .imgCode").click();
            if (res && res.value) {
                if (res.value == -1) {
                    alert("请正确填写验证码");
                    $("#feedback_f .txtCode").focus();
                    return false;
                }
                if (res.value == -2) {
                    alert("请按正确格式完整填写信息");
                    return false;
                }
                if (res.value > 0) {
                    alert("留言成功");
                    $("#feedback_f .txtName").val("");
                    $("#feedback_f .txtPhone").val("");
                    $("#feedback_f .txtEmail").val("");
                    $("#feedback_f .txtContent").val("");
                    $("#feedback_f .txtCode").val("");
                    $("#feedback_f .closebook").click();
                    return false;
                }
            }
        })
    });

})




/**
* 检查字符串是否为合法手机号码
* @param {String} 字符串
* @return {bool} 是否为合法手机号码
*/
function isPhone(aPhone) {
    var bValidate = RegExp(/^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57])[0-9]{8}$/).test(aPhone);
    if (bValidate) {
        return true;
    }
    else
        return false;
}
/**
* 检查字符串是否为合法email地址
* @param {String} 字符串
* @return {bool} 是否为合法email地址
*/
function isEmail(aEmail) {
    var bValidate = RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/).test(aEmail);
    if (bValidate) {
        return true;
    }
    else
        return false;
}


