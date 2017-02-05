angular.module("contactUs")
    .controller("contactUsController", function (
        $location,
        $scope,
        $window,
        $resource,
        $q,
        mtgUi,
        $uibModal,
        lodash,
        mtgSweetAlert,
        LongOperationHandlerPromise,
        moment,
        requestTrainingSvc
    ) {
        var vm = {
            category: "",
            name: "",
            phone: "",
            note: ""
        }

        function submitContactUsForm() {
            debugger;
            return mtgUi.activityWrapper({
                operationName: "Submit Contact Us Form",
                action: function () {
                    return contactUsSvc.contactUs(vm);
                },
                confirm: true,
                title: 'Contact Us',
                confirmMessage: 'Are you sure you want to contact request',
                successMessage: 'Request Successful',
                closeOnConfirm: true
            });

        }

        $scope.vm = vm;
        $scope.submitContactUsForm = submitContactUsForm;

    })