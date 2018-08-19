define("Form1", function() {
    return function(controller) {
        function addWidgetsForm1() {
            this.setDefaultUnit(kony.flex.DP);
            var lblServices = new kony.ui.Label({
                "id": "lblServices",
                "isVisible": true,
                "left": "201dp",
                "skin": "CopydefLabel0h2869345eb8c4d",
                "text": "Services",
                "top": "107dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblBroadcastMessage = new kony.ui.Label({
                "id": "lblBroadcastMessage",
                "isVisible": true,
                "left": "200dp",
                "skin": "CopydefLabel0j4c2f0f5c78449",
                "text": "Broadcast message",
                "top": "298dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblReleaseVersion = new kony.ui.Label({
                "id": "lblReleaseVersion",
                "isVisible": true,
                "left": "198dp",
                "onTouchStart": controller.AS_Label_aa8f9eaf9fcf44718d2166e4ce500391,
                "skin": "defLabel",
                "text": "Paylah Release Version",
                "top": "235dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblUrlConfiguration = new kony.ui.Label({
                "id": "lblUrlConfiguration",
                "isVisible": true,
                "left": "194dp",
                "onTouchStart": controller.AS_Label_i5f6f93025c945f6bebecca2c14403ff,
                "skin": "defLabel",
                "text": "URL Configuration",
                "top": "175dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblAuditLog = new kony.ui.Label({
                "id": "lblAuditLog",
                "isVisible": true,
                "left": "202dp",
                "skin": "CopydefLabel0b753eb989f094d",
                "text": "Audit log",
                "top": "395dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            kony.mvc.registry.add('FBox0e119cfcd4cb943', 'FBox0e119cfcd4cb943', 'FBox0e119cfcd4cb943Controller');
            var Segment0c501b568ceec4f = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "Button0b1ba331e436a45": "Button",
                    "Label0b954b6eb7f6949": "2",
                    "Label0j06c3214cb7c4a": "1"
                }, {
                    "Button0b1ba331e436a45": "Button",
                    "Label0b954b6eb7f6949": "5",
                    "Label0j06c3214cb7c4a": "4"
                }, {
                    "Button0b1ba331e436a45": "Button",
                    "Label0b954b6eb7f6949": "8",
                    "Label0j06c3214cb7c4a": "7"
                }, {
                    "Button0b1ba331e436a45": "Button",
                    "Label0b954b6eb7f6949": "2",
                    "Label0j06c3214cb7c4a": "1"
                }],
                "groupCells": false,
                "height": "120dp",
                "id": "Segment0c501b568ceec4f",
                "isVisible": true,
                "left": "202dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "FBox0e119cfcd4cb943",
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "aaaaaa00",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "490dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "Button0b1ba331e436a45": "Button0b1ba331e436a45",
                    "Label0b954b6eb7f6949": "Label0b954b6eb7f6949",
                    "Label0j06c3214cb7c4a": "Label0j06c3214cb7c4a"
                },
                "width": "39.17%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            this.add(lblServices, lblBroadcastMessage, lblReleaseVersion, lblUrlConfiguration, lblAuditLog, Segment0c501b568ceec4f);
        };
        return [{
            "addWidgets": addWidgetsForm1,
            "enabledForIdleTimeout": false,
            "id": "Form1",
            "init": controller.AS_Form_ae96a9e158c340cc95bcb66e400e5579,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1200]
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});