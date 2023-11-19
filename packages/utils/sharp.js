const sharp = require('sharp');


sharp('logo.png')
    .resize(95)
    .greyscale()
    .toFile('logo-start-90.png');



