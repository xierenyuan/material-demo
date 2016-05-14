/**
 * home 模块配置
 * @Class
 * @auther xierenhong
 * @date 16/5/14
 */

import homeTmp from '../tmps/home.html';

class HomeConfig {

    static routerInit($stateProvider, $urlRouterProvider){
        'ngInject';
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: homeTmp,
            // controller: "HomeController as home"
        });

        //默认首页
        $urlRouterProvider.otherwise("/home");
    }

    constructor($stateProvider, $urlRouterProvider) {
       // 'ngInject';
        this.$inject = ['$stateProvider', '$urlRouterProvider'];
        this.$stateProvider = $stateProvider;
        this.$urlRouterProvider = $urlRouterProvider;
        this.routerInit();
    }

    /**
     * 初始化 路由
     */
    routerInit() {
        console.log('router init');
        this.$stateProvider.state('home', {
            url: '/home',
            templateUrl: homeTmp,
           // controller: "HomeController as home"
        });

        //默认首页
        this.$urlRouterProvider.otherwise("/home");
    }
}

export default HomeConfig.routerInit;