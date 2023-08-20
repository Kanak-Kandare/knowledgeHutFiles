import express from "express";
import bodyParser from "body-parser";
import crypto, { verify } from "crypto";

const app = express();
app.use(bodyParser.json());

const user =[];
function hashedPassword(password) {
    const salt = crypto.randomBytes(16).toString("hex");
    const Password = crypto
        .pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex");
    return {salt, Password};
}

function verifyPassword  (password, salt)  {
    const hash = crypto
        .pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex");
    return hash;
}

app.get("/users", (req, res) => {
    res.status(200).json(user);
})

app.post("/users", (req, res) => {
    if(user.some((item) => item.username === req.body.username)) {
        res.status(200).json("User already exists")
    }
    else{
    const {username, password} = req.body;
    const {salt, Password} = hashedPassword(password)
    user.push({username,  salt, Password});
    res.status(200).json(user);
}
})

app.post("/login", (req, res) => {
    const {username, password} = req.body;
    const inpUser = user.find((item) => item.username === username);
    if(inpUser){
        const {salt, Password} = inpUser;
        const hash = verifyPassword(password, salt);
        if(hash === Password){
            res.status(200).json("Login successful");
        }
        else{
            res.status(200).json("Wrong password");
        }
    }
    else{
        res.status(200).json("User does not exist");
    }
})

app.listen(8080, () => {
    console.log("Server listening on port 8080");
})