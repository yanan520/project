//验证
$("#login").bind("click",function(){
	var $userName = $(".userName1").val();
	var $passWord = $(".pwd1").val();
	if($userName == ""||$passWord=="") {
		alert("请输入手机号或密码")
	} else {
		var uri="http://aiouniya.applinzi.com/login.php?username="+$userName+"&pwd="+$passWord;
		$.ajax({
		   type:"get",
		   url:uri,
		   dataType:"json",
		   success:function(result){
			    switch (result){
			    	case 0:
				    	alert("该手机号没有注册");
				    	break;
			    	case 1:
			    		alert("登陆成功");
			    		localStorage.setItem("userName",$('.userName1').val());
			    		history.go(-1);
			    		break;
			    	case 2:
			    		alert("密码错误");
			    		break;
			    }
		   }
		})
	}
})

$("#register").click(function(){
	window.location.href="register.html"
})
$(".icon-jiantou1").click(function(){
	history.go(-1);
})
