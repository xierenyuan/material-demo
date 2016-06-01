/**
 * controller
 * @Class
 * @auther xierenhong
 * @date 16/4/21
 */

import MainController from './main.controller';

import AppCtrl from './app.controller';

const AppController = angular.module('materialApp.controller', []);

AppController.controller('MainCtrl', MainController);
AppController.controller('AppCtrl', AppCtrl);


