import net from "net";

const server = net.createServer((socket) => {
  console.log("Client connected");

  socket.on("data", (data) => {
    console.log(data.toString());
    socket.write("message received");
  });
  socket.on("end", () => {
    console.log("Client disconnected from disconnected server");
  });
  socket.on("error", (error) => {
    console.error("Socket error:", error.message);
  });
});

server.listen(8080, () => {
  console.log("Server listening on port 1234");
});
