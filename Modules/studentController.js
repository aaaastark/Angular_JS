mainApp.controller("studentController",function($scope){
    $scope.student = {
        firstName: "Muhammad",
        lastName: "Allah Rakha",
        fees: 500,
        
        subjects:[
            {name: 'Physics', marks: 90},
            {name: 'Math', marks: 95},
            {name: 'Com', marks: 94},
            {name: 'Eng', marks: 93},
            {name: 'Urdu', marks: 92}  
        ],
        fullName: function(){
            var studentOject;
            studentOject = $scope.student;
            return studentOject.firstName + " " + studentOject.lastName;
        }
    };
});