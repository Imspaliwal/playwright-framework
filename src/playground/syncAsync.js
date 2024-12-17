const fs = require("fs");

// Client ---> Request ---> Event Queues ---> Event Loop (pick the request from queues)
// Event Loop ---> Check if Blokcing Non-Blocking
// If Blokcing ---> Goes to Thread Pool ---> Assign the Thread (Thread Count depends on OS core)
// If Non-Blocking ---> Simply process it

// See the difference running both the code, comment either once running one code

console.log("Before Blocking Execution Done");

// Blocking Operation ...
// const result = fs.readFileSync("src/playground/test.txt", "utf-8");
// console.log(result);

// Non Blocking Operation ...
const reresults2 = fs.readFile("src/playground/test.txt", "utf-8", (err, result) => {
    console.log(result);
});

console.log("After Blocking Execution Done");

// When to use blokcing (sync) and when to use Non-blocking (async) operations?
