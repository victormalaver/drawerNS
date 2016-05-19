'use strict';

var frameModule = require('ui/frame');

function onBack() {
    // Android only
    var topmost = frameModule.topmost();

    topmost.goBack();
}

function onIndex() {
    //var topmost = frameModule.topmost();
    //topmost.navigate('navigation/navigation');
    var drawer = frameModule.topmost().getViewById("sideDrawer");
    drawer.toggleDrawerState();
}

exports.onBack = onBack;
exports.onIndex = onIndex; 