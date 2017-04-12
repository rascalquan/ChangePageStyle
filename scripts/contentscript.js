$(function() {
    //定义一个统一的接收消息的方法
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            switch (response.gretting) {
                case "Selector":
                    sendResponse({ farewell: getAllSelectors() });
                    break;
                default:
                    break;
            }
        })

    //定义一个统一的发送请求的方法
    function SendMessage(grettingMsg, sendData, responseFunc) {
        chrome.extension.sendMessage({ gretting: grettingMsg, data: sendData }, responseFunc);
    }

    function getAllSelectors() {
        var allIds = new Array();
        var allClassNames = new Array();
        var tempArray = new Array();
        $("body").find("[id]").each(function() {
            tempArray.push("#" + this.id);
        });
        allIds = tempArray.sort();
        tempArray.length = 0;
        $("body").find("[class]").each(function() {
            this.className.split(" ").foreach(function(ele) {
                tempArray.push("." + ele);
            });
        });
        allClassName = Array.from(new set(tempArray)).sort();
        var otherSelector = otherSelectors.sort();
        var allSelectors = { ids: allIds, classNames: allClassNames, others: otherSelector };
        return allSelectors;
    }

    var otherSelectors = [
        ":first",
        ":not",
        ":even",
        ":odd",
        ":eq",
        ":gt",
        ":lt",
        "lang",
        ":last",
        ":header",
        ":animated",
        ":focus",
        ":root",
        ":target",
        ":contains",
        ":empty",
        ":has",
        ":parent",
        ":hidden",
        ":visible",
        ":first-child",
        ":first-of-type",
        ":last-child",
        "last-of-type",
        ":nth-child",
        ":nth-last-child",
        ":nth-last-of-type",
        ":nth-of-type",
        ":only-child",
        ":only-of-type",
        ":input",
        ":text",
        ":password",
        ":radio",
        ":checkbox",
        ":submit",
        ":image",
        ":reset",
        ":button",
        ":file",
        ":enabled",
        ":disabled",
        ":checked",
        ":selected"
    ]
})