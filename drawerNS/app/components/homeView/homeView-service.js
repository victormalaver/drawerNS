function Service() {
    viewModel.login = function() {
        return fetchModule.fetch("https://api.everlive.com/v1/w5lgy8j8zqnblqj5/oauth/token", {
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
                config.token = data.Result.access_token;
            });
    };
}

// additional properties

// START_CUSTOM_CODE_homeView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_homeView

module.exports = new Service();