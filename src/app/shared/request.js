
app.factory('request', function($http) {

    return function(resource, data={}) {
        return $http({
            // url: 'http://analytics.ufcg.edu.br/pre/' + resource,
            url: 'http://localhost:5000/' + resource,
            method: 'GET',
            data: data,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function(resp) {
                return resp.data
            })
    }
})
