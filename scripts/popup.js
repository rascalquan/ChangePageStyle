'use strict';
jQuery(function ($) {
    var selectorDataSource;
    getAllSelector();
    $("#mainGrid").kendoGrid({
        columns: [{
            field: "dataId",
            hidden: true
        },
        { field: "selectorField", title: "Selector", editor: selectorAutoCompleteEditor, width: "120px" },
        { field: "attrKey", title: "Attribute", editor: attrKeyAutoCompleteEditor, width: "120px" },
        { field: "attrValue", title: "AttrValue", editor: attrValueAutoCompleteEditor, width: "120px" },
        { field: "activeRange", title: "Range", editor: rangeDropdownListEditor, width: "100px" },
        { field: "forever", title: "Forever", editor: foreverCheckBoxEditor, width: "80px" },
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
        edit: gridEdit,
        //remove: gridDestroy
    });
    //初始化通知条
    var notice = $("#myNotification").kendoNotification({
        autoHideAfter: 2500,
        animation: {
            open: {
                effects: "slideIn:left"
            },
            close: {
                effects: "slideIn:left",
                reverse: true
            }
        },
        position: {
            pinned: true,
            top: 70,
            left: null,
            bottom: null,
            right: 20
        }
    }).data("kendoNotification")
    initFace();
    initEvent();

    function selectorAutoCompleteEditor(container, options) {
        $('<input  required data-bind="value:' + options.field + '"/>')
            .appendTo(container)
            .kendoAutoComplete({
                dataSource: selectorDataSource,
                suggest: true,
                ignoreCase: true,
                highlightFirst: false,
                height: 120,
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
            })
            .kendoValidator({
                message: {
                    required: "selector is required!"
                },
                validateOnBlur: true
            });
    }

    function attrKeyAutoCompleteEditor(container, options) {
        $('<input required  data-bind="value:' + options.field + '"/>')
            .appendTo(container)
            .kendoAutoComplete({
                dataSource: propertyKeyValues,
                dataTextField: "propertyKey",
                dataValueField: "propertyKey",
                pageSize: 20,
                suggest: true,
                ignoreCase: true,
                highlightFirst: false,
                height: 70,
                animation: {
                    open: {
                        effects: "fadeIn zoom:in",
                        duration: 300
                    },
                    close: {
                        effects: "fadeOut zoom:out",
                        duration: 300
                    }
                },
                change: function (e) {
                    var propertyKey = this.value();
                    var dataSource = new kendo.data.DataSource({
                        data: propertyKeyValues.find(getObjInArray).propertyValue
                    });
                    $(".k-grid-edit-row>td:eq(3) :input").data("kendoAutoComplete").setDataSource(dataSource.options.data);

                    function getObjInArray(element) {
                        return element.propertyKey == propertyKey;
                    }
                }
            });
    }

    function attrValueAutoCompleteEditor(container, options) {
        $('<input  required data-bind="value:' + options.field + '"/>')
            .appendTo(container)
            .kendoAutoComplete({
                //dataSource: ["color", "border", "background"],
                suggest: true,
                ignoreCase: true,
                highlightFirst: false,
                height: 70,
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
            })
            .kendoValidator({
                message: {
                    required: "attrValue is required!"
                },
                validateOnBlur: true
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

    function foreverCheckBoxEditor(container, options) {
        $('<input  type="checkbox"  data-bind="checked:' + options.field + '"/>')
            .appendTo(container);
    }
    //grid读取数据
    function gridRead(options) {
        console.log("begin read");
        getCurrentTabUrl(function (url) {
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
        getCurrentTabUrl(function (url) {
            var attrName = "StyleData_" + url;
            localStorage[attrName] = JSON.stringify(getAllGridData()); //保存到本地
        })
    }
    //grid更新数据
    function gridUpdate(options) {
        console.log("begin Update");
        var data = getGridData(options);
        options.success(data);
        getCurrentTabUrl(function (url) {
            var attrName = "StyleData_" + url;
            localStorage[attrName] = JSON.stringify(getAllGridData()); //保存到本地
        })
    }
    //grid删除数据
    function gridDestroy(e) {
        getCurrentTabUrl(function (url) {
            var attrName = "StyleData_" + url;
            var allData = getAllGridData();
            if (typeof allData !== "undefined") {
                localStorage[attrName] = JSON.stringify(allData);
            } else {
                delete localStorage[attrName];
            }
        })
    }
    //点击grid编辑
    function gridEdit(e) {
        //保存前验证栏位
        $(".k-grid-update").on("click", function (event) {
            console.log("btnUpdate click");
            event.preventDefault();
            var validator = $("#mainForm").kendoValidator().data("kendoValidator");
            if (validator.validate() === false) {
                //显示提示信息
                notice.show(">_<||| 有些栏位验证出错了，我也不知道是哪个 >_<|||", "warning");
                return false;
            }
        });
    }
    //获取grid当前行数据
    function getGridData(options) {
        var thisData = {
            dataId: options.data.dataId == "" ? generateUUID() : options.data.dataId,
            selectorField: options.data.selectorField,
            attrKey: options.data.attrKey.propertyKey,
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
        chrome.tabs.query(queryInfo, function (tabs) {
            var tab = tabs[0];
            var url = tab.url;
            callback(url);
        });
    }

    //生成UUID
    function generateUUID() {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
        });
        return uuid;
    };

    function initFace() {
        $(".k-filter-row th, .k-grid-header th.k-header").css("text-align", "center");
    };

    function initEvent() {
        console.log("begin initEvent");
        $("#mainForm").kendoValidator({
            validate: function (e) {
                console.log("valid" + e.valid);
            }
        });
    };
    //获取所有selector
    function getAllSelector() {
        console.log('begin getAllSelector');
        var data = new Array();
        var bg = chrome.extension.getBackgroundPage(); //获取background页面
        bg.SendMessage("Selector", function (response) {
            if (typeof response !== "undefined" && response !== null) {
                data=response.farewell.ids.concat(response.farewell.classNames).concat(response.farewell.tags).concat(response.farewell.others).sort();
            }
            console.log('end getAllSelector,data:'+data.join(','));
            selectorDataSource=data;
        })
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