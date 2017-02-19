(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('userFactory', userFactory);

    userFactory.$inject = ['$http', '$q', 'ApiUrl'];

    /* @ngInject */
    function userFactory($http, $q, ApiUrl) {
        var service = {
            createUser: createUser,
            getUsername: getUsername
        };
        return service;

        ////////////////


        function getUsername(name) {
            var defer = $q.defer();

            $http({
                method: 'GET',
                url: ApiUrl + "users/userName?userName=" + name,
                headers: {
                    "Content-Type": "application/json",
                    "charset": "utf-8"
                }



            }).then(function(response) {
                if (typeof response.data === 'object') {

                    defer.resolve(response);
                } else {

                    defer.reject('no data found :(');
                }

            }, function(error) {

                console.log(error);
                defer.reject(error);

            });

            return defer.promise;


        }
        //----------------------
        function createUser(Data) {
            var defer = $q.defer();

            $http({
                method: 'POST',
                url: ApiUrl + "Users",
                headers: {
                    "Content-Type": "application/json",
                    "charset": "utf-8"
                },

                data: Data



            }).then(function(response) {
                if (typeof response.data === 'object') {

                    defer.resolve(response);
                } else {

                    defer.reject('no data found :(');
                }

            }, function(error) {

                console.log(error);
                defer.reject(error);

            });

            return defer.promise;



            //--------
        }





    }
})();
