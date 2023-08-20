import net from "net";

const client = net.createConnection({ port: 8080 }, () => {
  console.log("Client connected");
  client.write("Hello Kanak");
});
client.on("end", () => {
  console.log("Client disconnected from disconnected server");
});

client.on("data", (data) => {
  console.log(data.toString());
});
process.on("SIGINT", () => {
  console.log("Client terminating...");
  client.end();
  process.exit();
});
// client.end();