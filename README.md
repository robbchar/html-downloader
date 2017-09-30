html downloader - will read from a list of urls to download and save the html

# Required
Install [NodeJs](https://nodejs.org/).

# Running
+ once downloaded install dependancies: `npm install`
+ type this on the command line: `node index.js`

# Config
__urls__: stored in config/urls.json, this is a json formatted set of filenames/urls to download and save. An example:

```
[
  { "filename": "google", "url": "http://www.google.com" },
  { "filename": "myfonts", "url": "http://www.myfonts.com" },
  { "filename": "microsoft", "url": "http://www.microsoft.com" }
]
```

# Command line parameters
+ outputDir: default `output/` example custom output directory: `node index.js --outputDir=temp`
