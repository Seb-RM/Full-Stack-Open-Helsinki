const express = require('express')
const morgan = require("morgan");

const app = express()

app.use(morgan("tiny"));

let data = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456",
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523",
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "12-43-234345",
    },
    {
        id: 4,
        name: "Mary Poppendieck",
        number: "39-23-6423122",
    },
];

const cors = require("cors");

app.use(cors());

app.use(express.json());

morgan.token("body", (req) => {
    return req.method === "POST" ? JSON.stringify(req.body) : "";
});

app.use(
    morgan(":method :url :status :res[content-length] - :response-time ms :body")
);

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.get("/api/persons", (request, response) => {
    console.log(data);
    response.json(data);
});

app.get("/info", (request, response) => {
    const currentDate = new Date();
    const count = data.length;

    response.send(`
            <p>Phonebook has info for ${count} people</p>
            <p>${currentDate}</p>
        `);
});

app.get("/api/persons/:id", (request, response) => {
    const id = Number(request.params.id);
    const person = data.find((person) => person.id === id);

    if (person) {
        response.json(person);
    } else {
        response.status(404).send({ error: "Person not found" });
    }
});

app.delete("/api/persons/:id", (request, response) => {
    const id = Number(request.params.id);

    console.log(id);

    const person = data.find((person) => person.id === id);

    if (!person) {
        return response.status(404).json({ error: "Person not found" });
    }

    data = data.filter((person) => person.id !== id);

    response.status(204).end();
});

app.post("/api/persons", (request, response) => {
    const body = request.body;

    console.log(body);

    if (!body.name || !body.number) {
        return response.status(400).json({
        error: "Name or number is missing",
        });
    }

    const nameExists = data.some((person) => person.name === body.name);
    if (nameExists) {
        return response.status(400).json({
        error: "Name must be unique",
        });
    }

    const newId = Math.floor(Math.random() * 1000000);

    const newPerson = {
        id: newId,
        name: body.name,
        number: body.number,
    };

    data = data.concat(newPerson);

    response.json(newPerson);
});

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})