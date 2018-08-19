define({
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("Form1", "Form1", "Form1Controller");
        kony.mvc.registry.add("UrlConfiguration", "UrlConfiguration", "UrlConfigurationController");
        kony.mvc.registry.add("frmPaylahReleaseVersion", "frmPaylahReleaseVersion", "frmPaylahReleaseVersionController");
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new kony.mvc.Navigation("Form1").navigate();
    }
});