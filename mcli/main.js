var mainCalled = false;

if (process.env.METEOR_NO_WEBAPP) {
  mcliMain = function () {
    if (mainCalled) {
      throw new Error("main was already called!");
    }

    CLI.executeCommand();
  };
  mcliMain();
  process.exit(0);
}