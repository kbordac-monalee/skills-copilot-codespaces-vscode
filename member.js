function stillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'app/stills/member.html',
        controller: 'StillsMemberCtrl',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
        stills: '='
        }
    };
    }
