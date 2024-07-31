/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import fs from 'fs';
import qr from 'qr-image';

inquirer
  .prompt([
    {
      name: 'url',
      message: 'Enter the link you want to generate qr:',
    }
  ])
  .then((answers) => {
    const userUrl = answers.url;
    const fileName = 'qr-image.png';
 
    var qr_svg = qr.image(userUrl, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream(fileName));
    fs.writeFile('user_input.txt', userUrl, (err) => {
      if (err) throw err;
      console.log('The URL has been saved to user_input.txt');
    });

    console.log(`QR code generated and saved as ${fileName}`);
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
      console.log("Something else went wrong: ", error);
    }
  });
