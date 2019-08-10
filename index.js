express = require('express')
app = express()

let persons = [
    {
        name: "Arto Hellias",
        number: "400-458-454523",
        id: 1
    },
        {
            name: "Aleksey Vasiliev",
            number: "0146468413464",
            id: 2
        },
        {
            name: "Beky Hardmund",
            number: "5649845198651654",
            id: 3
        },
        {
            name: "Ololo olololsh",
            number: "4976187461189",
            id: 4
        }
    ]

app.get('/api/persons', (req, resp) => {
    resp.send(persons)
})

app.get('/info', (req, res) => {
    const answer = {
        name: `Phonebook has info for ${persons.length} people`,
        date: Date()
    }
    res.send(answer)
})

app.get(`/persons/:id`, (req, res) => {
    const id = Number(req.params.id)
    const  person = persons.find(note => note.id === id)

    if( person ) {
        res.send(person)
    } else {
        res.send(404)
    }
})

app.delete('/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)

    res.send(204)
})


app.listen(3001)