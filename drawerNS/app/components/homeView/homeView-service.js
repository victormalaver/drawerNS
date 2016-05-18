console.log("homeView-service.js");

var fetchModule = require("fetch");
var configApiUrl = "https://api.everlive.com/v1/w5lgy8j8zqnblqj5/"; 



function User() {
    viewModel.login = function() {
        return fetchModule.fetch(configApiUrl + "oauth/token", {
                                     method: "POST",
                                     body: JSON.stringify({
                                                              username: viewModel.get("email"),
                                                              password: viewModel.get("password"),
                                                              grant_type: "password"
                                                          }),
                                     headers: {
                "Content-Type": "application/json"
            }
                                 })
            .then(handleErrors)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                alert(data.Result.access_token);
            });
    };
    
    
	return viewModel;
}

function handleErrors(response) {
    if (!response.ok) {
        console.log(JSON.stringify(response));
        throw Error(response.statusText);
    }
    return response;
}

module.exports = User;