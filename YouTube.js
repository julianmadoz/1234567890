function loadClient() {
    gapi.client.setApiKey("AIzaSyCF6BDKIVuMi-64nWVTz8Jf-_g-xN5HOaM");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
