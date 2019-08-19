
    const mongoose = require('mongoose')

    if ( process.argv.length<3 ) {
        console.log('give password as argument')
        process.exit(1)
    }

    const password = process.argv[2]
    const name = process.argv[3]
    const number = process.argv[4]

    const url =
        `mongodb+srv://Aleksey:${password}@cluster-kcbzv.mongodb.net/persons?retryWrites=true&w=majority`
    mongoose.connect(url, { useNewUrlParser: true })

    const personSchema = new mongoose.Schema({
        name: String,
        number: String,
        id: Number,
    })

    const Person = mongoose.model('Person', personSchema)

    const person = new Person({
        name: name,
        number: number,
        id: Math.random() * 1000
    })

    if (name && number) {
        person.save().then(response => {
            console.log(`added ${name} number: ${number} to phonebook`)
            mongoose.connection.close()
        })
    }

    if (process.argv.length === 3) {
        console.log('phonebook:')
        Person.find({}).then(result => {
            result.forEach(person => {
                console.log(person.name, person.number)
            })
            mongoose.connection.close()
        })
    }
