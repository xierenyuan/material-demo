/**
 * 启动
 * @Class
 * @auther xierenhong
 * @date 16/4/21
 */
require('./controller/controller');

let AppModule = angular.module('materialApp', ['ngMaterial', 'materialApp.controller']);

AppModule.config(['$mdThemingProvider', ($mdThemingProvider)=> {
    //设置主题 primary accent warn background
    //$mdThemingProvider.theme('default');
}]);