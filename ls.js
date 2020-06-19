const fs = require('fs');

const listFiles = () => {
  process.stdin.on("data", data => {
    const cmd = data.toString().trim();

    if (cmd === "listFiles") {
      fs.readdir('./', 'utf8', (err, files) => {
        if(err){
          throw err
        } else {
          process.stdout.write(files.join('\n'))
          process.stdout.write("\nprompt > ");
        }
      })
    } else {
      process.stdout.write("You wrote: " + cmd);
      process.stdout.write("\nprompt > ");
    }
  });
};

module.exports.listFiles = listFiles;
