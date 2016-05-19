'use strict';

var sideDrawerModule = require("nativescript-telerik-ui-pro/sidedrawer");

var helpers = require('../utils/widgets/helper'),
    navigationViewModel = require('./navigation-view-model');

function pageLoaded(args) {
    var page = args.object;

    helpers.platformInit(page);
    page.bindingContext = navigationViewModel;
    //navigationViewModel.set('pageTitle', 'nativeScriptApp');
    navigationViewModel.set('backButtonHidden', false);
}

function menuItemTap(args) {
    helpers.navigate(navigationViewModel.menuItems[args.index]);
}

exports.pageLoaded = pageLoaded;
exports.menuItemTap = menuItemTap;