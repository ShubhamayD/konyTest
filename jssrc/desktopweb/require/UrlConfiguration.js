define("UrlConfiguration", function() {
    return function(controller) {
        function addWidgetsUrlConfiguration() {
            this.setDefaultUnit(kony.flex.DP);
            var Label0h2c646b2ad5c44 = new kony.ui.Label({
                "id": "Label0h2c646b2ad5c44",
                "isVisible": true,
                "left": "316dp",
                "skin": "defLabel",
                "text": "URL CONFIGURATION",
                "top": "262dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            this.add(Label0h2c646b2ad5c44);
        };
        return [{
            "addWidgets": addWidgetsUrlConfiguration,
            "enabledForIdleTimeout": false,
            "id": "UrlConfiguration",
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