var CreateProductCtrl = function($scope, $location, $http, productData){

    // init to an empty object
    $scope.data = {};

    // Call the productData service's loadProducts method.
    // Pass it an anonymous function that will be
    // called back when the remote call to the backend
    // is successful.
    productData.loadProducts(function(data){
        $scope.data.products = data.products;
    });

    $scope.formData = {
        newProductTitle: '',
        newProductContents: ''
    };

    $scope.navNewProduct = function(){
        $location.url('/product/new');
    };

    $scope.navHome = function(){
        $location.url('');
    };

    $scope.createProduct = function(){
        productData.createProduct($scope.formData)
    }

    $scope.clearPost = function() {
        $scope.formData.newPostTitle = '';
        $scope.formData.newPostContents = '';
    }

    return productData;
};
