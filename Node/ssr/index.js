import express from "express";

const app = express();
app.set("view engine", "pug");

app.get("/login", (req, res) => {
    res.render("login");
})

app.post("/dashboard", (req, res) => {
    res.render("dashboard",{
        title: "Dashboard",
        uname: "Kanak",
        posts:[{
            title: "Post 1",
            body: "This is post 1"
        },{
            title: "Post 2",
            body: "This is post 2"
        },
        {
            title: "Post 3",
            body: "This is post 3"
        }]
    });
})

app.get("/logout", (req, res) => {
    res.redirect("/login");
})

app.listen(8080, () => {
    console.log("Server listening on port 8080");
})