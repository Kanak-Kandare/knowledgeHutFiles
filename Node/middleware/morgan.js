import express from "express"
import morgan from "morgan"

const app = express()
app.use(morgan("tiny"))

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get("/login", (req, res) => {
    res.send("Login page")
})

app.listen(8080, () => {
    console.log("Server listening on port 8080")
})