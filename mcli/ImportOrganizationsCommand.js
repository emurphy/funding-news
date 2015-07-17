var defaultOptions = { file: '/tmp/organizations.json' };

var importOrganizations = function(options) {
  var orgRoot = Npm.require(options.file);
  var orgs = orgRoot["root"];
  var orgCount = orgs.length;
  console.log('Importing ' + orgCount + ' organizations from file ' + options.file);

  for (i=0; i<orgCount; i++) {
    Organizations.insert(orgs[i]);
    if (i > 0 && i % 10000 == 0) {
      console.log('Imported ' + i + ' of ' + orgCount);
    }
  }

  console.log('Finished importing ' + orgCount + ' organizations');

};

CLI.registerCommand('import-organizations', importOrganizations, defaultOptions);
