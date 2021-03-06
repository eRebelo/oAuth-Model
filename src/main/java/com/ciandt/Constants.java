package com.ciandt;

import com.google.api.server.spi.Constant;

/**
 * Contains the client IDs and scopes for allowed clients consuming your API.
 */
public class Constants {
    public static final String WEB_CLIENT_ID = "303213010663-lq91naqapi6l3etk9iq95qkp3v42t943.apps.googleusercontent.com";
    public static final String ANDROID_CLIENT_ID = "replace this with your Android client ID";
    public static final String IOS_CLIENT_ID = "replace this with your iOS client ID";
    public static final String ANDROID_AUDIENCE = WEB_CLIENT_ID;
    /*public static final String EMAIL_SCOPE = "https://www.googleapis.com/auth/userinfo.email";*/
    public static final String EMAIL_SCOPE = Constant.API_EMAIL_SCOPE;
    public static final String API_EXPLORER_CLIENT_ID = Constant.API_EXPLORER_CLIENT_ID;


}
