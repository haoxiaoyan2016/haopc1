var ANIMATE={
    animate:function(ele,obj,duration,callback){
        var time=0;
        var interval=15;
        var oChange={};
        var oBegin={};
        var flag=0;
        for(var attr in obj){
            var begin=ANIMATE.getCss(ele,attr);
            var change=obj[attr]-begin;
            if(change){
                oChange[attr]=change;
                oBegin[attr]=begin;
                flag++;
            }
        }
        if(!flag){
            return;
        }
        window.clearInterval(ele["timer"+attr]);
        function step(){
            time+=interval;
            if(time<duration){
                for(var attr in oChange){
                    var change=oChange[attr];
                    var begin=oBegin[attr];
                    var value=time/duration*change+begin;
                    ANIMATE.setCss(ele,attr,value);
                }
            }else{
                for(var attr in oChange){
                    var target=obj[attr];
                    ANIMATE.setCss(ele,attr,target);
                }
                window.clearInterval(ele["timer"+attr]);
                ele["timer"+attr]=null;
                if(typeof callback=="String"){
                    callback.call(ele);
                }
            }
        }
        ele["timer"+attr]=window.setInterval(step,interval);
    },
    getCss:function(ele,attr){
        if(window.getComputedStyle){

            return window.parseFloat(window.getComputedStyle(ele)[attr]=="auto"?0:window.getComputedStyle(ele)[attr]);
        }else{
            if(attr=="opacity"){
                var value=ele.currentStyle[attr];
                value=value.replace(/ +/g,"");
                if(/alpha\(filter=(\d+?:(\.\d+)?)\)/){
                    return RegExp.$1/100;
                }else{
                    return 1;
                }
            }
            return window.parseFloat(ele.currentStyle[attr]);
        }
    },
    setCss:function(ele,attr,value){
        if(attr=="opacity"){
            ele.style.filter="alpha(filter="+value*100+")";
            ele.style.opacity=value;
        }else{
            ele.style[attr]=value+"px";
        }
    }
};