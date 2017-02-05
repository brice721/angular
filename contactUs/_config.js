angular.module("contactUs")
    .config([
        "$routeProvider",
        "$httpProvider",
        "$locationProvider",
        function($routeProvider, $httpProvider, $locationProvider) {
            configureInterceptors();
            configureRoutes();

            function configureInterceptors() {
                $httpProvider.interceptor.push("PaceInterceptor");
            };

            function configureRoutes() {
                $routeProvider
                    .when("/",
                    {
                        templateUrl: "ContactUs.html",
                        controller: "contactUsController"
                    })
                    .otherwise({
                        redirectTo: "/"
                    });
            };
        }
    ])