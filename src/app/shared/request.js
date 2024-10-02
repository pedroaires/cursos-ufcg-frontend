
app.factory('request', function($http) {
    const backendUrl = 'http://150.165.85.100:5000/';
    return function(resource, data={}) {
        return $http({
            url: backendUrl + resource,
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
