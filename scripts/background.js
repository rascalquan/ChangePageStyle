//定义一个统一的发送消息的方法，返回响应数据
function SendMessage(grettingMsg, responseFunc) {
    chrome.tabs.query({ active: true }, function(tab) {
        chrome.tabs.sendMessage(tab.id, { greeting: grettingMsg }, responseFunc);
    })
}
//定义一个统一的接收消息的方法
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        switch (response.gretting) {
            case "test":
                //Do something here
                sendResponse({ farewell: "test" });
                break;
            default:
                break;
        }
    })