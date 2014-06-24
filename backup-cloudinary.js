/*
Node.js script to download all images from a Cloudinary account.
*/

var request = require('request');
var fs = require('fs');

// account info
var CLOUD_NAME = "";
var API_KEY = "";
var API_SECRET = "";

request("https://" + API_KEY + ":" + API_SECRET + "@api.cloudinary.com/v1_1/" + CLOUD_NAME + "/resources/image?max_results=500", function (error, response, body) {
    if (!error && response.statusCode == 200) {

        var jsonResponse = JSON.parse(body);

        if(jsonResponse.next_cursor) {
            console.error("You have more images on the server that can be accessed at once. Aborting..");
            return;
        }

        var images = jsonResponse.resources;

        console.log("About to download " + images.length + " images.");

        fs.mkdir(CLOUD_NAME);
        for (image in images) {
         
            console.log("Saving " + images[image].url);
            request(images[image].url).pipe(fs.createWriteStream(CLOUD_NAME + "/" + images[image].public_id + '.' + images[image].format));
        }
    }
});