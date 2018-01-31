function details(){
//	修改放大镜图片路径
 	function mirror(){
	 	var str=location.href;
	 	str=str.split("?")[1];
	 	var arr=str.split("&");
	 	var pshows=arr[0].split("=")[1];
	 	var pid=arr[1].split("=")[1];
	 	console.log(pshows);
	 	console.log(pid);
	 	
	 	$.ajax({
	 		type:"get",
			url:"json/index.json",
			success:function(json){
				for(var attr in json){
					if(attr==pshows){
						for(var i=0;i<json[attr].list.length;i++){
							var por=json[attr].list[i];
							if(por.id==pid){
// 								小图路径
								var os1="img/show1/"+por.s1;
								var os2="img/show1/"+por.s2;
								var os3="img/show1/"+por.s3;
								var os4="img/show1/"+por.s4;
								$("#small2 img").eq(0).attr("src",os1);
								$("#small2 img").eq(1).attr("src",os2);
								$("#small2 img").eq(2).attr("src",os3);
								$("#small2 img").eq(3).attr("src",os4);
							//		中图路径
								var om1="img/show1/"+por.m1;
								var om2="img/show1/"+por.m2;
								var om3="img/show1/"+por.m3;
								var om4="img/show1/"+por.m4;
								$("#small img").eq(0).attr("src",om1);
								$("#small img").eq(1).attr("src",om2);
								$("#small img").eq(2).attr("src",om3);
								$("#small img").eq(3).attr("src",om4);
							//		大图路径
								var ob1="img/show1/"+por.b1;
								var ob2="img/show1/"+por.b2;
								var ob3="img/show1/"+por.b3;
								var ob4="img/show1/"+por.b4;
								$("#big img").eq(0).attr("src",ob1);
								$("#big img").eq(1).attr("src",ob2);
								$("#big img").eq(2).attr("src",ob3);
								$("#big img").eq(3).attr("src",ob4);
								$("#box img").css("display","none");
								$("#small2 img").css("display","block");
								$("#small img").eq(0).css("display","block").addClass("smallImg")
													.siblings().css("display","none").removeClass("smallImg")
								$("#big img").eq(0).css("display","block").addClass("bigImg")
													.siblings().css("display","none").removeClass("bigImg")
								$("#small2 img").click(function(){
								var pi=$(this).index();
								$("#small img").eq(pi).css("display","block").addClass("smallImg")
												.siblings().css("display","none").removeClass("smallImg")
								$("#big img").eq(pi).css("display","block").addClass("bigImg")
												.siblings().css("display","none").removeClass("bigImg")
								})
//								获取放大镜商品详细信息(放大镜右侧信息填写)
								$(".product-top h3").html(por.name)
								$(".product-right i").html(por.price)

							}
						}
					}
				}
				
			}
	 	})
 	}
	mirror();
	//放大镜
	$id("small").onmouseover = function(){
		$id("mask").style.display = "block";
		$id("big").style.display = "block";
	}
	$id("small").onmouseout = function(){
		$id("mask").style.display = "none";
		$id("big").style.display = "none";
	}
	$id("small").onmousemove = function(e){
		var e = e || event;
		var ob=document.getElementsByClassName("bigImg")[0];
		var os=document.getElementsByClassName("smallImg")[0];
		var x = e.pageX - $id("mask").offsetWidth/2 - $id("box").offsetLeft;
		var y = e.pageY - $id("mask").offsetHeight/2 - $id("box").offsetTop;
		var maxL = $id("box").offsetWidth - $id("mask").offsetWidth;
		var maxT = $id("box").offsetHeight - $id("mask").offsetHeight;
		x = x < 0 ? 0 : ( x > maxL ? maxL : x );
		y = y < 0 ? 0 : ( y > maxT ? maxT : y );
		var bigImgLeft = x*(ob.offsetWidth-$id("big").offsetWidth)/(os.offsetWidth-$id("mask").offsetWidth);
		var bigImgTop = y*(ob.offsetHeight-$id("big").offsetHeight)/(os.offsetHeight-$id("mask").offsetHeight);
		
		$id("mask").style.left = x + "px";
		$id("mask").style.top = y + "px";
		ob.style.left = -bigImgLeft + "px";		
		ob.style.top = -bigImgTop + "px";		
	}
}
