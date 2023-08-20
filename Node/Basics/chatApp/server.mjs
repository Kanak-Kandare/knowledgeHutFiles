import net from "net";

const clients = [];
const server = net.createServer((socket) => {
  clients.push(socket);

  socket.on("data", (data) => {
    brodcast(data);
  });

  socket.on("error", (error) => {
    console.error("Socket error:", error.message);
  });
});

function brodcast(data) {
  clients.forEach((client) => client.write(data));
}

server.listen(8080, () => {
  console.log("Server listening on port 8080");
});
