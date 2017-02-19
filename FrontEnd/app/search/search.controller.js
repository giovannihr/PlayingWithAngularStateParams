(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('searchController', searchController);

    searchController.$inject = ['propertyFactory', 'toastr', '$state'];

    /*   @ngInject
     */

    function searchController(propertyFactory, toastr, $state) {
        var vm = this;
        vm.title = 'searchController';
        vm.htwoMessage = "Dummy testing forever!"



        vm.goToDetailsState = function() {


            //on search.html I have ng-model on input tags and saved into 
            // vm.city, vm.zip, vm.minRent, vm.maxRent
            // this function is being call on button click and it passes input values to details state and propertyController

            $state.go("details", {
                searchCityString: vm.city,
                searchZipString: vm.zip,
                searchMinRentString: vm.minRent,
                searchMaxRentString: vm.maxRent
            });

        };



    }
})();
