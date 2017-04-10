'use strict';
jQuery(function($) {

    $("#mainGrid").kendoGrid({
        columns: [{
                field: "dataId",
                hidden: true
            },
            { field: "selectorField", title: "Selector", width: "100px" },
            { field: "attrKey", title: "Attribute", editor: attrKeyAutoCompleteEditor, width: "120px" },
            { field: "attrValue", title: "AttrValue", editor: attrValueAutoCompleteEditor, width: "120px" },
            { field: "activeRange", title: "Range", editor: rangeDropdownListEditor, width: "100px" },
            {
                field: "forever",
                title: "Forever",
                //template: "<input type='radio' name='forever' value='false' checked='#=(forever==false)#'>一次<input type='radio' name='forever' value='true' checked='#=(forever==true)#'>永久",
                width: "80px"
            },
            {
                command: [
                    { name: "edit", text: "Edit" },
                    { name: "destroy", text: "Delete" }
                ],
                title: "Operate",
                width: "180px"
            }
        ],
        dataSource: {
            transport: {
                read: gridRead,
                update: gridUpdate,
                destroy: gridDestroy,
                create: gridCreate
            },
            // data: [{ dataId: "1", selectorField: "#maindiv", attrKey: "border", attrValue: "1px", activeRange: 0, forever: false },
            //     { dataId: "2", selectorField: "#maindiv", attrKey: "border", attrValue: "1px", activeRange: 0, forever: true }
            // ],
            schema: {
                model: {
                    id: "dataId",
                    field: {
                        dataId: {
                            type: "string"
                        },
                        selectorField: {
                            type: "string",
                            validation: { required: true }
                        },
                        attrValue: {
                            type: "string",
                            validation: { required: true }
                        },
                        attrValue: {
                            type: "string",
                            validation: { required: true }
                        },
                        activeRange: {
                            type: "string",
                            validation: { required: true }
                        },
                        forever: {
                            type: "boolean",
                            defaultValue: false,
                            validation: { required: true }
                        }
                    }

                }
            }
        },
        toolbar: [{ name: "create", text: "Add" }],
        editable: "inline",
        sortable: true,
        //height: "300px"
        //save: gridSave,
        //edit: gridUpdate,
        //remove: gridDestroy
    });
    initFace();

    function attrKeyAutoCompleteEditor(container, options) {
        $('<input required  data-bind="value:' + options.field + '"/>')
            .appendTo(container)
            .kendoAutoComplete({
                dataSource: ["align-content",
                    "align-items", "align-self", "all", "animation", "animation-delay", "animation-direction",
                    "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name",
                    "animation-play-state", "animation-timing-function", "backface-visibility", "background",
                    "background-attachment", "background-blend-mode", "background-clip", "background-color",
                    "background-image", "background-origin", "background-position", "background-repeat",
                    "background-size", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius",
                    "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse",
                    "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice",
                    "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style",
                    "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style",
                    "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color",
                    "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width",
                    "border-width", "bottom", "box-shadow", "box-sizing", "caption-side", "clear", "clip", "color",
                    "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style",
                    "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment",
                    "counter-reset", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis",
                    "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "font", "@font-face",
                    "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant",
                    "font-weight", "hanging-punctuation", "height", "justify-content", "@keyframes", "left", "letter-spacing",
                    "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin",
                    "margin-bottom", "margin-left", "margin-right", "margin-top", "max-height", "max-width", "@media",
                    "min-height", "min-width", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "opacity",
                    "order", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow",
                    "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top",
                    "page-break-after", "page-break-before", "page-break-inside", "perspective", "perspective-origin",
                    "position", "quotes", "resize", "right", "tab-size", "table-layout", "text-align", "text-align-last",
                    "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-indent",
                    "text-justify", "text-overflow", "text-shadow", "text-transform", "top", "transform", "transform-origin",
                    "transform-style", "transition", "transition-delay", "transition-duration", "transition-property",
                    "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "white-space", "width",
                    "word-break", "word-spacing", "word-wrap", "z-index"
                ],
                pageSize: 20,
                suggest: true,
                ignoreCase: true,
                highlightFirst: false,
                height: "200px",
                animation: {
                    open: {
                        effects: "fadeIn zoom:in",
                        duration: 300
                    },
                    close: {
                        effects: "fadeOut zoom:out",
                        duration: 300
                    }
                }
            });
    }

    function attrValueAutoCompleteEditor(container, options) {
        $('<input required  data-bind="value:' + options.field + '"/>')
            .appendTo(container)
            .kendoAutoComplete({
                dataSource: ["color", "border", "background"],
                suggest: true,
                ignoreCase: true,
                highlightFirst: false,
                height: "100px",
                animation: {
                    open: {
                        effects: "fadeIn zoom:in",
                        duration: 300
                    },
                    close: {
                        effects: "fadeOut zoom:out",
                        duration: 300
                    }
                }
            });
    }

    function rangeDropdownListEditor(container, options) {
        $('<input required  data-bind="value:' + options.field + '"/>')
            .appendTo(container)
            .kendoDropDownList({
                dataSource: ["当前", "同级", "同域", "全部"],
                animation: {
                    open: {
                        effects: "fadeIn zoom:in",
                        duration: 300
                    },
                    close: {
                        effects: "fadeOut zoom:out",
                        duration: 300
                    }
                }
            });
    }
    //grid读取数据
    function gridRead(options) {
        console.log("begin read");
        getCurrentTabUrl(function(url) {
            var attrName = "StyleData_" + url;
            if (typeof localStorage[attrName] !== "undefined") {
                var datas = JSON.parse(localStorage[attrName]);
                options.success(datas);
            }
        })
    }
    //grid添加数据
    function gridCreate(options) {
        var data = getGridData(options);
        options.success(data);
        getCurrentTabUrl(function(url) {
            var attrName = "StyleData_" + url;
            localStorage[attrName] = JSON.stringify(getAllGridData()); //保存到本地
        })
    }
    //grid更新数据
    function gridUpdate(options) {
        console.log("begin Update");
        var data = getGridData(options);
        options.success(data);
        getCurrentTabUrl(function(url) {
            var attrName = "StyleData_" + url;
            localStorage[attrName] = JSON.stringify(getAllGridData()); //保存到本地
        })
    }
    //grid删除数据
    function gridDestroy(e) {
        getCurrentTabUrl(function(url) {
            var attrName = "StyleData_" + url;
            var allData = getAllGridData();
            if (typeof allData !== "undefined") {
                localStorage[attrName] = JSON.stringify(allData);
            } else {
                delete localStorage[attrName];
            }
        })
    }
    //获取grid当前行数据
    function getGridData(options) {
        var thisData = {
            dataId: options.data.dataId == "" ? generateUUID() : options.data.dataId,
            selectorField: options.data.selectorField,
            attrKey: options.data.attrKey,
            attrValue: options.data.attrValue,
            activeRange: options.data.activeRange,
            forever: Boolean(options.data.forever)
        }
        return thisData;
    }
    //获取grid全部数据
    function getAllGridData() {
        var allData = $("#mainGrid").data("kendoGrid").dataSource.data();
        return allData;
    }
    //获取url
    function getCurrentTabUrl(callback) {
        var queryInfo = {
            active: true,
            currentWindow: true
        };
        chrome.tabs.query(queryInfo, function(tabs) {
            var tab = tabs[0];
            var url = tab.url;
            callback(url);
        });
    }

    //生成UUID
    function generateUUID() {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
        });
        return uuid;
    };

    function initFace() {
        $(".k-filter-row th, .k-grid-header th.k-header").css("text-align", "center");
    }
    //MVVM  暂时不用
    // var viewModel = kendo.observable({
    //     onsave: function(e) {
    //         console.log("begin save.");
    //     },
    //     datasource: new kendo.data.DataSource({
    //         data: [{ selectorField: "#maindiv", attrKey: "border", attrValue: "1px", activeRange: 0, forever: false },
    //             { selectorField: "#maindiv", attrKey: "border", attrValue: "1px", activeRange: 0, forever: true },
    //             { selectorField: "#maindiv", attrKey: "border", attrValue: "1px", activeRange: 0, forever: false }
    //         ],
    //         schema: {
    //             model: {
    //                 field: {
    //                     selectorField: {
    //                         type: "string",
    //                         validation: { required: true }
    //                     },
    //                     attrValue: {
    //                         type: "string",
    //                         validation: { required: true }
    //                     },
    //                     attrValue: {
    //                         type: "string",
    //                         validation: { required: true }
    //                     },
    //                     activeRange: {
    //                         type: "string",
    //                         validation: { required: true }
    //                     },
    //                     forever: {
    //                         type: "boolean",
    //                         defaultValue: false,
    //                         validation: { required: true }
    //                     }
    //                 }
    //             }
    //         }
    //     })
    // })
    // kendo.bind($("#mainGrid"), viewModel);
});