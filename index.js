require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./modules/person')

app.use(express.static('build'))
app.use(bodyParser.json())
app.use(cors())

const errorHandler = (error, request, response, next) => {
    console.error(error.message)

    if(error.name === 'CastError' && error.kind === 'ObjectId') {
        return response.status(400).send({error: 'malformatted id'})
    } else if(error.name === 'ValidationError') {
        return response.status(400).json({error: error.message})
    }
    next(error)
}

app.use(errorHandler)


app.get('/api/persons', (request, response) => {
    Person.find({}).then(persons => {
        response.json(persons.map(person => person.toJSON()))
    })
})

/*app.get('/api/info', (req, res) => {
    const answer = {
        name: `Phonebook has info for ${persons.length} people`,
        date: Date()
    }
    res.send(answer)
})
*/
app.get(`/api/persons/:id`, (request, response) => {
    Person.findById(request.params.id).then(person => {
        response.json(person.toJSON())
    })
})

app.delete('/api/persons/:id', (request, response, next) => {
    Person.findByIdAndDelete(request.params.id).then(result => {
        response.status(204).end()
    }).catch(error => next(error))
})


app.post('/api/persons', (request, response, next) => {
    const body = request.body

    if(body.name === undefined) {
        return response.status(400).json({error: 'content missing'})
    }

    const person = new Person ({
        name: body.name,
        number: body.number
    })

    person.save().then(savedPerson => {
        response.json(savedPerson.toJSON())
    }).catch(error => next(error))

})

app.use(morgan('tiny'))

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`)
})