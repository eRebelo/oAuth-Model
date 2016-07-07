package com.ciandt.spi;

/**
 * Created by rebelo on 14/01/2016.
 */

import com.ciandt.Constants;
import com.ciandt.domain.Login;
import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;

import static com.ciandt.service.OfyService.ofy;

@Api(name = "oauthmodelapi", version = "v1", scopes = {Constants.EMAIL_SCOPE}, clientIds = {Constants.WEB_CLIENT_ID,
        Constants.API_EXPLORER_CLIENT_ID}, description = "API for the Conference Central Backend application.")
public class oAuthAPI {


    // Get the display name from the user's email
    private static String extractDefaultDisplayNameFromEmail(String email) {
        return email == null ? null : email.substring(0, email.indexOf("@"));
    }

    @ApiMethod(name = "saveUserDinamic", path = "save-user-dinamic", httpMethod = ApiMethod.HttpMethod.POST)
    public Login saveUserDinamic(Login logUser) {
        Login newUser = ofy().load().type(Login.class).id(logUser.getUserId()).now();
        if (newUser == null) {
            // Create new user
            newUser = new Login(logUser.getUserId(), logUser.getMainEmail(), logUser.getDisplayName());
        } else {
            // Update Name
            newUser.setDisplayName(logUser.getDisplayName());
        }
        ofy().save().entity(newUser).now();
        return newUser;
    }
}