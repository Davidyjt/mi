//获取购物车元素
var oCart =document.querySelector(".top .cart");
var oCartbox =document.querySelector(".top .cart-box");
var oCartconcent =document.querySelector(".top .cart-concent");
var oLoad =document.querySelector(".top .loading");
var oEmpy =document.querySelector(".top .cart-empy");

console.log(oCartconcent)

//设置购物车悬停事件
oCart.onmouseenter =function(){

	//显示load图标
	oLoad.style.display="block";

	animate (oCartconcent,{height:100},true,function(){
		oLoad.style.display="none";
		oEmpy.style.display="block";

	});


}
oCart.onmouseleave =function(){//设置购物车移出事件
	animate(oCartconcent,{height:0},true,function(){
		oLoad.style.display="none";
		oEmpy.style.display="none";
	})
}




//2.处理导航栏
handleHeader()
function handleHeader(){
	//获取元素
	var aNavit = document.querySelectorAll(".header .header-nav-item");
    var aNavco = document.querySelector(".header .header-nav-content");
    var oLoad =document.querySelector(".header-nav-content .loading")
    var hideTimer = null;
    var loadDataTimer = null;
    var oContain =aNavco.querySelector(".contain")
    console.log(aNavit)
    //循环遍历每一个li
    for(var i = 0;i<aNavit.length;i++){
        //将列表的下标存起来
    	aNavit[i].index =i;
    	aNavit[i].onmouseenter =function(){
    		//清除定时器
    		clearTimeout(hideTimer);
    		//content加上上边框
    		aNavco.style.borderTop = "1px solid gray"
    		//模拟加载数据显示loading图标
    		oContain.innerHTML ='<div class="loading"></div>'
    		// oLoad.style.display = 'block';
    		//动画显示下拉列表
    		animate(aNavco,{height:200},true,function(){
    			aNavco.style.overflow = "visible"

    		})
    		//动态加载数据
    		var index =this.index;
    		//优化不必要的加载数据
    		clearTimeout(loadDataTimer);
    		loadDataTimer= setTimeout(function(){
    			loadData(index);
    		},100)

    	}
    	aNavit[i].onmouseleave =function(){
    		// hideTimer =setTimeout(oN(), 3000)

            hideTimer =setTimeout(function(){
            	aNavco.style.borderTop="none";
	    		aNavco.style.overflow = "hidden";
	    		//动画显示导航下拉列表
	    		animate(aNavco,{height:0},true,function(){
	    			aNavco.style.overflow = "hidden";
	    			aNavco.style.borderTop="none";


    		});
	    		;}
            	, 1000)
	    		
    		
    		


    	}

    }

      // 鼠标移入下拉列表显示
       aNavco.onmouseenter =function(){
       	clearTimeout(hideTimer);
       }
       //鼠标移出下拉列表隐藏内容
       aNavco.onmouseleave =function(){
       	hideNav();

       }

       //加载数据函数
       function loadData(index){
       	var data =aNavItemData[index];
       	var html ="";
	        html += "<ul>"
	        for(var i = 0;i<data.length;i++){
				html += '<li>'
				html +=	'	<a href="'+data[i].url+'">';
				html +=	'		<div class="img-box">';
				html +=	'			<img src="'+data[i].src+'" alt="">';
				html +=	'		</div>';
				html +=	'		<p class="header-nav-name">'+data[i].name+'</p>';
				if(data[i].tag){//判断是否有tag
				
				html +=	'		<p class="header-nav-price">'+data[i].price+'元</p>';
				}
				html +=	'		<span class="tag">'+data[i].tag+'</span>';
				html +=	'	</a>';
				html +=	'</li>';
				}
			html += "</ul>"
			oContain.innerHTML =html;


       }

       //隐藏列表共通函数
       function hideNav(){
			hideTimer =setTimeout(function(){
				aNavco.style.borderTop="none";
				aNavco.style.overflow = "hidden";
			//动画显示导航下拉列表
			animate(aNavco,{height:0},true,function(){
				aNavco.style.overflow = "hidden";
				aNavco.style.borderTop="none";


			});
			;}
			, 1000)

       }



}


//设置定时器
handleCountDown()
function handleCountDown(){
	var aTimenum =document.querySelectorAll(".time-num");//获取时间元素
	var endTime = new Date("2019-06-10 23:59:59");//定义结束时间
	var timer = null;//定义一个空timer

	function handleTimer(){
		var allSeconds =parseInt((endTime.getTime() - Date.now())/1000)//距离结束时间的秒数

		var hours = parseInt(allSeconds/3600);
		var minutes = parseInt(allSeconds % 3600 /60);
		var second = allSeconds % 3600 % 60;//计算小时 分钟 秒

		aTimenum[0].innerHTML =to2Str(hours);
		aTimenum[1].innerHTML =to2Str(minutes);
		aTimenum[2].innerHTML =to2Str(second);
	}
	handleTimer();

	timer =setInterval(handleTimer, 500);
	function to2Str(num){
		return num>=10 ? ""+num : "0"+num;
	}
	//设置数字格式






}

//设置选项卡
// handEle()
// function handEle(){
// 	var aBtn = document.querySelectorAll(".ele .more-right");
// 	for(var i=0; i<aBtn.length; i++){
// 		for(var j =0; j<aBtn.length; i++){
			

// 		}

// 	}

// }
