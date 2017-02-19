(function() {
    'use strict';

    angular
        .module('myApp', ['toastr', 'ui.router', 'LocalStorageModule', 'ngFileUpload'])
        .value('ApiUrl', 'http://localhost:58848/api/')

    .config(function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise("/CustomSearch");

            $stateProvider
                .state('CustomSearch', {
                    url: "/CustomSearch",
                    templateUrl: "app/search/search.html",
                    controller: "searchController",
                    controllerAs: "vm"

                })
                //
                // The params go on the details page and save in variables
                // the variables will be passed from the searchController to the propertyController
                // these variables can be accessed via $stateParams.[varaible name] e.g $stateParams.searchCityString
                // params default value is an empty string like this ''  ...because that will be their default value in case someone doest type in a value and hits the search button
                ///
                .state('details', {
                    url: "/details",
                    templateUrl: "app/property/property.detail.html",
                    controller: "propertyController",
                    controllerAs: "pc",
                    params: {
                        searchCityString: '',
                        searchZipString: '',
                        searchMinRentString: '',
                        searchMaxRentString: ''
                    } //end of params
                })
                //-----------------------------------------------------------
                //-----------------------------------------------------------
                //-----------------------------------------------------------
                //-----------------------------------------------------------
                //Nested states and multiview states ..... just for practice, don't pay attention to this
                .state('CustomSearch.sign', {
                    url: "/sign",

                    views: {
                        '': { templateUrl: "app/search/signIn.html" },
                        'columnOne@CustomSearch.sign': { template: 'Look I am columnOne!' },
                        'columnTwo@CustomSearch.sign': { templateUrl: "app/property/property.grid.html" }
                    }


                });
            //-----------------------------------------------------------
            //-----------------------------------------------------------
            //-----------------------------------------------------------
            //-----------------------------------------------------------
            //-----------------------------------------------------------
            //-----------------------------------------------------------
        }
        //------------

    );
})();
