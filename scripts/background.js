//定义一个统一的发送消息的方法，返回响应数据
function SendMessage(greetingMsg, responseFunc) {
    chrome.tabs.query({ active: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { greeting: greetingMsg },null, responseFunc);
    })
}
//定义一个统一的接收消息的方法
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        switch (request.greeting) {
            case "test":
                //Do something here
                sendResponse({ farewell: "test" });
                break;
            default:
                break;
        }
    })