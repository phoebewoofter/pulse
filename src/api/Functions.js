const Spotify = {
    async getAccessToken() {
        // Retrieve the token and expiration time from sessionStorage
        let token = sessionStorage.getItem("token");
        let expireTime = Number(sessionStorage.getItem("expireTime"));
    
        // Check if the token is not set or if it has expired
        if (!token || expireTime < new Date().getTime()) {
            const client_id = "84b572100dda404a8debfc4a94bda0f4";
    
            const redirect_uri = "http://localhost:3000";
    
            let scope = "playlist-modify-public";
    
            let url = "https://accounts.spotify.com/authorize";
            url += "?response_type=token";
            url += "&client_id=" + client_id;
            url += "&scope=" + encodeURIComponent(scope);
            url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
    
            // If so, redirect to the authorization URL
            window.location = url;
    
            // Extract the token and expiration time from the URL
            token = window.location.href.match(/access_token=([^&]*)/)[1];
            const expiresIn =
                window.location.href.match(/expires_in=([^&]*)/)[1];
    
            // Calculate the expiration time and store it in sessionStorage
            expireTime = new Date().getTime() + Number(expiresIn) * 1000;
            sessionStorage.setItem("expireTime", expireTime.toString());
    
            // Store the token in sessionStorage
            sessionStorage.setItem("token", token);
        }
        // Return the token
        return token;
    }

    
}