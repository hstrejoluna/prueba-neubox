let fs = require("fs");
let handle = "./file.txt";
let output = "./result.txt";

const readFileLines = (filename) =>
  fs.readFileSync(filename).toString("UTF8").split("\n");

const findFunction = (word, longth, filename) => {
  var reducer = longth.replace(/(.)\1+/g, "$1");
  var findString = reducer.search(word);

  findString > 0
    ? fs.open(filename, "w", function (err, f) {
        fs.writeFileSync(filename, "SI");
      })
    : fs.open(filename, "w", function (err, f) {
        fs.appendFile(filename, "\nNO", function (err) {
          if (err) throw err;
        });
      });
};

let arr = readFileLines(handle);

let msg = {
  metrics: arr[0].split(" "),
  first: arr[1],
  second: arr[2],
  enter: arr[3],
};

if (msg.metrics.length !== 3) {
  console.log("Input three positive integers");
  process.exit();
}

if (msg.metrics[2] < 3 || msg.metrics[2] > 5000) {
  console.log("Incorrect message length (3-5000)");
  process.exit();
}
if (!/^[0-9a-zA-Z]+$/.test(msg.enter)) {
  console.log("Message contains irregular characters");
  process.exit();
}
if (
  msg.metrics[0] < 2 ||
  msg.metrics[0] > 50 ||
  msg.metrics[1] < 2 ||
  msg.metrics[1] > 50 ||
  msg.metrics[2] < 2 ||
  msg.metrics[2] > 50
) {
  console.log("Incorrect instructions length (2-50)");
  proccess.exit();
}
arr[1].length == msg.metrics[0]
  ? findFunction(msg.first, msg.enter, output)
  : console.log("first number doesn't match");

arr[2].length == msg.metrics[1]
  ? findFunction(msg.second, msg.enter, output)
  : console.log("second number doesn't match");
