(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('propertyFactory', propertyFactory);

    propertyFactory.$inject = ['$http', '$q', 'ApiUrl'];

    /* @ngInject */
    function propertyFactory($http, $q, ApiUrl) {
        var service = {
            getSearchedProperties: getSearchedProperties,
            getSpecificProperty: getSpecificProperty,
            createProperty: createProperty
        };
        return service;


        //========================

        function createProperty(data) {
            //---------------------
            var defer = $q.defer();

            $http({
                method: 'POST',
                url: ApiUrl + 'Properties',
                data: data

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




        //=========================



        ////////////////
        //get method with search property & form

        //Factory needs to be setup properly, check for syntax errors and Typos....
        function getSearchedProperties(searchCity, searchZip, searchMinRent, searchMaxRent) {
            var defer = $q.defer();

            $http({
                method: 'GET',
                url: ApiUrl + "Properties/Filter",
                headers: {
                    "Content-Type": "application/json",
                    "charset": "utf-8"
                },
                params: {
                    'city': searchCity,
                    'zip': searchZip,
                    'minRent': searchMinRent,
                    'maxRent': searchMaxRent

                }





            }).then(function(response) {
                console.log(searchZip);
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
        //---------------------------
        function getSpecificProperty(ID) {
            var defer = $q.defer();

            $http({
                method: 'GET',
                url: ApiUrl + "Properties",
                headers: {
                    "Content-Type": "application/json",
                    "charset": "utf-8"
                },
                params: {
                    id: ID
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

        //--------------------------
        //
    }
})();
