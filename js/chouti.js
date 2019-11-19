var ctboxs=document.getElementById('ct1');
var ctbox=ctboxs.getElementsByClassName('ctbox');
var title=ctboxs.getElementsByClassName('title');
var titleWidth=60;
var contentWidth=590;
for(var i=0;i<title.length;i++){
	title[i].index=i;
	title[i].onclick=function(){
		for(var i=0;i<ctbox.length;i++){
			if(i<=this.index){
				ctbox[i].style.left=i*titleWidth+'px';
			}else{
					ctbox[i].style.left=i*titleWidth+contentWidth+'px';
				}
			// ctbox[i].style.left=;
		}
	}
}
/*
点击的序号计为n,则ctbox序号小于等于n的时候，ctbox的left值计算公式为 序号*titleWidth，
ctbox序号大于n的时候，ctbox的left值计算公式为序号*titleWidth+contentWidth
点击第0个标题0，650，710，770
点击第一个标题0,60,710,770
点击第二个标题0,60,120,770
点击第三个标题0 60 120 180
 */