angular.module('poll', ['ngResource']).
    factory('Poll', function($resource) {
        return $resource('', {}, {
        query: { method: 'GET', params: { pollId: 'polls' }, isArray: true }
    })
});