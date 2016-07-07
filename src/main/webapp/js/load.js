var dataUserLogin;
function Login(userId, mainEmail, displayName) {
	this.userId = userId;
	this.mainEmail = mainEmail;
	this.displayName = displayName;
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}

function disassociate() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.disconnect().then(function () {
        console.log('User disconnected from association with app.');
    });
}

function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log("Name: " + profile.getName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

     dataUserLogin = new Login(profile.getId(), profile.getEmail(), profile.getName());

    //alert("ID: " + profile.getId() +"\r\nName: " + profile.getName()+"\r\nImage URL: " + profile.getImageUrl()  +"\r\nEmail: " + profile.getEmail());
    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);

    // Initi gapi client
    gapiInit();
}

function gapiInit() {
    console.log('GAPI INIT...');

    // Step 4: Load the Google+ API
    var apiName = 'oauthmodelapi';
    var apiVersion = 'v1';
    var apiRoot = 'https://' + window.location.host + '/_ah/api';

    if (window.location.hostname == 'localhost'
            || window.location.hostname == '127.0.0.1'
            || ((window.location.port != "") && (window.location.port > 1023))) {
        // We're probably running against the DevAppServer
        apiRoot = 'http://' + window.location.host + '/_ah/api';
    }

    gapi.client.load(apiName, apiVersion, function() {
        console.log('GAPI LOADED!');
        saveUserBackend();
    }, apiRoot);
}

function saveUserBackend() {
    console.log(dataUserLogin);

    gapi.client.oauthmodelapi.saveUserDinamic(dataUserLogin).execute( function(resp) {
        console.log(resp);
        if (!resp.error) {
            console.log('Success!!!!!');
        } else if (resp.error) {
           console.log('ERRO: Warning ' + resp.error.message);
        }
        window.location.href = "/partials/home.html";
    });
}

// Call automatically log in
function loadin() {
    console.log('I am loadin.');
    gapi.load('auth2', function() {
        auth2 = gapi.auth2.getAuthInstance({
            client_id: '303213010663-lq91naqapi6l3etk9iq95qkp3v42t943.apps.googleusercontent.com',
            fetch_basic_profile: true,
            scope: 'profile'
        });
        // Sign the user in, and then retrieve their ID.
        auth2.signIn().then(function() {
            var profile = auth2.currentUser.get().getBasicProfile();
            console.log("MYY WOW: " + profile.getId()+"\r\nNamee: "+profile.getName()+"\r\nImage URL: " + profile.getImageUrl()  +"\r\nEmail: " + profile.getEmail());
        });
    });
}