'use strict';
jQuery(function($) {
    //初始化grid
    $("#mainGrid").kendoGrid({
        dataSource: [{
                selectorField: "#maindiv",
                attrKey: "border",
                attrValue: "1px",
                activeRange: 0,
                isOneTime: 0
            },
            {
                selectorField: "#maindiv",
                attrKey: "border",
                attrValue: "1px",
                activeRange: 0,
                isOneTime: 0
            },
            {
                selectorField: "#maindiv",
                attrKey: "border",
                attrValue: "1px",
                activeRange: 0,
                isOneTime: 0
            }
        ]
    });
});