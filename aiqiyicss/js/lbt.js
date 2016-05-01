var lbt={};
    /**
     *
     * @param ulid 图片外面ul的id
     * @param titleDiv 需要切换的标题的div的id
     */
 lbt.bindLis=function bindLis(ulid,titleDiv){
        var oNavM=document.getElementById(ulid).getElementsByTagName("ul")[0];//得到图片下的ul
        var oImgLis=oNavM.getElementsByTagName("li");//图片li
        var imgWidth=document.getElementById(ulid).getElementsByTagName("li")[0].offsetWidth;//得到每个ul下图片的宽度
        if(titleDiv){
            var oNvR=document.getElementById(titleDiv);//得到标题的外面的div
            var oLis=oNvR.getElementsByTagName("li");
            [].forEach.call(oLis,function(item,index){//给标题li绑定事件
                bindMouseenterMouseleave(oNavM,item,index);
            });
        };//标题li
        [].forEach.call(oImgLis,function(item,index){//给图片li绑定事件
            bindMouseenterMouseleave(oNavM,item,index);
        })
        oNavM.timer=window.setInterval(autoMove,5000);
        var n=0;
        function autoMove(){
            n++;
            if(n==10){
                n=0;
            }
            ANIMATE.animate(oNavM,{left:n*-imgWidth},10);
            changeBg(n);
        }
        function bindMouseenterMouseleave(ele,item,index){
            item.onmouseenter=function(){
                ANIMATE.animate(ele,{left:index*-imgWidth},10);
                window.clearInterval(ele.timer);
                changeBg(index);
                n=index;
            },
                item.onmouseleave=function(){
                    ele.timer=window.setTimeout(
                        function(){
                            ele.timer=window.setInterval(autoMove,5000)},10)
                }
        }
    }
