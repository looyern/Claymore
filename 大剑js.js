window.onload=function(){
    //这里路径中的斜杠必须是反斜杠，且数组是小括号，而不是中括号
    var imgArr=new Array("E:/前端/Claymore/iamges/1.jpg","E:/前端/Claymore/iamges/2.jpg","E:/前端/Claymore/iamges/3.jpg","E:/前端/Claymore/iamges/4.jpg");
    var oimg=document.getElementById("img1");
    var oprev=document.getElementById("prev");
    var onext=document.getElementById("next");
    var num=0;
    function img_change(){
        oimg.src=imgArr[num];
     
    }
    oprev.onclick=function(){
        num--;
        if(num==-1){
            num=imgArr.length-1;
        };
        img_change();
    }
    onext.onclick=function(){
        num++;
        if(num==imgArr.length){
            num=0;
        };
        img_change();
    }
}

