'use strict';

var frameModule = require("ui/frame");
var viewModule = require("ui/core/view");
var email;

var Observable = require("data/observable").Observable;

var user = new Observable({
                              email: "user@domain.com",
                              password: "password"
                          });

var isInit = true,
    helpers = require('../../utils/widgets/helper'),
// additional requires
    viewModel = require('./homeView-view-model');


//ERRORRRRRRRRRRRRRRRRRRRRRRRRRRRR dont call
var UserViewModel = require("./homeView-service");
var user = new UserViewModel();

// additional functions
function pageLoaded(args) {
    console.log("pageLoaded");
    var page = args.object;
    
    helpers.platformInit(page);
    page.bindingContext = viewModel;
    // additional pageLoaded
    
    email = viewModule.getViewById(page, "email");
    
    if (isInit) {
        isInit = false;
        // additional pageInit
    }
}

exports.signIn = function() {
    console.log("Signing in");
    console.log(email.text);
};

exports.register = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("components/register/register");
};

// START_CUSTOM_CODE_homeView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_homeView
exports.pageLoaded = pageLoaded;