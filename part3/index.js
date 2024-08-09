const express = require('express')
const app = express()

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

app.use(express.json());

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

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})