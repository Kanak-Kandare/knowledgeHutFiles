import  express  from "express";
import bodyParser from "body-parser";

let randomJSON =[
    {
    "id": 1,
    "name": "John Doe",
    "age": 28,
    "email": "john.doe@example.com",
    "city": "New York",
    "occupation": "Software Engineer"
},
    {
    "id": 2,
    "name": "Jane Smith",
    "age": 35,
    "email": "jane.smith@example.com",
    "city": "Los Angeles",
    "occupation": "Marketing Manager"
},
    {
    "id": 3,
    "name": "Bob Johnson",
    "age": 42,
    "email": "bob.johnson@example.com",
    "city": "Chicago",
    "occupation": "Sales Representative"
},
    {
    "id": 4,
    "name": "Alice Williams",
    "age": 24,
    "email": "alice.williams@example.com",
    "city": "San Francisco",
    "occupation": "Graphic Designer"
},
{
    "id": 5,
    "name": "Mike Brown",
    "age": 31,
    "email": "mike.brown@example.com",
    "city": "Houston",
    "occupation": "Teacher"
}  
]

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.status(200).json(randomJSON);
})

app.post("/", (req, res) => {
    const body = req.body;
    randomJSON.push(body);
    res.status(200).json(randomJSON);
})

app.delete("/:id(\\d+)", (req, res) => {
    const id = req.params.id;
    randomJSON = randomJSON.filter((item) => {
        return item.id !== parseInt(id);
    })
    res.status(200).json(randomJSON);
})

app.put("/:id", (req, res) => {
    const id = req.params.id;
    const updatedItem = req.body;
    randomJSON = randomJSON.map((item) => {
        if (item.id === parseInt(id)) {
            item = updatedItem
        }
        return item;
    })
    
    res.status(200).json(randomJSON);
})

app.all("*", (req, res) => {
    res.status(404).send("wrong url");
})

app.listen(8080, () => {
    console.log("Server listening on port 8080");
})