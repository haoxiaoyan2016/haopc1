var DOM={};
/*
DOM.addClassName=function(str,context){
    var className=str.replace(/^( +)[\w|\W]+( +)$/,"");
    className=className.split("");
    var context=context|document;
    var a=0;
    for(var i=0;i<className.length;i++){
        if(className[i]){

        }
    }
}*/

DOM.addClass=function(ele,str){
    var reg=new RegExp("(^| +)"+str+"(| +$)");
    if(!reg.test(ele.className)){
        ele.className+=" "+str;
    }
}


DOM.removeClass=function(ele,strClass){
    var reg=new RegExp("(^| )"+strClass+"( |$)","g");
    //ele.className="tab a a b c a";
    // "(已经匹配过了，不再匹配)a b c a";//第二个连续出现的a匹配不到
    //ele.className.replace(/ /g,"   ");//掺水（掺空格）
    //ele.className="tab  a b c a";
    var tempStr=ele.className.replace(/ /g,"   ");//掺水（掺空格）
    ele.className=tempStr.replace(reg," ");

}

DOM.siblings=function(ele){
    var parent=ele.parentNode;
    var children=parent.children;
    var ary=[];
    for(var i=0;i<children.length;i++){
        console.log(children[i]!=ele);
        if(children[i].nodeType===1&&children[i]!=ele){
            ary.push(children[i]);
        }
    }
    return ary;
}
DOM.preSiblings=function(ele){
    var ary=[];
    var pre=ele.previousSibling;
    while(pre){
        if(pre.nodeType===1){
            ary.push(pre);
        }
        pre=pre.previousSibling;
    }
    if(!ary){
        return null;
    }
    return ary;
}