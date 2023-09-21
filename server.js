// Exercise 1: create folder, create package.json using npm init and execute code in server.js file

// const http = require("http");

// http
//   .createServer((req, res) => {
//     res.writeHead(200, {
//       "Content-Type": "text/plain",
//     });

//     res.end("Hello World");
//   })
//   .listen(3000);
// console.log("Server running at http://localhost:3000/");

// Exercise 2: npm install connect and execute new code including connect
// const connect = require("connect");
// const app = connect();

// function helloWorld(req, res, next) {
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World");
// }

// app.use(helloWorld);
// app.listen(3000);
// console.log("Server running at http://localhost:3000/");

// Exercise 3: write a code that has three middlewares logger, helloWorld, goodbyeWorld and run them by using http://localhost:3000/name_of_path
const connect = require("connect");
const app = connect();

function logger(req, res, next) {
  console.log(req.method, req.url);

  next();
}

function helloWorld(req, res, next) {
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
}

function goodbyeWorld(req, res, next) {
  res.setHeader("Content-Type", "text/plain");
  res.end("Goodbye World");
}
app.use(logger);
app.use("/hello", helloWorld);
app.use("/goodbye", goodbyeWorld);
app.listen(3000);
console.log("Server running at http://localhost:3000/");
