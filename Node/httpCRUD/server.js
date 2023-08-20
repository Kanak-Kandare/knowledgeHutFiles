import http from "http";

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

const server = http.createServer((req, res) => {
    if(req.method === "GET"){
        res.writeHead(200, {
            "Content-Type": "application/json",
        });
        res.end(JSON.stringify(randomJSON));
    }

    else if(req.method === "POST"){
        let body = "";
        req.on("data", (data) => {
            body += data;
        });
        req.on("end", () => {
            res.writeHead(200, {
                "Content-Type": "application/json",
            })
            randomJSON.push(JSON.parse(body))
            res.end(JSON.stringify(randomJSON));
        })
    }

    else if(req.method === "DELETE"){
        let id = req.url.split("/")[1];
        randomJSON = randomJSON.filter((item) => {
            return item.id !== parseInt(id);
        })
        res.writeHead(200, {
            "Content-Type": "application/json",
        })
        res.end(JSON.stringify(randomJSON));
    }
    else if(req.method === "PUT"){
        let id = req.url.split("/")[1];
        let body = "";
        req.on("data", (data) => {
            body += data;
        });
        req.on("end", () => {
            res.writeHead(200, {
                "Content-Type": "application/json",
            })
            randomJSON = randomJSON.map((item) => {
                if(item.id === parseInt(id)){
                    item = JSON.parse(body)
                }
                return item
            })
            res.end(JSON.stringify(randomJSON));
        })
    }
})

server.listen(8080, () => {
    console.log("Server listening on port 8080");
})