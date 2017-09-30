const argv = require('minimist')(process.argv.slice(2));
const request = require("request");
const fs = require('fs');
const mkdirp = require('mkdirp');

const urls = require('./config/urls.json');
const outputDir = `${argv.outputDir || 'output'}/`;

if (urls && urls.length > 0) {
  urls.forEach((url) => {
    request({
      uri: url.url,
    }, (error, response, body) => {
      const file = `${outputDir}${url.filename}.html`;
      
      mkdirp(outputDir, () => {
        fs.writeFile(file, body, (err) => {
          if (err) throw err;
          console.log(`${file} saved!`);
        });
      });
    });
  });
}
