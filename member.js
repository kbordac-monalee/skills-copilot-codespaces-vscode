function skillsMember() {
    return {
        restrict: 'E',
        scope: {
            member: '=member'
        },
        templateUrl: 'modules/stills/views/member.html'
    };
}