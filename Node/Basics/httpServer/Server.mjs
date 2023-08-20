import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain",
  });
  res.write("Kanak connected to server");

  if (req.method === "POST") {
    let body = "";
    req.on("data", (data) => {
      body += data;
      res.end(body);
    });
  } else {
    res.end();
  }
});

server.listen(8080, () => {
  console.log("Server listening on port 8080");
});
