const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())

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

app.get('/api/info', (req, res) => {
    const answer = {
        name: `Phonebook has info for ${persons.length} people`,
        date: Date()
    }
    res.send(answer)
})

app.get(`/api/persons/:id`, (req, res) => {
    const id = Number(req.params.id)
    const  person = persons.find(note => note.id === id)

    if( person ) {
        res.send(person)
    } else {
        res.send(404)
    }
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)

    res.send(204)
})

const randomId = () => Math.random() * 1000

app.post('/api/persons', (req, res) => {
    const body = req.body
    if (!body.name || !body.number){
        return (
        res.status(400).json({
            error: 'Name or Number are missing check your input'
        }))
    }  if  (persons.find(per => per.name === body.name)) {
        return (
            res.status(400).json({
                error: 'Name must be unique'
            })
        )
    }
        const person = {
            name: body.name,
            number: body.number,
            id: randomId()
        }

    persons = persons.concat(person)

    res.send(person)
})

app.use(morgan('tiny'))

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`)
})