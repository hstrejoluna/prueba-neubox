let fs = require("fs")
let handle = "./file.txt";
let output = "./result.txt";

const readFileLines = filename =>
  fs
    .readFileSync(filename)
    .toString('UTF8')
    .split('\n');

const writeFile = (filename, winner) => {
  fs.open(filename, "w", function(err, f) {
    fs.writeFileSync(filename, winner.winner + " " + winner.diff)
  })
}

let primearr = readFileLines(handle);
if (parseInt(primearr[0]) > 1000) {
  console.log("el numero de rondas no es menor o igual a 1000");
  process.exit();
}
if (parseInt(primearr[0]) !== primearr.slice(1).length) {
  console.log(primearr[0] + " no es igual a el numero de rondas ingresadas: " + primearr.slice(1).length);
  process.exit();
}

let intarr = primearr.slice(1)
  .map(e => e.split(" ")
    .map(i => parseInt(i)))

let results = intarr.map(
  (curr, i, array) => {
    array[i][0] += array[i - 1] ? array[i - 1][0] : 0
    array[i][1] += array[i - 1] ? array[i - 1][1] : 0
    diff = Math.abs(array[i][0] - array[i][1])
    return {
      "scorej1": array[i][0],
      "scorej2": array[i][1],
      "winner": array[i][0] > array[i][1] ?
        "1" : "2",
      "diff": diff
    }
  })

let winnerdiff = Math.max(...results.map((e) => e.diff))
let winner = results.filter((e) => e.diff === winnerdiff)[0]
writeFile(output, winner)
//console.log(winner)