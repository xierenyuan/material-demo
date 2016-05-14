/**
 * 启动
 * @Class
 * @auther xierenhong
 * @date 16/4/21
 */
import home from './_home/home.module';

require('./controller/controller');

let AppModule = angular.module('materialApp', ['ui.router', 'ngMaterial', 'materialApp.controller', home]);

AppModule.config(['$mdThemingProvider', ($mdThemingProvider)=> {
    //设置主题 primary accent warn background
    //$mdThemingProvider.theme('default');



}]);