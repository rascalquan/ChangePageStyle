(function ($) {
	//初始化grid
	$("#mainGrid").kendoGrid({
		dataSource:[
			{selectorField:"#maindiv",
			 attrKey:"border",
			 attrValue:"1px",
			 activeRange:0,
			 isOneTime:0},
			 {selectorField:"#maindiv",
			 attrKey:"border",
			 attrValue:"1px",
			 activeRange:0,
			 isOneTime:0},
			 {selectorField:"#maindiv",
			 attrKey:"border",
			 attrValue:"1px",
			 activeRange:0,
			 isOneTime:0}]
	});
})(jQuery);
/*function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };
  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];

    var url = tab.url;

    //console.assert(typeof url == 'string', 'tab.url should be a string');
    callback(url);
  });
}

function btnClick(e){
	//保存数据
	var range=document.getElementById("widthRange").value;
	//(chrome.tabs[0].incognito){//隐身模式，保存到内存中
	//var bgPage=chrome.extension.getBackgroundPage();
		//bgPage["rangedata"]=range;
	//}
	//else{
		localStorage["rangedata"]=range;//保存到本地
	//}
	//回调changeWidth方法
	getCurrentTabUrl(changeWidth);
}

//调整页面宽度
function changeWidth(url){
		if(url.length>0){
		var parts=url.split("/");
		if(parts.length>=3&&parts[2]=="www.jianshu.com"){
			chrome.tabs.executeScript(null,
				{code:"document.getElementsByClassName('post')[0].style.width='"+10*parseFloat(document.getElementById("widthRange").value)+"px'"});
		}
		else{
			chrome.tabs.executeScript(null,
			{code:"alert('当前非简书文章页面！');"});
		}
	}
}
	
function rangeChange(e){
	var range=document.getElementById("widthRange").value;
	document.getElementById("rangeSpan").innerHTML=10*parseFloat(range);
}

//初始化Range数据
function initRangeData(){
	if(typeof localStorage["rangedata"]!=="undefined"){
		document.getElementById("widthRange").value=parseFloat(localStorage["rangedata"]);
		document.getElementById("rangeSpan").innerHTML=10*parseFloat(localStorage["rangedata"]);
	}
	else{
		document.getElementById("widthRange").value=50;
		document.getElementById("rangeSpan").innerHTML="500";
	}
}
		
//页面初始化
document.addEventListener('DOMContentLoaded', function(){
	initRangeData();
	
	document.getElementById('btnConfirm').addEventListener('click', btnClick);
	
	document.getElementById('widthRange').addEventListener('change', rangeChange);
});*/

