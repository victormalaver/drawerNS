'use strict';

var menuItems, 
    observable = require('data/observable'),
    navigationViewModel = new observable.Observable();

menuItems = [{
        "title": "Iniciar Sesión",
        "moduleName": "components/homeView/homeView",
        "icon": "\ue0dd" 
    },{
        "title": "Comprar",
        "moduleName": "components/homeView/homeView",
        "icon": "\ue0dd"
    },{
        "title": "Seguimiento",
        "moduleName": "components/homeView/homeView",
        "icon": "\ue0dd"
    },{
        "title": "Tiendas",
        "moduleName": "components/homeView/homeView",
        "icon": "\ue0dd"
    },{
        "title": "Cerrar Sesión",
        "moduleName": "components/homeView/homeView",
        "icon": "\ue0dd"
    }
]; 

navigationViewModel.set('menuItems', menuItems);
navigationViewModel.set('backButtonHidden', true);

module.exports = navigationViewModel;