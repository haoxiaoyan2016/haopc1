var PA={};
PA.promotionalAdvertising=function(outerClassName,oDivRightClassName){
    var outer=document.getElementsByClassName(outerClassName)[0];
    var oAs=outer.getElementsByTagName("a");
    var oDivsRight=document.getElementsByClassName("adImg")[0].getElementsByClassName(oDivRightClassName);
    [].forEach.call(oAs,function(item,index){
        var site_piclist_pic_right=item.getElementsByTagName("div")[1];
        var preSiblings=DOM.preSiblings(item);
        item.onmouseenter=function(){
            site_piclist_pic_right.style.display="block";
            var len=index==5?preSiblings.length-1:preSiblings.length;
            for(var i= 0,len;i<len;i++){
                preSiblings[i].style.display="none";
            }
            item.style.width="930px";
        };
        item.onmouseleave=function(){

            for(var i= 0,len=preSiblings.length;i<len;i++){
                preSiblings[i].style.display="inline";
            }
            site_piclist_pic_right.style.display="none";
            item.style.width="180px";
            item.style.transition="";
        }
    })
}
