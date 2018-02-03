window.onload = function(){
    let validateResult = {
        isPhoneValid:false,
        isVerifycodeValid:false,
        isPwdValid:false,
        isConfirmPwdValid:false
    }
    $(":text[name=phone]").blur(function(){
        $(this).parent().find(".inline-tip").remove();
        if(/^1[3578]\d{9}$/.test($(this).val())){
            $.ajax({
                type:"get",
                url:"/users",
                data:{phone:$(this).val()},
                success:(data) => {
                    if(data.status == 0){
                        $(this).after("<span class='inline-tip'><i class='tip-status tip-status--opinfo'></i>手机已被注册</span>");
                        validateResult.isPhoneValid = false;
                    }else{
                        $(this).after("<span class='inline-tip'><i class='tip-status tip-status--success'></i></span>");
                        validateResult.isPhoneValid = true;

                    }
                }
            });

        }else{
            $(this).after("<span class='inline-tip'><i class='tip-status tip-status--opinfo'></i>格式不正确</span>");
            validateResult.isPhoneValid = false;
        }
    });
    $(":text[name=verifycode]").blur(function(){
        $(this).parent().find(".inline-tip").remove();
        if(/^\d{6}$/.test($(this).val())){
            $(this).after("<span class='inline-tip'><i class='tip-status tip-status--success'></i></span>");
            validateResult.isVerifycodeValid = true;
        }else{
            $(this).after("<span class='inline-tip'><i class='tip-status tip-status--opinfo'></i>格式不正确</span>");
            validateResult.isVerifycodeValid = false;
        }
    });
    $(":password[name=pwd]").blur(function(){
        $(this).parent().find(".inline-tip").remove();
        if(/^.{6,}$/.test($(this).val())){
            $(this).after("<span class='inline-tip'><i class='tip-status tip-status--success'></i></span>");
            validateResult.isPwdValid = true;
        }else{
            $(this).after("<span class='inline-tip'><i class='tip-status tip-status--opinfo'></i>格式不正确</span>");
            validateResult.isPwdValid = false;
        }
    });
    $(":password[name=password2]").blur(function(){
        $(this).parent().find(".inline-tip").remove();
        if($(this).val() == $(":password[name=pwd]").val()){
            $(this).after("<span class='inline-tip'><i class='tip-status tip-status--success'></i></span>");
            validateResult.isConfirmPwdValid = true;
        }else{
            $(this).after("<span class='inline-tip'><i class='tip-status tip-status--opinfo'></i>密码不一致</span>");
            validateResult.isConfirmPwdValid = false;
        }
    });

    $("form").submit(function(e){
        e.preventDefault();
        console.log("validAll",validateResult);
        if(validateResult.isPhoneValid 
            && validateResult.isVerifycodeValid 
            && validateResult.isPwdValid 
            && validateResult.isConfirmPwdValid ){
                
            $.ajax({
                type:"post",
                url:"/users",
                data:{
                    phone:$(":text[name=phone]").val(),
                    password:$(":password[name=pwd]").val()
                },
                success:function(){
                    location.href = "login.html"
                }
            });
        }
        
    });
}
