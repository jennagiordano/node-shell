const myPwd = () => {
  process.stdin.on("data", data => {
    const cmd = data.toString().trim();

    if (cmd === "myPwd") {
      const pwd = process.cwd();
      process.stdout.write(pwd);
    } else {
      process.stdout.write("You wrote: " + cmd);
    }

    process.stdout.write("\nprompt > ");
  });
};

module.exports.myPwd = myPwd;
