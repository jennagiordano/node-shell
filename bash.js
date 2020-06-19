process.stdout.write("prompt > ");

const myPwd = require("./pwd");
const listFiles = require("./ls");

listFiles.listFiles();
myPwd.myPwd();
