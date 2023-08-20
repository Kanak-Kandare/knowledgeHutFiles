import readline from "readline";
import net from "net";

const rl = readline.createInterface(process.stdin, process.stdout);

const username = new Promise((resolve) => {
  rl.question("What is your name? ", (name) => {
    resolve(name);
  });
});

username.then((name) => {
  const client = net.createConnection({ port: 8080 }, () => {
    console.log("Client connected");
  });
  client.on("data", (data) => {
    console.log(data.toString());
  });
  rl.on("line", (data) => {
    client.write(name + ": " + data);
  });
});
