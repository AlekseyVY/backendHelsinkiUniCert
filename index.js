express = require('express')
app = express()

const persons = [
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


app.listen(3001)