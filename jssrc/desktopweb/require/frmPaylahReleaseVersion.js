define("frmPaylahReleaseVersion", function() {
    return function(controller) {
        function addWidgetsfrmPaylahReleaseVersion() {
            this.setDefaultUnit(kony.flex.DP);
            var Browser0i3dcbc30164b42 = new kony.ui.Browser({
                "detectTelNumber": true,
                "enableZoom": false,
                "height": "900dp",
                "id": "Browser0i3dcbc30164b42",
                "isVisible": true,
                "left": "0dp",
                "requestURLConfig": {
                    "URL": "https://www.google.co.in/",
                    "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
                },
                "top": "0dp",
                "width": "100.00%",
                "zIndex": 1
            }, {}, {});
            this.add(Browser0i3dcbc30164b42);
        };
        return [{
            "addWidgets": addWidgetsfrmPaylahReleaseVersion,
            "enabledForIdleTimeout": false,
            "id": "frmPaylahReleaseVersion",
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