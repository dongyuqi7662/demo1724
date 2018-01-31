function zhuc(){
//	注册
	var flag=0;
//账号验证
	$(".zhuc-z input").blur(function(){
		var reg=/(\w|[\u4e00-\u9fa5]){4,20}/;
		var str=$(this).val();
		if(reg.test(str)){
			$(this).next().html("输入正确").css("color","green")
			flag++;
		}else{
			$(this).next().html("输入错误").css("color","red")
		}
	})
//登录密码验证
	$(".zhuc-d input").blur(function(){
		var reg=/\w[^_]{5,12}/;
		var str=$(this).val();
		if(reg.test(str)){
			$(this).next().html("输入正确").css("color","green")
			flag++;
		}else{
			$(this).next().html("输入错误").css("color","red")
		}
	})
//确认密码验证
	$(".zhuc-p input").blur(function(){
		var str=$(this).val();
		if(str==$(".zhuc-d input").val()){
			$(this).next().html("输入正确").css("color","green")
			flag++;
		}else{
			$(this).next().html("输入错误").css("color","red")
		}
	})
//	封装验证码函数
	function yanz(){
//		验证码动态创建
			var arr=[];
			var num=null;
		for(i=0;i<4;i++){
			if(rand(1,3)==1){
				num=String.fromCharCode(rand(48,57));
				arr.push(num);
			}else if(rand(1,3)==2){
				num=String.fromCharCode(rand(65,90));
				arr.push(num);
			}else{
				num=String.fromCharCode(rand(97,122));
				arr.push(num);
			}
		}
			var str=arr.join("");
			$(".zhuc-m span").html(str).css({"background":getColor(),"color":"#fff"})
		//验证码验证

		$(".zhuc-m input").blur(function(){
			if($(".zhuc-m input").val()==str){
				$(this).next().next().html("输入正确").css("color","green");
				flag++;
				
			}else{
				$(this).next().next().html("输入错误").css("color","red");
			}
		})
		return flag;
	}
	yanz();
//	点击验证码刷新
	$(".zhuc-m span").click(function(){
		yanz();
	})
//	判定是否注册成功及页面跳转
	$(".btnz").click(function(){
		if(flag==4){
			setCookie("usename",$(".zhuc-z input").val(),1)
			setCookie("usepass",$(".zhuc-d input").val(),1)
			alert("注册成功，请登录")
			location.href="zhuc.html";
		}else{
			alert("请正确输入");
		}
	})
//	登录
	$(".btn1").click(function(){
		$(this).prop("checked",true)
				.siblings().prop("checked",false)
	})
	$(".btn3").click(function(){
		$(this).prop("checked",true)
				.siblings().prop("checked",false)
	})
//	用户登录
	$(".btn2").click(function(){
		var names=getCookie("usename");
		var pass=getCookie("usepass");
		if($(".t1").val()==names&&$(".t2").val()==pass){
			alert("登录成功")
			location.href="index.html"
		}else{
			alert("登录失败，请重新输入")
		}
	})
}
