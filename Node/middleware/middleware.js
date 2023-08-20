import express from "express";
import fs from "fs";

function log(req, res, next) {
  console.log(req.method, req.url);
  next();
}

function loggerfile(req, res, next) {
  fs.appendFileSync("server.txt", `${req.method} ${req.url}`);
  next();
}

const app = express();

app.use(log);
app.use(loggerfile);

app.get("/", (req, res) => {
  res.send("Hello World");
})

app.listen(8080, () => {
  console.log("Server listening on port 8080");
})