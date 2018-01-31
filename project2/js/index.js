
function index(){
//头部 	二级菜单
	$(".head-rights>li").eq(0).siblings().mouseenter(function(){
		$(this).children("ul").css("display","block");
	}).mouseleave(function(){
		$(this).children("ul").css("display","none");
	})
//轮播图
	var timer= setInterval(autoPlay,2000);
	var index = 0;
	function autoPlay(){
		index++;
		if( index == $(".scroll span").size() ){
			index = 0;
		}
		$(".scroll span").eq(index)
				  .css("background","red")
				  .siblings()
				  .css("background","#b5b5b5");
		$(".hot-left img").eq(index)
				  .fadeIn(1000)
				  .siblings("img")
				  .fadeOut(1000);
	}
	$(".scroll span").mouseenter(function(){
		clearInterval(timer);
		index = $(this).index()-1;
		autoPlay();
	})
	$(".scroll span").mouseleave(function(){
		timer= setInterval(autoPlay,2000);
	})
	// 轮播图 选项卡
	$(".hot-cons li").mouseenter(function(){
		$(this).css("background","#fff").siblings().css("background","#f5f5f5");
		var num=$(this).index();
		$(".hot-con3").eq(num).css("display","block").siblings(".hot-con3").css("display","none")
	})
//	产品分类 选项卡
	$(".show-column>li").mouseenter(function(){
		$(this).css({"color":"#d00","background":"#fff"})
				.siblings().css({"color":"#87676a","background":"#efefef"})
		$(".show-columncon").eq($(this).index()).css("display","block")
							.siblings(".show-columncon").css("display","none")
	})
//	一楼 轮播图
		var num=0;
	setInterval(function(){
		if(num==0){
			num=-390;
			$(".one-banner2 span:odd").css("background","#90c221")
								.siblings().css("background","#999")
		}else{
			num=0;
			$(".one-banner2 span:even").css("background","#90c221")
								.siblings().css("background","#999")
		}
		$(".one-banner1").animate({"left":num+"px"},1000)
	},3000)
//栏目  column-menu 选项卡
	$(".column-menu>ul").find("li").mouseenter(function(){
		$(this).css("background","#90c221")
				.siblings().css("background","#6d9319")
		$(".column-con p").eq($(this).index()).css("display","block")
							.siblings("p").css("display","none")
	})
//	栏目  column-show 选项卡
	$(".column-left p").mouseenter(function(){
		$(this).css("background","#ddd")
		.siblings().css("background","#ccc")
		if($(this).index()==0){
			$(this).find("img").attr("src","img/tu2.png")
			$(".column-left p").eq(1).find("img").attr("src","img/tu3.png")
			$(".column-right").find("img").attr("src","img/t8.jpg")
			$(".column-sidebar div").eq(0).css("display","block")
									.siblings().css("display","none")
		}else{
			$(this).find("img").attr("src","img/tu4.png")
			$(".column-left p").eq(0).find("img").attr("src","img/tu1.png")
			$(".column-right").find("img").attr("src","img/t9.jpg")
			$(".column-sidebar div").eq(1).css("display","block")
									.siblings().css("display","none")
		}
	})
//新闻 选项卡
	$(".news-left ul").eq(0).find("li").mouseenter(function(){
		$(this).css("background","#fff")
				.siblings().css("background","#f1f1f1")
		$(".news-left1").eq($(this).index()).css("display","block")
						.siblings(".news-left1").css("display","none")
	})
//吸顶效果
	$(document).scroll(function(){
		if($(document).scrollTop()>214){
			$("#nav").css("top",$(document).scrollTop()+"px")
		}else if($(document).scrollTop()<214){
			$("#nav").css("top","214px")
		}
//滚动菜单
		$(".scroll-nav").css("top",$(document).scrollTop()+156+"px")
		$(".floors-nav").css("top",$(document).scrollTop()+156+"px")
	})
	$(".scroll-nav1").click(function(){
		$("html,body").scrollTop(0)
	})
//滚动楼层菜单
	$(".floors-nav li").mouseenter(function(){
		var oindex=$(this).index();
		$(".floors-nav img").eq(oindex).css("display","none")
	}).mouseleave(function(){
		var oindex=$(this).index();
		$(".floors-nav img").eq(oindex).css("display","block")
	})
	$(".floors-nav li").click(function(){
		var otop=$(".floor-1f").eq($(this).index()).offset().top-34;
		$("html,body").scrollTop(otop)
	})
//一楼数据动态添加
	function floor(shows,names){
		$.ajax({
			type:"get",
			url:"json/index.json",
			success:function(json){
				var html="";
					for(var i=0;i<json[names].list.length;i++){
						var pro=json[names].list[i];
						html+=`<dl>
									<dd>
										<a href="details.html?shows=${names}&id=${pro.id}">
											<img src="img/show1/${pro.src}" alt="" />
										</a>
										<span>${pro.price}</span>
									</dd>
									<dt>
										<p>${pro.name}</p>
									</dt>
								</dl>`;
					}
				$(shows).html(html);
			}
		})
	}
	floor(".floor-one","classify001")
	floor(".floor-two","classify002")
	floor(".floor-three","classify003")
	floor(".floor-four","classify004")
}
