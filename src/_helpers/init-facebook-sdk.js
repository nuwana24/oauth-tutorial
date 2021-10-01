const facebookAppId = process.env.REACT_APP_FACEBOOK_APP_ID;

export function initFacebookSdk() {
    return new Promise((resolve) => {
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: facebookAppId,
                cookie: true,
                xfbml: true,
                version: "v12.0",
            });

            window.FB.getLoginStatus((response) => {
                if (response) {
                    console.log(response);
                    resolve();
                } else {
                    console.log(response);
                    resolve();
                }
            });
        };

        // load facebook sdk script
        (function (d, s, id) {
            var js,
                fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        })(document, "script", "facebook-jssdk");
    });
}

<script></script>;
