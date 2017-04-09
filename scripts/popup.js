'use strict';
jQuery(function($) {
    $("#mainGrid").kendoGrid({
        columns: [{
                field: "dataId",
                hidden: true
            },
            { field: "selectorField", title: "选择器" },
            //{ field: "attrKey", title: "属性", editor: attrKeyDropDownEditor, template: ["border", "background", "color"] },
            { field: "attrKey", title: "属性" },
            { field: "attrValue", title: "属性值" },
            { field: "activeRange", title: "生效范围" },
            {
                field: "isAwaysActive",
                title: "永久生效",
                //template: "<input type='radio' name='isAwaysActive' value='false' checked='#=(isAwaysActive==false)#'>一次<input type='radio' name='isAwaysActive' value='true' checked='#=(isAwaysActive==true)#'>永久",
                width: "150px"
            },
            {
                command: [
                    { name: "destroy", text: "删除" }
                ],
                title: "操作",
                width: "120px"
            }
        ],
        dataSource: {
            transport: {
                read: gridRead,
                update: gridUpdate,
                destroy: gridDestroy,
                create: gridCreate
            },
            // data: [{ dataId: "1", selectorField: "#maindiv", attrKey: "border", attrValue: "1px", activeRange: 0, isAwaysActive: false },
            //     { dataId: "2", selectorField: "#maindiv", attrKey: "border", attrValue: "1px", activeRange: 0, isAwaysActive: true },
            //     { dataId: "3", selectorField: "#maindiv", attrKey: "border", attrValue: "1px", activeRange: 0, isAwaysActive: false }
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
                        isAwaysActive: {
                            type: "boolean",
                            defaultValue: false,
                            validation: { required: true }
                        }
                    }

                }
            }
        },
        toolbar: [{ name: "create", text: "新增" }],
        editable: true,
        sortable: true,
        //height: "300px"
        save: gridSave,
        //edit: gridUpdate,
        remove: gridDestroy
    });
    // var viewModel = kendo.observable({
    //     onsave: function(e) {
    //         console.log("begin save.");
    //     },
    //     datasource: new kendo.data.DataSource({
    //         data: [{ selectorField: "#maindiv", attrKey: "border", attrValue: "1px", activeRange: 0, isAwaysActive: false },
    //             { selectorField: "#maindiv", attrKey: "border", attrValue: "1px", activeRange: 0, isAwaysActive: true },
    //             { selectorField: "#maindiv", attrKey: "border", attrValue: "1px", activeRange: 0, isAwaysActive: false }
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
    //                     isAwaysActive: {
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

    function attrKeyDropDownEditor(container, options) {
        $('<input required data-text-field="attrKey" data-value-field="attrKey" data-bind="value:' + options.field + '"/>')
            .appendTo(container)
            .kendoDropDownList({
                autoBind: false,
                dataSource: {
                    type: "odata",
                    transport: {
                        read: ""
                    }
                }
            });
    }

    function gridSave(e) {
        var data = {
            dataId: e.model.dataId == "" ? generateUUID() : e.model.dataId,
            selectorField: e.model.selectorField,
            attrKey: e.model.attrKey,
            attrValue: e.model.attrValue,
            activeRange: e.model.activeRange,
            isAwaysActive: Boolean(e.model.isAwaysActive)
        }
        getCurrentTabUrl(function(url) {
            if (typeof localStorage["StyleData"] !== "undefined" &&
                typeof localStorage["StyleData"][url] !== "undefined") {
                localStorage["StyleData"][url][data.dataId] = data; //保存到本地

            } else if (typeof localStorage["StyleData"] !== "undefined") {
                localStorage["StyleData"][url] = { a: { a: "a" } };
                localStorage["StyleData"][url][data.dataId] = data;
                delete localStorage["StyleData"][url]["a"];
            } else {
                localStorage["StyleData"] = { a: { a: "a" } };
                localStorage["StyleData"][url] = { a: { a: "a" } };
                localStorage["StyleData"][url][data.dataId] = data;
                delete localStorage["StyleData"]["a"]["a"];
                delete localStorage["StyleData"][url]["a"];
            }
        })
    }

    function gridUpdate(e) {
        console.log("begin Update");
    }

    function gridDestroy(e) {
        getCurrentTabUrl(function(url) {
            delete localStorage["StyleData"][url][e.model.dataId];
        })
    }

    function gridCreate(e) {
        console.log("begin Create");
    }

    function gridRead(options) {
        debugger;
        console.log("begin read");
        getCurrentTabUrl(function(url) {
            if (typeof localStorage["StyleData"] !== "undefined" &&
                typeof localStorage["StyleData"][url] !== "undefined") {
                var datas = localStorage["StyleData"][url];
                options.success(datas);
            }
        })
    }

    function getCurrentTabUrl(callback) {
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

    function generateUUID() {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
        });
        return uuid;
    };
});