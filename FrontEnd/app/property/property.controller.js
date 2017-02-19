(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('propertyController', propertyController);

    propertyController.$inject = ['propertyFactory', 'toastr', '$stateParams', ];

    /* @ngInject */
    function propertyController(propertyFactory, toastr, $stateParams) {
        var pc = this;
        pc.title = 'propertyController';
        pc.htwoMessage = "Dummy testing forever!"







        ////////////////


        //I have injected stateParams on top and now I can read the values used in the search state input tags
        // then i saved those values in variables just to make it cleaner
        pc.searchProperties = function() {
            pc.city = $stateParams.searchCityString;
            pc.zip = $stateParams.searchZipString;
            pc.minRent = $stateParams.searchMinRentString;
            pc.maxRent = $stateParams.searchMaxRentString;
            console.log($stateParams);

            // then I passed the values on to the propertyFactory method that makes the http request
            propertyFactory.getSearchedProperties(pc.city, pc.zip, pc.minRent, pc.maxRent).then(
                function(response) {
                    /// I save the response here, then I can access this response on the property.detail.html
                    pc.propertyResponse = response.data;

                    console.log(response);
                    toastr.success('We have items!!');

                },
                function(error) {
                    if (error.data) {
                        toastr.error('There was a problem: ' + error.data);
                    } else {
                        toastr.info('no data found  ');
                    }

                }
            )


        }

        pc.searchProperties();

    }
})();
