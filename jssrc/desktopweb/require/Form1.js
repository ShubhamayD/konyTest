define("Form1", function() {
    return function(controller) {
        function addWidgetsForm1() {
            this.setDefaultUnit(kony.flex.DP);
            var Calendar0fbd3c5b5452843 = new kony.ui.Calendar({
                "calendarIcon": "calbtn.png",
                "dateComponents": ["25", "8", "2018"],
                "dateFormat": "dd/MM/yyyy",
                "day": 25,
                "formattedDate": "25/08/2018",
                "height": "40dp",
                "hour": 22,
                "id": "Calendar0fbd3c5b5452843",
                "isVisible": true,
                "left": "149dp",
                "minutes": 14,
                "month": 8,
                "seconds": 49,
                "skin": "slCalendar",
                "top": "213dp",
                "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
                "width": "260dp",
                "year": 2018,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "noOfMonths": 1
            });
            var CopyCalendar0dfb5ddc741c940 = new kony.ui.Calendar({
                "calendarIcon": "calbtn.png",
                "dateComponents": ["25", "8", "2018"],
                "dateFormat": "dd/MM/yyyy",
                "day": 25,
                "formattedDate": "25/08/2018",
                "height": "40dp",
                "hour": 22,
                "id": "CopyCalendar0dfb5ddc741c940",
                "isVisible": true,
                "left": "149dp",
                "minutes": 14,
                "month": 8,
                "seconds": 49,
                "skin": "slCalendar",
                "top": "310dp",
                "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
                "width": "260dp",
                "year": 2018,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "noOfMonths": 1
            });
            this.add(Calendar0fbd3c5b5452843, CopyCalendar0dfb5ddc741c940);
        };
        return [{
            "addWidgets": addWidgetsForm1,
            "enabledForIdleTimeout": false,
            "id": "Form1",
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