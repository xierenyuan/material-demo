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
}

export default HomeConfig.routerInit;