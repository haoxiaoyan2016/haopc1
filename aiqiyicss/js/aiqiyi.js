(function(){
    /*轮播图*/
    function nav(){
    var oNavM=document.getElementById("navM").getElementsByTagName("ul")[0];//得到图片下的ul
    var oImgLis=oNavM.getElementsByTagName("li");//图片li
    oNavM.imgWidth=document.getElementById("navM").getElementsByTagName("li")[0].offsetWidth;//得到每个ul下图片的宽度
    var oNvR=document.getElementById("navR");//得到标题的外面的div
    var oLis=oNvR.getElementsByTagName("li");//标题li
    [].forEach.call(oLis,function(item,index){//给标题li绑定事件
        bindMouseenterMouseleave(oNavM,oLis,item,index);
    });
    [].forEach.call(oImgLis,function(item,index){//给图片li绑定事件
        bindMouseenterMouseleave(oNavM,oLis,item,index);
    })
    oNavM.n=0;
    function autoMove(n){
        n++;
        if(n==10){
            n=0;
        }
        ANIMATE.animate(oNavM,{left:n*(-oNavM.imgWidth)},10);
        changeBg(n,oLis,"navListText","navPromoted");
    }
    function changeBg(n,ele,className,addClassName){
        for(var i= 0,len=ele.length;i<len;i++){
            ele[i].className=className;
        }
        ele[n].className+=" "+addClassName;
    }
    oNavM.timer=window.setInterval(function(){autoMove(oNavM.n)},5000);
    function bindMouseenterMouseleave(ele,oLis,item,index){
        item.onmouseenter=function(){
            ANIMATE.animate(ele,{left:index*(-ele.imgWidth)},10);
            window.clearInterval(ele.timer);
            if(oLis)changeBg(index,oLis,"navListText","navPromoted");
            ele.n=index;
        },
        item.onmouseleave=function(){
            ele.timer=window.setTimeout(
                function(){
                    ele.timer=window.setInterval(function(){autoMove(ele.n)},5000)},10)
        }
    }

    }
    nav();
    /*两图轮播*/
    bindLis("first_sigle_row","piclistBtnL","piclistBtnR");
    bindLis("first_sigle_row1","piclistBtnL1","piclistBtnR1");
    bindLis("first_sigle_row2","piclistBtnL2","piclistBtnR2");
    bindLis("first_sigle_row3","piclistBtnL3","piclistBtnR3");
    bindLis("first_sigle_row4","piclistBtnL4","piclistBtnR4");
    function bindLis(imgDivid,leftBtn,rightBtn){
       /* var oDiv=document.getElementById(imgDivid);*/
        var imgUl=document.getElementById(imgDivid).getElementsByTagName("ul")[0];//得到图片下的ul
        var oImgLis=imgUl.getElementsByTagName("li");//图片li
        imgUl.imgWidth=imgUl.getElementsByTagName("li")[0].offsetWidth;//得到每个ul下图片的宽度
        var piclistBtnL=document.getElementById(leftBtn);//得到标题的外面的div
        var piclistBtnR=document.getElementById(rightBtn);
        piclistBtnL.onclick=function(){
            imgUl.n--;
            if(imgUl.n<0){
                imgUl.n=1;
            };
            ANIMATE.animate(imgUl,{left:imgUl.n*(-imgUl.imgWidth)},10);
            window.clearInterval(imgUl.timer);
            imgUl.timer=null;
        }
        piclistBtnR.onclick=function(){
            imgUl.n++;
            if(imgUl.n==2){
                imgUl.n=0;
            };
            ANIMATE.animate(imgUl,{left:-imgUl.imgWidth*imgUl.n},10);
            window.clearInterval(imgUl.timer);
            imgUl.timer=null;
        };
        [].forEach.call(oImgLis,function(item,index){//给li绑定事件
            bindMouseenterMouseleave(imgUl,null,item,index);
        });

        [].forEach.call(oImgLis,function(item,index){//给li绑定事件
            bindMouseenterMouseleave(imgUl,null,item,index);
        })
        imgUl.n=0;
        function autoMove(){
            imgUl.n++;
            if(imgUl.n==2){
                imgUl.n=0;
            }
            ANIMATE.animate(imgUl,{left:imgUl.n*(-imgUl.imgWidth)},10);

        }
        imgUl.timer=window.setInterval(autoMove,5000);
        function bindMouseenterMouseleave(ele,oLis,item,index){
            item.onmouseenter=function(){
                ANIMATE.animate(ele,{left:index*(-ele.imgWidth)},10);
                window.clearInterval(ele.timer);
                ele.n=index;
            },
                item.onmouseleave=function(){
                    ele.timer=window.setTimeout(
                        function(){
                            ele.timer=window.setInterval(function(){autoMove(ele.n)},5000)},10)
                }
        }
     };

     //jsonp  请求地址：http://search.video.qiyi.com/m?cb=cb_xlrk2c&if=hotQuery&p=global
     var textSeach = document.getElementById("textSeach");
     var buttonSeach=document.getElementById("buttonSeach");
     textSeach.onfocus=function(){

     }

    PA.promotionalAdvertising("adImg","piclist_pic_right");//第一个标签的绑定
    PA.promotionalAdvertising("adImg3","piclist_pic_right1");//第二个标签的绑定
    window.onscroll=function scroll(){
        var winH=document.documentElement.clientHeight||document.body.clientHeight;
        var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
        var navTop=document.getElementById("navTop");
        var banner=navTop.getElementsByClassName("banner");
        if(scrollTop>winH){
            navTop.style.position="fixed";
            navTop.style.zIndex="100";
            navTop.classNames="navTop";

        }else{
            navTop.style.position="";
        }
    };
})();
