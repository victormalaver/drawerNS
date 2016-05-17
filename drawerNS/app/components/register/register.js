'use strict';
var frameModule = require("ui/frame");

var isInit = true,
    helpers = require('../../utils/widgets/helper'),
// additional requires
    viewModel = require('./homeView-view-model');

// additional functions
function pageLoaded(args) {
    console.log("pageLoaded");
    var page = args.object;

    helpers.platformInit(page);
    page.bindingContext = viewModel;
    // additional pageLoaded

    if (isInit) {
        isInit = false;
        // additional pageInit
    }
}

exports.signIn = function() {
    alert("Signing in");
};

exports.register = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("components/homeView/homeView");
};

// START_CUSTOM_CODE_homeView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_homeView
exports.pageLoaded = pageLoaded;