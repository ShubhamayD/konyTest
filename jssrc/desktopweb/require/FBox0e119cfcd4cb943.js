define("FBox0e119cfcd4cb943", function() {
    return function(controller) {
        FBox0e119cfcd4cb943 = new kony.ui.FlexContainer({
            "clipBounds": false,
            "height": "40dp",
            "id": "FBox0e119cfcd4cb943",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "width": "100%"
        }, {
            "containerWeight": 100
        }, {});
        FBox0e119cfcd4cb943.setDefaultUnit(kony.flex.DP);
        var Label0j06c3214cb7c4a = new kony.ui.Label({
            "id": "Label0j06c3214cb7c4a",
            "isVisible": true,
            "left": "22dp",
            "skin": "defLabel",
            "text": "Label",
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "containerWeight": 100,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "hExpand": true,
            "margin": [1, 1, 1, 1],
            "marginInPixel": false,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false,
            "vExpand": false,
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER
        }, {});
        var Label0b954b6eb7f6949 = new kony.ui.Label({
            "id": "Label0b954b6eb7f6949",
            "isVisible": true,
            "left": "141dp",
            "skin": "defLabel",
            "text": "Label",
            "top": "2dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "containerWeight": 100,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "hExpand": true,
            "margin": [1, 1, 1, 1],
            "marginInPixel": false,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false,
            "vExpand": false,
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER
        }, {});
        var Button0b1ba331e436a45 = new kony.ui.Button({
            "focusSkin": "defBtnFocus",
            "height": "24dp",
            "id": "Button0b1ba331e436a45",
            "isVisible": true,
            "left": "410dp",
            "onClick": controller.AS_Button_c7a96b429cb4489783521db94e05ce5b,
            "skin": "defBtnNormal",
            "text": "Button",
            "top": "7dp",
            "width": "60dp",
            "zIndex": 1
        }, {
            "containerWeight": 100,
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "hExpand": true,
            "margin": [6, 6, 6, 6],
            "marginInPixel": false,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false,
            "vExpand": false,
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER
        }, {});
        FBox0e119cfcd4cb943.add(Label0j06c3214cb7c4a, Label0b954b6eb7f6949, Button0b1ba331e436a45);
        return FBox0e119cfcd4cb943;
    }
})