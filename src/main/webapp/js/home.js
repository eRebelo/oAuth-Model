function verify() {
    console.log("Hello World - Home");

    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!

    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
}

function loadin() {
    console.log('I am loadin.');

    gapi.load('auth2', function() {
        auth2 = gapi.auth2.getAuthInstance({
            client_id: '303213010663-lq91naqapi6l3etk9iq95qkp3v42t943.apps.googleusercontent.com',
            fetch_basic_profile: true,
            scope: 'profile'
        });

        auth2.then(function () {
          if (!auth2.isSignedIn.get()) {
            console.log("NOT LOGGED!");
            window.location.href = "/";
          } else {
            document.getElementById("showSignOut").style.display = "block";
            console.log("LOGGED!");
          }
        });
    });
}

function disassociate() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.disconnect().then(function () {
        console.log('User disconnected from association with app.');
         loadin();
    });
}

/*function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
        loadin();
    });
}*/