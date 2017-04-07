//监听浏览器tab更新
chrome.tabs.onUpdated.addListener(checkForValidUrl);

//监听请求
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    console.log(request);
    console.log(sender.tab? "Request from a content script:"+sender.tab.url:"Request from the extension");
    if(typeof request.Query!=="undefined"&&typeof request.Query.LocalStore!=="undefined"){
        var res=localStorage[request.Query.LocalStore];//抓取本地数据
        if(typeof res!=="undefined"){
            sendResponse({flag:true,result:res});//响应请求
        }
    }
});

function checkForValidUrl(tabId, changeInfo, tab){
    if(tab.url.toLowerCase().indexOf("www.jianshu.com/p/")>0){
        chrome.pageAction.show(tabId);//显示插件page_Action的图标
    }
    else{
        chrome.pageAction.hide(tabId);
    }
}