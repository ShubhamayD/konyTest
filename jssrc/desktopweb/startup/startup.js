//startup.js file
var appConfig = {
    appId: "Sample",
    appName: "Sample",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.23.1",
    serverPort: "80",
    secureServerPort: "443",
    isMFApp: false,
    eventTypes: [],
    url: null,
    secureurl: null,
    middlewareContext: "Sample"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        isMVC: true,
        responsive: true,
        retainSpaceOnHide: true,
        APILevel: 8100
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    requirejs.config({
        baseUrl: kony.appinit.getStaticContentPath() + "desktopweb/appjs"
    });
    var requireModulesList = getSPARequireModulesList();
    require(requireModulesList, function() {
        applicationController = require("applicationController");
        callAppMenu();
        kony.application.setApplicationInitializationEvents({
            init: applicationController.appInit,
            showstartupform: function() {
                var startForm = new kony.mvc.Navigation("Form1");
                startForm.navigate();
            }
        });
    });
};

function loadResources() {
    kony.theme.packagedthemes(
        ["default"]);
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        eventTypes: []
    }
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //If default locale is specified. This is set even before any other app life cycle event is called.
    loadResources();
};
									function getSPARequireModulesList(){ return ['kvmodules']; }
								