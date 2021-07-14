var emp = angular.module("employmentModule", []);

emp.controller("empController", function($scope){

    $scope.employment=[
        {Emp_Id:'#23741', Name:'Foo Bar', Doj:'23/09/2018', Post:'Project Manager', Level:'12', Mobile:'9999999999', Personal_mail:'foo.bar@yahoo.co.jp', office_mail:'bar.foo@example.co.jp', Dob:'14/03/1979', Blood_Group:'B+', Pan_No:'BH67564356', Aadhaar_No:'786423460918'},
          {Emp_Id:'#23742', Name:'Takao Suzuki', Doj:'10/12/2014', Post:'Service Delivery Manager', Level:'13', Mobile:'9999999888', Personal_mail:'takao.suzuki@yahoo.co.jp', office_mail:'suzuki.takao@example.co.jp', Dob:'30/11/1970', Blood_Group:'AB+', Pan_No:'KO904351', Aadhaar_No:'648204728108'},
          {Emp_Id:'#23701', Name:'Mano', Doj:'23/09/2018', Post:'Project Manager', Level:'12', Mobile:'9999999999', Personal_mail:'foo.bar@yahoo.co.jp', office_mail:'bar.foo@example.co.jp', Dob:'14/03/1979', Blood_Group:'B+', Pan_No:'BH67564356', Aadhaar_No:'786423460918'},
          {Emp_Id:'#23942', Name:'Raka', Doj:'10/12/2014', Post:'Service Delivery Manager', Level:'13', Mobile:'9999999888', Personal_mail:'takao.suzuki@yahoo.co.jp', office_mail:'suzuki.takao@example.co.jp', Dob:'30/11/1970', Blood_Group:'AB+', Pan_No:'KO904351', Aadhaar_No:'648204728108'}
    ]
});