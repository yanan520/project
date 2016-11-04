//倒计时
function daojishi(){
	var  seccode=document.getElementsByClassName("huoqu")[0];
	var i=10;
	function show(){
		str = "";
		fresh();
		seccode.innerHTML=i;
		seccode.style.background="#969896";
		seccode.removeEventListener("click",show);
		var timer=setInterval(function(){
			--i;
			seccode.innerHTML=i; 
			if (i<=0) {
				clearInterval(timer);
				seccode.innerHTML="获取验证码";
				seccode.addEventListener("click",show);
				seccode.style.background="#ff9a0d";
				i=10;
			}
		},1000);	
	}
	seccode.addEventListener("click",show);
}
daojishi();

//同意协议
var i_1=0;
var i_2=0;
var i_3=0;
var i_4=0;
var flag=true;
var gougou=$(".icon-gougou");
gougou.on("touchstart",function(){
	if (!flag) {
		$(this).removeClass("gougou");
		flag=true;
	} else{
		$(this).addClass("gougou");
		flag=false;
		return i_4=1;
	}
})
//验证
$("#register1").bind("click", function() {
	var $telPhone =String($(".userName").val());
	var $passWord =String($(".pwd").val());
	var $againPwd =String($(".repwd").val());
	if($telPhone == ""||$passWord==""||$againPwd=="") {
		alert("手机号或密码不能为空")
	}else if($(".yanzhengma").val()!=$(".shoudao").html()){
		alert("输入验证码有误")
	}else if(i_4==0){
		alert("请阅读并同意6688协议")
	}else {
		if(i_1==i_2==i_3==i_4==1&&$(".yanzhengma").val()==$(".shoudao").html()){
			var uri="http://aiouniya.applinzi.com/register.php?username="+$telPhone+"&pwd="+$passWord;
			$.ajax({
			   type:"get",
			   url:uri,
			   dataType:"json",
			   success:function(result){
				    switch (result){
				    	case 0:
					    	alert("服务器异常");
					    	break;
				    	case 1:
				    		alert("用户名已存在");
				    		break;
				    	case 2:
				    		alert("注册成功");
				    		window.history.go(-1);
				    		break;
				    }
			   }
			})
		}
	}
})

		

//手机号
$(".userName").bind("blur", function() {
	var $telPhone = $(this).val();
	if($telPhone == "") {
		$(this).attr("placeholder","请输入手机号码");
	} else {
		var phoReg = /^1[3|4|5|7|8]\d{9}$/;

		if(phoReg.test($telPhone)) {
			$(this).siblings().css({"color":"green"});
			return i_1=1;
		} else {
			$(this).val("");
			$(this).attr("placeholder","请输入正确的手机号码");
			$(this).siblings().css({"color":"red"});
		}
	}
})
//密码
$(".pwd").bind("blur", function() {
	var $passWord = $(".pwd").val();
	if($passWord == "") {
		$(".pwd").attr("placeholder","请输入密码");
	} else {
		var wordReg = /^[\x21-\x7E]{6,20}$/;
		if(wordReg.test($passWord)) {
			$(this).siblings().css({"color":"green"});
			return i_2=1;
		} else {
			$(this).siblings().css({"color":"red"});
			$(this).val("");
			$(".pwd").attr("placeholder","密码只能在6-20位字符之间");
		}
	}
})
//确认密码
$(".repwd").bind("blur", function() {
	var $againPwd = $(".repwd").val();
	if($againPwd == "") {
		$(".repwd").attr("placeholder","重复密码");
	} else {
		var $firstPwd = $(".pwd").val();
		if($firstPwd == $againPwd) {
			$(this).siblings().css({"color":"green"});
			return i_3=1;
		} else {
			$(this).siblings().css({"color":"red"});
			$(this).val("");
			$(".repwd").attr("placeholder","两次密码输入不一致")
		}
	}
})

$(".icon-jiantou1").click(function(){
	history.go(-1);
})

var arr = [];
var str = "";
for(var i = 65; i <= 90; i++) {
	arr.push(String.fromCharCode(i));
}
for(var j = 97; j <= 122; j++) {
	arr.push(String.fromCharCode(j));
}
for(var k = 0; k <= 9; k++) {
	arr.push(k);
}
fresh();

function fresh() {
	for(var i = 0; i <= 3; i++) {
		var num = Math.round(Math.random() * (arr.length - 1));
		str += arr[num];
	}
	$(".shoudao").css({"color":"rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")"})
	$(".shoudao").html(str);
}