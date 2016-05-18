'use strict';

var frameModule = require("ui/frame");
var viewModule = require("ui/core/view");

var isInit = true,
    helpers = require('../../utils/widgets/helper');

//llamada al modelo
var viewModel = require('./homeView-view-model');

//llamada a los servicios
var UserViewModel = require("./homeView-service");
var user = new UserViewModel(); 

// additional functions
function pageLoaded(args) {
    console.log("pageLoaded");
    var page = args.object;
    helpers.platformInit(page);
    
    //page.bindingContext = viewModel;
    
    // additional pageLoaded
    
    if (isInit) {
        isInit = false;
        // additional pageInit
    }
}

exports.signIn = function() {
    console.log("Signing in");
    console.log(viewModel.email);
    user.login()
        .catch(function(error) {
            console.log(error);
            dialogsModule.alert({
                                    message: "Unfortunately we could not find your account.",
                                    okButtonText: "OK"
                                });
            return Promise.reject();
        })
        .then(function() {
            //frameModule.topmost().navigate("views/list/list");
            alert(789);
        });
};

exports.register = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("components/register/register");
};

// START_CUSTOM_CODE_homeView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_homeView
exports.pageLoaded = pageLoaded;