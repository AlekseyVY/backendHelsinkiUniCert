const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const url = process.env.MONGO_URI

console.log('connecting to ', url)

mongoose.connect(url, {useNewUrlParser: true}).then(result => {
    console.log('connected to MongoDB')
}).catch((error) => {
    console.log('error connecting to MongoDB: ', error.message)
})

const personSchema = new mongoose.Schema ({
    name: {
        type: String,
        unique: true,
        minlength: 3,
        required: true
    },
    number: {
        type: String,
        unique: true,
        minlength: 8,
        required: true
    }
})

personSchema.plugin(uniqueValidator)

personSchema.set('toJSON', {
    transform: (document, returnObject) => {
        returnObject.id = returnObject._id.toString()
        delete returnObject._id
        delete returnObject.__v
    }
})

module.exports = mongoose.model('Person', personSchema)