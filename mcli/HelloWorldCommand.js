var defaultOptions = { stderr: false };

var helloWorld = function(options) {
  if(options.stderr)
    console.error("Hello world from practicalmeteor:mcli!");
  else
    console.info("Hello world from practicalmeteor:mcli!");
};

CLI.registerCommand('hello-world', helloWorld, defaultOptions);
