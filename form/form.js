angular.module('app',[])
.controller('formctrl',function () {
    var vm = this;

    vm.submit = function (form) {
        console.log(form);
    }

});
