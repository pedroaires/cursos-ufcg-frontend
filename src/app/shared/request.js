
app.factory('request', function($http) {
    const backendUrl = "BACKEND_URL"; // Placeholder to be replaced by the entrypoint script
    console.log("Using Backend: ", backendUrl)
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
