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
                    { name: "edit", text: "Edit" },
                    { name: "destroy", text: "Delete" }
                ],
                title: "操作",
                width: "200px"
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
            //     { dataId: "2", selectorField: "#maindiv", attrKey: "border", attrValue: "1px", activeRange: 0, isAwaysActive: true }
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
        toolbar: [{ name: "create", text: "Add" }],
        editable: "inline",
        sortable: true,
        //height: "300px"
        //save: gridSave,
        //edit: gridUpdate,
        //remove: gridDestroy
    });
    initFace();

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
            isAwaysActive: Boolean(options.data.isAwaysActive)
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
});