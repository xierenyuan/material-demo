/**
 * main controller
 * @Class
 * @auther xierenhong
 * @date 16/4/21
 */
class MainController {
    constructor($scope, $mdToast, $mdDialog) {
        this.$scope = $scope;
        //注册服务
        this.$inject = ['$scope', '$mdToast', '$mdDialog'];
        this.$mdDialog = $mdDialog;
        this.$mdToast = $mdToast;
        this.sayHello();
    }

    sayHello() {
        var self = this;
        self.text = 'Hello Word';
        self.sayHello = function () {
            console.log('Hello word');
            var toast = self.$mdToast.simple()
                .textContent('Hello Word!')
                .position({
                    bottom: false,
                    top: true,
                    left: true,
                    right: true
                })
                .hideDelay(3000);
            self.$mdToast.show(toast);
        };

        self.alert = function (ev) {
            self.$mdDialog.show(
                self.$mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title('提示')
                    .textContent('hello angular .')
                    .ariaLabel('Alert Dialog Demo')
                    .ok('关闭!')
                    .targetEvent(ev)
            );
        }

    }
}

export default MainController;
