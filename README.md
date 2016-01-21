backup-cloudinary
=================

This script copies all images (to a maximum of 500) from a Cloudinary account to your local disk.

If your cloud name is "magician", then on running this script it'll download the images into a subdirectory called 'magician'.

To get this working, you need to do 4 things.

1. Clone this repository: git clone https://github.com/magician11/backup-cloudinary.git
2. Edit backup-cloudinary.js by adding in your account details. You'll need to add in your API_KEY, API_SECRET and CLOUD_NAME. You'll find these values in your Dashboard (https://cloudinary.com/console)
3. Run it: `npm start`

More details on the Cloudinary API can be found at http://cloudinary.com/documentation/admin_api

Any questions, get in touch with us http://golightlyplus.com
