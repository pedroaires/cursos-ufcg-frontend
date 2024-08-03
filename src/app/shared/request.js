
app.factory('request', function($http) {

    return function(resource) {
        return $http({
            // url: 'http://analytics.ufcg.edu.br/pre/' + resource,
            url: 'http://localhost:5000/' + resource,
            method: 'GET'
        })
            .then(function(resp) {
                return resp.data
            })
    }
})
