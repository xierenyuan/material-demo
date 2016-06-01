/**
 *
 * @Class
 * @auther xierenhong
 * @date 16/6/1
 */

class AppController {
    constructor($scope, $mdSidenav, $log) {
        'ngInject';
        $mdSidenav('left')
            .toggle()
            .then(function () {
                $log.debug("toggle left is done");
            });
    }
}

export default AppController;