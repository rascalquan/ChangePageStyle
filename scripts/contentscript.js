$(function () {
    //定义一个统一的接收消息的方法
    chrome.runtime.onMessage.addListener(
        function (request, sender, sendResponse) {
            switch (request.greeting) {
                case "Selector":
                    sendResponse({ farewell: getAllSelectors() });
                    break;
                default:
                    break;
            }
        })

    //定义一个统一的发送请求的方法
    function SendMessage(greetingMsg, sendData, responseFunc) {
        chrome.extension.sendMessage({ greeting: greetingMsg, data: sendData }, responseFunc);
    }

    function getAllSelectors() {
        var allIds = new Array();
        var allClassNames = new Array();
        var tempIdArray = new Array();
        var tempClassArray = new Array();
        $("body").find("[id]").each(function () {
            tempIdArray.push("#" + this.id);
        });
        allIds = tempIdArray.sort();
        $("body").find("[class]").each(function () {
            this.className.split(" ").forEach(function (ele) {
                tempClassArray.push("." + ele);
            });
        });
        allClassNames = Array.from(new Set(tempClassArray)).sort();
        var otherSelector = otherSelectors.sort();
        var allSelectors = { ids: allIds, classNames: allClassNames,tags:allTags, others: otherSelector };
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
    ];
    var allTags = [
        "a",
        "abbr",
        "acronym",
        "address",
        "applet",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "base",
        "basefont",
        "bdi",
        "bdo",
        "big",
        "blockquote",
        "body",
        "br",
        "button",
        "canvas",
        "caption",
        "center",
        "cite",
        "code",
        "col",
        "colgroup",
        "command",
        "datalist",
        "dd",
        "del",
        "details",
        "dfn",
        "dialog",
        "dir",
        "div",
        "dl",
        "dt",
        "em",
        "embed",
        "fieldset",
        "figcaption",
        "figure",
        "font",
        "footer",
        "form",
        "frame",
        "frameset",
        "h",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "head",
        "header",
        "hr",
        "html",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "keygen",
        "label",
        "legend",
        "li",
        "link",
        "main",
        "map",
        "mark",
        "menu",
        "menuitem",
        "meta",
        "meter",
        "nav",
        "noframes",
        "noscript",
        "object",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "param",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "script",
        "section",
        "select",
        "small",
        "source",
        "span",
        "strike",
        "strong",
        "style",
        "sub",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "title",
        "tr",
        "track",
        "tt",
        "u",
        "ul",
        "var",
        "video",
        "wbr"
    ];
})