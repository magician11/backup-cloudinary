/*
Script to download all images from a Cloudinary account.
*/

var request = require('request');
var fs = require('fs');

// account info
var API_KEY = "";
var API_SECRET = "";
var CLOUD_NAME = "";

request("https://" + API_KEY + ":" + API_SECRET + "@api.cloudinary.com/v1_1/" + CLOUD_NAME + "/resources/image", function (error, response, body) {
    if (!error && response.statusCode == 200) {

        imageData = JSON.parse(body).resources;
        fs.mkdir(CLOUD_NAME);

        for (image in imageData) {
            console.log("Saving " + imageData[image].url);
            request(imageData[image].url).pipe(fs.createWriteStream(CLOUD_NAME + "/" + imageData[image].public_id + '.' + imageData[image].format));
        }
    }
});
