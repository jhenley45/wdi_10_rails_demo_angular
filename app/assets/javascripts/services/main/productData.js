// productData wraps a remote service that provides product data.
// It's used by controllers to get remote data
angular.module('StoreFront').factory('productData',['$http', function($http){

    // Init a the product data with heading
    var productData = {products: [
        { name: "Loading Products",description: "",price: '' }
    ]};

    // method to get all the products.
    productData.loadProducts = function(callback){
        $http.get('./products.json').success(function(data){
            // assign JSON from remote service.
            callback(data)
            console.log('Successfully loaded products');
        })
        .error(function(){
            console.log('Failed to load products');
        });
    };

    productData.loadProducts = function(){
        $http.get('./products.json').success(function(data){
            // assign JSON from remote service.
            productData.products = data.products;
            console.log('Successfully loaded products');
        })
        .error(function(){
            console.log('Failed to load products');
        });
    };

    // method to get one product by id.
    productData.loadProduct = function(productId, callback){
        $http.get('products/' + productId + '.json')
            .success(function(data){
                callback(data)
                console.log('Successfully loaded product ' + productId);
            })
            .error(function(){
                console.log('Failed to load product ' + productId);
            });
    }; // end of productData method

    productData.createProduct = function(newProduct){
        //Client-side data validation
        if (newProduct.newProductTitle == '' || newProduct.newProductContents == '') {
          alert('Neither the Title nor the Body are allowed to be left blank.');
          return false;
        };

        data = {
            new_product: {
                title: newProduct.newProductTitle,
                contents: newProduct.newProductContents
            }
        };

        $http.post('./products.json', data)
            .success(function(data){
                productData.products.push(data);
                console.log('Successfully created product')
            })
            .error(function(){
                console.log('failed to create new product')
            });
        return true;
    }

    return productData;
}]);


