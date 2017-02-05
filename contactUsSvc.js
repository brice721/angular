(function () {
    var app = angular.module("contactUs")
        .factory("contactUsSvc",
        [
            "$http", "$q", "lodash", "ServerErrorAlertHandler", function ($http,
                $q,
                lodash,
                serverErrorAlertHandler) {

                // Being that it is just a modal Im not sure I have the endpoints correct.
                var apiEndpoints = {
                    dashboard: "/contactUs"
                };
                var serviceDefinition = {
                    contactUs: contactUs
                };
                return serviceDefinition;

                function contactUs(contactData) {
                    var postData = contactData;
                    debugger;
                    return $http.post(apiEndpoints.contactUs, postData)
                        .then(function (result) {
                            return result.data;
                        }, onError);
                }

                function onError() {
                    serverErrorAlertHandler("Error");
                }
            }
        ]);
})