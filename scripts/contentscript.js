//向主程序请求LocalStore中的数据rangedata
chrome.extension.sendMessage({Query:{LocalStore:"rangedata"}},function(response){
    console.log(response);
    if(typeof response!="undefined"&&response.flag==true){
        var res=response.result;
        if(typeof res!=="undefined"){
            var newWidth=10*parseFloat(res)+"px";
            document.getElementsByClassName('post')[0].style.width=newWidth;//根据响应数据修改页面
        }
    }
});
